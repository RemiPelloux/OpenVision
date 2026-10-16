"use strict";
const { Writable: t } = require("./module-2203.js"), s = require("./module-1637.js"), { parserStates: o, opcodes: r, states: i, emptyBuffer: l } = require("./module-5440.js"), { kReadyState: d, kSentClose: m, kResponse: c, kReceivedClose: p } = require("./module-7696.js"), { isValidStatusCode: A, failWebsocketConnection: u, websocketMessageReceived: g } = require("./module-4321.js"), { WebsocketFrameSend: T } = require("./module-1808.js"), h = {};
h.ping = s.channel("undici:websocket:ping"), h.pong = s.channel("undici:websocket:pong");
module.exports = {
    ByteParser: class extends t {
        #c = [];
        #p = 0;
        #A = o.INFO;
        #u = {};
        #g = [];
        constructor(e){
            super(), this.ws = e;
        }
        _write(e, a, n) {
            this.#c.push(e), this.#p += e.length, this.run(n);
        }
        run(e) {
            for(;;){
                if (this.#A === o.INFO) {
                    if (this.#p < 2) return e();
                    const a = this.consume(2);
                    if (this.#u.fin = !!(128 & a[0]), this.#u.opcode = 15 & a[0], this.#u.originalOpcode ??= this.#u.opcode, this.#u.fragmented = !this.#u.fin && this.#u.opcode !== r.CONTINUATION, this.#u.fragmented && this.#u.opcode !== r.BINARY && this.#u.opcode !== r.TEXT) return void u(this.ws, "Invalid frame type was fragmented.");
                    const n = 127 & a[1];
                    if (n <= 125 ? (this.#u.payloadLength = n, this.#A = o.READ_DATA) : 126 === n ? this.#A = o.PAYLOADLENGTH_16 : 127 === n && (this.#A = o.PAYLOADLENGTH_64), this.#u.fragmented && n > 125) return void u(this.ws, "Fragmented frame exceeded 125 bytes.");
                    if ((this.#u.opcode === r.PING || this.#u.opcode === r.PONG || this.#u.opcode === r.CLOSE) && n > 125) return void u(this.ws, "Payload length for control frame exceeded 125 bytes.");
                    if (this.#u.opcode === r.CLOSE) {
                        if (1 === n) return void u(this.ws, "Received close frame with a 1-byte body.");
                        const e = this.consume(n);
                        if (this.#u.closeInfo = this.parseCloseBody(!1, e), !this.ws[m]) {
                            const e = Buffer.allocUnsafe(2);
                            e.writeUInt16BE(this.#u.closeInfo.code, 0);
                            const a = new T(e);
                            this.ws[c].socket.write(a.createFrame(r.CLOSE), (e)=>{
                                e || (this.ws[m] = !0);
                            });
                        }
                        return this.ws[d] = i.CLOSING, this.ws[p] = !0, void this.end();
                    }
                    if (this.#u.opcode === r.PING) {
                        const a = this.consume(n);
                        if (!this.ws[p]) {
                            const e = new T(a);
                            this.ws[c].socket.write(e.createFrame(r.PONG)), h.ping.hasSubscribers && h.ping.publish({
                                payload: a
                            });
                        }
                        if (this.#A = o.INFO, this.#p > 0) continue;
                        return void e();
                    }
                    if (this.#u.opcode === r.PONG) {
                        const a = this.consume(n);
                        if (h.pong.hasSubscribers && h.pong.publish({
                            payload: a
                        }), this.#p > 0) continue;
                        return void e();
                    }
                } else if (this.#A === o.PAYLOADLENGTH_16) {
                    if (this.#p < 2) return e();
                    const a = this.consume(2);
                    this.#u.payloadLength = a.readUInt16BE(0), this.#A = o.READ_DATA;
                } else if (this.#A === o.PAYLOADLENGTH_64) {
                    if (this.#p < 8) return e();
                    const a = this.consume(8), n = a.readUInt32BE(0);
                    if (n > 2 ** 31 - 1) return void u(this.ws, "Received payload length > 2^31 bytes.");
                    const t = a.readUInt32BE(4);
                    this.#u.payloadLength = (n << 8) + t, this.#A = o.READ_DATA;
                } else if (this.#A === o.READ_DATA) {
                    if (this.#p < this.#u.payloadLength) return e();
                    if (this.#p >= this.#u.payloadLength) {
                        const e = this.consume(this.#u.payloadLength);
                        if (this.#g.push(e), !this.#u.fragmented || this.#u.fin && this.#u.opcode === r.CONTINUATION) {
                            const e = Buffer.concat(this.#g);
                            g(this.ws, this.#u.originalOpcode, e), this.#u = {}, this.#g.length = 0;
                        }
                        this.#A = o.INFO;
                    }
                }
                if (!(this.#p > 0)) {
                    e();
                    break;
                }
            }
        }
        consume(e) {
            if (e > this.#p) return null;
            if (0 === e) return l;
            if (this.#c[0].length === e) return this.#p -= this.#c[0].length, this.#c.shift();
            const a = Buffer.allocUnsafe(e);
            let n = 0;
            for(; n !== e;){
                const t = this.#c[0], { length: s } = t;
                if (s + n === e) {
                    a.set(this.#c.shift(), n);
                    break;
                }
                if (s + n > e) {
                    a.set(t.subarray(0, e - n), n), this.#c[0] = t.subarray(e - n);
                    break;
                }
                a.set(this.#c.shift(), n), n += t.length;
            }
            return this.#p -= e, a;
        }
        parseCloseBody(e, a) {
            let n;
            if (a.length >= 2 && (n = a.readUInt16BE(0)), e) return A(n) ? {
                code: n
            } : null;
            let t = a.subarray(2);
            if (239 === t[0] && 187 === t[1] && 191 === t[2] && (t = t.subarray(3)), void 0 !== n && !A(n)) return null;
            try {
                t = new TextDecoder("utf-8", {
                    fatal: !0
                }).decode(t);
            } catch  {
                return null;
            }
            return {
                code: n,
                reason: t
            };
        }
        get closingInfo() {
            return this.#u.closeInfo;
        }
    }
};
