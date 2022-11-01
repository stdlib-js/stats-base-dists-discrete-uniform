// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,a=t.__defineSetter__,o=t.__lookupGetter__,u=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,f.get),p&&a&&a.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function s(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function p(r){return l(r)===r}function y(r){return r!=r}function g(r,n,t){return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t?NaN:r<n?0:r>=t?1:(l(r)-n+1)/(t-n+1)}function h(r){return function(){return r}}function v(r,n,t){f(r,n,{configurable:!1,enumerable:!1,get:t})}function b(r){return"number"==typeof r}s(g,"factory",(function(r,n){var t,e;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(t=r-1,e=n-r+1,function(i){if(y(i))return NaN;if(i<r)return 0;if(i>=n)return 1;return(l(i)-t)/e})}));var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return d&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var N=Object.prototype.hasOwnProperty;var A="function"==typeof Symbol?Symbol.toStringTag:"";var E=w()?function(r){var n,t,e,i,a;if(null==r)return m.call(r);t=r[A],a=A,n=null!=(i=r)&&N.call(i,a);try{r[A]=void 0}catch(n){return m.call(r)}return e=m.call(r),n?r[A]=t:delete r[A],e}:function(r){return m.call(r)},_=Number,U=_.prototype.toString;var k=w();function S(r){return"object"==typeof r&&(r instanceof _||(k?function(r){try{return U.call(r),!0}catch(r){return!1}}(r):"[object Number]"===E(r)))}function x(r){return b(r)||S(r)}s(x,"isPrimitive",b),s(x,"isObject",S);var I=Number.POSITIVE_INFINITY,j=_.NEGATIVE_INFINITY;function V(r){return r<I&&r>j&&p(r)}function F(r){return b(r)&&V(r)}function T(r){return S(r)&&V(r.valueOf())}function O(r){return F(r)||T(r)}s(O,"isPrimitive",F),s(O,"isObject",T);var M="function"==typeof Uint32Array;var $="function"==typeof Uint32Array?Uint32Array:null;var G,P="function"==typeof Uint32Array?Uint32Array:void 0;G=function(){var r,n,t;if("function"!=typeof $)return!1;try{n=new $(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(M&&t instanceof Uint32Array||"[object Uint32Array]"===E(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var R=G,H="function"==typeof Float64Array;var W="function"==typeof Float64Array?Float64Array:null;var C,L="function"==typeof Float64Array?Float64Array:void 0;C=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===E(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var q=C,Z="function"==typeof Uint8Array;var X="function"==typeof Uint8Array?Uint8Array:null;var Y,z="function"==typeof Uint8Array?Uint8Array:void 0;Y=function(){var r,n,t;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,256,257]),t=n,r=(Z&&t instanceof Uint8Array||"[object Uint8Array]"===E(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var D=Y,B="function"==typeof Uint16Array;var J="function"==typeof Uint16Array?Uint16Array:null;var K,Q="function"==typeof Uint16Array?Uint16Array:void 0;K=function(){var r,n,t;if("function"!=typeof J)return!1;try{n=new J(n=[1,3.14,-3.14,65536,65537]),t=n,r=(B&&t instanceof Uint16Array||"[object Uint16Array]"===E(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,nr={uint16:K,uint8:D};(rr=new nr.uint16(1))[0]=4660;var tr=52===new nr.uint8(rr.buffer)[0],er=!0===tr?1:0,ir=new q(1),ar=new R(ir.buffer);function or(r){return ir[0]=r,ar[er]}var ur=!0===tr?1:0,fr=new q(1),cr=new R(fr.buffer);function sr(r,n){return fr[0]=r,cr[ur]=n>>>0,fr[0]}var lr=.6931471803691238,pr=1.9082149292705877e-10;function yr(r){var n,t,e,i,a,o,u,f,c,s,l,p;return 0===r?j:y(r)||r<0?NaN:(a=0,(t=or(r))<1048576&&(a-=54,t=or(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-1023|0,a+=(f=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=sr(r,t|1072693248^f))-1,(1048575&2+t)<3?0===u?0===a?0:a*lr+a*pr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*lr-(o-a*pr-u)):(f=t-398458|0,c=440401-t|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*lr-(n-(s*(n+o)+a*pr)-u)):0===a?u-s*(u-o):a*lr-(s*(u-o)-a*pr-u))))}function gr(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:yr(n-r+1)}function hr(r){return p(r/2)}function vr(r){return hr(r>0?r-1:r+1)}function br(r){return r===I||r===j}var dr,wr,mr=Math.sqrt;function Nr(r){return Math.abs(r)}!0===tr?(dr=1,wr=0):(dr=0,wr=1);var Ar={HIGH:dr,LOW:wr},Er=new q(1),_r=new R(Er.buffer),Ur=Ar.HIGH,kr=Ar.LOW;function Sr(r,n){return Er[0]=n,r[0]=_r[Ur],r[1]=_r[kr],r}function xr(r,n){return 1===arguments.length?Sr([0,0],r):Sr(r,n)}var Ir,jr,Vr=!0===tr?0:1,Fr=new q(1),Tr=new R(Fr.buffer);function Or(r,n){return Fr[0]=r,Tr[Vr]=n>>>0,Fr[0]}function Mr(r){return 0|r}!0===tr?(Ir=1,jr=0):(Ir=0,jr=1);var $r={HIGH:Ir,LOW:jr},Gr=new q(1),Pr=new R(Gr.buffer),Rr=$r.HIGH,Hr=$r.LOW;function Wr(r,n){return Pr[Rr]=r,Pr[Hr]=n,Gr[0]}var Cr=[0,0];function Lr(r,n){var t,e;return xr(Cr,r),t=Cr[0],t&=2147483647,e=or(n),Wr(t|=e&=2147483648,Cr[1])}var qr=[1,1.5],Zr=[0,.5849624872207642],Xr=[0,1.350039202129749e-8];function Yr(r,n,t,e){return y(r)||br(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Nr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}s((function(r){return Yr(r,[0,0],1,0)}),"assign",Yr);var zr=[0,0],Dr=[0,0];function Br(r,n){var t,e;return 0===n||0===r||y(r)||br(r)?r:(Yr(r,zr,1,0),n+=zr[1],n+=function(r){var n=or(r);return(n=(2146435072&n)>>>20)-1023|0}(r=zr[0]),n<-1074?Lr(0,r):n>1023?r<0?j:I:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,xr(Dr,r),t=Dr[0],t&=2148532223,e*Wr(t|=n+1023<<20,Dr[1])))}var Jr=1e300,Kr=1e-300,Qr=[0,0],rn=[0,0];function nn(r,n){var t,e,i,a,o,u,f,c,s,l,g,h,v,b;if(y(r)||y(n))return NaN;if(xr(Qr,n),o=Qr[0],0===Qr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return mr(r);if(-.5===n)return 1/mr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(br(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Nr(r)<1==(n===I)?0:I}(r,n)}if(xr(Qr,r),a=Qr[0],0===Qr[1]){if(0===a)return function(r,n){return n===j?I:n===I?0:n>0?vr(n)?r:0:vr(n)?Lr(I,r):I}(r,n);if(1===r)return 1;if(-1===r&&vr(n))return-1;if(br(r))return r===j?nn(-0,-n):n<0?0:I}if(r<0&&!1===p(n))return(r-r)/(r-r);if(i=Nr(r),t=2147483647&a|0,e=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&vr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&or(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Jr*Jr:u*Kr*Kr;if(t>1072693248)return 0===f?u*Jr*Jr:u*Kr*Kr;g=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Or(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(rn,i)}else g=function(r,n,t){var e,i,a,o,u,f,c,s,l,p,y,g,h,v,b,d,w,m,N,A,E;return m=0,t<1048576&&(m-=53,t=or(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=1048576),o=Or(i=(d=(n=sr(n,t))-(c=qr[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=sr(0,e+=A<<18),b=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Or(f=3+(a=o*o)+(b+=(u=w*(d-o*f-o*(n-(f-c))))*(o+i)),0),h=(y=-7.028461650952758e-9*(l=Or(l=(d=o*f)+(w=u*f+(b-(f-3-a))*i),0))+.9617966939259756*(w-(l-d))+Xr[A])-((g=Or(g=(p=.9617967009544373*l)+y+(s=Zr[A])+(v=m),0))-v-s-p),r[0]=g,r[1]=h,r}(rn,i,t);if(l=(n-(c=Or(n,0)))*g[0]+n*g[1],s=c*g[0],xr(Qr,h=l+s),v=Mr(Qr[0]),b=Mr(Qr[1]),v>=1083179008){if(0!=(v-1083179008|b))return u*Jr*Jr;if(l+8008566259537294e-32>h-s)return u*Jr*Jr}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|b))return u*Kr*Kr;if(l<=h-s)return u*Kr*Kr}return h=function(r,n,t){var e,i,a,o,u,f,c,s,l,p,y;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(e=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),n-=a=sr(0,e)),r=Mr(r=or(c=1-((c=(o=.6931471824645996*(a=Or(a=t+n,0)))+(u=.6931471805599453*(t-(a-n))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?Br(c,s):sr(c,r)}(v,s,l),u*h}function tn(r,n){var t;return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:-1.2*((t=nn(n-r+1,2))+1)/(t-1)}function en(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:r/2+n/2}function an(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:r/2+n/2}function on(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:0}var un=mr(1/12);function fn(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:un*mr(nn(n-r+1,2)-1)}function cn(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:(nn(n-r+1,2)-1)/12}function sn(r,n,t){return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t?NaN:r<n?j:r>=t?0:yr(l(r)-n+1)-yr(t-n+1)}function ln(r,n,t){return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t?NaN:r<n||r>t||!p(r)?j:-yr(t-n+1)}s(sn,"factory",(function(r,n){var t,e;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(e=r-1,t=yr(n-r+1),function(i){if(y(i))return NaN;if(i<r)return j;if(i>=n)return 0;return yr(l(i)-e)-t})})),s(ln,"factory",(function(r,n){var t;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(t=-yr(n-r+1),function(e){if(y(e))return NaN;if(e<r||e>n||!p(e))return j;return t})}));var pn=.6931471803691238,yn=1.9082149292705877e-10;function gn(r){var n,t,e,i,a,o,u,f,c,s,l,p;if(r===I||y(r))return r;if(r===j)return-1;if(0===r)return r;if(r<0?(t=!0,u=-r):(t=!1,u=r),u>=38.816242111356935){if(t)return-1;if(u>=709.782712893384)return I}if(a=0|or(u),u>.34657359027997264)u<1.0397207708399179?t?(e=r+pn,i=-yn,p=-1):(e=r-pn,i=yn,p=1):(p=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(s=p|=0)*pn,i=s*yn),c=e-(r=e-i)-i;else{if(a<1016070144)return r;p=0}return o=1+(f=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),l=f*((o-(s=3-o*n))/(6-r*s)),0===p?r-(r*l-f):(l=r*(l-c)-c,l-=f,-1===p?.5*(r-l)-.5:1===p?r<-.25?-2*(l-(r+.5)):1+2*(r-l):p<=-2||p>56?(u=sr(u=1-(l-r),e=or(u)+(p<<20)|0))-1:(s=1,p<20?u=(s=sr(s,e=1072693248-(2097152>>p)|0))-(l-r):(u=r-(l+(s=sr(s,e=1023-p<<20|0))),u+=1),sr(u,e=or(u)+(p<<20)|0)))}var hn=Math.ceil;function vn(r){return r<0?hn(r):l(r)}function bn(r){var n;return y(r)||r===I?r:r===j?0:r>709.782712893384?I:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,i,a,o;return Br(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=vn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function dn(r,n,t){var e,i;return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t?NaN:0===r?1:(i=t-n+1,e=bn(r*n)*gn(r*i),e/=i*gn(r))}function wn(r,n,t){return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t?NaN:r<n||r>t||!p(r)?0:1/(t-n+1)}function mn(r,n,t){return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t||r<0||r>1?NaN:n+l(r*(t-n+1))}function Nn(r){return"number"==typeof r}function An(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function En(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+An(i):An(i)+r,e&&(r="-"+r)),r}s(dn,"factory",(function(r,n){var t;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(t=n-r+1,function(n){var e;if(y(n))return NaN;if(0===n)return 1;return e=bn(n*r)*gn(n*t),e/=t*gn(n)})})),s(wn,"factory",(function(r,n){var t;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(t=1/(n-r+1),function(e){if(y(e))return NaN;if(e<r||e>n||!p(e))return 0;return t})})),s(mn,"factory",(function(r,n){var t;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(t=n-r+1,function(n){if(y(n)||n<0||n>1)return NaN;return r+l(n*t)})}));var _n=String.prototype.toLowerCase,Un=String.prototype.toUpperCase;function kn(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!Nn(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=En(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=En(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===Un.call(r.specifier)?Un.call(t):_n.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Sn(r){return"string"==typeof r}var xn=Math.abs,In=String.prototype.toLowerCase,jn=String.prototype.toUpperCase,Vn=String.prototype.replace,Fn=/e\+(\d)$/,Tn=/e-(\d)$/,On=/^(\d+)$/,Mn=/^(\d+)e/,$n=/\.0$/,Gn=/\.0*e/,Pn=/(\..*[^0])0*e/;function Rn(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!Nn(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":xn(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=Vn.call(t,Pn,"$1e"),t=Vn.call(t,Gn,"e"),t=Vn.call(t,$n,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Vn.call(t,Fn,"e+0$1"),t=Vn.call(t,Tn,"e-0$1"),r.alternate&&(t=Vn.call(t,On,"$1."),t=Vn.call(t,Mn,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===jn.call(r.specifier)?jn.call(t):In.call(t)}function Hn(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Wn(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Hn(e):Hn(e)+r}var Cn=String.fromCharCode,Ln=isNaN,qn=Array.isArray;function Zn(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Xn(r){var n,t,e,i,a,o,u,f,c;if(!qn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(Sn(e=r[f]))o+=e;else{if(n=void 0!==e.precision,!(e=Zn(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,Ln(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,Ln(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=kn(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!Ln(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Ln(a)?String(e.arg):Cn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Rn(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=En(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Wn(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var Yn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function zn(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Dn(r){var n,t,e,i;for(t=[],i=0,e=Yn.exec(r);e;)(n=r.slice(i,Yn.lastIndex-e[0].length)).length&&t.push(n),t.push(zn(e)),i=Yn.lastIndex,e=Yn.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function Bn(r){return"string"==typeof r}function Jn(r){var n,t,e;if(!Bn(r))throw new TypeError(Jn("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=Dn(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return Xn.apply(null,t)}function Kn(){var r,n;if(!(this instanceof Kn))return 0===arguments.length?new Kn:new Kn(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!F(r=arguments[0]))throw new TypeError(Jn("invalid argument. Minimum support must be an integer. Value: `%s`.",r));if(!F(n))throw new TypeError(Jn("invalid argument. Maximum support must be an integer. Value: `%s`.",n));if(r>n)throw new RangeError(Jn("invalid arguments. Minimum support must be less than or equal to maximum support. Value: `(%d, %d)`.",r,n))}else r=0,n=1;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!F(t))throw new TypeError(Jn("invalid assignment. Must be an integer. Value: `%s`.",t));if(t>n)throw new RangeError(Jn("invalid assignment. Must be less than or equal to %u. Value: `%d`.",n,t));r=t}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!F(t))throw new TypeError(Jn("invalid assignment. Must be an integer. Value: `%s`.",t));if(r>t)throw new RangeError(Jn("invalid assignment. Must be greater than or equal to %u. Value: `%s`.",r,t));n=t}}),this}v(Kn.prototype,"entropy",(function(){return gr(this.a,this.b)})),v(Kn.prototype,"kurtosis",(function(){return tn(this.a,this.b)})),v(Kn.prototype,"mean",(function(){return en(this.a,this.b)})),v(Kn.prototype,"median",(function(){return an(this.a,this.b)})),v(Kn.prototype,"skewness",(function(){return on(this.a,this.b)})),v(Kn.prototype,"stdev",(function(){return fn(this.a,this.b)})),v(Kn.prototype,"variance",(function(){return cn(this.a,this.b)})),s(Kn.prototype,"cdf",(function(r){return g(r,this.a,this.b)})),s(Kn.prototype,"logcdf",(function(r){return sn(r,this.a,this.b)})),s(Kn.prototype,"logpmf",(function(r){return ln(r,this.a,this.b)})),s(Kn.prototype,"mgf",(function(r){return dn(r,this.a,this.b)})),s(Kn.prototype,"pmf",(function(r){return wn(r,this.a,this.b)})),s(Kn.prototype,"quantile",(function(r){return mn(r,this.a,this.b)}));var Qn={};c(Qn,"cdf",g),c(Qn,"DiscreteUniform",Kn),c(Qn,"entropy",gr),c(Qn,"kurtosis",tn),c(Qn,"logcdf",sn),c(Qn,"logpmf",ln),c(Qn,"mean",en),c(Qn,"median",an),c(Qn,"mgf",dn),c(Qn,"pmf",wn),c(Qn,"quantile",mn),c(Qn,"skewness",on),c(Qn,"stdev",fn),c(Qn,"variance",cn);export{Kn as DiscreteUniform,g as cdf,Qn as default,gr as entropy,tn as kurtosis,sn as logcdf,ln as logpmf,en as mean,an as median,dn as mgf,wn as pmf,mn as quantile,on as skewness,fn as stdev,cn as variance};
//# sourceMappingURL=mod.js.map
