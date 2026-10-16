"use strict";
const n = require("./module-6602.js"), s = require("./module-4088.js"), i = require("./module-8762.js"), o = require("./module-6215.js"), a = require("./module-1839.js"), u = require("./module-7132.js"), c = require("./module-3589.js"), { InvalidArgumentError: l } = i, m = require("./module-9826.js"), d = require("./module-4003.js"), f = require("./module-7254.js"), p = require("./module-5680.js"), h = require("./module-8843.js"), g = require("./module-4546.js"), A = require("./module-9133.js"), _ = require("./module-2090.js"), { getGlobalDispatcher: y, setGlobalDispatcher: w } = require("./module-7582.js"), S = require("./module-3651.js"), J = require("./module-7378.js"), B = require("./module-1878.js");
let E;
try {
    require("./module-6982.js"), E = !0;
} catch  {
    E = !1;
}
function I(t) {
    return (e, r, n)=>{
        if ("function" == typeof r && (n = r, r = null), !e || "string" != typeof e && "object" != typeof e && !(e instanceof URL)) throw new l("invalid url");
        if (null != r && "object" != typeof r) throw new l("invalid opts");
        if (r && null != r.path) {
            if ("string" != typeof r.path) throw new l("invalid opts.path");
            let t = r.path;
            r.path.startsWith("/") || (t = `/${t}`), e = new URL(c.parseOrigin(e).origin + t);
        } else r || (r = "object" == typeof e ? e : {}), e = c.parseURL(e);
        const { agent: s, dispatcher: i = y() } = r;
        if (s) throw new l("unsupported opts.agent. Did you mean opts.client?");
        return t.call(i, {
            ...r,
            origin: e.origin,
            path: e.search ? `${e.pathname}${e.search}` : e.pathname,
            method: r.method || (r.body ? "PUT" : "GET")
        }, n);
    };
}
if (Object.assign(s.prototype, m), c.nodeMajor > 16 || 16 === c.nodeMajor && c.nodeMinor >= 8) {
    let e = null;
    module.exports.Headers = require("./module-2848.js").Headers, require("./module-3511.js").Response, require("./module-547.js").Request, require("./module-6522.js").FormData, require("./module-8142.js").File, require("./module-7167.js").FileReader;
    const { setGlobalOrigin: n, getGlobalOrigin: s } = require("./module-3967.js");
    0;
    const { CacheStorage: i } = require("./module-5857.js"), { kConstruct: o } = require("./module-7945.js");
    new i(o);
}
if (c.nodeMajor >= 16) {
    const { deleteCookie: t, getCookies: e, getSetCookies: n, setCookie: s } = require("./module-5905.js");
    0;
    const { parseMIMEType: i, serializeAMimeType: o } = require("./module-4387.js");
    0;
}
if (c.nodeMajor >= 18 && E) {
    const { WebSocket: t } = require("./module-3850.js");
    0;
}
I(m.request), I(m.stream), I(m.pipeline), I(m.connect), I(m.upgrade);
