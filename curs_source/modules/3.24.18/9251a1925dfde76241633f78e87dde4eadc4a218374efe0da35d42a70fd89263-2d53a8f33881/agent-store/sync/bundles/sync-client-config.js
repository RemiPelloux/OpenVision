import { init_concurrency_queue } from "./concurrency-queue.js";
import { STORE_EVICTION_MARK_TTL_MS, init_store_control } from "./store-control.js";
import { DEFAULT_LIST_WALK_CONCURRENCY, DEFAULT_MAX_FILE_SIZE_BYTES, DEFAULT_MULTIPART_COMPLETE_MAX_ATTEMPTS, DEFAULT_MULTIPART_MAX_CONFLICT_RENAMES, DEFAULT_MULTIPART_MAX_EXPIRY_REFRESHES, DEFAULT_MULTIPART_MAX_RESTARTS, DEFAULT_MULTIPART_PART_SIZE_BYTES, DEFAULT_MULTIPART_PRESIGN_WINDOW_SIZE, DEFAULT_MULTIPART_UPLOAD_THRESHOLD_BYTES, DEFAULT_PULL_PRESIGN_WINDOW_SIZE, DEFAULT_TOMBSTONE_FULL_REFRESH_INTERVAL_MS, DEFAULT_TOMBSTONE_FULL_REFRESH_ROUNDS, DEFAULT_TOMBSTONE_PRUNE_SLACK_MS, DEFAULT_VERSION_FULL_LIST_INTERVAL_MS, init_sync_engine } from "./sync-engine.js";
var DAY_MS, AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS, IDE_AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS, MIB, BOUNDS;
export { AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS, BOUNDS, DAY_MS, IDE_AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS, MIB };
var __wakaru_init_sync_client_config_initialized = false;
export function init_sync_client_config() {
if (__wakaru_init_sync_client_config_initialized) return;
__wakaru_init_sync_client_config_initialized = true;
"use strict";
init_concurrency_queue();
init_store_control();
init_sync_engine();
DAY_MS = 24 * 60 * 60 * 1e3;
AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS = Object.freeze({
    syncDebounceMs: 5e3,
    idleBackoffFactor: 1,
    syncIdleMaxMs: 5e3,
    idleQuiesceMs: 0,
    largeTargetTtlMs: 30 * 60 * 1e3,
    syncBackoffBaseMs: 5e3,
    syncBackoffMaxMs: 6e4,
    projectSyncDebounceMs: 5e3,
    projectSyncIdleMaxMs: 5e3,
    projectSyncBackoffBaseMs: 5e3,
    projectSyncBackoffMaxMs: 6e4,
    passiveRetryIntervalMs: 5e3,
    passiveIndexPollIntervalMs: 2e3,
    pathRefreshMinIntervalMs: 1e3,
    maxFileSizeBytes: DEFAULT_MAX_FILE_SIZE_BYTES,
    tokenRefreshBufferMs: 6e4,
    mintTerminalDenialCacheMs: 30 * 6e4,
    skipDeniedMountSync: 0,
    rpcRetryMaxAttempts: 3,
    rpcRetryBaseDelayMs: 250,
    rpcRetryMaxDelayMs: 5e3,
    rpcRetryMultiplier: 2,
    rpcTimeoutMs: 6e4,
    blobIdleTimeoutMs: 6e4,
    blobConnectTimeoutMs: 0,
    syncRoundTimeoutMs: 3e5,
    syncRoundProgressTimeoutMs: 0,
    syncRoundHardCapMs: 0,
    syncRoundUnwindTimeoutMs: 3e4,
    lockReleaseFailureThreshold: 3,
    lockReleaseFailureStreakThreshold: 0,
    lockReleaseFailureStreakPassiveMs: 3e5,
    resumeGapThresholdMs: 12e4,
    resumeDetectionMode: "mono_gap",
    dirtyPassiveStalledThresholdMs: 12e4,
    s3Concurrency: 8,
    listConcurrency: 4,
    listWalkConcurrency: DEFAULT_LIST_WALK_CONCURRENCY,
    hashConcurrency: 4,
    presignConcurrency: 4,
    multipartUploadThresholdBytes: DEFAULT_MULTIPART_UPLOAD_THRESHOLD_BYTES,
    multipartPartSizeBytes: DEFAULT_MULTIPART_PART_SIZE_BYTES,
    multipartPresignWindowSize: DEFAULT_MULTIPART_PRESIGN_WINDOW_SIZE,
    pullPresignWindowSize: DEFAULT_PULL_PRESIGN_WINDOW_SIZE,
    multipartCompleteMaxAttempts: DEFAULT_MULTIPART_COMPLETE_MAX_ATTEMPTS,
    multipartMaxRestarts: DEFAULT_MULTIPART_MAX_RESTARTS,
    multipartMaxConflictRenames: DEFAULT_MULTIPART_MAX_CONFLICT_RENAMES,
    multipartMaxExpiryRefreshes: DEFAULT_MULTIPART_MAX_EXPIRY_REFRESHES,
    writeBarrierTimeoutMs: 2e3,
    scopedReservedSlots: 1,
    pathSyncRequestPollMs: 250,
    pathSyncRequestWaitPollMs: 50,
    exclusiveMutationClaimPollMs: 250,
    sharedScheduler: false,
    storeRootIdFence: false,
    indexClosedInvalidatesSession: false,
    periodicCoalesceMs: 2e3,
    staleStoreRootMaxIdleMs: 7 * DAY_MS,
    storeEvictionMode: "legacy_sweep",
    storeEvictionQuarantineMs: DAY_MS,
    storeEvictionMaxRootsPerRun: 4,
    storeEvictionMaxHashBytesPerRun: 256 * 1024 * 1024,
    storeEvictionMarkTtlMs: STORE_EVICTION_MARK_TTL_MS,
    storeEvictionMinIntervalMs: 6 * 60 * 60 * 1e3,
    tombstoneFullRefreshRounds: DEFAULT_TOMBSTONE_FULL_REFRESH_ROUNDS,
    tombstoneFullRefreshIntervalMs: DEFAULT_TOMBSTONE_FULL_REFRESH_INTERVAL_MS,
    tombstonePruneSlackMs: DEFAULT_TOMBSTONE_PRUNE_SLACK_MS,
    remoteVersionEnabled: false,
    versionFullListIntervalMs: DEFAULT_VERSION_FULL_LIST_INTERVAL_MS,
    versionAuditSampleRate: 0,
    versionProbeEnabled: false,
    versionProbeMaxEntries: 50,
    mintRetryPolicyVersion: 1,
    mintRetryMaxAttempts: 2,
    mintRetryBaseDelayMs: 250,
    mintRetryMaxDelayMs: 2e3,
    mintRetryBudgetRatio: 0.1,
    mintRetryBudgetFloor: 3,
    mintTransientNegativeCacheBaseMs: 5e3,
    mintTransientNegativeCacheMaxMs: 12e4,
    mintGateOpenThreshold: 5,
    mintGateWindowMs: 3e4,
    mintGateOpenBaseMs: 5e3,
    mintGateOpenMaxMs: 12e4,
    tokenRefreshJitterRatio: 0.5,
    minTokenSlackMs: 5e3,
    localStatFastPath: "off",
    localStatFastPathAuditRate: 1,
    localStatRacyMarginMs: 2e3,
    harnessRecoveryPolicy: "recover",
    harnessRecoveryStartJitterMs: 3e4,
    harnessRecoveryProbeBaseMs: 3e5,
    harnessRecoveryProbeMaxMs: 36e5,
    harnessRememberedMountsMax: 16,
    mountPolicy: "eager",
    pushOrder: "scan"
});
IDE_AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS = Object.freeze({
    ...AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS,
    mountPolicy: "lazy"
});
MIB = 1024 * 1024;
BOUNDS = {
    syncDebounceMs: {
        min: 250,
        max: 36e5
    },
    idleBackoffFactor: {
        min: 1,
        max: 4
    },
    syncIdleMaxMs: {
        min: 250,
        max: 36e5
    },
    idleQuiesceMs: {
        min: 0,
        max: 36e5
    },
    largeTargetTtlMs: {
        min: 60 * 1e3,
        max: 24 * 60 * 60 * 1e3
    },
    syncBackoffBaseMs: {
        min: 100,
        max: 36e5
    },
    syncBackoffMaxMs: {
        min: 100,
        max: 36e5
    },
    projectSyncDebounceMs: {
        min: 250,
        max: 36e5
    },
    projectSyncIdleMaxMs: {
        min: 250,
        max: 36e5
    },
    projectSyncBackoffBaseMs: {
        min: 100,
        max: 36e5
    },
    projectSyncBackoffMaxMs: {
        min: 100,
        max: 36e5
    },
    passiveRetryIntervalMs: {
        min: 0,
        max: 36e5
    },
    passiveIndexPollIntervalMs: {
        min: 0,
        max: 36e5
    },
    pathRefreshMinIntervalMs: {
        min: 0,
        max: 36e5
    },
    maxFileSizeBytes: {
        min: 1024,
        max: 1024 * 1024 * 1024
    },
    tokenRefreshBufferMs: {
        min: 0,
        max: 10 * 6e4
    },
    mintTerminalDenialCacheMs: {
        min: 6e4,
        max: DAY_MS
    },
    skipDeniedMountSync: {
        min: 0,
        max: 1
    },
    rpcRetryMaxAttempts: {
        min: 1,
        max: 10
    },
    rpcRetryBaseDelayMs: {
        min: 1,
        max: 6e4
    },
    rpcRetryMaxDelayMs: {
        min: 1,
        max: 5 * 6e4
    },
    rpcRetryMultiplier: {
        min: 1,
        max: 10
    },
    rpcTimeoutMs: {
        min: 1e3,
        max: 6e5
    },
    blobIdleTimeoutMs: {
        min: 1e3,
        max: 6e5
    },
    blobConnectTimeoutMs: {
        min: 1e3,
        max: 3e5
    },
    syncRoundTimeoutMs: {
        min: 3e4,
        max: 36e5
    },
    syncRoundProgressTimeoutMs: {
        min: 3e4,
        max: 36e5
    },
    syncRoundHardCapMs: {
        min: 6e4,
        max: 72e5
    },
    syncRoundUnwindTimeoutMs: {
        min: 1e3,
        max: 6e5
    },
    lockReleaseFailureThreshold: {
        min: 1,
        max: 20
    },
    lockReleaseFailureStreakThreshold: {
        min: 0,
        max: 100
    },
    lockReleaseFailureStreakPassiveMs: {
        min: 5e3,
        max: 36e5
    },
    resumeGapThresholdMs: {
        min: 3e4,
        max: 36e5
    },
    dirtyPassiveStalledThresholdMs: {
        min: 3e4,
        max: 36e5
    },
    s3Concurrency: {
        min: 1,
        max: 64
    },
    listConcurrency: {
        min: 1,
        max: 64
    },
    listWalkConcurrency: {
        min: 1,
        max: 64
    },
    hashConcurrency: {
        min: 1,
        max: 64
    },
    presignConcurrency: {
        min: 1,
        max: 64
    },
    multipartUploadThresholdBytes: {
        min: 5 * MIB,
        max: 1024 * MIB
    },
    multipartPartSizeBytes: {
        min: 5 * MIB,
        max: 512 * MIB
    },
    multipartPresignWindowSize: {
        min: 1,
        max: 32
    },
    pullPresignWindowSize: {
        min: 1,
        max: 1e3
    },
    multipartCompleteMaxAttempts: {
        min: 1,
        max: 5
    },
    multipartMaxRestarts: {
        min: 0,
        max: 2
    },
    multipartMaxConflictRenames: {
        min: 0,
        max: 2
    },
    multipartMaxExpiryRefreshes: {
        min: 0,
        max: 3
    },
    writeBarrierTimeoutMs: {
        min: 0,
        max: 6e4
    },
    scopedReservedSlots: {
        min: 0,
        max: 8
    },
    pathSyncRequestPollMs: {
        min: 0,
        max: 6e4
    },
    pathSyncRequestWaitPollMs: {
        min: 1,
        max: 6e4
    },
    exclusiveMutationClaimPollMs: {
        min: 50,
        max: 6e4
    },
    periodicCoalesceMs: {
        min: 250,
        max: 3e4
    },
    staleStoreRootMaxIdleMs: {
        min: 1,
        max: Number.MAX_SAFE_INTEGER
    },
    storeEvictionQuarantineMs: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER
    },
    storeEvictionMaxRootsPerRun: {
        min: 1,
        max: Number.MAX_SAFE_INTEGER
    },
    storeEvictionMaxHashBytesPerRun: {
        min: 1,
        max: Number.MAX_SAFE_INTEGER
    },
    storeEvictionMarkTtlMs: {
        min: 1e3,
        max: STORE_EVICTION_MARK_TTL_MS
    },
    storeEvictionMinIntervalMs: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER
    },
    tombstoneFullRefreshRounds: {
        min: 1,
        max: Number.MAX_SAFE_INTEGER
    },
    tombstoneFullRefreshIntervalMs: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER
    },
    tombstonePruneSlackMs: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER
    },
    versionFullListIntervalMs: {
        min: 60 * 60 * 1e3,
        max: 7 * 24 * 60 * 60 * 1e3
    },
    versionAuditSampleRate: {
        min: 0,
        max: 1
    },
    versionProbeMaxEntries: {
        min: 1,
        max: 100
    },
    mintRetryPolicyVersion: {
        min: 0,
        max: 1
    },
    mintRetryMaxAttempts: {
        min: 1,
        max: 5
    },
    mintRetryBaseDelayMs: {
        min: 1,
        max: 6e4
    },
    mintRetryMaxDelayMs: {
        min: 1,
        max: 6e4
    },
    mintRetryBudgetRatio: {
        min: 0,
        max: 1
    },
    mintRetryBudgetFloor: {
        min: 0,
        max: 100
    },
    mintTransientNegativeCacheBaseMs: {
        min: 100,
        max: 36e5
    },
    mintTransientNegativeCacheMaxMs: {
        min: 100,
        max: 36e5
    },
    mintGateOpenThreshold: {
        min: 1,
        max: 1e3
    },
    mintGateWindowMs: {
        min: 1e3,
        max: 36e5
    },
    mintGateOpenBaseMs: {
        min: 100,
        max: 36e5
    },
    mintGateOpenMaxMs: {
        min: 100,
        max: 36e5
    },
    tokenRefreshJitterRatio: {
        min: 0,
        max: 1
    },
    minTokenSlackMs: {
        min: 1,
        max: 6e4
    },
    localStatFastPathAuditRate: {
        min: 0,
        max: 1
    },
    localStatRacyMarginMs: {
        min: 0,
        max: 6e4
    },
    harnessRecoveryStartJitterMs: {
        min: 0,
        max: 3e5
    },
    harnessRecoveryProbeBaseMs: {
        min: 1e3,
        max: 36e5
    },
    harnessRecoveryProbeMaxMs: {
        min: 1e3,
        max: 36e5
    },
    harnessRememberedMountsMax: {
        min: 0,
        max: 64
    }
};

}
