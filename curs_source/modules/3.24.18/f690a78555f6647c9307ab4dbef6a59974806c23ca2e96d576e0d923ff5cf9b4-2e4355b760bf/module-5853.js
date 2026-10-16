"use strict";
const n = require("./module-4814.js"), r = require("./module-1124.js"), o = require("./module-7902.js"), s = require("./module-4003.js"), a = require("./module-4072.js"), i = require("./module-568.js"), c = require("./module-9361.js"), { InvalidArgumentError: l } = o, g = require("./module-3230.js"), E = require("./module-3991.js"), u = require("./module-4826.js"), d = require("./module-2908.js"), I = require("./module-5543.js"), h = require("./module-1862.js"), Q = require("./module-8841.js"), m = require("./module-2534.js"), { getGlobalDispatcher: C, setGlobalDispatcher: B } = require("./module-7362.js"), p = require("./module-1783.js"), f = require("./module-1942.js"), y = require("./module-858.js");
let T;
try {
    require("./module-6982.js"), T = !0;
} catch  {
    T = !1;
}
function k(e) {
    return (A, t, n)=>{
        if ("function" == typeof t && (n = t, t = null), !A || "string" != typeof A && "object" != typeof A && !(A instanceof URL)) throw new l("invalid url");
        if (null != t && "object" != typeof t) throw new l("invalid opts");
        if (t && null != t.path) {
            if ("string" != typeof t.path) throw new l("invalid opts.path");
            let e = t.path;
            t.path.startsWith("/") || (e = `/${e}`), A = new URL(c.parseOrigin(A).origin + e);
        } else t || (t = "object" == typeof A ? A : {}), A = c.parseURL(A);
        const { agent: r, dispatcher: o = C() } = t;
        if (r) throw new l("unsupported opts.agent. Did you mean opts.client?");
        return e.call(o, {
            ...t,
            origin: A.origin,
            path: A.search ? `${A.pathname}${A.search}` : A.pathname,
            method: t.method || (t.body ? "PUT" : "GET")
        }, n);
    };
}
if (Object.assign(r.prototype, g), c.nodeMajor > 16 || 16 === c.nodeMajor && c.nodeMinor >= 8) {
    let A = null;
    module.exports.Headers = require("./module-2932.js").Headers, require("./module-1099.js").Response, require("./module-2239.js").Request, require("./module-1606.js").FormData, require("./module-3322.js").File, require("./module-5747.js").FileReader;
    const { setGlobalOrigin: n, getGlobalOrigin: r } = require("./module-9523.js");
    0;
    const { CacheStorage: o } = require("./module-6989.js"), { kConstruct: s } = require("./module-2381.js");
    new o(s);
}
if (c.nodeMajor >= 16) {
    const { deleteCookie: e, getCookies: A, getSetCookies: n, setCookie: r } = require("./module-4981.js");
    0;
    const { parseMIMEType: o, serializeAMimeType: s } = require("./module-3631.js");
    0;
}
if (c.nodeMajor >= 18 && T) {
    const { WebSocket: e } = require("./module-8430.js");
    0;
}
k(g.request), k(g.stream), k(g.pipeline), k(g.connect), k(g.upgrade);
