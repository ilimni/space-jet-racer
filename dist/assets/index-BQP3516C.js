var gc=Object.defineProperty;var xc=(i,t,e)=>t in i?gc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var A=(i,t,e)=>xc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="170",_c=0,io=1,vc=2,yl=1,yc=2,dn=3,Pn=0,Le=1,Qe=2,Cn=0,_i=1,Vs=2,so=3,ro=4,Mc=5,Hn=100,Sc=101,Ec=102,bc=103,Tc=104,wc=200,Ac=201,Cc=202,Rc=203,Or=204,Br=205,Pc=206,Lc=207,Dc=208,Ic=209,Uc=210,Nc=211,Fc=212,Oc=213,Bc=214,zr=0,kr=1,Hr=2,Si=3,Vr=4,Gr=5,Wr=6,Xr=7,Ml=0,zc=1,kc=2,Rn=0,Hc=1,Vc=2,Gc=3,Sl=4,Wc=5,Xc=6,qc=7,El=300,Ei=301,bi=302,qr=303,Yr=304,Zs=306,jr=1e3,Wn=1001,Zr=1002,$e=1003,Yc=1004,rs=1005,tn=1006,nr=1007,Xn=1008,xn=1009,bl=1010,Tl=1011,ji=1012,Pa=1013,Yn=1014,fn=1015,Qi=1016,La=1017,Da=1018,Ti=1020,wl=35902,Al=1021,Cl=1022,Ze=1023,Rl=1024,Pl=1025,vi=1026,wi=1027,Ll=1028,Ia=1029,Dl=1030,Ua=1031,Na=1033,Ns=33776,Fs=33777,Os=33778,Bs=33779,$r=35840,Kr=35841,Jr=35842,Qr=35843,ta=36196,ea=37492,na=37496,ia=37808,sa=37809,ra=37810,aa=37811,oa=37812,la=37813,ca=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,zs=36492,xa=36494,_a=36495,Il=36283,va=36284,ya=36285,Ma=36286,jc=3200,Zc=3201,Ul=0,$c=1,wn="",ze="srgb",Ci="srgb-linear",$s="linear",ee="srgb",ti=7680,ao=519,Kc=512,Jc=513,Qc=514,Nl=515,th=516,eh=517,nh=518,ih=519,oo=35044,lo="300 es",pn=2e3,Gs=2001;class Ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let co=1234567;const Vi=Math.PI/180,Zi=180/Math.PI;function Kn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Fa(i,t){return(i%t+t)%t}function sh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function rh(i,t,e){return i!==t?(e-i)/(t-i):0}function Gi(i,t,e){return(1-e)*i+e*t}function ah(i,t,e,n){return Gi(i,t,1-Math.exp(-e*n))}function oh(i,t=1){return t-Math.abs(Fa(i,t*2)-t)}function lh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ch(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function uh(i,t){return i+Math.random()*(t-i)}function dh(i){return i*(.5-Math.random())}function fh(i){i!==void 0&&(co=i);let t=co+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ph(i){return i*Vi}function mh(i){return i*Zi}function gh(i){return(i&i-1)===0&&i!==0}function xh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _h(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zi={DEG2RAD:Vi,RAD2DEG:Zi,generateUUID:Kn,clamp:ye,euclideanModulo:Fa,mapLinear:sh,inverseLerp:rh,lerp:Gi,damp:ah,pingpong:oh,smoothstep:lh,smootherstep:ch,randInt:hh,randFloat:uh,randFloatSpread:dh,seededRandom:fh,degToRad:ph,radToDeg:mh,isPowerOfTwo:gh,ceilPowerOfTwo:xh,floorPowerOfTwo:_h,setQuaternionFromProperEuler:vh,normalize:Ae,denormalize:mi};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,s,r,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],b=s[1],M=s[4],_=s[7],I=s[2],P=s[5],R=s[8];return r[0]=a*x+o*b+l*I,r[3]=a*m+o*M+l*P,r[6]=a*p+o*_+l*R,r[1]=c*x+h*b+u*I,r[4]=c*m+h*M+u*P,r[7]=c*p+h*_+u*R,r[2]=d*x+f*b+g*I,r[5]=d*m+f*M+g*P,r[8]=d*p+f*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ir.makeScale(t,e)),this}rotate(t){return this.premultiply(ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new Vt;function Fl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yh(){const i=Ws("canvas");return i.style.display="block",i}const ho={};function ki(i){i in ho||(ho[i]=!0,console.warn(i))}function Mh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Sh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Eh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=gn(i.r),i.g=gn(i.g),i.b=gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wn?$s:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const uo=[.64,.33,.3,.6,.15,.06],fo=[.2126,.7152,.0722],po=[.3127,.329],mo=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),go=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Ci]:{primaries:uo,whitePoint:po,transfer:$s,toXYZ:mo,fromXYZ:go,luminanceCoefficients:fo,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:uo,whitePoint:po,transfer:ee,toXYZ:mo,fromXYZ:go,luminanceCoefficients:fo,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});let ei;class bh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=Ws("canvas")),ei.width=t.width,ei.height=t.height;const n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Th=0;class Ol{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sr(s[a].image)):r.push(sr(s[a]))}else r=sr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wh=0;class De extends Ri{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=Wn,s=Wn,r=tn,a=Xn,o=Ze,l=xn,c=De.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Kn(),this.name="",this.source=new Ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==El)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jr:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jr:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=El;De.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(f+1)/2,I=(p+1)/2,P=(h+d)/4,R=(u+x)/4,D=(g+m)/4;return M>_&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=P/n,r=R/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=P/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=D/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ah extends Ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ol(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Ah{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bl extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ch extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*x,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const I=Math.sqrt(M),P=Math.atan2(I,p*b);m=Math.sin(m*P)/I,o=Math.sin(o*P)/I}const _=o*b;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rr.copy(this).projectOnVector(t),this.sub(rr)}reflect(t){return this.sub(rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new w,xo=new en;class ts{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,We):We.fromBufferAttribute(r,a),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),as.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(t.matrixWorld),this.union(as)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ii),os.subVectors(this.max,Ii),ni.subVectors(t.a,Ii),ii.subVectors(t.b,Ii),si.subVectors(t.c,Ii),yn.subVectors(ii,ni),Mn.subVectors(si,ii),In.subVectors(ni,si);let e=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-In.z,In.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,In.z,0,-In.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-In.y,In.x,0];return!ar(e,ni,ii,si,os)||(e=[1,0,0,0,1,0,0,0,1],!ar(e,ni,ii,si,os))?!1:(ls.crossVectors(yn,Mn),e=[ls.x,ls.y,ls.z],ar(e,ni,ii,si,os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new w,new w,new w,new w,new w,new w,new w,new w],We=new w,as=new ts,ni=new w,ii=new w,si=new w,yn=new w,Mn=new w,In=new w,Ii=new w,os=new w,ls=new w,Un=new w;function ar(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Un.fromArray(i,r);const o=s.x*Math.abs(Un.x)+s.y*Math.abs(Un.y)+s.z*Math.abs(Un.z),l=t.dot(Un),c=e.dot(Un),h=n.dot(Un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Rh=new ts,Ui=new w,or=new w;class es{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(or.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(or)),this.expandByPoint(Ui.copy(t.center).sub(or))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new w,lr=new w,cs=new w,Sn=new w,cr=new w,hs=new w,hr=new w;class Oa{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lr.copy(t).add(e).multiplyScalar(.5),cs.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(lr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(cs),o=Sn.dot(this.direction),l=-Sn.dot(cs),c=Sn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lr).addScaledVector(cs,d),f}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){cr.subVectors(e,t),hs.subVectors(n,t),hr.crossVectors(cr,hs);let a=this.direction.dot(hr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,t);const l=o*this.direction.dot(hs.crossVectors(Sn,hs));if(l<0)return null;const c=o*this.direction.dot(cr.cross(Sn));if(c<0||l+c>a)return null;const h=-o*Sn.dot(hr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ri.setFromMatrixColumn(t,0).length(),r=1/ri.setFromMatrixColumn(t,1).length(),a=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ph,t,Lh)}lookAt(t,e,n){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),En.crossVectors(n,Ue),En.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),En.crossVectors(n,Ue)),En.normalize(),us.crossVectors(Ue,En),s[0]=En.x,s[4]=us.x,s[8]=Ue.x,s[1]=En.y,s[5]=us.y,s[9]=Ue.y,s[2]=En.z,s[6]=us.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],M=n[7],_=n[11],I=n[15],P=s[0],R=s[4],D=s[8],E=s[12],y=s[1],L=s[5],k=s[9],B=s[13],W=s[2],j=s[6],G=s[10],$=s[14],V=s[3],at=s[7],ut=s[11],_t=s[15];return r[0]=a*P+o*y+l*W+c*V,r[4]=a*R+o*L+l*j+c*at,r[8]=a*D+o*k+l*G+c*ut,r[12]=a*E+o*B+l*$+c*_t,r[1]=h*P+u*y+d*W+f*V,r[5]=h*R+u*L+d*j+f*at,r[9]=h*D+u*k+d*G+f*ut,r[13]=h*E+u*B+d*$+f*_t,r[2]=g*P+x*y+m*W+p*V,r[6]=g*R+x*L+m*j+p*at,r[10]=g*D+x*k+m*G+p*ut,r[14]=g*E+x*B+m*$+p*_t,r[3]=b*P+M*y+_*W+I*V,r[7]=b*R+M*L+_*j+I*at,r[11]=b*D+M*k+_*G+I*ut,r[15]=b*E+M*B+_*$+I*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],b=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,M=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,_=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,I=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,P=e*b+n*M+s*_+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=b*R,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*R,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*R,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*R,t[4]=M*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*R,t[8]=_*R,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*R,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*R,t[12]=I*R,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*R,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,b=l*c,M=l*h,_=l*u,I=n.x,P=n.y,R=n.z;return s[0]=(1-(x+p))*I,s[1]=(f+_)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(f-_)*P,s[5]=(1-(d+p))*P,s[6]=(m+b)*P,s[7]=0,s[8]=(g+M)*R,s[9]=(m-b)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ri.set(s[0],s[1],s[2]).length();const a=ri.set(s[4],s[5],s[6]).length(),o=ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xe.copy(this);const c=1/r,h=1/a,u=1/o;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=u,Xe.elements[9]*=u,Xe.elements[10]*=u,e.setFromRotationMatrix(Xe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=pn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===pn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Gs)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=pn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h;let g,x;if(o===pn)g=(a+r)*u,x=-2*u;else if(o===Gs)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new w,Xe=new ae,Ph=new w(0,0,0),Lh=new w(1,1,1),En=new w,us=new w,Ue=new w,_o=new ae,vo=new en;class nn{constructor(t=0,e=0,n=0,s=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _o.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_o,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vo.setFromEuler(this),this.setFromQuaternion(vo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dh=0;const yo=new w,ai=new en,cn=new ae,ds=new w,Ni=new w,Ih=new w,Uh=new en,Mo=new w(1,0,0),So=new w(0,1,0),Eo=new w(0,0,1),bo={type:"added"},Nh={type:"removed"},oi={type:"childadded",child:null},ur={type:"childremoved",child:null};class Me extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new w,e=new nn,n=new en,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Vt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.multiply(ai),this}rotateOnWorldAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.premultiply(ai),this}rotateX(t){return this.rotateOnAxis(Mo,t)}rotateY(t){return this.rotateOnAxis(So,t)}rotateZ(t){return this.rotateOnAxis(Eo,t)}translateOnAxis(t,e){return yo.copy(t).applyQuaternion(this.quaternion),this.position.add(yo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mo,t)}translateY(t){return this.translateOnAxis(So,t)}translateZ(t){return this.translateOnAxis(Eo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ds.copy(t):ds.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Ni,ds,this.up):cn.lookAt(ds,Ni,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(cn),this.quaternion.premultiply(ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bo),oi.child=t,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nh),ur.child=t,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bo),oi.child=t,this.dispatchEvent(oi),oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,Ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Uh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new w(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new w,hn=new w,dr=new w,un=new w,li=new w,ci=new w,To=new w,fr=new w,pr=new w,mr=new w,gr=new ne,xr=new ne,_r=new ne;class je{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qe.subVectors(t,e),s.cross(qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qe.subVectors(s,e),hn.subVectors(n,e),dr.subVectors(t,e);const a=qe.dot(qe),o=qe.dot(hn),l=qe.dot(dr),c=hn.dot(hn),h=hn.dot(dr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return gr.setScalar(0),xr.setScalar(0),_r.setScalar(0),gr.fromBufferAttribute(t,e),xr.fromBufferAttribute(t,n),_r.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(gr,r.x),a.addScaledVector(xr,r.y),a.addScaledVector(_r,r.z),a}static isFrontFacing(t,e,n,s){return qe.subVectors(n,e),hn.subVectors(t,e),qe.cross(hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),qe.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;li.subVectors(s,n),ci.subVectors(r,n),fr.subVectors(t,n);const l=li.dot(fr),c=ci.dot(fr);if(l<=0&&c<=0)return e.copy(n);pr.subVectors(t,s);const h=li.dot(pr),u=ci.dot(pr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(li,a);mr.subVectors(t,r);const f=li.dot(mr),g=ci.dot(mr);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ci,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return To.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(To,o);const p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(li,a).addScaledVector(ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function vr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Fa(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vr(a,r,t+1/3),this.g=vr(a,r,t),this.b=vr(a,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=kl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return $t.fromWorkingColorSpace(Te.copy(this),t),Math.round(ye(Te.r*255,0,255))*65536+Math.round(ye(Te.g*255,0,255))*256+Math.round(ye(Te.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=ze){$t.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(fs);const n=Gi(bn.h,fs.h,e),s=Gi(bn.s,fs.s,e),r=Gi(bn.l,fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Ft;Ft.NAMES=kl;let Fh=0;class Jn extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Kn(),this.name="",this.blending=_i,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Or,this.blendDst=Br,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Or&&(n.blendSrc=this.blendSrc),this.blendDst!==Br&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xs extends Jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new w,ps=new lt;class we{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oo,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ps.fromBufferAttribute(this,e),ps.applyMatrix3(t),this.setXY(e,ps.x,ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oo&&(t.usage=this.usage),t}}class Hl extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vl extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Oh=0;const Be=new ae,yr=new Me,hi=new w,Ne=new ts,Fi=new ts,_e=new w;class Se extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fl(t)?Vl:Hl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return yr.lookAt(t),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Ne.min,Fi.min),Ne.expandByPoint(_e),_e.addVectors(Ne.max,Fi.max),Ne.expandByPoint(_e)):(Ne.expandByPoint(Fi.min),Ne.expandByPoint(Fi.max))}Ne.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(t,c),_e.add(hi)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new w,l[D]=new w;const c=new w,h=new w,u=new w,d=new lt,f=new lt,g=new lt,x=new w,m=new w;function p(D,E,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[D].add(x),o[E].add(x),o[y].add(x),l[D].add(m),l[E].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,E=b.length;D<E;++D){const y=b[D],L=y.start,k=y.count;for(let B=L,W=L+k;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new w,_=new w,I=new w,P=new w;function R(D){I.fromBufferAttribute(s,D),P.copy(I);const E=o[D];M.copy(E),M.sub(I.multiplyScalar(I.dot(E))).normalize(),_.crossVectors(P,E);const L=_.dot(l[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,L)}for(let D=0,E=b.length;D<E;++D){const y=b[D],L=y.start,k=y.count;for(let B=L,W=L+k;B<W;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new we(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wo=new ae,Nn=new Oa,ms=new es,Ao=new w,gs=new w,xs=new w,_s=new w,Mr=new w,vs=new w,Co=new w,ys=new w;class Dt extends Me{constructor(t=new Se,e=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Mr.fromBufferAttribute(u,t),a?vs.addScaledVector(Mr,h):vs.addScaledVector(Mr.sub(e),h))}e.add(vs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(ms.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(ms,Ao)===null||Nn.origin.distanceToSquared(Ao)>(t.far-t.near)**2))&&(wo.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(wo),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,I=M;_<I;_+=3){const P=o.getX(_),R=o.getX(_+1),D=o.getX(_+2);s=Ms(this,p,t,n,c,h,u,P,R,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const b=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);s=Ms(this,a,t,n,c,h,u,b,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,I=M;_<I;_+=3){const P=_,R=_+1,D=_+2;s=Ms(this,p,t,n,c,h,u,P,R,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const b=m,M=m+1,_=m+2;s=Ms(this,a,t,n,c,h,u,b,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Bh(i,t,e,n,s,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Pn,o),l===null)return null;ys.copy(o),ys.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ys);return c<e.near||c>e.far?null:{distance:c,point:ys.clone(),object:i}}function Ms(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,gs),i.getVertexPosition(l,xs),i.getVertexPosition(c,_s);const h=Bh(i,t,e,n,gs,xs,_s,Co);if(h){const u=new w;je.getBarycoord(Co,gs,xs,_s,u),s&&(h.uv=je.getInterpolatedAttribute(s,o,l,c,u,new lt)),r&&(h.uv1=je.getInterpolatedAttribute(r,o,l,c,u,new lt)),a&&(h.normal=je.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new w,materialIndex:0};je.getNormal(gs,xs,_s,d.normal),h.face=d,h.barycoord=u}return h}class ve extends Se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function g(x,m,p,b,M,_,I,P,R,D,E){const y=_/R,L=I/D,k=_/2,B=I/2,W=P/2,j=R+1,G=D+1;let $=0,V=0;const at=new w;for(let ut=0;ut<G;ut++){const _t=ut*L-B;for(let Pt=0;Pt<j;Pt++){const Zt=Pt*y-k;at[x]=Zt*b,at[m]=_t*M,at[p]=W,c.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[p]=P>0?1:-1,h.push(at.x,at.y,at.z),u.push(Pt/R),u.push(1-ut/D),$+=1}}for(let ut=0;ut<D;ut++)for(let _t=0;_t<R;_t++){const Pt=d+_t+j*ut,Zt=d+_t+j*(ut+1),q=d+(_t+1)+j*(ut+1),nt=d+(_t+1)+j*ut;l.push(Pt,Zt,nt),l.push(Zt,q,nt),V+=6}o.addGroup(f,V,E),f+=V,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ai(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=Ai(i[e]);for(const s in n)t[s]=n[s]}return t}function zh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const kh={clone:Ai,merge:Ce};var Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=zh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wl extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new w,Ro=new lt,Po=new lt;class Fe extends Wl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Ro,Po),e.subVectors(Po,Ro)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,di=1;class Gh extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fe(ui,di,t,e);s.layers=this.layers,this.add(s);const r=new Fe(ui,di,t,e);r.layers=this.layers,this.add(r);const a=new Fe(ui,di,t,e);a.layers=this.layers,this.add(a);const o=new Fe(ui,di,t,e);o.layers=this.layers,this.add(o);const l=new Fe(ui,di,t,e);l.layers=this.layers,this.add(l);const c=new Fe(ui,di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xl extends De{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wh extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ve(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Cn});r.uniforms.tEquirect.value=e;const a=new Dt(s,r),o=e.minFilter;return e.minFilter===Xn&&(e.minFilter=tn),new Gh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Sr=new w,Xh=new w,qh=new Vt;class zn{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Sr.subVectors(n,e).cross(Xh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Sr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qh.getNormalMatrix(t),s=this.coplanarPoint(Sr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new es,Ss=new w;class Ba{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],b=s[13],M=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+a,d+h,m+g,_+b).normalize(),n[3].setComponents(l-a,d-h,m-g,_-b).normalize(),n[4].setComponents(l-o,d-u,m-x,_-M).normalize(),e===pn)n[5].setComponents(l+o,d+u,m+x,_+M).normalize();else if(e===Gs)n[5].setComponents(o,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ss.x=s.normal.x>0?t.max.x:t.min.x,Ss.y=s.normal.y>0?t.max.y:t.min.y,Ss.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ql(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yh(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ns extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const b=p*d-a;for(let M=0;M<c;M++){const _=M*u-r;g.push(_,-b,0),x.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const M=b+c*p,_=b+c*(p+1),I=b+1+c*(p+1),P=b+1+c*p;f.push(M,_,P),f.push(_,I,P)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.width,t.height,t.widthSegments,t.heightSegments)}}var jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,au=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ou=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_u=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ju=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ef=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ff=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:jh,alphahash_pars_fragment:Zh,alphamap_fragment:$h,alphamap_pars_fragment:Kh,alphatest_fragment:Jh,alphatest_pars_fragment:Qh,aomap_fragment:tu,aomap_pars_fragment:eu,batching_pars_vertex:nu,batching_vertex:iu,begin_vertex:su,beginnormal_vertex:ru,bsdfs:au,iridescence_fragment:ou,bumpmap_pars_fragment:lu,clipping_planes_fragment:cu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:uu,clipping_planes_vertex:du,color_fragment:fu,color_pars_fragment:pu,color_pars_vertex:mu,color_vertex:gu,common:xu,cube_uv_reflection_fragment:_u,defaultnormal_vertex:vu,displacementmap_pars_vertex:yu,displacementmap_vertex:Mu,emissivemap_fragment:Su,emissivemap_pars_fragment:Eu,colorspace_fragment:bu,colorspace_pars_fragment:Tu,envmap_fragment:wu,envmap_common_pars_fragment:Au,envmap_pars_fragment:Cu,envmap_pars_vertex:Ru,envmap_physical_pars_fragment:ku,envmap_vertex:Pu,fog_vertex:Lu,fog_pars_vertex:Du,fog_fragment:Iu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Nu,lightmap_pars_fragment:Fu,lights_lambert_fragment:Ou,lights_lambert_pars_fragment:Bu,lights_pars_begin:zu,lights_toon_fragment:Hu,lights_toon_pars_fragment:Vu,lights_phong_fragment:Gu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Xu,lights_physical_pars_fragment:qu,lights_fragment_begin:Yu,lights_fragment_maps:ju,lights_fragment_end:Zu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:Qu,map_fragment:td,map_pars_fragment:ed,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:rd,morphinstance_vertex:ad,morphcolor_vertex:od,morphnormal_vertex:ld,morphtarget_pars_vertex:cd,morphtarget_vertex:hd,normal_fragment_begin:ud,normal_fragment_maps:dd,normal_pars_fragment:fd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:xd,clearcoat_normal_fragment_maps:_d,clearcoat_pars_fragment:vd,iridescence_pars_fragment:yd,opaque_fragment:Md,packing:Sd,premultiplied_alpha_fragment:Ed,project_vertex:bd,dithering_fragment:Td,dithering_pars_fragment:wd,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:Cd,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Ld,shadowmask_pars_fragment:Dd,skinbase_vertex:Id,skinning_pars_vertex:Ud,skinning_vertex:Nd,skinnormal_vertex:Fd,specularmap_fragment:Od,specularmap_pars_fragment:Bd,tonemapping_fragment:zd,tonemapping_pars_fragment:kd,transmission_fragment:Hd,transmission_pars_fragment:Vd,uv_pars_fragment:Gd,uv_pars_vertex:Wd,uv_vertex:Xd,worldpos_vertex:qd,background_vert:Yd,background_frag:jd,backgroundCube_vert:Zd,backgroundCube_frag:$d,cube_vert:Kd,cube_frag:Jd,depth_vert:Qd,depth_frag:tf,distanceRGBA_vert:ef,distanceRGBA_frag:nf,equirect_vert:sf,equirect_frag:rf,linedashed_vert:af,linedashed_frag:of,meshbasic_vert:lf,meshbasic_frag:cf,meshlambert_vert:hf,meshlambert_frag:uf,meshmatcap_vert:df,meshmatcap_frag:ff,meshnormal_vert:pf,meshnormal_frag:mf,meshphong_vert:gf,meshphong_frag:xf,meshphysical_vert:_f,meshphysical_frag:vf,meshtoon_vert:yf,meshtoon_frag:Mf,points_vert:Sf,points_frag:Ef,shadow_vert:bf,shadow_frag:Tf,sprite_vert:wf,sprite_frag:Af},ct={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Je={basic:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ce([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ce([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ce([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ce([ct.points,ct.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ce([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ce([ct.common,ct.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ce([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ce([ct.sprite,ct.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ce([ct.common,ct.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ce([ct.lights,ct.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Je.physical={uniforms:Ce([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Es={r:0,b:0,g:0},On=new nn,Cf=new ae;function Rf(i,t,e,n,s,r,a){const o=new Ft(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1;const _=g(b);_===null?p(o,l):_&&_.isColor&&(p(_,1),M=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===Zs)?(h===void 0&&(h=new Dt(new ve(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Ai(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),On.copy(M.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cf.makeRotationFromEuler(On)),h.material.toneMapped=$t.getTransfer(_.colorSpace)!==ee,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Dt(new ns(2,2),new Ln({name:"BackgroundMaterial",uniforms:Ai(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=$t.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Es,Gl(i)),n.buffers.color.setClear(Es.r,Es.g,Es.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:m}}function Pf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,L,k,B,W){let j=!1;const G=u(B,k,L);r!==G&&(r=G,c(r.object)),j=f(y,B,k,W),j&&g(y,B,k,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,_(y,L,k,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,L,k){const B=k.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let j=W[L.id];j===void 0&&(j={},W[L.id]=j);let G=j[B];return G===void 0&&(G=d(l()),j[B]=G),G}function d(y){const L=[],k=[],B=[];for(let W=0;W<e;W++)L[W]=0,k[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:B,object:y,attributes:{},index:null}}function f(y,L,k,B){const W=r.attributes,j=L.attributes;let G=0;const $=k.getAttributes();for(const V in $)if($[V].location>=0){const ut=W[V];let _t=j[V];if(_t===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),ut===void 0||ut.attribute!==_t||_t&&ut.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(y,L,k,B){const W={},j=L.attributes;let G=0;const $=k.getAttributes();for(const V in $)if($[V].location>=0){let ut=j[V];ut===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));const _t={};_t.attribute=ut,ut&&ut.data&&(_t.data=ut.data),W[V]=_t,G++}r.attributes=W,r.attributesNum=G,r.index=B}function x(){const y=r.newAttributes;for(let L=0,k=y.length;L<k;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const k=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;k[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),W[y]!==L&&(i.vertexAttribDivisor(y,L),W[y]=L)}function b(){const y=r.newAttributes,L=r.enabledAttributes;for(let k=0,B=L.length;k<B;k++)L[k]!==y[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function M(y,L,k,B,W,j,G){G===!0?i.vertexAttribIPointer(y,L,k,W,j):i.vertexAttribPointer(y,L,k,B,W,j)}function _(y,L,k,B){x();const W=B.attributes,j=k.getAttributes(),G=L.defaultAttributeValues;for(const $ in j){const V=j[$];if(V.location>=0){let at=W[$];if(at===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){const ut=at.normalized,_t=at.itemSize,Pt=t.get(at);if(Pt===void 0)continue;const Zt=Pt.buffer,q=Pt.type,nt=Pt.bytesPerElement,yt=q===i.INT||q===i.UNSIGNED_INT||at.gpuType===Pa;if(at.isInterleavedBufferAttribute){const rt=at.data,Rt=rt.stride,Nt=at.offset;if(rt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<V.locationSize;Lt++)p(V.location+Lt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Lt=0;Lt<V.locationSize;Lt++)m(V.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Lt=0;Lt<V.locationSize;Lt++)M(V.location+Lt,_t/V.locationSize,q,ut,Rt*nt,(Nt+_t/V.locationSize*Lt)*nt,yt)}else{if(at.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt,at.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let rt=0;rt<V.locationSize;rt++)M(V.location+rt,_t/V.locationSize,q,ut,_t*nt,_t/V.locationSize*rt*nt,yt)}}else if(G!==void 0){const ut=G[$];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(V.location,ut);break;case 3:i.vertexAttrib3fv(V.location,ut);break;case 4:i.vertexAttrib4fv(V.location,ut);break;default:i.vertexAttrib1fv(V.location,ut)}}}}b()}function I(){D();for(const y in n){const L=n[y];for(const k in L){const B=L[k];for(const W in B)h(B[W].object),delete B[W];delete L[k]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const k in L){const B=L[k];for(const W in B)h(B[W].object),delete B[W];delete L[k]}delete n[y.id]}function R(y){for(const L in n){const k=n[L];if(k[y.id]===void 0)continue;const B=k[y.id];for(const W in B)h(B[W].object),delete B[W];delete k[y.id]}}function D(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Lf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Df(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ze&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fn&&!D)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:I,maxSamples:P}}function If(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new zn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,M=b*4;let _=p.clippingState||null;l.value=_,_=h(g,d,M,f);for(let I=0;I!==M;++I)_[I]=e[I];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==x;++M,_+=4)a.copy(u[M]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Uf(i){let t=new WeakMap;function e(a,o){return o===qr?a.mapping=Ei:o===Yr&&(a.mapping=bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===qr||o===Yr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Yl extends Wl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gi=4,Lo=[.125,.215,.35,.446,.526,.582],Vn=20,Er=new Yl,Do=new Ft;let br=null,Tr=0,wr=0,Ar=!1;const kn=(1+Math.sqrt(5))/2,fi=1/kn,Io=[new w(-kn,fi,0),new w(kn,fi,0),new w(-fi,0,kn),new w(fi,0,kn),new w(0,kn,-fi),new w(0,kn,fi),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class Uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){br=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(br,Tr,wr),this._renderer.xr.enabled=Ar,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),br=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Qi,format:Ze,colorSpace:Ci,depthBuffer:!1},s=No(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=No(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nf(r)),this._blurMaterial=Ff(r,t,e)}return s}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,Er)}_sceneToCubeUV(t,e,n,s){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Do),h.toneMapping=Rn,h.autoClear=!1;const f=new Xs({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new Dt(new ve,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Do),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;bs(s,b*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ei||t.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Er)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Io[(s-r-1)%Io.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Dt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Vn;m>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const p=[];let b=0;for(let R=0;R<Vn;++R){const D=R/x,E=Math.exp(-D*D/2);p.push(E),R===0?b+=E:R<m&&(b+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const _=this._sizeLods[s],I=3*_*(s>M-gi?s-M+gi:0),P=4*(this._cubeSize-_);bs(e,I,P,3*_,2*_),l.setRenderTarget(e),l.render(u,Er)}}function Nf(i){const t=[],e=[],n=[];let s=i;const r=i-gi+1+Lo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-gi?l=Lo[a-i+gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let P=0;P<f;P++){const R=P%3*2/3-1,D=P>2?0:-1,E=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];b.set(E,x*g*P),M.set(d,m*g*P);const y=[P,P,P,P,P,P];_.set(y,p*g*P)}const I=new Se;I.setAttribute("position",new we(b,x)),I.setAttribute("uv",new we(M,m)),I.setAttribute("faceIndex",new we(_,p)),t.push(I),s>gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function No(i,t,e){const n=new jn(i,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ff(i,t,e){const n=new Float32Array(Vn),s=new w(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Fo(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Oo(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function za(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Of(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===qr||l===Yr,h=l===Ei||l===bi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Uo(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Uo(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zf(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const b=f.array;x=f.version;for(let M=0,_=b.length;M<_;M+=3){const I=b[M+0],P=b[M+1],R=b[M+2];d.push(I,P,P,R,R,I)}}else if(g!==void 0){const b=g.array;x=g.version;for(let M=0,_=b.length/3-1;M<_;M+=3){const I=M+0,P=M+1,R=M+2;d.push(I,P,P,R,R,I)}}else return;const m=new(Fl(d)?Vl:Hl)(d,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function kf(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*x[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vf(i,t,e){const n=new WeakMap,s=new ne;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let I=o.attributes.position.count*_,P=1;I>t.maxTextureSize&&(P=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const R=new Float32Array(I*P*4*u),D=new Bl(R,I,P,u);D.type=fn,D.needsUpdate=!0;const E=_*4;for(let L=0;L<u;L++){const k=p[L],B=b[L],W=M[L],j=I*P*4*L;for(let G=0;G<k.count;G++){const $=G*E;g===!0&&(s.fromBufferAttribute(k,G),R[j+$+0]=s.x,R[j+$+1]=s.y,R[j+$+2]=s.z,R[j+$+3]=0),x===!0&&(s.fromBufferAttribute(B,G),R[j+$+4]=s.x,R[j+$+5]=s.y,R[j+$+6]=s.z,R[j+$+7]=0),m===!0&&(s.fromBufferAttribute(W,G),R[j+$+8]=s.x,R[j+$+9]=s.y,R[j+$+10]=s.z,R[j+$+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new lt(I,P)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Gf(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class jl extends De{constructor(t,e,n,s,r,a,o,l,c,h=vi){if(h!==vi&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=Yn),n===void 0&&h===wi&&(n=Ti),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zl=new De,Bo=new jl(1,1),$l=new Bl,Kl=new Ch,Jl=new Xl,zo=[],ko=[],Ho=new Float32Array(16),Vo=new Float32Array(9),Go=new Float32Array(4);function Pi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zo[s];if(r===void 0&&(r=new Float32Array(s),zo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ks(i,t){let e=ko[t];e===void 0&&(e=new Int32Array(t),ko[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function jf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ge(e,n))return;Go.set(n),i.uniformMatrix2fv(this.addr,!1,Go),xe(e,n)}}function Zf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ge(e,n))return;Vo.set(n),i.uniformMatrix3fv(this.addr,!1,Vo),xe(e,n)}}function $f(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ge(e,n))return;Ho.set(n),i.uniformMatrix4fv(this.addr,!1,Ho),xe(e,n)}}function Kf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function ep(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bo.compareFunction=Nl,r=Bo):r=Zl,e.setTexture2D(t||r,s)}function ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kl,s)}function op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jl,s)}function lp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$l,s)}function cp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return jf;case 35675:return Zf;case 35676:return $f;case 5124:case 35670:return Kf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}}function hp(i,t){i.uniform1fv(this.addr,t)}function up(i,t){const e=Pi(t,this.size,2);i.uniform2fv(this.addr,e)}function dp(i,t){const e=Pi(t,this.size,3);i.uniform3fv(this.addr,e)}function fp(i,t){const e=Pi(t,this.size,4);i.uniform4fv(this.addr,e)}function pp(i,t){const e=Pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mp(i,t){const e=Pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gp(i,t){const e=Pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xp(i,t){i.uniform1iv(this.addr,t)}function _p(i,t){i.uniform2iv(this.addr,t)}function vp(i,t){i.uniform3iv(this.addr,t)}function yp(i,t){i.uniform4iv(this.addr,t)}function Mp(i,t){i.uniform1uiv(this.addr,t)}function Sp(i,t){i.uniform2uiv(this.addr,t)}function Ep(i,t){i.uniform3uiv(this.addr,t)}function bp(i,t){i.uniform4uiv(this.addr,t)}function Tp(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Zl,r[a])}function wp(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kl,r[a])}function Ap(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jl,r[a])}function Cp(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$l,r[a])}function Rp(i){switch(i){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return xp;case 35667:case 35671:return _p;case 35668:case 35672:return vp;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return Sp;case 36295:return Ep;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Cp}}class Pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cp(e.type)}}class Lp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rp(e.type)}}class Dp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function Wo(i,t){i.seq.push(t),i.map[t.id]=t}function Ip(i,t,e){const n=i.name,s=n.length;for(Cr.lastIndex=0;;){const r=Cr.exec(n),a=Cr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wo(e,c===void 0?new Pp(o,i,t):new Lp(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Dp(o),Wo(e,u)),e=u}}}class ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ip(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Xo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Up=37297;let Np=0;function Fp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const qo=new Vt;function Op(i){$t._getMatrix(qo,$t.workingColorSpace,i);const t=`mat3( ${qo.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case $s:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fp(i.getShaderSource(t),a)}else return s}function Bp(i,t){const e=Op(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zp(i,t){let e;switch(t){case Hc:e="Linear";break;case Vc:e="Reinhard";break;case Gc:e="Cineon";break;case Sl:e="ACESFilmic";break;case Xc:e="AgX";break;case qc:e="Neutral";break;case Wc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new w;function kp(){$t.getLuminanceCoefficients(Ts);const i=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function Vp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Hi(i){return i!==""}function jo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(i){return i.replace(Wp,qp)}const Xp=new Map;function qp(i,t){let e=Wt[t];if(e===void 0){const n=Xp.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sa(e)}const Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $o(i){return i.replace(Yp,jp)}function jp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ko(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function $p(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ei:case bi:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Jp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ml:t="ENVMAP_BLENDING_MULTIPLY";break;case zc:t="ENVMAP_BLENDING_MIX";break;case kc:t="ENVMAP_BLENDING_ADD";break}return t}function Qp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function tm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Zp(e),c=$p(e),h=Kp(e),u=Jp(e),d=Qp(e),f=Hp(e),g=Vp(r),x=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),p.length>0&&(p+=`
`)):(m=[Ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),p=[Ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Bp("linearToOutputTexel",e.outputColorSpace),kp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hi).join(`
`)),a=Sa(a),a=jo(a,e),a=Zo(a,e),o=Sa(o),o=jo(o,e),o=Zo(o,e),a=$o(a),o=$o(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+a,_=b+p+o,I=Xo(s,s.VERTEX_SHADER,M),P=Xo(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,P),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(P).trim();let j=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,P);else{const $=Yo(s,I,"vertex"),V=Yo(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+$+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||W==="")&&(G=!1);G&&(L.diagnostics={runnable:j,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(I),s.deleteShader(P),D=new ks(s,x),E=Gp(s,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Up)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Np++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=P,this}let em=0;class nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new im(t),e.set(t,n)),n}}class im{constructor(t){this.id=em++,this.code=t,this.usedTimes=0}}function sm(i,t,e,n,s,r,a){const o=new zl,l=new nm,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,L,k,B){const W=k.fog,j=B.geometry,G=E.isMeshStandardMaterial?k.environment:null,$=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),V=$&&$.mapping===Zs?$.image.height:null,at=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_t=ut!==void 0?ut.length:0;let Pt=0;j.morphAttributes.position!==void 0&&(Pt=1),j.morphAttributes.normal!==void 0&&(Pt=2),j.morphAttributes.color!==void 0&&(Pt=3);let Zt,q,nt,yt;if(at){const te=Je[at];Zt=te.vertexShader,q=te.fragmentShader}else Zt=E.vertexShader,q=E.fragmentShader,l.update(E),nt=l.getVertexShaderID(E),yt=l.getFragmentShaderID(E);const rt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Nt=B.isInstancedMesh===!0,Lt=B.isBatchedMesh===!0,Xt=!!E.map,J=!!E.matcap,it=!!$,C=!!E.aoMap,At=!!E.lightMap,tt=!!E.bumpMap,vt=!!E.normalMap,ot=!!E.displacementMap,It=!!E.emissiveMap,gt=!!E.metalnessMap,T=!!E.roughnessMap,v=E.anisotropy>0,O=E.clearcoat>0,Y=E.dispersion>0,Q=E.iridescence>0,Z=E.sheen>0,Et=E.transmission>0,ht=v&&!!E.anisotropyMap,xt=O&&!!E.clearcoatMap,qt=O&&!!E.clearcoatNormalMap,et=O&&!!E.clearcoatRoughnessMap,Mt=Q&&!!E.iridescenceMap,Ut=Q&&!!E.iridescenceThicknessMap,Ot=Z&&!!E.sheenColorMap,St=Z&&!!E.sheenRoughnessMap,Yt=!!E.specularMap,Gt=!!E.specularColorMap,ie=!!E.specularIntensityMap,U=Et&&!!E.transmissionMap,dt=Et&&!!E.thicknessMap,X=!!E.gradientMap,K=!!E.alphaMap,mt=E.alphaTest>0,ft=!!E.alphaHash,kt=!!E.extensions;let ue=Rn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=i.toneMapping);const Ee={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:Zt,fragmentShader:q,defines:E.defines,customVertexShaderID:nt,customFragmentShaderID:yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&B._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&B.instanceColor!==null,instancingMorph:Nt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ci,alphaToCoverage:!!E.alphaToCoverage,map:Xt,matcap:J,envMap:it,envMapMode:it&&$.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:At,bumpMap:tt,normalMap:vt,displacementMap:d&&ot,emissiveMap:It,normalMapObjectSpace:vt&&E.normalMapType===$c,normalMapTangentSpace:vt&&E.normalMapType===Ul,metalnessMap:gt,roughnessMap:T,anisotropy:v,anisotropyMap:ht,clearcoat:O,clearcoatMap:xt,clearcoatNormalMap:qt,clearcoatRoughnessMap:et,dispersion:Y,iridescence:Q,iridescenceMap:Mt,iridescenceThicknessMap:Ut,sheen:Z,sheenColorMap:Ot,sheenRoughnessMap:St,specularMap:Yt,specularColorMap:Gt,specularIntensityMap:ie,transmission:Et,transmissionMap:U,thicknessMap:dt,gradientMap:X,opaque:E.transparent===!1&&E.blending===_i&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:mt,alphaHash:ft,combine:E.combine,mapUv:Xt&&x(E.map.channel),aoMapUv:C&&x(E.aoMap.channel),lightMapUv:At&&x(E.lightMap.channel),bumpMapUv:tt&&x(E.bumpMap.channel),normalMapUv:vt&&x(E.normalMap.channel),displacementMapUv:ot&&x(E.displacementMap.channel),emissiveMapUv:It&&x(E.emissiveMap.channel),metalnessMapUv:gt&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:ht&&x(E.anisotropyMap.channel),clearcoatMapUv:xt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:qt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:St&&x(E.sheenRoughnessMap.channel),specularMapUv:Yt&&x(E.specularMap.channel),specularColorMapUv:Gt&&x(E.specularColorMap.channel),specularIntensityMapUv:ie&&x(E.specularIntensityMap.channel),transmissionMapUv:U&&x(E.transmissionMap.channel),thicknessMapUv:dt&&x(E.thicknessMap.channel),alphaMapUv:K&&x(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(vt||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(Xt||K),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Pt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Xt&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===ee,decodeVideoTextureEmissive:It&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qe,flipSided:E.side===Le,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&E.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)y.push(L),y.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(b(y,E),M(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function b(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const y=g[E.type];let L;if(y){const k=Je[y];L=kh.clone(k.uniforms)}else L=E.uniforms;return L}function I(E,y){let L;for(let k=0,B=h.length;k<B;k++){const W=h[k];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new tm(i,y,E,r),h.push(L)),L}function P(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:P,releaseShaderCache:R,programs:h,dispose:D}}function rm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function am(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||am),n.length>1&&n.sort(d||Jo),s.length>1&&s.sort(d||Jo)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function om(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Qo,i.set(n,[a])):s>=r.length?(a=new Qo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Ft};break;case"SpotLight":e={position:new w,direction:new w,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let hm=0;function um(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dm(i){const t=new lm,e=cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const s=new w,r=new ae,a=new ae;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,M=0,_=0,I=0,P=0,R=0;c.sort(um);for(let E=0,y=c.length;E<y;E++){const L=c[E],k=L.color,B=L.intensity,W=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*B,u+=k.g*B,d+=k.b*B;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],B);R++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=L.shadow.matrix,b++}n.directional[f]=G,f++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(k).multiplyScalar(B),G.distance=W,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;const $=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,$.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[x]=$.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=j,_++}x++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(k).multiplyScalar(B),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const $=L.shadow,V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(B),G.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==_||D.numSpotMaps!==I||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=_,D.numSpotMaps=I,D.numLightProbes=R,n.version=hm++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function tl(i){const t=new dm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function fm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new tl(i),t.set(s,[o])):r>=a.length?(o=new tl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class pm extends Jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mm extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _m(i,t,e){let n=new Ba;const s=new lt,r=new lt,a=new ne,o=new pm({depthPacking:Zc}),l=new mm,c={},h=e.maxTextureSize,u={[Pn]:Le,[Le]:Pn,[Qe]:Qe},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:gm,fragmentShader:xm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let p=this.type;this.render=function(P,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Cn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==dn&&this.type===dn,W=p===dn&&this.type!==dn;for(let j=0,G=P.length;j<G;j++){const $=P[j],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const at=V.getFrameExtents();if(s.multiply(at),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,V.mapSize.y=r.y)),V.map===null||B===!0||W===!0){const _t=this.type!==dn?{minFilter:$e,magFilter:$e}:{};V.map!==null&&V.map.dispose(),V.map=new jn(s.x,s.y,_t),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ut=V.getViewportCount();for(let _t=0;_t<ut;_t++){const Pt=V.getViewport(_t);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),k.viewport(a),V.updateMatrices($,_t),n=V.getFrustum(),_(R,D,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===dn&&b(V,D),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,L)};function b(P,R){const D=t.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new jn(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,D,d,x,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,D,f,x,null)}function M(P,R,D,E){let y=null;const L=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)y=L;else if(y=D.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=y.uuid,B=R.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let j=W[B];j===void 0&&(j=y.clone(),W[B]=j,R.addEventListener("dispose",I)),y=j}if(y.visible=R.visible,y.wireframe=R.wireframe,E===dn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=D}return y}function _(P,R,D,E,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===dn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const B=t.update(P),W=P.material;if(Array.isArray(W)){const j=B.groups;for(let G=0,$=j.length;G<$;G++){const V=j[G],at=W[V.materialIndex];if(at&&at.visible){const ut=M(P,at,E,y);P.onBeforeShadow(i,P,R,D,B,ut,V),i.renderBufferDirect(D,null,B,ut,P,V),P.onAfterShadow(i,P,R,D,B,ut,V)}}}else if(W.visible){const j=M(P,W,E,y);P.onBeforeShadow(i,P,R,D,B,j,null),i.renderBufferDirect(D,null,B,j,P,null),P.onAfterShadow(i,P,R,D,B,j,null)}}const k=P.children;for(let B=0,W=k.length;B<W;B++)_(k[B],R,D,E,y)}function I(P){P.target.removeEventListener("dispose",I);for(const D in c){const E=c[D],y=P.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const vm={[zr]:kr,[Hr]:Wr,[Vr]:Xr,[Si]:Gr,[kr]:zr,[Wr]:Hr,[Xr]:Vr,[Gr]:Si};function ym(i,t){function e(){let U=!1;const dt=new ne;let X=null;const K=new ne(0,0,0,0);return{setMask:function(mt){X!==mt&&!U&&(i.colorMask(mt,mt,mt,mt),X=mt)},setLocked:function(mt){U=mt},setClear:function(mt,ft,kt,ue,Ee){Ee===!0&&(mt*=ue,ft*=ue,kt*=ue),dt.set(mt,ft,kt,ue),K.equals(dt)===!1&&(i.clearColor(mt,ft,kt,ue),K.copy(dt))},reset:function(){U=!1,X=null,K.set(-1,0,0,0)}}}function n(){let U=!1,dt=!1,X=null,K=null,mt=null;return{setReversed:function(ft){if(dt!==ft){const kt=t.get("EXT_clip_control");dt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const ue=mt;mt=null,this.setClear(ue)}dt=ft},getReversed:function(){return dt},setTest:function(ft){ft?rt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(ft){X!==ft&&!U&&(i.depthMask(ft),X=ft)},setFunc:function(ft){if(dt&&(ft=vm[ft]),K!==ft){switch(ft){case zr:i.depthFunc(i.NEVER);break;case kr:i.depthFunc(i.ALWAYS);break;case Hr:i.depthFunc(i.LESS);break;case Si:i.depthFunc(i.LEQUAL);break;case Vr:i.depthFunc(i.EQUAL);break;case Gr:i.depthFunc(i.GEQUAL);break;case Wr:i.depthFunc(i.GREATER);break;case Xr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ft}},setLocked:function(ft){U=ft},setClear:function(ft){mt!==ft&&(dt&&(ft=1-ft),i.clearDepth(ft),mt=ft)},reset:function(){U=!1,X=null,K=null,mt=null,dt=!1}}}function s(){let U=!1,dt=null,X=null,K=null,mt=null,ft=null,kt=null,ue=null,Ee=null;return{setTest:function(te){U||(te?rt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(te){dt!==te&&!U&&(i.stencilMask(te),dt=te)},setFunc:function(te,Ve,rn){(X!==te||K!==Ve||mt!==rn)&&(i.stencilFunc(te,Ve,rn),X=te,K=Ve,mt=rn)},setOp:function(te,Ve,rn){(ft!==te||kt!==Ve||ue!==rn)&&(i.stencilOp(te,Ve,rn),ft=te,kt=Ve,ue=rn)},setLocked:function(te){U=te},setClear:function(te){Ee!==te&&(i.clearStencil(te),Ee=te)},reset:function(){U=!1,dt=null,X=null,K=null,mt=null,ft=null,kt=null,ue=null,Ee=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,M=null,_=null,I=null,P=null,R=new Ft(0,0,0),D=0,E=!1,y=null,L=null,k=null,B=null,W=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=$>=2);let at=null,ut={};const _t=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Zt=new ne().fromArray(_t),q=new ne().fromArray(Pt);function nt(U,dt,X,K){const mt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(U,ft),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<X;kt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(dt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ft}const yt={};yt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Si),tt(!1),vt(io),rt(i.CULL_FACE),C(Cn);function rt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Rt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Nt(U,dt){return u[U]!==dt?(i.bindFramebuffer(U,dt),u[U]=dt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Lt(U,dt){let X=f,K=!1;if(U){X=d.get(dt),X===void 0&&(X=[],d.set(dt,X));const mt=U.textures;if(X.length!==mt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,kt=mt.length;ft<kt;ft++)X[ft]=i.COLOR_ATTACHMENT0+ft;X.length=mt.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function Xt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const J={[Hn]:i.FUNC_ADD,[Sc]:i.FUNC_SUBTRACT,[Ec]:i.FUNC_REVERSE_SUBTRACT};J[bc]=i.MIN,J[Tc]=i.MAX;const it={[wc]:i.ZERO,[Ac]:i.ONE,[Cc]:i.SRC_COLOR,[Or]:i.SRC_ALPHA,[Uc]:i.SRC_ALPHA_SATURATE,[Dc]:i.DST_COLOR,[Pc]:i.DST_ALPHA,[Rc]:i.ONE_MINUS_SRC_COLOR,[Br]:i.ONE_MINUS_SRC_ALPHA,[Ic]:i.ONE_MINUS_DST_COLOR,[Lc]:i.ONE_MINUS_DST_ALPHA,[Nc]:i.CONSTANT_COLOR,[Fc]:i.ONE_MINUS_CONSTANT_COLOR,[Oc]:i.CONSTANT_ALPHA,[Bc]:i.ONE_MINUS_CONSTANT_ALPHA};function C(U,dt,X,K,mt,ft,kt,ue,Ee,te){if(U===Cn){x===!0&&(Rt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),U!==Mc){if(U!==m||te!==E){if((p!==Hn||_!==Hn)&&(i.blendEquation(i.FUNC_ADD),p=Hn,_=Hn),te)switch(U){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vs:i.blendFunc(i.ONE,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,M=null,I=null,P=null,R.set(0,0,0),D=0,m=U,E=te}return}mt=mt||dt,ft=ft||X,kt=kt||K,(dt!==p||mt!==_)&&(i.blendEquationSeparate(J[dt],J[mt]),p=dt,_=mt),(X!==b||K!==M||ft!==I||kt!==P)&&(i.blendFuncSeparate(it[X],it[K],it[ft],it[kt]),b=X,M=K,I=ft,P=kt),(ue.equals(R)===!1||Ee!==D)&&(i.blendColor(ue.r,ue.g,ue.b,Ee),R.copy(ue),D=Ee),m=U,E=!1}function At(U,dt){U.side===Qe?Rt(i.CULL_FACE):rt(i.CULL_FACE);let X=U.side===Le;dt&&(X=!X),tt(X),U.blending===_i&&U.transparent===!1?C(Cn):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const K=U.stencilWrite;o.setTest(K),K&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),It(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function vt(U){U!==_c?(rt(i.CULL_FACE),U!==L&&(U===io?i.cullFace(i.BACK):U===vc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),L=U}function ot(U){U!==k&&(G&&i.lineWidth(U),k=U)}function It(U,dt,X){U?(rt(i.POLYGON_OFFSET_FILL),(B!==dt||W!==X)&&(i.polygonOffset(dt,X),B=dt,W=X)):Rt(i.POLYGON_OFFSET_FILL)}function gt(U){U?rt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+j-1),at!==U&&(i.activeTexture(U),at=U)}function v(U,dt,X){X===void 0&&(at===null?X=i.TEXTURE0+j-1:X=at);let K=ut[X];K===void 0&&(K={type:void 0,texture:void 0},ut[X]=K),(K.type!==U||K.texture!==dt)&&(at!==X&&(i.activeTexture(X),at=X),i.bindTexture(U,dt||yt[U]),K.type=U,K.texture=dt)}function O(){const U=ut[at];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(U){Zt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Zt.copy(U))}function St(U){q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function Yt(U,dt){let X=c.get(dt);X===void 0&&(X=new WeakMap,c.set(dt,X));let K=X.get(U);K===void 0&&(K=i.getUniformBlockIndex(dt,U.name),X.set(U,K))}function Gt(U,dt){const K=c.get(dt).get(U);l.get(dt)!==K&&(i.uniformBlockBinding(dt,K,U.__bindingPointIndex),l.set(dt,K))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,ut={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,M=null,_=null,I=null,P=null,R=new Ft(0,0,0),D=0,E=!1,y=null,L=null,k=null,B=null,W=null,Zt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Rt,bindFramebuffer:Nt,drawBuffers:Lt,useProgram:Xt,setBlending:C,setMaterial:At,setFlipSided:tt,setCullFace:vt,setLineWidth:ot,setPolygonOffset:It,setScissorTest:gt,activeTexture:T,bindTexture:v,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Mt,texImage3D:Ut,updateUBOMapping:Yt,uniformBlockBinding:Gt,texStorage2D:qt,texStorage3D:et,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:xt,scissor:Ot,viewport:St,reset:ie}}function el(i,t,e,n){const s=Mm(n);switch(e){case Al:return i*t;case Rl:return i*t;case Pl:return i*t*2;case Ll:return i*t/s.components*s.byteLength;case Ia:return i*t/s.components*s.byteLength;case Dl:return i*t*2/s.components*s.byteLength;case Ua:return i*t*2/s.components*s.byteLength;case Cl:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case Na:return i*t*4/s.components*s.byteLength;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kr:case Qr:return Math.max(i,16)*Math.max(t,8)/4;case $r:case Jr:return Math.max(i,8)*Math.max(t,8)/2;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zs:case xa:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Il:case va:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ya:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mm(i){switch(i){case xn:case bl:return{byteLength:1,components:1};case ji:case Tl:case Qi:return{byteLength:2,components:1};case La:case Da:return{byteLength:2,components:4};case Yn:case Pa:case fn:return{byteLength:4,components:1};case wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Sm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):Ws("canvas")}function x(T,v,O){let Y=1;const Q=gt(T);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(Y*Q.width),Et=Math.floor(Y*Q.height);u===void 0&&(u=g(Z,Et));const ht=v?g(Z,Et):u;return ht.width=Z,ht.height=Et,ht.getContext("2d").drawImage(T,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Et+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,v,O,Y,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=v;if(v===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),v===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),v===i.RGBA){const Et=Q?$s:$t.getTransfer(Y);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=Et===ee?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(T,v){let O;return T?v===null||v===Yn||v===Ti?O=i.DEPTH24_STENCIL8:v===fn?O=i.DEPTH32F_STENCIL8:v===ji&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Yn||v===Ti?O=i.DEPTH_COMPONENT24:v===fn?O=i.DEPTH_COMPONENT32F:v===ji&&(O=i.DEPTH_COMPONENT16),O}function I(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==$e&&T.minFilter!==tn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function P(T){const v=T.target;v.removeEventListener("dispose",P),D(v),v.isVideoTexture&&h.delete(v)}function R(T){const v=T.target;v.removeEventListener("dispose",R),y(v)}function D(T){const v=n.get(T);if(v.__webglInit===void 0)return;const O=T.source,Y=d.get(O);if(Y){const Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(T),Object.keys(Y).length===0&&d.delete(O)}n.remove(T)}function E(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const O=T.source,Y=d.get(O);delete Y[v.__cacheKey],a.memory.textures--}function y(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=T.textures;for(let Y=0,Q=O.length;Y<Q;Y++){const Z=n.get(O[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(T)}let L=0;function k(){L=0}function B(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function W(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function j(T,v){const O=n.get(T);if(T.isVideoTexture&&ot(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,T,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function G(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function $(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function V(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){nt(O,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const at={[jr]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Zr]:i.MIRRORED_REPEAT},ut={[$e]:i.NEAREST,[Yc]:i.NEAREST_MIPMAP_NEAREST,[rs]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[nr]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},_t={[Kc]:i.NEVER,[ih]:i.ALWAYS,[Jc]:i.LESS,[Nl]:i.LEQUAL,[Qc]:i.EQUAL,[nh]:i.GEQUAL,[th]:i.GREATER,[eh]:i.NOTEQUAL};function Pt(T,v){if(v.type===fn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===tn||v.magFilter===nr||v.magFilter===rs||v.magFilter===Xn||v.minFilter===tn||v.minFilter===nr||v.minFilter===rs||v.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,at[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,at[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,at[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ut[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$e||v.minFilter!==rs&&v.minFilter!==Xn||v.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Zt(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",P));const Y=v.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const Z=W(v);if(Z!==T.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[Z].usedTimes++;const Et=Q[T.__cacheKey];Et!==void 0&&(Q[T.__cacheKey].usedTimes--,Et.usedTimes===0&&E(v)),T.__cacheKey=Z,T.__webglTexture=Q[Z].texture}return O}function q(T,v,O){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=Zt(T,v),Z=v.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+O);const Et=n.get(Z);if(Z.version!==Et.__version||Q===!0){e.activeTexture(i.TEXTURE0+O);const ht=$t.getPrimaries($t.workingColorSpace),xt=v.colorSpace===wn?null:$t.getPrimaries(v.colorSpace),qt=v.colorSpace===wn||ht===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let et=x(v.image,!1,s.maxTextureSize);et=It(v,et);const Mt=r.convert(v.format,v.colorSpace),Ut=r.convert(v.type);let Ot=M(v.internalFormat,Mt,Ut,v.colorSpace,v.isVideoTexture);Pt(Y,v);let St;const Yt=v.mipmaps,Gt=v.isVideoTexture!==!0,ie=Et.__version===void 0||Q===!0,U=Z.dataReady,dt=I(v,et);if(v.isDepthTexture)Ot=_(v.format===wi,v.type),ie&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,Ot,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Ot,et.width,et.height,0,Mt,Ut,null));else if(v.isDataTexture)if(Yt.length>0){Gt&&ie&&e.texStorage2D(i.TEXTURE_2D,dt,Ot,Yt[0].width,Yt[0].height);for(let X=0,K=Yt.length;X<K;X++)St=Yt[X],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,Mt,Ut,St.data):e.texImage2D(i.TEXTURE_2D,X,Ot,St.width,St.height,0,Mt,Ut,St.data);v.generateMipmaps=!1}else Gt?(ie&&e.texStorage2D(i.TEXTURE_2D,dt,Ot,et.width,et.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,Mt,Ut,et.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,et.width,et.height,0,Mt,Ut,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Gt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ot,Yt[0].width,Yt[0].height,et.depth);for(let X=0,K=Yt.length;X<K;X++)if(St=Yt[X],v.format!==Ze)if(Mt!==null)if(Gt){if(U)if(v.layerUpdates.size>0){const mt=el(St.width,St.height,v.format,v.type);for(const ft of v.layerUpdates){const kt=St.data.subarray(ft*mt/St.data.BYTES_PER_ELEMENT,(ft+1)*mt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ft,St.width,St.height,1,Mt,kt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,et.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ot,St.width,St.height,et.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,et.depth,Mt,Ut,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ot,St.width,St.height,et.depth,0,Mt,Ut,St.data)}else{Gt&&ie&&e.texStorage2D(i.TEXTURE_2D,dt,Ot,Yt[0].width,Yt[0].height);for(let X=0,K=Yt.length;X<K;X++)St=Yt[X],v.format!==Ze?Mt!==null?Gt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ot,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,Mt,Ut,St.data):e.texImage2D(i.TEXTURE_2D,X,Ot,St.width,St.height,0,Mt,Ut,St.data)}else if(v.isDataArrayTexture)if(Gt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ot,et.width,et.height,et.depth),U)if(v.layerUpdates.size>0){const X=el(et.width,et.height,v.format,v.type);for(const K of v.layerUpdates){const mt=et.data.subarray(K*X/et.data.BYTES_PER_ELEMENT,(K+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,Mt,Ut,mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Mt,Ut,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,et.width,et.height,et.depth,0,Mt,Ut,et.data);else if(v.isData3DTexture)Gt?(ie&&e.texStorage3D(i.TEXTURE_3D,dt,Ot,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Mt,Ut,et.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,et.width,et.height,et.depth,0,Mt,Ut,et.data);else if(v.isFramebufferTexture){if(ie)if(Gt)e.texStorage2D(i.TEXTURE_2D,dt,Ot,et.width,et.height);else{let X=et.width,K=et.height;for(let mt=0;mt<dt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Ot,X,K,0,Mt,Ut,null),X>>=1,K>>=1}}else if(Yt.length>0){if(Gt&&ie){const X=gt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Ot,X.width,X.height)}for(let X=0,K=Yt.length;X<K;X++)St=Yt[X],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Mt,Ut,St):e.texImage2D(i.TEXTURE_2D,X,Ot,Mt,Ut,St);v.generateMipmaps=!1}else if(Gt){if(ie){const X=gt(et);e.texStorage2D(i.TEXTURE_2D,dt,Ot,X.width,X.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ut,et)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Mt,Ut,et);m(v)&&p(Y),Et.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function nt(T,v,O){if(v.image.length!==6)return;const Y=Zt(T,v),Q=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const Z=n.get(Q);if(Q.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);const Et=$t.getPrimaries($t.workingColorSpace),ht=v.colorSpace===wn?null:$t.getPrimaries(v.colorSpace),xt=v.colorSpace===wn||Et===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const qt=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let K=0;K<6;K++)!qt&&!et?Mt[K]=x(v.image[K],!0,s.maxCubemapSize):Mt[K]=et?v.image[K].image:v.image[K],Mt[K]=It(v,Mt[K]);const Ut=Mt[0],Ot=r.convert(v.format,v.colorSpace),St=r.convert(v.type),Yt=M(v.internalFormat,Ot,St,v.colorSpace),Gt=v.isVideoTexture!==!0,ie=Z.__version===void 0||Y===!0,U=Q.dataReady;let dt=I(v,Ut);Pt(i.TEXTURE_CUBE_MAP,v);let X;if(qt){Gt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Yt,Ut.width,Ut.height);for(let K=0;K<6;K++){X=Mt[K].mipmaps;for(let mt=0;mt<X.length;mt++){const ft=X[mt];v.format!==Ze?Ot!==null?Gt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,ft.width,ft.height,Ot,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,Yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,ft.width,ft.height,Ot,St,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,Yt,ft.width,ft.height,0,Ot,St,ft.data)}}}else{if(X=v.mipmaps,Gt&&ie){X.length>0&&dt++;const K=gt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Yt,K.width,K.height)}for(let K=0;K<6;K++)if(et){Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt[K].width,Mt[K].height,Ot,St,Mt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,Mt[K].width,Mt[K].height,0,Ot,St,Mt[K].data);for(let mt=0;mt<X.length;mt++){const kt=X[mt].image[K].image;Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,kt.width,kt.height,Ot,St,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,Yt,kt.width,kt.height,0,Ot,St,kt.data)}}else{Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ot,St,Mt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,Ot,St,Mt[K]);for(let mt=0;mt<X.length;mt++){const ft=X[mt];Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,Ot,St,ft.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,Yt,Ot,St,ft.image[K])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function yt(T,v,O,Y,Q,Z){const Et=r.convert(O.format,O.colorSpace),ht=r.convert(O.type),xt=M(O.internalFormat,Et,ht,O.colorSpace),qt=n.get(v),et=n.get(O);if(et.__renderTarget=v,!qt.__hasExternalTextures){const Mt=Math.max(1,v.width>>Z),Ut=Math.max(1,v.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,xt,Mt,Ut,v.depth,0,Et,ht,null):e.texImage2D(Q,Z,xt,Mt,Ut,0,Et,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,et.__webglTexture,0,tt(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,et.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,Z=_(v.stencilBuffer,Q),Et=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=tt(v);vt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Z,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,T)}else{const Y=v.textures;for(let Q=0;Q<Y.length;Q++){const Z=Y[Q],Et=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),xt=M(Z.internalFormat,Et,ht,Z.colorSpace),qt=tt(v);O&&vt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,xt,v.width,v.height):vt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,xt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const Q=Y.__webglTexture,Z=tt(v);if(v.depthTexture.format===vi)vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===wi)vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Nt(T){const v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Rt(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[Y],T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(T,v,O){const Y=n.get(T);v!==void 0&&yt(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Nt(T)}function Xt(T){const v=T.texture,O=n.get(T),Y=n.get(v);T.addEventListener("dispose",R);const Q=T.textures,Z=T.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),Z){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let xt=0;xt<v.mipmaps.length;xt++)O.__webglFramebuffer[ht][xt]=i.createFramebuffer()}else O.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)O.__webglFramebuffer[ht]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ht=0,xt=Q.length;ht<xt;ht++){const qt=n.get(Q[ht]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&vt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){const xt=Q[ht];O.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);const qt=r.convert(xt.format,xt.colorSpace),et=r.convert(xt.type),Mt=M(xt.internalFormat,qt,et,xt.colorSpace,T.isXRRenderTarget===!0),Ut=tt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)yt(O.__webglFramebuffer[ht][xt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,xt);else yt(O.__webglFramebuffer[ht],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ht=0,xt=Q.length;ht<xt;ht++){const qt=Q[ht],et=n.get(qt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Pt(i.TEXTURE_2D,qt),yt(O.__webglFramebuffer,T,qt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Y.__webglTexture),Pt(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)yt(O.__webglFramebuffer[xt],T,v,i.COLOR_ATTACHMENT0,ht,xt);else yt(O.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ht,0);m(v)&&p(ht),e.unbindTexture()}T.depthBuffer&&Nt(T)}function J(T){const v=T.textures;for(let O=0,Y=v.length;O<Y;O++){const Q=v[O];if(m(Q)){const Z=b(T),Et=n.get(Q).__webglTexture;e.bindTexture(Z,Et),p(Z),e.unbindTexture()}}}const it=[],C=[];function At(T){if(T.samples>0){if(vt(T)===!1){const v=T.textures,O=T.width,Y=T.height;let Q=i.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(T),ht=v.length>1;if(ht)for(let xt=0;xt<v.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const qt=n.get(v[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,i.NEAREST),l===!0&&(it.length=0,C.length=0,it.push(i.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(it.push(Z),C.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let xt=0;xt<v.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const qt=n.get(v[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function tt(T){return Math.min(s.maxSamples,T.samples)}function vt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ot(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function It(T,v){const O=T.colorSpace,Y=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ci&&O!==wn&&($t.getTransfer(O)===ee?(Y!==Ze||Q!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function gt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Lt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=vt}function Em(i,t){function e(n,s=wn){let r;const a=$t.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===La)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bl)return i.BYTE;if(n===Tl)return i.SHORT;if(n===ji)return i.UNSIGNED_SHORT;if(n===Pa)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===Cl)return i.RGB;if(n===Ze)return i.RGBA;if(n===Rl)return i.LUMINANCE;if(n===Pl)return i.LUMINANCE_ALPHA;if(n===vi)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===Dl)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Ns||n===Fs||n===Os||n===Bs)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$r||n===Kr||n===Jr||n===Qr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ta||n===ea)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===na)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ia)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zs||n===xa||n===_a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zs)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===va||n===ya||n===Ma)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class bm extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class mn extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Am=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ln({vertexShader:wm,fragmentShader:Am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rm extends Ri{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=new Cm,m=e.getContextAttributes();let p=null,b=null;const M=[],_=[],I=new lt;let P=null;const R=new Fe;R.viewport=new ne;const D=new Fe;D.viewport=new ne;const E=[R,D],y=new bm;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=M[q];return nt===void 0&&(nt=new Rr,M[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=M[q];return nt===void 0&&(nt=new Rr,M[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=M[q];return nt===void 0&&(nt=new Rr,M[q]=nt),nt.getHandSpace()};function B(q){const nt=_.indexOf(q.inputSource);if(nt===-1)return;const yt=M[nt];yt!==void 0&&(yt.update(q.inputSource,q.frame,c||a),yt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let q=0;q<M.length;q++){const nt=_[q];nt!==null&&(_[q]=null,M[q].disconnect(nt))}L=null,k=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new jn(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,yt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?wi:vi,yt=m.stencil?Ti:Yn);const Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new jn(d.textureWidth,d.textureHeight,{format:Ze,type:xn,depthTexture:new jl(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(q){for(let nt=0;nt<q.removed.length;nt++){const yt=q.removed[nt],rt=_.indexOf(yt);rt>=0&&(_[rt]=null,M[rt].disconnect(yt))}for(let nt=0;nt<q.added.length;nt++){const yt=q.added[nt];let rt=_.indexOf(yt);if(rt===-1){for(let Nt=0;Nt<M.length;Nt++)if(Nt>=_.length){_.push(yt),rt=Nt;break}else if(_[Nt]===null){_[Nt]=yt,rt=Nt;break}if(rt===-1)break}const Rt=M[rt];Rt&&Rt.connect(yt)}}const G=new w,$=new w;function V(q,nt,yt){G.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(yt.matrixWorld);const rt=G.distanceTo($),Rt=nt.projectionMatrix.elements,Nt=yt.projectionMatrix.elements,Lt=Rt[14]/(Rt[10]-1),Xt=Rt[14]/(Rt[10]+1),J=(Rt[9]+1)/Rt[5],it=(Rt[9]-1)/Rt[5],C=(Rt[8]-1)/Rt[0],At=(Nt[8]+1)/Nt[0],tt=Lt*C,vt=Lt*At,ot=rt/(-C+At),It=ot*-C;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(It),q.translateZ(ot),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const gt=Lt+ot,T=Xt+ot,v=tt-It,O=vt+(rt-It),Y=J*Xt/T*gt,Q=it*Xt/T*gt;q.projectionMatrix.makePerspective(v,O,Y,Q,gt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function at(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let nt=q.near,yt=q.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),y.near=D.near=R.near=nt,y.far=D.far=R.far=yt,(L!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,k=y.far),R.layers.mask=q.layers.mask|2,D.layers.mask=q.layers.mask|4,y.layers.mask=R.layers.mask|D.layers.mask;const rt=q.parent,Rt=y.cameras;at(y,rt);for(let Nt=0;Nt<Rt.length;Nt++)at(Rt[Nt],rt);Rt.length===2?V(y,R,D):y.projectionMatrix.copy(R.projectionMatrix),ut(q,y,rt)};function ut(q,nt,yt){yt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(yt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let _t=null;function Pt(q,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let rt=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Nt=0;Nt<yt.length;Nt++){const Lt=yt[Nt];let Xt=null;if(f!==null)Xt=f.getViewport(Lt);else{const it=u.getViewSubImage(d,Lt);Xt=it.viewport,Nt===0&&(t.setRenderTargetTextures(b,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(b))}let J=E[Nt];J===void 0&&(J=new Fe,J.layers.enable(Nt),J.viewport=new ne,E[Nt]=J),J.matrix.fromArray(Lt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Lt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Nt===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(J)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Nt=u.getDepthInformation(yt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let yt=0;yt<M.length;yt++){const rt=_[yt],Rt=M[yt];rt!==null&&Rt!==void 0&&Rt.update(rt,nt,c||a)}_t&&_t(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Zt=new ql;Zt.setAnimationLoop(Pt),this.setAnimationLoop=function(q){_t=q},this.dispose=function(){}}}const Bn=new nn,Pm=new ae;function Lm(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),M=b.envMap,_=b.envMapRotation;M&&(m.envMap.value=M,Bn.copy(_),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(Bn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const _=M.program;n.uniformBlockBinding(b,_)}function c(b,M){let _=s[b.id];_===void 0&&(g(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",m));const I=M.program;n.updateUBOMapping(b,I);const P=t.render.frame;r[b.id]!==P&&(d(b),r[b.id]=P)}function h(b){const M=u();b.__bindingPointIndex=M;const _=i.createBuffer(),I=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=s[b.id],_=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,R=_.length;P<R;P++){const D=Array.isArray(_[P])?_[P]:[_[P]];for(let E=0,y=D.length;E<y;E++){const L=D[E];if(f(L,P,E,I)===!0){const k=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let j=0;j<B.length;j++){const G=B[j],$=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,k+W,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,M,_,I){const P=b.value,R=M+"_"+_;if(I[R]===void 0)return typeof P=="number"||typeof P=="boolean"?I[R]=P:I[R]=P.clone(),!0;{const D=I[R];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return I[R]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(b){const M=b.uniforms;let _=0;const I=16;for(let R=0,D=M.length;R<D;R++){const E=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,L=E.length;y<L;y++){const k=E[y],B=Array.isArray(k.value)?k.value:[k.value];for(let W=0,j=B.length;W<j;W++){const G=B[W],$=x(G),V=_%I,at=V%$.boundary,ut=V+at;_+=at,ut!==0&&I-ut<$.storage&&(_+=I-ut),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=$.storage}}}const P=_%I;return P>0&&(_+=I-P),b.__size=_,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Im{constructor(t={}){const{canvas:e=yh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Rn,this.toneMappingExposure=1;const _=this;let I=!1,P=0,R=0,D=null,E=-1,y=null;const L=new ne,k=new ne;let B=null;const W=new Ft(0);let j=0,G=e.width,$=e.height,V=1,at=null,ut=null;const _t=new ne(0,0,G,$),Pt=new ne(0,0,G,$);let Zt=!1;const q=new Ba;let nt=!1,yt=!1;const rt=new ae,Rt=new ae,Nt=new w,Lt=new ne,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function it(){return D===null?V:1}let C=n;function At(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ra}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),C===null){const N="webgl2";if(C=At(N,S),C===null)throw At(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let tt,vt,ot,It,gt,T,v,O,Y,Q,Z,Et,ht,xt,qt,et,Mt,Ut,Ot,St,Yt,Gt,ie,U;function dt(){tt=new Bf(C),tt.init(),Gt=new Em(C,tt),vt=new Df(C,tt,t,Gt),ot=new ym(C,tt),vt.reverseDepthBuffer&&d&&ot.buffers.depth.setReversed(!0),It=new Hf(C),gt=new rm,T=new Sm(C,tt,ot,gt,vt,Gt,It),v=new Uf(_),O=new Of(_),Y=new Yh(C),ie=new Pf(C,Y),Q=new zf(C,Y,It,ie),Z=new Gf(C,Q,Y,It),Ot=new Vf(C,vt,T),et=new If(gt),Et=new sm(_,v,O,tt,vt,ie,et),ht=new Lm(_,gt),xt=new om,qt=new fm(tt),Ut=new Rf(_,v,O,ot,Z,f,l),Mt=new _m(_,Z,vt),U=new Dm(C,It,vt,ot),St=new Lf(C,tt,It),Yt=new kf(C,tt,It),It.programs=Et.programs,_.capabilities=vt,_.extensions=tt,_.properties=gt,_.renderLists=xt,_.shadowMap=Mt,_.state=ot,_.info=It}dt();const X=new Rm(_,C);this.xr=X,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=tt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=tt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(G,$,!1))},this.getSize=function(S){return S.set(G,$)},this.setSize=function(S,N,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,$=N,e.width=Math.floor(S*V),e.height=Math.floor(N*V),z===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(G*V,$*V).floor()},this.setDrawingBufferSize=function(S,N,z){G=S,$=N,V=z,e.width=Math.floor(S*z),e.height=Math.floor(N*z),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(_t)},this.setViewport=function(S,N,z,H){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,N,z,H),ot.viewport(L.copy(_t).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Pt)},this.setScissor=function(S,N,z,H){S.isVector4?Pt.set(S.x,S.y,S.z,S.w):Pt.set(S,N,z,H),ot.scissor(k.copy(Pt).multiplyScalar(V).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(S){ot.setScissorTest(Zt=S)},this.setOpaqueSort=function(S){at=S},this.setTransparentSort=function(S){ut=S},this.getClearColor=function(S){return S.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(S=!0,N=!0,z=!0){let H=0;if(S){let F=!1;if(D!==null){const st=D.texture.format;F=st===Na||st===Ua||st===Ia}if(F){const st=D.texture.type,pt=st===xn||st===Yn||st===ji||st===Ti||st===La||st===Da,bt=Ut.getClearColor(),Tt=Ut.getClearAlpha(),Bt=bt.r,Ht=bt.g,wt=bt.b;pt?(g[0]=Bt,g[1]=Ht,g[2]=wt,g[3]=Tt,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Bt,x[1]=Ht,x[2]=wt,x[3]=Tt,C.clearBufferiv(C.COLOR,0,x))}else H|=C.COLOR_BUFFER_BIT}N&&(H|=C.DEPTH_BUFFER_BIT),z&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),xt.dispose(),qt.dispose(),gt.dispose(),v.dispose(),O.dispose(),Z.dispose(),ie.dispose(),U.dispose(),Et.dispose(),X.dispose(),X.removeEventListener("sessionstart",Za),X.removeEventListener("sessionend",$a),Dn.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=It.autoReset,N=Mt.enabled,z=Mt.autoUpdate,H=Mt.needsUpdate,F=Mt.type;dt(),It.autoReset=S,Mt.enabled=N,Mt.autoUpdate=z,Mt.needsUpdate=H,Mt.type=F}function ft(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function kt(S){const N=S.target;N.removeEventListener("dispose",kt),ue(N)}function ue(S){Ee(S),gt.remove(S)}function Ee(S){const N=gt.get(S).programs;N!==void 0&&(N.forEach(function(z){Et.releaseProgram(z)}),S.isShaderMaterial&&Et.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,z,H,F,st){N===null&&(N=Xt);const pt=F.isMesh&&F.matrixWorld.determinant()<0,bt=fc(S,N,z,H,F);ot.setMaterial(H,pt);let Tt=z.index,Bt=1;if(H.wireframe===!0){if(Tt=Q.getWireframeAttribute(z),Tt===void 0)return;Bt=2}const Ht=z.drawRange,wt=z.attributes.position;let Kt=Ht.start*Bt,se=(Ht.start+Ht.count)*Bt;st!==null&&(Kt=Math.max(Kt,st.start*Bt),se=Math.min(se,(st.start+st.count)*Bt)),Tt!==null?(Kt=Math.max(Kt,0),se=Math.min(se,Tt.count)):wt!=null&&(Kt=Math.max(Kt,0),se=Math.min(se,wt.count));const oe=se-Kt;if(oe<0||oe===1/0)return;ie.setup(F,H,bt,z,Tt);let Re,Jt=St;if(Tt!==null&&(Re=Y.get(Tt),Jt=Yt,Jt.setIndex(Re)),F.isMesh)H.wireframe===!0?(ot.setLineWidth(H.wireframeLinewidth*it()),Jt.setMode(C.LINES)):Jt.setMode(C.TRIANGLES);else if(F.isLine){let Ct=H.linewidth;Ct===void 0&&(Ct=1),ot.setLineWidth(Ct*it()),F.isLineSegments?Jt.setMode(C.LINES):F.isLineLoop?Jt.setMode(C.LINE_LOOP):Jt.setMode(C.LINE_STRIP)}else F.isPoints?Jt.setMode(C.POINTS):F.isSprite&&Jt.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ct=F._multiDrawStarts,an=F._multiDrawCounts,Qt=F._multiDrawCount,Ge=Tt?Y.get(Tt).bytesPerElement:1,Qn=gt.get(H).currentProgram.getUniforms();for(let Ie=0;Ie<Qt;Ie++)Qn.setValue(C,"_gl_DrawID",Ie),Jt.render(Ct[Ie]/Ge,an[Ie])}else if(F.isInstancedMesh)Jt.renderInstances(Kt,oe,F.count);else if(z.isInstancedBufferGeometry){const Ct=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,an=Math.min(z.instanceCount,Ct);Jt.renderInstances(Kt,oe,an)}else Jt.render(Kt,oe)};function te(S,N,z){S.transparent===!0&&S.side===Qe&&S.forceSinglePass===!1?(S.side=Le,S.needsUpdate=!0,ss(S,N,z),S.side=Pn,S.needsUpdate=!0,ss(S,N,z),S.side=Qe):ss(S,N,z)}this.compile=function(S,N,z=null){z===null&&(z=S),p=qt.get(z),p.init(N),M.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==z&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const st=F.material;if(st)if(Array.isArray(st))for(let pt=0;pt<st.length;pt++){const bt=st[pt];te(bt,z,F),H.add(bt)}else te(st,z,F),H.add(st)}),M.pop(),p=null,H},this.compileAsync=function(S,N,z=null){const H=this.compile(S,N,z);return new Promise(F=>{function st(){if(H.forEach(function(pt){gt.get(pt).currentProgram.isReady()&&H.delete(pt)}),H.size===0){F(S);return}setTimeout(st,10)}tt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Ve=null;function rn(S){Ve&&Ve(S)}function Za(){Dn.stop()}function $a(){Dn.start()}const Dn=new ql;Dn.setAnimationLoop(rn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(S){Ve=S,X.setAnimationLoop(S),S===null?Dn.stop():Dn.start()},X.addEventListener("sessionstart",Za),X.addEventListener("sessionend",$a),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,N,D),p=qt.get(S,M.length),p.init(N),M.push(p),Rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Rt),yt=this.localClippingEnabled,nt=et.init(this.clippingPlanes,yt),m=xt.get(S,b.length),m.init(),b.push(m),X.enabled===!0&&X.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&er(st,N,-1/0,_.sortObjects)}er(S,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(at,ut),J=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,J&&Ut.addToRenderList(m,S),this.info.render.frame++,nt===!0&&et.beginShadows();const z=p.state.shadowsArray;Mt.render(z,S,N),nt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const st=N.cameras;if(F.length>0)for(let pt=0,bt=st.length;pt<bt;pt++){const Tt=st[pt];Ja(H,F,S,Tt)}J&&Ut.render(S);for(let pt=0,bt=st.length;pt<bt;pt++){const Tt=st[pt];Ka(m,S,Tt,Tt.viewport)}}else F.length>0&&Ja(H,F,S,N),J&&Ut.render(S),Ka(m,S,N);D!==null&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(_,S,N),ie.resetDefaultState(),E=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],nt===!0&&et.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function er(S,N,z,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){H&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Rt);const pt=Z.update(S),bt=S.material;bt.visible&&m.push(S,pt,bt,z,Lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){const pt=Z.update(S),bt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Lt.copy(pt.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(Rt)),Array.isArray(bt)){const Tt=pt.groups;for(let Bt=0,Ht=Tt.length;Bt<Ht;Bt++){const wt=Tt[Bt],Kt=bt[wt.materialIndex];Kt&&Kt.visible&&m.push(S,pt,Kt,z,Lt.z,wt)}}else bt.visible&&m.push(S,pt,bt,z,Lt.z,null)}}const st=S.children;for(let pt=0,bt=st.length;pt<bt;pt++)er(st[pt],N,z,H)}function Ka(S,N,z,H){const F=S.opaque,st=S.transmissive,pt=S.transparent;p.setupLightsView(z),nt===!0&&et.setGlobalState(_.clippingPlanes,z),H&&ot.viewport(L.copy(H)),F.length>0&&is(F,N,z),st.length>0&&is(st,N,z),pt.length>0&&is(pt,N,z),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Ja(S,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new jn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Qi:xn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const st=p.state.transmissionRenderTarget[H.id],pt=H.viewport||L;st.setSize(pt.z,pt.w);const bt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(W),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),J&&Ut.render(z);const Tt=_.toneMapping;_.toneMapping=Rn;const Bt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),nt===!0&&et.setGlobalState(_.clippingPlanes,H),is(S,z,H),T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let wt=0,Kt=N.length;wt<Kt;wt++){const se=N[wt],oe=se.object,Re=se.geometry,Jt=se.material,Ct=se.group;if(Jt.side===Qe&&oe.layers.test(H.layers)){const an=Jt.side;Jt.side=Le,Jt.needsUpdate=!0,Qa(oe,z,H,Re,Jt,Ct),Jt.side=an,Jt.needsUpdate=!0,Ht=!0}}Ht===!0&&(T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st))}_.setRenderTarget(bt),_.setClearColor(W,j),Bt!==void 0&&(H.viewport=Bt),_.toneMapping=Tt}function is(S,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,st=S.length;F<st;F++){const pt=S[F],bt=pt.object,Tt=pt.geometry,Bt=H===null?pt.material:H,Ht=pt.group;bt.layers.test(z.layers)&&Qa(bt,N,z,Tt,Bt,Ht)}}function Qa(S,N,z,H,F,st){S.onBeforeRender(_,N,z,H,F,st),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(_,N,z,H,S,st),F.transparent===!0&&F.side===Qe&&F.forceSinglePass===!1?(F.side=Le,F.needsUpdate=!0,_.renderBufferDirect(z,N,H,F,S,st),F.side=Pn,F.needsUpdate=!0,_.renderBufferDirect(z,N,H,F,S,st),F.side=Qe):_.renderBufferDirect(z,N,H,F,S,st),S.onAfterRender(_,N,z,H,F,st)}function ss(S,N,z){N.isScene!==!0&&(N=Xt);const H=gt.get(S),F=p.state.lights,st=p.state.shadowsArray,pt=F.state.version,bt=Et.getParameters(S,F.state,st,N,z),Tt=Et.getProgramCacheKey(bt);let Bt=H.programs;H.environment=S.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(S.isMeshStandardMaterial?O:v).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",kt),Bt=new Map,H.programs=Bt);let Ht=Bt.get(Tt);if(Ht!==void 0){if(H.currentProgram===Ht&&H.lightsStateVersion===pt)return eo(S,bt),Ht}else bt.uniforms=Et.getUniforms(S),S.onBeforeCompile(bt,_),Ht=Et.acquireProgram(bt,Tt),Bt.set(Tt,Ht),H.uniforms=bt.uniforms;const wt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=et.uniform),eo(S,bt),H.needsLights=mc(S),H.lightsStateVersion=pt,H.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ht,H.uniformsList=null,Ht}function to(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=ks.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function eo(S,N){const z=gt.get(S);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function fc(S,N,z,H,F){N.isScene!==!0&&(N=Xt),T.resetTextureUnits();const st=N.fog,pt=H.isMeshStandardMaterial?N.environment:null,bt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ci,Tt=(H.isMeshStandardMaterial?O:v).get(H.envMap||pt),Bt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ht=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!z.morphAttributes.position,Kt=!!z.morphAttributes.normal,se=!!z.morphAttributes.color;let oe=Rn;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(oe=_.toneMapping);const Re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Jt=Re!==void 0?Re.length:0,Ct=gt.get(H),an=p.state.lights;if(nt===!0&&(yt===!0||S!==y)){const Oe=S===y&&H.id===E;et.setState(H,S,Oe)}let Qt=!1;H.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==an.state.version||Ct.outputColorSpace!==bt||F.isBatchedMesh&&Ct.batching===!1||!F.isBatchedMesh&&Ct.batching===!0||F.isBatchedMesh&&Ct.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ct.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ct.instancing===!1||!F.isInstancedMesh&&Ct.instancing===!0||F.isSkinnedMesh&&Ct.skinning===!1||!F.isSkinnedMesh&&Ct.skinning===!0||F.isInstancedMesh&&Ct.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ct.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ct.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ct.instancingMorph===!1&&F.morphTexture!==null||Ct.envMap!==Tt||H.fog===!0&&Ct.fog!==st||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==et.numPlanes||Ct.numIntersection!==et.numIntersection)||Ct.vertexAlphas!==Bt||Ct.vertexTangents!==Ht||Ct.morphTargets!==wt||Ct.morphNormals!==Kt||Ct.morphColors!==se||Ct.toneMapping!==oe||Ct.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Ct.__version=H.version);let Ge=Ct.currentProgram;Qt===!0&&(Ge=ss(H,N,F));let Qn=!1,Ie=!1,Li=!1;const le=Ge.getUniforms(),Ke=Ct.uniforms;if(ot.useProgram(Ge.program)&&(Qn=!0,Ie=!0,Li=!0),H.id!==E&&(E=H.id,Ie=!0),Qn||y!==S){ot.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),Sh(rt),Eh(rt),le.setValue(C,"projectionMatrix",rt)):le.setValue(C,"projectionMatrix",S.projectionMatrix),le.setValue(C,"viewMatrix",S.matrixWorldInverse);const _n=le.map.cameraPosition;_n!==void 0&&_n.setValue(C,Nt.setFromMatrixPosition(S.matrixWorld)),vt.logarithmicDepthBuffer&&le.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&le.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Ie=!0,Li=!0)}if(F.isSkinnedMesh){le.setOptional(C,F,"bindMatrix"),le.setOptional(C,F,"bindMatrixInverse");const Oe=F.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),le.setValue(C,"boneTexture",Oe.boneTexture,T))}F.isBatchedMesh&&(le.setOptional(C,F,"batchingTexture"),le.setValue(C,"batchingTexture",F._matricesTexture,T),le.setOptional(C,F,"batchingIdTexture"),le.setValue(C,"batchingIdTexture",F._indirectTexture,T),le.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(C,"batchingColorTexture",F._colorsTexture,T));const Di=z.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&Ot.update(F,z,Ge),(Ie||Ct.receiveShadow!==F.receiveShadow)&&(Ct.receiveShadow=F.receiveShadow,le.setValue(C,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ke.envMap.value=Tt,Ke.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Ke.envMapIntensity.value=N.environmentIntensity),Ie&&(le.setValue(C,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&pc(Ke,Li),st&&H.fog===!0&&ht.refreshFogUniforms(Ke,st),ht.refreshMaterialUniforms(Ke,H,V,$,p.state.transmissionRenderTarget[S.id]),ks.upload(C,to(Ct),Ke,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ks.upload(C,to(Ct),Ke,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&le.setValue(C,"center",F.center),le.setValue(C,"modelViewMatrix",F.modelViewMatrix),le.setValue(C,"normalMatrix",F.normalMatrix),le.setValue(C,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Oe=H.uniformsGroups;for(let _n=0,vn=Oe.length;_n<vn;_n++){const no=Oe[_n];U.update(no,Ge),U.bind(no,Ge)}}return Ge}function pc(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function mc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,N,z){gt.get(S.texture).__webglTexture=N,gt.get(S.depthTexture).__webglTexture=z;const H=gt.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const z=gt.get(S);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,z=0){D=S,P=N,R=z;let H=!0,F=null,st=!1,pt=!1;if(S){const Tt=gt.get(S);if(Tt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(Tt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Tt.__hasExternalTextures)T.rebindTextures(S,gt.get(S.texture).__webglTexture,gt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const wt=S.depthTexture;if(Tt.__boundDepthTexture!==wt){if(wt!==null&&gt.has(wt)&&(S.width!==wt.image.width||S.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(pt=!0);const Ht=gt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ht[N])?F=Ht[N][z]:F=Ht[N],st=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?F=gt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ht)?F=Ht[z]:F=Ht,L.copy(S.viewport),k.copy(S.scissor),B=S.scissorTest}else L.copy(_t).multiplyScalar(V).floor(),k.copy(Pt).multiplyScalar(V).floor(),B=Zt;if(ot.bindFramebuffer(C.FRAMEBUFFER,F)&&H&&ot.drawBuffers(S,F),ot.viewport(L),ot.scissor(k),ot.setScissorTest(B),st){const Tt=gt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Tt.__webglTexture,z)}else if(pt){const Tt=gt.get(S.texture),Bt=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.__webglTexture,z||0,Bt)}E=-1},this.readRenderTargetPixels=function(S,N,z,H,F,st,pt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=gt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(bt=bt[pt]),bt){ot.bindFramebuffer(C.FRAMEBUFFER,bt);try{const Tt=S.texture,Bt=Tt.format,Ht=Tt.type;if(!vt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&z>=0&&z<=S.height-F&&C.readPixels(N,z,H,F,Gt.convert(Bt),Gt.convert(Ht),st)}finally{const Tt=D!==null?gt.get(D).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(S,N,z,H,F,st,pt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=gt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(bt=bt[pt]),bt){const Tt=S.texture,Bt=Tt.format,Ht=Tt.type;if(!vt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-H&&z>=0&&z<=S.height-F){ot.bindFramebuffer(C.FRAMEBUFFER,bt);const wt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,wt),C.bufferData(C.PIXEL_PACK_BUFFER,st.byteLength,C.STREAM_READ),C.readPixels(N,z,H,F,Gt.convert(Bt),Gt.convert(Ht),0);const Kt=D!==null?gt.get(D).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,Kt);const se=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Mh(C,se,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,wt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,st),C.deleteBuffer(wt),C.deleteSync(se),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,z=0){S.isTexture!==!0&&(ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(S.image.width*H),st=Math.floor(S.image.height*H),pt=N!==null?N.x:0,bt=N!==null?N.y:0;T.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,pt,bt,F,st),ot.unbindTexture()},this.copyTextureToTexture=function(S,N,z=null,H=null,F=0){S.isTexture!==!0&&(ki("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,z=null);let st,pt,bt,Tt,Bt,Ht,wt,Kt,se;const oe=S.isCompressedTexture?S.mipmaps[F]:S.image;z!==null?(st=z.max.x-z.min.x,pt=z.max.y-z.min.y,bt=z.isBox3?z.max.z-z.min.z:1,Tt=z.min.x,Bt=z.min.y,Ht=z.isBox3?z.min.z:0):(st=oe.width,pt=oe.height,bt=oe.depth||1,Tt=0,Bt=0,Ht=0),H!==null?(wt=H.x,Kt=H.y,se=H.z):(wt=0,Kt=0,se=0);const Re=Gt.convert(N.format),Jt=Gt.convert(N.type);let Ct;N.isData3DTexture?(T.setTexture3D(N,0),Ct=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Ct=C.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Ct=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const an=C.getParameter(C.UNPACK_ROW_LENGTH),Qt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ge=C.getParameter(C.UNPACK_SKIP_PIXELS),Qn=C.getParameter(C.UNPACK_SKIP_ROWS),Ie=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,oe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ht);const Li=S.isDataArrayTexture||S.isData3DTexture,le=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Ke=gt.get(S),Di=gt.get(N),Oe=gt.get(Ke.__renderTarget),_n=gt.get(Di.__renderTarget);ot.bindFramebuffer(C.READ_FRAMEBUFFER,Oe.__webglFramebuffer),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let vn=0;vn<bt;vn++)Li&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(S).__webglTexture,F,Ht+vn),S.isDepthTexture?(le&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(N).__webglTexture,F,se+vn),C.blitFramebuffer(Tt,Bt,st,pt,wt,Kt,st,pt,C.DEPTH_BUFFER_BIT,C.NEAREST)):le?C.copyTexSubImage3D(Ct,F,wt,Kt,se+vn,Tt,Bt,st,pt):C.copyTexSubImage2D(Ct,F,wt,Kt,se+vn,Tt,Bt,st,pt);ot.bindFramebuffer(C.READ_FRAMEBUFFER,null),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else le?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Ct,F,wt,Kt,se,st,pt,bt,Re,Jt,oe.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Ct,F,wt,Kt,se,st,pt,bt,Re,oe.data):C.texSubImage3D(Ct,F,wt,Kt,se,st,pt,bt,Re,Jt,oe):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,wt,Kt,st,pt,Re,Jt,oe.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,wt,Kt,oe.width,oe.height,Re,oe.data):C.texSubImage2D(C.TEXTURE_2D,F,wt,Kt,st,pt,Re,Jt,oe);C.pixelStorei(C.UNPACK_ROW_LENGTH,an),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,Qn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ie),F===0&&N.generateMipmaps&&C.generateMipmap(Ct),ot.unbindTexture()},this.copyTextureToTexture3D=function(S,N,z=null,H=null,F=0){return S.isTexture!==!0&&(ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0),ki('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,z,H,F)},this.initRenderTarget=function(S){gt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),ot.unbindTexture()},this.resetState=function(){P=0,R=0,D=null,ot.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Um extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ql extends Jn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qs=new w,Ys=new w,nl=new ae,Oi=new Oa,ws=new es,Pr=new w,il=new w;class Nm extends Me{constructor(t=new Se,e=new Ql){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qs.fromBufferAttribute(e,s-1),Ys.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qs.distanceTo(Ys);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(s),ws.radius+=r,t.ray.intersectsSphere(ws)===!1)return;nl.copy(s).invert(),Oi.copy(t.ray).applyMatrix4(nl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),b=h.getX(x+1),M=As(this,t,Oi,l,p,b);M&&e.push(M)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=As(this,t,Oi,l,x,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=As(this,t,Oi,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=As(this,t,Oi,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function As(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(qs.fromBufferAttribute(a,s),Ys.fromBufferAttribute(a,r),e.distanceSqToSegment(qs,Ys,Pr,il)>n)return;Pr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Pr);if(!(l<t.near||l>t.far))return{distance:l,point:il.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const sl=new w,rl=new w;class Fm extends Nm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)sl.fromBufferAttribute(e,s),rl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sl.distanceTo(rl);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ka extends Jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const al=new ae,Ea=new Oa,Cs=new es,Rs=new w;class tc extends Me{constructor(t=new Se,e=new ka){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(s),Cs.radius+=r,t.ray.intersectsSphere(Cs)===!1)return;al.copy(s).invert(),Ea.copy(t.ray).applyMatrix4(al);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);Rs.fromBufferAttribute(u,m),ol(Rs,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Rs.fromBufferAttribute(u,g),ol(Rs,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ol(i,t,e,n,s,r,a){const o=Ea.distanceSqToPoint(i);if(o<e){const l=new w;Ea.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new lt:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,s=[],r=[],a=[],o=new w,l=new ae;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ye(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ha extends sn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Om extends Ha{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Va(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ps=new w,Lr=new Va,Dr=new Va,Ir=new Va;class Bm extends sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ps.subVectors(s[0],s[1]).add(s[0]),c=Ps);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ps.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ps),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Lr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Dr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Ir.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Lr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Dr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ir.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Lr.calc(l),Dr.calc(l),Ir.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ll(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function zm(i,t){const e=1-i;return e*e*t}function km(i,t){return 2*(1-i)*i*t}function Hm(i,t){return i*i*t}function Wi(i,t,e,n){return zm(i,t)+km(i,e)+Hm(i,n)}function Vm(i,t){const e=1-i;return e*e*e*t}function Gm(i,t){const e=1-i;return 3*e*e*i*t}function Wm(i,t){return 3*(1-i)*i*i*t}function Xm(i,t){return i*i*i*t}function Xi(i,t,e,n,s){return Vm(i,t)+Gm(i,e)+Wm(i,n)+Xm(i,s)}class ec extends sn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xi(t,s.x,r.x,a.x,o.x),Xi(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qm extends sn{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xi(t,s.x,r.x,a.x,o.x),Xi(t,s.y,r.y,a.y,o.y),Xi(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nc extends sn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ym extends sn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ic extends sn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Wi(t,s.x,r.x,a.x),Wi(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jm extends sn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Wi(t,s.x,r.x,a.x),Wi(t,s.y,r.y,a.y),Wi(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sc extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ll(o,l.x,c.x,h.x,u.x),ll(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var ba=Object.freeze({__proto__:null,ArcCurve:Om,CatmullRomCurve3:Bm,CubicBezierCurve:ec,CubicBezierCurve3:qm,EllipseCurve:Ha,LineCurve:nc,LineCurve3:Ym,QuadraticBezierCurve:ic,QuadraticBezierCurve3:jm,SplineCurve:sc});class Zm extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ba[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ba[s.type]().fromJSON(s))}return this}}class cl extends Zm{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new nc(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ic(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new ec(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new sc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Ha(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ke extends Se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;b(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(f,2));function b(){const _=new w,I=new w;let P=0;const R=(e-t)/n;for(let D=0;D<=r;D++){const E=[],y=D/r,L=y*(e-t)+t;for(let k=0;k<=s;k++){const B=k/s,W=B*l+o,j=Math.sin(W),G=Math.cos(W);I.x=L*j,I.y=-y*n+m,I.z=L*G,u.push(I.x,I.y,I.z),_.set(j,R,G).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-y),E.push(g++)}x.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){const y=x[E][D],L=x[E+1][D],k=x[E+1][D+1],B=x[E][D+1];(t>0||E!==0)&&(h.push(y,L,B),P+=3),(e>0||E!==r-1)&&(h.push(L,k,B),P+=3)}c.addGroup(p,P,0),p+=P}function M(_){const I=g,P=new lt,R=new w;let D=0;const E=_===!0?t:e,y=_===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const L=g;for(let k=0;k<=s;k++){const W=k/s*l+o,j=Math.cos(W),G=Math.sin(W);R.x=E*G,R.y=m*y,R.z=E*j,u.push(R.x,R.y,R.z),d.push(0,y,0),P.x=j*.5+.5,P.y=G*.5*y+.5,f.push(P.x,P.y),g++}for(let k=0;k<s;k++){const B=I+k,W=L+k;_===!0?h.push(W,W+1,B):h.push(W+1,W,B),D+=3}c.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Js extends ke{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Js(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ga extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const M=new w,_=new w,I=new w;for(let P=0;P<e.length;P+=3)f(e[P+0],M),f(e[P+1],_),f(e[P+2],I),l(M,_,I,b)}function l(b,M,_,I){const P=I+1,R=[];for(let D=0;D<=P;D++){R[D]=[];const E=b.clone().lerp(_,D/P),y=M.clone().lerp(_,D/P),L=P-D;for(let k=0;k<=L;k++)k===0&&D===P?R[D][k]=E:R[D][k]=E.clone().lerp(y,k/L)}for(let D=0;D<P;D++)for(let E=0;E<2*(P-D)-1;E++){const y=Math.floor(E/2);E%2===0?(d(R[D][y+1]),d(R[D+1][y]),d(R[D][y])):(d(R[D][y+1]),d(R[D+1][y+1]),d(R[D+1][y]))}}function c(b){const M=new w;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(b),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){const b=new w;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];const _=m(b)/2/Math.PI+.5,I=p(b)/Math.PI+.5;a.push(_,1-I)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){const M=a[b+0],_=a[b+2],I=a[b+4],P=Math.max(M,_,I),R=Math.min(M,_,I);P>.9&&R<.1&&(M<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),I<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,M){const _=b*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const b=new w,M=new w,_=new w,I=new w,P=new lt,R=new lt,D=new lt;for(let E=0,y=0;E<r.length;E+=9,y+=6){b.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),P.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),D.set(a[y+4],a[y+5]),I.copy(b).add(M).add(_).divideScalar(3);const L=m(I);x(P,y+0,b,L),x(R,y+2,M,L),x(D,y+4,_,L)}}function x(b,M,_,I){I<0&&b.x===1&&(a[M]=b.x-1),_.x===0&&_.z===0&&(a[M]=I/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.vertices,t.indices,t.radius,t.details)}}class rc extends cl{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new cl().fromJSON(s))}return this}}const $m={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=ac(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=eg(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return $i(r,a,e,o,l,f,0),a}};function ac(i,t,e,n,s){let r,a;if(s===dg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=hl(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=hl(r,i[r],i[r+1],a);return a&&Qs(a,a.next)&&(Ji(a),a=a.next),a}function Zn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qs(e,e.next)||ce(e.prev,e,e.next)===0)){if(Ji(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $i(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ag(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Jm(i,n,s,r):Km(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ji(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Qm(Zn(i),t,e),$i(i,t,e,n,s,r,2)):a===2&&tg(i,t,e,n,s,r):$i(Zn(i),t,e,n,s,r,1);break}}}function Km(i){const t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&xi(s,o,r,l,a,c,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jm(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ce(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Ta(f,g,t,e,n),b=Ta(x,m,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=p&&_&&_.z<=b;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&xi(o,h,l,u,c,d,M.x,M.y)&&ce(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&xi(o,h,l,u,c,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&xi(o,h,l,u,c,d,M.x,M.y)&&ce(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&xi(o,h,l,u,c,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Qm(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Qs(s,r)&&oc(s,n,n.next,r)&&Ki(s,r)&&Ki(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ji(n),Ji(n.next),n=i=r),n=n.next}while(n!==i);return Zn(n)}function tg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cg(a,o)){let l=lc(a,o);a=Zn(a,a.next),l=Zn(l,l.next),$i(a,t,e,n,s,r,0),$i(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function eg(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ac(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(lg(c));for(s.sort(ng),r=0;r<s.length;r++)e=ig(s[r],e);return e}function ng(i,t){return i.x-t.x}function ig(i,t){const e=sg(i,t);if(!e)return t;const n=lc(e,i);return Zn(n,n.next),Zn(e,e.next)}function sg(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&xi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ki(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&rg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function rg(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function ag(i,t,e,n){let s=i;do s.z===0&&(s.z=Ta(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,og(s)}function og(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Ta(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function xi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function cg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!hg(i,t)&&(Ki(i,t)&&Ki(t,i)&&ug(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||Qs(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qs(i,t){return i.x===t.x&&i.y===t.y}function oc(i,t,e,n){const s=Ds(ce(i,t,e)),r=Ds(ce(i,t,n)),a=Ds(ce(e,n,i)),o=Ds(ce(e,n,t));return!!(s!==r&&a!==o||s===0&&Ls(i,e,t)||r===0&&Ls(i,n,t)||a===0&&Ls(e,i,n)||o===0&&Ls(e,t,n))}function Ls(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ds(i){return i>0?1:i<0?-1:0}function hg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&oc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ki(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function ug(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function lc(i,t){const e=new wa(i.i,i.x,i.y),n=new wa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hl(i,t,e,n){const s=new wa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ji(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class qi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return qi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ul(t),dl(n,t);let a=t.length;e.forEach(ul);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,dl(n,e[l]);const o=$m.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ul(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function dl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Wa extends Se{constructor(t=new rc([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:fg;let M,_=!1,I,P,R,D;p&&(M=p.getSpacedPoints(h),_=!0,d=!1,I=p.computeFrenetFrames(h,!1),P=new w,R=new w,D=new w),d||(m=0,f=0,g=0,x=0);const E=o.extractPoints(c);let y=E.shape;const L=E.holes;if(!qi.isClockWise(y)){y=y.reverse();for(let J=0,it=L.length;J<it;J++){const C=L[J];qi.isClockWise(C)&&(L[J]=C.reverse())}}const B=qi.triangulateShape(y,L),W=y;for(let J=0,it=L.length;J<it;J++){const C=L[J];y=y.concat(C)}function j(J,it,C){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(it,C)}const G=y.length,$=B.length;function V(J,it,C){let At,tt,vt;const ot=J.x-it.x,It=J.y-it.y,gt=C.x-J.x,T=C.y-J.y,v=ot*ot+It*It,O=ot*T-It*gt;if(Math.abs(O)>Number.EPSILON){const Y=Math.sqrt(v),Q=Math.sqrt(gt*gt+T*T),Z=it.x-It/Y,Et=it.y+ot/Y,ht=C.x-T/Q,xt=C.y+gt/Q,qt=((ht-Z)*T-(xt-Et)*gt)/(ot*T-It*gt);At=Z+ot*qt-J.x,tt=Et+It*qt-J.y;const et=At*At+tt*tt;if(et<=2)return new lt(At,tt);vt=Math.sqrt(et/2)}else{let Y=!1;ot>Number.EPSILON?gt>Number.EPSILON&&(Y=!0):ot<-Number.EPSILON?gt<-Number.EPSILON&&(Y=!0):Math.sign(It)===Math.sign(T)&&(Y=!0),Y?(At=-It,tt=ot,vt=Math.sqrt(v)):(At=ot,tt=It,vt=Math.sqrt(v/2))}return new lt(At/vt,tt/vt)}const at=[];for(let J=0,it=W.length,C=it-1,At=J+1;J<it;J++,C++,At++)C===it&&(C=0),At===it&&(At=0),at[J]=V(W[J],W[C],W[At]);const ut=[];let _t,Pt=at.concat();for(let J=0,it=L.length;J<it;J++){const C=L[J];_t=[];for(let At=0,tt=C.length,vt=tt-1,ot=At+1;At<tt;At++,vt++,ot++)vt===tt&&(vt=0),ot===tt&&(ot=0),_t[At]=V(C[At],C[vt],C[ot]);ut.push(_t),Pt=Pt.concat(_t)}for(let J=0;J<m;J++){const it=J/m,C=f*Math.cos(it*Math.PI/2),At=g*Math.sin(it*Math.PI/2)+x;for(let tt=0,vt=W.length;tt<vt;tt++){const ot=j(W[tt],at[tt],At);rt(ot.x,ot.y,-C)}for(let tt=0,vt=L.length;tt<vt;tt++){const ot=L[tt];_t=ut[tt];for(let It=0,gt=ot.length;It<gt;It++){const T=j(ot[It],_t[It],At);rt(T.x,T.y,-C)}}}const Zt=g+x;for(let J=0;J<G;J++){const it=d?j(y[J],Pt[J],Zt):y[J];_?(R.copy(I.normals[0]).multiplyScalar(it.x),P.copy(I.binormals[0]).multiplyScalar(it.y),D.copy(M[0]).add(R).add(P),rt(D.x,D.y,D.z)):rt(it.x,it.y,0)}for(let J=1;J<=h;J++)for(let it=0;it<G;it++){const C=d?j(y[it],Pt[it],Zt):y[it];_?(R.copy(I.normals[J]).multiplyScalar(C.x),P.copy(I.binormals[J]).multiplyScalar(C.y),D.copy(M[J]).add(R).add(P),rt(D.x,D.y,D.z)):rt(C.x,C.y,u/h*J)}for(let J=m-1;J>=0;J--){const it=J/m,C=f*Math.cos(it*Math.PI/2),At=g*Math.sin(it*Math.PI/2)+x;for(let tt=0,vt=W.length;tt<vt;tt++){const ot=j(W[tt],at[tt],At);rt(ot.x,ot.y,u+C)}for(let tt=0,vt=L.length;tt<vt;tt++){const ot=L[tt];_t=ut[tt];for(let It=0,gt=ot.length;It<gt;It++){const T=j(ot[It],_t[It],At);_?rt(T.x,T.y+M[h-1].y,M[h-1].x+C):rt(T.x,T.y,u+C)}}}q(),nt();function q(){const J=s.length/3;if(d){let it=0,C=G*it;for(let At=0;At<$;At++){const tt=B[At];Rt(tt[2]+C,tt[1]+C,tt[0]+C)}it=h+m*2,C=G*it;for(let At=0;At<$;At++){const tt=B[At];Rt(tt[0]+C,tt[1]+C,tt[2]+C)}}else{for(let it=0;it<$;it++){const C=B[it];Rt(C[2],C[1],C[0])}for(let it=0;it<$;it++){const C=B[it];Rt(C[0]+G*h,C[1]+G*h,C[2]+G*h)}}n.addGroup(J,s.length/3-J,0)}function nt(){const J=s.length/3;let it=0;yt(W,it),it+=W.length;for(let C=0,At=L.length;C<At;C++){const tt=L[C];yt(tt,it),it+=tt.length}n.addGroup(J,s.length/3-J,1)}function yt(J,it){let C=J.length;for(;--C>=0;){const At=C;let tt=C-1;tt<0&&(tt=J.length-1);for(let vt=0,ot=h+m*2;vt<ot;vt++){const It=G*vt,gt=G*(vt+1),T=it+At+It,v=it+tt+It,O=it+tt+gt,Y=it+At+gt;Nt(T,v,O,Y)}}}function rt(J,it,C){l.push(J),l.push(it),l.push(C)}function Rt(J,it,C){Lt(J),Lt(it),Lt(C);const At=s.length/3,tt=b.generateTopUV(n,s,At-3,At-2,At-1);Xt(tt[0]),Xt(tt[1]),Xt(tt[2])}function Nt(J,it,C,At){Lt(J),Lt(it),Lt(At),Lt(it),Lt(C),Lt(At);const tt=s.length/3,vt=b.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Xt(vt[0]),Xt(vt[1]),Xt(vt[3]),Xt(vt[1]),Xt(vt[2]),Xt(vt[3])}function Lt(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Xt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return pg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ba[s.type]().fromJSON(s)),new Wa(n,t.options)}}const fg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-u),new lt(d,1-g),new lt(x,1-p)]:[new lt(o,1-l),new lt(h,1-u),new lt(f,1-g),new lt(m,1-p)]}};function pg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Xa extends Ga{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xa(t.radius,t.detail)}}class qa extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new w,d=new w,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const b=[],M=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){const P=I/e;u.x=-t*Math.cos(s+P*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+P*r)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(P+_,1-M),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const M=h[p][b+1],_=h[p][b],I=h[p+1][b],P=h[p+1][b+1];(p!==0||a>0)&&f.push(M,_,P),(p!==n-1||l<Math.PI)&&f.push(_,I,P)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qn extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;a.push(x,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class me extends Jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ya extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ur=new ae,fl=new w,pl=new w;class cc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fl.setFromMatrixPosition(t.matrixWorld),e.position.copy(fl),pl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pl),e.updateMatrixWorld(),Ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ml=new ae,Bi=new w,Nr=new w;class mg extends cc{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bi),Nr.copy(n.position),Nr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Nr),n.updateMatrixWorld(),s.makeTranslation(-Bi.x,-Bi.y,-Bi.z),ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml)}}class js extends Ya{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gg extends cc{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gl extends Ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new gg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xg extends Ya{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _g{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xl(){return performance.now()}const _l=new w,Is=new w;class hc{constructor(t=new w,e=new w){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){_l.subVectors(t,this.start),Is.subVectors(this.end,this.start);const n=Is.dot(Is);let r=Is.dot(_l)/n;return e&&(r=ye(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);class vg{constructor(t){A(this,"scene");A(this,"camera");A(this,"renderer");A(this,"ambientLight");A(this,"sunLight");A(this,"rimLight");A(this,"clock");A(this,"container");A(this,"isRunning",!1);A(this,"animationFrameId",null);A(this,"updateCallbacks",new Set);A(this,"isDebug",!1);A(this,"fpsOverlay",null);A(this,"frameCount",0);A(this,"lastFpsUpdate",0);A(this,"currentFps",0);A(this,"onWindowResize",()=>{const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))});A(this,"trauma",0);this.container=t??document.getElementById("game-container")??document.body,this.scene=new Um,this.scene.background=new Ft(395539);const e=window.innerWidth/window.innerHeight;this.camera=new Fe(60,e,.1,4e3),this.camera.position.set(0,3,7),this.camera.lookAt(0,0,-2),this.renderer=new Im({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Sl,this.renderer.toneMappingExposure=1.1,this.container.appendChild(this.renderer.domElement),this.ambientLight=new xg(4878245,.85),this.scene.add(this.ambientLight),this.sunLight=new gl(16777215,2),this.sunLight.position.set(18,25,18),this.scene.add(this.sunLight),this.rimLight=new gl(3718648,2.2),this.rimLight.position.set(0,4,-15),this.rimLight.target.position.set(0,0,0),this.scene.add(this.rimLight),this.scene.add(this.rimLight.target),this.clock=new _g,window.addEventListener("resize",this.onWindowResize),this.checkDebugMode()}checkDebugMode(){const t=new URLSearchParams(window.location.search);this.isDebug=t.get("debug")==="true",this.isDebug&&this.initFpsOverlay()}initFpsOverlay(){this.fpsOverlay=document.createElement("div"),this.fpsOverlay.id="debug-fps-counter",Object.assign(this.fpsOverlay.style,{display:"inline-flex",alignItems:"center",padding:"5px 10px",background:"rgba(6, 12, 28, 0.82)",border:"1px solid rgba(0, 255, 204, 0.45)",borderRadius:"8px",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",fontSize:"11px",fontWeight:"700",color:"#00ffcc",letterSpacing:"0.5px",pointerEvents:"none",userSelect:"none",whiteSpace:"nowrap",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.5), 0 0 8px rgba(0, 255, 204, 0.25)",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)"}),this.fpsOverlay.innerText="FPS: -- | 0.0 ms",document.body.appendChild(this.fpsOverlay),this.lastFpsUpdate=performance.now()}updateFpsOverlay(t,e){if(!this.fpsOverlay)return;this.frameCount++;const n=t-this.lastFpsUpdate;if(n>=500){this.currentFps=Math.round(this.frameCount*1e3/n);const s=(e*1e3).toFixed(1);this.fpsOverlay.innerText=`FPS: ${this.currentFps} | ${s} ms`,this.frameCount=0,this.lastFpsUpdate=t}}onUpdate(t){return this.updateCallbacks.add(t),()=>this.updateCallbacks.delete(t)}addTrauma(t){this.trauma=Math.min(1,this.trauma+t)}start(){if(this.isRunning)return;this.isRunning=!0,this.clock.start();const t=e=>{if(!this.isRunning)return;const n=this.clock.getDelta(),s=Math.min(n,.1),r=this.clock.getElapsedTime();for(const a of this.updateCallbacks)a(s,r);if(this.trauma>0){this.trauma=Math.max(0,this.trauma-s*2.2);const a=this.trauma*this.trauma,o=(Math.random()-.5)*.8*a,l=(Math.random()-.5)*.8*a,c=(Math.random()-.5)*.4*a;this.camera.position.x+=o,this.camera.position.y+=l,this.camera.position.z+=c}this.renderer.render(this.scene,this.camera),this.isDebug&&this.updateFpsOverlay(e,s),this.animationFrameId=requestAnimationFrame(t)};this.animationFrameId=requestAnimationFrame(t)}stop(){this.isRunning=!1,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}destroy(){this.stop(),window.removeEventListener("resize",this.onWindowResize),this.updateCallbacks.clear(),this.fpsOverlay&&this.fpsOverlay.parentElement&&(this.fpsOverlay.parentElement.removeChild(this.fpsOverlay),this.fpsOverlay=null),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}}class yg{constructor(){A(this,"mesh");A(this,"hullMaterial");A(this,"racingAccentMaterial");A(this,"thrusterGlowMaterial");A(this,"emissiveEdgeMaterial");A(this,"thrusterLights",[]);A(this,"currentCustomization",{hullColor:15659767,accentColor:16733440,glowColor:57855});A(this,"thrusterMaterials",[]);A(this,"basePosition",new w(0,0,0));this.mesh=new mn,this.mesh.name="SciFiJet";try{const t=localStorage.getItem("hyperion_jet_customization");if(t){const e=JSON.parse(t);this.currentCustomization={...this.currentCustomization,...e}}}catch{}this.buildJet()}buildJet(){this.hullMaterial=new me({color:this.currentCustomization.hullColor,metalness:.15,roughness:.45,flatShading:!0}),this.racingAccentMaterial=new me({color:this.currentCustomization.accentColor,metalness:.2,roughness:.35,flatShading:!0});const t=new me({color:1581100,metalness:.85,roughness:.35,flatShading:!0}),e=new me({color:594978,metalness:.95,roughness:.08,transparent:!0,opacity:.88});this.emissiveEdgeMaterial=new me({color:61695,emissive:61695,emissiveIntensity:1.5,roughness:.2}),this.thrusterGlowMaterial=new me({color:this.currentCustomization.glowColor,emissive:this.currentCustomization.glowColor,emissiveIntensity:2.5,roughness:.15}),this.thrusterMaterials.push(this.thrusterGlowMaterial);const n=new ke(.18,.8,4.4,7);n.rotateX(-Math.PI/2);const s=new Dt(n,this.hullMaterial);s.scale.set(1.15,.65,1),this.mesh.add(s);const r=new ve(.22,.06,3.8),a=new Dt(r,this.racingAccentMaterial);a.position.set(0,.28,-.2),this.mesh.add(a);const o=new Js(.22,1.3,7);o.rotateX(-Math.PI/2);const l=new Dt(o,this.racingAccentMaterial);l.position.set(0,0,-2.8),l.scale.set(1,.6,1),this.mesh.add(l);const c=new ve(.035,.05,3.6),h=new Dt(c,this.emissiveEdgeMaterial);h.position.set(-.84,.02,-.1),this.mesh.add(h);const u=new Dt(c,this.emissiveEdgeMaterial);u.position.set(.84,.02,-.1),this.mesh.add(u);const d=new ke(.09,.34,1.9,6);d.rotateX(-Math.PI/2);const f=new Dt(d,e);f.position.set(0,.35,-.7),f.scale.set(.95,.52,1),this.mesh.add(f);const g=new ve(.38,.04,1.9),x=new Dt(g,t);x.position.set(0,.22,-.7),this.mesh.add(x);const m=new rc;m.moveTo(0,0),m.lineTo(2.9,1.7),m.lineTo(2.7,2.2),m.lineTo(.5,1.55),m.lineTo(0,1.45),m.closePath();const p={depth:.09,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.02,bevelThickness:.02},b=new Wa(m,p);b.rotateX(Math.PI/2);const M=new Dt(b,this.hullMaterial);M.position.set(.4,-.05,-.6),this.mesh.add(M);const _=b.clone();_.scale(-1,1,1);const I=new Dt(_,this.hullMaterial);I.position.set(-.4,-.05,-.6),this.mesh.add(I);const P=new ve(.3,.03,1.2),R=new Dt(P,this.racingAccentMaterial);R.position.set(1.6,.04,.2),R.rotation.y=-.45,this.mesh.add(R);const D=new Dt(P,this.racingAccentMaterial);D.position.set(-1.6,.04,.2),D.rotation.y=.45,this.mesh.add(D);const E=new ve(.1,.38,.9),y=new Dt(E,t);y.position.set(3.25,.06,1.15),this.mesh.add(y);const L=new Dt(E,t);L.position.set(-3.25,.06,1.15),this.mesh.add(L);const k=new ve(.04,.42,.95),B=new Dt(k,this.emissiveEdgeMaterial);B.position.set(3.31,.06,1.15),this.mesh.add(B);const W=new Dt(k,this.emissiveEdgeMaterial);W.position.set(-3.31,.06,1.15),this.mesh.add(W);const j=new ve(.07,.85,.95),G=new Dt(j,this.racingAccentMaterial);G.position.set(.68,.55,1.55),G.rotation.z=-.32,G.rotation.y=.04,this.mesh.add(G);const $=new Dt(j,this.racingAccentMaterial);$.position.set(-.68,.55,1.55),$.rotation.z=.32,$.rotation.y=-.04,this.mesh.add($);const V=new ve(.05,.05,.95),at=new Dt(V,this.emissiveEdgeMaterial);at.position.set(.82,.98,1.55),at.rotation.z=-.32,this.mesh.add(at);const ut=new Dt(V,this.emissiveEdgeMaterial);ut.position.set(-.82,.98,1.55),ut.rotation.z=.32,this.mesh.add(ut);const _t=.56;[-_t,_t].forEach(Pt=>{const Zt=new ke(.3,.34,1.7,14);Zt.rotateX(-Math.PI/2);const q=new Dt(Zt,t);q.position.set(Pt,0,1.25),this.mesh.add(q);const nt=new ve(.18,.12,1.2),yt=new Dt(nt,this.racingAccentMaterial);yt.position.set(Pt,.32,1.2),this.mesh.add(yt);const rt=new ke(.28,.23,.38,14);rt.rotateX(-Math.PI/2);const Rt=new Dt(rt,t);Rt.position.set(Pt,0,2.1),this.mesh.add(Rt);const Nt=new ke(.21,.12,.28,14);Nt.rotateX(-Math.PI/2);const Lt=new Dt(Nt,this.thrusterGlowMaterial);Lt.position.set(Pt,0,2.22),this.mesh.add(Lt);const Xt=new js(this.currentCustomization.glowColor,2.2,4);Xt.position.set(Pt,0,2.25),this.mesh.add(Xt),this.thrusterLights.push(Xt)}),this.mesh.traverse(Pt=>{Pt instanceof Dt&&(Pt.castShadow=!0,Pt.receiveShadow=!0)})}applyCustomization(t){if(t.hullColor!==void 0&&(this.currentCustomization.hullColor=t.hullColor,this.hullMaterial.color.set(t.hullColor)),t.accentColor!==void 0&&(this.currentCustomization.accentColor=t.accentColor,this.racingAccentMaterial.color.set(t.accentColor)),t.glowColor!==void 0){this.currentCustomization.glowColor=t.glowColor,this.thrusterGlowMaterial.color.set(t.glowColor),this.thrusterGlowMaterial.emissive.set(t.glowColor);for(const e of this.thrusterLights)e.color.set(t.glowColor)}try{localStorage.setItem("hyperion_jet_customization",JSON.stringify(this.currentCustomization))}catch{}}setPosition(t,e,n){this.basePosition.set(t,e,n),this.mesh.position.set(t,e,n)}update(t,e,n=!1){const a=(n?4.5:2.5)+Math.sin(e*(n?28:14))*(n?.8:.35);for(const o of this.thrusterMaterials)o.emissiveIntensity=a,n?o.emissive.setHex(16755200):o.emissive.set(this.currentCustomization.glowColor)}}class Mg{constructor(){A(this,"state",{pitch:0,yaw:0,roll:0,throttle:0,boost:!1,fire:!1});A(this,"activeMode","Keyboard & Mouse");A(this,"onModeChange");A(this,"keysDown",new Set);A(this,"isPointerDown",!1);A(this,"isPointerFiring",!1);A(this,"pointerPos",{x:0,y:0});A(this,"isGyroAvailable",!1);A(this,"isGyroActive",!1);A(this,"neutralBeta",45);A(this,"neutralGamma",0);A(this,"currentBeta",45);A(this,"currentGamma",0);A(this,"touchContainer",null);A(this,"stickBase",null);A(this,"stickThumb",null);A(this,"boostButton",null);A(this,"fireButton",null);A(this,"stickActive",!1);A(this,"stickTouchId",null);A(this,"boostTouchId",null);A(this,"fireTouchId",null);A(this,"isTouchBoosting",!1);A(this,"isTouchFiring",!1);A(this,"stickCenter",{x:0,y:0});A(this,"stickVector",{x:0,y:0});A(this,"STICK_MAX_RADIUS",50);A(this,"handleStickStart",t=>{if(t.preventDefault(),!this.stickActive)for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e];if(this.stickTouchId=n.identifier,this.stickActive=!0,this.stickBase){const s=this.stickBase.getBoundingClientRect();this.stickCenter={x:s.left+s.width/2,y:s.top+s.height/2}}this.processStickTouch(n.clientX,n.clientY),this.setMode("Touch Controls"),this.touchContainer&&(this.touchContainer.style.opacity="1.0");break}});A(this,"handleStickMove",t=>{if(this.stickActive)for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e];if(n.identifier===this.stickTouchId){t.preventDefault(),this.processStickTouch(n.clientX,n.clientY);break}}});A(this,"handleStickEnd",t=>{for(let e=0;e<t.changedTouches.length;e++)if(t.changedTouches[e].identifier===this.stickTouchId){t.preventDefault(),this.stickActive=!1,this.stickTouchId=null,this.stickVector.x=0,this.stickVector.y=0,this.stickThumb&&(this.stickThumb.style.transform="translate(0px, 0px)");break}});A(this,"handleBoostStart",t=>{t.preventDefault();for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e];this.boostTouchId=n.identifier,this.isTouchBoosting=!0,this.boostButton&&(this.boostButton.style.transform="scale(0.92)",this.boostButton.style.boxShadow="0 0 30px rgba(255, 120, 0, 0.9), inset 0 0 16px rgba(255, 220, 0, 0.8)"),this.setMode("Touch Controls"),this.touchContainer&&(this.touchContainer.style.opacity="1.0");break}});A(this,"handleBoostEnd",t=>{for(let e=0;e<t.changedTouches.length;e++)if(t.changedTouches[e].identifier===this.boostTouchId){t.preventDefault(),this.isTouchBoosting=!1,this.boostTouchId=null,this.boostButton&&(this.boostButton.style.transform="scale(1.0)",this.boostButton.style.boxShadow="0 0 20px rgba(255, 85, 0, 0.6), inset 0 0 10px rgba(255, 200, 0, 0.4)");break}});A(this,"handleFireStart",t=>{t.preventDefault();for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e];this.fireTouchId=n.identifier,this.isTouchFiring=!0,this.fireButton&&(this.fireButton.style.transform="scale(0.92)",this.fireButton.style.boxShadow="0 0 30px rgba(255, 0, 85, 0.9), inset 0 0 16px rgba(255, 150, 180, 0.8)"),this.setMode("Touch Controls"),this.touchContainer&&(this.touchContainer.style.opacity="1.0");break}});A(this,"handleFireEnd",t=>{for(let e=0;e<t.changedTouches.length;e++)if(t.changedTouches[e].identifier===this.fireTouchId){t.preventDefault(),this.isTouchFiring=!1,this.fireTouchId=null,this.fireButton&&(this.fireButton.style.transform="scale(1.0)",this.fireButton.style.boxShadow="0 0 20px rgba(255, 0, 85, 0.7), inset 0 0 10px rgba(255, 100, 150, 0.4)");break}});A(this,"handleOrientation",t=>{t.beta!==null&&(this.currentBeta=t.beta),t.gamma!==null&&(this.currentGamma=t.gamma)});this.initKeyboardListeners(),this.initMouseListeners(),this.initTouchUI(),this.checkGyroCapability()}initKeyboardListeners(){window.addEventListener("keydown",t=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.keysDown.add(t.code),this.setMode("Keyboard & Mouse")}),window.addEventListener("keyup",t=>{this.keysDown.delete(t.code)}),window.addEventListener("blur",()=>{this.keysDown.clear(),this.isPointerDown=!1,this.isPointerFiring=!1})}initMouseListeners(){window.addEventListener("mousedown",t=>{t.button===0&&(this.isPointerFiring=!0,this.setMode("Keyboard & Mouse"))}),window.addEventListener("mouseup",t=>{t.button===0&&(this.isPointerFiring=!1)}),window.addEventListener("pointerdown",t=>{t.pointerType==="mouse"&&(this.isPointerDown=!0,this.updateMouseOffset(t.clientX,t.clientY),this.setMode("Keyboard & Mouse"))}),window.addEventListener("pointermove",t=>{t.pointerType==="mouse"&&this.isPointerDown&&this.updateMouseOffset(t.clientX,t.clientY)}),window.addEventListener("pointerup",t=>{t.pointerType==="mouse"&&(this.isPointerDown=!1,this.pointerPos.x=0,this.pointerPos.y=0)})}updateMouseOffset(t,e){const n=window.innerWidth/2,s=window.innerHeight/2,r=(t-n)/n,a=(e-s)/s,o=.08;this.pointerPos.x=Math.abs(r)<o?0:(r-Math.sign(r)*o)/(1-o),this.pointerPos.y=Math.abs(a)<o?0:(a-Math.sign(a)*o)/(1-o)}initTouchUI(){this.touchContainer=document.createElement("div"),this.touchContainer.id="touch-controls-container",Object.assign(this.touchContainer.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"1000",userSelect:"none",webkitUserSelect:"none"}),this.stickBase=document.createElement("div"),Object.assign(this.stickBase.style,{position:"absolute",bottom:"36px",left:"36px",width:"120px",height:"120px",borderRadius:"50%",background:"radial-gradient(circle, rgba(15, 23, 42, 0.75) 0%, rgba(10, 15, 30, 0.9) 100%)",border:"2px solid rgba(0, 240, 255, 0.45)",boxShadow:"0 0 16px rgba(0, 240, 255, 0.25), inset 0 0 12px rgba(0, 240, 255, 0.15)",pointerEvents:"auto",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)",webkitBackdropFilter:"blur(6px)"}),this.stickThumb=document.createElement("div"),Object.assign(this.stickThumb.style,{width:"52px",height:"52px",borderRadius:"50%",background:"radial-gradient(circle, #00f0ff 0%, #0284c7 100%)",boxShadow:"0 0 12px rgba(0, 240, 255, 0.8)",pointerEvents:"none",transform:"translate(0px, 0px)",transition:"box-shadow 0.15s ease"}),this.stickBase.appendChild(this.stickThumb),this.fireButton=document.createElement("div"),this.fireButton.innerHTML='<span style="font-size: 12px; font-weight: 900; letter-spacing: 1.5px; color: #fff; text-shadow: 0 0 8px #ff0055;">FIRE</span>',Object.assign(this.fireButton.style,{position:"absolute",bottom:"142px",right:"42px",width:"76px",height:"76px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255, 0, 85, 0.9) 0%, rgba(180, 0, 50, 0.95) 100%)",border:"2px solid #ff0055",boxShadow:"0 0 20px rgba(255, 0, 85, 0.7), inset 0 0 10px rgba(255, 100, 150, 0.4)",pointerEvents:"auto",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none",webkitUserSelect:"none",cursor:"pointer",transform:"scale(1)",transition:"transform 0.1s ease, box-shadow 0.1s ease"}),this.boostButton=document.createElement("div"),this.boostButton.innerHTML='<span style="font-size: 13px; font-weight: 800; letter-spacing: 1.5px; color: #fff; text-shadow: 0 0 8px #ff5500;">BOOST</span>',Object.assign(this.boostButton.style,{position:"absolute",bottom:"36px",right:"36px",width:"88px",height:"88px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255, 85, 0, 0.85) 0%, rgba(180, 40, 0, 0.95) 100%)",border:"2px solid #ff7722",boxShadow:"0 0 20px rgba(255, 85, 0, 0.6), inset 0 0 10px rgba(255, 200, 0, 0.4)",pointerEvents:"auto",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none",webkitUserSelect:"none",cursor:"pointer",transform:"scale(1)",transition:"transform 0.1s ease, box-shadow 0.1s ease"}),this.touchContainer.appendChild(this.stickBase),this.touchContainer.appendChild(this.fireButton),this.touchContainer.appendChild(this.boostButton),document.body.appendChild(this.touchContainer),this.stickBase.addEventListener("touchstart",this.handleStickStart,{passive:!1}),window.addEventListener("touchmove",this.handleStickMove,{passive:!1}),window.addEventListener("touchend",this.handleStickEnd,{passive:!1}),window.addEventListener("touchcancel",this.handleStickEnd,{passive:!1}),this.boostButton.addEventListener("touchstart",this.handleBoostStart,{passive:!1}),window.addEventListener("touchend",this.handleBoostEnd,{passive:!1}),window.addEventListener("touchcancel",this.handleBoostEnd,{passive:!1}),this.fireButton.addEventListener("touchstart",this.handleFireStart,{passive:!1}),window.addEventListener("touchend",this.handleFireEnd,{passive:!1}),window.addEventListener("touchcancel",this.handleFireEnd,{passive:!1}),!("ontouchstart"in window||navigator.maxTouchPoints>0)&&window.innerWidth>900&&(this.touchContainer.style.opacity="0.35")}processStickTouch(t,e){const n=t-this.stickCenter.x,s=e-this.stickCenter.y,r=Math.sqrt(n*n+s*s),a=Math.min(r,this.STICK_MAX_RADIUS),o=Math.atan2(s,n),l=Math.cos(o)*a,c=Math.sin(o)*a;this.stickThumb&&(this.stickThumb.style.transform=`translate(${l}px, ${c}px)`),this.stickVector.x=l/this.STICK_MAX_RADIUS,this.stickVector.y=c/this.STICK_MAX_RADIUS}checkGyroCapability(){window.DeviceOrientationEvent&&(this.isGyroAvailable=!0)}async requestGyroPermission(){try{const t=window.DeviceOrientationEvent;return typeof(t==null?void 0:t.requestPermission)=="function"&&await t.requestPermission()!=="granted"?!1:(this.enableGyro(),!0)}catch{return!1}}enableGyro(){window.addEventListener("deviceorientation",this.handleOrientation,!0),this.isGyroActive=!0,this.calibrateNeutral(),this.setMode("Tilt / Gyro")}calibrateNeutral(){this.neutralBeta=this.currentBeta,this.neutralGamma=this.currentGamma}setMode(t){var e;this.activeMode!==t&&(this.activeMode=t,(e=this.onModeChange)==null||e.call(this,t))}update(){let t=0,e=0,n=0,s=0,r=!1,a=!1;if((this.keysDown.has("KeyW")||this.keysDown.has("ArrowUp"))&&(t-=1),(this.keysDown.has("KeyS")||this.keysDown.has("ArrowDown"))&&(t+=1),(this.keysDown.has("KeyA")||this.keysDown.has("ArrowLeft"))&&(e-=1),(this.keysDown.has("KeyD")||this.keysDown.has("ArrowRight"))&&(e+=1),this.keysDown.has("KeyQ")&&(n-=1),this.keysDown.has("KeyE")&&(n+=1),this.keysDown.has("Space")&&(r=!0),this.keysDown.has("KeyF")&&(a=!0),(this.keysDown.has("ShiftLeft")||this.keysDown.has("ShiftRight"))&&(s-=1),this.isPointerDown&&(e+=this.pointerPos.x,t+=this.pointerPos.y),this.isPointerFiring&&(a=!0),this.stickActive&&(e+=this.stickVector.x,t+=this.stickVector.y),this.isGyroActive){const o=this.currentBeta-this.neutralBeta,l=this.currentGamma-this.neutralGamma,c=Math.min(Math.max(o/25,-1),1),h=Math.min(Math.max(l/25,-1),1);t+=c,n+=h,e+=h*.6}return this.isTouchBoosting&&(r=!0),this.isTouchFiring&&(a=!0),this.state.pitch=Math.min(Math.max(t,-1),1),this.state.yaw=Math.min(Math.max(e,-1),1),this.state.roll=Math.min(Math.max(n,-1),1),this.state.throttle=Math.min(Math.max(s,-1),1),this.state.boost=r,this.state.fire=a,this.state}}class Sg{constructor(t){A(this,"jet");A(this,"baseCruisingSpeed",48);A(this,"maxBoostMultiplier",1.8);A(this,"brakeMultiplier",.5);A(this,"currentSpeed",48);A(this,"targetSpeed",48);A(this,"displaySpeedKmH",1200);A(this,"boostEnergy",100);A(this,"BOOST_DRAIN_TIME",4);A(this,"BOOST_RECHARGE_TIME",5);A(this,"isBoosting",!1);A(this,"pitchRate",1.7);A(this,"yawRate",1.4);A(this,"rollRate",2.4);A(this,"autoBankFactor",.85);A(this,"currentPitchVel",0);A(this,"currentYawVel",0);A(this,"currentRollVel",0);A(this,"VEC_FORWARD",new w(0,0,-1));A(this,"AXIS_X",new w(1,0,0));A(this,"AXIS_Y",new w(0,1,0));A(this,"AXIS_Z",new w(0,0,1));A(this,"quatPitch",new en);A(this,"quatYaw",new en);A(this,"quatRoll",new en);A(this,"forwardDir",new w);this.jet=t}resetPhysics(t=this.baseCruisingSpeed){this.currentSpeed=t,this.targetSpeed=t,this.currentPitchVel=0,this.currentYawVel=0,this.currentRollVel=0,this.isBoosting=!1}update(t,e){if(t.boost&&this.boostEnergy>0){this.isBoosting=!0;const h=100/this.BOOST_DRAIN_TIME;this.boostEnergy=Math.max(0,this.boostEnergy-h*e),this.boostEnergy<=0&&(this.isBoosting=!1)}else{this.isBoosting=!1;const h=100/this.BOOST_RECHARGE_TIME;this.boostEnergy=Math.min(100,this.boostEnergy+h*e)}let n=1;this.isBoosting?n=this.maxBoostMultiplier:t.throttle<-.1?n=this.brakeMultiplier:t.throttle>.1&&(n=1.25),this.targetSpeed=this.baseCruisingSpeed*n;const s=this.isBoosting?8:4;this.currentSpeed=zi.lerp(this.currentSpeed,this.targetSpeed,1-Math.exp(-s*e)),this.displaySpeedKmH=Math.round(this.currentSpeed*24);const r=t.pitch*this.pitchRate,a=t.yaw*this.yawRate,o=-t.yaw*this.autoBankFactor*this.rollRate,l=-t.roll*this.rollRate,c=l!==0?l:o;this.currentPitchVel=zi.lerp(this.currentPitchVel,r,1-Math.exp(-12*e)),this.currentYawVel=zi.lerp(this.currentYawVel,a,1-Math.exp(-12*e)),this.currentRollVel=zi.lerp(this.currentRollVel,c,1-Math.exp(-12*e)),this.quatPitch.setFromAxisAngle(this.AXIS_X,this.currentPitchVel*e),this.quatYaw.setFromAxisAngle(this.AXIS_Y,-this.currentYawVel*e),this.quatRoll.setFromAxisAngle(this.AXIS_Z,this.currentRollVel*e),this.jet.mesh.quaternion.multiply(this.quatPitch),this.jet.mesh.quaternion.multiply(this.quatYaw),this.jet.mesh.quaternion.multiply(this.quatRoll),this.jet.mesh.quaternion.normalize(),this.forwardDir.copy(this.VEC_FORWARD).applyQuaternion(this.jet.mesh.quaternion),this.jet.mesh.position.addScaledVector(this.forwardDir,this.currentSpeed*e)}}class Eg{constructor(t,e){A(this,"camera");A(this,"jet");A(this,"baseOffset",new w(0,2.5,7.5));A(this,"boostOffset",new w(0,2.8,9.2));A(this,"lookAheadOffset",new w(0,.4,-14));A(this,"baseFov",60);A(this,"boostFovMultiplier",1.1);A(this,"currentFov",60);A(this,"positionDamping",7);A(this,"targetDamping",10);A(this,"rollDamping",6);A(this,"currentLookAt",new w(0,0,-10));A(this,"currentOffset",new w(0,2.5,7.5));A(this,"desiredPos",new w);A(this,"desiredLookAt",new w);A(this,"desiredUp",new w);A(this,"VEC_UP",new w(0,1,0));this.camera=t,this.jet=e,this.baseFov=t.fov,this.currentFov=t.fov,this.snapToTarget()}snapToTarget(){const t=this.jet.mesh.position,e=this.jet.mesh.quaternion;this.desiredPos.copy(this.baseOffset).applyQuaternion(e).add(t),this.desiredLookAt.copy(this.lookAheadOffset).applyQuaternion(e).add(t),this.desiredUp.copy(this.VEC_UP).applyQuaternion(e),this.camera.position.copy(this.desiredPos),this.currentLookAt.copy(this.desiredLookAt),this.camera.up.copy(this.desiredUp),this.camera.lookAt(this.currentLookAt)}update(t,e){const n=this.jet.mesh.position,s=this.jet.mesh.quaternion,r=e?this.baseFov*this.boostFovMultiplier:this.baseFov,a=1-Math.exp(-8*t);this.currentFov=zi.lerp(this.currentFov,r,a),Math.abs(this.camera.fov-this.currentFov)>.05&&(this.camera.fov=this.currentFov,this.camera.updateProjectionMatrix());const o=e?this.boostOffset:this.baseOffset;this.currentOffset.lerp(o,a),this.desiredPos.copy(this.currentOffset).applyQuaternion(s).add(n);const l=1-Math.exp(-this.positionDamping*t);this.camera.position.lerp(this.desiredPos,l),this.desiredLookAt.copy(this.lookAheadOffset).applyQuaternion(s).add(n);const c=1-Math.exp(-this.targetDamping*t);this.currentLookAt.lerp(this.desiredLookAt,c),this.desiredUp.copy(this.VEC_UP).applyQuaternion(s);const h=1-Math.exp(-this.rollDamping*t);this.camera.up.lerp(this.desiredUp,h),this.camera.lookAt(this.currentLookAt)}}class bg{constructor(t){A(this,"container");A(this,"speedValueEl");A(this,"speedBarFillEl");A(this,"boostSegments",[]);A(this,"boostPercentEl");A(this,"inputBadgeEl");A(this,"gyroBtn");A(this,"inputManager");A(this,"gateTrackerEl");A(this,"rankBadgeEl");A(this,"timerEl");A(this,"navChevronEl");A(this,"navDistanceEl");A(this,"navArrowSvg");A(this,"damageVignetteEl");A(this,"finishBannerEl");A(this,"heartsRowEl");A(this,"heartsTextEl");A(this,"heartElements",[]);A(this,"emergencyStrobeEl");A(this,"lastHearts",10);A(this,"MAX_HEARTS",10);A(this,"heatBarFillEl");A(this,"heatStatusEl");A(this,"audioCtx",null);A(this,"damageFlashAlpha",0);A(this,"raceElapsedTime",0);A(this,"isRaceOver",!1);A(this,"NUM_BOOST_SEGMENTS",10);A(this,"pilotCallsign","VIPER-01");A(this,"pilotCallsignEl");A(this,"rivalMarkers",[]);A(this,"tempRivalPos",new w);A(this,"rivalOffset",new w(0,3.2,0));A(this,"onPodiumRestart");A(this,"headerContainerEl");A(this,"headerLeftEl");A(this,"headerCenterEl");A(this,"headerRightEl");A(this,"bottomPanelEl");A(this,"keyHintEl");A(this,"projCamSpace",new w);A(this,"projNDC",new w);this.inputManager=t,this.container=document.createElement("div"),this.container.id="flight-hud",this.initAudio(),this.initStylesAndDOM(),document.body.appendChild(this.container),this.inputManager.onModeChange=e=>{this.setInputMode(e)}}initAudio(){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}playGlitchWarningSound(){if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const t=this.audioCtx.currentTime,e=this.audioCtx.createOscillator(),n=this.audioCtx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(70,t+.18),n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(this.audioCtx.destination),e.start(t),e.stop(t+.25)}initStylesAndDOM(){const t=document.createElement("style");t.textContent=`
      @keyframes emergencyStrobe {
        0%, 100% {
          box-shadow: inset 0 0 50px rgba(255, 0, 60, 0.8), inset 0 0 120px rgba(255, 0, 60, 0.4);
          border: 3px solid rgba(255, 26, 117, 0.9);
        }
        50% {
          box-shadow: inset 0 0 15px rgba(255, 0, 60, 0.2), inset 0 0 30px rgba(255, 0, 60, 0.1);
          border: 3px solid rgba(255, 26, 117, 0.25);
        }
      }
      @keyframes heartPopShatter {
        0% { transform: scale(1.6); filter: brightness(3); }
        40% { transform: scale(0.6) rotate(-15deg); filter: brightness(1.5); }
        100% { transform: scale(1.0) rotate(0deg); }
      }
      @keyframes overheatBlink {
        0%, 100% { opacity: 1; filter: drop-shadow(0 0 8px #ff0055); }
        50% { opacity: 0.3; }
      }

      /* Unified Top Header Layout & Responsive Rules */
      #hud-top-header {
        position: absolute;
        top: 14px;
        left: 16px;
        right: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        pointer-events: none;
        z-index: 2000;
        box-sizing: border-box;
      }

      @media (max-width: 600px) {
        #hud-top-header {
          top: 8px !important;
          left: 10px !important;
          right: 10px !important;
        }
        #hud-top-left {
          gap: 4px !important;
        }
        #hud-rank-badge, #hud-gate-tracker {
          padding: 4px 8px !important;
          font-size: 11px !important;
        }
        #hud-callsign-badge {
          display: none !important;
        }
        #hud-timer-container {
          padding: 4px 10px !important;
        }
        #timer-digits {
          font-size: 15px !important;
        }
        #hud-top-right {
          gap: 6px !important;
        }
      }

      @media (max-width: 390px) {
        #hud-rank-badge, #hud-gate-tracker {
          padding: 3px 6px !important;
          font-size: 10px !important;
        }
        #timer-digits {
          font-size: 13px !important;
        }
      }
    `,document.head.appendChild(t),Object.assign(this.container.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"2000",fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',color:"#ffffff"}),this.emergencyStrobeEl=document.createElement("div"),this.emergencyStrobeEl.id="hud-emergency-strobe",Object.assign(this.emergencyStrobeEl.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",opacity:"0",transition:"opacity 0.25s ease",zIndex:"2040",animation:"emergencyStrobe 0.8s infinite ease-in-out"}),this.container.appendChild(this.emergencyStrobeEl),this.damageVignetteEl=document.createElement("div"),this.damageVignetteEl.id="damage-vignette",Object.assign(this.damageVignetteEl.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",background:"radial-gradient(ellipse at center, transparent 35%, rgba(255, 20, 20, 0.75) 100%)",opacity:"0",transition:"opacity 0.08s ease-out",zIndex:"2050"}),this.container.appendChild(this.damageVignetteEl),this.headerContainerEl=document.createElement("div"),this.headerContainerEl.id="hud-top-header",this.headerLeftEl=document.createElement("div"),this.headerLeftEl.id="hud-top-left",Object.assign(this.headerLeftEl.style,{display:"flex",flexDirection:"column",gap:"6px",alignItems:"flex-start",pointerEvents:"auto"}),this.rankBadgeEl=document.createElement("div"),this.rankBadgeEl.id="hud-rank-badge",Object.assign(this.rankBadgeEl.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 14px",background:"rgba(15, 20, 30, 0.82)",border:"1.5px solid #ffd700",borderRadius:"10px",fontSize:"12px",fontWeight:"900",letterSpacing:"1.2px",color:"#ffd700",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.6), inset 0 0 10px rgba(255, 215, 0, 0.25)",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)",whiteSpace:"nowrap"}),this.rankBadgeEl.innerHTML='<span style="font-size: 13px;">🏆</span><span>1ST / 4</span>',this.headerLeftEl.appendChild(this.rankBadgeEl),this.gateTrackerEl=document.createElement("div"),this.gateTrackerEl.id="hud-gate-tracker",Object.assign(this.gateTrackerEl.style,{display:"flex",alignItems:"center",gap:"6px",padding:"5px 12px",background:"rgba(10, 15, 25, 0.78)",border:"1px solid rgba(0, 240, 255, 0.45)",borderRadius:"10px",fontSize:"12px",fontWeight:"800",letterSpacing:"1.2px",color:"#00f0ff",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0, 240, 255, 0.12)",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)",whiteSpace:"nowrap"}),this.gateTrackerEl.innerHTML='<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#00f0ff;box-shadow:0 0 8px #00f0ff;"></span><span>GATE 01 / 15</span>',this.headerLeftEl.appendChild(this.gateTrackerEl),this.pilotCallsignEl=document.createElement("div"),this.pilotCallsignEl.id="hud-callsign-badge",Object.assign(this.pilotCallsignEl.style,{display:"flex",alignItems:"center",gap:"4px",padding:"3px 8px",background:"rgba(10, 15, 25, 0.65)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"6px",fontSize:"10px",fontWeight:"800",letterSpacing:"1px",color:"#ffffff",backdropFilter:"blur(6px)",webkitBackdropFilter:"blur(6px)",whiteSpace:"nowrap"}),this.pilotCallsignEl.innerHTML=`<span style="color:#00f0ff;">ID</span> <span>${this.pilotCallsign}</span>`,this.headerLeftEl.appendChild(this.pilotCallsignEl),this.headerContainerEl.appendChild(this.headerLeftEl),this.headerCenterEl=document.createElement("div"),this.headerCenterEl.id="hud-top-center",Object.assign(this.headerCenterEl.style,{display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"auto"}),this.timerEl=document.createElement("div"),this.timerEl.id="hud-timer-container",Object.assign(this.timerEl.style,{display:"flex",flexDirection:"column",alignItems:"center",padding:"5px 16px",background:"rgba(10, 15, 25, 0.82)",border:"1px solid rgba(0, 240, 255, 0.35)",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.5), inset 0 0 8px rgba(0, 240, 255, 0.1)",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)",whiteSpace:"nowrap"}),this.timerEl.innerHTML=`
      <span style="font-size: 8.5px; font-weight: 700; letter-spacing: 2px; color: #94a3b8; text-transform: uppercase;">COURSE TIME</span>
      <span id="timer-digits" style="font-size: 19px; font-weight: 900; font-family: ui-monospace, SFMono-Regular, monospace; color: #ffffff; letter-spacing: 1px; text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);">00:00:00</span>
    `,this.headerCenterEl.appendChild(this.timerEl),this.headerContainerEl.appendChild(this.headerCenterEl),this.headerRightEl=document.createElement("div"),this.headerRightEl.id="hud-top-right",Object.assign(this.headerRightEl.style,{display:"flex",alignItems:"center",gap:"10px",pointerEvents:"auto",justifyContent:"flex-end"}),this.inputBadgeEl=document.createElement("div"),this.inputBadgeEl.id="hud-input-badge",Object.assign(this.inputBadgeEl.style,{display:"none",alignItems:"center",gap:"6px",padding:"5px 10px",background:"rgba(10, 15, 25, 0.75)",border:"1px solid rgba(0, 240, 255, 0.4)",borderRadius:"8px",fontSize:"11px",fontWeight:"600",letterSpacing:"1px",color:"#00f0ff",backdropFilter:"blur(8px)",whiteSpace:"nowrap"}),this.inputBadgeEl.innerHTML='<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#00f0ff;"></span><span id="hud-mode-text">KEYBOARD</span>',this.headerRightEl.appendChild(this.inputBadgeEl),this.gyroBtn=document.createElement("button"),this.gyroBtn.id="hud-gyro-btn",this.gyroBtn.innerText="TILT",Object.assign(this.gyroBtn.style,{padding:"5px 10px",background:"rgba(10, 15, 25, 0.75)",border:"1px solid rgba(255, 85, 0, 0.5)",borderRadius:"8px",fontSize:"11px",fontWeight:"700",letterSpacing:"1px",color:"#ff7722",cursor:"pointer",display:"none",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)",whiteSpace:"nowrap"}),this.gyroBtn.addEventListener("click",async _=>{_.stopPropagation(),this.inputManager.isGyroActive?this.inputManager.calibrateNeutral():await this.inputManager.requestGyroPermission()?(this.gyroBtn.innerText="RE-CENTER",this.gyroBtn.style.borderColor="rgba(0, 240, 255, 0.6)",this.gyroBtn.style.color="#00f0ff"):this.gyroBtn.innerText="TILT N/A"}),this.headerRightEl.appendChild(this.gyroBtn),this.headerContainerEl.appendChild(this.headerRightEl),this.container.appendChild(this.headerContainerEl),this.navChevronEl=document.createElement("div"),this.navChevronEl.id="nav-waypoint-indicator",Object.assign(this.navChevronEl.style,{position:"absolute",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",pointerEvents:"none",transition:"opacity 0.15s ease",zIndex:"2020"});const e=document.createElement("div");e.innerHTML=`
      <svg id="nav-arrow-svg" width="34" height="34" viewBox="0 0 34 34" style="filter: drop-shadow(0 0 8px #00f0ff); transform-origin: center;">
        <polygon points="17,3 31,29 17,21 3,29" fill="#00f0ff" stroke="#ffffff" stroke-width="1.5" />
      </svg>
    `,this.navArrowSvg=e.querySelector("#nav-arrow-svg"),this.navChevronEl.appendChild(e),this.navDistanceEl=document.createElement("div"),Object.assign(this.navDistanceEl.style,{padding:"2px 8px",background:"rgba(10, 15, 25, 0.85)",border:"1px solid rgba(0, 240, 255, 0.5)",borderRadius:"8px",fontSize:"11px",fontWeight:"800",fontFamily:"ui-monospace, monospace",color:"#00f0ff",letterSpacing:"0.5px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.6)",whiteSpace:"nowrap"}),this.navDistanceEl.innerText="140m",this.navChevronEl.appendChild(this.navDistanceEl),this.container.appendChild(this.navChevronEl),this.bottomPanelEl=document.createElement("div"),this.bottomPanelEl.id="hud-bottom-dashboard",Object.assign(this.bottomPanelEl.style,{position:"absolute",bottom:"24px",left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:"22px",padding:"14px 28px",background:"rgba(10, 15, 25, 0.82)",border:"1px solid rgba(0, 240, 255, 0.4)",borderRadius:"18px",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.65), inset 0 0 16px rgba(0, 240, 255, 0.08)",backdropFilter:"blur(12px)",webkitBackdropFilter:"blur(12px)",pointerEvents:"auto",maxWidth:"96vw",flexWrap:"wrap",justifyContent:"center"});const n=document.createElement("div");Object.assign(n.style,{display:"flex",flexDirection:"column",gap:"6px",minWidth:"220px"});const s=document.createElement("div");Object.assign(s.style,{fontSize:"10px",fontWeight:"700",letterSpacing:"1.5px",color:"#94a3b8",textTransform:"uppercase"}),s.innerText="VELOCITY",n.appendChild(s);const r=document.createElement("div");Object.assign(r.style,{display:"flex",alignItems:"baseline",gap:"6px"}),this.speedValueEl=document.createElement("div"),Object.assign(this.speedValueEl.style,{fontSize:"28px",fontWeight:"900",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",color:"#ffffff",letterSpacing:"-0.5px",textShadow:"0 0 12px rgba(255, 255, 255, 0.4)"}),this.speedValueEl.innerText="1200",r.appendChild(this.speedValueEl);const a=document.createElement("span");Object.assign(a.style,{fontSize:"11px",fontWeight:"700",color:"#00f0ff",letterSpacing:"1px"}),a.innerText="KM/H",r.appendChild(a),n.appendChild(r);const o=document.createElement("div");Object.assign(o.style,{width:"100%",height:"4px",background:"rgba(255, 255, 255, 0.12)",borderRadius:"2px",overflow:"hidden",marginTop:"2px"}),this.speedBarFillEl=document.createElement("div"),Object.assign(this.speedBarFillEl.style,{width:"55%",height:"100%",background:"linear-gradient(90deg, #00f0ff, #38bdf8)",boxShadow:"0 0 8px #00f0ff",transition:"width 0.1s ease"}),o.appendChild(this.speedBarFillEl),n.appendChild(o);const l=document.createElement("div");Object.assign(l.style,{display:"flex",alignItems:"center",gap:"8px",marginTop:"4px"}),this.heartsRowEl=document.createElement("div"),Object.assign(this.heartsRowEl.style,{display:"flex",alignItems:"center",gap:"4px"});for(let _=0;_<this.MAX_HEARTS;_++){const I=document.createElement("span");I.innerText="♥",Object.assign(I.style,{fontSize:"15px",color:"#ff1a75",textShadow:"0 0 8px #ff1a75, 0 0 16px rgba(255, 26, 117, 0.6)",display:"inline-block",transition:"all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)"}),this.heartElements.push(I),this.heartsRowEl.appendChild(I)}l.appendChild(this.heartsRowEl),this.heartsTextEl=document.createElement("span"),Object.assign(this.heartsTextEl.style,{fontSize:"11px",fontWeight:"800",fontFamily:"ui-monospace, monospace",color:"#ff1a75",letterSpacing:"0.5px",whiteSpace:"nowrap"}),this.heartsTextEl.innerText="(10 / 10 HEARTS)",l.appendChild(this.heartsTextEl),n.appendChild(l),this.bottomPanelEl.appendChild(n);const c=document.createElement("div");Object.assign(c.style,{width:"1px",height:"56px",background:"rgba(255, 255, 255, 0.15)"}),this.bottomPanelEl.appendChild(c);const h=document.createElement("div");Object.assign(h.style,{display:"flex",flexDirection:"column",gap:"6px",minWidth:"130px"});const u=document.createElement("div");Object.assign(u.style,{display:"flex",justifyContent:"space-between",alignItems:"center"});const d=document.createElement("div");Object.assign(d.style,{fontSize:"10px",fontWeight:"700",letterSpacing:"1.5px",color:"#94a3b8",textTransform:"uppercase"}),d.innerText="CANNON HEAT",u.appendChild(d),this.heatStatusEl=document.createElement("div"),Object.assign(this.heatStatusEl.style,{fontSize:"10px",fontWeight:"800",fontFamily:"ui-monospace, monospace",color:"#ff0055"}),this.heatStatusEl.innerText="READY",u.appendChild(this.heatStatusEl),h.appendChild(u);const f=document.createElement("div");Object.assign(f.style,{width:"100%",height:"8px",background:"rgba(255, 255, 255, 0.12)",borderRadius:"4px",overflow:"hidden"}),this.heatBarFillEl=document.createElement("div"),Object.assign(this.heatBarFillEl.style,{width:"0%",height:"100%",background:"linear-gradient(90deg, #ff0055, #ff5500)",boxShadow:"0 0 8px #ff0055",transition:"width 0.08s ease"}),f.appendChild(this.heatBarFillEl),h.appendChild(f),this.bottomPanelEl.appendChild(h);const g=document.createElement("div");Object.assign(g.style,{width:"1px",height:"56px",background:"rgba(255, 255, 255, 0.15)"}),this.bottomPanelEl.appendChild(g);const x=document.createElement("div");Object.assign(x.style,{display:"flex",flexDirection:"column",gap:"4px",minWidth:"140px"});const m=document.createElement("div");Object.assign(m.style,{display:"flex",justifyContent:"space-between",alignItems:"center"});const p=document.createElement("div");Object.assign(p.style,{fontSize:"10px",fontWeight:"700",letterSpacing:"1.5px",color:"#94a3b8",textTransform:"uppercase"}),p.innerText="BOOST DRIVE",m.appendChild(p),this.boostPercentEl=document.createElement("div"),Object.assign(this.boostPercentEl.style,{fontSize:"11px",fontWeight:"800",fontFamily:"ui-monospace, monospace",color:"#00f0ff"}),this.boostPercentEl.innerText="100%",m.appendChild(this.boostPercentEl),x.appendChild(m);const b=document.createElement("div");Object.assign(b.style,{display:"flex",gap:"4px",marginTop:"6px"});for(let _=0;_<this.NUM_BOOST_SEGMENTS;_++){const I=document.createElement("div");Object.assign(I.style,{flex:"1",height:"14px",borderRadius:"2px",background:"#00f0ff",boxShadow:"0 0 6px rgba(0, 240, 255, 0.6)",transition:"background 0.12s ease, box-shadow 0.12s ease, opacity 0.12s ease"}),this.boostSegments.push(I),b.appendChild(I)}x.appendChild(b),this.bottomPanelEl.appendChild(x),this.container.appendChild(this.bottomPanelEl),this.keyHintEl=document.createElement("div"),Object.assign(this.keyHintEl.style,{position:"absolute",bottom:"16px",left:"20px",padding:"6px 12px",background:"rgba(10, 15, 25, 0.65)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",fontSize:"11px",color:"#94a3b8",letterSpacing:"0.5px",backdropFilter:"blur(4px)",display:window.innerWidth>900?"block":"none"}),this.keyHintEl.innerHTML='<span style="color:#00f0ff;">[W/S]</span> Pitch • <span style="color:#00f0ff;">[A/D]</span> Yaw • <span style="color:#00f0ff;">[Q/E]</span> Roll • <span style="color:#ff0055;">[F / Click]</span> Fire • <span style="color:#ff7722;">[SPACE]</span> Boost • <span style="color:#94a3b8;">[SHIFT]</span> Brake',this.container.appendChild(this.keyHintEl),this.finishBannerEl=document.createElement("div"),this.finishBannerEl.id="victory-podium-overlay",Object.assign(this.finishBannerEl.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",display:"none",justifyContent:"center",alignItems:"center",background:"rgba(5, 10, 20, 0.88)",backdropFilter:"blur(12px)",webkitBackdropFilter:"blur(12px)",zIndex:"99999",pointerEvents:"auto",opacity:"0",transition:"opacity 0.4s ease",boxSizing:"border-box",padding:"20px"}),this.finishBannerEl.innerHTML=`
      <div class="podium-modal-card" style="position: relative; max-width: 460px; width: 92%; padding: 36px 40px; background: rgba(10, 16, 32, 0.96); border: 2px solid #ffd700; border-radius: 24px; text-align: center; box-shadow: 0 0 60px rgba(255, 215, 0, 0.5), inset 0 0 24px rgba(255, 215, 0, 0.2); box-sizing: border-box;">
        <div style="font-size: 13px; font-weight: 900; letter-spacing: 4px; color: #ffd700; text-transform: uppercase;">RACE FINISH</div>
        <div id="podium-rank-text" style="font-size: 34px; font-weight: 900; letter-spacing: 2px; color: #ffffff; margin: 8px 0; text-shadow: 0 0 20px rgba(255, 215, 0, 0.85);">1ST PLACE</div>
        <div id="podium-time-text" style="font-size: 18px; font-weight: 800; color: #00f0ff; font-family: ui-monospace, monospace; margin-bottom: 20px;">FINAL TIME: 00:00:00</div>
        <div style="display: flex; justify-content: space-around; gap: 16px; margin-bottom: 28px; padding: 14px; background: rgba(255, 255, 255, 0.05); border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.1);">
          <div>
            <div style="font-size: 10px; color: #94a3b8; font-weight: 700; letter-spacing: 1px;">SHOTS FIRED</div>
            <div id="podium-shots-text" style="font-size: 20px; font-weight: 900; color: #ff0055; font-family: ui-monospace, monospace; margin-top: 4px;">0</div>
          </div>
          <div style="width: 1px; background: rgba(255,255,255,0.15);"></div>
          <div>
            <div style="font-size: 10px; color: #94a3b8; font-weight: 700; letter-spacing: 1px;">ASTEROIDS DESTROYED</div>
            <div id="podium-kills-text" style="font-size: 20px; font-weight: 900; color: #00ff88; font-family: ui-monospace, monospace; margin-top: 4px;">0</div>
          </div>
        </div>
        <button id="podium-restart-btn" style="width: 100%; padding: 14px 28px; background: linear-gradient(90deg, #ffd700, #ff8800); border: none; border-radius: 14px; font-size: 14px; font-weight: 900; letter-spacing: 2px; color: #050a14; cursor: pointer; box-shadow: 0 0 24px rgba(255, 215, 0, 0.7); transition: transform 0.15s ease, box-shadow 0.2s ease;">
          PLAY AGAIN
        </button>
      </div>
    `,this.container.appendChild(this.finishBannerEl);const M=this.finishBannerEl.querySelector("#podium-restart-btn");M&&M.addEventListener("click",()=>{this.onPodiumRestart?this.onPodiumRestart():window.location.reload()})}setInputMode(t){if(this.inputBadgeEl){const e=this.inputBadgeEl.querySelector("#hud-mode-text");e&&(e.innerText=t.toUpperCase())}}setStandings(t){const e=["TH","ST","ND","RD"],n=t%100,s=e[(n-20)%10]||e[n]||e[0];this.rankBadgeEl.innerHTML=`<span style="font-size: 14px;">🏆</span><span>${t}${s} / 4</span>`}triggerDamageFlash(){this.damageFlashAlpha=1}addPenaltyTime(t){this.raceElapsedTime+=t}updateWeaponHeat(t,e){this.heatBarFillEl.style.width=`${(t*100).toFixed(0)}%`,e?(this.heatStatusEl.innerText="OVERHEATED!",this.heatStatusEl.style.color="#ff0055",this.heatStatusEl.style.animation="overheatBlink 0.4s infinite",this.heatBarFillEl.style.background="#ff0055",this.heatBarFillEl.style.boxShadow="0 0 12px #ff0055"):(this.heatStatusEl.innerText=t>.7?"HOT":"READY",this.heatStatusEl.style.color=t>.7?"#ffaa00":"#00f0ff",this.heatStatusEl.style.animation="none",this.heatBarFillEl.style.background="linear-gradient(90deg, #ff0055, #ffaa00)",this.heatBarFillEl.style.boxShadow="0 0 8px #ff0055")}updateHearts(t,e=10){const n=Math.max(0,Math.min(e,t));if(n<this.lastHearts){this.playGlitchWarningSound();for(let s=n;s<this.lastHearts;s++){const r=this.heartElements[s];r&&(r.style.animation="none",r.offsetWidth,r.style.animation="heartPopShatter 0.4s ease-out")}}this.lastHearts=n;for(let s=0;s<this.MAX_HEARTS;s++){const r=this.heartElements[s];s<n?(r.innerText="♥",r.style.color="#ff1a75",r.style.textShadow="0 0 8px #ff1a75, 0 0 16px rgba(255, 26, 117, 0.6)",r.style.opacity="1.0"):(r.innerText="♡",r.style.color="#334155",r.style.textShadow="none",r.style.opacity="0.5")}this.heartsTextEl.innerText=`(${n} / ${e} HEARTS)`,n<=2&&n>0?(this.emergencyStrobeEl.style.opacity="1.0",this.heartsTextEl.style.color="#ff003c"):(this.emergencyStrobeEl.style.opacity="0",this.heartsTextEl.style.color="#ff1a75")}updateGate(t,e){const n=(t+1).toString().padStart(2,"0"),s=e.toString().padStart(2,"0");this.gateTrackerEl.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#00f0ff;box-shadow:0 0 8px #00f0ff;"></span><span>GATE ${n} / ${s}</span>`}showVictoryPodium(t){this.isRaceOver=!0;const e=this.finishBannerEl.querySelector("#podium-rank-text"),n=this.finishBannerEl.querySelector("#podium-time-text"),s=this.finishBannerEl.querySelector("#podium-shots-text"),r=this.finishBannerEl.querySelector("#podium-kills-text"),a=["1ST PLACE - GOLD CUP","2ND PLACE - SILVER","3RD PLACE - BRONZE","4TH PLACE"];e&&(e.textContent=a[t.rank-1]||`${t.rank}TH PLACE`),n&&(n.textContent=`FINAL TIME: ${t.totalTime}`),s&&(s.textContent=t.shotsFired.toString()),r&&(r.textContent=t.asteroidsDestroyed.toString()),this.finishBannerEl.style.display="flex",this.finishBannerEl.offsetWidth,this.finishBannerEl.style.opacity="1.0",this.bottomPanelEl&&(this.bottomPanelEl.style.display="none"),this.headerContainerEl&&(this.headerContainerEl.style.display="none"),this.navChevronEl&&(this.navChevronEl.style.display="none"),this.keyHintEl&&(this.keyHintEl.style.display="none"),this.emergencyStrobeEl&&(this.emergencyStrobeEl.style.opacity="0");for(const o of this.rivalMarkers)o.container.style.opacity="0"}showPodium(t){this.showVictoryPodium(t)}updateNavigationChevron(t,e,n){if(!t||this.isRaceOver){this.navChevronEl.style.opacity="0";return}this.navChevronEl.style.opacity="1";const s=Math.round(e.distanceTo(t));this.navDistanceEl.innerText=`${s}m`,this.projCamSpace.copy(t).applyMatrix4(n.matrixWorldInverse);const r=this.projCamSpace.z>0;this.projNDC.copy(t).project(n);let a=this.projNDC.x,o=this.projNDC.y;r&&(a=-a,o=-o,Math.abs(a)<.001&&Math.abs(o)<.001&&(o=-1));const l=window.innerWidth/2,c=window.innerHeight/2,h=55;if(!r&&Math.abs(a)<=.82&&Math.abs(o)<=.82){const d=(a*.5+.5)*window.innerWidth,f=(-o*.5+.5)*window.innerHeight;this.navChevronEl.style.left=`${d}px`,this.navChevronEl.style.top=`${f}px`,this.navArrowSvg.style.transform="rotate(180deg) scale(0.85)"}else{const d=Math.sqrt(a*a+o*o)||1,f=a/d,g=o/d,x=l-h,m=c-h,p=Math.abs(x/(f||1e-4)),b=Math.abs(m/(g||1e-4)),M=Math.min(p,b),_=l+f*M,I=c-g*M;this.navChevronEl.style.left=`${_}px`,this.navChevronEl.style.top=`${I}px`;const R=Math.atan2(-g,f)*180/Math.PI+90;this.navArrowSvg.style.transform=`rotate(${R}deg) scale(1.1)`}}resumeAudio(){this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}setVisible(t){this.container.style.display=t?"block":"none"}setPilotCallsign(t){this.pilotCallsign=t,this.pilotCallsignEl&&(this.pilotCallsignEl.innerHTML=`<span style="color:#00f0ff;">CALLSIGN</span> <span>${t}</span>`)}resetRace(){this.raceElapsedTime=0,this.isRaceOver=!1,this.lastHearts=10,this.updateHearts(10);const t=this.timerEl.querySelector("#timer-digits");t&&(t.textContent="00:00:00"),this.finishBannerEl.style.opacity="0",this.finishBannerEl.style.display="none",this.bottomPanelEl&&(this.bottomPanelEl.style.display="flex"),this.headerContainerEl&&(this.headerContainerEl.style.display="flex"),this.navChevronEl&&(this.navChevronEl.style.display="block"),this.keyHintEl&&(this.keyHintEl.style.display=window.innerWidth>900?"block":"none"),this.emergencyStrobeEl.style.opacity="0"}attachFpsOverlay(t){this.headerRightEl&&t&&this.headerRightEl.prepend(t)}attachPauseButton(t){this.headerRightEl&&t&&this.headerRightEl.appendChild(t)}initRivalMarkers(t){for(const e of this.rivalMarkers)e.container.parentElement&&e.container.parentElement.removeChild(e.container);this.rivalMarkers=[];for(let e=0;e<t.length;e++){const n=t[e],s="#"+n.config.accentColor.toString(16).padStart(6,"0"),r="#"+n.config.glowColor.toString(16).padStart(6,"0"),a=document.createElement("div");a.className=`rival-marker-root rival-marker-${e}`,Object.assign(a.style,{position:"absolute",top:"0",left:"0",pointerEvents:"none",opacity:"0",zIndex:"2045",transition:"opacity 0.15s ease"});const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","24"),o.setAttribute("height","24"),o.setAttribute("viewBox","0 0 24 24"),Object.assign(o.style,{position:"absolute",top:"-12px",left:"-12px",filter:`drop-shadow(0 0 6px ${r})`,display:"none"}),o.innerHTML=`<polygon points="12,2 22,20 12,15 2,20" fill="${s}"/>`,a.appendChild(o);const l=document.createElement("div");Object.assign(l.style,{background:"rgba(6, 12, 24, 0.85)",border:`1.5px solid ${s}`,borderRadius:"8px",padding:"4px 8px",display:"flex",flexDirection:"column",alignItems:"center",gap:"3px",boxShadow:`0 0 12px rgba(0,0,0,0.8), 0 0 8px ${r}55`,backdropFilter:"blur(6px)",transform:"translate(-50%, -100%)",whiteSpace:"nowrap"});const c=document.createElement("div");Object.assign(c.style,{display:"flex",alignItems:"center",gap:"6px"});const h=document.createElement("span");h.textContent=n.name,Object.assign(h.style,{fontSize:"11px",fontWeight:"900",letterSpacing:"1px",color:s,textShadow:`0 0 6px ${r}`});const u=document.createElement("span");u.textContent="•",u.style.color="rgba(255,255,255,0.4)";const d=document.createElement("span");d.textContent="0m",Object.assign(d.style,{fontSize:"10px",fontWeight:"700",color:"#ffffff",fontFamily:"monospace"}),c.appendChild(h),c.appendChild(u),c.appendChild(d),l.appendChild(c);const f=document.createElement("div");Object.assign(f.style,{display:"flex",gap:"2px",alignItems:"center"});const g=[];for(let x=0;x<10;x++){const m=document.createElement("span");Object.assign(m.style,{display:"inline-block",width:"4px",height:"5px",borderRadius:"1px",background:"#00ff88",boxShadow:"0 0 3px rgba(0, 255, 136, 0.6)"}),f.appendChild(m),g.push(m)}l.appendChild(f),a.appendChild(l),this.container.appendChild(a),this.rivalMarkers.push({container:a,arrowSvg:o,card:l,nameEl:h,distEl:d,heartPips:g})}}updateRivalMarkers(t,e,n,s){if(!s||this.isRaceOver){for(const l of this.rivalMarkers)l.container.style.opacity="0";return}const r=window.innerWidth/2,a=window.innerHeight/2,o=60;for(let l=0;l<t.length;l++){const c=t[l],h=this.rivalMarkers[l];if(!c||!h)continue;const u=this.tempRivalPos.copy(c.mesh.position).add(this.rivalOffset);this.projCamSpace.copy(u).applyMatrix4(n.matrixWorldInverse);const d=this.projCamSpace.z>0;this.projNDC.copy(u).project(n);let f=this.projNDC.x,g=this.projNDC.y;d&&(f=-f,g=-g,Math.abs(f)<.001&&Math.abs(g)<.001&&(g=-1));const x=Math.round(e.distanceTo(c.mesh.position));h.distEl.textContent=`${x}m`;const m=c.currentHearts;for(let b=0;b<10;b++)b<m?(h.heartPips[b].style.background=m<=3?"#ff1a75":m<=6?"#ffbb00":"#00ff88",h.heartPips[b].style.opacity="1"):(h.heartPips[b].style.background="#475569",h.heartPips[b].style.opacity="0.35");if(!d&&Math.abs(f)<=.85&&Math.abs(g)<=.85){const b=(f*.5+.5)*window.innerWidth,M=(-g*.5+.5)*window.innerHeight;h.container.style.opacity="1",h.container.style.left=`${b}px`,h.container.style.top=`${M}px`,h.arrowSvg.style.display="none",h.card.style.transform="translate(-50%, -100%)"}else{const b=Math.sqrt(f*f+g*g)||1,M=f/b,_=g/b,I=r-o,P=a-o,R=Math.abs(I/(M||1e-4)),D=Math.abs(P/(_||1e-4)),E=Math.min(R,D),y=r+M*E,L=a-_*E;h.container.style.opacity="1",h.container.style.left=`${y}px`,h.container.style.top=`${L}px`,h.arrowSvg.style.display="block";const B=Math.atan2(-_,M)*180/Math.PI+90;h.arrowSvg.style.transform=`rotate(${B}deg) scale(0.9)`,h.card.style.transform="translate(-50%, -50%)"}}}update(t,e,n,s,r=!0){if(r&&!this.isRaceOver){this.raceElapsedTime+=s;const h=Math.floor(this.raceElapsedTime),u=Math.floor(h/60).toString().padStart(2,"0"),d=(h%60).toString().padStart(2,"0"),f=Math.floor(this.raceElapsedTime%1*100).toString().padStart(2,"0"),g=this.timerEl.querySelector("#timer-digits");g&&(g.textContent=`${u}:${d}:${f}`)}this.damageFlashAlpha>0&&(this.damageFlashAlpha=Math.max(0,this.damageFlashAlpha-s*2.5),this.damageVignetteEl.style.opacity=this.damageFlashAlpha.toString()),this.speedValueEl.innerText=t.toString();const o=Math.min(Math.max(t/2200,0),1);this.speedBarFillEl.style.width=`${(o*100).toFixed(0)}%`,n?(this.speedValueEl.style.color="#ff9933",this.speedValueEl.style.textShadow="0 0 16px rgba(255, 120, 0, 0.8)",this.speedBarFillEl.style.background="linear-gradient(90deg, #ff5500, #ffbb00)",this.speedBarFillEl.style.boxShadow="0 0 12px #ff5500"):(this.speedValueEl.style.color="#ffffff",this.speedValueEl.style.textShadow="0 0 12px rgba(255, 255, 255, 0.4)",this.speedBarFillEl.style.background="linear-gradient(90deg, #00f0ff, #38bdf8)",this.speedBarFillEl.style.boxShadow="0 0 8px #00f0ff");const l=Math.min(Math.max(e,0),100);this.boostPercentEl.innerText=`${Math.round(l)}%`;const c=Math.round(l/100*this.NUM_BOOST_SEGMENTS);for(let h=0;h<this.NUM_BOOST_SEGMENTS;h++){const u=this.boostSegments[h];h<c?(u.style.opacity="1.0",n?(u.style.background="#ff5500",u.style.boxShadow="0 0 10px rgba(255, 85, 0, 0.9)"):(u.style.background="#00f0ff",u.style.boxShadow="0 0 6px rgba(0, 240, 255, 0.6)")):(u.style.opacity="0.15",u.style.background="rgba(255, 255, 255, 0.2)",u.style.boxShadow="none")}}getFormattedTime(){const t=Math.floor(this.raceElapsedTime),e=Math.floor(t/60).toString().padStart(2,"0"),n=(t%60).toString().padStart(2,"0"),s=Math.floor(this.raceElapsedTime%1*100).toString().padStart(2,"0");return`${e}:${n}:${s}`}destroy(){this.container.parentElement&&this.container.parentElement.removeChild(this.container)}}class Tg{constructor(t,e){A(this,"scene");A(this,"camera");A(this,"celestialMesh");A(this,"streakMesh");A(this,"streakGeometry");A(this,"streakPositions");A(this,"streakParticles",[]);A(this,"NUM_CELESTIAL",2500);A(this,"NUM_STREAKS",1200);A(this,"BOUNDS_X",150);A(this,"BOUNDS_Y",150);A(this,"BOUNDS_Z",250);A(this,"forwardFlightVec",new w);this.scene=t,this.camera=e,this.celestialMesh=this.buildCelestialStarfield(),this.scene.add(this.celestialMesh);const n=this.buildWarpDust();this.streakMesh=n.mesh,this.streakGeometry=n.geometry,this.streakPositions=n.positions,this.streakParticles=n.particles,this.scene.add(this.streakMesh)}buildCelestialStarfield(){const t=new Se,e=new Float32Array(this.NUM_CELESTIAL*3),n=new Float32Array(this.NUM_CELESTIAL*3),s=[new Ft(16777215),new Ft(10875900),new Ft(3718648),new Ft(16707722),new Ft(16020150)];for(let a=0;a<this.NUM_CELESTIAL;a++){const o=a*3,l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1),h=1800+Math.random()*1e3;e[o]=h*Math.sin(c)*Math.cos(l),e[o+1]=h*Math.sin(c)*Math.sin(l),e[o+2]=h*Math.cos(c);const u=s[Math.floor(Math.random()*s.length)],d=.7+Math.random()*.3;n[o]=u.r*d,n[o+1]=u.g*d,n[o+2]=u.b*d}t.setAttribute("position",new we(e,3)),t.setAttribute("color",new we(n,3));const r=new ka({size:1.8,vertexColors:!0,transparent:!0,opacity:.95,sizeAttenuation:!0});return new tc(t,r)}buildWarpDust(){const t=new Se,e=new Float32Array(this.NUM_STREAKS*6),n=new Float32Array(this.NUM_STREAKS*6),s=[],r=[new Ft(61695),new Ft(16777215),new Ft(3718648),new Ft(8490232)];for(let l=0;l<this.NUM_STREAKS;l++){const c=(Math.random()-.5)*this.BOUNDS_X,h=(Math.random()-.5)*this.BOUNDS_Y,u=(Math.random()-.5)*this.BOUNDS_Z,d=.8+Math.random()*.6;s.push({x:c,y:h,z:u,speed:d});const f=l*6;e[f]=c,e[f+1]=h,e[f+2]=u,e[f+3]=c,e[f+4]=h,e[f+5]=u+1;const g=r[Math.floor(Math.random()*r.length)];n[f]=g.r,n[f+1]=g.g,n[f+2]=g.b,n[f+3]=g.r*.3,n[f+4]=g.g*.3,n[f+5]=g.b*.3}t.setAttribute("position",new we(e,3)),t.setAttribute("color",new we(n,3));const a=new Ql({vertexColors:!0,transparent:!0,opacity:.85,blending:Vs,linewidth:1});return{mesh:new Fm(t,a),geometry:t,positions:e,colors:n,particles:s}}update(t,e,n,s){this.celestialMesh.position.copy(this.camera.position),this.forwardFlightVec.set(0,0,-1).applyQuaternion(e).normalize();const r=n?12:1.4,a=n?2.6:1,o=this.BOUNDS_X/2,l=this.BOUNDS_Y/2,c=this.BOUNDS_Z/2;for(let h=0;h<this.NUM_STREAKS;h++){const u=this.streakParticles[h],d=h*6;u.x-=this.forwardFlightVec.x*u.speed*45*a*s,u.y-=this.forwardFlightVec.y*u.speed*45*a*s,u.z-=this.forwardFlightVec.z*u.speed*45*a*s;const f=u.x-t.x,g=u.y-t.y,x=u.z-t.z;f>o?u.x-=this.BOUNDS_X:f<-o&&(u.x+=this.BOUNDS_X),g>l?u.y-=this.BOUNDS_Y:g<-l&&(u.y+=this.BOUNDS_Y),x>c?u.z-=this.BOUNDS_Z:x<-c&&(u.z+=this.BOUNDS_Z),this.streakPositions[d]=u.x,this.streakPositions[d+1]=u.y,this.streakPositions[d+2]=u.z,this.streakPositions[d+3]=u.x+this.forwardFlightVec.x*r,this.streakPositions[d+4]=u.y+this.forwardFlightVec.y*r,this.streakPositions[d+5]=u.z+this.forwardFlightVec.z*r}this.streakGeometry.attributes.position.needsUpdate=!0}}class wg{constructor(t){A(this,"scene");A(this,"rings",[]);A(this,"currentRingIndex",0);A(this,"isCourseFinished",!1);A(this,"onFinish");A(this,"audioCtx",null);A(this,"RING_RADIUS",15);A(this,"FINISH_RADIUS",28);A(this,"testLine",new hc);A(this,"closestPoint",new w);A(this,"finishBanners",[]);this.scene=t,this.initAudioContext(),this.buildCourse()}initAudioContext(){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}resumeAudio(){this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}resetCourse(){this.currentRingIndex=0,this.isCourseFinished=!1;for(const t of this.rings)t.isCompleted=!1,t.flashTimer=0}playCheckpointChime(t=!1){if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.currentTime;if(t){[523.25,659.25,783.99,1046.5].forEach((o,l)=>{if(!this.audioCtx)return;const c=this.audioCtx.createOscillator(),h=this.audioCtx.createGain(),u=e+l*.12;c.type="triangle",c.frequency.setValueAtTime(o,u),h.gain.setValueAtTime(.4,u),h.gain.exponentialRampToValueAtTime(.001,u+.65),c.connect(h),h.connect(this.audioCtx.destination),c.start(u),c.stop(u+.7)});return}const n=this.audioCtx.createOscillator(),s=this.audioCtx.createOscillator(),r=this.audioCtx.createGain();n.type="sine",n.frequency.setValueAtTime(659.25,e),n.frequency.exponentialRampToValueAtTime(1318.5,e+.12),s.type="triangle",s.frequency.setValueAtTime(987.77,e),s.frequency.exponentialRampToValueAtTime(1975.5,e+.18),r.gain.setValueAtTime(.35,e),r.gain.exponentialRampToValueAtTime(.001,e+.55),n.connect(r),s.connect(r),r.connect(this.audioCtx.destination),n.start(e),s.start(e),n.stop(e+.6),s.stop(e+.6)}buildCourse(){const t=[new w(0,0,-100),new w(20,15,-240),new w(65,30,-400),new w(90,10,-580),new w(45,-20,-740),new w(-30,-35,-900),new w(-90,-10,-1060),new w(-120,30,-1220),new w(-70,60,-1380),new w(10,50,-1540),new w(80,20,-1700),new w(60,-15,-1880),new w(-20,-10,-2060),new w(-10,15,-2240),new w(0,0,-2420)],e=new qn(12,.45,16,50),n=new qn(13.8,.15,4,8),s=new qn(18,.95,8,6),r=new qn(20.5,.35,6,6);for(let a=0;a<t.length;a++){const o=t[a],c=(a<t.length-1?t[a+1]:o.clone().add(new w(0,0,-100))).clone().sub(o).normalize(),h=new mn;h.position.copy(o);const u=new w(0,0,1);if(h.quaternion.setFromUnitVectors(u,c),a===t.length-1){const f=new me({color:16766720,emissive:16753920,emissiveIntensity:3.5,metalness:.2,roughness:.2}),g=new Dt(s,f);h.add(g);const x=new me({color:16777215,emissive:16772829,emissiveIntensity:2.8,wireframe:!0}),m=new Dt(r,x);h.add(m);const p=12,b=new ns(3.5,1.2);for(let _=0;_<p;_++){const I=_/p*Math.PI*2,P=_%2===0,R=new me({color:P?330260:16777215,emissive:P?0:16777215,emissiveIntensity:P?0:2.5,side:Qe,transparent:!0,opacity:.85}),D=new Dt(b,R);D.position.set(Math.cos(I)*15.5,Math.sin(I)*15.5,0),D.rotation.z=I+Math.PI/2,h.add(D),this.finishBanners.push(D)}const M=new js(16766720,5,60);h.add(M),this.scene.add(h),this.rings.push({index:a,position:o,mesh:h,torusMesh:g,glyphMesh:m,light:M,isCompleted:!1,flashTimer:0,isFinishArch:!0})}else{const f=new me({color:58879,emissive:53503,emissiveIntensity:a===0?3.5:1.2,metalness:.1,roughness:.2,transparent:!0,opacity:a===0?.95:.65}),g=new Dt(e,f);h.add(g);const x=new me({color:3718648,emissive:61695,emissiveIntensity:a===0?2.8:.8,wireframe:!0}),m=new Dt(n,x);h.add(m);const p=new js(61695,a===0?3:.5,35);h.add(p),this.scene.add(h),this.rings.push({index:a,position:o,mesh:h,torusMesh:g,glyphMesh:m,light:p,isCompleted:!1,flashTimer:0,isFinishArch:!1})}}}checkPassage(t,e,n,s){if(this.isCourseFinished||this.currentRingIndex>=this.rings.length)return!1;const r=this.rings[this.currentRingIndex],a=r.isFinishArch?this.FINISH_RADIUS:this.RING_RADIUS;if(this.testLine.set(t,e),this.testLine.closestPointToPoint(r.position,!0,this.closestPoint),this.closestPoint.distanceTo(r.position)<=a){r.isCompleted=!0,r.flashTimer=.5;const l=r.isFinishArch??!1;this.playCheckpointChime(l);const c=this.currentRingIndex;return n(c),this.currentRingIndex++,(this.currentRingIndex>=this.rings.length||l)&&(this.isCourseFinished=!0,s?s(c):this.onFinish&&this.onFinish(c)),!0}return!1}getActiveGatePosition(){return this.currentRingIndex<this.rings.length?this.rings[this.currentRingIndex].position:null}calculateStandings(t,e){let n=1;for(const s of e)s>t&&n++;return n}update(t,e){for(let n=0;n<this.finishBanners.length;n++){const r=this.finishBanners[n].material,a=1.5+Math.sin(e*8+n)*.8;r.emissiveIntensity>0&&(r.emissiveIntensity=a)}for(let n=0;n<this.rings.length;n++){const s=this.rings[n],r=s.torusMesh.material,a=s.glyphMesh.material;if(s.flashTimer>0){s.flashTimer=Math.max(0,s.flashTimer-t),r.emissive.setHex(65382),r.emissiveIntensity=4.5,s.light.color.setHex(65382),s.light.intensity=4;continue}if(s.isCompleted)r.color.setHex(1060896),r.emissive.setHex(65416),r.emissiveIntensity=.4,r.opacity=.35,a.opacity=.2,s.light.intensity=.2;else if(n===this.currentRingIndex){const o=2.8+Math.sin(e*6)*1.2;s.isFinishArch?(r.emissive.setHex(16755200),r.emissiveIntensity=o*1.2,s.light.color.setHex(16766720),s.light.intensity=o*1.5):(r.color.setHex(58879),r.emissive.setHex(58879),r.emissiveIntensity=o,r.opacity=1,a.emissive.setHex(3718648),a.emissiveIntensity=o*.9,a.opacity=.9,s.light.color.setHex(58879),s.light.intensity=o*.8),s.glyphMesh.rotation.z+=(s.isFinishArch?1:1.8)*t}else s.isFinishArch||(r.color.setHex(58879),r.emissive.setHex(43212),r.emissiveIntensity=.8,r.opacity=.4,a.opacity=.3,s.glyphMesh.rotation.z+=.4*t,s.light.intensity=.4)}}}class Ag{constructor(t,e,n){A(this,"scene");A(this,"asteroids",[]);A(this,"lootItems",[]);A(this,"hitCooldown",0);A(this,"audioCtx",null);A(this,"explosionFX");A(this,"defaultAsteroidMaterial");this.scene=t,this.explosionFX=n,this.initAudio(),this.defaultAsteroidMaterial=new me({color:4735544,roughness:.88,metalness:.12,flatShading:!0}),this.generateAsteroids(e)}initAudio(){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}playImpactSound(){if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const t=this.audioCtx.currentTime,e=this.audioCtx.createOscillator(),n=this.audioCtx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(130,t),e.frequency.exponentialRampToValueAtTime(35,t+.35),n.gain.setValueAtTime(.6,t),n.gain.exponentialRampToValueAtTime(.001,t+.45),e.connect(n),n.connect(this.audioCtx.destination),e.start(t),e.stop(t+.5)}playShatterSound(){if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const t=this.audioCtx.currentTime,e=this.audioCtx.createOscillator(),n=this.audioCtx.createGain();e.type="triangle",e.frequency.setValueAtTime(95,t),e.frequency.exponentialRampToValueAtTime(25,t+.55),n.gain.setValueAtTime(.7,t),n.gain.exponentialRampToValueAtTime(.001,t+.65),e.connect(n),n.connect(this.audioCtx.destination),e.start(t),e.stop(t+.7)}playLootPickupSound(t){if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.currentTime,n=this.audioCtx.createOscillator(),s=this.audioCtx.createGain();n.type="sine";const r=t?523.25:659.25,a=t?1046.5:1318.5;n.frequency.setValueAtTime(r,e),n.frequency.exponentialRampToValueAtTime(a,e+.2),s.gain.setValueAtTime(.35,e),s.gain.exponentialRampToValueAtTime(.001,e+.35),n.connect(s),s.connect(this.audioCtx.destination),n.start(e),n.stop(e+.38)}generateAsteroids(t){for(let n=0;n<40;n++){const s=t[Math.floor(Math.random()*(t.length-1))],r=22+Math.random()*65,a=Math.random()*Math.PI*2,o=(Math.random()-.5)*120,l=new w(s.x+Math.cos(a)*r,s.y+Math.sin(a)*r,s.z+o),c=3+Math.random()*18,h=new Xa(c,1),u=h.attributes.position;for(let g=0;g<u.count;g++){const x=u.getX(g),m=u.getY(g),p=u.getZ(g),b=.8+Math.random()*.4;u.setXYZ(g,x*b,m*b,p*b)}h.computeVertexNormals();const d=this.defaultAsteroidMaterial.clone(),f=new Dt(h,d);f.position.copy(l),f.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),this.scene.add(f),this.asteroids.push({mesh:f,position:l,radius:c,rotationSpeed:new w((Math.random()-.5)*.6,(Math.random()-.5)*.6,(Math.random()-.5)*.6),hp:3,flashTimer:0})}}hitAsteroid(t,e=1){if(t>=this.asteroids.length)return!1;const n=this.asteroids[t];n.hp-=e,n.flashTimer=.12;const s=n.mesh.material;return s.emissive.setHex(16777215),s.emissiveIntensity=2.5,n.hp<=0?(this.shatterAsteroid(t),!0):!1}shatterAsteroid(t){const e=this.asteroids[t];this.explosionFX&&this.explosionFX.trigger(e.position,16742144),this.playShatterSound();const n=Math.random()<.5?"HEART":"BOOST";this.spawnLootDrop(e.position,n),this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.asteroids.splice(t,1)}spawnLootDrop(t,e){const n=new mn;n.position.copy(t);const r=e==="HEART"?65416:61695,a=new qa(1,16,16),o=new me({color:r,emissive:r,emissiveIntensity:3.5,roughness:.1}),l=new Dt(a,o);n.add(l);const c=new qn(1.6,.12,8,24),h=new me({color:16777215,emissive:r,emissiveIntensity:2,wireframe:!0}),u=new Dt(c,h);n.add(u);const d=new js(r,2.5,15);n.add(d),this.scene.add(n),this.lootItems.push({type:e,mesh:n,position:t.clone(),velocity:new w,lifetime:0})}checkCollisions(t,e){if(this.hitCooldown>0)return!1;const n=3.2;for(let s=0;s<this.asteroids.length;s++){const r=this.asteroids[s];if(t.distanceTo(r.position)<r.radius+n)return this.hitCooldown=1.5,this.playImpactSound(),e(),!0}return!1}updateLootAndCollisions(t,e,n){for(let a=this.lootItems.length-1;a>=0;a--){const o=this.lootItems[a];if(o.lifetime+=e,o.lifetime>35){this.scene.remove(o.mesh),this.lootItems.splice(a,1);continue}o.mesh.rotation.y+=2.5*e,o.mesh.rotation.x+=1.8*e;const l=t.distanceTo(o.position);if(l<25){const c=t.clone().sub(o.position).normalize(),h=180*(1-l/25)+60;o.velocity.addScaledVector(c,h*e),o.position.addScaledVector(o.velocity,e),o.mesh.position.copy(o.position)}l<4.5&&(this.playLootPickupSound(o.type==="HEART"),n(o.type),this.scene.remove(o.mesh),this.lootItems.splice(a,1))}}update(t){this.hitCooldown>0&&(this.hitCooldown=Math.max(0,this.hitCooldown-t));for(let e=0;e<this.asteroids.length;e++){const n=this.asteroids[e];if(n.mesh.rotation.x+=n.rotationSpeed.x*t,n.mesh.rotation.y+=n.rotationSpeed.y*t,n.mesh.rotation.z+=n.rotationSpeed.z*t,n.flashTimer>0&&(n.flashTimer=Math.max(0,n.flashTimer-t),n.flashTimer===0)){const s=n.mesh.material;s.emissive.setHex(0),s.emissiveIntensity=0}}}}class Cg{constructor(t,e={}){A(this,"MAX_HEARTS",10);A(this,"currentHearts",10);A(this,"isInvulnerable",!1);A(this,"invulnerabilityTimer",0);A(this,"DEFAULT_INVULNERABILITY_DURATION",1);A(this,"jetMesh");A(this,"events");this.jetMesh=t,this.events=e}takeDamage(t){var s,r,a,o;if(this.isInvulnerable||this.currentHearts<=0)return!1;const e=this.currentHearts;this.currentHearts=Math.max(0,this.currentHearts-t);const n=e-this.currentHearts;return this.grantInvulnerability(this.DEFAULT_INVULNERABILITY_DURATION),(r=(s=this.events).onDamage)==null||r.call(s,this.currentHearts,n),this.currentHearts<=0&&((o=(a=this.events).onDefeat)==null||o.call(a)),!0}grantInvulnerability(t){this.isInvulnerable=!0,this.invulnerabilityTimer=t}heal(t){var e,n;this.currentHearts<=0||(this.currentHearts=Math.min(this.MAX_HEARTS,this.currentHearts+t),(n=(e=this.events).onHeal)==null||n.call(e,this.currentHearts))}respawn(){this.currentHearts=this.MAX_HEARTS,this.grantInvulnerability(1.5),this.jetMesh.visible=!0}update(t){if(this.isInvulnerable){this.invulnerabilityTimer-=t;const e=Math.floor(this.invulnerabilityTimer*20)%2===0;this.jetMesh.visible=e,this.invulnerabilityTimer<=0&&(this.isInvulnerable=!1,this.invulnerabilityTimer=0,this.jetMesh.visible=!0)}else this.jetMesh.visible=!0}}class Rg{constructor(t){A(this,"scene");A(this,"activeExplosions",[]);this.scene=t}trigger(t,e=16718453){const s=new Se,r=new Float32Array(540),a=new Float32Array(540),o=new Float32Array(540),l=new Ft(e),c=new Ft(16742144),h=new Ft(16777215);for(let f=0;f<180;f++){const g=f*3;r[g]=t.x,r[g+1]=t.y,r[g+2]=t.z;const x=Math.random()*Math.PI*2,m=Math.acos(Math.random()*2-1),p=15+Math.random()*55;o[g]=Math.sin(m)*Math.cos(x)*p,o[g+1]=Math.sin(m)*Math.sin(x)*p,o[g+2]=Math.cos(m)*p;const b=Math.random(),M=b<.5?l:b<.8?c:h;a[g]=M.r,a[g+1]=M.g,a[g+2]=M.b}s.setAttribute("position",new we(r,3)),s.setAttribute("color",new we(a,3));const u=new ka({size:2.2,vertexColors:!0,transparent:!0,opacity:1,blending:Vs,depthWrite:!1}),d=new tc(s,u);this.scene.add(d),this.activeExplosions.push({points:d,velocities:o,lifetime:0,maxLifetime:1.2})}update(t){for(let e=this.activeExplosions.length-1;e>=0;e--){const n=this.activeExplosions[e];n.lifetime+=t;const s=n.lifetime/n.maxLifetime;if(s>=1){this.scene.remove(n.points),n.points.geometry.dispose(),n.points.material.dispose(),this.activeExplosions.splice(e,1);continue}const r=n.points.geometry.attributes.position.array,a=n.velocities,o=r.length/3;for(let l=0;l<o;l++){const c=l*3;r[c]+=a[c]*t,r[c+1]+=a[c+1]*t,r[c+2]+=a[c+2]*t,a[c]*=.96,a[c+1]*=.96,a[c+2]*=.96}n.points.geometry.attributes.position.needsUpdate=!0,n.points.material.opacity=1-s,n.points.material.size=2.2*(1+s*.8)}}}class Pg{constructor(t,e,n,s=0){A(this,"mesh");A(this,"name");A(this,"currentHearts",10);A(this,"MAX_HEARTS",10);A(this,"waypoints");A(this,"currentWaypointIndex",0);A(this,"currentSpeed");A(this,"targetSpeed");A(this,"healthBarGroup");A(this,"healthSegments",[]);A(this,"NUM_SEGMENTS",10);A(this,"isSpinningOut",!1);A(this,"spinTimer",0);A(this,"fireCooldown",0);A(this,"hitFlashTimer",0);A(this,"targetDir",new w);A(this,"desiredQuat",new en);A(this,"forwardDir",new w(0,0,-1));A(this,"config");if(this.config=n,this.name=n.name,this.waypoints=e,this.currentWaypointIndex=Math.min(s,e.length-1),this.currentSpeed=n.baseSpeed,this.targetSpeed=n.baseSpeed,this.mesh=new mn,this.mesh.name=`AIRival_${n.name}`,this.buildRivalModel(n),this.healthBarGroup=this.buildHealthBar(),this.mesh.add(this.healthBarGroup),e.length>0){const r=e[this.currentWaypointIndex].clone(),a=Math.random()*Math.PI*2;r.x+=Math.cos(a)*8,r.y+=Math.sin(a)*4,this.mesh.position.copy(r)}t.add(this.mesh)}buildRivalModel(t){const e=new me({color:t.hullColor,metalness:.25,roughness:.4,flatShading:!0}),n=new me({color:t.accentColor,metalness:.3,roughness:.3,flatShading:!0}),s=new me({color:t.glowColor,emissive:t.glowColor,emissiveIntensity:2.2,roughness:.2}),r=new ke(.18,.75,4.2,7);r.rotateX(-Math.PI/2);const a=new Dt(r,e);a.scale.set(1.1,.65,1),this.mesh.add(a);const o=new Js(.2,1.2,7);o.rotateX(-Math.PI/2);const l=new Dt(o,n);l.position.set(0,0,-2.7),this.mesh.add(l);const c=new ve(5.4,.08,1.5),h=new Dt(c,e);h.position.set(0,-.05,.2),this.mesh.add(h),[-2.7,2.7].forEach(u=>{const d=new ve(.12,.35,.8),f=new Dt(d,s);f.position.set(u,.05,.3),this.mesh.add(f)}),[-.55,.55].forEach(u=>{const d=new ke(.28,.32,1.5,10);d.rotateX(-Math.PI/2);const f=new Dt(d,e);f.position.set(u,0,1.2),this.mesh.add(f);const g=new ke(.2,.1,.25,10);g.rotateX(-Math.PI/2);const x=new Dt(g,s);x.position.set(u,0,2.05),this.mesh.add(x)})}buildHealthBar(){const t=new mn;t.position.set(0,2.2,0);const e=.26,n=.09,s=.04,r=.06,a=this.NUM_SEGMENTS*e+(this.NUM_SEGMENTS-1)*r,o=-a/2+e/2,l=new ve(e,n,s),c=new ve(a+.15,n+.06,s*.8),h=new Xs({color:330260,transparent:!0,opacity:.85}),u=new Dt(c,h);u.position.z=-.01,t.add(u);for(let d=0;d<this.NUM_SEGMENTS;d++){const f=new Xs({color:65416}),g=new Dt(l,f);g.position.set(o+d*(e+r),0,0),this.healthSegments.push(g),t.add(g)}return t}takeDamage(t){this.isSpinningOut||(this.currentHearts=Math.max(0,this.currentHearts-t),this.updateHealthBarVisuals(),this.flashDamage(),this.currentHearts<=0&&this.triggerSpinOut())}flashDamage(){this.hitFlashTimer=.15;for(const t of this.healthSegments)t.material.color.setHex(16777215)}checkRetaliation(t,e,n){if(this.isSpinningOut)return;if(this.fireCooldown>0&&(this.fireCooldown=Math.max(0,this.fireCooldown-n)),this.mesh.position.distanceTo(t)<120&&this.fireCooldown<=0){const r=t.clone().sub(this.mesh.position).normalize(),a=new w(0,0,-1).applyQuaternion(this.mesh.quaternion).normalize();if(a.dot(r)>=.94){this.fireCooldown=1.25;const l=this.mesh.position.clone().add(new w(0,0,-2.4).applyQuaternion(this.mesh.quaternion));e(l,a,this.mesh.quaternion)}}}getCurrentWaypointIndex(){return this.currentWaypointIndex}getDistanceToNextWaypoint(){if(this.waypoints.length===0)return 0;const t=this.waypoints[this.currentWaypointIndex];return this.mesh.position.distanceTo(t)}updateHealthBarVisuals(){const t=this.currentHearts;for(let e=0;e<this.NUM_SEGMENTS;e++){const n=this.healthSegments[e],s=n.material;e<t?(n.visible=!0,t<=3?s.color.setHex(16718453):t<=6?s.color.setHex(16755200):s.color.setHex(65416)):n.visible=!1}}resetToPosition(t,e,n=0){this.mesh.position.copy(t),e?this.mesh.quaternion.copy(e):this.mesh.quaternion.identity(),this.currentWaypointIndex=n,this.currentHearts=this.MAX_HEARTS,this.isSpinningOut=!1,this.spinTimer=0,this.currentSpeed=this.targetSpeed,this.updateHealthBarVisuals()}triggerSpinOut(){this.isSpinningOut=!0,this.spinTimer=2.2,this.currentSpeed=10}update(t,e){if(this.healthBarGroup.quaternion.copy(e.quaternion),this.hitFlashTimer>0&&(this.hitFlashTimer=Math.max(0,this.hitFlashTimer-t),this.hitFlashTimer===0&&this.updateHealthBarVisuals()),this.isSpinningOut){if(this.spinTimer-=t,this.mesh.rotation.y+=14*t,this.mesh.rotation.z+=8*t,this.spinTimer<=0){this.isSpinningOut=!1,this.currentHearts=this.MAX_HEARTS,this.updateHealthBarVisuals(),this.currentSpeed=this.targetSpeed,this.currentWaypointIndex=Math.max(0,this.currentWaypointIndex-1);const r=this.waypoints[this.currentWaypointIndex];r&&this.mesh.position.copy(r)}return}if(this.waypoints.length===0)return;const n=this.waypoints[this.currentWaypointIndex];this.targetDir.copy(n).sub(this.mesh.position),this.targetDir.length()<20&&(this.currentWaypointIndex=(this.currentWaypointIndex+1)%this.waypoints.length),this.targetDir.normalize(),this.desiredQuat.setFromUnitVectors(this.forwardDir,this.targetDir),this.mesh.quaternion.slerp(this.desiredQuat,1-Math.exp(-3.5*t)),this.mesh.translateZ(-this.currentSpeed*t)}}class Lg{constructor(t){A(this,"scene");A(this,"bolts",[]);A(this,"FIRE_RATE",5);A(this,"SHOT_COOLDOWN",1/5);A(this,"shotTimer",0);A(this,"hardpointToggle",!1);A(this,"MAX_HEAT",15);A(this,"heat",0);A(this,"isOverheated",!1);A(this,"OVERHEAT_PENALTY_TIME",2);A(this,"overheatTimer",0);A(this,"audioCtx",null);A(this,"boltGeometry");A(this,"playerBoltMaterial");A(this,"enemyBoltMaterial");A(this,"sweptSegment",new hc);A(this,"closestPt",new w);this.scene=t,this.initAudio(),this.boltGeometry=new ke(.18,.18,2.6,8),this.boltGeometry.rotateX(-Math.PI/2),this.playerBoltMaterial=new me({color:16711765,emissive:16711765,emissiveIntensity:4.5,roughness:.1}),this.enemyBoltMaterial=new me({color:16737792,emissive:16724736,emissiveIntensity:4,roughness:.1})}initAudio(){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}resumeAudio(){this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}playLaserSound(t=!1){if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.currentTime,n=this.audioCtx.createOscillator(),s=this.audioCtx.createGain();n.type=t?"sawtooth":"sine";const r=t?900:1250,a=t?120:180;n.frequency.setValueAtTime(r,e),n.frequency.exponentialRampToValueAtTime(a,e+.14),s.gain.setValueAtTime(.3,e),s.gain.exponentialRampToValueAtTime(.001,e+.16),n.connect(s),s.connect(this.audioCtx.destination),n.start(e),n.stop(e+.18)}firePlayer(t,e){if(this.isOverheated||this.shotTimer>0)return!1;this.shotTimer=this.SHOT_COOLDOWN,this.heat+=1,this.heat>=this.MAX_HEAT&&(this.isOverheated=!0,this.overheatTimer=this.OVERHEAT_PENALTY_TIME);const n=this.hardpointToggle?1.8:-1.8;this.hardpointToggle=!this.hardpointToggle;const s=new w(n,-.05,-1).applyQuaternion(e),r=t.clone().add(s),l=new w(0,0,-1).applyQuaternion(e).normalize().multiplyScalar(340);return this.spawnBolt(r,l,e,!1),this.playLaserSound(!1),!0}fireEnemy(t,e,n){const r=e.clone().normalize().multiplyScalar(250);this.spawnBolt(t,r,n,!0),this.playLaserSound(!0)}spawnBolt(t,e,n,s){const r=s?this.enemyBoltMaterial:this.playerBoltMaterial,a=new Dt(this.boltGeometry,r);a.position.copy(t),a.quaternion.copy(n),this.scene.add(a),this.bolts.push({mesh:a,prevPos:t.clone(),position:t.clone(),velocity:e.clone(),isEnemy:s,lifetime:0,maxLifetime:2.2})}getHeatRatio(){return Math.min(1,this.heat/this.MAX_HEAT)}checkHitAgainstSphere(t,e,n){return this.sweptSegment.set(t.prevPos,t.position),this.sweptSegment.closestPointToPoint(e,!0,this.closestPt),this.closestPt.distanceTo(e)<=n}removeBolt(t){const e=this.bolts[t];this.scene.remove(e.mesh),this.bolts.splice(t,1)}update(t){this.isOverheated?(this.overheatTimer-=t,this.overheatTimer<=0&&(this.isOverheated=!1,this.heat=0)):this.heat=Math.max(0,this.heat-t*4.5),this.shotTimer>0&&(this.shotTimer=Math.max(0,this.shotTimer-t));for(let e=this.bolts.length-1;e>=0;e--){const n=this.bolts[e];if(n.lifetime+=t,n.lifetime>=n.maxLifetime){this.removeBolt(e);continue}n.prevPos.copy(n.position),n.position.addScaledVector(n.velocity,t),n.mesh.position.copy(n.position)}}}class Dg{constructor(t="TITLE_SCREEN"){A(this,"currentState","TITLE_SCREEN");A(this,"previousState","TITLE_SCREEN");A(this,"stateListeners",new Set);this.currentState=t,this.previousState=t}get current(){return this.currentState}get previous(){return this.previousState}setState(t){if(this.currentState!==t){this.previousState=this.currentState,this.currentState=t;for(const e of this.stateListeners)e(t,this.previousState)}}transitionTo(t){this.setState(t)}onStateChange(t){return this.stateListeners.add(t),()=>this.stateListeners.delete(t)}isPaused(){return this.currentState==="PAUSED"}isRacing(){return this.currentState==="RACING"}isInMenu(){return this.currentState==="TITLE_SCREEN"||this.currentState==="HANGAR"}}class Ig{constructor(t,e){A(this,"container");A(this,"titleOverlay");A(this,"pauseOverlay");A(this,"pauseBtn");A(this,"callsignInput");A(this,"gameState");A(this,"callbacks");this.gameState=t,this.callbacks=e,this.container=document.createElement("div"),this.container.id="menu-ui-root",this.container.style.position="fixed",this.container.style.top="0",this.container.style.left="0",this.container.style.width="100%",this.container.style.height="100%",this.container.style.pointerEvents="none",this.container.style.zIndex="3000",this.container.style.fontFamily='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',this.injectStyles(),this.titleOverlay=document.createElement("div"),this.titleOverlay.className="menu-screen-backdrop",this.titleOverlay.id="menu-title-screen";const n=localStorage.getItem("hyperion_pilot_callsign")||"VIPER-01";this.titleOverlay.innerHTML=`
      <div class="menu-modal-card">
        <div class="title-badge">INTERSTELLAR GP • COMBAT SIMULATOR</div>
        <h1 class="game-logo">HYPERION<span class="logo-accent"> VOID RACER</span></h1>
        <p class="subtitle-text">HIGH-VELOCITY 3D SPACE FLIGHT • NEON ASTEROID BELT CIRCUIT</p>

        <div class="input-group">
          <label for="callsign-input" class="input-label">PILOT CALLSIGN</label>
          <div class="input-wrapper">
            <span class="input-prefix">&#9658;</span>
            <input id="callsign-input" class="callsign-text-field" type="text" maxlength="12" value="${n}" spellcheck="false" autocomplete="off" />
          </div>
        </div>

        <div class="btn-group">
          <button id="btn-start-race" class="btn-primary">
            <span class="btn-glow"></span>
            <span class="btn-label">&#9658; START RACE</span>
          </button>
          <button id="btn-open-hangar" class="btn-secondary">
            <span class="btn-label">&#9881; CUSTOMIZE SHIP</span>
          </button>
        </div>

        <div class="briefing-card">
          <div class="briefing-header">FLIGHT CONTROLS</div>
          <div class="briefing-grid">
            <div class="briefing-item"><span class="key-pill">W / S</span> Pitch</div>
            <div class="briefing-item"><span class="key-pill">A / D</span> Yaw</div>
            <div class="briefing-item"><span class="key-pill">Q / E</span> Roll</div>
            <div class="briefing-item"><span class="key-pill">SPACE</span> Boost</div>
            <div class="briefing-item"><span class="key-pill">F / CLICK</span> Fire Plasma</div>
            <div class="briefing-item"><span class="key-pill">ESC / P</span> Pause</div>
          </div>
          <div class="mobile-hint">&#128241; Mobile: On-Screen Virtual Stick + Gyro Tilt + Multi-Touch Buttons</div>
        </div>
      </div>
    `,this.pauseBtn=document.createElement("button"),this.pauseBtn.id="hud-pause-btn",this.pauseBtn.className="pause-hud-trigger",this.pauseBtn.innerHTML="<span>&#10074;&#10074;</span><span>PAUSE</span>",this.pauseBtn.style.display="none",this.pauseOverlay=document.createElement("div"),this.pauseOverlay.className="menu-screen-backdrop",this.pauseOverlay.id="menu-pause-screen",this.pauseOverlay.style.display="none",this.pauseOverlay.innerHTML=`
      <div class="menu-modal-card pause-card">
        <div class="pause-badge">TACTICAL SYSTEM PAUSED</div>
        <h2 class="pause-heading">MISSION SUSPENDED</h2>
        <p class="subtitle-text">ORBITAL TIME &amp; TELEMETRY TEMPORARILY FROZEN</p>

        <div class="btn-group pause-btn-stack">
          <button id="btn-resume-race" class="btn-primary">
            <span class="btn-label">&#9658; RESUME FLIGHT</span>
          </button>
          <button id="btn-restart-race" class="btn-secondary">
            <span class="btn-label">&#8635; RESTART RACE</span>
          </button>
          <button id="btn-pause-hangar" class="btn-secondary">
            <span class="btn-label">&#9881; CUSTOMIZE JET</span>
          </button>
          <button id="btn-quit-title" class="btn-danger">
            <span class="btn-label">&#10006; QUIT TO MENU</span>
          </button>
        </div>
      </div>
    `,this.container.appendChild(this.titleOverlay),this.container.appendChild(this.pauseOverlay),this.container.appendChild(this.pauseBtn),document.body.appendChild(this.container),this.callsignInput=this.titleOverlay.querySelector("#callsign-input"),this.bindEvents(),this.syncState(this.gameState.current),this.gameState.onStateChange(s=>{this.syncState(s)})}injectStyles(){const t=document.createElement("style");t.textContent=`
      .menu-screen-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, rgba(8, 16, 36, 0.78) 0%, rgba(2, 4, 10, 0.94) 100%);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
        opacity: 1;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 3100;
      }

      .menu-modal-card {
        background: rgba(10, 18, 38, 0.85);
        border: 1px solid rgba(0, 240, 255, 0.35);
        border-radius: 18px;
        padding: 32px 40px;
        width: 90%;
        max-width: 540px;
        box-shadow: 0 0 60px rgba(0, 240, 255, 0.25), inset 0 0 20px rgba(0, 240, 255, 0.08);
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
      }

      .pause-card {
        border-color: rgba(255, 170, 0, 0.45);
        box-shadow: 0 0 60px rgba(255, 170, 0, 0.25), inset 0 0 20px rgba(255, 170, 0, 0.08);
        max-width: 440px;
      }

      .title-badge {
        display: inline-block;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 2.5px;
        color: #00f0ff;
        background: rgba(0, 240, 255, 0.12);
        border: 1px solid rgba(0, 240, 255, 0.4);
        padding: 4px 14px;
        border-radius: 20px;
        margin-bottom: 14px;
        text-transform: uppercase;
      }

      .pause-badge {
        display: inline-block;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 2.5px;
        color: #ffbb00;
        background: rgba(255, 187, 0, 0.12);
        border: 1px solid rgba(255, 187, 0, 0.4);
        padding: 4px 14px;
        border-radius: 20px;
        margin-bottom: 14px;
        text-transform: uppercase;
      }

      .game-logo {
        margin: 0 0 6px 0;
        font-size: 34px;
        font-weight: 900;
        letter-spacing: 3px;
        color: #ffffff;
        text-shadow: 0 0 20px rgba(0, 240, 255, 0.7);
        text-transform: uppercase;
      }

      .logo-accent {
        color: #00f0ff;
        text-shadow: 0 0 24px #00f0ff;
      }

      .pause-heading {
        margin: 0 0 6px 0;
        font-size: 28px;
        font-weight: 900;
        letter-spacing: 2.5px;
        color: #ffffff;
        text-shadow: 0 0 20px rgba(255, 170, 0, 0.6);
        text-transform: uppercase;
      }

      .subtitle-text {
        margin: 0 0 24px 0;
        font-size: 11.5px;
        letter-spacing: 1.5px;
        color: rgba(255, 255, 255, 0.65);
        font-weight: 500;
      }

      .input-group {
        margin-bottom: 22px;
        text-align: left;
      }

      .input-label {
        display: block;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 2px;
        color: #00f0ff;
        margin-bottom: 8px;
        text-transform: uppercase;
      }

      .input-wrapper {
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(0, 240, 255, 0.3);
        border-radius: 10px;
        padding: 2px 14px;
        transition: border-color 0.2s, box-shadow 0.2s;
      }

      .input-wrapper:focus-within {
        border-color: #00f0ff;
        box-shadow: 0 0 16px rgba(0, 240, 255, 0.4);
      }

      .input-prefix {
        color: #00f0ff;
        font-size: 13px;
        margin-right: 10px;
      }

      .callsign-text-field {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        color: #ffffff;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 2px;
        font-family: monospace, sans-serif;
        text-transform: uppercase;
        padding: 10px 0;
      }

      .btn-group {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 24px;
      }

      .pause-btn-stack {
        margin-bottom: 0;
      }

      .btn-primary {
        position: relative;
        background: linear-gradient(135deg, #00f0ff 0%, #0088ff 100%);
        color: #030a16;
        border: none;
        border-radius: 10px;
        padding: 14px 20px;
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 2px;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform 0.15s, box-shadow 0.2s;
        box-shadow: 0 0 24px rgba(0, 240, 255, 0.5);
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 32px rgba(0, 240, 255, 0.8);
      }

      .btn-primary:active {
        transform: translateY(1px);
      }

      .btn-secondary {
        background: rgba(255, 255, 255, 0.05);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 10px;
        padding: 12px 20px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s, transform 0.15s;
      }

      .btn-secondary:hover {
        background: rgba(0, 240, 255, 0.12);
        border-color: #00f0ff;
        transform: translateY(-2px);
      }

      .btn-danger {
        background: rgba(255, 0, 60, 0.1);
        color: #ff3366;
        border: 1px solid rgba(255, 0, 60, 0.4);
        border-radius: 10px;
        padding: 12px 20px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s, transform 0.15s;
      }

      .btn-danger:hover {
        background: rgba(255, 0, 60, 0.25);
        border-color: #ff0055;
        transform: translateY(-2px);
      }

      .briefing-card {
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 16px;
        text-align: left;
      }

      .briefing-header {
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 2px;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 10px;
        text-transform: uppercase;
      }

      .briefing-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        font-size: 11px;
        color: rgba(255, 255, 255, 0.8);
      }

      .key-pill {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 4px;
        padding: 2px 6px;
        font-weight: 700;
        color: #00f0ff;
        font-family: monospace;
        margin-right: 4px;
      }

      .mobile-hint {
        margin-top: 10px;
        font-size: 10.5px;
        color: rgba(255, 255, 255, 0.5);
      }

      /* In-Game Floating Pause Button */
      .pause-hud-trigger {
        position: relative;
        background: rgba(6, 12, 28, 0.75);
        border: 1px solid rgba(0, 240, 255, 0.35);
        border-radius: 8px;
        padding: 6px 14px;
        color: #ffffff;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1.5px;
        display: flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
        cursor: pointer;
        pointer-events: auto;
        backdrop-filter: blur(8px);
        box-shadow: 0 0 14px rgba(0, 240, 255, 0.2);
        transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
      }

      .pause-hud-trigger:hover {
        background: rgba(0, 240, 255, 0.2);
        border-color: #00f0ff;
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
      }
    `,document.head.appendChild(t)}bindEvents(){this.callsignInput.addEventListener("input",()=>{const o=(this.callsignInput.value.trim()||"VIPER-01").toUpperCase();localStorage.setItem("hyperion_pilot_callsign",o)});const t=this.titleOverlay.querySelector("#btn-start-race");t==null||t.addEventListener("click",()=>{this.callbacks.onAudioUnlock();const o=(this.callsignInput.value.trim()||"VIPER-01").toUpperCase();this.callbacks.onStartRace(o)});const e=this.titleOverlay.querySelector("#btn-open-hangar");e==null||e.addEventListener("click",()=>{this.callbacks.onOpenHangar()}),this.pauseBtn.addEventListener("click",()=>{(this.gameState.current==="RACING"||this.gameState.current==="COUNTDOWN")&&this.gameState.setState("PAUSED")});const n=this.pauseOverlay.querySelector("#btn-resume-race");n==null||n.addEventListener("click",()=>{this.callbacks.onResume()});const s=this.pauseOverlay.querySelector("#btn-restart-race");s==null||s.addEventListener("click",()=>{this.callbacks.onRestartRace()});const r=this.pauseOverlay.querySelector("#btn-pause-hangar");r==null||r.addEventListener("click",()=>{this.gameState.setState("HANGAR")});const a=this.pauseOverlay.querySelector("#btn-quit-title");a==null||a.addEventListener("click",()=>{this.callbacks.onQuitToTitle()}),window.addEventListener("keydown",o=>{(o.key==="Escape"||o.key==="p"||o.key==="P")&&(this.gameState.current==="RACING"?this.gameState.setState("PAUSED"):this.gameState.current==="PAUSED"&&this.callbacks.onResume())})}syncState(t){t==="TITLE_SCREEN"?(this.titleOverlay.style.display="flex",this.pauseOverlay.style.display="none",this.pauseBtn.style.display="none"):t==="HANGAR"?(this.titleOverlay.style.display="none",this.pauseOverlay.style.display="none",this.pauseBtn.style.display="none"):t==="COUNTDOWN"?(this.titleOverlay.style.display="none",this.pauseOverlay.style.display="none",this.pauseBtn.style.display="flex"):t==="RACING"?(this.titleOverlay.style.display="none",this.pauseOverlay.style.display="none",this.pauseBtn.style.display="flex"):t==="PAUSED"?(this.titleOverlay.style.display="none",this.pauseOverlay.style.display="flex",this.pauseBtn.style.display="none"):t==="PODIUM"&&(this.titleOverlay.style.display="none",this.pauseOverlay.style.display="none",this.pauseBtn.style.display="none")}getPilotCallsign(){return(this.callsignInput.value.trim()||"VIPER-01").toUpperCase()}destroy(){this.container.parentElement&&this.container.parentElement.removeChild(this.container)}}class Ug{constructor(t,e){A(this,"container");A(this,"jet");A(this,"gameState");A(this,"HULL_PRESETS",[{label:"Ceramic White",color:"#eef2f7"},{label:"Obsidian Stealth",color:"#18202c"},{label:"Titanium Silver",color:"#94a3b8"},{label:"Solar Gold",color:"#f59e0b"}]);A(this,"ACCENT_PRESETS",[{label:"Hazard Orange",color:"#ff5500"},{label:"Electric Cyan",color:"#00f0ff"},{label:"Neon Crimson",color:"#ff0055"},{label:"Acid Lime",color:"#00ff66"}]);A(this,"GLOW_PRESETS",[{label:"Hyperion Cyan",color:"#00e1ff"},{label:"Plasma Orange",color:"#ff7700"},{label:"Void Purple",color:"#a855f7"},{label:"Matrix Green",color:"#00ff66"}]);this.jet=t,this.gameState=e,this.container=document.createElement("div"),this.container.id="hangar-ui",this.initDOM(),document.body.appendChild(this.container),this.gameState.onStateChange(n=>{this.container.style.display=n==="HANGAR"?"flex":"none",n==="HANGAR"&&this.updateActiveSwatches()})}initDOM(){Object.assign(this.container.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",display:"none",background:"transparent",backdropFilter:"none",webkitBackdropFilter:"none",pointerEvents:"none",zIndex:"3000",userSelect:"none",webkitUserSelect:"none",boxSizing:"border-box"});const t=document.createElement("div");Object.assign(t.style,{position:"absolute",top:"24px",left:"28px",pointerEvents:"auto",background:"rgba(6, 12, 24, 0.75)",border:"1px solid rgba(0, 240, 255, 0.35)",borderRadius:"12px",padding:"10px 18px",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.5)"}),t.innerHTML=`
      <div style="font-size: 10px; font-weight: 800; letter-spacing: 2.5px; color: #00f0ff; text-transform: uppercase;">FLIGHT DECK WORKSHOP</div>
      <div style="font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 1px; text-shadow: 0 0 14px rgba(0, 240, 255, 0.5);">JET HANGAR</div>
    `,this.container.appendChild(t);const e=document.createElement("div");Object.assign(e.style,{position:"absolute",top:"20px",bottom:"20px",right:"24px",width:"360px",maxWidth:"calc(100vw - 48px)",padding:"24px",background:"rgba(8, 14, 28, 0.85)",border:"1.5px solid rgba(0, 240, 255, 0.35)",borderRadius:"20px",boxShadow:"0 16px 48px rgba(0, 0, 0, 0.8), inset 0 0 16px rgba(0, 240, 255, 0.1)",backdropFilter:"blur(16px)",webkitBackdropFilter:"blur(16px)",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"16px",pointerEvents:"auto",overflowY:"auto",boxSizing:"border-box"});const n=document.createElement("div");Object.assign(n.style,{display:"flex",flexDirection:"column",gap:"18px"}),n.appendChild(this.createCategory("HULL TONE",this.HULL_PRESETS,r=>{this.jet.applyCustomization({hullColor:r}),this.updateActiveSwatches()},"hull")),n.appendChild(this.createCategory("RACING ACCENT STRIPE",this.ACCENT_PRESETS,r=>{this.jet.applyCustomization({accentColor:r}),this.updateActiveSwatches()},"accent")),n.appendChild(this.createCategory("THRUSTER PLASMA CORE",this.GLOW_PRESETS,r=>{this.jet.applyCustomization({glowColor:r}),this.updateActiveSwatches()},"glow")),e.appendChild(n);const s=document.createElement("button");s.id="btn-save-hangar",s.innerText="SAVE & RETURN",Object.assign(s.style,{width:"100%",padding:"14px 20px",background:"linear-gradient(90deg, #00f0ff, #0284c7)",border:"none",borderRadius:"12px",fontSize:"13px",fontWeight:"900",letterSpacing:"2px",color:"#050a14",cursor:"pointer",boxShadow:"0 0 20px rgba(0, 240, 255, 0.6)",transition:"transform 0.1s ease, box-shadow 0.2s ease",marginTop:"10px"}),s.addEventListener("click",()=>{const r=this.gameState.previous==="PAUSED"?"PAUSED":"TITLE_SCREEN";this.gameState.setState(r)}),e.appendChild(s),this.container.appendChild(e)}createCategory(t,e,n,s){const r=document.createElement("div"),a=document.createElement("div");a.innerText=t,Object.assign(a.style,{fontSize:"10px",fontWeight:"800",letterSpacing:"1.5px",color:"#94a3b8",marginBottom:"8px"}),r.appendChild(a);const o=document.createElement("div");Object.assign(o.style,{display:"flex",gap:"10px",flexWrap:"wrap"});for(const l of e){const c=document.createElement("div");c.title=l.label,c.dataset.category=s,c.dataset.color=l.color,Object.assign(c.style,{width:"38px",height:"38px",borderRadius:"50%",backgroundColor:l.color,border:"2px solid rgba(255, 255, 255, 0.25)",cursor:"pointer",boxShadow:`0 0 10px ${l.color}66`,transition:"all 0.15s ease"}),c.addEventListener("click",()=>n(l.color)),o.appendChild(c)}return r.appendChild(o),r}updateActiveSwatches(){const t=this.jet.currentCustomization;this.container.querySelectorAll("[data-category]").forEach(n=>{var l;const s=n,r=s.dataset.category,a=(l=s.dataset.color)==null?void 0:l.toLowerCase();let o=!1;r==="hull"&&(o=(typeof t.hullColor=="string"?t.hullColor.toLowerCase():"")===a),r==="accent"&&(o=(typeof t.accentColor=="string"?t.accentColor.toLowerCase():"")===a),r==="glow"&&(o=(typeof t.glowColor=="string"?t.glowColor.toLowerCase():"")===a),o?(s.style.transform="scale(1.18)",s.style.borderColor="#ffffff",s.style.boxShadow="0 0 18px #ffffff"):(s.style.transform="scale(1.0)",s.style.borderColor="rgba(255, 255, 255, 0.25)",s.style.boxShadow=`0 0 8px ${a}44`)})}show(){this.container.style.display="flex",this.updateActiveSwatches()}hide(){this.container.style.display="none"}}class Ng{constructor(){A(this,"playerStartPos",new w(0,0,30));A(this,"rivalStartPositions",[new w(-12,0,20),new w(12,0,20),new w(-6,0,10)]);A(this,"audioCtx",null);A(this,"overlayContainer");A(this,"countdownEl");A(this,"countdownTimer",null);A(this,"isCountingDown",!1);this.initAudioContext(),this.overlayContainer=document.createElement("div"),this.overlayContainer.id="countdown-overlay",this.overlayContainer.style.position="fixed",this.overlayContainer.style.top="0",this.overlayContainer.style.left="0",this.overlayContainer.style.width="100%",this.overlayContainer.style.height="100%",this.overlayContainer.style.pointerEvents="none",this.overlayContainer.style.zIndex="2500",this.overlayContainer.style.display="none",this.overlayContainer.style.alignItems="center",this.overlayContainer.style.justifyContent="center",this.countdownEl=document.createElement("div"),this.countdownEl.className="countdown-num",this.overlayContainer.appendChild(this.countdownEl),this.injectStyles(),document.body.appendChild(this.overlayContainer)}initAudioContext(){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}resumeAudio(){this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}playCountdownBeep(t=!1){if(!this.audioCtx)return;this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.currentTime;if(t){const n=this.audioCtx.createOscillator(),s=this.audioCtx.createOscillator(),r=this.audioCtx.createGain();n.type="sine",n.frequency.setValueAtTime(880,e),n.frequency.exponentialRampToValueAtTime(1760,e+.35),s.type="triangle",s.frequency.setValueAtTime(1100,e),s.frequency.exponentialRampToValueAtTime(1760,e+.35),r.gain.setValueAtTime(.4,e),r.gain.exponentialRampToValueAtTime(.001,e+.45),n.connect(r),s.connect(r),r.connect(this.audioCtx.destination),n.start(e),s.start(e),n.stop(e+.5),s.stop(e+.5)}else{const n=this.audioCtx.createOscillator(),s=this.audioCtx.createGain();n.type="sine",n.frequency.setValueAtTime(440,e),s.gain.setValueAtTime(.35,e),s.gain.exponentialRampToValueAtTime(.001,e+.15),n.connect(s),s.connect(this.audioCtx.destination),n.start(e),n.stop(e+.18)}}injectStyles(){const t=document.createElement("style");t.textContent=`
      @keyframes countdownPop {
        0% { transform: scale(1.8); opacity: 0; filter: blur(6px); }
        30% { transform: scale(1.0); opacity: 1; filter: blur(0px); }
        80% { transform: scale(0.95); opacity: 1; filter: blur(0px); }
        100% { transform: scale(0.8); opacity: 0; filter: blur(4px); }
      }

      .countdown-num {
        font-family: 'Impact', system-ui, sans-serif;
        font-size: 140px;
        font-weight: 900;
        letter-spacing: 6px;
        text-align: center;
        text-transform: uppercase;
        animation: countdownPop 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      }
    `,document.head.appendChild(t)}resetStartingGrid(t,e,n){t.mesh.position.copy(this.playerStartPos),t.mesh.quaternion.identity(),e.resetPhysics(0);const s=new en;for(let r=0;r<n.length;r++){const a=this.rivalStartPositions[r]||new w(0,0,20);n[r].resetToPosition(a,s,0)}}startCountdown(t){this.cancelCountdown(),this.isCountingDown=!0,this.overlayContainer.style.display="flex";let e=3;const n=()=>{this.isCountingDown&&(e>0?(this.countdownEl.style.animation="none",this.countdownEl.offsetWidth,this.countdownEl.style.animation="countdownPop 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",this.countdownEl.textContent=e.toString(),this.countdownEl.style.color="#ffbb00",this.countdownEl.style.textShadow="0 0 35px #ffaa00, 0 0 70px rgba(255, 170, 0, 0.6)",this.playCountdownBeep(!1),e--,this.countdownTimer=window.setTimeout(n,1e3)):e===0&&(this.countdownEl.style.animation="none",this.countdownEl.offsetWidth,this.countdownEl.style.animation="countdownPop 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",this.countdownEl.textContent="ENGAGE!",this.countdownEl.style.color="#00f0ff",this.countdownEl.style.textShadow="0 0 40px #00f0ff, 0 0 80px rgba(0, 240, 255, 0.8)",this.playCountdownBeep(!0),t(),this.countdownTimer=window.setTimeout(()=>{this.overlayContainer.style.display="none",this.isCountingDown=!1},1200)))};n()}cancelCountdown(){this.isCountingDown=!1,this.countdownTimer!==null&&(clearTimeout(this.countdownTimer),this.countdownTimer=null),this.overlayContainer.style.display="none"}destroy(){this.cancelCountdown(),this.overlayContainer.parentElement&&this.overlayContainer.parentElement.removeChild(this.overlayContainer)}}const re=new vg,zt=new yg;re.scene.add(zt.mesh);const He=new Dg("TITLE_SCREEN"),ja=new Mg,fe=new Sg(zt),Mi=new Eg(re.camera,zt),jt=new bg(ja);jt.setInputMode(ja.activeMode);const Us=new Tg(re.scene,re.camera),de=new wg(re.scene),uc=de.rings.map(i=>i.position),Yi=new Rg(re.scene),pi=new Ag(re.scene,uc,Yi),Pe=new Lg(re.scene),An={shotsFired:0,asteroidsDestroyed:0},Fg=[{name:"Phantom-01",hullColor:3018853,accentColor:9647082,glowColor:12616956,baseSpeed:47},{name:"Solar-02",hullColor:7877903,accentColor:16096779,glowColor:16498468,baseSpeed:49},{name:"Viper-03",hullColor:413243,accentColor:1096065,glowColor:3462041,baseSpeed:46.5}],Ye=Fg.map((i,t)=>new Pg(re.scene,uc,i,t));jt.initRivalMarkers(Ye);const $n=new Ng,Aa=new Ug(zt,He),dc=()=>{jt.resumeAudio(),Pe.resumeAudio(),de.resumeAudio(),$n.resumeAudio()},Ca=i=>{jt.setPilotCallsign(i),dc(),$n.resetStartingGrid(zt,fe,Ye),Mi.snapToTarget(),de.resetCourse(),jt.resetRace(),jt.updateGate(0,de.rings.length),An.shotsFired=0,An.asteroidsDestroyed=0,He.setState("COUNTDOWN"),$n.startCountdown(()=>{He.setState("RACING"),fe.resetPhysics(fe.baseCruisingSpeed)})},tr=new Ig(He,{onStartRace:i=>{Ca(i)},onOpenHangar:()=>{He.setState("HANGAR"),Aa.show()},onResume:()=>{He.setState("RACING")},onRestartRace:()=>{const i=tr.getPilotCallsign();Ca(i)},onQuitToTitle:()=>{$n.cancelCountdown(),$n.resetStartingGrid(zt,fe,Ye),de.resetCourse(),jt.resetRace(),He.setState("TITLE_SCREEN")},onAudioUnlock:()=>{dc()}});jt.setPilotCallsign(tr.getPilotCallsign());re.fpsOverlay&&jt.attachFpsOverlay(re.fpsOverlay);jt.attachPauseButton(tr.pauseBtn);de.onFinish=()=>{He.transitionTo("PODIUM"),jt.showPodium({rank:Hs,totalTime:jt.getFormattedTime(),shotsFired:An.shotsFired,asteroidsDestroyed:An.asteroidsDestroyed})};jt.onPodiumRestart=()=>{Ca(tr.getPilotCallsign())};He.onStateChange(i=>{i==="COUNTDOWN"&&Mi.snapToTarget(),i==="HANGAR"?Aa.show():Aa.hide()});$n.resetStartingGrid(zt,fe,Ye);const Gn=new Cg(zt.mesh,{onDamage:i=>{jt.updateHearts(i)},onDefeat:()=>{if(Yi.trigger(zt.mesh.position,16718453),jt.addPenaltyTime(3),de.currentRingIndex>0){const i=de.rings[de.currentRingIndex-1];zt.mesh.position.copy(i.position),zt.mesh.quaternion.copy(i.mesh.quaternion)}else zt.mesh.position.copy($n.playerStartPos),zt.mesh.quaternion.identity();fe.resetPhysics(fe.baseCruisingSpeed),Mi.snapToTarget(),Gn.respawn(),jt.updateHearts(10),re.addTrauma(.6)}});jt.updateHearts(Gn.currentHearts);jt.updateGate(de.currentRingIndex,de.rings.length);const vl=new w;let Hs=1,Fr=0;re.onUpdate((i,t)=>{const e=He.current;if(He.isInMenu()){Fr+=i*.4;const l=9,c=2.5,h=zt.mesh.position;re.camera.position.set(h.x+Math.sin(Fr)*l,h.y+c,h.z+Math.cos(Fr)*l),re.camera.up.set(0,1,0),re.camera.lookAt(h.x,h.y+.3,h.z),zt.update(i,t,!1),Us.update(zt.mesh.position,zt.mesh.quaternion,!1,i),de.update(i,t),Yi.update(i),jt.setVisible(!1);return}if(e==="PAUSED")return;if(jt.setVisible(!0),e==="COUNTDOWN"){Mi.update(i,!1),zt.update(i,t,!1),Us.update(zt.mesh.position,zt.mesh.quaternion,!1,i),de.update(i,t);const l=de.getActiveGatePosition();jt.updateNavigationChevron(l,zt.mesh.position,re.camera),jt.update(0,100,!1,i,!1),jt.updateRivalMarkers(Ye,zt.mesh.position,re.camera,!1);return}if(e==="PODIUM"){Mi.update(i,!1),zt.update(i,t,!1),Us.update(zt.mesh.position,zt.mesh.quaternion,!1,i),de.update(i,t),Yi.update(i);return}const n=ja.update();vl.copy(zt.mesh.position),fe.update(n,i),n.fire&&Pe.firePlayer(zt.mesh.position,zt.mesh.quaternion)&&An.shotsFired++,Pe.update(i),jt.updateWeaponHeat(Pe.getHeatRatio(),Pe.isOverheated);for(let l=Pe.bolts.length-1;l>=0;l--){const c=Pe.bolts[l];if(c.isEnemy)Pe.checkHitAgainstSphere(c,zt.mesh.position,3.2)&&(Pe.removeBolt(l),Gn.takeDamage(1),jt.triggerDamageFlash(),re.addTrauma(.5));else{let h=!1;for(let u=pi.asteroids.length-1;u>=0;u--){const d=pi.asteroids[u];if(Pe.checkHitAgainstSphere(c,d.position,d.radius)){Pe.removeBolt(l),h=!0,pi.hitAsteroid(u,1)&&An.asteroidsDestroyed++;break}}if(h)continue;for(let u=0;u<Ye.length;u++){const d=Ye[u];if(Pe.checkHitAgainstSphere(c,d.mesh.position,3.2)){Pe.removeBolt(l),d.takeDamage(1);break}}}}Gn.update(i),de.checkPassage(vl,zt.mesh.position,l=>{fe.boostEnergy=Math.min(100,fe.boostEnergy+25),jt.updateGate(de.currentRingIndex,de.rings.length)},l=>{He.transitionTo("PODIUM"),jt.showPodium({rank:Hs,totalTime:jt.getFormattedTime(),shotsFired:An.shotsFired,asteroidsDestroyed:An.asteroidsDestroyed})}),pi.checkCollisions(zt.mesh.position,()=>{Gn.takeDamage(2)&&(re.addTrauma(.85),fe.currentSpeed*=.4,fe.boostEnergy=Math.max(0,fe.boostEnergy-50),jt.triggerDamageFlash())}),pi.update(i),pi.updateLootAndCollisions(zt.mesh.position,i,l=>{l==="HEART"?(Gn.heal(1),jt.updateHearts(Gn.currentHearts)):fe.boostEnergy=Math.min(100,fe.boostEnergy+35)});for(let l=0;l<Ye.length;l++){const c=Ye[l];c.update(i,re.camera),c.checkRetaliation(zt.mesh.position,(h,u,d)=>{Pe.fireEnemy(h,u,d)},i)}const s=de.getActiveGatePosition(),r=s?zt.mesh.position.distanceTo(s):0,a=de.currentRingIndex*1e4-r,o=Ye.map(l=>l.getCurrentWaypointIndex()*1e4-l.getDistanceToNextWaypoint());Hs=de.calculateStandings(a,o),jt.setStandings(Hs),zt.update(i,t,fe.isBoosting),Mi.update(i,fe.isBoosting),Us.update(zt.mesh.position,zt.mesh.quaternion,fe.isBoosting,i),de.update(i,t),Yi.update(i),re.rimLight.position.set(0,4,-15).applyQuaternion(zt.mesh.quaternion).add(zt.mesh.position),re.rimLight.target.position.copy(zt.mesh.position),jt.updateRivalMarkers(Ye,zt.mesh.position,re.camera,e==="RACING"),jt.updateNavigationChevron(s,zt.mesh.position,re.camera),jt.update(fe.displaySpeedKmH,fe.boostEnergy,fe.isBoosting,i,e==="RACING")});re.start();
