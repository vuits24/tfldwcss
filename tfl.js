(()=>{var rt=(D,F)=>()=>(F||D((F={exports:{}}).exports,F),F.exports);var lt=rt((exports,module)=>{function vData(){let D=function(){let W=Object,S,$=W.getPrototypeOf,O=document,P,w,c,g={isConnected:1},u=1e3,o,n={},m=$(g),L=$($),b=(e,t,r,a)=>(e??(setTimeout(r,a),new Set)).add(t),x=(e,t,r)=>{let a=w;w=t;try{return e(r)}catch(h){return console.error(h),r}finally{w=a}},A=e=>e.filter(t=>t._dom?.isConnected),_=e=>o=b(o,e,()=>{for(let t of o)t._bindings=A(t._bindings),t._listeners=A(t._listeners);o=S},u),j={get val(){return w?._getters?.add(this),this._val},get oldVal(){return w?._getters?.add(this),this._oldVal},set val(e){if(w?._setters?.add(this),e!==this._val){this._val=e;let t=[...this._listeners=A(this._listeners)];for(let r of t)I(r.f,r.s,r._dom),r._dom=S;this._bindings.length?P=b(P,this,Y):this._oldVal=e}}},s=e=>({__proto__:j,_val:e,_oldVal:e,_bindings:[],_listeners:[]}),f=e=>$(e??0)===j,C=e=>f(e)?e.val:e,V=e=>f(e)?e.oldVal:e,B=(e,t)=>{let r={_getters:new Set,_setters:new Set},a={f:e},h=c;c=[];let d=x(e,r,t);d=(d??O).nodeType?d:new Text(d);for(let i of r._getters)r._setters.has(i)||(_(i),i._bindings.push(a));for(let i of c)i._dom=d;return c=h,a._dom=d},I=(e,t=s(),r)=>{let a={_getters:new Set,_setters:new Set},h={f:e,s:t};h._dom=r??c?.push(h)??g,t.val=x(e,a,t._val);for(let d of a._getters)a._setters.has(d)||(_(d),d._listeners.push(h));return t},N=e=>(t,...r)=>{let a=e||"append";e==="replaceWith"&&(t.replaceChildren(),a="append");for(let h of r.flat(1/0)){let d=$(h??0),i=d===j?B(()=>h.val):d===L?B(h):h;i!=S&&t[a](i)}return t},J=N("append"),K=N("prepend"),X=N("before"),z=N("after"),R=N("replaceWith"),q=e=>(e._isBindingFunc=1,e),H=e=>new Proxy((t,...r)=>{let[a,...h]=$(r[0]??0)===m?r:[{},...r],d=e?O.createElementNS(e,t):O.createElement(t);for(let[i,y]of W.entries(a)){let E=M=>M?W.getOwnPropertyDescriptor(M,i)??E($(M)):S,G=t+","+i,T=n[G]??(n[G]=E($(d))?.set??0),Z=i.startsWith("on")?(M,k)=>{let tt=i.slice(2);k&&d.removeEventListener(tt,k),M&&d.addEventListener(tt,M)}:T?T.bind(d):d.setAttribute.bind(d,i),U=$(y??0);U===L&&(!i.startsWith("on")||y._isBindingFunc)&&(y=I(y),U=j),U===j?B(()=>(Z(y.val,y._oldVal),d)):Z(y)}return J(d,...h)},{get:(t,r)=>t.bind(S,r)}),Q=(e,t)=>t?t!==e&&e.replaceWith(t):e.remove(),Y=()=>{let e=[...P].filter(t=>t._val!==t._oldVal);P=S;for(let t of new Set(e.flatMap(r=>r._bindings=A(r._bindings))))Q(t._dom,B(t.f,t._dom)),t._dom=S;for(let t of e)t._oldVal=t._val},l=(e,t)=>Q(e,B(t,e));return{add:J,domAdd:J,domAfter:z,domBefore:X,domPrepend:K,domReplaceWith:R,_:q,tags:H(),tagsNS:H,state:s,val:C,oldVal:V,derive:I,hydrate:l}}(),F=function(){let{fromEntries:W,entries:S,keys:$,getPrototypeOf:O}=Object,{get:P,set:w,deleteProperty:c,ownKeys:g}=Reflect,{state:u,derive:o,add:n,tags:m}=D,L=O(u()),b,x=1e3,A,_=Symbol(),j=Symbol(),s=Symbol(),f=Symbol(),C=Symbol(),V=Symbol(),B=l=>(l[s]=1,l),I=l=>l?.[s]?o(()=>N(l())):u(N(l)),N=l=>{if(!(l instanceof Object)||l[_])return l;let e=new Proxy((l[_]=W(S(l).map(([t,r])=>[t,I(r)])),l[j]=l,l[f]=[],l[C]=u(1),l),{get:(t,r)=>O(t[_][r]??0)===L?t[_][r].val:(r==="length"&&t[C].val,P(t,r,e)),set(t,r,a){let h=t[_];if(r in h)return h[r].val=N(a),1;let d=r in t,i=d&&r==="length"&&a!==t.length;if(w(t,r,a))return d?i&&++t[C].val:w(h,r,I(a))&&(++t[C].val,R(e,r,h[r])),1},deleteProperty:(t,r)=>(c(t[_],r)&&q(t,r),c(t,r)&&++t[C].val),ownKeys:t=>(t[C].val,g(t))});return e},J=l=>l[_],K=l=>l[f]=l[f].filter(e=>e._containerDom.isConnected),X=(l,e,t,r)=>()=>{let a=r(t,()=>delete l[e],e);return a[V]=e,a},z=(l,e,t,{_containerDom:r,f:a},h)=>{if(n(r,X(l,e,t,a)),!h&&Array.isArray(l)&&e!=l.length-1){let d={};for(let y of r.childNodes)d[y[V]]=y;let i=r.firstChild;for(let y of $(l))i===d[y]?i=i.nextSibling:r.insertBefore(d[y],i)}},R=(l,e,t)=>K(l).forEach(z.bind(A,l,e,t)),q=(l,e)=>{for(let t of K(l))[...t._containerDom.childNodes].find(r=>r[V]===e)?.remove()},H=l=>(b??(b=(setTimeout(()=>(b.forEach(K),b=A),x),new Set))).add(l);return{calc:B,reactive:N,stateFields:J,list:(l,e,t)=>{let r={_containerDom:l(),f:t};e[f].push(r),H(e);for(let[a,h]of S(e[_]))z(e,a,h,r,1);return r._containerDom},replace:(l,e)=>{let t=Array.isArray(l)?S(e(l.filter(i=>1))):e(S(l)),r=l[j],a=W(t),h=l[_],d=W(t.map(([i,y])=>{let E=h[i];return E?E.val=N(y):E=I(y),[i,E]}));for(let{_containerDom:i,f:y}of K(l)){let E={};for(let T of[...i.childNodes])T[V]in d?E[T[V]]=T:T.remove();let G=i.firstChild;for(let[T,Z]of S(d))G===E[T]?G=G.nextSibling:i.insertBefore(E[T]??m.div(X(l,T,Z,y)).firstChild,G)}for(let i in r)delete r[i];Array.isArray(r)&&(r.length=0);for(let i in a)r[i]=a[i];l[_]=d,++l[C].val}}}(),et=function(){function W(c){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(c)?c:`"${c}"`}function S(c){let g=/{{(.*?)}}|([^{}]+)/g,u,o=[];for(;(u=g.exec(c))!==null;)u[1]?o.push(u[1].trim()):u[2]&&o.push(`${JSON.stringify(u[2])}`);return o.length==0?"":`${o.join(",")}`}function $(c,g=new Set){if(c.nodeType===3)return{tags:g,body:S(c.nodeValue.trim())};if(!c.tagName||c.tagName.toLowerCase()==="script")return{tags:g,body:""};let u=c.tagName.toLowerCase();g.add(u);let o=[],n={};Array.from(c.attributes).forEach(s=>{n[s.name.trim()]=s.value.trim()}),n.hasOwnProperty("x-tags")&&(n["x-tags"].split(/[\s|,]+/).map(f=>f.trim()).filter(f=>f).forEach(f=>{g.add(f.toLowerCase())}),delete n["x-tags"]),Object.keys(n).forEach(s=>{if(s.startsWith("x-state:")||s.startsWith("x-reactive:")||s.startsWith("x-stateFields:")||s.startsWith("x-derive")||s.startsWith("x-script")){if(s.startsWith("x-state:")){let f=s.split(":")[1];o.push(`const ${f.trim()}=tjs.state(${n[s].trim()});`)}else if(s.startsWith("x-derive"))if(s.includes(":")){let f=s.split(":")[1];o.push(`const ${f.trim()}=tjs.derive(${n[s].trim()});`)}else o.push(`tjs.derive(${n[s].trim()});`);else if(s.startsWith("x-reactive:")){let f=s.split(":")[1];o.push(`const ${f.trim()}=tjsX.reactive(${n[s].trim()});`)}else if(s.startsWith("x-stateFields:")){let f=s.split(":")[1];o.push(`const ${f.trim()}=tjsX.stateFields(${n[s].trim()});`)}else o.push(n[s]);console.log(s),delete n[s]}});let m="";n["x-list"]&&(m=n["x-list"]||"",delete n["x-list"]);let L=Object.keys(n).map(s=>{if(s.startsWith("x-")){let f=s.substr(2);return`${W(f)}:${n[s]||""}`}else return`${W(s)}:${JSON.stringify(n[s])}`}).join(","),x=Array.from(c.childNodes).map(s=>$(s,g)).filter(s=>s.body).map(s=>s.body).join(","),A=u.replace(/-/g,"_"),_="";if(Object.keys(n).length>0)_=`${A}({${L}} ${x?","+x:""})`;else if(m){let s=m.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(s){let{k:f,d:C}=s.groups;_=`tjsX.list(${A},${C},(${f})=>${x})`}}else _=`${A}(${x})`;let j=o.length===0?_:`()=>{${o.join("")} return ${_};}`;return{tags:g,body:j}}function O(c,g){let o=new DOMParser().parseFromString(g,"text/html");console.log(o);let n=o.body;return P(c,n)}function P(c,g){let u=[];for(let m of g.childNodes)u.push($(m));let o=u.filter(m=>m.tags.size>0),n="";if(o.length>0){let m=new Set;o.forEach(b=>{b.tags.forEach(x=>m.add(x))}),n=`const {${[...m].map(b=>/-/.test(b)?`"${b}":${b.replace(/-/g,"_")}`:b).join(", ")}}=tjs.tags;`}return[`${c}.replaceChildren();`,n,...o.map(m=>`tjs.add(${c}, ${m.body});`)]}function w(c,g,u={mode:"open"}){window.customElements.define(c,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(o,n){super.setAttribute(o,n),this.attrs[o]&&(this.attrs[o].val=n)}connectedCallback(){let o;D.add(u?this.attachShadow(u):this,g({attr:(n,m)=>this.attrs[n]??=D.state(this.getAttribute(n)??m),mount:n=>o=n,$this:this,children:u?D.tags.slot():[...this.childNodes]})),this.dismount=o?.()}disconnectedCallback(){this.dismount?.()}})}return{htmlTotjsJS:O,domToTjs:P,define:w}}();return window.tjs=D,window.tjsX=F,{...D,...F,...et}}addEventListener("tjs-load",function(){let v=vData();var body=document.body;let p=v.htmlTotjsJS("body",body.innerHTML),pp=p.join("");eval(pp)});var int=setInterval(()=>{if(document&&document.body&&document.body.isConnected){let D=new Event("tjs-load");dispatchEvent(D),clearInterval(int)}},1)});lt();})();
