(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[1213,4309],{81213:(A,x,l)=>{l.r(x),l.d(x,{DiagramUtils:()=>p.T,ElementType:()=>E.H,Handlers:()=>E.r,Inject:()=>C});var c=l(4311),P=l.n(c),h={};for(const O in c)["default","Inject"].indexOf(O)<0&&(h[O]=()=>c[O]);l.d(x,h);var p=l(53452),E=l(74322),y=l(33177),M=l.n(y);const C=y.Inject},53452:(A,x,l)=>{l.d(x,{T:()=>O});var c=l(4311),P=l.n(c),h=l(33177),p=l.n(h),E=l(97600),y=l.n(E),M=l(64960),C=l(74322);class O{static centerViewboxOnElement(i,u){const f=u.viewbox(),n=(0,M.jY)(i),d={x:Math.round(n.x+n.width/2-f.outer.width/2),y:Math.round(n.y+n.height/2-f.outer.height/2),width:f.outer.width,height:f.outer.height};u.viewbox(d),u.zoom(f.scale)}static isLabel(i){return i.type===C.H.label}static isRoot(i){return i.type===C.H.root}static getCorrectSpaceToolDelta(i,u){const f=u.context,n=f.axis,d=f.minAllowedDelta;return d!==null&&(n==="x"&&i.x<d&&(i.x=d),n==="y"&&i.y<d&&(i.y=d)),i}static getOriginalWaypoint(i,u){return[u.y,u.y+u.height].includes(i.y)?{x:i.x,y:u.y+Math.round(u.height/2)}:{x:u.x+Math.round(u.width/2),y:i.y}}getContainersType(){return[]}setProcessRelativePosition(i,u){const f=(n,d)=>{d.id===c.Roots.root.id?(!E.isNumber(n.rx)&&n.x&&(n.rx=n.x),!E.isNumber(n.ry)&&n.y&&(n.ry=n.y)):(!E.isNumber(n.rx)&&n.x&&d.x&&(n.rx=n.x-d.x),!E.isNumber(n.ry)&&n.y&&d.y&&(n.ry=n.y-d.y))};Object.keys((0,h.toObject)(i.elements)).forEach(n=>{const d=i.elements[n],t=i.elements[d.parent];f(d,t||{id:"root1"})}),Object.keys((0,h.toObject)(i.labels)).forEach(n=>{const d=i.labels[n],t=i.connections[d.parent]||i.elements[d.parent];let e=t;if(t)this.isConnection(t)&&(e=i.elements[t.source]);else{const a=`Element with id "${t}" - not found in process "${i.id}"`;u.error(a,{loggerName:"setProcessRelativePosition"}),console.error(a)}f(d,e||{id:"root1"})})}isConnection(i){return C.H.connection===i.type}isFlow(i){return C.H.connection===i.type}findRealElementParent(i,u,f){for(const n of u)if(i.x>n.x&&i.x<n.x+n.width&&i.y>n.y&&i.y<n.y+n.height)return n;return f}getAllContainers(i){const u=this.getContainersType(),f=[];return i.forEach(n=>{if(u.includes(n.type)){const d=n.children?n.children.filter(t=>u.includes(t.type)):[];f.push({container:n,count:d.length})}},this),f.sort((n,d)=>n.count-d.count).map(n=>n.container)}}},74322:(A,x,l)=>{l.d(x,{H:()=>P,r:()=>c});const c={element:{deleteElementsExecuted:"commandStack.elements.delete.executed",paste:"elements.paste",updateLabel:"element.updateLabel",updateLabelExecuted:"commandStack.element.updateLabel.executed",mouseDown:"element.mousedown",doubleClick:"element.dblclick",update:"element.update",updated:"element.updated",typeUpdated:"element.typeUpdated",click:"element.click",updateExecuted:"commandStack.element.update.executed",validation:"element.validation",canUpdateType:"element.canUpdateType"},elements:{create:"elements.create",move:"elements.move",delete:"elements.delete",removing:"elements.removing",updatingTypeValidate:"elements.updatingTypeValidate",canCopy:"elements.canCopy",changed:"elements.changed"},directEditing:{activate:"directEditing.activate",complete:"directEditing.complete",cancel:"directEditing.cancel",resize:"directEditing.resize"},label:{createExecuted:"commandStack.label.create.executed",create:"label.create"},lane:{create:"lane.create",resize:"lane.resize",split:"lane.split"},diagram:{create:"diagram.create",changed:"diagram.changed",initialized:"diagram.initialized"},selection:{changed:"selection.changed"},shape:{createExecuted:"commandStack.shape.create.executed",moveExecuted:"commandStack.shape.move.executed",resizeExecuted:"commandStack.shape.resize.executed",deleteExecuted:"commandStack.shape.delete.executed",move:"shape.move.move",end:"shape.move.end",shapeMove:"shape.move",shapeCreate:"shape.create",shapeResize:"shape.resize",shapeDelete:"shape.delete"},import:{elementAdd:"import.element.add"},connection:{createExecuted:"commandStack.connection.create.executed",update:"connection.update",updateExecuted:"commandStack.connection.update.executed",moveExecuted:"commandStack.connection.move.executed",layoutExecuted:"commandStack.connection.layout.executed",reconnectEndExecuted:"commandStack.connection.reconnectEnd.executed",updateWaypointsExecuted:"commandStack.connection.updateWaypoints.executed",reconnectExecuted:"commandStack.connection.reconnect.executed",deleteExecuted:"commandStack.connection.delete.executed",changeDirection:"connection.changeDirection",changeDirectionExecuted:"commandStack.connection.changeDirection.executed",reconnect:"connection.reconnect",moveConnectionLabel:"connection.move.label",highlight:"commandStack.connection.highlight.executed"},connect:{move:"connect.move",hover:"connect.hover",end:"connect.end"},create:{move:"create.move",end:"create.end"}};var P;(function(h){h.connection="connection",h.root="root",h.shape="shape",h.label="label"})(P||(P={}))},64960:(A,x,l)=>{l.d(x,{He:()=>n,PB:()=>O,RH:()=>u,cd:()=>h,jY:()=>i,oL:()=>f,om:()=>y,vA:()=>R});var c=l(83612),P=l.n(c);function h(t){return(0,c.filter)(t,function(e){return!(0,c.find)(t,function(a){return a!==e&&p(e,a)})})}function p(t,e){if(!!e){if(t===e)return e;if(!!t.parent)return p(t.parent,e)}}function E(t,e,a){var o=!a||t.indexOf(e)===-1;return o&&t.push(e),o}function y(t,e,a){a=a||0,(0,c.isArray)(t)||(t=[t]),(0,c.forEach)(t,function(o,s){var m=e(o,s,a);(0,c.isArray)(m)&&m.length&&y(m,e,a+1)})}function M(t,e,a){var o=[],s=[];return y(t,function(m,v,_){E(o,m,e);var g=m.children;if((a===-1||_<a)&&g&&E(s,g,e))return g}),o}function C(t,e){return M(t,!e,1)}function O(t,e){return M(t,!e,-1)}function R(t,e,a){(0,c.isUndefined)(e)&&(e=!0),(0,c.isObject)(e)&&(a=e,e=!0),a=a||{};var o=d(a.allShapes),s=d(a.allConnections),m=d(a.enclosedElements),v=d(a.enclosedConnections),_=d(a.topLevel,e&&(0,c.groupBy)(t,function(r){return r.id}));function g(r){_[r.source.id]&&_[r.target.id]&&(_[r.id]=[r]),o[r.source.id]&&o[r.target.id]&&(v[r.id]=m[r.id]=r),s[r.id]=r}function D(r){if(m[r.id]=r,r.waypoints)v[r.id]=s[r.id]=r;else return o[r.id]=r,(0,c.forEach)(r.incoming,g),(0,c.forEach)(r.outgoing,g),r.children}return y(t,D),{allShapes:o,allConnections:s,topLevel:_,enclosedConnections:v,enclosedElements:m}}function i(t,e){e=!!e,(0,c.isArray)(t)||(t=[t]);var a,o,s,m;return(0,c.forEach)(t,function(v){var _=v;v.waypoints&&!e&&(_=i(v.waypoints,!0));var g=_.x,D=_.y,r=_.height||0,T=_.width||0;(g<a||a===void 0)&&(a=g),(D<o||o===void 0)&&(o=D),(g+T>s||s===void 0)&&(s=g+T),(D+r>m||m===void 0)&&(m=D+r)}),{x:a,y:o,height:m-o,width:s-a}}function u(t,e){var a={};return(0,c.forEach)(t,function(o){var s=o;s.waypoints&&(s=i(s)),!(0,c.isNumber)(e.y)&&s.x>e.x&&(a[o.id]=o),!(0,c.isNumber)(e.x)&&s.y>e.y&&(a[o.id]=o),s.x>e.x&&s.y>e.y&&((0,c.isNumber)(e.width)&&(0,c.isNumber)(e.height)&&s.width+s.x<e.width+e.x&&s.height+s.y<e.height+e.y||!(0,c.isNumber)(e.width)||!(0,c.isNumber)(e.height))&&(a[o.id]=o)}),a}function f(t){return"waypoints"in t?"connection":"x"in t?"shape":"root"}function n(t){return!!(t&&t.isFrame)}function d(t,e){return(0,c.assign)({},t||{},e||{})}}}]);
