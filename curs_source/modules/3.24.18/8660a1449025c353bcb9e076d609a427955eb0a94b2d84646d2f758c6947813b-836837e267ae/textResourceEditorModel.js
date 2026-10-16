import { GS, Ty } from "./accessibility.js";
import { Kp, Ph } from "./language.js";
import { FEt, gVe } from "./languageDetectionWorkerService.js";
import { dd, xp } from "./model.js";
import { o2n, wMe } from "./textEditorModel.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var kAi;
export { kAi };
var __wakaru_hRg_initialized = false;
export function hRg() {
if (__wakaru_hRg_initialized) return;
__wakaru_hRg_initialized = true;
"use strict";
E(), o2n(), Kp(), xp(), FEt(), Ty(), kAi = class extends wMe {
    constructor(t, e, n, i, r){
        super(n, e, i, r, t);
    }
    dispose() {
        this.textEditorModelHandle && this.modelService.destroyModel(this.textEditorModelHandle), super.dispose();
    }
}, kAi = Re([
    F(1, Ph),
    F(2, dd),
    F(3, gVe),
    F(4, GS)
], kAi);

}
