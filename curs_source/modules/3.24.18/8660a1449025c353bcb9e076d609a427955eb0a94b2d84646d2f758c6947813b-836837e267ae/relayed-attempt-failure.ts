import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { Hu } from "./utils_pb.js";
import { ze } from "./ze.js";
var uYr, F1m;
export { F1m, uYr };
var __wakaru_B1m_initialized = false;
export function B1m() {
if (__wakaru_B1m_initialized) return;
__wakaru_B1m_initialized = true;
"use strict";
E(), Hu(), iv(), uYr = "relayedAttemptFailure", F1m = ze.object({
    transport: ze.boolean(),
    stallAborted: ze.boolean(),
    errorName: ze.string(),
    connectCode: ze.number().optional(),
    connectCodeName: ze.string().optional(),
    connectCause: ze.object({
        code: ze.union([
            ze.string(),
            ze.number()
        ]).optional(),
        name: ze.string().optional()
    }).optional(),
    transportFailureKind: ze.string().optional(),
    loop: ze.string().optional(),
    transportMode: ze.string().optional()
});

}
