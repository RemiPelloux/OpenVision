"use strict";
const t = require("./module-4814.js"), s = require("./module-1124.js"), o = require("./module-7902.js"), r = require("./module-4003.js"), i = require("./module-4072.js"), A = require("./module-568.js"), l = require("./module-9361.js"), { InvalidArgumentError: c } = o, m = require("./module-3230.js"), d = require("./module-3991.js"), g = require("./module-4826.js"), u = require("./module-2908.js"), E = require("./module-5543.js"), p = require("./module-1862.js"), T = require("./module-8841.js"), k = require("./module-2534.js"), { getGlobalDispatcher: I, setGlobalDispatcher: h } = require("./module-7362.js"), _ = require("./module-1783.js"), C = require("./module-1942.js"), f = require("./module-858.js");
let B;
try {
    require("./module-6982.js"), B = !0;
} catch  {
    B = !1;
}
function Q(e) {
    return (n, a, t)=>{
        if ("function" == typeof a && (t = a, a = null), !n || "string" != typeof n && "object" != typeof n && !(n instanceof URL)) throw new c("invalid url");
        if (null != a && "object" != typeof a) throw new c("invalid opts");
        if (a && null != a.path) {
            if ("string" != typeof a.path) throw new c("invalid opts.path");
            let e = a.path;
            a.path.startsWith("/") || (e = `/${e}`), n = new URL(l.parseOrigin(n).origin + e);
        } else a || (a = "object" == typeof n ? n : {}), n = l.parseURL(n);
        const { agent: s, dispatcher: o = I() } = a;
        if (s) throw new c("unsupported opts.agent. Did you mean opts.client?");
        return e.call(o, {
            ...a,
            origin: n.origin,
            path: n.search ? `${n.pathname}${n.search}` : n.pathname,
            method: a.method || (a.body ? "PUT" : "GET")
        }, t);
    };
}
if (Object.assign(s.prototype, m), l.nodeMajor > 16 || 16 === l.nodeMajor && l.nodeMinor >= 8) {
    let n = null;
    module.exports.Headers = require("./module-2932.js").Headers, require("./module-1099.js").Response, require("./module-2239.js").Request, require("./module-1606.js").FormData, require("./module-3322.js").File, require("./module-5747.js").FileReader;
    const { setGlobalOrigin: t, getGlobalOrigin: s } = require("./module-9523.js");
    0;
    const { CacheStorage: o } = require("./module-6989.js"), { kConstruct: r } = require("./module-2381.js");
    new o(r);
}
if (l.nodeMajor >= 16) {
    const { deleteCookie: e, getCookies: n, getSetCookies: t, setCookie: s } = require("./module-4981.js");
    0;
    const { parseMIMEType: o, serializeAMimeType: r } = require("./module-3631.js");
    0;
}
if (l.nodeMajor >= 18 && B) {
    const { WebSocket: e } = require("./module-8430.js");
    0;
}
Q(m.request), Q(m.stream), Q(m.pipeline), Q(m.connect), Q(m.upgrade);
