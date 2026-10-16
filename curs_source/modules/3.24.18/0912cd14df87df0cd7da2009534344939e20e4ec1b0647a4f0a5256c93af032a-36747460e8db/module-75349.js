Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BoundedFrameQueue = exports.SequenceValidator = exports.AgentWebSocketDeliveryAmbiguousError = void 0, exports.identityMatches = function(e, t) {
    return void 0 !== t && t.runId === e.runId && t.requestId === e.requestId;
}, exports.headersToAgentWebSocketHeaders = a, exports.agentWebSocketHeadersToHeaders = c, exports.connectErrorFromAgentWebSocket = function(e) {
    const t = new i.ConnectError(e.rawMessage, e.code, c(e.metadata));
    return t.details = e.details.map((e)=>({
            type: e.typeName,
            value: e.binaryValue
        })), t;
}, exports.runStartFrame = function(e, t, n) {
    const i = new Headers(t);
    void 0 !== n && i.set(r.AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER, n);
    return new o.AgentWebSocketClientFrame({
        frame: {
            case: "runStart",
            value: new o.AgentWebSocketRunStart({
                identity: e,
                headers: a(i)
            })
        }
    });
}, exports.clientMessageFrame = function(e, t, n) {
    return new o.AgentWebSocketClientFrame({
        frame: {
            case: "clientMessage",
            value: new o.AgentWebSocketClientMessage({
                runId: e,
                sequence: t,
                message: n
            })
        }
    });
}, exports.halfCloseFrame = function(e) {
    return new o.AgentWebSocketClientFrame({
        frame: {
            case: "halfClose",
            value: new o.AgentWebSocketClientHalfClose({
                runId: e
            })
        }
    });
}, exports.cancelRunFrame = function(e) {
    return new o.AgentWebSocketClientFrame({
        frame: {
            case: "cancelRun",
            value: new o.AgentWebSocketCancelRun({
                runId: e
            })
        }
    });
}, exports.rawDataBytes = function(e) {
    if (Array.isArray(e)) return Buffer.concat(e);
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
};
const r = require("./module-30637.js"), o = require("./module-13192.js"), i = require(97163);
class s extends Error {
    constructor(e, t){
        super(e), Object.defineProperty(this, "message", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: e
        }), void 0 !== t && "cause" in t && Object.defineProperty(this, "cause", {
            configurable: !0,
            writable: !0,
            value: t.cause
        }), this.agentWebSocketDiagnostics = t?.diagnostics, this.name = "AgentWebSocketDeliveryAmbiguousError";
    }
}
function a(e) {
    const t = [];
    return e.forEach((e, n)=>{
        t.push(new o.AgentWebSocketHeader({
            name: n,
            value: e
        }));
    }), t;
}
function c(e) {
    const t = new Headers;
    for (const n of e)t.append(n.name, n.value);
    return t;
}
exports.AgentWebSocketDeliveryAmbiguousError = s;
exports.SequenceValidator = class {
    constructor(){
        this.next = BigInt(0);
    }
    accept(e) {
        if (e !== this.next) throw new Error(`Agent WebSocket sequence ${e} arrived out of order`);
        this.next += BigInt(1);
    }
};
class l {
    constructor(e, t){
        this.maxBufferedBytes = e, this.onReturn = t, this.values = [], this.readers = [], this.bufferedBytes = 0;
    }
    push(e, t) {
        if (void 0 !== this.terminal) return !0;
        const n = this.readers.shift();
        return void 0 !== n ? (n.resolve({
            done: !1,
            value: e
        }), !0) : !(this.bufferedBytes + t > this.maxBufferedBytes) && (this.bufferedBytes += t, this.values.push({
            value: e,
            bytes: t
        }), !0);
    }
    end() {
        this.settle(void 0);
    }
    error(e) {
        this.settle(e);
    }
    settle(e) {
        if (void 0 === this.terminal) {
            this.terminal = {
                error: e
            }, void 0 !== e && (this.values.length = 0, this.bufferedBytes = 0);
            for (const t of this.readers.splice(0))void 0 === e ? t.resolve({
                done: !0,
                value: void 0
            }) : t.reject(e);
        }
    }
    [Symbol.asyncIterator]() {
        return {
            next: ()=>{
                const e = this.values.shift();
                if (void 0 !== e) return this.bufferedBytes -= e.bytes, Promise.resolve({
                    done: !1,
                    value: e.value
                });
                const t = this.terminal;
                return void 0 !== t ? void 0 === t.error ? Promise.resolve({
                    done: !0,
                    value: void 0
                }) : Promise.reject(t.error) : new Promise((e, t)=>{
                    this.readers.push({
                        resolve: e,
                        reject: t
                    });
                });
            },
            return: async ()=>(await this.onReturn(), {
                    done: !0,
                    value: void 0
                })
        };
    }
}
exports.BoundedFrameQueue = l;
