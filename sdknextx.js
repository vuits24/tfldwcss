let wasm_bindgen;
(()=>{window.Tjs_CSS_DF=["::before, ::after { box-sizing: border-box;  border-width: 0; border-style: solid; border-color: var(--un-default-border-color, #e5e7eb);}",'::before, ::after {  --un-content: ""; }','html, :host { line-height: 1.5; -webkit-text-size-adjust: 100%; -moz-tab-size: 4;tab-size: 4;font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent;}',"body { margin: 0;line-height: inherit;}","hr { height: 0; color: inherit; border-top-width: 1px;}","abbr:where([title]) { text-decoration: underline dotted; }","h1, h2, h3, h4, h5, h6 {font-size: inherit; font-weight: inherit; }","a {color: inherit; text-decoration: inherit; }","b, strong {font-weight: bolder; }",'code, kbd, samp, pre {font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings: normal;font-variation-settings: normal;font-size: 1em;}',"small {font-size: 80%; }","sub, sup {font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }","sub {bottom: -0.25em;}","sup {top: -0.5em;}","table { text-indent: 0; border-color: inherit; border-collapse: collapse;}","button, input, optgroup, select, textarea {font-family: inherit;font-feature-settings: inherit;font-variation-settings: inherit;font-size: 100%;font-weight: inherit;line-height: inherit;color: inherit;margin: 0;padding: 0;}","button, select { text-transform: none;}",'button, [type="button"], [type="reset"], [type="submit"] {-webkit-appearance: button;background-color: transparent;background-image: none;}',":-moz-focusring {outline: auto;}",":-moz-ui-invalid { box-shadow: none;}","progress {vertical-align: baseline;}","::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto;}",'[type="search"] { -webkit-appearance: textfield; outline-offset: -2px;}',"::-webkit-search-decoration {-webkit-appearance: none;}","::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}","summary {display: list-item;}","blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {margin: 0;}","fieldset {margin: 0;padding: 0;}","legend {padding: 0;}","ol, ul, menu {list-style: none;margin: 0;padding: 0;}","dialog {padding: 0;}","textarea {resize: vertical;}","input::placeholder, textarea::placeholder {opacity: 1;color: #9ca3af;}",'button, [role="button"] {cursor: pointer;}',":disabled {cursor: default;}","img, svg, video, canvas, audio, iframe, embed, object {display: block;vertical-align: middle;}","img, video {max-width: 100%;height: auto;}","[hidden] {display: none;}"];})();
(()=>{var R=(()=>{let h=Object.getPrototypeOf,A,M,$,v,j={isConnected:1},g=1e3,_,b={},C=h(j),x=h(h),L,I=(a,c,S,n)=>(a??(setTimeout(S,n),new Set)).add(c),z=(a,c,S)=>{let n=$;$=c;try{return a(S)}catch(f){return console.error(f),S}finally{$=n}},V=a=>a.filter(c=>c._dom?.isConnected),D=a=>_=I(_,a,()=>{for(let c of _)c._bindings=V(c._bindings),c._listeners=V(c._listeners);_=L},g),N={get val(){return $?._getters?.add(this),this.rawVal},get oldVal(){return $?._getters?.add(this),this._oldVal},set val(a){$?._setters?.add(this),a!==this.rawVal&&(this.rawVal=a,this._bindings.length+this._listeners.length?(M?.add(this),A=I(A,this,F)):this._oldVal=a)}},E=a=>Object.create(N,{rawVal:{value:a,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:a,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),o=(a,c)=>{let S={_getters:new Set,_setters:new Set},n={f:a},f=v;v=[];let m=z(a,S,c);m=(m??document).nodeType?m:new Text(m);for(let w of S._getters)S._setters.has(w)||(D(w),w._bindings.push(n));for(let w of v)w._dom=m;return v=f,n._dom=m},d=(a,c=E(),S)=>{let n={_getters:new Set,_setters:new Set},f={f:a,s:c};f._dom=S??v?.push(f)??j,c.val=z(a,n,c.rawVal);for(let m of n._getters)n._setters.has(m)||(D(m),m._listeners.push(f));return c},e=(a="append")=>(c,...S)=>{["append","prepend","before","after","replaceWith","remove","replaceChildren"].includes(a)||(a="append");let f=[];for(let m of S.flat(1/0)){let w=h(m??0),t=w===N?o(()=>m.val):w===x?o(m):m;t!=L&&f.push(t)}return c[a](...f),c},r=e(),l=(a,c,...S)=>{let[n,...f]=h(S[0]??0)===C?S:[{},...S],m=a?document.createElementNS(a,c):document.createElement(c);for(let[w,t]of Object.entries(n)){w.startsWith("on")&&(t=typeof t=="function"?t:()=>{});let i=P=>P?Object.getOwnPropertyDescriptor(P,w)??i(h(P)):L,u=c+","+w,k=b[u]??(b[u]=i(h(m))?.set??0),O=w.startsWith("on")?(P,W)=>{let J=w.slice(2);m.removeEventListener(J,W),m.addEventListener(J,P)}:k?k.bind(m):m.setAttribute.bind(m,w),T=h(t??0);w.startsWith("on")||T===x&&(t=d(t),T=N),T===N?o(()=>(O(t.val,t._oldVal),m)):O(t)}return r(m,...f)},s=a=>({get:(c,S)=>l.bind(L,a,S)}),y=new Proxy(a=>new Proxy(l,s(a)),s()),p=(a,c)=>c?c!==a&&a.replaceWith(c):a.remove(),F=()=>{let a=0,c=[...A].filter(n=>n.rawVal!==n._oldVal);do{M=new Set;for(let n of new Set(c.flatMap(f=>f._listeners=V(f._listeners))))d(n.f,n.s,n._dom),n._dom=L}while(++a<100&&(c=[...M]).length);let S=[...A].filter(n=>n.rawVal!==n._oldVal);A=L;for(let n of new Set(S.flatMap(f=>f._bindings=V(f._bindings))))p(n._dom,o(n.f,n._dom)),n._dom=L;for(let n of S)n._oldVal=n.rawVal};return{add:r,insertNodes:e,tags:y,state:E,derive:d,hydrate:(a,c)=>p(a,o(c,a))}})();var se=h=>{let{fromEntries:A,entries:M,keys:$}=Object,{get:v,set:j,deleteProperty:g,ownKeys:_}=Reflect,{state:b,derive:C,add:x}=h,L,I=1e3,z,V,D=Symbol(),N=Symbol(),E=Symbol(),o=Symbol(),d=Symbol(),e=Symbol(),r=t=>(t[E]=1,t),l=t=>{if(t?.[E]){let i=b();return C(()=>{let u=t();i.rawVal instanceof Object&&u instanceof Object?m(i.rawVal,u):i.val=s(u)}),i}else return b(s(t))},s=t=>!(t instanceof Object)||t[N]?t:new Proxy((t[D]=t,t[N]=A(M(t).map(([i,u])=>[i,l(u)])),t[o]=[],t[d]=b(1),t),{get:(i,u,k)=>i[N].hasOwnProperty(u)?i[N][u].val:(u==="length"&&i[d].val,v(i,u,k)),set(i,u,k,O){let T=i[N];if(T.hasOwnProperty(u))return T[u].val=s(k),1;let P=u in i,W=P&&u==="length"&&k!==i.length;if(j(i,u,k))return P?W&&++i[d].val:j(T,u,l(k))&&(++i[d].val,a(O,u,T[u])),1},deleteProperty:(i,u)=>(g(i[N],u)&&c(i,u),g(i,u)&&++i[d].val),ownKeys:i=>(i[d].val,_(i))}),y=t=>t[N],p=t=>t[N]?new Proxy(t[N],{get:(i,u)=>p(i[u].rawVal)}):t,F=t=>t[o]=t[o].filter(i=>i._containerDom.isConnected),G=(t,i,u,k,{_containerDom:O,f:T})=>{let P=Array.isArray(t);if(x(O,()=>O[e][i]=T(u,()=>delete t[i],P?Number(i):i)),P&&!k&&i!=t.length-1){let W=Number(i);O.insertBefore(O.lastChild,O[e][$(t).find(J=>Number(J)>W)])}},a=(t,i,u)=>F(t).forEach(G.bind(z,t,i,u,V)),c=(t,i)=>{for(let u of F(t)){let k=u._containerDom[e];k[i]?.remove(),delete k[i]}},S=t=>(L??(L=(setTimeout(()=>(L.forEach(F),L=z),I),new Set))).add(t),n=(t,i,u)=>{let k={_containerDom:t instanceof Function?t():t,f:u};k._containerDom[e]={},i[o].push(k),S(i);for(let[O,T]of M(i[N]))G(i,O,T,1,k);return k._containerDom},f=(t,i)=>{for(let[O,T]of M(i)){let P=t[O];P instanceof Object&&T instanceof Object?f(P,T):t[O]=T}for(let O in t)i.hasOwnProperty(O)||delete t[O];let u=$(i),k=Array.isArray(t);if(k||$(t).some((O,T)=>O!==u[T])){if(k)t.length=i.length;else{++t[d].val;let O=t[D],T={...O};for(let P of u)delete O[P];for(let P of u)O[P]=T[P]}for(let{_containerDom:O}of F(t)){let{firstChild:T,[e]:P}=O;for(let W of u)T===P[W]?T=T.nextSibling:O.insertBefore(P[W],T)}}return t},m=(t,i)=>{V=1;try{return f(t,i instanceof Function?Array.isArray(t)?i(t.filter(u=>1)):A(i(M(t))):i)}finally{V=z}},w=t=>Array.isArray(t)?t.filter(i=>1).map(w):t instanceof Object?A(M(t).map(([i,u])=>[i,w(u)])):t;return{calc:r,reactive:s,stateFields:y,raw:p,list:n,replace:m,compact:w}};var ne=(()=>{function h(g){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(g)?g:`"${g}"`}function A(g=""){let _=[];if(g.includes("{{")&&g.includes("}}")){let C=g.indexOf("{{"),x=g.indexOf("}}"),L=g.slice(0,C).trim(),I=g.slice(x+2).trim(),z=g.slice(C+2,x).trim();if(L.length>0&&_.push(JSON.stringify(L)),z.length>0&&_.push(z),I.length>0){let V=A(I).filter(D=>D);I.length>0&&_.push(...V)}}else _.push(JSON.stringify(g));let b=_.filter(C=>C);return b.length===0?[]:b}function M(g,_=!1){if(g.nodeType===3)return A(g.nodeValue.trim()).filter(l=>l&&l!='""').join(",");if(!g.tagName||g.tagName.toLowerCase()==="script"&&!_)return"";let b=g.tagName.toLowerCase(),C=[],x={};if(Array.from(g.attributes).forEach(e=>{let r=e.value.trim();r&&(x[e.name.trim()]=r)}),x.hasOwnProperty("x-script")){let e="x-script";C.push(x[e]),delete x[e]}let L=x.hasOwnProperty("x-include")?(()=>{let r=x["x-include"],l=`$Await({value: fetch(${JSON.stringify(r)}).then(response => response.text()).then(data => $htmlToTjs(data, true))}, p => $tags["div"](p.map(m=>eval(m)())) )`;return delete x["x-include"],l})():"",I=x.hasOwnProperty("x-list")?(()=>{let e=x["x-list"]||"";return delete x["x-list"],e})():"",z=Object.keys(x).map(e=>{let r=e;if(r.startsWith("on"))return`${h(r)}:${x[e]||""}`;if(x[e].startsWith("{{")&&x[e].endsWith("}}")){let l=x[e].slice(2,-2).trim();return`${h(r)}:${l}`}else return`${h(r)}:${JSON.stringify(x[e])}`}).join(","),V=[],D="";b==="script"?D=JSON.stringify(g.textContent):L||(V=Array.from(g.childNodes).map(e=>M(e,_)),D=V.filter(e=>e).join(","));let N=`$tags["${b}"]`,E="";var o=()=>{if(I){let e=I.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(e){let{k:r,d:l}=e.groups;E=`$list(${N},${l},(${r}) =>${D||""})`}}L&&(z?E=`${N}({${z}},${L})`:E=`${N}(${L})`)};Object.keys(x).length>0?(E=`${N}({${z}} ${D?","+D:""})`,o()):(E=D?`${N}(${D})`:`${N}()`,o());let d=E;return C.length>0&&(d=`()=>{${C.join(" ")} return ${E};}`),d}function $(g,_="append",b,C=!1){return $insertNodes(_)(g,v(b,C).map(x=>new Function("return "+x)()))}function v(g,_=!1){let x=new DOMParser().parseFromString(g,"text/html").body;return j(x,_)}function j(g,_=!1){let b=[];for(let C of g.childNodes)b.push(M(C,_));return b=b.filter(C=>C),b}return{addHtmToElement:$,htmlToTjs:v,domToTjs:j}})();var ie=h=>{function A(M,$,v={mode:"open"}){class j extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(_,b){super.setAttribute(_,b),this.attrs[_]&&(this.attrs[_].val=b)}connectedCallback(){let _;h.add(v?this.attachShadow(v):this,$({attr:(b,C)=>this.attrs[b]??=h.state(this.getAttribute(b)??C),mount:b=>_=b,$this:this,children:v?h.tags.slot():[...this.childNodes]})),this.dismount=_?.()}disconnectedCallback(){this.dismount?.()}}window.customElements.define(M,j)}return{defineElement:A}};var ae=h=>{let A=0,{button:M,div:$,header:v,input:j,label:g,span:_,style:b}=h.tags,C=E=>Object.entries(E).map(([o,d])=>`${o}: ${d};`).join(""),x=E=>{},L=Object.getPrototypeOf(h.state(null)),I=E=>Object.getPrototypeOf(E??0)===L?E:h.state(E),z=({value:E,container:o=$,Loading:d,Error:e},r)=>{let l=h.state({status:"pending"});return E.then(s=>{l.val={status:"fulfilled",value:s}}).catch(s=>l.val={status:"rejected",value:s}),o(()=>l.val.status==="pending"?d?.()??"":l.val.status==="rejected"?e?.(l.val.value):r(l.val.value))},V=()=>++A,D=({title:E,closed:o=h.state(!1),x:d=100,y:e=100,width:r=300,height:l=200,closeCross:s="\xD7",customStacking:y=!1,zIndex:p=1,disableMove:F=!1,disableResize:G=!1,headerColor:a="lightgray",windowClass:c="",windowStyleOverrides:S={},headerClass:n="",headerStyleOverrides:f={},childrenContainerClass:m="",childrenContainerStyleOverrides:w={},crossClass:t="",crossStyleOverrides:i={},crossHoverClass:u="",crossHoverStyleOverrides:k={}},...O)=>{let T=I(d),P=I(e),W=I(r),J=I(l),q=I(p);y||(q.val=V());let U=h.state(!1),X=h.state(null),B=h.state(0),K=h.state(0),te=h.state(0),re=h.state(0),Z=u||Object.keys(k)?h.state(!1):null,le=Y=>{Y.button===0&&(U.val=!0,B.val=Y.clientX,K.val=Y.clientY,document.body.style.userSelect="none")},Q=Y=>H=>{X.val=Y,B.val=H.clientX,K.val=H.clientY,te.val=W.val,re.val=J.val,document.body.style.userSelect="none"},de=Y=>{if(U.val)T.val+=Y.clientX-B.val,P.val+=Y.clientY-K.val,B.val=Y.clientX,K.val=Y.clientY;else if(X.val){let H=Y.clientX-B.val,ue=Y.clientY-K.val;X.val.includes("right")&&(W.val=te.val+H),X.val.includes("bottom")&&(J.val=re.val+ue)}},ce=()=>{U.val=!1,X.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let Y=b({type:"text/css",id:"tjsui-window-style"},x({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(Y)}return()=>o.val?null:$({class:["tjsui-window"].concat(c||[]).join(" "),style:()=>C({left:`${T.val}px`,top:`${P.val}px`,width:`${W.val}px`,height:`${J.val}px`,"z-index":q.val,...S}),...y?{}:{onmousedown:()=>q.val=V()}},E?v({class:["tjsui-window-header"].concat(n||[]).join(" "),style:C({"background-color":a,...F?{cursor:"auto"}:{},...f}),...F?{}:{onmousedown:le}},E,s?_({class:()=>["tjsui-window-cross"].concat(t||[]).concat(u&&Z.val?u:[]).join(" "),style:()=>C({...i,...Object.keys(k).length&&Z.val?k:{}}),onclick:()=>o.val=!0,...Z?{onmouseenter:()=>Z.val=!0,onmouseleave:()=>Z.val=!1}:{}},s):null):F?null:$({class:"tjsui-window-dragarea",onmousedown:le}),G?[]:[$({class:"tjsui-window-resize-right",onmousedown:Q("right")}),$({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),$({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],$({class:["tjsui-window-children"].concat(m||[]).join(" "),style:C(w)},O))};class N{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:o="unset",bottom:d="unset",left:e="unset",right:r="unset",backgroundColor:l="#333D",fontColor:s="white",fadeOutSec:y=.3,boardClass:p="",boardStyleOverrides:F={},messageClass:G="",messageStyleOverrides:a={},closerClass:c="",closerStyleOverrides:S={}},n=document.body){e=="unset"&&(e=r==="unset"?"50%":"unset");let f=C({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:o,bottom:d,left:e,right:r,transform:"translateX(-50%)","z-index":1e4,...F});this._fadeOutSec=y,this._messageClass=G,this._messageStylesStr=C({display:"flex","background-color":l,color:s,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${y}s, transform ${y}s`,...a}),this._closerClass=c,this._closerStylesStr=C({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...S}),n.appendChild(this._dom=$({class:p,style:f}))}show({message:o,closer:d,durationSec:e,closed:r=h.state(!1)}){let l=h.state(!1);h.derive(()=>setTimeout(y=>l.val=y,this._fadeOutSec*1e3,r.val));let s=$({class:this._messageClass,style:this._messageStylesStr},$(o),d?$({class:this._closerClass,style:this._closerStylesStr,onclick:()=>r.val=!0},d):null);return h.derive(()=>r.val&&(s.style.opacity="0",s.style.transform="translateY(-20px)")),e&&setTimeout(()=>r.val=!0,e*1e3),h.add(this._dom,()=>l.val?null:s),s}remove(){this._dom.remove()}}return{Await:z,MessageBoard:N,topMostZIndex:V,FloatingWindow:D}};var oe=(h,A)=>{let M=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,$=!1,v={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},j={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},g=(o="")=>{let d=o.match(M);if(!d)return[];let{p:e,v:r}=d.groups,l=A[e];if(!l)return e=="cf"?r&&(r=[r[0].toLowerCase(),r.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[r])?typeof window.TFL_STYLE_CONFIG[r]=="string"?[window.TFL_STYLE_CONFIG[r]]:window.TFL_STYLE_CONFIG[r]:[]:[];let s=[],y="";if(r&&r.endsWith("!")&&(r=r.substr(0,r.length-1),y="!important"),e.length==o.length&&l.cssText)return typeof l.cssText=="string"?[l.cssText]:Array.isArray(l.cssText)?l.cssText:[];if(l.names&&typeof l.names=="string"&&(s=[l.names]),l.names&&Array.isArray(l.names)&&(s=l.names),e.length==o.length&&l.default&&s.length>0)return s.map(F=>`${F}:${l.default}${y}`);if(!r&&typeof l.fn=="function"){let p=l.fn();if(typeof p=="string")return[p];if(Array.isArray(p))return p}if(r){if(!l.default&&!l.cssText&&typeof l.fn=="function"){let n=[r[0].toLowerCase(),r.substr(1)].join(""),f=l.fn(n);if(f)return[f]}let p=/^\{(?<v>.+)\}$/,F=/^(?<v>--[a-z0-9-]+)$/,G=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,a=r.match(p);if(a){let{v:n}=a.groups;n=n.toLowerCase(),n=n.replace(/[_]+/g,w=>w.length%2==1?" ":w.substr(0,w.length/2));let f=s.map(w=>`${w}:${n}${y}`);return f.every(w=>CSS.supports(w))?f:[]}if(a=r.match(F),a){let{v:n}=a.groups;return s.map(m=>`${m}:var(${n})${y};`)}if(a=r.match(G),a){let{d1:n,d2:f}=a.groups;if(Number(f)>0){let m=s.map(w=>`${w}:calc(${n} * 100% / ${f})`);if(m.every(w=>CSS.supports(w)))return m}}let c=[r[0].toLowerCase(),r.substr(1)].join(""),S=l.exts&&Object.keys(l.exts).length>0?l.exts[c]:"";if(S)return s.map(f=>`${f}:${S}${y}`);{let n=s.map(f=>`${f}:${c}${y}`);if(n.every(f=>CSS.supports(f)))return n}if(typeof l.fn=="function"){let n=l.fn(c);if(n){let f=s.map(m=>`${m}:${n}${y}`);if(f.every(m=>CSS.supports(m)))return f}}}return[]},_=o=>{let d=g(o);return Array.isArray(d)&&d.length>0?d.join(";"):""},b=o=>{var d=/class="([^"]+)"/g,e=[];return[...o.matchAll(d)].forEach(r=>e=e.concat(r[1].split(" "))),[...new Set(e)]},C=o=>{if(!o)return[];let d=[].concat(...[...o.querySelectorAll("[class]")].map(r=>[...r.classList]));return[...new Set(d)]},x=o=>{let e=(o||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(e){let{m:l,v:s=""}=e.groups,y="";var r=(a,c=!0)=>{if(typeof a=="string"){let S=s.indexOf(a);c&&(S+=1),y=s.substr(S),s=s.substr(0,s.length-y.length)}else{let S=(a||[]).map(n=>[n,s.indexOf(n)]);if(S=S.filter(n=>n[1]>-1),S.length>0){S.sort((f,m)=>f[1]>=m[1]?1:-1);let n=S[0][1];c&&(n+=1),y=s.substr(n),s=s.substr(0,s.length-y.length)}}};s.indexOf("}")>-1?r("}"):r([":","_",">","+","~","*"],!1);let p=_(s);if(!p)return null;let F=CSS.escape(o),G=y?y.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,a=>a=="_"?" ":["~","+","*",">"].includes(a)?` ${a} `:a):"";return{type:l||"default",ext:!!G,css:`.${F}${G} {${p}}`,selectorText:`.${F}${G}`}}return null},L=(o=[])=>o.map(e=>x(e)).filter(e=>e),I=(o,d,e="")=>{if(!e)return!1;if(j[o]&&j[o][d]&&e.length>0){let r=j[o][d];try{r.insertRule(e)}catch(l){console.error(l)}}return!0},z=(o,d,e=[])=>e.length==0?!1:j[o]&&j[o][d]?(j[o][d].replaceSync(e.join("")),!0):!1,V=(o=[])=>{let d=L(o);for(let e of Object.keys(v)){let r=d.filter(p=>p.type==e&&p.ext==!1),l=d.filter(p=>p.type==e&&p.ext==!0),s=r.map(p=>p.css),y=l.map(p=>p.css);if(s.length>0)for(let p of s)v[e][0].has(p)||(v[e][0].add(p),I(e,0,p));if(y.length>0)for(let p of y)v[e][1].has(p)||v[e][1].add(p),I(e,1,p)}},D=(o,d)=>{new MutationObserver(e=>{for(let r of e)if(r.type=="attributes"&&r.attributeName=="class"){let s=[...r.target.classList].map(y=>y.trim()).filter(y=>y);typeof d=="function"&&d([...new Set(s)])}else if(r.type=="childList"&&r.addedNodes.length>0){let l=[...r.addedNodes].filter(s=>s.nodeType!=3).map(s=>[...s.classList]).flat(1/0).map(s=>s.trim()).filter(s=>s);typeof d=="function"&&d([...new Set(l)])}}).observe(o,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},N=()=>{let o;return d=>{clearTimeout(o),o=setTimeout(()=>{Object.keys(v).forEach(e=>{let r="tfl-"+e+"-0",l="tfl-"+e+"-1";v[e][0].size>0&&localStorage.setItem(r,JSON.stringify([...v[e][0]])),v[e][1].size>0&&localStorage.setItem(l,JSON.stringify([...v[e][1]]))})},d||0)}};return{loadEventDom:o=>{let d=N();if(!$){$=!0;var e=Object.values(j).flat();let r=new CSSStyleSheet;h&&Array.isArray(h)&&r.replaceSync(h.join("")),document.adoptedStyleSheets=[...document.adoptedStyleSheets,r,...e],Object.keys(v).forEach(s=>{let y="tfl-"+s+"-0",p="tfl-"+s+"-1";if(localStorage.getItem(y))try{v[s][0]=new Set(JSON.parse(localStorage.getItem(y)))}catch{localStorage.removeItem(y)}if(localStorage.getItem(p))try{v[s][1]=new Set(JSON.parse(localStorage.getItem(p)))}catch{localStorage.removeItem(p)}}),Object.keys(v).forEach(s=>{let y=[...v[s][0]],p=[...v[s][1]];z(s,0,y),z(s,1,p)}),d();let l=C(document);V(l)}D(o||document.documentElement,r=>{V(r),d(1e3)})},renCssFromArray:L}};(()=>{Object.defineProperty(window,"tjs",{value:{...R,...se(R),...ne,...ie(R),...ae(R),cssFun:oe},writable:!1,configurable:!1,enumerable:!1}),["add","insertNodes","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","htmlToTjs","domToTjs","defineElement","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach(A=>{Object.defineProperty(window,"$"+A,{value:window.tjs[A],writable:!1,configurable:!1,enumerable:!1})}),addEventListener("__complete",()=>{[...document.querySelectorAll("[x-app]")].filter(A=>A.parentNode.closest("[x-app]")==null).forEach(A=>{A.removeAttribute("x-app"),window.$addHtmToElement(A,"replaceChildren",A.innerHTML,!0)})});let h=setInterval(()=>{document.readyState==="complete"&&(clearInterval(h),dispatchEvent(new Event("__complete")))},1)})();})();

(function() {
    const __exports = {};
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }
    let wasm = undefined;

    const heap = new Array(128).fill(undefined);

    heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => {
    wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b)
});

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
                CLOSURE_DTORS.unregister(state);
            } else {
                state.a = a;
            }
        }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
}
function __wbg_adapter_18(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures__invoke1_mut__he2d0a601de0bef47(arg0, arg1, addHeapObject(arg2));
}

let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}
/**
*/
__exports.main = function() {
    wasm.main();
};

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
function __wbg_adapter_42(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures__invoke2_mut__h687a086d5bb6e7c6(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

const TFLLibFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_tfllib_free(ptr >>> 0));
/**
*/
class TFLLib {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(TFLLib.prototype);
        obj.__wbg_ptr = ptr;
        TFLLibFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TFLLibFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_tfllib_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.tfllib_new();
        return takeObject(ret);
    }
    /**
    * @param {string} name
    * @returns {any}
    */
    get(name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.tfllib_get(this.__wbg_ptr, ptr0, len0);
        return takeObject(ret);
    }
    /**
    * @param {string} fn_name
    * @param {any[]} params
    * @returns {any}
    */
    invoker(fn_name, params) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(fn_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passArrayJsValueToWasm0(params, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            wasm.tfllib_invoker(retptr, this.__wbg_ptr, ptr0, len0, ptr1, len1);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} fn_name
    * @returns {any}
    */
    invoker0(fn_name) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(fn_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.tfllib_invoker0(retptr, this.__wbg_ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
__exports.TFLLib = TFLLib;

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_eval_37f0cf6a7a08c18b = function(arg0, arg1) {
        const ret = window.eval(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_then_a73caa9a87991566 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = takeObject(arg0).original;
        if (obj.cnt-- == 1) {
            obj.a = 0;
            return true;
        }
        const ret = false;
        return ret;
    };
    imports.wbg.__wbg_tfllib_new = function(arg0) {
        const ret = TFLLib.__wrap(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_b3ca7c6051f9bec1 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_new_81740750da40724f = function(arg0, arg1) {
        try {
            var state0 = {a: arg0, b: arg1};
            var cb0 = (arg0, arg1) => {
                const a = state0.a;
                state0.a = 0;
                try {
                    return __wbg_adapter_42(a, state0.b, arg0, arg1);
                } finally {
                    state0.a = a;
                }
            };
            const ret = new Promise(cb0);
            return addHeapObject(ret);
        } finally {
            state0.a = state0.b = 0;
        }
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_Object_71ca3c0a59266746 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Object;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_get_e3c254076557e348 = function() { return handleError(function (arg0, arg1) {
        const ret = Reflect.get(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_new_16b304a2cfa7ff4a = function() {
        const ret = new Array();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_push_a5b05aedc7234f9f = function(arg0, arg1) {
        const ret = getObject(arg0).push(getObject(arg1));
        return ret;
    };
    imports.wbg.__wbg_from_89e3fc3ba5e6fb48 = function(arg0) {
        const ret = Array.from(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_function = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'function';
        return ret;
    };
    imports.wbg.__wbg_apply_0a5aa603881e6d79 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = Reflect.apply(getObject(arg0), getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_self_ce0dbfc45cf2f5be = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_window_c6fb939a7f436783 = function() { return handleError(function () {
        const ret = window.window;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_globalThis_d1e6af4856ba331b = function() { return handleError(function () {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_207b558942527489 = function() { return handleError(function () {
        const ret = global.global;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbg_newnoargs_e258087cd0daa0ea = function(arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_27c0f87801dedf93 = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_then_0c86a60e8fcfe9f6 = function(arg0, arg1) {
        const ret = getObject(arg0).then(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_queueMicrotask_481971b0d87f3dd4 = function(arg0) {
        queueMicrotask(getObject(arg0));
    };
    imports.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6 = function(arg0) {
        const ret = getObject(arg0).queueMicrotask;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_resolve_b0083a7967828ec8 = function(arg0) {
        const ret = Promise.resolve(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper42 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 21, __wbg_adapter_18);
        return addHeapObject(ret);
    };

    return imports;
}

function __wbg_init_memory(imports, maybe_memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedInt32Memory0 = null;
    cachedUint32Memory0 = null;
    cachedUint8Memory0 = null;

    wasm.__wbindgen_start();
    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined' && typeof script_src !== 'undefined') {
        input = script_src.replace(/\.js$/, '_bg.wasm');
    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}

wasm_bindgen = Object.assign(__wbg_init, { initSync }, __exports);
wasm_bindgen().then(async() => {
   window.tfl_css = await new wasm_bindgen.TFLLib();
  tfl_css.invoker0("loadEventDom");
    window.dispatchEvent(new Event("loaded_tfl_css"));
})

})();
