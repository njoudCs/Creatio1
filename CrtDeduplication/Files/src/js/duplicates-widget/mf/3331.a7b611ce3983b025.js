(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[3331],{83331:($,N,f)=>{f.r(N),f.d(N,{ICON_REGISTRY_PROVIDER:()=>W,ICON_REGISTRY_PROVIDER_FACTORY:()=>L,MAT_ICON_DEFAULT_OPTIONS:()=>O,MAT_ICON_LOCATION:()=>w,MAT_ICON_LOCATION_FACTORY:()=>P,MatIcon:()=>u,MatIconModule:()=>m,MatIconRegistry:()=>l,getMatIconFailedToSanitizeLiteralError:()=>T,getMatIconFailedToSanitizeUrlError:()=>R,getMatIconNameNotFoundError:()=>F,getMatIconNoHttpProviderError:()=>A});var i=f(94450),p=f(66385),x=f(3127),v=f(31134),h=f(21322),c=f(27049),y=f(2876),M=f(54514);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const U=["*"];let S;function j(){if(S===void 0&&(S=null,typeof window<"u")){const s=window;s.trustedTypes!==void 0&&(S=s.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return S}function I(s){return j()?.createHTML(s)||s}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function F(s){return Error(`Unable to find icon with the name "${s}"`)}function A(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function R(s){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${s}".`)}function T(s){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${s}".`)}class d{constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}}class l{constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new d(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){const r=this._sanitizer.sanitize(i.SecurityContext.HTML,n);if(!r)throw T(n);const a=I(r);return this._addSvgIconConfig(t,e,new d("",a,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new d(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const o=this._sanitizer.sanitize(i.SecurityContext.HTML,e);if(!o)throw T(e);const r=I(o);return this._addSvgIconSetConfig(t,new d("",r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(i.SecurityContext.RESOURCE_URL,t);if(!e)throw R(t);const n=this._cachedIconsByUrl.get(e);return n?(0,h.of)(C(n)):this._loadSvgIconFromConfig(new d(t,null)).pipe((0,c.tap)(o=>this._cachedIconsByUrl.set(e,o)),(0,c.map)(o=>C(o)))}getNamedSvgIcon(t,e=""){const n=D(e,t);let o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);const r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):(0,h.throwError)(F(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?(0,h.of)(C(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe((0,c.map)(e=>C(e)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);if(n)return(0,h.of)(n);const o=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe((0,c.catchError)(a=>{const _=`Loading icon set URL: ${this._sanitizer.sanitize(i.SecurityContext.RESOURCE_URL,r.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(_)),(0,h.of)(null)})));return(0,h.forkJoin)(o).pipe((0,c.map)(()=>{const r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw F(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){const r=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(r,t,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe((0,c.tap)(e=>t.svgText=e),(0,c.map)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?(0,h.of)(null):this._fetchIcon(t).pipe((0,c.tap)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const o=t.querySelector(`[id="${e}"]`);if(!o)return null;const r=o.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),n);const a=this._svgElementFromString(I("<svg></svg>"));return a.appendChild(r),this._setSvgAttributes(a,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString(I("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){const{name:r,value:a}=n[o];r!=="id"&&e.setAttribute(r,a)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){const{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw A();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);const r=this._sanitizer.sanitize(i.SecurityContext.RESOURCE_URL,e);if(!r)throw R(e);const a=this._inProgressUrlFetches.get(r);if(a)return a;const g=this._httpClient.get(r,{responseType:"text",withCredentials:o}).pipe((0,c.map)(_=>I(_)),(0,c.finalize)(()=>this._inProgressUrlFetches.delete(r)),(0,c.share)());return this._inProgressUrlFetches.set(r,g),g}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(D(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){const o=this._resolvers[n](e,t);if(o)return z(o)?new d(o.url,null,o.options):new d(o,null)}}}l.\u0275fac=function(t){return new(t||l)(i.\u0275\u0275inject(y.HttpClient,8),i.\u0275\u0275inject(M.DomSanitizer),i.\u0275\u0275inject(v.DOCUMENT,8),i.\u0275\u0275inject(i.ErrorHandler))},l.\u0275prov=i.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(l,[{type:i.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:y.HttpClient,decorators:[{type:i.Optional}]},{type:M.DomSanitizer},{type:void 0,decorators:[{type:i.Optional},{type:i.Inject,args:[v.DOCUMENT]}]},{type:i.ErrorHandler}]},null)}();function L(s,t,e,n,o){return s||new l(t,e,o,n)}const W={provide:l,deps:[[new i.Optional,new i.SkipSelf,l],[new i.Optional,y.HttpClient],M.DomSanitizer,i.ErrorHandler,[new i.Optional,v.DOCUMENT]],useFactory:L};function C(s){return s.cloneNode(!0)}function D(s,t){return s+":"+t}function z(s){return!!(s.url&&s.options)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const H=(0,p.mixinColor)(class{constructor(s){this._elementRef=s}}),O=new i.InjectionToken("MAT_ICON_DEFAULT_OPTIONS"),w=new i.InjectionToken("mat-icon-location",{providedIn:"root",factory:P});function P(){const s=(0,i.inject)(v.DOCUMENT),t=s?s.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}const b=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],B=b.map(s=>`[${s}]`).join(", "),k=/^url\(['"]?#(.*?)['"]?\)$/;class u extends H{get inline(){return this._inline}set inline(t){this._inline=(0,x.coerceBooleanProperty)(t)}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,n,o,r,a){super(t),this._iconRegistry=e,this._location=o,this._errorHandler=r,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=h.Subscription.EMPTY,a&&(a.color&&(this.color=this.defaultColor=a.color),a.fontSet&&(this.fontSet=a.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(r=>{o.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(B),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)b.forEach(r=>{const a=e[o],g=a.getAttribute(r),_=g?g.match(k):null;if(_){let E=n.get(a);E||(E=[],n.set(a,E)),E.push({name:r,value:_[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe((0,c.take)(1)).subscribe(o=>this._setSvgElement(o),o=>{const r=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}}u.\u0275fac=function(t){return new(t||u)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(l),i.\u0275\u0275injectAttribute("aria-hidden"),i.\u0275\u0275directiveInject(w),i.\u0275\u0275directiveInject(i.ErrorHandler),i.\u0275\u0275directiveInject(O,8))},u.\u0275cmp=i.\u0275\u0275defineComponent({type:u,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:8,hostBindings:function(t,e){t&2&&(i.\u0275\u0275attribute("data-mat-icon-type",e._usingFontIcon()?"font":"svg")("data-mat-icon-name",e._svgName||e.fontIcon)("data-mat-icon-namespace",e._svgNamespace||e.fontSet)("fontIcon",e._usingFontIcon()?e.fontIcon:null),i.\u0275\u0275classProp("mat-icon-inline",e.inline)("mat-icon-no-color",e.color!=="primary"&&e.color!=="accent"&&e.color!=="warn"))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[i.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:U,decls:1,vars:0,template:function(t,e){t&1&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275projection(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(u,[{type:i.Component,args:[{template:"<ng-content></ng-content>",selector:"mat-icon",exportAs:"matIcon",inputs:["color"],host:{role:"img",class:"mat-icon notranslate","[attr.data-mat-icon-type]":'_usingFontIcon() ? "font" : "svg"',"[attr.data-mat-icon-name]":"_svgName || fontIcon","[attr.data-mat-icon-namespace]":"_svgNamespace || fontSet","[attr.fontIcon]":"_usingFontIcon() ? fontIcon : null","[class.mat-icon-inline]":"inline","[class.mat-icon-no-color]":'color !== "primary" && color !== "accent" && color !== "warn"'},encapsulation:i.ViewEncapsulation.None,changeDetection:i.ChangeDetectionStrategy.OnPush,styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"]}]}],function(){return[{type:i.ElementRef},{type:l},{type:void 0,decorators:[{type:i.Attribute,args:["aria-hidden"]}]},{type:void 0,decorators:[{type:i.Inject,args:[w]}]},{type:i.ErrorHandler},{type:void 0,decorators:[{type:i.Optional},{type:i.Inject,args:[O]}]}]},{inline:[{type:i.Input}],svgIcon:[{type:i.Input}],fontSet:[{type:i.Input}],fontIcon:[{type:i.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275mod=i.\u0275\u0275defineNgModule({type:m}),m.\u0275inj=i.\u0275\u0275defineInjector({imports:[p.MatCommonModule,p.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(m,[{type:i.NgModule,args:[{imports:[p.MatCommonModule],exports:[u,p.MatCommonModule],declarations:[u]}]}],null,null)}();/**
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
