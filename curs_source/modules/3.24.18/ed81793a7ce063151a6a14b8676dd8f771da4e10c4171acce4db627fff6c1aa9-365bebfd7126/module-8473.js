var n = require("./module-5613.js"), o = require("./module-6893.js"), i = require("./module-9117.js"), a = require("./module-5604.js"), u = require("./module-6881.js"), s = require("./module-9944.js"), c = require("./module-4188.js"), f = require("./module-831.js"), h = require("./module-6719.js"), l = require("./module-4418.js"), p = require("./module-2618.js"), v = require("./module-9389.js"), d = require("./module-4417.js"), g = require("./module-5234.js"), y = require("./module-4561.js"), w = require("./module-8944.js"), x = i.JSON, m = i.Number, b = i.SyntaxError, S = x && x.parse, O = a("Object", "keys"), E = Object.getOwnPropertyDescriptor, R = u("".charAt), P = u("".slice), j = u(/./.exec), k = u([].push), I = /^\d$/, T = /^[1-9]$/, A = /^[\d-]$/, L = /^[\t\n\r ]$/, N = function(t, r, e, n) {
    var o, i, a, u, c, p = t[r], d = n && p === n.value, g = d && "string" == typeof n.source ? {
        source: n.source
    } : {};
    if (f(p)) {
        var y = h(p), w = d ? n.nodes : y ? [] : {};
        if (y) for(o = w.length, a = v(p), u = 0; u < a; u++)U(p, u, N(p, "" + u, e, u < o ? w[u] : void 0));
        else for(i = O(p), a = v(i), u = 0; u < a; u++)c = i[u], U(p, c, N(p, c, e, l(w, c) ? w[c] : void 0));
    }
    return s(e, t, r, p, g);
}, U = function(t, r, e) {
    if (o) {
        var n = E(t, r);
        if (n && !n.configurable) return;
    }
    void 0 === e ? delete t[r] : d(t, r, e);
}, C = function(t, r, e, n) {
    this.value = t, this.end = r, this.source = e, this.nodes = n;
}, F = function(t, r) {
    this.source = t, this.index = r;
};
F.prototype = {
    fork: function(t) {
        return new F(this.source, t);
    },
    parse: function() {
        var t = this.source, r = this.skip(L, this.index), e = this.fork(r), n = R(t, r);
        if (j(A, n)) return e.number();
        switch(n){
            case "{":
                return e.object();
            case "[":
                return e.array();
            case '"':
                return e.string();
            case "t":
                return e.keyword(!0);
            case "f":
                return e.keyword(!1);
            case "n":
                return e.keyword(null);
        }
        throw new b('Unexpected character: "' + n + '" at: ' + r);
    },
    node: function(t, r, e, n, o) {
        return new C(r, n, t ? null : P(this.source, e, n), o);
    },
    object: function() {
        for(var t = this.source, r = this.index + 1, e = !1, n = {}, o = {}, i = !1; r < t.length;){
            if (r = this.until([
                '"',
                "}"
            ], r), "}" === R(t, r) && !e) {
                r++, i = !0;
                break;
            }
            var a = this.fork(r).string(), u = a.value;
            r = a.end, r = this.until([
                ":"
            ], r) + 1, r = this.skip(L, r), a = this.fork(r).parse(), d(o, u, a), d(n, u, a.value), r = this.until([
                ",",
                "}"
            ], a.end);
            var s = R(t, r);
            if ("," === s) e = !0, r++;
            else if ("}" === s) {
                r++, i = !0;
                break;
            }
        }
        if (!i) throw new b("Unterminated object at: " + r);
        return this.node(1, n, this.index, r, o);
    },
    array: function() {
        for(var t = this.source, r = this.index + 1, e = !1, n = [], o = [], i = !1; r < t.length;){
            if (r = this.skip(L, r), "]" === R(t, r) && !e) {
                r++, i = !0;
                break;
            }
            var a = this.fork(r).parse();
            if (k(o, a), k(n, a.value), r = this.until([
                ",",
                "]"
            ], a.end), "," === R(t, r)) e = !0, r++;
            else if ("]" === R(t, r)) {
                r++, i = !0;
                break;
            }
        }
        if (!i) throw new b("Unterminated array at: " + r);
        return this.node(1, n, this.index, r, o);
    },
    string: function() {
        var t = this.index, r = y(this.source, this.index + 1);
        return this.node(0, r.value, t, r.end);
    },
    number: function() {
        var t = this.source, r = this.index, e = r;
        if ("-" === R(t, e) && e++, "0" === R(t, e)) e++;
        else {
            if (!j(T, R(t, e))) throw new b("Failed to parse number at: " + e);
            e = this.skip(I, e + 1);
        }
        if ("." === R(t, e)) {
            var n = e + 1;
            if (n === (e = this.skip(I, n))) throw new b("Failed to parse number's fraction at: " + e);
        }
        if (("e" === R(t, e) || "E" === R(t, e)) && (e++, "+" !== R(t, e) && "-" !== R(t, e) || e++, e === (e = this.skip(I, e)))) throw new b("Failed to parse number's exponent value at: " + e);
        return this.node(0, m(P(t, r, e)), r, e);
    },
    keyword: function(t) {
        var r = "" + t, e = this.index, n = e + r.length;
        if (P(this.source, e, n) !== r) throw new b("Failed to parse value at: " + e);
        return this.node(0, t, e, n);
    },
    skip: function(t, r) {
        for(var e = this.source; r < e.length && j(t, R(e, r)); r++);
        return r;
    },
    until: function(t, r) {
        r = this.skip(L, r);
        for(var e = R(this.source, r), n = 0; n < t.length; n++)if (t[n] === e) return r;
        throw new b('Unexpected character: "' + e + '" at: ' + r);
    }
};
var B = g(function() {
    var t, r = "9007199254740993";
    return S(r, function(r, e, n) {
        t = n.source;
    }), t !== r;
}), D = w && !g(function() {
    return 1 / S("-0 \t") != -1 / 0;
});
n({
    target: "JSON",
    stat: !0,
    forced: B
}, {
    parse: function(t, r) {
        return D && !c(r) ? S(t) : function(t, r) {
            t = p(t);
            var e = new F(t, 0), n = e.parse(), o = n.value, i = e.skip(L, n.end);
            if (i < t.length) throw new b('Unexpected extra character: "' + R(t, i) + '" after the parsed data at: ' + i);
            return c(r) ? N({
                "": o
            }, "", r, n) : o;
        }(t, r);
    }
});
