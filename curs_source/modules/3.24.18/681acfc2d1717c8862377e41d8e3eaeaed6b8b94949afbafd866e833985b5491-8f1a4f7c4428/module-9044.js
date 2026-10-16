"use strict";
const { Writable: n } = require("./module-2203.js"), r = require("./module-1637.js"), { parserStates: o, opcodes: s, states: i, emptyBuffer: a } = require("./module-5440.js"), { kReadyState: c, kSentClose: l, kResponse: u, kReceivedClose: g } = require("./module-7696.js"), { isValidStatusCode: E, failWebsocketConnection: h, websocketMessageReceived: d } = require("./module-4321.js"), { WebsocketFrameSend: I } = require("./module-1808.js"), B = {};
B.ping = r.channel("undici:websocket:ping"), B.pong = r.channel("undici:websocket:pong");
module.exports = {
    ByteParser: class extends n {
        #u = [];
        #g = 0;
        #E = o.INFO;
        #h = {};
        #d = [];
        constructor(e){
            super(), this.ws = e;
        }
        _write(e, t, A) {
            this.#u.push(e), this.#g += e.length, this.run(A);
        }
        run(e) {
            for(;;){
                if (this.#E === o.INFO) {
                    if (this.#g < 2) return e();
                    const t = this.consume(2);
                    if (this.#h.fin = !!(128 & t[0]), this.#h.opcode = 15 & t[0], this.#h.originalOpcode ??= this.#h.opcode, this.#h.fragmented = !this.#h.fin && this.#h.opcode !== s.CONTINUATION, this.#h.fragmented && this.#h.opcode !== s.BINARY && this.#h.opcode !== s.TEXT) return void h(this.ws, "Invalid frame type was fragmented.");
                    const A = 127 & t[1];
                    if (A <= 125 ? (this.#h.payloadLength = A, this.#E = o.READ_DATA) : 126 === A ? this.#E = o.PAYLOADLENGTH_16 : 127 === A && (this.#E = o.PAYLOADLENGTH_64), this.#h.fragmented && A > 125) return void h(this.ws, "Fragmented frame exceeded 125 bytes.");
                    if ((this.#h.opcode === s.PING || this.#h.opcode === s.PONG || this.#h.opcode === s.CLOSE) && A > 125) return void h(this.ws, "Payload length for control frame exceeded 125 bytes.");
                    if (this.#h.opcode === s.CLOSE) {
                        if (1 === A) return void h(this.ws, "Received close frame with a 1-byte body.");
                        const e = this.consume(A);
                        if (this.#h.closeInfo = this.parseCloseBody(!1, e), !this.ws[l]) {
                            const e = Buffer.allocUnsafe(2);
                            e.writeUInt16BE(this.#h.closeInfo.code, 0);
                            const t = new I(e);
                            this.ws[u].socket.write(t.createFrame(s.CLOSE), (e)=>{
                                e || (this.ws[l] = !0);
                            });
                        }
                        return this.ws[c] = i.CLOSING, this.ws[g] = !0, void this.end();
                    }
                    if (this.#h.opcode === s.PING) {
                        const t = this.consume(A);
                        if (!this.ws[g]) {
                            const e = new I(t);
                            this.ws[u].socket.write(e.createFrame(s.PONG)), B.ping.hasSubscribers && B.ping.publish({
                                payload: t
                            });
                        }
                        if (this.#E = o.INFO, this.#g > 0) continue;
                        return void e();
                    }
                    if (this.#h.opcode === s.PONG) {
                        const t = this.consume(A);
                        if (B.pong.hasSubscribers && B.pong.publish({
                            payload: t
                        }), this.#g > 0) continue;
                        return void e();
                    }
                } else if (this.#E === o.PAYLOADLENGTH_16) {
                    if (this.#g < 2) return e();
                    const t = this.consume(2);
                    this.#h.payloadLength = t.readUInt16BE(0), this.#E = o.READ_DATA;
                } else if (this.#E === o.PAYLOADLENGTH_64) {
                    if (this.#g < 8) return e();
                    const t = this.consume(8), A = t.readUInt32BE(0);
                    if (A > 2 ** 31 - 1) return void h(this.ws, "Received payload length > 2^31 bytes.");
                    const n = t.readUInt32BE(4);
                    this.#h.payloadLength = (A << 8) + n, this.#E = o.READ_DATA;
                } else if (this.#E === o.READ_DATA) {
                    if (this.#g < this.#h.payloadLength) return e();
                    if (this.#g >= this.#h.payloadLength) {
                        const e = this.consume(this.#h.payloadLength);
                        if (this.#d.push(e), !this.#h.fragmented || this.#h.fin && this.#h.opcode === s.CONTINUATION) {
                            const e = Buffer.concat(this.#d);
                            d(this.ws, this.#h.originalOpcode, e), this.#h = {}, this.#d.length = 0;
                        }
                        this.#E = o.INFO;
                    }
                }
                if (!(this.#g > 0)) {
                    e();
                    break;
                }
            }
        }
        consume(e) {
            if (e > this.#g) return null;
            if (0 === e) return a;
            if (this.#u[0].length === e) return this.#g -= this.#u[0].length, this.#u.shift();
            const t = Buffer.allocUnsafe(e);
            let A = 0;
            for(; A !== e;){
                const n = this.#u[0], { length: r } = n;
                if (r + A === e) {
                    t.set(this.#u.shift(), A);
                    break;
                }
                if (r + A > e) {
                    t.set(n.subarray(0, e - A), A), this.#u[0] = n.subarray(e - A);
                    break;
                }
                t.set(this.#u.shift(), A), A += n.length;
            }
            return this.#g -= e, t;
        }
        parseCloseBody(e, t) {
            let A;
            if (t.length >= 2 && (A = t.readUInt16BE(0)), e) return E(A) ? {
                code: A
            } : null;
            let n = t.subarray(2);
            if (239 === n[0] && 187 === n[1] && 191 === n[2] && (n = n.subarray(3)), void 0 !== A && !E(A)) return null;
            try {
                n = new TextDecoder("utf-8", {
                    fatal: !0
                }).decode(n);
            } catch  {
                return null;
            }
            return {
                code: A,
                reason: n
            };
        }
        get closingInfo() {
            return this.#h.closeInfo;
        }
    }
};
