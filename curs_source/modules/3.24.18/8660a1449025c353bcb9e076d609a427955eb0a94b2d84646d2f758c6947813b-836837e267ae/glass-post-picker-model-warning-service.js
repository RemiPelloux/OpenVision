import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { kgs } from "./Ycg.js";
import { Rn } from "./extensions.js";
import { Nu, xc } from "./glass-storage-service.js";
import { It } from "./instantiation.js";
import { Q2i } from "./modelDialogueStorage.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var ZFi, T2s;
export { T2s, ZFi };
var __wakaru_zTv_initialized = false;
export function zTv() {
if (__wakaru_zTv_initialized) return;
__wakaru_zTv_initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), It(), Q2i(), xc(), ZFi = Il("glassPostPickerModelWarningService"), T2s = class extends st {
    constructor(t){
        super(), this.storageService = t, this.notices = new Map, this.nextAppearance = 0, this.onDidChangeEmitter = this._register(new tt), this.onDidChange = this.onDidChangeEmitter.event;
    }
    get(t) {
        return this.notices.get(t);
    }
    show(t, e) {
        this.nextAppearance += 1, this.notices.set(t, {
            appearance: this.nextAppearance,
            warning: e
        }), this.onDidChangeEmitter.fire(t);
    }
    dismiss(t) {
        this.notices.delete(t) && this.onDidChangeEmitter.fire(t);
    }
    dismissForever(t) {
        const e = this.notices.get(t);
        e !== void 0 && (kgs(this.storageService, e.warning.key), this.dismiss(t));
    }
}, T2s = Re([
    F(0, Nu)
], T2s), bn(ZFi, T2s, 1, 1);

}
