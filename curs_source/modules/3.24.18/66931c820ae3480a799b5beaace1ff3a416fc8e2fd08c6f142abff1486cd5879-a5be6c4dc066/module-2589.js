"use strict";
var n = require("./module-7353.js");
function a(e) {
    for(var t = e.length; --t >= 0;)e[t] = 0;
}
var i = 256, o = 286, s = 30, f = 15, l = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
], h = [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
], d = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
], u = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
], c = new Array(576);
a(c);
var _ = new Array(60);
a(_);
var v = new Array(512);
a(v);
var w = new Array(256);
a(w);
var g = new Array(29);
a(g);
var b, p, m, k = new Array(s);
function y(e, t, r, n, a) {
    this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = n, this.max_length = a, this.has_stree = e && e.length;
}
function x(e, t) {
    this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
}
function A(e) {
    return e < 256 ? v[e] : v[256 + (e >>> 7)];
}
function E(e, t) {
    e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
}
function I(e, t, r) {
    e.bi_valid > 16 - r ? (e.bi_buf |= t << e.bi_valid & 65535, E(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += r - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r);
}
function B(e, t, r) {
    I(e, r[2 * t], r[2 * t + 1]);
}
function U(e, t) {
    var r = 0;
    do {
        r |= 1 & e, e >>>= 1, r <<= 1;
    }while (--t > 0)
    return r >>> 1;
}
function z(e, t, r) {
    var n, a, i = new Array(16), o = 0;
    for(n = 1; n <= f; n++)i[n] = o = o + r[n - 1] << 1;
    for(a = 0; a <= t; a++){
        var s = e[2 * a + 1];
        0 !== s && (e[2 * a] = U(i[s]++, s));
    }
}
function D(e) {
    var t;
    for(t = 0; t < o; t++)e.dyn_ltree[2 * t] = 0;
    for(t = 0; t < s; t++)e.dyn_dtree[2 * t] = 0;
    for(t = 0; t < 19; t++)e.bl_tree[2 * t] = 0;
    e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
}
function S(e) {
    e.bi_valid > 8 ? E(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}
function M(e, t, r, n) {
    var a = 2 * t, i = 2 * r;
    return e[a] < e[i] || e[a] === e[i] && n[t] <= n[r];
}
function F(e, t, r) {
    for(var n = e.heap[r], a = r << 1; a <= e.heap_len && (a < e.heap_len && M(t, e.heap[a + 1], e.heap[a], e.depth) && a++, !M(t, n, e.heap[a], e.depth));)e.heap[r] = e.heap[a], r = a, a <<= 1;
    e.heap[r] = n;
}
function C(e, t, r) {
    var n, a, o, s, f = 0;
    if (0 !== e.last_lit) do {
        n = e.pending_buf[e.d_buf + 2 * f] << 8 | e.pending_buf[e.d_buf + 2 * f + 1], a = e.pending_buf[e.l_buf + f], f++, 0 === n ? B(e, a, t) : (B(e, (o = w[a]) + i + 1, t), 0 !== (s = l[o]) && I(e, a -= g[o], s), B(e, o = A(--n), r), 0 !== (s = h[o]) && I(e, n -= k[o], s));
    }while (f < e.last_lit)
    B(e, 256, t);
}
function N(e, t) {
    var r, n, a, i = t.dyn_tree, o = t.stat_desc.static_tree, s = t.stat_desc.has_stree, l = t.stat_desc.elems, h = -1;
    for(e.heap_len = 0, e.heap_max = 573, r = 0; r < l; r++)0 !== i[2 * r] ? (e.heap[++e.heap_len] = h = r, e.depth[r] = 0) : i[2 * r + 1] = 0;
    for(; e.heap_len < 2;)i[2 * (a = e.heap[++e.heap_len] = h < 2 ? ++h : 0)] = 1, e.depth[a] = 0, e.opt_len--, s && (e.static_len -= o[2 * a + 1]);
    for(t.max_code = h, r = e.heap_len >> 1; r >= 1; r--)F(e, i, r);
    a = l;
    do {
        r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], F(e, i, 1), n = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = n, i[2 * a] = i[2 * r] + i[2 * n], e.depth[a] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1, i[2 * r + 1] = i[2 * n + 1] = a, e.heap[1] = a++, F(e, i, 1);
    }while (e.heap_len >= 2)
    e.heap[--e.heap_max] = e.heap[1], function(e, t) {
        var r, n, a, i, o, s, l = t.dyn_tree, h = t.max_code, d = t.stat_desc.static_tree, u = t.stat_desc.has_stree, c = t.stat_desc.extra_bits, _ = t.stat_desc.extra_base, v = t.stat_desc.max_length, w = 0;
        for(i = 0; i <= f; i++)e.bl_count[i] = 0;
        for(l[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < 573; r++)(i = l[2 * l[2 * (n = e.heap[r]) + 1] + 1] + 1) > v && (i = v, w++), l[2 * n + 1] = i, n > h || (e.bl_count[i]++, o = 0, n >= _ && (o = c[n - _]), s = l[2 * n], e.opt_len += s * (i + o), u && (e.static_len += s * (d[2 * n + 1] + o)));
        if (0 !== w) {
            do {
                for(i = v - 1; 0 === e.bl_count[i];)i--;
                e.bl_count[i]--, e.bl_count[i + 1] += 2, e.bl_count[v]--, w -= 2;
            }while (w > 0)
            for(i = v; 0 !== i; i--)for(n = e.bl_count[i]; 0 !== n;)(a = e.heap[--r]) > h || (l[2 * a + 1] !== i && (e.opt_len += (i - l[2 * a + 1]) * l[2 * a], l[2 * a + 1] = i), n--);
        }
    }(e, t), z(i, h, e.bl_count);
}
function O(e, t, r) {
    var n, a, i = -1, o = t[1], s = 0, f = 7, l = 4;
    for(0 === o && (f = 138, l = 3), t[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++)a = o, o = t[2 * (n + 1) + 1], ++s < f && a === o || (s < l ? e.bl_tree[2 * a] += s : 0 !== a ? (a !== i && e.bl_tree[2 * a]++, e.bl_tree[32]++) : s <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++, s = 0, i = a, 0 === o ? (f = 138, l = 3) : a === o ? (f = 6, l = 3) : (f = 7, l = 4));
}
function L(e, t, r) {
    var n, a, i = -1, o = t[1], s = 0, f = 7, l = 4;
    for(0 === o && (f = 138, l = 3), n = 0; n <= r; n++)if (a = o, o = t[2 * (n + 1) + 1], !(++s < f && a === o)) {
        if (s < l) do {
            B(e, a, e.bl_tree);
        }while (0 !== --s)
        else 0 !== a ? (a !== i && (B(e, a, e.bl_tree), s--), B(e, 16, e.bl_tree), I(e, s - 3, 2)) : s <= 10 ? (B(e, 17, e.bl_tree), I(e, s - 3, 3)) : (B(e, 18, e.bl_tree), I(e, s - 11, 7));
        s = 0, i = a, 0 === o ? (f = 138, l = 3) : a === o ? (f = 6, l = 3) : (f = 7, l = 4);
    }
}
a(k);
var Z = !1;
function R(e, t, r, a) {
    I(e, 0 + (a ? 1 : 0), 3), function(e, t, r, a) {
        S(e), a && (E(e, r), E(e, ~r)), n.arraySet(e.pending_buf, e.window, t, r, e.pending), e.pending += r;
    }(e, t, r, !0);
}
exports._tr_init = function(e) {
    Z || (!function() {
        var e, t, r, n, a, i = new Array(16);
        for(r = 0, n = 0; n < 28; n++)for(g[n] = r, e = 0; e < 1 << l[n]; e++)w[r++] = n;
        for(w[r - 1] = n, a = 0, n = 0; n < 16; n++)for(k[n] = a, e = 0; e < 1 << h[n]; e++)v[a++] = n;
        for(a >>= 7; n < s; n++)for(k[n] = a << 7, e = 0; e < 1 << h[n] - 7; e++)v[256 + a++] = n;
        for(t = 0; t <= f; t++)i[t] = 0;
        for(e = 0; e <= 143;)c[2 * e + 1] = 8, e++, i[8]++;
        for(; e <= 255;)c[2 * e + 1] = 9, e++, i[9]++;
        for(; e <= 279;)c[2 * e + 1] = 7, e++, i[7]++;
        for(; e <= 287;)c[2 * e + 1] = 8, e++, i[8]++;
        for(z(c, 287, i), e = 0; e < s; e++)_[2 * e + 1] = 5, _[2 * e] = U(e, 5);
        b = new y(c, l, 257, o, f), p = new y(_, h, 0, s, f), m = new y(new Array(0), d, 0, 19, 7);
    }(), Z = !0), e.l_desc = new x(e.dyn_ltree, b), e.d_desc = new x(e.dyn_dtree, p), e.bl_desc = new x(e.bl_tree, m), e.bi_buf = 0, e.bi_valid = 0, D(e);
}, exports._tr_stored_block = R, exports._tr_flush_block = function(e, t, r, n) {
    var a, o, s = 0;
    e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
        var t, r = 4093624447;
        for(t = 0; t <= 31; t++, r >>>= 1)if (1 & r && 0 !== e.dyn_ltree[2 * t]) return 0;
        if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
        for(t = 32; t < i; t++)if (0 !== e.dyn_ltree[2 * t]) return 1;
        return 0;
    }(e)), N(e, e.l_desc), N(e, e.d_desc), s = function(e) {
        var t;
        for(O(e, e.dyn_ltree, e.l_desc.max_code), O(e, e.dyn_dtree, e.d_desc.max_code), N(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * u[t] + 1]; t--);
        return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
    }(e), a = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= a && (a = o)) : a = o = r + 5, r + 4 <= a && -1 !== t ? R(e, t, r, n) : 4 === e.strategy || o === a ? (I(e, 2 + (n ? 1 : 0), 3), C(e, c, _)) : (I(e, 4 + (n ? 1 : 0), 3), function(e, t, r, n) {
        var a;
        for(I(e, t - 257, 5), I(e, r - 1, 5), I(e, n - 4, 4), a = 0; a < n; a++)I(e, e.bl_tree[2 * u[a] + 1], 3);
        L(e, e.dyn_ltree, t - 1), L(e, e.dyn_dtree, r - 1);
    }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), C(e, e.dyn_ltree, e.dyn_dtree)), D(e), n && S(e);
}, exports._tr_tally = function(e, t, r) {
    return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & r, e.last_lit++, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[2 * (w[r] + i + 1)]++, e.dyn_dtree[2 * A(t)]++), e.last_lit === e.lit_bufsize - 1;
}, exports._tr_align = function(e) {
    I(e, 2, 3), B(e, 256, c), function(e) {
        16 === e.bi_valid ? (E(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
    }(e);
};
