"use strict";
const { Duplex: n } = require("./module-2203.js"), { randomFillSync: s } = require("./module-76982.js"), { types: { isUint8Array: o } } = require("./module-39023.js"), i = require("./module-31293.js"), { EMPTY_BUFFER: a, kWebSocket: c, NOOP: l } = require("./module-78864.js"), { isBlob: u, isValidStatusCode: d } = require("./module-16818.js"), { mask: p, toBuffer: m } = require("./module-39796.js"), h = Symbol("kByteLength"), f = Buffer.alloc(4), g = 8192;
let y, w = g;
class v {
    constructor(e, t, r){
        this._extensions = t || {}, r && (this._generateMask = r, this._maskBuffer = Buffer.alloc(4)), this._socket = e, this._firstFragment = !0, this._compress = !1, this._bufferedBytes = 0, this._queue = [], this._state = 0, this.onerror = l, this[c] = void 0;
    }
    static frame(e, t) {
        let r, n, o = !1, i = 2, a = !1;
        t.mask && (r = t.maskBuffer || f, t.generateMask ? t.generateMask(r) : (w === g && (void 0 === y && (y = Buffer.alloc(g)), s(y, 0, g), w = 0), r[0] = y[w++], r[1] = y[w++], r[2] = y[w++], r[3] = y[w++]), a = 0 === (r[0] | r[1] | r[2] | r[3]), i = 6), "string" == typeof e ? n = t.mask && !a || void 0 === t[h] ? (e = Buffer.from(e)).length : t[h] : (n = e.length, o = t.mask && t.readOnly && !a);
        let c = n;
        n >= 65536 ? (i += 8, c = 127) : n > 125 && (i += 2, c = 126);
        const l = Buffer.allocUnsafe(o ? n + i : i);
        return l[0] = t.fin ? 128 | t.opcode : t.opcode, t.rsv1 && (l[0] |= 64), l[1] = c, 126 === c ? l.writeUInt16BE(n, 2) : 127 === c && (l[2] = l[3] = 0, l.writeUIntBE(n, 4, 6)), t.mask ? (l[1] |= 128, l[i - 4] = r[0], l[i - 3] = r[1], l[i - 2] = r[2], l[i - 1] = r[3], a ? [
            l,
            e
        ] : o ? (p(e, r, l, i, n), [
            l
        ]) : (p(e, r, e, 0, n), [
            l,
            e
        ])) : [
            l,
            e
        ];
    }
    close(e, t, r, n) {
        let s;
        if (void 0 === e) s = a;
        else {
            if ("number" != typeof e || !d(e)) throw new TypeError("First argument must be a valid error code number");
            if (void 0 !== t && t.length) {
                const r = Buffer.byteLength(t);
                if (r > 123) throw new RangeError("The message must not be greater than 123 bytes");
                if (s = Buffer.allocUnsafe(2 + r), s.writeUInt16BE(e, 0), "string" == typeof t) s.write(t, 2);
                else {
                    if (!o(t)) throw new TypeError("Second argument must be a string or a Uint8Array");
                    s.set(t, 2);
                }
            } else s = Buffer.allocUnsafe(2), s.writeUInt16BE(e, 0);
        }
        const i = {
            [h]: s.length,
            fin: !0,
            generateMask: this._generateMask,
            mask: r,
            maskBuffer: this._maskBuffer,
            opcode: 8,
            readOnly: !1,
            rsv1: !1
        };
        0 !== this._state ? this.enqueue([
            this.dispatch,
            s,
            !1,
            i,
            n
        ]) : this.sendFrame(v.frame(s, i), n);
    }
    ping(e, t, r) {
        let n, s;
        if ("string" == typeof e ? (n = Buffer.byteLength(e), s = !1) : u(e) ? (n = e.size, s = !1) : (n = (e = m(e)).length, s = m.readOnly), n > 125) throw new RangeError("The data size must not be greater than 125 bytes");
        const o = {
            [h]: n,
            fin: !0,
            generateMask: this._generateMask,
            mask: t,
            maskBuffer: this._maskBuffer,
            opcode: 9,
            readOnly: s,
            rsv1: !1
        };
        u(e) ? 0 !== this._state ? this.enqueue([
            this.getBlobData,
            e,
            !1,
            o,
            r
        ]) : this.getBlobData(e, !1, o, r) : 0 !== this._state ? this.enqueue([
            this.dispatch,
            e,
            !1,
            o,
            r
        ]) : this.sendFrame(v.frame(e, o), r);
    }
    pong(e, t, r) {
        let n, s;
        if ("string" == typeof e ? (n = Buffer.byteLength(e), s = !1) : u(e) ? (n = e.size, s = !1) : (n = (e = m(e)).length, s = m.readOnly), n > 125) throw new RangeError("The data size must not be greater than 125 bytes");
        const o = {
            [h]: n,
            fin: !0,
            generateMask: this._generateMask,
            mask: t,
            maskBuffer: this._maskBuffer,
            opcode: 10,
            readOnly: s,
            rsv1: !1
        };
        u(e) ? 0 !== this._state ? this.enqueue([
            this.getBlobData,
            e,
            !1,
            o,
            r
        ]) : this.getBlobData(e, !1, o, r) : 0 !== this._state ? this.enqueue([
            this.dispatch,
            e,
            !1,
            o,
            r
        ]) : this.sendFrame(v.frame(e, o), r);
    }
    send(e, t, r) {
        const n = this._extensions[i.extensionName];
        let s, o, a = t.binary ? 2 : 1, c = t.compress;
        "string" == typeof e ? (s = Buffer.byteLength(e), o = !1) : u(e) ? (s = e.size, o = !1) : (s = (e = m(e)).length, o = m.readOnly), this._firstFragment ? (this._firstFragment = !1, c && n && n.params[n._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] && (c = s >= n._threshold), this._compress = c) : (c = !1, a = 0), t.fin && (this._firstFragment = !0);
        const l = {
            [h]: s,
            fin: t.fin,
            generateMask: this._generateMask,
            mask: t.mask,
            maskBuffer: this._maskBuffer,
            opcode: a,
            readOnly: o,
            rsv1: c
        };
        u(e) ? 0 !== this._state ? this.enqueue([
            this.getBlobData,
            e,
            this._compress,
            l,
            r
        ]) : this.getBlobData(e, this._compress, l, r) : 0 !== this._state ? this.enqueue([
            this.dispatch,
            e,
            this._compress,
            l,
            r
        ]) : this.dispatch(e, this._compress, l, r);
    }
    getBlobData(e, t, r, n) {
        this._bufferedBytes += r[h], this._state = 2, e.arrayBuffer().then((e)=>{
            if (this._socket.destroyed) {
                const e = new Error("The socket was closed while the blob was being read");
                return void process.nextTick(_, this, e, n);
            }
            this._bufferedBytes -= r[h];
            const s = m(e);
            t ? this.dispatch(s, t, r, n) : (this._state = 0, this.sendFrame(v.frame(s, r), n), this.dequeue());
        }).catch((e)=>{
            process.nextTick(A, this, e, n);
        });
    }
    dispatch(e, t, r, n) {
        if (!t) return void this.sendFrame(v.frame(e, r), n);
        const s = this._extensions[i.extensionName];
        this._bufferedBytes += r[h], this._state = 1, s.compress(e, r.fin, (e, t)=>{
            if (this._socket.destroyed) {
                return void _(this, new Error("The socket was closed while data was being compressed"), n);
            }
            this._bufferedBytes -= r[h], this._state = 0, r.readOnly = !1, this.sendFrame(v.frame(t, r), n), this.dequeue();
        });
    }
    dequeue() {
        for(; 0 === this._state && this._queue.length;){
            const e = this._queue.shift();
            this._bufferedBytes -= e[3][h], Reflect.apply(e[0], this, e.slice(1));
        }
    }
    enqueue(e) {
        this._bufferedBytes += e[3][h], this._queue.push(e);
    }
    sendFrame(e, t) {
        2 === e.length ? (this._socket.cork(), this._socket.write(e[0]), this._socket.write(e[1], t), this._socket.uncork()) : this._socket.write(e[0], t);
    }
}
function _(e, t, r) {
    "function" == typeof r && r(t);
    for(let r = 0; r < e._queue.length; r++){
        const n = e._queue[r], s = n[n.length - 1];
        "function" == typeof s && s(t);
    }
}
function A(e, t, r) {
    _(e, t, r), e.onerror(t);
}
module.exports = v;
