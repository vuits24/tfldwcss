let wasm_bindgen;
(()=>{window.Tjs_CSS_DF=["::before, ::after { box-sizing: border-box;  border-width: 0; border-style: solid; border-color: var(--un-default-border-color, #e5e7eb);}",'::before, ::after {  --un-content: ""; }','html, :host { line-height: 1.5; -webkit-text-size-adjust: 100%; -moz-tab-size: 4;tab-size: 4;font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent;}',"body { margin: 0;line-height: inherit;}","hr { height: 0; color: inherit; border-top-width: 1px;}","abbr:where([title]) { text-decoration: underline dotted; }","h1, h2, h3, h4, h5, h6 {font-size: inherit; font-weight: inherit; }","a {color: inherit; text-decoration: inherit; }","b, strong {font-weight: bolder; }",'code, kbd, samp, pre {font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings: normal;font-variation-settings: normal;font-size: 1em;}',"small {font-size: 80%; }","sub, sup {font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }","sub {bottom: -0.25em;}","sup {top: -0.5em;}","table { text-indent: 0; border-color: inherit; border-collapse: collapse;}","button, input, optgroup, select, textarea {font-family: inherit;font-feature-settings: inherit;font-variation-settings: inherit;font-size: 100%;font-weight: inherit;line-height: inherit;color: inherit;margin: 0;padding: 0;}","button, select { text-transform: none;}",'button, [type="button"], [type="reset"], [type="submit"] {-webkit-appearance: button;background-color: transparent;background-image: none;}',":-moz-focusring {outline: auto;}",":-moz-ui-invalid { box-shadow: none;}","progress {vertical-align: baseline;}","::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto;}",'[type="search"] { -webkit-appearance: textfield; outline-offset: -2px;}',"::-webkit-search-decoration {-webkit-appearance: none;}","::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}","summary {display: list-item;}","blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {margin: 0;}","fieldset {margin: 0;padding: 0;}","legend {padding: 0;}","ol, ul, menu {list-style: none;margin: 0;padding: 0;}","dialog {padding: 0;}","textarea {resize: vertical;}","input::placeholder, textarea::placeholder {opacity: 1;color: #9ca3af;}",'button, [role="button"] {cursor: pointer;}',":disabled {cursor: default;}","img, svg, video, canvas, audio, iframe, embed, object {display: block;vertical-align: middle;}","img, video {max-width: 100%;height: auto;}","[hidden] {display: none;}"];})();
(async o=>{const e=atob(o),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);const r=await new Response(n).body.pipeThrough(new DecompressionStream("gzip"));return await new Response(r).text()})("(()=>{var se=(()=>{function u(s){return new TextEncoder().encode(s)}function _(s){return window.btoa(String.fromCharCode.apply(null,new Uint8Array(s)))}function D(s){let f=atob(s),m=new Uint8Array(f.length);for(let h=0;h<f.length;h++)m[h]=f.charCodeAt(h);return m}async function P(s){let f=await new Response(s).body.pipeThrough(new CompressionStream("gzip")),m=await new Response(f).arrayBuffer(),h=new Uint8Array(m);return _(h)}async function A(s){let f=D(s),m=await new Response(f).body.pipeThrough(new DecompressionStream("gzip"));return await new Response(m).text()}async function j(s,f,m){let h=u(f),c=u(m),d=u(s),e=await window.crypto.subtle.importKey("raw",h,{name:"AES-GCM"},!1,["encrypt"]),t=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:c},e,d);return ab2base64(t)}async function b(s,f,m){let h=u(f),c=u(m),d=D(s),e=await window.crypto.subtle.importKey("raw",h,{name:"AES-GCM"},!1,["decrypt"]),t=await window.crypto.subtle.decrypt({name:"AES-GCM",iv:c},e,d);return new TextDecoder().decode(t)}async function T(s){let f=new TextEncoder("utf-8").encode(s),m=await crypto.subtle.digest("SHA-256",f);return Array.from(new Uint8Array(m)).map(h=>h.toString(16).padStart(2,"0")).join("")}async function C(){let s=await window.crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:{name:"SHA-256"}},!0,["encrypt","decrypt"]);return s.privateKeyString=_(await window.crypto.subtle.exportKey("pkcs8",s.privateKey)),s.publicKeyString=_(await window.crypto.subtle.exportKey("spki",s.publicKey)),s}async function E(s,f){typeof s=="string"&&(s=await window.crypto.subtle.importKey("spki",D(s),{name:"RSA-OAEP",hash:{name:"SHA-256"}},!0,["encrypt"]));let m=new TextEncoder().encode(f),h=await window.crypto.subtle.encrypt({name:"RSA-OAEP"},s,m);return _(h)}async function $(s,f){typeof f=="string"&&(f=D(f)),typeof s=="string"&&(s=await window.crypto.subtle.importKey("pkcs8",D(s),{name:"RSA-OAEP",hash:{name:"SHA-256"}},!0,["decrypt"]));let m=await window.crypto.subtle.decrypt({name:"RSA-OAEP"},s,f);return new TextDecoder().decode(m)}async function N(){let s=await window.crypto.subtle.generateKey({name:"RSA-PSS",modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:{name:"SHA-256"}},!0,["sign","verify"]);return s.privateKeyString=_(await window.crypto.subtle.exportKey("pkcs8",s.privateKey)),s.publicKeyString=_(await window.crypto.subtle.exportKey("spki",s.publicKey)),s}async function I(s,f){typeof s=="string"&&(s=await window.crypto.subtle.importKey("pkcs8",D(s),{name:"RSA-PSS",hash:{name:"SHA-256"}},!0,["sign"]));let m=new TextEncoder().encode(f),h=await window.crypto.subtle.sign({name:"RSA-PSS",saltLength:32},s,m);return _(h)}async function G(s,f,m){typeof f=="string"&&(f=D(f)),typeof s=="string"&&(s=await window.crypto.subtle.importKey("spki",D(s),{name:"RSA-PSS",hash:{name:"SHA-256"}},!0,["verify"]));let h=new TextEncoder().encode(m);return await window.crypto.subtle.verify({name:"RSA-PSS",saltLength:32},s,f,h)}return{compressString:P,decompressString:A,encryptAesGcm:j,decryptAesGcm:b,sha256:T,generateKeyPairEnDecrypt:C,encryptData:E,decryptData:$,generateKeyPairSignVerify:N,signData:I,verifySignature:G}})();var J=(()=>{let u=Object.getPrototypeOf,_,D,P,A,j={isConnected:1},b=1e3,T,C={},E=u(j),$=u(u),N,I=(o,p,x,i)=>(o??(setTimeout(x,i),new Set)).add(p),G=(o,p,x)=>{let i=P;P=p;try{return o(x)}catch(w){return console.error(w),x}finally{P=i}},s=o=>o.filter(p=>p._dom?.isConnected),f=o=>T=I(T,o,()=>{for(let p of T)p._bindings=s(p._bindings),p._listeners=s(p._listeners);T=N},b),m={get val(){return P?._getters?.add(this),this.rawVal},get oldVal(){return P?._getters?.add(this),this._oldVal},set val(o){P?._setters?.add(this),o!==this.rawVal&&(this.rawVal=o,this._bindings.length+this._listeners.length?(D?.add(this),_=I(_,this,z)):this._oldVal=o)}},h=o=>Object.create(m,{rawVal:{value:o,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:o,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),c=(o,p)=>{let x={_getters:new Set,_setters:new Set},i={f:o},w=A;A=[];let v=G(o,x,p);v=(v??document).nodeType?v:new Text(v);for(let O of x._getters)x._setters.has(O)||(f(O),O._bindings.push(i));for(let O of A)O._dom=v;return A=w,i._dom=v},d=(o,p=h(),x)=>{let i={_getters:new Set,_setters:new Set},w={f:o,s:p};w._dom=x??A?.push(w)??j,p.val=G(o,i,p.rawVal);for(let v of i._getters)i._setters.has(v)||(f(v),v._listeners.push(w));return p},e=(o="append")=>(p,...x)=>{["append","prepend","before","after","replaceWith","remove","replaceChildren"].includes(o)||(o="append");let w=[];for(let v of x.flat(1/0)){let O=u(v??0),r=O===m?c(()=>v.val):O===$?c(v):v;r!=N&&w.push(r)}return p[o](...w),p},t=e(),l=(o,p,...x)=>{let[i,...w]=u(x[0]??0)===E?x:[{},...x],v=o?document.createElementNS(o,p):document.createElement(p);for(let[O,r]of Object.entries(i)){O.startsWith("on")&&(r=typeof r=="function"?r:()=>{});let a=F=>F?Object.getOwnPropertyDescriptor(F,O)??a(u(F)):N,y=p+","+O,V=C[y]??(C[y]=a(u(v))?.set??0),k=O.startsWith("on")?(F,M)=>{let W=O.slice(2);v.removeEventListener(W,M),v.addEventListener(W,F)}:V?V.bind(v):v.setAttribute.bind(v,O),L=u(r??0);O.startsWith("on")||L===$&&(r=d(r),L=m),L===m?c(()=>(k(r.val,r._oldVal),v)):k(r)}return t(v,...w)},n=o=>({get:(p,x)=>l.bind(N,o,x)}),g=new Proxy(o=>new Proxy(l,n(o)),n()),S=(o,p)=>p?p!==o&&o.replaceWith(p):o.remove(),z=()=>{let o=0,p=[..._].filter(i=>i.rawVal!==i._oldVal);do{D=new Set;for(let i of new Set(p.flatMap(w=>w._listeners=s(w._listeners))))d(i.f,i.s,i._dom),i._dom=N}while(++o<100&&(p=[...D]).length);let x=[..._].filter(i=>i.rawVal!==i._oldVal);_=N;for(let i of new Set(x.flatMap(w=>w._bindings=s(w._bindings))))S(i._dom,c(i.f,i._dom)),i._dom=N;for(let i of x)i._oldVal=i.rawVal};return{add:t,insertNodes:e,tags:g,state:h,derive:d,hydrate:(o,p)=>S(o,c(p,o))}})();var le=u=>{let{fromEntries:_,entries:D,keys:P}=Object,{get:A,set:j,deleteProperty:b,ownKeys:T}=Reflect,{state:C,derive:E,add:$}=u,N,I=1e3,G,s,f=Symbol(),m=Symbol(),h=Symbol(),c=Symbol(),d=Symbol(),e=Symbol(),t=r=>(r[h]=1,r),l=r=>{if(r?.[h]){let a=C();return E(()=>{let y=r();a.rawVal instanceof Object&&y instanceof Object?v(a.rawVal,y):a.val=n(y)}),a}else return C(n(r))},n=r=>!(r instanceof Object)||r[m]?r:new Proxy((r[f]=r,r[m]=_(D(r).map(([a,y])=>[a,l(y)])),r[c]=[],r[d]=C(1),r),{get:(a,y,V)=>a[m].hasOwnProperty(y)?a[m][y].val:(y==="length"&&a[d].val,A(a,y,V)),set(a,y,V,k){let L=a[m];if(L.hasOwnProperty(y))return L[y].val=n(V),1;let F=y in a,M=F&&y==="length"&&V!==a.length;if(j(a,y,V))return F?M&&++a[d].val:j(L,y,l(V))&&(++a[d].val,o(k,y,L[y])),1},deleteProperty:(a,y)=>(b(a[m],y)&&p(a,y),b(a,y)&&++a[d].val),ownKeys:a=>(a[d].val,T(a))}),g=r=>r[m],S=r=>r[m]?new Proxy(r[m],{get:(a,y)=>S(a[y].rawVal)}):r,z=r=>r[c]=r[c].filter(a=>a._containerDom.isConnected),K=(r,a,y,V,{_containerDom:k,f:L})=>{let F=Array.isArray(r);if($(k,()=>k[e][a]=L(y,()=>delete r[a],F?Number(a):a)),F&&!V&&a!=r.length-1){let M=Number(a);k.insertBefore(k.lastChild,k[e][P(r).find(W=>Number(W)>M)])}},o=(r,a,y)=>z(r).forEach(K.bind(G,r,a,y,s)),p=(r,a)=>{for(let y of z(r)){let V=y._containerDom[e];V[a]?.remove(),delete V[a]}},x=r=>(N??(N=(setTimeout(()=>(N.forEach(z),N=G),I),new Set))).add(r),i=(r,a,y)=>{let V={_containerDom:r instanceof Function?r():r,f:y};V._containerDom[e]={},a[c].push(V),x(a);for(let[k,L]of D(a[m]))K(a,k,L,1,V);return V._containerDom},w=(r,a)=>{for(let[k,L]of D(a)){let F=r[k];F instanceof Object&&L instanceof Object?w(F,L):r[k]=L}for(let k in r)a.hasOwnProperty(k)||delete r[k];let y=P(a),V=Array.isArray(r);if(V||P(r).some((k,L)=>k!==y[L])){if(V)r.length=a.length;else{++r[d].val;let k=r[f],L={...k};for(let F of y)delete k[F];for(let F of y)k[F]=L[F]}for(let{_containerDom:k}of z(r)){let{firstChild:L,[e]:F}=k;for(let M of y)L===F[M]?L=L.nextSibling:k.insertBefore(F[M],L)}}return r},v=(r,a)=>{s=1;try{return w(r,a instanceof Function?Array.isArray(r)?a(r.filter(y=>1)):_(a(D(r))):a)}finally{s=G}},O=r=>Array.isArray(r)?r.filter(a=>1).map(O):r instanceof Object?_(D(r).map(([a,y])=>[a,O(y)])):r;return{calc:t,reactive:n,stateFields:g,raw:S,list:i,replace:v,compact:O}};var ie=(()=>{function u(b){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(b)?b:`"${b}"`}function _(b=""){let T=[];if(b.includes("{{")&&b.includes("}}")){let E=b.indexOf("{{"),$=b.indexOf("}}"),N=b.slice(0,E).trim(),I=b.slice($+2).trim(),G=b.slice(E+2,$).trim();if(N.length>0&&T.push(JSON.stringify(N)),G.length>0&&T.push(G),I.length>0){let s=_(I).filter(f=>f);I.length>0&&T.push(...s)}}else T.push(JSON.stringify(b));let C=T.filter(E=>E);return C.length===0?[]:C}function D(b,T=!1){if(b.nodeType===3)return _(b.nodeValue.trim()).filter(l=>l&&l!='""').join(",");if(!b.tagName||b.tagName.toLowerCase()==="script"&&!T)return"";let C=b.tagName.toLowerCase(),E=[],$={};if(Array.from(b.attributes).forEach(e=>{let t=e.value.trim();t&&($[e.name.trim()]=t)}),$.hasOwnProperty("x-script")){let e="x-script";E.push($[e]),delete $[e]}let N=$.hasOwnProperty("x-include")?(()=>{let t=$["x-include"];t.startsWith("{{")&&t.endsWith("}}")?t=t.slice(2,-2).trim():t=JSON.stringify(t);let g=`
      ()=> {
        let fnUrl =  ${t};
          let urlv = typeof fnUrl == 'function' ? fnUrl(): fnUrl;
          let x_url = new URL(urlv, location.href).toString();
          let st = fetch(x_url).then(response => response.text());
          return $Await({value:st.then(data => $htmlToTjs(data, true)), Loadding: ()=> null, Error: () => null }, p => {
            return $tags["div"](p.map(m => {
              let em = eval(m); return typeof em == 'function' ? em(): em;}));
          });
      }
     `;return delete $["x-include"],g})():"",I=$.hasOwnProperty("x-list")?(()=>{let e=$["x-list"]||"";return delete $["x-list"],e})():"",G=Object.keys($).map(e=>{let t=e;if(t.startsWith("on"))return`${u(t)}:${$[e]||""}`;if($[e].startsWith("{{")&&$[e].endsWith("}}")){let l=$[e].slice(2,-2).trim();return`${u(t)}:${l}`}else return`${u(t)}:${JSON.stringify($[e])}`}).join(","),s=[],f="";C==="script"?f=JSON.stringify(b.textContent):N||(s=Array.from(b.childNodes).map(e=>D(e,T)),f=s.filter(e=>e).join(","));let m=`$tags["${C}"]`,h="";var c=()=>{if(I){let e=I.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(e){let{k:t,d:l}=e.groups;h=`$list(${m},${l},(${t}) =>${f||""})`}}N&&(G?h=`${m}({${G}},${N})`:h=`${m}(${N})`)};Object.keys($).length>0?(h=`${m}({${G}} ${f?","+f:""})`,c()):(h=f?`${m}(${f})`:`${m}()`,c());let d=h;return E.length>0&&(d=`()=>{${E.join(" ")} return ${h};}`),d}function P(b,T="append",C,E=!1){return $insertNodes(T)(b,A(C,E).map($=>new Function("return "+$)()))}function A(b,T=!1){let $=new DOMParser().parseFromString(b,"text/html").body.childNodes;return j($,T)}function j(b,T=!1){let C=[];for(let E of b)C.push(D(E,T));return C=C.filter(E=>E),C}return{addHtmToElement:P,htmlToTjs:A,domToTjs:j}})();var ae=u=>{function _(D,P,A={mode:"open"}){class j extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(T,C){super.setAttribute(T,C),this.attrs[T]&&(this.attrs[T].val=C)}connectedCallback(){let T;u.add(A?this.attachShadow(A):this,P({attr:(C,E)=>this.attrs[C]??=u.state(this.getAttribute(C)??E),mount:C=>T=C,$this:this,children:A?u.tags.slot():[...this.childNodes]})),this.getAllClass=()=>[...new Set(...[...this.querySelectorAll("[class]")].map(C=>[...C.classList]))],this.dismount=T?.()}disconnectedCallback(){this.dismount?.()}}window.customElements.define(D,j)}return{defineElement:_}};var oe=u=>{let _=0,{button:D,div:P,header:A,input:j,label:b,span:T,style:C}=u.tags,E=h=>Object.entries(h).map(([c,d])=>`${c}: ${d};`).join(""),$=h=>{},N=Object.getPrototypeOf(u.state(null)),I=h=>Object.getPrototypeOf(h??0)===N?h:u.state(h),G=({value:h,container:c=P,Loading:d,Error:e},t)=>{let l=u.state({status:"pending"});return h.then(n=>{l.val={status:"fulfilled",value:n}}).catch(n=>l.val={status:"rejected",value:n}),c(()=>l.val.status==="pending"?d?.()??"":l.val.status==="rejected"?e?.(l.val.value):t(l.val.value))},s=()=>++_,f=({title:h,closed:c=u.state(!1),x:d=100,y:e=100,width:t=300,height:l=200,closeCross:n="\xD7",customStacking:g=!1,zIndex:S=1,disableMove:z=!1,disableResize:K=!1,headerColor:o="lightgray",windowClass:p="",windowStyleOverrides:x={},headerClass:i="",headerStyleOverrides:w={},childrenContainerClass:v="",childrenContainerStyleOverrides:O={},crossClass:r="",crossStyleOverrides:a={},crossHoverClass:y="",crossHoverStyleOverrides:V={}},...k)=>{let L=I(d),F=I(e),M=I(t),W=I(l),Z=I(S);g||(Z.val=s());let q=u.state(!1),Y=u.state(null),B=u.state(0),U=u.state(0),te=u.state(0),re=u.state(0),H=y||Object.keys(V)?u.state(!1):null,ne=R=>{R.button===0&&(q.val=!0,B.val=R.clientX,U.val=R.clientY,document.body.style.userSelect="none")},Q=R=>X=>{Y.val=R,B.val=X.clientX,U.val=X.clientY,te.val=M.val,re.val=W.val,document.body.style.userSelect="none"},de=R=>{if(q.val)L.val+=R.clientX-B.val,F.val+=R.clientY-U.val,B.val=R.clientX,U.val=R.clientY;else if(Y.val){let X=R.clientX-B.val,fe=R.clientY-U.val;Y.val.includes("right")&&(M.val=te.val+X),Y.val.includes("bottom")&&(W.val=re.val+fe)}},ue=()=>{q.val=!1,Y.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ue);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let R=C({type:"text/css",id:"tjsui-window-style"},$({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(R)}return()=>c.val?null:P({class:["tjsui-window"].concat(p||[]).join(" "),style:()=>E({left:`${L.val}px`,top:`${F.val}px`,width:`${M.val}px`,height:`${W.val}px`,"z-index":Z.val,...x}),...g?{}:{onmousedown:()=>Z.val=s()}},h?A({class:["tjsui-window-header"].concat(i||[]).join(" "),style:E({"background-color":o,...z?{cursor:"auto"}:{},...w}),...z?{}:{onmousedown:ne}},h,n?T({class:()=>["tjsui-window-cross"].concat(r||[]).concat(y&&H.val?y:[]).join(" "),style:()=>E({...a,...Object.keys(V).length&&H.val?V:{}}),onclick:()=>c.val=!0,...H?{onmouseenter:()=>H.val=!0,onmouseleave:()=>H.val=!1}:{}},n):null):z?null:P({class:"tjsui-window-dragarea",onmousedown:ne}),K?[]:[P({class:"tjsui-window-resize-right",onmousedown:Q("right")}),P({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),P({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],P({class:["tjsui-window-children"].concat(v||[]).join(" "),style:E(O)},k))};class m{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:c="unset",bottom:d="unset",left:e="unset",right:t="unset",backgroundColor:l="#333D",fontColor:n="white",fadeOutSec:g=.3,boardClass:S="",boardStyleOverrides:z={},messageClass:K="",messageStyleOverrides:o={},closerClass:p="",closerStyleOverrides:x={}},i=document.body){e=="unset"&&(e=t==="unset"?"50%":"unset");let w=E({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:c,bottom:d,left:e,right:t,transform:"translateX(-50%)","z-index":1e4,...z});this._fadeOutSec=g,this._messageClass=K,this._messageStylesStr=E({display:"flex","background-color":l,color:n,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${g}s, transform ${g}s`,...o}),this._closerClass=p,this._closerStylesStr=E({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...x}),i.appendChild(this._dom=P({class:S,style:w}))}show({message:c,closer:d,durationSec:e,closed:t=u.state(!1)}){let l=u.state(!1);u.derive(()=>setTimeout(g=>l.val=g,this._fadeOutSec*1e3,t.val));let n=P({class:this._messageClass,style:this._messageStylesStr},P(c),d?P({class:this._closerClass,style:this._closerStylesStr,onclick:()=>t.val=!0},d):null);return u.derive(()=>t.val&&(n.style.opacity="0",n.style.transform="translateY(-20px)")),e&&setTimeout(()=>t.val=!0,e*1e3),u.add(this._dom,()=>l.val?null:n),n}remove(){this._dom.remove()}}return{Await:G,MessageBoard:m,topMostZIndex:s,FloatingWindow:f}};var ce=(u,_)=>{let D=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,P=!1,A={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},j={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},b=(c="")=>{let d=c.match(D);if(!d)return[];let{p:e,v:t}=d.groups,l=_[e];if(!l)return e=="cf"?t&&(t=[t[0].toLowerCase(),t.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[t])?typeof window.TFL_STYLE_CONFIG[t]=="string"?[window.TFL_STYLE_CONFIG[t]]:window.TFL_STYLE_CONFIG[t]:[]:[];let n=[],g="";if(t&&t.endsWith("!")&&(t=t.substr(0,t.length-1),g="!important"),e.length==c.length&&l.cssText)return typeof l.cssText=="string"?[l.cssText]:Array.isArray(l.cssText)?l.cssText:[];if(l.names&&typeof l.names=="string"&&(n=[l.names]),l.names&&Array.isArray(l.names)&&(n=l.names),e.length==c.length&&l.default&&n.length>0)return n.map(z=>`${z}:${l.default}${g}`);if(!t&&typeof l.fn=="function"){let S=l.fn();if(typeof S=="string")return[S];if(Array.isArray(S))return S}if(t){if(!l.default&&!l.cssText&&typeof l.fn=="function"){let i=[t[0].toLowerCase(),t.substr(1)].join(""),w=l.fn(i);if(w)return[w]}let S=/^\{(?<v>.+)\}$/,z=/^(?<v>--[a-z0-9-]+)$/,K=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,o=t.match(S);if(o){let{v:i}=o.groups;i=i.toLowerCase(),i=i.replace(/[_]+/g,O=>O.length%2==1?" ":O.substr(0,O.length/2));let w=n.map(O=>`${O}:${i}${g}`);return w.every(O=>CSS.supports(O))?w:[]}if(o=t.match(z),o){let{v:i}=o.groups;return n.map(v=>`${v}:var(${i})${g};`)}if(o=t.match(K),o){let{d1:i,d2:w}=o.groups;if(Number(w)>0){let v=n.map(O=>`${O}:calc(${i} * 100% / ${w})`);if(v.every(O=>CSS.supports(O)))return v}}let p=[t[0].toLowerCase(),t.substr(1)].join(""),x=l.exts&&Object.keys(l.exts).length>0?l.exts[p]:"";if(x)return n.map(w=>`${w}:${x}${g}`);{let i=n.map(w=>`${w}:${p}${g}`);if(i.every(w=>CSS.supports(w)))return i}if(typeof l.fn=="function"){let i=l.fn(p);if(i){let w=n.map(v=>`${v}:${i}${g}`);if(w.every(v=>CSS.supports(v)))return w}}}return[]},T=c=>{let d=b(c);return Array.isArray(d)&&d.length>0?d.join(";"):""},C=c=>{var d=/class="([^"]+)"/g,e=[];return[...c.matchAll(d)].forEach(t=>e=e.concat(t[1].split(" "))),[...new Set(e)]},E=c=>{if(!c)return[];let d=[].concat(...[...c.querySelectorAll("[class]")].map(t=>[...t.classList]));return[...new Set(d)]},$=c=>{let e=(c||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(e){let{m:l,v:n=""}=e.groups,g="";var t=(o,p=!0)=>{if(typeof o=="string"){let x=n.indexOf(o);p&&(x+=1),g=n.substr(x),n=n.substr(0,n.length-g.length)}else{let x=(o||[]).map(i=>[i,n.indexOf(i)]);if(x=x.filter(i=>i[1]>-1),x.length>0){x.sort((w,v)=>w[1]>=v[1]?1:-1);let i=x[0][1];p&&(i+=1),g=n.substr(i),n=n.substr(0,n.length-g.length)}}};n.indexOf("}")>-1?t("}"):t([":","_",">","+","~","*"],!1);let S=T(n);if(!S)return null;let z=CSS.escape(c),K=g?g.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,o=>o=="_"?" ":["~","+","*",">"].includes(o)?` ${o} `:o):"";return{type:l||"default",ext:!!K,css:`.${z}${K} {${S}}`,selectorText:`.${z}${K}`}}return null},N=(c=[])=>c.map(e=>$(e)).filter(e=>e),I=(c,d,e="")=>{if(!e)return!1;if(j[c]&&j[c][d]&&e.length>0){let t=j[c][d];try{t.insertRule(e)}catch(l){console.error(l)}}return!0},G=(c,d,e=[])=>e.length==0?!1:j[c]&&j[c][d]?(j[c][d].replaceSync(e.join("")),!0):!1,s=(c=[])=>{let d=N(c);for(let e of Object.keys(A)){let t=d.filter(S=>S.type==e&&S.ext==!1),l=d.filter(S=>S.type==e&&S.ext==!0),n=t.map(S=>S.css),g=l.map(S=>S.css);if(n.length>0)for(let S of n)A[e][0].has(S)||(A[e][0].add(S),I(e,0,S));if(g.length>0)for(let S of g)A[e][1].has(S)||A[e][1].add(S),I(e,1,S)}},f=(c,d)=>{new MutationObserver(e=>{for(let t of e)if(t.type=="attributes"&&t.attributeName=="class"){let n=[...t.target.classList].map(g=>g.trim()).filter(g=>g);typeof d=="function"&&d([...new Set(n)])}else if(t.type=="childList"&&t.addedNodes.length>0){let l=[...t.addedNodes].filter(n=>n.nodeType!=3).map(n=>[...n.classList]).flat(1/0).map(n=>n.trim()).filter(n=>n);typeof d=="function"&&d([...new Set(l)])}}).observe(c,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},m=()=>{let c;return d=>{clearTimeout(c),c=setTimeout(()=>{Object.keys(A).forEach(e=>{let t="tfl-"+e+"-0",l="tfl-"+e+"-1";A[e][0].size>0&&localStorage.setItem(t,JSON.stringify([...A[e][0]])),A[e][1].size>0&&localStorage.setItem(l,JSON.stringify([...A[e][1]]))})},d||0)}};return{loadEventDom:c=>{let d=m();if(!P){P=!0;var e=Object.values(j).flat();let t=new CSSStyleSheet;u&&Array.isArray(u)&&t.replaceSync(u.join("")),document.adoptedStyleSheets=[...document.adoptedStyleSheets,t,...e],Object.keys(A).forEach(n=>{let g="tfl-"+n+"-0",S="tfl-"+n+"-1";if(localStorage.getItem(g))try{A[n][0]=new Set(JSON.parse(localStorage.getItem(g)))}catch{localStorage.removeItem(g)}if(localStorage.getItem(S))try{A[n][1]=new Set(JSON.parse(localStorage.getItem(S)))}catch{localStorage.removeItem(S)}}),Object.keys(A).forEach(n=>{let g=[...A[n][0]],S=[...A[n][1]];G(n,0,g),G(n,1,S)}),d();let l=E(document);s(l)}f(c||document.documentElement,t=>{s(t),d(1e3)})},renCssFromArray:N}};(()=>{Object.defineProperty(window,"tjs",{value:{...se,...J,...le(J),...ie,...ae(J),...oe(J),cssFun:ce},writable:!1,configurable:!1,enumerable:!1}),["compressString","decompressString","encryptAesGcm","decryptAesGcm","sha256","generateKeyPairEnDecrypt","encryptData","decryptData","generateKeyPairSignVerify","signData","verifySignature","add","insertNodes","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","htmlToTjs","domToTjs","defineElement","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach(_=>{Object.defineProperty(window,"$"+_,{get:()=>_=="renCssFromArray"?(window.__tjs_css||{})[_]:window.tjs[_],configurable:!1,enumerable:!1})}),addEventListener("__complete",()=>{[...document.querySelectorAll("[x-app]")].filter(_=>_.parentNode.closest("[x-app]")==null).forEach(_=>{_.removeAttribute("x-app"),window.$addHtmToElement(_,"replaceChildren",_.innerHTML,!0)})});let u=setInterval(()=>{document.readyState==="complete"&&(clearInterval(u),dispatchEvent(new Event("__complete")))},1)})();})();
").then(eval);
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
