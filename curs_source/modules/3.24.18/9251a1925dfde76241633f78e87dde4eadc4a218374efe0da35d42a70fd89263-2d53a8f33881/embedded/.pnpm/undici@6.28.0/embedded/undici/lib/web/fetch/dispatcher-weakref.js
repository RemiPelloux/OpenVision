import { require_symbols6 } from "../../core/symbols.js";
var __wakaru_require_dispatcher_weakref2_cache;
export function require_dispatcher_weakref2() {
if (__wakaru_require_dispatcher_weakref2_cache) return __wakaru_require_dispatcher_weakref2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_dispatcher_weakref2_cache = module2;
"use strict";
var { kConnected, kSize } = require_symbols6();
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
    unregister(key) {}
};
module2.exports = function() {
    if (process.env.NODE_V8_COVERAGE && process.version.startsWith("v18")) {
        process._rawDebug("Using compatibility WeakRef and FinalizationRegistry");
        return {
            WeakRef: CompatWeakRef,
            FinalizationRegistry: CompatFinalizer
        };
    }
    return {
        WeakRef,
        FinalizationRegistry
    };
};

return module2.exports;
}
