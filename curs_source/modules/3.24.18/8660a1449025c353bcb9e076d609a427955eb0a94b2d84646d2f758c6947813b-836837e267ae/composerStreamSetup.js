import { Bpk } from "./Aeg.js";
import { G6e, c_ } from "./async.cursor.js";
import { qn } from "./async.js";
import { Ng } from "./index_3.ts";
import { cX } from "./ipa.js";
import { Gte } from "./request_context_exec_pb.js";
import { E } from "./tslib.es6.js";
var usl, krs, dsl, irg;
export { dsl, irg, krs, usl };
var __wakaru_wrs_initialized = false;
export function wrs() {
if (__wakaru_wrs_initialized) return;
__wakaru_wrs_initialized = true;
"use strict";
E(), Ng(), qn(), c_(), Gte(), usl = "composer_parallel_stream_setup", krs = {
    deadlineMs: 1500,
    maxStaleAgeMs: 10 * 6e4
}, dsl = cX(Symbol("requestContextGatherLease"), void 0), irg = class {
    constructor(t = 16){
        this._maxEntries = t, this._entries = new Map, this._generations = new G6e;
    }
    beginGather(t) {
        return this._generations.capture(t);
    }
    record(t, e, n, i, r) {
        if (!e.isCurrent()) return;
        const s = this._entries.get(t);
        if (!(s !== void 0 && s.startedAt > i)) {
            this._entries.delete(t), this._entries.set(t, {
                requestContext: Bpk(n),
                startedAt: i,
                settingsKey: r
            });
            for (const o of this._entries.keys()){
                if (this._entries.size <= this._maxEntries) break;
                this._entries.delete(o);
            }
        }
    }
    lookup(t, e, n, i = Date.now()) {
        const r = this._entries.get(t);
        if (r !== void 0) {
            if (i - r.startedAt > n) {
                this._entries.delete(t);
                return;
            }
            return r.settingsKey === e ? r : void 0;
        }
    }
    delete(t) {
        this._entries.delete(t), this._generations.delete(t);
    }
    invalidateAll() {
        this._entries.clear(), this._generations.clear();
    }
};

}
