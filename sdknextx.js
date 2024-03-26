let wasm_bindgen;
(()=>{var R=(()=>{let m=Object.getPrototypeOf,j,D,p,P,y={isConnected:1},x=1e3,N,k={},v=m(y),F=m(m),T,_=(c,u,d,a)=>(c??(setTimeout(d,a),new Set)).add(u),L=(c,u,d)=>{let a=p;p=u;try{return c(d)}catch(w){return console.error(w),d}finally{p=a}},C=c=>c.filter(u=>u._dom?.isConnected),M=c=>N=_(N,c,()=>{for(let u of N)u._bindings=C(u._bindings),u._listeners=C(u._listeners);N=T},x),V={get val(){return p?._getters?.add(this),this.rawVal},get oldVal(){return p?._getters?.add(this),this._oldVal},set val(c){p?._setters?.add(this),c!==this.rawVal&&(this.rawVal=c,this._bindings.length+this._listeners.length?(D?.add(this),j=_(j,this,z)):this._oldVal=c)}},o=c=>Object.create(V,{rawVal:{value:c,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:c,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),r=(c,u)=>{let d={_getters:new Set,_setters:new Set},a={f:c},w=P;P=[];let S=L(c,d,u);S=(S??document).nodeType?S:new Text(S);for(let I of d._getters)d._setters.has(I)||(M(I),I._bindings.push(a));for(let I of P)I._dom=S;return P=w,a._dom=S},e=(c,u=o(),d)=>{let a={_getters:new Set,_setters:new Set},w={f:c,s:u};w._dom=d??P?.push(w)??y,u.val=L(c,a,u.rawVal);for(let S of a._getters)a._setters.has(S)||(M(S),S._listeners.push(w));return u},n=(c="append")=>(u,...d)=>{["append","prepend","before","after","replaceWith","remove","replaceChildren"].includes(c)||(c="append");for(let w of d.flat(1/0)){let S=m(w??0),I=S===V?r(()=>w.val):S===F?r(w):w;I!=T&&u[c](I)}return u},l=n(),i=(c,u,...d)=>{let[a,...w]=m(d[0]??0)===v?d:[{},...d],S=c?document.createElementNS(c,u):document.createElement(u);for(let[I,t]of Object.entries(a)){let s=A=>A?Object.getOwnPropertyDescriptor(A,I)??s(m(A)):T,f=u+","+I,O=k[f]??(k[f]=s(m(S))?.set??0),b=I.startsWith("on:")?(A,J)=>{let W=I.slice(3);typeof J=="function"&&S.removeEventListener(W,J)(typeof A=="function")&&S.addEventListener(W,A)}:O?O.bind(S):S.setAttribute.bind(S,I),$=m(t??0);I.startsWith("on:")||$===F&&(t=e(t),$=V),$===V?r(()=>(b(t.val,t._oldVal),S)):b(t)}return l(S,...w)},h=c=>({get:(u,d)=>i.bind(T,c,d)}),g=new Proxy(c=>new Proxy(i,h(c)),h()),Y=(c,u)=>u?u!==c&&c.replaceWith(u):c.remove(),z=()=>{let c=0,u=[...j].filter(a=>a.rawVal!==a._oldVal);do{D=new Set;for(let a of new Set(u.flatMap(w=>w._listeners=C(w._listeners))))e(a.f,a.s,a._dom),a._dom=T}while(++c<100&&(u=[...D]).length);let d=[...j].filter(a=>a.rawVal!==a._oldVal);j=T;for(let a of new Set(d.flatMap(w=>w._bindings=C(w._bindings))))Y(a._dom,r(a.f,a._dom)),a._dom=T;for(let a of d)a._oldVal=a.rawVal};return{add:l,insertNodes:n,tags:g,state:o,derive:e,hydrate:(c,u)=>Y(c,r(u,c))}})();var se=m=>{let{fromEntries:j,entries:D,keys:p}=Object,{get:P,set:y,deleteProperty:x,ownKeys:N}=Reflect,{state:k,derive:v,add:F}=m,T,_=1e3,L,C,M=Symbol(),V=Symbol(),o=Symbol(),r=Symbol(),e=Symbol(),n=Symbol(),l=t=>(t[o]=1,t),i=t=>{if(t?.[o]){let s=k();return v(()=>{let f=t();s.rawVal instanceof Object&&f instanceof Object?S(s.rawVal,f):s.val=h(f)}),s}else return k(h(t))},h=t=>!(t instanceof Object)||t[V]?t:new Proxy((t[M]=t,t[V]=j(D(t).map(([s,f])=>[s,i(f)])),t[r]=[],t[e]=k(1),t),{get:(s,f,O)=>s[V].hasOwnProperty(f)?s[V][f].val:(f==="length"&&s[e].val,P(s,f,O)),set(s,f,O,b){let $=s[V];if($.hasOwnProperty(f))return $[f].val=h(O),1;let A=f in s,J=A&&f==="length"&&O!==s.length;if(y(s,f,O))return A?J&&++s[e].val:y($,f,i(O))&&(++s[e].val,c(b,f,$[f])),1},deleteProperty:(s,f)=>(x(s[V],f)&&u(s,f),x(s,f)&&++s[e].val),ownKeys:s=>(s[e].val,N(s))}),g=t=>t[V],Y=t=>t[V]?new Proxy(t[V],{get:(s,f)=>Y(s[f].rawVal)}):t,z=t=>t[r]=t[r].filter(s=>s._containerDom.isConnected),E=(t,s,f,O,{_containerDom:b,f:$})=>{let A=Array.isArray(t);if(F(b,()=>b[n][s]=$(f,()=>delete t[s],A?Number(s):s)),A&&!O&&s!=t.length-1){let J=Number(s);b.insertBefore(b.lastChild,b[n][p(t).find(W=>Number(W)>J)])}},c=(t,s,f)=>z(t).forEach(E.bind(L,t,s,f,C)),u=(t,s)=>{for(let f of z(t)){let O=f._containerDom[n];O[s]?.remove(),delete O[s]}},d=t=>(T??(T=(setTimeout(()=>(T.forEach(z),T=L),_),new Set))).add(t),a=(t,s,f)=>{let O={_containerDom:t instanceof Function?t():t,f};O._containerDom[n]={},s[r].push(O),d(s);for(let[b,$]of D(s[V]))E(s,b,$,1,O);return O._containerDom},w=(t,s)=>{for(let[b,$]of D(s)){let A=t[b];A instanceof Object&&$ instanceof Object?w(A,$):t[b]=$}for(let b in t)s.hasOwnProperty(b)||delete t[b];let f=p(s),O=Array.isArray(t);if(O||p(t).some((b,$)=>b!==f[$])){if(O)t.length=s.length;else{++t[e].val;let b=t[M],$={...b};for(let A of f)delete b[A];for(let A of f)b[A]=$[A]}for(let{_containerDom:b}of z(t)){let{firstChild:$,[n]:A}=b;for(let J of f)$===A[J]?$=$.nextSibling:b.insertBefore(A[J],$)}}return t},S=(t,s)=>{C=1;try{return w(t,s instanceof Function?Array.isArray(t)?s(t.filter(f=>1)):j(s(D(t))):s)}finally{C=L}},I=t=>Array.isArray(t)?t.filter(s=>1).map(I):t instanceof Object?j(D(t).map(([s,f])=>[s,I(f)])):t;return{calc:l,reactive:h,stateFields:g,raw:Y,list:a,replace:S,compact:I}};var ne=(()=>{function m(y){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(y)?y:`"${y}"`}function j(y=""){let x=[];if(y.includes("{{")&&y.includes("}}")){let k=y.indexOf("{{"),v=y.indexOf("}}"),F=y.slice(0,k).trim(),T=y.slice(v+2).trim(),_=y.slice(k+2,v).trim();if(F.length>0&&x.push(JSON.stringify(F)),_.length>0&&x.push(_),T.length>0){let L=j(T).filter(C=>C);T.length>0&&x.push(...L)}}else x.push(JSON.stringify(y));let N=x.filter(k=>k);return N.length===0?[]:N}function D(y,x=new Set){if(y.nodeType===3){let e=j(y.nodeValue.trim()).filter(n=>n&&n!='""').join(",");return{tags:x,body:e}}if(!y.tagName)return{tags:x,body:""};let N=y.tagName.toLowerCase();x.add(N);let k=[],v={};Array.from(y.attributes).forEach(r=>{v[r.name.trim()]=r.value.trim()}),v.hasOwnProperty("x-tags")&&(v["x-tags"].split(/[\s|,]+/).map(e=>e.trim()).filter(e=>e).forEach(e=>{x.add(e.toLowerCase())}),delete v["x-tags"]),Object.keys(v).forEach(r=>{r.startsWith("x-script")&&(k.push(v[r]),delete v[r])});let F="";v["x-list"]&&(F=v["x-list"]||"",delete v["x-list"]);let T=Object.keys(v).map(r=>{let e=r;return e.startsWith("on:")?`${m(e)}:${v[r]||""}`:`${m(e)}:${JSON.stringify(v[r])}`}).join(","),_=[],L="";N==="script"?L=JSON.stringify(y.textContent):(_=Array.from(y.childNodes).map(r=>D(r,x)),L=_.filter(r=>r.body).map(r=>r.body).join(","));let C=N.replace(/-/g,"_"),M="";var V=()=>{if(F){let r=F.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(r){let{k:e,d:n}=r.groups;M=`$list(${C},${n},(${e}) =>${L||""})`}}};Object.keys(v).length>0?(M=`${C}({${T}} ${L?","+L:""})`,V()):(M=L?`${C}(${L})`:`${C}()`,V());let o=M;return k.length>0&&(o=`()=>{ ${k.join(`
`)} return ${M};}`),{tags:x,body:o}}function p(y,x,N="append"){let F=new DOMParser().parseFromString(x,"text/html").body;return P(y,F)}function P(y,x,N="append"){let k=[];for(let _ of x.childNodes)k.push(D(_));let v=k.filter(_=>_.tags.size>0),F="";if(v.length>0){let _=new Set;v.forEach(C=>{C.tags.forEach(M=>_.add(M))}),F=`const {${[..._].map(C=>/-/.test(C)?`"${C}":${C.replace(/-/g,"_")}`:C).join(", ")}}=$tags;`}let T=[F,...v.map(_=>`$insertNodes(${N})(el, ${_.body});`)].join(`
`);new Function("el",`(() => {try {${T}} catch (e) {console.error(e); }})()`)(y)}return{addHtmToElement:p,domToJs:P}})();var ie=m=>{function j(D,p,P={mode:"open"}){window.customElements.define(D,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(y,x){super.setAttribute(y,x),this.attrs[y]&&(this.attrs[y].val=x)}connectedCallback(){let y;m.add(P?this.attachShadow(P):this,p({attr:(x,N)=>this.attrs[x]??=m.state(this.getAttribute(x)??N),mount:x=>y=x,$this:this,children:P?m.tags.slot():[...this.childNodes]})),this.dismount=y?.()}disconnectedCallback(){this.dismount?.()}})}return{define:j}};var ae=m=>{let j=0,{button:D,div:p,header:P,input:y,label:x,span:N,style:k}=m.tags,v=o=>Object.entries(o).map(([r,e])=>`${r}: ${e};`).join(""),F=o=>{},T=Object.getPrototypeOf(m.state(null)),_=o=>Object.getPrototypeOf(o??0)===T?o:m.state(o),L=({value:o,container:r=p,Loading:e,Error:n},l)=>{let i=m.state({status:"pending"});return o.then(h=>i.val={status:"fulfilled",value:h}).catch(h=>i.val={status:"rejected",value:h}),r(()=>i.val.status==="pending"?e?.()??"":i.val.status==="rejected"?n?.(i.val.value):l(i.val.value))},C=()=>++j,M=({title:o,closed:r=m.state(!1),x:e=100,y:n=100,width:l=300,height:i=200,closeCross:h="\xD7",customStacking:g=!1,zIndex:Y=1,disableMove:z=!1,disableResize:E=!1,headerColor:c="lightgray",windowClass:u="",windowStyleOverrides:d={},headerClass:a="",headerStyleOverrides:w={},childrenContainerClass:S="",childrenContainerStyleOverrides:I={},crossClass:t="",crossStyleOverrides:s={},crossHoverClass:f="",crossHoverStyleOverrides:O={}},...b)=>{let $=_(e),A=_(n),J=_(l),W=_(i),H=_(Y);g||(H.val=C());let U=m.state(!1),X=m.state(null),B=m.state(0),K=m.state(0),te=m.state(0),re=m.state(0),Z=f||Object.keys(O)?m.state(!1):null,le=G=>{G.button===0&&(U.val=!0,B.val=G.clientX,K.val=G.clientY,document.body.style.userSelect="none")},Q=G=>q=>{X.val=G,B.val=q.clientX,K.val=q.clientY,te.val=J.val,re.val=W.val,document.body.style.userSelect="none"},de=G=>{if(U.val)$.val+=G.clientX-B.val,A.val+=G.clientY-K.val,B.val=G.clientX,K.val=G.clientY;else if(X.val){let q=G.clientX-B.val,ue=G.clientY-K.val;X.val.includes("right")&&(J.val=te.val+q),X.val.includes("bottom")&&(W.val=re.val+ue)}},ce=()=>{U.val=!1,X.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let G=k({type:"text/css",id:"tjsui-window-style"},F({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(G)}return()=>r.val?null:p({class:["tjsui-window"].concat(u||[]).join(" "),style:()=>v({left:`${$.val}px`,top:`${A.val}px`,width:`${J.val}px`,height:`${W.val}px`,"z-index":H.val,...d}),...g?{}:{onmousedown:()=>H.val=C()}},o?P({class:["tjsui-window-header"].concat(a||[]).join(" "),style:v({"background-color":c,...z?{cursor:"auto"}:{},...w}),...z?{}:{onmousedown:le}},o,h?N({class:()=>["tjsui-window-cross"].concat(t||[]).concat(f&&Z.val?f:[]).join(" "),style:()=>v({...s,...Object.keys(O).length&&Z.val?O:{}}),onclick:()=>r.val=!0,...Z?{onmouseenter:()=>Z.val=!0,onmouseleave:()=>Z.val=!1}:{}},h):null):z?null:p({class:"tjsui-window-dragarea",onmousedown:le}),E?[]:[p({class:"tjsui-window-resize-right",onmousedown:Q("right")}),p({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),p({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],p({class:["tjsui-window-children"].concat(S||[]).join(" "),style:v(I)},b))};class V{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:r="unset",bottom:e="unset",backgroundColor:n="#333D",fontColor:l="white",fadeOutSec:i=.3,boardClass:h="",boardStyleOverrides:g={},messageClass:Y="",messageStyleOverrides:z={},closerClass:E="",closerStyleOverrides:c={}},u=document.body){let d=v({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:r,bottom:e,left:"50%",transform:"translateX(-50%)","z-index":1e4,...g});this._fadeOutSec=i,this._messageClass=Y,this._messageStylesStr=v({display:"flex","background-color":n,color:l,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${i}s, transform ${i}s`,...z}),this._closerClass=E,this._closerStylesStr=v({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...c}),u.appendChild(this._dom=p({class:h,style:d}))}show({message:r,closer:e,durationSec:n,closed:l=m.state(!1)}){let i=m.state(!1);m.derive(()=>setTimeout(g=>i.val=g,this._fadeOutSec*1e3,l.val));let h=p({class:this._messageClass,style:this._messageStylesStr},p(r),e?p({class:this._closerClass,style:this._closerStylesStr,onclick:()=>l.val=!0},e):null);return m.derive(()=>l.val&&(h.style.opacity="0",h.style.transform="translateY(-20px)")),n&&setTimeout(()=>l.val=!0,n*1e3),m.add(this._dom,()=>i.val?null:h),h}remove(){this._dom.remove()}}return{Await:L,MessageBoard:V,topMostZIndex:C,FloatingWindow:M}};var oe=(m,j)=>{let D=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,p={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},P={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},y=(o="")=>{let r=o.match(D);if(!r)return[];let{p:e,v:n}=r.groups,l=j[e];if(!l)return e=="cf"?n&&(n=[n[0].toLowerCase(),n.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[n])?typeof window.TFL_STYLE_CONFIG[n]=="string"?[window.TFL_STYLE_CONFIG[n]]:window.TFL_STYLE_CONFIG[n]:[]:[];let i=[],h="";if(n&&n.endsWith("!")&&(n=n.substr(0,n.length-1),h="!important"),e.length==o.length&&l.cssText)return typeof l.cssText=="string"?[l.cssText]:Array.isArray(l.cssText)?l.cssText:[];if(l.names&&typeof l.names=="string"&&(i=[l.names]),l.names&&Array.isArray(l.names)&&(i=l.names),e.length==o.length&&l.default&&i.length>0)return i.map(Y=>`${Y}:${l.default}${h}`);if(!n&&typeof l.fn=="function"){let g=l.fn();if(typeof g=="string")return[g];if(Array.isArray(g))return g}if(n){if(!l.default&&!l.cssText&&typeof l.fn=="function"){let d=[n[0].toLowerCase(),n.substr(1)].join(""),a=l.fn(d);if(a)return[a]}let g=/^\{(?<v>.+)\}$/,Y=/^(?<v>--[a-z0-9-]+)$/,z=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,E=n.match(g);if(E){let{v:d}=E.groups;d=d.toLowerCase(),d=d.replace(/[_]+/g,S=>S.length%2==1?" ":S.substr(0,S.length/2));let a=i.map(S=>`${S}:${d}${h}`);return a.every(S=>CSS.supports(S))?a:[]}if(E=n.match(Y),E){let{v:d}=E.groups;return i.map(w=>`${w}:var(${d})${h};`)}if(E=n.match(z),E){let{d1:d,d2:a}=E.groups;if(Number(a)>0){let w=i.map(S=>`${S}:calc(${d} * 100% / ${a})`);if(w.every(S=>CSS.supports(S)))return w}}let c=[n[0].toLowerCase(),n.substr(1)].join(""),u=l.exts&&Object.keys(l.exts).length>0?l.exts[c]:"";if(u)return i.map(a=>`${a}:${u}${h}`);{let d=i.map(a=>`${a}:${c}${h}`);if(d.every(a=>CSS.supports(a)))return d}if(typeof l.fn=="function"){let d=l.fn(c);if(d){let a=i.map(w=>`${w}:${d}${h}`);if(a.every(w=>CSS.supports(w)))return a}}}return[]},x=o=>{let r=y(o);return Array.isArray(r)&&r.length>0?r.join(";"):""},N=o=>{var r=/class="([^"]+)"/g,e=[];return[...o.matchAll(r)].forEach(n=>e=e.concat(n[1].split(" "))),[...new Set(e)]},k=o=>{if(!o)return[];let r=[].concat(...[...o.querySelectorAll("[class]")].map(n=>[...n.classList]));return[...new Set(r)]},v=o=>{let e=(o||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(e){let{m:l,v:i=""}=e.groups,h="";var n=(E,c=!0)=>{if(typeof E=="string"){let u=i.indexOf(E);c&&(u+=1),h=i.substr(u),i=i.substr(0,i.length-h.length)}else{let u=(E||[]).map(d=>[d,i.indexOf(d)]);if(u=u.filter(d=>d[1]>-1),u.length>0){u.sort((a,w)=>a[1]>=w[1]?1:-1);let d=u[0][1];c&&(d+=1),h=i.substr(d),i=i.substr(0,i.length-h.length)}}};i.indexOf("}")>-1?n("}"):n([":","_",">","+","~","*"],!1);let g=x(i);if(!g)return null;let Y=CSS.escape(o),z=h?h.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,E=>E=="_"?" ":["~","+","*",">"].includes(E)?` ${E} `:E):"";return{type:l||"default",ext:!!z,css:`.${Y}${z} {${g}}`,selectorText:`.${Y}${z}`}}return null},F=(o=[])=>o.map(e=>v(e)).filter(e=>e),T=(o,r,e="")=>{if(!e)return!1;if(P[o]&&P[o][r]&&e.length>0){let n=P[o][r];try{n.insertRule(e)}catch(l){console.error(l)}}return!0},_=(o,r,e=[])=>e.length==0?!1:P[o]&&P[o][r]?(P[o][r].replaceSync(e.join(`
`)),!0):!1,L=(o=[])=>{let r=F(o);for(let e of Object.keys(p)){let n=r.filter(g=>g.type==e&&g.ext==!1),l=r.filter(g=>g.type==e&&g.ext==!0),i=n.map(g=>g.css),h=l.map(g=>g.css);if(i.length>0)for(let g of i)p[e][0].has(g)||(p[e][0].add(g),T(e,0,g));if(h.length>0)for(let g of h)p[e][1].has(g)||p[e][1].add(g),T(e,1,g)}},C=o=>{new MutationObserver(r=>{for(let e of r)if(e.type=="attributes"&&e.attributeName=="class"){let l=[...e.target.classList].map(i=>i.trim()).filter(i=>i);typeof o=="function"&&o([...new Set(l)])}else if(e.type=="childList"&&e.addedNodes.length>0){let n=[...e.addedNodes].filter(l=>l.nodeType!=3).map(l=>[...l.classList]).flat(1/0).map(l=>l.trim()).filter(l=>l);typeof o=="function"&&o([...new Set(n)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},M=()=>{let o;return r=>{clearTimeout(o),o=setTimeout(()=>{Object.keys(p).forEach(e=>{let n="tfl-"+e+"-0",l="tfl-"+e+"-1";p[e][0].size>0&&localStorage.setItem(n,JSON.stringify([...p[e][0]])),p[e][1].size>0&&localStorage.setItem(l,JSON.stringify([...p[e][1]]))})},r||0)}};return{loadEventDom:()=>{var o=Object.values(P).flat();let r=new CSSStyleSheet;m&&Array.isArray(m)&&r.replaceSync(m.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,r,...o],Object.keys(p).forEach(l=>{let i="tfl-"+l+"-0",h="tfl-"+l+"-1";if(localStorage.getItem(i))try{p[l][0]=new Set(JSON.parse(localStorage.getItem(i)))}catch{localStorage.removeItem(i)}if(localStorage.getItem(h))try{p[l][1]=new Set(JSON.parse(localStorage.getItem(h)))}catch{localStorage.removeItem(h)}}),Object.keys(p).forEach(l=>{let i=[...p[l][0]],h=[...p[l][1]];_(l,0,i),_(l,1,h)});let e=M(),n=k(document);L(n),C(l=>{L(l),e(1e3)})},renCssFromArray:F}};Object.defineProperty(window,"tjs",{value:{...R,...se(R),...ne,...ie(R),...ae(R),cssFun:oe},writable:!1,configurable:!1,enumerable:!1}),["add","insertNodes","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","domToJs","define","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach(m=>{Object.defineProperty(window,"$"+m,{value:window.tjs[m],writable:!1,configurable:!1,enumerable:!1})});})();

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
