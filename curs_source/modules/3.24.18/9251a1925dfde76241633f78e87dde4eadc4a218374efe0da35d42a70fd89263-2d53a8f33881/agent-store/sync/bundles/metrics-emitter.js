var NOOP_METRICS_EMITTER;
export { NOOP_METRICS_EMITTER };
var __wakaru_init_metrics_emitter_initialized = false;
export function init_metrics_emitter() {
if (__wakaru_init_metrics_emitter_initialized) return;
__wakaru_init_metrics_emitter_initialized = true;
"use strict";
NOOP_METRICS_EMITTER = Object.freeze({
    onDiskFull () {},
    onSymlinkRefused () {},
    onNetworkError () {},
    onThrottled () {},
    onMintGateStateChanged () {},
    onRoundCompleted () {},
    onSyncRound () {},
    onSessionState () {},
    onRoundLifecycle () {},
    syncRoundSkipped () {},
    onLockEvent () {},
    onBlobTransferTiming () {},
    onResumeDetected () {},
    onDirtyPassiveStalled () {},
    onSchedulerTick () {},
    onVersionProbeBatch () {},
    onError () {},
    recordIndexLookupClosed () {},
    onConflict () {},
    recordMountRequested () {},
    recordMountOutcome () {},
    recordWriteBarrier () {},
    recordCitationStarted () {},
    recordCitationResolution () {},
    recordCitationStaleness () {},
    recordStatFastPath () {},
    recordMultipartAbandoned () {},
    recordStorePin () {},
    recordStoreEviction () {},
    tokenMinted () {},
    tokenRefreshUnauthorized () {},
    tokenMintNegativeCached () {},
    tokenMintFailureCached () {},
    tokenMintRetried () {},
    tokenMintRetryDenied () {},
    tokenRefreshFailedKeptExisting () {}
});

}
