"use strict";
const { Writable: a } = require("./module-2203.js"), s = require("./module-1637.js"), { parserStates: o, opcodes: r, states: i, emptyBuffer: A } = require("./module-5440.js"), { kReadyState: c, kSentClose: l, kResponse: d, kReceivedClose: m } = require("./module-7696.js"), { isValidStatusCode: u, failWebsocketConnection: g, websocketMessageReceived: p } = require("./module-4321.js"), { WebsocketFrameSend: E } = require("./module-1808.js"), h = {};
h.ping = s.channel("undici:websocket:ping"), h.pong = s.channel("undici:websocket:pong");
module.exports = {
    ByteParser: class extends a {
        #d = [];
        #m = 0;
        #u = o.INFO;
        #g = {};
        #p = [];
        constructor(e){
            super(), this.ws = e;
        }
        _write(e, n, t) {
            this.#d.push(e), this.#m += e.length, this.run(t);
        }
        run(e) {
            for(;;){
                if (this.#u === o.INFO) {
                    if (this.#m < 2) return e();
                    const n = this.consume(2);
                    if (this.#g.fin = !!(128 & n[0]), this.#g.opcode = 15 & n[0], this.#g.originalOpcode ??= this.#g.opcode, this.#g.fragmented = !this.#g.fin && this.#g.opcode !== r.CONTINUATION, this.#g.fragmented && this.#g.opcode !== r.BINARY && this.#g.opcode !== r.TEXT) return void g(this.ws, "Invalid frame type was fragmented.");
                    const t = 127 & n[1];
                    if (t <= 125 ? (this.#g.payloadLength = t, this.#u = o.READ_DATA) : 126 === t ? this.#u = o.PAYLOADLENGTH_16 : 127 === t && (this.#u = o.PAYLOADLENGTH_64), this.#g.fragmented && t > 125) return void g(this.ws, "Fragmented frame exceeded 125 bytes.");
                    if ((this.#g.opcode === r.PING || this.#g.opcode === r.PONG || this.#g.opcode === r.CLOSE) && t > 125) return void g(this.ws, "Payload length for control frame exceeded 125 bytes.");
                    if (this.#g.opcode === r.CLOSE) {
                        if (1 === t) return void g(this.ws, "Received close frame with a 1-byte body.");
                        const e = this.consume(t);
                        if (this.#g.closeInfo = this.parseCloseBody(!1, e), !this.ws[l]) {
                            const e = Buffer.allocUnsafe(2);
                            e.writeUInt16BE(this.#g.closeInfo.code, 0);
                            const n = new E(e);
                            this.ws[d].socket.write(n.createFrame(r.CLOSE), (e)=>{
                                e || (this.ws[l] = !0);
                            });
                        }
                        return this.ws[c] = i.CLOSING, this.ws[m] = !0, void this.end();
                    }
                    if (this.#g.opcode === r.PING) {
                        const n = this.consume(t);
                        if (!this.ws[m]) {
                            const e = new E(n);
                            this.ws[d].socket.write(e.createFrame(r.PONG)), h.ping.hasSubscribers && h.ping.publish({
                                payload: n
                            });
                        }
                        if (this.#u = o.INFO, this.#m > 0) continue;
                        return void e();
                    }
                    if (this.#g.opcode === r.PONG) {
                        const n = this.consume(t);
                        if (h.pong.hasSubscribers && h.pong.publish({
                            payload: n
                        }), this.#m > 0) continue;
                        return void e();
                    }
                } else if (this.#u === o.PAYLOADLENGTH_16) {
                    if (this.#m < 2) return e();
                    const n = this.consume(2);
                    this.#g.payloadLength = n.readUInt16BE(0), this.#u = o.READ_DATA;
                } else if (this.#u === o.PAYLOADLENGTH_64) {
                    if (this.#m < 8) return e();
                    const n = this.consume(8), t = n.readUInt32BE(0);
                    if (t > 2 ** 31 - 1) return void g(this.ws, "Received payload length > 2^31 bytes.");
                    const a = n.readUInt32BE(4);
                    this.#g.payloadLength = (t << 8) + a, this.#u = o.READ_DATA;
                } else if (this.#u === o.READ_DATA) {
                    if (this.#m < this.#g.payloadLength) return e();
                    if (this.#m >= this.#g.payloadLength) {
                        const e = this.consume(this.#g.payloadLength);
                        if (this.#p.push(e), !this.#g.fragmented || this.#g.fin && this.#g.opcode === r.CONTINUATION) {
                            const e = Buffer.concat(this.#p);
                            p(this.ws, this.#g.originalOpcode, e), this.#g = {}, this.#p.length = 0;
                        }
                        this.#u = o.INFO;
                    }
                }
                if (!(this.#m > 0)) {
                    e();
                    break;
                }
            }
        }
        consume(e) {
            if (e > this.#m) return null;
            if (0 === e) return A;
            if (this.#d[0].length === e) return this.#m -= this.#d[0].length, this.#d.shift();
            const n = Buffer.allocUnsafe(e);
            let t = 0;
            for(; t !== e;){
                const a = this.#d[0], { length: s } = a;
                if (s + t === e) {
                    n.set(this.#d.shift(), t);
                    break;
                }
                if (s + t > e) {
                    n.set(a.subarray(0, e - t), t), this.#d[0] = a.subarray(e - t);
                    break;
                }
                n.set(this.#d.shift(), t), t += a.length;
            }
            return this.#m -= e, n;
        }
        parseCloseBody(e, n) {
            let t;
            if (n.length >= 2 && (t = n.readUInt16BE(0)), e) return u(t) ? {
                code: t
            } : null;
            let a = n.subarray(2);
            if (239 === a[0] && 187 === a[1] && 191 === a[2] && (a = a.subarray(3)), void 0 !== t && !u(t)) return null;
            try {
                a = new TextDecoder("utf-8", {
                    fatal: !0
                }).decode(a);
            } catch  {
                return null;
            }
            return {
                code: t,
                reason: a
            };
        }
        get closingInfo() {
            return this.#g.closeInfo;
        }
    }
};
