import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var tcv;
export { tcv };
var __wakaru_Ve0_initialized = false;
export function Ve0() {
if (__wakaru_Ve0_initialized) return;
__wakaru_Ve0_initialized = true;
"use strict";
E(), iv(), tcv = {
    browserId: ze.string(),
    initialUrl: ze.string().optional(),
    ownerAgentId: ze.string().optional(),
    agentControlled: ze.boolean().optional(),
    persistencePolicy: ze.enum([
        "afterActivation"
    ]).optional(),
    preview: ze.boolean().optional(),
    transient: ze.boolean().optional()
};

}
