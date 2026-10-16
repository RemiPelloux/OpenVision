import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { FT, L0t, Vst } from "./composerNotificationService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Wdl, ols, als;
export { Wdl, als, ols };
var __wakaru_Zyg_initialized = false;
export function Zyg() {
if (__wakaru_Zyg_initialized) return;
__wakaru_Zyg_initialized = true;
"use strict";
E(), Qe(), It(), Rn(), Vst(), Ji(), Wdl = jn("networkAccessNotificationService"), ols = 300 * 1e3, als = class extends st {
    constructor(t, e){
        super(), this.composerNotificationService = t, this.logService = e, this.composerSuggestionShown = new Map;
    }
    suggestNetworkAccess(t) {
        if (this.lastDismissalTime) {
            const e = Date.now() - this.lastDismissalTime;
            if (e < ols) {
                const n = Math.ceil((ols - e) / 6e4);
                this.logService.trace(`[NetworkAccessNotification] In cooldown period, ${n} minutes remaining`);
                return;
            }
            this.lastDismissalTime = void 0;
        }
        if (this.composerSuggestionShown.has(t)) {
            this.logService.trace(`[NetworkAccessNotification] Already shown suggestion for composer ${t}`);
            return;
        }
        this.composerSuggestionShown.set(t, !0), this.composerNotificationService.showNotification({
            type: FT.NetworkAccess,
            composerId: t
        }), this.logService.trace(`[NetworkAccessNotification] Showing network access suggestion for composer ${t}`);
    }
    dismissSuggestion() {
        this.lastDismissalTime = Date.now(), this.logService.trace(`[NetworkAccessNotification] Dismissed, cooldown active for ${ols / 6e4} minutes`);
        const t = this.composerNotificationService.getCurrentNotification();
        t && t.type === FT.NetworkAccess && this.composerNotificationService.dismissNotification();
    }
    clearSuggestion() {
        this.composerNotificationService.clearNotification(FT.NetworkAccess);
    }
    hasShownSuggestion(t) {
        return this.composerSuggestionShown.has(t);
    }
}, als = Re([
    F(0, L0t),
    F(1, Li)
], als), bn(Wdl, als, 1);

}
