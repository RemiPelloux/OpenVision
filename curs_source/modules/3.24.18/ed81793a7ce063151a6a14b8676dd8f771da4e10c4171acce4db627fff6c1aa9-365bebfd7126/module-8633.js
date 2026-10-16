var n = require("./module-9117.js"), o = require("./module-6881.js"), i = require("./module-6893.js"), a = require("./module-8732.js"), u = require("./module-2735.js"), s = require("./module-8088.js"), c = require("./module-997.js"), f = require("./module-4320.js"), h = require("./module-5234.js"), l = require("./module-286.js"), p = require("./module-6744.js"), v = require("./module-4579.js"), d = require("./module-2420.js"), g = require("./module-6103.js"), y = require("./module-1786.js"), w = require("./module-5054.js"), x = require("./module-8150.js"), m = require("./module-7825.js"), b = require("./module-4166.js"), S = require("./module-8657.js"), O = require("./module-3754.js"), E = require("./module-3086.js"), R = u.PROPER, P = u.CONFIGURABLE, j = "ArrayBuffer", k = "DataView", I = "prototype", T = "Wrong index", A = E.getterFor(j), L = E.getterFor(k), N = E.set, U = n[j], C = U, F = C && C[I], B = n[k], D = B && B[I], M = Object.prototype, z = n.Array, _ = n.RangeError, H = o(x), J = o([].reverse), q = g.pack, G = g.unpack, V = function(t) {
    return [
        255 & t
    ];
}, W = function(t) {
    return [
        255 & t,
        t >> 8 & 255
    ];
}, $ = function(t) {
    return [
        255 & t,
        t >> 8 & 255,
        t >> 16 & 255,
        t >> 24 & 255
    ];
}, K = function(t) {
    return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
}, Y = function(t) {
    return q(d(t), 23, 4);
}, Q = function(t) {
    return q(t, 52, 8);
}, X = function(t, r, e) {
    c(t[I], r, {
        configurable: !0,
        get: function() {
            return e(this)[r];
        }
    });
}, Z = function(t, r, e, n) {
    var o = L(t), i = v(e), a = !!n;
    if (i + r > o.byteLength) throw new _(T);
    var u = o.bytes, s = i + o.byteOffset, c = m(u, s, s + r);
    return a ? c : J(c);
}, tt = function(t, r, e, n, o, i) {
    var a = L(t), u = v(e), s = n(+o), c = !!i;
    if (u + r > a.byteLength) throw new _(T);
    for(var f = a.bytes, h = u + a.byteOffset, l = 0; l < r; l++)f[h + l] = s[c ? l : r - l - 1];
};
if (a) {
    var rt = R && U.name !== j;
    h(function() {
        U(1);
    }) && h(function() {
        new U(-1);
    }) && !h(function() {
        return new U, new U(1.5), new U(NaN), 1 !== U.length || rt && !P;
    }) ? rt && P && s(U, "name", j) : ((C = function(t) {
        return l(this, F), b(new U(v(t)), this, C);
    })[I] = F, F.constructor = C, S(C, U)), w && y(D) !== M && w(D, M);
    var et = new B(new C(2)), nt = o(D.setInt8);
    et.setInt8(0, 2147483648), et.setInt8(1, 2147483649), !et.getInt8(0) && et.getInt8(1) || f(D, {
        setInt8: function(t, r) {
            nt(this, t, r << 24 >> 24);
        },
        setUint8: function(t, r) {
            nt(this, t, r << 24 >> 24);
        }
    }, {
        unsafe: !0
    });
} else F = (C = function(t) {
    l(this, F);
    var r = v(t);
    N(this, {
        type: j,
        bytes: H(z(r), 0),
        byteLength: r
    }), i || (this.byteLength = r, this.detached = !1);
})[I], D = (B = function(t, r, e) {
    l(this, D), l(t, F);
    var n = A(t), o = n.byteLength, a = p(r);
    if (a < 0 || a > o) throw new _("Wrong offset");
    if (a + (e = void 0 === e ? o - a : v(e)) > o) throw new _("Wrong length");
    N(this, {
        type: k,
        buffer: t,
        byteLength: e,
        byteOffset: a,
        bytes: n.bytes
    }), i || (this.buffer = t, this.byteLength = e, this.byteOffset = a);
})[I], i && (X(C, "byteLength", A), X(B, "buffer", L), X(B, "byteLength", L), X(B, "byteOffset", L)), f(D, {
    getInt8: function(t) {
        return Z(this, 1, t)[0] << 24 >> 24;
    },
    getUint8: function(t) {
        return Z(this, 1, t)[0];
    },
    getInt16: function(t) {
        var r = Z(this, 2, t, arguments.length > 1 && arguments[1]);
        return (r[1] << 8 | r[0]) << 16 >> 16;
    },
    getUint16: function(t) {
        var r = Z(this, 2, t, arguments.length > 1 && arguments[1]);
        return r[1] << 8 | r[0];
    },
    getInt32: function(t) {
        return K(Z(this, 4, t, arguments.length > 1 && arguments[1]));
    },
    getUint32: function(t) {
        return K(Z(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0;
    },
    getFloat32: function(t) {
        return G(Z(this, 4, t, arguments.length > 1 && arguments[1]), 23);
    },
    getFloat64: function(t) {
        return G(Z(this, 8, t, arguments.length > 1 && arguments[1]), 52);
    },
    setInt8: function(t, r) {
        tt(this, 1, t, V, r);
    },
    setUint8: function(t, r) {
        tt(this, 1, t, V, r);
    },
    setInt16: function(t, r) {
        tt(this, 2, t, W, r, arguments.length > 2 && arguments[2]);
    },
    setUint16: function(t, r) {
        tt(this, 2, t, W, r, arguments.length > 2 && arguments[2]);
    },
    setInt32: function(t, r) {
        tt(this, 4, t, $, r, arguments.length > 2 && arguments[2]);
    },
    setUint32: function(t, r) {
        tt(this, 4, t, $, r, arguments.length > 2 && arguments[2]);
    },
    setFloat32: function(t, r) {
        tt(this, 4, t, Y, r, arguments.length > 2 && arguments[2]);
    },
    setFloat64: function(t, r) {
        tt(this, 8, t, Q, r, arguments.length > 2 && arguments[2]);
    }
});
O(C, j), O(B, k), module.exports = {
    ArrayBuffer: C,
    DataView: B
};
