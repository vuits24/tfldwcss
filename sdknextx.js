let wasm_bindgen;
(()=>{var H=(()=>{let g=Object.getPrototypeOf,P,I,S,j,y={isConnected:1},b=1e3,A,$={},p=g(y),O=g(g),N,C=(i,d,u,l)=>(i??(setTimeout(u,l),new Set)).add(d),F=(i,d,u)=>{let l=S;S=d;try{return i(u)}catch(f){return console.error(f),u}finally{S=l}},L=i=>i.filter(d=>d._dom?.isConnected),W=i=>A=C(A,i,()=>{for(let d of A)d._bindings=L(d._bindings),d._listeners=L(d._listeners);A=N},b),J={get val(){return S?._getters?.add(this),this.rawVal},get oldVal(){return S?._getters?.add(this),this._oldVal},set val(i){S?._setters?.add(this),i!==this.rawVal&&(this.rawVal=i,this._bindings.length+this._listeners.length?(I?.add(this),P=C(P,this,V)):this._oldVal=i)}},s=i=>Object.create(J,{rawVal:{value:i,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:i,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),e=(i,d)=>{let u={_getters:new Set,_setters:new Set},l={f:i},f=j;j=[];let w=F(i,u,d);w=(w??document).nodeType?w:new Text(w);for(let _ of u._getters)u._setters.has(_)||(W(_),_._bindings.push(l));for(let _ of j)_._dom=w;return j=f,l._dom=w},t=(i,d=s(),u)=>{let l={_getters:new Set,_setters:new Set},f={f:i,s:d};f._dom=u??j?.push(f)??y,d.val=F(i,l,d.rawVal);for(let w of l._getters)l._setters.has(w)||(W(w),w._listeners.push(f));return d},n=(i,...d)=>{for(let u of d.flat(1/0)){let l=g(u??0),f=l===J?e(()=>u.val):l===O?e(u):u;f!=N&&i.append(f)}return i},r=(i,d,...u)=>{let[l,...f]=g(u[0]??0)===p?u:[{},...u],w=i?document.createElementNS(i,d):document.createElement(d);for(let[_,K]of Object.entries(l)){let Z=T=>T?Object.getOwnPropertyDescriptor(T,_)??Z(g(T)):N,a=d+","+_,x=$[a]??($[a]=Z(g(w))?.set??0),m=_.startsWith("on")?(T,D)=>{let z=_.slice(2);w.removeEventListener(z,D),w.addEventListener(z,T)}:x?x.bind(w):w.setAttribute.bind(w,_),h=g(K??0);_.startsWith("on")||h===O&&(K=t(K),h=J),h===J?e(()=>(m(K.val,K._oldVal),w)):m(K)}return n(w,...f)},o=i=>({get:(d,u)=>r.bind(N,i,u)}),v=new Proxy(i=>new Proxy(r,o(i)),o()),c=(i,d)=>d?d!==i&&i.replaceWith(d):i.remove(),V=()=>{let i=0,d=[...P].filter(l=>l.rawVal!==l._oldVal);do{I=new Set;for(let l of new Set(d.flatMap(f=>f._listeners=L(f._listeners))))t(l.f,l.s,l._dom),l._dom=N}while(++i<100&&(d=[...I]).length);let u=[...P].filter(l=>l.rawVal!==l._oldVal);P=N;for(let l of new Set(u.flatMap(f=>f._bindings=L(f._bindings))))c(l._dom,e(l.f,l._dom)),l._dom=N;for(let l of u)l._oldVal=l.rawVal};return{add:n,tags:v,state:s,derive:t,hydrate:(i,d)=>c(i,e(d,i))}})();var se=g=>{let{fromEntries:P,entries:I,keys:S,getPrototypeOf:j}=Object,{get:y,set:b,deleteProperty:A,ownKeys:$}=Reflect,{state:p,derive:O,add:N,tags:C}=g,F=j(p()),L,W=1e3,J,s=Symbol(),e=Symbol(),t=Symbol(),n=Symbol(),r=Symbol(),o=Symbol(),v=a=>(a[t]=1,a),c=a=>a?.[t]?O(()=>V(a())):p(V(a)),V=a=>{if(!(a instanceof Object)||a[s])return a;let x=new Proxy((a[s]=P(I(a).map(([m,h])=>[m,c(h)])),a[e]=a,a[n]=[],a[r]=p(1),a),{get:(m,h)=>j(m[s][h]??0)===F?m[s][h].val:(h==="length"&&m[r].val,y(m,h,x)),set(m,h,T){let D=m[s];if(h in D)return D[h].val=V(T),1;let z=h in m,E=z&&h==="length"&&T!==m.length;if(b(m,h,T))return z?E&&++m[r].val:b(D,h,c(T))&&(++m[r].val,f(x,h,D[h])),1},deleteProperty:(m,h)=>(A(m[s],h)&&w(m,h),A(m,h)&&++m[r].val),ownKeys:m=>(m[r].val,$(m))});return x},k=a=>a[s],i=a=>new Proxy(a[s],{get:(x,m)=>x[m].rawVal}),d=a=>a[n]=a[n].filter(x=>x._containerDom.isConnected),u=(a,x,m,h)=>()=>{let T=h(m,()=>delete a[x],x);return T[o]=x,T},l=(a,x,m,{_containerDom:h,f:T},D)=>{if(N(h,u(a,x,m,T)),!D&&Array.isArray(a)&&x!=a.length-1){let z={};for(let Y of h.childNodes)z[Y[o]]=Y;let E=h.firstChild;for(let Y of S(a))E===z[Y]?E=E.nextSibling:h.insertBefore(z[Y],E)}},f=(a,x,m)=>d(a).forEach(l.bind(J,a,x,m)),w=(a,x)=>{for(let m of d(a))[...m._containerDom.childNodes].find(h=>h[o]===x)?.remove()},_=a=>(L??(L=(setTimeout(()=>(L.forEach(d),L=J),W),new Set))).add(a);return{calc:v,reactive:V,stateFields:k,raw:i,list:(a,x,m)=>{let h={_containerDom:a(),f:m};x[n].push(h),_(x);for(let[T,D]of I(x[s]))l(x,T,D,h,1);return h._containerDom},replace:(a,x)=>{let m=Array.isArray(a)?I(x(a.filter(E=>1))):x(I(a)),h=a[e],T=P(m),D=a[s],z=P(m.map(([E,Y])=>{let X=D[E];return X?X.val=V(Y):X=c(Y),[E,X]}));for(let{_containerDom:E,f:Y}of d(a)){let X={};for(let G of[...E.childNodes])G[o]in z?X[G[o]]=G:G.remove();let B=E.firstChild;for(let[G,R]of I(z))B===X[G]?B=B.nextSibling:E.insertBefore(X[G]??C.p(u(a,G,R,Y)).firstChild,B)}for(let E in h)delete h[E];Array.isArray(h)&&(h.length=0);for(let E in T)h[E]=T[E];a[s]=z,++a[r].val}}};var ne=(()=>{function g(y){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(y)?y:`"${y}"`}function P(y=""){let b=[];if(y.includes("{{")&&y.includes("}}")){let $=y.indexOf("{{"),p=y.indexOf("}}"),O=y.slice(0,$).trim(),N=y.slice(p+2).trim(),C=y.slice($+2,p).trim();if(O.length>0&&b.push(JSON.stringify(O)),C.length>0&&b.push(C),N.length>0){let F=P(N).filter(L=>L);N.length>0&&b.push(...F)}}else b.push(JSON.stringify(y));let A=b.filter($=>$);return A.length===0?[]:A}function I(y,b=new Set){if(y.nodeType===3){let t=P(y.nodeValue.trim()).filter(n=>n&&n!='""').join(",");return{tags:b,body:t}}if(!y.tagName)return{tags:b,body:""};let A=y.tagName.toLowerCase();b.add(A);let $=[],p={};Array.from(y.attributes).forEach(e=>{p[e.name.trim()]=e.value.trim()}),p.hasOwnProperty("x-tags")&&(p["x-tags"].split(/[\s|,]+/).map(t=>t.trim()).filter(t=>t).forEach(t=>{b.add(t.toLowerCase())}),delete p["x-tags"]),Object.keys(p).forEach(e=>{if(e.startsWith("x-state:")||e.startsWith("x-reactive:")||e.startsWith("x-stateFields:")||e.startsWith("x-derive")||e.startsWith("x-script")){if(e.startsWith("x-state:")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.state(${p[e].trim()});`)}else if(e.startsWith("x-derive"))if(e.includes(":")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.derive(${p[e].trim()});`)}else $.push(`tjs.derive(${p[e].trim()});`);else if(e.startsWith("x-reactive:")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.reactive(${p[e].trim()});`)}else if(e.startsWith("x-stateFields:")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.stateFields(${p[e].trim()});`)}else $.push(p[e]);delete p[e]}});let O="";p["x-list"]&&(O=p["x-list"]||"",delete p["x-list"]);let N=Object.keys(p).map(e=>{if(e.startsWith("x-")){let t=e.substr(2);return`${g(t)}:${p[e]||""}`}else return`${g(e)}:${JSON.stringify(p[e])}`}).join(","),C=[],F="";A==="script"?F=JSON.stringify(y.textContent):(C=Array.from(y.childNodes).map(e=>I(e,b)),F=C.filter(e=>e.body).map(e=>e.body).join(","));let L=A.replace(/-/g,"_"),W="";var J=()=>{if(O){let e=O.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(e){let{k:t,d:n}=e.groups;W=`tjs.list(${L},${n},(${t}) =>${F||""})`}}};Object.keys(p).length>0?(W=`${L}({${N}} ${F?","+F:""})`,J()):(W=F?`${L}(${F})`:`${L}()`,J());let s=W;return $.length>0&&(s=`()=>{ ${$.join(`
`)} return ${W};}`),{tags:b,body:s}}function S(y,b){let p=new DOMParser().parseFromString(b,"text/html").body;return j(y,p)}function j(y,b){let A=[];for(let O of b.childNodes)A.push(I(O));let $=A.filter(O=>O.tags.size>0),p="";if($.length>0){let O=new Set;$.forEach(C=>{C.tags.forEach(F=>O.add(F))}),p=`const {${[...O].map(C=>/-/.test(C)?`"${C}":${C.replace(/-/g,"_")}`:C).join(", ")}}=tjs.tags;`}return[`${y}.replaceChildren();`,p,...$.map(O=>`tjs.add(${y}, ${O.body});`)]}return{htmlTotjsJS:S,domToTjs:j}})();var ie=g=>{function P(I,S,j={mode:"open"}){window.customElements.define(I,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(y,b){super.setAttribute(y,b),this.attrs[y]&&(this.attrs[y].val=b)}connectedCallback(){let y;g.add(j?this.attachShadow(j):this,S({attr:(b,A)=>this.attrs[b]??=g.state(this.getAttribute(b)??A),mount:b=>y=b,$this:this,children:j?g.tags.slot():[...this.childNodes]})),this.dismount=y?.()}disconnectedCallback(){this.dismount?.()}})}return{define:P}};var oe=g=>{let P=0,{button:I,div:S,header:j,input:y,label:b,span:A,style:$}=g.tags,p=s=>Object.entries(s).map(([e,t])=>`${e}: ${t};`).join(""),O=s=>{},N=Object.getPrototypeOf(g.state(null)),C=s=>Object.getPrototypeOf(s??0)===N?s:g.state(s),F=({value:s,container:e=S,Loading:t,Error:n},r)=>{let o=g.state({status:"pending"});return s.then(v=>o.val={status:"fulfilled",value:v}).catch(v=>o.val={status:"rejected",value:v}),e(()=>o.val.status==="pending"?t?.()??"":o.val.status==="rejected"?n?.(o.val.value):r(o.val.value))},L=()=>++P,W=({title:s,closed:e=g.state(!1),x:t=100,y:n=100,width:r=300,height:o=200,closeCross:v="\xD7",customStacking:c=!1,zIndex:V=1,disableMove:k=!1,disableResize:i=!1,headerColor:d="lightgray",windowClass:u="",windowStyleOverrides:l={},headerClass:f="",headerStyleOverrides:w={},childrenContainerClass:_="",childrenContainerStyleOverrides:K={},crossClass:Z="",crossStyleOverrides:a={},crossHoverClass:x="",crossHoverStyleOverrides:m={}},...h)=>{let T=C(t),D=C(n),z=C(r),E=C(o),Y=C(V);c||(Y.val=L());let X=g.state(!1),B=g.state(null),G=g.state(0),R=g.state(0),te=g.state(0),re=g.state(0),q=x||Object.keys(m)?g.state(!1):null,le=M=>{M.button===0&&(X.val=!0,G.val=M.clientX,R.val=M.clientY,document.body.style.userSelect="none")},Q=M=>U=>{B.val=M,G.val=U.clientX,R.val=U.clientY,te.val=z.val,re.val=E.val,document.body.style.userSelect="none"},de=M=>{if(X.val)T.val+=M.clientX-G.val,D.val+=M.clientY-R.val,G.val=M.clientX,R.val=M.clientY;else if(B.val){let U=M.clientX-G.val,ue=M.clientY-R.val;B.val.includes("right")&&(z.val=te.val+U),B.val.includes("bottom")&&(E.val=re.val+ue)}},ce=()=>{X.val=!1,B.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let M=$({type:"text/css",id:"tjsui-window-style"},O({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(M)}return()=>e.val?null:S({class:["tjsui-window"].concat(u||[]).join(" "),style:()=>p({left:`${T.val}px`,top:`${D.val}px`,width:`${z.val}px`,height:`${E.val}px`,"z-index":Y.val,...l}),...c?{}:{onmousedown:()=>Y.val=L()}},s?j({class:["tjsui-window-header"].concat(f||[]).join(" "),style:p({"background-color":d,...k?{cursor:"auto"}:{},...w}),...k?{}:{onmousedown:le}},s,v?A({class:()=>["tjsui-window-cross"].concat(Z||[]).concat(x&&q.val?x:[]).join(" "),style:()=>p({...a,...Object.keys(m).length&&q.val?m:{}}),onclick:()=>e.val=!0,...q?{onmouseenter:()=>q.val=!0,onmouseleave:()=>q.val=!1}:{}},v):null):k?null:S({class:"tjsui-window-dragarea",onmousedown:le}),i?[]:[S({class:"tjsui-window-resize-right",onmousedown:Q("right")}),S({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),S({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],S({class:["tjsui-window-children"].concat(_||[]).join(" "),style:p(K)},h))};class J{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:e="unset",bottom:t="unset",backgroundColor:n="#333D",fontColor:r="white",fadeOutSec:o=.3,boardClass:v="",boardStyleOverrides:c={},messageClass:V="",messageStyleOverrides:k={},closerClass:i="",closerStyleOverrides:d={}},u=document.body){let l=p({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:e,bottom:t,left:"50%",transform:"translateX(-50%)","z-index":1e4,...c});this._fadeOutSec=o,this._messageClass=V,this._messageStylesStr=p({display:"flex","background-color":n,color:r,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${o}s, transform ${o}s`,...k}),this._closerClass=i,this._closerStylesStr=p({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...d}),u.appendChild(this._dom=S({class:v,style:l}))}show({message:e,closer:t,durationSec:n,closed:r=g.state(!1)}){let o=g.state(!1);g.derive(()=>setTimeout(c=>o.val=c,this._fadeOutSec*1e3,r.val));let v=S({class:this._messageClass,style:this._messageStylesStr},S(e),t?S({class:this._closerClass,style:this._closerStylesStr,onclick:()=>r.val=!0},t):null);return g.derive(()=>r.val&&(v.style.opacity="0",v.style.transform="translateY(-20px)")),n&&setTimeout(()=>r.val=!0,n*1e3),g.add(this._dom,()=>o.val?null:v),v}remove(){this._dom.remove()}}return{Await:F,MessageBoard:J,topMostZIndex:L,FloatingWindow:W}};var ae=(g,P)=>{let I=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,S={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},j={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},y=(s="")=>{let e=s.match(I);if(!e)return[];let{p:t,v:n}=e.groups,r=P[t];if(!r)return t=="cf"?n&&(n=[n[0].toLowerCase(),n.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[n])?typeof window.TFL_STYLE_CONFIG[n]=="string"?[window.TFL_STYLE_CONFIG[n]]:window.TFL_STYLE_CONFIG[n]:[]:[];let o=[],v="";if(n&&n.endsWith("!")&&(n=n.substr(0,n.length-1),v="!important"),t.length==s.length&&r.cssText)return typeof r.cssText=="string"?[r.cssText]:Array.isArray(r.cssText)?r.cssText:[];if(r.names&&typeof r.names=="string"&&(o=[r.names]),r.names&&Array.isArray(r.names)&&(o=r.names),t.length==s.length&&r.default&&o.length>0)return o.map(V=>`${V}:${r.default}${v}`);if(!n&&typeof r.fn=="function"){let c=r.fn();if(typeof c=="string")return[c];if(Array.isArray(c))return c}if(n){if(!r.default&&!r.cssText&&typeof r.fn=="function"){let l=[n[0].toLowerCase(),n.substr(1)].join(""),f=r.fn(l);if(f)return[f]}let c=/^\{(?<v>.+)\}$/,V=/^(?<v>--[a-z0-9-]+)$/,k=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,i=n.match(c);if(i){let{v:l}=i.groups;l=l.toLowerCase(),l=l.replace(/[_]+/g,_=>_.length%2==1?" ":_.substr(0,_.length/2));let f=o.map(_=>`${_}:${l}${v}`);return f.every(_=>CSS.supports(_))?f:[]}if(i=n.match(V),i){let{v:l}=i.groups;return o.map(w=>`${w}:var(${l})${v}`)}if(i=n.match(k),i){let{d1:l,d2:f}=i.groups;if(Number(f)>0){let w=o.map(_=>`${_}:calc(${l} * 100% / ${f})`);if(w.every(_=>CSS.supports(_)))return w}}let d=[n[0].toLowerCase(),n.substr(1)].join(""),u=r.exts&&Object.keys(r.exts).length>0?r.exts[d]:"";if(u)return o.map(f=>`${f}:${u}${v}`);{let l=o.map(f=>`${f}:${d}${v}`);if(l.every(f=>CSS.supports(f)))return l}if(typeof r.fn=="function"){let l=r.fn(d);if(l){let f=o.map(w=>`${w}:${l}${v}`);if(f.every(w=>CSS.supports(w)))return f}}}return[]},b=s=>{let e=y(s);return Array.isArray(e)&&e.length>0?e.join(";"):""},A=s=>{var e=/class="([^"]+)"/g,t=[];return[...s.matchAll(e)].forEach(n=>t=t.concat(n[1].split(" "))),[...new Set(t)]},$=s=>{if(!s)return[];let e=[].concat(...[...s.querySelectorAll("[class]")].map(n=>[...n.classList])),t=[...new Set(e)];return console.log("ls",t),t},p=s=>{console.log(s);let t=(s||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(t){let{m:r,v:o=""}=t.groups,v="";var n=(i,d=!0)=>{if(typeof i=="string"){let u=o.indexOf(i);d&&(u+=1),v=o.substr(u),o=o.substr(0,o.length-v.length)}else{let u=(i||[]).map(l=>[l,o.indexOf(l)]);if(u=u.filter(l=>l[1]>-1),u.length>0){u.sort((f,w)=>f[1]>=w[1]?1:-1);let l=u[0][1];d&&(l+=1),v=o.substr(l),o=o.substr(0,o.length-v.length)}}};o.indexOf("}")>-1?n("}"):n([":","_",">","+","~","*"],!1);let c=b(o);if(!c)return null;let V=CSS.escape(s),k=v?v.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,i=>i=="_"?" ":["~","+","*",">"].includes(i)?` ${i} `:i):"";return{type:r||"default",ext:!!k,css:`.${V}${k} {${c}}`,selectorText:`.${V}${k}`}}return null},O=(s=[])=>s.map(t=>p(t)).filter(t=>t),N=(s,e,t="")=>t?(j[s]&&j[s][e]&&t.length>0&&j[s][e].insertRule(t),!0):!1,C=(s,e,t=[])=>t.length==0?!1:j[s]&&j[s][e]?(j[s][e].replaceSync(t.join(`
`)),!0):!1,F=(s=[])=>{let e=O(s);for(let t of Object.keys(S)){let n=e.filter(c=>c.type==t&&c.ext==!1),r=e.filter(c=>c.type==t&&c.ext==!0),o=n.map(c=>c.css),v=r.map(c=>c.css);if(o.length>0)for(let c of o)S[t][0].has(c)||(S[t][0].add(c),N(t,0,c));if(v.length>0)for(let c of v)S[t][1].has(c)||S[t][1].add(c),N(t,1,c)}},L=s=>{new MutationObserver(e=>{for(let t of e)if(console.log("m",t),t.type=="attributes"&&t.attributeName=="class"){let r=[...t.target.classList].map(o=>o.trim()).filter(o=>o);typeof s=="function"&&s([...new Set(r)])}else if(t.type=="childList"&&t.addedNodes.length>0){let n=[...t.addedNodes].filter(r=>r.nodeType!=3).map(r=>[...r.classList]).flat(1/0).map(r=>r.trim()).filter(r=>r);typeof s=="function"&&s([...new Set(n)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},W=()=>{let s;return e=>{clearTimeout(s),s=setTimeout(()=>{Object.keys(S).forEach(t=>{let n="tfl-"+t+"-0",r="tfl-"+t+"-1";S[t][0].size>0&&localStorage.setItem(n,JSON.stringify([...S[t][0]])),S[t][1].size>0&&localStorage.setItem(r,JSON.stringify([...S[t][1]]))})},e||0)}};return{loadEventDom:()=>{var s=Object.values(j).flat();let e=new CSSStyleSheet;g&&Array.isArray(g)&&e.replaceSync(g.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e,...s],Object.keys(S).forEach(r=>{let o="tfl-"+r+"-0",v="tfl-"+r+"-1";if(localStorage.getItem(o))try{S[r][0]=new Set(JSON.parse(localStorage.getItem(o)))}catch{localStorage.removeItem(o)}if(localStorage.getItem(v))try{S[r][1]=new Set(JSON.parse(localStorage.getItem(v)))}catch{localStorage.removeItem(v)}}),Object.keys(S).forEach(r=>{let o=[...S[r][0]],v=[...S[r][1]];C(r,0,o),C(r,1,v)});let t=W(),n=$(document);console.log(1,n),F(n),L(r=>{console.log("evt",r),F(r),t(1e3)})}}};Object.defineProperty(window,"tjs",{value:{...H,...se(H),...ne,...ie(H),...oe(H),cssFun:ae},writable:!1,configurable:!1,enumerable:!1});(()=>{addEventListener("tjs-load",function(){let I=window.tjs.htmlTotjsJS("document.body",document.body.innerHTML).join(`
`);new Function(I)()});let g=setInterval(()=>{if(document&&document.body&&document.body.isConnected){let P=new Event("tjs-load");dispatchEvent(P),clearInterval(g)}},1)})();})();

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
