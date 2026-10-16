import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var PUe, AZd, $po;
export { $po, AZd, PUe };
var __wakaru_KWt_initialized = false;
export function KWt() {
if (__wakaru_KWt_initialized) return;
__wakaru_KWt_initialized = true;
"use strict";
x(), Ze(), PUe = vn("workspaceConnectionService"), AZd = class {
    getRepairCapability(e) {
        return {
            type: "unsupported"
        };
    }
    canCancelConnecting(e) {
        return !1;
    }
    canCancelTransportReconnect(e) {
        return !1;
    }
    getAutomaticResolverRetryRepairThreshold(e) {}
    requiresTransportReadiness(e) {
        return !1;
    }
    isTransportReconcileEnabled(e) {
        return !1;
    }
    shouldDeferInitialConnection(e) {
        return !1;
    }
}, $po = vn("workspaceConnectionRepairPolicy");

}
