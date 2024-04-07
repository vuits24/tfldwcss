let wasm_bindgen;
(()=>{window.Tjs_CSS_DF=["::before, ::after { box-sizing: border-box;  border-width: 0; border-style: solid; border-color: var(--un-default-border-color, #e5e7eb);}",'::before, ::after {  --un-content: ""; }','html, :host { line-height: 1.5; -webkit-text-size-adjust: 100%; -moz-tab-size: 4;tab-size: 4;font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent;}',"body { margin: 0;line-height: inherit;}","hr { height: 0; color: inherit; border-top-width: 1px;}","abbr:where([title]) { text-decoration: underline dotted; }","h1, h2, h3, h4, h5, h6 {font-size: inherit; font-weight: inherit; }","a {color: inherit; text-decoration: inherit; }","b, strong {font-weight: bolder; }",'code, kbd, samp, pre {font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings: normal;font-variation-settings: normal;font-size: 1em;}',"small {font-size: 80%; }","sub, sup {font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }","sub {bottom: -0.25em;}","sup {top: -0.5em;}","table { text-indent: 0; border-color: inherit; border-collapse: collapse;}","button, input, optgroup, select, textarea {font-family: inherit;font-feature-settings: inherit;font-variation-settings: inherit;font-size: 100%;font-weight: inherit;line-height: inherit;color: inherit;margin: 0;padding: 0;}","button, select { text-transform: none;}",'button, [type="button"], [type="reset"], [type="submit"] {-webkit-appearance: button;background-color: transparent;background-image: none;}',":-moz-focusring {outline: auto;}",":-moz-ui-invalid { box-shadow: none;}","progress {vertical-align: baseline;}","::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto;}",'[type="search"] { -webkit-appearance: textfield; outline-offset: -2px;}',"::-webkit-search-decoration {-webkit-appearance: none;}","::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}","summary {display: list-item;}","blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {margin: 0;}","fieldset {margin: 0;padding: 0;}","legend {padding: 0;}","ol, ul, menu {list-style: none;margin: 0;padding: 0;}","dialog {padding: 0;}","textarea {resize: vertical;}","input::placeholder, textarea::placeholder {opacity: 1;color: #9ca3af;}",'button, [role="button"] {cursor: pointer;}',":disabled {cursor: default;}","img, svg, video, canvas, audio, iframe, embed, object {display: block;vertical-align: middle;}","img, video {max-width: 100%;height: auto;}","[hidden] {display: none;}"];})();
(async o=>{const e=atob(o),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);const r=await new Response(n).body.pipeThrough(new DecompressionStream("gzip"));return await new Response(r).text()})("(()=>{var se=(()=>{function f(s){return new TextEncoder().encode(s)}function $(s){return window.btoa(String.fromCharCode.apply(null,new Uint8Array(s)))}function V(s){let y=atob(s),g=new Uint8Array(y.length);for(let S=0;S<y.length;S++)g[S]=y.charCodeAt(S);return g}async function P(s){let y=await new Response(s).body.pipeThrough(new CompressionStream("gzip")),g=await new Response(y).arrayBuffer(),S=new Uint8Array(g);return $(S)}async function T(s){let y=V(s),g=await new Response(y).body.pipeThrough(new DecompressionStream("gzip"));return await new Response(g).text()}async function R(s,y,g){let S=f(y),c=f(g),d=f(s),e=await window.crypto.subtle.importKey("raw",S,{name:"AES-GCM"},!1,["encrypt"]),t=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:c},e,d);return ab2base64(t)}async function C(s,y,g){let S=f(y),c=f(g),d=V(s),e=await window.crypto.subtle.importKey("raw",S,{name:"AES-GCM"},!1,["decrypt"]),t=await window.crypto.subtle.decrypt({name:"AES-GCM",iv:c},e,d);return new TextDecoder().decode(t)}async function N(s){let y=new TextEncoder("utf-8").encode(s),g=await crypto.subtle.digest("SHA-256",y);return Array.from(new Uint8Array(g)).map(S=>S.toString(16).padStart(2,"0")).join("")}async function k(){let s=await window.crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:{name:"SHA-256"}},!0,["encrypt","decrypt"]);return s.privateKeyString=$(await window.crypto.subtle.exportKey("pkcs8",s.privateKey)),s.publicKeyString=$(await window.crypto.subtle.exportKey("spki",s.publicKey)),s}async function p(s,y){typeof s=="string"&&(s=await window.crypto.subtle.importKey("spki",V(s),{name:"RSA-OAEP",hash:{name:"SHA-256"}},!0,["encrypt"]));let g=new TextEncoder().encode(y),S=await window.crypto.subtle.encrypt({name:"RSA-OAEP"},s,g);return $(S)}async function u(s,y){typeof y=="string"&&(y=V(y)),typeof s=="string"&&(s=await window.crypto.subtle.importKey("pkcs8",V(s),{name:"RSA-OAEP",hash:{name:"SHA-256"}},!0,["decrypt"]));let g=await window.crypto.subtle.decrypt({name:"RSA-OAEP"},s,y);return new TextDecoder().decode(g)}async function _(){let s=await window.crypto.subtle.generateKey({name:"RSA-PSS",modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:{name:"SHA-256"}},!0,["sign","verify"]);return s.privateKeyString=$(await window.crypto.subtle.exportKey("pkcs8",s.privateKey)),s.publicKeyString=$(await window.crypto.subtle.exportKey("spki",s.publicKey)),s}async function O(s,y){typeof s=="string"&&(s=await window.crypto.subtle.importKey("pkcs8",V(s),{name:"RSA-PSS",hash:{name:"SHA-256"}},!0,["sign"]));let g=new TextEncoder().encode(y),S=await window.crypto.subtle.sign({name:"RSA-PSS",saltLength:32},s,g);return $(S)}async function L(s,y,g){typeof y=="string"&&(y=V(y)),typeof s=="string"&&(s=await window.crypto.subtle.importKey("spki",V(s),{name:"RSA-PSS",hash:{name:"SHA-256"}},!0,["verify"]));let S=new TextEncoder().encode(g);return await window.crypto.subtle.verify({name:"RSA-PSS",saltLength:32},s,y,S)}return{compressString:P,decompressString:T,encryptAesGcm:R,decryptAesGcm:C,sha256:N,generateKeyPairEnDecrypt:k,encryptData:p,decryptData:u,generateKeyPairSignVerify:_,signData:O,verifySignature:L}})();var J=(()=>{let f=Object.getPrototypeOf,$,V,P,T,R={isConnected:1},C=1e3,N,k={},p=f(R),u=f(f),_,O=(o,m,A,l)=>(o??(setTimeout(A,l),new Set)).add(m),L=(o,m,A)=>{let l=P;P=m;try{return o(A)}catch(v){return console.error(v),A}finally{P=l}},s=o=>o.filter(m=>m._dom?.isConnected),y=o=>N=O(N,o,()=>{for(let m of N)m._bindings=s(m._bindings),m._listeners=s(m._listeners);N=_},C),g={get val(){return P?._getters?.add(this),this.rawVal},get oldVal(){return P?._getters?.add(this),this._oldVal},set val(o){P?._setters?.add(this),o!==this.rawVal&&(this.rawVal=o,this._bindings.length+this._listeners.length?(V?.add(this),$=O($,this,j)):this._oldVal=o)}},S=o=>Object.create(g,{rawVal:{value:o,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:o,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),c=(o,m)=>{let A={_getters:new Set,_setters:new Set},l={f:o},v=T;T=[];let b=L(o,A,m);b=(b??document).nodeType?b:new Text(b);for(let E of A._getters)A._setters.has(E)||(y(E),E._bindings.push(l));for(let E of T)E._dom=b;return T=v,l._dom=b},d=(o,m=S(),A)=>{let l={_getters:new Set,_setters:new Set},v={f:o,s:m};v._dom=A??T?.push(v)??R,m.val=L(o,l,m.rawVal);for(let b of l._getters)l._setters.has(b)||(y(b),b._listeners.push(v));return m},e=(o="append")=>(m,...A)=>{["append","prepend","before","after","replaceWith","remove","replaceChildren"].includes(o)||(o="append");let v=[];for(let b of A.flat(1/0)){let E=f(b??0),r=E===g?c(()=>b.val):E===u?c(b):b;r!=_&&v.push(r)}return m[o](...v),m},t=e(),n=(o,m,...A)=>{let[l,...v]=f(A[0]??0)===p?A:[{},...A],b=o?document.createElementNS(o,m):document.createElement(m);for(let[E,r]of Object.entries(l)){E.startsWith("on")&&(r=typeof r=="function"?r:()=>{});let a=z=>z?Object.getOwnPropertyDescriptor(z,E)??a(f(z)):_,w=m+","+E,I=k[w]??(k[w]=a(f(b))?.set??0),D=E.startsWith("on")?(z,K)=>{let W=E.slice(2);b.removeEventListener(W,K),b.addEventListener(W,z)}:I?I.bind(b):b.setAttribute.bind(b,E),F=f(r??0);E.startsWith("on")||F===u&&(r=d(r),F=g),F===g?c(()=>(D(r.val,r._oldVal),b)):D(r)}return t(b,...v)},i=o=>({get:(m,A)=>n.bind(_,o,A)}),h=new Proxy(o=>new Proxy(n,i(o)),i()),x=(o,m)=>m?m!==o&&o.replaceWith(m):o.remove(),j=()=>{let o=0,m=[...$].filter(l=>l.rawVal!==l._oldVal);do{V=new Set;for(let l of new Set(m.flatMap(v=>v._listeners=s(v._listeners))))d(l.f,l.s,l._dom),l._dom=_}while(++o<100&&(m=[...V]).length);let A=[...$].filter(l=>l.rawVal!==l._oldVal);$=_;for(let l of new Set(A.flatMap(v=>v._bindings=s(v._bindings))))x(l._dom,c(l.f,l._dom)),l._dom=_;for(let l of A)l._oldVal=l.rawVal};return{add:t,insertNodes:e,tags:h,state:S,derive:d,hydrate:(o,m)=>x(o,c(m,o))}})();var le=f=>{let{fromEntries:$,entries:V,keys:P}=Object,{get:T,set:R,deleteProperty:C,ownKeys:N}=Reflect,{state:k,derive:p,add:u}=f,_,O=1e3,L,s,y=Symbol(),g=Symbol(),S=Symbol(),c=Symbol(),d=Symbol(),e=Symbol(),t=r=>(r[S]=1,r),n=r=>{if(r?.[S]){let a=k();return p(()=>{let w=r();a.rawVal instanceof Object&&w instanceof Object?b(a.rawVal,w):a.val=i(w)}),a}else return k(i(r))},i=r=>!(r instanceof Object)||r[g]?r:new Proxy((r[y]=r,r[g]=$(V(r).map(([a,w])=>[a,n(w)])),r[c]=[],r[d]=k(1),r),{get:(a,w,I)=>a[g].hasOwnProperty(w)?a[g][w].val:(w==="length"&&a[d].val,T(a,w,I)),set(a,w,I,D){let F=a[g];if(F.hasOwnProperty(w))return F[w].val=i(I),1;let z=w in a,K=z&&w==="length"&&I!==a.length;if(R(a,w,I))return z?K&&++a[d].val:R(F,w,n(I))&&(++a[d].val,o(D,w,F[w])),1},deleteProperty:(a,w)=>(C(a[g],w)&&m(a,w),C(a,w)&&++a[d].val),ownKeys:a=>(a[d].val,N(a))}),h=r=>r[g],x=r=>r[g]?new Proxy(r[g],{get:(a,w)=>x(a[w].rawVal)}):r,j=r=>r[c]=r[c].filter(a=>a._containerDom.isConnected),G=(r,a,w,I,{_containerDom:D,f:F})=>{let z=Array.isArray(r);if(u(D,()=>D[e][a]=F(w,()=>delete r[a],z?Number(a):a)),z&&!I&&a!=r.length-1){let K=Number(a);D.insertBefore(D.lastChild,D[e][P(r).find(W=>Number(W)>K)])}},o=(r,a,w)=>j(r).forEach(G.bind(L,r,a,w,s)),m=(r,a)=>{for(let w of j(r)){let I=w._containerDom[e];I[a]?.remove(),delete I[a]}},A=r=>(_??(_=(setTimeout(()=>(_.forEach(j),_=L),O),new Set))).add(r),l=(r,a,w)=>{let I={_containerDom:r instanceof Function?r():r,f:w};I._containerDom[e]={},a[c].push(I),A(a);for(let[D,F]of V(a[g]))G(a,D,F,1,I);return I._containerDom},v=(r,a)=>{for(let[D,F]of V(a)){let z=r[D];z instanceof Object&&F instanceof Object?v(z,F):r[D]=F}for(let D in r)a.hasOwnProperty(D)||delete r[D];let w=P(a),I=Array.isArray(r);if(I||P(r).some((D,F)=>D!==w[F])){if(I)r.length=a.length;else{++r[d].val;let D=r[y],F={...D};for(let z of w)delete D[z];for(let z of w)D[z]=F[z]}for(let{_containerDom:D}of j(r)){let{firstChild:F,[e]:z}=D;for(let K of w)F===z[K]?F=F.nextSibling:D.insertBefore(z[K],F)}}return r},b=(r,a)=>{s=1;try{return v(r,a instanceof Function?Array.isArray(r)?a(r.filter(w=>1)):$(a(V(r))):a)}finally{s=L}},E=r=>Array.isArray(r)?r.filter(a=>1).map(E):r instanceof Object?$(V(r).map(([a,w])=>[a,E(w)])):r;return{calc:t,reactive:i,stateFields:h,raw:x,list:l,replace:b,compact:E}};var ie=(()=>{function f(C){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(C)?C:`"${C}"`}function $(C=""){let N=[];if(C.includes("{{")&&C.includes("}}")){let p=C.indexOf("{{"),u=C.indexOf("}}"),_=C.slice(0,p).trim(),O=C.slice(u+2).trim(),L=C.slice(p+2,u).trim();if(_.length>0&&N.push(JSON.stringify(_)),L.length>0&&N.push(L),O.length>0){let s=$(O).filter(y=>y);O.length>0&&N.push(...s)}}else N.push(JSON.stringify(C));let k=N.filter(p=>p);return k.length===0?[]:k}function V(C,N=!1){if(C.nodeType===3)return $(C.nodeValue.trim()).filter(n=>n&&n!='""').join(",");if(!C.tagName||C.tagName.toLowerCase()==="script"&&!N)return"";let k=C.tagName.toLowerCase(),p=[],u={};if(Array.from(C.attributes).forEach(e=>{let t=e.value.trim();t&&(u[e.name.trim()]=t)}),u.hasOwnProperty("x-script")){let e="x-script";p.push(u[e]),delete u[e]}let _=u.hasOwnProperty("x-include")?(()=>{let t=u["x-include"];t.startsWith("{{")&&t.endsWith("}}")?t=t.slice(2,-2).trim():t=JSON.stringify(t);let h=`
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
     `;return delete u["x-include"],h})():"",O=u.hasOwnProperty("x-list")?(()=>{let e=u["x-list"]||"";return delete u["x-list"],e})():"",L=Object.keys(u).map(e=>{let t=e;if(t.startsWith("on"))return`${f(t)}:${u[e]||""}`;if(u[e].startsWith("{{")&&u[e].endsWith("}}")){let n=u[e].slice(2,-2).trim();return`${f(t)}:${n}`}else return`${f(t)}:${JSON.stringify(u[e])}`}).join(","),s=[],y="";k==="script"?y=JSON.stringify(C.textContent):_||(s=Array.from(C.childNodes).map(e=>V(e,N)),y=s.filter(e=>e).join(","));let g=`$tags["${k}"]`,S="";var c=()=>{if(O){let e=O.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(e){let{k:t,d:n}=e.groups;S=`$list(${g},${n},(${t}) =>${y||""})`}}_&&(L?S=`${g}({${L}},${_})`:S=`${g}(${_})`)};Object.keys(u).length>0?(S=`${g}({${L}} ${y?","+y:""})`,c()):(S=y?`${g}(${y})`:`${g}()`,c());let d=S;return p.length>0&&(d=`()=>{${p.join(" ")} return ${S};}`),d}function P(C,N="append",k,p=!1){return $insertNodes(N)(C,T(k,p).map(u=>new Function("return "+u)()))}function T(C,N=!1){let u=new DOMParser().parseFromString(C,"text/html").body.childNodes;return R(u,N)}function R(C,N=!1){let k=[];for(let p of C)k.push(V(p,N));return k=k.filter(p=>p),k}return{addHtmToElement:P,htmlToTjs:T,domToTjs:R}})();var ae=f=>{function $(V,P,T={mode:"open"}){function R(k=[]){let p=[];for(let _ of k){var u=[..._.classList];if(u.length>0&&p.push(...u),_.children.length>0){let O=R(_.children);p.push(...O)}}return[...new Set(p)]}function C(k,p){new MutationObserver(u=>{for(let _ of u)if(_.type=="attributes"&&_.attributeName=="class"){let L=[..._.target.classList].map(s=>s.trim()).filter(s=>s);typeof p=="function"&&p([...new Set(L)])}else if(_.type=="childList"&&_.addedNodes.length>0){let O=[..._.addedNodes].filter(L=>L.nodeType!=3).map(L=>[...L.classList]).flat(1/0).map(L=>L.trim()).filter(L=>L);typeof p=="function"&&p([...new Set(O)])}}).observe(k,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})}class N extends HTMLElement{constructor(){super(),this.attrs=[],this._classList=new Set}setAttribute(p,u){super.setAttribute(p,u),this.attrs[p]&&(this.attrs[p].val=u)}connectedCallback(){let p,u=$tags.style,_=$tags.div;f.add(T?this.attachShadow(T):this,u,_({id:"root"},P({attr:(O,L)=>this.attrs[O]??=f.state(this.getAttribute(O)??L),mount:O=>p=O,$this:this,children:T?f.tags.slot():[...this.childNodes]}))),this._classList=new Set(R(this.shadowRoot.children)),u.textContent=this.rendCss(),C(this.shadowRoot.querySelector("#root"),O=>{this._classList.add(...O),u.textContent=this.rendCss()}),this.dismount=p?.()}disconnectedCallback(){this.dismount?.()}rendCss(){return window.$renCssFromArray?window.$renCssFromArray([...this._classList]).filter(u=>u.type=="default").map(u=>u.css).join(`
`):""}}window.customElements.define(V,N)}return{defineElement:$}};var oe=f=>{let $=0,{button:V,div:P,header:T,input:R,label:C,span:N,style:k}=f.tags,p=S=>Object.entries(S).map(([c,d])=>`${c}: ${d};`).join(""),u=S=>{},_=Object.getPrototypeOf(f.state(null)),O=S=>Object.getPrototypeOf(S??0)===_?S:f.state(S),L=({value:S,container:c=P,Loading:d,Error:e},t)=>{let n=f.state({status:"pending"});return S.then(i=>{n.val={status:"fulfilled",value:i}}).catch(i=>n.val={status:"rejected",value:i}),c(()=>n.val.status==="pending"?d?.()??"":n.val.status==="rejected"?e?.(n.val.value):t(n.val.value))},s=()=>++$,y=({title:S,closed:c=f.state(!1),x:d=100,y:e=100,width:t=300,height:n=200,closeCross:i="\xD7",customStacking:h=!1,zIndex:x=1,disableMove:j=!1,disableResize:G=!1,headerColor:o="lightgray",windowClass:m="",windowStyleOverrides:A={},headerClass:l="",headerStyleOverrides:v={},childrenContainerClass:b="",childrenContainerStyleOverrides:E={},crossClass:r="",crossStyleOverrides:a={},crossHoverClass:w="",crossHoverStyleOverrides:I={}},...D)=>{let F=O(d),z=O(e),K=O(t),W=O(n),Z=O(x);h||(Z.val=s());let q=f.state(!1),Y=f.state(null),B=f.state(0),U=f.state(0),te=f.state(0),re=f.state(0),H=w||Object.keys(I)?f.state(!1):null,ne=M=>{M.button===0&&(q.val=!0,B.val=M.clientX,U.val=M.clientY,document.body.style.userSelect="none")},Q=M=>X=>{Y.val=M,B.val=X.clientX,U.val=X.clientY,te.val=K.val,re.val=W.val,document.body.style.userSelect="none"},de=M=>{if(q.val)F.val+=M.clientX-B.val,z.val+=M.clientY-U.val,B.val=M.clientX,U.val=M.clientY;else if(Y.val){let X=M.clientX-B.val,fe=M.clientY-U.val;Y.val.includes("right")&&(K.val=te.val+X),Y.val.includes("bottom")&&(W.val=re.val+fe)}},ue=()=>{q.val=!1,Y.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ue);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let M=k({type:"text/css",id:"tjsui-window-style"},u({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(M)}return()=>c.val?null:P({class:["tjsui-window"].concat(m||[]).join(" "),style:()=>p({left:`${F.val}px`,top:`${z.val}px`,width:`${K.val}px`,height:`${W.val}px`,"z-index":Z.val,...A}),...h?{}:{onmousedown:()=>Z.val=s()}},S?T({class:["tjsui-window-header"].concat(l||[]).join(" "),style:p({"background-color":o,...j?{cursor:"auto"}:{},...v}),...j?{}:{onmousedown:ne}},S,i?N({class:()=>["tjsui-window-cross"].concat(r||[]).concat(w&&H.val?w:[]).join(" "),style:()=>p({...a,...Object.keys(I).length&&H.val?I:{}}),onclick:()=>c.val=!0,...H?{onmouseenter:()=>H.val=!0,onmouseleave:()=>H.val=!1}:{}},i):null):j?null:P({class:"tjsui-window-dragarea",onmousedown:ne}),G?[]:[P({class:"tjsui-window-resize-right",onmousedown:Q("right")}),P({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),P({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],P({class:["tjsui-window-children"].concat(b||[]).join(" "),style:p(E)},D))};class g{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:c="unset",bottom:d="unset",left:e="unset",right:t="unset",backgroundColor:n="#333D",fontColor:i="white",fadeOutSec:h=.3,boardClass:x="",boardStyleOverrides:j={},messageClass:G="",messageStyleOverrides:o={},closerClass:m="",closerStyleOverrides:A={}},l=document.body){e=="unset"&&(e=t==="unset"?"50%":"unset");let v=p({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:c,bottom:d,left:e,right:t,transform:"translateX(-50%)","z-index":1e4,...j});this._fadeOutSec=h,this._messageClass=G,this._messageStylesStr=p({display:"flex","background-color":n,color:i,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${h}s, transform ${h}s`,...o}),this._closerClass=m,this._closerStylesStr=p({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...A}),l.appendChild(this._dom=P({class:x,style:v}))}show({message:c,closer:d,durationSec:e,closed:t=f.state(!1)}){let n=f.state(!1);f.derive(()=>setTimeout(h=>n.val=h,this._fadeOutSec*1e3,t.val));let i=P({class:this._messageClass,style:this._messageStylesStr},P(c),d?P({class:this._closerClass,style:this._closerStylesStr,onclick:()=>t.val=!0},d):null);return f.derive(()=>t.val&&(i.style.opacity="0",i.style.transform="translateY(-20px)")),e&&setTimeout(()=>t.val=!0,e*1e3),f.add(this._dom,()=>n.val?null:i),i}remove(){this._dom.remove()}}return{Await:L,MessageBoard:g,topMostZIndex:s,FloatingWindow:y}};var ce=(f,$)=>{let V=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,P=!1,T={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},R={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},C=(c="")=>{let d=c.match(V);if(!d)return[];let{p:e,v:t}=d.groups,n=$[e];if(!n)return e=="cf"?t&&(t=[t[0].toLowerCase(),t.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[t])?typeof window.TFL_STYLE_CONFIG[t]=="string"?[window.TFL_STYLE_CONFIG[t]]:window.TFL_STYLE_CONFIG[t]:[]:[];let i=[],h="";if(t&&t.endsWith("!")&&(t=t.substr(0,t.length-1),h="!important"),e.length==c.length&&n.cssText)return typeof n.cssText=="string"?[n.cssText]:Array.isArray(n.cssText)?n.cssText:[];if(n.names&&typeof n.names=="string"&&(i=[n.names]),n.names&&Array.isArray(n.names)&&(i=n.names),e.length==c.length&&n.default&&i.length>0)return i.map(j=>`${j}:${n.default}${h}`);if(!t&&typeof n.fn=="function"){let x=n.fn();if(typeof x=="string")return[x];if(Array.isArray(x))return x}if(t){if(!n.default&&!n.cssText&&typeof n.fn=="function"){let l=[t[0].toLowerCase(),t.substr(1)].join(""),v=n.fn(l);if(v)return[v]}let x=/^\{(?<v>.+)\}$/,j=/^(?<v>--[a-z0-9-]+)$/,G=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,o=t.match(x);if(o){let{v:l}=o.groups;l=l.toLowerCase(),l=l.replace(/[_]+/g,E=>E.length%2==1?" ":E.substr(0,E.length/2));let v=i.map(E=>`${E}:${l}${h}`);return v.every(E=>CSS.supports(E))?v:[]}if(o=t.match(j),o){let{v:l}=o.groups;return i.map(b=>`${b}:var(${l})${h};`)}if(o=t.match(G),o){let{d1:l,d2:v}=o.groups;if(Number(v)>0){let b=i.map(E=>`${E}:calc(${l} * 100% / ${v})`);if(b.every(E=>CSS.supports(E)))return b}}let m=[t[0].toLowerCase(),t.substr(1)].join(""),A=n.exts&&Object.keys(n.exts).length>0?n.exts[m]:"";if(A)return i.map(v=>`${v}:${A}${h}`);{let l=i.map(v=>`${v}:${m}${h}`);if(l.every(v=>CSS.supports(v)))return l}if(typeof n.fn=="function"){let l=n.fn(m);if(l){let v=i.map(b=>`${b}:${l}${h}`);if(v.every(b=>CSS.supports(b)))return v}}}return[]},N=c=>{let d=C(c);return Array.isArray(d)&&d.length>0?d.join(";"):""},k=c=>{var d=/class="([^"]+)"/g,e=[];return[...c.matchAll(d)].forEach(t=>e=e.concat(t[1].split(" "))),[...new Set(e)]},p=c=>{function d(e=[]){let t=[];for(let i of e){var n=[...i.classList];if(n.length>0&&t.push(...n),i.children.length>0){let h=d(i.children);t.push(...h)}}return[...new Set(t)]}return c?d([...c.children]):[]},u=c=>{let e=(c||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(e){let{m:n,v:i=""}=e.groups,h="";var t=(o,m=!0)=>{if(typeof o=="string"){let A=i.indexOf(o);m&&(A+=1),h=i.substr(A),i=i.substr(0,i.length-h.length)}else{let A=(o||[]).map(l=>[l,i.indexOf(l)]);if(A=A.filter(l=>l[1]>-1),A.length>0){A.sort((v,b)=>v[1]>=b[1]?1:-1);let l=A[0][1];m&&(l+=1),h=i.substr(l),i=i.substr(0,i.length-h.length)}}};i.indexOf("}")>-1?t("}"):t([":","_",">","+","~","*"],!1);let x=N(i);if(!x)return null;let j=CSS.escape(c),G=h?h.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,o=>o=="_"?" ":["~","+","*",">"].includes(o)?` ${o} `:o):"";return{type:n||"default",ext:!!G,css:`.${j}${G} {${x}}`,selectorText:`.${j}${G}`}}return null},_=(c=[])=>c.map(e=>u(e)).filter(e=>e),O=(c,d,e="")=>{if(!e)return!1;if(R[c]&&R[c][d]&&e.length>0){let t=R[c][d];try{t.insertRule(e)}catch(n){console.error(n)}}return!0},L=(c,d,e=[])=>e.length==0?!1:R[c]&&R[c][d]?(R[c][d].replaceSync(e.join("")),!0):!1,s=(c=[])=>{let d=_(c);for(let e of Object.keys(T)){let t=d.filter(x=>x.type==e&&x.ext==!1),n=d.filter(x=>x.type==e&&x.ext==!0),i=t.map(x=>x.css),h=n.map(x=>x.css);if(i.length>0)for(let x of i)T[e][0].has(x)||(T[e][0].add(x),O(e,0,x));if(h.length>0)for(let x of h)T[e][1].has(x)||T[e][1].add(x),O(e,1,x)}},y=(c,d)=>{new MutationObserver(e=>{for(let t of e)if(t.type=="attributes"&&t.attributeName=="class"){let i=[...t.target.classList].map(h=>h.trim()).filter(h=>h);typeof d=="function"&&d([...new Set(i)])}else if(t.type=="childList"&&t.addedNodes.length>0){let n=[...t.addedNodes].filter(i=>i.nodeType!=3).map(i=>[...i.classList]).flat(1/0).map(i=>i.trim()).filter(i=>i);typeof d=="function"&&d([...new Set(n)])}}).observe(c,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},g=()=>{let c;return d=>{clearTimeout(c),c=setTimeout(()=>{Object.keys(T).forEach(e=>{let t="tfl-"+e+"-0",n="tfl-"+e+"-1";T[e][0].size>0&&localStorage.setItem(t,JSON.stringify([...T[e][0]])),T[e][1].size>0&&localStorage.setItem(n,JSON.stringify([...T[e][1]]))})},d||0)}};return{loadEventDom:(c,d=document)=>{let e=g();if(!P){P=!0;var t=Object.values(R).flat();let n=new CSSStyleSheet;f&&Array.isArray(f)&&n.replaceSync(f.join("")),d.adoptedStyleSheets=[...d.adoptedStyleSheets,n,...t],Object.keys(T).forEach(h=>{let x="tfl-"+h+"-0",j="tfl-"+h+"-1";if(localStorage.getItem(x))try{T[h][0]=new Set(JSON.parse(localStorage.getItem(x)))}catch{localStorage.removeItem(x)}if(localStorage.getItem(j))try{T[h][1]=new Set(JSON.parse(localStorage.getItem(j)))}catch{localStorage.removeItem(j)}}),Object.keys(T).forEach(h=>{let x=[...T[h][0]],j=[...T[h][1]];L(h,0,x),L(h,1,j)}),e();let i=p(c||document);s(i)}y(c||document.documentElement,n=>{s(n),e(1e3)})},renCssFromArray:_}};(()=>{Object.defineProperty(window,"tjs",{value:{...se,...J,...le(J),...ie,...ae(J),...oe(J),cssFun:ce},writable:!1,configurable:!1,enumerable:!1}),["compressString","decompressString","encryptAesGcm","decryptAesGcm","sha256","generateKeyPairEnDecrypt","encryptData","decryptData","generateKeyPairSignVerify","signData","verifySignature","add","insertNodes","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","htmlToTjs","domToTjs","defineElement","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach($=>{Object.defineProperty(window,"$"+$,{get:()=>{switch($){case"loadEventDom":case"renCssFromArray":return(window.__tjs_css||{})[$];default:return window.tjs[$]}},configurable:!1,enumerable:!1})}),addEventListener("__complete",()=>{[...document.querySelectorAll("[x-app]")].filter($=>$.parentNode.closest("[x-app]")==null).forEach($=>{$.removeAttribute("x-app"),window.$addHtmToElement($,"replaceChildren",$.innerHTML,!0)})});let f=setInterval(()=>{document.readyState==="complete"&&(clearInterval(f),dispatchEvent(new Event("__complete")))},1)})();})();
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
