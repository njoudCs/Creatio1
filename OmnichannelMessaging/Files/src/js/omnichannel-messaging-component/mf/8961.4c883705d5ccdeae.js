(self.webpackChunkapp_studio_enterprise_omnichannel_messaging=self.webpackChunkapp_studio_enterprise_omnichannel_messaging||[]).push([[8961],{18961:(x,b,l)=>{l.r(b),l.d(b,{MAT_LEGACY_SLIDE_TOGGLE_DEFAULT_OPTIONS:()=>m,MAT_LEGACY_SLIDE_TOGGLE_REQUIRED_VALIDATOR:()=>i.MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR,MAT_LEGACY_SLIDE_TOGGLE_VALUE_ACCESSOR:()=>c,MatLegacySlideToggle:()=>n,MatLegacySlideToggleChange:()=>_,MatLegacySlideToggleModule:()=>g,MatLegacySlideToggleRequiredValidator:()=>i.MatSlideToggleRequiredValidator,_MatLegacySlideToggleBase:()=>i._MatSlideToggleBase,_MatLegacySlideToggleRequiredValidatorModule:()=>i._MatSlideToggleRequiredValidatorModule});var p=l(71063),e=l(94450),d=l(66385),u=l(71689),f=l(34560),h=l(71006),i=l(9837);const y=["input"],M=function(o){return{enterDuration:o}},E=["*"];/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const m=new e.InjectionToken("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const c={provide:f.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>n),multi:!0};class _{constructor(a,t){this.source=a,this.checked=t}}class n extends i._MatSlideToggleBase{constructor(a,t,s,r,T,v){super(a,t,s,r,T,v,"mat-slide-toggle-")}_createChangeEvent(a){return new _(this,a)}_onChangeEvent(a){if(a.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue){this._inputElement.nativeElement.checked=this.checked;return}this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent()}_onInputClick(a){a.stopPropagation()}focus(a,t){t?this._focusMonitor.focusVia(this._inputElement,t,a):this._inputElement.nativeElement.focus(a)}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}n.\u0275fac=function(a){return new(a||n)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(u.FocusMonitor),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275injectAttribute("tabindex"),e.\u0275\u0275directiveInject(m),e.\u0275\u0275directiveInject(h.ANIMATION_MODULE_TYPE,8))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(a,t){if(a&1&&e.\u0275\u0275viewQuery(y,5),a&2){let s;e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(t._inputElement=s.first)}},hostAttrs:[1,"mat-slide-toggle"],hostVars:13,hostBindings:function(a,t){a&2&&(e.\u0275\u0275hostProperty("id",t.id),e.\u0275\u0275attribute("tabindex",null)("aria-label",null)("aria-labelledby",null)("name",null),e.\u0275\u0275classProp("mat-checked",t.checked)("mat-disabled",t.disabled)("mat-slide-toggle-label-before",t.labelPosition=="before")("_mat-animation-noopable",t._noopAnimations))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matSlideToggle"],features:[e.\u0275\u0275ProvidersFeature([c]),e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:E,decls:14,vars:20,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(a,t){if(a&1&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"label",0,1)(2,"span",2)(3,"input",3,4),e.\u0275\u0275listener("change",function(r){return t._onChangeEvent(r)})("click",function(r){return t._onInputClick(r)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"span",5),e.\u0275\u0275element(6,"span",6),e.\u0275\u0275elementStart(7,"span",7),e.\u0275\u0275element(8,"span",8),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(9,"span",9,10),e.\u0275\u0275listener("cdkObserveContent",function(){return t._onLabelTextChange()}),e.\u0275\u0275elementStart(11,"span",11),e.\u0275\u0275text(12,"\xA0"),e.\u0275\u0275elementEnd(),e.\u0275\u0275projection(13),e.\u0275\u0275elementEnd()()),a&2){const s=e.\u0275\u0275reference(1),r=e.\u0275\u0275reference(10);e.\u0275\u0275attribute("for",t.inputId),e.\u0275\u0275advance(2),e.\u0275\u0275classProp("mat-slide-toggle-bar-no-side-margin",!r.textContent||!r.textContent.trim()),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",t.inputId)("required",t.required)("tabIndex",t.tabIndex)("checked",t.checked)("disabled",t.disabled),e.\u0275\u0275attribute("name",t.name)("aria-checked",t.checked)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby),e.\u0275\u0275advance(4),e.\u0275\u0275property("matRippleTrigger",s)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",e.\u0275\u0275pureFunction1(18,M,t._noopAnimations?0:150))}},dependencies:[d.MatRipple,p.CdkObserveContent],styles:['.mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;display:block}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.mat-slide-toggle-input:focus~.mat-slide-toggle-thumb-container .mat-focus-indicator::before{content:""}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}'],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(n,[{type:e.Component,args:[{selector:"mat-slide-toggle",exportAs:"matSlideToggle",host:{class:"mat-slide-toggle","[id]":"id","[attr.tabindex]":"null","[attr.aria-label]":"null","[attr.aria-labelledby]":"null","[attr.name]":"null","[class.mat-checked]":"checked","[class.mat-disabled]":"disabled","[class.mat-slide-toggle-label-before]":'labelPosition == "before"',"[class._mat-animation-noopable]":"_noopAnimations"},providers:[c],inputs:["disabled","disableRipple","color","tabIndex"],encapsulation:e.ViewEncapsulation.None,changeDetection:e.ChangeDetectionStrategy.OnPush,template:`<label [attr.for]="inputId" class="mat-slide-toggle-label" #label>
  <span class="mat-slide-toggle-bar"
       [class.mat-slide-toggle-bar-no-side-margin]="!labelContent.textContent || !labelContent.textContent.trim()">

    <input #input class="mat-slide-toggle-input cdk-visually-hidden" type="checkbox"
           role="switch"
           [id]="inputId"
           [required]="required"
           [tabIndex]="tabIndex"
           [checked]="checked"
           [disabled]="disabled"
           [attr.name]="name"
           [attr.aria-checked]="checked"
           [attr.aria-label]="ariaLabel"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           (change)="_onChangeEvent($event)"
           (click)="_onInputClick($event)">

    <span class="mat-slide-toggle-thumb-container">
      <span class="mat-slide-toggle-thumb"></span>
      <span class="mat-slide-toggle-ripple mat-focus-indicator" mat-ripple
           [matRippleTrigger]="label"
           [matRippleDisabled]="disableRipple || disabled"
           [matRippleCentered]="true"
           [matRippleRadius]="20"
           [matRippleAnimation]="{enterDuration: _noopAnimations ? 0 : 150}">

        <span class="mat-ripple-element mat-slide-toggle-persistent-ripple"></span>
      </span>
    </span>

  </span>

  <span class="mat-slide-toggle-content" #labelContent (cdkObserveContent)="_onLabelTextChange()">
    <!-- Add an invisible span so JAWS can read the label -->
    <span style="display:none">&nbsp;</span>
    <ng-content></ng-content>
  </span>
</label>
`,styles:['.mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;display:block}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.mat-slide-toggle-input:focus~.mat-slide-toggle-thumb-container .mat-focus-indicator::before{content:""}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}']}]}],function(){return[{type:e.ElementRef},{type:u.FocusMonitor},{type:e.ChangeDetectorRef},{type:void 0,decorators:[{type:e.Attribute,args:["tabindex"]}]},{type:void 0,decorators:[{type:e.Inject,args:[m]}]},{type:void 0,decorators:[{type:e.Optional},{type:e.Inject,args:[h.ANIMATION_MODULE_TYPE]}]}]},{_inputElement:[{type:e.ViewChild,args:["input"]}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class g{}g.\u0275fac=function(a){return new(a||g)},g.\u0275mod=e.\u0275\u0275defineNgModule({type:g}),g.\u0275inj=e.\u0275\u0275defineInjector({imports:[i._MatSlideToggleRequiredValidatorModule,d.MatRippleModule,d.MatCommonModule,p.ObserversModule,i._MatSlideToggleRequiredValidatorModule,d.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(g,[{type:e.NgModule,args:[{imports:[i._MatSlideToggleRequiredValidatorModule,d.MatRippleModule,d.MatCommonModule,p.ObserversModule],exports:[i._MatSlideToggleRequiredValidatorModule,n,d.MatCommonModule],declarations:[n]}]}],null,null)}();/**
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
