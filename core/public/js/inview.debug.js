function Zb(a,c){var b;if((b=(b=a)&&!b.nodeType?b[0]:b)&&1===b.nodeType){b=b.getBoundingClientRect();var d=c,e={};d||(d=0);d=+d||0;e.width=(e.right=b.right+d)-(e.left=b.left-d);e.height=(e.bottom=b.bottom+d)-(e.top=b.top-d);b=e}else b=!1;if(d=!!b&&0<=b.bottom&&0<=b.right)d=ba.clientHeight,e=m.innerHeight,d=b.top<=(d<e?e:d);d&&(d=ba.clientWidth,e=m.innerWidth,d=b.left<=(d<e?e:d));return d}var $b=[],ac;
ra("scroll",function(){$b.length&&(ac&&clearTimeout(ac),ac=setTimeout(function(){for(var a=$b.splice(0),c=[],b=a.shift(),d=0;b;){if(b&&Zb(b[0],b[1]))b[2]();else c.push(b);b=a.shift();d++}$b=$b.concat(c)}))},m);function bc(a,c,b){sa(function(){var d=aa(a);d&&(Zb(d,c)?b():$b.push([d,c,b]))})}y.inview=bc;