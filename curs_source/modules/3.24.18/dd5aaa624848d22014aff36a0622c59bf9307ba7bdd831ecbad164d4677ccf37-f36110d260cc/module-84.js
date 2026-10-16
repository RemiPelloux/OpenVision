Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.varint32read = exports.varint32write = exports.uInt64ToString = exports.int64ToString = exports.int64FromString = exports.varint64write = exports.varint64read = void 0, exports.varint64read = function() {
    let e = 0, t = 0;
    for(let n = 0; n < 28; n += 7){
        let r = this.buf[this.pos++];
        if (e |= (127 & r) << n, !(128 & r)) return this.assertBounds(), [
            e,
            t
        ];
    }
    let n = this.buf[this.pos++];
    if (e |= (15 & n) << 28, t = (112 & n) >> 4, !(128 & n)) return this.assertBounds(), [
        e,
        t
    ];
    for(let n = 3; n <= 31; n += 7){
        let r = this.buf[this.pos++];
        if (t |= (127 & r) << n, !(128 & r)) return this.assertBounds(), [
            e,
            t
        ];
    }
    throw new Error("invalid varint");
}, exports.varint64write = function(e, t, n) {
    for(let r = 0; r < 28; r += 7){
        const o = e >>> r, a = !(o >>> 7 == 0 && 0 == t), s = 255 & (a ? 128 | o : o);
        if (n.push(s), !a) return;
    }
    const r = e >>> 28 & 15 | (7 & t) << 4, o = !!(t >> 3);
    if (n.push(255 & (o ? 128 | r : r)), o) {
        for(let e = 3; e < 31; e += 7){
            const r = t >>> e, o = !(r >>> 7 == 0), a = 255 & (o ? 128 | r : r);
            if (n.push(a), !o) return;
        }
        n.push(t >>> 31 & 1);
    }
};
const n = 4294967296;
function r(e, t) {
    if ({ lo: e, hi: t } = function(e, t) {
        return {
            lo: e >>> 0,
            hi: t >>> 0
        };
    }(e, t), t <= 2097151) return String(n * t + e);
    const r = 16777215 & (e >>> 24 | t << 8), o = t >> 16 & 65535;
    let a = (16777215 & e) + 6777216 * r + 6710656 * o, i = r + 8147497 * o, l = 2 * o;
    const u = 1e7;
    return a >= u && (i += Math.floor(a / u), a %= u), i >= u && (l += Math.floor(i / u), i %= u), l.toString() + s(i) + s(a);
}
function o(e, t) {
    return {
        lo: 0 | e,
        hi: 0 | t
    };
}
function a(e, t) {
    return t = ~t, e ? e = 1 + ~e : t += 1, o(e, t);
}
exports.int64FromString = function(e) {
    const t = "-" === e[0];
    t && (e = e.slice(1));
    const r = 1e6;
    let s = 0, i = 0;
    function l(t, o) {
        const a = Number(e.slice(t, o));
        i *= r, s = s * r + a, s >= n && (i += s / n | 0, s %= n);
    }
    return l(-24, -18), l(-18, -12), l(-12, -6), l(-6), t ? a(s, i) : o(s, i);
}, exports.int64ToString = function(e, t) {
    let n = o(e, t);
    const s = 2147483648 & n.hi;
    s && (n = a(n.lo, n.hi));
    const i = r(n.lo, n.hi);
    return s ? "-" + i : i;
}, exports.uInt64ToString = r;
const s = (e)=>{
    const t = String(e);
    return "0000000".slice(t.length) + t;
};
exports.varint32write = function(e, t) {
    if (e >= 0) {
        for(; e > 127;)t.push(127 & e | 128), e >>>= 7;
        t.push(e);
    } else {
        for(let n = 0; n < 9; n++)t.push(127 & e | 128), e >>= 7;
        t.push(1);
    }
}, exports.varint32read = function() {
    let e = this.buf[this.pos++], t = 127 & e;
    if (!(128 & e)) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (127 & e) << 7, !(128 & e)) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (127 & e) << 14, !(128 & e)) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (127 & e) << 21, !(128 & e)) return this.assertBounds(), t;
    e = this.buf[this.pos++], t |= (15 & e) << 28;
    for(let t = 5; 128 & e && t < 10; t++)e = this.buf[this.pos++];
    if (128 & e) throw new Error("invalid varint");
    return this.assertBounds(), t >>> 0;
};
