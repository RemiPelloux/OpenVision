import { FJ } from "./aiErrorService.js";
import { sd } from "./chat_pb.js";
import { dp } from "./connect.js";
import { Ks } from "./notification.js";
import { Fr, Um } from "./reactiveStorageTypes_2.js";
import { ob } from "./severity_2.js";
import { E } from "./tslib.es6.js";
import { pxi } from "./upgradeUtils.js";
import { Hu } from "./utils_pb.js";
var g1g, f1g, v1g, _1g, b1g, y1g, S1g, k1g, Fhl, Bhl, Yls, Uhl, jhl;
export { Bhl, Fhl, S1g, Uhl, Yls, _1g, b1g, f1g, g1g, jhl, k1g, v1g, y1g };
var __wakaru_cTe_initialized = false;
export function cTe() {
if (__wakaru_cTe_initialized) return;
__wakaru_cTe_initialized = true;
"use strict";
E(), dp(), Hu(), sd(), ob(), Ks(), Um(), FJ(), pxi(), g1g = "unifiedSkuWeeklyLimit", f1g = "unifiedSkuLimitKind", v1g = "prepaid_balance_exhausted", _1g = "prepaidWallet", b1g = "Buy Credits", y1g = "Upgrade Plan", S1g = "weekly_limit", k1g = "Set Spend Limit", Fhl = "Fallback Model Disabled", Bhl = "The suggested fallback model is disabled. Choose a different model to continue.", Yls = new WeakSet, Uhl = "Unable to perform this upgrade on this version of Cursor. Please update to the latest version.", jhl = new Map([
    [
        Fr.PLUS,
        1
    ],
    [
        Fr.PREMIUM,
        2
    ],
    [
        Fr.SUPER,
        3
    ],
    [
        Fr.UNIFIED_ULTRA,
        4
    ]
]);

}
