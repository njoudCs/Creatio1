(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[7542],{89301:function(D,h,y){var b=this&&this.__assign||Object.assign||function(l){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(l[a]=t[a])}return l};Object.defineProperty(h,"__esModule",{value:!0});var f=y(63973),E=y(22382),v=y(71095),d=y(94413),s=function(){return!0},w=function(l){return l},g={flipKey:["key",w],flipNoScale:["noScale",function(){return!0}]},O=function(l){if(!("dataset"in l))return{};var t=l.dataset,r={};return Object.keys(t).forEach(function(n){if(g[n]){var a=g[n],u=a[0],c=a[1];r[u]=c(t[n])}else n.indexOf("flip")===0&&(r[n[4].toLowerCase()+n.slice(5)]=t[n])}),r},m=function(l,t){return t===void 0&&(t=E.KEY_ATTR),typeof l=="string"?function(r){var n=r.querySelectorAll(l),a={},u=[];return n.forEach(function(c){if(!!f.isVisible(c)){var M=c.getAttribute(t);!M||(a[M]=c,u.push(c))}}),u}:l},p=function(){function l(t){t===void 0&&(t={}),this.attribute=t.attribute||E.KEY_ATTR,this.selector=m(t.selector||"["+this.attribute+"]",this.attribute),this.active=t.active||s,this.activeSelector=t.activeSelector||f.isVisible,this.getBounds=t.getBounds||f.rect,this.getDelta=t.getDelta||f.getDelta,this.parentElement=t.parent||document.documentElement,this.plugins=t.plugins||[v.default,d.default],this.emitter=f.mitt(),t.onRead&&this.on("read",t.onRead),t.onFlip&&this.on("flip",t.onFlip),t.onEnter&&this.on("enter",t.onEnter),t.onLeave&&this.on("leave",t.onLeave),this.states={}}return l.prototype.getRelativeBounds=function(t,r){return b({},r,{top:r.top-t.top,left:r.left-t.left})},l.prototype.selectActive=function(t){var r=this,n=this.selector(t),a={},u=[];return n.forEach(function(c){if(!!r.activeSelector(c)){var M=c.getAttribute(r.attribute);!M||(a[M]=c,u.push(c))}}),u},l.prototype.findParent=function(t,r){r===void 0&&(r=this.parentElement);var n=t.getAttribute("data-flip-parent"),a=t.parentElement;if(n)for(;a&&a.getAttribute(this.attribute)!==n;)a=a.parentElement;else for(;a&&!a.hasAttribute(this.attribute);)a=a.parentElement;return a||r},l.prototype.dispatch=function(t,r){var n=this.plugins.reduce(function(a,u){return u(a,t)},r);this.emitter.emit(t,n)},l.prototype.on=function(t,r){this.emitter.on(t,r)},l.prototype.onFlip=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n,a;t.length===2?(n=t[0],a=t[1]):a=t[0],this.emitter.on("flip",n?function(u){var c=u[n];c&&a(c)}:a)},l.prototype.read=function(t){t===void 0&&(t={}),this.flip(b({},t,{readOnly:!0}))},l.prototype.flip=function(t){var r=this;t===void 0&&(t={});var n=t.parent||this.parentElement,a=this.selectActive(n),u={};return a.forEach(function(c,M){var i=c.getAttribute(r.attribute);if(!!i){var e=O(c),o=r.findParent(c,n),A=o.getAttribute(r.attribute),j=A?u[A]:void 0,T=r.getBounds(o),_=r.states[i],S=_&&_.type!=="LEAVE",P=r.getRelativeBounds(T,r.getBounds(c)),V=S&&_&&_.bounds?r.getDelta(_.bounds,P):void 0,R={type:S?"MOVE":"ENTER",key:i,element:c,bounds:P,delta:V,start:Date.now(),animation:S?_.animation:void 0,index:M,previous:_?{type:_.type,bounds:_.bounds,animation:_.animation,element:_.element,data:_.data}:void 0,parent:j,data:e};r.states[i]=u[i]=R}}),t.readOnly?this.dispatch("read",u):(Object.keys(this.states).forEach(function(c,M){if(!u[c]){var i=r.states[c];r.states[c]=u[c]={type:"LEAVE",key:c,element:void 0,bounds:void 0,start:Date.now(),animation:void 0,delta:void 0,index:M,parent:void 0,previous:{type:i.type,bounds:i.bounds,animation:i.animation,element:i.element}}}}),this.dispatch("flip",u))},l.prototype.setAnimation=function(t,r){this.states[t].animation=r},l.prototype.wrap=function(t,r){var n=this;return r===void 0&&(r={}),function(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];n.read(r);var c=t.apply(null,a);return n.flip(r),c}},l.prototype.progress=function(t,r){var n=this.states[t].delta;if(!!n)return l.progress(n,r)},l.progress=function(t,r){if(!t)return E.NO_DELTA;var n=1-r;return{top:t.top*n,left:t.left*n,width:t.width*n,height:t.height*n}},l.rect=f.rect,l.willScale=function(t){return!!(t&&t.element&&!t.element.hasAttribute("data-noflip")&&t.delta&&(t.delta.width!==1||t.delta.height!==1))},l.willMove=function(t){return!t||!t.delta?!1:t&&(t.delta.top!==0||t.delta.left!==0)},l}();h.default=p},27542:function(D,h,y){var b=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)n.hasOwnProperty(a)&&(r[a]=n[a])};return function(r,n){t(r,n);function a(){this.constructor=r}r.prototype=n===null?Object.create(n):(a.prototype=n.prototype,new a)}}(),f=this&&this.__assign||Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},E=y(89301),v=y(11090),d=y(63973),s="data-flip-state";function w(t,r,n){var a=d.mapValues(r,function(u,c){requestAnimationFrame(function(){return u.setAttribute(s,"active")});var M=u.animate([d.mapValues(t[c].from,function(i,e){return d.styleValue(e,i)}),d.mapValues(t[c].to,function(i,e){return d.styleValue(e,i)})],n);return M.onfinish=function(){u.setAttribute(s,"complete")},M});return{finish:function(){d.mapValues(a,function(u){u.finish()})}}}var g=function(t,r){var n=t.element,a=v.slide(t);if(!(!a||!n||!n.parentElement))return w(a,{element:n,container:n.parentElement},r)},O=function(t,r){r===void 0&&(r={});var n=t.element,a=v.scale(t);if(!(!a||!n))return w(a,{element:n},r)},m=function(t,r){var n=t.element,a=t.delta,u=f({},r,{delay:+(r.delay||0)+d.getStaggerDelay(t.index,r.stagger||0),fill:r.stagger?"both":"none"});if(!!n&&!(!a||!d.deltaChanged(a)))return O(t,u)};function p(t){Object.keys(t).forEach(function(r){var n=t[r].animation;n&&n.finish&&n.finish()})}var l=function(t){b(r,t);function r(n){n===void 0&&(n={});var a=this,u=f({},r.defaults,n);return a=t.call(this,f({onRead:p,onFlip:function(c){Object.keys(c).forEach(function(M){var i=r.animate.auto(c[M],u);a.setAnimation(M,i)})}},u))||this,a}return r.defaults={duration:300,delay:0,easing:"cubic-bezier(.5, 0, .5, 1)",fill:"none",stagger:0},r.animate={auto:m,transform:O,slidingLayers:g},r}(E.default);D.exports=l},11090:function(D,h,y){var b=this&&this.__assign||Object.assign||function(v){for(var d,s=1,w=arguments.length;s<w;s++){d=arguments[s];for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(v[g]=d[g])}return v};Object.defineProperty(h,"__esModule",{value:!0});var f=y(63973),E=y(16315);h.scale=function(v){var d=v.bounds,s=v.delta,w=v.element;if(!(!w||!s||!d)){var g=!v.data.noScale&&(s.width!==1||s.height!==1),O=E.translate(s.left,s.top),m=g?E.scale(s.width,s.height):void 0,p=g?"top left":void 0,l=f.matrixMultiply(O,m),t={from:b({x:s.left,y:s.top},p?{transformOrigin:p}:void 0,{transform:"matrix3d("+l+")"}),to:b({x:d.left,y:d.top},p?{transformOrigin:p}:void 0,{transform:d.transform||"none"})};return{element:t}}},h.slide=function(v){var d=v.delta,s=v.previous,w=v.bounds;if(!(!s||!s.bounds||!w)){var g=Math.max(s.bounds.height,w.height),O=Math.max(s.bounds.width,w.width),m={from:{height:g,width:O,transformOrigin:"top left"},to:{height:g,width:O,transformOrigin:"top left"}},p={from:{height:g,width:O,transformOrigin:"top left"},to:{height:g,width:O,transformOrigin:"top left"}},l=w.width-s.bounds.width,t=w.height-s.bounds.height;if(!!d){l>0?(p.from.x=-l+d.left,p.to.x=0,m.from.x=l,m.to.x=0):(p.from.x=0,p.to.x=l-d.left,m.from.x=0,m.to.x=-l),t>0?(p.from.y=-t+d.top,p.to.y=0,m.from.y=t,m.to.y=0):(p.from.y=0,p.to.y=t-d.top,m.from.y=0,m.to.y=-t);var r=f.matrixTranslate(m.from.x,m.from.y),n=f.matrixTranslate(m.to.x,m.to.y),a=f.matrixTranslate(p.from.x,p.from.y),u=f.matrixTranslate(p.to.x,p.to.y);return m.from.transform="matrix3d("+r+")",m.to.transform="matrix3d("+n+")",p.from.transform="matrix3d("+a+")",p.to.transform="matrix3d("+u+")",{element:m,container:p}}}}},22382:(D,h)=>{Object.defineProperty(h,"__esModule",{value:!0}),h.FOLLOW_ATTR="data-flip-follow",h.KEY_ATTR="data-flip-key",h.STATE_ATTR="data-flip-state",h.NO_DELTA={top:0,left:0,width:1,height:1}},71095:function(D,h){var y=this&&this.__assign||Object.assign||function(f){for(var E,v=1,d=arguments.length;v<d;v++){E=arguments[v];for(var s in E)Object.prototype.hasOwnProperty.call(E,s)&&(f[s]=E[s])}return f};Object.defineProperty(h,"__esModule",{value:!0});function b(f,E){if(E!=="flip")return f;var v={};return Object.keys(f).forEach(function(d){var s=f[d],w=s.element||s.previous&&s.previous.element;if(w&&w.hasAttribute("data-flip-follow")){var g=w.getAttribute("data-flip-follow");if(g&&f[g])v[d]=y({},s,{delta:y({left:0,top:0},f[g].delta,{width:1,height:1})});else if(s.type==="ENTER"||s.type==="LEAVE"){for(var O=w.nextElementSibling;O&&(!O.hasAttribute("data-flip-key")||f[O.getAttribute("data-flip-key")].type!=="MOVE");)O=O.nextElementSibling;if(O){var m=f[O.getAttribute("data-flip-key")].delta;v[d]=y({},s,{delta:{left:m.left,top:m.top,width:1,height:1}})}}}}),Object.assign(f,v)}h.default=b},94413:(D,h)=>{Object.defineProperty(h,"__esModule",{value:!0});function y(b,f){return f==="read"&&Object.keys(b).forEach(function(E){var v=b[E],d=v.element;!d||(v.data.radius=getComputedStyle&&getComputedStyle(d).borderRadius||"0")}),b}h.default=y},63973:(D,h,y)=>{Object.defineProperty(h,"__esModule",{value:!0});var b=y(16315),f=y(22382);function E(t,r){var n={};return Object.keys(t).forEach(function(a){n[a]=r(t[a],a,t)}),n}h.mapValues=E;function v(t,r,n){var a={};return Object.keys(t||{}).forEach(function(u){a[u]=n(t[u],r[u],u)}),a}h.mapTwoValues=v;function d(t,r){return b.translate(t,r).join(",")}h.matrixTranslate=d;function s(t,r){return b.scale(t,r).join(",")}h.matrixScale=s;function w(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.filter(function(n){return!!n}).reduce(b.multiply).join(",")}h.matrixMultiply=w;function g(t,r){return["height","width","top","left"].indexOf(t)!==-1&&typeof r=="number"?r+"px":r}h.styleValue=g;function O(t,r){return typeof r=="function"?r(t):(r||0)*t}h.getStaggerDelay=O,h.identity=function(t){return t},h.noop=function(){},h.rect=function(t){var r=t.getBoundingClientRect(),n=r.top,a=r.left,u=r.width,c=r.height;return{top:n,left:a,width:u,height:c,get transform(){return getComputedStyle(t).transform||void 0}}};function m(t){var r=h.rect(t),n=r.width,a=r.height;return!(n===0&&a===0)}h.isVisible=m;function p(t,r){return t?t.height?r.height?{top:t.top-r.top,left:t.left-r.left,width:t.width/r.width,height:t.height/r.height}:r:t:f.NO_DELTA}h.getDelta=p,h.deltaChanged=function(t){return!!t.top||!!t.left||t.width!==1||t.height!==1},h.boundsChanged=function(t,r){return!!(t.top-r.top||t.left-r.left||t.width-r.width||t.height-r.height)};function l(){var t={},r=[];return{on:function(n,a){n==="*"?r.push(a):(t[n]||(t[n]=[])).push(a)},off:function(n,a){n==="*"?r.splice(r.indexOf(a)>>>0,1):t[n]&&t[n].splice(t[n].indexOf(a)>>>0,1)},emit:function(n,a){(t[n]||[]).slice().map(function(u){u(a)}),r.slice().map(function(u){u(n,a)})}}}h.mitt=l},16315:(D,h,y)=>{y.r(h),y.d(h,{format:()=>b,identity:()=>f,inverse:()=>E,multiply:()=>v,parse:()=>d,rotateX:()=>s,rotateY:()=>w,rotateZ:()=>g,scale:()=>O,scaleX:()=>m,scaleY:()=>p,scaleZ:()=>l,skew:()=>t,skewX:()=>r,skewY:()=>n,translate:()=>a,translateX:()=>u,translateY:()=>c,translateZ:()=>M});/*  @license Rematrix v0.1.3

    Copyright (c) 2017 Fisssion LLC

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/function b(i){if(i.constructor!==Array)throw new TypeError("Expected array.");if(i.length===16)return i;if(i.length===6){var e=f();return e[0]=i[0],e[1]=i[1],e[4]=i[2],e[5]=i[3],e[12]=i[4],e[13]=i[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function f(){for(var i=[],e=0;e<16;e++)e%5==0?i.push(1):i.push(0);return i}function E(i){var e=b(i),o=e[0]*e[5]-e[4]*e[1],A=e[0]*e[6]-e[4]*e[2],j=e[0]*e[7]-e[4]*e[3],T=e[1]*e[6]-e[5]*e[2],_=e[1]*e[7]-e[5]*e[3],S=e[2]*e[7]-e[6]*e[3],P=e[10]*e[15]-e[14]*e[11],V=e[9]*e[15]-e[13]*e[11],R=e[9]*e[14]-e[13]*e[10],F=e[8]*e[15]-e[12]*e[11],L=e[8]*e[14]-e[12]*e[10],C=e[8]*e[13]-e[12]*e[9],x=1/(o*P-A*V+j*R+T*F-_*L+S*C);if(isNaN(x)||x===1/0)throw new Error("Inverse determinant attempted to divide by zero.");return[(e[5]*P-e[6]*V+e[7]*R)*x,(-e[1]*P+e[2]*V-e[3]*R)*x,(e[13]*S-e[14]*_+e[15]*T)*x,(-e[9]*S+e[10]*_-e[11]*T)*x,(-e[4]*P+e[6]*F-e[7]*L)*x,(e[0]*P-e[2]*F+e[3]*L)*x,(-e[12]*S+e[14]*j-e[15]*A)*x,(e[8]*S-e[10]*j+e[11]*A)*x,(e[4]*V-e[5]*F+e[7]*C)*x,(-e[0]*V+e[1]*F-e[3]*C)*x,(e[12]*_-e[13]*j+e[15]*o)*x,(-e[8]*_+e[9]*j-e[11]*o)*x,(-e[4]*R+e[5]*L-e[6]*C)*x,(e[0]*R-e[1]*L+e[2]*C)*x,(-e[12]*T+e[13]*A-e[14]*o)*x,(e[8]*T-e[9]*A+e[10]*o)*x]}function v(i,e){for(var o=b(i),A=b(e),j=[],T=0;T<4;T++)for(var _=[o[T],o[T+4],o[T+8],o[T+12]],S=0;S<4;S++){var P=S*4,V=[A[P],A[P+1],A[P+2],A[P+3]],R=_[0]*V[0]+_[1]*V[1]+_[2]*V[2]+_[3]*V[3];j[T+P]=R}return j}function d(i){if(typeof i=="string"){var e=i.match(/matrix(3d)?\(([^)]+)\)/);if(e){var o=e[2].split(", ").map(function(A){return parseFloat(A)});return b(o)}}return f()}function s(i){var e=Math.PI/180*i,o=f();return o[5]=o[10]=Math.cos(e),o[6]=o[9]=Math.sin(e),o[9]*=-1,o}function w(i){var e=Math.PI/180*i,o=f();return o[0]=o[10]=Math.cos(e),o[2]=o[8]=Math.sin(e),o[2]*=-1,o}function g(i){var e=Math.PI/180*i,o=f();return o[0]=o[5]=Math.cos(e),o[1]=o[4]=Math.sin(e),o[4]*=-1,o}function O(i,e){var o=f();return o[0]=i,o[5]=e||i,o}function m(i){var e=f();return e[0]=i,e}function p(i){var e=f();return e[5]=i,e}function l(i){var e=f();return e[10]=i,e}function t(i,e){var o=Math.PI/180*i,A=f();if(A[4]=Math.tan(o),e){var j=Math.PI/180*e;A[1]=Math.tan(j)}return A}function r(i){var e=Math.PI/180*i,o=f();return o[4]=Math.tan(e),o}function n(i){var e=Math.PI/180*i,o=f();return o[1]=Math.tan(e),o}function a(i,e){var o=f();return o[12]=i,e&&(o[13]=e),o}function u(i){var e=f();return e[12]=i,e}function c(i){var e=f();return e[13]=i,e}function M(i){var e=f();return e[14]=i,e}}}]);