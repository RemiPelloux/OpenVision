"use strict";
const { normalizeIPv6: n, removeDotSegments: o, recomposeAuthority: s, normalizePercentEncoding: i, normalizePathEncoding: a, serializePathEncoding: c, normalizeQueryFragmentEncoding: u, encodeQuery: l, encodeFragment: d, reescapeHostDelimiters: p, isIPv4: f, nonSimpleDomain: h } = require("./module-21.js"), { SCHEMES: m, getSchemeHandler: g } = require("./module-6644.js"), y = /^[A-Za-z][A-Za-z0-9+.-]*$/u, _ = "URI scheme is malformed.";
function v(e) {
    const t = unescape(String(e));
    if (!y.test(t)) throw new TypeError(_);
    return t;
}
function w(e, t, r, n) {
    const s = {};
    return n || (e = I(b(e, r), r), t = I(b(t, r), r)), !(r = r || {}).tolerant && t.scheme ? (s.scheme = t.scheme, s.userinfo = t.userinfo, s.host = t.host, s.port = t.port, s.path = o(t.path || ""), s.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (s.userinfo = t.userinfo, s.host = t.host, s.port = t.port, s.path = o(t.path || ""), s.query = t.query) : (t.path ? ("/" === t.path[0] ? s.path = o(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? s.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : s.path = t.path : s.path = "/" + t.path, s.path = o(s.path)), s.query = t.query) : (s.path = e.path, void 0 !== t.query ? s.query = t.query : s.query = e.query), s.userinfo = e.userinfo, s.host = e.host, s.port = e.port), s.scheme = e.scheme), s.fragment = t.fragment, s;
}
function b(e, t) {
    const r = {
        host: e.host,
        scheme: e.scheme,
        userinfo: e.userinfo,
        port: e.port,
        path: e.path,
        query: e.query,
        nid: e.nid,
        nss: e.nss,
        uuid: e.uuid,
        fragment: e.fragment,
        reference: e.reference,
        resourceName: e.resourceName,
        secure: e.secure,
        error: ""
    }, n = Object.assign({}, t), a = [];
    r.scheme && (r.scheme = v(r.scheme));
    const u = g(n.scheme || r.scheme);
    u && u.serialize && u.serialize(r, n);
    const p = void 0 !== r.userinfo || void 0 !== r.host || void 0 !== r.port, f = !n.skipEscape && void 0 === r.scheme && !p;
    void 0 !== r.path && (n.skipEscape ? r.path = i(r.path) : r.path = c(r.path, f)), "suffix" !== n.reference && r.scheme && (r.scheme = v(r.scheme), a.push(r.scheme, ":"));
    const h = s(r);
    if (void 0 !== h && ("suffix" !== n.reference && a.push("//"), a.push(h), r.path && "/" !== r.path[0] && a.push("/")), void 0 !== r.path) {
        let e = r.path;
        n.absolutePath || u && u.absolutePath || (e = o(e)), f && (e = c(e, !0)), void 0 === h && "/" === e[0] && "/" === e[1] && (e = "/%2F" + e.slice(2)), a.push(e);
    }
    return void 0 !== r.query && a.push("?", l(r.query)), void 0 !== r.fragment && a.push("#", d(r.fragment)), a.join("");
}
const S = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, k = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, E = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
function x(e) {
    if (void 0 === e) return !1;
    let t = e.indexOf("%");
    for(; -1 !== t;){
        if (t + 2 >= e.length || !/^[\da-f]{2}$/iu.test(e.slice(t + 1, t + 3))) return !0;
        t = e.indexOf("%", t + 3);
    }
    return !1;
}
function T(e) {
    return "[" === e[0] && "]" === e[e.length - 1];
}
function O(e, t, r, n) {
    if (!t.unicodeSupport && (!r || !r.unicodeSupport) && e.host && !T(e.host) && (t.domainHost || r && r.domainHost) && !1 === n && h(e.host)) try {
        e.host = new URL("http://" + e.host).hostname;
    } catch (t) {
        return e.error = e.error || "Host's domain name can not be converted to ASCII: " + t, !0;
    }
    return !1;
}
function P(e, t) {
    const r = Object.assign({}, t), o = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
    };
    let s = !1, c = !1, l = !1, d = !1, h = !1, v = !1, w = !1;
    "suffix" === r.reference && (e = r.scheme ? r.scheme + ":" + e : "//" + e);
    const b = e.match(k);
    null !== b && -1 !== b[1].indexOf("\\") && (o.error = "URI authority must not contain a literal backslash.", s = !0);
    const P = e.match(E);
    if (null !== P) {
        const e = P[1], t = e.replace(/[\t\n\r]/g, "");
        t.length >= 2 && ("//" !== t.slice(0, 2) ? (o.error = o.error || "URI authority must not contain a literal backslash.", s = !0) : e.length !== t.length && (o.error = o.error || "URI authority introducer must not contain whitespace.", s = !0));
    }
    const I = e.match(S);
    if (I) {
        if (o.scheme = I[1], o.userinfo = I[3], o.host = I[4], o.port = parseInt(I[5], 10), o.path = I[6] || "", o.query = I[7], o.fragment = I[8], void 0 !== o.scheme) {
            const e = unescape(o.scheme);
            y.test(e) ? o.scheme = e.toLowerCase() : (o.error = o.error || _, v = !0);
        }
        c = function(e) {
            const t = e[4];
            return x(e[3]) || void 0 !== t && !T(t) && x(t) || x(e[6]) || x(e[7]) || x(e[8]);
        }(I), c && (o.error = o.error || "URI contains malformed percent-encoding."), isNaN(o.port) && (o.port = I[5]);
        const t = function(e, t) {
            return void 0 !== t[2] && e.path && "/" !== e.path[0] ? 'URI path must start with "/" when authority is present.' : "number" == typeof e.port && (e.port < 0 || e.port > 65535) ? "URI port is malformed." : void 0;
        }(o, I);
        if (void 0 !== t && (o.error = o.error || t, s = !0), o.host) {
            if (!1 === f(o.host)) {
                const e = T(o.host), t = -1 !== o.host.indexOf("[") || -1 !== o.host.indexOf("]"), r = n(o.host);
                w = r.isIPV6 || !0 === r.isIPVFuture, h = t && (!e || !0 === r.error), o.host = w ? r.host : r.host.toLowerCase(), h && (o.error = o.error || "URI host is malformed.", s = !0);
            } else w = !0;
        }
        void 0 !== o.scheme || void 0 !== o.userinfo || void 0 !== o.host || void 0 !== o.port || void 0 !== o.query || o.path ? void 0 === o.scheme ? o.reference = "relative" : void 0 === o.fragment ? o.reference = "absolute" : o.reference = "uri" : o.reference = "same-document", r.reference && "suffix" !== r.reference && r.reference !== o.reference && (o.error = o.error || "URI is not a " + r.reference + " reference.");
        const b = g(r.scheme || o.scheme);
        if (h || (d = O(o, r, b, w)), -1 !== e.indexOf("%") && void 0 !== o.host && !h) {
            let e = w ? o.host : i(o.host, !0);
            w || (e = i(e.toLowerCase())), o.host = p(e, w);
        }
        (!b || b && !b.skipNormalize) && (o.path && (o.path = a(o.path)), o.query && (o.query = u(o.query)), o.fragment && (o.fragment = u(o.fragment))), b && b.parse && (b.parse(o, r), b === m.urn && void 0 === o.nid && (l = !0));
    } else o.error = o.error || "URI can not be parsed.";
    return {
        parsed: o,
        malformedAuthorityOrPort: s,
        malformedPercentEncoding: c,
        malformedSchemeSpecific: l,
        malformedHost: d,
        malformedScheme: v
    };
}
function I(e, t) {
    return P(e, t).parsed;
}
function C(e, t) {
    const { parsed: r, malformedAuthorityOrPort: n, malformedPercentEncoding: o, malformedSchemeSpecific: s, malformedHost: i, malformedScheme: a } = P(e, t);
    return {
        normalized: n || o || s || i || a ? e : b(r, t),
        malformedAuthorityOrPort: n,
        malformedPercentEncoding: o,
        malformedSchemeSpecific: s,
        malformedHost: i,
        malformedScheme: a
    };
}
function A(e, t) {
    if ("string" != typeof e && "object" != typeof e) return;
    let r;
    try {
        r = "string" == typeof e ? e : b(e, t);
    } catch  {
        return;
    }
    const { normalized: n, malformedAuthorityOrPort: o, malformedPercentEncoding: s, malformedSchemeSpecific: i, malformedHost: a, malformedScheme: c } = C(r, t);
    return o || s || i || a || c ? void 0 : n;
}
const $ = {
    SCHEMES: m,
    normalize: function(e, t) {
        return "string" == typeof e ? e = function(e, t) {
            return C(e, t).normalized;
        }(e, t) : "object" == typeof e && (e = I(b(e, t), t)), e;
    },
    resolve: function(e, t, r) {
        const o = r ? Object.assign({
            scheme: "null"
        }, r) : {
            scheme: "null"
        }, { parsed: s, malformedAuthorityOrPort: i, malformedPercentEncoding: a, malformedSchemeSpecific: c, malformedHost: u, malformedScheme: l } = P(e, o), { parsed: d, malformedAuthorityOrPort: p, malformedPercentEncoding: h, malformedSchemeSpecific: m, malformedHost: y, malformedScheme: _ } = P(t, o);
        if (i || p || a || h || c || m || u || y || l || _) throw new Error(s.error || d.error || "URI is malformed.");
        const v = w(s, d, o, !0), S = g(r && r.scheme || v.scheme), k = v.host;
        O(v, r || {}, S, void 0 !== k && "" !== k && (f(k) || n(k).isIPV6));
        const E = k && -1 !== k.indexOf("%") && !/\P{ASCII}/u.test(k);
        if (v.error && !E) throw new Error(v.error);
        return o.skipEscape = !0, b(v, o);
    },
    resolveComponent: w,
    equal: function(e, t, r) {
        const n = A(e, r), o = A(t, r);
        return void 0 !== n && void 0 !== o && n === o;
    },
    serialize: b,
    parse: I
};
module.exports = $, module.exports.default = $, module.exports.fastUri = $;
