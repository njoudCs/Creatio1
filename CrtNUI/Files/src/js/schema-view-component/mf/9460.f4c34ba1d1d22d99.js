(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[9460],{49460:(M,b,n)=>{n.r(b),n.d(b,{MAT_LEGACY_CHECKBOX_CONTROL_VALUE_ACCESSOR:()=>s,MAT_LEGACY_CHECKBOX_DEFAULT_OPTIONS:()=>c.MAT_CHECKBOX_DEFAULT_OPTIONS,MAT_LEGACY_CHECKBOX_DEFAULT_OPTIONS_FACTORY:()=>c.MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY,MAT_LEGACY_CHECKBOX_REQUIRED_VALIDATOR:()=>c.MAT_CHECKBOX_REQUIRED_VALIDATOR,MatLegacyCheckbox:()=>i,MatLegacyCheckboxChange:()=>x,MatLegacyCheckboxModule:()=>k,MatLegacyCheckboxRequiredValidator:()=>c.MatCheckboxRequiredValidator,_MatLegacyCheckboxRequiredValidatorModule:()=>c._MatCheckboxRequiredValidatorModule});var l=n(71689),e=n(94450),u=n(34560),p=n(71006),c=n(69627),m=n(66385),d=n(71063);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const f=function(o){return{enterDuration:o}},g=["*"];class x{}const s={provide:u.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>i),multi:!0};class i extends c._MatCheckboxBase{constructor(t,a,h,r,y,_,C){super("mat-checkbox-",t,a,r,y,_,C),this._focusMonitor=h,this._animationClasses={uncheckedToChecked:"mat-checkbox-anim-unchecked-checked",uncheckedToIndeterminate:"mat-checkbox-anim-unchecked-indeterminate",checkedToUnchecked:"mat-checkbox-anim-checked-unchecked",checkedToIndeterminate:"mat-checkbox-anim-checked-indeterminate",indeterminateToChecked:"mat-checkbox-anim-indeterminate-checked",indeterminateToUnchecked:"mat-checkbox-anim-indeterminate-unchecked"}}_createChangeEvent(t){const a=new x;return a.source=this,a.checked=t,a}_getAnimationTargetElement(){return this._elementRef.nativeElement}ngAfterViewInit(){super.ngAfterViewInit(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t||this._onBlur()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onInputClick(t){t.stopPropagation(),super._handleInputClick()}focus(t,a){t?this._focusMonitor.focusVia(this._inputElement,t,a):this._inputElement.nativeElement.focus(a)}}i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(l.FocusMonitor),e.\u0275\u0275directiveInject(e.NgZone),e.\u0275\u0275injectAttribute("tabindex"),e.\u0275\u0275directiveInject(p.ANIMATION_MODULE_TYPE,8),e.\u0275\u0275directiveInject(c.MAT_CHECKBOX_DEFAULT_OPTIONS,8))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["mat-checkbox"]],hostAttrs:[1,"mat-checkbox"],hostVars:14,hostBindings:function(t,a){t&2&&(e.\u0275\u0275hostProperty("id",a.id),e.\u0275\u0275attribute("tabindex",null)("aria-label",null)("aria-labelledby",null),e.\u0275\u0275classProp("mat-checkbox-indeterminate",a.indeterminate)("mat-checkbox-checked",a.checked)("mat-checkbox-disabled",a.disabled)("mat-checkbox-label-before",a.labelPosition=="before")("_mat-animation-noopable",a._animationMode==="NoopAnimations"))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matCheckbox"],features:[e.\u0275\u0275ProvidersFeature([s]),e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:g,decls:17,vars:20,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(t,a){if(t&1&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"label",0,1)(2,"span",2)(3,"input",3,4),e.\u0275\u0275listener("change",function(r){return a._onInteractionEvent(r)})("click",function(r){return a._onInputClick(r)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"span",5),e.\u0275\u0275element(6,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"span",7),e.\u0275\u0275elementStart(8,"span",8),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(9,"svg",9),e.\u0275\u0275element(10,"path",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275element(11,"span",11),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"span",12,13),e.\u0275\u0275listener("cdkObserveContent",function(){return a._onLabelTextChange()}),e.\u0275\u0275elementStart(14,"span",14),e.\u0275\u0275text(15,"\xA0"),e.\u0275\u0275elementEnd(),e.\u0275\u0275projection(16),e.\u0275\u0275elementEnd()()),t&2){const h=e.\u0275\u0275reference(1),r=e.\u0275\u0275reference(13);e.\u0275\u0275attribute("for",a.inputId),e.\u0275\u0275advance(2),e.\u0275\u0275classProp("mat-checkbox-inner-container-no-side-margin",!r.textContent||!r.textContent.trim()),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",a.inputId)("required",a.required)("checked",a.checked)("disabled",a.disabled)("tabIndex",a.tabIndex),e.\u0275\u0275attribute("value",a.value)("name",a.name)("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby)("aria-describedby",a.ariaDescribedby),e.\u0275\u0275advance(2),e.\u0275\u0275property("matRippleTrigger",h)("matRippleDisabled",a._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",e.\u0275\u0275pureFunction1(18,f,a._animationMode==="NoopAnimations"?0:150))}},dependencies:[m.MatRipple,d.CdkObserveContent],styles:['@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.mat-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-checkbox-layout{-webkit-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:rgba(0,0,0,0);transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:rgba(0,0,0,0)}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox-input:focus~.mat-focus-indicator::before{content:""}'],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(i,[{type:e.Component,args:[{selector:"mat-checkbox",exportAs:"matCheckbox",host:{class:"mat-checkbox","[id]":"id","[attr.tabindex]":"null","[attr.aria-label]":"null","[attr.aria-labelledby]":"null","[class.mat-checkbox-indeterminate]":"indeterminate","[class.mat-checkbox-checked]":"checked","[class.mat-checkbox-disabled]":"disabled","[class.mat-checkbox-label-before]":'labelPosition == "before"',"[class._mat-animation-noopable]":"_animationMode === 'NoopAnimations'"},providers:[s],inputs:["disableRipple","color","tabIndex"],encapsulation:e.ViewEncapsulation.None,changeDetection:e.ChangeDetectionStrategy.OnPush,template:`<label [attr.for]="inputId" class="mat-checkbox-layout" #label>
  <span class="mat-checkbox-inner-container"
       [class.mat-checkbox-inner-container-no-side-margin]="!checkboxLabel.textContent || !checkboxLabel.textContent.trim()">
    <input #input
           class="mat-checkbox-input cdk-visually-hidden" type="checkbox"
           [id]="inputId"
           [required]="required"
           [checked]="checked"
           [attr.value]="value"
           [disabled]="disabled"
           [attr.name]="name"
           [tabIndex]="tabIndex"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           (change)="_onInteractionEvent($event)"
           (click)="_onInputClick($event)">
    <span matRipple class="mat-checkbox-ripple mat-focus-indicator"
         [matRippleTrigger]="label"
         [matRippleDisabled]="_isRippleDisabled()"
         [matRippleRadius]="20"
         [matRippleCentered]="true"
         [matRippleAnimation]="{enterDuration: _animationMode === 'NoopAnimations' ? 0 : 150}">
      <span class="mat-ripple-element mat-checkbox-persistent-ripple"></span>
    </span>
    <span class="mat-checkbox-frame"></span>
    <span class="mat-checkbox-background">
      <svg version="1.1"
           focusable="false"
           class="mat-checkbox-checkmark"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mat-checkbox-checkmark-path"
              fill="none"
              stroke="white"
              d="M4.1,12.7 9,17.6 20.3,6.3"/>
      </svg>
      <!-- Element for rendering the indeterminate state checkbox. -->
      <span class="mat-checkbox-mixedmark"></span>
    </span>
  </span>
  <span class="mat-checkbox-label" #checkboxLabel (cdkObserveContent)="_onLabelTextChange()">
    <!-- Add an invisible span so JAWS can read the label -->
    <span style="display:none">&nbsp;</span>
    <ng-content></ng-content>
  </span>
</label>
`,styles:['@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.mat-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-checkbox-layout{-webkit-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:rgba(0,0,0,0);transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:rgba(0,0,0,0)}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox-input:focus~.mat-focus-indicator::before{content:""}']}]}],function(){return[{type:e.ElementRef},{type:e.ChangeDetectorRef},{type:l.FocusMonitor},{type:e.NgZone},{type:void 0,decorators:[{type:e.Attribute,args:["tabindex"]}]},{type:void 0,decorators:[{type:e.Optional},{type:e.Inject,args:[p.ANIMATION_MODULE_TYPE]}]},{type:void 0,decorators:[{type:e.Optional},{type:e.Inject,args:[c.MAT_CHECKBOX_DEFAULT_OPTIONS]}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class k{}k.\u0275fac=function(t){return new(t||k)},k.\u0275mod=e.\u0275\u0275defineNgModule({type:k}),k.\u0275inj=e.\u0275\u0275defineInjector({imports:[m.MatRippleModule,m.MatCommonModule,d.ObserversModule,c._MatCheckboxRequiredValidatorModule,m.MatCommonModule,c._MatCheckboxRequiredValidatorModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(k,[{type:e.NgModule,args:[{imports:[m.MatRippleModule,m.MatCommonModule,d.ObserversModule,c._MatCheckboxRequiredValidatorModule],exports:[i,m.MatCommonModule,c._MatCheckboxRequiredValidatorModule],declarations:[i]}]}],null,null)}();/**
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
