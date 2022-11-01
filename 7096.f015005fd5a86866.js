"use strict";(self.webpackChunk_1inch=self.webpackChunk_1inch||[]).push([[7096],{27118:(v,m,e)=>{e.d(m,{b:()=>E});var o=e(53886),t=e(3012),s=e(77724),n=e(64736),l=e(7722),i=e(95021),d=e(64057),c=e(51109),_=e(56472),a=e(572);let E=(()=>{class r{constructor(g,O){this.tokensQuery=g,this.tokensService=O,this.tokensRegistry={},this.getTokenByAddress=u=>{const C=u.toLowerCase();return this.tokensQuery.getByAddress(C)||this.tokensRegistry[C]}}getUnknownTokens(g){const O=g.map(u=>({makerAssetAddress:u.data.makerAsset.toLowerCase(),takerAssetAddress:u.data.takerAsset.toLowerCase()})).filter(({makerAssetAddress:u,takerAssetAddress:C})=>{const D=this.tokensQuery.getByAddress(u),T=this.tokensQuery.getByAddress(C);return!D||!T}).map(({makerAssetAddress:u,takerAssetAddress:C})=>u||C?u?C?void 0:[C]:[u]:[u,C]).flat();return[...new Set(O)].filter(i.RF)}loadUnknownTokens(g){const O=g.map(u=>this.tokensService.fetchData$(u));return(0,o.a)(O).pipe((0,s.b)(u=>{this.tokensRegistry=u.reduce((C,D)=>(D&&(C[D.address.toLowerCase()]=D),C),{})}),(0,n.U)(()=>{}))}tryToLoadNotFoundTokens(g){const O=g.reduce((u,C)=>{const{makerAsset:D,takerAsset:T}=C,I=[D,T].map(x=>this.getTokenByAddress(x)?(0,t.of)(null):this.tokensService.importTokenBySymbolOrAddressOnce$(x));return u.concat(I)},[]);return O.length?((0,d.H)("Not found tokens for limit orders: "+O.length),(0,o.a)(O).pipe((0,s.b)(u=>{const C=u.filter(i.RF);C.forEach(D=>{this.tokensService.addCustomToken(D)}),(0,d.H)("Automatically added custom tokens for limit order: "+C.length)}),(0,l.h)(void 0))):(0,t.of)(void 0)}}return r.\u0275fac=function(g){return new(g||r)(c.\u0275\u0275inject(_.d),c.\u0275\u0275inject(a.H))},r.\u0275prov=c.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})()},8345:(v,m,e)=>{e.d(m,{Yu:()=>l,Z9:()=>s,jy:()=>t,w4:()=>n});var o=e(29737);const t=i=>i.value===1/0?{isInfinityNumber:{value:i.value}}:null,s=i=>(0,o.is)(Number,i.value)?null:{isNotNumber:{value:i.value}},n=i=>"bigint"!=typeof i.value?{isNotBigInt:{value:i.value}}:null;function l(i){return"bigint"==typeof i.value&&i.value!==BigInt(0)||0!==i.value?null:{zeroValue:{value:i.value}}}},79641:(v,m,e)=>{e.d(m,{S:()=>_});var o=e(31777),t=e(77065),s=e(20654),n=e(51109),l=e(12725),i=e(83389);const d=a=>{var E,r;const p=null===(E=a.get("hours"))||void 0===E?void 0:E.value,g=null===(r=a.get("minutes"))||void 0===r?void 0:r.value.toString().replace(",",".");return parseInt(p)||parseFloat(g)&&!(parseFloat(g)<.25)?null:{isInvalidForm:!0}};let _=(()=>{class a{constructor(r,p){this.data=r,this.dialogRef=p,this.customPeriod=new o.UntypedFormGroup({hours:new o.UntypedFormControl("0",[o.Validators.min(0),o.Validators.pattern("^[0-9]*$"),o.Validators.max(this.data.maxDurationHours||87600)]),minutes:new o.UntypedFormControl("0",[o.Validators.min(0),o.Validators.pattern(/^[0-9]+[.,]?[0-9]*$/),o.Validators.max(59.99999)])},{validators:d})}get customHours(){return this.customPeriod.controls.hours}get customMinutes(){return this.customPeriod.controls.minutes}ngOnInit(){const r=this.data.duration;this.customHours.setValue(this.getHours(r)),this.customMinutes.setValue(this.getMinutes(r))}setLimitOrderDuration(){var r,p;const g=null===(r=this.customPeriod.get("hours"))||void 0===r?void 0:r.value;let O=null===(p=this.customPeriod.get("minutes"))||void 0===p?void 0:p.value;if(-1!==O.toString().search(/[.,]/)){O=O.toString().replace(",","."),O=parseFloat(O).toFixed(2);const C=Math.round(100*O%100);O=(parseInt(O)+(C-C%5)/100).toFixed(2)}this.dialogRef.close(3600*g+60*O)}getHours(r){return Math.trunc(r/3600)}getMinutes(r){return(r-3600*this.getHours(r))/60}hoursValidator(r){if(!s.U.test(r.key))return!1}minutesValidator(r){if(!s.SH.test(r.key))return!1}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(r){return new(r||a)(n.\u0275\u0275directiveInject(t.WI),n.\u0275\u0275directiveInject(t.so))},a.\u0275cmp=n.\u0275\u0275defineComponent({type:a,selectors:[["app-custom-period-dialog"]],decls:24,vars:4,consts:[["data-id","custom-period-modal",3,"formGroup"],[1,"blank-button","custom-period-close-icon",3,"click"],["width","24","height","24"],[0,"xlink","href","assets/images/icons/cross.svg#cross"],["transloco","customPeriod.set-custom-period",1,"custom-period-title"],[1,"custom-period-subtitle"],["transloco","customPeriod.custom-period"],[1,"custom-period-row"],[1,"custom-period-input-wrap"],["inputmode","number","data-id","custom-period-hours",1,"custom-period-input",3,"formControl","keypress"],["transloco","customPeriod.hours",1,"custom-period-input-label"],["inputmode","number","data-id","custom-period-minutes",1,"custom-period-input",3,"formControl","keypress"],["transloco","customPeriod.minutes",1,"custom-period-input-label"],["transloco","commonText.cancel","data-id","custom-period-cancel-button",1,"main-button","transparent-button-enabled",3,"click"],["fullWidth","true","color","blue","data-id","custom-period-set-button",3,"disabled","clicked"],["transloco","customPeriod.set"]],template:function(r,p){1&r&&(n.\u0275\u0275elementStart(0,"div",0)(1,"button",1),n.\u0275\u0275listener("click",function(){return p.closeDialog()}),n.\u0275\u0275namespaceSVG(),n.\u0275\u0275elementStart(2,"svg",2),n.\u0275\u0275element(3,"use",3),n.\u0275\u0275elementEnd()(),n.\u0275\u0275namespaceHTML(),n.\u0275\u0275elementStart(4,"h2",4),n.\u0275\u0275text(5,"Set up custom period"),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(6,"div",5)(7,"span",6),n.\u0275\u0275text(8,"Custom period"),n.\u0275\u0275elementEnd()(),n.\u0275\u0275elementStart(9,"div",7)(10,"div",8)(11,"input",9),n.\u0275\u0275listener("keypress",function(O){return p.hoursValidator(O)}),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(12,"span",10),n.\u0275\u0275text(13,"Hours"),n.\u0275\u0275elementEnd()(),n.\u0275\u0275elementStart(14,"div",8)(15,"input",11),n.\u0275\u0275listener("keypress",function(O){return p.minutesValidator(O)}),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(16,"span",12),n.\u0275\u0275text(17,"Minutes"),n.\u0275\u0275elementEnd()()(),n.\u0275\u0275elementStart(18,"div",7)(19,"button",13),n.\u0275\u0275listener("click",function(){return p.closeDialog()}),n.\u0275\u0275text(20,"Cancel"),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(21,"app-button",14),n.\u0275\u0275listener("clicked",function(){return p.setLimitOrderDuration()}),n.\u0275\u0275elementStart(22,"span",15),n.\u0275\u0275text(23,"Set"),n.\u0275\u0275elementEnd()()()()),2&r&&(n.\u0275\u0275property("formGroup",p.customPeriod),n.\u0275\u0275advance(11),n.\u0275\u0275property("formControl",p.customHours),n.\u0275\u0275advance(4),n.\u0275\u0275property("formControl",p.customMinutes),n.\u0275\u0275advance(6),n.\u0275\u0275property("disabled",p.customPeriod.invalid))},dependencies:[o.DefaultValueAccessor,o.NgControlStatus,o.NgControlStatusGroup,o.FormControlDirective,o.FormGroupDirective,l.KI,i.r],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;width:420px!important;border-radius:24px;background-color:var(--1inch-bg-02);padding:16px!important;align-items:center;text-align:center}@media (max-width: 520px){[_nghost-%COMP%]{width:100%!important}}@media (max-width: 520px){[_nghost-%COMP%]{position:fixed;right:0;bottom:0;left:0;padding:16px 16px 32px!important;border-radius:24px 24px 0 0}}.custom-period-close-icon[_ngcontent-%COMP%]{position:absolute;width:36px;height:36px;padding:6px;border-radius:12px;color:var(--1inch__ui-01);right:10px;top:10px}.custom-period-close-icon[_ngcontent-%COMP%]:hover{background:var(--1inch-common-btn-bg-03)}@media (max-width: 520px){.custom-period-close-icon[_ngcontent-%COMP%]{display:none}}.custom-period-title[_ngcontent-%COMP%]{text-align:center;font-size:20px;line-height:23px;margin-bottom:0;padding:0 24px}@media (max-width: 520px){.custom-period-title[_ngcontent-%COMP%]{font-size:18px}}.custom-period-subtitle[_ngcontent-%COMP%]{font-weight:600;margin:20px 4px 12px;text-align:start;color:var(--1inch__ui-02)}.custom-period-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px;margin-bottom:20px}.custom-period-row[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}.custom-period-input-wrap[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:42px;padding:10px;border-radius:12px;background-color:var(--1inch-bg-01)}.custom-period-input[_ngcontent-%COMP%]{width:100%;background:transparent;border:none;color:var(--1inch-text-01)}.custom-period-input-label[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}"]}),a})()},74342:(v,m,e)=>{e.d(m,{W:()=>i});var o=e(38143),t=e(31777),s=e(12725),n=e(64925),l=e(51109);let i=(()=>{class d{}return d.\u0275fac=function(_){return new(_||d)},d.\u0275mod=l.\u0275\u0275defineNgModule({type:d}),d.\u0275inj=l.\u0275\u0275defineInjector({imports:[o.ez,t.ReactiveFormsModule,s.y4,n.h]}),d})()},1212:(v,m,e)=>{e.d(m,{z:()=>x});var o=e(48163),t=e(51109),s=e(31777),n=e(25214),l=e(33643),i=e(9468),d=e(30459),c=e(77724),_=e(90813),a=e(2242),E=e(79641),r=e(77065),p=e(12725),g=e(38143),O=e(67945),u=e(80135);function C(f,P){if(1&f&&(t.\u0275\u0275text(0),t.\u0275\u0275pipe(1,"transloco")),2&f){const M=t.\u0275\u0275nextContext();t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(1,1,M.tooltipTextTranslocoKey)," ")}}function D(f,P){if(1&f&&(t.\u0275\u0275elementStart(0,"button",12),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"orderDuration"),t.\u0275\u0275pipe(3,"async"),t.\u0275\u0275elementEnd()),2&f){const M=P.$implicit,h=t.\u0275\u0275nextContext(3);t.\u0275\u0275classProp("duration-select__selected-option",M==(null==h.control?null:h.control.value)),t.\u0275\u0275property("value",M),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind2(2,4,M,t.\u0275\u0275pipeBind1(3,7,h.lang$))," ")}}function T(f,P){if(1&f){const M=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",7)(1,"tui-data-list",8),t.\u0275\u0275template(2,D,4,9,"button",9),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",10)(4,"button",11),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(M);const y=t.\u0275\u0275nextContext(2);return t.\u0275\u0275resetView(y.selectCustomPeriod())}),t.\u0275\u0275text(5," Custom "),t.\u0275\u0275elementEnd()()()}if(2&f){const M=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",M.expiresInOptions)}}function I(f,P){if(1&f&&(t.\u0275\u0275elementStart(0,"tui-select",5),t.\u0275\u0275pipe(1,"orderDuration"),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275template(3,T,6,1,"ng-template",6),t.\u0275\u0275elementEnd()),2&f){const M=t.\u0275\u0275nextContext();t.\u0275\u0275property("formControl",M.control)("valueContent",t.\u0275\u0275pipeBind2(1,2,null==M.control?null:M.control.value,t.\u0275\u0275pipeBind1(2,5,M.lang$)))}}class x extends n.F9{constructor(P,M,h,y){super(P,M),this.matDialog=h,this.translocoService=y,this.displayedCharacters=7,this.expiresInOptions=a.Mr,this.lang$=this.translocoService.langChanges$.pipe((0,d.g)(1))}get focused(){return!!this.tuiSelectComponent&&this.tuiSelectComponent.focused}getTooltipState(P){return!this.displayedCharacters||P.length<=this.displayedCharacters?null:P}selectCustomPeriod(){if(!this.control)return;const P=this.matDialog.open(E.S,{data:{duration:this.control.value}}).afterClosed().pipe((0,c.b)(M=>{!M||!this.control||this.control.setValue(M)}));(0,_.O)(P,"openCustomPeriodDialog$")}}x.\u0275fac=function(P){return new(P||x)(t.\u0275\u0275directiveInject(s.NgControl,10),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(r.uw),t.\u0275\u0275directiveInject(p.Vn))},x.\u0275cmp=t.\u0275\u0275defineComponent({type:x,selectors:[["duration-select"]],viewQuery:function(P,M){if(1&P&&t.\u0275\u0275viewQuery(i.uJ,5),2&P){let h;t.\u0275\u0275queryRefresh(h=t.\u0275\u0275loadQuery())&&(M.tuiSelectComponent=h.first)}},inputs:{displayedCharacters:"displayedCharacters",titleTranslocoKey:"titleTranslocoKey",tooltipTextTranslocoKey:"tooltipTextTranslocoKey"},features:[t.\u0275\u0275InheritDefinitionFeature],decls:12,vars:11,consts:[[1,"title","text-gray"],["data-id","duration-select.tooltip",1,"info-icon",3,"tooltip"],["expiresInTooltip",""],["contentType","custom",1,"time-select-tooltip",3,"tooltip","customElement"],["tuiSelect",""],[1,"duration-select",3,"formControl","valueContent"],["tuiDataList",""],[1,"duration-select__item-list-wrapper"],[1,"duration-select__item-list"],["tuiOption","","class","duration-select__option",3,"value","duration-select__selected-option",4,"ngFor","ngForOf"],[1,"duration-select__custom-option-wrapper"],[1,"duration-select__custom-option",3,"click"],["tuiOption","",1,"duration-select__option",3,"value"]],template:function(P,M){if(1&P&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"div",0),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"transloco"),t.\u0275\u0275element(4,"tooltip",1),t.\u0275\u0275template(5,C,2,3,"ng-template",null,2,t.\u0275\u0275templateRefExtractor),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(7,"tooltip",3),t.\u0275\u0275pipe(8,"orderDuration"),t.\u0275\u0275pipe(9,"async"),t.\u0275\u0275template(10,I,4,7,"ng-template",null,4,t.\u0275\u0275templateRefExtractor),t.\u0275\u0275elementContainerEnd()),2&P){const h=t.\u0275\u0275reference(6),y=t.\u0275\u0275reference(11);t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(3,4,M.titleTranslocoKey)," "),t.\u0275\u0275advance(2),t.\u0275\u0275property("tooltip",h),t.\u0275\u0275advance(3),t.\u0275\u0275property("tooltip",M.getTooltipState(t.\u0275\u0275pipeBind2(8,6,null==M.control?null:M.control.value,t.\u0275\u0275pipeBind1(9,9,M.lang$))))("customElement",y)}},dependencies:[g.sg,i.uJ,i.OI,s.NgControlStatus,s.FormControlDirective,O.qi,O.vK,O.gX,u.K,g.Ov,p.Ot,a.nk],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;background-color:var(--1inch-bg-01);border-radius:16px}.title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;font-size:13px;line-height:16px;padding:14px 16px;width:inherit}.title[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{margin-left:5px}.duration-select[_ngcontent-%COMP%]{min-width:138px;margin-bottom:12px}.duration-select[_ngcontent-%COMP%]     tui-primitive-textfield{margin:0 16px}.duration-select[_ngcontent-%COMP%]     tui-hosted-dropdown .wrapper tui-primitive-textfield tui-wrapper{color:var(--1inch-bg-01)}.duration-select[_ngcontent-%COMP%]     tui-hosted-dropdown .wrapper tui-primitive-textfield tui-wrapper .t-input{padding-top:0!important;color:var(--1inch-text-01);font-size:20px;width:100%;max-width:100%;border:none;padding-right:24px}.duration-select[_ngcontent-%COMP%]     tui-hosted-dropdown .wrapper tui-primitive-textfield tui-wrapper .t-input .t-value{justify-content:flex-end;margin-left:1px}.duration-select[_ngcontent-%COMP%]     tui-hosted-dropdown .wrapper tui-primitive-textfield tui-wrapper .t-input .t-value .t-primitive-value{text-overflow:clip}.duration-select[_ngcontent-%COMP%]     tui-arrow{color:var(--1inch__ui-02);margin-left:-4px}.duration-select[_ngcontent-%COMP%]     tui-arrow tui-svg{width:16px}.duration-select__header[_ngcontent-%COMP%]{height:12px;background-color:var(--1inch-bg-01);border-radius:0 0 16px 16px}.duration-select__item-list-wrapper[_ngcontent-%COMP%]{border-radius:12px;border:none;background:var(--1inch__ui-10-05);box-shadow:var(--1inch__shadow__dropdown);overflow:hidden}.duration-select__item-list[_ngcontent-%COMP%]{overflow-y:auto;padding:0 4px 0 8px!important;margin:8px 4px 8px 0;max-height:200px}.duration-select__item-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:20px 8px;font-size:16px}.item-list__scrollable-container[_ngcontent-%COMP%]{height:176px}.duration-select__selected-option[_ngcontent-%COMP%]{color:var(--1inch-text-03)!important}.duration-select__custom-option-wrapper[_ngcontent-%COMP%]{margin:0 8px 8px;border-top:1px solid var(--1inch-bg-03)}.duration-select__custom-option[_ngcontent-%COMP%]{border-radius:8px;transition:background-color .3s;border:none;text-align:left;color:var(--1inch__ui-02);height:40px;width:100%;margin-top:8px;padding:7px 8px}.duration-select__custom-option[_ngcontent-%COMP%]:hover, .duration-select__custom-option[_ngcontent-%COMP%]:focus{background:var(--1inch-bg-03);outline:none!important}.duration-select__option[_ngcontent-%COMP%]{border-radius:8px;padding:8px;color:var(--1inch__ui-02);transition:background-color .3s;text-align:left}.duration-select__option[_ngcontent-%COMP%]:hover, .duration-select__option[_ngcontent-%COMP%]:focus{background:var(--1inch-bg-03);outline:none!important}.duration-select__option[_ngcontent-%COMP%]     .content{flex:none}.duration-select__option[_ngcontent-%COMP%]     .dummy{display:none}.duration-select__option[_ngcontent-%COMP%]     .checkmark{display:none}.duration-select__option[_ngcontent-%COMP%]     tui-select-option{justify-content:end!important}.time-select-tooltip[_ngcontent-%COMP%]{margin-left:0}"],changeDetection:0}),(0,o.__decorate)([l.UM],x.prototype,"getTooltipState",null)},5099:(v,m,e)=>{e.d(m,{f:()=>a});var o=e(38143),t=e(31777),s=e(12725),n=e(16944),l=e(67945),i=e(9468),d=e(30098),c=e(74342),_=e(51109);let a=(()=>{class E{}return E.\u0275fac=function(p){return new(p||E)},E.\u0275mod=_.\u0275\u0275defineNgModule({type:E}),E.\u0275inj=_.\u0275\u0275defineInjector({imports:[o.ez,s.y4,i.Jy,d.f,t.ReactiveFormsModule,l.pc,t.FormsModule,n.z,c.W]}),E})()},50734:(v,m,e)=>{e.d(m,{D:()=>c});var o=e(92402),t=e(51109),s=e(38143),n=e(12725);function l(_,a){1&_&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275element(1,"span",2),t.\u0275\u0275pipe(2,"transloco"),t.\u0275\u0275elementContainerEnd()),2&_&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("innerText",t.\u0275\u0275pipeBind1(2,1,"otc-deal.filled")))}function i(_,a){1&_&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275element(1,"span",3),t.\u0275\u0275pipe(2,"transloco"),t.\u0275\u0275elementContainerEnd()),2&_&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("innerText",t.\u0275\u0275pipeBind1(2,1,"otc-deal.canceled")))}function d(_,a){1&_&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275element(1,"span",4),t.\u0275\u0275pipe(2,"transloco"),t.\u0275\u0275elementContainerEnd()),2&_&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("innerText",t.\u0275\u0275pipeBind1(2,1,"otc-deal.expired")))}let c=(()=>{class _{constructor(){this.LimitOrderCompleteStatus=o.H}}return _.\u0275fac=function(E){return new(E||_)},_.\u0275cmp=t.\u0275\u0275defineComponent({type:_,selectors:[["limit-order-complete-status"]],inputs:{completeStatus:"completeStatus"},decls:4,vars:4,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"order__filled",3,"innerText"],[1,"order__canceled",3,"innerText"],[1,"order__expired",3,"innerText"]],template:function(E,r){1&E&&(t.\u0275\u0275elementContainerStart(0,0),t.\u0275\u0275template(1,l,3,3,"ng-container",1),t.\u0275\u0275template(2,i,3,3,"ng-container",1),t.\u0275\u0275template(3,d,3,3,"ng-container",1),t.\u0275\u0275elementContainerEnd()),2&E&&(t.\u0275\u0275property("ngSwitch",r.completeStatus),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngSwitchCase",r.LimitOrderCompleteStatus.FILLED),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngSwitchCase",r.LimitOrderCompleteStatus.CANCELED),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngSwitchCase",r.LimitOrderCompleteStatus.EXPIRED))},dependencies:[s.RF,s.n9,n.Ot],styles:[".order__canceled[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__error)}.order__expired[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__warning)}.order__filled[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__approve)}"],changeDetection:0}),_})()},26373:(v,m,e)=>{e.d(m,{w:()=>n});var o=e(38143),t=e(12725),s=e(51109);let n=(()=>{class l{}return l.\u0275fac=function(d){return new(d||l)},l.\u0275mod=s.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=s.\u0275\u0275defineInjector({imports:[o.ez,t.y4]}),l})()},12410:(v,m,e)=>{e.d(m,{g:()=>d});var o=e(51109),t=e(72071),s=e(38143),n=e(74578);function l(c,_){if(1&c&&(o.\u0275\u0275elementContainerStart(0),o.\u0275\u0275elementStart(1,"span"),o.\u0275\u0275text(2),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementContainerEnd()),2&c){const a=_.tuiLet;o.\u0275\u0275advance(2),o.\u0275\u0275textInterpolate(a.join(", "))}}function i(c,_){if(1&c&&(o.\u0275\u0275elementContainerStart(0),o.\u0275\u0275elementStart(1,"div",1),o.\u0275\u0275namespaceSVG(),o.\u0275\u0275elementStart(2,"svg",2),o.\u0275\u0275element(3,"use",3),o.\u0275\u0275elementEnd(),o.\u0275\u0275namespaceHTML(),o.\u0275\u0275elementStart(4,"p",4)(5,"span"),o.\u0275\u0275text(6,"Unfortunately, Limit Orders are not supported by these wallets:"),o.\u0275\u0275elementEnd(),o.\u0275\u0275element(7,"br"),o.\u0275\u0275template(8,l,3,1,"ng-container",5),o.\u0275\u0275pipe(9,"async"),o.\u0275\u0275elementEnd()(),o.\u0275\u0275elementContainerEnd()),2&c){const a=o.\u0275\u0275nextContext();o.\u0275\u0275advance(8),o.\u0275\u0275property("tuiLet",o.\u0275\u0275pipeBind1(9,1,a.walletsWithoutLimitOrdersSupport$))}}let d=(()=>{class c{constructor(a){this.limitOrdersSupportService=a,this.isLimitOrdersSupportedByWallet$=this.limitOrdersSupportService.isLimitOrdersSupportedByWallet$,this.walletsWithoutLimitOrdersSupport$=this.limitOrdersSupportService.walletsWithoutLimitOrdersSupport$}}return c.\u0275fac=function(a){return new(a||c)(o.\u0275\u0275directiveInject(t.G))},c.\u0275cmp=o.\u0275\u0275defineComponent({type:c,selectors:[["limit-orders-support"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"limit-order-plug"],["width","240","height","160",1,"text-gray"],[0,"xlink","href","assets/images/coming-soon-dashboard.svg#coming-soon-dashboard"],[1,"text-gray","text-center","mt-32"],[4,"tuiLet"]],template:function(a,E){1&a&&(o.\u0275\u0275template(0,i,10,3,"ng-container",0),o.\u0275\u0275pipe(1,"async")),2&a&&o.\u0275\u0275property("ngIf",!o.\u0275\u0275pipeBind1(1,1,E.isLimitOrdersSupportedByWallet$))},dependencies:[s.O5,n.Ls,s.Ov],styles:[".limit-order-plug[_ngcontent-%COMP%]{height:480px;display:flex;justify-content:center;flex-direction:column;align-items:center}.limit-order-plug[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:20px}"],changeDetection:0}),c})()},46793:(v,m,e)=>{e.d(m,{d:()=>n});var o=e(38143),t=e(74578),s=e(51109);let n=(()=>{class l{}return l.\u0275fac=function(d){return new(d||l)},l.\u0275mod=s.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=s.\u0275\u0275defineInjector({imports:[o.ez,t.WD]}),l})()},72071:(v,m,e)=>{e.d(m,{G:()=>_});var o=e(15547),t=e(64736),s=e(32744),n=e(5690),l=e(53339),i=e(87952),d=e(51109),c=e(93130);let _=(()=>{class a{constructor(r,p){this.walletConnectionQuery=r,this.limitOrderWalletsBlacklist=p,this.isLimitOrdersSupportedByWallet$=this.walletConnectionQuery.connectedWallet$.pipe((0,t.U)(g=>{if(!g)return!0;if(g.typeId===l.JP.walletConnect&&g.metaName)return!s.x_.includes(g.metaName);const O=(u=(0,n.$J)())&&i.yL.includes(u);var u;return!this.limitOrderWalletsBlacklist.includes(g.typeId)&&!O})),this.walletsWithoutLimitOrdersSupport$=this.walletConnectionQuery.connectedWallet$.pipe((0,t.U)(g=>{if(!g)return[];const O=[...l.x7,g].filter(u=>this.limitOrderWalletsBlacklist.includes(u.typeId)||u.metaName&&s.x_.includes(u.metaName)).map(u=>u.typeId===l.JP.walletConnect?u.metaName:u.title);return[...new Set([...O,...i.yL.map(u=>n.bU[u])])]}))}}return a.\u0275fac=function(r){return new(r||a)(d.\u0275\u0275inject(c.r),d.\u0275\u0275inject(o.Bt))},a.\u0275prov=d.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},71666:(v,m,e)=>{e.d(m,{c:()=>n,i:()=>l});var o=e(89618),t=e(24654),s=e(87478);function n(i,d,c,_=10){return d?(0,s.t)(c===t.N.direct?d/i:i/d,_):0}function l(i,d,c,_=18,a=18,E=18){return!i&&c===t.N.direct||!d&&c===t.N.reversed?BigInt(0):c===t.N.direct?o.p.div(d,i,a,_,E):o.p.div(i,d,_,a,E)}},87478:(v,m,e)=>{function o(t,s){return+("number"==typeof s?t.toFixed(s):t)}e.d(m,{t:()=>o})},79398:(v,m,e)=>{e.d(m,{I:()=>E});var o=e(38143),t=e(31777),s=e(12725),n=e(16944),l=e(62901),i=e(74578),d=e(69006),c=e(4321),_=e(74004),a=e(51109);let E=(()=>{class r{}return r.\u0275fac=function(g){return new(g||r)},r.\u0275mod=a.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=a.\u0275\u0275defineInjector({imports:[o.ez,d.Q,s.y4,c._H,t.ReactiveFormsModule,_.l,i.WD,n.z,l.w]}),r})()},75096:(v,m,e)=>{e.d(m,{y:()=>s});var o=e(38143),t=e(51109);let s=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[o.ez]}),n})()},30098:(v,m,e)=>{e.d(m,{f:()=>s});var o=e(38143),t=e(51109);let s=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[o.ez]}),n})()},31455:(v,m,e)=>{e.d(m,{o:()=>s});var o=e(95580),t=e(51109);let s=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[o.c]}),n})()}}]);