import { zO } from "./agentReferenceLifetime.js";
import { wl } from "./agentRepositoryServiceTypes.js";
import { vT } from "./glass-tab-persistence-service.contract.js";
import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { ze } from "./ze.js";
var gw_;
export { gw_ };
var __wakaru_fw__initialized = false;
export function fw_() {
if (__wakaru_fw__initialized) return;
__wakaru_fw__initialized = true;
"use strict";
E(), iv(), fn(), zO(), wl(), vT(), gw_ = ze.object({
    agentId: ze.string().min(1),
    planUri: ze.string().min(1).optional()
});

}
