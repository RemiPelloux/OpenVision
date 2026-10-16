import { _xn } from "./Aeg.js";
import { Qe, st } from "./Iwo.js";
import { aa, bn, jn } from "./SZu.js";
import { iI, w1 } from "./composerLogService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Zi, ki } from "./storage_2.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
var Dtg, Tis, wze, oat;
export { Dtg, Tis, oat, wze };
var __wakaru_xil_initialized = false;
export function xil() {
if (__wakaru_xil_initialized) return;
__wakaru_xil_initialized = true;
"use strict";
E(), Qe(), Xo(), Rn(), It(), Zi(), __(), iI(), Dtg = !1, Tis = jn("composerCodeBlockPartialInlineDiffFatesStorageService"), wze = "codeBlockPartialInlineDiffFates", oat = class extends st {
    constructor(t, e){
        super(), this._storageService = t, this._composerLogService = e;
    }
    async storePartialInlineDiffFates(t, e) {
        if (!t) throw new Error("[composer] composerId is undefined");
        const n = Ai(), i = {
            fates: e
        };
        return _xn(this._composerLogService, "[composer] storing partial inline diff fates", `${wze}:${t.slice(0, 4)}:${n.slice(0, 4)}`), await this._storageService.cursorDiskKVSet(`${wze}:${t}:${n}`, JSON.stringify(i)), n;
    }
    async updatePartialInlineDiffFates(t, e, n) {
        if (!e || !t) throw new Error("[composer] fatesId or composerId is undefined" + JSON.stringify({
            fatesId: e,
            composerId: t
        }));
        _xn(this._composerLogService, "[composer] updating partial inline diff fates", `${wze}:${t.slice(0, 4)}:${e.slice(0, 4)}`);
        const i = await this.retrievePartialInlineDiffFates(t, e);
        i ? (n(i), await this._storageService.cursorDiskKVSet(`${wze}:${t}:${e}`, JSON.stringify(i))) : this._composerLogService.error("[composer] No partial inline diff fates found for id", e);
    }
    async retrievePartialInlineDiffFates(t, e) {
        if (!e || !t) throw new Error("[composer] fatesId or composerId is undefined" + JSON.stringify({
            fatesId: e,
            composerId: t
        }));
        _xn(this._composerLogService, "[composer] retrieving partial inline diff fates", `${wze}:${t.slice(0, 4)}:${e.slice(0, 4)}`);
        const n = await this._storageService.cursorDiskKVGet(`${wze}:${t}:${e}`);
        if (!n) return;
        const i = JSON.parse(n);
        return _xn(this._composerLogService, "[composer] retrieved partial inline diff fates", {
            data: i
        }), i;
    }
    async deletePartialInlineDiffFates(t, e) {
        if (!e || !t) throw new Error("[composer] fatesId or composerId is undefined" + JSON.stringify({
            fatesId: e,
            composerId: t
        }));
        _xn(this._composerLogService, "[composer] deleting partial inline diff fates", `${wze}:${t.slice(0, 4)}:${e.slice(0, 4)}`), await this._storageService.cursorDiskKVSet(`${wze}:${t}:${e}`, void 0);
    }
    async clearComposerPartialInlineDiffFates(t) {
        if (!t) throw new Error("[composer] composerId is undefined");
        return _xn(this._composerLogService, "[composer] clearing all partial inline diff fates for composer", t), this._storageService.cursorDiskKVClearPrefix(`${wze}:${t}:`).catch((e)=>{
            this._composerLogService.error(`[composer] Error clearing partial inline diff fates for composer ${t}:`, e);
        });
    }
}, Re([
    aa("ComposerCodeBlockPartialInlineDiffFatesStorageService.storePartialInlineDiffFates")
], oat.prototype, "storePartialInlineDiffFates", null), Re([
    aa("ComposerCodeBlockPartialInlineDiffFatesStorageService.updatePartialInlineDiffFates")
], oat.prototype, "updatePartialInlineDiffFates", null), Re([
    aa("ComposerCodeBlockPartialInlineDiffFatesStorageService.retrievePartialInlineDiffFates")
], oat.prototype, "retrievePartialInlineDiffFates", null), Re([
    aa("ComposerCodeBlockPartialInlineDiffFatesStorageService.deletePartialInlineDiffFates")
], oat.prototype, "deletePartialInlineDiffFates", null), Re([
    aa("ComposerCodeBlockPartialInlineDiffFatesStorageService.clearComposerPartialInlineDiffFates")
], oat.prototype, "clearComposerPartialInlineDiffFates", null), oat = Re([
    F(0, ki),
    F(1, w1)
], oat), bn(Tis, oat, 1);

}
