window.a=function(f,c){function u(){var b=c(this).closest(".o10n-notice").attr("rel");b&&e[24]("delete_notice",{b:b},function(d){d?e[51]("error",d,!1,!0,function(){}):e[8]("","Notice deleted",b)})}function h(b,d,c){var e;if(g)if(100<k&&g.clear&&(g.clear(),k=0),c||(c="white"),d=Array.prototype.slice.call(d),g){var f=d.shift();switch(f="admin"+(f?"."+f:""),d.unshift("font-size:12px;font-weight:bold;color:"+c+";margin-right:1px;"),d.unshift("font-size:10px;"),d.unshift("font-size:10px;font-weight:bold;"),
b){case "ok":d.unshift("font-size:14px;font-weight:bold;color:green;margin-right:2px;");e="%c\u2714";b="log";break;case "warn":d.unshift("font-size:14px;font-weight:bold;color:orange;margin-right:2px;");e="%c\u26a0";b="log";break;default:e=""}d.unshift("font-size:12px;font-weight:bold;color:"+c+";margin-right:1px;");d.unshift("%c\u2772"+e+"%co10n%c."+f+"%c\u2773");g[b]||(b="log");try{g[b].apply(this,d),k++}catch(w){throw Error(d.join(" - "));}}else if("error"===b)throw Error(d.join(" - "));}O10N=
{};var e={},l={},m={},q=!1,r=!1,n=[],p=[];O10N[0]=function(b){if("object"!=typeof b)return e[11]("","Client configuration invalid",b);for(var d in b)b.hasOwnProperty(d)&&(7===(d=parseInt(d))?m=b[d]:l[d]=b[d]);for(b=p.shift();b;)b(),b=p.shift();r=!0;c(function(){for(var b=n.shift();b;)b(),b=n.shift();q=!0})};e[14]=function(b){q?b():n.push(b)};e[25]=function(){return Math.round(+new Date/1E3)};O10N[1]=function(b){r?O10N=b(f,c,O10N,l,e,m):p.push(function(){O10N=b(f,c,O10N,l,e,m)})};var v=f.requestAnimationFrame?
f.requestAnimationFrame:f.webkitRequestAnimationFrame||f.mozRequestAnimationFrame||f.oRequestAnimationFrame||f.msRequestAnimationFrame||function(b){f.setTimeout(b,1E3/60)};e[15]=O10N[15]=function(){v.apply(f,arguments)};var t=void 0!==f.requestIdleCallback&&null!==f.requestIdleCallback&&f.requestIdleCallback;e[16]=function(b,d,c){if("function"!=typeof b)return e[11]("","requestIdleCallback not a function",arguments);t?t(b,{timeout:d}):(void 0===c&&(c=100),setTimeout(b,c))};"content"in document.createElement("template")||
c(function(){for(var b=document.getElementsByTagName("template"),d=b.length,c=0;c<d;++c){for(var e=b[c],f=e.childNodes,g=document.createDocumentFragment();f[0];)g.appendChild(f[0]);e.content=g}});var g=f.console,k=0;e[8]=function(){h("log",arguments,"#079c2d")};e[12]=function(){h("ok",arguments,"#079c2d")};e[9]=function(){h("info",arguments,"#4285f4")};e[10]=function(){h("warn",arguments,"#fbbc05")};e[11]=function(){h("error",arguments,"#ea4335")};return e[51]=function(b,d,f,g,h){switch(b){case "ok":d=
'<div class="updated inline notice-flap is-dismissable" style="opacity:0.2;"><p>'+d+"</p></div>";break;case "error":d='<div class="error inline" style="opacity:0.2;"><p>'+d+"</p></div>";break;default:return e[11]("","invalid notice type",b)}return d=c(d),c("#o10n-notices .inline").css({opacity:1}),c("#o10n-notices").append(d),c("html, body").stop().animate({scrollTop:d.offset().top-40},250,"swing",function(){d.fadeTo(1500,100);f&&setTimeout(function(){d.fadeOut(1E3,function(){d.remove()})},f);h&&
h(d)}),d},e[14](function(){function b(){0<c(".o10n-notice .notice-dismiss").length&&c(".o10n-notice .notice-dismiss").not("data[o10n-notice]").data("o10n-notice",1).on("click",u)}e[16](function(){e[15](function(){1<c(".wrap .other-notices > div").length&&(c(".other-notices .wp-header-end").remove(),c(".other-notices-notice .count").html(c(".wrap .other-notices > div").length),c(".other-notices-notice").show(),c(".other-notices-notice").css("visibility","visible"),c(".other-notices-notice .show").on("click",
function(){c(".other-notices").is(":visible")?(c(".other-notices").hide(),c(this).html(c(this).data("show"))):(c(".other-notices").fadeIn({duration:200}),c(this).data("show")||c(this).data("show",c(this).html()),c(this).html(c(this).data("hide")))}))})},1E3,10);b();setTimeout(b,1E3)}),O10N}(window,jQuery);
