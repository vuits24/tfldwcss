let wasm_bindgen;
(()=>{var R=(()=>{let g=Object.getPrototypeOf,I,M,p,N,j={isConnected:1},m=1e3,C,P={},x=g(j),v=g(g),O,L=(c,u,o,a)=>(c??(setTimeout(o,a),new Set)).add(u),D=(c,u,o)=>{let a=p;p=u;try{return c(o)}catch(w){return console.error(w),o}finally{p=a}},V=c=>c.filter(u=>u._dom?.isConnected),F=c=>C=L(C,c,()=>{for(let u of C)u._bindings=V(u._bindings),u._listeners=V(u._listeners);C=O},m),T={get val(){return p?._getters?.add(this),this.rawVal},get oldVal(){return p?._getters?.add(this),this._oldVal},set val(c){p?._setters?.add(this),c!==this.rawVal&&(this.rawVal=c,this._bindings.length+this._listeners.length?(M?.add(this),I=L(I,this,z)):this._oldVal=c)}},i=c=>Object.create(T,{rawVal:{value:c,writable:!0,enumerable:!0,configurable:!0},_oldVal:{value:c,writable:!0,enumerable:!0,configurable:!0},_bindings:{value:[],writable:!0,enumerable:!0,configurable:!0},_listeners:{value:[],writable:!0,enumerable:!0,configurable:!0}}),d=(c,u)=>{let o={_getters:new Set,_setters:new Set},a={f:c},w=N;N=[];let S=D(c,o,u);S=(S??document).nodeType?S:new Text(S);for(let E of o._getters)o._setters.has(E)||(F(E),E._bindings.push(a));for(let E of N)E._dom=S;return N=w,a._dom=S},l=(c,u=i(),o)=>{let a={_getters:new Set,_setters:new Set},w={f:c,s:u};w._dom=o??N?.push(w)??j,u.val=D(c,a,u.rawVal);for(let S of a._getters)a._setters.has(S)||(F(S),S._listeners.push(w));return u},t=(c="append")=>(u,...o)=>{["append","prepend","before","after","replaceWith","remove","replaceChildren"].includes(c)||(c="append");for(let w of o.flat(1/0)){let S=g(w??0),E=S===T?d(()=>w.val):S===v?d(w):w;E!=O&&u[c](E)}return u},e=t(),n=(c,u,...o)=>{let[a,...w]=g(o[0]??0)===x?o:[{},...o],S=c?document.createElementNS(c,u):document.createElement(u);for(let[E,r]of Object.entries(a)){let s=k=>k?Object.getOwnPropertyDescriptor(k,E)??s(g(k)):O,f=u+","+E,$=P[f]??(P[f]=s(g(S))?.set??0),_=E.startsWith("on:")?(k,J)=>{let W=E.slice(3);S.removeEventListener(W,J),S.addEventListener(W,k)}:$?$.bind(S):S.setAttribute.bind(S,E),b=g(r??0);E.startsWith("on:")||b===v&&(r=l(r),b=T),b===T?d(()=>(_(r.val,r._oldVal),S)):_(r)}return e(S,...w)},h=c=>({get:(u,o)=>n.bind(O,c,o)}),y=new Proxy(c=>new Proxy(n,h(c)),h()),Y=(c,u)=>u?u!==c&&c.replaceWith(u):c.remove(),z=()=>{let c=0,u=[...I].filter(a=>a.rawVal!==a._oldVal);do{M=new Set;for(let a of new Set(u.flatMap(w=>w._listeners=V(w._listeners))))l(a.f,a.s,a._dom),a._dom=O}while(++c<100&&(u=[...M]).length);let o=[...I].filter(a=>a.rawVal!==a._oldVal);I=O;for(let a of new Set(o.flatMap(w=>w._bindings=V(w._bindings))))Y(a._dom,d(a.f,a._dom)),a._dom=O;for(let a of o)a._oldVal=a.rawVal};return{add:e,insertNodes:t,tags:y,state:i,derive:l,hydrate:(c,u)=>Y(c,d(u,c))}})();var se=g=>{let{fromEntries:I,entries:M,keys:p}=Object,{get:N,set:j,deleteProperty:m,ownKeys:C}=Reflect,{state:P,derive:x,add:v}=g,O,L=1e3,D,V,F=Symbol(),T=Symbol(),i=Symbol(),d=Symbol(),l=Symbol(),t=Symbol(),e=r=>(r[i]=1,r),n=r=>{if(r?.[i]){let s=P();return x(()=>{let f=r();s.rawVal instanceof Object&&f instanceof Object?S(s.rawVal,f):s.val=h(f)}),s}else return P(h(r))},h=r=>!(r instanceof Object)||r[T]?r:new Proxy((r[F]=r,r[T]=I(M(r).map(([s,f])=>[s,n(f)])),r[d]=[],r[l]=P(1),r),{get:(s,f,$)=>s[T].hasOwnProperty(f)?s[T][f].val:(f==="length"&&s[l].val,N(s,f,$)),set(s,f,$,_){let b=s[T];if(b.hasOwnProperty(f))return b[f].val=h($),1;let k=f in s,J=k&&f==="length"&&$!==s.length;if(j(s,f,$))return k?J&&++s[l].val:j(b,f,n($))&&(++s[l].val,c(_,f,b[f])),1},deleteProperty:(s,f)=>(m(s[T],f)&&u(s,f),m(s,f)&&++s[l].val),ownKeys:s=>(s[l].val,C(s))}),y=r=>r[T],Y=r=>r[T]?new Proxy(r[T],{get:(s,f)=>Y(s[f].rawVal)}):r,z=r=>r[d]=r[d].filter(s=>s._containerDom.isConnected),A=(r,s,f,$,{_containerDom:_,f:b})=>{let k=Array.isArray(r);if(v(_,()=>_[t][s]=b(f,()=>delete r[s],k?Number(s):s)),k&&!$&&s!=r.length-1){let J=Number(s);_.insertBefore(_.lastChild,_[t][p(r).find(W=>Number(W)>J)])}},c=(r,s,f)=>z(r).forEach(A.bind(D,r,s,f,V)),u=(r,s)=>{for(let f of z(r)){let $=f._containerDom[t];$[s]?.remove(),delete $[s]}},o=r=>(O??(O=(setTimeout(()=>(O.forEach(z),O=D),L),new Set))).add(r),a=(r,s,f)=>{let $={_containerDom:r instanceof Function?r():r,f};$._containerDom[t]={},s[d].push($),o(s);for(let[_,b]of M(s[T]))A(s,_,b,1,$);return $._containerDom},w=(r,s)=>{for(let[_,b]of M(s)){let k=r[_];k instanceof Object&&b instanceof Object?w(k,b):r[_]=b}for(let _ in r)s.hasOwnProperty(_)||delete r[_];let f=p(s),$=Array.isArray(r);if($||p(r).some((_,b)=>_!==f[b])){if($)r.length=s.length;else{++r[l].val;let _=r[F],b={..._};for(let k of f)delete _[k];for(let k of f)_[k]=b[k]}for(let{_containerDom:_}of z(r)){let{firstChild:b,[t]:k}=_;for(let J of f)b===k[J]?b=b.nextSibling:_.insertBefore(k[J],b)}}return r},S=(r,s)=>{V=1;try{return w(r,s instanceof Function?Array.isArray(r)?s(r.filter(f=>1)):I(s(M(r))):s)}finally{V=D}},E=r=>Array.isArray(r)?r.filter(s=>1).map(E):r instanceof Object?I(M(r).map(([s,f])=>[s,E(f)])):r;return{calc:e,reactive:h,stateFields:y,raw:Y,list:a,replace:S,compact:E}};var ne=(()=>{function g(m){return/^[a-zA-Z_][a-zA-Z_0-9]+$/.test(m)?m:`"${m}"`}function I(m=""){let C=[];if(m.includes("{{")&&m.includes("}}")){let x=m.indexOf("{{"),v=m.indexOf("}}"),O=m.slice(0,x).trim(),L=m.slice(v+2).trim(),D=m.slice(x+2,v).trim();if(O.length>0&&C.push(JSON.stringify(O)),D.length>0&&C.push(D),L.length>0){let V=I(L).filter(F=>F);L.length>0&&C.push(...V)}}else C.push(JSON.stringify(m));let P=C.filter(x=>x);return P.length===0?[]:P}function M(m,C=!1){if(m.nodeType===3)return I(m.nodeValue.trim()).filter(n=>n&&n!='""').join(",");if(!m.tagName||m.tagName.toLowerCase()==="script"&&!C)return"";let P=m.tagName.toLowerCase(),x=[],v={};if(Array.from(m.attributes).forEach(t=>{v[t.name.trim()]=t.value.trim()}),v.hasOwnProperty("x-tags")&&delete v["x-tags"],v.hasOwnProperty("x-script")){let t="x-script";x.push(v[t]),delete v[t]}let O=v.hasOwnProperty("x-include")?(()=>{let e=v["x-include"],n="__"+Date.now().toString(36),h=`$Await({value: fetch(${JSON.stringify(e)}).then(response => response.text()).then(data => $htmlToTjs(data, true))}, p => $tags["div"](p.map(m=>eval(m)())) )`;return delete v["x-include"],h})():"",L=v.hasOwnProperty("x-list")?(()=>{let t=v["x-list"]||"";return delete v["x-list"],t})():"",D=Object.keys(v).map(t=>{let e=t;return e.startsWith("on:")?`${g(e)}:${v[t]||""}`:`${g(e)}:${JSON.stringify(v[t])}`}).join(","),V=[],F="";P==="script"?F=JSON.stringify(m.textContent):O||(V=Array.from(m.childNodes).map(t=>M(t,C)),F=V.filter(t=>t).join(","));let T=`$tags["${P}"]`,i="";var d=()=>{if(L){let t=L.match(/^\s*(\()?(?<k>[^\(\)]+)(\))?\s+in\s+(?<d>[a-zA-Z0-9\.\$_]+)\s*$/);if(t){let{k:e,d:n}=t.groups;i=`$list(${T},${n},(${e}) =>${F||""})`}}O&&(D?i=`${T}({${D}},${O})`:i=`${T}(${O})`)};Object.keys(v).length>0?(i=`${T}({${D}} ${F?","+F:""})`,d()):(i=F?`${T}(${F})`:`${T}()`,d());let l=i;return x.length>0&&(l=`()=>{${x.join(`
`)} return ${i};}`),l}function p(m,C="append",P,x=!1){return $insertNodes(C)(m,N(P,x).map(v=>new Function("return "+v)()))}function N(m,C=!1){let v=new DOMParser().parseFromString(m,"text/html").body;return j(v,C)}function j(m,C=!1){let P=[];for(let x of m.childNodes)P.push(M(x,C));return P=P.filter(x=>x),P}return{addHtmToElement:p,htmlToTjs:N,domToTjs:j}})();var ie=g=>{function I(M,p,N={mode:"open"}){window.customElements.define(M,class extends HTMLElement{constructor(){super(),this.attrs=[]}setAttribute(j,m){super.setAttribute(j,m),this.attrs[j]&&(this.attrs[j].val=m)}connectedCallback(){let j;g.add(N?this.attachShadow(N):this,p({attr:(m,C)=>this.attrs[m]??=g.state(this.getAttribute(m)??C),mount:m=>j=m,$this:this,children:N?g.tags.slot():[...this.childNodes]})),this.dismount=j?.()}disconnectedCallback(){this.dismount?.()}})}return{define:I}};var ae=g=>{let I=0,{button:M,div:p,header:N,input:j,label:m,span:C,style:P}=g.tags,x=i=>Object.entries(i).map(([d,l])=>`${d}: ${l};`).join(""),v=i=>{},O=Object.getPrototypeOf(g.state(null)),L=i=>Object.getPrototypeOf(i??0)===O?i:g.state(i),D=({value:i,container:d=p,Loading:l,Error:t},e)=>{let n=g.state({status:"pending"});return i.then(h=>{n.val={status:"fulfilled",value:h}}).catch(h=>n.val={status:"rejected",value:h}),d(()=>n.val.status==="pending"?l?.()??"":n.val.status==="rejected"?t?.(n.val.value):e(n.val.value))},V=()=>++I,F=({title:i,closed:d=g.state(!1),x:l=100,y:t=100,width:e=300,height:n=200,closeCross:h="\xD7",customStacking:y=!1,zIndex:Y=1,disableMove:z=!1,disableResize:A=!1,headerColor:c="lightgray",windowClass:u="",windowStyleOverrides:o={},headerClass:a="",headerStyleOverrides:w={},childrenContainerClass:S="",childrenContainerStyleOverrides:E={},crossClass:r="",crossStyleOverrides:s={},crossHoverClass:f="",crossHoverStyleOverrides:$={}},..._)=>{let b=L(l),k=L(t),J=L(e),W=L(n),H=L(Y);y||(H.val=V());let U=g.state(!1),X=g.state(null),B=g.state(0),K=g.state(0),te=g.state(0),re=g.state(0),Z=f||Object.keys($)?g.state(!1):null,le=G=>{G.button===0&&(U.val=!0,B.val=G.clientX,K.val=G.clientY,document.body.style.userSelect="none")},Q=G=>q=>{X.val=G,B.val=q.clientX,K.val=q.clientY,te.val=J.val,re.val=W.val,document.body.style.userSelect="none"},de=G=>{if(U.val)b.val+=G.clientX-B.val,k.val+=G.clientY-K.val,B.val=G.clientX,K.val=G.clientY;else if(X.val){let q=G.clientX-B.val,ue=G.clientY-K.val;X.val.includes("right")&&(J.val=te.val+q),X.val.includes("bottom")&&(W.val=re.val+ue)}},ce=()=>{U.val=!1,X.val=null,document.body.style.userSelect=""};document.addEventListener("mousemove",de),document.addEventListener("mouseup",ce);let ee="transparent";if(!document.getElementById("tjsui-window-style")){let G=P({type:"text/css",id:"tjsui-window-style"},v({".tjsui-window":{position:"fixed","background-color":"white",border:"1px solid black","border-radius":"0.5rem",overflow:"hidden"},".tjsui-window-dragarea":{cursor:"move",position:"absolute",left:"0",top:"0",width:"100%",height:"1rem"},".tjsui-window-resize-right":{cursor:"e-resize",position:"absolute",right:"0",top:"0",width:"10px",height:"100%","background-color":ee},".tjsui-window-resize-bottom":{cursor:"s-resize",position:"absolute",left:"0",bottom:"0",width:"100%",height:"10px","background-color":ee},".tjsui-window-resize-rightbottom":{cursor:"se-resize",position:"absolute",right:"0",bottom:"0",width:"10px",height:"10px","background-color":ee},".tjsui-window-header":{cursor:"move","user-select":"none",display:"flex","justify-content":"space-between","align-items":"center",padding:"0.5rem"},".tjsui-window-cross":{cursor:"pointer","font-family":"Arial",transition:"background-color 0.3s, color 0.3s","border-radius":"50%",width:"24px",height:"24px",display:"flex","align-items":"center","justify-content":"center"},".tjsui-window-cross:hover":{"background-color":"red",color:"white"},".tjsui-window-children":{padding:"0.5rem"}}));document.head.appendChild(G)}return()=>d.val?null:p({class:["tjsui-window"].concat(u||[]).join(" "),style:()=>x({left:`${b.val}px`,top:`${k.val}px`,width:`${J.val}px`,height:`${W.val}px`,"z-index":H.val,...o}),...y?{}:{onmousedown:()=>H.val=V()}},i?N({class:["tjsui-window-header"].concat(a||[]).join(" "),style:x({"background-color":c,...z?{cursor:"auto"}:{},...w}),...z?{}:{onmousedown:le}},i,h?C({class:()=>["tjsui-window-cross"].concat(r||[]).concat(f&&Z.val?f:[]).join(" "),style:()=>x({...s,...Object.keys($).length&&Z.val?$:{}}),onclick:()=>d.val=!0,...Z?{onmouseenter:()=>Z.val=!0,onmouseleave:()=>Z.val=!1}:{}},h):null):z?null:p({class:"tjsui-window-dragarea",onmousedown:le}),A?[]:[p({class:"tjsui-window-resize-right",onmousedown:Q("right")}),p({class:"tjsui-window-resize-bottom",onmousedown:Q("bottom")}),p({class:"tjsui-window-resize-rightbottom",onmousedown:Q("rightbottom")})],p({class:["tjsui-window-children"].concat(S||[]).join(" "),style:x(E)},_))};class T{_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;constructor({top:d="unset",bottom:l="unset",backgroundColor:t="#333D",fontColor:e="white",fadeOutSec:n=.3,boardClass:h="",boardStyleOverrides:y={},messageClass:Y="",messageStyleOverrides:z={},closerClass:A="",closerStyleOverrides:c={}},u=document.body){let o=x({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:d,bottom:l,left:"50%",transform:"translateX(-50%)","z-index":1e4,...y});this._fadeOutSec=n,this._messageClass=Y,this._messageStylesStr=x({display:"flex","background-color":t,color:e,padding:"15px","margin-bottom":"10px","border-radius":"5px",transition:`opacity ${n}s, transform ${n}s`,...z}),this._closerClass=A,this._closerStylesStr=x({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...c}),u.appendChild(this._dom=p({class:h,style:o}))}show({message:d,closer:l,durationSec:t,closed:e=g.state(!1)}){let n=g.state(!1);g.derive(()=>setTimeout(y=>n.val=y,this._fadeOutSec*1e3,e.val));let h=p({class:this._messageClass,style:this._messageStylesStr},p(d),l?p({class:this._closerClass,style:this._closerStylesStr,onclick:()=>e.val=!0},l):null);return g.derive(()=>e.val&&(h.style.opacity="0",h.style.transform="translateY(-20px)")),t&&setTimeout(()=>e.val=!0,t*1e3),g.add(this._dom,()=>n.val?null:h),h}remove(){this._dom.remove()}}return{Await:D,MessageBoard:T,topMostZIndex:V,FloatingWindow:F}};var oe=(g,I)=>{let M=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--|-).*)?$/,p={default:[new Set,new Set],xs:[new Set,new Set],sm:[new Set,new Set],md:[new Set,new Set],lg:[new Set,new Set],xl:[new Set,new Set],"2xl":[new Set,new Set]},N={default:[new CSSStyleSheet,new CSSStyleSheet],xs:[new CSSStyleSheet({media:"screen and (max-width: 575px)"}),new CSSStyleSheet({media:"screen and (max-width: 575px)"})],sm:[new CSSStyleSheet({media:"screen and (min-width: 576px)"}),new CSSStyleSheet({media:"screen and (min-width: 576px)"})],md:[new CSSStyleSheet({media:"screen and (min-width: 768px)"}),new CSSStyleSheet({media:"screen and (min-width: 768px)"})],lg:[new CSSStyleSheet({media:"screen and (min-width: 992px)"}),new CSSStyleSheet({media:"screen and (min-width: 992px)"})],xl:[new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),new CSSStyleSheet({media:"screen and (min-width: 1200px)"})],"2xl":[new CSSStyleSheet({media:"screen and (min-width: 1400px)"}),new CSSStyleSheet({media:"screen and (min-width: 1400px)"})]},j=(i="")=>{let d=i.match(M);if(!d)return[];let{p:l,v:t}=d.groups,e=I[l];if(!e)return l=="cf"?t&&(t=[t[0].toLowerCase(),t.substr(1)].join(""),typeof window.TFL_STYLE_CONFIG=="object"&&Object.keys(window.TFL_STYLE_CONFIG).length>0&&window.TFL_STYLE_CONFIG[t])?typeof window.TFL_STYLE_CONFIG[t]=="string"?[window.TFL_STYLE_CONFIG[t]]:window.TFL_STYLE_CONFIG[t]:[]:[];let n=[],h="";if(t&&t.endsWith("!")&&(t=t.substr(0,t.length-1),h="!important"),l.length==i.length&&e.cssText)return typeof e.cssText=="string"?[e.cssText]:Array.isArray(e.cssText)?e.cssText:[];if(e.names&&typeof e.names=="string"&&(n=[e.names]),e.names&&Array.isArray(e.names)&&(n=e.names),l.length==i.length&&e.default&&n.length>0)return n.map(Y=>`${Y}:${e.default}${h}`);if(!t&&typeof e.fn=="function"){let y=e.fn();if(typeof y=="string")return[y];if(Array.isArray(y))return y}if(t){if(!e.default&&!e.cssText&&typeof e.fn=="function"){let o=[t[0].toLowerCase(),t.substr(1)].join(""),a=e.fn(o);if(a)return[a]}let y=/^\{(?<v>.+)\}$/,Y=/^(?<v>--[a-z0-9-]+)$/,z=/^(?<d1>(-)?\d+)\/(?<d2>\d+)$/,A=t.match(y);if(A){let{v:o}=A.groups;o=o.toLowerCase(),o=o.replace(/[_]+/g,S=>S.length%2==1?" ":S.substr(0,S.length/2));let a=n.map(S=>`${S}:${o}${h}`);return a.every(S=>CSS.supports(S))?a:[]}if(A=t.match(Y),A){let{v:o}=A.groups;return n.map(w=>`${w}:var(${o})${h};`)}if(A=t.match(z),A){let{d1:o,d2:a}=A.groups;if(Number(a)>0){let w=n.map(S=>`${S}:calc(${o} * 100% / ${a})`);if(w.every(S=>CSS.supports(S)))return w}}let c=[t[0].toLowerCase(),t.substr(1)].join(""),u=e.exts&&Object.keys(e.exts).length>0?e.exts[c]:"";if(u)return n.map(a=>`${a}:${u}${h}`);{let o=n.map(a=>`${a}:${c}${h}`);if(o.every(a=>CSS.supports(a)))return o}if(typeof e.fn=="function"){let o=e.fn(c);if(o){let a=n.map(w=>`${w}:${o}${h}`);if(a.every(w=>CSS.supports(w)))return a}}}return[]},m=i=>{let d=j(i);return Array.isArray(d)&&d.length>0?d.join(";"):""},C=i=>{var d=/class="([^"]+)"/g,l=[];return[...i.matchAll(d)].forEach(t=>l=l.concat(t[1].split(" "))),[...new Set(l)]},P=i=>{if(!i)return[];let d=[].concat(...[...i.querySelectorAll("[class]")].map(t=>[...t.classList]));return[...new Set(d)]},x=i=>{let l=(i||"").match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);if(l){let{m:e,v:n=""}=l.groups,h="";var t=(A,c=!0)=>{if(typeof A=="string"){let u=n.indexOf(A);c&&(u+=1),h=n.substr(u),n=n.substr(0,n.length-h.length)}else{let u=(A||[]).map(o=>[o,n.indexOf(o)]);if(u=u.filter(o=>o[1]>-1),u.length>0){u.sort((a,w)=>a[1]>=w[1]?1:-1);let o=u[0][1];c&&(o+=1),h=n.substr(o),n=n.substr(0,n.length-h.length)}}};n.indexOf("}")>-1?t("}"):t([":","_",">","+","~","*"],!1);let y=m(n);if(!y)return null;let Y=CSS.escape(i),z=h?h.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g,A=>A=="_"?" ":["~","+","*",">"].includes(A)?` ${A} `:A):"";return{type:e||"default",ext:!!z,css:`.${Y}${z} {${y}}`,selectorText:`.${Y}${z}`}}return null},v=(i=[])=>i.map(l=>x(l)).filter(l=>l),O=(i,d,l="")=>{if(!l)return!1;if(N[i]&&N[i][d]&&l.length>0){let t=N[i][d];try{t.insertRule(l)}catch(e){console.error(e)}}return!0},L=(i,d,l=[])=>l.length==0?!1:N[i]&&N[i][d]?(N[i][d].replaceSync(l.join(`
`)),!0):!1,D=(i=[])=>{let d=v(i);for(let l of Object.keys(p)){let t=d.filter(y=>y.type==l&&y.ext==!1),e=d.filter(y=>y.type==l&&y.ext==!0),n=t.map(y=>y.css),h=e.map(y=>y.css);if(n.length>0)for(let y of n)p[l][0].has(y)||(p[l][0].add(y),O(l,0,y));if(h.length>0)for(let y of h)p[l][1].has(y)||p[l][1].add(y),O(l,1,y)}},V=i=>{new MutationObserver(d=>{for(let l of d)if(l.type=="attributes"&&l.attributeName=="class"){let e=[...l.target.classList].map(n=>n.trim()).filter(n=>n);typeof i=="function"&&i([...new Set(e)])}else if(l.type=="childList"&&l.addedNodes.length>0){let t=[...l.addedNodes].filter(e=>e.nodeType!=3).map(e=>[...e.classList]).flat(1/0).map(e=>e.trim()).filter(e=>e);typeof i=="function"&&i([...new Set(t)])}}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})},F=()=>{let i;return d=>{clearTimeout(i),i=setTimeout(()=>{Object.keys(p).forEach(l=>{let t="tfl-"+l+"-0",e="tfl-"+l+"-1";p[l][0].size>0&&localStorage.setItem(t,JSON.stringify([...p[l][0]])),p[l][1].size>0&&localStorage.setItem(e,JSON.stringify([...p[l][1]]))})},d||0)}};return{loadEventDom:()=>{var i=Object.values(N).flat();let d=new CSSStyleSheet;g&&Array.isArray(g)&&d.replaceSync(g.join(`
`)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,d,...i],Object.keys(p).forEach(e=>{let n="tfl-"+e+"-0",h="tfl-"+e+"-1";if(localStorage.getItem(n))try{p[e][0]=new Set(JSON.parse(localStorage.getItem(n)))}catch{localStorage.removeItem(n)}if(localStorage.getItem(h))try{p[e][1]=new Set(JSON.parse(localStorage.getItem(h)))}catch{localStorage.removeItem(h)}}),Object.keys(p).forEach(e=>{let n=[...p[e][0]],h=[...p[e][1]];L(e,0,n),L(e,1,h)});let l=F(),t=P(document);D(t),V(e=>{D(e),l(1e3)})},renCssFromArray:v}};Object.defineProperty(window,"tjs",{value:{...R,...se(R),...ne,...ie(R),...ae(R),cssFun:oe},writable:!1,configurable:!1,enumerable:!1}),["add","insertNodes","tags","state","derive","hydrate","calc","reactive","stateFields","raw","list","replace","compact","addHtmToElement","htmlToTjs","domToTjs","define","Await","MessageBoard","topMostZIndex","FloatingWindow","loadEventDom","renCssFromArray"].forEach(g=>{Object.defineProperty(window,"$"+g,{value:window.tjs[g],writable:!1,configurable:!1,enumerable:!1})});})();

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
