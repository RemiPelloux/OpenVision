"use strict";
const { Writable: n } = require("./module-2203.js"), s = require("./module-1293.js"), { BINARY_TYPES: i, EMPTY_BUFFER: o, kStatusCode: a, kWebSocket: u } = require("./module-8864.js"), { concat: c, toArrayBuffer: l, unmask: m } = require("./module-9796.js"), { isValidStatusCode: d, isValidUTF8: f } = require("./module-6818.js"), p = Buffer[Symbol.species];
module.exports = class extends n {
    constructor(t = {}){
        super(), this._allowSynchronousEvents = void 0 === t.allowSynchronousEvents || t.allowSynchronousEvents, this._binaryType = t.binaryType || i[0], this._extensions = t.extensions || {}, this._isServer = !!t.isServer, this._maxBufferedChunks = 0 | t.maxBufferedChunks, this._maxFragments = 0 | t.maxFragments, this._maxPayload = 0 | t.maxPayload, this._skipUTF8Validation = !!t.skipUTF8Validation, this[u] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = !1, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = !1, this._fin = !1, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._numFragments = 0, this._fragments = [], this._errored = !1, this._loop = !1, this._state = 0;
    }
    _write(t, e, r) {
        if (8 === this._opcode && 0 == this._state) return r();
        this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks ? r(this.createError(RangeError, "Too many buffered chunks", !1, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS")) : (this._bufferedBytes += t.length, this._buffers.push(t), this.startLoop(r));
    }
    consume(t) {
        if (this._bufferedBytes -= t, t === this._buffers[0].length) return this._buffers.shift();
        if (t < this._buffers[0].length) {
            const e = this._buffers[0];
            return this._buffers[0] = new p(e.buffer, e.byteOffset + t, e.length - t), new p(e.buffer, e.byteOffset, t);
        }
        const e = Buffer.allocUnsafe(t);
        do {
            const r = this._buffers[0], n = e.length - t;
            t >= r.length ? e.set(this._buffers.shift(), n) : (e.set(new Uint8Array(r.buffer, r.byteOffset, t), n), this._buffers[0] = new p(r.buffer, r.byteOffset + t, r.length - t)), t -= r.length;
        }while (t > 0)
        return e;
    }
    startLoop(t) {
        this._loop = !0;
        do {
            switch(this._state){
                case 0:
                    this.getInfo(t);
                    break;
                case 1:
                    this.getPayloadLength16(t);
                    break;
                case 2:
                    this.getPayloadLength64(t);
                    break;
                case 3:
                    this.getMask();
                    break;
                case 4:
                    this.getData(t);
                    break;
                case 5:
                case 6:
                    return void (this._loop = !1);
            }
        }while (this._loop)
        this._errored || t();
    }
    getInfo(t) {
        if (this._bufferedBytes < 2) return void (this._loop = !1);
        const e = this.consume(2);
        if (48 & e[0]) {
            return void t(this.createError(RangeError, "RSV2 and RSV3 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_2_3"));
        }
        const r = !(64 & ~e[0]);
        if (r && !this._extensions[s.extensionName]) {
            return void t(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
        }
        if (this._fin = !(128 & ~e[0]), this._opcode = 15 & e[0], this._payloadLength = 127 & e[1], 0 === this._opcode) {
            if (r) {
                return void t(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
            }
            if (!this._fragmented) {
                return void t(this.createError(RangeError, "invalid opcode 0", !0, 1002, "WS_ERR_INVALID_OPCODE"));
            }
            this._opcode = this._fragmented;
        } else if (1 === this._opcode || 2 === this._opcode) {
            if (this._fragmented) {
                return void t(this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE"));
            }
            this._compressed = r;
        } else {
            if (!(this._opcode > 7 && this._opcode < 11)) {
                return void t(this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE"));
            }
            if (!this._fin) {
                return void t(this.createError(RangeError, "FIN must be set", !0, 1002, "WS_ERR_EXPECTED_FIN"));
            }
            if (r) {
                return void t(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
            }
            if (this._payloadLength > 125 || 8 === this._opcode && 1 === this._payloadLength) {
                return void t(this.createError(RangeError, `invalid payload length ${this._payloadLength}`, !0, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"));
            }
        }
        if (this._fin || this._fragmented || (this._fragmented = this._opcode), this._masked = !(128 & ~e[1]), this._isServer) {
            if (!this._masked) {
                return void t(this.createError(RangeError, "MASK must be set", !0, 1002, "WS_ERR_EXPECTED_MASK"));
            }
        } else if (this._masked) {
            return void t(this.createError(RangeError, "MASK must be clear", !0, 1002, "WS_ERR_UNEXPECTED_MASK"));
        }
        126 === this._payloadLength ? this._state = 1 : 127 === this._payloadLength ? this._state = 2 : this.haveLength(t);
    }
    getPayloadLength16(t) {
        this._bufferedBytes < 2 ? this._loop = !1 : (this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(t));
    }
    getPayloadLength64(t) {
        if (this._bufferedBytes < 8) return void (this._loop = !1);
        const e = this.consume(8), r = e.readUInt32BE(0);
        if (r > Math.pow(2, 21) - 1) {
            return void t(this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", !1, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"));
        }
        this._payloadLength = r * Math.pow(2, 32) + e.readUInt32BE(4), this.haveLength(t);
    }
    haveLength(t) {
        if (this._payloadLength && this._opcode < 8 && (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)) {
            return void t(this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"));
        }
        this._masked ? this._state = 3 : this._state = 4;
    }
    getMask() {
        this._bufferedBytes < 4 ? this._loop = !1 : (this._mask = this.consume(4), this._state = 4);
    }
    getData(t) {
        let e = o;
        if (this._payloadLength) {
            if (this._bufferedBytes < this._payloadLength) return void (this._loop = !1);
            e = this.consume(this._payloadLength), this._masked && 0 !== (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) && m(e, this._mask);
        }
        if (this._opcode > 7) this.controlMessage(e, t);
        else {
            if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments) {
                return void t(this.createError(RangeError, "Too many message fragments", !1, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS"));
            }
            if (this._compressed) return this._state = 5, void this.decompress(e, t);
            e.length && (this._messageLength = this._totalPayloadLength, this._fragments.push(e)), this.dataMessage(t);
        }
    }
    decompress(t, e) {
        this._extensions[s.extensionName].decompress(t, this._fin, (t, r)=>{
            if (t) return e(t);
            if (r.length) {
                if (this._messageLength += r.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
                    const t = this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
                    return void e(t);
                }
                this._fragments.push(r);
            }
            this.dataMessage(e), 0 === this._state && this.startLoop(e);
        });
    }
    dataMessage(t) {
        if (!this._fin) return void (this._state = 0);
        const e = this._messageLength, r = this._fragments;
        if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._numFragments = 0, this._fragments = [], 2 === this._opcode) {
            let n;
            n = "nodebuffer" === this._binaryType ? c(r, e) : "arraybuffer" === this._binaryType ? l(c(r, e)) : "blob" === this._binaryType ? new Blob(r) : r, this._allowSynchronousEvents ? (this.emit("message", n, !0), this._state = 0) : (this._state = 6, setImmediate(()=>{
                this.emit("message", n, !0), this._state = 0, this.startLoop(t);
            }));
        } else {
            const n = c(r, e);
            if (!this._skipUTF8Validation && !f(n)) {
                const e = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
                return void t(e);
            }
            5 === this._state || this._allowSynchronousEvents ? (this.emit("message", n, !1), this._state = 0) : (this._state = 6, setImmediate(()=>{
                this.emit("message", n, !1), this._state = 0, this.startLoop(t);
            }));
        }
    }
    controlMessage(t, e) {
        if (8 !== this._opcode) this._allowSynchronousEvents ? (this.emit(9 === this._opcode ? "ping" : "pong", t), this._state = 0) : (this._state = 6, setImmediate(()=>{
            this.emit(9 === this._opcode ? "ping" : "pong", t), this._state = 0, this.startLoop(e);
        }));
        else {
            if (0 === t.length) this._loop = !1, this.emit("conclude", 1005, o), this.end();
            else {
                const r = t.readUInt16BE(0);
                if (!d(r)) {
                    const t = this.createError(RangeError, `invalid status code ${r}`, !0, 1002, "WS_ERR_INVALID_CLOSE_CODE");
                    return void e(t);
                }
                const n = new p(t.buffer, t.byteOffset + 2, t.length - 2);
                if (!this._skipUTF8Validation && !f(n)) {
                    const t = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
                    return void e(t);
                }
                this._loop = !1, this.emit("conclude", r, n), this.end();
            }
            this._state = 0;
        }
    }
    createError(t, e, r, n, s) {
        this._loop = !1, this._errored = !0;
        const i = new t(r ? `Invalid WebSocket frame: ${e}` : e);
        return Error.captureStackTrace(i, this.createError), i.code = s, i[a] = n, i;
    }
};
