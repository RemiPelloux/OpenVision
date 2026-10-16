var n = require("./module-5613.js"), o = require("./module-9117.js"), i = require("./module-6881.js"), a = require("./module-8489.js"), u = require("./module-7509.js"), s = require("./module-8118.js"), c = require("./module-8873.js"), f = require("./module-286.js"), h = require("./module-4188.js"), l = require("./module-4318.js"), p = require("./module-831.js"), v = require("./module-5234.js"), d = require("./module-7283.js"), g = require("./module-3754.js"), y = require("./module-4166.js");
module.exports = function(t, r, e) {
    var w = -1 !== t.indexOf("Map"), x = -1 !== t.indexOf("Weak"), m = w ? "set" : "add", b = o[t], S = b && b.prototype, O = b, E = {}, R = function(t) {
        var r = i(S[t]);
        u(S, t, "add" === t ? function(t) {
            return r(this, 0 === t ? 0 : t), this;
        } : "delete" === t ? function(t) {
            return !(x && !p(t)) && r(this, 0 === t ? 0 : t);
        } : "get" === t ? function(t) {
            return x && !p(t) ? void 0 : r(this, 0 === t ? 0 : t);
        } : "has" === t ? function(t) {
            return !(x && !p(t)) && r(this, 0 === t ? 0 : t);
        } : function(t, e) {
            return r(this, 0 === t ? 0 : t, e), this;
        });
    };
    if (a(t, !h(b) || !(x || S.forEach && !v(function() {
        (new b).entries().next();
    })))) O = e.getConstructor(r, t, w, m), s.enable();
    else if (a(t, !0)) {
        var P = new O, j = P[m](x ? {} : -0, 1) !== P, k = v(function() {
            P.has(1);
        }), I = d(function(t) {
            new b(t);
        }), T = !x && v(function() {
            for(var t = new b, r = 5; r--;)t[m](r, r);
            return !t.has(-0);
        });
        I || ((O = r(function(t, r) {
            f(t, S);
            var e = y(new b, t, O);
            return l(r) || c(r, e[m], {
                that: e,
                AS_ENTRIES: w
            }), e;
        })).prototype = S, S.constructor = O), (k || T) && (R("delete"), R("has"), w && R("get")), (T || j) && R(m), x && S.clear && delete S.clear;
    }
    return E[t] = O, n({
        global: !0,
        constructor: !0,
        forced: O !== b
    }, E), g(O, t), x || e.setStrong(O, t, w), O;
};
