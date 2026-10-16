import { jxe, kde } from "./controlled.ts";
import { Ng } from "./index_3.ts";
import { SS } from "./ipa.js";
import { E } from "./tslib.es6.js";
var lym;
export { lym };
var __wakaru_cym_initialized = false;
export function cym() {
if (__wakaru_cym_initialized) return;
__wakaru_cym_initialized = true;
"use strict";
E(), Ng(), lym = class {
    constructor(t, e, n){
        this.checkpointStream = t, this.checkpointHandler = e, this.ctx = n;
    }
    async run() {
        var t = [];
        try {
            const r = kde(t, SS(this.ctx.withName("CheckpointController.run"))).ctx, s = [];
            for await (const o of this.checkpointStream)s.push(this.checkpointHandler.handleCheckpoint(r, o.checkpoint, o.metadata));
            await Promise.all(s);
        } catch (i) {
            var e = i, n = !0;
        } finally{
            jxe(t, e, n);
        }
    }
};

}
