function Hc(a){if(!a)return!1;a instanceof Array||(a=[a]);return a}var Ic=[33,34,35,36,37,38,39,40,41];function Jc(a){return 31==a?"oblique":32==a?"italic":"normal"}function Kc(a,c,b){if(a=a?aa(a):ca){if(c){"string"===typeof c&&(c=[c]);for(var d=0,e=c.length;d<e;d++)a.classList.add(c[d])}if(b)for("string"===typeof b&&(b=[b]),d=0,e=b.length;d<e;d++)a.classList.remove(b[d])}}
function Lc(a,c,b){var d=a[4],e=Hc(a[5]);if(!b)var f=Hc(a[6]),h=a[42];var k,g,p,n,r,t,q;H(0,function(){for(var v=0,w=a[3].length;v<w;v++){k=a[3][v];p=k[4]||d;n=k[5]||e;b||(25===p?r=!1:(r=k[6]||f,h&&!r&&(r=[22])));for(var x=0,I=k[27].length;x<I;x++)g=k[27][x],function(a,d,e,f,g,k){function h(a){c(d,v,f,g,k,t,w,a)}var w=JSON.stringify(d),v={};e&&(e[20]&&(v.weight=100*(Ic.indexOf(e[20])+1)),e[21]&&(v.style=Jc(e[21])),e[22]&&(v.stretch=e[22]),b||(e[23]&&(v.variant=e[23]),e[24]&&(v.unicodeRange=e[24]),
e[25]&&(v.featureSettings=e[25])));q=a[8];t=a[9];q&&(q[7]&&q[7]in m&&m[q[7]].call(m,d),q[10]&&Kc(q[10][11],q[10][12],q[10][13]));25===f?P(g,h,w):27===f?H(0,h):h()}(k,g,g[28],p,n,r)}})};
