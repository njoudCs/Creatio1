(self.webpackChunkapp_studio_enterprise_analytics_dashboard=self.webpackChunkapp_studio_enterprise_analytics_dashboard||[]).push([[8541,4901],{64901:(_,g,r)=>{r.r(g),r.d(g,{BaseStructureExplorerDataProvider:()=>n,StructureExplorerDialogResult:()=>I,StructureExplorerInitialState:()=>R,getAllowedAggregationFunctionsByDataValueType:()=>S});var C=r(21322),s=r(27049),y,P;const h=Symbol("ItemsFiltersField"),c=Symbol("ItemsFiltersProperty"),o=Symbol("RelatedItemsFiltersField"),d=Symbol("RelatedItemsFiltersProperty"),m=Symbol("IsItemsCustomFilterFunctionField"),p=Symbol("IsRelatedItemsCustomFilterFunctionField"),F=Symbol("mapFunctionField"),f=Symbol("mapFunctionProperty");class n{constructor(){this[y]=!1,this[P]=!1,this.breadCrumbs=[],this.caption$=new C.Subject,this.breadCrumbs$=new C.Subject}get[d](){return this[o]||(this[o]=[]),this[o]}get[c](){return this[h]||(this[h]=[]),this[h]}get[f](){if(this[F])return this[F];throw new Error("Map function is null")}get sortFunction(){return this._sortFunction?this._sortFunction:n._defaultSortFunction}get relatedItemsSortFunction(){return this._relatedItemsSortFunction?this._relatedItemsSortFunction:n._defaultRelatedItemsSortFunction}static _sortByCaption(t,e){return t.caption?.toLowerCase().localeCompare(e.caption?.toLowerCase())}static _defaultSortFunction(t,e,a){const l=t?.selectedMetaPaths;if(l){const A=l.includes(e.metaPath),b=l.includes(a.metaPath);if(A&&!b)return-1;if(!A&&b)return 1}return n._sortByCaption(e,a)}static _defaultRelatedItemsSortFunction(t,e){return n._sortByCaption(t,e)}_getFilteredItems(t,e){return e.reduce((a,l)=>a.filter(l),t)}_filterResultData(t){return t.items=this._getFilteredItems(t.items,this[c]),t.relatedItems=this._getFilteredItems(t.relatedItems,this[d]),t}_mapItems(t){return t.map(this[f],this)}_sortResultData(t){return t.items.sort(this.sortFunction.bind(this,this.launchOptions)),t.relatedItems.sort(this.relatedItemsSortFunction),t}_updateItemsMetaPath(t,e){t.map(a=>(a.metaPath=this.getMetaPath(e,a),a.metaPathCaption=this.getMetaPathCaption(e,a),a.columnPath=this.getColumnPath(e,a),this.enrichMetaPathCaptionArray(e,a),a),this)}_enrichMetaPath(t,e){return this._updateItemsMetaPath(t.items,e),this._updateItemsMetaPath(t.relatedItems,e),t}_getAllowedItemsFilter(t){return e=>t.indexOf(e.id)>=0}_getAllowedRelatedItemsFilter(){return t=>!1}_getExcludedItemsFilter(t){return e=>t.indexOf(e.id)<0}_initializeCurrentState(t){return this.getInitialState(t).pipe((0,s.map)(e=>{this.initialState=e}))}setBreadCrumbs(t){const e=this.initialState.getRootItem();if(t.metaPath===e?.metaPath){this.breadCrumbs=this.initialState.getBreadCrumbs();return}t.caption||(t.caption=this.getCaption()),this.breadCrumbs.push(t)}copyStructureExplorerItem(t){return{id:t.id,name:t.name,caption:t.caption,shortCaption:t.shortCaption,hasChildren:t.hasChildren,metaPath:t.metaPath,metaPathCaption:t.metaPathCaption,columnPath:t.columnPath,tags:t.tags?[...t.tags]:null,data:t.data}}getDefaultRootItem(){return{id:null,name:null,caption:null,hasChildren:!0,metaPath:"",metaPathCaption:"",columnPath:"",tags:null,data:null}}addItemsFilterFunction(t){if(this[m])throw new Error("Items custom filter function already exists");this[c].push(t)}addRelatedItemsFilterFunction(t){if(this[p])throw new Error("Related items custom filter function already exists");this[d].push(t)}setMapFunction(t){this[F]=t}getMetaPath(t,e){return t.metaPath?`${t.metaPath}.${e.id}`:e.id}getColumnPath(t,e){return t.columnPath?`${t.columnPath}.${e.name}`:e.name}getMetaPathCaption(t,e){return t.metaPathCaption?`${t.metaPathCaption}.${e.caption}`:e.metaPathCaption??e.caption}enrichMetaPathCaptionArray(t,e){e.metaPathCaptionArray?e.metaPathCaptionArray.push(e.caption):e.metaPathCaptionArray=[t.caption,e.caption]}innerInitialize(t){this.launchOptions=t.options,t.options&&Array.isArray(t.options.allowedItems)&&(this.addItemsFilterFunction(this._getAllowedItemsFilter(t.options.allowedItems)),this.addRelatedItemsFilterFunction(this._getAllowedRelatedItemsFilter())),t.options&&Array.isArray(t.options.excludedItems)&&this.addItemsFilterFunction(this._getExcludedItemsFilter(t.options.excludedItems)),t.mapFunction&&this.setMapFunction(t.mapFunction),t.itemsCustomFilterFunction&&(this[m]=!0,this[c].push(t.itemsCustomFilterFunction)),t.relatedItemsCustomFilterFunction&&(this[p]=!0,this[o].push(t.relatedItemsCustomFilterFunction)),t.sortFunction&&(this._sortFunction=t.sortFunction),t.relatedItemsSortFunction&&(this._relatedItemsSortFunction=t.relatedItemsSortFunction)}updateBreadCrumbsByIndex(t){if(this.breadCrumbs.length<t)throw new Error("Current index is out of breadCrumbs range");this.breadCrumbs=this.breadCrumbs.slice(0,t),this.breadCrumbs$.next(this.breadCrumbs)}getItems(t){let e;if(!t)e=this.getDefaultRootItem();else{if(t.hasChildren===!1)throw new Error("Can not drill down in item without children");e=this.copyStructureExplorerItem(t)}return this.getAllItems(e).pipe((0,s.tap)(()=>{this.caption$.next(this.getCaption()),this.setBreadCrumbs(e),this.breadCrumbs$.next(this.breadCrumbs)}),(0,s.map)(a=>this._mapItems(a)),(0,s.map)(a=>this.mapItemsToResult(a)),(0,s.map)(a=>this._enrichMetaPath(a,e)),(0,s.map)(a=>this._filterResultData(a)),(0,s.map)(a=>this._sortResultData(a)))}initialize(t){return this[h]=[],this[o]=[],this.innerInitialize(t),this._initializeCurrentState(t)}}y=m,P=p;var I;(function(u){u.Selected="selected",u.Canceled="canceled"})(I||(I={}));var i=r(75378);function S(u){switch(u){case i.DataValueType.Integer:case i.DataValueType.Float:case i.DataValueType.FLOAT1:case i.DataValueType.FLOAT2:case i.DataValueType.FLOAT3:case i.DataValueType.FLOAT4:case i.DataValueType.FLOAT8:case i.DataValueType.Money:return[{func:i.AggregationFunction.Sum,captionResource:"Sum"},{func:i.AggregationFunction.Avg,captionResource:"Avg"},{func:i.AggregationFunction.Max,captionResource:"MaxValue"},{func:i.AggregationFunction.Min,captionResource:"MinValue"},{func:i.AggregationFunction.TopOne,captionResource:"TopOne"}];case i.DataValueType.Date:case i.DataValueType.DateTime:return[{func:i.AggregationFunction.Max,captionResource:"MaxDate"},{func:i.AggregationFunction.Min,captionResource:"MinDate"},{func:i.AggregationFunction.TopOne,captionResource:"TopOne"}];default:return[{func:i.AggregationFunction.TopOne,captionResource:"TopOne"}]}}class R{constructor(t){if(this._selectedItemArrays=t,!Array.isArray(t))throw new Error("SelectedItemArrays property is invalid")}getRootItem(){const t=this._selectedItemArrays[0];return t&&t[t.length-2]}getSelectedItems(){return this._selectedItemArrays.map(t=>t[t.length-1])}getBreadCrumbs(){const t=this._selectedItemArrays[0];return t?.slice(0,t?.length-1)}}}}]);
