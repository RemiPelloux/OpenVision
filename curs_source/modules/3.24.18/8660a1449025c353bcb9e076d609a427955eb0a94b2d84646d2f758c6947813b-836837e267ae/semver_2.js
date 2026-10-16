import { E } from "./tslib.es6.js";
var lRi, DE, B3k, JMg, _Kt, eDg, U3k, j3k, $3k, H3k, W3k, G3k, bKt, cRi, tDg, S_l, k_l, q3k, z3k, V3k, K3k, Y3k, X3k, Z3k, Q3k, J3k, eNk, tNk, jhs, nNk, iNk, rNk, sNk, oNk, aNk, lNk, cNk, uNk, dNk;
export { $3k, B3k, DE, G3k, H3k, J3k, JMg, K3k, Q3k, S_l, U3k, V3k, W3k, X3k, Y3k, Z3k, _Kt, aNk, bKt, cNk, cRi, dNk, eDg, eNk, iNk, j3k, jhs, k_l, lNk, lRi, nNk, oNk, q3k, rNk, sNk, tDg, tNk, uNk, z3k };
var __wakaru_$9e_initialized = false;
export function $9e() {
if (__wakaru_$9e_initialized) return;
__wakaru_$9e_initialized = true;
"use strict";
E(), lRi = {}, DE = {
    exports: lRi
}, (function(t, e) {
    if (typeof lRi == "object" && typeof DE == "object") DE.exports = e();
    else if (typeof define == "function" && define.amd) define([], e);
    else {
        var n = e();
        for(var i in n)(typeof lRi == "object" ? lRi : t)[i] = n[i];
    }
})(Object(typeof self < "u" ? self : void 0), ()=>{
    return t = {
        97 (n, i, r) {
            n.exports = r(345);
        },
        345 (n, i) {
            var r;
            i = n.exports = b, r = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? function() {
                var Y = Array.prototype.slice.call(arguments, 0);
                Y.unshift("SEMVER"), console.log.apply(console, Y);
            } : function() {}, i.SEMVER_SPEC_VERSION = "2.0.0";
            var s = Number.MAX_SAFE_INTEGER || 9007199254740991, o = i.re = [], a = i.safeRe = [], l = i.src = [], c = i.tokens = {}, u = 0;
            function d(Y) {
                c[Y] = u++;
            }
            var h = "[a-zA-Z0-9-]", p = [
                [
                    "\\s",
                    1
                ],
                [
                    "\\d",
                    256
                ],
                [
                    h,
                    250
                ]
            ];
            function g(Y) {
                for(var J = 0; J < p.length; J++){
                    var Q = p[J][0], te = p[J][1];
                    Y = Y.split(Q + "*").join(Q + "{0," + te + "}").split(Q + "+").join(Q + "{1," + te + "}");
                }
                return Y;
            }
            d("NUMERICIDENTIFIER"), l[c.NUMERICIDENTIFIER] = "0|[1-9]\\d*", d("NUMERICIDENTIFIERLOOSE"), l[c.NUMERICIDENTIFIERLOOSE] = "\\d+", d("NONNUMERICIDENTIFIER"), l[c.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-]" + h + "*", d("MAINVERSION"), l[c.MAINVERSION] = "(" + l[c.NUMERICIDENTIFIER] + ")\\.(" + l[c.NUMERICIDENTIFIER] + ")\\.(" + l[c.NUMERICIDENTIFIER] + ")", d("MAINVERSIONLOOSE"), l[c.MAINVERSIONLOOSE] = "(" + l[c.NUMERICIDENTIFIERLOOSE] + ")\\.(" + l[c.NUMERICIDENTIFIERLOOSE] + ")\\.(" + l[c.NUMERICIDENTIFIERLOOSE] + ")", d("PRERELEASEIDENTIFIER"), l[c.PRERELEASEIDENTIFIER] = "(?:" + l[c.NUMERICIDENTIFIER] + "|" + l[c.NONNUMERICIDENTIFIER] + ")", d("PRERELEASEIDENTIFIERLOOSE"), l[c.PRERELEASEIDENTIFIERLOOSE] = "(?:" + l[c.NUMERICIDENTIFIERLOOSE] + "|" + l[c.NONNUMERICIDENTIFIER] + ")", d("PRERELEASE"), l[c.PRERELEASE] = "(?:-(" + l[c.PRERELEASEIDENTIFIER] + "(?:\\." + l[c.PRERELEASEIDENTIFIER] + ")*))", d("PRERELEASELOOSE"), l[c.PRERELEASELOOSE] = "(?:-?(" + l[c.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + l[c.PRERELEASEIDENTIFIERLOOSE] + ")*))", d("BUILDIDENTIFIER"), l[c.BUILDIDENTIFIER] = h + "+", d("BUILD"), l[c.BUILD] = "(?:\\+(" + l[c.BUILDIDENTIFIER] + "(?:\\." + l[c.BUILDIDENTIFIER] + ")*))", d("FULL"), d("FULLPLAIN"), l[c.FULLPLAIN] = "v?" + l[c.MAINVERSION] + l[c.PRERELEASE] + "?" + l[c.BUILD] + "?", l[c.FULL] = "^" + l[c.FULLPLAIN] + "$", d("LOOSEPLAIN"), l[c.LOOSEPLAIN] = "[v=\\s]*" + l[c.MAINVERSIONLOOSE] + l[c.PRERELEASELOOSE] + "?" + l[c.BUILD] + "?", d("LOOSE"), l[c.LOOSE] = "^" + l[c.LOOSEPLAIN] + "$", d("GTLT"), l[c.GTLT] = "((?:<|>)?=?)", d("XRANGEIDENTIFIERLOOSE"), l[c.XRANGEIDENTIFIERLOOSE] = l[c.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*", d("XRANGEIDENTIFIER"), l[c.XRANGEIDENTIFIER] = l[c.NUMERICIDENTIFIER] + "|x|X|\\*", d("XRANGEPLAIN"), l[c.XRANGEPLAIN] = "[v=\\s]*(" + l[c.XRANGEIDENTIFIER] + ")(?:\\.(" + l[c.XRANGEIDENTIFIER] + ")(?:\\.(" + l[c.XRANGEIDENTIFIER] + ")(?:" + l[c.PRERELEASE] + ")?" + l[c.BUILD] + "?)?)?", d("XRANGEPLAINLOOSE"), l[c.XRANGEPLAINLOOSE] = "[v=\\s]*(" + l[c.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + l[c.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + l[c.XRANGEIDENTIFIERLOOSE] + ")(?:" + l[c.PRERELEASELOOSE] + ")?" + l[c.BUILD] + "?)?)?", d("XRANGE"), l[c.XRANGE] = "^" + l[c.GTLT] + "\\s*" + l[c.XRANGEPLAIN] + "$", d("XRANGELOOSE"), l[c.XRANGELOOSE] = "^" + l[c.GTLT] + "\\s*" + l[c.XRANGEPLAINLOOSE] + "$", d("COERCE"), l[c.COERCE] = "(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])", d("COERCERTL"), o[c.COERCERTL] = new RegExp(l[c.COERCE], "g"), a[c.COERCERTL] = new RegExp(g(l[c.COERCE]), "g"), d("LONETILDE"), l[c.LONETILDE] = "(?:~>?)", d("TILDETRIM"), l[c.TILDETRIM] = "(\\s*)" + l[c.LONETILDE] + "\\s+", o[c.TILDETRIM] = new RegExp(l[c.TILDETRIM], "g"), a[c.TILDETRIM] = new RegExp(g(l[c.TILDETRIM]), "g"), d("TILDE"), l[c.TILDE] = "^" + l[c.LONETILDE] + l[c.XRANGEPLAIN] + "$", d("TILDELOOSE"), l[c.TILDELOOSE] = "^" + l[c.LONETILDE] + l[c.XRANGEPLAINLOOSE] + "$", d("LONECARET"), l[c.LONECARET] = "(?:\\^)", d("CARETTRIM"), l[c.CARETTRIM] = "(\\s*)" + l[c.LONECARET] + "\\s+", o[c.CARETTRIM] = new RegExp(l[c.CARETTRIM], "g"), a[c.CARETTRIM] = new RegExp(g(l[c.CARETTRIM]), "g"), d("CARET"), l[c.CARET] = "^" + l[c.LONECARET] + l[c.XRANGEPLAIN] + "$", d("CARETLOOSE"), l[c.CARETLOOSE] = "^" + l[c.LONECARET] + l[c.XRANGEPLAINLOOSE] + "$", d("COMPARATORLOOSE"), l[c.COMPARATORLOOSE] = "^" + l[c.GTLT] + "\\s*(" + l[c.LOOSEPLAIN] + ")$|^$", d("COMPARATOR"), l[c.COMPARATOR] = "^" + l[c.GTLT] + "\\s*(" + l[c.FULLPLAIN] + ")$|^$", d("COMPARATORTRIM"), l[c.COMPARATORTRIM] = "(\\s*)" + l[c.GTLT] + "\\s*(" + l[c.LOOSEPLAIN] + "|" + l[c.XRANGEPLAIN] + ")", o[c.COMPARATORTRIM] = new RegExp(l[c.COMPARATORTRIM], "g"), a[c.COMPARATORTRIM] = new RegExp(g(l[c.COMPARATORTRIM]), "g"), d("HYPHENRANGE"), l[c.HYPHENRANGE] = "^\\s*(" + l[c.XRANGEPLAIN] + ")\\s+-\\s+(" + l[c.XRANGEPLAIN] + ")\\s*$", d("HYPHENRANGELOOSE"), l[c.HYPHENRANGELOOSE] = "^\\s*(" + l[c.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + l[c.XRANGEPLAINLOOSE] + ")\\s*$", d("STAR"), l[c.STAR] = "(<|>)?=?\\s*\\*";
            for(var f = 0; f < u; f++)r(f, l[f]), o[f] || (o[f] = new RegExp(l[f]), a[f] = new RegExp(g(l[f])));
            function _(Y, J) {
                if (J && typeof J == "object" || (J = {
                    loose: !!J,
                    includePrerelease: !1
                }), Y instanceof b) return Y;
                if (typeof Y != "string" || Y.length > 256 || !(J.loose ? a[c.LOOSE] : a[c.FULL]).test(Y)) return null;
                try {
                    return new b(Y, J);
                } catch  {
                    return null;
                }
            }
            function b(Y, J) {
                if (J && typeof J == "object" || (J = {
                    loose: !!J,
                    includePrerelease: !1
                }), Y instanceof b) {
                    if (Y.loose === J.loose) return Y;
                    Y = Y.version;
                } else if (typeof Y != "string") throw new TypeError("Invalid Version: " + Y);
                if (Y.length > 256) throw new TypeError("version is longer than 256 characters");
                if (!(this instanceof b)) return new b(Y, J);
                r("SemVer", Y, J), this.options = J, this.loose = !!J.loose;
                var Q = Y.trim().match(J.loose ? a[c.LOOSE] : a[c.FULL]);
                if (!Q) throw new TypeError("Invalid Version: " + Y);
                if (this.raw = Y, this.major = +Q[1], this.minor = +Q[2], this.patch = +Q[3], this.major > s || this.major < 0) throw new TypeError("Invalid major version");
                if (this.minor > s || this.minor < 0) throw new TypeError("Invalid minor version");
                if (this.patch > s || this.patch < 0) throw new TypeError("Invalid patch version");
                Q[4] ? this.prerelease = Q[4].split(".").map(function(te) {
                    if (/^[0-9]+$/.test(te)) {
                        var ee = +te;
                        if (ee >= 0 && ee < s) return ee;
                    }
                    return te;
                }) : this.prerelease = [], this.build = Q[5] ? Q[5].split(".") : [], this.format();
            }
            i.parse = _, i.valid = function(Y, J) {
                var Q = _(Y, J);
                return Q ? Q.version : null;
            }, i.clean = function(Y, J) {
                var Q = _(Y.trim().replace(/^[=v]+/, ""), J);
                return Q ? Q.version : null;
            }, i.SemVer = b, b.prototype.format = function() {
                return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version;
            }, b.prototype.toString = function() {
                return this.version;
            }, b.prototype.compare = function(Y) {
                return r("SemVer.compare", this.version, this.options, Y), Y instanceof b || (Y = new b(Y, this.options)), this.compareMain(Y) || this.comparePre(Y);
            }, b.prototype.compareMain = function(Y) {
                return Y instanceof b || (Y = new b(Y, this.options)), S(this.major, Y.major) || S(this.minor, Y.minor) || S(this.patch, Y.patch);
            }, b.prototype.comparePre = function(Y) {
                if (Y instanceof b || (Y = new b(Y, this.options)), this.prerelease.length && !Y.prerelease.length) return -1;
                if (!this.prerelease.length && Y.prerelease.length) return 1;
                if (!this.prerelease.length && !Y.prerelease.length) return 0;
                var J = 0;
                do {
                    var Q = this.prerelease[J], te = Y.prerelease[J];
                    if (r("prerelease compare", J, Q, te), Q === void 0 && te === void 0) return 0;
                    if (te === void 0) return 1;
                    if (Q === void 0) return -1;
                    if (Q !== te) return S(Q, te);
                }while (++J)
            }, b.prototype.compareBuild = function(Y) {
                Y instanceof b || (Y = new b(Y, this.options));
                var J = 0;
                do {
                    var Q = this.build[J], te = Y.build[J];
                    if (r("prerelease compare", J, Q, te), Q === void 0 && te === void 0) return 0;
                    if (te === void 0) return 1;
                    if (Q === void 0) return -1;
                    if (Q !== te) return S(Q, te);
                }while (++J)
            }, b.prototype.inc = function(Y, J) {
                switch(Y){
                    case "premajor":
                        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", J);
                        break;
                    case "preminor":
                        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", J);
                        break;
                    case "prepatch":
                        this.prerelease.length = 0, this.inc("patch", J), this.inc("pre", J);
                        break;
                    case "prerelease":
                        this.prerelease.length === 0 && this.inc("patch", J), this.inc("pre", J);
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
                            for(var Q = this.prerelease.length; --Q >= 0;)typeof this.prerelease[Q] == "number" && (this.prerelease[Q]++, Q = -2);
                            Q === -1 && this.prerelease.push(0);
                        }
                        J && (this.prerelease[0] === J ? isNaN(this.prerelease[1]) && (this.prerelease = [
                            J,
                            0
                        ]) : this.prerelease = [
                            J,
                            0
                        ]);
                        break;
                    default:
                        throw new Error("invalid increment argument: " + Y);
                }
                return this.format(), this.raw = this.version, this;
            }, i.inc = function(Y, J, Q, te) {
                typeof Q == "string" && (te = Q, Q = void 0);
                try {
                    return new b(Y, Q).inc(J, te).version;
                } catch  {
                    return null;
                }
            }, i.diff = function(Y, J) {
                if (I(Y, J)) return null;
                var Q = _(Y), te = _(J), ee = "";
                if (Q.prerelease.length || te.prerelease.length) {
                    ee = "pre";
                    var re = "prerelease";
                }
                for(var ie in Q)if ((ie === "major" || ie === "minor" || ie === "patch") && Q[ie] !== te[ie]) return ee + ie;
                return re;
            }, i.compareIdentifiers = S;
            var y = /^[0-9]+$/;
            function S(Y, J) {
                var Q = y.test(Y), te = y.test(J);
                return Q && te && (Y = +Y, J = +J), Y === J ? 0 : Q && !te ? -1 : te && !Q ? 1 : Y < J ? -1 : 1;
            }
            function k(Y, J, Q) {
                return new b(Y, Q).compare(new b(J, Q));
            }
            function C(Y, J, Q) {
                return k(Y, J, Q) > 0;
            }
            function T(Y, J, Q) {
                return k(Y, J, Q) < 0;
            }
            function I(Y, J, Q) {
                return k(Y, J, Q) === 0;
            }
            function A(Y, J, Q) {
                return k(Y, J, Q) !== 0;
            }
            function P(Y, J, Q) {
                return k(Y, J, Q) >= 0;
            }
            function M(Y, J, Q) {
                return k(Y, J, Q) <= 0;
            }
            function O(Y, J, Q, te) {
                switch(J){
                    case "===":
                        return typeof Y == "object" && (Y = Y.version), typeof Q == "object" && (Q = Q.version), Y === Q;
                    case "!==":
                        return typeof Y == "object" && (Y = Y.version), typeof Q == "object" && (Q = Q.version), Y !== Q;
                    case "":
                    case "=":
                    case "==":
                        return I(Y, Q, te);
                    case "!=":
                        return A(Y, Q, te);
                    case ">":
                        return C(Y, Q, te);
                    case ">=":
                        return P(Y, Q, te);
                    case "<":
                        return T(Y, Q, te);
                    case "<=":
                        return M(Y, Q, te);
                    default:
                        throw new TypeError("Invalid operator: " + J);
                }
            }
            function N(Y, J) {
                if (J && typeof J == "object" || (J = {
                    loose: !!J,
                    includePrerelease: !1
                }), Y instanceof N) {
                    if (Y.loose === !!J.loose) return Y;
                    Y = Y.value;
                }
                if (!(this instanceof N)) return new N(Y, J);
                Y = Y.trim().split(/\s+/).join(" "), r("comparator", Y, J), this.options = J, this.loose = !!J.loose, this.parse(Y), this.semver === U ? this.value = "" : this.value = this.operator + this.semver.version, r("comp", this);
            }
            i.rcompareIdentifiers = function(Y, J) {
                return S(J, Y);
            }, i.major = function(Y, J) {
                return new b(Y, J).major;
            }, i.minor = function(Y, J) {
                return new b(Y, J).minor;
            }, i.patch = function(Y, J) {
                return new b(Y, J).patch;
            }, i.compare = k, i.compareLoose = function(Y, J) {
                return k(Y, J, !0);
            }, i.compareBuild = function(Y, J, Q) {
                var te = new b(Y, Q), ee = new b(J, Q);
                return te.compare(ee) || te.compareBuild(ee);
            }, i.rcompare = function(Y, J, Q) {
                return k(J, Y, Q);
            }, i.sort = function(Y, J) {
                return Y.sort(function(Q, te) {
                    return i.compareBuild(Q, te, J);
                });
            }, i.rsort = function(Y, J) {
                return Y.sort(function(Q, te) {
                    return i.compareBuild(te, Q, J);
                });
            }, i.gt = C, i.lt = T, i.eq = I, i.neq = A, i.gte = P, i.lte = M, i.cmp = O, i.Comparator = N;
            var U = {};
            function j(Y, J) {
                if (J && typeof J == "object" || (J = {
                    loose: !!J,
                    includePrerelease: !1
                }), Y instanceof j) return Y.loose === !!J.loose && Y.includePrerelease === !!J.includePrerelease ? Y : new j(Y.raw, J);
                if (Y instanceof N) return new j(Y.value, J);
                if (!(this instanceof j)) return new j(Y, J);
                if (this.options = J, this.loose = !!J.loose, this.includePrerelease = !!J.includePrerelease, this.raw = Y.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map(function(Q) {
                    return this.parseRange(Q.trim());
                }, this).filter(function(Q) {
                    return Q.length;
                }), !this.set.length) throw new TypeError("Invalid SemVer Range: " + this.raw);
                this.format();
            }
            function $(Y, J) {
                for(var Q = !0, te = Y.slice(), ee = te.pop(); Q && te.length;)Q = te.every(function(re) {
                    return ee.intersects(re, J);
                }), ee = te.pop();
                return Q;
            }
            function H(Y) {
                return !Y || Y.toLowerCase() === "x" || Y === "*";
            }
            function G(Y, J, Q, te, ee, re, ie, oe, se, le, ce, ae, de) {
                return ((J = H(Q) ? "" : H(te) ? ">=" + Q + ".0.0" : H(ee) ? ">=" + Q + "." + te + ".0" : ">=" + J) + " " + (oe = H(se) ? "" : H(le) ? "<" + (+se + 1) + ".0.0" : H(ce) ? "<" + se + "." + (+le + 1) + ".0" : ae ? "<=" + se + "." + le + "." + ce + "-" + ae : "<=" + oe)).trim();
            }
            function q(Y, J, Q) {
                for(var te = 0; te < Y.length; te++)if (!Y[te].test(J)) return !1;
                if (J.prerelease.length && !Q.includePrerelease) {
                    for(te = 0; te < Y.length; te++)if (r(Y[te].semver), Y[te].semver !== U && Y[te].semver.prerelease.length > 0) {
                        var ee = Y[te].semver;
                        if (ee.major === J.major && ee.minor === J.minor && ee.patch === J.patch) return !0;
                    }
                    return !1;
                }
                return !0;
            }
            function K(Y, J, Q) {
                try {
                    J = new j(J, Q);
                } catch  {
                    return !1;
                }
                return J.test(Y);
            }
            function V(Y, J, Q, te) {
                var ee, re, ie, oe, se;
                switch(Y = new b(Y, te), J = new j(J, te), Q){
                    case ">":
                        ee = C, re = M, ie = T, oe = ">", se = ">=";
                        break;
                    case "<":
                        ee = T, re = P, ie = C, oe = "<", se = "<=";
                        break;
                    default:
                        throw new TypeError('Must provide a hilo val of "<" or ">"');
                }
                if (K(Y, J, te)) return !1;
                for(var le = 0; le < J.set.length; ++le){
                    var ce = J.set[le], ae = null, de = null;
                    if (ce.forEach(function(he) {
                        he.semver === U && (he = new N(">=0.0.0")), ae = ae || he, de = de || he, ee(he.semver, ae.semver, te) ? ae = he : ie(he.semver, de.semver, te) && (de = he);
                    }), ae.operator === oe || ae.operator === se || (!de.operator || de.operator === oe) && re(Y, de.semver) || de.operator === se && ie(Y, de.semver)) return !1;
                }
                return !0;
            }
            N.prototype.parse = function(Y) {
                var J = this.options.loose ? a[c.COMPARATORLOOSE] : a[c.COMPARATOR], Q = Y.match(J);
                if (!Q) throw new TypeError("Invalid comparator: " + Y);
                this.operator = Q[1] !== void 0 ? Q[1] : "", this.operator === "=" && (this.operator = ""), Q[2] ? this.semver = new b(Q[2], this.options.loose) : this.semver = U;
            }, N.prototype.toString = function() {
                return this.value;
            }, N.prototype.test = function(Y) {
                if (r("Comparator.test", Y, this.options.loose), this.semver === U || Y === U) return !0;
                if (typeof Y == "string") try {
                    Y = new b(Y, this.options);
                } catch  {
                    return !1;
                }
                return O(Y, this.operator, this.semver, this.options);
            }, N.prototype.intersects = function(Y, J) {
                if (!(Y instanceof N)) throw new TypeError("a Comparator is required");
                var Q;
                if (J && typeof J == "object" || (J = {
                    loose: !!J,
                    includePrerelease: !1
                }), this.operator === "") return this.value === "" || (Q = new j(Y.value, J), K(this.value, Q, J));
                if (Y.operator === "") return Y.value === "" || (Q = new j(this.value, J), K(Y.semver, Q, J));
                var te = !(this.operator !== ">=" && this.operator !== ">" || Y.operator !== ">=" && Y.operator !== ">"), ee = !(this.operator !== "<=" && this.operator !== "<" || Y.operator !== "<=" && Y.operator !== "<"), re = this.semver.version === Y.semver.version, ie = !(this.operator !== ">=" && this.operator !== "<=" || Y.operator !== ">=" && Y.operator !== "<="), oe = O(this.semver, "<", Y.semver, J) && (this.operator === ">=" || this.operator === ">") && (Y.operator === "<=" || Y.operator === "<"), se = O(this.semver, ">", Y.semver, J) && (this.operator === "<=" || this.operator === "<") && (Y.operator === ">=" || Y.operator === ">");
                return te || ee || re && ie || oe || se;
            }, i.Range = j, j.prototype.format = function() {
                return this.range = this.set.map(function(Y) {
                    return Y.join(" ").trim();
                }).join("||").trim(), this.range;
            }, j.prototype.toString = function() {
                return this.range;
            }, j.prototype.parseRange = function(Y) {
                var J = this.options.loose, Q = J ? a[c.HYPHENRANGELOOSE] : a[c.HYPHENRANGE];
                Y = Y.replace(Q, G), r("hyphen replace", Y), Y = Y.replace(a[c.COMPARATORTRIM], "$1$2$3"), r("comparator trim", Y, a[c.COMPARATORTRIM]), Y = (Y = (Y = Y.replace(a[c.TILDETRIM], "$1~")).replace(a[c.CARETTRIM], "$1^")).split(/\s+/).join(" ");
                var te = J ? a[c.COMPARATORLOOSE] : a[c.COMPARATOR], ee = Y.split(" ").map(function(re) {
                    return (function(ie, oe) {
                        return r("comp", ie, oe), ie = (function(se, le) {
                            return se.trim().split(/\s+/).map(function(ce) {
                                return (function(ae, de) {
                                    r("caret", ae, de);
                                    var he = de.loose ? a[c.CARETLOOSE] : a[c.CARET];
                                    return ae.replace(he, function(ge, pe, ve, fe, Te) {
                                        var _e;
                                        return r("caret", ae, ge, pe, ve, fe, Te), H(pe) ? _e = "" : H(ve) ? _e = ">=" + pe + ".0.0 <" + (+pe + 1) + ".0.0" : H(fe) ? _e = pe === "0" ? ">=" + pe + "." + ve + ".0 <" + pe + "." + (+ve + 1) + ".0" : ">=" + pe + "." + ve + ".0 <" + (+pe + 1) + ".0.0" : Te ? (r("replaceCaret pr", Te), _e = pe === "0" ? ve === "0" ? ">=" + pe + "." + ve + "." + fe + "-" + Te + " <" + pe + "." + ve + "." + (+fe + 1) : ">=" + pe + "." + ve + "." + fe + "-" + Te + " <" + pe + "." + (+ve + 1) + ".0" : ">=" + pe + "." + ve + "." + fe + "-" + Te + " <" + (+pe + 1) + ".0.0") : (r("no pr"), _e = pe === "0" ? ve === "0" ? ">=" + pe + "." + ve + "." + fe + " <" + pe + "." + ve + "." + (+fe + 1) : ">=" + pe + "." + ve + "." + fe + " <" + pe + "." + (+ve + 1) + ".0" : ">=" + pe + "." + ve + "." + fe + " <" + (+pe + 1) + ".0.0"), r("caret return", _e), _e;
                                    });
                                })(ce, le);
                            }).join(" ");
                        })(ie, oe), r("caret", ie), ie = (function(se, le) {
                            return se.trim().split(/\s+/).map(function(ce) {
                                return (function(ae, de) {
                                    var he = de.loose ? a[c.TILDELOOSE] : a[c.TILDE];
                                    return ae.replace(he, function(ge, pe, ve, fe, Te) {
                                        var _e;
                                        return r("tilde", ae, ge, pe, ve, fe, Te), H(pe) ? _e = "" : H(ve) ? _e = ">=" + pe + ".0.0 <" + (+pe + 1) + ".0.0" : H(fe) ? _e = ">=" + pe + "." + ve + ".0 <" + pe + "." + (+ve + 1) + ".0" : Te ? (r("replaceTilde pr", Te), _e = ">=" + pe + "." + ve + "." + fe + "-" + Te + " <" + pe + "." + (+ve + 1) + ".0") : _e = ">=" + pe + "." + ve + "." + fe + " <" + pe + "." + (+ve + 1) + ".0", r("tilde return", _e), _e;
                                    });
                                })(ce, le);
                            }).join(" ");
                        })(ie, oe), r("tildes", ie), ie = (function(se, le) {
                            return r("replaceXRanges", se, le), se.split(/\s+/).map(function(ce) {
                                return (function(ae, de) {
                                    ae = ae.trim();
                                    var he = de.loose ? a[c.XRANGELOOSE] : a[c.XRANGE];
                                    return ae.replace(he, function(ge, pe, ve, fe, Te, _e) {
                                        r("xRange", ae, ge, pe, ve, fe, Te, _e);
                                        var Ce = H(ve), Se = Ce || H(fe), Pe = Se || H(Te), we = Pe;
                                        return pe === "=" && we && (pe = ""), _e = de.includePrerelease ? "-0" : "", Ce ? ge = pe === ">" || pe === "<" ? "<0.0.0-0" : "*" : pe && we ? (Se && (fe = 0), Te = 0, pe === ">" ? (pe = ">=", Se ? (ve = +ve + 1, fe = 0, Te = 0) : (fe = +fe + 1, Te = 0)) : pe === "<=" && (pe = "<", Se ? ve = +ve + 1 : fe = +fe + 1), ge = pe + ve + "." + fe + "." + Te + _e) : Se ? ge = ">=" + ve + ".0.0" + _e + " <" + (+ve + 1) + ".0.0" + _e : Pe && (ge = ">=" + ve + "." + fe + ".0" + _e + " <" + ve + "." + (+fe + 1) + ".0" + _e), r("xRange return", ge), ge;
                                    });
                                })(ce, le);
                            }).join(" ");
                        })(ie, oe), r("xrange", ie), ie = (function(se, le) {
                            return r("replaceStars", se, le), se.trim().replace(a[c.STAR], "");
                        })(ie, oe), r("stars", ie), ie;
                    })(re, this.options);
                }, this).join(" ").split(/\s+/);
                return this.options.loose && (ee = ee.filter(function(re) {
                    return !!re.match(te);
                })), ee.map(function(re) {
                    return new N(re, this.options);
                }, this);
            }, j.prototype.intersects = function(Y, J) {
                if (!(Y instanceof j)) throw new TypeError("a Range is required");
                return this.set.some(function(Q) {
                    return $(Q, J) && Y.set.some(function(te) {
                        return $(te, J) && Q.every(function(ee) {
                            return te.every(function(re) {
                                return ee.intersects(re, J);
                            });
                        });
                    });
                });
            }, i.toComparators = function(Y, J) {
                return new j(Y, J).set.map(function(Q) {
                    return Q.map(function(te) {
                        return te.value;
                    }).join(" ").trim().split(" ");
                });
            }, j.prototype.test = function(Y) {
                if (!Y) return !1;
                if (typeof Y == "string") try {
                    Y = new b(Y, this.options);
                } catch  {
                    return !1;
                }
                for(var J = 0; J < this.set.length; J++)if (q(this.set[J], Y, this.options)) return !0;
                return !1;
            }, i.satisfies = K, i.maxSatisfying = function(Y, J, Q) {
                var te = null, ee = null;
                try {
                    var re = new j(J, Q);
                } catch  {
                    return null;
                }
                return Y.forEach(function(ie) {
                    re.test(ie) && (te && ee.compare(ie) !== -1 || (ee = new b(te = ie, Q)));
                }), te;
            }, i.minSatisfying = function(Y, J, Q) {
                var te = null, ee = null;
                try {
                    var re = new j(J, Q);
                } catch  {
                    return null;
                }
                return Y.forEach(function(ie) {
                    re.test(ie) && (te && ee.compare(ie) !== 1 || (ee = new b(te = ie, Q)));
                }), te;
            }, i.minVersion = function(Y, J) {
                Y = new j(Y, J);
                var Q = new b("0.0.0");
                if (Y.test(Q) || (Q = new b("0.0.0-0"), Y.test(Q))) return Q;
                Q = null;
                for(var te = 0; te < Y.set.length; ++te)Y.set[te].forEach(function(ee) {
                    var re = new b(ee.semver.version);
                    switch(ee.operator){
                        case ">":
                            re.prerelease.length === 0 ? re.patch++ : re.prerelease.push(0), re.raw = re.format();
                        case "":
                        case ">=":
                            Q && !C(Q, re) || (Q = re);
                            break;
                        case "<":
                        case "<=":
                            break;
                        default:
                            throw new Error("Unexpected operation: " + ee.operator);
                    }
                });
                return Q && Y.test(Q) ? Q : null;
            }, i.validRange = function(Y, J) {
                try {
                    return new j(Y, J).range || "*";
                } catch  {
                    return null;
                }
            }, i.ltr = function(Y, J, Q) {
                return V(Y, J, "<", Q);
            }, i.gtr = function(Y, J, Q) {
                return V(Y, J, ">", Q);
            }, i.outside = V, i.prerelease = function(Y, J) {
                var Q = _(Y, J);
                return Q && Q.prerelease.length ? Q.prerelease : null;
            }, i.intersects = function(Y, J, Q) {
                return Y = new j(Y, Q), J = new j(J, Q), Y.intersects(J);
            }, i.coerce = function(Y, J) {
                if (Y instanceof b) return Y;
                if (typeof Y == "number" && (Y = String(Y)), typeof Y != "string") return null;
                var Q = null;
                if ((J = J || {}).rtl) {
                    for(var te; (te = a[c.COERCERTL].exec(Y)) && (!Q || Q.index + Q[0].length !== Y.length);)Q && te.index + te[0].length === Q.index + Q[0].length || (Q = te), a[c.COERCERTL].lastIndex = te.index + te[1].length + te[2].length;
                    a[c.COERCERTL].lastIndex = -1;
                } else Q = Y.match(a[c.COERCE]);
                return Q === null ? null : _(Q[2] + "." + (Q[3] || "0") + "." + (Q[4] || "0"), J);
            };
        }
    }, e = {}, (function n(i) {
        var r = e[i];
        if (r !== void 0) return r.exports;
        var s = e[i] = {
            exports: {}
        };
        return t[i](s, s.exports, n), s.exports;
    })(97);
    var t, e;
}), B3k = DE.exports.SEMVER_SPEC_VERSION, JMg = DE.exports.parse, _Kt = DE.exports.valid, eDg = DE.exports.coerce, U3k = DE.exports.clean, j3k = DE.exports.inc, $3k = DE.exports.major, H3k = DE.exports.minor, W3k = DE.exports.patch, G3k = DE.exports.prerelease, bKt = DE.exports.gt, cRi = DE.exports.gte, tDg = DE.exports.lt, S_l = DE.exports.lte, k_l = DE.exports.eq, q3k = DE.exports.neq, z3k = DE.exports.cmp, V3k = DE.exports.compare, K3k = DE.exports.rcompare, Y3k = DE.exports.compareIdentifiers, X3k = DE.exports.rcompareIdentifiers, Z3k = DE.exports.compareBuild, Q3k = DE.exports.sort, J3k = DE.exports.rsort, eNk = DE.exports.diff, tNk = DE.exports.validRange, jhs = DE.exports.satisfies, nNk = DE.exports.maxSatisfying, iNk = DE.exports.minSatisfying, rNk = DE.exports.minVersion, sNk = DE.exports.gtr, oNk = DE.exports.ltr, aNk = DE.exports.outside, lNk = DE.exports.intersects, cNk = DE.exports.SemVer, uNk = DE.exports.Comparator, dNk = DE.exports.Range;

}
