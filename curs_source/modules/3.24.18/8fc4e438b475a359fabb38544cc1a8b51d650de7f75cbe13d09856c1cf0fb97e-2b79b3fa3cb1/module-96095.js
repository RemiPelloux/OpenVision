"use strict";
var n, a = require("./module-77353.js"), i = require("./module-12589.js"), o = require("./module-39761.js"), s = require("./module-17515.js"), f = require("./module-55534.js"), l = -2, h = 258, d = 262, u = 103, c = 113, _ = 666;
function v(e, t) {
    return e.msg = f[t], t;
}
function w(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
}
function g(e) {
    for(var t = e.length; --t >= 0;)e[t] = 0;
}
function b(e) {
    var t = e.state, r = t.pending;
    r > e.avail_out && (r = e.avail_out), 0 !== r && (a.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, 0 === t.pending && (t.pending_out = 0));
}
function p(e, t) {
    i._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, b(e.strm);
}
function m(e, t) {
    e.pending_buf[e.pending++] = t;
}
function k(e, t) {
    e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
}
function y(e, t, r, n) {
    var i = e.avail_in;
    return i > n && (i = n), 0 === i ? 0 : (e.avail_in -= i, a.arraySet(t, e.input, e.next_in, i, r), 1 === e.state.wrap ? e.adler = o(e.adler, t, i, r) : 2 === e.state.wrap && (e.adler = s(e.adler, t, i, r)), e.next_in += i, e.total_in += i, i);
}
function x(e, t) {
    var r, n, a = e.max_chain_length, i = e.strstart, o = e.prev_length, s = e.nice_match, f = e.strstart > e.w_size - d ? e.strstart - (e.w_size - d) : 0, l = e.window, u = e.w_mask, c = e.prev, _ = e.strstart + h, v = l[i + o - 1], w = l[i + o];
    e.prev_length >= e.good_match && (a >>= 2), s > e.lookahead && (s = e.lookahead);
    do {
        if (l[(r = t) + o] === w && l[r + o - 1] === v && l[r] === l[i] && l[++r] === l[i + 1]) {
            i += 2, r++;
            do {}while (l[++i] === l[++r] && l[++i] === l[++r] && l[++i] === l[++r] && l[++i] === l[++r] && l[++i] === l[++r] && l[++i] === l[++r] && l[++i] === l[++r] && l[++i] === l[++r] && i < _)
            if (n = h - (_ - i), i = _ - h, n > o) {
                if (e.match_start = t, o = n, n >= s) break;
                v = l[i + o - 1], w = l[i + o];
            }
        }
    }while ((t = c[t & u]) > f && 0 !== --a)
    return o <= e.lookahead ? o : e.lookahead;
}
function A(e) {
    var t, r, n, i, o, s = e.w_size;
    do {
        if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= s + (s - d)) {
            a.arraySet(e.window, e.window, s, s, 0), e.match_start -= s, e.strstart -= s, e.block_start -= s, t = r = e.hash_size;
            do {
                n = e.head[--t], e.head[t] = n >= s ? n - s : 0;
            }while (--r)
            t = r = s;
            do {
                n = e.prev[--t], e.prev[t] = n >= s ? n - s : 0;
            }while (--r)
            i += s;
        }
        if (0 === e.strm.avail_in) break;
        if (r = y(e.strm, e.window, e.strstart + e.lookahead, i), e.lookahead += r, e.lookahead + e.insert >= 3) for(o = e.strstart - e.insert, e.ins_h = e.window[o], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 3 - 1]) & e.hash_mask, e.prev[o & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = o, o++, e.insert--, !(e.lookahead + e.insert < 3)););
    }while (e.lookahead < d && 0 !== e.strm.avail_in)
}
function E(e, t) {
    for(var r, n;;){
        if (e.lookahead < d) {
            if (A(e), e.lookahead < d && 0 === t) return 1;
            if (0 === e.lookahead) break;
        }
        if (r = 0, e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== r && e.strstart - r <= e.w_size - d && (e.match_length = x(e, r)), e.match_length >= 3) if (n = i._tr_tally(e, e.strstart - e.match_start, e.match_length - 3), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
            e.match_length--;
            do {
                e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
            }while (0 !== --e.match_length)
            e.strstart++;
        } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
        else n = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
        if (n && (p(e, !1), 0 === e.strm.avail_out)) return 1;
    }
    return e.insert = e.strstart < 2 ? e.strstart : 2, 4 === t ? (p(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (p(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
}
function I(e, t) {
    for(var r, n, a;;){
        if (e.lookahead < d) {
            if (A(e), e.lookahead < d && 0 === t) return 1;
            if (0 === e.lookahead) break;
        }
        if (r = 0, e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = 2, 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - d && (e.match_length = x(e, r), e.match_length <= 5 && (1 === e.strategy || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)), e.prev_length >= 3 && e.match_length <= e.prev_length) {
            a = e.strstart + e.lookahead - 3, n = i._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
            do {
                ++e.strstart <= a && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
            }while (0 !== --e.prev_length)
            if (e.match_available = 0, e.match_length = 2, e.strstart++, n && (p(e, !1), 0 === e.strm.avail_out)) return 1;
        } else if (e.match_available) {
            if ((n = i._tr_tally(e, 0, e.window[e.strstart - 1])) && p(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1;
        } else e.match_available = 1, e.strstart++, e.lookahead--;
    }
    return e.match_available && (n = i._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < 2 ? e.strstart : 2, 4 === t ? (p(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (p(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
}
function B(e, t, r, n, a) {
    this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = n, this.func = a;
}
function U() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(1146), this.dyn_dtree = new a.Buf16(122), this.bl_tree = new a.Buf16(78), g(this.dyn_ltree), g(this.dyn_dtree), g(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(16), this.heap = new a.Buf16(573), g(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(573), g(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
function z(e) {
    var t;
    return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = 2, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? 42 : c, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = 0, i._tr_init(t), 0) : v(e, l);
}
function D(e) {
    var t, r = z(e);
    return 0 === r && ((t = e.state).window_size = 2 * t.w_size, g(t.head), t.max_lazy_match = n[t.level].max_lazy, t.good_match = n[t.level].good_length, t.nice_match = n[t.level].nice_length, t.max_chain_length = n[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = 2, t.match_available = 0, t.ins_h = 0), r;
}
function S(e, t, r, n, i, o) {
    if (!e) return l;
    var s = 1;
    if (-1 === t && (t = 6), n < 0 ? (s = 0, n = -n) : n > 15 && (s = 2, n -= 16), i < 1 || i > 9 || 8 !== r || n < 8 || n > 15 || t < 0 || t > 9 || o < 0 || o > 4) return v(e, l);
    8 === n && (n = 9);
    var f = new U;
    return e.state = f, f.strm = e, f.wrap = s, f.gzhead = null, f.w_bits = n, f.w_size = 1 << f.w_bits, f.w_mask = f.w_size - 1, f.hash_bits = i + 7, f.hash_size = 1 << f.hash_bits, f.hash_mask = f.hash_size - 1, f.hash_shift = ~~((f.hash_bits + 3 - 1) / 3), f.window = new a.Buf8(2 * f.w_size), f.head = new a.Buf16(f.hash_size), f.prev = new a.Buf16(f.w_size), f.lit_bufsize = 1 << i + 6, f.pending_buf_size = 4 * f.lit_bufsize, f.pending_buf = new a.Buf8(f.pending_buf_size), f.d_buf = 1 * f.lit_bufsize, f.l_buf = 3 * f.lit_bufsize, f.level = t, f.strategy = o, f.method = r, D(e);
}
n = [
    new B(0, 0, 0, 0, function(e, t) {
        var r = 65535;
        for(r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;){
            if (e.lookahead <= 1) {
                if (A(e), 0 === e.lookahead && 0 === t) return 1;
                if (0 === e.lookahead) break;
            }
            e.strstart += e.lookahead, e.lookahead = 0;
            var n = e.block_start + r;
            if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n, e.strstart = n, p(e, !1), 0 === e.strm.avail_out)) return 1;
            if (e.strstart - e.block_start >= e.w_size - d && (p(e, !1), 0 === e.strm.avail_out)) return 1;
        }
        return e.insert = 0, 4 === t ? (p(e, !0), 0 === e.strm.avail_out ? 3 : 4) : (e.strstart > e.block_start && (p(e, !1), e.strm.avail_out), 1);
    }),
    new B(4, 4, 8, 4, E),
    new B(4, 5, 16, 8, E),
    new B(4, 6, 32, 32, E),
    new B(4, 4, 16, 16, I),
    new B(8, 16, 32, 32, I),
    new B(8, 16, 128, 128, I),
    new B(8, 32, 128, 256, I),
    new B(32, 128, 258, 1024, I),
    new B(32, 258, 258, 4096, I)
], exports.deflateInit = function(e, t) {
    return S(e, t, 8, 15, 8, 0);
}, exports.deflateInit2 = S, exports.deflateReset = D, exports.deflateResetKeep = z, exports.deflateSetHeader = function(e, t) {
    return e && e.state ? 2 !== e.state.wrap ? l : (e.state.gzhead = t, 0) : l;
}, exports.deflate = function(e, t) {
    var r, a, o, f;
    if (!e || !e.state || t > 5 || t < 0) return e ? v(e, l) : l;
    if (a = e.state, !e.output || !e.input && 0 !== e.avail_in || a.status === _ && 4 !== t) return v(e, 0 === e.avail_out ? -5 : l);
    if (a.strm = e, r = a.last_flush, a.last_flush = t, 42 === a.status) if (2 === a.wrap) e.adler = 0, m(a, 31), m(a, 139), m(a, 8), a.gzhead ? (m(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), m(a, 255 & a.gzhead.time), m(a, a.gzhead.time >> 8 & 255), m(a, a.gzhead.time >> 16 & 255), m(a, a.gzhead.time >> 24 & 255), m(a, 9 === a.level ? 2 : a.strategy >= 2 || a.level < 2 ? 4 : 0), m(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (m(a, 255 & a.gzhead.extra.length), m(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (e.adler = s(e.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = 69) : (m(a, 0), m(a, 0), m(a, 0), m(a, 0), m(a, 0), m(a, 9 === a.level ? 2 : a.strategy >= 2 || a.level < 2 ? 4 : 0), m(a, 3), a.status = c);
    else {
        var d = 8 + (a.w_bits - 8 << 4) << 8;
        d |= (a.strategy >= 2 || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3) << 6, 0 !== a.strstart && (d |= 32), d += 31 - d % 31, a.status = c, k(a, d), 0 !== a.strstart && (k(a, e.adler >>> 16), k(a, 65535 & e.adler)), e.adler = 1;
    }
    if (69 === a.status) if (a.gzhead.extra) {
        for(o = a.pending; a.gzindex < (65535 & a.gzhead.extra.length) && (a.pending !== a.pending_buf_size || (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), b(e), o = a.pending, a.pending !== a.pending_buf_size));)m(a, 255 & a.gzhead.extra[a.gzindex]), a.gzindex++;
        a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), a.gzindex === a.gzhead.extra.length && (a.gzindex = 0, a.status = 73);
    } else a.status = 73;
    if (73 === a.status) if (a.gzhead.name) {
        o = a.pending;
        do {
            if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), b(e), o = a.pending, a.pending === a.pending_buf_size)) {
                f = 1;
                break;
            }
            f = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0, m(a, f);
        }while (0 !== f)
        a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), 0 === f && (a.gzindex = 0, a.status = 91);
    } else a.status = 91;
    if (91 === a.status) if (a.gzhead.comment) {
        o = a.pending;
        do {
            if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), b(e), o = a.pending, a.pending === a.pending_buf_size)) {
                f = 1;
                break;
            }
            f = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0, m(a, f);
        }while (0 !== f)
        a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), 0 === f && (a.status = u);
    } else a.status = u;
    if (a.status === u && (a.gzhead.hcrc ? (a.pending + 2 > a.pending_buf_size && b(e), a.pending + 2 <= a.pending_buf_size && (m(a, 255 & e.adler), m(a, e.adler >> 8 & 255), e.adler = 0, a.status = c)) : a.status = c), 0 !== a.pending) {
        if (b(e), 0 === e.avail_out) return a.last_flush = -1, 0;
    } else if (0 === e.avail_in && w(t) <= w(r) && 4 !== t) return v(e, -5);
    if (a.status === _ && 0 !== e.avail_in) return v(e, -5);
    if (0 !== e.avail_in || 0 !== a.lookahead || 0 !== t && a.status !== _) {
        var y = 2 === a.strategy ? function(e, t) {
            for(var r;;){
                if (0 === e.lookahead && (A(e), 0 === e.lookahead)) {
                    if (0 === t) return 1;
                    break;
                }
                if (e.match_length = 0, r = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (p(e, !1), 0 === e.strm.avail_out)) return 1;
            }
            return e.insert = 0, 4 === t ? (p(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (p(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
        }(a, t) : 3 === a.strategy ? function(e, t) {
            for(var r, n, a, o, s = e.window;;){
                if (e.lookahead <= h) {
                    if (A(e), e.lookahead <= h && 0 === t) return 1;
                    if (0 === e.lookahead) break;
                }
                if (e.match_length = 0, e.lookahead >= 3 && e.strstart > 0 && (n = s[a = e.strstart - 1]) === s[++a] && n === s[++a] && n === s[++a]) {
                    o = e.strstart + h;
                    do {}while (n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && a < o)
                    e.match_length = h - (o - a), e.match_length > e.lookahead && (e.match_length = e.lookahead);
                }
                if (e.match_length >= 3 ? (r = i._tr_tally(e, 1, e.match_length - 3), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (p(e, !1), 0 === e.strm.avail_out)) return 1;
            }
            return e.insert = 0, 4 === t ? (p(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (p(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
        }(a, t) : n[a.level].func(a, t);
        if (3 !== y && 4 !== y || (a.status = _), 1 === y || 3 === y) return 0 === e.avail_out && (a.last_flush = -1), 0;
        if (2 === y && (1 === t ? i._tr_align(a) : 5 !== t && (i._tr_stored_block(a, 0, 0, !1), 3 === t && (g(a.head), 0 === a.lookahead && (a.strstart = 0, a.block_start = 0, a.insert = 0))), b(e), 0 === e.avail_out)) return a.last_flush = -1, 0;
    }
    return 4 !== t ? 0 : a.wrap <= 0 ? 1 : (2 === a.wrap ? (m(a, 255 & e.adler), m(a, e.adler >> 8 & 255), m(a, e.adler >> 16 & 255), m(a, e.adler >> 24 & 255), m(a, 255 & e.total_in), m(a, e.total_in >> 8 & 255), m(a, e.total_in >> 16 & 255), m(a, e.total_in >> 24 & 255)) : (k(a, e.adler >>> 16), k(a, 65535 & e.adler)), b(e), a.wrap > 0 && (a.wrap = -a.wrap), 0 !== a.pending ? 0 : 1);
}, exports.deflateEnd = function(e) {
    var t;
    return e && e.state ? 42 !== (t = e.state.status) && 69 !== t && 73 !== t && 91 !== t && t !== u && t !== c && t !== _ ? v(e, l) : (e.state = null, t === c ? v(e, -3) : 0) : l;
}, exports.deflateSetDictionary = function(e, t) {
    var r, n, i, s, f, h, d, u, c = t.length;
    if (!e || !e.state) return l;
    if (2 === (s = (r = e.state).wrap) || 1 === s && 42 !== r.status || r.lookahead) return l;
    for(1 === s && (e.adler = o(e.adler, t, c, 0)), r.wrap = 0, c >= r.w_size && (0 === s && (g(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), u = new a.Buf8(r.w_size), a.arraySet(u, t, c - r.w_size, r.w_size, 0), t = u, c = r.w_size), f = e.avail_in, h = e.next_in, d = e.input, e.avail_in = c, e.next_in = 0, e.input = t, A(r); r.lookahead >= 3;){
        n = r.strstart, i = r.lookahead - 2;
        do {
            r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + 3 - 1]) & r.hash_mask, r.prev[n & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = n, n++;
        }while (--i)
        r.strstart = n, r.lookahead = 2, A(r);
    }
    return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = 2, r.match_available = 0, e.next_in = h, e.input = d, e.avail_in = f, r.wrap = s, 0;
}, exports.deflateInfo = "pako deflate (from Nodeca project)";
