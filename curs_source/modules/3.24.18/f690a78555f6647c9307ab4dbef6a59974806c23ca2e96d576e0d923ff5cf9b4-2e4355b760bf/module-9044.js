"use strict";
const { Writable: n } = require("./module-2203.js"), r = require("./module-1637.js"), { parserStates: o, opcodes: s, states: a, emptyBuffer: i } = require("./module-5440.js"), { kReadyState: c, kSentClose: l, kResponse: g, kReceivedClose: E } = require("./module-7696.js"), { isValidStatusCode: u, failWebsocketConnection: d, websocketMessageReceived: I } = require("./module-4321.js"), { WebsocketFrameSend: h } = require("./module-1808.js"), Q = {};
Q.ping = r.channel("undici:websocket:ping"), Q.pong = r.channel("undici:websocket:pong");
module.exports = {
    ByteParser: class extends n {
        #g = [];
        #E = 0;
        #u = o.INFO;
        #d = {};
        #I = [];
        constructor(e){
            super(), this.ws = e;
        }
        _write(e, A, t) {
            this.#g.push(e), this.#E += e.length, this.run(t);
        }
        run(e) {
            for(;;){
                if (this.#u === o.INFO) {
                    if (this.#E < 2) return e();
                    const A = this.consume(2);
                    if (this.#d.fin = !!(128 & A[0]), this.#d.opcode = 15 & A[0], this.#d.originalOpcode ??= this.#d.opcode, this.#d.fragmented = !this.#d.fin && this.#d.opcode !== s.CONTINUATION, this.#d.fragmented && this.#d.opcode !== s.BINARY && this.#d.opcode !== s.TEXT) return void d(this.ws, "Invalid frame type was fragmented.");
                    const t = 127 & A[1];
                    if (t <= 125 ? (this.#d.payloadLength = t, this.#u = o.READ_DATA) : 126 === t ? this.#u = o.PAYLOADLENGTH_16 : 127 === t && (this.#u = o.PAYLOADLENGTH_64), this.#d.fragmented && t > 125) return void d(this.ws, "Fragmented frame exceeded 125 bytes.");
                    if ((this.#d.opcode === s.PING || this.#d.opcode === s.PONG || this.#d.opcode === s.CLOSE) && t > 125) return void d(this.ws, "Payload length for control frame exceeded 125 bytes.");
                    if (this.#d.opcode === s.CLOSE) {
                        if (1 === t) return void d(this.ws, "Received close frame with a 1-byte body.");
                        const e = this.consume(t);
                        if (this.#d.closeInfo = this.parseCloseBody(!1, e), !this.ws[l]) {
                            const e = Buffer.allocUnsafe(2);
                            e.writeUInt16BE(this.#d.closeInfo.code, 0);
                            const A = new h(e);
                            this.ws[g].socket.write(A.createFrame(s.CLOSE), (e)=>{
                                e || (this.ws[l] = !0);
                            });
                        }
                        return this.ws[c] = a.CLOSING, this.ws[E] = !0, void this.end();
                    }
                    if (this.#d.opcode === s.PING) {
                        const A = this.consume(t);
                        if (!this.ws[E]) {
                            const e = new h(A);
                            this.ws[g].socket.write(e.createFrame(s.PONG)), Q.ping.hasSubscribers && Q.ping.publish({
                                payload: A
                            });
                        }
                        if (this.#u = o.INFO, this.#E > 0) continue;
                        return void e();
                    }
                    if (this.#d.opcode === s.PONG) {
                        const A = this.consume(t);
                        if (Q.pong.hasSubscribers && Q.pong.publish({
                            payload: A
                        }), this.#E > 0) continue;
                        return void e();
                    }
                } else if (this.#u === o.PAYLOADLENGTH_16) {
                    if (this.#E < 2) return e();
                    const A = this.consume(2);
                    this.#d.payloadLength = A.readUInt16BE(0), this.#u = o.READ_DATA;
                } else if (this.#u === o.PAYLOADLENGTH_64) {
                    if (this.#E < 8) return e();
                    const A = this.consume(8), t = A.readUInt32BE(0);
                    if (t > 2 ** 31 - 1) return void d(this.ws, "Received payload length > 2^31 bytes.");
                    const n = A.readUInt32BE(4);
                    this.#d.payloadLength = (t << 8) + n, this.#u = o.READ_DATA;
                } else if (this.#u === o.READ_DATA) {
                    if (this.#E < this.#d.payloadLength) return e();
                    if (this.#E >= this.#d.payloadLength) {
                        const e = this.consume(this.#d.payloadLength);
                        if (this.#I.push(e), !this.#d.fragmented || this.#d.fin && this.#d.opcode === s.CONTINUATION) {
                            const e = Buffer.concat(this.#I);
                            I(this.ws, this.#d.originalOpcode, e), this.#d = {}, this.#I.length = 0;
                        }
                        this.#u = o.INFO;
                    }
                }
                if (!(this.#E > 0)) {
                    e();
                    break;
                }
            }
        }
        consume(e) {
            if (e > this.#E) return null;
            if (0 === e) return i;
            if (this.#g[0].length === e) return this.#E -= this.#g[0].length, this.#g.shift();
            const A = Buffer.allocUnsafe(e);
            let t = 0;
            for(; t !== e;){
                const n = this.#g[0], { length: r } = n;
                if (r + t === e) {
                    A.set(this.#g.shift(), t);
                    break;
                }
                if (r + t > e) {
                    A.set(n.subarray(0, e - t), t), this.#g[0] = n.subarray(e - t);
                    break;
                }
                A.set(this.#g.shift(), t), t += n.length;
            }
            return this.#E -= e, A;
        }
        parseCloseBody(e, A) {
            let t;
            if (A.length >= 2 && (t = A.readUInt16BE(0)), e) return u(t) ? {
                code: t
            } : null;
            let n = A.subarray(2);
            if (239 === n[0] && 187 === n[1] && 191 === n[2] && (n = n.subarray(3)), void 0 !== t && !u(t)) return null;
            try {
                n = new TextDecoder("utf-8", {
                    fatal: !0
                }).decode(n);
            } catch  {
                return null;
            }
            return {
                code: t,
                reason: n
            };
        }
        get closingInfo() {
            return this.#d.closeInfo;
        }
    }
};
