"use strict";
const { Writable: r } = require(2203), s = require(31637), { parserStates: o, opcodes: n, states: i, emptyBuffer: E } = require("./module-85440.js"), { kReadyState: Q, kSentClose: g, kResponse: C, kReceivedClose: B } = require("./module-35315.js"), { isValidStatusCode: a, failWebsocketConnection: I, websocketMessageReceived: c } = require("./module-44321.js"), { WebsocketFrameSend: h } = require("./module-11808.js"), l = {};
l.ping = s.channel("undici:websocket:ping"), l.pong = s.channel("undici:websocket:pong");
module.exports = {
    ByteParser: class extends r {
        #A = [];
        #e = 0;
        #t = o.INFO;
        #r = {};
        #s = [];
        constructor(A){
            super(), this.ws = A;
        }
        _write(A, e, t) {
            this.#A.push(A), this.#e += A.length, this.run(t);
        }
        run(A) {
            for(;;){
                if (this.#t === o.INFO) {
                    if (this.#e < 2) return A();
                    const e = this.consume(2);
                    if (this.#r.fin = !!(128 & e[0]), this.#r.opcode = 15 & e[0], this.#r.originalOpcode ??= this.#r.opcode, this.#r.fragmented = !this.#r.fin && this.#r.opcode !== n.CONTINUATION, this.#r.fragmented && this.#r.opcode !== n.BINARY && this.#r.opcode !== n.TEXT) return void I(this.ws, "Invalid frame type was fragmented.");
                    const t = 127 & e[1];
                    if (t <= 125 ? (this.#r.payloadLength = t, this.#t = o.READ_DATA) : 126 === t ? this.#t = o.PAYLOADLENGTH_16 : 127 === t && (this.#t = o.PAYLOADLENGTH_64), this.#r.fragmented && t > 125) return void I(this.ws, "Fragmented frame exceeded 125 bytes.");
                    if ((this.#r.opcode === n.PING || this.#r.opcode === n.PONG || this.#r.opcode === n.CLOSE) && t > 125) return void I(this.ws, "Payload length for control frame exceeded 125 bytes.");
                    if (this.#r.opcode === n.CLOSE) {
                        if (1 === t) return void I(this.ws, "Received close frame with a 1-byte body.");
                        const A = this.consume(t);
                        if (this.#r.closeInfo = this.parseCloseBody(!1, A), !this.ws[g]) {
                            const A = Buffer.allocUnsafe(2);
                            A.writeUInt16BE(this.#r.closeInfo.code, 0);
                            const e = new h(A);
                            this.ws[C].socket.write(e.createFrame(n.CLOSE), (A)=>{
                                A || (this.ws[g] = !0);
                            });
                        }
                        return this.ws[Q] = i.CLOSING, this.ws[B] = !0, void this.end();
                    }
                    if (this.#r.opcode === n.PING) {
                        const e = this.consume(t);
                        if (!this.ws[B]) {
                            const A = new h(e);
                            this.ws[C].socket.write(A.createFrame(n.PONG)), l.ping.hasSubscribers && l.ping.publish({
                                payload: e
                            });
                        }
                        if (this.#t = o.INFO, this.#e > 0) continue;
                        return void A();
                    }
                    if (this.#r.opcode === n.PONG) {
                        const e = this.consume(t);
                        if (l.pong.hasSubscribers && l.pong.publish({
                            payload: e
                        }), this.#e > 0) continue;
                        return void A();
                    }
                } else if (this.#t === o.PAYLOADLENGTH_16) {
                    if (this.#e < 2) return A();
                    const e = this.consume(2);
                    this.#r.payloadLength = e.readUInt16BE(0), this.#t = o.READ_DATA;
                } else if (this.#t === o.PAYLOADLENGTH_64) {
                    if (this.#e < 8) return A();
                    const e = this.consume(8), t = e.readUInt32BE(0);
                    if (t > 2 ** 31 - 1) return void I(this.ws, "Received payload length > 2^31 bytes.");
                    const r = e.readUInt32BE(4);
                    this.#r.payloadLength = (t << 8) + r, this.#t = o.READ_DATA;
                } else if (this.#t === o.READ_DATA) {
                    if (this.#e < this.#r.payloadLength) return A();
                    if (this.#e >= this.#r.payloadLength) {
                        const A = this.consume(this.#r.payloadLength);
                        if (this.#s.push(A), !this.#r.fragmented || this.#r.fin && this.#r.opcode === n.CONTINUATION) {
                            const A = Buffer.concat(this.#s);
                            c(this.ws, this.#r.originalOpcode, A), this.#r = {}, this.#s.length = 0;
                        }
                        this.#t = o.INFO;
                    }
                }
                if (!(this.#e > 0)) {
                    A();
                    break;
                }
            }
        }
        consume(A) {
            if (A > this.#e) return null;
            if (0 === A) return E;
            if (this.#A[0].length === A) return this.#e -= this.#A[0].length, this.#A.shift();
            const e = Buffer.allocUnsafe(A);
            let t = 0;
            for(; t !== A;){
                const r = this.#A[0], { length: s } = r;
                if (s + t === A) {
                    e.set(this.#A.shift(), t);
                    break;
                }
                if (s + t > A) {
                    e.set(r.subarray(0, A - t), t), this.#A[0] = r.subarray(A - t);
                    break;
                }
                e.set(this.#A.shift(), t), t += r.length;
            }
            return this.#e -= A, e;
        }
        parseCloseBody(A, e) {
            let t;
            if (e.length >= 2 && (t = e.readUInt16BE(0)), A) return a(t) ? {
                code: t
            } : null;
            let r = e.subarray(2);
            if (239 === r[0] && 187 === r[1] && 191 === r[2] && (r = r.subarray(3)), void 0 !== t && !a(t)) return null;
            try {
                r = new TextDecoder("utf-8", {
                    fatal: !0
                }).decode(r);
            } catch  {
                return null;
            }
            return {
                code: t,
                reason: r
            };
        }
        get closingInfo() {
            return this.#r.closeInfo;
        }
    }
};
