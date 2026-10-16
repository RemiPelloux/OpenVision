"use strict";
const t = require("./module-4876.js"), s = require("./module-3246.js"), o = {
    ftp: 21,
    file: null,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
}, r = Symbol("failure");
function i(e) {
    return t.ucs2.decode(e).length;
}
function l(e, a) {
    const n = e[a];
    return isNaN(n) ? void 0 : String.fromCodePoint(n);
}
function d(e) {
    return e >= 48 && e <= 57;
}
function m(e) {
    return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function c(e) {
    return d(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function p(e) {
    return "." === e || "%2e" === e.toLowerCase();
}
function A(e) {
    return 2 === e.length && m(e.codePointAt(0)) && (":" === e[1] || "|" === e[1]);
}
function u(e) {
    return void 0 !== o[e];
}
function g(e) {
    return u(e.scheme);
}
function T(e) {
    let a = e.toString(16).toUpperCase();
    return 1 === a.length && (a = "0" + a), "%" + a;
}
function h(e) {
    return e <= 31 || e > 126;
}
const k = new Set([
    32,
    34,
    35,
    60,
    62,
    63,
    96,
    123,
    125
]);
function _(e) {
    return h(e) || k.has(e);
}
const E = new Set([
    47,
    58,
    59,
    61,
    64,
    91,
    92,
    93,
    94,
    124
]);
function f(e) {
    return _(e) || E.has(e);
}
function C(e, a) {
    const n = String.fromCodePoint(e);
    return a(e) ? function(e) {
        const a = new Buffer(e);
        let n = "";
        for(let e = 0; e < a.length; ++e)n += T(a[e]);
        return n;
    }(n) : n;
}
function I(e) {
    let a = 10;
    if (e.length >= 2 && "0" === e.charAt(0) && "x" === e.charAt(1).toLowerCase() ? (e = e.substring(2), a = 16) : e.length >= 2 && "0" === e.charAt(0) && (e = e.substring(1), a = 8), "" === e) return 0;
    return (10 === a ? /[^0-9]/ : 16 === a ? /[^0-9A-Fa-f]/ : /[^0-7]/).test(e) ? r : parseInt(e, a);
}
function v(e, a) {
    if ("[" === e[0]) return "]" !== e[e.length - 1] ? r : function(e) {
        const a = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        let n = 0, s = null, o = 0;
        if (58 === (e = t.ucs2.decode(e))[o]) {
            if (58 !== e[o + 1]) return r;
            o += 2, ++n, s = n;
        }
        for(; o < e.length;){
            if (8 === n) return r;
            if (58 === e[o]) {
                if (null !== s) return r;
                ++o, ++n, s = n;
                continue;
            }
            let t = 0, i = 0;
            for(; i < 4 && c(e[o]);)t = 16 * t + parseInt(l(e, o), 16), ++o, ++i;
            if (46 === e[o]) {
                if (0 === i) return r;
                if (o -= i, n > 6) return r;
                let t = 0;
                for(; void 0 !== e[o];){
                    let s = null;
                    if (t > 0) {
                        if (!(46 === e[o] && t < 4)) return r;
                        ++o;
                    }
                    if (!d(e[o])) return r;
                    for(; d(e[o]);){
                        const a = parseInt(l(e, o));
                        if (null === s) s = a;
                        else {
                            if (0 === s) return r;
                            s = 10 * s + a;
                        }
                        if (s > 255) return r;
                        ++o;
                    }
                    a[n] = 256 * a[n] + s, ++t, 2 !== t && 4 !== t || ++n;
                }
                if (4 !== t) return r;
                break;
            }
            if (58 === e[o]) {
                if (++o, void 0 === e[o]) return r;
            } else if (void 0 !== e[o]) return r;
            a[n] = t, ++n;
        }
        if (null !== s) {
            let e = n - s;
            for(n = 7; 0 !== n && e > 0;){
                const t = a[s + e - 1];
                a[s + e - 1] = a[n], a[n] = t, --n, --e;
            }
        } else if (null === s && 8 !== n) return r;
        return a;
    }(e.substring(1, e.length - 1));
    if (!a) return function(e) {
        if (a = e, -1 !== a.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/)) return r;
        var a;
        let n = "";
        const s = t.ucs2.decode(e);
        for(let e = 0; e < s.length; ++e)n += C(s[e], h);
        return n;
    }(e);
    const n = function(e) {
        const a = new Buffer(e), n = [];
        for(let e = 0; e < a.length; ++e)37 !== a[e] ? n.push(a[e]) : 37 === a[e] && c(a[e + 1]) && c(a[e + 2]) ? (n.push(parseInt(a.slice(e + 1, e + 3).toString(), 16)), e += 2) : n.push(a[e]);
        return new Buffer(n).toString();
    }(e), o = s.toASCII(n, !1, s.PROCESSING_OPTIONS.NONTRANSITIONAL, !1);
    if (null === o) return r;
    if (-1 !== o.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/)) return r;
    const i = function(e) {
        const a = e.split(".");
        if ("" === a[a.length - 1] && a.length > 1 && a.pop(), a.length > 4) return e;
        const n = [];
        for (const t of a){
            if ("" === t) return e;
            const a = I(t);
            if (a === r) return e;
            n.push(a);
        }
        for(let e = 0; e < n.length - 1; ++e)if (n[e] > 255) return r;
        if (n[n.length - 1] >= Math.pow(256, 5 - n.length)) return r;
        let t = n.pop(), s = 0;
        for (const e of n)t += e * Math.pow(256, 3 - s), ++s;
        return t;
    }(o);
    return "number" == typeof i || i === r ? i : o;
}
function y(e) {
    return "number" == typeof e ? function(e) {
        let a = "", n = e;
        for(let e = 1; e <= 4; ++e)a = String(n % 256) + a, 4 !== e && (a = "." + a), n = Math.floor(n / 256);
        return a;
    }(e) : e instanceof Array ? "[" + function(e) {
        let a = "";
        const n = function(e) {
            let a = null, n = 1, t = null, s = 0;
            for(let o = 0; o < e.length; ++o)0 !== e[o] ? (s > n && (a = t, n = s), t = null, s = 0) : (null === t && (t = o), ++s);
            return s > n && (a = t, n = s), {
                idx: a,
                len: n
            };
        }(e).idx;
        let t = !1;
        for(let s = 0; s <= 7; ++s)if (!t || 0 !== e[s]) {
            if (t && (t = !1), n === s) {
                a += 0 === s ? "::" : ":", t = !0;
                continue;
            }
            a += e[s].toString(16), 7 !== s && (a += ":");
        }
        return a;
    }(e) + "]" : e;
}
function S(e) {
    const a = e.path;
    var n;
    0 !== a.length && ("file" === e.scheme && 1 === a.length && (n = a[0], /^[A-Za-z]:$/.test(n)) || a.pop());
}
function R(e) {
    return "" !== e.username || "" !== e.password;
}
function N(e, a, n, s, o) {
    if (this.pointer = 0, this.input = e, this.base = a || null, this.encodingOverride = n || "utf-8", this.stateOverride = o, this.url = s, this.failure = !1, this.parseError = !1, !this.url) {
        this.url = {
            scheme: "",
            username: "",
            password: "",
            host: null,
            port: null,
            path: [],
            query: null,
            fragment: null,
            cannotBeABaseURL: !1
        };
        const e = function(e) {
            return e.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
        }(this.input);
        e !== this.input && (this.parseError = !0), this.input = e;
    }
    const i = function(e) {
        return e.replace(/\u0009|\u000A|\u000D/g, "");
    }(this.input);
    for(i !== this.input && (this.parseError = !0), this.input = i, this.state = o || "scheme start", this.buffer = "", this.atFlag = !1, this.arrFlag = !1, this.passwordTokenSeenFlag = !1, this.input = t.ucs2.decode(this.input); this.pointer <= this.input.length; ++this.pointer){
        const e = this.input[this.pointer], a = isNaN(e) ? void 0 : String.fromCodePoint(e), n = this["parse " + this.state](e, a);
        if (!n) break;
        if (n === r) {
            this.failure = !0;
            break;
        }
    }
}
N.prototype["parse scheme start"] = function(e, a) {
    if (m(e)) this.buffer += a.toLowerCase(), this.state = "scheme";
    else {
        if (this.stateOverride) return this.parseError = !0, r;
        this.state = "no scheme", --this.pointer;
    }
    return !0;
}, N.prototype["parse scheme"] = function(e, a) {
    if (function(e) {
        return m(e) || d(e);
    }(e) || 43 === e || 45 === e || 46 === e) this.buffer += a.toLowerCase();
    else if (58 === e) {
        if (this.stateOverride) {
            if (g(this.url) && !u(this.buffer)) return !1;
            if (!g(this.url) && u(this.buffer)) return !1;
            if ((R(this.url) || null !== this.url.port) && "file" === this.buffer) return !1;
            if ("file" === this.url.scheme && ("" === this.url.host || null === this.url.host)) return !1;
        }
        if (this.url.scheme = this.buffer, this.buffer = "", this.stateOverride) return !1;
        "file" === this.url.scheme ? (47 === this.input[this.pointer + 1] && 47 === this.input[this.pointer + 2] || (this.parseError = !0), this.state = "file") : g(this.url) && null !== this.base && this.base.scheme === this.url.scheme ? this.state = "special relative or authority" : g(this.url) ? this.state = "special authority slashes" : 47 === this.input[this.pointer + 1] ? (this.state = "path or authority", ++this.pointer) : (this.url.cannotBeABaseURL = !0, this.url.path.push(""), this.state = "cannot-be-a-base-URL path");
    } else {
        if (this.stateOverride) return this.parseError = !0, r;
        this.buffer = "", this.state = "no scheme", this.pointer = -1;
    }
    return !0;
}, N.prototype["parse no scheme"] = function(e) {
    return null === this.base || this.base.cannotBeABaseURL && 35 !== e ? r : (this.base.cannotBeABaseURL && 35 === e ? (this.url.scheme = this.base.scheme, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.url.cannotBeABaseURL = !0, this.state = "fragment") : "file" === this.base.scheme ? (this.state = "file", --this.pointer) : (this.state = "relative", --this.pointer), !0);
}, N.prototype["parse special relative or authority"] = function(e) {
    return 47 === e && 47 === this.input[this.pointer + 1] ? (this.state = "special authority ignore slashes", ++this.pointer) : (this.parseError = !0, this.state = "relative", --this.pointer), !0;
}, N.prototype["parse path or authority"] = function(e) {
    return 47 === e ? this.state = "authority" : (this.state = "path", --this.pointer), !0;
}, N.prototype["parse relative"] = function(e) {
    return this.url.scheme = this.base.scheme, isNaN(e) ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = this.base.query) : 47 === e ? this.state = "relative slash" : 63 === e ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = "", this.state = "query") : 35 === e ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.state = "fragment") : g(this.url) && 92 === e ? (this.parseError = !0, this.state = "relative slash") : (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(0, this.base.path.length - 1), this.state = "path", --this.pointer), !0;
}, N.prototype["parse relative slash"] = function(e) {
    return !g(this.url) || 47 !== e && 92 !== e ? 47 === e ? this.state = "authority" : (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.state = "path", --this.pointer) : (92 === e && (this.parseError = !0), this.state = "special authority ignore slashes"), !0;
}, N.prototype["parse special authority slashes"] = function(e) {
    return 47 === e && 47 === this.input[this.pointer + 1] ? (this.state = "special authority ignore slashes", ++this.pointer) : (this.parseError = !0, this.state = "special authority ignore slashes", --this.pointer), !0;
}, N.prototype["parse special authority ignore slashes"] = function(e) {
    return 47 !== e && 92 !== e ? (this.state = "authority", --this.pointer) : this.parseError = !0, !0;
}, N.prototype["parse authority"] = function(e, a) {
    if (64 === e) {
        this.parseError = !0, this.atFlag && (this.buffer = "%40" + this.buffer), this.atFlag = !0;
        const e = i(this.buffer);
        for(let a = 0; a < e; ++a){
            const e = this.buffer.codePointAt(a);
            if (58 === e && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = !0;
                continue;
            }
            const n = C(e, f);
            this.passwordTokenSeenFlag ? this.url.password += n : this.url.username += n;
        }
        this.buffer = "";
    } else if (isNaN(e) || 47 === e || 63 === e || 35 === e || g(this.url) && 92 === e) {
        if (this.atFlag && "" === this.buffer) return this.parseError = !0, r;
        this.pointer -= i(this.buffer) + 1, this.buffer = "", this.state = "host";
    } else this.buffer += a;
    return !0;
}, N.prototype["parse hostname"] = N.prototype["parse host"] = function(e, a) {
    if (this.stateOverride && "file" === this.url.scheme) --this.pointer, this.state = "file host";
    else if (58 !== e || this.arrFlag) if (isNaN(e) || 47 === e || 63 === e || 35 === e || g(this.url) && 92 === e) {
        if (--this.pointer, g(this.url) && "" === this.buffer) return this.parseError = !0, r;
        if (this.stateOverride && "" === this.buffer && (R(this.url) || null !== this.url.port)) return this.parseError = !0, !1;
        const e = v(this.buffer, g(this.url));
        if (e === r) return r;
        if (this.url.host = e, this.buffer = "", this.state = "path start", this.stateOverride) return !1;
    } else 91 === e ? this.arrFlag = !0 : 93 === e && (this.arrFlag = !1), this.buffer += a;
    else {
        if ("" === this.buffer) return this.parseError = !0, r;
        const e = v(this.buffer, g(this.url));
        if (e === r) return r;
        if (this.url.host = e, this.buffer = "", this.state = "port", "hostname" === this.stateOverride) return !1;
    }
    return !0;
}, N.prototype["parse port"] = function(e, a) {
    if (d(e)) this.buffer += a;
    else {
        if (!(isNaN(e) || 47 === e || 63 === e || 35 === e || g(this.url) && 92 === e || this.stateOverride)) return this.parseError = !0, r;
        if ("" !== this.buffer) {
            const e = parseInt(this.buffer);
            if (e > Math.pow(2, 16) - 1) return this.parseError = !0, r;
            this.url.port = e === (n = this.url.scheme, o[n]) ? null : e, this.buffer = "";
        }
        if (this.stateOverride) return !1;
        this.state = "path start", --this.pointer;
    }
    var n;
    return !0;
};
const B = new Set([
    47,
    92,
    63,
    35
]);
N.prototype["parse file"] = function(e) {
    var a, n;
    return this.url.scheme = "file", 47 === e || 92 === e ? (92 === e && (this.parseError = !0), this.state = "file slash") : null !== this.base && "file" === this.base.scheme ? isNaN(e) ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = this.base.query) : 63 === e ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = "", this.state = "query") : 35 === e ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.state = "fragment") : (this.input.length - this.pointer - 1 == 0 || (a = e, n = this.input[this.pointer + 1], !m(a) || 58 !== n && 124 !== n) || this.input.length - this.pointer - 1 >= 2 && !B.has(this.input[this.pointer + 2]) ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), S(this.url)) : this.parseError = !0, this.state = "path", --this.pointer) : (this.state = "path", --this.pointer), !0;
}, N.prototype["parse file slash"] = function(e) {
    var a;
    return 47 === e || 92 === e ? (92 === e && (this.parseError = !0), this.state = "file host") : (null !== this.base && "file" === this.base.scheme && (2 === (a = this.base.path[0]).length && m(a.codePointAt(0)) && ":" === a[1] ? this.url.path.push(this.base.path[0]) : this.url.host = this.base.host), this.state = "path", --this.pointer), !0;
}, N.prototype["parse file host"] = function(e, a) {
    if (isNaN(e) || 47 === e || 92 === e || 63 === e || 35 === e) if (--this.pointer, !this.stateOverride && A(this.buffer)) this.parseError = !0, this.state = "path";
    else if ("" === this.buffer) {
        if (this.url.host = "", this.stateOverride) return !1;
        this.state = "path start";
    } else {
        let e = v(this.buffer, g(this.url));
        if (e === r) return r;
        if ("localhost" === e && (e = ""), this.url.host = e, this.stateOverride) return !1;
        this.buffer = "", this.state = "path start";
    }
    else this.buffer += a;
    return !0;
}, N.prototype["parse path start"] = function(e) {
    return g(this.url) ? (92 === e && (this.parseError = !0), this.state = "path", 47 !== e && 92 !== e && --this.pointer) : this.stateOverride || 63 !== e ? this.stateOverride || 35 !== e ? void 0 !== e && (this.state = "path", 47 !== e && --this.pointer) : (this.url.fragment = "", this.state = "fragment") : (this.url.query = "", this.state = "query"), !0;
}, N.prototype["parse path"] = function(e) {
    if (isNaN(e) || 47 === e || g(this.url) && 92 === e || !this.stateOverride && (63 === e || 35 === e)) {
        if (g(this.url) && 92 === e && (this.parseError = !0), ".." === (a = (a = this.buffer).toLowerCase()) || "%2e." === a || ".%2e" === a || "%2e%2e" === a ? (S(this.url), 47 === e || g(this.url) && 92 === e || this.url.path.push("")) : !p(this.buffer) || 47 === e || g(this.url) && 92 === e ? p(this.buffer) || ("file" === this.url.scheme && 0 === this.url.path.length && A(this.buffer) && ("" !== this.url.host && null !== this.url.host && (this.parseError = !0, this.url.host = ""), this.buffer = this.buffer[0] + ":"), this.url.path.push(this.buffer)) : this.url.path.push(""), this.buffer = "", "file" === this.url.scheme && (void 0 === e || 63 === e || 35 === e)) for(; this.url.path.length > 1 && "" === this.url.path[0];)this.parseError = !0, this.url.path.shift();
        63 === e && (this.url.query = "", this.state = "query"), 35 === e && (this.url.fragment = "", this.state = "fragment");
    } else 37 !== e || c(this.input[this.pointer + 1]) && c(this.input[this.pointer + 2]) || (this.parseError = !0), this.buffer += C(e, _);
    var a;
    return !0;
}, N.prototype["parse cannot-be-a-base-URL path"] = function(e) {
    return 63 === e ? (this.url.query = "", this.state = "query") : 35 === e ? (this.url.fragment = "", this.state = "fragment") : (isNaN(e) || 37 === e || (this.parseError = !0), 37 !== e || c(this.input[this.pointer + 1]) && c(this.input[this.pointer + 2]) || (this.parseError = !0), isNaN(e) || (this.url.path[0] = this.url.path[0] + C(e, h))), !0;
}, N.prototype["parse query"] = function(e, a) {
    if (isNaN(e) || !this.stateOverride && 35 === e) {
        g(this.url) && "ws" !== this.url.scheme && "wss" !== this.url.scheme || (this.encodingOverride = "utf-8");
        const a = new Buffer(this.buffer);
        for(let e = 0; e < a.length; ++e)a[e] < 33 || a[e] > 126 || 34 === a[e] || 35 === a[e] || 60 === a[e] || 62 === a[e] ? this.url.query += T(a[e]) : this.url.query += String.fromCodePoint(a[e]);
        this.buffer = "", 35 === e && (this.url.fragment = "", this.state = "fragment");
    } else 37 !== e || c(this.input[this.pointer + 1]) && c(this.input[this.pointer + 2]) || (this.parseError = !0), this.buffer += a;
    return !0;
}, N.prototype["parse fragment"] = function(e) {
    return isNaN(e) || (0 === e ? this.parseError = !0 : (37 !== e || c(this.input[this.pointer + 1]) && c(this.input[this.pointer + 2]) || (this.parseError = !0), this.url.fragment += C(e, h))), !0;
}, module.exports.serializeURL = function(e, a) {
    let n = e.scheme + ":";
    if (null !== e.host ? (n += "//", "" === e.username && "" === e.password || (n += e.username, "" !== e.password && (n += ":" + e.password), n += "@"), n += y(e.host), null !== e.port && (n += ":" + e.port)) : null === e.host && "file" === e.scheme && (n += "//"), e.cannotBeABaseURL) n += e.path[0];
    else for (const a of e.path)n += "/" + a;
    return null !== e.query && (n += "?" + e.query), a || null === e.fragment || (n += "#" + e.fragment), n;
}, module.exports.serializeURLOrigin = function(a) {
    switch(a.scheme){
        case "blob":
            try {
                return module.exports.serializeURLOrigin(module.exports.parseURL(a.path[0]));
            } catch (e) {
                return "null";
            }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
            return function(e) {
                let a = e.scheme + "://";
                return a += y(e.host), null !== e.port && (a += ":" + e.port), a;
            }({
                scheme: a.scheme,
                host: a.host,
                port: a.port
            });
        case "file":
            return "file://";
        default:
            return "null";
    }
}, module.exports.basicURLParse = function(e, a) {
    void 0 === a && (a = {});
    const n = new N(e, a.baseURL, a.encodingOverride, a.url, a.stateOverride);
    return n.failure ? "failure" : n.url;
}, module.exports.setTheUsername = function(e, a) {
    e.username = "";
    const n = t.ucs2.decode(a);
    for(let a = 0; a < n.length; ++a)e.username += C(n[a], f);
}, module.exports.setThePassword = function(e, a) {
    e.password = "";
    const n = t.ucs2.decode(a);
    for(let a = 0; a < n.length; ++a)e.password += C(n[a], f);
}, module.exports.serializeHost = y, module.exports.cannotHaveAUsernamePasswordPort = function(e) {
    return null === e.host || "" === e.host || e.cannotBeABaseURL || "file" === e.scheme;
}, module.exports.serializeInteger = function(e) {
    return String(e);
}, module.exports.parseURL = function(a, n) {
    return void 0 === n && (n = {}), module.exports.basicURLParse(a, {
        baseURL: n.baseURL,
        encodingOverride: n.encodingOverride
    });
};
