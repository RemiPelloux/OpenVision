import { iS } from "./adminSettingsService.js";
import { ZM } from "./aiSettingsService.js";
import { tof } from "./creditGrantClientTypeUiUtils.js";
import { oof } from "./creditGrantDismissalUtils.js";
import { yfs } from "./creditGrantFormattingUtils.js";
import { lof } from "./creditGrantModelDisplayNameUtils.js";
import { yp } from "./glass-command-service.js";
import { HYC } from "./glass-credit-grant-banner-controller.js";
import { xc } from "./glass-storage-service.js";
import { of } from "./modelConfigServiceTypes.js";
import { E } from "./tslib.es6.js";
import { QW } from "./usageLimitPolicyStatusService.js";
import { vDe } from "./use-interval.react.js";
import { CTe } from "./use-persistent-state.react.js";
import { In } from "./use-service.react_2.js";
import { Af } from "./use-solid-selector.react_2.js";
var F1_, B1_, U1_, j1_;
export { B1_, F1_, U1_, j1_ };
var __wakaru_KYC_initialized = false;
export function KYC() {
if (__wakaru_KYC_initialized) return;
__wakaru_KYC_initialized = true;
"use strict";
E(), CTe(), tof(), oof(), yfs(), lof(), QW(), iS(), ZM(), of(), vDe(), In(), Af(), yp(), xc(), HYC(), F1_ = "glass.openIde", B1_ = "cursor.dismissedCreditGrantIds", U1_ = [], j1_ = (t)=>t.getAvailableModelsReactiveWithStatus({
        specificModelField: "composer"
    }).map((e)=>({
            name: e.name,
            clientDisplayName: e.clientDisplayName
        }));

}
