Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.varint32read = exports.varint32write = exports.uInt64ToString = exports.int64ToString = exports.int64FromString = exports.varint64write = exports.varint64read = void 0, exports.varint64read = function() {
    let e = 0, a = 0;
    for(let n = 0; n < 28; n += 7){
        let o = this.buf[this.pos++];
        if (e |= (127 & o) << n, !(128 & o)) return this.assertBounds(), [
            e,
            a
        ];
    }
    let n = this.buf[this.pos++];
    if (e |= (15 & n) << 28, a = (112 & n) >> 4, !(128 & n)) return this.assertBounds(), [
        e,
        a
    ];
    for(let n = 3; n <= 31; n += 7){
        let o = this.buf[this.pos++];
        if (a |= (127 & o) << n, !(128 & o)) return this.assertBounds(), [
            e,
            a
        ];
    }
    throw new Error("invalid varint");
}, exports.varint64write = function(e, a, n) {
    for(let o = 0; o < 28; o += 7){
        const s = e >>> o, t = !(s >>> 7 == 0 && 0 == a), r = 255 & (t ? 128 | s : s);
        if (n.push(r), !t) return;
    }
    const o = e >>> 28 & 15 | (7 & a) << 4, s = !!(a >> 3);
    if (n.push(255 & (s ? 128 | o : o)), s) {
        for(let e = 3; e < 31; e += 7){
            const o = a >>> e, s = !(o >>> 7 == 0), t = 255 & (s ? 128 | o : o);
            if (n.push(t), !s) return;
        }
        n.push(a >>> 31 & 1);
    }
};
const n = 4294967296;
function o(e, a) {
    if ({ lo: e, hi: a } = function(e, a) {
        return {
            lo: e >>> 0,
            hi: a >>> 0
        };
    }(e, a), a <= 2097151) return String(n * a + e);
    const o = 16777215 & (e >>> 24 | a << 8), s = a >> 16 & 65535;
    let t = (16777215 & e) + 6777216 * o + 6710656 * s, i = o + 8147497 * s, m = 2 * s;
    const l = 1e7;
    return t >= l && (i += Math.floor(t / l), t %= l), i >= l && (m += Math.floor(i / l), i %= l), m.toString() + r(i) + r(t);
}
function s(e, a) {
    return {
        lo: 0 | e,
        hi: 0 | a
    };
}
function t(e, a) {
    return a = ~a, e ? e = 1 + ~e : a += 1, s(e, a);
}
exports.int64FromString = function(e) {
    const a = "-" === e[0];
    a && (e = e.slice(1));
    const o = 1e6;
    let r = 0, i = 0;
    function m(a, s) {
        const t = Number(e.slice(a, s));
        i *= o, r = r * o + t, r >= n && (i += r / n | 0, r %= n);
    }
    return m(-24, -18), m(-18, -12), m(-12, -6), m(-6), a ? t(r, i) : s(r, i);
}, exports.int64ToString = function(e, a) {
    let n = s(e, a);
    const r = 2147483648 & n.hi;
    r && (n = t(n.lo, n.hi));
    const i = o(n.lo, n.hi);
    return r ? "-" + i : i;
}, exports.uInt64ToString = o;
const r = (e)=>{
    const a = String(e);
    return "0000000".slice(a.length) + a;
};
exports.varint32write = function(e, a) {
    if (e >= 0) {
        for(; e > 127;)a.push(127 & e | 128), e >>>= 7;
        a.push(e);
    } else {
        for(let n = 0; n < 9; n++)a.push(127 & e | 128), e >>= 7;
        a.push(1);
    }
}, exports.varint32read = function() {
    let e = this.buf[this.pos++], a = 127 & e;
    if (!(128 & e)) return this.assertBounds(), a;
    if (e = this.buf[this.pos++], a |= (127 & e) << 7, !(128 & e)) return this.assertBounds(), a;
    if (e = this.buf[this.pos++], a |= (127 & e) << 14, !(128 & e)) return this.assertBounds(), a;
    if (e = this.buf[this.pos++], a |= (127 & e) << 21, !(128 & e)) return this.assertBounds(), a;
    e = this.buf[this.pos++], a |= (15 & e) << 28;
    for(let a = 5; 128 & e && a < 10; a++)e = this.buf[this.pos++];
    if (128 & e) throw new Error("invalid varint");
    return this.assertBounds(), a >>> 0;
};
