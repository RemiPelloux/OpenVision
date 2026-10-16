"use strict";
const { Writable: n } = require("./module-2203.js"), s = require("./module-1637.js"), { parserStates: i, opcodes: o, states: a, emptyBuffer: u } = require("./module-5948.js"), { kReadyState: c, kSentClose: l, kResponse: m, kReceivedClose: d } = require("./module-6140.js"), { isValidStatusCode: f, failWebsocketConnection: p, websocketMessageReceived: h } = require("./module-8149.js"), { WebsocketFrameSend: g } = require("./module-7324.js"), A = {};
A.ping = s.channel("undici:websocket:ping"), A.pong = s.channel("undici:websocket:pong");
module.exports = {
    ByteParser: class extends n {
        #e = [];
        #r = 0;
        #n = i.INFO;
        #s = {};
        #i = [];
        constructor(t){
            super(), this.ws = t;
        }
        _write(t, e, r) {
            this.#e.push(t), this.#r += t.length, this.run(r);
        }
        run(t) {
            for(;;){
                if (this.#n === i.INFO) {
                    if (this.#r < 2) return t();
                    const e = this.consume(2);
                    if (this.#s.fin = !!(128 & e[0]), this.#s.opcode = 15 & e[0], this.#s.originalOpcode ??= this.#s.opcode, this.#s.fragmented = !this.#s.fin && this.#s.opcode !== o.CONTINUATION, this.#s.fragmented && this.#s.opcode !== o.BINARY && this.#s.opcode !== o.TEXT) return void p(this.ws, "Invalid frame type was fragmented.");
                    const r = 127 & e[1];
                    if (r <= 125 ? (this.#s.payloadLength = r, this.#n = i.READ_DATA) : 126 === r ? this.#n = i.PAYLOADLENGTH_16 : 127 === r && (this.#n = i.PAYLOADLENGTH_64), this.#s.fragmented && r > 125) return void p(this.ws, "Fragmented frame exceeded 125 bytes.");
                    if ((this.#s.opcode === o.PING || this.#s.opcode === o.PONG || this.#s.opcode === o.CLOSE) && r > 125) return void p(this.ws, "Payload length for control frame exceeded 125 bytes.");
                    if (this.#s.opcode === o.CLOSE) {
                        if (1 === r) return void p(this.ws, "Received close frame with a 1-byte body.");
                        const t = this.consume(r);
                        if (this.#s.closeInfo = this.parseCloseBody(!1, t), !this.ws[l]) {
                            const t = Buffer.allocUnsafe(2);
                            t.writeUInt16BE(this.#s.closeInfo.code, 0);
                            const e = new g(t);
                            this.ws[m].socket.write(e.createFrame(o.CLOSE), (t)=>{
                                t || (this.ws[l] = !0);
                            });
                        }
                        return this.ws[c] = a.CLOSING, this.ws[d] = !0, void this.end();
                    }
                    if (this.#s.opcode === o.PING) {
                        const e = this.consume(r);
                        if (!this.ws[d]) {
                            const t = new g(e);
                            this.ws[m].socket.write(t.createFrame(o.PONG)), A.ping.hasSubscribers && A.ping.publish({
                                payload: e
                            });
                        }
                        if (this.#n = i.INFO, this.#r > 0) continue;
                        return void t();
                    }
                    if (this.#s.opcode === o.PONG) {
                        const e = this.consume(r);
                        if (A.pong.hasSubscribers && A.pong.publish({
                            payload: e
                        }), this.#r > 0) continue;
                        return void t();
                    }
                } else if (this.#n === i.PAYLOADLENGTH_16) {
                    if (this.#r < 2) return t();
                    const e = this.consume(2);
                    this.#s.payloadLength = e.readUInt16BE(0), this.#n = i.READ_DATA;
                } else if (this.#n === i.PAYLOADLENGTH_64) {
                    if (this.#r < 8) return t();
                    const e = this.consume(8), r = e.readUInt32BE(0);
                    if (r > 2 ** 31 - 1) return void p(this.ws, "Received payload length > 2^31 bytes.");
                    const n = e.readUInt32BE(4);
                    this.#s.payloadLength = (r << 8) + n, this.#n = i.READ_DATA;
                } else if (this.#n === i.READ_DATA) {
                    if (this.#r < this.#s.payloadLength) return t();
                    if (this.#r >= this.#s.payloadLength) {
                        const t = this.consume(this.#s.payloadLength);
                        if (this.#i.push(t), !this.#s.fragmented || this.#s.fin && this.#s.opcode === o.CONTINUATION) {
                            const t = Buffer.concat(this.#i);
                            h(this.ws, this.#s.originalOpcode, t), this.#s = {}, this.#i.length = 0;
                        }
                        this.#n = i.INFO;
                    }
                }
                if (!(this.#r > 0)) {
                    t();
                    break;
                }
            }
        }
        consume(t) {
            if (t > this.#r) return null;
            if (0 === t) return u;
            if (this.#e[0].length === t) return this.#r -= this.#e[0].length, this.#e.shift();
            const e = Buffer.allocUnsafe(t);
            let r = 0;
            for(; r !== t;){
                const n = this.#e[0], { length: s } = n;
                if (s + r === t) {
                    e.set(this.#e.shift(), r);
                    break;
                }
                if (s + r > t) {
                    e.set(n.subarray(0, t - r), r), this.#e[0] = n.subarray(t - r);
                    break;
                }
                e.set(this.#e.shift(), r), r += n.length;
            }
            return this.#r -= t, e;
        }
        parseCloseBody(t, e) {
            let r;
            if (e.length >= 2 && (r = e.readUInt16BE(0)), t) return f(r) ? {
                code: r
            } : null;
            let n = e.subarray(2);
            if (239 === n[0] && 187 === n[1] && 191 === n[2] && (n = n.subarray(3)), void 0 !== r && !f(r)) return null;
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
            return this.#s.closeInfo;
        }
    }
};
