"use strict";
const t = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), r = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^\d*$/u), s = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/]$/u), a = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/?]$/u), c = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:]$/u), l = new Array(256);
{
    const e = "0123456789ABCDEF";
    for(let t = 0; t < 256; t++)l[t] = "%" + e[t >> 4] + e[15 & t];
}function u(e) {
    return e < 2048 ? l[192 | e >> 6] + l[128 | 63 & e] : e < 65536 ? l[224 | e >> 12] + l[128 | e >> 6 & 63] + l[128 | 63 & e] : l[240 | e >> 18] + l[128 | e >> 12 & 63] + l[128 | e >> 6 & 63] + l[128 | 63 & e];
}
const d = RegExp.prototype.test.bind(/^[\dA-Fa-f]{1,4}$/), p = RegExp.prototype.test.bind(/^[vV][\dA-Fa-f]+\.[A-Za-z\d\-._~!$&'()*+,;=:]+$/), m = RegExp.prototype.test.bind(/^[A-Za-z\d\-._~]$/), h = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
function f(e) {
    let t = -1, r = 0, n = -1, s = 0;
    for(let o = 0; o < e.length; o++)"0" === e[o] ? (-1 === n && (n = o), s++, s > r && (r = s, t = n)) : (n = -1, s = 0);
    if (r < 2) return e.join(":");
    return e.slice(0, t).join(":") + "::" + e.slice(t + r).join(":");
}
function g(e) {
    const t = "[" === e[0] && "]" === e[e.length - 1];
    if (("[" === e[0] || "]" === e[e.length - 1]) && !t) return {
        host: e,
        isIPV6: !1,
        error: !0
    };
    let n = t ? e.slice(1, -1) : e;
    if (t && p(n)) return n = n.toLowerCase(), {
        host: `[${n}]`,
        escapedHost: n,
        isIPV6: !1,
        isIPVFuture: !0
    };
    if (function(e, t) {
        let r = 0;
        for(let n = 0; n < e.length; n++)e[n] === t && r++;
        return r;
    }(n, ":") < 2) return {
        host: e,
        isIPV6: !1,
        error: t
    };
    let o = "";
    const i = n.indexOf("%");
    if (-1 !== i) {
        const t = "%25" === n.slice(i, i + 3).toLowerCase() ? 3 : 1;
        if (o = n.slice(i + t), !function(e) {
            if (0 === e.length) return !1;
            for(let t = 0; t < e.length; t++)if (!m(e[t])) {
                if (!("%" === e[t] && t + 2 < e.length && s(e.slice(t + 1, t + 3)))) return !1;
                t += 2;
            }
            return !0;
        }(o)) return {
            host: e,
            isIPV6: !1,
            error: !0
        };
        n = n.slice(0, i);
    }
    const a = function(e) {
        const t = e.indexOf("::");
        if (-1 !== t && -1 !== e.indexOf("::", t + 1)) return;
        const n = -1 === t ? e.split(":") : e.slice(0, t).split(":"), s = -1 === t ? [] : e.slice(t + 2).split(":");
        -1 !== t && (1 === n.length && "" === n[0] && (n.length = 0), 1 === s.length && "" === s[0] && (s.length = 0));
        const o = n.concat(s);
        let i = 0;
        for(let e = 0; e < o.length; e++){
            const n = o[e];
            if ("" === n) return;
            if (-1 === n.indexOf(".")) {
                if (!d(n)) return;
                o[e] = parseInt(n, 16).toString(16), i++;
            } else {
                if (e !== o.length - 1 || -1 !== t && 0 === s.length || !r(n)) return;
                i += 2;
            }
        }
        if (-1 === t) {
            if (8 !== i) return;
            return f(o);
        }
        if (i >= 8) return;
        const a = o.slice(0, n.length);
        for(let e = i; e < 8; e++)a.push("0");
        for(let e = n.length; e < o.length; e++)a.push(o[e]);
        return f(a);
    }(n);
    return void 0 === a ? {
        host: e,
        isIPV6: !1,
        error: !0
    } : {
        host: a + (o ? "%" + o : ""),
        escapedHost: a + (o ? "%25" + o : ""),
        isIPV6: !0
    };
}
const y = {
    "@": "%40",
    "/": "%2F",
    "?": "%3F",
    "#": "%23",
    ":": "%3A"
}, w = /[@/?#:]/g, v = /[@/?#]/g;
function _(e, t) {
    const r = t ? v : w;
    return r.lastIndex = 0, e.replace(r, (e)=>y[e]);
}
function A(e, t = !1) {
    if (-1 === e.indexOf("%")) return e;
    let r = "";
    for(let n = 0; n < e.length; n++){
        if ("%" === e[n] && n + 2 < e.length) {
            const i = e.slice(n + 1, n + 3);
            if (s(i)) {
                const e = i.toUpperCase(), s = String.fromCharCode(parseInt(e, 16));
                t && o(s) ? r += s : r += "%" + e, n += 2;
                continue;
            }
        }
        r += e[n];
    }
    return r;
}
function S(e, t) {
    let r = "";
    for(let n = 0; n < e.length; n++){
        const o = e[n];
        if ("%" === o && n + 2 < e.length) {
            const t = e.slice(n + 1, n + 3);
            if (s(t)) {
                r += "%" + t.toUpperCase(), n += 2;
                continue;
            }
        }
        if (t(o)) r += o;
        else {
            const t = e.charCodeAt(n);
            if (t < 128) r += l[t];
            else if (t < 55296 || t > 57343) r += u(t);
            else if (t <= 56319 && n + 1 < e.length) {
                const s = e.charCodeAt(n + 1);
                s >= 56320 && s <= 57343 ? (r += u(65536 + (t - 55296 << 10) + (s - 56320)), n++) : r += u(65533);
            } else r += u(65533);
        }
    }
    return r;
}
function b(e) {
    return S(e, c);
}
function E(e) {
    return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || 42 === e || 43 === e || 45 === e || 46 === e || 47 === e || 64 === e || 95 === e;
}
module.exports = {
    nonSimpleDomain: h,
    recomposeAuthority: function(e) {
        const t = [];
        if (void 0 !== e.userinfo && (t.push(b(e.userinfo)), t.push("@")), void 0 !== e.host) {
            let n = e.host;
            if (!r(n)) {
                let e = g(n);
                !0 !== e.isIPV6 && !0 !== e.isIPVFuture && (n = A(n, !0), e = g(n)), n = !0 === e.isIPV6 || !0 === e.isIPVFuture ? `[${e.escapedHost}]` : _(n, !1);
            }
            t.push(n);
        }
        if ("number" == typeof e.port || "string" == typeof e.port) {
            const r = String(e.port);
            if (!n(r)) throw new TypeError("URI port is malformed.");
            t.push(":"), t.push(r);
        }
        return t.length ? t.join("") : void 0;
    },
    reescapeHostDelimiters: _,
    normalizePercentEncoding: A,
    normalizePathEncoding: function(e) {
        let t = "";
        for(let r = 0; r < e.length; r++){
            const n = e[r];
            if ("%" === n && r + 2 < e.length) {
                const n = e.slice(r + 1, r + 3);
                if (s(n)) {
                    const e = n.toUpperCase(), s = String.fromCharCode(parseInt(e, 16));
                    "." !== s && o(s) ? t += s : t += "%" + e, r += 2;
                    continue;
                }
            }
            if (i(n)) t += n;
            else {
                const s = e.charCodeAt(r);
                if (s < 128) t += E(s) ? n : l[s];
                else if (s < 55296 || s > 57343) t += u(s);
                else if (s <= 56319 && r + 1 < e.length) {
                    const n = e.charCodeAt(r + 1);
                    n >= 56320 && n <= 57343 ? (t += u(65536 + (s - 55296 << 10) + (n - 56320)), r++) : t += u(65533);
                } else t += u(65533);
            }
        }
        return t;
    },
    serializePathEncoding: function(e, t = !1) {
        let r = "", n = t && "/" !== e[0];
        for(let t = 0; t < e.length; t++){
            const o = e[t];
            if ("%" === o && t + 2 < e.length) {
                const n = e.slice(t + 1, t + 3);
                if (s(n)) {
                    r += "%" + n.toUpperCase(), t += 2;
                    continue;
                }
            }
            if ("/" === o && (n = !1), !i(o) || ":" === o && n) {
                const n = e.charCodeAt(t);
                if (n < 128) r += l[n];
                else if (n < 55296 || n > 57343) r += u(n);
                else if (n <= 56319 && t + 1 < e.length) {
                    const s = e.charCodeAt(t + 1);
                    s >= 56320 && s <= 57343 ? (r += u(65536 + (n - 55296 << 10) + (s - 56320)), t++) : r += u(65533);
                } else r += u(65533);
            } else r += o;
        }
        return r;
    },
    normalizeQueryFragmentEncoding: function(e) {
        let t = "";
        for(let r = 0; r < e.length; r++){
            const n = e[r];
            if ("%" === n && r + 2 < e.length) {
                const n = e.slice(r + 1, r + 3);
                if (s(n)) {
                    const e = n.toUpperCase(), s = String.fromCharCode(parseInt(e, 16));
                    o(s) ? t += s : t += "%" + e, r += 2;
                    continue;
                }
            }
            if (a(n)) t += n;
            else {
                const s = e.charCodeAt(r);
                if (s < 128) t += E(s) ? n : l[s];
                else if (s < 55296 || s > 57343) t += u(s);
                else if (s <= 56319 && r + 1 < e.length) {
                    const n = e.charCodeAt(r + 1);
                    n >= 56320 && n <= 57343 ? (t += u(65536 + (s - 55296 << 10) + (n - 56320)), r++) : t += u(65533);
                } else t += u(65533);
            }
        }
        return t;
    },
    encodeUserinfo: b,
    encodeQuery: function(e) {
        return S(e, a);
    },
    encodeFragment: function(e) {
        return S(e, a);
    },
    escapePreservingEscapes: function(e) {
        let t = "";
        for(let r = 0; r < e.length; r++){
            if ("%" === e[r] && r + 2 < e.length) {
                const n = e.slice(r + 1, r + 3);
                if (s(n)) {
                    t += "%" + n.toUpperCase(), r += 2;
                    continue;
                }
            }
            t += escape(e[r]);
        }
        return t;
    },
    removeDotSegments: function(e) {
        let t = e;
        const r = [];
        let n = -1, s = 0;
        for(; s = t.length;){
            if (1 === s) {
                if ("." === t) break;
                if ("/" === t) {
                    r.push("/");
                    break;
                }
                r.push(t);
                break;
            }
            if (2 === s) {
                if ("." === t[0]) {
                    if ("." === t[1]) break;
                    if ("/" === t[1]) {
                        t = t.slice(2);
                        continue;
                    }
                } else if ("/" === t[0] && ("." === t[1] || "/" === t[1])) {
                    r.push("/");
                    break;
                }
            } else if (3 === s && "/.." === t) {
                0 !== r.length && r.pop(), r.push("/");
                break;
            }
            if ("." === t[0]) {
                if ("." === t[1]) {
                    if ("/" === t[2]) {
                        t = t.slice(3);
                        continue;
                    }
                } else if ("/" === t[1]) {
                    t = t.slice(2);
                    continue;
                }
            } else if ("/" === t[0] && "." === t[1]) {
                if ("/" === t[2]) {
                    t = t.slice(2);
                    continue;
                }
                if ("." === t[2] && "/" === t[3]) {
                    t = t.slice(3), 0 !== r.length && r.pop();
                    continue;
                }
            }
            if (-1 === (n = t.indexOf("/", 1))) {
                r.push(t);
                break;
            }
            r.push(t.slice(0, n)), t = t.slice(n);
        }
        return r.join("");
    },
    isIPv4: r,
    isUUID: t,
    normalizeIPv6: g,
    stringArrayToHexStripped: function(e) {
        let t = "", r = 0, n = 0;
        for(n = 0; n < e.length; n++)if (r = e[n].charCodeAt(0), 48 !== r) {
            if (!(r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102)) return "";
            t += e[n];
            break;
        }
        for(n += 1; n < e.length; n++){
            if (r = e[n].charCodeAt(0), !(r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102)) return "";
            t += e[n];
        }
        return t;
    }
};
