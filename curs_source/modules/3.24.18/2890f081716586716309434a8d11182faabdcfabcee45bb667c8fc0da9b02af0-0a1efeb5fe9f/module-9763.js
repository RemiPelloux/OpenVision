"use strict";
var n = require("./module-7353.js"), a = require("./module-9761.js"), i = require("./module-7515.js"), o = require("./module-6417.js"), s = require("./module-6818.js"), f = -2, l = 12, h = 30;
function d(e) {
    return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
}
function u() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
function c(e) {
    var t;
    return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = 1, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new n.Buf32(852), t.distcode = t.distdyn = new n.Buf32(592), t.sane = 1, t.back = -1, 0) : f;
}
function _(e) {
    var t;
    return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, c(e)) : f;
}
function v(e, t) {
    var r, n;
    return e && e.state ? (n = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? f : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, _(e))) : f;
}
function w(e, t) {
    var r, n;
    return e ? (n = new u, e.state = n, n.window = null, 0 !== (r = v(e, t)) && (e.state = null), r) : f;
}
var g, b, p = !0;
function m(e) {
    if (p) {
        var t;
        for(g = new n.Buf32(512), b = new n.Buf32(32), t = 0; t < 144;)e.lens[t++] = 8;
        for(; t < 256;)e.lens[t++] = 9;
        for(; t < 280;)e.lens[t++] = 7;
        for(; t < 288;)e.lens[t++] = 8;
        for(s(1, e.lens, 0, 288, g, 0, e.work, {
            bits: 9
        }), t = 0; t < 32;)e.lens[t++] = 5;
        s(2, e.lens, 0, 32, b, 0, e.work, {
            bits: 5
        }), p = !1;
    }
    e.lencode = g, e.lenbits = 9, e.distcode = b, e.distbits = 5;
}
function k(e, t, r, a) {
    var i, o = e.state;
    return null === o.window && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new n.Buf8(o.wsize)), a >= o.wsize ? (n.arraySet(o.window, t, r - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : ((i = o.wsize - o.wnext) > a && (i = a), n.arraySet(o.window, t, r - a, i, o.wnext), (a -= i) ? (n.arraySet(o.window, t, r - a, a, 0), o.wnext = a, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i))), 0;
}
exports.inflateReset = _, exports.inflateReset2 = v, exports.inflateResetKeep = c, exports.inflateInit = function(e) {
    return w(e, 15);
}, exports.inflateInit2 = w, exports.inflate = function(e, t) {
    var r, u, c, _, v, w, g, b, p, y, x, A, E, I, B, U, z, D, S, M, F, C, N, O, L = 0, Z = new n.Buf8(4), R = [
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
    ];
    if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return f;
    (r = e.state).mode === l && (r.mode = 13), v = e.next_out, c = e.output, g = e.avail_out, _ = e.next_in, u = e.input, w = e.avail_in, b = r.hold, p = r.bits, y = w, x = g, C = 0;
    e: for(;;)switch(r.mode){
        case 1:
            if (0 === r.wrap) {
                r.mode = 13;
                break;
            }
            for(; p < 16;){
                if (0 === w) break e;
                w--, b += u[_++] << p, p += 8;
            }
            if (2 & r.wrap && 35615 === b) {
                r.check = 0, Z[0] = 255 & b, Z[1] = b >>> 8 & 255, r.check = i(r.check, Z, 2, 0), b = 0, p = 0, r.mode = 2;
                break;
            }
            if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & b) << 8) + (b >> 8)) % 31) {
                e.msg = "incorrect header check", r.mode = h;
                break;
            }
            if (8 != (15 & b)) {
                e.msg = "unknown compression method", r.mode = h;
                break;
            }
            if (p -= 4, F = 8 + (15 & (b >>>= 4)), 0 === r.wbits) r.wbits = F;
            else if (F > r.wbits) {
                e.msg = "invalid window size", r.mode = h;
                break;
            }
            r.dmax = 1 << F, e.adler = r.check = 1, r.mode = 512 & b ? 10 : l, b = 0, p = 0;
            break;
        case 2:
            for(; p < 16;){
                if (0 === w) break e;
                w--, b += u[_++] << p, p += 8;
            }
            if (r.flags = b, 8 != (255 & r.flags)) {
                e.msg = "unknown compression method", r.mode = h;
                break;
            }
            if (57344 & r.flags) {
                e.msg = "unknown header flags set", r.mode = h;
                break;
            }
            r.head && (r.head.text = b >> 8 & 1), 512 & r.flags && (Z[0] = 255 & b, Z[1] = b >>> 8 & 255, r.check = i(r.check, Z, 2, 0)), b = 0, p = 0, r.mode = 3;
        case 3:
            for(; p < 32;){
                if (0 === w) break e;
                w--, b += u[_++] << p, p += 8;
            }
            r.head && (r.head.time = b), 512 & r.flags && (Z[0] = 255 & b, Z[1] = b >>> 8 & 255, Z[2] = b >>> 16 & 255, Z[3] = b >>> 24 & 255, r.check = i(r.check, Z, 4, 0)), b = 0, p = 0, r.mode = 4;
        case 4:
            for(; p < 16;){
                if (0 === w) break e;
                w--, b += u[_++] << p, p += 8;
            }
            r.head && (r.head.xflags = 255 & b, r.head.os = b >> 8), 512 & r.flags && (Z[0] = 255 & b, Z[1] = b >>> 8 & 255, r.check = i(r.check, Z, 2, 0)), b = 0, p = 0, r.mode = 5;
        case 5:
            if (1024 & r.flags) {
                for(; p < 16;){
                    if (0 === w) break e;
                    w--, b += u[_++] << p, p += 8;
                }
                r.length = b, r.head && (r.head.extra_len = b), 512 & r.flags && (Z[0] = 255 & b, Z[1] = b >>> 8 & 255, r.check = i(r.check, Z, 2, 0)), b = 0, p = 0;
            } else r.head && (r.head.extra = null);
            r.mode = 6;
        case 6:
            if (1024 & r.flags && ((A = r.length) > w && (A = w), A && (r.head && (F = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), n.arraySet(r.head.extra, u, _, A, F)), 512 & r.flags && (r.check = i(r.check, u, A, _)), w -= A, _ += A, r.length -= A), r.length)) break e;
            r.length = 0, r.mode = 7;
        case 7:
            if (2048 & r.flags) {
                if (0 === w) break e;
                A = 0;
                do {
                    F = u[_ + A++], r.head && F && r.length < 65536 && (r.head.name += String.fromCharCode(F));
                }while (F && A < w)
                if (512 & r.flags && (r.check = i(r.check, u, A, _)), w -= A, _ += A, F) break e;
            } else r.head && (r.head.name = null);
            r.length = 0, r.mode = 8;
        case 8:
            if (4096 & r.flags) {
                if (0 === w) break e;
                A = 0;
                do {
                    F = u[_ + A++], r.head && F && r.length < 65536 && (r.head.comment += String.fromCharCode(F));
                }while (F && A < w)
                if (512 & r.flags && (r.check = i(r.check, u, A, _)), w -= A, _ += A, F) break e;
            } else r.head && (r.head.comment = null);
            r.mode = 9;
        case 9:
            if (512 & r.flags) {
                for(; p < 16;){
                    if (0 === w) break e;
                    w--, b += u[_++] << p, p += 8;
                }
                if (b !== (65535 & r.check)) {
                    e.msg = "header crc mismatch", r.mode = h;
                    break;
                }
                b = 0, p = 0;
            }
            r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = l;
            break;
        case 10:
            for(; p < 32;){
                if (0 === w) break e;
                w--, b += u[_++] << p, p += 8;
            }
            e.adler = r.check = d(b), b = 0, p = 0, r.mode = 11;
        case 11:
            if (0 === r.havedict) return e.next_out = v, e.avail_out = g, e.next_in = _, e.avail_in = w, r.hold = b, r.bits = p, 2;
            e.adler = r.check = 1, r.mode = l;
        case l:
            if (5 === t || 6 === t) break e;
        case 13:
            if (r.last) {
                b >>>= 7 & p, p -= 7 & p, r.mode = 27;
                break;
            }
            for(; p < 3;){
                if (0 === w) break e;
                w--, b += u[_++] << p, p += 8;
            }
            switch(r.last = 1 & b, p -= 1, 3 & (b >>>= 1)){
                case 0:
                    r.mode = 14;
                    break;
                case 1:
                    if (m(r), r.mode = 20, 6 === t) {
                        b >>>= 2, p -= 2;
                        break e;
                    }
                    break;
                case 2:
                    r.mode = 17;
                    break;
                case 3:
                    e.msg = "invalid block type", r.mode = h;
            }
            b >>>= 2, p -= 2;
            break;
        case 14:
            for(b >>>= 7 & p, p -= 7 & p; p < 32;){
                if (0 === w) break e;
                w--, b += u[_++] << p, p += 8;
            }
            if ((65535 & b) != (b >>> 16 ^ 65535)) {
                e.msg = "invalid stored block lengths", r.mode = h;
                break;
            }
            if (r.length = 65535 & b, b = 0, p = 0, r.mode = 15, 6 === t) break e;
        case 15:
            r.mode = 16;
        case 16:
            if (A = r.length) {
                if (A > w && (A = w), A > g && (A = g), 0 === A) break e;
                n.arraySet(c, u, _, A, v), w -= A, _ += A, g -= A, v += A, r.length -= A;
                break;
            }
            r.mode = l;
            break;
        case 17:
            for(; p < 14;){
                if (0 === w) break e;
                w--, b += u[_++] << p, p += 8;
            }
            if (r.nlen = 257 + (31 & b), b >>>= 5, p -= 5, r.ndist = 1 + (31 & b), b >>>= 5, p -= 5, r.ncode = 4 + (15 & b), b >>>= 4, p -= 4, r.nlen > 286 || r.ndist > 30) {
                e.msg = "too many length or distance symbols", r.mode = h;
                break;
            }
            r.have = 0, r.mode = 18;
        case 18:
            for(; r.have < r.ncode;){
                for(; p < 3;){
                    if (0 === w) break e;
                    w--, b += u[_++] << p, p += 8;
                }
                r.lens[R[r.have++]] = 7 & b, b >>>= 3, p -= 3;
            }
            for(; r.have < 19;)r.lens[R[r.have++]] = 0;
            if (r.lencode = r.lendyn, r.lenbits = 7, N = {
                bits: r.lenbits
            }, C = s(0, r.lens, 0, 19, r.lencode, 0, r.work, N), r.lenbits = N.bits, C) {
                e.msg = "invalid code lengths set", r.mode = h;
                break;
            }
            r.have = 0, r.mode = 19;
        case 19:
            for(; r.have < r.nlen + r.ndist;){
                for(; U = (L = r.lencode[b & (1 << r.lenbits) - 1]) >>> 16 & 255, z = 65535 & L, !((B = L >>> 24) <= p);){
                    if (0 === w) break e;
                    w--, b += u[_++] << p, p += 8;
                }
                if (z < 16) b >>>= B, p -= B, r.lens[r.have++] = z;
                else {
                    if (16 === z) {
                        for(O = B + 2; p < O;){
                            if (0 === w) break e;
                            w--, b += u[_++] << p, p += 8;
                        }
                        if (b >>>= B, p -= B, 0 === r.have) {
                            e.msg = "invalid bit length repeat", r.mode = h;
                            break;
                        }
                        F = r.lens[r.have - 1], A = 3 + (3 & b), b >>>= 2, p -= 2;
                    } else if (17 === z) {
                        for(O = B + 3; p < O;){
                            if (0 === w) break e;
                            w--, b += u[_++] << p, p += 8;
                        }
                        p -= B, F = 0, A = 3 + (7 & (b >>>= B)), b >>>= 3, p -= 3;
                    } else {
                        for(O = B + 7; p < O;){
                            if (0 === w) break e;
                            w--, b += u[_++] << p, p += 8;
                        }
                        p -= B, F = 0, A = 11 + (127 & (b >>>= B)), b >>>= 7, p -= 7;
                    }
                    if (r.have + A > r.nlen + r.ndist) {
                        e.msg = "invalid bit length repeat", r.mode = h;
                        break;
                    }
                    for(; A--;)r.lens[r.have++] = F;
                }
            }
            if (r.mode === h) break;
            if (0 === r.lens[256]) {
                e.msg = "invalid code -- missing end-of-block", r.mode = h;
                break;
            }
            if (r.lenbits = 9, N = {
                bits: r.lenbits
            }, C = s(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, N), r.lenbits = N.bits, C) {
                e.msg = "invalid literal/lengths set", r.mode = h;
                break;
            }
            if (r.distbits = 6, r.distcode = r.distdyn, N = {
                bits: r.distbits
            }, C = s(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, N), r.distbits = N.bits, C) {
                e.msg = "invalid distances set", r.mode = h;
                break;
            }
            if (r.mode = 20, 6 === t) break e;
        case 20:
            r.mode = 21;
        case 21:
            if (w >= 6 && g >= 258) {
                e.next_out = v, e.avail_out = g, e.next_in = _, e.avail_in = w, r.hold = b, r.bits = p, o(e, x), v = e.next_out, c = e.output, g = e.avail_out, _ = e.next_in, u = e.input, w = e.avail_in, b = r.hold, p = r.bits, r.mode === l && (r.back = -1);
                break;
            }
            for(r.back = 0; U = (L = r.lencode[b & (1 << r.lenbits) - 1]) >>> 16 & 255, z = 65535 & L, !((B = L >>> 24) <= p);){
                if (0 === w) break e;
                w--, b += u[_++] << p, p += 8;
            }
            if (U && !(240 & U)) {
                for(D = B, S = U, M = z; U = (L = r.lencode[M + ((b & (1 << D + S) - 1) >> D)]) >>> 16 & 255, z = 65535 & L, !(D + (B = L >>> 24) <= p);){
                    if (0 === w) break e;
                    w--, b += u[_++] << p, p += 8;
                }
                b >>>= D, p -= D, r.back += D;
            }
            if (b >>>= B, p -= B, r.back += B, r.length = z, 0 === U) {
                r.mode = 26;
                break;
            }
            if (32 & U) {
                r.back = -1, r.mode = l;
                break;
            }
            if (64 & U) {
                e.msg = "invalid literal/length code", r.mode = h;
                break;
            }
            r.extra = 15 & U, r.mode = 22;
        case 22:
            if (r.extra) {
                for(O = r.extra; p < O;){
                    if (0 === w) break e;
                    w--, b += u[_++] << p, p += 8;
                }
                r.length += b & (1 << r.extra) - 1, b >>>= r.extra, p -= r.extra, r.back += r.extra;
            }
            r.was = r.length, r.mode = 23;
        case 23:
            for(; U = (L = r.distcode[b & (1 << r.distbits) - 1]) >>> 16 & 255, z = 65535 & L, !((B = L >>> 24) <= p);){
                if (0 === w) break e;
                w--, b += u[_++] << p, p += 8;
            }
            if (!(240 & U)) {
                for(D = B, S = U, M = z; U = (L = r.distcode[M + ((b & (1 << D + S) - 1) >> D)]) >>> 16 & 255, z = 65535 & L, !(D + (B = L >>> 24) <= p);){
                    if (0 === w) break e;
                    w--, b += u[_++] << p, p += 8;
                }
                b >>>= D, p -= D, r.back += D;
            }
            if (b >>>= B, p -= B, r.back += B, 64 & U) {
                e.msg = "invalid distance code", r.mode = h;
                break;
            }
            r.offset = z, r.extra = 15 & U, r.mode = 24;
        case 24:
            if (r.extra) {
                for(O = r.extra; p < O;){
                    if (0 === w) break e;
                    w--, b += u[_++] << p, p += 8;
                }
                r.offset += b & (1 << r.extra) - 1, b >>>= r.extra, p -= r.extra, r.back += r.extra;
            }
            if (r.offset > r.dmax) {
                e.msg = "invalid distance too far back", r.mode = h;
                break;
            }
            r.mode = 25;
        case 25:
            if (0 === g) break e;
            if (A = x - g, r.offset > A) {
                if ((A = r.offset - A) > r.whave && r.sane) {
                    e.msg = "invalid distance too far back", r.mode = h;
                    break;
                }
                A > r.wnext ? (A -= r.wnext, E = r.wsize - A) : E = r.wnext - A, A > r.length && (A = r.length), I = r.window;
            } else I = c, E = v - r.offset, A = r.length;
            A > g && (A = g), g -= A, r.length -= A;
            do {
                c[v++] = I[E++];
            }while (--A)
            0 === r.length && (r.mode = 21);
            break;
        case 26:
            if (0 === g) break e;
            c[v++] = r.length, g--, r.mode = 21;
            break;
        case 27:
            if (r.wrap) {
                for(; p < 32;){
                    if (0 === w) break e;
                    w--, b |= u[_++] << p, p += 8;
                }
                if (x -= g, e.total_out += x, r.total += x, x && (e.adler = r.check = r.flags ? i(r.check, c, x, v - x) : a(r.check, c, x, v - x)), x = g, (r.flags ? b : d(b)) !== r.check) {
                    e.msg = "incorrect data check", r.mode = h;
                    break;
                }
                b = 0, p = 0;
            }
            r.mode = 28;
        case 28:
            if (r.wrap && r.flags) {
                for(; p < 32;){
                    if (0 === w) break e;
                    w--, b += u[_++] << p, p += 8;
                }
                if (b !== (4294967295 & r.total)) {
                    e.msg = "incorrect length check", r.mode = h;
                    break;
                }
                b = 0, p = 0;
            }
            r.mode = 29;
        case 29:
            C = 1;
            break e;
        case h:
            C = -3;
            break e;
        case 31:
            return -4;
        default:
            return f;
    }
    return e.next_out = v, e.avail_out = g, e.next_in = _, e.avail_in = w, r.hold = b, r.bits = p, (r.wsize || x !== e.avail_out && r.mode < h && (r.mode < 27 || 4 !== t)) && k(e, e.output, e.next_out, x - e.avail_out) ? (r.mode = 31, -4) : (y -= e.avail_in, x -= e.avail_out, e.total_in += y, e.total_out += x, r.total += x, r.wrap && x && (e.adler = r.check = r.flags ? i(r.check, c, x, e.next_out - x) : a(r.check, c, x, e.next_out - x)), e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === l ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 === y && 0 === x || 4 === t) && 0 === C && (C = -5), C);
}, exports.inflateEnd = function(e) {
    if (!e || !e.state) return f;
    var t = e.state;
    return t.window && (t.window = null), e.state = null, 0;
}, exports.inflateGetHeader = function(e, t) {
    var r;
    return e && e.state && 2 & (r = e.state).wrap ? (r.head = t, t.done = !1, 0) : f;
}, exports.inflateSetDictionary = function(e, t) {
    var r, n = t.length;
    return e && e.state ? 0 !== (r = e.state).wrap && 11 !== r.mode ? f : 11 === r.mode && a(1, t, n, 0) !== r.check ? -3 : k(e, t, n, n) ? (r.mode = 31, -4) : (r.havedict = 1, 0) : f;
}, exports.inflateInfo = "pako inflate (from Nodeca project)";
