function jc(a){if(!a)return!1;a instanceof Array||(a=[a]);return a}var kc=[33,34,35,36,37,38,39,40,41];function lc(a){return 31==a?"oblique":32==a?"italic":"normal"}function mc(a,c,b){if(a=a?aa(a):ba){if(c){"string"===typeof c&&(c=[c]);for(var d=0,e=c.length;d<e;d++)a.classList.add(c[d])}if(b)for("string"===typeof b&&(b=[b]),d=0,e=b.length;d<e;d++)a.classList.remove(b[d])}}
function nc(a,c,b){var d=a[4],e=jc(a[5]);if(!b)var f=jc(a[6]),g=a[42];var h,k,p,n,r,x,q;J(0,function(){for(var t=0,u=a[3].length;t<u;t++){h=a[3][t];p=h[4]||d;n=h[5]||e;b||(25===p?r=!1:(r=h[6]||f,g&&!r&&(r=[22])));for(var w=0,I=h[27].length;w<I;w++)k=h[27][w],function(a,d,e,f,u,g){function h(a){c(d,k,f,u,g,x,void 0,a)}var k={};e&&(e[20]&&(k.weight=100*(kc.indexOf(e[20])+1)),e[21]&&(k.style=lc(e[21])),e[22]&&(k.stretch=e[22]),b||(e[23]&&(k.variant=e[23]),e[24]&&(k.unicodeRange=e[24]),e[25]&&(k.featureSettings=
e[25])));q=a[8];x=a[9];q&&(q[7]&&q[7]in m&&m[q[7]].call(m,d),q[10]&&mc(q[10][11],q[10][12],q[10][13]));25===f?K(u,h):27===f?J(0,h):h()}(h,k,k[28],p,n,r)}})};
