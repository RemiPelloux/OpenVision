import { I$ } from "./De_3.js";
import { XMe, ub } from "./async.cursor.js";
import { bn } from "./async.js";
import { yjv } from "./cgh.js";
import { Gp } from "./index_3.ts";
import { Bj } from "./request_context_exec_pb.js";
import { x } from "./tslib.es6.js";
var rwo, QXi, swo, G_h;
export { G_h, QXi, rwo, swo };
var __wakaru_JXi_initialized = false;
export function JXi() {
if (__wakaru_JXi_initialized) return;
__wakaru_JXi_initialized = true;
"use strict";
x(), Gp(), bn(), ub(), Bj(), rwo = "composer_parallel_stream_setup", QXi = {
    deadlineMs: 1500,
    maxStaleAgeMs: 10 * 6e4
}, swo = I$(Symbol("requestContextGatherLease"), void 0), G_h = class {
    constructor(e = 16){
        this._maxEntries = e, this._entries = new Map, this._generations = new XMe;
    }
    beginGather(e) {
        return this._generations.capture(e);
    }
    record(e, t, n, i, r) {
        if (!t.isCurrent()) return;
        const s = this._entries.get(e);
        if (!(s !== void 0 && s.startedAt > i)) {
            this._entries.delete(e), this._entries.set(e, {
                requestContext: yjv(n),
                startedAt: i,
                settingsKey: r
            });
            for (const o of this._entries.keys()){
                if (this._entries.size <= this._maxEntries) break;
                this._entries.delete(o);
            }
        }
    }
    lookup(e, t, n, i = Date.now()) {
        const r = this._entries.get(e);
        if (r !== void 0) {
            if (i - r.startedAt > n) {
                this._entries.delete(e);
                return;
            }
            return r.settingsKey === t ? r : void 0;
        }
    }
    delete(e) {
        this._entries.delete(e), this._generations.delete(e);
    }
    invalidateAll() {
        this._entries.clear(), this._generations.clear();
    }
};

}
