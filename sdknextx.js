let wasm_bindgen;
(()=>{var R=(()=>{let y=Object.getPrototypeOf,j,z,m,P,I={isConnected:1},g=1e3,x,k={},b=y(I),N=y(y),$,S=(u,f,c,o)=>(u??(setTimeout(c,o),new Set)).add(f),F=(u,f,c)=>{let o=m;m=f;try{return u(c)}catch(v){return console.error(v),c}finally{m=o}},O=u=>u.filter(f=>f._dom?.isConnected),M=u=>x=S(x,u,()=>{for(let f of x)f._bindings=O(f._bindings),f._listeners=O(f._listeners);x=$},g),T={get val(){return m?._getters?.add(this),this.rawVal},get oldVal(){return m?._getters?.add(this),this._oldVal},set val(u){m?._setters?.add(this),u!==this.rawVal&&(this.rawVal=u,this._bindings.length+this._listeners.length?(z?.add(this),j=S(j,this,D)):this._oldVal=u)}},i=u=>Object.create(T,{rawVal:{value:u,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:u,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),a=(u,f)=>{let c={_getters:new Set,_setters:new Set},o={f:u},v=P;P=[];let w=F(u,c,f);w=(w??document).nodeType?w:new Text(w);for(let V of c._getters)c._setters.has(V)||(M(V),V._bindings.push(o));for(let V of P)V._dom=w;return P=v,o._dom=w},r=(u,f=i(),c)=>{let o={_getters:new Set,_setters:new Set},v={f:u,s:f};v._dom=c??P?.push(v)??I,f.val=F(u,o,f.rawVal);for(let w of o._getters)o._setters.has(w)||(M(w),w._listeners.push(v));return f},n=(u="append")=>(f,...c)=>{["append","prepend","before","after","replaceWith","remove","replaceChildren"].includes(u)||(u="append");for(let v of c.flat(1/0)){let w=y(v??0),V=w===T?a(()=>v.val):w===N?a(v):v;V!=$&&f[u](V)}return f},e=n(),l=(u,f,...c)=>{let[o,...v]=y(c[0]??0)===b?c:[{},...c],w=u?document.createElementNS(u,f):document.createElement(f);for(let[V,t]of Object.entries(o)){let s=L=>L?Object.getOwnPropertyDescriptor(L,V)??s(y(L)):$,h=f+","+V,A=k[h]??(k[h]=s(y(w))?.set??0),_=V.startsWith("on:")?(L,J)=>{let W=V.slice(3);w.removeEventListener(W,J),w.addEventListener(W,L)}:A?A.bind(w):w.setAttribute.bind(w,V),C=y(t??0);V.startsWith("on:")||C===N&&(t=r(t),C=T),C===T?a(()=>(_(t.val,t._oldVal),w)):_(t)}return e(w,...v)},d=u=>({get:(f,c)=>l.bind($,u,c)}),p=new Proxy(u=>new Proxy(l,d(u)),d()),Y=(u,f)=>f?f!==u&&u.replaceWith(f):u.remove(),D=()=>{let u=0,f=[...j].filter(o=>o.rawVal!==o._oldVal);do{z=new Set;for(let o of new Set(f.flatMap(v=>v._listeners=O(v._listeners))))r(o.f,o.s,o._dom),o._dom=$}while(++u<100&&(f=[...z]).length);let c=[...j].filter(o=>o.rawVal!==o._oldVal);j=$;for(let o of new Set(c.flatMap(v=>v._bindings=O(v._bindings))))Y(o._dom,a(o.f,o._dom)),o._dom=$;for(let o of c)o._oldVal=o.rawVal};return{add:e,insertNodes:n,tags:p,state:i,derive:r,hydrate:(u,f)=>Y(u,a(f,u))}})();var se=y=>{let{fromEntries:j,entries:z,keys:m}=Object,{get:P,set:I,deleteProperty:g,ownKeys:x}=Reflect,{state:k,derive:b,add:N}=y,$,S=1e3,F,O,M=Symbol(),T=Symbol(),i=Symbol(),a=Symbol(),r=Symbol(),n=Symbol(),e=t=>(t[i]=1,t),l=t=>{if(t?.[i]){let s=k();return b(()=>{let h=t();s.rawVal instanceof Object&&h instanceof Object?w(s.rawVal,h):s.val=d(h)}),s}else return k(d(t))},d=t=>!(t instanceof Object)||t[T]?t:new Proxy((t[M]=t,t[T]=j(z(t).map(([s,h])=>[s,l(h)])),t[a]=[],t[r]=k(1),t),{get:(s,h,A)=>s[T].hasOwnProperty(h)?s[T][h].val:(h==="length"&&s[r].val,P(s,h,A)),set(s,h,A,_){let C=s[T];if(C.hasOwnProperty(h))return C[h].val=d(A),1;let L=h in s,J=L&&h==="length"&&A!==s.length;if(I(s,h,A))return L?J&&++s[r].val:I(C,h,l(A))&&(++s[r].val,u(_,h,C[h])),1},deleteProperty:(s,h)=>(g(s[T],h)&&f(s,h),g(s,h)&&++s[r].val),ownKeys:s=>(s[r].val,x(s))}),p=t=>t[T],Y=t=>t[T]?new Proxy(t[T],{get:(s,h)=>Y(s[h].rawVal)}):t,D=t=>t[a]=t[a].filter(s=>s._containerDom.isConnected),E=(t,s,h,A,{_containerDom:_,f:C})=>{let L=Array.isArray(t);if(N(_,()=>_[n][s]=C(h,()=>delete t[s],L?Number(s):s)),L&&!A&&s!=t.length-1){let J=Number(s);_.insertBefore(_.lastChild,_[n][m(t).find(W=>Number(W)>J)])}},u=(t,s,h)=>D(t).forEach(E.bind(F,t,s,h,O)),f=(t,s)=>{for(let h of D(t)){let A=h._containerDom[n];A[s]?.remove(),delete A[s]}},c=t=>($??($=(setTimeout(()=>($.forEach(D),$=F),S),new Set))).add(t),o=(t,s,h)=>{let A={_containerDom:t instanceof Function?t():t,f:h};A._containerDom[n]={},s[a].push(A),c(s);for(let[_,C]of z(s[T]))E(s,_,C,1,A);return A._containerDom},v=(t,s)=>{for(let[_,C]of z(s)){let L=t[_];L instanceof Object&&C instanceof Object?v(L,C):t[_]=C}for(let _ in t)s.hasOwnProperty(_)||delete t[_];let h=m(s),A=Array.isArray(t);if(A||m(t).some((_,C)=>_!==h[C])){if(A)t.length=s.length;else{++t[r].val;let _=t[M],C={..._};for(let L of h)delete _[L];for(let L of h)_[L]=C[L]}for(let{_containerDom:_}of D(t)){let{firstChild:C,[n]:L}=_;for(let J of h)C===L[J]?C=C.nextSibling:_.insertBefore(L[J],C)}}return t},w=(t,s)=>{O=1;try{return v(t,s instanceof Function?Array.isArray(t)?s(t.filter(h=>1)):j(s(z(t))):s)}finally{O=F}},V=t=>Array.isArray(t)?t.filter(s=>1).map(V):t instanceof Object?j(z(t).map(([s,h])=>[s,V(h)])):t;return{calc:e,reactive:d,stateFields:p,raw:Y,list:o,replace:w,compact:V}};var ne=(()=>{function y(g){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(g)?g:`"${g}"`}function j(g=""){let x=[];if(g.includes("{{")&&g.includes("}}")){let b=g.indexOf("{{"),N=g.indexOf("}}"),$=g.slice(0,b).trim(),S=g.slice(N+2).trim(),F=g.slice(b+2,N).trim();if($.length>0&&x.push(JSON.stringify($)),F.length>0&&x.push(F),S.length>0){let O=j(S).filter(M=>M);S.length>0&&x.push(...O)}}else x.push(JSON.stringify(g));let k=x.filter(b=>b);return k.length===0?[]:k}function z(g,x=new Set,k=!1){if(g.nodeType===3){let l=j(g.nodeValue.trim()).filter(d=>d&&d!='""').join(",");return{tags:x,body:l}}if(!g.tagName)return{tags:x,body:""};if(g.tagName.toLowerCase()==="script"&&!k)return{tags:x,body:""};let b=g.tagName.toLowerCase();x.add(b);let N=[],$="",S={};Array.from(g.attributes).forEach(e=>{S[e.name.trim()]=e.value.trim()}),S.hasOwnProperty("x-tags")&&(S["x-tags"].split(/[\s|,]+/).map(l=>l.trim()).filter(l=>l).forEach(l=>{x.add(l.toLowerCase())}),delete S["x-tags"]),Object.keys(S).forEach(e=>{if(e=="x-script"&&(N.push(S[e]),delete S[e]),e=="x-include"){let l=S[e],d="__"+Date.now().toString(36),p=`const ${d}= $state(undefined); (()=> {fetch(${JSON.stringify(l)}).then(response => response.text()).then(data => {${d}.val = $htmlToTjs(data, true);}).catch(error => {});})();`;N.push(p),$=d,delete S[e]}});let F="";S["x-list"]&&(F=S["x-list"]||"",delete S["x-list"]);let O=Object.keys(S).map(e=>{let l=e;return l.startsWith("on:")?`${y(l)}:${S[e]||""}`:`${y(l)}:${JSON.stringify(S[e])}`}).join(","),M=[],T="";b==="script"?T=JSON.stringify(g.textContent):$||(M=Array.from(g.childNodes).map(e=>z(e,x,k)),T=M.filter(e=>e.body).map(e=>e.body).join(","));let i=b.replace(/-/g,"_"),a="";var r=()=>{if(F){let e=F.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(e){let{k:l,d}=e.groups;a=`$list(${i},${d},(${l}) =>${T||""})`}}$&&(O?a=`${i}({${O}},()=>$tags["div"](... (${$}.val || [])))`:a=`${i}(()=>$tags["div"](...(${$}.val || [])))`)};Object.keys(S).length>0?(a=`${i}({${O}} ${T?","+T:""})`,r()):(a=T?`${i}(${T})`:`${i}()`,r());let n=a;return N.length>0&&(n=`()=>{ ${N.join(`
`)} return ${a};}`),{tags:x,body:n}}function m(g,x="append",k,b=!1){return P(k,b).forEach(N=>{$insertNodes(x)(g,N)})}function P(g,x=!1){let N=new DOMParser().parseFromString(g,"text/html").body;return I(N,x)}function I(g,x=!1){let k=[];for(let S of g.childNodes)k.push(z(S,new Set,x));let b=k.filter(S=>S.tags.size>0),N="";if(b.length>0){let S=new Set;b.forEach(O=>{O.tags.forEach(M=>S.add(M))}),N=`const {${[...S].map(O=>/-/.test(O)?`"${O}":${O.replace(/-/g,"_")}`:O).join(", ")}}=$tags;`}let $=[...b.map(S=>S.body)].join(",");return new Function(`return (() => {try {${N} return [${$}];} catch (e) {console.error(e);return []; }})()`)()}return{addHtmToElement:m,htmlToTjs:P,domToTjs:I}})();var ie=y=>{function j(z,m,P={mode:"open"}){window.customElements.define(z,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(I,g){super.setAttribute(I,g),this.attrs[I]&&(this.attrs[I].val=g)}connectedCallback(){let I;y.add(P?this.attachShadow(P):this,m({attr:(g,x)=>this.attrs[g]??=y.state(this.getAttribute(g)??x),mount:g=>I=g,$this:this,children:P?y.tags.slot():[...this.childNodes]})),this.dismount=I?.()}disconnectedCallback(){this.dismount?.()}})}return{define:j}};var ae=y=>{let j=0,{button:z,div:m,header:P,input:I,label:g,span:x,style:k}=y.tags,b=i=>Object.entries(i).map(([a,r])=>`${a}: ${r};`).join(""),N=i=>{},$=Object.getPrototypeOf(y.state(null)),S=i=>Object.getPrototypeOf(i??0)===$?i:y.state(i),F=({value:i,container:a=m,Loading:r,Error:n},e)=>{let l=y.state({status:"pending"});return i.then(d=>l.val={status:"fulfilled",value:d}).catch(d=>l.val={status:"rejected",value:d}),a(()=>l.val.status==="pending"?r?.()??"":l.val.status==="rejected"?n?.(l.val.value):e(l.val.value))},O=()=>++j,M=({title:i,closed:a=y.state(!1),x:r=100,y:n=100,width:e=300,height:l=200,closeCross:d="\xD7",customStacking:p=!1,zIndex:Y=1,disableMove:D=!1,disableResize:E=!1,headerColor:u="lightgray",windowClass:f="",windowStyleOverrides:c={},headerClass:o="",headerStyleOverrides:v={},childrenContainerClass:w="",childrenContainerStyleOverrides:V={},crossClass:t="",crossStyleOverrides:s={},crossHoverClass:h="",crossHoverStyleOverrides:A={}},..._)=>{let C=S(r),L=S(n),J=S(e),W=S(l),H=S(Y);p||(H.val=O());let U=y.state(!1),X=y.state(null),B=y.state(0),K=y.state(0),te=y.state(0),re=y.state(0),Z=h||Object.keys(A)?y.state(!1):null,le=G=>{G.button===0&&(U.val=!0,B.val=G.clientX,K.val=G.clientY,document.body.style.userSelect="none")},Q=G=>q=>{X.val=G,B.val=q.clientX,K.val=q.clientY,te.val=J.val,re.val=W.val,document.body.style.userSelect="none"},de=G=>{if(U.val)C.val+=G.clientX-B.val,L.val+=G.clientY-K.val,B.val=G.clientX,K.val=G.clientY;else if(X.val){let q=G.clientX-B.val,ue=G.clientY-K.val;X.val.includes("right")&&(J.val=te.val+q),X.val.includes("bottom")&&(W.val=re.val+ue)}},ce=()=>{U.val=!1,X.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let G=k({type:"text/css",id:"tjsui-window-style"},N({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(G)}return()=>a.val?null:m({class:["tjsui-window"].concat(f||[]).join(" "),style:()=>b({left:`${C.val}px`,top:`${L.val}px`,width:`${J.val}px`,height:`${W.val}px`,"z-index":H.val,...c}),...p?{}:{onmousedown:()=>H.val=O()}},i?P({class:["tjsui-window-header"].concat(o||[]).join(" "),style:b({"background-color":u,...D?{cursor:"auto"}:{},...v}),...D?{}:{onmousedown:le}},i,d?x({class:()=>["tjsui-window-cross"].concat(t||[]).concat(h&&Z.val?h:[]).join(" "),style:()=>b({...s,...Object.keys(A).length&&Z.val?A:{}}),onclick:()=>a.val=!0,...Z?{onmouseenter:()=>Z.val=!0,onmouseleave:()=>Z.val=!1}:{}},d):null):D?null:m({class:"tjsui-window-dragarea",onmousedown:le}),E?[]:[m({class:"tjsui-window-resize-right",onmousedown:Q("right")}),m({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),m({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],m({class:["tjsui-window-children"].concat(w||[]).join(" "),style:b(V)},_))};class T{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:a="unset",bottom:r="unset",backgroundColor:n="#333D",fontColor:e="white",fadeOutSec:l=.3,boardClass:d="",boardStyleOverrides:p={},messageClass:Y="",messageStyleOverrides:D={},closerClass:E="",closerStyleOverrides:u={}},f=document.body){let c=b({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:a,bottom:r,left:"50%",transform:"translateX(-50%)","z-index":1e4,...p});this._fadeOutSec=l,this._messageClass=Y,this._messageStylesStr=b({display:"flex","background-color":n,color:e,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${l}s, transform ${l}s`,...D}),this._closerClass=E,this._closerStylesStr=b({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...u}),f.appendChild(this._dom=m({class:d,style:c}))}show({message:a,closer:r,durationSec:n,closed:e=y.state(!1)}){let l=y.state(!1);y.derive(()=>setTimeout(p=>l.val=p,this._fadeOutSec*1e3,e.val));let d=m({class:this._messageClass,style:this._messageStylesStr},m(a),r?m({class:this._closerClass,style:this._closerStylesStr,onclick:()=>e.val=!0},r):null);return y.derive(()=>e.val&&(d.style.opacity="0",d.style.transform="translateY(-20px)")),n&&setTimeout(()=>e.val=!0,n*1e3),y.add(this._dom,()=>l.val?null:d),d}remove(){this._dom.remove()}}return{Await:F,MessageBoard:T,topMostZIndex:O,FloatingWindow:M}};var oe=(y,j)=>{let z=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,m={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},P={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},I=(i="")=>{let a=i.match(z);if(!a)return[];let{p:r,v:n}=a.groups,e=j[r];if(!e)return r=="cf"?n&&(n=[n[0].toLowerCase(),n.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[n])?typeof window.TFL_STYLE_CONFIG[n]=="string"?[window.TFL_STYLE_CONFIG[n]]:window.TFL_STYLE_CONFIG[n]:[]:[];let l=[],d="";if(n&&n.endsWith("!")&&(n=n.substr(0,n.length-1),d="!important"),r.length==i.length&&e.cssText)return typeof e.cssText=="string"?[e.cssText]:Array.isArray(e.cssText)?e.cssText:[];if(e.names&&typeof e.names=="string"&&(l=[e.names]),e.names&&Array.isArray(e.names)&&(l=e.names),r.length==i.length&&e.default&&l.length>0)return l.map(Y=>`${Y}:${e.default}${d}`);if(!n&&typeof e.fn=="function"){let p=e.fn();if(typeof p=="string")return[p];if(Array.isArray(p))return p}if(n){if(!e.default&&!e.cssText&&typeof e.fn=="function"){let c=[n[0].toLowerCase(),n.substr(1)].join(""),o=e.fn(c);if(o)return[o]}let p=/^\{(?<v>.+)\}$/,Y=/^(?<v>--[a-z0-9-]+)$/,D=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,E=n.match(p);if(E){let{v:c}=E.groups;c=c.toLowerCase(),c=c.replace(/[_]+/g,w=>w.length%2==1?" ":w.substr(0,w.length/2));let o=l.map(w=>`${w}:${c}${d}`);return o.every(w=>CSS.supports(w))?o:[]}if(E=n.match(Y),E){let{v:c}=E.groups;return l.map(v=>`${v}:var(${c})${d};`)}if(E=n.match(D),E){let{d1:c,d2:o}=E.groups;if(Number(o)>0){let v=l.map(w=>`${w}:calc(${c} * 100% / ${o})`);if(v.every(w=>CSS.supports(w)))return v}}let u=[n[0].toLowerCase(),n.substr(1)].join(""),f=e.exts&&Object.keys(e.exts).length>0?e.exts[u]:"";if(f)return l.map(o=>`${o}:${f}${d}`);{let c=l.map(o=>`${o}:${u}${d}`);if(c.every(o=>CSS.supports(o)))return c}if(typeof e.fn=="function"){let c=e.fn(u);if(c){let o=l.map(v=>`${v}:${c}${d}`);if(o.every(v=>CSS.supports(v)))return o}}}return[]},g=i=>{let a=I(i);return Array.isArray(a)&&a.length>0?a.join(";"):""},x=i=>{var a=/class="([^"]+)"/g,r=[];return[...i.matchAll(a)].forEach(n=>r=r.concat(n[1].split(" "))),[...new Set(r)]},k=i=>{if(!i)return[];let a=[].concat(...[...i.querySelectorAll("[class]")].map(n=>[...n.classList]));return[...new Set(a)]},b=i=>{let r=(i||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(r){let{m:e,v:l=""}=r.groups,d="";var n=(E,u=!0)=>{if(typeof E=="string"){let f=l.indexOf(E);u&&(f+=1),d=l.substr(f),l=l.substr(0,l.length-d.length)}else{let f=(E||[]).map(c=>[c,l.indexOf(c)]);if(f=f.filter(c=>c[1]>-1),f.length>0){f.sort((o,v)=>o[1]>=v[1]?1:-1);let c=f[0][1];u&&(c+=1),d=l.substr(c),l=l.substr(0,l.length-d.length)}}};l.indexOf("}")>-1?n("}"):n([":","_",">","+","~","*"],!1);let p=g(l);if(!p)return null;let Y=CSS.escape(i),D=d?d.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,E=>E=="_"?" ":["~","+","*",">"].includes(E)?` ${E} `:E):"";return{type:e||"default",ext:!!D,css:`.${Y}${D} {${p}}`,selectorText:`.${Y}${D}`}}return null},N=(i=[])=>i.map(r=>b(r)).filter(r=>r),$=(i,a,r="")=>{if(!r)return!1;if(P[i]&&P[i][a]&&r.length>0){let n=P[i][a];try{n.insertRule(r)}catch(e){console.error(e)}}return!0},S=(i,a,r=[])=>r.length==0?!1:P[i]&&P[i][a]?(P[i][a].replaceSync(r.join(`
`)),!0):!1,F=(i=[])=>{let a=N(i);for(let r of Object.keys(m)){let n=a.filter(p=>p.type==r&&p.ext==!1),e=a.filter(p=>p.type==r&&p.ext==!0),l=n.map(p=>p.css),d=e.map(p=>p.css);if(l.length>0)for(let p of l)m[r][0].has(p)||(m[r][0].add(p),$(r,0,p));if(d.length>0)for(let p of d)m[r][1].has(p)||m[r][1].add(p),$(r,1,p)}},O=i=>{new MutationObserver(a=>{for(let r of a)if(r.type=="attributes"&&r.attributeName=="class"){let e=[...r.target.classList].map(l=>l.trim()).filter(l=>l);typeof i=="function"&&i([...new Set(e)])}else if(r.type=="childList"&&r.addedNodes.length>0){let n=[...r.addedNodes].filter(e=>e.nodeType!=3).map(e=>[...e.classList]).flat(1/0).map(e=>e.trim()).filter(e=>e);typeof i=="function"&&i([...new Set(n)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},M=()=>{let i;return a=>{clearTimeout(i),i=setTimeout(()=>{Object.keys(m).forEach(r=>{let n="tfl-"+r+"-0",e="tfl-"+r+"-1";m[r][0].size>0&&localStorage.setItem(n,JSON.stringify([...m[r][0]])),m[r][1].size>0&&localStorage.setItem(e,JSON.stringify([...m[r][1]]))})},a||0)}};return{loadEventDom:()=>{var i=Object.values(P).flat();let a=new CSSStyleSheet;y&&Array.isArray(y)&&a.replaceSync(y.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,a,...i],Object.keys(m).forEach(e=>{let l="tfl-"+e+"-0",d="tfl-"+e+"-1";if(localStorage.getItem(l))try{m[e][0]=new Set(JSON.parse(localStorage.getItem(l)))}catch{localStorage.removeItem(l)}if(localStorage.getItem(d))try{m[e][1]=new Set(JSON.parse(localStorage.getItem(d)))}catch{localStorage.removeItem(d)}}),Object.keys(m).forEach(e=>{let l=[...m[e][0]],d=[...m[e][1]];S(e,0,l),S(e,1,d)});let r=M(),n=k(document);F(n),O(e=>{F(e),r(1e3)})},renCssFromArray:N}};Object.defineProperty(window,"tjs",{value:{...R,...se(R),...ne,...ie(R),...ae(R),cssFun:oe},writable:!1,configurable:!1,enumerable:!1}),["add","insertNodes","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","htmlToTjs","domToTjs","define","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach(y=>{Object.defineProperty(window,"$"+y,{value:window.tjs[y],writable:!1,configurable:!1,enumerable:!1})});})();

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
