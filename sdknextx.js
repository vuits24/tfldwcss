let wasm_bindgen;
(()=>{var H=(()=>{let S=Object.getPrototypeOf,P,I,g,j,y={isConnected:1},b=1e3,A,$={},p=S(y),O=S(S),N,C=(n,d,u,s)=>(n??(setTimeout(u,s),new Set)).add(d),F=(n,d,u)=>{let s=g;g=d;try{return n(u)}catch(f){return console.error(f),u}finally{g=s}},L=n=>n.filter(d=>d._dom?.isConnected),W=n=>A=C(A,n,()=>{for(let d of A)d._bindings=L(d._bindings),d._listeners=L(d._listeners);A=N},b),J={get val(){return g?._getters?.add(this),this.rawVal},get oldVal(){return g?._getters?.add(this),this._oldVal},set val(n){g?._setters?.add(this),n!==this.rawVal&&(this.rawVal=n,this._bindings.length+this._listeners.length?(I?.add(this),P=C(P,this,V)):this._oldVal=n)}},l=n=>Object.create(J,{rawVal:{value:n,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:n,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),e=(n,d)=>{let u={_getters:new Set,_setters:new Set},s={f:n},f=j;j=[];let w=F(n,u,d);w=(w??document).nodeType?w:new Text(w);for(let _ of u._getters)u._setters.has(_)||(W(_),_._bindings.push(s));for(let _ of j)_._dom=w;return j=f,s._dom=w},t=(n,d=l(),u)=>{let s={_getters:new Set,_setters:new Set},f={f:n,s:d};f._dom=u??j?.push(f)??y,d.val=F(n,s,d.rawVal);for(let w of s._getters)s._setters.has(w)||(W(w),w._listeners.push(f));return d},i=(n,...d)=>{for(let u of d.flat(1/0)){let s=S(u??0),f=s===J?e(()=>u.val):s===O?e(u):u;f!=N&&n.append(f)}return n},r=(n,d,...u)=>{let[s,...f]=S(u[0]??0)===p?u:[{},...u],w=n?document.createElementNS(n,d):document.createElement(d);for(let[_,K]of Object.entries(s)){let Z=T=>T?Object.getOwnPropertyDescriptor(T,_)??Z(S(T)):N,a=d+","+_,x=$[a]??($[a]=Z(S(w))?.set??0),m=_.startsWith("on")?(T,D)=>{let z=_.slice(2);w.removeEventListener(z,D),w.addEventListener(z,T)}:x?x.bind(w):w.setAttribute.bind(w,_),h=S(K??0);_.startsWith("on")||h===O&&(K=t(K),h=J),h===J?e(()=>(m(K.val,K._oldVal),w)):m(K)}return i(w,...f)},o=n=>({get:(d,u)=>r.bind(N,n,u)}),v=new Proxy(n=>new Proxy(r,o(n)),o()),c=(n,d)=>d?d!==n&&n.replaceWith(d):n.remove(),V=()=>{let n=0,d=[...P].filter(s=>s.rawVal!==s._oldVal);do{I=new Set;for(let s of new Set(d.flatMap(f=>f._listeners=L(f._listeners))))t(s.f,s.s,s._dom),s._dom=N}while(++n<100&&(d=[...I]).length);let u=[...P].filter(s=>s.rawVal!==s._oldVal);P=N;for(let s of new Set(u.flatMap(f=>f._bindings=L(f._bindings))))c(s._dom,e(s.f,s._dom)),s._dom=N;for(let s of u)s._oldVal=s.rawVal};return{add:i,tags:v,state:l,derive:t,hydrate:(n,d)=>c(n,e(d,n))}})();var le=S=>{let{fromEntries:P,entries:I,keys:g,getPrototypeOf:j}=Object,{get:y,set:b,deleteProperty:A,ownKeys:$}=Reflect,{state:p,derive:O,add:N,tags:C}=S,F=j(p()),L,W=1e3,J,l=Symbol(),e=Symbol(),t=Symbol(),i=Symbol(),r=Symbol(),o=Symbol(),v=a=>(a[t]=1,a),c=a=>a?.[t]?O(()=>V(a())):p(V(a)),V=a=>{if(!(a instanceof Object)||a[l])return a;let x=new Proxy((a[l]=P(I(a).map(([m,h])=>[m,c(h)])),a[e]=a,a[i]=[],a[r]=p(1),a),{get:(m,h)=>j(m[l][h]??0)===F?m[l][h].val:(h==="length"&&m[r].val,y(m,h,x)),set(m,h,T){let D=m[l];if(h in D)return D[h].val=V(T),1;let z=h in m,E=z&&h==="length"&&T!==m.length;if(b(m,h,T))return z?E&&++m[r].val:b(D,h,c(T))&&(++m[r].val,f(x,h,D[h])),1},deleteProperty:(m,h)=>(A(m[l],h)&&w(m,h),A(m,h)&&++m[r].val),ownKeys:m=>(m[r].val,$(m))});return x},k=a=>a[l],n=a=>new Proxy(a[l],{get:(x,m)=>x[m].rawVal}),d=a=>a[i]=a[i].filter(x=>x._containerDom.isConnected),u=(a,x,m,h)=>()=>{let T=h(m,()=>delete a[x],x);return T[o]=x,T},s=(a,x,m,{_containerDom:h,f:T},D)=>{if(N(h,u(a,x,m,T)),!D&&Array.isArray(a)&&x!=a.length-1){let z={};for(let Y of h.childNodes)z[Y[o]]=Y;let E=h.firstChild;for(let Y of g(a))E===z[Y]?E=E.nextSibling:h.insertBefore(z[Y],E)}},f=(a,x,m)=>d(a).forEach(s.bind(J,a,x,m)),w=(a,x)=>{for(let m of d(a))[...m._containerDom.childNodes].find(h=>h[o]===x)?.remove()},_=a=>(L??(L=(setTimeout(()=>(L.forEach(d),L=J),W),new Set))).add(a);return{calc:v,reactive:V,stateFields:k,raw:n,list:(a,x,m)=>{let h={_containerDom:a(),f:m};x[i].push(h),_(x);for(let[T,D]of I(x[l]))s(x,T,D,h,1);return h._containerDom},replace:(a,x)=>{let m=Array.isArray(a)?I(x(a.filter(E=>1))):x(I(a)),h=a[e],T=P(m),D=a[l],z=P(m.map(([E,Y])=>{let X=D[E];return X?X.val=V(Y):X=c(Y),[E,X]}));for(let{_containerDom:E,f:Y}of d(a)){let X={};for(let G of[...E.childNodes])G[o]in z?X[G[o]]=G:G.remove();let B=E.firstChild;for(let[G,R]of I(z))B===X[G]?B=B.nextSibling:E.insertBefore(X[G]??C.p(u(a,G,R,Y)).firstChild,B)}for(let E in h)delete h[E];Array.isArray(h)&&(h.length=0);for(let E in T)h[E]=T[E];a[l]=z,++a[r].val}}};var ne=(()=>{function S(y){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(y)?y:`"${y}"`}function P(y=""){let b=[];if(y.includes("{{")&&y.includes("}}")){let $=y.indexOf("{{"),p=y.indexOf("}}"),O=y.slice(0,$).trim(),N=y.slice(p+2).trim(),C=y.slice($+2,p).trim();if(O.length>0&&b.push(JSON.stringify(O)),C.length>0&&b.push(C),N.length>0){let F=P(N).filter(L=>L);N.length>0&&b.push(...F)}}else b.push(JSON.stringify(y));let A=b.filter($=>$);return A.length===0?[]:A}function I(y,b=new Set){if(y.nodeType===3){let t=P(y.nodeValue.trim()).filter(i=>i&&i!='""').join(",");return{tags:b,body:t}}if(!y.tagName)return{tags:b,body:""};let A=y.tagName.toLowerCase();b.add(A);let $=[],p={};Array.from(y.attributes).forEach(e=>{p[e.name.trim()]=e.value.trim()}),p.hasOwnProperty("x-tags")&&(p["x-tags"].split(/[\s|,]+/).map(t=>t.trim()).filter(t=>t).forEach(t=>{b.add(t.toLowerCase())}),delete p["x-tags"]),Object.keys(p).forEach(e=>{if(e.startsWith("x-state:")||e.startsWith("x-reactive:")||e.startsWith("x-stateFields:")||e.startsWith("x-derive")||e.startsWith("x-script")){if(e.startsWith("x-state:")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.state(${p[e].trim()});`)}else if(e.startsWith("x-derive"))if(e.includes(":")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.derive(${p[e].trim()});`)}else $.push(`tjs.derive(${p[e].trim()});`);else if(e.startsWith("x-reactive:")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.reactive(${p[e].trim()});`)}else if(e.startsWith("x-stateFields:")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.stateFields(${p[e].trim()});`)}else $.push(p[e]);delete p[e]}});let O="";p["x-list"]&&(O=p["x-list"]||"",delete p["x-list"]);let N=Object.keys(p).map(e=>{if(e.startsWith("x-")){let t=e.substr(2);return`${S(t)}:${p[e]||""}`}else return`${S(e)}:${JSON.stringify(p[e])}`}).join(","),C=[],F="";A==="script"?F=JSON.stringify(y.textContent):(C=Array.from(y.childNodes).map(e=>I(e,b)),F=C.filter(e=>e.body).map(e=>e.body).join(","));let L=A.replace(/-/g,"_"),W="";var J=()=>{if(O){let e=O.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(e){let{k:t,d:i}=e.groups;W=`tjs.list(${L},${i},(${t}) =>${F||""})`}}};Object.keys(p).length>0?(W=`${L}({${N}} ${F?","+F:""})`,J()):(W=F?`${L}(${F})`:`${L}()`,J());let l=W;return $.length>0&&(l=`()=>{ ${$.join(`
`)} return ${W};}`),{tags:b,body:l}}function g(y,b){let p=new DOMParser().parseFromString(b,"text/html").body;return j(y,p)}function j(y,b){let A=[];for(let O of b.childNodes)A.push(I(O));let $=A.filter(O=>O.tags.size>0),p="";if($.length>0){let O=new Set;$.forEach(C=>{C.tags.forEach(F=>O.add(F))}),p=`const {${[...O].map(C=>/-/.test(C)?`"${C}":${C.replace(/-/g,"_")}`:C).join(", ")}}=tjs.tags;`}return[`${y}.replaceChildren();`,p,...$.map(O=>`tjs.add(${y}, ${O.body});`)]}return{htmlTotjsJS:g,domToTjs:j}})();var ie=S=>{function P(I,g,j={mode:"open"}){window.customElements.define(I,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(y,b){super.setAttribute(y,b),this.attrs[y]&&(this.attrs[y].val=b)}connectedCallback(){let y;S.add(j?this.attachShadow(j):this,g({attr:(b,A)=>this.attrs[b]??=S.state(this.getAttribute(b)??A),mount:b=>y=b,$this:this,children:j?S.tags.slot():[...this.childNodes]})),this.dismount=y?.()}disconnectedCallback(){this.dismount?.()}})}return{define:P}};var oe=S=>{let P=0,{button:I,div:g,header:j,input:y,label:b,span:A,style:$}=S.tags,p=l=>Object.entries(l).map(([e,t])=>`${e}: ${t};`).join(""),O=l=>{},N=Object.getPrototypeOf(S.state(null)),C=l=>Object.getPrototypeOf(l??0)===N?l:S.state(l),F=({value:l,container:e=g,Loading:t,Error:i},r)=>{let o=S.state({status:"pending"});return l.then(v=>o.val={status:"fulfilled",value:v}).catch(v=>o.val={status:"rejected",value:v}),e(()=>o.val.status==="pending"?t?.()??"":o.val.status==="rejected"?i?.(o.val.value):r(o.val.value))},L=()=>++P,W=({title:l,closed:e=S.state(!1),x:t=100,y:i=100,width:r=300,height:o=200,closeCross:v="\xD7",customStacking:c=!1,zIndex:V=1,disableMove:k=!1,disableResize:n=!1,headerColor:d="lightgray",windowClass:u="",windowStyleOverrides:s={},headerClass:f="",headerStyleOverrides:w={},childrenContainerClass:_="",childrenContainerStyleOverrides:K={},crossClass:Z="",crossStyleOverrides:a={},crossHoverClass:x="",crossHoverStyleOverrides:m={}},...h)=>{let T=C(t),D=C(i),z=C(r),E=C(o),Y=C(V);c||(Y.val=L());let X=S.state(!1),B=S.state(null),G=S.state(0),R=S.state(0),te=S.state(0),re=S.state(0),q=x||Object.keys(m)?S.state(!1):null,se=M=>{M.button===0&&(X.val=!0,G.val=M.clientX,R.val=M.clientY,document.body.style.userSelect="none")},Q=M=>U=>{B.val=M,G.val=U.clientX,R.val=U.clientY,te.val=z.val,re.val=E.val,document.body.style.userSelect="none"},de=M=>{if(X.val)T.val+=M.clientX-G.val,D.val+=M.clientY-R.val,G.val=M.clientX,R.val=M.clientY;else if(B.val){let U=M.clientX-G.val,ue=M.clientY-R.val;B.val.includes("right")&&(z.val=te.val+U),B.val.includes("bottom")&&(E.val=re.val+ue)}},ce=()=>{X.val=!1,B.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let M=$({type:"text/css",id:"tjsui-window-style"},O({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(M)}return()=>e.val?null:g({class:["tjsui-window"].concat(u||[]).join(" "),style:()=>p({left:`${T.val}px`,top:`${D.val}px`,width:`${z.val}px`,height:`${E.val}px`,"z-index":Y.val,...s}),...c?{}:{onmousedown:()=>Y.val=L()}},l?j({class:["tjsui-window-header"].concat(f||[]).join(" "),style:p({"background-color":d,...k?{cursor:"auto"}:{},...w}),...k?{}:{onmousedown:se}},l,v?A({class:()=>["tjsui-window-cross"].concat(Z||[]).concat(x&&q.val?x:[]).join(" "),style:()=>p({...a,...Object.keys(m).length&&q.val?m:{}}),onclick:()=>e.val=!0,...q?{onmouseenter:()=>q.val=!0,onmouseleave:()=>q.val=!1}:{}},v):null):k?null:g({class:"tjsui-window-dragarea",onmousedown:se}),n?[]:[g({class:"tjsui-window-resize-right",onmousedown:Q("right")}),g({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),g({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],g({class:["tjsui-window-children"].concat(_||[]).join(" "),style:p(K)},h))};class J{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:e="unset",bottom:t="unset",backgroundColor:i="#333D",fontColor:r="white",fadeOutSec:o=.3,boardClass:v="",boardStyleOverrides:c={},messageClass:V="",messageStyleOverrides:k={},closerClass:n="",closerStyleOverrides:d={}},u=document.body){let s=p({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:e,bottom:t,left:"50%",transform:"translateX(-50%)","z-index":1e4,...c});this._fadeOutSec=o,this._messageClass=V,this._messageStylesStr=p({display:"flex","background-color":i,color:r,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${o}s, transform ${o}s`,...k}),this._closerClass=n,this._closerStylesStr=p({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...d}),u.appendChild(this._dom=g({class:v,style:s}))}show({message:e,closer:t,durationSec:i,closed:r=S.state(!1)}){let o=S.state(!1);S.derive(()=>setTimeout(c=>o.val=c,this._fadeOutSec*1e3,r.val));let v=g({class:this._messageClass,style:this._messageStylesStr},g(e),t?g({class:this._closerClass,style:this._closerStylesStr,onclick:()=>r.val=!0},t):null);return S.derive(()=>r.val&&(v.style.opacity="0",v.style.transform="translateY(-20px)")),i&&setTimeout(()=>r.val=!0,i*1e3),S.add(this._dom,()=>o.val?null:v),v}remove(){this._dom.remove()}}return{Await:F,MessageBoard:J,topMostZIndex:L,FloatingWindow:W}};var ae=(S,P)=>{let I=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,g={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},j={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},y=(l="")=>{let e=l.match(I);if(!e)return[];let{p:t,v:i}=e.groups,r=P[t];if(!r)return t=="cf"?i&&(i=[i[0].toLowerCase(),i.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[i])?typeof window.TFL_STYLE_CONFIG[i]=="string"?[window.TFL_STYLE_CONFIG[i]]:window.TFL_STYLE_CONFIG[i]:[]:[];let o=[],v="";if(i&&i.endsWith("!")&&(i=i.substr(0,i.length-1),v="!important"),t.length==l.length&&r.cssText)return typeof r.cssText=="string"?[r.cssText]:Array.isArray(r.cssText)?r.cssText:[];if(r.names&&typeof r.names=="string"&&(o=[r.names]),r.names&&Array.isArray(r.names)&&(o=r.names),t.length==l.length&&r.default&&o.length>0)return o.map(V=>`${V}:${r.default}${v}`);if(!i&&typeof r.fn=="function"){let c=r.fn();if(typeof c=="string")return[c];if(Array.isArray(c))return c}if(i){if(!r.default&&!r.cssText&&typeof r.fn=="function"){let s=[i[0].toLowerCase(),i.substr(1)].join(""),f=r.fn(s);if(f)return[f]}let c=/^\{(?<v>.+)\}$/,V=/^(?<v>--[a-z0-9-]+)$/,k=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,n=i.match(c);if(n){let{v:s}=n.groups;s=s.toLowerCase(),s=s.replace(/[_]+/g,_=>_.length%2==1?" ":_.substr(0,_.length/2));let f=o.map(_=>`${_}:${s}${v}`);return f.every(_=>CSS.supports(_))?f:[]}if(n=i.match(V),n){let{v:s}=n.groups;return o.map(w=>`${w}:var(${s})${v}`)}if(n=i.match(k),n){let{d1:s,d2:f}=n.groups;if(Number(f)>0){let w=o.map(_=>`${_}:calc(${s} * 100% / ${f})`);if(w.every(_=>CSS.supports(_)))return w}}let d=[i[0].toLowerCase(),i.substr(1)].join(""),u=r.exts&&Object.keys(r.exts).length>0?r.exts[d]:"";if(u)return o.map(f=>`${f}:${u}${v}`);{let s=o.map(f=>`${f}:${d}${v}`);if(s.every(f=>CSS.supports(f)))return s}if(typeof r.fn=="function"){let s=r.fn(d);if(s){let f=o.map(w=>`${w}:${s}${v}`);if(f.every(w=>CSS.supports(w)))return f}}}return[]},b=l=>{let e=y(l);return Array.isArray(e)&&e.length>0?e.join(";"):""},A=l=>{var e=/class="([^"]+)"/g,t=[];return[...l.matchAll(e)].forEach(i=>t=t.concat(i[1].split(" "))),[...new Set(t)]},$=l=>{if(!l)return[];let e=[].concat(...[...l.querySelectorAll("[class]")].map(i=>[...i.classList]));return[...new Set(e)]},p=l=>{let t=(l||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(t){let{m:r,v:o=""}=t.groups,v="";var i=(n,d=!0)=>{if(typeof n=="string"){let u=o.indexOf(n);d&&(u+=1),v=o.substr(u),o=o.substr(0,o.length-v.length)}else{let u=(n||[]).map(s=>[s,o.indexOf(s)]);if(u=u.filter(s=>s[1]>-1),u.length>0){u.sort((f,w)=>f[1]>=w[1]?1:-1);let s=u[0][1];d&&(s+=1),v=o.substr(s),o=o.substr(0,o.length-v.length)}}};o.indexOf("}")>-1?i("}"):i([":","_",">","+","~","*"],!1);let c=b(o);if(!c)return null;let V=CSS.escape(l),k=v?v.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,n=>n=="_"?" ":["~","+","*",">"].includes(n)?` ${n} `:n):"";return{type:r||"default",ext:!!k,css:`.${V}${k} {${c}}`,selectorText:`.${V}${k}`}}return null},O=(l=[])=>l.map(t=>p(t)).filter(t=>t),N=(l,e,t="")=>t?(j[l]&&j[l][e]&&t.length>0&&j[l][e].insertRule(t),!0):!1,C=(l,e,t=[])=>t.length==0?!1:j[l]&&j[l][e]?(j[l][e].replaceSync(t.join(`
`)),!0):!1,F=(l=[])=>{let e=O(l);for(let t of Object.keys(g)){let i=e.filter(c=>c.type==t&&c.ext==!1),r=e.filter(c=>c.type==t&&c.ext==!0),o=i.map(c=>c.css),v=r.map(c=>c.css);if(o.length>0)for(let c of o)g[t][0].has(c)||(g[t][0].add(c),N(t,0,c));if(v.length>0)for(let c of v)g[t][1].has(c)||g[t][1].add(c),N(t,1,c)}},L=l=>{new MutationObserver(e=>{for(let t of e)if(t.type=="attributes"&&t.attributeName=="class"){let r=[...t.target.classList].map(o=>o.trim()).filter(o=>o);typeof l=="function"&&l([...new Set(r)])}else if(t.type=="childList"&&t.addedNodes.length>0){let i=[...t.addedNodes].filter(r=>r.nodeType!=3).map(r=>[...r.classList]).flat(1/0).map(r=>r.trim()).filter(r=>r);typeof l=="function"&&l([...new Set(i)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},W=()=>{let l;return e=>{clearTimeout(l),l=setTimeout(()=>{Object.keys(g).forEach(t=>{let i="tfl-"+t+"-0",r="tfl-"+t+"-1";g[t][0].size>0&&localStorage.setItem(i,JSON.stringify([...g[t][0]])),g[t][1].size>0&&localStorage.setItem(r,JSON.stringify([...g[t][1]]))})},e||0)}};return{loadEventDom:()=>{var l=Object.values(j).flat();let e=new CSSStyleSheet;S&&Array.isArray(S)&&e.replaceSync(S.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e,...l],Object.keys(g).forEach(r=>{let o="tfl-"+r+"-0",v="tfl-"+r+"-1";if(localStorage.getItem(o))try{g[r][0]=new Set(JSON.parse(localStorage.getItem(o)))}catch{localStorage.removeItem(o)}if(localStorage.getItem(v))try{g[r][1]=new Set(JSON.parse(localStorage.getItem(v)))}catch{localStorage.removeItem(v)}}),Object.keys(g).forEach(r=>{let o=[...g[r][0]],v=[...g[r][1]];C(r,0,o),C(r,1,v)});let t=W(),i=$(document);F(i),L(r=>{F(r),t(1e3)})}}};Object.defineProperty(window,"tjs",{value:{...H,...le(H),...ne,...ie(H),...oe(H),cssFun:ae},writable:!1,configurable:!1,enumerable:!1});(()=>{addEventListener("tjs-load",function(){let I=window.tjs.htmlTotjsJS("document.body",document.body.innerHTML).join(`
`);new Function(I)()});let S=setInterval(()=>{if(document&&document.body&&document.body.isConnected){let P=new Event("tjs-load");dispatchEvent(P),clearInterval(S)}},1)})();})();

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
