(()=>{var rt=(j,L)=>()=>(L||j((L={exports:{}}).exports,L),L.exports);var lt=rt((exports,module)=>{function vData(){let j=function(){let W=Object,y,$=W.getPrototypeOf,O=document,P,w,c,g={isConnected:1},u=1e3,o,i={},m=$(g),F=$($),b=(e,t,r,d)=>(e??(setTimeout(r,d),new Set)).add(t),x=(e,t,r)=>{let d=w;w=t;try{return e(r)}catch(h){return console.error(h),r}finally{w=d}},A=e=>e.filter(t=>t._dom?.isConnected),_=e=>o=b(o,e,()=>{for(let t of o)t._bindings=A(t._bindings),t._listeners=A(t._listeners);o=y},u),E={get val(){return w?._getters?.add(this),this._val},get oldVal(){return w?._getters?.add(this),this._oldVal},set val(e){if(w?._setters?.add(this),e!==this._val){this._val=e;let t=[...this._listeners=A(this._listeners)];for(let r of t)M(r.f,r.s,r._dom),r._dom=y;this._bindings.length?P=b(P,this,Y):this._oldVal=e}}},s=e=>({__proto__:E,_val:e,_oldVal:e,_bindings:[],_listeners:[]}),f=e=>$(e??0)===E,C=e=>f(e)?e.val:e,V=e=>f(e)?e.oldVal:e,B=(e,t)=>{let r={_getters:new Set,_setters:new Set},d={f:e},h=c;c=[];let a=x(e,r,t);a=(a??O).nodeType?a:new Text(a);for(let n of r._getters)r._setters.has(n)||(_(n),n._bindings.push(d));for(let n of c)n._dom=a;return c=h,d._dom=a},M=(e,t=s(),r)=>{let d={_getters:new Set,_setters:new Set},h={f:e,s:t};h._dom=r??c?.push(h)??g,t.val=x(e,d,t._val);for(let a of d._getters)d._setters.has(a)||(_(a),a._listeners.push(h));return t},N=e=>(t,...r)=>{let d=e||"append";e==="replaceWith"&&(t.replaceChildren(),d="append");for(let h of r.flat(1/0)){let a=$(h??0),n=a===E?B(()=>h.val):a===F?B(h):h;n!=y&&t[d](n)}return t},J=N("append"),K=N("prepend"),X=N("before"),z=N("after"),R=N("replaceWith"),q=e=>(e._isBindingFunc=1,e),H=e=>new Proxy((t,...r)=>{let[d,...h]=$(r[0]??0)===m?r:[{},...r],a=e?O.createElementNS(e,t):O.createElement(t);for(let[n,S]of W.entries(d)){let D=I=>I?W.getOwnPropertyDescriptor(I,n)??D($(I)):y,G=t+","+n,T=i[G]??(i[G]=D($(a))?.set??0),Z=n.startsWith("on")?(I,k)=>{let tt=n.slice(2);k&&a.removeEventListener(tt,k),I&&a.addEventListener(tt,I)}:T?T.bind(a):a.setAttribute.bind(a,n),U=$(S??0);U===F&&(!n.startsWith("on")||S._isBindingFunc)&&(S=M(S),U=E),U===E?B(()=>(Z(S.val,S._oldVal),a)):Z(S)}return J(a,...h)},{get:(t,r)=>t.bind(y,r)}),Q=(e,t)=>t?t!==e&&e.replaceWith(t):e.remove(),Y=()=>{let e=[...P].filter(t=>t._val!==t._oldVal);P=y;for(let t of new Set(e.flatMap(r=>r._bindings=A(r._bindings))))Q(t._dom,B(t.f,t._dom)),t._dom=y;for(let t of e)t._oldVal=t._val},l=(e,t)=>Q(e,B(t,e));return{add:J,domAdd:J,domAfter:z,domBefore:X,domPrepend:K,domReplaceWith:R,_:q,tags:H(),tagsNS:H,state:s,val:C,oldVal:V,derive:M,hydrate:l}}(),L=function(){let{fromEntries:W,entries:y,keys:$,getPrototypeOf:O}=Object,{get:P,set:w,deleteProperty:c,ownKeys:g}=Reflect,{state:u,derive:o,add:i,tags:m}=j,F=O(u()),b,x=1e3,A,_=Symbol(),E=Symbol(),s=Symbol(),f=Symbol(),C=Symbol(),V=Symbol(),B=l=>(l[s]=1,l),M=l=>l?.[s]?o(()=>N(l())):u(N(l)),N=l=>{if(!(l instanceof Object)||l[_])return l;let e=new Proxy((l[_]=W(y(l).map(([t,r])=>[t,M(r)])),l[E]=l,l[f]=[],l[C]=u(1),l),{get:(t,r)=>O(t[_][r]??0)===F?t[_][r].val:(r==="length"&&t[C].val,P(t,r,e)),set(t,r,d){let h=t[_];if(r in h)return h[r].val=N(d),1;let a=r in t,n=a&&r==="length"&&d!==t.length;if(w(t,r,d))return a?n&&++t[C].val:w(h,r,M(d))&&(++t[C].val,R(e,r,h[r])),1},deleteProperty:(t,r)=>(c(t[_],r)&&q(t,r),c(t,r)&&++t[C].val),ownKeys:t=>(t[C].val,g(t))});return e},J=l=>l[_],K=l=>l[f]=l[f].filter(e=>e._containerDom.isConnected),X=(l,e,t,r)=>()=>{let d=r(t,()=>delete l[e],e);return d[V]=e,d},z=(l,e,t,{_containerDom:r,f:d},h)=>{if(i(r,X(l,e,t,d)),!h&&Array.isArray(l)&&e!=l.length-1){let a={};for(let S of r.childNodes)a[S[V]]=S;let n=r.firstChild;for(let S of $(l))n===a[S]?n=n.nextSibling:r.insertBefore(a[S],n)}},R=(l,e,t)=>K(l).forEach(z.bind(A,l,e,t)),q=(l,e)=>{for(let t of K(l))[...t._containerDom.childNodes].find(r=>r[V]===e)?.remove()},H=l=>(b??(b=(setTimeout(()=>(b.forEach(K),b=A),x),new Set))).add(l);return{calc:B,reactive:N,stateFields:J,list:(l,e,t)=>{let r={_containerDom:l(),f:t};e[f].push(r),H(e);for(let[d,h]of y(e[_]))z(e,d,h,r,1);return r._containerDom},replace:(l,e)=>{let t=Array.isArray(l)?y(e(l.filter(n=>1))):e(y(l)),r=l[E],d=W(t),h=l[_],a=W(t.map(([n,S])=>{let D=h[n];return D?D.val=N(S):D=M(S),[n,D]}));for(let{_containerDom:n,f:S}of K(l)){let D={};for(let T of[...n.childNodes])T[V]in a?D[T[V]]=T:T.remove();let G=n.firstChild;for(let[T,Z]of y(a))G===D[T]?G=G.nextSibling:n.insertBefore(D[T]??m.div(X(l,T,Z,S)).firstChild,G)}for(let n in r)delete r[n];Array.isArray(r)&&(r.length=0);for(let n in d)r[n]=d[n];l[_]=a,++l[C].val}}}(),et=function(){function W(c){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(c)?c:`"${c}"`}function y(c){let g=/{{(.*?)}}|([^{}]+)/g,u,o=[];for(;(u=g.exec(c))!==null;)u[1]?o.push(u[1].trim()):u[2]&&o.push(`${JSON.stringify(u[2])}`);return o.length==0?"":`${o.join(",")}`}function $(c,g=new Set){if(c.nodeType===3)return{tags:g,body:y(c.nodeValue.trim())};if(!c.tagName||c.tagName.toLowerCase()==="script")return{tags:g,body:""};let u=c.tagName.toLowerCase();g.add(u);let o=[],i={};Array.from(c.attributes).forEach(s=>{i[s.name.trim()]=s.value.trim()}),i.hasOwnProperty("x-tags")&&(i["x-tags"].split(/[\s|,]+/).map(f=>f.trim()).filter(f=>f).forEach(f=>{g.add(f.toLowerCase())}),delete i["x-tags"]),Object.keys(i).forEach(s=>{if(s.startsWith("x-state:")||s.startsWith("x-reactive:")||s.startsWith("x-stateFields:")||s.startsWith("x-derive")||s.startsWith("x-script")){if(s.startsWith("x-state:")){let f=s.split(":")[1];o.push(`const ${f.trim()}=tjs.state(${i[s].trim()});`)}else if(s.startsWith("x-derive"))if(s.includes(":")){let f=s.split(":")[1];o.push(`const ${f.trim()}=tjs.derive(${i[s].trim()});`)}else o.push(`tjs.derive(${i[s].trim()});`);else if(s.startsWith("x-reactive:")){let f=s.split(":")[1];o.push(`const ${f.trim()}=tjsX.reactive(${i[s].trim()});`)}else if(s.startsWith("x-stateFields:")){let f=s.split(":")[1];o.push(`const ${f.trim()}=tjsX.stateFields(${i[s].trim()});`)}else o.push(i[s]);console.log(s),delete i[s]}});let m="";i["x-list"]&&(m=i["x-list"]||"",delete i["x-list"]);let F=Object.keys(i).map(s=>{if(s.startsWith("x-")){let f=s.substr(2);return`${W(f)}:${i[s]||""}`}else return`${W(s)}:${JSON.stringify(i[s])}`}).join(","),x=Array.from(c.childNodes).map(s=>$(s,g)).filter(s=>s.body).map(s=>s.body).join(","),A=u.replace(/-/g,"_"),_="";if(Object.keys(i).length>0)_=`${A}({${F}} ${x?","+x:""})`;else if(m){let s=m.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(s){let{k:f,d:C}=s.groups;_=`tjsX.list(${A},${C},(${f})=>${x})`}}else _=`${A}(${x})`;let E=o.length===0?_:`()=>{${o.join("")} return ${_};}`;return{tags:g,body:E}}function O(c,g){let o=new DOMParser().parseFromString(g,"text/html");console.log(o);let i=o.body;return P(c,i)}function P(c,g){let u=[];for(let m of g.childNodes)u.push($(m));let o=u.filter(m=>m.tags.size>0),i="";if(o.length>0){let m=new Set;o.forEach(b=>{b.tags.forEach(x=>m.add(x))}),i=`const {${[...m].map(b=>/-/.test(b)?`"${b}":${b.replace(/-/g,"_")}`:b).join(", ")}}=tjs.tags;`}return[`${c}.replaceChildren();`,i,...o.map(m=>`tjs.add(${c}, ${m.body});`)]}function w(c,g,u={mode:"open"}){window.customElements.define(c,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(o,i){super.setAttribute(o,i),this.attrs[o]&&(this.attrs[o].val=i)}connectedCallback(){let o;j.add(u?this.attachShadow(u):this,g({attr:(i,m)=>this.attrs[i]??=j.state(this.getAttribute(i)??m),mount:i=>o=i,$this:this,children:u?j.tags.slot():[...this.childNodes]})),this.dismount=o?.()}disconnectedCallback(){this.dismount?.()}})}return{htmlTotjsJS:O,domToTjs:P,define:w}}();return window.tjs=j,window.tjsX=L,{...j,...L,...et}}addEventListener("DOMContentLoaded",function(){let v=vData();var body=document.body;let p=v.htmlTotjsJS("body",body.innerHTML),pp=p.join("");console.log(pp),eval(pp)})});lt();})();
