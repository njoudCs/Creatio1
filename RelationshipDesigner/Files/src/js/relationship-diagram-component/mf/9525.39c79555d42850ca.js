(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[9525],{59879:v=>{typeof Object.create=="function"?v.exports=function(a,o){o&&(a.super_=o,a.prototype=Object.create(o.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}))}:v.exports=function(a,o){if(o){a.super_=o;var g=function(){};g.prototype=o.prototype,a.prototype=new g,a.prototype.constructor=a}}},78542:(v,y,a)=>{a.d(y,{Z:()=>t});var o=a(83612),g=a.n(o),l=a(64482),s=a(91499),i=a(37227);function t(n){this._modeling=n,this._helper=new l.Z(n)}t.$inject=["modeling"],t.prototype.execute=function(n){var e=n.shape,h=n.delta,u=n.newParent||e.parent,r=n.newParentIndex,d=e.parent;return n.oldBounds=(0,o.pick)(e,["x","y","width","height"]),n.oldParent=d,n.oldParentIndex=(0,s.Od)(d.children,e),(0,s.IH)(u.children,e,r),(0,o.assign)(e,{parent:u,x:e.x+h.x,y:e.y+h.y}),e},t.prototype.postExecute=function(n){var e=n.shape,h=n.delta,u=n.hints,r=this._modeling;u.layout!==!1&&((0,o.forEach)(e.incoming,function(d){r.layoutConnection(d,{connectionEnd:(0,i.h4)(d,e,h)})}),(0,o.forEach)(e.outgoing,function(d){r.layoutConnection(d,{connectionStart:(0,i.H9)(d,e,h)})})),u.recurse!==!1&&this.moveChildren(n)},t.prototype.revert=function(n){var e=n.shape,h=n.oldParent,u=n.oldParentIndex,r=n.delta;return(0,s.IH)(h.children,e,u),(0,o.assign)(e,{parent:h,x:e.x-r.x,y:e.y-r.y}),e},t.prototype.moveChildren=function(n){var e=n.delta,h=n.shape;this._helper.moveRecursive(h.children,e,null)},t.prototype.getNewParent=function(n){return n.newParent||n.shape.parent}},39229:(v,y,a)=>{a.d(y,{Z:()=>l});var o=a(83612),g=a.n(o);function l(i){this._modeling=i}l.$inject=["modeling"],l.prototype.execute=function(i){var t=i.newSource,n=i.newTarget,e=i.connection,h=i.dockingOrPoints;if(!t&&!n)throw new Error("newSource or newTarget required");return(0,o.isArray)(h)&&(i.oldWaypoints=e.waypoints,e.waypoints=h),t&&(i.oldSource=e.source,e.source=t),n&&(i.oldTarget=e.target,e.target=n),e},l.prototype.postExecute=function(i){var t=i.connection,n=i.newSource,e=i.newTarget,h=i.dockingOrPoints,u=i.hints||{};if(u.layoutConnection!==!1){var r={};n&&(!e||u.docking==="source")&&(r.connectionStart=s((0,o.isArray)(h)?h[0]:h)),e&&(!n||u.docking==="target")&&(r.connectionEnd=s((0,o.isArray)(h)?h[h.length-1]:h)),u.newWaypoints&&(r.waypoints=u.newWaypoints),this._modeling.layoutConnection(t,r)}},l.prototype.revert=function(i){var t=i.oldSource,n=i.oldTarget,e=i.oldWaypoints,h=i.connection;return t&&(h.source=t),n&&(h.target=n),e&&(h.waypoints=e),h};function s(i){return i.original||i}},77010:(v,y,a)=>{a.d(y,{Z:()=>s});var o=a(83612),g=a.n(o),l=a(37227);function s(i){this._modeling=i}s.$inject=["modeling"],s.prototype.execute=function(i){var t=i.shape,n=i.newBounds,e=i.minBounds;if(n.x===void 0||n.y===void 0||n.width===void 0||n.height===void 0)throw new Error("newBounds must have {x, y, width, height} properties");if(e&&(n.width<e.width||n.height<e.height))throw new Error("width and height cannot be less than minimum height and width");if(!e&&n.width<10||n.height<10)throw new Error("width and height cannot be less than 10px");return i.oldBounds={width:t.width,height:t.height,x:t.x,y:t.y},(0,o.assign)(t,{width:n.width,height:n.height,x:n.x,y:n.y}),t},s.prototype.postExecute=function(i){var t=this._modeling,n=i.shape,e=i.oldBounds,h=i.hints||{};h.layout!==!1&&((0,o.forEach)(n.incoming,function(u){t.layoutConnection(u,{connectionEnd:(0,l.Qd)(u,n,e)})}),(0,o.forEach)(n.outgoing,function(u){t.layoutConnection(u,{connectionStart:(0,l.SL)(u,n,e)})}))},s.prototype.revert=function(i){var t=i.shape,n=i.oldBounds;return(0,o.assign)(t,{width:n.width,height:n.height,x:n.x,y:n.y}),t}},37227:(v,y,a)=>{a.d(y,{H9:()=>n,h4:()=>e,SL:()=>i,Qd:()=>t});var o=a(86463),g=a(43273);function l(r,d,p){var _=(0,g.b)(d),f=(0,g.b)(p),E=(0,g.p)(r,_),c={x:E.x*(p.width/d.width),y:E.y*(p.height/d.height)};return(0,o.ex)({x:f.x+c.x,y:f.y+c.y})}function s(r,d,p){var _=center(r),f=center(d),E=center(p),c=delta(r,_),w=delta(_,f),P={x:w.x*(p.width/d.width),y:w.y*(p.height/d.height)},L={x:E.x+P.x,y:E.y+P.y};return roundPoint({x:L.x+c.x-r.x,y:L.y+c.y-r.y})}function i(r,d,p){var _=u(r),f=_[0];return l(f.original||f,p,d)}function t(r,d,p){var _=u(r),f=_[_.length-1];return l(f.original||f,p,d)}function n(r,d,p){return i(r,d,h(d,p))}function e(r,d,p){return t(r,d,h(d,p))}function h(r,d){return{x:r.x-d.x,y:r.y-d.y,width:r.width,height:r.height}}function u(r){var d=r.waypoints;if(!d.length)throw new Error("connection#"+r.id+": no waypoints");return d}},64482:(v,y,a)=>{a.d(y,{Z:()=>i});var o=a(83612),g=a(37227),l=a(64960);function s(){this.allShapes={},this.allConnections={},this.enclosedElements={},this.enclosedConnections={},this.topLevel={}}s.prototype.add=function(t,n){return this.addAll([t],n)},s.prototype.addAll=function(t,n){var e=(0,l.vA)(t,!!n,this);return(0,o.assign)(this,e),this};function i(t){this._modeling=t}i.prototype.moveRecursive=function(t,n,e){return t?this.moveClosure(this.getClosure(t),n,e):[]},i.prototype.moveClosure=function(t,n,e,h,u){var r=this._modeling,d=t.allShapes,p=t.allConnections,_=t.enclosedConnections,f=t.topLevel,E=!1;u&&u.parent===e&&(E=!0),(0,o.forEach)(d,function(c){r.moveShape(c,n,f[c.id]&&!E&&e,{recurse:!1,layout:!1})}),(0,o.forEach)(p,function(c){var w=!!d[c.source.id],P=!!d[c.target.id];_[c.id]&&w&&P?r.moveConnection(c,n,f[c.id]&&!E&&e):r.layoutConnection(c,{connectionStart:w&&(0,g.H9)(c,c.source,n),connectionEnd:P&&(0,g.h4)(c,c.target,n),shapeMoving:!0})})},i.prototype.getClosure=function(t){return new s().addAll(t,!0)}},28605:(v,y,a)=>{a.d(y,{Z:()=>n});var o=a(83612),g=a.n(o),l=a(44610),s=a(21537),i=7,t=1e3;function n(e){this._canvas=e,this._asyncHide=(0,o.debounce)((0,o.bind)(this.hide,this),t)}n.$inject=["canvas"],n.prototype.snap=function(e,h){var u=e.context,r=u.snapContext,d=r.getSnapLocations(),p={x:(0,l.Wn)(e,"x"),y:(0,l.Wn)(e,"y")};(0,o.forEach)(d,function(_){var f=r.getSnapOrigin(_),E={x:e.x+f.x,y:e.y+f.y};if((0,o.forEach)(["x","y"],function(c){var w;p[c]||(w=h.snap(E,_,c,i),w!==void 0&&(p[c]={value:w,originValue:w-f[c]}))}),p.x&&p.y)return!1}),this.showSnapLine("vertical",p.x&&p.x.value),this.showSnapLine("horizontal",p.y&&p.y.value),(0,o.forEach)(["x","y"],function(_){var f=p[_];(0,o.isObject)(f)&&(0,l.U)(e,_,f.originValue)})},n.prototype._createLine=function(e){var h=this._canvas.getLayer("snap"),u=(0,s.Ue)("path");return(0,s.Lj)(u,{d:"M0,0 L0,0"}),(0,s.Sh)(u).add("djs-snap-line"),(0,s.R3)(h,u),{update:function(r){(0,o.isNumber)(r)?e==="horizontal"?(0,s.Lj)(u,{d:"M-100000,"+r+" L+100000,"+r,display:""}):(0,s.Lj)(u,{d:"M "+r+",-100000 L "+r+", +100000",display:""}):(0,s.Lj)(u,{display:"none"})}}},n.prototype._createSnapLines=function(){this._snapLines={horizontal:this._createLine("horizontal"),vertical:this._createLine("vertical")}},n.prototype.showSnapLine=function(e,h){var u=this.getSnapLine(e);u&&u.update(h),this._asyncHide()},n.prototype.getSnapLine=function(e){return this._snapLines||this._createSnapLines(),this._snapLines[e]},n.prototype.hide=function(){(0,o.forEach)(this._snapLines,function(e){e.update()})}},91499:(v,y,a)=>{a.d(y,{IH:()=>g,Od:()=>o,cq:()=>l});function o(s,i){if(!s||!i)return-1;var t=s.indexOf(i);return t!==-1&&s.splice(t,1),t}function g(s,i,t){if(!(!s||!i)){typeof t!="number"&&(t=-1);var n=s.indexOf(i);if(n!==-1){if(n===t)return;if(t!==-1)s.splice(n,1);else return}t!==-1?s.splice(t,0,i):s.push(i)}}function l(s,i){return!s||!i?-1:s.indexOf(i)}},43273:(v,y,a)=>{a.d(y,{b:()=>o,p:()=>g});function o(l){return{x:l.x+l.width/2,y:l.y+l.height/2}}function g(l,s){return{x:l.x-s.x,y:l.y-s.y}}},7824:(v,y,a)=>{a.d(y,{KO:()=>g,W5:()=>s,cq:()=>i});var o=a(21537);function g(t){return t.join(",").replace(/,?([A-z]),?/g,"$1")}function l(t){for(var n="",e=0,h;h=t[e];e++)n+=h.x+","+h.y+" ";return n}function s(t,n){var e=(0,o.Ue)("polyline");return(0,o.Lj)(e,{points:l(t)}),n&&(0,o.Lj)(e,n),e}function i(t,n){return(0,o.Lj)(t,{points:l(n)}),t}}}]);
