import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { B4e, Lw, lJe } from "./composerNotificationService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var kxo, Ter, Eer;
export { Eer, Ter, kxo };
var __wakaru_cPh_initialized = false;
export function cPh() {
if (__wakaru_cPh_initialized) return;
__wakaru_cPh_initialized = true;
"use strict";
x(), Se(), Ze(), Pn(), B4e(), Qn(), kxo = vn("networkAccessNotificationService"), Ter = 300 * 1e3, Eer = class extends we {
    constructor(e, t){
        super(), this.composerNotificationService = e, this.logService = t, this.composerSuggestionShown = new Map;
    }
    suggestNetworkAccess(e) {
        if (this.lastDismissalTime) {
            const t = Date.now() - this.lastDismissalTime;
            if (t < Ter) {
                const n = Math.ceil((Ter - t) / 6e4);
                this.logService.trace(`[NetworkAccessNotification] In cooldown period, ${n} minutes remaining`);
                return;
            }
            this.lastDismissalTime = void 0;
        }
        if (this.composerSuggestionShown.has(e)) {
            this.logService.trace(`[NetworkAccessNotification] Already shown suggestion for composer ${e}`);
            return;
        }
        this.composerSuggestionShown.set(e, !0), this.composerNotificationService.showNotification({
            type: Lw.NetworkAccess,
            composerId: e
        }), this.logService.trace(`[NetworkAccessNotification] Showing network access suggestion for composer ${e}`);
    }
    dismissSuggestion() {
        this.lastDismissalTime = Date.now(), this.logService.trace(`[NetworkAccessNotification] Dismissed, cooldown active for ${Ter / 6e4} minutes`);
        const e = this.composerNotificationService.getCurrentNotification();
        e && e.type === Lw.NetworkAccess && this.composerNotificationService.dismissNotification();
    }
    clearSuggestion() {
        this.composerNotificationService.clearNotification(Lw.NetworkAccess);
    }
    hasShownSuggestion(e) {
        return this.composerSuggestionShown.has(e);
    }
}, Eer = ie([
    C(0, lJe),
    C(1, Wn)
], Eer), mn(kxo, Eer, 1);

}
