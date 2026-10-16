import { S_ } from "./De_3.js";
import { QQ, ege } from "./controlled.ts";
import { Gp } from "./index_3.ts";
import { x } from "./tslib.es6.js";
var IDd;
export { IDd };
var __wakaru_ADd_initialized = false;
export function ADd() {
if (__wakaru_ADd_initialized) return;
__wakaru_ADd_initialized = true;
"use strict";
x(), Gp(), IDd = class {
    constructor(e, t, n){
        this.checkpointStream = e, this.checkpointHandler = t, this.ctx = n;
    }
    async run() {
        var e = [];
        try {
            const r = QQ(e, S_(this.ctx.withName("CheckpointController.run"))).ctx, s = [];
            for await (const o of this.checkpointStream)s.push(this.checkpointHandler.handleCheckpoint(r, o.checkpoint, o.metadata));
            await Promise.all(s);
        } catch (i) {
            var t = i, n = !0;
        } finally{
            ege(e, t, n);
        }
    }
};

}
