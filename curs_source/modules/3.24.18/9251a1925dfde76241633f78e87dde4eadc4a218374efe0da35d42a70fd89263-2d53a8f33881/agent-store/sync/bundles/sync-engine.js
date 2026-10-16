import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { BackoffScheduler, init_backoff_scheduler } from "./backoff-scheduler.js";
import { AgentStoreDirectoryNotEmptyError, init_bcs_client } from "./bcs-client.js";
import { init_bcs_list_adapter } from "./bcs-list-adapter.js";
import { init_concurrency_queue } from "./concurrency-queue.js";
import { ConflictJournal, PendingConflictJournal, init_conflict_events } from "./conflict-events.js";
import { init_connect_errors } from "./connect-errors.js";
import { init_etag } from "./etag.js";
import { META_DELETION_ARMED, META_FILES_ROOT_DEV, META_FILES_ROOT_INO, META_INDEX_CREATED_MS, META_LAST_COMPLETE_ROUND_MS, META_LAST_LISTING_APPLIED_MS, META_REMOTE_VERSION, META_REMOTE_VERSION_LISTED_MS, META_TOMBSTONE_CURSOR_MS, META_TOMBSTONE_LAST_INCLUDE_MS, META_TOMBSTONE_ROUNDS_SINCE_INCLUDE, init_local_index } from "./local-index.js";
import { init_monotonic_clock } from "./monotonic-clock.js";
import { init_object_probe } from "./object-probe.js";
import { PRIVATE_DIR_MODE, init_paths3 } from "./paths.js";
import { init_periodic_scheduler } from "./periodic-scheduler.js";
import { init_presigned_url } from "./presigned-url.js";
import { UnsafeAgentStorePathError, init_safe_paths } from "./safe-paths.js";
import { init_secure_open } from "./secure-open.js";
import { init_stat_fast_path } from "./stat-fast-path.js";
import { init_summary_listener } from "./summary-listener.js";
import { SyncRoundScheduler, init_sync_round_scheduler } from "./sync-round-scheduler.js";
import { AGENT_STORE_DEFAULT_MAX_FILE_SIZE_BYTES } from "../../../constants/dist/agent-store-ids.js";
import { init_dist2 } from "../../../constants/dist/index.js";
import { conflictJournalPathForFilesDir, conflictPendingJournalPathForFilesDir, isReservedRelPath } from "../../../mcp_sandbox_policy_exports.js";
import { Code } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { init_esm3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { AgentStoreTombstoneMode } from "../../../proto/dist/generated/aiserver/v1/agent_store_pb.js";
import { agentStoreErrorSummaryMessage, assertParentInsideBase, assertPresignedUrlSafe, assertTargetWritable, assertWindowsMaterializableRelPath, cappedPartProgress, captureContentStat, classifyBlobPutTimingOutcome, compareRelPathDepthDesc, composeAbortSignals, countVersionAuditMismatches, createBlobIdleWatch, decideStatFastPath, emptySummary, filesRootIdentityCompromisedDuringRound, getHeaderCaseInsensitive, hashRelPath, hoistRelPathOutOfDir, init_root_id, isAgentStoreConnectCode, isAgentStoreSyncDisabledError, isBlobIdleAbortError, isLeftoverHiddenByRemovedPrefix, isNodeError5, isPresignedUrlExpiredError, isSyncRoundStoodAsideError, isUnderDir, isWriteConflictError, liveContentStat, localParkedConflictRelPath, minDefinedMs, monotonicNowMs, nextRepeatingDueAtMs, noop3, normalizeBlobConnectTimeoutMs, normalizeBlobIdleTimeoutMs, normalizeRelPath, normalizeS3Etag, normalizeTombstoneFullRefreshIntervalMs, normalizeTombstoneFullRefreshRounds, normalizeTombstonePruneSlackMs, normalizeVersionAuditSampleRate, normalizeVersionFullListIntervalMs, omitVersionNeutralListingFiles, openExistingFileNoFollow, parentDirRelPath, parentRelPath, parseAgentStoreQuotaExceeded, parseNonNegativeMetaInt, parsePositiveMetaMs, partitionReservedWalkFiles, presentRelPathsHasDescendant, presignHasConditionalHeaders, presignHasExpiredLockRedirect, presignUsesConflictTarget, probeAgentStoreObject, probeAgentStoreRootId, protoPositiveMs, readIndexMtimeSync, recordRemoteVersionEvent, recordedTombstoneEtag, redactPresignedUrlString, refusalCoversPath, regularFileExistsNoFollow, relPathDepth, relPathIsInScope, resolveSafeChildPath, rmdirLocalEmptyAncestors, roundAbortedError, roundMayHaveChangedServer, safeCreateDirChain, safeLstatDirectory, safeReadBody, safeStatChild, safeWalk, sanitizePresignHeaders, statFastPathEnabled, streamHashFileNoFollow, stripS3EtagQuotes, symlinkSafeExclusiveWriteFlags, syncRoundErrorFor, throwForAbortedRoundSignal, timeoutClassEntry, tlsHandshakePending, verifiedLeftoverLeaf } from "../../../tree_chunk_napi_exports.js";
var import_node_crypto50, fs26, http3, https2, tls2, path50, import_node_stream5, import_promises50, DEFAULT_MAX_FILE_SIZE_BYTES, DEFAULT_MULTIPART_UPLOAD_THRESHOLD_BYTES, DEFAULT_MULTIPART_PART_SIZE_BYTES, DEFAULT_MULTIPART_PRESIGN_WINDOW_SIZE, DEFAULT_PULL_PRESIGN_WINDOW_SIZE, DEFAULT_LIST_WALK_CONCURRENCY, DEFAULT_MULTIPART_COMPLETE_MAX_ATTEMPTS, DEFAULT_MULTIPART_MAX_RESTARTS, DEFAULT_MULTIPART_MAX_CONFLICT_RENAMES, DEFAULT_MULTIPART_MAX_EXPIRY_REFRESHES, DEFAULT_BLOB_IDLE_TIMEOUT_MS, DEFAULT_IDENTICAL_CONFLICT_COMPARE_MAX_BYTES, DEFAULT_PUSH_TERMINAL_BACKOFF_BASE_MS, DEFAULT_PUSH_TERMINAL_BACKOFF_MAX_MS, DELETE_FLUSH_BATCH_SIZE, LOCK_OWNERSHIP_CACHE_MS, TOMBSTONE_ROW_RETENTION_MS, DEFAULT_TOMBSTONE_FULL_REFRESH_ROUNDS, DEFAULT_TOMBSTONE_FULL_REFRESH_INTERVAL_MS, DEFAULT_TOMBSTONE_PRUNE_SLACK_MS, DELETION_ARMED_META_KEY, FILES_ROOT_DEV_META_KEY, FILES_ROOT_INO_META_KEY, DEFAULT_VERSION_FULL_LIST_INTERVAL_MS, AgentStoreSyncError, PULL_OUTSTANDING_LIMIT, DEFAULT_PASSIVE_RETRY_INTERVAL_MS, DEFAULT_PASSIVE_INDEX_POLL_INTERVAL_MS, PRIVATE_FILE_MODE3, READ_ONLY_FILE_MODE, AgentStoreSyncEngine, MAX_RMDIR_CHAIN_DEPTH, RMDIR_FLUSH_MAX_PER_ROUND, VERSION_NEUTRAL_ERROR_CODES, symlinkSafeWriteFlags, SAFE_PRESIGN_HEADER_PREFIX, SAFE_PRESIGN_HEADER_EXACTS, HttpAgentStoreBlobTransfer;
export { AgentStoreSyncEngine, AgentStoreSyncError, DEFAULT_BLOB_IDLE_TIMEOUT_MS, DEFAULT_IDENTICAL_CONFLICT_COMPARE_MAX_BYTES, DEFAULT_LIST_WALK_CONCURRENCY, DEFAULT_MAX_FILE_SIZE_BYTES, DEFAULT_MULTIPART_COMPLETE_MAX_ATTEMPTS, DEFAULT_MULTIPART_MAX_CONFLICT_RENAMES, DEFAULT_MULTIPART_MAX_EXPIRY_REFRESHES, DEFAULT_MULTIPART_MAX_RESTARTS, DEFAULT_MULTIPART_PART_SIZE_BYTES, DEFAULT_MULTIPART_PRESIGN_WINDOW_SIZE, DEFAULT_MULTIPART_UPLOAD_THRESHOLD_BYTES, DEFAULT_PASSIVE_INDEX_POLL_INTERVAL_MS, DEFAULT_PASSIVE_RETRY_INTERVAL_MS, DEFAULT_PULL_PRESIGN_WINDOW_SIZE, DEFAULT_PUSH_TERMINAL_BACKOFF_BASE_MS, DEFAULT_PUSH_TERMINAL_BACKOFF_MAX_MS, DEFAULT_TOMBSTONE_FULL_REFRESH_INTERVAL_MS, DEFAULT_TOMBSTONE_FULL_REFRESH_ROUNDS, DEFAULT_TOMBSTONE_PRUNE_SLACK_MS, DEFAULT_VERSION_FULL_LIST_INTERVAL_MS, DELETE_FLUSH_BATCH_SIZE, DELETION_ARMED_META_KEY, FILES_ROOT_DEV_META_KEY, FILES_ROOT_INO_META_KEY, HttpAgentStoreBlobTransfer, LOCK_OWNERSHIP_CACHE_MS, MAX_RMDIR_CHAIN_DEPTH, PRIVATE_FILE_MODE3, PULL_OUTSTANDING_LIMIT, READ_ONLY_FILE_MODE, RMDIR_FLUSH_MAX_PER_ROUND, SAFE_PRESIGN_HEADER_EXACTS, SAFE_PRESIGN_HEADER_PREFIX, TOMBSTONE_ROW_RETENTION_MS, VERSION_NEUTRAL_ERROR_CODES, fs26, http3, https2, import_node_crypto50, import_node_stream5, import_promises50, path50, symlinkSafeWriteFlags, tls2 };
var __wakaru_init_sync_engine_initialized = false;
export function init_sync_engine() {
if (__wakaru_init_sync_engine_initialized) return;
__wakaru_init_sync_engine_initialized = true;
"use strict";
import_node_crypto50 = require("node:crypto");
fs26 = __toESM(require("node:fs"), 1);
http3 = __toESM(require("node:http"), 1);
https2 = __toESM(require("node:https"), 1);
tls2 = __toESM(require("node:tls"), 1);
path50 = __toESM(require("node:path"), 1);
import_node_stream5 = require("node:stream");
import_promises50 = require("node:stream/promises");
init_dist2();
init_esm3();
init_backoff_scheduler();
init_bcs_client();
init_bcs_list_adapter();
init_concurrency_queue();
init_periodic_scheduler();
init_conflict_events();
init_connect_errors();
init_etag();
init_local_index();
init_monotonic_clock();
init_object_probe();
init_paths3();
init_presigned_url();
init_root_id();
init_safe_paths();
init_secure_open();
init_stat_fast_path();
init_summary_listener();
init_sync_round_scheduler();
DEFAULT_MAX_FILE_SIZE_BYTES = AGENT_STORE_DEFAULT_MAX_FILE_SIZE_BYTES;
DEFAULT_MULTIPART_UPLOAD_THRESHOLD_BYTES = 64 * 1024 * 1024;
DEFAULT_MULTIPART_PART_SIZE_BYTES = 16 * 1024 * 1024;
DEFAULT_MULTIPART_PRESIGN_WINDOW_SIZE = 8;
DEFAULT_PULL_PRESIGN_WINDOW_SIZE = 500;
DEFAULT_LIST_WALK_CONCURRENCY = 4;
DEFAULT_MULTIPART_COMPLETE_MAX_ATTEMPTS = 3;
DEFAULT_MULTIPART_MAX_RESTARTS = 1;
DEFAULT_MULTIPART_MAX_CONFLICT_RENAMES = 1;
DEFAULT_MULTIPART_MAX_EXPIRY_REFRESHES = 1;
DEFAULT_BLOB_IDLE_TIMEOUT_MS = 6e4;
DEFAULT_IDENTICAL_CONFLICT_COMPARE_MAX_BYTES = 16 * 1024 * 1024;
DEFAULT_PUSH_TERMINAL_BACKOFF_BASE_MS = 5e3;
DEFAULT_PUSH_TERMINAL_BACKOFF_MAX_MS = 15 * 6e4;
DELETE_FLUSH_BATCH_SIZE = 500;
LOCK_OWNERSHIP_CACHE_MS = 1e3;
TOMBSTONE_ROW_RETENTION_MS = 30 * 24 * 60 * 60 * 1e3;
DEFAULT_TOMBSTONE_FULL_REFRESH_ROUNDS = 2880;
DEFAULT_TOMBSTONE_FULL_REFRESH_INTERVAL_MS = 24 * 60 * 60 * 1e3;
DEFAULT_TOMBSTONE_PRUNE_SLACK_MS = 3 * 24 * 60 * 60 * 1e3;
DELETION_ARMED_META_KEY = META_DELETION_ARMED;
FILES_ROOT_DEV_META_KEY = META_FILES_ROOT_DEV;
FILES_ROOT_INO_META_KEY = META_FILES_ROOT_INO;
DEFAULT_VERSION_FULL_LIST_INTERVAL_MS = 24 * 60 * 60 * 1e3;
AgentStoreSyncError = class extends Error {
    constructor(options2){
        super(options2.message);
        this.name = "AgentStoreSyncError";
        this.code = options2.code;
        this.relPath = options2.relPath;
        this.cause = options2.cause;
        this.httpStatus = options2.httpStatus;
        this.retryable = options2.retryable;
        this.timeoutClass = options2.timeoutClass;
    }
};
PULL_OUTSTANDING_LIMIT = 16;
DEFAULT_PASSIVE_RETRY_INTERVAL_MS = 5e3;
DEFAULT_PASSIVE_INDEX_POLL_INTERVAL_MS = 2e3;
PRIVATE_FILE_MODE3 = 384;
READ_ONLY_FILE_MODE = 256;
AgentStoreSyncEngine = class {
    constructor(options2){
        this.remoteVersionStaleFromPathWrite = false;
        this.lockOwnershipCheckedAtMs = 0;
        this.lockOwnershipCached = true;
        this.stateMutation = Promise.resolve();
        this.inFlightRounds = new Set();
        this.pendingLockLost = false;
        this.orphanedRounds = new Set();
        this.roundScheduler = new SyncRoundScheduler();
        this.roundChainAbandoned = false;
        this.passiveRetryHandle = {};
        this.passiveIndexHandle = {};
        this.disposed = false;
        this.closeFlushPending = false;
        this.closing = false;
        this.lockReleaseDeferred = false;
        this.lastDisposeReleasedLock = false;
        this.lastPullListingComplete = false;
        this.recoveryDisarmed = false;
        this.pathHashSalt = (0, import_node_crypto50.randomBytes)(16).toString("hex");
        this.roundJournaledConflictEmits = [];
        this.pushParkedUntilMs = new Map();
        this.pushParkBackoff = new Map();
        this.roundByteBudgets = new Map();
        this.unboundByteBudgets = new Map();
        this.roundQueueActivity = new Map();
        this.onPassiveRetryDue = ()=>{
            const previousDueAtMs = this.passiveRetryDueAtMs;
            this.passiveRetryDueAtMs = void 0;
            if (this.disposed || this.closing || this.state !== "passive" || this.passiveRetryIntervalMs <= 0 || this.periodicScheduler === void 0) {
                return;
            }
            this.passiveRetryDueAtMs = this.armPassiveDeadline(this.passiveRetryHandle, nextRepeatingDueAtMs({
                previousDueAtMs,
                intervalMs: this.passiveRetryIntervalMs
            }), this.onPassiveRetryDue);
            void this.unpause().catch(()=>{});
        };
        this.onPassiveIndexDue = ()=>{
            const previousDueAtMs = this.passiveIndexDueAtMs;
            this.passiveIndexDueAtMs = void 0;
            if (this.disposed || this.state !== "passive" || this.passiveIndexPollIntervalMs <= 0 || this.periodicScheduler === void 0 || this.onPassiveIndexUpdated === void 0 || this.indexFilePath === void 0) {
                return;
            }
            this.passiveIndexDueAtMs = this.armPassiveDeadline(this.passiveIndexHandle, nextRepeatingDueAtMs({
                previousDueAtMs,
                intervalMs: this.passiveIndexPollIntervalMs
            }), this.onPassiveIndexDue);
            this.checkPassiveIndexProgress();
        };
        this.activeRoundLane = "full";
        this.fullRoundParkedForYield = false;
        this.pathsRefreshedDuringFullRound = new Set();
        if (!path50.isAbsolute(options2.filesDir)) {
            throw new Error(`AgentStoreSyncEngine.filesDir must be absolute: ${options2.filesDir}`);
        }
        if (!path50.isAbsolute(options2.tmpDir)) {
            throw new Error(`AgentStoreSyncEngine.tmpDir must be absolute: ${options2.tmpDir}`);
        }
        this.agentId = options2.agentId;
        this.filesDir = path50.resolve(options2.filesDir);
        this.tmpDir = path50.resolve(options2.tmpDir);
        this.client = options2.client;
        this.index = options2.index;
        this.queues = options2.queues;
        this.maxFileSizeBytes = options2.maxFileSizeBytes ?? DEFAULT_MAX_FILE_SIZE_BYTES;
        this.multipartUploadThresholdBytes = options2.multipartUploadThresholdBytes ?? DEFAULT_MULTIPART_UPLOAD_THRESHOLD_BYTES;
        this.multipartPartSizeBytes = options2.multipartPartSizeBytes ?? DEFAULT_MULTIPART_PART_SIZE_BYTES;
        this.multipartPresignWindowSize = options2.multipartPresignWindowSize ?? DEFAULT_MULTIPART_PRESIGN_WINDOW_SIZE;
        this.pushOrder = options2.pushOrder ?? "scan";
        this.pullPresignWindowSize = options2.pullPresignWindowSize ?? DEFAULT_PULL_PRESIGN_WINDOW_SIZE;
        this.listWalkConcurrency = options2.listWalkConcurrency ?? DEFAULT_LIST_WALK_CONCURRENCY;
        this.multipartCompleteMaxAttempts = options2.multipartCompleteMaxAttempts ?? DEFAULT_MULTIPART_COMPLETE_MAX_ATTEMPTS;
        this.multipartMaxRestarts = options2.multipartMaxRestarts ?? DEFAULT_MULTIPART_MAX_RESTARTS;
        this.multipartMaxConflictRenames = options2.multipartMaxConflictRenames ?? DEFAULT_MULTIPART_MAX_CONFLICT_RENAMES;
        this.multipartMaxExpiryRefreshes = options2.multipartMaxExpiryRefreshes ?? DEFAULT_MULTIPART_MAX_EXPIRY_REFRESHES;
        if (!Number.isSafeInteger(this.multipartUploadThresholdBytes) || this.multipartUploadThresholdBytes < 1 || !Number.isSafeInteger(this.multipartPartSizeBytes) || this.multipartPartSizeBytes < 1 || !Number.isSafeInteger(this.multipartPresignWindowSize) || this.multipartPresignWindowSize < 1 || !Number.isSafeInteger(this.pullPresignWindowSize) || this.pullPresignWindowSize < 1 || !Number.isSafeInteger(this.listWalkConcurrency) || this.listWalkConcurrency < 1 || !Number.isSafeInteger(this.multipartCompleteMaxAttempts) || this.multipartCompleteMaxAttempts < 1 || !Number.isSafeInteger(this.multipartMaxRestarts) || this.multipartMaxRestarts < 0 || !Number.isSafeInteger(this.multipartMaxConflictRenames) || this.multipartMaxConflictRenames < 0 || !Number.isSafeInteger(this.multipartMaxExpiryRefreshes) || this.multipartMaxExpiryRefreshes < 0) {
            throw new RangeError("AgentStoreSyncEngine multipart/pull-presign/list-walk controls must be safe integers within their minimums");
        }
        this.blobIdleTimeoutMs = normalizeBlobIdleTimeoutMs(options2.blobIdleTimeoutMs);
        this.blobConnectTimeoutMs = normalizeBlobConnectTimeoutMs(options2.blobConnectTimeoutMs);
        this.resumeLockCallTimeoutMs = Math.max(0, options2.resumeLockCallTimeoutMs ?? 0);
        this.tombstoneFullRefreshRoundsValue = normalizeTombstoneFullRefreshRounds(options2.tombstoneFullRefreshRounds);
        this.tombstoneFullRefreshIntervalMsValue = normalizeTombstoneFullRefreshIntervalMs(options2.tombstoneFullRefreshIntervalMs);
        this.tombstonePruneSlackMsValue = normalizeTombstonePruneSlackMs(options2.tombstonePruneSlackMs);
        this.remoteVersionEnabledValue = options2.remoteVersionEnabled === true;
        this.versionFullListIntervalMsValue = normalizeVersionFullListIntervalMs(options2.versionFullListIntervalMs);
        this.versionAuditSampleRateValue = normalizeVersionAuditSampleRate(options2.versionAuditSampleRate);
        if (options2.blobTransfer !== void 0) {
            this.blobTransfer = options2.blobTransfer;
            if (this.blobTransfer instanceof HttpAgentStoreBlobTransfer) {
                this.blobTransfer.setBlobIdleTimeoutMs(this.blobIdleTimeoutMs);
                this.blobTransfer.setBlobConnectTimeoutMs(this.blobConnectTimeoutMs);
            }
        } else {
            this.blobTransfer = new HttpAgentStoreBlobTransfer({
                maxFileSizeBytes: this.maxFileSizeBytes,
                blobIdleTimeoutMs: this.blobIdleTimeoutMs,
                blobConnectTimeoutMs: this.blobConnectTimeoutMs
            });
        }
        this.fetchImpl = options2.fetch ?? globalThis.fetch.bind(globalThis);
        this.now = options2.now ?? Date.now;
        this.monotonicNow = options2.monotonicNow ?? monotonicNowMs;
        this.validatePresignedUrl = options2.validatePresignedUrl;
        this.lockProvider = options2.lockProvider;
        this.rootIdFence = options2.rootIdFence;
        this.syncMode = options2.syncMode ?? "readWrite";
        this.platform = options2.platform ?? process.platform;
        this.localStatFastPath = options2.localStatFastPath ?? "off";
        this.localStatFastPathAuditRate = options2.localStatFastPathAuditRate ?? 1;
        this.localStatRacyMarginMs = options2.localStatRacyMarginMs ?? 2e3;
        this.random = options2.random ?? Math.random;
        this.onStatFastPath = options2.onStatFastPath;
        this.onMultipartAbandoned = options2.onMultipartAbandoned;
        this.onRoundProgress = options2.onRoundProgress;
        this.onRoundBodyStarted = options2.onRoundBodyStarted;
        this.onStateChanged = options2.onStateChanged;
        this.passiveRetryIntervalMs = options2.passiveRetryIntervalMs ?? DEFAULT_PASSIVE_RETRY_INTERVAL_MS;
        this.passiveIndexPollIntervalMs = options2.passiveIndexPollIntervalMs ?? DEFAULT_PASSIVE_INDEX_POLL_INTERVAL_MS;
        this.periodicScheduler = options2.periodicScheduler;
        this.periodicSchedulerGroup = options2.periodicSchedulerGroup ?? this;
        this.indexFilePath = options2.indexPath;
        this.onPassiveIndexUpdated = options2.onPassiveIndexUpdated;
        this.onWarn = options2.onWarn;
        this.defaultSignal = options2.signal;
        this.shouldRelinquishLockLost = options2.shouldRelinquishLockLost ?? (()=>true);
        this.state = options2.initialState ?? "running";
        if (this.state === "running" && this.lockProvider !== void 0) {
            this.state = "paused";
        }
        this.conflictJournal = new ConflictJournal(conflictJournalPathForFilesDir(this.filesDir), {
            warn: (message, error3)=>this.warn(message, error3)
        });
        this.pendingConflictJournal = new PendingConflictJournal(conflictPendingJournalPathForFilesDir(this.filesDir), {
            warn: (message, error3)=>this.warn(message, error3)
        });
        this.syncStatSchema();
    }
    syncStatSchema() {
        this.index.setStatSchemaEnabled(statFastPathEnabled(this.localStatFastPath, this.platform));
    }
    getState() {
        return this.state;
    }
    conflictJournalPath() {
        return this.conflictJournal.path;
    }
    conflictJournalAppendFailureCount() {
        return this.conflictJournal.appendFailureCount();
    }
    pendingConflictJournalPath() {
        return this.pendingConflictJournal.path;
    }
    pendingConflictJournalSize() {
        return this.pendingConflictJournal.size();
    }
    notifyRoundBodyStarted(roundOwner) {
        if (this.onRoundBodyStarted === void 0) {
            return;
        }
        try {
            this.onRoundBodyStarted(roundOwner);
        } catch (error3) {
            this.warn("round body listener failed", error3);
        }
    }
    emitRoundProgress(event) {
        if (this.onRoundProgress === void 0) {
            return;
        }
        try {
            this.onRoundProgress(event);
        } catch (error3) {
            this.warn("progress listener failed", error3);
        }
    }
    progressReporter(kind) {
        const listener = this.onRoundProgress;
        const signal = this.activeRoundSignal;
        if (listener === void 0) {
            return ()=>{};
        }
        return (bytes)=>{
            if (signal !== void 0 && (signal.aborted || this.activeRoundSignal !== signal)) {
                return;
            }
            if (kind === "blob_put_bytes" || kind === "blob_get_bytes") {
                this.emitRoundProgress({
                    kind,
                    bytes: bytes ?? 0
                });
                return;
            }
            this.emitRoundProgress({
                kind
            });
        };
    }
    isRoundWaitingOnlyForQueueSlots() {
        const counts = this.roundQueueCounts();
        return counts !== void 0 && counts.waiting > 0 && counts.runningLocal === 0 && counts.runningNetwork === 0;
    }
    isRoundRunningLocalWork() {
        const counts = this.roundQueueCounts();
        return counts !== void 0 && counts.runningLocal > 0 && counts.runningNetwork === 0;
    }
    roundQueueCounts() {
        const signal = this.activeRoundSignal;
        if (signal === void 0) {
            return void 0;
        }
        return this.roundQueueActivity.get(signal);
    }
    adjustRoundQueue(signal, field4, delta) {
        if (signal === void 0) {
            return;
        }
        const counts = this.roundQueueActivity.get(signal) ?? {
            waiting: 0,
            runningLocal: 0,
            runningNetwork: 0
        };
        counts[field4] += delta;
        if (counts.waiting === 0 && counts.runningLocal === 0 && counts.runningNetwork === 0) {
            this.roundQueueActivity.delete(signal);
            return;
        }
        this.roundQueueActivity.set(signal, counts);
    }
    async trackQueue(enqueue, operation, lane = "network") {
        const signal = this.activeRoundSignal;
        const runningField = lane === "local" ? "runningLocal" : "runningNetwork";
        this.adjustRoundQueue(signal, "waiting", 1);
        let started = false;
        try {
            return await enqueue(async ()=>{
                started = true;
                this.adjustRoundQueue(signal, "waiting", -1);
                this.adjustRoundQueue(signal, runningField, 1);
                try {
                    return await operation();
                } finally{
                    this.adjustRoundQueue(signal, runningField, -1);
                }
            });
        } finally{
            if (!started) {
                this.adjustRoundQueue(signal, "waiting", -1);
            }
        }
    }
    warn(message, error3) {
        if (this.onWarn === void 0) {
            return;
        }
        try {
            this.onWarn(message, error3);
        } catch  {}
    }
    pulledFileMode() {
        return this.syncMode === "readOnly" ? READ_ONLY_FILE_MODE : PRIVATE_FILE_MODE3;
    }
    async pause() {
        await this.serialize(async ()=>{
            if (this.state === "paused") {
                return;
            }
            this.transitionTo("paused", "pause");
            await this.drainInFlightRounds();
            this.attemptPendingConflictJournalFlushForShutdown();
            if (this.orphanedRounds.size > 0) {
                this.warn("pause proceeding with abandoned in-flight round; lock recovery deferred", void 0);
                return;
            }
            if (this.lockReleaseDeferred) {
                return;
            }
            await this.releaseLockIfHeld();
        });
    }
    async unpause() {
        await this.serialize(async ()=>{
            if (this.disposed || this.closing) {
                return;
            }
            if (this.state === "running") {
                return;
            }
            if (this.lockProvider === void 0) {
                this.transitionTo("running", "unpause");
                return;
            }
            if (this.orphanedRounds.size > 0) {
                if (this.state !== "passive") {
                    this.transitionTo("passive", "unpause");
                }
                return;
            }
            const handle = await this.acquireLockBounded(this.lockProvider);
            if (handle === void 0) {
                if (this.state !== "passive") {
                    const owner = this.lockProvider.peekHeldOwner?.();
                    this.transitionTo("passive", "unpause", owner === void 0 ? void 0 : {
                        kind: owner.kind,
                        samePid: owner.pid === process.pid
                    });
                }
                return;
            }
            this.lockHandle = handle;
            this.lockReleaseDeferred = false;
            this.lockOwnershipCheckedAtMs = 0;
            this.lockOwnershipCached = true;
            this.transitionTo("running", "unpause");
        });
    }
    async dispose(options2) {
        await this.serialize(async ()=>{
            if (this.disposed) {
                return;
            }
            const fromState = this.state;
            const shouldFlush = this.state === "running" || this.closeFlushPending;
            const deferLockReleaseForThisClose = options2?.deferLockRelease === true;
            this.disposed = true;
            this.stopPassiveTimers();
            if (this.state !== "paused") {
                this.transitionTo("paused", "unmount");
            } else {
                this.emitStateChanged({
                    fromState,
                    toState: "paused",
                    reason: "unmount"
                });
            }
            await this.drainInFlightRounds();
            if (this.orphanedRounds.size > 0) {
                this.attemptPendingConflictJournalFlushForShutdown();
                this.warn("dispose proceeding with abandoned in-flight round; lock recovery deferred", void 0);
                return;
            }
            if (!deferLockReleaseForThisClose && this.closeFlushPending) {
                this.clearLockReleaseDeferredIfIdle();
            }
            let finalFlushFinished = false;
            if (shouldFlush && !this.lockReleaseDeferred && (this.lockProvider === void 0 || this.lockHandle !== void 0)) {
                try {
                    await this.runSyncRound({
                        finalFlush: true,
                        signal: this.defaultSignal
                    });
                } catch  {}
                finalFlushFinished = this.inFlightRounds.size === 0 && this.orphanedRounds.size === 0;
            }
            this.attemptPendingConflictJournalFlushForShutdown();
            if (finalFlushFinished) {
                this.lockReleaseDeferred = false;
            }
            if (this.lockReleaseDeferred) {
                this.lastDisposeReleasedLock = false;
                return;
            }
            await this.releaseLockIfHeld();
            this.lastDisposeReleasedLock = true;
        });
    }
    transitionTo(toState, reason, heldBy2) {
        if (this.state === toState) {
            return;
        }
        const fromState = this.state;
        this.state = toState;
        if (toState === "passive") {
            this.resetPassiveIndexBaseline();
            this.startPassiveTimers();
        } else {
            this.stopPassiveTimers();
        }
        this.emitStateChanged({
            fromState,
            toState,
            reason,
            ...heldBy2 === void 0 ? {} : {
                heldBy: heldBy2
            }
        });
    }
    emitStateChanged(transition) {
        if (this.onStateChanged === void 0) {
            return;
        }
        try {
            this.onStateChanged({
                agentId: this.agentId,
                ...transition
            });
        } catch  {}
    }
    resetPassiveIndexBaseline() {
        this.lastIndexMtimeMs = this.indexFilePath === void 0 ? void 0 : readIndexMtimeSync(this.indexFilePath);
    }
    setTombstoneFullRefreshRounds(rounds) {
        this.tombstoneFullRefreshRoundsValue = normalizeTombstoneFullRefreshRounds(rounds);
    }
    setTombstoneFullRefreshIntervalMs(intervalMs) {
        this.tombstoneFullRefreshIntervalMsValue = normalizeTombstoneFullRefreshIntervalMs(intervalMs);
    }
    setTombstonePruneSlackMs(slackMs) {
        this.tombstonePruneSlackMsValue = normalizeTombstonePruneSlackMs(slackMs);
    }
    setRemoteVersionEnabled(enabled) {
        this.remoteVersionEnabledValue = enabled;
    }
    setVersionFullListIntervalMs(intervalMs) {
        this.versionFullListIntervalMsValue = normalizeVersionFullListIntervalMs(intervalMs);
    }
    setVersionAuditSampleRate(rate) {
        this.versionAuditSampleRateValue = normalizeVersionAuditSampleRate(rate);
    }
    setLocalStatFastPath(options2) {
        if (options2.mode !== void 0) {
            this.localStatFastPath = options2.mode;
        }
        if (options2.auditRate !== void 0 && Number.isFinite(options2.auditRate)) {
            this.localStatFastPathAuditRate = options2.auditRate;
        }
        if (options2.racyMarginMs !== void 0 && Number.isFinite(options2.racyMarginMs)) {
            this.localStatRacyMarginMs = options2.racyMarginMs;
        }
        this.syncStatSchema();
    }
    setPassiveRetryIntervalMs(intervalMs) {
        if (intervalMs === this.passiveRetryIntervalMs) {
            return;
        }
        this.passiveRetryIntervalMs = intervalMs;
        if (!this.disposed && this.state === "passive") {
            this.startPassiveTimers();
        }
    }
    setPassiveIndexPollIntervalMs(intervalMs) {
        if (intervalMs === this.passiveIndexPollIntervalMs) {
            return;
        }
        this.passiveIndexPollIntervalMs = intervalMs;
        if (!this.disposed && this.state === "passive") {
            this.startPassiveTimers();
        }
    }
    setPeriodicScheduler(scheduler) {
        if (scheduler === this.periodicScheduler) {
            return;
        }
        const previous = this.periodicScheduler;
        const retryDueAtMs = this.passiveRetryDueAtMs;
        const indexDueAtMs = this.passiveIndexDueAtMs;
        previous?.cancel(this.passiveRetryHandle);
        previous?.cancel(this.passiveIndexHandle);
        this.periodicScheduler = scheduler;
        if (retryDueAtMs !== void 0) {
            scheduler.schedule(this.passiveRetryHandle, retryDueAtMs, this.onPassiveRetryDue, this.periodicSchedulerGroup);
        }
        if (indexDueAtMs !== void 0) {
            scheduler.schedule(this.passiveIndexHandle, indexDueAtMs, this.onPassiveIndexDue, this.periodicSchedulerGroup);
        }
    }
    startPassiveTimers() {
        this.stopPassiveTimers();
        if (this.disposed || this.lockProvider === void 0) {
            return;
        }
        if (this.passiveRetryIntervalMs > 0) {
            if (this.periodicScheduler !== void 0) {
                this.passiveRetryDueAtMs = this.armPassiveDeadline(this.passiveRetryHandle, nextRepeatingDueAtMs({
                    intervalMs: this.passiveRetryIntervalMs
                }), this.onPassiveRetryDue);
            } else {
                this.passiveRetryTimer = setInterval(()=>{
                    if (this.disposed || this.closing || this.state !== "passive") {
                        return;
                    }
                    void this.unpause().catch(()=>{});
                }, this.passiveRetryIntervalMs);
                this.passiveRetryTimer.unref?.();
            }
        }
        if (this.passiveIndexPollIntervalMs > 0 && this.onPassiveIndexUpdated !== void 0 && this.indexFilePath !== void 0) {
            if (this.periodicScheduler !== void 0) {
                this.passiveIndexDueAtMs = this.armPassiveDeadline(this.passiveIndexHandle, nextRepeatingDueAtMs({
                    intervalMs: this.passiveIndexPollIntervalMs
                }), this.onPassiveIndexDue);
            } else {
                this.passiveIndexTimer = setInterval(()=>{
                    this.checkPassiveIndexProgress();
                }, this.passiveIndexPollIntervalMs);
                this.passiveIndexTimer.unref?.();
            }
            this.checkPassiveIndexProgress();
        }
    }
    armPassiveDeadline(handle, dueAtMs, run) {
        this.periodicScheduler?.schedule(handle, dueAtMs, run, this.periodicSchedulerGroup);
        return dueAtMs;
    }
    checkPassiveIndexProgress() {
        if (this.disposed || this.state !== "passive" || this.indexFilePath === void 0) {
            return;
        }
        const mtime = readIndexMtimeSync(this.indexFilePath);
        if (mtime === void 0) {
            return;
        }
        if (this.lastIndexMtimeMs === void 0) {
            this.lastIndexMtimeMs = mtime;
            return;
        }
        if (mtime > this.lastIndexMtimeMs) {
            this.lastIndexMtimeMs = mtime;
            try {
                this.onPassiveIndexUpdated?.({
                    agentId: this.agentId,
                    mtimeMs: mtime
                });
            } catch  {}
        }
    }
    stopPassiveTimers() {
        if (this.passiveRetryTimer !== void 0) {
            clearInterval(this.passiveRetryTimer);
            this.passiveRetryTimer = void 0;
        }
        if (this.passiveIndexTimer !== void 0) {
            clearInterval(this.passiveIndexTimer);
            this.passiveIndexTimer = void 0;
        }
        this.periodicScheduler?.cancel(this.passiveRetryHandle);
        this.periodicScheduler?.cancel(this.passiveIndexHandle);
        this.passiveRetryDueAtMs = void 0;
        this.passiveIndexDueAtMs = void 0;
    }
    async releaseLockIfHeld() {
        const handle = this.lockHandle;
        if (handle === void 0) {
            return;
        }
        this.lockHandle = void 0;
        const release = handle.release().catch(()=>{});
        await this.raceResumeLockCall(release, void 0);
    }
    async relinquishLock(reason = "lock_lost") {
        if (this.lockProvider === void 0) {
            return;
        }
        await this.serialize(async ()=>{
            if (this.disposed || this.state !== "running") {
                return;
            }
            if (this.closeFlushPending || !this.shouldRelinquishLockLost()) {
                this.lockOwnershipCheckedAtMs = 0;
                this.lockOwnershipCached = true;
                return;
            }
            await this.releaseLockIfHeld();
            this.transitionTo("passive", reason);
        });
    }
    markCloseFlushPending() {
        this.closeFlushPending = true;
    }
    markClosing() {
        this.closing = true;
    }
    markLockUnhealthy() {
        this.lockReleaseDeferred = true;
        this.lockHandle?.markUnhealthy?.();
    }
    releasedLockOnDispose() {
        return this.lastDisposeReleasedLock;
    }
    clearLockReleaseDeferredIfIdle() {
        if (this.lockReleaseDeferred && this.inFlightRounds.size === 0 && this.orphanedRounds.size === 0) {
            this.lockReleaseDeferred = false;
        }
    }
    async revalidateLockOwnership() {
        if (this.lockProvider === void 0) {
            return;
        }
        await this.serialize(async ()=>{
            if (this.disposed || this.closing || this.state !== "running" || this.lockHandle === void 0) {
                return;
            }
            this.lockOwnershipCheckedAtMs = 0;
            const owned = await this.raceResumeLockCall(this.isLockStillOwnedOnDisk(), "timeout");
            if (owned !== false) {
                return;
            }
            await this.releaseLockIfHeld();
            this.transitionTo("passive", "lock_lost");
        });
    }
    async raceResumeLockCall(call, timeoutValue) {
        const timeoutMs = this.resumeLockCallTimeoutMs;
        if (timeoutMs <= 0) {
            return await call;
        }
        let timer2;
        const deadline = new Promise((resolve36)=>{
            timer2 = setTimeout(()=>resolve36(timeoutValue), timeoutMs);
            timer2.unref?.();
        });
        try {
            return await Promise.race([
                call,
                deadline
            ]);
        } finally{
            if (timer2 !== void 0) {
                clearTimeout(timer2);
            }
        }
    }
    async acquireLockBounded(provider) {
        const timeoutMs = this.resumeLockCallTimeoutMs;
        const acquire = provider.acquire();
        if (timeoutMs <= 0) {
            return await acquire;
        }
        let timer2;
        const deadline = new Promise((resolve36)=>{
            timer2 = setTimeout(()=>resolve36("timeout"), timeoutMs);
            timer2.unref?.();
        });
        let raced;
        try {
            raced = await Promise.race([
                acquire,
                deadline
            ]);
        } finally{
            if (timer2 !== void 0) {
                clearTimeout(timer2);
            }
        }
        if (raced !== "timeout") {
            return raced;
        }
        void acquire.then((handle)=>this.releaseOrphanedLockHandle(handle)).catch(()=>{});
        return void 0;
    }
    async releaseOrphanedLockHandle(handle) {
        if (handle === void 0 || handle === this.lockHandle) {
            return;
        }
        try {
            await handle.release();
        } catch  {}
    }
    async isLockStillOwnedOnDisk() {
        const handle = this.lockHandle;
        if (handle?.verifyStillOwned === void 0) {
            return true;
        }
        const now2 = this.now();
        if (this.lockOwnershipCheckedAtMs !== 0 && now2 - this.lockOwnershipCheckedAtMs < LOCK_OWNERSHIP_CACHE_MS) {
            return this.lockOwnershipCached;
        }
        let owned;
        try {
            owned = await handle.verifyStillOwned();
        } catch  {
            owned = true;
        }
        this.lockOwnershipCheckedAtMs = now2;
        this.lockOwnershipCached = owned;
        return owned;
    }
    async assertRoundStillOwnsLock(relPath, options2) {
        this.throwIfRoundAborted(relPath);
        if (options2?.bypassCache === true) {
            this.lockOwnershipCheckedAtMs = 0;
        }
        if (await this.isLockStillOwnedOnDisk()) {
            return;
        }
        this.pendingLockLost = true;
        throw new AgentStoreSyncError({
            code: "lock_held_by_other",
            relPath,
            message: `Agent store engine for ${this.agentId} lost the write lock to another holder`
        });
    }
    async drainInFlightRounds() {
        await this.roundScheduler.drain();
        while(this.inFlightRounds.size > 0){
            await Promise.allSettled([
                ...this.inFlightRounds
            ]);
        }
    }
    async serialize(work) {
        const next = this.stateMutation.then(work, work);
        this.stateMutation = next.then(noop3, noop3);
        await next;
    }
    async forceSync(options2) {
        const callerSignal = options2?.signal ?? this.defaultSignal;
        this.throwIfSignalAborted(callerSignal);
        return await this.scheduleRound("full", (schedulerSignal)=>this.runSyncRound({
                signal: composeAbortSignals(callerSignal, schedulerSignal),
                remoteUnchangedVersion: options2?.remoteUnchangedVersion,
                roundOwner: options2?.roundOwner
            }));
    }
    versionToProbe() {
        return this.remoteVersionToSend();
    }
    async syncPaths(relPaths, options2) {
        const signal = options2?.signal ?? this.defaultSignal;
        this.throwIfSignalAborted(signal);
        return await this.scheduleRound(options2?.lane ?? "path", ()=>this.runSyncPaths(relPaths, signal));
    }
    async pullPaths(relPaths, options2) {
        const signal = options2?.signal ?? this.defaultSignal;
        this.throwIfSignalAborted(signal);
        return await this.scheduleRound(options2?.lane ?? "path", ()=>this.withPublishedRoundSignal(signal, void 0, ()=>this.runPullPathsBody(relPaths)));
    }
    async yieldToPathRounds() {
        if (this.activeRoundLane !== "full" || !this.roundScheduler.hasPendingPathRounds()) {
            return;
        }
        this.fullRoundParkedForYield = true;
        try {
            await this.roundScheduler.yieldToPathRounds();
        } finally{
            this.fullRoundParkedForYield = false;
            this.activeRoundLane = "full";
        }
        this.throwIfRoundAborted();
    }
    notePathsRefreshedForParkedFullRound(relPaths, summary) {
        if (!this.fullRoundParkedForYield) {
            return;
        }
        const failed = new Set(summary.errors.map((error3)=>error3.relPath));
        for (const relPath of relPaths){
            if (!failed.has(relPath)) {
                this.pathsRefreshedDuringFullRound.add(relPath);
            }
        }
    }
    async runPullPathsBody(relPaths) {
        const summary = emptySummary("pull-path");
        if (!this.syncRoundStillAuthorized()) {
            this.throwIfRoundAborted();
            return summary;
        }
        await this.assertRoundStillOwnsLock();
        this.assertRootStillBound("pull path round");
        const start = this.monotonicNow();
        this.throwIfRoundAborted();
        if (!this.tryRemoveObstructingFilesRoot(summary)) {
            summary.durationMs = this.monotonicNow() - start;
            return summary;
        }
        this.ensureDirsExist();
        const byParent = new Map();
        for (const rawRelPath of relPaths){
            let relPath;
            try {
                relPath = normalizeRelPath(rawRelPath);
            } catch (error3) {
                summary.refusals++;
                summary.errors.push({
                    relPath: rawRelPath,
                    code: "not_regular_file",
                    message: error3 instanceof Error ? error3.message : `Unsafe path: ${rawRelPath}`
                });
                continue;
            }
            if (isReservedRelPath(relPath)) {
                summary.reservedPathsSkipped = (summary.reservedPathsSkipped ?? 0) + 1;
                continue;
            }
            const parent = parentDirRelPath(relPath);
            const siblings = byParent.get(parent);
            if (siblings === void 0) {
                byParent.set(parent, [
                    relPath
                ]);
            } else if (!siblings.includes(relPath)) {
                siblings.push(relPath);
            }
        }
        const candidates = [];
        let listedAny = false;
        let everyListingComplete = true;
        const observedPaths = [];
        for (const [parent, paths] of byParent){
            this.throwIfRoundAborted();
            const listStart = this.monotonicNow();
            let listing;
            try {
                listing = await this.runQueuedControlRpc(this.queues.list, "listing_page", ()=>this.client.listFiles({
                        agentId: this.agentId,
                        relPath: parent,
                        tombstoneMode: AgentStoreTombstoneMode.OMIT,
                        signal: this.activeRoundSignal
                    }));
            } catch (error3) {
                this.rethrowIfRoundAbort(error3);
                this.rethrowIfLockLost(error3);
                everyListingComplete = false;
                for (const relPath of paths){
                    summary.errors.push({
                        relPath,
                        code: error3 instanceof AgentStoreSyncError ? error3.code : "list_failed",
                        message: error3 instanceof Error ? error3.message : String(error3),
                        ...timeoutClassEntry(error3)
                    });
                }
                continue;
            } finally{
                summary.listMs = (summary.listMs ?? 0) + (this.monotonicNow() - listStart);
            }
            listedAny = true;
            if (listing.listingComplete === true) {
                observedPaths.push(...paths);
            } else {
                everyListingComplete = false;
                for (const file of listing.files){
                    let canonical;
                    try {
                        canonical = normalizeRelPath(file.relPath);
                    } catch  {
                        continue;
                    }
                    if (paths.includes(canonical)) {
                        observedPaths.push(canonical);
                    }
                }
            }
            candidates.push(...this.pullCandidatesFromListing(listing.files, summary, new Set(paths)));
        }
        summary.listingComplete = listedAny && everyListingComplete;
        await this.pullCandidates(candidates, summary);
        this.notePathsRefreshedForParkedFullRound(observedPaths, summary);
        summary.durationMs = this.monotonicNow() - start;
        return summary;
    }
    runQueued(queue, operation, lane = "network") {
        return this.trackQueue((work)=>{
            if (this.activeRoundLane !== "full" && queue.enqueuePriority !== void 0) {
                return queue.enqueuePriority(work);
            }
            return queue.enqueue(work);
        }, operation, lane);
    }
    async runQueuedControlRpc(queue, kind, operation) {
        const report = this.progressReporter(kind);
        const result = await this.runQueued(queue, operation);
        report();
        return result;
    }
    cappedRoundBytes(kind, relPath, size) {
        const budget = this.roundByteBudget(`${kind}\0${relPath}\0${size}`);
        const report = this.progressReporter(kind);
        return (bytes)=>{
            const room = size - budget.reported;
            const counted = room <= 0 ? 0 : Math.min(Math.max(0, bytes), room);
            budget.reported += counted;
            report(counted);
        };
    }
    roundByteBudget(key) {
        const signal = this.activeRoundSignal;
        const budgets = signal === void 0 ? this.unboundByteBudgets : this.budgetsForRound(signal);
        let budget = budgets.get(key);
        if (budget === void 0) {
            budget = {
                reported: 0
            };
            budgets.set(key, budget);
        }
        return budget;
    }
    budgetsForRound(signal) {
        let budgets = this.roundByteBudgets.get(signal);
        if (budgets === void 0) {
            budgets = new Map();
            this.roundByteBudgets.set(signal, budgets);
        }
        return budgets;
    }
    assertRoundAuthorized() {
        if (this.disposed) {
            throw new AgentStoreSyncError({
                code: "paused",
                message: `Agent store engine for ${this.agentId} is disposed`
            });
        }
        if (this.state === "paused") {
            throw new AgentStoreSyncError({
                code: "paused",
                message: `Agent store engine for ${this.agentId} is paused`
            });
        }
        if (this.state === "passive") {
            throw new AgentStoreSyncError({
                code: "lock_held_by_other",
                message: `Agent store engine for ${this.agentId} lock is held by another holder`
            });
        }
        if (this.lockProvider !== void 0 && this.lockHandle === void 0) {
            throw new AgentStoreSyncError({
                code: "lock_held_by_other",
                message: `Agent store engine for ${this.agentId} does not hold the write lock`
            });
        }
    }
    listingSnapshotStaleFor(relPath) {
        return this.activeRoundLane === "full" && this.pathsRefreshedDuringFullRound.has(relPath);
    }
    async scheduleRound(kind, body) {
        this.assertRoundAuthorized();
        let round;
        await this.serialize(async ()=>{
            this.assertRoundAuthorized();
            if (this.roundChainAbandoned) {
                if (this.orphanedRounds.size > 0 || this.inFlightRounds.size > 0) {
                    throw new AgentStoreSyncError({
                        code: "round_aborted",
                        message: "previous sync round still draining after watchdog abandon"
                    });
                }
                this.roundChainAbandoned = false;
            }
            round = this.roundScheduler.enqueue(kind, async (signal)=>{
                this.activeRoundLane = kind;
                if (kind === "full") {
                    this.pathsRefreshedDuringFullRound.clear();
                }
                const running = body(signal);
                const tracked = running.then(noop3, noop3);
                this.inFlightRounds.add(tracked);
                try {
                    return await running;
                } finally{
                    this.inFlightRounds.delete(tracked);
                }
            });
        });
        try {
            return await round;
        } finally{
            if (this.pendingLockLost) {
                this.pendingLockLost = false;
                if (this.shouldRelinquishLockLost()) {
                    await this.relinquishLock("lock_lost");
                } else {
                    this.lockOwnershipCheckedAtMs = 0;
                    this.lockOwnershipCached = true;
                }
            }
        }
    }
    releaseWedgedRoundChain() {
        this.roundChainAbandoned = true;
        this.roundScheduler.abandonInFlight();
        for (const tracked of this.inFlightRounds){
            this.orphanedRounds.add(tracked);
            void tracked.finally(()=>{
                this.orphanedRounds.delete(tracked);
                if (this.orphanedRounds.size === 0 && this.state === "passive" && !this.disposed && !this.closing) {
                    void this.unpause().catch(()=>{});
                }
            });
        }
        this.inFlightRounds.clear();
    }
    hasAbandonedInFlightRounds() {
        return this.orphanedRounds.size > 0;
    }
    hasLiveRoundWork() {
        return this.inFlightRounds.size > 0 || this.orphanedRounds.size > 0;
    }
    hasInFlightRounds() {
        return this.inFlightRounds.size > 0;
    }
    whenAbandonedInFlightRoundsIdle() {
        if (this.orphanedRounds.size === 0) {
            return Promise.resolve();
        }
        return Promise.allSettled([
            ...this.orphanedRounds
        ]).then(()=>this.whenAbandonedInFlightRoundsIdle());
    }
    throwIfRoundAborted(relPath) {
        const signal = this.activeRoundSignal;
        if (signal?.aborted === true) {
            throwForAbortedRoundSignal(relPath, signal.reason);
        }
    }
    throwIfSignalAborted(signal) {
        if (signal?.aborted === true) {
            throwForAbortedRoundSignal(void 0, signal.reason);
        }
    }
    isRoundAbortError(error3) {
        if (error3 instanceof AgentStoreSyncError) {
            return error3.code === "round_aborted";
        }
        if (this.activeRoundSignal?.aborted !== true) {
            return false;
        }
        if (error3 instanceof ConnectError && (error3.code === Code.DeadlineExceeded || error3.code === Code.Canceled)) {
            return true;
        }
        return error3 instanceof Error && (error3.name === "AbortError" || error3.name === "TimeoutError");
    }
    rethrowIfRoundAbort(error3, relPath) {
        if (isSyncRoundStoodAsideError(error3)) {
            throw error3;
        }
        if (!this.isRoundAbortError(error3)) {
            return;
        }
        if (error3 instanceof AgentStoreSyncError && error3.code === "round_aborted") {
            throw error3;
        }
        throwForAbortedRoundSignal(relPath, this.activeRoundSignal?.reason ?? error3);
    }
    rethrowIfLockLost(error3) {
        if (error3 instanceof AgentStoreSyncError && error3.code === "lock_held_by_other") {
            throw error3;
        }
    }
    async runSyncRound(options2 = {}) {
        return await this.withPublishedRoundSignal(options2.signal, options2.roundOwner, ()=>this.runSyncRoundBody(options2));
    }
    async withPublishedRoundSignal(callerSignal, roundOwner, body) {
        const owned = new AbortController();
        let cleanupForward;
        if (callerSignal !== void 0) {
            if (callerSignal.aborted) {
                owned.abort(callerSignal.reason);
            } else {
                const forward = ()=>owned.abort(callerSignal.reason);
                callerSignal.addEventListener("abort", forward, {
                    once: true
                });
                cleanupForward = ()=>callerSignal.removeEventListener("abort", forward);
            }
        }
        const previousRoundSignal = this.activeRoundSignal;
        const previousRoundAbort = this.activeRoundAbort;
        this.activeRoundSignal = owned.signal;
        this.activeRoundAbort = owned;
        this.notifyRoundBodyStarted(roundOwner);
        try {
            return await body();
        } finally{
            this.roundByteBudgets.delete(owned.signal);
            this.activeRoundSignal = previousRoundSignal;
            this.activeRoundAbort = previousRoundAbort;
            cleanupForward?.();
        }
    }
    abortActiveRound(reason) {
        this.activeRoundAbort?.abort(reason);
    }
    async awaitInFlightRoundsSettled() {
        await this.drainInFlightRounds();
    }
    async runSyncRoundBody(options2 = {}) {
        if (options2.finalFlush) {
            if (this.lockProvider !== void 0 && this.lockHandle === void 0) {
                return emptySummary();
            }
        } else if (!this.syncRoundStillAuthorized()) {
            this.throwIfRoundAborted();
            return emptySummary();
        } else {
            await this.assertRoundStillOwnsLock();
        }
        this.assertRootStillBound("full round");
        this.throwIfRoundAborted();
        const start = this.monotonicNow();
        const summary = emptySummary();
        let restoreOnlyRound = false;
        const allowIdentityRecovery = this.syncMode !== "readOnly";
        if (allowIdentityRecovery && this.isDeletionArmed() && !this.recoveryDisarmed) {
            const rootIdentity = this.checkRecordedFilesRootIdentity();
            if (rootIdentity === "compromised") {
                if (!this.prepareIdentityRecovery(summary)) {
                    summary.durationMs = this.monotonicNow() - start;
                    return summary;
                }
                restoreOnlyRound = true;
            } else if (rootIdentity === "unreadable") {
                summary.errors.push({
                    relPath: void 0,
                    code: "fs_read_failed",
                    message: `Agent store files root temporarily unreadable; deletion journal retained`
                });
                summary.durationMs = this.monotonicNow() - start;
                return summary;
            }
        }
        if (!this.tryRemoveObstructingFilesRoot(summary)) {
            summary.durationMs = this.monotonicNow() - start;
            return summary;
        }
        this.ensureDirsExist();
        let identityAtStart = this.probeFilesRootIdentity();
        if (!restoreOnlyRound) {
            await this.pushAll(summary);
            if (summary.identityRecoveryWipeFailed) {
                summary.durationMs = this.monotonicNow() - start;
                return summary;
            }
            if (summary.recoveryDisarms > 0) {
                restoreOnlyRound = true;
                this.ensureDirsExist();
                identityAtStart = this.probeFilesRootIdentity();
            }
        }
        this.throwIfRoundAborted();
        await this.pullAll(summary, {
            remoteUnchangedVersion: restoreOnlyRound ? void 0 : options2.remoteUnchangedVersion
        });
        let identityAtEnd = this.probeFilesRootIdentity();
        const midRoundCompromised = filesRootIdentityCompromisedDuringRound({
            start: identityAtStart,
            end: identityAtEnd
        });
        if (allowIdentityRecovery && midRoundCompromised && summary.recoveryDisarms === 0 && this.isDeletionArmed() && !this.recoveryDisarmed) {
            if (!this.prepareIdentityRecovery(summary)) {
                summary.durationMs = this.monotonicNow() - start;
                return summary;
            }
            restoreOnlyRound = true;
            this.ensureDirsExist();
            const restorePull = await this.pullAllWithFollowUpWipe(summary);
            if (!restorePull) {
                summary.durationMs = this.monotonicNow() - start;
                return summary;
            }
            identityAtEnd = this.probeFilesRootIdentity();
        } else if (allowIdentityRecovery && midRoundCompromised && (restoreOnlyRound || summary.recoveryDisarms > 0)) {
            if (!this.clearCompromisedFilesRoot(summary)) {
                summary.durationMs = this.monotonicNow() - start;
                return summary;
            }
            this.ensureDirsExist();
            const restorePull = await this.pullAllWithFollowUpWipe(summary);
            if (!restorePull) {
                summary.durationMs = this.monotonicNow() - start;
                return summary;
            }
            identityAtEnd = this.probeFilesRootIdentity();
        }
        if (!midRoundCompromised && summary.recoveryDisarms === 0) {
            this.maybeArmDeletionDetection({
                summary,
                filesRootIdentity: identityAtEnd
            });
        }
        summary.durationMs = this.monotonicNow() - start;
        return summary;
    }
    async runSyncPaths(relPaths, signal) {
        return await this.withPublishedRoundSignal(signal, void 0, ()=>this.runSyncPathsBody(relPaths, signal));
    }
    async runSyncPathsBody(relPaths, signal) {
        if (!this.syncRoundStillAuthorized()) {
            this.throwIfRoundAborted();
            return emptySummary("path");
        }
        await this.assertRoundStillOwnsLock();
        this.assertRootStillBound("path round");
        const start = this.monotonicNow();
        const summary = emptySummary("path");
        this.throwIfRoundAborted();
        if (this.syncMode !== "readOnly" && this.isDeletionArmed() && !this.recoveryDisarmed) {
            const rootIdentity = this.checkRecordedFilesRootIdentity();
            if (rootIdentity === "compromised") {
                if (!this.prepareIdentityRecovery(summary)) {
                    summary.durationMs = this.monotonicNow() - start;
                    return summary;
                }
                this.ensureDirsExist();
                await this.pullAllWithFollowUpWipe(summary);
                summary.durationMs = this.monotonicNow() - start;
                return summary;
            }
            if (rootIdentity === "unreadable") {
                summary.errors.push({
                    relPath: void 0,
                    code: "fs_read_failed",
                    message: `Agent store files root temporarily unreadable; deletion journal retained`
                });
                summary.durationMs = this.monotonicNow() - start;
                return summary;
            }
        }
        if (!this.tryRemoveObstructingFilesRoot(summary)) {
            summary.durationMs = this.monotonicNow() - start;
            return summary;
        }
        this.ensureDirsExist();
        if (this.syncMode === "readOnly") {
            this.stripJournaledPendingConflictMirrors();
            this.roundJournaledConflictEmits = [];
            this.flushPendingConflictJournalEmits();
            this.stripJournaledPendingConflictMirrors();
            summary.durationMs = this.monotonicNow() - start;
            return summary;
        }
        this.stripJournaledPendingConflictMirrors();
        this.roundJournaledConflictEmits = [];
        this.flushPendingConflictJournalEmits();
        try {
            await this.pushPathsBody(relPaths, summary, signal);
        } catch (error3) {
            this.remoteVersionStaleFromPathWrite = true;
            throw error3;
        } finally{
            this.stripJournaledPendingConflictMirrors();
        }
        if (roundMayHaveChangedServer(summary)) {
            this.remoteVersionStaleFromPathWrite = true;
        }
        summary.durationMs = this.monotonicNow() - start;
        return summary;
    }
    async pushPathsBody(relPaths, summary, signal) {
        const scopedRelPaths = new Set();
        const scopedRefusals = [];
        const candidates = [];
        const caseCollisionKeys = new Map();
        for (const rawRelPath of relPaths){
            let relPath;
            try {
                relPath = normalizeRelPath(rawRelPath);
            } catch (error3) {
                summary.refusals++;
                summary.errors.push({
                    relPath: rawRelPath,
                    code: "not_regular_file",
                    message: error3 instanceof Error ? error3.message : `Unsafe path: ${rawRelPath}`
                });
                continue;
            }
            if (scopedRelPaths.has(relPath)) {
                continue;
            }
            scopedRelPaths.add(relPath);
            if (isReservedRelPath(relPath)) {
                summary.reservedPathsSkipped = (summary.reservedPathsSkipped ?? 0) + 1;
                continue;
            }
            let statResult;
            try {
                statResult = safeStatChild({
                    base: this.filesDir,
                    relPath
                });
            } catch (error3) {
                if (error3 instanceof UnsafeAgentStorePathError) {
                    summary.refusals++;
                    summary.errors.push({
                        relPath,
                        code: error3.code === "symlink_refused" ? "symlink_refused" : "not_regular_file",
                        message: error3.message
                    });
                    continue;
                }
                summary.errors.push({
                    relPath,
                    code: "fs_read_failed",
                    message: error3 instanceof Error ? error3.message : String(error3)
                });
                continue;
            }
            if (statResult.kind === "absent") {
                continue;
            }
            if (statResult.kind === "refused") {
                scopedRefusals.push(statResult.refusal);
                summary.refusals++;
                summary.errors.push({
                    relPath: statResult.refusal.relPath,
                    code: statResult.refusal.reason,
                    message: `Skipped ${statResult.refusal.relPath} (${statResult.refusal.reason})`
                });
                continue;
            }
            const collisionKey = relPath.toLowerCase();
            const previous = caseCollisionKeys.get(collisionKey);
            if (previous !== void 0 && previous !== relPath) {
                summary.errors.push({
                    relPath,
                    code: "case_collision",
                    message: `Agent store has case-colliding paths: ${previous} and ${relPath}`
                });
                continue;
            }
            caseCollisionKeys.set(collisionKey, relPath);
            const entry = statResult.entry;
            if (entry.size > this.maxFileSizeBytes) {
                summary.errors.push({
                    relPath,
                    code: "file_too_large",
                    message: `File ${relPath} (${entry.size} bytes) exceeds the ${this.maxFileSizeBytes}-byte cap`
                });
                continue;
            }
            candidates.push({
                relPath,
                absPath: entry.absPath,
                size: entry.size,
                mtimeMs: entry.mtimeMs,
                dev: entry.dev,
                ino: entry.ino,
                existing: this.index.getFile(relPath)
            });
        }
        const hashStart = this.monotonicNow();
        const hashed = await Promise.all(candidates.map((candidate)=>this.runQueued(this.queues.hash, ()=>{
                this.throwIfRoundAborted(candidate.relPath);
                return this.hashCandidate(candidate);
            }, "local")));
        summary.hashMs = (summary.hashMs ?? 0) + (this.monotonicNow() - hashStart);
        this.throwIfRoundAborted();
        const toUpload = this.selectUploadable(hashed, summary);
        await this.uploadHashedCandidates(toUpload, summary, {
            preferProbeForLegacy: true,
            signal
        });
        this.throwIfRoundAborted();
        await this.flushPendingDeletes({
            summary,
            presentRelPaths: new Set(candidates.map((candidate)=>candidate.relPath)),
            refusals: scopedRefusals,
            scopeRelPaths: scopedRelPaths
        });
    }
    maybeArmDeletionDetection(args) {
        const { summary, filesRootIdentity } = args;
        if (this.syncMode === "readOnly") {
            return;
        }
        if (summary.recoveryDisarms > 0) {
            return;
        }
        if (summary.errors.length > 0 || summary.refusals > 0) {
            return;
        }
        if (!this.lastPullListingComplete) {
            return;
        }
        if (filesRootIdentity.kind !== "present") {
            return;
        }
        this.index.armDeletionWithIdentity(filesRootIdentity.identity);
        this.recoveryDisarmed = false;
    }
    clearCompromisedFilesRoot(summary) {
        this.assertRootStillBound("wiping files/");
        this.clearRemoteVersion(summary, "before_wipe");
        try {
            fs26.rmSync(this.filesDir, {
                recursive: true,
                force: true
            });
            return true;
        } catch (error3) {
            if (isNodeError5(error3) && error3.code === "ENOENT") {
                return true;
            }
            summary.errors.push({
                relPath: void 0,
                code: "fs_write_failed",
                message: `Failed to clear compromised agent store files root: ${error3 instanceof Error ? error3.message : String(error3)}`
            });
            return false;
        }
    }
    prepareIdentityRecovery(summary) {
        if (!this.tryRemoveObstructingFilesRoot(summary)) {
            return false;
        }
        if (!this.clearCompromisedFilesRoot(summary)) {
            return false;
        }
        this.enterDeletionRecovery(summary);
        return true;
    }
    async pullAllWithFollowUpWipe(summary) {
        const identityBefore = this.probeFilesRootIdentity();
        await this.pullAll(summary);
        const identityAfter = this.probeFilesRootIdentity();
        if (!filesRootIdentityCompromisedDuringRound({
            start: identityBefore,
            end: identityAfter
        })) {
            return true;
        }
        if (!this.clearCompromisedFilesRoot(summary)) {
            return false;
        }
        this.ensureDirsExist();
        await this.pullAll(summary);
        return true;
    }
    tryRemoveObstructingFilesRoot(summary) {
        try {
            const stat24 = fs26.lstatSync(this.filesDir);
            if (!stat24.isDirectory() || stat24.isSymbolicLink()) {
                fs26.rmSync(this.filesDir, {
                    recursive: true,
                    force: true
                });
            }
            return true;
        } catch (error3) {
            if (isNodeError5(error3) && error3.code === "ENOENT") {
                return true;
            }
            summary.errors.push({
                relPath: void 0,
                code: "fs_write_failed",
                message: `Failed to clear obstructing agent store files root: ${error3 instanceof Error ? error3.message : String(error3)}`
            });
            return false;
        }
    }
    isDeletionArmed() {
        return this.index.getMeta(DELETION_ARMED_META_KEY) === "1";
    }
    probeFilesRootIdentity() {
        try {
            const stat24 = fs26.lstatSync(this.filesDir);
            if (!stat24.isDirectory() || stat24.isSymbolicLink()) {
                return {
                    kind: "absent"
                };
            }
            return {
                kind: "present",
                identity: {
                    dev: stat24.dev,
                    ino: stat24.ino
                }
            };
        } catch (error3) {
            if (isNodeError5(error3) && error3.code === "ENOENT") {
                return {
                    kind: "absent"
                };
            }
            return {
                kind: "unreadable"
            };
        }
    }
    enterDeletionRecovery(summary) {
        this.index.disarmDeletionAndClearPending();
        this.recoveryDisarmed = true;
        summary.recoveryDisarms++;
    }
    detectScanDeletions(walk2, summary) {
        if (this.syncMode === "readOnly") {
            return "ok";
        }
        if (this.lockProvider !== void 0 && this.lockHandle === void 0) {
            return "ok";
        }
        if (!this.isDeletionArmed() || this.recoveryDisarmed) {
            return "ok";
        }
        this.assertRootStillBound("delete scan");
        const rootIdentity = this.checkRecordedFilesRootIdentity();
        if (rootIdentity === "compromised") {
            if (!this.prepareIdentityRecovery(summary)) {
                summary.identityRecoveryWipeFailed = true;
                return "abort_uploads";
            }
            return "abort_uploads";
        }
        if (rootIdentity === "unreadable") {
            summary.errors.push({
                relPath: void 0,
                code: "fs_read_failed",
                message: `Agent store files root temporarily unreadable; pending deletes retained`
            });
            return "hold";
        }
        const presentPaths = new Set(walk2.files.map((file)=>file.relPath));
        for (const entry of this.index.listFiles()){
            if (entry.state === "tombstoned") {
                continue;
            }
            if (isReservedRelPath(entry.relPath)) {
                continue;
            }
            if (presentPaths.has(entry.relPath)) {
                continue;
            }
            if (this.index.hasPendingDelete(entry.relPath)) {
                continue;
            }
            if (refusalCoversPath(walk2.refusals, entry.relPath)) {
                continue;
            }
            if (entry.lastSeenEtag === void 0 || entry.lastSeenEtag.length === 0) {
                summary.legacyRowsRestored++;
                continue;
            }
            let absPath;
            try {
                absPath = resolveSafeChildPath({
                    base: this.filesDir,
                    relPath: entry.relPath
                });
            } catch  {
                continue;
            }
            try {
                fs26.lstatSync(absPath);
                continue;
            } catch (error3) {
                if (!isNodeError5(error3) || error3.code !== "ENOENT") {
                    continue;
                }
            }
            this.index.upsertPendingDelete({
                relPath: entry.relPath,
                baseEtag: entry.lastSeenEtag,
                requestedAtMs: this.now(),
                mutationId: (0, import_node_crypto50.randomUUID)()
            });
            summary.scanDeletesJournaled++;
        }
        return "ok";
    }
    checkRecordedFilesRootIdentity() {
        const recordedDev = this.index.getMeta(FILES_ROOT_DEV_META_KEY);
        const recordedIno = this.index.getMeta(FILES_ROOT_INO_META_KEY);
        if (recordedDev === void 0 || recordedIno === void 0) {
            return "compromised";
        }
        const probe = this.probeFilesRootIdentity();
        switch(probe.kind){
            case "unreadable":
                return "unreadable";
            case "absent":
                return "compromised";
            case "present":
                return String(probe.identity.dev) === recordedDev && String(probe.identity.ino) === recordedIno ? "intact" : "compromised";
            default:
                {
                    const _exhaustive = probe;
                    throw new Error(`unexpected files root probe: ${_exhaustive}`);
                }
        }
    }
    syncRoundStillAuthorized() {
        if (this.disposed) {
            return false;
        }
        if (this.state !== "running") {
            return false;
        }
        if (this.lockProvider !== void 0 && this.lockHandle === void 0) {
            return false;
        }
        return true;
    }
    assertRootStillBound(where) {
        const fence2 = this.rootIdFence;
        if (fence2 === void 0 || !fence2.enabled) {
            return;
        }
        const probe = probeAgentStoreRootId(fence2.rootIdPath);
        if (probe.kind === "present" && probe.rootId === fence2.expected) {
            return;
        }
        if (probe.kind === "unreadable") {
            throw new AgentStoreSyncError({
                code: "fs_read_failed",
                message: `Agent store root id unreadable before ${where}`
            });
        }
        throw new AgentStoreSyncError({
            code: "root_retired",
            message: `Agent store root identity changed before ${where}`
        });
    }
    async flushPendingDeletes(args) {
        this.assertRootStillBound("delete flush");
        const { summary, presentRelPaths, refusals = [], scopeRelPaths } = args;
        const pending = scopeRelPaths === void 0 ? this.index.listPendingDeletes() : this.index.listPendingDeletes().filter((entry)=>scopeRelPaths.has(entry.relPath));
        if (pending.length === 0) {
            await this.flushPendingRmdirs({
                summary,
                ackedDeletePaths: [],
                refusals,
                presentRelPaths,
                scopeRelPaths
            });
            return;
        }
        const toDelete = [];
        for (const entry of pending){
            if (isReservedRelPath(entry.relPath)) {
                this.index.removePendingDelete(entry.relPath);
                continue;
            }
            if (presentRelPaths.has(entry.relPath)) {
                this.index.removePendingDelete(entry.relPath);
                continue;
            }
            if (refusalCoversPath(refusals, entry.relPath)) {
                this.index.removePendingDelete(entry.relPath);
                continue;
            }
            let absPath;
            try {
                absPath = resolveSafeChildPath({
                    base: this.filesDir,
                    relPath: entry.relPath
                });
            } catch  {
                this.index.removePendingDelete(entry.relPath);
                continue;
            }
            try {
                fs26.lstatSync(absPath);
                this.index.removePendingDelete(entry.relPath);
                continue;
            } catch (error3) {
                if (!isNodeError5(error3) || error3.code !== "ENOENT") {
                    this.index.removePendingDelete(entry.relPath);
                    summary.errors.push({
                        relPath: entry.relPath,
                        code: "delete_failed",
                        message: error3 instanceof Error ? error3.message : String(error3)
                    });
                    continue;
                }
            }
            toDelete.push(entry);
        }
        if (toDelete.length === 0) {
            await this.flushPendingRmdirs({
                summary,
                ackedDeletePaths: [],
                refusals,
                presentRelPaths,
                scopeRelPaths
            });
            return;
        }
        const deleteFiles = this.client.deleteFiles?.bind(this.client);
        if (deleteFiles === void 0) {
            summary.errors.push({
                relPath: void 0,
                code: "delete_failed",
                message: `Agent store client for ${this.agentId} does not support deleteFiles; ${toDelete.length} pending delete(s) deferred`
            });
            await this.flushPendingRmdirs({
                summary,
                ackedDeletePaths: [],
                refusals,
                presentRelPaths,
                scopeRelPaths
            });
            return;
        }
        const ackedDeletePaths = [];
        for(let offset = 0; offset < toDelete.length; offset += DELETE_FLUSH_BATCH_SIZE){
            const batch = toDelete.slice(offset, offset + DELETE_FLUSH_BATCH_SIZE);
            let outcomes;
            await this.assertRoundStillOwnsLock();
            try {
                outcomes = await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>deleteFiles({
                        agentId: this.agentId,
                        files: batch.map((entry)=>({
                                relPath: entry.relPath,
                                baseEtag: entry.baseEtag,
                                ...entry.mutationId !== void 0 ? {
                                    mutationId: entry.mutationId
                                } : {}
                            })),
                        signal: this.activeRoundSignal
                    }));
            } catch (error3) {
                this.rethrowIfRoundAbort(error3);
                summary.errors.push({
                    relPath: void 0,
                    code: "delete_failed",
                    message: `Failed to delete ${toDelete.length - offset} agent store file(s): ${error3 instanceof Error ? error3.message : String(error3)}`
                });
                await this.flushPendingRmdirs({
                    summary,
                    ackedDeletePaths,
                    refusals,
                    presentRelPaths,
                    scopeRelPaths
                });
                return;
            }
            const outcomeByPath = new Map(outcomes.map((outcome)=>[
                    outcome.relPath,
                    outcome
                ]));
            for (const entry of batch){
                const outcome = outcomeByPath.get(entry.relPath);
                if (outcome === void 0) {
                    summary.errors.push({
                        relPath: entry.relPath,
                        code: "delete_failed",
                        message: `Server returned no delete outcome for ${entry.relPath}`
                    });
                    continue;
                }
                this.index.removePendingDelete(entry.relPath);
                switch(outcome.status){
                    case "deleted":
                    case "already_deleted":
                        {
                            const tombstoneEtag = outcome.tombstoneEtag;
                            if (tombstoneEtag !== void 0 && tombstoneEtag.length > 0) {
                                const existing = this.index.getFile(entry.relPath);
                                this.index.upsertFile({
                                    relPath: entry.relPath,
                                    lastSyncedSha: existing?.lastSyncedSha ?? "",
                                    ...existing?.lastSeenEtag !== void 0 ? {
                                        lastSeenEtag: existing.lastSeenEtag
                                    } : {},
                                    size: existing?.size ?? 0,
                                    lastSyncedMs: this.now(),
                                    direction: existing?.direction ?? "pushed",
                                    state: "tombstoned",
                                    tombstoneEtag,
                                    deletedAtMs: this.now()
                                });
                            } else {
                                this.index.deleteFile(entry.relPath);
                            }
                            summary.filesDeletedRemote++;
                            ackedDeletePaths.push(entry.relPath);
                            break;
                        }
                    case "conflict":
                        summary.deleteConflicts++;
                        break;
                }
            }
        }
        await this.flushPendingRmdirs({
            summary,
            ackedDeletePaths,
            refusals,
            presentRelPaths,
            scopeRelPaths
        });
    }
    async flushPendingRmdirs(args) {
        const { summary, ackedDeletePaths, refusals, presentRelPaths } = args;
        const candidates = new Set();
        for (const relPath of ackedDeletePaths){
            const parent = parentRelPath(relPath);
            if (parent !== void 0 && parent !== "") {
                candidates.add(parent);
            }
        }
        for (const entry of this.index.listPendingRmdirs()){
            if (args.scopeRelPaths !== void 0 && !relPathIsInScope(entry.relPath, args.scopeRelPaths)) {
                continue;
            }
            candidates.add(entry.relPath);
        }
        if (candidates.size === 0) {
            return;
        }
        const rmdir3 = this.client.rmdir?.bind(this.client);
        const dropSkipped = (dir)=>{
            if (this.index.hasLiveDescendantFiles(dir) || presentRelPathsHasDescendant(presentRelPaths, dir)) {
                this.index.removePendingRmdir(dir);
                return true;
            }
            if (refusalCoversPath(refusals, dir)) {
                this.index.removePendingRmdir(dir);
                return true;
            }
            return false;
        };
        if (rmdir3 === void 0) {
            for (const dir of candidates){
                if (dropSkipped(dir)) {
                    continue;
                }
                if (!this.hasPendingDeletesUnder(dir) && !this.index.hasPendingRmdir(dir)) {
                    this.index.upsertPendingRmdir({
                        relPath: dir,
                        requestedAtMs: this.now()
                    });
                }
            }
            return;
        }
        for (const dir of candidates){
            if (dropSkipped(dir)) {
                continue;
            }
            this.index.upsertPendingRmdir({
                relPath: dir,
                requestedAtMs: this.now()
            });
        }
        const queue = [
            ...candidates
        ].sort(compareRelPathDepthDesc);
        const seen = new Set();
        let rmdirAttempts = 0;
        while(queue.length > 0){
            const dir = queue.shift();
            if (dir === "" || seen.has(dir)) {
                continue;
            }
            seen.add(dir);
            if (relPathDepth(dir) > MAX_RMDIR_CHAIN_DEPTH) {
                this.index.removePendingRmdir(dir);
                const parent2 = parentRelPath(dir);
                if (parent2 !== void 0 && parent2 !== "" && !seen.has(parent2)) {
                    this.index.upsertPendingRmdir({
                        relPath: parent2,
                        requestedAtMs: this.now()
                    });
                    queue.push(parent2);
                    queue.sort(compareRelPathDepthDesc);
                }
                continue;
            }
            if (this.hasPendingDeletesUnder(dir)) {
                continue;
            }
            if (dropSkipped(dir)) {
                continue;
            }
            let dirStat;
            try {
                dirStat = safeLstatDirectory({
                    base: this.filesDir,
                    relPath: dir
                });
            } catch (error3) {
                if (error3 instanceof UnsafeAgentStorePathError) {
                    this.index.removePendingRmdir(dir);
                    continue;
                }
                if (!isNodeError5(error3) || error3.code !== "ENOENT") {
                    continue;
                }
                dirStat = {
                    kind: "absent"
                };
            }
            if (dirStat.kind === "refused") {
                const reusedName = dirStat.refusal.relPath === dir && dirStat.refusal.reason === "not_regular_file";
                if (!reusedName) {
                    this.index.removePendingRmdir(dir);
                    continue;
                }
            }
            if (dirStat.kind === "directory") {
                continue;
            }
            if (rmdirAttempts >= RMDIR_FLUSH_MAX_PER_ROUND) {
                break;
            }
            this.index.upsertPendingRmdir({
                relPath: dir,
                requestedAtMs: this.now()
            });
            await this.assertRoundStillOwnsLock();
            rmdirAttempts += 1;
            try {
                await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>rmdir3({
                        agentId: this.agentId,
                        relPath: dir,
                        signal: this.activeRoundSignal
                    }));
            } catch (error3) {
                this.rethrowIfRoundAbort(error3);
                if (error3 instanceof AgentStoreDirectoryNotEmptyError) {
                    this.index.removePendingRmdir(dir);
                    let ancestor = parentRelPath(dir);
                    while(ancestor !== void 0 && ancestor !== ""){
                        this.index.removePendingRmdir(ancestor);
                        seen.add(ancestor);
                        ancestor = parentRelPath(ancestor);
                    }
                    continue;
                }
                summary.errors.push({
                    relPath: dir,
                    code: "delete_failed",
                    message: `Failed to rmdir ${dir}: ${error3 instanceof Error ? error3.message : String(error3)}`
                });
                return;
            }
            this.index.removePendingRmdir(dir);
            summary.rmdirPushed = (summary.rmdirPushed ?? 0) + 1;
            const parent = parentRelPath(dir);
            if (parent !== void 0 && parent !== "" && !seen.has(parent)) {
                this.index.upsertPendingRmdir({
                    relPath: parent,
                    requestedAtMs: this.now()
                });
                queue.push(parent);
                queue.sort(compareRelPathDepthDesc);
            }
        }
    }
    hasPendingDeletesUnder(dir) {
        return this.index.hasPendingDeletesUnder(dir);
    }
    hasLiveIndexRowsUnder(dir) {
        return this.index.hasLiveFilesUnder(dir);
    }
    async pushAll(summary = emptySummary()) {
        this.ensureDirsExist();
        if (this.activeRoundSignal === void 0) {
            this.unboundByteBudgets.clear();
        }
        this.stripJournaledPendingConflictMirrors();
        this.roundJournaledConflictEmits = [];
        this.flushPendingConflictJournalEmits();
        try {
            return await this.pushAllBody(summary);
        } finally{
            this.stripJournaledPendingConflictMirrors();
        }
    }
    async pushAllBody(summary) {
        const walk2 = safeWalk(this.filesDir);
        summary.reservedPathsSkipped = (summary.reservedPathsSkipped ?? 0) + partitionReservedWalkFiles(walk2);
        const scanOutcome = this.detectScanDeletions(walk2, summary);
        if (this.syncMode === "readOnly") {
            for (const entry of this.index.listPendingDeletes()){
                this.index.removePendingDelete(entry.relPath);
            }
            for (const entry of this.index.listPendingRmdirs()){
                this.index.removePendingRmdir(entry.relPath);
            }
        } else if (scanOutcome === "ok") {
            await this.flushPendingDeletes({
                summary,
                presentRelPaths: new Set(walk2.files.map((file)=>file.relPath)),
                refusals: walk2.refusals
            });
        }
        if (this.syncMode === "readOnly" || scanOutcome === "abort_uploads" || summary.recoveryDisarms > 0) {
            return summary;
        }
        for (const refusal of walk2.refusals){
            summary.refusals++;
            summary.errors.push({
                relPath: refusal.relPath,
                code: refusal.reason,
                message: `Skipped ${refusal.relPath} (${refusal.reason})`
            });
        }
        const indexed = new Map();
        for (const entry of this.index.listFiles()){
            indexed.set(entry.relPath, entry);
        }
        const candidates = [];
        const caseCollisionKeys = new Map();
        for (const file of walk2.files){
            const collisionKey = file.relPath.toLowerCase();
            const previous = caseCollisionKeys.get(collisionKey);
            if (previous !== void 0 && previous !== file.relPath) {
                summary.errors.push({
                    relPath: file.relPath,
                    code: "case_collision",
                    message: `Agent store has case-colliding paths: ${previous} and ${file.relPath}`
                });
                continue;
            }
            caseCollisionKeys.set(collisionKey, file.relPath);
            if (file.size > this.maxFileSizeBytes) {
                summary.errors.push({
                    relPath: file.relPath,
                    code: "file_too_large",
                    message: `File ${file.relPath} (${file.size} bytes) exceeds the ${this.maxFileSizeBytes}-byte cap`
                });
                continue;
            }
            const existing = indexed.get(file.relPath);
            const candidate = {
                relPath: file.relPath,
                absPath: file.absPath,
                size: file.size,
                mtimeMs: file.mtimeMs,
                dev: file.dev,
                ino: file.ino,
                existing
            };
            candidates.push(candidate);
        }
        const hashed = await Promise.all(candidates.map((candidate)=>this.trackQueue((operation)=>this.queues.hash.enqueue(operation), ()=>{
                this.throwIfRoundAborted(candidate.relPath);
                return this.hashCandidate(candidate);
            }, "local")));
        const toUpload = this.selectUploadable(hashed, summary);
        await this.uploadHashedCandidates(toUpload, summary);
        return summary;
    }
    selectUploadable(hashed, summary) {
        const toUpload = [];
        for (const result of hashed){
            if (result.kind === "stat_unchanged") {
                summary.filesSkipped++;
                this.noteStatFastPath("hit");
                this.clearPushPark(result.relPath);
                this.index.upsertFile({
                    ...result.existing,
                    lastSyncedMs: this.now()
                });
                continue;
            }
            if (result.kind === "error") {
                summary.errors.push({
                    relPath: result.relPath,
                    code: result.code,
                    message: result.message
                });
                continue;
            }
            if (result.statFastPathAudit === "skip") {
                const matched = result.existing !== void 0 && result.existing.state !== "tombstoned" && result.existing.lastSyncedSha === result.sha && result.existing.size === result.size;
                this.noteStatFastPath(matched ? "hit" : "mismatch");
                if (!matched) {
                    this.index.clearRecordedStat(result.relPath);
                }
            }
            if (result.existing !== void 0 && result.existing.state !== "tombstoned" && result.existing.lastSyncedSha === result.sha && result.existing.size === result.size) {
                summary.filesSkipped++;
                this.clearPushPark(result.relPath);
                this.index.upsertFile({
                    ...result.existing,
                    lastSyncedMs: this.now(),
                    recordedStat: this.captureRecordedStat(result)
                });
                continue;
            }
            if (this.isPushParked(result.relPath)) {
                summary.pushEntriesParked++;
                continue;
            }
            toUpload.push(result);
        }
        return toUpload;
    }
    async uploadHashedCandidates(toUpload, summary, options2 = {}) {
        if (toUpload.length === 0) {
            return;
        }
        const { preconditions: preconditionByPath, skippedDueToListingFailure } = await this.resolvePushPreconditions(toUpload, summary, {
            preferProbeForLegacy: options2.preferProbeForLegacy
        });
        let uploadable = toUpload.filter((candidate)=>!skippedDueToListingFailure.has(candidate.relPath));
        if (uploadable.length === 0) {
            return;
        }
        this.throwIfRoundAborted();
        if (this.pushOrder === "size_asc") {
            uploadable = [
                ...uploadable
            ].sort((a, b2)=>a.size - b2.size);
        }
        for(let windowStart = 0; windowStart < uploadable.length; windowStart += this.multipartPresignWindowSize){
            await this.pushUploadWindow({
                candidates: uploadable.slice(windowStart, windowStart + this.multipartPresignWindowSize),
                preconditionByPath,
                summary,
                signal: options2.signal
            });
        }
    }
    async pushUploadWindow(args) {
        const toUpload = args.candidates;
        const preconditionByPath = args.preconditionByPath;
        const summary = args.summary;
        this.throwIfRoundAborted();
        await this.assertRoundStillOwnsLock();
        let presigned;
        const presignStart = this.monotonicNow();
        try {
            presigned = await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>this.client.presignWrites({
                    agentId: this.agentId,
                    files: toUpload.map((candidate)=>{
                        const precondition = preconditionByPath.get(candidate.relPath);
                        return {
                            relPath: candidate.relPath,
                            sha: candidate.sha,
                            size: candidate.size,
                            ...precondition !== void 0 ? {
                                multipartParts: candidate.multipartParts,
                                ...precondition
                            } : {}
                        };
                    }),
                    signal: this.activeRoundSignal
                }));
        } catch (error3) {
            this.rethrowIfRoundAbort(error3);
            if (isAgentStoreSyncDisabledError(error3)) {
                throw error3;
            }
            if (!isAgentStoreConnectCode(error3, Code.FailedPrecondition) && !isAgentStoreConnectCode(error3, Code.InvalidArgument)) {
                throw error3;
            }
            const unconditional = toUpload.filter((candidate)=>!preconditionByPath.has(candidate.relPath));
            const quota = parseAgentStoreQuotaExceeded(error3);
            const toPark = quota !== void 0 ? toUpload : unconditional.length > 0 ? unconditional : toUpload;
            for (const candidate of toPark){
                if (quota !== void 0) {
                    this.parkQuotaExceededEntry({
                        relPath: candidate.relPath,
                        absPath: candidate.absPath,
                        summary,
                        quota,
                        message: agentStoreErrorSummaryMessage(error3, "Agent-store quota exceeded")
                    });
                } else {
                    this.parkPushEntry({
                        relPath: candidate.relPath,
                        summary,
                        message: error3 instanceof Error ? error3.message : "Terminal push rejection from presignWrites"
                    });
                }
            }
            return;
        }
        summary.presignMs = (summary.presignMs ?? 0) + (this.monotonicNow() - presignStart);
        this.throwIfRoundAborted();
        const presignedByPath = new Map();
        for (const presign of presigned){
            let canonical;
            try {
                canonical = normalizeRelPath(presign.relPath);
            } catch (error3) {
                summary.errors.push({
                    relPath: presign.relPath,
                    code: "presign_response_mismatch",
                    message: `Server returned an unsafe relPath: ${presign.relPath} (${error3 instanceof Error ? error3.message : String(error3)})`
                });
                continue;
            }
            presignedByPath.set(canonical, presign);
        }
        const multipartPaths = await this.processMultipartWrites({
            candidates: toUpload,
            presignedByPath,
            preconditionByPath,
            summary
        });
        const uploadStart = this.monotonicNow();
        await Promise.all(toUpload.map(async (candidate)=>{
            await this.assertRoundStillOwnsLock(candidate.relPath, {
                bypassCache: true
            });
            if (multipartPaths.has(candidate.relPath)) {
                return;
            }
            const presign = presignedByPath.get(candidate.relPath);
            if (presign === void 0) {
                summary.errors.push({
                    relPath: candidate.relPath,
                    code: "presign_response_mismatch",
                    message: `Server returned no presigned URL for ${candidate.relPath}`
                });
                return;
            }
            if (presign.sha !== candidate.sha) {
                summary.errors.push({
                    relPath: candidate.relPath,
                    code: "presign_response_mismatch",
                    message: `Presigned write sha mismatch for ${candidate.relPath} (got ${presign.sha}, expected ${candidate.sha})`
                });
                return;
            }
            const precondition = preconditionByPath.get(candidate.relPath);
            if (presignHasExpiredLockRedirect(presign, this.now())) {
                try {
                    await this.refreshAndCompleteLegacyWrite({
                        candidate,
                        precondition,
                        summary
                    });
                } catch (error3) {
                    if (this.tryParkQuotaExceeded({
                        relPath: candidate.relPath,
                        absPath: candidate.absPath,
                        summary,
                        error: error3
                    })) {
                        return;
                    }
                    summary.errors.push(syncRoundErrorFor(candidate.relPath, error3));
                }
                return;
            }
            if (presignUsesConflictTarget(presign)) {
                if (precondition === void 0 || presign.conflict === void 0) {
                    summary.errors.push({
                        relPath: candidate.relPath,
                        code: "presign_response_mismatch",
                        message: `Conflict-directed write for ${candidate.relPath} did not include a conflict target and write precondition`
                    });
                    return;
                }
                try {
                    await this.handleWriteConflict({
                        candidate,
                        conflict: presign.conflict,
                        precondition,
                        summary,
                        suppressIfRemoteIdentical: presign.primaryPreconditionFailed === true
                    });
                } catch (error3) {
                    this.rethrowIfRoundAbort(error3, candidate.relPath);
                    this.rethrowIfLockLost(error3);
                    if (this.tryParkQuotaExceeded({
                        relPath: candidate.relPath,
                        absPath: candidate.absPath,
                        summary,
                        error: error3
                    })) {
                        return;
                    }
                    this.emitConflictFallbackFailed({
                        candidate
                    });
                    summary.errors.push(syncRoundErrorFor(candidate.relPath, error3));
                }
                return;
            }
            if (presign.expiresAtMs <= this.now()) {
                try {
                    await this.refreshAndCompleteLegacyWrite({
                        candidate,
                        precondition,
                        summary
                    });
                } catch (error3) {
                    if (this.tryParkQuotaExceeded({
                        relPath: candidate.relPath,
                        absPath: candidate.absPath,
                        summary,
                        error: error3
                    })) {
                        return;
                    }
                    summary.errors.push(syncRoundErrorFor(candidate.relPath, error3));
                }
                return;
            }
            const conflictProtectionDowngraded = precondition !== void 0 && presign.conflict === void 0;
            if (conflictProtectionDowngraded) {
                if (presignHasConditionalHeaders(presign)) {
                    summary.errors.push({
                        relPath: candidate.relPath,
                        code: "presign_response_mismatch",
                        message: `Presigned write for ${candidate.relPath} carries a conditional header but no conflict instruction`
                    });
                    return;
                }
            }
            try {
                const uploaded = await this.uploadPrimaryWithConflictRetry(candidate, presign, summary);
                this.recordPrimaryPushSuccess({
                    candidate,
                    etag: uploaded.etag,
                    summary
                });
                if (conflictProtectionDowngraded) {
                    summary.conflictProtectionDowngrades++;
                }
            } catch (error3) {
                this.rethrowIfRoundAbort(error3, candidate.relPath);
                this.rethrowIfLockLost(error3);
                if (isAgentStoreSyncDisabledError(error3)) {
                    throw error3;
                }
                if (isAgentStoreConnectCode(error3, Code.FailedPrecondition) || isAgentStoreConnectCode(error3, Code.InvalidArgument)) {
                    const quota = parseAgentStoreQuotaExceeded(error3);
                    if (quota !== void 0) {
                        this.parkQuotaExceededEntry({
                            relPath: candidate.relPath,
                            absPath: candidate.absPath,
                            summary,
                            quota,
                            message: agentStoreErrorSummaryMessage(error3, "Agent-store quota exceeded")
                        });
                    } else {
                        this.parkPushEntry({
                            relPath: candidate.relPath,
                            summary,
                            message: error3 instanceof Error ? error3.message : "Terminal push rejection during upload"
                        });
                    }
                    return;
                }
                if (isPresignedUrlExpiredError(error3)) {
                    try {
                        await this.refreshAndCompleteLegacyWrite({
                            candidate,
                            precondition,
                            summary
                        });
                    } catch (refreshError) {
                        if (this.tryParkQuotaExceeded({
                            relPath: candidate.relPath,
                            absPath: candidate.absPath,
                            summary,
                            error: refreshError
                        })) {
                            return;
                        }
                        summary.errors.push(syncRoundErrorFor(candidate.relPath, refreshError));
                    }
                    return;
                }
                if (isWriteConflictError(error3) && precondition !== void 0 && presign.conflict !== void 0) {
                    try {
                        await this.handleWriteConflict({
                            candidate,
                            conflict: presign.conflict,
                            precondition,
                            summary,
                            suppressIfRemoteIdentical: true
                        });
                        return;
                    } catch (conflictError) {
                        this.rethrowIfRoundAbort(conflictError, candidate.relPath);
                        this.rethrowIfLockLost(conflictError);
                        if (this.tryParkQuotaExceeded({
                            relPath: candidate.relPath,
                            absPath: candidate.absPath,
                            summary,
                            error: conflictError
                        })) {
                            return;
                        }
                        this.emitConflictFallbackFailed({
                            candidate
                        });
                        summary.errors.push(syncRoundErrorFor(candidate.relPath, conflictError));
                        return;
                    }
                }
                summary.errors.push(syncRoundErrorFor(candidate.relPath, error3));
            }
        }));
        summary.uploadMs = (summary.uploadMs ?? 0) + (this.monotonicNow() - uploadStart);
    }
    async processMultipartWrites(args) {
        const handledPaths = new Set();
        const pendingContexts = new Map();
        const initialWorks = [];
        return await this.withPendingMultipartContexts(pendingContexts, async ()=>{
            for (const candidate of args.candidates){
                const presign = args.presignedByPath.get(candidate.relPath);
                if (presign === void 0) {
                    continue;
                }
                const useConflictDirectly = presignUsesConflictTarget(presign);
                const hasMultipartContext = presign.multipart !== void 0 || presign.conflict?.multipart !== void 0;
                if (!hasMultipartContext) {
                    continue;
                }
                const precondition = args.preconditionByPath.get(candidate.relPath);
                try {
                    this.registerMultipartContexts({
                        presign,
                        pendingContexts
                    });
                    if (presign.sha !== candidate.sha || precondition === void 0) {
                        continue;
                    }
                    let work;
                    if (useConflictDirectly) {
                        const conflict = presign.conflict;
                        if (conflict?.multipart === void 0) {
                            continue;
                        }
                        if (presign.primaryPreconditionFailed === true && await this.trySuppressIdenticalWriteConflict(candidate, args.summary)) {
                            handledPaths.add(candidate.relPath);
                            continue;
                        }
                        work = {
                            target: "conflict",
                            candidate,
                            presign,
                            conflict,
                            upload: conflict.multipart,
                            precondition,
                            restartCount: 0,
                            conflictRenameCount: 0,
                            expiryRefreshCount: 0
                        };
                    } else {
                        if (presign.multipart === void 0) {
                            continue;
                        }
                        if (presign.conflict === void 0) {
                            throw new AgentStoreSyncError({
                                code: "presign_response_mismatch",
                                relPath: candidate.relPath,
                                message: `Multipart primary write for ${candidate.relPath} did not include conflict protection`
                            });
                        }
                        work = {
                            target: "primary",
                            candidate,
                            presign,
                            upload: presign.multipart,
                            precondition,
                            restartCount: 0,
                            conflictRenameCount: 0,
                            expiryRefreshCount: 0
                        };
                    }
                    initialWorks.push(work);
                    handledPaths.add(candidate.relPath);
                } catch (error3) {
                    this.rethrowIfRoundAbort(error3, candidate.relPath);
                    args.summary.errors.push(syncRoundErrorFor(candidate.relPath, error3));
                }
            }
            let works = initialWorks;
            while(works.length > 0){
                works = await this.runMultipartWorkWave({
                    works,
                    pendingContexts,
                    summary: args.summary
                });
            }
            return handledPaths;
        });
    }
    async runMultipartWorkWave(args) {
        const outcomes = await Promise.all(args.works.map(async (originalWork)=>{
            let work = originalWork;
            try {
                while(work.upload.partUrlsExpiresAtMs <= this.now() || presignHasExpiredLockRedirect(work.presign, this.now())){
                    const refreshed = await this.refreshExpiredMultipartWork({
                        work,
                        pendingContexts: args.pendingContexts,
                        summary: args.summary
                    });
                    if (refreshed === void 0) {
                        return {
                            kind: "finished"
                        };
                    }
                    work = refreshed;
                }
                return {
                    kind: "uploaded",
                    entry: await this.uploadMultipartWork(work, args.pendingContexts)
                };
            } catch (error3) {
                this.rethrowIfRoundAbort(error3, work.candidate.relPath);
                this.rethrowIfLockLost(error3);
                if (isPresignedUrlExpiredError(error3)) {
                    try {
                        const refreshed = await this.refreshExpiredMultipartWork({
                            work,
                            pendingContexts: args.pendingContexts,
                            summary: args.summary
                        });
                        return refreshed === void 0 ? {
                            kind: "finished"
                        } : {
                            kind: "retry",
                            work: refreshed
                        };
                    } catch (refreshError) {
                        this.rethrowIfRoundAbort(refreshError, work.candidate.relPath);
                        this.rethrowIfLockLost(refreshError);
                        if (this.tryParkQuotaExceeded({
                            relPath: work.candidate.relPath,
                            absPath: work.candidate.absPath,
                            summary: args.summary,
                            error: refreshError
                        })) {
                            return {
                                kind: "finished"
                            };
                        }
                        args.summary.errors.push(syncRoundErrorFor(work.candidate.relPath, refreshError));
                        return {
                            kind: "finished"
                        };
                    }
                }
                if (this.tryParkQuotaExceeded({
                    relPath: work.candidate.relPath,
                    absPath: work.candidate.absPath,
                    summary: args.summary,
                    error: error3
                })) {
                    return {
                        kind: "finished"
                    };
                }
                args.summary.errors.push(syncRoundErrorFor(work.candidate.relPath, error3));
                return {
                    kind: "finished"
                };
            }
        }));
        const uploaded = outcomes.filter((outcome)=>outcome.kind === "uploaded").map((outcome)=>outcome.entry);
        const nextWorks = outcomes.filter((outcome)=>outcome.kind === "retry").map((outcome)=>outcome.work);
        if (uploaded.length === 0) {
            return nextWorks;
        }
        this.throwIfRoundAborted();
        let results;
        try {
            await this.assertRoundStillOwnsLock(void 0, {
                bypassCache: true
            });
            results = await this.completeMultipartWithTransientRetries(uploaded);
        } catch (error3) {
            this.rethrowIfRoundAbort(error3);
            this.rethrowIfLockLost(error3);
            for (const entry of uploaded){
                if (this.tryParkQuotaExceeded({
                    relPath: entry.work.candidate.relPath,
                    absPath: entry.work.candidate.absPath,
                    summary: args.summary,
                    error: error3
                })) {
                    continue;
                }
                args.summary.errors.push(syncRoundErrorFor(entry.work.candidate.relPath, error3));
            }
            return nextWorks;
        }
        for(let index = 0; index < uploaded.length; index++){
            const entry = uploaded[index];
            const result = results[index];
            if (entry === void 0 || result === void 0) {
                continue;
            }
            if (result.kind === "rpc_error") {
                this.rethrowIfRoundAbort(result.error, entry.work.candidate.relPath);
                if (this.tryParkQuotaExceeded({
                    relPath: entry.work.candidate.relPath,
                    absPath: entry.work.candidate.absPath,
                    summary: args.summary,
                    error: result.error
                })) {
                    continue;
                }
                args.summary.errors.push(syncRoundErrorFor(entry.work.candidate.relPath, result.error));
                continue;
            }
            try {
                const next = await this.handleMultipartCompletionResult({
                    entry,
                    result,
                    pendingContexts: args.pendingContexts,
                    summary: args.summary
                });
                if (next !== void 0) {
                    nextWorks.push(next);
                }
            } catch (error3) {
                this.rethrowIfRoundAbort(error3, entry.work.candidate.relPath);
                this.rethrowIfLockLost(error3);
                if (this.tryParkQuotaExceeded({
                    relPath: entry.work.candidate.relPath,
                    absPath: entry.work.candidate.absPath,
                    summary: args.summary,
                    error: error3
                })) {
                    continue;
                }
                args.summary.errors.push(syncRoundErrorFor(entry.work.candidate.relPath, error3));
            }
        }
        return nextWorks;
    }
    async refreshExpiredMultipartWork(args) {
        if (args.work.expiryRefreshCount >= this.multipartMaxExpiryRefreshes) {
            throw new AgentStoreSyncError({
                code: "presigned_url_expired",
                relPath: args.work.candidate.relPath,
                message: `Multipart upload URLs for ${args.work.candidate.relPath} expired again after a fresh presign`,
                retryable: false
            });
        }
        await this.assertRoundStillOwnsLock(args.work.candidate.relPath, {
            bypassCache: true
        });
        return await this.presignFreshMultipartWork({
            previous: args.work,
            pendingContexts: args.pendingContexts,
            summary: args.summary,
            expiryRefreshCount: args.work.expiryRefreshCount + 1
        });
    }
    async uploadMultipartWork(work, pendingContexts) {
        const relPath = work.target === "primary" ? work.candidate.relPath : work.conflict.relPath;
        this.validateMultipartInstruction(work);
        const multipartParts = work.candidate.multipartParts;
        if (multipartParts === void 0) {
            throw new AgentStoreSyncError({
                code: "presign_response_mismatch",
                relPath: work.candidate.relPath,
                message: `Multipart instructions were returned without client part checksums for ${work.candidate.relPath}`
            });
        }
        const partOutcomes = await Promise.all(work.upload.parts.map(async (part, index)=>{
            try {
                const requestedPart = multipartParts[index];
                if (requestedPart === void 0) {
                    throw new AgentStoreSyncError({
                        code: "presign_response_mismatch",
                        relPath: work.candidate.relPath,
                        message: `Multipart part ${part.partNumber} was not requested for ${work.candidate.relPath}`
                    });
                }
                this.assertPresignedUrlSafe({
                    rawUrl: part.url,
                    relPath
                });
                const uploaded = await this.runQueued(this.queues.s3, async ()=>{
                    await this.assertRoundStillOwnsLock(relPath, {
                        bypassCache: true
                    });
                    return this.blobTransfer.uploadPart({
                        url: part.url,
                        relPath,
                        absPath: work.candidate.absPath,
                        partNumber: part.partNumber,
                        offset: part.offsetBytes,
                        size: part.sizeBytes,
                        fileSize: work.candidate.size,
                        expiresAtMs: work.upload.partUrlsExpiresAtMs,
                        expectedDev: work.candidate.dev,
                        expectedIno: work.candidate.ino,
                        checksumSha256: requestedPart.checksumSha256,
                        presignHeaders: part.headers ?? {},
                        signal: this.activeRoundSignal,
                        ...this.onRoundProgress !== void 0 ? {
                            onBytes: this.cappedRoundBytes("blob_put_bytes", relPath, work.candidate.size)
                        } : {}
                    });
                });
                const pending = pendingContexts.get(work.upload.context.uploadId);
                if (pending !== void 0) {
                    pending.acceptedBytes += part.sizeBytes;
                }
                return {
                    kind: "success",
                    part: {
                        partNumber: part.partNumber,
                        etag: uploaded.etag,
                        checksumSha256: requestedPart.checksumSha256
                    }
                };
            } catch (error3) {
                return {
                    kind: "failure",
                    error: error3
                };
            }
        }));
        const failedPart = partOutcomes.find((outcome)=>outcome.kind === "failure");
        if (failedPart !== void 0) {
            throw failedPart.error;
        }
        const parts = partOutcomes.map((outcome)=>{
            if (outcome.kind === "failure") {
                throw outcome.error;
            }
            return outcome.part;
        });
        const current = await streamHashFileNoFollow({
            absPath: work.candidate.absPath,
            maxBytes: this.maxFileSizeBytes,
            expectedDev: work.candidate.dev,
            expectedIno: work.candidate.ino
        });
        if (current.size !== work.candidate.size || current.sha !== work.candidate.sha) {
            throw new AgentStoreSyncError({
                code: "sha_mismatch",
                relPath: work.candidate.relPath,
                message: `Local file ${work.candidate.relPath} changed during multipart upload`
            });
        }
        return {
            work,
            completion: {
                context: work.upload.context,
                parts
            }
        };
    }
    async completeMultipartWithTransientRetries(uploaded) {
        const completeMultipartWrites = this.client.completeMultipartWrites;
        if (completeMultipartWrites === void 0) {
            throw new AgentStoreSyncError({
                code: "upload_failed",
                message: "Agent store client does not support multipart completion"
            });
        }
        const finalResults = new Array(uploaded.length);
        let pending = uploaded.map((entry, index)=>({
                entry,
                index
            }));
        for(let attempt = 1; attempt <= this.multipartCompleteMaxAttempts && pending.length > 0; attempt++){
            let results;
            try {
                results = await completeMultipartWrites.call(this.client, {
                    agentId: this.agentId,
                    completions: pending.map((item)=>item.entry.completion),
                    signal: this.activeRoundSignal
                });
                this.progressReporter("rpc")();
            } catch (error3) {
                for (const item of pending){
                    finalResults[item.index] = {
                        kind: "rpc_error",
                        error: error3
                    };
                }
                pending = [];
                break;
            }
            const retry2 = [];
            for(let index = 0; index < pending.length; index++){
                const item = pending[index];
                const result = results[index];
                if (item === void 0 || result === void 0) {
                    throw new AgentStoreSyncError({
                        code: "presign_response_mismatch",
                        message: "Multipart completion response did not match its request"
                    });
                }
                if (result.kind === "failure" && result.code === "transient" && attempt < this.multipartCompleteMaxAttempts) {
                    retry2.push(item);
                } else {
                    finalResults[item.index] = result;
                }
            }
            pending = retry2;
        }
        return finalResults.map((result)=>{
            if (result === void 0) {
                throw new AgentStoreSyncError({
                    code: "upload_failed",
                    message: "Multipart completion exhausted transient retries"
                });
            }
            return result;
        });
    }
    async handleMultipartCompletionResult(args) {
        const { work } = args.entry;
        if (args.result.kind === "success") {
            args.pendingContexts.delete(work.upload.context.uploadId);
            if (work.target === "primary") {
                this.recordPrimaryPushSuccess({
                    candidate: work.candidate,
                    etag: args.result.etag,
                    summary: args.summary
                });
            } else {
                await this.handleWriteConflict({
                    candidate: work.candidate,
                    conflict: work.conflict,
                    precondition: work.precondition,
                    summary: args.summary,
                    completedUpload: {
                        etag: args.result.etag
                    }
                });
            }
            return void 0;
        }
        switch(args.result.code){
            case "precondition_failed":
                {
                    if (work.target === "primary") {
                        if (await this.trySuppressIdenticalWriteConflict(work.candidate, args.summary)) {
                            return void 0;
                        }
                        const conflict = work.presign.conflict;
                        if (conflict === void 0) {
                            throw new AgentStoreSyncError({
                                code: "write_conflict",
                                relPath: work.candidate.relPath,
                                message: `Multipart write for ${work.candidate.relPath} lost its precondition without a conflict target`
                            });
                        }
                        if (conflict.multipart === void 0) {
                            await this.handleWriteConflict({
                                candidate: work.candidate,
                                conflict,
                                precondition: work.precondition,
                                summary: args.summary,
                                suppressIfRemoteIdentical: true
                            });
                            return void 0;
                        }
                        return {
                            target: "conflict",
                            candidate: work.candidate,
                            presign: work.presign,
                            conflict,
                            upload: conflict.multipart,
                            precondition: work.precondition,
                            restartCount: work.restartCount,
                            conflictRenameCount: work.conflictRenameCount,
                            expiryRefreshCount: 0
                        };
                    }
                    if (work.conflictRenameCount >= this.multipartMaxConflictRenames) {
                        throw new AgentStoreSyncError({
                            code: "write_conflict",
                            relPath: work.candidate.relPath,
                            message: `Multipart conflict target for ${work.candidate.relPath} collided after a fresh presign`
                        });
                    }
                    return await this.presignFreshMultipartWork({
                        previous: work,
                        pendingContexts: args.pendingContexts,
                        summary: args.summary,
                        conflictRenameCount: work.conflictRenameCount + 1
                    });
                }
            case "restart_required":
                {
                    if (work.restartCount >= this.multipartMaxRestarts) {
                        throw new AgentStoreSyncError({
                            code: "upload_failed",
                            relPath: work.candidate.relPath,
                            message: `Multipart upload for ${work.candidate.relPath} still required restart after a fresh presign`
                        });
                    }
                    return await this.presignFreshMultipartWork({
                        previous: work,
                        pendingContexts: args.pendingContexts,
                        summary: args.summary,
                        restartCount: work.restartCount + 1
                    });
                }
            case "checksum_mismatch":
                throw new AgentStoreSyncError({
                    code: "sha_mismatch",
                    relPath: work.candidate.relPath,
                    message: `Multipart checksum did not match ${work.candidate.relPath}`
                });
            case "upload_not_found":
                {
                    const pending = args.pendingContexts.get(work.upload.context.uploadId);
                    if (pending !== void 0) {
                        this.notePendingMultipartAbandoned(pending);
                    }
                    args.pendingContexts.delete(work.upload.context.uploadId);
                    throw new AgentStoreSyncError({
                        code: "upload_failed",
                        relPath: work.candidate.relPath,
                        message: `Multipart upload for ${work.candidate.relPath} no longer exists`
                    });
                }
            case "invalid_parts":
                throw new AgentStoreSyncError({
                    code: "presign_response_mismatch",
                    relPath: work.candidate.relPath,
                    message: `Multipart completion rejected the uploaded part list for ${work.candidate.relPath}`
                });
            case "transient":
                throw new AgentStoreSyncError({
                    code: "upload_failed",
                    relPath: work.candidate.relPath,
                    message: `Multipart completion exhausted transient retries for ${work.candidate.relPath}`
                });
            case "internal":
            case "unknown":
                throw new AgentStoreSyncError({
                    code: "upload_failed",
                    relPath: work.candidate.relPath,
                    message: `Multipart completion failed internally for ${work.candidate.relPath}`
                });
        }
    }
    async presignFreshMultipartWork(args) {
        const fresh = await this.presignFreshWrite(args.previous.candidate, args.previous.precondition, args.summary);
        this.registerMultipartContexts({
            presign: fresh,
            pendingContexts: args.pendingContexts
        });
        const restartCount = args.restartCount ?? args.previous.restartCount;
        const conflictRenameCount = args.conflictRenameCount ?? args.previous.conflictRenameCount;
        const expiryRefreshCount = args.expiryRefreshCount ?? args.previous.expiryRefreshCount;
        const previousConflictRemainsAuthoritative = args.previous.target === "conflict" && !presignHasExpiredLockRedirect(args.previous.presign, this.now());
        if (previousConflictRemainsAuthoritative || presignUsesConflictTarget(fresh)) {
            const conflict = fresh.conflict;
            if (conflict === void 0) {
                throw new AgentStoreSyncError({
                    code: "presign_response_mismatch",
                    relPath: args.previous.candidate.relPath,
                    message: `Fresh presign for ${args.previous.candidate.relPath} did not include conflict instructions`
                });
            }
            const conflictCameFromPrecondition = fresh.lockRedirect === void 0 && (fresh.primaryPreconditionFailed === true || args.previous.target === "conflict" && args.previous.presign.lockRedirect === void 0);
            if (conflictCameFromPrecondition && await this.trySuppressIdenticalWriteConflict(args.previous.candidate, args.summary)) {
                return void 0;
            }
            if (conflict.multipart === void 0) {
                await this.handleWriteConflict({
                    candidate: args.previous.candidate,
                    conflict,
                    precondition: args.previous.precondition,
                    summary: args.summary,
                    suppressIfRemoteIdentical: conflictCameFromPrecondition
                });
                return void 0;
            }
            return {
                target: "conflict",
                candidate: args.previous.candidate,
                presign: fresh,
                conflict,
                upload: conflict.multipart,
                precondition: args.previous.precondition,
                restartCount,
                conflictRenameCount,
                expiryRefreshCount
            };
        }
        if (fresh.multipart === void 0) {
            try {
                await this.completeFreshLegacyWrite({
                    candidate: args.previous.candidate,
                    presign: fresh,
                    precondition: args.previous.precondition,
                    summary: args.summary
                });
                return void 0;
            } catch (error3) {
                if (!isPresignedUrlExpiredError(error3) || expiryRefreshCount >= this.multipartMaxExpiryRefreshes) {
                    throw error3;
                }
                return await this.presignFreshMultipartWork({
                    previous: args.previous,
                    pendingContexts: args.pendingContexts,
                    summary: args.summary,
                    restartCount,
                    conflictRenameCount,
                    expiryRefreshCount: expiryRefreshCount + 1
                });
            }
        }
        if (fresh.conflict === void 0) {
            throw new AgentStoreSyncError({
                code: "presign_response_mismatch",
                relPath: args.previous.candidate.relPath,
                message: `Fresh multipart presign for ${args.previous.candidate.relPath} did not include conflict instructions`
            });
        }
        return {
            target: "primary",
            candidate: args.previous.candidate,
            presign: fresh,
            upload: fresh.multipart,
            precondition: args.previous.precondition,
            restartCount,
            conflictRenameCount,
            expiryRefreshCount
        };
    }
    async completeFreshLegacyWrite(args) {
        if (presignHasExpiredLockRedirect(args.presign, this.now())) {
            throw new AgentStoreSyncError({
                code: "presigned_url_expired",
                relPath: args.candidate.relPath,
                message: `Fresh presign for ${args.candidate.relPath} contained an expired lock redirect`
            });
        }
        if (presignUsesConflictTarget(args.presign)) {
            if (args.presign.conflict === void 0 || args.precondition === void 0) {
                throw new AgentStoreSyncError({
                    code: "presign_response_mismatch",
                    relPath: args.candidate.relPath,
                    message: `Fresh conflict-only presign for ${args.candidate.relPath} did not include a conflict target and write precondition`
                });
            }
            await this.handleWriteConflict({
                candidate: args.candidate,
                conflict: args.presign.conflict,
                precondition: args.precondition,
                summary: args.summary,
                suppressIfRemoteIdentical: args.presign.primaryPreconditionFailed === true
            });
            return;
        }
        const conflictProtectionDowngraded = args.precondition !== void 0 && args.presign.conflict === void 0;
        if (args.presign.conflict === void 0) {
            if (presignHasConditionalHeaders(args.presign)) {
                throw new AgentStoreSyncError({
                    code: "presign_response_mismatch",
                    relPath: args.candidate.relPath,
                    message: `Fresh conditional presign for ${args.candidate.relPath} did not include a conflict target`
                });
            }
        }
        try {
            const uploaded = await this.uploadPrimaryWithConflictRetry(args.candidate, args.presign, args.summary);
            this.recordPrimaryPushSuccess({
                candidate: args.candidate,
                etag: uploaded.etag,
                summary: args.summary
            });
            if (conflictProtectionDowngraded) {
                args.summary.conflictProtectionDowngrades++;
            }
        } catch (error3) {
            if (isWriteConflictError(error3) && args.presign.conflict !== void 0 && args.precondition !== void 0) {
                await this.handleWriteConflict({
                    candidate: args.candidate,
                    conflict: args.presign.conflict,
                    precondition: args.precondition,
                    summary: args.summary,
                    suppressIfRemoteIdentical: true
                });
                return;
            }
            throw error3;
        }
    }
    async refreshAndCompleteLegacyWrite(args) {
        await this.withFreshLegacyPresign({
            candidate: args.candidate,
            precondition: args.precondition,
            summary: args.summary,
            operation: async (fresh)=>{
                await this.completeFreshLegacyWrite({
                    candidate: args.candidate,
                    presign: fresh,
                    precondition: args.precondition,
                    summary: args.summary
                });
            }
        });
    }
    async presignFreshWrite(candidate, precondition, summary) {
        const fresh = await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>this.client.presignWrites({
                agentId: this.agentId,
                files: [
                    {
                        relPath: candidate.relPath,
                        sha: candidate.sha,
                        size: candidate.size,
                        ...precondition !== void 0 ? {
                            multipartParts: candidate.multipartParts,
                            ...precondition
                        } : {}
                    }
                ],
                signal: this.activeRoundSignal
            }));
        const instruction = fresh[0];
        if (instruction === void 0 || instruction.sha !== candidate.sha || normalizeRelPath(instruction.relPath) !== candidate.relPath) {
            throw new AgentStoreSyncError({
                code: "presign_response_mismatch",
                relPath: candidate.relPath,
                message: `Fresh presign did not match ${candidate.relPath}`
            });
        }
        return instruction;
    }
    async withFreshLegacyPresign(args) {
        const pendingContexts = new Map();
        return await this.withPendingMultipartContexts(pendingContexts, async ()=>{
            const presign = await this.presignFreshWrite(args.candidate, args.precondition, args.summary);
            this.registerMultipartContexts({
                presign,
                pendingContexts
            });
            return await args.operation(presign);
        });
    }
    registerMultipartContexts(args) {
        for (const upload of [
            args.presign.multipart,
            args.presign.conflict?.multipart
        ]){
            if (upload === void 0) {
                continue;
            }
            const uploadId = upload.context.uploadId;
            if (uploadId.length === 0 || args.pendingContexts.has(uploadId)) {
                throw new AgentStoreSyncError({
                    code: "presign_response_mismatch",
                    relPath: args.presign.relPath,
                    message: `Multipart presign for ${args.presign.relPath} returned an invalid or duplicate upload context`
                });
            }
            args.pendingContexts.set(uploadId, {
                context: upload.context,
                acceptedBytes: 0
            });
        }
    }
    validateMultipartInstruction(work) {
        const { candidate, upload } = work;
        const relPath = work.target === "primary" ? candidate.relPath : work.conflict.relPath;
        const contextPreconditionMatches = work.target === "conflict" ? upload.context.precondition.case === "expectAbsent" && upload.context.precondition.value === true : work.precondition.baseEtag !== void 0 ? upload.context.precondition.case === "baseEtag" && upload.context.precondition.value === work.precondition.baseEtag : work.precondition.expectAbsent === true && upload.context.precondition.case === "expectAbsent" && upload.context.precondition.value === true;
        const requestedParts = candidate.multipartParts;
        if (requestedParts === void 0 || normalizeRelPath(upload.context.relPath) !== normalizeRelPath(relPath) || upload.context.sha !== candidate.sha || upload.context.sizeBytes !== candidate.size || !contextPreconditionMatches || upload.context.expectedPartCount !== upload.parts.length || requestedParts.length !== upload.parts.length || upload.context.uploadId.length === 0 || upload.context.storeId.length === 0 || upload.context.sessionId.length === 0 || upload.parts.length === 0 || !Number.isFinite(upload.partUrlsExpiresAtMs)) {
            throw new AgentStoreSyncError({
                code: "presign_response_mismatch",
                relPath: candidate.relPath,
                message: `Multipart instructions did not match ${candidate.relPath}`
            });
        }
        let expectedOffset = 0;
        for(let index = 0; index < upload.parts.length; index++){
            const part = upload.parts[index];
            const requestedPart = requestedParts[index];
            if (part === void 0 || requestedPart === void 0 || part.partNumber !== index + 1 || part.partNumber !== requestedPart.partNumber || !Number.isSafeInteger(part.offsetBytes) || part.offsetBytes !== expectedOffset || part.offsetBytes !== requestedPart.offsetBytes || !Number.isSafeInteger(part.sizeBytes) || part.sizeBytes <= 0 || part.sizeBytes !== requestedPart.sizeBytes || getHeaderCaseInsensitive(part.headers ?? {}, "x-amz-checksum-sha256") !== Buffer.from(requestedPart.checksumSha256).toString("base64") || part.url.length === 0) {
                throw new AgentStoreSyncError({
                    code: "presign_response_mismatch",
                    relPath: candidate.relPath,
                    message: `Multipart part layout did not match ${candidate.relPath}`
                });
            }
            expectedOffset += part.sizeBytes;
        }
        if (expectedOffset !== candidate.size) {
            throw new AgentStoreSyncError({
                code: "presign_response_mismatch",
                relPath: candidate.relPath,
                message: `Multipart parts did not cover ${candidate.relPath}`
            });
        }
    }
    async withPendingMultipartContexts(pendingContexts, body) {
        try {
            return await body();
        } finally{
            await this.abortPendingMultipartContexts(pendingContexts);
        }
    }
    noteMultipartAbandoned(pendingContexts) {
        for (const pending of pendingContexts.values()){
            this.notePendingMultipartAbandoned(pending);
        }
    }
    notePendingMultipartAbandoned(pending) {
        const bytes = pending.acceptedBytes;
        pending.acceptedBytes = 0;
        const listener = this.onMultipartAbandoned;
        if (listener === void 0 || bytes <= 0) {
            return;
        }
        listener({
            bytes,
            roundAborted: this.activeRoundSignal?.aborted === true
        });
    }
    async abortPendingMultipartContexts(pendingContexts) {
        this.noteMultipartAbandoned(pendingContexts);
        if (pendingContexts.size === 0) {
            return;
        }
        const abortMultipartWrites = this.client.abortMultipartWrites;
        if (abortMultipartWrites === void 0) {
            return;
        }
        try {
            await abortMultipartWrites.call(this.client, {
                agentId: this.agentId,
                uploads: [
                    ...pendingContexts.values()
                ].map(({ context: context2 })=>({
                        context: context2
                    })),
                signal: this.activeRoundSignal
            });
            this.progressReporter("rpc")();
        } catch (error3) {
            this.rethrowIfRoundAbort(error3);
        }
    }
    recordPrimaryPushSuccess(args) {
        this.clearPushPark(args.candidate.relPath);
        this.throwIfRoundAborted(args.candidate.relPath);
        args.summary.filesPushed++;
        args.summary.bytesPushed += args.candidate.size;
        this.index.upsertFile({
            relPath: args.candidate.relPath,
            lastSeenEtag: args.etag,
            lastSyncedSha: args.candidate.sha,
            size: args.candidate.size,
            lastSyncedMs: this.now(),
            direction: "pushed",
            recordedStat: this.captureRecordedStat(args.candidate)
        });
        this.progressReporter("index_commit")();
        this.notePathsRefreshedForParkedFullRound([
            args.candidate.relPath
        ], args.summary);
    }
    async resolvePushPreconditions(toUpload, summary, options2 = {}) {
        const preferProbeForLegacy = options2.preferProbeForLegacy === true;
        const preconditions = new Map();
        const skippedDueToListingFailure = new Set();
        const hasLegacyRow = toUpload.some((candidate)=>candidate.existing !== void 0 && candidate.existing.state !== "tombstoned" && (candidate.existing.lastSeenEtag === void 0 || candidate.existing.lastSeenEtag.length === 0));
        let legacyListing;
        let legacyListingFailed = false;
        if (hasLegacyRow && !preferProbeForLegacy) {
            try {
                const listed = await this.listServerFiles(summary, {
                    tombstoneMode: AgentStoreTombstoneMode.OMIT
                });
                const listedPaths = new Set();
                const etagByPath = new Map();
                for (const file of listed.files){
                    let canonical;
                    try {
                        canonical = normalizeRelPath(file.relPath);
                    } catch  {
                        continue;
                    }
                    listedPaths.add(canonical);
                    const etag = normalizeS3Etag(file.etag);
                    if (etag.length > 0) {
                        etagByPath.set(canonical, etag);
                    }
                }
                legacyListing = {
                    listedPaths,
                    etagByPath
                };
            } catch (error3) {
                this.rethrowIfRoundAbort(error3);
                legacyListingFailed = true;
                summary.errors.push({
                    relPath: void 0,
                    code: "list_failed",
                    message: `Failed to list agent store for legacy push baselines: ${error3 instanceof Error ? error3.message : String(error3)}`
                });
            }
        }
        for (const candidate of toUpload){
            if (candidate.existing === void 0) {
                preconditions.set(candidate.relPath, {
                    expectAbsent: true
                });
                continue;
            }
            if (candidate.existing.state === "tombstoned") {
                const tombstoneEtag = candidate.existing.tombstoneEtag;
                if (tombstoneEtag !== void 0 && tombstoneEtag.length > 0) {
                    preconditions.set(candidate.relPath, {
                        baseEtag: tombstoneEtag
                    });
                } else {
                    preconditions.set(candidate.relPath, {
                        expectAbsent: true
                    });
                }
                continue;
            }
            const knownEtag = candidate.existing.lastSeenEtag;
            if (knownEtag !== void 0 && knownEtag.length > 0) {
                preconditions.set(candidate.relPath, {
                    baseEtag: knownEtag
                });
                continue;
            }
            if (preferProbeForLegacy) {
                const probed2 = await this.probeLegacyPushPrecondition(candidate.relPath, summary);
                if (probed2 === void 0) {
                    skippedDueToListingFailure.add(candidate.relPath);
                } else {
                    preconditions.set(candidate.relPath, probed2);
                }
                continue;
            }
            if (legacyListingFailed || legacyListing === void 0) {
                skippedDueToListingFailure.add(candidate.relPath);
                continue;
            }
            if (!legacyListing.listedPaths.has(candidate.relPath)) {
                preconditions.set(candidate.relPath, {
                    expectAbsent: true
                });
                continue;
            }
            const listedEtag = legacyListing.etagByPath.get(candidate.relPath);
            if (listedEtag !== void 0) {
                preconditions.set(candidate.relPath, {
                    baseEtag: listedEtag
                });
                continue;
            }
            const probed = await this.probeLegacyPushPrecondition(candidate.relPath, summary);
            if (probed === void 0) {
                skippedDueToListingFailure.add(candidate.relPath);
            } else {
                preconditions.set(candidate.relPath, probed);
            }
        }
        return {
            preconditions,
            skippedDueToListingFailure
        };
    }
    async probeLegacyPushPrecondition(relPath, summary) {
        try {
            const probe = await probeAgentStoreObject({
                client: this.client,
                agentId: this.agentId,
                relPath,
                fetchImpl: this.fetchImpl,
                validatePresignedUrl: this.validatePresignedUrl,
                runPresign: (fn)=>this.runQueuedControlRpc(this.queues.presign, "rpc", fn),
                runS3: (fn)=>this.runQueued(this.queues.s3, fn),
                signal: this.activeRoundSignal
            });
            summary.legacyProbes++;
            if (probe.kind === "absent") {
                return {
                    expectAbsent: true
                };
            }
            return {
                baseEtag: probe.etag
            };
        } catch (error3) {
            if (isAgentStoreSyncDisabledError(error3)) {
                throw error3;
            }
            this.rethrowIfRoundAbort(error3, relPath);
            summary.errors.push({
                relPath,
                code: "probe_failed",
                message: `Failed to probe agent store object for legacy push baseline: ${error3 instanceof Error ? error3.message : String(error3)}`
            });
            return void 0;
        }
    }
    isPushParked(relPath) {
        const untilMs = this.pushParkedUntilMs.get(relPath);
        if (untilMs === void 0) {
            return false;
        }
        if (this.now() >= untilMs) {
            this.pushParkedUntilMs.delete(relPath);
            return false;
        }
        return true;
    }
    clearPushPark(relPath) {
        this.pushParkedUntilMs.delete(relPath);
        const backoff2 = this.pushParkBackoff.get(relPath);
        if (backoff2 !== void 0) {
            backoff2.recordSuccess();
            this.pushParkBackoff.delete(relPath);
        }
    }
    parkPushEntry(args) {
        let backoff2 = this.pushParkBackoff.get(args.relPath);
        if (backoff2 === void 0) {
            backoff2 = new BackoffScheduler({
                baseDelayMs: DEFAULT_PUSH_TERMINAL_BACKOFF_BASE_MS,
                maxDelayMs: DEFAULT_PUSH_TERMINAL_BACKOFF_MAX_MS,
                jitter: 0.2
            });
            this.pushParkBackoff.set(args.relPath, backoff2);
        }
        const delayMs = backoff2.recordFailure();
        this.pushParkedUntilMs.set(args.relPath, this.now() + delayMs);
        args.summary.pushEntriesParked++;
        args.summary.errors.push({
            relPath: args.relPath,
            code: args.code ?? "push_terminal",
            message: `${args.message} (parked ${delayMs}ms)`
        });
    }
    parkQuotaExceededEntry(args) {
        this.parkPushEntry({
            relPath: args.relPath,
            summary: args.summary,
            message: args.message,
            code: "quota_exceeded"
        });
        this.emitQuotaExceededJournal({
            relPath: args.relPath,
            absPath: args.absPath,
            quota: args.quota
        });
    }
    tryParkQuotaExceeded(args) {
        if (!isAgentStoreConnectCode(args.error, Code.FailedPrecondition) && !isAgentStoreConnectCode(args.error, Code.InvalidArgument)) {
            return false;
        }
        if (isAgentStoreSyncDisabledError(args.error)) {
            return false;
        }
        const quota = parseAgentStoreQuotaExceeded(args.error);
        if (quota === void 0) {
            return false;
        }
        this.parkQuotaExceededEntry({
            relPath: args.relPath,
            absPath: args.absPath,
            summary: args.summary,
            quota,
            message: agentStoreErrorSummaryMessage(args.error, "Agent-store quota exceeded")
        });
        return true;
    }
    emitQuotaExceededJournal(args) {
        const emit2 = {
            kind: "quota_exceeded",
            storeId: this.agentId,
            originalRelPath: args.relPath,
            originalAbsPath: args.absPath,
            source: "local_sync",
            scopeKind: args.quota.scopeKind,
            limitBytes: args.quota.limitBytes,
            usageBytes: args.quota.usageBytes
        };
        this.emitConflictJournalEventWithRetry(emit2);
    }
    async uploadPrimaryWithConflictRetry(candidate, presign, summary) {
        try {
            return await this.uploadOne(candidate, presign, summary);
        } catch (error3) {
            if (isWriteConflictError(error3) && error3.httpStatus === 409) {
                return await this.uploadOne(candidate, presign, summary);
            }
            throw error3;
        }
    }
    async tryRecreateOverListedTombstone(args) {
        this.client.invalidateListCache?.({
            agentId: this.agentId
        });
        const parent = parentDirRelPath(args.candidate.relPath);
        let listing;
        try {
            listing = await this.runQueuedControlRpc(this.queues.list, "listing_page", ()=>this.client.listFiles({
                    agentId: this.agentId,
                    relPath: parent,
                    tombstoneMode: AgentStoreTombstoneMode.INCLUDE,
                    signal: this.activeRoundSignal
                }));
        } catch (error3) {
            this.rethrowIfRoundAbort(error3, args.candidate.relPath);
            this.rethrowIfLockLost(error3);
            return false;
        }
        const floorMs = protoPositiveMs(listing.tombstoneFloorMs);
        if (floorMs === void 0) {
            return false;
        }
        const cutoffMs = floorMs - this.tombstonePruneSlackMs();
        let tombstoneEtag;
        for (const tombstone of listing.tombstones ?? []){
            let canonical;
            try {
                canonical = normalizeRelPath(tombstone.relPath);
            } catch  {
                continue;
            }
            if (canonical !== args.candidate.relPath) {
                continue;
            }
            const etag = normalizeS3Etag(tombstone.tombstoneEtag);
            if (etag.length === 0 || tombstone.deletedAtMs <= 0) {
                continue;
            }
            if (tombstone.deletedAtMs >= cutoffMs) {
                continue;
            }
            tombstoneEtag = etag;
            break;
        }
        if (tombstoneEtag === void 0) {
            return false;
        }
        try {
            const presign = await this.presignFreshWrite(args.candidate, {
                baseEtag: tombstoneEtag
            }, args.summary);
            if (presignUsesConflictTarget(presign) || presign.multipart !== void 0) {
                return false;
            }
            const uploaded = await this.uploadPrimaryWithConflictRetry(args.candidate, presign, args.summary);
            try {
                this.recordPrimaryPushSuccess({
                    candidate: args.candidate,
                    etag: uploaded.etag,
                    summary: args.summary
                });
                return true;
            } finally{
                this.client.invalidateListCache?.({
                    agentId: this.agentId
                });
            }
        } catch (error3) {
            this.rethrowIfRoundAbort(error3, args.candidate.relPath);
            this.rethrowIfLockLost(error3);
            return false;
        }
    }
    async handleWriteConflict(args) {
        const { candidate, precondition, summary } = args;
        if (args.completedUpload === void 0 && args.suppressIfRemoteIdentical === true && await this.trySuppressIdenticalWriteConflict(candidate, summary)) {
            return;
        }
        if (args.completedUpload === void 0 && args.suppressIfRemoteIdentical === true && precondition.expectAbsent === true && await this.tryRecreateOverListedTombstone({
            candidate,
            summary
        })) {
            return;
        }
        let conflict = args.conflict;
        let uploaded = args.completedUpload;
        if (uploaded === void 0) {
            let uploadError;
            try {
                if (conflict.expiresAtMs <= this.now()) {
                    ({ conflict, uploaded } = await this.uploadFreshLegacyConflict(candidate, precondition, summary));
                } else {
                    uploaded = await this.uploadConflict(candidate, conflict, summary);
                }
            } catch (error3) {
                uploadError = error3;
            }
            if (uploaded === void 0) {
                this.rethrowIfRoundAbort(uploadError, candidate.relPath);
                if (!isWriteConflictError(uploadError) && !isPresignedUrlExpiredError(uploadError)) {
                    throw uploadError;
                }
                ({ conflict, uploaded } = await this.uploadFreshLegacyConflict(candidate, precondition, summary));
            }
        }
        summary.filesConflicted++;
        summary.conflicts.push({
            relPath: candidate.relPath,
            conflictRelPath: conflict.relPath,
            conflictEtag: uploaded.etag
        });
        try {
            this.materializeAndRecordConflict({
                candidate,
                conflict,
                precondition,
                uploaded
            });
        } catch (postCommitError) {
            summary.errors.push({
                relPath: candidate.relPath,
                code: postCommitError instanceof AgentStoreSyncError ? postCommitError.code : "upload_failed",
                message: postCommitError instanceof Error ? postCommitError.message : String(postCommitError)
            });
        }
    }
    async trySuppressIdenticalWriteConflict(candidate, summary) {
        if (candidate.size > DEFAULT_IDENTICAL_CONFLICT_COMPARE_MAX_BYTES) {
            return false;
        }
        let response;
        try {
            const reads = await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>this.client.presignReads({
                    agentId: this.agentId,
                    relPaths: [
                        candidate.relPath
                    ],
                    signal: this.activeRoundSignal
                }));
            const presign = reads[0];
            if (presign === void 0 || normalizeRelPath(presign.relPath) !== candidate.relPath) {
                return false;
            }
            this.assertPresignedUrlSafe({
                rawUrl: presign.url,
                relPath: candidate.relPath
            });
            response = await this.runQueued(this.queues.s3, async ()=>{
                this.throwIfRoundAborted(candidate.relPath);
                return await this.fetchImpl(presign.url, {
                    redirect: "error",
                    ...this.activeRoundSignal !== void 0 ? {
                        signal: this.activeRoundSignal
                    } : {}
                });
            });
            if (response.status !== 200) {
                return false;
            }
            const remoteEtag = normalizeS3Etag(response.headers.get("etag") ?? void 0);
            if (remoteEtag.length === 0) {
                return false;
            }
            const remoteHash = (0, import_node_crypto50.createHash)("sha256");
            let remoteSize = 0;
            const reportGetBytes = this.cappedRoundBytes("blob_get_bytes", candidate.relPath, candidate.size);
            if (response.body !== null) {
                const reader = response.body.getReader();
                try {
                    for(;;){
                        const next = await reader.read();
                        if (next.done) {
                            break;
                        }
                        remoteSize += next.value.byteLength;
                        reportGetBytes(next.value.byteLength);
                        if (remoteSize > Math.min(candidate.size, DEFAULT_IDENTICAL_CONFLICT_COMPARE_MAX_BYTES)) {
                            await reader.cancel();
                            return false;
                        }
                        remoteHash.update(next.value);
                    }
                } finally{
                    reader.releaseLock();
                }
            }
            if (remoteSize !== candidate.size || remoteHash.digest("hex") !== candidate.sha) {
                return false;
            }
            const current = await streamHashFileNoFollow({
                absPath: candidate.absPath,
                maxBytes: this.maxFileSizeBytes,
                expectedDev: candidate.dev,
                expectedIno: candidate.ino
            });
            if (current.size !== candidate.size || current.sha !== candidate.sha) {
                return false;
            }
            this.clearPushPark(candidate.relPath);
            this.throwIfRoundAborted(candidate.relPath);
            summary.identicalContentConflictsSuppressed = (summary.identicalContentConflictsSuppressed ?? 0) + 1;
            this.index.upsertFile({
                relPath: candidate.relPath,
                lastSeenEtag: remoteEtag,
                lastSyncedSha: candidate.sha,
                size: candidate.size,
                lastSyncedMs: this.now(),
                direction: "pushed"
            });
            this.progressReporter("index_commit")();
            return true;
        } catch (error3) {
            this.rethrowIfRoundAbort(error3, candidate.relPath);
            return false;
        } finally{
            await response?.body?.cancel().catch(()=>{});
        }
    }
    materializeAndRecordConflict(args) {
        const { candidate, conflict, precondition, uploaded } = args;
        try {
            this.materializeConflictBookkeeping({
                candidate,
                conflict,
                precondition,
                uploaded
            });
        } finally{
            this.client.invalidateListCache?.({
                agentId: this.agentId
            });
        }
    }
    materializeConflictBookkeeping(args) {
        const { candidate, conflict, precondition, uploaded } = args;
        const materialized = this.materializeConflictRename(candidate, conflict.relPath);
        this.emitConflictJournalEvent({
            candidate,
            conflictRelPath: conflict.relPath,
            precondition,
            remoteOnly: materialized === void 0
        });
        if (materialized !== void 0) {
            this.index.upsertFile({
                relPath: materialized.canonicalRelPath,
                lastSeenEtag: uploaded.etag,
                lastSyncedSha: candidate.sha,
                size: candidate.size,
                lastSyncedMs: this.now(),
                direction: "pushed"
            });
            const legacyEtag = candidate.existing?.lastSeenEtag;
            if (candidate.existing !== void 0 && (legacyEtag === void 0 || legacyEtag.length === 0)) {
                this.index.upsertFile({
                    ...candidate.existing,
                    lastSeenEtag: uploaded.etag,
                    lastSyncedSha: candidate.sha,
                    size: candidate.size,
                    lastSyncedMs: this.now(),
                    direction: "pushed"
                });
            }
        } else {
            const priorEtag = candidate.existing?.lastSeenEtag;
            this.index.upsertFile({
                relPath: candidate.relPath,
                lastSeenEtag: priorEtag !== void 0 && priorEtag.length > 0 ? priorEtag : uploaded.etag,
                lastSyncedSha: candidate.sha,
                size: candidate.size,
                lastSyncedMs: this.now(),
                direction: "pushed"
            });
        }
    }
    emitConflictJournalEvent(args) {
        const kind = args.precondition.expectAbsent === true ? "create_conflict" : "write_conflict";
        let conflictAbsPath;
        try {
            conflictAbsPath = resolveSafeChildPath({
                base: this.filesDir,
                relPath: normalizeRelPath(args.conflictRelPath)
            });
        } catch  {
            conflictAbsPath = void 0;
        }
        const emit2 = {
            kind,
            storeId: this.agentId,
            originalRelPath: args.candidate.relPath,
            conflictRelPath: args.conflictRelPath,
            originalAbsPath: args.candidate.absPath,
            conflictAbsPath,
            preservedBytes: args.candidate.size,
            source: "local_sync",
            remoteOnly: args.remoteOnly
        };
        this.emitConflictJournalEventWithRetry(emit2);
    }
    emitConflictJournalEventWithRetry(emit2) {
        if (this.tryEmitConflictJournalEvent(emit2)) {
            return;
        }
        if (this.tryEmitConflictJournalEvent(emit2)) {
            return;
        }
        this.enqueuePendingConflictJournalEmit(emit2);
        this.warn(`conflict journal append or dedup refresh failed after retry for ${hashRelPath({
            relPath: emit2.originalRelPath,
            salt: this.pathHashSalt
        })}; conflict preserved remotely and event queued for next push round (failures=${this.conflictJournal.appendFailureCount()})`, void 0);
    }
    tryEmitConflictJournalEvent(emit2) {
        if (!this.conflictJournal.refreshDedupFromDisk()) {
            return false;
        }
        const alreadyDeduped = this.conflictJournal.wouldDedup(emit2);
        const rotationsBefore = this.conflictJournal.rotationCount();
        const ok = this.conflictJournal.emit(emit2);
        if (this.conflictJournal.rotationCount() !== rotationsBefore) {
            for (const prior of this.roundJournaledConflictEmits){
                this.enqueuePendingConflictJournalEmit(prior);
            }
            if (!alreadyDeduped) {
                this.enqueuePendingConflictJournalEmit(emit2);
            }
            this.roundJournaledConflictEmits = [];
            this.warn(`conflict journal rotated during emit; re-queued same-round notice(s) into the pending sidecar so a rotation cannot wipe a just-flushed event with nothing left to retry`, void 0);
            return ok;
        }
        if (!ok) {
            return false;
        }
        if (alreadyDeduped) {
            return true;
        }
        this.roundJournaledConflictEmits.push(emit2);
        this.enqueuePendingConflictJournalEmit(emit2);
        return true;
    }
    enqueuePendingConflictJournalEmit(emit2) {
        this.pendingConflictJournal.enqueue(emit2);
    }
    flushPendingConflictJournalEmits() {
        this.pendingConflictJournal.reload();
        if (!this.conflictJournal.refreshDedupFromDisk()) {
            return;
        }
        if (this.pendingConflictJournal.isEmpty()) {
            return;
        }
        const pending = this.pendingConflictJournal.list();
        const rotationsBefore = this.conflictJournal.rotationCount();
        const stillPending = [];
        const newlyJournaled = [];
        const durableMirrors = [];
        let failures = 0;
        for (const emit2 of pending){
            const alreadyDeduped = this.conflictJournal.wouldDedup(emit2);
            if (!this.conflictJournal.emit(emit2)) {
                failures++;
                stillPending.push(emit2);
            } else {
                durableMirrors.push(emit2);
                if (!alreadyDeduped) {
                    newlyJournaled.push(emit2);
                }
            }
        }
        if (this.conflictJournal.rotationCount() !== rotationsBefore) {
            this.warn(`conflict journal rotated during pending flush; keeping ${this.pendingConflictJournal.size()} queued event(s) for the next push round to avoid losing a rotated notice`, void 0);
            return;
        }
        this.roundJournaledConflictEmits.push(...newlyJournaled);
        this.pendingConflictJournal.replaceAll([
            ...stillPending,
            ...durableMirrors
        ]);
        if (failures > 0) {
            this.warn(`conflict journal pending retry failed for ${failures} event(s); will retry on the next push round (pending=${this.pendingConflictJournal.size()}, failures=${this.conflictJournal.appendFailureCount()})`, void 0);
        }
    }
    stripJournaledPendingConflictMirrors() {
        this.pendingConflictJournal.reload();
        if (!this.conflictJournal.refreshDedupFromDisk()) {
            return;
        }
        if (this.pendingConflictJournal.isEmpty()) {
            return;
        }
        const remaining = [];
        for (const emit2 of this.pendingConflictJournal.list()){
            if (!this.conflictJournal.wouldDedup(emit2)) {
                remaining.push(emit2);
            }
        }
        if (remaining.length !== this.pendingConflictJournal.size()) {
            this.pendingConflictJournal.replaceAll(remaining);
        }
    }
    conflictJournalPathsSafeForShutdownFlush() {
        for (const targetPath of [
            this.conflictJournal.path,
            this.pendingConflictJournal.path
        ]){
            try {
                if (fs26.lstatSync(targetPath).isSymbolicLink()) {
                    return false;
                }
            } catch (error3) {
                if (!isNodeError5(error3) || error3.code !== "ENOENT") {
                    return false;
                }
            }
        }
        return true;
    }
    attemptPendingConflictJournalFlushForShutdown() {
        if (this.lockProvider !== void 0 && this.lockHandle === void 0) {
            return;
        }
        if (!this.conflictJournalPathsSafeForShutdownFlush()) {
            this.warn("conflict journal shutdown flush skipped; journal or pending sidecar path is not a safe regular file", void 0);
            return;
        }
        this.flushPendingConflictJournalEmits();
        this.stripJournaledPendingConflictMirrors();
    }
    emitConflictFallbackFailed(args) {
        this.emitConflictJournalEventWithRetry({
            kind: "conflict_fallback_failed",
            storeId: this.agentId,
            originalRelPath: args.candidate.relPath,
            originalAbsPath: args.candidate.absPath,
            source: "local_sync"
        });
    }
    async uploadFreshLegacyConflict(candidate, precondition, summary) {
        await this.assertRoundStillOwnsLock(candidate.relPath, {
            bypassCache: true
        });
        return await this.withFreshLegacyPresign({
            candidate,
            precondition,
            summary,
            operation: async (instruction)=>{
                if (instruction.conflict === void 0) {
                    throw new AgentStoreSyncError({
                        code: "write_conflict",
                        relPath: candidate.relPath,
                        message: `Conflict write for ${candidate.relPath} collided and the fresh presign returned no usable conflict instruction`
                    });
                }
                const conflict = instruction.conflict;
                return {
                    conflict,
                    uploaded: await this.uploadConflict(candidate, conflict, summary)
                };
            }
        });
    }
    async uploadConflict(candidate, conflict, summary) {
        this.assertPresignedUrlSafe({
            rawUrl: conflict.url,
            relPath: conflict.relPath
        });
        return await this.runQueued(this.queues.s3, async ()=>{
            this.throwIfRoundAborted(conflict.relPath);
            this.assertPresignedUrlNotExpired({
                expiresAtMs: conflict.expiresAtMs,
                relPath: conflict.relPath
            });
            await this.assertRoundStillOwnsLock(candidate.relPath, {
                bypassCache: true
            });
            return await this.blobTransfer.uploadFile({
                url: conflict.url,
                relPath: conflict.relPath,
                absPath: candidate.absPath,
                sha: candidate.sha,
                size: candidate.size,
                expectedDev: candidate.dev,
                expectedIno: candidate.ino,
                presignHeaders: conflict.headers,
                signal: this.activeRoundSignal,
                ...this.onRoundProgress !== void 0 ? {
                    onBytes: this.cappedRoundBytes("blob_put_bytes", conflict.relPath, candidate.size)
                } : {}
            });
        });
    }
    parkUnsyncedBytesBesidePath(args) {
        return this.parkUnsyncedBytesAtRelPath({
            absPath: args.absPath,
            parkedRelPath: localParkedConflictRelPath(args.relPath)
        });
    }
    parkUnsyncedBytesOutsideRemovedDir(args) {
        return this.parkUnsyncedBytesAtRelPath({
            absPath: args.absPath,
            parkedRelPath: localParkedConflictRelPath(hoistRelPathOutOfDir({
                relPath: args.relPath,
                dir: args.dir
            }))
        });
    }
    parkUnsyncedBytesAtRelPath(args) {
        const moved = this.materializeConflictRename({
            absPath: args.absPath
        }, args.parkedRelPath);
        if (moved === void 0) {
            return false;
        }
        let size = 0;
        try {
            size = fs26.lstatSync(resolveSafeChildPath({
                base: this.filesDir,
                relPath: moved.canonicalRelPath
            })).size;
        } catch  {}
        this.index.upsertFile({
            relPath: moved.canonicalRelPath,
            lastSyncedSha: "",
            size,
            lastSyncedMs: this.now(),
            direction: "pushed"
        });
        return true;
    }
    materializeConflictRename(candidate, conflictRelPath, options2 = {}) {
        try {
            const canonicalRelPath = normalizeRelPath(conflictRelPath);
            assertWindowsMaterializableRelPath({
                relPath: canonicalRelPath,
                platform: this.platform
            });
            const destAbsPath = resolveSafeChildPath({
                base: this.filesDir,
                relPath: canonicalRelPath
            });
            const parent = path50.dirname(destAbsPath);
            assertParentInsideBase({
                base: this.filesDir,
                parent,
                relPath: canonicalRelPath
            });
            safeCreateDirChain({
                base: this.filesDir,
                target: parent,
                relPath: canonicalRelPath
            });
            assertTargetWritable({
                absPath: destAbsPath,
                relPath: canonicalRelPath
            });
            const sourceStat = fs26.lstatSync(candidate.absPath);
            if (sourceStat.isDirectory()) {
                return void 0;
            }
            if (options2.requireRegularFile !== false && !sourceStat.isFile()) {
                return void 0;
            }
            fs26.renameSync(candidate.absPath, destAbsPath);
            return {
                canonicalRelPath
            };
        } catch  {
            return void 0;
        }
    }
    async pullAll(summary = emptySummary(), options2 = {}) {
        this.ensureDirsExist();
        const lastCompleteRoundMs = this.lastCompleteRoundMs();
        const ifVersionEqual = this.remoteVersionToSend();
        const probeUnchanged = ifVersionEqual !== void 0 && options2.remoteUnchangedVersion === ifVersionEqual && !roundMayHaveChangedServer(summary);
        let listing;
        if (probeUnchanged) {
            const relisted = await this.relistInsteadOfNotModified(summary);
            if (relisted === void 0) {
                this.applyNotModified({
                    tombstoneWatermarkMs: void 0,
                    listedWithInclude: false
                }, summary, "probe_unchanged");
                return summary;
            }
            listing = relisted;
        } else {
            listing = await this.listServerFiles(summary, {
                ifVersionEqual
            });
            if (listing.notModified) {
                const relisted = await this.relistInsteadOfNotModified(summary);
                if (relisted === void 0) {
                    this.applyNotModified(listing, summary);
                    return summary;
                }
                listing = relisted;
            }
        }
        this.clearRemoteVersion(summary, "before_apply");
        const listStartMs = listing.listStartMs;
        const absenceDecision = this.shouldApplyAbsenceDeletes({
            listingComplete: listing.listingComplete,
            listedWithInclude: listing.listedWithInclude,
            tombstoneFloorMs: listing.tombstoneFloorMs,
            lastCompleteRoundMs
        });
        if (absenceDecision === "needs-include") {
            listing = await this.listServerFiles(summary, {
                tombstoneMode: AgentStoreTombstoneMode.INCLUDE
            });
        }
        const { files: serverFiles, tombstones, listingComplete, removedSubdirs, tombstoneWatermarkMs, tombstoneFloorMs, listedWithInclude } = listing;
        summary.pullOutcome = listing.version !== void 0 ? "listed" : "listed_no_version";
        this.lastPullListingComplete = listingComplete;
        summary.listingComplete = listingComplete;
        const listedApply = await this.applyRemoteTombstones(tombstones, summary);
        const absenceApply = await this.applyAbsenceDeletes({
            files: serverFiles,
            tombstones,
            removedSubdirs,
            listingComplete,
            listedWithInclude,
            tombstoneFloorMs,
            lastCompleteRoundMs,
            summary
        });
        this.pruneExpiredTombstoneRows({
            tombstones,
            listingComplete,
            tombstoneFloorMs,
            listedWithInclude
        });
        this.commitTombstoneCursor({
            watermarkMs: tombstoneWatermarkMs,
            listingComplete,
            listedWithInclude,
            deferred: listedApply.deferred,
            summary
        });
        await this.applyRemovedLocalDirs(removedSubdirs, serverFiles, summary);
        const candidates = this.pullCandidatesFromListing(serverFiles, summary);
        await this.pullCandidates(candidates, summary);
        const completeRoundCommitted = this.commitLastCompleteRoundMs({
            listingComplete,
            listStartMs,
            watermarkMs: tombstoneWatermarkMs,
            absenceNeeded: absenceDecision !== "no",
            tombstoneFloorMs,
            absenceDeferred: absenceApply.deferred
        });
        this.maybePersistRemoteVersion({
            version: listing.version,
            completeRoundCommitted,
            tombstonesDeferred: listedApply.deferred,
            summary
        });
        return summary;
    }
    remoteVersionToSend() {
        if (!this.remoteVersionEnabledValue) {
            return void 0;
        }
        if (this.remoteVersionStaleFromPathWrite) {
            return void 0;
        }
        const version4 = this.index.getMeta(META_REMOTE_VERSION);
        if (version4 === void 0 || version4 === "") {
            return void 0;
        }
        const intervalMs = this.versionFullListIntervalMsValue;
        if (intervalMs > 0) {
            const listedMs = parsePositiveMetaMs(this.index.getMeta(META_REMOTE_VERSION_LISTED_MS));
            if (listedMs === void 0 || this.now() - listedMs >= intervalMs) {
                return void 0;
            }
        }
        if (this.tombstoneListingMode().include) {
            return void 0;
        }
        return version4;
    }
    maybePersistRemoteVersion(args) {
        const { version: version4, summary } = args;
        if (version4 === void 0 || version4 === "") {
            return;
        }
        if (!args.completeRoundCommitted || args.tombstonesDeferred > 0 || summary.pullsDeferred > 0 || summary.errors.some((error3)=>!VERSION_NEUTRAL_ERROR_CODES.has(error3.code)) || this.activeRoundSignal?.aborted === true) {
            return;
        }
        this.index.setMeta({
            key: META_REMOTE_VERSION,
            value: version4
        });
        this.index.setMeta({
            key: META_REMOTE_VERSION_LISTED_MS,
            value: String(this.now())
        });
        this.remoteVersionStaleFromPathWrite = false;
        recordRemoteVersionEvent(summary, {
            event: "persisted",
            reason: "clean_round"
        });
    }
    clearRemoteVersion(summary, reason) {
        const hadVersion = this.index.deleteMeta(META_REMOTE_VERSION);
        this.index.deleteMeta(META_REMOTE_VERSION_LISTED_MS);
        if (hadVersion) {
            recordRemoteVersionEvent(summary, {
                event: "cleared",
                reason
            });
        }
    }
    applyNotModified(listing, summary, outcome = "not_modified") {
        summary.pullOutcome = outcome;
        summary.listingComplete = true;
        this.lastPullListingComplete = true;
        this.index.setMeta({
            key: META_LAST_LISTING_APPLIED_MS,
            value: String(this.now())
        });
        if (listing.listedWithInclude) {
            this.index.setMeta({
                key: META_TOMBSTONE_ROUNDS_SINCE_INCLUDE,
                value: "0"
            });
            this.index.setMeta({
                key: META_TOMBSTONE_LAST_INCLUDE_MS,
                value: String(this.now())
            });
        } else {
            this.bumpRoundsSinceInclude();
        }
        if (listing.tombstoneWatermarkMs !== void 0 && parsePositiveMetaMs(this.index.getMeta(META_LAST_COMPLETE_ROUND_MS)) !== void 0) {
            this.index.setMeta({
                key: META_LAST_COMPLETE_ROUND_MS,
                value: String(listing.tombstoneWatermarkMs)
            });
        }
    }
    async relistInsteadOfNotModified(summary) {
        if (this.hasMissingMirrorFile()) {
            this.clearRemoteVersion(summary, "local_file_missing");
            return await this.listServerFiles(summary);
        }
        const audit = await this.auditNotModified(summary);
        if (audit !== void 0) {
            this.clearRemoteVersion(summary, "audit_mismatch");
        }
        return audit;
    }
    hasMissingMirrorFile() {
        const pendingDeletePaths = new Set(this.index.listPendingDeletes().map((entry)=>entry.relPath));
        for (const entry of this.index.listFiles()){
            if (entry.state === "tombstoned" || pendingDeletePaths.has(entry.relPath)) {
                continue;
            }
            let absPath;
            try {
                absPath = resolveSafeChildPath({
                    base: this.filesDir,
                    relPath: entry.relPath
                });
            } catch  {
                return true;
            }
            if (!regularFileExistsNoFollow(absPath)) {
                return true;
            }
        }
        return false;
    }
    async auditNotModified(summary) {
        const rate = this.versionAuditSampleRateValue;
        if (rate <= 0 || this.random() >= rate) {
            return void 0;
        }
        const listed = await this.listServerFiles(summary, {
            tombstoneMode: AgentStoreTombstoneMode.INCLUDE
        });
        if (!listed.listingComplete) {
            return void 0;
        }
        const mismatches = countVersionAuditMismatches({
            files: omitVersionNeutralListingFiles({
                files: listed.files,
                maxFileSizeBytes: this.maxFileSizeBytes,
                platform: this.platform
            }),
            tombstones: listed.tombstones,
            indexed: this.index.listFiles(),
            pendingDeletePaths: new Set(this.index.listPendingDeletes().map((entry)=>entry.relPath))
        });
        if (mismatches === 0) {
            summary.versionAudit = "match";
            return void 0;
        }
        summary.versionAudit = "mismatch";
        this.warn(`Agent store listing version audit: server said not modified but ${mismatches} index row(s) differ from the listing`, void 0);
        return listed;
    }
    async pullDownloadWindow(args) {
        const candidates = args.candidates;
        const summary = args.summary;
        this.throwIfRoundAborted();
        await this.assertRoundStillOwnsLock(void 0, {
            bypassCache: true
        });
        const presignStart = this.monotonicNow();
        const presigned = await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>this.client.presignReads({
                agentId: this.agentId,
                relPaths: candidates.map((candidate)=>candidate.relPath),
                signal: this.activeRoundSignal
            }));
        summary.presignMs = (summary.presignMs ?? 0) + (this.monotonicNow() - presignStart);
        const presignedByPath = new Map();
        for (const presign of presigned){
            let canonical;
            try {
                canonical = normalizeRelPath(presign.relPath);
            } catch (error3) {
                summary.errors.push({
                    relPath: presign.relPath,
                    code: "presign_response_mismatch",
                    message: `Server returned an unsafe relPath: ${presign.relPath} (${error3.message})`
                });
                continue;
            }
            presignedByPath.set(canonical, presign);
        }
        const outstanding = new Set();
        for (const candidate of candidates){
            if (outstanding.size >= PULL_OUTSTANDING_LIMIT) {
                await Promise.race(outstanding);
            }
            if (this.activeRoundLane === "full" && this.roundScheduler.hasPendingPathRounds()) {
                await Promise.all(outstanding);
                await this.yieldToPathRounds();
            }
            if (this.listingSnapshotStaleFor(candidate.relPath)) {
                summary.filesSkipped++;
                continue;
            }
            const download2 = this.trackQueue((operation)=>this.queues.s3.enqueue(operation), ()=>this.downloadPullCandidate(candidate, presignedByPath, summary)).finally(()=>outstanding.delete(download2));
            outstanding.add(download2);
        }
        await Promise.all(outstanding);
    }
    async downloadPullCandidate(candidate, presignedByPath, summary) {
        const reportIndexCommit = this.progressReporter("index_commit");
        await this.assertRoundStillOwnsLock(candidate.relPath, {
            bypassCache: true
        });
        const presign = presignedByPath.get(candidate.relPath);
        if (presign === void 0) {
            summary.errors.push({
                relPath: candidate.relPath,
                code: "presign_response_mismatch",
                message: `Server returned no presigned URL for ${candidate.relPath}`
            });
            return;
        }
        try {
            const downloaded = await this.downloadOne(candidate, presign);
            if (downloaded.kind === "deferred") {
                summary.pullsDeferred++;
                return;
            }
            this.throwIfRoundAborted(candidate.relPath);
            summary.filesPulled++;
            summary.bytesPulled += downloaded.size;
            this.index.upsertFile({
                relPath: candidate.relPath,
                lastSeenEtag: downloaded.etag,
                lastSyncedSha: downloaded.sha,
                size: downloaded.size,
                lastSyncedMs: this.now(),
                direction: "pulled",
                recordedStat: captureContentStat({
                    absPath: candidate.absPath,
                    expectedSize: downloaded.size,
                    recordedMs: this.now()
                })
            });
            reportIndexCommit();
        } catch (error3) {
            this.rethrowIfRoundAbort(error3, candidate.relPath);
            this.rethrowIfLockLost(error3);
            summary.errors.push({
                relPath: candidate.relPath,
                code: error3 instanceof AgentStoreSyncError ? error3.code : "download_failed",
                message: error3 instanceof Error ? error3.message : String(error3),
                ...timeoutClassEntry(error3)
            });
        }
    }
    async listServerFiles(summary, options2) {
        const start = this.monotonicNow();
        try {
            return await this.walkServerFiles(summary, options2);
        } finally{
            summary.listMs = (summary.listMs ?? 0) + (this.monotonicNow() - start);
        }
    }
    async walkServerFiles(summary, options2) {
        const listStartMs = this.now();
        let listingMode;
        if (options2?.tombstoneMode === AgentStoreTombstoneMode.OMIT) {
            listingMode = {
                include: false,
                request: {
                    tombstoneMode: AgentStoreTombstoneMode.OMIT
                }
            };
        } else if (options2?.tombstoneMode === AgentStoreTombstoneMode.INCLUDE) {
            listingMode = {
                include: true,
                request: {
                    tombstoneMode: AgentStoreTombstoneMode.INCLUDE
                }
            };
        } else {
            listingMode = this.tombstoneListingMode();
        }
        const files = [];
        const seenFiles = new Set();
        const tombstones = new Map();
        const removedSubdirs = new Set();
        let listingComplete = true;
        let tombstoneWatermarkMs;
        let tombstoneFloorMs;
        let sawListingClock = false;
        let pending = [
            ""
        ];
        const seenDirs = new Set([
            ""
        ]);
        let version4;
        const ifVersionEqual = options2?.ifVersionEqual !== void 0 && options2.ifVersionEqual !== "" ? options2.ifVersionEqual : void 0;
        while(pending.length > 0){
            const level = pending;
            pending = [];
            this.throwIfRoundAborted();
            let listed;
            try {
                listed = await this.listLevel(level, listingMode.request, ifVersionEqual);
            } catch (error3) {
                this.rethrowIfRoundAbort(error3);
                throw error3;
            }
            this.throwIfRoundAborted();
            for (const [levelIndex, dir] of level.entries()){
                const listing = listed[levelIndex];
                if (dir === "") {
                    version4 = listing.version !== void 0 && listing.version !== "" ? listing.version : void 0;
                    if (listing.notModified === true) {
                        if (ifVersionEqual === void 0) {
                            throw new Error("Agent store listing answered not modified without a version condition");
                        }
                        summary.tombstonesReceived = 0;
                        return {
                            files: [],
                            tombstones: [],
                            listingComplete: false,
                            removedSubdirs: [],
                            tombstoneWatermarkMs: protoPositiveMs(listing.tombstoneWatermarkMs),
                            tombstoneFloorMs: protoPositiveMs(listing.tombstoneFloorMs),
                            listedWithInclude: listingMode.include,
                            listStartMs,
                            version: version4 ?? ifVersionEqual,
                            notModified: true
                        };
                    }
                } else if (listing.notModified === true) {
                    throw new Error(`Agent store listing of ${dir} answered not modified without a condition`);
                }
                if (listing.listingComplete !== true) {
                    listingComplete = false;
                }
                const nextWatermark = protoPositiveMs(listing.tombstoneWatermarkMs);
                const nextFloor = protoPositiveMs(listing.tombstoneFloorMs);
                if (!sawListingClock) {
                    tombstoneWatermarkMs = nextWatermark;
                    tombstoneFloorMs = nextFloor;
                    sawListingClock = true;
                } else {
                    tombstoneWatermarkMs = minDefinedMs(tombstoneWatermarkMs, nextWatermark);
                    tombstoneFloorMs = minDefinedMs(tombstoneFloorMs, nextFloor);
                }
                for (const removed of listing.removedSubdirs ?? []){
                    let canonical;
                    try {
                        canonical = normalizeRelPath(removed);
                    } catch  {
                        continue;
                    }
                    removedSubdirs.add(canonical);
                    if (this.index.hasLiveDescendantFiles(canonical)) {
                        this.enqueueRemovedDirWalk(canonical, pending, seenDirs);
                    }
                }
                const listedUnderRemoved = [
                    ...removedSubdirs
                ].some((marker17)=>dir === marker17 || dir.startsWith(`${marker17}/`));
                const liveInThisListing = new Set();
                if (!listedUnderRemoved) {
                    for (const file of listing.files){
                        let dedupKey;
                        try {
                            dedupKey = normalizeRelPath(file.relPath);
                        } catch  {
                            dedupKey = file.relPath;
                        }
                        if (seenFiles.has(dedupKey)) continue;
                        if (isLeftoverHiddenByRemovedPrefix({
                            relPath: dedupKey,
                            listedDir: dir,
                            removed: removedSubdirs
                        })) {
                            continue;
                        }
                        seenFiles.add(dedupKey);
                        liveInThisListing.add(dedupKey);
                        tombstones.delete(dedupKey);
                        files.push(file);
                    }
                }
                for (const tombstone of listing.tombstones ?? []){
                    let canonical;
                    try {
                        canonical = normalizeRelPath(tombstone.relPath);
                    } catch  {
                        summary.refusals++;
                        continue;
                    }
                    if (liveInThisListing.has(canonical)) {
                        continue;
                    }
                    if (!tombstones.has(canonical)) {
                        tombstones.set(canonical, {
                            ...tombstone,
                            relPath: canonical
                        });
                    }
                }
                for (const sub of listing.subdirs){
                    let canonical;
                    try {
                        canonical = normalizeRelPath(sub);
                    } catch (error3) {
                        summary.errors.push({
                            relPath: sub,
                            code: "presign_response_mismatch",
                            message: `Server returned an unsafe subdir: ${sub} (${error3.message})`
                        });
                        continue;
                    }
                    if (seenDirs.has(canonical)) continue;
                    if ([
                        ...removedSubdirs
                    ].some((marker17)=>canonical === marker17 || canonical.startsWith(`${marker17}/`))) {
                        continue;
                    }
                    seenDirs.add(canonical);
                    pending.push(canonical);
                }
            }
        }
        const tombstoneList = [
            ...tombstones.values()
        ];
        summary.tombstonesReceived = tombstoneList.length;
        return {
            files,
            tombstones: tombstoneList,
            listingComplete,
            removedSubdirs: [
                ...removedSubdirs
            ],
            tombstoneWatermarkMs,
            tombstoneFloorMs,
            listedWithInclude: listingMode.include,
            listStartMs,
            version: version4,
            notModified: false
        };
    }
    async listLevel(level, request3, rootIfVersionEqual) {
        const roundSignal = this.activeRoundSignal;
        const levelAbort = new AbortController();
        const listSignal = composeAbortSignals(roundSignal, levelAbort.signal);
        const throwIfStopped = (dir)=>{
            if (roundSignal?.aborted === true) {
                throwForAbortedRoundSignal(dir, roundSignal.reason);
            }
            levelAbort.signal.throwIfAborted();
        };
        const listings = new Array(level.length);
        const outstanding = new Set();
        let firstError;
        const fail3 = (cause)=>{
            if (firstError !== void 0) {
                return;
            }
            firstError = {
                cause
            };
            levelAbort.abort();
        };
        for (const [levelIndex, dir] of level.entries()){
            if (outstanding.size >= this.listWalkConcurrency) {
                await Promise.race(outstanding);
            }
            if (firstError !== void 0) {
                break;
            }
            const pathRoundWaiting = this.activeRoundLane === "full" && this.roundScheduler.hasPendingPathRounds();
            if (pathRoundWaiting) {
                await Promise.all(outstanding);
                if (firstError !== void 0) {
                    break;
                }
                try {
                    await this.yieldToPathRounds();
                } catch (yieldError) {
                    fail3(yieldError);
                    break;
                }
            }
            const attempt = this.trackQueue((operation)=>this.queues.list.enqueue(operation), async ()=>{
                const reportListing = this.progressReporter("listing_page");
                throwIfStopped(dir);
                listings[levelIndex] = await this.client.listFiles({
                    agentId: this.agentId,
                    relPath: dir,
                    signal: listSignal,
                    ...request3,
                    ...dir === "" && rootIfVersionEqual !== void 0 ? {
                        ifVersionEqual: rootIfVersionEqual
                    } : {}
                });
                reportListing();
            }).then(noop3, fail3).finally(()=>outstanding.delete(attempt));
            outstanding.add(attempt);
        }
        await Promise.all(outstanding);
        if (firstError !== void 0) {
            throw firstError.cause;
        }
        return listings;
    }
    enqueueRemovedDirWalk(dir, pending, seenDirs) {
        if (!seenDirs.has(dir)) {
            seenDirs.add(dir);
            pending.push(dir);
        }
        for (const entry of this.index.listFiles()){
            if (entry.state === "tombstoned") {
                continue;
            }
            if (!isUnderDir({
                relPath: entry.relPath,
                dir
            })) {
                continue;
            }
            let current = parentRelPath(entry.relPath);
            while(current !== void 0 && current !== ""){
                if (!isUnderDir({
                    relPath: current,
                    dir
                })) {
                    break;
                }
                if (!seenDirs.has(current)) {
                    seenDirs.add(current);
                    pending.push(current);
                }
                current = parentRelPath(current);
            }
        }
    }
    async applyRemovedLocalDirs(removedDirs, serverFiles, summary) {
        const reusedExact = new Set();
        for (const file of serverFiles){
            try {
                reusedExact.add(normalizeRelPath(file.relPath));
            } catch  {}
        }
        const sorted = [
            ...new Set(removedDirs)
        ].sort(compareRelPathDepthDesc);
        for (const dir of sorted){
            if (dir === "") {
                continue;
            }
            this.index.removePendingRmdir(dir);
            if (reusedExact.has(dir)) {
                await this.clearLeftoverDescendantsForReusedFile(dir, summary);
                this.rmdirLocalEmptyAncestors(dir, summary);
                continue;
            }
            if (this.hasLiveIndexRowsUnder(dir)) {
                continue;
            }
            this.rmdirLocalEmptyAncestors(dir, summary);
        }
    }
    async clearLeftoverDescendantsForReusedFile(dir, summary) {
        for (const entry of this.index.listFiles()){
            if (entry.state === "tombstoned" || entry.relPath === dir) {
                continue;
            }
            if (!isUnderDir({
                relPath: entry.relPath,
                dir
            })) {
                continue;
            }
            const verified = verifiedLeftoverLeaf({
                base: this.filesDir,
                relPath: entry.relPath
            });
            if (verified.kind === "absent") {
                this.index.deleteFile(entry.relPath);
                continue;
            }
            if (verified.kind === "refused") {
                summary.errors.push({
                    relPath: entry.relPath,
                    code: "not_regular_file",
                    message: verified.message
                });
                continue;
            }
            const absPath = verified.leafAbs;
            let stat24;
            try {
                stat24 = fs26.lstatSync(absPath);
            } catch (error3) {
                if (!isNodeError5(error3) || error3.code !== "ENOENT") {
                    summary.errors.push({
                        relPath: entry.relPath,
                        code: "fs_read_failed",
                        message: error3 instanceof Error ? error3.message : String(error3)
                    });
                    continue;
                }
                this.index.deleteFile(entry.relPath);
                continue;
            }
            if (stat24.isSymbolicLink() || !stat24.isFile()) {
                if (stat24.isDirectory()) {
                    continue;
                }
                const relocated = this.relocateBlockerOutsideRemovedDir({
                    absPath,
                    relPath: entry.relPath,
                    dir
                });
                if (!relocated) {
                    summary.errors.push({
                        relPath: entry.relPath,
                        code: "fs_write_failed",
                        message: `Failed to park leftover ${entry.relPath} under reused ${dir}`
                    });
                    continue;
                }
                this.index.deleteFile(entry.relPath);
                continue;
            }
            let localSha;
            try {
                const hashed = await streamHashFileNoFollow({
                    absPath,
                    maxBytes: this.maxFileSizeBytes,
                    expectedDev: stat24.dev,
                    expectedIno: stat24.ino
                });
                localSha = hashed.sha;
            } catch (error3) {
                summary.errors.push({
                    relPath: entry.relPath,
                    code: error3 instanceof AgentStoreSyncError ? error3.code : "fs_read_failed",
                    message: error3 instanceof Error ? error3.message : String(error3)
                });
                continue;
            }
            const stillVerified = verifiedLeftoverLeaf({
                base: this.filesDir,
                relPath: entry.relPath
            });
            if (stillVerified.kind !== "ready" || stillVerified.leafAbs !== absPath) {
                summary.errors.push({
                    relPath: entry.relPath,
                    code: "not_regular_file",
                    message: `Refusing leftover ${entry.relPath}: parent changed before park or unlink`
                });
                continue;
            }
            if (localSha !== entry.lastSyncedSha) {
                if (!this.parkUnsyncedBytesOutsideRemovedDir({
                    absPath,
                    relPath: entry.relPath,
                    dir
                })) {
                    summary.errors.push({
                        relPath: entry.relPath,
                        code: "fs_write_failed",
                        message: `Failed to park leftover ${entry.relPath} under reused ${dir}`
                    });
                    continue;
                }
            } else {
                try {
                    fs26.unlinkSync(absPath);
                } catch (error3) {
                    if (!isNodeError5(error3) || error3.code !== "ENOENT") {
                        summary.errors.push({
                            relPath: entry.relPath,
                            code: "fs_write_failed",
                            message: `Failed to unlink leftover ${entry.relPath} under reused ${dir}: ${error3 instanceof Error ? error3.message : String(error3)}`
                        });
                        continue;
                    }
                }
                summary.filesDeletedLocal++;
            }
            this.index.deleteFile(entry.relPath);
        }
        this.clearUnindexedDiskLeftoversForReusedFile(dir, summary);
    }
    clearUnindexedDiskLeftoversForReusedFile(dir, summary) {
        const leftovers = this.listDiskNodesUnder(dir, summary);
        leftovers.sort((left, right)=>compareRelPathDepthDesc(left.relPath, right.relPath));
        for (const leftover of leftovers){
            const indexed = this.index.getFile(leftover.relPath);
            if (indexed !== void 0 && indexed.state !== "tombstoned") {
                continue;
            }
            const parked = leftover.kind === "file" ? this.parkUnsyncedBytesOutsideRemovedDir({
                absPath: leftover.absPath,
                relPath: leftover.relPath,
                dir
            }) : this.relocateBlockerOutsideRemovedDir({
                absPath: leftover.absPath,
                relPath: leftover.relPath,
                dir
            });
            if (!parked) {
                summary.errors.push({
                    relPath: leftover.relPath,
                    code: "fs_write_failed",
                    message: `Failed to park unindexed leftover ${leftover.relPath} under reused ${dir}`
                });
                continue;
            }
            if (indexed !== void 0) {
                this.index.deleteFile(leftover.relPath);
            }
        }
    }
    relocateBlockerOutsideRemovedDir(args) {
        return this.materializeConflictRename({
            absPath: args.absPath
        }, localParkedConflictRelPath(hoistRelPathOutOfDir({
            relPath: args.relPath,
            dir: args.dir
        })), {
            requireRegularFile: false
        }) !== void 0;
    }
    listDiskNodesUnder(dir, summary) {
        const found = [];
        let root;
        try {
            root = safeLstatDirectory({
                base: this.filesDir,
                relPath: dir
            });
        } catch (error3) {
            summary.errors.push({
                relPath: dir,
                code: "fs_read_failed",
                message: error3 instanceof Error ? error3.message : String(error3)
            });
            return found;
        }
        if (root.kind !== "directory") {
            return found;
        }
        const pending = [
            {
                relPath: dir,
                absPath: root.absPath
            }
        ];
        while(pending.length > 0){
            const current = pending.pop();
            if (current === void 0) {
                break;
            }
            let names3;
            try {
                const before = fs26.lstatSync(current.absPath);
                if (before.isSymbolicLink() || !before.isDirectory()) {
                    summary.errors.push({
                        relPath: current.relPath,
                        code: "not_regular_file",
                        message: `Refusing to walk leftover parent ${current.relPath}: not a directory`
                    });
                    continue;
                }
                names3 = fs26.readdirSync(current.absPath, {
                    withFileTypes: true
                });
                const after = fs26.lstatSync(current.absPath);
                if (after.isSymbolicLink() || !after.isDirectory() || after.dev !== before.dev || after.ino !== before.ino) {
                    summary.errors.push({
                        relPath: current.relPath,
                        code: "not_regular_file",
                        message: `Refusing to walk leftover parent ${current.relPath}: directory changed during readdir`
                    });
                    continue;
                }
            } catch (error3) {
                if (isNodeError5(error3) && error3.code === "ENOENT") {
                    continue;
                }
                summary.errors.push({
                    relPath: current.relPath,
                    code: "fs_read_failed",
                    message: error3 instanceof Error ? error3.message : String(error3)
                });
                continue;
            }
            for (const entry of names3){
                if (entry.name === "." || entry.name === ".." || entry.name.length === 0 || entry.name.includes("/") || entry.name.includes("\\")) {
                    continue;
                }
                const childRel = current.relPath === "" ? entry.name : `${current.relPath}/${entry.name}`;
                try {
                    normalizeRelPath(childRel);
                } catch (error3) {
                    summary.errors.push({
                        relPath: childRel,
                        code: "fs_read_failed",
                        message: error3 instanceof Error ? error3.message : String(error3)
                    });
                    continue;
                }
                const childAbs = path50.join(current.absPath, entry.name);
                let stat24;
                try {
                    stat24 = fs26.lstatSync(childAbs);
                } catch (error3) {
                    if (isNodeError5(error3) && error3.code === "ENOENT") {
                        continue;
                    }
                    summary.errors.push({
                        relPath: childRel,
                        code: "fs_read_failed",
                        message: error3 instanceof Error ? error3.message : String(error3)
                    });
                    continue;
                }
                if (stat24.isSymbolicLink() || !stat24.isDirectory()) {
                    found.push({
                        relPath: childRel,
                        absPath: childAbs,
                        kind: stat24.isFile() ? "file" : "blocker"
                    });
                    continue;
                }
                pending.push({
                    relPath: childRel,
                    absPath: childAbs
                });
            }
        }
        return found;
    }
    rmdirLocalEmptyAncestors(dirRelPath, summary) {
        const { removedCount } = rmdirLocalEmptyAncestors({
            base: this.filesDir,
            dirRelPath
        });
        if (removedCount > 0) {
            summary.removedDirsApplied = (summary.removedDirsApplied ?? 0) + removedCount;
        }
    }
    async applyRemoteTombstones(tombstones, summary, options2) {
        const acceptEmptyTombstoneEtag = options2?.acceptEmptyTombstoneEtag === true;
        let deferred = 0;
        let applied = 0;
        let skippedModified = 0;
        for (const tombstone of tombstones){
            if (tombstone.tombstoneEtag.length === 0 && !acceptEmptyTombstoneEtag) {
                deferred++;
                continue;
            }
            const relPath = tombstone.relPath;
            if (this.listingSnapshotStaleFor(relPath)) {
                deferred++;
                continue;
            }
            const indexEntry = this.index.getFile(relPath);
            if (indexEntry?.state === "tombstoned") {
                const tombstoneEtag = recordedTombstoneEtag(tombstone.tombstoneEtag);
                if (tombstoneEtag !== void 0 && indexEntry.tombstoneEtag !== tombstoneEtag) {
                    this.index.upsertFile({
                        ...indexEntry,
                        lastSyncedMs: this.now(),
                        state: "tombstoned",
                        tombstoneEtag,
                        deletedAtMs: tombstone.deletedAtMs > 0 ? tombstone.deletedAtMs : this.now()
                    });
                }
                continue;
            }
            let absPath;
            try {
                absPath = resolveSafeChildPath({
                    base: this.filesDir,
                    relPath
                });
            } catch (error3) {
                summary.refusals++;
                summary.errors.push({
                    relPath,
                    code: "not_regular_file",
                    message: error3 instanceof Error ? error3.message : String(error3)
                });
                deferred++;
                continue;
            }
            let stat24;
            try {
                stat24 = fs26.lstatSync(absPath);
            } catch (error3) {
                if (!isNodeError5(error3) || error3.code !== "ENOENT") {
                    summary.errors.push({
                        relPath,
                        code: "fs_read_failed",
                        message: error3 instanceof Error ? error3.message : String(error3)
                    });
                    deferred++;
                    continue;
                }
            }
            if (stat24 !== void 0) {
                if (!stat24.isFile() || stat24.isSymbolicLink()) {
                    summary.errors.push({
                        relPath,
                        code: "not_regular_file",
                        message: `Refusing to apply tombstone over non-regular file: ${relPath}`
                    });
                    deferred++;
                    continue;
                }
                if (indexEntry === void 0) {
                    if (this.syncMode === "readWrite") {
                        deferred++;
                        continue;
                    }
                    const parked = this.parkUnsyncedBytesBesidePath({
                        absPath,
                        relPath
                    });
                    if (!parked) {
                        deferred++;
                        continue;
                    }
                    summary.filesDeletedLocal++;
                    this.index.upsertFile({
                        relPath,
                        lastSyncedSha: "",
                        size: 0,
                        lastSyncedMs: this.now(),
                        direction: "pulled",
                        state: "tombstoned",
                        tombstoneEtag: recordedTombstoneEtag(tombstone.tombstoneEtag),
                        deletedAtMs: tombstone.deletedAtMs > 0 ? tombstone.deletedAtMs : this.now()
                    });
                    applied++;
                    continue;
                }
                let localSha;
                try {
                    const hashed = await streamHashFileNoFollow({
                        absPath,
                        maxBytes: this.maxFileSizeBytes,
                        expectedDev: stat24.dev,
                        expectedIno: stat24.ino
                    });
                    localSha = hashed.sha;
                } catch (error3) {
                    summary.errors.push({
                        relPath,
                        code: error3 instanceof AgentStoreSyncError ? error3.code : "fs_read_failed",
                        message: error3 instanceof Error ? error3.message : String(error3)
                    });
                    deferred++;
                    continue;
                }
                if (localSha !== indexEntry.lastSyncedSha) {
                    if (this.syncMode === "readWrite") {
                        deferred++;
                        skippedModified++;
                        continue;
                    }
                    const parked = this.parkUnsyncedBytesBesidePath({
                        absPath,
                        relPath
                    });
                    if (!parked) {
                        deferred++;
                        continue;
                    }
                }
                const sameRoundConflict = summary.conflicts.find((entry)=>entry.relPath === relPath);
                if (sameRoundConflict !== void 0) {
                    const moved = this.materializeConflictRename({
                        absPath
                    }, sameRoundConflict.conflictRelPath);
                    if (moved === void 0) {
                        deferred++;
                        continue;
                    }
                    this.index.upsertFile({
                        relPath: moved.canonicalRelPath,
                        lastSeenEtag: sameRoundConflict.conflictEtag,
                        lastSyncedSha: localSha,
                        size: stat24.size,
                        lastSyncedMs: this.now(),
                        direction: "pushed"
                    });
                } else {
                    try {
                        fs26.unlinkSync(absPath);
                    } catch (error3) {
                        if (!isNodeError5(error3) || error3.code !== "ENOENT") {
                            summary.errors.push({
                                relPath,
                                code: "fs_write_failed",
                                message: `Failed to unlink remotely deleted ${relPath}: ${error3 instanceof Error ? error3.message : String(error3)}`
                            });
                            deferred++;
                            continue;
                        }
                    }
                    summary.filesDeletedLocal++;
                }
            }
            this.index.upsertFile({
                relPath,
                lastSyncedSha: indexEntry?.lastSyncedSha ?? "",
                ...indexEntry?.lastSeenEtag !== void 0 ? {
                    lastSeenEtag: indexEntry.lastSeenEtag
                } : {},
                size: indexEntry?.size ?? 0,
                lastSyncedMs: this.now(),
                direction: indexEntry?.direction ?? "pulled",
                state: "tombstoned",
                tombstoneEtag: recordedTombstoneEtag(tombstone.tombstoneEtag),
                deletedAtMs: tombstone.deletedAtMs > 0 ? tombstone.deletedAtMs : this.now()
            });
            applied++;
        }
        return {
            deferred,
            applied,
            skippedModified
        };
    }
    tombstoneListingMode() {
        const cursorMs = parsePositiveMetaMs(this.index.getMeta(META_TOMBSTONE_CURSOR_MS));
        const refreshEvery = this.tombstoneFullRefreshRounds();
        const roundsSinceInclude = parseNonNegativeMetaInt(this.index.getMeta(META_TOMBSTONE_ROUNDS_SINCE_INCLUDE));
        const lastIncludeMs = parsePositiveMetaMs(this.index.getMeta(META_TOMBSTONE_LAST_INCLUDE_MS));
        const refreshIntervalMs = this.tombstoneFullRefreshIntervalMs();
        const includeStale = refreshIntervalMs > 0 && cursorMs !== void 0 && (lastIncludeMs === void 0 || this.now() - lastIncludeMs >= refreshIntervalMs);
        if (cursorMs === void 0 || refreshEvery <= 1 || roundsSinceInclude + 1 >= refreshEvery || includeStale) {
            return {
                include: true,
                request: {
                    tombstoneMode: AgentStoreTombstoneMode.INCLUDE
                }
            };
        }
        return {
            include: false,
            request: {
                tombstoneMode: AgentStoreTombstoneMode.SINCE,
                tombstonesSinceMs: cursorMs
            }
        };
    }
    tombstoneFullRefreshRounds() {
        return this.tombstoneFullRefreshRoundsValue;
    }
    tombstoneFullRefreshIntervalMs() {
        return this.tombstoneFullRefreshIntervalMsValue;
    }
    tombstonePruneSlackMs() {
        return this.tombstonePruneSlackMsValue;
    }
    commitTombstoneCursor(args) {
        if (!args.listingComplete) {
            return;
        }
        if (args.listedWithInclude) {
            this.index.setMeta({
                key: META_TOMBSTONE_ROUNDS_SINCE_INCLUDE,
                value: "0"
            });
            this.index.setMeta({
                key: META_TOMBSTONE_LAST_INCLUDE_MS,
                value: String(this.now())
            });
        }
        if (args.watermarkMs === void 0 || args.deferred > 0) {
            return;
        }
        const priorMs = parsePositiveMetaMs(this.index.getMeta(META_TOMBSTONE_CURSOR_MS));
        this.index.setMeta({
            key: META_TOMBSTONE_CURSOR_MS,
            value: String(args.watermarkMs)
        });
        args.summary.tombstoneCursorAdvancedMs = priorMs === void 0 ? 0 : args.watermarkMs - priorMs;
        if (args.listedWithInclude) {
            return;
        }
        this.bumpRoundsSinceInclude();
    }
    bumpRoundsSinceInclude() {
        const next = parseNonNegativeMetaInt(this.index.getMeta(META_TOMBSTONE_ROUNDS_SINCE_INCLUDE)) + 1;
        this.index.setMeta({
            key: META_TOMBSTONE_ROUNDS_SINCE_INCLUDE,
            value: String(next)
        });
    }
    pruneExpiredTombstoneRows({ tombstones, listingComplete, tombstoneFloorMs, listedWithInclude }) {
        if (tombstoneFloorMs !== void 0) {
            const cutoffMs2 = tombstoneFloorMs - this.tombstonePruneSlackMs();
            for (const entry of this.index.listFiles()){
                if (entry.state !== "tombstoned") {
                    continue;
                }
                const recordedAtMs = entry.deletedAtMs ?? entry.lastSyncedMs;
                if (recordedAtMs >= cutoffMs2) {
                    continue;
                }
                this.index.deleteFile(entry.relPath);
            }
            return;
        }
        if (!listingComplete || !listedWithInclude) {
            return;
        }
        const listed = new Set(tombstones.map((tombstone)=>tombstone.relPath));
        const cutoffMs = this.now() - TOMBSTONE_ROW_RETENTION_MS;
        for (const entry of this.index.listFiles()){
            if (entry.state !== "tombstoned") {
                continue;
            }
            if (listed.has(entry.relPath)) {
                continue;
            }
            const recordedAtMs = entry.deletedAtMs ?? entry.lastSyncedMs;
            if (recordedAtMs > cutoffMs) {
                continue;
            }
            this.index.deleteFile(entry.relPath);
        }
    }
    lastCompleteRoundMs() {
        return parsePositiveMetaMs(this.index.getMeta(META_LAST_COMPLETE_ROUND_MS)) ?? parsePositiveMetaMs(this.index.getMeta(META_INDEX_CREATED_MS));
    }
    commitLastCompleteRoundMs(args) {
        if (!args.listingComplete) {
            return false;
        }
        this.index.setMeta({
            key: META_LAST_LISTING_APPLIED_MS,
            value: String(this.now())
        });
        if (args.absenceNeeded && args.tombstoneFloorMs === void 0) {
            return false;
        }
        if (args.absenceDeferred > 0) {
            return false;
        }
        this.index.setMeta({
            key: META_LAST_COMPLETE_ROUND_MS,
            value: String(args.watermarkMs ?? args.listStartMs)
        });
        return true;
    }
    shouldApplyAbsenceDeletes(args) {
        if (!args.listingComplete || args.tombstoneFloorMs === void 0 || args.lastCompleteRoundMs === void 0 || args.lastCompleteRoundMs >= args.tombstoneFloorMs) {
            return "no";
        }
        return args.listedWithInclude ? "ready" : "needs-include";
    }
    async applyAbsenceDeletes(args) {
        const floorMs = args.tombstoneFloorMs;
        if (this.shouldApplyAbsenceDeletes({
            listingComplete: args.listingComplete,
            listedWithInclude: args.listedWithInclude,
            tombstoneFloorMs: floorMs,
            lastCompleteRoundMs: args.lastCompleteRoundMs
        }) !== "ready" || floorMs === void 0) {
            return {
                deferred: 0
            };
        }
        const listedFiles = new Set();
        for (const file of args.files){
            try {
                listedFiles.add(normalizeRelPath(file.relPath));
            } catch  {
                continue;
            }
        }
        const listedTombstones = new Set(args.tombstones.map((tombstone)=>tombstone.relPath));
        const synthesized = [];
        for (const entry of this.index.listFiles()){
            if (entry.state !== "live") {
                continue;
            }
            if (entry.lastSeenEtag === void 0 || entry.lastSeenEtag.length === 0) {
                continue;
            }
            if (isReservedRelPath(entry.relPath)) {
                continue;
            }
            if (this.index.hasPendingDelete(entry.relPath)) {
                continue;
            }
            if (listedFiles.has(entry.relPath) || listedTombstones.has(entry.relPath)) {
                continue;
            }
            if (args.removedSubdirs.some((marker17)=>isUnderDir({
                    relPath: entry.relPath,
                    dir: marker17
                }))) {
                continue;
            }
            synthesized.push({
                relPath: entry.relPath,
                tombstoneEtag: "",
                deletedAtMs: floorMs
            });
        }
        const result = await this.applyRemoteTombstones(synthesized, args.summary, {
            acceptEmptyTombstoneEtag: true
        });
        args.summary.absenceDeletesApplied = result.applied;
        args.summary.absenceDeletesSkippedModified = result.skippedModified;
        const emptiedDirs = new Set();
        for (const tombstone of synthesized){
            if (this.index.getFile(tombstone.relPath)?.state !== "tombstoned") {
                continue;
            }
            const parent = parentRelPath(tombstone.relPath);
            if (parent !== void 0 && parent !== "") {
                emptiedDirs.add(parent);
            }
        }
        for (const dir of [
            ...emptiedDirs
        ].sort(compareRelPathDepthDesc)){
            if (!this.hasLiveIndexRowsUnder(dir)) {
                this.rmdirLocalEmptyAncestors(dir, args.summary);
            }
        }
        return {
            deferred: result.deferred
        };
    }
    preparePullCandidate(serverEntry, summary) {
        let canonicalRel;
        let absPath;
        try {
            canonicalRel = normalizeRelPath(serverEntry.relPath);
            assertWindowsMaterializableRelPath({
                relPath: canonicalRel,
                platform: this.platform
            });
            absPath = resolveSafeChildPath({
                base: this.filesDir,
                relPath: canonicalRel
            });
        } catch (error3) {
            summary.refusals++;
            let code = "presign_response_mismatch";
            if (error3 instanceof UnsafeAgentStorePathError) {
                code = error3.code === "windows_incompatible" ? "windows_incompatible" : "not_regular_file";
            }
            summary.errors.push({
                relPath: serverEntry.relPath,
                code,
                message: error3 instanceof Error ? error3.message : String(error3)
            });
            return void 0;
        }
        if (serverEntry.size > this.maxFileSizeBytes) {
            summary.errors.push({
                relPath: canonicalRel,
                code: "file_too_large",
                message: `Server file ${canonicalRel} (${serverEntry.size} bytes) exceeds the ${this.maxFileSizeBytes}-byte cap`
            });
            return void 0;
        }
        if (this.listingSnapshotStaleFor(canonicalRel)) {
            summary.filesSkipped++;
            return void 0;
        }
        const indexEntry = this.index.getFile(canonicalRel);
        if (indexEntry !== void 0 && indexEntry.lastSeenEtag === normalizeS3Etag(serverEntry.etag) && regularFileExistsNoFollow(absPath)) {
            this.index.upsertFile({
                ...indexEntry,
                lastSyncedMs: this.now(),
                state: "live",
                tombstoneEtag: void 0,
                deletedAtMs: void 0
            });
            summary.filesSkipped++;
            return void 0;
        }
        return {
            relPath: canonicalRel,
            absPath,
            serverEtag: normalizeS3Etag(serverEntry.etag),
            serverSize: serverEntry.size
        };
    }
    pullCandidatesFromListing(serverFiles, summary, wanted) {
        const pendingDeletePaths = new Set(this.index.listPendingDeletes().map((entry)=>entry.relPath));
        const candidates = [];
        const caseCollisionKeys = new Map();
        for (const serverEntry of serverFiles){
            let canonical;
            try {
                canonical = normalizeRelPath(serverEntry.relPath);
            } catch (error3) {
                if (wanted === void 0) {
                    summary.refusals++;
                    summary.errors.push({
                        relPath: serverEntry.relPath,
                        code: "presign_response_mismatch",
                        message: error3 instanceof Error ? error3.message : String(error3)
                    });
                }
                continue;
            }
            const collisionKey = canonical.toLowerCase();
            const previous = caseCollisionKeys.get(collisionKey);
            if (previous !== void 0 && previous !== canonical) {
                if (wanted === void 0 || wanted.has(canonical)) {
                    summary.errors.push({
                        relPath: canonical,
                        code: "case_collision",
                        message: `Server listing has case-colliding paths: ${previous} and ${canonical}`
                    });
                }
                continue;
            }
            caseCollisionKeys.set(collisionKey, canonical);
            if (wanted !== void 0 && !wanted.has(canonical)) {
                continue;
            }
            if (pendingDeletePaths.has(canonical)) {
                summary.pullsSkippedPendingDelete++;
                continue;
            }
            const candidate = this.preparePullCandidate(serverEntry, summary);
            if (candidate !== void 0) {
                candidates.push(candidate);
            }
        }
        return candidates;
    }
    async pullCandidates(candidates, summary) {
        for(let windowStart = 0; windowStart < candidates.length; windowStart += this.pullPresignWindowSize){
            await this.yieldToPathRounds();
            await this.pullDownloadWindow({
                candidates: candidates.slice(windowStart, windowStart + this.pullPresignWindowSize),
                summary
            });
        }
    }
    async downloadOne(candidate, presign) {
        this.assertPresignedUrlSafe({
            rawUrl: presign.url,
            relPath: candidate.relPath
        });
        const roundSignal = this.activeRoundSignal;
        const idleWatch = createBlobIdleWatch(this.blobIdleTimeoutMs);
        const fetchSignal = composeAbortSignals(roundSignal, idleWatch?.signal);
        let response;
        try {
            response = await this.fetchImpl(presign.url, {
                method: "GET",
                redirect: "error",
                ...fetchSignal !== void 0 ? {
                    signal: fetchSignal
                } : {}
            });
        } catch (error3) {
            idleWatch?.clear();
            if (roundSignal?.aborted === true) {
                throwForAbortedRoundSignal(candidate.relPath, roundSignal.reason ?? error3);
            }
            if (isBlobIdleAbortError(error3, idleWatch?.signal)) {
                throw new AgentStoreSyncError({
                    code: "download_failed",
                    relPath: candidate.relPath,
                    timeoutClass: "blob_get",
                    message: `blob_get idle timeout after ${this.blobIdleTimeoutMs}ms (url=${redactPresignedUrlString(presign.url)})`
                });
            }
            throw error3;
        }
        if (!response.ok) {
            idleWatch?.clear();
            const body = await safeReadBody(response);
            throw new AgentStoreSyncError({
                code: "download_failed",
                relPath: candidate.relPath,
                message: `Download of ${candidate.relPath} failed (${response.status} ${response.statusText}, url=${redactPresignedUrlString(presign.url)}): ${body}`
            });
        }
        if (response.body === null) {
            idleWatch?.clear();
            throw new AgentStoreSyncError({
                code: "download_failed",
                relPath: candidate.relPath,
                message: `Download of ${candidate.relPath} returned an empty response body`
            });
        }
        const parent = path50.dirname(candidate.absPath);
        assertParentInsideBase({
            base: this.filesDir,
            parent,
            relPath: candidate.relPath
        });
        safeCreateDirChain({
            base: this.filesDir,
            target: parent,
            relPath: candidate.relPath
        });
        assertTargetWritable({
            absPath: candidate.absPath,
            relPath: candidate.relPath
        });
        const tempName = `${(0, import_node_crypto50.randomBytes)(16).toString("hex")}.bin`;
        const tempPath = resolveSafeChildPath({
            base: this.tmpDir,
            relPath: tempName
        });
        const tempFd = fs26.openSync(tempPath, symlinkSafeWriteFlags(), PRIVATE_FILE_MODE3);
        let observedSize = 0;
        const sha2562 = (0, import_node_crypto50.createHash)("sha256");
        const maxBytes = this.maxFileSizeBytes;
        const reportGetBytes = this.onRoundProgress === void 0 ? void 0 : this.progressReporter("blob_get_bytes");
        const sizeTap = new import_node_stream5.Transform({
            transform: (chunk, _encoding, callback)=>{
                const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
                observedSize += buffer.byteLength;
                reportGetBytes?.(buffer.byteLength);
                idleWatch?.rearm();
                if (observedSize > maxBytes) {
                    callback(new AgentStoreSyncError({
                        code: "file_too_large",
                        relPath: candidate.relPath,
                        message: `Server returned >${maxBytes} bytes for ${candidate.relPath}`
                    }));
                    return;
                }
                sha2562.update(buffer);
                callback(null, buffer);
            }
        });
        const writeStream = fs26.createWriteStream("", {
            fd: tempFd,
            autoClose: false
        });
        const rearmIdleOnDrain = ()=>{
            idleWatch?.rearm();
        };
        let renameSucceeded = false;
        let tempFdClosed = false;
        let downloadedSha = "";
        let responseEtag = "";
        try {
            try {
                idleWatch?.rearm();
                writeStream.on("drain", rearmIdleOnDrain);
                await (0, import_promises50.pipeline)(import_node_stream5.Readable.fromWeb(response.body), sizeTap, writeStream);
            } catch (error3) {
                if (error3 instanceof AgentStoreSyncError) {
                    throw error3;
                }
                if (roundSignal?.aborted === true) {
                    throwForAbortedRoundSignal(candidate.relPath, roundSignal.reason ?? error3);
                }
                if (isBlobIdleAbortError(error3, idleWatch?.signal)) {
                    throw new AgentStoreSyncError({
                        code: "download_failed",
                        relPath: candidate.relPath,
                        timeoutClass: "blob_get",
                        message: `blob_get idle timeout after ${this.blobIdleTimeoutMs}ms (url=${redactPresignedUrlString(presign.url)})`
                    });
                }
                throw new AgentStoreSyncError({
                    code: "download_failed",
                    relPath: candidate.relPath,
                    message: `Streaming ${candidate.relPath} from ${redactPresignedUrlString(presign.url)} failed: ${error3 instanceof Error ? error3.message : String(error3)}`
                });
            } finally{
                writeStream.off("drain", rearmIdleOnDrain);
                idleWatch?.clear();
            }
            try {
                fs26.fsyncSync(tempFd);
            } catch  {}
            fs26.closeSync(tempFd);
            tempFdClosed = true;
            responseEtag = normalizeS3Etag(response.headers.get("etag") ?? void 0);
            if (responseEtag.length === 0) {
                throw new AgentStoreSyncError({
                    code: "etag_mismatch",
                    relPath: candidate.relPath,
                    message: `Download of ${candidate.relPath} returned no ETag header (expected ${candidate.serverEtag})`
                });
            }
            const listed = await this.listedIdentity(candidate, responseEtag);
            if (listed?.etag !== responseEtag) {
                throw new AgentStoreSyncError({
                    code: "etag_mismatch",
                    relPath: candidate.relPath,
                    message: `Downloaded ${candidate.relPath} etag ${responseEtag}, but the server lists ${listed?.etag ?? "no such file"} (round listed ${candidate.serverEtag})`
                });
            }
            if (observedSize !== listed.size) {
                throw new AgentStoreSyncError({
                    code: "etag_mismatch",
                    relPath: candidate.relPath,
                    message: `Downloaded ${candidate.relPath} size ${observedSize}, expected ${listed.size}`
                });
            }
            downloadedSha = sha2562.digest("hex");
            if (this.syncMode === "readWrite" && !await this.isLocalFileReplaceable(candidate, downloadedSha)) {
                return {
                    kind: "deferred"
                };
            }
            try {
                fs26.renameSync(tempPath, candidate.absPath);
                renameSucceeded = true;
            } catch (error3) {
                throw new AgentStoreSyncError({
                    code: "fs_write_failed",
                    relPath: candidate.relPath,
                    message: `Failed to rename staged blob into ${candidate.absPath}: ${error3 instanceof Error ? error3.message : String(error3)}`
                });
            }
            try {
                fs26.chmodSync(candidate.absPath, this.pulledFileMode());
            } catch  {}
        } finally{
            if (!tempFdClosed) {
                try {
                    fs26.closeSync(tempFd);
                } catch  {}
            }
            if (!renameSucceeded) {
                try {
                    fs26.unlinkSync(tempPath);
                } catch  {}
            }
        }
        return {
            kind: "downloaded",
            size: observedSize,
            sha: downloadedSha,
            etag: responseEtag
        };
    }
    async listedIdentity(candidate, responseEtag) {
        if (responseEtag === candidate.serverEtag) {
            return {
                etag: candidate.serverEtag,
                size: candidate.serverSize
            };
        }
        this.client.invalidateListCache?.({
            agentId: this.agentId
        });
        const listing = await this.runQueuedControlRpc(this.queues.list, "listing_page", ()=>this.client.listFiles({
                agentId: this.agentId,
                relPath: parentDirRelPath(candidate.relPath),
                tombstoneMode: AgentStoreTombstoneMode.OMIT,
                signal: this.activeRoundSignal
            }));
        for (const file of listing.files){
            let canonical;
            try {
                canonical = normalizeRelPath(file.relPath);
            } catch  {
                continue;
            }
            if (canonical === candidate.relPath) {
                return {
                    etag: normalizeS3Etag(file.etag),
                    size: file.size
                };
            }
        }
        return void 0;
    }
    async isLocalFileReplaceable(candidate, downloadedSha) {
        let stat24;
        try {
            stat24 = fs26.lstatSync(candidate.absPath);
        } catch (error3) {
            if (isNodeError5(error3) && error3.code === "ENOENT") {
                return true;
            }
            return false;
        }
        if (!stat24.isFile()) {
            return false;
        }
        if (stat24.nlink > 1) {
            return true;
        }
        try {
            const { sha } = await streamHashFileNoFollow({
                absPath: candidate.absPath,
                maxBytes: this.maxFileSizeBytes,
                expectedDev: stat24.dev,
                expectedIno: stat24.ino
            });
            if (sha === downloadedSha) {
                return true;
            }
            const entry = this.index.getFile(candidate.relPath);
            return entry !== void 0 && sha === entry.lastSyncedSha;
        } catch  {
            return false;
        }
    }
    decidePushStatFastPath(candidate) {
        if (!statFastPathEnabled(this.localStatFastPath, this.platform)) {
            return "hash";
        }
        const existing = candidate.existing;
        const decision = decideStatFastPath({
            mode: this.localStatFastPath,
            platform: this.platform,
            racyMarginMs: this.localStatRacyMarginMs,
            live: liveContentStat(candidate.absPath, candidate.size),
            recorded: existing?.recordedStat,
            synced: existing !== void 0 && existing.state !== "tombstoned",
            indexSize: existing?.size
        });
        if (decision.action === "skip" && !this.shouldAuditStatFastPath()) {
            return "unchanged";
        }
        if (decision.action === "skip") {
            return "audit";
        }
        if (decision.action === "hash") {
            this.noteStatFastPath("miss");
        }
        return "hash";
    }
    async hashCandidate(candidate) {
        let resolvedAbs;
        try {
            resolvedAbs = resolveSafeChildPath({
                base: this.filesDir,
                relPath: candidate.relPath
            });
        } catch (error3) {
            return {
                kind: "error",
                relPath: candidate.relPath,
                code: "not_regular_file",
                message: error3 instanceof Error ? error3.message : `Unsafe path: ${candidate.relPath}`
            };
        }
        if (resolvedAbs !== candidate.absPath) {
            return {
                kind: "error",
                relPath: candidate.relPath,
                code: "not_regular_file",
                message: `Resolved path ${resolvedAbs} did not match walk-reported path ${candidate.absPath}`
            };
        }
        const statDecision = this.decidePushStatFastPath(candidate);
        if (statDecision === "unchanged" && candidate.existing !== void 0) {
            return {
                kind: "stat_unchanged",
                relPath: candidate.relPath,
                existing: candidate.existing
            };
        }
        if (statDecision === "audit") {
            candidate = {
                ...candidate,
                statFastPathAudit: "skip"
            };
        }
        let size;
        let sha;
        let etag;
        let multipartParts;
        try {
            const result = await streamHashFileNoFollow({
                absPath: candidate.absPath,
                maxBytes: this.maxFileSizeBytes,
                expectedDev: candidate.dev,
                expectedIno: candidate.ino,
                ...candidate.size >= this.multipartUploadThresholdBytes ? {
                    multipartPartSizeBytes: this.multipartPartSizeBytes
                } : {}
            });
            size = result.size;
            sha = result.sha;
            etag = result.etag;
            multipartParts = result.multipartParts;
        } catch (error3) {
            if (error3 instanceof AgentStoreSyncError) {
                return {
                    kind: "error",
                    relPath: candidate.relPath,
                    code: error3.code,
                    message: error3.message
                };
            }
            return {
                kind: "error",
                relPath: candidate.relPath,
                code: "fs_read_failed",
                message: error3 instanceof Error ? error3.message : `Failed to hash file: ${error3}`
            };
        }
        return {
            kind: "hashed",
            relPath: candidate.relPath,
            absPath: candidate.absPath,
            size,
            mtimeMs: candidate.mtimeMs,
            dev: candidate.dev,
            ino: candidate.ino,
            sha,
            etag,
            ...multipartParts !== void 0 ? {
                multipartParts
            } : {},
            ...candidate.statFastPathAudit !== void 0 ? {
                statFastPathAudit: candidate.statFastPathAudit
            } : {},
            existing: candidate.existing
        };
    }
    async uploadOne(candidate, presign, summary) {
        this.assertPresignedUrlSafe({
            rawUrl: presign.url,
            relPath: candidate.relPath
        });
        return await this.runQueued(this.queues.s3, async ()=>{
            this.throwIfRoundAborted(candidate.relPath);
            this.assertPresignedUrlNotExpired({
                expiresAtMs: presign.expiresAtMs,
                relPath: candidate.relPath
            });
            await this.assertRoundStillOwnsLock(candidate.relPath, {
                bypassCache: true
            });
            return await this.blobTransfer.uploadFile({
                url: presign.url,
                relPath: candidate.relPath,
                absPath: candidate.absPath,
                sha: candidate.sha,
                size: candidate.size,
                expectedDev: candidate.dev,
                expectedIno: candidate.ino,
                presignHeaders: presign.headers,
                signal: this.activeRoundSignal,
                ...this.onRoundProgress !== void 0 ? {
                    onBytes: this.cappedRoundBytes("blob_put_bytes", candidate.relPath, candidate.size)
                } : {}
            });
        });
    }
    assertPresignedUrlNotExpired(args) {
        if (args.expiresAtMs <= this.now()) {
            throw new AgentStoreSyncError({
                code: "presigned_url_expired",
                relPath: args.relPath,
                message: `Presigned upload URL expired before ${args.relPath} could be sent`,
                retryable: false
            });
        }
    }
    assertPresignedUrlSafe({ rawUrl, relPath }) {
        try {
            assertPresignedUrlSafe({
                rawUrl,
                relPath,
                validatePresignedUrl: this.validatePresignedUrl
            });
        } catch (error3) {
            throw new AgentStoreSyncError({
                code: "presigned_url_rejected",
                relPath,
                message: error3 instanceof Error ? error3.message : String(error3),
                cause: error3 instanceof Error ? error3 : void 0
            });
        }
    }
    shouldAuditStatFastPath() {
        const rate = this.localStatFastPathAuditRate;
        if (!(rate > 0)) {
            return false;
        }
        if (rate >= 1) {
            return true;
        }
        return this.random() < rate;
    }
    noteStatFastPath(result) {
        try {
            this.onStatFastPath?.(result);
        } catch  {}
    }
    captureRecordedStat(candidate) {
        return captureContentStat({
            absPath: candidate.absPath,
            expectedSize: candidate.size,
            expectedDev: BigInt(candidate.dev),
            expectedIno: BigInt(candidate.ino),
            recordedMs: this.now()
        });
    }
    ensureDirsExist() {
        fs26.mkdirSync(this.filesDir, {
            recursive: true,
            mode: PRIVATE_DIR_MODE
        });
        fs26.mkdirSync(this.tmpDir, {
            recursive: true,
            mode: PRIVATE_DIR_MODE
        });
    }
};
MAX_RMDIR_CHAIN_DEPTH = 64;
RMDIR_FLUSH_MAX_PER_ROUND = 200;
VERSION_NEUTRAL_ERROR_CODES = new Set([
    "file_too_large",
    "case_collision",
    "windows_incompatible",
    "symlink_refused"
]);
symlinkSafeWriteFlags = symlinkSafeExclusiveWriteFlags;
SAFE_PRESIGN_HEADER_PREFIX = "x-amz-";
SAFE_PRESIGN_HEADER_EXACTS = new Set([
    "content-md5",
    "content-type",
    "if-match",
    "if-none-match"
]);
HttpAgentStoreBlobTransfer = class {
    constructor(options2 = {}){
        this.maxFileSizeBytes = options2.maxFileSizeBytes ?? 1024 * 1024 * 1024;
        this.allowInsecureScheme = options2.allowInsecureScheme ?? false;
        this.partUploadMaxAttempts = options2.partUploadMaxAttempts ?? 3;
        if (!Number.isInteger(this.partUploadMaxAttempts) || this.partUploadMaxAttempts < 1) {
            throw new RangeError(`HttpAgentStoreBlobTransfer partUploadMaxAttempts must be a positive integer, got ${this.partUploadMaxAttempts}`);
        }
        this.partUploadBaseDelayMs = options2.partUploadBaseDelayMs ?? 250;
        if (!Number.isFinite(this.partUploadBaseDelayMs) || this.partUploadBaseDelayMs < 0) {
            throw new RangeError(`HttpAgentStoreBlobTransfer partUploadBaseDelayMs must be non-negative, got ${this.partUploadBaseDelayMs}`);
        }
        this.now = options2.now ?? Date.now;
        this.sleep = options2.sleep ?? (async (ms2)=>{
            await new Promise((resolve36)=>{
                setTimeout(resolve36, ms2);
            });
        });
        this.agent = options2.agent;
        this.onTransferTiming = options2.onTransferTiming;
        this.blobIdleTimeoutMs = normalizeBlobIdleTimeoutMs(options2.blobIdleTimeoutMs);
        this.blobConnectTimeoutMs = normalizeBlobConnectTimeoutMs(options2.blobConnectTimeoutMs);
    }
    setBlobIdleTimeoutMs(blobIdleTimeoutMs) {
        this.blobIdleTimeoutMs = normalizeBlobIdleTimeoutMs(blobIdleTimeoutMs);
    }
    setBlobConnectTimeoutMs(blobConnectTimeoutMs) {
        this.blobConnectTimeoutMs = normalizeBlobConnectTimeoutMs(blobConnectTimeoutMs);
    }
    reportBlobTransferTiming(timing) {
        const report = this.onTransferTiming;
        if (report === void 0) {
            return;
        }
        try {
            report(timing);
        } catch  {}
    }
    async uploadFile(request3) {
        const uploaded = await this.uploadRange({
            url: request3.url,
            relPath: request3.relPath,
            absPath: request3.absPath,
            offset: 0,
            size: request3.size,
            fileSize: request3.size,
            expectedDev: request3.expectedDev,
            expectedIno: request3.expectedIno,
            presignHeaders: request3.presignHeaders ?? {
                "x-amz-meta-content-sha256": request3.sha
            },
            signal: request3.signal,
            onBytes: request3.onBytes
        });
        return {
            etag: normalizeS3Etag(uploaded.etag)
        };
    }
    async uploadPart(request3) {
        const expectedChecksum = Buffer.from(request3.checksumSha256).toString("base64");
        if (request3.checksumSha256.byteLength !== 32 || getHeaderCaseInsensitive(request3.presignHeaders, "x-amz-checksum-sha256") !== expectedChecksum) {
            throw new AgentStoreSyncError({
                code: "presign_response_mismatch",
                relPath: request3.relPath,
                message: `Multipart part ${request3.partNumber} of ${request3.relPath} is missing its signed SHA-256 checksum`,
                retryable: false
            });
        }
        const reportBytes = cappedPartProgress(request3.onBytes, request3.size);
        for(let attempt = 1;; attempt++){
            if (request3.expiresAtMs <= this.now()) {
                throw new AgentStoreSyncError({
                    code: "presigned_url_expired",
                    relPath: request3.relPath,
                    message: `Multipart upload URL expired before part ${request3.partNumber} of ${request3.relPath} could be sent`,
                    retryable: false
                });
            }
            try {
                return await this.uploadRange({
                    url: request3.url,
                    relPath: request3.relPath,
                    absPath: request3.absPath,
                    offset: request3.offset,
                    size: request3.size,
                    fileSize: request3.fileSize,
                    expectedDev: request3.expectedDev,
                    expectedIno: request3.expectedIno,
                    presignHeaders: request3.presignHeaders,
                    signal: request3.signal,
                    onBytes: reportBytes
                });
            } catch (error3) {
                const retryable = error3 instanceof AgentStoreSyncError && error3.retryable === true;
                if (!retryable || attempt >= this.partUploadMaxAttempts) {
                    throw error3;
                }
                await this.sleep(this.partUploadBaseDelayMs * 2 ** Math.max(0, attempt - 1));
            }
        }
    }
    async uploadRange(args) {
        const isEmptyWholeFile = args.offset === 0 && args.size === 0 && args.fileSize === 0;
        if (!Number.isSafeInteger(args.offset) || args.offset < 0 || !Number.isSafeInteger(args.size) || args.size < 0 || args.size === 0 && !isEmptyWholeFile || args.offset + args.size > args.fileSize) {
            throw new AgentStoreSyncError({
                code: "presign_response_mismatch",
                relPath: args.relPath,
                message: `Invalid multipart byte range for ${args.relPath}`,
                retryable: false
            });
        }
        const parsedUrl = new URL(args.url);
        const client = this.clientForUrl({
            parsedUrl,
            relPath: args.relPath
        });
        const safePresignHeaders = sanitizePresignHeaders(args.presignHeaders, args.relPath, args.size);
        const redactedUrl = redactPresignedUrlString(args.url);
        const { fd, size: openedSize } = openExistingFileNoFollow({
            absPath: args.absPath,
            maxBytes: this.maxFileSizeBytes,
            expectedDev: args.expectedDev,
            expectedIno: args.expectedIno
        });
        if (openedSize !== args.fileSize) {
            fs26.closeSync(fd);
            throw new AgentStoreSyncError({
                code: "sha_mismatch",
                relPath: args.relPath,
                message: `Local file ${args.relPath} changed between hash and upload (size ${args.fileSize} -> ${openedSize})`,
                retryable: false
            });
        }
        let body;
        if (isEmptyWholeFile) {
            fs26.closeSync(fd);
            body = import_node_stream5.Readable.from([]);
        } else {
            body = fs26.createReadStream(args.absPath, {
                fd,
                autoClose: true,
                start: args.offset,
                end: args.offset + args.size - 1
            });
        }
        try {
            return await new Promise((resolve36, reject2)=>{
                let settled = false;
                let transferClosed = false;
                let removeAbortListener = ()=>{};
                let clearConnectTimer = ()=>{};
                let detachHandshake = ()=>{};
                const timingEnabled = this.onTransferTiming !== void 0;
                const transferStartedAtMs = timingEnabled ? monotonicNowMs() : 0;
                let reusedSocket = false;
                let socketAssignedAtMs;
                let handshakeFinishedAtMs;
                let firstByteAtMs = timingEnabled && isEmptyWholeFile ? transferStartedAtMs : void 0;
                let firstByteSentAtMs;
                let connectReported = false;
                let connectOutcome;
                let firstByteReported = false;
                let responseReported = false;
                const emitPhase = (phase, startedAtMs, outcome)=>{
                    if (!timingEnabled) {
                        return;
                    }
                    this.reportBlobTransferTiming({
                        phase,
                        durationMs: Math.max(0, monotonicNowMs() - startedAtMs),
                        reusedSocket,
                        outcome
                    });
                };
                const emitConnect = (outcome)=>{
                    if (!timingEnabled || connectReported) {
                        return;
                    }
                    connectReported = true;
                    connectOutcome = outcome;
                    emitPhase("connect", socketAssignedAtMs ?? transferStartedAtMs, outcome);
                };
                const emitFirstByte = ()=>{
                    if (transferClosed || !timingEnabled || firstByteReported || firstByteAtMs === void 0 || handshakeFinishedAtMs === void 0) {
                        return;
                    }
                    firstByteReported = true;
                    firstByteSentAtMs = Math.max(firstByteAtMs, handshakeFinishedAtMs);
                    this.reportBlobTransferTiming({
                        phase: "first_byte_sent",
                        durationMs: Math.max(0, firstByteSentAtMs - transferStartedAtMs),
                        reusedSocket,
                        outcome: "ok"
                    });
                };
                const emitResponse = (outcome)=>{
                    if (!timingEnabled || responseReported) {
                        return;
                    }
                    responseReported = true;
                    emitPhase("response", firstByteSentAtMs ?? handshakeFinishedAtMs ?? transferStartedAtMs, outcome);
                };
                const settle = (outcome)=>{
                    if (settled) {
                        return;
                    }
                    settled = true;
                    transferClosed = true;
                    detachHandshake();
                    clearConnectTimer();
                    removeAbortListener();
                    if (timingEnabled) {
                        const putOutcome = outcome.kind === "success" ? "ok" : classifyBlobPutTimingOutcome(outcome.error);
                        if (!connectReported) {
                            emitConnect(putOutcome);
                        } else if (connectOutcome === "ok" && !firstByteReported && putOutcome !== "ok") {
                            firstByteReported = true;
                            this.reportBlobTransferTiming({
                                phase: "first_byte_sent",
                                durationMs: Math.max(0, monotonicNowMs() - transferStartedAtMs),
                                reusedSocket,
                                outcome: putOutcome
                            });
                        } else if (connectOutcome === "ok" && !responseReported && putOutcome !== "ok") {
                            emitResponse(putOutcome);
                        }
                        emitPhase("total", transferStartedAtMs, putOutcome);
                    }
                    if (outcome.kind === "success") {
                        resolve36({
                            etag: outcome.etag
                        });
                        return;
                    }
                    const { error: error3 } = outcome;
                    if (error3 instanceof AgentStoreSyncError) {
                        reject2(error3);
                        return;
                    }
                    reject2(new AgentStoreSyncError({
                        code: "upload_failed",
                        relPath: args.relPath,
                        message: `Upload of ${args.relPath} failed (url=${redactedUrl}): ${error3 instanceof Error ? error3.message : String(error3)}`,
                        cause: error3,
                        retryable: true
                    }));
                };
                const putHeaders = {
                    ...safePresignHeaders,
                    "content-length": String(args.size)
                };
                const httpRequest = client.request(parsedUrl, {
                    method: "PUT",
                    headers: putHeaders,
                    ...this.agent !== void 0 ? {
                        agent: this.agent
                    } : {}
                }, (response)=>{
                    if (transferClosed) {
                        response.resume();
                        return;
                    }
                    emitFirstByte();
                    emitResponse("ok");
                    response.on("error", (error3)=>settle({
                            kind: "failure",
                            error: error3
                        }));
                    response.resume();
                    response.on("end", ()=>{
                        const status = response.statusCode ?? 0;
                        if (status >= 200 && status < 300) {
                            const responseEtag = stripS3EtagQuotes(response.headers.etag);
                            if (responseEtag.length > 0) {
                                settle({
                                    kind: "success",
                                    etag: responseEtag
                                });
                                return;
                            }
                            settle({
                                kind: "failure",
                                error: new AgentStoreSyncError({
                                    code: "upload_failed",
                                    relPath: args.relPath,
                                    message: `Upload of ${args.relPath} succeeded but returned no ETag (url=${redactedUrl})`,
                                    retryable: false
                                })
                            });
                            return;
                        }
                        settle({
                            kind: "failure",
                            error: new AgentStoreSyncError({
                                code: status === 412 || status === 409 ? "write_conflict" : "upload_failed",
                                relPath: args.relPath,
                                httpStatus: status,
                                message: `Upload of ${args.relPath} failed (${status} ${response.statusMessage ?? ""}, url=${redactedUrl})`,
                                retryable: status === 408 || status === 429 || status >= 500
                            })
                        });
                    });
                });
                httpRequest.on("error", (error3)=>settle({
                        kind: "failure",
                        error: error3
                    }));
                httpRequest.once("socket", (socket)=>{
                    if (settled) {
                        return;
                    }
                    if (!timingEnabled && this.blobConnectTimeoutMs <= 0) {
                        return;
                    }
                    if (timingEnabled) {
                        socketAssignedAtMs = monotonicNowMs();
                        reusedSocket = httpRequest.reusedSocket;
                    }
                    const handshakePending = socket.connecting || socket instanceof tls2.TLSSocket && tlsHandshakePending(socket);
                    const finishHandshake = ()=>{
                        detachHandshake();
                        clearConnectTimer();
                        if (transferClosed) {
                            return;
                        }
                        handshakeFinishedAtMs = monotonicNowMs();
                        if (handshakePending) {
                            emitConnect("ok");
                        } else if (timingEnabled) {
                            connectReported = true;
                            connectOutcome = "ok";
                        }
                        emitFirstByte();
                    };
                    if (!handshakePending) {
                        finishHandshake();
                        return;
                    }
                    if (this.blobConnectTimeoutMs <= 0) {
                        const handshakeEvent2 = socket instanceof tls2.TLSSocket && parsedUrl.protocol === "https:" ? "secureConnect" : "connect";
                        socket.once(handshakeEvent2, finishHandshake);
                        detachHandshake = ()=>{
                            socket.off(handshakeEvent2, finishHandshake);
                        };
                        return;
                    }
                    const connectTimeoutMs = this.blobConnectTimeoutMs;
                    const timer2 = setTimeout(()=>{
                        const connectTimeoutError = new AgentStoreSyncError({
                            code: "upload_failed",
                            relPath: args.relPath,
                            timeoutClass: "blob_put",
                            message: `blob_put connect timeout after ${connectTimeoutMs}ms (url=${redactedUrl})`,
                            retryable: true
                        });
                        transferClosed = true;
                        detachHandshake();
                        emitConnect("timeout");
                        body.destroy();
                        httpRequest.destroy(connectTimeoutError);
                        settle({
                            kind: "failure",
                            error: connectTimeoutError
                        });
                    }, connectTimeoutMs);
                    timer2.unref?.();
                    const clear = ()=>{
                        clearTimeout(timer2);
                    };
                    clearConnectTimer = clear;
                    const handshakeEvent = socket instanceof tls2.TLSSocket && parsedUrl.protocol === "https:" ? "secureConnect" : "connect";
                    socket.once(handshakeEvent, finishHandshake);
                    detachHandshake = ()=>{
                        socket.off(handshakeEvent, finishHandshake);
                    };
                    socket.once("error", clear);
                });
                let putIdleArmed = false;
                const armPutIdleTimeout = ()=>{
                    if (putIdleArmed || this.blobIdleTimeoutMs <= 0) {
                        return;
                    }
                    putIdleArmed = true;
                    httpRequest.setTimeout(this.blobIdleTimeoutMs, ()=>{
                        const timeoutError = new AgentStoreSyncError({
                            code: "upload_failed",
                            relPath: args.relPath,
                            timeoutClass: "blob_put",
                            message: `blob_put idle timeout after ${this.blobIdleTimeoutMs}ms (url=${redactedUrl})`,
                            retryable: true
                        });
                        transferClosed = true;
                        detachHandshake();
                        body.destroy();
                        httpRequest.destroy(timeoutError);
                        settle({
                            kind: "failure",
                            error: timeoutError
                        });
                    });
                };
                const signal = args.signal;
                if (signal !== void 0) {
                    const onAbort = ()=>{
                        const abortError = isSyncRoundStoodAsideError(signal.reason) ? signal.reason : roundAbortedError(args.relPath, signal.reason);
                        transferClosed = true;
                        detachHandshake();
                        body.destroy();
                        httpRequest.destroy(abortError);
                        settle({
                            kind: "failure",
                            error: abortError
                        });
                    };
                    if (signal.aborted) {
                        onAbort();
                        return;
                    }
                    signal.addEventListener("abort", onAbort, {
                        once: true
                    });
                    removeAbortListener = ()=>{
                        signal.removeEventListener("abort", onAbort);
                    };
                }
                const reportBytes = args.onBytes;
                const countChunk = (chunk)=>{
                    reportBytes?.(typeof chunk === "string" ? Buffer.byteLength(chunk) : chunk.byteLength);
                };
                const observeFirstByte = timingEnabled ? new import_node_stream5.Transform({
                    transform: (chunk, _encoding, callback)=>{
                        if (firstByteAtMs === void 0) {
                            firstByteAtMs = monotonicNowMs();
                            emitFirstByte();
                        }
                        callback(null, chunk);
                    }
                }) : void 0;
                const pipePut = (middle)=>{
                    const failed = (error3)=>{
                        settle({
                            kind: "failure",
                            error: error3
                        });
                    };
                    if (observeFirstByte !== void 0 && middle !== void 0) {
                        void (0, import_promises50.pipeline)(body, observeFirstByte, middle, httpRequest).catch(failed);
                        return;
                    }
                    if (observeFirstByte !== void 0) {
                        void (0, import_promises50.pipeline)(body, observeFirstByte, httpRequest).catch(failed);
                        return;
                    }
                    if (middle !== void 0) {
                        void (0, import_promises50.pipeline)(body, middle, httpRequest).catch(failed);
                        return;
                    }
                    void (0, import_promises50.pipeline)(body, httpRequest).catch(failed);
                };
                if (this.blobIdleTimeoutMs > 0 && isEmptyWholeFile) {
                    armPutIdleTimeout();
                    pipePut(void 0);
                } else if (this.blobIdleTimeoutMs > 0 || reportBytes !== void 0 && !isEmptyWholeFile) {
                    const armOnFirstByte = new import_node_stream5.Transform({
                        transform (chunk, _encoding, callback) {
                            armPutIdleTimeout();
                            countChunk(chunk);
                            callback(null, chunk);
                        }
                    });
                    pipePut(armOnFirstByte);
                } else {
                    pipePut(void 0);
                }
            });
        } catch (error3) {
            body.destroy();
            throw error3;
        }
    }
    clientForUrl(args) {
        const { parsedUrl, relPath } = args;
        let client;
        if (parsedUrl.protocol === "https:") {
            client = https2;
        } else if (parsedUrl.protocol === "http:" && this.allowInsecureScheme) {
            client = http3;
        }
        if (client === void 0) {
            throw new AgentStoreSyncError({
                code: "upload_failed",
                relPath,
                message: `Refusing to upload over unsupported scheme: ${parsedUrl.protocol}`,
                retryable: false
            });
        }
        return client;
    }
};

}
