let wasm_bindgen;
(()=>{var R=(()=>{let g=Object.getPrototypeOf,T,j,p,E,S={isConnected:1},x=1e3,F,L={},w=g(S),A=g(g),k,$=(i,u,y,s)=>(i??(setTimeout(y,s),new Set)).add(u),P=(i,u,y)=>{let s=p;p=u;try{return i(y)}catch(h){return console.error(h),y}finally{p=s}},N=i=>i.filter(u=>u._dom?.isConnected),D=i=>F=$(F,i,()=>{for(let u of F)u._bindings=N(u._bindings),u._listeners=N(u._listeners);F=k},x),V={get val(){return p?._getters?.add(this),this.rawVal},get oldVal(){return p?._getters?.add(this),this._oldVal},set val(i){p?._setters?.add(this),i!==this.rawVal&&(this.rawVal=i,this._bindings.length+this._listeners.length?(j?.add(this),T=$(T,this,M)):this._oldVal=i)}},d=i=>Object.create(V,{rawVal:{value:i,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:i,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),t=(i,u)=>{let y={_getters:new Set,_setters:new Set},s={f:i},h=E;E=[];let v=P(i,y,u);v=(v??document).nodeType?v:new Text(v);for(let _ of y._getters)y._setters.has(_)||(D(_),_._bindings.push(s));for(let _ of E)_._dom=v;return E=h,s._dom=v},e=(i,u=d(),y)=>{let s={_getters:new Set,_setters:new Set},h={f:i,s:u};h._dom=y??E?.push(h)??S,u.val=P(i,s,u.rawVal);for(let v of s._getters)s._setters.has(v)||(D(v),v._listeners.push(h));return u},a=(i,...u)=>{for(let y of u.flat(1/0)){let s=g(y??0),h=s===V?t(()=>y.val):s===A?t(y):y;h!=k&&i.append(h)}return i},l=(i,u,...y)=>{let[s,...h]=g(y[0]??0)===w?y:[{},...y],v=i?document.createElementNS(i,u):document.createElement(u);for(let[_,J]of Object.entries(s)){let r=b=>b?Object.getOwnPropertyDescriptor(b,_)??r(g(b)):k,n=u+","+_,c=L[n]??(L[n]=r(g(v))?.set??0),O=_.startsWith("on")?(b,I)=>{let G=_.slice(2);typeof I=="function"&&v.removeEventListener(G,I)(typeof b=="function")&&v.addEventListener(G,b)}:c?c.bind(v):v.setAttribute.bind(v,_),C=g(J??0);_.startsWith("on")||C===A&&(J=e(J),C=V),C===V?t(()=>(O(J.val,J._oldVal),v)):O(J)}return a(v,...h)},o=i=>({get:(u,y)=>l.bind(k,i,y)}),f=new Proxy(i=>new Proxy(l,o(i)),o()),m=(i,u)=>u?u!==i&&i.replaceWith(u):i.remove(),M=()=>{let i=0,u=[...T].filter(s=>s.rawVal!==s._oldVal);do{j=new Set;for(let s of new Set(u.flatMap(h=>h._listeners=N(h._listeners))))e(s.f,s.s,s._dom),s._dom=k}while(++i<100&&(u=[...j]).length);let y=[...T].filter(s=>s.rawVal!==s._oldVal);T=k;for(let s of new Set(y.flatMap(h=>h._bindings=N(h._bindings))))m(s._dom,t(s.f,s._dom)),s._dom=k;for(let s of y)s._oldVal=s.rawVal};return{add:a,tags:f,state:d,derive:e,hydrate:(i,u)=>m(i,t(u,i))}})();var se=g=>{let{fromEntries:T,entries:j,keys:p}=Object,{get:E,set:S,deleteProperty:x,ownKeys:F}=Reflect,{state:L,derive:w,add:A}=g,k,$=1e3,P,N,D=Symbol(),V=Symbol(),d=Symbol(),t=Symbol(),e=Symbol(),a=Symbol(),l=r=>(r[d]=1,r),o=r=>{if(r?.[d]){let n=L();return w(()=>{let c=r();n.rawVal instanceof Object&&c instanceof Object?_(n.rawVal,c):n.val=f(c)}),n}else return L(f(r))},f=r=>!(r instanceof Object)||r[V]?r:new Proxy((r[D]=r,r[V]=T(j(r).map(([n,c])=>[n,o(c)])),r[t]=[],r[e]=L(1),r),{get:(n,c,O)=>n[V].hasOwnProperty(c)?n[V][c].val:(c==="length"&&n[e].val,E(n,c,O)),set(n,c,O,C){let b=n[V];if(b.hasOwnProperty(c))return b[c].val=f(O),1;let I=c in n,G=I&&c==="length"&&O!==n.length;if(S(n,c,O))return I?G&&++n[e].val:S(b,c,o(O))&&(++n[e].val,u(C,c,b[c])),1},deleteProperty:(n,c)=>(x(n[V],c)&&y(n,c),x(n,c)&&++n[e].val),ownKeys:n=>(n[e].val,F(n))}),m=r=>r[V],M=r=>r[V]?new Proxy(r[V],{get:(n,c)=>M(n[c].rawVal)}):r,z=r=>r[t]=r[t].filter(n=>n._containerDom.isConnected),i=(r,n,c,O,{_containerDom:C,f:b})=>{let I=Array.isArray(r);if(A(C,()=>C[a][n]=b(c,()=>delete r[n],I?Number(n):n)),I&&!O&&n!=r.length-1){let G=Number(n);C.insertBefore(C.lastChild,C[a][p(r).find(W=>Number(W)>G)])}},u=(r,n,c)=>z(r).forEach(i.bind(P,r,n,c,N)),y=(r,n)=>{for(let c of z(r)){let O=c._containerDom[a];O[n]?.remove(),delete O[n]}},s=r=>(k??(k=(setTimeout(()=>(k.forEach(z),k=P),$),new Set))).add(r),h=(r,n,c)=>{let O={_containerDom:r instanceof Function?r():r,f:c};O._containerDom[a]={},n[t].push(O),s(n);for(let[C,b]of j(n[V]))i(n,C,b,1,O);return O._containerDom},v=(r,n)=>{for(let[C,b]of j(n)){let I=r[C];I instanceof Object&&b instanceof Object?v(I,b):r[C]=b}for(let C in r)n.hasOwnProperty(C)||delete r[C];let c=p(n),O=Array.isArray(r);if(O||p(r).some((C,b)=>C!==c[b])){if(O)r.length=n.length;else{++r[e].val;let C=r[D],b={...C};for(let I of c)delete C[I];for(let I of c)C[I]=b[I]}for(let{_containerDom:C}of z(r)){let{firstChild:b,[a]:I}=C;for(let G of c)b===I[G]?b=b.nextSibling:C.insertBefore(I[G],b)}}return r},_=(r,n)=>{N=1;try{return v(r,n instanceof Function?Array.isArray(r)?n(r.filter(c=>1)):T(n(j(r))):n)}finally{N=P}},J=r=>Array.isArray(r)?r.filter(n=>1).map(J):r instanceof Object?T(j(r).map(([n,c])=>[n,J(c)])):r;return{calc:l,reactive:f,stateFields:m,raw:M,list:h,replace:_,compact:J}};var ne=(()=>{function g(S){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(S)?S:`"${S}"`}function T(S=""){let x=[];if(S.includes("{{")&&S.includes("}}")){let L=S.indexOf("{{"),w=S.indexOf("}}"),A=S.slice(0,L).trim(),k=S.slice(w+2).trim(),$=S.slice(L+2,w).trim();if(A.length>0&&x.push(JSON.stringify(A)),$.length>0&&x.push($),k.length>0){let P=T(k).filter(N=>N);k.length>0&&x.push(...P)}}else x.push(JSON.stringify(S));let F=x.filter(L=>L);return F.length===0?[]:F}function j(S,x=new Set){if(S.nodeType===3){let e=T(S.nodeValue.trim()).filter(a=>a&&a!='""').join(",");return{tags:x,body:e}}if(!S.tagName)return{tags:x,body:""};let F=S.tagName.toLowerCase();x.add(F);let L=[],w={};Array.from(S.attributes).forEach(t=>{w[t.name.trim()]=t.value.trim()}),w.hasOwnProperty("x-tags")&&(w["x-tags"].split(/[\s|,]+/).map(e=>e.trim()).filter(e=>e).forEach(e=>{x.add(e.toLowerCase())}),delete w["x-tags"]),Object.keys(w).forEach(t=>{t.startsWith("x-script")&&(L.push(w[t]),delete w[t])});let A="";w["x-list"]&&(A=w["x-list"]||"",delete w["x-list"]);let k=Object.keys(w).map(t=>{if(t.startsWith("x-")){let e=t.substring(2);return`${g(e)}:${w[t]||""}`}else{let e=t;return e.startsWith("on")?`${g(e)}:(evt) =>{let fn=${JSON.stringify(w[t])};typeof fn ==='function'? fn(evt):fn;}`:`${g(e)}:${JSON.stringify(w[t])}`}}).join(","),$=[],P="";F==="script"?P=JSON.stringify(S.textContent):($=Array.from(S.childNodes).map(t=>j(t,x)),P=$.filter(t=>t.body).map(t=>t.body).join(","));let N=F.replace(/-/g,"_"),D="";var V=()=>{if(A){let t=A.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(t){let{k:e,d:a}=t.groups;D=`$list(${N},${a},(${e}) =>${P||""})`}}};Object.keys(w).length>0?(D=`${N}({${k}} ${P?","+P:""})`,V()):(D=P?`${N}(${P})`:`${N}()`,V());let d=D;return L.length>0&&(d=`()=>{ ${L.join(`
`)} return ${D};}`),{tags:x,body:d}}function p(S,x){let w=new DOMParser().parseFromString(x,"text/html").body;return E(S,w)}function E(S,x){let F=[];for(let A of x.childNodes)F.push(j(A));let L=F.filter(A=>A.tags.size>0),w="";if(L.length>0){let A=new Set;L.forEach($=>{$.tags.forEach(P=>A.add(P))}),w=`const {${[...A].map($=>/-/.test($)?`"${$}":${$.replace(/-/g,"_")}`:$).join(", ")}}=$tags;`}return[`${S}.replaceChildren();`,w,...L.map(A=>`$add(${S}, ${A.body});`)]}return{addHtmToElement:p,domToJs:E}})();var ie=g=>{function T(j,p,E={mode:"open"}){window.customElements.define(j,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(S,x){super.setAttribute(S,x),this.attrs[S]&&(this.attrs[S].val=x)}connectedCallback(){let S;g.add(E?this.attachShadow(E):this,p({attr:(x,F)=>this.attrs[x]??=g.state(this.getAttribute(x)??F),mount:x=>S=x,$this:this,children:E?g.tags.slot():[...this.childNodes]})),this.dismount=S?.()}disconnectedCallback(){this.dismount?.()}})}return{define:T}};var ae=g=>{let T=0,{button:j,div:p,header:E,input:S,label:x,span:F,style:L}=g.tags,w=d=>Object.entries(d).map(([t,e])=>`${t}: ${e};`).join(""),A=d=>{},k=Object.getPrototypeOf(g.state(null)),$=d=>Object.getPrototypeOf(d??0)===k?d:g.state(d),P=({value:d,container:t=p,Loading:e,Error:a},l)=>{let o=g.state({status:"pending"});return d.then(f=>o.val={status:"fulfilled",value:f}).catch(f=>o.val={status:"rejected",value:f}),t(()=>o.val.status==="pending"?e?.()??"":o.val.status==="rejected"?a?.(o.val.value):l(o.val.value))},N=()=>++T,D=({title:d,closed:t=g.state(!1),x:e=100,y:a=100,width:l=300,height:o=200,closeCross:f="\xD7",customStacking:m=!1,zIndex:M=1,disableMove:z=!1,disableResize:i=!1,headerColor:u="lightgray",windowClass:y="",windowStyleOverrides:s={},headerClass:h="",headerStyleOverrides:v={},childrenContainerClass:_="",childrenContainerStyleOverrides:J={},crossClass:r="",crossStyleOverrides:n={},crossHoverClass:c="",crossHoverStyleOverrides:O={}},...C)=>{let b=$(e),I=$(a),G=$(l),W=$(o),q=$(M);m||(q.val=N());let U=g.state(!1),X=g.state(null),B=g.state(0),K=g.state(0),te=g.state(0),re=g.state(0),Z=c||Object.keys(O)?g.state(!1):null,le=Y=>{Y.button===0&&(U.val=!0,B.val=Y.clientX,K.val=Y.clientY,document.body.style.userSelect="none")},Q=Y=>H=>{X.val=Y,B.val=H.clientX,K.val=H.clientY,te.val=G.val,re.val=W.val,document.body.style.userSelect="none"},de=Y=>{if(U.val)b.val+=Y.clientX-B.val,I.val+=Y.clientY-K.val,B.val=Y.clientX,K.val=Y.clientY;else if(X.val){let H=Y.clientX-B.val,ue=Y.clientY-K.val;X.val.includes("right")&&(G.val=te.val+H),X.val.includes("bottom")&&(W.val=re.val+ue)}},ce=()=>{U.val=!1,X.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let Y=L({type:"text/css",id:"tjsui-window-style"},A({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(Y)}return()=>t.val?null:p({class:["tjsui-window"].concat(y||[]).join(" "),style:()=>w({left:`${b.val}px`,top:`${I.val}px`,width:`${G.val}px`,height:`${W.val}px`,"z-index":q.val,...s}),...m?{}:{onmousedown:()=>q.val=N()}},d?E({class:["tjsui-window-header"].concat(h||[]).join(" "),style:w({"background-color":u,...z?{cursor:"auto"}:{},...v}),...z?{}:{onmousedown:le}},d,f?F({class:()=>["tjsui-window-cross"].concat(r||[]).concat(c&&Z.val?c:[]).join(" "),style:()=>w({...n,...Object.keys(O).length&&Z.val?O:{}}),onclick:()=>t.val=!0,...Z?{onmouseenter:()=>Z.val=!0,onmouseleave:()=>Z.val=!1}:{}},f):null):z?null:p({class:"tjsui-window-dragarea",onmousedown:le}),i?[]:[p({class:"tjsui-window-resize-right",onmousedown:Q("right")}),p({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),p({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],p({class:["tjsui-window-children"].concat(_||[]).join(" "),style:w(J)},C))};class V{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:t="unset",bottom:e="unset",backgroundColor:a="#333D",fontColor:l="white",fadeOutSec:o=.3,boardClass:f="",boardStyleOverrides:m={},messageClass:M="",messageStyleOverrides:z={},closerClass:i="",closerStyleOverrides:u={}},y=document.body){let s=w({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:t,bottom:e,left:"50%",transform:"translateX(-50%)","z-index":1e4,...m});this._fadeOutSec=o,this._messageClass=M,this._messageStylesStr=w({display:"flex","background-color":a,color:l,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${o}s, transform ${o}s`,...z}),this._closerClass=i,this._closerStylesStr=w({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...u}),y.appendChild(this._dom=p({class:f,style:s}))}show({message:t,closer:e,durationSec:a,closed:l=g.state(!1)}){let o=g.state(!1);g.derive(()=>setTimeout(m=>o.val=m,this._fadeOutSec*1e3,l.val));let f=p({class:this._messageClass,style:this._messageStylesStr},p(t),e?p({class:this._closerClass,style:this._closerStylesStr,onclick:()=>l.val=!0},e):null);return g.derive(()=>l.val&&(f.style.opacity="0",f.style.transform="translateY(-20px)")),a&&setTimeout(()=>l.val=!0,a*1e3),g.add(this._dom,()=>o.val?null:f),f}remove(){this._dom.remove()}}return{Await:P,MessageBoard:V,topMostZIndex:N,FloatingWindow:D}};var oe=(g,T)=>{let j=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,p={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},E={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},S=(d="")=>{let t=d.match(j);if(!t)return[];let{p:e,v:a}=t.groups,l=T[e];if(!l)return e=="cf"?a&&(a=[a[0].toLowerCase(),a.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[a])?typeof window.TFL_STYLE_CONFIG[a]=="string"?[window.TFL_STYLE_CONFIG[a]]:window.TFL_STYLE_CONFIG[a]:[]:[];let o=[],f="";if(a&&a.endsWith("!")&&(a=a.substr(0,a.length-1),f="!important"),e.length==d.length&&l.cssText)return typeof l.cssText=="string"?[l.cssText]:Array.isArray(l.cssText)?l.cssText:[];if(l.names&&typeof l.names=="string"&&(o=[l.names]),l.names&&Array.isArray(l.names)&&(o=l.names),e.length==d.length&&l.default&&o.length>0)return o.map(M=>`${M}:${l.default}${f}`);if(!a&&typeof l.fn=="function"){let m=l.fn();if(typeof m=="string")return[m];if(Array.isArray(m))return m}if(a){if(!l.default&&!l.cssText&&typeof l.fn=="function"){let s=[a[0].toLowerCase(),a.substr(1)].join(""),h=l.fn(s);if(h)return[h]}let m=/^\{(?<v>.+)\}$/,M=/^(?<v>--[a-z0-9-]+)$/,z=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,i=a.match(m);if(i){let{v:s}=i.groups;s=s.toLowerCase(),s=s.replace(/[_]+/g,_=>_.length%2==1?" ":_.substr(0,_.length/2));let h=o.map(_=>`${_}:${s}${f}`);return h.every(_=>CSS.supports(_))?h:[]}if(i=a.match(M),i){let{v:s}=i.groups;return o.map(v=>`${v}:var(${s})${f}`)}if(i=a.match(z),i){let{d1:s,d2:h}=i.groups;if(Number(h)>0){let v=o.map(_=>`${_}:calc(${s} * 100% / ${h})`);if(v.every(_=>CSS.supports(_)))return v}}let u=[a[0].toLowerCase(),a.substr(1)].join(""),y=l.exts&&Object.keys(l.exts).length>0?l.exts[u]:"";if(y)return o.map(h=>`${h}:${y}${f}`);{let s=o.map(h=>`${h}:${u}${f}`);if(s.every(h=>CSS.supports(h)))return s}if(typeof l.fn=="function"){let s=l.fn(u);if(s){let h=o.map(v=>`${v}:${s}${f}`);if(h.every(v=>CSS.supports(v)))return h}}}return[]},x=d=>{let t=S(d);return Array.isArray(t)&&t.length>0?t.join(";"):""},F=d=>{var t=/class="([^"]+)"/g,e=[];return[...d.matchAll(t)].forEach(a=>e=e.concat(a[1].split(" "))),[...new Set(e)]},L=d=>{if(!d)return[];let t=[].concat(...[...d.querySelectorAll("[class]")].map(a=>[...a.classList]));return[...new Set(t)]},w=d=>{let e=(d||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(e){let{m:l,v:o=""}=e.groups,f="";var a=(i,u=!0)=>{if(typeof i=="string"){let y=o.indexOf(i);u&&(y+=1),f=o.substr(y),o=o.substr(0,o.length-f.length)}else{let y=(i||[]).map(s=>[s,o.indexOf(s)]);if(y=y.filter(s=>s[1]>-1),y.length>0){y.sort((h,v)=>h[1]>=v[1]?1:-1);let s=y[0][1];u&&(s+=1),f=o.substr(s),o=o.substr(0,o.length-f.length)}}};o.indexOf("}")>-1?a("}"):a([":","_",">","+","~","*"],!1);let m=x(o);if(!m)return null;let M=CSS.escape(d),z=f?f.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,i=>i=="_"?" ":["~","+","*",">"].includes(i)?` ${i} `:i):"";return{type:l||"default",ext:!!z,css:`.${M}${z} {${m}}`,selectorText:`.${M}${z}`}}return null},A=(d=[])=>d.map(e=>w(e)).filter(e=>e),k=(d,t,e="")=>e?(E[d]&&E[d][t]&&e.length>0&&E[d][t].insertRule(e),!0):!1,$=(d,t,e=[])=>e.length==0?!1:E[d]&&E[d][t]?(E[d][t].replaceSync(e.join(`
`)),!0):!1,P=(d=[])=>{let t=A(d);for(let e of Object.keys(p)){let a=t.filter(m=>m.type==e&&m.ext==!1),l=t.filter(m=>m.type==e&&m.ext==!0),o=a.map(m=>m.css),f=l.map(m=>m.css);if(o.length>0)for(let m of o)p[e][0].has(m)||(p[e][0].add(m),k(e,0,m));if(f.length>0)for(let m of f)p[e][1].has(m)||p[e][1].add(m),k(e,1,m)}},N=d=>{new MutationObserver(t=>{for(let e of t)if(e.type=="attributes"&&e.attributeName=="class"){let l=[...e.target.classList].map(o=>o.trim()).filter(o=>o);typeof d=="function"&&d([...new Set(l)])}else if(e.type=="childList"&&e.addedNodes.length>0){let a=[...e.addedNodes].filter(l=>l.nodeType!=3).map(l=>[...l.classList]).flat(1/0).map(l=>l.trim()).filter(l=>l);typeof d=="function"&&d([...new Set(a)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},D=()=>{let d;return t=>{clearTimeout(d),d=setTimeout(()=>{Object.keys(p).forEach(e=>{let a="tfl-"+e+"-0",l="tfl-"+e+"-1";p[e][0].size>0&&localStorage.setItem(a,JSON.stringify([...p[e][0]])),p[e][1].size>0&&localStorage.setItem(l,JSON.stringify([...p[e][1]]))})},t||0)}};return{loadEventDom:()=>{var d=Object.values(E).flat();let t=new CSSStyleSheet;g&&Array.isArray(g)&&t.replaceSync(g.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,t,...d],Object.keys(p).forEach(l=>{let o="tfl-"+l+"-0",f="tfl-"+l+"-1";if(localStorage.getItem(o))try{p[l][0]=new Set(JSON.parse(localStorage.getItem(o)))}catch{localStorage.removeItem(o)}if(localStorage.getItem(f))try{p[l][1]=new Set(JSON.parse(localStorage.getItem(f)))}catch{localStorage.removeItem(f)}}),Object.keys(p).forEach(l=>{let o=[...p[l][0]],f=[...p[l][1]];$(l,0,o),$(l,1,f)});let e=D(),a=L(document);P(a),N(l=>{P(l),e(1e3)})},renCssFromArray:A}};(()=>{Object.defineProperty(window,"tjs",{value:{...R,...se(R),...ne,...ie(R),...ae(R),cssFun:oe},writable:!1,configurable:!1,enumerable:!1}),["add","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","domToJs","define","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach(T=>{Object.defineProperty(window,"$"+T,{value:window.tjs[T],writable:!1,configurable:!1,enumerable:!1})}),addEventListener("tjs-load",function(){let j=window.tjs.addHtmToElement("document.body",document.body.innerHTML).join(`
`);new Function(`(() => {
        try {
          ${j}
        } catch (e) {
          console.error(e);
        }
       })()`)()});let g=setInterval(()=>{if(document&&document.body&&document.body.isConnected){let T=new Event("tjs-load");dispatchEvent(T),clearInterval(g)}},1)})();})();

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
