import { require_diagnostics } from "../../core/diagnostics.js";
import { require_errors2 } from "../../core/errors.js";
import { require_connection2 } from "./connection.js";
import { require_constants13 } from "./constants.js";
import { require_frame2 } from "./frame.js";
import { require_permessage_deflate2 } from "./permessage-deflate.js";
import { require_symbols10 } from "./symbols.js";
import { require_util14 } from "./util.js";
var __wakaru_require_receiver3_cache;
export function require_receiver3() {
if (__wakaru_require_receiver3_cache) return __wakaru_require_receiver3_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_receiver3_cache = module2;
"use strict";
var { Writable } = require("node:stream");
var assert4 = require("node:assert");
var { parserStates, opcodes, states, emptyBuffer, sentCloseFrameState } = require_constants13();
var { kReadyState, kSentClose, kResponse, kReceivedClose } = require_symbols10();
var { channels } = require_diagnostics();
var { isValidStatusCode, isValidOpcode, failWebsocketConnection, websocketMessageReceived, utf8Decode, isControlFrame, isTextBinaryFrame, isContinuationFrame } = require_util14();
var { WebsocketFrameSend } = require_frame2();
var { closeWebSocketConnection } = require_connection2();
var { PerMessageDeflate } = require_permessage_deflate2();
var { MessageSizeExceededError } = require_errors2();
function failWebsocketConnectionWithCode(ws2, code, reason) {
    closeWebSocketConnection(ws2, code, reason, Buffer.byteLength(reason));
    failWebsocketConnection(ws2, reason);
}
var ByteParser = class extends Writable {
    #buffers = [];
    #fragmentsBytes = 0;
    #byteOffset = 0;
    #loop = false;
    #state = parserStates.INFO;
    #info = {};
    #fragments = [];
    #extensions;
    #maxFragments;
    #maxPayloadSize;
    constructor(ws2, extensions, options2 = {}){
        super();
        this.ws = ws2;
        this.#extensions = extensions == null ? new Map() : extensions;
        this.#maxFragments = options2.maxFragments ?? 0;
        this.#maxPayloadSize = options2.maxPayloadSize ?? 0;
        if (this.#extensions.has("permessage-deflate")) {
            this.#extensions.set("permessage-deflate", new PerMessageDeflate(extensions, options2));
        }
    }
    _write(chunk, _2, callback) {
        this.#buffers.push(chunk);
        this.#byteOffset += chunk.length;
        this.#loop = true;
        this.run(callback);
    }
    #validatePayloadLength() {
        if (this.#maxPayloadSize > 0 && !isControlFrame(this.#info.opcode) && this.#info.payloadLength + this.#fragmentsBytes > this.#maxPayloadSize) {
            failWebsocketConnectionWithCode(this.ws, 1009, "Payload size exceeds maximum allowed size");
            return false;
        }
        return true;
    }
    run(callback) {
        while(this.#loop){
            if (this.#state === parserStates.INFO) {
                if (this.#byteOffset < 2) {
                    return callback();
                }
                const buffer = this.consume(2);
                const fin = (buffer[0] & 128) !== 0;
                const opcode = buffer[0] & 15;
                const masked = (buffer[1] & 128) === 128;
                const fragmented = !fin && opcode !== opcodes.CONTINUATION;
                const payloadLength = buffer[1] & 127;
                const rsv1 = buffer[0] & 64;
                const rsv2 = buffer[0] & 32;
                const rsv3 = buffer[0] & 16;
                if (!isValidOpcode(opcode)) {
                    failWebsocketConnection(this.ws, "Invalid opcode received");
                    return callback();
                }
                if (masked) {
                    failWebsocketConnection(this.ws, "Frame cannot be masked");
                    return callback();
                }
                if (rsv1 !== 0 && !this.#extensions.has("permessage-deflate")) {
                    failWebsocketConnection(this.ws, "Expected RSV1 to be clear.");
                    return;
                }
                if (rsv2 !== 0 || rsv3 !== 0) {
                    failWebsocketConnection(this.ws, "RSV1, RSV2, RSV3 must be clear");
                    return;
                }
                if (fragmented && !isTextBinaryFrame(opcode)) {
                    failWebsocketConnection(this.ws, "Invalid frame type was fragmented.");
                    return;
                }
                if (isTextBinaryFrame(opcode) && this.#fragments.length > 0) {
                    failWebsocketConnection(this.ws, "Expected continuation frame");
                    return;
                }
                if (this.#info.fragmented && fragmented) {
                    failWebsocketConnection(this.ws, "Fragmented frame exceeded 125 bytes.");
                    return;
                }
                if ((payloadLength > 125 || fragmented) && isControlFrame(opcode)) {
                    failWebsocketConnection(this.ws, "Control frame either too large or fragmented");
                    return;
                }
                if (isContinuationFrame(opcode) && this.#fragments.length === 0 && !this.#info.compressed) {
                    failWebsocketConnection(this.ws, "Unexpected continuation frame");
                    return;
                }
                if (payloadLength <= 125) {
                    this.#info.payloadLength = payloadLength;
                    this.#state = parserStates.READ_DATA;
                    if (!this.#validatePayloadLength()) {
                        return;
                    }
                } else if (payloadLength === 126) {
                    this.#state = parserStates.PAYLOADLENGTH_16;
                } else if (payloadLength === 127) {
                    this.#state = parserStates.PAYLOADLENGTH_64;
                }
                if (isTextBinaryFrame(opcode)) {
                    this.#info.binaryType = opcode;
                    this.#info.compressed = rsv1 !== 0;
                }
                this.#info.opcode = opcode;
                this.#info.masked = masked;
                this.#info.fin = fin;
                this.#info.fragmented = fragmented;
            } else if (this.#state === parserStates.PAYLOADLENGTH_16) {
                if (this.#byteOffset < 2) {
                    return callback();
                }
                const buffer = this.consume(2);
                this.#info.payloadLength = buffer.readUInt16BE(0);
                this.#state = parserStates.READ_DATA;
                if (!this.#validatePayloadLength()) {
                    return;
                }
            } else if (this.#state === parserStates.PAYLOADLENGTH_64) {
                if (this.#byteOffset < 8) {
                    return callback();
                }
                const buffer = this.consume(8);
                const upper = buffer.readUInt32BE(0);
                const lower = buffer.readUInt32BE(4);
                if (upper !== 0 || lower > 2 ** 31 - 1) {
                    failWebsocketConnection(this.ws, "Received payload length > 2^31 bytes.");
                    return;
                }
                this.#info.payloadLength = lower;
                this.#state = parserStates.READ_DATA;
                if (!this.#validatePayloadLength()) {
                    return;
                }
            } else if (this.#state === parserStates.READ_DATA) {
                if (this.#byteOffset < this.#info.payloadLength) {
                    return callback();
                }
                const body = this.consume(this.#info.payloadLength);
                if (isControlFrame(this.#info.opcode)) {
                    this.#loop = this.parseControlFrame(body);
                    this.#state = parserStates.INFO;
                } else {
                    if (!this.#info.compressed) {
                        if (!this.writeFragments(body)) {
                            return;
                        }
                        if (this.#maxPayloadSize > 0 && this.#fragmentsBytes > this.#maxPayloadSize) {
                            failWebsocketConnectionWithCode(this.ws, 1009, new MessageSizeExceededError().message);
                            return;
                        }
                        if (!this.#info.fragmented && this.#info.fin) {
                            websocketMessageReceived(this.ws, this.#info.binaryType, this.consumeFragments());
                        }
                        this.#state = parserStates.INFO;
                    } else {
                        this.#extensions.get("permessage-deflate").decompress(body, this.#info.fin, (error3, data)=>{
                            if (error3) {
                                const code = error3 instanceof MessageSizeExceededError ? 1009 : 1007;
                                failWebsocketConnectionWithCode(this.ws, code, error3.message);
                                return;
                            }
                            if (!this.writeFragments(data)) {
                                return;
                            }
                            if (this.#maxPayloadSize > 0 && this.#fragmentsBytes > this.#maxPayloadSize) {
                                failWebsocketConnectionWithCode(this.ws, 1009, new MessageSizeExceededError().message);
                                return;
                            }
                            if (!this.#info.fin) {
                                this.#state = parserStates.INFO;
                                this.#loop = true;
                                this.run(callback);
                                return;
                            }
                            websocketMessageReceived(this.ws, this.#info.binaryType, this.consumeFragments());
                            this.#loop = true;
                            this.#state = parserStates.INFO;
                            this.run(callback);
                        });
                        this.#loop = false;
                        break;
                    }
                }
            }
        }
    }
    consume(n) {
        if (n > this.#byteOffset) {
            throw new Error("Called consume() before buffers satiated.");
        } else if (n === 0) {
            return emptyBuffer;
        }
        if (this.#buffers[0].length === n) {
            this.#byteOffset -= this.#buffers[0].length;
            return this.#buffers.shift();
        }
        const buffer = Buffer.allocUnsafe(n);
        let offset = 0;
        while(offset !== n){
            const next = this.#buffers[0];
            const { length } = next;
            if (length + offset === n) {
                buffer.set(this.#buffers.shift(), offset);
                break;
            } else if (length + offset > n) {
                buffer.set(next.subarray(0, n - offset), offset);
                this.#buffers[0] = next.subarray(n - offset);
                break;
            } else {
                buffer.set(this.#buffers.shift(), offset);
                offset += next.length;
            }
        }
        this.#byteOffset -= n;
        return buffer;
    }
    writeFragments(fragment) {
        if (this.#maxFragments > 0 && this.#fragments.length === this.#maxFragments) {
            failWebsocketConnectionWithCode(this.ws, 1008, "Too many message fragments");
            return false;
        }
        this.#fragmentsBytes += fragment.length;
        this.#fragments.push(fragment);
        return true;
    }
    consumeFragments() {
        const fragments = this.#fragments;
        if (fragments.length === 1) {
            this.#fragmentsBytes = 0;
            return fragments.shift();
        }
        const output = Buffer.concat(fragments, this.#fragmentsBytes);
        this.#fragments = [];
        this.#fragmentsBytes = 0;
        return output;
    }
    parseCloseBody(data) {
        assert4(data.length !== 1);
        let code;
        if (data.length >= 2) {
            code = data.readUInt16BE(0);
        }
        if (code !== void 0 && !isValidStatusCode(code)) {
            return {
                code: 1002,
                reason: "Invalid status code",
                error: true
            };
        }
        let reason = data.subarray(2);
        if (reason[0] === 239 && reason[1] === 187 && reason[2] === 191) {
            reason = reason.subarray(3);
        }
        try {
            reason = utf8Decode(reason);
        } catch  {
            return {
                code: 1007,
                reason: "Invalid UTF-8",
                error: true
            };
        }
        return {
            code,
            reason,
            error: false
        };
    }
    parseControlFrame(body) {
        const { opcode, payloadLength } = this.#info;
        if (opcode === opcodes.CLOSE) {
            if (payloadLength === 1) {
                failWebsocketConnection(this.ws, "Received close frame with a 1-byte body.");
                return false;
            }
            this.#info.closeInfo = this.parseCloseBody(body);
            if (this.#info.closeInfo.error) {
                const { code, reason } = this.#info.closeInfo;
                closeWebSocketConnection(this.ws, code, reason, reason.length);
                failWebsocketConnection(this.ws, reason);
                return false;
            }
            if (this.ws[kSentClose] !== sentCloseFrameState.SENT) {
                let body2 = emptyBuffer;
                if (this.#info.closeInfo.code) {
                    body2 = Buffer.allocUnsafe(2);
                    body2.writeUInt16BE(this.#info.closeInfo.code, 0);
                }
                const closeFrame = new WebsocketFrameSend(body2);
                this.ws[kResponse].socket.write(closeFrame.createFrame(opcodes.CLOSE), (err)=>{
                    if (!err) {
                        this.ws[kSentClose] = sentCloseFrameState.SENT;
                    }
                });
            }
            this.ws[kReadyState] = states.CLOSING;
            this.ws[kReceivedClose] = true;
            return false;
        } else if (opcode === opcodes.PING) {
            if (!this.ws[kReceivedClose]) {
                const frame = new WebsocketFrameSend(body);
                this.ws[kResponse].socket.write(frame.createFrame(opcodes.PONG));
                if (channels.ping.hasSubscribers) {
                    channels.ping.publish({
                        payload: body
                    });
                }
            }
        } else if (opcode === opcodes.PONG) {
            if (channels.pong.hasSubscribers) {
                channels.pong.publish({
                    payload: body
                });
            }
        }
        return true;
    }
    get closingInfo() {
        return this.#info.closeInfo;
    }
};
module2.exports = {
    ByteParser
};

return module2.exports;
}
