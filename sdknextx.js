let wasm_bindgen;
(()=>{window.Tjs_CSS_DF=["::before, ::after { box-sizing: border-box;  border-width: 0; border-style: solid; border-color: var(--un-default-border-color, #e5e7eb);}",'::before, ::after {  --un-content: ""; }','html, :host { line-height: 1.5; -webkit-text-size-adjust: 100%; -moz-tab-size: 4;tab-size: 4;font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent;}',"body { margin: 0;line-height: inherit;}","hr { height: 0; color: inherit; border-top-width: 1px;}","abbr:where([title]) { text-decoration: underline dotted; }","h1, h2, h3, h4, h5, h6 {font-size: inherit; font-weight: inherit; }","a {color: inherit; text-decoration: inherit; }","b, strong {font-weight: bolder; }",'code, kbd, samp, pre {font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings: normal;font-variation-settings: normal;font-size: 1em;}',"small {font-size: 80%; }","sub, sup {font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }","sub {bottom: -0.25em;}","sup {top: -0.5em;}","table { text-indent: 0; border-color: inherit; border-collapse: collapse;}","button, input, optgroup, select, textarea {font-family: inherit;font-feature-settings: inherit;font-variation-settings: inherit;font-size: 100%;font-weight: inherit;line-height: inherit;color: inherit;margin: 0;padding: 0;}","button, select { text-transform: none;}",'button, [type="button"], [type="reset"], [type="submit"] {-webkit-appearance: button;background-color: transparent;background-image: none;}',":-moz-focusring {outline: auto;}",":-moz-ui-invalid { box-shadow: none;}","progress {vertical-align: baseline;}","::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto;}",'[type="search"] { -webkit-appearance: textfield; outline-offset: -2px;}',"::-webkit-search-decoration {-webkit-appearance: none;}","::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}","summary {display: list-item;}","blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {margin: 0;}","fieldset {margin: 0;padding: 0;}","legend {padding: 0;}","ol, ul, menu {list-style: none;margin: 0;padding: 0;}","dialog {padding: 0;}","textarea {resize: vertical;}","input::placeholder, textarea::placeholder {opacity: 1;color: #9ca3af;}",'button, [role="button"] {cursor: pointer;}',":disabled {cursor: default;}","img, svg, video, canvas, audio, iframe, embed, object {display: block;vertical-align: middle;}","img, video {max-width: 100%;height: auto;}","[hidden] {display: none;}"];})();
(async o=>{const e=atob(o),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);const r=await new Response(n).body.pipeThrough(new DecompressionStream("gzip"));return await new Response(r).text()})("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").then(eval);
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
