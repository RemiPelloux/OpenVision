"use strict";
const { Writable: n } = require("./module-2203.js"), s = require("./module-31637.js"), { parserStates: o, opcodes: i, states: a, emptyBuffer: c } = require("./module-15948.js"), { kReadyState: l, kSentClose: u, kResponse: d, kReceivedClose: p } = require("./module-96140.js"), { isValidStatusCode: m, failWebsocketConnection: h, websocketMessageReceived: f } = require("./module-18149.js"), { WebsocketFrameSend: g } = require("./module-87324.js"), y = {};
y.ping = s.channel("undici:websocket:ping"), y.pong = s.channel("undici:websocket:pong");
module.exports = {
    ByteParser: class extends n {
        #o = [];
        #i = 0;
        #a = o.INFO;
        #c = {};
        #l = [];
        constructor(e){
            super(), this.ws = e;
        }
        _write(e, t, r) {
            this.#o.push(e), this.#i += e.length, this.run(r);
        }
        run(e) {
            for(;;){
                if (this.#a === o.INFO) {
                    if (this.#i < 2) return e();
                    const t = this.consume(2);
                    if (this.#c.fin = !!(128 & t[0]), this.#c.opcode = 15 & t[0], this.#c.originalOpcode ??= this.#c.opcode, this.#c.fragmented = !this.#c.fin && this.#c.opcode !== i.CONTINUATION, this.#c.fragmented && this.#c.opcode !== i.BINARY && this.#c.opcode !== i.TEXT) return void h(this.ws, "Invalid frame type was fragmented.");
                    const r = 127 & t[1];
                    if (r <= 125 ? (this.#c.payloadLength = r, this.#a = o.READ_DATA) : 126 === r ? this.#a = o.PAYLOADLENGTH_16 : 127 === r && (this.#a = o.PAYLOADLENGTH_64), this.#c.fragmented && r > 125) return void h(this.ws, "Fragmented frame exceeded 125 bytes.");
                    if ((this.#c.opcode === i.PING || this.#c.opcode === i.PONG || this.#c.opcode === i.CLOSE) && r > 125) return void h(this.ws, "Payload length for control frame exceeded 125 bytes.");
                    if (this.#c.opcode === i.CLOSE) {
                        if (1 === r) return void h(this.ws, "Received close frame with a 1-byte body.");
                        const e = this.consume(r);
                        if (this.#c.closeInfo = this.parseCloseBody(!1, e), !this.ws[u]) {
                            const e = Buffer.allocUnsafe(2);
                            e.writeUInt16BE(this.#c.closeInfo.code, 0);
                            const t = new g(e);
                            this.ws[d].socket.write(t.createFrame(i.CLOSE), (e)=>{
                                e || (this.ws[u] = !0);
                            });
                        }
                        return this.ws[l] = a.CLOSING, this.ws[p] = !0, void this.end();
                    }
                    if (this.#c.opcode === i.PING) {
                        const t = this.consume(r);
                        if (!this.ws[p]) {
                            const e = new g(t);
                            this.ws[d].socket.write(e.createFrame(i.PONG)), y.ping.hasSubscribers && y.ping.publish({
                                payload: t
                            });
                        }
                        if (this.#a = o.INFO, this.#i > 0) continue;
                        return void e();
                    }
                    if (this.#c.opcode === i.PONG) {
                        const t = this.consume(r);
                        if (y.pong.hasSubscribers && y.pong.publish({
                            payload: t
                        }), this.#i > 0) continue;
                        return void e();
                    }
                } else if (this.#a === o.PAYLOADLENGTH_16) {
                    if (this.#i < 2) return e();
                    const t = this.consume(2);
                    this.#c.payloadLength = t.readUInt16BE(0), this.#a = o.READ_DATA;
                } else if (this.#a === o.PAYLOADLENGTH_64) {
                    if (this.#i < 8) return e();
                    const t = this.consume(8), r = t.readUInt32BE(0);
                    if (r > 2 ** 31 - 1) return void h(this.ws, "Received payload length > 2^31 bytes.");
                    const n = t.readUInt32BE(4);
                    this.#c.payloadLength = (r << 8) + n, this.#a = o.READ_DATA;
                } else if (this.#a === o.READ_DATA) {
                    if (this.#i < this.#c.payloadLength) return e();
                    if (this.#i >= this.#c.payloadLength) {
                        const e = this.consume(this.#c.payloadLength);
                        if (this.#l.push(e), !this.#c.fragmented || this.#c.fin && this.#c.opcode === i.CONTINUATION) {
                            const e = Buffer.concat(this.#l);
                            f(this.ws, this.#c.originalOpcode, e), this.#c = {}, this.#l.length = 0;
                        }
                        this.#a = o.INFO;
                    }
                }
                if (!(this.#i > 0)) {
                    e();
                    break;
                }
            }
        }
        consume(e) {
            if (e > this.#i) return null;
            if (0 === e) return c;
            if (this.#o[0].length === e) return this.#i -= this.#o[0].length, this.#o.shift();
            const t = Buffer.allocUnsafe(e);
            let r = 0;
            for(; r !== e;){
                const n = this.#o[0], { length: s } = n;
                if (s + r === e) {
                    t.set(this.#o.shift(), r);
                    break;
                }
                if (s + r > e) {
                    t.set(n.subarray(0, e - r), r), this.#o[0] = n.subarray(e - r);
                    break;
                }
                t.set(this.#o.shift(), r), r += n.length;
            }
            return this.#i -= e, t;
        }
        parseCloseBody(e, t) {
            let r;
            if (t.length >= 2 && (r = t.readUInt16BE(0)), e) return m(r) ? {
                code: r
            } : null;
            let n = t.subarray(2);
            if (239 === n[0] && 187 === n[1] && 191 === n[2] && (n = n.subarray(3)), void 0 !== r && !m(r)) return null;
            try {
                n = new TextDecoder("utf-8", {
                    fatal: !0
                }).decode(n);
            } catch  {
                return null;
            }
            return {
                code: r,
                reason: n
            };
        }
        get closingInfo() {
            return this.#c.closeInfo;
        }
    }
};
