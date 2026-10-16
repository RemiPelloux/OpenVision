import { Ei, xr } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { ZS } from "./draftIds.js";
import { Rn } from "./extensions.js";
import { Nu, xc } from "./glass-storage-service.js";
import { It } from "./instantiation.js";
import { TK0 } from "./lBv.js";
import { Vd, dv } from "./storage-keys.js";
import { Wg, io } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var i3s, r3s;
export { i3s, r3s };
var __wakaru_s3s_initialized = false;
export function s3s() {
if (__wakaru_s3s_initialized) return;
__wakaru_s3s_initialized = true;
"use strict";
E(), Ei(), Rn(), It(), wl(), ZS(), dv(), xc(), i3s = Il("glassCreateProjectDraftService"), r3s = class {
    constructor(t, e){
        this._storageService = t, this._agentRepositoryService = e;
    }
    read() {
        return TK0(this._storageService.get(Vd.CREATE_PROJECT_DRAFT, io.APPLICATION));
    }
    write(t) {
        this._storageService.store(Vd.CREATE_PROJECT_DRAFT, JSON.stringify(t), io.APPLICATION, Wg.MACHINE);
    }
    async discard() {
        const t = this.read();
        if (this._storageService.remove(Vd.CREATE_PROJECT_DRAFT, io.APPLICATION), t?.modelPickerDraftId !== void 0) try {
            await this._agentRepositoryService.hardDeleteAgents([
                t.modelPickerDraftId
            ]);
        } catch (e) {
            xr(e);
        }
    }
}, r3s = Re([
    F(0, Nu),
    F(1, ma)
], r3s), bn(i3s, r3s, 1, 1);

}
