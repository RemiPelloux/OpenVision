"use strict";
require.d(exports, {
    B8: ()=>u,
    OD: ()=>a,
    bz: ()=>c
});
require("./module-6038.js");
var n = require("./module-328.js"), s = require("./module-8032.js"), i = require("./module-9983.js"), o = require("./module-3621.js");
function a(t) {
    var e;
    let r;
    if (void 0 !== t.timeoutMs) {
        const e = new Date(Date.now() + t.timeoutMs);
        r = ()=>e.getTime() - Date.now();
    } else r = ()=>{};
    const n = (0, i.p2)(t.timeoutMs), s = (0, i.Ch)(n.signal, t.requestSignal, t.shutdownSignal);
    return Object.assign(Object.assign({}, t), {
        signal: s.signal,
        timeoutMs: r,
        requestHeader: new Headers(t.requestHeader),
        responseHeader: new Headers(t.responseHeader),
        responseTrailer: new Headers(t.responseTrailer),
        abort (t) {
            n.cleanup(), s.abort(t);
        },
        values: null !== (e = t.contextValues) && void 0 !== e ? e : (0, o.k)()
    });
}
function u(t, e, r) {
    return {
        kind: e.kind,
        service: t,
        method: e,
        impl: r
    };
}
function c(t, e) {
    const r = {
        service: t,
        methods: {}
    };
    for (const [i, o] of Object.entries(t.methods)){
        let a = e[i];
        if ("function" == typeof a) a = a.bind(e);
        else {
            const e = `${t.typeName}.${o.name} is not implemented`;
            a = function() {
                throw new n.T(e, s.C.Unimplemented);
            };
        }
        r.methods[i] = u(t, o, a);
    }
    return r;
}
