"use strict";
require.d(exports, {
    JC: ()=>d,
    SW: ()=>u,
    sO: ()=>l
});
var n = require("./module-36038.js"), s = require("./module-26380.js"), o = require("./module-26306.js"), i = require("./module-78503.js"), a = require("./module-92801.js"), c = require("./module-84959.js");
function l(e) {
    var t, r, n;
    null != e || (e = {});
    const s = e.acceptCompression ? [
        ...e.acceptCompression
    ] : [], o = null !== (t = e.requireConnectProtocolHeader) && void 0 !== t && t, a = null !== (r = e.maxTimeoutMs) && void 0 !== r ? r : Number.MAX_SAFE_INTEGER;
    return Object.assign(Object.assign({
        acceptCompression: s
    }, (0, i.NL)(e.readMaxBytes, e.writeMaxBytes, e.compressMinBytes)), {
        jsonOptions: e.jsonOptions,
        binaryOptions: e.binaryOptions,
        maxTimeoutMs: a,
        shutdownSignal: e.shutdownSignal,
        requireConnectProtocolHeader: o,
        interceptors: null !== (n = e.interceptors) && void 0 !== n ? n : []
    });
}
function u(e, t) {
    return Object.entries(e.methods).map(([, e])=>d(e, t));
}
function d(e, t) {
    return function(e) {
        if (0 == e.length) throw new a.T("at least one protocol is required", c.C.Internal);
        const t = e[0].service, r = e[0].method, i = e[0].requestPath;
        if (e.some((e)=>e.service !== t || e.method !== r)) throw new a.T("cannot negotiate protocol for different RPCs", c.C.Internal);
        if (e.some((e)=>e.requestPath !== i)) throw new a.T("cannot negotiate protocol for different requestPaths", c.C.Internal);
        async function l(t) {
            var o;
            if (r.kind == n.MethodKind.BiDiStreaming && t.httpVersion.startsWith("1.")) return Object.assign(Object.assign({}, s.kF), {
                header: new Headers({
                    Connection: "close"
                })
            });
            const i = null !== (o = t.header.get("Content-Type")) && void 0 !== o ? o : "", a = e.filter((e)=>e.allowedMethods.includes(t.method));
            if (0 == a.length) return s.nZ;
            if (1 == a.length && "" === i) {
                return (0, a[0])(t);
            }
            const c = a.filter((e)=>e.supportedContentType(i));
            if (0 == c.length) return s._L;
            return (0, c[0])(t);
        }
        return Object.assign(l, {
            service: t,
            method: r,
            requestPath: i,
            supportedContentType: (0, o.Y)(...e.map((e)=>e.supportedContentType)),
            protocolNames: e.flatMap((e)=>e.protocolNames).filter((e, t, r)=>r.indexOf(e) === t),
            allowedMethods: e.flatMap((e)=>e.allowedMethods).filter((e, t, r)=>r.indexOf(e) === t)
        });
    }(t.map((t)=>t(e)));
}
