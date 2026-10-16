"use strict";
const r = require("./module-54814.js"), s = require("./module-91124.js"), o = require("./module-95521.js"), n = require("./module-34003.js"), i = require("./module-4072.js"), E = require("./module-60568.js"), Q = require("./module-9361.js"), { InvalidArgumentError: g } = o, C = require("./module-43230.js"), B = require("./module-3991.js"), a = require("./module-74826.js"), I = require("./module-52908.js"), c = require("./module-65543.js"), h = require("./module-61862.js"), l = require("./module-8841.js"), u = require("./module-12534.js"), { getGlobalDispatcher: d, setGlobalDispatcher: f } = require("./module-37362.js"), y = require("./module-31783.js"), D = require("./module-41942.js"), R = require("./module-80858.js");
let w;
try {
    require(76982), w = !0;
} catch  {
    w = !1;
}
function p(A) {
    return (e, t, r)=>{
        if ("function" == typeof t && (r = t, t = null), !e || "string" != typeof e && "object" != typeof e && !(e instanceof URL)) throw new g("invalid url");
        if (null != t && "object" != typeof t) throw new g("invalid opts");
        if (t && null != t.path) {
            if ("string" != typeof t.path) throw new g("invalid opts.path");
            let A = t.path;
            t.path.startsWith("/") || (A = `/${A}`), e = new URL(Q.parseOrigin(e).origin + A);
        } else t || (t = "object" == typeof e ? e : {}), e = Q.parseURL(e);
        const { agent: s, dispatcher: o = d() } = t;
        if (s) throw new g("unsupported opts.agent. Did you mean opts.client?");
        return A.call(o, {
            ...t,
            origin: e.origin,
            path: e.search ? `${e.pathname}${e.search}` : e.pathname,
            method: t.method || (t.body ? "PUT" : "GET")
        }, r);
    };
}
if (Object.assign(s.prototype, C), Q.nodeMajor > 16 || 16 === Q.nodeMajor && Q.nodeMinor >= 8) {
    let e = null;
    module.exports.Headers = require("./module-2932.js").Headers, require("./module-61099.js").Response, require("./module-52239.js").Request, require("./module-81606.js").FormData, require("./module-13322.js").File, require("./module-75747.js").FileReader;
    const { setGlobalOrigin: r, getGlobalOrigin: s } = require("./module-69523.js");
    0;
    const { CacheStorage: o } = require("./module-46989.js"), { kConstruct: n } = require("./module-62381.js");
    new o(n);
}
if (Q.nodeMajor >= 16) {
    const { deleteCookie: A, getCookies: e, getSetCookies: r, setCookie: s } = require("./module-4981.js");
    0;
    const { parseMIMEType: o, serializeAMimeType: n } = require("./module-3631.js");
    0;
}
if (Q.nodeMajor >= 18 && w) {
    const { WebSocket: A } = require("./module-78430.js");
    0;
}
p(C.request), p(C.stream), p(C.pipeline), p(C.connect), p(C.upgrade);
