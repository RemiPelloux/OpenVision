import { a } from "./business-error.js";
import { Fd, g6 } from "./index_4.js";
import { Ew, Tw, kw, p6 } from "./utils.js";
function x1(e, t) {
    return y1(e) || b1(e, t) || v1(e, t) || g1();
}
function g1() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v1(e, t) {
    if (e) {
        if (typeof e == "string") return Vd(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vd(e, t);
    }
}
function Vd(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
    return n;
}
function b1(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [], n = !0, o = !1, i = void 0;
        try {
            for(var s = e[Symbol.iterator](), c; !(n = (c = s.next()).done) && (r.push(c.value), !(t && r.length === t)); n = !0);
        } catch (l) {
            o = !0, i = l;
        } finally{
            try {
                !n && s.return != null && s.return();
            } finally{
                if (o) throw i;
            }
        }
        return r;
    }
}
function y1(e) {
    if (Array.isArray(e)) return e;
}
function fi(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fi = a(function(r) {
        return typeof r;
    }, "_typeof") : fi = a(function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, "_typeof"), fi(e);
}
function Bd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable;
        })), r.push.apply(r, n);
    }
    return r;
}
function Ud(e) {
    for(var t = 1; t < arguments.length; t++){
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Bd(Object(r), !0).forEach(function(n) {
            w1(e, n, r[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
    }
    return e;
}
function w1(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}
function S1(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function jd(e, t) {
    for(var r = 0; r < t.length; r++){
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function E1(e, t, r) {
    return t && jd(e.prototype, t), r && jd(e, r), e;
}
function k1() {
    return {
        memoize: !0,
        memoizeFallback: !1,
        bindI18n: "",
        bindI18nStore: "",
        parseErrorHandler: a(function(t, r, n, o) {
            return n;
        }, "parseErrorHandler"),
        parseLngForICU: a(function(t) {
            return t;
        }, "parseLngForICU"),
        escapeVariables: !1
    };
}
var zd, T1;
export { Bd, E1, S1, T1, Ud, Vd, b1, fi, g1, jd, k1, v1, w1, x1, y1, zd };
var __wakaru_v6_initialized = false;
export function v6() {
if (__wakaru_v6_initialized) return;
__wakaru_v6_initialized = true;
p6(), g6(), a(x1, "_slicedToArray"), a(g1, "_nonIterableRest"), a(v1, "_unsupportedIterableToArray"), a(Vd, "_arrayLikeToArray"), a(b1, "_iterableToArrayLimit"), a(y1, "_arrayWithHoles"), a(fi, "_typeof"), a(Bd, "ownKeys"), a(Ud, "_objectSpread"), a(w1, "_defineProperty"), a(S1, "_classCallCheck"), a(jd, "_defineProperties"), a(E1, "_createClass"), a(k1, "getDefaults"), zd = (function() {
    function e(t) {
        S1(this, e), this.type = "i18nFormat", this.mem = {}, this.init(null, t);
    }
    return a(e, "ICU"), E1(e, [
        {
            key: "init",
            value: a(function(r, n) {
                var o = this, i = r && r.options && r.options.i18nFormat || {};
                if (this.options = Tw(i, n, this.options || {}, k1()), this.formats = this.options.formats, r) {
                    var s = this.options, c = s.bindI18n, l = s.bindI18nStore, m = s.memoize;
                    r.IntlMessageFormat = Fd, r.ICU = this, m && (c && r.on(c, function() {
                        return o.clearCache();
                    }), l && r.store.on(l, function() {
                        return o.clearCache();
                    }));
                }
            }, "init")
        },
        {
            key: "addUserDefinedFormats",
            value: a(function(r) {
                this.formats = this.formats ? Ud(Ud({}, this.formats), r) : r;
            }, "addUserDefinedFormats")
        },
        {
            key: "parse",
            value: a(function(r, n, o, i, s, c) {
                var l = c && c.resolved && c.resolved.res, m = this.options.memoize && "".concat(o, ".").concat(i, ".").concat(s.replace(/\./g, "###")), u;
                this.options.memoize && (u = kw(this.mem, m));
                try {
                    if (!u) {
                        var d = this.options.parseLngForICU(o);
                        u = new Fd(r, d, this.formats, {
                            ignoreTag: !0
                        }), this.options.memoize && (this.options.memoizeFallback || !c || l) && Ew(this.mem, m, u);
                    }
                    return u.format(this.escapeVariableValues(n));
                } catch (p) {
                    return this.options.parseErrorHandler(p, s, r, n);
                }
            }, "parse")
        },
        {
            key: "addLookupKeys",
            value: a(function(r, n, o, i, s) {
                return r;
            }, "addLookupKeys")
        },
        {
            key: "clearCache",
            value: a(function() {
                this.mem = {};
            }, "clearCache")
        },
        {
            key: "escapeVariableValues",
            value: a(function(r) {
                if (!this.options.escapeVariables || !r || fi(r) !== "object") return r;
                for(var n = {}, o = 0, i = Object.entries(r); o < i.length; o++){
                    var s = x1(i[o], 2), c = s[0], l = s[1];
                    typeof l == "string" ? n[c] = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") : n[c] = l;
                }
                return n;
            }, "escapeVariableValues")
        }
    ]), e;
})(), zd.type = "i18nFormat", T1 = zd;

}
