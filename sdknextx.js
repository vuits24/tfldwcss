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
