(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[6780],{96780:(H,E,_)=>{_.r(E),_.d(E,{MatLegacyCell:()=>C,MatLegacyCellDef:()=>i,MatLegacyColumnDef:()=>l,MatLegacyFooterCell:()=>M,MatLegacyFooterCellDef:()=>d,MatLegacyFooterRow:()=>y,MatLegacyFooterRowDef:()=>f,MatLegacyHeaderCell:()=>D,MatLegacyHeaderCellDef:()=>s,MatLegacyHeaderRow:()=>p,MatLegacyHeaderRowDef:()=>c,MatLegacyNoDataRow:()=>g,MatLegacyRecycleRows:()=>x,MatLegacyRow:()=>m,MatLegacyRowDef:()=>u,MatLegacyTable:()=>n,MatLegacyTableDataSource:()=>A,MatLegacyTableModule:()=>v,MatLegacyTextColumn:()=>w,_MatLegacyTableDataSource:()=>L._MatTableDataSource});var e=_(94450),a=_(40283),h=_(60317),R=_(66385),L=_(1439);const b=[[["caption"]],[["colgroup"],["col"]]],k=["caption","colgroup, col"];function I(t,r){if(t&1&&(e.\u0275\u0275elementStart(0,"th",3),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),t&2){const o=e.\u0275\u0275nextContext();e.\u0275\u0275styleProp("text-align",o.justify),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",o.headerText," ")}}function S(t,r){if(t&1&&(e.\u0275\u0275elementStart(0,"td",4),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),t&2){const o=r.$implicit,F=e.\u0275\u0275nextContext();e.\u0275\u0275styleProp("text-align",F.justify),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",F.dataAccessor(o,F.name)," ")}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class x{}x.\u0275fac=function(r){return new(r||x)},x.\u0275dir=e.\u0275\u0275defineDirective({type:x,selectors:[["mat-table","recycleRows",""],["table","mat-table","","recycleRows",""]],features:[e.\u0275\u0275ProvidersFeature([{provide:h._VIEW_REPEATER_STRATEGY,useClass:h._RecycleViewRepeaterStrategy}])]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(x,[{type:e.Directive,args:[{selector:"mat-table[recycleRows], table[mat-table][recycleRows]",providers:[{provide:h._VIEW_REPEATER_STRATEGY,useClass:h._RecycleViewRepeaterStrategy}]}]}],null,null)}();class n extends a.CdkTable{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky",this.needsPositionStickyOnElement=!1}}n.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(n)))(o||n)}}(),n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],hostVars:2,hostBindings:function(r,o){r&2&&e.\u0275\u0275classProp("mat-table-fixed-layout",o.fixedLayout)},exportAs:["matTable"],features:[e.\u0275\u0275ProvidersFeature([{provide:h._VIEW_REPEATER_STRATEGY,useClass:h._DisposeViewRepeaterStrategy},{provide:a.CdkTable,useExisting:n},{provide:a.CDK_TABLE,useExisting:n},{provide:a._COALESCED_STYLE_SCHEDULER,useClass:a._CoalescedStyleScheduler},{provide:a.STICKY_POSITIONING_LISTENER,useValue:null}]),e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:k,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(r,o){r&1&&(e.\u0275\u0275projectionDef(b),e.\u0275\u0275projection(0),e.\u0275\u0275projection(1,1),e.\u0275\u0275elementContainer(2,0)(3,1)(4,2)(5,3))},dependencies:[a.DataRowOutlet,a.HeaderRowOutlet,a.FooterRowOutlet,a.NoDataRowOutlet],styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}"],encapsulation:2}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(n,[{type:e.Component,args:[{selector:"mat-table, table[mat-table]",exportAs:"matTable",template:a.CDK_TABLE_TEMPLATE,host:{class:"mat-table","[class.mat-table-fixed-layout]":"fixedLayout"},providers:[{provide:h._VIEW_REPEATER_STRATEGY,useClass:h._DisposeViewRepeaterStrategy},{provide:a.CdkTable,useExisting:n},{provide:a.CDK_TABLE,useExisting:n},{provide:a._COALESCED_STYLE_SCHEDULER,useClass:a._CoalescedStyleScheduler},{provide:a.STICKY_POSITIONING_LISTENER,useValue:null}],encapsulation:e.ViewEncapsulation.None,changeDetection:e.ChangeDetectionStrategy.Default,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}"]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class i extends a.CdkCellDef{}i.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(i)))(o||i)}}(),i.\u0275dir=e.\u0275\u0275defineDirective({type:i,selectors:[["","matCellDef",""]],features:[e.\u0275\u0275ProvidersFeature([{provide:a.CdkCellDef,useExisting:i}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(i,[{type:e.Directive,args:[{selector:"[matCellDef]",providers:[{provide:a.CdkCellDef,useExisting:i}]}]}],null,null)}();class s extends a.CdkHeaderCellDef{}s.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(s)))(o||s)}}(),s.\u0275dir=e.\u0275\u0275defineDirective({type:s,selectors:[["","matHeaderCellDef",""]],features:[e.\u0275\u0275ProvidersFeature([{provide:a.CdkHeaderCellDef,useExisting:s}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(s,[{type:e.Directive,args:[{selector:"[matHeaderCellDef]",providers:[{provide:a.CdkHeaderCellDef,useExisting:s}]}]}],null,null)}();class d extends a.CdkFooterCellDef{}d.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(d)))(o||d)}}(),d.\u0275dir=e.\u0275\u0275defineDirective({type:d,selectors:[["","matFooterCellDef",""]],features:[e.\u0275\u0275ProvidersFeature([{provide:a.CdkFooterCellDef,useExisting:d}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(d,[{type:e.Directive,args:[{selector:"[matFooterCellDef]",providers:[{provide:a.CdkFooterCellDef,useExisting:d}]}]}],null,null)}();class l extends a.CdkColumnDef{get name(){return this._name}set name(r){this._setNameInput(r)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}}l.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(l)))(o||l)}}(),l.\u0275dir=e.\u0275\u0275defineDirective({type:l,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[e.\u0275\u0275ProvidersFeature([{provide:a.CdkColumnDef,useExisting:l},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:l}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(l,[{type:e.Directive,args:[{selector:"[matColumnDef]",inputs:["sticky"],providers:[{provide:a.CdkColumnDef,useExisting:l},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:l}]}]}],null,{name:[{type:e.Input,args:["matColumnDef"]}]})}();class D extends a.CdkHeaderCell{}D.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(D)))(o||D)}}(),D.\u0275dir=e.\u0275\u0275defineDirective({type:D,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(D,[{type:e.Directive,args:[{selector:"mat-header-cell, th[mat-header-cell]",host:{class:"mat-header-cell",role:"columnheader"}}]}],null,null)}();class M extends a.CdkFooterCell{}M.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(M)))(o||M)}}(),M.\u0275dir=e.\u0275\u0275defineDirective({type:M,selectors:[["mat-footer-cell"],["td","mat-footer-cell",""]],hostAttrs:["role","gridcell",1,"mat-footer-cell"],features:[e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(M,[{type:e.Directive,args:[{selector:"mat-footer-cell, td[mat-footer-cell]",host:{class:"mat-footer-cell",role:"gridcell"}}]}],null,null)}();class C extends a.CdkCell{}C.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(C)))(o||C)}}(),C.\u0275dir=e.\u0275\u0275defineDirective({type:C,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(C,[{type:e.Directive,args:[{selector:"mat-cell, td[mat-cell]",host:{class:"mat-cell",role:"gridcell"}}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class c extends a.CdkHeaderRowDef{}c.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(c)))(o||c)}}(),c.\u0275dir=e.\u0275\u0275defineDirective({type:c,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[e.\u0275\u0275ProvidersFeature([{provide:a.CdkHeaderRowDef,useExisting:c}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(c,[{type:e.Directive,args:[{selector:"[matHeaderRowDef]",providers:[{provide:a.CdkHeaderRowDef,useExisting:c}],inputs:["columns: matHeaderRowDef","sticky: matHeaderRowDefSticky"]}]}],null,null)}();class f extends a.CdkFooterRowDef{}f.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(f)))(o||f)}}(),f.\u0275dir=e.\u0275\u0275defineDirective({type:f,selectors:[["","matFooterRowDef",""]],inputs:{columns:["matFooterRowDef","columns"],sticky:["matFooterRowDefSticky","sticky"]},features:[e.\u0275\u0275ProvidersFeature([{provide:a.CdkFooterRowDef,useExisting:f}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(f,[{type:e.Directive,args:[{selector:"[matFooterRowDef]",providers:[{provide:a.CdkFooterRowDef,useExisting:f}],inputs:["columns: matFooterRowDef","sticky: matFooterRowDefSticky"]}]}],null,null)}();class u extends a.CdkRowDef{}u.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(u)))(o||u)}}(),u.\u0275dir=e.\u0275\u0275defineDirective({type:u,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[e.\u0275\u0275ProvidersFeature([{provide:a.CdkRowDef,useExisting:u}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(u,[{type:e.Directive,args:[{selector:"[matRowDef]",providers:[{provide:a.CdkRowDef,useExisting:u}],inputs:["columns: matRowDefColumns","when: matRowDefWhen"]}]}],null,null)}();class p extends a.CdkHeaderRow{}p.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(p)))(o||p)}}(),p.\u0275cmp=e.\u0275\u0275defineComponent({type:p,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[e.\u0275\u0275ProvidersFeature([{provide:a.CdkHeaderRow,useExisting:p}]),e.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(r,o){r&1&&e.\u0275\u0275elementContainer(0,0)},dependencies:[a.CdkCellOutlet],encapsulation:2}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(p,[{type:e.Component,args:[{selector:"mat-header-row, tr[mat-header-row]",template:a.CDK_ROW_TEMPLATE,host:{class:"mat-header-row",role:"row"},changeDetection:e.ChangeDetectionStrategy.Default,encapsulation:e.ViewEncapsulation.None,exportAs:"matHeaderRow",providers:[{provide:a.CdkHeaderRow,useExisting:p}]}]}],null,null)}();class y extends a.CdkFooterRow{}y.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(y)))(o||y)}}(),y.\u0275cmp=e.\u0275\u0275defineComponent({type:y,selectors:[["mat-footer-row"],["tr","mat-footer-row",""]],hostAttrs:["role","row",1,"mat-footer-row"],exportAs:["matFooterRow"],features:[e.\u0275\u0275ProvidersFeature([{provide:a.CdkFooterRow,useExisting:y}]),e.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(r,o){r&1&&e.\u0275\u0275elementContainer(0,0)},dependencies:[a.CdkCellOutlet],encapsulation:2}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(y,[{type:e.Component,args:[{selector:"mat-footer-row, tr[mat-footer-row]",template:a.CDK_ROW_TEMPLATE,host:{class:"mat-footer-row",role:"row"},changeDetection:e.ChangeDetectionStrategy.Default,encapsulation:e.ViewEncapsulation.None,exportAs:"matFooterRow",providers:[{provide:a.CdkFooterRow,useExisting:y}]}]}],null,null)}();class m extends a.CdkRow{}m.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(m)))(o||m)}}(),m.\u0275cmp=e.\u0275\u0275defineComponent({type:m,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[e.\u0275\u0275ProvidersFeature([{provide:a.CdkRow,useExisting:m}]),e.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(r,o){r&1&&e.\u0275\u0275elementContainer(0,0)},dependencies:[a.CdkCellOutlet],encapsulation:2}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(m,[{type:e.Component,args:[{selector:"mat-row, tr[mat-row]",template:a.CDK_ROW_TEMPLATE,host:{class:"mat-row",role:"row"},changeDetection:e.ChangeDetectionStrategy.Default,encapsulation:e.ViewEncapsulation.None,exportAs:"matRow",providers:[{provide:a.CdkRow,useExisting:m}]}]}],null,null)}();class g extends a.CdkNoDataRow{constructor(){super(...arguments),this._contentClassName="mat-no-data-row"}}g.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(g)))(o||g)}}(),g.\u0275dir=e.\u0275\u0275defineDirective({type:g,selectors:[["ng-template","matNoDataRow",""]],features:[e.\u0275\u0275ProvidersFeature([{provide:a.CdkNoDataRow,useExisting:g}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(g,[{type:e.Directive,args:[{selector:"ng-template[matNoDataRow]",providers:[{provide:a.CdkNoDataRow,useExisting:g}]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class w extends a.CdkTextColumn{}w.\u0275fac=function(){let t;return function(o){return(t||(t=e.\u0275\u0275getInheritedFactory(w)))(o||w)}}(),w.\u0275cmp=e.\u0275\u0275defineComponent({type:w,selectors:[["mat-text-column"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:3,vars:0,consts:[["matColumnDef",""],["mat-header-cell","",3,"text-align",4,"matHeaderCellDef"],["mat-cell","",3,"text-align",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""]],template:function(r,o){r&1&&(e.\u0275\u0275elementContainerStart(0,0),e.\u0275\u0275template(1,I,2,3,"th",1),e.\u0275\u0275template(2,S,2,3,"td",2),e.\u0275\u0275elementContainerEnd())},dependencies:[s,l,i,D,C],encapsulation:2}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(w,[{type:e.Component,args:[{selector:"mat-text-column",template:`
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,encapsulation:e.ViewEncapsulation.None,changeDetection:e.ChangeDetectionStrategy.Default}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const T=[n,x,s,c,l,i,u,d,f,D,C,M,p,m,y,g,w];class v{}v.\u0275fac=function(r){return new(r||v)},v.\u0275mod=e.\u0275\u0275defineNgModule({type:v}),v.\u0275inj=e.\u0275\u0275defineInjector({imports:[a.CdkTableModule,R.MatCommonModule,R.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(v,[{type:e.NgModule,args:[{imports:[a.CdkTableModule,R.MatCommonModule],exports:[R.MatCommonModule,T],declarations:T}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class A extends L._MatTableDataSource{}/**
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
