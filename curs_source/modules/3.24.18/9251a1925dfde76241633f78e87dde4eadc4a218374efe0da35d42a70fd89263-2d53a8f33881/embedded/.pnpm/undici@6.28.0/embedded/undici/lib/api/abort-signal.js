import { require_errors2 } from "../core/errors.js";
import { require_util8 } from "../core/util.js";
var __wakaru_require_abort_signal2_cache;
export function require_abort_signal2() {
if (__wakaru_require_abort_signal2_cache) return __wakaru_require_abort_signal2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_abort_signal2_cache = module2;
var { addAbortListener } = require_util8();
var { RequestAbortedError } = require_errors2();
var kListener = Symbol("kListener");
var kSignal = Symbol("kSignal");
function abort(self2) {
    if (self2.abort) {
        self2.abort(self2[kSignal]?.reason);
    } else {
        self2.reason = self2[kSignal]?.reason ?? new RequestAbortedError();
    }
    removeSignal(self2);
}
function addSignal(self2, signal) {
    self2.reason = null;
    self2[kSignal] = null;
    self2[kListener] = null;
    if (!signal) {
        return;
    }
    if (signal.aborted) {
        abort(self2);
        return;
    }
    self2[kSignal] = signal;
    self2[kListener] = ()=>{
        abort(self2);
    };
    addAbortListener(self2[kSignal], self2[kListener]);
}
function removeSignal(self2) {
    if (!self2[kSignal]) {
        return;
    }
    if ("removeEventListener" in self2[kSignal]) {
        self2[kSignal].removeEventListener("abort", self2[kListener]);
    } else {
        self2[kSignal].removeListener("abort", self2[kListener]);
    }
    self2[kSignal] = null;
    self2[kListener] = null;
}
module2.exports = {
    addSignal,
    removeSignal
};

return module2.exports;
}
