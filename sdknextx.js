let wasm_bindgen;
(()=>{var R=(()=>{let m=Object.getPrototypeOf,z,M,p,P,y={isConnected:1},v=1e3,I,N={},k=m(y),x=m(m),b,j=(c,u,o,i)=>(c??(setTimeout(o,i),new Set)).add(u),T=(c,u,o)=>{let i=p;p=u;try{return c(o)}catch(w){return console.error(w),o}finally{p=i}},E=c=>c.filter(u=>u._dom?.isConnected),F=c=>I=j(I,c,()=>{for(let u of I)u._bindings=E(u._bindings),u._listeners=E(u._listeners);I=b},v),$={get val(){return p?._getters?.add(this),this.rawVal},get oldVal(){return p?._getters?.add(this),this._oldVal},set val(c){p?._setters?.add(this),c!==this.rawVal&&(this.rawVal=c,this._bindings.length+this._listeners.length?(M?.add(this),z=j(z,this,D)):this._oldVal=c)}},a=c=>Object.create($,{rawVal:{value:c,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:c,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),d=(c,u)=>{let o={_getters:new Set,_setters:new Set},i={f:c},w=P;P=[];let S=T(c,o,u);S=(S??document).nodeType?S:new Text(S);for(let V of o._getters)o._setters.has(V)||(F(V),V._bindings.push(i));for(let V of P)V._dom=S;return P=w,i._dom=S},e=(c,u=a(),o)=>{let i={_getters:new Set,_setters:new Set},w={f:c,s:u};w._dom=o??P?.push(w)??y,u.val=T(c,i,u.rawVal);for(let S of i._getters)i._setters.has(S)||(F(S),S._listeners.push(w));return u},l=(c="append")=>(u,...o)=>{["append","prepend","before","after","replaceWith","remove","replaceChildren"].includes(c)||(c="append");for(let w of o.flat(1/0)){let S=m(w??0),V=S===$?d(()=>w.val):S===x?d(w):w;V!=b&&u[c](V)}return u},t=l(),n=(c,u,...o)=>{let[i,...w]=m(o[0]??0)===k?o:[{},...o],S=c?document.createElementNS(c,u):document.createElement(u);for(let[V,r]of Object.entries(i)){let s=A=>A?Object.getOwnPropertyDescriptor(A,V)??s(m(A)):b,f=u+","+V,O=N[f]??(N[f]=s(m(S))?.set??0),_=V.startsWith("on:")?(A,J)=>{let W=V.slice(3);typeof J=="function"&&S.removeEventListener(W,J)(typeof A=="function")&&S.addEventListener(W,A)}:O?O.bind(S):S.setAttribute.bind(S,V),C=m(r??0);V.startsWith("on:")||C===x&&(r=e(r),C=$),C===$?d(()=>(_(r.val,r._oldVal),S)):_(r)}return t(S,...w)},h=c=>({get:(u,o)=>n.bind(b,c,o)}),g=new Proxy(c=>new Proxy(n,h(c)),h()),Y=(c,u)=>u?u!==c&&c.replaceWith(u):c.remove(),D=()=>{let c=0,u=[...z].filter(i=>i.rawVal!==i._oldVal);do{M=new Set;for(let i of new Set(u.flatMap(w=>w._listeners=E(w._listeners))))e(i.f,i.s,i._dom),i._dom=b}while(++c<100&&(u=[...M]).length);let o=[...z].filter(i=>i.rawVal!==i._oldVal);z=b;for(let i of new Set(o.flatMap(w=>w._bindings=E(w._bindings))))Y(i._dom,d(i.f,i._dom)),i._dom=b;for(let i of o)i._oldVal=i.rawVal};return{add:t,insertNodes:l,tags:g,state:a,derive:e,hydrate:(c,u)=>Y(c,d(u,c))}})();var se=m=>{let{fromEntries:z,entries:M,keys:p}=Object,{get:P,set:y,deleteProperty:v,ownKeys:I}=Reflect,{state:N,derive:k,add:x}=m,b,j=1e3,T,E,F=Symbol(),$=Symbol(),a=Symbol(),d=Symbol(),e=Symbol(),l=Symbol(),t=r=>(r[a]=1,r),n=r=>{if(r?.[a]){let s=N();return k(()=>{let f=r();s.rawVal instanceof Object&&f instanceof Object?S(s.rawVal,f):s.val=h(f)}),s}else return N(h(r))},h=r=>!(r instanceof Object)||r[$]?r:new Proxy((r[F]=r,r[$]=z(M(r).map(([s,f])=>[s,n(f)])),r[d]=[],r[e]=N(1),r),{get:(s,f,O)=>s[$].hasOwnProperty(f)?s[$][f].val:(f==="length"&&s[e].val,P(s,f,O)),set(s,f,O,_){let C=s[$];if(C.hasOwnProperty(f))return C[f].val=h(O),1;let A=f in s,J=A&&f==="length"&&O!==s.length;if(y(s,f,O))return A?J&&++s[e].val:y(C,f,n(O))&&(++s[e].val,c(_,f,C[f])),1},deleteProperty:(s,f)=>(v(s[$],f)&&u(s,f),v(s,f)&&++s[e].val),ownKeys:s=>(s[e].val,I(s))}),g=r=>r[$],Y=r=>r[$]?new Proxy(r[$],{get:(s,f)=>Y(s[f].rawVal)}):r,D=r=>r[d]=r[d].filter(s=>s._containerDom.isConnected),L=(r,s,f,O,{_containerDom:_,f:C})=>{let A=Array.isArray(r);if(x(_,()=>_[l][s]=C(f,()=>delete r[s],A?Number(s):s)),A&&!O&&s!=r.length-1){let J=Number(s);_.insertBefore(_.lastChild,_[l][p(r).find(W=>Number(W)>J)])}},c=(r,s,f)=>D(r).forEach(L.bind(T,r,s,f,E)),u=(r,s)=>{for(let f of D(r)){let O=f._containerDom[l];O[s]?.remove(),delete O[s]}},o=r=>(b??(b=(setTimeout(()=>(b.forEach(D),b=T),j),new Set))).add(r),i=(r,s,f)=>{let O={_containerDom:r instanceof Function?r():r,f};O._containerDom[l]={},s[d].push(O),o(s);for(let[_,C]of M(s[$]))L(s,_,C,1,O);return O._containerDom},w=(r,s)=>{for(let[_,C]of M(s)){let A=r[_];A instanceof Object&&C instanceof Object?w(A,C):r[_]=C}for(let _ in r)s.hasOwnProperty(_)||delete r[_];let f=p(s),O=Array.isArray(r);if(O||p(r).some((_,C)=>_!==f[C])){if(O)r.length=s.length;else{++r[e].val;let _=r[F],C={..._};for(let A of f)delete _[A];for(let A of f)_[A]=C[A]}for(let{_containerDom:_}of D(r)){let{firstChild:C,[l]:A}=_;for(let J of f)C===A[J]?C=C.nextSibling:_.insertBefore(A[J],C)}}return r},S=(r,s)=>{E=1;try{return w(r,s instanceof Function?Array.isArray(r)?s(r.filter(f=>1)):z(s(M(r))):s)}finally{E=T}},V=r=>Array.isArray(r)?r.filter(s=>1).map(V):r instanceof Object?z(M(r).map(([s,f])=>[s,V(f)])):r;return{calc:t,reactive:h,stateFields:g,raw:Y,list:i,replace:S,compact:V}};var ne=(()=>{function m(y){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(y)?y:`"${y}"`}function z(y=""){let v=[];if(y.includes("{{")&&y.includes("}}")){let N=y.indexOf("{{"),k=y.indexOf("}}"),x=y.slice(0,N).trim(),b=y.slice(k+2).trim(),j=y.slice(N+2,k).trim();if(x.length>0&&v.push(JSON.stringify(x)),j.length>0&&v.push(j),b.length>0){let T=z(b).filter(E=>E);b.length>0&&v.push(...T)}}else v.push(JSON.stringify(y));let I=v.filter(N=>N);return I.length===0?[]:I}function M(y,v=new Set,I=!1){if(y.nodeType===3){let l=z(y.nodeValue.trim()).filter(t=>t&&t!='""').join(",");return{tags:v,body:l}}if(!y.tagName)return{tags:v,body:""};if(y.tagName.toLowerCase()==="script"&&!I)return{tags:v,body:""};let N=y.tagName.toLowerCase();v.add(N);let k=[],x={};Array.from(y.attributes).forEach(e=>{x[e.name.trim()]=e.value.trim()}),x.hasOwnProperty("x-tags")&&(x["x-tags"].split(/[\s|,]+/).map(l=>l.trim()).filter(l=>l).forEach(l=>{v.add(l.toLowerCase())}),delete x["x-tags"]),Object.keys(x).forEach(e=>{e.startsWith("x-script")&&(k.push(x[e]),delete x[e])});let b="";x["x-list"]&&(b=x["x-list"]||"",delete x["x-list"]);let j=Object.keys(x).map(e=>{let l=e;return l.startsWith("on:")?`${m(l)}:${x[e]||""}`:`${m(l)}:${JSON.stringify(x[e])}`}).join(","),T=[],E="";N==="script"?E=JSON.stringify(y.textContent):(T=Array.from(y.childNodes).map(e=>M(e,v,I)),E=T.filter(e=>e.body).map(e=>e.body).join(","));let F=N.replace(/-/g,"_"),$="";var a=()=>{if(b){let e=b.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(e){let{k:l,d:t}=e.groups;$=`$list(${F},${t},(${l}) =>${E||""})`}}};Object.keys(x).length>0?($=`${F}({${j}} ${E?","+E:""})`,a()):($=E?`${F}(${E})`:`${F}()`,a());let d=$;return k.length>0&&(d=`()=>{ ${k.join(`
`)} return ${$};}`),{tags:v,body:d}}function p(y,v,I="append",N=!1){let b=new DOMParser().parseFromString(v,"text/html").body;return P(y,b)}function P(y,v,I="append",N=!1){let k=[];for(let T of v.childNodes)k.push(M(T,new Set,N));let x=k.filter(T=>T.tags.size>0),b="";if(x.length>0){let T=new Set;x.forEach(F=>{F.tags.forEach($=>T.add($))}),b=`const {${[...T].map(F=>/-/.test(F)?`"${F}":${F.replace(/-/g,"_")}`:F).join(", ")}}=$tags;`}let j=[b,...x.map(T=>`$insertNodes(${JSON.stringify(I)})(el, ${T.body});`)].join(`
`);new Function("el",`(() => {try {${j}} catch (e) {console.error(e); }})()`)(y)}return{addHtmToElement:p,domToJs:P}})();var ie=m=>{function z(M,p,P={mode:"open"}){window.customElements.define(M,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(y,v){super.setAttribute(y,v),this.attrs[y]&&(this.attrs[y].val=v)}connectedCallback(){let y;m.add(P?this.attachShadow(P):this,p({attr:(v,I)=>this.attrs[v]??=m.state(this.getAttribute(v)??I),mount:v=>y=v,$this:this,children:P?m.tags.slot():[...this.childNodes]})),this.dismount=y?.()}disconnectedCallback(){this.dismount?.()}})}return{define:z}};var ae=m=>{let z=0,{button:M,div:p,header:P,input:y,label:v,span:I,style:N}=m.tags,k=a=>Object.entries(a).map(([d,e])=>`${d}: ${e};`).join(""),x=a=>{},b=Object.getPrototypeOf(m.state(null)),j=a=>Object.getPrototypeOf(a??0)===b?a:m.state(a),T=({value:a,container:d=p,Loading:e,Error:l},t)=>{let n=m.state({status:"pending"});return a.then(h=>n.val={status:"fulfilled",value:h}).catch(h=>n.val={status:"rejected",value:h}),d(()=>n.val.status==="pending"?e?.()??"":n.val.status==="rejected"?l?.(n.val.value):t(n.val.value))},E=()=>++z,F=({title:a,closed:d=m.state(!1),x:e=100,y:l=100,width:t=300,height:n=200,closeCross:h="\xD7",customStacking:g=!1,zIndex:Y=1,disableMove:D=!1,disableResize:L=!1,headerColor:c="lightgray",windowClass:u="",windowStyleOverrides:o={},headerClass:i="",headerStyleOverrides:w={},childrenContainerClass:S="",childrenContainerStyleOverrides:V={},crossClass:r="",crossStyleOverrides:s={},crossHoverClass:f="",crossHoverStyleOverrides:O={}},..._)=>{let C=j(e),A=j(l),J=j(t),W=j(n),H=j(Y);g||(H.val=E());let U=m.state(!1),X=m.state(null),B=m.state(0),K=m.state(0),te=m.state(0),re=m.state(0),Z=f||Object.keys(O)?m.state(!1):null,le=G=>{G.button===0&&(U.val=!0,B.val=G.clientX,K.val=G.clientY,document.body.style.userSelect="none")},Q=G=>q=>{X.val=G,B.val=q.clientX,K.val=q.clientY,te.val=J.val,re.val=W.val,document.body.style.userSelect="none"},de=G=>{if(U.val)C.val+=G.clientX-B.val,A.val+=G.clientY-K.val,B.val=G.clientX,K.val=G.clientY;else if(X.val){let q=G.clientX-B.val,ue=G.clientY-K.val;X.val.includes("right")&&(J.val=te.val+q),X.val.includes("bottom")&&(W.val=re.val+ue)}},ce=()=>{U.val=!1,X.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let G=N({type:"text/css",id:"tjsui-window-style"},x({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(G)}return()=>d.val?null:p({class:["tjsui-window"].concat(u||[]).join(" "),style:()=>k({left:`${C.val}px`,top:`${A.val}px`,width:`${J.val}px`,height:`${W.val}px`,"z-index":H.val,...o}),...g?{}:{onmousedown:()=>H.val=E()}},a?P({class:["tjsui-window-header"].concat(i||[]).join(" "),style:k({"background-color":c,...D?{cursor:"auto"}:{},...w}),...D?{}:{onmousedown:le}},a,h?I({class:()=>["tjsui-window-cross"].concat(r||[]).concat(f&&Z.val?f:[]).join(" "),style:()=>k({...s,...Object.keys(O).length&&Z.val?O:{}}),onclick:()=>d.val=!0,...Z?{onmouseenter:()=>Z.val=!0,onmouseleave:()=>Z.val=!1}:{}},h):null):D?null:p({class:"tjsui-window-dragarea",onmousedown:le}),L?[]:[p({class:"tjsui-window-resize-right",onmousedown:Q("right")}),p({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),p({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],p({class:["tjsui-window-children"].concat(S||[]).join(" "),style:k(V)},_))};class ${_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:d="unset",bottom:e="unset",backgroundColor:l="#333D",fontColor:t="white",fadeOutSec:n=.3,boardClass:h="",boardStyleOverrides:g={},messageClass:Y="",messageStyleOverrides:D={},closerClass:L="",closerStyleOverrides:c={}},u=document.body){let o=k({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:d,bottom:e,left:"50%",transform:"translateX(-50%)","z-index":1e4,...g});this._fadeOutSec=n,this._messageClass=Y,this._messageStylesStr=k({display:"flex","background-color":l,color:t,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${n}s, transform ${n}s`,...D}),this._closerClass=L,this._closerStylesStr=k({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...c}),u.appendChild(this._dom=p({class:h,style:o}))}show({message:d,closer:e,durationSec:l,closed:t=m.state(!1)}){let n=m.state(!1);m.derive(()=>setTimeout(g=>n.val=g,this._fadeOutSec*1e3,t.val));let h=p({class:this._messageClass,style:this._messageStylesStr},p(d),e?p({class:this._closerClass,style:this._closerStylesStr,onclick:()=>t.val=!0},e):null);return m.derive(()=>t.val&&(h.style.opacity="0",h.style.transform="translateY(-20px)")),l&&setTimeout(()=>t.val=!0,l*1e3),m.add(this._dom,()=>n.val?null:h),h}remove(){this._dom.remove()}}return{Await:T,MessageBoard:$,topMostZIndex:E,FloatingWindow:F}};var oe=(m,z)=>{let M=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,p={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},P={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},y=(a="")=>{let d=a.match(M);if(!d)return[];let{p:e,v:l}=d.groups,t=z[e];if(!t)return e=="cf"?l&&(l=[l[0].toLowerCase(),l.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[l])?typeof window.TFL_STYLE_CONFIG[l]=="string"?[window.TFL_STYLE_CONFIG[l]]:window.TFL_STYLE_CONFIG[l]:[]:[];let n=[],h="";if(l&&l.endsWith("!")&&(l=l.substr(0,l.length-1),h="!important"),e.length==a.length&&t.cssText)return typeof t.cssText=="string"?[t.cssText]:Array.isArray(t.cssText)?t.cssText:[];if(t.names&&typeof t.names=="string"&&(n=[t.names]),t.names&&Array.isArray(t.names)&&(n=t.names),e.length==a.length&&t.default&&n.length>0)return n.map(Y=>`${Y}:${t.default}${h}`);if(!l&&typeof t.fn=="function"){let g=t.fn();if(typeof g=="string")return[g];if(Array.isArray(g))return g}if(l){if(!t.default&&!t.cssText&&typeof t.fn=="function"){let o=[l[0].toLowerCase(),l.substr(1)].join(""),i=t.fn(o);if(i)return[i]}let g=/^\{(?<v>.+)\}$/,Y=/^(?<v>--[a-z0-9-]+)$/,D=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,L=l.match(g);if(L){let{v:o}=L.groups;o=o.toLowerCase(),o=o.replace(/[_]+/g,S=>S.length%2==1?" ":S.substr(0,S.length/2));let i=n.map(S=>`${S}:${o}${h}`);return i.every(S=>CSS.supports(S))?i:[]}if(L=l.match(Y),L){let{v:o}=L.groups;return n.map(w=>`${w}:var(${o})${h};`)}if(L=l.match(D),L){let{d1:o,d2:i}=L.groups;if(Number(i)>0){let w=n.map(S=>`${S}:calc(${o} * 100% / ${i})`);if(w.every(S=>CSS.supports(S)))return w}}let c=[l[0].toLowerCase(),l.substr(1)].join(""),u=t.exts&&Object.keys(t.exts).length>0?t.exts[c]:"";if(u)return n.map(i=>`${i}:${u}${h}`);{let o=n.map(i=>`${i}:${c}${h}`);if(o.every(i=>CSS.supports(i)))return o}if(typeof t.fn=="function"){let o=t.fn(c);if(o){let i=n.map(w=>`${w}:${o}${h}`);if(i.every(w=>CSS.supports(w)))return i}}}return[]},v=a=>{let d=y(a);return Array.isArray(d)&&d.length>0?d.join(";"):""},I=a=>{var d=/class="([^"]+)"/g,e=[];return[...a.matchAll(d)].forEach(l=>e=e.concat(l[1].split(" "))),[...new Set(e)]},N=a=>{if(!a)return[];let d=[].concat(...[...a.querySelectorAll("[class]")].map(l=>[...l.classList]));return[...new Set(d)]},k=a=>{let e=(a||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(e){let{m:t,v:n=""}=e.groups,h="";var l=(L,c=!0)=>{if(typeof L=="string"){let u=n.indexOf(L);c&&(u+=1),h=n.substr(u),n=n.substr(0,n.length-h.length)}else{let u=(L||[]).map(o=>[o,n.indexOf(o)]);if(u=u.filter(o=>o[1]>-1),u.length>0){u.sort((i,w)=>i[1]>=w[1]?1:-1);let o=u[0][1];c&&(o+=1),h=n.substr(o),n=n.substr(0,n.length-h.length)}}};n.indexOf("}")>-1?l("}"):l([":","_",">","+","~","*"],!1);let g=v(n);if(!g)return null;let Y=CSS.escape(a),D=h?h.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,L=>L=="_"?" ":["~","+","*",">"].includes(L)?` ${L} `:L):"";return{type:t||"default",ext:!!D,css:`.${Y}${D} {${g}}`,selectorText:`.${Y}${D}`}}return null},x=(a=[])=>a.map(e=>k(e)).filter(e=>e),b=(a,d,e="")=>{if(!e)return!1;if(P[a]&&P[a][d]&&e.length>0){let l=P[a][d];try{l.insertRule(e)}catch(t){console.error(t)}}return!0},j=(a,d,e=[])=>e.length==0?!1:P[a]&&P[a][d]?(P[a][d].replaceSync(e.join(`
`)),!0):!1,T=(a=[])=>{let d=x(a);for(let e of Object.keys(p)){let l=d.filter(g=>g.type==e&&g.ext==!1),t=d.filter(g=>g.type==e&&g.ext==!0),n=l.map(g=>g.css),h=t.map(g=>g.css);if(n.length>0)for(let g of n)p[e][0].has(g)||(p[e][0].add(g),b(e,0,g));if(h.length>0)for(let g of h)p[e][1].has(g)||p[e][1].add(g),b(e,1,g)}},E=a=>{new MutationObserver(d=>{for(let e of d)if(e.type=="attributes"&&e.attributeName=="class"){let t=[...e.target.classList].map(n=>n.trim()).filter(n=>n);typeof a=="function"&&a([...new Set(t)])}else if(e.type=="childList"&&e.addedNodes.length>0){let l=[...e.addedNodes].filter(t=>t.nodeType!=3).map(t=>[...t.classList]).flat(1/0).map(t=>t.trim()).filter(t=>t);typeof a=="function"&&a([...new Set(l)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},F=()=>{let a;return d=>{clearTimeout(a),a=setTimeout(()=>{Object.keys(p).forEach(e=>{let l="tfl-"+e+"-0",t="tfl-"+e+"-1";p[e][0].size>0&&localStorage.setItem(l,JSON.stringify([...p[e][0]])),p[e][1].size>0&&localStorage.setItem(t,JSON.stringify([...p[e][1]]))})},d||0)}};return{loadEventDom:()=>{var a=Object.values(P).flat();let d=new CSSStyleSheet;m&&Array.isArray(m)&&d.replaceSync(m.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,d,...a],Object.keys(p).forEach(t=>{let n="tfl-"+t+"-0",h="tfl-"+t+"-1";if(localStorage.getItem(n))try{p[t][0]=new Set(JSON.parse(localStorage.getItem(n)))}catch{localStorage.removeItem(n)}if(localStorage.getItem(h))try{p[t][1]=new Set(JSON.parse(localStorage.getItem(h)))}catch{localStorage.removeItem(h)}}),Object.keys(p).forEach(t=>{let n=[...p[t][0]],h=[...p[t][1]];j(t,0,n),j(t,1,h)});let e=F(),l=N(document);T(l),E(t=>{T(t),e(1e3)})},renCssFromArray:x}};Object.defineProperty(window,"tjs",{value:{...R,...se(R),...ne,...ie(R),...ae(R),cssFun:oe},writable:!1,configurable:!1,enumerable:!1}),["add","insertNodes","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","domToJs","define","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach(m=>{Object.defineProperty(window,"$"+m,{value:window.tjs[m],writable:!1,configurable:!1,enumerable:!1})});})();

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
