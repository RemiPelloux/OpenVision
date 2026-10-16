import { require_buffer_util } from "./buffer-util.js";
import { require_constants8 } from "./constants.js";
import { require_permessage_deflate } from "./permessage-deflate.js";
import { require_validation } from "./validation.js";
var __wakaru_require_sender_cache;
export function require_sender() {
if (__wakaru_require_sender_cache) return __wakaru_require_sender_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_sender_cache = module2;
"use strict";
var { Duplex } = require("stream");
var { randomFillSync } = require("crypto");
var { types: { isUint8Array } } = require("util");
var PerMessageDeflate = require_permessage_deflate();
var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants8();
var { isBlob, isValidStatusCode } = require_validation();
var { mask: applyMask, toBuffer: toBuffer2 } = require_buffer_util();
var kByteLength = Symbol("kByteLength");
var maskBuffer = Buffer.alloc(4);
var RANDOM_POOL_SIZE = 8 * 1024;
var randomPool;
var randomPoolPointer = RANDOM_POOL_SIZE;
var DEFAULT = 0;
var DEFLATING = 1;
var GET_BLOB_DATA = 2;
var Sender = class _Sender {
    constructor(socket, extensions, generateMask){
        this._extensions = extensions || {};
        if (generateMask) {
            this._generateMask = generateMask;
            this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
    }
    static frame(data, options2) {
        let mask;
        let merge4 = false;
        let offset = 2;
        let skipMasking = false;
        if (options2.mask) {
            mask = options2.maskBuffer || maskBuffer;
            if (options2.generateMask) {
                options2.generateMask(mask);
            } else {
                if (randomPoolPointer === RANDOM_POOL_SIZE) {
                    if (randomPool === void 0) {
                        randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
                    }
                    randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
                    randomPoolPointer = 0;
                }
                mask[0] = randomPool[randomPoolPointer++];
                mask[1] = randomPool[randomPoolPointer++];
                mask[2] = randomPool[randomPoolPointer++];
                mask[3] = randomPool[randomPoolPointer++];
            }
            skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
            offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
            if ((!options2.mask || skipMasking) && options2[kByteLength] !== void 0) {
                dataLength = options2[kByteLength];
            } else {
                data = Buffer.from(data);
                dataLength = data.length;
            }
        } else {
            dataLength = data.length;
            merge4 = options2.mask && options2.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
            offset += 8;
            payloadLength = 127;
        } else if (dataLength > 125) {
            offset += 2;
            payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge4 ? dataLength + offset : offset);
        target[0] = options2.fin ? options2.opcode | 128 : options2.opcode;
        if (options2.rsv1) target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
            target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
            target[2] = target[3] = 0;
            target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options2.mask) return [
            target,
            data
        ];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [
            target,
            data
        ];
        if (merge4) {
            applyMask(data, mask, target, offset, dataLength);
            return [
                target
            ];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [
            target,
            data
        ];
    }
    close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
            buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
            throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
            buf = Buffer.allocUnsafe(2);
            buf.writeUInt16BE(code, 0);
        } else {
            const length = Buffer.byteLength(data);
            if (length > 123) {
                throw new RangeError("The message must not be greater than 123 bytes");
            }
            buf = Buffer.allocUnsafe(2 + length);
            buf.writeUInt16BE(code, 0);
            if (typeof data === "string") {
                buf.write(data, 2);
            } else if (isUint8Array(data)) {
                buf.set(data, 2);
            } else {
                throw new TypeError("Second argument must be a string or a Uint8Array");
            }
        }
        const options2 = {
            [kByteLength]: buf.length,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 8,
            readOnly: false,
            rsv1: false
        };
        if (this._state !== DEFAULT) {
            this.enqueue([
                this.dispatch,
                buf,
                false,
                options2,
                cb
            ]);
        } else {
            this.sendFrame(_Sender.frame(buf, options2), cb);
        }
    }
    ping(data, mask, cb) {
        let byteLength2;
        let readOnly;
        if (typeof data === "string") {
            byteLength2 = Buffer.byteLength(data);
            readOnly = false;
        } else if (isBlob(data)) {
            byteLength2 = data.size;
            readOnly = false;
        } else {
            data = toBuffer2(data);
            byteLength2 = data.length;
            readOnly = toBuffer2.readOnly;
        }
        if (byteLength2 > 125) {
            throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options2 = {
            [kByteLength]: byteLength2,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 9,
            readOnly,
            rsv1: false
        };
        if (isBlob(data)) {
            if (this._state !== DEFAULT) {
                this.enqueue([
                    this.getBlobData,
                    data,
                    false,
                    options2,
                    cb
                ]);
            } else {
                this.getBlobData(data, false, options2, cb);
            }
        } else if (this._state !== DEFAULT) {
            this.enqueue([
                this.dispatch,
                data,
                false,
                options2,
                cb
            ]);
        } else {
            this.sendFrame(_Sender.frame(data, options2), cb);
        }
    }
    pong(data, mask, cb) {
        let byteLength2;
        let readOnly;
        if (typeof data === "string") {
            byteLength2 = Buffer.byteLength(data);
            readOnly = false;
        } else if (isBlob(data)) {
            byteLength2 = data.size;
            readOnly = false;
        } else {
            data = toBuffer2(data);
            byteLength2 = data.length;
            readOnly = toBuffer2.readOnly;
        }
        if (byteLength2 > 125) {
            throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options2 = {
            [kByteLength]: byteLength2,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 10,
            readOnly,
            rsv1: false
        };
        if (isBlob(data)) {
            if (this._state !== DEFAULT) {
                this.enqueue([
                    this.getBlobData,
                    data,
                    false,
                    options2,
                    cb
                ]);
            } else {
                this.getBlobData(data, false, options2, cb);
            }
        } else if (this._state !== DEFAULT) {
            this.enqueue([
                this.dispatch,
                data,
                false,
                options2,
                cb
            ]);
        } else {
            this.sendFrame(_Sender.frame(data, options2), cb);
        }
    }
    send(data, options2, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options2.binary ? 2 : 1;
        let rsv1 = options2.compress;
        let byteLength2;
        let readOnly;
        if (typeof data === "string") {
            byteLength2 = Buffer.byteLength(data);
            readOnly = false;
        } else if (isBlob(data)) {
            byteLength2 = data.size;
            readOnly = false;
        } else {
            data = toBuffer2(data);
            byteLength2 = data.length;
            readOnly = toBuffer2.readOnly;
        }
        if (this._firstFragment) {
            this._firstFragment = false;
            if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
                rsv1 = byteLength2 >= perMessageDeflate._threshold;
            }
            this._compress = rsv1;
        } else {
            rsv1 = false;
            opcode = 0;
        }
        if (options2.fin) this._firstFragment = true;
        const opts = {
            [kByteLength]: byteLength2,
            fin: options2.fin,
            generateMask: this._generateMask,
            mask: options2.mask,
            maskBuffer: this._maskBuffer,
            opcode,
            readOnly,
            rsv1
        };
        if (isBlob(data)) {
            if (this._state !== DEFAULT) {
                this.enqueue([
                    this.getBlobData,
                    data,
                    this._compress,
                    opts,
                    cb
                ]);
            } else {
                this.getBlobData(data, this._compress, opts, cb);
            }
        } else if (this._state !== DEFAULT) {
            this.enqueue([
                this.dispatch,
                data,
                this._compress,
                opts,
                cb
            ]);
        } else {
            this.dispatch(data, this._compress, opts, cb);
        }
    }
    getBlobData(blob, compress, options2, cb) {
        this._bufferedBytes += options2[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer)=>{
            if (this._socket.destroyed) {
                const err = new Error("The socket was closed while the blob was being read");
                process.nextTick(callCallbacks, this, err, cb);
                return;
            }
            this._bufferedBytes -= options2[kByteLength];
            const data = toBuffer2(arrayBuffer);
            if (!compress) {
                this._state = DEFAULT;
                this.sendFrame(_Sender.frame(data, options2), cb);
                this.dequeue();
            } else {
                this.dispatch(data, compress, options2, cb);
            }
        }).catch((err)=>{
            process.nextTick(onError, this, err, cb);
        });
    }
    dispatch(data, compress, options2, cb) {
        if (!compress) {
            this.sendFrame(_Sender.frame(data, options2), cb);
            return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += options2[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options2.fin, (_2, buf)=>{
            if (this._socket.destroyed) {
                const err = new Error("The socket was closed while data was being compressed");
                callCallbacks(this, err, cb);
                return;
            }
            this._bufferedBytes -= options2[kByteLength];
            this._state = DEFAULT;
            options2.readOnly = false;
            this.sendFrame(_Sender.frame(buf, options2), cb);
            this.dequeue();
        });
    }
    dequeue() {
        while(this._state === DEFAULT && this._queue.length){
            const params = this._queue.shift();
            this._bufferedBytes -= params[3][kByteLength];
            Reflect.apply(params[0], this, params.slice(1));
        }
    }
    enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
    }
    sendFrame(list2, cb) {
        if (list2.length === 2) {
            this._socket.cork();
            this._socket.write(list2[0]);
            this._socket.write(list2[1], cb);
            this._socket.uncork();
        } else {
            this._socket.write(list2[0], cb);
        }
    }
};
module2.exports = Sender;
function callCallbacks(sender, err, cb) {
    if (typeof cb === "function") cb(err);
    for(let i = 0; i < sender._queue.length; i++){
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === "function") callback(err);
    }
}
function onError(sender, err, cb) {
    callCallbacks(sender, err, cb);
    sender.onerror(err);
}

return module2.exports;
}
