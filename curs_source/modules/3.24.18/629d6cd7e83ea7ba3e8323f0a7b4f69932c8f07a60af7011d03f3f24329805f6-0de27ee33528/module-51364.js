"use strict";
const { Transform: r } = require(57075), { isASCIINumber: s, isValidLastEventId: o } = require("./module-42136.js"), n = [
    239,
    187,
    191
];
module.exports = {
    EventSourceStream: class extends r {
        state = null;
        checkBOM = !0;
        crlfCheck = !1;
        eventEndCheck = !1;
        buffer = null;
        pos = 0;
        event = {
            data: void 0,
            event: void 0,
            id: void 0,
            retry: void 0
        };
        constructor(A = {}){
            A.readableObjectMode = !0, super(A), this.state = A.eventSourceSettings || {}, A.push && (this.push = A.push);
        }
        _transform(A, e, t) {
            if (0 !== A.length) {
                if (this.buffer ? this.buffer = Buffer.concat([
                    this.buffer,
                    A
                ]) : this.buffer = A, this.checkBOM) switch(this.buffer.length){
                    case 1:
                        return this.buffer[0] === n[0] || (this.checkBOM = !1), void t();
                    case 2:
                        if (this.buffer[0] === n[0] && this.buffer[1] === n[1]) return void t();
                        this.checkBOM = !1;
                        break;
                    case 3:
                        if (this.buffer[0] === n[0] && this.buffer[1] === n[1] && this.buffer[2] === n[2]) return this.buffer = Buffer.alloc(0), this.checkBOM = !1, void t();
                        this.checkBOM = !1;
                        break;
                    default:
                        this.buffer[0] === n[0] && this.buffer[1] === n[1] && this.buffer[2] === n[2] && (this.buffer = this.buffer.subarray(3)), this.checkBOM = !1;
                }
                for(; this.pos < this.buffer.length;)if (this.eventEndCheck) {
                    if (this.crlfCheck) {
                        if (10 === this.buffer[this.pos]) {
                            this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, this.crlfCheck = !1;
                            continue;
                        }
                        this.crlfCheck = !1;
                    }
                    if (10 === this.buffer[this.pos] || 13 === this.buffer[this.pos]) {
                        13 === this.buffer[this.pos] && (this.crlfCheck = !0), this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, (void 0 !== this.event.data || this.event.event || this.event.id || this.event.retry) && this.processEvent(this.event), this.clearEvent();
                        continue;
                    }
                    this.eventEndCheck = !1;
                } else 10 !== this.buffer[this.pos] && 13 !== this.buffer[this.pos] ? this.pos++ : (13 === this.buffer[this.pos] && (this.crlfCheck = !0), this.parseLine(this.buffer.subarray(0, this.pos), this.event), this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, this.eventEndCheck = !0);
                t();
            } else t();
        }
        parseLine(A, e) {
            if (0 === A.length) return;
            const t = A.indexOf(58);
            if (0 === t) return;
            let r = "", n = "";
            if (-1 !== t) {
                r = A.subarray(0, t).toString("utf8");
                let e = t + 1;
                32 === A[e] && ++e, n = A.subarray(e).toString("utf8");
            } else r = A.toString("utf8"), n = "";
            switch(r){
                case "data":
                    void 0 === e[r] ? e[r] = n : e[r] += `\n${n}`;
                    break;
                case "retry":
                    s(n) && (e[r] = n);
                    break;
                case "id":
                    o(n) && (e[r] = n);
                    break;
                case "event":
                    n.length > 0 && (e[r] = n);
            }
        }
        processEvent(A) {
            A.retry && s(A.retry) && (this.state.reconnectionTime = parseInt(A.retry, 10)), A.id && o(A.id) && (this.state.lastEventId = A.id), void 0 !== A.data && this.push({
                type: A.event || "message",
                options: {
                    data: A.data,
                    lastEventId: this.state.lastEventId,
                    origin: this.state.origin
                }
            });
        }
        clearEvent() {
            this.event = {
                data: void 0,
                event: void 0,
                id: void 0,
                retry: void 0
            };
        }
    }
};
