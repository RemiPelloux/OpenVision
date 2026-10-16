var s = require("./module-6518.js"), n = require("./module-3724.js"), r = require("./module-4576.js"), a = require("./module-7751.js"), o = require("./module-9504.js"), l = require("./module-9565.js"), h = require("./module-4901.js"), c = require("./module-34.js"), d = require("./module-4376.js"), u = require("./module-9297.js"), p = require("./module-655.js"), g = require("./module-6198.js"), m = require("./module-4659.js"), f = require("./module-9039.js"), b = require("./module-8235.js"), v = require("./module-4495.js"), y = r.JSON, w = r.Number, x = r.SyntaxError, A = y && y.parse, _ = a("Object", "keys"), S = Object.getOwnPropertyDescriptor, E = o("".charAt), C = o("".slice), T = o(/./.exec), M = o([].push), k = /^\d$/, D = /^[1-9]$/, P = /^[\d-]$/, I = /^[\t\n\r ]$/, R = function(t, e, i, s) {
    var n, r, a, o, h, p = t[e], m = s && p === s.value, f = m && "string" == typeof s.source ? {
        source: s.source
    } : {};
    if (c(p)) {
        var b = d(p), v = m ? s.nodes : b ? [] : {};
        if (b) for(n = v.length, a = g(p), o = 0; o < a; o++)L(p, o, R(p, "" + o, i, o < n ? v[o] : void 0));
        else for(r = _(p), a = g(r), o = 0; o < a; o++)h = r[o], L(p, h, R(p, h, i, u(v, h) ? v[h] : void 0));
    }
    return l(i, t, e, p, f);
}, L = function(t, e, i) {
    if (n) {
        var s = S(t, e);
        if (s && !s.configurable) return;
    }
    void 0 === i ? delete t[e] : m(t, e, i);
}, B = function(t, e, i, s) {
    this.value = t, this.end = e, this.source = i, this.nodes = s;
}, F = function(t, e) {
    this.source = t, this.index = e;
};
F.prototype = {
    fork: function(t) {
        return new F(this.source, t);
    },
    parse: function() {
        var t = this.source, e = this.skip(I, this.index), i = this.fork(e), s = E(t, e);
        if (T(P, s)) return i.number();
        switch(s){
            case "{":
                return i.object();
            case "[":
                return i.array();
            case '"':
                return i.string();
            case "t":
                return i.keyword(!0);
            case "f":
                return i.keyword(!1);
            case "n":
                return i.keyword(null);
        }
        throw new x('Unexpected character: "' + s + '" at: ' + e);
    },
    node: function(t, e, i, s, n) {
        return new B(e, s, t ? null : C(this.source, i, s), n);
    },
    object: function() {
        for(var t = this.source, e = this.index + 1, i = !1, s = {}, n = {}; e < t.length;){
            if (e = this.until([
                '"',
                "}"
            ], e), "}" === E(t, e) && !i) {
                e++;
                break;
            }
            var r = this.fork(e).string(), a = r.value;
            e = r.end, e = this.until([
                ":"
            ], e) + 1, e = this.skip(I, e), r = this.fork(e).parse(), m(n, a, r), m(s, a, r.value), e = this.until([
                ",",
                "}"
            ], r.end);
            var o = E(t, e);
            if ("," === o) i = !0, e++;
            else if ("}" === o) {
                e++;
                break;
            }
        }
        return this.node(1, s, this.index, e, n);
    },
    array: function() {
        for(var t = this.source, e = this.index + 1, i = !1, s = [], n = []; e < t.length;){
            if (e = this.skip(I, e), "]" === E(t, e) && !i) {
                e++;
                break;
            }
            var r = this.fork(e).parse();
            if (M(n, r), M(s, r.value), e = this.until([
                ",",
                "]"
            ], r.end), "," === E(t, e)) i = !0, e++;
            else if ("]" === E(t, e)) {
                e++;
                break;
            }
        }
        return this.node(1, s, this.index, e, n);
    },
    string: function() {
        var t = this.index, e = b(this.source, this.index + 1);
        return this.node(0, e.value, t, e.end);
    },
    number: function() {
        var t = this.source, e = this.index, i = e;
        if ("-" === E(t, i) && i++, "0" === E(t, i)) i++;
        else {
            if (!T(D, E(t, i))) throw new x("Failed to parse number at: " + i);
            i = this.skip(k, i + 1);
        }
        if (!("." === E(t, i) && (i = this.skip(k, i + 1)), "e" !== E(t, i) && "E" !== E(t, i) || (i++, "+" !== E(t, i) && "-" !== E(t, i) || i++, i !== (i = this.skip(k, i))))) throw new x("Failed to parse number's exponent value at: " + i);
        return this.node(0, w(C(t, e, i)), e, i);
    },
    keyword: function(t) {
        var e = "" + t, i = this.index, s = i + e.length;
        if (C(this.source, i, s) !== e) throw new x("Failed to parse value at: " + i);
        return this.node(0, t, i, s);
    },
    skip: function(t, e) {
        for(var i = this.source; e < i.length && T(t, E(i, e)); e++);
        return e;
    },
    until: function(t, e) {
        e = this.skip(I, e);
        for(var i = E(this.source, e), s = 0; s < t.length; s++)if (t[s] === i) return e;
        throw new x('Unexpected character: "' + i + '" at: ' + e);
    }
};
var O = f(function() {
    var t, e = "9007199254740993";
    return A(e, function(e, i, s) {
        t = s.source;
    }), t !== e;
}), N = v && !f(function() {
    return 1 / A("-0 \t") != -1 / 0;
});
s({
    target: "JSON",
    stat: !0,
    forced: O
}, {
    parse: function(t, e) {
        return N && !h(e) ? A(t) : function(t, e) {
            t = p(t);
            var i = new F(t, 0, ""), s = i.parse(), n = s.value, r = i.skip(I, s.end);
            if (r < t.length) throw new x('Unexpected extra character: "' + E(t, r) + '" after the parsed data at: ' + r);
            return h(e) ? R({
                "": n
            }, "", e, s) : n;
        }(t, e);
    }
});
