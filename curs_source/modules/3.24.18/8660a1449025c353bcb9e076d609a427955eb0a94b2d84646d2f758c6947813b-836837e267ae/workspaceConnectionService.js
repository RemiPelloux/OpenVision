import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var fie, D9m, gJr;
export { D9m, fie, gJr };
var __wakaru_Lpe_initialized = false;
export function Lpe() {
if (__wakaru_Lpe_initialized) return;
__wakaru_Lpe_initialized = true;
"use strict";
E(), It(), fie = jn("workspaceConnectionService"), D9m = class {
    getRepairCapability(t) {
        return {
            type: "unsupported"
        };
    }
    canCancelConnecting(t) {
        return !1;
    }
    canCancelTransportReconnect(t) {
        return !1;
    }
    getAutomaticResolverRetryRepairThreshold(t) {}
    requiresTransportReadiness(t) {
        return !1;
    }
    isTransportReconcileEnabled(t) {
        return !1;
    }
    shouldDeferInitialConnection(t) {
        return !1;
    }
}, gJr = jn("workspaceConnectionRepairPolicy");

}
