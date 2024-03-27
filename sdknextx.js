let wasm_bindgen;
(()=>{var R=(()=>{let y=Object.getPrototypeOf,j,Y,m,N,D={isConnected:1},g=1e3,$,k={},x=y(D),w=y(y),O,L=(c,u,o,a)=>(c??(setTimeout(o,a),new Set)).add(u),z=(c,u,o)=>{let a=m;m=u;try{return c(o)}catch(v){return console.error(v),o}finally{m=a}},V=c=>c.filter(u=>u._dom?.isConnected),I=c=>$=L($,c,()=>{for(let u of $)u._bindings=V(u._bindings),u._listeners=V(u._listeners);$=O},g),T={get val(){return m?._getters?.add(this),this.rawVal},get oldVal(){return m?._getters?.add(this),this._oldVal},set val(c){m?._setters?.add(this),c!==this.rawVal&&(this.rawVal=c,this._bindings.length+this._listeners.length?(Y?.add(this),j=L(j,this,M)):this._oldVal=c)}},i=c=>Object.create(T,{rawVal:{value:c,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:c,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),d=(c,u)=>{let o={_getters:new Set,_setters:new Set},a={f:c},v=N;N=[];let S=z(c,o,u);S=(S??document).nodeType?S:new Text(S);for(let E of o._getters)o._setters.has(E)||(I(E),E._bindings.push(a));for(let E of N)E._dom=S;return N=v,a._dom=S},l=(c,u=i(),o)=>{let a={_getters:new Set,_setters:new Set},v={f:c,s:u};v._dom=o??N?.push(v)??D,u.val=z(c,a,u.rawVal);for(let S of a._getters)a._setters.has(S)||(I(S),S._listeners.push(v));return u},e=(c="append")=>(u,...o)=>{["append","prepend","before","after","replaceWith","remove","replaceChildren"].includes(c)||(c="append");for(let v of o.flat(1/0)){let S=y(v??0),E=S===T?d(()=>v.val):S===w?d(v):v;E!=O&&u[c](E)}return u},t=e(),n=(c,u,...o)=>{let[a,...v]=y(o[0]??0)===x?o:[{},...o],S=c?document.createElementNS(c,u):document.createElement(u);for(let[E,r]of Object.entries(a)){let s=P=>P?Object.getOwnPropertyDescriptor(P,E)??s(y(P)):O,f=u+","+E,C=k[f]??(k[f]=s(y(S))?.set??0),b=E.startsWith("on:")?(P,J)=>{let W=E.slice(3);S.removeEventListener(W,J),S.addEventListener(W,P)}:C?C.bind(S):S.setAttribute.bind(S,E),_=y(r??0);E.startsWith("on:")||_===w&&(r=l(r),_=T),_===T?d(()=>(b(r.val,r._oldVal),S)):b(r)}return t(S,...v)},p=c=>({get:(u,o)=>n.bind(O,c,o)}),h=new Proxy(c=>new Proxy(n,p(c)),p()),F=(c,u)=>u?u!==c&&c.replaceWith(u):c.remove(),M=()=>{let c=0,u=[...j].filter(a=>a.rawVal!==a._oldVal);do{Y=new Set;for(let a of new Set(u.flatMap(v=>v._listeners=V(v._listeners))))l(a.f,a.s,a._dom),a._dom=O}while(++c<100&&(u=[...Y]).length);let o=[...j].filter(a=>a.rawVal!==a._oldVal);j=O;for(let a of new Set(o.flatMap(v=>v._bindings=V(v._bindings))))F(a._dom,d(a.f,a._dom)),a._dom=O;for(let a of o)a._oldVal=a.rawVal};return{add:t,insertNodes:e,tags:h,state:i,derive:l,hydrate:(c,u)=>F(c,d(u,c))}})();var se=y=>{let{fromEntries:j,entries:Y,keys:m}=Object,{get:N,set:D,deleteProperty:g,ownKeys:$}=Reflect,{state:k,derive:x,add:w}=y,O,L=1e3,z,V,I=Symbol(),T=Symbol(),i=Symbol(),d=Symbol(),l=Symbol(),e=Symbol(),t=r=>(r[i]=1,r),n=r=>{if(r?.[i]){let s=k();return x(()=>{let f=r();s.rawVal instanceof Object&&f instanceof Object?S(s.rawVal,f):s.val=p(f)}),s}else return k(p(r))},p=r=>!(r instanceof Object)||r[T]?r:new Proxy((r[I]=r,r[T]=j(Y(r).map(([s,f])=>[s,n(f)])),r[d]=[],r[l]=k(1),r),{get:(s,f,C)=>s[T].hasOwnProperty(f)?s[T][f].val:(f==="length"&&s[l].val,N(s,f,C)),set(s,f,C,b){let _=s[T];if(_.hasOwnProperty(f))return _[f].val=p(C),1;let P=f in s,J=P&&f==="length"&&C!==s.length;if(D(s,f,C))return P?J&&++s[l].val:D(_,f,n(C))&&(++s[l].val,c(b,f,_[f])),1},deleteProperty:(s,f)=>(g(s[T],f)&&u(s,f),g(s,f)&&++s[l].val),ownKeys:s=>(s[l].val,$(s))}),h=r=>r[T],F=r=>r[T]?new Proxy(r[T],{get:(s,f)=>F(s[f].rawVal)}):r,M=r=>r[d]=r[d].filter(s=>s._containerDom.isConnected),A=(r,s,f,C,{_containerDom:b,f:_})=>{let P=Array.isArray(r);if(w(b,()=>b[e][s]=_(f,()=>delete r[s],P?Number(s):s)),P&&!C&&s!=r.length-1){let J=Number(s);b.insertBefore(b.lastChild,b[e][m(r).find(W=>Number(W)>J)])}},c=(r,s,f)=>M(r).forEach(A.bind(z,r,s,f,V)),u=(r,s)=>{for(let f of M(r)){let C=f._containerDom[e];C[s]?.remove(),delete C[s]}},o=r=>(O??(O=(setTimeout(()=>(O.forEach(M),O=z),L),new Set))).add(r),a=(r,s,f)=>{let C={_containerDom:r instanceof Function?r():r,f};C._containerDom[e]={},s[d].push(C),o(s);for(let[b,_]of Y(s[T]))A(s,b,_,1,C);return C._containerDom},v=(r,s)=>{for(let[b,_]of Y(s)){let P=r[b];P instanceof Object&&_ instanceof Object?v(P,_):r[b]=_}for(let b in r)s.hasOwnProperty(b)||delete r[b];let f=m(s),C=Array.isArray(r);if(C||m(r).some((b,_)=>b!==f[_])){if(C)r.length=s.length;else{++r[l].val;let b=r[I],_={...b};for(let P of f)delete b[P];for(let P of f)b[P]=_[P]}for(let{_containerDom:b}of M(r)){let{firstChild:_,[e]:P}=b;for(let J of f)_===P[J]?_=_.nextSibling:b.insertBefore(P[J],_)}}return r},S=(r,s)=>{V=1;try{return v(r,s instanceof Function?Array.isArray(r)?s(r.filter(f=>1)):j(s(Y(r))):s)}finally{V=z}},E=r=>Array.isArray(r)?r.filter(s=>1).map(E):r instanceof Object?j(Y(r).map(([s,f])=>[s,E(f)])):r;return{calc:t,reactive:p,stateFields:h,raw:F,list:a,replace:S,compact:E}};var ne=(()=>{function y(g){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(g)?g:`"${g}"`}function j(g=""){let $=[];if(g.includes("{{")&&g.includes("}}")){let x=g.indexOf("{{"),w=g.indexOf("}}"),O=g.slice(0,x).trim(),L=g.slice(w+2).trim(),z=g.slice(x+2,w).trim();if(O.length>0&&$.push(JSON.stringify(O)),z.length>0&&$.push(z),L.length>0){let V=j(L).filter(I=>I);L.length>0&&$.push(...V)}}else $.push(JSON.stringify(g));let k=$.filter(x=>x);return k.length===0?[]:k}function Y(g,$=!1){if(g.nodeType===3)return j(g.nodeValue.trim()).filter(n=>n&&n!='""').join(",");if(!g.tagName||g.tagName.toLowerCase()==="script"&&!$)return"";let k=g.tagName.toLowerCase(),x=[],w={};if(Array.from(g.attributes).forEach(e=>{w[e.name.trim()]=e.value.trim()}),w.hasOwnProperty("x-tags")&&delete w["x-tags"],w.hasOwnProperty("x-script")){let e="x-script";x.push(w[e]),delete w[e]}let O=w.hasOwnProperty("x-include")?(()=>{let e=w.hasOwnProperty("x-params")?w["x-params"]:"",t="";e[0]=="["&&e[e.length-1]=="]"&&(delete w["x-params"],e=e.slice(1,e.length-1),e=e.split(",").map(F=>F.trim()).join(","),t=e.split(",").map(F=>`"${F}"`).join(","));let p=w["x-include"],h=`$Await({value: fetch(${JSON.stringify(p)}).then(response => response.text()).then(data => $htmlToTjs(data, true))}, p => $tags["div"](p.map(m=>new Function(${t?t+",":""} "return " + m)(${t?e:""})())) )`;return delete w["x-include"],h})():"";w.hasOwnProperty("x-params")&&delete w["x-params"];let L=w.hasOwnProperty("x-list")?(()=>{let e=w["x-list"]||"";return delete w["x-list"],e})():"",z=Object.keys(w).map(e=>{let t=e;return t.startsWith("on:")?`${y(t)}:${w[e]||""}`:`${y(t)}:${JSON.stringify(w[e])}`}).join(","),V=[],I="";k==="script"?I=JSON.stringify(g.textContent):O||(V=Array.from(g.childNodes).map(e=>Y(e,$)),I=V.filter(e=>e).join(","));let T=`$tags["${k}"]`,i="";var d=()=>{if(L){let e=L.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(e){let{k:t,d:n}=e.groups;i=`$list(${T},${n},(${t}) =>${I||""})`}}O&&(z?i=`${T}({${z}},${O})`:i=`${T}(${O})`)};Object.keys(w).length>0?(i=`${T}({${z}} ${I?","+I:""})`,d()):(i=I?`${T}(${I})`:`${T}()`,d());let l=i;return x.length>0&&(l=`()=>{${x.join(" ")} return ${i};}`),l}function m(g,$="append",k,x=!1){return $insertNodes($)(g,N(k,x).map(w=>new Function("return "+w)()))}function N(g,$=!1){let w=new DOMParser().parseFromString(g,"text/html").body;return D(w,$)}function D(g,$=!1){let k=[];for(let x of g.childNodes)k.push(Y(x,$));return k=k.filter(x=>x),k}return{addHtmToElement:m,htmlToTjs:N,domToTjs:D}})();var ie=y=>{function j(Y,m,N={mode:"open"}){window.customElements.define(Y,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(D,g){super.setAttribute(D,g),this.attrs[D]&&(this.attrs[D].val=g)}connectedCallback(){let D;y.add(N?this.attachShadow(N):this,m({attr:(g,$)=>this.attrs[g]??=y.state(this.getAttribute(g)??$),mount:g=>D=g,$this:this,children:N?y.tags.slot():[...this.childNodes]})),this.dismount=D?.()}disconnectedCallback(){this.dismount?.()}})}return{define:j}};var ae=y=>{let j=0,{button:Y,div:m,header:N,input:D,label:g,span:$,style:k}=y.tags,x=i=>Object.entries(i).map(([d,l])=>`${d}: ${l};`).join(""),w=i=>{},O=Object.getPrototypeOf(y.state(null)),L=i=>Object.getPrototypeOf(i??0)===O?i:y.state(i),z=({value:i,container:d=m,Loading:l,Error:e},t)=>{let n=y.state({status:"pending"});return i.then(p=>{n.val={status:"fulfilled",value:p}}).catch(p=>n.val={status:"rejected",value:p}),d(()=>n.val.status==="pending"?l?.()??"":n.val.status==="rejected"?e?.(n.val.value):t(n.val.value))},V=()=>++j,I=({title:i,closed:d=y.state(!1),x:l=100,y:e=100,width:t=300,height:n=200,closeCross:p="\xD7",customStacking:h=!1,zIndex:F=1,disableMove:M=!1,disableResize:A=!1,headerColor:c="lightgray",windowClass:u="",windowStyleOverrides:o={},headerClass:a="",headerStyleOverrides:v={},childrenContainerClass:S="",childrenContainerStyleOverrides:E={},crossClass:r="",crossStyleOverrides:s={},crossHoverClass:f="",crossHoverStyleOverrides:C={}},...b)=>{let _=L(l),P=L(e),J=L(t),W=L(n),H=L(F);h||(H.val=V());let U=y.state(!1),X=y.state(null),B=y.state(0),K=y.state(0),te=y.state(0),re=y.state(0),Z=f||Object.keys(C)?y.state(!1):null,le=G=>{G.button===0&&(U.val=!0,B.val=G.clientX,K.val=G.clientY,document.body.style.userSelect="none")},Q=G=>q=>{X.val=G,B.val=q.clientX,K.val=q.clientY,te.val=J.val,re.val=W.val,document.body.style.userSelect="none"},de=G=>{if(U.val)_.val+=G.clientX-B.val,P.val+=G.clientY-K.val,B.val=G.clientX,K.val=G.clientY;else if(X.val){let q=G.clientX-B.val,ue=G.clientY-K.val;X.val.includes("right")&&(J.val=te.val+q),X.val.includes("bottom")&&(W.val=re.val+ue)}},ce=()=>{U.val=!1,X.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let G=k({type:"text/css",id:"tjsui-window-style"},w({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(G)}return()=>d.val?null:m({class:["tjsui-window"].concat(u||[]).join(" "),style:()=>x({left:`${_.val}px`,top:`${P.val}px`,width:`${J.val}px`,height:`${W.val}px`,"z-index":H.val,...o}),...h?{}:{onmousedown:()=>H.val=V()}},i?N({class:["tjsui-window-header"].concat(a||[]).join(" "),style:x({"background-color":c,...M?{cursor:"auto"}:{},...v}),...M?{}:{onmousedown:le}},i,p?$({class:()=>["tjsui-window-cross"].concat(r||[]).concat(f&&Z.val?f:[]).join(" "),style:()=>x({...s,...Object.keys(C).length&&Z.val?C:{}}),onclick:()=>d.val=!0,...Z?{onmouseenter:()=>Z.val=!0,onmouseleave:()=>Z.val=!1}:{}},p):null):M?null:m({class:"tjsui-window-dragarea",onmousedown:le}),A?[]:[m({class:"tjsui-window-resize-right",onmousedown:Q("right")}),m({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),m({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],m({class:["tjsui-window-children"].concat(S||[]).join(" "),style:x(E)},b))};class T{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:d="unset",bottom:l="unset",backgroundColor:e="#333D",fontColor:t="white",fadeOutSec:n=.3,boardClass:p="",boardStyleOverrides:h={},messageClass:F="",messageStyleOverrides:M={},closerClass:A="",closerStyleOverrides:c={}},u=document.body){let o=x({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:d,bottom:l,left:"50%",transform:"translateX(-50%)","z-index":1e4,...h});this._fadeOutSec=n,this._messageClass=F,this._messageStylesStr=x({display:"flex","background-color":e,color:t,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${n}s, transform ${n}s`,...M}),this._closerClass=A,this._closerStylesStr=x({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...c}),u.appendChild(this._dom=m({class:p,style:o}))}show({message:d,closer:l,durationSec:e,closed:t=y.state(!1)}){let n=y.state(!1);y.derive(()=>setTimeout(h=>n.val=h,this._fadeOutSec*1e3,t.val));let p=m({class:this._messageClass,style:this._messageStylesStr},m(d),l?m({class:this._closerClass,style:this._closerStylesStr,onclick:()=>t.val=!0},l):null);return y.derive(()=>t.val&&(p.style.opacity="0",p.style.transform="translateY(-20px)")),e&&setTimeout(()=>t.val=!0,e*1e3),y.add(this._dom,()=>n.val?null:p),p}remove(){this._dom.remove()}}return{Await:z,MessageBoard:T,topMostZIndex:V,FloatingWindow:I}};var oe=(y,j)=>{let Y=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,m={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},N={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},D=(i="")=>{let d=i.match(Y);if(!d)return[];let{p:l,v:e}=d.groups,t=j[l];if(!t)return l=="cf"?e&&(e=[e[0].toLowerCase(),e.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[e])?typeof window.TFL_STYLE_CONFIG[e]=="string"?[window.TFL_STYLE_CONFIG[e]]:window.TFL_STYLE_CONFIG[e]:[]:[];let n=[],p="";if(e&&e.endsWith("!")&&(e=e.substr(0,e.length-1),p="!important"),l.length==i.length&&t.cssText)return typeof t.cssText=="string"?[t.cssText]:Array.isArray(t.cssText)?t.cssText:[];if(t.names&&typeof t.names=="string"&&(n=[t.names]),t.names&&Array.isArray(t.names)&&(n=t.names),l.length==i.length&&t.default&&n.length>0)return n.map(F=>`${F}:${t.default}${p}`);if(!e&&typeof t.fn=="function"){let h=t.fn();if(typeof h=="string")return[h];if(Array.isArray(h))return h}if(e){if(!t.default&&!t.cssText&&typeof t.fn=="function"){let o=[e[0].toLowerCase(),e.substr(1)].join(""),a=t.fn(o);if(a)return[a]}let h=/^\{(?<v>.+)\}$/,F=/^(?<v>--[a-z0-9-]+)$/,M=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,A=e.match(h);if(A){let{v:o}=A.groups;o=o.toLowerCase(),o=o.replace(/[_]+/g,S=>S.length%2==1?" ":S.substr(0,S.length/2));let a=n.map(S=>`${S}:${o}${p}`);return a.every(S=>CSS.supports(S))?a:[]}if(A=e.match(F),A){let{v:o}=A.groups;return n.map(v=>`${v}:var(${o})${p};`)}if(A=e.match(M),A){let{d1:o,d2:a}=A.groups;if(Number(a)>0){let v=n.map(S=>`${S}:calc(${o} * 100% / ${a})`);if(v.every(S=>CSS.supports(S)))return v}}let c=[e[0].toLowerCase(),e.substr(1)].join(""),u=t.exts&&Object.keys(t.exts).length>0?t.exts[c]:"";if(u)return n.map(a=>`${a}:${u}${p}`);{let o=n.map(a=>`${a}:${c}${p}`);if(o.every(a=>CSS.supports(a)))return o}if(typeof t.fn=="function"){let o=t.fn(c);if(o){let a=n.map(v=>`${v}:${o}${p}`);if(a.every(v=>CSS.supports(v)))return a}}}return[]},g=i=>{let d=D(i);return Array.isArray(d)&&d.length>0?d.join(";"):""},$=i=>{var d=/class="([^"]+)"/g,l=[];return[...i.matchAll(d)].forEach(e=>l=l.concat(e[1].split(" "))),[...new Set(l)]},k=i=>{if(!i)return[];let d=[].concat(...[...i.querySelectorAll("[class]")].map(e=>[...e.classList]));return[...new Set(d)]},x=i=>{let l=(i||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(l){let{m:t,v:n=""}=l.groups,p="";var e=(A,c=!0)=>{if(typeof A=="string"){let u=n.indexOf(A);c&&(u+=1),p=n.substr(u),n=n.substr(0,n.length-p.length)}else{let u=(A||[]).map(o=>[o,n.indexOf(o)]);if(u=u.filter(o=>o[1]>-1),u.length>0){u.sort((a,v)=>a[1]>=v[1]?1:-1);let o=u[0][1];c&&(o+=1),p=n.substr(o),n=n.substr(0,n.length-p.length)}}};n.indexOf("}")>-1?e("}"):e([":","_",">","+","~","*"],!1);let h=g(n);if(!h)return null;let F=CSS.escape(i),M=p?p.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,A=>A=="_"?" ":["~","+","*",">"].includes(A)?` ${A} `:A):"";return{type:t||"default",ext:!!M,css:`.${F}${M} {${h}}`,selectorText:`.${F}${M}`}}return null},w=(i=[])=>i.map(l=>x(l)).filter(l=>l),O=(i,d,l="")=>{if(!l)return!1;if(N[i]&&N[i][d]&&l.length>0){let e=N[i][d];try{e.insertRule(l)}catch(t){console.error(t)}}return!0},L=(i,d,l=[])=>l.length==0?!1:N[i]&&N[i][d]?(N[i][d].replaceSync(l.join("")),!0):!1,z=(i=[])=>{let d=w(i);for(let l of Object.keys(m)){let e=d.filter(h=>h.type==l&&h.ext==!1),t=d.filter(h=>h.type==l&&h.ext==!0),n=e.map(h=>h.css),p=t.map(h=>h.css);if(n.length>0)for(let h of n)m[l][0].has(h)||(m[l][0].add(h),O(l,0,h));if(p.length>0)for(let h of p)m[l][1].has(h)||m[l][1].add(h),O(l,1,h)}},V=i=>{new MutationObserver(d=>{for(let l of d)if(l.type=="attributes"&&l.attributeName=="class"){let t=[...l.target.classList].map(n=>n.trim()).filter(n=>n);typeof i=="function"&&i([...new Set(t)])}else if(l.type=="childList"&&l.addedNodes.length>0){let e=[...l.addedNodes].filter(t=>t.nodeType!=3).map(t=>[...t.classList]).flat(1/0).map(t=>t.trim()).filter(t=>t);typeof i=="function"&&i([...new Set(e)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},I=()=>{let i;return d=>{clearTimeout(i),i=setTimeout(()=>{Object.keys(m).forEach(l=>{let e="tfl-"+l+"-0",t="tfl-"+l+"-1";m[l][0].size>0&&localStorage.setItem(e,JSON.stringify([...m[l][0]])),m[l][1].size>0&&localStorage.setItem(t,JSON.stringify([...m[l][1]]))})},d||0)}};return{loadEventDom:()=>{var i=Object.values(N).flat();let d=new CSSStyleSheet;y&&Array.isArray(y)&&d.replaceSync(y.join("")),document.adoptedStyleSheets=[...document.adoptedStyleSheets,d,...i],Object.keys(m).forEach(t=>{let n="tfl-"+t+"-0",p="tfl-"+t+"-1";if(localStorage.getItem(n))try{m[t][0]=new Set(JSON.parse(localStorage.getItem(n)))}catch{localStorage.removeItem(n)}if(localStorage.getItem(p))try{m[t][1]=new Set(JSON.parse(localStorage.getItem(p)))}catch{localStorage.removeItem(p)}}),Object.keys(m).forEach(t=>{let n=[...m[t][0]],p=[...m[t][1]];L(t,0,n),L(t,1,p)});let l=I(),e=k(document);z(e),V(t=>{z(t),l(1e3)})},renCssFromArray:w}};Object.defineProperty(window,"tjs",{value:{...R,...se(R),...ne,...ie(R),...ae(R),cssFun:oe},writable:!1,configurable:!1,enumerable:!1}),["add","insertNodes","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","htmlToTjs","domToTjs","define","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach(y=>{Object.defineProperty(window,"$"+y,{value:window.tjs[y],writable:!1,configurable:!1,enumerable:!1})});})();
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
