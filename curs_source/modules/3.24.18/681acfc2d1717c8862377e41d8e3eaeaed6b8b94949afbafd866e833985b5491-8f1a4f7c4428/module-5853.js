"use strict";
const n = require("./module-4814.js"), r = require("./module-1124.js"), o = require("./module-7902.js"), s = require("./module-4003.js"), i = require("./module-4072.js"), a = require("./module-568.js"), c = require("./module-9361.js"), { InvalidArgumentError: l } = o, u = require("./module-3230.js"), g = require("./module-3991.js"), E = require("./module-4826.js"), h = require("./module-2908.js"), d = require("./module-5543.js"), I = require("./module-1862.js"), B = require("./module-8841.js"), Q = require("./module-2534.js"), { getGlobalDispatcher: f, setGlobalDispatcher: C } = require("./module-7362.js"), p = require("./module-1783.js"), m = require("./module-1942.js"), y = require("./module-858.js");
let w;
try {
    require("./module-6982.js"), w = !0;
} catch  {
    w = !1;
}
function k(e) {
    return (t, A, n)=>{
        if ("function" == typeof A && (n = A, A = null), !t || "string" != typeof t && "object" != typeof t && !(t instanceof URL)) throw new l("invalid url");
        if (null != A && "object" != typeof A) throw new l("invalid opts");
        if (A && null != A.path) {
            if ("string" != typeof A.path) throw new l("invalid opts.path");
            let e = A.path;
            A.path.startsWith("/") || (e = `/${e}`), t = new URL(c.parseOrigin(t).origin + e);
        } else A || (A = "object" == typeof t ? t : {}), t = c.parseURL(t);
        const { agent: r, dispatcher: o = f() } = A;
        if (r) throw new l("unsupported opts.agent. Did you mean opts.client?");
        return e.call(o, {
            ...A,
            origin: t.origin,
            path: t.search ? `${t.pathname}${t.search}` : t.pathname,
            method: A.method || (A.body ? "PUT" : "GET")
        }, n);
    };
}
if (Object.assign(r.prototype, u), c.nodeMajor > 16 || 16 === c.nodeMajor && c.nodeMinor >= 8) {
    let t = null;
    module.exports.Headers = require("./module-2932.js").Headers, require("./module-1099.js").Response, require("./module-2239.js").Request, require("./module-1606.js").FormData, require("./module-3322.js").File, require("./module-5747.js").FileReader;
    const { setGlobalOrigin: n, getGlobalOrigin: r } = require("./module-9523.js");
    0;
    const { CacheStorage: o } = require("./module-6989.js"), { kConstruct: s } = require("./module-2381.js");
    new o(s);
}
if (c.nodeMajor >= 16) {
    const { deleteCookie: e, getCookies: t, getSetCookies: n, setCookie: r } = require("./module-4981.js");
    0;
    const { parseMIMEType: o, serializeAMimeType: s } = require("./module-3631.js");
    0;
}
if (c.nodeMajor >= 18 && w) {
    const { WebSocket: e } = require("./module-8430.js");
    0;
}
k(u.request), k(u.stream), k(u.pipeline), k(u.connect), k(u.upgrade);
