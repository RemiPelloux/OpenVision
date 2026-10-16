"use strict";
require.d(exports, {
    JC: ()=>m,
    SW: ()=>l,
    sO: ()=>c
});
var n = require("./module-6038.js"), s = require("./module-2083.js"), i = require("./module-6367.js"), o = require("./module-278.js"), a = require("./module-328.js"), u = require("./module-8032.js");
function c(t) {
    var e, r, n;
    null != t || (t = {});
    const s = t.acceptCompression ? [
        ...t.acceptCompression
    ] : [], i = null !== (e = t.requireConnectProtocolHeader) && void 0 !== e && e, a = null !== (r = t.maxTimeoutMs) && void 0 !== r ? r : Number.MAX_SAFE_INTEGER;
    return Object.assign(Object.assign({
        acceptCompression: s
    }, (0, o.NL)(t.readMaxBytes, t.writeMaxBytes, t.compressMinBytes)), {
        jsonOptions: t.jsonOptions,
        binaryOptions: t.binaryOptions,
        maxTimeoutMs: a,
        shutdownSignal: t.shutdownSignal,
        requireConnectProtocolHeader: i,
        interceptors: null !== (n = t.interceptors) && void 0 !== n ? n : []
    });
}
function l(t, e) {
    return Object.entries(t.methods).map(([, t])=>m(t, e));
}
function m(t, e) {
    return function(t) {
        if (0 == t.length) throw new a.T("at least one protocol is required", u.C.Internal);
        const e = t[0].service, r = t[0].method, o = t[0].requestPath;
        if (t.some((t)=>t.service !== e || t.method !== r)) throw new a.T("cannot negotiate protocol for different RPCs", u.C.Internal);
        if (t.some((t)=>t.requestPath !== o)) throw new a.T("cannot negotiate protocol for different requestPaths", u.C.Internal);
        async function c(e) {
            var i;
            if (r.kind == n.MethodKind.BiDiStreaming && e.httpVersion.startsWith("1.")) return Object.assign(Object.assign({}, s.kF), {
                header: new Headers({
                    Connection: "close"
                })
            });
            const o = null !== (i = e.header.get("Content-Type")) && void 0 !== i ? i : "", a = t.filter((t)=>t.allowedMethods.includes(e.method));
            if (0 == a.length) return s.nZ;
            if (1 == a.length && "" === o) {
                return (0, a[0])(e);
            }
            const u = a.filter((t)=>t.supportedContentType(o));
            if (0 == u.length) return s._L;
            return (0, u[0])(e);
        }
        return Object.assign(c, {
            service: e,
            method: r,
            requestPath: o,
            supportedContentType: (0, i.Y)(...t.map((t)=>t.supportedContentType)),
            protocolNames: t.flatMap((t)=>t.protocolNames).filter((t, e, r)=>r.indexOf(t) === e),
            allowedMethods: t.flatMap((t)=>t.allowedMethods).filter((t, e, r)=>r.indexOf(t) === e)
        });
    }(e.map((e)=>e(t)));
}
