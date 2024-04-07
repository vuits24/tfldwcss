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
