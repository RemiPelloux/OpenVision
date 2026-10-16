"use strict";
const t = require("./module-4814.js"), s = require("./module-1124.js"), o = require("./module-7902.js"), r = require("./module-4003.js"), i = require("./module-4072.js"), l = require("./module-568.js"), d = require("./module-9361.js"), { InvalidArgumentError: m } = o, c = require("./module-3230.js"), p = require("./module-3991.js"), A = require("./module-4826.js"), u = require("./module-2908.js"), g = require("./module-5543.js"), T = require("./module-1862.js"), h = require("./module-8841.js"), k = require("./module-2534.js"), { getGlobalDispatcher: _, setGlobalDispatcher: E } = require("./module-7362.js"), f = require("./module-1783.js"), C = require("./module-1942.js"), I = require("./module-858.js");
let v;
try {
    require("./module-6982.js"), v = !0;
} catch  {
    v = !1;
}
function y(e) {
    return (a, n, t)=>{
        if ("function" == typeof n && (t = n, n = null), !a || "string" != typeof a && "object" != typeof a && !(a instanceof URL)) throw new m("invalid url");
        if (null != n && "object" != typeof n) throw new m("invalid opts");
        if (n && null != n.path) {
            if ("string" != typeof n.path) throw new m("invalid opts.path");
            let e = n.path;
            n.path.startsWith("/") || (e = `/${e}`), a = new URL(d.parseOrigin(a).origin + e);
        } else n || (n = "object" == typeof a ? a : {}), a = d.parseURL(a);
        const { agent: s, dispatcher: o = _() } = n;
        if (s) throw new m("unsupported opts.agent. Did you mean opts.client?");
        return e.call(o, {
            ...n,
            origin: a.origin,
            path: a.search ? `${a.pathname}${a.search}` : a.pathname,
            method: n.method || (n.body ? "PUT" : "GET")
        }, t);
    };
}
if (Object.assign(s.prototype, c), d.nodeMajor > 16 || 16 === d.nodeMajor && d.nodeMinor >= 8) {
    let a = null;
    module.exports.Headers = require("./module-2932.js").Headers, require("./module-1099.js").Response, require("./module-2239.js").Request, require("./module-1606.js").FormData, require("./module-3322.js").File, require("./module-5747.js").FileReader;
    const { setGlobalOrigin: t, getGlobalOrigin: s } = require("./module-9523.js");
    0;
    const { CacheStorage: o } = require("./module-6989.js"), { kConstruct: r } = require("./module-2381.js");
    new o(r);
}
if (d.nodeMajor >= 16) {
    const { deleteCookie: e, getCookies: a, getSetCookies: t, setCookie: s } = require("./module-4981.js");
    0;
    const { parseMIMEType: o, serializeAMimeType: r } = require("./module-3631.js");
    0;
}
if (d.nodeMajor >= 18 && v) {
    const { WebSocket: e } = require("./module-8430.js");
    0;
}
y(c.request), y(c.stream), y(c.pipeline), y(c.connect), y(c.upgrade);
