let wasm_bindgen;
(()=>{window.Tjs_CSS_DF=["::before, ::after { box-sizing: border-box;  border-width: 0; border-style: solid; border-color: var(--un-default-border-color, #e5e7eb);}",'::before, ::after {  --un-content: ""; }','html, :host { line-height: 1.5; -webkit-text-size-adjust: 100%; -moz-tab-size: 4;tab-size: 4;font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent;}',"body { margin: 0;line-height: inherit;}","hr { height: 0; color: inherit; border-top-width: 1px;}","abbr:where([title]) { text-decoration: underline dotted; }","h1, h2, h3, h4, h5, h6 {font-size: inherit; font-weight: inherit; }","a {color: inherit; text-decoration: inherit; }","b, strong {font-weight: bolder; }",'code, kbd, samp, pre {font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings: normal;font-variation-settings: normal;font-size: 1em;}',"small {font-size: 80%; }","sub, sup {font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }","sub {bottom: -0.25em;}","sup {top: -0.5em;}","table { text-indent: 0; border-color: inherit; border-collapse: collapse;}","button, input, optgroup, select, textarea {font-family: inherit;font-feature-settings: inherit;font-variation-settings: inherit;font-size: 100%;font-weight: inherit;line-height: inherit;color: inherit;margin: 0;padding: 0;}","button, select { text-transform: none;}",'button, [type="button"], [type="reset"], [type="submit"] {-webkit-appearance: button;background-color: transparent;background-image: none;}',":-moz-focusring {outline: auto;}",":-moz-ui-invalid { box-shadow: none;}","progress {vertical-align: baseline;}","::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto;}",'[type="search"] { -webkit-appearance: textfield; outline-offset: -2px;}',"::-webkit-search-decoration {-webkit-appearance: none;}","::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}","summary {display: list-item;}","blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {margin: 0;}","fieldset {margin: 0;padding: 0;}","legend {padding: 0;}","ol, ul, menu {list-style: none;margin: 0;padding: 0;}","dialog {padding: 0;}","textarea {resize: vertical;}","input::placeholder, textarea::placeholder {opacity: 1;color: #9ca3af;}",'button, [role="button"] {cursor: pointer;}',":disabled {cursor: default;}","img, svg, video, canvas, audio, iframe, embed, object {display: block;vertical-align: middle;}","img, video {max-width: 100%;height: auto;}","[hidden] {display: none;}",".tjsui-window { position: fixed;background-color: white;border: 1px solid black;border-radius: 0.5rem;overflow: hidden; }",".tjsui-window-dragarea { cursor: move;position: absolute;left: 0;top: 0;width: 100%;height: 1rem; }",".tjsui-window-resize-right { cursor: e-resize;position: absolute;right: 0;top: 0;width: 10px;height: 100%;background-color: transparent; }",".tjsui-window-resize-bottom { cursor: s-resize;position: absolute;left: 0;bottom: 0;width: 100%;height: 10px;background-color: transparent; }",".tjsui-window-resize-rightbottom { cursor: se-resize;position: absolute;right: 0;bottom: 0;width: 10px;height: 10px;background-color: transparent; }",".tjsui-window-header { cursor: move;user-select: none;display: flex;justify-content: space-between;align-items: center;padding: 0.5rem; }",".tjsui-window-cross { cursor: pointer;font-family: Arial;transition: background-color 0.3s, color 0.3s;border-radius: 50%;width: 24px;height: 24px;display: flex;align-items: center;justify-content: center; }",".tjsui-window-cross:hover { background-color: red;color: white; }",".tjsui-window-children { padding: 0.5rem; }"];})();
(async o=>{const e=atob(o),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);const r=await new Response(n).body.pipeThrough(new DecompressionStream("gzip"));return await new Response(r).text()})("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").then(eval);
(()=>{Object.defineProperty(window,"$http",{get:()=>{function $(s,t=10){let e=null;return(...l)=>{e===null&&(s(...l),e=setTimeout(()=>{e=null},t))}}function i(s,t=10){let e;return function(...l){clearTimeout(e),e=setTimeout(()=>{s(...l)},t)}}function u(s,t){return typeof s=="function"&&s(t)}function o(s,t){return new URL(s,t||document.baseURI).toString()}function d(s,t,e,l){if(!navigator.onLine)return u(l,{result:!1,code:400,message:"No internet connection"});fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,payLoad:e||{}})}).then(r=>{if(!r||!r.ok)throw new Error(r.statusText);return r.json()}).then(r=>{u(l,r)}).catch(r=>u(l,{result:!1,code:400,message:r.message||""}))}function p(s,t){if(!navigator.onLine)return u(t,{result:!1,code:400,message:"No internet connection"});fetch(s).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{u(t,e)}).catch(e=>{u(t,{result:!1,code:400,message:e.message||""})})}function g(s){if(!s)return"";let t=s?.filterRules??[],e=s?.type??"and";if(e&&t.length>0){let a=t.map(c=>g(c)).filter(c=>c);return a.length>0?` ( ${a.join(` ${e} `)} ) `:""}let l=s?.field?.trim()??"",r=s?.op??"=",n=s?.value??"";return l?(n.startsWith("{{")&&n.endsWith("}}")?n=n.slice(2,-2):typeof n=="string"&&(n=n.trim(),n=`'${n}'`),`${l} ${r} ${n}`):""}function v(s){if(!s)return"";let t=s?.select??{},e=s?.where??{},l=s?.group??[],r=s?.order??{},n=s?.limit??100,a=s?.start??0,c=g(e),I="*";t&&(I=Object.keys(t).map(f=>`${t[f]} as ${f}`).join(","));let y=l.join(","),q=Object.keys(r).map(f=>`${f} ${r[f]}`).join(",");return{select:I,where:c,group:y,order:q,limit:n,start:a}}var h=(s=>({login:i(function(t,e,l){let r=o("/user/login",s);d(r,"users/login",{username:t,password:e},l)},500),generateQrcode:i(function(t,e){let l=o("/user/generate-qrcode");d(l,"users/generate-qrcode",t,e)},200),checkQrcode:i(function(t,e){let l=o("/user/check-qrcode");d(l,"users/check-qrcode",t,e)}),loginQrcode:i(function(t,e){let l=o("/user/login-qrcode");d(l,"users/login-qrcode",t,e)}),register:i(function(t,e){let l=o("/user/register");d(l,"users/register",t,e)},500),resendCode:i(function(t,e){let l=o("/user/resend-code");d(l,"users/resend-code",t,e)}),verifyCode:i(function(t,e){let l=o("/user/verify-code");d(l,"users/verify-code",t,e)}),forgotPassword:i(function(t,e){let l=o("/user/forgot-password");d(l,"users/forgot-password",t,e)}),setNewPassword:i(function(t,e){let l=o("/user/set-new-password");d(l,"users/set-new-password",t,e)}),profile:i(function(t,e){let l=o("/user/profile");d(l,"users/profile",t,e)}),updateProfile:i(function(t,e){let l=o("/user/update-profile");d(l,"users/update-profile",t,e)}),changePassword:i(function(t,e){let l=o("/user/change-password");d(l,"users/change-password",t,e)}),logout:i(function(t){let e=o("/user/logout");d(e,"users/logout",{},t)})}))("https://account.demo.pitoall.com"),m=(s=>({create:i(function(t,e){let l=o("/groups/create",s);d(l,"groups/create",t,e)},100),update:i(function(t,e,l){let r=o("/groups/update",s);d(r,"groups/update",{id:t,content:e},l)},100),taxCode:i(function(t,e){let l=o("https://api.vietqr.io/v2/business/"+t);p(l,r=>{r&&r.code=="00"?u(e,{result:!0,code:200,data:r.data}):u(e,{result:!1,code:400,message:""})})}),banks:i(function(t){let e=o("https://api.vietqr.io/v2/banks");p(e,l=>{l&&l.code=="00"?u(t,{result:!0,code:200,data:{data:l.data,total:l.data.length}}):u(t,{result:!1,code:400,message:""})})}),list:i(function(t,e){let l=o("/groups/list",s),r="groups/list",n=v(t);d(l,r,n,e)},500)}))("https://groups.demo.pitoall.com"),w=(s=>({address_update:function(t,e){let l=o("/address/update",s);d(l,"address/update",t,e)},address_list:i(function(t,e){let l=o("/address/list",s),r="address/list",n=v(t);d(l,r,n,e)},500),geo_address:i(function(t,e){let l=o("/address/geo_autocomplete",s);d(l,"address/geo_autocomplete",t,e)}),geo_detail:i(function(t,e){let l=o("/address/geo_detail",s);d(l,"address/geo_detail",t,e)})}))("https://groups.demo.pitoall.com");return{account:h,business:m,cates:w}}});})();

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
