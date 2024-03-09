let wasm_bindgen;(function(){document.documentElement.style.visibility="hidden";const x={};let A;typeof document<"u"&&document.currentScript!==null&&(A=new URL(document.currentScript.src,location.href).toString());let i;const _=new Array(128).fill(void 0);_.push(void 0,null,!0,!1);function s(e){return _[e]}let d=_.length;function L(e){e<132||(_[e]=d,d=e)}function E(e){const n=s(e);return L(e),n}function a(e){d===_.length&&_.push(_.length+1);const n=d;return d=_[n],_[n]=e,n}const j=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&j.decode();let g=null;function h(){return(g===null||g.byteLength===0)&&(g=new Uint8Array(i.memory.buffer)),g}function S(e,n){return e=e>>>0,j.decode(h().subarray(e,e+n))}function T(e){const n=typeof e;if(n=="number"||n=="boolean"||e==null)return`${e}`;if(n=="string")return`"${e}"`;if(n=="symbol"){const o=e.description;return o==null?"Symbol":`Symbol(${o})`}if(n=="function"){const o=e.name;return typeof o=="string"&&o.length>0?`Function(${o})`:"Function"}if(Array.isArray(e)){const o=e.length;let u="[";o>0&&(u+=T(e[0]));for(let c=1;c<o;c++)u+=", "+T(e[c]);return u+="]",u}const t=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(t.length>1)r=t[1];else return toString.call(e);if(r=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:r}let b=0;const p=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},I=typeof p.encodeInto=="function"?function(e,n){return p.encodeInto(e,n)}:function(e,n){const t=p.encode(e);return n.set(t),{read:e.length,written:t.length}};function O(e,n,t){if(t===void 0){const f=p.encode(e),l=n(f.length,1)>>>0;return h().subarray(l,l+f.length).set(f),b=f.length,l}let r=e.length,o=n(r,1)>>>0;const u=h();let c=0;for(;c<r;c++){const f=e.charCodeAt(c);if(f>127)break;u[o+c]=f}if(c!==r){c!==0&&(e=e.slice(c)),o=t(o,r,r=c+e.length*3,1)>>>0;const f=h().subarray(o+c,o+r),l=I(e,f);c+=l.written,o=t(o,r,c,1)>>>0}return b=c,o}let w=null;function y(){return(w===null||w.byteLength===0)&&(w=new Int32Array(i.memory.buffer)),w}let m=null;function U(){return(m===null||m.byteLength===0)&&(m=new Uint32Array(i.memory.buffer)),m}function C(e,n){const t=n(e.length*4,4)>>>0,r=U();for(let o=0;o<e.length;o++)r[t/4+o]=a(e[o]);return b=e.length,t}function W(e,n){try{return e.apply(this,n)}catch(t){i.__wbindgen_exn_store(a(t))}}const $=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>i.__wbg_tflcss_free(e>>>0));class k{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,$.unregister(this),n}free(){const n=this.__destroy_into_raw();i.__wbg_tflcss_free(n)}constructor(){const n=i.tflcss_new();return this.__wbg_ptr=n>>>0,this}execute(n,t){try{const c=i.__wbindgen_add_to_stack_pointer(-16),f=O(n,i.__wbindgen_malloc,i.__wbindgen_realloc),l=b,N=C(t,i.__wbindgen_malloc),q=b;i.tflcss_execute(c,this.__wbg_ptr,f,l,N,q);var r=y()[c/4+0],o=y()[c/4+1],u=y()[c/4+2];if(u)throw E(o);return E(r)}finally{i.__wbindgen_add_to_stack_pointer(16)}}}x.TFLCss=k;async function D(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}function M(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(n){E(n)},e.wbg.__wbg_eval_4ad73ac086e3e772=function(n,t){const r=window.eval(S(n,t));return a(r)},e.wbg.__wbg_new_75208e29bddfd88c=function(){const n=new Array;return a(n)},e.wbg.__wbg_push_0239ee92f127e807=function(n,t){return s(n).push(s(t))},e.wbg.__wbg_from_58c79ccfb68060f5=function(n){const t=Array.from(s(n));return a(t)},e.wbg.__wbindgen_object_clone_ref=function(n){const t=s(n);return a(t)},e.wbg.__wbg_instanceof_Object_4abbcd5d20d5f7df=function(n){let t;try{t=s(n)instanceof Object}catch{t=!1}return t},e.wbg.__wbindgen_string_new=function(n,t){const r=S(n,t);return a(r)},e.wbg.__wbg_get_3fddfed2c83f434c=function(){return W(function(n,t){const r=Reflect.get(s(n),s(t));return a(r)},arguments)},e.wbg.__wbindgen_is_function=function(n){return typeof s(n)=="function"},e.wbg.__wbg_apply_fa968ef250133e31=function(){return W(function(n,t,r){const o=Reflect.apply(s(n),s(t),s(r));return a(o)},arguments)},e.wbg.__wbindgen_debug_string=function(n,t){const r=T(s(t)),o=O(r,i.__wbindgen_malloc,i.__wbindgen_realloc),u=b;y()[n/4+1]=u,y()[n/4+0]=o},e.wbg.__wbindgen_throw=function(n,t){throw new Error(S(n,t))},e}function B(e,n){}function F(e,n){return i=e.exports,R.__wbindgen_wasm_module=n,w=null,m=null,g=null,i}function z(e){if(i!==void 0)return i;const n=M();e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e));const t=new WebAssembly.Instance(e,n);return F(t,e)}async function R(e){if(i!==void 0)return i;typeof e>"u"&&typeof A<"u"&&(e=A.replace(/\.js$/,"_bg.wasm"));const n=M();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await D(await e,n);return F(t,r)}wasm_bindgen=Object.assign(R,{initSync:z},x),wasm_bindgen().then(()=>{var e=new wasm_bindgen.TFLCss;setTimeout(()=>{console.log(typeof window.MutationObserver);e.execute("loadEventDom",[]);})window.tfl_css=e,window.dispatchEvent(new Event("loaded_tfl_css")),document.documentElement.style.visibility=""})})();
