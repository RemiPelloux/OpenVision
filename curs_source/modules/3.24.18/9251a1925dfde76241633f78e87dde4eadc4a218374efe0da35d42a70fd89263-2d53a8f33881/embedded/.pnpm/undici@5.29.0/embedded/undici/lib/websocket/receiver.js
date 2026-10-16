import { require_constants6 } from "./constants.js";
import { require_frame } from "./frame.js";
import { require_symbols5 } from "./symbols.js";
import { require_util7 } from "./util.js";
var __wakaru_require_receiver_cache;
export function require_receiver() {
if (__wakaru_require_receiver_cache) return __wakaru_require_receiver_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_receiver_cache = module2;
"use strict";
var { Writable } = require("stream");
var diagnosticsChannel = require("diagnostics_channel");
var { parserStates, opcodes, states, emptyBuffer } = require_constants6();
var { kReadyState, kSentClose, kResponse, kReceivedClose } = require_symbols5();
var { isValidStatusCode, failWebsocketConnection, websocketMessageReceived } = require_util7();
var { WebsocketFrameSend } = require_frame();
var channels = {};
channels.ping = diagnosticsChannel.channel("undici:websocket:ping");
channels.pong = diagnosticsChannel.channel("undici:websocket:pong");
var ByteParser = class extends Writable {
    #buffers = [];
    #byteOffset = 0;
    #state = parserStates.INFO;
    #info = {};
    #fragments = [];
    constructor(ws2){
        super();
        this.ws = ws2;
    }
    _write(chunk, _2, callback) {
        this.#buffers.push(chunk);
        this.#byteOffset += chunk.length;
        this.run(callback);
    }
    run(callback) {
        while(true){
            if (this.#state === parserStates.INFO) {
                if (this.#byteOffset < 2) {
                    return callback();
                }
                const buffer = this.consume(2);
                this.#info.fin = (buffer[0] & 128) !== 0;
                this.#info.opcode = buffer[0] & 15;
                this.#info.originalOpcode ??= this.#info.opcode;
                this.#info.fragmented = !this.#info.fin && this.#info.opcode !== opcodes.CONTINUATION;
                if (this.#info.fragmented && this.#info.opcode !== opcodes.BINARY && this.#info.opcode !== opcodes.TEXT) {
                    failWebsocketConnection(this.ws, "Invalid frame type was fragmented.");
                    return;
                }
                const payloadLength = buffer[1] & 127;
                if (payloadLength <= 125) {
                    this.#info.payloadLength = payloadLength;
                    this.#state = parserStates.READ_DATA;
                } else if (payloadLength === 126) {
                    this.#state = parserStates.PAYLOADLENGTH_16;
                } else if (payloadLength === 127) {
                    this.#state = parserStates.PAYLOADLENGTH_64;
                }
                if (this.#info.fragmented && payloadLength > 125) {
                    failWebsocketConnection(this.ws, "Fragmented frame exceeded 125 bytes.");
                    return;
                } else if ((this.#info.opcode === opcodes.PING || this.#info.opcode === opcodes.PONG || this.#info.opcode === opcodes.CLOSE) && payloadLength > 125) {
                    failWebsocketConnection(this.ws, "Payload length for control frame exceeded 125 bytes.");
                    return;
                } else if (this.#info.opcode === opcodes.CLOSE) {
                    if (payloadLength === 1) {
                        failWebsocketConnection(this.ws, "Received close frame with a 1-byte body.");
                        return;
                    }
                    const body = this.consume(payloadLength);
                    this.#info.closeInfo = this.parseCloseBody(false, body);
                    if (!this.ws[kSentClose]) {
                        const body2 = Buffer.allocUnsafe(2);
                        body2.writeUInt16BE(this.#info.closeInfo.code, 0);
                        const closeFrame = new WebsocketFrameSend(body2);
                        this.ws[kResponse].socket.write(closeFrame.createFrame(opcodes.CLOSE), (err)=>{
                            if (!err) {
                                this.ws[kSentClose] = true;
                            }
                        });
                    }
                    this.ws[kReadyState] = states.CLOSING;
                    this.ws[kReceivedClose] = true;
                    this.end();
                    return;
                } else if (this.#info.opcode === opcodes.PING) {
                    const body = this.consume(payloadLength);
                    if (!this.ws[kReceivedClose]) {
                        const frame = new WebsocketFrameSend(body);
                        this.ws[kResponse].socket.write(frame.createFrame(opcodes.PONG));
                        if (channels.ping.hasSubscribers) {
                            channels.ping.publish({
                                payload: body
                            });
                        }
                    }
                    this.#state = parserStates.INFO;
                    if (this.#byteOffset > 0) {
                        continue;
                    } else {
                        callback();
                        return;
                    }
                } else if (this.#info.opcode === opcodes.PONG) {
                    const body = this.consume(payloadLength);
                    if (channels.pong.hasSubscribers) {
                        channels.pong.publish({
                            payload: body
                        });
                    }
                    if (this.#byteOffset > 0) {
                        continue;
                    } else {
                        callback();
                        return;
                    }
                }
            } else if (this.#state === parserStates.PAYLOADLENGTH_16) {
                if (this.#byteOffset < 2) {
                    return callback();
                }
                const buffer = this.consume(2);
                this.#info.payloadLength = buffer.readUInt16BE(0);
                this.#state = parserStates.READ_DATA;
            } else if (this.#state === parserStates.PAYLOADLENGTH_64) {
                if (this.#byteOffset < 8) {
                    return callback();
                }
                const buffer = this.consume(8);
                const upper = buffer.readUInt32BE(0);
                if (upper > 2 ** 31 - 1) {
                    failWebsocketConnection(this.ws, "Received payload length > 2^31 bytes.");
                    return;
                }
                const lower = buffer.readUInt32BE(4);
                this.#info.payloadLength = (upper << 8) + lower;
                this.#state = parserStates.READ_DATA;
            } else if (this.#state === parserStates.READ_DATA) {
                if (this.#byteOffset < this.#info.payloadLength) {
                    return callback();
                } else if (this.#byteOffset >= this.#info.payloadLength) {
                    const body = this.consume(this.#info.payloadLength);
                    this.#fragments.push(body);
                    if (!this.#info.fragmented || this.#info.fin && this.#info.opcode === opcodes.CONTINUATION) {
                        const fullMessage = Buffer.concat(this.#fragments);
                        websocketMessageReceived(this.ws, this.#info.originalOpcode, fullMessage);
                        this.#info = {};
                        this.#fragments.length = 0;
                    }
                    this.#state = parserStates.INFO;
                }
            }
            if (this.#byteOffset > 0) {
                continue;
            } else {
                callback();
                break;
            }
        }
    }
    consume(n) {
        if (n > this.#byteOffset) {
            return null;
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
    parseCloseBody(onlyCode, data) {
        let code;
        if (data.length >= 2) {
            code = data.readUInt16BE(0);
        }
        if (onlyCode) {
            if (!isValidStatusCode(code)) {
                return null;
            }
            return {
                code
            };
        }
        let reason = data.subarray(2);
        if (reason[0] === 239 && reason[1] === 187 && reason[2] === 191) {
            reason = reason.subarray(3);
        }
        if (code !== void 0 && !isValidStatusCode(code)) {
            return null;
        }
        try {
            reason = new TextDecoder("utf-8", {
                fatal: true
            }).decode(reason);
        } catch  {
            return null;
        }
        return {
            code,
            reason
        };
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
