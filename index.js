// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,a=t.__defineSetter__,o=t.__lookupGetter__,u=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,f.get),p&&a&&a.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function s(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function p(r){return l(r)===r}function y(r){return r!=r}function g(r,n,t){return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t?NaN:r<n?0:r>=t?1:(l(r)-n+1)/(t-n+1)}function h(r){return function(){return r}}function d(r,n,t){f(r,n,{configurable:!1,enumerable:!1,get:t})}function v(r){return"number"==typeof r}s(g,"factory",(function(r,n){var t,e;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(t=r-1,e=n-r+1,function(i){return y(i)?NaN:i<r?0:i>=n?1:(l(i)-t)/e})}));var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return b&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString,N=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",E=w()?function(r){var n,t,e,i,a;if(null==r)return m.call(r);t=r[A],a=A,n=null!=(i=r)&&N.call(i,a);try{r[A]=void 0}catch(n){return m.call(r)}return e=m.call(r),n?r[A]=t:delete r[A],e}:function(r){return m.call(r)},_=Number,U=_.prototype.toString,k=w();function x(r){return"object"==typeof r&&(r instanceof _||(k?function(r){try{return U.call(r),!0}catch(r){return!1}}(r):"[object Number]"===E(r)))}function S(r){return v(r)||x(r)}s(S,"isPrimitive",v),s(S,"isObject",x);var j=Number.POSITIVE_INFINITY,I=_.NEGATIVE_INFINITY;function T(r){return r<j&&r>I&&p(r)}function V(r){return v(r)&&T(r)}function F(r){return x(r)&&T(r.valueOf())}function O(r){return V(r)||F(r)}s(O,"isPrimitive",V),s(O,"isObject",F);var M,$="function"==typeof Uint32Array,G="function"==typeof Uint32Array?Uint32Array:null,P="function"==typeof Uint32Array?Uint32Array:void 0;M=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=($&&t instanceof Uint32Array||"[object Uint32Array]"===E(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var R,H=M,W="function"==typeof Float64Array,C="function"==typeof Float64Array?Float64Array:null,L="function"==typeof Float64Array?Float64Array:void 0;R=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C([1,3.14,-3.14,NaN]),t=n,r=(W&&t instanceof Float64Array||"[object Float64Array]"===E(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var q,Z=R,X="function"==typeof Uint8Array,Y="function"==typeof Uint8Array?Uint8Array:null,z="function"==typeof Uint8Array?Uint8Array:void 0;q=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,256,257]),t=n,r=(X&&t instanceof Uint8Array||"[object Uint8Array]"===E(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var D,B=q,J="function"==typeof Uint16Array,K="function"==typeof Uint16Array?Uint16Array:null,Q="function"==typeof Uint16Array?Uint16Array:void 0;D=function(){var r,n,t;if("function"!=typeof K)return!1;try{n=new K(n=[1,3.14,-3.14,65536,65537]),t=n,r=(J&&t instanceof Uint16Array||"[object Uint16Array]"===E(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,nr={uint16:D,uint8:B};(rr=new nr.uint16(1))[0]=4660;var tr=52===new nr.uint8(rr.buffer)[0],er=!0===tr?1:0,ir=new Z(1),ar=new H(ir.buffer);function or(r){return ir[0]=r,ar[er]}var ur=!0===tr?1:0,fr=new Z(1),cr=new H(fr.buffer);function sr(r,n){return fr[0]=r,cr[ur]=n>>>0,fr[0]}var lr=1023,pr=.6931471803691238,yr=1.9082149292705877e-10,gr=1048575;function hr(r){var n,t,e,i,a,o,u,f,c,s,l,p;return 0===r?I:y(r)||r<0?NaN:(a=0,(t=or(r))<1048576&&(a-=54,t=or(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-lr|0,a+=(f=614244+(t&=gr)&1048576|0)>>20|0,u=(r=sr(r,t|1072693248^f))-1,(gr&2+t)<3?0===u?0===a?0:a*pr+a*yr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*pr-(o-a*yr-u)):(f=t-398458|0,c=440401-t|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*pr-(n-(s*(n+o)+a*yr)-u)):0===a?u-s*(u-o):a*pr-(s*(u-o)-a*yr-u))))}function dr(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:hr(n-r+1)}function vr(r){return p(r/2)}function br(r){return vr(r>0?r-1:r+1)}function wr(r){return r===j||r===I}var mr,Nr,Ar=Math.sqrt;function Er(r){return Math.abs(r)}!0===tr?(mr=1,Nr=0):(mr=0,Nr=1);var _r={HIGH:mr,LOW:Nr},Ur=new Z(1),kr=new H(Ur.buffer),xr=_r.HIGH,Sr=_r.LOW;function jr(r,n){return Ur[0]=n,r[0]=kr[xr],r[1]=kr[Sr],r}function Ir(r,n){return 1===arguments.length?jr([0,0],r):jr(r,n)}var Tr,Vr,Fr=!0===tr?0:1,Or=new Z(1),Mr=new H(Or.buffer);function $r(r,n){return Or[0]=r,Mr[Fr]=n>>>0,Or[0]}function Gr(r){return 0|r}!0===tr?(Tr=1,Vr=0):(Tr=0,Vr=1);var Pr={HIGH:Tr,LOW:Vr},Rr=new Z(1),Hr=new H(Rr.buffer),Wr=Pr.HIGH,Cr=Pr.LOW;function Lr(r,n){return Hr[Wr]=r,Hr[Cr]=n,Rr[0]}var qr=[0,0];function Zr(r,n){var t,e;return Ir(qr,r),t=qr[0],t&=2147483647,e=or(n),Lr(t|=e&=2147483648,qr[1])}var Xr=1048576,Yr=[1,1.5],zr=[0,.5849624872207642],Dr=[0,1.350039202129749e-8];function Br(r,n,t,e){return y(r)||wr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Er(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}s((function(r){return Br(r,[0,0],1,0)}),"assign",Br);var Jr=[0,0],Kr=[0,0];function Qr(r,n){var t,e;return 0===n||0===r||y(r)||wr(r)?r:(Br(r,Jr,1,0),n+=Jr[1],n+=function(r){var n=or(r);return(n=(2146435072&n)>>>20)-lr|0}(r=Jr[0]),n<-1074?Zr(0,r):n>1023?r<0?I:j:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ir(Kr,r),t=Kr[0],t&=2148532223,e*Lr(t|=n+lr<<20,Kr[1])))}var rn=2147483647,nn=1048575,tn=1048576,en=2147483647,an=1083179008,on=1e300,un=1e-300,fn=[0,0],cn=[0,0];function sn(r,n){var t,e,i,a,o,u,f,c,s,l,g,h,d,v;if(y(r)||y(n))return NaN;if(Ir(fn,n),o=fn[0],0===fn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ar(r);if(-.5===n)return 1/Ar(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(wr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Er(r)<1==(n===j)?0:j}(r,n)}if(Ir(fn,r),a=fn[0],0===fn[1]){if(0===a)return function(r,n){return n===I?j:n===j?0:n>0?br(n)?r:0:br(n)?Zr(j,r):j}(r,n);if(1===r)return 1;if(-1===r&&br(n))return-1;if(wr(r))return r===I?sn(-0,-n):n<0?0:j}if(r<0&&!1===p(n))return(r-r)/(r-r);if(i=Er(r),t=a&en|0,e=o&en|0,f=o>>>31|0,u=(u=a>>>31|0)&&br(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&or(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*on*on:u*un*un;if(t>1072693248)return 0===f?u*on*on:u*un*un;g=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=$r(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(cn,i)}else g=function(r,n,t){var e,i,a,o,u,f,c,s,l,p,y,g,h,d,v,b,w,m,N,A,E;return m=0,t<Xr&&(m-=53,t=or(n*=9007199254740992)),m+=(t>>20)-lr|0,t=1072693248|(N=1048575&t|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=Xr),o=$r(i=(b=(n=sr(n,t))-(c=Yr[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=sr(0,e+=A<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=$r(f=3+(a=o*o)+(v+=(u=w*(b-o*f-o*(n-(f-c))))*(o+i)),0),h=(y=-7.028461650952758e-9*(l=$r(l=(b=o*f)+(w=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(w-(l-b))+Dr[A])-((g=$r(g=(p=.9617967009544373*l)+y+(s=zr[A])+(d=m),0))-d-s-p),r[0]=g,r[1]=h,r}(cn,i,t);if(l=(n-(c=$r(n,0)))*g[0]+n*g[1],s=c*g[0],Ir(fn,h=l+s),d=Gr(fn[0]),v=Gr(fn[1]),d>=an){if(0!=(d-an|v))return u*on*on;if(l+8008566259537294e-32>h-s)return u*on*on}else if((d&en)>=1083231232){if(0!=(d-3230714880|v))return u*un*un;if(l<=h-s)return u*un*un}return h=function(r,n,t){var e,i,a,o,u,f,c,s,l,p;return l=((s=r&rn|0)>>20)-lr|0,c=0,s>1071644672&&(i=sr(0,((c=r+(tn>>l+1)>>>0)&~(nn>>(l=((c&rn)>>20)-lr|0)))>>>0),c=(c&nn|tn)>>20-l>>>0,r<0&&(c=-c),n-=i),r=Gr(r=or(f=1-((f=(a=.6931471824645996*(i=$r(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Qr(f,c):sr(f,r)}(d,s,l),u*h}function ln(r,n){var t;return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:-1.2*((t=sn(n-r+1,2))+1)/(t-1)}function pn(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:r/2+n/2}function yn(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:r/2+n/2}function gn(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:0}var hn=Ar(1/12);function dn(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:hn*Ar(sn(n-r+1,2)-1)}function vn(r,n){return y(r)||y(n)||!p(r)||!p(n)||r>n?NaN:(sn(n-r+1,2)-1)/12}function bn(r,n,t){return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t?NaN:r<n?I:r>=t?0:hr(l(r)-n+1)-hr(t-n+1)}function wn(r,n,t){return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t?NaN:r<n||r>t||!p(r)?I:-hr(t-n+1)}s(bn,"factory",(function(r,n){var t,e;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(e=r-1,t=hr(n-r+1),function(i){return y(i)?NaN:i<r?I:i>=n?0:hr(l(i)-e)-t})})),s(wn,"factory",(function(r,n){var t;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(t=-hr(n-r+1),function(e){return y(e)?NaN:e<r||e>n||!p(e)?I:t})}));var mn=.6931471803691238,Nn=1.9082149292705877e-10,An=1.4426950408889634;function En(r){var n,t,e,i,a,o,u,f,c,s,l,p;if(r===j||y(r))return r;if(r===I)return-1;if(0===r)return r;if(r<0?(t=!0,u=-r):(t=!1,u=r),u>=38.816242111356935){if(t)return-1;if(u>=709.782712893384)return j}if(a=0|or(u),u>.34657359027997264)u<1.0397207708399179?t?(e=r+mn,i=-Nn,p=-1):(e=r-mn,i=Nn,p=1):(p=t?An*r-.5:An*r+.5,e=r-(s=p|=0)*mn,i=s*Nn),c=e-(r=e-i)-i;else{if(a<1016070144)return r;p=0}return o=1+(f=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),l=f*((o-(s=3-o*n))/(6-r*s)),0===p?r-(r*l-f):(l=r*(l-c)-c,l-=f,-1===p?.5*(r-l)-.5:1===p?r<-.25?-2*(l-(r+.5)):1+2*(r-l):p<=-2||p>56?(u=sr(u=1-(l-r),e=or(u)+(p<<20)|0))-1:(s=1,p<20?u=(s=sr(s,e=1072693248-(2097152>>p)|0))-(l-r):(u=r-(l+(s=sr(s,e=lr-p<<20|0))),u+=1),sr(u,e=or(u)+(p<<20)|0)))}var _n=Math.ceil;function Un(r){return r<0?_n(r):l(r)}var kn=1.4426950408889634,xn=1/(1<<28);function Sn(r){var n;return y(r)||r===j?r:r===I?0:r>709.782712893384?j:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<xn?1+r:function(r,n,t){var e,i,a,o;return Qr(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=Un(r<0?kn*r-.5:kn*r+.5)),1.9082149292705877e-10*n,n)}function jn(r,n,t){var e,i;return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t?NaN:0===r?1:(i=t-n+1,e=Sn(r*n)*En(r*i),e/=i*En(r))}function In(r,n,t){return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t?NaN:r<n||r>t||!p(r)?0:1/(t-n+1)}function Tn(r,n,t){return y(r)||y(n)||y(t)||!p(n)||!p(t)||n>t||r<0||r>1?NaN:n+l(r*(t-n+1))}function Vn(r){return"number"==typeof r}function Fn(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function On(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+Fn(i):Fn(i)+r,e&&(r="-"+r)),r}s(jn,"factory",(function(r,n){var t;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(t=n-r+1,function(n){var e;return y(n)?NaN:0===n?1:(e=Sn(n*r)*En(n*t),e/=t*En(n))})})),s(In,"factory",(function(r,n){var t;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(t=1/(n-r+1),function(e){return y(e)?NaN:e<r||e>n||!p(e)?0:t})})),s(Tn,"factory",(function(r,n){var t;return y(r)||y(n)||!p(r)||!p(n)||r>n?h(NaN):(t=n-r+1,function(n){return y(n)||n<0||n>1?NaN:r+l(n*t)})}));var Mn=String.prototype.toLowerCase,$n=String.prototype.toUpperCase;function Gn(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!Vn(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=On(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=On(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===$n.call(r.specifier)?$n.call(t):Mn.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Pn(r){return"string"==typeof r}var Rn=Math.abs,Hn=String.prototype.toLowerCase,Wn=String.prototype.toUpperCase,Cn=String.prototype.replace,Ln=/e\+(\d)$/,qn=/e-(\d)$/,Zn=/^(\d+)$/,Xn=/^(\d+)e/,Yn=/\.0$/,zn=/\.0*e/,Dn=/(\..*[^0])0*e/;function Bn(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!Vn(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":Rn(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=Cn.call(t,Dn,"$1e"),t=Cn.call(t,zn,"e"),t=Cn.call(t,Yn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Cn.call(t,Ln,"e+0$1"),t=Cn.call(t,qn,"e-0$1"),r.alternate&&(t=Cn.call(t,Zn,"$1."),t=Cn.call(t,Xn,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Wn.call(r.specifier)?Wn.call(t):Hn.call(t)}function Jn(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Kn(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Jn(e):Jn(e)+r}var Qn=String.fromCharCode,rt=isNaN,nt=Array.isArray;function tt(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function et(r){var n,t,e,i,a,o,u,f,c;if(!nt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(Pn(e=r[f]))o+=e;else{if(n=void 0!==e.precision,!(e=tt(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,rt(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,rt(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=Gn(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!rt(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=rt(a)?String(e.arg):Qn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Bn(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=On(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Kn(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var it=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function at(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function ot(r){var n,t,e,i;for(t=[],i=0,e=it.exec(r);e;)(n=r.slice(i,it.lastIndex-e[0].length)).length&&t.push(n),t.push(at(e)),i=it.lastIndex,e=it.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function ut(r){return"string"==typeof r}function ft(r){var n,t,e;if(!ut(r))throw new TypeError(ft("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=ot(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return et.apply(null,t)}function ct(){var r,n;if(!(this instanceof ct))return 0===arguments.length?new ct:new ct(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!V(r=arguments[0]))throw new TypeError(ft("invalid argument. Minimum support must be an integer. Value: `%s`.",r));if(!V(n))throw new TypeError(ft("invalid argument. Maximum support must be an integer. Value: `%s`.",n));if(r>n)throw new RangeError(ft("invalid arguments. Minimum support must be less than or equal to maximum support. Value: `(%d, %d)`.",r,n))}else r=0,n=1;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!V(t))throw new TypeError(ft("invalid assignment. Must be an integer. Value: `%s`.",t));if(t>n)throw new RangeError(ft("invalid assignment. Must be less than or equal to %u. Value: `%d`.",n,t));r=t}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!V(t))throw new TypeError(ft("invalid assignment. Must be an integer. Value: `%s`.",t));if(r>t)throw new RangeError(ft("invalid assignment. Must be greater than or equal to %u. Value: `%s`.",r,t));n=t}}),this}d(ct.prototype,"entropy",(function(){return dr(this.a,this.b)})),d(ct.prototype,"kurtosis",(function(){return ln(this.a,this.b)})),d(ct.prototype,"mean",(function(){return pn(this.a,this.b)})),d(ct.prototype,"median",(function(){return yn(this.a,this.b)})),d(ct.prototype,"skewness",(function(){return gn(this.a,this.b)})),d(ct.prototype,"stdev",(function(){return dn(this.a,this.b)})),d(ct.prototype,"variance",(function(){return vn(this.a,this.b)})),s(ct.prototype,"cdf",(function(r){return g(r,this.a,this.b)})),s(ct.prototype,"logcdf",(function(r){return bn(r,this.a,this.b)})),s(ct.prototype,"logpmf",(function(r){return wn(r,this.a,this.b)})),s(ct.prototype,"mgf",(function(r){return jn(r,this.a,this.b)})),s(ct.prototype,"pmf",(function(r){return In(r,this.a,this.b)})),s(ct.prototype,"quantile",(function(r){return Tn(r,this.a,this.b)}));var st={};return c(st,"cdf",g),c(st,"DiscreteUniform",ct),c(st,"entropy",dr),c(st,"kurtosis",ln),c(st,"logcdf",bn),c(st,"logpmf",wn),c(st,"mean",pn),c(st,"median",yn),c(st,"mgf",jn),c(st,"pmf",In),c(st,"quantile",Tn),c(st,"skewness",gn),c(st,"stdev",dn),c(st,"variance",vn),st},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).discreteUniform=n();
//# sourceMappingURL=index.js.map
