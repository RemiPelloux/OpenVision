import { require_symbols } from "../core/symbols.js";
var __wakaru_require_dispatcher_weakref_cache;
export function require_dispatcher_weakref() {
if (__wakaru_require_dispatcher_weakref_cache) return __wakaru_require_dispatcher_weakref_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_dispatcher_weakref_cache = module2;
"use strict";
var { kConnected, kSize } = require_symbols();
var CompatWeakRef = class {
    constructor(value){
        this.value = value;
    }
    deref() {
        return this.value[kConnected] === 0 && this.value[kSize] === 0 ? void 0 : this.value;
    }
};
var CompatFinalizer = class {
    constructor(finalizer){
        this.finalizer = finalizer;
    }
    register(dispatcher, key) {
        if (dispatcher.on) {
            dispatcher.on("disconnect", ()=>{
                if (dispatcher[kConnected] === 0 && dispatcher[kSize] === 0) {
                    this.finalizer(key);
                }
            });
        }
    }
};
module2.exports = function() {
    if (process.env.NODE_V8_COVERAGE) {
        return {
            WeakRef: CompatWeakRef,
            FinalizationRegistry: CompatFinalizer
        };
    }
    return {
        WeakRef: global.WeakRef || CompatWeakRef,
        FinalizationRegistry: global.FinalizationRegistry || CompatFinalizer
    };
};

return module2.exports;
}
