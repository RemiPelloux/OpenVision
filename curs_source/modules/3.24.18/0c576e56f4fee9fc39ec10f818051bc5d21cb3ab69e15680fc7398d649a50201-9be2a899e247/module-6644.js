"use strict";
const { isUUID: n } = require("./module-21.js"), o = /^([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-./:;=@]|%[\da-f]{2})+)$/iu, s = [
    "http",
    "https",
    "ws",
    "wss",
    "urn",
    "urn:uuid"
];
function i(e) {
    return !0 === e.secure || !1 !== e.secure && !!e.scheme && !(3 !== e.scheme.length || "w" !== e.scheme[0] && "W" !== e.scheme[0] || "s" !== e.scheme[1] && "S" !== e.scheme[1] || "s" !== e.scheme[2] && "S" !== e.scheme[2]);
}
function a(e) {
    return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
}
function c(e) {
    const t = "https" === String(e.scheme).toLowerCase();
    return e.port !== (t ? 443 : 80) && "" !== e.port || (e.port = void 0), e.path || (e.path = "/"), e;
}
const u = {
    scheme: "http",
    domainHost: !0,
    parse: a,
    serialize: c
}, l = {
    scheme: "ws",
    domainHost: !0,
    parse: function(e) {
        return e.secure = i(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
    },
    serialize: function(e) {
        if (e.port !== (i(e) ? 443 : 80) && "" !== e.port || (e.port = void 0), "boolean" == typeof e.secure && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
            const t = e.resourceName.indexOf("?"), r = -1 === t ? e.resourceName : e.resourceName.slice(0, t);
            e.path = r && "/" !== r ? r : void 0, e.query = -1 === t ? void 0 : e.resourceName.slice(t + 1), e.resourceName = void 0;
        }
        return e.fragment = void 0, e;
    }
}, d = {
    http: u,
    https: {
        scheme: "https",
        domainHost: u.domainHost,
        parse: a,
        serialize: c
    },
    ws: l,
    wss: {
        scheme: "wss",
        domainHost: l.domainHost,
        parse: l.parse,
        serialize: l.serialize
    },
    urn: {
        scheme: "urn",
        parse: function(e, t) {
            if (!e.path) return e.error = "URN can not be parsed", e;
            const r = e.path.match(o);
            if (r && r[0] === e.path) {
                const n = t.scheme || e.scheme || "urn";
                e.nid = r[1].toLowerCase(), e.nss = r[2];
                const o = p(`${n}:${t.nid || e.nid}`);
                e.path = void 0, o && (e = o.parse(e, t));
            } else e.error = e.error || "URN can not be parsed.";
            return e;
        },
        serialize: function(e, t) {
            if (void 0 === e.nid) throw new Error("URN without nid cannot be serialized");
            const r = t.scheme || e.scheme || "urn", n = e.nid.toLowerCase(), o = p(`${r}:${t.nid || n}`);
            o && (e = o.serialize(e, t));
            const s = e, i = e.nss;
            return s.path = `${n || t.nid}:${i}`, t.skipEscape = !0, s;
        },
        skipNormalize: !0
    },
    "urn:uuid": {
        scheme: "urn:uuid",
        parse: function(e, t) {
            const r = e;
            return r.uuid = r.nss, r.nss = void 0, t.tolerant || r.uuid && n(r.uuid) || (r.error = r.error || "UUID is not valid."), r;
        },
        serialize: function(e) {
            const t = e;
            return t.nss = (e.uuid || "").toLowerCase(), t;
        },
        skipNormalize: !0
    }
};
function p(e) {
    return e && (d[e] || d[e.toLowerCase()]) || void 0;
}
Object.setPrototypeOf(d, null), module.exports = {
    wsIsSecure: i,
    SCHEMES: d,
    isValidSchemeName: function(e) {
        return -1 !== s.indexOf(e);
    },
    getSchemeHandler: p
};
