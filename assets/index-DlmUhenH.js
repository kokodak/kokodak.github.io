(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const u of h)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(h){const u={};return h.integrity&&(u.integrity=h.integrity),h.referrerPolicy&&(u.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?u.credentials="include":h.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(h){if(h.ep)return;h.ep=!0;const u=i(h);fetch(h.href,u)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mu="175",us={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_v=0,uf=1,yv=2,mp=1,Sv=2,Pi=3,Ui=0,Mn=1,Di=2,er=0,ds=1,df=2,ff=3,pf=4,xv=5,Mr=100,Tv=101,Ev=102,Mv=103,wv=104,Av=200,bv=201,Rv=202,Cv=203,bh=204,Rh=205,Iv=206,Pv=207,Dv=208,Nv=209,Lv=210,Ov=211,Uv=212,Fv=213,Bv=214,Ch=0,Ih=1,Ph=2,ps=3,Dh=4,Nh=5,Lh=6,Oh=7,gp=0,kv=1,zv=2,tr=0,Vv=1,Hv=2,Gv=3,Wv=4,qv=5,Jv=6,Xv=7,vp=300,ms=301,gs=302,Uh=303,Fh=304,cl=306,Bh=1e3,Ar=1001,kh=1002,ii=1003,$v=1004,Cc=1005,fi=1006,jl=1007,br=1008,Fi=1009,_p=1010,yp=1011,ra=1012,gu=1013,Cr=1014,Ni=1015,ca=1016,vu=1017,_u=1018,sa=1020,Sp=35902,xp=1021,Tp=1022,ni=1023,Ep=1024,Mp=1025,oa=1026,aa=1027,wp=1028,yu=1029,Ap=1030,Su=1031,xu=1033,Kc=33776,Zc=33777,Qc=33778,el=33779,zh=35840,Vh=35841,Hh=35842,Gh=35843,Wh=36196,qh=37492,Jh=37496,Xh=37808,$h=37809,Yh=37810,jh=37811,Kh=37812,Zh=37813,Qh=37814,eu=37815,tu=37816,nu=37817,iu=37818,ru=37819,su=37820,ou=37821,tl=36492,au=36494,cu=36495,bp=36283,lu=36284,hu=36285,uu=36286,Yv=3200,jv=3201,Rp=0,Kv=1,Qi="",Vn="srgb",vs="srgb-linear",sl="linear",Nt="srgb",Yr=7680,mf=519,Zv=512,Qv=513,e_=514,Cp=515,t_=516,n_=517,i_=518,r_=519,gf=35044,vf="300 es",Li=2e3,ol=2001;class Pr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const h=s[t];if(h!==void 0){const u=h.indexOf(i);u!==-1&&h.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const h=s.slice(0);for(let u=0,c=h.length;u<c;u++)h[u].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nl=Math.PI/180,du=180/Math.PI;function la(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(fn[a&255]+fn[a>>8&255]+fn[a>>16&255]+fn[a>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[i&63|128]+fn[i>>8&255]+"-"+fn[i>>16&255]+fn[i>>24&255]+fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]).toLowerCase()}function ut(a,t,i){return Math.max(t,Math.min(i,a))}function s_(a,t){return(a%t+t)%t}function Kl(a,t,i){return(1-i)*a+i*t}function Ys(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Tn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const o_={DEG2RAD:nl};class at{constructor(t=0,i=0){at.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,h=t.elements;return this.x=h[0]*i+h[3]*s+h[6],this.y=h[1]*i+h[4]*s+h[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ut(this.x,t.x,i.x),this.y=ut(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ut(this.x,t,i),this.y=ut(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ut(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ut(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),h=Math.sin(i),u=this.x-t.x,c=this.y-t.y;return this.x=u*s-c*h+t.x,this.y=u*h+c*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(t,i,s,h,u,c,f,m,g){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,h,u,c,f,m,g)}set(t,i,s,h,u,c,f,m,g){const S=this.elements;return S[0]=t,S[1]=h,S[2]=f,S[3]=i,S[4]=u,S[5]=m,S[6]=s,S[7]=c,S[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,h=i.elements,u=this.elements,c=s[0],f=s[3],m=s[6],g=s[1],S=s[4],x=s[7],T=s[2],E=s[5],R=s[8],P=h[0],_=h[3],v=h[6],O=h[1],F=h[4],D=h[7],q=h[2],H=h[5],z=h[8];return u[0]=c*P+f*O+m*q,u[3]=c*_+f*F+m*H,u[6]=c*v+f*D+m*z,u[1]=g*P+S*O+x*q,u[4]=g*_+S*F+x*H,u[7]=g*v+S*D+x*z,u[2]=T*P+E*O+R*q,u[5]=T*_+E*F+R*H,u[8]=T*v+E*D+R*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],h=t[2],u=t[3],c=t[4],f=t[5],m=t[6],g=t[7],S=t[8];return i*c*S-i*f*g-s*u*S+s*f*m+h*u*g-h*c*m}invert(){const t=this.elements,i=t[0],s=t[1],h=t[2],u=t[3],c=t[4],f=t[5],m=t[6],g=t[7],S=t[8],x=S*c-f*g,T=f*m-S*u,E=g*u-c*m,R=i*x+s*T+h*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=x*P,t[1]=(h*g-S*s)*P,t[2]=(f*s-h*c)*P,t[3]=T*P,t[4]=(S*i-h*m)*P,t[5]=(h*u-f*i)*P,t[6]=E*P,t[7]=(s*m-g*i)*P,t[8]=(c*i-s*u)*P,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,h,u,c,f){const m=Math.cos(u),g=Math.sin(u);return this.set(s*m,s*g,-s*(m*c+g*f)+c+t,-h*g,h*m,-h*(-g*c+m*f)+f+i,0,0,1),this}scale(t,i){return this.premultiply(Zl.makeScale(t,i)),this}rotate(t){return this.premultiply(Zl.makeRotation(-t)),this}translate(t,i){return this.premultiply(Zl.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let h=0;h<9;h++)if(i[h]!==s[h])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zl=new lt;function Ip(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function al(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function a_(){const a=al("canvas");return a.style.display="block",a}const _f={};function il(a){a in _f||(_f[a]=!0,console.warn(a))}function c_(a,t,i){return new Promise(function(s,h){function u(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:h();break;case a.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function l_(a){const t=a.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function h_(a){const t=a.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const yf=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sf=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u_(){const a={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(h,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Nt&&(h.r=Oi(h.r),h.g=Oi(h.g),h.b=Oi(h.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(h.applyMatrix3(this.spaces[u].toXYZ),h.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(h.r=fs(h.r),h.g=fs(h.g),h.b=fs(h.b))),h},fromWorkingColorSpace:function(h,u){return this.convert(h,this.workingColorSpace,u)},toWorkingColorSpace:function(h,u){return this.convert(h,u,this.workingColorSpace)},getPrimaries:function(h){return this.spaces[h].primaries},getTransfer:function(h){return h===Qi?sl:this.spaces[h].transfer},getLuminanceCoefficients:function(h,u=this.workingColorSpace){return h.fromArray(this.spaces[u].luminanceCoefficients)},define:function(h){Object.assign(this.spaces,h)},_getMatrix:function(h,u,c){return h.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(h){return this.spaces[h].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(h=this.workingColorSpace){return this.spaces[h].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[vs]:{primaries:t,whitePoint:s,transfer:sl,toXYZ:yf,fromXYZ:Sf,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:t,whitePoint:s,transfer:Nt,toXYZ:yf,fromXYZ:Sf,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),a}const wt=u_();function Oi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function fs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let jr;class d_{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{jr===void 0&&(jr=al("canvas")),jr.width=t.width,jr.height=t.height;const h=jr.getContext("2d");t instanceof ImageData?h.putImageData(t,0,0):h.drawImage(t,0,0,t.width,t.height),s=jr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=al("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const h=s.getImageData(0,0,t.width,t.height),u=h.data;for(let c=0;c<u.length;c++)u[c]=Oi(u[c]/255)*255;return s.putImageData(h,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Oi(i[s]/255)*255):i[s]=Oi(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let f_=0;class Tu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=la(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},h=this.data;if(h!==null){let u;if(Array.isArray(h)){u=[];for(let c=0,f=h.length;c<f;c++)h[c].isDataTexture?u.push(Ql(h[c].image)):u.push(Ql(h[c]))}else u=Ql(h);s.url=u}return i||(t.images[this.uuid]=s),s}}function Ql(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?d_.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p_=0;class wn extends Pr{constructor(t=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,s=Ar,h=Ar,u=fi,c=br,f=ni,m=Fi,g=wn.DEFAULT_ANISOTROPY,S=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=la(),this.name="",this.source=new Tu(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=h,this.magFilter=u,this.minFilter=c,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=m,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bh:t.x=t.x-Math.floor(t.x);break;case Ar:t.x=t.x<0?0:1;break;case kh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bh:t.y=t.y-Math.floor(t.y);break;case Ar:t.y=t.y<0?0:1;break;case kh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=vp;wn.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,i=0,s=0,h=1){jt.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=h}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,h){return this.x=t,this.y=i,this.z=s,this.w=h,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,h=this.z,u=this.w,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*h+c[12]*u,this.y=c[1]*i+c[5]*s+c[9]*h+c[13]*u,this.z=c[2]*i+c[6]*s+c[10]*h+c[14]*u,this.w=c[3]*i+c[7]*s+c[11]*h+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,h,u;const m=t.elements,g=m[0],S=m[4],x=m[8],T=m[1],E=m[5],R=m[9],P=m[2],_=m[6],v=m[10];if(Math.abs(S-T)<.01&&Math.abs(x-P)<.01&&Math.abs(R-_)<.01){if(Math.abs(S+T)<.1&&Math.abs(x+P)<.1&&Math.abs(R+_)<.1&&Math.abs(g+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(g+1)/2,D=(E+1)/2,q=(v+1)/2,H=(S+T)/4,z=(x+P)/4,X=(R+_)/4;return F>D&&F>q?F<.01?(s=0,h=.707106781,u=.707106781):(s=Math.sqrt(F),h=H/s,u=z/s):D>q?D<.01?(s=.707106781,h=0,u=.707106781):(h=Math.sqrt(D),s=H/h,u=X/h):q<.01?(s=.707106781,h=.707106781,u=0):(u=Math.sqrt(q),s=z/u,h=X/u),this.set(s,h,u,i),this}let O=Math.sqrt((_-R)*(_-R)+(x-P)*(x-P)+(T-S)*(T-S));return Math.abs(O)<.001&&(O=1),this.x=(_-R)/O,this.y=(x-P)/O,this.z=(T-S)/O,this.w=Math.acos((g+E+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ut(this.x,t.x,i.x),this.y=ut(this.y,t.y,i.y),this.z=ut(this.z,t.z,i.z),this.w=ut(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ut(this.x,t,i),this.y=ut(this.y,t,i),this.z=ut(this.z,t,i),this.w=ut(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ut(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m_ extends Pr{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new jt(0,0,t,i),this.scissorTest=!1,this.viewport=new jt(0,0,t,i);const h={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new wn(h,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let h=0,u=this.textures.length;h<u;h++)this.textures[h].image.width=t,this.textures[h].image.height=i,this.textures[h].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const h=Object.assign({},t.textures[i].image);this.textures[i].source=new Tu(h)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends m_{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Pp extends wn{constructor(t=null,i=1,s=1,h=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:h},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class g_ extends wn{constructor(t=null,i=1,s=1,h=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:h},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(t=0,i=0,s=0,h=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=h}static slerpFlat(t,i,s,h,u,c,f){let m=s[h+0],g=s[h+1],S=s[h+2],x=s[h+3];const T=u[c+0],E=u[c+1],R=u[c+2],P=u[c+3];if(f===0){t[i+0]=m,t[i+1]=g,t[i+2]=S,t[i+3]=x;return}if(f===1){t[i+0]=T,t[i+1]=E,t[i+2]=R,t[i+3]=P;return}if(x!==P||m!==T||g!==E||S!==R){let _=1-f;const v=m*T+g*E+S*R+x*P,O=v>=0?1:-1,F=1-v*v;if(F>Number.EPSILON){const q=Math.sqrt(F),H=Math.atan2(q,v*O);_=Math.sin(_*H)/q,f=Math.sin(f*H)/q}const D=f*O;if(m=m*_+T*D,g=g*_+E*D,S=S*_+R*D,x=x*_+P*D,_===1-f){const q=1/Math.sqrt(m*m+g*g+S*S+x*x);m*=q,g*=q,S*=q,x*=q}}t[i]=m,t[i+1]=g,t[i+2]=S,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,h,u,c){const f=s[h],m=s[h+1],g=s[h+2],S=s[h+3],x=u[c],T=u[c+1],E=u[c+2],R=u[c+3];return t[i]=f*R+S*x+m*E-g*T,t[i+1]=m*R+S*T+g*x-f*E,t[i+2]=g*R+S*E+f*T-m*x,t[i+3]=S*R-f*x-m*T-g*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,h){return this._x=t,this._y=i,this._z=s,this._w=h,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,h=t._y,u=t._z,c=t._order,f=Math.cos,m=Math.sin,g=f(s/2),S=f(h/2),x=f(u/2),T=m(s/2),E=m(h/2),R=m(u/2);switch(c){case"XYZ":this._x=T*S*x+g*E*R,this._y=g*E*x-T*S*R,this._z=g*S*R+T*E*x,this._w=g*S*x-T*E*R;break;case"YXZ":this._x=T*S*x+g*E*R,this._y=g*E*x-T*S*R,this._z=g*S*R-T*E*x,this._w=g*S*x+T*E*R;break;case"ZXY":this._x=T*S*x-g*E*R,this._y=g*E*x+T*S*R,this._z=g*S*R+T*E*x,this._w=g*S*x-T*E*R;break;case"ZYX":this._x=T*S*x-g*E*R,this._y=g*E*x+T*S*R,this._z=g*S*R-T*E*x,this._w=g*S*x+T*E*R;break;case"YZX":this._x=T*S*x+g*E*R,this._y=g*E*x+T*S*R,this._z=g*S*R-T*E*x,this._w=g*S*x-T*E*R;break;case"XZY":this._x=T*S*x-g*E*R,this._y=g*E*x-T*S*R,this._z=g*S*R+T*E*x,this._w=g*S*x+T*E*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,h=Math.sin(s);return this._x=t.x*h,this._y=t.y*h,this._z=t.z*h,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],h=i[4],u=i[8],c=i[1],f=i[5],m=i[9],g=i[2],S=i[6],x=i[10],T=s+f+x;if(T>0){const E=.5/Math.sqrt(T+1);this._w=.25/E,this._x=(S-m)*E,this._y=(u-g)*E,this._z=(c-h)*E}else if(s>f&&s>x){const E=2*Math.sqrt(1+s-f-x);this._w=(S-m)/E,this._x=.25*E,this._y=(h+c)/E,this._z=(u+g)/E}else if(f>x){const E=2*Math.sqrt(1+f-s-x);this._w=(u-g)/E,this._x=(h+c)/E,this._y=.25*E,this._z=(m+S)/E}else{const E=2*Math.sqrt(1+x-s-f);this._w=(c-h)/E,this._x=(u+g)/E,this._y=(m+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ut(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const h=Math.min(1,i/s);return this.slerp(t,h),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,h=t._y,u=t._z,c=t._w,f=i._x,m=i._y,g=i._z,S=i._w;return this._x=s*S+c*f+h*g-u*m,this._y=h*S+c*m+u*f-s*g,this._z=u*S+c*g+s*m-h*f,this._w=c*S-s*f-h*m-u*g,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,h=this._y,u=this._z,c=this._w;let f=c*t._w+s*t._x+h*t._y+u*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=s,this._y=h,this._z=u,this;const m=1-f*f;if(m<=Number.EPSILON){const E=1-i;return this._w=E*c+i*this._w,this._x=E*s+i*this._x,this._y=E*h+i*this._y,this._z=E*u+i*this._z,this.normalize(),this}const g=Math.sqrt(m),S=Math.atan2(g,f),x=Math.sin((1-i)*S)/g,T=Math.sin(i*S)/g;return this._w=c*x+this._w*T,this._x=s*x+this._x*T,this._y=h*x+this._y*T,this._z=u*x+this._z*T,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),h=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(h*Math.sin(t),h*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,i=0,s=0){Y.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(xf.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(xf.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,h=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*h,this.y=u[1]*i+u[4]*s+u[7]*h,this.z=u[2]*i+u[5]*s+u[8]*h,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,h=this.z,u=t.elements,c=1/(u[3]*i+u[7]*s+u[11]*h+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*h+u[12])*c,this.y=(u[1]*i+u[5]*s+u[9]*h+u[13])*c,this.z=(u[2]*i+u[6]*s+u[10]*h+u[14])*c,this}applyQuaternion(t){const i=this.x,s=this.y,h=this.z,u=t.x,c=t.y,f=t.z,m=t.w,g=2*(c*h-f*s),S=2*(f*i-u*h),x=2*(u*s-c*i);return this.x=i+m*g+c*x-f*S,this.y=s+m*S+f*g-u*x,this.z=h+m*x+u*S-c*g,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,h=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*h,this.y=u[1]*i+u[5]*s+u[9]*h,this.z=u[2]*i+u[6]*s+u[10]*h,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ut(this.x,t.x,i.x),this.y=ut(this.y,t.y,i.y),this.z=ut(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ut(this.x,t,i),this.y=ut(this.y,t,i),this.z=ut(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ut(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,h=t.y,u=t.z,c=i.x,f=i.y,m=i.z;return this.x=h*m-u*f,this.y=u*c-s*m,this.z=s*f-h*c,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return eh.copy(this).projectOnVector(t),this.sub(eh)}reflect(t){return this.sub(eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ut(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,h=this.z-t.z;return i*i+s*s+h*h}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const h=Math.sin(i)*t;return this.x=h*Math.sin(s),this.y=Math.cos(i)*t,this.z=h*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),h=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=h,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eh=new Y,xf=new nr;class ha{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Zn.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Zn.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Zn.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=u.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Zn):Zn.fromBufferAttribute(u,c),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ic.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ic.copy(s.boundingBox)),Ic.applyMatrix4(t.matrixWorld),this.union(Ic)}const h=t.children;for(let u=0,c=h.length;u<c;u++)this.expandByObject(h[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Pc.subVectors(this.max,js),Kr.subVectors(t.a,js),Zr.subVectors(t.b,js),Qr.subVectors(t.c,js),Ji.subVectors(Zr,Kr),Xi.subVectors(Qr,Zr),vr.subVectors(Kr,Qr);let i=[0,-Ji.z,Ji.y,0,-Xi.z,Xi.y,0,-vr.z,vr.y,Ji.z,0,-Ji.x,Xi.z,0,-Xi.x,vr.z,0,-vr.x,-Ji.y,Ji.x,0,-Xi.y,Xi.x,0,-vr.y,vr.x,0];return!th(i,Kr,Zr,Qr,Pc)||(i=[1,0,0,0,1,0,0,0,1],!th(i,Kr,Zr,Qr,Pc))?!1:(Dc.crossVectors(Ji,Xi),i=[Dc.x,Dc.y,Dc.z],th(i,Kr,Zr,Qr,Pc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ai=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Zn=new Y,Ic=new ha,Kr=new Y,Zr=new Y,Qr=new Y,Ji=new Y,Xi=new Y,vr=new Y,js=new Y,Pc=new Y,Dc=new Y,_r=new Y;function th(a,t,i,s,h){for(let u=0,c=a.length-3;u<=c;u+=3){_r.fromArray(a,u);const f=h.x*Math.abs(_r.x)+h.y*Math.abs(_r.y)+h.z*Math.abs(_r.z),m=t.dot(_r),g=i.dot(_r),S=s.dot(_r);if(Math.max(-Math.max(m,g,S),Math.min(m,g,S))>f)return!1}return!0}const v_=new ha,Ks=new Y,nh=new Y;class Eu{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):v_.setFromPoints(t).getCenter(s);let h=0;for(let u=0,c=t.length;u<c;u++)h=Math.max(h,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(h),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const i=Ks.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),h=(s-this.radius)*.5;this.center.addScaledVector(Ks,h/s),this.radius+=h}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(nh)),this.expandByPoint(Ks.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new Y,ih=new Y,Nc=new Y,$i=new Y,rh=new Y,Lc=new Y,sh=new Y;class Mu{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=bi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,i),bi.distanceToSquared(t))}distanceSqToSegment(t,i,s,h){ih.copy(t).add(i).multiplyScalar(.5),Nc.copy(i).sub(t).normalize(),$i.copy(this.origin).sub(ih);const u=t.distanceTo(i)*.5,c=-this.direction.dot(Nc),f=$i.dot(this.direction),m=-$i.dot(Nc),g=$i.lengthSq(),S=Math.abs(1-c*c);let x,T,E,R;if(S>0)if(x=c*m-f,T=c*f-m,R=u*S,x>=0)if(T>=-R)if(T<=R){const P=1/S;x*=P,T*=P,E=x*(x+c*T+2*f)+T*(c*x+T+2*m)+g}else T=u,x=Math.max(0,-(c*T+f)),E=-x*x+T*(T+2*m)+g;else T=-u,x=Math.max(0,-(c*T+f)),E=-x*x+T*(T+2*m)+g;else T<=-R?(x=Math.max(0,-(-c*u+f)),T=x>0?-u:Math.min(Math.max(-u,-m),u),E=-x*x+T*(T+2*m)+g):T<=R?(x=0,T=Math.min(Math.max(-u,-m),u),E=T*(T+2*m)+g):(x=Math.max(0,-(c*u+f)),T=x>0?u:Math.min(Math.max(-u,-m),u),E=-x*x+T*(T+2*m)+g);else T=c>0?-u:u,x=Math.max(0,-(c*T+f)),E=-x*x+T*(T+2*m)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,x),h&&h.copy(ih).addScaledVector(Nc,T),E}intersectSphere(t,i){bi.subVectors(t.center,this.origin);const s=bi.dot(this.direction),h=bi.dot(bi)-s*s,u=t.radius*t.radius;if(h>u)return null;const c=Math.sqrt(u-h),f=s-c,m=s+c;return m<0?null:f<0?this.at(m,i):this.at(f,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,h,u,c,f,m;const g=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,T=this.origin;return g>=0?(s=(t.min.x-T.x)*g,h=(t.max.x-T.x)*g):(s=(t.max.x-T.x)*g,h=(t.min.x-T.x)*g),S>=0?(u=(t.min.y-T.y)*S,c=(t.max.y-T.y)*S):(u=(t.max.y-T.y)*S,c=(t.min.y-T.y)*S),s>c||u>h||((u>s||isNaN(s))&&(s=u),(c<h||isNaN(h))&&(h=c),x>=0?(f=(t.min.z-T.z)*x,m=(t.max.z-T.z)*x):(f=(t.max.z-T.z)*x,m=(t.min.z-T.z)*x),s>m||f>h)||((f>s||s!==s)&&(s=f),(m<h||h!==h)&&(h=m),h<0)?null:this.at(s>=0?s:h,i)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,i,s,h,u){rh.subVectors(i,t),Lc.subVectors(s,t),sh.crossVectors(rh,Lc);let c=this.direction.dot(sh),f;if(c>0){if(h)return null;f=1}else if(c<0)f=-1,c=-c;else return null;$i.subVectors(this.origin,t);const m=f*this.direction.dot(Lc.crossVectors($i,Lc));if(m<0)return null;const g=f*this.direction.dot(rh.cross($i));if(g<0||m+g>c)return null;const S=-f*$i.dot(sh);return S<0?null:this.at(S/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(t,i,s,h,u,c,f,m,g,S,x,T,E,R,P,_){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,h,u,c,f,m,g,S,x,T,E,R,P,_)}set(t,i,s,h,u,c,f,m,g,S,x,T,E,R,P,_){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=h,v[1]=u,v[5]=c,v[9]=f,v[13]=m,v[2]=g,v[6]=S,v[10]=x,v[14]=T,v[3]=E,v[7]=R,v[11]=P,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,h=1/es.setFromMatrixColumn(t,0).length(),u=1/es.setFromMatrixColumn(t,1).length(),c=1/es.setFromMatrixColumn(t,2).length();return i[0]=s[0]*h,i[1]=s[1]*h,i[2]=s[2]*h,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*c,i[9]=s[9]*c,i[10]=s[10]*c,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,h=t.y,u=t.z,c=Math.cos(s),f=Math.sin(s),m=Math.cos(h),g=Math.sin(h),S=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const T=c*S,E=c*x,R=f*S,P=f*x;i[0]=m*S,i[4]=-m*x,i[8]=g,i[1]=E+R*g,i[5]=T-P*g,i[9]=-f*m,i[2]=P-T*g,i[6]=R+E*g,i[10]=c*m}else if(t.order==="YXZ"){const T=m*S,E=m*x,R=g*S,P=g*x;i[0]=T+P*f,i[4]=R*f-E,i[8]=c*g,i[1]=c*x,i[5]=c*S,i[9]=-f,i[2]=E*f-R,i[6]=P+T*f,i[10]=c*m}else if(t.order==="ZXY"){const T=m*S,E=m*x,R=g*S,P=g*x;i[0]=T-P*f,i[4]=-c*x,i[8]=R+E*f,i[1]=E+R*f,i[5]=c*S,i[9]=P-T*f,i[2]=-c*g,i[6]=f,i[10]=c*m}else if(t.order==="ZYX"){const T=c*S,E=c*x,R=f*S,P=f*x;i[0]=m*S,i[4]=R*g-E,i[8]=T*g+P,i[1]=m*x,i[5]=P*g+T,i[9]=E*g-R,i[2]=-g,i[6]=f*m,i[10]=c*m}else if(t.order==="YZX"){const T=c*m,E=c*g,R=f*m,P=f*g;i[0]=m*S,i[4]=P-T*x,i[8]=R*x+E,i[1]=x,i[5]=c*S,i[9]=-f*S,i[2]=-g*S,i[6]=E*x+R,i[10]=T-P*x}else if(t.order==="XZY"){const T=c*m,E=c*g,R=f*m,P=f*g;i[0]=m*S,i[4]=-x,i[8]=g*S,i[1]=T*x+P,i[5]=c*S,i[9]=E*x-R,i[2]=R*x-E,i[6]=f*S,i[10]=P*x+T}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(__,t,y_)}lookAt(t,i,s){const h=this.elements;return Pn.subVectors(t,i),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Yi.crossVectors(s,Pn),Yi.lengthSq()===0&&(Math.abs(s.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Yi.crossVectors(s,Pn)),Yi.normalize(),Oc.crossVectors(Pn,Yi),h[0]=Yi.x,h[4]=Oc.x,h[8]=Pn.x,h[1]=Yi.y,h[5]=Oc.y,h[9]=Pn.y,h[2]=Yi.z,h[6]=Oc.z,h[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,h=i.elements,u=this.elements,c=s[0],f=s[4],m=s[8],g=s[12],S=s[1],x=s[5],T=s[9],E=s[13],R=s[2],P=s[6],_=s[10],v=s[14],O=s[3],F=s[7],D=s[11],q=s[15],H=h[0],z=h[4],X=h[8],N=h[12],C=h[1],k=h[5],oe=h[9],ne=h[13],fe=h[2],pe=h[6],le=h[10],ge=h[14],se=h[3],K=h[7],De=h[11],Ge=h[15];return u[0]=c*H+f*C+m*fe+g*se,u[4]=c*z+f*k+m*pe+g*K,u[8]=c*X+f*oe+m*le+g*De,u[12]=c*N+f*ne+m*ge+g*Ge,u[1]=S*H+x*C+T*fe+E*se,u[5]=S*z+x*k+T*pe+E*K,u[9]=S*X+x*oe+T*le+E*De,u[13]=S*N+x*ne+T*ge+E*Ge,u[2]=R*H+P*C+_*fe+v*se,u[6]=R*z+P*k+_*pe+v*K,u[10]=R*X+P*oe+_*le+v*De,u[14]=R*N+P*ne+_*ge+v*Ge,u[3]=O*H+F*C+D*fe+q*se,u[7]=O*z+F*k+D*pe+q*K,u[11]=O*X+F*oe+D*le+q*De,u[15]=O*N+F*ne+D*ge+q*Ge,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],h=t[8],u=t[12],c=t[1],f=t[5],m=t[9],g=t[13],S=t[2],x=t[6],T=t[10],E=t[14],R=t[3],P=t[7],_=t[11],v=t[15];return R*(+u*m*x-h*g*x-u*f*T+s*g*T+h*f*E-s*m*E)+P*(+i*m*E-i*g*T+u*c*T-h*c*E+h*g*S-u*m*S)+_*(+i*g*x-i*f*E-u*c*x+s*c*E+u*f*S-s*g*S)+v*(-h*f*S-i*m*x+i*f*T+h*c*x-s*c*T+s*m*S)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const h=this.elements;return t.isVector3?(h[12]=t.x,h[13]=t.y,h[14]=t.z):(h[12]=t,h[13]=i,h[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],h=t[2],u=t[3],c=t[4],f=t[5],m=t[6],g=t[7],S=t[8],x=t[9],T=t[10],E=t[11],R=t[12],P=t[13],_=t[14],v=t[15],O=x*_*g-P*T*g+P*m*E-f*_*E-x*m*v+f*T*v,F=R*T*g-S*_*g-R*m*E+c*_*E+S*m*v-c*T*v,D=S*P*g-R*x*g+R*f*E-c*P*E-S*f*v+c*x*v,q=R*x*m-S*P*m-R*f*T+c*P*T+S*f*_-c*x*_,H=i*O+s*F+h*D+u*q;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return t[0]=O*z,t[1]=(P*T*u-x*_*u-P*h*E+s*_*E+x*h*v-s*T*v)*z,t[2]=(f*_*u-P*m*u+P*h*g-s*_*g-f*h*v+s*m*v)*z,t[3]=(x*m*u-f*T*u-x*h*g+s*T*g+f*h*E-s*m*E)*z,t[4]=F*z,t[5]=(S*_*u-R*T*u+R*h*E-i*_*E-S*h*v+i*T*v)*z,t[6]=(R*m*u-c*_*u-R*h*g+i*_*g+c*h*v-i*m*v)*z,t[7]=(c*T*u-S*m*u+S*h*g-i*T*g-c*h*E+i*m*E)*z,t[8]=D*z,t[9]=(R*x*u-S*P*u-R*s*E+i*P*E+S*s*v-i*x*v)*z,t[10]=(c*P*u-R*f*u+R*s*g-i*P*g-c*s*v+i*f*v)*z,t[11]=(S*f*u-c*x*u-S*s*g+i*x*g+c*s*E-i*f*E)*z,t[12]=q*z,t[13]=(S*P*h-R*x*h+R*s*T-i*P*T-S*s*_+i*x*_)*z,t[14]=(R*f*h-c*P*h-R*s*m+i*P*m+c*s*_-i*f*_)*z,t[15]=(c*x*h-S*f*h+S*s*m-i*x*m-c*s*T+i*f*T)*z,this}scale(t){const i=this.elements,s=t.x,h=t.y,u=t.z;return i[0]*=s,i[4]*=h,i[8]*=u,i[1]*=s,i[5]*=h,i[9]*=u,i[2]*=s,i[6]*=h,i[10]*=u,i[3]*=s,i[7]*=h,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],h=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,h))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),h=Math.sin(i),u=1-s,c=t.x,f=t.y,m=t.z,g=u*c,S=u*f;return this.set(g*c+s,g*f-h*m,g*m+h*f,0,g*f+h*m,S*f+s,S*m-h*c,0,g*m-h*f,S*m+h*c,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,h,u,c){return this.set(1,s,u,0,t,1,c,0,i,h,1,0,0,0,0,1),this}compose(t,i,s){const h=this.elements,u=i._x,c=i._y,f=i._z,m=i._w,g=u+u,S=c+c,x=f+f,T=u*g,E=u*S,R=u*x,P=c*S,_=c*x,v=f*x,O=m*g,F=m*S,D=m*x,q=s.x,H=s.y,z=s.z;return h[0]=(1-(P+v))*q,h[1]=(E+D)*q,h[2]=(R-F)*q,h[3]=0,h[4]=(E-D)*H,h[5]=(1-(T+v))*H,h[6]=(_+O)*H,h[7]=0,h[8]=(R+F)*z,h[9]=(_-O)*z,h[10]=(1-(T+P))*z,h[11]=0,h[12]=t.x,h[13]=t.y,h[14]=t.z,h[15]=1,this}decompose(t,i,s){const h=this.elements;let u=es.set(h[0],h[1],h[2]).length();const c=es.set(h[4],h[5],h[6]).length(),f=es.set(h[8],h[9],h[10]).length();this.determinant()<0&&(u=-u),t.x=h[12],t.y=h[13],t.z=h[14],Qn.copy(this);const g=1/u,S=1/c,x=1/f;return Qn.elements[0]*=g,Qn.elements[1]*=g,Qn.elements[2]*=g,Qn.elements[4]*=S,Qn.elements[5]*=S,Qn.elements[6]*=S,Qn.elements[8]*=x,Qn.elements[9]*=x,Qn.elements[10]*=x,i.setFromRotationMatrix(Qn),s.x=u,s.y=c,s.z=f,this}makePerspective(t,i,s,h,u,c,f=Li){const m=this.elements,g=2*u/(i-t),S=2*u/(s-h),x=(i+t)/(i-t),T=(s+h)/(s-h);let E,R;if(f===Li)E=-(c+u)/(c-u),R=-2*c*u/(c-u);else if(f===ol)E=-c/(c-u),R=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=g,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=S,m[9]=T,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,h,u,c,f=Li){const m=this.elements,g=1/(i-t),S=1/(s-h),x=1/(c-u),T=(i+t)*g,E=(s+h)*S;let R,P;if(f===Li)R=(c+u)*x,P=-2*x;else if(f===ol)R=u*x,P=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=2*g,m[4]=0,m[8]=0,m[12]=-T,m[1]=0,m[5]=2*S,m[9]=0,m[13]=-E,m[2]=0,m[6]=0,m[10]=P,m[14]=-R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let h=0;h<16;h++)if(i[h]!==s[h])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const es=new Y,Qn=new Wt,__=new Y(0,0,0),y_=new Y(1,1,1),Yi=new Y,Oc=new Y,Pn=new Y,Tf=new Wt,Ef=new nr;class gi{constructor(t=0,i=0,s=0,h=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=h}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,h=this._order){return this._x=t,this._y=i,this._z=s,this._order=h,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const h=t.elements,u=h[0],c=h[4],f=h[8],m=h[1],g=h[5],S=h[9],x=h[2],T=h[6],E=h[10];switch(i){case"XYZ":this._y=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(T,g),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(f,E),this._z=Math.atan2(m,g)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(ut(T,-1,1)),Math.abs(T)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-c,g)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ut(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(T,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-c,g));break;case"YZX":this._z=Math.asin(ut(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,g),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(f,E));break;case"XZY":this._z=Math.asin(-ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(T,g),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-S,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Tf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tf,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class wu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let S_=0;const Mf=new Y,ts=new nr,Ri=new Wt,Uc=new Y,Zs=new Y,x_=new Y,T_=new nr,wf=new Y(1,0,0),Af=new Y(0,1,0),bf=new Y(0,0,1),Rf={type:"added"},E_={type:"removed"},ns={type:"childadded",child:null},oh={type:"childremoved",child:null};class mn extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const t=new Y,i=new gi,s=new nr,h=new Y(1,1,1);function u(){s.setFromEuler(i,!1)}function c(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:h},modelViewMatrix:{value:new Wt},normalMatrix:{value:new lt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ts.setFromAxisAngle(t,i),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,i){return ts.setFromAxisAngle(t,i),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(wf,t)}rotateY(t){return this.rotateOnAxis(Af,t)}rotateZ(t){return this.rotateOnAxis(bf,t)}translateOnAxis(t,i){return Mf.copy(t).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(wf,t)}translateY(t){return this.translateOnAxis(Af,t)}translateZ(t){return this.translateOnAxis(bf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Uc.copy(t):Uc.set(t,i,s);const h=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Zs,Uc,this.up):Ri.lookAt(Uc,Zs,this.up),this.quaternion.setFromRotationMatrix(Ri),h&&(Ri.extractRotation(h.matrixWorld),ts.setFromRotationMatrix(Ri),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rf),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(E_),oh.child=t,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rf),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,h=this.children.length;s<h;s++){const c=this.children[s].getObjectByProperty(t,i);if(c!==void 0)return c}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const h=this.children;for(let u=0,c=h.length;u<c;u++)h[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,x_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,T_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,h=i.length;s<h;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,h=i.length;s<h;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,h=i.length;s<h;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const h=this.children;for(let u=0,c=h.length;u<c;u++)h[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const h={};h.uuid=this.uuid,h.type=this.type,this.name!==""&&(h.name=this.name),this.castShadow===!0&&(h.castShadow=!0),this.receiveShadow===!0&&(h.receiveShadow=!0),this.visible===!1&&(h.visible=!1),this.frustumCulled===!1&&(h.frustumCulled=!1),this.renderOrder!==0&&(h.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(h.userData=this.userData),h.layers=this.layers.mask,h.matrix=this.matrix.toArray(),h.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(h.matrixAutoUpdate=!1),this.isInstancedMesh&&(h.type="InstancedMesh",h.count=this.count,h.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(h.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(h.type="BatchedMesh",h.perObjectFrustumCulled=this.perObjectFrustumCulled,h.sortObjects=this.sortObjects,h.drawRanges=this._drawRanges,h.reservedRanges=this._reservedRanges,h.visibility=this._visibility,h.active=this._active,h.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),h.maxInstanceCount=this._maxInstanceCount,h.maxVertexCount=this._maxVertexCount,h.maxIndexCount=this._maxIndexCount,h.geometryInitialized=this._geometryInitialized,h.geometryCount=this._geometryCount,h.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(h.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(h.boundingSphere={center:h.boundingSphere.center.toArray(),radius:h.boundingSphere.radius}),this.boundingBox!==null&&(h.boundingBox={min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}));function u(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?h.background=this.background.toJSON():this.background.isTexture&&(h.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(h.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){h.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let g=0,S=m.length;g<S;g++){const x=m[g];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(h.bindMode=this.bindMode,h.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),h.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,g=this.material.length;m<g;m++)f.push(u(t.materials,this.material[m]));h.material=f}else h.material=u(t.materials,this.material);if(this.children.length>0){h.children=[];for(let f=0;f<this.children.length;f++)h.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){h.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];h.animations.push(u(t.animations,m))}}if(i){const f=c(t.geometries),m=c(t.materials),g=c(t.textures),S=c(t.images),x=c(t.shapes),T=c(t.skeletons),E=c(t.animations),R=c(t.nodes);f.length>0&&(s.geometries=f),m.length>0&&(s.materials=m),g.length>0&&(s.textures=g),S.length>0&&(s.images=S),x.length>0&&(s.shapes=x),T.length>0&&(s.skeletons=T),E.length>0&&(s.animations=E),R.length>0&&(s.nodes=R)}return s.object=h,s;function c(f){const m=[];for(const g in f){const S=f[g];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const h=t.children[s];this.add(h.clone())}return this}}mn.DEFAULT_UP=new Y(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new Y,Ci=new Y,ah=new Y,Ii=new Y,is=new Y,rs=new Y,Cf=new Y,ch=new Y,lh=new Y,hh=new Y,uh=new jt,dh=new jt,fh=new jt;class ti{constructor(t=new Y,i=new Y,s=new Y){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,h){h.subVectors(s,i),ei.subVectors(t,i),h.cross(ei);const u=h.lengthSq();return u>0?h.multiplyScalar(1/Math.sqrt(u)):h.set(0,0,0)}static getBarycoord(t,i,s,h,u){ei.subVectors(h,i),Ci.subVectors(s,i),ah.subVectors(t,i);const c=ei.dot(ei),f=ei.dot(Ci),m=ei.dot(ah),g=Ci.dot(Ci),S=Ci.dot(ah),x=c*g-f*f;if(x===0)return u.set(0,0,0),null;const T=1/x,E=(g*m-f*S)*T,R=(c*S-f*m)*T;return u.set(1-E-R,R,E)}static containsPoint(t,i,s,h){return this.getBarycoord(t,i,s,h,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,i,s,h,u,c,f,m){return this.getBarycoord(t,i,s,h,Ii)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ii.x),m.addScaledVector(c,Ii.y),m.addScaledVector(f,Ii.z),m)}static getInterpolatedAttribute(t,i,s,h,u,c){return uh.setScalar(0),dh.setScalar(0),fh.setScalar(0),uh.fromBufferAttribute(t,i),dh.fromBufferAttribute(t,s),fh.fromBufferAttribute(t,h),c.setScalar(0),c.addScaledVector(uh,u.x),c.addScaledVector(dh,u.y),c.addScaledVector(fh,u.z),c}static isFrontFacing(t,i,s,h){return ei.subVectors(s,i),Ci.subVectors(t,i),ei.cross(Ci).dot(h)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,h){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[h]),this}setFromAttributeAndIndices(t,i,s,h){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,h),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,h,u){return ti.getInterpolation(t,this.a,this.b,this.c,i,s,h,u)}containsPoint(t){return ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,h=this.b,u=this.c;let c,f;is.subVectors(h,s),rs.subVectors(u,s),ch.subVectors(t,s);const m=is.dot(ch),g=rs.dot(ch);if(m<=0&&g<=0)return i.copy(s);lh.subVectors(t,h);const S=is.dot(lh),x=rs.dot(lh);if(S>=0&&x<=S)return i.copy(h);const T=m*x-S*g;if(T<=0&&m>=0&&S<=0)return c=m/(m-S),i.copy(s).addScaledVector(is,c);hh.subVectors(t,u);const E=is.dot(hh),R=rs.dot(hh);if(R>=0&&E<=R)return i.copy(u);const P=E*g-m*R;if(P<=0&&g>=0&&R<=0)return f=g/(g-R),i.copy(s).addScaledVector(rs,f);const _=S*R-E*x;if(_<=0&&x-S>=0&&E-R>=0)return Cf.subVectors(u,h),f=(x-S)/(x-S+(E-R)),i.copy(h).addScaledVector(Cf,f);const v=1/(_+P+T);return c=P*v,f=T*v,i.copy(s).addScaledVector(is,c).addScaledVector(rs,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function ph(a,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(t-a)*6*i:i<1/2?t:i<2/3?a+(t-a)*6*(2/3-i):a}class At{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const h=t;h&&h.isColor?this.copy(h):typeof h=="number"?this.setHex(h):typeof h=="string"&&this.setStyle(h)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,wt.toWorkingColorSpace(this,i),this}setRGB(t,i,s,h=wt.workingColorSpace){return this.r=t,this.g=i,this.b=s,wt.toWorkingColorSpace(this,h),this}setHSL(t,i,s,h=wt.workingColorSpace){if(t=s_(t,1),i=ut(i,0,1),s=ut(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,c=2*s-u;this.r=ph(c,u,t+1/3),this.g=ph(c,u,t),this.b=ph(c,u,t-1/3)}return wt.toWorkingColorSpace(this,h),this}setStyle(t,i=Vn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let h;if(h=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=h[1],f=h[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(h=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=h[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(c===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Vn){const s=Dp[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vn){return wt.fromWorkingColorSpace(pn.copy(this),t),Math.round(ut(pn.r*255,0,255))*65536+Math.round(ut(pn.g*255,0,255))*256+Math.round(ut(pn.b*255,0,255))}getHexString(t=Vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=wt.workingColorSpace){wt.fromWorkingColorSpace(pn.copy(this),i);const s=pn.r,h=pn.g,u=pn.b,c=Math.max(s,h,u),f=Math.min(s,h,u);let m,g;const S=(f+c)/2;if(f===c)m=0,g=0;else{const x=c-f;switch(g=S<=.5?x/(c+f):x/(2-c-f),c){case s:m=(h-u)/x+(h<u?6:0);break;case h:m=(u-s)/x+2;break;case u:m=(s-h)/x+4;break}m/=6}return t.h=m,t.s=g,t.l=S,t}getRGB(t,i=wt.workingColorSpace){return wt.fromWorkingColorSpace(pn.copy(this),i),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Vn){wt.fromWorkingColorSpace(pn.copy(this),t);const i=pn.r,s=pn.g,h=pn.b;return t!==Vn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${h.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(h*255)})`}offsetHSL(t,i,s){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+i,ji.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ji),t.getHSL(Fc);const s=Kl(ji.h,Fc.h,i),h=Kl(ji.s,Fc.s,i),u=Kl(ji.l,Fc.l,i);return this.setHSL(s,h,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,h=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*h,this.g=u[1]*i+u[4]*s+u[7]*h,this.b=u[2]*i+u[5]*s+u[8]*h,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new At;At.NAMES=Dp;let M_=0;class ua extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=la(),this.name="",this.type="Material",this.blending=ds,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Rh,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const h=this[i];if(h===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}h&&h.isColor?h.set(s):h&&h.isVector3&&s&&s.isVector3?h.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(s.blending=this.blending),this.side!==Ui&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==bh&&(s.blendSrc=this.blendSrc),this.blendDst!==Rh&&(s.blendDst=this.blendDst),this.blendEquation!==Mr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mf&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function h(u){const c=[];for(const f in u){const m=u[f];delete m.metadata,c.push(m)}return c}if(i){const u=h(t.textures),c=h(t.images);u.length>0&&(s.textures=u),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const h=i.length;s=new Array(h);for(let u=0;u!==h;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Np extends ua{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qt=new Y,Bc=new at;let w_=0;class mi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w_++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=gf,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let h=0,u=this.itemSize;h<u;h++)this.array[t+h]=i.array[s+h];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Bc.fromBufferAttribute(this,i),Bc.applyMatrix3(t),this.setXY(i,Bc.x,Bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Qt.fromBufferAttribute(this,i),Qt.applyMatrix3(t),this.setXYZ(i,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Qt.fromBufferAttribute(this,i),Qt.applyMatrix4(t),this.setXYZ(i,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Qt.fromBufferAttribute(this,i),Qt.applyNormalMatrix(t),this.setXYZ(i,Qt.x,Qt.y,Qt.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Qt.fromBufferAttribute(this,i),Qt.transformDirection(t),this.setXYZ(i,Qt.x,Qt.y,Qt.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ys(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Tn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ys(i,this.array)),i}setX(t,i){return this.normalized&&(i=Tn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ys(i,this.array)),i}setY(t,i){return this.normalized&&(i=Tn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ys(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Tn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ys(i,this.array)),i}setW(t,i){return this.normalized&&(i=Tn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Tn(i,this.array),s=Tn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,h){return t*=this.itemSize,this.normalized&&(i=Tn(i,this.array),s=Tn(s,this.array),h=Tn(h,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=h,this}setXYZW(t,i,s,h,u){return t*=this.itemSize,this.normalized&&(i=Tn(i,this.array),s=Tn(s,this.array),h=Tn(h,this.array),u=Tn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=h,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gf&&(t.usage=this.usage),t}}class Lp extends mi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Op extends mi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Rr extends mi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let A_=0;const zn=new Wt,mh=new mn,ss=new Y,Dn=new ha,Qs=new ha,ln=new Y;class Dr extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ip(t)?Op:Lp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new lt().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const h=this.attributes.tangent;return h!==void 0&&(h.transformDirection(t),h.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,i,s){return zn.makeTranslation(t,i,s),this.applyMatrix4(zn),this}scale(t,i,s){return zn.makeScale(t,i,s),this.applyMatrix4(zn),this}lookAt(t){return mh.lookAt(t),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let h=0,u=t.length;h<u;h++){const c=t[h];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Rr(s,3))}else{const s=Math.min(t.length,i.count);for(let h=0;h<s;h++){const u=t[h];i.setXYZ(h,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,h=i.length;s<h;s++){const u=i[s];Dn.setFromBufferAttribute(u),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),i)for(let u=0,c=i.length;u<c;u++){const f=i[u];Qs.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Dn.min,Qs.min),Dn.expandByPoint(ln),ln.addVectors(Dn.max,Qs.max),Dn.expandByPoint(ln)):(Dn.expandByPoint(Qs.min),Dn.expandByPoint(Qs.max))}Dn.getCenter(s);let h=0;for(let u=0,c=t.count;u<c;u++)ln.fromBufferAttribute(t,u),h=Math.max(h,s.distanceToSquared(ln));if(i)for(let u=0,c=i.length;u<c;u++){const f=i[u],m=this.morphTargetsRelative;for(let g=0,S=f.count;g<S;g++)ln.fromBufferAttribute(f,g),m&&(ss.fromBufferAttribute(t,g),ln.add(ss)),h=Math.max(h,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(h),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,h=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],m=[];for(let X=0;X<s.count;X++)f[X]=new Y,m[X]=new Y;const g=new Y,S=new Y,x=new Y,T=new at,E=new at,R=new at,P=new Y,_=new Y;function v(X,N,C){g.fromBufferAttribute(s,X),S.fromBufferAttribute(s,N),x.fromBufferAttribute(s,C),T.fromBufferAttribute(u,X),E.fromBufferAttribute(u,N),R.fromBufferAttribute(u,C),S.sub(g),x.sub(g),E.sub(T),R.sub(T);const k=1/(E.x*R.y-R.x*E.y);isFinite(k)&&(P.copy(S).multiplyScalar(R.y).addScaledVector(x,-E.y).multiplyScalar(k),_.copy(x).multiplyScalar(E.x).addScaledVector(S,-R.x).multiplyScalar(k),f[X].add(P),f[N].add(P),f[C].add(P),m[X].add(_),m[N].add(_),m[C].add(_))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let X=0,N=O.length;X<N;++X){const C=O[X],k=C.start,oe=C.count;for(let ne=k,fe=k+oe;ne<fe;ne+=3)v(t.getX(ne+0),t.getX(ne+1),t.getX(ne+2))}const F=new Y,D=new Y,q=new Y,H=new Y;function z(X){q.fromBufferAttribute(h,X),H.copy(q);const N=f[X];F.copy(N),F.sub(q.multiplyScalar(q.dot(N))).normalize(),D.crossVectors(H,N);const k=D.dot(m[X])<0?-1:1;c.setXYZW(X,F.x,F.y,F.z,k)}for(let X=0,N=O.length;X<N;++X){const C=O[X],k=C.start,oe=C.count;for(let ne=k,fe=k+oe;ne<fe;ne+=3)z(t.getX(ne+0)),z(t.getX(ne+1)),z(t.getX(ne+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let T=0,E=s.count;T<E;T++)s.setXYZ(T,0,0,0);const h=new Y,u=new Y,c=new Y,f=new Y,m=new Y,g=new Y,S=new Y,x=new Y;if(t)for(let T=0,E=t.count;T<E;T+=3){const R=t.getX(T+0),P=t.getX(T+1),_=t.getX(T+2);h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,_),S.subVectors(c,u),x.subVectors(h,u),S.cross(x),f.fromBufferAttribute(s,R),m.fromBufferAttribute(s,P),g.fromBufferAttribute(s,_),f.add(S),m.add(S),g.add(S),s.setXYZ(R,f.x,f.y,f.z),s.setXYZ(P,m.x,m.y,m.z),s.setXYZ(_,g.x,g.y,g.z)}else for(let T=0,E=i.count;T<E;T+=3)h.fromBufferAttribute(i,T+0),u.fromBufferAttribute(i,T+1),c.fromBufferAttribute(i,T+2),S.subVectors(c,u),x.subVectors(h,u),S.cross(x),s.setXYZ(T+0,S.x,S.y,S.z),s.setXYZ(T+1,S.x,S.y,S.z),s.setXYZ(T+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)ln.fromBufferAttribute(t,i),ln.normalize(),t.setXYZ(i,ln.x,ln.y,ln.z)}toNonIndexed(){function t(f,m){const g=f.array,S=f.itemSize,x=f.normalized,T=new g.constructor(m.length*S);let E=0,R=0;for(let P=0,_=m.length;P<_;P++){f.isInterleavedBufferAttribute?E=m[P]*f.data.stride+f.offset:E=m[P]*S;for(let v=0;v<S;v++)T[R++]=g[E++]}return new mi(T,S,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Dr,s=this.index.array,h=this.attributes;for(const f in h){const m=h[f],g=t(m,s);i.setAttribute(f,g)}const u=this.morphAttributes;for(const f in u){const m=[],g=u[f];for(let S=0,x=g.length;S<x;S++){const T=g[S],E=t(T,s);m.push(E)}i.morphAttributes[f]=m}i.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,m=c.length;f<m;f++){const g=c[f];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const g in m)m[g]!==void 0&&(t[g]=m[g]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const g=s[m];t.data.attributes[m]=g.toJSON(t.data)}const h={};let u=!1;for(const m in this.morphAttributes){const g=this.morphAttributes[m],S=[];for(let x=0,T=g.length;x<T;x++){const E=g[x];S.push(E.toJSON(t.data))}S.length>0&&(h[m]=S,u=!0)}u&&(t.data.morphAttributes=h,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const h=t.attributes;for(const g in h){const S=h[g];this.setAttribute(g,S.clone(i))}const u=t.morphAttributes;for(const g in u){const S=[],x=u[g];for(let T=0,E=x.length;T<E;T++)S.push(x[T].clone(i));this.morphAttributes[g]=S}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let g=0,S=c.length;g<S;g++){const x=c[g];this.addGroup(x.start,x.count,x.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const If=new Wt,yr=new Mu,kc=new Eu,Pf=new Y,zc=new Y,Vc=new Y,Hc=new Y,gh=new Y,Gc=new Y,Df=new Y,Wc=new Y;class pi extends mn{constructor(t=new Dr,i=new Np){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const h=i[s[0]];if(h!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=h.length;u<c;u++){const f=h[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(t,i){const s=this.geometry,h=s.attributes.position,u=s.morphAttributes.position,c=s.morphTargetsRelative;i.fromBufferAttribute(h,t);const f=this.morphTargetInfluences;if(u&&f){Gc.set(0,0,0);for(let m=0,g=u.length;m<g;m++){const S=f[m],x=u[m];S!==0&&(gh.fromBufferAttribute(x,t),c?Gc.addScaledVector(gh,S):Gc.addScaledVector(gh.sub(i),S))}i.add(Gc)}return i}raycast(t,i){const s=this.geometry,h=this.material,u=this.matrixWorld;h!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(u),yr.copy(t.ray).recast(t.near),!(kc.containsPoint(yr.origin)===!1&&(yr.intersectSphere(kc,Pf)===null||yr.origin.distanceToSquared(Pf)>(t.far-t.near)**2))&&(If.copy(u).invert(),yr.copy(t.ray).applyMatrix4(If),!(s.boundingBox!==null&&yr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,yr)))}_computeIntersections(t,i,s){let h;const u=this.geometry,c=this.material,f=u.index,m=u.attributes.position,g=u.attributes.uv,S=u.attributes.uv1,x=u.attributes.normal,T=u.groups,E=u.drawRange;if(f!==null)if(Array.isArray(c))for(let R=0,P=T.length;R<P;R++){const _=T[R],v=c[_.materialIndex],O=Math.max(_.start,E.start),F=Math.min(f.count,Math.min(_.start+_.count,E.start+E.count));for(let D=O,q=F;D<q;D+=3){const H=f.getX(D),z=f.getX(D+1),X=f.getX(D+2);h=qc(this,v,t,s,g,S,x,H,z,X),h&&(h.faceIndex=Math.floor(D/3),h.face.materialIndex=_.materialIndex,i.push(h))}}else{const R=Math.max(0,E.start),P=Math.min(f.count,E.start+E.count);for(let _=R,v=P;_<v;_+=3){const O=f.getX(_),F=f.getX(_+1),D=f.getX(_+2);h=qc(this,c,t,s,g,S,x,O,F,D),h&&(h.faceIndex=Math.floor(_/3),i.push(h))}}else if(m!==void 0)if(Array.isArray(c))for(let R=0,P=T.length;R<P;R++){const _=T[R],v=c[_.materialIndex],O=Math.max(_.start,E.start),F=Math.min(m.count,Math.min(_.start+_.count,E.start+E.count));for(let D=O,q=F;D<q;D+=3){const H=D,z=D+1,X=D+2;h=qc(this,v,t,s,g,S,x,H,z,X),h&&(h.faceIndex=Math.floor(D/3),h.face.materialIndex=_.materialIndex,i.push(h))}}else{const R=Math.max(0,E.start),P=Math.min(m.count,E.start+E.count);for(let _=R,v=P;_<v;_+=3){const O=_,F=_+1,D=_+2;h=qc(this,c,t,s,g,S,x,O,F,D),h&&(h.faceIndex=Math.floor(_/3),i.push(h))}}}}function b_(a,t,i,s,h,u,c,f){let m;if(t.side===Mn?m=s.intersectTriangle(c,u,h,!0,f):m=s.intersectTriangle(h,u,c,t.side===Ui,f),m===null)return null;Wc.copy(f),Wc.applyMatrix4(a.matrixWorld);const g=i.ray.origin.distanceTo(Wc);return g<i.near||g>i.far?null:{distance:g,point:Wc.clone(),object:a}}function qc(a,t,i,s,h,u,c,f,m,g){a.getVertexPosition(f,zc),a.getVertexPosition(m,Vc),a.getVertexPosition(g,Hc);const S=b_(a,t,i,s,zc,Vc,Hc,Df);if(S){const x=new Y;ti.getBarycoord(Df,zc,Vc,Hc,x),h&&(S.uv=ti.getInterpolatedAttribute(h,f,m,g,x,new at)),u&&(S.uv1=ti.getInterpolatedAttribute(u,f,m,g,x,new at)),c&&(S.normal=ti.getInterpolatedAttribute(c,f,m,g,x,new Y),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const T={a:f,b:m,c:g,normal:new Y,materialIndex:0};ti.getNormal(zc,Vc,Hc,T.normal),S.face=T,S.barycoord=x}return S}class ys extends Dr{constructor(t=1,i=1,s=1,h=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:h,heightSegments:u,depthSegments:c};const f=this;h=Math.floor(h),u=Math.floor(u),c=Math.floor(c);const m=[],g=[],S=[],x=[];let T=0,E=0;R("z","y","x",-1,-1,s,i,t,c,u,0),R("z","y","x",1,-1,s,i,-t,c,u,1),R("x","z","y",1,1,t,s,i,h,c,2),R("x","z","y",1,-1,t,s,-i,h,c,3),R("x","y","z",1,-1,t,i,s,h,u,4),R("x","y","z",-1,-1,t,i,-s,h,u,5),this.setIndex(m),this.setAttribute("position",new Rr(g,3)),this.setAttribute("normal",new Rr(S,3)),this.setAttribute("uv",new Rr(x,2));function R(P,_,v,O,F,D,q,H,z,X,N){const C=D/z,k=q/X,oe=D/2,ne=q/2,fe=H/2,pe=z+1,le=X+1;let ge=0,se=0;const K=new Y;for(let De=0;De<le;De++){const Ge=De*k-ne;for(let ct=0;ct<pe;ct++){const Et=ct*C-oe;K[P]=Et*O,K[_]=Ge*F,K[v]=fe,g.push(K.x,K.y,K.z),K[P]=0,K[_]=0,K[v]=H>0?1:-1,S.push(K.x,K.y,K.z),x.push(ct/z),x.push(1-De/X),ge+=1}}for(let De=0;De<X;De++)for(let Ge=0;Ge<z;Ge++){const ct=T+Ge+pe*De,Et=T+Ge+pe*(De+1),ae=T+(Ge+1)+pe*(De+1),xe=T+(Ge+1)+pe*De;m.push(ct,Et,xe),m.push(Et,ae,xe),se+=6}f.addGroup(E,se,N),E+=se,T+=ge}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _s(a){const t={};for(const i in a){t[i]={};for(const s in a[i]){const h=a[i][s];h&&(h.isColor||h.isMatrix3||h.isMatrix4||h.isVector2||h.isVector3||h.isVector4||h.isTexture||h.isQuaternion)?h.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=h.clone():Array.isArray(h)?t[i][s]=h.slice():t[i][s]=h}}return t}function _n(a){const t={};for(let i=0;i<a.length;i++){const s=_s(a[i]);for(const h in s)t[h]=s[h]}return t}function R_(a){const t=[];for(let i=0;i<a.length;i++)t.push(a[i].clone());return t}function Up(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:wt.workingColorSpace}const C_={clone:_s,merge:_n};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends ua{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=P_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=R_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const h in this.uniforms){const c=this.uniforms[h].value;c&&c.isTexture?i.uniforms[h]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?i.uniforms[h]={type:"c",value:c.getHex()}:c&&c.isVector2?i.uniforms[h]={type:"v2",value:c.toArray()}:c&&c.isVector3?i.uniforms[h]={type:"v3",value:c.toArray()}:c&&c.isVector4?i.uniforms[h]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?i.uniforms[h]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?i.uniforms[h]={type:"m4",value:c.toArray()}:i.uniforms[h]={value:c}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const h in this.extensions)this.extensions[h]===!0&&(s[h]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Fp extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Li}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new Y,Nf=new at,Lf=new at;class Hn extends Fp{constructor(t=50,i=1,s=.1,h=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=h,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=du*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return du*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,i){return this.getViewBounds(t,Nf,Lf),i.subVectors(Lf,Nf)}setViewOffset(t,i,s,h,u,c){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=h,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(nl*.5*this.fov)/this.zoom,s=2*i,h=this.aspect*s,u=-.5*h;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,g=c.fullHeight;u+=c.offsetX*h/m,i-=c.offsetY*s/g,h*=c.width/m,s*=c.height/g}const f=this.filmOffset;f!==0&&(u+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+h,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const os=-90,as=1;class D_ extends mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const h=new Hn(os,as,t,i);h.layers=this.layers,this.add(h);const u=new Hn(os,as,t,i);u.layers=this.layers,this.add(u);const c=new Hn(os,as,t,i);c.layers=this.layers,this.add(c);const f=new Hn(os,as,t,i);f.layers=this.layers,this.add(f);const m=new Hn(os,as,t,i);m.layers=this.layers,this.add(m);const g=new Hn(os,as,t,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,h,u,c,f,m]=i;for(const g of i)this.remove(g);if(t===Li)s.up.set(0,1,0),s.lookAt(1,0,0),h.up.set(0,1,0),h.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ol)s.up.set(0,-1,0),s.lookAt(-1,0,0),h.up.set(0,-1,0),h.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const g of i)this.add(g),g.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:h}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,f,m,g,S]=this.children,x=t.getRenderTarget(),T=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const P=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,h),t.render(i,u),t.setRenderTarget(s,1,h),t.render(i,c),t.setRenderTarget(s,2,h),t.render(i,f),t.setRenderTarget(s,3,h),t.render(i,m),t.setRenderTarget(s,4,h),t.render(i,g),s.texture.generateMipmaps=P,t.setRenderTarget(s,5,h),t.render(i,S),t.setRenderTarget(x,T,E),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class Bp extends wn{constructor(t=[],i=ms,s,h,u,c,f,m,g,S){super(t,i,s,h,u,c,f,m,g,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class N_ extends Ir{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},h=[s,s,s,s,s,s];this.texture=new Bp(h,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:fi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},h=new ys(5,5,5),u=new ir({name:"CubemapFromEquirect",uniforms:_s(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Mn,blending:er});u.uniforms.tEquirect.value=i;const c=new pi(h,u),f=i.minFilter;return i.minFilter===br&&(i.minFilter=fi),new D_(1,10,this).update(t,c),i.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,i=!0,s=!0,h=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(i,s,h);t.setRenderTarget(u)}}class eo extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let h=null,u=null,c=null;const f=this._targetRay,m=this._grip,g=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(g&&t.hand){c=!0;for(const P of t.hand.values()){const _=i.getJointPose(P,s),v=this._getHandJoint(g,P);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const S=g.joints["index-finger-tip"],x=g.joints["thumb-tip"],T=S.position.distanceTo(x.position),E=.02,R=.005;g.inputState.pinching&&T>E+R?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!g.inputState.pinching&&T<=E-R&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(h=i.getPose(t.targetRaySpace,s),h===null&&u!==null&&(h=u),h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,h.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(h.linearVelocity)):f.hasLinearVelocity=!1,h.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(h.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return f!==null&&(f.visible=h!==null),m!==null&&(m.visible=u!==null),g!==null&&(g.visible=c!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new eo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class O_ extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const _h=new Y,U_=new Y,F_=new lt;class Zi{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,h){return this.normal.set(t,i,s),this.constant=h,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const h=_h.subVectors(s,i).cross(U_.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(h,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(_h),h=this.normal.dot(s);if(h===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/h;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||F_.getNormalMatrix(t),h=this.coplanarPoint(_h).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-h.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Eu,Jc=new Y;class Au{constructor(t=new Zi,i=new Zi,s=new Zi,h=new Zi,u=new Zi,c=new Zi){this.planes=[t,i,s,h,u,c]}set(t,i,s,h,u,c){const f=this.planes;return f[0].copy(t),f[1].copy(i),f[2].copy(s),f[3].copy(h),f[4].copy(u),f[5].copy(c),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Li){const s=this.planes,h=t.elements,u=h[0],c=h[1],f=h[2],m=h[3],g=h[4],S=h[5],x=h[6],T=h[7],E=h[8],R=h[9],P=h[10],_=h[11],v=h[12],O=h[13],F=h[14],D=h[15];if(s[0].setComponents(m-u,T-g,_-E,D-v).normalize(),s[1].setComponents(m+u,T+g,_+E,D+v).normalize(),s[2].setComponents(m+c,T+S,_+R,D+O).normalize(),s[3].setComponents(m-c,T-S,_-R,D-O).normalize(),s[4].setComponents(m-f,T-x,_-P,D-F).normalize(),i===Li)s[5].setComponents(m+f,T+x,_+P,D+F).normalize();else if(i===ol)s[5].setComponents(f,x,P,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){const i=this.planes,s=t.center,h=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<h)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const h=i[s];if(Jc.x=h.normal.x>0?t.max.x:t.min.x,Jc.y=h.normal.y>0?t.max.y:t.min.y,Jc.z=h.normal.z>0?t.max.z:t.min.z,h.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kp extends wn{constructor(t,i,s=Cr,h,u,c,f=ii,m=ii,g,S=oa){if(S!==oa&&S!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,h,u,c,f,m,S,s,g),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ll extends Dr{constructor(t=1,i=1,s=1,h=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:h};const u=t/2,c=i/2,f=Math.floor(s),m=Math.floor(h),g=f+1,S=m+1,x=t/f,T=i/m,E=[],R=[],P=[],_=[];for(let v=0;v<S;v++){const O=v*T-c;for(let F=0;F<g;F++){const D=F*x-u;R.push(D,-O,0),P.push(0,0,1),_.push(F/f),_.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<f;O++){const F=O+g*v,D=O+g*(v+1),q=O+1+g*(v+1),H=O+1+g*v;E.push(F,D,H),E.push(D,q,H)}this.setIndex(E),this.setAttribute("position",new Rr(R,3)),this.setAttribute("normal",new Rr(P,3)),this.setAttribute("uv",new Rr(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.widthSegments,t.heightSegments)}}class B_ extends ua{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rp,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class k_ extends ua{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z_ extends ua{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zp extends mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const yh=new Wt,Of=new Y,Uf=new Y;class V_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Of.setFromMatrixPosition(t.matrixWorld),i.position.copy(Of),Uf.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Uf),i.updateMatrixWorld(),yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vp extends Fp{constructor(t=-1,i=1,s=1,h=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=h,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,h,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=h,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,h=(this.top+this.bottom)/2;let u=s-t,c=s+t,f=h+i,m=h-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=g*this.view.offsetX,c=u+g*this.view.width,f-=S*this.view.offsetY,m=f-S*this.view.height}this.projectionMatrix.makeOrthographic(u,c,f,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class H_ extends V_{constructor(){super(new Vp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G_ extends zp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new H_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class W_ extends zp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class q_ extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const Ff=new Wt;class J_{constructor(t,i,s=0,h=1/0){this.ray=new Mu(t,i),this.near=s,this.far=h,this.camera=null,this.layers=new wu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Ff.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ff),this}intersectObject(t,i=!0,s=[]){return fu(t,this,s,i),s.sort(Bf),s}intersectObjects(t,i=!0,s=[]){for(let h=0,u=t.length;h<u;h++)fu(t[h],this,s,i);return s.sort(Bf),s}}function Bf(a,t){return a.distance-t.distance}function fu(a,t,i,s){let h=!0;if(a.layers.test(t.layers)&&a.raycast(t,i)===!1&&(h=!1),h===!0&&s===!0){const u=a.children;for(let c=0,f=u.length;c<f;c++)fu(u[c],t,i,!0)}}class kf{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ut(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class X_ extends Pr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function zf(a,t,i,s){const h=$_(s);switch(i){case xp:return a*t;case Ep:return a*t;case Mp:return a*t*2;case wp:return a*t/h.components*h.byteLength;case yu:return a*t/h.components*h.byteLength;case Ap:return a*t*2/h.components*h.byteLength;case Su:return a*t*2/h.components*h.byteLength;case Tp:return a*t*3/h.components*h.byteLength;case ni:return a*t*4/h.components*h.byteLength;case xu:return a*t*4/h.components*h.byteLength;case Kc:case Zc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Qc:case el:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Vh:case Gh:return Math.max(a,16)*Math.max(t,8)/4;case zh:case Hh:return Math.max(a,8)*Math.max(t,8)/2;case Wh:case qh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Jh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case jh:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case eu:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case tu:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case nu:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case iu:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case ru:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case su:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case ou:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case tl:case au:case cu:return Math.ceil(a/4)*Math.ceil(t/4)*16;case bp:case lu:return Math.ceil(a/4)*Math.ceil(t/4)*8;case hu:case uu:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $_(a){switch(a){case Fi:case _p:return{byteLength:1,components:1};case ra:case yp:case ca:return{byteLength:2,components:1};case vu:case _u:return{byteLength:2,components:4};case Cr:case gu:case Ni:return{byteLength:4,components:1};case Sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hp(){let a=null,t=!1,i=null,s=null;function h(u,c){i(u,c),s=a.requestAnimationFrame(h)}return{start:function(){t!==!0&&i!==null&&(s=a.requestAnimationFrame(h),t=!0)},stop:function(){a.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){a=u}}}function Y_(a){const t=new WeakMap;function i(f,m){const g=f.array,S=f.usage,x=g.byteLength,T=a.createBuffer();a.bindBuffer(m,T),a.bufferData(m,g,S),f.onUploadCallback();let E;if(g instanceof Float32Array)E=a.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?E=a.HALF_FLOAT:E=a.UNSIGNED_SHORT;else if(g instanceof Int16Array)E=a.SHORT;else if(g instanceof Uint32Array)E=a.UNSIGNED_INT;else if(g instanceof Int32Array)E=a.INT;else if(g instanceof Int8Array)E=a.BYTE;else if(g instanceof Uint8Array)E=a.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)E=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:T,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:x}}function s(f,m,g){const S=m.array,x=m.updateRanges;if(a.bindBuffer(g,f),x.length===0)a.bufferSubData(g,0,S);else{x.sort((E,R)=>E.start-R.start);let T=0;for(let E=1;E<x.length;E++){const R=x[T],P=x[E];P.start<=R.start+R.count+1?R.count=Math.max(R.count,P.start+P.count-R.start):(++T,x[T]=P)}x.length=T+1;for(let E=0,R=x.length;E<R;E++){const P=x[E];a.bufferSubData(g,P.start*S.BYTES_PER_ELEMENT,S,P.start,P.count)}m.clearUpdateRanges()}m.onUploadCallback()}function h(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=t.get(f);m&&(a.deleteBuffer(m.buffer),t.delete(f))}function c(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const S=t.get(f);(!S||S.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=t.get(f);if(g===void 0)t.set(f,i(f,m));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,f,m),g.version=f.version}}return{get:h,remove:u,update:c}}var j_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K_=`#ifdef USE_ALPHAHASH
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
#endif`,Z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
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
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ry=`#ifdef USE_BATCHING
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
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ly=`#ifdef USE_IRIDESCENCE
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
#endif`,hy=`#ifdef USE_BUMPMAP
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yy=`#define PI 3.141592653589793
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
} // validated`,Sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,My=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",by=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fy=`#ifdef USE_GRADIENTMAP
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
}`,By=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vy=`uniform bool receiveShadow;
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
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xy=`PhysicalMaterial material;
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
#endif`,$y=`struct PhysicalMaterial {
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
}`,Yy=`
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
#endif`,jy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s0=`#if defined( USE_POINTS_UV )
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
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L0=`float getShadowMask() {
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
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`#include <common>
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
}`,nS=`#if DEPTH_PACKING == 3200
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
}`,iS=`#define DISTANCE
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
}`,rS=`#define DISTANCE
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`uniform float scale;
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
}`,cS=`uniform vec3 diffuse;
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
}`,lS=`#include <common>
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
}`,hS=`uniform vec3 diffuse;
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
}`,uS=`#define LAMBERT
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
}`,dS=`#define LAMBERT
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
}`,fS=`#define MATCAP
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
}`,pS=`#define MATCAP
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
}`,mS=`#define NORMAL
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
}`,gS=`#define NORMAL
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
}`,vS=`#define PHONG
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
}`,_S=`#define PHONG
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
}`,yS=`#define STANDARD
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
}`,SS=`#define STANDARD
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
}`,xS=`#define TOON
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
}`,TS=`#define TOON
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
}`,ES=`uniform float size;
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
}`,MS=`uniform vec3 diffuse;
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
}`,wS=`#include <common>
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
}`,AS=`uniform vec3 color;
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
}`,bS=`uniform float rotation;
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
}`,RS=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:j_,alphahash_pars_fragment:K_,alphamap_fragment:Z_,alphamap_pars_fragment:Q_,alphatest_fragment:ey,alphatest_pars_fragment:ty,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:ry,batching_vertex:sy,begin_vertex:oy,beginnormal_vertex:ay,bsdfs:cy,iridescence_fragment:ly,bumpmap_pars_fragment:hy,clipping_planes_fragment:uy,clipping_planes_pars_fragment:dy,clipping_planes_pars_vertex:fy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:vy,color_vertex:_y,common:yy,cube_uv_reflection_fragment:Sy,defaultnormal_vertex:xy,displacementmap_pars_vertex:Ty,displacementmap_vertex:Ey,emissivemap_fragment:My,emissivemap_pars_fragment:wy,colorspace_fragment:Ay,colorspace_pars_fragment:by,envmap_fragment:Ry,envmap_common_pars_fragment:Cy,envmap_pars_fragment:Iy,envmap_pars_vertex:Py,envmap_physical_pars_fragment:Hy,envmap_vertex:Dy,fog_vertex:Ny,fog_pars_vertex:Ly,fog_fragment:Oy,fog_pars_fragment:Uy,gradientmap_pars_fragment:Fy,lightmap_pars_fragment:By,lights_lambert_fragment:ky,lights_lambert_pars_fragment:zy,lights_pars_begin:Vy,lights_toon_fragment:Gy,lights_toon_pars_fragment:Wy,lights_phong_fragment:qy,lights_phong_pars_fragment:Jy,lights_physical_fragment:Xy,lights_physical_pars_fragment:$y,lights_fragment_begin:Yy,lights_fragment_maps:jy,lights_fragment_end:Ky,logdepthbuf_fragment:Zy,logdepthbuf_pars_fragment:Qy,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:t0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:r0,map_particle_pars_fragment:s0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:a0,morphinstance_vertex:c0,morphcolor_vertex:l0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:d0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:v0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:S0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:T0,opaque_fragment:E0,packing:M0,premultiplied_alpha_fragment:w0,project_vertex:A0,dithering_fragment:b0,dithering_pars_fragment:R0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:D0,shadowmap_vertex:N0,shadowmask_pars_fragment:L0,skinbase_vertex:O0,skinning_pars_vertex:U0,skinning_vertex:F0,skinnormal_vertex:B0,specularmap_fragment:k0,specularmap_pars_fragment:z0,tonemapping_fragment:V0,tonemapping_pars_fragment:H0,transmission_fragment:G0,transmission_pars_fragment:W0,uv_pars_fragment:q0,uv_pars_vertex:J0,uv_vertex:X0,worldpos_vertex:$0,background_vert:Y0,background_frag:j0,backgroundCube_vert:K0,backgroundCube_frag:Z0,cube_vert:Q0,cube_frag:eS,depth_vert:tS,depth_frag:nS,distanceRGBA_vert:iS,distanceRGBA_frag:rS,equirect_vert:sS,equirect_frag:oS,linedashed_vert:aS,linedashed_frag:cS,meshbasic_vert:lS,meshbasic_frag:hS,meshlambert_vert:uS,meshlambert_frag:dS,meshmatcap_vert:fS,meshmatcap_frag:pS,meshnormal_vert:mS,meshnormal_frag:gS,meshphong_vert:vS,meshphong_frag:_S,meshphysical_vert:yS,meshphysical_frag:SS,meshtoon_vert:xS,meshtoon_frag:TS,points_vert:ES,points_frag:MS,shadow_vert:wS,shadow_frag:AS,sprite_vert:bS,sprite_frag:RS},Me={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},di={basic:{uniforms:_n([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:_n([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new At(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:_n([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:_n([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:_n([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new At(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:_n([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:_n([Me.points,Me.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:_n([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:_n([Me.common,Me.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:_n([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:_n([Me.sprite,Me.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:_n([Me.common,Me.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:_n([Me.lights,Me.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};di.physical={uniforms:_n([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Xc={r:0,b:0,g:0},xr=new gi,CS=new Wt;function IS(a,t,i,s,h,u,c){const f=new At(0);let m=u===!0?0:1,g,S,x=null,T=0,E=null;function R(F){let D=F.isScene===!0?F.background:null;return D&&D.isTexture&&(D=(F.backgroundBlurriness>0?i:t).get(D)),D}function P(F){let D=!1;const q=R(F);q===null?v(f,m):q&&q.isColor&&(v(q,1),D=!0);const H=a.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(a.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function _(F,D){const q=R(D);q&&(q.isCubeTexture||q.mapping===cl)?(S===void 0&&(S=new pi(new ys(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:_s(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(H,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),h.update(S)),xr.copy(D.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),S.material.uniforms.envMap.value=q,S.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(CS.makeRotationFromEuler(xr)),S.material.toneMapped=wt.getTransfer(q.colorSpace)!==Nt,(x!==q||T!==q.version||E!==a.toneMapping)&&(S.material.needsUpdate=!0,x=q,T=q.version,E=a.toneMapping),S.layers.enableAll(),F.unshift(S,S.geometry,S.material,0,0,null)):q&&q.isTexture&&(g===void 0&&(g=new pi(new ll(2,2),new ir({name:"BackgroundMaterial",uniforms:_s(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),h.update(g)),g.material.uniforms.t2D.value=q,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=wt.getTransfer(q.colorSpace)!==Nt,q.matrixAutoUpdate===!0&&q.updateMatrix(),g.material.uniforms.uvTransform.value.copy(q.matrix),(x!==q||T!==q.version||E!==a.toneMapping)&&(g.material.needsUpdate=!0,x=q,T=q.version,E=a.toneMapping),g.layers.enableAll(),F.unshift(g,g.geometry,g.material,0,0,null))}function v(F,D){F.getRGB(Xc,Up(a)),s.buffers.color.setClear(Xc.r,Xc.g,Xc.b,D,c)}function O(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(F,D=1){f.set(F),m=D,v(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(F){m=F,v(f,m)},render:P,addToRenderList:_,dispose:O}}function PS(a,t){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},h=T(null);let u=h,c=!1;function f(C,k,oe,ne,fe){let pe=!1;const le=x(ne,oe,k);u!==le&&(u=le,g(u.object)),pe=E(C,ne,oe,fe),pe&&R(C,ne,oe,fe),fe!==null&&t.update(fe,a.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,D(C,k,oe,ne),fe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(fe).buffer))}function m(){return a.createVertexArray()}function g(C){return a.bindVertexArray(C)}function S(C){return a.deleteVertexArray(C)}function x(C,k,oe){const ne=oe.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let pe=fe[k.id];pe===void 0&&(pe={},fe[k.id]=pe);let le=pe[ne];return le===void 0&&(le=T(m()),pe[ne]=le),le}function T(C){const k=[],oe=[],ne=[];for(let fe=0;fe<i;fe++)k[fe]=0,oe[fe]=0,ne[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:oe,attributeDivisors:ne,object:C,attributes:{},index:null}}function E(C,k,oe,ne){const fe=u.attributes,pe=k.attributes;let le=0;const ge=oe.getAttributes();for(const se in ge)if(ge[se].location>=0){const De=fe[se];let Ge=pe[se];if(Ge===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(Ge=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(Ge=C.instanceColor)),De===void 0||De.attribute!==Ge||Ge&&De.data!==Ge.data)return!0;le++}return u.attributesNum!==le||u.index!==ne}function R(C,k,oe,ne){const fe={},pe=k.attributes;let le=0;const ge=oe.getAttributes();for(const se in ge)if(ge[se].location>=0){let De=pe[se];De===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(De=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(De=C.instanceColor));const Ge={};Ge.attribute=De,De&&De.data&&(Ge.data=De.data),fe[se]=Ge,le++}u.attributes=fe,u.attributesNum=le,u.index=ne}function P(){const C=u.newAttributes;for(let k=0,oe=C.length;k<oe;k++)C[k]=0}function _(C){v(C,0)}function v(C,k){const oe=u.newAttributes,ne=u.enabledAttributes,fe=u.attributeDivisors;oe[C]=1,ne[C]===0&&(a.enableVertexAttribArray(C),ne[C]=1),fe[C]!==k&&(a.vertexAttribDivisor(C,k),fe[C]=k)}function O(){const C=u.newAttributes,k=u.enabledAttributes;for(let oe=0,ne=k.length;oe<ne;oe++)k[oe]!==C[oe]&&(a.disableVertexAttribArray(oe),k[oe]=0)}function F(C,k,oe,ne,fe,pe,le){le===!0?a.vertexAttribIPointer(C,k,oe,fe,pe):a.vertexAttribPointer(C,k,oe,ne,fe,pe)}function D(C,k,oe,ne){P();const fe=ne.attributes,pe=oe.getAttributes(),le=k.defaultAttributeValues;for(const ge in pe){const se=pe[ge];if(se.location>=0){let K=fe[ge];if(K===void 0&&(ge==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),ge==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),K!==void 0){const De=K.normalized,Ge=K.itemSize,ct=t.get(K);if(ct===void 0)continue;const Et=ct.buffer,ae=ct.type,xe=ct.bytesPerElement,Fe=ae===a.INT||ae===a.UNSIGNED_INT||K.gpuType===gu;if(K.isInterleavedBufferAttribute){const be=K.data,$e=be.stride,yt=K.offset;if(be.isInstancedInterleavedBuffer){for(let Ke=0;Ke<se.locationSize;Ke++)v(se.location+Ke,be.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ke=0;Ke<se.locationSize;Ke++)_(se.location+Ke);a.bindBuffer(a.ARRAY_BUFFER,Et);for(let Ke=0;Ke<se.locationSize;Ke++)F(se.location+Ke,Ge/se.locationSize,ae,De,$e*xe,(yt+Ge/se.locationSize*Ke)*xe,Fe)}else{if(K.isInstancedBufferAttribute){for(let be=0;be<se.locationSize;be++)v(se.location+be,K.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let be=0;be<se.locationSize;be++)_(se.location+be);a.bindBuffer(a.ARRAY_BUFFER,Et);for(let be=0;be<se.locationSize;be++)F(se.location+be,Ge/se.locationSize,ae,De,Ge*xe,Ge/se.locationSize*be*xe,Fe)}}else if(le!==void 0){const De=le[ge];if(De!==void 0)switch(De.length){case 2:a.vertexAttrib2fv(se.location,De);break;case 3:a.vertexAttrib3fv(se.location,De);break;case 4:a.vertexAttrib4fv(se.location,De);break;default:a.vertexAttrib1fv(se.location,De)}}}}O()}function q(){X();for(const C in s){const k=s[C];for(const oe in k){const ne=k[oe];for(const fe in ne)S(ne[fe].object),delete ne[fe];delete k[oe]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const k=s[C.id];for(const oe in k){const ne=k[oe];for(const fe in ne)S(ne[fe].object),delete ne[fe];delete k[oe]}delete s[C.id]}function z(C){for(const k in s){const oe=s[k];if(oe[C.id]===void 0)continue;const ne=oe[C.id];for(const fe in ne)S(ne[fe].object),delete ne[fe];delete oe[C.id]}}function X(){N(),c=!0,u!==h&&(u=h,g(u.object))}function N(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:f,reset:X,resetDefaultState:N,dispose:q,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:P,enableAttribute:_,disableUnusedAttributes:O}}function DS(a,t,i){let s;function h(g){s=g}function u(g,S){a.drawArrays(s,g,S),i.update(S,s,1)}function c(g,S,x){x!==0&&(a.drawArraysInstanced(s,g,S,x),i.update(S,s,x))}function f(g,S,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,S,0,x);let E=0;for(let R=0;R<x;R++)E+=S[R];i.update(E,s,1)}function m(g,S,x,T){if(x===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<g.length;R++)c(g[R],S[R],T[R]);else{E.multiDrawArraysInstancedWEBGL(s,g,0,S,0,T,0,x);let R=0;for(let P=0;P<x;P++)R+=S[P]*T[P];i.update(R,s,1)}}this.setMode=h,this.render=u,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function NS(a,t,i,s){let h;function u(){if(h!==void 0)return h;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");h=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else h=0;return h}function c(z){return!(z!==ni&&s.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const X=z===ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Fi&&s.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ni&&!X)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const S=m(g);S!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",S,"instead."),g=S);const x=i.logarithmicDepthBuffer===!0,T=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),E=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),R=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),O=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),F=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),q=R>0,H=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:x,reverseDepthBuffer:T,maxTextures:E,maxVertexTextures:R,maxTextureSize:P,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:O,maxVaryings:F,maxFragmentUniforms:D,vertexTextures:q,maxSamples:H}}function LS(a){const t=this;let i=null,s=0,h=!1,u=!1;const c=new Zi,f=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,T){const E=x.length!==0||T||s!==0||h;return h=T,s=x.length,E},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,T){i=S(x,T,0)},this.setState=function(x,T,E){const R=x.clippingPlanes,P=x.clipIntersection,_=x.clipShadows,v=a.get(x);if(!h||R===null||R.length===0||u&&!_)u?S(null):g();else{const O=u?0:s,F=O*4;let D=v.clippingState||null;m.value=D,D=S(R,T,F,E);for(let q=0;q!==F;++q)D[q]=i[q];v.clippingState=D,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=O}};function g(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(x,T,E,R){const P=x!==null?x.length:0;let _=null;if(P!==0){if(_=m.value,R!==!0||_===null){const v=E+P*4,O=T.matrixWorldInverse;f.getNormalMatrix(O),(_===null||_.length<v)&&(_=new Float32Array(v));for(let F=0,D=E;F!==P;++F,D+=4)c.copy(x[F]).applyMatrix4(O,f),c.normal.toArray(_,D),_[D+3]=c.constant}m.value=_,m.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,_}}function OS(a){let t=new WeakMap;function i(c,f){return f===Uh?c.mapping=ms:f===Fh&&(c.mapping=gs),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Uh||f===Fh)if(t.has(c)){const m=t.get(c).texture;return i(m,c.mapping)}else{const m=c.image;if(m&&m.height>0){const g=new N_(m.height);return g.fromEquirectangularTexture(a,c),t.set(c,g),c.addEventListener("dispose",h),i(g.texture,c.mapping)}else return null}}return c}function h(c){const f=c.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const hs=4,Vf=[.125,.215,.35,.446,.526,.582],wr=20,Sh=new Vp,Hf=new At;let xh=null,Th=0,Eh=0,Mh=!1;const Er=(1+Math.sqrt(5))/2,cs=1/Er,Gf=[new Y(-Er,cs,0),new Y(Er,cs,0),new Y(-cs,0,Er),new Y(cs,0,Er),new Y(0,Er,-cs),new Y(0,Er,cs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],US=new Y;class Wf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,h=100,u={}){const{size:c=256,position:f=US}=u;xh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,h,m,f),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xh,Th,Eh),this._renderer.xr.enabled=Mh,t.scissorTest=!1,$c(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:ca,format:ni,colorSpace:vs,depthBuffer:!1},h=qf(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qf(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FS(u)),this._blurMaterial=BS(u,t,i)}return h}_compileMaterial(t){const i=new pi(this._lodPlanes[0],t);this._renderer.compile(i,Sh)}_sceneToCubeUV(t,i,s,h,u){const m=new Hn(90,1,i,s),g=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],x=this._renderer,T=x.autoClear,E=x.toneMapping;x.getClearColor(Hf),x.toneMapping=tr,x.autoClear=!1;const R=new Np({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),P=new pi(new ys,R);let _=!1;const v=t.background;v?v.isColor&&(R.color.copy(v),t.background=null,_=!0):(R.color.copy(Hf),_=!0);for(let O=0;O<6;O++){const F=O%3;F===0?(m.up.set(0,g[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+S[O],u.y,u.z)):F===1?(m.up.set(0,0,g[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+S[O],u.z)):(m.up.set(0,g[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+S[O]));const D=this._cubeSize;$c(h,F*D,O>2?D:0,D,D),x.setRenderTarget(h),_&&x.render(P,m),x.render(t,m)}P.geometry.dispose(),P.material.dispose(),x.toneMapping=E,x.autoClear=T,t.background=v}_textureToCubeUV(t,i){const s=this._renderer,h=t.mapping===ms||t.mapping===gs;h?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());const u=h?this._cubemapMaterial:this._equirectMaterial,c=new pi(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=t;const m=this._cubeSize;$c(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(c,Sh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const h=this._lodPlanes.length;for(let u=1;u<h;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=Gf[(h-u-1)%Gf.length];this._blur(t,u-1,u,c,f)}i.autoClear=s}_blur(t,i,s,h,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,i,s,h,"latitudinal",u),this._halfBlur(c,t,s,s,h,"longitudinal",u)}_halfBlur(t,i,s,h,u,c,f){const m=this._renderer,g=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,x=new pi(this._lodPlanes[h],g),T=g.uniforms,E=this._sizeLods[s]-1,R=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*wr-1),P=u/R,_=isFinite(u)?1+Math.floor(S*P):wr;_>wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${wr}`);const v=[];let O=0;for(let z=0;z<wr;++z){const X=z/P,N=Math.exp(-X*X/2);v.push(N),z===0?O+=N:z<_&&(O+=2*N)}for(let z=0;z<v.length;z++)v[z]=v[z]/O;T.envMap.value=t.texture,T.samples.value=_,T.weights.value=v,T.latitudinal.value=c==="latitudinal",f&&(T.poleAxis.value=f);const{_lodMax:F}=this;T.dTheta.value=R,T.mipInt.value=F-s;const D=this._sizeLods[h],q=3*D*(h>F-hs?h-F+hs:0),H=4*(this._cubeSize-D);$c(i,q,H,3*D,2*D),m.setRenderTarget(i),m.render(x,Sh)}}function FS(a){const t=[],i=[],s=[];let h=a;const u=a-hs+1+Vf.length;for(let c=0;c<u;c++){const f=Math.pow(2,h);i.push(f);let m=1/f;c>a-hs?m=Vf[c-a+hs-1]:c===0&&(m=0),s.push(m);const g=1/(f-2),S=-g,x=1+g,T=[S,S,x,S,x,x,S,S,x,x,S,x],E=6,R=6,P=3,_=2,v=1,O=new Float32Array(P*R*E),F=new Float32Array(_*R*E),D=new Float32Array(v*R*E);for(let H=0;H<E;H++){const z=H%3*2/3-1,X=H>2?0:-1,N=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];O.set(N,P*R*H),F.set(T,_*R*H);const C=[H,H,H,H,H,H];D.set(C,v*R*H)}const q=new Dr;q.setAttribute("position",new mi(O,P)),q.setAttribute("uv",new mi(F,_)),q.setAttribute("faceIndex",new mi(D,v)),t.push(q),h>hs&&h--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function qf(a,t,i){const s=new Ir(a,t,i);return s.texture.mapping=cl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function $c(a,t,i,s,h){a.viewport.set(t,i,s,h),a.scissor.set(t,i,s,h)}function BS(a,t,i){const s=new Float32Array(wr),h=new Y(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:bu(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Jf(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Xf(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function bu(){return`

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
	`}function kS(a){let t=new WeakMap,i=null;function s(f){if(f&&f.isTexture){const m=f.mapping,g=m===Uh||m===Fh,S=m===ms||m===gs;if(g||S){let x=t.get(f);const T=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==T)return i===null&&(i=new Wf(a)),x=g?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),x.texture;if(x!==void 0)return x.texture;{const E=f.image;return g&&E&&E.height>0||S&&E&&h(E)?(i===null&&(i=new Wf(a)),x=g?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),f.addEventListener("dispose",u),x.texture):null}}}return f}function h(f){let m=0;const g=6;for(let S=0;S<g;S++)f[S]!==void 0&&m++;return m===g}function u(f){const m=f.target;m.removeEventListener("dispose",u);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function c(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:c}}function zS(a){const t={};function i(s){if(t[s]!==void 0)return t[s];let h;switch(s){case"WEBGL_depth_texture":h=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":h=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":h=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":h=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:h=a.getExtension(s)}return t[s]=h,h}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const h=i(s);return h===null&&il("THREE.WebGLRenderer: "+s+" extension not supported."),h}}}function VS(a,t,i,s){const h={},u=new WeakMap;function c(x){const T=x.target;T.index!==null&&t.remove(T.index);for(const R in T.attributes)t.remove(T.attributes[R]);T.removeEventListener("dispose",c),delete h[T.id];const E=u.get(T);E&&(t.remove(E),u.delete(T)),s.releaseStatesOfGeometry(T),T.isInstancedBufferGeometry===!0&&delete T._maxInstanceCount,i.memory.geometries--}function f(x,T){return h[T.id]===!0||(T.addEventListener("dispose",c),h[T.id]=!0,i.memory.geometries++),T}function m(x){const T=x.attributes;for(const E in T)t.update(T[E],a.ARRAY_BUFFER)}function g(x){const T=[],E=x.index,R=x.attributes.position;let P=0;if(E!==null){const O=E.array;P=E.version;for(let F=0,D=O.length;F<D;F+=3){const q=O[F+0],H=O[F+1],z=O[F+2];T.push(q,H,H,z,z,q)}}else if(R!==void 0){const O=R.array;P=R.version;for(let F=0,D=O.length/3-1;F<D;F+=3){const q=F+0,H=F+1,z=F+2;T.push(q,H,H,z,z,q)}}else return;const _=new(Ip(T)?Op:Lp)(T,1);_.version=P;const v=u.get(x);v&&t.remove(v),u.set(x,_)}function S(x){const T=u.get(x);if(T){const E=x.index;E!==null&&T.version<E.version&&g(x)}else g(x);return u.get(x)}return{get:f,update:m,getWireframeAttribute:S}}function HS(a,t,i){let s;function h(T){s=T}let u,c;function f(T){u=T.type,c=T.bytesPerElement}function m(T,E){a.drawElements(s,E,u,T*c),i.update(E,s,1)}function g(T,E,R){R!==0&&(a.drawElementsInstanced(s,E,u,T*c,R),i.update(E,s,R))}function S(T,E,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,u,T,0,R);let _=0;for(let v=0;v<R;v++)_+=E[v];i.update(_,s,1)}function x(T,E,R,P){if(R===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<T.length;v++)g(T[v]/c,E[v],P[v]);else{_.multiDrawElementsInstancedWEBGL(s,E,0,u,T,0,P,0,R);let v=0;for(let O=0;O<R;O++)v+=E[O]*P[O];i.update(v,s,1)}}this.setMode=h,this.setIndex=f,this.render=m,this.renderInstances=g,this.renderMultiDraw=S,this.renderMultiDrawInstances=x}function GS(a){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,c,f){switch(i.calls++,c){case a.TRIANGLES:i.triangles+=f*(u/3);break;case a.LINES:i.lines+=f*(u/2);break;case a.LINE_STRIP:i.lines+=f*(u-1);break;case a.LINE_LOOP:i.lines+=f*u;break;case a.POINTS:i.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function h(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:h,update:s}}function WS(a,t,i){const s=new WeakMap,h=new jt;function u(c,f,m){const g=c.morphTargetInfluences,S=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=S!==void 0?S.length:0;let T=s.get(f);if(T===void 0||T.count!==x){let C=function(){X.dispose(),s.delete(f),f.removeEventListener("dispose",C)};var E=C;T!==void 0&&T.texture.dispose();const R=f.morphAttributes.position!==void 0,P=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],O=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let D=0;R===!0&&(D=1),P===!0&&(D=2),_===!0&&(D=3);let q=f.attributes.position.count*D,H=1;q>t.maxTextureSize&&(H=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const z=new Float32Array(q*H*4*x),X=new Pp(z,q,H,x);X.type=Ni,X.needsUpdate=!0;const N=D*4;for(let k=0;k<x;k++){const oe=v[k],ne=O[k],fe=F[k],pe=q*H*4*k;for(let le=0;le<oe.count;le++){const ge=le*N;R===!0&&(h.fromBufferAttribute(oe,le),z[pe+ge+0]=h.x,z[pe+ge+1]=h.y,z[pe+ge+2]=h.z,z[pe+ge+3]=0),P===!0&&(h.fromBufferAttribute(ne,le),z[pe+ge+4]=h.x,z[pe+ge+5]=h.y,z[pe+ge+6]=h.z,z[pe+ge+7]=0),_===!0&&(h.fromBufferAttribute(fe,le),z[pe+ge+8]=h.x,z[pe+ge+9]=h.y,z[pe+ge+10]=h.z,z[pe+ge+11]=fe.itemSize===4?h.w:1)}}T={count:x,texture:X,size:new at(q,H)},s.set(f,T),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",c.morphTexture,i);else{let R=0;for(let _=0;_<g.length;_++)R+=g[_];const P=f.morphTargetsRelative?1:1-R;m.getUniforms().setValue(a,"morphTargetBaseInfluence",P),m.getUniforms().setValue(a,"morphTargetInfluences",g)}m.getUniforms().setValue(a,"morphTargetsTexture",T.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",T.size)}return{update:u}}function qS(a,t,i,s){let h=new WeakMap;function u(m){const g=s.render.frame,S=m.geometry,x=t.get(m,S);if(h.get(x)!==g&&(t.update(x),h.set(x,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),h.get(m)!==g&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),h.set(m,g))),m.isSkinnedMesh){const T=m.skeleton;h.get(T)!==g&&(T.update(),h.set(T,g))}return x}function c(){h=new WeakMap}function f(m){const g=m.target;g.removeEventListener("dispose",f),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:c}}const Gp=new wn,$f=new kp(1,1),Wp=new Pp,qp=new g_,Jp=new Bp,Yf=[],jf=[],Kf=new Float32Array(16),Zf=new Float32Array(9),Qf=new Float32Array(4);function Ss(a,t,i){const s=a[0];if(s<=0||s>0)return a;const h=t*i;let u=Yf[h];if(u===void 0&&(u=new Float32Array(h),Yf[h]=u),t!==0){s.toArray(u,0);for(let c=1,f=0;c!==t;++c)f+=i,a[c].toArray(u,f)}return u}function rn(a,t){if(a.length!==t.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==t[i])return!1;return!0}function sn(a,t){for(let i=0,s=t.length;i<s;i++)a[i]=t[i]}function hl(a,t){let i=jf[t];i===void 0&&(i=new Int32Array(t),jf[t]=i);for(let s=0;s!==t;++s)i[s]=a.allocateTextureUnit();return i}function JS(a,t){const i=this.cache;i[0]!==t&&(a.uniform1f(this.addr,t),i[0]=t)}function XS(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rn(i,t))return;a.uniform2fv(this.addr,t),sn(i,t)}}function $S(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(rn(i,t))return;a.uniform3fv(this.addr,t),sn(i,t)}}function YS(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rn(i,t))return;a.uniform4fv(this.addr,t),sn(i,t)}}function jS(a,t){const i=this.cache,s=t.elements;if(s===void 0){if(rn(i,t))return;a.uniformMatrix2fv(this.addr,!1,t),sn(i,t)}else{if(rn(i,s))return;Qf.set(s),a.uniformMatrix2fv(this.addr,!1,Qf),sn(i,s)}}function KS(a,t){const i=this.cache,s=t.elements;if(s===void 0){if(rn(i,t))return;a.uniformMatrix3fv(this.addr,!1,t),sn(i,t)}else{if(rn(i,s))return;Zf.set(s),a.uniformMatrix3fv(this.addr,!1,Zf),sn(i,s)}}function ZS(a,t){const i=this.cache,s=t.elements;if(s===void 0){if(rn(i,t))return;a.uniformMatrix4fv(this.addr,!1,t),sn(i,t)}else{if(rn(i,s))return;Kf.set(s),a.uniformMatrix4fv(this.addr,!1,Kf),sn(i,s)}}function QS(a,t){const i=this.cache;i[0]!==t&&(a.uniform1i(this.addr,t),i[0]=t)}function ex(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rn(i,t))return;a.uniform2iv(this.addr,t),sn(i,t)}}function tx(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(rn(i,t))return;a.uniform3iv(this.addr,t),sn(i,t)}}function nx(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rn(i,t))return;a.uniform4iv(this.addr,t),sn(i,t)}}function ix(a,t){const i=this.cache;i[0]!==t&&(a.uniform1ui(this.addr,t),i[0]=t)}function rx(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rn(i,t))return;a.uniform2uiv(this.addr,t),sn(i,t)}}function sx(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(rn(i,t))return;a.uniform3uiv(this.addr,t),sn(i,t)}}function ox(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rn(i,t))return;a.uniform4uiv(this.addr,t),sn(i,t)}}function ax(a,t,i){const s=this.cache,h=i.allocateTextureUnit();s[0]!==h&&(a.uniform1i(this.addr,h),s[0]=h);let u;this.type===a.SAMPLER_2D_SHADOW?($f.compareFunction=Cp,u=$f):u=Gp,i.setTexture2D(t||u,h)}function cx(a,t,i){const s=this.cache,h=i.allocateTextureUnit();s[0]!==h&&(a.uniform1i(this.addr,h),s[0]=h),i.setTexture3D(t||qp,h)}function lx(a,t,i){const s=this.cache,h=i.allocateTextureUnit();s[0]!==h&&(a.uniform1i(this.addr,h),s[0]=h),i.setTextureCube(t||Jp,h)}function hx(a,t,i){const s=this.cache,h=i.allocateTextureUnit();s[0]!==h&&(a.uniform1i(this.addr,h),s[0]=h),i.setTexture2DArray(t||Wp,h)}function ux(a){switch(a){case 5126:return JS;case 35664:return XS;case 35665:return $S;case 35666:return YS;case 35674:return jS;case 35675:return KS;case 35676:return ZS;case 5124:case 35670:return QS;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return rx;case 36295:return sx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return hx}}function dx(a,t){a.uniform1fv(this.addr,t)}function fx(a,t){const i=Ss(t,this.size,2);a.uniform2fv(this.addr,i)}function px(a,t){const i=Ss(t,this.size,3);a.uniform3fv(this.addr,i)}function mx(a,t){const i=Ss(t,this.size,4);a.uniform4fv(this.addr,i)}function gx(a,t){const i=Ss(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function vx(a,t){const i=Ss(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function _x(a,t){const i=Ss(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function yx(a,t){a.uniform1iv(this.addr,t)}function Sx(a,t){a.uniform2iv(this.addr,t)}function xx(a,t){a.uniform3iv(this.addr,t)}function Tx(a,t){a.uniform4iv(this.addr,t)}function Ex(a,t){a.uniform1uiv(this.addr,t)}function Mx(a,t){a.uniform2uiv(this.addr,t)}function wx(a,t){a.uniform3uiv(this.addr,t)}function Ax(a,t){a.uniform4uiv(this.addr,t)}function bx(a,t,i){const s=this.cache,h=t.length,u=hl(i,h);rn(s,u)||(a.uniform1iv(this.addr,u),sn(s,u));for(let c=0;c!==h;++c)i.setTexture2D(t[c]||Gp,u[c])}function Rx(a,t,i){const s=this.cache,h=t.length,u=hl(i,h);rn(s,u)||(a.uniform1iv(this.addr,u),sn(s,u));for(let c=0;c!==h;++c)i.setTexture3D(t[c]||qp,u[c])}function Cx(a,t,i){const s=this.cache,h=t.length,u=hl(i,h);rn(s,u)||(a.uniform1iv(this.addr,u),sn(s,u));for(let c=0;c!==h;++c)i.setTextureCube(t[c]||Jp,u[c])}function Ix(a,t,i){const s=this.cache,h=t.length,u=hl(i,h);rn(s,u)||(a.uniform1iv(this.addr,u),sn(s,u));for(let c=0;c!==h;++c)i.setTexture2DArray(t[c]||Wp,u[c])}function Px(a){switch(a){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return vx;case 35676:return _x;case 5124:case 35670:return yx;case 35667:case 35671:return Sx;case 35668:case 35672:return xx;case 35669:case 35673:return Tx;case 5125:return Ex;case 36294:return Mx;case 36295:return wx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Ix}}class Dx{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ux(i.type)}}class Nx{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Px(i.type)}}class Lx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const h=this.seq;for(let u=0,c=h.length;u!==c;++u){const f=h[u];f.setValue(t,i[f.id],s)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function ep(a,t){a.seq.push(t),a.map[t.id]=t}function Ox(a,t,i){const s=a.name,h=s.length;for(wh.lastIndex=0;;){const u=wh.exec(s),c=wh.lastIndex;let f=u[1];const m=u[2]==="]",g=u[3];if(m&&(f=f|0),g===void 0||g==="["&&c+2===h){ep(i,g===void 0?new Dx(f,a,t):new Nx(f,a,t));break}else{let x=i.map[f];x===void 0&&(x=new Lx(f),ep(i,x)),i=x}}}class rl{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const u=t.getActiveUniform(i,h),c=t.getUniformLocation(i,u.name);Ox(u,c,this)}}setValue(t,i,s,h){const u=this.map[i];u!==void 0&&u.setValue(t,s,h)}setOptional(t,i,s){const h=i[s];h!==void 0&&this.setValue(t,s,h)}static upload(t,i,s,h){for(let u=0,c=i.length;u!==c;++u){const f=i[u],m=s[f.id];m.needsUpdate!==!1&&f.setValue(t,m.value,h)}}static seqWithValue(t,i){const s=[];for(let h=0,u=t.length;h!==u;++h){const c=t[h];c.id in i&&s.push(c)}return s}}function tp(a,t,i){const s=a.createShader(t);return a.shaderSource(s,i),a.compileShader(s),s}const Ux=37297;let Fx=0;function Bx(a,t){const i=a.split(`
`),s=[],h=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let c=h;c<u;c++){const f=c+1;s.push(`${f===t?">":" "} ${f}: ${i[c]}`)}return s.join(`
`)}const np=new lt;function kx(a){wt._getMatrix(np,wt.workingColorSpace,a);const t=`mat3( ${np.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(a)){case sl:return[t,"LinearTransferOETF"];case Nt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function ip(a,t,i){const s=a.getShaderParameter(t,a.COMPILE_STATUS),h=a.getShaderInfoLog(t).trim();if(s&&h==="")return"";const u=/ERROR: 0:(\d+)/.exec(h);if(u){const c=parseInt(u[1]);return i.toUpperCase()+`

`+h+`

`+Bx(a.getShaderSource(t),c)}else return h}function zx(a,t){const i=kx(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Vx(a,t){let i;switch(t){case Vv:i="Linear";break;case Hv:i="Reinhard";break;case Gv:i="Cineon";break;case Wv:i="ACESFilmic";break;case Jv:i="AgX";break;case Xv:i="Neutral";break;case qv:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new Y;function Hx(){wt.getLuminanceCoefficients(Yc);const a=Yc.x.toFixed(4),t=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gx(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function Wx(a){const t=[];for(const i in a){const s=a[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function qx(a,t){const i={},s=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let h=0;h<s;h++){const u=a.getActiveAttrib(t,h),c=u.name;let f=1;u.type===a.FLOAT_MAT2&&(f=2),u.type===a.FLOAT_MAT3&&(f=3),u.type===a.FLOAT_MAT4&&(f=4),i[c]={type:u.type,location:a.getAttribLocation(t,c),locationSize:f}}return i}function to(a){return a!==""}function rp(a,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sp(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(a){return a.replace(Jx,$x)}const Xx=new Map;function $x(a,t){let i=ht[t];if(i===void 0){const s=Xx.get(t);if(s!==void 0)i=ht[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return pu(i)}const Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function op(a){return a.replace(Yx,jx)}function jx(a,t,i,s){let h="";for(let u=parseInt(t);u<parseInt(i);u++)h+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return h}function ap(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kx(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===mp?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Sv?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function Zx(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case cl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qx(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function eT(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case gp:t="ENVMAP_BLENDING_MULTIPLY";break;case kv:t="ENVMAP_BLENDING_MIX";break;case zv:t="ENVMAP_BLENDING_ADD";break}return t}function tT(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function nT(a,t,i,s){const h=a.getContext(),u=i.defines;let c=i.vertexShader,f=i.fragmentShader;const m=Kx(i),g=Zx(i),S=Qx(i),x=eT(i),T=tT(i),E=Gx(i),R=Wx(u),P=h.createProgram();let _,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(to).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(to).join(`
`),v.length>0&&(v+=`
`)):(_=[ap(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),v=[ap(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",i.envMap?"#define "+x:"",T?"#define CUBEUV_TEXEL_WIDTH "+T.texelWidth:"",T?"#define CUBEUV_TEXEL_HEIGHT "+T.texelHeight:"",T?"#define CUBEUV_MAX_MIP "+T.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==tr?"#define TONE_MAPPING":"",i.toneMapping!==tr?ht.tonemapping_pars_fragment:"",i.toneMapping!==tr?Vx("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,zx("linearToOutputTexel",i.outputColorSpace),Hx(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(to).join(`
`)),c=pu(c),c=rp(c,i),c=sp(c,i),f=pu(f),f=rp(f,i),f=sp(f,i),c=op(c),f=op(f),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,_=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",i.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const F=O+_+c,D=O+v+f,q=tp(h,h.VERTEX_SHADER,F),H=tp(h,h.FRAGMENT_SHADER,D);h.attachShader(P,q),h.attachShader(P,H),i.index0AttributeName!==void 0?h.bindAttribLocation(P,0,i.index0AttributeName):i.morphTargets===!0&&h.bindAttribLocation(P,0,"position"),h.linkProgram(P);function z(k){if(a.debug.checkShaderErrors){const oe=h.getProgramInfoLog(P).trim(),ne=h.getShaderInfoLog(q).trim(),fe=h.getShaderInfoLog(H).trim();let pe=!0,le=!0;if(h.getProgramParameter(P,h.LINK_STATUS)===!1)if(pe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(h,P,q,H);else{const ge=ip(h,q,"vertex"),se=ip(h,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+h.getError()+" - VALIDATE_STATUS "+h.getProgramParameter(P,h.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+oe+`
`+ge+`
`+se)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ne===""||fe==="")&&(le=!1);le&&(k.diagnostics={runnable:pe,programLog:oe,vertexShader:{log:ne,prefix:_},fragmentShader:{log:fe,prefix:v}})}h.deleteShader(q),h.deleteShader(H),X=new rl(h,P),N=qx(h,P)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=h.getProgramParameter(P,Ux)),C},this.destroy=function(){s.releaseStatesOfProgram(this),h.deleteProgram(P),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Fx++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=q,this.fragmentShader=H,this}let iT=0;class rT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,h=this._getShaderStage(i),u=this._getShaderStage(s),c=this._getShaderCacheForMaterial(t);return c.has(h)===!1&&(c.add(h),h.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new sT(t),i.set(t,s)),s}}class sT{constructor(t){this.id=iT++,this.code=t,this.usedTimes=0}}function oT(a,t,i,s,h,u,c){const f=new wu,m=new rT,g=new Set,S=[],x=h.logarithmicDepthBuffer,T=h.vertexTextures;let E=h.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(N){return g.add(N),N===0?"uv":`uv${N}`}function _(N,C,k,oe,ne){const fe=oe.fog,pe=ne.geometry,le=N.isMeshStandardMaterial?oe.environment:null,ge=(N.isMeshStandardMaterial?i:t).get(N.envMap||le),se=ge&&ge.mapping===cl?ge.image.height:null,K=R[N.type];N.precision!==null&&(E=h.getMaxPrecision(N.precision),E!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",E,"instead."));const De=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Ge=De!==void 0?De.length:0;let ct=0;pe.morphAttributes.position!==void 0&&(ct=1),pe.morphAttributes.normal!==void 0&&(ct=2),pe.morphAttributes.color!==void 0&&(ct=3);let Et,ae,xe,Fe;if(K){const gt=di[K];Et=gt.vertexShader,ae=gt.fragmentShader}else Et=N.vertexShader,ae=N.fragmentShader,m.update(N),xe=m.getVertexShaderID(N),Fe=m.getFragmentShaderID(N);const be=a.getRenderTarget(),$e=a.state.buffers.depth.getReversed(),yt=ne.isInstancedMesh===!0,Ke=ne.isBatchedMesh===!0,zt=!!N.map,Ft=!!N.matcap,dt=!!ge,U=!!N.aoMap,te=!!N.lightMap,st=!!N.bumpMap,nt=!!N.normalMap,ke=!!N.displacementMap,Ct=!!N.emissiveMap,Te=!!N.metalnessMap,L=!!N.roughnessMap,w=N.anisotropy>0,j=N.clearcoat>0,ue=N.dispersion>0,me=N.iridescence>0,ce=N.sheen>0,Ne=N.transmission>0,Ee=w&&!!N.anisotropyMap,Ie=j&&!!N.clearcoatMap,mt=j&&!!N.clearcoatNormalMap,Se=j&&!!N.clearcoatRoughnessMap,Le=me&&!!N.iridescenceMap,je=me&&!!N.iridescenceThicknessMap,Ze=ce&&!!N.sheenColorMap,Oe=ce&&!!N.sheenRoughnessMap,ot=!!N.specularMap,it=!!N.specularColorMap,Rt=!!N.specularIntensityMap,V=Ne&&!!N.transmissionMap,Re=Ne&&!!N.thicknessMap,re=!!N.gradientMap,he=!!N.alphaMap,we=N.alphaTest>0,Ce=!!N.alphaHash,Ye=!!N.extensions;let Bt=tr;N.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Bt=a.toneMapping);const on={shaderID:K,shaderType:N.type,shaderName:N.name,vertexShader:Et,fragmentShader:ae,defines:N.defines,customVertexShaderID:xe,customFragmentShaderID:Fe,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:E,batching:Ke,batchingColor:Ke&&ne._colorsTexture!==null,instancing:yt,instancingColor:yt&&ne.instanceColor!==null,instancingMorph:yt&&ne.morphTexture!==null,supportsVertexTextures:T,outputColorSpace:be===null?a.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:vs,alphaToCoverage:!!N.alphaToCoverage,map:zt,matcap:Ft,envMap:dt,envMapMode:dt&&ge.mapping,envMapCubeUVHeight:se,aoMap:U,lightMap:te,bumpMap:st,normalMap:nt,displacementMap:T&&ke,emissiveMap:Ct,normalMapObjectSpace:nt&&N.normalMapType===Kv,normalMapTangentSpace:nt&&N.normalMapType===Rp,metalnessMap:Te,roughnessMap:L,anisotropy:w,anisotropyMap:Ee,clearcoat:j,clearcoatMap:Ie,clearcoatNormalMap:mt,clearcoatRoughnessMap:Se,dispersion:ue,iridescence:me,iridescenceMap:Le,iridescenceThicknessMap:je,sheen:ce,sheenColorMap:Ze,sheenRoughnessMap:Oe,specularMap:ot,specularColorMap:it,specularIntensityMap:Rt,transmission:Ne,transmissionMap:V,thicknessMap:Re,gradientMap:re,opaque:N.transparent===!1&&N.blending===ds&&N.alphaToCoverage===!1,alphaMap:he,alphaTest:we,alphaHash:Ce,combine:N.combine,mapUv:zt&&P(N.map.channel),aoMapUv:U&&P(N.aoMap.channel),lightMapUv:te&&P(N.lightMap.channel),bumpMapUv:st&&P(N.bumpMap.channel),normalMapUv:nt&&P(N.normalMap.channel),displacementMapUv:ke&&P(N.displacementMap.channel),emissiveMapUv:Ct&&P(N.emissiveMap.channel),metalnessMapUv:Te&&P(N.metalnessMap.channel),roughnessMapUv:L&&P(N.roughnessMap.channel),anisotropyMapUv:Ee&&P(N.anisotropyMap.channel),clearcoatMapUv:Ie&&P(N.clearcoatMap.channel),clearcoatNormalMapUv:mt&&P(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&P(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&P(N.iridescenceMap.channel),iridescenceThicknessMapUv:je&&P(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&P(N.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&P(N.sheenRoughnessMap.channel),specularMapUv:ot&&P(N.specularMap.channel),specularColorMapUv:it&&P(N.specularColorMap.channel),specularIntensityMapUv:Rt&&P(N.specularIntensityMap.channel),transmissionMapUv:V&&P(N.transmissionMap.channel),thicknessMapUv:Re&&P(N.thicknessMap.channel),alphaMapUv:he&&P(N.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(nt||w),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!pe.attributes.uv&&(zt||he),fog:!!fe,useFog:N.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:$e,skinning:ne.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:ct,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:N.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:Bt,decodeVideoTexture:zt&&N.map.isVideoTexture===!0&&wt.getTransfer(N.map.colorSpace)===Nt,decodeVideoTextureEmissive:Ct&&N.emissiveMap.isVideoTexture===!0&&wt.getTransfer(N.emissiveMap.colorSpace)===Nt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Di,flipSided:N.side===Mn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:Ye&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&N.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return on.vertexUv1s=g.has(1),on.vertexUv2s=g.has(2),on.vertexUv3s=g.has(3),g.clear(),on}function v(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const k in N.defines)C.push(k),C.push(N.defines[k]);return N.isRawShaderMaterial===!1&&(O(C,N),F(C,N),C.push(a.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function O(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function F(N,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),N.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),N.push(f.mask)}function D(N){const C=R[N.type];let k;if(C){const oe=di[C];k=C_.clone(oe.uniforms)}else k=N.uniforms;return k}function q(N,C){let k;for(let oe=0,ne=S.length;oe<ne;oe++){const fe=S[oe];if(fe.cacheKey===C){k=fe,++k.usedTimes;break}}return k===void 0&&(k=new nT(a,C,N,u),S.push(k)),k}function H(N){if(--N.usedTimes===0){const C=S.indexOf(N);S[C]=S[S.length-1],S.pop(),N.destroy()}}function z(N){m.remove(N)}function X(){m.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:D,acquireProgram:q,releaseProgram:H,releaseShaderCache:z,programs:S,dispose:X}}function aT(){let a=new WeakMap;function t(c){return a.has(c)}function i(c){let f=a.get(c);return f===void 0&&(f={},a.set(c,f)),f}function s(c){a.delete(c)}function h(c,f,m){a.get(c)[f]=m}function u(){a=new WeakMap}return{has:t,get:i,remove:s,update:h,dispose:u}}function cT(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function cp(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function lp(){const a=[];let t=0;const i=[],s=[],h=[];function u(){t=0,i.length=0,s.length=0,h.length=0}function c(x,T,E,R,P,_){let v=a[t];return v===void 0?(v={id:x.id,object:x,geometry:T,material:E,groupOrder:R,renderOrder:x.renderOrder,z:P,group:_},a[t]=v):(v.id=x.id,v.object=x,v.geometry=T,v.material=E,v.groupOrder=R,v.renderOrder=x.renderOrder,v.z=P,v.group=_),t++,v}function f(x,T,E,R,P,_){const v=c(x,T,E,R,P,_);E.transmission>0?s.push(v):E.transparent===!0?h.push(v):i.push(v)}function m(x,T,E,R,P,_){const v=c(x,T,E,R,P,_);E.transmission>0?s.unshift(v):E.transparent===!0?h.unshift(v):i.unshift(v)}function g(x,T){i.length>1&&i.sort(x||cT),s.length>1&&s.sort(T||cp),h.length>1&&h.sort(T||cp)}function S(){for(let x=t,T=a.length;x<T;x++){const E=a[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:h,init:u,push:f,unshift:m,finish:S,sort:g}}function lT(){let a=new WeakMap;function t(s,h){const u=a.get(s);let c;return u===void 0?(c=new lp,a.set(s,[c])):h>=u.length?(c=new lp,u.push(c)):c=u[h],c}function i(){a=new WeakMap}return{get:t,dispose:i}}function hT(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new At};break;case"SpotLight":i={position:new Y,direction:new Y,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return a[t.id]=i,i}}}function uT(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=i,i}}}let dT=0;function fT(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function pT(a){const t=new hT,i=uT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new Y);const h=new Y,u=new Wt,c=new Wt;function f(g){let S=0,x=0,T=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let E=0,R=0,P=0,_=0,v=0,O=0,F=0,D=0,q=0,H=0,z=0;g.sort(fT);for(let N=0,C=g.length;N<C;N++){const k=g[N],oe=k.color,ne=k.intensity,fe=k.distance,pe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)S+=oe.r*ne,x+=oe.g*ne,T+=oe.b*ne;else if(k.isLightProbe){for(let le=0;le<9;le++)s.probe[le].addScaledVector(k.sh.coefficients[le],ne);z++}else if(k.isDirectionalLight){const le=t.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ge=k.shadow,se=i.get(k);se.shadowIntensity=ge.intensity,se.shadowBias=ge.bias,se.shadowNormalBias=ge.normalBias,se.shadowRadius=ge.radius,se.shadowMapSize=ge.mapSize,s.directionalShadow[E]=se,s.directionalShadowMap[E]=pe,s.directionalShadowMatrix[E]=k.shadow.matrix,O++}s.directional[E]=le,E++}else if(k.isSpotLight){const le=t.get(k);le.position.setFromMatrixPosition(k.matrixWorld),le.color.copy(oe).multiplyScalar(ne),le.distance=fe,le.coneCos=Math.cos(k.angle),le.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),le.decay=k.decay,s.spot[P]=le;const ge=k.shadow;if(k.map&&(s.spotLightMap[q]=k.map,q++,ge.updateMatrices(k),k.castShadow&&H++),s.spotLightMatrix[P]=ge.matrix,k.castShadow){const se=i.get(k);se.shadowIntensity=ge.intensity,se.shadowBias=ge.bias,se.shadowNormalBias=ge.normalBias,se.shadowRadius=ge.radius,se.shadowMapSize=ge.mapSize,s.spotShadow[P]=se,s.spotShadowMap[P]=pe,D++}P++}else if(k.isRectAreaLight){const le=t.get(k);le.color.copy(oe).multiplyScalar(ne),le.halfWidth.set(k.width*.5,0,0),le.halfHeight.set(0,k.height*.5,0),s.rectArea[_]=le,_++}else if(k.isPointLight){const le=t.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),le.distance=k.distance,le.decay=k.decay,k.castShadow){const ge=k.shadow,se=i.get(k);se.shadowIntensity=ge.intensity,se.shadowBias=ge.bias,se.shadowNormalBias=ge.normalBias,se.shadowRadius=ge.radius,se.shadowMapSize=ge.mapSize,se.shadowCameraNear=ge.camera.near,se.shadowCameraFar=ge.camera.far,s.pointShadow[R]=se,s.pointShadowMap[R]=pe,s.pointShadowMatrix[R]=k.shadow.matrix,F++}s.point[R]=le,R++}else if(k.isHemisphereLight){const le=t.get(k);le.skyColor.copy(k.color).multiplyScalar(ne),le.groundColor.copy(k.groundColor).multiplyScalar(ne),s.hemi[v]=le,v++}}_>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=x,s.ambient[2]=T;const X=s.hash;(X.directionalLength!==E||X.pointLength!==R||X.spotLength!==P||X.rectAreaLength!==_||X.hemiLength!==v||X.numDirectionalShadows!==O||X.numPointShadows!==F||X.numSpotShadows!==D||X.numSpotMaps!==q||X.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=P,s.rectArea.length=_,s.point.length=R,s.hemi.length=v,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=D+q-H,s.spotLightMap.length=q,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=z,X.directionalLength=E,X.pointLength=R,X.spotLength=P,X.rectAreaLength=_,X.hemiLength=v,X.numDirectionalShadows=O,X.numPointShadows=F,X.numSpotShadows=D,X.numSpotMaps=q,X.numLightProbes=z,s.version=dT++)}function m(g,S){let x=0,T=0,E=0,R=0,P=0;const _=S.matrixWorldInverse;for(let v=0,O=g.length;v<O;v++){const F=g[v];if(F.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(F.matrixWorld),h.setFromMatrixPosition(F.target.matrixWorld),D.direction.sub(h),D.direction.transformDirection(_),x++}else if(F.isSpotLight){const D=s.spot[E];D.position.setFromMatrixPosition(F.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(F.matrixWorld),h.setFromMatrixPosition(F.target.matrixWorld),D.direction.sub(h),D.direction.transformDirection(_),E++}else if(F.isRectAreaLight){const D=s.rectArea[R];D.position.setFromMatrixPosition(F.matrixWorld),D.position.applyMatrix4(_),c.identity(),u.copy(F.matrixWorld),u.premultiply(_),c.extractRotation(u),D.halfWidth.set(F.width*.5,0,0),D.halfHeight.set(0,F.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),R++}else if(F.isPointLight){const D=s.point[T];D.position.setFromMatrixPosition(F.matrixWorld),D.position.applyMatrix4(_),T++}else if(F.isHemisphereLight){const D=s.hemi[P];D.direction.setFromMatrixPosition(F.matrixWorld),D.direction.transformDirection(_),P++}}}return{setup:f,setupView:m,state:s}}function hp(a){const t=new pT(a),i=[],s=[];function h(S){g.camera=S,i.length=0,s.length=0}function u(S){i.push(S)}function c(S){s.push(S)}function f(){t.setup(i)}function m(S){t.setupView(i,S)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:h,state:g,setupLights:f,setupLightsView:m,pushLight:u,pushShadow:c}}function mT(a){let t=new WeakMap;function i(h,u=0){const c=t.get(h);let f;return c===void 0?(f=new hp(a),t.set(h,[f])):u>=c.length?(f=new hp(a),c.push(f)):f=c[u],f}function s(){t=new WeakMap}return{get:i,dispose:s}}const gT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vT=`uniform sampler2D shadow_pass;
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
}`;function _T(a,t,i){let s=new Au;const h=new at,u=new at,c=new jt,f=new k_({depthPacking:jv}),m=new z_,g={},S=i.maxTextureSize,x={[Ui]:Mn,[Mn]:Ui,[Di]:Di},T=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:gT,fragmentShader:vT}),E=T.clone();E.defines.HORIZONTAL_PASS=1;const R=new Dr;R.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new pi(R,T),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mp;let v=this.type;this.render=function(H,z,X){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||H.length===0)return;const N=a.getRenderTarget(),C=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),oe=a.state;oe.setBlending(er),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ne=v!==Pi&&this.type===Pi,fe=v===Pi&&this.type!==Pi;for(let pe=0,le=H.length;pe<le;pe++){const ge=H[pe],se=ge.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;h.copy(se.mapSize);const K=se.getFrameExtents();if(h.multiply(K),u.copy(se.mapSize),(h.x>S||h.y>S)&&(h.x>S&&(u.x=Math.floor(S/K.x),h.x=u.x*K.x,se.mapSize.x=u.x),h.y>S&&(u.y=Math.floor(S/K.y),h.y=u.y*K.y,se.mapSize.y=u.y)),se.map===null||ne===!0||fe===!0){const Ge=this.type!==Pi?{minFilter:ii,magFilter:ii}:{};se.map!==null&&se.map.dispose(),se.map=new Ir(h.x,h.y,Ge),se.map.texture.name=ge.name+".shadowMap",se.camera.updateProjectionMatrix()}a.setRenderTarget(se.map),a.clear();const De=se.getViewportCount();for(let Ge=0;Ge<De;Ge++){const ct=se.getViewport(Ge);c.set(u.x*ct.x,u.y*ct.y,u.x*ct.z,u.y*ct.w),oe.viewport(c),se.updateMatrices(ge,Ge),s=se.getFrustum(),D(z,X,se.camera,ge,this.type)}se.isPointLightShadow!==!0&&this.type===Pi&&O(se,X),se.needsUpdate=!1}v=this.type,_.needsUpdate=!1,a.setRenderTarget(N,C,k)};function O(H,z){const X=t.update(P);T.defines.VSM_SAMPLES!==H.blurSamples&&(T.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,T.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ir(h.x,h.y)),T.uniforms.shadow_pass.value=H.map.texture,T.uniforms.resolution.value=H.mapSize,T.uniforms.radius.value=H.radius,a.setRenderTarget(H.mapPass),a.clear(),a.renderBufferDirect(z,null,X,T,P,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,a.setRenderTarget(H.map),a.clear(),a.renderBufferDirect(z,null,X,E,P,null)}function F(H,z,X,N){let C=null;const k=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(k!==void 0)C=k;else if(C=X.isPointLight===!0?m:f,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const oe=C.uuid,ne=z.uuid;let fe=g[oe];fe===void 0&&(fe={},g[oe]=fe);let pe=fe[ne];pe===void 0&&(pe=C.clone(),fe[ne]=pe,z.addEventListener("dispose",q)),C=pe}if(C.visible=z.visible,C.wireframe=z.wireframe,N===Pi?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:x[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=a.properties.get(C);oe.light=X}return C}function D(H,z,X,N,C){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===Pi)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const ne=t.update(H),fe=H.material;if(Array.isArray(fe)){const pe=ne.groups;for(let le=0,ge=pe.length;le<ge;le++){const se=pe[le],K=fe[se.materialIndex];if(K&&K.visible){const De=F(H,K,N,C);H.onBeforeShadow(a,H,z,X,ne,De,se),a.renderBufferDirect(X,null,ne,De,H,se),H.onAfterShadow(a,H,z,X,ne,De,se)}}}else if(fe.visible){const pe=F(H,fe,N,C);H.onBeforeShadow(a,H,z,X,ne,pe,null),a.renderBufferDirect(X,null,ne,pe,H,null),H.onAfterShadow(a,H,z,X,ne,pe,null)}}const oe=H.children;for(let ne=0,fe=oe.length;ne<fe;ne++)D(oe[ne],z,X,N,C)}function q(H){H.target.removeEventListener("dispose",q);for(const X in g){const N=g[X],C=H.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const yT={[Ch]:Ih,[Ph]:Lh,[Dh]:Oh,[ps]:Nh,[Ih]:Ch,[Lh]:Ph,[Oh]:Dh,[Nh]:ps};function ST(a,t){function i(){let V=!1;const Re=new jt;let re=null;const he=new jt(0,0,0,0);return{setMask:function(we){re!==we&&!V&&(a.colorMask(we,we,we,we),re=we)},setLocked:function(we){V=we},setClear:function(we,Ce,Ye,Bt,on){on===!0&&(we*=Bt,Ce*=Bt,Ye*=Bt),Re.set(we,Ce,Ye,Bt),he.equals(Re)===!1&&(a.clearColor(we,Ce,Ye,Bt),he.copy(Re))},reset:function(){V=!1,re=null,he.set(-1,0,0,0)}}}function s(){let V=!1,Re=!1,re=null,he=null,we=null;return{setReversed:function(Ce){if(Re!==Ce){const Ye=t.get("EXT_clip_control");Ce?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Re=Ce;const Bt=we;we=null,this.setClear(Bt)}},getReversed:function(){return Re},setTest:function(Ce){Ce?be(a.DEPTH_TEST):$e(a.DEPTH_TEST)},setMask:function(Ce){re!==Ce&&!V&&(a.depthMask(Ce),re=Ce)},setFunc:function(Ce){if(Re&&(Ce=yT[Ce]),he!==Ce){switch(Ce){case Ch:a.depthFunc(a.NEVER);break;case Ih:a.depthFunc(a.ALWAYS);break;case Ph:a.depthFunc(a.LESS);break;case ps:a.depthFunc(a.LEQUAL);break;case Dh:a.depthFunc(a.EQUAL);break;case Nh:a.depthFunc(a.GEQUAL);break;case Lh:a.depthFunc(a.GREATER);break;case Oh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}he=Ce}},setLocked:function(Ce){V=Ce},setClear:function(Ce){we!==Ce&&(Re&&(Ce=1-Ce),a.clearDepth(Ce),we=Ce)},reset:function(){V=!1,re=null,he=null,we=null,Re=!1}}}function h(){let V=!1,Re=null,re=null,he=null,we=null,Ce=null,Ye=null,Bt=null,on=null;return{setTest:function(gt){V||(gt?be(a.STENCIL_TEST):$e(a.STENCIL_TEST))},setMask:function(gt){Re!==gt&&!V&&(a.stencilMask(gt),Re=gt)},setFunc:function(gt,gn,Gn){(re!==gt||he!==gn||we!==Gn)&&(a.stencilFunc(gt,gn,Gn),re=gt,he=gn,we=Gn)},setOp:function(gt,gn,Gn){(Ce!==gt||Ye!==gn||Bt!==Gn)&&(a.stencilOp(gt,gn,Gn),Ce=gt,Ye=gn,Bt=Gn)},setLocked:function(gt){V=gt},setClear:function(gt){on!==gt&&(a.clearStencil(gt),on=gt)},reset:function(){V=!1,Re=null,re=null,he=null,we=null,Ce=null,Ye=null,Bt=null,on=null}}}const u=new i,c=new s,f=new h,m=new WeakMap,g=new WeakMap;let S={},x={},T=new WeakMap,E=[],R=null,P=!1,_=null,v=null,O=null,F=null,D=null,q=null,H=null,z=new At(0,0,0),X=0,N=!1,C=null,k=null,oe=null,ne=null,fe=null;const pe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ge=0;const se=a.getParameter(a.VERSION);se.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(se)[1]),le=ge>=1):se.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),le=ge>=2);let K=null,De={};const Ge=a.getParameter(a.SCISSOR_BOX),ct=a.getParameter(a.VIEWPORT),Et=new jt().fromArray(Ge),ae=new jt().fromArray(ct);function xe(V,Re,re,he){const we=new Uint8Array(4),Ce=a.createTexture();a.bindTexture(V,Ce),a.texParameteri(V,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(V,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ye=0;Ye<re;Ye++)V===a.TEXTURE_3D||V===a.TEXTURE_2D_ARRAY?a.texImage3D(Re,0,a.RGBA,1,1,he,0,a.RGBA,a.UNSIGNED_BYTE,we):a.texImage2D(Re+Ye,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,we);return Ce}const Fe={};Fe[a.TEXTURE_2D]=xe(a.TEXTURE_2D,a.TEXTURE_2D,1),Fe[a.TEXTURE_CUBE_MAP]=xe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[a.TEXTURE_2D_ARRAY]=xe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Fe[a.TEXTURE_3D]=xe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),f.setClear(0),be(a.DEPTH_TEST),c.setFunc(ps),st(!1),nt(uf),be(a.CULL_FACE),U(er);function be(V){S[V]!==!0&&(a.enable(V),S[V]=!0)}function $e(V){S[V]!==!1&&(a.disable(V),S[V]=!1)}function yt(V,Re){return x[V]!==Re?(a.bindFramebuffer(V,Re),x[V]=Re,V===a.DRAW_FRAMEBUFFER&&(x[a.FRAMEBUFFER]=Re),V===a.FRAMEBUFFER&&(x[a.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ke(V,Re){let re=E,he=!1;if(V){re=T.get(Re),re===void 0&&(re=[],T.set(Re,re));const we=V.textures;if(re.length!==we.length||re[0]!==a.COLOR_ATTACHMENT0){for(let Ce=0,Ye=we.length;Ce<Ye;Ce++)re[Ce]=a.COLOR_ATTACHMENT0+Ce;re.length=we.length,he=!0}}else re[0]!==a.BACK&&(re[0]=a.BACK,he=!0);he&&a.drawBuffers(re)}function zt(V){return R!==V?(a.useProgram(V),R=V,!0):!1}const Ft={[Mr]:a.FUNC_ADD,[Tv]:a.FUNC_SUBTRACT,[Ev]:a.FUNC_REVERSE_SUBTRACT};Ft[Mv]=a.MIN,Ft[wv]=a.MAX;const dt={[Av]:a.ZERO,[bv]:a.ONE,[Rv]:a.SRC_COLOR,[bh]:a.SRC_ALPHA,[Lv]:a.SRC_ALPHA_SATURATE,[Dv]:a.DST_COLOR,[Iv]:a.DST_ALPHA,[Cv]:a.ONE_MINUS_SRC_COLOR,[Rh]:a.ONE_MINUS_SRC_ALPHA,[Nv]:a.ONE_MINUS_DST_COLOR,[Pv]:a.ONE_MINUS_DST_ALPHA,[Ov]:a.CONSTANT_COLOR,[Uv]:a.ONE_MINUS_CONSTANT_COLOR,[Fv]:a.CONSTANT_ALPHA,[Bv]:a.ONE_MINUS_CONSTANT_ALPHA};function U(V,Re,re,he,we,Ce,Ye,Bt,on,gt){if(V===er){P===!0&&($e(a.BLEND),P=!1);return}if(P===!1&&(be(a.BLEND),P=!0),V!==xv){if(V!==_||gt!==N){if((v!==Mr||D!==Mr)&&(a.blendEquation(a.FUNC_ADD),v=Mr,D=Mr),gt)switch(V){case ds:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case df:a.blendFunc(a.ONE,a.ONE);break;case ff:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case pf:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ds:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case df:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case ff:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case pf:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}O=null,F=null,q=null,H=null,z.set(0,0,0),X=0,_=V,N=gt}return}we=we||Re,Ce=Ce||re,Ye=Ye||he,(Re!==v||we!==D)&&(a.blendEquationSeparate(Ft[Re],Ft[we]),v=Re,D=we),(re!==O||he!==F||Ce!==q||Ye!==H)&&(a.blendFuncSeparate(dt[re],dt[he],dt[Ce],dt[Ye]),O=re,F=he,q=Ce,H=Ye),(Bt.equals(z)===!1||on!==X)&&(a.blendColor(Bt.r,Bt.g,Bt.b,on),z.copy(Bt),X=on),_=V,N=!1}function te(V,Re){V.side===Di?$e(a.CULL_FACE):be(a.CULL_FACE);let re=V.side===Mn;Re&&(re=!re),st(re),V.blending===ds&&V.transparent===!1?U(er):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),u.setMask(V.colorWrite);const he=V.stencilWrite;f.setTest(he),he&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ct(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(a.SAMPLE_ALPHA_TO_COVERAGE):$e(a.SAMPLE_ALPHA_TO_COVERAGE)}function st(V){C!==V&&(V?a.frontFace(a.CW):a.frontFace(a.CCW),C=V)}function nt(V){V!==_v?(be(a.CULL_FACE),V!==k&&(V===uf?a.cullFace(a.BACK):V===yv?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):$e(a.CULL_FACE),k=V}function ke(V){V!==oe&&(le&&a.lineWidth(V),oe=V)}function Ct(V,Re,re){V?(be(a.POLYGON_OFFSET_FILL),(ne!==Re||fe!==re)&&(a.polygonOffset(Re,re),ne=Re,fe=re)):$e(a.POLYGON_OFFSET_FILL)}function Te(V){V?be(a.SCISSOR_TEST):$e(a.SCISSOR_TEST)}function L(V){V===void 0&&(V=a.TEXTURE0+pe-1),K!==V&&(a.activeTexture(V),K=V)}function w(V,Re,re){re===void 0&&(K===null?re=a.TEXTURE0+pe-1:re=K);let he=De[re];he===void 0&&(he={type:void 0,texture:void 0},De[re]=he),(he.type!==V||he.texture!==Re)&&(K!==re&&(a.activeTexture(re),K=re),a.bindTexture(V,Re||Fe[V]),he.type=V,he.texture=Re)}function j(){const V=De[K];V!==void 0&&V.type!==void 0&&(a.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ue(){try{a.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{a.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{a.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{a.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{a.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{a.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{a.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{a.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{a.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{a.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(V){Et.equals(V)===!1&&(a.scissor(V.x,V.y,V.z,V.w),Et.copy(V))}function Oe(V){ae.equals(V)===!1&&(a.viewport(V.x,V.y,V.z,V.w),ae.copy(V))}function ot(V,Re){let re=g.get(Re);re===void 0&&(re=new WeakMap,g.set(Re,re));let he=re.get(V);he===void 0&&(he=a.getUniformBlockIndex(Re,V.name),re.set(V,he))}function it(V,Re){const he=g.get(Re).get(V);m.get(Re)!==he&&(a.uniformBlockBinding(Re,he,V.__bindingPointIndex),m.set(Re,he))}function Rt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),S={},K=null,De={},x={},T=new WeakMap,E=[],R=null,P=!1,_=null,v=null,O=null,F=null,D=null,q=null,H=null,z=new At(0,0,0),X=0,N=!1,C=null,k=null,oe=null,ne=null,fe=null,Et.set(0,0,a.canvas.width,a.canvas.height),ae.set(0,0,a.canvas.width,a.canvas.height),u.reset(),c.reset(),f.reset()}return{buffers:{color:u,depth:c,stencil:f},enable:be,disable:$e,bindFramebuffer:yt,drawBuffers:Ke,useProgram:zt,setBlending:U,setMaterial:te,setFlipSided:st,setCullFace:nt,setLineWidth:ke,setPolygonOffset:Ct,setScissorTest:Te,activeTexture:L,bindTexture:w,unbindTexture:j,compressedTexImage2D:ue,compressedTexImage3D:me,texImage2D:Le,texImage3D:je,updateUBOMapping:ot,uniformBlockBinding:it,texStorage2D:mt,texStorage3D:Se,texSubImage2D:ce,texSubImage3D:Ne,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ie,scissor:Ze,viewport:Oe,reset:Rt}}function xT(a,t,i,s,h,u,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new at,S=new WeakMap;let x;const T=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(L,w){return E?new OffscreenCanvas(L,w):al("canvas")}function P(L,w,j){let ue=1;const me=Te(L);if((me.width>j||me.height>j)&&(ue=j/Math.max(me.width,me.height)),ue<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor(ue*me.width),Ne=Math.floor(ue*me.height);x===void 0&&(x=R(ce,Ne));const Ee=w?R(ce,Ne):x;return Ee.width=ce,Ee.height=Ne,Ee.getContext("2d").drawImage(L,0,0,ce,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ce+"x"+Ne+")."),Ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function _(L){return L.generateMipmaps}function v(L){a.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function F(L,w,j,ue,me=!1){if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=w;if(w===a.RED&&(j===a.FLOAT&&(ce=a.R32F),j===a.HALF_FLOAT&&(ce=a.R16F),j===a.UNSIGNED_BYTE&&(ce=a.R8)),w===a.RED_INTEGER&&(j===a.UNSIGNED_BYTE&&(ce=a.R8UI),j===a.UNSIGNED_SHORT&&(ce=a.R16UI),j===a.UNSIGNED_INT&&(ce=a.R32UI),j===a.BYTE&&(ce=a.R8I),j===a.SHORT&&(ce=a.R16I),j===a.INT&&(ce=a.R32I)),w===a.RG&&(j===a.FLOAT&&(ce=a.RG32F),j===a.HALF_FLOAT&&(ce=a.RG16F),j===a.UNSIGNED_BYTE&&(ce=a.RG8)),w===a.RG_INTEGER&&(j===a.UNSIGNED_BYTE&&(ce=a.RG8UI),j===a.UNSIGNED_SHORT&&(ce=a.RG16UI),j===a.UNSIGNED_INT&&(ce=a.RG32UI),j===a.BYTE&&(ce=a.RG8I),j===a.SHORT&&(ce=a.RG16I),j===a.INT&&(ce=a.RG32I)),w===a.RGB_INTEGER&&(j===a.UNSIGNED_BYTE&&(ce=a.RGB8UI),j===a.UNSIGNED_SHORT&&(ce=a.RGB16UI),j===a.UNSIGNED_INT&&(ce=a.RGB32UI),j===a.BYTE&&(ce=a.RGB8I),j===a.SHORT&&(ce=a.RGB16I),j===a.INT&&(ce=a.RGB32I)),w===a.RGBA_INTEGER&&(j===a.UNSIGNED_BYTE&&(ce=a.RGBA8UI),j===a.UNSIGNED_SHORT&&(ce=a.RGBA16UI),j===a.UNSIGNED_INT&&(ce=a.RGBA32UI),j===a.BYTE&&(ce=a.RGBA8I),j===a.SHORT&&(ce=a.RGBA16I),j===a.INT&&(ce=a.RGBA32I)),w===a.RGB&&j===a.UNSIGNED_INT_5_9_9_9_REV&&(ce=a.RGB9_E5),w===a.RGBA){const Ne=me?sl:wt.getTransfer(ue);j===a.FLOAT&&(ce=a.RGBA32F),j===a.HALF_FLOAT&&(ce=a.RGBA16F),j===a.UNSIGNED_BYTE&&(ce=Ne===Nt?a.SRGB8_ALPHA8:a.RGBA8),j===a.UNSIGNED_SHORT_4_4_4_4&&(ce=a.RGBA4),j===a.UNSIGNED_SHORT_5_5_5_1&&(ce=a.RGB5_A1)}return(ce===a.R16F||ce===a.R32F||ce===a.RG16F||ce===a.RG32F||ce===a.RGBA16F||ce===a.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function D(L,w){let j;return L?w===null||w===Cr||w===sa?j=a.DEPTH24_STENCIL8:w===Ni?j=a.DEPTH32F_STENCIL8:w===ra&&(j=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Cr||w===sa?j=a.DEPTH_COMPONENT24:w===Ni?j=a.DEPTH_COMPONENT32F:w===ra&&(j=a.DEPTH_COMPONENT16),j}function q(L,w){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==ii&&L.minFilter!==fi?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function H(L){const w=L.target;w.removeEventListener("dispose",H),X(w),w.isVideoTexture&&S.delete(w)}function z(L){const w=L.target;w.removeEventListener("dispose",z),C(w)}function X(L){const w=s.get(L);if(w.__webglInit===void 0)return;const j=L.source,ue=T.get(j);if(ue){const me=ue[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&N(L),Object.keys(ue).length===0&&T.delete(j)}s.remove(L)}function N(L){const w=s.get(L);a.deleteTexture(w.__webglTexture);const j=L.source,ue=T.get(j);delete ue[w.__cacheKey],c.memory.textures--}function C(L){const w=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(w.__webglFramebuffer[ue]))for(let me=0;me<w.__webglFramebuffer[ue].length;me++)a.deleteFramebuffer(w.__webglFramebuffer[ue][me]);else a.deleteFramebuffer(w.__webglFramebuffer[ue]);w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer[ue])}else{if(Array.isArray(w.__webglFramebuffer))for(let ue=0;ue<w.__webglFramebuffer.length;ue++)a.deleteFramebuffer(w.__webglFramebuffer[ue]);else a.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&a.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ue=0;ue<w.__webglColorRenderbuffer.length;ue++)w.__webglColorRenderbuffer[ue]&&a.deleteRenderbuffer(w.__webglColorRenderbuffer[ue]);w.__webglDepthRenderbuffer&&a.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const j=L.textures;for(let ue=0,me=j.length;ue<me;ue++){const ce=s.get(j[ue]);ce.__webglTexture&&(a.deleteTexture(ce.__webglTexture),c.memory.textures--),s.remove(j[ue])}s.remove(L)}let k=0;function oe(){k=0}function ne(){const L=k;return L>=h.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+h.maxTextures),k+=1,L}function fe(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function pe(L,w){const j=s.get(L);if(L.isVideoTexture&&ke(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const ue=L.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(j,L,w);return}}i.bindTexture(a.TEXTURE_2D,j.__webglTexture,a.TEXTURE0+w)}function le(L,w){const j=s.get(L);if(L.version>0&&j.__version!==L.version){ae(j,L,w);return}i.bindTexture(a.TEXTURE_2D_ARRAY,j.__webglTexture,a.TEXTURE0+w)}function ge(L,w){const j=s.get(L);if(L.version>0&&j.__version!==L.version){ae(j,L,w);return}i.bindTexture(a.TEXTURE_3D,j.__webglTexture,a.TEXTURE0+w)}function se(L,w){const j=s.get(L);if(L.version>0&&j.__version!==L.version){xe(j,L,w);return}i.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture,a.TEXTURE0+w)}const K={[Bh]:a.REPEAT,[Ar]:a.CLAMP_TO_EDGE,[kh]:a.MIRRORED_REPEAT},De={[ii]:a.NEAREST,[$v]:a.NEAREST_MIPMAP_NEAREST,[Cc]:a.NEAREST_MIPMAP_LINEAR,[fi]:a.LINEAR,[jl]:a.LINEAR_MIPMAP_NEAREST,[br]:a.LINEAR_MIPMAP_LINEAR},Ge={[Zv]:a.NEVER,[r_]:a.ALWAYS,[Qv]:a.LESS,[Cp]:a.LEQUAL,[e_]:a.EQUAL,[i_]:a.GEQUAL,[t_]:a.GREATER,[n_]:a.NOTEQUAL};function ct(L,w){if(w.type===Ni&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===fi||w.magFilter===jl||w.magFilter===Cc||w.magFilter===br||w.minFilter===fi||w.minFilter===jl||w.minFilter===Cc||w.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,K[w.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,K[w.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,K[w.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,De[w.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,De[w.minFilter]),w.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,Ge[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ii||w.minFilter!==Cc&&w.minFilter!==br||w.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");a.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,h.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Et(L,w){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",H));const ue=w.source;let me=T.get(ue);me===void 0&&(me={},T.set(ue,me));const ce=fe(w);if(ce!==L.__cacheKey){me[ce]===void 0&&(me[ce]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,j=!0),me[ce].usedTimes++;const Ne=me[L.__cacheKey];Ne!==void 0&&(me[L.__cacheKey].usedTimes--,Ne.usedTimes===0&&N(w)),L.__cacheKey=ce,L.__webglTexture=me[ce].texture}return j}function ae(L,w,j){let ue=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=a.TEXTURE_3D);const me=Et(L,w),ce=w.source;i.bindTexture(ue,L.__webglTexture,a.TEXTURE0+j);const Ne=s.get(ce);if(ce.version!==Ne.__version||me===!0){i.activeTexture(a.TEXTURE0+j);const Ee=wt.getPrimaries(wt.workingColorSpace),Ie=w.colorSpace===Qi?null:wt.getPrimaries(w.colorSpace),mt=w.colorSpace===Qi||Ee===Ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Se=P(w.image,!1,h.maxTextureSize);Se=Ct(w,Se);const Le=u.convert(w.format,w.colorSpace),je=u.convert(w.type);let Ze=F(w.internalFormat,Le,je,w.colorSpace,w.isVideoTexture);ct(ue,w);let Oe;const ot=w.mipmaps,it=w.isVideoTexture!==!0,Rt=Ne.__version===void 0||me===!0,V=ce.dataReady,Re=q(w,Se);if(w.isDepthTexture)Ze=D(w.format===aa,w.type),Rt&&(it?i.texStorage2D(a.TEXTURE_2D,1,Ze,Se.width,Se.height):i.texImage2D(a.TEXTURE_2D,0,Ze,Se.width,Se.height,0,Le,je,null));else if(w.isDataTexture)if(ot.length>0){it&&Rt&&i.texStorage2D(a.TEXTURE_2D,Re,Ze,ot[0].width,ot[0].height);for(let re=0,he=ot.length;re<he;re++)Oe=ot[re],it?V&&i.texSubImage2D(a.TEXTURE_2D,re,0,0,Oe.width,Oe.height,Le,je,Oe.data):i.texImage2D(a.TEXTURE_2D,re,Ze,Oe.width,Oe.height,0,Le,je,Oe.data);w.generateMipmaps=!1}else it?(Rt&&i.texStorage2D(a.TEXTURE_2D,Re,Ze,Se.width,Se.height),V&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Se.width,Se.height,Le,je,Se.data)):i.texImage2D(a.TEXTURE_2D,0,Ze,Se.width,Se.height,0,Le,je,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&Rt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Ze,ot[0].width,ot[0].height,Se.depth);for(let re=0,he=ot.length;re<he;re++)if(Oe=ot[re],w.format!==ni)if(Le!==null)if(it){if(V)if(w.layerUpdates.size>0){const we=zf(Oe.width,Oe.height,w.format,w.type);for(const Ce of w.layerUpdates){const Ye=Oe.data.subarray(Ce*we/Oe.data.BYTES_PER_ELEMENT,(Ce+1)*we/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,re,0,0,Ce,Oe.width,Oe.height,1,Le,Ye)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,re,0,0,0,Oe.width,Oe.height,Se.depth,Le,Oe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,re,Ze,Oe.width,Oe.height,Se.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,re,0,0,0,Oe.width,Oe.height,Se.depth,Le,je,Oe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,re,Ze,Oe.width,Oe.height,Se.depth,0,Le,je,Oe.data)}else{it&&Rt&&i.texStorage2D(a.TEXTURE_2D,Re,Ze,ot[0].width,ot[0].height);for(let re=0,he=ot.length;re<he;re++)Oe=ot[re],w.format!==ni?Le!==null?it?V&&i.compressedTexSubImage2D(a.TEXTURE_2D,re,0,0,Oe.width,Oe.height,Le,Oe.data):i.compressedTexImage2D(a.TEXTURE_2D,re,Ze,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&i.texSubImage2D(a.TEXTURE_2D,re,0,0,Oe.width,Oe.height,Le,je,Oe.data):i.texImage2D(a.TEXTURE_2D,re,Ze,Oe.width,Oe.height,0,Le,je,Oe.data)}else if(w.isDataArrayTexture)if(it){if(Rt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Ze,Se.width,Se.height,Se.depth),V)if(w.layerUpdates.size>0){const re=zf(Se.width,Se.height,w.format,w.type);for(const he of w.layerUpdates){const we=Se.data.subarray(he*re/Se.data.BYTES_PER_ELEMENT,(he+1)*re/Se.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,Le,je,we)}w.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Le,je,Se.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Ze,Se.width,Se.height,Se.depth,0,Le,je,Se.data);else if(w.isData3DTexture)it?(Rt&&i.texStorage3D(a.TEXTURE_3D,Re,Ze,Se.width,Se.height,Se.depth),V&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Le,je,Se.data)):i.texImage3D(a.TEXTURE_3D,0,Ze,Se.width,Se.height,Se.depth,0,Le,je,Se.data);else if(w.isFramebufferTexture){if(Rt)if(it)i.texStorage2D(a.TEXTURE_2D,Re,Ze,Se.width,Se.height);else{let re=Se.width,he=Se.height;for(let we=0;we<Re;we++)i.texImage2D(a.TEXTURE_2D,we,Ze,re,he,0,Le,je,null),re>>=1,he>>=1}}else if(ot.length>0){if(it&&Rt){const re=Te(ot[0]);i.texStorage2D(a.TEXTURE_2D,Re,Ze,re.width,re.height)}for(let re=0,he=ot.length;re<he;re++)Oe=ot[re],it?V&&i.texSubImage2D(a.TEXTURE_2D,re,0,0,Le,je,Oe):i.texImage2D(a.TEXTURE_2D,re,Ze,Le,je,Oe);w.generateMipmaps=!1}else if(it){if(Rt){const re=Te(Se);i.texStorage2D(a.TEXTURE_2D,Re,Ze,re.width,re.height)}V&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Le,je,Se)}else i.texImage2D(a.TEXTURE_2D,0,Ze,Le,je,Se);_(w)&&v(ue),Ne.__version=ce.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function xe(L,w,j){if(w.image.length!==6)return;const ue=Et(L,w),me=w.source;i.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+j);const ce=s.get(me);if(me.version!==ce.__version||ue===!0){i.activeTexture(a.TEXTURE0+j);const Ne=wt.getPrimaries(wt.workingColorSpace),Ee=w.colorSpace===Qi?null:wt.getPrimaries(w.colorSpace),Ie=w.colorSpace===Qi||Ne===Ee?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const mt=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,Le=[];for(let he=0;he<6;he++)!mt&&!Se?Le[he]=P(w.image[he],!0,h.maxCubemapSize):Le[he]=Se?w.image[he].image:w.image[he],Le[he]=Ct(w,Le[he]);const je=Le[0],Ze=u.convert(w.format,w.colorSpace),Oe=u.convert(w.type),ot=F(w.internalFormat,Ze,Oe,w.colorSpace),it=w.isVideoTexture!==!0,Rt=ce.__version===void 0||ue===!0,V=me.dataReady;let Re=q(w,je);ct(a.TEXTURE_CUBE_MAP,w);let re;if(mt){it&&Rt&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Re,ot,je.width,je.height);for(let he=0;he<6;he++){re=Le[he].mipmaps;for(let we=0;we<re.length;we++){const Ce=re[we];w.format!==ni?Ze!==null?it?V&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,0,0,Ce.width,Ce.height,Ze,Ce.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,ot,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?V&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,0,0,Ce.width,Ce.height,Ze,Oe,Ce.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,ot,Ce.width,Ce.height,0,Ze,Oe,Ce.data)}}}else{if(re=w.mipmaps,it&&Rt){re.length>0&&Re++;const he=Te(Le[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Re,ot,he.width,he.height)}for(let he=0;he<6;he++)if(Se){it?V&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Le[he].width,Le[he].height,Ze,Oe,Le[he].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ot,Le[he].width,Le[he].height,0,Ze,Oe,Le[he].data);for(let we=0;we<re.length;we++){const Ye=re[we].image[he].image;it?V&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,0,0,Ye.width,Ye.height,Ze,Oe,Ye.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,ot,Ye.width,Ye.height,0,Ze,Oe,Ye.data)}}else{it?V&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ze,Oe,Le[he]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ot,Ze,Oe,Le[he]);for(let we=0;we<re.length;we++){const Ce=re[we];it?V&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,0,0,Ze,Oe,Ce.image[he]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,ot,Ze,Oe,Ce.image[he])}}}_(w)&&v(a.TEXTURE_CUBE_MAP),ce.__version=me.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Fe(L,w,j,ue,me,ce){const Ne=u.convert(j.format,j.colorSpace),Ee=u.convert(j.type),Ie=F(j.internalFormat,Ne,Ee,j.colorSpace),mt=s.get(w),Se=s.get(j);if(Se.__renderTarget=w,!mt.__hasExternalTextures){const Le=Math.max(1,w.width>>ce),je=Math.max(1,w.height>>ce);me===a.TEXTURE_3D||me===a.TEXTURE_2D_ARRAY?i.texImage3D(me,ce,Ie,Le,je,w.depth,0,Ne,Ee,null):i.texImage2D(me,ce,Ie,Le,je,0,Ne,Ee,null)}i.bindFramebuffer(a.FRAMEBUFFER,L),nt(w)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ue,me,Se.__webglTexture,0,st(w)):(me===a.TEXTURE_2D||me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ue,me,Se.__webglTexture,ce),i.bindFramebuffer(a.FRAMEBUFFER,null)}function be(L,w,j){if(a.bindRenderbuffer(a.RENDERBUFFER,L),w.depthBuffer){const ue=w.depthTexture,me=ue&&ue.isDepthTexture?ue.type:null,ce=D(w.stencilBuffer,me),Ne=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ee=st(w);nt(w)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ee,ce,w.width,w.height):j?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ee,ce,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,ce,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ne,a.RENDERBUFFER,L)}else{const ue=w.textures;for(let me=0;me<ue.length;me++){const ce=ue[me],Ne=u.convert(ce.format,ce.colorSpace),Ee=u.convert(ce.type),Ie=F(ce.internalFormat,Ne,Ee,ce.colorSpace),mt=st(w);j&&nt(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,mt,Ie,w.width,w.height):nt(w)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,mt,Ie,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,Ie,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function $e(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=s.get(w.depthTexture);ue.__renderTarget=w,(!ue.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const me=ue.__webglTexture,ce=st(w);if(w.depthTexture.format===oa)nt(w)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,me,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,me,0);else if(w.depthTexture.format===aa)nt(w)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,me,0,ce):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function yt(L){const w=s.get(L),j=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const ue=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){const me=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",me)};ue.addEventListener("dispose",me),w.__depthDisposeCallback=me}w.__boundDepthTexture=ue}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");$e(w.__webglFramebuffer,L)}else if(j){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(i.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=a.createRenderbuffer(),be(w.__webglDepthbuffer[ue],L,!1);else{const me=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer[ue];a.bindRenderbuffer(a.RENDERBUFFER,ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,ce)}}else if(i.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=a.createRenderbuffer(),be(w.__webglDepthbuffer,L,!1);else{const ue=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,me),a.framebufferRenderbuffer(a.FRAMEBUFFER,ue,a.RENDERBUFFER,me)}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Ke(L,w,j){const ue=s.get(L);w!==void 0&&Fe(ue.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),j!==void 0&&yt(L)}function zt(L){const w=L.texture,j=s.get(L),ue=s.get(w);L.addEventListener("dispose",z);const me=L.textures,ce=L.isWebGLCubeRenderTarget===!0,Ne=me.length>1;if(Ne||(ue.__webglTexture===void 0&&(ue.__webglTexture=a.createTexture()),ue.__version=w.version,c.memory.textures++),ce){j.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[Ee]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)j.__webglFramebuffer[Ee][Ie]=a.createFramebuffer()}else j.__webglFramebuffer[Ee]=a.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)j.__webglFramebuffer[Ee]=a.createFramebuffer()}else j.__webglFramebuffer=a.createFramebuffer();if(Ne)for(let Ee=0,Ie=me.length;Ee<Ie;Ee++){const mt=s.get(me[Ee]);mt.__webglTexture===void 0&&(mt.__webglTexture=a.createTexture(),c.memory.textures++)}if(L.samples>0&&nt(L)===!1){j.__webglMultisampledFramebuffer=a.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ee=0;Ee<me.length;Ee++){const Ie=me[Ee];j.__webglColorRenderbuffer[Ee]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,j.__webglColorRenderbuffer[Ee]);const mt=u.convert(Ie.format,Ie.colorSpace),Se=u.convert(Ie.type),Le=F(Ie.internalFormat,mt,Se,Ie.colorSpace,L.isXRRenderTarget===!0),je=st(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,je,Le,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.RENDERBUFFER,j.__webglColorRenderbuffer[Ee])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=a.createRenderbuffer(),be(j.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ce){i.bindTexture(a.TEXTURE_CUBE_MAP,ue.__webglTexture),ct(a.TEXTURE_CUBE_MAP,w);for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)Fe(j.__webglFramebuffer[Ee][Ie],L,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ie);else Fe(j.__webglFramebuffer[Ee],L,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);_(w)&&v(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let Ee=0,Ie=me.length;Ee<Ie;Ee++){const mt=me[Ee],Se=s.get(mt);i.bindTexture(a.TEXTURE_2D,Se.__webglTexture),ct(a.TEXTURE_2D,mt),Fe(j.__webglFramebuffer,L,mt,a.COLOR_ATTACHMENT0+Ee,a.TEXTURE_2D,0),_(mt)&&v(a.TEXTURE_2D)}i.unbindTexture()}else{let Ee=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ee,ue.__webglTexture),ct(Ee,w),w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)Fe(j.__webglFramebuffer[Ie],L,w,a.COLOR_ATTACHMENT0,Ee,Ie);else Fe(j.__webglFramebuffer,L,w,a.COLOR_ATTACHMENT0,Ee,0);_(w)&&v(Ee),i.unbindTexture()}L.depthBuffer&&yt(L)}function Ft(L){const w=L.textures;for(let j=0,ue=w.length;j<ue;j++){const me=w[j];if(_(me)){const ce=O(L),Ne=s.get(me).__webglTexture;i.bindTexture(ce,Ne),v(ce),i.unbindTexture()}}}const dt=[],U=[];function te(L){if(L.samples>0){if(nt(L)===!1){const w=L.textures,j=L.width,ue=L.height;let me=a.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=s.get(L),Ee=w.length>1;if(Ee)for(let Ie=0;Ie<w.length;Ie++)i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=a.STENCIL_BUFFER_BIT)),Ee){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const mt=s.get(w[Ie]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,mt,0)}a.blitFramebuffer(0,0,j,ue,0,0,j,ue,me,a.NEAREST),m===!0&&(dt.length=0,U.length=0,dt.push(a.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&L.resolveDepthBuffer===!1&&(dt.push(ce),U.push(ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,U)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,dt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ee)for(let Ie=0;Ie<w.length;Ie++){i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const mt=s.get(w[Ie]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.TEXTURE_2D,mt,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const w=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[w])}}}function st(L){return Math.min(h.maxSamples,L.samples)}function nt(L){const w=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ke(L){const w=c.render.frame;S.get(L)!==w&&(S.set(L,w),L.update())}function Ct(L,w){const j=L.colorSpace,ue=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==vs&&j!==Qi&&(wt.getTransfer(j)===Nt?(ue!==ni||me!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}function Te(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=ne,this.resetTextureUnits=oe,this.setTexture2D=pe,this.setTexture2DArray=le,this.setTexture3D=ge,this.setTextureCube=se,this.rebindTextures=Ke,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=nt}function TT(a,t){function i(s,h=Qi){let u;const c=wt.getTransfer(h);if(s===Fi)return a.UNSIGNED_BYTE;if(s===vu)return a.UNSIGNED_SHORT_4_4_4_4;if(s===_u)return a.UNSIGNED_SHORT_5_5_5_1;if(s===Sp)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===_p)return a.BYTE;if(s===yp)return a.SHORT;if(s===ra)return a.UNSIGNED_SHORT;if(s===gu)return a.INT;if(s===Cr)return a.UNSIGNED_INT;if(s===Ni)return a.FLOAT;if(s===ca)return a.HALF_FLOAT;if(s===xp)return a.ALPHA;if(s===Tp)return a.RGB;if(s===ni)return a.RGBA;if(s===Ep)return a.LUMINANCE;if(s===Mp)return a.LUMINANCE_ALPHA;if(s===oa)return a.DEPTH_COMPONENT;if(s===aa)return a.DEPTH_STENCIL;if(s===wp)return a.RED;if(s===yu)return a.RED_INTEGER;if(s===Ap)return a.RG;if(s===Su)return a.RG_INTEGER;if(s===xu)return a.RGBA_INTEGER;if(s===Kc||s===Zc||s===Qc||s===el)if(c===Nt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Kc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===el)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Kc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===el)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zh||s===Vh||s===Hh||s===Gh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===zh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wh||s===qh||s===Jh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Wh||s===qh)return c===Nt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Jh)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xh||s===$h||s===Yh||s===jh||s===Kh||s===Zh||s===Qh||s===eu||s===tu||s===nu||s===iu||s===ru||s===su||s===ou)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Xh)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$h)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yh)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jh)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kh)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zh)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qh)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===eu)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tu)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nu)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===iu)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ru)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===su)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ou)return c===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tl||s===au||s===cu)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===tl)return c===Nt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===au)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cu)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bp||s===lu||s===hu||s===uu)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===tl)return u.COMPRESSED_RED_RGTC1_EXT;if(s===lu)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uu)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sa?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const ET=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
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

}`;class wT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const h=new wn,u=t.properties.get(h);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=h}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ir({vertexShader:ET,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pi(new ll(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AT extends Pr{constructor(t,i){super();const s=this;let h=null,u=1,c=null,f="local-floor",m=1,g=null,S=null,x=null,T=null,E=null,R=null;const P=new wT,_=i.getContextAttributes();let v=null,O=null;const F=[],D=[],q=new at;let H=null;const z=new Hn;z.viewport=new jt;const X=new Hn;X.viewport=new jt;const N=[z,X],C=new q_;let k=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let xe=F[ae];return xe===void 0&&(xe=new vh,F[ae]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ae){let xe=F[ae];return xe===void 0&&(xe=new vh,F[ae]=xe),xe.getGripSpace()},this.getHand=function(ae){let xe=F[ae];return xe===void 0&&(xe=new vh,F[ae]=xe),xe.getHandSpace()};function ne(ae){const xe=D.indexOf(ae.inputSource);if(xe===-1)return;const Fe=F[xe];Fe!==void 0&&(Fe.update(ae.inputSource,ae.frame,g||c),Fe.dispatchEvent({type:ae.type,data:ae.inputSource}))}function fe(){h.removeEventListener("select",ne),h.removeEventListener("selectstart",ne),h.removeEventListener("selectend",ne),h.removeEventListener("squeeze",ne),h.removeEventListener("squeezestart",ne),h.removeEventListener("squeezeend",ne),h.removeEventListener("end",fe),h.removeEventListener("inputsourceschange",pe);for(let ae=0;ae<F.length;ae++){const xe=D[ae];xe!==null&&(D[ae]=null,F[ae].disconnect(xe))}k=null,oe=null,P.reset(),t.setRenderTarget(v),E=null,T=null,x=null,h=null,O=null,Et.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(q.width,q.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){u=ae,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||c},this.setReferenceSpace=function(ae){g=ae},this.getBaseLayer=function(){return T!==null?T:E},this.getBinding=function(){return x},this.getFrame=function(){return R},this.getSession=function(){return h},this.setSession=async function(ae){if(h=ae,h!==null){if(v=t.getRenderTarget(),h.addEventListener("select",ne),h.addEventListener("selectstart",ne),h.addEventListener("selectend",ne),h.addEventListener("squeeze",ne),h.addEventListener("squeezestart",ne),h.addEventListener("squeezeend",ne),h.addEventListener("end",fe),h.addEventListener("inputsourceschange",pe),_.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(q),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,be=null,$e=null;_.depth&&($e=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Fe=_.stencil?aa:oa,be=_.stencil?sa:Cr);const yt={colorFormat:i.RGBA8,depthFormat:$e,scaleFactor:u};x=new XRWebGLBinding(h,i),T=x.createProjectionLayer(yt),h.updateRenderState({layers:[T]}),t.setPixelRatio(1),t.setSize(T.textureWidth,T.textureHeight,!1),O=new Ir(T.textureWidth,T.textureHeight,{format:ni,type:Fi,depthTexture:new kp(T.textureWidth,T.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1})}else{const Fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(h,i,Fe),h.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new Ir(E.framebufferWidth,E.framebufferHeight,{format:ni,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),g=null,c=await h.requestReferenceSpace(f),Et.setContext(h),Et.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(h!==null)return h.environmentBlendMode},this.getDepthTexture=function(){return P.getDepthTexture()};function pe(ae){for(let xe=0;xe<ae.removed.length;xe++){const Fe=ae.removed[xe],be=D.indexOf(Fe);be>=0&&(D[be]=null,F[be].disconnect(Fe))}for(let xe=0;xe<ae.added.length;xe++){const Fe=ae.added[xe];let be=D.indexOf(Fe);if(be===-1){for(let yt=0;yt<F.length;yt++)if(yt>=D.length){D.push(Fe),be=yt;break}else if(D[yt]===null){D[yt]=Fe,be=yt;break}if(be===-1)break}const $e=F[be];$e&&$e.connect(Fe)}}const le=new Y,ge=new Y;function se(ae,xe,Fe){le.setFromMatrixPosition(xe.matrixWorld),ge.setFromMatrixPosition(Fe.matrixWorld);const be=le.distanceTo(ge),$e=xe.projectionMatrix.elements,yt=Fe.projectionMatrix.elements,Ke=$e[14]/($e[10]-1),zt=$e[14]/($e[10]+1),Ft=($e[9]+1)/$e[5],dt=($e[9]-1)/$e[5],U=($e[8]-1)/$e[0],te=(yt[8]+1)/yt[0],st=Ke*U,nt=Ke*te,ke=be/(-U+te),Ct=ke*-U;if(xe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ct),ae.translateZ(ke),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),$e[10]===-1)ae.projectionMatrix.copy(xe.projectionMatrix),ae.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Te=Ke+ke,L=zt+ke,w=st-Ct,j=nt+(be-Ct),ue=Ft*zt/L*Te,me=dt*zt/L*Te;ae.projectionMatrix.makePerspective(w,j,ue,me,Te,L),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function K(ae,xe){xe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(xe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(h===null)return;let xe=ae.near,Fe=ae.far;P.texture!==null&&(P.depthNear>0&&(xe=P.depthNear),P.depthFar>0&&(Fe=P.depthFar)),C.near=X.near=z.near=xe,C.far=X.far=z.far=Fe,(k!==C.near||oe!==C.far)&&(h.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,oe=C.far),z.layers.mask=ae.layers.mask|2,X.layers.mask=ae.layers.mask|4,C.layers.mask=z.layers.mask|X.layers.mask;const be=ae.parent,$e=C.cameras;K(C,be);for(let yt=0;yt<$e.length;yt++)K($e[yt],be);$e.length===2?se(C,z,X):C.projectionMatrix.copy(z.projectionMatrix),De(ae,C,be)};function De(ae,xe,Fe){Fe===null?ae.matrix.copy(xe.matrixWorld):(ae.matrix.copy(Fe.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(xe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(xe.projectionMatrix),ae.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=du*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(T===null&&E===null))return m},this.setFoveation=function(ae){m=ae,T!==null&&(T.fixedFoveation=ae),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ae)},this.hasDepthSensing=function(){return P.texture!==null},this.getDepthSensingMesh=function(){return P.getMesh(C)};let Ge=null;function ct(ae,xe){if(S=xe.getViewerPose(g||c),R=xe,S!==null){const Fe=S.views;E!==null&&(t.setRenderTargetFramebuffer(O,E.framebuffer),t.setRenderTarget(O));let be=!1;Fe.length!==C.cameras.length&&(C.cameras.length=0,be=!0);for(let Ke=0;Ke<Fe.length;Ke++){const zt=Fe[Ke];let Ft=null;if(E!==null)Ft=E.getViewport(zt);else{const U=x.getViewSubImage(T,zt);Ft=U.viewport,Ke===0&&(t.setRenderTargetTextures(O,U.colorTexture,U.depthStencilTexture),t.setRenderTarget(O))}let dt=N[Ke];dt===void 0&&(dt=new Hn,dt.layers.enable(Ke),dt.viewport=new jt,N[Ke]=dt),dt.matrix.fromArray(zt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(zt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),Ke===0&&(C.matrix.copy(dt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),be===!0&&C.cameras.push(dt)}const $e=h.enabledFeatures;if($e&&$e.includes("depth-sensing")&&h.depthUsage=="gpu-optimized"&&x){const Ke=x.getDepthInformation(Fe[0]);Ke&&Ke.isValid&&Ke.texture&&P.init(t,Ke,h.renderState)}}for(let Fe=0;Fe<F.length;Fe++){const be=D[Fe],$e=F[Fe];be!==null&&$e!==void 0&&$e.update(be,xe,g||c)}Ge&&Ge(ae,xe),xe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xe}),R=null}const Et=new Hp;Et.setAnimationLoop(ct),this.setAnimationLoop=function(ae){Ge=ae},this.dispose=function(){}}}const Tr=new gi,bT=new Wt;function RT(a,t){function i(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function s(_,v){v.color.getRGB(_.fogColor.value,Up(a)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function h(_,v,O,F,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(_,v):v.isMeshToonMaterial?(u(_,v),x(_,v)):v.isMeshPhongMaterial?(u(_,v),S(_,v)):v.isMeshStandardMaterial?(u(_,v),T(_,v),v.isMeshPhysicalMaterial&&E(_,v,D)):v.isMeshMatcapMaterial?(u(_,v),R(_,v)):v.isMeshDepthMaterial?u(_,v):v.isMeshDistanceMaterial?(u(_,v),P(_,v)):v.isMeshNormalMaterial?u(_,v):v.isLineBasicMaterial?(c(_,v),v.isLineDashedMaterial&&f(_,v)):v.isPointsMaterial?m(_,v,O,F):v.isSpriteMaterial?g(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,i(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,i(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,i(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Mn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,i(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Mn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,i(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,i(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const O=t.get(v),F=O.envMap,D=O.envMapRotation;F&&(_.envMap.value=F,Tr.copy(D),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),_.envMapRotation.value.setFromMatrix4(bT.makeRotationFromEuler(Tr)),_.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,_.aoMapTransform))}function c(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,i(v.map,_.mapTransform))}function f(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function m(_,v,O,F){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*O,_.scale.value=F*.5,v.map&&(_.map.value=v.map,i(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,i(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function g(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,i(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,i(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function S(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function x(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function T(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function E(_,v,O){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Mn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=O.texture,_.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,_.specularIntensityMapTransform))}function R(_,v){v.matcap&&(_.matcap.value=v.matcap)}function P(_,v){const O=t.get(v).light;_.referencePosition.value.setFromMatrixPosition(O.matrixWorld),_.nearDistance.value=O.shadow.camera.near,_.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:h}}function CT(a,t,i,s){let h={},u={},c=[];const f=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,F){const D=F.program;s.uniformBlockBinding(O,D)}function g(O,F){let D=h[O.id];D===void 0&&(R(O),D=S(O),h[O.id]=D,O.addEventListener("dispose",_));const q=F.program;s.updateUBOMapping(O,q);const H=t.render.frame;u[O.id]!==H&&(T(O),u[O.id]=H)}function S(O){const F=x();O.__bindingPointIndex=F;const D=a.createBuffer(),q=O.__size,H=O.usage;return a.bindBuffer(a.UNIFORM_BUFFER,D),a.bufferData(a.UNIFORM_BUFFER,q,H),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,F,D),D}function x(){for(let O=0;O<f;O++)if(c.indexOf(O)===-1)return c.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function T(O){const F=h[O.id],D=O.uniforms,q=O.__cache;a.bindBuffer(a.UNIFORM_BUFFER,F);for(let H=0,z=D.length;H<z;H++){const X=Array.isArray(D[H])?D[H]:[D[H]];for(let N=0,C=X.length;N<C;N++){const k=X[N];if(E(k,H,N,q)===!0){const oe=k.__offset,ne=Array.isArray(k.value)?k.value:[k.value];let fe=0;for(let pe=0;pe<ne.length;pe++){const le=ne[pe],ge=P(le);typeof le=="number"||typeof le=="boolean"?(k.__data[0]=le,a.bufferSubData(a.UNIFORM_BUFFER,oe+fe,k.__data)):le.isMatrix3?(k.__data[0]=le.elements[0],k.__data[1]=le.elements[1],k.__data[2]=le.elements[2],k.__data[3]=0,k.__data[4]=le.elements[3],k.__data[5]=le.elements[4],k.__data[6]=le.elements[5],k.__data[7]=0,k.__data[8]=le.elements[6],k.__data[9]=le.elements[7],k.__data[10]=le.elements[8],k.__data[11]=0):(le.toArray(k.__data,fe),fe+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,oe,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function E(O,F,D,q){const H=O.value,z=F+"_"+D;if(q[z]===void 0)return typeof H=="number"||typeof H=="boolean"?q[z]=H:q[z]=H.clone(),!0;{const X=q[z];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return q[z]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function R(O){const F=O.uniforms;let D=0;const q=16;for(let z=0,X=F.length;z<X;z++){const N=Array.isArray(F[z])?F[z]:[F[z]];for(let C=0,k=N.length;C<k;C++){const oe=N[C],ne=Array.isArray(oe.value)?oe.value:[oe.value];for(let fe=0,pe=ne.length;fe<pe;fe++){const le=ne[fe],ge=P(le),se=D%q,K=se%ge.boundary,De=se+K;D+=K,De!==0&&q-De<ge.storage&&(D+=q-De),oe.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=D,D+=ge.storage}}}const H=D%q;return H>0&&(D+=q-H),O.__size=D,O.__cache={},this}function P(O){const F={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(F.boundary=4,F.storage=4):O.isVector2?(F.boundary=8,F.storage=8):O.isVector3||O.isColor?(F.boundary=16,F.storage=12):O.isVector4?(F.boundary=16,F.storage=16):O.isMatrix3?(F.boundary=48,F.storage=48):O.isMatrix4?(F.boundary=64,F.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),F}function _(O){const F=O.target;F.removeEventListener("dispose",_);const D=c.indexOf(F.__bindingPointIndex);c.splice(D,1),a.deleteBuffer(h[F.id]),delete h[F.id],delete u[F.id]}function v(){for(const O in h)a.deleteBuffer(h[O]);c=[],h={},u={}}return{bind:m,update:g,dispose:v}}class IT{constructor(t={}){const{canvas:i=a_(),context:s=null,depth:h=!0,stencil:u=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:g=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:T=!1}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=c;const R=new Uint32Array(4),P=new Int32Array(4);let _=null,v=null;const O=[],F=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let q=!1;this._outputColorSpace=Vn;let H=0,z=0,X=null,N=-1,C=null;const k=new jt,oe=new jt;let ne=null;const fe=new At(0);let pe=0,le=i.width,ge=i.height,se=1,K=null,De=null;const Ge=new jt(0,0,le,ge),ct=new jt(0,0,le,ge);let Et=!1;const ae=new Au;let xe=!1,Fe=!1;const be=new Wt,$e=new Wt,yt=new Y,Ke=new jt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function dt(){return X===null?se:1}let U=s;function te(b,G){return i.getContext(b,G)}try{const b={alpha:!0,depth:h,stencil:u,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mu}`),i.addEventListener("webglcontextlost",he,!1),i.addEventListener("webglcontextrestored",we,!1),i.addEventListener("webglcontextcreationerror",Ce,!1),U===null){const G="webgl2";if(U=te(G,b),U===null)throw te(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let st,nt,ke,Ct,Te,L,w,j,ue,me,ce,Ne,Ee,Ie,mt,Se,Le,je,Ze,Oe,ot,it,Rt,V;function Re(){st=new zS(U),st.init(),it=new TT(U,st),nt=new NS(U,st,t,it),ke=new ST(U,st),nt.reverseDepthBuffer&&T&&ke.buffers.depth.setReversed(!0),Ct=new GS(U),Te=new aT,L=new xT(U,st,ke,Te,nt,it,Ct),w=new OS(D),j=new kS(D),ue=new Y_(U),Rt=new PS(U,ue),me=new VS(U,ue,Ct,Rt),ce=new qS(U,me,ue,Ct),Ze=new WS(U,nt,L),Se=new LS(Te),Ne=new oT(D,w,j,st,nt,Rt,Se),Ee=new RT(D,Te),Ie=new lT,mt=new mT(st),je=new IS(D,w,j,ke,ce,E,m),Le=new _T(D,ce,nt),V=new CT(U,Ct,nt,ke),Oe=new DS(U,st,Ct),ot=new HS(U,st,Ct),Ct.programs=Ne.programs,D.capabilities=nt,D.extensions=st,D.properties=Te,D.renderLists=Ie,D.shadowMap=Le,D.state=ke,D.info=Ct}Re();const re=new AT(D,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=st.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=st.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(b){b!==void 0&&(se=b,this.setSize(le,ge,!1))},this.getSize=function(b){return b.set(le,ge)},this.setSize=function(b,G,Z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=b,ge=G,i.width=Math.floor(b*se),i.height=Math.floor(G*se),Z===!0&&(i.style.width=b+"px",i.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(le*se,ge*se).floor()},this.setDrawingBufferSize=function(b,G,Z){le=b,ge=G,se=Z,i.width=Math.floor(b*Z),i.height=Math.floor(G*Z),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(Ge)},this.setViewport=function(b,G,Z,Q){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,G,Z,Q),ke.viewport(k.copy(Ge).multiplyScalar(se).round())},this.getScissor=function(b){return b.copy(ct)},this.setScissor=function(b,G,Z,Q){b.isVector4?ct.set(b.x,b.y,b.z,b.w):ct.set(b,G,Z,Q),ke.scissor(oe.copy(ct).multiplyScalar(se).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(b){ke.setScissorTest(Et=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){De=b},this.getClearColor=function(b){return b.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,Z=!0){let Q=0;if(b){let W=!1;if(X!==null){const ve=X.texture.format;W=ve===xu||ve===Su||ve===yu}if(W){const ve=X.texture.type,Ae=ve===Fi||ve===Cr||ve===ra||ve===sa||ve===vu||ve===_u,Pe=je.getClearColor(),Ue=je.getClearAlpha(),et=Pe.r,Qe=Pe.g,We=Pe.b;Ae?(R[0]=et,R[1]=Qe,R[2]=We,R[3]=Ue,U.clearBufferuiv(U.COLOR,0,R)):(P[0]=et,P[1]=Qe,P[2]=We,P[3]=Ue,U.clearBufferiv(U.COLOR,0,P))}else Q|=U.COLOR_BUFFER_BIT}G&&(Q|=U.DEPTH_BUFFER_BIT),Z&&(Q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",he,!1),i.removeEventListener("webglcontextrestored",we,!1),i.removeEventListener("webglcontextcreationerror",Ce,!1),je.dispose(),Ie.dispose(),mt.dispose(),Te.dispose(),w.dispose(),j.dispose(),ce.dispose(),Rt.dispose(),V.dispose(),Ne.dispose(),re.dispose(),re.removeEventListener("sessionstart",xs),re.removeEventListener("sessionend",Nr),Nn.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const b=Ct.autoReset,G=Le.enabled,Z=Le.autoUpdate,Q=Le.needsUpdate,W=Le.type;Re(),Ct.autoReset=b,Le.enabled=G,Le.autoUpdate=Z,Le.needsUpdate=Q,Le.type=W}function Ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ye(b){const G=b.target;G.removeEventListener("dispose",Ye),Bt(G)}function Bt(b){on(b),Te.remove(b)}function on(b){const G=Te.get(b).programs;G!==void 0&&(G.forEach(function(Z){Ne.releaseProgram(Z)}),b.isShaderMaterial&&Ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,Z,Q,W,ve){G===null&&(G=zt);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,Pe=ul(b,G,Z,Q,W);ke.setMaterial(Q,Ae);let Ue=Z.index,et=1;if(Q.wireframe===!0){if(Ue=me.getWireframeAttribute(Z),Ue===void 0)return;et=2}const Qe=Z.drawRange,We=Z.attributes.position;let vt=Qe.start*et,Mt=(Qe.start+Qe.count)*et;ve!==null&&(vt=Math.max(vt,ve.start*et),Mt=Math.min(Mt,(ve.start+ve.count)*et)),Ue!==null?(vt=Math.max(vt,0),Mt=Math.min(Mt,Ue.count)):We!=null&&(vt=Math.max(vt,0),Mt=Math.min(Mt,We.count));const qt=Mt-vt;if(qt<0||qt===1/0)return;Rt.setup(W,Q,Pe,Z,Ue);let Vt,St=Oe;if(Ue!==null&&(Vt=ue.get(Ue),St=ot,St.setIndex(Vt)),W.isMesh)Q.wireframe===!0?(ke.setLineWidth(Q.wireframeLinewidth*dt()),St.setMode(U.LINES)):St.setMode(U.TRIANGLES);else if(W.isLine){let Xe=Q.linewidth;Xe===void 0&&(Xe=1),ke.setLineWidth(Xe*dt()),W.isLineSegments?St.setMode(U.LINES):W.isLineLoop?St.setMode(U.LINE_LOOP):St.setMode(U.LINE_STRIP)}else W.isPoints?St.setMode(U.POINTS):W.isSprite&&St.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)il("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))St.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xe=W._multiDrawStarts,en=W._multiDrawCounts,M=W._multiDrawCount,Ot=Ue?ue.get(Ue).bytesPerElement:1,vi=Te.get(Q).currentProgram.getUniforms();for(let bt=0;bt<M;bt++)vi.setValue(U,"_gl_DrawID",bt),St.render(Xe[bt]/Ot,en[bt])}else if(W.isInstancedMesh)St.renderInstances(vt,qt,W.count);else if(Z.isInstancedBufferGeometry){const Xe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,en=Math.min(Z.instanceCount,Xe);St.renderInstances(vt,qt,en)}else St.render(vt,qt)};function gt(b,G,Z){b.transparent===!0&&b.side===Di&&b.forceSinglePass===!1?(b.side=Mn,b.needsUpdate=!0,Or(b,G,Z),b.side=Ui,b.needsUpdate=!0,Or(b,G,Z),b.side=Di):Or(b,G,Z)}this.compile=function(b,G,Z=null){Z===null&&(Z=b),v=mt.get(Z),v.init(G),F.push(v),Z.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),b!==Z&&b.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights();const Q=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ve=W.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const Pe=ve[Ae];gt(Pe,Z,W),Q.add(Pe)}else gt(ve,Z,W),Q.add(ve)}),v=F.pop(),Q},this.compileAsync=function(b,G,Z=null){const Q=this.compile(b,G,Z);return new Promise(W=>{function ve(){if(Q.forEach(function(Ae){Te.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){W(b);return}setTimeout(ve,10)}st.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let gn=null;function Gn(b){gn&&gn(b)}function xs(){Nn.stop()}function Nr(){Nn.start()}const Nn=new Hp;Nn.setAnimationLoop(Gn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(b){gn=b,re.setAnimationLoop(b),b===null?Nn.stop():Nn.start()},re.addEventListener("sessionstart",xs),re.addEventListener("sessionend",Nr),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(G),G=re.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,G,X),v=mt.get(b,F.length),v.init(G),F.push(v),$e.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ae.setFromProjectionMatrix($e),Fe=this.localClippingEnabled,xe=Se.init(this.clippingPlanes,Fe),_=Ie.get(b,O.length),_.init(),O.push(_),re.enabled===!0&&re.isPresenting===!0){const ve=D.xr.getDepthSensingMesh();ve!==null&&ri(ve,G,-1/0,D.sortObjects)}ri(b,G,0,D.sortObjects),_.finish(),D.sortObjects===!0&&_.sort(K,De),Ft=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ft&&je.addToRenderList(_,b),this.info.render.frame++,xe===!0&&Se.beginShadows();const Z=v.state.shadowsArray;Le.render(Z,b,G),xe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=_.opaque,W=_.transmissive;if(v.setupLights(),G.isArrayCamera){const ve=G.cameras;if(W.length>0)for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++){const Ue=ve[Ae];Es(Q,W,b,Ue)}Ft&&je.render(b);for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++){const Ue=ve[Ae];Ts(_,b,Ue,Ue.viewport)}}else W.length>0&&Es(Q,W,b,G),Ft&&je.render(b),Ts(_,b,G);X!==null&&z===0&&(L.updateMultisampleRenderTarget(X),L.updateRenderTargetMipmap(X)),b.isScene===!0&&b.onAfterRender(D,b,G),Rt.resetDefaultState(),N=-1,C=null,F.pop(),F.length>0?(v=F[F.length-1],xe===!0&&Se.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,O.pop(),O.length>0?_=O[O.length-1]:_=null};function ri(b,G,Z,Q){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ae.intersectsSprite(b)){Q&&Ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4($e);const Ae=ce.update(b),Pe=b.material;Pe.visible&&_.push(b,Ae,Pe,Z,Ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ae.intersectsObject(b))){const Ae=ce.update(b),Pe=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ke.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ke.copy(Ae.boundingSphere.center)),Ke.applyMatrix4(b.matrixWorld).applyMatrix4($e)),Array.isArray(Pe)){const Ue=Ae.groups;for(let et=0,Qe=Ue.length;et<Qe;et++){const We=Ue[et],vt=Pe[We.materialIndex];vt&&vt.visible&&_.push(b,Ae,vt,Z,Ke.z,We)}}else Pe.visible&&_.push(b,Ae,Pe,Z,Ke.z,null)}}const ve=b.children;for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++)ri(ve[Ae],G,Z,Q)}function Ts(b,G,Z,Q){const W=b.opaque,ve=b.transmissive,Ae=b.transparent;v.setupLightsView(Z),xe===!0&&Se.setGlobalState(D.clippingPlanes,Z),Q&&ke.viewport(k.copy(Q)),W.length>0&&Lr(W,G,Z),ve.length>0&&Lr(ve,G,Z),Ae.length>0&&Lr(Ae,G,Z),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Es(b,G,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Q.id]===void 0&&(v.state.transmissionRenderTarget[Q.id]=new Ir(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?ca:Fi,minFilter:br,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const ve=v.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||k;ve.setSize(Ae.z*D.transmissionResolutionScale,Ae.w*D.transmissionResolutionScale);const Pe=D.getRenderTarget();D.setRenderTarget(ve),D.getClearColor(fe),pe=D.getClearAlpha(),pe<1&&D.setClearColor(16777215,.5),D.clear(),Ft&&je.render(Z);const Ue=D.toneMapping;D.toneMapping=tr;const et=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),v.setupLightsView(Q),xe===!0&&Se.setGlobalState(D.clippingPlanes,Q),Lr(b,Z,Q),L.updateMultisampleRenderTarget(ve),L.updateRenderTargetMipmap(ve),st.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let We=0,vt=G.length;We<vt;We++){const Mt=G[We],qt=Mt.object,Vt=Mt.geometry,St=Mt.material,Xe=Mt.group;if(St.side===Di&&qt.layers.test(Q.layers)){const en=St.side;St.side=Mn,St.needsUpdate=!0,da(qt,Z,Q,Vt,St,Xe),St.side=en,St.needsUpdate=!0,Qe=!0}}Qe===!0&&(L.updateMultisampleRenderTarget(ve),L.updateRenderTargetMipmap(ve))}D.setRenderTarget(Pe),D.setClearColor(fe,pe),et!==void 0&&(Q.viewport=et),D.toneMapping=Ue}function Lr(b,G,Z){const Q=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ve=b.length;W<ve;W++){const Ae=b[W],Pe=Ae.object,Ue=Ae.geometry,et=Ae.group;let Qe=Ae.material;Qe.allowOverride===!0&&Q!==null&&(Qe=Q),Pe.layers.test(Z.layers)&&da(Pe,G,Z,Ue,Qe,et)}}function da(b,G,Z,Q,W,ve){b.onBeforeRender(D,G,Z,Q,W,ve),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(D,G,Z,Q,b,ve),W.transparent===!0&&W.side===Di&&W.forceSinglePass===!1?(W.side=Mn,W.needsUpdate=!0,D.renderBufferDirect(Z,G,Q,W,b,ve),W.side=Ui,W.needsUpdate=!0,D.renderBufferDirect(Z,G,Q,W,b,ve),W.side=Di):D.renderBufferDirect(Z,G,Q,W,b,ve),b.onAfterRender(D,G,Z,Q,W,ve)}function Or(b,G,Z){G.isScene!==!0&&(G=zt);const Q=Te.get(b),W=v.state.lights,ve=v.state.shadowsArray,Ae=W.state.version,Pe=Ne.getParameters(b,W.state,ve,G,Z),Ue=Ne.getProgramCacheKey(Pe);let et=Q.programs;Q.environment=b.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(b.isMeshStandardMaterial?j:w).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,et===void 0&&(b.addEventListener("dispose",Ye),et=new Map,Q.programs=et);let Qe=et.get(Ue);if(Qe!==void 0){if(Q.currentProgram===Qe&&Q.lightsStateVersion===Ae)return rr(b,Pe),Qe}else Pe.uniforms=Ne.getUniforms(b),b.onBeforeCompile(Pe,D),Qe=Ne.acquireProgram(Pe,Ue),et.set(Ue,Qe),Q.uniforms=Pe.uniforms;const We=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(We.clippingPlanes=Se.uniform),rr(b,Pe),Q.needsLights=Ur(b),Q.lightsStateVersion=Ae,Q.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=Qe,Q.uniformsList=null,Qe}function Ms(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=rl.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function rr(b,G){const Z=Te.get(b);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function ul(b,G,Z,Q,W){G.isScene!==!0&&(G=zt),L.resetTextureUnits();const ve=G.fog,Ae=Q.isMeshStandardMaterial?G.environment:null,Pe=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:vs,Ue=(Q.isMeshStandardMaterial?j:w).get(Q.envMap||Ae),et=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qe=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),We=!!Z.morphAttributes.position,vt=!!Z.morphAttributes.normal,Mt=!!Z.morphAttributes.color;let qt=tr;Q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qt=D.toneMapping);const Vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=Vt!==void 0?Vt.length:0,Xe=Te.get(Q),en=v.state.lights;if(xe===!0&&(Fe===!0||b!==C)){const Ut=b===C&&Q.id===N;Se.setState(Q,b,Ut)}let M=!1;Q.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==en.state.version||Xe.outputColorSpace!==Pe||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==Ue||Q.fog===!0&&Xe.fog!==ve||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==et||Xe.vertexTangents!==Qe||Xe.morphTargets!==We||Xe.morphNormals!==vt||Xe.morphColors!==Mt||Xe.toneMapping!==qt||Xe.morphTargetsCount!==St)&&(M=!0):(M=!0,Xe.__version=Q.version);let Ot=Xe.currentProgram;M===!0&&(Ot=Or(Q,G,W));let vi=!1,bt=!1,vn=!1;const _t=Ot.getUniforms(),Jt=Xe.uniforms;if(ke.useProgram(Ot.program)&&(vi=!0,bt=!0,vn=!0),Q.id!==N&&(N=Q.id,bt=!0),vi||C!==b){ke.buffers.depth.getReversed()?(be.copy(b.projectionMatrix),l_(be),h_(be),_t.setValue(U,"projectionMatrix",be)):_t.setValue(U,"projectionMatrix",b.projectionMatrix),_t.setValue(U,"viewMatrix",b.matrixWorldInverse);const kt=_t.map.cameraPosition;kt!==void 0&&kt.setValue(U,yt.setFromMatrixPosition(b.matrixWorld)),nt.logarithmicDepthBuffer&&_t.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&_t.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,bt=!0,vn=!0)}if(W.isSkinnedMesh){_t.setOptional(U,W,"bindMatrix"),_t.setOptional(U,W,"bindMatrixInverse");const Ut=W.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),_t.setValue(U,"boneTexture",Ut.boneTexture,L))}W.isBatchedMesh&&(_t.setOptional(U,W,"batchingTexture"),_t.setValue(U,"batchingTexture",W._matricesTexture,L),_t.setOptional(U,W,"batchingIdTexture"),_t.setValue(U,"batchingIdTexture",W._indirectTexture,L),_t.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&_t.setValue(U,"batchingColorTexture",W._colorsTexture,L));const Xt=Z.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&Ze.update(W,Z,Ot),(bt||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,_t.setValue(U,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Jt.envMap.value=Ue,Jt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(Jt.envMapIntensity.value=G.environmentIntensity),bt&&(_t.setValue(U,"toneMappingExposure",D.toneMappingExposure),Xe.needsLights&&dl(Jt,vn),ve&&Q.fog===!0&&Ee.refreshFogUniforms(Jt,ve),Ee.refreshMaterialUniforms(Jt,Q,se,ge,v.state.transmissionRenderTarget[b.id]),rl.upload(U,Ms(Xe),Jt,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(rl.upload(U,Ms(Xe),Jt,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&_t.setValue(U,"center",W.center),_t.setValue(U,"modelViewMatrix",W.modelViewMatrix),_t.setValue(U,"normalMatrix",W.normalMatrix),_t.setValue(U,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Ut=Q.uniformsGroups;for(let kt=0,yn=Ut.length;kt<yn;kt++){const an=Ut[kt];V.update(an,Ot),V.bind(an,Ot)}}return Ot}function dl(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Ur(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,G,Z){const Q=Te.get(b);Q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Te.get(b.texture).__webglTexture=G,Te.get(b.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,G){const Z=Te.get(b);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};const fa=U.createFramebuffer();this.setRenderTarget=function(b,G=0,Z=0){X=b,H=G,z=Z;let Q=!0,W=null,ve=!1,Ae=!1;if(b){const Ue=Te.get(b);if(Ue.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(U.FRAMEBUFFER,null),Q=!1;else if(Ue.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(Ue.__hasExternalTextures)L.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const We=b.depthTexture;if(Ue.__boundDepthTexture!==We){if(We!==null&&Te.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const et=b.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ae=!0);const Qe=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[G])?W=Qe[G][Z]:W=Qe[G],ve=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?W=Te.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?W=Qe[Z]:W=Qe,k.copy(b.viewport),oe.copy(b.scissor),ne=b.scissorTest}else k.copy(Ge).multiplyScalar(se).floor(),oe.copy(ct).multiplyScalar(se).floor(),ne=Et;if(Z!==0&&(W=fa),ke.bindFramebuffer(U.FRAMEBUFFER,W)&&Q&&ke.drawBuffers(b,W),ke.viewport(k),ke.scissor(oe),ke.setScissorTest(ne),ve){const Ue=Te.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue.__webglTexture,Z)}else if(Ae){const Ue=Te.get(b.texture),et=G;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.__webglTexture,Z,et)}else if(b!==null&&Z!==0){const Ue=Te.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ue.__webglTexture,Z)}N=-1},this.readRenderTargetPixels=function(b,G,Z,Q,W,ve,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){ke.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const Ue=b.texture,et=Ue.format,Qe=Ue.type;if(!nt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-Q&&Z>=0&&Z<=b.height-W&&U.readPixels(G,Z,Q,W,it.convert(et),it.convert(Qe),ve)}finally{const Ue=X!==null?Te.get(X).__webglFramebuffer:null;ke.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(b,G,Z,Q,W,ve,Ae){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe)if(G>=0&&G<=b.width-Q&&Z>=0&&Z<=b.height-W){ke.bindFramebuffer(U.FRAMEBUFFER,Pe);const Ue=b.texture,et=Ue.format,Qe=Ue.type;if(!nt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,We),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),U.readPixels(G,Z,Q,W,it.convert(et),it.convert(Qe),0);const vt=X!==null?Te.get(X).__webglFramebuffer:null;ke.bindFramebuffer(U.FRAMEBUFFER,vt);const Mt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await c_(U,Mt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,We),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.deleteBuffer(We),U.deleteSync(Mt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,G=null,Z=0){const Q=Math.pow(2,-Z),W=Math.floor(b.image.width*Q),ve=Math.floor(b.image.height*Q),Ae=G!==null?G.x:0,Pe=G!==null?G.y:0;L.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Ae,Pe,W,ve),ke.unbindTexture()};const fl=U.createFramebuffer(),pa=U.createFramebuffer();this.copyTextureToTexture=function(b,G,Z=null,Q=null,W=0,ve=null){ve===null&&(W!==0?(il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=W,W=0):ve=0);let Ae,Pe,Ue,et,Qe,We,vt,Mt,qt;const Vt=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(Z!==null)Ae=Z.max.x-Z.min.x,Pe=Z.max.y-Z.min.y,Ue=Z.isBox3?Z.max.z-Z.min.z:1,et=Z.min.x,Qe=Z.min.y,We=Z.isBox3?Z.min.z:0;else{const Xt=Math.pow(2,-W);Ae=Math.floor(Vt.width*Xt),Pe=Math.floor(Vt.height*Xt),b.isDataArrayTexture?Ue=Vt.depth:b.isData3DTexture?Ue=Math.floor(Vt.depth*Xt):Ue=1,et=0,Qe=0,We=0}Q!==null?(vt=Q.x,Mt=Q.y,qt=Q.z):(vt=0,Mt=0,qt=0);const St=it.convert(G.format),Xe=it.convert(G.type);let en;G.isData3DTexture?(L.setTexture3D(G,0),en=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),en=U.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),en=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const M=U.getParameter(U.UNPACK_ROW_LENGTH),Ot=U.getParameter(U.UNPACK_IMAGE_HEIGHT),vi=U.getParameter(U.UNPACK_SKIP_PIXELS),bt=U.getParameter(U.UNPACK_SKIP_ROWS),vn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,et),U.pixelStorei(U.UNPACK_SKIP_ROWS,Qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,We);const _t=b.isDataArrayTexture||b.isData3DTexture,Jt=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){const Xt=Te.get(b),Ut=Te.get(G),kt=Te.get(Xt.__renderTarget),yn=Te.get(Ut.__renderTarget);ke.bindFramebuffer(U.READ_FRAMEBUFFER,kt.__webglFramebuffer),ke.bindFramebuffer(U.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let an=0;an<Ue;an++)_t&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(b).__webglTexture,W,We+an),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(G).__webglTexture,ve,qt+an)),U.blitFramebuffer(et,Qe,Ae,Pe,vt,Mt,Ae,Pe,U.DEPTH_BUFFER_BIT,U.NEAREST);ke.bindFramebuffer(U.READ_FRAMEBUFFER,null),ke.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Te.has(b)){const Xt=Te.get(b),Ut=Te.get(G);ke.bindFramebuffer(U.READ_FRAMEBUFFER,fl),ke.bindFramebuffer(U.DRAW_FRAMEBUFFER,pa);for(let kt=0;kt<Ue;kt++)_t?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xt.__webglTexture,W,We+kt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xt.__webglTexture,W),Jt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.__webglTexture,ve,qt+kt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ut.__webglTexture,ve),W!==0?U.blitFramebuffer(et,Qe,Ae,Pe,vt,Mt,Ae,Pe,U.COLOR_BUFFER_BIT,U.NEAREST):Jt?U.copyTexSubImage3D(en,ve,vt,Mt,qt+kt,et,Qe,Ae,Pe):U.copyTexSubImage2D(en,ve,vt,Mt,et,Qe,Ae,Pe);ke.bindFramebuffer(U.READ_FRAMEBUFFER,null),ke.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Jt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(en,ve,vt,Mt,qt,Ae,Pe,Ue,St,Xe,Vt.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(en,ve,vt,Mt,qt,Ae,Pe,Ue,St,Vt.data):U.texSubImage3D(en,ve,vt,Mt,qt,Ae,Pe,Ue,St,Xe,Vt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,vt,Mt,Ae,Pe,St,Xe,Vt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,vt,Mt,Vt.width,Vt.height,St,Vt.data):U.texSubImage2D(U.TEXTURE_2D,ve,vt,Mt,Ae,Pe,St,Xe,Vt);U.pixelStorei(U.UNPACK_ROW_LENGTH,M),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vi),U.pixelStorei(U.UNPACK_SKIP_ROWS,bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,vn),ve===0&&G.generateMipmaps&&U.generateMipmap(en),ke.unbindTexture()},this.copyTextureToTexture3D=function(b,G,Z=null,Q=null,W=0){return il('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,G,Z,Q,W)},this.initRenderTarget=function(b){Te.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),ke.unbindTexture()},this.resetState=function(){H=0,z=0,X=null,ke.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(t),i.unpackColorSpace=wt._getUnpackColorSpace()}}const up={type:"change"},Ru={type:"start"},Xp={type:"end"},jc=new Mu,dp=new Zi,PT=Math.cos(70*o_.DEG2RAD),nn=new Y,En=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ah=1e-6;class DT extends X_{constructor(t,i=null){super(t,i),this.state=Lt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new nr,this._lastTargetPosition=new Y,this._quat=new nr().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kf,this._sphericalDelta=new kf,this._scale=1,this._panOffset=new Y,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new Y,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=LT.bind(this),this._onPointerDown=NT.bind(this),this._onPointerUp=OT.bind(this),this._onContextMenu=HT.bind(this),this._onMouseWheel=BT.bind(this),this._onKeyDown=kT.bind(this),this._onTouchStart=zT.bind(this),this._onTouchMove=VT.bind(this),this._onMouseDown=UT.bind(this),this._onMouseMove=FT.bind(this),this._interceptControlDown=GT.bind(this),this._interceptControlUp=WT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(up),this.update(),this.state=Lt.NONE}update(t=null){const i=this.object.position;nn.copy(i).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,h=this.maxAzimuthAngle;isFinite(s)&&isFinite(h)&&(s<-Math.PI?s+=En:s>Math.PI&&(s-=En),h<-Math.PI?h+=En:h>Math.PI&&(h-=En),s<=h?this._spherical.theta=Math.max(s,Math.min(h,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+h)/2?Math.max(s,this._spherical.theta):Math.min(h,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=c!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),i.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const f=nn.length();c=this._clampDistance(f*this._scale);const m=f-c;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const f=new Y(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const g=new Y(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(f),this.object.updateMatrixWorld(),c=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(jc.origin.copy(this.object.position),jc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jc.direction))<PT?this.object.lookAt(this.target):(dp.setFromNormalAndCoplanarPoint(this.object.up,this.target),jc.intersectPlane(dp,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Ah||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ah||this._lastTargetPosition.distanceToSquared(this.target)>Ah?(this.dispatchEvent(up),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?En/60*this.autoRotateSpeed*t:En/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){nn.setFromMatrixColumn(i,0),nn.multiplyScalar(-t),this._panOffset.add(nn)}_panUp(t,i){this.screenSpacePanning===!0?nn.setFromMatrixColumn(i,1):(nn.setFromMatrixColumn(i,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(t),this._panOffset.add(nn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const h=this.object.position;nn.copy(h).sub(this.target);let u=nn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),h=t-s.left,u=i-s.top,c=s.width,f=s.height;this._mouse.x=h/c*2-1,this._mouse.y=-(u/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(En*this._rotateDelta.x/i.clientHeight),this._rotateUp(En*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),h=.5*(t.pageY+i.y);this._rotateStart.set(s,h)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),h=.5*(t.pageY+i.y);this._panStart.set(s,h)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,h=t.pageY-i.y,u=Math.sqrt(s*s+h*h);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),h=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(h,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(En*this._rotateDelta.x/i.clientHeight),this._rotateUp(En*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),h=.5*(t.pageY+i.y);this._panEnd.set(s,h)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,h=t.pageY-i.y,u=Math.sqrt(s*s+h*h);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(t.pageX+i.x)*.5,f=(t.pageY+i.y)*.5;this._updateZoomParameters(c,f)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new at,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function NT(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function LT(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function OT(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xp),this.state=Lt.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function UT(a){let t;switch(a.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=Lt.DOLLY;break;case us.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Lt.ROTATE}break;case us.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Ru)}function FT(a){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function BT(a){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(a.preventDefault(),this.dispatchEvent(Ru),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Xp))}function kT(a){this.enabled!==!1&&this._handleKeyDown(a)}function zT(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=Lt.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=Lt.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Ru)}function VT(a){switch(this._trackPointer(a),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=Lt.NONE}}function HT(a){this.enabled!==!1&&a.preventDefault()}function GT(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WT(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qT(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var no={exports:{}},JT=no.exports,fp;function XT(){return fp||(fp=1,function(a,t){var i={};(function(s,h){h(t)})(JT,function(s){var h=Object.defineProperty,u=(r,e,n)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,c=(r,e,n)=>u(r,typeof e!="symbol"?e+"":e,n),f,m,g,S,x,T,E,R,P,_;(function(r){r[r.Canceled=1]="Canceled",r[r.Unknown=2]="Unknown",r[r.InvalidArgument=3]="InvalidArgument",r[r.DeadlineExceeded=4]="DeadlineExceeded",r[r.NotFound=5]="NotFound",r[r.AlreadyExists=6]="AlreadyExists",r[r.PermissionDenied=7]="PermissionDenied",r[r.ResourceExhausted=8]="ResourceExhausted",r[r.FailedPrecondition=9]="FailedPrecondition",r[r.Aborted=10]="Aborted",r[r.OutOfRange=11]="OutOfRange",r[r.Unimplemented=12]="Unimplemented",r[r.Internal=13]="Internal",r[r.Unavailable=14]="Unavailable",r[r.DataLoss=15]="DataLoss",r[r.Unauthenticated=16]="Unauthenticated"})(_||(_={}));function v(r){const e=_[r];return typeof e!="string"?r.toString():e[0].toLowerCase()+e.substring(1).replace(/[A-Z]/g,n=>"_"+n.toLowerCase())}class O extends Error{constructor(e,n=_.Unknown,o,l,d){super(F(e,n)),this.name="ConnectError",Object.setPrototypeOf(this,new.target.prototype),this.rawMessage=e,this.code=n,this.metadata=new Headers(o??{}),this.details=l??[],this.cause=d}static from(e,n=_.Unknown){return e instanceof O?e:e instanceof Error?e.name=="AbortError"?new O(e.message,_.Canceled):new O(e.message,n,void 0,void 0,e):new O(String(e),n,void 0,void 0,e)}static[Symbol.hasInstance](e){return e instanceof Error?Object.getPrototypeOf(e)===O.prototype?!0:e.name==="ConnectError"&&"code"in e&&typeof e.code=="number"&&"metadata"in e&&"details"in e&&Array.isArray(e.details)&&"rawMessage"in e&&typeof e.rawMessage=="string"&&"cause"in e:!1}findDetails(e){const n="typeName"in e?{findMessage:l=>l===e.typeName?e:void 0}:e,o=[];for(const l of this.details){if("getType"in l){n.findMessage(l.getType().typeName)&&o.push(l);continue}const d=n.findMessage(l.type);if(d)try{o.push(d.fromBinary(l.value))}catch{}}return o}}function F(r,e){return r.length?`[${v(e)}] ${r}`:`[${v(e)}]`}function D(r,e){if(!r)throw new Error(e)}const q=34028234663852886e22,H=-34028234663852886e22,z=4294967295,X=2147483647,N=-2147483648;function C(r){if(typeof r!="number")throw new Error("invalid int 32: "+typeof r);if(!Number.isInteger(r)||r>X||r<N)throw new Error("invalid int 32: "+r)}function k(r){if(typeof r!="number")throw new Error("invalid uint 32: "+typeof r);if(!Number.isInteger(r)||r>z||r<0)throw new Error("invalid uint 32: "+r)}function oe(r){if(typeof r!="number")throw new Error("invalid float 32: "+typeof r);if(Number.isFinite(r)&&(r>q||r<H))throw new Error("invalid float 32: "+r)}const ne=Symbol("@bufbuild/protobuf/enum-type");function fe(r){const e=r[ne];return D(e,"missing enum type on enum object"),e}function pe(r,e,n,o){r[ne]=le(e,n.map(l=>({no:l.no,name:l.name,localName:r[l.no]})))}function le(r,e,n){const o=Object.create(null),l=Object.create(null),d=[];for(const p of e){const y=se(p);d.push(y),o[p.name]=y,l[p.no]=y}return{typeName:r,values:d,findName(p){return o[p]},findNumber(p){return l[p]}}}function ge(r,e,n){const o={};for(const l of e){const d=se(l);o[d.localName]=d.no,o[d.no]=d.localName}return pe(o,r,e),o}function se(r){return"localName"in r?r:Object.assign(Object.assign({},r),{localName:r.name})}class K{equals(e){return this.getType().runtime.util.equals(this.getType(),this,e)}clone(){return this.getType().runtime.util.clone(this)}fromBinary(e,n){const o=this.getType(),l=o.runtime.bin,d=l.makeReadOptions(n);return l.readMessage(this,d.readerFactory(e),e.byteLength,d),this}fromJson(e,n){const o=this.getType(),l=o.runtime.json,d=l.makeReadOptions(n);return l.readMessage(o,e,d,this),this}fromJsonString(e,n){let o;try{o=JSON.parse(e)}catch(l){throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${l instanceof Error?l.message:String(l)}`)}return this.fromJson(o,n)}toBinary(e){const n=this.getType(),o=n.runtime.bin,l=o.makeWriteOptions(e),d=l.writerFactory();return o.writeMessage(this,d,l),d.finish()}toJson(e){const n=this.getType(),o=n.runtime.json,l=o.makeWriteOptions(e);return o.writeMessage(this,l)}toJsonString(e){var n;const o=this.toJson(e);return JSON.stringify(o,null,(n=e==null?void 0:e.prettySpaces)!==null&&n!==void 0?n:0)}toJSON(){return this.toJson({emitDefaultValues:!0})}getType(){return Object.getPrototypeOf(this).constructor}}function De(r,e,n,o){var l;const d=(l=o==null?void 0:o.localName)!==null&&l!==void 0?l:e.substring(e.lastIndexOf(".")+1),p={[d]:function(y){r.util.initFields(this),r.util.initPartial(y,this)}}[d];return Object.setPrototypeOf(p.prototype,new K),Object.assign(p,{runtime:r,typeName:e,fields:r.util.newFieldList(n),fromBinary(y,A){return new p().fromBinary(y,A)},fromJson(y,A){return new p().fromJson(y,A)},fromJsonString(y,A){return new p().fromJsonString(y,A)},equals(y,A){return r.util.equals(p,y,A)}}),p}function Ge(){let r=0,e=0;for(let o=0;o<28;o+=7){let l=this.buf[this.pos++];if(r|=(l&127)<<o,(l&128)==0)return this.assertBounds(),[r,e]}let n=this.buf[this.pos++];if(r|=(n&15)<<28,e=(n&112)>>4,(n&128)==0)return this.assertBounds(),[r,e];for(let o=3;o<=31;o+=7){let l=this.buf[this.pos++];if(e|=(l&127)<<o,(l&128)==0)return this.assertBounds(),[r,e]}throw new Error("invalid varint")}function ct(r,e,n){for(let d=0;d<28;d=d+7){const p=r>>>d,y=!(!(p>>>7)&&e==0),A=(y?p|128:p)&255;if(n.push(A),!y)return}const o=r>>>28&15|(e&7)<<4,l=e>>3!=0;if(n.push((l?o|128:o)&255),!!l){for(let d=3;d<31;d=d+7){const p=e>>>d,y=!!(p>>>7),A=(y?p|128:p)&255;if(n.push(A),!y)return}n.push(e>>>31&1)}}const Et=4294967296;function ae(r){const e=r[0]==="-";e&&(r=r.slice(1));const n=1e6;let o=0,l=0;function d(p,y){const A=Number(r.slice(p,y));l*=n,o=o*n+A,o>=Et&&(l=l+(o/Et|0),o=o%Et)}return d(-24,-18),d(-18,-12),d(-12,-6),d(-6),e?yt(o,l):$e(o,l)}function xe(r,e){let n=$e(r,e);const o=n.hi&2147483648;o&&(n=yt(n.lo,n.hi));const l=Fe(n.lo,n.hi);return o?"-"+l:l}function Fe(r,e){if({lo:r,hi:e}=be(r,e),e<=2097151)return String(Et*e+r);const n=r&16777215,o=(r>>>24|e<<8)&16777215,l=e>>16&65535;let d=n+o*6777216+l*6710656,p=o+l*8147497,y=l*2;const A=1e7;return d>=A&&(p+=Math.floor(d/A),d%=A),p>=A&&(y+=Math.floor(p/A),p%=A),y.toString()+Ke(p)+Ke(d)}function be(r,e){return{lo:r>>>0,hi:e>>>0}}function $e(r,e){return{lo:r|0,hi:e|0}}function yt(r,e){return e=~e,r?r=~r+1:e+=1,$e(r,e)}const Ke=r=>{const e=String(r);return"0000000".slice(e.length)+e};function zt(r,e){if(r>=0){for(;r>127;)e.push(r&127|128),r=r>>>7;e.push(r)}else{for(let n=0;n<9;n++)e.push(r&127|128),r=r>>7;e.push(1)}}function Ft(){let r=this.buf[this.pos++],e=r&127;if((r&128)==0)return this.assertBounds(),e;if(r=this.buf[this.pos++],e|=(r&127)<<7,(r&128)==0)return this.assertBounds(),e;if(r=this.buf[this.pos++],e|=(r&127)<<14,(r&128)==0)return this.assertBounds(),e;if(r=this.buf[this.pos++],e|=(r&127)<<21,(r&128)==0)return this.assertBounds(),e;r=this.buf[this.pos++],e|=(r&15)<<28;for(let n=5;(r&128)!==0&&n<10;n++)r=this.buf[this.pos++];if((r&128)!=0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}function dt(){const r=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof r.getBigInt64=="function"&&typeof r.getBigUint64=="function"&&typeof r.setBigInt64=="function"&&typeof r.setBigUint64=="function"&&(typeof process!="object"||typeof i!="object"||i.BUF_BIGINT_DISABLE!=="1")){const l=BigInt("-9223372036854775808"),d=BigInt("9223372036854775807"),p=BigInt("0"),y=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(A){const I=typeof A=="bigint"?A:BigInt(A);if(I>d||I<l)throw new Error(`int64 invalid: ${A}`);return I},uParse(A){const I=typeof A=="bigint"?A:BigInt(A);if(I>y||I<p)throw new Error(`uint64 invalid: ${A}`);return I},enc(A){return r.setBigInt64(0,this.parse(A),!0),{lo:r.getInt32(0,!0),hi:r.getInt32(4,!0)}},uEnc(A){return r.setBigInt64(0,this.uParse(A),!0),{lo:r.getInt32(0,!0),hi:r.getInt32(4,!0)}},dec(A,I){return r.setInt32(0,A,!0),r.setInt32(4,I,!0),r.getBigInt64(0,!0)},uDec(A,I){return r.setInt32(0,A,!0),r.setInt32(4,I,!0),r.getBigUint64(0,!0)}}}const n=l=>D(/^-?[0-9]+$/.test(l),`int64 invalid: ${l}`),o=l=>D(/^[0-9]+$/.test(l),`uint64 invalid: ${l}`);return{zero:"0",supported:!1,parse(l){return typeof l!="string"&&(l=l.toString()),n(l),l},uParse(l){return typeof l!="string"&&(l=l.toString()),o(l),l},enc(l){return typeof l!="string"&&(l=l.toString()),n(l),ae(l)},uEnc(l){return typeof l!="string"&&(l=l.toString()),o(l),ae(l)},dec(l,d){return xe(l,d)},uDec(l,d){return Fe(l,d)}}}const U=dt();var te;(function(r){r[r.DOUBLE=1]="DOUBLE",r[r.FLOAT=2]="FLOAT",r[r.INT64=3]="INT64",r[r.UINT64=4]="UINT64",r[r.INT32=5]="INT32",r[r.FIXED64=6]="FIXED64",r[r.FIXED32=7]="FIXED32",r[r.BOOL=8]="BOOL",r[r.STRING=9]="STRING",r[r.BYTES=12]="BYTES",r[r.UINT32=13]="UINT32",r[r.SFIXED32=15]="SFIXED32",r[r.SFIXED64=16]="SFIXED64",r[r.SINT32=17]="SINT32",r[r.SINT64=18]="SINT64"})(te||(te={}));var st;(function(r){r[r.BIGINT=0]="BIGINT",r[r.STRING=1]="STRING"})(st||(st={}));function nt(r,e,n){if(e===n)return!0;if(r==te.BYTES){if(!(e instanceof Uint8Array)||!(n instanceof Uint8Array)||e.length!==n.length)return!1;for(let o=0;o<e.length;o++)if(e[o]!==n[o])return!1;return!0}switch(r){case te.UINT64:case te.FIXED64:case te.INT64:case te.SFIXED64:case te.SINT64:return e==n}return!1}function ke(r,e){switch(r){case te.BOOL:return!1;case te.UINT64:case te.FIXED64:case te.INT64:case te.SFIXED64:case te.SINT64:return e==0?U.zero:"0";case te.DOUBLE:case te.FLOAT:return 0;case te.BYTES:return new Uint8Array(0);case te.STRING:return"";default:return 0}}function Ct(r,e){switch(r){case te.BOOL:return e===!1;case te.STRING:return e==="";case te.BYTES:return e instanceof Uint8Array&&!e.byteLength;default:return e==0}}var Te;(function(r){r[r.Varint=0]="Varint",r[r.Bit64=1]="Bit64",r[r.LengthDelimited=2]="LengthDelimited",r[r.StartGroup=3]="StartGroup",r[r.EndGroup=4]="EndGroup",r[r.Bit32=5]="Bit32"})(Te||(Te={}));class L{constructor(e){this.stack=[],this.textEncoder=e??new TextEncoder,this.chunks=[],this.buf=[]}finish(){this.chunks.push(new Uint8Array(this.buf));let e=0;for(let l=0;l<this.chunks.length;l++)e+=this.chunks[l].length;let n=new Uint8Array(e),o=0;for(let l=0;l<this.chunks.length;l++)n.set(this.chunks[l],o),o+=this.chunks[l].length;return this.chunks=[],n}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let e=this.finish(),n=this.stack.pop();if(!n)throw new Error("invalid state, fork stack empty");return this.chunks=n.chunks,this.buf=n.buf,this.uint32(e.byteLength),this.raw(e)}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(e),this}uint32(e){for(k(e);e>127;)this.buf.push(e&127|128),e=e>>>7;return this.buf.push(e),this}int32(e){return C(e),zt(e,this.buf),this}bool(e){return this.buf.push(e?1:0),this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){let n=this.textEncoder.encode(e);return this.uint32(n.byteLength),this.raw(n)}float(e){oe(e);let n=new Uint8Array(4);return new DataView(n.buffer).setFloat32(0,e,!0),this.raw(n)}double(e){let n=new Uint8Array(8);return new DataView(n.buffer).setFloat64(0,e,!0),this.raw(n)}fixed32(e){k(e);let n=new Uint8Array(4);return new DataView(n.buffer).setUint32(0,e,!0),this.raw(n)}sfixed32(e){C(e);let n=new Uint8Array(4);return new DataView(n.buffer).setInt32(0,e,!0),this.raw(n)}sint32(e){return C(e),e=(e<<1^e>>31)>>>0,zt(e,this.buf),this}sfixed64(e){let n=new Uint8Array(8),o=new DataView(n.buffer),l=U.enc(e);return o.setInt32(0,l.lo,!0),o.setInt32(4,l.hi,!0),this.raw(n)}fixed64(e){let n=new Uint8Array(8),o=new DataView(n.buffer),l=U.uEnc(e);return o.setInt32(0,l.lo,!0),o.setInt32(4,l.hi,!0),this.raw(n)}int64(e){let n=U.enc(e);return ct(n.lo,n.hi,this.buf),this}sint64(e){let n=U.enc(e),o=n.hi>>31,l=n.lo<<1^o,d=(n.hi<<1|n.lo>>>31)^o;return ct(l,d,this.buf),this}uint64(e){let n=U.uEnc(e);return ct(n.lo,n.hi,this.buf),this}}class w{constructor(e,n){this.varint64=Ge,this.uint32=Ft,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength),this.textDecoder=n??new TextDecoder}tag(){let e=this.uint32(),n=e>>>3,o=e&7;if(n<=0||o<0||o>5)throw new Error("illegal tag: field no "+n+" wire type "+o);return[n,o]}skip(e,n){let o=this.pos;switch(e){case Te.Varint:for(;this.buf[this.pos++]&128;);break;case Te.Bit64:this.pos+=4;case Te.Bit32:this.pos+=4;break;case Te.LengthDelimited:let l=this.uint32();this.pos+=l;break;case Te.StartGroup:for(;;){const[d,p]=this.tag();if(p===Te.EndGroup){if(n!==void 0&&d!==n)throw new Error("invalid end group tag");break}this.skip(p,d)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(o,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return U.dec(...this.varint64())}uint64(){return U.uDec(...this.varint64())}sint64(){let[e,n]=this.varint64(),o=-(e&1);return e=(e>>>1|(n&1)<<31)^o,n=n>>>1^o,U.dec(e,n)}bool(){let[e,n]=this.varint64();return e!==0||n!==0}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return U.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return U.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(){return this.textDecoder.decode(this.bytes())}}function j(r,e,n,o){let l;return{typeName:e,extendee:n,get field(){if(!l){const d=typeof o=="function"?o():o;d.name=e.split(".").pop(),d.jsonName=`[${e}]`,l=r.util.newFieldList([d]).list()[0]}return l},runtime:r}}function ue(r){const e=r.field.localName,n=Object.create(null);return n[e]=me(r),[n,()=>n[e]]}function me(r){const e=r.field;if(e.repeated)return[];if(e.default!==void 0)return e.default;switch(e.kind){case"enum":return e.T.values[0].no;case"scalar":return ke(e.T,e.L);case"message":const n=e.T,o=new n;return n.fieldWrapper?n.fieldWrapper.unwrapField(o):o;case"map":throw"map fields are not allowed to be extensions"}}function ce(r,e){if(!e.repeated&&(e.kind=="enum"||e.kind=="scalar")){for(let n=r.length-1;n>=0;--n)if(r[n].no==e.no)return[r[n]];return[]}return r.filter(n=>n.no===e.no)}let Ne="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),Ee=[];for(let r=0;r<Ne.length;r++)Ee[Ne[r].charCodeAt(0)]=r;Ee[45]=Ne.indexOf("+"),Ee[95]=Ne.indexOf("/");const Ie={dec(r){let e=r.length*3/4;r[r.length-2]=="="?e-=2:r[r.length-1]=="="&&(e-=1);let n=new Uint8Array(e),o=0,l=0,d,p=0;for(let y=0;y<r.length;y++){if(d=Ee[r.charCodeAt(y)],d===void 0)switch(r[y]){case"=":l=0;case`
`:case"\r":case"	":case" ":continue;default:throw Error("invalid base64 string.")}switch(l){case 0:p=d,l=1;break;case 1:n[o++]=p<<2|(d&48)>>4,p=d,l=2;break;case 2:n[o++]=(p&15)<<4|(d&60)>>2,p=d,l=3;break;case 3:n[o++]=(p&3)<<6|d,l=0;break}}if(l==1)throw Error("invalid base64 string.");return n.subarray(0,o)},enc(r){let e="",n=0,o,l=0;for(let d=0;d<r.length;d++)switch(o=r[d],n){case 0:e+=Ne[o>>2],l=(o&3)<<4,n=1;break;case 1:e+=Ne[l|o>>4],l=(o&15)<<2,n=2;break;case 2:e+=Ne[l|o>>6],e+=Ne[o&63],n=0;break}return n&&(e+=Ne[l],e+="=",n==1&&(e+="=")),e}};function mt(r,e,n){je(e,r);const o=e.runtime.bin.makeReadOptions(n),l=ce(r.getType().runtime.bin.listUnknownFields(r),e.field),[d,p]=ue(e);for(const y of l)e.runtime.bin.readField(d,o.readerFactory(y.data),e.field,y.wireType,o);return p()}function Se(r,e,n,o){je(e,r);const l=e.runtime.bin.makeReadOptions(o),d=e.runtime.bin.makeWriteOptions(o);if(Le(r,e)){const I=r.getType().runtime.bin.listUnknownFields(r).filter(B=>B.no!=e.field.no);r.getType().runtime.bin.discardUnknownFields(r);for(const B of I)r.getType().runtime.bin.onUnknownField(r,B.no,B.wireType,B.data)}const p=d.writerFactory();let y=e.field;!y.opt&&!y.repeated&&(y.kind=="enum"||y.kind=="scalar")&&(y=Object.assign(Object.assign({},e.field),{opt:!0})),e.runtime.bin.writeField(y,n,p,d);const A=l.readerFactory(p.finish());for(;A.pos<A.len;){const[I,B]=A.tag(),ie=A.skip(B,I);r.getType().runtime.bin.onUnknownField(r,I,B,ie)}}function Le(r,e){const n=r.getType();return e.extendee.typeName===n.typeName&&!!n.runtime.bin.listUnknownFields(r).find(o=>o.no==e.field.no)}function je(r,e){D(r.extendee.typeName==e.getType().typeName,`extension ${r.typeName} can only be applied to message ${r.extendee.typeName}`)}function Ze(r,e){const n=r.localName;if(r.repeated)return e[n].length>0;if(r.oneof)return e[r.oneof.localName].case===n;switch(r.kind){case"enum":case"scalar":return r.opt||r.req?e[n]!==void 0:r.kind=="enum"?e[n]!==r.T.values[0].no:!Ct(r.T,e[n]);case"message":return e[n]!==void 0;case"map":return Object.keys(e[n]).length>0}}function Oe(r,e){const n=r.localName,o=!r.opt&&!r.req;if(r.repeated)e[n]=[];else if(r.oneof)e[r.oneof.localName]={case:void 0};else switch(r.kind){case"map":e[n]={};break;case"enum":e[n]=o?r.T.values[0].no:void 0;break;case"scalar":e[n]=o?ke(r.T,r.L):void 0;break;case"message":e[n]=void 0;break}}function ot(r,e){if(r===null||typeof r!="object"||!Object.getOwnPropertyNames(K.prototype).every(o=>o in r&&typeof r[o]=="function"))return!1;const n=r.getType();return n===null||typeof n!="function"||!("typeName"in n)||typeof n.typeName!="string"?!1:e===void 0?!0:n.typeName==e.typeName}function it(r,e){return ot(e)||!r.fieldWrapper?e:r.fieldWrapper.wrapField(e)}te.DOUBLE,te.FLOAT,te.INT64,te.UINT64,te.INT32,te.UINT32,te.BOOL,te.STRING,te.BYTES;const Rt={ignoreUnknownFields:!1},V={emitDefaultValues:!1,enumAsInteger:!1,useProtoFieldName:!1,prettySpaces:0};function Re(r){return r?Object.assign(Object.assign({},Rt),r):Rt}function re(r){return r?Object.assign(Object.assign({},V),r):V}const he=Symbol(),we=Symbol();function Ce(){return{makeReadOptions:Re,makeWriteOptions:re,readMessage(r,e,n,o){if(e==null||Array.isArray(e)||typeof e!="object")throw new Error(`cannot decode message ${r.typeName} from JSON: ${Ye(e)}`);o=o??new r;const l=new Map,d=n.typeRegistry;for(const[p,y]of Object.entries(e)){const A=r.fields.findJsonName(p);if(A){if(A.oneof){if(y===null&&A.kind=="scalar")continue;const I=l.get(A.oneof);if(I!==void 0)throw new Error(`cannot decode message ${r.typeName} from JSON: multiple keys for oneof "${A.oneof.name}" present: "${I}", "${p}"`);l.set(A.oneof,p)}Bt(o,y,A,n,r)}else{let I=!1;if(d!=null&&d.findExtension&&p.startsWith("[")&&p.endsWith("]")){const B=d.findExtension(p.substring(1,p.length-1));if(B&&B.extendee.typeName==r.typeName){I=!0;const[ie,de]=ue(B);Bt(ie,y,B.field,n,B),Se(o,B,de(),n)}}if(!I&&!n.ignoreUnknownFields)throw new Error(`cannot decode message ${r.typeName} from JSON: key "${p}" is unknown`)}}return o},writeMessage(r,e){const n=r.getType(),o={};let l;try{for(l of n.fields.byNumber()){if(!Ze(l,r)){if(l.req)throw"required field not set";if(!e.emitDefaultValues||!Gn(l))continue}const p=l.oneof?r[l.oneof.localName].value:r[l.localName],y=xs(l,p,e);y!==void 0&&(o[e.useProtoFieldName?l.name:l.jsonName]=y)}const d=e.typeRegistry;if(d!=null&&d.findExtensionFor)for(const p of n.runtime.bin.listUnknownFields(r)){const y=d.findExtensionFor(n.typeName,p.no);if(y&&Le(r,y)){const A=mt(r,y,e),I=xs(y.field,A,e);I!==void 0&&(o[y.field.jsonName]=I)}}}catch(d){const p=l?`cannot encode field ${n.typeName}.${l.name} to JSON`:`cannot encode message ${n.typeName} to JSON`,y=d instanceof Error?d.message:String(d);throw new Error(p+(y.length>0?`: ${y}`:""))}return o},readScalar(r,e,n){return gt(r,e,n??st.BIGINT,!0)},writeScalar(r,e,n){if(e!==void 0&&(n||Ct(r,e)))return Nn(r,e)},debug:Ye}}function Ye(r){if(r===null)return"null";switch(typeof r){case"object":return Array.isArray(r)?"array":"object";case"string":return r.length>100?"string":`"${r.split('"').join('\\"')}"`;default:return String(r)}}function Bt(r,e,n,o,l){let d=n.localName;if(n.repeated){if(D(n.kind!="map"),e===null)return;if(!Array.isArray(e))throw new Error(`cannot decode field ${l.typeName}.${n.name} from JSON: ${Ye(e)}`);const p=r[d];for(const y of e){if(y===null)throw new Error(`cannot decode field ${l.typeName}.${n.name} from JSON: ${Ye(y)}`);switch(n.kind){case"message":p.push(n.T.fromJson(y,o));break;case"enum":const A=gn(n.T,y,o.ignoreUnknownFields,!0);A!==we&&p.push(A);break;case"scalar":try{p.push(gt(n.T,y,n.L,!0))}catch(I){let B=`cannot decode field ${l.typeName}.${n.name} from JSON: ${Ye(y)}`;throw I instanceof Error&&I.message.length>0&&(B+=`: ${I.message}`),new Error(B)}break}}}else if(n.kind=="map"){if(e===null)return;if(typeof e!="object"||Array.isArray(e))throw new Error(`cannot decode field ${l.typeName}.${n.name} from JSON: ${Ye(e)}`);const p=r[d];for(const[y,A]of Object.entries(e)){if(A===null)throw new Error(`cannot decode field ${l.typeName}.${n.name} from JSON: map value null`);let I;try{I=on(n.K,y)}catch(B){let ie=`cannot decode map key for field ${l.typeName}.${n.name} from JSON: ${Ye(e)}`;throw B instanceof Error&&B.message.length>0&&(ie+=`: ${B.message}`),new Error(ie)}switch(n.V.kind){case"message":p[I]=n.V.T.fromJson(A,o);break;case"enum":const B=gn(n.V.T,A,o.ignoreUnknownFields,!0);B!==we&&(p[I]=B);break;case"scalar":try{p[I]=gt(n.V.T,A,st.BIGINT,!0)}catch(ie){let de=`cannot decode map value for field ${l.typeName}.${n.name} from JSON: ${Ye(e)}`;throw ie instanceof Error&&ie.message.length>0&&(de+=`: ${ie.message}`),new Error(de)}break}}}else switch(n.oneof&&(r=r[n.oneof.localName]={case:d},d="value"),n.kind){case"message":const p=n.T;if(e===null&&p.typeName!="google.protobuf.Value")return;let y=r[d];ot(y)?y.fromJson(e,o):(r[d]=y=p.fromJson(e,o),p.fieldWrapper&&!n.oneof&&(r[d]=p.fieldWrapper.unwrapField(y)));break;case"enum":const A=gn(n.T,e,o.ignoreUnknownFields,!1);switch(A){case he:Oe(n,r);break;case we:break;default:r[d]=A;break}break;case"scalar":try{const I=gt(n.T,e,n.L,!1);switch(I){case he:Oe(n,r);break;default:r[d]=I;break}}catch(I){let B=`cannot decode field ${l.typeName}.${n.name} from JSON: ${Ye(e)}`;throw I instanceof Error&&I.message.length>0&&(B+=`: ${I.message}`),new Error(B)}break}}function on(r,e){if(r===te.BOOL)switch(e){case"true":e=!0;break;case"false":e=!1;break}return gt(r,e,st.BIGINT,!0).toString()}function gt(r,e,n,o){if(e===null)return o?ke(r,n):he;switch(r){case te.DOUBLE:case te.FLOAT:if(e==="NaN")return Number.NaN;if(e==="Infinity")return Number.POSITIVE_INFINITY;if(e==="-Infinity")return Number.NEGATIVE_INFINITY;if(e===""||typeof e=="string"&&e.trim().length!==e.length||typeof e!="string"&&typeof e!="number")break;const l=Number(e);if(Number.isNaN(l)||!Number.isFinite(l))break;return r==te.FLOAT&&oe(l),l;case te.INT32:case te.FIXED32:case te.SFIXED32:case te.SINT32:case te.UINT32:let d;if(typeof e=="number"?d=e:typeof e=="string"&&e.length>0&&e.trim().length===e.length&&(d=Number(e)),d===void 0)break;return r==te.UINT32||r==te.FIXED32?k(d):C(d),d;case te.INT64:case te.SFIXED64:case te.SINT64:if(typeof e!="number"&&typeof e!="string")break;const p=U.parse(e);return n?p.toString():p;case te.FIXED64:case te.UINT64:if(typeof e!="number"&&typeof e!="string")break;const y=U.uParse(e);return n?y.toString():y;case te.BOOL:if(typeof e!="boolean")break;return e;case te.STRING:if(typeof e!="string")break;try{encodeURIComponent(e)}catch{throw new Error("invalid UTF8")}return e;case te.BYTES:if(e==="")return new Uint8Array(0);if(typeof e!="string")break;return Ie.dec(e)}throw new Error}function gn(r,e,n,o){if(e===null)return r.typeName=="google.protobuf.NullValue"?0:o?r.values[0].no:he;switch(typeof e){case"number":if(Number.isInteger(e))return e;break;case"string":const l=r.findName(e);if(l!==void 0)return l.no;if(n)return we;break}throw new Error(`cannot decode enum ${r.typeName} from JSON: ${Ye(e)}`)}function Gn(r){return r.repeated||r.kind=="map"?!0:!(r.oneof||r.kind=="message"||r.opt||r.req)}function xs(r,e,n){if(r.kind=="map"){D(typeof e=="object"&&e!=null);const o={},l=Object.entries(e);switch(r.V.kind){case"scalar":for(const[p,y]of l)o[p.toString()]=Nn(r.V.T,y);break;case"message":for(const[p,y]of l)o[p.toString()]=y.toJson(n);break;case"enum":const d=r.V.T;for(const[p,y]of l)o[p.toString()]=Nr(d,y,n.enumAsInteger);break}return n.emitDefaultValues||l.length>0?o:void 0}if(r.repeated){D(Array.isArray(e));const o=[];switch(r.kind){case"scalar":for(let l=0;l<e.length;l++)o.push(Nn(r.T,e[l]));break;case"enum":for(let l=0;l<e.length;l++)o.push(Nr(r.T,e[l],n.enumAsInteger));break;case"message":for(let l=0;l<e.length;l++)o.push(e[l].toJson(n));break}return n.emitDefaultValues||o.length>0?o:void 0}switch(r.kind){case"scalar":return Nn(r.T,e);case"enum":return Nr(r.T,e,n.enumAsInteger);case"message":return it(r.T,e).toJson(n)}}function Nr(r,e,n){var o;if(D(typeof e=="number"),r.typeName=="google.protobuf.NullValue")return null;if(n)return e;const l=r.findNumber(e);return(o=l==null?void 0:l.name)!==null&&o!==void 0?o:e}function Nn(r,e){switch(r){case te.INT32:case te.SFIXED32:case te.SINT32:case te.FIXED32:case te.UINT32:return D(typeof e=="number"),e;case te.FLOAT:case te.DOUBLE:return D(typeof e=="number"),Number.isNaN(e)?"NaN":e===Number.POSITIVE_INFINITY?"Infinity":e===Number.NEGATIVE_INFINITY?"-Infinity":e;case te.STRING:return D(typeof e=="string"),e;case te.BOOL:return D(typeof e=="boolean"),e;case te.UINT64:case te.FIXED64:case te.INT64:case te.SFIXED64:case te.SINT64:return D(typeof e=="bigint"||typeof e=="string"||typeof e=="number"),e.toString();case te.BYTES:return D(e instanceof Uint8Array),Ie.enc(e)}}const ri=Symbol("@bufbuild/protobuf/unknown-fields"),Ts={readUnknownFields:!0,readerFactory:r=>new w(r)},Es={writeUnknownFields:!0,writerFactory:()=>new L};function Lr(r){return r?Object.assign(Object.assign({},Ts),r):Ts}function da(r){return r?Object.assign(Object.assign({},Es),r):Es}function Or(){return{makeReadOptions:Lr,makeWriteOptions:da,listUnknownFields(r){var e;return(e=r[ri])!==null&&e!==void 0?e:[]},discardUnknownFields(r){delete r[ri]},writeUnknownFields(r,e){const o=r[ri];if(o)for(const l of o)e.tag(l.no,l.wireType).raw(l.data)},onUnknownField(r,e,n,o){const l=r;Array.isArray(l[ri])||(l[ri]=[]),l[ri].push({no:e,wireType:n,data:o})},readMessage(r,e,n,o,l){const d=r.getType(),p=l?e.len:e.pos+n;let y,A;for(;e.pos<p&&([y,A]=e.tag(),!(l===!0&&A==Te.EndGroup));){const I=d.fields.find(y);if(!I){const B=e.skip(A,y);o.readUnknownFields&&this.onUnknownField(r,y,A,B);continue}Ms(r,e,I,A,o)}if(l&&(A!=Te.EndGroup||y!==n))throw new Error("invalid end group tag")},readField:Ms,writeMessage(r,e,n){const o=r.getType();for(const l of o.fields.byNumber()){if(!Ze(l,r)){if(l.req)throw new Error(`cannot encode field ${o.typeName}.${l.name} to binary: required field not set`);continue}const d=l.oneof?r[l.oneof.localName].value:r[l.localName];fa(l,d,e,n)}return n.writeUnknownFields&&this.writeUnknownFields(r,e),e},writeField(r,e,n,o){e!==void 0&&fa(r,e,n,o)}}}function Ms(r,e,n,o,l){let{repeated:d,localName:p}=n;switch(n.oneof&&(r=r[n.oneof.localName],r.case!=p&&delete r.value,r.case=p,p="value"),n.kind){case"scalar":case"enum":const y=n.kind=="enum"?te.INT32:n.T;let A=Ur;if(n.kind=="scalar"&&n.L>0&&(A=dl),d){let de=r[p];if(o==Te.LengthDelimited&&y!=te.STRING&&y!=te.BYTES){let _e=e.uint32()+e.pos;for(;e.pos<_e;)de.push(A(e,y))}else de.push(A(e,y))}else r[p]=A(e,y);break;case"message":const I=n.T;d?r[p].push(rr(e,new I,l,n)):ot(r[p])?rr(e,r[p],l,n):(r[p]=rr(e,new I,l,n),I.fieldWrapper&&!n.oneof&&!n.repeated&&(r[p]=I.fieldWrapper.unwrapField(r[p])));break;case"map":let[B,ie]=ul(n,e,l);r[p][B]=ie;break}}function rr(r,e,n,o){const l=e.getType().runtime.bin,d=o==null?void 0:o.delimited;return l.readMessage(e,r,d?o.no:r.uint32(),n,d),e}function ul(r,e,n){const o=e.uint32(),l=e.pos+o;let d,p;for(;e.pos<l;){const[y]=e.tag();switch(y){case 1:d=Ur(e,r.K);break;case 2:switch(r.V.kind){case"scalar":p=Ur(e,r.V.T);break;case"enum":p=e.int32();break;case"message":p=rr(e,new r.V.T,n,void 0);break}break}}if(d===void 0&&(d=ke(r.K,st.BIGINT)),typeof d!="string"&&typeof d!="number"&&(d=d.toString()),p===void 0)switch(r.V.kind){case"scalar":p=ke(r.V.T,st.BIGINT);break;case"enum":p=r.V.T.values[0].no;break;case"message":p=new r.V.T;break}return[d,p]}function dl(r,e){const n=Ur(r,e);return typeof n=="bigint"?n.toString():n}function Ur(r,e){switch(e){case te.STRING:return r.string();case te.BOOL:return r.bool();case te.DOUBLE:return r.double();case te.FLOAT:return r.float();case te.INT32:return r.int32();case te.INT64:return r.int64();case te.UINT64:return r.uint64();case te.FIXED64:return r.fixed64();case te.BYTES:return r.bytes();case te.FIXED32:return r.fixed32();case te.SFIXED32:return r.sfixed32();case te.SFIXED64:return r.sfixed64();case te.SINT64:return r.sint64();case te.UINT32:return r.uint32();case te.SINT32:return r.sint32()}}function fa(r,e,n,o){D(e!==void 0);const l=r.repeated;switch(r.kind){case"scalar":case"enum":let d=r.kind=="enum"?te.INT32:r.T;if(l)if(D(Array.isArray(e)),r.packed)G(n,d,r.no,e);else for(const p of e)b(n,d,r.no,p);else b(n,d,r.no,e);break;case"message":if(l){D(Array.isArray(e));for(const p of e)pa(n,o,r,p)}else pa(n,o,r,e);break;case"map":D(typeof e=="object"&&e!=null);for(const[p,y]of Object.entries(e))fl(n,o,r,p,y);break}}function fl(r,e,n,o,l){r.tag(n.no,Te.LengthDelimited),r.fork();let d=o;switch(n.K){case te.INT32:case te.FIXED32:case te.UINT32:case te.SFIXED32:case te.SINT32:d=Number.parseInt(o);break;case te.BOOL:D(o=="true"||o=="false"),d=o=="true";break}switch(b(r,n.K,1,d),n.V.kind){case"scalar":b(r,n.V.T,2,l);break;case"enum":b(r,te.INT32,2,l);break;case"message":D(l!==void 0),r.tag(2,Te.LengthDelimited).bytes(l.toBinary(e));break}r.join()}function pa(r,e,n,o){const l=it(n.T,o);n.delimited?r.tag(n.no,Te.StartGroup).raw(l.toBinary(e)).tag(n.no,Te.EndGroup):r.tag(n.no,Te.LengthDelimited).bytes(l.toBinary(e))}function b(r,e,n,o){D(o!==void 0);let[l,d]=Z(e);r.tag(n,l)[d](o)}function G(r,e,n,o){if(!o.length)return;r.tag(n,Te.LengthDelimited).fork();let[,l]=Z(e);for(let d=0;d<o.length;d++)r[l](o[d]);r.join()}function Z(r){let e=Te.Varint;switch(r){case te.BYTES:case te.STRING:e=Te.LengthDelimited;break;case te.DOUBLE:case te.FIXED64:case te.SFIXED64:e=Te.Bit64;break;case te.FIXED32:case te.SFIXED32:case te.FLOAT:e=Te.Bit32;break}const n=te[r].toLowerCase();return[e,n]}function Q(){return{setEnumType:pe,initPartial(r,e){if(r===void 0)return;const n=e.getType();for(const o of n.fields.byMember()){const l=o.localName,d=e,p=r;if(p[l]!=null)switch(o.kind){case"oneof":const y=p[l].case;if(y===void 0)continue;const A=o.findField(y);let I=p[l].value;A&&A.kind=="message"&&!ot(I,A.T)?I=new A.T(I):A&&A.kind==="scalar"&&A.T===te.BYTES&&(I=ve(I)),d[l]={case:y,value:I};break;case"scalar":case"enum":let B=p[l];o.T===te.BYTES&&(B=o.repeated?B.map(ve):ve(B)),d[l]=B;break;case"map":switch(o.V.kind){case"scalar":case"enum":if(o.V.T===te.BYTES)for(const[ee,_e]of Object.entries(p[l]))d[l][ee]=ve(_e);else Object.assign(d[l],p[l]);break;case"message":const de=o.V.T;for(const ee of Object.keys(p[l])){let _e=p[l][ee];de.fieldWrapper||(_e=new de(_e)),d[l][ee]=_e}break}break;case"message":const ie=o.T;if(o.repeated)d[l]=p[l].map(de=>ot(de,ie)?de:new ie(de));else{const de=p[l];ie.fieldWrapper?ie.typeName==="google.protobuf.BytesValue"?d[l]=ve(de):d[l]=de:d[l]=ot(de,ie)?de:new ie(de)}break}}},equals(r,e,n){return e===n?!0:!e||!n?!1:r.fields.byMember().every(o=>{const l=e[o.localName],d=n[o.localName];if(o.repeated){if(l.length!==d.length)return!1;switch(o.kind){case"message":return l.every((p,y)=>o.T.equals(p,d[y]));case"scalar":return l.every((p,y)=>nt(o.T,p,d[y]));case"enum":return l.every((p,y)=>nt(te.INT32,p,d[y]))}throw new Error(`repeated cannot contain ${o.kind}`)}switch(o.kind){case"message":return o.T.equals(l,d);case"enum":return nt(te.INT32,l,d);case"scalar":return nt(o.T,l,d);case"oneof":if(l.case!==d.case)return!1;const p=o.findField(l.case);if(p===void 0)return!0;switch(p.kind){case"message":return p.T.equals(l.value,d.value);case"enum":return nt(te.INT32,l.value,d.value);case"scalar":return nt(p.T,l.value,d.value)}throw new Error(`oneof cannot contain ${p.kind}`);case"map":const y=Object.keys(l).concat(Object.keys(d));switch(o.V.kind){case"message":const A=o.V.T;return y.every(B=>A.equals(l[B],d[B]));case"enum":return y.every(B=>nt(te.INT32,l[B],d[B]));case"scalar":const I=o.V.T;return y.every(B=>nt(I,l[B],d[B]))}break}})},clone(r){const e=r.getType(),n=new e,o=n;for(const l of e.fields.byMember()){const d=r[l.localName];let p;if(l.repeated)p=d.map(W);else if(l.kind=="map"){p=o[l.localName];for(const[y,A]of Object.entries(d))p[y]=W(A)}else l.kind=="oneof"?p=l.findField(d.case)?{case:d.case,value:W(d.value)}:{case:void 0}:p=W(d);o[l.localName]=p}for(const l of e.runtime.bin.listUnknownFields(r))e.runtime.bin.onUnknownField(o,l.no,l.wireType,l.data);return n}}}function W(r){if(r===void 0)return r;if(ot(r))return r.clone();if(r instanceof Uint8Array){const e=new Uint8Array(r.byteLength);return e.set(r),e}return r}function ve(r){return r instanceof Uint8Array?r:new Uint8Array(r)}function Ae(r,e,n){return{syntax:r,json:Ce(),bin:Or(),util:Object.assign(Object.assign({},Q()),{newFieldList:e,initFields:n}),makeMessageType(o,l,d){return De(this,o,l,d)},makeEnum:ge,makeEnumType:le,getEnumType:fe,makeExtension(o,l,d){return j(this,o,l,d)}}}class Pe{constructor(e,n){this._fields=e,this._normalizer=n}findJsonName(e){if(!this.jsonNames){const n={};for(const o of this.list())n[o.jsonName]=n[o.name]=o;this.jsonNames=n}return this.jsonNames[e]}find(e){if(!this.numbers){const n={};for(const o of this.list())n[o.no]=o;this.numbers=n}return this.numbers[e]}list(){return this.all||(this.all=this._normalizer(this._fields)),this.all}byNumber(){return this.numbersAsc||(this.numbersAsc=this.list().concat().sort((e,n)=>e.no-n.no)),this.numbersAsc}byMember(){if(!this.members){this.members=[];const e=this.members;let n;for(const o of this.list())o.oneof?o.oneof!==n&&(n=o.oneof,e.push(n)):e.push(o)}return this.members}}function Ue(r,e){const n=We(r);return e?n:St(Vt(n))}function et(r){return Ue(r,!1)}const Qe=We;function We(r){let e=!1;const n=[];for(let o=0;o<r.length;o++){let l=r.charAt(o);switch(l){case"_":e=!0;break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":n.push(l),e=!1;break;default:e&&(e=!1,l=l.toUpperCase()),n.push(l);break}}return n.join("")}const vt=new Set(["constructor","toString","toJSON","valueOf"]),Mt=new Set(["getType","clone","equals","fromBinary","fromJson","fromJsonString","toBinary","toJson","toJsonString","toObject"]),qt=r=>`${r}$`,Vt=r=>Mt.has(r)?qt(r):r,St=r=>vt.has(r)?qt(r):r;class Xe{constructor(e){this.kind="oneof",this.repeated=!1,this.packed=!1,this.opt=!1,this.req=!1,this.default=void 0,this.fields=[],this.name=e,this.localName=et(e)}addField(e){D(e.oneof===this,`field ${e.name} not one of ${this.name}`),this.fields.push(e)}findField(e){if(!this._lookup){this._lookup=Object.create(null);for(let n=0;n<this.fields.length;n++)this._lookup[this.fields[n].localName]=this.fields[n]}return this._lookup[e]}}function en(r,e){var n,o,l,d,p,y;const A=[];let I;for(const B of typeof r=="function"?r():r){const ie=B;if(ie.localName=Ue(B.name,B.oneof!==void 0),ie.jsonName=(n=B.jsonName)!==null&&n!==void 0?n:Qe(B.name),ie.repeated=(o=B.repeated)!==null&&o!==void 0?o:!1,B.kind=="scalar"&&(ie.L=(l=B.L)!==null&&l!==void 0?l:st.BIGINT),ie.delimited=(d=B.delimited)!==null&&d!==void 0?d:!1,ie.req=(p=B.req)!==null&&p!==void 0?p:!1,ie.opt=(y=B.opt)!==null&&y!==void 0?y:!1,B.packed===void 0&&(ie.packed=B.kind=="enum"||B.kind=="scalar"&&B.T!=te.BYTES&&B.T!=te.STRING),B.oneof!==void 0){const de=typeof B.oneof=="string"?B.oneof:B.oneof.name;(!I||I.name!=de)&&(I=new Xe(de)),ie.oneof=I,I.addField(ie)}A.push(ie)}return A}const M=Ae("proto3",r=>new Pe(r,e=>en(e)),r=>{for(const e of r.getType().fields.byMember()){if(e.opt)continue;const n=e.localName,o=r;if(e.repeated){o[n]=[];continue}switch(e.kind){case"oneof":o[n]={case:void 0};break;case"enum":o[n]=0;break;case"map":o[n]={};break;case"scalar":o[n]=ke(e.T,e.L);break}}});var Ot;(function(r){r[r.Unary=0]="Unary",r[r.ServerStreaming=1]="ServerStreaming",r[r.ClientStreaming=2]="ClientStreaming",r[r.BiDiStreaming=3]="BiDiStreaming"})(Ot||(Ot={}));var vi;(function(r){r[r.NoSideEffects=1]="NoSideEffects",r[r.Idempotent=2]="Idempotent"})(vi||(vi={}));class bt extends K{constructor(e){super(),this.seconds=U.zero,this.nanos=0,M.util.initPartial(e,this)}fromJson(e,n){if(typeof e!="string")throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${M.json.debug(e)}`);const o=e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);if(!o)throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");const l=Date.parse(o[1]+"-"+o[2]+"-"+o[3]+"T"+o[4]+":"+o[5]+":"+o[6]+(o[8]?o[8]:"Z"));if(Number.isNaN(l))throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");if(l<Date.parse("0001-01-01T00:00:00Z")||l>Date.parse("9999-12-31T23:59:59Z"))throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");return this.seconds=U.parse(l/1e3),this.nanos=0,o[7]&&(this.nanos=parseInt("1"+o[7]+"0".repeat(9-o[7].length))-1e9),this}toJson(e){const n=Number(this.seconds)*1e3;if(n<Date.parse("0001-01-01T00:00:00Z")||n>Date.parse("9999-12-31T23:59:59Z"))throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");if(this.nanos<0)throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");let o="Z";if(this.nanos>0){const l=(this.nanos+1e9).toString().substring(1);l.substring(3)==="000000"?o="."+l.substring(0,3)+"Z":l.substring(6)==="000"?o="."+l.substring(0,6)+"Z":o="."+l+"Z"}return new Date(n).toISOString().replace(".000Z",o)}toDate(){return new Date(Number(this.seconds)*1e3+Math.ceil(this.nanos/1e6))}static now(){return bt.fromDate(new Date)}static fromDate(e){const n=e.getTime();return new bt({seconds:U.parse(Math.floor(n/1e3)),nanos:n%1e3*1e6})}static fromBinary(e,n){return new bt().fromBinary(e,n)}static fromJson(e,n){return new bt().fromJson(e,n)}static fromJsonString(e,n){return new bt().fromJsonString(e,n)}static equals(e,n){return M.util.equals(bt,e,n)}}bt.runtime=M,bt.typeName="google.protobuf.Timestamp",bt.fields=M.util.newFieldList(()=>[{no:1,name:"seconds",kind:"scalar",T:3},{no:2,name:"nanos",kind:"scalar",T:5}]);class vn extends K{constructor(e){super(),this.seconds=U.zero,this.nanos=0,M.util.initPartial(e,this)}fromJson(e,n){if(typeof e!="string")throw new Error(`cannot decode google.protobuf.Duration from JSON: ${M.json.debug(e)}`);const o=e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);if(o===null)throw new Error(`cannot decode google.protobuf.Duration from JSON: ${M.json.debug(e)}`);const l=Number(o[1]);if(l>315576e6||l<-315576e6)throw new Error(`cannot decode google.protobuf.Duration from JSON: ${M.json.debug(e)}`);if(this.seconds=U.parse(l),typeof o[2]=="string"){const d=o[2]+"0".repeat(9-o[2].length);this.nanos=parseInt(d),(l<0||Object.is(l,-0))&&(this.nanos=-this.nanos)}return this}toJson(e){if(Number(this.seconds)>315576e6||Number(this.seconds)<-315576e6)throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");let n=this.seconds.toString();if(this.nanos!==0){let o=Math.abs(this.nanos).toString();o="0".repeat(9-o.length)+o,o.substring(3)==="000000"?o=o.substring(0,3):o.substring(6)==="000"&&(o=o.substring(0,6)),n+="."+o,this.nanos<0&&Number(this.seconds)==0&&(n="-"+n)}return n+"s"}static fromBinary(e,n){return new vn().fromBinary(e,n)}static fromJson(e,n){return new vn().fromJson(e,n)}static fromJsonString(e,n){return new vn().fromJsonString(e,n)}static equals(e,n){return M.util.equals(vn,e,n)}}vn.runtime=M,vn.typeName="google.protobuf.Duration",vn.fields=M.util.newFieldList(()=>[{no:1,name:"seconds",kind:"scalar",T:3},{no:2,name:"nanos",kind:"scalar",T:5}]);class _t extends K{constructor(e){super(),this.typeUrl="",this.value=new Uint8Array(0),M.util.initPartial(e,this)}toJson(e){var n;if(this.typeUrl==="")return{};const o=this.typeUrlToName(this.typeUrl),l=(n=e==null?void 0:e.typeRegistry)===null||n===void 0?void 0:n.findMessage(o);if(!l)throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);let p=l.fromBinary(this.value).toJson(e);return(o.startsWith("google.protobuf.")||p===null||Array.isArray(p)||typeof p!="object")&&(p={value:p}),p["@type"]=this.typeUrl,p}fromJson(e,n){var o;if(e===null||Array.isArray(e)||typeof e!="object")throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${e===null?"null":Array.isArray(e)?"array":typeof e}`);if(Object.keys(e).length==0)return this;const l=e["@type"];if(typeof l!="string"||l=="")throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');const d=this.typeUrlToName(l),p=(o=n==null?void 0:n.typeRegistry)===null||o===void 0?void 0:o.findMessage(d);if(!p)throw new Error(`cannot decode message google.protobuf.Any from JSON: ${l} is not in the type registry`);let y;if(d.startsWith("google.protobuf.")&&Object.prototype.hasOwnProperty.call(e,"value"))y=p.fromJson(e.value,n);else{const A=Object.assign({},e);delete A["@type"],y=p.fromJson(A,n)}return this.packFrom(y),this}packFrom(e){this.value=e.toBinary(),this.typeUrl=this.typeNameToUrl(e.getType().typeName)}unpackTo(e){return this.is(e.getType())?(e.fromBinary(this.value),!0):!1}unpack(e){if(this.typeUrl==="")return;const n=e.findMessage(this.typeUrlToName(this.typeUrl));if(n)return n.fromBinary(this.value)}is(e){if(this.typeUrl==="")return!1;const n=this.typeUrlToName(this.typeUrl);let o="";return typeof e=="string"?o=e:o=e.typeName,n===o}typeNameToUrl(e){return`type.googleapis.com/${e}`}typeUrlToName(e){if(!e.length)throw new Error(`invalid type url: ${e}`);const n=e.lastIndexOf("/"),o=n>=0?e.substring(n+1):e;if(!o.length)throw new Error(`invalid type url: ${e}`);return o}static pack(e){const n=new _t;return n.packFrom(e),n}static fromBinary(e,n){return new _t().fromBinary(e,n)}static fromJson(e,n){return new _t().fromJson(e,n)}static fromJsonString(e,n){return new _t().fromJsonString(e,n)}static equals(e,n){return M.util.equals(_t,e,n)}}_t.runtime=M,_t.typeName="google.protobuf.Any",_t.fields=M.util.newFieldList(()=>[{no:1,name:"type_url",kind:"scalar",T:9},{no:2,name:"value",kind:"scalar",T:12}]);class Jt extends K{constructor(e){super(),this.value=0,M.util.initPartial(e,this)}toJson(e){return M.json.writeScalar(te.DOUBLE,this.value,!0)}fromJson(e,n){try{this.value=M.json.readScalar(te.DOUBLE,e)}catch(o){let l='cannot decode message google.protobuf.DoubleValue from JSON"';throw o instanceof Error&&o.message.length>0&&(l+=`: ${o.message}`),new Error(l)}return this}static fromBinary(e,n){return new Jt().fromBinary(e,n)}static fromJson(e,n){return new Jt().fromJson(e,n)}static fromJsonString(e,n){return new Jt().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Jt,e,n)}}Jt.runtime=M,Jt.typeName="google.protobuf.DoubleValue",Jt.fields=M.util.newFieldList(()=>[{no:1,name:"value",kind:"scalar",T:1}]),Jt.fieldWrapper={wrapField(r){return new Jt({value:r})},unwrapField(r){return r.value}};class Xt extends K{constructor(e){super(),this.value=0,M.util.initPartial(e,this)}toJson(e){return M.json.writeScalar(te.FLOAT,this.value,!0)}fromJson(e,n){try{this.value=M.json.readScalar(te.FLOAT,e)}catch(o){let l='cannot decode message google.protobuf.FloatValue from JSON"';throw o instanceof Error&&o.message.length>0&&(l+=`: ${o.message}`),new Error(l)}return this}static fromBinary(e,n){return new Xt().fromBinary(e,n)}static fromJson(e,n){return new Xt().fromJson(e,n)}static fromJsonString(e,n){return new Xt().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Xt,e,n)}}Xt.runtime=M,Xt.typeName="google.protobuf.FloatValue",Xt.fields=M.util.newFieldList(()=>[{no:1,name:"value",kind:"scalar",T:2}]),Xt.fieldWrapper={wrapField(r){return new Xt({value:r})},unwrapField(r){return r.value}};class Ut extends K{constructor(e){super(),this.value=U.zero,M.util.initPartial(e,this)}toJson(e){return M.json.writeScalar(te.INT64,this.value,!0)}fromJson(e,n){try{this.value=M.json.readScalar(te.INT64,e)}catch(o){let l='cannot decode message google.protobuf.Int64Value from JSON"';throw o instanceof Error&&o.message.length>0&&(l+=`: ${o.message}`),new Error(l)}return this}static fromBinary(e,n){return new Ut().fromBinary(e,n)}static fromJson(e,n){return new Ut().fromJson(e,n)}static fromJsonString(e,n){return new Ut().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Ut,e,n)}}Ut.runtime=M,Ut.typeName="google.protobuf.Int64Value",Ut.fields=M.util.newFieldList(()=>[{no:1,name:"value",kind:"scalar",T:3}]),Ut.fieldWrapper={wrapField(r){return new Ut({value:r})},unwrapField(r){return r.value}};class kt extends K{constructor(e){super(),this.value=U.zero,M.util.initPartial(e,this)}toJson(e){return M.json.writeScalar(te.UINT64,this.value,!0)}fromJson(e,n){try{this.value=M.json.readScalar(te.UINT64,e)}catch(o){let l='cannot decode message google.protobuf.UInt64Value from JSON"';throw o instanceof Error&&o.message.length>0&&(l+=`: ${o.message}`),new Error(l)}return this}static fromBinary(e,n){return new kt().fromBinary(e,n)}static fromJson(e,n){return new kt().fromJson(e,n)}static fromJsonString(e,n){return new kt().fromJsonString(e,n)}static equals(e,n){return M.util.equals(kt,e,n)}}kt.runtime=M,kt.typeName="google.protobuf.UInt64Value",kt.fields=M.util.newFieldList(()=>[{no:1,name:"value",kind:"scalar",T:4}]),kt.fieldWrapper={wrapField(r){return new kt({value:r})},unwrapField(r){return r.value}};class yn extends K{constructor(e){super(),this.value=0,M.util.initPartial(e,this)}toJson(e){return M.json.writeScalar(te.INT32,this.value,!0)}fromJson(e,n){try{this.value=M.json.readScalar(te.INT32,e)}catch(o){let l='cannot decode message google.protobuf.Int32Value from JSON"';throw o instanceof Error&&o.message.length>0&&(l+=`: ${o.message}`),new Error(l)}return this}static fromBinary(e,n){return new yn().fromBinary(e,n)}static fromJson(e,n){return new yn().fromJson(e,n)}static fromJsonString(e,n){return new yn().fromJsonString(e,n)}static equals(e,n){return M.util.equals(yn,e,n)}}yn.runtime=M,yn.typeName="google.protobuf.Int32Value",yn.fields=M.util.newFieldList(()=>[{no:1,name:"value",kind:"scalar",T:5}]),yn.fieldWrapper={wrapField(r){return new yn({value:r})},unwrapField(r){return r.value}};class an extends K{constructor(e){super(),this.value=0,M.util.initPartial(e,this)}toJson(e){return M.json.writeScalar(te.UINT32,this.value,!0)}fromJson(e,n){try{this.value=M.json.readScalar(te.UINT32,e)}catch(o){let l='cannot decode message google.protobuf.UInt32Value from JSON"';throw o instanceof Error&&o.message.length>0&&(l+=`: ${o.message}`),new Error(l)}return this}static fromBinary(e,n){return new an().fromBinary(e,n)}static fromJson(e,n){return new an().fromJson(e,n)}static fromJsonString(e,n){return new an().fromJsonString(e,n)}static equals(e,n){return M.util.equals(an,e,n)}}an.runtime=M,an.typeName="google.protobuf.UInt32Value",an.fields=M.util.newFieldList(()=>[{no:1,name:"value",kind:"scalar",T:13}]),an.fieldWrapper={wrapField(r){return new an({value:r})},unwrapField(r){return r.value}};class si extends K{constructor(e){super(),this.value=!1,M.util.initPartial(e,this)}toJson(e){return M.json.writeScalar(te.BOOL,this.value,!0)}fromJson(e,n){try{this.value=M.json.readScalar(te.BOOL,e)}catch(o){let l='cannot decode message google.protobuf.BoolValue from JSON"';throw o instanceof Error&&o.message.length>0&&(l+=`: ${o.message}`),new Error(l)}return this}static fromBinary(e,n){return new si().fromBinary(e,n)}static fromJson(e,n){return new si().fromJson(e,n)}static fromJsonString(e,n){return new si().fromJsonString(e,n)}static equals(e,n){return M.util.equals(si,e,n)}}si.runtime=M,si.typeName="google.protobuf.BoolValue",si.fields=M.util.newFieldList(()=>[{no:1,name:"value",kind:"scalar",T:8}]),si.fieldWrapper={wrapField(r){return new si({value:r})},unwrapField(r){return r.value}};class An extends K{constructor(e){super(),this.value="",M.util.initPartial(e,this)}toJson(e){return M.json.writeScalar(te.STRING,this.value,!0)}fromJson(e,n){try{this.value=M.json.readScalar(te.STRING,e)}catch(o){let l='cannot decode message google.protobuf.StringValue from JSON"';throw o instanceof Error&&o.message.length>0&&(l+=`: ${o.message}`),new Error(l)}return this}static fromBinary(e,n){return new An().fromBinary(e,n)}static fromJson(e,n){return new An().fromJson(e,n)}static fromJsonString(e,n){return new An().fromJsonString(e,n)}static equals(e,n){return M.util.equals(An,e,n)}}An.runtime=M,An.typeName="google.protobuf.StringValue",An.fields=M.util.newFieldList(()=>[{no:1,name:"value",kind:"scalar",T:9}]),An.fieldWrapper={wrapField(r){return new An({value:r})},unwrapField(r){return r.value}};class oi extends K{constructor(e){super(),this.value=new Uint8Array(0),M.util.initPartial(e,this)}toJson(e){return M.json.writeScalar(te.BYTES,this.value,!0)}fromJson(e,n){try{this.value=M.json.readScalar(te.BYTES,e)}catch(o){let l='cannot decode message google.protobuf.BytesValue from JSON"';throw o instanceof Error&&o.message.length>0&&(l+=`: ${o.message}`),new Error(l)}return this}static fromBinary(e,n){return new oi().fromBinary(e,n)}static fromJson(e,n){return new oi().fromJson(e,n)}static fromJsonString(e,n){return new oi().fromJsonString(e,n)}static equals(e,n){return M.util.equals(oi,e,n)}}oi.runtime=M,oi.typeName="google.protobuf.BytesValue",oi.fields=M.util.newFieldList(()=>[{no:1,name:"value",kind:"scalar",T:12}]),oi.fieldWrapper={wrapField(r){return new oi({value:r})},unwrapField(r){return r.value}};function $p(r,e,n){try{const o=Ie.dec(r);return e?e.fromBinary(o,n):o}catch(o){throw O.from(o,_.DataLoss)}}function Yp(r,e){const n={};for(const[o,l]of Object.entries(r.methods)){const d=e(Object.assign(Object.assign({},l),{localName:o,service:r}));d!=null&&(n[o]=d)}return n}const Cu=1;function Iu(r){let e,n=new Uint8Array(0);function o(l){const d=new Uint8Array(n.length+l.length);d.set(n),d.set(l,n.length),n=d}return new ReadableStream({start(){e=r.getReader()},async pull(l){let d;for(;;){if(d===void 0&&n.byteLength>=5){let A=0;for(let I=1;I<5;I++)A=(A<<8)+n[I];d={flags:n[0],length:A}}if(d!==void 0&&n.byteLength>=d.length+5)break;const y=await e.read();if(y.done)break;o(y.value)}if(d===void 0){if(n.byteLength==0){l.close();return}l.error(new O("premature end of stream",_.DataLoss));return}const p=n.subarray(5,5+d.length);n=n.subarray(5+d.length),l.enqueue({flags:d.flags,data:p})}})}function Pu(r,e){const n=new Uint8Array(e.length+5);n.set(e,5);const o=new DataView(n.buffer,n.byteOffset,n.byteLength);return o.setUint8(0,r),o.setUint32(1,e.length),n}var jp=function(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=r[Symbol.asyncIterator],n;return e?e.call(r):(r=typeof __values=="function"?__values(r):r[Symbol.iterator](),n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n);function o(d){n[d]=r[d]&&function(p){return new Promise(function(y,A){p=r[d](p),l(y,A,p.done,p.value)})}}function l(d,p,y,A){Promise.resolve(A).then(function(I){d({value:I,done:y})},p)}},ws=function(r){return this instanceof ws?(this.v=r,this):new ws(r)},Kp=function(r,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(r,e||[]),l,d=[];return l={},y("next"),y("throw"),y("return",p),l[Symbol.asyncIterator]=function(){return this},l;function p(ee){return function(_e){return Promise.resolve(_e).then(ee,ie)}}function y(ee,_e){o[ee]&&(l[ee]=function(Be){return new Promise(function(qe,tt){d.push([ee,Be,qe,tt])>1||A(ee,Be)})},_e&&(l[ee]=_e(l[ee])))}function A(ee,_e){try{I(o[ee](_e))}catch(Be){de(d[0][3],Be)}}function I(ee){ee.value instanceof ws?Promise.resolve(ee.value.v).then(B,ie):de(d[0][2],ee)}function B(ee){A("next",ee)}function ie(ee){A("throw",ee)}function de(ee,_e){ee(_e),d.shift(),d.length&&A(d[0][0],d[0][1])}},Zp=function(r){var e,n;return e={},o("next"),o("throw",function(l){throw l}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(l,d){e[l]=r[l]?function(p){return(n=!n)?{value:ws(r[l](p)),done:!1}:d?d(p):p}:d}};function Qp(r){return Kp(this,arguments,function*(){yield ws(yield*Zp(jp(r)))})}var Du=function(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=r[Symbol.asyncIterator],n;return e?e.call(r):(r=typeof __values=="function"?__values(r):r[Symbol.iterator](),n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n);function o(d){n[d]=r[d]&&function(p){return new Promise(function(y,A){p=r[d](p),l(y,A,p.done,p.value)})}}function l(d,p,y,A){Promise.resolve(A).then(function(I){d({value:I,done:y})},p)}},Fr=function(r){return this instanceof Fr?(this.v=r,this):new Fr(r)},em=function(r){var e,n;return e={},o("next"),o("throw",function(l){throw l}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(l,d){e[l]=r[l]?function(p){return(n=!n)?{value:Fr(r[l](p)),done:!1}:d?d(p):p}:d}},tm=function(r,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(r,e||[]),l,d=[];return l={},y("next"),y("throw"),y("return",p),l[Symbol.asyncIterator]=function(){return this},l;function p(ee){return function(_e){return Promise.resolve(_e).then(ee,ie)}}function y(ee,_e){o[ee]&&(l[ee]=function(Be){return new Promise(function(qe,tt){d.push([ee,Be,qe,tt])>1||A(ee,Be)})},_e&&(l[ee]=_e(l[ee])))}function A(ee,_e){try{I(o[ee](_e))}catch(Be){de(d[0][3],Be)}}function I(ee){ee.value instanceof Fr?Promise.resolve(ee.value.v).then(B,ie):de(d[0][2],ee)}function B(ee){A("next",ee)}function ie(ee){A("throw",ee)}function de(ee,_e){ee(_e),d.shift(),d.length&&A(d[0][0],d[0][1])}};function nm(r,e){return Yp(r,n=>{switch(n.kind){case Ot.Unary:return im(e,r,n);case Ot.ServerStreaming:return rm(e,r,n);case Ot.ClientStreaming:return sm(e,r,n);case Ot.BiDiStreaming:return om(e,r,n);default:return null}})}function im(r,e,n){return async function(o,l){var d,p;const y=await r.unary(e,n,l==null?void 0:l.signal,l==null?void 0:l.timeoutMs,l==null?void 0:l.headers,o,l==null?void 0:l.contextValues);return(d=l==null?void 0:l.onHeader)===null||d===void 0||d.call(l,y.header),(p=l==null?void 0:l.onTrailer)===null||p===void 0||p.call(l,y.trailer),y.message}}function rm(r,e,n){return function(o,l){return Nu(r.stream(e,n,l==null?void 0:l.signal,l==null?void 0:l.timeoutMs,l==null?void 0:l.headers,Qp([o]),l==null?void 0:l.contextValues),l)}}function sm(r,e,n){return async function(o,l){var d,p,y,A,I,B;const ie=await r.stream(e,n,l==null?void 0:l.signal,l==null?void 0:l.timeoutMs,l==null?void 0:l.headers,o,l==null?void 0:l.contextValues);(I=l==null?void 0:l.onHeader)===null||I===void 0||I.call(l,ie.header);let de,ee=0;try{for(var _e=!0,Be=Du(ie.message),qe;qe=await Be.next(),d=qe.done,!d;_e=!0)A=qe.value,_e=!1,de=A,ee++}catch(tt){p={error:tt}}finally{try{!_e&&!d&&(y=Be.return)&&await y.call(Be)}finally{if(p)throw p.error}}if(!de)throw new O("protocol error: missing response message",_.Unimplemented);if(ee>1)throw new O("protocol error: received extra messages for client streaming method",_.Unimplemented);return(B=l==null?void 0:l.onTrailer)===null||B===void 0||B.call(l,ie.trailer),de}}function om(r,e,n){return function(o,l){return Nu(r.stream(e,n,l==null?void 0:l.signal,l==null?void 0:l.timeoutMs,l==null?void 0:l.headers,o,l==null?void 0:l.contextValues),l)}}function Nu(r,e){const n=function(){return tm(this,arguments,function*(){var o,l;const d=yield Fr(r);(o=e==null?void 0:e.onHeader)===null||o===void 0||o.call(e,d.header),yield Fr(yield*em(Du(d.message))),(l=e==null?void 0:e.onTrailer)===null||l===void 0||l.call(e,d.trailer)})}()[Symbol.asyncIterator]();return{[Symbol.asyncIterator]:()=>({next:()=>n.next()})}}function am(...r){const e=new AbortController,n=r.filter(l=>l!==void 0).concat(e.signal);for(const l of n){if(l.aborted){o.apply(l);break}l.addEventListener("abort",o)}function o(){e.signal.aborted||e.abort(Lu(this));for(const l of n)l.removeEventListener("abort",o)}return e}function cm(r){const e=new AbortController,n=()=>{e.abort(new O("the operation timed out",_.DeadlineExceeded))};let o;return r!==void 0&&(r<=0?n():o=setTimeout(n,r)),{signal:e.signal,cleanup:()=>clearTimeout(o)}}function Lu(r){if(!r.aborted)return;if(r.reason!==void 0)return r.reason;const e=new Error("This operation was aborted");return e.name="AbortError",e}function Ou(){return{get(r){return r.id in this?this[r.id]:r.defaultValue},set(r,e){return this[r.id]=e,this},delete(r){return delete this[r.id],this}}}const pl=128;function Uu(r){const e=new Headers,n=new TextDecoder().decode(r).split(`\r
`);for(const o of n){if(o==="")continue;const l=o.indexOf(":");if(l>0){const d=o.substring(0,l).trim(),p=o.substring(l+1).trim();e.append(d,p)}}return e}const lm="Content-Type",hm="Grpc-Timeout",Br="Grpc-Status",Fu="Grpc-Message",um="Grpc-Status-Details-Bin",dm="X-User-Agent",fm="X-Grpc-Web",pm="application/grpc-web+proto",mm="application/grpc-web+json";class _i extends K{constructor(e){super(),this.code=0,this.message="",this.details=[],M.util.initPartial(e,this)}static fromBinary(e,n){return new _i().fromBinary(e,n)}static fromJson(e,n){return new _i().fromJson(e,n)}static fromJsonString(e,n){return new _i().fromJsonString(e,n)}static equals(e,n){return M.util.equals(_i,e,n)}}_i.runtime=M,_i.typeName="google.rpc.Status",_i.fields=M.util.newFieldList(()=>[{no:1,name:"code",kind:"scalar",T:5},{no:2,name:"message",kind:"scalar",T:9},{no:3,name:"details",kind:"message",T:_t,repeated:!0}]);const gm="0";function Bu(r){var e;const n=r.get(um);if(n!=null){const l=$p(n,_i);if(l.code==0)return;const d=new O(l.message,l.code,r);return d.details=l.details.map(p=>({type:p.typeUrl.substring(p.typeUrl.lastIndexOf("/")+1),value:p.value})),d}const o=r.get(Br);if(o!=null){if(o===gm)return;const l=parseInt(o,10);return l in _?new O(decodeURIComponent((e=r.get(Fu))!==null&&e!==void 0?e:""),l,r):new O(`invalid grpc-status: ${o}`,_.Internal,r)}}function ku(r,e,n){const o=typeof e=="string"?e:e.typeName,l=typeof n=="string"?n:n.name;return r.toString().replace(/\/?$/,`/${o}/${l}`)}function zu(r,e){return e instanceof r?e:new r(e)}function vm(r,e){function n(o){return o.done===!0?o:{done:o.done,value:zu(r,o.value)}}return{[Symbol.asyncIterator](){const o=e[Symbol.asyncIterator](),l={next:()=>o.next().then(n)};return o.throw!==void 0&&(l.throw=d=>o.throw(d).then(n)),o.return!==void 0&&(l.return=d=>o.return(d).then(n)),l}}}function Vu(r,e){var n;return(n=e==null?void 0:e.concat().reverse().reduce((o,l)=>l(o),r))!==null&&n!==void 0?n:r}function _m(r){var e;const n=Object.assign({},r);return(e=n.ignoreUnknownFields)!==null&&e!==void 0||(n.ignoreUnknownFields=!0),n}function Hu(r,e,n,o){const l=e?Gu(r.I,o):Wu(r.I,n);return{parse:(e?Gu(r.O,o):Wu(r.O,n)).parse,serialize:l.serialize}}function Gu(r,e){return{parse(n){try{return r.fromBinary(n,e)}catch(o){const l=o instanceof Error?o.message:String(o);throw new O(`parse binary: ${l}`,_.Internal)}},serialize(n){try{return n.toBinary(e)}catch(o){const l=o instanceof Error?o.message:String(o);throw new O(`serialize binary: ${l}`,_.Internal)}}}}function Wu(r,e){var n,o;const l=(n=e==null?void 0:e.textEncoder)!==null&&n!==void 0?n:new TextEncoder,d=(o=e==null?void 0:e.textDecoder)!==null&&o!==void 0?o:new TextDecoder,p=_m(e);return{parse(y){try{const A=d.decode(y);return r.fromJsonString(A,p)}catch(A){throw O.from(A,_.InvalidArgument)}},serialize(y){try{const A=y.toJsonString(p);return l.encode(A)}catch(A){throw O.from(A,_.Internal)}}}}function ym(r){const e=Vu(r.next,r.interceptors),[n,o,l]=qu(r),d=Object.assign(Object.assign({},r.req),{message:zu(r.req.method.I,r.req.message),signal:n});return e(d).then(p=>(l(),p),o)}function Sm(r){const e=Vu(r.next,r.interceptors),[n,o,l]=qu(r),d=Object.assign(Object.assign({},r.req),{message:vm(r.req.method.I,r.req.message),signal:n});let p=!1;return n.addEventListener("abort",function(){var y,A;const I=r.req.message[Symbol.asyncIterator]();p||(y=I.throw)===null||y===void 0||y.call(I,this.reason).catch(()=>{}),(A=I.return)===null||A===void 0||A.call(I).catch(()=>{})}),e(d).then(y=>Object.assign(Object.assign({},y),{message:{[Symbol.asyncIterator](){const A=y.message[Symbol.asyncIterator]();return{next(){return A.next().then(I=>(I.done==!0&&(p=!0,l()),I),o)}}}}}),o)}function qu(r){const{signal:e,cleanup:n}=cm(r.timeoutMs),o=am(r.signal,e);return[o.signal,function(d){const p=O.from(e.aborted?Lu(e):d);return o.abort(p),n(),Promise.reject(p)},function(){n(),o.abort()}]}function xm(){try{new Headers}catch{throw new Error("connect-web requires the fetch API. Are you running on an old version of Node.js? Node.js is not supported in Connect for Web - please stay tuned for Connect for Node.")}}function Ju(r,e){const n=Bu(r);if(n)throw e.forEach((o,l)=>{n.metadata.append(l,o)}),n;if(!e.has(Br)&&!r.has(Br))throw new O("protocol error: missing status",_.Internal)}function Xu(r,e,n,o){const l=new Headers(n??{});return l.set(lm,r?pm:mm),l.set(fm,"1"),l.set(dm,"connect-es/1.6.1"),e!==void 0&&l.set(hm,`${e}m`),l}function Tm(r){switch(r){case 400:return _.Internal;case 401:return _.Unauthenticated;case 403:return _.PermissionDenied;case 404:return _.Unimplemented;case 429:return _.Unavailable;case 502:return _.Unavailable;case 503:return _.Unavailable;case 504:return _.Unavailable;default:return _.Unknown}}function $u(r,e){var n;if(r>=200&&r<300)return{foundStatus:e.has(Br),headerError:Bu(e)};throw new O(decodeURIComponent((n=e.get(Fu))!==null&&n!==void 0?n:`HTTP ${r}`),Tm(r),e)}var sr=function(r){return this instanceof sr?(this.v=r,this):new sr(r)},Em=function(r,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(r,e||[]),l,d=[];return l={},y("next"),y("throw"),y("return",p),l[Symbol.asyncIterator]=function(){return this},l;function p(ee){return function(_e){return Promise.resolve(_e).then(ee,ie)}}function y(ee,_e){o[ee]&&(l[ee]=function(Be){return new Promise(function(qe,tt){d.push([ee,Be,qe,tt])>1||A(ee,Be)})},_e&&(l[ee]=_e(l[ee])))}function A(ee,_e){try{I(o[ee](_e))}catch(Be){de(d[0][3],Be)}}function I(ee){ee.value instanceof sr?Promise.resolve(ee.value.v).then(B,ie):de(d[0][2],ee)}function B(ee){A("next",ee)}function ie(ee){A("throw",ee)}function de(ee,_e){ee(_e),d.shift(),d.length&&A(d[0][0],d[0][1])}};function Mm(r){var e;xm();const n=(e=r.useBinaryFormat)!==null&&e!==void 0?e:!0;return{async unary(o,l,d,p,y,A,I){var B;const{serialize:ie,parse:de}=Hu(l,n,r.jsonOptions,r.binaryOptions);return p=p===void 0?r.defaultTimeoutMs:p<=0?void 0:p,await ym({interceptors:r.interceptors,signal:d,timeoutMs:p,req:{stream:!1,service:o,method:l,url:ku(r.baseUrl,o,l),init:{method:"POST",credentials:(B=r.credentials)!==null&&B!==void 0?B:"same-origin",redirect:"error",mode:"cors"},header:Xu(n,p,y),contextValues:I??Ou(),message:A},next:async ee=>{var _e;const qe=await((_e=r.fetch)!==null&&_e!==void 0?_e:globalThis.fetch)(ee.url,Object.assign(Object.assign({},ee.init),{headers:ee.header,signal:ee.signal,body:Pu(0,ie(ee.message))})),{headerError:tt}=$u(qe.status,qe.headers);if(!qe.body)throw tt!==void 0?tt:"missing response body";const xt=Iu(qe.body).getReader();let Kt,pt;for(;;){const Pt=await xt.read();if(Pt.done)break;const{flags:Dt,data:Gt}=Pt.value;if((Dt&Cu)===Cu)throw new O("protocol error: received unsupported compressed output",_.Internal);if(Dt===pl){if(Kt!==void 0)throw"extra trailer";Kt=Uu(Gt);continue}if(pt!==void 0)throw new O("extra message",_.Unimplemented);pt=de(Gt)}if(Kt===void 0)throw tt!==void 0?tt:new O("missing trailer",qe.headers.has(Br)?_.Unimplemented:_.Unknown);if(Ju(Kt,qe.headers),pt===void 0)throw new O("missing message",Kt.has(Br)?_.Unimplemented:_.Unknown);return{stream:!1,service:o,method:l,header:qe.headers,message:pt,trailer:Kt}}})},async stream(o,l,d,p,y,A,I){var B;const{serialize:ie,parse:de}=Hu(l,n,r.jsonOptions,r.binaryOptions);function ee(Be,qe,tt,xt,Kt){return Em(this,arguments,function*(){const Pt=Iu(Be).getReader();if(qe){if(!(yield sr(Pt.read())).done)throw"extra data for trailers-only";return yield sr(void 0)}let Dt=!1;for(;;){const Gt=yield sr(Pt.read());if(Gt.done)break;const{flags:Kn,data:ui}=Gt.value;if((Kn&pl)===pl){if(Dt)throw"extra trailer";Dt=!0;const gr=Uu(ui);Ju(gr,xt),gr.forEach((Rc,vv)=>tt.set(vv,Rc));continue}if(Dt)throw"extra message";yield yield sr(de(ui))}if("throwIfAborted"in Kt&&Kt.throwIfAborted(),!Dt)throw"missing trailer"})}async function _e(Be){if(l.kind!=Ot.ServerStreaming)throw"The fetch API does not support streaming request bodies";const qe=await Be[Symbol.asyncIterator]().next();if(qe.done==!0)throw"missing request message";return Pu(0,ie(qe.value))}return p=p===void 0?r.defaultTimeoutMs:p<=0?void 0:p,Sm({interceptors:r.interceptors,signal:d,timeoutMs:p,req:{stream:!0,service:o,method:l,url:ku(r.baseUrl,o,l),init:{method:"POST",credentials:(B=r.credentials)!==null&&B!==void 0?B:"same-origin",redirect:"error",mode:"cors"},header:Xu(n,p,y),contextValues:I??Ou(),message:A},next:async Be=>{var qe;const xt=await((qe=r.fetch)!==null&&qe!==void 0?qe:globalThis.fetch)(Be.url,Object.assign(Object.assign({},Be.init),{headers:Be.header,signal:Be.signal,body:await _e(Be.message)})),{foundStatus:Kt,headerError:pt}=$u(xt.status,xt.headers);if(pt!=null)throw pt;if(!xt.body)throw"missing response body";const Pt=new Headers;return Object.assign(Object.assign({},Be),{header:xt.headers,trailer:Pt,message:ee(xt.body,Kt,Pt,xt.headers,Be.signal)})}})}}}var rt=(r=>(r[r.NULL=0]="NULL",r[r.BOOLEAN=1]="BOOLEAN",r[r.INTEGER=2]="INTEGER",r[r.LONG=3]="LONG",r[r.DOUBLE=4]="DOUBLE",r[r.STRING=5]="STRING",r[r.BYTES=6]="BYTES",r[r.DATE=7]="DATE",r[r.JSON_OBJECT=8]="JSON_OBJECT",r[r.JSON_ARRAY=9]="JSON_ARRAY",r[r.TEXT=10]="TEXT",r[r.INTEGER_CNT=11]="INTEGER_CNT",r[r.LONG_CNT=12]="LONG_CNT",r[r.TREE=13]="TREE",r))(rt||{});M.util.setEnumType(rt,"yorkie.v1.ValueType",[{no:0,name:"VALUE_TYPE_NULL"},{no:1,name:"VALUE_TYPE_BOOLEAN"},{no:2,name:"VALUE_TYPE_INTEGER"},{no:3,name:"VALUE_TYPE_LONG"},{no:4,name:"VALUE_TYPE_DOUBLE"},{no:5,name:"VALUE_TYPE_STRING"},{no:6,name:"VALUE_TYPE_BYTES"},{no:7,name:"VALUE_TYPE_DATE"},{no:8,name:"VALUE_TYPE_JSON_OBJECT"},{no:9,name:"VALUE_TYPE_JSON_ARRAY"},{no:10,name:"VALUE_TYPE_TEXT"},{no:11,name:"VALUE_TYPE_INTEGER_CNT"},{no:12,name:"VALUE_TYPE_LONG_CNT"},{no:13,name:"VALUE_TYPE_TREE"}]);var or=(r=>(r[r.DOCUMENT_CHANGED=0]="DOCUMENT_CHANGED",r[r.DOCUMENT_WATCHED=1]="DOCUMENT_WATCHED",r[r.DOCUMENT_UNWATCHED=2]="DOCUMENT_UNWATCHED",r[r.DOCUMENT_BROADCAST=3]="DOCUMENT_BROADCAST",r))(or||{});M.util.setEnumType(or,"yorkie.v1.DocEventType",[{no:0,name:"DOC_EVENT_TYPE_DOCUMENT_CHANGED"},{no:1,name:"DOC_EVENT_TYPE_DOCUMENT_WATCHED"},{no:2,name:"DOC_EVENT_TYPE_DOCUMENT_UNWATCHED"},{no:3,name:"DOC_EVENT_TYPE_DOCUMENT_BROADCAST"}]);const ma=class io extends K{constructor(e){super(),c(this,"root"),c(this,"presences",{}),M.util.initPartial(e,this)}static fromBinary(e,n){return new io().fromBinary(e,n)}static fromJson(e,n){return new io().fromJson(e,n)}static fromJsonString(e,n){return new io().fromJsonString(e,n)}static equals(e,n){return M.util.equals(io,e,n)}};c(ma,"runtime",M),c(ma,"typeName","yorkie.v1.Snapshot"),c(ma,"fields",M.util.newFieldList(()=>[{no:1,name:"root",kind:"message",T:Ln},{no:2,name:"presences",kind:"map",K:9,V:{kind:"message",T:El}}]));let wm=ma,yi=(f=class extends K{constructor(r){super(),c(this,"documentKey",""),c(this,"checkpoint"),c(this,"snapshot",new Uint8Array(0)),c(this,"changes",[]),c(this,"minSyncedTicket"),c(this,"isRemoved",!1),c(this,"versionVector"),M.util.initPartial(r,this)}static fromBinary(r,e){return new f().fromBinary(r,e)}static fromJson(r,e){return new f().fromJson(r,e)}static fromJsonString(r,e){return new f().fromJsonString(r,e)}static equals(r,e){return M.util.equals(f,r,e)}},c(f,"runtime",M),c(f,"typeName","yorkie.v1.ChangePack"),c(f,"fields",M.util.newFieldList(()=>[{no:1,name:"document_key",kind:"scalar",T:9},{no:2,name:"checkpoint",kind:"message",T:md},{no:3,name:"snapshot",kind:"scalar",T:12},{no:4,name:"changes",kind:"message",T:Yu,repeated:!0},{no:5,name:"min_synced_ticket",kind:"message",T:ze},{no:6,name:"is_removed",kind:"scalar",T:8},{no:7,name:"version_vector",kind:"message",T:va}])),f),Yu=(m=class extends K{constructor(r){super(),c(this,"id"),c(this,"message",""),c(this,"operations",[]),c(this,"presenceChange"),M.util.initPartial(r,this)}static fromBinary(r,e){return new m().fromBinary(r,e)}static fromJson(r,e){return new m().fromJson(r,e)}static fromJsonString(r,e){return new m().fromJsonString(r,e)}static equals(r,e){return M.util.equals(m,r,e)}},c(m,"runtime",M),c(m,"typeName","yorkie.v1.Change"),c(m,"fields",M.util.newFieldList(()=>[{no:1,name:"id",kind:"message",T:ga},{no:2,name:"message",kind:"scalar",T:9},{no:3,name:"operations",kind:"message",T:ml,repeated:!0},{no:4,name:"presence_change",kind:"message",T:Tl}])),m),ga=(g=class extends K{constructor(r){super(),c(this,"clientSeq",0),c(this,"serverSeq",U.zero),c(this,"lamport",U.zero),c(this,"actorId",new Uint8Array(0)),c(this,"versionVector"),M.util.initPartial(r,this)}static fromBinary(r,e){return new g().fromBinary(r,e)}static fromJson(r,e){return new g().fromJson(r,e)}static fromJsonString(r,e){return new g().fromJsonString(r,e)}static equals(r,e){return M.util.equals(g,r,e)}},c(g,"runtime",M),c(g,"typeName","yorkie.v1.ChangeID"),c(g,"fields",M.util.newFieldList(()=>[{no:1,name:"client_seq",kind:"scalar",T:13},{no:2,name:"server_seq",kind:"scalar",T:3},{no:3,name:"lamport",kind:"scalar",T:3},{no:4,name:"actor_id",kind:"scalar",T:12},{no:5,name:"version_vector",kind:"message",T:va}])),g),va=(S=class extends K{constructor(r){super(),c(this,"vector",{}),M.util.initPartial(r,this)}static fromBinary(r,e){return new S().fromBinary(r,e)}static fromJson(r,e){return new S().fromJson(r,e)}static fromJsonString(r,e){return new S().fromJsonString(r,e)}static equals(r,e){return M.util.equals(S,r,e)}},c(S,"runtime",M),c(S,"typeName","yorkie.v1.VersionVector"),c(S,"fields",M.util.newFieldList(()=>[{no:1,name:"vector",kind:"map",K:9,V:{kind:"scalar",T:3}}])),S),ml=(x=class extends K{constructor(r){super(),c(this,"body",{case:void 0}),M.util.initPartial(r,this)}static fromBinary(r,e){return new x().fromBinary(r,e)}static fromJson(r,e){return new x().fromJson(r,e)}static fromJsonString(r,e){return new x().fromJsonString(r,e)}static equals(r,e){return M.util.equals(x,r,e)}},c(x,"runtime",M),c(x,"typeName","yorkie.v1.Operation"),c(x,"fields",M.util.newFieldList(()=>[{no:1,name:"set",kind:"message",T:ju,oneof:"body"},{no:2,name:"add",kind:"message",T:Ku,oneof:"body"},{no:3,name:"move",kind:"message",T:Zu,oneof:"body"},{no:4,name:"remove",kind:"message",T:Qu,oneof:"body"},{no:5,name:"edit",kind:"message",T:ed,oneof:"body"},{no:6,name:"select",kind:"message",T:Am,oneof:"body"},{no:7,name:"style",kind:"message",T:td,oneof:"body"},{no:8,name:"increase",kind:"message",T:nd,oneof:"body"},{no:9,name:"tree_edit",kind:"message",T:id,oneof:"body"},{no:10,name:"tree_style",kind:"message",T:rd,oneof:"body"},{no:11,name:"array_set",kind:"message",T:bm,oneof:"body"}])),x);const _a=class ro extends K{constructor(e){super(),c(this,"parentCreatedAt"),c(this,"key",""),c(this,"value"),c(this,"executedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new ro().fromBinary(e,n)}static fromJson(e,n){return new ro().fromJson(e,n)}static fromJsonString(e,n){return new ro().fromJsonString(e,n)}static equals(e,n){return M.util.equals(ro,e,n)}};c(_a,"runtime",M),c(_a,"typeName","yorkie.v1.Operation.Set"),c(_a,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_created_at",kind:"message",T:ze},{no:2,name:"key",kind:"scalar",T:9},{no:3,name:"value",kind:"message",T:ai},{no:4,name:"executed_at",kind:"message",T:ze}]));let ju=_a;const ya=class so extends K{constructor(e){super(),c(this,"parentCreatedAt"),c(this,"prevCreatedAt"),c(this,"value"),c(this,"executedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new so().fromBinary(e,n)}static fromJson(e,n){return new so().fromJson(e,n)}static fromJsonString(e,n){return new so().fromJsonString(e,n)}static equals(e,n){return M.util.equals(so,e,n)}};c(ya,"runtime",M),c(ya,"typeName","yorkie.v1.Operation.Add"),c(ya,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_created_at",kind:"message",T:ze},{no:2,name:"prev_created_at",kind:"message",T:ze},{no:3,name:"value",kind:"message",T:ai},{no:4,name:"executed_at",kind:"message",T:ze}]));let Ku=ya;const Sa=class oo extends K{constructor(e){super(),c(this,"parentCreatedAt"),c(this,"prevCreatedAt"),c(this,"createdAt"),c(this,"executedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new oo().fromBinary(e,n)}static fromJson(e,n){return new oo().fromJson(e,n)}static fromJsonString(e,n){return new oo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(oo,e,n)}};c(Sa,"runtime",M),c(Sa,"typeName","yorkie.v1.Operation.Move"),c(Sa,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_created_at",kind:"message",T:ze},{no:2,name:"prev_created_at",kind:"message",T:ze},{no:3,name:"created_at",kind:"message",T:ze},{no:4,name:"executed_at",kind:"message",T:ze}]));let Zu=Sa;const xa=class ao extends K{constructor(e){super(),c(this,"parentCreatedAt"),c(this,"createdAt"),c(this,"executedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new ao().fromBinary(e,n)}static fromJson(e,n){return new ao().fromJson(e,n)}static fromJsonString(e,n){return new ao().fromJsonString(e,n)}static equals(e,n){return M.util.equals(ao,e,n)}};c(xa,"runtime",M),c(xa,"typeName","yorkie.v1.Operation.Remove"),c(xa,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_created_at",kind:"message",T:ze},{no:2,name:"created_at",kind:"message",T:ze},{no:3,name:"executed_at",kind:"message",T:ze}]));let Qu=xa;const Ta=class co extends K{constructor(e){super(),c(this,"parentCreatedAt"),c(this,"from"),c(this,"to"),c(this,"createdAtMapByActor",{}),c(this,"content",""),c(this,"executedAt"),c(this,"attributes",{}),M.util.initPartial(e,this)}static fromBinary(e,n){return new co().fromBinary(e,n)}static fromJson(e,n){return new co().fromJson(e,n)}static fromJsonString(e,n){return new co().fromJsonString(e,n)}static equals(e,n){return M.util.equals(co,e,n)}};c(Ta,"runtime",M),c(Ta,"typeName","yorkie.v1.Operation.Edit"),c(Ta,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_created_at",kind:"message",T:ze},{no:2,name:"from",kind:"message",T:cr},{no:3,name:"to",kind:"message",T:cr},{no:4,name:"created_at_map_by_actor",kind:"map",K:9,V:{kind:"message",T:ze}},{no:5,name:"content",kind:"scalar",T:9},{no:6,name:"executed_at",kind:"message",T:ze},{no:7,name:"attributes",kind:"map",K:9,V:{kind:"scalar",T:9}}]));let ed=Ta;const Ea=class lo extends K{constructor(e){super(),c(this,"parentCreatedAt"),c(this,"from"),c(this,"to"),c(this,"executedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new lo().fromBinary(e,n)}static fromJson(e,n){return new lo().fromJson(e,n)}static fromJsonString(e,n){return new lo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(lo,e,n)}};c(Ea,"runtime",M),c(Ea,"typeName","yorkie.v1.Operation.Select"),c(Ea,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_created_at",kind:"message",T:ze},{no:2,name:"from",kind:"message",T:cr},{no:3,name:"to",kind:"message",T:cr},{no:4,name:"executed_at",kind:"message",T:ze}]));let Am=Ea;const Ma=class ho extends K{constructor(e){super(),c(this,"parentCreatedAt"),c(this,"from"),c(this,"to"),c(this,"attributes",{}),c(this,"executedAt"),c(this,"createdAtMapByActor",{}),M.util.initPartial(e,this)}static fromBinary(e,n){return new ho().fromBinary(e,n)}static fromJson(e,n){return new ho().fromJson(e,n)}static fromJsonString(e,n){return new ho().fromJsonString(e,n)}static equals(e,n){return M.util.equals(ho,e,n)}};c(Ma,"runtime",M),c(Ma,"typeName","yorkie.v1.Operation.Style"),c(Ma,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_created_at",kind:"message",T:ze},{no:2,name:"from",kind:"message",T:cr},{no:3,name:"to",kind:"message",T:cr},{no:4,name:"attributes",kind:"map",K:9,V:{kind:"scalar",T:9}},{no:5,name:"executed_at",kind:"message",T:ze},{no:6,name:"created_at_map_by_actor",kind:"map",K:9,V:{kind:"message",T:ze}}]));let td=Ma;const wa=class uo extends K{constructor(e){super(),c(this,"parentCreatedAt"),c(this,"value"),c(this,"executedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new uo().fromBinary(e,n)}static fromJson(e,n){return new uo().fromJson(e,n)}static fromJsonString(e,n){return new uo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(uo,e,n)}};c(wa,"runtime",M),c(wa,"typeName","yorkie.v1.Operation.Increase"),c(wa,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_created_at",kind:"message",T:ze},{no:2,name:"value",kind:"message",T:ai},{no:3,name:"executed_at",kind:"message",T:ze}]));let nd=wa;const Aa=class fo extends K{constructor(e){super(),c(this,"parentCreatedAt"),c(this,"from"),c(this,"to"),c(this,"createdAtMapByActor",{}),c(this,"contents",[]),c(this,"splitLevel",0),c(this,"executedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new fo().fromBinary(e,n)}static fromJson(e,n){return new fo().fromJson(e,n)}static fromJsonString(e,n){return new fo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(fo,e,n)}};c(Aa,"runtime",M),c(Aa,"typeName","yorkie.v1.Operation.TreeEdit"),c(Aa,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_created_at",kind:"message",T:ze},{no:2,name:"from",kind:"message",T:bs},{no:3,name:"to",kind:"message",T:bs},{no:4,name:"created_at_map_by_actor",kind:"map",K:9,V:{kind:"message",T:ze}},{no:5,name:"contents",kind:"message",T:pd,repeated:!0},{no:7,name:"split_level",kind:"scalar",T:5},{no:6,name:"executed_at",kind:"message",T:ze}]));let id=Aa;const ba=class po extends K{constructor(e){super(),c(this,"parentCreatedAt"),c(this,"from"),c(this,"to"),c(this,"attributes",{}),c(this,"executedAt"),c(this,"attributesToRemove",[]),c(this,"createdAtMapByActor",{}),M.util.initPartial(e,this)}static fromBinary(e,n){return new po().fromBinary(e,n)}static fromJson(e,n){return new po().fromJson(e,n)}static fromJsonString(e,n){return new po().fromJsonString(e,n)}static equals(e,n){return M.util.equals(po,e,n)}};c(ba,"runtime",M),c(ba,"typeName","yorkie.v1.Operation.TreeStyle"),c(ba,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_created_at",kind:"message",T:ze},{no:2,name:"from",kind:"message",T:bs},{no:3,name:"to",kind:"message",T:bs},{no:4,name:"attributes",kind:"map",K:9,V:{kind:"scalar",T:9}},{no:5,name:"executed_at",kind:"message",T:ze},{no:6,name:"attributes_to_remove",kind:"scalar",T:9,repeated:!0},{no:7,name:"created_at_map_by_actor",kind:"map",K:9,V:{kind:"message",T:ze}}]));let rd=ba;const Ra=class mo extends K{constructor(e){super(),c(this,"parentCreatedAt"),c(this,"createdAt"),c(this,"value"),c(this,"executedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new mo().fromBinary(e,n)}static fromJson(e,n){return new mo().fromJson(e,n)}static fromJsonString(e,n){return new mo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(mo,e,n)}};c(Ra,"runtime",M),c(Ra,"typeName","yorkie.v1.Operation.ArraySet"),c(Ra,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_created_at",kind:"message",T:ze},{no:2,name:"created_at",kind:"message",T:ze},{no:3,name:"value",kind:"message",T:ai},{no:4,name:"executed_at",kind:"message",T:ze}]));let bm=Ra;const Ca=class go extends K{constructor(e){super(),c(this,"createdAt"),c(this,"movedAt"),c(this,"removedAt"),c(this,"type",0),c(this,"value",new Uint8Array(0)),M.util.initPartial(e,this)}static fromBinary(e,n){return new go().fromBinary(e,n)}static fromJson(e,n){return new go().fromJson(e,n)}static fromJsonString(e,n){return new go().fromJsonString(e,n)}static equals(e,n){return M.util.equals(go,e,n)}};c(Ca,"runtime",M),c(Ca,"typeName","yorkie.v1.JSONElementSimple"),c(Ca,"fields",M.util.newFieldList(()=>[{no:1,name:"created_at",kind:"message",T:ze},{no:2,name:"moved_at",kind:"message",T:ze},{no:3,name:"removed_at",kind:"message",T:ze},{no:4,name:"type",kind:"enum",T:M.getEnumType(rt)},{no:5,name:"value",kind:"scalar",T:12}]));let ai=Ca;const Ia=class vo extends K{constructor(e){super(),c(this,"body",{case:void 0}),M.util.initPartial(e,this)}static fromBinary(e,n){return new vo().fromBinary(e,n)}static fromJson(e,n){return new vo().fromJson(e,n)}static fromJsonString(e,n){return new vo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(vo,e,n)}};c(Ia,"runtime",M),c(Ia,"typeName","yorkie.v1.JSONElement"),c(Ia,"fields",M.util.newFieldList(()=>[{no:1,name:"json_object",kind:"message",T:sd,oneof:"body"},{no:2,name:"json_array",kind:"message",T:od,oneof:"body"},{no:3,name:"primitive",kind:"message",T:ad,oneof:"body"},{no:5,name:"text",kind:"message",T:cd,oneof:"body"},{no:6,name:"counter",kind:"message",T:ld,oneof:"body"},{no:7,name:"tree",kind:"message",T:hd,oneof:"body"}]));let Ln=Ia;const Pa=class _o extends K{constructor(e){super(),c(this,"nodes",[]),c(this,"createdAt"),c(this,"movedAt"),c(this,"removedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new _o().fromBinary(e,n)}static fromJson(e,n){return new _o().fromJson(e,n)}static fromJsonString(e,n){return new _o().fromJsonString(e,n)}static equals(e,n){return M.util.equals(_o,e,n)}};c(Pa,"runtime",M),c(Pa,"typeName","yorkie.v1.JSONElement.JSONObject"),c(Pa,"fields",M.util.newFieldList(()=>[{no:1,name:"nodes",kind:"message",T:ud,repeated:!0},{no:2,name:"created_at",kind:"message",T:ze},{no:3,name:"moved_at",kind:"message",T:ze},{no:4,name:"removed_at",kind:"message",T:ze}]));let sd=Pa;const Da=class yo extends K{constructor(e){super(),c(this,"nodes",[]),c(this,"createdAt"),c(this,"movedAt"),c(this,"removedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new yo().fromBinary(e,n)}static fromJson(e,n){return new yo().fromJson(e,n)}static fromJsonString(e,n){return new yo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(yo,e,n)}};c(Da,"runtime",M),c(Da,"typeName","yorkie.v1.JSONElement.JSONArray"),c(Da,"fields",M.util.newFieldList(()=>[{no:1,name:"nodes",kind:"message",T:dd,repeated:!0},{no:2,name:"created_at",kind:"message",T:ze},{no:3,name:"moved_at",kind:"message",T:ze},{no:4,name:"removed_at",kind:"message",T:ze}]));let od=Da;const Na=class So extends K{constructor(e){super(),c(this,"type",0),c(this,"value",new Uint8Array(0)),c(this,"createdAt"),c(this,"movedAt"),c(this,"removedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new So().fromBinary(e,n)}static fromJson(e,n){return new So().fromJson(e,n)}static fromJsonString(e,n){return new So().fromJsonString(e,n)}static equals(e,n){return M.util.equals(So,e,n)}};c(Na,"runtime",M),c(Na,"typeName","yorkie.v1.JSONElement.Primitive"),c(Na,"fields",M.util.newFieldList(()=>[{no:1,name:"type",kind:"enum",T:M.getEnumType(rt)},{no:2,name:"value",kind:"scalar",T:12},{no:3,name:"created_at",kind:"message",T:ze},{no:4,name:"moved_at",kind:"message",T:ze},{no:5,name:"removed_at",kind:"message",T:ze}]));let ad=Na;const La=class xo extends K{constructor(e){super(),c(this,"nodes",[]),c(this,"createdAt"),c(this,"movedAt"),c(this,"removedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new xo().fromBinary(e,n)}static fromJson(e,n){return new xo().fromJson(e,n)}static fromJsonString(e,n){return new xo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(xo,e,n)}};c(La,"runtime",M),c(La,"typeName","yorkie.v1.JSONElement.Text"),c(La,"fields",M.util.newFieldList(()=>[{no:1,name:"nodes",kind:"message",T:fd,repeated:!0},{no:2,name:"created_at",kind:"message",T:ze},{no:3,name:"moved_at",kind:"message",T:ze},{no:4,name:"removed_at",kind:"message",T:ze}]));let cd=La;const Oa=class To extends K{constructor(e){super(),c(this,"type",0),c(this,"value",new Uint8Array(0)),c(this,"createdAt"),c(this,"movedAt"),c(this,"removedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new To().fromBinary(e,n)}static fromJson(e,n){return new To().fromJson(e,n)}static fromJsonString(e,n){return new To().fromJsonString(e,n)}static equals(e,n){return M.util.equals(To,e,n)}};c(Oa,"runtime",M),c(Oa,"typeName","yorkie.v1.JSONElement.Counter"),c(Oa,"fields",M.util.newFieldList(()=>[{no:1,name:"type",kind:"enum",T:M.getEnumType(rt)},{no:2,name:"value",kind:"scalar",T:12},{no:3,name:"created_at",kind:"message",T:ze},{no:4,name:"moved_at",kind:"message",T:ze},{no:5,name:"removed_at",kind:"message",T:ze}]));let ld=Oa;const Ua=class Eo extends K{constructor(e){super(),c(this,"nodes",[]),c(this,"createdAt"),c(this,"movedAt"),c(this,"removedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new Eo().fromBinary(e,n)}static fromJson(e,n){return new Eo().fromJson(e,n)}static fromJsonString(e,n){return new Eo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Eo,e,n)}};c(Ua,"runtime",M),c(Ua,"typeName","yorkie.v1.JSONElement.Tree"),c(Ua,"fields",M.util.newFieldList(()=>[{no:1,name:"nodes",kind:"message",T:vl,repeated:!0},{no:2,name:"created_at",kind:"message",T:ze},{no:3,name:"moved_at",kind:"message",T:ze},{no:4,name:"removed_at",kind:"message",T:ze}]));let hd=Ua,ud=(T=class extends K{constructor(r){super(),c(this,"key",""),c(this,"element"),M.util.initPartial(r,this)}static fromBinary(r,e){return new T().fromBinary(r,e)}static fromJson(r,e){return new T().fromJson(r,e)}static fromJsonString(r,e){return new T().fromJsonString(r,e)}static equals(r,e){return M.util.equals(T,r,e)}},c(T,"runtime",M),c(T,"typeName","yorkie.v1.RHTNode"),c(T,"fields",M.util.newFieldList(()=>[{no:1,name:"key",kind:"scalar",T:9},{no:2,name:"element",kind:"message",T:Ln}])),T);const As=class Mo extends K{constructor(e){super(),c(this,"next"),c(this,"element"),M.util.initPartial(e,this)}static fromBinary(e,n){return new Mo().fromBinary(e,n)}static fromJson(e,n){return new Mo().fromJson(e,n)}static fromJsonString(e,n){return new Mo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Mo,e,n)}};c(As,"runtime",M),c(As,"typeName","yorkie.v1.RGANode"),c(As,"fields",M.util.newFieldList(()=>[{no:1,name:"next",kind:"message",T:As},{no:2,name:"element",kind:"message",T:Ln}]));let dd=As;const Fa=class wo extends K{constructor(e){super(),c(this,"value",""),c(this,"updatedAt"),c(this,"isRemoved",!1),M.util.initPartial(e,this)}static fromBinary(e,n){return new wo().fromBinary(e,n)}static fromJson(e,n){return new wo().fromJson(e,n)}static fromJsonString(e,n){return new wo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(wo,e,n)}};c(Fa,"runtime",M),c(Fa,"typeName","yorkie.v1.NodeAttr"),c(Fa,"fields",M.util.newFieldList(()=>[{no:1,name:"value",kind:"scalar",T:9},{no:2,name:"updated_at",kind:"message",T:ze},{no:3,name:"is_removed",kind:"scalar",T:8}]));let Ba=Fa;const ka=class Ao extends K{constructor(e){super(),c(this,"id"),c(this,"value",""),c(this,"removedAt"),c(this,"insPrevId"),c(this,"attributes",{}),M.util.initPartial(e,this)}static fromBinary(e,n){return new Ao().fromBinary(e,n)}static fromJson(e,n){return new Ao().fromJson(e,n)}static fromJsonString(e,n){return new Ao().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Ao,e,n)}};c(ka,"runtime",M),c(ka,"typeName","yorkie.v1.TextNode"),c(ka,"fields",M.util.newFieldList(()=>[{no:1,name:"id",kind:"message",T:gl},{no:2,name:"value",kind:"scalar",T:9},{no:3,name:"removed_at",kind:"message",T:ze},{no:4,name:"ins_prev_id",kind:"message",T:gl},{no:5,name:"attributes",kind:"map",K:9,V:{kind:"message",T:Ba}}]));let fd=ka;const za=class bo extends K{constructor(e){super(),c(this,"createdAt"),c(this,"offset",0),M.util.initPartial(e,this)}static fromBinary(e,n){return new bo().fromBinary(e,n)}static fromJson(e,n){return new bo().fromJson(e,n)}static fromJsonString(e,n){return new bo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(bo,e,n)}};c(za,"runtime",M),c(za,"typeName","yorkie.v1.TextNodeID"),c(za,"fields",M.util.newFieldList(()=>[{no:1,name:"created_at",kind:"message",T:ze},{no:2,name:"offset",kind:"scalar",T:5}]));let gl=za;const Va=class Ro extends K{constructor(e){super(),c(this,"id"),c(this,"type",""),c(this,"value",""),c(this,"removedAt"),c(this,"insPrevId"),c(this,"insNextId"),c(this,"depth",0),c(this,"attributes",{}),M.util.initPartial(e,this)}static fromBinary(e,n){return new Ro().fromBinary(e,n)}static fromJson(e,n){return new Ro().fromJson(e,n)}static fromJsonString(e,n){return new Ro().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Ro,e,n)}};c(Va,"runtime",M),c(Va,"typeName","yorkie.v1.TreeNode"),c(Va,"fields",M.util.newFieldList(()=>[{no:1,name:"id",kind:"message",T:kr},{no:2,name:"type",kind:"scalar",T:9},{no:3,name:"value",kind:"scalar",T:9},{no:4,name:"removed_at",kind:"message",T:ze},{no:5,name:"ins_prev_id",kind:"message",T:kr},{no:6,name:"ins_next_id",kind:"message",T:kr},{no:7,name:"depth",kind:"scalar",T:5},{no:8,name:"attributes",kind:"map",K:9,V:{kind:"message",T:Ba}}]));let vl=Va;const Ha=class Co extends K{constructor(e){super(),c(this,"content",[]),M.util.initPartial(e,this)}static fromBinary(e,n){return new Co().fromBinary(e,n)}static fromJson(e,n){return new Co().fromJson(e,n)}static fromJsonString(e,n){return new Co().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Co,e,n)}};c(Ha,"runtime",M),c(Ha,"typeName","yorkie.v1.TreeNodes"),c(Ha,"fields",M.util.newFieldList(()=>[{no:1,name:"content",kind:"message",T:vl,repeated:!0}]));let pd=Ha;const Ga=class Io extends K{constructor(e){super(),c(this,"createdAt"),c(this,"offset",0),M.util.initPartial(e,this)}static fromBinary(e,n){return new Io().fromBinary(e,n)}static fromJson(e,n){return new Io().fromJson(e,n)}static fromJsonString(e,n){return new Io().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Io,e,n)}};c(Ga,"runtime",M),c(Ga,"typeName","yorkie.v1.TreeNodeID"),c(Ga,"fields",M.util.newFieldList(()=>[{no:1,name:"created_at",kind:"message",T:ze},{no:2,name:"offset",kind:"scalar",T:5}]));let kr=Ga;const Wa=class Po extends K{constructor(e){super(),c(this,"parentId"),c(this,"leftSiblingId"),M.util.initPartial(e,this)}static fromBinary(e,n){return new Po().fromBinary(e,n)}static fromJson(e,n){return new Po().fromJson(e,n)}static fromJsonString(e,n){return new Po().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Po,e,n)}};c(Wa,"runtime",M),c(Wa,"typeName","yorkie.v1.TreePos"),c(Wa,"fields",M.util.newFieldList(()=>[{no:1,name:"parent_id",kind:"message",T:kr},{no:2,name:"left_sibling_id",kind:"message",T:kr}]));let bs=Wa;const _l=class Do extends K{constructor(e){super(),c(this,"id",""),c(this,"username",""),c(this,"createdAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new Do().fromBinary(e,n)}static fromJson(e,n){return new Do().fromJson(e,n)}static fromJsonString(e,n){return new Do().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Do,e,n)}};c(_l,"runtime",M),c(_l,"typeName","yorkie.v1.User"),c(_l,"fields",M.util.newFieldList(()=>[{no:1,name:"id",kind:"scalar",T:9},{no:2,name:"username",kind:"scalar",T:9},{no:3,name:"created_at",kind:"message",T:bt}]));const yl=class No extends K{constructor(e){super(),c(this,"id",""),c(this,"name",""),c(this,"publicKey",""),c(this,"secretKey",""),c(this,"authWebhookUrl",""),c(this,"authWebhookMethods",[]),c(this,"clientDeactivateThreshold",""),c(this,"createdAt"),c(this,"updatedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new No().fromBinary(e,n)}static fromJson(e,n){return new No().fromJson(e,n)}static fromJsonString(e,n){return new No().fromJsonString(e,n)}static equals(e,n){return M.util.equals(No,e,n)}};c(yl,"runtime",M),c(yl,"typeName","yorkie.v1.Project"),c(yl,"fields",M.util.newFieldList(()=>[{no:1,name:"id",kind:"scalar",T:9},{no:2,name:"name",kind:"scalar",T:9},{no:3,name:"public_key",kind:"scalar",T:9},{no:4,name:"secret_key",kind:"scalar",T:9},{no:5,name:"auth_webhook_url",kind:"scalar",T:9},{no:6,name:"auth_webhook_methods",kind:"scalar",T:9,repeated:!0},{no:7,name:"client_deactivate_threshold",kind:"scalar",T:9},{no:8,name:"created_at",kind:"message",T:bt},{no:9,name:"updated_at",kind:"message",T:bt}]));const Sl=class Lo extends K{constructor(e){super(),c(this,"name"),c(this,"authWebhookUrl"),c(this,"authWebhookMethods"),c(this,"clientDeactivateThreshold"),M.util.initPartial(e,this)}static fromBinary(e,n){return new Lo().fromBinary(e,n)}static fromJson(e,n){return new Lo().fromJson(e,n)}static fromJsonString(e,n){return new Lo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Lo,e,n)}};c(Sl,"runtime",M),c(Sl,"typeName","yorkie.v1.UpdatableProjectFields"),c(Sl,"fields",M.util.newFieldList(()=>[{no:1,name:"name",kind:"message",T:An},{no:2,name:"auth_webhook_url",kind:"message",T:An},{no:3,name:"auth_webhook_methods",kind:"message",T:Rm},{no:4,name:"client_deactivate_threshold",kind:"message",T:An}]));const qa=class Oo extends K{constructor(e){super(),c(this,"methods",[]),M.util.initPartial(e,this)}static fromBinary(e,n){return new Oo().fromBinary(e,n)}static fromJson(e,n){return new Oo().fromJson(e,n)}static fromJsonString(e,n){return new Oo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Oo,e,n)}};c(qa,"runtime",M),c(qa,"typeName","yorkie.v1.UpdatableProjectFields.AuthWebhookMethods"),c(qa,"fields",M.util.newFieldList(()=>[{no:1,name:"methods",kind:"scalar",T:9,repeated:!0}]));let Rm=qa;const xl=class Uo extends K{constructor(e){super(),c(this,"id",""),c(this,"key",""),c(this,"snapshot",""),c(this,"createdAt"),c(this,"accessedAt"),c(this,"updatedAt"),M.util.initPartial(e,this)}static fromBinary(e,n){return new Uo().fromBinary(e,n)}static fromJson(e,n){return new Uo().fromJson(e,n)}static fromJsonString(e,n){return new Uo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Uo,e,n)}};c(xl,"runtime",M),c(xl,"typeName","yorkie.v1.DocumentSummary"),c(xl,"fields",M.util.newFieldList(()=>[{no:1,name:"id",kind:"scalar",T:9},{no:2,name:"key",kind:"scalar",T:9},{no:3,name:"snapshot",kind:"scalar",T:9},{no:4,name:"created_at",kind:"message",T:bt},{no:5,name:"accessed_at",kind:"message",T:bt},{no:6,name:"updated_at",kind:"message",T:bt}]));const Ja=class Fo extends K{constructor(e){super(),c(this,"type",0),c(this,"presence"),M.util.initPartial(e,this)}static fromBinary(e,n){return new Fo().fromBinary(e,n)}static fromJson(e,n){return new Fo().fromJson(e,n)}static fromJsonString(e,n){return new Fo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Fo,e,n)}};c(Ja,"runtime",M),c(Ja,"typeName","yorkie.v1.PresenceChange"),c(Ja,"fields",M.util.newFieldList(()=>[{no:1,name:"type",kind:"enum",T:M.getEnumType(ar)},{no:2,name:"presence",kind:"message",T:El}]));let Tl=Ja;var ar=(r=>(r[r.UNSPECIFIED=0]="UNSPECIFIED",r[r.PUT=1]="PUT",r[r.DELETE=2]="DELETE",r[r.CLEAR=3]="CLEAR",r))(ar||{});M.util.setEnumType(ar,"yorkie.v1.PresenceChange.ChangeType",[{no:0,name:"CHANGE_TYPE_UNSPECIFIED"},{no:1,name:"CHANGE_TYPE_PUT"},{no:2,name:"CHANGE_TYPE_DELETE"},{no:3,name:"CHANGE_TYPE_CLEAR"}]);let El=(E=class extends K{constructor(r){super(),c(this,"data",{}),M.util.initPartial(r,this)}static fromBinary(r,e){return new E().fromBinary(r,e)}static fromJson(r,e){return new E().fromJson(r,e)}static fromJsonString(r,e){return new E().fromJsonString(r,e)}static equals(r,e){return M.util.equals(E,r,e)}},c(E,"runtime",M),c(E,"typeName","yorkie.v1.Presence"),c(E,"fields",M.util.newFieldList(()=>[{no:1,name:"data",kind:"map",K:9,V:{kind:"scalar",T:9}}])),E),md=(R=class extends K{constructor(r){super(),c(this,"serverSeq",U.zero),c(this,"clientSeq",0),M.util.initPartial(r,this)}static fromBinary(r,e){return new R().fromBinary(r,e)}static fromJson(r,e){return new R().fromJson(r,e)}static fromJsonString(r,e){return new R().fromJsonString(r,e)}static equals(r,e){return M.util.equals(R,r,e)}},c(R,"runtime",M),c(R,"typeName","yorkie.v1.Checkpoint"),c(R,"fields",M.util.newFieldList(()=>[{no:1,name:"server_seq",kind:"scalar",T:3},{no:2,name:"client_seq",kind:"scalar",T:13}])),R);const Xa=class Bo extends K{constructor(e){super(),c(this,"createdAt"),c(this,"offset",0),c(this,"relativeOffset",0),M.util.initPartial(e,this)}static fromBinary(e,n){return new Bo().fromBinary(e,n)}static fromJson(e,n){return new Bo().fromJson(e,n)}static fromJsonString(e,n){return new Bo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Bo,e,n)}};c(Xa,"runtime",M),c(Xa,"typeName","yorkie.v1.TextNodePos"),c(Xa,"fields",M.util.newFieldList(()=>[{no:1,name:"created_at",kind:"message",T:ze},{no:2,name:"offset",kind:"scalar",T:5},{no:3,name:"relative_offset",kind:"scalar",T:5}]));let cr=Xa,ze=(P=class extends K{constructor(r){super(),c(this,"lamport",U.zero),c(this,"delimiter",0),c(this,"actorId",new Uint8Array(0)),M.util.initPartial(r,this)}static fromBinary(r,e){return new P().fromBinary(r,e)}static fromJson(r,e){return new P().fromJson(r,e)}static fromJsonString(r,e){return new P().fromJsonString(r,e)}static equals(r,e){return M.util.equals(P,r,e)}},c(P,"runtime",M),c(P,"typeName","yorkie.v1.TimeTicket"),c(P,"fields",M.util.newFieldList(()=>[{no:1,name:"lamport",kind:"scalar",T:3},{no:2,name:"delimiter",kind:"scalar",T:13},{no:3,name:"actor_id",kind:"scalar",T:12}])),P);const $a=class ko extends K{constructor(e){super(),c(this,"topic",""),c(this,"payload",new Uint8Array(0)),M.util.initPartial(e,this)}static fromBinary(e,n){return new ko().fromBinary(e,n)}static fromJson(e,n){return new ko().fromJson(e,n)}static fromJsonString(e,n){return new ko().fromJsonString(e,n)}static equals(e,n){return M.util.equals(ko,e,n)}};c($a,"runtime",M),c($a,"typeName","yorkie.v1.DocEventBody"),c($a,"fields",M.util.newFieldList(()=>[{no:1,name:"topic",kind:"scalar",T:9},{no:2,name:"payload",kind:"scalar",T:12}]));let Cm=$a;const Ya=class zo extends K{constructor(e){super(),c(this,"type",0),c(this,"publisher",""),c(this,"body"),M.util.initPartial(e,this)}static fromBinary(e,n){return new zo().fromBinary(e,n)}static fromJson(e,n){return new zo().fromJson(e,n)}static fromJsonString(e,n){return new zo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(zo,e,n)}};c(Ya,"runtime",M),c(Ya,"typeName","yorkie.v1.DocEvent"),c(Ya,"fields",M.util.newFieldList(()=>[{no:1,name:"type",kind:"enum",T:M.getEnumType(or)},{no:2,name:"publisher",kind:"scalar",T:9},{no:3,name:"body",kind:"message",T:Cm}]));let Im=Ya;const ja=class Vo extends K{constructor(e){super(),c(this,"clientKey",""),c(this,"metadata",{}),M.util.initPartial(e,this)}static fromBinary(e,n){return new Vo().fromBinary(e,n)}static fromJson(e,n){return new Vo().fromJson(e,n)}static fromJsonString(e,n){return new Vo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Vo,e,n)}};c(ja,"runtime",M),c(ja,"typeName","yorkie.v1.ActivateClientRequest"),c(ja,"fields",M.util.newFieldList(()=>[{no:1,name:"client_key",kind:"scalar",T:9},{no:2,name:"metadata",kind:"map",K:9,V:{kind:"scalar",T:9}}]));let Pm=ja;const Ka=class Ho extends K{constructor(e){super(),c(this,"clientId",""),M.util.initPartial(e,this)}static fromBinary(e,n){return new Ho().fromBinary(e,n)}static fromJson(e,n){return new Ho().fromJson(e,n)}static fromJsonString(e,n){return new Ho().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Ho,e,n)}};c(Ka,"runtime",M),c(Ka,"typeName","yorkie.v1.ActivateClientResponse"),c(Ka,"fields",M.util.newFieldList(()=>[{no:1,name:"client_id",kind:"scalar",T:9}]));let Dm=Ka;const Za=class Go extends K{constructor(e){super(),c(this,"clientId",""),M.util.initPartial(e,this)}static fromBinary(e,n){return new Go().fromBinary(e,n)}static fromJson(e,n){return new Go().fromJson(e,n)}static fromJsonString(e,n){return new Go().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Go,e,n)}};c(Za,"runtime",M),c(Za,"typeName","yorkie.v1.DeactivateClientRequest"),c(Za,"fields",M.util.newFieldList(()=>[{no:1,name:"client_id",kind:"scalar",T:9}]));let Nm=Za;const Qa=class Wo extends K{constructor(e){super(),M.util.initPartial(e,this)}static fromBinary(e,n){return new Wo().fromBinary(e,n)}static fromJson(e,n){return new Wo().fromJson(e,n)}static fromJsonString(e,n){return new Wo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Wo,e,n)}};c(Qa,"runtime",M),c(Qa,"typeName","yorkie.v1.DeactivateClientResponse"),c(Qa,"fields",M.util.newFieldList(()=>[]));let Lm=Qa;const ec=class qo extends K{constructor(e){super(),c(this,"clientId",""),c(this,"changePack"),M.util.initPartial(e,this)}static fromBinary(e,n){return new qo().fromBinary(e,n)}static fromJson(e,n){return new qo().fromJson(e,n)}static fromJsonString(e,n){return new qo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(qo,e,n)}};c(ec,"runtime",M),c(ec,"typeName","yorkie.v1.AttachDocumentRequest"),c(ec,"fields",M.util.newFieldList(()=>[{no:1,name:"client_id",kind:"scalar",T:9},{no:2,name:"change_pack",kind:"message",T:yi}]));let Om=ec;const tc=class Jo extends K{constructor(e){super(),c(this,"documentId",""),c(this,"changePack"),M.util.initPartial(e,this)}static fromBinary(e,n){return new Jo().fromBinary(e,n)}static fromJson(e,n){return new Jo().fromJson(e,n)}static fromJsonString(e,n){return new Jo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Jo,e,n)}};c(tc,"runtime",M),c(tc,"typeName","yorkie.v1.AttachDocumentResponse"),c(tc,"fields",M.util.newFieldList(()=>[{no:1,name:"document_id",kind:"scalar",T:9},{no:2,name:"change_pack",kind:"message",T:yi}]));let Um=tc;const nc=class Xo extends K{constructor(e){super(),c(this,"clientId",""),c(this,"documentId",""),c(this,"changePack"),c(this,"removeIfNotAttached",!1),M.util.initPartial(e,this)}static fromBinary(e,n){return new Xo().fromBinary(e,n)}static fromJson(e,n){return new Xo().fromJson(e,n)}static fromJsonString(e,n){return new Xo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Xo,e,n)}};c(nc,"runtime",M),c(nc,"typeName","yorkie.v1.DetachDocumentRequest"),c(nc,"fields",M.util.newFieldList(()=>[{no:1,name:"client_id",kind:"scalar",T:9},{no:2,name:"document_id",kind:"scalar",T:9},{no:3,name:"change_pack",kind:"message",T:yi},{no:4,name:"remove_if_not_attached",kind:"scalar",T:8}]));let Fm=nc;const ic=class $o extends K{constructor(e){super(),c(this,"changePack"),M.util.initPartial(e,this)}static fromBinary(e,n){return new $o().fromBinary(e,n)}static fromJson(e,n){return new $o().fromJson(e,n)}static fromJsonString(e,n){return new $o().fromJsonString(e,n)}static equals(e,n){return M.util.equals($o,e,n)}};c(ic,"runtime",M),c(ic,"typeName","yorkie.v1.DetachDocumentResponse"),c(ic,"fields",M.util.newFieldList(()=>[{no:2,name:"change_pack",kind:"message",T:yi}]));let Bm=ic;const rc=class Yo extends K{constructor(e){super(),c(this,"clientId",""),c(this,"documentId",""),M.util.initPartial(e,this)}static fromBinary(e,n){return new Yo().fromBinary(e,n)}static fromJson(e,n){return new Yo().fromJson(e,n)}static fromJsonString(e,n){return new Yo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Yo,e,n)}};c(rc,"runtime",M),c(rc,"typeName","yorkie.v1.WatchDocumentRequest"),c(rc,"fields",M.util.newFieldList(()=>[{no:1,name:"client_id",kind:"scalar",T:9},{no:2,name:"document_id",kind:"scalar",T:9}]));let km=rc;const sc=class jo extends K{constructor(e){super(),c(this,"body",{case:void 0}),M.util.initPartial(e,this)}static fromBinary(e,n){return new jo().fromBinary(e,n)}static fromJson(e,n){return new jo().fromJson(e,n)}static fromJsonString(e,n){return new jo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(jo,e,n)}};c(sc,"runtime",M),c(sc,"typeName","yorkie.v1.WatchDocumentResponse"),c(sc,"fields",M.util.newFieldList(()=>[{no:1,name:"initialization",kind:"message",T:Vm,oneof:"body"},{no:2,name:"event",kind:"message",T:Im,oneof:"body"}]));let zm=sc;const oc=class Ko extends K{constructor(e){super(),c(this,"clientIds",[]),M.util.initPartial(e,this)}static fromBinary(e,n){return new Ko().fromBinary(e,n)}static fromJson(e,n){return new Ko().fromJson(e,n)}static fromJsonString(e,n){return new Ko().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Ko,e,n)}};c(oc,"runtime",M),c(oc,"typeName","yorkie.v1.WatchDocumentResponse.Initialization"),c(oc,"fields",M.util.newFieldList(()=>[{no:1,name:"client_ids",kind:"scalar",T:9,repeated:!0}]));let Vm=oc;const ac=class Zo extends K{constructor(e){super(),c(this,"clientId",""),c(this,"documentId",""),c(this,"changePack"),M.util.initPartial(e,this)}static fromBinary(e,n){return new Zo().fromBinary(e,n)}static fromJson(e,n){return new Zo().fromJson(e,n)}static fromJsonString(e,n){return new Zo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Zo,e,n)}};c(ac,"runtime",M),c(ac,"typeName","yorkie.v1.RemoveDocumentRequest"),c(ac,"fields",M.util.newFieldList(()=>[{no:1,name:"client_id",kind:"scalar",T:9},{no:2,name:"document_id",kind:"scalar",T:9},{no:3,name:"change_pack",kind:"message",T:yi}]));let Hm=ac;const cc=class Qo extends K{constructor(e){super(),c(this,"changePack"),M.util.initPartial(e,this)}static fromBinary(e,n){return new Qo().fromBinary(e,n)}static fromJson(e,n){return new Qo().fromJson(e,n)}static fromJsonString(e,n){return new Qo().fromJsonString(e,n)}static equals(e,n){return M.util.equals(Qo,e,n)}};c(cc,"runtime",M),c(cc,"typeName","yorkie.v1.RemoveDocumentResponse"),c(cc,"fields",M.util.newFieldList(()=>[{no:1,name:"change_pack",kind:"message",T:yi}]));let Gm=cc;const lc=class ea extends K{constructor(e){super(),c(this,"clientId",""),c(this,"documentId",""),c(this,"changePack"),c(this,"pushOnly",!1),M.util.initPartial(e,this)}static fromBinary(e,n){return new ea().fromBinary(e,n)}static fromJson(e,n){return new ea().fromJson(e,n)}static fromJsonString(e,n){return new ea().fromJsonString(e,n)}static equals(e,n){return M.util.equals(ea,e,n)}};c(lc,"runtime",M),c(lc,"typeName","yorkie.v1.PushPullChangesRequest"),c(lc,"fields",M.util.newFieldList(()=>[{no:1,name:"client_id",kind:"scalar",T:9},{no:2,name:"document_id",kind:"scalar",T:9},{no:3,name:"change_pack",kind:"message",T:yi},{no:4,name:"push_only",kind:"scalar",T:8}]));let Wm=lc;const hc=class ta extends K{constructor(e){super(),c(this,"changePack"),M.util.initPartial(e,this)}static fromBinary(e,n){return new ta().fromBinary(e,n)}static fromJson(e,n){return new ta().fromJson(e,n)}static fromJsonString(e,n){return new ta().fromJsonString(e,n)}static equals(e,n){return M.util.equals(ta,e,n)}};c(hc,"runtime",M),c(hc,"typeName","yorkie.v1.PushPullChangesResponse"),c(hc,"fields",M.util.newFieldList(()=>[{no:1,name:"change_pack",kind:"message",T:yi}]));let qm=hc;const uc=class na extends K{constructor(e){super(),c(this,"clientId",""),c(this,"documentId",""),c(this,"topic",""),c(this,"payload",new Uint8Array(0)),M.util.initPartial(e,this)}static fromBinary(e,n){return new na().fromBinary(e,n)}static fromJson(e,n){return new na().fromJson(e,n)}static fromJsonString(e,n){return new na().fromJsonString(e,n)}static equals(e,n){return M.util.equals(na,e,n)}};c(uc,"runtime",M),c(uc,"typeName","yorkie.v1.BroadcastRequest"),c(uc,"fields",M.util.newFieldList(()=>[{no:1,name:"client_id",kind:"scalar",T:9},{no:2,name:"document_id",kind:"scalar",T:9},{no:3,name:"topic",kind:"scalar",T:9},{no:4,name:"payload",kind:"scalar",T:12}]));let Jm=uc;const dc=class ia extends K{constructor(e){super(),M.util.initPartial(e,this)}static fromBinary(e,n){return new ia().fromBinary(e,n)}static fromJson(e,n){return new ia().fromJson(e,n)}static fromJsonString(e,n){return new ia().fromJsonString(e,n)}static equals(e,n){return M.util.equals(ia,e,n)}};c(dc,"runtime",M),c(dc,"typeName","yorkie.v1.BroadcastResponse"),c(dc,"fields",M.util.newFieldList(()=>[]));let Xm=dc;const $m={typeName:"yorkie.v1.YorkieService",methods:{activateClient:{name:"ActivateClient",I:Pm,O:Dm,kind:Ot.Unary},deactivateClient:{name:"DeactivateClient",I:Nm,O:Lm,kind:Ot.Unary},attachDocument:{name:"AttachDocument",I:Om,O:Um,kind:Ot.Unary},detachDocument:{name:"DetachDocument",I:Fm,O:Bm,kind:Ot.Unary},removeDocument:{name:"RemoveDocument",I:Hm,O:Gm,kind:Ot.Unary},pushPullChanges:{name:"PushPullChanges",I:Wm,O:qm,kind:Ot.Unary},watchDocument:{name:"WatchDocument",I:km,O:zm,kind:Ot.ServerStreaming},broadcast:{name:"Broadcast",I:Jm,O:Xm,kind:Ot.Unary}}},Ym=M.makeMessageType("google.rpc.ErrorInfo",()=>[{no:1,name:"reason",kind:"scalar",T:9},{no:2,name:"domain",kind:"scalar",T:9},{no:3,name:"metadata",kind:"map",K:9,V:{kind:"scalar",T:9}}]);M.makeMessageType("google.rpc.RetryInfo",()=>[{no:1,name:"retry_delay",kind:"message",T:vn}]),M.makeMessageType("google.rpc.DebugInfo",()=>[{no:1,name:"stack_entries",kind:"scalar",T:9,repeated:!0},{no:2,name:"detail",kind:"scalar",T:9}]),M.makeMessageType("google.rpc.QuotaFailure",()=>[{no:1,name:"violations",kind:"message",T:jm,repeated:!0}]);const jm=M.makeMessageType("google.rpc.QuotaFailure.Violation",()=>[{no:1,name:"subject",kind:"scalar",T:9},{no:2,name:"description",kind:"scalar",T:9}],{localName:"QuotaFailure_Violation"});M.makeMessageType("google.rpc.PreconditionFailure",()=>[{no:1,name:"violations",kind:"message",T:Km,repeated:!0}]);const Km=M.makeMessageType("google.rpc.PreconditionFailure.Violation",()=>[{no:1,name:"type",kind:"scalar",T:9},{no:2,name:"subject",kind:"scalar",T:9},{no:3,name:"description",kind:"scalar",T:9}],{localName:"PreconditionFailure_Violation"});M.makeMessageType("google.rpc.BadRequest",()=>[{no:1,name:"field_violations",kind:"message",T:Zm,repeated:!0}]);const Zm=M.makeMessageType("google.rpc.BadRequest.FieldViolation",()=>[{no:1,name:"field",kind:"scalar",T:9},{no:2,name:"description",kind:"scalar",T:9},{no:3,name:"reason",kind:"scalar",T:9},{no:4,name:"localized_message",kind:"message",T:eg}],{localName:"BadRequest_FieldViolation"});M.makeMessageType("google.rpc.RequestInfo",()=>[{no:1,name:"request_id",kind:"scalar",T:9},{no:2,name:"serving_data",kind:"scalar",T:9}]),M.makeMessageType("google.rpc.ResourceInfo",()=>[{no:1,name:"resource_type",kind:"scalar",T:9},{no:2,name:"resource_name",kind:"scalar",T:9},{no:3,name:"owner",kind:"scalar",T:9},{no:4,name:"description",kind:"scalar",T:9}]),M.makeMessageType("google.rpc.Help",()=>[{no:1,name:"links",kind:"message",T:Qm,repeated:!0}]);const Qm=M.makeMessageType("google.rpc.Help.Link",()=>[{no:1,name:"description",kind:"scalar",T:9},{no:2,name:"url",kind:"scalar",T:9}],{localName:"Help_Link"}),eg=M.makeMessageType("google.rpc.LocalizedMessage",()=>[{no:1,name:"locale",kind:"scalar",T:9},{no:2,name:"message",kind:"scalar",T:9}]);var J=(r=>(r.Ok="ok",r.ErrClientNotActivated="ErrClientNotActivated",r.ErrClientNotFound="ErrClientNotFound",r.ErrUnimplemented="ErrUnimplemented",r.ErrInvalidType="ErrInvalidType",r.ErrDummy="ErrDummy",r.ErrDocumentNotAttached="ErrDocumentNotAttached",r.ErrDocumentNotDetached="ErrDocumentNotDetached",r.ErrDocumentRemoved="ErrDocumentRemoved",r.ErrInvalidObjectKey="ErrInvalidObjectKey",r.ErrInvalidArgument="ErrInvalidArgument",r.ErrNotInitialized="ErrNotInitialized",r.ErrNotReady="ErrNotReady",r.ErrRefused="ErrRefused",r.ErrContextNotProvided="ErrContextNotProvided",r.ErrPermissionDenied="ErrPermissionDenied",r.ErrUnauthenticated="ErrUnauthenticated",r.ErrTooManySubscribers="ErrTooManySubscribers",r.ErrTooManyAttachments="ErrTooManyAttachments",r))(J||{});class $ extends Error{constructor(e,n){super(n),c(this,"name","YorkieError"),c(this,"stack"),this.code=e,this.message=n,this.toString=()=>`[code=${this.code}]: ${this.message}`}}function Wn(r){if(r instanceof Map){const e=Array.from(r);return new Map(JSON.parse(JSON.stringify(e)))}return JSON.parse(JSON.stringify(r))}const gd=r=>r?Object.entries(r).length===0:!0,zr=r=>{const e={};for(const[n,o]of Object.entries(r))e[n]=JSON.stringify(o);return e},Si=r=>{const e={};for(const[n,o]of Object.entries(r))e[n]=JSON.parse(o);return e};var Bi=(r=>(r.Put="put",r.Clear="clear",r))(Bi||{});class fc{constructor(e,n){c(this,"context"),c(this,"presence"),this.context=e,this.presence=n}set(e,n){for(const o of Object.keys(e))this.presence[o]=e[o];this.context.setPresenceChange({type:"put",presence:Wn(this.presence)}),this.context.setReversePresence(e,n)}get(e){return this.presence[e]}clear(){this.presence={},this.context.setPresenceChange({type:"clear"})}}const pc="000000000000000000000000",ki=24;class bn{constructor(e,n,o){c(this,"lamport"),c(this,"delimiter"),c(this,"actorID"),this.lamport=e,this.delimiter=n,this.actorID=o}static of(e,n,o){return new bn(e,n,o)}static fromStruct(e){return bn.of(BigInt(e.lamport),e.delimiter,e.actorID)}toIDString(){return`${this.lamport.toString()}:${this.actorID}:${this.delimiter}`}toStruct(){return{lamport:this.getLamportAsString(),delimiter:this.getDelimiter(),actorID:this.getActorID()}}toTestString(){return`${this.lamport.toString()}:${this.actorID.slice(-2)}:${this.delimiter}`}setActor(e){return new bn(this.lamport,this.delimiter,e)}getLamportAsString(){return this.lamport.toString()}getLamport(){return this.lamport}getDelimiter(){return this.delimiter}getActorID(){return this.actorID}after(e){return this.compare(e)>0}equals(e){return this.compare(e)===0}compare(e){if(this.lamport>e.lamport)return 1;if(e.lamport>this.lamport)return-1;const n=this.actorID.localeCompare(e.actorID);return n!==0?n:this.delimiter>e.delimiter?1:e.delimiter>this.delimiter?-1:0}}const vd=0,Rs=9223372036854775807n,qn=new bn(0n,vd,pc);function ci(r){return r.replace(/["'\\\n\r\f\b\t\u2028\u2029]/g,function(e){switch(e){case'"':case"\\":return"\\"+e;case`
`:return"\\n";case"\r":return"\\r";case"\f":return"\\f";case"\b":return"\\b";case"	":return"\\t";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:return e}})}class Cs{constructor(e){c(this,"createdAt"),c(this,"movedAt"),c(this,"removedAt"),this.createdAt=e}getCreatedAt(){return this.createdAt}getID(){return this.createdAt}getMovedAt(){return this.movedAt}getRemovedAt(){return this.removedAt}getPositionedAt(){return this.movedAt?this.movedAt:this.createdAt}setMovedAt(e){return!this.movedAt||e&&e.after(this.movedAt)?(this.movedAt=e,!0):!1}setRemovedAt(e){this.removedAt=e}remove(e){return e&&e.after(this.getPositionedAt())&&(!this.removedAt||e.after(this.removedAt))?(this.removedAt=e,!0):!1}isRemoved(){return!!this.removedAt}getMetaUsage(){let e=0;return this.getCreatedAt()&&(e+=ki),this.getMovedAt()&&(e+=ki),this.getRemovedAt()&&(e+=ki),e}}class zi extends Cs{constructor(e){super(e)}}class Ml{constructor(e,n){c(this,"strKey"),c(this,"value"),this.strKey=e,this.value=n}static of(e,n){return new Ml(e,n)}isRemoved(){return this.value.isRemoved()}getStrKey(){return this.strKey}getValue(){return this.value}remove(e){return this.value.remove(e)}}class Is{constructor(){c(this,"nodeMapByKey"),c(this,"nodeMapByCreatedAt"),this.nodeMapByKey=new Map,this.nodeMapByCreatedAt=new Map}static create(){return new Is}set(e,n,o){let l;const d=this.nodeMapByKey.get(e);d!=null&&!d.isRemoved()&&d.remove(o)&&(l=d.getValue());const p=Ml.of(e,n);return this.nodeMapByCreatedAt.set(n.getCreatedAt().toIDString(),p),(d==null||o.after(d.getValue().getPositionedAt()))&&(this.nodeMapByKey.set(e,p),n.setMovedAt(o)),l}delete(e,n){if(!this.nodeMapByCreatedAt.has(e.toIDString()))throw new $(J.ErrInvalidArgument,`fail to find ${e.toIDString()}`);const o=this.nodeMapByCreatedAt.get(e.toIDString());return o.remove(n),o.getValue()}subPathOf(e){const n=this.nodeMapByCreatedAt.get(e.toIDString());if(n)return n.getStrKey()}purge(e){const n=this.nodeMapByCreatedAt.get(e.getCreatedAt().toIDString());if(!n)throw new $(J.ErrInvalidArgument,`fail to find ${e.getCreatedAt().toIDString()}`);const o=this.nodeMapByKey.get(n.getStrKey());n===o&&this.nodeMapByKey.delete(o.getStrKey()),this.nodeMapByCreatedAt.delete(n.getValue().getCreatedAt().toIDString())}deleteByKey(e,n){const o=this.nodeMapByKey.get(e);if(o!=null&&o.remove(n))return o.getValue()}has(e){const n=this.nodeMapByKey.get(e);return n==null?!1:!n.isRemoved()}getByID(e){return this.nodeMapByCreatedAt.get(e.toIDString())}get(e){const n=this.nodeMapByKey.get(e);if(!(!n||n.isRemoved()))return n}*[Symbol.iterator](){for(const[,e]of this.nodeMapByKey)yield e}}class Sn extends zi{constructor(e,n){super(e),c(this,"memberNodes"),this.memberNodes=n}static create(e,n){if(!n)return new Sn(e,Is.create());const o=Is.create();for(const[l,d]of Object.entries(n))o.set(l,d.deepcopy(),d.getCreatedAt());return new Sn(e,o)}subPathOf(e){return this.memberNodes.subPathOf(e)}purge(e){this.memberNodes.purge(e)}set(e,n,o){return this.memberNodes.set(e,n,o)}delete(e,n){return this.memberNodes.delete(e,n)}deleteByKey(e,n){return this.memberNodes.deleteByKey(e,n)}get(e){const n=this.memberNodes.get(e);return n==null?void 0:n.getValue()}getByID(e){const n=this.memberNodes.getByID(e);return n==null?void 0:n.getValue()}has(e){return this.memberNodes.has(e)}getDataSize(){return{data:0,meta:this.getMetaUsage()}}toJSON(){const e=[];for(const[n,o]of this)e.push(`"${ci(n)}":${o.toJSON()}`);return`{${e.join(",")}}`}toJS(){return JSON.parse(this.toJSON())}toJSForTest(){const e={};for(const[n,o]of this){const{createdAt:l,value:d,type:p}=o.toJSForTest();e[n]={key:n,createdAt:l,value:d,type:p}}return{createdAt:this.getCreatedAt().toTestString(),value:e,type:"YORKIE_OBJECT"}}getKeys(){const e=Array();for(const[n]of this)e.push(n);return e}toSortedJSON(){var e;const n=Array();for(const[l]of this)n.push(l);const o=[];for(const l of n.sort()){const d=(e=this.memberNodes.get(l))==null?void 0:e.getValue();o.push(`"${ci(l)}":${d.toSortedJSON()}`)}return`{${o.join(",")}}`}getRHT(){return this.memberNodes}deepcopy(){const e=Sn.create(this.getCreatedAt());for(const n of this.memberNodes)e.memberNodes.set(n.getStrKey(),n.getValue().deepcopy(),this.getPositionedAt());return e.remove(this.getRemovedAt()),e}getDescendants(e){for(const n of this.memberNodes){const o=n.getValue();if(e(o,this))return;o instanceof zi&&o.getDescendants(e)}}*[Symbol.iterator](){const e=new Set;for(const n of this.memberNodes)e.has(n.getStrKey())||(e.add(n.getStrKey()),n.isRemoved()||(yield[n.getStrKey(),n.getValue()]))}}var It=(r=>(r.Local="local",r.Remote="remote",r.UndoRedo="undoredo",r))(It||{});class Jn{constructor(e,n){c(this,"parentCreatedAt"),c(this,"executedAt"),this.parentCreatedAt=e,this.executedAt=n}getParentCreatedAt(){return this.parentCreatedAt}getExecutedAt(){if(!this.executedAt)throw new $(J.ErrNotReady,"executedAt is not set yet");return this.executedAt}setActor(e){this.executedAt&&(this.executedAt=this.executedAt.setActor(e))}setExecutedAt(e){this.executedAt=e}}class _d{constructor(e){c(this,"value"),c(this,"left"),c(this,"right"),c(this,"parent"),c(this,"weight"),this.value=e,this.initWeight()}getNodeString(){return`${this.weight}${this.value}`}getValue(){return this.value}getLeftWeight(){return this.hasLeft()?this.left.getWeight():0}getRightWeight(){return this.hasRight()?this.right.getWeight():0}getWeight(){return this.weight}getLeft(){return this.left}getRight(){return this.right}getParent(){return this.parent}hasLeft(){return!!this.left}hasRight(){return!!this.right}hasParent(){return!!this.parent}setLeft(e){this.left=e}setRight(e){this.right=e}setParent(e){this.parent=e}unlink(){this.parent=void 0,this.right=void 0,this.left=void 0}hasLinks(){return this.hasParent()||this.hasLeft()||this.hasRight()}increaseWeight(e){this.weight+=e}initWeight(){this.weight=this.getLength()}}class Ps{constructor(e){c(this,"root"),this.root=e}get length(){return this.root?this.root.getWeight():0}find(e){if(!this.root||e<0)return[void 0,0];let n=this.root;for(;;)if(n.hasLeft()&&e<=n.getLeftWeight())n=n.getLeft();else if(n.hasRight()&&n.getLeftWeight()+n.getLength()<e)e-=n.getLeftWeight()+n.getLength(),n=n.getRight();else{e-=n.getLeftWeight();break}if(e>n.getLength())throw new $(J.ErrInvalidArgument,`out of index range: pos: ${e} > node.length: ${n.getLength()}`);return this.splayNode(n),[n,e]}indexOf(e){return!e||e!==this.root&&!e.hasLinks()?-1:(this.splayNode(e),this.root.getLeftWeight())}getRoot(){return this.root}insert(e){return this.insertAfter(this.root,e)}insertAfter(e,n){return e?(this.splayNode(e),this.root=n,n.setRight(e.getRight()),e.hasRight()&&e.getRight().setParent(n),n.setLeft(e),e.setParent(n),e.setRight(),this.updateWeight(e),this.updateWeight(n),n):(this.root=n,n)}updateWeight(e){e.initWeight(),e.hasLeft()&&e.increaseWeight(e.getLeftWeight()),e.hasRight()&&e.increaseWeight(e.getRightWeight())}updateTreeWeight(e){for(;e;)this.updateWeight(e),e=e.getParent()}splayNode(e){if(e)for(;;)if(this.isLeftChild(e.getParent())&&this.isRightChild(e))this.rotateLeft(e),this.rotateRight(e);else if(this.isRightChild(e.getParent())&&this.isLeftChild(e))this.rotateRight(e),this.rotateLeft(e);else if(this.isLeftChild(e.getParent())&&this.isLeftChild(e))this.rotateRight(e.getParent()),this.rotateRight(e);else if(this.isRightChild(e.getParent())&&this.isRightChild(e))this.rotateLeft(e.getParent()),this.rotateLeft(e);else{this.isLeftChild(e)?this.rotateRight(e):this.isRightChild(e)&&this.rotateLeft(e),this.updateWeight(e);return}}delete(e){this.splayNode(e);const n=new Ps(e.getLeft());n.root&&n.root.setParent();const o=new Ps(e.getRight());if(o.root&&o.root.setParent(),n.root){const l=n.getRightmost();n.splayNode(l),n.root.setRight(o.root),o.root&&o.root.setParent(n.root),this.root=n.root}else this.root=o.root;e.unlink(),this.root&&this.updateWeight(this.root)}deleteRange(e,n){if(!n){this.splayNode(e),this.cutOffRight(e);return}this.splayNode(e),this.splayNode(n),n.getLeft()!=e&&this.rotateRight(e),this.cutOffRight(e)}cutOffRight(e){const n=[];this.traversePostorder(e.getRight(),n);for(const o of n)o.initWeight();this.updateTreeWeight(e)}toTestString(){const e=[];return this.traverseInorder(this.root,e),e.map(n=>`[${n.getWeight()},${n.getLength()}]${n.getValue()||""}`).join("")}checkWeight(){const e=[];this.traverseInorder(this.root,e);for(const n of e)if(n.getWeight()!=n.getLength()+n.getLeftWeight()+n.getRightWeight())return!1;return!0}getRightmost(){let e=this.root;for(;e.hasRight();)e=e.getRight();return e}traverseInorder(e,n){e&&(this.traverseInorder(e.getLeft(),n),n.push(e),this.traverseInorder(e.getRight(),n))}traversePostorder(e,n){e&&(this.traversePostorder(e.getLeft(),n),this.traversePostorder(e.getRight(),n),n.push(e))}rotateLeft(e){const n=e.getParent();n.hasParent()?n===n.getParent().getLeft()?n.getParent().setLeft(e):n.getParent().setRight(e):this.root=e,e.setParent(n.getParent()),n.setRight(e.getLeft()),n.hasRight()&&n.getRight().setParent(n),e.setLeft(n),e.getLeft().setParent(e),this.updateWeight(n),this.updateWeight(e)}rotateRight(e){const n=e.getParent();n.hasParent()?n===n.getParent().getLeft()?n.getParent().setLeft(e):n.getParent().setRight(e):this.root=e,e.setParent(n.getParent()),n.setLeft(e.getRight()),n.hasLeft()&&n.getLeft().setParent(n),e.setRight(n),e.getRight().setParent(e),this.updateWeight(n),this.updateWeight(e)}isLeftChild(e){return e&&e.hasParent()?e.getParent().getLeft()===e:!1}isRightChild(e){return e&&e.hasParent()?e.getParent().getRight()===e:!1}}/**
 * @license
 * Copyright 2009 The Closure Library Authors
 * Copyright 2020 Daniel Wirtz / The long.js Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */var On=null;try{On=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function ft(r,e,n){this.low=r|0,this.high=e|0,this.unsigned=!!n}ft.prototype.__isLong__,Object.defineProperty(ft.prototype,"__isLong__",{value:!0});function un(r){return(r&&r.__isLong__)===!0}function yd(r){var e=Math.clz32(r&-r);return r?31-e:e}ft.isLong=un;var Sd={},xd={};function lr(r,e){var n,o,l;return e?(r>>>=0,(l=0<=r&&r<256)&&(o=xd[r],o)?o:(n=Tt(r,0,!0),l&&(xd[r]=n),n)):(r|=0,(l=-128<=r&&r<128)&&(o=Sd[r],o)?o:(n=Tt(r,r<0?-1:0,!1),l&&(Sd[r]=n),n))}ft.fromInt=lr;function Un(r,e){if(isNaN(r))return e?xi:Xn;if(e){if(r<0)return xi;if(r>=Ed)return bd}else{if(r<=-9223372036854776e3)return xn;if(r+1>=ng)return Ad}return r<0?Un(-r,e).neg():Tt(r%Vr|0,r/Vr|0,e)}ft.fromNumber=Un;function Tt(r,e,n){return new ft(r,e,n)}ft.fromBits=Tt;var mc=Math.pow;function wl(r,e,n){if(r.length===0)throw Error("empty string");if(typeof e=="number"?(n=e,e=!1):e=!!e,r==="NaN"||r==="Infinity"||r==="+Infinity"||r==="-Infinity")return e?xi:Xn;if(n=n||10,n<2||36<n)throw RangeError("radix");var o;if((o=r.indexOf("-"))>0)throw Error("interior hyphen");if(o===0)return wl(r.substring(1),e,n).neg();for(var l=Un(mc(n,8)),d=Xn,p=0;p<r.length;p+=8){var y=Math.min(8,r.length-p),A=parseInt(r.substring(p,p+y),n);if(y<8){var I=Un(mc(n,y));d=d.mul(I).add(Un(A))}else d=d.mul(l),d=d.add(Un(A))}return d.unsigned=e,d}ft.fromString=wl;function Fn(r,e){return typeof r=="number"?Un(r,e):typeof r=="string"?wl(r,e):Tt(r.low,r.high,typeof e=="boolean"?e:r.unsigned)}ft.fromValue=Fn;var Td=65536,tg=1<<24,Vr=Td*Td,Ed=Vr*Vr,ng=Ed/2,Md=lr(tg),Xn=lr(0);ft.ZERO=Xn;var xi=lr(0,!0);ft.UZERO=xi;var Hr=lr(1);ft.ONE=Hr;var wd=lr(1,!0);ft.UONE=wd;var Al=lr(-1);ft.NEG_ONE=Al;var Ad=Tt(-1,2147483647,!1);ft.MAX_VALUE=Ad;var bd=Tt(-1,-1,!0);ft.MAX_UNSIGNED_VALUE=bd;var xn=Tt(0,-2147483648,!1);ft.MIN_VALUE=xn;var ye=ft.prototype;ye.toInt=function(){return this.unsigned?this.low>>>0:this.low},ye.toNumber=function(){return this.unsigned?(this.high>>>0)*Vr+(this.low>>>0):this.high*Vr+(this.low>>>0)},ye.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(xn)){var n=Un(e),o=this.div(n),l=o.mul(n).sub(this);return o.toString(e)+l.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var d=Un(mc(e,6),this.unsigned),p=this,y="";;){var A=p.div(d),I=p.sub(A.mul(d)).toInt()>>>0,B=I.toString(e);if(p=A,p.isZero())return B+y;for(;B.length<6;)B="0"+B;y=""+B+y}},ye.getHighBits=function(){return this.high},ye.getHighBitsUnsigned=function(){return this.high>>>0},ye.getLowBits=function(){return this.low},ye.getLowBitsUnsigned=function(){return this.low>>>0},ye.getNumBitsAbs=function(){if(this.isNegative())return this.eq(xn)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,n=31;n>0&&(e&1<<n)==0;n--);return this.high!=0?n+33:n+1},ye.isSafeInteger=function(){var e=this.high>>21;return e?this.unsigned?!1:e===-1&&!(this.low===0&&this.high===-2097152):!0},ye.isZero=function(){return this.high===0&&this.low===0},ye.eqz=ye.isZero,ye.isNegative=function(){return!this.unsigned&&this.high<0},ye.isPositive=function(){return this.unsigned||this.high>=0},ye.isOdd=function(){return(this.low&1)===1},ye.isEven=function(){return(this.low&1)===0},ye.equals=function(e){return un(e)||(e=Fn(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low},ye.eq=ye.equals,ye.notEquals=function(e){return!this.eq(e)},ye.neq=ye.notEquals,ye.ne=ye.notEquals,ye.lessThan=function(e){return this.comp(e)<0},ye.lt=ye.lessThan,ye.lessThanOrEqual=function(e){return this.comp(e)<=0},ye.lte=ye.lessThanOrEqual,ye.le=ye.lessThanOrEqual,ye.greaterThan=function(e){return this.comp(e)>0},ye.gt=ye.greaterThan,ye.greaterThanOrEqual=function(e){return this.comp(e)>=0},ye.gte=ye.greaterThanOrEqual,ye.ge=ye.greaterThanOrEqual,ye.compare=function(e){if(un(e)||(e=Fn(e)),this.eq(e))return 0;var n=this.isNegative(),o=e.isNegative();return n&&!o?-1:!n&&o?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},ye.comp=ye.compare,ye.negate=function(){return!this.unsigned&&this.eq(xn)?xn:this.not().add(Hr)},ye.neg=ye.negate,ye.add=function(e){un(e)||(e=Fn(e));var n=this.high>>>16,o=this.high&65535,l=this.low>>>16,d=this.low&65535,p=e.high>>>16,y=e.high&65535,A=e.low>>>16,I=e.low&65535,B=0,ie=0,de=0,ee=0;return ee+=d+I,de+=ee>>>16,ee&=65535,de+=l+A,ie+=de>>>16,de&=65535,ie+=o+y,B+=ie>>>16,ie&=65535,B+=n+p,B&=65535,Tt(de<<16|ee,B<<16|ie,this.unsigned)},ye.subtract=function(e){return un(e)||(e=Fn(e)),this.add(e.neg())},ye.sub=ye.subtract,ye.multiply=function(e){if(this.isZero())return this;if(un(e)||(e=Fn(e)),On){var n=On.mul(this.low,this.high,e.low,e.high);return Tt(n,On.get_high(),this.unsigned)}if(e.isZero())return this.unsigned?xi:Xn;if(this.eq(xn))return e.isOdd()?xn:Xn;if(e.eq(xn))return this.isOdd()?xn:Xn;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Md)&&e.lt(Md))return Un(this.toNumber()*e.toNumber(),this.unsigned);var o=this.high>>>16,l=this.high&65535,d=this.low>>>16,p=this.low&65535,y=e.high>>>16,A=e.high&65535,I=e.low>>>16,B=e.low&65535,ie=0,de=0,ee=0,_e=0;return _e+=p*B,ee+=_e>>>16,_e&=65535,ee+=d*B,de+=ee>>>16,ee&=65535,ee+=p*I,de+=ee>>>16,ee&=65535,de+=l*B,ie+=de>>>16,de&=65535,de+=d*I,ie+=de>>>16,de&=65535,de+=p*A,ie+=de>>>16,de&=65535,ie+=o*B+l*I+d*A+p*y,ie&=65535,Tt(ee<<16|_e,ie<<16|de,this.unsigned)},ye.mul=ye.multiply,ye.divide=function(e){if(un(e)||(e=Fn(e)),e.isZero())throw Error("division by zero");if(On){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var n=(this.unsigned?On.div_u:On.div_s)(this.low,this.high,e.low,e.high);return Tt(n,On.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?xi:Xn;var o,l,d;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return xi;if(e.gt(this.shru(1)))return wd;d=xi}else{if(this.eq(xn)){if(e.eq(Hr)||e.eq(Al))return xn;if(e.eq(xn))return Hr;var p=this.shr(1);return o=p.div(e).shl(1),o.eq(Xn)?e.isNegative()?Hr:Al:(l=this.sub(e.mul(o)),d=o.add(l.div(e)),d)}else if(e.eq(xn))return this.unsigned?xi:Xn;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();d=Xn}for(l=this;l.gte(e);){o=Math.max(1,Math.floor(l.toNumber()/e.toNumber()));for(var y=Math.ceil(Math.log(o)/Math.LN2),A=y<=48?1:mc(2,y-48),I=Un(o),B=I.mul(e);B.isNegative()||B.gt(l);)o-=A,I=Un(o,this.unsigned),B=I.mul(e);I.isZero()&&(I=Hr),d=d.add(I),l=l.sub(B)}return d},ye.div=ye.divide,ye.modulo=function(e){if(un(e)||(e=Fn(e)),On){var n=(this.unsigned?On.rem_u:On.rem_s)(this.low,this.high,e.low,e.high);return Tt(n,On.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))},ye.mod=ye.modulo,ye.rem=ye.modulo,ye.not=function(){return Tt(~this.low,~this.high,this.unsigned)},ye.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32},ye.clz=ye.countLeadingZeros,ye.countTrailingZeros=function(){return this.low?yd(this.low):yd(this.high)+32},ye.ctz=ye.countTrailingZeros,ye.and=function(e){return un(e)||(e=Fn(e)),Tt(this.low&e.low,this.high&e.high,this.unsigned)},ye.or=function(e){return un(e)||(e=Fn(e)),Tt(this.low|e.low,this.high|e.high,this.unsigned)},ye.xor=function(e){return un(e)||(e=Fn(e)),Tt(this.low^e.low,this.high^e.high,this.unsigned)},ye.shiftLeft=function(e){return un(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?Tt(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):Tt(0,this.low<<e-32,this.unsigned)},ye.shl=ye.shiftLeft,ye.shiftRight=function(e){return un(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?Tt(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):Tt(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},ye.shr=ye.shiftRight,ye.shiftRightUnsigned=function(e){return un(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?Tt(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):e===32?Tt(this.high,0,this.unsigned):Tt(this.high>>>e-32,0,this.unsigned)},ye.shru=ye.shiftRightUnsigned,ye.shr_u=ye.shiftRightUnsigned,ye.rotateLeft=function(e){var n;return un(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?Tt(this.high,this.low,this.unsigned):e<32?(n=32-e,Tt(this.low<<e|this.high>>>n,this.high<<e|this.low>>>n,this.unsigned)):(e-=32,n=32-e,Tt(this.high<<e|this.low>>>n,this.low<<e|this.high>>>n,this.unsigned))},ye.rotl=ye.rotateLeft,ye.rotateRight=function(e){var n;return un(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?Tt(this.high,this.low,this.unsigned):e<32?(n=32-e,Tt(this.high<<n|this.low>>>e,this.low<<n|this.high>>>e,this.unsigned)):(e-=32,n=32-e,Tt(this.low<<n|this.high>>>e,this.high<<n|this.low>>>e,this.unsigned))},ye.rotr=ye.rotateRight,ye.toSigned=function(){return this.unsigned?Tt(this.low,this.high,!1):this},ye.toUnsigned=function(){return this.unsigned?this:Tt(this.low,this.high,!0)},ye.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},ye.toBytesLE=function(){var e=this.high,n=this.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},ye.toBytesBE=function(){var e=this.high,n=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,n>>>24,n>>>16&255,n>>>8&255,n&255]},ft.fromBytes=function(e,n,o){return o?ft.fromBytesLE(e,n):ft.fromBytesBE(e,n)},ft.fromBytesLE=function(e,n){return new ft(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,n)},ft.fromBytesBE=function(e,n){return new ft(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],n)},typeof BigInt=="function"&&(ft.fromBigInt=function(e,n){var o=Number(BigInt.asIntN(32,e)),l=Number(BigInt.asIntN(32,e>>BigInt(32)));return Tt(o,l,n)},ft.fromValue=function(e,n){return typeof e=="bigint"?fromBigInt(e,n):Fn(e,n)},ye.toBigInt=function(){var e=BigInt(this.low>>>0),n=BigInt(this.unsigned?this.high>>>0:this.high);return n<<BigInt(32)|e});var tn=(r=>(r[r.Null=0]="Null",r[r.Boolean=1]="Boolean",r[r.Integer=2]="Integer",r[r.Long=3]="Long",r[r.Double=4]="Double",r[r.String=5]="String",r[r.Bytes=6]="Bytes",r[r.Date=7]="Date",r))(tn||{});class Ht extends Cs{constructor(e,n){super(n),c(this,"valueType"),c(this,"value"),this.valueType=Ht.getPrimitiveType(e),this.value=e===void 0?null:e}static of(e,n){return new Ht(e,n)}static valueFromBytes(e,n){switch(e){case 0:return null;case 1:return!!n[0];case 2:return n[0]|n[1]<<8|n[2]<<16|n[3]<<24;case 4:{const o=new DataView(n.buffer);return n.forEach(function(l,d){o.setUint8(d,l)}),o.getFloat64(0,!0)}case 5:return new TextDecoder("utf-8").decode(n);case 3:return ft.fromBytesLE(Array.from(n));case 6:return n;case 7:return new Date(ft.fromBytesLE(Array.from(n),!0).toNumber());default:throw new $(J.ErrUnimplemented,`unimplemented type: ${e}`)}}getValueSize(){switch(this.valueType){case 0:return 8;case 1:return 4;case 2:return 4;case 3:return 8;case 4:return 8;case 5:return this.value.length*2;case 6:return this.value.length;case 7:return 8;default:throw new $(J.ErrUnimplemented,`unimplemented type: ${this.valueType}`)}}getDataSize(){return{data:this.getValueSize(),meta:this.getMetaUsage()}}toJSON(){return this.valueType===5?`"${ci(this.value)}"`:`${this.value}`}toSortedJSON(){return this.toJSON()}toJSForTest(){return{createdAt:this.getCreatedAt().toTestString(),value:this.value,type:"YORKIE_PRIMITIVE"}}deepcopy(){const e=Ht.of(this.value,this.getCreatedAt());return e.setMovedAt(this.getMovedAt()),e.setRemovedAt(this.getRemovedAt()),e}getType(){return this.valueType}static getPrimitiveType(e){switch(typeof e){case"undefined":return 0;case"boolean":return 1;case"number":return this.isInteger(e)?2:4;case"string":return 5;case"object":if(e===null)return 0;if(e instanceof ft)return 3;if(e instanceof Uint8Array)return 6;if(e instanceof Date)return 7}}static isSupport(e){return Ht.getPrimitiveType(e)!==void 0}static isInteger(e){return e%1===0}isNumericType(){const e=this.valueType;return e===2||e===3||e===4}getValue(){return this.value}toBytes(){switch(this.valueType){case 0:return new Uint8Array;case 1:return this.value?new Uint8Array([1]):new Uint8Array([0]);case 2:{const e=this.value;return new Uint8Array([e&255,e>>8&255,e>>16&255,e>>24&255])}case 4:{const e=this.value,n=new Uint8Array(8);return new DataView(n.buffer).setFloat64(0,e,!0),n}case 5:return new TextEncoder().encode(this.value);case 3:{const n=this.value.toBytesLE();return Uint8Array.from(n)}case 6:return this.value;case 7:{const e=this.value,n=ft.fromNumber(e.getTime(),!0).toBytesLE();return Uint8Array.from(n)}default:throw new $(J.ErrUnimplemented,`unimplemented type: ${this.valueType}`)}}}class gc extends _d{constructor(e){super(e),c(this,"prev"),c(this,"next"),this.value=e}static createAfter(e,n){const o=new gc(n),l=e.next;return e.next=o,o.prev=e,o.next=l,l&&(l.prev=o),o}remove(e){return this.value.remove(e)}getCreatedAt(){return this.value.getCreatedAt()}getPositionedAt(){return this.value.getPositionedAt()}release(){this.prev&&(this.prev.next=this.next),this.next&&(this.next.prev=this.prev),this.prev=void 0,this.next=void 0}getLength(){return this.value.isRemoved()?0:1}getPrev(){return this.prev}getNext(){return this.next}getValue(){return this.value}isRemoved(){return this.value.isRemoved()}}class Ds{constructor(){c(this,"dummyHead"),c(this,"last"),c(this,"nodeMapByIndex"),c(this,"nodeMapByCreatedAt");const e=Ht.of(0,qn);e.setRemovedAt(qn),this.dummyHead=new gc(e),this.last=this.dummyHead,this.nodeMapByIndex=new Ps,this.nodeMapByCreatedAt=new Map,this.nodeMapByIndex.insert(this.dummyHead),this.nodeMapByCreatedAt.set(this.dummyHead.getCreatedAt().toIDString(),this.dummyHead)}static create(){return new Ds}get length(){return this.nodeMapByIndex.length}findNextBeforeExecutedAt(e,n){let o=this.nodeMapByCreatedAt.get(e.toIDString());if(!o)throw new $(J.ErrInvalidArgument,`cant find the given node: ${e.toIDString()}`);for(;o.getNext()&&o.getNext().getPositionedAt().after(n);)o=o.getNext();return o}release(e){this.last===e&&(this.last=e.getPrev()),e.release(),this.nodeMapByIndex.delete(e),this.nodeMapByCreatedAt.delete(e.getValue().getCreatedAt().toIDString())}insertAfter(e,n,o=n.getCreatedAt()){const l=this.findNextBeforeExecutedAt(e,o),d=gc.createAfter(l,n);l===this.last&&(this.last=d),this.nodeMapByIndex.insertAfter(l,d),this.nodeMapByCreatedAt.set(d.getCreatedAt().toIDString(),d)}moveAfter(e,n,o){const l=this.nodeMapByCreatedAt.get(e.toIDString());if(!l)throw new $(J.ErrInvalidArgument,`cant find the given node: ${e.toIDString()}`);const d=this.nodeMapByCreatedAt.get(n.toIDString());if(!d)throw new $(J.ErrInvalidArgument,`cant find the given node: ${n.toIDString()}`);l!==d&&(!d.getValue().getMovedAt()||o.after(d.getValue().getMovedAt()))&&(this.release(d),this.insertAfter(l.getCreatedAt(),d.getValue(),o),d.getValue().setMovedAt(o))}insert(e){this.insertAfter(this.last.getCreatedAt(),e)}getByID(e){return this.nodeMapByCreatedAt.get(e.toIDString())}subPathOf(e){const n=this.nodeMapByCreatedAt.get(e.toIDString());if(n)return String(this.nodeMapByIndex.indexOf(n))}purge(e){const n=this.nodeMapByCreatedAt.get(e.getCreatedAt().toIDString());if(!n)throw new $(J.ErrInvalidArgument,`fail to find the given createdAt: ${e.getCreatedAt().toIDString()}`);this.release(n)}getByIndex(e){if(e>=this.length)return;const[n,o]=this.nodeMapByIndex.find(e);let l=n;if(e===0&&n===this.dummyHead||o>0)do l&&(l=l.getNext());while(l&&l.isRemoved());return l}getPrevCreatedAt(e){let n=this.nodeMapByCreatedAt.get(e.toIDString());do n=n.getPrev();while(this.dummyHead!==n&&n.isRemoved());return n.getValue().getCreatedAt()}delete(e,n){const o=this.nodeMapByCreatedAt.get(e.toIDString()),l=o.isRemoved();return o.remove(n)&&!l&&this.nodeMapByIndex.splayNode(o),o.getValue()}deleteByIndex(e,n){const o=this.getByIndex(e);if(o)return o.remove(n)&&this.nodeMapByIndex.splayNode(o),o.getValue()}getHead(){return this.dummyHead.getValue()}getLast(){return this.last.getValue()}getLastCreatedAt(){return this.last.getCreatedAt()}toTestString(){const e=[];for(const n of this){const o=`${n.getCreatedAt().toIDString()}:${n.getValue().toJSON()}`;n.isRemoved()?e.push(`{${o}}`):e.push(`[${o}]`)}return e.join("")}*[Symbol.iterator](){let e=this.dummyHead.getNext();for(;e;)yield e,e=e.getNext()}}class Rn extends zi{constructor(e,n){super(e),c(this,"elements"),this.elements=n}static create(e,n){if(!n)return new Rn(e,Ds.create());const o=Ds.create();for(const l of n)o.insertAfter(o.getLastCreatedAt(),l.deepcopy());return new Rn(e,o)}subPathOf(e){return this.elements.subPathOf(e)}purge(e){this.elements.purge(e)}insertAfter(e,n){this.elements.insertAfter(e,n)}moveAfter(e,n,o){this.elements.moveAfter(e,n,o)}get(e){const n=this.elements.getByIndex(e);return n==null?void 0:n.getValue()}getByID(e){const n=this.elements.getByID(e);return n==null?void 0:n.getValue()}getHead(){return this.elements.getHead()}getLast(){return this.elements.getLast()}getPrevCreatedAt(e){return this.elements.getPrevCreatedAt(e)}delete(e,n){return this.elements.delete(e,n)}deleteByIndex(e,n){return this.elements.deleteByIndex(e,n)}getLastCreatedAt(){return this.elements.getLastCreatedAt()}get length(){return this.elements.length}*[Symbol.iterator](){for(const e of this.elements)e.isRemoved()||(yield e.getValue())}toTestString(){return this.elements.toTestString()}getDescendants(e){for(const n of this.elements){const o=n.getValue();if(e(o,this))return;o instanceof zi&&o.getDescendants(e)}}getDataSize(){return{data:0,meta:this.getMetaUsage()}}toJSON(){const e=[];for(const n of this)e.push(n.toJSON());return`[${e.join(",")}]`}toJS(){return JSON.parse(this.toJSON())}toJSForTest(){const e={};for(let n=0;n<this.length;n++){const{createdAt:o,value:l,type:d}=this.get(n).toJSForTest();e[n]={key:String(n),createdAt:o,value:l,type:d}}return{createdAt:this.getCreatedAt().toTestString(),value:e,type:"YORKIE_ARRAY"}}toSortedJSON(){return this.toJSON()}getElements(){return this.elements}deepcopy(){const e=Rn.create(this.getCreatedAt());for(const n of this.elements)e.elements.insertAfter(e.getLastCreatedAt(),n.getValue().deepcopy());return e.remove(this.getRemovedAt()),e}}class Vi extends Jn{constructor(e,n,o){super(e,o),c(this,"createdAt"),this.createdAt=n}static create(e,n,o){return new Vi(e,n,o)}execute(e,n){var o;const l=e.findByCreatedAt(this.getParentCreatedAt());if(!l)throw new $(J.ErrInvalidArgument,`fail to find ${this.getParentCreatedAt()}`);if(!(l instanceof zi))throw new $(J.ErrInvalidArgument,`only object and array can execute remove: ${l}`);if(n===It.UndoRedo){let I=l.getByID(this.createdAt);for(;I;){if(I.getRemovedAt())return;I=(o=e.findElementPairByCreatedAt(I.getCreatedAt()))==null?void 0:o.parent}}const d=l.subPathOf(this.createdAt),p=this.toReverseOperation(l),y=l.delete(this.createdAt,this.getExecutedAt());return e.registerRemovedElement(y),{opInfos:l instanceof Rn?[{type:"remove",path:e.createPath(this.getParentCreatedAt()),index:Number(d)}]:[{type:"remove",path:e.createPath(this.getParentCreatedAt()),key:d}],reverseOp:p}}toReverseOperation(e){if(e instanceof Sn){const n=e.subPathOf(this.createdAt);if(n!==void 0){const o=e.get(n);if(o!==void 0)return hr.create(n,o.deepcopy(),this.getParentCreatedAt())}}}getEffectedCreatedAt(){return this.getParentCreatedAt()}toTestString(){return`${this.getParentCreatedAt().toTestString()}.REMOVE.${this.createdAt.toTestString()}`}getCreatedAt(){return this.createdAt}}class hr extends Jn{constructor(e,n,o,l){super(o,l),c(this,"key"),c(this,"value"),this.key=e,this.value=n}static create(e,n,o,l){return new hr(e,n,o,l)}execute(e,n){var o;const l=e.findByCreatedAt(this.getParentCreatedAt());if(!l)throw new $(J.ErrInvalidArgument,`fail to find ${this.getParentCreatedAt()}`);if(!(l instanceof Sn))throw new $(J.ErrInvalidArgument,"fail to execute, only object can execute set");if(n===It.UndoRedo){let I=l;for(;I;){if(I.getRemovedAt())return;I=(o=e.findElementPairByCreatedAt(I.getCreatedAt()))==null?void 0:o.parent}}const d=l.get(this.key),p=this.toReverseOperation(d),y=this.value.deepcopy(),A=l.set(this.key,y,this.getExecutedAt());return n===It.UndoRedo&&e.findByCreatedAt(y.getCreatedAt())&&e.deregisterElement(y),e.registerElement(y,l),A&&e.registerRemovedElement(A),{opInfos:[{type:"set",path:e.createPath(this.getParentCreatedAt()),key:this.key}],reverseOp:p}}toReverseOperation(e){let n=Vi.create(this.getParentCreatedAt(),this.value.getCreatedAt());return e!==void 0&&!e.isRemoved()&&(n=hr.create(this.key,e.deepcopy(),this.getParentCreatedAt())),n}getEffectedCreatedAt(){return this.value.getCreatedAt()}toTestString(){return`${this.getParentCreatedAt().toTestString()}.SET.${this.key}=${this.value.toSortedJSON()}`}getKey(){return this.key}getValue(){return this.value}}class Ns extends Jn{constructor(e,n,o,l){super(e,l),c(this,"prevCreatedAt"),c(this,"value"),this.prevCreatedAt=n,this.value=o}static create(e,n,o,l){return new Ns(e,n,o,l)}execute(e){const n=e.findByCreatedAt(this.getParentCreatedAt());if(!n)throw new $(J.ErrInvalidArgument,`fail to find ${this.getParentCreatedAt()}`);if(!(n instanceof Rn))throw new $(J.ErrInvalidArgument,"fail to execute, only array can execute add");const o=n,l=this.value.deepcopy();return o.insertAfter(this.prevCreatedAt,l),e.registerElement(l,o),{opInfos:[{type:"add",path:e.createPath(this.getParentCreatedAt()),index:Number(o.subPathOf(this.getEffectedCreatedAt()))}]}}getEffectedCreatedAt(){return this.value.getCreatedAt()}toTestString(){return`${this.getParentCreatedAt().toTestString()}.ADD.${this.value.toJSON()}`}getPrevCreatedAt(){return this.prevCreatedAt}getValue(){return this.value}}class Hi extends Jn{constructor(e,n,o,l){super(e,l),c(this,"prevCreatedAt"),c(this,"createdAt"),this.prevCreatedAt=n,this.createdAt=o}static create(e,n,o,l){return new Hi(e,n,o,l)}execute(e){const n=e.findByCreatedAt(this.getParentCreatedAt());if(!n)throw new $(J.ErrInvalidArgument,`fail to find ${this.getParentCreatedAt()}`);if(!(n instanceof Rn))throw new $(J.ErrInvalidArgument,"fail to execute, only array can execute move");const o=n,l=Number(o.subPathOf(this.createdAt));o.moveAfter(this.prevCreatedAt,this.createdAt,this.getExecutedAt());const d=Number(o.subPathOf(this.createdAt));return{opInfos:[{type:"move",path:e.createPath(this.getParentCreatedAt()),index:d,previousIndex:l}]}}getEffectedCreatedAt(){return this.createdAt}toTestString(){return`${this.getParentCreatedAt().toTestString()}.MOVE`}getPrevCreatedAt(){return this.prevCreatedAt}getCreatedAt(){return this.createdAt}}class ur{constructor(e,n,o,l){c(this,"key"),c(this,"value"),c(this,"updatedAt"),c(this,"_isRemoved"),this.key=e,this.value=n,this.updatedAt=o,this._isRemoved=l}static of(e,n,o,l){return new ur(e,n,o,l)}getKey(){return this.key}getValue(){return this.value}getUpdatedAt(){return this.updatedAt}isRemoved(){return this._isRemoved}toIDString(){return`${this.updatedAt.toIDString()}:${this.key}`}getRemovedAt(){if(this._isRemoved)return this.updatedAt}getDataSize(){return{data:(this.key.length+this.value.length)*2,meta:ki}}}class Ti{constructor(){c(this,"nodeMapByKey"),c(this,"numberOfRemovedElement"),this.nodeMapByKey=new Map,this.numberOfRemovedElement=0}static create(){return new Ti}getNodeMapByKey(){return this.nodeMapByKey}set(e,n,o){const l=this.nodeMapByKey.get(e);if(l&&l.isRemoved()&&o.after(l.getUpdatedAt())&&(this.numberOfRemovedElement-=1),l===void 0||o.after(l.getUpdatedAt())){const d=ur.of(e,n,o,!1);return this.nodeMapByKey.set(e,d),l!==void 0&&l.isRemoved()?[l,d]:[void 0,d]}return l.isRemoved()?[l,void 0]:[void 0,void 0]}setInternal(e,n,o,l){const d=ur.of(e,n,o,l);this.nodeMapByKey.set(e,d),l&&this.numberOfRemovedElement++}remove(e,n){const o=this.nodeMapByKey.get(e),l=[];if(o===void 0||n.after(o.getUpdatedAt())){if(o===void 0){this.numberOfRemovedElement+=1;const y=ur.of(e,"",n,!0);return this.nodeMapByKey.set(e,y),l.push(y),l}const d=o.isRemoved();d||(this.numberOfRemovedElement+=1),d&&l.push(o);const p=ur.of(e,o.getValue(),n,!0);return this.nodeMapByKey.set(e,p),l.push(p),l}return l}has(e){if(this.nodeMapByKey.has(e)){const n=this.nodeMapByKey.get(e);return n!==void 0&&!n.isRemoved()}return!1}get(e){if(this.nodeMapByKey.has(e))return this.nodeMapByKey.get(e).getValue()}deepcopy(){const e=new Ti;for(const[,n]of this.nodeMapByKey)e.setInternal(n.getKey(),n.getValue(),n.getUpdatedAt(),n.isRemoved());return e}toJSON(){if(!this.size())return"{}";const e=[];for(const[n,o]of this.nodeMapByKey)o.isRemoved()||e.push(`"${ci(n)}":"${ci(o.getValue())}"`);return`{${e.join(",")}}`}size(){return this.nodeMapByKey.size-this.numberOfRemovedElement}toObject(){const e={};for(const[n,o]of this.nodeMapByKey)o.isRemoved()||(e[n]=o.getValue());return e}*[Symbol.iterator](){for(const[,e]of this.nodeMapByKey)yield e}purge(e){const n=this.nodeMapByKey.get(e.getKey());n==null||n.toIDString()!=e.toIDString()||(this.nodeMapByKey.delete(e.getKey()),this.numberOfRemovedElement--)}}class Ls{constructor(e){c(this,"attributes"),c(this,"content"),this.attributes=Ti.create(),this.content=e}static create(e){return new Ls(e)}get length(){return this.content.length}substring(e,n){const o=new Ls(this.content.substring(e,n));return o.attributes=this.attributes.deepcopy(),o}setAttr(e,n,o){return this.attributes.set(e,n,o)}getAttrs(){return this.attributes}toString(){return this.content}getDataSize(){const e={data:0,meta:0};e.data+=this.content.length*2;for(const n of this.attributes){const o=n.getDataSize();e.meta+=o.meta,e.data+=o.data}return e}toJSON(){const e=ci(this.content),n=this.attributes.toObject(),o=[];for(const[l,d]of Object.entries(n)){const p=JSON.parse(d),y=typeof p=="string"?`"${ci(l)}":"${ci(p)}"`:`"${ci(l)}":${String(p)}`;o.push(y)}return o.sort(),o.length===0?`{"val":"${e}"}`:`{"attrs":{${o.join(",")}},"val":"${e}"}`}getAttributes(){return this.attributes.toObject()}getContent(){return this.content}purge(e){this.attributes&&e instanceof ur&&this.attributes.purge(e)}getGCPairs(){const e=[];for(const n of this.attributes)n.getRemovedAt()&&e.push({parent:this,child:n});return e}}class Bn extends Cs{constructor(e,n){super(n),c(this,"rgaTreeSplit"),this.rgaTreeSplit=e}static create(e,n){return new Bn(e,n)}edit(e,n,o,l,d,p){const y=n?Ls.create(n):void 0;if(y&&l)for(const[ee,_e]of Object.entries(l))y.setAttr(ee,_e,o);const[A,I,B,ie]=this.rgaTreeSplit.edit(e,o,y,d,p),de=ie.map(ee=>({...ee,value:ee.value?{attributes:Si(ee.value.getAttributes()),content:ee.value.getContent()}:{attributes:void 0,content:""},type:"content"}));return[I,de,B,[A,A]]}setStyle(e,n,o,l,d){const[,p]=this.rgaTreeSplit.findNodeWithSplit(e[1],o),[,y]=this.rgaTreeSplit.findNodeWithSplit(e[0],o),A=[],I=this.rgaTreeSplit.findBetween(y,p),B=new Map,ie=[];for(const ee of I){const _e=ee.getCreatedAt().getActorID();let Be,qe=0n;if(d===void 0&&l===void 0?qe=Rs:d.size()>0?qe=d.get(_e)?d.get(_e):0n:Be=l.has(_e)?l.get(_e):qn,ee.canStyle(o,Be,qe)){const tt=B.get(_e),xt=ee.getCreatedAt();(!tt||xt.after(tt))&&B.set(_e,xt),ie.push(ee)}}const de=[];for(const ee of ie){if(ee.isRemoved())continue;const[_e,Be]=this.rgaTreeSplit.findIndexesFromRange(ee.createPosRange());A.push({type:"style",actor:o.getActorID(),from:_e,to:Be,value:{attributes:Si(n)}});for(const[qe,tt]of Object.entries(n)){const[xt]=ee.getValue().setAttr(qe,tt,o);xt!==void 0&&de.push({parent:ee.getValue(),child:xt})}}return[B,de,A]}indexRangeToPosRange(e,n){const o=this.rgaTreeSplit.indexToPos(e);return e===n?[o,o]:[o,this.rgaTreeSplit.indexToPos(n)]}get length(){return this.rgaTreeSplit.length}getTreeByIndex(){return this.rgaTreeSplit.getTreeByIndex()}getTreeByID(){return this.rgaTreeSplit.getTreeByID()}getDataSize(){const e={data:0,meta:0};for(const n of this.rgaTreeSplit){if(n.isRemoved())continue;const o=n.getDataSize();e.data+=o.data,e.meta+=o.meta}return{data:e.data,meta:e.meta+this.getMetaUsage()}}toJSON(){const e=[];for(const n of this.rgaTreeSplit)n.isRemoved()||e.push(n.getValue().toJSON());return`[${e.join(",")}]`}toSortedJSON(){return this.toJSON()}toJSForTest(){return{createdAt:this.getCreatedAt().toTestString(),value:JSON.parse(this.toJSON()),type:"YORKIE_TEXT"}}toString(){return this.rgaTreeSplit.toString()}values(){const e=[];for(const n of this.rgaTreeSplit)if(!n.isRemoved()){const o=n.getValue();e.push({attributes:Si(o.getAttributes()),content:o.getContent()})}return e}getRGATreeSplit(){return this.rgaTreeSplit}toTestString(){return this.rgaTreeSplit.toTestString()}deepcopy(){const e=new Bn(this.rgaTreeSplit.deepcopy(),this.getCreatedAt());return e.remove(this.getRemovedAt()),e}findIndexesFromRange(e){return this.rgaTreeSplit.findIndexesFromRange(e)}getGCPairs(){const e=[];for(const n of this.rgaTreeSplit){n.getRemovedAt()&&e.push({parent:this.rgaTreeSplit,child:n});for(const o of n.getValue().getGCPairs())e.push(o)}return e}}class Os extends Jn{constructor(e,n,o,l,d,p,y){super(e,y),c(this,"fromPos"),c(this,"toPos"),c(this,"maxCreatedAtMapByActor"),c(this,"content"),c(this,"attributes"),this.fromPos=n,this.toPos=o,this.maxCreatedAtMapByActor=l,this.content=d,this.attributes=p}static create(e,n,o,l,d,p,y){return new Os(e,n,o,l,d,p,y)}execute(e,n,o){const l=e.findByCreatedAt(this.getParentCreatedAt());if(!l)throw new $(J.ErrInvalidArgument,`fail to find ${this.getParentCreatedAt()}`);if(!(l instanceof Bn))throw new $(J.ErrInvalidArgument,"fail to execute, only Text can execute edit");const d=l,[,p,y]=d.edit([this.fromPos,this.toPos],this.content,this.getExecutedAt(),Object.fromEntries(this.attributes),this.maxCreatedAtMapByActor,o);for(const A of y)e.registerGCPair(A);return{opInfos:p.map(({from:A,to:I,value:B})=>({type:"edit",from:A,to:I,value:B,path:e.createPath(this.getParentCreatedAt())}))}}getEffectedCreatedAt(){return this.getParentCreatedAt()}toTestString(){const e=this.getParentCreatedAt().toTestString(),n=this.fromPos.toTestString(),o=this.toPos.toTestString(),l=this.content;return`${e}.EDIT(${n},${o},${l})`}getFromPos(){return this.fromPos}getToPos(){return this.toPos}getContent(){return this.content}getAttributes(){return this.attributes||new Map}getMaxCreatedAtMapByActor(){return this.maxCreatedAtMapByActor}}class Us extends Jn{constructor(e,n,o,l,d,p){super(e,p),c(this,"fromPos"),c(this,"toPos"),c(this,"maxCreatedAtMapByActor"),c(this,"attributes"),this.fromPos=n,this.toPos=o,this.maxCreatedAtMapByActor=l,this.attributes=d}static create(e,n,o,l,d,p){return new Us(e,n,o,l,d,p)}execute(e,n,o){const l=e.findByCreatedAt(this.getParentCreatedAt());if(!l)throw new $(J.ErrInvalidArgument,`fail to find ${this.getParentCreatedAt()}`);if(!(l instanceof Bn))throw new $(J.ErrInvalidArgument,"fail to execute, only Text can execute edit");const d=l,[,p,y]=d.setStyle([this.fromPos,this.toPos],this.attributes?Object.fromEntries(this.attributes):{},this.getExecutedAt(),this.maxCreatedAtMapByActor,o);for(const A of p)e.registerGCPair(A);return{opInfos:y.map(({from:A,to:I,value:B})=>({type:"style",from:A,to:I,value:B,path:e.createPath(this.getParentCreatedAt())}))}}getEffectedCreatedAt(){return this.getParentCreatedAt()}toTestString(){const e=this.getParentCreatedAt().toTestString(),n=this.fromPos.toTestString(),o=this.toPos.toTestString(),l=this.attributes;return`${e}.STYL(${n},${o},${JSON.stringify(l)})`}getFromPos(){return this.fromPos}getToPos(){return this.toPos}getAttributes(){return this.attributes}getMaxCreatedAtMapByActor(){return this.maxCreatedAtMapByActor}}const ig=2,rg="root",li="text";function Fs(r,e){let n=0;const o=r.children;for(let l=0;l<e;l++){const d=o[l];!d||d.isRemoved||(n+=d.paddedSize)}return n}class sg{constructor(e,n=[]){if(c(this,"type"),c(this,"parent"),c(this,"_children"),c(this,"size"),this.type=e,this.size=0,this._children=n,this.isText&&this._children.length>0)throw new $(J.ErrRefused,"Text node cannot have children")}updateAncestorsSize(){let e=this.parent;const n=this.isRemoved?-1:1;for(;e&&(e.size+=this.paddedSize*n,!e.isRemoved);)e=e.parent}updateDescendantsSize(){let e=0;for(const n of this._children){const o=n.updateDescendantsSize();n.isRemoved||(e+=o)}return this.size+=e,this.paddedSize}get isText(){return this.type===li}get paddedSize(){return this.size+(this.isText?0:ig)}isAncestorOf(e){return og(this,e)}get nextSibling(){const e=this.parent.findOffset(this),n=this.parent.children[e+1];if(n)return n}get prevSibling(){const e=this.parent.findOffset(this),n=this.parent.children[e-1];if(n)return n}splitText(e,n){if(e===0||e===this.size)return;const o=this.value.slice(0,e),l=this.value.slice(e);if(!l.length)return;this.value=o;const d=this.cloneText(e+n);return d.value=l,this.parent.insertAfterInternal(d,this),d}get children(){return this._children.filter(e=>!e.isRemoved)}get allChildren(){return[...this._children]}hasTextChild(){return this.children.length>0&&this.children.every(e=>e.isText)}getChildrenText(){return this.isText?this.value:this.hasTextChild()?this.children.map(e=>e.value).join(""):""}append(...e){if(this.isText)throw new $(J.ErrRefused,"Text node cannot have children");this._children.push(...e);for(const n of e)n.parent=this,n.updateAncestorsSize()}prepend(...e){if(this.isText)throw new $(J.ErrRefused,"Text node cannot have children");this._children.unshift(...e);for(const n of e)n.parent=this}insertBefore(e,n){if(this.isText)throw new $(J.ErrRefused,"Text node cannot have children");const o=this._children.indexOf(n);if(o===-1)throw new $(J.ErrInvalidArgument,"child not found");this.insertAtInternal(e,o),e.updateAncestorsSize()}insertAfter(e,n){if(this.isText)throw new $(J.ErrRefused,"Text node cannot have children");const o=this._children.indexOf(n);if(o===-1)throw new $(J.ErrInvalidArgument,"child not found");this.insertAtInternal(e,o+1),e.updateAncestorsSize()}insertAt(e,n){if(this.isText)throw new $(J.ErrRefused,"Text node cannot have children");this.insertAtInternal(e,n),e.updateAncestorsSize()}removeChild(e){if(this.isText)throw new $(J.ErrRefused,"Text node cannot have children");const n=this._children.indexOf(e);if(n===-1)throw new $(J.ErrInvalidArgument,"child not found");this._children.splice(n,1),e.parent=void 0}splitElement(e,n){const o=this.cloneElement(n);this.parent.insertAfterInternal(o,this),o.updateAncestorsSize();const l=this.children.slice(0,e),d=this.children.slice(e);this._children=l,o._children=d,this.size=this._children.reduce((p,y)=>p+y.paddedSize,0),o.size=o._children.reduce((p,y)=>p+y.paddedSize,0);for(const p of o._children)p.parent=o;return o}insertAfterInternal(e,n){if(this.isText)throw new $(J.ErrRefused,"Text node cannot have children");const o=this._children.indexOf(n);if(o===-1)throw new $(J.ErrInvalidArgument,"child not found");this.insertAtInternal(e,o+1)}insertAtInternal(e,n){if(this.isText)throw new $(J.ErrRefused,"Text node cannot have children");this._children.splice(n,0,e),e.parent=this}findOffset(e){if(this.isText)throw new $(J.ErrRefused,"Text node cannot have children");if(e.isRemoved){const n=this._children.indexOf(e);return this.allChildren.splice(0,n).filter(l=>!l.isRemoved).length}return this.children.indexOf(e)}findBranchOffset(e){if(this.isText)throw new $(J.ErrRefused,"Text node cannot have children");let n=e;for(;n;){const o=this._children.indexOf(n);if(o!==-1)return o;n=n.parent}return-1}}function og(r,e){if(r===e)return!1;for(;e.parent;){if(e.parent===r)return!0;e=e.parent}return!1}var Zt=(r=>(r.Start="Start",r.End="End",r.Text="Text",r))(Zt||{});function Rd(r,e,n,o){if(e>n)throw new $(J.ErrInvalidArgument,`from is greater than to: ${e} > ${n}`);if(e>r.size)throw new $(J.ErrInvalidArgument,`from is out of range: ${e} > ${r.size}`);if(n>r.size)throw new $(J.ErrInvalidArgument,`to is out of range: ${n} > ${r.size}`);if(e===n)return;let l=0;for(const d of r.children){if(e-d.paddedSize<l&&l<n){const p=d.isText?e-l:e-l-1,y=d.isText?n-l:n-l-1,A=!d.isText&&p<0,I=!d.isText&&y>d.size;(d.isText||A)&&o([d,d.isText?"Text":"Start"],I),Rd(d,Math.max(0,p),Math.min(y,d.size),o),I&&o([d,"End"],I)}l+=d.paddedSize}}function Cd(r,e,n=0){for(const o of r.children)Cd(o,e,n+1);e(r,n)}function vc(r,e,n=0){for(const o of r._children)vc(o,e,n+1);e(r,n)}function bl(r,e,n=!0){if(e>r.size)throw new $(J.ErrInvalidArgument,`index is out of range: ${e} > ${r.size}`);if(r.isText)return{node:r,offset:e};let o=0,l=0;for(const d of r.children){if(n&&d.isText&&d.size>=e-l)return bl(d,e-l,n);if(e===l)return{node:r,offset:o};if(!n&&d.paddedSize===e-l)return{node:r,offset:o+1};if(d.paddedSize>e-l)return bl(d,e-l-1,n);l+=d.paddedSize,o+=1}return{node:r,offset:o}}function Id(r){return r.isText||r.children.length===0?r:Id(r.children[0])}function ag(r,e){if(r.size<e)throw new $(J.ErrInvalidArgument,"unacceptable path");for(let n=0;n<r.children.length;n++){const o=r.children[n];if(o.size<e)e-=o.size;else{r=o;break}}return{node:r,offset:e}}class cg{constructor(e){c(this,"root"),this.root=e}tokensBetween(e,n,o){Rd(this.root,e,n,o)}traverse(e){Cd(this.root,e,0)}traverseAll(e){vc(this.root,e,0)}findTreePos(e,n=!0){return bl(this.root,e,n)}treePosToPath(e){const n=[];let o=e.node;if(o.isText){const l=o.parent.findOffset(o);if(l===-1)throw new $(J.ErrInvalidArgument,"invalid treePos");const d=Fs(o.parent,l);n.push(d+e.offset),o=o.parent}else if(o.hasTextChild()){const l=Fs(o,e.offset);n.push(l)}else n.push(e.offset);for(;o.parent;){const l=o.parent.findOffset(o);if(l===-1)throw new $(J.ErrInvalidArgument,"invalid treePos");n.push(l),o=o.parent}return n.reverse()}pathToIndex(e){const n=this.pathToTreePos(e);return this.indexOf(n)}pathToTreePos(e){if(!e.length)throw new $(J.ErrInvalidArgument,"unacceptable path");let n=this.root;for(let o=0;o<e.length-1;o++){const l=e[o];if(n=n.children[l],!n)throw new $(J.ErrInvalidArgument,"unacceptable path")}if(n.hasTextChild())return ag(n,e[e.length-1]);if(n.children.length<e[e.length-1])throw new $(J.ErrInvalidArgument,"unacceptable path");return{node:n,offset:e[e.length-1]}}getRoot(){return this.root}get size(){return this.root.size}findPostorderRight(e){const{node:n,offset:o}=e;if(n.isText){if(n.size===o){const l=n.nextSibling;return l||n.parent}return n}return n.children.length===o?n:Id(n.children[o])}indexOf(e){let{node:n}=e;const{offset:o}=e;let l=0,d=1;if(n.isText){l+=o;const p=n.parent,y=p.findOffset(n);if(y===-1)throw new $(J.ErrInvalidArgument,"invalid pos");l+=Fs(p,y),n=n.parent}else l+=Fs(n,o);for(;n!=null&&n.parent;){const p=n.parent,y=p.findOffset(n);if(y===-1)throw new $(J.ErrInvalidArgument,"invalid pos");l+=Fs(p,y),d++,n=n.parent}return l+d-1}indexToPath(e){const n=this.findTreePos(e);return this.treePosToPath(n)}}const lg=(r,e)=>r===e?0:r<e?-1:1;class hg{constructor(e,n,o){c(this,"key"),c(this,"value"),c(this,"parent"),c(this,"left"),c(this,"right"),c(this,"isRed"),this.key=e,this.value=n,this.isRed=o}}class ug{constructor(e){c(this,"stack"),this.stack=[],this.traverseInorder(e)}traverseInorder(e){e&&(this.traverseInorder(e.left),this.stack.push({key:e.key,value:e.value}),this.traverseInorder(e.right))}}class Pd{constructor(e){c(this,"root"),c(this,"comparator"),c(this,"counter"),this.comparator=typeof e<"u"?e:lg,this.counter=0}put(e,n){return this.root=this.putInternal(e,n,this.root),this.root.isRed=!1,n}get(e){const n=this.getInternal(e,this.root);return n?n.value:void 0}remove(e){!this.isRed(this.root.left)&&!this.isRed(this.root.right)&&(this.root.isRed=!0),this.root=this.removeInternal(this.root,e),this.root&&(this.root.isRed=!1)}getIterator(){return new ug(this.root)}values(){const e=[];for(const n of this.getIterator().stack)e.push(n.value);return e}floorEntry(e){let n=this.root;for(;n;){const o=this.comparator(e,n.key);if(o>0)if(n.right)n.right.parent=n,n=n.right;else return n;else if(o<0)if(n.left)n.left.parent=n,n=n.left;else{let l=n.parent,d=n;for(;l&&d===l.left;)d=l,l=l.parent;return l}else return n}}lastEntry(){if(!this.root)return this.root;let e=this.root;for(;e.right;)e=e.right;return e}size(){return this.counter}isEmpty(){return this.counter===0}getInternal(e,n){for(;n;){const o=this.comparator(e,n.key);if(o===0)return n;o<0?n=n.left:o>0&&(n=n.right)}}putInternal(e,n,o){if(!o)return this.counter+=1,new hg(e,n,!0);const l=this.comparator(e,o.key);return l<0?o.left=this.putInternal(e,n,o.left):l>0?o.right=this.putInternal(e,n,o.right):o.value=n,this.isRed(o.right)&&!this.isRed(o.left)&&(o=this.rotateLeft(o)),this.isRed(o.left)&&this.isRed(o.left.left)&&(o=this.rotateRight(o)),this.isRed(o.left)&&this.isRed(o.right)&&this.flipColors(o),o}removeInternal(e,n){if(this.comparator(n,e.key)<0)!this.isRed(e.left)&&!this.isRed(e.left.left)&&(e=this.moveRedLeft(e)),e.left=this.removeInternal(e.left,n);else{if(this.isRed(e.left)&&(e=this.rotateRight(e)),this.comparator(n,e.key)===0&&!e.right){this.counter-=1;return}if(!this.isRed(e.right)&&!this.isRed(e.right.left)&&(e=this.moveRedRight(e)),this.comparator(n,e.key)===0){this.counter-=1;const o=this.min(e.right);e.value=o.value,e.key=o.key,e.right=this.removeMin(e.right)}else e.right=this.removeInternal(e.right,n)}return this.fixUp(e)}min(e){return e.left?this.min(e.left):e}removeMin(e){if(e.left)return!this.isRed(e.left)&&!this.isRed(e.left.left)&&(e=this.moveRedLeft(e)),e.left=this.removeMin(e.left),this.fixUp(e)}fixUp(e){return this.isRed(e.right)&&(e=this.rotateLeft(e)),this.isRed(e.left)&&this.isRed(e.left.left)&&(e=this.rotateRight(e)),this.isRed(e.left)&&this.isRed(e.right)&&this.flipColors(e),e}moveRedLeft(e){return this.flipColors(e),this.isRed(e.right.left)&&(e.right=this.rotateRight(e.right),e=this.rotateLeft(e),this.flipColors(e)),e}moveRedRight(e){return this.flipColors(e),this.isRed(e.left.left)&&(e=this.rotateRight(e),this.flipColors(e)),e}isRed(e){return e&&e.isRed}rotateLeft(e){const n=e.right;return e.right=n.left,n.left=e,n.isRed=n.left.isRed,n.left.isRed=!0,n}rotateRight(e){const n=e.left;return e.left=n.right,n.right=e,n.isRed=n.right.isRed,n.right.isRed=!0,n}flipColors(e){e.isRed=!e.isRed,e.left.isRed=!e.left.isRed,e.right.isRed=!e.right.isRed}}class $n{constructor(e,n){c(this,"parentID"),c(this,"leftSiblingID"),this.parentID=e,this.leftSiblingID=n}static of(e,n){return new $n(e,n)}static fromTreePos(e){const{offset:n}=e;let{node:o}=e,l;return o.isText?(o.parent.children[0]===o&&n===0?l=o.parent:l=o,o=o.parent):n===0?l=o:l=o.children[n-1],$n.of(o.id,hn.of(l.getCreatedAt(),l.getOffset()+n))}getParentID(){return this.parentID}static fromStruct(e){return $n.of(hn.of(bn.fromStruct(e.parentID.createdAt),e.parentID.offset),hn.of(bn.fromStruct(e.leftSiblingID.createdAt),e.leftSiblingID.offset))}toStruct(){return{parentID:{createdAt:this.getParentID().getCreatedAt().toStruct(),offset:this.getParentID().getOffset()},leftSiblingID:{createdAt:this.getLeftSiblingID().getCreatedAt().toStruct(),offset:this.getLeftSiblingID().getOffset()}}}toTreeNodePair(e){const n=this.getParentID(),o=this.getLeftSiblingID(),l=e.findFloorNode(n);let d=e.findFloorNode(o);if(!l||!d)throw new $(J.ErrRefused,`cannot find node of CRDTTreePos(${n.toTestString()}, ${o.toTestString()})`);return!o.equals(n)&&o.getOffset()>0&&o.getOffset()===d.id.getOffset()&&d.insPrevID&&(d=e.findFloorNode(d.insPrevID)),[l,d]}getLeftSiblingID(){return this.leftSiblingID}equals(e){return this.getParentID().getCreatedAt().equals(e.getParentID().getCreatedAt())&&this.getParentID().getOffset()===e.getParentID().getOffset()&&this.getLeftSiblingID().getCreatedAt().equals(e.getLeftSiblingID().getCreatedAt())&&this.getLeftSiblingID().getOffset()===e.getLeftSiblingID().getOffset()}}class hn{constructor(e,n){c(this,"createdAt"),c(this,"offset"),this.createdAt=e,this.offset=n}static of(e,n){return new hn(e,n)}static fromStruct(e){return hn.of(bn.fromStruct(e.createdAt),e.offset)}static createComparator(){return(e,n)=>{const o=e.getCreatedAt().compare(n.getCreatedAt());return o!==0?o:e.getOffset()>n.getOffset()?1:e.getOffset()<n.getOffset()?-1:0}}getCreatedAt(){return this.createdAt}equals(e){return this.createdAt.compare(e.createdAt)===0&&this.offset===e.offset}getOffset(){return this.offset}setOffset(e){this.offset=e}toStruct(){return{createdAt:this.createdAt.toStruct(),offset:this.offset}}toIDString(){return`${this.createdAt.toIDString()}:${this.offset}`}toTestString(){return`${this.createdAt.toTestString()}/${this.offset}`}}class Cn extends sg{constructor(e,n,o,l,d){super(n),c(this,"id"),c(this,"removedAt"),c(this,"attrs"),c(this,"insPrevID"),c(this,"insNextID"),c(this,"_value",""),this.id=e,this.removedAt=d,l&&(this.attrs=l),typeof o=="string"?this.value=o:Array.isArray(o)&&(this._children=o)}toIDString(){return this.id.toIDString()}getRemovedAt(){return this.removedAt}static create(e,n,o,l){return new Cn(e,n,o,l)}deepcopy(){var e;const n=new Cn(this.id,this.type);return n.removedAt=this.removedAt,n._value=this._value,n.size=this.size,n.attrs=(e=this.attrs)==null?void 0:e.deepcopy(),n._children=this._children.map(o=>{const l=o.deepcopy();return l.parent=n,l}),n.insPrevID=this.insPrevID,n.insNextID=this.insNextID,n}get value(){if(!this.isText)throw new $(J.ErrInvalidType,`cannot get value of element node: ${this.type}`);return this._value}set value(e){if(!this.isText)throw new $(J.ErrInvalidType,`cannot set value of element node: ${this.type}`);this._value=e,this.size=e.length}get isRemoved(){return!!this.removedAt}remove(e){const n=!this.removedAt;(!this.removedAt||this.removedAt.compare(e)>0)&&(this.removedAt=e),n&&this.updateAncestorsSize()}cloneText(e){return new Cn(hn.of(this.id.getCreatedAt(),e),this.type,void 0,void 0,this.removedAt)}cloneElement(e){return new Cn(hn.of(e(),0),this.type,void 0,void 0,this.removedAt)}split(e,n,o){const l=this.isText?this.splitText(n,this.id.getOffset()):this.splitElement(n,o);if(l){if(l.insPrevID=this.id,this.insNextID){const d=e.findFloorNode(this.insNextID);d.insPrevID=l.id,l.insNextID=this.insNextID}this.insNextID=l.id,e.registerNode(l)}return l}getCreatedAt(){return this.id.getCreatedAt()}getOffset(){return this.id.getOffset()}canDelete(e,n,o){return(n?!this.getCreatedAt().after(n):this.getCreatedAt().getLamport()<=o)&&(!this.removedAt||e.after(this.removedAt))}canStyle(e,n,o){return this.isText?!1:(n?!this.getCreatedAt().after(n):this.getCreatedAt().getLamport()<=o)&&(!this.removedAt||e.after(this.removedAt))}setAttrs(e,n){this.attrs||(this.attrs=new Ti);const o=[];for(const[l,d]of Object.entries(e))o.push(this.attrs.set(l,d,n));return o}purge(e){this.attrs&&this.attrs.purge(e)}getDataSize(){const e={data:0,meta:0};if(this.isText&&(e.data+=this.size*2),this.id&&(e.meta+=ki),this.removedAt&&(e.meta+=ki),this.attrs)for(const n of this.attrs){if(n.getRemovedAt())continue;const o=n.getDataSize();e.meta+=o.meta,e.data+=o.data}return e}getGCPairs(){const e=[];if(!this.attrs)return e;for(const n of this.attrs)n.getRemovedAt()&&e.push({parent:this,child:n});return e}}function Rl(r){var e;if(r.isText){const o=r;return{type:o.type,value:o.value}}const n={type:r.type,children:r.children.map(Rl)};return r.attrs&&(n.attributes=Si((e=r.attrs)==null?void 0:e.toObject())),n}function Cl(r){if(r.isText)return r.value;let e="";return r.attrs&&r.attrs.size()&&(e=" "+Array.from(r.attrs).filter(n=>!n.isRemoved()).sort((n,o)=>n.getKey().localeCompare(o.getKey())).map(n=>{const o=JSON.parse(n.getValue());return typeof o=="string"?`${n.getKey()}="${o}"`:`${n.getKey()}="${ci(n.getValue())}"`}).join(" ")),`<${r.type}${e}>${r.children.map(n=>Cl(n)).join("")}</${r.type}>`}function Dd(r){if(r.isText){const e=r;return{type:e.type,value:e.value,size:e.size,isRemoved:e.isRemoved}}return{type:r.type,children:r.children.map(Dd),size:r.size,isRemoved:r.isRemoved}}class kn extends Cs{constructor(e,n){super(n),c(this,"indexTree"),c(this,"nodeMapByID"),this.indexTree=new cg(e),this.nodeMapByID=new Pd(hn.createComparator()),this.indexTree.traverseAll(o=>{this.nodeMapByID.put(o.id,o)})}static create(e,n){return new kn(e,n)}findFloorNode(e){const n=this.nodeMapByID.floorEntry(e);if(!(!n||!n.key.getCreatedAt().equals(e.getCreatedAt())))return n.value}registerNode(e){this.nodeMapByID.put(e.id,e)}findNodesAndSplitText(e,n){const[o,l]=e.toTreeNodePair(this);let d=l;const p=o===d,y=d.parent&&!p?d.parent:o;if(d.isText&&d.split(this,e.getLeftSiblingID().getOffset()-d.id.getOffset()),n){const A=y.allChildren,I=p?0:A.indexOf(d)+1;for(let B=I;B<A.length;B++){const ie=A[B];if(!ie.id.getCreatedAt().after(n))break;d=ie}}return[y,d]}style(e,n,o,l,d){const[p,y]=this.findNodesAndSplitText(e[0],o),[A,I]=this.findNodesAndSplitText(e[1],o),B=[],ie=n?Si(n):{},de=new Map,ee=[];return this.traverseInPosRange(p,y,A,I,([_e])=>{const Be=_e.getCreatedAt().getActorID();let qe,tt=0n;if(d===void 0&&l===void 0?tt=Rs:d.size()>0?tt=d.get(Be)?d.get(Be):0n:qe=l.has(Be)?l.get(Be):qn,_e.canStyle(o,qe,tt)&&n){const xt=de.get(Be),Kt=_e.getCreatedAt();(!xt||Kt.after(xt))&&de.set(Be,Kt);const pt=_e.setAttrs(n,o),Pt=pt.reduce((Kn,[,ui])=>(ui&&(Kn[ui.getKey()]=ie[ui.getKey()]),Kn),{}),Dt=_e.parent,Gt=_e.prevSibling||_e.parent;Object.keys(Pt).length>0&&B.push({type:"style",from:this.toIndex(Dt,Gt),to:this.toIndex(_e,_e),fromPath:this.toPath(Dt,Gt),toPath:this.toPath(_e,_e),actor:o.getActorID(),value:Pt});for(const[Kn]of pt)Kn&&ee.push({parent:_e,child:Kn})}}),[de,ee,B]}removeStyle(e,n,o,l,d){const[p,y]=this.findNodesAndSplitText(e[0],o),[A,I]=this.findNodesAndSplitText(e[1],o),B=[],ie=new Map,de=[];return this.traverseInPosRange(p,y,A,I,([ee])=>{const _e=ee.getCreatedAt().getActorID();let Be,qe=0n;if(d===void 0&&l===void 0?qe=Rs:d.size()>0?qe=d.get(_e)?d.get(_e):0n:Be=l.has(_e)?l.get(_e):qn,ee.canStyle(o,Be,qe)&&n){const tt=ie.get(_e),xt=ee.getCreatedAt();(!tt||xt.after(tt))&&ie.set(_e,xt),ee.attrs||(ee.attrs=new Ti);for(const Pt of n){const Dt=ee.attrs.remove(Pt,o);for(const Gt of Dt)de.push({parent:ee,child:Gt})}const Kt=ee.parent,pt=ee.prevSibling||ee.parent;B.push({actor:o.getActorID(),type:"removeStyle",from:this.toIndex(Kt,pt),to:this.toIndex(ee,ee),fromPath:this.toPath(Kt,pt),toPath:this.toPath(ee,ee),value:n})}}),[ie,de,B]}edit(e,n,o,l,d,p,y){const[A,I]=this.findNodesAndSplitText(e[0],l),[B,ie]=this.findNodesAndSplitText(e[1],l),de=this.toIndex(A,I),ee=this.toPath(A,I),_e=[],Be=[],qe=[],tt=new Map;this.traverseInPosRange(A,I,B,ie,([pt,Pt],Dt)=>{if(Pt===Zt.Start&&!Dt)for(const gr of pt.children)qe.push(gr);const Gt=pt.getCreatedAt().getActorID();let Kn,ui=0n;if(y===void 0&&p===void 0?ui=Rs:y.size()>0?ui=y.get(Gt)?y.get(Gt):0n:Kn=p.has(Gt)?p.get(Gt):qn,pt.canDelete(l,Kn,ui)||_e.includes(pt.parent)){const gr=tt.get(Gt),Rc=pt.getCreatedAt();(!gr||Rc.after(gr))&&tt.set(Gt,Rc),(Pt===Zt.Text||Pt===Zt.Start)&&_e.push(pt),Be.push([pt,Pt])}});const xt=this.makeDeletionChanges(Be,l),Kt=[];for(const pt of _e)pt.remove(l),pt.isRemoved&&Kt.push({parent:this,child:pt});for(const pt of qe)pt.removedAt||A.append(pt);if(o>0){let pt=0,Pt=A,Dt=I;for(;pt<o;)Pt.split(this,Pt.findOffset(Dt)+1,d),Dt=Pt,Pt=Pt.parent,pt++;xt.push({type:"content",from:de,to:de,fromPath:ee,toPath:ee,actor:l.getActorID()})}if(n!=null&&n.length){const pt=[];let Pt=I;for(const Dt of n)Pt===A?A.insertAt(Dt,0):A.insertAfter(Dt,Pt),Pt=Dt,vc(Dt,Gt=>{A.isRemoved&&(Gt.remove(l),Kt.push({parent:this,child:Gt})),this.nodeMapByID.put(Gt.id,Gt)}),Dt.isRemoved||pt.push(Dt);if(pt.length){const Dt=pt.map(Gt=>Rl(Gt));xt.length&&xt[xt.length-1].from===de?xt[xt.length-1].value=Dt:xt.push({type:"content",from:de,to:de,fromPath:ee,toPath:ee,actor:l.getActorID(),value:Dt})}}return[xt,Kt,tt]}editT(e,n,o,l,d){const p=this.findPos(e[0]),y=this.findPos(e[1]);this.edit([p,y],n,o,l,d)}move(e,n,o){throw new $(J.ErrUnimplemented,`not implemented: ${e}, ${n}, ${o}`)}pathToTreePos(e){return this.indexTree.pathToTreePos(e)}purge(e){var n;(n=e.parent)==null||n.removeChild(e),this.nodeMapByID.remove(e.id);const o=e.insPrevID,l=e.insNextID;if(o){const d=this.findFloorNode(o);d.insNextID=l}if(l){const d=this.findFloorNode(l);d.insPrevID=o}e.insPrevID=void 0,e.insNextID=void 0}getGCPairs(){const e=[];return this.indexTree.traverse(n=>{n.getRemovedAt()&&e.push({parent:this,child:n});for(const o of n.getGCPairs())e.push(o)}),e}findPos(e,n=!0){const o=this.indexTree.findTreePos(e,n);return $n.fromTreePos(o)}pathToPosRange(e){const n=this.pathToIndex(e);return[this.findPos(n),this.findPos(n+1)]}pathToPos(e){const n=this.indexTree.pathToIndex(e);return this.findPos(n)}getRoot(){return this.indexTree.getRoot()}getSize(){return this.indexTree.size}getNodeSize(){return this.nodeMapByID.size()}getIndexTree(){return this.indexTree}toXML(){return Cl(this.indexTree.getRoot())}getDataSize(){const e={data:0,meta:0};return this.indexTree.traverse(n=>{if(n.getRemovedAt())return;const o=n.getDataSize();e.data+=o.data,e.meta+=o.meta}),{data:e.data,meta:e.meta+this.getMetaUsage()}}toJSON(){return JSON.stringify(this.getRootTreeNode())}toJSForTest(){return{createdAt:this.getCreatedAt().toTestString(),value:JSON.parse(this.toJSON()),type:"YORKIE_TREE"}}toJSInfoForTest(){const e=this.indexTree.getRoot(),n=(o,l=void 0,d=void 0,p=0)=>{var y,A,I,B;let ie,de,ee;const _e=o.isText?{node:o,offset:0}:l&&d?this.toTreePos(l,d):null;_e&&(ie=this.indexTree.indexOf(_e),de=this.indexTree.treePosToPath(_e),ee=$n.fromTreePos(_e).toStruct());const Be={type:o.type,parent:l==null?void 0:l.id.toTestString(),size:o.size,id:o.id.toTestString(),removedAt:(y=o.removedAt)==null?void 0:y.toTestString(),insPrev:(A=o.insPrevID)==null?void 0:A.toTestString(),insNext:(I=o.insNextID)==null?void 0:I.toTestString(),value:o.isText?o.value:void 0,isRemoved:o.isRemoved,children:[],depth:p,attributes:o.attrs?Si((B=o.attrs)==null?void 0:B.toObject()):void 0,index:ie,path:de,pos:ee};for(let qe=0;qe<o.allChildren.length;qe++){const tt=qe===0?o:o.allChildren[qe-1];Be.children.push(n(o.allChildren[qe],o,tt,p+1))}return Be};return n(e)}getRootTreeNode(){return Rl(this.indexTree.getRoot())}toTestTreeNode(){return Dd(this.indexTree.getRoot())}toSortedJSON(){return this.toJSON()}deepcopy(){const e=this.getRoot();return new kn(e.deepcopy(),this.getCreatedAt())}toPath(e,n){const o=this.toTreePos(e,n);return o?this.indexTree.treePosToPath(o):[]}toIndex(e,n){const o=this.toTreePos(e,n);return o?this.indexTree.indexOf(o):-1}indexToPath(e){return this.indexTree.indexToPath(e)}pathToIndex(e){return this.indexTree.pathToIndex(e)}indexRangeToPosRange(e){const n=this.findPos(e[0]);return e[0]===e[1]?[n,n]:[n,this.findPos(e[1])]}indexRangeToPosStructRange(e){const[n,o]=e,l=this.findPos(n);return n===o?[l.toStruct(),l.toStruct()]:[l.toStruct(),this.findPos(o).toStruct()]}posRangeToPathRange(e){const[n,o]=this.findNodesAndSplitText(e[0]),[l,d]=this.findNodesAndSplitText(e[1]);return[this.toPath(n,o),this.toPath(l,d)]}posRangeToIndexRange(e){const[n,o]=this.findNodesAndSplitText(e[0]),[l,d]=this.findNodesAndSplitText(e[1]);return[this.toIndex(n,o),this.toIndex(l,d)]}traverseInPosRange(e,n,o,l,d){const p=this.toIndex(e,n),y=this.toIndex(o,l);return this.indexTree.tokensBetween(p,y,d)}toTreePos(e,n){if(!e||!n)return;if(e.isRemoved){let l;for(;e.isRemoved;)l=e,e=l.parent;const d=e.findOffset(l);return{node:e,offset:d}}if(e===n)return{node:e,offset:0};let o=e.findOffset(n);if(!n.isRemoved){if(n.isText)return{node:n,offset:n.paddedSize};o++}return{node:e,offset:o}}makeDeletionChanges(e,n){const o=[],l=[];let d=null,p=null;for(let y=0;y<e.length;y++){const A=e[y],I=e[y+1];d||(d=A),p=A;const B=this.findRightToken(A);(!B||!I||B[0]!==I[0]||B[1]!==I[1])&&(l.push([d,p]),d=null,p=null)}for(const y of l){const[A,I]=y,[B,ie]=this.findLeftToken(A),[de,ee]=I,_e=ie===Zt.Start?B:B.parent,Be=ee===Zt.Start?de:de.parent,qe=this.toIndex(_e,B),tt=this.toIndex(Be,de);qe<tt&&(o.length>0&&qe===o[o.length-1].to?(o[o.length-1].to=tt,o[o.length-1].toPath=this.toPath(Be,de)):o.push({type:"content",from:qe,to:tt,fromPath:this.toPath(_e,B),toPath:this.toPath(Be,de),actor:n.getActorID()}))}return o.reverse()}findRightToken([e,n]){if(n===Zt.Start){const y=e.allChildren;return y.length>0?[y[0],y[0].isText?Zt.Text:Zt.Start]:[e,Zt.End]}const o=e.parent,l=o.allChildren,d=l.indexOf(e);if(o&&d===l.length-1)return[o,Zt.End];const p=l[d+1];return[p,p.isText?Zt.Text:Zt.Start]}findLeftToken([e,n]){if(n===Zt.End){const y=e.allChildren;if(y.length>0){const A=y[y.length-1];return[A,A.isText?Zt.Text:Zt.End]}return[e,Zt.Start]}const o=e.parent,l=o.allChildren,d=l.indexOf(e);if(o&&d===0)return[o,Zt.Start];const p=l[d-1];return[p,p.isText?Zt.Text:Zt.End]}}class Bs extends Jn{constructor(e,n,o,l,d,p,y){super(e,y),c(this,"fromPos"),c(this,"toPos"),c(this,"contents"),c(this,"splitLevel"),c(this,"maxCreatedAtMapByActor"),this.fromPos=n,this.toPos=o,this.contents=l,this.splitLevel=d,this.maxCreatedAtMapByActor=p}static create(e,n,o,l,d,p,y){return new Bs(e,n,o,l,d,p,y)}execute(e,n,o){var l;const d=e.findByCreatedAt(this.getParentCreatedAt());if(!d)throw new $(J.ErrInvalidArgument,`fail to find ${this.getParentCreatedAt()}`);if(!(d instanceof kn))throw new $(J.ErrInvalidArgument,"fail to execute, only Tree can execute edit");const p=this.getExecutedAt(),y=d,[A,I]=y.edit([this.fromPos,this.toPos],(l=this.contents)==null?void 0:l.map(B=>B.deepcopy()),this.splitLevel,p,(()=>{let B=p.getDelimiter();return this.contents!==void 0&&(B+=this.contents.length),()=>bn.of(p.getLamport(),++B,p.getActorID())})(),this.maxCreatedAtMapByActor,o);for(const B of I)e.registerGCPair(B);return{opInfos:A.map(({from:B,to:ie,value:de,splitLevel:ee,fromPath:_e,toPath:Be})=>({type:"tree-edit",path:e.createPath(this.getParentCreatedAt()),from:B,to:ie,value:de,splitLevel:ee,fromPath:_e,toPath:Be}))}}getEffectedCreatedAt(){return this.getParentCreatedAt()}toTestString(){const e=this.getParentCreatedAt().toTestString(),n=`${this.fromPos.getLeftSiblingID().getCreatedAt().toTestString()}/${this.fromPos.getLeftSiblingID().getOffset()}`,o=`${this.toPos.getLeftSiblingID().getCreatedAt().toTestString()}/${this.toPos.getLeftSiblingID().getOffset()}`,l=this.contents||[];return`${e}.EDIT(${n},${o},${l.map(d=>Cl(d)).join("")})`}getFromPos(){return this.fromPos}getToPos(){return this.toPos}getContents(){return this.contents}getSplitLevel(){return this.splitLevel}getMaxCreatedAtMapByActor(){return this.maxCreatedAtMapByActor}}class dr{constructor(e){c(this,"vector"),this.vector=e||new Map}set(e,n){this.vector.set(e,n)}unset(e){this.vector.delete(e)}get(e){return this.vector.get(e)}maxLamport(){let e=BigInt(0);for(const[,n]of this)n>e&&(e=n);return e}max(e){const n=new Map;for(const[o,l]of e){const d=this.vector.get(o),p=d&&d>l?d:l;n.set(o,p)}for(const[o,l]of this){const d=e.get(o),p=d&&d>l?d:l;n.set(o,p)}return new dr(n)}afterOrEqual(e){const n=this.vector.get(e.getActorID());return n===void 0?!1:n>=e.getLamport()}deepcopy(){const e=new Map;for(const[n,o]of this.vector)e.set(n,o);return new dr(e)}filter(e){const n=new Map;for(const[o]of e){const l=this.vector.get(o);l!==void 0&&n.set(o,l)}return new dr(n)}size(){return this.vector.size}*[Symbol.iterator](){for(const[e,n]of this.vector)yield[e,n]}}const dg=new dr(new Map);class Ei{constructor(e,n,o,l,d){c(this,"clientSeq"),c(this,"serverSeq"),c(this,"lamport"),c(this,"actor"),c(this,"versionVector"),this.clientSeq=e,this.serverSeq=d,this.lamport=n,this.versionVector=l,this.actor=o}static of(e,n,o,l,d){return new Ei(e,n,o,l,d)}next(){const e=this.versionVector.deepcopy();return e.set(this.actor,this.lamport+1n),new Ei(this.clientSeq+1,this.lamport+1n,this.actor,e)}syncClocks(e){const n=e.lamport>this.lamport?e.lamport+1n:this.lamport+1n;let o=e.versionVector;o.size()===0&&(o=o.deepcopy(),o.set(e.actor,e.lamport));const l=this.versionVector.max(o),d=new Ei(this.clientSeq,n,this.actor,l);return d.versionVector.set(this.actor,n),d}setClocks(e,n){const o=e>this.lamport?e+1n:this.lamport+1n;n.unset(pc);const l=this.versionVector.max(n);return l.set(this.actor,o),Ei.of(this.clientSeq,o,this.actor,l)}createTimeTicket(e){return bn.of(this.lamport,e,this.actor)}setActor(e){return new Ei(this.clientSeq,this.lamport,e,this.versionVector,this.serverSeq)}setVersionVector(e){return new Ei(this.clientSeq,this.lamport,this.actor,e,this.serverSeq)}getClientSeq(){return this.clientSeq}getServerSeq(){return this.serverSeq?this.serverSeq.toString():""}getLamport(){return this.lamport}getLamportAsString(){return this.lamport.toString()}getActorID(){return this.actor}getVersionVector(){return this.versionVector}toTestString(){return`${this.lamport.toString()}:${this.actor.slice(-2)}:${this.clientSeq}`}}const fg=new Ei(0,0n,pc,dg);class fr{constructor({id:e,operations:n,presenceChange:o,message:l}){c(this,"id"),c(this,"operations"),c(this,"presenceChange"),c(this,"message"),this.id=e,this.operations=n||[],this.presenceChange=o,this.message=l}static create({id:e,operations:n,presenceChange:o,message:l}){return new fr({id:e,operations:n,presenceChange:o,message:l})}getID(){return this.id}getMessage(){return this.message}hasOperations(){return this.operations.length>0}getOperations(){return this.operations}setActor(e){for(const n of this.operations)n.setActor(e);this.id=this.id.setActor(e)}hasPresenceChange(){return this.presenceChange!==void 0}getPresenceChange(){return this.presenceChange}execute(e,n,o){const l=[],d=[];for(const p of this.operations){const y=p.execute(e,o,this.id.getVersionVector());if(!y)continue;const{opInfos:A,reverseOp:I}=y;l.push(...A),I&&d.unshift(I)}return this.presenceChange&&(this.presenceChange.type===Bi.Put?n.set(this.id.getActorID(),Wn(this.presenceChange.presence)):n.delete(this.id.getActorID())),{opInfos:l,reverseOps:d}}toTestString(){return`${this.operations.map(e=>e.toTestString()).join(",")}`}toStruct(){return{changeID:$t.bytesToHex($t.toChangeID(this.getID()).toBinary()),message:this.getMessage(),operations:this.getOperations().map(e=>$t.bytesToHex($t.toOperation(e).toBinary())),presenceChange:this.getPresenceChange()}}static fromStruct(e){const{changeID:n,operations:o,presenceChange:l,message:d}=e;return fr.create({id:$t.bytesToChangeID($t.hexToBytes(n)),operations:o==null?void 0:o.map(p=>$t.bytesToOperation($t.hexToBytes(p))),presenceChange:l,message:d})}}class _c{constructor(e,n,o,l,d,p,y){c(this,"documentKey"),c(this,"checkpoint"),c(this,"isRemoved"),c(this,"changes"),c(this,"snapshot"),c(this,"minSyncedTicket"),c(this,"versionVector"),this.documentKey=e,this.checkpoint=n,this.isRemoved=o,this.changes=l,this.snapshot=p,this.minSyncedTicket=y,this.versionVector=d}static create(e,n,o,l,d,p,y){return new _c(e,n,o,l,d,p,y)}getDocumentKey(){return this.documentKey}getCheckpoint(){return this.checkpoint}getIsRemoved(){return this.isRemoved}getChanges(){return this.changes}hasChanges(){return this.changes.length>0}getChangeSize(){return this.changes.length}hasSnapshot(){return!!this.snapshot&&!!this.snapshot.length}getSnapshot(){return this.snapshot}getMinSyncedTicket(){return this.minSyncedTicket}getVersionVector(){return this.versionVector}}class Gr{constructor(e,n){c(this,"serverSeq"),c(this,"clientSeq"),this.serverSeq=e,this.clientSeq=n}static of(e,n){return new Gr(e,n)}increaseClientSeq(e){return e===0?this:new Gr(this.serverSeq,this.clientSeq+e)}forward(e){if(this.equals(e))return this;const n=this.serverSeq>e.serverSeq?this.serverSeq:e.serverSeq,o=Math.max(this.clientSeq,e.clientSeq);return Gr.of(n,o)}getServerSeqAsString(){return this.serverSeq.toString()}getClientSeq(){return this.clientSeq}getServerSeq(){return this.serverSeq}equals(e){return this.clientSeq===e.clientSeq&&this.serverSeq==e.serverSeq}toTestString(){return`serverSeq=${this.serverSeq}, clientSeq=${this.clientSeq}`}}const pg=new Gr(0n,0);class hi{constructor(e,n){c(this,"createdAt"),c(this,"offset"),this.createdAt=e,this.offset=n}static of(e,n){return new hi(e,n)}static fromStruct(e){return hi.of(bn.fromStruct(e.createdAt),e.offset)}getCreatedAt(){return this.createdAt}getOffset(){return this.offset}equals(e){return this.createdAt.compare(e.createdAt)===0&&this.offset===e.offset}hasSameCreatedAt(e){return this.createdAt.compare(e.createdAt)===0}split(e){return new hi(this.createdAt,this.offset+e)}toStruct(){return{createdAt:this.createdAt.toStruct(),offset:this.offset}}toTestString(){return`${this.createdAt.toTestString()}:${this.offset}`}toIDString(){return`${this.createdAt.toIDString()}:${this.offset}`}}const mg=hi.of(qn,0);class Yn{constructor(e,n){c(this,"id"),c(this,"relativeOffset"),this.id=e,this.relativeOffset=n}static of(e,n){return new Yn(e,n)}static fromStruct(e){const n=hi.fromStruct(e.id);return Yn.of(n,e.relativeOffset)}getID(){return this.id}getRelativeOffset(){return this.relativeOffset}getAbsoluteID(){return hi.of(this.id.getCreatedAt(),this.id.getOffset()+this.relativeOffset)}toTestString(){return`${this.id.toTestString()}:${this.relativeOffset}`}toStruct(){return{id:this.id.toStruct(),relativeOffset:this.relativeOffset}}equals(e){return this.id.equals(e.id)?this.relativeOffset===e.relativeOffset:!1}}class Gi extends _d{constructor(e,n,o){super(n),c(this,"id"),c(this,"removedAt"),c(this,"prev"),c(this,"next"),c(this,"insPrev"),c(this,"insNext"),this.id=e,this.removedAt=o}static create(e,n){return new Gi(e,n)}static createComparator(){return(e,n)=>{const o=e.getCreatedAt().compare(n.getCreatedAt());return o!==0?o:e.getOffset()>n.getOffset()?1:e.getOffset()<n.getOffset()?-1:0}}getID(){return this.id}getCreatedAt(){return this.id.getCreatedAt()}getLength(){return this.removedAt?0:this.getContentLength()}getContentLength(){return this.value&&this.value.length||0}getPrev(){return this.prev}getNext(){return this.next}getInsPrev(){return this.insPrev}getInsNext(){return this.insNext}getInsPrevID(){return this.insPrev.getID()}setPrev(e){this.prev=e,e&&(e.next=this)}setNext(e){this.next=e,e&&(e.prev=this)}setInsPrev(e){this.insPrev=e,e&&(e.insNext=this)}setInsNext(e){this.insNext=e,e&&(e.insPrev=this)}hasNext(){return!!this.next}hasInsPrev(){return!!this.insPrev}isRemoved(){return!!this.removedAt}getRemovedAt(){return this.removedAt}split(e){return new Gi(this.id.split(e),this.splitValue(e),this.removedAt)}canDelete(e,n,o){const l=!this.removedAt;return(n?!this.getCreatedAt().after(n):this.getCreatedAt().getLamport()<=o)&&(!this.removedAt||e.after(this.removedAt))?l:!1}canStyle(e,n,o){return(n?!this.getCreatedAt().after(n):this.getCreatedAt().getLamport()<=o)&&(!this.removedAt||e.after(this.removedAt))}remove(e){this.removedAt=e}createPosRange(){return[Yn.of(this.id,0),Yn.of(this.id,this.getLength())]}getDataSize(){const e=this.value.getDataSize();return this.id&&(e.meta+=ki),this.removedAt&&(e.meta+=ki),e}deepcopy(){return new Gi(this.id,this.value,this.removedAt)}toTestString(){return`${this.id.toTestString()} ${this.value?this.value:""}`}splitValue(e){const n=this.value;return this.value=n.substring(0,e),n.substring(e,n.length)}toIDString(){return this.id.toIDString()}}class Wr{constructor(){c(this,"head"),c(this,"treeByIndex"),c(this,"treeByID"),this.head=Gi.create(mg),this.treeByIndex=new Ps,this.treeByID=new Pd(Gi.createComparator()),this.treeByIndex.insert(this.head),this.treeByID.put(this.head.getID(),this.head)}static create(){return new Wr}edit(e,n,o,l,d){const[p,y]=this.findNodeWithSplit(e[1],n),[A,I]=this.findNodeWithSplit(e[0],n),B=this.findBetween(I,y),[ie,de,ee]=this.deleteNodes(B,n,l,d),_e=y?y.getID():p.getID();let Be=Yn.of(_e,0);if(o){const tt=this.posToIndex(A.createPosRange()[1],!0),xt=this.insertAfter(A,Gi.create(hi.of(n,0),o));ie.length&&ie[ie.length-1].from===tt?ie[ie.length-1].value=o:ie.push({actor:n.getActorID(),from:tt,to:tt,value:o}),Be=Yn.of(xt.getID(),xt.getContentLength())}const qe=[];for(const[,tt]of ee)qe.push({parent:this,child:tt});return[Be,de,qe,ie]}indexToPos(e){const[n,o]=this.treeByIndex.find(e),l=n;return Yn.of(l.getID(),o)}findIndexesFromRange(e){const[n,o]=e;return[this.posToIndex(n,!1),this.posToIndex(o,!0)]}posToIndex(e,n){const o=e.getAbsoluteID(),l=n?this.findFloorNodePreferToLeft(o):this.findFloorNode(o);if(!l)throw new $(J.ErrInvalidArgument,`the node of the given id should be found: ${o.toTestString()}`);const d=this.treeByIndex.indexOf(l),p=l.isRemoved()?0:o.getOffset()-l.getID().getOffset();return d+p}findNode(e){return this.findFloorNode(e)}get length(){return this.treeByIndex.length}getTreeByIndex(){return this.treeByIndex}getTreeByID(){return this.treeByID}toString(){const e=[];for(const n of this)n.isRemoved()||e.push(n.getValue());return e.join("")}*[Symbol.iterator](){let e=this.head.getNext();for(;e;)yield e,e=e.getNext()}getHead(){return this.head}deepcopy(){const e=new Wr;let n=this.head.getNext(),o=e.head,l;for(;n;){if(l=e.insertAfter(o,n.deepcopy()),n.hasInsPrev()){const d=e.findNode(n.getInsPrevID());l.setInsPrev(d)}o=l,n=n.getNext()}return e}toTestString(){const e=[];let n=this.head;for(;n;)n.isRemoved()?e.push(`{${n.toTestString()}}`):e.push(`[${n.toTestString()}]`),n=n.getNext();return e.join("")}insertAfter(e,n){const o=e.getNext();return n.setPrev(e),o&&o.setPrev(n),this.treeByID.put(n.getID(),n),this.treeByIndex.insertAfter(e,n),n}findNodeWithSplit(e,n){const o=e.getAbsoluteID();let l=this.findFloorNodePreferToLeft(o);const d=o.getOffset()-l.getID().getOffset();for(this.splitNode(l,d);l.hasNext()&&l.getNext().getCreatedAt().after(n);)l=l.getNext();return[l,l.getNext()]}findFloorNodePreferToLeft(e){let n=this.findFloorNode(e);if(!n)throw new $(J.ErrInvalidArgument,`the node of the given id should be found: ${e.toTestString()}`);if(e.getOffset()>0&&n.getID().getOffset()==e.getOffset()){if(!n.hasInsPrev())return n;n=n.getInsPrev()}return n}findFloorNode(e){const n=this.treeByID.floorEntry(e);if(n&&!(!n.key.equals(e)&&!n.key.hasSameCreatedAt(e)))return n.value}findBetween(e,n){const o=[];let l=e;for(;l&&l!==n;)o.push(l),l=l.getNext();return o}splitNode(e,n){if(n>e.getContentLength())throw new $(J.ErrInvalidArgument,"offset should be less than or equal to length");if(n===0)return e;if(n===e.getContentLength())return e.getNext();const o=e.split(n);this.treeByIndex.updateWeight(o),this.insertAfter(e,o);const l=e.getInsNext();return l&&l.setInsPrev(o),o.setInsPrev(e),o}deleteNodes(e,n,o,l){if(!e.length)return[[],new Map,new Map];const[d,p]=this.filterNodes(e,n,o,l),y=new Map,A=new Map,I=this.makeChanges(p,n);for(const B of d){const ie=B.getCreatedAt().getActorID();(!y.has(ie)||B.getID().getCreatedAt().after(y.get(ie)))&&y.set(ie,B.getID().getCreatedAt()),A.set(B.getID().toIDString(),B),B.remove(n)}return this.deleteIndexNodes(p),[I,y,A]}filterNodes(e,n,o,l){const d=[],p=[],[y,A]=this.findEdgesOfCandidates(e);p.push(y);for(const I of e){const B=I.getCreatedAt().getActorID();let ie,de=0n;l===void 0&&o===void 0?de=Rs:l.size()>0?de=l.get(B)?l.get(B):0n:ie=o.has(B)?o.get(B):qn,I.canDelete(n,ie,de)?d.push(I):p.push(I)}return p.push(A),[d,p]}findEdgesOfCandidates(e){return[e[0].getPrev(),e[e.length-1].getNext()]}makeChanges(e,n){const o=[];let l,d;for(let p=0;p<e.length-1;p++){const y=e[p],A=e[p+1];y.getNext()!=A&&([l]=this.findIndexesFromRange(y.getNext().createPosRange()),A?[,d]=this.findIndexesFromRange(A.getPrev().createPosRange()):d=this.treeByIndex.length,l<d&&o.push({actor:n.getActorID(),from:l,to:d}))}return o.reverse()}deleteIndexNodes(e){for(let n=0;n<e.length-1;n++){const o=e[n],l=e[n+1];o.getNext()!=l&&this.treeByIndex.deleteRange(o,l)}}purge(e){this.treeByIndex.delete(e),this.treeByID.remove(e.getID());const n=e.getPrev(),o=e.getNext(),l=e.getInsPrev(),d=e.getInsNext();n&&n.setNext(o),o&&o.setPrev(n),e.setPrev(void 0),e.setNext(void 0),l&&l.setInsNext(d),d&&d.setInsPrev(l),e.setInsPrev(void 0),e.setInsNext(void 0)}}const Nd=r=>r<0?Math.ceil(r):Math.floor(r);var jn=(r=>(r[r.Int=0]="Int",r[r.Long=1]="Long",r))(jn||{});class In extends Cs{constructor(e,n,o){switch(super(o),c(this,"valueType"),c(this,"value"),this.valueType=e,e){case 0:typeof n=="number"?n>Math.pow(2,31)-1||n<-Math.pow(2,31)?this.value=ft.fromNumber(n).toInt():this.value=Nd(n):this.value=n.toInt();break;case 1:typeof n=="number"?this.value=ft.fromNumber(n):this.value=n;break;default:throw new $(J.ErrUnimplemented,`unimplemented type: ${e}`)}}static create(e,n,o){return new In(e,n,o)}static valueFromBytes(e,n){switch(e){case 0:return n[0]|n[1]<<8|n[2]<<16|n[3]<<24;case 1:return ft.fromBytesLE(Array.from(n));default:throw new $(J.ErrUnimplemented,`unimplemented type: ${e}`)}}getDataSize(){return{data:this.valueType===0?4:8,meta:this.getMetaUsage()}}toJSON(){return`${this.value}`}toSortedJSON(){return this.toJSON()}toJSForTest(){return{createdAt:this.getCreatedAt().toTestString(),value:this.value,type:"YORKIE_COUNTER"}}deepcopy(){const e=In.create(this.valueType,this.value,this.getCreatedAt());return e.setMovedAt(this.getMovedAt()),e}getType(){return this.valueType}static getCounterType(e){switch(typeof e){case"object":return e instanceof ft?1:void 0;case"number":return e>Math.pow(2,31)-1||e<-Math.pow(2,31)?1:0;default:return}}static isSupport(e){return!!In.getCounterType(e)}static isInteger(e){return e%1===0}isNumericType(){const e=this.valueType;return e===0||e===1}getValueType(){return this.valueType}getValue(){return this.value}toBytes(){switch(this.valueType){case 0:{const e=this.value;return new Uint8Array([e&255,e>>8&255,e>>16&255,e>>24&255])}case 1:{const n=this.value.toBytesLE();return Uint8Array.from(n)}default:throw new $(J.ErrUnimplemented,`unimplemented type: ${this.valueType}`)}}increase(e){function n(o){if(!o.isNumericType())throw new TypeError(`Unsupported type of value: ${typeof o.getValue()}`)}return n(this),n(e),this.valueType===1?this.value=this.value.add(e.getValue()):e.getType()===tn.Long?this.value=this.value+e.getValue().toInt():this.value=ft.fromNumber(this.value+Nd(e.getValue())).toInt(),this}}class qr extends Jn{constructor(e,n,o){super(e,o),c(this,"value"),this.value=n}static create(e,n,o){return new qr(e,n,o)}execute(e){const n=e.findByCreatedAt(this.getParentCreatedAt());if(!n)throw new $(J.ErrInvalidArgument,`fail to find ${this.getParentCreatedAt()}`);if(!(n instanceof In))throw new $(J.ErrInvalidArgument,"fail to execute, only Counter can execute increase");const o=n,l=this.value.deepcopy();return o.increase(l),{opInfos:[{type:"increase",path:e.createPath(this.getParentCreatedAt()),value:l.getValue()}],reverseOp:this.toReverseOperation()}}toReverseOperation(){const e=this.value.deepcopy(),o=e.getType()===tn.Long?e.getValue().multiply(-1):e.getValue()*-1;return qr.create(this.getParentCreatedAt(),Ht.of(o,e.getCreatedAt()))}getEffectedCreatedAt(){return this.getParentCreatedAt()}toTestString(){return`${this.getParentCreatedAt().toTestString()}.INCREASE.${this.value.toJSON()}`}getValue(){return this.value}}class Mi extends Jn{constructor(e,n,o,l,d,p,y){super(e,y),c(this,"fromPos"),c(this,"toPos"),c(this,"maxCreatedAtMapByActor"),c(this,"attributes"),c(this,"attributesToRemove"),this.fromPos=n,this.toPos=o,this.maxCreatedAtMapByActor=l,this.attributes=d,this.attributesToRemove=p}static create(e,n,o,l,d,p){return new Mi(e,n,o,l,d,[],p)}static createTreeRemoveStyleOperation(e,n,o,l,d,p){return new Mi(e,n,o,l,new Map,d,p)}execute(e,n,o){const l=e.findByCreatedAt(this.getParentCreatedAt());if(!l)throw new $(J.ErrInvalidArgument,`fail to find ${this.getParentCreatedAt()}`);if(!(l instanceof kn))throw new $(J.ErrInvalidArgument,"fail to execute, only Tree can execute edit");const d=l;let p,y;if(this.attributes.size){const A={};[...this.attributes].forEach(([I,B])=>A[I]=B),[,y,p]=d.style([this.fromPos,this.toPos],A,this.getExecutedAt(),this.maxCreatedAtMapByActor,o)}else{const A=this.attributesToRemove;[,y,p]=d.removeStyle([this.fromPos,this.toPos],A,this.getExecutedAt(),this.maxCreatedAtMapByActor,o)}for(const A of y)e.registerGCPair(A);return{opInfos:p.map(({from:A,to:I,value:B,fromPath:ie,toPath:de})=>({type:"tree-style",from:A,to:I,value:this.attributes.size?{attributes:B}:{attributesToRemove:B},fromPath:ie,toPath:de,path:e.createPath(this.getParentCreatedAt())}))}}getEffectedCreatedAt(){return this.getParentCreatedAt()}toTestString(){const e=this.getParentCreatedAt().toTestString(),n=`${this.fromPos.getLeftSiblingID().getCreatedAt().toTestString()}:${this.fromPos.getLeftSiblingID().getOffset()}`,o=`${this.toPos.getLeftSiblingID().getCreatedAt().toTestString()}:${this.toPos.getLeftSiblingID().getOffset()}`;return`${e}.STYLE(${n},${o},${Object.entries(this.attributes||{}).map(([l,d])=>`${l}:"${d}"`).join(" ")})`}getFromPos(){return this.fromPos}getToPos(){return this.toPos}getAttributes(){return this.attributes}getAttributesToRemove(){return this.attributesToRemove}getMaxCreatedAtMapByActor(){return this.maxCreatedAtMapByActor}}function gg(r){const e=new El,n=e.data;for(const[o,l]of Object.entries(r))n[o]=JSON.stringify(l);return e}function vg(r){if(r.type===Bi.Put)return new Tl({type:ar.PUT,presence:gg(r.presence)});if(r.type===Bi.Clear)return new Tl({type:ar.CLEAR});throw new $(J.ErrUnimplemented,"unimplemented type")}function _g(r){return new md({serverSeq:r.getServerSeq(),clientSeq:r.getClientSeq()})}function Ld(r){return new ga({clientSeq:r.getClientSeq(),lamport:r.getLamport(),actorId:Hl(r.getActorID()),versionVector:Il(r.getVersionVector())})}function Ve(r){if(r)return new ze({lamport:r.getLamport(),delimiter:r.getDelimiter(),actorId:Hl(r.getActorID())})}function Il(r){if(!r)return;const e=new va;for(const[n,o]of r)e.vector[n]=BigInt(o.toString());return e}function Od(r){switch(r){case tn.Null:return rt.NULL;case tn.Boolean:return rt.BOOLEAN;case tn.Integer:return rt.INTEGER;case tn.Long:return rt.LONG;case tn.Double:return rt.DOUBLE;case tn.String:return rt.STRING;case tn.Bytes:return rt.BYTES;case tn.Date:return rt.DATE;default:throw new $(J.ErrInvalidType,`unsupported type: ${r}`)}}function Ud(r){switch(r){case jn.Int:return rt.INTEGER_CNT;case jn.Long:return rt.LONG_CNT;default:throw new $(J.ErrInvalidType,`unsupported type: ${r}`)}}function Pl(r){if(r instanceof Sn)return new ai({type:rt.JSON_OBJECT,createdAt:Ve(r.getCreatedAt()),value:Yd(r)});if(r instanceof Rn)return new ai({type:rt.JSON_ARRAY,createdAt:Ve(r.getCreatedAt()),value:Yg(r)});if(r instanceof Bn)return new ai({type:rt.TEXT,createdAt:Ve(r.getCreatedAt())});if(r instanceof Ht)return new ai({type:Od(r.getType()),createdAt:Ve(r.getCreatedAt()),value:r.toBytes()});if(r instanceof In)return new ai({type:Ud(r.getType()),createdAt:Ve(r.getCreatedAt()),value:r.toBytes()});if(r instanceof kn)return new ai({type:rt.TREE,createdAt:Ve(r.getCreatedAt()),value:Kg(r)});throw new $(J.ErrUnimplemented,"unimplemented element")}function yg(r){return new gl({createdAt:Ve(r.getCreatedAt()),offset:r.getOffset()})}function yc(r){return new cr({createdAt:Ve(r.getID().getCreatedAt()),offset:r.getID().getOffset(),relativeOffset:r.getRelativeOffset()})}function Sc(r){return new bs({parentId:ks(r.getParentID()),leftSiblingId:ks(r.getLeftSiblingID())})}function ks(r){return new kr({createdAt:Ve(r.getCreatedAt()),offset:r.getOffset()})}function Fd(r){const e=new ml;if(r instanceof hr){const n=r,o=new ju;o.parentCreatedAt=Ve(n.getParentCreatedAt()),o.key=n.getKey(),o.value=Pl(n.getValue()),o.executedAt=Ve(n.getExecutedAt()),e.body.case="set",e.body.value=o}else if(r instanceof Ns){const n=r,o=new Ku;o.parentCreatedAt=Ve(n.getParentCreatedAt()),o.prevCreatedAt=Ve(n.getPrevCreatedAt()),o.value=Pl(n.getValue()),o.executedAt=Ve(n.getExecutedAt()),e.body.case="add",e.body.value=o}else if(r instanceof Hi){const n=r,o=new Zu;o.parentCreatedAt=Ve(n.getParentCreatedAt()),o.prevCreatedAt=Ve(n.getPrevCreatedAt()),o.createdAt=Ve(n.getCreatedAt()),o.executedAt=Ve(n.getExecutedAt()),e.body.case="move",e.body.value=o}else if(r instanceof Vi){const n=r,o=new Qu;o.parentCreatedAt=Ve(n.getParentCreatedAt()),o.createdAt=Ve(n.getCreatedAt()),o.executedAt=Ve(n.getExecutedAt()),e.body.case="remove",e.body.value=o}else if(r instanceof Os){const n=r,o=new ed;o.parentCreatedAt=Ve(n.getParentCreatedAt()),o.from=yc(n.getFromPos()),o.to=yc(n.getToPos());const l=o.createdAtMapByActor;for(const[p,y]of n.getMaxCreatedAtMapByActor())l[p]=Ve(y);o.content=n.getContent();const d=o.attributes;for(const[p,y]of n.getAttributes())d[p]=y;o.executedAt=Ve(n.getExecutedAt()),e.body.case="edit",e.body.value=o}else if(r instanceof Us){const n=r,o=new td;o.parentCreatedAt=Ve(n.getParentCreatedAt()),o.from=yc(n.getFromPos()),o.to=yc(n.getToPos());const l=o.createdAtMapByActor;for(const[p,y]of n.getMaxCreatedAtMapByActor())l[p]=Ve(y);const d=o.attributes;for(const[p,y]of n.getAttributes())d[p]=y;o.executedAt=Ve(n.getExecutedAt()),e.body.case="style",e.body.value=o}else if(r instanceof qr){const n=r,o=new nd;o.parentCreatedAt=Ve(n.getParentCreatedAt()),o.value=Pl(n.getValue()),o.executedAt=Ve(n.getExecutedAt()),e.body.case="increase",e.body.value=o}else if(r instanceof Bs){const n=r,o=new id,l=o.createdAtMapByActor;for(const[d,p]of n.getMaxCreatedAtMapByActor())l[d]=Ve(p);o.parentCreatedAt=Ve(n.getParentCreatedAt()),o.from=Sc(n.getFromPos()),o.to=Sc(n.getToPos()),o.contents=Ag(n.getContents()),o.splitLevel=n.getSplitLevel(),o.executedAt=Ve(n.getExecutedAt()),e.body.case="treeEdit",e.body.value=o}else if(r instanceof Mi){const n=r,o=new rd;o.parentCreatedAt=Ve(n.getParentCreatedAt()),o.from=Sc(n.getFromPos()),o.to=Sc(n.getToPos());const l=o.createdAtMapByActor;for(const[p,y]of n.getMaxCreatedAtMapByActor())l[p]=Ve(y);const d=n.getAttributesToRemove();if(d.length>0)o.attributesToRemove=d;else{const p=o.attributes;for(const[y,A]of n.getAttributes())p[y]=A}o.executedAt=Ve(n.getExecutedAt()),e.body.case="treeStyle",e.body.value=o}else throw new $(J.ErrUnimplemented,"unimplemented operation");return e}function Sg(r){const e=[];for(const n of r)e.push(Fd(n));return e}function xg(r){const e=new Yu({id:Ld(r.getID()),message:r.getMessage()});return r.hasOperations()&&(e.operations=Sg(r.getOperations())),r.hasPresenceChange()&&(e.presenceChange=vg(r.getPresenceChange())),e}function Tg(r){const e=[];for(const n of r)e.push(xg(n));return e}function Eg(r){const e=[];for(const n of r)e.push(new ud({key:n.getStrKey(),element:Nl(n.getValue())}));return e}function Mg(r){const e=[];for(const n of r)e.push(new dd({element:Nl(n.getValue())}));return e}function wg(r){const e=[];for(const n of r){const o=new fd;o.id=yg(n.getID()),o.value=n.getValue().getContent(),o.removedAt=Ve(n.getRemovedAt());const l=o.attributes,d=n.getValue().getAttrs();for(const p of d){const y=new Ba;y.value=p.getValue(),y.updatedAt=Ve(p.getUpdatedAt()),l[p.getKey()]=y}e.push(o)}return e}function Ag(r){const e=[];if(!r||!r.length)return e;for(const n of r)e.push(new pd({content:Dl(n)}));return e}function bg(r){const e={};for(const n of r)e[n.getKey()]=new Ba({value:n.getValue(),updatedAt:Ve(n.getUpdatedAt()),isRemoved:n.isRemoved()});return e}function Dl(r){if(!r)return[];const e=[];return vc(r,(n,o)=>{const l=new vl({id:ks(n.id),type:n.type,removedAt:Ve(n.removedAt),depth:o});n.isText&&(l.value=n.value),n.insPrevID&&(l.insPrevId=ks(n.insPrevID)),n.insNextID&&(l.insNextId=ks(n.insNextID)),n.attrs&&(l.attributes=bg(n.attrs)),e.push(l)}),e}function Rg(r){const e=new Ln;return e.body.case="jsonObject",e.body.value=new sd({nodes:Eg(r.getRHT()),createdAt:Ve(r.getCreatedAt()),movedAt:Ve(r.getMovedAt()),removedAt:Ve(r.getRemovedAt())}),e}function Bd(r){const e=new Ln;return e.body.case="jsonArray",e.body.value=new od({nodes:Mg(r.getElements()),createdAt:Ve(r.getCreatedAt()),movedAt:Ve(r.getMovedAt()),removedAt:Ve(r.getRemovedAt())}),e}function Cg(r){const e=new Ln;return e.body.case="primitive",e.body.value=new ad({type:Od(r.getType()),value:r.toBytes(),createdAt:Ve(r.getCreatedAt()),movedAt:Ve(r.getMovedAt()),removedAt:Ve(r.getRemovedAt())}),e}function Ig(r){const e=new Ln;return e.body.case="text",e.body.value=new cd({nodes:wg(r.getRGATreeSplit()),createdAt:Ve(r.getCreatedAt()),movedAt:Ve(r.getMovedAt()),removedAt:Ve(r.getRemovedAt())}),e}function Pg(r){const e=new Ln;return e.body.case="counter",e.body.value=new ld({type:Ud(r.getType()),value:r.toBytes(),createdAt:Ve(r.getCreatedAt()),movedAt:Ve(r.getMovedAt()),removedAt:Ve(r.getRemovedAt())}),e}function kd(r){const e=new Ln;return e.body.case="tree",e.body.value=new hd({nodes:Dl(r.getRoot()),createdAt:Ve(r.getCreatedAt()),movedAt:Ve(r.getMovedAt()),removedAt:Ve(r.getRemovedAt())}),e}function Nl(r){if(r instanceof Sn)return Rg(r);if(r instanceof Rn)return Bd(r);if(r instanceof Ht)return Cg(r);if(r instanceof Bn)return Ig(r);if(r instanceof In)return Pg(r);if(r instanceof kn)return kd(r);throw new $(J.ErrUnimplemented,"unimplemented element")}function Dg(r){return new yi({documentKey:r.getDocumentKey(),checkpoint:_g(r.getCheckpoint()),isRemoved:r.getIsRemoved(),changes:Tg(r.getChanges()),snapshot:r.getSnapshot(),versionVector:Il(r.getVersionVector()),minSyncedTicket:Ve(r.getMinSyncedTicket())})}function zs(r){if(!(r instanceof O))return{};const e=r.findDetails(Ym);for(const n of e)return n.metadata;return{}}function Wi(r){return zs(r).code??""}function zd(r){return Ei.of(r.clientSeq,BigInt(r.lamport),zl(r.actorId),Ll(r.versionVector),BigInt(r.serverSeq))}function Ll(r){if(!r)return;const e=new dr;return Object.entries(r.vector).forEach(([n,o])=>{e.set(n,BigInt(o.toString()))}),e}function He(r){if(r)return bn.of(BigInt(r.lamport),r.delimiter,zl(r.actorId))}function Ol(r){const e={};return Object.entries(r.data).forEach(([n,o])=>{e[n]=JSON.parse(o)}),e}function Ng(r){const e=r.type;if(e===ar.PUT){const n=Ol(r.presence);return{type:Bi.Put,presence:n}}if(e===ar.CLEAR)return{type:Bi.Clear};throw new $(J.ErrInvalidType,`unsupported type: ${e}`)}function Lg(r){const e=new Map;return Object.entries(r).forEach(([n,o])=>{e.set(n,Ol(o))}),e}function Vd(r){switch(r){case rt.NULL:return tn.Null;case rt.BOOLEAN:return tn.Boolean;case rt.INTEGER:return tn.Integer;case rt.LONG:return tn.Long;case rt.DOUBLE:return tn.Double;case rt.STRING:return tn.String;case rt.BYTES:return tn.Bytes;case rt.DATE:return tn.Date}throw new $(J.ErrUnimplemented,`unimplemented value type: ${r}`)}function xc(r){switch(r){case rt.INTEGER_CNT:return jn.Int;case rt.LONG_CNT:return jn.Long}throw new $(J.ErrUnimplemented,`unimplemented value type: ${r}`)}function Ul(r){switch(r.type){case rt.JSON_OBJECT:return r.value?$d(r.value):Sn.create(He(r.createdAt));case rt.JSON_ARRAY:return r.value?$g(r.value):Rn.create(He(r.createdAt));case rt.TEXT:return Bn.create(Wr.create(),He(r.createdAt));case rt.TREE:return jg(r.value);case rt.NULL:case rt.BOOLEAN:case rt.INTEGER:case rt.LONG:case rt.DOUBLE:case rt.STRING:case rt.BYTES:case rt.DATE:return Ht.of(Ht.valueFromBytes(Vd(r.type),r.value),He(r.createdAt));case rt.INTEGER_CNT:case rt.LONG_CNT:return In.create(xc(r.type),In.valueFromBytes(xc(r.type),r.value),He(r.createdAt))}}function Tc(r){return Yn.of(hi.of(He(r.createdAt),r.offset),r.relativeOffset)}function Hd(r){return hi.of(He(r.createdAt),r.offset)}function Og(r){const e=Ls.create(r.value);Object.entries(r.attributes).forEach(([o,l])=>{e.setAttr(o,l.value,He(l.updatedAt))});const n=Gi.create(Hd(r.id),e);return n.remove(He(r.removedAt)),n}function Jr(r){return $n.of(Vs(r.parentId),Vs(r.leftSiblingId))}function Vs(r){return hn.of(He(r.createdAt),r.offset)}function Ug(r){if(!r.length)return;const e=[];return r.forEach(n=>{const o=Fl(n.content);e.push(o)}),e}function Fl(r){if(r.length===0)return;const e=[];for(const l of r)e.push(Bg(l));const n=e[e.length-1],o=new Map;o.set(r[e.length-1].depth,e[e.length-1]);for(let l=e.length-2;l>=0;l--)o.get(r[l].depth-1).prepend(e[l]),o.set(r[l].depth,e[l]);return n.updateDescendantsSize(),kn.create(n,qn).getRoot()}function Fg(r){const e=Ti.create();for(const[n,o]of Object.entries(r))e.setInternal(n,o.value,He(o.updatedAt),o.isRemoved);return e}function Bg(r){const e=Vs(r.id),n=Cn.create(e,r.type),o=Object.entries(r.attributes);return n.isText?n.value=r.value:o.length&&(n.attrs=Fg(r.attributes)),r.insPrevId&&(n.insPrevID=Vs(r.insPrevId)),r.insNextId&&(n.insNextID=Vs(r.insNextId)),n.removedAt=He(r.removedAt),n}function Gd(r){if(r.body.case==="set"){const e=r.body.value;return hr.create(e.key,Ul(e.value),He(e.parentCreatedAt),He(e.executedAt))}else if(r.body.case==="add"){const e=r.body.value;return Ns.create(He(e.parentCreatedAt),He(e.prevCreatedAt),Ul(e.value),He(e.executedAt))}else if(r.body.case==="move"){const e=r.body.value;return Hi.create(He(e.parentCreatedAt),He(e.prevCreatedAt),He(e.createdAt),He(e.executedAt))}else if(r.body.case==="remove"){const e=r.body.value;return Vi.create(He(e.parentCreatedAt),He(e.createdAt),He(e.executedAt))}else if(r.body.case==="edit"){const e=r.body.value,n=new Map;Object.entries(e.createdAtMapByActor).forEach(([l,d])=>{n.set(l,He(d))});const o=new Map;return Object.entries(e.attributes).forEach(([l,d])=>{o.set(l,d)}),Os.create(He(e.parentCreatedAt),Tc(e.from),Tc(e.to),n,e.content,o,He(e.executedAt))}else if(r.body.case==="style"){const e=r.body.value,n=new Map;Object.entries(e.createdAtMapByActor).forEach(([l,d])=>{n.set(l,He(d))});const o=new Map;return Object.entries(e.attributes).forEach(([l,d])=>{o.set(l,d)}),Us.create(He(e.parentCreatedAt),Tc(e.from),Tc(e.to),n,o,He(e.executedAt))}else{if(r.body.case==="select")return;if(r.body.case==="increase"){const e=r.body.value;return qr.create(He(e.parentCreatedAt),Ul(e.value),He(e.executedAt))}else if(r.body.case==="treeEdit"){const e=r.body.value,n=new Map;return Object.entries(e.createdAtMapByActor).forEach(([o,l])=>{n.set(o,He(l))}),Bs.create(He(e.parentCreatedAt),Jr(e.from),Jr(e.to),Ug(e.contents),e.splitLevel,n,He(e.executedAt))}else if(r.body.case==="treeStyle"){const e=r.body.value,n=new Map,o=e.attributesToRemove,l=new Map;return e!=null&&e.createdAtMapByActor&&Object.entries(e.createdAtMapByActor).forEach(([d,p])=>{l.set(d,He(p))}),(o==null?void 0:o.length)>0?Mi.createTreeRemoveStyleOperation(He(e.parentCreatedAt),Jr(e.from),Jr(e.to),l,o,He(e.executedAt)):(Object.entries(e.attributes).forEach(([d,p])=>{n.set(d,p)}),Mi.create(He(e.parentCreatedAt),Jr(e.from),Jr(e.to),l,n,He(e.executedAt)))}else throw new $(J.ErrUnimplemented,"unimplemented operation")}}function kg(r){const e=[];for(const n of r){const o=Gd(n);o&&e.push(o)}return e}function Wd(r){const e=[];for(const n of r)e.push(fr.create({id:zd(n.id),operations:kg(n.operations),presenceChange:n.presenceChange?Ng(n.presenceChange):void 0,message:n.message}));return e}function zg(r){return Gr.of(BigInt(r.serverSeq),r.clientSeq)}function Vg(r){return _c.create(r.documentKey,zg(r.checkpoint),r.isRemoved,Wd(r.changes),Ll(r.versionVector),r.snapshot,He(r.minSyncedTicket))}function qd(r){const e=new Is;for(const o of r.nodes){const l=Bl(o.element);e.set(o.key,l,l.getPositionedAt())}const n=new Sn(He(r.createdAt),e);return n.setMovedAt(He(r.movedAt)),n.setRemovedAt(He(r.removedAt)),n}function Jd(r){const e=new Ds;for(const o of r.nodes)e.insert(Bl(o.element));const n=new Rn(He(r.createdAt),e);return n.setMovedAt(He(r.movedAt)),n.setRemovedAt(He(r.removedAt)),n}function Hg(r){const e=Ht.of(Ht.valueFromBytes(Vd(r.type),r.value),He(r.createdAt));return e.setMovedAt(He(r.movedAt)),e.setRemovedAt(He(r.removedAt)),e}function Gg(r){const e=new Wr;let n=e.getHead();for(const l of r.nodes){const d=e.insertAfter(n,Og(l));l.insPrevId&&d.setInsPrev(e.findNode(Hd(l.insPrevId))),n=d}const o=new Bn(e,He(r.createdAt));return o.setMovedAt(He(r.movedAt)),o.setRemovedAt(He(r.removedAt)),o}function Wg(r){const e=In.create(xc(r.type),In.valueFromBytes(xc(r.type),r.value),He(r.createdAt));return e.setMovedAt(He(r.movedAt)),e.setRemovedAt(He(r.removedAt)),e}function Xd(r){const e=Fl(r.nodes);return kn.create(e,He(r.createdAt))}function Bl(r){if(r.body.case==="jsonObject")return qd(r.body.value);if(r.body.case==="jsonArray")return Jd(r.body.value);if(r.body.case==="primitive")return Hg(r.body.value);if(r.body.case==="text")return Gg(r.body.value);if(r.body.case==="counter")return Wg(r.body.value);if(r.body.case==="tree")return Xd(r.body.value);throw new $(J.ErrUnimplemented,"unimplemented element")}function qg(r){if(!r)return{root:Sn.create(qn),presences:new Map};const e=wm.fromBinary(r);return{root:Bl(e.root),presences:Lg(e.presences)}}function Jg(r){const e=Il(r);return kl(e.toBinary())}function Xg(r){const e=Vl(r),n=va.fromBinary(e);return Ll(n)}function $d(r){if(!r)throw new $(J.ErrInvalidArgument,"bytes is empty");const e=Ln.fromBinary(r);return qd(e.body.value)}function Yd(r){return Nl(r).toBinary()}function $g(r){if(!r)throw new $(J.ErrInvalidArgument,"bytes is empty");const e=Ln.fromBinary(r);return Jd(e.body.value)}function Yg(r){return Bd(r).toBinary()}function jg(r){if(!r)throw new $(J.ErrInvalidArgument,"bytes is empty");const e=Ln.fromBinary(r);return Xd(e.body.value)}function Kg(r){return kd(r).toBinary()}function kl(r){return r?Array.from(r).map(e=>e.toString(16).padStart(2,"0")).join(""):""}function zl(r){return kl(r)}function Vl(r){return new Uint8Array(r.match(/.{1,2}/g).map(e=>parseInt(e,16)))}function Hl(r){return Vl(r)}function Zg(r){const e=ga.fromBinary(r);return zd(e)}function Qg(r){const e=ml.fromBinary(r);return Gd(e)}const $t={fromPresence:Ol,toChangePack:Dg,fromChangePack:Vg,fromChanges:Wd,toTreeNodes:Dl,fromTreeNodes:Fl,objectToBytes:Yd,bytesToObject:$d,bytesToSnapshot:qg,bytesToHex:kl,hexToBytes:Vl,toHexString:zl,toUint8Array:Hl,toOperation:Fd,toChangeID:Ld,PbChangeID:ga,bytesToChangeID:Zg,bytesToOperation:Qg,versionVectorToHex:Jg,hexToVersionVector:Xg};var dn=(r=>(r[r.Trivial=0]="Trivial",r[r.Debug=1]="Debug",r[r.Info=2]="Info",r[r.Warn=3]="Warn",r[r.Error=4]="Error",r[r.Fatal=5]="Fatal",r))(dn||{});let pr=3;function Gl(r){pr=r}const Je={trivial:(...r)=>{pr>0||typeof console<"u"&&console.log("YORKIE T:",...r)},debug:(...r)=>{pr>1||typeof console<"u"&&console.log("YORKIE D:",...r)},info:(...r)=>{pr>2||typeof console<"u"&&console.log("YORKIE I:",...r)},warn:(...r)=>{pr>3||typeof console<"u"&&(typeof console.warn<"u"?console.warn("YORKIE W:",...r):console.log("YORKIE W:",...r))},error:(...r)=>{pr>4||typeof console<"u"&&(typeof console.error<"u"?console.error("YORKIE E:",...r):console.log("YORKIE E:",...r))},fatal:(...r)=>{typeof console<"u"&&(typeof console.error<"u"?console.error("YORKIE F:",...r):console.log("YORKIE F:",...r))},isEnabled:r=>pr<=r};function jd(){return"xxxxxxxx-xxxx-4xxxy-xxxx-xxxxxxxxxxx".replace(/[xy]/g,r=>{const e=Math.random()*16|0;return(r==="x"?e:e&3|8).toString(16)})}class ev{constructor(e,n,o,l,d){c(this,"reconnectStreamDelay"),c(this,"doc"),c(this,"docID"),c(this,"syncMode"),c(this,"remoteChangeEventReceived"),c(this,"watchStream"),c(this,"watchLoopTimerID"),c(this,"watchAbortController"),c(this,"unsubscribeBroadcastEvent"),this.reconnectStreamDelay=e,this.doc=n,this.docID=o,this.syncMode=l,this.remoteChangeEventReceived=!1,this.unsubscribeBroadcastEvent=d}changeSyncMode(e){this.syncMode=e}needRealtimeSync(){return this.syncMode===Xs.RealtimeSyncOff?!1:this.syncMode===Xs.RealtimePushOnly?this.doc.hasLocalChanges():this.syncMode!==Xs.Manual&&(this.doc.hasLocalChanges()||this.remoteChangeEventReceived)}async runWatchLoop(e){const n=async()=>{if(this.watchStream)return Promise.resolve();this.watchLoopTimerID&&(clearTimeout(this.watchLoopTimerID),this.watchLoopTimerID=void 0);try{[this.watchStream,this.watchAbortController]=await e(()=>{this.watchStream=void 0,this.watchAbortController=void 0,this.watchLoopTimerID=setTimeout(n,this.reconnectStreamDelay)})}catch{}};await n()}cancelWatchStream(){this.watchStream&&this.watchAbortController&&(this.watchAbortController.abort(),this.watchStream=void 0,this.watchAbortController=void 0),clearTimeout(this.watchLoopTimerID),this.watchLoopTimerID=void 0}}const Wl=()=>{};class tv{constructor(e){c(this,"finalized",!1),c(this,"observers",[]),c(this,"finalError");try{e(this)}catch(n){this.error(n)}}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,o){let l;if(!e)throw new $(J.ErrInvalidArgument,"missing observer");if(this.finalized)throw new $(J.ErrRefused,"observable is finalized due to previous error");typeof e=="object"?l=e:l={next:e,error:n,complete:o},l.next===void 0&&(l.next=Wl),l.error===void 0&&(l.error=Wl),l.complete===void 0&&(l.complete=Wl);const d=jd(),p=this.unsubscribeOne.bind(this,d);if(this.observers.push({subscriptionID:d,observer:l}),this.finalized)try{this.finalError?l.error(this.finalError):l.complete()}catch(y){Je.warn(y)}return p}unsubscribeOne(e){var n;this.observers=(n=this.observers)==null?void 0:n.filter(o=>o.subscriptionID!==e)}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e].observer)}catch(o){Je.error(o)}}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.observers=void 0)}}function nv(r){const e=new tv(r);return{subscribe:e.subscribe.bind(e),getProxy:()=>e}}class Xr{constructor(e,n,o,l){c(this,"id"),c(this,"delimiter"),c(this,"message"),c(this,"root"),c(this,"operations"),c(this,"presenceChange"),c(this,"previousPresence"),c(this,"reversePresenceKeys"),this.id=e,this.delimiter=vd,this.root=n,this.operations=[],this.previousPresence=Wn(o),this.presenceChange=void 0,this.reversePresenceKeys=new Set,this.message=l}static create(e,n,o,l){return new Xr(e,n,o,l)}push(e){this.operations.push(e)}registerElement(e,n){this.root.registerElement(e,n)}registerRemovedElement(e){this.root.registerRemovedElement(e)}registerGCPair(e){this.root.registerGCPair(e)}getChange(){return fr.create({id:this.id,operations:this.operations,presenceChange:this.presenceChange,message:this.message})}hasChange(){return this.operations.length>0||this.presenceChange!==void 0}setPresenceChange(e){this.presenceChange=e}setReversePresence(e,n){for(const o of Object.keys(e))n!=null&&n.addToHistory?this.reversePresenceKeys.add(o):this.reversePresenceKeys.delete(o)}getReversePresence(){if(this.reversePresenceKeys.size===0)return;const e={};for(const n of this.reversePresenceKeys)e[n]=this.previousPresence[n];return e}issueTimeTicket(){return this.delimiter+=1,this.id.createTimeTicket(this.delimiter)}getLastTimeTicket(){return this.id.createTimeTicket(this.delimiter)}}class Hs{constructor(e){c(this,"rootObject"),c(this,"elementPairMapByCreatedAt"),c(this,"gcElementSetByCreatedAt"),c(this,"gcPairMap"),this.rootObject=e,this.elementPairMapByCreatedAt=new Map,this.gcElementSetByCreatedAt=new Set,this.gcPairMap=new Map,this.registerElement(e,void 0),e.getDescendants(n=>{if(n.getRemovedAt()&&this.registerRemovedElement(n),n instanceof Bn||n instanceof kn)for(const o of n.getGCPairs())this.registerGCPair(o);return!1})}static create(){return new Hs(Sn.create(qn))}findByCreatedAt(e){const n=this.elementPairMapByCreatedAt.get(e.toIDString());if(n)return n.element}findElementPairByCreatedAt(e){return this.elementPairMapByCreatedAt.get(e.toIDString())}createSubPaths(e){let n=this.elementPairMapByCreatedAt.get(e.toIDString());if(!n)return[];const o=[];for(;n.parent;){const l=n.element.getCreatedAt(),d=n.parent.subPathOf(l);if(d===void 0)throw new $(J.ErrInvalidArgument,`cant find the given element: ${l.toIDString()}`);o.unshift(d),n=this.elementPairMapByCreatedAt.get(n.parent.getCreatedAt().toIDString())}return o.unshift("$"),o}createPath(e){return this.createSubPaths(e).join(".")}registerElement(e,n){this.elementPairMapByCreatedAt.set(e.getCreatedAt().toIDString(),{parent:n,element:e}),e instanceof zi&&e.getDescendants((o,l)=>(this.registerElement(o,l),!1))}deregisterElement(e){let n=0;const o=l=>{const d=l.getCreatedAt().toIDString();this.elementPairMapByCreatedAt.delete(d),this.gcElementSetByCreatedAt.delete(d),n++};return o(e),e instanceof zi&&e.getDescendants(l=>(o(l),!1)),n}registerRemovedElement(e){this.gcElementSetByCreatedAt.add(e.getCreatedAt().toIDString())}registerGCPair(e){if(this.gcPairMap.get(e.child.toIDString())){this.gcPairMap.delete(e.child.toIDString());return}this.gcPairMap.set(e.child.toIDString(),e)}getElementMapSize(){return this.elementPairMapByCreatedAt.size}getGarbageElementSetSize(){const e=new Set;for(const n of this.gcElementSetByCreatedAt){e.add(n);const o=this.elementPairMapByCreatedAt.get(n);o.element instanceof zi&&o.element.getDescendants(l=>(e.add(l.getCreatedAt().toIDString()),!1))}return e.size}getObject(){return this.rootObject}getGarbageLen(){return this.getGarbageElementSetSize()+this.gcPairMap.size}getDocSize(){const e={live:{data:0,meta:0},gc:{data:0,meta:0}};for(const[n,o]of this.elementPairMapByCreatedAt)this.gcElementSetByCreatedAt.has(n)?(e.gc.data+=o.element.getDataSize().data,e.gc.meta+=o.element.getDataSize().meta):(e.live.data+=o.element.getDataSize().data,e.live.meta+=o.element.getDataSize().meta);for(const n of this.gcPairMap.values()){const o=n.child.getDataSize();e.gc.data+=o.data,e.gc.meta+=o.meta}return e}deepcopy(){return new Hs(this.rootObject.deepcopy())}garbageCollect(e){let n=0;for(const o of this.gcElementSetByCreatedAt){const l=this.elementPairMapByCreatedAt.get(o),d=l.element.getRemovedAt();d&&(e!=null&&e.afterOrEqual(d))&&(l.parent.purge(l.element),n+=this.deregisterElement(l.element))}for(const[,o]of this.gcPairMap){const l=o.child.getRemovedAt();l&&(e!=null&&e.afterOrEqual(l))&&(o.parent.purge(o.child),this.gcPairMap.delete(o.child.toIDString()),n+=1)}return n}toJSON(){return this.rootObject.toJSON()}toSortedJSON(){return this.rootObject.toSortedJSON()}getStats(){return{elements:this.getElementMapSize(),gcPairs:this.gcPairMap.size,gcElements:this.getGarbageElementSetSize()}}}function Kd(r,e){const n=new Gs(r);return new Proxy(e,n.getHandlers())}class Gs{constructor(e){c(this,"context"),c(this,"handlers"),this.context=e,this.handlers={set:(n,o,l)=>(Je.isEnabled(dn.Trivial)&&Je.trivial(`obj[${o}]=${JSON.stringify(l)}`),Gs.setInternal(e,n,o,l),!0),get:(n,o)=>(Je.isEnabled(dn.Trivial)&&Je.trivial(`obj[${o}]`),o==="getID"?()=>n.getCreatedAt():o==="toJSON"||o==="toString"?()=>n.toJSON():o==="toJS"?()=>n.toJS():o==="toJSForTest"?()=>n.toJSForTest():mr(e,n.get(o))),ownKeys:n=>n.getKeys(),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),deleteProperty:(n,o)=>(Je.isEnabled(dn.Trivial)&&Je.trivial(`obj[${o}]`),Gs.deleteInternal(e,n,o),!0)}}static setInternal(e,n,o,l){if(o.includes("."))throw new $(J.ErrInvalidObjectKey,"key must not contain the '.'.");const d=e.issueTimeTicket(),p=Ec(e,l,d),y=n.set(o,p,d);e.registerElement(p,n),y&&e.registerRemovedElement(y),e.push(hr.create(o,p.deepcopy(),n.getCreatedAt(),d))}static buildObjectMembers(e,n){const o={};for(const[l,d]of Object.entries(n)){if(l.includes("."))throw new $(J.ErrInvalidObjectKey,"key must not contain the '.'.");const p=e.issueTimeTicket(),y=Ec(e,d,p);o[l]=y}return o}static deleteInternal(e,n,o){const l=e.issueTimeTicket(),d=n.deleteByKey(o,l);d&&(e.push(Vi.create(n.getCreatedAt(),d.getCreatedAt(),l)),e.registerRemovedElement(d))}getHandlers(){return this.handlers}}function iv(r,e){const n=new Yt(r,e);return new Proxy(e,n.getHandlers())}function rv(r){return typeof r=="string"||r instanceof String?!isNaN(r):!1}function sv(r){return["concat","entries","every","filter","find","findIndex","forEach","join","keys","map","reduce","reduceRight","slice","some","toLocaleString","toString","values"].includes(r)}class Yt{constructor(e,n){c(this,"context"),c(this,"handlers"),c(this,"array"),this.context=e,this.array=n,this.handlers={get:(o,l,d)=>l==="getID"?()=>o.getCreatedAt():l==="getElementByID"?p=>{const y=o.getByID(p);if(!(!y||y.isRemoved()))return qi(e,y)}:l==="getElementByIndex"?p=>{const y=o.get(p);return qi(e,y)}:l==="getLast"?()=>qi(e,o.getLast()):l==="deleteByID"?p=>{const y=Yt.deleteInternalByID(e,o,p);return qi(e,y)}:l==="insertAfter"?(p,y)=>{const A=Yt.insertAfterInternal(e,o,p,y);return qi(e,A)}:l==="insertBefore"?(p,y)=>{const A=Yt.insertBeforeInternal(e,o,p,y);return qi(e,A)}:l==="moveBefore"?(p,y)=>{Yt.moveBeforeInternal(e,o,p,y)}:l==="moveAfter"?(p,y)=>{Yt.moveAfterInternal(e,o,p,y)}:l==="moveFront"?p=>{Yt.moveFrontInternal(e,o,p)}:l==="moveLast"?p=>{Yt.moveLastInternal(e,o,p)}:rv(l)?mr(e,o.get(Number(l))):l==="push"?p=>Yt.pushInternal(e,o,p):l==="splice"?(p,y,...A)=>Yt.splice(e,o,p,y,...A):l==="length"?o.length:typeof l=="symbol"&&l===Symbol.iterator?Yt.iteratorInternal.bind(this,e,o):l==="includes"?(p,y)=>Yt.includes(e,o,p,y):l==="indexOf"?(p,y)=>Yt.indexOf(e,o,p,y):l==="lastIndexOf"?(p,y)=>Yt.lastIndexOf(e,o,p,y):l==="toJSForTest"?()=>o.toJSForTest():l==="toTestString"?()=>Yt.toTestString(o):typeof l=="string"&&sv(l)?(...p)=>{const y=Array.from(o).map(A=>mr(e,A));return Array.prototype[l].apply(y,p)}:Reflect.get(o,l,d),deleteProperty:(o,l)=>(Je.isEnabled(dn.Trivial)&&Je.trivial(`array[${l}]`),Yt.deleteInternalByIndex(e,o,Number.parseInt(l)),!0)}}static*iteratorInternal(e,n){for(const o of n)yield qi(e,o)}static buildArrayElements(e,n){const o=[];for(const l of n){const d=e.issueTimeTicket(),p=Ec(e,l,d);o.push(p)}return o}static pushInternal(e,n,o){return Yt.insertAfterInternal(e,n,n.getLastCreatedAt(),o),n.length}static moveBeforeInternal(e,n,o,l){const d=e.issueTimeTicket(),p=n.getPrevCreatedAt(o);n.moveAfter(p,l,d),e.push(Hi.create(n.getCreatedAt(),p,l,d))}static moveAfterInternal(e,n,o,l){const d=e.issueTimeTicket();n.moveAfter(o,l,d),e.push(Hi.create(n.getCreatedAt(),o,l,d))}static moveFrontInternal(e,n,o){const l=e.issueTimeTicket(),d=n.getHead();n.moveAfter(d.getCreatedAt(),o,l),e.push(Hi.create(n.getCreatedAt(),d.getCreatedAt(),o,l))}static moveLastInternal(e,n,o){const l=e.issueTimeTicket(),d=n.getLastCreatedAt();n.moveAfter(d,o,l),e.push(Hi.create(n.getCreatedAt(),d,o,l))}static insertAfterInternal(e,n,o,l){const d=e.issueTimeTicket(),p=Ec(e,l,d);return n.insertAfter(o,p),e.registerElement(p,n),e.push(Ns.create(n.getCreatedAt(),o,p.deepcopy(),d)),p}static insertBeforeInternal(e,n,o,l){return Yt.insertAfterInternal(e,n,n.getPrevCreatedAt(o),l)}static deleteInternalByIndex(e,n,o){const l=e.issueTimeTicket(),d=n.deleteByIndex(o,l);if(d)return e.push(Vi.create(n.getCreatedAt(),d.getCreatedAt(),l)),e.registerRemovedElement(d),d}static deleteInternalByID(e,n,o){const l=e.issueTimeTicket(),d=n.delete(o,l);return e.push(Vi.create(n.getCreatedAt(),d.getCreatedAt(),l)),e.registerRemovedElement(d),d}static splice(e,n,o,l,...d){const p=n.length,y=o>=0?Math.min(o,p):Math.max(p+o,0),A=l===void 0?p:l<0?y:Math.min(y+l,p),I=[];for(let B=y;B<A;B++){const ie=Yt.deleteInternalByIndex(e,n,y);if(ie){const de=ie.deepcopy();de.setRemovedAt(),I.push(mr(e,de))}}if(d){let B=y===0?n.getHead().getID():n.get(y-1).getID();for(const ie of d)B=Yt.insertAfterInternal(e,n,B,ie).getID()}return I}static includes(e,n,o,l){var d;const p=n.length,y=l===void 0?0:l<0?Math.max(l+p,0):l;if(y>=p)return!1;if(Ht.isSupport(o))return Array.from(n).map(I=>mr(e,I)).includes(o,y);for(let A=y;A<p;A++)if(((d=n.get(A))==null?void 0:d.getID())===o.getID())return!0;return!1}static indexOf(e,n,o,l){var d;const p=n.length,y=l===void 0?0:l<0?Math.max(l+p,0):l;if(y>=p)return-1;if(Ht.isSupport(o))return Array.from(n).map(I=>mr(e,I)).indexOf(o,y);for(let A=y;A<p;A++)if(((d=n.get(A))==null?void 0:d.getID())===o.getID())return A;return-1}static lastIndexOf(e,n,o,l){var d;const p=n.length,y=l===void 0||l>=p?p-1:l<0?l+p:l;if(y<0)return-1;if(Ht.isSupport(o))return Array.from(n).map(I=>mr(e,I)).lastIndexOf(o,y);for(let A=y;A>0;A--)if(((d=n.get(A))==null?void 0:d.getID())===o.getID())return A;return-1}static toTestString(e){return e.toTestString()}getHandlers(){return this.handlers}}class Ws{constructor(e,n){c(this,"context"),c(this,"text"),this.context=e,this.text=n}initialize(e,n){this.context=e,this.text=n}getID(){return this.text.getID()}edit(e,n,o,l){if(!this.context||!this.text)throw new $(J.ErrNotInitialized,"Text is not initialized yet");if(e>n)throw new $(J.ErrInvalidArgument,"from should be less than or equal to to");const d=this.text.indexRangeToPosRange(e,n);Je.isEnabled(dn.Debug)&&Je.debug(`EDIT: f:${e}->${d[0].toTestString()}, t:${n}->${d[1].toTestString()} c:${o}`);const p=l?zr(l):void 0,y=this.context.issueTimeTicket(),[A,,I,B]=this.text.edit(d,o,y,p);for(const ie of I)this.context.registerGCPair(ie);return this.context.push(new Os(this.text.getCreatedAt(),d[0],d[1],A,o,p?new Map(Object.entries(p)):new Map,y)),this.text.findIndexesFromRange(B)}delete(e,n){return this.edit(e,n,"")}empty(){return this.edit(0,this.length,"")}setStyle(e,n,o){if(!this.context||!this.text)throw new $(J.ErrNotInitialized,"Text is not initialized yet");if(e>n)throw new $(J.ErrInvalidArgument,"from should be less than or equal to to");const l=this.text.indexRangeToPosRange(e,n);Je.isEnabled(dn.Debug)&&Je.debug(`STYL: f:${e}->${l[0].toTestString()}, t:${n}->${l[1].toTestString()} a:${JSON.stringify(o)}`);const d=zr(o),p=this.context.issueTimeTicket(),[y,A]=this.text.setStyle(l,d,p);for(const I of A)this.context.registerGCPair(I);return this.context.push(new Us(this.text.getCreatedAt(),l[0],l[1],y,new Map(Object.entries(d)),p)),!0}indexRangeToPosRange(e){if(!this.context||!this.text)throw new $(J.ErrNotInitialized,"Text is not initialized yet");const n=this.text.indexRangeToPosRange(e[0],e[1]);return[n[0].toStruct(),n[1].toStruct()]}posRangeToIndexRange(e){if(!this.context||!this.text)throw new $(J.ErrNotInitialized,"Text is not initialized yet");const n=this.text.findIndexesFromRange([Yn.fromStruct(e[0]),Yn.fromStruct(e[1])]);return[n[0],n[1]]}toTestString(){if(!this.context||!this.text)throw new $(J.ErrNotInitialized,"Text is not initialized yet");return this.text.toTestString()}values(){if(!this.context||!this.text)throw new $(J.ErrNotInitialized,"Text is not initialized yet");return this.text.values()}get length(){return this.text.length}getTreeByIndex(){return this.text.getTreeByIndex()}getTreeByID(){return this.text.getTreeByID()}toString(){if(!this.context||!this.text)throw new $(J.ErrNotInitialized,"Text is not initialized yet");return this.text.toString()}toJSON(){if(!this.context||!this.text)throw new $(J.ErrNotInitialized,"Text is not initialized yet");return this.text.toJSON()}toJSForTest(){if(!this.context||!this.text)throw new $(J.ErrNotInitialized,"Text is not initialized yet");return this.text.toJSForTest()}createRangeForTest(e,n){if(!this.context||!this.text)throw new $(J.ErrNotInitialized,"Text is not initialized yet");return this.text.indexRangeToPosRange(e,n)}}class qs{constructor(e,n){c(this,"valueType"),c(this,"value"),c(this,"context"),c(this,"counter"),this.valueType=e,this.value=n}initialize(e,n){this.valueType=n.getValueType(),this.context=e,this.counter=n,this.value=n.getValue()}getID(){return this.counter.getID()}getValue(){return this.value}getValueType(){return this.valueType}increase(e){if(!this.context||!this.counter)throw new $(J.ErrNotInitialized,"Counter is not initialized yet");const n=this.context.issueTimeTicket(),o=Ht.of(e,n);if(!o.isNumericType())throw new TypeError(`Unsupported type of value: ${typeof o.getValue()}`);return this.counter.increase(o),this.context.push(qr.create(this.counter.getCreatedAt(),o,n)),this}toJSForTest(){if(!this.context||!this.counter)throw new $(J.ErrNotInitialized,"Counter is not initialized yet");return this.counter.toJSForTest()}}function ql(r){if(r.isText)return{type:r.type,value:r.value};const e={type:r.type,children:r.children.map(n=>ql(n))};return r.attrs&&(e.attributes=Si(r.attrs.toObject())),e}function ov(r,e){const n={type:r.isText?r.parent.type:r.type,children:r.isText?r.parent.getChildrenText().length===e?[]:[{type:li,value:r.parent.getChildrenText().slice(e)}]:r.children.slice(e).map(o=>ql(o))};return r.attrs?n.attributes=Si(r.attrs.toObject()):r.isText&&r.parent.attrs&&(n.attributes=Si(r.parent.attrs.toObject())),n}function av(r,e){const{node:n}=r,o=[...e].slice(0,-1),l=n.isText?n.parent.getChildrenText().length:n.children.length,d=[...o,l],p=[...o],y=[];p[p.length-1]+=1,e.every((I,B)=>I===d[B])||y.push({fromPath:[...e],toPath:d});const A=ov(n,e[e.length-1]);return A&&y.push({fromPath:p,toPath:p,content:A}),y}function cv(r,e){const{node:n,offset:o}=r,l=n.children[o],d=n.children[o-1],{children:p}=l,y=[...e].slice(0,-1),A=[{fromPath:[...e],toPath:[...y,o+1]}];if(!l.children.length)return A;const I=[...y,o-1,d.hasTextChild()?d.getChildrenText().length:d.children.length],B=p.map(ie=>ql(ie));return A.push({fromPath:I,toPath:I,content:B}),A}function Jl(r,e,n){const{type:o}=r,l=n.issueTimeTicket();if(o===li){Zd(r);const{value:d}=r,p=Cn.create(hn.of(l,0),o,d);e.append(p)}else{const{children:d=[]}=r,{attributes:p}=r;let y;if(typeof p=="object"&&!gd(p)){const I=zr(p);y=new Ti;for(const[B,ie]of Object.entries(I))y.set(B,ie,l)}const A=Cn.create(hn.of(l,0),o,void 0,y);e.append(A);for(const I of d)Jl(I,A,n)}}function lv(r,e){const{type:n}=e,o=r.issueTimeTicket();let l;if(e.type===li){const{value:d}=e;l=Cn.create(hn.of(o,0),n,d)}else if(e){const{children:d=[]}=e,{attributes:p}=e;let y;if(typeof p=="object"&&!gd(p)){const A=zr(p);y=new Ti;for(const[I,B]of Object.entries(A))y.set(I,B,o)}l=Cn.create(hn.of(r.issueTimeTicket(),0),n,void 0,y);for(const A of d)Jl(A,l,r)}return l}function Zd(r){if(!r.value.length)throw new $(J.ErrInvalidArgument,"text node cannot have empty value");return!0}function Qd(r){if(!r.length)return!0;if(r[0].type===li)for(const n of r){const{type:o}=n;if(o!==li)throw new $(J.ErrInvalidArgument,"element node and text node cannot be passed together");Zd(n)}else for(const n of r){const{type:o}=n;if(o===li)throw new $(J.ErrInvalidArgument,"element node and text node cannot be passed together")}return!0}class Js{constructor(e){c(this,"initialRoot"),c(this,"context"),c(this,"tree"),this.initialRoot=e}initialize(e,n){this.context=e,this.tree=n}getID(){return this.tree.getID()}buildRoot(e){if(!this.initialRoot)return Cn.create(hn.of(e.issueTimeTicket(),0),rg);const n=Cn.create(hn.of(e.issueTimeTicket(),0),this.initialRoot.type);for(const o of this.initialRoot.children)Jl(o,n,e);return n}getSize(){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");return this.tree.getSize()}getNodeSize(){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");return this.tree.getNodeSize()}getIndexTree(){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");return this.tree.getIndexTree()}splitByPath(e){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");if(!e.length)throw new $(J.ErrInvalidArgument,"path should not be empty");const n=this.tree.pathToTreePos(e),o=av(n,e);for(const l of o){const{fromPath:d,toPath:p,content:y}=l,A=this.tree.pathToPos(d),I=this.tree.pathToPos(p);this.editInternal(A,I,y?[y]:[],0)}}mergeByPath(e){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");if(!e.length)throw new $(J.ErrInvalidArgument,"path should not be empty");const n=this.tree.pathToTreePos(e);if(n.node.isText)throw new $(J.ErrInvalidArgument,"text node cannot be merged");const o=cv(n,e);for(const l of o){const{fromPath:d,toPath:p,content:y}=l,A=this.tree.pathToPos(d),I=this.tree.pathToPos(p);this.editInternal(A,I,y??[],0)}}styleByPath(e,n){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");if(!e.length)throw new $(J.ErrInvalidArgument,"path should not be empty");const[o,l]=this.tree.pathToPosRange(e),d=this.context.issueTimeTicket(),p=n?zr(n):void 0,[y]=this.tree.style([o,l],p,d);this.context.push(Mi.create(this.tree.getCreatedAt(),o,l,y,p?new Map(Object.entries(p)):new Map,d))}style(e,n,o){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");if(e>n)throw new $(J.ErrInvalidArgument,"from should be less than or equal to to");const l=this.tree.findPos(e),d=this.tree.findPos(n),p=this.context.issueTimeTicket(),y=o?zr(o):void 0,[A,I]=this.tree.style([l,d],y,p);for(const B of I)this.context.registerGCPair(B);this.context.push(Mi.create(this.tree.getCreatedAt(),l,d,A,y?new Map(Object.entries(y)):new Map,p))}removeStyle(e,n,o){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");if(e>n)throw new $(J.ErrInvalidArgument,"from should be less than or equal to to");const l=this.tree.findPos(e),d=this.tree.findPos(n),p=this.context.issueTimeTicket(),[y,A]=this.tree.removeStyle([l,d],o,p);for(const I of A)this.context.registerGCPair(I);this.context.push(Mi.createTreeRemoveStyleOperation(this.tree.getCreatedAt(),l,d,y,o,p))}editInternal(e,n,o,l=0){var d;if(o.length!==0&&o[0]&&(Qd(o),o[0].type!==li))for(const B of o){const{children:ie=[]}=B;Qd(ie)}const p=this.context.getLastTimeTicket();let y=new Array;if(((d=o[0])==null?void 0:d.type)===li){let B="";for(const ie of o){const{value:de}=ie;B+=de}y.push(Cn.create(hn.of(this.context.issueTimeTicket(),0),li,B))}else y=o.map(B=>B&&lv(this.context,B)).filter(B=>B);const[,A,I]=this.tree.edit([e,n],y.length?y.map(B=>B==null?void 0:B.deepcopy()):void 0,l,p,()=>this.context.issueTimeTicket());for(const B of A)this.context.registerGCPair(B);return this.context.push(Bs.create(this.tree.getCreatedAt(),e,n,y.length?y:void 0,l,I,p)),!0}editByPath(e,n,o,l=0){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");if(e.length!==n.length)throw new $(J.ErrInvalidArgument,"path length should be equal");if(!e.length||!n.length)throw new $(J.ErrInvalidArgument,"path should not be empty");const d=this.tree.pathToPos(e),p=this.tree.pathToPos(n);return this.editInternal(d,p,o?[o]:[],l)}editBulkByPath(e,n,o,l=0){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");if(e.length!==n.length)throw new $(J.ErrInvalidArgument,"path length should be equal");if(!e.length||!n.length)throw new $(J.ErrInvalidArgument,"path should not be empty");const d=this.tree.pathToPos(e),p=this.tree.pathToPos(n);return this.editInternal(d,p,o,l)}edit(e,n,o,l=0){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");if(e>n)throw new $(J.ErrInvalidArgument,"from should be less than or equal to to");const d=this.tree.findPos(e),p=this.tree.findPos(n);return this.editInternal(d,p,o?[o]:[],l)}editBulk(e,n,o,l=0){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");if(e>n)throw new $(J.ErrInvalidArgument,"from should be less than or equal to to");const d=this.tree.findPos(e),p=this.tree.findPos(n);return this.editInternal(d,p,o,l)}toXML(){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");return this.tree.toXML()}toJSON(){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");return this.tree.toJSON()}toJSForTest(){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");return this.tree.toJSForTest()}toJSInfoForTest(){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");return this.tree.toJSInfoForTest()}getRootTreeNode(){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");return this.tree.getRootTreeNode()}indexToPath(e){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");return this.tree.indexToPath(e)}pathToIndex(e){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");return this.tree.pathToIndex(e)}pathRangeToPosRange(e){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");const n=[this.tree.pathToIndex(e[0]),this.tree.pathToIndex(e[1])],o=this.tree.indexRangeToPosRange(n);return[o[0].toStruct(),o[1].toStruct()]}indexRangeToPosRange(e){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");return this.tree.indexRangeToPosStructRange(e)}posRangeToIndexRange(e){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");const n=[$n.fromStruct(e[0]),$n.fromStruct(e[1])];return this.tree.posRangeToIndexRange(n)}posRangeToPathRange(e){if(!this.context||!this.tree)throw new $(J.ErrNotInitialized,"Tree is not initialized yet");const n=[$n.fromStruct(e[0]),$n.fromStruct(e[1])];return this.tree.posRangeToPathRange(n)}}function ef(r,e){return Kd(r,e)}function qi(r,e){if(e){if(e instanceof Ht)return e;if(e instanceof Sn)return Kd(r,e);if(e instanceof Rn)return iv(r,e);if(e instanceof Bn)return new Ws(r,e);if(e instanceof In){const n=new qs(jn.Int,0);return n.initialize(r,e),n}else if(e instanceof kn){const n=new Js;return n.initialize(r,e),n}}else return;throw new TypeError(`Unsupported type of element: ${typeof e}`)}function mr(r,e){const n=qi(r,e);return n instanceof Ht?n.getValue():n}function Ec(r,e,n){let o;if(Ht.isSupport(e))o=Ht.of(e,n);else if(Array.isArray(e))o=Rn.create(n,Yt.buildArrayElements(r,e));else if(typeof e=="object")e instanceof Ws?(o=Bn.create(Wr.create(),n),e.initialize(r,o)):e instanceof qs?(o=In.create(e.getValueType(),e.getValue(),n),e.initialize(r,o)):e instanceof Js?(o=kn.create(e.buildRoot(r),n),e.initialize(r,o)):o=Sn.create(n,Gs.buildObjectMembers(r,e));else throw new TypeError(`Unsupported type of value: ${typeof e}`);return o}const tf=50;class hv{constructor(){c(this,"undoStack",[]),c(this,"redoStack",[])}hasUndo(){return this.undoStack.length>0}hasRedo(){return this.redoStack.length>0}pushUndo(e){this.undoStack.length>=tf&&this.undoStack.shift(),this.undoStack.push(e)}popUndo(){return this.undoStack.pop()}pushRedo(e){this.redoStack.length>=tf&&this.redoStack.shift(),this.redoStack.push(e)}popRedo(){return this.redoStack.pop()}clearRedo(){this.redoStack=[]}getUndoStackForTest(){return this.undoStack}getRedoStackForTest(){return this.redoStack}}const nf="yorkie-devtools-panel",rf="yorkie-devtools-sdk";function sf(r){return[cn.StatusChanged,cn.Snapshot,cn.LocalChange,cn.RemoteChange,cn.Initialized,cn.Watched,cn.Unwatched,cn.PresenceChanged].includes(r.type)}function of(r){return r.every(sf)}const uv=Object.freeze(Object.defineProperty({__proto__:null,isDocEventForReplay:sf,isDocEventsForReplay:of},Symbol.toStringTag,{value:"Module"}));let $r="disconnected";const af=new Map,Mc=new Map;typeof window<"u"&&(window.docEventsForReplayByDocKey=Mc);function wc(r,e){(e!=null&&e.force||$r!=="disconnected")&&window.postMessage({source:rf,...r},"*")}function dv(r){if(!r.isEnableDevtools()||typeof window>"u"||af.has(r.getKey()))return;Mc.set(r.getKey(),[]);const e=r.subscribe("all",n=>{of(n)&&(Mc.get(r.getKey()).push(n),$r==="synced"&&wc({msg:"doc::sync::partial",docKey:r.getKey(),event:n}))});af.set(r.getKey(),[e]),wc({msg:"refresh-devtools"},{force:!0}),window.addEventListener("message",n=>{var o;if(((o=n.data)==null?void 0:o.source)!==nf)return;switch(n.data.msg){case"devtools::connect":if($r!=="disconnected")break;$r="connected",wc({msg:"doc::available",docKey:r.getKey()}),Je.info(`[YD] Devtools connected. Doc: ${r.getKey()}`);break;case"devtools::disconnect":$r="disconnected",Je.info(`[YD] Devtools disconnected. Doc: ${r.getKey()}`);break;case"devtools::subscribe":$r="synced",wc({msg:"doc::sync::full",docKey:r.getKey(),events:Mc.get(r.getKey())}),Je.info(`[YD] Devtools subscribed. Doc: ${r.getKey()}`);break}})}var wi=(r=>(r.Detached="detached",r.Attached="attached",r.Removed="removed",r))(wi||{}),cn=(r=>(r.StatusChanged="status-changed",r.ConnectionChanged="connection-changed",r.SyncStatusChanged="sync-status-changed",r.Snapshot="snapshot",r.LocalChange="local-change",r.RemoteChange="remote-change",r.Initialized="initialized",r.Watched="watched",r.Unwatched="unwatched",r.PresenceChanged="presence-changed",r.Broadcast="broadcast",r.LocalBroadcast="local-broadcast",r.AuthError="auth-error",r))(cn||{}),Ac=(r=>(r.Connected="connected",r.Disconnected="disconnected",r))(Ac||{}),bc=(r=>(r.Synced="synced",r.SyncFailed="sync-failed",r))(bc||{});class Xl{constructor(e,n){c(this,"key"),c(this,"status"),c(this,"opts"),c(this,"changeID"),c(this,"checkpoint"),c(this,"localChanges"),c(this,"root"),c(this,"clone"),c(this,"eventStream"),c(this,"eventStreamObserver"),c(this,"onlineClients"),c(this,"presences"),c(this,"history"),c(this,"internalHistory"),c(this,"isUpdating"),this.opts=n||{},this.key=e,this.status="detached",this.root=Hs.create(),this.changeID=fg,this.checkpoint=pg,this.localChanges=[],this.eventStream=nv(o=>{this.eventStreamObserver=o}),this.onlineClients=new Set,this.presences=new Map,this.isUpdating=!1,this.internalHistory=new hv,this.history={canUndo:this.canUndo.bind(this),canRedo:this.canRedo.bind(this),undo:this.undo.bind(this),redo:this.redo.bind(this)},dv(this)}update(e,n){if(this.getStatus()==="removed")throw new $(J.ErrDocumentRemoved,`${this.key} is removed`);this.ensureClone();const o=this.changeID.getActorID(),l=Xr.create(this.changeID.next(),this.clone.root,this.clone.presences.get(o)||{},n);try{const d=ef(l,this.clone.root.getObject());this.presences.has(o)||this.clone.presences.set(o,{}),this.isUpdating=!0,e(d,new fc(l,this.clone.presences.get(o)))}catch(d){throw this.clone=void 0,d}finally{this.isUpdating=!1}if(l.hasChange()){Je.isEnabled(dn.Trivial)&&Je.trivial(`trying to update a local change: ${this.toJSON()}`);const d=l.getChange(),{opInfos:p,reverseOps:y}=d.execute(this.root,this.presences,It.Local),A=l.getReversePresence();A&&y.push({type:"presence",value:A}),this.localChanges.push(d),y.length>0&&this.internalHistory.pushUndo(y),p.length>0&&this.internalHistory.clearRedo(),this.changeID=d.getID();const I=[];p.length>0&&I.push({type:"local-change",source:It.Local,value:{message:d.getMessage()||"",operations:p,actor:o,clientSeq:d.getID().getClientSeq(),serverSeq:d.getID().getServerSeq()},rawChange:this.isEnableDevtools()?d.toStruct():void 0}),d.hasPresenceChange()&&I.push({type:"presence-changed",source:It.Local,value:{clientID:o,presence:this.getPresence(o)}}),this.publish(I),Je.isEnabled(dn.Trivial)&&Je.trivial(`after update a local change: ${this.toJSON()}`)}}subscribe(e,n,o,l){if(typeof e=="string"){if(typeof n!="function")throw new $(J.ErrInvalidArgument,"Second argument must be a callback function");if(e==="presence"){const y=n;return this.eventStream.subscribe(A=>{for(const I of A)I.type!=="initialized"&&I.type!=="watched"&&I.type!=="unwatched"&&I.type!=="presence-changed"||y(I)},o,l)}if(e==="my-presence"){const y=n;return this.eventStream.subscribe(A=>{for(const I of A)I.type!=="initialized"&&I.type!=="presence-changed"||I.type==="presence-changed"&&I.value.clientID!==this.changeID.getActorID()||y(I)},o,l)}if(e==="others"){const y=n;return this.eventStream.subscribe(A=>{for(const I of A)I.type!=="watched"&&I.type!=="unwatched"&&I.type!=="presence-changed"||I.value.clientID!==this.changeID.getActorID()&&y(I)},o,l)}if(e==="connection"){const y=n;return this.eventStream.subscribe(A=>{for(const I of A)I.type==="connection-changed"&&y(I)},o,l)}if(e==="status"){const y=n;return this.eventStream.subscribe(A=>{for(const I of A)I.type==="status-changed"&&y(I)},o,l)}if(e==="sync"){const y=n;return this.eventStream.subscribe(A=>{for(const I of A)I.type==="sync-status-changed"&&y(I)},o,l)}if(e==="local-broadcast"){const y=n;return this.eventStream.subscribe(A=>{for(const I of A)I.type==="local-broadcast"&&y(I)},o)}if(e==="broadcast"){const y=n;return this.eventStream.subscribe(A=>{for(const I of A)I.type==="broadcast"&&y(I)},o)}if(e==="auth-error"){const y=n;return this.eventStream.subscribe(A=>{for(const I of A)I.type==="auth-error"&&y(I)},o)}if(e==="all"){const y=n;return this.eventStream.subscribe(y,o,l)}const d=e,p=n;return this.eventStream.subscribe(y=>{for(const A of y){if(A.type!=="local-change"&&A.type!=="remote-change")continue;const I=[];for(const B of A.value.operations)this.isSameElementOrChildOf(B.path,d)&&I.push(B);I.length&&p({...A,value:{...A.value,operations:I}})}},o,l)}if(typeof e=="function"){const d=e,p=n,y=o;return this.eventStream.subscribe(A=>{for(const I of A)I.type!=="snapshot"&&I.type!=="local-change"&&I.type!=="remote-change"||d(I)},p,y)}throw new $(J.ErrInvalidArgument,`"${e}" is not a valid`)}publish(e){this.eventStreamObserver&&this.eventStreamObserver.next(e)}isSameElementOrChildOf(e,n){if(n===e)return!0;const o=e.split(".");return n.split(".").every((d,p)=>d===o[p])}removePushedLocalChanges(e){for(;this.localChanges.length&&!(this.localChanges[0].getID().getClientSeq()>e);)this.localChanges.shift()}applyChangePack(e){const n=e.hasSnapshot();n?this.applySnapshot(e.getCheckpoint().getServerSeq(),e.getVersionVector(),e.getSnapshot(),e.getCheckpoint().getClientSeq()):(this.applyChanges(e.getChanges(),It.Remote),this.removePushedLocalChanges(e.getCheckpoint().getClientSeq())),this.checkpoint=this.checkpoint.forward(e.getCheckpoint()),n||this.garbageCollect(e.getVersionVector()),e.getIsRemoved()&&this.applyStatus("removed"),Je.isEnabled(dn.Trivial)&&Je.trivial(`${this.root.toJSON()}`)}getCheckpoint(){return this.checkpoint}getChangeID(){return this.changeID}hasLocalChanges(){return this.localChanges.length>0}ensureClone(){this.clone||(this.clone={root:this.root.deepcopy(),presences:Wn(this.presences)})}createChangePack(){const e=Array.from(this.localChanges),n=this.checkpoint.increaseClientSeq(e.length);return _c.create(this.key,n,!1,e,this.getVersionVector())}setActor(e){for(const n of this.localChanges)n.setActor(e);this.changeID=this.changeID.setActor(e)}isEnableDevtools(){return!!this.opts.enableDevtools}getKey(){return this.key}getStatus(){return this.status}getCloneRoot(){if(this.clone)return this.clone.root.getObject()}getRoot(){this.ensureClone();const e=Xr.create(this.changeID.next(),this.clone.root,this.clone.presences.get(this.changeID.getActorID())||{});return ef(e,this.clone.root.getObject())}getDocSize(){return this.root.getDocSize()}garbageCollect(e){return this.opts.disableGC?0:(this.clone&&this.clone.root.garbageCollect(e),this.root.garbageCollect(e))}getRootObject(){return this.root.getObject()}getGarbageLen(){return this.root.getGarbageLen()}getGarbageLenFromClone(){return this.clone.root.getGarbageLen()}toJSON(){return this.root.toJSON()}toSortedJSON(){return this.root.toSortedJSON()}getStats(){return this.root.getStats()}toJSForTest(){return{...this.getRoot().toJSForTest(),key:"root"}}applySnapshot(e,n,o,l=-1){const{root:d,presences:p}=$t.bytesToSnapshot(o);this.root=new Hs(d),this.presences=p,this.changeID=this.changeID.setClocks(n.maxLamport(),n),this.clone=void 0,this.removePushedLocalChanges(l),this.applyChanges(this.localChanges,It.Local),this.publish([{type:"snapshot",source:It.Remote,value:{serverSeq:e.toString(),snapshot:this.isEnableDevtools()?$t.bytesToHex(o):void 0,snapshotVector:$t.versionVectorToHex(n)}}])}applyChanges(e,n){Je.isEnabled(dn.Debug)&&Je.debug(`trying to apply ${e.length} remote changes.elements:${this.root.getElementMapSize()}, removeds:${this.root.getGarbageElementSetSize()}`),Je.isEnabled(dn.Trivial)&&Je.trivial(e.map(o=>`${o.getID().toTestString()}	${o.toTestString()}`).join(`
`));for(const o of e)this.applyChange(o,n);Je.isEnabled(dn.Debug)&&Je.debug(`after appling ${e.length} remote changes.elements:${this.root.getElementMapSize()},  removeds:${this.root.getGarbageElementSetSize()}`)}applyChange(e,n){this.ensureClone(),e.execute(this.clone.root,this.clone.presences,n);const o=[],l=e.getID().getActorID();if(e.hasPresenceChange()&&this.onlineClients.has(l)){const p=e.getPresenceChange();switch(p.type){case Bi.Put:o.push(this.presences.has(l)?{type:"presence-changed",source:n,value:{clientID:l,presence:p.presence}}:{type:"watched",source:It.Remote,value:{clientID:l,presence:p.presence}});break;case Bi.Clear:o.push({type:"unwatched",source:It.Remote,value:{clientID:l,presence:this.getPresence(l)}}),this.removeOnlineClient(l);break}}const{opInfos:d}=e.execute(this.root,this.presences,n);if(this.changeID=this.changeID.syncClocks(e.getID()),d.length>0){const p=this.isEnableDevtools()?e.toStruct():void 0;o.push(n===It.Remote?{type:"remote-change",source:n,value:{actor:l,clientSeq:e.getID().getClientSeq(),serverSeq:e.getID().getServerSeq(),message:e.getMessage()||"",operations:d},rawChange:p}:{type:"local-change",source:n,value:{actor:l,clientSeq:e.getID().getClientSeq(),serverSeq:e.getID().getServerSeq(),message:e.getMessage()||"",operations:d},rawChange:p})}o.length>0&&this.publish(o)}applyWatchStream(e){if(e.body.case==="initialization"){const n=e.body.value.clientIds,o=new Set;for(const l of n)l!==this.changeID.getActorID()&&o.add(l);this.setOnlineClients(o),this.publish([{type:"initialized",source:It.Local,value:this.getPresences()}]);return}if(e.body.case==="event"){const{type:n,publisher:o}=e.body.value,l=[];if(n===or.DOCUMENT_WATCHED){if(this.onlineClients.has(o)&&this.hasPresence(o))return;this.addOnlineClient(o),this.hasPresence(o)&&l.push({type:"watched",source:It.Remote,value:{clientID:o,presence:this.getPresence(o)}})}else if(n===or.DOCUMENT_UNWATCHED){const d=this.getPresence(o);this.removeOnlineClient(o),d&&l.push({type:"unwatched",source:It.Remote,value:{clientID:o,presence:d}})}else if(n===or.DOCUMENT_BROADCAST&&e.body.value.body){const{topic:d,payload:p}=e.body.value.body,y=new TextDecoder;l.push({type:"broadcast",value:{clientID:o,topic:d,payload:JSON.parse(y.decode(p))}})}l.length>0&&this.publish(l)}}applyStatus(e){this.status=e,e==="detached"&&this.setActor(pc),this.publish([{source:e==="removed"?It.Remote:It.Local,type:"status-changed",value:e==="attached"?{status:e,actorID:this.changeID.getActorID()}:{status:e}}])}applyDocEventForReplay(e){if(e.type==="status-changed"){this.applyStatus(e.value.status),e.value.status==="attached"&&this.setActor(e.value.actorID);return}if(e.type==="snapshot"){const{snapshot:n,serverSeq:o,snapshotVector:l}=e.value;if(!n)return;this.applySnapshot(BigInt(o),$t.hexToVersionVector(l),$t.hexToBytes(n));return}if(e.type==="local-change"||e.type==="remote-change"){if(!e.rawChange)return;const n=fr.fromStruct(e.rawChange);this.applyChange(n,e.source)}if(e.type==="initialized"){const n=new Set;for(const{clientID:o,presence:l}of e.value)n.add(o),this.presences.set(o,l);this.setOnlineClients(n);return}if(e.type==="watched"){const{clientID:n,presence:o}=e.value;this.addOnlineClient(n),this.presences.set(n,o);return}if(e.type==="unwatched"){const{clientID:n}=e.value;this.removeOnlineClient(n),this.presences.delete(n)}if(e.type==="presence-changed"){const{clientID:n,presence:o}=e.value;this.presences.set(n,o)}}applyDocEventsForReplay(e){for(const n of e)this.applyDocEventForReplay(n)}getValueByPath(e){if(!e.startsWith("$"))throw new $(J.ErrInvalidArgument,'path must start with "$"');const n=e.split(".");n.shift();let o=this.getRoot();for(const l of n)if(o=o[l],o===void 0)return;return o}setOnlineClients(e){this.onlineClients=e}resetOnlineClients(){this.onlineClients=new Set}addOnlineClient(e){this.onlineClients.add(e)}removeOnlineClient(e){this.onlineClients.delete(e)}hasPresence(e){return this.presences.has(e)}getMyPresence(){if(this.status!=="attached")return{};const e=this.presences.get(this.changeID.getActorID());return e?Wn(e):{}}getPresence(e){if(e===this.changeID.getActorID())return this.getMyPresence();if(!this.onlineClients.has(e))return;const n=this.presences.get(e);return n?Wn(n):void 0}getPresenceForTest(e){const n=this.presences.get(e);return n?Wn(n):void 0}getPresences(){const e=[];e.push({clientID:this.changeID.getActorID(),presence:Wn(this.getMyPresence())});for(const n of this.onlineClients)this.presences.has(n)&&e.push({clientID:n,presence:Wn(this.presences.get(n))});return e}getSelfForTest(){return{clientID:this.getChangeID().getActorID(),presence:this.getMyPresence()}}getOthersForTest(){const e=this.getChangeID().getActorID();return this.getPresences().filter(n=>n.clientID!==e).sort((n,o)=>n.clientID>o.clientID?1:-1)}canUndo(){return this.internalHistory.hasUndo()&&!this.isUpdating}filterVersionVector(e){const o=this.changeID.getVersionVector().filter(e);this.changeID=this.changeID.setVersionVector(o)}canRedo(){return this.internalHistory.hasRedo()&&!this.isUpdating}undo(){if(this.isUpdating)throw new $(J.ErrRefused,"Undo is not allowed during an update");const e=this.internalHistory.popUndo();if(e===void 0)throw new $(J.ErrRefused,"There is no operation to be undone");this.ensureClone();const n=Xr.create(this.changeID.next(),this.clone.root,this.clone.presences.get(this.changeID.getActorID())||{});for(const I of e){if(!(I instanceof Jn)){new fc(n,Wn(this.clone.presences.get(this.changeID.getActorID()))).set(I.value,{addToHistory:!0});continue}const B=n.issueTimeTicket();I.setExecutedAt(B),n.push(I)}const o=n.getChange();o.execute(this.clone.root,this.clone.presences,It.UndoRedo);const{opInfos:l,reverseOps:d}=o.execute(this.root,this.presences,It.UndoRedo),p=n.getReversePresence();if(p&&d.push({type:"presence",value:p}),d.length>0&&this.internalHistory.pushRedo(d),!o.hasPresenceChange()&&l.length===0)return;this.localChanges.push(o),this.changeID=o.getID();const y=this.changeID.getActorID(),A=[];l.length>0&&A.push({type:"local-change",source:It.UndoRedo,value:{message:o.getMessage()||"",operations:l,actor:y,clientSeq:o.getID().getClientSeq(),serverSeq:o.getID().getServerSeq()},rawChange:this.isEnableDevtools()?o.toStruct():void 0}),o.hasPresenceChange()&&A.push({type:"presence-changed",source:It.UndoRedo,value:{clientID:y,presence:this.getPresence(y)}}),this.publish(A)}redo(){if(this.isUpdating)throw new $(J.ErrRefused,"Redo is not allowed during an update");const e=this.internalHistory.popRedo();if(e===void 0)throw new $(J.ErrRefused,"There is no operation to be redone");this.ensureClone();const n=Xr.create(this.changeID.next(),this.clone.root,this.clone.presences.get(this.changeID.getActorID())||{});for(const I of e){if(!(I instanceof Jn)){new fc(n,Wn(this.clone.presences.get(this.changeID.getActorID()))).set(I.value,{addToHistory:!0});continue}const B=n.issueTimeTicket();I.setExecutedAt(B),n.push(I)}const o=n.getChange();o.execute(this.clone.root,this.clone.presences,It.UndoRedo);const{opInfos:l,reverseOps:d}=o.execute(this.root,this.presences,It.UndoRedo),p=n.getReversePresence();if(p&&d.push({type:"presence",value:p}),d.length>0&&this.internalHistory.pushUndo(d),!o.hasPresenceChange()&&l.length===0)return;this.localChanges.push(o),this.changeID=o.getID();const y=this.changeID.getActorID(),A=[];l.length>0&&A.push({type:"local-change",source:It.UndoRedo,value:{message:o.getMessage()||"",operations:l,actor:y,clientSeq:o.getID().getClientSeq(),serverSeq:o.getID().getServerSeq()},rawChange:this.isEnableDevtools()?o.toStruct():void 0}),o.hasPresenceChange()&&A.push({type:"presence-changed",source:It.UndoRedo,value:{clientID:y,presence:this.getPresence(y)}}),this.publish(A)}getUndoStackForTest(){return this.internalHistory.getUndoStackForTest()}getRedoStackForTest(){return this.internalHistory.getRedoStackForTest()}broadcast(e,n,o){const l={type:"local-broadcast",value:{topic:e,payload:n},options:o};this.publish([l])}getVersionVector(){return this.changeID.getVersionVector()}}function fv(r,e){let n=e;return{authInterceptor:d=>async p=>(r&&p.header.set("x-api-key",r),n&&p.header.set("authorization",n),await d(p)),setToken:d=>{n=d}}}const cf={name:"@yorkie-js/sdk",version:"0.6.9"};function pv(r){return e=>async n=>(r?n.header.set("x-yorkie-user-agent",r):n.header.set("x-yorkie-user-agent",cf.name+"/"+cf.version),await e(n))}const mv=r=>{try{if(JSON.stringify(r)===void 0)return!1}catch{return!1}return!0};var Xs=(r=>(r.Manual="manual",r.Realtime="realtime",r.RealtimePushOnly="realtime-pushonly",r.RealtimeSyncOff="realtime-syncoff",r))(Xs||{}),lf=(r=>(r.Deactivated="deactivated",r.Activated="activated",r))(lf||{}),hf=(r=>(r.SyncLoop="SyncLoop",r.WatchLoop="WatchLoop",r))(hf||{});const $s={rpcAddr:"https://api.yorkie.dev",syncLoopDuration:50,retrySyncLoopDelay:1e3,reconnectStreamDelay:1e3},$l={maxRetries:1/0,initialRetryInterval:1e3,maxBackoff:2e4};class Yl{constructor(e){c(this,"id"),c(this,"key"),c(this,"metadata"),c(this,"status"),c(this,"attachmentMap"),c(this,"apiKey"),c(this,"authTokenInjector"),c(this,"conditions"),c(this,"syncLoopDuration"),c(this,"reconnectStreamDelay"),c(this,"retrySyncLoopDelay"),c(this,"rpcClient"),c(this,"setAuthToken"),c(this,"taskQueue"),c(this,"processing",!1),c(this,"keepalive",!1),e=e||$s;const n=e.rpcAddr||$s.rpcAddr;this.key=e.key||jd(),this.metadata=e.metadata||{},this.status="deactivated",this.attachmentMap=new Map,this.apiKey=e.apiKey||"",this.authTokenInjector=e.authTokenInjector,this.conditions={SyncLoop:!1,WatchLoop:!1},this.syncLoopDuration=e.syncLoopDuration??$s.syncLoopDuration,this.reconnectStreamDelay=e.reconnectStreamDelay??$s.reconnectStreamDelay,this.retrySyncLoopDelay=e.retrySyncLoopDelay??$s.retrySyncLoopDelay;const{authInterceptor:o,setToken:l}=fv(this.apiKey);this.setAuthToken=l,this.rpcClient=nm($m,Mm({baseUrl:n,interceptors:[o,pv(e==null?void 0:e.userAgent)],fetch:(d,p)=>{const y={...p,keepalive:this.keepalive};return fetch(d,y)}})),this.taskQueue=[]}async activate(){if(this.isActive())return Promise.resolve();if(this.authTokenInjector){const e=await this.authTokenInjector();this.setAuthToken(e)}return this.enqueueTask(async()=>{try{const e=await this.rpcClient.activateClient({clientKey:this.key,metadata:this.metadata},{headers:{"x-shard-key":this.apiKey}});this.id=e.clientId,this.status="activated",this.runSyncLoop(),Je.info(`[AC] c:"${this.getKey()}" activated, id:"${this.id}"`),typeof window<"u"&&window.addEventListener("beforeunload",async()=>{await this.deactivate({keepalive:!0})})}catch(e){throw Je.error(`[AC] c:"${this.getKey()}" err :`,e),await this.handleConnectError(e),e}})}deactivate(e={keepalive:!1}){if(this.status==="deactivated")return Promise.resolve();const n=async()=>{try{await this.rpcClient.deactivateClient({clientId:this.id},{headers:{"x-shard-key":this.apiKey}}),this.deactivateInternal(),Je.info(`[DC] c"${this.getKey()}" deactivated`)}catch(o){throw Je.error(`[DC] c:"${this.getKey()}" err :`,o),await this.handleConnectError(o),o}};if(e.keepalive){this.keepalive=!0;const o=n();return this.keepalive=!1,o}return this.enqueueTask(n)}hasDocument(e){return this.attachmentMap.has(e)}attach(e,n={}){if(!this.isActive())throw new $(J.ErrClientNotActivated,`${this.key} is not active`);if(e.getStatus()!==wi.Detached)throw new $(J.ErrDocumentNotDetached,`${e.getKey()} is not detached`);e.setActor(this.id),e.update((d,p)=>p.set(n.initialPresence||{}));const o=e.subscribe("local-broadcast",async d=>{var p;const{topic:y,payload:A}=d.value,I=(p=d.options)==null?void 0:p.error,B=d.options;try{await this.broadcast(e.getKey(),y,A,B)}catch(ie){ie instanceof Error&&(I==null||I(ie))}}),l=n.syncMode??"realtime";return this.enqueueTask(async()=>{try{const d=await this.rpcClient.attachDocument({clientId:this.id,changePack:$t.toChangePack(e.createChangePack())},{headers:{"x-shard-key":`${this.apiKey}/${e.getKey()}`}}),p=$t.fromChangePack(d.changePack);if(e.applyChangePack(p),e.getStatus()===wi.Removed)return e;e.applyStatus(wi.Attached),this.attachmentMap.set(e.getKey(),new ev(this.reconnectStreamDelay,e,d.documentId,l,o)),l!=="manual"&&await this.runWatchLoop(e.getKey()),Je.info(`[AD] c:"${this.getKey()}" attaches d:"${e.getKey()}"`);const y=e.getRootObject();if(n.initialRoot){const A=n.initialRoot;e.update(I=>{for(const[B,ie]of Object.entries(A))if(!y.has(B)){const de=B;I[de]=ie}})}return e}catch(d){throw Je.error(`[AD] c:"${this.getKey()}" err :`,d),await this.handleConnectError(d),d}})}detach(e,n={keepalive:!1}){if(!this.isActive())throw new $(J.ErrClientNotActivated,`${this.key} is not active`);const o=this.attachmentMap.get(e.getKey());if(!o)throw new $(J.ErrDocumentNotAttached,`${e.getKey()} is not attached`);e.update((d,p)=>p.clear());const l=async()=>{try{const d=await this.rpcClient.detachDocument({clientId:this.id,documentId:o.docID,changePack:$t.toChangePack(e.createChangePack()),removeIfNotAttached:n.removeIfNotAttached??!1},{headers:{"x-shard-key":`${this.apiKey}/${e.getKey()}`}}),p=$t.fromChangePack(d.changePack);return e.applyChangePack(p),e.getStatus()!==wi.Removed&&e.applyStatus(wi.Detached),this.detachInternal(e.getKey()),Je.info(`[DD] c:"${this.getKey()}" detaches d:"${e.getKey()}"`),e}catch(d){throw Je.error(`[DD] c:"${this.getKey()}" err :`,d),await this.handleConnectError(d),d}};if(n.keepalive){this.keepalive=!0;const d=l();return this.keepalive=!1,d}return this.enqueueTask(l)}async changeSyncMode(e,n){if(!this.isActive())throw new $(J.ErrClientNotActivated,`${this.key} is not active`);const o=this.attachmentMap.get(e.getKey());if(!o)throw new $(J.ErrDocumentNotAttached,`${e.getKey()} is not attached`);const l=o.syncMode;return l===n?e:(o.changeSyncMode(n),n==="manual"?(o.cancelWatchStream(),e):(n==="realtime"&&(o.remoteChangeEventReceived=!0),l==="manual"&&await this.runWatchLoop(e.getKey()),e))}sync(e){if(!this.isActive())throw new $(J.ErrClientNotActivated,`${this.key} is not active`);if(e){const n=this.attachmentMap.get(e.getKey());if(!n)throw new $(J.ErrDocumentNotAttached,`${e.getKey()} is not attached`);return this.enqueueTask(async()=>this.syncInternal(n,"realtime").catch(async o=>{throw Je.error(`[SY] c:"${this.getKey()}" err :`,o),await this.handleConnectError(o),o}))}return this.enqueueTask(async()=>{const n=[];for(const[,o]of this.attachmentMap)n.push(this.syncInternal(o,o.syncMode));return Promise.all(n).catch(async o=>{throw Je.error(`[SY] c:"${this.getKey()}" err :`,o),await this.handleConnectError(o),o})})}remove(e){if(!this.isActive())throw new $(J.ErrClientNotActivated,`${this.key} is not active`);const n=this.attachmentMap.get(e.getKey());if(!n)throw new $(J.ErrDocumentNotAttached,`${e.getKey()} is not attached`);e.setActor(this.id);const o=$t.toChangePack(e.createChangePack());return o.isRemoved=!0,this.enqueueTask(async()=>{try{const l=await this.rpcClient.removeDocument({clientId:this.id,documentId:n.docID,changePack:o},{headers:{"x-shard-key":`${this.apiKey}/${e.getKey()}`}}),d=$t.fromChangePack(l.changePack);e.applyChangePack(d),this.detachInternal(e.getKey()),Je.info(`[RD] c:"${this.getKey()}" removes d:"${e.getKey()}"`)}catch(l){throw Je.error(`[RD] c:"${this.getKey()}" err :`,l),await this.handleConnectError(l),l}})}getID(){return this.id}getKey(){return this.key}isActive(){return this.status==="activated"}getStatus(){return this.status}getCondition(e){return this.conditions[e]}broadcast(e,n,o,l){if(!this.isActive())throw new $(J.ErrClientNotActivated,`${this.key} is not active`);const d=this.attachmentMap.get(e);if(!d)throw new $(J.ErrDocumentNotAttached,`${e} is not attached`);if(!mv(o))throw new $(J.ErrInvalidArgument,"payload is not serializable");const p=(l==null?void 0:l.maxRetries)??$l.maxRetries,y=$l.maxBackoff;let A=0;const I=ie=>Math.min($l.initialRetryInterval*2**ie,y),B=async()=>this.enqueueTask(async()=>{try{await this.rpcClient.broadcast({clientId:this.id,documentId:d.docID,topic:n,payload:new TextEncoder().encode(JSON.stringify(o))},{headers:{"x-shard-key":`${this.apiKey}/${e}`}}),Je.info(`[BC] c:"${this.getKey()}" broadcasts d:"${e}" t:"${n}"`)}catch(ie){if(Je.error(`[BC] c:"${this.getKey()}" err:`,ie),await this.handleConnectError(ie))if(ie instanceof O&&Wi(ie)===J.ErrUnauthenticated&&d.doc.publish([{type:cn.AuthError,value:{reason:zs(ie).reason,method:"Broadcast"}}]),A<p)A++,setTimeout(()=>B(),I(A-1)),Je.info(`[BC] c:"${this.getKey()}" retry attempt ${A}/${p}`);else throw Je.error(`[BC] c:"${this.getKey()}" exceeded maximum retry attempts`),ie;else throw ie}});return B()}runSyncLoop(){const e=()=>{if(!this.isActive()){Je.debug(`[SL] c:"${this.getKey()}" exit sync loop`),this.conditions.SyncLoop=!1;return}const n=[];for(const[,o]of this.attachmentMap)o.needRealtimeSync()&&(o.remoteChangeEventReceived=!1,n.push(this.syncInternal(o,o.syncMode).catch(async l=>{throw l instanceof O&&Wi(l)===J.ErrUnauthenticated&&o.doc.publish([{type:cn.AuthError,value:{reason:zs(l).reason,method:"PushPull"}}]),l})));Promise.all(n).then(()=>setTimeout(e,this.syncLoopDuration)).catch(async o=>{Je.error(`[SL] c:"${this.getKey()}" sync failed:`,o),await this.handleConnectError(o)?setTimeout(e,this.retrySyncLoopDelay):this.conditions.SyncLoop=!1})};Je.debug(`[SL] c:"${this.getKey()}" run sync loop`),this.conditions.SyncLoop=!0,e()}async runWatchLoop(e){const n=this.attachmentMap.get(e);if(!n)throw new $(J.ErrDocumentNotAttached,`${e} is not attached`);return this.conditions.WatchLoop=!0,n.runWatchLoop(o=>{if(!this.isActive())return this.conditions.WatchLoop=!1,Promise.reject(new $(J.ErrClientNotActivated,`${this.key} is not active`));const l=new AbortController,d=this.rpcClient.watchDocument({clientId:this.id,documentId:n.docID},{headers:{"x-shard-key":`${this.apiKey}/${e}`},signal:l.signal});return n.doc.publish([{type:cn.ConnectionChanged,value:Ac.Connected}]),Je.info(`[WD] c:"${this.getKey()}" watches d:"${e}"`),new Promise((p,y)=>{(async()=>{try{for await(const I of d)this.handleWatchDocumentsResponse(n,I),I.body.case==="initialization"&&p([d,l])}catch(I){n.doc.resetOnlineClients(),n.doc.publish([{type:cn.Initialized,source:It.Local,value:n.doc.getPresences()}]),n.doc.publish([{type:cn.ConnectionChanged,value:Ac.Disconnected}]),Je.debug(`[WD] c:"${this.getKey()}" unwatches`),await this.handleConnectError(I)?(I instanceof O&&Wi(I)===J.ErrUnauthenticated&&n.doc.publish([{type:cn.AuthError,value:{reason:zs(I).reason,method:"WatchDocuments"}}]),o()):this.conditions.WatchLoop=!1,y(I)}})()})})}handleWatchDocumentsResponse(e,n){if(n.body.case==="event"&&n.body.value.type===or.DOCUMENT_CHANGED){e.remoteChangeEventReceived=!0;return}e.doc.applyWatchStream(n)}deactivateInternal(){this.status="deactivated";for(const[e,n]of this.attachmentMap)this.detachInternal(e),n.doc.applyStatus(wi.Detached)}detachInternal(e){const n=this.attachmentMap.get(e);n&&(n.cancelWatchStream(),n.unsubscribeBroadcastEvent(),this.attachmentMap.delete(e))}async syncInternal(e,n){const{doc:o,docID:l}=e,d=o.createChangePack();try{const p=await this.rpcClient.pushPullChanges({clientId:this.id,documentId:l,changePack:$t.toChangePack(d),pushOnly:n==="realtime-pushonly"},{headers:{"x-shard-key":`${this.apiKey}/${o.getKey()}`}}),y=$t.fromChangePack(p.changePack);if(y.hasChanges()&&(e.syncMode==="realtime-pushonly"||e.syncMode==="realtime-syncoff"))return o;o.applyChangePack(y),e.doc.publish([{type:cn.SyncStatusChanged,value:bc.Synced}]),o.getStatus()===wi.Removed&&this.detachInternal(o.getKey());const A=o.getKey(),I=y.getChangeSize();return Je.info(`[PP] c:"${this.getKey()}" sync d:"${A}", push:${d.getChangeSize()} pull:${I} cp:${y.getCheckpoint().toTestString()}`),o}catch(p){throw o.publish([{type:cn.SyncStatusChanged,value:bc.SyncFailed}]),Je.error(`[PP] c:"${this.getKey()}" err :`,p),p}}async handleConnectError(e){if(!(e instanceof O))return!1;if(e.code===_.Canceled||e.code===_.Unknown||e.code===_.ResourceExhausted||e.code===_.Unavailable)return!0;if(Wi(e)===J.ErrUnauthenticated){if(this.authTokenInjector){const n=await this.authTokenInjector(zs(e).reason);this.setAuthToken(n)}return!0}return Wi(e)===J.ErrTooManySubscribers?(Je.error(`[WD] c:"${this.getKey()}" err :`,e.rawMessage),!0):(Wi(e)===J.ErrTooManyAttachments||(Wi(e)===J.ErrClientNotActivated||Wi(e)===J.ErrClientNotFound)&&this.deactivateInternal(),!1)}enqueueTask(e){return new Promise((n,o)=>{this.taskQueue.push(()=>e().then(n).catch(o)),this.processing||this.processNext()})}async processNext(){if(this.taskQueue.length===0){this.processing=!1;return}try{this.processing=!0,await this.taskQueue.shift()()}catch{Je.error(`[TQ] c:"${this.getKey()}" process failed, id:"${this.id}"`)}this.processNext()}}const gv={Client:Yl,Document:Xl,Primitive:Ht,Text:Ws,Counter:qs,Tree:Js,LogLevel:dn,setLogLevel:Gl,IntType:jn.Int,LongType:jn.Long};typeof globalThis<"u"&&(globalThis.yorkie={Client:Yl,Document:Xl,Primitive:Ht,Text:Ws,Counter:qs,Tree:Js,LogLevel:dn,setLogLevel:Gl,IntType:jn.Int,LongType:jn.Long}),s.Change=fr,s.Client=Yl,s.ClientCondition=hf,s.ClientStatus=lf,s.Counter=qs,s.CounterType=jn,s.Devtools=uv,s.DocEventType=cn,s.DocStatus=wi,s.DocSyncStatus=bc,s.Document=Xl,s.EventSourceDevPanel=nf,s.EventSourceSDK=rf,s.LogLevel=dn,s.OpSource=It,s.Presence=fc,s.Primitive=Ht,s.StreamConnectionStatus=Ac,s.SyncMode=Xs,s.Text=Ws,s.TimeTicket=bn,s.Tree=Js,s.VersionVector=dr,s.converter=$t,s.default=gv,s.setLogLevel=Gl,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(no,no.exports)),no.exports}var $T=XT();const pp=qT($T);(async()=>{const a=new pp.Client({rpcAddr:"https://api.yorkie.dev",apiKey:"NkEe4AAYiM7PLfB8HzJNKX"});await a.activate();const t=new pp.Document("cube-rotation");await a.attach(t),t.update(_=>{_.lastRot||(_.lastRot=null),_.isBusy||(_.isBusy=!1)});const i=new O_;i.background=new At(16777215);const s=new Hn(75,innerWidth/innerHeight,.1,1e3);s.position.set(4,4,6);const h=new IT({antialias:!0});h.setSize(innerWidth,innerHeight),document.body.appendChild(h.domElement);const u=new DT(s,h.domElement);u.enableDamping=!0,u.enableZoom=!1,i.add(new W_(16777215,.4));const c=new G_(16777215,.8);c.position.set(5,10,7),i.add(c);const f={right:16711680,left:16744448,top:16776960,bottom:16777215,front:65280,back:255},m=new ys(.98,.98,.98),g=_=>new B_({color:_,side:Ui});function S(){return[g(f.right),g(f.left),g(f.top),g(f.bottom),g(f.front),g(f.back)]}const x=[];for(let _=-1;_<=1;_++)for(let v=-1;v<=1;v++)for(let O=-1;O<=1;O++){const F=new pi(m.clone(),S());F.position.set(_,v,O),i.add(F),x.push(F)}let T=!1;function E(_,v,O,F){if(T)return;T=!0;const D=x.filter(N=>Math.round(N.position[_])===v),q=new eo;D.forEach(N=>{i.remove(N),q.add(N)}),i.add(q);const H=Math.PI/2*O,z=300,X=performance.now();(function N(C){const k=Math.min((C-X)/z,1);if(q.rotation[_]=H*k,k<1)requestAnimationFrame(N);else{q.rotation[_]=H,q.updateMatrixWorld(!0);for(const oe of[...q.children])oe.position.copy(oe.getWorldPosition(new Y)).round(),oe.quaternion.copy(oe.getWorldQuaternion(new nr)),q.remove(oe),i.add(oe);i.remove(q),T=!1,F==null||F()}})(X)}const R=new J_,P=new at;addEventListener("mousemove",_=>{P.x=_.clientX/innerWidth*2-1,P.y=-(_.clientY/innerHeight)*2+1}),addEventListener("wheel",_=>{if(T||_.ctrlKey||_.metaKey)return;R.setFromCamera(P,s);const v=R.intersectObjects(x)[0];if(!v)return;const O=new Wt().extractRotation(s.matrixWorld),F=new Y(1,0,0).applyMatrix4(O),D=new Y(0,1,0).applyMatrix4(O),q=Math.abs(_.deltaY)>Math.abs(_.deltaX),H=q?F:D,z=(q?_.deltaY:_.deltaX)>0?1:-1;let X="x",N=-1;for(const k of["x","y","z"]){const oe=new Y(k==="x",k==="y",k==="z"),ne=Math.abs(oe.dot(H));ne>N&&(X=k,N=ne)}const C=Math.round(v.object.position[X]);E(X,C,z,()=>{t.update(k=>{k.lastRot.axis=X,k.lastRot.layer=C,k.lastRot.dir=z,k.lastRot.t=Date.now(),k.lastRot.sender=a.getID()})})}),t.subscribe("$.lastRot",_=>{if(t.getRoot().lastRot.sender===a.getID())return;const{axis:v,layer:O,dir:F}=t.getValueByPath("$.lastRot");E(v,O,F,()=>{t.update(D=>{D.isBusy=!1})})}),addEventListener("resize",()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),h.setSize(innerWidth,innerHeight)}),function _(){requestAnimationFrame(_),u.update(),h.render(i,s)}()})();
