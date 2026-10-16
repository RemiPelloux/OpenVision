"use strict";
const { Writable: t } = require("./module-2203.js"), s = require("./module-1637.js"), { parserStates: o, opcodes: r, states: i, emptyBuffer: A } = require("./module-5440.js"), { kReadyState: l, kSentClose: c, kResponse: m, kReceivedClose: d } = require("./module-7696.js"), { isValidStatusCode: g, failWebsocketConnection: u, websocketMessageReceived: E } = require("./module-4321.js"), { WebsocketFrameSend: p } = require("./module-1808.js"), T = {};
T.ping = s.channel("undici:websocket:ping"), T.pong = s.channel("undici:websocket:pong");
module.exports = {
    ByteParser: class extends t {
        #m = [];
        #d = 0;
        #g = o.INFO;
        #u = {};
        #E = [];
        constructor(e){
            super(), this.ws = e;
        }
        _write(e, n, a) {
            this.#m.push(e), this.#d += e.length, this.run(a);
        }
        run(e) {
            for(;;){
                if (this.#g === o.INFO) {
                    if (this.#d < 2) return e();
                    const n = this.consume(2);
                    if (this.#u.fin = !!(128 & n[0]), this.#u.opcode = 15 & n[0], this.#u.originalOpcode ??= this.#u.opcode, this.#u.fragmented = !this.#u.fin && this.#u.opcode !== r.CONTINUATION, this.#u.fragmented && this.#u.opcode !== r.BINARY && this.#u.opcode !== r.TEXT) return void u(this.ws, "Invalid frame type was fragmented.");
                    const a = 127 & n[1];
                    if (a <= 125 ? (this.#u.payloadLength = a, this.#g = o.READ_DATA) : 126 === a ? this.#g = o.PAYLOADLENGTH_16 : 127 === a && (this.#g = o.PAYLOADLENGTH_64), this.#u.fragmented && a > 125) return void u(this.ws, "Fragmented frame exceeded 125 bytes.");
                    if ((this.#u.opcode === r.PING || this.#u.opcode === r.PONG || this.#u.opcode === r.CLOSE) && a > 125) return void u(this.ws, "Payload length for control frame exceeded 125 bytes.");
                    if (this.#u.opcode === r.CLOSE) {
                        if (1 === a) return void u(this.ws, "Received close frame with a 1-byte body.");
                        const e = this.consume(a);
                        if (this.#u.closeInfo = this.parseCloseBody(!1, e), !this.ws[c]) {
                            const e = Buffer.allocUnsafe(2);
                            e.writeUInt16BE(this.#u.closeInfo.code, 0);
                            const n = new p(e);
                            this.ws[m].socket.write(n.createFrame(r.CLOSE), (e)=>{
                                e || (this.ws[c] = !0);
                            });
                        }
                        return this.ws[l] = i.CLOSING, this.ws[d] = !0, void this.end();
                    }
                    if (this.#u.opcode === r.PING) {
                        const n = this.consume(a);
                        if (!this.ws[d]) {
                            const e = new p(n);
                            this.ws[m].socket.write(e.createFrame(r.PONG)), T.ping.hasSubscribers && T.ping.publish({
                                payload: n
                            });
                        }
                        if (this.#g = o.INFO, this.#d > 0) continue;
                        return void e();
                    }
                    if (this.#u.opcode === r.PONG) {
                        const n = this.consume(a);
                        if (T.pong.hasSubscribers && T.pong.publish({
                            payload: n
                        }), this.#d > 0) continue;
                        return void e();
                    }
                } else if (this.#g === o.PAYLOADLENGTH_16) {
                    if (this.#d < 2) return e();
                    const n = this.consume(2);
                    this.#u.payloadLength = n.readUInt16BE(0), this.#g = o.READ_DATA;
                } else if (this.#g === o.PAYLOADLENGTH_64) {
                    if (this.#d < 8) return e();
                    const n = this.consume(8), a = n.readUInt32BE(0);
                    if (a > 2 ** 31 - 1) return void u(this.ws, "Received payload length > 2^31 bytes.");
                    const t = n.readUInt32BE(4);
                    this.#u.payloadLength = (a << 8) + t, this.#g = o.READ_DATA;
                } else if (this.#g === o.READ_DATA) {
                    if (this.#d < this.#u.payloadLength) return e();
                    if (this.#d >= this.#u.payloadLength) {
                        const e = this.consume(this.#u.payloadLength);
                        if (this.#E.push(e), !this.#u.fragmented || this.#u.fin && this.#u.opcode === r.CONTINUATION) {
                            const e = Buffer.concat(this.#E);
                            E(this.ws, this.#u.originalOpcode, e), this.#u = {}, this.#E.length = 0;
                        }
                        this.#g = o.INFO;
                    }
                }
                if (!(this.#d > 0)) {
                    e();
                    break;
                }
            }
        }
        consume(e) {
            if (e > this.#d) return null;
            if (0 === e) return A;
            if (this.#m[0].length === e) return this.#d -= this.#m[0].length, this.#m.shift();
            const n = Buffer.allocUnsafe(e);
            let a = 0;
            for(; a !== e;){
                const t = this.#m[0], { length: s } = t;
                if (s + a === e) {
                    n.set(this.#m.shift(), a);
                    break;
                }
                if (s + a > e) {
                    n.set(t.subarray(0, e - a), a), this.#m[0] = t.subarray(e - a);
                    break;
                }
                n.set(this.#m.shift(), a), a += t.length;
            }
            return this.#d -= e, n;
        }
        parseCloseBody(e, n) {
            let a;
            if (n.length >= 2 && (a = n.readUInt16BE(0)), e) return g(a) ? {
                code: a
            } : null;
            let t = n.subarray(2);
            if (239 === t[0] && 187 === t[1] && 191 === t[2] && (t = t.subarray(3)), void 0 !== a && !g(a)) return null;
            try {
                t = new TextDecoder("utf-8", {
                    fatal: !0
                }).decode(t);
            } catch  {
                return null;
            }
            return {
                code: a,
                reason: t
            };
        }
        get closingInfo() {
            return this.#u.closeInfo;
        }
    }
};
