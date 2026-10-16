require("./module-3873.js");
var n = require("./module-5613.js"), o = require("./module-9117.js"), i = require("./module-5268.js"), a = require("./module-9944.js"), u = require("./module-6881.js"), s = require("./module-6893.js"), c = require("./module-6301.js"), f = require("./module-421.js"), h = require("./module-7509.js"), l = require("./module-997.js"), p = require("./module-4320.js"), v = require("./module-3754.js"), d = require("./module-9383.js"), g = require("./module-3086.js"), y = require("./module-286.js"), w = require("./module-4188.js"), x = require("./module-4418.js"), m = require("./module-5821.js"), b = require("./module-5438.js"), S = require("./module-3770.js"), O = require("./module-831.js"), E = require("./module-2618.js"), R = require("./module-7065.js"), P = require("./module-9123.js"), j = require("./module-9042.js"), k = require("./module-4366.js"), I = require("./module-6224.js"), T = require("./module-9445.js"), A = require("./module-4282.js"), L = require("./module-9295.js"), N = A("iterator"), U = "URLSearchParams", C = U + "Iterator", F = g.set, B = g.getterFor(U), D = g.getterFor(C), M = f.decode, z = f.encode, _ = i("fetch"), H = i("Request"), J = i("Headers"), q = H && H.prototype, G = J && J.prototype, V = o.TypeError, W = u("".charAt), $ = u([].join), K = u([].push), Y = u("".replace), Q = u([].shift), X = u([].splice), Z = u("".split), tt = u("".slice), rt = /\+/g, et = function(t) {
    return M(Y(t, rt, " "));
}, nt = /[!'()~]|%20/g, ot = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
}, it = function(t) {
    return ot[t];
}, at = function(t) {
    return Y(z(t), nt, it);
}, ut = d(function(t, r) {
    F(this, {
        type: C,
        target: B(t).entries,
        index: 0,
        kind: r
    });
}, U, function() {
    var t = D(this), r = t.target, e = t.index++;
    if (!r || e >= r.length) return t.target = null, I(void 0, !0);
    var n = r[e];
    switch(t.kind){
        case "keys":
            return I(n.key, !1);
        case "values":
            return I(n.value, !1);
    }
    return I([
        n.key,
        n.value
    ], !1);
}, !0), st = function(t) {
    this.entries = [], this.url = null, void 0 !== t && (O(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === W(t, 0) ? tt(t, 1) : t : E(t)));
};
st.prototype = {
    type: U,
    bindURL: function(t) {
        this.url = t, this.update();
    },
    parseObject: function(t) {
        var r, e, n, o, i, u, s, c = this.entries, f = k(t);
        if (f) for(e = (r = j(t, f)).next; !(n = a(e, r)).done;){
            if (i = (o = j(S(n.value))).next, (u = a(i, o)).done || (s = a(i, o)).done || !a(i, o).done) throw new V("Expected sequence with length 2");
            K(c, {
                key: E(u.value),
                value: E(s.value)
            });
        }
        else for(var h in t)x(t, h) && K(c, {
            key: h,
            value: E(t[h])
        });
    },
    parseQuery: function(t) {
        if (t) for(var r, e, n = this.entries, o = Z(t, "&"), i = 0; i < o.length;)(r = o[i++]).length && (e = Z(r, "="), K(n, {
            key: et(Q(e)),
            value: et($(e, "="))
        }));
    },
    serialize: function() {
        for(var t, r = this.entries, e = [], n = 0; n < r.length;)t = r[n++], K(e, at(t.key) + "=" + at(t.value));
        return $(e, "&");
    },
    update: function() {
        this.entries.length = 0, this.parseQuery(this.url.query);
    },
    updateURL: function() {
        this.url && this.url.update();
    }
};
var ct = function() {
    y(this, ft);
    var t = F(this, new st(arguments.length > 0 ? arguments[0] : void 0));
    s || (this.size = t.entries.length);
}, ft = ct.prototype;
if (p(ft, {
    append: function(t, r) {
        var e = B(this);
        T(arguments.length, 2), K(e.entries, {
            key: E(t),
            value: E(r)
        }), s || this.size++, e.updateURL();
    },
    delete: function(t) {
        for(var r = B(this), e = T(arguments.length, 1), n = r.entries, o = E(t), i = e < 2 ? void 0 : arguments[1], a = void 0 === i ? i : E(i), u = 0; u < n.length;){
            var c = n[u];
            c.key !== o || void 0 !== a && c.value !== a ? u++ : X(n, u, 1);
        }
        s || (this.size = n.length), r.updateURL();
    },
    get: function(t) {
        var r = B(this).entries;
        T(arguments.length, 1);
        for(var e = E(t), n = 0; n < r.length; n++)if (r[n].key === e) return r[n].value;
        return null;
    },
    getAll: function(t) {
        var r = B(this).entries;
        T(arguments.length, 1);
        for(var e = E(t), n = [], o = 0; o < r.length; o++)r[o].key === e && K(n, r[o].value);
        return n;
    },
    has: function(t) {
        for(var r = B(this).entries, e = T(arguments.length, 1), n = E(t), o = e < 2 ? void 0 : arguments[1], i = void 0 === o ? o : E(o), a = 0; a < r.length;){
            var u = r[a++];
            if (u.key === n && (void 0 === i || u.value === i)) return !0;
        }
        return !1;
    },
    set: function(t, r) {
        var e = B(this);
        T(arguments.length, 2);
        for(var n, o = e.entries, i = !1, a = E(t), u = E(r), c = 0; c < o.length; c++)(n = o[c]).key === a && (i ? X(o, c--, 1) : (i = !0, n.value = u));
        i || K(o, {
            key: a,
            value: u
        }), s || (this.size = o.length), e.updateURL();
    },
    sort: function() {
        var t = B(this);
        L(t.entries, function(t, r) {
            return t.key > r.key ? 1 : -1;
        }), t.updateURL();
    },
    forEach: function(t) {
        for(var r, e = B(this).entries, n = m(t, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < e.length;)n((r = e[o++]).value, r.key, this);
    },
    keys: function() {
        return new ut(this, "keys");
    },
    values: function() {
        return new ut(this, "values");
    },
    entries: function() {
        return new ut(this, "entries");
    }
}, {
    enumerable: !0
}), h(ft, N, ft.entries, {
    name: "entries"
}), h(ft, "toString", function() {
    return B(this).serialize();
}, {
    enumerable: !0
}), s && l(ft, "size", {
    get: function() {
        return B(this).entries.length;
    },
    configurable: !0,
    enumerable: !0
}), v(ct, U), n({
    global: !0,
    constructor: !0,
    forced: !c
}, {
    URLSearchParams: ct
}), !c && w(J)) {
    var ht = u(G.has), lt = u(G.set), pt = function(t) {
        if (O(t)) {
            var r, e = t.body;
            if (b(e) === U) return r = t.headers ? new J(t.headers) : new J, ht(r, "content-type") || lt(r, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), R(t, {
                body: P(0, E(e)),
                headers: P(0, r)
            });
        }
        return t;
    };
    if (w(_) && n({
        global: !0,
        enumerable: !0,
        dontCallGetSet: !0,
        forced: !0
    }, {
        fetch: function(t) {
            return _(t, arguments.length > 1 ? pt(arguments[1]) : {});
        }
    }), w(H)) {
        var vt = function(t) {
            return y(this, q), new H(t, arguments.length > 1 ? pt(arguments[1]) : {});
        };
        q.constructor = vt, vt.prototype = q, n({
            global: !0,
            constructor: !0,
            dontCallGetSet: !0,
            forced: !0
        }, {
            Request: vt
        });
    }
}
module.exports = {
    URLSearchParams: ct,
    getState: B
};
