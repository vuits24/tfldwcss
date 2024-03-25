let wasm_bindgen;
(()=>{var H=(c,j)=>()=>(c&&(j=c(c=0)),j);var be=(c,j)=>()=>(j||c((j={exports:{}}).exports,j),j.exports);var U,ie=H(()=>{U=(()=>{let c=Object.getPrototypeOf,j,z,v,A,w={isConnected:1},_=1e3,E,C={},S=c(w),T=c(c),F,O=(n,d,f,l)=>(n??(setTimeout(f,l),new Set)).add(d),I=(n,d,f)=>{let l=v;v=d;try{return n(f)}catch(h){return console.error(h),f}finally{v=l}},N=n=>n.filter(d=>d._dom?.isConnected),k=n=>E=O(E,n,()=>{for(let d of E)d._bindings=N(d._bindings),d._listeners=N(d._listeners);E=F},_),X={get val(){return v?._getters?.add(this),this.rawVal},get oldVal(){return v?._getters?.add(this),this._oldVal},set val(n){v?._setters?.add(this),n!==this.rawVal&&(this.rawVal=n,this._bindings.length+this._listeners.length?(z?.add(this),j=O(j,this,V)):this._oldVal=n)}},s=n=>Object.create(X,{rawVal:{value:n,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:n,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),e=(n,d)=>{let f={_getters:new Set,_setters:new Set},l={f:n},h=A;A=[];let x=I(n,f,d);x=(x??document).nodeType?x:new Text(x);for(let $ of f._getters)f._setters.has($)||(k($),$._bindings.push(l));for(let $ of A)$._dom=x;return A=h,l._dom=x},t=(n,d=s(),f)=>{let l={_getters:new Set,_setters:new Set},h={f:n,s:d};h._dom=f??A?.push(h)??w,d.val=I(n,l,d.rawVal);for(let x of l._getters)l._setters.has(x)||(k(x),x._listeners.push(h));return d},o=(n,...d)=>{for(let f of d.flat(1/0)){let l=c(f??0),h=l===X?e(()=>f.val):l===T?e(f):f;h!=F&&n.append(h)}return n},r=(n,d,...f)=>{let[l,...h]=c(f[0]??0)===S?f:[{},...f],x=n?document.createElementNS(n,d):document.createElement(d);for(let[$,R]of Object.entries(l)){let q=L=>L?Object.getOwnPropertyDescriptor(L,$)??q(c(L)):F,a=d+","+$,b=C[a]??(C[a]=q(c(x))?.set??0),g=$.startsWith("on")?(L,W)=>{let D=$.slice(2);x.removeEventListener(D,W),x.addEventListener(D,L)}:b?b.bind(x):x.setAttribute.bind(x,$),m=c(R??0);$.startsWith("on")||m===T&&(R=t(R),m=X),m===X?e(()=>(g(R.val,R._oldVal),x)):g(R)}return o(x,...h)},i=n=>({get:(d,f)=>r.bind(F,n,f)}),y=new Proxy(n=>new Proxy(r,i(n)),i()),u=(n,d)=>d?d!==n&&n.replaceWith(d):n.remove(),V=()=>{let n=0,d=[...j].filter(l=>l.rawVal!==l._oldVal);do{z=new Set;for(let l of new Set(d.flatMap(h=>h._listeners=N(h._listeners))))t(l.f,l.s,l._dom),l._dom=F}while(++n<100&&(d=[...z]).length);let f=[...j].filter(l=>l.rawVal!==l._oldVal);j=F;for(let l of new Set(f.flatMap(h=>h._bindings=N(h._bindings))))u(l._dom,e(l.f,l._dom)),l._dom=F;for(let l of f)l._oldVal=l.rawVal};return{add:o,tags:y,state:s,derive:t,hydrate:(n,d)=>u(n,e(d,n))}})()});var oe,ae=H(()=>{oe=c=>{let{fromEntries:j,entries:z,keys:v,getPrototypeOf:A}=Object,{get:w,set:_,deleteProperty:E,ownKeys:C}=Reflect,{state:S,derive:T,add:F,tags:O}=c,I=A(S()),N,k=1e3,X,s=Symbol(),e=Symbol(),t=Symbol(),o=Symbol(),r=Symbol(),i=Symbol(),y=a=>(a[t]=1,a),u=a=>a?.[t]?T(()=>V(a())):S(V(a)),V=a=>{if(!(a instanceof Object)||a[s])return a;let b=new Proxy((a[s]=j(z(a).map(([g,m])=>[g,u(m)])),a[e]=a,a[o]=[],a[r]=S(1),a),{get:(g,m)=>A(g[s][m]??0)===I?g[s][m].val:(m==="length"&&g[r].val,w(g,m,b)),set(g,m,L){let W=g[s];if(m in W)return W[m].val=V(L),1;let D=m in g,P=D&&m==="length"&&L!==g.length;if(_(g,m,L))return D?P&&++g[r].val:_(W,m,u(L))&&(++g[r].val,h(b,m,W[m])),1},deleteProperty:(g,m)=>(E(g[s],m)&&x(g,m),E(g,m)&&++g[r].val),ownKeys:g=>(g[r].val,C(g))});return b},Y=a=>a[s],n=a=>new Proxy(a[s],{get:(b,g)=>b[g].rawVal}),d=a=>a[o]=a[o].filter(b=>b._containerDom.isConnected),f=(a,b,g,m)=>()=>{let L=m(g,()=>delete a[b],b);return L[i]=b,L},l=(a,b,g,{_containerDom:m,f:L},W)=>{if(F(m,f(a,b,g,L)),!W&&Array.isArray(a)&&b!=a.length-1){let D={};for(let G of m.childNodes)D[G[i]]=G;let P=m.firstChild;for(let G of v(a))P===D[G]?P=P.nextSibling:m.insertBefore(D[G],P)}},h=(a,b,g)=>d(a).forEach(l.bind(X,a,b,g)),x=(a,b)=>{for(let g of d(a))[...g._containerDom.childNodes].find(m=>m[i]===b)?.remove()},$=a=>(N??(N=(setTimeout(()=>(N.forEach(d),N=X),k),new Set))).add(a);return{calc:y,reactive:V,stateFields:Y,raw:n,list:(a,b,g)=>{let m={_containerDom:a(),f:g};b[o].push(m),$(b);for(let[L,W]of z(b[s]))l(b,L,W,m,1);return m._containerDom},replace:(a,b)=>{let g=Array.isArray(a)?z(b(a.filter(P=>1))):b(z(a)),m=a[e],L=j(g),W=a[s],D=j(g.map(([P,G])=>{let B=W[P];return B?B.val=V(G):B=u(G),[P,B]}));for(let{_containerDom:P,f:G}of d(a)){let B={};for(let M of[...P.childNodes])M[i]in D?B[M[i]]=M:M.remove();let K=P.firstChild;for(let[M,Z]of z(D))K===B[M]?K=K.nextSibling:P.insertBefore(B[M]??O.p(f(a,M,Z,G)).firstChild,K)}for(let P in m)delete m[P];Array.isArray(m)&&(m.length=0);for(let P in L)m[P]=L[P];a[s]=D,++a[r].val}}}});var de,ce=H(()=>{de=(()=>{function c(w){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(w)?w:`"${w}"`}function j(w=""){let _=[];if(w.includes("{{")&&w.includes("}}")){let C=w.indexOf("{{"),S=w.indexOf("}}"),T=w.slice(0,C).trim(),F=w.slice(S+2).trim(),O=w.slice(C+2,S).trim();if(T.length>0&&_.push(JSON.stringify(T)),O.length>0&&_.push(O),F.length>0){let I=j(F).filter(N=>N);F.length>0&&_.push(...I)}}else _.push(JSON.stringify(w));let E=_.filter(C=>C);return E.length===0?[]:E}function z(w,_=new Set){if(w.nodeType===3){let t=j(w.nodeValue.trim()).filter(o=>o&&o!='""').join(",");return{tags:_,body:t}}if(!w.tagName)return{tags:_,body:""};let E=w.tagName.toLowerCase();_.add(E);let C=[],S={};Array.from(w.attributes).forEach(e=>{S[e.name.trim()]=e.value.trim()}),S.hasOwnProperty("x-tags")&&(S["x-tags"].split(/[\s|,]+/).map(t=>t.trim()).filter(t=>t).forEach(t=>{_.add(t.toLowerCase())}),delete S["x-tags"]),Object.keys(S).forEach(e=>{if(e.startsWith("x-state:")||e.startsWith("x-reactive:")||e.startsWith("x-stateFields:")||e.startsWith("x-derive")||e.startsWith("x-script")){if(e.startsWith("x-state:")){let t=e.split(":")[1];C.push(`const ${t.trim()}=tjs.state(${S[e].trim()});`)}else if(e.startsWith("x-derive"))if(e.includes(":")){let t=e.split(":")[1];C.push(`const ${t.trim()}=tjs.derive(${S[e].trim()});`)}else C.push(`tjs.derive(${S[e].trim()});`);else if(e.startsWith("x-reactive:")){let t=e.split(":")[1];C.push(`const ${t.trim()}=tjs.reactive(${S[e].trim()});`)}else if(e.startsWith("x-stateFields:")){let t=e.split(":")[1];C.push(`const ${t.trim()}=tjs.stateFields(${S[e].trim()});`)}else C.push(S[e]);delete S[e]}});let T="";S["x-list"]&&(T=S["x-list"]||"",delete S["x-list"]);let F=Object.keys(S).map(e=>{if(e.startsWith("x-")){let t=e.substr(2);return`${c(t)}:${S[e]||""}`}else return`${c(e)}:${JSON.stringify(S[e])}`}).join(","),O=[],I="";E==="script"?I=JSON.stringify(w.textContent):(O=Array.from(w.childNodes).map(e=>z(e,_)),I=O.filter(e=>e.body).map(e=>e.body).join(","));let N=E.replace(/-/g,"_"),k="";var X=()=>{if(T){let e=T.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(e){let{k:t,d:o}=e.groups;k=`tjs.list(${N},${o},(${t}) =>${I||""})`}}};Object.keys(S).length>0?(k=`${N}({${F}} ${I?","+I:""})`,X()):(k=I?`${N}(${I})`:`${N}()`,X());let s=k;return C.length>0&&(s=`()=>{ ${C.join(`
`)} return ${k};}`),{tags:_,body:s}}function v(w,_){let S=new DOMParser().parseFromString(_,"text/html").body;return A(w,S)}function A(w,_){let E=[];for(let T of _.childNodes)E.push(z(T));let C=E.filter(T=>T.tags.size>0),S="";if(C.length>0){let T=new Set;C.forEach(O=>{O.tags.forEach(I=>T.add(I))}),S=`const {${[...T].map(O=>/-/.test(O)?`"${O}":${O.replace(/-/g,"_")}`:O).join(", ")}}=tjs.tags;`}return[`${w}.replaceChildren();`,S,...C.map(T=>`tjs.add(${w}, ${T.body});`)]}return{htmlTotjsJS:v,domToTjs:A}})()});var ue,fe=H(()=>{ue=c=>{function j(z,v,A={mode:"open"}){window.customElements.define(z,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(w,_){super.setAttribute(w,_),this.attrs[w]&&(this.attrs[w].val=_)}connectedCallback(){let w;c.add(A?this.attachShadow(A):this,v({attr:(_,E)=>this.attrs[_]??=c.state(this.getAttribute(_)??E),mount:_=>w=_,$this:this,children:A?c.tags.slot():[...this.childNodes]})),this.dismount=w?.()}disconnectedCallback(){this.dismount?.()}})}return{define:j}}});var he,pe=H(()=>{he=c=>{let j=0,{button:z,div:v,header:A,input:w,label:_,span:E,style:C}=c.tags,S=s=>Object.entries(s).map(([e,t])=>`${e}: ${t};`).join(""),T=s=>{},F=Object.getPrototypeOf(c.state(null)),O=s=>Object.getPrototypeOf(s??0)===F?s:c.state(s),I=({value:s,container:e=v,Loading:t,Error:o},r)=>{let i=c.state({status:"pending"});return s.then(y=>i.val={status:"fulfilled",value:y}).catch(y=>i.val={status:"rejected",value:y}),e(()=>i.val.status==="pending"?t?.()??"":i.val.status==="rejected"?o?.(i.val.value):r(i.val.value))},N=()=>++j,k=({title:s,closed:e=c.state(!1),x:t=100,y:o=100,width:r=300,height:i=200,closeCross:y="\xD7",customStacking:u=!1,zIndex:V=1,disableMove:Y=!1,disableResize:n=!1,headerColor:d="lightgray",windowClass:f="",windowStyleOverrides:l={},headerClass:h="",headerStyleOverrides:x={},childrenContainerClass:$="",childrenContainerStyleOverrides:R={},crossClass:q="",crossStyleOverrides:a={},crossHoverClass:b="",crossHoverStyleOverrides:g={}},...m)=>{let L=O(t),W=O(o),D=O(r),P=O(i),G=O(V);u||(G.val=N());let B=c.state(!1),K=c.state(null),M=c.state(0),Z=c.state(0),le=c.state(0),se=c.state(0),Q=b||Object.keys(g)?c.state(!1):null,ne=J=>{J.button===0&&(B.val=!0,M.val=J.clientX,Z.val=J.clientY,document.body.style.userSelect="none")},te=J=>ee=>{K.val=J,M.val=ee.clientX,Z.val=ee.clientY,le.val=D.val,se.val=P.val,document.body.style.userSelect="none"},ye=J=>{if(B.val)L.val+=J.clientX-M.val,W.val+=J.clientY-Z.val,M.val=J.clientX,Z.val=J.clientY;else if(K.val){let ee=J.clientX-M.val,xe=J.clientY-Z.val;K.val.includes("right")&&(D.val=le.val+ee),K.val.includes("bottom")&&(P.val=se.val+xe)}},we=()=>{B.val=!1,K.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",ye),document.addEventListener("mouseup",we);let re="transparent";if(!document.getElementById("tjsui-window-style")){let J=C({type:"text/css",id:"tjsui-window-style"},T({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":re},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":re},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":re},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(J)}return()=>e.val?null:v({class:["tjsui-window"].concat(f||[]).join(" "),style:()=>S({left:`${L.val}px`,top:`${W.val}px`,width:`${D.val}px`,height:`${P.val}px`,"z-index":G.val,...l}),...u?{}:{onmousedown:()=>G.val=N()}},s?A({class:["tjsui-window-header"].concat(h||[]).join(" "),style:S({"background-color":d,...Y?{cursor:"auto"}:{},...x}),...Y?{}:{onmousedown:ne}},s,y?E({class:()=>["tjsui-window-cross"].concat(q||[]).concat(b&&Q.val?b:[]).join(" "),style:()=>S({...a,...Object.keys(g).length&&Q.val?g:{}}),onclick:()=>e.val=!0,...Q?{onmouseenter:()=>Q.val=!0,onmouseleave:()=>Q.val=!1}:{}},y):null):Y?null:v({class:"tjsui-window-dragarea",onmousedown:ne}),n?[]:[v({class:"tjsui-window-resize-right",onmousedown:te("right")}),v({class:"tjsui-window-resize-bottom",onmousedown:te("bottom")}),v({class:"tjsui-window-resize-rightbottom",onmousedown:te("rightbottom")})],v({class:["tjsui-window-children"].concat($||[]).join(" "),style:S(R)},m))};class X{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:e="unset",bottom:t="unset",backgroundColor:o="#333D",fontColor:r="white",fadeOutSec:i=.3,boardClass:y="",boardStyleOverrides:u={},messageClass:V="",messageStyleOverrides:Y={},closerClass:n="",closerStyleOverrides:d={}},f=document.body){let l=S({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:e,bottom:t,left:"50%",transform:"translateX(-50%)","z-index":1e4,...u});this._fadeOutSec=i,this._messageClass=V,this._messageStylesStr=S({display:"flex","background-color":o,color:r,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${i}s, transform ${i}s`,...Y}),this._closerClass=n,this._closerStylesStr=S({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...d}),f.appendChild(this._dom=v({class:y,style:l}))}show({message:e,closer:t,durationSec:o,closed:r=c.state(!1)}){let i=c.state(!1);c.derive(()=>setTimeout(u=>i.val=u,this._fadeOutSec*1e3,r.val));let y=v({class:this._messageClass,style:this._messageStylesStr},v(e),t?v({class:this._closerClass,style:this._closerStylesStr,onclick:()=>r.val=!0},t):null);return c.derive(()=>r.val&&(y.style.opacity="0",y.style.transform="translateY(-20px)")),o&&setTimeout(()=>r.val=!0,o*1e3),c.add(this._dom,()=>i.val?null:y),y}remove(){this._dom.remove()}}return{Await:I,MessageBoard:X,topMostZIndex:N,FloatingWindow:k}}});var me,Se=H(()=>{me=(c,j)=>{let z=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,v={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},A={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},w=(s="")=>{let e=s.match(z);if(!e)return[];let{p:t,v:o}=e.groups,r=j[t];if(!r)return t=="cf"?o&&(o=[o[0].toLowerCase(),o.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[o])?typeof window.TFL_STYLE_CONFIG[o]=="string"?[window.TFL_STYLE_CONFIG[o]]:window.TFL_STYLE_CONFIG[o]:[]:[];let i=[],y="";if(o&&o.endsWith("!")&&(o=o.substr(0,o.length-1),y="!important"),t.length==s.length&&r.cssText)return typeof r.cssText=="string"?[r.cssText]:Array.isArray(r.cssText)?r.cssText:[];if(r.names&&typeof r.names=="string"&&(i=[r.names]),r.names&&Array.isArray(r.names)&&(i=r.names),t.length==s.length&&r.default&&i.length>0)return i.map(V=>`${V}:${r.default}${y}`);if(!o&&typeof r.fn=="function"){let u=r.fn();if(typeof u=="string")return[u];if(Array.isArray(u))return u}if(o){if(!r.default&&!r.cssText&&typeof r.fn=="function"){let l=[o[0].toLowerCase(),o.substr(1)].join(""),h=r.fn(l);if(h)return[h]}let u=/^\{(?<v>.+)\}$/,V=/^(?<v>--[a-z0-9-]+)$/,Y=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,n=o.match(u);if(n){let{v:l}=n.groups;l=l.toLowerCase(),l=l.replace(/[_]+/g,$=>$.length%2==1?" ":$.substr(0,$.length/2));let h=i.map($=>`${$}:${l}${y}`);return h.every($=>CSS.supports($))?h:[]}if(n=o.match(V),n){let{v:l}=n.groups;return i.map(x=>`${x}:var(${l})${y}`)}if(n=o.match(Y),n){let{d1:l,d2:h}=n.groups;if(Number(h)>0){let x=i.map($=>`${$}:calc(${l} * 100% / ${h})`);if(x.every($=>CSS.supports($)))return x}}let d=[o[0].toLowerCase(),o.substr(1)].join(""),f=r.exts&&Object.keys(r.exts).length>0?r.exts[d]:"";if(f)return i.map(h=>`${h}:${f}${y}`);{let l=i.map(h=>`${h}:${d}${y}`);if(l.every(h=>CSS.supports(h)))return l}if(typeof r.fn=="function"){let l=r.fn(d);if(l){let h=i.map(x=>`${x}:${l}${y}`);if(h.every(x=>CSS.supports(x)))return h}}}return[]},_=s=>{let e=w(s);return Array.isArray(e)&&e.length>0?e.join(";"):""},E=s=>{var e=/class="([^"]+)"/g,t=[];return[...s.matchAll(e)].forEach(o=>t=t.concat(o[1].split(" "))),[...new Set(t)]},C=s=>{if(!s)return[];let e=[].concat(...[...s.querySelectorAll("[class]")].map(t=>[...t.classList]));return[...new Set(e)]},S=s=>{let t=(s||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(t){let{m:r,v:i=""}=t.groups,y="";var o=(n,d=!0)=>{if(typeof n=="string"){let f=i.indexOf(n);d&&(f+=1),y=i.substr(f),i=i.substr(0,i.length-y.length)}else{let f=(n||[]).map(l=>[l,i.indexOf(l)]);if(f=f.filter(l=>l[1]>-1),f.length>0){f.sort((h,x)=>h[1]>=x[1]?1:-1);let l=f[0][1];d&&(l+=1),y=i.substr(l),i=i.substr(0,i.length-y.length)}}};i.indexOf("}")>-1?o("}"):o([":","_",">","+","~","*"],!1);let u=_(i);if(!u)return null;let V=CSS.escape(s),Y=y?y.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,n=>n=="_"?" ":["~","+","*",">"].includes(n)?` ${n} `:n):"";return{type:r||"default",ext:!!Y,css:`.${V}${Y} {${u}}`,selectorText:`.${V}${Y}`}}return null},T=(s=[])=>s.map(t=>S(t)).filter(t=>t),F=(s,e,t="")=>t?(A[s]&&A[s][e]&&t.length>0&&A[s][e].insertRule(t),!0):!1,O=(s,e,t=[])=>t.length==0?!1:A[s]&&A[s][e]?(A[s][e].replaceSync(t.join(`
`)),!0):!1,I=(s=[])=>{let e=T(s);for(let t of Object.keys(v)){let o=e.filter(u=>u.type==t&&u.ext==!1),r=e.filter(u=>u.type==t&&u.ext==!0),i=o.map(u=>u.css),y=r.map(u=>u.css);if(i.length>0)for(let u of i)v[t][0].has(u)||(v[t][0].add(u),F(t,0,u));if(y.length>0)for(let u of y)v[t][1].has(u)||v[t][1].add(u),F(t,1,u)}},N=s=>{new MutationObserver(e=>{for(let t of e)if(t.type=="attributes"&&t.attributeName=="class"){let r=[...t.target.classList].map(i=>i.trim()).filter(i=>i);typeof s=="function"&&s([...new Set(r)])}else if(t.type=="childList"&&t.addedNodes.length>0){let o=[...t.addedNodes].map(r=>C(r.target)).flat().map(r=>r.trim()).filter(r=>r);typeof s=="function"&&s([...new Set(o)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},k=()=>{let s;return e=>{clearTimeout(s),s=setTimeout(()=>{Object.keys(v).forEach(t=>{let o="tfl-"+t+"-0",r="tfl-"+t+"-1";v[t][0].size>0&&localStorage.setItem(o,JSON.stringify([...v[t][0]])),v[t][1].size>0&&localStorage.setItem(r,JSON.stringify([...v[t][1]]))})},e||0)}};return{loadEventDom:()=>{var s=Object.values(A).flat();let e=new CSSStyleSheet;c&&Array.isArray(c)&&e.replaceSync(c.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e,...s],Object.keys(v).forEach(r=>{let i="tfl-"+r+"-0",y="tfl-"+r+"-1";if(localStorage.getItem(i))try{v[r][0]=new Set(JSON.parse(localStorage.getItem(i)))}catch{localStorage.removeItem(i)}if(localStorage.getItem(y))try{v[r][1]=new Set(JSON.parse(localStorage.getItem(y)))}catch{localStorage.removeItem(y)}}),Object.keys(v).forEach(r=>{let i=[...v[r][0]],y=[...v[r][1]];O(r,0,i),O(r,1,y)});let t=k(),o=C(document);I(o),N(r=>{I(r),t(1e3)})}}}});var $e=be((ge,ve)=>{ie();ae();ce();fe();pe();Se();Object.defineProperty(window,"tjs",{value:{...U,...oe(U),...de,...ue(U),...he(U),cssFun:me},writable:!1,configurable:!1,enumerable:!1});addEventListener("tjs-load",function(){let p=U.htmlTotjsJS("document.body",document.body.innerHTML),pp=p.join(`
`);eval(pp)});var _e=setInterval(()=>{if(document&&document.body&&document.body.isConnected){let c=new Event("tjs-load");dispatchEvent(c),clearInterval(_e)}},1)});$e();})();

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
