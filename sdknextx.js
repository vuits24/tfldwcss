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
