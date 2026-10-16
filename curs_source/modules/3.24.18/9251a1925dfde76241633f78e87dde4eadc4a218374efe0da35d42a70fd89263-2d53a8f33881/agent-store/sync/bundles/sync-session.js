import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_backoff_scheduler } from "./backoff-scheduler.js";
import { init_citation_resolution } from "./citation-resolution.js";
import { init_closed_index_error } from "./closed-index-error.js";
import { init_conflict_events } from "./conflict-events.js";
import { init_exclusive_mutation_lock } from "./exclusive-mutation-lock.js";
import { META_LAST_COMPLETE_ROUND_MS, META_LAST_LISTING_APPLIED_MS, init_local_index } from "./local-index.js";
import { init_monotonic_clock } from "./monotonic-clock.js";
import { PATH_SYNC_REQUEST_POLL_MS, PATH_SYNC_REQUEST_WAIT_POLL_MS, init_path_sync_request } from "./path-sync-request.js";
import { init_paths3 } from "./paths.js";
import { PerSessionTimerScheduler, init_periodic_scheduler } from "./periodic-scheduler.js";
import { init_safe_paths } from "./safe-paths.js";
import { init_summary_listener } from "./summary-listener.js";
import { AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS, init_sync_client_config } from "./sync-client-config.js";
import { AgentStoreSyncEngine, AgentStoreSyncError, DEFAULT_MAX_FILE_SIZE_BYTES, init_sync_engine } from "./sync-engine.js";
import { init_sync_round_scheduler } from "./sync-round-scheduler.js";
import { assertNoSymlinkInPath, conflictJournalPathForFilesDir, conflictPendingJournalPathForFilesDir } from "../../../mcp_sandbox_policy_exports.js";
import { init_esm3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { AGENT_STORE_ROOT_ID_FILE_NAME, ackPathSyncRequests, allSummaryErrorsTimeoutClassified, awaitBounded, emptySummary, enqueuePathSyncRequest, ensureAgentStoreRootId, hasCooperativeRoundAbortInChain, hasLifecycleRoundAbortInChain, hasRootRetiredInChain, init_root_id, isClosedIndexError, isCooperativeRoundAbortMessage, isDeadlineExceededShaped, isIdleNoopSummary, isSyncRoundStoodAsideError, isTimeoutClassifiedRoundError, listPathSyncRequests, makeSyncBackoff, monotonicNowMs, nextRepeatingDueAtMs, normalizeRelPath, notifySummaryMetrics, parseMetaMs, pullPathsAttemptFromRound, readAgentStoreExclusiveMutationClaimOwner, rejectSettledRoundAsAborted, safeInvokeCallback, safeStatChild, streamHashFileNoFollow, unknownThrownErrorName, unwrapSettledRound, waitForPathSyncRequestAck, waitForSettlement } from "../../../tree_chunk_napi_exports.js";
var path51, DENIAL_RESCHEDULE_CAP_MS, MAX_IDLE_BACKOFF_EXPONENT, UNWIND_HARD_CAP_MULTIPLIER, RESUME_CHECK_INTERVAL_MS, ERROR_NAME_IDENTIFIER, BUILT_IN_ERROR_NAMES, AgentStoreSyncSession;
export { AgentStoreSyncSession, BUILT_IN_ERROR_NAMES, DENIAL_RESCHEDULE_CAP_MS, ERROR_NAME_IDENTIFIER, MAX_IDLE_BACKOFF_EXPONENT, RESUME_CHECK_INTERVAL_MS, UNWIND_HARD_CAP_MULTIPLIER, path51 };
var __wakaru_init_sync_session_initialized = false;
export function init_sync_session() {
if (__wakaru_init_sync_session_initialized) return;
__wakaru_init_sync_session_initialized = true;
"use strict";
path51 = __toESM(require("node:path"), 1);
init_esm3();
init_backoff_scheduler();
init_closed_index_error();
init_citation_resolution();
init_conflict_events();
init_exclusive_mutation_lock();
init_local_index();
init_monotonic_clock();
init_path_sync_request();
init_paths3();
init_root_id();
init_periodic_scheduler();
init_safe_paths();
init_summary_listener();
init_sync_client_config();
init_sync_engine();
init_sync_round_scheduler();
DENIAL_RESCHEDULE_CAP_MS = 24 * 60 * 60 * 1e3;
MAX_IDLE_BACKOFF_EXPONENT = 32;
UNWIND_HARD_CAP_MULTIPLIER = 3;
RESUME_CHECK_INTERVAL_MS = 3e4;
ERROR_NAME_IDENTIFIER = /^[A-Za-z_$][\w$]{0,63}$/;
BUILT_IN_ERROR_NAMES = [
    ...typeof DOMException === "function" ? [
        [
            DOMException,
            "DOMException"
        ]
    ] : [],
    [
        AggregateError,
        "AggregateError"
    ],
    [
        EvalError,
        "EvalError"
    ],
    [
        RangeError,
        "RangeError"
    ],
    [
        ReferenceError,
        "ReferenceError"
    ],
    [
        SyntaxError,
        "SyntaxError"
    ],
    [
        TypeError,
        "TypeError"
    ],
    [
        URIError,
        "URIError"
    ]
];
AgentStoreSyncSession = class _AgentStoreSyncSession {
    static async open(options2) {
        const session = new _AgentStoreSyncSession(options2);
        options2.onConstructed?.(session);
        try {
            await session.initialize();
            await session.awaitOpenSettlement(options2.awaitInitialRound !== false);
        } catch (error3) {
            await session.awaitTeardown();
            await session.releaseRootPin();
            throw error3;
        }
        if (session.isClosing()) {
            await session.awaitTeardown();
            await session.releaseRootPin();
            throw new Error(`AgentStoreSyncSession for ${options2.key} was invalidated during open`);
        }
        return session;
    }
    constructor(options2){
        this.lastResumeWallMs = 0;
        this.lastResumeMonoMs = 0;
        this.roundBodyStartWaiters = new Map();
        this.consecutiveNoopRounds = 0;
        this.idleStreakEpoch = 0;
        this.suppressNextIdleNote = false;
        this.conversationActivity = "active";
        this.periodicSyncHeld = false;
        this.versionProbeInFlight = false;
        this.periodicSyncHandle = {};
        this.periodicSyncArmed = false;
        this.currentRoundSchedule = "periodic";
        this.closeReleasedLock = false;
        this.lockReleasedWaiters = [];
        this.exclusiveMutationClaimHandle = {};
        this.exclusiveMutationClaimArmed = false;
        this.pathSyncRequestFailureDelayMs = 0;
        this.pathSyncRequestRetryNotBeforeMs = 0;
        this.followUpNeeded = false;
        this.roundGeneration = 0;
        this.mirrorSyncState = "opening";
        this.initialRoundWaitersReleased = new Promise((resolve36)=>{
            this.releaseInitialRoundWaiters = resolve36;
        });
        this.lifecycle = "open";
        this.rootRetiredInvalidationStarted = false;
        this.indexClosedInvalidationStarted = false;
        this.roundWatchdogTripped = false;
        this.roundUnwound = true;
        this.consecutiveTimeoutFailures = 0;
        this.indexLookupClosedEmitted = false;
        this.consecutiveRoundFailures = 0;
        this.failureStreakPassiveUntilMs = 0;
        this.passiveCatchUpSuppressions = 0;
        this.resumeBackoffResetPending = false;
        this.activeRoundResumeRecoveryPending = false;
        this.resumeRecoveryInProgress = false;
        this.abandonRequested = false;
        this.onExclusiveMutationClaimDue = ()=>{
            const previousDueAtMs = this.exclusiveMutationClaimDueAtMs;
            this.exclusiveMutationClaimArmed = false;
            this.exclusiveMutationClaimDueAtMs = void 0;
            if (this.lockOwnerId === void 0 || this.isClosing() || this.engine?.getState() !== "running") {
                return;
            }
            this.armExclusiveMutationClaim(previousDueAtMs);
            void this.checkExclusiveMutationClaim();
        };
        this.onPeriodicSyncDue = ()=>{
            this.periodicSyncArmed = false;
            this.periodicDueAtMs = void 0;
            const schedule = this.pendingScheduleKind === "idle" ? "idle" : "periodic";
            if (this.pendingScheduleKind === "periodic" || this.pendingScheduleKind === "idle") {
                this.pendingScheduleKind = void 0;
            }
            const probe = this.startVersionProbe();
            if (probe === void 0) {
                void this.runSync({
                    schedule
                });
                return;
            }
            this.versionProbeInFlight = true;
            void this.runSyncAfterVersionProbe(probe, schedule).finally(()=>{
                this.versionProbeInFlight = false;
            });
        };
        this.key = options2.key;
        this.projectStore = options2.isProjectStore ?? false;
        this.filesDir = options2.paths.filesDir;
        this.client = options2.client;
        this.openIndex = options2.openIndex;
        this.lockProvider = options2.lockProvider;
        this.lockOwnerId = options2.lockOwnerId;
        this.queues = options2.queues;
        this.syncMode = options2.syncMode ?? "readWrite";
        this.validatePresignedUrl = options2.validatePresignedUrl;
        this.blobTransfer = options2.blobTransfer;
        this.fetchImpl = options2.fetch;
        this.paths = options2.paths;
        this.engineIndexPath = options2.indexPath ?? options2.paths.indexPath;
        this.rootIdPath = path51.join(path51.dirname(options2.paths.indexPath), AGENT_STORE_ROOT_ID_FILE_NAME);
        this.storeRootIdFence = options2.storeRootIdFence ?? false;
        const callerGuardedPaths = options2.guardedPaths ?? [
            options2.paths.tmpDir,
            options2.paths.indexPath,
            conflictJournalPathForFilesDir(options2.paths.filesDir),
            conflictPendingJournalPathForFilesDir(options2.paths.filesDir)
        ];
        this.guardedPaths = callerGuardedPaths.includes(this.rootIdPath) ? callerGuardedPaths : [
            ...callerGuardedPaths,
            this.rootIdPath
        ];
        const callerValidatePaths = options2.validatePaths;
        this.validatePathsHook = ()=>{
            if (callerValidatePaths !== void 0) {
                callerValidatePaths();
            } else {
                for (const guardedPath of this.guardedPaths){
                    if (guardedPath !== this.rootIdPath) {
                        assertNoSymlinkInPath(guardedPath);
                    }
                }
            }
            assertNoSymlinkInPath(this.rootIdPath);
        };
        this.onStateChangedCallback = options2.onStateChanged;
        this.onSyncSummaryCallback = options2.onSyncSummary;
        this.onSyncErrorCallback = options2.onSyncError;
        this.onInvalidatedCallback = options2.onInvalidated;
        this.metricsEmitter = options2.metricsEmitter;
        this.pathHashSalt = options2.pathHashSalt;
        this.onWarnCallback = options2.onWarn;
        this.rootPin = options2.rootPin;
        this.maxFileSizeBytes = options2.maxFileSizeBytes;
        this.blobIdleTimeoutMs = options2.blobIdleTimeoutMs;
        this.blobConnectTimeoutMs = options2.blobConnectTimeoutMs;
        this.passiveRetryIntervalMs = options2.passiveRetryIntervalMs;
        this.mintGate = options2.mintGate;
        this.mintDeniedUntilMs = options2.mintDeniedUntilMs;
        this.skipDeniedMountSync = options2.skipDeniedMountSync;
        this.passiveIndexPollIntervalMs = options2.passiveIndexPollIntervalMs;
        this.pathRefreshMinIntervalMs = options2.pathRefreshMinIntervalMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.pathRefreshMinIntervalMs;
        this.multipartUploadThresholdBytes = options2.multipartUploadThresholdBytes;
        this.multipartPartSizeBytes = options2.multipartPartSizeBytes;
        this.multipartPresignWindowSize = options2.multipartPresignWindowSize;
        this.pullPresignWindowSize = options2.pullPresignWindowSize;
        this.listWalkConcurrency = options2.listWalkConcurrency;
        this.multipartCompleteMaxAttempts = options2.multipartCompleteMaxAttempts;
        this.multipartMaxRestarts = options2.multipartMaxRestarts;
        this.multipartMaxConflictRenames = options2.multipartMaxConflictRenames;
        this.multipartMaxExpiryRefreshes = options2.multipartMaxExpiryRefreshes;
        this.pushOrder = options2.pushOrder ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.pushOrder;
        this.onPassiveIndexUpdatedCallback = options2.onPassiveIndexUpdated;
        this.onResumeDetectedCallback = options2.onResumeDetected;
        this.syncRoundTimeoutMs = options2.syncRoundTimeoutMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.syncRoundTimeoutMs;
        this.syncRoundProgressTimeoutMs = options2.syncRoundProgressTimeoutMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.syncRoundProgressTimeoutMs;
        this.syncRoundHardCapMs = options2.syncRoundHardCapMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.syncRoundHardCapMs;
        this.syncRoundUnwindTimeoutMs = options2.syncRoundUnwindTimeoutMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.syncRoundUnwindTimeoutMs;
        this.lockReleaseFailureThreshold = options2.lockReleaseFailureThreshold ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.lockReleaseFailureThreshold;
        this.indexClosedInvalidatesSession = options2.indexClosedInvalidatesSession === true;
        this.lockReleaseFailureStreakThreshold = options2.lockReleaseFailureStreakThreshold ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.lockReleaseFailureStreakThreshold;
        this.lockReleaseFailureStreakPassiveMs = options2.lockReleaseFailureStreakPassiveMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.lockReleaseFailureStreakPassiveMs;
        this.resumeGapThresholdMs = options2.resumeGapThresholdMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.resumeGapThresholdMs;
        this.resumeDetectionMode = options2.resumeDetectionMode ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.resumeDetectionMode;
        this.syncDebounceMs = options2.syncDebounceMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.syncDebounceMs;
        this.idleBackoffFactor = options2.idleBackoffFactor ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.idleBackoffFactor;
        this.syncIdleMaxMs = options2.syncIdleMaxMs ?? this.syncDebounceMs;
        this.syncBackoffBaseMs = options2.syncBackoffBaseMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.syncBackoffBaseMs;
        this.syncBackoffMaxMs = options2.syncBackoffMaxMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.syncBackoffMaxMs;
        this.pathSyncRequestPollMs = options2.pathSyncRequestPollMs ?? PATH_SYNC_REQUEST_POLL_MS;
        this.pathSyncRequestWaitPollMs = options2.pathSyncRequestWaitPollMs ?? PATH_SYNC_REQUEST_WAIT_POLL_MS;
        this.exclusiveMutationClaimPollMs = options2.exclusiveMutationClaimPollMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.exclusiveMutationClaimPollMs;
        this.tombstoneFullRefreshRounds = options2.tombstoneFullRefreshRounds;
        this.tombstoneFullRefreshIntervalMs = options2.tombstoneFullRefreshIntervalMs;
        this.tombstonePruneSlackMs = options2.tombstonePruneSlackMs;
        this.remoteVersionEnabled = options2.remoteVersionEnabled;
        this.versionFullListIntervalMs = options2.versionFullListIntervalMs;
        this.versionAuditSampleRate = options2.versionAuditSampleRate;
        this.localStatFastPath = options2.localStatFastPath ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.localStatFastPath;
        this.localStatFastPathAuditRate = options2.localStatFastPathAuditRate ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.localStatFastPathAuditRate;
        this.localStatRacyMarginMs = options2.localStatRacyMarginMs ?? AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.localStatRacyMarginMs;
        this.syncBackoff = makeSyncBackoff({
            baseDelayMs: this.syncBackoffBaseMs,
            maxDelayMs: this.syncBackoffMaxMs
        });
        this.ownsPeriodicScheduler = options2.periodicScheduler === void 0;
        this.periodicScheduler = options2.periodicScheduler ?? new PerSessionTimerScheduler();
        this.versionProbe = options2.versionProbe;
    }
    get isProjectStore() {
        return this.projectStore;
    }
    promoteToProjectStore() {
        if (this.projectStore) {
            return false;
        }
        this.projectStore = true;
        return true;
    }
    setRemoteTiming(timing) {
        const previousDebounceMs = this.syncDebounceMs;
        const previousIdleBackoffFactor = this.idleBackoffFactor;
        const previousIdleMaxMs = this.syncIdleMaxMs;
        const previousResumeGapThresholdMs = this.resumeGapThresholdMs;
        if (timing.syncDebounceMs !== void 0) {
            this.syncDebounceMs = timing.syncDebounceMs;
        }
        if (timing.idleBackoffFactor !== void 0) {
            this.idleBackoffFactor = timing.idleBackoffFactor;
        }
        if (timing.syncIdleMaxMs !== void 0) {
            this.syncIdleMaxMs = timing.syncIdleMaxMs;
        }
        if (timing.syncRoundTimeoutMs !== void 0) {
            this.syncRoundTimeoutMs = timing.syncRoundTimeoutMs;
        }
        if (timing.syncRoundProgressTimeoutMs !== void 0) {
            this.syncRoundProgressTimeoutMs = timing.syncRoundProgressTimeoutMs;
        }
        if (timing.syncRoundHardCapMs !== void 0) {
            this.syncRoundHardCapMs = timing.syncRoundHardCapMs;
        }
        if (timing.resumeGapThresholdMs !== void 0) {
            this.resumeGapThresholdMs = timing.resumeGapThresholdMs;
        }
        if (timing.resumeDetectionMode !== void 0) {
            this.resumeDetectionMode = timing.resumeDetectionMode;
        }
        if (timing.passiveIndexPollIntervalMs !== void 0) {
            this.passiveIndexPollIntervalMs = timing.passiveIndexPollIntervalMs;
            if (!this.isClosing()) {
                this.engine?.setPassiveIndexPollIntervalMs(timing.passiveIndexPollIntervalMs);
            }
        }
        if (timing.pathRefreshMinIntervalMs !== void 0) {
            this.pathRefreshMinIntervalMs = timing.pathRefreshMinIntervalMs;
        }
        if (timing.passiveRetryIntervalMs !== void 0) {
            this.passiveRetryIntervalMs = timing.passiveRetryIntervalMs;
            if (!this.isClosing()) {
                const gateMs = this.mintGate?.remainingMs ?? 0;
                const stretchMs = Math.max(gateMs, this.denialRemainingMs(), this.failureStreakStretchMs());
                this.engine?.setPassiveRetryIntervalMs(Math.max(timing.passiveRetryIntervalMs, stretchMs));
            }
        }
        if (this.resumeGapThresholdMs !== previousResumeGapThresholdMs && !this.isClosing()) {
            this.stopResumeDetector();
            this.startResumeDetector();
        }
        const nextBase = timing.syncBackoffBaseMs ?? this.syncBackoffBaseMs;
        const nextMax = timing.syncBackoffMaxMs ?? this.syncBackoffMaxMs;
        if (nextBase !== this.syncBackoffBaseMs || nextMax !== this.syncBackoffMaxMs) {
            const priorFailures = this.syncBackoff.failures;
            this.syncBackoffBaseMs = nextBase;
            this.syncBackoffMaxMs = nextMax;
            this.syncBackoff = makeSyncBackoff({
                baseDelayMs: nextBase,
                maxDelayMs: nextMax
            });
            this.syncBackoff.restoreFailures(priorFailures);
        }
        const periodicTimingChanged = this.syncDebounceMs !== previousDebounceMs || this.idleBackoffFactor !== previousIdleBackoffFactor || this.syncIdleMaxMs !== previousIdleMaxMs;
        if (periodicTimingChanged && this.periodicSyncArmed && (this.pendingScheduleKind === "periodic" || this.pendingScheduleKind === "idle") && this.syncing === void 0 && !this.isClosing()) {
            const next = this.nextPeriodicDelay();
            this.scheduleSync(next.delayMs, next.kind);
        }
        if (timing.tombstoneFullRefreshRounds !== void 0) {
            this.tombstoneFullRefreshRounds = timing.tombstoneFullRefreshRounds;
            if (!this.isClosing()) {
                this.engine?.setTombstoneFullRefreshRounds(timing.tombstoneFullRefreshRounds);
            }
        }
        if (timing.tombstoneFullRefreshIntervalMs !== void 0) {
            this.tombstoneFullRefreshIntervalMs = timing.tombstoneFullRefreshIntervalMs;
            if (!this.isClosing()) {
                this.engine?.setTombstoneFullRefreshIntervalMs(timing.tombstoneFullRefreshIntervalMs);
            }
        }
        if (timing.tombstonePruneSlackMs !== void 0) {
            this.tombstonePruneSlackMs = timing.tombstonePruneSlackMs;
            if (!this.isClosing()) {
                this.engine?.setTombstonePruneSlackMs(timing.tombstonePruneSlackMs);
            }
        }
        if (timing.remoteVersionEnabled !== void 0) {
            this.remoteVersionEnabled = timing.remoteVersionEnabled;
            if (!this.isClosing()) {
                this.engine?.setRemoteVersionEnabled(timing.remoteVersionEnabled);
            }
        }
        if (timing.versionFullListIntervalMs !== void 0) {
            this.versionFullListIntervalMs = timing.versionFullListIntervalMs;
            if (!this.isClosing()) {
                this.engine?.setVersionFullListIntervalMs(timing.versionFullListIntervalMs);
            }
        }
        if (timing.versionAuditSampleRate !== void 0) {
            this.versionAuditSampleRate = timing.versionAuditSampleRate;
            if (!this.isClosing()) {
                this.engine?.setVersionAuditSampleRate(timing.versionAuditSampleRate);
            }
        }
        if (timing.localStatFastPath !== void 0 || timing.localStatFastPathAuditRate !== void 0 || timing.localStatRacyMarginMs !== void 0) {
            if (timing.localStatFastPath !== void 0) {
                this.localStatFastPath = timing.localStatFastPath;
            }
            if (timing.localStatFastPathAuditRate !== void 0) {
                this.localStatFastPathAuditRate = timing.localStatFastPathAuditRate;
            }
            if (timing.localStatRacyMarginMs !== void 0) {
                this.localStatRacyMarginMs = timing.localStatRacyMarginMs;
            }
            if (!this.isClosing()) {
                this.engine?.setLocalStatFastPath({
                    mode: this.localStatFastPath,
                    auditRate: this.localStatFastPathAuditRate,
                    racyMarginMs: this.localStatRacyMarginMs
                });
            }
        }
        if (timing.pathSyncRequestWaitPollMs !== void 0) {
            this.pathSyncRequestWaitPollMs = timing.pathSyncRequestWaitPollMs;
        }
        if (timing.pathSyncRequestPollMs !== void 0 && timing.pathSyncRequestPollMs !== this.pathSyncRequestPollMs) {
            this.pathSyncRequestPollMs = timing.pathSyncRequestPollMs;
            if (this.engine?.getState() === "running" && !this.isClosing()) {
                this.stopPathSyncRequestPolling();
                this.startPathSyncRequestPolling();
            }
        }
        if (timing.exclusiveMutationClaimPollMs !== void 0 && timing.exclusiveMutationClaimPollMs !== this.exclusiveMutationClaimPollMs) {
            this.exclusiveMutationClaimPollMs = timing.exclusiveMutationClaimPollMs;
            if (this.engine?.getState() === "running" && !this.isClosing()) {
                this.stopExclusiveMutationClaimPolling();
                this.startExclusiveMutationClaimPolling();
            }
        }
    }
    get lastSyncSummary() {
        return this.lastSummary;
    }
    isClosed() {
        return this.lifecycle === "closed";
    }
    isClosing() {
        return this.lifecycle !== "open";
    }
    getEngineState() {
        return this.engine?.getState();
    }
    getResolvedStoreId() {
        return this.client.getResolvedStoreId?.({
            agentId: this.key
        });
    }
    async awaitTeardown() {
        if (this.teardownPromise !== void 0) {
            await this.teardownPromise;
        }
    }
    getSyncState() {
        return this.mirrorSyncState;
    }
    markMirror(state) {
        if (this.mirrorSyncState !== "synced") {
            this.mirrorSyncState = state;
            if (state === "sync-failed") {
                this.mirrorSyncFailedAtMs = Date.now();
            }
        }
        this.releaseInitialRoundWaiters();
    }
    markMirrorFromSharedIndex() {
        const index = this.index;
        const appliedMs = index === void 0 ? void 0 : parseMetaMs(index.getMeta(META_LAST_LISTING_APPLIED_MS)) ?? parseMetaMs(index.getMeta(META_LAST_COMPLETE_ROUND_MS));
        const failedAtMs = this.mirrorSyncFailedAtMs;
        const answersThisSession = appliedMs !== void 0 && (this.mirrorSyncState !== "sync-failed" || failedAtMs === void 0 || appliedMs > failedAtMs);
        if (answersThisSession) {
            this.markMirror("synced");
        } else {
            this.releaseInitialRoundWaiters();
        }
    }
    async awaitInitialRound() {
        if (this.getSyncState() !== "opening") {
            return;
        }
        await this.initialRoundWaitersReleased;
    }
    async awaitOpenSettlement(awaitInitialRound) {
        const syncing = awaitInitialRound ? this.syncing : void 0;
        if (syncing !== void 0) {
            const abandoned = this.activeRoundAbandoned;
            await (abandoned !== void 0 ? Promise.race([
                syncing,
                abandoned
            ]) : syncing);
        }
        await this.awaitTeardown();
    }
    async forceSync() {
        if (this.isClosing()) {
            return void 0;
        }
        if (this.engine?.getState() !== "running" && this.failureStreakStretchMs() > 0) {
            this.passiveCatchUpSuppressions += 1;
            try {
                await this.recontendForLock();
            } finally{
                this.passiveCatchUpSuppressions -= 1;
            }
        }
        if (this.engine?.getState() !== "running") {
            return void 0;
        }
        this.clearSyncTimer();
        this.resetIdleStreak();
        return await this.runSync({
            kind: "explicit",
            schedule: "explicit"
        });
    }
    async syncPath(relPath, options2) {
        return await this.syncPaths([
            relPath
        ], options2);
    }
    async syncPaths(relPaths, options2) {
        if (this.isClosing()) {
            return void 0;
        }
        const engine = this.engine;
        if (engine === void 0) {
            return void 0;
        }
        const state = engine.getState();
        if (state === "running") {
            if (this.skipDeniedSyncRound()) {
                return void 0;
            }
            if (!this.guardedPathsSafe({
                invalidateOnFailure: true
            })) {
                return void 0;
            }
            this.keepPathLaneOffIdleStreak();
            try {
                const summary = await engine.syncPaths(relPaths);
                this.emitSyncMetrics(summary, "explicit");
                return summary;
            } catch (error3) {
                this.emitThrownSyncMetrics(error3, "explicit");
                this.invalidateRetiredRoot(error3);
                this.invalidateClosedIndex(error3);
                return void 0;
            }
        }
        if (state !== "passive") {
            return void 0;
        }
        return await this.awaitLockHolderPathSync(relPaths, options2);
    }
    async pullPaths(relPaths) {
        if (this.isClosing()) {
            return {
                kind: "unavailable"
            };
        }
        const engine = this.engine;
        if (engine === void 0) {
            return {
                kind: "unavailable"
            };
        }
        const state = engine.getState();
        if (state === "passive") {
            return {
                kind: "holder-owns-fetch"
            };
        }
        if (state !== "running") {
            return {
                kind: "unavailable"
            };
        }
        if (this.skipDeniedSyncRound()) {
            return {
                kind: "unavailable"
            };
        }
        if (!this.guardedPathsSafe({
            invalidateOnFailure: true
        })) {
            return {
                kind: "failed"
            };
        }
        this.keepPathLaneOffIdleStreak();
        try {
            const summary = await engine.pullPaths(relPaths);
            this.emitSyncMetrics(summary, "explicit");
            return pullPathsAttemptFromRound(summary, engine.getState());
        } catch (error3) {
            this.emitThrownSyncMetrics(error3, "explicit");
            this.invalidateRetiredRoot(error3);
            this.invalidateClosedIndex(error3);
            return {
                kind: "failed"
            };
        }
    }
    async refreshPaths(relPaths) {
        if (this.isClosing()) {
            return {
                kind: "unavailable"
            };
        }
        const engine = this.engine;
        if (engine === void 0) {
            return {
                kind: "unavailable"
            };
        }
        if (this.pathRefreshMinIntervalMs > 0 && this.lastPathRefreshAdmittedAtMs !== void 0) {
            const sinceMs = monotonicNowMs() - this.lastPathRefreshAdmittedAtMs;
            if (sinceMs < this.pathRefreshMinIntervalMs) {
                return {
                    kind: "throttled",
                    retryAfterMs: this.pathRefreshMinIntervalMs - sinceMs
                };
            }
        }
        const state = engine.getState();
        if (state === "passive") {
            this.lastPathRefreshAdmittedAtMs = monotonicNowMs();
            return await this.leaveRefreshToHolder(relPaths);
        }
        if (state !== "running") {
            return {
                kind: "unavailable"
            };
        }
        if (this.skipDeniedSyncRound()) {
            return {
                kind: "unavailable"
            };
        }
        if (!this.guardedPathsSafe({
            invalidateOnFailure: true
        })) {
            return {
                kind: "failed"
            };
        }
        this.lastPathRefreshAdmittedAtMs = monotonicNowMs();
        try {
            const pushed = await engine.syncPaths(relPaths, {
                lane: "path-yield"
            });
            this.emitSyncMetrics(pushed, "explicit");
            const pullable = this.pathsWithoutUnjournaledLocalDeletion(relPaths);
            if (pullable.length === 0) {
                return {
                    kind: "ran",
                    pushed: pushed.filesPushed,
                    pulled: 0,
                    listingComplete: true,
                    errors: pushed.errors.length
                };
            }
            const pulled = await engine.pullPaths(pullable, {
                lane: "path-yield"
            });
            this.emitSyncMetrics(pulled, "explicit");
            const after = pullPathsAttemptFromRound(pulled, engine.getState());
            if (after.kind !== "ran") {
                return await this.leaveRefreshToHolder(relPaths);
            }
            return {
                kind: "ran",
                pushed: pushed.filesPushed,
                pulled: pulled.filesPulled,
                listingComplete: pulled.listingComplete,
                errors: pushed.errors.length + pulled.errors.length
            };
        } catch (error3) {
            this.emitThrownSyncMetrics(error3, "explicit");
            this.invalidateRetiredRoot(error3);
            this.invalidateClosedIndex(error3);
            return {
                kind: "failed"
            };
        }
    }
    async leaveRefreshToHolder(relPaths) {
        const changed = [];
        for (const relPath of relPaths){
            if (await this.hasUnsyncedLocalBytes(relPath)) {
                changed.push(relPath);
            }
        }
        const pushRequested = changed.length > 0 && await enqueuePathSyncRequest({
            filesDir: this.filesDir,
            relPaths: changed,
            kind: "push"
        }) !== void 0;
        const pullRequested = await enqueuePathSyncRequest({
            filesDir: this.filesDir,
            relPaths,
            kind: "pull"
        }) !== void 0;
        return {
            kind: "holder-owns-fetch",
            pushRequested,
            pullRequested
        };
    }
    statMirrorPath(relPath) {
        try {
            const canonical = normalizeRelPath(relPath);
            return {
                canonical,
                stat: safeStatChild({
                    base: this.filesDir,
                    relPath: canonical
                })
            };
        } catch  {
            return void 0;
        }
    }
    async hasUnsyncedLocalBytes(relPath) {
        const mirror = this.statMirrorPath(relPath);
        if (mirror === void 0 || mirror.stat.kind !== "file") {
            return false;
        }
        const lookup3 = this.getIndexEntry(mirror.canonical);
        if (lookup3.kind === "miss") {
            return true;
        }
        if (lookup3.kind !== "hit") {
            return false;
        }
        if (lookup3.entry.size !== mirror.stat.entry.size) {
            return true;
        }
        try {
            const { sha } = await streamHashFileNoFollow({
                absPath: mirror.stat.entry.absPath,
                maxBytes: this.maxFileSizeBytes ?? DEFAULT_MAX_FILE_SIZE_BYTES,
                expectedDev: mirror.stat.entry.dev,
                expectedIno: mirror.stat.entry.ino
            });
            return sha !== lookup3.entry.lastSyncedSha;
        } catch  {
            return false;
        }
    }
    pathsWithoutUnjournaledLocalDeletion(relPaths) {
        if (this.syncMode === "readOnly") {
            return relPaths;
        }
        return relPaths.filter((relPath)=>!this.hasUnjournaledLocalDeletion(relPath));
    }
    hasUnjournaledLocalDeletion(relPath) {
        const mirror = this.statMirrorPath(relPath);
        if (mirror === void 0 || mirror.stat.kind !== "absent") {
            return false;
        }
        const lookup3 = this.getIndexEntry(mirror.canonical);
        return lookup3.kind === "hit" && lookup3.entry.state !== "tombstoned" && lookup3.entry.lastSeenEtag !== void 0 && lookup3.entry.lastSeenEtag.length > 0;
    }
    getIndexEntry(relPath) {
        const index = this.index;
        if (index === void 0) {
            return {
                kind: "unavailable"
            };
        }
        if (index.isClosed()) {
            this.emitIndexLookupClosed();
            return {
                kind: "unavailable",
                reason: "index_closed"
            };
        }
        if (this.isClosing()) {
            return {
                kind: "unavailable"
            };
        }
        try {
            const entry = index.getFile(normalizeRelPath(relPath));
            return entry === void 0 ? {
                kind: "miss"
            } : {
                kind: "hit",
                entry
            };
        } catch (error3) {
            if (isClosedIndexError(error3)) {
                this.emitIndexLookupClosed();
                return {
                    kind: "unavailable",
                    reason: "index_closed"
                };
            }
            return {
                kind: "unavailable"
            };
        }
    }
    setConversationActivity(state) {
        if (this.isClosing() || this.conversationActivity === state) {
            return;
        }
        this.conversationActivity = state;
        this.emitSessionState();
        if (state === "idle") {
            if (this.pendingScheduleKind !== "backoff") {
                this.clearSyncTimer();
            }
            return;
        }
        if (this.engine?.getState() !== "running") {
            return;
        }
        this.wake();
    }
    wake() {
        if (this.isClosing()) {
            return;
        }
        this.clearSyncTimer();
        this.resetIdleStreak();
        void this.runSync({
            schedule: "explicit"
        });
    }
    setPeriodicScheduler(scheduler) {
        if (scheduler === this.periodicScheduler) {
            return;
        }
        const dueAtMs = this.periodicDueAtMs;
        const armed = this.periodicSyncArmed;
        const claimDueAtMs = this.exclusiveMutationClaimDueAtMs;
        const claimArmed = this.exclusiveMutationClaimArmed;
        this.engine?.setPeriodicScheduler(scheduler);
        if (this.ownsPeriodicScheduler) {
            this.periodicScheduler.dispose();
            this.ownsPeriodicScheduler = false;
        } else {
            this.periodicScheduler.cancel(this.periodicSyncHandle);
            this.periodicScheduler.cancel(this.exclusiveMutationClaimHandle);
        }
        this.periodicScheduler = scheduler;
        if (!armed || dueAtMs === void 0 || this.isClosing()) {
            this.periodicSyncArmed = false;
            this.periodicDueAtMs = void 0;
        } else {
            this.periodicSyncArmed = true;
            this.periodicScheduler.schedule(this.periodicSyncHandle, dueAtMs, this.onPeriodicSyncDue, this);
        }
        if (!claimArmed || claimDueAtMs === void 0 || this.isClosing()) {
            this.exclusiveMutationClaimArmed = false;
            this.exclusiveMutationClaimDueAtMs = void 0;
            return;
        }
        this.exclusiveMutationClaimArmed = true;
        this.periodicScheduler.schedule(this.exclusiveMutationClaimHandle, claimDueAtMs, this.onExclusiveMutationClaimDue, this);
    }
    async recontendForLock() {
        if (this.isClosing() || this.engine?.getState() !== "passive") {
            return;
        }
        await this.engine.unpause();
    }
    holdPeriodicSync(held) {
        if (this.periodicSyncHeld === held) {
            return;
        }
        this.periodicSyncHeld = held;
        if (held) {
            if (this.pendingScheduleKind === "periodic" || this.pendingScheduleKind === "idle") {
                this.clearSyncTimer();
            }
            return;
        }
        if (!this.isClosing() && this.syncing === void 0 && !this.syncScheduleArmed() && !this.versionProbeInFlight) {
            this.scheduleSync();
        }
    }
    async park() {
        if (this.isClosing()) {
            return;
        }
        this.clearSyncTimer();
        await this.engine?.pause();
        this.clearSyncTimer();
    }
    async unpark() {
        const engine = this.engine;
        if (this.isClosing() || engine === void 0 || engine.getState() !== "paused") {
            return;
        }
        await engine.unpause();
        await this.awaitOpenSettlement(true);
    }
    async close(options2) {
        await this.beginTeardown({
            kind: "close",
            options: options2
        });
    }
    async initialize() {
        this.assertPathsSafe();
        const index = this.openIndex(this.paths.indexPath);
        this.index = index;
        const rootId = ensureAgentStoreRootId(this.rootIdPath);
        let engine;
        try {
            if (rootId === void 0) {
                this.onEngineWarn("agent store root id unavailable; deletion fence disabled", void 0);
            } else {
                const outcome = index.bindRootId(rootId);
                this.boundRootId = rootId;
                if (outcome === "rebound") {
                    this.onEngineWarn(`agent store root id rebound to ${this.boundRootId}; scan deletion disarmed until a clean round`, void 0);
                }
            }
            engine = new AgentStoreSyncEngine({
                agentId: this.key,
                filesDir: this.paths.filesDir,
                tmpDir: this.paths.tmpDir,
                client: this.client,
                index,
                queues: this.queues,
                syncMode: this.syncMode,
                validatePresignedUrl: this.validatePresignedUrl,
                blobTransfer: this.blobTransfer,
                fetch: this.fetchImpl,
                lockProvider: this.lockProvider,
                ...this.boundRootId !== void 0 ? {
                    rootIdFence: {
                        rootIdPath: this.rootIdPath,
                        expected: this.boundRootId,
                        enabled: this.storeRootIdFence
                    }
                } : {},
                initialState: "paused",
                indexPath: this.engineIndexPath,
                maxFileSizeBytes: this.maxFileSizeBytes,
                blobIdleTimeoutMs: this.blobIdleTimeoutMs,
                blobConnectTimeoutMs: this.blobConnectTimeoutMs,
                resumeLockCallTimeoutMs: this.unwindHardCapMs(),
                shouldRelinquishLockLost: ()=>!this.isClosing(),
                passiveRetryIntervalMs: this.passiveRetryIntervalMs,
                passiveIndexPollIntervalMs: this.passiveIndexPollIntervalMs,
                periodicScheduler: this.periodicScheduler,
                periodicSchedulerGroup: this,
                multipartUploadThresholdBytes: this.multipartUploadThresholdBytes,
                multipartPartSizeBytes: this.multipartPartSizeBytes,
                multipartPresignWindowSize: this.multipartPresignWindowSize,
                pullPresignWindowSize: this.pullPresignWindowSize,
                listWalkConcurrency: this.listWalkConcurrency,
                multipartCompleteMaxAttempts: this.multipartCompleteMaxAttempts,
                multipartMaxRestarts: this.multipartMaxRestarts,
                multipartMaxConflictRenames: this.multipartMaxConflictRenames,
                multipartMaxExpiryRefreshes: this.multipartMaxExpiryRefreshes,
                pushOrder: this.pushOrder,
                onPassiveIndexUpdated: (event)=>{
                    this.markMirrorFromSharedIndex();
                    safeInvokeCallback(this.onPassiveIndexUpdatedCallback, event);
                },
                onStateChanged: (event)=>this.onEngineStateChanged(event),
                onRoundBodyStarted: (roundOwner)=>{
                    this.noteRoundBodyStarted(roundOwner);
                },
                onRoundProgress: ()=>{
                    const body = this.roundBodyStarted;
                    if (body === void 0 || body.generation !== this.roundGeneration) {
                        return;
                    }
                    this.roundProgress = {
                        at: monotonicNowMs(),
                        wallAt: Date.now(),
                        generation: body.generation
                    };
                },
                onWarn: (message, error3)=>this.onEngineWarn(message, error3),
                tombstoneFullRefreshRounds: this.tombstoneFullRefreshRounds,
                tombstoneFullRefreshIntervalMs: this.tombstoneFullRefreshIntervalMs,
                tombstonePruneSlackMs: this.tombstonePruneSlackMs,
                localStatFastPath: this.localStatFastPath,
                localStatFastPathAuditRate: this.localStatFastPathAuditRate,
                localStatRacyMarginMs: this.localStatRacyMarginMs,
                onStatFastPath: (result)=>{
                    this.metricsEmitter?.recordStatFastPath?.({
                        agentId: this.key,
                        result
                    });
                },
                onMultipartAbandoned: (event)=>{
                    this.metricsEmitter?.recordMultipartAbandoned?.({
                        agentId: this.key,
                        ...event
                    });
                },
                remoteVersionEnabled: this.remoteVersionEnabled,
                versionFullListIntervalMs: this.versionFullListIntervalMs,
                versionAuditSampleRate: this.versionAuditSampleRate
            });
            this.engine = engine;
            await engine.unpause();
            if (this.abandonRequested) {
                this.markLockUnhealthy();
            }
            this.startResumeDetector();
        } catch (error3) {
            await this.disposeConstructedResources(engine, index);
            throw error3;
        }
    }
    startResumeDetector() {
        if (this.resumeGapThresholdMs <= 0 || this.resumeTimer !== void 0) {
            return;
        }
        this.lastResumeWallMs = Date.now();
        this.lastResumeMonoMs = performance.now();
        this.resumeTimer = setInterval(()=>{
            const wallNow = Date.now();
            const monoNow = performance.now();
            const wallDeltaMs = wallNow - this.lastResumeWallMs;
            const monoDeltaMs = monoNow - this.lastResumeMonoMs;
            this.lastResumeWallMs = wallNow;
            this.lastResumeMonoMs = monoNow;
            const monoGapMs = wallDeltaMs - monoDeltaMs;
            const latenessMs = wallDeltaMs - RESUME_CHECK_INTERVAL_MS;
            const gapMs = this.resumeDetectionMode === "timer_lateness" ? Math.max(monoGapMs, latenessMs) : monoGapMs;
            if (gapMs <= this.resumeGapThresholdMs) {
                return;
            }
            if (this.isClosing()) {
                return;
            }
            if (this.resumeHandling !== void 0) {
                this.pendingResumeGapMs = Math.max(this.pendingResumeGapMs ?? 0, gapMs);
                return;
            }
            this.resumeHandling = this.drainResumeRecovery(gapMs).finally(()=>{
                this.resumeHandling = void 0;
            });
        }, RESUME_CHECK_INTERVAL_MS);
        this.resumeTimer.unref?.();
    }
    stopResumeDetector() {
        if (this.resumeTimer !== void 0) {
            clearInterval(this.resumeTimer);
            this.resumeTimer = void 0;
        }
    }
    async drainResumeRecovery(initialGapMs) {
        let nextGapMs = initialGapMs;
        while(nextGapMs !== void 0 && !this.isClosing()){
            const gapMs = nextGapMs;
            this.pendingResumeGapMs = void 0;
            await this.handleResume(gapMs);
            nextGapMs = this.pendingResumeGapMs;
        }
    }
    async handleResume(gapMs) {
        if (this.isClosing()) {
            return;
        }
        this.onEngineWarn(`resume detected after ~${Math.round(gapMs)}ms wall-clock gap`, void 0);
        this.emitResumeDetected(gapMs);
        this.consecutiveTimeoutFailures = 0;
        this.consecutiveRoundFailures = 0;
        this.reconcileFailureStreakAfterResume();
        this.resumeRecoveryInProgress = true;
        try {
            const abandonedUnhealthy = await this.drainRoundsForResume();
            if (this.isClosing()) {
                return;
            }
            if (abandonedUnhealthy) {
                this.pendingRelinquishCause = "resume_abandon";
                await awaitBounded(this.relinquishEngineLock(), this.unwindHardCapMs());
            } else {
                const engine2 = this.engine;
                if (engine2 !== void 0) {
                    await awaitBounded(engine2.revalidateLockOwnership().catch(()=>void 0), this.unwindHardCapMs());
                }
            }
            if (this.isClosing()) {
                return;
            }
            const engine = this.engine;
            if (engine?.getState() === "passive" && !engine.hasAbandonedInFlightRounds()) {
                await awaitBounded(engine.unpause().catch(()=>void 0), this.unwindHardCapMs());
            }
            this.wake();
        } finally{
            this.resumeRecoveryInProgress = false;
        }
    }
    async drainRoundsForResume() {
        let sawTrackedRound = false;
        let abandonedUnhealthy = false;
        let laps = 0;
        while(!this.isClosing()){
            if (this.syncing === void 0) {
                break;
            }
            if (laps >= _AgentStoreSyncSession.RESUME_DRAIN_MAX_LAPS) {
                this.unstickAbandonedRoundWaiters({
                    unjamChain: true
                });
                this.resumeBackoffResetPending = false;
                this.activeRoundResumeRecoveryPending = false;
                this.syncBackoff.recordSuccess();
                return true;
            }
            laps += 1;
            sawTrackedRound = true;
            this.activeRoundResumeRecoveryPending = true;
            this.abortActiveRound("host resumed from suspend");
            this.engine?.abortActiveRound(new AgentStoreSyncError({
                code: "round_aborted",
                message: "host resumed from suspend"
            }));
            this.resumeBackoffResetPending = true;
            const unwind = await awaitBounded(this.syncing, this.unwindHardCapMs());
            if (this.isClosing()) {
                this.resumeBackoffResetPending = false;
                this.unstickAbandonedRoundWaiters({
                    unjamChain: unwind === "timeout"
                });
                return unwind === "timeout" || abandonedUnhealthy;
            }
            if (unwind === "timeout") {
                this.unstickAbandonedRoundWaiters({
                    unjamChain: true
                });
                this.resumeBackoffResetPending = false;
                this.activeRoundResumeRecoveryPending = false;
                this.syncBackoff.recordSuccess();
                abandonedUnhealthy = true;
            }
        }
        if (this.isClosing()) {
            return abandonedUnhealthy;
        }
        if (!sawTrackedRound) {
            this.engine?.abortActiveRound(new AgentStoreSyncError({
                code: "round_aborted",
                message: "host resumed from suspend"
            }));
            if (await this.recoverWedgedScopedRound()) {
                abandonedUnhealthy = true;
            }
            if (this.isClosing()) {
                return abandonedUnhealthy;
            }
            this.syncBackoff.recordSuccess();
            return abandonedUnhealthy;
        }
        this.engine?.abortActiveRound(new AgentStoreSyncError({
            code: "round_aborted",
            message: "host resumed from suspend"
        }));
        if (await this.recoverWedgedScopedRound()) {
            abandonedUnhealthy = true;
        }
        return abandonedUnhealthy;
    }
    async recoverWedgedScopedRound() {
        const engine = this.engine;
        if (engine === void 0) {
            return false;
        }
        if (this.isClosing()) {
            if (!engine.hasLiveRoundWork()) {
                return false;
            }
            engine.releaseWedgedRoundChain();
            this.markLockUnhealthy();
            return true;
        }
        const settled = await awaitBounded(engine.awaitInFlightRoundsSettled(), this.unwindHardCapMs());
        if (settled === "settled") {
            return false;
        }
        engine.releaseWedgedRoundChain();
        this.markLockUnhealthy();
        return true;
    }
    resumeRecoveryTeardownBudgetMs() {
        return this.unwindHardCapMs() * (_AgentStoreSyncSession.RESUME_DRAIN_MAX_LAPS + 1);
    }
    async beginTeardown(args) {
        if (this.lifecycle === "closed") {
            return;
        }
        if (this.teardownPromise !== void 0) {
            if (args.kind === "invalidate" && args.reason !== void 0) {
                safeInvokeCallback(this.onInvalidatedCallback, args.reason);
            }
            return await this.teardownPromise;
        }
        this.lifecycle = "closing";
        this.releaseInitialRoundWaiters();
        this.engine?.markClosing();
        if (args.options.flush) {
            this.engine?.markCloseFlushPending();
        }
        this.teardownPromise = this.teardownInternal(args.options);
        if (args.kind === "invalidate" && args.reason !== void 0) {
            safeInvokeCallback(this.onInvalidatedCallback, args.reason);
        }
        try {
            await this.teardownPromise;
        } finally{
            this.lifecycle = "closed";
        }
    }
    async teardownInternal(options2) {
        this.clearSyncTimer();
        this.clearFailureStreakRestoreTimer();
        if (this.ownsPeriodicScheduler) {
            this.periodicScheduler.dispose();
            this.ownsPeriodicScheduler = false;
        }
        this.stopPathSyncRequestPolling();
        this.stopResumeDetector();
        this.abortActiveRound("session closing");
        this.engine?.abortActiveRound(new AgentStoreSyncError({
            code: "round_aborted",
            message: "session closing"
        }));
        if (this.pathSyncRequestDrain !== void 0) {
            await awaitBounded(this.pathSyncRequestDrain.catch(()=>void 0), this.unwindHardCapMs());
        }
        const resumeHandling = this.resumeHandling;
        if (resumeHandling !== void 0) {
            await awaitBounded(resumeHandling.catch(()=>void 0), this.resumeRecoveryTeardownBudgetMs());
        }
        let inFlightSettled = true;
        let inFlightWedged = false;
        if (this.syncing !== void 0) {
            const settled = await awaitBounded(this.syncing, this.unwindHardCapMs());
            inFlightSettled = settled === "settled";
            inFlightWedged = settled === "timeout";
        }
        if (inFlightSettled && this.engine?.hasInFlightRounds() === true) {
            const settled = await awaitBounded(this.engine.awaitInFlightRoundsSettled(), this.unwindHardCapMs());
            if (settled === "timeout") {
                inFlightSettled = false;
                inFlightWedged = true;
            }
        }
        const engine = this.engine;
        const index = this.index;
        this.engine = void 0;
        this.index = void 0;
        if (engine === void 0) {
            this.closeReleasedLock = true;
            await this.closeIndexSafely(index);
            return;
        }
        this.disposingEngine = engine;
        try {
            await this.finishDetachedTeardown(engine, index, options2, inFlightSettled, inFlightWedged);
        } finally{
            if (this.disposingEngine === engine) {
                this.disposingEngine = void 0;
            }
        }
    }
    async finishDetachedTeardown(engine, index, options2, inFlightSettled, inFlightWedged) {
        let boundedForOrphansOnly = false;
        if (inFlightSettled && engine.hasAbandonedInFlightRounds()) {
            inFlightSettled = false;
            boundedForOrphansOnly = true;
        }
        if (inFlightWedged) {
            engine.releaseWedgedRoundChain();
            this.markLockUnhealthy(engine);
        }
        const disposal = this.disposeEngine(engine, options2, inFlightWedged);
        if (inFlightSettled) {
            await disposal;
            this.noteIfLockReleased(engine);
            await this.closeIndexSafely(index);
            return;
        }
        if (boundedForOrphansOnly) {
            const timeoutMs = this.syncRoundUnwindTimeoutMs;
            let timer2;
            const raced = await new Promise((resolve36)=>{
                let done = false;
                const finish = (value)=>{
                    if (done) {
                        return;
                    }
                    done = true;
                    if (timer2 !== void 0) {
                        clearTimeout(timer2);
                    }
                    resolve36(value);
                };
                if (timeoutMs > 0) {
                    timer2 = setTimeout(()=>finish("timeout"), timeoutMs);
                    timer2.unref?.();
                }
                void disposal.then(()=>finish("disposed"), ()=>finish("disposed"));
                void engine.whenAbandonedInFlightRoundsIdle().then(()=>finish("orphans_idle"));
            });
            if (raced === "disposed") {
                if (engine.hasAbandonedInFlightRounds()) {
                    this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0);
                    this.releaseRootPinWhenQuiet(engine, Promise.resolve(), index);
                    return;
                }
                this.noteIfLockReleased(engine);
                await this.closeIndexSafely(index);
                return;
            }
            if (raced === "orphans_idle") {
                await disposal;
                this.noteIfLockReleased(engine);
                await this.closeIndexSafely(index);
                return;
            }
            this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0);
            this.markLockUnhealthy(engine);
            this.watchDisposalForLockRelease(disposal, engine);
            this.releaseRootPinWhenQuiet(engine, disposal, index);
            return;
        }
        const outcome = await awaitBounded(disposal, this.syncRoundUnwindTimeoutMs);
        if (outcome === "settled") {
            if (engine.hasAbandonedInFlightRounds()) {
                this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0);
                this.releaseRootPinWhenQuiet(engine, Promise.resolve(), index);
                return;
            }
            this.noteIfLockReleased(engine);
            await this.closeIndexSafely(index);
            return;
        }
        if (outcome === "timeout") {
            this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0);
            this.markLockUnhealthy(engine);
            this.watchDisposalForLockRelease(disposal, engine);
            this.releaseRootPinWhenQuiet(engine, disposal, index);
        }
    }
    noteIfLockReleased(engine) {
        if (!engine.releasedLockOnDispose()) {
            return;
        }
        this.closeReleasedLock = true;
        const waiters = this.lockReleasedWaiters.splice(0);
        for (const waiter of waiters){
            waiter();
        }
    }
    whenAbandonedLockReleased() {
        if (!this.holdsAbandonedLock()) {
            return Promise.resolve();
        }
        return new Promise((resolve36)=>{
            this.lockReleasedWaiters.push(resolve36);
        });
    }
    watchDisposalForLockRelease(disposal, engine) {
        void disposal.then(()=>{
            this.noteIfLockReleased(engine);
        }, ()=>{
            this.noteIfLockReleased(engine);
        });
    }
    async closeIndexSafely(index) {
        if (index !== void 0) {
            try {
                index.close();
            } catch  {}
        }
        await this.releaseRootPin();
    }
    async releaseRootPin() {
        const pin = this.rootPin;
        this.rootPin = void 0;
        await pin?.release();
    }
    releaseRootPinWhenQuiet(engine, disposal, index) {
        const pin = this.rootPin;
        this.rootPin = void 0;
        const release = pin?.release.bind(pin);
        if (pin !== void 0) {
            pin.release = ()=>Promise.resolve();
        }
        void (async ()=>{
            try {
                await disposal;
            } catch  {}
            try {
                await engine.whenAbandonedInFlightRoundsIdle();
                if (index !== void 0) {
                    try {
                        index.close();
                    } catch  {}
                }
            } catch  {}
            await release?.();
        })();
    }
    async disposeEngine(engine, options2, deferLockRelease = false) {
        if (options2.flush && this.guardedPathsSafe({
            invalidateOnFailure: false
        })) {
            try {
                await engine.dispose({
                    deferLockRelease
                });
            } catch (error3) {
                safeInvokeCallback(this.onSyncErrorCallback, error3);
            }
            return;
        }
        try {
            await engine.pause();
        } catch  {}
        try {
            await engine.dispose({
                deferLockRelease
            });
        } catch (error3) {
            safeInvokeCallback(this.onSyncErrorCallback, error3);
        }
    }
    abortActiveRound(reason) {
        const cooperative = isCooperativeRoundAbortMessage(reason);
        this.activeRoundAbortController?.abort(new AgentStoreSyncError({
            code: "round_aborted",
            message: reason,
            ...cooperative ? {} : {
                timeoutClass: "round"
            }
        }));
    }
    async disposeConstructedResources(engine, index) {
        this.stopResumeDetector();
        if (engine !== void 0) {
            try {
                await engine.pause();
            } catch  {}
            try {
                await engine.dispose();
            } catch (error3) {
                safeInvokeCallback(this.onSyncErrorCallback, error3);
            }
        }
        try {
            index.close();
        } catch  {}
        await this.releaseRootPin();
        this.engine = void 0;
        this.index = void 0;
    }
    onEngineStateChanged(event) {
        safeInvokeCallback(this.onStateChangedCallback, event);
        if (event.toState === "passive" && event.reason === "lock_lost") {
            const cause = this.pendingRelinquishCause ?? "engine";
            this.pendingRelinquishCause = void 0;
            this.emitLockRelinquished(cause);
        }
        if (event.toState === "passive" && event.heldBy !== void 0) {
            this.emitLockContended(event.heldBy);
        }
        if (event.toState === "passive") {
            this.markMirrorFromSharedIndex();
        }
        if (event.toState === "running" && !this.isClosing()) {
            this.clearFailureStreakStretch();
            this.restorePassiveRetryInterval();
            this.emitSessionState();
            this.startPathSyncRequestPolling();
            this.clearSyncTimer();
            if (event.fromState === "passive") {
                this.consecutiveRoundFailures = 0;
                this.resetIdleStreak();
                if (this.passiveCatchUpSuppressions === 0) {
                    void this.runSync({
                        schedule: "explicit"
                    });
                }
            } else {
                void this.runSync();
            }
            return;
        }
        this.stopPathSyncRequestPolling();
    }
    async awaitLockHolderPathSync(relPaths, options2) {
        const requestId = await enqueuePathSyncRequest({
            filesDir: this.filesDir,
            relPaths
        });
        if (requestId === void 0) {
            return void 0;
        }
        const timeoutMs = options2?.passiveWaitTimeoutMs;
        const waitStartedAtMs = Date.now();
        const waitResult = await waitForPathSyncRequestAck({
            filesDir: this.filesDir,
            requestId,
            pollMs: this.pathSyncRequestWaitPollMs,
            shouldAbort: ()=>{
                if (this.isClosing()) {
                    return true;
                }
                return this.engine?.getState() === "running" || timeoutMs !== void 0 && Date.now() - waitStartedAtMs >= timeoutMs;
            }
        });
        if (this.isClosing()) {
            return void 0;
        }
        if (this.engine?.getState() === "running") {
            if (this.skipDeniedSyncRound()) {
                return void 0;
            }
            if (!this.guardedPathsSafe({
                invalidateOnFailure: true
            })) {
                return void 0;
            }
            this.keepPathLaneOffIdleStreak();
            try {
                const summary = await this.engine.syncPaths(relPaths);
                ackPathSyncRequests({
                    filesDir: this.filesDir,
                    requestIds: [
                        requestId
                    ]
                });
                this.emitSyncMetrics(summary, "explicit");
                return summary;
            } catch (error3) {
                this.emitThrownSyncMetrics(error3, "explicit");
                this.invalidateRetiredRoot(error3);
                this.invalidateClosedIndex(error3);
                return void 0;
            }
        }
        if (waitResult !== "acked") {
            return void 0;
        }
        return {
            ...emptySummary("path"),
            walkMs: 0,
            hashMs: 0
        };
    }
    startExclusiveMutationClaimPolling() {
        if (this.lockOwnerId === void 0 || this.exclusiveMutationClaimArmed || this.isClosing()) {
            return;
        }
        this.armExclusiveMutationClaim();
        void this.checkExclusiveMutationClaim();
    }
    armExclusiveMutationClaim(previousDueAtMs) {
        this.exclusiveMutationClaimArmed = true;
        this.exclusiveMutationClaimDueAtMs = nextRepeatingDueAtMs({
            previousDueAtMs,
            intervalMs: this.exclusiveMutationClaimPollMs
        });
        this.periodicScheduler.schedule(this.exclusiveMutationClaimHandle, this.exclusiveMutationClaimDueAtMs, this.onExclusiveMutationClaimDue, this);
    }
    stopExclusiveMutationClaimPolling() {
        if (!this.exclusiveMutationClaimArmed) {
            return;
        }
        this.periodicScheduler.cancel(this.exclusiveMutationClaimHandle);
        this.exclusiveMutationClaimArmed = false;
        this.exclusiveMutationClaimDueAtMs = void 0;
    }
    async checkExclusiveMutationClaim() {
        const active = this.exclusiveMutationClaimCheck;
        if (active !== void 0) {
            await active;
            return;
        }
        const operation = this.checkExclusiveMutationClaimInternal();
        this.exclusiveMutationClaimCheck = operation;
        try {
            await operation;
        } catch (error3) {
            this.onEngineWarn("exclusive mutation claim check failed", error3);
        } finally{
            if (this.exclusiveMutationClaimCheck === operation) {
                this.exclusiveMutationClaimCheck = void 0;
            }
        }
    }
    async checkExclusiveMutationClaimInternal() {
        const lockOwnerId = this.lockOwnerId;
        if (lockOwnerId === void 0 || this.isClosing() || this.engine?.getState() !== "running") {
            return;
        }
        const claimOwner = await readAgentStoreExclusiveMutationClaimOwner({
            filesDir: this.filesDir
        });
        if (claimOwner === void 0 || claimOwner.windowId === lockOwnerId) {
            return;
        }
        const summary = await this.forceSync();
        if (summary === void 0 || summary.errors.length > 0 || this.isClosing() || this.engine?.getState() !== "running") {
            return;
        }
        const currentClaimOwner = await readAgentStoreExclusiveMutationClaimOwner({
            filesDir: this.filesDir
        });
        if (currentClaimOwner === void 0 || currentClaimOwner.windowId === lockOwnerId) {
            return;
        }
        this.pendingRelinquishCause = "exclusive_claim";
        await this.relinquishEngineLock();
    }
    startPathSyncRequestPolling() {
        if (this.pathSyncRequestTimer !== void 0 || this.isClosing()) {
            return;
        }
        this.startExclusiveMutationClaimPolling();
        this.pathSyncRequestFailureDelayMs = 0;
        this.pathSyncRequestRetryNotBeforeMs = 0;
        if (this.pathSyncRequestPollMs > 0) {
            this.pathSyncRequestTimer = setInterval(()=>{
                void this.drainPathSyncRequests();
            }, this.pathSyncRequestPollMs);
            this.pathSyncRequestTimer.unref?.();
        }
        void this.drainPathSyncRequests();
    }
    stopPathSyncRequestPolling() {
        this.stopExclusiveMutationClaimPolling();
        if (this.pathSyncRequestTimer !== void 0) {
            clearInterval(this.pathSyncRequestTimer);
            this.pathSyncRequestTimer = void 0;
        }
    }
    notePathSyncRequestDrainFailure() {
        const baseMs = Math.max(this.pathSyncRequestPollMs, 100);
        this.pathSyncRequestFailureDelayMs = this.pathSyncRequestFailureDelayMs === 0 ? baseMs : Math.min(this.pathSyncRequestFailureDelayMs * 2, 3e4);
        this.pathSyncRequestRetryNotBeforeMs = Date.now() + this.pathSyncRequestFailureDelayMs;
    }
    clearPathSyncRequestDrainFailure() {
        this.pathSyncRequestFailureDelayMs = 0;
        this.pathSyncRequestRetryNotBeforeMs = 0;
    }
    async drainPathSyncRequests() {
        if (this.pathSyncRequestDrain !== void 0) {
            await this.pathSyncRequestDrain;
            return await this.drainPathSyncRequests();
        }
        if (this.isClosing() || this.engine?.getState() !== "running") {
            return;
        }
        if (this.denialRemainingMs() > 0) {
            return;
        }
        if (Date.now() < this.pathSyncRequestRetryNotBeforeMs) {
            return;
        }
        this.pathSyncRequestDrain = (async ()=>{
            for(;;){
                if (this.isClosing() || this.engine?.getState() !== "running") {
                    return;
                }
                const requests = listPathSyncRequests({
                    filesDir: this.filesDir
                });
                if (requests.length === 0) {
                    this.clearPathSyncRequestDrainFailure();
                    return;
                }
                const pushPaths = new Set();
                const pullPaths = new Set();
                for (const request3 of requests){
                    const paths = request3.kind === "pull" ? pullPaths : pushPaths;
                    for (const relPath of request3.relPaths){
                        paths.add(relPath);
                    }
                }
                if (!this.guardedPathsSafe({
                    invalidateOnFailure: true
                })) {
                    return;
                }
                const engine = this.engine;
                if (engine === void 0 || engine.getState() !== "running") {
                    return;
                }
                if (this.denialRemainingMs() > 0) {
                    return;
                }
                try {
                    const pushed = pushPaths.size > 0 ? await engine.syncPaths([
                        ...pushPaths
                    ], {
                        lane: "path-yield"
                    }) : void 0;
                    const pullable = this.pathsWithoutUnjournaledLocalDeletion([
                        ...pullPaths
                    ]);
                    const pulled = pullable.length > 0 ? await engine.pullPaths(pullable, {
                        lane: "path-yield"
                    }) : void 0;
                    const failedRelPaths = new Set();
                    let hasUnscopedError = false;
                    for (const summary of [
                        pushed,
                        pulled
                    ]){
                        if (summary === void 0) {
                            continue;
                        }
                        this.emitSyncMetrics(summary, "explicit");
                        for (const error3 of summary.errors){
                            if (error3.relPath === void 0) {
                                hasUnscopedError = true;
                            } else {
                                failedRelPaths.add(error3.relPath);
                            }
                        }
                    }
                    const ackedIds = hasUnscopedError ? [] : requests.filter((request3)=>request3.relPaths.every((relPath)=>!failedRelPaths.has(relPath))).map((request3)=>request3.id);
                    if (ackedIds.length === 0) {
                        this.notePathSyncRequestDrainFailure();
                        return;
                    }
                    this.clearPathSyncRequestDrainFailure();
                    ackPathSyncRequests({
                        filesDir: this.filesDir,
                        requestIds: ackedIds
                    });
                } catch (error3) {
                    this.emitThrownSyncMetrics(error3, "explicit");
                    this.invalidateRetiredRoot(error3);
                    this.invalidateClosedIndex(error3);
                    this.notePathSyncRequestDrainFailure();
                    return;
                }
            }
        })().finally(()=>{
            this.pathSyncRequestDrain = void 0;
        });
        await this.pathSyncRequestDrain;
    }
    onEngineWarn(message, error3) {
        const callback = this.onWarnCallback;
        if (callback === void 0) {
            return;
        }
        try {
            callback(message, error3);
        } catch  {}
    }
    startVersionProbe() {
        const prober = this.versionProbe;
        if (prober === void 0 || !prober.isEnabled()) {
            return void 0;
        }
        if (this.isClosing() || this.syncing !== void 0 || this.followUpNeeded || this.backoffTimer !== void 0 || this.syncBackoff.failures > 0) {
            return void 0;
        }
        const engine = this.engine;
        if (engine === void 0 || engine.getState() !== "running") {
            return void 0;
        }
        const version4 = engine.versionToProbe();
        if (version4 === void 0) {
            return void 0;
        }
        const target = this.client.versionProbeTarget?.({
            agentId: this.key
        });
        if (target === void 0) {
            return void 0;
        }
        return {
            version: version4,
            roundGeneration: this.roundGeneration,
            result: prober.probe({
                agentId: this.key,
                entry: {
                    ...target,
                    version: version4
                }
            })
        };
    }
    async runSyncAfterVersionProbe(probe, schedule) {
        const result = await probe.result;
        this.versionProbeInFlight = false;
        if (this.roundGeneration !== probe.roundGeneration || this.syncing !== void 0 || this.periodicSyncHeld) {
            return;
        }
        if (this.isClosing() || this.engine?.getState() !== "running") {
            return;
        }
        const unchanged = result?.status === "unchanged" && result.version === probe.version && this.engine?.versionToProbe() === probe.version;
        await this.runSync({
            schedule,
            ...unchanged ? {
                remoteUnchangedVersion: probe.version
            } : {}
        });
    }
    keepPathLaneOffIdleStreak() {
        const armedKind = this.pendingScheduleKind;
        const roundInFlight = this.syncing !== void 0 || this.versionProbeInFlight;
        if (armedKind === "idle") {
            this.clearSyncTimer();
            if (!roundInFlight) {
                this.scheduleSync();
            }
        }
        if (roundInFlight || armedKind === "periodic" || armedKind === "idle") {
            this.suppressNextIdleNote = true;
        }
        this.resetIdleStreak();
    }
    resetIdleStreak() {
        this.consecutiveNoopRounds = 0;
        this.idleStreakEpoch += 1;
    }
    noteRoundForIdleStreak(summary, streakEpoch, schedule) {
        if (this.idleStreakEpoch !== streakEpoch) {
            return;
        }
        if (schedule !== "periodic" && schedule !== "idle") {
            return;
        }
        if (isIdleNoopSummary(summary)) {
            this.consecutiveNoopRounds += 1;
            return;
        }
        this.consecutiveNoopRounds = 0;
    }
    nextPeriodicDelay() {
        if (this.idleBackoffFactor <= 1 || this.consecutiveNoopRounds <= 0) {
            return {
                delayMs: this.syncDebounceMs,
                kind: "periodic"
            };
        }
        const exponent = Math.min(this.consecutiveNoopRounds, MAX_IDLE_BACKOFF_EXPONENT);
        const stretched = this.syncDebounceMs * this.idleBackoffFactor ** exponent;
        const delayMs = Math.min(stretched, this.syncIdleMaxMs);
        if (!Number.isFinite(delayMs) || delayMs <= this.syncDebounceMs) {
            return {
                delayMs: this.syncDebounceMs,
                kind: "periodic"
            };
        }
        return {
            delayMs,
            kind: "idle"
        };
    }
    scheduleSync(delayMs = this.syncDebounceMs, kind = "periodic") {
        if (this.isClosing() || this.conversationActivity === "idle" && kind !== "backoff") {
            return;
        }
        this.disarmSyncSchedule();
        if ((kind === "periodic" || kind === "idle") && this.periodicSyncHeld) {
            this.pendingScheduleKind = void 0;
            return;
        }
        this.pendingScheduleKind = kind;
        if (kind === "backoff") {
            this.backoffTimer = setTimeout(()=>{
                this.backoffTimer = void 0;
                this.pendingScheduleKind = void 0;
                void this.runSync({
                    schedule: "backoff"
                });
            }, delayMs);
            this.backoffTimer.unref?.();
            return;
        }
        this.periodicSyncArmed = true;
        this.periodicDueAtMs = Date.now() + delayMs;
        this.periodicScheduler.schedule(this.periodicSyncHandle, this.periodicDueAtMs, this.onPeriodicSyncDue, this);
    }
    disarmSyncSchedule() {
        if (this.backoffTimer !== void 0) {
            clearTimeout(this.backoffTimer);
            this.backoffTimer = void 0;
        }
        if (this.periodicSyncArmed) {
            this.periodicScheduler.cancel(this.periodicSyncHandle);
            this.periodicSyncArmed = false;
            this.periodicDueAtMs = void 0;
        }
    }
    syncScheduleArmed() {
        return this.backoffTimer !== void 0 || this.periodicSyncArmed;
    }
    clearSyncTimer() {
        this.disarmSyncSchedule();
        this.pendingScheduleKind = void 0;
        this.suppressNextIdleNote = false;
    }
    getOrCreateExplicitFollowUpDeferred() {
        if (this.explicitFollowUpDeferred === void 0) {
            let resolve36;
            const promise = new Promise((deferredResolve)=>{
                resolve36 = deferredResolve;
            });
            this.explicitFollowUpDeferred = {
                promise,
                resolve: resolve36
            };
        }
        return this.explicitFollowUpDeferred.promise;
    }
    takeExplicitFollowUpDeferred() {
        const deferred = this.explicitFollowUpDeferred;
        this.explicitFollowUpDeferred = void 0;
        return deferred;
    }
    resolveExplicitFollowUp(deferred, summary) {
        deferred?.resolve(summary);
    }
    cancelQueuedExplicitFollowUp() {
        const deferred = this.takeExplicitFollowUpDeferred();
        this.resolveExplicitFollowUp(deferred, void 0);
    }
    unstickAbandonedRoundWaiters(options2) {
        if (options2.unjamChain) {
            this.engine?.releaseWedgedRoundChain();
            this.markLockUnhealthy();
        }
        this.syncing = void 0;
        this.followUpNeeded = false;
        this.cancelQueuedExplicitFollowUp();
        this.abandonActiveRoundOwner?.();
        this.abandonActiveRoundOwner = void 0;
        this.activeRoundAbandoned = void 0;
        this.releaseInitialRoundWaiters();
    }
    async runSync(options2 = {}) {
        if (this.isClosing()) {
            return void 0;
        }
        const engine = this.engine;
        if (engine === void 0 || engine.getState() !== "running") {
            return void 0;
        }
        const kind = options2.kind ?? "periodic";
        const schedule = options2.schedule ?? (kind === "explicit" ? "explicit" : "periodic");
        if (this.syncing !== void 0) {
            this.followUpNeeded = true;
            if (schedule === "explicit") {
                this.followUpSchedule = "explicit";
            }
            if (kind === "explicit") {
                return await this.getOrCreateExplicitFollowUpDeferred();
            }
            return void 0;
        }
        if (this.skipDeniedSyncRound()) {
            return void 0;
        }
        return await this.executeSyncRound(kind === "explicit", schedule, options2.remoteUnchangedVersion);
    }
    async runFollowUpRound(explicitWaiters, schedule) {
        if (this.skipDeniedSyncRound()) {
            this.resolveExplicitFollowUp(explicitWaiters, void 0);
            return;
        }
        const summary = await this.executeSyncRound(true, schedule);
        this.resolveExplicitFollowUp(explicitWaiters, summary);
        if (!this.isClosing() && this.syncing === void 0 && !this.syncScheduleArmed()) {
            const next = this.nextPeriodicDelay();
            this.scheduleSync(next.delayMs, next.kind);
        }
    }
    isRoundOwner(roundPromise, roundGeneration) {
        return this.syncing === roundPromise && this.roundGeneration === roundGeneration;
    }
    throwSupersededRound(signal) {
        const reason = signal.reason;
        throw new AgentStoreSyncError({
            code: "round_aborted",
            message: "host resumed from suspend",
            ...reason !== void 0 ? {
                cause: reason
            } : {}
        });
    }
    async forceSyncWithWatchdog(engine, abortController, roundGeneration, remoteUnchangedVersion) {
        const startedAt = monotonicNowMs();
        const wallStartedAt = Date.now();
        const budgetMs = this.syncRoundTimeoutMs;
        const progressTimeoutMs = this.syncRoundProgressTimeoutMs;
        const hardCapMs = this.syncRoundHardCapMs > 0 ? this.syncRoundHardCapMs : budgetMs;
        const progressMode = progressTimeoutMs > 0;
        this.emitRoundLifecycle({
            kind: "started"
        });
        const observed = engine.forceSync({
            signal: abortController.signal,
            roundOwner: roundGeneration,
            ...remoteUnchangedVersion !== void 0 ? {
                remoteUnchangedVersion
            } : {}
        }).then((summary)=>({
                kind: "fulfilled",
                summary
            }), (error3)=>({
                kind: "rejected",
                error: error3
            }));
        if (!progressMode && budgetMs === 0) {
            const settled = await observed;
            if (abortController.signal.aborted || this.roundGeneration !== roundGeneration) {
                this.emitRoundLifecycle({
                    kind: "aborted",
                    durationMs: monotonicNowMs() - startedAt
                });
                rejectSettledRoundAsAborted(abortController.signal, settled);
            }
            return unwrapSettledRound(settled);
        }
        let clockStartedAt = startedAt;
        if (progressMode) {
            const publishedAt = this.roundBodyStarted?.generation === roundGeneration ? this.roundBodyStarted.at : void 0;
            if (publishedAt === void 0) {
                const raced = await Promise.race([
                    this.waitForRoundBody(roundGeneration).then((at2)=>({
                            kind: "body",
                            at: at2
                        })),
                    observed.then((settled)=>({
                            kind: "settled",
                            settled
                        }))
                ]);
                if (raced.kind === "settled") {
                    this.roundBodyStartWaiters.delete(roundGeneration);
                    if (abortController.signal.aborted || this.roundGeneration !== roundGeneration) {
                        this.emitRoundLifecycle({
                            kind: "aborted",
                            durationMs: monotonicNowMs() - startedAt
                        });
                        rejectSettledRoundAsAborted(abortController.signal, raced.settled);
                    }
                    return unwrapSettledRound(raced.settled);
                }
                this.roundBodyStartWaiters.delete(roundGeneration);
                if (this.roundGeneration !== roundGeneration) {
                    this.throwSupersededRound(abortController.signal);
                }
                clockStartedAt = raced.at;
            } else {
                clockStartedAt = publishedAt;
            }
        }
        const resumeDetectionMode = this.resumeDetectionMode;
        let waitMs = budgetMs;
        let waitWallStartedAt = wallStartedAt;
        let rearmed = false;
        let rearmWait = false;
        let elapsedMs2 = 0;
        let wallElapsedMs = 0;
        let lateMs = 0;
        let late2 = false;
        let armedProgressAt = clockStartedAt;
        let timeoutReason;
        for(;;){
            if (progressMode && !rearmWait) {
                const progressAt = this.progressForGeneration(roundGeneration)?.at ?? clockStartedAt;
                armedProgressAt = progressAt;
                const progressDueAt = progressAt + progressTimeoutMs;
                const hardCapDueAt = hardCapMs > 0 ? clockStartedAt + hardCapMs : Number.POSITIVE_INFINITY;
                const dueAt = Math.min(progressDueAt, hardCapDueAt);
                waitMs = Math.max(0, dueAt - monotonicNowMs());
                waitWallStartedAt = Date.now();
                timeoutReason = hardCapDueAt <= progressDueAt ? "hard_cap" : "no_progress";
            } else if (rearmWait) {
                waitMs = RESUME_CHECK_INTERVAL_MS;
                waitWallStartedAt = Date.now();
                rearmWait = false;
            }
            const settled = await waitForSettlement(observed, waitMs);
            if (settled.kind !== "deadline") {
                if (abortController.signal.aborted || this.roundGeneration !== roundGeneration) {
                    this.emitRoundLifecycle({
                        kind: "aborted",
                        durationMs: monotonicNowMs() - startedAt
                    });
                    rejectSettledRoundAsAborted(abortController.signal, settled);
                }
                return unwrapSettledRound(settled);
            }
            elapsedMs2 = monotonicNowMs() - clockStartedAt;
            if (this.roundGeneration !== roundGeneration) {
                this.throwSupersededRound(abortController.signal);
            }
            if (progressMode) {
                const latestAt = this.progressForGeneration(roundGeneration)?.at ?? clockStartedAt;
                const hardCapReached = hardCapMs > 0 && elapsedMs2 >= hardCapMs;
                if (!hardCapReached && latestAt > armedProgressAt) {
                    continue;
                }
                if (!hardCapReached && (engine.isRoundWaitingOnlyForQueueSlots() || engine.isRoundRunningLocalWork())) {
                    const now2 = monotonicNowMs();
                    this.roundProgress = {
                        at: now2,
                        wallAt: Date.now(),
                        generation: roundGeneration
                    };
                    continue;
                }
            }
            ({ wallElapsedMs, lateMs, late: late2 } = this.deadlineLateness({
                roundWallStartedAt: wallStartedAt,
                waitWallStartedAt,
                waitMs
            }));
            if (!rearmed && this.shouldYieldLateDeadline(lateMs, resumeDetectionMode)) {
                rearmed = true;
                rearmWait = true;
                this.emitRoundLifecycle({
                    kind: "rearmed",
                    durationMs: elapsedMs2,
                    lateMs
                });
                this.onEngineWarn(`round deadline slept through (lateMs=${Math.round(lateMs)}); re-arming once`, void 0);
                continue;
            }
            break;
        }
        this.roundWatchdogTripped = true;
        this.emitRoundLifecycle({
            kind: "timeout",
            durationMs: elapsedMs2,
            lateMs,
            late: late2,
            ...timeoutReason !== void 0 ? {
                reason: timeoutReason
            } : {}
        });
        const trippedAfterMs = timeoutReason === "hard_cap" ? hardCapMs : timeoutReason === "no_progress" ? progressTimeoutMs : budgetMs;
        const timeoutMessage = timeoutReason === "hard_cap" ? `sync round reached its ${trippedAfterMs}ms hard cap` : timeoutReason === "no_progress" ? `sync round made no progress for ${trippedAfterMs}ms` : `sync round stalled after ${trippedAfterMs}ms`;
        const timeoutError = new AgentStoreSyncError({
            code: "round_aborted",
            timeoutClass: "round",
            message: timeoutMessage
        });
        const reasonSuffix = timeoutReason !== void 0 ? `, reason=${timeoutReason}` : "";
        this.onEngineWarn(`round stalled after ${trippedAfterMs}ms (elapsedMs=${Math.round(elapsedMs2)}, wallElapsedMs=${Math.round(wallElapsedMs)}, lateMs=${Math.round(lateMs)}, late=${late2}${reasonSuffix})`, void 0);
        abortController.abort(timeoutError);
        this.emitRoundLifecycle({
            kind: "aborted",
            durationMs: elapsedMs2
        });
        const unwind = await waitForSettlement(observed, this.syncRoundUnwindTimeoutMs);
        if (unwind.kind === "fulfilled") {
            if (this.roundGeneration !== roundGeneration) {
                this.throwSupersededRound(abortController.signal);
            }
            this.roundUnwound = true;
            return unwind.summary;
        }
        if (unwind.kind === "rejected") {
            if (this.roundGeneration !== roundGeneration) {
                this.throwSupersededRound(abortController.signal);
            }
            this.roundUnwound = true;
            throw unwind.error;
        }
        const unwindHardCapMs = this.unwindHardCapMs();
        const remainingHardCapMs = unwindHardCapMs - this.syncRoundUnwindTimeoutMs;
        const finalUnwind = remainingHardCapMs > 0 ? await waitForSettlement(observed, remainingHardCapMs) : {
            kind: "deadline"
        };
        if (finalUnwind.kind === "fulfilled") {
            if (this.roundGeneration !== roundGeneration) {
                this.throwSupersededRound(abortController.signal);
            }
            this.roundUnwound = true;
            return finalUnwind.summary;
        }
        if (finalUnwind.kind === "rejected") {
            if (this.roundGeneration !== roundGeneration) {
                this.throwSupersededRound(abortController.signal);
            }
            this.roundUnwound = true;
            throw finalUnwind.error;
        }
        if (this.roundGeneration !== roundGeneration) {
            this.throwSupersededRound(abortController.signal);
        }
        this.roundUnwound = false;
        engine.releaseWedgedRoundChain();
        this.markLockUnhealthy(engine);
        throw new AgentStoreSyncError({
            code: "round_aborted",
            cause: timeoutError,
            timeoutClass: "round",
            message: `sync round did not unwind within ${unwindHardCapMs}ms`
        });
    }
    unwindHardCapMs() {
        return this.syncRoundUnwindTimeoutMs * UNWIND_HARD_CAP_MULTIPLIER;
    }
    abandonLock() {
        this.abandonRequested = true;
        this.markLockUnhealthy(this.disposingEngine);
    }
    holdsAbandonedLock() {
        return this.abandonRequested && !this.closeReleasedLock;
    }
    markLockUnhealthy(engineOverride) {
        (engineOverride ?? this.engine)?.markLockUnhealthy();
        this.emitLockEvent("lock_released_unhealthy");
    }
    noteRoundBodyStarted(roundOwner) {
        if (roundOwner === void 0 || roundOwner !== this.roundGeneration) {
            return;
        }
        if (this.roundBodyStarted?.generation === roundOwner) {
            return;
        }
        const at2 = monotonicNowMs();
        this.roundBodyStarted = {
            at: at2,
            wallAt: Date.now(),
            generation: roundOwner
        };
        this.roundProgress = this.roundBodyStarted;
        const waiters = this.roundBodyStartWaiters.get(roundOwner);
        if (waiters !== void 0) {
            this.roundBodyStartWaiters.delete(roundOwner);
            for (const waiter of waiters){
                waiter(at2);
            }
        }
    }
    waitForRoundBody(generation) {
        const started = this.roundBodyStarted;
        if (started?.generation === generation) {
            return Promise.resolve(started.at);
        }
        return new Promise((resolve36)=>{
            const again = this.roundBodyStarted;
            if (again?.generation === generation) {
                resolve36(again.at);
                return;
            }
            const waiters = this.roundBodyStartWaiters.get(generation) ?? [];
            waiters.push(resolve36);
            this.roundBodyStartWaiters.set(generation, waiters);
        });
    }
    progressForGeneration(generation) {
        const progress = this.roundProgress;
        if (progress === void 0 || progress.generation !== generation) {
            return void 0;
        }
        return progress;
    }
    deadlineLateness(timing) {
        const wallNow = Date.now();
        const wallElapsedMs = wallNow - timing.roundWallStartedAt;
        const lateMs = Math.max(0, wallNow - timing.waitWallStartedAt - timing.waitMs);
        return {
            wallElapsedMs,
            lateMs,
            late: lateMs > this.lateDeadlineThresholdMs()
        };
    }
    lateDeadlineThresholdMs() {
        return this.resumeGapThresholdMs > 0 ? this.resumeGapThresholdMs : AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.resumeGapThresholdMs;
    }
    shouldYieldLateDeadline(lateMs, resumeDetectionMode) {
        return resumeDetectionMode === "timer_lateness" && this.resumeGapThresholdMs > 0 && lateMs > this.resumeGapThresholdMs;
    }
    async relinquishEngineLock() {
        try {
            await this.engine?.relinquishLock("lock_lost");
        } catch  {} finally{
            this.pendingRelinquishCause = void 0;
        }
    }
    failureStreakStretchMs() {
        return Math.max(0, this.failureStreakPassiveUntilMs - Date.now());
    }
    armFailureStreakRestoreTimer() {
        this.clearFailureStreakRestoreTimer();
        const remainingMs = this.failureStreakStretchMs();
        if (remainingMs <= 0) {
            return;
        }
        const timer2 = setTimeout(()=>{
            if (this.failureStreakRestoreTimer !== timer2) {
                return;
            }
            this.failureStreakRestoreTimer = void 0;
            this.finishFailureStreakStretch();
        }, remainingMs);
        timer2.unref?.();
        this.failureStreakRestoreTimer = timer2;
    }
    reconcileFailureStreakAfterResume() {
        if (this.failureStreakPassiveUntilMs === 0) {
            return;
        }
        if (this.failureStreakStretchMs() <= 0) {
            this.finishFailureStreakStretch();
            return;
        }
        this.armFailureStreakRestoreTimer();
        this.armFailureStreakVacancyProbe();
    }
    finishFailureStreakStretch() {
        this.clearFailureStreakStretch();
        if (this.isClosing()) {
            return;
        }
        const stretchMs = Math.max(this.mintGate?.remainingMs ?? 0, this.denialRemainingMs());
        if (stretchMs > 0) {
            this.extendPassiveRetryInterval(stretchMs);
        } else {
            this.restorePassiveRetryInterval();
        }
    }
    clearFailureStreakRestoreTimer() {
        if (this.failureStreakRestoreTimer !== void 0) {
            clearTimeout(this.failureStreakRestoreTimer);
            this.failureStreakRestoreTimer = void 0;
        }
    }
    clearFailureStreakStretch() {
        this.failureStreakPassiveUntilMs = 0;
        this.clearFailureStreakRestoreTimer();
        this.clearFailureStreakVacancyProbe();
    }
    vacancyProbeDelayMs() {
        const backoffMs = this.syncBackoff.lastDelayMs();
        const peerPollMs = this.passiveRetryIntervalMs ?? 0;
        const delayMs = Math.max(backoffMs, peerPollMs);
        return delayMs > 0 ? delayMs : this.syncBackoffMaxMs;
    }
    armFailureStreakVacancyProbe() {
        this.clearFailureStreakVacancyProbe();
        const remainingMs = this.failureStreakStretchMs();
        if (remainingMs <= 0 || this.isClosing() || this.engine?.getState() !== "passive") {
            return;
        }
        const delayMs = Math.min(remainingMs, this.vacancyProbeDelayMs());
        const timer2 = setTimeout(()=>{
            if (this.failureStreakVacancyTimer !== timer2) {
                return;
            }
            this.failureStreakVacancyTimer = void 0;
            void this.probeFailureStreakVacancy();
        }, delayMs);
        timer2.unref?.();
        this.failureStreakVacancyTimer = timer2;
    }
    clearFailureStreakVacancyProbe() {
        if (this.failureStreakVacancyTimer !== void 0) {
            clearTimeout(this.failureStreakVacancyTimer);
            this.failureStreakVacancyTimer = void 0;
        }
    }
    async probeFailureStreakVacancy() {
        if (this.isClosing() || this.failureStreakStretchMs() <= 0) {
            return;
        }
        if (this.engine?.getState() !== "passive") {
            return;
        }
        await this.recontendForLock();
        if (this.isClosing() || this.failureStreakStretchMs() <= 0 || this.engine?.getState() !== "passive") {
            return;
        }
        this.armFailureStreakVacancyProbe();
    }
    async applyRoundFailurePolicy(args) {
        if (this.isClosing()) {
            return;
        }
        if (this.activeRoundResumeRecoveryPending) {
            this.activeRoundResumeRecoveryPending = false;
            this.consecutiveTimeoutFailures = 0;
            this.consecutiveRoundFailures = 0;
            return;
        }
        if (this.roundWatchdogTripped) {
            this.consecutiveTimeoutFailures = 0;
            this.consecutiveRoundFailures = 0;
            if (this.roundUnwound) {
                this.pendingRelinquishCause = "watchdog";
                await this.relinquishEngineLock();
            }
            return;
        }
        if (!args.roundFailed) {
            this.consecutiveTimeoutFailures = 0;
            this.consecutiveRoundFailures = 0;
            return;
        }
        if (args.failureTimeoutClassified) {
            this.consecutiveTimeoutFailures += 1;
            this.consecutiveRoundFailures = 0;
            if (this.consecutiveTimeoutFailures >= this.lockReleaseFailureThreshold) {
                this.consecutiveTimeoutFailures = 0;
                this.pendingRelinquishCause = "timeout_streak";
                await this.relinquishEngineLock();
            }
            return;
        }
        this.consecutiveTimeoutFailures = 0;
        const mintOutage = (this.mintGate?.remainingMs ?? 0) > 0 || this.denialRemainingMs() > 0;
        if (args.countsTowardStreak && this.lockReleaseFailureStreakThreshold > 0 && !mintOutage) {
            this.consecutiveRoundFailures += 1;
            if (this.consecutiveRoundFailures >= this.lockReleaseFailureStreakThreshold) {
                this.consecutiveRoundFailures = 0;
                this.consecutiveTimeoutFailures = 0;
                this.failureStreakPassiveUntilMs = Date.now() + this.lockReleaseFailureStreakPassiveMs;
                this.extendPassiveRetryInterval(this.failureStreakStretchMs());
                this.pendingRelinquishCause = "failure_streak";
                await this.relinquishEngineLock();
                if (this.engine?.getState() === "passive") {
                    this.armFailureStreakRestoreTimer();
                } else {
                    this.clearFailureStreakStretch();
                    this.restorePassiveRetryInterval();
                }
            }
            return;
        }
        this.consecutiveRoundFailures = 0;
    }
    async executeSyncRound(returnSummary, schedule = "periodic", remoteUnchangedVersion) {
        if (this.isClosing()) {
            return void 0;
        }
        const engine = this.engine;
        if (engine === void 0 || engine.getState() !== "running") {
            return void 0;
        }
        if (!this.guardedPathsSafe({
            invalidateOnFailure: true
        })) {
            return void 0;
        }
        let roundSummary;
        let stoodAsideWait;
        this.currentRoundSchedule = schedule;
        const streakEpoch = this.idleStreakEpoch;
        if (this.suppressNextIdleNote && (schedule === "periodic" || schedule === "idle")) {
            this.suppressNextIdleNote = false;
            this.idleStreakEpoch += 1;
        }
        const abortController = new AbortController();
        this.activeRoundAbortController = abortController;
        this.roundWatchdogTripped = false;
        this.roundUnwound = true;
        this.activeRoundResumeRecoveryPending = false;
        const roundGeneration = ++this.roundGeneration;
        let roundPromise;
        roundPromise = (async ()=>{
            let failed = false;
            let stoodAside = false;
            try {
                const summary = await this.forceSyncWithWatchdog(engine, abortController, roundGeneration, remoteUnchangedVersion);
                roundSummary = summary;
                this.lastSummary = summary;
                if (summary.listingComplete) {
                    this.markMirror("synced");
                } else if (summary.errors.length > 0) {
                    this.markMirror("sync-failed");
                }
                this.emitSyncMetrics(summary);
                safeInvokeCallback(this.onSyncSummaryCallback, summary);
                if (summary.errors.length > 0) {
                    failed = true;
                    for (const err of summary.errors){
                        safeInvokeCallback(this.onSyncErrorCallback, err);
                    }
                }
                if (this.isRoundOwner(roundPromise, roundGeneration)) {
                    await this.applyRoundFailurePolicy({
                        roundFailed: summary.errors.length > 0,
                        failureTimeoutClassified: allSummaryErrorsTimeoutClassified(summary.errors),
                        countsTowardStreak: summary.errors.length > 0 && !summary.listingComplete
                    });
                }
            } catch (error3) {
                if (isSyncRoundStoodAsideError(error3)) {
                    stoodAside = true;
                    roundSummary = void 0;
                } else {
                    failed = !hasCooperativeRoundAbortInChain(error3);
                    roundSummary = void 0;
                    if (failed) {
                        this.markMirror("sync-failed");
                    }
                    const resumeOwnedRound = this.activeRoundResumeRecoveryPending;
                    this.invalidateRetiredRoot(error3);
                    this.invalidateClosedIndex(error3, {
                        promise: roundPromise,
                        generation: roundGeneration
                    });
                    if (!resumeOwnedRound && !hasLifecycleRoundAbortInChain(error3)) {
                        this.emitThrownSyncMetrics(error3);
                        safeInvokeCallback(this.onSyncErrorCallback, error3);
                    }
                    if (this.isRoundOwner(roundPromise, roundGeneration)) {
                        await this.applyRoundFailurePolicy({
                            roundFailed: true,
                            failureTimeoutClassified: isTimeoutClassifiedRoundError(error3),
                            countsTowardStreak: failed && !(error3 instanceof AgentStoreSyncError && error3.code === "lock_held_by_other")
                        });
                    }
                }
            } finally{
                if (this.activeRoundAbortController === abortController) {
                    this.activeRoundAbortController = void 0;
                }
                if (this.syncing === roundPromise) {
                    this.syncing = void 0;
                    let nextDelayMs = this.syncDebounceMs;
                    let nextKind = "periodic";
                    if (this.resumeBackoffResetPending) {
                        this.resumeBackoffResetPending = false;
                        this.syncBackoff.recordSuccess();
                    } else if (failed) {
                        this.resetIdleStreak();
                        nextDelayMs = this.delayAfterRoundFailure();
                        nextKind = "backoff";
                        if (this.failureStreakStretchMs() > 0 && this.engine?.getState() === "passive" && !this.isClosing()) {
                            this.armFailureStreakVacancyProbe();
                        }
                    } else if (!stoodAside) {
                        this.syncBackoff.recordSuccess();
                        this.clearFailureStreakStretch();
                        this.restorePassiveRetryInterval();
                        this.noteRoundForIdleStreak(roundSummary, streakEpoch, schedule);
                        if (nextKind === "periodic") {
                            const next = this.nextPeriodicDelay();
                            nextDelayMs = next.delayMs;
                            nextKind = next.kind;
                        }
                    } else if (this.mintGate !== void 0 && this.mintGate.remainingMs <= 0) {
                        this.restorePassiveRetryInterval();
                    }
                    if (this.isClosing()) {
                        if (this.followUpNeeded) {
                            this.followUpNeeded = false;
                            this.cancelQueuedExplicitFollowUp();
                        }
                    } else if (this.resumeRecoveryInProgress) {
                        if (stoodAside) {
                            this.followUpNeeded = true;
                        }
                        if (stoodAside && returnSummary) {
                            stoodAsideWait = this.getOrCreateExplicitFollowUpDeferred();
                        }
                    } else {
                        if (stoodAside) {
                            this.followUpNeeded = true;
                        }
                        if (stoodAside && returnSummary) {
                            stoodAsideWait = this.getOrCreateExplicitFollowUpDeferred();
                        }
                        if (this.followUpNeeded) {
                            this.followUpNeeded = false;
                            const explicitWaiters = this.takeExplicitFollowUpDeferred();
                            const followUpSchedule = this.followUpSchedule ?? "periodic";
                            this.followUpSchedule = void 0;
                            void this.runFollowUpRound(explicitWaiters, followUpSchedule);
                        } else {
                            this.scheduleSync(nextDelayMs, nextKind);
                        }
                    }
                }
            }
        })();
        this.syncing = roundPromise;
        let onAbandon;
        const abandoned = new Promise((resolve36)=>{
            onAbandon = resolve36;
        });
        this.abandonActiveRoundOwner = onAbandon;
        this.activeRoundAbandoned = abandoned;
        try {
            await Promise.race([
                roundPromise,
                abandoned
            ]);
        } finally{
            if (this.abandonActiveRoundOwner === onAbandon) {
                this.abandonActiveRoundOwner = void 0;
                this.activeRoundAbandoned = void 0;
            }
        }
        if (stoodAsideWait !== void 0) {
            return await stoodAsideWait;
        }
        return returnSummary ? roundSummary : void 0;
    }
    assertPathsSafe() {
        this.validatePathsHook();
    }
    invalidateClosedIndex(error3, round) {
        if (!this.indexClosedInvalidatesSession || this.indexClosedInvalidationStarted || this.isClosing() || round !== void 0 && !this.isRoundOwner(round.promise, round.generation) || !isClosedIndexError(error3)) {
            return;
        }
        this.indexClosedInvalidationStarted = true;
        void this.beginTeardown({
            kind: "invalidate",
            options: {
                flush: false
            },
            reason: "index_closed"
        });
    }
    invalidateRetiredRoot(error3) {
        if (this.rootRetiredInvalidationStarted || !hasRootRetiredInChain(error3)) {
            return;
        }
        this.rootRetiredInvalidationStarted = true;
        void this.beginTeardown({
            kind: "invalidate",
            options: {
                flush: false
            },
            reason: "root_retired"
        });
    }
    guardedPathsSafe(options2) {
        try {
            this.validatePathsHook();
            return true;
        } catch (error3) {
            if (options2.invalidateOnFailure) {
                void this.beginTeardown({
                    kind: "invalidate",
                    options: {
                        flush: false
                    },
                    reason: String(error3)
                });
            }
            return false;
        }
    }
    delayAfterRoundFailure() {
        const backoffMs = this.syncBackoff.recordFailure();
        const remaining = this.denialRemainingMs();
        const streakMs = this.failureStreakStretchMs();
        let delayMs = backoffMs;
        if (this.mintGate !== void 0 || streakMs > 0) {
            const gateMs = this.mintGate?.remainingMs ?? 0;
            const stretchMs = Math.max(gateMs, remaining, streakMs);
            if (stretchMs <= 0) {
                this.restorePassiveRetryInterval();
            } else {
                this.extendPassiveRetryInterval(stretchMs);
                delayMs = Math.max(backoffMs, stretchMs);
            }
        } else if (remaining > 0) {
            delayMs = Math.max(backoffMs, remaining);
        }
        if (remaining <= 0) {
            return delayMs;
        }
        return Math.min(DENIAL_RESCHEDULE_CAP_MS, Math.max(delayMs, remaining));
    }
    skipDeniedSyncRound() {
        if (this.skipDeniedMountSync?.() !== true) {
            return false;
        }
        const untilMs = this.mintDeniedUntilMs?.();
        const now2 = Date.now();
        if (untilMs === void 0 || !(untilMs > now2)) {
            this.loggedDenialUntilMs = void 0;
            return false;
        }
        if (this.loggedDenialUntilMs !== untilMs) {
            this.loggedDenialUntilMs = untilMs;
            const untilLabel = Number.isFinite(untilMs) ? new Date(untilMs).toISOString() : "session stand-down";
            this.onEngineWarn(`sync denied until ${untilLabel}`, void 0);
        }
        this.emitSyncRoundSkipped("denied");
        if (this.mirrorSyncState === "opening") {
            this.markMirror("sync-failed");
        }
        if (Number.isFinite(untilMs)) {
            const remaining = Math.min(Math.max(1, untilMs - now2), DENIAL_RESCHEDULE_CAP_MS);
            this.scheduleSync(remaining, "backoff");
        } else {
            this.clearSyncTimer();
        }
        return true;
    }
    isSyncRoundDenied() {
        return this.denialRemainingMs() > 0;
    }
    denialRemainingMs() {
        if (this.skipDeniedMountSync?.() !== true) {
            return 0;
        }
        const untilMs = this.mintDeniedUntilMs?.();
        const now2 = Date.now();
        if (untilMs === void 0 || !(untilMs > now2)) {
            return 0;
        }
        if (!Number.isFinite(untilMs)) {
            return DENIAL_RESCHEDULE_CAP_MS;
        }
        return untilMs - now2;
    }
    emitSyncRoundSkipped(reason) {
        try {
            this.metricsEmitter?.syncRoundSkipped?.({
                agentId: this.key,
                reason
            });
        } catch  {}
    }
    extendPassiveRetryInterval(gateMs) {
        const configured = this.passiveRetryIntervalMs ?? 0;
        this.engine?.setPassiveRetryIntervalMs(Math.max(configured, gateMs));
    }
    restorePassiveRetryInterval() {
        const stretchMs = this.failureStreakStretchMs();
        if (this.passiveRetryIntervalMs !== void 0 || stretchMs > 0) {
            this.engine?.setPassiveRetryIntervalMs(Math.max(this.passiveRetryIntervalMs ?? 0, stretchMs));
        }
    }
    emitSyncMetrics(summary, schedule) {
        const metricsEmitter = this.metricsEmitter;
        if (metricsEmitter === void 0) {
            return;
        }
        if (summary.durationMs === 0 && summary.errors.length === 0 && !summary.listingComplete) {
            return;
        }
        const nowMs2 = monotonicNowMs();
        this.recordFinishedListing(summary, nowMs2);
        const sinceLastSuccessMs = this.elapsedSinceListingComplete(nowMs2);
        try {
            notifySummaryMetrics({
                agentId: this.key,
                summary,
                metricsEmitter,
                listener: metricsEmitter,
                pathHashSalt: this.pathHashSalt,
                sinceLastSuccessMs
            });
            this.emitRoundSchedule(schedule);
        } catch  {}
    }
    emitIndexLookupClosed() {
        if (this.indexLookupClosedEmitted) {
            return;
        }
        this.indexLookupClosedEmitted = true;
        try {
            this.metricsEmitter?.recordIndexLookupClosed?.({
                agentId: this.key
            });
        } catch  {}
    }
    emitSessionState() {
        try {
            this.metricsEmitter?.onSessionState?.({
                agentId: this.key,
                state: this.conversationActivity
            });
        } catch  {}
    }
    emitRoundSchedule(schedule) {
        try {
            this.metricsEmitter?.onSyncRound?.({
                agentId: this.key,
                schedule: schedule ?? this.currentRoundSchedule
            });
        } catch  {}
    }
    emitRoundLifecycle(event) {
        try {
            this.metricsEmitter?.onRoundLifecycle?.({
                agentId: this.key,
                ...event
            });
        } catch  {}
    }
    emitLockEvent(kind) {
        try {
            this.metricsEmitter?.onLockEvent?.({
                agentId: this.key,
                kind
            });
        } catch  {}
    }
    emitLockRelinquished(cause) {
        try {
            this.metricsEmitter?.onLockEvent?.({
                agentId: this.key,
                kind: "lock_relinquished",
                cause
            });
        } catch  {}
    }
    emitLockContended(heldBy2) {
        const holderKind = heldBy2.kind === "ide" || heldBy2.kind === "cli" || heldBy2.kind === "private_worker" ? heldBy2.kind : "unknown";
        try {
            this.metricsEmitter?.onLockEvent?.({
                agentId: this.key,
                kind: "lock_contended",
                holderKind,
                samePid: heldBy2.samePid
            });
        } catch  {}
    }
    emitResumeDetected(gapMs) {
        const event = {
            agentId: this.key,
            gapMs
        };
        safeInvokeCallback(this.onResumeDetectedCallback, event);
        try {
            this.metricsEmitter?.onResumeDetected?.(event);
        } catch  {}
    }
    emitThrownSyncMetrics(error3, schedule) {
        const metricsEmitter = this.metricsEmitter;
        if (metricsEmitter === void 0) {
            return;
        }
        const errorClass = error3 instanceof AgentStoreSyncError ? error3.code : isClosedIndexError(error3) ? "index_closed" : "unknown";
        const errorName = errorClass === "unknown" ? unknownThrownErrorName(error3) : void 0;
        const timeoutClass = hasCooperativeRoundAbortInChain(error3) ? void 0 : error3 instanceof AgentStoreSyncError && error3.timeoutClass !== void 0 ? error3.timeoutClass : isDeadlineExceededShaped(error3) ? "rpc" : void 0;
        const sinceLastSuccessMs = this.elapsedSinceListingComplete(monotonicNowMs());
        try {
            this.emitRoundSchedule(schedule);
            metricsEmitter.onError?.({
                agentId: this.key,
                op: "unknown",
                errorClass,
                ...errorName !== void 0 ? {
                    errorName
                } : {},
                ...timeoutClass !== void 0 ? {
                    timeoutClass
                } : {}
            });
            metricsEmitter.onRoundCompleted?.({
                agentId: this.key,
                durationMs: 0,
                filesPushed: 0,
                filesPulled: 0,
                filesSkipped: 0,
                bytesPushed: 0,
                bytesPulled: 0,
                refusals: 0,
                filesConflicted: 0,
                identicalContentConflictsSuppressed: 0,
                conflictProtectionDowngrades: 0,
                legacyProbes: 0,
                pushEntriesParked: 0,
                pullsDeferred: 0,
                pullsSkippedPendingDelete: 0,
                filesDeletedRemote: 0,
                filesDeletedLocal: 0,
                deleteConflicts: 0,
                scanDeletesJournaled: 0,
                recoveryDisarms: 0,
                identityRecoveryWipeFailed: false,
                legacyRowsRestored: 0,
                listingComplete: false,
                errorCount: 1,
                failed: true,
                walkMs: 0,
                hashMs: 0,
                presignMs: 0,
                uploadMs: 0,
                listMs: 0,
                downloadMs: 0,
                scope: "full",
                ...sinceLastSuccessMs !== void 0 ? {
                    sinceLastSuccessMs
                } : {}
            });
        } catch  {}
    }
    recordFinishedListing(summary, nowMs2) {
        if (summary.listingComplete && (summary.scope ?? "full") === "full") {
            this.lastListingCompleteMonoMs = nowMs2;
        }
    }
    elapsedSinceListingComplete(nowMs2) {
        const finishedAt = this.lastListingCompleteMonoMs;
        if (finishedAt === void 0) {
            return void 0;
        }
        return Math.max(0, nowMs2 - finishedAt);
    }
};
AgentStoreSyncSession.RESUME_DRAIN_MAX_LAPS = 2;

}
