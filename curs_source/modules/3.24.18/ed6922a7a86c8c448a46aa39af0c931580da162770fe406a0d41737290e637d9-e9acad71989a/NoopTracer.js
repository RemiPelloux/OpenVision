import { KKs } from "./NonRecordingSpan.js";
import { fNu } from "./context-utils.js";
import { I8i } from "./context_2.js";
import { YKs } from "./spancontext-utils.js";
import { x } from "./tslib.es6.js";
var __wakaru_vNu_cache;
export function vNu() {
if (__wakaru_vNu_cache) return __wakaru_vNu_cache;
var e = {};
__wakaru_vNu_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.NoopTracer = void 0;
var t = I8i(), n = fNu(), i = KKs(), r = YKs(), s = t.ContextAPI.getInstance(), o = class {
    startSpan(c, l, u = s.active()) {
        if (!!l?.root) return new i.NonRecordingSpan;
        const p = u && (0, n.getSpanContext)(u);
        return a(p) && (0, r.isSpanContextValid)(p) ? new i.NonRecordingSpan(p) : new i.NonRecordingSpan;
    }
    startActiveSpan(c, l, u, h) {
        let p, g, f;
        if (arguments.length < 2) return;
        arguments.length === 2 ? f = l : arguments.length === 3 ? (p = l, f = u) : (p = l, g = u, f = h);
        const v = g ?? s.active(), b = this.startSpan(c, p, v), y = (0, n.setSpan)(v, b);
        return s.with(y, f, void 0, b);
    }
};
e.NoopTracer = o;
function a(c) {
    return typeof c == "object" && typeof c.spanId == "string" && typeof c.traceId == "string" && typeof c.traceFlags == "number";
}

return e;
}
