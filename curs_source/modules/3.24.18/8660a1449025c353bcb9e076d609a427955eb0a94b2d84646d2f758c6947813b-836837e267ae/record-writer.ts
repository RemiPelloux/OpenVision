import { X4k } from "./Ycg.js";
import { MCl, gtf } from "./call-record.ts";
import { E } from "./tslib.es6.js";
var vrf, _rf, brf;
export { _rf, brf, vrf };
var __wakaru_jBk_initialized = false;
export function jBk() {
if (__wakaru_jBk_initialized) return;
__wakaru_jBk_initialized = true;
"use strict";
E(), gtf(), vrf = 300, _rf = 1e3, brf = class {
    constructor(t, e){
        this.recordValue = t, this.args = e;
    }
    unwrittenChunks = new Set;
    connectionFiled = !1;
    finished = !1;
    cancelWrite;
    cancelHeartbeat;
    get record() {
        return this.recordValue;
    }
    update(t) {
        this.recordValue = {
            ...this.recordValue,
            ...t
        };
    }
    setTurns(t, e) {
        this.finished || (this.unwrittenChunks.add(X4k(e)), this.update({
            turns: t
        }), this.writeSoon());
    }
    writeSoon() {
        !this.finished && this.cancelWrite === void 0 && (this.cancelWrite = this.args.clock.setTimer(()=>{
            this.cancelWrite = void 0, this.stamp();
        }, vrf));
    }
    stamp() {
        this.finished || (this.fillAnchor(), this.update({
            lastHeardAtMs: this.args.clock.now()
        }), this.store(), this.cancelHeartbeat?.(), this.cancelHeartbeat = this.args.clock.setTimer(()=>{
            this.cancelHeartbeat = void 0, this.stamp();
        }, MCl));
    }
    fillAnchor() {
        this.recordValue = this.args.anchor(this.recordValue);
    }
    finish() {
        this.finished = !0, this.cancelWrite?.(), this.cancelWrite = void 0, this.cancelHeartbeat?.(), this.cancelHeartbeat = void 0;
        const { agentId: t, callId: e, connectedAtMs: n } = this.recordValue, i = this.recordValue.endedAtMs ?? this.args.clock.now();
        if (n === void 0 || i - n < _rf) {
            this.args.records.remove({
                agentId: t,
                callId: e
            });
            return;
        }
        this.update({
            endedAtMs: i
        }), this.store();
    }
    store() {
        const t = this.recordValue.connectedAtMs !== void 0 && !this.connectionFiled;
        this.args.records.write(this.recordValue, {
            chunks: this.unwrittenChunks,
            evictOlder: t
        }), this.unwrittenChunks.clear(), this.connectionFiled ||= t;
    }
};

}
