(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[9818],{69818:($t,mt,z)=>{z.r(mt),z.d(mt,{LookupMode:()=>tt,\u0275AggregationEvalType:()=>Y,\u0275AggregationFunction:()=>nt,\u0275AggregationFunctionColumn:()=>It,\u0275AggregationFunctionExpression:()=>p,\u0275AggregationSubQueryColumn:()=>Nt,\u0275AggregationSubQueryExpression:()=>b,\u0275AggregationType:()=>et,\u0275ArgumentEmptyException:()=>Z,\u0275ArgumentFunctionExpression:()=>g,\u0275ArgumentOutOfRangeException:()=>ct,\u0275ArithmeticExpression:()=>L,\u0275ArithmeticOperation:()=>rt,\u0275ArithmeticQueryColumn:()=>At,\u0275BaseExpression:()=>f,\u0275BaseExpressionParser:()=>dt,\u0275BaseFilter:()=>N,\u0275BaseFilterParser:()=>gt,\u0275BaseFilterableQuery:()=>$,\u0275BaseQuery:()=>lt,\u0275BaseQueryColumn:()=>O,\u0275BaseRequest:()=>Mt,\u0275BetweenFilter:()=>k,\u0275ColumnExpression:()=>o,\u0275CompareFilter:()=>J,\u0275ComparisonType:()=>x,\u0275DEFAULT_COLUMN_PLAIN_OBJ:()=>bt,\u0275DEFAULT_FILTER_PLAIN_OBJ:()=>Ct,\u0275DataSchemaAttributeType:()=>y,\u0275DataSchemaAttributeUsageType:()=>Q,\u0275DataSchemaType:()=>st,\u0275DataSourceScope:()=>T,\u0275DataValueType:()=>R,\u0275DatePartFunctionColumn:()=>Kt,\u0275DatePartFunctionExpression:()=>w,\u0275DatePartType:()=>ot,\u0275DefaultValueSource:()=>V,\u0275DeleteQuery:()=>jt,\u0275EMPTY_GUID:()=>Ot,\u0275EXPRESSION_TYPE_MOCK:()=>Et,\u0275EntityQueryColumn:()=>Pt,\u0275EntitySchemaQuery:()=>Jt,\u0275ExistsFilter:()=>I,\u0275ExpressionMock:()=>q,\u0275ExpressionParser:()=>D,\u0275ExpressionResolver:()=>_t,\u0275ExpressionType:()=>_,\u0275FilterGroup:()=>A,\u0275FilterMock:()=>M,\u0275FilterParser:()=>ut,\u0275FilterResolver:()=>wt,\u0275FilterType:()=>a,\u0275FunctionExpression:()=>G,\u0275FunctionType:()=>h,\u0275InFilter:()=>K,\u0275InsertQuery:()=>kt,\u0275IsNullFilter:()=>C,\u0275ItemNotFoundException:()=>pt,\u0275LengthFunctionColumn:()=>Lt,\u0275LengthFunctionExpression:()=>F,\u0275LogicalOperatorType:()=>U,\u0275MacrosFunctionColumn:()=>Ft,\u0275MacrosFunctionExpression:()=>P,\u0275ModelInPageAction:()=>it,\u0275ModelParameterType:()=>at,\u0275NextHandlerAlreadySpecifiedException:()=>qt,\u0275OrderDirection:()=>H,\u0275ParameterExpression:()=>m,\u0275ParameterQueryColumn:()=>vt,\u0275QueryMacrosType:()=>j,\u0275QueryOperationType:()=>B,\u0275SelectLocalizationQuery:()=>Dt,\u0275SingleFilter:()=>E,\u0275SubQueryColumn:()=>Wt,\u0275SubQueryExpression:()=>v,\u0275UpdateQuery:()=>Bt,\u0275ValidationUtilities:()=>d,\u0275WindowFunctionColumn:()=>St,\u0275WindowFunctionExpression:()=>S,\u0275encodeDate:()=>ft,\u0275generateGuid:()=>xt,\u0275getColumnPlainObj:()=>zt,\u0275getFilterPlainObj:()=>Xt,\u0275isEmptyGuid:()=>Ht,\u0275isGuid:()=>Yt,\u0275parserMock:()=>Rt,\u0275toLocalISOString:()=>ht});function ht(t){if(!(t instanceof Date))throw new TypeError;const e=t.getTimezoneOffset()*6e4;return new Date(t.getTime()-e).toISOString().slice(0,-1)}function ft(t){return`"${ht(t)}"`}var T;(function(t){t.ViewElement="viewElement",t.Page="page"})(T||(T={}));var y;(function(t){t.OwnAttribute="Own",t.ForwardReferenceAttribute="ForwardReference",t.BackReferenceAttribute="BackReference",t.AggregationAttribute="Aggregation",t.FunctionAttribute="Function"})(y||(y={}));var Q;(function(t){t[t.General=0]="General",t[t.Advanced=1]="Advanced",t[t.None=2]="None"})(Q||(Q={}));var V;(function(t){t[t.None=0]="None",t[t.Const=1]="Const",t[t.Settings=2]="Settings",t[t.SystemValue=3]="SystemValue",t[t.Sequence=4]="Sequence"})(V||(V={}));var tt;(function(t){t.List="List",t.SelectionWindow="SelectionWindow"})(tt||(tt={}));var R;(function(t){t[t.Guid=0]="Guid",t[t.Text=1]="Text",t[t.Integer=4]="Integer",t[t.Float=5]="Float",t[t.Money=6]="Money",t[t.DateTime=7]="DateTime",t[t.Date=8]="Date",t[t.Time=9]="Time",t[t.Lookup=10]="Lookup",t[t.Enum=11]="Enum",t[t.Boolean=12]="Boolean",t[t.Blob=13]="Blob",t[t.Image=14]="Image",t[t.CUSTOM_OBJECT=15]="CUSTOM_OBJECT",t[t.IMAGELOOKUP=16]="IMAGELOOKUP",t[t.COLLECTION=17]="COLLECTION",t[t.Color=18]="Color",t[t.LOCALIZABLE_STRING=19]="LOCALIZABLE_STRING",t[t.ENTITY=20]="ENTITY",t[t.ENTITY_COLLECTION=21]="ENTITY_COLLECTION",t[t.ENTITY_COLUMN_MAPPING_COLLECTION=22]="ENTITY_COLUMN_MAPPING_COLLECTION",t[t.HASH_TEXT=23]="HASH_TEXT",t[t.SECURE_TEXT=24]="SECURE_TEXT",t[t.FILE=25]="FILE",t[t.MAPPING=26]="MAPPING",t[t.SHORT_TEXT=27]="SHORT_TEXT",t[t.MEDIUM_TEXT=28]="MEDIUM_TEXT",t[t.MAXSIZE_TEXT=29]="MAXSIZE_TEXT",t[t.LONG_TEXT=30]="LONG_TEXT",t[t.FLOAT1=31]="FLOAT1",t[t.FLOAT2=32]="FLOAT2",t[t.FLOAT3=33]="FLOAT3",t[t.FLOAT4=34]="FLOAT4",t[t.LOCALIZABLE_PARAMETER_VALUES_LIST=35]="LOCALIZABLE_PARAMETER_VALUES_LIST",t[t.METADATA_TEXT=36]="METADATA_TEXT",t[t.STAGE_INDICATOR=37]="STAGE_INDICATOR",t[t.OBJECT_LIST=38]="OBJECT_LIST",t[t.COMPOSITE_OBJECT_LIST=39]="COMPOSITE_OBJECT_LIST",t[t.FLOAT8=40]="FLOAT8",t[t.FILE_LOCATOR=41]="FILE_LOCATOR",t[t.PHONE_TEXT=42]="PHONE_TEXT",t[t.RICH_TEXT=43]="RICH_TEXT",t[t.WEB_TEXT=44]="WEB_TEXT",t[t.EMAIL_TEXT=45]="EMAIL_TEXT"})(R||(R={}));var et;(function(t){t[t.None=0]="None",t[t.Count=1]="Count",t[t.Sum=2]="Sum",t[t.Avg=3]="Avg",t[t.Min=4]="Min",t[t.Max=5]="Max",t[t.TopOne=6]="TopOne"})(et||(et={}));var nt;(function(t){t.None="",t.Count="Count",t.Sum="Sum",t.Avg="Avg",t.Min="Min",t.Max="Max",t.TopOne="TopOne"})(nt||(nt={}));var st;(function(t){t.Entity="Entity",t.ClientUnit="ClientUnit"})(st||(st={}));var it;(function(t){t.Edit="edit",t.Add="add",t.Copy="copy"})(it||(it={}));var U;(function(t){t[t.And=0]="And",t[t.Or=1]="Or"})(U||(U={}));var Y;(function(t){t[t.None=0]="None",t[t.All=1]="All",t[t.Distinct=2]="Distinct"})(Y||(Y={}));var rt;(function(t){t[t.Addition=0]="Addition",t[t.Subtraction=1]="Subtraction",t[t.Multiplication=2]="Multiplication",t[t.Division=3]="Division"})(rt||(rt={}));var x;(function(t){t[t.Between=0]="Between",t[t.Contain=11]="Contain",t[t.End_with=13]="End_with",t[t.Equal=3]="Equal",t[t.Exists=15]="Exists",t[t.Greater=7]="Greater",t[t.Greater_or_equal=8]="Greater_or_equal",t[t.Is_not_null=2]="Is_not_null",t[t.Is_null=1]="Is_null",t[t.Less=5]="Less",t[t.Less_or_equal=6]="Less_or_equal",t[t.Not_contain=12]="Not_contain",t[t.Not_end_with=14]="Not_end_with",t[t.Not_equal=4]="Not_equal",t[t.Not_exists=16]="Not_exists",t[t.Not_start_with=10]="Not_start_with",t[t.Start_with=9]="Start_with"})(x||(x={}));var ot;(function(t){t[t.None=0]="None",t[t.Day=1]="Day",t[t.Week=2]="Week",t[t.Month=3]="Month",t[t.Year=4]="Year",t[t.WeekDay=5]="WeekDay",t[t.Hour=6]="Hour",t[t.HourMinute=7]="HourMinute"})(ot||(ot={}));var _;(function(t){t[t.SchemaColumn=0]="SchemaColumn",t[t.Function=1]="Function",t[t.Parameter=2]="Parameter",t[t.SubQuery=3]="SubQuery",t[t.ArithmeticOperation=4]="ArithmeticOperation"})(_||(_={}));var a;(function(t){t[t.None=0]="None",t[t.Compare=1]="Compare",t[t.IsNull=2]="IsNull",t[t.Between=3]="Between",t[t.In=4]="In",t[t.Exists=5]="Exists",t[t.FilterGroup=6]="FilterGroup"})(a||(a={}));var h;(function(t){t[t.None=0]="None",t[t.Macros=1]="Macros",t[t.Aggregation=2]="Aggregation",t[t.DatePart=3]="DatePart",t[t.Length=4]="Length",t[t.Window=5]="Window",t[t.DateAdd=6]="DateAdd",t[t.DateDiff=7]="DateDiff"})(h||(h={}));var H;(function(t){t[t.None=0]="None",t[t.Asc=1]="Asc",t[t.Desc=2]="Desc"})(H||(H={}));var j;(function(t){t[t.None=0]="None",t[t.CurrentUser=1]="CurrentUser",t[t.CurrentUserContact=2]="CurrentUserContact",t[t.Yesterday=3]="Yesterday",t[t.Today=4]="Today",t[t.Tomorrow=5]="Tomorrow",t[t.PreviousWeek=6]="PreviousWeek",t[t.CurrentWeek=7]="CurrentWeek",t[t.NextWeek=8]="NextWeek",t[t.PreviousMonth=9]="PreviousMonth",t[t.CurrentMonth=10]="CurrentMonth",t[t.NextMonth=11]="NextMonth",t[t.PreviousQuarter=12]="PreviousQuarter",t[t.CurrentQuarter=13]="CurrentQuarter",t[t.NextQuarter=14]="NextQuarter",t[t.PreviousHalfYear=15]="PreviousHalfYear",t[t.CurrentHalfYear=16]="CurrentHalfYear",t[t.NextHalfYear=17]="NextHalfYear",t[t.PreviousYear=18]="PreviousYear",t[t.CurrentYear=19]="CurrentYear",t[t.PreviousHour=20]="PreviousHour",t[t.CurrentHour=21]="CurrentHour",t[t.NextHour=22]="NextHour",t[t.NextYear=23]="NextYear",t[t.NextNDays=24]="NextNDays",t[t.PreviousNDays=25]="PreviousNDays",t[t.NextNHours=26]="NextNHours",t[t.PreviousNHours=27]="PreviousNHours",t[t.PrimaryColumn=34]="PrimaryColumn",t[t.PrimaryDisplayColumn=35]="PrimaryDisplayColumn",t[t.PrimaryImageColumn=36]="PrimaryImageColumn",t[t.DayOfYearToday=37]="DayOfYearToday",t[t.DayOfYearTodayPlusDaysOffset=38]="DayOfYearTodayPlusDaysOffset",t[t.NextNDaysOfYear=39]="NextNDaysOfYear",t[t.PreviousNDaysOfYear=40]="PreviousNDaysOfYear",t[t.PrimaryColorColumn=41]="PrimaryColorColumn"})(j||(j={}));var u=z(24821);class f{static get _instanceOfKeys(){return[this._instanceOfKey]}static[Symbol.hasInstance](e){return(e?.constructor?._instanceOfKeys??[]).includes(this._instanceOfKey)}constructor(e){this.isBlock=!1,this.isBlock=e?.isBlock}static fromJson(e,n,s){throw new Error(`fromJson not supported on expression type ${this.constructor.name}`)}serializeItem(e){return typeof e.toJson=="function"?e.toJson():(0,u.classToPlain)(e,{exposeUnsetFields:!1,excludePrefixes:["_"]})}toJson(){return(0,u.classToPlain)(this,{exposeUnsetFields:!1,excludePrefixes:["_"]})}}f._instanceOfKey="devkit_BaseExpression";class L extends f{static get _instanceOfKeys(){return[...f._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.expressionType=_.ArithmeticOperation,this.arithmeticOperation=e?.arithmeticOperation,this.leftArithmeticOperand=e?.leftArithmeticOperand.clone(),this.rightArithmeticOperand=e?.rightArithmeticOperand.clone()}static fromJson(e,n,s){const i=s?.fromJson(e.leftArithmeticOperand,n),r=s?.fromJson(e.rightArithmeticOperand,n),l={leftArithmeticOperand:i,rightArithmeticOperand:r,arithmeticOperation:e.arithmeticOperation,isBlock:e.isBlock};return new L(l)}clone(){return new L(this)}}L._instanceOfKey="devkit_ArithmeticExpression";class o extends f{static get _instanceOfKeys(){return[...f._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.expressionType=_.SchemaColumn,this.columnPath=e?.columnPath}static fromJson(e){return new o({columnPath:e.columnPath})}clone(){return new o(this)}}o._instanceOfKey="devkit_ColumnExpression";class dt{static fromJson(e,n){throw new Error("not implemented")}}class G extends f{static get _instanceOfKeys(){return[...f._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.expressionType=_.Function}}G._instanceOfKey="devkit_FunctionExpression";class P extends G{static get _instanceOfKeys(){return[...G._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.functionType=h.Macros,this.macrosType=e?.macrosType,this.functionArgument=e?.functionArgument}static fromJson(e,n,s){const i=n&&s&&e.functionArgument?s.fromJson(e.functionArgument,n):void 0;return new P({functionArgument:i,macrosType:e.macrosType})}clone(){return new P(this)}}P._instanceOfKey="devkit_MacrosFunctionExpression";class g extends G{static get _instanceOfKeys(){return[...G._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.functionArgument=e?.functionArgument.clone()}toJson(){const e=super.toJson();return this.functionArgument&&(e.functionArgument=this.serializeItem(this.functionArgument)),e}}g._instanceOfKey="devkit_ArgumentFunctionExpression";class F extends g{static get _instanceOfKeys(){return[...g._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.functionType=h.Length}static fromJson(e,n,s){const i=s?.fromJson(e.functionArgument,n);return new F({functionArgument:i,isBlock:e.isBlock})}clone(){return new F(this)}}F._instanceOfKey="devkit_LengthFunctionExpression";class S extends g{static get _instanceOfKeys(){return[...g._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.functionType=h.Window}static fromJson(e,n,s){const i=s?.fromJson(e.functionArgument,n);return new S({functionArgument:i,isBlock:e.isBlock})}clone(){return new S(this)}}S._instanceOfKey="devkit_WindowFunctionExpression";class w extends g{static get _instanceOfKeys(){return[...g._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.functionType=h.DatePart,this.datePartType=e?.datePartType}static fromJson(e,n,s){const i=s?.fromJson(e.functionArgument,n),r=e.datePartType;return new w({functionArgument:i,datePartType:r,isBlock:e.isBlock})}clone(){return new w(this)}}w._instanceOfKey="devkit_DatePartFunctionExpression";var c=z(74742);class m extends f{static get _instanceOfKeys(){return[...f._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.expressionType=_.Parameter;const n=e?.value;if(n instanceof Date){const s=new Date;s.setTime(n.getTime()),this.value=s}else n?this.value=typeof n=="object"?{...n}:n:this.value=n;this.dataValueType=e?.dataValueType??R.Text,this.parameter={dataValueType:this.dataValueType,...this._getParameterValueMetadata()}}static fromJson(e){return new m(e.parameter)}_convertStringToBlobArray(e){const n=[];let s=0;for(let i=0;i<e.length;i++){const r=e.charCodeAt(i);r<128?n[s++]=String.fromCharCode(r):r<2048?(n[s++]=String.fromCharCode(r>>6|192),n[s++]=String.fromCharCode(r&63|128)):(n[s++]=String.fromCharCode(r>>12|224),n[s++]=String.fromCharCode(r>>6&63|128),n[s++]=String.fromCharCode(r&63|128))}return n}_getParameterValueMetadata(){return this.dataValueType===R.Blob?{arrayValue:this.value?this._convertStringToBlobArray(this.value):[]}:this.value instanceof Date?{value:ft(this.value)}:{value:this.value}}clone(){return new m(this)}}m._instanceOfKey="devkit_ParameterExpression",(0,c.__decorate)([(0,u.Exclude)(),(0,c.__metadata)("design:type",Object)],m.prototype,"value",void 0),(0,c.__decorate)([(0,u.Exclude)(),(0,c.__metadata)("design:type",Number)],m.prototype,"dataValueType",void 0);class v extends f{static get _instanceOfKeys(){return[...f._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.expressionType=_.SubQuery,this.columnPath=e?.columnPath;const n=e?.subFilters;this.subFilters=typeof n?.clone=="function"?n.clone():n,this.subOrderDirection=e.subOrderDirection,this.subOrderColumn=e.subOrderColumn}static fromJson(e,n){return new v({columnPath:e.columnPath,subFilters:n.fromJson(e.subFilters),subOrderDirection:e.subOrderDirection,subOrderColumn:e.subOrderColumn})}clone(){return new v(this)}toJson(){const e=super.toJson();return this.subFilters&&(e.subFilters=this.serializeItem(this.subFilters)),e}}v._instanceOfKey="devkit_SubQueryExpression";class b extends v{static get _instanceOfKeys(){return[...v._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.aggregationType=e?.aggregationType,this.functionType=e?.functionType}static fromJson(e,n){const s=super.fromJson(e,n);return new b({aggregationType:e.aggregationType,functionType:e.functionType,...s})}clone(){return new b(this)}}b._instanceOfKey="devkit_AggregationSubQueryExpression";class Gt{static resolve(e){return{[h.Macros]:P,[h.Length]:F,[h.Window]:S,[h.DatePart]:w,[h.DateAdd]:w,[h.DateDiff]:w}[e.functionType]}}class _t{static resolve(e,n){return{[_.SchemaColumn]:o,[_.Parameter]:m,[_.SubQuery]:b,[_.ArithmeticOperation]:L,[_.Function]:Gt.resolve(n)}[e]}}class D extends dt{static fromJson(e,n){const s=e.expressionType;return _t.resolve(s,e).fromJson(e,n,D)}}class p extends g{static get _instanceOfKeys(){return[...g._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e),this.functionType=h.Aggregation,this.aggregationType=e?.aggregationType,this.aggregationEvalType=e?.aggregationEvalType}static fromJson(e,n,s){const i=s?.fromJson(e.functionArgument,n),r=e.aggregationType,l=e.aggregationEvalType;return new p({functionArgument:i,aggregationType:r,aggregationEvalType:l,isBlock:e.isBlock})}clone(){return new p(this)}}p._instanceOfKey="devkit_AggregationFunctionExpression";const Et=-1;class q extends f{static get _instanceOfKeys(){return[...f._instanceOfKeys,this._instanceOfKey]}constructor(e){super(e||{}),this.expressionType=Et}get plainObject(){return(0,u.classToPlain)(this,{exposeUnsetFields:!1,excludePrefixes:["_"]})}clone(){return new q(this)}}q._instanceOfKey="devkit_ExpressionMock";class N{static get _instanceOfKeys(){return[this._instanceOfKey]}static[Symbol.hasInstance](e){return(e?.constructor?._instanceOfKeys??[]).includes(this._instanceOfKey)}constructor(e){this.isEnabled=!0,this.trimDateTimeParameterToDate=!1,this.filterType=e}static fromJson(e,n,s){throw new Error(`fromJson not supported on filter type ${this.constructor.name}`)}serializeItem(e){return typeof e.toJson=="function"?e.toJson():(0,u.classToPlain)(e,{exposeUnsetFields:!1,excludePrefixes:["_"]})}toJson(){return(0,u.classToPlain)(this,{exposeUnsetFields:!1,excludePrefixes:["_"]})}}N._instanceOfKey="devkit_BaseFilter";class M extends N{static get _instanceOfKeys(){return[...N._instanceOfKeys,this._instanceOfKey]}constructor(e=a.None){super(e)}get plainObject(){return(0,u.classToPlain)(this,{exposeUnsetFields:!1,excludePrefixes:["_"]})}clone(){return new M(this.filterType)}}M._instanceOfKey="devkit_FilterMock";const Rt={fromJson:t=>({...t,clone:()=>t}),clone:()=>{}};class E extends N{static get _instanceOfKeys(){return[...N._instanceOfKeys,this._instanceOfKey]}constructor(e,n,s){super(e),this.comparisonType=n,this.leftExpression=s.clone()}toJson(){return{...super.toJson(),leftExpression:this.serializeItem(this.leftExpression)}}}E._instanceOfKey="devkit_SingleFilter";class J extends E{static get _instanceOfKeys(){return[...E._instanceOfKeys,this._instanceOfKey]}constructor(e,n,s){super(a.Compare,e,n),this.rightExpression=s.clone()}static fromJson(e,n,s){return new J(e.comparisonType,s.fromJson(e.leftExpression,n),s.fromJson(e.rightExpression,n))}clone(){const e=new J(this.comparisonType,this.leftExpression,this.rightExpression);return e.isEnabled=this.isEnabled,e.trimDateTimeParameterToDate=this.trimDateTimeParameterToDate,e}toJson(){return{...super.toJson(),rightExpression:this.serializeItem(this.rightExpression)}}}J._instanceOfKey="devkit_CompareFilter";class k extends E{static get _instanceOfKeys(){return[...E._instanceOfKeys,this._instanceOfKey]}constructor(e,n,s){super(a.Between,x.Between,e),this.rightLessExpression=n.clone(),this.rightGreaterExpression=s.clone()}static fromJson(e,n,s){return new k(s.fromJson(e.leftExpression,n),s.fromJson(e.rightLessExpression,n),s.fromJson(e.rightGreaterExpression,n))}clone(){const e=new k(this.leftExpression,this.rightLessExpression,this.rightGreaterExpression);return e.isEnabled=this.isEnabled,e.trimDateTimeParameterToDate=this.trimDateTimeParameterToDate,e}toJson(){return{...super.toJson(),rightLessExpression:this.serializeItem(this.rightLessExpression),rightGreaterExpression:this.serializeItem(this.rightGreaterExpression)}}}k._instanceOfKey="devkit_BetweenFilter";class I extends E{static get _instanceOfKeys(){return[...E._instanceOfKeys,this._instanceOfKey]}constructor(e,n,s=x.Exists,i=!0){super(a.Exists,s,e),this.subFilters=n?.clone(),this.isAggregative=i}static fromJson(e,n,s){const i=s.fromJson(e.leftExpression,n),r=n.fromJson(e.subFilters);return new I(i,r,e.comparisonType,e.isAggregative)}clone(){const e=new I(this.leftExpression,this.subFilters,this.comparisonType,this.isAggregative);return e.isEnabled=this.isEnabled,e.trimDateTimeParameterToDate=this.trimDateTimeParameterToDate,e}toJson(){const e=super.toJson();return this.subFilters&&(e.subFilters=this.serializeItem(this.subFilters)),e}}I._instanceOfKey="devkit_ExistsFilter";class K extends E{static get _instanceOfKeys(){return[...E._instanceOfKeys,this._instanceOfKey]}constructor(e,n,s){super(a.In,e,n),this.rightExpressions=s.map(i=>i.clone())}static fromJson(e,n,s){const i=e.rightExpressions??[];return new K(e.comparisonType,s.fromJson(e.leftExpression,n),i.map(r=>s.fromJson(r,n)))}clone(){const e=new K(this.comparisonType,this.leftExpression,this.rightExpressions);return e.isEnabled=this.isEnabled,e.trimDateTimeParameterToDate=this.trimDateTimeParameterToDate,e}toJson(){return{...super.toJson(),rightExpressions:this.rightExpressions.map(e=>this.serializeItem(e))}}}K._instanceOfKey="devkit_InFilter";class C extends E{static get _instanceOfKeys(){return[...E._instanceOfKeys,this._instanceOfKey]}constructor(e,n){super(a.IsNull,e,n)}get isNull(){return this.comparisonType===x.Is_null}static fromJson(e,n,s){return new C(e.comparisonType,s.fromJson(e.leftExpression,n))}clone(){const e=new C(this.comparisonType,this.leftExpression);return e.isEnabled=this.isEnabled,e.trimDateTimeParameterToDate=this.trimDateTimeParameterToDate,e}}C._instanceOfKey="devkit_IsNullFilter",(0,c.__decorate)([(0,u.Expose)(),(0,c.__metadata)("design:type",Boolean),(0,c.__metadata)("design:paramtypes",[])],C.prototype,"isNull",null);const Ot="00000000-0000-0000-0000-000000000000",Ut=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i");function X(t){let e="";for(let n=0;n<t;n++)e+=((1+Math.random())*65536|0).toString(16).substring(1);return e}function xt(){return[X(2),X(1),X(1),X(1),X(3)].join("-")}function Yt(t){return Boolean(t)&&Ut.test(t)}function Ht(t){return!t||t===Ot}class Z extends Error{constructor(e){super(`Argument with name '${e}' is empty.`)}}class ct extends Error{constructor(e){super(`Argument with name '${e}' is out of range.`)}}class d{static checkArgumentEmpty(e,n){if(n==null)throw new Z(e)}static checkArrayEmpty(e,n){if(d.checkArgumentEmpty(e,n),n.length===0)throw new Z(e)}static checkStringIsNotEmpty(e,n){if(this.checkArgumentEmpty(e,n),n==="")throw new Z(e);return n}static checkArgumentOutOfRange(e,n,s){if(s.begin&&n<s.begin)throw new ct(e);if(s.end&&n>s.end)throw new ct(e)}}class A extends N{static get _instanceOfKeys(){return[...N._instanceOfKeys,this._instanceOfKey]}get items(){const e={};return this.filters.forEach((n,s)=>{e[s]=this.serializeItem(n)}),e}constructor(e=U.And,n){super(a.FilterGroup),this.filters=new Map,this.logicalOperation=e,this.rootSchemaName=n}static fromJson(e,n){const s=e.logicalOperation,i=new A(s||U.And,e.rootSchemaName);return Object.entries(e.items).forEach(([r,l])=>{i.add(n.fromJson(l),r)}),i}_createParameterValueExpressions(e){return e.map(n=>new m({value:n}))}getItemByIndex(e){return this.items[Object.keys(this.items)[e]]}addSchemaColumnFilterWithParameter(e,n,s,i){const r=new o({columnPath:n}),l=new m({value:s}),W=new J(e,r,l);this.add(W,i)}addSchemaColumnInFilterWithParameters(e,n,s,i){const r=new o({columnPath:n}),l=this._createParameterValueExpressions(s),W=new K(e,r,l);this.add(W,i)}addPrimarySchemaColumnInFilter(e,n){const s=new P({macrosType:j.PrimaryColumn}),i=this._createParameterValueExpressions(e),r=new K(x.Equal,s,i);this.add(r,n)}addSchemaColumnIsNullFilter(e,n){const s=new o({columnPath:e}),i=new C(x.Is_null,s);this.add(i,n)}addSchemaColumnIsNotNullFilter(e,n){const s=new o({columnPath:e}),i=new C(x.Is_not_null,s);this.add(i,n)}addSchemaColumnBetweenFilterWithParameters(e,n,s,i){const r=new o({columnPath:e}),l=new m({value:n}),W=new m({value:s}),Zt=new k(r,l,W);this.add(Zt,i)}addExistsFilter(e,n,s){const i=new o({columnPath:e}),r=new I(i,n);this.add(r,s)}addNotExistsFilter(e,n,s){const i=new o({columnPath:e}),r=new I(i,n,x.Not_exists);this.add(r,s)}add(e,n){d.checkArgumentEmpty("filter",e);const s=n||xt();this.filters.set(s,e)}clone(){const e=new A(this.logicalOperation,this.rootSchemaName);return this.filters.forEach((n,s)=>{e.filters.set(s,n.clone())}),e.isEnabled=this.isEnabled,e.trimDateTimeParameterToDate=this.trimDateTimeParameterToDate,e}}A._instanceOfKey="devkit_FilterGroup",(0,c.__decorate)([(0,u.Exclude)(),(0,c.__metadata)("design:type",Object)],A.prototype,"filters",void 0),(0,c.__decorate)([(0,u.Expose)(),(0,c.__metadata)("design:type",Object),(0,c.__metadata)("design:paramtypes",[])],A.prototype,"items",null);class gt{static fromJson(e){throw new Error("not implemented")}}class wt{static resolve(e){return{[a.Compare]:J,[a.FilterGroup]:A,[a.In]:K,[a.IsNull]:C,[a.Exists]:I,[a.Between]:k}[e]}}class ut extends gt{static fromJson(e){const n=e.filterType,s=e.isEnabled,i=e.trimDateTimeParameterToDate,r=wt.resolve(n).fromJson(e,ut,D);return r.isEnabled=s!==!1,r.trimDateTimeParameterToDate=i===!0,r}}const Ct={isEnabled:!0,trimDateTimeParameterToDate:!1};function Xt(t){return{...Ct,...t}}class O{constructor(e){this.orderDirection=H.None,this.orderPosition=-1,this.isVisible=!0,this.expression=e}withOrdering(e,n){return d.checkArgumentEmpty("orderDirection",e),d.checkArgumentEmpty("orderPosition",n),d.checkArgumentOutOfRange("orderPosition",n,{begin:-1}),this.orderDirection=e,this.orderPosition=n,this}withOptions(e){return d.checkArgumentEmpty("options",e),this.isVisible=e.isVisible??!0,this}withCaption(e){return d.checkArgumentEmpty("caption",e),this.caption=e,this}}class At extends O{constructor(e,n,s){super(new L({arithmeticOperation:e,leftArithmeticOperand:n,rightArithmeticOperand:s}))}}class Pt extends O{constructor(e){super(new o({columnPath:e}))}}class vt extends O{constructor(e,n){super(new m({value:e,dataValueType:n}))}}class Nt extends O{constructor(e,n,s,i,r){super(new b({aggregationType:n,columnPath:e,subFilters:s,subOrderDirection:i,subOrderColumn:r}))}}class Wt extends O{constructor(e,n){super(new v({columnPath:e,subFilters:n}))}}class It extends O{constructor(e,n,s){super(new p({aggregationType:e,aggregationEvalType:n,functionArgument:s}))}}class Kt extends O{constructor(e,n){super(new w({datePartType:e,functionArgument:n}))}get datePartType(){return this.expression?.datePartType}}class Lt extends O{constructor(e){super(new F({functionArgument:e}))}}class Ft extends O{constructor(e){super(new P({macrosType:e}))}}class St extends O{constructor(e){super(new S({functionArgument:e}))}}const bt={isVisible:!0,orderPosition:-1,orderDirection:H.None};function zt(t){return{...bt,expression:t}}class lt{constructor(e,n){this.operationType=e,this.rootSchemaName=n,d.checkArgumentEmpty("_operationType",e),d.checkArgumentEmpty("_rootSchemaName",n)}getMetadata(){return(0,u.classToPlain)(this,{exposeUnsetFields:!1,excludePrefixes:["_"]})}}class $ extends lt{constructor(e,n){super(e,n),this.filters=new A}clearFilters(){this.filters.filters.clear()}getMetadata(){return{...super.getMetadata(),filters:this.filters.toJson()}}}var B;(function(t){t[t.Select=0]="Select",t[t.Insert=1]="Insert",t[t.Update=2]="Update",t[t.Delete=3]="Delete"})(B||(B={}));class jt extends ${constructor(e){super(B.Delete,e)}}class pt extends Error{constructor(e){super(`Item with key '${e}' does not exist.`)}}class Jt extends ${constructor(e){super(B.Select,e),this._columns=new Map,this.isDistinct=!1,this.rowCount=-1,this.rowsOffset=-1,this.useLocalization=!0,this.useRecordDeactivation=!1,this._getIsPageable=()=>this.rowCount>0&&this.rowsOffset>-1}_internalAddColumn(e,n){this._columns.has(e)||this._columns.set(e,n)}getColumn(e){if(!this._columns.has(e))throw new pt(e);return this.findColumn(e)}findColumn(e){return this._columns.get(e)}getMetadata(){return{...super.getMetadata(),columns:{items:(0,u.classToPlain)(this._columns,{exposeUnsetFields:!1,excludePrefixes:["_"]})},allColumns:!1,isDistinct:this.isDistinct,ignoreDisplayValues:!1,rowCount:this.rowCount,rowsOffset:this.rowsOffset,isPageable:this._getIsPageable(),conditionalValues:this.conditionalValues?this.conditionalValues:null,isHierarchical:!1,hierarchicalMaxDepth:0,hierarchicalColumnName:null,hierarchicalColumnValue:null,useLocalization:this.useLocalization,useRecordDeactivation:this.useRecordDeactivation}}addColumn(e,n){return this._internalAddColumn(n,e),e}addSchemaColumn(e,n){d.checkArgumentEmpty("columnPath",e);const s=new Pt(e);return this._internalAddColumn(n||e,s),s}addAggregationSubQueryColumn(e,n,s,i){const r=new Nt(e,n,s.filter,s.sortByDirection,s.sortByColumn);return this._internalAddColumn(i||e,r),r}addParameterColumn(e,n,s){const i=new vt(e,n);return this._internalAddColumn(s,i),i}addArithmeticColumn(e,n,s,i){const r=new At(e,n,s);return this._internalAddColumn(i,r),r}addMacrosFunctionColumn(e,n){const s=new Ft(e);return this._internalAddColumn(n,s),s}addDatePartFunctionColumn(e,n,s){const i=new o({columnPath:e}),r=new Kt(n,i);return this._internalAddColumn(s,r),r}addAggregationFunctionColumn(e,n,s,i=Y.None){const r=new o({columnPath:e}),l=new It(n,i,r);return this._internalAddColumn(s,l),l}addLengthFunctionColumn(e,n){const s=new o({columnPath:e}),i=new Lt(s);return this._internalAddColumn(n,i),i}addWindowFunctionColumn(e,n,s,i=Y.None){const r=new p({aggregationType:n,aggregationEvalType:i,functionArgument:new o({columnPath:e})}),l=new St(r);return this._internalAddColumn(s,l),l}}class kt extends lt{constructor(e){super(B.Insert,e),this._columnValues=new Map}get columnValues(){return{items:(0,u.classToPlain)(this._columnValues)}}addColumn(e,n,s){d.checkArgumentEmpty("columnName",e),this._columnValues.set(e,new m({value:n,dataValueType:s}))}}(0,c.__decorate)([(0,u.Expose)(),(0,c.__metadata)("design:type",Object),(0,c.__metadata)("design:paramtypes",[])],kt.prototype,"columnValues",null);class Bt extends ${constructor(e){super(B.Update,e),this._columnValues=new Map,this.isForceUpdate=!1}get columnValues(){return{items:(0,u.classToPlain)(this._columnValues)}}addColumn(e,n,s){d.checkArgumentEmpty("columnName",e),this._columnValues.set(e,new m({value:n,dataValueType:s}))}}(0,c.__decorate)([(0,u.Expose)(),(0,c.__metadata)("design:type",Object),(0,c.__metadata)("design:paramtypes",[])],Bt.prototype,"columnValues",null);class Dt extends Jt{}class qt extends Error{constructor(){super("Next handler already specified")}}class Mt{}var at;(function(t){t.PrimaryColumnValue="primaryColumnValue",t.Filter="filter",t.PrimaryDisplayValueFilter="primaryDisplayValueFilter",t.Empty="empty",t.Never="never"})(at||(at={}))}}]);