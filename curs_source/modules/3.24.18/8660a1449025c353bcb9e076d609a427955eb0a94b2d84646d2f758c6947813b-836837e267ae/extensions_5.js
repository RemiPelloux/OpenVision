import { At, Qe, st } from "./Iwo.js";
import { jn } from "./SZu.js";
import { Ft, es } from "./actions_2.js";
import { Hi, cn } from "./contextkey.js";
import { iF } from "./extensionManagementUtil.js";
import { Qc } from "./gYa.js";
import { It } from "./instantiation.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var N_l, SNk, x$, L_l, pRi, O_l, mRi, F_l, vDg, gRi, _Dg, kNk, wNk, CNk;
export { CNk, F_l, L_l, N_l, O_l, SNk, _Dg, gRi, kNk, mRi, pRi, vDg, wNk, x$ };
var __wakaru_A$_initialized = false;
export function A$() {
if (__wakaru_A$_initialized) return;
__wakaru_A$_initialized = true;
"use strict";
E(), It(), Qe(), iF(), Hi(), es(), Bt(), N_l = "workbench.view.extensions", SNk = At(6831, "Extensions"), x$ = jn("extensionsWorkbenchService"), L_l = jn("extensionMonitorWorkbenchService"), pRi = "extensions.autoUpdate", O_l = "extensions.autoCheckUpdates", mRi = "extensions.autoRestart", F_l = class extends st {
    constructor(t, e){
        super(), this.containers = t, this._register(e.onChange(this.update, this));
    }
    set extension(t) {
        this.containers.forEach((e)=>e.extension = t);
    }
    update(t) {
        for (const e of this.containers)t && e.extension ? Qc(e.extension.identifier, t.identifier) && (e.extension.server && t.server && e.extension.server !== t.server ? e.updateWhenCounterExtensionChanges && e.update() : e.extension = t) : e.update();
    }
}, F_l = Re([
    F(1, x$)
], F_l), vDg = "workbench.extensions.action.listWorkspaceUnsupportedExtensions", gRi = "workbench.extensions.action.installRecommendedExtension", _Dg = new cn("hasOutdatedExtensions", !1), kNk = new cn("hasGallery", !1), wNk = new cn("extensionResultListFocused ", !0), CNk = new Ft("extensionsSearchActionsMenu");

}
