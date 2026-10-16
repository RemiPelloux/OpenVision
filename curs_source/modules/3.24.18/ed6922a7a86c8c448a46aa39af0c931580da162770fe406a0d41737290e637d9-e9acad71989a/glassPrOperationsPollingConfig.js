import { x } from "./tslib.es6.js";
var GIh, TJi, VIh, jIh, qIh;
export { GIh, TJi, VIh, jIh, qIh };
var __wakaru_zIh_initialized = false;
export function zIh() {
if (__wakaru_zIh_initialized) return;
__wakaru_zIh_initialized = true;
"use strict";
x(), GIh = "glass_pr_operations_polling_config", TJi = [
    3e3,
    6e3,
    9e3,
    15e3,
    2e4,
    25e3,
    3e4
], VIh = {
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
        ...TJi
    ],
    cloudAgentPrStatePollIntervalMs: 6e4,
    cloudAgentPrBurstBumpOffsetsMs: [
        ...TJi
    ],
    cloudAgentPrStatePollMaxBackoffMs: 3e5,
    cloudAgentPrErrorBackoffMultiplier: 1.5
}, jIh = 6, qIh = 10;

}
