(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[4270,538],{538:(V,h,i)=>{i.r(h),i.d(h,{BaseEntitySchemaStructureExplorerDataProvider:()=>r,StructureExplorerConst:()=>T});var n=i(75378),d=i(59929),o=i(49475),g=i(97600),m=i(21322),l=i(27049);class r extends d.BaseStructureExplorerDataProvider{constructor(){super(...arguments),this._defaultAggregatedDataValueTypes=[n.DataValueType.DateTime,n.DataValueType.Date,n.DataValueType.Time,n.DataValueType.Integer,n.DataValueType.Float,n.DataValueType.FLOAT1,n.DataValueType.FLOAT2,n.DataValueType.FLOAT3,n.DataValueType.FLOAT4,n.DataValueType.FLOAT8,n.DataValueType.Money],this._blobDataValueTypes=[n.DataValueType.Image,n.DataValueType.Blob]}static _getFirstColumnOnlyFilter(){return()=>!1}static _getOnlyLookupsFilter(){return e=>e.data.isLookupType}static _createStagedMetaPathArray(e){return e.split(".").reduce((t,a)=>{const y=(t.length>0?t[t.length-1]:[]).concat(a);return t.concat([y])},[]).map(t=>t.join("."))}static _getIsEqualsType(e,t){return e.data.dataValueType===t}static _extractSelectedMetaPathsFromOptions(e){const t=e?.selectedMetaPaths;return Array.isArray(t)?t.filter(a=>a):[]}static _createFlattenStagedMetaPathArray(e){const t=(0,g.flatMap)(e,a=>r._createStagedMetaPathArray(a));return(0,g.uniq)(t)}static _getHasChildren(e){return e.isLookupType||e.dataValueType===n.DataValueType.IMAGELOOKUP}_getAllowedReferenceSchema(e){return t=>e.includes(t.data.referenceSchemaName)}_getPrimaryColumnFilter(){return e=>this._entitySchema.primaryColumnUId!==e.data.uId}_getDataValueTypeFilter(e){return t=>r._getIsEqualsType(t,e)}_getDataValueTypeLenientFilter(e){return t=>(0,o.getDataValueTypeGroup)(e)?.includes(t.data.dataValueType)||r._getIsEqualsType(t,e)}_getUsageTypeFilter(e){return t=>e===o.EntitySchemaColumnUsageType.Advanced?!0:t.data.usageType===e}_getExcludeUsageTypeFilter(e){return t=>t.data.usageType!==e}_getExcludedDataValueTypesFilter(e){return t=>e.indexOf(t.data.dataValueType)<0}_getAggregationDataValueTypesFilter(){return e=>this._defaultAggregatedDataValueTypes.indexOf(e.data.dataValueType)>-1}_getEnableBlobDataValueTypeFilter(){return e=>this._blobDataValueTypes.indexOf(e.data.dataValueType)<0}_getMainRootItem(e){return this.getEntitySchema(e).pipe((0,l.map)(({caption:t})=>{const a=this.getDefaultRootItem();return a.caption=t.toString(),a}))}_getStructureExplorerItemArraysByMetaPath(e,t){const a="root",p=r._createFlattenStagedMetaPathArray(t),y=this._getMainRootItem(e).pipe((0,l.map)(s=>new Map([[a,s]]))),F=this.getColumnsInformationByMetaPath(e,p).pipe((0,l.map)(s=>new Map(s.map(u=>[u.metaPath,u]))));return(0,m.concat)(y,F).pipe((0,l.reduce)((s,u)=>{const c=Array.from(s).concat(Array.from(u));return new Map(c)},new Map),(0,l.map)(s=>t.map(u=>{const c=r._createStagedMetaPathArray(u);return[s.get(a)].concat(c.map(I=>s.get(I)))})))}mapFunction(e){return{id:e.uId,name:e.name,caption:e.caption||e.name,hasChildren:r._getHasChildren(e),metaPath:e.uId,metaPathCaption:e.caption,columnPath:e.name,tags:null,data:e}}mapItemsToResult(e){const t={items:[],relatedItems:[]};return e.forEach(a=>{t.items.push(a),a.hasChildren&&t.relatedItems.push(a)}),t}innerInitialize(e){const t={...e};t.mapFunction=t.mapFunction?t.mapFunction:this.mapFunction;const a=t.options;if(super.innerInitialize(t),!a.entitySchemaUId)throw new Error("EntitySchemaUId is not defined");a.displayId!==!0&&this.addItemsFilterFunction(this._getPrimaryColumnFilter()),a.firstColumnsOnly&&this.addRelatedItemsFilterFunction(r._getFirstColumnOnlyFilter()),a.dataValueType!=null&&(a.lenientDataValueTypeComparison?this.addItemsFilterFunction(this._getDataValueTypeLenientFilter(a.dataValueType)):this.addItemsFilterFunction(this._getDataValueTypeFilter(a.dataValueType))),a.onlyLookups&&this.addItemsFilterFunction(r._getOnlyLookupsFilter()),this.addItemsFilterFunction(this._getExcludeUsageTypeFilter(o.EntitySchemaColumnUsageType.None)),this.addRelatedItemsFilterFunction(this._getExcludeUsageTypeFilter(o.EntitySchemaColumnUsageType.None)),a.usageType!=null&&(this.addItemsFilterFunction(this._getUsageTypeFilter(a.usageType)),this.addRelatedItemsFilterFunction(this._getUsageTypeFilter(a.usageType))),Array.isArray(a.allowedReferenceSchemas)&&this.addItemsFilterFunction(this._getAllowedReferenceSchema(a.allowedReferenceSchemas)),a.enableBlobDataValueType||this.addItemsFilterFunction(this._getEnableBlobDataValueTypeFilter()),Array.isArray(a.excludedDataValueTypes)&&this.addItemsFilterFunction(this._getExcludedDataValueTypesFilter(a.excludedDataValueTypes)),a.aggregationColumnsOnly&&this.addItemsFilterFunction(this._getAggregationDataValueTypesFilter()),this._rootEntitySchemaUId=a.entitySchemaUId}getAllItems(e){const t=e.id?e.data.referenceSchemaUId:this._rootEntitySchemaUId;return this.getEntitySchema(t).pipe((0,l.map)(a=>(this._entitySchema=a,a.columns)))}getCaption(){return this._entitySchema.caption.toString()}getInitialState(e){const t=e.options?.entitySchemaUId,a=r._extractSelectedMetaPathsFromOptions(e.options);return t&&a?.length>0?this._getStructureExplorerItemArraysByMetaPath(t,a).pipe((0,l.map)(p=>new d.StructureExplorerInitialState(p))):(0,m.of)(new d.StructureExplorerInitialState([]))}}class T{}T.Providers={ENTITY_SCHEMA:"EntitySchemaStructureExplorerDataProvider"}}}]);
