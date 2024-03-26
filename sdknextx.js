let wasm_bindgen;
(()=>{var R=(()=>{let w=Object.getPrototypeOf,E,z,p,j,S={isConnected:1},x=1e3,F,$={},y=w(S),T=w(w),L,O=(i,u,g,l)=>(i??(setTimeout(g,l),new Set)).add(u),P=(i,u,g)=>{let l=p;p=u;try{return i(g)}catch(h){return console.error(h),g}finally{p=l}},N=i=>i.filter(u=>u._dom?.isConnected),W=i=>F=O(F,i,()=>{for(let u of F)u._bindings=N(u._bindings),u._listeners=N(u._listeners);F=L},x),I={get val(){return p?._getters?.add(this),this.rawVal},get oldVal(){return p?._getters?.add(this),this._oldVal},set val(i){p?._setters?.add(this),i!==this.rawVal&&(this.rawVal=i,this._bindings.length+this._listeners.length?(z?.add(this),E=O(E,this,k)):this._oldVal=i)}},d=i=>Object.create(I,{rawVal:{value:i,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:i,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),e=(i,u)=>{let g={_getters:new Set,_setters:new Set},l={f:i},h=j;j=[];let v=P(i,g,u);v=(v??document).nodeType?v:new Text(v);for(let b of g._getters)g._setters.has(b)||(W(b),b._bindings.push(l));for(let b of j)b._dom=v;return j=h,l._dom=v},t=(i,u=d(),g)=>{let l={_getters:new Set,_setters:new Set},h={f:i,s:u};h._dom=g??j?.push(h)??S,u.val=P(i,l,u.rawVal);for(let v of l._getters)l._setters.has(v)||(W(v),v._listeners.push(h));return u},a=(i,...u)=>{for(let g of u.flat(1/0)){let l=w(g??0),h=l===I?e(()=>g.val):l===T?e(g):g;h!=L&&i.append(h)}return i},s=(i,u,...g)=>{let[l,...h]=w(g[0]??0)===y?g:[{},...g],v=i?document.createElementNS(i,u):document.createElement(u);for(let[b,G]of Object.entries(l)){let r=C=>C?Object.getOwnPropertyDescriptor(C,b)??r(w(C)):L,n=u+","+b,c=$[n]??($[n]=r(w(v))?.set??0),A=b.startsWith("on")?(C,V)=>{let Y=b.slice(2);v.removeEventListener(Y,V),v.addEventListener(Y,C)}:c?c.bind(v):v.setAttribute.bind(v,b),_=w(G??0);b.startsWith("on")||_===T&&(G=t(G),_=I),_===I?e(()=>(A(G.val,G._oldVal),v)):A(G)}return a(v,...h)},o=i=>({get:(u,g)=>s.bind(L,i,g)}),f=new Proxy(i=>new Proxy(s,o(i)),o()),m=(i,u)=>u?u!==i&&i.replaceWith(u):i.remove(),k=()=>{let i=0,u=[...E].filter(l=>l.rawVal!==l._oldVal);do{z=new Set;for(let l of new Set(u.flatMap(h=>h._listeners=N(h._listeners))))t(l.f,l.s,l._dom),l._dom=L}while(++i<100&&(u=[...z]).length);let g=[...E].filter(l=>l.rawVal!==l._oldVal);E=L;for(let l of new Set(g.flatMap(h=>h._bindings=N(h._bindings))))m(l._dom,e(l.f,l._dom)),l._dom=L;for(let l of g)l._oldVal=l.rawVal};return{add:a,tags:f,state:d,derive:t,hydrate:(i,u)=>m(i,e(u,i))}})();var le=w=>{let{fromEntries:E,entries:z,keys:p}=Object,{get:j,set:S,deleteProperty:x,ownKeys:F}=Reflect,{state:$,derive:y,add:T}=van,L,O=1e3,P,N,W=Symbol(),I=Symbol(),d=Symbol(),e=Symbol(),t=Symbol(),a=Symbol(),s=r=>(r[d]=1,r),o=r=>{if(r?.[d]){let n=$();return y(()=>{let c=r();n.rawVal instanceof Object&&c instanceof Object?b(n.rawVal,c):n.val=f(c)}),n}else return $(f(r))},f=r=>!(r instanceof Object)||r[I]?r:new Proxy((r[W]=r,r[I]=E(z(r).map(([n,c])=>[n,o(c)])),r[e]=[],r[t]=$(1),r),{get:(n,c,A)=>n[I].hasOwnProperty(c)?n[I][c].val:(c==="length"&&n[t].val,j(n,c,A)),set(n,c,A,_){let C=n[I];if(C.hasOwnProperty(c))return C[c].val=f(A),1;let V=c in n,Y=V&&c==="length"&&A!==n.length;if(S(n,c,A))return V?Y&&++n[t].val:S(C,c,o(A))&&(++n[t].val,u(_,c,C[c])),1},deleteProperty:(n,c)=>(x(n[I],c)&&g(n,c),x(n,c)&&++n[t].val),ownKeys:n=>(n[t].val,F(n))}),m=r=>r[I],k=r=>r[I]?new Proxy(r[I],{get:(n,c)=>k(n[c].rawVal)}):r,D=r=>r[e]=r[e].filter(n=>n._containerDom.isConnected),i=(r,n,c,A,{_containerDom:_,f:C})=>{let V=Array.isArray(r);if(T(_,()=>_[a][n]=C(c,()=>delete r[n],V?Number(n):n)),V&&!A&&n!=r.length-1){let Y=Number(n);_.insertBefore(_.lastChild,_[a][p(r).find(J=>Number(J)>Y)])}},u=(r,n,c)=>D(r).forEach(i.bind(P,r,n,c,N)),g=(r,n)=>{for(let c of D(r)){let A=c._containerDom[a];A[n]?.remove(),delete A[n]}},l=r=>(L??(L=(setTimeout(()=>(L.forEach(D),L=P),O),new Set))).add(r),h=(r,n,c)=>{let A={_containerDom:r instanceof Function?r():r,f:c};A._containerDom[a]={},n[e].push(A),l(n);for(let[_,C]of z(n[I]))i(n,_,C,1,A);return A._containerDom},v=(r,n)=>{for(let[_,C]of z(n)){let V=r[_];V instanceof Object&&C instanceof Object?v(V,C):r[_]=C}for(let _ in r)n.hasOwnProperty(_)||delete r[_];let c=p(n),A=Array.isArray(r);if(A||p(r).some((_,C)=>_!==c[C])){if(A)r.length=n.length;else{++r[t].val;let _=r[W],C={..._};for(let V of c)delete _[V];for(let V of c)_[V]=C[V]}for(let{_containerDom:_}of D(r)){let{firstChild:C,[a]:V}=_;for(let Y of c)C===V[Y]?C=C.nextSibling:_.insertBefore(V[Y],C)}}return r},b=(r,n)=>{N=1;try{return v(r,n instanceof Function?Array.isArray(r)?n(r.filter(c=>1)):E(n(z(r))):n)}finally{N=P}},G=r=>Array.isArray(r)?r.filter(n=>1).map(G):r instanceof Object?E(z(r).map(([n,c])=>[n,G(c)])):r;return{calc:s,reactive:f,stateFields:m,raw:k,list:h,replace:b,compact:G}};var ne=(()=>{function w(S){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(S)?S:`"${S}"`}function E(S=""){let x=[];if(S.includes("{{")&&S.includes("}}")){let $=S.indexOf("{{"),y=S.indexOf("}}"),T=S.slice(0,$).trim(),L=S.slice(y+2).trim(),O=S.slice($+2,y).trim();if(T.length>0&&x.push(JSON.stringify(T)),O.length>0&&x.push(O),L.length>0){let P=E(L).filter(N=>N);L.length>0&&x.push(...P)}}else x.push(JSON.stringify(S));let F=x.filter($=>$);return F.length===0?[]:F}function z(S,x=new Set){if(S.nodeType===3){let t=E(S.nodeValue.trim()).filter(a=>a&&a!='""').join(",");return{tags:x,body:t}}if(!S.tagName)return{tags:x,body:""};let F=S.tagName.toLowerCase();x.add(F);let $=[],y={};Array.from(S.attributes).forEach(e=>{y[e.name.trim()]=e.value.trim()}),y.hasOwnProperty("x-tags")&&(y["x-tags"].split(/[\s|,]+/).map(t=>t.trim()).filter(t=>t).forEach(t=>{x.add(t.toLowerCase())}),delete y["x-tags"]),Object.keys(y).forEach(e=>{if(e.startsWith("x-state:")||e.startsWith("x-reactive:")||e.startsWith("x-stateFields:")||e.startsWith("x-derive")||e.startsWith("x-script")){if(e.startsWith("x-state:")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.state(${y[e].trim()});`)}else if(e.startsWith("x-derive"))if(e.includes(":")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.derive(${y[e].trim()});`)}else $.push(`tjs.derive(${y[e].trim()});`);else if(e.startsWith("x-reactive:")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.reactive(${y[e].trim()});`)}else if(e.startsWith("x-stateFields:")){let t=e.split(":")[1];$.push(`const ${t.trim()}=tjs.stateFields(${y[e].trim()});`)}else $.push(y[e]);delete y[e]}});let T="";y["x-list"]&&(T=y["x-list"]||"",delete y["x-list"]);let L=Object.keys(y).map(e=>{if(e.startsWith("x-")){let t=e.substr(2);return`${w(t)}:${y[e]||""}`}else return`${w(e)}:${JSON.stringify(y[e])}`}).join(","),O=[],P="";F==="script"?P=JSON.stringify(S.textContent):(O=Array.from(S.childNodes).map(e=>z(e,x)),P=O.filter(e=>e.body).map(e=>e.body).join(","));let N=F.replace(/-/g,"_"),W="";var I=()=>{if(T){let e=T.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(e){let{k:t,d:a}=e.groups;W=`tjs.list(${N},${a},(${t}) =>${P||""})`}}};Object.keys(y).length>0?(W=`${N}({${L}} ${P?","+P:""})`,I()):(W=P?`${N}(${P})`:`${N}()`,I());let d=W;return $.length>0&&(d=`()=>{ ${$.join(`
`)} return ${W};}`),{tags:x,body:d}}function p(S,x){let y=new DOMParser().parseFromString(x,"text/html").body;return j(S,y)}function j(S,x){let F=[];for(let T of x.childNodes)F.push(z(T));let $=F.filter(T=>T.tags.size>0),y="";if($.length>0){let T=new Set;$.forEach(O=>{O.tags.forEach(P=>T.add(P))}),y=`const {${[...T].map(O=>/-/.test(O)?`"${O}":${O.replace(/-/g,"_")}`:O).join(", ")}}=tjs.tags;`}return[`${S}.replaceChildren();`,y,...$.map(T=>`tjs.add(${S}, ${T.body});`)]}return{addHtmToElement:p,domToJs:j}})();var ie=w=>{function E(z,p,j={mode:"open"}){window.customElements.define(z,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(S,x){super.setAttribute(S,x),this.attrs[S]&&(this.attrs[S].val=x)}connectedCallback(){let S;w.add(j?this.attachShadow(j):this,p({attr:(x,F)=>this.attrs[x]??=w.state(this.getAttribute(x)??F),mount:x=>S=x,$this:this,children:j?w.tags.slot():[...this.childNodes]})),this.dismount=S?.()}disconnectedCallback(){this.dismount?.()}})}return{define:E}};var ae=w=>{let E=0,{button:z,div:p,header:j,input:S,label:x,span:F,style:$}=w.tags,y=d=>Object.entries(d).map(([e,t])=>`${e}: ${t};`).join(""),T=d=>{},L=Object.getPrototypeOf(w.state(null)),O=d=>Object.getPrototypeOf(d??0)===L?d:w.state(d),P=({value:d,container:e=p,Loading:t,Error:a},s)=>{let o=w.state({status:"pending"});return d.then(f=>o.val={status:"fulfilled",value:f}).catch(f=>o.val={status:"rejected",value:f}),e(()=>o.val.status==="pending"?t?.()??"":o.val.status==="rejected"?a?.(o.val.value):s(o.val.value))},N=()=>++E,W=({title:d,closed:e=w.state(!1),x:t=100,y:a=100,width:s=300,height:o=200,closeCross:f="\xD7",customStacking:m=!1,zIndex:k=1,disableMove:D=!1,disableResize:i=!1,headerColor:u="lightgray",windowClass:g="",windowStyleOverrides:l={},headerClass:h="",headerStyleOverrides:v={},childrenContainerClass:b="",childrenContainerStyleOverrides:G={},crossClass:r="",crossStyleOverrides:n={},crossHoverClass:c="",crossHoverStyleOverrides:A={}},..._)=>{let C=O(t),V=O(a),Y=O(s),J=O(o),q=O(k);m||(q.val=N());let U=w.state(!1),X=w.state(null),B=w.state(0),K=w.state(0),te=w.state(0),re=w.state(0),Z=c||Object.keys(A)?w.state(!1):null,se=M=>{M.button===0&&(U.val=!0,B.val=M.clientX,K.val=M.clientY,document.body.style.userSelect="none")},Q=M=>H=>{X.val=M,B.val=H.clientX,K.val=H.clientY,te.val=Y.val,re.val=J.val,document.body.style.userSelect="none"},de=M=>{if(U.val)C.val+=M.clientX-B.val,V.val+=M.clientY-K.val,B.val=M.clientX,K.val=M.clientY;else if(X.val){let H=M.clientX-B.val,ue=M.clientY-K.val;X.val.includes("right")&&(Y.val=te.val+H),X.val.includes("bottom")&&(J.val=re.val+ue)}},ce=()=>{U.val=!1,X.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let M=$({type:"text/css",id:"tjsui-window-style"},T({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(M)}return()=>e.val?null:p({class:["tjsui-window"].concat(g||[]).join(" "),style:()=>y({left:`${C.val}px`,top:`${V.val}px`,width:`${Y.val}px`,height:`${J.val}px`,"z-index":q.val,...l}),...m?{}:{onmousedown:()=>q.val=N()}},d?j({class:["tjsui-window-header"].concat(h||[]).join(" "),style:y({"background-color":u,...D?{cursor:"auto"}:{},...v}),...D?{}:{onmousedown:se}},d,f?F({class:()=>["tjsui-window-cross"].concat(r||[]).concat(c&&Z.val?c:[]).join(" "),style:()=>y({...n,...Object.keys(A).length&&Z.val?A:{}}),onclick:()=>e.val=!0,...Z?{onmouseenter:()=>Z.val=!0,onmouseleave:()=>Z.val=!1}:{}},f):null):D?null:p({class:"tjsui-window-dragarea",onmousedown:se}),i?[]:[p({class:"tjsui-window-resize-right",onmousedown:Q("right")}),p({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),p({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],p({class:["tjsui-window-children"].concat(b||[]).join(" "),style:y(G)},_))};class I{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:e="unset",bottom:t="unset",backgroundColor:a="#333D",fontColor:s="white",fadeOutSec:o=.3,boardClass:f="",boardStyleOverrides:m={},messageClass:k="",messageStyleOverrides:D={},closerClass:i="",closerStyleOverrides:u={}},g=document.body){let l=y({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:e,bottom:t,left:"50%",transform:"translateX(-50%)","z-index":1e4,...m});this._fadeOutSec=o,this._messageClass=k,this._messageStylesStr=y({display:"flex","background-color":a,color:s,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${o}s, transform ${o}s`,...D}),this._closerClass=i,this._closerStylesStr=y({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...u}),g.appendChild(this._dom=p({class:f,style:l}))}show({message:e,closer:t,durationSec:a,closed:s=w.state(!1)}){let o=w.state(!1);w.derive(()=>setTimeout(m=>o.val=m,this._fadeOutSec*1e3,s.val));let f=p({class:this._messageClass,style:this._messageStylesStr},p(e),t?p({class:this._closerClass,style:this._closerStylesStr,onclick:()=>s.val=!0},t):null);return w.derive(()=>s.val&&(f.style.opacity="0",f.style.transform="translateY(-20px)")),a&&setTimeout(()=>s.val=!0,a*1e3),w.add(this._dom,()=>o.val?null:f),f}remove(){this._dom.remove()}}return{Await:P,MessageBoard:I,topMostZIndex:N,FloatingWindow:W}};var oe=(w,E)=>{let z=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,p={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},j={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},S=(d="")=>{let e=d.match(z);if(!e)return[];let{p:t,v:a}=e.groups,s=E[t];if(!s)return t=="cf"?a&&(a=[a[0].toLowerCase(),a.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[a])?typeof window.TFL_STYLE_CONFIG[a]=="string"?[window.TFL_STYLE_CONFIG[a]]:window.TFL_STYLE_CONFIG[a]:[]:[];let o=[],f="";if(a&&a.endsWith("!")&&(a=a.substr(0,a.length-1),f="!important"),t.length==d.length&&s.cssText)return typeof s.cssText=="string"?[s.cssText]:Array.isArray(s.cssText)?s.cssText:[];if(s.names&&typeof s.names=="string"&&(o=[s.names]),s.names&&Array.isArray(s.names)&&(o=s.names),t.length==d.length&&s.default&&o.length>0)return o.map(k=>`${k}:${s.default}${f}`);if(!a&&typeof s.fn=="function"){let m=s.fn();if(typeof m=="string")return[m];if(Array.isArray(m))return m}if(a){if(!s.default&&!s.cssText&&typeof s.fn=="function"){let l=[a[0].toLowerCase(),a.substr(1)].join(""),h=s.fn(l);if(h)return[h]}let m=/^\{(?<v>.+)\}$/,k=/^(?<v>--[a-z0-9-]+)$/,D=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,i=a.match(m);if(i){let{v:l}=i.groups;l=l.toLowerCase(),l=l.replace(/[_]+/g,b=>b.length%2==1?" ":b.substr(0,b.length/2));let h=o.map(b=>`${b}:${l}${f}`);return h.every(b=>CSS.supports(b))?h:[]}if(i=a.match(k),i){let{v:l}=i.groups;return o.map(v=>`${v}:var(${l})${f}`)}if(i=a.match(D),i){let{d1:l,d2:h}=i.groups;if(Number(h)>0){let v=o.map(b=>`${b}:calc(${l} * 100% / ${h})`);if(v.every(b=>CSS.supports(b)))return v}}let u=[a[0].toLowerCase(),a.substr(1)].join(""),g=s.exts&&Object.keys(s.exts).length>0?s.exts[u]:"";if(g)return o.map(h=>`${h}:${g}${f}`);{let l=o.map(h=>`${h}:${u}${f}`);if(l.every(h=>CSS.supports(h)))return l}if(typeof s.fn=="function"){let l=s.fn(u);if(l){let h=o.map(v=>`${v}:${l}${f}`);if(h.every(v=>CSS.supports(v)))return h}}}return[]},x=d=>{let e=S(d);return Array.isArray(e)&&e.length>0?e.join(";"):""},F=d=>{var e=/class="([^"]+)"/g,t=[];return[...d.matchAll(e)].forEach(a=>t=t.concat(a[1].split(" "))),[...new Set(t)]},$=d=>{if(!d)return[];let e=[].concat(...[...d.querySelectorAll("[class]")].map(a=>[...a.classList]));return[...new Set(e)]},y=d=>{let t=(d||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(t){let{m:s,v:o=""}=t.groups,f="";var a=(i,u=!0)=>{if(typeof i=="string"){let g=o.indexOf(i);u&&(g+=1),f=o.substr(g),o=o.substr(0,o.length-f.length)}else{let g=(i||[]).map(l=>[l,o.indexOf(l)]);if(g=g.filter(l=>l[1]>-1),g.length>0){g.sort((h,v)=>h[1]>=v[1]?1:-1);let l=g[0][1];u&&(l+=1),f=o.substr(l),o=o.substr(0,o.length-f.length)}}};o.indexOf("}")>-1?a("}"):a([":","_",">","+","~","*"],!1);let m=x(o);if(!m)return null;let k=CSS.escape(d),D=f?f.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,i=>i=="_"?" ":["~","+","*",">"].includes(i)?` ${i} `:i):"";return{type:s||"default",ext:!!D,css:`.${k}${D} {${m}}`,selectorText:`.${k}${D}`}}return null},T=(d=[])=>d.map(t=>y(t)).filter(t=>t),L=(d,e,t="")=>t?(j[d]&&j[d][e]&&t.length>0&&j[d][e].insertRule(t),!0):!1,O=(d,e,t=[])=>t.length==0?!1:j[d]&&j[d][e]?(j[d][e].replaceSync(t.join(`
`)),!0):!1,P=(d=[])=>{let e=T(d);for(let t of Object.keys(p)){let a=e.filter(m=>m.type==t&&m.ext==!1),s=e.filter(m=>m.type==t&&m.ext==!0),o=a.map(m=>m.css),f=s.map(m=>m.css);if(o.length>0)for(let m of o)p[t][0].has(m)||(p[t][0].add(m),L(t,0,m));if(f.length>0)for(let m of f)p[t][1].has(m)||p[t][1].add(m),L(t,1,m)}},N=d=>{new MutationObserver(e=>{for(let t of e)if(t.type=="attributes"&&t.attributeName=="class"){let s=[...t.target.classList].map(o=>o.trim()).filter(o=>o);typeof d=="function"&&d([...new Set(s)])}else if(t.type=="childList"&&t.addedNodes.length>0){let a=[...t.addedNodes].filter(s=>s.nodeType!=3).map(s=>[...s.classList]).flat(1/0).map(s=>s.trim()).filter(s=>s);typeof d=="function"&&d([...new Set(a)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},W=()=>{let d;return e=>{clearTimeout(d),d=setTimeout(()=>{Object.keys(p).forEach(t=>{let a="tfl-"+t+"-0",s="tfl-"+t+"-1";p[t][0].size>0&&localStorage.setItem(a,JSON.stringify([...p[t][0]])),p[t][1].size>0&&localStorage.setItem(s,JSON.stringify([...p[t][1]]))})},e||0)}};return{loadEventDom:()=>{var d=Object.values(j).flat();let e=new CSSStyleSheet;w&&Array.isArray(w)&&e.replaceSync(w.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e,...d],Object.keys(p).forEach(s=>{let o="tfl-"+s+"-0",f="tfl-"+s+"-1";if(localStorage.getItem(o))try{p[s][0]=new Set(JSON.parse(localStorage.getItem(o)))}catch{localStorage.removeItem(o)}if(localStorage.getItem(f))try{p[s][1]=new Set(JSON.parse(localStorage.getItem(f)))}catch{localStorage.removeItem(f)}}),Object.keys(p).forEach(s=>{let o=[...p[s][0]],f=[...p[s][1]];O(s,0,o),O(s,1,f)});let t=W(),a=$(document);P(a),N(s=>{P(s),t(1e3)})},renCssFromArray:T}};(()=>{Object.defineProperty(window,"tjs",{value:{...R,...le(R),...ne,...ie(R),...ae(R),cssFun:oe},writable:!1,configurable:!1,enumerable:!1}),["add","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","domToJs","define","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach(E=>{Object.defineProperty(window,"$"+E,{value:window.tjs[E],writable:!1,configurable:!1,enumerable:!1})}),addEventListener("tjs-load",function(){let z=window.tjs.addHtmToElement("document.body",document.body.innerHTML).join(`
`);new Function(z)()});let w=setInterval(()=>{if(document&&document.body&&document.body.isConnected){let E=new Event("tjs-load");dispatchEvent(E),clearInterval(w)}},1)})();})();

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
