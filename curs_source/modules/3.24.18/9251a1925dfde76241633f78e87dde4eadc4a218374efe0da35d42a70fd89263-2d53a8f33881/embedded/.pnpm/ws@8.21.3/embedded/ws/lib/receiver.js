import { require_buffer_util } from "./buffer-util.js";
import { require_constants8 } from "./constants.js";
import { require_permessage_deflate } from "./permessage-deflate.js";
import { require_validation } from "./validation.js";
var __wakaru_require_receiver2_cache;
export function require_receiver2() {
if (__wakaru_require_receiver2_cache) return __wakaru_require_receiver2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_receiver2_cache = module2;
"use strict";
var { Writable } = require("stream");
var PerMessageDeflate = require_permessage_deflate();
var { BINARY_TYPES, EMPTY_BUFFER, kStatusCode, kWebSocket } = require_constants8();
var { concat, toArrayBuffer, unmask } = require_buffer_util();
var { isValidStatusCode, isValidUTF8 } = require_validation();
var FastBuffer = Buffer[Symbol.species];
var GET_INFO = 0;
var GET_PAYLOAD_LENGTH_16 = 1;
var GET_PAYLOAD_LENGTH_64 = 2;
var GET_MASK = 3;
var GET_DATA = 4;
var INFLATING = 5;
var DEFER_EVENT = 6;
var Receiver = class extends Writable {
    constructor(options2 = {}){
        super();
        this._allowSynchronousEvents = options2.allowSynchronousEvents !== void 0 ? options2.allowSynchronousEvents : true;
        this._binaryType = options2.binaryType || BINARY_TYPES[0];
        this._extensions = options2.extensions || {};
        this._isServer = !!options2.isServer;
        this._maxBufferedChunks = options2.maxBufferedChunks | 0;
        this._maxFragments = options2.maxFragments | 0;
        this._maxPayload = options2.maxPayload | 0;
        this._skipUTF8Validation = !!options2.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._numFragments = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
    }
    _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO) return cb();
        if (this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks) {
            cb(this.createError(RangeError, "Too many buffered chunks", false, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS"));
            return;
        }
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
    }
    consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
            const buf = this._buffers[0];
            this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
            return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
            const buf = this._buffers[0];
            const offset = dst.length - n;
            if (n >= buf.length) {
                dst.set(this._buffers.shift(), offset);
            } else {
                dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
                this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
            }
            n -= buf.length;
        }while (n > 0)
        return dst;
    }
    startLoop(cb) {
        this._loop = true;
        do {
            switch(this._state){
                case GET_INFO:
                    this.getInfo(cb);
                    break;
                case GET_PAYLOAD_LENGTH_16:
                    this.getPayloadLength16(cb);
                    break;
                case GET_PAYLOAD_LENGTH_64:
                    this.getPayloadLength64(cb);
                    break;
                case GET_MASK:
                    this.getMask();
                    break;
                case GET_DATA:
                    this.getData(cb);
                    break;
                case INFLATING:
                case DEFER_EVENT:
                    this._loop = false;
                    return;
            }
        }while (this._loop)
        if (!this._errored) cb();
    }
    getInfo(cb) {
        if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
            const error3 = this.createError(RangeError, "RSV2 and RSV3 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
            cb(error3);
            return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
            const error3 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
            cb(error3);
            return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
            if (compressed) {
                const error3 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
                cb(error3);
                return;
            }
            if (!this._fragmented) {
                const error3 = this.createError(RangeError, "invalid opcode 0", true, 1002, "WS_ERR_INVALID_OPCODE");
                cb(error3);
                return;
            }
            this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
            if (this._fragmented) {
                const error3 = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
                cb(error3);
                return;
            }
            this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
            if (!this._fin) {
                const error3 = this.createError(RangeError, "FIN must be set", true, 1002, "WS_ERR_EXPECTED_FIN");
                cb(error3);
                return;
            }
            if (compressed) {
                const error3 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
                cb(error3);
                return;
            }
            if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
                const error3 = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
                cb(error3);
                return;
            }
        } else {
            const error3 = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
            cb(error3);
            return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
            if (!this._masked) {
                const error3 = this.createError(RangeError, "MASK must be set", true, 1002, "WS_ERR_EXPECTED_MASK");
                cb(error3);
                return;
            }
        } else if (this._masked) {
            const error3 = this.createError(RangeError, "MASK must be clear", true, 1002, "WS_ERR_UNEXPECTED_MASK");
            cb(error3);
            return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
    }
    getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
    }
    getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
            this._loop = false;
            return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
            const error3 = this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
            cb(error3);
            return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
    }
    haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
            this._totalPayloadLength += this._payloadLength;
            if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
                const error3 = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
                cb(error3);
                return;
            }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
    }
    getMask() {
        if (this._bufferedBytes < 4) {
            this._loop = false;
            return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
    }
    getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
            if (this._bufferedBytes < this._payloadLength) {
                this._loop = false;
                return;
            }
            data = this.consume(this._payloadLength);
            if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
                unmask(data, this._mask);
            }
        }
        if (this._opcode > 7) {
            this.controlMessage(data, cb);
            return;
        }
        if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments) {
            const error3 = this.createError(RangeError, "Too many message fragments", false, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS");
            cb(error3);
            return;
        }
        if (this._compressed) {
            this._state = INFLATING;
            this.decompress(data, cb);
            return;
        }
        if (data.length) {
            this._messageLength = this._totalPayloadLength;
            this._fragments.push(data);
        }
        this.dataMessage(cb);
    }
    decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf)=>{
            if (err) return cb(err);
            if (buf.length) {
                this._messageLength += buf.length;
                if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
                    const error3 = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
                    cb(error3);
                    return;
                }
                this._fragments.push(buf);
            }
            this.dataMessage(cb);
            if (this._state === GET_INFO) this.startLoop(cb);
        });
    }
    dataMessage(cb) {
        if (!this._fin) {
            this._state = GET_INFO;
            return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._numFragments = 0;
        this._fragments = [];
        if (this._opcode === 2) {
            let data;
            if (this._binaryType === "nodebuffer") {
                data = concat(fragments, messageLength);
            } else if (this._binaryType === "arraybuffer") {
                data = toArrayBuffer(concat(fragments, messageLength));
            } else if (this._binaryType === "blob") {
                data = new Blob(fragments);
            } else {
                data = fragments;
            }
            if (this._allowSynchronousEvents) {
                this.emit("message", data, true);
                this._state = GET_INFO;
            } else {
                this._state = DEFER_EVENT;
                setImmediate(()=>{
                    this.emit("message", data, true);
                    this._state = GET_INFO;
                    this.startLoop(cb);
                });
            }
        } else {
            const buf = concat(fragments, messageLength);
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
                const error3 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
                cb(error3);
                return;
            }
            if (this._state === INFLATING || this._allowSynchronousEvents) {
                this.emit("message", buf, false);
                this._state = GET_INFO;
            } else {
                this._state = DEFER_EVENT;
                setImmediate(()=>{
                    this.emit("message", buf, false);
                    this._state = GET_INFO;
                    this.startLoop(cb);
                });
            }
        }
    }
    controlMessage(data, cb) {
        if (this._opcode === 8) {
            if (data.length === 0) {
                this._loop = false;
                this.emit("conclude", 1005, EMPTY_BUFFER);
                this.end();
            } else {
                const code = data.readUInt16BE(0);
                if (!isValidStatusCode(code)) {
                    const error3 = this.createError(RangeError, `invalid status code ${code}`, true, 1002, "WS_ERR_INVALID_CLOSE_CODE");
                    cb(error3);
                    return;
                }
                const buf = new FastBuffer(data.buffer, data.byteOffset + 2, data.length - 2);
                if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
                    const error3 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
                    cb(error3);
                    return;
                }
                this._loop = false;
                this.emit("conclude", code, buf);
                this.end();
            }
            this._state = GET_INFO;
            return;
        }
        if (this._allowSynchronousEvents) {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
        } else {
            this._state = DEFER_EVENT;
            setImmediate(()=>{
                this.emit(this._opcode === 9 ? "ping" : "pong", data);
                this._state = GET_INFO;
                this.startLoop(cb);
            });
        }
    }
    createError(ErrorCtor, message, prefix, statusCode, errorCode3) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(prefix ? `Invalid WebSocket frame: ${message}` : message);
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode3;
        err[kStatusCode] = statusCode;
        return err;
    }
};
module2.exports = Receiver;

return module2.exports;
}
