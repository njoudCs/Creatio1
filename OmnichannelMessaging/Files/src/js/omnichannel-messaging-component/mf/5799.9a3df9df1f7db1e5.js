(self.webpackChunkapp_studio_enterprise_omnichannel_messaging=self.webpackChunkapp_studio_enterprise_omnichannel_messaging||[]).push([[5799,3651],{55799:(Y,u,a)=>{a.r(u),a.d(u,{LEGACY_SCROLL_THROTTLE_MS:()=>o.SCROLL_THROTTLE_MS,LegacyTooltipComponent:()=>r,MAT_LEGACY_TOOLTIP_DEFAULT_OPTIONS:()=>o.MAT_TOOLTIP_DEFAULT_OPTIONS,MAT_LEGACY_TOOLTIP_DEFAULT_OPTIONS_FACTORY:()=>o.MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY,MAT_LEGACY_TOOLTIP_SCROLL_STRATEGY:()=>o.MAT_TOOLTIP_SCROLL_STRATEGY,MAT_LEGACY_TOOLTIP_SCROLL_STRATEGY_FACTORY:()=>o.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,MAT_LEGACY_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER:()=>o.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,MatLegacyTooltip:()=>l,MatLegacyTooltipModule:()=>c,getMatLegacyTooltipInvalidPositionError:()=>o.getMatTooltipInvalidPositionError,matLegacyTooltipAnimations:()=>v});var T=a(31892),_=a(71689),d=a(31134),t=a(94450),O=a(66385),y=a(17684),g=a(99852),f=a(43267),M=a(67202),L=a(71006),o=a(85904),i=a(72310);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const E=["tooltip"];class l extends o._MatTooltipBase{constructor(e,n,s,m,A,C,h,I,P,D,R,S){super(e,n,s,m,A,C,h,I,P,D,R,S),this._tooltipComponent=r}}l.\u0275fac=function(e){return new(e||l)(t.\u0275\u0275directiveInject(T.Overlay),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(y.ScrollDispatcher),t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(M.Platform),t.\u0275\u0275directiveInject(_.AriaDescriber),t.\u0275\u0275directiveInject(_.FocusMonitor),t.\u0275\u0275directiveInject(o.MAT_TOOLTIP_SCROLL_STRATEGY),t.\u0275\u0275directiveInject(g.Directionality,8),t.\u0275\u0275directiveInject(o.MAT_TOOLTIP_DEFAULT_OPTIONS,8),t.\u0275\u0275directiveInject(d.DOCUMENT))},l.\u0275dir=t.\u0275\u0275defineDirective({type:l,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-tooltip-trigger"],exportAs:["matTooltip"],features:[t.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(l,[{type:t.Directive,args:[{selector:"[matTooltip]",exportAs:"matTooltip",host:{class:"mat-tooltip-trigger"}}]}],function(){return[{type:T.Overlay},{type:t.ElementRef},{type:y.ScrollDispatcher},{type:t.ViewContainerRef},{type:t.NgZone},{type:M.Platform},{type:_.AriaDescriber},{type:_.FocusMonitor},{type:void 0,decorators:[{type:t.Inject,args:[o.MAT_TOOLTIP_SCROLL_STRATEGY]}]},{type:g.Directionality,decorators:[{type:t.Optional}]},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[o.MAT_TOOLTIP_DEFAULT_OPTIONS]}]},{type:void 0,decorators:[{type:t.Inject,args:[d.DOCUMENT]}]}]},null)}();class r extends o._TooltipComponentBase{constructor(e,n,s){super(e,s),this._breakpointObserver=n,this._isHandset=this._breakpointObserver.observe(f.Breakpoints.Handset),this._showAnimation="mat-tooltip-show",this._hideAnimation="mat-tooltip-hide"}}r.\u0275fac=function(e){return new(e||r)(t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(f.BreakpointObserver),t.\u0275\u0275directiveInject(L.ANIMATION_MODULE_TYPE,8))},r.\u0275cmp=t.\u0275\u0275defineComponent({type:r,selectors:[["mat-tooltip-component"]],viewQuery:function(e,n){if(e&1&&t.\u0275\u0275viewQuery(E,7),e&2){let s;t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(n._tooltip=s.first)}},hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(e,n){e&1&&t.\u0275\u0275listener("mouseleave",function(m){return n._handleMouseLeave(m)}),e&2&&t.\u0275\u0275styleProp("zoom",n.isVisible()?1:null)},features:[t.\u0275\u0275InheritDefinitionFeature],decls:4,vars:6,consts:[[1,"mat-tooltip",3,"ngClass","animationend"],["tooltip",""]],template:function(e,n){if(e&1&&(t.\u0275\u0275elementStart(0,"div",0,1),t.\u0275\u0275listener("animationend",function(m){return n._handleAnimationEnd(m)}),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275text(3),t.\u0275\u0275elementEnd()),e&2){let s;t.\u0275\u0275classProp("mat-tooltip-handset",(s=t.\u0275\u0275pipeBind1(2,4,n._isHandset))==null?null:s.matches),t.\u0275\u0275property("ngClass",n.tooltipClass),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(n.message)}},dependencies:[d.NgClass,d.AsyncPipe],styles:[".mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis;transform:scale(0)}.mat-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}.mat-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-tooltip-show{0%{opacity:0;transform:scale(0)}50%{opacity:.5;transform:scale(0.99)}100%{opacity:1;transform:scale(1)}}@keyframes mat-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}.mat-tooltip-show{animation:mat-tooltip-show 200ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-tooltip-hide{animation:mat-tooltip-hide 100ms cubic-bezier(0, 0, 0.2, 1) forwards}"],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(r,[{type:t.Component,args:[{selector:"mat-tooltip-component",encapsulation:t.ViewEncapsulation.None,changeDetection:t.ChangeDetectionStrategy.OnPush,host:{"[style.zoom]":"isVisible() ? 1 : null","(mouseleave)":"_handleMouseLeave($event)","aria-hidden":"true"},template:`<div #tooltip
     class="mat-tooltip"
     (animationend)="_handleAnimationEnd($event)"
     [ngClass]="tooltipClass"
     [class.mat-tooltip-handset]="(_isHandset | async)?.matches">{{message}}</div>
`,styles:[".mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis;transform:scale(0)}.mat-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}.mat-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-tooltip-show{0%{opacity:0;transform:scale(0)}50%{opacity:.5;transform:scale(0.99)}100%{opacity:1;transform:scale(1)}}@keyframes mat-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}.mat-tooltip-show{animation:mat-tooltip-show 200ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-tooltip-hide{animation:mat-tooltip-hide 100ms cubic-bezier(0, 0, 0.2, 1) forwards}"]}]}],function(){return[{type:t.ChangeDetectorRef},{type:f.BreakpointObserver},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[L.ANIMATION_MODULE_TYPE]}]}]},{_tooltip:[{type:t.ViewChild,args:["tooltip",{static:!0}]}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=t.\u0275\u0275defineInjector({providers:[o.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],imports:[_.A11yModule,d.CommonModule,T.OverlayModule,O.MatCommonModule,O.MatCommonModule,y.CdkScrollableModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(c,[{type:t.NgModule,args:[{imports:[_.A11yModule,d.CommonModule,T.OverlayModule,O.MatCommonModule],exports:[l,r,O.MatCommonModule,y.CdkScrollableModule],declarations:[l,r],providers:[o.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const v={tooltipState:(0,i.trigger)("state",[(0,i.state)("initial, void, hidden",(0,i.style)({opacity:0,transform:"scale(0)"})),(0,i.state)("visible",(0,i.style)({transform:"scale(1)"})),(0,i.transition)("* => visible",(0,i.animate)("200ms cubic-bezier(0, 0, 0.2, 1)",(0,i.keyframes)([(0,i.style)({opacity:0,transform:"scale(0)",offset:0}),(0,i.style)({opacity:.5,transform:"scale(0.99)",offset:.5}),(0,i.style)({opacity:1,transform:"scale(1)",offset:1})]))),(0,i.transition)("* => hidden",(0,i.animate)("100ms cubic-bezier(0, 0, 0.2, 1)",(0,i.style)({opacity:0})))])};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}]);
