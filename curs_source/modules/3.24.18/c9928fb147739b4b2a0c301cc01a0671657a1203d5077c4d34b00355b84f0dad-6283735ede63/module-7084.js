Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.varint32read = exports.varint32write = exports.uInt64ToString = exports.int64ToString = exports.int64FromString = exports.varint64write = exports.varint64read = void 0, exports.varint64read = function() {
    let e = 0, a = 0;
    for(let n = 0; n < 28; n += 7){
        let s = this.buf[this.pos++];
        if (e |= (127 & s) << n, !(128 & s)) return this.assertBounds(), [
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
        let s = this.buf[this.pos++];
        if (a |= (127 & s) << n, !(128 & s)) return this.assertBounds(), [
            e,
            a
        ];
    }
    throw new Error("invalid varint");
}, exports.varint64write = function(e, a, n) {
    for(let s = 0; s < 28; s += 7){
        const o = e >>> s, r = !(o >>> 7 == 0 && 0 == a), t = 255 & (r ? 128 | o : o);
        if (n.push(t), !r) return;
    }
    const s = e >>> 28 & 15 | (7 & a) << 4, o = !!(a >> 3);
    if (n.push(255 & (o ? 128 | s : s)), o) {
        for(let e = 3; e < 31; e += 7){
            const s = a >>> e, o = !(s >>> 7 == 0), r = 255 & (o ? 128 | s : s);
            if (n.push(r), !o) return;
        }
        n.push(a >>> 31 & 1);
    }
};
const n = 4294967296;
function s(e, a) {
    if ({ lo: e, hi: a } = function(e, a) {
        return {
            lo: e >>> 0,
            hi: a >>> 0
        };
    }(e, a), a <= 2097151) return String(n * a + e);
    const s = 16777215 & (e >>> 24 | a << 8), o = a >> 16 & 65535;
    let r = (16777215 & e) + 6777216 * s + 6710656 * o, i = s + 8147497 * o, m = 2 * o;
    const l = 1e7;
    return r >= l && (i += Math.floor(r / l), r %= l), i >= l && (m += Math.floor(i / l), i %= l), m.toString() + t(i) + t(r);
}
function o(e, a) {
    return {
        lo: 0 | e,
        hi: 0 | a
    };
}
function r(e, a) {
    return a = ~a, e ? e = 1 + ~e : a += 1, o(e, a);
}
exports.int64FromString = function(e) {
    const a = "-" === e[0];
    a && (e = e.slice(1));
    const s = 1e6;
    let t = 0, i = 0;
    function m(a, o) {
        const r = Number(e.slice(a, o));
        i *= s, t = t * s + r, t >= n && (i += t / n | 0, t %= n);
    }
    return m(-24, -18), m(-18, -12), m(-12, -6), m(-6), a ? r(t, i) : o(t, i);
}, exports.int64ToString = function(e, a) {
    let n = o(e, a);
    const t = 2147483648 & n.hi;
    t && (n = r(n.lo, n.hi));
    const i = s(n.lo, n.hi);
    return t ? "-" + i : i;
}, exports.uInt64ToString = s;
const t = (e)=>{
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
