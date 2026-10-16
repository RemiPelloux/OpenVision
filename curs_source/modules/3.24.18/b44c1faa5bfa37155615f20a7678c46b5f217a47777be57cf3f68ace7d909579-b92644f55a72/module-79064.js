"use strict";
require.d(exports, {
    B8: ()=>c,
    OD: ()=>a,
    bz: ()=>l
});
require("./module-36038.js");
var n = require("./module-92801.js"), s = require("./module-84959.js"), o = require("./module-84672.js"), i = require("./module-84934.js");
function a(e) {
    var t;
    let r;
    if (void 0 !== e.timeoutMs) {
        const t = new Date(Date.now() + e.timeoutMs);
        r = ()=>t.getTime() - Date.now();
    } else r = ()=>{};
    const n = (0, o.p2)(e.timeoutMs), s = (0, o.Ch)(n.signal, e.requestSignal, e.shutdownSignal);
    return Object.assign(Object.assign({}, e), {
        signal: s.signal,
        timeoutMs: r,
        requestHeader: new Headers(e.requestHeader),
        responseHeader: new Headers(e.responseHeader),
        responseTrailer: new Headers(e.responseTrailer),
        abort (e) {
            n.cleanup(), s.abort(e);
        },
        values: null !== (t = e.contextValues) && void 0 !== t ? t : (0, i.k)()
    });
}
function c(e, t, r) {
    return {
        kind: t.kind,
        service: e,
        method: t,
        impl: r
    };
}
function l(e, t) {
    const r = {
        service: e,
        methods: {}
    };
    for (const [o, i] of Object.entries(e.methods)){
        let a = t[o];
        if ("function" == typeof a) a = a.bind(t);
        else {
            const t = `${e.typeName}.${i.name} is not implemented`;
            a = function() {
                throw new n.T(t, s.C.Unimplemented);
            };
        }
        r.methods[o] = c(e, i, a);
    }
    return r;
}
