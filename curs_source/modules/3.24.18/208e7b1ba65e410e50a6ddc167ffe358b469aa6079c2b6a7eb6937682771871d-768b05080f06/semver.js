import { h } from "./tslib.es6.js";
var cf, Je, UXe, xXe, Kge, FXe, WXe, BXe, GXe, VXe, $Xe, jXe, zge, Yge, HXe, qXe, Jge, KXe, zXe, YXe, JXe, XXe, QXe, ZXe, eQe, tQe, nQe, rQe, sQe, iQe, aQe, oQe, cQe, lQe, dQe, uQe, mQe, pQe, hQe;
export { $Xe, BXe, FXe, GXe, HXe, JXe, Je, Jge, KXe, Kge, QXe, UXe, VXe, WXe, XXe, YXe, Yge, ZXe, aQe, cQe, cf, dQe, eQe, hQe, iQe, jXe, lQe, mQe, nQe, oQe, pQe, qXe, rQe, sQe, tQe, uQe, xXe, zXe, zge };
var __wakaru_t2_initialized = false;
export function t2() {
if (__wakaru_t2_initialized) return;
__wakaru_t2_initialized = true;
"use strict";
h(), cf = {}, Je = {
    exports: cf
}, (function(e, t) {
    if (typeof cf == "object" && typeof Je == "object") Je.exports = t();
    else if (typeof define == "function" && define.amd) define([], t);
    else {
        var n = t();
        for(var r in n)(typeof cf == "object" ? cf : e)[r] = n[r];
    }
})(Object(typeof self < "u" ? self : void 0), ()=>{
    return e = {
        97 (n, r, s) {
            n.exports = s(345);
        },
        345 (n, r) {
            var s;
            r = n.exports = y, s = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? function() {
                var R = Array.prototype.slice.call(arguments, 0);
                R.unshift("SEMVER"), console.log.apply(console, R);
            } : function() {}, r.SEMVER_SPEC_VERSION = "2.0.0";
            var i = Number.MAX_SAFE_INTEGER || 9007199254740991, a = r.re = [], o = r.safeRe = [], l = r.src = [], d = r.tokens = {}, u = 0;
            function m(R) {
                d[R] = u++;
            }
            var f = "[a-zA-Z0-9-]", v = [
                [
                    "\\s",
                    1
                ],
                [
                    "\\d",
                    256
                ],
                [
                    f,
                    250
                ]
            ];
            function T(R) {
                for(var A = 0; A < v.length; A++){
                    var M = v[A][0], Y = v[A][1];
                    R = R.split(M + "*").join(M + "{0," + Y + "}").split(M + "+").join(M + "{1," + Y + "}");
                }
                return R;
            }
            m("NUMERICIDENTIFIER"), l[d.NUMERICIDENTIFIER] = "0|[1-9]\\d*", m("NUMERICIDENTIFIERLOOSE"), l[d.NUMERICIDENTIFIERLOOSE] = "\\d+", m("NONNUMERICIDENTIFIER"), l[d.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-]" + f + "*", m("MAINVERSION"), l[d.MAINVERSION] = "(" + l[d.NUMERICIDENTIFIER] + ")\\.(" + l[d.NUMERICIDENTIFIER] + ")\\.(" + l[d.NUMERICIDENTIFIER] + ")", m("MAINVERSIONLOOSE"), l[d.MAINVERSIONLOOSE] = "(" + l[d.NUMERICIDENTIFIERLOOSE] + ")\\.(" + l[d.NUMERICIDENTIFIERLOOSE] + ")\\.(" + l[d.NUMERICIDENTIFIERLOOSE] + ")", m("PRERELEASEIDENTIFIER"), l[d.PRERELEASEIDENTIFIER] = "(?:" + l[d.NUMERICIDENTIFIER] + "|" + l[d.NONNUMERICIDENTIFIER] + ")", m("PRERELEASEIDENTIFIERLOOSE"), l[d.PRERELEASEIDENTIFIERLOOSE] = "(?:" + l[d.NUMERICIDENTIFIERLOOSE] + "|" + l[d.NONNUMERICIDENTIFIER] + ")", m("PRERELEASE"), l[d.PRERELEASE] = "(?:-(" + l[d.PRERELEASEIDENTIFIER] + "(?:\\." + l[d.PRERELEASEIDENTIFIER] + ")*))", m("PRERELEASELOOSE"), l[d.PRERELEASELOOSE] = "(?:-?(" + l[d.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + l[d.PRERELEASEIDENTIFIERLOOSE] + ")*))", m("BUILDIDENTIFIER"), l[d.BUILDIDENTIFIER] = f + "+", m("BUILD"), l[d.BUILD] = "(?:\\+(" + l[d.BUILDIDENTIFIER] + "(?:\\." + l[d.BUILDIDENTIFIER] + ")*))", m("FULL"), m("FULLPLAIN"), l[d.FULLPLAIN] = "v?" + l[d.MAINVERSION] + l[d.PRERELEASE] + "?" + l[d.BUILD] + "?", l[d.FULL] = "^" + l[d.FULLPLAIN] + "$", m("LOOSEPLAIN"), l[d.LOOSEPLAIN] = "[v=\\s]*" + l[d.MAINVERSIONLOOSE] + l[d.PRERELEASELOOSE] + "?" + l[d.BUILD] + "?", m("LOOSE"), l[d.LOOSE] = "^" + l[d.LOOSEPLAIN] + "$", m("GTLT"), l[d.GTLT] = "((?:<|>)?=?)", m("XRANGEIDENTIFIERLOOSE"), l[d.XRANGEIDENTIFIERLOOSE] = l[d.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*", m("XRANGEIDENTIFIER"), l[d.XRANGEIDENTIFIER] = l[d.NUMERICIDENTIFIER] + "|x|X|\\*", m("XRANGEPLAIN"), l[d.XRANGEPLAIN] = "[v=\\s]*(" + l[d.XRANGEIDENTIFIER] + ")(?:\\.(" + l[d.XRANGEIDENTIFIER] + ")(?:\\.(" + l[d.XRANGEIDENTIFIER] + ")(?:" + l[d.PRERELEASE] + ")?" + l[d.BUILD] + "?)?)?", m("XRANGEPLAINLOOSE"), l[d.XRANGEPLAINLOOSE] = "[v=\\s]*(" + l[d.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + l[d.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + l[d.XRANGEIDENTIFIERLOOSE] + ")(?:" + l[d.PRERELEASELOOSE] + ")?" + l[d.BUILD] + "?)?)?", m("XRANGE"), l[d.XRANGE] = "^" + l[d.GTLT] + "\\s*" + l[d.XRANGEPLAIN] + "$", m("XRANGELOOSE"), l[d.XRANGELOOSE] = "^" + l[d.GTLT] + "\\s*" + l[d.XRANGEPLAINLOOSE] + "$", m("COERCE"), l[d.COERCE] = "(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])", m("COERCERTL"), a[d.COERCERTL] = new RegExp(l[d.COERCE], "g"), o[d.COERCERTL] = new RegExp(T(l[d.COERCE]), "g"), m("LONETILDE"), l[d.LONETILDE] = "(?:~>?)", m("TILDETRIM"), l[d.TILDETRIM] = "(\\s*)" + l[d.LONETILDE] + "\\s+", a[d.TILDETRIM] = new RegExp(l[d.TILDETRIM], "g"), o[d.TILDETRIM] = new RegExp(T(l[d.TILDETRIM]), "g"), m("TILDE"), l[d.TILDE] = "^" + l[d.LONETILDE] + l[d.XRANGEPLAIN] + "$", m("TILDELOOSE"), l[d.TILDELOOSE] = "^" + l[d.LONETILDE] + l[d.XRANGEPLAINLOOSE] + "$", m("LONECARET"), l[d.LONECARET] = "(?:\\^)", m("CARETTRIM"), l[d.CARETTRIM] = "(\\s*)" + l[d.LONECARET] + "\\s+", a[d.CARETTRIM] = new RegExp(l[d.CARETTRIM], "g"), o[d.CARETTRIM] = new RegExp(T(l[d.CARETTRIM]), "g"), m("CARET"), l[d.CARET] = "^" + l[d.LONECARET] + l[d.XRANGEPLAIN] + "$", m("CARETLOOSE"), l[d.CARETLOOSE] = "^" + l[d.LONECARET] + l[d.XRANGEPLAINLOOSE] + "$", m("COMPARATORLOOSE"), l[d.COMPARATORLOOSE] = "^" + l[d.GTLT] + "\\s*(" + l[d.LOOSEPLAIN] + ")$|^$", m("COMPARATOR"), l[d.COMPARATOR] = "^" + l[d.GTLT] + "\\s*(" + l[d.FULLPLAIN] + ")$|^$", m("COMPARATORTRIM"), l[d.COMPARATORTRIM] = "(\\s*)" + l[d.GTLT] + "\\s*(" + l[d.LOOSEPLAIN] + "|" + l[d.XRANGEPLAIN] + ")", a[d.COMPARATORTRIM] = new RegExp(l[d.COMPARATORTRIM], "g"), o[d.COMPARATORTRIM] = new RegExp(T(l[d.COMPARATORTRIM]), "g"), m("HYPHENRANGE"), l[d.HYPHENRANGE] = "^\\s*(" + l[d.XRANGEPLAIN] + ")\\s+-\\s+(" + l[d.XRANGEPLAIN] + ")\\s*$", m("HYPHENRANGELOOSE"), l[d.HYPHENRANGELOOSE] = "^\\s*(" + l[d.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + l[d.XRANGEPLAINLOOSE] + ")\\s*$", m("STAR"), l[d.STAR] = "(<|>)?=?\\s*\\*";
            for(var S = 0; S < u; S++)s(S, l[S]), a[S] || (a[S] = new RegExp(l[S]), o[S] = new RegExp(T(l[S])));
            function k(R, A) {
                if (A && typeof A == "object" || (A = {
                    loose: !!A,
                    includePrerelease: !1
                }), R instanceof y) return R;
                if (typeof R != "string" || R.length > 256 || !(A.loose ? o[d.LOOSE] : o[d.FULL]).test(R)) return null;
                try {
                    return new y(R, A);
                } catch  {
                    return null;
                }
            }
            function y(R, A) {
                if (A && typeof A == "object" || (A = {
                    loose: !!A,
                    includePrerelease: !1
                }), R instanceof y) {
                    if (R.loose === A.loose) return R;
                    R = R.version;
                } else if (typeof R != "string") throw new TypeError("Invalid Version: " + R);
                if (R.length > 256) throw new TypeError("version is longer than 256 characters");
                if (!(this instanceof y)) return new y(R, A);
                s("SemVer", R, A), this.options = A, this.loose = !!A.loose;
                var M = R.trim().match(A.loose ? o[d.LOOSE] : o[d.FULL]);
                if (!M) throw new TypeError("Invalid Version: " + R);
                if (this.raw = R, this.major = +M[1], this.minor = +M[2], this.patch = +M[3], this.major > i || this.major < 0) throw new TypeError("Invalid major version");
                if (this.minor > i || this.minor < 0) throw new TypeError("Invalid minor version");
                if (this.patch > i || this.patch < 0) throw new TypeError("Invalid patch version");
                M[4] ? this.prerelease = M[4].split(".").map(function(Y) {
                    if (/^[0-9]+$/.test(Y)) {
                        var Me = +Y;
                        if (Me >= 0 && Me < i) return Me;
                    }
                    return Y;
                }) : this.prerelease = [], this.build = M[5] ? M[5].split(".") : [], this.format();
            }
            r.parse = k, r.valid = function(R, A) {
                var M = k(R, A);
                return M ? M.version : null;
            }, r.clean = function(R, A) {
                var M = k(R.trim().replace(/^[=v]+/, ""), A);
                return M ? M.version : null;
            }, r.SemVer = y, y.prototype.format = function() {
                return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version;
            }, y.prototype.toString = function() {
                return this.version;
            }, y.prototype.compare = function(R) {
                return s("SemVer.compare", this.version, this.options, R), R instanceof y || (R = new y(R, this.options)), this.compareMain(R) || this.comparePre(R);
            }, y.prototype.compareMain = function(R) {
                return R instanceof y || (R = new y(R, this.options)), I(this.major, R.major) || I(this.minor, R.minor) || I(this.patch, R.patch);
            }, y.prototype.comparePre = function(R) {
                if (R instanceof y || (R = new y(R, this.options)), this.prerelease.length && !R.prerelease.length) return -1;
                if (!this.prerelease.length && R.prerelease.length) return 1;
                if (!this.prerelease.length && !R.prerelease.length) return 0;
                var A = 0;
                do {
                    var M = this.prerelease[A], Y = R.prerelease[A];
                    if (s("prerelease compare", A, M, Y), M === void 0 && Y === void 0) return 0;
                    if (Y === void 0) return 1;
                    if (M === void 0) return -1;
                    if (M !== Y) return I(M, Y);
                }while (++A)
            }, y.prototype.compareBuild = function(R) {
                R instanceof y || (R = new y(R, this.options));
                var A = 0;
                do {
                    var M = this.build[A], Y = R.build[A];
                    if (s("prerelease compare", A, M, Y), M === void 0 && Y === void 0) return 0;
                    if (Y === void 0) return 1;
                    if (M === void 0) return -1;
                    if (M !== Y) return I(M, Y);
                }while (++A)
            }, y.prototype.inc = function(R, A) {
                switch(R){
                    case "premajor":
                        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", A);
                        break;
                    case "preminor":
                        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", A);
                        break;
                    case "prepatch":
                        this.prerelease.length = 0, this.inc("patch", A), this.inc("pre", A);
                        break;
                    case "prerelease":
                        this.prerelease.length === 0 && this.inc("patch", A), this.inc("pre", A);
                        break;
                    case "major":
                        this.minor === 0 && this.patch === 0 && this.prerelease.length !== 0 || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                        break;
                    case "minor":
                        this.patch === 0 && this.prerelease.length !== 0 || this.minor++, this.patch = 0, this.prerelease = [];
                        break;
                    case "patch":
                        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                        break;
                    case "pre":
                        if (this.prerelease.length === 0) this.prerelease = [
                            0
                        ];
                        else {
                            for(var M = this.prerelease.length; --M >= 0;)typeof this.prerelease[M] == "number" && (this.prerelease[M]++, M = -2);
                            M === -1 && this.prerelease.push(0);
                        }
                        A && (this.prerelease[0] === A ? isNaN(this.prerelease[1]) && (this.prerelease = [
                            A,
                            0
                        ]) : this.prerelease = [
                            A,
                            0
                        ]);
                        break;
                    default:
                        throw new Error("invalid increment argument: " + R);
                }
                return this.format(), this.raw = this.version, this;
            }, r.inc = function(R, A, M, Y) {
                typeof M == "string" && (Y = M, M = void 0);
                try {
                    return new y(R, M).inc(A, Y).version;
                } catch  {
                    return null;
                }
            }, r.diff = function(R, A) {
                if (W(R, A)) return null;
                var M = k(R), Y = k(A), Me = "";
                if (M.prerelease.length || Y.prerelease.length) {
                    Me = "pre";
                    var Xe = "prerelease";
                }
                for(var Ge in M)if ((Ge === "major" || Ge === "minor" || Ge === "patch") && M[Ge] !== Y[Ge]) return Me + Ge;
                return Xe;
            }, r.compareIdentifiers = I;
            var b = /^[0-9]+$/;
            function I(R, A) {
                var M = b.test(R), Y = b.test(A);
                return M && Y && (R = +R, A = +A), R === A ? 0 : M && !Y ? -1 : Y && !M ? 1 : R < A ? -1 : 1;
            }
            function G(R, A, M) {
                return new y(R, M).compare(new y(A, M));
            }
            function U(R, A, M) {
                return G(R, A, M) > 0;
            }
            function X(R, A, M) {
                return G(R, A, M) < 0;
            }
            function W(R, A, M) {
                return G(R, A, M) === 0;
            }
            function K(R, A, M) {
                return G(R, A, M) !== 0;
            }
            function H(R, A, M) {
                return G(R, A, M) >= 0;
            }
            function ue(R, A, M) {
                return G(R, A, M) <= 0;
            }
            function Ee(R, A, M, Y) {
                switch(A){
                    case "===":
                        return typeof R == "object" && (R = R.version), typeof M == "object" && (M = M.version), R === M;
                    case "!==":
                        return typeof R == "object" && (R = R.version), typeof M == "object" && (M = M.version), R !== M;
                    case "":
                    case "=":
                    case "==":
                        return W(R, M, Y);
                    case "!=":
                        return K(R, M, Y);
                    case ">":
                        return U(R, M, Y);
                    case ">=":
                        return H(R, M, Y);
                    case "<":
                        return X(R, M, Y);
                    case "<=":
                        return ue(R, M, Y);
                    default:
                        throw new TypeError("Invalid operator: " + A);
                }
            }
            function me(R, A) {
                if (A && typeof A == "object" || (A = {
                    loose: !!A,
                    includePrerelease: !1
                }), R instanceof me) {
                    if (R.loose === !!A.loose) return R;
                    R = R.value;
                }
                if (!(this instanceof me)) return new me(R, A);
                R = R.trim().split(/\s+/).join(" "), s("comparator", R, A), this.options = A, this.loose = !!A.loose, this.parse(R), this.semver === Nt ? this.value = "" : this.value = this.operator + this.semver.version, s("comp", this);
            }
            r.rcompareIdentifiers = function(R, A) {
                return I(A, R);
            }, r.major = function(R, A) {
                return new y(R, A).major;
            }, r.minor = function(R, A) {
                return new y(R, A).minor;
            }, r.patch = function(R, A) {
                return new y(R, A).patch;
            }, r.compare = G, r.compareLoose = function(R, A) {
                return G(R, A, !0);
            }, r.compareBuild = function(R, A, M) {
                var Y = new y(R, M), Me = new y(A, M);
                return Y.compare(Me) || Y.compareBuild(Me);
            }, r.rcompare = function(R, A, M) {
                return G(A, R, M);
            }, r.sort = function(R, A) {
                return R.sort(function(M, Y) {
                    return r.compareBuild(M, Y, A);
                });
            }, r.rsort = function(R, A) {
                return R.sort(function(M, Y) {
                    return r.compareBuild(Y, M, A);
                });
            }, r.gt = U, r.lt = X, r.eq = W, r.neq = K, r.gte = H, r.lte = ue, r.cmp = Ee, r.Comparator = me;
            var Nt = {};
            function Le(R, A) {
                if (A && typeof A == "object" || (A = {
                    loose: !!A,
                    includePrerelease: !1
                }), R instanceof Le) return R.loose === !!A.loose && R.includePrerelease === !!A.includePrerelease ? R : new Le(R.raw, A);
                if (R instanceof me) return new Le(R.value, A);
                if (!(this instanceof Le)) return new Le(R, A);
                if (this.options = A, this.loose = !!A.loose, this.includePrerelease = !!A.includePrerelease, this.raw = R.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map(function(M) {
                    return this.parseRange(M.trim());
                }, this).filter(function(M) {
                    return M.length;
                }), !this.set.length) throw new TypeError("Invalid SemVer Range: " + this.raw);
                this.format();
            }
            function re(R, A) {
                for(var M = !0, Y = R.slice(), Me = Y.pop(); M && Y.length;)M = Y.every(function(Xe) {
                    return Me.intersects(Xe, A);
                }), Me = Y.pop();
                return M;
            }
            function z(R) {
                return !R || R.toLowerCase() === "x" || R === "*";
            }
            function he(R, A, M, Y, Me, Xe, Ge, pn, zt, Pn, bs, an, Nn) {
                return ((A = z(M) ? "" : z(Y) ? ">=" + M + ".0.0" : z(Me) ? ">=" + M + "." + Y + ".0" : ">=" + A) + " " + (pn = z(zt) ? "" : z(Pn) ? "<" + (+zt + 1) + ".0.0" : z(bs) ? "<" + zt + "." + (+Pn + 1) + ".0" : an ? "<=" + zt + "." + Pn + "." + bs + "-" + an : "<=" + pn)).trim();
            }
            function de(R, A, M) {
                for(var Y = 0; Y < R.length; Y++)if (!R[Y].test(A)) return !1;
                if (A.prerelease.length && !M.includePrerelease) {
                    for(Y = 0; Y < R.length; Y++)if (s(R[Y].semver), R[Y].semver !== Nt && R[Y].semver.prerelease.length > 0) {
                        var Me = R[Y].semver;
                        if (Me.major === A.major && Me.minor === A.minor && Me.patch === A.patch) return !0;
                    }
                    return !1;
                }
                return !0;
            }
            function _e(R, A, M) {
                try {
                    A = new Le(A, M);
                } catch  {
                    return !1;
                }
                return A.test(R);
            }
            function ce(R, A, M, Y) {
                var Me, Xe, Ge, pn, zt;
                switch(R = new y(R, Y), A = new Le(A, Y), M){
                    case ">":
                        Me = U, Xe = ue, Ge = X, pn = ">", zt = ">=";
                        break;
                    case "<":
                        Me = X, Xe = H, Ge = U, pn = "<", zt = "<=";
                        break;
                    default:
                        throw new TypeError('Must provide a hilo val of "<" or ">"');
                }
                if (_e(R, A, Y)) return !1;
                for(var Pn = 0; Pn < A.set.length; ++Pn){
                    var bs = A.set[Pn], an = null, Nn = null;
                    if (bs.forEach(function(kr) {
                        kr.semver === Nt && (kr = new me(">=0.0.0")), an = an || kr, Nn = Nn || kr, Me(kr.semver, an.semver, Y) ? an = kr : Ge(kr.semver, Nn.semver, Y) && (Nn = kr);
                    }), an.operator === pn || an.operator === zt || (!Nn.operator || Nn.operator === pn) && Xe(R, Nn.semver) || Nn.operator === zt && Ge(R, Nn.semver)) return !1;
                }
                return !0;
            }
            me.prototype.parse = function(R) {
                var A = this.options.loose ? o[d.COMPARATORLOOSE] : o[d.COMPARATOR], M = R.match(A);
                if (!M) throw new TypeError("Invalid comparator: " + R);
                this.operator = M[1] !== void 0 ? M[1] : "", this.operator === "=" && (this.operator = ""), M[2] ? this.semver = new y(M[2], this.options.loose) : this.semver = Nt;
            }, me.prototype.toString = function() {
                return this.value;
            }, me.prototype.test = function(R) {
                if (s("Comparator.test", R, this.options.loose), this.semver === Nt || R === Nt) return !0;
                if (typeof R == "string") try {
                    R = new y(R, this.options);
                } catch  {
                    return !1;
                }
                return Ee(R, this.operator, this.semver, this.options);
            }, me.prototype.intersects = function(R, A) {
                if (!(R instanceof me)) throw new TypeError("a Comparator is required");
                var M;
                if (A && typeof A == "object" || (A = {
                    loose: !!A,
                    includePrerelease: !1
                }), this.operator === "") return this.value === "" || (M = new Le(R.value, A), _e(this.value, M, A));
                if (R.operator === "") return R.value === "" || (M = new Le(this.value, A), _e(R.semver, M, A));
                var Y = !(this.operator !== ">=" && this.operator !== ">" || R.operator !== ">=" && R.operator !== ">"), Me = !(this.operator !== "<=" && this.operator !== "<" || R.operator !== "<=" && R.operator !== "<"), Xe = this.semver.version === R.semver.version, Ge = !(this.operator !== ">=" && this.operator !== "<=" || R.operator !== ">=" && R.operator !== "<="), pn = Ee(this.semver, "<", R.semver, A) && (this.operator === ">=" || this.operator === ">") && (R.operator === "<=" || R.operator === "<"), zt = Ee(this.semver, ">", R.semver, A) && (this.operator === "<=" || this.operator === "<") && (R.operator === ">=" || R.operator === ">");
                return Y || Me || Xe && Ge || pn || zt;
            }, r.Range = Le, Le.prototype.format = function() {
                return this.range = this.set.map(function(R) {
                    return R.join(" ").trim();
                }).join("||").trim(), this.range;
            }, Le.prototype.toString = function() {
                return this.range;
            }, Le.prototype.parseRange = function(R) {
                var A = this.options.loose, M = A ? o[d.HYPHENRANGELOOSE] : o[d.HYPHENRANGE];
                R = R.replace(M, he), s("hyphen replace", R), R = R.replace(o[d.COMPARATORTRIM], "$1$2$3"), s("comparator trim", R, o[d.COMPARATORTRIM]), R = (R = (R = R.replace(o[d.TILDETRIM], "$1~")).replace(o[d.CARETTRIM], "$1^")).split(/\s+/).join(" ");
                var Y = A ? o[d.COMPARATORLOOSE] : o[d.COMPARATOR], Me = R.split(" ").map(function(Xe) {
                    return (function(Ge, pn) {
                        return s("comp", Ge, pn), Ge = (function(zt, Pn) {
                            return zt.trim().split(/\s+/).map(function(bs) {
                                return (function(an, Nn) {
                                    s("caret", an, Nn);
                                    var kr = Nn.loose ? o[d.CARETLOOSE] : o[d.CARET];
                                    return an.replace(kr, function(zr, Pe, ze, Dt, Dn) {
                                        var Ht;
                                        return s("caret", an, zr, Pe, ze, Dt, Dn), z(Pe) ? Ht = "" : z(ze) ? Ht = ">=" + Pe + ".0.0 <" + (+Pe + 1) + ".0.0" : z(Dt) ? Ht = Pe === "0" ? ">=" + Pe + "." + ze + ".0 <" + Pe + "." + (+ze + 1) + ".0" : ">=" + Pe + "." + ze + ".0 <" + (+Pe + 1) + ".0.0" : Dn ? (s("replaceCaret pr", Dn), Ht = Pe === "0" ? ze === "0" ? ">=" + Pe + "." + ze + "." + Dt + "-" + Dn + " <" + Pe + "." + ze + "." + (+Dt + 1) : ">=" + Pe + "." + ze + "." + Dt + "-" + Dn + " <" + Pe + "." + (+ze + 1) + ".0" : ">=" + Pe + "." + ze + "." + Dt + "-" + Dn + " <" + (+Pe + 1) + ".0.0") : (s("no pr"), Ht = Pe === "0" ? ze === "0" ? ">=" + Pe + "." + ze + "." + Dt + " <" + Pe + "." + ze + "." + (+Dt + 1) : ">=" + Pe + "." + ze + "." + Dt + " <" + Pe + "." + (+ze + 1) + ".0" : ">=" + Pe + "." + ze + "." + Dt + " <" + (+Pe + 1) + ".0.0"), s("caret return", Ht), Ht;
                                    });
                                })(bs, Pn);
                            }).join(" ");
                        })(Ge, pn), s("caret", Ge), Ge = (function(zt, Pn) {
                            return zt.trim().split(/\s+/).map(function(bs) {
                                return (function(an, Nn) {
                                    var kr = Nn.loose ? o[d.TILDELOOSE] : o[d.TILDE];
                                    return an.replace(kr, function(zr, Pe, ze, Dt, Dn) {
                                        var Ht;
                                        return s("tilde", an, zr, Pe, ze, Dt, Dn), z(Pe) ? Ht = "" : z(ze) ? Ht = ">=" + Pe + ".0.0 <" + (+Pe + 1) + ".0.0" : z(Dt) ? Ht = ">=" + Pe + "." + ze + ".0 <" + Pe + "." + (+ze + 1) + ".0" : Dn ? (s("replaceTilde pr", Dn), Ht = ">=" + Pe + "." + ze + "." + Dt + "-" + Dn + " <" + Pe + "." + (+ze + 1) + ".0") : Ht = ">=" + Pe + "." + ze + "." + Dt + " <" + Pe + "." + (+ze + 1) + ".0", s("tilde return", Ht), Ht;
                                    });
                                })(bs, Pn);
                            }).join(" ");
                        })(Ge, pn), s("tildes", Ge), Ge = (function(zt, Pn) {
                            return s("replaceXRanges", zt, Pn), zt.split(/\s+/).map(function(bs) {
                                return (function(an, Nn) {
                                    an = an.trim();
                                    var kr = Nn.loose ? o[d.XRANGELOOSE] : o[d.XRANGE];
                                    return an.replace(kr, function(zr, Pe, ze, Dt, Dn, Ht) {
                                        s("xRange", an, zr, Pe, ze, Dt, Dn, Ht);
                                        var Tv = z(ze), $o = Tv || z(Dt), kv = $o || z(Dn), Sv = kv;
                                        return Pe === "=" && Sv && (Pe = ""), Ht = Nn.includePrerelease ? "-0" : "", Tv ? zr = Pe === ">" || Pe === "<" ? "<0.0.0-0" : "*" : Pe && Sv ? ($o && (Dt = 0), Dn = 0, Pe === ">" ? (Pe = ">=", $o ? (ze = +ze + 1, Dt = 0, Dn = 0) : (Dt = +Dt + 1, Dn = 0)) : Pe === "<=" && (Pe = "<", $o ? ze = +ze + 1 : Dt = +Dt + 1), zr = Pe + ze + "." + Dt + "." + Dn + Ht) : $o ? zr = ">=" + ze + ".0.0" + Ht + " <" + (+ze + 1) + ".0.0" + Ht : kv && (zr = ">=" + ze + "." + Dt + ".0" + Ht + " <" + ze + "." + (+Dt + 1) + ".0" + Ht), s("xRange return", zr), zr;
                                    });
                                })(bs, Pn);
                            }).join(" ");
                        })(Ge, pn), s("xrange", Ge), Ge = (function(zt, Pn) {
                            return s("replaceStars", zt, Pn), zt.trim().replace(o[d.STAR], "");
                        })(Ge, pn), s("stars", Ge), Ge;
                    })(Xe, this.options);
                }, this).join(" ").split(/\s+/);
                return this.options.loose && (Me = Me.filter(function(Xe) {
                    return !!Xe.match(Y);
                })), Me.map(function(Xe) {
                    return new me(Xe, this.options);
                }, this);
            }, Le.prototype.intersects = function(R, A) {
                if (!(R instanceof Le)) throw new TypeError("a Range is required");
                return this.set.some(function(M) {
                    return re(M, A) && R.set.some(function(Y) {
                        return re(Y, A) && M.every(function(Me) {
                            return Y.every(function(Xe) {
                                return Me.intersects(Xe, A);
                            });
                        });
                    });
                });
            }, r.toComparators = function(R, A) {
                return new Le(R, A).set.map(function(M) {
                    return M.map(function(Y) {
                        return Y.value;
                    }).join(" ").trim().split(" ");
                });
            }, Le.prototype.test = function(R) {
                if (!R) return !1;
                if (typeof R == "string") try {
                    R = new y(R, this.options);
                } catch  {
                    return !1;
                }
                for(var A = 0; A < this.set.length; A++)if (de(this.set[A], R, this.options)) return !0;
                return !1;
            }, r.satisfies = _e, r.maxSatisfying = function(R, A, M) {
                var Y = null, Me = null;
                try {
                    var Xe = new Le(A, M);
                } catch  {
                    return null;
                }
                return R.forEach(function(Ge) {
                    Xe.test(Ge) && (Y && Me.compare(Ge) !== -1 || (Me = new y(Y = Ge, M)));
                }), Y;
            }, r.minSatisfying = function(R, A, M) {
                var Y = null, Me = null;
                try {
                    var Xe = new Le(A, M);
                } catch  {
                    return null;
                }
                return R.forEach(function(Ge) {
                    Xe.test(Ge) && (Y && Me.compare(Ge) !== 1 || (Me = new y(Y = Ge, M)));
                }), Y;
            }, r.minVersion = function(R, A) {
                R = new Le(R, A);
                var M = new y("0.0.0");
                if (R.test(M) || (M = new y("0.0.0-0"), R.test(M))) return M;
                M = null;
                for(var Y = 0; Y < R.set.length; ++Y)R.set[Y].forEach(function(Me) {
                    var Xe = new y(Me.semver.version);
                    switch(Me.operator){
                        case ">":
                            Xe.prerelease.length === 0 ? Xe.patch++ : Xe.prerelease.push(0), Xe.raw = Xe.format();
                        case "":
                        case ">=":
                            M && !U(M, Xe) || (M = Xe);
                            break;
                        case "<":
                        case "<=":
                            break;
                        default:
                            throw new Error("Unexpected operation: " + Me.operator);
                    }
                });
                return M && R.test(M) ? M : null;
            }, r.validRange = function(R, A) {
                try {
                    return new Le(R, A).range || "*";
                } catch  {
                    return null;
                }
            }, r.ltr = function(R, A, M) {
                return ce(R, A, "<", M);
            }, r.gtr = function(R, A, M) {
                return ce(R, A, ">", M);
            }, r.outside = ce, r.prerelease = function(R, A) {
                var M = k(R, A);
                return M && M.prerelease.length ? M.prerelease : null;
            }, r.intersects = function(R, A, M) {
                return R = new Le(R, M), A = new Le(A, M), R.intersects(A);
            }, r.coerce = function(R, A) {
                if (R instanceof y) return R;
                if (typeof R == "number" && (R = String(R)), typeof R != "string") return null;
                var M = null;
                if ((A = A || {}).rtl) {
                    for(var Y; (Y = o[d.COERCERTL].exec(R)) && (!M || M.index + M[0].length !== R.length);)M && Y.index + Y[0].length === M.index + M[0].length || (M = Y), o[d.COERCERTL].lastIndex = Y.index + Y[1].length + Y[2].length;
                    o[d.COERCERTL].lastIndex = -1;
                } else M = R.match(o[d.COERCE]);
                return M === null ? null : k(M[2] + "." + (M[3] || "0") + "." + (M[4] || "0"), A);
            };
        }
    }, t = {}, (function n(r) {
        var s = t[r];
        if (s !== void 0) return s.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n), i.exports;
    })(97);
    var e, t;
}), UXe = Je.exports.SEMVER_SPEC_VERSION, xXe = Je.exports.parse, Kge = Je.exports.valid, FXe = Je.exports.coerce, WXe = Je.exports.clean, BXe = Je.exports.inc, GXe = Je.exports.major, VXe = Je.exports.minor, $Xe = Je.exports.patch, jXe = Je.exports.prerelease, zge = Je.exports.gt, Yge = Je.exports.gte, HXe = Je.exports.lt, qXe = Je.exports.lte, Jge = Je.exports.eq, KXe = Je.exports.neq, zXe = Je.exports.cmp, YXe = Je.exports.compare, JXe = Je.exports.rcompare, XXe = Je.exports.compareIdentifiers, QXe = Je.exports.rcompareIdentifiers, ZXe = Je.exports.compareBuild, eQe = Je.exports.sort, tQe = Je.exports.rsort, nQe = Je.exports.diff, rQe = Je.exports.validRange, sQe = Je.exports.satisfies, iQe = Je.exports.maxSatisfying, aQe = Je.exports.minSatisfying, oQe = Je.exports.minVersion, cQe = Je.exports.gtr, lQe = Je.exports.ltr, dQe = Je.exports.outside, uQe = Je.exports.intersects, mQe = Je.exports.SemVer, pQe = Je.exports.Comparator, hQe = Je.exports.Range;

}
