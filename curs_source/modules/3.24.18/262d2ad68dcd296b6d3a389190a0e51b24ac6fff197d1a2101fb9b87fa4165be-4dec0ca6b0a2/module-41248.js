"use strict";
const { normalizeIPv6: n, removeDotSegments: o, recomposeAuthority: s, normalizePercentEncoding: i, normalizePathEncoding: a, serializePathEncoding: l, normalizeQueryFragmentEncoding: c, encodeQuery: u, encodeFragment: d, reescapeHostDelimiters: p, isIPv4: h, nonSimpleDomain: m } = require("./module-30021.js"), { SCHEMES: f, getSchemeHandler: g } = require("./module-96644.js"), y = /^[A-Za-z][A-Za-z0-9+.-]*$/u, v = "URI scheme is malformed.";
function w(e) {
    const t = unescape(String(e));
    if (!y.test(t)) throw new TypeError(v);
    return t;
}
function b(e, t, r, n) {
    const s = {};
    return n || (e = A(_(e, r), r), t = A(_(t, r), r)), !(r = r || {}).tolerant && t.scheme ? (s.scheme = t.scheme, s.userinfo = t.userinfo, s.host = t.host, s.port = t.port, s.path = o(t.path || ""), s.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (s.userinfo = t.userinfo, s.host = t.host, s.port = t.port, s.path = o(t.path || ""), s.query = t.query) : (t.path ? ("/" === t.path[0] ? s.path = o(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? s.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : s.path = t.path : s.path = "/" + t.path, s.path = o(s.path)), s.query = t.query) : (s.path = e.path, void 0 !== t.query ? s.query = t.query : s.query = e.query), s.userinfo = e.userinfo, s.host = e.host, s.port = e.port), s.scheme = e.scheme), s.fragment = t.fragment, s;
}
function _(e, t) {
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
    r.scheme && (r.scheme = w(r.scheme));
    const c = g(n.scheme || r.scheme);
    c && c.serialize && c.serialize(r, n);
    const p = void 0 !== r.userinfo || void 0 !== r.host || void 0 !== r.port, h = !n.skipEscape && void 0 === r.scheme && !p;
    void 0 !== r.path && (n.skipEscape ? r.path = i(r.path) : r.path = l(r.path, h)), "suffix" !== n.reference && r.scheme && (r.scheme = w(r.scheme), a.push(r.scheme, ":"));
    const m = s(r);
    if (void 0 !== m && ("suffix" !== n.reference && a.push("//"), a.push(m), r.path && "/" !== r.path[0] && a.push("/")), void 0 !== r.path) {
        let e = r.path;
        n.absolutePath || c && c.absolutePath || (e = o(e)), h && (e = l(e, !0)), void 0 === m && "/" === e[0] && "/" === e[1] && (e = "/%2F" + e.slice(2)), a.push(e);
    }
    return void 0 !== r.query && a.push("?", u(r.query)), void 0 !== r.fragment && a.push("#", d(r.fragment)), a.join("");
}
const S = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, x = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, k = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
function E(e) {
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
function C(e, t, r, n) {
    if (!t.unicodeSupport && (!r || !r.unicodeSupport) && e.host && !T(e.host) && (t.domainHost || r && r.domainHost) && !1 === n && m(e.host)) try {
        e.host = new URL("http://" + e.host).hostname;
    } catch (t) {
        return e.error = e.error || "Host's domain name can not be converted to ASCII: " + t, !0;
    }
    return !1;
}
function I(e, t) {
    const r = Object.assign({}, t), o = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
    };
    let s = !1, l = !1, u = !1, d = !1, m = !1, w = !1, b = !1;
    "suffix" === r.reference && (e = r.scheme ? r.scheme + ":" + e : "//" + e);
    const _ = e.match(x);
    null !== _ && -1 !== _[1].indexOf("\\") && (o.error = "URI authority must not contain a literal backslash.", s = !0);
    const I = e.match(k);
    if (null !== I) {
        const e = I[1], t = e.replace(/[\t\n\r]/g, "");
        t.length >= 2 && ("//" !== t.slice(0, 2) ? (o.error = o.error || "URI authority must not contain a literal backslash.", s = !0) : e.length !== t.length && (o.error = o.error || "URI authority introducer must not contain whitespace.", s = !0));
    }
    const A = e.match(S);
    if (A) {
        if (o.scheme = A[1], o.userinfo = A[3], o.host = A[4], o.port = parseInt(A[5], 10), o.path = A[6] || "", o.query = A[7], o.fragment = A[8], void 0 !== o.scheme) {
            const e = unescape(o.scheme);
            y.test(e) ? o.scheme = e.toLowerCase() : (o.error = o.error || v, w = !0);
        }
        l = function(e) {
            const t = e[4];
            return E(e[3]) || void 0 !== t && !T(t) && E(t) || E(e[6]) || E(e[7]) || E(e[8]);
        }(A), l && (o.error = o.error || "URI contains malformed percent-encoding."), isNaN(o.port) && (o.port = A[5]);
        const t = function(e, t) {
            return void 0 !== t[2] && e.path && "/" !== e.path[0] ? 'URI path must start with "/" when authority is present.' : "number" == typeof e.port && (e.port < 0 || e.port > 65535) ? "URI port is malformed." : void 0;
        }(o, A);
        if (void 0 !== t && (o.error = o.error || t, s = !0), o.host) {
            if (!1 === h(o.host)) {
                const e = T(o.host), t = -1 !== o.host.indexOf("[") || -1 !== o.host.indexOf("]"), r = n(o.host);
                b = r.isIPV6 || !0 === r.isIPVFuture, m = t && (!e || !0 === r.error), o.host = b ? r.host : r.host.toLowerCase(), m && (o.error = o.error || "URI host is malformed.", s = !0);
            } else b = !0;
        }
        void 0 !== o.scheme || void 0 !== o.userinfo || void 0 !== o.host || void 0 !== o.port || void 0 !== o.query || o.path ? void 0 === o.scheme ? o.reference = "relative" : void 0 === o.fragment ? o.reference = "absolute" : o.reference = "uri" : o.reference = "same-document", r.reference && "suffix" !== r.reference && r.reference !== o.reference && (o.error = o.error || "URI is not a " + r.reference + " reference.");
        const _ = g(r.scheme || o.scheme);
        if (m || (d = C(o, r, _, b)), -1 !== e.indexOf("%") && void 0 !== o.host && !m) {
            let e = b ? o.host : i(o.host, !0);
            b || (e = i(e.toLowerCase())), o.host = p(e, b);
        }
        (!_ || _ && !_.skipNormalize) && (o.path && (o.path = a(o.path)), o.query && (o.query = c(o.query)), o.fragment && (o.fragment = c(o.fragment))), _ && _.parse && (_.parse(o, r), _ === f.urn && void 0 === o.nid && (u = !0));
    } else o.error = o.error || "URI can not be parsed.";
    return {
        parsed: o,
        malformedAuthorityOrPort: s,
        malformedPercentEncoding: l,
        malformedSchemeSpecific: u,
        malformedHost: d,
        malformedScheme: w
    };
}
function A(e, t) {
    return I(e, t).parsed;
}
function P(e, t) {
    const { parsed: r, malformedAuthorityOrPort: n, malformedPercentEncoding: o, malformedSchemeSpecific: s, malformedHost: i, malformedScheme: a } = I(e, t);
    return {
        normalized: n || o || s || i || a ? e : _(r, t),
        malformedAuthorityOrPort: n,
        malformedPercentEncoding: o,
        malformedSchemeSpecific: s,
        malformedHost: i,
        malformedScheme: a
    };
}
function M(e, t) {
    if ("string" != typeof e && "object" != typeof e) return;
    let r;
    try {
        r = "string" == typeof e ? e : _(e, t);
    } catch  {
        return;
    }
    const { normalized: n, malformedAuthorityOrPort: o, malformedPercentEncoding: s, malformedSchemeSpecific: i, malformedHost: a, malformedScheme: l } = P(r, t);
    return o || s || i || a || l ? void 0 : n;
}
const R = {
    SCHEMES: f,
    normalize: function(e, t) {
        return "string" == typeof e ? e = function(e, t) {
            return P(e, t).normalized;
        }(e, t) : "object" == typeof e && (e = A(_(e, t), t)), e;
    },
    resolve: function(e, t, r) {
        const o = r ? Object.assign({
            scheme: "null"
        }, r) : {
            scheme: "null"
        }, { parsed: s, malformedAuthorityOrPort: i, malformedPercentEncoding: a, malformedSchemeSpecific: l, malformedHost: c, malformedScheme: u } = I(e, o), { parsed: d, malformedAuthorityOrPort: p, malformedPercentEncoding: m, malformedSchemeSpecific: f, malformedHost: y, malformedScheme: v } = I(t, o);
        if (i || p || a || m || l || f || c || y || u || v) throw new Error(s.error || d.error || "URI is malformed.");
        const w = b(s, d, o, !0), S = g(r && r.scheme || w.scheme), x = w.host;
        C(w, r || {}, S, void 0 !== x && "" !== x && (h(x) || n(x).isIPV6));
        const k = x && -1 !== x.indexOf("%") && !/\P{ASCII}/u.test(x);
        if (w.error && !k) throw new Error(w.error);
        return o.skipEscape = !0, _(w, o);
    },
    resolveComponent: b,
    equal: function(e, t, r) {
        const n = M(e, r), o = M(t, r);
        return void 0 !== n && void 0 !== o && n === o;
    },
    serialize: _,
    parse: A
};
module.exports = R, module.exports.default = R, module.exports.fastUri = R;
