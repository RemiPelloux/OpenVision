"use strict";
const { Duplex: n } = require("./module-2203.js"), { randomFillSync: s } = require("./module-6982.js"), { types: { isUint8Array: i } } = require("./module-9023.js"), o = require("./module-1293.js"), { EMPTY_BUFFER: a, kWebSocket: u, NOOP: c } = require("./module-8864.js"), { isBlob: l, isValidStatusCode: m } = require("./module-6818.js"), { mask: d, toBuffer: f } = require("./module-9796.js"), p = Symbol("kByteLength"), h = Buffer.alloc(4), g = 8192;
let A, _ = g;
class y {
    constructor(t, e, r){
        this._extensions = e || {}, r && (this._generateMask = r, this._maskBuffer = Buffer.alloc(4)), this._socket = t, this._firstFragment = !0, this._compress = !1, this._bufferedBytes = 0, this._queue = [], this._state = 0, this.onerror = c, this[u] = void 0;
    }
    static frame(t, e) {
        let r, n, i = !1, o = 2, a = !1;
        e.mask && (r = e.maskBuffer || h, e.generateMask ? e.generateMask(r) : (_ === g && (void 0 === A && (A = Buffer.alloc(g)), s(A, 0, g), _ = 0), r[0] = A[_++], r[1] = A[_++], r[2] = A[_++], r[3] = A[_++]), a = 0 === (r[0] | r[1] | r[2] | r[3]), o = 6), "string" == typeof t ? n = e.mask && !a || void 0 === e[p] ? (t = Buffer.from(t)).length : e[p] : (n = t.length, i = e.mask && e.readOnly && !a);
        let u = n;
        n >= 65536 ? (o += 8, u = 127) : n > 125 && (o += 2, u = 126);
        const c = Buffer.allocUnsafe(i ? n + o : o);
        return c[0] = e.fin ? 128 | e.opcode : e.opcode, e.rsv1 && (c[0] |= 64), c[1] = u, 126 === u ? c.writeUInt16BE(n, 2) : 127 === u && (c[2] = c[3] = 0, c.writeUIntBE(n, 4, 6)), e.mask ? (c[1] |= 128, c[o - 4] = r[0], c[o - 3] = r[1], c[o - 2] = r[2], c[o - 1] = r[3], a ? [
            c,
            t
        ] : i ? (d(t, r, c, o, n), [
            c
        ]) : (d(t, r, t, 0, n), [
            c,
            t
        ])) : [
            c,
            t
        ];
    }
    close(t, e, r, n) {
        let s;
        if (void 0 === t) s = a;
        else {
            if ("number" != typeof t || !m(t)) throw new TypeError("First argument must be a valid error code number");
            if (void 0 !== e && e.length) {
                const r = Buffer.byteLength(e);
                if (r > 123) throw new RangeError("The message must not be greater than 123 bytes");
                if (s = Buffer.allocUnsafe(2 + r), s.writeUInt16BE(t, 0), "string" == typeof e) s.write(e, 2);
                else {
                    if (!i(e)) throw new TypeError("Second argument must be a string or a Uint8Array");
                    s.set(e, 2);
                }
            } else s = Buffer.allocUnsafe(2), s.writeUInt16BE(t, 0);
        }
        const o = {
            [p]: s.length,
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
            o,
            n
        ]) : this.sendFrame(y.frame(s, o), n);
    }
    ping(t, e, r) {
        let n, s;
        if ("string" == typeof t ? (n = Buffer.byteLength(t), s = !1) : l(t) ? (n = t.size, s = !1) : (n = (t = f(t)).length, s = f.readOnly), n > 125) throw new RangeError("The data size must not be greater than 125 bytes");
        const i = {
            [p]: n,
            fin: !0,
            generateMask: this._generateMask,
            mask: e,
            maskBuffer: this._maskBuffer,
            opcode: 9,
            readOnly: s,
            rsv1: !1
        };
        l(t) ? 0 !== this._state ? this.enqueue([
            this.getBlobData,
            t,
            !1,
            i,
            r
        ]) : this.getBlobData(t, !1, i, r) : 0 !== this._state ? this.enqueue([
            this.dispatch,
            t,
            !1,
            i,
            r
        ]) : this.sendFrame(y.frame(t, i), r);
    }
    pong(t, e, r) {
        let n, s;
        if ("string" == typeof t ? (n = Buffer.byteLength(t), s = !1) : l(t) ? (n = t.size, s = !1) : (n = (t = f(t)).length, s = f.readOnly), n > 125) throw new RangeError("The data size must not be greater than 125 bytes");
        const i = {
            [p]: n,
            fin: !0,
            generateMask: this._generateMask,
            mask: e,
            maskBuffer: this._maskBuffer,
            opcode: 10,
            readOnly: s,
            rsv1: !1
        };
        l(t) ? 0 !== this._state ? this.enqueue([
            this.getBlobData,
            t,
            !1,
            i,
            r
        ]) : this.getBlobData(t, !1, i, r) : 0 !== this._state ? this.enqueue([
            this.dispatch,
            t,
            !1,
            i,
            r
        ]) : this.sendFrame(y.frame(t, i), r);
    }
    send(t, e, r) {
        const n = this._extensions[o.extensionName];
        let s, i, a = e.binary ? 2 : 1, u = e.compress;
        "string" == typeof t ? (s = Buffer.byteLength(t), i = !1) : l(t) ? (s = t.size, i = !1) : (s = (t = f(t)).length, i = f.readOnly), this._firstFragment ? (this._firstFragment = !1, u && n && n.params[n._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] && (u = s >= n._threshold), this._compress = u) : (u = !1, a = 0), e.fin && (this._firstFragment = !0);
        const c = {
            [p]: s,
            fin: e.fin,
            generateMask: this._generateMask,
            mask: e.mask,
            maskBuffer: this._maskBuffer,
            opcode: a,
            readOnly: i,
            rsv1: u
        };
        l(t) ? 0 !== this._state ? this.enqueue([
            this.getBlobData,
            t,
            this._compress,
            c,
            r
        ]) : this.getBlobData(t, this._compress, c, r) : 0 !== this._state ? this.enqueue([
            this.dispatch,
            t,
            this._compress,
            c,
            r
        ]) : this.dispatch(t, this._compress, c, r);
    }
    getBlobData(t, e, r, n) {
        this._bufferedBytes += r[p], this._state = 2, t.arrayBuffer().then((t)=>{
            if (this._socket.destroyed) {
                const t = new Error("The socket was closed while the blob was being read");
                return void process.nextTick(w, this, t, n);
            }
            this._bufferedBytes -= r[p];
            const s = f(t);
            e ? this.dispatch(s, e, r, n) : (this._state = 0, this.sendFrame(y.frame(s, r), n), this.dequeue());
        }).catch((t)=>{
            process.nextTick(S, this, t, n);
        });
    }
    dispatch(t, e, r, n) {
        if (!e) return void this.sendFrame(y.frame(t, r), n);
        const s = this._extensions[o.extensionName];
        this._bufferedBytes += r[p], this._state = 1, s.compress(t, r.fin, (t, e)=>{
            if (this._socket.destroyed) {
                return void w(this, new Error("The socket was closed while data was being compressed"), n);
            }
            this._bufferedBytes -= r[p], this._state = 0, r.readOnly = !1, this.sendFrame(y.frame(e, r), n), this.dequeue();
        });
    }
    dequeue() {
        for(; 0 === this._state && this._queue.length;){
            const t = this._queue.shift();
            this._bufferedBytes -= t[3][p], Reflect.apply(t[0], this, t.slice(1));
        }
    }
    enqueue(t) {
        this._bufferedBytes += t[3][p], this._queue.push(t);
    }
    sendFrame(t, e) {
        2 === t.length ? (this._socket.cork(), this._socket.write(t[0]), this._socket.write(t[1], e), this._socket.uncork()) : this._socket.write(t[0], e);
    }
}
function w(t, e, r) {
    "function" == typeof r && r(e);
    for(let r = 0; r < t._queue.length; r++){
        const n = t._queue[r], s = n[n.length - 1];
        "function" == typeof s && s(e);
    }
}
function S(t, e, r) {
    w(t, e, r), t.onerror(e);
}
module.exports = y;
