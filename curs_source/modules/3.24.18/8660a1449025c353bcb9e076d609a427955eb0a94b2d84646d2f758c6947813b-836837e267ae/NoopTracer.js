import { y5a } from "./NonRecordingSpan.js";
import { j6p } from "./context-utils.js";
import { Qqr } from "./context_2.js";
import { S5a } from "./spancontext-utils.js";
import { E } from "./tslib.es6.js";
var __wakaru_$6p_cache;
export function $6p() {
if (__wakaru_$6p_cache) return __wakaru_$6p_cache;
var t = {};
__wakaru_$6p_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.NoopTracer = void 0;
var e = Qqr(), n = j6p(), i = y5a(), r = S5a(), s = e.ContextAPI.getInstance(), o = class {
    startSpan(l, c, u = s.active()) {
        if (!!c?.root) return new i.NonRecordingSpan;
        const h = u && (0, n.getSpanContext)(u);
        return a(h) && (0, r.isSpanContextValid)(h) ? new i.NonRecordingSpan(h) : new i.NonRecordingSpan;
    }
    startActiveSpan(l, c, u, d) {
        let h, p, g;
        if (arguments.length < 2) return;
        arguments.length === 2 ? g = c : arguments.length === 3 ? (h = c, g = u) : (h = c, p = u, g = d);
        const f = p ?? s.active(), _ = this.startSpan(l, h, f), b = (0, n.setSpan)(f, _);
        return s.with(b, g, void 0, _);
    }
};
t.NoopTracer = o;
function a(l) {
    return typeof l == "object" && typeof l.spanId == "string" && typeof l.traceId == "string" && typeof l.traceFlags == "number";
}

return t;
}
