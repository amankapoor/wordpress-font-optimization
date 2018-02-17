<?php
namespace O10n;

/**
 * Database Controller
 *
 * @package    optimization
 * @subpackage optimization/controllers
 * @author     o10n-x <info@optimization.team>
 */
if (!defined('ABSPATH')) {
    exit;
}

class Db extends Controller implements Controller_Interface
{
    private $mysqli = false; // use MySQLi?
    private $last_result;

    /**
     * Load controller
     *
     * @param  Core       $Core Core controller instance.
     * @return Controller Controller instance.
     */
    public static function &load(Core $Core)
    {
        // instantiate controller
        return parent::construct($Core, array(
            
        ));
    }

    /**
     * Setup controller
     */
    protected function setup()
    {

        // detect MySQLi support
        if (function_exists('mysqli_connect')) {
            if (defined('WP_USE_EXT_MYSQL')) {
                $this->mysqli = ! WP_USE_EXT_MYSQL;
            } elseif (version_compare(phpversion(), '5.5', '>=') || ! function_exists('mysql_connect')) {
                $this->mysqli = true;
            } elseif (false !== strpos($GLOBALS['wp_version'], '-')) {
                $this->mysqli = true;
            }
        }
    }

    /**
     * Execute MySQL query
     *
     * @param  string   $query MySQL query.
     * @return resource MySQL query resource.
     */
    final public function query($query, $onTableError = false)
    {
        if ($this->mysqli) {
            \mysqli_query($this->wpdb->dbh, $query);
        } else {
            $this->last_result = \mysql_query($query, $this->wpdb->dbh);
        }


        if (($last_error = $this->last_error()) && $last_error) {

            // table does not exist
            if ($onTableError && $last_error[0] === 1146) {
                if (is_string($onTableError)) {
                    switch ($onTableError) {

                        // create cache tables
                        case "cache":
                            Core::get('cache')->create_tables();
                        break;
                    }
                } else {
                    call_user_func($onTableError);
                }

                // try again
                return $this->query($query);
            }

            throw new Exception('MySQL query failed. ' . $last_error[0] . ': ' . $last_error[1], 'db');
        }

        return $this->last_result;
    }

    /**
     * Number of rows in result
     *
     * @param  resource $result MySQL result resource.
     * @return int      Number of rows.
     */
    final public function num_rows($result = false)
    {
        if (!$result) {
            $result = $this->last_result;
        }

        if ($this->mysqli) {
            return $result->num_rows;
        } else {
            return @\mysql_num_rows($result);
        }
    }

    /**
     * Number of rows in result
     *
     * @param  resource $result MySQL result resource.
     * @return int      Number of rows.
     */
    final public function insert_id($result = false)
    {
        if (!$result) {
            $result = $this->last_result;
        }

        if ($this->mysqli) {
            return $result->insert_id;
        } else {
            return @\mysql_insert_id($result);
        }
    }

    /**
     * Fetch assoc row from result
     *
     * @param  resource $result MySQL result resource.
     * @return array    Result row.
     */
    final public function fetch($result = false, $free_result = false)
    {
        if (is_string($result)) {
            $result = $this->query($result);
            $free_result = true;
        } elseif (!$result) {
            $result = $this->last_result;
        }

        // fetch
        if ($this->mysqli) {
            $row = @\mysqli_fetch_assoc($result);
        } else {
            $row = @\mysql_fetch_array($result, MYSQL_ASSOC);
        }

        if ($free_result) {
            $this->free_result($result);
        }

        return $row;
    }

    /**
     * Free result
     *
     * @param  resource $result MySQL result resource.
     * @return null
     */
    final public function free_result($result = false)
    {
        if (!$result) {
            $result = $this->last_result;
        }
        if (!$result) {
            return;
        }
        if ($this->mysqli) {
            return @\mysqli_free_result($result);
        } else {
            return @\mysql_free_result($result);
        }
    }

    /**
     * Free result
     *
     * @param  string $str String to escape.
     * @return string Escaped string.
     */
    final public function escape($str)
    {
        if ($this->mysqli) {
            return \mysqli_real_escape_string($this->wpdb->dbh, $str);
        } else {
            return \mysql_real_escape_string($str, $this->wpdb->dbh);
        }
    }

    /**
     * Return last error
     */
    final public function last_error()
    {
        if ($this->mysqli) {
            if (mysqli_errno($this->wpdb->dbh)) {
                return array(mysqli_errno($this->wpdb->dbh),mysqli_error($this->wpdb->dbh));
            }
        } else {
            if (mysql_errno()) {
                return array(mysql_errno(), mysql_error());
            }
        }

        return false;
    }
}
