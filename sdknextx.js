let wasm_bindgen;
(()=>{var q=(()=>{let v=Object.getPrototypeOf,P,V,m,j,I={isConnected:1},g=1e3,$,L={},x=v(I),y=v(v),_,N=(n,d,u,s)=>(n??(setTimeout(u,s),new Set)).add(d),E=(n,d,u)=>{let s=m;m=d;try{return n(u)}catch(f){return console.error(f),u}finally{m=s}},O=n=>n.filter(d=>d._dom?.isConnected),W=n=>$=N($,n,()=>{for(let d of $)d._bindings=O(d._bindings),d._listeners=O(d._listeners);$=_},g),D={get val(){return m?._getters?.add(this),this.rawVal},get oldVal(){return m?._getters?.add(this),this._oldVal},set val(n){m?._setters?.add(this),n!==this.rawVal&&(this.rawVal=n,this._bindings.length+this._listeners.length?(V?.add(this),P=N(P,this,F)):this._oldVal=n)}},l=n=>Object.create(D,{rawVal:{value:n,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:n,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),a=(n,d)=>{let u={_getters:new Set,_setters:new Set},s={f:n},f=j;j=[];let w=E(n,u,d);w=(w??document).nodeType?w:new Text(w);for(let C of u._getters)u._setters.has(C)||(W(C),C._bindings.push(s));for(let C of j)C._dom=w;return j=f,s._dom=w},e=(n,d=l(),u)=>{let s={_getters:new Set,_setters:new Set},f={f:n,s:d};f._dom=u??j?.push(f)??I,d.val=E(n,s,d.rawVal);for(let w of s._getters)s._setters.has(w)||(W(w),w._listeners.push(f));return d},t=(n,...d)=>{for(let u of d.flat(1/0)){let s=v(u??0),f=s===D?a(()=>u.val):s===y?a(u):u;f!=_&&n.append(f)}return n},r=(n,d,...u)=>{let[s,...f]=v(u[0]??0)===x?u:[{},...u],w=n?document.createElementNS(n,d):document.createElement(d);for(let[C,K]of Object.entries(s)){let Z=A=>A?Object.getOwnPropertyDescriptor(A,C)??Z(v(A)):_,o=d+","+C,b=L[o]??(L[o]=Z(v(w))?.set??0),p=C.startsWith("on")?(A,k)=>{let z=C.slice(2);w.removeEventListener(z,k),w.addEventListener(z,A)}:b?b.bind(w):w.setAttribute.bind(w,C),h=v(K??0);C.startsWith("on")||h===y&&(K=e(K),h=D),h===D?a(()=>(p(K.val,K._oldVal),w)):p(K)}return t(w,...f)},i=n=>({get:(d,u)=>r.bind(_,n,u)}),S=new Proxy(n=>new Proxy(r,i(n)),i()),c=(n,d)=>d?d!==n&&n.replaceWith(d):n.remove(),F=()=>{let n=0,d=[...P].filter(s=>s.rawVal!==s._oldVal);do{V=new Set;for(let s of new Set(d.flatMap(f=>f._listeners=O(f._listeners))))e(s.f,s.s,s._dom),s._dom=_}while(++n<100&&(d=[...V]).length);let u=[...P].filter(s=>s.rawVal!==s._oldVal);P=_;for(let s of new Set(u.flatMap(f=>f._bindings=O(f._bindings))))c(s._dom,a(s.f,s._dom)),s._dom=_;for(let s of u)s._oldVal=s.rawVal};return{add:t,tags:S,state:l,derive:e,hydrate:(n,d)=>c(n,a(d,n))}})();var le=v=>{let{fromEntries:P,entries:V,keys:m,getPrototypeOf:j}=Object,{get:I,set:g,deleteProperty:$,ownKeys:L}=Reflect,{state:x,derive:y,add:_,tags:N}=v,E=j(x()),O,W=1e3,D,l=Symbol(),a=Symbol(),e=Symbol(),t=Symbol(),r=Symbol(),i=Symbol(),S=o=>(o[e]=1,o),c=o=>o?.[e]?y(()=>F(o())):x(F(o)),F=o=>{if(!(o instanceof Object)||o[l])return o;let b=new Proxy((o[l]=P(V(o).map(([p,h])=>[p,c(h)])),o[a]=o,o[t]=[],o[r]=x(1),o),{get:(p,h)=>j(p[l][h]??0)===E?p[l][h].val:(h==="length"&&p[r].val,I(p,h,b)),set(p,h,A){let k=p[l];if(h in k)return k[h].val=F(A),1;let z=h in p,T=z&&h==="length"&&A!==p.length;if(g(p,h,A))return z?T&&++p[r].val:g(k,h,c(A))&&(++p[r].val,f(b,h,k[h])),1},deleteProperty:(p,h)=>($(p[l],h)&&w(p,h),$(p,h)&&++p[r].val),ownKeys:p=>(p[r].val,L(p))});return b},Y=o=>o[l],n=o=>new Proxy(o[l],{get:(b,p)=>b[p].rawVal}),d=o=>o[t]=o[t].filter(b=>b._containerDom.isConnected),u=(o,b,p,h)=>()=>{let A=h(p,()=>delete o[b],b);return A[i]=b,A},s=(o,b,p,{_containerDom:h,f:A},k)=>{if(_(h,u(o,b,p,A)),!k&&Array.isArray(o)&&b!=o.length-1){let z={};for(let G of h.childNodes)z[G[i]]=G;let T=h.firstChild;for(let G of m(o))T===z[G]?T=T.nextSibling:h.insertBefore(z[G],T)}},f=(o,b,p)=>d(o).forEach(s.bind(D,o,b,p)),w=(o,b)=>{for(let p of d(o))[...p._containerDom.childNodes].find(h=>h[i]===b)?.remove()},C=o=>(O??(O=(setTimeout(()=>(O.forEach(d),O=D),W),new Set))).add(o);return{calc:S,reactive:F,stateFields:Y,raw:n,$list:(o,b,p)=>{let h={_containerDom:o(),f:p};b[t].push(h),C(b);for(let[A,k]of V(b[l]))s(b,A,k,h,1);return h._containerDom},replace:(o,b)=>{let p=Array.isArray(o)?V(b(o.filter(T=>1))):b(V(o)),h=o[a],A=P(p),k=o[l],z=P(p.map(([T,G])=>{let J=k[T];return J?J.val=F(G):J=c(G),[T,J]}));for(let{_containerDom:T,f:G}of d(o)){let J={};for(let X of[...T.childNodes])X[i]in z?J[X[i]]=X:X.remove();let B=T.firstChild;for(let[X,R]of V(z))B===J[X]?B=B.nextSibling:T.insertBefore(J[X]??N.p(u(o,X,R,G)).firstChild,B)}for(let T in h)delete h[T];Array.isArray(h)&&(h.length=0);for(let T in A)h[T]=A[T];o[l]=z,++o[r].val}}};var ne=v=>{function P(g){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(g)?g:`"${g}"`}function V(g=""){let $=[];if(g.includes("{{")&&g.includes("}}")){let x=g.indexOf("{{"),y=g.indexOf("}}"),_=g.slice(0,x).trim(),N=g.slice(y+2).trim(),E=g.slice(x+2,y).trim();if(_.length>0&&$.push(JSON.stringify(_)),E.length>0&&$.push(E),N.length>0){let O=V(N).filter(W=>W);N.length>0&&$.push(...O)}}else $.push(JSON.stringify(g));let L=$.filter(x=>x);return L.length===0?[]:L}function m(g,$=new Set){if(g.nodeType===3){let t=V(g.nodeValue.trim()).filter(r=>r&&r!='""').join(",");return{tags:$,body:t}}if(!g.tagName)return{tags:$,body:""};let L=g.tagName.toLowerCase();$.add(L);let x=[],y={};Array.from(g.attributes).forEach(e=>{y[e.name.trim()]=e.value.trim()}),y.hasOwnProperty("x-tags")&&(y["x-tags"].split(/[\s|,]+/).map(t=>t.trim()).filter(t=>t).forEach(t=>{$.add(t.toLowerCase())}),delete y["x-tags"]),Object.keys(y).forEach(e=>{if(e.startsWith("x-state:")||e.startsWith("x-reactive:")||e.startsWith("x-stateFields:")||e.startsWith("x-derive")||e.startsWith("x-script")){if(e.startsWith("x-state:")){let t=e.split(":")[1];x.push(`const ${t.trim()}=tjs.state(${y[e].trim()});`)}else if(e.startsWith("x-derive"))if(e.includes(":")){let t=e.split(":")[1];x.push(`const ${t.trim()}=tjs.derive(${y[e].trim()});`)}else x.push(`tjs.derive(${y[e].trim()});`);else if(e.startsWith("x-reactive:")){let t=e.split(":")[1];x.push(`const ${t.trim()}=tjsX.reactive(${y[e].trim()});`)}else if(e.startsWith("x-stateFields:")){let t=e.split(":")[1];x.push(`const ${t.trim()}=tjsX.stateFields(${y[e].trim()});`)}else x.push(y[e]);delete y[e]}});let _="";y["x-list"]&&(_=y["x-list"]||"",delete y["x-list"]);let N=Object.keys(y).map(e=>{if(e.startsWith("x-")){let t=e.substr(2);return`${P(t)}:${y[e]||""}`}else return`${P(e)}:${JSON.stringify(y[e])}`}).join(","),E=[],O="";L==="script"?O=JSON.stringify(g.textContent):(E=Array.from(g.childNodes).map(e=>m(e,$)),O=E.filter(e=>e.body).map(e=>e.body).join(","));let W=L.replace(/-/g,"_"),D="";var l=()=>{if(_){let e=_.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(e){let{k:t,d:r}=e.groups;D=`tjsX.list(${W},${r},(${t}) =>${O||""})`}}};Object.keys(y).length>0?(D=`${W}({${N}} ${O?","+O:""})`,l()):(D=O?`${W}(${O})`:`${W}()`,l());let a=D;return x.length>0&&(a=`()=>{ ${x.join(`
`)} return ${D};}`),{tags:$,body:a}}function j(g,$){let y=new DOMParser().parseFromString($,"text/html").body;return I(g,y)}function I(g,$){let L=[];for(let _ of $.childNodes)L.push(m(_));let x=L.filter(_=>_.tags.size>0),y="";if(x.length>0){let _=new Set;x.forEach(E=>{E.tags.forEach(O=>_.add(O))}),y=`const {${[..._].map(E=>/-/.test(E)?`"${E}":${E.replace(/-/g,"_")}`:E).join(", ")}}=tjs.tags;`}return[`${g}.replaceChildren();`,y,...x.map(_=>`tjs.add(${g}, ${_.body});`)]}return{htmlTotjsJS:j,domToTjs:I}};var ie=v=>{function P(V,m,j={mode:"open"}){window.customElements.define(V,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(I,g){super.setAttribute(I,g),this.attrs[I]&&(this.attrs[I].val=g)}connectedCallback(){let I;v.add(j?this.attachShadow(j):this,m({attr:(g,$)=>this.attrs[g]??=v.state(this.getAttribute(g)??$),mount:g=>I=g,$this:this,children:j?v.tags.slot():[...this.childNodes]})),this.dismount=I?.()}disconnectedCallback(){this.dismount?.()}})}return{define:P}};var oe=v=>{let P=0,{button:V,div:m,header:j,input:I,label:g,span:$,style:L}=v.tags,x=l=>Object.entries(l).map(([a,e])=>`${a}: ${e};`).join(""),y=l=>{},_=Object.getPrototypeOf(v.state(null)),N=l=>Object.getPrototypeOf(l??0)===_?l:v.state(l),E=({value:l,container:a=m,Loading:e,Error:t},r)=>{let i=v.state({status:"pending"});return l.then(S=>i.val={status:"fulfilled",value:S}).catch(S=>i.val={status:"rejected",value:S}),a(()=>i.val.status==="pending"?e?.()??"":i.val.status==="rejected"?t?.(i.val.value):r(i.val.value))},O=()=>++P,W=({title:l,closed:a=v.state(!1),x:e=100,y:t=100,width:r=300,height:i=200,closeCross:S="\xD7",customStacking:c=!1,zIndex:F=1,disableMove:Y=!1,disableResize:n=!1,headerColor:d="lightgray",windowClass:u="",windowStyleOverrides:s={},headerClass:f="",headerStyleOverrides:w={},childrenContainerClass:C="",childrenContainerStyleOverrides:K={},crossClass:Z="",crossStyleOverrides:o={},crossHoverClass:b="",crossHoverStyleOverrides:p={}},...h)=>{let A=N(e),k=N(t),z=N(r),T=N(i),G=N(F);c||(G.val=O());let J=v.state(!1),B=v.state(null),X=v.state(0),R=v.state(0),te=v.state(0),re=v.state(0),U=b||Object.keys(p)?v.state(!1):null,se=M=>{M.button===0&&(J.val=!0,X.val=M.clientX,R.val=M.clientY,document.body.style.userSelect="none")},Q=M=>H=>{B.val=M,X.val=H.clientX,R.val=H.clientY,te.val=z.val,re.val=T.val,document.body.style.userSelect="none"},de=M=>{if(J.val)A.val+=M.clientX-X.val,k.val+=M.clientY-R.val,X.val=M.clientX,R.val=M.clientY;else if(B.val){let H=M.clientX-X.val,ue=M.clientY-R.val;B.val.includes("right")&&(z.val=te.val+H),B.val.includes("bottom")&&(T.val=re.val+ue)}},ce=()=>{J.val=!1,B.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let M=L({type:"text/css",id:"tjsui-window-style"},y({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(M)}return()=>a.val?null:m({class:["tjsui-window"].concat(u||[]).join(" "),style:()=>x({left:`${A.val}px`,top:`${k.val}px`,width:`${z.val}px`,height:`${T.val}px`,"z-index":G.val,...s}),...c?{}:{onmousedown:()=>G.val=O()}},l?j({class:["tjsui-window-header"].concat(f||[]).join(" "),style:x({"background-color":d,...Y?{cursor:"auto"}:{},...w}),...Y?{}:{onmousedown:se}},l,S?$({class:()=>["tjsui-window-cross"].concat(Z||[]).concat(b&&U.val?b:[]).join(" "),style:()=>x({...o,...Object.keys(p).length&&U.val?p:{}}),onclick:()=>a.val=!0,...U?{onmouseenter:()=>U.val=!0,onmouseleave:()=>U.val=!1}:{}},S):null):Y?null:m({class:"tjsui-window-dragarea",onmousedown:se}),n?[]:[m({class:"tjsui-window-resize-right",onmousedown:Q("right")}),m({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),m({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],m({class:["tjsui-window-children"].concat(C||[]).join(" "),style:x(K)},h))};class D{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:a="unset",bottom:e="unset",backgroundColor:t="#333D",fontColor:r="white",fadeOutSec:i=.3,boardClass:S="",boardStyleOverrides:c={},messageClass:F="",messageStyleOverrides:Y={},closerClass:n="",closerStyleOverrides:d={}},u=document.body){let s=x({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:a,bottom:e,left:"50%",transform:"translateX(-50%)","z-index":1e4,...c});this._fadeOutSec=i,this._messageClass=F,this._messageStylesStr=x({display:"flex","background-color":t,color:r,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${i}s, transform ${i}s`,...Y}),this._closerClass=n,this._closerStylesStr=x({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...d}),u.appendChild(this._dom=m({class:S,style:s}))}show({message:a,closer:e,durationSec:t,closed:r=v.state(!1)}){let i=v.state(!1);v.derive(()=>setTimeout(c=>i.val=c,this._fadeOutSec*1e3,r.val));let S=m({class:this._messageClass,style:this._messageStylesStr},m(a),e?m({class:this._closerClass,style:this._closerStylesStr,onclick:()=>r.val=!0},e):null);return v.derive(()=>r.val&&(S.style.opacity="0",S.style.transform="translateY(-20px)")),t&&setTimeout(()=>r.val=!0,t*1e3),v.add(this._dom,()=>i.val?null:S),S}remove(){this._dom.remove()}}return{Await:E,MessageBoard:D,topMostZIndex:O,FloatingWindow:W}};var ae=(v,P)=>{let V=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,m={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},j={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},I=(l="")=>{let a=l.match(V);if(!a)return[];let{p:e,v:t}=a.groups,r=P[e];if(!r)return e=="cf"?t&&(t=[t[0].toLowerCase(),t.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[t])?typeof window.TFL_STYLE_CONFIG[t]=="string"?[window.TFL_STYLE_CONFIG[t]]:window.TFL_STYLE_CONFIG[t]:[]:[];let i=[],S="";if(t&&t.endsWith("!")&&(t=t.substr(0,t.length-1),S="!important"),e.length==l.length&&r.cssText)return typeof r.cssText=="string"?[r.cssText]:Array.isArray(r.cssText)?r.cssText:[];if(r.names&&typeof r.names=="string"&&(i=[r.names]),r.names&&Array.isArray(r.names)&&(i=r.names),e.length==l.length&&r.default&&i.length>0)return i.map(F=>`${F}:${r.default}${S}`);if(!t&&typeof r.fn=="function"){let c=r.fn();if(typeof c=="string")return[c];if(Array.isArray(c))return c}if(t){if(!r.default&&!r.cssText&&typeof r.fn=="function"){let s=[t[0].toLowerCase(),t.substr(1)].join(""),f=r.fn(s);if(f)return[f]}let c=/^\{(?<v>.+)\}$/,F=/^(?<v>--[a-z0-9-]+)$/,Y=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,n=t.match(c);if(n){let{v:s}=n.groups;s=s.toLowerCase(),s=s.replace(/[_]+/g,C=>C.length%2==1?" ":C.substr(0,C.length/2));let f=i.map(C=>`${C}:${s}${S}`);return f.every(C=>CSS.supports(C))?f:[]}if(n=t.match(F),n){let{v:s}=n.groups;return i.map(w=>`${w}:var(${s})${S}`)}if(n=t.match(Y),n){let{d1:s,d2:f}=n.groups;if(Number(f)>0){let w=i.map(C=>`${C}:calc(${s} * 100% / ${f})`);if(w.every(C=>CSS.supports(C)))return w}}let d=[t[0].toLowerCase(),t.substr(1)].join(""),u=r.exts&&Object.keys(r.exts).length>0?r.exts[d]:"";if(u)return i.map(f=>`${f}:${u}${S}`);{let s=i.map(f=>`${f}:${d}${S}`);if(s.every(f=>CSS.supports(f)))return s}if(typeof r.fn=="function"){let s=r.fn(d);if(s){let f=i.map(w=>`${w}:${s}${S}`);if(f.every(w=>CSS.supports(w)))return f}}}return[]},g=l=>{let a=I(l);return Array.isArray(a)&&a.length>0?a.join(";"):""},$=l=>{var a=/class="([^"]+)"/g,e=[];return[...l.matchAll(a)].forEach(t=>e=e.concat(t[1].split(" "))),[...new Set(e)]},L=l=>{if(!l)return[];let a=[].concat(...[...l.querySelectorAll("[class]")].map(e=>[...e.classList]));return[...new Set(a)]},x=l=>{let e=(l||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(e){let{m:r,v:i=""}=e.groups,S="";var t=(n,d=!0)=>{if(typeof n=="string"){let u=i.indexOf(n);d&&(u+=1),S=i.substr(u),i=i.substr(0,i.length-S.length)}else{let u=(n||[]).map(s=>[s,i.indexOf(s)]);if(u=u.filter(s=>s[1]>-1),u.length>0){u.sort((f,w)=>f[1]>=w[1]?1:-1);let s=u[0][1];d&&(s+=1),S=i.substr(s),i=i.substr(0,i.length-S.length)}}};i.indexOf("}")>-1?t("}"):t([":","_",">","+","~","*"],!1);let c=g(i);if(!c)return null;let F=CSS.escape(l),Y=S?S.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,n=>n=="_"?" ":["~","+","*",">"].includes(n)?` ${n} `:n):"";return{type:r||"default",ext:!!Y,css:`.${F}${Y} {${c}}`,selectorText:`.${F}${Y}`}}return null},y=(l=[])=>l.map(e=>x(e)).filter(e=>e),_=(l,a,e="")=>e?(j[l]&&j[l][a]&&e.length>0&&j[l][a].insertRule(e),!0):!1,N=(l,a,e=[])=>e.length==0?!1:j[l]&&j[l][a]?(j[l][a].replaceSync(e.join(`
`)),!0):!1,E=(l=[])=>{let a=y(l);for(let e of Object.keys(m)){let t=a.filter(c=>c.type==e&&c.ext==!1),r=a.filter(c=>c.type==e&&c.ext==!0),i=t.map(c=>c.css),S=r.map(c=>c.css);if(i.length>0)for(let c of i)m[e][0].has(c)||(m[e][0].add(c),_(e,0,c));if(S.length>0)for(let c of S)m[e][1].has(c)||m[e][1].add(c),_(e,1,c)}},O=l=>{new MutationObserver(a=>{for(let e of a)if(e.type=="attributes"&&e.attributeName=="class"){let r=[...e.target.classList].map(i=>i.trim()).filter(i=>i);typeof l=="function"&&l(r)}else if(e.type=="childList"&&e.addedNodes.length>0){let t=[...e.addedNodes].map(r=>L(r.target)).flat();typeof l=="function"&&l(t)}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},W=()=>{let l;return a=>{clearTimeout(l),l=setTimeout(()=>{Object.keys(m).forEach(e=>{let t="tfl-"+e+"-0",r="tfl-"+e+"-1";m[e][0].size>0&&localStorage.setItem(t,JSON.stringify([...m[e][0]])),m[e][1].size>0&&localStorage.setItem(r,JSON.stringify([...m[e][1]]))})},a||0)}};return{loadEventDom:()=>{var l=Object.values(j).flat();let a=new CSSStyleSheet;v&&Array.isArray(v)&&a.replaceSync(v.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,a,...l],Object.keys(m).forEach(r=>{let i="tfl-"+r+"-0",S="tfl-"+r+"-1";if(localStorage.getItem(i))try{m[r][0]=new Set(JSON.parse(localStorage.getItem(i)))}catch{localStorage.removeItem(i)}if(localStorage.getItem(S))try{m[r][1]=new Set(JSON.parse(localStorage.getItem(S)))}catch{localStorage.removeItem(S)}}),Object.keys(m).forEach(r=>{let i=[...m[r][0]],S=[...m[r][1]];N(r,0,i),N(r,1,S)});let e=W(),t=L(document);E(t),O(r=>{E(r),e(1e3)})}}};window.tjs={...q,...le(q),...ne(q),...ie(q),...oe(q),cssFun:ae};})();

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
