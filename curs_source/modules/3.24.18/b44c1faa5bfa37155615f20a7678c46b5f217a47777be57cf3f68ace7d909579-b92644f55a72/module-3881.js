"use strict";
const n = require("./module-6602.js"), s = require("./module-74088.js"), o = require("./module-48762.js"), i = require("./module-26215.js"), a = require("./module-14220.js"), c = require("./module-57132.js"), l = require("./module-83589.js"), { InvalidArgumentError: u } = o, d = require("./module-99826.js"), p = require("./module-4003.js"), m = require("./module-47254.js"), h = require("./module-15680.js"), f = require("./module-48843.js"), g = require("./module-24546.js"), y = require("./module-69133.js"), w = require("./module-2090.js"), { getGlobalDispatcher: v, setGlobalDispatcher: _ } = require("./module-17582.js"), A = require("./module-43651.js"), S = require("./module-77378.js"), b = require("./module-31878.js");
let E;
try {
    require("./module-76982.js"), E = !0;
} catch  {
    E = !1;
}
function I(e) {
    return (t, r, n)=>{
        if ("function" == typeof r && (n = r, r = null), !t || "string" != typeof t && "object" != typeof t && !(t instanceof URL)) throw new u("invalid url");
        if (null != r && "object" != typeof r) throw new u("invalid opts");
        if (r && null != r.path) {
            if ("string" != typeof r.path) throw new u("invalid opts.path");
            let e = r.path;
            r.path.startsWith("/") || (e = `/${e}`), t = new URL(l.parseOrigin(t).origin + e);
        } else r || (r = "object" == typeof t ? t : {}), t = l.parseURL(t);
        const { agent: s, dispatcher: o = v() } = r;
        if (s) throw new u("unsupported opts.agent. Did you mean opts.client?");
        return e.call(o, {
            ...r,
            origin: t.origin,
            path: t.search ? `${t.pathname}${t.search}` : t.pathname,
            method: r.method || (r.body ? "PUT" : "GET")
        }, n);
    };
}
if (Object.assign(s.prototype, d), l.nodeMajor > 16 || 16 === l.nodeMajor && l.nodeMinor >= 8) {
    let t = null;
    module.exports.Headers = require("./module-72848.js").Headers, require("./module-53511.js").Response, require("./module-30547.js").Request, require("./module-66522.js").FormData, require("./module-18142.js").File, require("./module-47167.js").FileReader;
    const { setGlobalOrigin: n, getGlobalOrigin: s } = require("./module-13967.js");
    0;
    const { CacheStorage: o } = require("./module-95857.js"), { kConstruct: i } = require("./module-17945.js");
    new o(i);
}
if (l.nodeMajor >= 16) {
    const { deleteCookie: e, getCookies: t, getSetCookies: n, setCookie: s } = require("./module-95905.js");
    0;
    const { parseMIMEType: o, serializeAMimeType: i } = require("./module-64387.js");
    0;
}
if (l.nodeMajor >= 18 && E) {
    const { WebSocket: e } = require("./module-23850.js");
    0;
}
I(d.request), I(d.stream), I(d.pipeline), I(d.connect), I(d.upgrade);
