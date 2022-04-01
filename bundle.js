// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).discreteUniform=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,i=e.__defineGetter__,o=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,t.get),y&&o&&o.call(r,n,t.set),r},l=n()?c:v,y=l;var p=function(r,n,t){y(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})},s=l;var b=function(r,n,t){s(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=Math.floor,m=h;var N=function(r){return m(r)===r};var w=function(r){return r!=r},d=N,g=w,A=h;var _=function(r){return function(){return r}},U=_,j=N,E=w,O=h;var T=function(r,n,t){return g(r)||g(n)||g(t)||!d(n)||!d(t)||n>t?NaN:r<n?0:r>=t?1:(A(r)-n+1)/(t-n+1)};b(T,"factory",(function(r,n){var t,e;return E(r)||E(n)||!j(r)||!j(n)||r>n?U(NaN):(t=r-1,e=n-r+1,function(u){if(E(u))return NaN;if(u<r)return 0;if(u>=n)return 1;return(O(u)-t)/e})}));var I=T,S=l;var M=function(r,n,t){S(r,n,{configurable:!1,enumerable:!1,get:t})};var V=function(r){return"number"==typeof r};var F=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var P=function(){return F&&"symbol"==typeof Symbol.toStringTag},H=Object.prototype.toString,G=H;var k=function(r){return G.call(r)},q=Object.prototype.hasOwnProperty;var x=function(r,n){return null!=r&&q.call(r,n)},L="function"==typeof Symbol?Symbol.toStringTag:"",W=x,R=L,Y=H;var C=k,D=function(r){var n,t,e;if(null==r)return Y.call(r);t=r[R],n=W(r,R);try{r[R]=void 0}catch(n){return Y.call(r)}return e=Y.call(r),n?r[R]=t:delete r[R],e},z=P()?D:C,B=Number,J=B.prototype.toString;var K=z,Q=B,X=function(r){try{return J.call(r),!0}catch(r){return!1}},Z=P();var $=function(r){return"object"==typeof r&&(r instanceof Q||(Z?X(r):"[object Number]"===K(r)))},rr=V,nr=$;var tr=b,er=function(r){return rr(r)||nr(r)},ur=$;tr(er,"isPrimitive",V),tr(er,"isObject",ur);var ir=er,or=Number.POSITIVE_INFINITY,ar=B.NEGATIVE_INFINITY,fr=or,cr=ar,vr=N;var lr=function(r){return r<fr&&r>cr&&vr(r)},yr=ir.isPrimitive,pr=lr;var sr=function(r){return yr(r)&&pr(r)},br=ir.isObject,hr=lr;var mr=function(r){return br(r)&&hr(r.valueOf())},Nr=sr,wr=mr;var dr=b,gr=function(r){return Nr(r)||wr(r)},Ar=mr;dr(gr,"isPrimitive",sr),dr(gr,"isObject",Ar);var _r=gr,Ur=z,jr="function"==typeof Uint32Array;var Er="function"==typeof Uint32Array?Uint32Array:null,Or=function(r){return jr&&r instanceof Uint32Array||"[object Uint32Array]"===Ur(r)},Tr=Er;var Ir=function(){var r,n;if("function"!=typeof Tr)return!1;try{n=new Tr(n=[1,3.14,-3.14,4294967296,4294967297]),r=Or(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Sr="function"==typeof Uint32Array?Uint32Array:void 0,Mr=function(){throw new Error("not implemented")},Vr=Ir()?Sr:Mr,Fr=z,Pr="function"==typeof Float64Array;var Hr="function"==typeof Float64Array?Float64Array:null,Gr=function(r){return Pr&&r instanceof Float64Array||"[object Float64Array]"===Fr(r)},kr=Hr;var qr=function(){var r,n;if("function"!=typeof kr)return!1;try{n=new kr([1,3.14,-3.14,NaN]),r=Gr(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var xr="function"==typeof Float64Array?Float64Array:void 0,Lr=function(){throw new Error("not implemented")},Wr=qr()?xr:Lr,Rr=z,Yr="function"==typeof Uint8Array;var Cr="function"==typeof Uint8Array?Uint8Array:null,Dr=function(r){return Yr&&r instanceof Uint8Array||"[object Uint8Array]"===Rr(r)},zr=Cr;var Br=function(){var r,n;if("function"!=typeof zr)return!1;try{n=new zr(n=[1,3.14,-3.14,256,257]),r=Dr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Jr="function"==typeof Uint8Array?Uint8Array:void 0,Kr=function(){throw new Error("not implemented")},Qr=Br()?Jr:Kr,Xr=z,Zr="function"==typeof Uint16Array;var $r="function"==typeof Uint16Array?Uint16Array:null,rn=function(r){return Zr&&r instanceof Uint16Array||"[object Uint16Array]"===Xr(r)},nn=$r;var tn=function(){var r,n;if("function"!=typeof nn)return!1;try{n=new nn(n=[1,3.14,-3.14,65536,65537]),r=rn(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var en,un="function"==typeof Uint16Array?Uint16Array:void 0,on=function(){throw new Error("not implemented")},an={uint16:tn()?un:on,uint8:Qr};(en=new an.uint16(1))[0]=4660;var fn=52===new an.uint8(en.buffer)[0],cn=Vr,vn=!0===fn?1:0,ln=new Wr(1),yn=new cn(ln.buffer);var pn=function(r){return ln[0]=r,yn[vn]},sn=Vr,bn=!0===fn?1:0,hn=new Wr(1),mn=new sn(hn.buffer);var Nn=function(r,n){return hn[0]=r,mn[bn]=n>>>0,hn[0]},wn=Nn;var dn=pn,gn=wn,An=w,_n=ar,Un=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},jn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},En=.6931471803691238,On=1.9082149292705877e-10,Tn=1048575;var In=function(r){var n,t,e,u,i,o,a,f,c,v,l;return 0===r?_n:An(r)||r<0?NaN:(u=0,(t=dn(r))<1048576&&(u-=54,t=dn(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(a=(t&=Tn)+614244&1048576|0)>>20|0,o=(r=gn(r,t|1072693248^a))-1,(Tn&2+t)<3?0===o?0===u?0:u*En+u*On:(i=o*o*(.5-.3333333333333333*o),0===u?o-i:u*En-(i-u*On-o)):(a=t-398458|0,f=440401-t|0,e=(v=(l=(c=o/(2+o))*c)*l)*Un(v),i=l*jn(v)+e,(a|=f)>0?(n=.5*o*o,0===u?o-(n-c*(n+i)):u*En-(n-(c*(n+i)+u*On)-o)):0===u?o-c*(o-i):u*En-(c*(o-i)-u*On-o))))},Sn=N,Mn=w,Vn=In;var Fn=function(r,n){return Mn(r)||Mn(n)||!Sn(r)||!Sn(n)||r>n?NaN:Vn(n-r+1)},Pn=N;var Hn=function(r){return Pn(r/2)};var Gn=function(r){return Hn(r>0?r-1:r+1)},kn=or,qn=ar;var xn=function(r){return r===kn||r===qn},Ln=Math.sqrt;var Wn,Rn,Yn=function(r){return Math.abs(r)};!0===fn?(Wn=1,Rn=0):(Wn=0,Rn=1);var Cn=Vr,Dn={HIGH:Wn,LOW:Rn},zn=new Wr(1),Bn=new Cn(zn.buffer),Jn=Dn.HIGH,Kn=Dn.LOW;var Qn=function(r,n){return zn[0]=n,r[0]=Bn[Jn],r[1]=Bn[Kn],r};var Xn=function(r,n){return 1===arguments.length?Qn([0,0],r):Qn(r,n)},Zn=Xn,$n=Vr,rt=!0===fn?0:1,nt=new Wr(1),tt=new $n(nt.buffer);var et=function(r,n){return nt[0]=r,tt[rt]=n>>>0,nt[0]},ut=et;var it,ot,at=function(r){return 0|r};!0===fn?(it=1,ot=0):(it=0,ot=1);var ft=Vr,ct={HIGH:it,LOW:ot},vt=new Wr(1),lt=new ft(vt.buffer),yt=ct.HIGH,pt=ct.LOW;var st=function(r,n){return lt[yt]=r,lt[pt]=n,vt[0]},bt=Zn,ht=pn,mt=st,Nt=[0,0];var wt=function(r,n){var t,e;return bt(Nt,r),t=Nt[0],t&=2147483647,e=ht(n),mt(t|=e&=2147483648,Nt[1])},dt=Gn,gt=wt,At=ar,_t=or;var Ut=pn;var jt=Yn,Et=or;var Ot=pn,Tt=ut,It=wn,St=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Mt=1048576,Vt=[1,1.5],Ft=[0,.5849624872207642],Pt=[0,1.350039202129749e-8];var Ht=ut,Gt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var kt=xn,qt=w,xt=Yn;var Lt=function(r,n){return qt(n)||kt(n)?(r[0]=n,r[1]=0,r):0!==n&&xt(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Wt=function(r,n){return 1===arguments.length?Lt([0,0],r):Lt(r,n)},Rt=pn;var Yt=function(r){var n=Rt(r);return(n=(2146435072&n)>>>20)-1023|0},Ct=or,Dt=ar,zt=w,Bt=xn,Jt=wt,Kt=Wt,Qt=Yt,Xt=Zn,Zt=st,$t=[0,0],re=[0,0];var ne=function(r,n){var t,e;return 0===n||0===r||zt(r)||Bt(r)?r:(Kt($t,r),n+=$t[1],(n+=Qt(r=$t[0]))<-1074?Jt(0,r):n>1023?r<0?Dt:Ct:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Xt(re,r),t=re[0],t&=2148532223,e*Zt(t|=n+1023<<20,re[1])))},te=ne;var ee=pn,ue=wn,ie=ut,oe=at,ae=te,fe=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},ce=2147483647,ve=1048575,le=1048576;var ye=w,pe=Gn,se=xn,be=N,he=Ln,me=Yn,Ne=Zn,we=ut,de=at,ge=ar,Ae=or,_e=function(r,n){return n===At?_t:n===_t?0:n>0?dt(n)?r:0:dt(n)?gt(_t,r):_t},Ue=function(r,n){return(2147483647&Ut(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},je=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:jt(r)<1==(n===Et)?0:Et},Ee=function(r,n,t){var e,u,i,o,a,f,c,v,l,y,p,s,b,h,m,N,w,d,g,A;return d=0,t<Mt&&(d-=53,t=Ot(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,t-=Mt),e=524288+(t>>1|536870912),a=(w=1/((n=It(n,t))+(c=Vt[A])))*((N=n-c)-(o=Tt(u=N*w,0))*(f=It(0,e+=A<<18))-o*(n-(f-c))),m=(i=u*u)*i*St(i),f=Tt(f=3+(i=o*o)+(m+=a*(o+u)),0),b=(p=-7.028461650952758e-9*(l=Tt(l=(N=o*f)+(w=a*f+(m-(f-3-i))*u),0))+.9617966939259756*(w-(l-N))+Pt[A])-((s=Tt(s=(y=.9617967009544373*l)+p+(v=Ft[A])+(h=d),0))-h-v-y),r[0]=s,r[1]=b,r},Oe=function(r,n){var t,e,u,i,o;return t=(o=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Gt(u)))-((e=Ht(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r},Te=function(r,n,t){var e,u,i,o,a,f,c,v,l;return l=((v=r&ce|0)>>20)-1023|0,c=0,v>1071644672&&(u=ue(0,((c=r+(le>>l+1)>>>0)&~(ve>>(l=((c&ce)>>20)-1023|0)))>>>0),c=(c&ve|le)>>20-l>>>0,r<0&&(c=-c),n-=u),a=(o=.6931471805599453*(t-((u=ie(u=t+n,0))-n))+-1.904654299957768e-9*u)-((f=(i=.6931471824645996*u)+o)-i),e=f-(u=f*f)*fe(u),r=ee(f=1-(f*e/(e-2)-(a+f*a)-f)),r=oe(r),f=(r+=c<<20>>>0)>>20<=0?ae(f,c):ue(f,r)},Ie=2147483647,Se=1083179008,Me=1e300,Ve=1e-300,Fe=[0,0],Pe=[0,0];var He=function r(n,t){var e,u,i,o,a,f,c,v,l,y,p,s,b,h;if(ye(n)||ye(t))return NaN;if(Ne(Fe,t),a=Fe[0],0===Fe[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return he(n);if(-.5===t)return 1/he(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(se(t))return je(n,t)}if(Ne(Fe,n),o=Fe[0],0===Fe[1]){if(0===o)return _e(n,t);if(1===n)return 1;if(-1===n&&pe(t))return-1;if(se(n))return n===ge?r(-0,-t):t<0?0:Ae}if(n<0&&!1===be(t))return(n-n)/(n-n);if(i=me(n),e=o&Ie|0,u=a&Ie|0,c=a>>>31|0,f=(f=o>>>31|0)&&pe(t)?-1:1,u>1105199104){if(u>1139802112)return Ue(n,t);if(e<1072693247)return 1===c?f*Me*Me:f*Ve*Ve;if(e>1072693248)return 0===c?f*Me*Me:f*Ve*Ve;p=Oe(Pe,i)}else p=Ee(Pe,i,e);if(y=(t-(v=we(t,0)))*p[0]+t*p[1],l=v*p[0],Ne(Fe,s=y+l),b=de(Fe[0]),h=de(Fe[1]),b>=Se){if(0!=(b-Se|h))return f*Me*Me;if(y+8008566259537294e-32>s-l)return f*Me*Me}else if((b&Ie)>=1083231232){if(0!=(b-3230714880|h))return f*Ve*Ve;if(y<=s-l)return f*Ve*Ve}return f*(s=Te(b,l,y))},Ge=He,ke=w,qe=N,xe=Ge;var Le=function(r,n){var t;return ke(r)||ke(n)||!qe(r)||!qe(n)||r>n?NaN:-1.2*((t=xe(n-r+1,2))+1)/(t-1)},We=w,Re=N;var Ye=function(r,n){return We(r)||We(n)||!Re(r)||!Re(n)||r>n?NaN:r/2+n/2},Ce=w,De=N;var ze=function(r,n){return Ce(r)||Ce(n)||!De(r)||!De(n)||r>n?NaN:r/2+n/2},Be=w,Je=N;var Ke=function(r,n){return Be(r)||Be(n)||!Je(r)||!Je(n)||r>n?NaN:0},Qe=w,Xe=N,Ze=Ge,$e=Ln,ru=$e(1/12);var nu=function(r,n){return Qe(r)||Qe(n)||!Xe(r)||!Xe(n)||r>n?NaN:ru*$e(Ze(n-r+1,2)-1)},tu=w,eu=N,uu=Ge;var iu=function(r,n){return tu(r)||tu(n)||!eu(r)||!eu(n)||r>n?NaN:(uu(n-r+1,2)-1)/12},ou=N,au=w,fu=h,cu=In,vu=ar;var lu=_,yu=N,pu=w,su=h,bu=In,hu=ar;var mu=function(r,n,t){return au(r)||au(n)||au(t)||!ou(n)||!ou(t)||n>t?NaN:r<n?vu:r>=t?0:cu(fu(r)-n+1)-cu(t-n+1)};b(mu,"factory",(function(r,n){var t,e;return pu(r)||pu(n)||!yu(r)||!yu(n)||r>n?lu(NaN):(e=r-1,t=bu(n-r+1),function(u){if(pu(u))return NaN;if(u<r)return hu;if(u>=n)return 0;return bu(su(u)-e)-t})}));var Nu=mu,wu=N,du=w,gu=In,Au=ar;var _u=_,Uu=N,ju=w,Eu=In,Ou=ar;var Tu=function(r,n,t){return du(r)||du(n)||du(t)||!wu(n)||!wu(t)||n>t?NaN:r<n||r>t||!wu(r)?Au:-gu(t-n+1)};b(Tu,"factory",(function(r,n){var t;return ju(r)||ju(n)||!Uu(r)||!Uu(n)||r>n?_u(NaN):(t=-Eu(n-r+1),function(e){if(ju(e))return NaN;if(e<r||e>n||!Uu(e))return Ou;return t})}));var Iu=Tu;var Su=w,Mu=pn,Vu=wn,Fu=or,Pu=ar,Hu=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},Gu=.6931471803691238,ku=1.9082149292705877e-10,qu=1.4426950408889634;var xu=function(r){var n,t,e,u,i,o,a,f,c,v,l,y;if(r===Fu||Su(r))return r;if(r===Pu)return-1;if(0===r)return r;if(r<0?(t=!0,a=-r):(t=!1,a=r),a>=38.816242111356935){if(t)return-1;if(a>=709.782712893384)return Fu}if(i=0|Mu(a),a>.34657359027997264)a<1.0397207708399179?t?(e=r+Gu,u=-ku,y=-1):(e=r-Gu,u=ku,y=1):(y=t?qu*r-.5:qu*r+.5,e=r-(v=y|=0)*Gu,u=v*ku),c=e-(r=e-u)-u;else{if(i<1016070144)return r;y=0}return l=(f=r*(n=.5*r))*(((o=1+f*Hu(f))-(v=3-o*n))/(6-r*v)),0===y?r-(r*l-f):(l=r*(l-c)-c,l-=f,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(e=Mu(a=1-(l-r))+(y<<20)|0,(a=Vu(a,e))-1):(v=1,y<20?a=(v=Vu(v,e=1072693248-(2097152>>y)|0))-(l-r):(a=r-(l+(v=Vu(v,e=1023-y<<20|0))),a+=1),e=Mu(a)+(y<<20)|0,Vu(a,e)))},Lu=Math.ceil,Wu=h,Ru=Lu;var Yu=te,Cu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Du=w,zu=function(r){return r<0?Ru(r):Wu(r)},Bu=ar,Ju=or,Ku=function(r,n,t){var e,u,i;return i=(e=r-n)-(u=e*e)*Cu(u),Yu(1-(n-e*i/(2-i)-r),t)},Qu=1.4426950408889634,Xu=1/(1<<28);var Zu=function(r){var n;return Du(r)||r===Ju?r:r===Bu?0:r>709.782712893384?Ju:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Xu?1+r:(n=zu(r<0?Qu*r-.5:Qu*r+.5),Ku(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},$u=N,ri=w,ni=xu,ti=Zu;var ei=_,ui=N,ii=w,oi=xu,ai=Zu;var fi=function(r,n,t){var e,u;return ri(r)||ri(n)||ri(t)||!$u(n)||!$u(t)||n>t?NaN:0===r?1:(u=t-n+1,e=ti(r*n)*ni(r*u),e/=u*ni(r))};b(fi,"factory",(function(r,n){var t;return ii(r)||ii(n)||!ui(r)||!ui(n)||r>n?ei(NaN):(t=n-r+1,function(n){var e;if(ii(n))return NaN;if(0===n)return 1;return e=ai(n*r)*oi(n*t),e/=t*oi(n)})}));var ci=fi,vi=N,li=w;var yi=_,pi=N,si=w;var bi=function(r,n,t){return li(r)||li(n)||li(t)||!vi(n)||!vi(t)||n>t?NaN:r<n||r>t||!vi(r)?0:1/(t-n+1)};b(bi,"factory",(function(r,n){var t;return si(r)||si(n)||!pi(r)||!pi(n)||r>n?yi(NaN):(t=1/(n-r+1),function(e){if(si(e))return NaN;if(e<r||e>n||!pi(e))return 0;return t})}));var hi=bi,mi=N,Ni=w,wi=h;var di=_,gi=N,Ai=w,_i=h;var Ui=function(r,n,t){return Ni(r)||Ni(n)||Ni(t)||!mi(n)||!mi(t)||n>t||r<0||r>1?NaN:n+wi(r*(t-n+1))};b(Ui,"factory",(function(r,n){var t;return Ai(r)||Ai(n)||!gi(r)||!gi(n)||r>n?di(NaN):(t=n-r+1,function(n){if(Ai(n)||n<0||n>1)return NaN;return r+_i(n*t)})}));var ji=Ui,Ei=l,Oi=b,Ti=M,Ii=_r.isPrimitive,Si=Fn,Mi=Le,Vi=Ye,Fi=ze,Pi=Ke,Hi=nu,Gi=iu,ki=I,qi=Nu,xi=Iu,Li=ci,Wi=hi,Ri=ji;function Yi(){var r,n;if(!(this instanceof Yi))return 0===arguments.length?new Yi:new Yi(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!Ii(r=arguments[0]))throw new TypeError("invalid argument. Minimum support `a` must be an integer. Value: `"+r+"`");if(!Ii(n))throw new TypeError("invalid argument. Maximum support `b` must be an integer. Value: `"+n+"`");if(r>n)throw new RangeError("invalid arguments. Minimum support `a` must be less than or equal to maximum support `b`. Value: `"+r+","+n+"`")}else r=0,n=1;return Ei(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!Ii(t))throw new TypeError("invalid value. Must be an integer. Value: `"+t+"`");if(t>n)throw new RangeError("invalid value. Must be smaller than or equal to `b`. Value: `"+t+"`");r=t}}),Ei(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!Ii(t))throw new TypeError("invalid value. Must be an integer. Value: `"+t+"`");if(r>t)throw new RangeError("invalid value. Must be greater than or equal to `a`. Value: `"+t+"`");n=t}}),this}Ti(Yi.prototype,"entropy",(function(){return Si(this.a,this.b)})),Ti(Yi.prototype,"kurtosis",(function(){return Mi(this.a,this.b)})),Ti(Yi.prototype,"mean",(function(){return Vi(this.a,this.b)})),Ti(Yi.prototype,"median",(function(){return Fi(this.a,this.b)})),Ti(Yi.prototype,"skewness",(function(){return Pi(this.a,this.b)})),Ti(Yi.prototype,"stdev",(function(){return Hi(this.a,this.b)})),Ti(Yi.prototype,"variance",(function(){return Gi(this.a,this.b)})),Oi(Yi.prototype,"cdf",(function(r){return ki(r,this.a,this.b)})),Oi(Yi.prototype,"logcdf",(function(r){return qi(r,this.a,this.b)})),Oi(Yi.prototype,"logpmf",(function(r){return xi(r,this.a,this.b)})),Oi(Yi.prototype,"mgf",(function(r){return Li(r,this.a,this.b)})),Oi(Yi.prototype,"pmf",(function(r){return Wi(r,this.a,this.b)})),Oi(Yi.prototype,"quantile",(function(r){return Ri(r,this.a,this.b)}));var Ci=Yi,Di=p,zi={};return Di(zi,"cdf",I),Di(zi,"DiscreteUniform",Ci),Di(zi,"entropy",Fn),Di(zi,"kurtosis",Le),Di(zi,"logcdf",Nu),Di(zi,"logpmf",Iu),Di(zi,"mean",Ye),Di(zi,"median",ze),Di(zi,"mgf",ci),Di(zi,"pmf",hi),Di(zi,"quantile",ji),Di(zi,"skewness",Ke),Di(zi,"stdev",nu),Di(zi,"variance",iu),zi}));
//# sourceMappingURL=bundle.js.map
