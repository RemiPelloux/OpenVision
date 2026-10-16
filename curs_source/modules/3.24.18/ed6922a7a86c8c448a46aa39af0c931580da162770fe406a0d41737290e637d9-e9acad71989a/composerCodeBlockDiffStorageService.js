import { fJe } from "./A3u.js";
import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { lb, n0 } from "./composerLogService.js";
import { So, XNt } from "./constants_8.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn, zs } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
var JBu, vJe, Fse, Y0e;
export { Fse, JBu, Y0e, vJe };
var __wakaru_ySt_initialized = false;
export function ySt() {
if (__wakaru_ySt_initialized) return;
__wakaru_ySt_initialized = true;
"use strict";
x(), Ze(), Se(), So(), Pn(), Vn(), Js(), yv(), n0(), JBu = !1, vJe = vn("composerCodeBlockDiffStorageService"), Fse = "codeBlockDiff", Y0e = class extends we {
    constructor(e, t){
        super(), this._storageService = e, this._composerLogService = t;
    }
    async storeDiff(e, t) {
        if (!e) throw new Error("[composer] composerId is undefined");
        const n = zn();
        return fJe(this._composerLogService, "[composer] storing diff", `${Fse}:${e.slice(0, 4)}:${n.slice(0, 4)}`), await this._storageService.cursorDiskKVSet(`${Fse}:${e}:${n}`, JSON.stringify(t)), n;
    }
    async updateDiff(e, t, n) {
        if (!t || !e) throw new Error("[composer] diffId or composerId is undefined" + JSON.stringify({
            diffId: t,
            composerId: e
        }));
        fJe(this._composerLogService, "[composer] updating diff", `${Fse}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
        const i = await this.retrieveDiff(e, t);
        i ? (n(i), await this._storageService.cursorDiskKVSet(`${Fse}:${e}:${t}`, JSON.stringify(i))) : this._composerLogService.error("[composer] No diff found for id", t);
    }
    async retrieveDiff(e, t) {
        if (!t || !e) throw new Error("[composer] diffId or composerId is undefined" + JSON.stringify({
            diffId: t,
            composerId: e
        }));
        fJe(this._composerLogService, "[composer] retrieving diff", `${Fse}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
        const n = await this._storageService.cursorDiskKVGet(`${Fse}:${e}:${t}`);
        if (!n) return;
        const i = JSON.parse(n);
        return fJe(this._composerLogService, "[composer] retrieved diff", {
            diff: i
        }), i;
    }
    async retrieveDiffBatch(e, t) {
        if (!e) throw new Error("[composer] composerId is undefined");
        if (t.length === 0) return new Map;
        fJe(this._composerLogService, "[composer] retrieving batch of", t.length, "diffs for composer", e.slice(0, 4));
        const n = new Map;
        for(let i = 0; i < t.length; i += XNt){
            const s = t.slice(i, i + XNt).map((a)=>`${Fse}:${e}:${a}`), o = await this._storageService.cursorDiskKVGetBatch(s);
            for (const [a, c] of o){
                const l = a.split(":").pop();
                try {
                    const u = JSON.parse(c);
                    n.set(l, u), fJe(this._composerLogService, "[composer] retrieved diff from batch", `${Fse}:${e.slice(0, 4)}:${l.slice(0, 4)}`);
                } catch (u) {
                    this._composerLogService.error("[composer] Failed to parse diff", l, u);
                }
            }
        }
        return n;
    }
    async deleteDiff(e, t) {
        if (!t || !e) throw new Error("[composer] diffId or composerId is undefined" + JSON.stringify({
            diffId: t,
            composerId: e
        }));
        fJe(this._composerLogService, "[composer] deleting diff", `${Fse}:${e.slice(0, 4)}:${t.slice(0, 4)}`), await this._storageService.cursorDiskKVSet(`${Fse}:${e}:${t}`, void 0);
    }
    async copyComposerDiffs(e) {
        const { srcComposerId: t, destComposerId: n } = e;
        if (!t || !n) throw new Error("[composer] srcComposerId or destComposerId is undefined");
        if (t === n) return;
        const i = `${Fse}:${t}:`, r = await this._storageService.cursorDiskKVGetPrefix(i);
        await Promise.all(r.map(([s, o])=>this._storageService.cursorDiskKVSet(`${Fse}:${n}:${s.slice(i.length)}`, o)));
    }
    async clearComposerDiffs(e) {
        if (!e) throw new Error("[composer] composerId is undefined");
        return fJe(this._composerLogService, "[composer] clearing all diffs for composer", e), this._storageService.cursorDiskKVClearPrefix(`${Fse}:${e}:`).catch((t)=>{
            this._composerLogService.error(`[composer] Error clearing diffs for composer ${e}:`, t);
        });
    }
}, ie([
    zs("ComposerCodeBlockDiffStorageService.storeDiff")
], Y0e.prototype, "storeDiff", null), ie([
    zs("ComposerCodeBlockDiffStorageService.updateDiff")
], Y0e.prototype, "updateDiff", null), ie([
    zs("ComposerCodeBlockDiffStorageService.retrieveDiff")
], Y0e.prototype, "retrieveDiff", null), ie([
    zs("ComposerCodeBlockDiffStorageService.retrieveDiffBatch")
], Y0e.prototype, "retrieveDiffBatch", null), ie([
    zs("ComposerCodeBlockDiffStorageService.deleteDiff")
], Y0e.prototype, "deleteDiff", null), ie([
    zs("ComposerCodeBlockDiffStorageService.copyComposerDiffs")
], Y0e.prototype, "copyComposerDiffs", null), ie([
    zs("ComposerCodeBlockDiffStorageService.clearComposerDiffs")
], Y0e.prototype, "clearComposerDiffs", null), Y0e = ie([
    C(0, yn),
    C(1, lb)
], Y0e), mn(vJe, Y0e, 1);

}
