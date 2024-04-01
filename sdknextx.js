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
