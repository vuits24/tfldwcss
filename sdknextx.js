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
