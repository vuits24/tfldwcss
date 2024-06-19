let wasm_bindgen;
(()=>{window.Tjs_CSS_DF=["::before, ::after { box-sizing: border-box;  border-width: 0; border-style: solid; border-color: var(--un-default-border-color, #e5e7eb);}",'::before, ::after {  --un-content: ""; }','html, :host { line-height: 1.5; -webkit-text-size-adjust: 100%; -moz-tab-size: 4;tab-size: 4;font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent;}',"body { margin: 0;line-height: inherit;}","hr { height: 0; color: inherit; border-top-width: 1px;}","abbr:where([title]) { text-decoration: underline dotted; }","h1, h2, h3, h4, h5, h6 {font-size: inherit; font-weight: inherit; }","a {color: inherit; text-decoration: inherit; }","b, strong {font-weight: bolder; }",'code, kbd, samp, pre {font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings: normal;font-variation-settings: normal;font-size: 1em;}',"small {font-size: 80%; }","sub, sup {font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }","sub {bottom: -0.25em;}","sup {top: -0.5em;}","table { text-indent: 0; border-color: inherit; border-collapse: collapse;}","button, input, optgroup, select, textarea {font-family: inherit;font-feature-settings: inherit;font-variation-settings: inherit;font-size: 100%;font-weight: inherit;line-height: inherit;color: inherit;margin: 0;padding: 0;}","button, select { text-transform: none;}",'button, [type="button"], [type="reset"], [type="submit"] {-webkit-appearance: button;background-color: transparent;background-image: none;}',":-moz-focusring {outline: auto;}",":-moz-ui-invalid { box-shadow: none;}","progress {vertical-align: baseline;}","::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto;}",'[type="search"] { -webkit-appearance: textfield; outline-offset: -2px;}',"::-webkit-search-decoration {-webkit-appearance: none;}","::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}","summary {display: list-item;}","blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {margin: 0;}","fieldset {margin: 0;padding: 0;}","legend {padding: 0;}","ol, ul, menu {list-style: none;margin: 0;padding: 0;}","dialog {padding: 0;}","textarea {resize: vertical;}","input::placeholder, textarea::placeholder {opacity: 1;color: #9ca3af;}",'button, [role="button"] {cursor: pointer;}',":disabled {cursor: default;}","img, svg, video, canvas, audio, iframe, embed, object {display: block;vertical-align: middle;}","img, video {max-width: 100%;height: auto;}","[hidden] {display: none;}",".tjsui-window { position: fixed;background-color: white;border: 1px solid black;border-radius: 0.5rem;overflow: hidden; }",".tjsui-window-dragarea { cursor: move;position: absolute;left: 0;top: 0;width: 100%;height: 1rem; }",".tjsui-window-resize-right { cursor: e-resize;position: absolute;right: 0;top: 0;width: 10px;height: 100%;background-color: transparent; }",".tjsui-window-resize-bottom { cursor: s-resize;position: absolute;left: 0;bottom: 0;width: 100%;height: 10px;background-color: transparent; }",".tjsui-window-resize-rightbottom { cursor: se-resize;position: absolute;right: 0;bottom: 0;width: 10px;height: 10px;background-color: transparent; }",".tjsui-window-header { cursor: move;user-select: none;display: flex;justify-content: space-between;align-items: center;padding: 0.5rem; }",".tjsui-window-cross { cursor: pointer;font-family: Arial;transition: background-color 0.3s, color 0.3s;border-radius: 50%;width: 24px;height: 24px;display: flex;align-items: center;justify-content: center; }",".tjsui-window-cross:hover { background-color: red;color: white; }",".tjsui-window-children { padding: 0.5rem; }"];})();
(async o=>{const e=atob(o),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);const r=await new Response(n).body.pipeThrough(new DecompressionStream("gzip"));return await new Response(r).text()})("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").then(eval);
(()=>{Object.defineProperty(window,"$http",{get:()=>{function $(t,r=10){let d=null;return(...o)=>{d===null&&(t(...o),d=setTimeout(()=>{d=null},r))}}function n(t,r=10){let d;return function(...o){clearTimeout(d),d=setTimeout(()=>{t(...o)},r)}}function c(t,r){return typeof t=="function"&&t(r)}function s(t,r){return new URL(t,r||document.baseURI).toString()}function u(t,r,d,o){if(!navigator.onLine)return c(o,{result:!1,code:400,message:"No internet connection"});fetch(t,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r,payLoad:d||{}})}).then(e=>{if(!e||!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{c(o,e)}).catch(e=>c(o,{result:!1,code:400,message:e.message||""}))}function p(t,r){if(!navigator.onLine)return c(r,{result:!1,code:400,message:"No internet connection"});fetch(t).then(d=>{if(!d.ok)throw new Error(d.statusText);return d.json()}).then(d=>{c(r,d)}).catch(d=>{c(r,{result:!1,code:400,message:d.message||""})})}function g(t){if(!t)return"";let r=t?.filterRules??[],d=t?.type??"and";if(d&&r.length>0){let i=r.map(a=>g(a)).filter(a=>a);return i.length>0?` ( ${i.join(` ${d} `)} ) `:""}let o=t?.field?.trim()??"",e=t?.op??"=",l=t?.value??"";return o?(l.startsWith("{{")&&l.endsWith("}}")?l=l.slice(2,-2):typeof l=="string"&&(l=l.trim(),l=`s'${l}'`),`${o} ${e} ${l}`):""}function v(t){if(!t)return"";let r=t?.id??"",d=t?.select??{},o=t?.where??{},e=t?.group??[],l=t?.order??{},i=t?.limit??100,a=t?.start??0,q=g(o),I="*";d&&(I=Object.keys(d).map(f=>`${d[f]} as ${f}`).join(","));let y=e.join(","),_=Object.keys(l).map(f=>`${f} ${l[f]}`).join(",");return{id:r,select:I,where:q,group:y,order:_,limit:i,start:a}}var h=(t=>{var r=!1,d="";let o=null;return window.addEventListener("deviceId",function(e){e.detail&&(o=e.detail)}),typeof TflInvoker<"u"&&TflInvoker.postMessage("deviceId"),{keepOnline:n(function(e){let l=s("/user/keep-online",t);u(l,"",{},e)},500),checkAuth:n(function(e){let l=s("/user/check-token-live",t);u(l,"",{},e)},500),login:n(function(e,l){let i=s("/user/login",t);u(i,"users/login",e,l)},500),generateQrcode:n(function(e){let l=s("/user/generate-qrcode",t);u(l,"users/qrcode/generate-qrcode",{},a=>{a.code=="200"&&(r=!0,d=a.data.zid),typeof e=="function"&&e(a)})},200),checkQrcode:n(function(e,l){let i=s("/user/check-qrcode",t);u(i,"users/qrcode/check-qrcode",e,l)}),loginQrcode:n(function(e,l){let i=s("/user/login-qrcode",t);u(i,"users/qrcode/login-qrcode",e,l)}),checkScanQrCode:n(function(e,l){let i=s("/user/check-qrcode-token",t);u(i,"users/qrcode/check-qrcode-token",e,l)}),register:n(function(e,l){let i=s("/user/register",t);u(i,"users/register",e,l)},500),resendCode:n(function(e,l){let i=s("/user/resend-code",t);u(i,"users/resend-code",e,l)}),verifyCode:n(function(e,l){let i=s("/user/register-verify-code",t);u(i,"users/register-verify-code",e,l)}),forgotPasswordRequest:n(function(e,l){let i=s("/user/forgot-password",t);u(i,"users/forgot-password",e,l)}),forgotPasswordCheckCode:n(function(e,l){let i=s("/user/forgot-password-check-code",t);u(i,"users/forgot-password-check-code",e,l)}),forgotPasswordSetNewPassword:n(function(e,l){let i=s("/user/forgot-password-reset",t);u(i,"users/forgot-password-reset",e,l)}),profile:n(function(e){let l=s("/user/profile",t);u(l,"users/profile",{},e)}),updateProfile:n(function(e,l){let i=s("/user/update-profile",t);u(i,"users/update-profile",e,l)}),changePassword:n(function(e,l){let i=s("/user/change-password",t);u(i,"users/change-password",e,l)}),logout:n(function(e){let l=s("/user/logout",t);u(l,"users/logout",{},e)})}})("https://account.demo.pitoall.com"),m=(t=>({create:n(function(r,d,o,e){let l=s("/docs/create",t),i="docs/create";o={...o,gid:r,type:d},u(l,i,o,e)},100),update:n(function(r,d,o,e){let l=s("/docs/update",t);u(l,"docs/update",{gid:r,id:d,content:o},e)},100),delete:n(function(r,d,o){let e=s("/docs/delete",t);u(e,"docs/delete",{gid:r,id:d},o)},100),list:n(function(r,d,o){let e=s("/docs/list",t),l="docs/list",i=v(d);i.id=r,u(e,l,i,o)},500)}))("https://groups.demo.pitoall.com"),w=(t=>({create:n(function(r,d){let o=s("/groups/create",t);u(o,"groups/create",r,d)},100),update:n(function(r,d,o){let e=s("/groups/update",t);u(e,"groups/update",{id:r,content:d},o)},100),taxCode:n(function(r,d){let o=s("https://api.vietqr.io/v2/business/"+r);p(o,e=>{e&&e.code=="00"?c(d,{result:!0,code:200,data:e.data}):c(d,{result:!1,code:400,message:""})})}),banks:n(function(r){let d=s("https://api.vietqr.io/v2/banks");p(d,o=>{o&&o.code=="00"?c(r,{result:!0,code:200,data:{data:o.data,total:o.data.length}}):c(r,{result:!1,code:400,message:""})})}),list:n(function(r,d){let o=s("/groups/list",t),e="groups/list",l=v(r);u(o,e,l,d)},500),docs:m}))("https://groups.demo.pitoall.com"),k=(t=>({address_update:function(r,d){let o=s("/address/update",t);u(o,"address/update",r,d)},address_list:n(function(r,d){let o=s("/address/list",t),e="address/list",l=v(r);u(o,e,l,d)},500),geo_address:n(function(r,d){let o=s("/address/geo_autocomplete",t);u(o,"address/geo_autocomplete",r,d)}),geo_detail:n(function(r,d){let o=s("/address/geo_detail",t);u(o,"address/geo_detail",r,d)})}))("https://groups.demo.pitoall.com");return{account:h,business:w,cates:k}}});})();

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
