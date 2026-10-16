import { kzt, t6h, vMo } from "./call-record.ts";
import { x } from "./tslib.es6.js";
function Fh_(e) {
    return Math.floor(e / kzt);
}
var t8h, n8h, i8h;
export { Fh_, i8h, n8h, t8h };
var __wakaru_Tm__initialized = false;
export function Tm_() {
if (__wakaru_Tm__initialized) return;
__wakaru_Tm__initialized = true;
"use strict";
x(), t6h(), t8h = 300, n8h = 1e3, i8h = class {
    constructor(e, t){
        this.recordValue = e, this.args = t;
    }
    unwrittenChunks = new Set;
    connectionFiled = !1;
    finished = !1;
    cancelWrite;
    cancelHeartbeat;
    get record() {
        return this.recordValue;
    }
    update(e) {
        this.recordValue = {
            ...this.recordValue,
            ...e
        };
    }
    setTurns(e, t) {
        this.finished || (this.unwrittenChunks.add(Fh_(t)), this.update({
            turns: e
        }), this.writeSoon());
    }
    writeSoon() {
        !this.finished && this.cancelWrite === void 0 && (this.cancelWrite = this.args.clock.setTimer(()=>{
            this.cancelWrite = void 0, this.stamp();
        }, t8h));
    }
    stamp() {
        this.finished || (this.fillAnchor(), this.update({
            lastHeardAtMs: this.args.clock.now()
        }), this.store(), this.cancelHeartbeat?.(), this.cancelHeartbeat = this.args.clock.setTimer(()=>{
            this.cancelHeartbeat = void 0, this.stamp();
        }, vMo));
    }
    fillAnchor() {
        this.recordValue = this.args.anchor(this.recordValue);
    }
    finish() {
        this.finished = !0, this.cancelWrite?.(), this.cancelWrite = void 0, this.cancelHeartbeat?.(), this.cancelHeartbeat = void 0;
        const { agentId: e, callId: t, connectedAtMs: n } = this.recordValue, i = this.recordValue.endedAtMs ?? this.args.clock.now();
        if (n === void 0 || i - n < n8h) {
            this.args.records.remove({
                agentId: e,
                callId: t
            });
            return;
        }
        this.update({
            endedAtMs: i
        }), this.store();
    }
    store() {
        const e = this.recordValue.connectedAtMs !== void 0 && !this.connectionFiled;
        this.args.records.write(this.recordValue, {
            chunks: this.unwrittenChunks,
            evictOlder: e
        }), this.unwrittenChunks.clear(), this.connectionFiled ||= e;
    }
};

}
