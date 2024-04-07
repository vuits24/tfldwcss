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
