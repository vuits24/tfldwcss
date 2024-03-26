let wasm_bindgen;
(()=>{var R=(()=>{let y=Object.getPrototypeOf,I,j,p,T,S={isConnected:1},x=1e3,k,E={},w=y(S),N=y(y),b,V=(a,u,g,s)=>(a??(setTimeout(g,s),new Set)).add(u),O=(a,u,g)=>{let s=p;p=u;try{return a(g)}catch(h){return console.error(h),g}finally{p=s}},P=a=>a.filter(u=>u._dom?.isConnected),D=a=>k=V(k,a,()=>{for(let u of k)u._bindings=P(u._bindings),u._listeners=P(u._listeners);k=b},x),F={get val(){return p?._getters?.add(this),this.rawVal},get oldVal(){return p?._getters?.add(this),this._oldVal},set val(a){p?._setters?.add(this),a!==this.rawVal&&(this.rawVal=a,this._bindings.length+this._listeners.length?(j?.add(this),I=V(I,this,M)):this._oldVal=a)}},d=a=>Object.create(F,{rawVal:{value:a,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:a,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),t=(a,u)=>{let g={_getters:new Set,_setters:new Set},s={f:a},h=T;T=[];let v=O(a,g,u);v=(v??document).nodeType?v:new Text(v);for(let C of g._getters)g._setters.has(C)||(D(C),C._bindings.push(s));for(let C of T)C._dom=v;return T=h,s._dom=v},e=(a,u=d(),g)=>{let s={_getters:new Set,_setters:new Set},h={f:a,s:u};h._dom=g??T?.push(h)??S,u.val=O(a,s,u.rawVal);for(let v of s._getters)s._setters.has(v)||(D(v),v._listeners.push(h));return u},i=(a,...u)=>{for(let g of u.flat(1/0)){let s=y(g??0),h=s===F?t(()=>g.val):s===N?t(g):g;h!=b&&a.append(h)}return a},r=(a,u,...g)=>{let[s,...h]=y(g[0]??0)===w?g:[{},...g],v=a?document.createElementNS(a,u):document.createElement(u);for(let[C,J]of Object.entries(s)){let l=_=>_?Object.getOwnPropertyDescriptor(_,C)??l(y(_)):b,n=u+","+C,c=E[n]??(E[n]=l(y(v))?.set??0),A=C.startsWith("on:")?(_,L)=>{let G=C.slice(3);typeof L=="function"&&v.removeEventListener(G,L)(typeof _=="function")&&v.addEventListener(G,_)}:c?c.bind(v):v.setAttribute.bind(v,C),$=y(J??0);C.startsWith("on:")||$===N&&(J=e(J),$=F),$===F?t(()=>(A(J.val,J._oldVal),v)):A(J)}return i(v,...h)},o=a=>({get:(u,g)=>r.bind(b,a,g)}),f=new Proxy(a=>new Proxy(r,o(a)),o()),m=(a,u)=>u?u!==a&&a.replaceWith(u):a.remove(),M=()=>{let a=0,u=[...I].filter(s=>s.rawVal!==s._oldVal);do{j=new Set;for(let s of new Set(u.flatMap(h=>h._listeners=P(h._listeners))))e(s.f,s.s,s._dom),s._dom=b}while(++a<100&&(u=[...j]).length);let g=[...I].filter(s=>s.rawVal!==s._oldVal);I=b;for(let s of new Set(g.flatMap(h=>h._bindings=P(h._bindings))))m(s._dom,t(s.f,s._dom)),s._dom=b;for(let s of g)s._oldVal=s.rawVal};return{add:i,tags:f,state:d,derive:e,hydrate:(a,u)=>m(a,t(u,a))}})();var se=y=>{let{fromEntries:I,entries:j,keys:p}=Object,{get:T,set:S,deleteProperty:x,ownKeys:k}=Reflect,{state:E,derive:w,add:N}=y,b,V=1e3,O,P,D=Symbol(),F=Symbol(),d=Symbol(),t=Symbol(),e=Symbol(),i=Symbol(),r=l=>(l[d]=1,l),o=l=>{if(l?.[d]){let n=E();return w(()=>{let c=l();n.rawVal instanceof Object&&c instanceof Object?C(n.rawVal,c):n.val=f(c)}),n}else return E(f(l))},f=l=>!(l instanceof Object)||l[F]?l:new Proxy((l[D]=l,l[F]=I(j(l).map(([n,c])=>[n,o(c)])),l[t]=[],l[e]=E(1),l),{get:(n,c,A)=>n[F].hasOwnProperty(c)?n[F][c].val:(c==="length"&&n[e].val,T(n,c,A)),set(n,c,A,$){let _=n[F];if(_.hasOwnProperty(c))return _[c].val=f(A),1;let L=c in n,G=L&&c==="length"&&A!==n.length;if(S(n,c,A))return L?G&&++n[e].val:S(_,c,o(A))&&(++n[e].val,u($,c,_[c])),1},deleteProperty:(n,c)=>(x(n[F],c)&&g(n,c),x(n,c)&&++n[e].val),ownKeys:n=>(n[e].val,k(n))}),m=l=>l[F],M=l=>l[F]?new Proxy(l[F],{get:(n,c)=>M(n[c].rawVal)}):l,z=l=>l[t]=l[t].filter(n=>n._containerDom.isConnected),a=(l,n,c,A,{_containerDom:$,f:_})=>{let L=Array.isArray(l);if(N($,()=>$[i][n]=_(c,()=>delete l[n],L?Number(n):n)),L&&!A&&n!=l.length-1){let G=Number(n);$.insertBefore($.lastChild,$[i][p(l).find(W=>Number(W)>G)])}},u=(l,n,c)=>z(l).forEach(a.bind(O,l,n,c,P)),g=(l,n)=>{for(let c of z(l)){let A=c._containerDom[i];A[n]?.remove(),delete A[n]}},s=l=>(b??(b=(setTimeout(()=>(b.forEach(z),b=O),V),new Set))).add(l),h=(l,n,c)=>{let A={_containerDom:l instanceof Function?l():l,f:c};A._containerDom[i]={},n[t].push(A),s(n);for(let[$,_]of j(n[F]))a(n,$,_,1,A);return A._containerDom},v=(l,n)=>{for(let[$,_]of j(n)){let L=l[$];L instanceof Object&&_ instanceof Object?v(L,_):l[$]=_}for(let $ in l)n.hasOwnProperty($)||delete l[$];let c=p(n),A=Array.isArray(l);if(A||p(l).some(($,_)=>$!==c[_])){if(A)l.length=n.length;else{++l[e].val;let $=l[D],_={...$};for(let L of c)delete $[L];for(let L of c)$[L]=_[L]}for(let{_containerDom:$}of z(l)){let{firstChild:_,[i]:L}=$;for(let G of c)_===L[G]?_=_.nextSibling:$.insertBefore(L[G],_)}}return l},C=(l,n)=>{P=1;try{return v(l,n instanceof Function?Array.isArray(l)?n(l.filter(c=>1)):I(n(j(l))):n)}finally{P=O}},J=l=>Array.isArray(l)?l.filter(n=>1).map(J):l instanceof Object?I(j(l).map(([n,c])=>[n,J(c)])):l;return{calc:r,reactive:f,stateFields:m,raw:M,list:h,replace:C,compact:J}};var ne=(()=>{function y(S){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(S)?S:`"${S}"`}function I(S=""){let x=[];if(S.includes("{{")&&S.includes("}}")){let E=S.indexOf("{{"),w=S.indexOf("}}"),N=S.slice(0,E).trim(),b=S.slice(w+2).trim(),V=S.slice(E+2,w).trim();if(N.length>0&&x.push(JSON.stringify(N)),V.length>0&&x.push(V),b.length>0){let O=I(b).filter(P=>P);b.length>0&&x.push(...O)}}else x.push(JSON.stringify(S));let k=x.filter(E=>E);return k.length===0?[]:k}function j(S,x=new Set){if(S.nodeType===3){let e=I(S.nodeValue.trim()).filter(i=>i&&i!='""').join(",");return{tags:x,body:e}}if(!S.tagName)return{tags:x,body:""};let k=S.tagName.toLowerCase();x.add(k);let E=[],w={};Array.from(S.attributes).forEach(t=>{w[t.name.trim()]=t.value.trim()}),w.hasOwnProperty("x-tags")&&(w["x-tags"].split(/[\s|,]+/).map(e=>e.trim()).filter(e=>e).forEach(e=>{x.add(e.toLowerCase())}),delete w["x-tags"]),Object.keys(w).forEach(t=>{t.startsWith("x-script")&&(E.push(w[t]),delete w[t])});let N="";w["x-list"]&&(N=w["x-list"]||"",delete w["x-list"]);let b=Object.keys(w).map(t=>{let e=t;return e.startsWith("on:")?`${y(e)}:${w[t]||""}`:`${y(e)}:${JSON.stringify(w[t])}`}).join(","),V=[],O="";k==="script"?O=JSON.stringify(S.textContent):(V=Array.from(S.childNodes).map(t=>j(t,x)),O=V.filter(t=>t.body).map(t=>t.body).join(","));let P=k.replace(/-/g,"_"),D="";var F=()=>{if(N){let t=N.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(t){let{k:e,d:i}=t.groups;D=`$list(${P},${i},(${e}) =>${O||""})`}}};Object.keys(w).length>0?(D=`${P}({${b}} ${O?","+O:""})`,F()):(D=O?`${P}(${O})`:`${P}()`,F());let d=D;return E.length>0&&(d=`()=>{ ${E.join(`
`)} return ${D};}`),{tags:x,body:d}}function p(S,x){let w=new DOMParser().parseFromString(x,"text/html").body;return T(S,w)}function T(S,x){let k=[];for(let b of x.childNodes)k.push(j(b));let E=k.filter(b=>b.tags.size>0),w="";if(E.length>0){let b=new Set;E.forEach(O=>{O.tags.forEach(P=>b.add(P))}),w=`const {${[...b].map(O=>/-/.test(O)?`"${O}":${O.replace(/-/g,"_")}`:O).join(", ")}}=$tags;`}let N=[w,...E.map(b=>`$add(el, ${b.body});`)].join(`
`);new Function("el",`(() => {try {${N}} catch (e) {console.error(e); }})()`)(S)}return{addHtmToElement:p,domToJs:T}})();var ie=y=>{function I(j,p,T={mode:"open"}){window.customElements.define(j,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(S,x){super.setAttribute(S,x),this.attrs[S]&&(this.attrs[S].val=x)}connectedCallback(){let S;y.add(T?this.attachShadow(T):this,p({attr:(x,k)=>this.attrs[x]??=y.state(this.getAttribute(x)??k),mount:x=>S=x,$this:this,children:T?y.tags.slot():[...this.childNodes]})),this.dismount=S?.()}disconnectedCallback(){this.dismount?.()}})}return{define:I}};var ae=y=>{let I=0,{button:j,div:p,header:T,input:S,label:x,span:k,style:E}=y.tags,w=d=>Object.entries(d).map(([t,e])=>`${t}: ${e};`).join(""),N=d=>{},b=Object.getPrototypeOf(y.state(null)),V=d=>Object.getPrototypeOf(d??0)===b?d:y.state(d),O=({value:d,container:t=p,Loading:e,Error:i},r)=>{let o=y.state({status:"pending"});return d.then(f=>o.val={status:"fulfilled",value:f}).catch(f=>o.val={status:"rejected",value:f}),t(()=>o.val.status==="pending"?e?.()??"":o.val.status==="rejected"?i?.(o.val.value):r(o.val.value))},P=()=>++I,D=({title:d,closed:t=y.state(!1),x:e=100,y:i=100,width:r=300,height:o=200,closeCross:f="\xD7",customStacking:m=!1,zIndex:M=1,disableMove:z=!1,disableResize:a=!1,headerColor:u="lightgray",windowClass:g="",windowStyleOverrides:s={},headerClass:h="",headerStyleOverrides:v={},childrenContainerClass:C="",childrenContainerStyleOverrides:J={},crossClass:l="",crossStyleOverrides:n={},crossHoverClass:c="",crossHoverStyleOverrides:A={}},...$)=>{let _=V(e),L=V(i),G=V(r),W=V(o),H=V(M);m||(H.val=P());let U=y.state(!1),X=y.state(null),B=y.state(0),K=y.state(0),te=y.state(0),re=y.state(0),Z=c||Object.keys(A)?y.state(!1):null,le=Y=>{Y.button===0&&(U.val=!0,B.val=Y.clientX,K.val=Y.clientY,document.body.style.userSelect="none")},Q=Y=>q=>{X.val=Y,B.val=q.clientX,K.val=q.clientY,te.val=G.val,re.val=W.val,document.body.style.userSelect="none"},de=Y=>{if(U.val)_.val+=Y.clientX-B.val,L.val+=Y.clientY-K.val,B.val=Y.clientX,K.val=Y.clientY;else if(X.val){let q=Y.clientX-B.val,ue=Y.clientY-K.val;X.val.includes("right")&&(G.val=te.val+q),X.val.includes("bottom")&&(W.val=re.val+ue)}},ce=()=>{U.val=!1,X.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let Y=E({type:"text/css",id:"tjsui-window-style"},N({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(Y)}return()=>t.val?null:p({class:["tjsui-window"].concat(g||[]).join(" "),style:()=>w({left:`${_.val}px`,top:`${L.val}px`,width:`${G.val}px`,height:`${W.val}px`,"z-index":H.val,...s}),...m?{}:{onmousedown:()=>H.val=P()}},d?T({class:["tjsui-window-header"].concat(h||[]).join(" "),style:w({"background-color":u,...z?{cursor:"auto"}:{},...v}),...z?{}:{onmousedown:le}},d,f?k({class:()=>["tjsui-window-cross"].concat(l||[]).concat(c&&Z.val?c:[]).join(" "),style:()=>w({...n,...Object.keys(A).length&&Z.val?A:{}}),onclick:()=>t.val=!0,...Z?{onmouseenter:()=>Z.val=!0,onmouseleave:()=>Z.val=!1}:{}},f):null):z?null:p({class:"tjsui-window-dragarea",onmousedown:le}),a?[]:[p({class:"tjsui-window-resize-right",onmousedown:Q("right")}),p({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),p({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],p({class:["tjsui-window-children"].concat(C||[]).join(" "),style:w(J)},$))};class F{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:t="unset",bottom:e="unset",backgroundColor:i="#333D",fontColor:r="white",fadeOutSec:o=.3,boardClass:f="",boardStyleOverrides:m={},messageClass:M="",messageStyleOverrides:z={},closerClass:a="",closerStyleOverrides:u={}},g=document.body){let s=w({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:t,bottom:e,left:"50%",transform:"translateX(-50%)","z-index":1e4,...m});this._fadeOutSec=o,this._messageClass=M,this._messageStylesStr=w({display:"flex","background-color":i,color:r,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${o}s, transform ${o}s`,...z}),this._closerClass=a,this._closerStylesStr=w({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...u}),g.appendChild(this._dom=p({class:f,style:s}))}show({message:t,closer:e,durationSec:i,closed:r=y.state(!1)}){let o=y.state(!1);y.derive(()=>setTimeout(m=>o.val=m,this._fadeOutSec*1e3,r.val));let f=p({class:this._messageClass,style:this._messageStylesStr},p(t),e?p({class:this._closerClass,style:this._closerStylesStr,onclick:()=>r.val=!0},e):null);return y.derive(()=>r.val&&(f.style.opacity="0",f.style.transform="translateY(-20px)")),i&&setTimeout(()=>r.val=!0,i*1e3),y.add(this._dom,()=>o.val?null:f),f}remove(){this._dom.remove()}}return{Await:O,MessageBoard:F,topMostZIndex:P,FloatingWindow:D}};var oe=(y,I)=>{let j=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,p={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},T={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},S=(d="")=>{let t=d.match(j);if(!t)return[];let{p:e,v:i}=t.groups,r=I[e];if(!r)return e=="cf"?i&&(i=[i[0].toLowerCase(),i.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[i])?typeof window.TFL_STYLE_CONFIG[i]=="string"?[window.TFL_STYLE_CONFIG[i]]:window.TFL_STYLE_CONFIG[i]:[]:[];let o=[],f="";if(i&&i.endsWith("!")&&(i=i.substr(0,i.length-1),f="!important"),e.length==d.length&&r.cssText)return typeof r.cssText=="string"?[r.cssText]:Array.isArray(r.cssText)?r.cssText:[];if(r.names&&typeof r.names=="string"&&(o=[r.names]),r.names&&Array.isArray(r.names)&&(o=r.names),e.length==d.length&&r.default&&o.length>0)return o.map(M=>`${M}:${r.default}${f}`);if(!i&&typeof r.fn=="function"){let m=r.fn();if(typeof m=="string")return[m];if(Array.isArray(m))return m}if(i){if(!r.default&&!r.cssText&&typeof r.fn=="function"){let s=[i[0].toLowerCase(),i.substr(1)].join(""),h=r.fn(s);if(h)return[h]}let m=/^\{(?<v>.+)\}$/,M=/^(?<v>--[a-z0-9-]+)$/,z=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,a=i.match(m);if(a){let{v:s}=a.groups;s=s.toLowerCase(),s=s.replace(/[_]+/g,C=>C.length%2==1?" ":C.substr(0,C.length/2));let h=o.map(C=>`${C}:${s}${f}`);return h.every(C=>CSS.supports(C))?h:[]}if(a=i.match(M),a){let{v:s}=a.groups;return o.map(v=>`${v}:var(${s})${f};`)}if(a=i.match(z),a){let{d1:s,d2:h}=a.groups;if(Number(h)>0){let v=o.map(C=>`${C}:calc(${s} * 100% / ${h})`);if(v.every(C=>CSS.supports(C)))return v}}let u=[i[0].toLowerCase(),i.substr(1)].join(""),g=r.exts&&Object.keys(r.exts).length>0?r.exts[u]:"";if(g)return o.map(h=>`${h}:${g}${f}`);{let s=o.map(h=>`${h}:${u}${f}`);if(s.every(h=>CSS.supports(h)))return s}if(typeof r.fn=="function"){let s=r.fn(u);if(s){let h=o.map(v=>`${v}:${s}${f}`);if(h.every(v=>CSS.supports(v)))return h}}}return[]},x=d=>{let t=S(d);return Array.isArray(t)&&t.length>0?t.join(";"):""},k=d=>{var t=/class="([^"]+)"/g,e=[];return[...d.matchAll(t)].forEach(i=>e=e.concat(i[1].split(" "))),[...new Set(e)]},E=d=>{if(!d)return[];let t=[].concat(...[...d.querySelectorAll("[class]")].map(i=>[...i.classList]));return[...new Set(t)]},w=d=>{let e=(d||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(e){let{m:r,v:o=""}=e.groups,f="";var i=(a,u=!0)=>{if(typeof a=="string"){let g=o.indexOf(a);u&&(g+=1),f=o.substr(g),o=o.substr(0,o.length-f.length)}else{let g=(a||[]).map(s=>[s,o.indexOf(s)]);if(g=g.filter(s=>s[1]>-1),g.length>0){g.sort((h,v)=>h[1]>=v[1]?1:-1);let s=g[0][1];u&&(s+=1),f=o.substr(s),o=o.substr(0,o.length-f.length)}}};o.indexOf("}")>-1?i("}"):i([":","_",">","+","~","*"],!1);let m=x(o);if(!m)return null;let M=CSS.escape(d),z=f?f.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,a=>a=="_"?" ":["~","+","*",">"].includes(a)?` ${a} `:a):"";return{type:r||"default",ext:!!z,css:`.${M}${z} {${m}}`,selectorText:`.${M}${z}`}}return null},N=(d=[])=>d.map(e=>w(e)).filter(e=>e),b=(d,t,e="")=>{if(!e)return!1;if(T[d]&&T[d][t]&&e.length>0){let i=T[d][t];try{i.insertRule(e)}catch(r){console.error(r)}}return!0},V=(d,t,e=[])=>e.length==0?!1:T[d]&&T[d][t]?(T[d][t].replaceSync(e.join(`
`)),!0):!1,O=(d=[])=>{let t=N(d);for(let e of Object.keys(p)){let i=t.filter(m=>m.type==e&&m.ext==!1),r=t.filter(m=>m.type==e&&m.ext==!0),o=i.map(m=>m.css),f=r.map(m=>m.css);if(o.length>0)for(let m of o)p[e][0].has(m)||(p[e][0].add(m),b(e,0,m));if(f.length>0)for(let m of f)p[e][1].has(m)||p[e][1].add(m),b(e,1,m)}},P=d=>{new MutationObserver(t=>{for(let e of t)if(e.type=="attributes"&&e.attributeName=="class"){let r=[...e.target.classList].map(o=>o.trim()).filter(o=>o);typeof d=="function"&&d([...new Set(r)])}else if(e.type=="childList"&&e.addedNodes.length>0){let i=[...e.addedNodes].filter(r=>r.nodeType!=3).map(r=>[...r.classList]).flat(1/0).map(r=>r.trim()).filter(r=>r);typeof d=="function"&&d([...new Set(i)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},D=()=>{let d;return t=>{clearTimeout(d),d=setTimeout(()=>{Object.keys(p).forEach(e=>{let i="tfl-"+e+"-0",r="tfl-"+e+"-1";p[e][0].size>0&&localStorage.setItem(i,JSON.stringify([...p[e][0]])),p[e][1].size>0&&localStorage.setItem(r,JSON.stringify([...p[e][1]]))})},t||0)}};return{loadEventDom:()=>{var d=Object.values(T).flat();let t=new CSSStyleSheet;y&&Array.isArray(y)&&t.replaceSync(y.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,t,...d],Object.keys(p).forEach(r=>{let o="tfl-"+r+"-0",f="tfl-"+r+"-1";if(localStorage.getItem(o))try{p[r][0]=new Set(JSON.parse(localStorage.getItem(o)))}catch{localStorage.removeItem(o)}if(localStorage.getItem(f))try{p[r][1]=new Set(JSON.parse(localStorage.getItem(f)))}catch{localStorage.removeItem(f)}}),Object.keys(p).forEach(r=>{let o=[...p[r][0]],f=[...p[r][1]];V(r,0,o),V(r,1,f)});let e=D(),i=E(document);O(i),P(r=>{O(r),e(1e3)})},renCssFromArray:N}};Object.defineProperty(window,"tjs",{value:{...R,...se(R),...ne,...ie(R),...ae(R),cssFun:oe},writable:!1,configurable:!1,enumerable:!1}),["add","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","domToJs","define","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach(y=>{Object.defineProperty(window,"$"+y,{value:window.tjs[y],writable:!1,configurable:!1,enumerable:!1})});})();

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
