import { agent_websocket_pb_exports } from "../../../agent_websocket_pb_exports.js";
import { init_agent_websocket } from "../../../bidi-connect/dist/agent-websocket.js";
import { __toCommonJS } from "../aggregatingMetricsProvider.js";
import { agent_websocket_exports } from "../../../entry.js";
import { require_cjs3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
import { init_agent_websocket_pb } from "../../../proto/dist/generated/agent/v1/agent_websocket_pb.js";
var __wakaru_require_agentWebSocketRunFrames_cache;
export function require_agentWebSocketRunFrames() {
if (__wakaru_require_agentWebSocketRunFrames_cache) return __wakaru_require_agentWebSocketRunFrames_cache;
var exports2 = {};
__wakaru_require_agentWebSocketRunFrames_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.BoundedFrameQueue = exports2.SequenceValidator = exports2.AgentWebSocketDeliveryAmbiguousError = void 0;
exports2.identityMatches = identityMatches;
exports2.headersToAgentWebSocketHeaders = headersToAgentWebSocketHeaders;
exports2.agentWebSocketHeadersToHeaders = agentWebSocketHeadersToHeaders;
exports2.connectErrorFromAgentWebSocket = connectErrorFromAgentWebSocket;
exports2.runStartFrame = runStartFrame;
exports2.clientMessageFrame = clientMessageFrame;
exports2.halfCloseFrame = halfCloseFrame;
exports2.cancelRunFrame = cancelRunFrame;
exports2.rawDataBytes = rawDataBytes;
var agent_websocket_1 = (init_agent_websocket(), __toCommonJS(agent_websocket_exports));
var agent_websocket_pb_js_1 = (init_agent_websocket_pb(), __toCommonJS(agent_websocket_pb_exports));
var connect_1 = require_cjs3();
var AgentWebSocketDeliveryAmbiguousError = class extends Error {
    constructor(message, options2){
        super(message);
        Object.defineProperty(this, "message", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: message
        });
        if (options2 !== void 0 && "cause" in options2) {
            Object.defineProperty(this, "cause", {
                configurable: true,
                writable: true,
                value: options2.cause
            });
        }
        this.agentWebSocketDiagnostics = options2?.diagnostics;
        this.name = "AgentWebSocketDeliveryAmbiguousError";
    }
};
exports2.AgentWebSocketDeliveryAmbiguousError = AgentWebSocketDeliveryAmbiguousError;
function identityMatches(expected, received) {
    return received !== void 0 && received.runId === expected.runId && received.requestId === expected.requestId;
}
function headersToAgentWebSocketHeaders(headers) {
    const encoded = [];
    headers.forEach((value, name17)=>{
        encoded.push(new agent_websocket_pb_js_1.AgentWebSocketHeader({
            name: name17,
            value
        }));
    });
    return encoded;
}
function agentWebSocketHeadersToHeaders(encoded) {
    const headers = new Headers();
    for (const header of encoded){
        headers.append(header.name, header.value);
    }
    return headers;
}
function connectErrorFromAgentWebSocket(error3) {
    const connectError = new connect_1.ConnectError(error3.rawMessage, error3.code, agentWebSocketHeadersToHeaders(error3.metadata));
    connectError.details = error3.details.map((detail)=>({
            type: detail.typeName,
            value: detail.binaryValue
        }));
    return connectError;
}
function runStartFrame(identity, headers, preconnectReservationId) {
    const runHeaders = new Headers(headers);
    if (preconnectReservationId !== void 0) {
        runHeaders.set(agent_websocket_1.AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER, preconnectReservationId);
    }
    return new agent_websocket_pb_js_1.AgentWebSocketClientFrame({
        frame: {
            case: "runStart",
            value: new agent_websocket_pb_js_1.AgentWebSocketRunStart({
                identity,
                headers: headersToAgentWebSocketHeaders(runHeaders)
            })
        }
    });
}
function clientMessageFrame(runId, sequence, message) {
    return new agent_websocket_pb_js_1.AgentWebSocketClientFrame({
        frame: {
            case: "clientMessage",
            value: new agent_websocket_pb_js_1.AgentWebSocketClientMessage({
                runId,
                sequence,
                message
            })
        }
    });
}
function halfCloseFrame(runId) {
    return new agent_websocket_pb_js_1.AgentWebSocketClientFrame({
        frame: {
            case: "halfClose",
            value: new agent_websocket_pb_js_1.AgentWebSocketClientHalfClose({
                runId
            })
        }
    });
}
function cancelRunFrame(runId) {
    return new agent_websocket_pb_js_1.AgentWebSocketClientFrame({
        frame: {
            case: "cancelRun",
            value: new agent_websocket_pb_js_1.AgentWebSocketCancelRun({
                runId
            })
        }
    });
}
function rawDataBytes(data) {
    if (Array.isArray(data)) {
        return Buffer.concat(data);
    }
    if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    }
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
}
var SequenceValidator = class {
    constructor(){
        this.next = BigInt(0);
    }
    accept(sequence) {
        if (sequence !== this.next) {
            throw new Error(`Agent WebSocket sequence ${sequence} arrived out of order`);
        }
        this.next += BigInt(1);
    }
};
exports2.SequenceValidator = SequenceValidator;
var BoundedFrameQueue = class {
    constructor(maxBufferedBytes, onReturn){
        this.maxBufferedBytes = maxBufferedBytes;
        this.onReturn = onReturn;
        this.values = [];
        this.readers = [];
        this.bufferedBytes = 0;
    }
    push(value, bytes) {
        if (this.terminal !== void 0) {
            return true;
        }
        const reader = this.readers.shift();
        if (reader !== void 0) {
            reader.resolve({
                done: false,
                value
            });
            return true;
        }
        if (this.bufferedBytes + bytes > this.maxBufferedBytes) {
            return false;
        }
        this.bufferedBytes += bytes;
        this.values.push({
            value,
            bytes
        });
        return true;
    }
    end() {
        this.settle(void 0);
    }
    error(error3) {
        this.settle(error3);
    }
    settle(error3) {
        if (this.terminal !== void 0) {
            return;
        }
        this.terminal = {
            error: error3
        };
        if (error3 !== void 0) {
            this.values.length = 0;
            this.bufferedBytes = 0;
        }
        for (const reader of this.readers.splice(0)){
            if (error3 === void 0) {
                reader.resolve({
                    done: true,
                    value: void 0
                });
            } else {
                reader.reject(error3);
            }
        }
    }
    [Symbol.asyncIterator]() {
        return {
            next: ()=>{
                const buffered = this.values.shift();
                if (buffered !== void 0) {
                    this.bufferedBytes -= buffered.bytes;
                    return Promise.resolve({
                        done: false,
                        value: buffered.value
                    });
                }
                const terminal = this.terminal;
                if (terminal !== void 0) {
                    return terminal.error === void 0 ? Promise.resolve({
                        done: true,
                        value: void 0
                    }) : Promise.reject(terminal.error);
                }
                return new Promise((resolve36, reject2)=>{
                    this.readers.push({
                        resolve: resolve36,
                        reject: reject2
                    });
                });
            },
            return: async ()=>{
                await this.onReturn();
                return {
                    done: true,
                    value: void 0
                };
            }
        };
    }
};
exports2.BoundedFrameQueue = BoundedFrameQueue;

return exports2;
}
