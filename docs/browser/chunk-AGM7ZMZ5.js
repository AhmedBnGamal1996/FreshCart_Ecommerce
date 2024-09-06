import{$ as lt,A as C,B as b,D as k,Ga as f,H as rt,Ia as g,K as V,L,N as H,Na as U,T as at,U as Z,X as r,Xa as j,Y as v,a as h,ab as K,b as T,d as _,da as q,db as Q,ea as w,ga as x,ha as O,ia as l,ja as S,la as p,pb as ht,qa as u,ra as m,sa as E,ta as z,ua as $,va as G,wa as ct,x as A,xa as F,ya as c,z as ot}from"./chunk-KIN36VHZ.js";var y=function(s){return s[s.State=0]="State",s[s.Transition=1]="Transition",s[s.Sequence=2]="Sequence",s[s.Group=3]="Group",s[s.Animate=4]="Animate",s[s.Keyframes=5]="Keyframes",s[s.Style=6]="Style",s[s.Trigger=7]="Trigger",s[s.Reference=8]="Reference",s[s.AnimateChild=9]="AnimateChild",s[s.AnimateRef=10]="AnimateRef",s[s.Query=11]="Query",s[s.Stagger=12]="Stagger",s}(y||{}),Bt="*";function pt(s,i){return{type:y.Trigger,name:s,definitions:i,options:{}}}function Y(s,i=null){return{type:y.Animate,styles:i,timings:s}}function kt(s,i=null){return{type:y.Sequence,steps:s,options:i}}function N(s){return{type:y.Style,styles:s,offset:null}}function M(s,i,t){return{type:y.State,name:s,styles:i,options:t}}function J(s,i,t=null){return{type:y.Transition,expr:s,animation:i,options:t}}var ut=class{constructor(i=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=i+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(i=>i()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(i){this._position=this.totalTime?i*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(i){let t=i=="start"?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}},dt=class{constructor(i){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=i;let t=0,e=0,n=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++t==o&&this._onFinish()}),a.onDestroy(()=>{++e==o&&this._onDestroy()}),a.onStart(()=>{++n==o&&this._onStart()})}),this.totalTime=this.players.reduce((a,d)=>Math.max(a,d.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this.players.forEach(i=>i.init())}onStart(i){this._onStartFns.push(i)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(i=>i()),this._onStartFns=[])}onDone(i){this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(i=>i.play())}pause(){this.players.forEach(i=>i.pause())}restart(){this.players.forEach(i=>i.restart())}finish(){this._onFinish(),this.players.forEach(i=>i.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(i=>i.destroy()),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this.players.forEach(i=>i.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(i){let t=i*this.totalTime;this.players.forEach(e=>{let n=e.totalTime?Math.min(1,t/e.totalTime):1;e.setPosition(n)})}getPosition(){let i=this.players.reduce((t,e)=>t===null||e.totalTime>t.totalTime?e:t,null);return i!=null?i.getPosition():0}beforeDestroy(){this.players.forEach(i=>{i.beforeDestroy&&i.beforeDestroy()})}triggerCallback(i){let t=i=="start"?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}},Vt="!";var mt=["toast-component",""];function Ct(s,i){if(s&1){let t=G();u(0,"button",5),F("click",function(){V(t);let n=c();return L(n.remove())}),u(1,"span",6),f(2,"\xD7"),m()()}}function bt(s,i){if(s&1&&(z(0),f(1),$()),s&2){let t=c(2);r(),g("[",t.duplicatesCount+1,"]")}}function Dt(s,i){if(s&1&&(u(0,"div"),f(1),x(2,bt,2,1,"ng-container",4),m()),s&2){let t=c();p(t.options.titleClass),O("aria-label",t.title),r(),g(" ",t.title," "),r(),l("ngIf",t.duplicatesCount)}}function It(s,i){if(s&1&&E(0,"div",7),s&2){let t=c();p(t.options.messageClass),l("innerHTML",t.message,Z)}}function wt(s,i){if(s&1&&(u(0,"div",8),f(1),m()),s&2){let t=c();p(t.options.messageClass),O("aria-label",t.message),r(),g(" ",t.message," ")}}function xt(s,i){if(s&1&&(u(0,"div"),E(1,"div",9),m()),s&2){let t=c();r(),S("width",t.width()+"%")}}function Ot(s,i){if(s&1){let t=G();u(0,"button",5),F("click",function(){V(t);let n=c();return L(n.remove())}),u(1,"span",6),f(2,"\xD7"),m()()}}function St(s,i){if(s&1&&(z(0),f(1),$()),s&2){let t=c(2);r(),g("[",t.duplicatesCount+1,"]")}}function Et(s,i){if(s&1&&(u(0,"div"),f(1),x(2,St,2,1,"ng-container",4),m()),s&2){let t=c();p(t.options.titleClass),O("aria-label",t.title),r(),g(" ",t.title," "),r(),l("ngIf",t.duplicatesCount)}}function Ft(s,i){if(s&1&&E(0,"div",7),s&2){let t=c();p(t.options.messageClass),l("innerHTML",t.message,Z)}}function Rt(s,i){if(s&1&&(u(0,"div",8),f(1),m()),s&2){let t=c();p(t.options.messageClass),O("aria-label",t.message),r(),g(" ",t.message," ")}}function At(s,i){if(s&1&&(u(0,"div"),E(1,"div",9),m()),s&2){let t=c();r(),S("width",t.width()+"%")}}var W=class{_attachedHost;component;viewContainerRef;injector;constructor(i,t){this.component=i,this.injector=t}attach(i,t){return this._attachedHost=i,i.attach(this,t)}detach(){let i=this._attachedHost;if(i)return this._attachedHost=void 0,i.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},X=class{_attachedPortal;_disposeFn;attach(i,t){return this._attachedPortal=i,this.attachComponentPortal(i,t)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(i){this._disposeFn=i}},tt=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new _;_activate=new _;_manualClose=new _;_resetTimeout=new _;_countDuplicate=new _;constructor(i){this._overlayRef=i}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(i,t){i&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}},D=class{toastId;config;message;title;toastType;toastRef;_onTap=new _;_onAction=new _;constructor(i,t,e,n,o,a){this.toastId=i,this.config=t,this.message=e,this.title=n,this.toastType=o,this.toastRef=a,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(i){this._onAction.next(i)}onAction(){return this._onAction.asObservable()}},ft={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},_t=new ot("ToastConfig"),et=class extends X{_hostDomElement;_componentFactoryResolver;_appRef;constructor(i,t,e){super(),this._hostDomElement=i,this._componentFactoryResolver=t,this._appRef=e}attachComponentPortal(i,t){let e=this._componentFactoryResolver.resolveComponentFactory(i.component),n;return n=e.create(i.injector),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.detachView(n.hostView),n.destroy()}),t?this._hostDomElement.insertBefore(this._getComponentRootNode(n),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(n)),n}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},Ht=(()=>{class s{_document=b(K);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=this._document.createElement("div");t.classList.add("overlay-container"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),this._containerElement=t}static \u0275fac=function(e){return new(e||s)};static \u0275prov=A({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),it=class{_portalHost;constructor(i){this._portalHost=i}attach(i,t=!0){return this._portalHost.attach(i,t)}detach(){return this._portalHost.detach()}},jt=(()=>{class s{_overlayContainer=b(Ht);_componentFactoryResolver=b(lt);_appRef=b(j);_document=b(K);_paneElements=new Map;create(t,e){return this._createOverlayRef(this.getPaneElement(t,e))}getPaneElement(t="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[t]||(this._paneElements.get(e)[t]=this._createPaneElement(t,e)),this._paneElements.get(e)[t]}_createPaneElement(t,e){let n=this._document.createElement("div");return n.id="toast-container",n.classList.add(t),n.classList.add("toast-container"),e?e.getContainerElement().appendChild(n):this._overlayContainer.getContainerElement().appendChild(n),n}_createPortalHost(t){return new et(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new it(this._createPortalHost(t))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=A({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),vt=(()=>{class s{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(t,e,n,o,a){this.overlay=e,this._injector=n,this.sanitizer=o,this.ngZone=a,this.toastrConfig=h(h({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=h(h({},t.default.iconClasses),t.config.iconClasses))}show(t,e,n={},o=""){return this._preBuildNotification(o,t,e,this.applyConfig(n))}success(t,e,n={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,t,e,this.applyConfig(n))}error(t,e,n={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,t,e,this.applyConfig(n))}info(t,e,n={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,t,e,this.applyConfig(n))}warning(t,e,n={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,t,e,this.applyConfig(n))}clear(t){for(let e of this.toasts)if(t!==void 0){if(e.toastId===t){e.toastRef.manualClose();return}}else e.toastRef.manualClose()}remove(t){let e=this._findToast(t);if(!e||(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let n=this.toasts[this.currentlyActive].toastRef;n.isInactive()||(this.currentlyActive=this.currentlyActive+1,n.activate())}return!0}findDuplicate(t="",e="",n,o){let{includeTitleDuplicates:a}=this.toastrConfig;for(let d of this.toasts){let R=a&&d.title===t;if((!a||R)&&d.message===e)return d.toastRef.onDuplicate(n,o),d}return null}applyConfig(t={}){return h(h({},this.toastrConfig),t)}_findToast(t){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===t)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(t,e,n,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,e,n,o)):this._buildNotification(t,e,n,o)}_buildNotification(t,e,n,o){if(!o.toastComponent)throw new Error("toastComponent required");let a=this.findDuplicate(n,e,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&n||e)&&this.toastrConfig.preventDuplicates&&a!==null)return a;this.previousToastMessage=e;let d=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(d=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let R=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let st=e;e&&o.enableHtml&&(st=this.sanitizer.sanitize(at.HTML,e));let I=new tt(R),P=new D(this.index,o,st,n,t,I),gt=[{provide:D,useValue:P}],yt=H.create({providers:gt,parent:this._injector}),Tt=new W(o.toastComponent,yt),nt=R.attach(Tt,o.newestOnTop);I.componentInstance=nt.instance;let B={toastId:this.index,title:n||"",message:e||"",toastRef:I,onShown:I.afterActivate(),onHidden:I.afterClosed(),onTap:P.onTap(),onAction:P.onAction(),portal:nt};return d||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{B.toastRef.activate()})),this.toasts.push(B),B}static \u0275fac=function(e){return new(e||s)(C(_t),C(jt),C(H),C(ht),C(q))};static \u0275prov=A({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),Nt=(()=>{class s{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=w(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,n){this.toastrService=t,this.toastPackage=e,this.ngZone=n,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state=w({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(t=>T(h({},t),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(n=>100-n),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(t=>T(h({},t),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(t=>T(h({},t),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),e)):this.timeout=setTimeout(()=>t(),e)}outsideInterval(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),e)):this.intervalId=setInterval(()=>t(),e)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}static \u0275fac=function(e){return new(e||s)(v(vt),v(D),v(q))};static \u0275cmp=k({type:s,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,n){e&1&&F("click",function(){return n.tapToast()})("mouseenter",function(){return n.stickAround()})("mouseleave",function(){return n.delayedHideToast()}),e&2&&(ct("@flyInOut",n._state),p(n.toastClasses),S("display",n.displayStyle))},standalone:!0,features:[U],attrs:mt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,n){e&1&&x(0,Ct,3,0,"button",0)(1,Dt,3,5,"div",1)(2,It,1,3,"div",2)(3,wt,2,4,"div",3)(4,xt,2,2,"div",4),e&2&&(l("ngIf",n.options.closeButton),r(),l("ngIf",n.title),r(),l("ngIf",n.message&&n.options.enableHtml),r(),l("ngIf",n.message&&!n.options.enableHtml),r(),l("ngIf",n.options.progressBar))},dependencies:[Q],encapsulation:2,data:{animation:[pt("flyInOut",[M("inactive",N({opacity:0})),M("active",N({opacity:1})),M("removed",N({opacity:0})),J("inactive => active",Y("{{ easeTime }}ms {{ easing }}")),J("active => removed",Y("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return s})(),Mt=T(h({},ft),{toastComponent:Nt}),re=(s={})=>rt([{provide:_t,useValue:{default:Mt,config:s}}]);var Pt=(()=>{class s{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=w(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=w("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,n){this.toastrService=t,this.toastPackage=e,this.appRef=n,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(n=>100-n),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(e){return new(e||s)(v(vt),v(D),v(j))};static \u0275cmp=k({type:s,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(e,n){e&1&&F("click",function(){return n.tapToast()})("mouseenter",function(){return n.stickAround()})("mouseleave",function(){return n.delayedHideToast()}),e&2&&(p(n.toastClasses),S("display",n.displayStyle))},standalone:!0,features:[U],attrs:mt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,n){e&1&&x(0,Ot,3,0,"button",0)(1,Et,3,5,"div",1)(2,Ft,1,3,"div",2)(3,Rt,2,4,"div",3)(4,At,2,2,"div",4),e&2&&(l("ngIf",n.options.closeButton),r(),l("ngIf",n.title),r(),l("ngIf",n.message&&n.options.enableHtml),r(),l("ngIf",n.message&&!n.options.enableHtml),r(),l("ngIf",n.options.progressBar))},dependencies:[Q],encapsulation:2,changeDetection:0})}return s})(),ae=T(h({},ft),{toastComponent:Pt});export{y as a,Bt as b,pt as c,Y as d,kt as e,N as f,M as g,J as h,ut as i,dt as j,Vt as k,vt as l,re as m};
