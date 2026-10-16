import { Qe, st } from "./Iwo.js";
import { aa, bn, jn } from "./SZu.js";
import { FOe, qn } from "./async.js";
import { uv, zqr } from "./composerData.js";
import { iI, w1 } from "./composerLogService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Zi, ki } from "./storage_2.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { XSi } from "./yBp.js";
var HBp, AWt, dqe, Xst;
export { AWt, HBp, Xst, dqe };
var __wakaru_YCn_initialized = false;
export function YCn() {
if (__wakaru_YCn_initialized) return;
__wakaru_YCn_initialized = true;
"use strict";
E(), It(), qn(), Qe(), Rn(), uv(), Zi(), Xo(), __(), iI(), HBp = !1, AWt = jn("composerCheckpointStorageService"), dqe = "checkpointId", Xst = class extends st {
    constructor(t, e){
        super(), this._storageService = t, this._composerLogService = e, this._updateSequencer = new FOe, this._queuedUpdates = new Map;
    }
    async storeCheckpoint(t, e) {
        if (!t) throw new Error("[composer] composerId is undefined");
        const n = Ai();
        return XSi(this._composerLogService, "[composer] storing checkpoint", `${dqe}:${t.slice(0, 4)}:${n.slice(0, 4)}`), this._storageService.cursorDiskKVSet(`${dqe}:${t}:${n}`, JSON.stringify(e)), n;
    }
    async updateCheckpoint(t, e, n) {
        if (!e || !t) throw new Error("[composer] checkpointId or composerId is undefined" + JSON.stringify({
            checkpointId: e,
            composerId: t
        }));
        XSi(this._composerLogService, "[composer] updating checkpoint", `${dqe}:${t.slice(0, 4)}:${e.slice(0, 4)}`);
        const i = `${dqe}:${t}:${e}`;
        let r = this._queuedUpdates.get(i);
        if (!r) {
            const s = [], o = this._updateSequencer.queue(i, async ()=>{
                let a;
                try {
                    a = await this.retrieveCheckpoint(t, e);
                } finally{
                    this._queuedUpdates.delete(i);
                }
                if (a) {
                    for (const l of s)l(a);
                    await this._storageService.cursorDiskKVSet(i, JSON.stringify(a)).catch((l)=>{
                        this._composerLogService.error("[composer] Failed to persist checkpoint", e, l);
                    });
                } else this._composerLogService.error("[composer] No checkpoint found for id", e);
            });
            r = {
                updaters: s,
                done: o
            }, this._queuedUpdates.set(i, r);
        }
        r.updaters.push(n), await r.done;
    }
    async retrieveCheckpoint(t, e) {
        if (!e || !t) throw new Error("[composer] checkpointId or composerId is undefined" + JSON.stringify({
            checkpointId: e,
            composerId: t
        }));
        XSi(this._composerLogService, "[composer] retrieving checkpoint", `${dqe}:${t.slice(0, 4)}:${e.slice(0, 4)}`);
        const n = await this._storageService.cursorDiskKVGet(`${dqe}:${t}:${e}`);
        if (!n) return;
        let i = zqr(JSON.parse(n));
        return i && (i = zqr(i)), XSi(this._composerLogService, "[composer] retrieved checkpoint", {
            checkpoint: i
        }), i;
    }
    async copyComposerCheckpoints(t) {
        const { srcComposerId: e, destComposerId: n } = t;
        if (!e || !n) throw new Error("[composer] srcComposerId or destComposerId is undefined");
        if (e === n) return;
        const i = `${dqe}:${e}:`, r = await this._storageService.cursorDiskKVGetPrefix(i);
        await Promise.all(r.map(([s, o])=>this._storageService.cursorDiskKVSet(`${dqe}:${n}:${s.slice(i.length)}`, o)));
    }
    async clearComposerCheckpoints(t) {
        if (!t) throw new Error("[composer] composerId is undefined");
        return XSi(this._composerLogService, "[composer] clearing all checkpoints for composer", t), this._storageService.cursorDiskKVClearPrefix(`${dqe}:${t}:`).catch((e)=>{
            this._composerLogService.error(`[composer] Error clearing checkpoints for composer ${t}:`, e);
        });
    }
}, Re([
    aa("ComposerCheckpointStorageService.storeCheckpoint")
], Xst.prototype, "storeCheckpoint", null), Re([
    aa("ComposerCheckpointStorageService.updateCheckpoint")
], Xst.prototype, "updateCheckpoint", null), Re([
    aa("ComposerCheckpointStorageService.retrieveCheckpoint")
], Xst.prototype, "retrieveCheckpoint", null), Re([
    aa("ComposerCheckpointStorageService.copyComposerCheckpoints")
], Xst.prototype, "copyComposerCheckpoints", null), Re([
    aa("ComposerCheckpointStorageService.clearComposerCheckpoints")
], Xst.prototype, "clearComposerCheckpoints", null), Xst = Re([
    F(0, ki),
    F(1, w1)
], Xst), bn(AWt, Xst, 1);

}
