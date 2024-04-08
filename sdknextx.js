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
