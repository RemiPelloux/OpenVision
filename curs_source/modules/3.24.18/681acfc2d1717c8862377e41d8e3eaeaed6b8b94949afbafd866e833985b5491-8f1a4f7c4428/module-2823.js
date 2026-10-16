!function(e, t) {
    "use strict";
    function n(e, t) {
        if (!e) throw new Error(t || "Assertion failed");
    }
    function r(e, t) {
        e.super_ = t;
        var A = function() {};
        A.prototype = t.prototype, e.prototype = new A, e.prototype.constructor = e;
    }
    function o(e, t, A) {
        if (o.isBN(e)) return e;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (A = t, t = 10), this._init(e || 0, t || 10, A || "be"));
    }
    var s;
    "object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
    try {
        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : require("./module-181.js").Buffer;
    } catch (e) {}
    function i(e, t) {
        var A = e.charCodeAt(t);
        return A >= 65 && A <= 70 ? A - 55 : A >= 97 && A <= 102 ? A - 87 : A - 48 & 15;
    }
    function a(e, t, A) {
        var n = i(e, A);
        return A - 1 >= t && (n |= i(e, A - 1) << 4), n;
    }
    function c(e, t, A, n) {
        for(var r = 0, o = Math.min(e.length, A), s = t; s < o; s++){
            var i = e.charCodeAt(s) - 48;
            r *= n, r += i >= 49 ? i - 49 + 10 : i >= 17 ? i - 17 + 10 : i;
        }
        return r;
    }
    o.isBN = function(e) {
        return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words);
    }, o.max = function(e, t) {
        return e.cmp(t) > 0 ? e : t;
    }, o.min = function(e, t) {
        return e.cmp(t) < 0 ? e : t;
    }, o.prototype._init = function(e, t, A) {
        if ("number" == typeof e) return this._initNumber(e, t, A);
        if ("object" == typeof e) return this._initArray(e, t, A);
        "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
        var r = 0;
        "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (r++, this.negative = 1), r < e.length && (16 === t ? this._parseHex(e, r, A) : (this._parseBase(e, t, r), "le" === A && this._initArray(this.toArray(), t, A)));
    }, o.prototype._initNumber = function(e, t, A) {
        e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [
            67108863 & e
        ], this.length = 1) : e < 4503599627370496 ? (this.words = [
            67108863 & e,
            e / 67108864 & 67108863
        ], this.length = 2) : (n(e < 9007199254740992), this.words = [
            67108863 & e,
            e / 67108864 & 67108863,
            1
        ], this.length = 3), "le" === A && this._initArray(this.toArray(), t, A);
    }, o.prototype._initArray = function(e, t, A) {
        if (n("number" == typeof e.length), e.length <= 0) return this.words = [
            0
        ], this.length = 1, this;
        this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
        for(var r = 0; r < this.length; r++)this.words[r] = 0;
        var o, s, i = 0;
        if ("be" === A) for(r = e.length - 1, o = 0; r >= 0; r -= 3)s = e[r] | e[r - 1] << 8 | e[r - 2] << 16, this.words[o] |= s << i & 67108863, this.words[o + 1] = s >>> 26 - i & 67108863, (i += 24) >= 26 && (i -= 26, o++);
        else if ("le" === A) for(r = 0, o = 0; r < e.length; r += 3)s = e[r] | e[r + 1] << 8 | e[r + 2] << 16, this.words[o] |= s << i & 67108863, this.words[o + 1] = s >>> 26 - i & 67108863, (i += 24) >= 26 && (i -= 26, o++);
        return this.strip();
    }, o.prototype._parseHex = function(e, t, A) {
        this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
        for(var n = 0; n < this.length; n++)this.words[n] = 0;
        var r, o = 0, s = 0;
        if ("be" === A) for(n = e.length - 1; n >= t; n -= 2)r = a(e, t, n) << o, this.words[s] |= 67108863 & r, o >= 18 ? (o -= 18, s += 1, this.words[s] |= r >>> 26) : o += 8;
        else for(n = (e.length - t) % 2 == 0 ? t + 1 : t; n < e.length; n += 2)r = a(e, t, n) << o, this.words[s] |= 67108863 & r, o >= 18 ? (o -= 18, s += 1, this.words[s] |= r >>> 26) : o += 8;
        this.strip();
    }, o.prototype._parseBase = function(e, t, A) {
        this.words = [
            0
        ], this.length = 1;
        for(var n = 0, r = 1; r <= 67108863; r *= t)n++;
        n--, r = r / t | 0;
        for(var o = e.length - A, s = o % n, i = Math.min(o, o - s) + A, a = 0, l = A; l < i; l += n)a = c(e, l, l + n, t), this.imuln(r), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
        if (0 !== s) {
            var u = 1;
            for(a = c(e, l, e.length, t), l = 0; l < s; l++)u *= t;
            this.imuln(u), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
        }
        this.strip();
    }, o.prototype.copy = function(e) {
        e.words = new Array(this.length);
        for(var t = 0; t < this.length; t++)e.words[t] = this.words[t];
        e.length = this.length, e.negative = this.negative, e.red = this.red;
    }, o.prototype.clone = function() {
        var e = new o(null);
        return this.copy(e), e;
    }, o.prototype._expand = function(e) {
        for(; this.length < e;)this.words[this.length++] = 0;
        return this;
    }, o.prototype.strip = function() {
        for(; this.length > 1 && 0 === this.words[this.length - 1];)this.length--;
        return this._normSign();
    }, o.prototype._normSign = function() {
        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
    }, o.prototype.inspect = function() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var l = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
    ], u = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ], g = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
    ];
    function E(e, t, A) {
        A.negative = t.negative ^ e.negative;
        var n = e.length + t.length | 0;
        A.length = n, n = n - 1 | 0;
        var r = 0 | e.words[0], o = 0 | t.words[0], s = r * o, i = 67108863 & s, a = s / 67108864 | 0;
        A.words[0] = i;
        for(var c = 1; c < n; c++){
            for(var l = a >>> 26, u = 67108863 & a, g = Math.min(c, t.length - 1), E = Math.max(0, c - e.length + 1); E <= g; E++){
                var h = c - E | 0;
                l += (s = (r = 0 | e.words[h]) * (o = 0 | t.words[E]) + u) / 67108864 | 0, u = 67108863 & s;
            }
            A.words[c] = 0 | u, a = 0 | l;
        }
        return 0 !== a ? A.words[c] = 0 | a : A.length--, A.strip();
    }
    o.prototype.toString = function(e, t) {
        var A;
        if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
            A = "";
            for(var r = 0, o = 0, s = 0; s < this.length; s++){
                var i = this.words[s], a = (16777215 & (i << r | o)).toString(16);
                o = i >>> 24 - r & 16777215, (r += 2) >= 26 && (r -= 26, s--), A = 0 !== o || s !== this.length - 1 ? l[6 - a.length] + a + A : a + A;
            }
            for(0 !== o && (A = o.toString(16) + A); A.length % t !== 0;)A = "0" + A;
            return 0 !== this.negative && (A = "-" + A), A;
        }
        if (e === (0 | e) && e >= 2 && e <= 36) {
            var c = u[e], E = g[e];
            A = "";
            var h = this.clone();
            for(h.negative = 0; !h.isZero();){
                var d = h.modn(E).toString(e);
                A = (h = h.idivn(E)).isZero() ? d + A : l[c - d.length] + d + A;
            }
            for(this.isZero() && (A = "0" + A); A.length % t !== 0;)A = "0" + A;
            return 0 !== this.negative && (A = "-" + A), A;
        }
        n(!1, "Base should be between 2 and 36");
    }, o.prototype.toNumber = function() {
        var e = this.words[0];
        return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e;
    }, o.prototype.toJSON = function() {
        return this.toString(16);
    }, o.prototype.toBuffer = function(e, t) {
        return n(void 0 !== s), this.toArrayLike(s, e, t);
    }, o.prototype.toArray = function(e, t) {
        return this.toArrayLike(Array, e, t);
    }, o.prototype.toArrayLike = function(e, t, A) {
        var r = this.byteLength(), o = A || Math.max(1, r);
        n(r <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
        var s, i, a = "le" === t, c = new e(o), l = this.clone();
        if (a) {
            for(i = 0; !l.isZero(); i++)s = l.andln(255), l.iushrn(8), c[i] = s;
            for(; i < o; i++)c[i] = 0;
        } else {
            for(i = 0; i < o - r; i++)c[i] = 0;
            for(i = 0; !l.isZero(); i++)s = l.andln(255), l.iushrn(8), c[o - i - 1] = s;
        }
        return c;
    }, Math.clz32 ? o.prototype._countBits = function(e) {
        return 32 - Math.clz32(e);
    } : o.prototype._countBits = function(e) {
        var t = e, A = 0;
        return t >= 4096 && (A += 13, t >>>= 13), t >= 64 && (A += 7, t >>>= 7), t >= 8 && (A += 4, t >>>= 4), t >= 2 && (A += 2, t >>>= 2), A + t;
    }, o.prototype._zeroBits = function(e) {
        if (0 === e) return 26;
        var t = e, A = 0;
        return 8191 & t || (A += 13, t >>>= 13), 127 & t || (A += 7, t >>>= 7), 15 & t || (A += 4, t >>>= 4), 3 & t || (A += 2, t >>>= 2), 1 & t || A++, A;
    }, o.prototype.bitLength = function() {
        var e = this.words[this.length - 1], t = this._countBits(e);
        return 26 * (this.length - 1) + t;
    }, o.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        for(var e = 0, t = 0; t < this.length; t++){
            var A = this._zeroBits(this.words[t]);
            if (e += A, 26 !== A) break;
        }
        return e;
    }, o.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
    }, o.prototype.toTwos = function(e) {
        return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone();
    }, o.prototype.fromTwos = function(e) {
        return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone();
    }, o.prototype.isNeg = function() {
        return 0 !== this.negative;
    }, o.prototype.neg = function() {
        return this.clone().ineg();
    }, o.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
    }, o.prototype.iuor = function(e) {
        for(; this.length < e.length;)this.words[this.length++] = 0;
        for(var t = 0; t < e.length; t++)this.words[t] = this.words[t] | e.words[t];
        return this.strip();
    }, o.prototype.ior = function(e) {
        return n(0 === (this.negative | e.negative)), this.iuor(e);
    }, o.prototype.or = function(e) {
        return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
    }, o.prototype.uor = function(e) {
        return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
    }, o.prototype.iuand = function(e) {
        var t;
        t = this.length > e.length ? e : this;
        for(var A = 0; A < t.length; A++)this.words[A] = this.words[A] & e.words[A];
        return this.length = t.length, this.strip();
    }, o.prototype.iand = function(e) {
        return n(0 === (this.negative | e.negative)), this.iuand(e);
    }, o.prototype.and = function(e) {
        return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
    }, o.prototype.uand = function(e) {
        return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this);
    }, o.prototype.iuxor = function(e) {
        var t, A;
        this.length > e.length ? (t = this, A = e) : (t = e, A = this);
        for(var n = 0; n < A.length; n++)this.words[n] = t.words[n] ^ A.words[n];
        if (this !== t) for(; n < t.length; n++)this.words[n] = t.words[n];
        return this.length = t.length, this.strip();
    }, o.prototype.ixor = function(e) {
        return n(0 === (this.negative | e.negative)), this.iuxor(e);
    }, o.prototype.xor = function(e) {
        return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
    }, o.prototype.uxor = function(e) {
        return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this);
    }, o.prototype.inotn = function(e) {
        n("number" == typeof e && e >= 0);
        var t = 0 | Math.ceil(e / 26), A = e % 26;
        this._expand(t), A > 0 && t--;
        for(var r = 0; r < t; r++)this.words[r] = 67108863 & ~this.words[r];
        return A > 0 && (this.words[r] = ~this.words[r] & 67108863 >> 26 - A), this.strip();
    }, o.prototype.notn = function(e) {
        return this.clone().inotn(e);
    }, o.prototype.setn = function(e, t) {
        n("number" == typeof e && e >= 0);
        var A = e / 26 | 0, r = e % 26;
        return this._expand(A + 1), this.words[A] = t ? this.words[A] | 1 << r : this.words[A] & ~(1 << r), this.strip();
    }, o.prototype.iadd = function(e) {
        var t, A, n;
        if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
        if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
        this.length > e.length ? (A = this, n = e) : (A = e, n = this);
        for(var r = 0, o = 0; o < n.length; o++)t = (0 | A.words[o]) + (0 | n.words[o]) + r, this.words[o] = 67108863 & t, r = t >>> 26;
        for(; 0 !== r && o < A.length; o++)t = (0 | A.words[o]) + r, this.words[o] = 67108863 & t, r = t >>> 26;
        if (this.length = A.length, 0 !== r) this.words[this.length] = r, this.length++;
        else if (A !== this) for(; o < A.length; o++)this.words[o] = A.words[o];
        return this;
    }, o.prototype.add = function(e) {
        var t;
        return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this);
    }, o.prototype.isub = function(e) {
        if (0 !== e.negative) {
            e.negative = 0;
            var t = this.iadd(e);
            return e.negative = 1, t._normSign();
        }
        if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
        var A, n, r = this.cmp(e);
        if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        r > 0 ? (A = this, n = e) : (A = e, n = this);
        for(var o = 0, s = 0; s < n.length; s++)o = (t = (0 | A.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & t;
        for(; 0 !== o && s < A.length; s++)o = (t = (0 | A.words[s]) + o) >> 26, this.words[s] = 67108863 & t;
        if (0 === o && s < A.length && A !== this) for(; s < A.length; s++)this.words[s] = A.words[s];
        return this.length = Math.max(this.length, s), A !== this && (this.negative = 1), this.strip();
    }, o.prototype.sub = function(e) {
        return this.clone().isub(e);
    };
    var h = function(e, t, A) {
        var n, r, o, s = e.words, i = t.words, a = A.words, c = 0, l = 0 | s[0], u = 8191 & l, g = l >>> 13, E = 0 | s[1], h = 8191 & E, d = E >>> 13, I = 0 | s[2], B = 8191 & I, Q = I >>> 13, f = 0 | s[3], C = 8191 & f, p = f >>> 13, m = 0 | s[4], y = 8191 & m, w = m >>> 13, k = 0 | s[5], b = 8191 & k, N = k >>> 13, T = 0 | s[6], D = 8191 & T, S = T >>> 13, R = 0 | s[7], F = 8191 & R, v = R >>> 13, M = 0 | s[8], U = 8191 & M, L = M >>> 13, _ = 0 | s[9], J = 8191 & _, O = _ >>> 13, Y = 0 | i[0], G = 8191 & Y, P = Y >>> 13, V = 0 | i[1], x = 8191 & V, H = V >>> 13, q = 0 | i[2], W = 8191 & q, j = q >>> 13, K = 0 | i[3], X = 8191 & K, Z = K >>> 13, z = 0 | i[4], $ = 8191 & z, ee = z >>> 13, te = 0 | i[5], Ae = 8191 & te, ne = te >>> 13, re = 0 | i[6], oe = 8191 & re, se = re >>> 13, ie = 0 | i[7], ae = 8191 & ie, ce = ie >>> 13, le = 0 | i[8], ue = 8191 & le, ge = le >>> 13, Ee = 0 | i[9], he = 8191 & Ee, de = Ee >>> 13;
        A.negative = e.negative ^ t.negative, A.length = 19;
        var Ie = (c + (n = Math.imul(u, G)) | 0) + ((8191 & (r = (r = Math.imul(u, P)) + Math.imul(g, G) | 0)) << 13) | 0;
        c = ((o = Math.imul(g, P)) + (r >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n = Math.imul(h, G), r = (r = Math.imul(h, P)) + Math.imul(d, G) | 0, o = Math.imul(d, P);
        var Be = (c + (n = n + Math.imul(u, x) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, H) | 0) + Math.imul(g, x) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(g, H) | 0) + (r >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, n = Math.imul(B, G), r = (r = Math.imul(B, P)) + Math.imul(Q, G) | 0, o = Math.imul(Q, P), n = n + Math.imul(h, x) | 0, r = (r = r + Math.imul(h, H) | 0) + Math.imul(d, x) | 0, o = o + Math.imul(d, H) | 0;
        var Qe = (c + (n = n + Math.imul(u, W) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, j) | 0) + Math.imul(g, W) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(g, j) | 0) + (r >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, n = Math.imul(C, G), r = (r = Math.imul(C, P)) + Math.imul(p, G) | 0, o = Math.imul(p, P), n = n + Math.imul(B, x) | 0, r = (r = r + Math.imul(B, H) | 0) + Math.imul(Q, x) | 0, o = o + Math.imul(Q, H) | 0, n = n + Math.imul(h, W) | 0, r = (r = r + Math.imul(h, j) | 0) + Math.imul(d, W) | 0, o = o + Math.imul(d, j) | 0;
        var fe = (c + (n = n + Math.imul(u, X) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, Z) | 0) + Math.imul(g, X) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(g, Z) | 0) + (r >>> 13) | 0) + (fe >>> 26) | 0, fe &= 67108863, n = Math.imul(y, G), r = (r = Math.imul(y, P)) + Math.imul(w, G) | 0, o = Math.imul(w, P), n = n + Math.imul(C, x) | 0, r = (r = r + Math.imul(C, H) | 0) + Math.imul(p, x) | 0, o = o + Math.imul(p, H) | 0, n = n + Math.imul(B, W) | 0, r = (r = r + Math.imul(B, j) | 0) + Math.imul(Q, W) | 0, o = o + Math.imul(Q, j) | 0, n = n + Math.imul(h, X) | 0, r = (r = r + Math.imul(h, Z) | 0) + Math.imul(d, X) | 0, o = o + Math.imul(d, Z) | 0;
        var Ce = (c + (n = n + Math.imul(u, $) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ee) | 0) + Math.imul(g, $) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(g, ee) | 0) + (r >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n = Math.imul(b, G), r = (r = Math.imul(b, P)) + Math.imul(N, G) | 0, o = Math.imul(N, P), n = n + Math.imul(y, x) | 0, r = (r = r + Math.imul(y, H) | 0) + Math.imul(w, x) | 0, o = o + Math.imul(w, H) | 0, n = n + Math.imul(C, W) | 0, r = (r = r + Math.imul(C, j) | 0) + Math.imul(p, W) | 0, o = o + Math.imul(p, j) | 0, n = n + Math.imul(B, X) | 0, r = (r = r + Math.imul(B, Z) | 0) + Math.imul(Q, X) | 0, o = o + Math.imul(Q, Z) | 0, n = n + Math.imul(h, $) | 0, r = (r = r + Math.imul(h, ee) | 0) + Math.imul(d, $) | 0, o = o + Math.imul(d, ee) | 0;
        var pe = (c + (n = n + Math.imul(u, Ae) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ne) | 0) + Math.imul(g, Ae) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(g, ne) | 0) + (r >>> 13) | 0) + (pe >>> 26) | 0, pe &= 67108863, n = Math.imul(D, G), r = (r = Math.imul(D, P)) + Math.imul(S, G) | 0, o = Math.imul(S, P), n = n + Math.imul(b, x) | 0, r = (r = r + Math.imul(b, H) | 0) + Math.imul(N, x) | 0, o = o + Math.imul(N, H) | 0, n = n + Math.imul(y, W) | 0, r = (r = r + Math.imul(y, j) | 0) + Math.imul(w, W) | 0, o = o + Math.imul(w, j) | 0, n = n + Math.imul(C, X) | 0, r = (r = r + Math.imul(C, Z) | 0) + Math.imul(p, X) | 0, o = o + Math.imul(p, Z) | 0, n = n + Math.imul(B, $) | 0, r = (r = r + Math.imul(B, ee) | 0) + Math.imul(Q, $) | 0, o = o + Math.imul(Q, ee) | 0, n = n + Math.imul(h, Ae) | 0, r = (r = r + Math.imul(h, ne) | 0) + Math.imul(d, Ae) | 0, o = o + Math.imul(d, ne) | 0;
        var me = (c + (n = n + Math.imul(u, oe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, se) | 0) + Math.imul(g, oe) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(g, se) | 0) + (r >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(F, G), r = (r = Math.imul(F, P)) + Math.imul(v, G) | 0, o = Math.imul(v, P), n = n + Math.imul(D, x) | 0, r = (r = r + Math.imul(D, H) | 0) + Math.imul(S, x) | 0, o = o + Math.imul(S, H) | 0, n = n + Math.imul(b, W) | 0, r = (r = r + Math.imul(b, j) | 0) + Math.imul(N, W) | 0, o = o + Math.imul(N, j) | 0, n = n + Math.imul(y, X) | 0, r = (r = r + Math.imul(y, Z) | 0) + Math.imul(w, X) | 0, o = o + Math.imul(w, Z) | 0, n = n + Math.imul(C, $) | 0, r = (r = r + Math.imul(C, ee) | 0) + Math.imul(p, $) | 0, o = o + Math.imul(p, ee) | 0, n = n + Math.imul(B, Ae) | 0, r = (r = r + Math.imul(B, ne) | 0) + Math.imul(Q, Ae) | 0, o = o + Math.imul(Q, ne) | 0, n = n + Math.imul(h, oe) | 0, r = (r = r + Math.imul(h, se) | 0) + Math.imul(d, oe) | 0, o = o + Math.imul(d, se) | 0;
        var ye = (c + (n = n + Math.imul(u, ae) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ce) | 0) + Math.imul(g, ae) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(g, ce) | 0) + (r >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(U, G), r = (r = Math.imul(U, P)) + Math.imul(L, G) | 0, o = Math.imul(L, P), n = n + Math.imul(F, x) | 0, r = (r = r + Math.imul(F, H) | 0) + Math.imul(v, x) | 0, o = o + Math.imul(v, H) | 0, n = n + Math.imul(D, W) | 0, r = (r = r + Math.imul(D, j) | 0) + Math.imul(S, W) | 0, o = o + Math.imul(S, j) | 0, n = n + Math.imul(b, X) | 0, r = (r = r + Math.imul(b, Z) | 0) + Math.imul(N, X) | 0, o = o + Math.imul(N, Z) | 0, n = n + Math.imul(y, $) | 0, r = (r = r + Math.imul(y, ee) | 0) + Math.imul(w, $) | 0, o = o + Math.imul(w, ee) | 0, n = n + Math.imul(C, Ae) | 0, r = (r = r + Math.imul(C, ne) | 0) + Math.imul(p, Ae) | 0, o = o + Math.imul(p, ne) | 0, n = n + Math.imul(B, oe) | 0, r = (r = r + Math.imul(B, se) | 0) + Math.imul(Q, oe) | 0, o = o + Math.imul(Q, se) | 0, n = n + Math.imul(h, ae) | 0, r = (r = r + Math.imul(h, ce) | 0) + Math.imul(d, ae) | 0, o = o + Math.imul(d, ce) | 0;
        var we = (c + (n = n + Math.imul(u, ue) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ge) | 0) + Math.imul(g, ue) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(g, ge) | 0) + (r >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(J, G), r = (r = Math.imul(J, P)) + Math.imul(O, G) | 0, o = Math.imul(O, P), n = n + Math.imul(U, x) | 0, r = (r = r + Math.imul(U, H) | 0) + Math.imul(L, x) | 0, o = o + Math.imul(L, H) | 0, n = n + Math.imul(F, W) | 0, r = (r = r + Math.imul(F, j) | 0) + Math.imul(v, W) | 0, o = o + Math.imul(v, j) | 0, n = n + Math.imul(D, X) | 0, r = (r = r + Math.imul(D, Z) | 0) + Math.imul(S, X) | 0, o = o + Math.imul(S, Z) | 0, n = n + Math.imul(b, $) | 0, r = (r = r + Math.imul(b, ee) | 0) + Math.imul(N, $) | 0, o = o + Math.imul(N, ee) | 0, n = n + Math.imul(y, Ae) | 0, r = (r = r + Math.imul(y, ne) | 0) + Math.imul(w, Ae) | 0, o = o + Math.imul(w, ne) | 0, n = n + Math.imul(C, oe) | 0, r = (r = r + Math.imul(C, se) | 0) + Math.imul(p, oe) | 0, o = o + Math.imul(p, se) | 0, n = n + Math.imul(B, ae) | 0, r = (r = r + Math.imul(B, ce) | 0) + Math.imul(Q, ae) | 0, o = o + Math.imul(Q, ce) | 0, n = n + Math.imul(h, ue) | 0, r = (r = r + Math.imul(h, ge) | 0) + Math.imul(d, ue) | 0, o = o + Math.imul(d, ge) | 0;
        var ke = (c + (n = n + Math.imul(u, he) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, de) | 0) + Math.imul(g, he) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(g, de) | 0) + (r >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(J, x), r = (r = Math.imul(J, H)) + Math.imul(O, x) | 0, o = Math.imul(O, H), n = n + Math.imul(U, W) | 0, r = (r = r + Math.imul(U, j) | 0) + Math.imul(L, W) | 0, o = o + Math.imul(L, j) | 0, n = n + Math.imul(F, X) | 0, r = (r = r + Math.imul(F, Z) | 0) + Math.imul(v, X) | 0, o = o + Math.imul(v, Z) | 0, n = n + Math.imul(D, $) | 0, r = (r = r + Math.imul(D, ee) | 0) + Math.imul(S, $) | 0, o = o + Math.imul(S, ee) | 0, n = n + Math.imul(b, Ae) | 0, r = (r = r + Math.imul(b, ne) | 0) + Math.imul(N, Ae) | 0, o = o + Math.imul(N, ne) | 0, n = n + Math.imul(y, oe) | 0, r = (r = r + Math.imul(y, se) | 0) + Math.imul(w, oe) | 0, o = o + Math.imul(w, se) | 0, n = n + Math.imul(C, ae) | 0, r = (r = r + Math.imul(C, ce) | 0) + Math.imul(p, ae) | 0, o = o + Math.imul(p, ce) | 0, n = n + Math.imul(B, ue) | 0, r = (r = r + Math.imul(B, ge) | 0) + Math.imul(Q, ue) | 0, o = o + Math.imul(Q, ge) | 0;
        var be = (c + (n = n + Math.imul(h, he) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(h, de) | 0) + Math.imul(d, he) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(d, de) | 0) + (r >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, n = Math.imul(J, W), r = (r = Math.imul(J, j)) + Math.imul(O, W) | 0, o = Math.imul(O, j), n = n + Math.imul(U, X) | 0, r = (r = r + Math.imul(U, Z) | 0) + Math.imul(L, X) | 0, o = o + Math.imul(L, Z) | 0, n = n + Math.imul(F, $) | 0, r = (r = r + Math.imul(F, ee) | 0) + Math.imul(v, $) | 0, o = o + Math.imul(v, ee) | 0, n = n + Math.imul(D, Ae) | 0, r = (r = r + Math.imul(D, ne) | 0) + Math.imul(S, Ae) | 0, o = o + Math.imul(S, ne) | 0, n = n + Math.imul(b, oe) | 0, r = (r = r + Math.imul(b, se) | 0) + Math.imul(N, oe) | 0, o = o + Math.imul(N, se) | 0, n = n + Math.imul(y, ae) | 0, r = (r = r + Math.imul(y, ce) | 0) + Math.imul(w, ae) | 0, o = o + Math.imul(w, ce) | 0, n = n + Math.imul(C, ue) | 0, r = (r = r + Math.imul(C, ge) | 0) + Math.imul(p, ue) | 0, o = o + Math.imul(p, ge) | 0;
        var Ne = (c + (n = n + Math.imul(B, he) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(B, de) | 0) + Math.imul(Q, he) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(Q, de) | 0) + (r >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, n = Math.imul(J, X), r = (r = Math.imul(J, Z)) + Math.imul(O, X) | 0, o = Math.imul(O, Z), n = n + Math.imul(U, $) | 0, r = (r = r + Math.imul(U, ee) | 0) + Math.imul(L, $) | 0, o = o + Math.imul(L, ee) | 0, n = n + Math.imul(F, Ae) | 0, r = (r = r + Math.imul(F, ne) | 0) + Math.imul(v, Ae) | 0, o = o + Math.imul(v, ne) | 0, n = n + Math.imul(D, oe) | 0, r = (r = r + Math.imul(D, se) | 0) + Math.imul(S, oe) | 0, o = o + Math.imul(S, se) | 0, n = n + Math.imul(b, ae) | 0, r = (r = r + Math.imul(b, ce) | 0) + Math.imul(N, ae) | 0, o = o + Math.imul(N, ce) | 0, n = n + Math.imul(y, ue) | 0, r = (r = r + Math.imul(y, ge) | 0) + Math.imul(w, ue) | 0, o = o + Math.imul(w, ge) | 0;
        var Te = (c + (n = n + Math.imul(C, he) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(C, de) | 0) + Math.imul(p, he) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(p, de) | 0) + (r >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(J, $), r = (r = Math.imul(J, ee)) + Math.imul(O, $) | 0, o = Math.imul(O, ee), n = n + Math.imul(U, Ae) | 0, r = (r = r + Math.imul(U, ne) | 0) + Math.imul(L, Ae) | 0, o = o + Math.imul(L, ne) | 0, n = n + Math.imul(F, oe) | 0, r = (r = r + Math.imul(F, se) | 0) + Math.imul(v, oe) | 0, o = o + Math.imul(v, se) | 0, n = n + Math.imul(D, ae) | 0, r = (r = r + Math.imul(D, ce) | 0) + Math.imul(S, ae) | 0, o = o + Math.imul(S, ce) | 0, n = n + Math.imul(b, ue) | 0, r = (r = r + Math.imul(b, ge) | 0) + Math.imul(N, ue) | 0, o = o + Math.imul(N, ge) | 0;
        var De = (c + (n = n + Math.imul(y, he) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(y, de) | 0) + Math.imul(w, he) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(w, de) | 0) + (r >>> 13) | 0) + (De >>> 26) | 0, De &= 67108863, n = Math.imul(J, Ae), r = (r = Math.imul(J, ne)) + Math.imul(O, Ae) | 0, o = Math.imul(O, ne), n = n + Math.imul(U, oe) | 0, r = (r = r + Math.imul(U, se) | 0) + Math.imul(L, oe) | 0, o = o + Math.imul(L, se) | 0, n = n + Math.imul(F, ae) | 0, r = (r = r + Math.imul(F, ce) | 0) + Math.imul(v, ae) | 0, o = o + Math.imul(v, ce) | 0, n = n + Math.imul(D, ue) | 0, r = (r = r + Math.imul(D, ge) | 0) + Math.imul(S, ue) | 0, o = o + Math.imul(S, ge) | 0;
        var Se = (c + (n = n + Math.imul(b, he) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(b, de) | 0) + Math.imul(N, he) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(N, de) | 0) + (r >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(J, oe), r = (r = Math.imul(J, se)) + Math.imul(O, oe) | 0, o = Math.imul(O, se), n = n + Math.imul(U, ae) | 0, r = (r = r + Math.imul(U, ce) | 0) + Math.imul(L, ae) | 0, o = o + Math.imul(L, ce) | 0, n = n + Math.imul(F, ue) | 0, r = (r = r + Math.imul(F, ge) | 0) + Math.imul(v, ue) | 0, o = o + Math.imul(v, ge) | 0;
        var Re = (c + (n = n + Math.imul(D, he) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(D, de) | 0) + Math.imul(S, he) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(S, de) | 0) + (r >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n = Math.imul(J, ae), r = (r = Math.imul(J, ce)) + Math.imul(O, ae) | 0, o = Math.imul(O, ce), n = n + Math.imul(U, ue) | 0, r = (r = r + Math.imul(U, ge) | 0) + Math.imul(L, ue) | 0, o = o + Math.imul(L, ge) | 0;
        var Fe = (c + (n = n + Math.imul(F, he) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(F, de) | 0) + Math.imul(v, he) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(v, de) | 0) + (r >>> 13) | 0) + (Fe >>> 26) | 0, Fe &= 67108863, n = Math.imul(J, ue), r = (r = Math.imul(J, ge)) + Math.imul(O, ue) | 0, o = Math.imul(O, ge);
        var ve = (c + (n = n + Math.imul(U, he) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(U, de) | 0) + Math.imul(L, he) | 0)) << 13) | 0;
        c = ((o = o + Math.imul(L, de) | 0) + (r >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863;
        var Me = (c + (n = Math.imul(J, he)) | 0) + ((8191 & (r = (r = Math.imul(J, de)) + Math.imul(O, he) | 0)) << 13) | 0;
        return c = ((o = Math.imul(O, de)) + (r >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, a[0] = Ie, a[1] = Be, a[2] = Qe, a[3] = fe, a[4] = Ce, a[5] = pe, a[6] = me, a[7] = ye, a[8] = we, a[9] = ke, a[10] = be, a[11] = Ne, a[12] = Te, a[13] = De, a[14] = Se, a[15] = Re, a[16] = Fe, a[17] = ve, a[18] = Me, 0 !== c && (a[19] = c, A.length++), A;
    };
    function d(e, t, A) {
        return (new I).mulp(e, t, A);
    }
    function I(e, t) {
        this.x = e, this.y = t;
    }
    Math.imul || (h = E), o.prototype.mulTo = function(e, t) {
        var A, n = this.length + e.length;
        return A = 10 === this.length && 10 === e.length ? h(this, e, t) : n < 63 ? E(this, e, t) : n < 1024 ? function(e, t, A) {
            A.negative = t.negative ^ e.negative, A.length = e.length + t.length;
            for(var n = 0, r = 0, o = 0; o < A.length - 1; o++){
                var s = r;
                r = 0;
                for(var i = 67108863 & n, a = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= a; c++){
                    var l = o - c, u = (0 | e.words[l]) * (0 | t.words[c]), g = 67108863 & u;
                    i = 67108863 & (g = g + i | 0), r += (s = (s = s + (u / 67108864 | 0) | 0) + (g >>> 26) | 0) >>> 26, s &= 67108863;
                }
                A.words[o] = i, n = s, s = r;
            }
            return 0 !== n ? A.words[o] = n : A.length--, A.strip();
        }(this, e, t) : d(this, e, t), A;
    }, I.prototype.makeRBT = function(e) {
        for(var t = new Array(e), A = o.prototype._countBits(e) - 1, n = 0; n < e; n++)t[n] = this.revBin(n, A, e);
        return t;
    }, I.prototype.revBin = function(e, t, A) {
        if (0 === e || e === A - 1) return e;
        for(var n = 0, r = 0; r < t; r++)n |= (1 & e) << t - r - 1, e >>= 1;
        return n;
    }, I.prototype.permute = function(e, t, A, n, r, o) {
        for(var s = 0; s < o; s++)n[s] = t[e[s]], r[s] = A[e[s]];
    }, I.prototype.transform = function(e, t, A, n, r, o) {
        this.permute(o, e, t, A, n, r);
        for(var s = 1; s < r; s <<= 1)for(var i = s << 1, a = Math.cos(2 * Math.PI / i), c = Math.sin(2 * Math.PI / i), l = 0; l < r; l += i)for(var u = a, g = c, E = 0; E < s; E++){
            var h = A[l + E], d = n[l + E], I = A[l + E + s], B = n[l + E + s], Q = u * I - g * B;
            B = u * B + g * I, I = Q, A[l + E] = h + I, n[l + E] = d + B, A[l + E + s] = h - I, n[l + E + s] = d - B, E !== i && (Q = a * u - c * g, g = a * g + c * u, u = Q);
        }
    }, I.prototype.guessLen13b = function(e, t) {
        var A = 1 | Math.max(t, e), n = 1 & A, r = 0;
        for(A = A / 2 | 0; A; A >>>= 1)r++;
        return 1 << r + 1 + n;
    }, I.prototype.conjugate = function(e, t, A) {
        if (!(A <= 1)) for(var n = 0; n < A / 2; n++){
            var r = e[n];
            e[n] = e[A - n - 1], e[A - n - 1] = r, r = t[n], t[n] = -t[A - n - 1], t[A - n - 1] = -r;
        }
    }, I.prototype.normalize13b = function(e, t) {
        for(var A = 0, n = 0; n < t / 2; n++){
            var r = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + A;
            e[n] = 67108863 & r, A = r < 67108864 ? 0 : r / 67108864 | 0;
        }
        return e;
    }, I.prototype.convert13b = function(e, t, A, r) {
        for(var o = 0, s = 0; s < t; s++)o += 0 | e[s], A[2 * s] = 8191 & o, o >>>= 13, A[2 * s + 1] = 8191 & o, o >>>= 13;
        for(s = 2 * t; s < r; ++s)A[s] = 0;
        n(0 === o), n(!(-8192 & o));
    }, I.prototype.stub = function(e) {
        for(var t = new Array(e), A = 0; A < e; A++)t[A] = 0;
        return t;
    }, I.prototype.mulp = function(e, t, A) {
        var n = 2 * this.guessLen13b(e.length, t.length), r = this.makeRBT(n), o = this.stub(n), s = new Array(n), i = new Array(n), a = new Array(n), c = new Array(n), l = new Array(n), u = new Array(n), g = A.words;
        g.length = n, this.convert13b(e.words, e.length, s, n), this.convert13b(t.words, t.length, c, n), this.transform(s, o, i, a, n, r), this.transform(c, o, l, u, n, r);
        for(var E = 0; E < n; E++){
            var h = i[E] * l[E] - a[E] * u[E];
            a[E] = i[E] * u[E] + a[E] * l[E], i[E] = h;
        }
        return this.conjugate(i, a, n), this.transform(i, a, g, o, n, r), this.conjugate(g, o, n), this.normalize13b(g, n), A.negative = e.negative ^ t.negative, A.length = e.length + t.length, A.strip();
    }, o.prototype.mul = function(e) {
        var t = new o(null);
        return t.words = new Array(this.length + e.length), this.mulTo(e, t);
    }, o.prototype.mulf = function(e) {
        var t = new o(null);
        return t.words = new Array(this.length + e.length), d(this, e, t);
    }, o.prototype.imul = function(e) {
        return this.clone().mulTo(e, this);
    }, o.prototype.imuln = function(e) {
        n("number" == typeof e), n(e < 67108864);
        for(var t = 0, A = 0; A < this.length; A++){
            var r = (0 | this.words[A]) * e, o = (67108863 & r) + (67108863 & t);
            t >>= 26, t += r / 67108864 | 0, t += o >>> 26, this.words[A] = 67108863 & o;
        }
        return 0 !== t && (this.words[A] = t, this.length++), this.length = 0 === e ? 1 : this.length, this;
    }, o.prototype.muln = function(e) {
        return this.clone().imuln(e);
    }, o.prototype.sqr = function() {
        return this.mul(this);
    }, o.prototype.isqr = function() {
        return this.imul(this.clone());
    }, o.prototype.pow = function(e) {
        var t = function(e) {
            for(var t = new Array(e.bitLength()), A = 0; A < t.length; A++){
                var n = A / 26 | 0, r = A % 26;
                t[A] = (e.words[n] & 1 << r) >>> r;
            }
            return t;
        }(e);
        if (0 === t.length) return new o(1);
        for(var A = this, n = 0; n < t.length && 0 === t[n]; n++, A = A.sqr());
        if (++n < t.length) for(var r = A.sqr(); n < t.length; n++, r = r.sqr())0 !== t[n] && (A = A.mul(r));
        return A;
    }, o.prototype.iushln = function(e) {
        n("number" == typeof e && e >= 0);
        var t, A = e % 26, r = (e - A) / 26, o = 67108863 >>> 26 - A << 26 - A;
        if (0 !== A) {
            var s = 0;
            for(t = 0; t < this.length; t++){
                var i = this.words[t] & o, a = (0 | this.words[t]) - i << A;
                this.words[t] = a | s, s = i >>> 26 - A;
            }
            s && (this.words[t] = s, this.length++);
        }
        if (0 !== r) {
            for(t = this.length - 1; t >= 0; t--)this.words[t + r] = this.words[t];
            for(t = 0; t < r; t++)this.words[t] = 0;
            this.length += r;
        }
        return this.strip();
    }, o.prototype.ishln = function(e) {
        return n(0 === this.negative), this.iushln(e);
    }, o.prototype.iushrn = function(e, t, A) {
        var r;
        n("number" == typeof e && e >= 0), r = t ? (t - t % 26) / 26 : 0;
        var o = e % 26, s = Math.min((e - o) / 26, this.length), i = 67108863 ^ 67108863 >>> o << o, a = A;
        if (r -= s, r = Math.max(0, r), a) {
            for(var c = 0; c < s; c++)a.words[c] = this.words[c];
            a.length = s;
        }
        if (0 === s) ;
        else if (this.length > s) for(this.length -= s, c = 0; c < this.length; c++)this.words[c] = this.words[c + s];
        else this.words[0] = 0, this.length = 1;
        var l = 0;
        for(c = this.length - 1; c >= 0 && (0 !== l || c >= r); c--){
            var u = 0 | this.words[c];
            this.words[c] = l << 26 - o | u >>> o, l = u & i;
        }
        return a && 0 !== l && (a.words[a.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
    }, o.prototype.ishrn = function(e, t, A) {
        return n(0 === this.negative), this.iushrn(e, t, A);
    }, o.prototype.shln = function(e) {
        return this.clone().ishln(e);
    }, o.prototype.ushln = function(e) {
        return this.clone().iushln(e);
    }, o.prototype.shrn = function(e) {
        return this.clone().ishrn(e);
    }, o.prototype.ushrn = function(e) {
        return this.clone().iushrn(e);
    }, o.prototype.testn = function(e) {
        n("number" == typeof e && e >= 0);
        var t = e % 26, A = (e - t) / 26, r = 1 << t;
        return !(this.length <= A) && !!(this.words[A] & r);
    }, o.prototype.imaskn = function(e) {
        n("number" == typeof e && e >= 0);
        var t = e % 26, A = (e - t) / 26;
        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= A) return this;
        if (0 !== t && A++, this.length = Math.min(A, this.length), 0 !== t) {
            var r = 67108863 ^ 67108863 >>> t << t;
            this.words[this.length - 1] &= r;
        }
        return this.strip();
    }, o.prototype.maskn = function(e) {
        return this.clone().imaskn(e);
    }, o.prototype.iaddn = function(e) {
        return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e);
    }, o.prototype._iaddn = function(e) {
        this.words[0] += e;
        for(var t = 0; t < this.length && this.words[t] >= 67108864; t++)this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
        return this.length = Math.max(this.length, t + 1), this;
    }, o.prototype.isubn = function(e) {
        if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
        if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
        if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
        else for(var t = 0; t < this.length && this.words[t] < 0; t++)this.words[t] += 67108864, this.words[t + 1] -= 1;
        return this.strip();
    }, o.prototype.addn = function(e) {
        return this.clone().iaddn(e);
    }, o.prototype.subn = function(e) {
        return this.clone().isubn(e);
    }, o.prototype.iabs = function() {
        return this.negative = 0, this;
    }, o.prototype.abs = function() {
        return this.clone().iabs();
    }, o.prototype._ishlnsubmul = function(e, t, A) {
        var r, o, s = e.length + A;
        this._expand(s);
        var i = 0;
        for(r = 0; r < e.length; r++){
            o = (0 | this.words[r + A]) + i;
            var a = (0 | e.words[r]) * t;
            i = ((o -= 67108863 & a) >> 26) - (a / 67108864 | 0), this.words[r + A] = 67108863 & o;
        }
        for(; r < this.length - A; r++)i = (o = (0 | this.words[r + A]) + i) >> 26, this.words[r + A] = 67108863 & o;
        if (0 === i) return this.strip();
        for(n(-1 === i), i = 0, r = 0; r < this.length; r++)i = (o = -(0 | this.words[r]) + i) >> 26, this.words[r] = 67108863 & o;
        return this.negative = 1, this.strip();
    }, o.prototype._wordDiv = function(e, t) {
        var A = (this.length, e.length), n = this.clone(), r = e, s = 0 | r.words[r.length - 1];
        0 !== (A = 26 - this._countBits(s)) && (r = r.ushln(A), n.iushln(A), s = 0 | r.words[r.length - 1]);
        var i, a = n.length - r.length;
        if ("mod" !== t) {
            (i = new o(null)).length = a + 1, i.words = new Array(i.length);
            for(var c = 0; c < i.length; c++)i.words[c] = 0;
        }
        var l = n.clone()._ishlnsubmul(r, 1, a);
        0 === l.negative && (n = l, i && (i.words[a] = 1));
        for(var u = a - 1; u >= 0; u--){
            var g = 67108864 * (0 | n.words[r.length + u]) + (0 | n.words[r.length + u - 1]);
            for(g = Math.min(g / s | 0, 67108863), n._ishlnsubmul(r, g, u); 0 !== n.negative;)g--, n.negative = 0, n._ishlnsubmul(r, 1, u), n.isZero() || (n.negative ^= 1);
            i && (i.words[u] = g);
        }
        return i && i.strip(), n.strip(), "div" !== t && 0 !== A && n.iushrn(A), {
            div: i || null,
            mod: n
        };
    }, o.prototype.divmod = function(e, t, A) {
        return n(!e.isZero()), this.isZero() ? {
            div: new o(0),
            mod: new o(0)
        } : 0 !== this.negative && 0 === e.negative ? (i = this.neg().divmod(e, t), "mod" !== t && (r = i.div.neg()), "div" !== t && (s = i.mod.neg(), A && 0 !== s.negative && s.iadd(e)), {
            div: r,
            mod: s
        }) : 0 === this.negative && 0 !== e.negative ? (i = this.divmod(e.neg(), t), "mod" !== t && (r = i.div.neg()), {
            div: r,
            mod: i.mod
        }) : 0 !== (this.negative & e.negative) ? (i = this.neg().divmod(e.neg(), t), "div" !== t && (s = i.mod.neg(), A && 0 !== s.negative && s.isub(e)), {
            div: i.div,
            mod: s
        }) : e.length > this.length || this.cmp(e) < 0 ? {
            div: new o(0),
            mod: this
        } : 1 === e.length ? "div" === t ? {
            div: this.divn(e.words[0]),
            mod: null
        } : "mod" === t ? {
            div: null,
            mod: new o(this.modn(e.words[0]))
        } : {
            div: this.divn(e.words[0]),
            mod: new o(this.modn(e.words[0]))
        } : this._wordDiv(e, t);
        var r, s, i;
    }, o.prototype.div = function(e) {
        return this.divmod(e, "div", !1).div;
    }, o.prototype.mod = function(e) {
        return this.divmod(e, "mod", !1).mod;
    }, o.prototype.umod = function(e) {
        return this.divmod(e, "mod", !0).mod;
    }, o.prototype.divRound = function(e) {
        var t = this.divmod(e);
        if (t.mod.isZero()) return t.div;
        var A = 0 !== t.div.negative ? t.mod.isub(e) : t.mod, n = e.ushrn(1), r = e.andln(1), o = A.cmp(n);
        return o < 0 || 1 === r && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1);
    }, o.prototype.modn = function(e) {
        n(e <= 67108863);
        for(var t = (1 << 26) % e, A = 0, r = this.length - 1; r >= 0; r--)A = (t * A + (0 | this.words[r])) % e;
        return A;
    }, o.prototype.idivn = function(e) {
        n(e <= 67108863);
        for(var t = 0, A = this.length - 1; A >= 0; A--){
            var r = (0 | this.words[A]) + 67108864 * t;
            this.words[A] = r / e | 0, t = r % e;
        }
        return this.strip();
    }, o.prototype.divn = function(e) {
        return this.clone().idivn(e);
    }, o.prototype.egcd = function(e) {
        n(0 === e.negative), n(!e.isZero());
        var t = this, A = e.clone();
        t = 0 !== t.negative ? t.umod(e) : t.clone();
        for(var r = new o(1), s = new o(0), i = new o(0), a = new o(1), c = 0; t.isEven() && A.isEven();)t.iushrn(1), A.iushrn(1), ++c;
        for(var l = A.clone(), u = t.clone(); !t.isZero();){
            for(var g = 0, E = 1; 0 === (t.words[0] & E) && g < 26; ++g, E <<= 1);
            if (g > 0) for(t.iushrn(g); g-- > 0;)(r.isOdd() || s.isOdd()) && (r.iadd(l), s.isub(u)), r.iushrn(1), s.iushrn(1);
            for(var h = 0, d = 1; 0 === (A.words[0] & d) && h < 26; ++h, d <<= 1);
            if (h > 0) for(A.iushrn(h); h-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(l), a.isub(u)), i.iushrn(1), a.iushrn(1);
            t.cmp(A) >= 0 ? (t.isub(A), r.isub(i), s.isub(a)) : (A.isub(t), i.isub(r), a.isub(s));
        }
        return {
            a: i,
            b: a,
            gcd: A.iushln(c)
        };
    }, o.prototype._invmp = function(e) {
        n(0 === e.negative), n(!e.isZero());
        var t = this, A = e.clone();
        t = 0 !== t.negative ? t.umod(e) : t.clone();
        for(var r, s = new o(1), i = new o(0), a = A.clone(); t.cmpn(1) > 0 && A.cmpn(1) > 0;){
            for(var c = 0, l = 1; 0 === (t.words[0] & l) && c < 26; ++c, l <<= 1);
            if (c > 0) for(t.iushrn(c); c-- > 0;)s.isOdd() && s.iadd(a), s.iushrn(1);
            for(var u = 0, g = 1; 0 === (A.words[0] & g) && u < 26; ++u, g <<= 1);
            if (u > 0) for(A.iushrn(u); u-- > 0;)i.isOdd() && i.iadd(a), i.iushrn(1);
            t.cmp(A) >= 0 ? (t.isub(A), s.isub(i)) : (A.isub(t), i.isub(s));
        }
        return (r = 0 === t.cmpn(1) ? s : i).cmpn(0) < 0 && r.iadd(e), r;
    }, o.prototype.gcd = function(e) {
        if (this.isZero()) return e.abs();
        if (e.isZero()) return this.abs();
        var t = this.clone(), A = e.clone();
        t.negative = 0, A.negative = 0;
        for(var n = 0; t.isEven() && A.isEven(); n++)t.iushrn(1), A.iushrn(1);
        for(;;){
            for(; t.isEven();)t.iushrn(1);
            for(; A.isEven();)A.iushrn(1);
            var r = t.cmp(A);
            if (r < 0) {
                var o = t;
                t = A, A = o;
            } else if (0 === r || 0 === A.cmpn(1)) break;
            t.isub(A);
        }
        return A.iushln(n);
    }, o.prototype.invm = function(e) {
        return this.egcd(e).a.umod(e);
    }, o.prototype.isEven = function() {
        return !(1 & this.words[0]);
    }, o.prototype.isOdd = function() {
        return !(1 & ~this.words[0]);
    }, o.prototype.andln = function(e) {
        return this.words[0] & e;
    }, o.prototype.bincn = function(e) {
        n("number" == typeof e);
        var t = e % 26, A = (e - t) / 26, r = 1 << t;
        if (this.length <= A) return this._expand(A + 1), this.words[A] |= r, this;
        for(var o = r, s = A; 0 !== o && s < this.length; s++){
            var i = 0 | this.words[s];
            o = (i += o) >>> 26, i &= 67108863, this.words[s] = i;
        }
        return 0 !== o && (this.words[s] = o, this.length++), this;
    }, o.prototype.isZero = function() {
        return 1 === this.length && 0 === this.words[0];
    }, o.prototype.cmpn = function(e) {
        var t, A = e < 0;
        if (0 !== this.negative && !A) return -1;
        if (0 === this.negative && A) return 1;
        if (this.strip(), this.length > 1) t = 1;
        else {
            A && (e = -e), n(e <= 67108863, "Number is too big");
            var r = 0 | this.words[0];
            t = r === e ? 0 : r < e ? -1 : 1;
        }
        return 0 !== this.negative ? 0 | -t : t;
    }, o.prototype.cmp = function(e) {
        if (0 !== this.negative && 0 === e.negative) return -1;
        if (0 === this.negative && 0 !== e.negative) return 1;
        var t = this.ucmp(e);
        return 0 !== this.negative ? 0 | -t : t;
    }, o.prototype.ucmp = function(e) {
        if (this.length > e.length) return 1;
        if (this.length < e.length) return -1;
        for(var t = 0, A = this.length - 1; A >= 0; A--){
            var n = 0 | this.words[A], r = 0 | e.words[A];
            if (n !== r) {
                n < r ? t = -1 : n > r && (t = 1);
                break;
            }
        }
        return t;
    }, o.prototype.gtn = function(e) {
        return 1 === this.cmpn(e);
    }, o.prototype.gt = function(e) {
        return 1 === this.cmp(e);
    }, o.prototype.gten = function(e) {
        return this.cmpn(e) >= 0;
    }, o.prototype.gte = function(e) {
        return this.cmp(e) >= 0;
    }, o.prototype.ltn = function(e) {
        return -1 === this.cmpn(e);
    }, o.prototype.lt = function(e) {
        return -1 === this.cmp(e);
    }, o.prototype.lten = function(e) {
        return this.cmpn(e) <= 0;
    }, o.prototype.lte = function(e) {
        return this.cmp(e) <= 0;
    }, o.prototype.eqn = function(e) {
        return 0 === this.cmpn(e);
    }, o.prototype.eq = function(e) {
        return 0 === this.cmp(e);
    }, o.red = function(e) {
        return new y(e);
    }, o.prototype.toRed = function(e) {
        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e);
    }, o.prototype.fromRed = function() {
        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o.prototype._forceRed = function(e) {
        return this.red = e, this;
    }, o.prototype.forceRed = function(e) {
        return n(!this.red, "Already a number in reduction context"), this._forceRed(e);
    }, o.prototype.redAdd = function(e) {
        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e);
    }, o.prototype.redIAdd = function(e) {
        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e);
    }, o.prototype.redSub = function(e) {
        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e);
    }, o.prototype.redISub = function(e) {
        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e);
    }, o.prototype.redShl = function(e) {
        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e);
    }, o.prototype.redMul = function(e) {
        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e);
    }, o.prototype.redIMul = function(e) {
        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e);
    }, o.prototype.redSqr = function() {
        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o.prototype.redISqr = function() {
        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o.prototype.redSqrt = function() {
        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o.prototype.redInvm = function() {
        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o.prototype.redNeg = function() {
        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o.prototype.redPow = function(e) {
        return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e);
    };
    var B = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    function Q(e, t) {
        this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    function f() {
        Q.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    function C() {
        Q.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    function p() {
        Q.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    function m() {
        Q.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    function y(e) {
        if ("string" == typeof e) {
            var t = o._prime(e);
            this.m = t.p, this.prime = t;
        } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null;
    }
    function w(e) {
        y.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    Q.prototype._tmp = function() {
        var e = new o(null);
        return e.words = new Array(Math.ceil(this.n / 13)), e;
    }, Q.prototype.ireduce = function(e) {
        var t, A = e;
        do {
            this.split(A, this.tmp), t = (A = (A = this.imulK(A)).iadd(this.tmp)).bitLength();
        }while (t > this.n)
        var n = t < this.n ? -1 : A.ucmp(this.p);
        return 0 === n ? (A.words[0] = 0, A.length = 1) : n > 0 ? A.isub(this.p) : void 0 !== A.strip ? A.strip() : A._strip(), A;
    }, Q.prototype.split = function(e, t) {
        e.iushrn(this.n, 0, t);
    }, Q.prototype.imulK = function(e) {
        return e.imul(this.k);
    }, r(f, Q), f.prototype.split = function(e, t) {
        for(var A = 4194303, n = Math.min(e.length, 9), r = 0; r < n; r++)t.words[r] = e.words[r];
        if (t.length = n, e.length <= 9) return e.words[0] = 0, void (e.length = 1);
        var o = e.words[9];
        for(t.words[t.length++] = o & A, r = 10; r < e.length; r++){
            var s = 0 | e.words[r];
            e.words[r - 10] = (s & A) << 4 | o >>> 22, o = s;
        }
        o >>>= 22, e.words[r - 10] = o, 0 === o && e.length > 10 ? e.length -= 10 : e.length -= 9;
    }, f.prototype.imulK = function(e) {
        e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
        for(var t = 0, A = 0; A < e.length; A++){
            var n = 0 | e.words[A];
            t += 977 * n, e.words[A] = 67108863 & t, t = 64 * n + (t / 67108864 | 0);
        }
        return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e;
    }, r(C, Q), r(p, Q), r(m, Q), m.prototype.imulK = function(e) {
        for(var t = 0, A = 0; A < e.length; A++){
            var n = 19 * (0 | e.words[A]) + t, r = 67108863 & n;
            n >>>= 26, e.words[A] = r, t = n;
        }
        return 0 !== t && (e.words[e.length++] = t), e;
    }, o._prime = function(e) {
        if (B[e]) return B[e];
        var t;
        if ("k256" === e) t = new f;
        else if ("p224" === e) t = new C;
        else if ("p192" === e) t = new p;
        else {
            if ("p25519" !== e) throw new Error("Unknown prime " + e);
            t = new m;
        }
        return B[e] = t, t;
    }, y.prototype._verify1 = function(e) {
        n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers");
    }, y.prototype._verify2 = function(e, t) {
        n(0 === (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers");
    }, y.prototype.imod = function(e) {
        return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this);
    }, y.prototype.neg = function(e) {
        return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
    }, y.prototype.add = function(e, t) {
        this._verify2(e, t);
        var A = e.add(t);
        return A.cmp(this.m) >= 0 && A.isub(this.m), A._forceRed(this);
    }, y.prototype.iadd = function(e, t) {
        this._verify2(e, t);
        var A = e.iadd(t);
        return A.cmp(this.m) >= 0 && A.isub(this.m), A;
    }, y.prototype.sub = function(e, t) {
        this._verify2(e, t);
        var A = e.sub(t);
        return A.cmpn(0) < 0 && A.iadd(this.m), A._forceRed(this);
    }, y.prototype.isub = function(e, t) {
        this._verify2(e, t);
        var A = e.isub(t);
        return A.cmpn(0) < 0 && A.iadd(this.m), A;
    }, y.prototype.shl = function(e, t) {
        return this._verify1(e), this.imod(e.ushln(t));
    }, y.prototype.imul = function(e, t) {
        return this._verify2(e, t), this.imod(e.imul(t));
    }, y.prototype.mul = function(e, t) {
        return this._verify2(e, t), this.imod(e.mul(t));
    }, y.prototype.isqr = function(e) {
        return this.imul(e, e.clone());
    }, y.prototype.sqr = function(e) {
        return this.mul(e, e);
    }, y.prototype.sqrt = function(e) {
        if (e.isZero()) return e.clone();
        var t = this.m.andln(3);
        if (n(t % 2 == 1), 3 === t) {
            var A = this.m.add(new o(1)).iushrn(2);
            return this.pow(e, A);
        }
        for(var r = this.m.subn(1), s = 0; !r.isZero() && 0 === r.andln(1);)s++, r.iushrn(1);
        n(!r.isZero());
        var i = new o(1).toRed(this), a = i.redNeg(), c = this.m.subn(1).iushrn(1), l = this.m.bitLength();
        for(l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, c).cmp(a);)l.redIAdd(a);
        for(var u = this.pow(l, r), g = this.pow(e, r.addn(1).iushrn(1)), E = this.pow(e, r), h = s; 0 !== E.cmp(i);){
            for(var d = E, I = 0; 0 !== d.cmp(i); I++)d = d.redSqr();
            n(I < h);
            var B = this.pow(u, new o(1).iushln(h - I - 1));
            g = g.redMul(B), u = B.redSqr(), E = E.redMul(u), h = I;
        }
        return g;
    }, y.prototype.invm = function(e) {
        var t = e._invmp(this.m);
        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t);
    }, y.prototype.pow = function(e, t) {
        if (t.isZero()) return new o(1).toRed(this);
        if (0 === t.cmpn(1)) return e.clone();
        var A = new Array(16);
        A[0] = new o(1).toRed(this), A[1] = e;
        for(var n = 2; n < A.length; n++)A[n] = this.mul(A[n - 1], e);
        var r = A[0], s = 0, i = 0, a = t.bitLength() % 26;
        for(0 === a && (a = 26), n = t.length - 1; n >= 0; n--){
            for(var c = t.words[n], l = a - 1; l >= 0; l--){
                var u = c >> l & 1;
                r !== A[0] && (r = this.sqr(r)), 0 !== u || 0 !== s ? (s <<= 1, s |= u, (4 === ++i || 0 === n && 0 === l) && (r = this.mul(r, A[s]), i = 0, s = 0)) : i = 0;
            }
            a = 26;
        }
        return r;
    }, y.prototype.convertTo = function(e) {
        var t = e.umod(this.m);
        return t === e ? t.clone() : t;
    }, y.prototype.convertFrom = function(e) {
        var t = e.clone();
        return t.red = null, t;
    }, o.mont = function(e) {
        return new w(e);
    }, r(w, y), w.prototype.convertTo = function(e) {
        return this.imod(e.ushln(this.shift));
    }, w.prototype.convertFrom = function(e) {
        var t = this.imod(e.mul(this.rinv));
        return t.red = null, t;
    }, w.prototype.imul = function(e, t) {
        if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
        var A = e.imul(t), n = A.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), r = A.isub(n).iushrn(this.shift), o = r;
        return r.cmp(this.m) >= 0 ? o = r.isub(this.m) : r.cmpn(0) < 0 && (o = r.iadd(this.m)), o._forceRed(this);
    }, w.prototype.mul = function(e, t) {
        if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
        var A = e.mul(t), n = A.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), r = A.isub(n).iushrn(this.shift), s = r;
        return r.cmp(this.m) >= 0 ? s = r.isub(this.m) : r.cmpn(0) < 0 && (s = r.iadd(this.m)), s._forceRed(this);
    }, w.prototype.invm = function(e) {
        return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
    };
}(module, this);
