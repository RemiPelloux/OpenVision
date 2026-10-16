"use strict";
require.d(exports, {
    A: ()=>c,
    K: ()=>a
});
var n = require("./module-98875.js"), s = require("./module-13920.js"), o = require("./module-91398.js"), i = require("./module-77273.js");
function a(e) {
    const t = (0, n.mJ)(e), r = e.get(s.zN);
    return {
        spanContext: t ? {
            traceId: t.traceId,
            spanId: t.spanId,
            traceFlags: t.traceFlags
        } : void 0,
        name: e.name,
        conversationId: (0, i.L)(e, r?.conversationId),
        composerId: (0, i.o)(e, r?.composerId)
    };
}
function c(e) {
    const t = a(e), r = new o.CancellationTokenSource, n = ()=>{
        r.cancel();
    };
    return e.signal.aborted ? r.cancel() : e.signal.addEventListener("abort", n), {
        serializableContext: t,
        cancellationTokenSource: r,
        dispose: ()=>{
            e.signal.removeEventListener("abort", n), r.dispose();
        }
    };
}
