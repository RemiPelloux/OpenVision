import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { CVt } from "./cgh.js";
import { lb, n0 } from "./composerLogService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn, zs } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
var ffh, aXi, KPe, t8e;
export { KPe, aXi, ffh, t8e };
var __wakaru_OSo_initialized = false;
export function OSo() {
if (__wakaru_OSo_initialized) return;
__wakaru_OSo_initialized = true;
"use strict";
x(), Se(), Js(), Pn(), Ze(), Vn(), yv(), n0(), ffh = !1, aXi = vn("composerCodeBlockPartialInlineDiffFatesStorageService"), KPe = "codeBlockPartialInlineDiffFates", t8e = class extends we {
    constructor(e, t){
        super(), this._storageService = e, this._composerLogService = t;
    }
    async storePartialInlineDiffFates(e, t) {
        if (!e) throw new Error("[composer] composerId is undefined");
        const n = zn(), i = {
            fates: t
        };
        return CVt(this._composerLogService, "[composer] storing partial inline diff fates", `${KPe}:${e.slice(0, 4)}:${n.slice(0, 4)}`), await this._storageService.cursorDiskKVSet(`${KPe}:${e}:${n}`, JSON.stringify(i)), n;
    }
    async updatePartialInlineDiffFates(e, t, n) {
        if (!t || !e) throw new Error("[composer] fatesId or composerId is undefined" + JSON.stringify({
            fatesId: t,
            composerId: e
        }));
        CVt(this._composerLogService, "[composer] updating partial inline diff fates", `${KPe}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
        const i = await this.retrievePartialInlineDiffFates(e, t);
        i ? (n(i), await this._storageService.cursorDiskKVSet(`${KPe}:${e}:${t}`, JSON.stringify(i))) : this._composerLogService.error("[composer] No partial inline diff fates found for id", t);
    }
    async retrievePartialInlineDiffFates(e, t) {
        if (!t || !e) throw new Error("[composer] fatesId or composerId is undefined" + JSON.stringify({
            fatesId: t,
            composerId: e
        }));
        CVt(this._composerLogService, "[composer] retrieving partial inline diff fates", `${KPe}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
        const n = await this._storageService.cursorDiskKVGet(`${KPe}:${e}:${t}`);
        if (!n) return;
        const i = JSON.parse(n);
        return CVt(this._composerLogService, "[composer] retrieved partial inline diff fates", {
            data: i
        }), i;
    }
    async deletePartialInlineDiffFates(e, t) {
        if (!t || !e) throw new Error("[composer] fatesId or composerId is undefined" + JSON.stringify({
            fatesId: t,
            composerId: e
        }));
        CVt(this._composerLogService, "[composer] deleting partial inline diff fates", `${KPe}:${e.slice(0, 4)}:${t.slice(0, 4)}`), await this._storageService.cursorDiskKVSet(`${KPe}:${e}:${t}`, void 0);
    }
    async clearComposerPartialInlineDiffFates(e) {
        if (!e) throw new Error("[composer] composerId is undefined");
        return CVt(this._composerLogService, "[composer] clearing all partial inline diff fates for composer", e), this._storageService.cursorDiskKVClearPrefix(`${KPe}:${e}:`).catch((t)=>{
            this._composerLogService.error(`[composer] Error clearing partial inline diff fates for composer ${e}:`, t);
        });
    }
}, ie([
    zs("ComposerCodeBlockPartialInlineDiffFatesStorageService.storePartialInlineDiffFates")
], t8e.prototype, "storePartialInlineDiffFates", null), ie([
    zs("ComposerCodeBlockPartialInlineDiffFatesStorageService.updatePartialInlineDiffFates")
], t8e.prototype, "updatePartialInlineDiffFates", null), ie([
    zs("ComposerCodeBlockPartialInlineDiffFatesStorageService.retrievePartialInlineDiffFates")
], t8e.prototype, "retrievePartialInlineDiffFates", null), ie([
    zs("ComposerCodeBlockPartialInlineDiffFatesStorageService.deletePartialInlineDiffFates")
], t8e.prototype, "deletePartialInlineDiffFates", null), ie([
    zs("ComposerCodeBlockPartialInlineDiffFatesStorageService.clearComposerPartialInlineDiffFates")
], t8e.prototype, "clearComposerPartialInlineDiffFates", null), t8e = ie([
    C(0, yn),
    C(1, lb)
], t8e), mn(aXi, t8e, 1);

}
