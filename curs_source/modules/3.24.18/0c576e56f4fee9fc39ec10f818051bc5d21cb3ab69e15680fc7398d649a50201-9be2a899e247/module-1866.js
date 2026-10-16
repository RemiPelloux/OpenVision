"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NoopTracer = void 0;
const n = require("./module-3917.js"), o = require("./module-3276.js"), s = require("./module-8865.js"), i = require("./module-8420.js"), a = n.ContextAPI.getInstance();
exports.NoopTracer = class {
    startSpan(e, t, r = a.active()) {
        if (Boolean(null == t ? void 0 : t.root)) return new s.NonRecordingSpan;
        const n = r && (0, o.getSpanContext)(r);
        return "object" == typeof (c = n) && "string" == typeof c.spanId && "string" == typeof c.traceId && "number" == typeof c.traceFlags && (0, i.isSpanContextValid)(n) ? new s.NonRecordingSpan(n) : new s.NonRecordingSpan;
        var c;
    }
    startActiveSpan(e, t, r, n) {
        let s, i, c;
        if (arguments.length < 2) return;
        2 === arguments.length ? c = t : 3 === arguments.length ? (s = t, c = r) : (s = t, i = r, c = n);
        const u = null != i ? i : a.active(), l = this.startSpan(e, s, u), d = (0, o.setSpan)(u, l);
        return a.with(d, c, void 0, l);
    }
};
