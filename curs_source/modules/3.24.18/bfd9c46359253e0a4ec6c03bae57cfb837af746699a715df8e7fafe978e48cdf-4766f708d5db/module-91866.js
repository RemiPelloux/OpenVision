"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NoopTracer = void 0;
const n = require("./module-3917.js"), s = require("./module-83276.js"), o = require("./module-98865.js"), i = require("./module-38420.js"), a = n.ContextAPI.getInstance();
exports.NoopTracer = class {
    startSpan(e, t, r = a.active()) {
        if (Boolean(null == t ? void 0 : t.root)) return new o.NonRecordingSpan;
        const n = r && (0, s.getSpanContext)(r);
        return "object" == typeof (c = n) && "string" == typeof c.spanId && "string" == typeof c.traceId && "number" == typeof c.traceFlags && (0, i.isSpanContextValid)(n) ? new o.NonRecordingSpan(n) : new o.NonRecordingSpan;
        var c;
    }
    startActiveSpan(e, t, r, n) {
        let o, i, c;
        if (arguments.length < 2) return;
        2 === arguments.length ? c = t : 3 === arguments.length ? (o = t, c = r) : (o = t, i = r, c = n);
        const l = null != i ? i : a.active(), u = this.startSpan(e, o, l), d = (0, s.setSpan)(l, u);
        return a.with(d, c, void 0, u);
    }
};
