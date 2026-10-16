require("./module-1011.js");
var n, o = require("./module-5613.js"), i = require("./module-6893.js"), a = require("./module-6301.js"), u = require("./module-9117.js"), s = require("./module-5821.js"), c = require("./module-6881.js"), f = require("./module-7509.js"), h = require("./module-997.js"), l = require("./module-286.js"), p = require("./module-4418.js"), v = require("./module-9456.js"), d = require("./module-6859.js"), g = require("./module-7825.js"), y = require("./module-4212.js").codeAt, w = require("./module-6294.js"), x = require("./module-421.js"), m = require("./module-2618.js"), b = require("./module-3754.js"), S = require("./module-9445.js"), O = require("./module-1615.js"), E = require("./module-3086.js"), R = E.set, P = E.getterFor("URL"), j = O.URLSearchParams, k = O.getState, I = x.decode, T = x.encode, A = u.URL, L = u.TypeError, N = u.parseInt, U = Math.floor, C = Math.pow, F = String.fromCharCode, B = c("".charAt), D = c(/./.exec), M = c([].join), z = c(1.1.toString), _ = c([].pop), H = c([].push), J = c("".replace), q = c([].shift), G = c("".split), V = c("".indexOf), W = c("".slice), $ = c("".toLowerCase), K = c([].unshift), Y = "Invalid scheme", Q = "Invalid host", X = "Invalid port", Z = /[a-z]/i, tt = /[\d+\-.a-z]/i, rt = /\d/, et = /^0x/i, nt = /^[0-7]+$/, ot = /^\d+$/, it = /^[\da-f]+$/i, at = /[\u0000-\u0020#%/:<>?@[\\\]^|\u007F]/, ut = /[\0\t\n\r #/:<>?@[\\\]^|]/, st = /^[\u0000-\u0020]+/, ct = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, ft = /[\t\n\r]/g, ht = /[^\u0000-\u007F]/, lt = function(t) {
    return 173 === t || 847 === t || 8203 === t || 12644 === t || 65279 === t || 65440 === t || t >= 4447 && t <= 4448 || t >= 6068 && t <= 6069 || t >= 6155 && t <= 6159 || t >= 8288 && t <= 8292 || t >= 8298 && t <= 8303 || t >= 65024 && t <= 65039 || t >= 917760 && t <= 917999;
}, pt = function(t) {
    return 65533 === t || t >= 55296 && t <= 57343 || t >= 128 && t <= 159 || t >= 8206 && t <= 8207 || t >= 8232 && t <= 8233 || t >= 8234 && t <= 8238 || t >= 8293 && t <= 8297 || t >= 64976 && t <= 65007 || !(65534 & ~t) || t >= 57344 && t <= 63743 || t >= 983040 && t <= 1114109;
}, vt = function(t) {
    return t >= 65281 && t <= 65374 ? t - 65248 : 160 === t || 5760 === t || 8239 === t || 8287 === t || 12288 === t || t >= 8192 && t <= 8202 || t <= 65535 && V("¨¯´¸˘˙˚˛˜˝ͺ΄΅᾽᾿῀῁῍῎῏῝῞῟῭΅´῾‗‾⁇⁈⁉℀℁℅℆⩴゛゜ﱞﱟﱠﱡﱢﱣﷺﷻ︓︖﹇﹈﹉﹊﹋﹌﹕﹖﹟﹤﹥﹨﹪﹫ﹰﹲﹴﹶﹸﹺﹼﹾ￣", F(t)) > -1 ? 32 : t;
}, dt = function(t) {
    var r, e, n, o;
    if ("number" == typeof t) {
        for(r = [], e = 0; e < 4; e++)K(r, t % 256), t = U(t / 256);
        return M(r, ".");
    }
    if ("object" == typeof t) {
        for(r = "", n = function(t) {
            for(var r = null, e = 1, n = null, o = 0, i = 0; i < 8; i++)0 !== t[i] ? (o > e && (r = n, e = o), n = null, o = 0) : (null === n && (n = i), ++o);
            return o > e ? n : r;
        }(t), e = 0; e < 8; e++)o && 0 === t[e] || (o && (o = !1), n === e ? (r += e ? ":" : "::", o = !0) : (r += z(t[e], 16), e < 7 && (r += ":")));
        return "[" + r + "]";
    }
    return t;
}, gt = {}, yt = v({}, gt, {
    " ": 1,
    '"': 1,
    "#": 1,
    "<": 1,
    ">": 1
}), wt = v({}, yt, {
    "'": 1
}), xt = v({}, gt, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
}), mt = v({}, xt, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1,
    "^": 1
}), bt = v({}, mt, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
}), St = function(t, r) {
    var e = y(t, 0);
    return e >= 32 && e < 127 && !p(r, t) ? t : "'" === t && p(r, t) ? "%27" : T(t);
}, Ot = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
}, Et = function(t, r) {
    var e;
    return 2 === t.length && D(Z, B(t, 0)) && (":" === (e = B(t, 1)) || !r && "|" === e);
}, Rt = function(t) {
    var r;
    return t.length > 1 && Et(W(t, 0, 2)) && (2 === t.length || "/" === (r = B(t, 2)) || "\\" === r || "?" === r || "#" === r);
}, Pt = function(t) {
    return "." === t || "%2e" === $(t);
}, jt = function(t) {
    return ".." === (t = $(t)) || "%2e." === t || ".%2e" === t || "%2e%2e" === t;
}, kt = {}, It = {}, Tt = {}, At = {}, Lt = {}, Nt = {}, Ut = {}, Ct = {}, Ft = {}, Bt = {}, Dt = {}, Mt = {}, zt = {}, _t = {}, Ht = {}, Jt = {}, qt = {}, Gt = {}, Vt = {}, Wt = {}, $t = {}, Kt = function(t, r, e) {
    var n, o, i, a = m(t);
    if (r) {
        if (o = this.parse(a)) throw new L(o);
        this.searchParams = null;
    } else {
        if (void 0 !== e && (n = new Kt(e, !0)), o = this.parse(a, null, n)) throw new L(o);
        (i = k(new j)).bindURL(this), this.searchParams = i;
    }
};
Kt.prototype = {
    type: "URL",
    parse: function(t, r, e) {
        var o, i, a, u, s = this, c = r || kt, f = 0, h = "", l = !1, v = !1, y = !1;
        for(t = m(t), r || (s.scheme = "", s.username = "", s.password = "", s.host = null, s.port = null, s.path = [], s.query = null, s.fragment = null, s.cannotBeABaseURL = !1, t = J(t, st, ""), t = J(t, ct, "$1")), t = J(t, ft, ""), o = d(t); f <= o.length;){
            switch(i = o[f], c){
                case kt:
                    if (!i || !D(Z, i)) {
                        if (r) return Y;
                        c = Tt;
                        continue;
                    }
                    h += $(i), c = It;
                    break;
                case It:
                    if (i && D(tt, i)) h += $(i);
                    else {
                        if (":" !== i) {
                            if (r) return Y;
                            h = "", c = Tt, f = 0;
                            continue;
                        }
                        if (r && (s.isSpecial() !== p(Ot, h) || "file" === h && (s.includesCredentials() || null !== s.port) || "file" === s.scheme && "" === s.host)) return;
                        if (s.scheme = h, r) return void (s.isSpecial() && Ot[s.scheme] === s.port && (s.port = null));
                        h = "", "file" === s.scheme ? c = _t : s.isSpecial() && e && e.scheme === s.scheme ? c = At : s.isSpecial() ? c = Ct : "/" === o[f + 1] ? (c = Lt, f++) : (s.cannotBeABaseURL = !0, H(s.path, ""), c = Vt);
                    }
                    break;
                case Tt:
                    if (!e || e.cannotBeABaseURL && "#" !== i) return Y;
                    if (e.cannotBeABaseURL && "#" === i) {
                        s.scheme = e.scheme, s.path = g(e.path), s.query = e.query, s.fragment = "", s.cannotBeABaseURL = !0, c = $t;
                        break;
                    }
                    c = "file" === e.scheme ? _t : Nt;
                    continue;
                case At:
                    if ("/" !== i || "/" !== o[f + 1]) {
                        c = Nt;
                        continue;
                    }
                    c = Ft, f++;
                    break;
                case Lt:
                    if ("/" === i) {
                        c = Bt;
                        break;
                    }
                    c = Gt;
                    continue;
                case Nt:
                    if (s.scheme = e.scheme, i === n) s.username = e.username, s.password = e.password, s.host = e.host, s.port = e.port, s.path = g(e.path), s.query = e.query;
                    else if ("/" === i || "\\" === i && s.isSpecial()) c = Ut;
                    else if ("?" === i) s.username = e.username, s.password = e.password, s.host = e.host, s.port = e.port, s.path = g(e.path), s.query = "", c = Wt;
                    else {
                        if ("#" !== i) {
                            s.username = e.username, s.password = e.password, s.host = e.host, s.port = e.port, s.path = g(e.path), s.path.length && s.path.length--, c = Gt;
                            continue;
                        }
                        s.username = e.username, s.password = e.password, s.host = e.host, s.port = e.port, s.path = g(e.path), s.query = e.query, s.fragment = "", c = $t;
                    }
                    break;
                case Ut:
                    if (!s.isSpecial() || "/" !== i && "\\" !== i) {
                        if ("/" !== i) {
                            s.username = e.username, s.password = e.password, s.host = e.host, s.port = e.port, c = Gt;
                            continue;
                        }
                        c = Bt;
                    } else c = Ft;
                    break;
                case Ct:
                    if (c = Ft, "/" !== i || "/" !== o[f + 1]) continue;
                    f++;
                    break;
                case Ft:
                    if ("/" !== i && "\\" !== i) {
                        c = Bt;
                        continue;
                    }
                    break;
                case Bt:
                    if ("@" === i) {
                        l && (h = "%40" + h), l = !0, a = d(h);
                        for(var w = 0; w < a.length; w++){
                            var x = a[w];
                            if (":" !== x || y) {
                                var b = St(x, bt);
                                y ? s.password += b : s.username += b;
                            } else y = !0;
                        }
                        h = "";
                    } else if (i === n || "/" === i || "?" === i || "#" === i || "\\" === i && s.isSpecial()) {
                        if (l && "" === h) return "Invalid authority";
                        f -= d(h).length + 1, h = "", c = Dt;
                    } else h += i;
                    break;
                case Dt:
                case Mt:
                    if (r && "file" === s.scheme) {
                        c = Jt;
                        continue;
                    }
                    if (":" !== i || v) {
                        if (i === n || "/" === i || "?" === i || "#" === i || "\\" === i && s.isSpecial()) {
                            if (s.isSpecial() && "" === h) return Q;
                            if (r && "" === h && (s.includesCredentials() || null !== s.port)) return;
                            if (u = s.parseHost(h)) return u;
                            if (h = "", c = qt, r) return;
                            continue;
                        }
                        "[" === i ? v = !0 : "]" === i && (v = !1), h += i;
                    } else {
                        if ("" === h) return Q;
                        if (r === Mt) return;
                        if (u = s.parseHost(h)) return u;
                        h = "", c = zt;
                    }
                    break;
                case zt:
                    if (!D(rt, i)) {
                        if (i === n || "/" === i || "?" === i || "#" === i || "\\" === i && s.isSpecial() || r) {
                            if ("" !== h) {
                                var S = N(h, 10);
                                if (S > 65535) return X;
                                s.port = s.isSpecial() && S === Ot[s.scheme] ? null : S, h = "";
                            }
                            if (r) return;
                            c = qt;
                            continue;
                        }
                        return X;
                    }
                    h += i;
                    break;
                case _t:
                    if (s.scheme = "file", s.host = "", "/" === i || "\\" === i) c = Ht;
                    else {
                        if (!e || "file" !== e.scheme) {
                            c = Gt;
                            continue;
                        }
                        switch(i){
                            case n:
                                s.host = e.host, s.path = g(e.path), s.query = e.query;
                                break;
                            case "?":
                                s.host = e.host, s.path = g(e.path), s.query = "", c = Wt;
                                break;
                            case "#":
                                s.host = e.host, s.path = g(e.path), s.query = e.query, s.fragment = "", c = $t;
                                break;
                            default:
                                s.host = e.host, Rt(M(g(o, f), "")) || (s.path = g(e.path), s.shortenPath()), c = Gt;
                                continue;
                        }
                    }
                    break;
                case Ht:
                    if ("/" === i || "\\" === i) {
                        c = Jt;
                        break;
                    }
                    e && "file" === e.scheme && (s.host = e.host, !Rt(M(g(o, f), "")) && Et(e.path[0], !0) && H(s.path, e.path[0])), c = Gt;
                    continue;
                case Jt:
                    if (i === n || "/" === i || "\\" === i || "?" === i || "#" === i) {
                        if (!r && Et(h)) c = Gt;
                        else if ("" === h) {
                            if (s.host = "", r) return;
                            c = qt;
                        } else {
                            if (u = s.parseHost(h)) return u;
                            if ("localhost" === s.host && (s.host = ""), r) return;
                            h = "", c = qt;
                        }
                        continue;
                    }
                    h += i;
                    break;
                case qt:
                    if (s.isSpecial()) {
                        if (c = Gt, "/" !== i && "\\" !== i) continue;
                    } else if (r || "?" !== i) if (r || "#" !== i) {
                        if (i !== n && (c = Gt, "/" !== i)) continue;
                    } else s.fragment = "", c = $t;
                    else s.query = "", c = Wt;
                    break;
                case Gt:
                    if (i === n || "/" === i || "\\" === i && s.isSpecial() || !r && ("?" === i || "#" === i)) {
                        if (jt(h) ? (s.shortenPath(), "/" === i || "\\" === i && s.isSpecial() || H(s.path, "")) : Pt(h) ? "/" === i || "\\" === i && s.isSpecial() || H(s.path, "") : ("file" === s.scheme && !s.path.length && Et(h) && (null !== s.host && "" !== s.host && (s.host = ""), h = B(h, 0) + ":"), H(s.path, h)), h = "", "file" === s.scheme && (i === n || "?" === i || "#" === i)) for(; s.path.length > 1 && "" === s.path[0];)q(s.path);
                        "?" === i ? (s.query = "", c = Wt) : "#" === i && (s.fragment = "", c = $t);
                    } else h += St(i, mt);
                    break;
                case Vt:
                    "?" === i ? (s.query = "", c = Wt) : "#" === i ? (s.fragment = "", c = $t) : i !== n && (s.path[0] += " " === i ? "?" === o[f + 1] || "#" === o[f + 1] ? "%20" : " " : St(i, gt));
                    break;
                case Wt:
                    r || "#" !== i ? i !== n && (s.query += St(i, s.isSpecial() ? wt : yt)) : (s.fragment = "", c = $t);
                    break;
                case $t:
                    i !== n && (s.fragment += St(i, xt));
            }
            f++;
        }
    },
    parseHost: function(t) {
        var r, e, n;
        if ("[" === B(t, 0)) {
            if ("]" !== B(t, t.length - 1)) return Q;
            if (r = function(t) {
                var r, e, n, o, i, a, u, s = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ], c = 0, f = null, h = 0, l = function() {
                    return B(t, h);
                };
                if (":" === l()) {
                    if (":" !== B(t, 1)) return;
                    h += 2, f = ++c;
                }
                for(; l();){
                    if (8 === c) return;
                    if (":" !== l()) {
                        for(r = e = 0; e < 4 && D(it, l());)r = 16 * r + N(l(), 16), h++, e++;
                        if ("." === l()) {
                            if (0 === e) return;
                            if (h -= e, c > 6) return;
                            for(n = 0; l();){
                                if (o = null, n > 0) {
                                    if (!("." === l() && n < 4)) return;
                                    h++;
                                }
                                if (!D(rt, l())) return;
                                for(; D(rt, l());){
                                    if (i = N(l(), 10), null === o) o = i;
                                    else {
                                        if (0 === o) return;
                                        o = 10 * o + i;
                                    }
                                    if (o > 255) return;
                                    h++;
                                }
                                s[c] = 256 * s[c] + o, 2 !== ++n && 4 !== n || c++;
                            }
                            if (4 !== n) return;
                            break;
                        }
                        if (":" === l()) {
                            if (h++, !l()) return;
                        } else if (l()) return;
                        s[c++] = r;
                    } else {
                        if (null !== f) return;
                        h++, f = ++c;
                    }
                }
                if (null !== f) for(a = c - f, c = 7; 0 !== c && a > 0;)u = s[c], s[c--] = s[f + a - 1], s[f + --a] = u;
                else if (8 !== c) return;
                return s;
            }(W(t, 1, -1)), !r) return Q;
            this.host = r;
        } else if (this.isSpecial()) {
            if (t = function(t) {
                if (!D(ht, t)) return "" === t ? null : w(t);
                var r, e, n, o = d(t), i = "";
                for(r = 0; r < o.length; r++){
                    if (e = y(o[r], 0), pt(e)) return null;
                    lt(e) || (i += (n = vt(e)) === e ? o[r] : F(n));
                }
                return "" === i ? null : w(i);
            }(I(t)), null === t || D(at, t)) return Q;
            if (function(t) {
                var r, e, n = G(t, ".");
                if ("" === n[n.length - 1]) {
                    if (1 === n.length) return !1;
                    n.length--;
                }
                return r = n[n.length - 1], !!D(ot, r) || !!D(et, r) && ("" === (e = W(r, 2)) || !!D(it, e));
            }(t)) {
                if (r = function(t) {
                    var r, e, n, o, i, a, u, s = G(t, ".");
                    if (s.length && "" === s[s.length - 1] && s.length--, (r = s.length) > 4) return null;
                    for(e = [], n = 0; n < r; n++){
                        if ("" === (o = s[n])) return null;
                        if (i = 10, o.length > 1 && "0" === B(o, 0) && (i = D(et, o) ? 16 : 8, o = W(o, 8 === i ? 1 : 2)), "" === o) a = 0;
                        else {
                            if (!D(10 === i ? ot : 8 === i ? nt : it, o)) return null;
                            a = N(o, i);
                        }
                        H(e, a);
                    }
                    for(n = 0; n < r; n++)if (a = e[n], n === r - 1) {
                        if (a >= C(256, 5 - r)) return null;
                    } else if (a > 255) return null;
                    for(u = _(e), n = 0; n < e.length; n++)u += e[n] * C(256, 3 - n);
                    return u;
                }(t), null === r) return Q;
                this.host = r;
            } else this.host = t;
        } else {
            if (D(ut, t)) return Q;
            for(r = "", e = d(t), n = 0; n < e.length; n++)r += St(e[n], gt);
            this.host = r;
        }
    },
    cannotHaveUsernamePasswordPort: function() {
        return null === this.host || "" === this.host || this.cannotBeABaseURL || "file" === this.scheme;
    },
    includesCredentials: function() {
        return "" !== this.username || "" !== this.password;
    },
    isSpecial: function() {
        return p(Ot, this.scheme);
    },
    shortenPath: function() {
        var t = this.path, r = t.length;
        !r || "file" === this.scheme && 1 === r && Et(t[0], !0) || t.length--;
    },
    serialize: function() {
        var t = this, r = t.scheme, e = t.username, n = t.password, o = t.host, i = t.port, a = t.path, u = t.query, s = t.fragment, c = r + ":";
        return null !== o ? (c += "//", t.includesCredentials() && (c += e + (n ? ":" + n : "") + "@"), c += dt(o), null !== i && (c += ":" + i)) : "file" === r && (c += "//"), null === o && !t.cannotBeABaseURL && a.length > 1 && "" === a[0] && (c += "/."), c += t.cannotBeABaseURL ? a[0] : a.length ? "/" + M(a, "/") : "", null !== u && (c += "?" + u), null !== s && (c += "#" + s), c;
    },
    setHref: function(t) {
        var r = this.parse(t);
        if (r) throw new L(r);
        this.searchParams.update();
    },
    getOrigin: function() {
        var t = this.scheme, r = this.port;
        if ("blob" === t) try {
            return new Yt(this.path[0]).origin;
        } catch (t) {
            return "null";
        }
        return "file" !== t && this.isSpecial() ? t + "://" + dt(this.host) + (null !== r ? ":" + r : "") : "null";
    },
    getProtocol: function() {
        return this.scheme + ":";
    },
    setProtocol: function(t) {
        this.parse(m(t) + ":", kt);
    },
    getUsername: function() {
        return this.username;
    },
    setUsername: function(t) {
        var r = d(m(t));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.username = "";
            for(var e = 0; e < r.length; e++)this.username += St(r[e], bt);
        }
    },
    getPassword: function() {
        return this.password;
    },
    setPassword: function(t) {
        var r = d(m(t));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.password = "";
            for(var e = 0; e < r.length; e++)this.password += St(r[e], bt);
        }
    },
    getHost: function() {
        var t = this.host, r = this.port;
        return null === t ? "" : null === r ? dt(t) : dt(t) + ":" + r;
    },
    setHost: function(t) {
        this.cannotBeABaseURL || this.parse(t, Dt);
    },
    getHostname: function() {
        var t = this.host;
        return null === t ? "" : dt(t);
    },
    setHostname: function(t) {
        this.cannotBeABaseURL || this.parse(t, Mt);
    },
    getPort: function() {
        var t = this.port;
        return null === t ? "" : m(t);
    },
    setPort: function(t) {
        this.cannotHaveUsernamePasswordPort() || ("" === (t = m(t)) ? this.port = null : this.parse(t, zt));
    },
    getPathname: function() {
        var t = this.path;
        return this.cannotBeABaseURL ? t[0] : t.length ? "/" + M(t, "/") : "";
    },
    setPathname: function(t) {
        this.cannotBeABaseURL || (this.path = [], this.parse(t, qt));
    },
    getSearch: function() {
        var t = this.query;
        return t ? "?" + t : "";
    },
    setSearch: function(t) {
        "" === (t = m(t)) ? this.query = null : ("?" === B(t, 0) && (t = W(t, 1)), this.query = "", this.parse(t, Wt)), this.searchParams.update();
    },
    getSearchParams: function() {
        return this.searchParams.facade;
    },
    getHash: function() {
        var t = this.fragment;
        return t ? "#" + t : "";
    },
    setHash: function(t) {
        "" !== (t = m(t)) ? ("#" === B(t, 0) && (t = W(t, 1)), this.fragment = "", this.parse(t, $t)) : this.fragment = null;
    },
    update: function() {
        this.query = this.searchParams.serialize() || null;
    }
};
var Yt = function(t) {
    var r = l(this, Qt), e = S(arguments.length, 1) > 1 ? arguments[1] : void 0, n = R(r, new Kt(t, !1, e));
    i || (r.href = n.serialize(), r.origin = n.getOrigin(), r.protocol = n.getProtocol(), r.username = n.getUsername(), r.password = n.getPassword(), r.host = n.getHost(), r.hostname = n.getHostname(), r.port = n.getPort(), r.pathname = n.getPathname(), r.search = n.getSearch(), r.searchParams = n.getSearchParams(), r.hash = n.getHash());
}, Qt = Yt.prototype, Xt = function(t, r) {
    return {
        get: function() {
            return P(this)[t]();
        },
        set: r && function(t) {
            return P(this)[r](t);
        },
        configurable: !0,
        enumerable: !0
    };
};
if (i && (h(Qt, "href", Xt("serialize", "setHref")), h(Qt, "origin", Xt("getOrigin")), h(Qt, "protocol", Xt("getProtocol", "setProtocol")), h(Qt, "username", Xt("getUsername", "setUsername")), h(Qt, "password", Xt("getPassword", "setPassword")), h(Qt, "host", Xt("getHost", "setHost")), h(Qt, "hostname", Xt("getHostname", "setHostname")), h(Qt, "port", Xt("getPort", "setPort")), h(Qt, "pathname", Xt("getPathname", "setPathname")), h(Qt, "search", Xt("getSearch", "setSearch")), h(Qt, "searchParams", Xt("getSearchParams")), h(Qt, "hash", Xt("getHash", "setHash"))), f(Qt, "toJSON", function() {
    return P(this).serialize();
}, {
    enumerable: !0
}), f(Qt, "toString", function() {
    return P(this).serialize();
}, {
    enumerable: !0
}), A) {
    var Zt = A.createObjectURL, tr = A.revokeObjectURL;
    Zt && f(Yt, "createObjectURL", s(Zt, A)), tr && f(Yt, "revokeObjectURL", s(tr, A));
}
b(Yt, "URL"), o({
    global: !0,
    constructor: !0,
    forced: !a,
    sham: !i
}, {
    URL: Yt
});
