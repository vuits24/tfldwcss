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
