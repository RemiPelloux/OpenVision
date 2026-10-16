"use strict";
const { Writable: r } = require(57075), s = require(56970), { parserStates: o, opcodes: n, states: i, emptyBuffer: a, sentCloseFrameState: Q } = require("./module-30229.js"), { kReadyState: g, kSentClose: E, kResponse: B, kReceivedClose: c } = require("./module-47489.js"), { channels: I } = require("./module-98565.js"), { isValidStatusCode: C, isValidOpcode: h, failWebsocketConnection: l, websocketMessageReceived: u, utf8Decode: d, isControlFrame: f, isTextBinaryFrame: w, isContinuationFrame: y } = require("./module-79946.js"), { WebsocketFrameSend: D } = require("./module-35553.js"), { closeWebSocketConnection: p } = require("./module-81674.js"), { PerMessageDeflate: k } = require("./module-88774.js"), { MessageSizeExceededError: R } = require("./module-38238.js");
function F(A, e, t) {
    p(A, e, t, Buffer.byteLength(t)), l(A, t);
}
module.exports = {
    ByteParser: class extends r {
        #w = [];
        #y = 0;
        #D = 0;
        #p = !1;
        #c = o.INFO;
        #k = {};
        #R = [];
        #F;
        #m;
        #b;
        constructor(A, e, t = {}){
            super(), this.ws = A, this.#F = e ?? new Map, this.#m = t.maxFragments ?? 0, this.#b = t.maxPayloadSize ?? 0, this.#F.has("permessage-deflate") && this.#F.set("permessage-deflate", new k(e, t));
        }
        _write(A, e, t) {
            this.#w.push(A), this.#D += A.length, this.#p = !0, this.run(t);
        }
        #N() {
            return !(this.#b > 0 && !f(this.#k.opcode) && this.#k.payloadLength + this.#y > this.#b) || (F(this.ws, 1009, "Payload size exceeds maximum allowed size"), !1);
        }
        run(A) {
            for(; this.#p;)if (this.#c === o.INFO) {
                if (this.#D < 2) return A();
                const e = this.consume(2), t = !!(128 & e[0]), r = 15 & e[0], s = !(128 & ~e[1]), i = !t && r !== n.CONTINUATION, a = 127 & e[1], Q = 64 & e[0], g = 32 & e[0], E = 16 & e[0];
                if (!h(r)) return l(this.ws, "Invalid opcode received"), A();
                if (s) return l(this.ws, "Frame cannot be masked"), A();
                if (0 !== Q && !this.#F.has("permessage-deflate")) return void l(this.ws, "Expected RSV1 to be clear.");
                if (0 !== g || 0 !== E) return void l(this.ws, "RSV1, RSV2, RSV3 must be clear");
                if (i && !w(r)) return void l(this.ws, "Invalid frame type was fragmented.");
                if (w(r) && this.#R.length > 0) return void l(this.ws, "Expected continuation frame");
                if (this.#k.fragmented && i) return void l(this.ws, "Fragmented frame exceeded 125 bytes.");
                if ((a > 125 || i) && f(r)) return void l(this.ws, "Control frame either too large or fragmented");
                if (y(r) && 0 === this.#R.length && !this.#k.compressed) return void l(this.ws, "Unexpected continuation frame");
                if (a <= 125) {
                    if (this.#k.payloadLength = a, this.#c = o.READ_DATA, !this.#N()) return;
                } else 126 === a ? this.#c = o.PAYLOADLENGTH_16 : 127 === a && (this.#c = o.PAYLOADLENGTH_64);
                w(r) && (this.#k.binaryType = r, this.#k.compressed = 0 !== Q), this.#k.opcode = r, this.#k.masked = s, this.#k.fin = t, this.#k.fragmented = i;
            } else if (this.#c === o.PAYLOADLENGTH_16) {
                if (this.#D < 2) return A();
                const e = this.consume(2);
                if (this.#k.payloadLength = e.readUInt16BE(0), this.#c = o.READ_DATA, !this.#N()) return;
            } else if (this.#c === o.PAYLOADLENGTH_64) {
                if (this.#D < 8) return A();
                const e = this.consume(8), t = e.readUInt32BE(0), r = e.readUInt32BE(4);
                if (0 !== t || r > 2 ** 31 - 1) return void l(this.ws, "Received payload length > 2^31 bytes.");
                if (this.#k.payloadLength = r, this.#c = o.READ_DATA, !this.#N()) return;
            } else if (this.#c === o.READ_DATA) {
                if (this.#D < this.#k.payloadLength) return A();
                const e = this.consume(this.#k.payloadLength);
                if (f(this.#k.opcode)) this.#p = this.parseControlFrame(e), this.#c = o.INFO;
                else {
                    if (this.#k.compressed) {
                        this.#F.get("permessage-deflate").decompress(e, this.#k.fin, (e, t)=>{
                            if (e) {
                                const A = e instanceof R ? 1009 : 1007;
                                return void F(this.ws, A, e.message);
                            }
                            if (this.writeFragments(t)) if (this.#b > 0 && this.#y > this.#b) F(this.ws, 1009, (new R).message);
                            else {
                                if (!this.#k.fin) return this.#c = o.INFO, this.#p = !0, void this.run(A);
                                u(this.ws, this.#k.binaryType, this.consumeFragments()), this.#p = !0, this.#c = o.INFO, this.run(A);
                            }
                        }), this.#p = !1;
                        break;
                    }
                    if (!this.writeFragments(e)) return;
                    if (this.#b > 0 && this.#y > this.#b) return void F(this.ws, 1009, (new R).message);
                    !this.#k.fragmented && this.#k.fin && u(this.ws, this.#k.binaryType, this.consumeFragments()), this.#c = o.INFO;
                }
            }
        }
        consume(A) {
            if (A > this.#D) throw new Error("Called consume() before buffers satiated.");
            if (0 === A) return a;
            if (this.#w[0].length === A) return this.#D -= this.#w[0].length, this.#w.shift();
            const e = Buffer.allocUnsafe(A);
            let t = 0;
            for(; t !== A;){
                const r = this.#w[0], { length: s } = r;
                if (s + t === A) {
                    e.set(this.#w.shift(), t);
                    break;
                }
                if (s + t > A) {
                    e.set(r.subarray(0, A - t), t), this.#w[0] = r.subarray(A - t);
                    break;
                }
                e.set(this.#w.shift(), t), t += r.length;
            }
            return this.#D -= A, e;
        }
        writeFragments(A) {
            return this.#m > 0 && this.#R.length === this.#m ? (F(this.ws, 1008, "Too many message fragments"), !1) : (this.#y += A.length, this.#R.push(A), !0);
        }
        consumeFragments() {
            const A = this.#R;
            if (1 === A.length) return this.#y = 0, A.shift();
            const e = Buffer.concat(A, this.#y);
            return this.#R = [], this.#y = 0, e;
        }
        parseCloseBody(A) {
            let e;
            if (s(1 !== A.length), A.length >= 2 && (e = A.readUInt16BE(0)), void 0 !== e && !C(e)) return {
                code: 1002,
                reason: "Invalid status code",
                error: !0
            };
            let t = A.subarray(2);
            239 === t[0] && 187 === t[1] && 191 === t[2] && (t = t.subarray(3));
            try {
                t = d(t);
            } catch  {
                return {
                    code: 1007,
                    reason: "Invalid UTF-8",
                    error: !0
                };
            }
            return {
                code: e,
                reason: t,
                error: !1
            };
        }
        parseControlFrame(A) {
            const { opcode: e, payloadLength: t } = this.#k;
            if (e === n.CLOSE) {
                if (1 === t) return l(this.ws, "Received close frame with a 1-byte body."), !1;
                if (this.#k.closeInfo = this.parseCloseBody(A), this.#k.closeInfo.error) {
                    const { code: A, reason: e } = this.#k.closeInfo;
                    return p(this.ws, A, e, e.length), l(this.ws, e), !1;
                }
                if (this.ws[E] !== Q.SENT) {
                    let A = a;
                    this.#k.closeInfo.code && (A = Buffer.allocUnsafe(2), A.writeUInt16BE(this.#k.closeInfo.code, 0));
                    const e = new D(A);
                    this.ws[B].socket.write(e.createFrame(n.CLOSE), (A)=>{
                        A || (this.ws[E] = Q.SENT);
                    });
                }
                return this.ws[g] = i.CLOSING, this.ws[c] = !0, !1;
            }
            if (e === n.PING) {
                if (!this.ws[c]) {
                    const e = new D(A);
                    this.ws[B].socket.write(e.createFrame(n.PONG)), I.ping.hasSubscribers && I.ping.publish({
                        payload: A
                    });
                }
            } else e === n.PONG && I.pong.hasSubscribers && I.pong.publish({
                payload: A
            });
            return !0;
        }
        get closingInfo() {
            return this.#k.closeInfo;
        }
    }
};
