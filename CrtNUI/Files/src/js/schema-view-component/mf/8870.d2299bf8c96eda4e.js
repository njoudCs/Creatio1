(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[8870,8239,5036,6118,7344,8160,1034,8056,1906,4501,1216,9256,9795,1006,7571,6025,9424,885,7709,6662,9669,2375],{58870:(O,S,n)=>{n.r(S),n.d(S,{AD_PLATFORM_REFRESH_SUBSCRIPTION_ATTRIBUTE_NAME:()=>N,DigitalAdsModule:()=>f});var p=n(74742),M=n(31134),i=n(94450),b=n(1828),s=n(75378),c=n(77207),u=n(33177),A=n(34038),d=n(49475),C=n(24709),o=n(21322),I=n(34560),D=n(41899);let P=class extends D.BaseRequestPropertiesPanel{constructor(e){super(),this.translateService=e,this.platformControl=new I.FormControl,this.appControl=new I.FormControl,this._subscription=new o.Subscription,this.platformLabelText=this.translateService.instant("DigitalAdsContent.PlatformInputCaption"),this.appLabelText=this.translateService.instant("DigitalAdsContent.AppInputCaption")}onRequestParamsChange(e){this.platformControl.setValue(e?.platform||""),this.appControl.setValue(e?.app||""),this._subscription.add(this.platformControl.valueChanges.subscribe(t=>{this.paramsChange.emit({...this.params,platform:t,app:this.appControl.value})})),this._subscription.add(this.appControl.valueChanges.subscribe(t=>{this.paramsChange.emit({...this.params,platform:this.platformControl.value,app:t})}))}ngOnDestroy(){this._subscription?.unsubscribe()}};P.\u0275fac=function(e){return new(e||P)(i.\u0275\u0275directiveInject(c.TranslateService))},P.\u0275cmp=i.\u0275\u0275defineComponent({type:P,selectors:[["crt-ad-platform-login-properties-panel"]],features:[i.\u0275\u0275InheritDefinitionFeature],decls:2,vars:4,consts:[[3,"label","control"]],template:function(e,t){e&1&&i.\u0275\u0275element(0,"crt-input",0)(1,"crt-input",0),e&2&&(i.\u0275\u0275property("label",t.platformLabelText)("control",t.platformControl),i.\u0275\u0275advance(1),i.\u0275\u0275property("label",t.appLabelText)("control",t.appControl))},dependencies:[A.CrtInputComponent],encapsulation:2}),P=(0,p.__decorate)([(0,s.CrtViewElement)({type:"crt.AdPlatformLoginPropertiesPanel",reuseStrategy:s.ViewElementReuseStrategy.Reuse}),(0,p.__metadata)("design:paramtypes",[c.TranslateService])],P);var h=n(8239),T=n(99293),U=n(41307),E=n(6523),k=n(2792);class q{constructor(e){this.platform=e}}class x{constructor(e,t){this.virtualAdAccountsIdentifiers=e,this.platform=t}}class j{constructor(e,t){this.application=e,this.platform=t}}let R=class extends s.BaseRequestHandler{constructor(e,t,a,l,y,_,g,v){super(),this.httpClient=e,this.notifyService=t,this._messageChannelService=a,this._restErrorHandler=l,this._translateService=y,this._queryExecutor=_,this._dialogService=g,this._window=v,this._snackbarDuration=3e3,this._destroyed$=new o.Subject,this._subscribeMessageChannelEvents()}_updateConnectedAccountsList(e){var t=this;return(0,h.Z)(function*(){const a={type:"crt.LoadDataRequest",config:{loadType:s.DataSourceLoadType.Reload,useLastLoadParameters:!0},$context:t._context,dataSourceName:e};return yield t.handlerChain.process(a),Promise.resolve()})()}_handleWebSocketMessage(e){var t=this;return(0,h.Z)(function*(){if(e){switch(e.command){case"refresh.adAccount.facebook":yield t._updateConnectedAccountsList("DataGrid_AdAccountsTabContainerFacebookGridDS");break;case"refresh.adAccount.google":yield t._updateConnectedAccountsList("DataGrid_AdAccountsTabContainerGoogleGridDS");break;case"import.started":t._showMessage(t._translateService.instant("DigitalAdsContent.ImportFromAdPlatformStartedMessage"));break;case"adaccounts.notfound":t._dialogService.openInfoDialog(t._translateService.instant("DigitalAdsContent.NoActiveAdAccountsFoundMessage"));break;case"close.login.window":t._loginWindow&&t._loginWindow.close();break;case"select.adaccounts":t._openAdAccountSelection();break;case"show.ErrorScreen":t._dialogService.openInfoDialog(e.description);break}return}})()}_getLookupPageFeatures(){return{select:{multiple:!0,selectAll:!0,resultType:k.PageLookupResultType.Filter}}}_getPreSelectedAdAccounts(){const e=new q(this._request.platform);return this._restErrorHandler.handleRequest(this.httpClient.post("/rest/AdAccountsService/GetAdAccountsIdentifiers",e,{responseType:"json"})).pipe((0,o.map)(t=>t))}_loadAdAccountsByFilter(e,t){var a=this;return(0,h.Z)(function*(){const l=new s.EntitySchemaQuery(e);return a._addFiltersToEsq(l,t),yield a._queryExecutor.executeSelectQuery(l).pipe((0,o.map)(_=>_.map(g=>({id:g.Id}))))})()}_addFiltersToEsq(e,t){Object.entries(t.items).forEach(([a,l])=>{e.filters.add(l,a)})}_getOpenLookupPageRequestConfig(){var e=this;const{$context:t,scopes:a}=this._request;return this._getPreSelectedAdAccounts().pipe((0,o.switchMap)(l=>{const y=l.body;return(0,o.of)({type:"crt.OpenLookupPageRequest",$context:t,scopes:a,entitySchemaName:"VirtualAdAccount",schemaName:"SelectAdAccountsLookupPage",features:this._getLookupPageFeatures(),selectionState:{type:"specific",selected:y},returnEmptyValue:!0,afterClosed:function(){var _=(0,h.Z)(function*(g){if(g?.isEmpty){e._unselectAllAccounts();return}(yield e._loadAdAccountsByFilter("VirtualAdAccount",g)).pipe((0,o.switchMap)(v=>{const _e=v.map(be=>be.id);return e._saveSelectedAdAccounts(_e)})).subscribe()});return function(v){return _.apply(this,arguments)}}()})}))}_saveSelectedAdAccounts(e){const t=new x(e,this._request.platform);return this._restErrorHandler.handleRequest(this.httpClient.post("/rest/AdAccountsService/SaveAdAccounts",t,{responseType:"json"})).pipe((0,o.map)(a=>a))}_unselectAllAccounts(){this._saveSelectedAdAccounts([]).subscribe()}_openAdAccountSelection(){this._getOpenLookupPageRequestConfig().subscribe(e=>{this.handlerChain.process(e)})}_subscribeMessageChannelEvents(){this._subscription=this._messageChannelService.messageEvent$.pipe((0,o.filter)(e=>e.header.sender==="CrtDigitalAdsApp"),(0,o.map)(e=>{const t=e.body;return{messageId:e.id.toString(),isSuccess:t.isSuccess,command:t.command,description:t.description,errorCode:t.errorCode}})).subscribe(e=>{this._handleWebSocketMessage(e)})}_validateRequest(e){return e.platform===void 0?(this._showMessage(this._translateService.instant("DigitalAdsContent.PlatformUndefinedMessage")),!1):e.app===void 0?(this._showMessage(this._translateService.instant("DigitalAdsContent.ApplicationUndefinedMessage")),!1):!0}_getFlowUrl(e){const t=new j(e.app,e.platform);return this._restErrorHandler.handleRequest(this.httpClient.post("/rest/SocialOAuthProxyService/AuthenticateToPlatform",t,{responseType:"json"})).pipe((0,o.map)(a=>{if(a.body!=="")return new URL(a.body)}))}_showMessage(e){var t=this;return(0,h.Z)(function*(){yield t.notifyService.show({message:e,duration:t._snackbarDuration})})()}_showLoginWindow(e){const t="Login",y=window.screenLeft+(window.innerWidth-650)/2,_=window.screenTop+(window.innerHeight-650)/2,g=`width=${650},height=${650},left=${y},top=${_},
		  scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`;this._loginWindow=this._window.open(e.toString(),t,g)}handle(e){var t=this;return(0,h.Z)(function*(){t._context=e.$context,t._request=e,t._context[N]=t._subscription;const a=t._context.attributes.Connect_account_button_enabled;if(a&&a===!0){t._context.attributes.Connect_account_button_enabled=!1;try{if(!t._validateRequest(e))return;t._getFlowUrl(e).subscribe(l=>{l&&t._showLoginWindow(l)})}finally{t._context.attributes.Connect_account_button_enabled=!0,yield t.next?.handle(e)}}})()}};R=(0,p.__decorate)([(0,s.CrtRequestHandler)({type:"crt.AdPlatformLoginHandler",requestType:"crt.AdPlatformLogin"}),(0,p.__param)(7,(0,s.CrtInject)(u.WINDOW_TOKEN)),(0,p.__metadata)("design:paramtypes",[U.HttpClientService,T.NotifyService,d.MessageChannelService,d.RestErrorHandler,c.TranslateService,E.QueryExecutor,T.DialogService,Window])],R);let m=class extends s.BaseRequest{constructor(){super(...arguments),this.type="crt.AdPlatformLogin"}};m.\u0275fac=function(){let r;return function(t){return(r||(r=i.\u0275\u0275getInheritedFactory(m)))(t||m)}}(),m.\u0275prov=i.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac}),m=(0,p.__decorate)([(0,s.CrtRequest)({type:"crt.AdPlatformLogin",scopes:["AdCampaign_ListPage"],propertiesPanelComponentTypeName:"crt.AdPlatformLoginPropertiesPanel",position:950,title:"DigitalAdsContent.AdPlatformLoginRequestTitle"})],m);let L=class extends s.BaseRequestHandler{handle(e){var t=this;return(0,h.Z)(function*(){e.$context[N]?.unsubscribe(),yield t.next?.handle(e)})()}};L=(0,p.__decorate)([(0,s.CrtRequestHandler)({type:"crt.AdPlatformViewModelPauseHandler",requestType:"crt.HandleViewModelPauseRequest",scopes:["AdCampaign_ListPage"]})],L);const w=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Alkalmaz\xE1s","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),J=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),F=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0443 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443","PlatformInputCaption":"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430","AppInputCaption":"\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043E\u043A","NotEnoughPermissionsMessage":"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u0432\u0430\u0448 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0438\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043D\u0430\u0434\u0430\u0439\u0442\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0434\u043E\u0437\u0432\u043E\u043B\u0456\u0432 \u0434\u043B\u044F Creatio \u0456 \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.","PlatformUndefinedMessage":"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0430, \u043F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u0439\u0442\u0435\u0441\u044F, \u0449\u043E \u043D\u0430\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438","ApplicationUndefinedMessage":"\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043E\u043A \u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439, \u043F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u0439\u0442\u0435\u0441\u044F, \u0449\u043E \u043D\u0430\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438"}}'),H=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),V=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),B=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),W=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),z=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button","ImportFromAdPlatformStartedMessage":"Data import from ad accounts has been started","NoActiveAdAccountsFoundMessage":"Sorry, but we couldn\u2019t find any ad accounts available to you. Make sure that you have access to the required accounts on the platform. Only active accounts can be connected."}}'),Z=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Conectar plataforma de anuncios","PlatformInputCaption":"Plataforma","AppInputCaption":"Aplicaci\xF3n","NotEnoughPermissionsMessage":"Lo sentimos, no se puede conectar con tu cuenta de anuncios. Por favor, concede los permisos m\xE1ximos a Creatio y vuelve a intentarlo.","PlatformUndefinedMessage":"Plataforma indefinida, aseg\xFArate de configurar el bot\xF3n foe de la plataforma","ApplicationUndefinedMessage":"Aplicaci\xF3n indefinida, aseg\xFArate de configurar el bot\xF3n foe de la plataforma"}}'),G=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application"}}'),$=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application"}}'),K=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connecter la plateforme ad","PlatformInputCaption":"Plateforme","AppInputCaption":"Application","NotEnoughPermissionsMessage":"D\xE9sol\xE9, impossible de connecter votre compte ad. Veuillez accorder des autorisations maximales \xE0 Creatio et r\xE9essayez.","PlatformUndefinedMessage":"Plateforme non d\xE9finie, assurez-vous de configurer la plateforme pour le bouton","ApplicationUndefinedMessage":"Application non d\xE9finie, assurez-vous de configurer la plateforme pour le bouton"}}'),Q=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"\u05D9\u05D9\u05E9\u05DD","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),X=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),Y=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),ee=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"\u5E83\u544A\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3068\u63A5\u7D9A","PlatformInputCaption":"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0","AppInputCaption":"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3","NotEnoughPermissionsMessage":"\u7533\u3057\u8A33\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u5E83\u544A\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u63A5\u7D9A\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002Creatio\u306B\u6700\u5927\u6A29\u9650\u3092\u4ED8\u4E0E\u3057\u3066\u3001\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002","PlatformUndefinedMessage":"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u304C\u672A\u5B9A\u7FA9\u3067\u3059\u3002\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u304C\u30DC\u30BF\u30F3\u3092\u76F8\u624B\u306B\u8A2D\u5B9A\u3059\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002","ApplicationUndefinedMessage":"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u672A\u5B9A\u7FA9\u3067\u3059\u3002\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u304C\u30DC\u30BF\u30F3\u3092\u76F8\u624B\u306B\u8A2D\u5B9A\u3059\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}}'),te=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application"}}'),ne=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),oe=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),ae=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),ie=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application"}}'),se=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application"}}'),re=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),le=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Conectar-se \xE0 plataforma de an\xFAncios","PlatformInputCaption":"Plataforma","AppInputCaption":"Aplica\xE7\xE3o","NotEnoughPermissionsMessage":"Desculpe-nos, n\xE3o foi poss\xEDvel conectar-se \xE0 sua conta de an\xFAncios. Favor, conceder as permiss\xF5es m\xE1ximas ao Creatio e tentar novamente.","PlatformUndefinedMessage":"Plataforma n\xE3o definida, certificar-se de configurar a plataforma para o bot\xE3o","ApplicationUndefinedMessage":"Aplica\xE7\xE3o indefinida, certificar-se de configurar a plataforma para o bot\xE3o"}}'),pe=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),ce=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Conecta\u021Bi platforma de anun\u021Buri","PlatformInputCaption":"Platform\u0103","AppInputCaption":"Aplica\u021Bie","NotEnoughPermissionsMessage":"Ne pare r\u0103u, nu se poate conecta la contul de reclame. Te rug\u0103m s\u0103 acorzi permisiunile solicitate in Creatio \u0219i s\u0103 \xEEncerci din nou.","PlatformUndefinedMessage":"Platform\u0103 nedefinit\u0103, asigura\u021Bi-v\u0103 c\u0103 a\u021Bi configurat platforma","ApplicationUndefinedMessage":"Aplica\u021Bie nedefinit\u0103, asigura\u021Bi-v\u0103 c\u0103 a\u021Bi configurat platforma"}}'),ue=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0443\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443","PlatformInputCaption":"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430","AppInputCaption":"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435","NotEnoughPermissionsMessage":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0430\u0448 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 Creatio \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0430.","PlatformUndefinedMessage":"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043D\u0435 \u0437\u0430\u0434\u0430\u043D\u043D\u043E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 \u043A\u043D\u043E\u043F\u043A\u0438","ApplicationUndefinedMessage":"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0435 \u0437\u0430\u0434\u0430\u043D\u043D\u043E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 \u043A\u043D\u043E\u043F\u043A\u0438","ImportFromAdPlatformStartedMessage":"\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0438\u043C\u043F\u043E\u0440\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u0432","NoActiveAdAccountsFoundMessage":"\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043C\u044B \u043D\u0435 \u043D\u0430\u0448\u043B\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0432\u0430\u043C \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u043C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430\u043C \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B."}}'),de=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),me=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),fe=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),ge=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application","NotEnoughPermissionsMessage":"Sorry, unable to connect your ad account. Please grant maximum permissions to Creatio and try again.","PlatformUndefinedMessage":"Platform undefined, make sure to configure platform foe the button","ApplicationUndefinedMessage":"Application undefined, make sure to configure platform foe the button"}}'),Ae=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application"}}'),Pe=JSON.parse('{"DigitalAdsContent":{"AdPlatformLoginRequestTitle":"Connect ad platform","PlatformInputCaption":"Platform","AppInputCaption":"Application"}}'),Ce={"hu-HU":w,"zh-CN":J,"uk-UA":F,"sq-AL":H,"zh-TW":Ae,"no-NO":ie,zh:Pe,"vi-VN":ge,"tr-TR":fe,"th-TH":me,"sv-SE":de,"ro-RO":ce,"pt-PT":pe,"pt-BR":le,"pl-PL":re,no:se,"nl-NL":ae,"lv-LV":oe,"ko-KR":ne,"kk-KZ":te,"ja-JP":ee,"it-IT":Y,"id-ID":X,"he-IL":Q,"fr-FR":K,"fr-CA":$,"fa-IR":G,"es-ES":Z,"de-DE":W,"cs-CZ":B,"ar-SA":V,"en-US":z,"ru-RU":ue};function he(r,e){return()=>(0,o.lastValueFrom)(r.loadCurrentUserInfo().pipe((0,o.tap)(t=>{e.use(t?.userInfo?.cultureInfo?.sysCultureName)})),{defaultValue:null})}let f=class{};f.\u0275fac=function(e){return new(e||f)},f.\u0275mod=i.\u0275\u0275defineNgModule({type:f}),f.\u0275inj=i.\u0275\u0275defineInjector({providers:[m,C.HandleViewModelPauseRequest,u.WINDOW_PROVIDER,{provide:i.APP_INITIALIZER,useFactory:he,deps:[d.UserInfoService,c.TranslateService],multi:!0}],imports:[M.CommonModule,A.CrtInputModule,u.CrtLibTranslateModule.forRoot({i18n:Ce}),b.MatSnackBarModule]}),f=(0,p.__decorate)([(0,s.CrtModule)({viewElements:[P],requestHandlers:[R,L]})],f),function(){(typeof ngJitMode>"u"||ngJitMode)&&i.\u0275\u0275setNgModuleScope(f,{declarations:[P],imports:[M.CommonModule,A.CrtInputModule,u.CrtLibTranslateModule,b.MatSnackBarModule]})}();const N="AdPlatformRefreshSubscriptionAttribute"},8239:(O,S,n)=>{n.d(S,{Z:()=>M});function p(i,b,s,c,u,A,d){try{var C=i[A](d),o=C.value}catch(I){s(I);return}C.done?b(o):Promise.resolve(o).then(c,u)}function M(i){return function(){var b=this,s=arguments;return new Promise(function(c,u){var A=i.apply(b,s);function d(o){p(A,c,u,d,C,"next",o)}function C(o){p(A,c,u,d,C,"throw",o)}d(void 0)})}}}}]);
