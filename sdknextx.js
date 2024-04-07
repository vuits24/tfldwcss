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
