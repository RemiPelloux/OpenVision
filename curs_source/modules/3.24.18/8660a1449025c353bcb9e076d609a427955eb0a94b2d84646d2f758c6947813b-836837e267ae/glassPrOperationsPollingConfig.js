import { E } from "./tslib.es6.js";
var Rfg, cas, Pfg, Mfg, Dfg;
export { Dfg, Mfg, Pfg, Rfg, cas };
var __wakaru_uas_initialized = false;
export function uas() {
if (__wakaru_uas_initialized) return;
__wakaru_uas_initialized = true;
"use strict";
E(), Rfg = "glass_pr_operations_polling_config", cas = [
    3e3,
    6e3,
    9e3,
    15e3,
    2e4,
    25e3,
    3e4
], Pfg = {
    prChecksPollIntervalMs: 3e4,
    prChecksPollMaxBackoffMs: 18e4,
    prChecksErrorBackoffMultiplier: 1.5,
    prChecksCacheTtlSeconds: 900,
    scmPrMetadataCacheTtlSeconds: 3600,
    scmPrDetailedStatusCacheTtlSeconds: 60,
    scmPrForBranchCacheTtlWhenPrsSeconds: 60,
    scmPrForBranchCacheTtlWhenEmptySeconds: 10,
    scmPrCodeownersCacheTtlSeconds: 300,
    scmPrCommitsCacheTtlSeconds: 300,
    scmPrTimelineEventsCacheTtlSeconds: 300,
    scmPrDiscussionsCacheTtlSeconds: 300,
    scmPrCheckLogExcerptOkTtlSeconds: 120,
    scmPrCheckLogExcerptNegativeTtlSeconds: 30,
    detailedPrStatusChecksScopedAuthBreakerTtlSeconds: 900,
    scmGitlabEmojiReactionCacheTtlSeconds: 1800,
    localAgentPrHeaderBatchPollIntervalMs: 3e4,
    localAgentPrStatePollIntervalMs: 10 * 6e4,
    localAgentPrBurstBumpOffsetsMs: [
        ...cas
    ],
    cloudAgentPrStatePollIntervalMs: 6e4,
    cloudAgentPrBurstBumpOffsetsMs: [
        ...cas
    ],
    cloudAgentPrStatePollMaxBackoffMs: 3e5,
    cloudAgentPrErrorBackoffMultiplier: 1.5
}, Mfg = 6, Dfg = 10;

}
