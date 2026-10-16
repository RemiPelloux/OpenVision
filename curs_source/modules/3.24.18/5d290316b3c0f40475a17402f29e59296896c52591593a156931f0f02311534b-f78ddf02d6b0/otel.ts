import { Cp } from "./core.ts";
import { Gr } from "./logger_2.ts";
import { h } from "./tslib.es6.js";
var Pi, vc, yc, jp, Sc, Vb, Vp;
export { Pi, Sc, Vb, Vp, jp, vc, yc };
var __wakaru_Yb_initialized = false;
export function Yb() {
if (__wakaru_Yb_initialized) return;
__wakaru_Yb_initialized = true;
"use strict";
h(), Cp(), Pi = Gr(Symbol("otel.span"), void 0), vc = Gr(Symbol("otel.root_span"), void 0), yc = Gr(Symbol("otel.root_start_ms"), void 0), jp = Gr(Symbol("otel.suppress_child_spans"), !1), Sc = Gr(Symbol("otel.inheritable_span_attributes"), {}), Vb = Symbol.for("anysphere.context.activeOtelSpanAls"), Vp = class {
    constructor(e, t, r = !0){
        this.ctx = e, this.span = t, this.shouldEnd = r;
    }
    [Symbol.dispose]() {
        this.shouldEnd && this.span.end();
    }
};

}
