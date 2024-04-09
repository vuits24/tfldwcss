let wasm_bindgen;
(()=>{window.Tjs_CSS_DF=["::before, ::after { box-sizing: border-box;  border-width: 0; border-style: solid; border-color: var(--un-default-border-color, #e5e7eb);}",'::before, ::after {  --un-content: ""; }','html, :host { line-height: 1.5; -webkit-text-size-adjust: 100%; -moz-tab-size: 4;tab-size: 4;font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent;}',"body { margin: 0;line-height: inherit;}","hr { height: 0; color: inherit; border-top-width: 1px;}","abbr:where([title]) { text-decoration: underline dotted; }","h1, h2, h3, h4, h5, h6 {font-size: inherit; font-weight: inherit; }","a {color: inherit; text-decoration: inherit; }","b, strong {font-weight: bolder; }",'code, kbd, samp, pre {font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings: normal;font-variation-settings: normal;font-size: 1em;}',"small {font-size: 80%; }","sub, sup {font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }","sub {bottom: -0.25em;}","sup {top: -0.5em;}","table { text-indent: 0; border-color: inherit; border-collapse: collapse;}","button, input, optgroup, select, textarea {font-family: inherit;font-feature-settings: inherit;font-variation-settings: inherit;font-size: 100%;font-weight: inherit;line-height: inherit;color: inherit;margin: 0;padding: 0;}","button, select { text-transform: none;}",'button, [type="button"], [type="reset"], [type="submit"] {-webkit-appearance: button;background-color: transparent;background-image: none;}',":-moz-focusring {outline: auto;}",":-moz-ui-invalid { box-shadow: none;}","progress {vertical-align: baseline;}","::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto;}",'[type="search"] { -webkit-appearance: textfield; outline-offset: -2px;}',"::-webkit-search-decoration {-webkit-appearance: none;}","::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}","summary {display: list-item;}","blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {margin: 0;}","fieldset {margin: 0;padding: 0;}","legend {padding: 0;}","ol, ul, menu {list-style: none;margin: 0;padding: 0;}","dialog {padding: 0;}","textarea {resize: vertical;}","input::placeholder, textarea::placeholder {opacity: 1;color: #9ca3af;}",'button, [role="button"] {cursor: pointer;}',":disabled {cursor: default;}","img, svg, video, canvas, audio, iframe, embed, object {display: block;vertical-align: middle;}","img, video {max-width: 100%;height: auto;}","[hidden] {display: none;}",".tjsui-window { position: fixed;background-color: white;border: 1px solid black;border-radius: 0.5rem;overflow: hidden; }",".tjsui-window-dragarea { cursor: move;position: absolute;left: 0;top: 0;width: 100%;height: 1rem; }",".tjsui-window-resize-right { cursor: e-resize;position: absolute;right: 0;top: 0;width: 10px;height: 100%;background-color: transparent; }",".tjsui-window-resize-bottom { cursor: s-resize;position: absolute;left: 0;bottom: 0;width: 100%;height: 10px;background-color: transparent; }",".tjsui-window-resize-rightbottom { cursor: se-resize;position: absolute;right: 0;bottom: 0;width: 10px;height: 10px;background-color: transparent; }",".tjsui-window-header { cursor: move;user-select: none;display: flex;justify-content: space-between;align-items: center;padding: 0.5rem; }",".tjsui-window-cross { cursor: pointer;font-family: Arial;transition: background-color 0.3s, color 0.3s;border-radius: 50%;width: 24px;height: 24px;display: flex;align-items: center;justify-content: center; }",".tjsui-window-cross:hover { background-color: red;color: white; }",".tjsui-window-children { padding: 0.5rem; }"];})();
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
