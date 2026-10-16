"use strict";
const a = require("./module-4814.js"), s = require("./module-1124.js"), o = require("./module-7902.js"), r = require("./module-4003.js"), i = require("./module-4072.js"), A = require("./module-568.js"), c = require("./module-9361.js"), { InvalidArgumentError: l } = o, d = require("./module-3230.js"), m = require("./module-3991.js"), u = require("./module-4826.js"), g = require("./module-2908.js"), p = require("./module-5543.js"), E = require("./module-1862.js"), h = require("./module-8841.js"), T = require("./module-2534.js"), { getGlobalDispatcher: k, setGlobalDispatcher: f } = require("./module-7362.js"), _ = require("./module-1783.js"), I = require("./module-1942.js"), C = require("./module-858.js");
let y;
try {
    require("./module-6982.js"), y = !0;
} catch  {
    y = !1;
}
function B(e) {
    return (n, t, a)=>{
        if ("function" == typeof t && (a = t, t = null), !n || "string" != typeof n && "object" != typeof n && !(n instanceof URL)) throw new l("invalid url");
        if (null != t && "object" != typeof t) throw new l("invalid opts");
        if (t && null != t.path) {
            if ("string" != typeof t.path) throw new l("invalid opts.path");
            let e = t.path;
            t.path.startsWith("/") || (e = `/${e}`), n = new URL(c.parseOrigin(n).origin + e);
        } else t || (t = "object" == typeof n ? n : {}), n = c.parseURL(n);
        const { agent: s, dispatcher: o = k() } = t;
        if (s) throw new l("unsupported opts.agent. Did you mean opts.client?");
        return e.call(o, {
            ...t,
            origin: n.origin,
            path: n.search ? `${n.pathname}${n.search}` : n.pathname,
            method: t.method || (t.body ? "PUT" : "GET")
        }, a);
    };
}
if (Object.assign(s.prototype, d), c.nodeMajor > 16 || 16 === c.nodeMajor && c.nodeMinor >= 8) {
    let n = null;
    module.exports.Headers = require("./module-2932.js").Headers, require("./module-1099.js").Response, require("./module-2239.js").Request, require("./module-1606.js").FormData, require("./module-3322.js").File, require("./module-5747.js").FileReader;
    const { setGlobalOrigin: a, getGlobalOrigin: s } = require("./module-9523.js");
    0;
    const { CacheStorage: o } = require("./module-6989.js"), { kConstruct: r } = require("./module-2381.js");
    new o(r);
}
if (c.nodeMajor >= 16) {
    const { deleteCookie: e, getCookies: n, getSetCookies: a, setCookie: s } = require("./module-4981.js");
    0;
    const { parseMIMEType: o, serializeAMimeType: r } = require("./module-3631.js");
    0;
}
if (c.nodeMajor >= 18 && y) {
    const { WebSocket: e } = require("./module-8430.js");
    0;
}
B(d.request), B(d.stream), B(d.pipeline), B(d.connect), B(d.upgrade);
