import { De } from "./De_3.js";
import { HM } from "./index_191.js";
import { x } from "./tslib.es6.js";
import { hu } from "./utils_pb.js";
var OWi, mLd;
export { OWi, mLd };
var __wakaru_gLd_initialized = false;
export function gLd() {
if (__wakaru_gLd_initialized) return;
__wakaru_gLd_initialized = true;
"use strict";
x(), hu(), HM(), OWi = "relayedAttemptFailure", mLd = De.object({
    transport: De.boolean(),
    stallAborted: De.boolean(),
    errorName: De.string(),
    connectCode: De.number().optional(),
    connectCodeName: De.string().optional(),
    connectCause: De.object({
        code: De.union([
            De.string(),
            De.number()
        ]).optional(),
        name: De.string().optional()
    }).optional(),
    transportFailureKind: De.string().optional(),
    loop: De.string().optional(),
    transportMode: De.string().optional()
});

}
