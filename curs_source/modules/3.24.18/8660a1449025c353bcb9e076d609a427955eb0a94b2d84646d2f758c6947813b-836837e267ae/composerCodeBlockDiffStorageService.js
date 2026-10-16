import { Qe, st } from "./Iwo.js";
import { aa, bn, jn } from "./SZu.js";
import { iI, w1 } from "./composerLogService.js";
import { lpn, pa } from "./constants_8.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Zi, ki } from "./storage_2.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { j0t } from "./yBp.js";
var z8p, $0t, Tbe, $6e;
export { $0t, $6e, Tbe, z8p };
var __wakaru_BWt_initialized = false;
export function BWt() {
if (__wakaru_BWt_initialized) return;
__wakaru_BWt_initialized = true;
"use strict";
E(), It(), Qe(), pa(), Rn(), Zi(), Xo(), __(), iI(), z8p = !1, $0t = jn("composerCodeBlockDiffStorageService"), Tbe = "codeBlockDiff", $6e = class extends st {
    constructor(t, e){
        super(), this._storageService = t, this._composerLogService = e;
    }
    async storeDiff(t, e) {
        if (!t) throw new Error("[composer] composerId is undefined");
        const n = Ai();
        return j0t(this._composerLogService, "[composer] storing diff", `${Tbe}:${t.slice(0, 4)}:${n.slice(0, 4)}`), await this._storageService.cursorDiskKVSet(`${Tbe}:${t}:${n}`, JSON.stringify(e)), n;
    }
    async updateDiff(t, e, n) {
        if (!e || !t) throw new Error("[composer] diffId or composerId is undefined" + JSON.stringify({
            diffId: e,
            composerId: t
        }));
        j0t(this._composerLogService, "[composer] updating diff", `${Tbe}:${t.slice(0, 4)}:${e.slice(0, 4)}`);
        const i = await this.retrieveDiff(t, e);
        i ? (n(i), await this._storageService.cursorDiskKVSet(`${Tbe}:${t}:${e}`, JSON.stringify(i))) : this._composerLogService.error("[composer] No diff found for id", e);
    }
    async retrieveDiff(t, e) {
        if (!e || !t) throw new Error("[composer] diffId or composerId is undefined" + JSON.stringify({
            diffId: e,
            composerId: t
        }));
        j0t(this._composerLogService, "[composer] retrieving diff", `${Tbe}:${t.slice(0, 4)}:${e.slice(0, 4)}`);
        const n = await this._storageService.cursorDiskKVGet(`${Tbe}:${t}:${e}`);
        if (!n) return;
        const i = JSON.parse(n);
        return j0t(this._composerLogService, "[composer] retrieved diff", {
            diff: i
        }), i;
    }
    async retrieveDiffBatch(t, e) {
        if (!t) throw new Error("[composer] composerId is undefined");
        if (e.length === 0) return new Map;
        j0t(this._composerLogService, "[composer] retrieving batch of", e.length, "diffs for composer", t.slice(0, 4));
        const n = new Map;
        for(let i = 0; i < e.length; i += lpn){
            const s = e.slice(i, i + lpn).map((a)=>`${Tbe}:${t}:${a}`), o = await this._storageService.cursorDiskKVGetBatch(s);
            for (const [a, l] of o){
                const c = a.split(":").pop();
                try {
                    const u = JSON.parse(l);
                    n.set(c, u), j0t(this._composerLogService, "[composer] retrieved diff from batch", `${Tbe}:${t.slice(0, 4)}:${c.slice(0, 4)}`);
                } catch (u) {
                    this._composerLogService.error("[composer] Failed to parse diff", c, u);
                }
            }
        }
        return n;
    }
    async deleteDiff(t, e) {
        if (!e || !t) throw new Error("[composer] diffId or composerId is undefined" + JSON.stringify({
            diffId: e,
            composerId: t
        }));
        j0t(this._composerLogService, "[composer] deleting diff", `${Tbe}:${t.slice(0, 4)}:${e.slice(0, 4)}`), await this._storageService.cursorDiskKVSet(`${Tbe}:${t}:${e}`, void 0);
    }
    async copyComposerDiffs(t) {
        const { srcComposerId: e, destComposerId: n } = t;
        if (!e || !n) throw new Error("[composer] srcComposerId or destComposerId is undefined");
        if (e === n) return;
        const i = `${Tbe}:${e}:`, r = await this._storageService.cursorDiskKVGetPrefix(i);
        await Promise.all(r.map(([s, o])=>this._storageService.cursorDiskKVSet(`${Tbe}:${n}:${s.slice(i.length)}`, o)));
    }
    async clearComposerDiffs(t) {
        if (!t) throw new Error("[composer] composerId is undefined");
        return j0t(this._composerLogService, "[composer] clearing all diffs for composer", t), this._storageService.cursorDiskKVClearPrefix(`${Tbe}:${t}:`).catch((e)=>{
            this._composerLogService.error(`[composer] Error clearing diffs for composer ${t}:`, e);
        });
    }
}, Re([
    aa("ComposerCodeBlockDiffStorageService.storeDiff")
], $6e.prototype, "storeDiff", null), Re([
    aa("ComposerCodeBlockDiffStorageService.updateDiff")
], $6e.prototype, "updateDiff", null), Re([
    aa("ComposerCodeBlockDiffStorageService.retrieveDiff")
], $6e.prototype, "retrieveDiff", null), Re([
    aa("ComposerCodeBlockDiffStorageService.retrieveDiffBatch")
], $6e.prototype, "retrieveDiffBatch", null), Re([
    aa("ComposerCodeBlockDiffStorageService.deleteDiff")
], $6e.prototype, "deleteDiff", null), Re([
    aa("ComposerCodeBlockDiffStorageService.copyComposerDiffs")
], $6e.prototype, "copyComposerDiffs", null), Re([
    aa("ComposerCodeBlockDiffStorageService.clearComposerDiffs")
], $6e.prototype, "clearComposerDiffs", null), $6e = Re([
    F(0, ki),
    F(1, w1)
], $6e), bn($0t, $6e, 1);

}
