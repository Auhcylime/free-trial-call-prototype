const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR-TnBap33W.js","assets/index-Dx7bbkUR.js","assets/index-BC7fDBcH.css","assets/dotlottie-audio-75C54RUV-BDsRiW8G.js","assets/chunk-HDDX7F4A-Ctccelsq.js","assets/lottie_worker-Q23FJ6ZR-YP5OKMTN-C8IhdaM8.js","assets/lottie_light-KMJEUZFY-TNG7ODX7-Csy_VcKN.js","assets/lottie_svg-MJGYILXD-NRTSROOT-UdoHkoPc.js","assets/lottie_light_canvas-B5UTTNXA-PRI6IBWW-DPCcPYLn.js","assets/lottie_canvas-CDSUBMCL-MZNYH5VV-kg5mzqxw.js","assets/lottie_light_html-SLCECTRT-SYWXEBDN-aXQwICLL.js","assets/lottie_html-X3TYKVQI-L6774NQS-C-JEneuM.js"])))=>i.map(i=>d[i]);
var Bi=Object.defineProperty;var Ri=(t,e,i)=>e in t?Bi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var c=(t,e,i)=>Ri(t,typeof e!="symbol"?e+"":e,i);import{_ as it}from"./index-Dx7bbkUR.js";var zt=window,be=zt.ShadowRoot&&(zt.ShadyCSS===void 0||zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),De=new WeakMap,ai=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(be&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=De.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&De.set(e,t))}return t}toString(){return this.cssText}},Hi=t=>new ai(typeof t=="string"?t:t+"",void 0,we),qi=(t,...e)=>{let i=t.length===1?t[0]:e.reduce((o,n,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1],t[0]);return new ai(i,t,we)},Zi=(t,e)=>{be?t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):e.forEach(i=>{let o=document.createElement("style"),n=zt.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)})},Ve=be?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(let o of e.cssRules)i+=o.cssText;return Hi(i)})(t):t,Yt,Vt=window,Fe=Vt.trustedTypes,Ji=Fe?Fe.emptyScript:"",Be=Vt.reactiveElementPolyfillSupport,he={toAttribute(t,e){switch(e){case Boolean:t=t?Ji:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},li=(t,e)=>e!==t&&(e==e||t==t),te={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:li},de="finalized",mt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=te){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){let n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||te}static finalize(){if(this.hasOwnProperty(de))return!1;this[de]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(Ve(o))}else t!==void 0&&e.push(Ve(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Zi(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=te){var o;let n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){let r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:he).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;let o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){let r=o.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:he;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||li)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};mt[de]=!0,mt.elementProperties=new Map,mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},Be==null||Be({ReactiveElement:mt}),((Yt=Vt.reactiveElementVersions)!==null&&Yt!==void 0?Yt:Vt.reactiveElementVersions=[]).push("1.6.3");var ee,Ft=window,bt=Ft.trustedTypes,Re=bt?bt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ue="$lit$",st=`lit$${(Math.random()+"").slice(9)}$`,hi="?"+st,Wi=`<${hi}>`,ut=document,It=()=>ut.createComment(""),Pt=t=>t===null||typeof t!="object"&&typeof t!="function",di=Array.isArray,Ki=t=>di(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ie=`[ 	
\f\r]`,$t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,He=/-->/g,qe=/>/g,lt=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ze=/'/g,Je=/"/g,ui=/^(?:script|style|textarea|title)$/i,Gi=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),b=Gi(1),wt=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),We=new WeakMap,ht=ut.createTreeWalker(ut,129,null,!1);function pi(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Re!==void 0?Re.createHTML(e):e}var Qi=(t,e)=>{let i=t.length-1,o=[],n,r=e===2?"<svg>":"",a=$t;for(let l=0;l<i;l++){let s=t[l],h,u,d=-1,p=0;for(;p<s.length&&(a.lastIndex=p,u=a.exec(s),u!==null);)p=a.lastIndex,a===$t?u[1]==="!--"?a=He:u[1]!==void 0?a=qe:u[2]!==void 0?(ui.test(u[2])&&(n=RegExp("</"+u[2],"g")),a=lt):u[3]!==void 0&&(a=lt):a===lt?u[0]===">"?(a=n??$t,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?lt:u[3]==='"'?Je:Ze):a===Je||a===Ze?a=lt:a===He||a===qe?a=$t:(a=lt,n=void 0);let f=a===lt&&t[l+1].startsWith("/>")?" ":"";r+=a===$t?s+Wi:d>=0?(o.push(h),s.slice(0,d)+ue+s.slice(d)+st+f):s+st+(d===-2?(o.push(void 0),l):f)}return[pi(t,r+(t[i]||"<?>")+(e===2?"</svg>":"")),o]},pe=class ci{constructor({strings:e,_$litType$:i},o){let n;this.parts=[];let r=0,a=0,l=e.length-1,s=this.parts,[h,u]=Qi(e,i);if(this.el=ci.createElement(h,o),ht.currentNode=this.el.content,i===2){let d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(n=ht.nextNode())!==null&&s.length<l;){if(n.nodeType===1){if(n.hasAttributes()){let d=[];for(let p of n.getAttributeNames())if(p.endsWith(ue)||p.startsWith(st)){let f=u[a++];if(d.push(p),f!==void 0){let m=n.getAttribute(f.toLowerCase()+ue).split(st),v=/([.?@])?(.*)/.exec(f);s.push({type:1,index:r,name:v[2],strings:m,ctor:v[1]==="."?Yi:v[1]==="?"?eo:v[1]==="@"?io:qt})}else s.push({type:6,index:r})}for(let p of d)n.removeAttribute(p)}if(ui.test(n.tagName)){let d=n.textContent.split(st),p=d.length-1;if(p>0){n.textContent=bt?bt.emptyScript:"";for(let f=0;f<p;f++)n.append(d[f],It()),ht.nextNode(),s.push({type:2,index:++r});n.append(d[p],It())}}}else if(n.nodeType===8)if(n.data===hi)s.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(st,d+1))!==-1;)s.push({type:7,index:r}),d+=st.length-1}r++}}static createElement(e,i){let o=ut.createElement("template");return o.innerHTML=e,o}};function Ct(t,e,i=t,o){var n,r,a,l;if(e===wt)return e;let s=o!==void 0?(n=i._$Co)===null||n===void 0?void 0:n[o]:i._$Cl,h=Pt(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==h&&((r=s==null?void 0:s._$AO)===null||r===void 0||r.call(s,!1),h===void 0?s=void 0:(s=new h(t),s._$AT(t,i,o)),o!==void 0?((a=(l=i)._$Co)!==null&&a!==void 0?a:l._$Co=[])[o]=s:i._$Cl=s),s!==void 0&&(e=Ct(t,s._$AS(t,e.values),s,o)),e}var Xi=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var i;let{el:{content:o},parts:n}=this._$AD,r=((i=e==null?void 0:e.creationScope)!==null&&i!==void 0?i:ut).importNode(o,!0);ht.currentNode=r;let a=ht.nextNode(),l=0,s=0,h=n[0];for(;h!==void 0;){if(l===h.index){let u;h.type===2?u=new Ce(a,a.nextSibling,this,e):h.type===1?u=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(u=new oo(a,this,e)),this._$AV.push(u),h=n[++s]}l!==(h==null?void 0:h.index)&&(a=ht.nextNode(),l++)}return ht.currentNode=ut,r}v(e){let i=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}},Ce=class fi{constructor(e,i,o,n){var r;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,i;return(i=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let e=this._$AA.parentNode,i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Ct(this,e,i),Pt(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==wt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ki(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==O&&Pt(this._$AH)?this._$AA.nextSibling.data=e:this.$(ut.createTextNode(e)),this._$AH=e}g(e){var i;let{values:o,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=pe.createElement(pi(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===r)this._$AH.v(o);else{let a=new Xi(r,this),l=a.u(this.options);a.v(o),this.$(l),this._$AH=a}}_$AC(e){let i=We.get(e.strings);return i===void 0&&We.set(e.strings,i=new pe(e)),i}T(e){di(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,o,n=0;for(let r of e)n===i.length?i.push(o=new fi(this.k(It()),this.k(It()),this,this.options)):o=i[n],o._$AI(r),n++;n<i.length&&(this._$AR(o&&o._$AB.nextSibling,n),i.length=n)}_$AR(e=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var i;this._$AM===void 0&&(this._$Cp=e,(i=this._$AP)===null||i===void 0||i.call(this,e))}},qt=class{constructor(t,e,i,o,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let n=this.strings,r=!1;if(n===void 0)t=Ct(this,t,e,0),r=!Pt(t)||t!==this._$AH&&t!==wt,r&&(this._$AH=t);else{let a=t,l,s;for(t=n[0],l=0;l<n.length-1;l++)s=Ct(this,a[i+l],e,l),s===wt&&(s=this._$AH[l]),r||(r=!Pt(s)||s!==this._$AH[l]),s===O?t=O:t!==O&&(t+=(s??"")+n[l+1]),this._$AH[l]=s}r&&!o&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Yi=class extends qt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}},to=bt?bt.emptyScript:"",eo=class extends qt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==O?this.element.setAttribute(this.name,to):this.element.removeAttribute(this.name)}},io=class extends qt{constructor(e,i,o,n,r){super(e,i,o,n,r),this.type=5}_$AI(e,i=this){var o;if((e=(o=Ct(this,e,i,0))!==null&&o!==void 0?o:O)===wt)return;let n=this._$AH,r=e===O&&n!==O||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==O&&(n===O||r);r&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},oo=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ct(this,t)}},Ke=Ft.litHtmlPolyfillSupport;Ke==null||Ke(pe,Ce),((ee=Ft.litHtmlVersions)!==null&&ee!==void 0?ee:Ft.litHtmlVersions=[]).push("2.8.0");var no=(t,e,i)=>{var o,n;let r=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:e,a=r._$litPart$;if(a===void 0){let l=(n=i==null?void 0:i.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=a=new Ce(e.insertBefore(It(),l),l,void 0,i??{})}return a._$AI(t),a},oe,ne,At=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;let o=super.createRenderRoot();return(e=(i=this.renderOptions).renderBefore)!==null&&e!==void 0||(i.renderBefore=o.firstChild),o}update(e){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=no(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return wt}};At.finalized=!0,At._$litElement$=!0,(oe=globalThis.litElementHydrateSupport)===null||oe===void 0||oe.call(globalThis,{LitElement:At});var Ge=globalThis.litElementPolyfillSupport;Ge==null||Ge({LitElement:At});((ne=globalThis.litElementVersions)!==null&&ne!==void 0?ne:globalThis.litElementVersions=[]).push("3.3.3");var ro=qi`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host * {
    box-sizing: border-box;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`;/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Qe={},so=function(t,e,i,o,n){var r=new Worker(Qe[e]||(Qe[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return r.onmessage=function(a){var l=a.data,s=l.$e$;if(s){var h=new Error(s[0]);h.code=s[1],h.stack=s[2],n(h,null)}else n(null,l)},r.postMessage(i,o),r},F=Uint8Array,dt=Uint16Array,vi=Int32Array,Le=new F([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Se=new F([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),mi=new F([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),_i=function(t,e){for(var i=new dt(31),o=0;o<31;++o)i[o]=e+=1<<t[o-1];for(var n=new vi(i[30]),o=1;o<30;++o)for(var r=i[o];r<i[o+1];++r)n[r]=r-i[o]<<5|o;return{b:i,r:n}},yi=_i(Le,2),$e=yi.b,ao=yi.r;$e[28]=258,ao[258]=28;var lo=_i(Se,0),gi=lo.b,Bt=new dt(32768);for(C=0;C<32768;++C)et=(C&43690)>>1|(C&21845)<<1,et=(et&52428)>>2|(et&13107)<<2,et=(et&61680)>>4|(et&3855)<<4,Bt[C]=((et&65280)>>8|(et&255)<<8)>>1;var et,C,yt=function(t,e,i){for(var o=t.length,n=0,r=new dt(e);n<o;++n)t[n]&&++r[t[n]-1];var a=new dt(e);for(n=1;n<e;++n)a[n]=a[n-1]+r[n-1]<<1;var l;if(i){l=new dt(1<<e);var s=15-e;for(n=0;n<o;++n)if(t[n])for(var h=n<<4|t[n],u=e-t[n],d=a[t[n]-1]++<<u,p=d|(1<<u)-1;d<=p;++d)l[Bt[d]>>s]=h}else for(l=new dt(o),n=0;n<o;++n)t[n]&&(l[n]=Bt[a[t[n]-1]++]>>15-t[n]);return l},Ot=new F(288);for(C=0;C<144;++C)Ot[C]=8;var C;for(C=144;C<256;++C)Ot[C]=9;var C;for(C=256;C<280;++C)Ot[C]=7;var C;for(C=280;C<288;++C)Ot[C]=8;var C,bi=new F(32);for(C=0;C<32;++C)bi[C]=5;var C,wi=yt(Ot,9,1),Ci=yt(bi,5,1),jt=function(t){for(var e=t[0],i=1;i<t.length;++i)t[i]>e&&(e=t[i]);return e},J=function(t,e,i){var o=e/8|0;return(t[o]|t[o+1]<<8)>>(e&7)&i},Dt=function(t,e){var i=e/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(e&7)},Li=function(t){return(t+7)/8|0},Zt=function(t,e,i){return(e==null||e<0)&&(e=0),(i==null||i>t.length)&&(i=t.length),new F(t.subarray(e,i))},Si=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],V=function(t,e,i){var o=new Error(e||Si[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,V),!i)throw o;return o},$i=function(t,e,i,o){var n=t.length,r=o?o.length:0;if(!n||e.f&&!e.l)return i||new F(0);var a=!i,l=a||e.i!=2,s=e.i;a&&(i=new F(n*3));var h=function(Ne){var ze=i.length;if(Ne>ze){var je=new F(Math.max(ze*2,Ne));je.set(i),i=je}},u=e.f||0,d=e.p||0,p=e.b||0,f=e.l,m=e.d,v=e.m,y=e.n,_=n*8;do{if(!f){u=J(t,d,1);var S=J(t,d+1,3);if(d+=3,S)if(S==1)f=wi,m=Ci,v=9,y=5;else if(S==2){var g=J(t,d,31)+257,T=J(t,d+10,15)+4,U=g+J(t,d+5,31)+1;d+=14;for(var B=new F(U),I=new F(19),$=0;$<T;++$)I[mi[$]]=J(t,d+$*3,7);d+=T*3;for(var j=jt(I),K=(1<<j)-1,N=yt(I,j,1),$=0;$<U;){var R=N[J(t,d,K)];d+=R&15;var D=R>>4;if(D<16)B[$++]=D;else{var q=0,z=0;for(D==16?(z=3+J(t,d,3),d+=2,q=B[$-1]):D==17?(z=3+J(t,d,7),d+=3):D==18&&(z=11+J(t,d,127),d+=7);z--;)B[$++]=q}}var ot=B.subarray(0,g),nt=B.subarray(g);v=jt(ot),y=jt(nt),f=yt(ot,v,1),m=yt(nt,y,1)}else V(1);else{var D=Li(d)+4,Wt=t[D-4]|t[D-3]<<8,Kt=D+Wt;if(Kt>n){s&&V(0);break}l&&h(p+Wt),i.set(t.subarray(D,Kt),p),e.b=p+=Wt,e.p=d=Kt*8,e.f=u;continue}if(d>_){s&&V(0);break}}l&&h(p+131072);for(var Di=(1<<v)-1,Vi=(1<<y)-1,Gt=d;;Gt=d){var q=f[Dt(t,d)&Di],ft=q>>4;if(d+=q&15,d>_){s&&V(0);break}if(q||V(2),ft<256)i[p++]=ft;else if(ft==256){Gt=d,f=null;break}else{var Me=ft-254;if(ft>264){var $=ft-257,St=Le[$];Me=J(t,d,(1<<St)-1)+$e[$],d+=St}var Qt=m[Dt(t,d)&Vi],Xt=Qt>>4;Qt||V(3),d+=Qt&15;var nt=gi[Xt];if(Xt>3){var St=Se[Xt];nt+=Dt(t,d)&(1<<St)-1,d+=St}if(d>_){s&&V(0);break}l&&h(p+131072);var Te=p+Me;if(p<nt){var Ue=r-nt,Fi=Math.min(nt,Te);for(Ue+p<0&&V(3);p<Fi;++p)i[p]=o[Ue+p]}for(;p<Te;++p)i[p]=i[p-nt]}}e.l=f,e.p=Gt,e.b=p,e.f=u,f&&(u=1,e.m=v,e.d=m,e.n=y)}while(!u);return p!=i.length&&a?Zt(i,0,p):i.subarray(0,p)},ho=new F(0),uo=function(t,e){var i={};for(var o in t)i[o]=t[o];for(var o in e)i[o]=e[o];return i},Xe=function(t,e,i){for(var o=t(),n=t.toString(),r=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<o.length;++a){var l=o[a],s=r[a];if(typeof l=="function"){e+=";"+s+"=";var h=l.toString();if(l.prototype)if(h.indexOf("[native code]")!=-1){var u=h.indexOf(" ",8)+1;e+=h.slice(u,h.indexOf("(",u))}else{e+=h;for(var d in l.prototype)e+=";"+s+".prototype."+d+"="+l.prototype[d].toString()}else e+=h}else i[s]=l}return e},Nt=[],po=function(t){var e=[];for(var i in t)t[i].buffer&&e.push((t[i]=new t[i].constructor(t[i])).buffer);return e},co=function(t,e,i,o){if(!Nt[i]){for(var n="",r={},a=t.length-1,l=0;l<a;++l)n=Xe(t[l],n,r);Nt[i]={c:Xe(t[a],n,r),e:r}}var s=uo({},Nt[i].e);return so(Nt[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",i,s,po(s),o)},fo=function(){return[F,dt,vi,Le,Se,mi,$e,gi,wi,Ci,Bt,Si,yt,jt,J,Dt,Li,Zt,V,$i,Ae,Ai,ki]},Ai=function(t){return postMessage(t,[t.buffer])},ki=function(t){return t&&{out:t.size&&new F(t.size),dictionary:t.dictionary}},vo=function(t,e,i,o,n,r){var a=co(i,o,n,function(l,s){a.terminate(),r(l,s)});return a.postMessage([t,e],e.consume?[t.buffer]:[]),function(){a.terminate()}},X=function(t,e){return t[e]|t[e+1]<<8},G=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},re=function(t,e){return G(t,e)+G(t,e+4)*4294967296};function mo(t,e,i){return i||(i=e,e={}),typeof i!="function"&&V(7),vo(t,e,[fo],function(o){return Ai(Ae(o.data[0],ki(o.data[1])))},1,i)}function Ae(t,e){return $i(t,{i:2},e&&e.out,e&&e.dictionary)}var ce=typeof TextDecoder<"u"&&new TextDecoder,_o=0;try{ce.decode(ho,{stream:!0}),_o=1}catch{}var yo=function(t){for(var e="",i=0;;){var o=t[i++],n=(o>127)+(o>223)+(o>239);if(i+n>t.length)return{s:e,r:Zt(t,i-1)};n?n==3?(o=((o&15)<<18|(t[i++]&63)<<12|(t[i++]&63)<<6|t[i++]&63)-65536,e+=String.fromCharCode(55296|o>>10,56320|o&1023)):n&1?e+=String.fromCharCode((o&31)<<6|t[i++]&63):e+=String.fromCharCode((o&15)<<12|(t[i++]&63)<<6|t[i++]&63):e+=String.fromCharCode(o)}};function Lt(t,e){if(e){for(var i="",o=0;o<t.length;o+=16384)i+=String.fromCharCode.apply(null,t.subarray(o,o+16384));return i}else{if(ce)return ce.decode(t);var n=yo(t),r=n.s,i=n.r;return i.length&&V(8),r}}var go=function(t,e){return e+30+X(t,e+26)+X(t,e+28)},bo=function(t,e,i){var o=X(t,e+28),n=Lt(t.subarray(e+46,e+46+o),!(X(t,e+8)&2048)),r=e+46+o,a=G(t,e+20),l=i&&a==4294967295?wo(t,r):[a,G(t,e+24),G(t,e+42)],s=l[0],h=l[1],u=l[2];return[X(t,e+10),s,h,n,r+X(t,e+30)+X(t,e+32),u]},wo=function(t,e){for(;X(t,e)!=1;e+=4+X(t,e+2));return[re(t,e+12),re(t,e+4),re(t,e+20)]},Ye=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(t){t()};function Co(t,e,i){i||(i=e,e={}),typeof i!="function"&&V(7);var o=[],n=function(){for(var y=0;y<o.length;++y)o[y]()},r={},a=function(y,_){Ye(function(){i(y,_)})};Ye(function(){a=i});for(var l=t.length-22;G(t,l)!=101010256;--l)if(!l||t.length-l>65558)return a(V(13,0,1),null),n;var s=X(t,l+8);if(s){var h=s,u=G(t,l+16),d=u==4294967295||h==65535;if(d){var p=G(t,l-12);d=G(t,p)==101075792,d&&(h=s=G(t,p+32),u=G(t,p+48))}for(var f=e&&e.filter,m=function(y){var _=bo(t,u,d),S=_[0],g=_[1],T=_[2],U=_[3],B=_[4],I=_[5],$=go(t,I);u=B;var j=function(N,R){N?(n(),a(N,null)):(R&&(r[U]=R),--s||a(null,r))};if(!f||f({name:U,size:g,originalSize:T,compression:S}))if(!S)j(null,Zt(t,$,$+g));else if(S==8){var K=t.subarray($,$+g);if(g<32e4)try{j(null,Ae(K,{out:new F(T)}))}catch(N){j(N,null)}else o.push(mo(K,{size:T},j))}else j(V(14,"unknown compression type "+S,1),null);else j(null,null)},v=0;v<h;++v)m(v)}else a(null,{});return n}function Lo(t){return(Array.isArray(t)?t:t.issues).reduce((e,i)=>{if(i.path){let o=i.path.map(({key:n})=>n).join(".");e.nested[o]=[...e.nested[o]||[],i.message]}else e.root=[...e.root||[],i.message];return e},{nested:{}})}var So=class extends Error{constructor(e){super(e[0].message);c(this,"issues");this.name="ValiError",this.issues=e}};function $o(t,e){return{reason:t==null?void 0:t.reason,validation:e.validation,origin:(t==null?void 0:t.origin)||"value",message:e.message,input:e.input,abortEarly:t==null?void 0:t.abortEarly,abortPipeEarly:t==null?void 0:t.abortPipeEarly}}function Ao(t,e){return{reason:e,origin:t==null?void 0:t.origin,abortEarly:t==null?void 0:t.abortEarly,abortPipeEarly:t==null?void 0:t.abortPipeEarly}}function at(t,e,i,o){if(!e||!e.length)return{output:t};let n,r,a=t;for(let l of e){let s=l(a);if(s.issue){n=n||Ao(i,o);let h=$o(n,s.issue);if(r?r.push(h):r=[h],n.abortEarly||n.abortPipeEarly)break}else a=s.output}return r?{issues:r}:{output:a}}function Y(t,e){return!t||typeof t=="string"?[t,e]:[void 0,t]}function tt(t,e,i,o,n,r){return{issues:[{reason:e,validation:i,origin:(t==null?void 0:t.origin)||"value",message:o,input:n,issues:r,abortEarly:t==null?void 0:t.abortEarly,abortPipeEarly:t==null?void 0:t.abortPipeEarly}]}}function ko(t=[]){return{schema:"any",async:!1,_parse(e,i){return at(e,t,i,"any")}}}function kt(t,e,i){let[o,n]=Y(e,i);return{schema:"array",array:{item:t},async:!1,_parse(r,a){if(!Array.isArray(r))return tt(a,"type","array",o||"Invalid type",r);let l,s=[];for(let h=0;h<r.length;h++){let u=r[h],d=t._parse(u,a);if(d.issues){let p={schema:"array",input:r,key:h,value:u};for(let f of d.issues)f.path?f.path.unshift(p):f.path=[p],l==null||l.push(f);if(l||(l=d.issues),a!=null&&a.abortEarly)break}else s.push(d.output)}return l?{issues:l}:at(s,n,a,"array")}}}function se(t,e){let[i,o]=Y(t,e);return{schema:"boolean",async:!1,_parse(n,r){return typeof n!="boolean"?tt(r,"type","boolean",i||"Invalid type",n):at(n,o,r,"boolean")}}}function ti(t,e){return{schema:"literal",literal:t,async:!1,_parse(i,o){return i!==t?tt(o,"type","literal","Invalid type",i):{output:i}}}}function xo(t,e){return{schema:"native_enum",nativeEnum:t,async:!1,_parse(i,o){return Object.values(t).includes(i)?{output:i}:tt(o,"type","native_enum","Invalid type",i)}}}function Q(t,e){let[i,o]=Y(t,e);return{schema:"number",async:!1,_parse(n,r){return typeof n!="number"?tt(r,"type","number",i||"Invalid type",n):at(n,o,r,"number")}}}function W(t,e,i){let[o,n]=Y(e,i),r;return{schema:"object",object:t,async:!1,_parse(a,l){if(!a||typeof a!="object")return tt(l,"type","object",o||"Invalid type",a);r=r||Object.entries(t);let s,h={};for(let[u,d]of r){let p=a[u],f=d._parse(p,l);if(f.issues){let m={schema:"object",input:a,key:u,value:p};for(let v of f.issues)v.path?v.path.unshift(m):v.path=[m],s==null||s.push(v);if(s||(s=f.issues),l!=null&&l.abortEarly)break}else h[u]=f.output}return s?{issues:s}:at(h,n,l,"object")}}}function L(t){return{schema:"optional",wrapped:t,async:!1,_parse(e,i){return e===void 0?{output:e}:t._parse(e,i)}}}function M(t,e){let[i,o]=Y(t,e);return{schema:"string",async:!1,_parse(n,r){return typeof n!="string"?tt(r,"type","string",i||"Invalid type",n):at(n,o,r,"string")}}}function Io(t,e,i,o){if(typeof e=="object"&&!Array.isArray(e)){let[a,l]=Y(i,o);return[t,e,a,l]}let[n,r]=Y(e,i);return[M(),t,n,r]}var Po=["__proto__","prototype","constructor"];function Oo(t,e,i,o){let[n,r,a,l]=Io(t,e,i,o);return{schema:"record",record:{key:n,value:r},async:!1,_parse(s,h){if(!s||typeof s!="object")return tt(h,"type","record",a||"Invalid type",s);let u,d={};for(let[p,f]of Object.entries(s))if(!Po.includes(p)){let m,v=n._parse(p,{origin:"key",abortEarly:h==null?void 0:h.abortEarly,abortPipeEarly:h==null?void 0:h.abortPipeEarly});if(v.issues){m={schema:"record",input:s,key:p,value:f};for(let _ of v.issues)_.path=[m],u==null||u.push(_);if(u||(u=v.issues),h!=null&&h.abortEarly)break}let y=r._parse(f,h);if(y.issues){m=m||{schema:"record",input:s,key:p,value:f};for(let _ of y.issues)_.path?_.path.unshift(m):_.path=[m],u==null||u.push(_);if(u||(u=y.issues),h!=null&&h.abortEarly)break}!v.issues&&!y.issues&&(d[v.output]=y.output)}return u?{issues:u}:at(d,l,h,"record")}}}function Eo(t,e,i){let[o,n]=Y(t,e);return[void 0,o,n]}function ei(t,e,i,o){let[n,r,a]=Eo(e,i);return{schema:"tuple",tuple:{items:t,rest:n},async:!1,_parse(l,s){if(!Array.isArray(l)||!n&&t.length!==l.length||n&&t.length>l.length)return tt(s,"type","tuple",r||"Invalid type",l);let h,u=[];for(let d=0;d<t.length;d++){let p=l[d],f=t[d]._parse(p,s);if(f.issues){let m={schema:"tuple",input:l,key:d,value:p};for(let v of f.issues)v.path?v.path.unshift(m):v.path=[m],h==null||h.push(v);if(h||(h=f.issues),s!=null&&s.abortEarly)break}else u[d]=f.output}if(n)for(let d=t.length;d<l.length;d++){let p=l[d],f=n._parse(p,s);if(f.issues){let m={schema:"tuple",input:l,key:d,value:p};for(let v of f.issues)v.path?v.path.unshift(m):v.path=[m],h==null||h.push(v);if(h||(h=f.issues),s!=null&&s.abortEarly)break}else u[d]=f.output}return h?{issues:h}:at(u,a,s,"tuple")}}}function fe(t,e){return{schema:"union",union:t,async:!1,_parse(i,o){let n,r;for(let a of t){let l=a._parse(i,o);if(l.issues)if(n)for(let s of l.issues)n.push(s);else n=l.issues;else{r=[l.output];break}}return r?{output:r[0]}:tt(o,"type","union","Invalid type",i,n)}}}function Et(t,e,i){let[o,n]=Y(e,i);return W(t.reduce((r,a)=>({...r,...a.object}),{}),o,n)}function Mo(t,e,i,o){let[n,r]=Y(i,o);return W(Object.entries(t.object).reduce((a,[l,s])=>e.includes(l)?a:{...a,[l]:s},{}),n,r)}function To(t,e,i){let o=t._parse(e,i);return o.issues?{success:!1,error:new So(o.issues),issues:o.issues}:{success:!0,data:o.output,output:o.output}}function ve(t,e){return i=>i>t?{issue:{validation:"max_value",message:e||"Invalid value",input:i}}:{output:i}}function me(t,e){return i=>i<t?{issue:{validation:"min_value",message:e||"Invalid value",input:i}}:{output:i}}var Uo=Object.create,ke=Object.defineProperty,No=Object.getOwnPropertyDescriptor,xi=Object.getOwnPropertyNames,zo=Object.getPrototypeOf,jo=Object.prototype.hasOwnProperty,Do=(t,e,i)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Mt=(t,e)=>function(){return e||(0,t[xi(t)[0]])((e={exports:{}}).exports,e),e.exports},Vo=(t,e,i,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of xi(e))!jo.call(t,n)&&n!==i&&ke(t,n,{get:()=>e[n],enumerable:!(o=No(e,n))||o.enumerable});return t},Fo=(t,e,i)=>(i=t!=null?Uo(zo(t)):{},Vo(!t||!t.__esModule?ke(i,"default",{value:t,enumerable:!0}):i,t)),Bo=(t,e,i)=>(Do(t,e+"",i),i),Ro=Mt({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.copy=void 0;var e=(i,o,n=0,r=0,a=i.width-n,l=i.height-r,s=0,h=0)=>{if(n=n|0,r=r|0,a=a|0,l=l|0,s=s|0,h=h|0,a<=0||l<=0)return;let u=new Uint32Array(i.data.buffer),d=new Uint32Array(o.data.buffer);for(let p=0;p<l;p++){let f=r+p;if(f<0||f>=i.height)continue;let m=h+p;if(!(m<0||m>=o.height))for(let v=0;v<a;v++){let y=n+v;if(y<0||y>=i.width)continue;let _=s+v;if(_<0||_>=o.width)continue;let S=f*i.width+y,g=m*o.width+_;d[g]=u[S]}}};t.copy=e}}),Ho=Mt({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateImageFactory=(e=[0,0,0,0],i=4)=>{if(i=Math.floor(i),isNaN(i)||i<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in e)||e.length<i)throw TypeError(`fill should be iterable with at least ${i} members`);e=new Uint8ClampedArray(e).slice(0,i);let o=e.every(n=>n===0);return(n,r,a)=>{if(n===void 0||r===void 0)throw TypeError("Not enough arguments");if(n=Math.floor(n),r=Math.floor(r),isNaN(n)||n<1||isNaN(r)||r<1)throw TypeError("Index or size is negative or greater than the allowed amount");let l=n*r*i;if(a===void 0&&(a=new Uint8ClampedArray(l)),a instanceof Uint8ClampedArray){if(a.length!==l)throw TypeError("Index or size is negative or greater than the allowed amount");if(!o)for(let s=0;s<r;s++)for(let h=0;h<n;h++){let u=(s*n+h)*i;for(let d=0;d<i;d++)a[u+d]=e[d]}return{get width(){return n},get height(){return r},get data(){return a}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},t.createImage=t.CreateImageFactory()}}),qo=Mt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0;var e=14,i=(r,a)=>{if(r<=-a||r>=a||r==0)return 0;let l=r*Math.PI;return Math.sin(l)/l*Math.sin(l/a)/(l/a)},o=r=>Math.round(r*((1<<e)-1)),n=(r,a,l,s,h)=>{let u=h?2:3,d=1/l,p=Math.min(1,l),f=u/p,m=Math.floor((f+1)*2),v=new Int16Array((m+2)*a),y=0;for(let _=0;_<a;_++){let S=(_+.5)*d+s,g=Math.max(0,Math.floor(S-f)),T=Math.min(r-1,Math.ceil(S+f)),U=T-g+1,B=new Float32Array(U),I=new Int16Array(U),$=0,j=0;for(let z=g;z<=T;z++){let ot=i((z+.5-S)*p,u);$+=ot,B[j]=ot,j++}let K=0;for(let z=0;z<B.length;z++){let ot=B[z]/$;K+=ot,I[z]=o(ot)}I[a>>1]+=o(1-K);let N=0;for(;N<I.length&&I[N]===0;)N++;let R=I.length-1;for(;R>0&&I[R]===0;)R--;let D=g+N,q=R-N+1;v[y++]=D,v[y++]=q,v.set(I.subarray(N,R+1),y),y+=q}return v};t.filters=n}}),Zo=Mt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.convolve=void 0;var e=14,i=(o,n,r,a,l,s)=>{let h=0,u=0;for(let d=0;d<a;d++){let p=0;for(let f=0;f<l;f++){let m=s[p++],v=h+m*4|0,y=0,_=0,S=0,g=0;for(let T=s[p++];T>0;T--){let U=s[p++];y=y+U*o[v]|0,_=_+U*o[v+1]|0,S=S+U*o[v+2]|0,g=g+U*o[v+3]|0,v=v+4|0}n[u]=y+8192>>e,n[u+1]=_+8192>>e,n[u+2]=S+8192>>e,n[u+3]=g+8192>>e,u=u+a*4|0}u=(d+1)*4|0,h=(d+1)*r*4|0}};t.convolve=i}}),Jo=Mt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.lanczos2=t.lanczos=void 0;var e=Ro(),i=Ho(),o=qo(),n=Zo(),r=(s,h,u=!1)=>{let d=h.width/s.width,p=h.height/s.height,f=o.filters(s.width,h.width,d,0,u),m=o.filters(s.height,h.height,p,0,u),v=new Uint8ClampedArray(h.width*s.height*4);n.convolve(s.data,v,s.width,s.height,h.width,f),n.convolve(v,h.data,s.height,h.width,h.height,m)},a=(s,h,u=0,d=0,p=s.width-u,f=s.height-d,m=0,v=0,y=h.width-m,_=h.height-v)=>{if(u=u|0,d=d|0,p=p|0,f=f|0,m=m|0,v=v|0,y=y|0,_=_|0,p<=0||f<=0||y<=0||_<=0)return;if(u===0&&d===0&&p===s.width&&f===s.height&&m===0&&v===0&&y===h.width&&_===h.height){r(s,h);return}let S=i.createImage(p,f),g=i.createImage(y,_);e.copy(s,S,u,d),r(S,g),e.copy(g,h,0,0,g.width,g.height,m,v)};t.lanczos=a;var l=(s,h,u=0,d=0,p=s.width-u,f=s.height-d,m=0,v=0,y=h.width-m,_=h.height-v)=>{if(u=u|0,d=d|0,p=p|0,f=f|0,m=m|0,v=v|0,y=y|0,_=_|0,p<=0||f<=0||y<=0||_<=0)return;if(u===0&&d===0&&p===s.width&&f===s.height&&m===0&&v===0&&y===h.width&&_===h.height){r(s,h,!0);return}let S=i.createImage(p,f),g=i.createImage(y,_);e.copy(s,S,u,d),r(S,g,!0),e.copy(g,h,0,0,g.width,g.height,m,v)};t.lanczos2=l}}),Ii=(t=>(t.Bounce="bounce",t.Normal="normal",t))(Ii||{}),Wo=xo(Ii),Pi=W({autoplay:L(se()),defaultTheme:L(M()),direction:L(fe([ti(1),ti(-1)])),hover:L(se()),id:M(),intermission:L(Q()),loop:L(fe([se(),Q()])),playMode:L(Wo),speed:L(Q()),themeColor:L(M())}),Ko=W({animations:kt(M()),id:M()}),Go=W({activeAnimationId:L(M()),animations:kt(Pi),author:L(M()),custom:L(Oo(M(),ko())),description:L(M()),generator:L(M()),keywords:L(M()),revision:L(Q()),themes:L(kt(Ko)),states:L(kt(M())),version:L(M())}),Oi=Mo(Pi,["id"]),pt=W({state:M()}),Qo=pt,Xo=Et([pt,W({ms:Q()})]),Yo=Et([pt,W({count:Q()})]),tn=pt,en=pt,on=pt,nn=Et([pt,W({threshold:L(kt(Q([me(0),ve(1)])))})]),rn=W({onAfter:L(Xo),onClick:L(Qo),onComplete:L(on),onEnter:L(Yo),onMouseEnter:L(tn),onMouseLeave:L(en),onShow:L(nn)}),sn=Et([Oi,W({playOnScroll:L(ei([Q([me(0),ve(1)]),Q([me(0),ve(1)])])),segments:L(fe([ei([Q(),Q()]),M()]))})]);Et([rn,W({animationId:L(M()),playbackSettings:sn})]);var an={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},ii={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},ln=t=>{let e=null,i=[];if(!t)return null;let o=t.substring(t.indexOf(",")+1);typeof window>"u"?e=Buffer.from(o,"base64").toString("binary"):e=atob(o);let n=new Uint8Array(e.length);for(let r=0;r<e.length;r+=1)n[r]=e.charCodeAt(r);i=Array.from(n.subarray(0,8));for(let r in ii){let a=ii[r];if(a&&i.every((l,s)=>l===a[s]))return an[r]}return null},xe=class extends Error{constructor(t,e){super(t),Bo(this,"code"),this.name="[dotlottie-js]",this.code=e}};function Ei(t){let e;if(typeof window>"u")e=Buffer.from(t).toString("base64");else{let i=Array.prototype.map.call(t,o=>String.fromCharCode(o)).join("");e=window.btoa(i)}return`data:${ln(e)};base64,${e}`}function oi(t){return"w"in t&&"h"in t&&!("xt"in t)&&"p"in t}function _e(t){return!("h"in t)&&!("w"in t)&&"p"in t&&"e"in t&&"u"in t&&"id"in t}async function Tt(t,e=()=>!0){if(!(t instanceof Uint8Array))throw new xe("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise((i,o)=>{Co(t,{filter:e},(n,r)=>{n&&o(n),i(r)})})}async function Ie(t,e,i){if(!(t instanceof Uint8Array))throw new xe("DotLottie not found","INVALID_DOTLOTTIE");return(await Tt(t,o=>o.name===e&&!0))[e]}async function ye(t){let e="manifest.json",i=(await Tt(t,o=>o.name===e))[e];if(!(typeof i>"u"))return JSON.parse(Lt(i,!1))}async function hn(t){if(!(t instanceof Uint8Array))return{success:!1,error:"DotLottie not found"};let e=await ye(t);if(typeof e>"u")return{success:!1,error:"Invalid .lottie file, manifest.json is missing"};let i=To(Go,e);return i.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(Lo(i.error).nested,null,2)}`}}async function ni(t){let e=new Uint8Array(t),i=await hn(e);if(i.error)throw new xe(i.error,"INVALID_DOTLOTTIE");return e}async function dn(t,e){let i=await Tt(t,n=>{let r=n.name.replace("audio/","");return n.name.startsWith("audio/")&&(!e||e({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let a=n.replace("audio/","");o[a]=Ei(r)}}return o}async function un(t,e){var i;let o=new Map;for(let[r,a]of Object.entries(e))for(let l of a.assets||[])if(_e(l)){let s=l.p;o.has(s)||o.set(s,new Set),(i=o.get(s))==null||i.add(r)}let n=await dn(t,r=>o.has(r.name));for(let[r,a]of o){let l=n[r];if(l)for(let s of a){let h=e[s];for(let u of(h==null?void 0:h.assets)||[])_e(u)&&u.p===r&&(u.p=l,u.u="",u.e=1)}}}async function pn(t,e){let i=await Tt(t,n=>{let r=n.name.replace("images/","");return n.name.startsWith("images/")&&(!e||e({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let a=n.replace("images/","");o[a]=Ei(r)}}return o}async function cn(t,e){var i;let o=new Map;for(let[r,a]of Object.entries(e))for(let l of a.assets||[])if(oi(l)){let s=l.p;o.has(s)||o.set(s,new Set),(i=o.get(s))==null||i.add(r)}let n=await pn(t,r=>o.has(r.name));for(let[r,a]of o){let l=n[r];if(l)for(let s of a){let h=e[s];for(let u of(h==null?void 0:h.assets)||[])oi(u)&&u.p===r&&(u.p=l,u.u="",u.e=1)}}}async function fn(t,e,{inlineAssets:i}={},o){let n=`animations/${e}.json`,r=await Ie(t,n);if(typeof r>"u")return;let a=JSON.parse(Lt(r,!1));if(!i)return a;let l={[e]:a};return await cn(t,l),await un(t,l),a}async function vn(t,e,i){let o=`themes/${e}.json`,n=await Ie(t,o);if(!(typeof n>"u"))return JSON.parse(Lt(n,!1))}async function mn(t,e){let i={},o=await Tt(t,n=>(n.name.replace("states/","").replace(".json",""),n.name.startsWith("states/")&&!0));for(let n in o){let r=o[n];if(r instanceof Uint8Array){let a=n.replace("states/","").replace(".json","");i[a]=Lt(r,!1)}}return i}async function _n(t,e,i){let o=`states/${e}.json`,n=await Ie(t,o);return typeof n>"u"?void 0:JSON.parse(Lt(n,!1))}Fo(Jo());function w(t,e="dotLottie-common"){return new Error(`[${e}]: ${t}`)}function vt(t,e="dotLottie-common",...i){console.error(`[${e}]:`,t,...i)}function A(t,e="dotLottie-common",...i){console.warn(`[${e}]:`,t,...i)}function yn(t=""){let e=t.trim(),i=e.lastIndexOf("/"),o=e.substring(i+1),n=o.indexOf(".");return n!==-1?o.substring(0,n):o}function Rt(t){return["v","ip","op","layers","fr","w","h"].every(e=>Object.prototype.hasOwnProperty.call(t,e))}function gn(t){let e=t.assets;return e?e.some(i=>_e(i)):!1}function bn(t){try{let e=JSON.parse(t);return Rt(e)}catch{return!1}}function Bn(t,e){let i=Object.keys(t).find(o=>t[o]===e);if(i===void 0)throw new Error("Value not found in the object.");return i}function ae(t){return JSON.parse(JSON.stringify(t))}var wn=class{constructor(){c(this,"_dotLottie");c(this,"_animationsMap",new Map);c(this,"_themeMap",new Map);c(this,"_stateMachinesMap",new Map);c(this,"_manifest")}get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(t){let e=await fetch(t,{method:"GET",mode:"cors"});if(!e.ok)throw new Error(`Failed to load dotLottie from ${t} with status ${e.status}`);let i=e.headers.get("content-type");if(i!=null&&i.includes("application/json")){let o=await e.json();if(!Rt(o))throw new Error(`Invalid lottie JSON at ${t}`);let n=yn(t);this._animationsMap.set(n,o);let r={activeAnimationId:n,animations:[{id:n}]};this._manifest=r}else{this._dotLottie=await ni(await e.arrayBuffer());let o=await ye(this._dotLottie);if(!o)throw new Error("Manifest not found");this._manifest=o}}loadFromLottieJSON(t){if(!Rt(t))throw new Error("Invalid lottie JSON");let e="my-animation";this._animationsMap.set(e,t);let i={activeAnimationId:e,animations:[{id:e}]};this._manifest=i}async loadFromArrayBuffer(t){this._dotLottie=await ni(t);let e=await ye(this._dotLottie);if(!e)throw new Error("Manifest not found");this._manifest=e}async getAnimation(t){if(this._animationsMap.get(t))return this._animationsMap.get(t);if(!this._dotLottie)return;let e=await fn(this._dotLottie,t,{inlineAssets:!0});return e&&this._animationsMap.set(t,e),e}async getTheme(t){if(this._themeMap.get(t))return this._themeMap.get(t);if(!this._dotLottie)return;let e=await vn(this._dotLottie,t);return e&&this._themeMap.set(t,e),e}async getStateMachines(){if(!this._dotLottie)return;let t=await mn(this._dotLottie);for(let e in t)if(e){let i=t[e];if(i){let o=JSON.parse(i);if(o){let n=o.descriptor.id;this._stateMachinesMap.get(n)||this._stateMachinesMap.set(n,o)}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(t){if(this._stateMachinesMap.get(t))return this._stateMachinesMap.get(t);if(!this._dotLottie)return;let e=await _n(this._dotLottie,t);return e&&this._stateMachinesMap.set(e.descriptor.id,e),e}};function Jt(){throw new Error("Cycle detected")}function Pe(){if(gt>1)gt--;else{for(var t,e=!1;xt!==void 0;){var i=xt;for(xt=void 0,ge++;i!==void 0;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&Ti(i))try{i.c()}catch(n){e||(t=n,e=!0)}i=o}}if(ge=0,gt--,e)throw t}}var k=void 0,xt=void 0,gt=0,ge=0,Ht=0;function Mi(t){if(k!==void 0){var e=t.n;if(e===void 0||e.t!==k)return e={i:0,S:t,p:k.s,n:void 0,t:k,e:void 0,x:void 0,r:e},k.s!==void 0&&(k.s.n=e),k.s=e,t.n=e,32&k.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=k.s,e.n=void 0,k.s.n=e,k.s=e),e}}function H(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}H.prototype.h=function(){return!0};H.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};H.prototype.U=function(t){if(this.t!==void 0){var e=t.e,i=t.x;e!==void 0&&(e.x=i,t.e=void 0),i!==void 0&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}};H.prototype.subscribe=function(t){var e=this;return Sn(function(){var i=e.value,o=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=o}})};H.prototype.valueOf=function(){return this.value};H.prototype.toString=function(){return this.value+""};H.prototype.toJSON=function(){return this.value};H.prototype.peek=function(){return this.v};Object.defineProperty(H.prototype,"value",{get:function(){var t=Mi(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(k instanceof ct&&(function(){throw new Error("Computed cannot have side-effects")})(),t!==this.v){ge>100&&Jt(),this.v=t,this.i++,Ht++,gt++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Pe()}}}});function Cn(t){return new H(t)}function Ti(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Ui(t){for(var e=t.s;e!==void 0;e=e.n){var i=e.S.n;if(i!==void 0&&(e.r=i),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Ni(t){for(var e=t.s,i=void 0;e!==void 0;){var o=e.p;e.i===-1?(e.S.U(e),o!==void 0&&(o.n=e.n),e.n!==void 0&&(e.n.p=o)):i=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=o}t.s=i}function ct(t){H.call(this,void 0),this.x=t,this.s=void 0,this.g=Ht-1,this.f=4}(ct.prototype=new H).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ht))return!0;if(this.g=Ht,this.f|=1,this.i>0&&!Ti(this))return this.f&=-2,!0;var t=k;try{Ui(this),k=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return k=t,Ni(this),this.f&=-2,!0};ct.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}H.prototype.S.call(this,t)};ct.prototype.U=function(t){if(this.t!==void 0&&(H.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};ct.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};ct.prototype.peek=function(){if(this.h()||Jt(),16&this.f)throw this.v;return this.v};Object.defineProperty(ct.prototype,"value",{get:function(){1&this.f&&Jt();var t=Mi(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function zi(t){var e=t.u;if(t.u=void 0,typeof e=="function"){gt++;var i=k;k=void 0;try{e()}catch(o){throw t.f&=-2,t.f|=8,Oe(t),o}finally{k=i,Pe()}}}function Oe(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,zi(t)}function Ln(t){if(k!==this)throw new Error("Out-of-order effect");Ni(this),k=t,this.f&=-2,8&this.f&&Oe(this),Pe()}function Ut(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}Ut.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};Ut.prototype.S=function(){1&this.f&&Jt(),this.f|=1,this.f&=-9,zi(this),Ui(this),gt++;var t=k;return k=this,Ln.bind(this,t)};Ut.prototype.N=function(){2&this.f||(this.f|=2,this.o=xt,xt=this)};Ut.prototype.d=function(){this.f|=8,1&this.f||Oe(this)};function Sn(t){var e=new Ut(t);try{e.c()}catch(i){throw e.d(),i}return e.d.bind(e)}var $n=class{constructor(t){c(this,"_state");c(this,"_prevState");this._prevState=t,this._state=Cn(t)}setState(t){this._prevState=this._state.value,this._state.value=t}subscribe(t){return this._state.subscribe(e=>t(e,this._prevState))}};async function An(t,e){let[{DotLottieStateMachineManager:i}]=await Promise.all([it(()=>import("./dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR-TnBap33W.js"),__vite__mapDeps([0,1,2]))]);if(!t.length)throw w("No state machines available inside this .lottie!");return new i(t,e)}var kn={dependencies:{"lottie-web":"^5.12.2"}},rt=(t=>(t.Complete="complete",t.DataFail="data_fail",t.DataReady="data_ready",t.Error="error",t.Frame="frame",t.Freeze="freeze",t.LoopComplete="loopComplete",t.Pause="pause",t.Play="play",t.Ready="ready",t.Stop="stop",t.VisibilityChange="visibilityChange",t))(rt||{}),_t=(t=>(t.Completed="completed",t.Error="error",t.Fetching="fetching",t.Frozen="frozen",t.Initial="initial",t.Loading="loading",t.Paused="paused",t.Playing="playing",t.Ready="ready",t.Stopped="stopped",t))(_t||{}),Ee=(t=>(t.Bounce="bounce",t.Normal="normal",t))(Ee||{}),Z={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},ji={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},ri=class{constructor(t,e,i){c(this,"_lottie");c(this,"_src");c(this,"_animationConfig");c(this,"_prevUserPlaybackOptions",{});c(this,"_userPlaybackOptions");c(this,"_hover",!1);c(this,"_loop",!1);c(this,"_counter",0);c(this,"_intermission",0);c(this,"_counterInterval",null);c(this,"_container",null);c(this,"_name");c(this,"_mode","normal");c(this,"_background","transparent");c(this,"_animation");c(this,"_defaultTheme");c(this,"_activeAnimationId");c(this,"_currentAnimationId");c(this,"_testId");c(this,"_listeners",new Map);c(this,"_currentState","initial");c(this,"_stateBeforeFreeze","initial");c(this,"state",new $n(ji));c(this,"_light",!1);c(this,"_worker",!1);c(this,"_dotLottieLoader",new wn);c(this,"_activeStateId");c(this,"_inInteractiveMode",!1);c(this,"_scrollTicking",!1);c(this,"_scrollCallback");c(this,"_onShowIntersectionObserver");c(this,"_visibilityPercentage",0);c(this,"_audios",[]);c(this,"_stateMachineManager");typeof t=="string"?this._src=t:this._src=ae(t),i!=null&&i.testId&&(this._testId=i.testId),this._defaultTheme=(i==null?void 0:i.defaultTheme)||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),typeof(i==null?void 0:i.activeAnimationId)=="string"&&(this._activeAnimationId=i.activeAnimationId),this._container=e||null,typeof(i==null?void 0:i.background)=="string"&&this.setBackground(i.background),typeof(i==null?void 0:i.activeStateId)<"u"&&(this._activeStateId=i.activeStateId);let{rendererSettings:o,...n}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...o},...n},i!=null&&i.light&&(this._light=i.light),i!=null&&i.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange()}_listenToHover(){var t,e,i,o;let n=()=>{this._hover&&this.currentState!=="playing"&&this.play()},r=()=>{this._hover&&this.currentState==="playing"&&this.stop()};(t=this._container)==null||t.removeEventListener("mouseenter",n),(e=this._container)==null||e.removeEventListener("mouseleave",r),(i=this._container)==null||i.addEventListener("mouseleave",r),(o=this._container)==null||o.addEventListener("mouseenter",n)}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&this.currentState==="playing"?this.freeze():this.currentState==="frozen"&&this.unfreeze())}_listenToVisibilityChange(){typeof document<"u"&&typeof document.hidden<"u"&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange())}_getOption(t){var e;if(typeof this._userPlaybackOptions[t]<"u")return this._userPlaybackOptions[t];let i=(e=this._dotLottieLoader.manifest)==null?void 0:e.animations.find(o=>o.id===this._currentAnimationId);return i&&typeof i[t]<"u"?i[t]:Z[t]}_getPlaybackOptions(){let t={};for(let e in Z)typeof Z[e]<"u"&&(t[e]=this._getOption(e));return t}_setPlayerState(t){var e,i,o;let n=t(this._getPlaybackOptions());try{Oi._parse(n)}catch{A(`Invalid PlaybackOptions, ${JSON.stringify(n,null,2)}`);return}typeof n.defaultTheme<"u"&&(this._defaultTheme=n.defaultTheme),typeof n.playMode<"u"&&(this._mode=n.playMode),typeof n.intermission<"u"&&(this._intermission=n.intermission),typeof n.hover<"u"&&(this._hover=n.hover),typeof n.loop<"u"&&(this.clearCountTimer(),this._loop=n.loop,this._counter=0,(e=this._lottie)==null||e.setLoop(typeof n.loop=="number"?!0:n.loop)),typeof n.speed<"u"&&((i=this._lottie)==null||i.setSpeed(n.speed)),typeof n.autoplay<"u"&&this._lottie&&(this._lottie.autoplay=n.autoplay),typeof n.direction<"u"&&((o=this._lottie)==null||o.setDirection(n.direction))}_getOptionsFromAnimation(t){let{id:e,...i}=t;return{...Z,...i}}_updateTestData(){!this._testId||!this._lottie||(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed})}setContainer(t){t!==this._container&&(this._container=t,this.setBackground(this._background),this._listenToHover())}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval)}setCurrentState(t){this._currentState=t,this._notify(),this._updateTestData()}static isPathJSON(t){var e;return((e=t.split(".").pop())==null?void 0:e.toLowerCase())==="json"}get src(){return this._src}updateSrc(t){this._src!==t&&(typeof t=="string"?this._src=t:this._src=ae(t),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load())}get intermission(){return this._intermission}get hover(){return this._hover}setHover(t){typeof t=="boolean"&&(this._hover=t,this._userPlaybackOptions.hover=t,this._notify())}setIntermission(t){this._intermission=t,this._userPlaybackOptions.intermission=t,this._notify()}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(t){typeof t=="string"&&(this._mode=t,this._userPlaybackOptions.playMode=t,this._setPlayerState(()=>({playMode:t})),this._notify(),this._updateTestData())}get container(){if(this._container)return this._container}goToAndPlay(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){A("goToAndPlay() Can't use whilst loading.");return}this._lottie.goToAndPlay(t,e,i),this.setCurrentState("playing")}goToAndStop(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){A("goToAndStop() Can't use whilst loading.");return}this._lottie.goToAndStop(t,e,i),this.setCurrentState("stopped")}seek(t){if(!this._lottie||["loading"].includes(this._currentState)){A("seek() Can't use whilst loading.");return}let e=t;typeof e=="number"&&(e=Math.round(e));let i=/^(\d+)(%?)$/u.exec(e.toString());if(!i)return;let o=i[2]==="%"?this.totalFrames*Number(i[1])/100:i[1];o!==void 0&&(this._lottie.goToAndPlay(o,!0),this.currentState==="playing"?this.play():this.currentState==="frozen"?this.freeze():this.pause())}_areNumbersInRange(t,e){return t>=0&&t<=1&&e>=0&&e<=1}_updatePosition(t,e,i){let[o,n]=t??[0,this.totalFrames-1],[r,a]=e??[0,1];if(!this._areNumbersInRange(r,a)){vt("threshold values must be between 0 and 1");return}if(this.container){let{height:l,top:s}=this.container.getBoundingClientRect(),h=window.innerHeight-s,u=window.innerHeight+l,d=h/u,p=o+Math.round((d-r)/(a-r)*(n-o));i&&i(d),this.goToAndStop(p,!0),(p>=n||d>=a)&&this._handleAnimationComplete()}this._scrollTicking=!1}_requestTick(t,e,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(t,e,i)),this._scrollTicking=!0)}playOnScroll(t){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(t==null?void 0:t.segments,t==null?void 0:t.threshold,t==null?void 0:t.positionCallback),window.addEventListener("scroll",this._scrollCallback)}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0)}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0)}addIntersectionObserver(t){if(!this.container)throw w("Can't play on show, player container element not available.");let e={root:null,rootMargin:"0px",threshold:t!=null&&t.threshold?t.threshold:[0,1]},i=o=>{o.forEach(n=>{var r,a;this._visibilityPercentage=n.intersectionRatio*100,n.isIntersecting?(t!=null&&t.callbackOnIntersect&&t.callbackOnIntersect(this._visibilityPercentage),(r=this._container)==null||r.dispatchEvent(new Event("visibilityChange"))):t!=null&&t.callbackOnIntersect&&(t.callbackOnIntersect(0),(a=this._container)==null||a.dispatchEvent(new Event("visibilityChange")))})};this._onShowIntersectionObserver=new IntersectionObserver(i,e),this._onShowIntersectionObserver.observe(this.container)}playOnShow(t){var e;if(this.stop(),!this.container)throw w("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:(e=t==null?void 0:t.threshold)!=null?e:[],callbackOnIntersect:i=>{i===0?this.pause():this.play()}})}_validatePlaybackOptions(t){if(!t)return{};let e={};for(let[i,o]of Object.entries(t))switch(i){case"autoplay":typeof o=="boolean"&&(e.autoplay=o);break;case"direction":typeof o=="number"&&[1,-1].includes(o)&&(e.direction=o);break;case"loop":(typeof o=="boolean"||typeof o=="number")&&(e.loop=o);break;case"playMode":typeof o=="string"&&["normal","bounce"].includes(o)&&(e.playMode=o);break;case"speed":typeof o=="number"&&(e.speed=o);break;case"themeColor":typeof o=="string"&&(e.themeColor=o);break;case"hover":typeof o=="boolean"&&(e.hover=o);break;case"intermission":typeof o=="number"&&(e.intermission=o);break;case"defaultTheme":typeof o=="string"&&(e.defaultTheme=o);break}return this._requireValidPlaybackOptions(e),e}_requireAnimationsInTheManifest(){var t;if(!((t=this._dotLottieLoader.manifest)!=null&&t.animations.length))throw w("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(this._dotLottieLoader.animationsMap.size===0)throw w("No animations have been loaded.")}async play(t,e){var i,o;if(["initial","loading"].includes(this._currentState)){A("Player unable to play whilst loading.");return}if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!t){this._lottie.playDirection===-1&&this._lottie.currentFrame===0?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),this.setCurrentState("playing");return}if(typeof t=="number"){let n=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations[t];if(!n)throw w("animation not found.");typeof e=="function"?await this.render({id:n.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(n))}):await this.render({id:n.id})}if(typeof t=="string"){let n=(o=this._dotLottieLoader.manifest)==null?void 0:o.animations.find(r=>r.id===t);if(!n)throw w("animation not found.");typeof e=="function"?await this.render({id:n.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(n))}):await this.render({id:n.id})}}playSegments(t,e){if(!this._lottie||["loading"].includes(this._currentState)){A("playSegments() Can't use whilst loading.");return}this._lottie.playSegments(t,e),this.setCurrentState("playing")}resetSegments(t){if(!this._lottie||["loading"].includes(this._currentState)){A("resetSegments() Can't use whilst loading.");return}this._lottie.resetSegments(t)}togglePlay(){this.currentState==="playing"?this.pause():this.play()}_getAnimationByIdOrIndex(t){var e,i;if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),typeof t=="number"){let o=(e=this._dotLottieLoader.manifest)==null?void 0:e.animations[t];if(!o)throw w("animation not found.");return o}if(typeof t=="string"){let o=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations.find(n=>n.id===t);if(!o)throw w("animation not found.");return o}throw w("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(t){if(!this._inInteractiveMode){vt("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");return}if(this._dotLottieLoader.stateMachinesMap.size===0&&await this._dotLottieLoader.getStateMachines(),this._dotLottieLoader.stateMachinesMap.size===0)throw w("No interactivity states are available.");if(t==="undefined")throw w("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await An(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(t)}enterInteractiveMode(t){var e;if(t)this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&((e=this._stateMachineManager)==null||e.stop()),this._activeStateId=t,this._inInteractiveMode=!0,this._startInteractivity(t);else throw w("stateId must be a non-empty string.")}exitInteractiveMode(){var t;this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",(t=this._stateMachineManager)==null||t.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset())}reset(){var t;let e=this._getActiveAnimationId(),i=(t=this._dotLottieLoader.manifest)==null?void 0:t.animations.find(o=>o.id===e);if(this._inInteractiveMode&&this.exitInteractiveMode(),!i)throw w("animation not found.");this.play(e)}previous(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw w("manifest not found.");if(this._inInteractiveMode){A("previous() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(e===-1)throw w("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw w("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}next(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw w("manifest not found.");if(this._inInteractiveMode){A("next() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(e===-1)throw w("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw w("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}getManifest(){return this._dotLottieLoader.manifest}resize(){if(!this._lottie||["loading"].includes(this._currentState)){A("resize() Can't use whilst loading.");return}this._lottie.resize()}stop(){if(!this._lottie||["loading"].includes(this._currentState)){A("stop() Can't use whilst loading.");return}this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped")}pause(){if(!this._lottie||["loading"].includes(this._currentState)){A("pause() Can't use whilst loading.");return}this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused")}freeze(){if(!this._lottie||["loading"].includes(this._currentState)){A("freeze() Can't use whilst loading.");return}this.currentState!=="frozen"&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen")}unfreeze(){if(!this._lottie||["loading"].includes(this._currentState)){A("unfreeze() Can't use whilst loading.");return}this._stateBeforeFreeze==="playing"?this.play():this.pause()}destroy(){var t,e;(t=this._container)!=null&&t.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(i=>{i.unload()}),this._audios=[]),this.clearCountTimer(),typeof document<"u"&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,(e=this._lottie)==null||e.destroy(),this._lottie=void 0}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return`${kn.dependencies["lottie-web"]}`}addEventListener(t,e){var i,o,n;this._listeners.has(t)||this._listeners.set(t,new Set),(i=this._listeners.get(t))==null||i.add(e);try{t==="complete"?(o=this._container)==null||o.addEventListener(t,e):(n=this._lottie)==null||n.addEventListener(t,e)}catch(r){vt(`addEventListener ${r}`)}}getState(){var t,e,i,o,n,r,a;return{autoplay:(e=(t=this._lottie)==null?void 0:t.autoplay)!=null?e:!1,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:(o=(i=this._lottie)==null?void 0:i.playDirection)!=null?o:1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:(r=(n=this._lottie)==null?void 0:n.playSpeed)!=null?r:1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:(a=this._activeStateId)!=null?a:""}}_notify(){this.state.setState(this.getState())}get totalFrames(){var t;return((t=this._lottie)==null?void 0:t.totalFrames)||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(t){this._requireValidDirection(t),this._setPlayerState(()=>({direction:t})),this._userPlaybackOptions.direction=t}get speed(){var t;return((t=this._lottie)==null?void 0:t.playSpeed)||1}setSpeed(t){this._requireValidSpeed(t),this._setPlayerState(()=>({speed:t})),this._userPlaybackOptions.speed=t}get autoplay(){var t,e;return(e=(t=this._lottie)==null?void 0:t.autoplay)!=null?e:!1}setAutoplay(t){if(this._requireValidAutoplay(t),!this._lottie||["loading"].includes(this._currentState)){A("setAutoplay() Can't use whilst loading.");return}this._setPlayerState(()=>({autoplay:t})),this._userPlaybackOptions.autoplay=t}toggleAutoplay(){if(!this._lottie||["loading"].includes(this._currentState)){A("toggleAutoplay() Can't use whilst loading.");return}this.setAutoplay(!this._lottie.autoplay)}get defaultTheme(){return this._defaultTheme}setDefaultTheme(t){this._setPlayerState(()=>({defaultTheme:t})),this._userPlaybackOptions.defaultTheme=t,this._animation&&this.render()}get loop(){return this._loop}setLoop(t){this._requireValidLoop(t),this._setPlayerState(()=>({loop:t})),this._userPlaybackOptions.loop=t}toggleLoop(){if(!this._lottie||["loading"].includes(this._currentState)){A("toggleLoop() Can't use whilst loading.");return}this.setLoop(!this._loop)}get background(){return this._background}setBackground(t){this._requireValidBackground(t),this._background=t,this._container&&(this._container.style.backgroundColor=t)}get _frame(){return this._lottie?this.currentState==="completed"?this.direction===-1?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(t){var e;let i;!Array.isArray(t)||t.length===0?i=["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"]:i=t;let o=!1;if(i.includes("activeAnimationId")){let n=(e=this._dotLottieLoader.manifest)==null?void 0:e.activeAnimationId,r=this._getAnimationByIdOrIndex(n||0);this._activeAnimationId=n,await this._setCurrentAnimation(r.id),o=!0}i.forEach(n=>{switch(n){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"));break}}),o&&this.render()}removeEventListener(t,e){var i,o,n;try{t==="complete"?(i=this._container)==null||i.removeEventListener(t,e):(o=this._lottie)==null||o.removeEventListener(t,e),(n=this._listeners.get(t))==null||n.delete(e)}catch(r){vt("removeEventListener",r)}}_handleAnimationComplete(){var t;typeof this._loop=="number"&&this.stop();let e=this.direction===-1?0:this.totalFrames-1;this.goToAndStop(e,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),(t=this._container)==null||t.dispatchEvent(new Event("complete"))}addEventListeners(){var t;if(!this._lottie||["loading"].includes(this._currentState)){A("addEventListeners() Can't use whilst loading.");return}this._lottie.addEventListener("enterFrame",()=>{var e;if(!this._lottie){A("enterFrame event : Lottie is undefined.");return}Math.floor(this._lottie.currentFrame)===0&&this.direction===-1&&((e=this._container)==null||e.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify()}),this._lottie.addEventListener("loopComplete",()=>{var e;if(!this._lottie){A("loopComplete event : Lottie is undefined.");return}(e=this._container)==null||e.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let i=this._lottie.playDirection;if(typeof this._loop=="number"&&this._loop>0&&(this._counter+=this._mode==="bounce"?.5:1,this._counter>=this._loop)){this._handleAnimationComplete();return}this._mode==="bounce"&&typeof i=="number"&&(i=Number(i)*-1);let o=i===-1?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(o,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(o,!0))},this._intermission)):(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(i===-1?this.totalFrames-1:0,!0))}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&this._loop===!1&&this._mode==="bounce"){if(this._counter+=.5,this._counter>=1){this._handleAnimationComplete();return}this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let e=this._lottie.playDirection;this._mode==="bounce"&&typeof e=="number"&&(e=Number(e)*-1);let i=e===-1?this.totalFrames-1:0;this._setPlayerState(()=>({direction:e})),this.goToAndPlay(i,!0)},this._intermission)}else this._handleAnimationComplete()});for(let[e,i]of this._listeners)if(e==="complete")for(let o of i)(t=this._container)==null||t.addEventListener(e,o);else for(let o of i)this._lottie.addEventListener(e,o)}async _setCurrentAnimation(t){this._currentState="loading";let e=await this._dotLottieLoader.getAnimation(t);this._currentAnimationId=t,this._animation=e,this._currentState="ready"}async _getAudioFactory(){if(this._animation&&gn(this._animation)){let{DotLottieAudio:t}=await it(()=>import("./dotlottie-audio-75C54RUV-BDsRiW8G.js"),__vite__mapDeps([3,4]));return e=>{let i=new t({src:[e]});return this._audios.push(i),i}}return null}async render(t){var e,i,o,n,r,a,l,s,h,u,d,p,f,m,v,y,_,S;if(t!=null&&t.id)await this._setCurrentAnimation(t.id);else if(!this._animation)throw w("no animation selected");let g=(e=Z.loop)!=null?e:!1,T=(i=Z.autoplay)!=null?i:!1,U=(o=Z.playMode)!=null?o:"normal",B=(n=Z.intermission)!=null?n:0,I=(r=Z.hover)!=null?r:!1,$=(a=Z.direction)!=null?a:1,j=(l=Z.speed)!=null?l:1,K=(s=Z.defaultTheme)!=null?s:"";g=(h=t==null?void 0:t.loop)!=null?h:this._getOption("loop"),T=(u=t==null?void 0:t.autoplay)!=null?u:this._getOption("autoplay"),U=(d=t==null?void 0:t.playMode)!=null?d:this._getOption("playMode"),B=(p=t==null?void 0:t.intermission)!=null?p:this._getOption("intermission"),I=(f=t==null?void 0:t.hover)!=null?f:this._getOption("hover"),$=(m=t==null?void 0:t.direction)!=null?m:this._getOption("direction"),j=(v=t==null?void 0:t.speed)!=null?v:this._getOption("speed"),K=(y=t==null?void 0:t.defaultTheme)!=null?y:this._getOption("defaultTheme");let N={...this._animationConfig,autoplay:I?!1:T,loop:typeof g=="number"?!0:g,renderer:this._worker?"svg":(_=this._animationConfig.renderer)!=null?_:"svg"},[R,D,q]=await Promise.all([this._dotLottieLoader.getTheme(K),this._getLottiePlayerInstance(),this._getAudioFactory()]);if(R&&this._animation?(this._animation=ae(this._animation),this._animation.slots=R):this._animation=await this._dotLottieLoader.getAnimation((S=this._currentAnimationId)!=null?S:""),this._activeStateId&&!this._inInteractiveMode){this.enterInteractiveMode(this._activeStateId);return}this.destroy(),this._setPlayerState(()=>({defaultTheme:K,playMode:U,intermission:B,hover:I,loop:g})),q?this._lottie=D.loadAnimation({...N,container:this._container,animationData:this._animation,audioFactory:q}):this._lottie=D.loadAnimation({...N,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{var z;(z=this._lottie)==null||z.playSegments([0,this._lottie.totalFrames],!0)}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:$,speed:j})),T&&!I&&(g===!1&&$===-1?this.play():this.setCurrentState("playing")),this._updateTestData()}async _getLottiePlayerInstance(){var t;let e=(t=this._animationConfig.renderer)!=null?t:"svg",i;if(this._worker)return e!=="svg"&&A("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),i=await it(()=>import("./lottie_worker-Q23FJ6ZR-YP5OKMTN-C8IhdaM8.js"),__vite__mapDeps([5,4])),i.default;switch(e){case"svg":{this._light?i=await it(()=>import("./lottie_light-KMJEUZFY-TNG7ODX7-Csy_VcKN.js"),__vite__mapDeps([6,4])):i=await it(()=>import("./lottie_svg-MJGYILXD-NRTSROOT-UdoHkoPc.js"),__vite__mapDeps([7,4]));break}case"canvas":{this._light?i=await it(()=>import("./lottie_light_canvas-B5UTTNXA-PRI6IBWW-DPCcPYLn.js"),__vite__mapDeps([8,4])):i=await it(()=>import("./lottie_canvas-CDSUBMCL-MZNYH5VV-kg5mzqxw.js"),__vite__mapDeps([9,4]));break}case"html":{this._light?i=await it(()=>import("./lottie_light_html-SLCECTRT-SYWXEBDN-aXQwICLL.js"),__vite__mapDeps([10,4])):i=await it(()=>import("./lottie_html-X3TYKVQI-L6774NQS-C-JEneuM.js"),__vite__mapDeps([11,4]));break}default:throw new Error(`Invalid renderer: ${e}`)}return i.default}_getActiveAnimationId(){var t,e,i,o;let n=this._dotLottieLoader.manifest;return(o=(i=(t=this._activeAnimationId)!=null?t:n==null?void 0:n.activeAnimationId)!=null?i:(e=n==null?void 0:n.animations[0])==null?void 0:e.id)!=null?o:void 0}async load(t){if(this._currentState==="loading"){A("Loading in progress..");return}try{if(this.setCurrentState("loading"),typeof this._src=="string")if(bn(this._src)){let i=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(i)}else{let i=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(i.toString())}else if(typeof this._src=="object"&&Rt(this._src))this._dotLottieLoader.loadFromLottieJSON(this._src);else throw w("Invalid src provided");if(!this._dotLottieLoader.manifest)throw w("No manifest found");let e=this._getActiveAnimationId();if(!e)throw w("No active animation found");await this._setCurrentAnimation(e),await this.render(t)}catch(e){this.setCurrentState("error"),e instanceof Error&&vt(`Error loading animation: ${e.message}`)}}setErrorState(t){this.setCurrentState("error"),vt(t)}_requireValidDirection(t){if(t!==-1&&t!==1)throw w("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(t){if(t<0||!Number.isInteger(t))throw w("intermission must be a positive number")}_requireValidLoop(t){if(typeof t=="number"&&(!Number.isInteger(t)||t<0))throw w("loop must be a positive number or boolean")}_requireValidSpeed(t){if(typeof t!="number")throw w("speed must be a number")}_requireValidBackground(t){if(typeof t!="string")throw w("background must be a string")}_requireValidAutoplay(t){if(typeof t!="boolean")throw w("autoplay must be a boolean")}_requireValidPlaybackOptions(t){t.direction&&this._requireValidDirection(t.direction),t.intermission&&this._requireValidIntermission(t.intermission),t.loop&&this._requireValidLoop(t.loop),t.speed&&this._requireValidSpeed(t.speed)}},xn=Object.defineProperty,P=(t,e,i,o)=>{for(var n=void 0,r=t.length-1,a;r>=0;r--)(a=t[r])&&(n=a(e,i,n)||n);return n&&xn(e,i,n),n},In=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},Pn=(t,e,i)=>{e.constructor.createProperty(i,t)};function E(t){return(e,i)=>i!==void 0?Pn(t,e,i):In(t,e)}function On(t){return E({...t,state:!0})}var En=({finisher:t,descriptor:e})=>(i,o)=>{var n;if(o===void 0){let r=(n=i.originalKey)!==null&&n!==void 0?n:i.key,a=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return t!=null&&(a.finisher=function(l){t(l,r)}),a}{let r=i.constructor;e!==void 0&&Object.defineProperty(i,o,e(o)),t==null||t(r,o)}};function Mn(t,e){return En({descriptor:i=>({get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0})})}var le;((le=window.HTMLSlotElement)===null||le===void 0?void 0:le.prototype.assignedElements)!=null;var Tn={version:"2.7.12"},si="dotlottie-player",x=class extends At{constructor(){super(...arguments);c(this,"defaultTheme","");c(this,"container");c(this,"playMode",Ee.Normal);c(this,"autoplay",!1);c(this,"background","transparent");c(this,"controls",!1);c(this,"direction",1);c(this,"hover",!1);c(this,"loop");c(this,"renderer","svg");c(this,"speed",1);c(this,"src");c(this,"intermission",0);c(this,"activeAnimationId",null);c(this,"light",!1);c(this,"worker",!1);c(this,"activeStateId");c(this,"_seeker",0);c(this,"_dotLottieCommonPlayer");c(this,"_io");c(this,"_loop");c(this,"_renderer","svg");c(this,"_unsubscribeListeners");c(this,"_hasMultipleAnimations",!1);c(this,"_hasMultipleThemes",!1);c(this,"_hasMultipleStates",!1);c(this,"_popoverIsOpen",!1);c(this,"_animationsTabIsOpen",!1);c(this,"_statesTabIsOpen",!1);c(this,"_styleTabIsOpen",!1);c(this,"_themesForCurrentAnimation",[]);c(this,"_statesForCurrentAnimation",[])}_parseLoop(e){let i=parseInt(e,10);return Number.isInteger(i)&&i>0?(this._loop=i,i):typeof e=="string"&&["true","false"].includes(e)?(this._loop=e==="true",this._loop):(A("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(e){let i=e.currentTarget;try{let o=parseInt(i.value,10);if(!this._dotLottieCommonPlayer)return;let n=o/100*this._dotLottieCommonPlayer.totalFrames;this.seek(n)}catch{throw w("Error while seeking animation")}}_initListeners(){let e=this._dotLottieCommonPlayer;if(e===void 0){A("player not initialized - cannot add event listeners","dotlottie-player-component");return}this._unsubscribeListeners=e.state.subscribe((i,o)=>{this._seeker=i.seeker,this.requestUpdate(),o.currentState!==i.currentState&&this.dispatchEvent(new CustomEvent(i.currentState)),this.dispatchEvent(new CustomEvent(rt.Frame,{detail:{frame:i.frame,seeker:i.seeker}})),this.dispatchEvent(new CustomEvent(rt.VisibilityChange,{detail:{visibilityPercentage:i.visibilityPercentage}}))}),e.addEventListener("complete",()=>{this.dispatchEvent(new CustomEvent(rt.Complete))}),e.addEventListener("loopComplete",()=>{this.dispatchEvent(new CustomEvent(rt.LoopComplete))}),e.addEventListener("DOMLoaded",()=>{let i=this.getManifest();i&&i.themes&&(this._themesForCurrentAnimation=i.themes.filter(o=>o.animations.includes(this.getCurrentAnimationId()||""))),i&&i.states&&(this._hasMultipleStates=i.states.length>0,this._statesForCurrentAnimation=[],i.states.forEach(o=>{this._statesForCurrentAnimation.push(o)})),this.dispatchEvent(new CustomEvent(rt.Ready))}),e.addEventListener("data_ready",()=>{this.dispatchEvent(new CustomEvent(rt.DataReady))}),e.addEventListener("data_failed",()=>{this.dispatchEvent(new CustomEvent(rt.DataFail))}),window&&window.addEventListener("click",i=>this._clickOutListener(i))}async load(e,i,o){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new ri(e,this.container,{rendererSettings:i??{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?this.direction===1?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(o);let n=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,n&&(n.themes&&(this._themesForCurrentAnimation=n.themes.filter(r=>r.animations.includes(this.getCurrentAnimationId()||"")),this._hasMultipleThemes=n.themes.length>0),n.states&&(this._hasMultipleStates=n.states.length>0,this._statesForCurrentAnimation=[],n.states.forEach(r=>{this._statesForCurrentAnimation.push(r)}))),this._initListeners()}getCurrentAnimationId(){var e;return(e=this._dotLottieCommonPlayer)==null?void 0:e.currentAnimationId}animationCount(){var e;return this._dotLottieCommonPlayer&&((e=this._dotLottieCommonPlayer.getManifest())==null?void 0:e.animations.length)||0}animations(){if(!this._dotLottieCommonPlayer)return[];let e=this._dotLottieCommonPlayer.getManifest();return(e==null?void 0:e.animations.map(i=>i.id))||[]}currentAnimation(){return!this._dotLottieCommonPlayer||!this._dotLottieCommonPlayer.currentAnimationId?"":this._dotLottieCommonPlayer.currentAnimationId}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():ji}getManifest(){var e;return(e=this._dotLottieCommonPlayer)==null?void 0:e.getManifest()}getLottie(){var e;return(e=this._dotLottieCommonPlayer)==null?void 0:e.getAnimationInstance()}getVersions(){return{lottieWebVersion:ri.getLottieWebVersion(),dotLottiePlayerVersion:`${Tn.version}`}}previous(e){var i;(i=this._dotLottieCommonPlayer)==null||i.previous(e)}next(e){var i;(i=this._dotLottieCommonPlayer)==null||i.next(e)}reset(){var e;(e=this._dotLottieCommonPlayer)==null||e.reset()}play(e,i){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(e,i)}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause()}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop()}playOnShow(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(e)}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow()}playOnScroll(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(e)}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll()}seek(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(e)}snapshot(e=!0){if(!this.shadowRoot)return"";let i=this.shadowRoot.querySelector(".animation svg"),o=new XMLSerializer().serializeToString(i);if(e){let n=document.createElement("a");n.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o)}`,n.download=`download_${this._seeker}.svg`,document.body.appendChild(n),n.click(),document.body.removeChild(n)}return o}setTheme(e){var i;(i=this._dotLottieCommonPlayer)==null||i.setDefaultTheme(e)}themes(){var e;if(!this._dotLottieCommonPlayer)return[];let i=this._dotLottieCommonPlayer.getManifest();return((e=i==null?void 0:i.themes)==null?void 0:e.map(o=>o.id))||[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze()}setSpeed(e=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(e)}setDirection(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(e)}setLooping(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(e)}isLooping(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.loop:!1}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay()}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop()}setPlayMode(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(e)}enterInteractiveMode(e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(e)}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode()}revertToManifestValues(e){var i;(i=this._dotLottieCommonPlayer)==null||i.revertToManifestValues(e)}static get styles(){return ro}async firstUpdated(){var e;this.container=(e=this.shadowRoot)==null?void 0:e.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver(i=>{var o,n;i[0]!==void 0&&i[0].isIntersecting?((o=this._dotLottieCommonPlayer)==null?void 0:o.currentState)===_t.Frozen&&this.play():((n=this._dotLottieCommonPlayer)==null?void 0:n.currentState)===_t.Playing&&this._freeze()}),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),this.renderer==="svg"?this._renderer="svg":this.renderer==="canvas"?this._renderer="canvas":this.renderer==="html"&&(this._renderer="html"),this.src&&await this.load(this.src)}disconnectedCallback(){var e,i;this._io&&(this._io.disconnect(),this._io=void 0),(e=this._dotLottieCommonPlayer)==null||e.destroy(),(i=this._unsubscribeListeners)==null||i.call(this),window&&window.removeEventListener("click",o=>this._clickOutListener(o))}_clickOutListener(e){!e.composedPath().some(i=>i instanceof HTMLElement?i.classList.contains("popover")||i.id==="lottie-animation-options":!1)&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate())}renderControls(){var e,i,o,n,r;let a=((e=this._dotLottieCommonPlayer)==null?void 0:e.currentState)===_t.Playing,l=((i=this._dotLottieCommonPlayer)==null?void 0:i.currentState)===_t.Paused;return b`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?b`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:b``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay()}}
          class=${a||l?`active ${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`:`${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${a?b`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:b`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?b`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:b``}
        <input
          id="lottie-seeker-input"
          class="seeker ${((o=this._dotLottieCommonPlayer)==null?void 0:o.direction)===-1?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${s=>this._handleSeekChange(s)}
          @mousedown=${()=>{this._freeze()}}
          @mouseup=${()=>{var s;(s=this._dotLottieCommonPlayer)==null||s.unfreeze()}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${(n=this._dotLottieCommonPlayer)!=null&&n.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?b`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate()}}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:b``}
      </div>
      ${this._popoverIsOpen?b`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${!this._animationsTabIsOpen&&!this._styleTabIsOpen&&!this._statesTabIsOpen?b`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                      @keydown=${s=>{(s.code==="Space"||s.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate())}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `:b``}
              ${this._hasMultipleThemes&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?b` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                    @keydown=${s=>{(s.code==="Space"||s.code==="Enter")&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._hasMultipleStates&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?b` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                    @keydown=${s=>{(s.code==="Space"||s.code==="Enter")&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._animationsTabIsOpen?b`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map(s=>b`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${s}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(s),this.requestUpdate()}}
                                @keydown=${h=>{(h.code==="Space"||h.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(s),this.requestUpdate())}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===s?b`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:b`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${s}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> `:b``}
              ${this._styleTabIsOpen?b`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${((r=this._dotLottieCommonPlayer)==null?void 0:r.defaultTheme)===""?b``:b`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate()}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map(s=>b`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${s.id}"
                                @click=${()=>{this.setTheme(s.id)}}
                                @keydown=${h=>{(h.code==="Space"||h.code==="Enter")&&this.setTheme(s.id)}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===s.id?b`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:b`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${s.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:b``}
              ${this._statesTabIsOpen?b`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate()}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map(s=>b`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${s}"
                                @click=${()=>{this.enterInteractiveMode(s)}}
                                @keydown=${h=>{(h.code==="Space"||h.code==="Enter")&&this.enterInteractiveMode(s)}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===s?b`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:b`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${s}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:b``}
            </div>
          `:b``}
    `}render(){var e;let i=this.controls?"main controls":"main",o=this.controls?"animation controls":"animation";return b`
      <div id="animation-container" class=${i} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${o} style="background:${this.background};">
          ${((e=this._dotLottieCommonPlayer)==null?void 0:e.currentState)===_t.Error?b` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};P([E({type:String})],x.prototype,"defaultTheme"),P([Mn("#animation")],x.prototype,"container"),P([E()],x.prototype,"playMode"),P([E({type:Boolean})],x.prototype,"autoplay"),P([E({type:String})],x.prototype,"background"),P([E({type:Boolean})],x.prototype,"controls"),P([E({type:Number})],x.prototype,"direction"),P([E({type:Boolean})],x.prototype,"hover"),P([E({type:String})],x.prototype,"loop"),P([E({type:String})],x.prototype,"renderer"),P([E({type:Number})],x.prototype,"speed"),P([E({type:String})],x.prototype,"src"),P([E()],x.prototype,"intermission"),P([E({type:String})],x.prototype,"activeAnimationId"),P([E({type:Boolean})],x.prototype,"light"),P([E({type:Boolean})],x.prototype,"worker"),P([E({type:String})],x.prototype,"activeStateId"),P([On()],x.prototype,"_seeker");customElements.get(si)||customElements.define(si,x);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/const Rn=Object.freeze(Object.defineProperty({__proto__:null,DotLottiePlayer:x,PlayMode:Ee},Symbol.toStringTag,{value:"Module"}));export{Rn as d,vt as e,w as g,Z as q,Bn as r};
