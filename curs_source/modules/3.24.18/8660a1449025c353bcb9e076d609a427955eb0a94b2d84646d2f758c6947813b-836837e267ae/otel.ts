import { C5a } from "./core.ts";
import { k5a } from "./index_201.js";
import { cX, e1o } from "./ipa.js";
import { E } from "./tslib.es6.js";
var L6e, yWt, i4p, r4p, tzr, nzr, s4p, A5a;
export { A5a, L6e, i4p, nzr, r4p, s4p, tzr, yWt };
var __wakaru_o4p_initialized = false;
export function o4p() {
if (__wakaru_o4p_initialized) return;
__wakaru_o4p_initialized = true;
"use strict";
E(), L6e = e1o(k5a(), 1), C5a(), yWt = cX(Symbol("otel.span"), void 0), i4p = cX(Symbol("otel.root_span"), void 0), r4p = cX(Symbol("otel.root_start_ms"), void 0), tzr = cX(Symbol("otel.suppress_child_spans"), !1), nzr = cX(Symbol("otel.inheritable_span_attributes"), {}), s4p = Symbol.for("anysphere.context.activeOtelSpanAls"), A5a = class {
    constructor(t, e, n = !0){
        this.ctx = t, this.span = e, this.shouldEnd = n;
    }
    [Symbol.dispose]() {
        this.shouldEnd && this.span.end();
    }
};

}
