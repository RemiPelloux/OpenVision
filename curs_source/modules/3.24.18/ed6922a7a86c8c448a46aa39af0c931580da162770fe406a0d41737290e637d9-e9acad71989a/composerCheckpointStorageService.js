import { qMn } from "./A3u.js";
import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { TAe, bn } from "./async.js";
import { Wf, k8i } from "./composerData.js";
import { lb, n0 } from "./composerLogService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn, zs } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
var K3u, hSt, jMe, $4e;
export { $4e, K3u, hSt, jMe };
var __wakaru_q$t_initialized = false;
export function q$t() {
if (__wakaru_q$t_initialized) return;
__wakaru_q$t_initialized = true;
"use strict";
x(), Ze(), bn(), Se(), Pn(), Wf(), Vn(), Js(), yv(), n0(), K3u = !1, hSt = vn("composerCheckpointStorageService"), jMe = "checkpointId", $4e = class extends we {
    constructor(e, t){
        super(), this._storageService = e, this._composerLogService = t, this._updateSequencer = new TAe, this._queuedUpdates = new Map;
    }
    async storeCheckpoint(e, t) {
        if (!e) throw new Error("[composer] composerId is undefined");
        const n = zn();
        return qMn(this._composerLogService, "[composer] storing checkpoint", `${jMe}:${e.slice(0, 4)}:${n.slice(0, 4)}`), this._storageService.cursorDiskKVSet(`${jMe}:${e}:${n}`, JSON.stringify(t)), n;
    }
    async updateCheckpoint(e, t, n) {
        if (!t || !e) throw new Error("[composer] checkpointId or composerId is undefined" + JSON.stringify({
            checkpointId: t,
            composerId: e
        }));
        qMn(this._composerLogService, "[composer] updating checkpoint", `${jMe}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
        const i = `${jMe}:${e}:${t}`;
        let r = this._queuedUpdates.get(i);
        if (!r) {
            const s = [], o = this._updateSequencer.queue(i, async ()=>{
                let a;
                try {
                    a = await this.retrieveCheckpoint(e, t);
                } finally{
                    this._queuedUpdates.delete(i);
                }
                if (a) {
                    for (const c of s)c(a);
                    await this._storageService.cursorDiskKVSet(i, JSON.stringify(a)).catch((c)=>{
                        this._composerLogService.error("[composer] Failed to persist checkpoint", t, c);
                    });
                } else this._composerLogService.error("[composer] No checkpoint found for id", t);
            });
            r = {
                updaters: s,
                done: o
            }, this._queuedUpdates.set(i, r);
        }
        r.updaters.push(n), await r.done;
    }
    async retrieveCheckpoint(e, t) {
        if (!t || !e) throw new Error("[composer] checkpointId or composerId is undefined" + JSON.stringify({
            checkpointId: t,
            composerId: e
        }));
        qMn(this._composerLogService, "[composer] retrieving checkpoint", `${jMe}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
        const n = await this._storageService.cursorDiskKVGet(`${jMe}:${e}:${t}`);
        if (!n) return;
        let i = k8i(JSON.parse(n));
        return i && (i = k8i(i)), qMn(this._composerLogService, "[composer] retrieved checkpoint", {
            checkpoint: i
        }), i;
    }
    async copyComposerCheckpoints(e) {
        const { srcComposerId: t, destComposerId: n } = e;
        if (!t || !n) throw new Error("[composer] srcComposerId or destComposerId is undefined");
        if (t === n) return;
        const i = `${jMe}:${t}:`, r = await this._storageService.cursorDiskKVGetPrefix(i);
        await Promise.all(r.map(([s, o])=>this._storageService.cursorDiskKVSet(`${jMe}:${n}:${s.slice(i.length)}`, o)));
    }
    async clearComposerCheckpoints(e) {
        if (!e) throw new Error("[composer] composerId is undefined");
        return qMn(this._composerLogService, "[composer] clearing all checkpoints for composer", e), this._storageService.cursorDiskKVClearPrefix(`${jMe}:${e}:`).catch((t)=>{
            this._composerLogService.error(`[composer] Error clearing checkpoints for composer ${e}:`, t);
        });
    }
}, ie([
    zs("ComposerCheckpointStorageService.storeCheckpoint")
], $4e.prototype, "storeCheckpoint", null), ie([
    zs("ComposerCheckpointStorageService.updateCheckpoint")
], $4e.prototype, "updateCheckpoint", null), ie([
    zs("ComposerCheckpointStorageService.retrieveCheckpoint")
], $4e.prototype, "retrieveCheckpoint", null), ie([
    zs("ComposerCheckpointStorageService.copyComposerCheckpoints")
], $4e.prototype, "copyComposerCheckpoints", null), ie([
    zs("ComposerCheckpointStorageService.clearComposerCheckpoints")
], $4e.prototype, "clearComposerCheckpoints", null), $4e = ie([
    C(0, yn),
    C(1, lb)
], $4e), mn(hSt, $4e, 1);

}
