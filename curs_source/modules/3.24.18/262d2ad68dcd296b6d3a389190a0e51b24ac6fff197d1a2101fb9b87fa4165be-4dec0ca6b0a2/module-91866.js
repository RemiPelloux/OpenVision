"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NoopTracer = void 0;
const n = require("./module-3917.js"), o = require("./module-83276.js"), s = require("./module-98865.js"), i = require("./module-38420.js"), a = n.ContextAPI.getInstance();
exports.NoopTracer = class {
    startSpan(e, t, r = a.active()) {
        if (Boolean(null == t ? void 0 : t.root)) return new s.NonRecordingSpan;
        const n = r && (0, o.getSpanContext)(r);
        return "object" == typeof (l = n) && "string" == typeof l.spanId && "string" == typeof l.traceId && "number" == typeof l.traceFlags && (0, i.isSpanContextValid)(n) ? new s.NonRecordingSpan(n) : new s.NonRecordingSpan;
        var l;
    }
    startActiveSpan(e, t, r, n) {
        let s, i, l;
        if (arguments.length < 2) return;
        2 === arguments.length ? l = t : 3 === arguments.length ? (s = t, l = r) : (s = t, i = r, l = n);
        const c = null != i ? i : a.active(), u = this.startSpan(e, s, c), d = (0, o.setSpan)(c, u);
        return a.with(d, l, void 0, u);
    }
};
