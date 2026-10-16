const { SMITHY_CONTEXT_KEY: n } = require("./module-52391.js");
function o(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
class s {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(e){
        this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? ":" !== e.protocol.slice(-1) ? `${e.protocol}:` : e.protocol : "https:", this.path = e.path ? "/" !== e.path.charAt(0) ? `/${e.path}` : e.path : "/", this.username = e.username, this.password = e.password, this.fragment = e.fragment;
    }
    static clone(e) {
        const t = new s({
            ...e,
            headers: {
                ...e.headers
            }
        });
        var r;
        return t.query && (t.query = (r = t.query, Object.keys(r).reduce((e, t)=>{
            const n = r[t];
            return {
                ...e,
                [t]: Array.isArray(n) ? [
                    ...n
                ] : n
            };
        }, {}))), t;
    }
    static isInstance(e) {
        if (!e) return !1;
        const t = e;
        return "method" in t && "protocol" in t && "hostname" in t && "path" in t && "object" == typeof t.query && "object" == typeof t.headers;
    }
    clone() {
        return s.clone(this);
    }
}
const i = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"), a = (e, t = !1)=>{
    if (!t) return i.test(e);
    const r = e.split(".");
    for (const e of r)if (!a(e)) return !1;
    return !0;
};
function l(e) {
    const t = {};
    if (e = e.replace(/^\?/, "")) for (const r of e.split("&")){
        let [e, n = null] = r.split("=");
        e = decodeURIComponent(e), n && (n = decodeURIComponent(n)), e in t ? Array.isArray(t[e]) ? t[e].push(n) : t[e] = [
            t[e],
            n
        ] : t[e] = n;
    }
    return t;
}
const c = (e)=>{
    if ("string" == typeof e) return c(new URL(e));
    const { hostname: t, pathname: r, port: n, protocol: o, search: s } = e;
    let i;
    return s && (i = l(s)), {
        hostname: t,
        port: n ? parseInt(n) : void 0,
        protocol: o,
        path: r,
        query: i
    };
};
exports.HttpRequest = s, exports.HttpResponse = class {
    statusCode;
    reason;
    headers;
    body;
    constructor(e){
        this.statusCode = e.statusCode, this.reason = e.reason, this.headers = e.headers || {}, this.body = e.body;
    }
    static isInstance(e) {
        if (!e) return !1;
        const t = e;
        return "number" == typeof t.statusCode && "object" == typeof t.headers;
    }
}, exports.getSmithyContext = (e)=>e[n] || (e[n] = {}), exports.hasOwn = o, exports.isValidHostLabel = a, exports.isValidHostname = function(e) {
    return /^[a-z0-9][a-z0-9.-]*[a-z0-9]$/.test(e);
}, exports.normalizeProvider = (e)=>{
    if ("function" == typeof e) return e;
    const t = Promise.resolve(e);
    return ()=>t;
}, exports.parseQueryString = l, exports.parseUrl = c, exports.toEndpointV1 = (e)=>{
    if ("object" == typeof e) {
        if ("url" in e) {
            const t = c(e.url);
            if (e.headers) {
                t.headers = {};
                for(const r in e.headers)o(e.headers, r) && (t.headers[r.toLowerCase()] = e.headers[r].join(", "));
            }
            return t;
        }
        return e;
    }
    return c(e);
};
