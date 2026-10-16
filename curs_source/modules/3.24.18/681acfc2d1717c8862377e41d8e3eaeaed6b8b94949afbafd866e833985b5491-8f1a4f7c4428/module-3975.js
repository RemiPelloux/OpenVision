"use strict";
const n = require("./module-2276.js"), r = require("./module-2823.js"), o = require("./module-9428.js").t, s = require("./module-7410.js"), i = require("./module-6457.js");
function a(e) {
    this.enc = "der", this.name = e.name, this.entity = e, this.tree = new c, this.tree._init(e.body);
}
function c(e) {
    s.call(this, "der", e);
}
function l(e, t) {
    let A = e.readUInt8(t);
    if (e.isError(A)) return A;
    const n = i.tagClass[A >> 6], r = !(32 & A);
    if (31 & ~A) A &= 31;
    else {
        let n = A;
        for(A = 0; !(128 & ~n);){
            if (n = e.readUInt8(t), e.isError(n)) return n;
            A <<= 7, A |= 127 & n;
        }
    }
    return {
        cls: n,
        primitive: r,
        tag: A,
        tagStr: i.tag[A]
    };
}
function u(e, t, A) {
    let n = e.readUInt8(A);
    if (e.isError(n)) return n;
    if (!t && 128 === n) return null;
    if (!(128 & n)) return n;
    const r = 127 & n;
    if (r > 4) return e.error("length octect is too long");
    n = 0;
    for(let t = 0; t < r; t++){
        n <<= 8;
        const t = e.readUInt8(A);
        if (e.isError(t)) return t;
        n |= t;
    }
    return n;
}
module.exports = a, a.prototype.decode = function(e, t) {
    return o.isDecoderBuffer(e) || (e = new o(e, t)), this.tree._decode(e, t);
}, n(c, s), c.prototype._peekTag = function(e, t, A) {
    if (e.isEmpty()) return !1;
    const n = e.save(), r = l(e, 'Failed to peek tag: "' + t + '"');
    return e.isError(r) ? r : (e.restore(n), r.tag === t || r.tagStr === t || r.tagStr + "of" === t || A);
}, c.prototype._decodeTag = function(e, t, A) {
    const n = l(e, 'Failed to decode tag of "' + t + '"');
    if (e.isError(n)) return n;
    let r = u(e, n.primitive, 'Failed to get length of "' + t + '"');
    if (e.isError(r)) return r;
    if (!A && n.tag !== t && n.tagStr !== t && n.tagStr + "of" !== t) return e.error('Failed to match tag: "' + t + '"');
    if (n.primitive || null !== r) return e.skip(r, 'Failed to match body of: "' + t + '"');
    const o = e.save(), s = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
    return e.isError(s) ? s : (r = e.offset - o.offset, e.restore(o), e.skip(r, 'Failed to match body of: "' + t + '"'));
}, c.prototype._skipUntilEnd = function(e, t) {
    for(;;){
        const A = l(e, t);
        if (e.isError(A)) return A;
        const n = u(e, A.primitive, t);
        if (e.isError(n)) return n;
        let r;
        if (r = A.primitive || null !== n ? e.skip(n) : this._skipUntilEnd(e, t), e.isError(r)) return r;
        if ("end" === A.tagStr) break;
    }
}, c.prototype._decodeList = function(e, t, A, n) {
    const r = [];
    for(; !e.isEmpty();){
        const t = this._peekTag(e, "end");
        if (e.isError(t)) return t;
        const o = A.decode(e, "der", n);
        if (e.isError(o) && t) break;
        r.push(o);
    }
    return r;
}, c.prototype._decodeStr = function(e, t) {
    if ("bitstr" === t) {
        const t = e.readUInt8();
        return e.isError(t) ? t : {
            unused: t,
            data: e.raw()
        };
    }
    if ("bmpstr" === t) {
        const t = e.raw();
        if (t.length % 2 == 1) return e.error("Decoding of string type: bmpstr length mismatch");
        let A = "";
        for(let e = 0; e < t.length / 2; e++)A += String.fromCharCode(t.readUInt16BE(2 * e));
        return A;
    }
    if ("numstr" === t) {
        const t = e.raw().toString("ascii");
        return this._isNumstr(t) ? t : e.error("Decoding of string type: numstr unsupported characters");
    }
    if ("octstr" === t) return e.raw();
    if ("objDesc" === t) return e.raw();
    if ("printstr" === t) {
        const t = e.raw().toString("ascii");
        return this._isPrintstr(t) ? t : e.error("Decoding of string type: printstr unsupported characters");
    }
    return /str$/.test(t) ? e.raw().toString() : e.error("Decoding of string type: " + t + " unsupported");
}, c.prototype._decodeObjid = function(e, t, A) {
    let n;
    const r = [];
    let o = 0, s = 0;
    for(; !e.isEmpty();)s = e.readUInt8(), o <<= 7, o |= 127 & s, 128 & s || (r.push(o), o = 0);
    128 & s && r.push(o);
    const i = r[0] / 40 | 0, a = r[0] % 40;
    if (n = A ? r : [
        i,
        a
    ].concat(r.slice(1)), t) {
        let e = t[n.join(" ")];
        void 0 === e && (e = t[n.join(".")]), void 0 !== e && (n = e);
    }
    return n;
}, c.prototype._decodeTime = function(e, t) {
    const A = e.raw().toString();
    let n, r, o, s, i, a;
    if ("gentime" === t) n = 0 | A.slice(0, 4), r = 0 | A.slice(4, 6), o = 0 | A.slice(6, 8), s = 0 | A.slice(8, 10), i = 0 | A.slice(10, 12), a = 0 | A.slice(12, 14);
    else {
        if ("utctime" !== t) return e.error("Decoding " + t + " time is not supported yet");
        n = 0 | A.slice(0, 2), r = 0 | A.slice(2, 4), o = 0 | A.slice(4, 6), s = 0 | A.slice(6, 8), i = 0 | A.slice(8, 10), a = 0 | A.slice(10, 12), n = n < 70 ? 2e3 + n : 1900 + n;
    }
    return Date.UTC(n, r - 1, o, s, i, a, 0);
}, c.prototype._decodeNull = function() {
    return null;
}, c.prototype._decodeBool = function(e) {
    const t = e.readUInt8();
    return e.isError(t) ? t : 0 !== t;
}, c.prototype._decodeInt = function(e, t) {
    const A = e.raw();
    let n = new r(A);
    return t && (n = t[n.toString(10)] || n), n;
}, c.prototype._use = function(e, t) {
    return "function" == typeof e && (e = e(t)), e._getDecoder("der").tree;
};
