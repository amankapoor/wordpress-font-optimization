function P(a,c,b,d){switch(a[0]){case 21:M("domready"+b);ta(function(){var a=M("_domready"+b,"domready"+b,"domReady","domReady");c(["domReady","\u00f8",a])});break;case 22:var e=1;a[1]&&a[1][15]&&(e=a[1][15]);M("raf"+b);RAF(function(){var a=M("_raf"+b,"raf"+b,"requestAnimationFrame","rAF");c(["rAF frame #",e,a])},e);break;case 23:var f,h;a[1]&&a[1][16]&&(f=a[1][16]);a[1]&&a[1][17]&&(h=function(b){setTimeout(b,a[1][17])});M("ric"+b);D(function(){var a=M("_ric"+b,"ric"+b,"requestIdleCallback","rIC");
c(["rIC",f?f:"\u00f8",a])},f,h);break;case 24:var k,g;a[1]&&a[1][18]&&(k=a[1][18]);a[1]&&a[1][19]&&(g=a[1][19]);M("inview"+b);oc(k,g,function(){var a=M("_inview"+b,"inview"+b,"inview","inview");c(["inView",k,a])});break;case 20:var p="all";a[1]&&a[1][20]&&(p=a[1][20]);Qa(p,function(){c([{responsive:p},"\u00f8",null])},function(){var a={responsive:p};d&&d([a,"\u00f8",null])})}};
