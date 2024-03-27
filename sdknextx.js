let wasm_bindgen;
(()=>{var q=(()=>{let l=Object.getPrototypeOf,x,P,d,C,w={isConnected:1},$=1e3,F,j={},I=l(w),z=l(l),L,N=(u,f,c,o)=>(u??(setTimeout(c,o),new Set)).add(f),G=(u,f,c)=>{let o=d;d=f;try{return u(c)}catch(v){return console.error(v),c}finally{d=o}},M=u=>u.filter(f=>f._dom?.isConnected),b=u=>F=N(F,u,()=>{for(let f of F)f._bindings=M(f._bindings),f._listeners=M(f._listeners);F=L},$),_={get val(){return d?._getters?.add(this),this.rawVal},get oldVal(){return d?._getters?.add(this),this._oldVal},set val(u){d?._setters?.add(this),u!==this.rawVal&&(this.rawVal=u,this._bindings.length+this._listeners.length?(P?.add(this),x=N(x,this,D)):this._oldVal=u)}},n=u=>Object.create(_,{rawVal:{value:u,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:u,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),h=(u,f)=>{let c={_getters:new Set,_setters:new Set},o={f:u},v=C;C=[];let y=G(u,c,f);y=(y??document).nodeType?y:new Text(y);for(let V of c._getters)c._setters.has(V)||(b(V),V._bindings.push(o));for(let V of C)V._dom=y;return C=v,o._dom=y},r=(u,f=n(),c)=>{let o={_getters:new Set,_setters:new Set},v={f:u,s:f};v._dom=c??C?.push(v)??w,f.val=G(u,o,f.rawVal);for(let y of o._getters)o._setters.has(y)||(b(y),y._listeners.push(v));return f},i=(u="append")=>(f,...c)=>{["append","prepend","before","after","replaceWith","remove","replaceChildren"].includes(u)||(u="append");for(let v of c.flat(1/0)){let y=l(v??0),V=y===_?h(()=>v.val):y===z?h(v):v;V!=L&&f[u](V)}return f},t=i(),a=(u,f,...c)=>{let[o,...v]=l(c[0]??0)===I?c:[{},...c],y=u?document.createElementNS(u,f):document.createElement(f);for(let[V,e]of Object.entries(o)){let s=k=>k?Object.getOwnPropertyDescriptor(k,V)??s(l(k)):L,p=f+","+V,A=j[p]??(j[p]=s(l(y))?.set??0),T=V.startsWith("on:")?(k,W)=>{let X=V.slice(3);y.removeEventListener(X,W),y.addEventListener(X,k)}:A?A.bind(y):y.setAttribute.bind(y,V),O=l(e??0);V.startsWith("on:")||O===z&&(e=r(e),O=_),O===_?h(()=>(T(e.val,e._oldVal),y)):T(e)}return t(y,...v)},g=u=>({get:(f,c)=>a.bind(L,u,c)}),S=new Proxy(u=>new Proxy(a,g(u)),g()),Y=(u,f)=>f?f!==u&&u.replaceWith(f):u.remove(),D=()=>{let u=0,f=[...x].filter(o=>o.rawVal!==o._oldVal);do{P=new Set;for(let o of new Set(f.flatMap(v=>v._listeners=M(v._listeners))))r(o.f,o.s,o._dom),o._dom=L}while(++u<100&&(f=[...P]).length);let c=[...x].filter(o=>o.rawVal!==o._oldVal);x=L;for(let o of new Set(c.flatMap(v=>v._bindings=M(v._bindings))))Y(o._dom,h(o.f,o._dom)),o._dom=L;for(let o of c)o._oldVal=o.rawVal};return{add:t,insertNodes:i,tags:S,state:n,derive:r,hydrate:(u,f)=>Y(u,h(f,u))}})();var ne=l=>{let{fromEntries:x,entries:P,keys:d}=Object,{get:C,set:w,deleteProperty:$,ownKeys:F}=Reflect,{state:j,derive:I,add:z}=l,L,N=1e3,G,M,b=Symbol(),_=Symbol(),n=Symbol(),h=Symbol(),r=Symbol(),i=Symbol(),t=e=>(e[n]=1,e),a=e=>{if(e?.[n]){let s=j();return I(()=>{let p=e();s.rawVal instanceof Object&&p instanceof Object?y(s.rawVal,p):s.val=g(p)}),s}else return j(g(e))},g=e=>!(e instanceof Object)||e[_]?e:new Proxy((e[b]=e,e[_]=x(P(e).map(([s,p])=>[s,a(p)])),e[h]=[],e[r]=j(1),e),{get:(s,p,A)=>s[_].hasOwnProperty(p)?s[_][p].val:(p==="length"&&s[r].val,C(s,p,A)),set(s,p,A,T){let O=s[_];if(O.hasOwnProperty(p))return O[p].val=g(A),1;let k=p in s,W=k&&p==="length"&&A!==s.length;if(w(s,p,A))return k?W&&++s[r].val:w(O,p,a(A))&&(++s[r].val,u(T,p,O[p])),1},deleteProperty:(s,p)=>($(s[_],p)&&f(s,p),$(s,p)&&++s[r].val),ownKeys:s=>(s[r].val,F(s))}),S=e=>e[_],Y=e=>e[_]?new Proxy(e[_],{get:(s,p)=>Y(s[p].rawVal)}):e,D=e=>e[h]=e[h].filter(s=>s._containerDom.isConnected),E=(e,s,p,A,{_containerDom:T,f:O})=>{let k=Array.isArray(e);if(z(T,()=>T[i][s]=O(p,()=>delete e[s],k?Number(s):s)),k&&!A&&s!=e.length-1){let W=Number(s);T.insertBefore(T.lastChild,T[i][d(e).find(X=>Number(X)>W)])}},u=(e,s,p)=>D(e).forEach(E.bind(G,e,s,p,M)),f=(e,s)=>{for(let p of D(e)){let A=p._containerDom[i];A[s]?.remove(),delete A[s]}},c=e=>(L??(L=(setTimeout(()=>(L.forEach(D),L=G),N),new Set))).add(e),o=(e,s,p)=>{let A={_containerDom:e instanceof Function?e():e,f:p};A._containerDom[i]={},s[h].push(A),c(s);for(let[T,O]of P(s[_]))E(s,T,O,1,A);return A._containerDom},v=(e,s)=>{for(let[T,O]of P(s)){let k=e[T];k instanceof Object&&O instanceof Object?v(k,O):e[T]=O}for(let T in e)s.hasOwnProperty(T)||delete e[T];let p=d(s),A=Array.isArray(e);if(A||d(e).some((T,O)=>T!==p[O])){if(A)e.length=s.length;else{++e[r].val;let T=e[b],O={...T};for(let k of p)delete T[k];for(let k of p)T[k]=O[k]}for(let{_containerDom:T}of D(e)){let{firstChild:O,[i]:k}=T;for(let W of p)O===k[W]?O=O.nextSibling:T.insertBefore(k[W],O)}}return e},y=(e,s)=>{M=1;try{return v(e,s instanceof Function?Array.isArray(e)?s(e.filter(p=>1)):x(s(P(e))):s)}finally{M=G}},V=e=>Array.isArray(e)?e.filter(s=>1).map(V):e instanceof Object?x(P(e).map(([s,p])=>[s,V(p)])):e;return{calc:t,reactive:g,stateFields:S,raw:Y,list:o,replace:y,compact:V}};var ie=(()=>{function quoteIfNeeded(l){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(l)?l:`"${l}"`}function splitString(l=""){let x=[];if(l.includes("{{")&&l.includes("}}")){let d=l.indexOf("{{"),C=l.indexOf("}}"),w=l.slice(0,d).trim(),$=l.slice(C+2).trim(),F=l.slice(d+2,C).trim();if(w.length>0&&x.push(JSON.stringify(w)),F.length>0&&x.push(F),$.length>0){let j=splitString($).filter(I=>I);$.length>0&&x.push(...j)}}else x.push(JSON.stringify(l));let P=x.filter(d=>d);return P.length===0?[]:P}function elementTotjsJS(l,x=new Set,P=!1){if(l.nodeType===3){let _=splitString(l.nodeValue.trim()).filter(n=>n&&n!='""').join(",");return{tags:x,body:_}}if(!l.tagName)return{tags:x,body:""};if(l.tagName.toLowerCase()==="script"&&!P)return{tags:x,body:""};let d=l.tagName.toLowerCase();x.add(d);let C=[],w={};if(Array.from(l.attributes).forEach(b=>{w[b.name.trim()]=b.value.trim()}),w.hasOwnProperty("x-tags")&&(w["x-tags"].split(/[\s|,]+/).map(_=>_.trim()).filter(_=>_).forEach(_=>{x.add(_.toLowerCase())}),delete w["x-tags"]),w.hasOwnProperty("x-script")){let b="x-script";C.push(w[b]),delete w[b]}let $=w.hasOwnProperty("x-include")?(()=>{let _=w["x-include"],n="__"+Date.now().toString(36),h=`$Await({value: fetch(${JSON.stringify(_)}).then(response => response.text()).then(data => $htmlToTjs(data, true))}, p => $tags["div"](p.map(m=>eval(m)())) )`;return delete w["x-include"],h})():"",F=w.hasOwnProperty("x-list")?(()=>{let b=w["x-list"]||"";return delete w["x-list"],b})():"",j=Object.keys(w).map(b=>{let _=b;return _.startsWith("on:")?`${quoteIfNeeded(_)}:${w[b]||""}`:`${quoteIfNeeded(_)}:${JSON.stringify(w[b])}`}).join(","),I=[],z="";d==="script"?z=JSON.stringify(l.textContent):$||(I=Array.from(l.childNodes).map(b=>elementTotjsJS(b,x,P)),z=I.filter(b=>b.body).map(b=>b.body).join(","));let L=d.replace(/-/g,"_"),N="";var G=()=>{if(F){let b=F.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(b){let{k:_,d:n}=b.groups;N=`$list(${L},${n},(${_}) =>${z||""})`}}$&&(j?N=`${L}({${j}},${$})`:N=`${L}(${$})`)};Object.keys(w).length>0?(N=`${L}({${j}} ${z?","+z:""})`,G()):(N=z?`${L}(${z})`:`${L}()`,G());let M=N;return C.length>0&&(M=`()=>{${x.size>0?`const {${Array.from(x).join(",")}}=$tags;`:""} ${C.join(`
`)} return ${N};}`),{tags:x,body:M}}function addHtmToElement(el,methodElement="append",htmlString,hasTagScript=!1){return $insertNodes(methodElement)(el,htmlToTjs(htmlString,hasTagScript).map(m=>eval(m)))}function htmlToTjs(l,x=!1){let C=new DOMParser().parseFromString(l,"text/html").body;return domToTjs(C,x)}function domToTjs(l,x=!1){let P=[];for(let $ of l.childNodes)P.push(elementTotjsJS($,new Set,x));let d=P.filter($=>$.tags.size>0),C="";if(d.length>0){let $=new Set;d.forEach(j=>{j.tags.forEach(I=>$.add(I))}),C=`const {${[...$].map(j=>/-/.test(j)?`"${j}":${j.replace(/-/g,"_")}`:j).join(", ")}}=$tags;`}return[...d.map($=>$.body)]}return{addHtmToElement,htmlToTjs,domToTjs}})();var ae=l=>{function x(P,d,C={mode:"open"}){window.customElements.define(P,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(w,$){super.setAttribute(w,$),this.attrs[w]&&(this.attrs[w].val=$)}connectedCallback(){let w;l.add(C?this.attachShadow(C):this,d({attr:($,F)=>this.attrs[$]??=l.state(this.getAttribute($)??F),mount:$=>w=$,$this:this,children:C?l.tags.slot():[...this.childNodes]})),this.dismount=w?.()}disconnectedCallback(){this.dismount?.()}})}return{define:x}};var oe=l=>{let x=0,{button:P,div:d,header:C,input:w,label:$,span:F,style:j}=l.tags,I=n=>Object.entries(n).map(([h,r])=>`${h}: ${r};`).join(""),z=n=>{},L=Object.getPrototypeOf(l.state(null)),N=n=>Object.getPrototypeOf(n??0)===L?n:l.state(n),G=({value:n,container:h=d,Loading:r,Error:i},t)=>{let a=l.state({status:"pending"});return n.then(g=>{a.val={status:"fulfilled",value:g}}).catch(g=>a.val={status:"rejected",value:g}),h(()=>a.val.status==="pending"?r?.()??"":a.val.status==="rejected"?i?.(a.val.value):t(a.val.value))},M=()=>++x,b=({title:n,closed:h=l.state(!1),x:r=100,y:i=100,width:t=300,height:a=200,closeCross:g="\xD7",customStacking:S=!1,zIndex:Y=1,disableMove:D=!1,disableResize:E=!1,headerColor:u="lightgray",windowClass:f="",windowStyleOverrides:c={},headerClass:o="",headerStyleOverrides:v={},childrenContainerClass:y="",childrenContainerStyleOverrides:V={},crossClass:e="",crossStyleOverrides:s={},crossHoverClass:p="",crossHoverStyleOverrides:A={}},...T)=>{let O=N(r),k=N(i),W=N(t),X=N(a),U=N(Y);S||(U.val=M());let Q=l.state(!1),B=l.state(null),K=l.state(0),Z=l.state(0),re=l.state(0),le=l.state(0),R=p||Object.keys(A)?l.state(!1):null,se=J=>{J.button===0&&(Q.val=!0,K.val=J.clientX,Z.val=J.clientY,document.body.style.userSelect="none")},ee=J=>H=>{B.val=J,K.val=H.clientX,Z.val=H.clientY,re.val=W.val,le.val=X.val,document.body.style.userSelect="none"},ce=J=>{if(Q.val)O.val+=J.clientX-K.val,k.val+=J.clientY-Z.val,K.val=J.clientX,Z.val=J.clientY;else if(B.val){let H=J.clientX-K.val,fe=J.clientY-Z.val;B.val.includes("right")&&(W.val=re.val+H),B.val.includes("bottom")&&(X.val=le.val+fe)}},ue=()=>{Q.val=!1,B.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",ce),document.addEventListener("mouseup",ue);let te="transparent";if(!document.getElementById("tjsui-window-style")){let J=j({type:"text/css",id:"tjsui-window-style"},z({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":te},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":te},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":te},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(J)}return()=>h.val?null:d({class:["tjsui-window"].concat(f||[]).join(" "),style:()=>I({left:`${O.val}px`,top:`${k.val}px`,width:`${W.val}px`,height:`${X.val}px`,"z-index":U.val,...c}),...S?{}:{onmousedown:()=>U.val=M()}},n?C({class:["tjsui-window-header"].concat(o||[]).join(" "),style:I({"background-color":u,...D?{cursor:"auto"}:{},...v}),...D?{}:{onmousedown:se}},n,g?F({class:()=>["tjsui-window-cross"].concat(e||[]).concat(p&&R.val?p:[]).join(" "),style:()=>I({...s,...Object.keys(A).length&&R.val?A:{}}),onclick:()=>h.val=!0,...R?{onmouseenter:()=>R.val=!0,onmouseleave:()=>R.val=!1}:{}},g):null):D?null:d({class:"tjsui-window-dragarea",onmousedown:se}),E?[]:[d({class:"tjsui-window-resize-right",onmousedown:ee("right")}),d({class:"tjsui-window-resize-bottom",onmousedown:ee("bottom")}),d({class:"tjsui-window-resize-rightbottom",onmousedown:ee("rightbottom")})],d({class:["tjsui-window-children"].concat(y||[]).join(" "),style:I(V)},T))};class _{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:h="unset",bottom:r="unset",backgroundColor:i="#333D",fontColor:t="white",fadeOutSec:a=.3,boardClass:g="",boardStyleOverrides:S={},messageClass:Y="",messageStyleOverrides:D={},closerClass:E="",closerStyleOverrides:u={}},f=document.body){let c=I({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:h,bottom:r,left:"50%",transform:"translateX(-50%)","z-index":1e4,...S});this._fadeOutSec=a,this._messageClass=Y,this._messageStylesStr=I({display:"flex","background-color":i,color:t,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${a}s, transform ${a}s`,...D}),this._closerClass=E,this._closerStylesStr=I({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...u}),f.appendChild(this._dom=d({class:g,style:c}))}show({message:h,closer:r,durationSec:i,closed:t=l.state(!1)}){let a=l.state(!1);l.derive(()=>setTimeout(S=>a.val=S,this._fadeOutSec*1e3,t.val));let g=d({class:this._messageClass,style:this._messageStylesStr},d(h),r?d({class:this._closerClass,style:this._closerStylesStr,onclick:()=>t.val=!0},r):null);return l.derive(()=>t.val&&(g.style.opacity="0",g.style.transform="translateY(-20px)")),i&&setTimeout(()=>t.val=!0,i*1e3),l.add(this._dom,()=>a.val?null:g),g}remove(){this._dom.remove()}}return{Await:G,MessageBoard:_,topMostZIndex:M,FloatingWindow:b}};var de=(l,x)=>{let P=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,d={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},C={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},w=(n="")=>{let h=n.match(P);if(!h)return[];let{p:r,v:i}=h.groups,t=x[r];if(!t)return r=="cf"?i&&(i=[i[0].toLowerCase(),i.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[i])?typeof window.TFL_STYLE_CONFIG[i]=="string"?[window.TFL_STYLE_CONFIG[i]]:window.TFL_STYLE_CONFIG[i]:[]:[];let a=[],g="";if(i&&i.endsWith("!")&&(i=i.substr(0,i.length-1),g="!important"),r.length==n.length&&t.cssText)return typeof t.cssText=="string"?[t.cssText]:Array.isArray(t.cssText)?t.cssText:[];if(t.names&&typeof t.names=="string"&&(a=[t.names]),t.names&&Array.isArray(t.names)&&(a=t.names),r.length==n.length&&t.default&&a.length>0)return a.map(Y=>`${Y}:${t.default}${g}`);if(!i&&typeof t.fn=="function"){let S=t.fn();if(typeof S=="string")return[S];if(Array.isArray(S))return S}if(i){if(!t.default&&!t.cssText&&typeof t.fn=="function"){let c=[i[0].toLowerCase(),i.substr(1)].join(""),o=t.fn(c);if(o)return[o]}let S=/^\{(?<v>.+)\}$/,Y=/^(?<v>--[a-z0-9-]+)$/,D=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,E=i.match(S);if(E){let{v:c}=E.groups;c=c.toLowerCase(),c=c.replace(/[_]+/g,y=>y.length%2==1?" ":y.substr(0,y.length/2));let o=a.map(y=>`${y}:${c}${g}`);return o.every(y=>CSS.supports(y))?o:[]}if(E=i.match(Y),E){let{v:c}=E.groups;return a.map(v=>`${v}:var(${c})${g};`)}if(E=i.match(D),E){let{d1:c,d2:o}=E.groups;if(Number(o)>0){let v=a.map(y=>`${y}:calc(${c} * 100% / ${o})`);if(v.every(y=>CSS.supports(y)))return v}}let u=[i[0].toLowerCase(),i.substr(1)].join(""),f=t.exts&&Object.keys(t.exts).length>0?t.exts[u]:"";if(f)return a.map(o=>`${o}:${f}${g}`);{let c=a.map(o=>`${o}:${u}${g}`);if(c.every(o=>CSS.supports(o)))return c}if(typeof t.fn=="function"){let c=t.fn(u);if(c){let o=a.map(v=>`${v}:${c}${g}`);if(o.every(v=>CSS.supports(v)))return o}}}return[]},$=n=>{let h=w(n);return Array.isArray(h)&&h.length>0?h.join(";"):""},F=n=>{var h=/class="([^"]+)"/g,r=[];return[...n.matchAll(h)].forEach(i=>r=r.concat(i[1].split(" "))),[...new Set(r)]},j=n=>{if(!n)return[];let h=[].concat(...[...n.querySelectorAll("[class]")].map(i=>[...i.classList]));return[...new Set(h)]},I=n=>{let r=(n||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(r){let{m:t,v:a=""}=r.groups,g="";var i=(E,u=!0)=>{if(typeof E=="string"){let f=a.indexOf(E);u&&(f+=1),g=a.substr(f),a=a.substr(0,a.length-g.length)}else{let f=(E||[]).map(c=>[c,a.indexOf(c)]);if(f=f.filter(c=>c[1]>-1),f.length>0){f.sort((o,v)=>o[1]>=v[1]?1:-1);let c=f[0][1];u&&(c+=1),g=a.substr(c),a=a.substr(0,a.length-g.length)}}};a.indexOf("}")>-1?i("}"):i([":","_",">","+","~","*"],!1);let S=$(a);if(!S)return null;let Y=CSS.escape(n),D=g?g.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,E=>E=="_"?" ":["~","+","*",">"].includes(E)?` ${E} `:E):"";return{type:t||"default",ext:!!D,css:`.${Y}${D} {${S}}`,selectorText:`.${Y}${D}`}}return null},z=(n=[])=>n.map(r=>I(r)).filter(r=>r),L=(n,h,r="")=>{if(!r)return!1;if(C[n]&&C[n][h]&&r.length>0){let i=C[n][h];try{i.insertRule(r)}catch(t){console.error(t)}}return!0},N=(n,h,r=[])=>r.length==0?!1:C[n]&&C[n][h]?(C[n][h].replaceSync(r.join(`
`)),!0):!1,G=(n=[])=>{let h=z(n);for(let r of Object.keys(d)){let i=h.filter(S=>S.type==r&&S.ext==!1),t=h.filter(S=>S.type==r&&S.ext==!0),a=i.map(S=>S.css),g=t.map(S=>S.css);if(a.length>0)for(let S of a)d[r][0].has(S)||(d[r][0].add(S),L(r,0,S));if(g.length>0)for(let S of g)d[r][1].has(S)||d[r][1].add(S),L(r,1,S)}},M=n=>{new MutationObserver(h=>{for(let r of h)if(r.type=="attributes"&&r.attributeName=="class"){let t=[...r.target.classList].map(a=>a.trim()).filter(a=>a);typeof n=="function"&&n([...new Set(t)])}else if(r.type=="childList"&&r.addedNodes.length>0){let i=[...r.addedNodes].filter(t=>t.nodeType!=3).map(t=>[...t.classList]).flat(1/0).map(t=>t.trim()).filter(t=>t);typeof n=="function"&&n([...new Set(i)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},b=()=>{let n;return h=>{clearTimeout(n),n=setTimeout(()=>{Object.keys(d).forEach(r=>{let i="tfl-"+r+"-0",t="tfl-"+r+"-1";d[r][0].size>0&&localStorage.setItem(i,JSON.stringify([...d[r][0]])),d[r][1].size>0&&localStorage.setItem(t,JSON.stringify([...d[r][1]]))})},h||0)}};return{loadEventDom:()=>{var n=Object.values(C).flat();let h=new CSSStyleSheet;l&&Array.isArray(l)&&h.replaceSync(l.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,h,...n],Object.keys(d).forEach(t=>{let a="tfl-"+t+"-0",g="tfl-"+t+"-1";if(localStorage.getItem(a))try{d[t][0]=new Set(JSON.parse(localStorage.getItem(a)))}catch{localStorage.removeItem(a)}if(localStorage.getItem(g))try{d[t][1]=new Set(JSON.parse(localStorage.getItem(g)))}catch{localStorage.removeItem(g)}}),Object.keys(d).forEach(t=>{let a=[...d[t][0]],g=[...d[t][1]];N(t,0,a),N(t,1,g)});let r=b(),i=j(document);G(i),M(t=>{G(t),r(1e3)})},renCssFromArray:z}};Object.defineProperty(window,"tjs",{value:{...q,...ne(q),...ie,...ae(q),...oe(q),cssFun:de},writable:!1,configurable:!1,enumerable:!1}),["add","insertNodes","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","htmlToTjs","domToTjs","define","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach(l=>{Object.defineProperty(window,"$"+l,{value:window.tjs[l],writable:!1,configurable:!1,enumerable:!1})});})();

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
