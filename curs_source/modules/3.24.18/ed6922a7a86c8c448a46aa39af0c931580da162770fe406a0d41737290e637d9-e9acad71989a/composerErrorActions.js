import { fq } from "./aiErrorService.js";
import { Hu } from "./chat_pb.js";
import { hg } from "./connect.js";
import { ji } from "./notification.js";
import { Vi, Vp } from "./reactiveStorageTypes_2.js";
import { Kp } from "./severity_2.js";
import { x } from "./tslib.es6.js";
import { PBn } from "./upgradeUtils.js";
import { hu } from "./utils_pb.js";
var TLh, ELh, xLh, ILh, ALh, dtr, fIo, vIo;
export { ALh, ELh, ILh, TLh, dtr, fIo, vIo, xLh };
var __wakaru_N8e_initialized = false;
export function N8e() {
if (__wakaru_N8e_initialized) return;
__wakaru_N8e_initialized = true;
"use strict";
x(), hg(), hu(), Hu(), Kp(), ji(), Vp(), fq(), PBn(), TLh = "unifiedSkuWeeklyLimit", ELh = "prepaid_balance_exhausted", xLh = "prepaidWallet", ILh = "Fallback Model Disabled", ALh = "The suggested fallback model is disabled. Choose a different model to continue.", dtr = new WeakSet, fIo = "Unable to perform this upgrade on this version of Cursor. Please update to the latest version.", vIo = new Map([
    [
        Vi.PLUS,
        1
    ],
    [
        Vi.PREMIUM,
        2
    ],
    [
        Vi.SUPER,
        3
    ],
    [
        Vi.UNIFIED_ULTRA,
        4
    ]
]);

}
