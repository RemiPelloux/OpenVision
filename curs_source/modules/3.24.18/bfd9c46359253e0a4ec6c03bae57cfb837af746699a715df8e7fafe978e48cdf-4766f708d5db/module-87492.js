"use strict";
const { Writable: n } = require("./module-2203.js"), s = require("./module-31293.js"), { BINARY_TYPES: o, EMPTY_BUFFER: i, kStatusCode: a, kWebSocket: c } = require("./module-78864.js"), { concat: l, toArrayBuffer: u, unmask: d } = require("./module-39796.js"), { isValidStatusCode: p, isValidUTF8: m } = require("./module-16818.js"), h = Buffer[Symbol.species];
module.exports = class extends n {
    constructor(e = {}){
        super(), this._allowSynchronousEvents = void 0 === e.allowSynchronousEvents || e.allowSynchronousEvents, this._binaryType = e.binaryType || o[0], this._extensions = e.extensions || {}, this._isServer = !!e.isServer, this._maxBufferedChunks = 0 | e.maxBufferedChunks, this._maxFragments = 0 | e.maxFragments, this._maxPayload = 0 | e.maxPayload, this._skipUTF8Validation = !!e.skipUTF8Validation, this[c] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = !1, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = !1, this._fin = !1, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._numFragments = 0, this._fragments = [], this._errored = !1, this._loop = !1, this._state = 0;
    }
    _write(e, t, r) {
        if (8 === this._opcode && 0 == this._state) return r();
        this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks ? r(this.createError(RangeError, "Too many buffered chunks", !1, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS")) : (this._bufferedBytes += e.length, this._buffers.push(e), this.startLoop(r));
    }
    consume(e) {
        if (this._bufferedBytes -= e, e === this._buffers[0].length) return this._buffers.shift();
        if (e < this._buffers[0].length) {
            const t = this._buffers[0];
            return this._buffers[0] = new h(t.buffer, t.byteOffset + e, t.length - e), new h(t.buffer, t.byteOffset, e);
        }
        const t = Buffer.allocUnsafe(e);
        do {
            const r = this._buffers[0], n = t.length - e;
            e >= r.length ? t.set(this._buffers.shift(), n) : (t.set(new Uint8Array(r.buffer, r.byteOffset, e), n), this._buffers[0] = new h(r.buffer, r.byteOffset + e, r.length - e)), e -= r.length;
        }while (e > 0)
        return t;
    }
    startLoop(e) {
        this._loop = !0;
        do {
            switch(this._state){
                case 0:
                    this.getInfo(e);
                    break;
                case 1:
                    this.getPayloadLength16(e);
                    break;
                case 2:
                    this.getPayloadLength64(e);
                    break;
                case 3:
                    this.getMask();
                    break;
                case 4:
                    this.getData(e);
                    break;
                case 5:
                case 6:
                    return void (this._loop = !1);
            }
        }while (this._loop)
        this._errored || e();
    }
    getInfo(e) {
        if (this._bufferedBytes < 2) return void (this._loop = !1);
        const t = this.consume(2);
        if (48 & t[0]) {
            return void e(this.createError(RangeError, "RSV2 and RSV3 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_2_3"));
        }
        const r = !(64 & ~t[0]);
        if (r && !this._extensions[s.extensionName]) {
            return void e(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
        }
        if (this._fin = !(128 & ~t[0]), this._opcode = 15 & t[0], this._payloadLength = 127 & t[1], 0 === this._opcode) {
            if (r) {
                return void e(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
            }
            if (!this._fragmented) {
                return void e(this.createError(RangeError, "invalid opcode 0", !0, 1002, "WS_ERR_INVALID_OPCODE"));
            }
            this._opcode = this._fragmented;
        } else if (1 === this._opcode || 2 === this._opcode) {
            if (this._fragmented) {
                return void e(this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE"));
            }
            this._compressed = r;
        } else {
            if (!(this._opcode > 7 && this._opcode < 11)) {
                return void e(this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE"));
            }
            if (!this._fin) {
                return void e(this.createError(RangeError, "FIN must be set", !0, 1002, "WS_ERR_EXPECTED_FIN"));
            }
            if (r) {
                return void e(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
            }
            if (this._payloadLength > 125 || 8 === this._opcode && 1 === this._payloadLength) {
                return void e(this.createError(RangeError, `invalid payload length ${this._payloadLength}`, !0, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"));
            }
        }
        if (this._fin || this._fragmented || (this._fragmented = this._opcode), this._masked = !(128 & ~t[1]), this._isServer) {
            if (!this._masked) {
                return void e(this.createError(RangeError, "MASK must be set", !0, 1002, "WS_ERR_EXPECTED_MASK"));
            }
        } else if (this._masked) {
            return void e(this.createError(RangeError, "MASK must be clear", !0, 1002, "WS_ERR_UNEXPECTED_MASK"));
        }
        126 === this._payloadLength ? this._state = 1 : 127 === this._payloadLength ? this._state = 2 : this.haveLength(e);
    }
    getPayloadLength16(e) {
        this._bufferedBytes < 2 ? this._loop = !1 : (this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(e));
    }
    getPayloadLength64(e) {
        if (this._bufferedBytes < 8) return void (this._loop = !1);
        const t = this.consume(8), r = t.readUInt32BE(0);
        if (r > Math.pow(2, 21) - 1) {
            return void e(this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", !1, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"));
        }
        this._payloadLength = r * Math.pow(2, 32) + t.readUInt32BE(4), this.haveLength(e);
    }
    haveLength(e) {
        if (this._payloadLength && this._opcode < 8 && (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)) {
            return void e(this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"));
        }
        this._masked ? this._state = 3 : this._state = 4;
    }
    getMask() {
        this._bufferedBytes < 4 ? this._loop = !1 : (this._mask = this.consume(4), this._state = 4);
    }
    getData(e) {
        let t = i;
        if (this._payloadLength) {
            if (this._bufferedBytes < this._payloadLength) return void (this._loop = !1);
            t = this.consume(this._payloadLength), this._masked && 0 !== (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) && d(t, this._mask);
        }
        if (this._opcode > 7) this.controlMessage(t, e);
        else {
            if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments) {
                return void e(this.createError(RangeError, "Too many message fragments", !1, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS"));
            }
            if (this._compressed) return this._state = 5, void this.decompress(t, e);
            t.length && (this._messageLength = this._totalPayloadLength, this._fragments.push(t)), this.dataMessage(e);
        }
    }
    decompress(e, t) {
        this._extensions[s.extensionName].decompress(e, this._fin, (e, r)=>{
            if (e) return t(e);
            if (r.length) {
                if (this._messageLength += r.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
                    const e = this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
                    return void t(e);
                }
                this._fragments.push(r);
            }
            this.dataMessage(t), 0 === this._state && this.startLoop(t);
        });
    }
    dataMessage(e) {
        if (!this._fin) return void (this._state = 0);
        const t = this._messageLength, r = this._fragments;
        if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._numFragments = 0, this._fragments = [], 2 === this._opcode) {
            let n;
            n = "nodebuffer" === this._binaryType ? l(r, t) : "arraybuffer" === this._binaryType ? u(l(r, t)) : "blob" === this._binaryType ? new Blob(r) : r, this._allowSynchronousEvents ? (this.emit("message", n, !0), this._state = 0) : (this._state = 6, setImmediate(()=>{
                this.emit("message", n, !0), this._state = 0, this.startLoop(e);
            }));
        } else {
            const n = l(r, t);
            if (!this._skipUTF8Validation && !m(n)) {
                const t = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
                return void e(t);
            }
            5 === this._state || this._allowSynchronousEvents ? (this.emit("message", n, !1), this._state = 0) : (this._state = 6, setImmediate(()=>{
                this.emit("message", n, !1), this._state = 0, this.startLoop(e);
            }));
        }
    }
    controlMessage(e, t) {
        if (8 !== this._opcode) this._allowSynchronousEvents ? (this.emit(9 === this._opcode ? "ping" : "pong", e), this._state = 0) : (this._state = 6, setImmediate(()=>{
            this.emit(9 === this._opcode ? "ping" : "pong", e), this._state = 0, this.startLoop(t);
        }));
        else {
            if (0 === e.length) this._loop = !1, this.emit("conclude", 1005, i), this.end();
            else {
                const r = e.readUInt16BE(0);
                if (!p(r)) {
                    const e = this.createError(RangeError, `invalid status code ${r}`, !0, 1002, "WS_ERR_INVALID_CLOSE_CODE");
                    return void t(e);
                }
                const n = new h(e.buffer, e.byteOffset + 2, e.length - 2);
                if (!this._skipUTF8Validation && !m(n)) {
                    const e = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
                    return void t(e);
                }
                this._loop = !1, this.emit("conclude", r, n), this.end();
            }
            this._state = 0;
        }
    }
    createError(e, t, r, n, s) {
        this._loop = !1, this._errored = !0;
        const o = new e(r ? `Invalid WebSocket frame: ${t}` : t);
        return Error.captureStackTrace(o, this.createError), o.code = s, o[a] = n, o;
    }
};
