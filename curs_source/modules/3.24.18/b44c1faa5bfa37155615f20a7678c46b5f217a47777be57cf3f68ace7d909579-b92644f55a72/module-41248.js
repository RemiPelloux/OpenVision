"use strict";
const { normalizeIPv6: n, removeDotSegments: s, recomposeAuthority: o, normalizePercentEncoding: i, normalizePathEncoding: a, serializePathEncoding: c, normalizeQueryFragmentEncoding: l, encodeQuery: u, encodeFragment: d, reescapeHostDelimiters: p, isIPv4: m, nonSimpleDomain: h } = require("./module-30021.js"), { SCHEMES: f, getSchemeHandler: g } = require("./module-96644.js"), y = /^[A-Za-z][A-Za-z0-9+.-]*$/u, w = "URI scheme is malformed.";
function v(e) {
    const t = unescape(String(e));
    if (!y.test(t)) throw new TypeError(w);
    return t;
}
function _(e, t, r, n) {
    const o = {};
    return n || (e = T(A(e, r), r), t = T(A(t, r), r)), !(r = r || {}).tolerant && t.scheme ? (o.scheme = t.scheme, o.userinfo = t.userinfo, o.host = t.host, o.port = t.port, o.path = s(t.path || ""), o.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (o.userinfo = t.userinfo, o.host = t.host, o.port = t.port, o.path = s(t.path || ""), o.query = t.query) : (t.path ? ("/" === t.path[0] ? o.path = s(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? o.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : o.path = t.path : o.path = "/" + t.path, o.path = s(o.path)), o.query = t.query) : (o.path = e.path, void 0 !== t.query ? o.query = t.query : o.query = e.query), o.userinfo = e.userinfo, o.host = e.host, o.port = e.port), o.scheme = e.scheme), o.fragment = t.fragment, o;
}
function A(e, t) {
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
    const l = g(n.scheme || r.scheme);
    l && l.serialize && l.serialize(r, n);
    const p = void 0 !== r.userinfo || void 0 !== r.host || void 0 !== r.port, m = !n.skipEscape && void 0 === r.scheme && !p;
    void 0 !== r.path && (n.skipEscape ? r.path = i(r.path) : r.path = c(r.path, m)), "suffix" !== n.reference && r.scheme && (r.scheme = v(r.scheme), a.push(r.scheme, ":"));
    const h = o(r);
    if (void 0 !== h && ("suffix" !== n.reference && a.push("//"), a.push(h), r.path && "/" !== r.path[0] && a.push("/")), void 0 !== r.path) {
        let e = r.path;
        n.absolutePath || l && l.absolutePath || (e = s(e)), m && (e = c(e, !0)), void 0 === h && "/" === e[0] && "/" === e[1] && (e = "/%2F" + e.slice(2)), a.push(e);
    }
    return void 0 !== r.query && a.push("?", u(r.query)), void 0 !== r.fragment && a.push("#", d(r.fragment)), a.join("");
}
const S = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, b = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, E = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
function I(e) {
    if (void 0 === e) return !1;
    let t = e.indexOf("%");
    for(; -1 !== t;){
        if (t + 2 >= e.length || !/^[\da-f]{2}$/iu.test(e.slice(t + 1, t + 3))) return !0;
        t = e.indexOf("%", t + 3);
    }
    return !1;
}
function C(e) {
    return "[" === e[0] && "]" === e[e.length - 1];
}
function k(e, t, r, n) {
    if (!t.unicodeSupport && (!r || !r.unicodeSupport) && e.host && !C(e.host) && (t.domainHost || r && r.domainHost) && !1 === n && h(e.host)) try {
        e.host = new URL("http://" + e.host).hostname;
    } catch (t) {
        return e.error = e.error || "Host's domain name can not be converted to ASCII: " + t, !0;
    }
    return !1;
}
function x(e, t) {
    const r = Object.assign({}, t), s = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
    };
    let o = !1, c = !1, u = !1, d = !1, h = !1, v = !1, _ = !1;
    "suffix" === r.reference && (e = r.scheme ? r.scheme + ":" + e : "//" + e);
    const A = e.match(b);
    null !== A && -1 !== A[1].indexOf("\\") && (s.error = "URI authority must not contain a literal backslash.", o = !0);
    const x = e.match(E);
    if (null !== x) {
        const e = x[1], t = e.replace(/[\t\n\r]/g, "");
        t.length >= 2 && ("//" !== t.slice(0, 2) ? (s.error = s.error || "URI authority must not contain a literal backslash.", o = !0) : e.length !== t.length && (s.error = s.error || "URI authority introducer must not contain whitespace.", o = !0));
    }
    const T = e.match(S);
    if (T) {
        if (s.scheme = T[1], s.userinfo = T[3], s.host = T[4], s.port = parseInt(T[5], 10), s.path = T[6] || "", s.query = T[7], s.fragment = T[8], void 0 !== s.scheme) {
            const e = unescape(s.scheme);
            y.test(e) ? s.scheme = e.toLowerCase() : (s.error = s.error || w, v = !0);
        }
        c = function(e) {
            const t = e[4];
            return I(e[3]) || void 0 !== t && !C(t) && I(t) || I(e[6]) || I(e[7]) || I(e[8]);
        }(T), c && (s.error = s.error || "URI contains malformed percent-encoding."), isNaN(s.port) && (s.port = T[5]);
        const t = function(e, t) {
            return void 0 !== t[2] && e.path && "/" !== e.path[0] ? 'URI path must start with "/" when authority is present.' : "number" == typeof e.port && (e.port < 0 || e.port > 65535) ? "URI port is malformed." : void 0;
        }(s, T);
        if (void 0 !== t && (s.error = s.error || t, o = !0), s.host) {
            if (!1 === m(s.host)) {
                const e = C(s.host), t = -1 !== s.host.indexOf("[") || -1 !== s.host.indexOf("]"), r = n(s.host);
                _ = r.isIPV6 || !0 === r.isIPVFuture, h = t && (!e || !0 === r.error), s.host = _ ? r.host : r.host.toLowerCase(), h && (s.error = s.error || "URI host is malformed.", o = !0);
            } else _ = !0;
        }
        void 0 !== s.scheme || void 0 !== s.userinfo || void 0 !== s.host || void 0 !== s.port || void 0 !== s.query || s.path ? void 0 === s.scheme ? s.reference = "relative" : void 0 === s.fragment ? s.reference = "absolute" : s.reference = "uri" : s.reference = "same-document", r.reference && "suffix" !== r.reference && r.reference !== s.reference && (s.error = s.error || "URI is not a " + r.reference + " reference.");
        const A = g(r.scheme || s.scheme);
        if (h || (d = k(s, r, A, _)), -1 !== e.indexOf("%") && void 0 !== s.host && !h) {
            let e = _ ? s.host : i(s.host, !0);
            _ || (e = i(e.toLowerCase())), s.host = p(e, _);
        }
        (!A || A && !A.skipNormalize) && (s.path && (s.path = a(s.path)), s.query && (s.query = l(s.query)), s.fragment && (s.fragment = l(s.fragment))), A && A.parse && (A.parse(s, r), A === f.urn && void 0 === s.nid && (u = !0));
    } else s.error = s.error || "URI can not be parsed.";
    return {
        parsed: s,
        malformedAuthorityOrPort: o,
        malformedPercentEncoding: c,
        malformedSchemeSpecific: u,
        malformedHost: d,
        malformedScheme: v
    };
}
function T(e, t) {
    return x(e, t).parsed;
}
function R(e, t) {
    const { parsed: r, malformedAuthorityOrPort: n, malformedPercentEncoding: s, malformedSchemeSpecific: o, malformedHost: i, malformedScheme: a } = x(e, t);
    return {
        normalized: n || s || o || i || a ? e : A(r, t),
        malformedAuthorityOrPort: n,
        malformedPercentEncoding: s,
        malformedSchemeSpecific: o,
        malformedHost: i,
        malformedScheme: a
    };
}
function B(e, t) {
    if ("string" != typeof e && "object" != typeof e) return;
    let r;
    try {
        r = "string" == typeof e ? e : A(e, t);
    } catch  {
        return;
    }
    const { normalized: n, malformedAuthorityOrPort: s, malformedPercentEncoding: o, malformedSchemeSpecific: i, malformedHost: a, malformedScheme: c } = R(r, t);
    return s || o || i || a || c ? void 0 : n;
}
const P = {
    SCHEMES: f,
    normalize: function(e, t) {
        return "string" == typeof e ? e = function(e, t) {
            return R(e, t).normalized;
        }(e, t) : "object" == typeof e && (e = T(A(e, t), t)), e;
    },
    resolve: function(e, t, r) {
        const s = r ? Object.assign({
            scheme: "null"
        }, r) : {
            scheme: "null"
        }, { parsed: o, malformedAuthorityOrPort: i, malformedPercentEncoding: a, malformedSchemeSpecific: c, malformedHost: l, malformedScheme: u } = x(e, s), { parsed: d, malformedAuthorityOrPort: p, malformedPercentEncoding: h, malformedSchemeSpecific: f, malformedHost: y, malformedScheme: w } = x(t, s);
        if (i || p || a || h || c || f || l || y || u || w) throw new Error(o.error || d.error || "URI is malformed.");
        const v = _(o, d, s, !0), S = g(r && r.scheme || v.scheme), b = v.host;
        k(v, r || {}, S, void 0 !== b && "" !== b && (m(b) || n(b).isIPV6));
        const E = b && -1 !== b.indexOf("%") && !/\P{ASCII}/u.test(b);
        if (v.error && !E) throw new Error(v.error);
        return s.skipEscape = !0, A(v, s);
    },
    resolveComponent: _,
    equal: function(e, t, r) {
        const n = B(e, r), s = B(t, r);
        return void 0 !== n && void 0 !== s && n === s;
    },
    serialize: A,
    parse: T
};
module.exports = P, module.exports.default = P, module.exports.fastUri = P;
