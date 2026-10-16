import { I$, mWr } from "./De_3.js";
import { QKs } from "./core.ts";
import { XKs } from "./index_195.js";
import { x } from "./tslib.es6.js";
var H0e, rSt, PNu, LNu, D8i, M8i, NNu, iYs;
export { D8i, H0e, LNu, M8i, NNu, PNu, iYs, rSt };
var __wakaru_ONu_initialized = false;
export function ONu() {
if (__wakaru_ONu_initialized) return;
__wakaru_ONu_initialized = true;
"use strict";
x(), H0e = mWr(XKs(), 1), QKs(), rSt = I$(Symbol("otel.span"), void 0), PNu = I$(Symbol("otel.root_span"), void 0), LNu = I$(Symbol("otel.root_start_ms"), void 0), D8i = I$(Symbol("otel.suppress_child_spans"), !1), M8i = I$(Symbol("otel.inheritable_span_attributes"), {}), NNu = Symbol.for("anysphere.context.activeOtelSpanAls"), iYs = class {
    constructor(e, t, n = !0){
        this.ctx = e, this.span = t, this.shouldEnd = n;
    }
    [Symbol.dispose]() {
        this.shouldEnd && this.span.end();
    }
};

}
