"use strict";
function n({ value: e, name: t, context: r }) {
    if (!Number.isFinite(e) || e <= 0) throw new RangeError(`${r} ${t} must be a finite positive number, got ${e}`);
    return e;
}
require.r(exports), require.d(exports, {
    AGENT_STORE_CLIENT_METRIC_PREFIX: ()=>Ht,
    AGENT_STORE_CONFLICT_EVENTS_FILE_NAME: ()=>Wt.Ai,
    AGENT_STORE_CONFLICT_HOOK_EVENT_NAME: ()=>Gt.MG,
    AGENT_STORE_CONTROL_DIR_NAME: ()=>Wt.AD,
    AGENT_STORE_EVICTED_DIR_NAME: ()=>Wt.Jl,
    AGENT_STORE_EVICTION_MODES: ()=>nu,
    AGENT_STORE_EXCLUSIVE_MUTATION_LOCK_FILE_NAME: ()=>Pr,
    AGENT_STORE_FILES_DIR_NAME: ()=>Wt._L,
    AGENT_STORE_MINT_RETRY_POLICY_VERSION: ()=>ds,
    AGENT_STORE_MOUNT_CONFIG_VERSION: ()=>Ss,
    AGENT_STORE_MOUNT_POLICIES: ()=>ru,
    AGENT_STORE_MOUNT_REQUEST_REASONS: ()=>su,
    AGENT_STORE_PATH_SYNC_REQUESTS_DIR_NAME: ()=>Qs,
    AGENT_STORE_PUSH_ORDERS: ()=>ou,
    AGENT_STORE_RECOVERED_DIR_NAME: ()=>Wt.qA,
    AGENT_STORE_ROOT_ID_FILE_NAME: ()=>Uo,
    AGENT_STORE_RPC_SERVICE_TAG: ()=>it,
    AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS: ()=>cu,
    AGENT_STORE_SYNC_CLIENT_CONFIG_KEYS: ()=>iu,
    AGENT_STORE_SYNC_CLIENT_CONFIG_NAME: ()=>Yn.$8,
    AGENT_STORE_SYNC_DIR_NAME: ()=>Wt.kR,
    AGENT_STORE_TMP_DIR_NAME: ()=>Wt.EJ,
    AGENT_STORE_TMP_DIR_NAME_DEV: ()=>Wt.OE,
    AgentStoreConflictDrain: ()=>Gt.Ri,
    AgentStoreConversationActivityTracker: ()=>ns,
    AgentStoreDirectoryListingError: ()=>c,
    AgentStoreDirectoryNotEmptyError: ()=>a,
    AgentStoreMintFailedError: ()=>ye,
    AgentStoreMintGate: ()=>ls,
    AgentStoreMintRetryBudget: ()=>us,
    AgentStorePathError: ()=>Wt.y$,
    AgentStoreProtocolError: ()=>l,
    AgentStoreSyncEngine: ()=>ya,
    AgentStoreSyncError: ()=>ga,
    AgentStoreSyncRuntimeController: ()=>Vu,
    AgentStoreSyncSession: ()=>hd,
    AgentStoreSyncSessionController: ()=>gd,
    AgentStoreTombstoneMode: ()=>o.hw,
    AgentStoreUnauthorizedError: ()=>i,
    AgentStoreVersionProbeBatcher: ()=>zu,
    AggregatingAgentStoreMetricsEmitter: ()=>rs,
    BCS_AGENT_STORE_BUCKET_HOSTS: ()=>Ds,
    BackoffScheduler: ()=>s,
    BcsAgentStoreTransport: ()=>ht,
    BoundedConcurrencyQueue: ()=>Lt,
    CONFLICT_JOURNAL_ROTATE_BYTES: ()=>$t.hJ,
    CURRENT_SCHEMA_VERSION: ()=>vn,
    CoalescingScheduler: ()=>fi,
    ConflictJournal: ()=>$t.aJ,
    DEFAULT_AGENT_STORE_RPC_SERVICE: ()=>ot,
    DEFAULT_BLOB_IDLE_TIMEOUT_MS: ()=>ea,
    DEFAULT_HARNESS_RECOVERY_CONFIG: ()=>Jr,
    DEFAULT_MAX_FILE_SIZE_BYTES: ()=>Qi,
    DEFAULT_MAX_RENDERED_CONFLICTS: ()=>zt.zD,
    DEFAULT_RPC_TIMEOUT_MS: ()=>dt,
    DEFAULT_TOMBSTONE_FULL_REFRESH_INTERVAL_MS: ()=>sa,
    DEFAULT_TOMBSTONE_FULL_REFRESH_ROUNDS: ()=>na,
    DEFAULT_TOMBSTONE_PRUNE_SLACK_MS: ()=>oa,
    DEFAULT_VERSION_FULL_LIST_INTERVAL_MS: ()=>ha,
    DEFAULT_VERSION_PROBE_TIMEOUT_MS: ()=>Gu,
    DELETION_ARMED_META_KEY: ()=>ia,
    DISK_FULL_REPEAT_WINDOW_MS: ()=>ts,
    DogStatsdAgentStoreMetricsEmitter: ()=>Qt,
    FILES_ROOT_DEV_META_KEY: ()=>aa,
    FILES_ROOT_INO_META_KEY: ()=>ca,
    HARNESS_RECOVERY_MAX_RETRY_AFTER_MS: ()=>qr,
    HARNESS_RECOVERY_PROBE_BASE_MS: ()=>Br,
    HARNESS_RECOVERY_PROBE_MAX_MS: ()=>Dr,
    HARNESS_RECOVERY_START_JITTER_MS: ()=>Or,
    HARNESS_REMEMBERED_MOUNTS_MAX: ()=>Yr,
    HttpAgentStoreBlobTransfer: ()=>pc,
    INDEX_CREATED_MS_META_KEY: ()=>ua,
    LAST_COMPLETE_ROUND_MS_META_KEY: ()=>da,
    LocalAgentStoreIndex: ()=>On,
    LocalIndexError: ()=>Mn,
    MAX_ANNOUNCED_EVENT_IDS: ()=>jt.z7,
    MAX_CONFLICT_NOTICE_CHARS: ()=>zt.HA,
    META_INDEX_CREATED_MS: ()=>In,
    META_LAST_COMPLETE_ROUND_MS: ()=>xn,
    META_ROOT_ID: ()=>Tn,
    META_TOMBSTONE_CURSOR_MS: ()=>kn,
    META_TOMBSTONE_LAST_INCLUDE_MS: ()=>Pn,
    META_TOMBSTONE_ROUNDS_SINCE_INCLUDE: ()=>Cn,
    MountScopedAgentStoreClient: ()=>As,
    MountSyncRequestCoalescer: ()=>ju,
    NEVER_STARTED_HARNESS_PHASE: ()=>Fr,
    NOOP_METRICS_EMITTER: ()=>Xn,
    NOOP_RESILIENCE_LISTENER: ()=>ho,
    PATH_SYNC_REQUEST_POLL_MS: ()=>Zs,
    PATH_SYNC_REQUEST_STALE_MS: ()=>Xs,
    PATH_SYNC_REQUEST_WAIT_POLL_MS: ()=>eo,
    PRIVATE_DIR_MODE: ()=>Wt.qH,
    PendingConflictJournal: ()=>$t.Tj,
    PerSessionTimerScheduler: ()=>hi,
    PresignedUrlRejectedError: ()=>Rs,
    REMOTE_VERSION_LISTED_MS_META_KEY: ()=>ma,
    REMOTE_VERSION_META_KEY: ()=>pa,
    RESILIENCE_DISPATCHED_CODES: ()=>ji,
    RetryingAgentStoreClient: ()=>Ro,
    STORE_EVICTION_MARK_TTL_MS: ()=>Rc,
    STORE_LOCK_MTIME_UPDATE_MS: ()=>ur,
    STORE_LOCK_STALE_MS: ()=>dr,
    STORE_PIN_MARK_POLL_MS: ()=>Mc,
    StoreLock: ()=>hr,
    StoreLockError: ()=>mr,
    SyncRoundScheduler: ()=>Yi,
    TOMBSTONE_CURSOR_MS_META_KEY: ()=>la,
    TOMBSTONE_ROW_RETENTION_MS: ()=>ra,
    TokenCachingAgentStoreClient: ()=>So,
    UnsafeAgentStorePathError: ()=>f,
    ackPathSyncRequests: ()=>po,
    acquireAgentStoreExclusiveMutationClaim: ()=>Rr,
    acquireStorePin: ()=>Lc,
    acquireStorePinSync: ()=>$c,
    adaptFlatAgentStoreList: ()=>L,
    admitLocalAgentStore: ()=>Qn,
    agentStoreBackgroundPinsDir: ()=>Fc,
    agentStoreConflictEventsPath: ()=>Wt.VN,
    agentStoreConflictPendingEventsPath: ()=>Wt.AC,
    agentStoreControlDir: ()=>Wt.ve,
    agentStoreEvictingMarkPath: ()=>Uc,
    agentStoreFilesDir: ()=>Wt.f$,
    agentStoreIndexPath: ()=>Wt.mD,
    agentStoreLockPath: ()=>Wt.N1,
    agentStoreMintRetryAfterMs: ()=>Ue,
    agentStoreMountConfigPath: ()=>Wt.BE,
    agentStoreOwnerPath: ()=>Wt.Dr,
    agentStorePathParts: ()=>Wt.WX,
    agentStorePinsDir: ()=>Nc,
    agentStoreRoot: ()=>Wt.dv,
    agentStoreRootIdPath: ()=>Wt.$t,
    agentStoreRpcServiceFromDedicatedGate: ()=>at,
    agentStoreSkillsDir: ()=>Wt.yA,
    agentStoreSyncClientCodeDefaults: ()=>uu,
    agentStoreSyncDir: ()=>Wt.Du,
    agentStoreSyncRemoteVersionFromClientConfig: ()=>qu,
    agentStoreSyncSessionOptionsFromClientConfig: ()=>Bu,
    agentStoreSyncTombstoneTimingFromClientConfig: ()=>Du,
    agentStoreTmpDir: ()=>Wt.DE,
    agentStoreTmpDirNameForUrlProtocol: ()=>Wt.Wo,
    allocateUniqueAgentStoreMountAlias: ()=>fs,
    announceConflictEventIds: ()=>jt._3,
    assertNoSymlinkInPath: ()=>Wt.rs,
    assertSafeAgentId: ()=>Wt._b,
    assertSafeMountKey: ()=>Wt.qh,
    assertWindowsMaterializableRelPath: ()=>k,
    assertWindowsStoreAcl: ()=>Wt.PE,
    buildConflictNoticeCarriers: ()=>Gt._G,
    buildRoundCompletedEvent: ()=>Zn,
    ceilToGrid: ()=>yi,
    checkAgentStoreRootClean: ()=>bc,
    clampMintRetryAfterHeaderMs: ()=>Io,
    classifyAgentStoreMountFailureReason: ()=>Ps,
    classifyAgentStoreSourceId: ()=>Wt.Pz,
    classifyHarnessDownReason: ()=>jr,
    clearEvictingMark: ()=>Wc,
    conflictEventsCursorAfterForeignLeaseBarrier: ()=>$t.$U,
    conflictJournalPathForFilesDir: ()=>$t.KD,
    conflictPendingJournalPathForFilesDir: ()=>$t.Zz,
    connectServiceForAgentStoreRpc: ()=>ut,
    createAgentStorePeriodicScheduler: ()=>gi,
    createAgentStorePresignedUrlValidatorForBackend: ()=>Us,
    createAgentStoreSyncMetrics: ()=>cs,
    createAgentStoreSyncQueues: ()=>Nu,
    createBcsPresignedUrlValidator: ()=>Ns,
    createConflictNoticeClaimState: ()=>jt.cM,
    createDefaultAgentStoreSyncQueues: ()=>fa,
    createDownPhase: ()=>Ur,
    createHostAllowlistValidator: ()=>Bs,
    createPeerMountSpec: ()=>ws,
    createPrincipalMountSpec: ()=>_s,
    createSelfMountSpec: ()=>ys,
    createShareMountSpec: ()=>vs,
    decodeAgentStoreMountConfig: ()=>Is,
    defaultAgentStoreMountAlias: ()=>hs,
    defaultPresignedUrlValidator: ()=>Ms,
    defaultProcessExists: ()=>Ir,
    encodeAgentStoreMountConfig: ()=>Es,
    enqueuePathSyncRequest: ()=>io,
    ensureAgentStoreRootId: ()=>Vo,
    ensureSecureDirectoryChain: ()=>Wt.Ew,
    evictIdleAgentStoreRoots: ()=>Ul,
    exclusiveMutationLockPathForFilesDir: ()=>Ar,
    filterConflictEventsBySessionFloor: ()=>$t.tN,
    formatHarnessPhase: ()=>dn,
    formatHarnessTransition: ()=>pn,
    getAgentStoreConnectCode: ()=>fe,
    getCurrentStoreLockIdentity: ()=>yr,
    hardenPathForNotice: ()=>zt.p1,
    harnessProbeDelayMs: ()=>rn,
    harnessRecoveryConfigFromClient: ()=>Fu,
    harnessRecoveryStartDelayMs: ()=>Hr,
    harnessStartTransitionReason: ()=>Kr,
    harnessTouchIsCoolingDown: ()=>nn,
    hasAgentStoreMintFailureInChain: ()=>ve,
    hasWindowsIncompatibleFilenameChars: ()=>S,
    hashRelPath: ()=>Li,
    inspectPathSyncRequest: ()=>lo,
    isAgentStoreAbortError: ()=>Ye,
    isAgentStoreConnectCode: ()=>ge,
    isAgentStoreDirNotEmptyConnectError: ()=>ze,
    isAgentStoreDirectoryNotEmptyError: ()=>d,
    isAgentStoreId: ()=>Wt.Y6,
    isAgentStoreMintFailedError: ()=>we,
    isAgentStoreMintNegativeCacheable: ()=>be,
    isAgentStoreMintTerminalDenial: ()=>Se,
    isAgentStoreMintTransient: ()=>Ve,
    isAgentStoreRetryableHttpStatus: ()=>Qe,
    isAgentStoreShareMountKey: ()=>Wt.A8,
    isAgentStoreSourceDirectoryName: ()=>Wt.kM,
    isAgentStoreSourceId: ()=>Wt.v8,
    isAgentStoreSyncDisabledError: ()=>Ie,
    isAgentStoreTransientNetworkError: ()=>Xe,
    isAgentStoreUnauthorized: ()=>Ao,
    isAgentStoreUnauthorizedError: ()=>u,
    isAwsS3Hostname: ()=>Js,
    isCloudAgentStoreId: ()=>Wt.PZ,
    isConflictEventUnresolved: ()=>$t.O9,
    isConflictEventUnresolvedSync: ()=>$t.pc,
    isConflictFileUnresolved: ()=>$t.Y,
    isConflictFileUnresolvedSync: ()=>$t.Bw,
    isEqualOrParent: ()=>E,
    isHarnessInactive: ()=>un,
    isHarnessLatchedDown: ()=>cn,
    isLocalAgentStoreBackendUrl: ()=>Fs,
    isNonDefaultAgentStoreSyncClientConfig: ()=>Uu,
    isPathSyncRequestAcked: ()=>uo,
    isPathWithin: ()=>eu,
    isReservedRelPath: ()=>Wt.TM,
    isSharedAgentStoreMount: ()=>gs,
    isValidAgentStoreMountAlias: ()=>ms,
    isValidBareUuid: ()=>Wt.Ae,
    listLiveStorePins: ()=>jc,
    listPathSyncRequests: ()=>co,
    localhostPermissivePresignedUrlValidator: ()=>Ls,
    nextDownAttempts: ()=>Vr,
    nextHarnessProbeAtMs: ()=>$r,
    normalizeRelPath: ()=>v,
    normalizeS3Etag: ()=>st,
    notifyAgentStoreConversationTurn: ()=>as,
    notifySummaryMetrics: ()=>Gi,
    notifySummaryResult: ()=>Fi,
    openAgentStoreIndexForAudit: ()=>zn,
    openAgentStoreLocalIndex: ()=>Dn,
    parseAgentStoreBackendThrottled: ()=>Ge,
    parseAgentStoreQuotaExceeded: ()=>qe,
    parseAgentStoreSyncDisabledRetryAfter: ()=>je,
    parseConflictEvent: ()=>$t.Mi,
    parseConflictJournalLines: ()=>$t.kL,
    parsePendingConflictEmit: ()=>$t.EG,
    pathSyncRequestsDirForFilesDir: ()=>no,
    pendingConflictEmitKey: ()=>$t.Gm,
    planAgentStoreHarnessGateAction: ()=>an,
    planHarnessAction: ()=>Gr,
    probeAgentStoreObject: ()=>Vs,
    probeAgentStoreRootId: ()=>Ho,
    probeStoreBaseSource: ()=>Wt.QQ,
    readActiveStoreLockOwner: ()=>gr,
    readAgentStoreExclusiveMutationClaimOwner: ()=>Mr,
    readAgentStoreRootId: ()=>Ko,
    readConflictEvents: ()=>$t.Ob,
    readLiveEvictingMark: ()=>Gc,
    reconcileMountCollision: ()=>bs,
    redactPresignedUrlString: ()=>js,
    releaseStoreEvictionClaim: ()=>ql,
    remainingRememberedMountsAfterOldestFirstAbort: ()=>Zr,
    rememberHarnessMounts: ()=>Qr,
    rememberedMountReplay: ()=>tn,
    rememberedMountsOldestFirst: ()=>Xr,
    remintAlreadyDownPhase: ()=>ln,
    renderConflictNotice: ()=>zt.dN,
    renderEagerConflictNotice: ()=>zt.pq,
    resolveAgentStoreSyncClientConfig: ()=>Au,
    resolveSafeChildPath: ()=>x,
    resolveScopedConflictNoticeOutcome: ()=>$u,
    resolveStoreBase: ()=>Wt.v5,
    resolveStoreMountForPath: ()=>tu,
    rmdirLocalEmptyAncestors: ()=>P,
    rootIdleAgeMs: ()=>Vc,
    runOnConflictNoticeClaimChain: ()=>jt.Y$,
    safeAddBreadcrumb: ()=>es,
    safeNotifyListener: ()=>fo,
    safeWalk: ()=>I,
    sanitizeAgentStoreMetricTagValue: ()=>Yt,
    selectConflictEventsAfterCursor: ()=>$t.y5,
    setAgentStoreConversationTurnListener: ()=>is,
    setWindowsStoreAcl: ()=>Wt.xD,
    settleHarnessTriggerAfterJitter: ()=>on,
    shouldContinueHarnessStartAfterJitter: ()=>zr,
    shouldEmitPassiveTookOverLockEvent: ()=>Ku,
    shouldPromoteDueNoneToProbe: ()=>sn,
    shouldReconcileAfterParkedHarnessStart: ()=>Wr,
    shouldRunStoreEviction: ()=>Dl,
    snapshotRememberedHarnessMounts: ()=>en,
    startFailedHarnessPhase: ()=>Lr,
    sweepStaleAgentStoreRoots: ()=>_i,
    tryAcquireStoreLock: ()=>fr,
    validateRawSegmentName: ()=>_,
    waitForPathSyncRequestAck: ()=>mo,
    writeEvictingMarkExclusive: ()=>zc
});
class s {
    constructor(e){
        this.consecutiveFailures = 0;
        const t = n({
            value: e.baseDelayMs,
            name: "baseDelayMs",
            context: "BackoffScheduler"
        }), r = n({
            value: e.maxDelayMs,
            name: "maxDelayMs",
            context: "BackoffScheduler"
        });
        if (t > r) throw new RangeError(`BackoffScheduler baseDelayMs (${t}) must be <= maxDelayMs (${r})`);
        const s = e.multiplier ?? 2;
        if (!Number.isFinite(s) || s < 1) throw new RangeError(`BackoffScheduler multiplier must be >= 1, got ${s}`);
        const o = e.jitter ?? 0;
        if (!Number.isFinite(o) || o < 0 || o > 1) throw new RangeError(`BackoffScheduler jitter must be in [0, 1], got ${o}`);
        this.baseDelayMs = t, this.maxDelayMs = r, this.multiplier = s, this.jitter = o, this.random = e.random ?? Math.random;
    }
    recordSuccess() {
        this.consecutiveFailures = 0;
    }
    recordFailure() {
        return this.consecutiveFailures += 1, this.computeDelayMs(this.consecutiveFailures, !0);
    }
    peekNextDelayMs() {
        return this.computeDelayMs(this.consecutiveFailures + 1, !1);
    }
    lastDelayMs() {
        return this.computeDelayMs(this.consecutiveFailures, !1);
    }
    get failures() {
        return this.consecutiveFailures;
    }
    restoreFailures(e) {
        this.consecutiveFailures = e <= 0 ? 0 : Math.floor(e);
    }
    computeDelayMs(e, t) {
        if (e <= 0) return 0;
        const r = this.multiplier ** (e - 1), n = Math.min(this.baseDelayMs * r, this.maxDelayMs), s = t ? this.applyJitter(n) : n, o = Math.max(1, Math.floor(s));
        return Math.min(this.maxDelayMs, o);
    }
    applyJitter(e) {
        if (0 === this.jitter) return e;
        const t = this.random(), r = Number.isFinite(t) ? Math.max(0, Math.min(t, 1)) : 0;
        return e * (1 - this.jitter + 2 * r * this.jitter);
    }
}
var o = require("./module-85932.js");
class i extends Error {
    constructor(e = "Agent store token is unauthorized", t){
        super(e, t), this.name = "AgentStoreUnauthorizedError";
    }
}
class a extends Error {
    constructor(e = "Agent store directory is not empty"){
        super(e), this.name = "AgentStoreDirectoryNotEmptyError";
    }
}
class c extends Error {
    constructor(e){
        super(e), this.name = "AgentStoreDirectoryListingError";
    }
}
class l extends Error {
    constructor(e){
        super(e), this.name = "AgentStoreProtocolError";
    }
}
function u(e) {
    return e instanceof i;
}
function d(e) {
    return e instanceof a;
}
var p = require("./module-73024.js"), m = require.t(p, 2), h = require("./module-76760.js");
class f extends Error {
    constructor(e){
        super(e.message), this.name = "UnsafeAgentStorePathError", this.code = e.code, this.relPath = e.relPath, this.failedPath = e.failedPath;
    }
}
const g = 255, y = new Set([
    "con",
    "prn",
    "aux",
    "nul",
    "com1",
    "com2",
    "com3",
    "com4",
    "com5",
    "com6",
    "com7",
    "com8",
    "com9",
    "lpt1",
    "lpt2",
    "lpt3",
    "lpt4",
    "lpt5",
    "lpt6",
    "lpt7",
    "lpt8",
    "lpt9"
]), w = /[<>:"|?*]/;
function v(e) {
    if ("string" != typeof e || 0 === e.length) throw new f({
        code: "empty_path",
        message: "Agent store relative path must be a non-empty string",
        relPath: e
    });
    if (e.includes("\0")) throw new f({
        code: "invalid_segment",
        message: "Agent store relative path must not contain NUL bytes",
        relPath: e
    });
    if (h.posix.isAbsolute(e) || h.win32.isAbsolute(e)) throw new f({
        code: "invalid_segment",
        message: `Agent store relative path must not be absolute: ${e}`,
        relPath: e
    });
    const t = e.replaceAll("\\", "/").split("/"), r = [];
    for (const n of t)if (0 !== n.length && "." !== n) {
        if (".." === n) throw new f({
            code: "invalid_segment",
            message: `Agent store relative path must not contain '..': ${e}`,
            relPath: e
        });
        b({
            segment: n,
            relPath: e
        }), r.push(n);
    }
    if (0 === r.length) throw new f({
        code: "empty_path",
        message: `Agent store relative path resolved to empty: ${e}`,
        relPath: e
    });
    return r.join("/");
}
function _(e) {
    if ("string" != typeof e || 0 === e.length) throw new f({
        code: "empty_path",
        message: "Agent store segment name must be a non-empty string",
        relPath: e
    });
    if ("." === e || ".." === e) throw new f({
        code: "invalid_segment",
        message: `Agent store segment name must not be '.' or '..': ${e}`,
        relPath: e
    });
    if (e.includes("/")) throw new f({
        code: "invalid_segment",
        message: `Agent store segment name must not contain '/': ${e}`,
        relPath: e
    });
    if (e.includes("\\")) throw new f({
        code: "invalid_segment",
        message: `Agent store segment name must not contain '\\\\': ${e}`,
        relPath: e
    });
    return b({
        segment: e,
        relPath: e
    }), e;
}
function b({ segment: e, relPath: t }) {
    if (Buffer.byteLength(e, "utf8") > g) throw new f({
        code: "invalid_segment",
        message: `Agent store path segment exceeds ${g} bytes: ${e}`,
        relPath: t
    });
    for(let r = 0; r < e.length; r++){
        const n = e.charCodeAt(r);
        if (n < 32 || 127 === n) throw new f({
            code: "invalid_segment",
            message: `Agent store path segment contains control character (0x${n.toString(16)}): ${e}`,
            relPath: t
        });
    }
    const r = e.charAt(e.length - 1);
    if ("." === r || " " === r) throw new f({
        code: "invalid_segment",
        message: `Agent store path segment must not end with '.' or space (Windows trims these): ${e}`,
        relPath: t
    });
    const n = e.toLowerCase().split(".")[0];
    if (void 0 !== n && y.has(n)) throw new f({
        code: "reserved_name",
        message: `Agent store path segment uses a reserved device name: ${e}`,
        relPath: t
    });
}
function S(e) {
    for (const t of e.split("/"))if (t.length > 0 && w.test(t)) return !0;
    return !1;
}
function k({ relPath: e, platform: t = process.platform }) {
    if ("win32" === t && S(e)) throw new f({
        code: "windows_incompatible",
        message: `Agent store path is not materializable on Windows (illegal filename character < > : " | ? *): ${e}`,
        relPath: e
    });
}
function x({ base: e, relPath: t }) {
    if (!h.isAbsolute(e)) throw new f({
        code: "outside_base",
        message: `Agent store base must be absolute: ${e}`,
        relPath: t
    });
    const r = v(t), n = h.resolve(e), s = h.resolve(n, r);
    if (!E({
        parent: n,
        candidate: s
    })) throw new f({
        code: "outside_base",
        message: `Agent store relative path resolves outside the base: ${t}`,
        relPath: t,
        failedPath: s
    });
    return s;
}
function E({ parent: e, candidate: t }) {
    if (t === e) return !0;
    const r = e.endsWith(h.sep) ? e : e + h.sep;
    return t.startsWith(r);
}
function I(e, t = {}) {
    const r = t.fs ?? m;
    if (!h.isAbsolute(e)) throw new f({
        code: "outside_base",
        message: `safeWalk base must be absolute: ${e}`,
        failedPath: e
    });
    const n = h.resolve(e);
    F(n, r);
    const s = r.lstatSync(n);
    if (s.isSymbolicLink()) throw new f({
        code: "symlink_refused",
        message: `Refusing to walk symlinked agent store base: ${n}`,
        failedPath: n
    });
    if (!s.isDirectory()) throw new f({
        code: "not_regular_file",
        message: `safeWalk base is not a directory: ${n}`,
        failedPath: n
    });
    const o = {
        files: [],
        refusals: []
    };
    return D({
        fsModule: r,
        absDir: n,
        relDir: "",
        base: n,
        result: o,
        expectedDev: s.dev,
        expectedIno: s.ino
    }), o;
}
function T({ base: e, relPath: t, fs: r }) {
    const n = r ?? m, s = x({
        base: e,
        relPath: t
    }), o = h.resolve(e);
    F(o, n);
    const i = n.lstatSync(o);
    if (i.isSymbolicLink()) throw new f({
        code: "symlink_refused",
        message: `Refusing to stat under symlinked agent store base: ${o}`,
        failedPath: o
    });
    if (!i.isDirectory()) throw new f({
        code: "not_regular_file",
        message: `Agent store base is not a directory: ${o}`,
        failedPath: o
    });
    const a = v(t), c = a.split("/");
    let l = o, u = "";
    const d = [];
    for (const e of c.slice(0, -1)){
        let t;
        l = h.join(l, e), u = 0 === u.length ? e : `${u}/${e}`;
        try {
            t = n.lstatSync(l);
        } catch (e) {
            if (N(e) && "ENOENT" === e.code) return {
                kind: "absent"
            };
            throw e;
        }
        if (t.isSymbolicLink()) return {
            kind: "refused",
            refusal: {
                relPath: u,
                reason: "symlink_refused"
            }
        };
        if (!t.isDirectory()) return {
            kind: "refused",
            refusal: {
                relPath: u,
                reason: "not_regular_file"
            }
        };
        d.push({
            abs: l,
            rel: u,
            dev: t.dev,
            ino: t.ino
        });
    }
    for (const e of d){
        let t;
        try {
            t = n.lstatSync(e.abs);
        } catch (e) {
            if (N(e) && "ENOENT" === e.code) return {
                kind: "absent"
            };
            throw e;
        }
        if (t.isSymbolicLink() || !t.isDirectory() || t.dev !== e.dev || t.ino !== e.ino) return {
            kind: "refused",
            refusal: {
                relPath: e.rel,
                reason: t.isSymbolicLink() ? "symlink_refused" : "not_regular_file"
            }
        };
    }
    let p;
    try {
        p = n.lstatSync(s);
    } catch (e) {
        if (N(e) && "ENOENT" === e.code) return {
            kind: "absent"
        };
        throw e;
    }
    return p.isSymbolicLink() ? {
        kind: "refused",
        refusal: {
            relPath: a,
            reason: "symlink_refused"
        }
    } : p.isFile() ? {
        kind: "file",
        entry: {
            relPath: a,
            absPath: s,
            size: p.size,
            mtimeMs: p.mtimeMs,
            dev: p.dev,
            ino: p.ino
        }
    } : {
        kind: "refused",
        refusal: {
            relPath: a,
            reason: "not_regular_file"
        }
    };
}
function C({ base: e, relPath: t, fs: r }) {
    const n = r ?? m;
    x({
        base: e,
        relPath: t
    });
    const s = h.resolve(e);
    F(s, n);
    const o = n.lstatSync(s);
    if (o.isSymbolicLink()) throw new f({
        code: "symlink_refused",
        message: `Refusing to stat under symlinked agent store base: ${s}`,
        failedPath: s
    });
    if (!o.isDirectory()) throw new f({
        code: "not_regular_file",
        message: `Agent store base is not a directory: ${s}`,
        failedPath: s
    });
    const i = v(t), a = i.split("/"), c = a[a.length - 1];
    if (void 0 === c) return {
        kind: "refused",
        refusal: {
            relPath: i,
            reason: "not_regular_file"
        }
    };
    let l = s, u = "";
    const d = [];
    for (const e of a.slice(0, -1)){
        let t;
        l = h.join(l, e), u = 0 === u.length ? e : `${u}/${e}`;
        try {
            t = n.lstatSync(l);
        } catch (e) {
            if (N(e) && "ENOENT" === e.code) return {
                kind: "absent"
            };
            throw e;
        }
        if (t.isSymbolicLink()) return {
            kind: "refused",
            refusal: {
                relPath: u,
                reason: "symlink_refused"
            }
        };
        if (!t.isDirectory()) return {
            kind: "refused",
            refusal: {
                relPath: u,
                reason: "not_regular_file"
            }
        };
        d.push({
            abs: l,
            rel: u,
            dev: t.dev,
            ino: t.ino
        });
    }
    for (const e of d){
        let t;
        try {
            t = n.lstatSync(e.abs);
        } catch (e) {
            if (N(e) && "ENOENT" === e.code) return {
                kind: "absent"
            };
            throw e;
        }
        if (t.isSymbolicLink() || !t.isDirectory() || t.dev !== e.dev || t.ino !== e.ino) return {
            kind: "refused",
            refusal: {
                relPath: e.rel,
                reason: t.isSymbolicLink() ? "symlink_refused" : "not_regular_file"
            }
        };
    }
    const p = d[d.length - 1];
    if (void 0 !== p) {
        let e;
        try {
            e = n.lstatSync(p.abs);
        } catch (e) {
            if (N(e) && "ENOENT" === e.code) return {
                kind: "absent"
            };
            throw e;
        }
        if (e.isSymbolicLink() || !e.isDirectory() || e.dev !== p.dev || e.ino !== p.ino) return {
            kind: "refused",
            refusal: {
                relPath: p.rel,
                reason: e.isSymbolicLink() ? "symlink_refused" : "not_regular_file"
            }
        };
    }
    const g = h.join(l, c);
    if (!E({
        parent: s,
        candidate: g
    })) return {
        kind: "refused",
        refusal: {
            relPath: i,
            reason: "not_regular_file"
        }
    };
    let y;
    try {
        y = n.lstatSync(g);
    } catch (e) {
        if (N(e) && "ENOENT" === e.code) return {
            kind: "absent"
        };
        throw e;
    }
    return y.isSymbolicLink() ? {
        kind: "refused",
        refusal: {
            relPath: i,
            reason: "symlink_refused"
        }
    } : y.isDirectory() ? {
        kind: "directory",
        absPath: g
    } : {
        kind: "refused",
        refusal: {
            relPath: i,
            reason: "not_regular_file"
        }
    };
}
function P(e) {
    let t = e.dirRelPath, r = 0;
    for(; void 0 !== t && "" !== t;){
        let n;
        try {
            n = C({
                base: e.base,
                relPath: t
            });
        } catch  {
            return {
                removedCount: r
            };
        }
        if ("refused" === n.kind) return {
            removedCount: r
        };
        try {
            if ("absent" === n.kind) t === e.dirRelPath && (r += 1);
            else {
                if (!A({
                    base: e.base,
                    relPath: t,
                    recursive: t === e.dirRelPath
                })) return {
                    removedCount: r
                };
                r += 1;
            }
        } catch (e) {
            if (!N(e)) return {
                removedCount: r
            };
            if ("ENOTEMPTY" === e.code) return {
                removedCount: r
            };
            if ("ENOENT" !== e.code) return {
                removedCount: r
            };
        }
        if ("" === t) return {
            removedCount: r
        };
        const s = t.lastIndexOf("/");
        t = s < 0 ? "" : t.slice(0, s);
    }
    return {
        removedCount: r
    };
}
function A(e) {
    const t = h.resolve(e.base), r = v(e.relPath);
    x({
        base: e.base,
        relPath: r
    });
    const n = !1 !== e.recursive, s = r.split("/").filter((e)=>e.length > 0);
    return 0 !== s.length && ("linux" === process.platform ? function(e) {
        const t = R();
        let r;
        try {
            r = p.openSync(e.resolvedBase, t);
        } catch  {
            return !1;
        }
        const n = [
            r
        ];
        try {
            for (const r of e.segments.slice(0, -1)){
                const e = n[n.length - 1];
                if (void 0 === e) return !1;
                let s;
                try {
                    s = p.openSync(J(e, r), t);
                } catch  {
                    return !1;
                }
                n.push(s);
            }
            const r = n[n.length - 1], s = e.segments[e.segments.length - 1];
            return void 0 !== r && void 0 !== s && O({
                parentFd: r,
                name: s,
                recursive: e.recursive
            });
        } finally{
            for (const e of n.reverse())try {
                p.closeSync(e);
            } catch  {}
        }
    }({
        resolvedBase: t,
        segments: s,
        recursive: n
    }) : B({
        resolvedBase: t,
        relPath: r,
        recursive: n
    }));
}
function R() {
    const e = p.constants;
    let t = e.O_RDONLY ?? 0;
    return "number" == typeof e.O_DIRECTORY && (t |= e.O_DIRECTORY), "number" == typeof e.O_NOFOLLOW && (t |= e.O_NOFOLLOW), "number" == typeof e.O_CLOEXEC && (t |= e.O_CLOEXEC), t;
}
function M(e) {
    return `/proc/self/fd/${e}`;
}
function J(e, t) {
    return `${M(e)}/${t}`;
}
function O(e) {
    const t = R();
    let r;
    try {
        r = p.openSync(J(e.parentFd, e.name), t);
    } catch (e) {
        return N(e) && "ENOENT" === e.code;
    }
    try {
        if (e.recursive) {
            let e;
            try {
                e = p.readdirSync(M(r), {
                    withFileTypes: !0
                });
            } catch  {
                return !1;
            }
            for (const t of e){
                if (t.isSymbolicLink() || !t.isDirectory()) return !1;
                if (!O({
                    parentFd: r,
                    name: t.name,
                    recursive: !0
                })) return !1;
            }
        }
    } finally{
        try {
            p.closeSync(r);
        } catch  {}
    }
    try {
        return p.rmdirSync(J(e.parentFd, e.name)), !0;
    } catch (e) {
        return N(e) && "ENOENT" === e.code;
    }
}
function B(e) {
    const t = C({
        base: e.resolvedBase,
        relPath: e.relPath
    });
    if ("absent" === t.kind) return !0;
    if ("directory" !== t.kind) return !1;
    if (e.recursive) {
        let r;
        try {
            r = p.readdirSync(t.absPath, {
                withFileTypes: !0
            });
        } catch  {
            return !1;
        }
        const n = C({
            base: e.resolvedBase,
            relPath: e.relPath
        });
        if ("directory" !== n.kind || n.absPath !== t.absPath) return !1;
        for (const t of r){
            if (t.isSymbolicLink() || !t.isDirectory()) return !1;
            const r = "" === e.relPath ? t.name : `${e.relPath}/${t.name}`;
            if (!B({
                resolvedBase: e.resolvedBase,
                relPath: r,
                recursive: !0
            })) return !1;
        }
    }
    const r = e.relPath.lastIndexOf("/"), n = -1 === r ? "" : e.relPath.slice(0, r), s = -1 === r ? e.relPath : e.relPath.slice(r + 1);
    let o = e.resolvedBase;
    if (n.length > 0) {
        const t = C({
            base: e.resolvedBase,
            relPath: n
        });
        if ("directory" !== t.kind) return !1;
        o = t.absPath;
    } else try {
        const t = p.lstatSync(e.resolvedBase);
        if (t.isSymbolicLink() || !t.isDirectory()) return !1;
    } catch  {
        return !1;
    }
    try {
        return p.rmdirSync(h.join(o, s)), !0;
    } catch (e) {
        return N(e) && "ENOENT" === e.code;
    }
}
function D({ fsModule: e, absDir: t, relDir: r, base: n, result: s, expectedDev: o, expectedIno: i }) {
    let a, c;
    try {
        a = e.readdirSync(t, {
            withFileTypes: !0
        });
    } catch (e) {
        if (N(e) && "ENOENT" === e.code) return void s.refusals.push({
            relPath: 0 === r.length ? "." : r,
            reason: "not_regular_file"
        });
        throw e;
    }
    try {
        c = e.lstatSync(t);
    } catch (e) {
        if (N(e) && "ENOENT" === e.code) return void s.refusals.push({
            relPath: 0 === r.length ? "." : r,
            reason: "not_regular_file"
        });
        throw e;
    }
    if (!c.isSymbolicLink() && c.isDirectory() && c.dev === o && c.ino === i) for (const o of a){
        if ("." === o.name || ".." === o.name) continue;
        let i;
        try {
            i = _(o.name);
        } catch  {
            s.refusals.push({
                relPath: q({
                    dir: r,
                    segment: o.name
                }),
                reason: "not_regular_file"
            });
            continue;
        }
        const a = q({
            dir: r,
            segment: i
        }), c = h.join(t, i);
        if (!E({
            parent: n,
            candidate: c
        })) {
            s.refusals.push({
                relPath: a,
                reason: "not_regular_file"
            });
            continue;
        }
        let l;
        try {
            l = e.lstatSync(c);
        } catch (e) {
            if (N(e) && "ENOENT" === e.code) continue;
            throw e;
        }
        l.isSymbolicLink() ? s.refusals.push({
            relPath: a,
            reason: "symlink_refused"
        }) : l.isDirectory() ? D({
            fsModule: e,
            absDir: c,
            relDir: a,
            base: n,
            result: s,
            expectedDev: l.dev,
            expectedIno: l.ino
        }) : l.isFile() ? s.files.push({
            relPath: a,
            absPath: c,
            size: l.size,
            mtimeMs: l.mtimeMs,
            dev: l.dev,
            ino: l.ino
        }) : s.refusals.push({
            relPath: a,
            reason: "not_regular_file"
        });
    }
    else s.refusals.push({
        relPath: 0 === r.length ? "." : r,
        reason: c.isSymbolicLink() ? "symlink_refused" : "not_regular_file"
    });
}
function q({ dir: e, segment: t }) {
    return 0 === e.length ? t : `${e}/${t}`;
}
function N(e) {
    return e instanceof Error && "string" == typeof e.code;
}
function F(e, t) {
    const r = h.parse(e), n = e.slice(r.root.length).split(h.sep).filter((e)=>e.length > 0);
    let s = r.root;
    for (const e of n){
        let r;
        s = h.join(s, e);
        try {
            r = t.lstatSync(s);
        } catch (e) {
            if (N(e) && "ENOENT" === e.code) return;
            throw e;
        }
        if (r.isSymbolicLink()) throw new f({
            code: "symlink_refused",
            message: `Refusing to walk agent store path whose ancestor is a symlink: ${s}`,
            failedPath: s
        });
    }
}
function U({ relPath: e, listedDir: t, removed: r }) {
    for (const n of r)if (e !== n && e.startsWith(`${n}/`)) return t !== n && !t.startsWith(`${n}/`);
    return !1;
}
function L({ files: e, relPath: t, tombstones: r, listingComplete: n, removedSubdirs: s, tombstoneWatermarkMs: o, tombstoneFloorMs: i, version: a, notModified: c }) {
    if (!0 === c) throw new Error("adaptFlatAgentStoreList: a notModified answer is not a listing");
    const l = function(e) {
        if ("" === e) return "";
        return v(e);
    }(t), u = function(e) {
        if (0 === e.length) return "";
        return `${e.replace(/\/$/, "")}/`;
    }(l), d = new Set, p = [];
    let m = 0;
    const h = new Set;
    for (const e of s ?? [])try {
        h.add(v(e));
    } catch  {
        m += 1;
    }
    for (const t of e){
        let e;
        try {
            e = v(t.relPath);
        } catch  {
            m += 1;
            continue;
        }
        $({
            prefix: u,
            relObjectPath: e,
            subdirs: d
        }), e.startsWith(u) && (U({
            relPath: e,
            listedDir: l,
            removed: h
        }) || p.push({
            ...t,
            relPath: e
        }));
    }
    for (const e of h)d.delete(e);
    return {
        files: p.sort((e, t)=>e.relPath.localeCompare(t.relPath)),
        subdirs: [
            ...d
        ].sort(),
        ...void 0 !== r ? {
            tombstones: r
        } : {},
        ...void 0 !== n ? {
            listingComplete: n
        } : {},
        ...h.size > 0 ? {
            removedSubdirs: [
                ...h
            ].sort()
        } : {},
        ...void 0 !== o ? {
            tombstoneWatermarkMs: o
        } : {},
        ...void 0 !== i ? {
            tombstoneFloorMs: i
        } : {},
        ...void 0 !== a && "" !== a ? {
            version: a
        } : {},
        skippedUnsafeEntries: m
    };
}
function $({ prefix: e, relObjectPath: t, subdirs: r }) {
    if (!t.startsWith(e)) return;
    const n = t.slice(e.length), s = n.indexOf("/");
    s > 0 && r.add(`${e}${n.slice(0, s)}`);
}
var j = require("./module-36038.js");
const G = {
    typeName: "aiserver.v1.AgentStoreService",
    methods: {
        listAgentStores: {
            name: "ListAgentStores",
            I: o.vz,
            O: o.xL,
            kind: j.MethodKind.Unary
        },
        listAgentStoreEntries: {
            name: "ListAgentStoreEntries",
            I: o.uH,
            O: o.i1,
            kind: j.MethodKind.Unary
        },
        readAgentStoreFile: {
            name: "ReadAgentStoreFile",
            I: o.uj,
            O: o.Em,
            kind: j.MethodKind.Unary
        },
        writeAgentStoreDocument: {
            name: "WriteAgentStoreDocument",
            I: o.Hr,
            O: o._I,
            kind: j.MethodKind.Unary
        },
        setAgentStoreDocumentVisibility: {
            name: "SetAgentStoreDocumentVisibility",
            I: o.V8,
            O: o.ph,
            kind: j.MethodKind.Unary
        },
        mintAgentStoreToken: {
            name: "MintAgentStoreToken",
            I: o.dy,
            O: o.Nj,
            kind: j.MethodKind.Unary
        },
        listAgentStoreFiles: {
            name: "ListAgentStoreFiles",
            I: o.JN,
            O: o.NS,
            kind: j.MethodKind.Unary
        },
        listAgentStoreDirectory: {
            name: "ListAgentStoreDirectory",
            I: o.zc,
            O: o.p0,
            kind: j.MethodKind.Unary
        },
        checkAgentStoreVersions: {
            name: "CheckAgentStoreVersions",
            I: o.rX,
            O: o.X8,
            kind: j.MethodKind.Unary
        },
        presignAgentStoreReads: {
            name: "PresignAgentStoreReads",
            I: o.xN,
            O: o.tK,
            kind: j.MethodKind.Unary
        },
        presignAgentStoreWrites: {
            name: "PresignAgentStoreWrites",
            I: o.WJ,
            O: o.GL,
            kind: j.MethodKind.Unary
        },
        completeAgentStoreMultipartWrites: {
            name: "CompleteAgentStoreMultipartWrites",
            I: o.bB,
            O: o.t3,
            kind: j.MethodKind.Unary
        },
        abortAgentStoreMultipartWrites: {
            name: "AbortAgentStoreMultipartWrites",
            I: o.mr,
            O: o.U4,
            kind: j.MethodKind.Unary
        },
        acquireAgentStoreFileLock: {
            name: "AcquireAgentStoreFileLock",
            I: o.rd,
            O: o.N5,
            kind: j.MethodKind.Unary
        },
        renewAgentStoreFileLock: {
            name: "RenewAgentStoreFileLock",
            I: o.a1,
            O: o.aZ,
            kind: j.MethodKind.Unary
        },
        releaseAgentStoreFileLock: {
            name: "ReleaseAgentStoreFileLock",
            I: o.sc,
            O: o.qZ,
            kind: j.MethodKind.Unary
        },
        getAgentStoreFileLock: {
            name: "GetAgentStoreFileLock",
            I: o.bH,
            O: o.Hm,
            kind: j.MethodKind.Unary
        },
        deleteAgentStoreFiles: {
            name: "DeleteAgentStoreFiles",
            I: o.uM,
            O: o.OM,
            kind: j.MethodKind.Unary
        },
        rmdirAgentStore: {
            name: "RmdirAgentStore",
            I: o.q5,
            O: o.q$,
            kind: j.MethodKind.Unary
        },
        undeleteAgentStoreFiles: {
            name: "UndeleteAgentStoreFiles",
            I: o.FF,
            O: o.xQ,
            kind: j.MethodKind.Unary
        },
        listAgentStoreTombstones: {
            name: "ListAgentStoreTombstones",
            I: o.I1,
            O: o.aU,
            kind: j.MethodKind.Unary
        },
        shareAgentStore: {
            name: "ShareAgentStore",
            I: o.FT,
            O: o.fp,
            kind: j.MethodKind.Unary
        },
        unshareAgentStore: {
            name: "UnshareAgentStore",
            I: o.Og,
            O: o.Qv,
            kind: j.MethodKind.Unary
        },
        listSharedAgentStores: {
            name: "ListSharedAgentStores",
            I: o.WQ,
            O: o.op,
            kind: j.MethodKind.Unary
        }
    }
};
var z = require("./module-62337.js"), W = require("./module-67918.js"), H = require("./module-8592.js");
const K = "agent.v1.";
class V extends H.HL {
    static get runtime() {
        return (0, H.kU)(this, "runtime", j.proto3);
    }
    static $p() {
        return K;
    }
}
j.proto3, j.proto3, j.proto3, j.proto3, j.proto3, j.proto3, j.proto3, j.proto3, j.proto3, j.proto3;
var Y = (0, H.QT)(j.proto3, K, "ResourceScope", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "POD_VM"
    ],
    [
        2,
        "CONTAINER"
    ],
    [
        3,
        "HOST"
    ]
], 1), Q = (0, H.QT)(j.proto3, K, "ResourcePressure", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "HIGH"
    ]
], 1);
class X extends V {
    constructor(e){
        super(), this.scope = Y.UNSPECIFIED, this.memoryLimitBytes = j.protoInt64.zero, this.cpuLimitMcores = 0, this.diskLimitBytes = j.protoInt64.zero, this.workspacePath = "", j.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new X).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new X).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new X).fromJsonString(e, t);
    }
    static equals(e, t) {
        return j.proto3.util.equals(X, e, t);
    }
    static $() {
        return [
            "ResourceLimits|1 scope #0|2 memory_limit_bytes 4|3 cpu_limit_mcores 13|4 disk_limit_bytes 4|5 workspace_path 9|6 display_label 9?",
            Y
        ];
    }
}
class Z extends V {
    constructor(e){
        super(), this.sampledAtMs = j.protoInt64.zero, this.memoryUsedBytes = j.protoInt64.zero, this.memoryAvailableBytes = j.protoInt64.zero, this.cpuUsedMcores = 0, this.diskUsedBytes = j.protoInt64.zero, this.pressure = Q.UNSPECIFIED, j.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Z).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Z).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Z).fromJsonString(e, t);
    }
    static equals(e, t) {
        return j.proto3.util.equals(Z, e, t);
    }
    static $() {
        return [
            "ResourceSample|1 sampled_at_ms 3|2 memory_used_bytes 4|3 memory_available_bytes 4|4 cpu_used_mcores 13|5 disk_used_bytes 4|6 pressure #0",
            Q
        ];
    }
}
class ee extends V {
    constructor(e){
        super(), this.history = [], this.nextCursor = "", j.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ee).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ee).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ee).fromJsonString(e, t);
    }
    static equals(e, t) {
        return j.proto3.util.equals(ee, e, t);
    }
    static $() {
        return [
            "GetResourceUsageResponse|1 limits #0|2 current #1|3 history #1*|4 next_cursor 9",
            X,
            Z
        ];
    }
}
var te = require("./module-28242.js");
const re = {
    typeName: "aiserver.v1.BackgroundComposerService",
    methods: {
        listBackgroundComposers: {
            name: "ListBackgroundComposers",
            I: z.D3X,
            O: z.Lgg,
            kind: j.MethodKind.Unary
        },
        listPrBackgroundComposers: {
            name: "ListPrBackgroundComposers",
            I: z.Xmo,
            O: z.TXq,
            kind: j.MethodKind.Unary
        },
        pinBackgroundComposers: {
            name: "PinBackgroundComposers",
            I: z.CqU,
            O: z.wR3,
            kind: j.MethodKind.Unary
        },
        unpinBackgroundComposers: {
            name: "UnpinBackgroundComposers",
            I: z.rzE,
            O: z.FVE,
            kind: j.MethodKind.Unary
        },
        attachBackgroundComposer: {
            name: "AttachBackgroundComposer",
            I: z.R3$,
            O: z.RkD,
            kind: j.MethodKind.ServerStreaming
        },
        streamConversation: {
            name: "StreamConversation",
            I: z.D23,
            O: z.HNK,
            kind: j.MethodKind.ServerStreaming
        },
        getLatestAgentConversationState: {
            name: "GetLatestAgentConversationState",
            I: z.Ww7,
            O: z.OCy,
            kind: j.MethodKind.Unary
        },
        getBlobForAgentKV: {
            name: "GetBlobForAgentKV",
            I: z.Wt4,
            O: z.KVC,
            kind: j.MethodKind.Unary
        },
        getConversationPage: {
            name: "GetConversationPage",
            I: z.gTv,
            O: z.IDA,
            kind: j.MethodKind.Unary
        },
        attachBackgroundComposerLogs: {
            name: "AttachBackgroundComposerLogs",
            I: z.ok9,
            O: z.uZB,
            kind: j.MethodKind.ServerStreaming
        },
        attachAgentStartupTrace: {
            name: "AttachAgentStartupTrace",
            I: z.UlU,
            O: z.sR0,
            kind: j.MethodKind.ServerStreaming
        },
        startBackgroundComposerFromSnapshot: {
            name: "StartBackgroundComposerFromSnapshot",
            I: z.IU4,
            O: z.Uc$,
            kind: j.MethodKind.Unary
        },
        startCloudOnboarding: {
            name: "StartCloudOnboarding",
            I: z.OzJ,
            O: z.Uc$,
            kind: j.MethodKind.Unary
        },
        startChangeMonitorOnboarding: {
            name: "StartChangeMonitorOnboarding",
            I: z.txy,
            O: z.Uc$,
            kind: j.MethodKind.Unary
        },
        startCloudOnboardingHeuristicEnvSetup: {
            name: "StartCloudOnboardingHeuristicEnvSetup",
            I: z.yEn,
            O: z.ScJ,
            kind: j.MethodKind.Unary
        },
        forkBackgroundComposer: {
            name: "ForkBackgroundComposer",
            I: z.sDv,
            O: z.EHS,
            kind: j.MethodKind.Unary
        },
        startSideChatBackgroundComposer: {
            name: "StartSideChatBackgroundComposer",
            I: z.$50,
            O: z.x1k,
            kind: j.MethodKind.Unary
        },
        listBackgroundComposerChildren: {
            name: "ListBackgroundComposerChildren",
            I: z.r$A,
            O: z.Nn7,
            kind: j.MethodKind.Unary
        },
        makePRBackgroundComposer: {
            name: "MakePRBackgroundComposer",
            I: z.w17,
            O: z.eAP,
            kind: j.MethodKind.Unary
        },
        openPRBackgroundComposer: {
            name: "OpenPRBackgroundComposer",
            I: z.WZ5,
            O: z._3r,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerStatus: {
            name: "GetBackgroundComposerStatus",
            I: z.SUj,
            O: z.M9t,
            kind: j.MethodKind.Unary
        },
        addAsyncFollowupBackgroundComposer: {
            name: "AddAsyncFollowupBackgroundComposer",
            I: z.FFs,
            O: z.FE5,
            kind: j.MethodKind.Unary
        },
        injectBackgroundComposerContext: {
            name: "InjectBackgroundComposerContext",
            I: z.oSm,
            O: z.Sv6,
            kind: j.MethodKind.Unary
        },
        submitInteractionResponseBackgroundComposer: {
            name: "SubmitInteractionResponseBackgroundComposer",
            I: z.jeP,
            O: z.$5K,
            kind: j.MethodKind.Unary
        },
        listPendingFollowups: {
            name: "ListPendingFollowups",
            I: z.oQP,
            O: z.c_Y,
            kind: j.MethodKind.Unary
        },
        updatePendingFollowup: {
            name: "UpdatePendingFollowup",
            I: z.Sgj,
            O: z.k$2,
            kind: j.MethodKind.Unary
        },
        deletePendingFollowup: {
            name: "DeletePendingFollowup",
            I: z.AIj,
            O: z.o6Z,
            kind: j.MethodKind.Unary
        },
        reorderPendingFollowup: {
            name: "ReorderPendingFollowup",
            I: z.wP9,
            O: z.E$E,
            kind: j.MethodKind.Unary
        },
        submitPendingFollowupNow: {
            name: "SubmitPendingFollowupNow",
            I: z.$te,
            O: z.pxd,
            kind: j.MethodKind.Unary
        },
        markFollowupEditing: {
            name: "MarkFollowupEditing",
            I: z.XLg,
            O: z.NxT,
            kind: j.MethodKind.Unary
        },
        getCursorServerUrl: {
            name: "GetCursorServerUrl",
            I: z.OUA,
            O: z.Q9S,
            kind: j.MethodKind.Unary
        },
        warmCursorServerDownload: {
            name: "WarmCursorServerDownload",
            I: z.SX,
            O: z.I63,
            kind: j.MethodKind.Unary
        },
        preWarmPod: {
            name: "PreWarmPod",
            I: z.FLZ,
            O: z.x8R,
            kind: j.MethodKind.Unary
        },
        wakeBackgroundComposer: {
            name: "WakeBackgroundComposer",
            I: z.oXL,
            O: z.wF7,
            kind: j.MethodKind.Unary
        },
        pauseBackgroundComposer: {
            name: "PauseBackgroundComposer",
            I: z.O6D,
            O: z.aWc,
            kind: j.MethodKind.Unary
        },
        cancelBackgroundComposerToolCall: {
            name: "CancelBackgroundComposerToolCall",
            I: z._in,
            O: z.WOU,
            kind: j.MethodKind.Unary
        },
        resumeBackgroundComposer: {
            name: "ResumeBackgroundComposer",
            I: z.Htf,
            O: z.NbP,
            kind: j.MethodKind.Unary
        },
        archiveBackgroundComposer: {
            name: "ArchiveBackgroundComposer",
            I: z.wj9,
            O: z.CYG,
            kind: j.MethodKind.Unary
        },
        archiveRepoBackgroundComposers: {
            name: "ArchiveRepoBackgroundComposers",
            I: z.BCP,
            O: z.Vf5,
            kind: j.MethodKind.Unary
        },
        deleteBackgroundComposer: {
            name: "DeleteBackgroundComposer",
            I: z.jNw,
            O: z.vCd,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerInfo: {
            name: "GetBackgroundComposerInfo",
            I: z.Y_J,
            O: z.C1Z,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerEnvironmentVersion: {
            name: "GetBackgroundComposerEnvironmentVersion",
            I: z.RH3,
            O: z.j7u,
            kind: j.MethodKind.Unary
        },
        getEnvironmentHistory: {
            name: "GetEnvironmentHistory",
            I: z.rhe,
            O: z.RVb,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerTimings: {
            name: "GetBackgroundComposerTimings",
            I: z.LNj,
            O: z.plY,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerRepositoryInfo: {
            name: "GetBackgroundComposerRepositoryInfo",
            I: z.M4E,
            O: z.s83,
            kind: j.MethodKind.Unary
        },
        getMachine: {
            name: "GetMachine",
            I: z.BIY,
            O: z.zWh,
            kind: j.MethodKind.Unary
        },
        listWorkspaceFiles: {
            name: "ListWorkspaceFiles",
            I: z.Y2v,
            O: z.Cnl,
            kind: j.MethodKind.Unary
        },
        desktopLease: {
            name: "DesktopLease",
            I: z.IYi,
            O: z.oUQ,
            kind: j.MethodKind.Unary
        },
        getMachineResourceUsage: {
            name: "GetMachineResourceUsage",
            I: z.yu1,
            O: ee,
            kind: j.MethodKind.Unary
        },
        listDetailedBackgroundComposers: {
            name: "ListDetailedBackgroundComposers",
            I: z.tUz,
            O: z.VF_,
            kind: j.MethodKind.Unary
        },
        listCloudAgentRunsForDashboard: {
            name: "ListCloudAgentRunsForDashboard",
            I: z.Buh,
            O: z.DiD,
            kind: j.MethodKind.Unary
        },
        aggregateCloudAgentRunsForDashboard: {
            name: "AggregateCloudAgentRunsForDashboard",
            I: z.O7b,
            O: z._RQ,
            kind: j.MethodKind.Unary
        },
        getCloudAgentRunForDashboard: {
            name: "GetCloudAgentRunForDashboard",
            I: z.oNB,
            O: z.i_b,
            kind: j.MethodKind.Unary
        },
        listCloudAgentRunEventsForDashboard: {
            name: "ListCloudAgentRunEventsForDashboard",
            I: z.h_J,
            O: z.VHt,
            kind: j.MethodKind.Unary
        },
        listNamedAgents: {
            name: "ListNamedAgents",
            I: z.F8D,
            O: z.fUo,
            kind: j.MethodKind.Unary
        },
        listNamedAgentSessions: {
            name: "ListNamedAgentSessions",
            I: z.Vpr,
            O: z.rR8,
            kind: j.MethodKind.Unary
        },
        listEventSubscriptions: {
            name: "ListEventSubscriptions",
            I: z.YXu,
            O: z.oLL,
            kind: j.MethodKind.Unary
        },
        closeEventSubscription: {
            name: "CloseEventSubscription",
            I: z.jhQ,
            O: z.Hk1,
            kind: j.MethodKind.Unary
        },
        getGithubAccessTokenForRepos: {
            name: "GetGithubAccessTokenForRepos",
            I: z.IlY,
            O: z.ERi,
            kind: j.MethodKind.Unary
        },
        makeGithubRequest: {
            name: "MakeGithubRequest",
            I: z.cgv,
            O: z.W3_,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerDiffDetails: {
            name: "GetBackgroundComposerDiffDetails",
            I: z.n93,
            O: z.Vzb,
            kind: j.MethodKind.Unary
        },
        getOptimizedDiffDetails: {
            name: "GetOptimizedDiffDetails",
            I: z.WMw,
            O: z.WGk,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerChangesHash: {
            name: "GetBackgroundComposerChangesHash",
            I: z.fob,
            O: z.Fw9,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerPullRequest: {
            name: "GetBackgroundComposerPullRequest",
            I: z.mSm,
            O: z.ayY,
            kind: j.MethodKind.Unary
        },
        refreshGithubAccessTokenInBackgroundComposer: {
            name: "RefreshGithubAccessTokenInBackgroundComposer",
            I: z.iqf,
            O: z.a6F,
            kind: j.MethodKind.Unary
        },
        createBackgroundComposerPod: {
            name: "CreateBackgroundComposerPod",
            I: z.vSW,
            O: z.BE6,
            kind: j.MethodKind.Unary
        },
        attachBackgroundComposerPod: {
            name: "AttachBackgroundComposerPod",
            I: z.QkZ,
            O: z.QWd,
            kind: j.MethodKind.ServerStreaming
        },
        createBackgroundComposerPodSnapshot: {
            name: "CreateBackgroundComposerPodSnapshot",
            I: z.JHC,
            O: z.bJ8,
            kind: j.MethodKind.Unary
        },
        changeBackgroundComposerSnapshotVisibility: {
            name: "ChangeBackgroundComposerSnapshotVisibility",
            I: z.W0U,
            O: z.Ql7,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerSnapshotInfo: {
            name: "GetBackgroundComposerSnapshotInfo",
            I: z.iHR,
            O: z.K1R,
            kind: j.MethodKind.Unary
        },
        listBackgroundComposerSnapshotsByBcId: {
            name: "ListBackgroundComposerSnapshotsByBcId",
            I: z.mOw,
            O: z.Af5,
            kind: j.MethodKind.Unary
        },
        listBackgroundComposerSnapshotStatusesByBcIds: {
            name: "ListBackgroundComposerSnapshotStatusesByBcIds",
            I: z.G4v,
            O: z.e4W,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerSnapshotState: {
            name: "GetBackgroundComposerSnapshotState",
            I: z.RT7,
            O: z.zxZ,
            kind: j.MethodKind.Unary
        },
        watchBackgroundComposerSnapshotState: {
            name: "WatchBackgroundComposerSnapshotState",
            I: z.yu$,
            O: z.Mfv,
            kind: j.MethodKind.ServerStreaming
        },
        getBackgroundComposerConversation: {
            name: "GetBackgroundComposerConversation",
            I: z.JTH,
            O: z.rVE,
            kind: j.MethodKind.Unary
        },
        renameBackgroundComposer: {
            name: "RenameBackgroundComposer",
            I: z.M_M,
            O: z.SNB,
            kind: j.MethodKind.Unary
        },
        saveCloudAgentVoiceCall: {
            name: "SaveCloudAgentVoiceCall",
            I: z.DFD,
            O: z.FhA,
            kind: j.MethodKind.Unary
        },
        updateProjectAppearance: {
            name: "UpdateProjectAppearance",
            I: z.ULg,
            O: z.CY3,
            kind: j.MethodKind.Unary
        },
        seedStagedProjects: {
            name: "SeedStagedProjects",
            I: z.FAs,
            O: z.$OW,
            kind: j.MethodKind.Unary
        },
        listStagedProjects: {
            name: "ListStagedProjects",
            I: z.Iw0,
            O: z.C19,
            kind: j.MethodKind.Unary
        },
        dismissStagedProject: {
            name: "DismissStagedProject",
            I: z.VPh,
            O: z.VCP,
            kind: j.MethodKind.Unary
        },
        previewStagedProjects: {
            name: "PreviewStagedProjects",
            I: z.KoR,
            O: z._01,
            kind: j.MethodKind.Unary
        },
        deleteStagedProjects: {
            name: "DeleteStagedProjects",
            I: z.lJm,
            O: z.$Fb,
            kind: j.MethodKind.Unary
        },
        publishBackgroundComposerTempRepo: {
            name: "PublishBackgroundComposerTempRepo",
            I: z.vvP,
            O: z.xPH,
            kind: j.MethodKind.Unary
        },
        reparentBackgroundComposer: {
            name: "ReparentBackgroundComposer",
            I: z.jif,
            O: z.hAr,
            kind: j.MethodKind.Unary
        },
        setWorkerManager: {
            name: "SetWorkerManager",
            I: z.By2,
            O: z.$aD,
            kind: j.MethodKind.Unary
        },
        createProjectWorker: {
            name: "CreateProjectWorker",
            I: z.x_A,
            O: z.RFI,
            kind: j.MethodKind.Unary
        },
        clearWorkerManager: {
            name: "ClearWorkerManager",
            I: z.QhE,
            O: z.Y1$,
            kind: j.MethodKind.Unary
        },
        listWorkersForManager: {
            name: "ListWorkersForManager",
            I: z.R1T,
            O: z.Ph9,
            kind: j.MethodKind.Unary
        },
        listProjectSubtrees: {
            name: "ListProjectSubtrees",
            I: z.goT,
            O: z.m3n,
            kind: j.MethodKind.Unary
        },
        streamBackgroundComposerUpdates: {
            name: "StreamBackgroundComposerUpdates",
            I: z.mGK,
            O: z.wJN,
            kind: j.MethodKind.ServerStreaming
        },
        updateBackgroundComposerExperimentalModelOptOut: {
            name: "UpdateBackgroundComposerExperimentalModelOptOut",
            I: z.vE8,
            O: z.jpr,
            kind: j.MethodKind.Unary
        },
        commitBackgroundComposer: {
            name: "CommitBackgroundComposer",
            I: z.HAL,
            O: z.xKX,
            kind: j.MethodKind.Unary
        },
        setPersonalEnvironmentJson: {
            name: "SetPersonalEnvironmentJson",
            I: z.dzi,
            O: z.jFM,
            kind: j.MethodKind.Unary
        },
        getPersonalEnvironmentJson: {
            name: "GetPersonalEnvironmentJson",
            I: z.Hsh,
            O: z.tIW,
            kind: j.MethodKind.Unary
        },
        getEnvironmentJsonCandidates: {
            name: "GetEnvironmentJsonCandidates",
            I: z.xY2,
            O: z.llv,
            kind: j.MethodKind.Unary
        },
        listPersonalEnvironments: {
            name: "ListPersonalEnvironments",
            I: z.eol,
            O: z.g53,
            kind: j.MethodKind.Unary
        },
        deletePersonalEnvironmentJson: {
            name: "DeletePersonalEnvironmentJson",
            I: z._lu,
            O: z.Cvk,
            kind: j.MethodKind.Unary
        },
        publishEnvironment: {
            name: "PublishEnvironment",
            I: z.k4t,
            O: z.kAu,
            kind: j.MethodKind.Unary
        },
        publishPersonalEnvironment: {
            name: "PublishPersonalEnvironment",
            I: z.g2F,
            O: z._Js,
            kind: j.MethodKind.Unary
        },
        listTeamEnvironments: {
            name: "ListTeamEnvironments",
            I: z.d9E,
            O: z.rpb,
            kind: j.MethodKind.Unary
        },
        deleteTeamEnvironment: {
            name: "DeleteTeamEnvironment",
            I: z.LtT,
            O: z.JHS,
            kind: j.MethodKind.Unary
        },
        setTeamEnvironmentJson: {
            name: "SetTeamEnvironmentJson",
            I: z.Q6X,
            O: z.Mgd,
            kind: j.MethodKind.Unary
        },
        restoreEnvironmentVersion: {
            name: "RestoreEnvironmentVersion",
            I: z.Vbg,
            O: z.d29,
            kind: j.MethodKind.Unary
        },
        listEnvironments: {
            name: "ListEnvironments",
            I: z.Cwe,
            O: z.A$2,
            kind: j.MethodKind.Unary
        },
        getEnvironment: {
            name: "GetEnvironment",
            I: z.pgg,
            O: z.$KW,
            kind: j.MethodKind.Unary
        },
        renameEnvironment: {
            name: "RenameEnvironment",
            I: z.JAJ,
            O: z.V7U,
            kind: j.MethodKind.Unary
        },
        migrateEnvironmentToOrigin: {
            name: "MigrateEnvironmentToOrigin",
            I: z.Ppp,
            O: z.fSg,
            kind: j.MethodKind.Unary
        },
        duplicateEnvironment: {
            name: "DuplicateEnvironment",
            I: z.cRl,
            O: z.GiL,
            kind: j.MethodKind.Unary
        },
        listEnvironmentBuilds: {
            name: "ListEnvironmentBuilds",
            I: z.KwZ,
            O: z.c3J,
            kind: j.MethodKind.Unary
        },
        getEnvironmentActiveBuild: {
            name: "GetEnvironmentActiveBuild",
            I: z.nqG,
            O: z.Xfg,
            kind: j.MethodKind.Unary
        },
        getEnvironmentPersistentRecurringBuildFailures: {
            name: "GetEnvironmentPersistentRecurringBuildFailures",
            I: z.YNC,
            O: z.kfr,
            kind: j.MethodKind.Unary
        },
        getEnvironmentBuild: {
            name: "GetEnvironmentBuild",
            I: z.VgC,
            O: z.rQh,
            kind: j.MethodKind.Unary
        },
        getEnvironmentBuildConfig: {
            name: "GetEnvironmentBuildConfig",
            I: z.$2f,
            O: z.leV,
            kind: j.MethodKind.Unary
        },
        updateEnvironmentBuild: {
            name: "UpdateEnvironmentBuild",
            I: z.eqt,
            O: z.oRi,
            kind: j.MethodKind.Unary
        },
        triggerEnvironmentBuild: {
            name: "TriggerEnvironmentBuild",
            I: z.D7y,
            O: z.tTg,
            kind: j.MethodKind.Unary
        },
        attachEnvironmentBuildLog: {
            name: "AttachEnvironmentBuildLog",
            I: z.mmt,
            O: z.iSl,
            kind: j.MethodKind.ServerStreaming
        },
        cancelEnvironmentBuild: {
            name: "CancelEnvironmentBuild",
            I: z.XXX,
            O: z.ZzM,
            kind: j.MethodKind.Unary
        },
        getEnvironmentBuildSettings: {
            name: "GetEnvironmentBuildSettings",
            I: z.Ctm,
            O: z.I4r,
            kind: j.MethodKind.Unary
        },
        updateEnvironmentBuildSettings: {
            name: "UpdateEnvironmentBuildSettings",
            I: z.nk$,
            O: z.xQ,
            kind: j.MethodKind.Unary
        },
        resolveOrCreateMultiRepoEnvironment: {
            name: "ResolveOrCreateMultiRepoEnvironment",
            I: z.fTZ,
            O: z.LKF,
            kind: j.MethodKind.Unary
        },
        resolveOrCreateDraftEnvironment: {
            name: "ResolveOrCreateDraftEnvironment",
            I: z.DuM,
            O: z.brK,
            kind: j.MethodKind.Unary
        },
        snapshotAndSaveEnvironment: {
            name: "SnapshotAndSaveEnvironment",
            I: z.jnd,
            O: z.Dkj,
            kind: j.MethodKind.Unary
        },
        listReposWithLocalEnvironment: {
            name: "ListReposWithLocalEnvironment",
            I: z.T_4,
            O: z.XVt,
            kind: j.MethodKind.Unary
        },
        markBackgroundComposerRead: {
            name: "MarkBackgroundComposerRead",
            I: z.FZx,
            O: z.t8V,
            kind: j.MethodKind.Unary
        },
        markBackgroundComposerUnread: {
            name: "MarkBackgroundComposerUnread",
            I: z.qfW,
            O: z.WZT,
            kind: j.MethodKind.Unary
        },
        advanceBackgroundComposerReadCursor: {
            name: "AdvanceBackgroundComposerReadCursor",
            I: z.A6L,
            O: z.UcJ,
            kind: j.MethodKind.Unary
        },
        notifyBackgroundComposerShown: {
            name: "NotifyBackgroundComposerShown",
            I: z.emS,
            O: z.Ckz,
            kind: j.MethodKind.Unary
        },
        fetchBackgroundComposer: {
            name: "FetchBackgroundComposer",
            I: z.STY,
            O: z.IUx,
            kind: j.MethodKind.Unary
        },
        getTurnSummaryBackgroundComposer: {
            name: "GetTurnSummaryBackgroundComposer",
            I: z.zoE,
            O: z.lEW,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerName: {
            name: "GetBackgroundComposerName",
            I: z.t19,
            O: z.lym,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerPrompt: {
            name: "GetBackgroundComposerPrompt",
            I: z.ETN,
            O: z.YrB,
            kind: j.MethodKind.Unary
        },
        readBinaryFile: {
            name: "ReadBinaryFile",
            I: z.nSy,
            O: z.TV9,
            kind: j.MethodKind.Unary
        },
        listBackgroundComposerArtifacts: {
            name: "ListBackgroundComposerArtifacts",
            I: z.bGX,
            O: z.dKy,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerArtifact: {
            name: "GetBackgroundComposerArtifact",
            I: z.QN3,
            O: z.m_2,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerArtifactBytes: {
            name: "GetBackgroundComposerArtifactBytes",
            I: z.tnE,
            O: z.fPH,
            kind: j.MethodKind.Unary
        },
        streamBackgroundComposerArtifact: {
            name: "StreamBackgroundComposerArtifact",
            I: z.etb,
            O: z.qho,
            kind: j.MethodKind.ServerStreaming
        },
        listSharedBackgroundComposerArtifacts: {
            name: "ListSharedBackgroundComposerArtifacts",
            I: z.s6$,
            O: z.Eg9,
            kind: j.MethodKind.Unary
        },
        shareBackgroundComposerArtifact: {
            name: "ShareBackgroundComposerArtifact",
            I: z.Bs6,
            O: z.p$w,
            kind: j.MethodKind.Unary
        },
        unshareBackgroundComposerArtifact: {
            name: "UnshareBackgroundComposerArtifact",
            I: z.WdU,
            O: z._hK,
            kind: j.MethodKind.Unary
        },
        getPublicBackgroundComposerArtifact: {
            name: "GetPublicBackgroundComposerArtifact",
            I: z.dBV,
            O: z.lcJ,
            kind: j.MethodKind.Unary
        },
        updateBackgroundComposerUserSettings: {
            name: "UpdateBackgroundComposerUserSettings",
            I: z.rtk,
            O: z.B70,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerUserSettings: {
            name: "GetBackgroundComposerUserSettings",
            I: z.knx,
            O: z.c3R,
            kind: j.MethodKind.Unary
        },
        updateBackgroundComposerEnvironment: {
            name: "UpdateBackgroundComposerEnvironment",
            I: z.aSW,
            O: z.yMG,
            kind: j.MethodKind.Unary
        },
        getRepositoryBranches: {
            name: "GetRepositoryBranches",
            I: z.wfJ,
            O: z.Y11,
            kind: j.MethodKind.Unary
        },
        getRepositoryDefaultBranch: {
            name: "GetRepositoryDefaultBranch",
            I: z.tUI,
            O: z.VFP,
            kind: j.MethodKind.Unary
        },
        getPullRequestMergeStatus: {
            name: "GetPullRequestMergeStatus",
            I: z.O9v,
            O: z.Kjz,
            kind: j.MethodKind.Unary
        },
        getDetailedPullRequestStatus: {
            name: "GetDetailedPullRequestStatus",
            I: z.G6j,
            O: z.kT7,
            kind: j.MethodKind.Unary
        },
        checkPullRequestMergeability: {
            name: "CheckPullRequestMergeability",
            I: z.kz7,
            O: z.IRR,
            kind: j.MethodKind.Unary
        },
        getPullRequestDiscussions: {
            name: "GetPullRequestDiscussions",
            I: z.VDi,
            O: z.Lh4,
            kind: j.MethodKind.Unary
        },
        getPullRequestCommits: {
            name: "GetPullRequestCommits",
            I: z.W$u,
            O: z.KtS,
            kind: j.MethodKind.Unary
        },
        getPullRequestTimelineEvents: {
            name: "GetPullRequestTimelineEvents",
            I: z.EtC,
            O: z.kNC,
            kind: j.MethodKind.Unary
        },
        replyToReviewThread: {
            name: "ReplyToReviewThread",
            I: z.Paz,
            O: z.RS3,
            kind: j.MethodKind.Unary
        },
        resolveReviewThread: {
            name: "ResolveReviewThread",
            I: z.YJS,
            O: z.I10,
            kind: j.MethodKind.Unary
        },
        unresolveReviewThread: {
            name: "UnresolveReviewThread",
            I: z.f6P,
            O: z.mAw,
            kind: j.MethodKind.Unary
        },
        deletePullRequestReviewComment: {
            name: "DeletePullRequestReviewComment",
            I: z.uG2,
            O: z.Wq8,
            kind: j.MethodKind.Unary
        },
        addPullRequestReviewComment: {
            name: "AddPullRequestReviewComment",
            I: z._hm,
            O: z.IWb,
            kind: j.MethodKind.Unary
        },
        mergePullRequest: {
            name: "MergePullRequest",
            I: z.Iu7,
            O: z.o0u,
            kind: j.MethodKind.Unary
        },
        enablePullRequestAutoMerge: {
            name: "EnablePullRequestAutoMerge",
            I: z.uor,
            O: z.eep,
            kind: j.MethodKind.Unary
        },
        disablePullRequestAutoMerge: {
            name: "DisablePullRequestAutoMerge",
            I: z.LIf,
            O: z.JmB,
            kind: j.MethodKind.Unary
        },
        convertPullRequestFromDraft: {
            name: "ConvertPullRequestFromDraft",
            I: z.MjE,
            O: z.Wmt,
            kind: j.MethodKind.Unary
        },
        updatePullRequestBranch: {
            name: "UpdatePullRequestBranch",
            I: z.RU,
            O: z.NNE,
            kind: j.MethodKind.Unary
        },
        registerPushNotificationToken: {
            name: "RegisterPushNotificationToken",
            I: z.nL3,
            O: z.pXc,
            kind: j.MethodKind.Unary
        },
        deletePushNotificationToken: {
            name: "DeletePushNotificationToken",
            I: z.dbI,
            O: z.bt2,
            kind: j.MethodKind.Unary
        },
        resolveOriginAgentApproval: {
            name: "ResolveOriginAgentApproval",
            I: z.c2F,
            O: z._bb,
            kind: j.MethodKind.Unary
        },
        getOriginAgentApproval: {
            name: "GetOriginAgentApproval",
            I: z.Ugu,
            O: z.mZT,
            kind: j.MethodKind.Unary
        },
        syncLiveActivity: {
            name: "SyncLiveActivity",
            I: z._ps,
            O: z.Kft,
            kind: j.MethodKind.Unary
        },
        deleteLiveActivity: {
            name: "DeleteLiveActivity",
            I: z.ccq,
            O: z.car,
            kind: j.MethodKind.Unary
        },
        verifyBackgroundComposerAccess: {
            name: "VerifyBackgroundComposerAccess",
            I: z.BUE,
            O: z.LIp,
            kind: j.MethodKind.Unary
        },
        startSlackStreamingForFollowup: {
            name: "StartSlackStreamingForFollowup",
            I: z.d$o,
            O: z.Dtj,
            kind: j.MethodKind.Unary
        },
        startGithubStreamingForFollowup: {
            name: "StartGithubStreamingForFollowup",
            I: z.Mng,
            O: z.WO7,
            kind: j.MethodKind.Unary
        },
        startLinearStreamingForFollowup: {
            name: "StartLinearStreamingForFollowup",
            I: z.Onu,
            O: z.ej_,
            kind: j.MethodKind.Unary
        },
        getGithubInstallations: {
            name: "GetGithubInstallations",
            I: te.kcC,
            O: te.UYU,
            kind: j.MethodKind.Unary
        },
        fetchAllInstallationRepos: {
            name: "FetchAllInstallationRepos",
            I: te.UfC,
            O: te.gJO,
            kind: j.MethodKind.Unary
        },
        getBackgroundComposerVmUsage: {
            name: "GetBackgroundComposerVmUsage",
            I: z.aw2,
            O: z.usA,
            kind: j.MethodKind.Unary
        },
        getCloudAgentDebugDetails: {
            name: "GetCloudAgentDebugDetails",
            I: z.jC6,
            O: z.b$5,
            kind: j.MethodKind.Unary
        },
        getCloudAgentMemoryDbLogs: {
            name: "GetCloudAgentMemoryDbLogs",
            I: z.CkI,
            O: z.wbS,
            kind: j.MethodKind.Unary
        },
        createAgentShare: {
            name: "CreateAgentShare",
            I: z.I2o,
            O: z.S93,
            kind: j.MethodKind.Unary
        },
        getAgentSharePreview: {
            name: "GetAgentSharePreview",
            I: z.qtI,
            O: z.Y6D,
            kind: j.MethodKind.Unary
        },
        listPrivateWorkers: {
            name: "ListPrivateWorkers",
            I: z.eQJ,
            O: z.Kqy,
            kind: j.MethodKind.Unary
        },
        listPrivateWorkerPools: {
            name: "ListPrivateWorkerPools",
            I: z.skc,
            O: z.A8n,
            kind: j.MethodKind.Unary
        },
        listPlacementGrants: {
            name: "ListPlacementGrants",
            I: z.chA,
            O: z.iWX,
            kind: j.MethodKind.Unary
        },
        updatePlacementGrants: {
            name: "UpdatePlacementGrants",
            I: z.pYO,
            O: z.BF4,
            kind: j.MethodKind.Unary
        },
        registerPrivateWorkerPool: {
            name: "RegisterPrivateWorkerPool",
            I: z.__2,
            O: z.Cak,
            kind: j.MethodKind.Unary
        },
        deregisterPrivateWorkerPool: {
            name: "DeregisterPrivateWorkerPool",
            I: z.TwX,
            O: z.d8w,
            kind: j.MethodKind.Unary
        },
        adminListUserPrivateWorkers: {
            name: "AdminListUserPrivateWorkers",
            I: z.kAU,
            O: z.AOw,
            kind: j.MethodKind.Unary
        },
        adminKillBackgroundComposer: {
            name: "AdminKillBackgroundComposer",
            I: z.tBI,
            O: z.hGF,
            kind: j.MethodKind.Unary
        },
        adminSettleInteraction: {
            name: "AdminSettleInteraction",
            I: z.wcy,
            O: z._pH,
            kind: j.MethodKind.Unary
        },
        adminUnparkFollowups: {
            name: "AdminUnparkFollowups",
            I: z.fHd,
            O: z.n0f,
            kind: j.MethodKind.Unary
        },
        adminListActiveBackgroundComposers: {
            name: "AdminListActiveBackgroundComposers",
            I: z.Uig,
            O: z.Qm7,
            kind: j.MethodKind.Unary
        },
        adminKillAllActiveBackgroundComposers: {
            name: "AdminKillAllActiveBackgroundComposers",
            I: z.Z26,
            O: z.pNw,
            kind: j.MethodKind.Unary
        },
        listPendingPrivateWorkerRequests: {
            name: "ListPendingPrivateWorkerRequests",
            I: z.eUR,
            O: z.uuM,
            kind: j.MethodKind.Unary
        },
        streamPendingPrivateWorkerRequests: {
            name: "StreamPendingPrivateWorkerRequests",
            I: z.uic,
            O: z.ucH,
            kind: j.MethodKind.ServerStreaming
        },
        claimPendingPrivateWorkerRequest: {
            name: "ClaimPendingPrivateWorkerRequest",
            I: z.vv1,
            O: z.xPf,
            kind: j.MethodKind.Unary
        },
        releasePrivateWorkerClaim: {
            name: "ReleasePrivateWorkerClaim",
            I: z.evp,
            O: z.QwO,
            kind: j.MethodKind.Unary
        },
        getPrivateWorkersSummary: {
            name: "GetPrivateWorkersSummary",
            I: z.WcO,
            O: z.EpF,
            kind: j.MethodKind.Unary
        },
        getPrivateWorker: {
            name: "GetPrivateWorker",
            I: z.p4E,
            O: z.Jnn,
            kind: j.MethodKind.Unary
        },
        releasePrivateWorker: {
            name: "ReleasePrivateWorker",
            I: z.EJE,
            O: z.sRE,
            kind: j.MethodKind.Unary
        },
        batchRefreshPullRequestStatus: {
            name: "BatchRefreshPullRequestStatus",
            I: z.FCY,
            O: z.B9R,
            kind: j.MethodKind.Unary
        },
        listAgentStores: {
            name: "ListAgentStores",
            I: o.vz,
            O: o.xL,
            kind: j.MethodKind.Unary
        },
        listAgentStoreEntries: {
            name: "ListAgentStoreEntries",
            I: o.uH,
            O: o.i1,
            kind: j.MethodKind.Unary
        },
        readAgentStoreFile: {
            name: "ReadAgentStoreFile",
            I: o.uj,
            O: o.Em,
            kind: j.MethodKind.Unary
        },
        writeAgentStoreDocument: {
            name: "WriteAgentStoreDocument",
            I: o.Hr,
            O: o._I,
            kind: j.MethodKind.Unary
        },
        setAgentStoreDocumentVisibility: {
            name: "SetAgentStoreDocumentVisibility",
            I: o.V8,
            O: o.ph,
            kind: j.MethodKind.Unary
        },
        mintAgentStoreToken: {
            name: "MintAgentStoreToken",
            I: o.dy,
            O: o.Nj,
            kind: j.MethodKind.Unary
        },
        writeCanvas: {
            name: "WriteCanvas",
            I: z.rFS,
            O: z.sa6,
            kind: j.MethodKind.Unary
        },
        readCanvas: {
            name: "ReadCanvas",
            I: z.yVw,
            O: z.MuG,
            kind: j.MethodKind.Unary
        },
        listAgentStoreFiles: {
            name: "ListAgentStoreFiles",
            I: o.JN,
            O: o.NS,
            kind: j.MethodKind.Unary
        },
        listAgentStoreDirectory: {
            name: "ListAgentStoreDirectory",
            I: o.zc,
            O: o.p0,
            kind: j.MethodKind.Unary
        },
        checkAgentStoreVersions: {
            name: "CheckAgentStoreVersions",
            I: o.rX,
            O: o.X8,
            kind: j.MethodKind.Unary
        },
        presignAgentStoreReads: {
            name: "PresignAgentStoreReads",
            I: o.xN,
            O: o.tK,
            kind: j.MethodKind.Unary
        },
        presignAgentStoreWrites: {
            name: "PresignAgentStoreWrites",
            I: o.WJ,
            O: o.GL,
            kind: j.MethodKind.Unary
        },
        completeAgentStoreMultipartWrites: {
            name: "CompleteAgentStoreMultipartWrites",
            I: o.bB,
            O: o.t3,
            kind: j.MethodKind.Unary
        },
        abortAgentStoreMultipartWrites: {
            name: "AbortAgentStoreMultipartWrites",
            I: o.mr,
            O: o.U4,
            kind: j.MethodKind.Unary
        },
        presignPromptUpload: {
            name: "PresignPromptUpload",
            I: z.Nox,
            O: z.pr,
            kind: j.MethodKind.Unary
        },
        completePromptUpload: {
            name: "CompletePromptUpload",
            I: z.mz8,
            O: z.kwT,
            kind: j.MethodKind.Unary
        },
        abortPromptUpload: {
            name: "AbortPromptUpload",
            I: z.VPy,
            O: z.r5i,
            kind: j.MethodKind.Unary
        },
        acquireAgentStoreFileLock: {
            name: "AcquireAgentStoreFileLock",
            I: o.rd,
            O: o.N5,
            kind: j.MethodKind.Unary
        },
        renewAgentStoreFileLock: {
            name: "RenewAgentStoreFileLock",
            I: o.a1,
            O: o.aZ,
            kind: j.MethodKind.Unary
        },
        releaseAgentStoreFileLock: {
            name: "ReleaseAgentStoreFileLock",
            I: o.sc,
            O: o.qZ,
            kind: j.MethodKind.Unary
        },
        getAgentStoreFileLock: {
            name: "GetAgentStoreFileLock",
            I: o.bH,
            O: o.Hm,
            kind: j.MethodKind.Unary
        },
        deleteAgentStoreFiles: {
            name: "DeleteAgentStoreFiles",
            I: o.uM,
            O: o.OM,
            kind: j.MethodKind.Unary
        },
        rmdirAgentStore: {
            name: "RmdirAgentStore",
            I: o.q5,
            O: o.q$,
            kind: j.MethodKind.Unary
        },
        undeleteAgentStoreFiles: {
            name: "UndeleteAgentStoreFiles",
            I: o.FF,
            O: o.xQ,
            kind: j.MethodKind.Unary
        },
        listAgentStoreTombstones: {
            name: "ListAgentStoreTombstones",
            I: o.I1,
            O: o.aU,
            kind: j.MethodKind.Unary
        },
        shareAgentStore: {
            name: "ShareAgentStore",
            I: o.FT,
            O: o.fp,
            kind: j.MethodKind.Unary
        },
        unshareAgentStore: {
            name: "UnshareAgentStore",
            I: o.Og,
            O: o.Qv,
            kind: j.MethodKind.Unary
        },
        listSharedAgentStores: {
            name: "ListSharedAgentStores",
            I: o.WQ,
            O: o.op,
            kind: j.MethodKind.Unary
        },
        provisionSyntheticsServiceAccounts: {
            name: "ProvisionSyntheticsServiceAccounts",
            I: z.aCR,
            O: z.euU,
            kind: j.MethodKind.Unary
        },
        startCloudAgentLoadTest: {
            name: "StartCloudAgentLoadTest",
            I: z.O3Q,
            O: z.k_c,
            kind: j.MethodKind.Unary
        },
        ensureModelRoutingLoadTestStarted: {
            name: "EnsureModelRoutingLoadTestStarted",
            I: z.ELT,
            O: z.qmY,
            kind: j.MethodKind.Unary
        },
        cancelModelRoutingLoadTest: {
            name: "CancelModelRoutingLoadTest",
            I: z.rOM,
            O: z.jlp,
            kind: j.MethodKind.Unary
        },
        mintCustomerPrivatelinkProxyToken: {
            name: "MintCustomerPrivatelinkProxyToken",
            I: z.Ghl,
            O: z.ODu,
            kind: j.MethodKind.Unary
        },
        listCustomerPrivatelinkAllowedHosts: {
            name: "ListCustomerPrivatelinkAllowedHosts",
            I: z.sHj,
            O: z.U1W,
            kind: j.MethodKind.Unary
        },
        adminListTeamNamedAgents: {
            name: "AdminListTeamNamedAgents",
            I: z.hgq,
            O: z.Zd1,
            kind: j.MethodKind.Unary
        },
        adminDeleteNamedAgent: {
            name: "AdminDeleteNamedAgent",
            I: z.E6n,
            O: z.gaC,
            kind: j.MethodKind.Unary
        },
        listKeyrings: {
            name: "ListKeyrings",
            I: z.wLB,
            O: z.QHD,
            kind: j.MethodKind.Unary
        },
        getKeyring: {
            name: "GetKeyring",
            I: z.jL$,
            O: z.x7$,
            kind: j.MethodKind.Unary
        },
        createKeyring: {
            name: "CreateKeyring",
            I: z.xRg,
            O: z.ZGp,
            kind: j.MethodKind.Unary
        },
        createKeyringFromTeamSecrets: {
            name: "CreateKeyringFromTeamSecrets",
            I: z.$bT,
            O: z.fOq,
            kind: j.MethodKind.Unary
        },
        copyTeamSecretsToKeyring: {
            name: "CopyTeamSecretsToKeyring",
            I: z.dKf,
            O: z.T0_,
            kind: j.MethodKind.Unary
        },
        renameKeyring: {
            name: "RenameKeyring",
            I: z.BmM,
            O: z.n4S,
            kind: j.MethodKind.Unary
        },
        deleteKeyring: {
            name: "DeleteKeyring",
            I: z.u_9,
            O: z.OEK,
            kind: j.MethodKind.Unary
        },
        listKeyringSecrets: {
            name: "ListKeyringSecrets",
            I: z.kpM,
            O: z.Ell,
            kind: j.MethodKind.Unary
        },
        createKeyringSecret: {
            name: "CreateKeyringSecret",
            I: z.HWL,
            O: z.LHM,
            kind: j.MethodKind.Unary
        },
        updateKeyringSecret: {
            name: "UpdateKeyringSecret",
            I: z.Ohy,
            O: z.koZ,
            kind: j.MethodKind.Unary
        },
        revokeKeyringSecret: {
            name: "RevokeKeyringSecret",
            I: z.VyU,
            O: z.Zfl,
            kind: j.MethodKind.Unary
        },
        listKeyringGrants: {
            name: "ListKeyringGrants",
            I: z.yRi,
            O: z.cEv,
            kind: j.MethodKind.Unary
        },
        grantKeyringPermissions: {
            name: "GrantKeyringPermissions",
            I: z.z8w,
            O: z.Vcn,
            kind: j.MethodKind.Unary
        },
        updateKeyringPermissions: {
            name: "UpdateKeyringPermissions",
            I: z.OAc,
            O: z.iec,
            kind: j.MethodKind.Unary
        },
        revokeKeyringPermissions: {
            name: "RevokeKeyringPermissions",
            I: z.dcP,
            O: z.n2e,
            kind: j.MethodKind.Unary
        }
    }
};
var ne = require("./module-43079.js"), se = require("./module-84959.js"), oe = function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, r = e[Symbol.asyncIterator];
    return r ? r.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
        return this;
    }, t);
    function n(r) {
        t[r] = e[r] && function(t) {
            return new Promise(function(n, s) {
                (function(e, t, r, n) {
                    Promise.resolve(n).then(function(t) {
                        e({
                            value: t,
                            done: r
                        });
                    }, t);
                })(n, s, (t = e[r](t)).done, t.value);
            });
        };
    }
}, ie = function(e) {
    return this instanceof ie ? (this.v = e, this) : new ie(e);
}, ae = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(e, t || []), o = [];
    return n = {}, i("next"), i("throw"), i("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, l);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function i(e, t) {
        s[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
                o.push([
                    e,
                    t,
                    r,
                    n
                ]) > 1 || a(e, t);
            });
        }, t && (n[e] = t(n[e])));
    }
    function a(e, t) {
        try {
            (r = s[e](t)).value instanceof ie ? Promise.resolve(r.value.v).then(c, l) : u(o[0][2], r);
        } catch (e) {
            u(o[0][3], e);
        }
        var r;
    }
    function c(e) {
        a("next", e);
    }
    function l(e) {
        a("throw", e);
    }
    function u(e, t) {
        e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
    }
}, ce = function(e) {
    var t, r;
    return t = {}, n("next"), n("throw", function(e) {
        throw e;
    }), n("return"), t[Symbol.iterator] = function() {
        return this;
    }, t;
    function n(n, s) {
        t[n] = e[n] ? function(t) {
            return (r = !r) ? {
                value: ie(e[n](t)),
                done: !1
            } : s ? s(t) : t;
        } : s;
    }
};
var le = function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, r = e[Symbol.asyncIterator];
    return r ? r.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
        return this;
    }, t);
    function n(r) {
        t[r] = e[r] && function(t) {
            return new Promise(function(n, s) {
                (function(e, t, r, n) {
                    Promise.resolve(n).then(function(t) {
                        e({
                            value: t,
                            done: r
                        });
                    }, t);
                })(n, s, (t = e[r](t)).done, t.value);
            });
        };
    }
}, ue = function(e) {
    return this instanceof ue ? (this.v = e, this) : new ue(e);
}, de = function(e) {
    var t, r;
    return t = {}, n("next"), n("throw", function(e) {
        throw e;
    }), n("return"), t[Symbol.iterator] = function() {
        return this;
    }, t;
    function n(n, s) {
        t[n] = e[n] ? function(t) {
            return (r = !r) ? {
                value: ue(e[n](t)),
                done: !1
            } : s ? s(t) : t;
        } : s;
    }
}, pe = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(e, t || []), o = [];
    return n = {}, i("next"), i("throw"), i("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, l);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function i(e, t) {
        s[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
                o.push([
                    e,
                    t,
                    r,
                    n
                ]) > 1 || a(e, t);
            });
        }, t && (n[e] = t(n[e])));
    }
    function a(e, t) {
        try {
            (r = s[e](t)).value instanceof ue ? Promise.resolve(r.value.v).then(c, l) : u(o[0][2], r);
        } catch (e) {
            u(o[0][3], e);
        }
        var r;
    }
    function c(e) {
        a("next", e);
    }
    function l(e) {
        a("throw", e);
    }
    function u(e, t) {
        e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
    }
};
function me(e, t) {
    return function(e, t) {
        const r = {};
        for (const [n, s] of Object.entries(e.methods)){
            const o = t(Object.assign(Object.assign({}, s), {
                localName: n,
                service: e
            }));
            null != o && (r[n] = o);
        }
        return r;
    }(e, (r)=>{
        switch(r.kind){
            case j.MethodKind.Unary:
                return function(e, t, r) {
                    return async function(n, s) {
                        var o, i;
                        const a = await e.unary(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues);
                        return null === (o = null == s ? void 0 : s.onHeader) || void 0 === o || o.call(s, a.header), null === (i = null == s ? void 0 : s.onTrailer) || void 0 === i || i.call(s, a.trailer), a.message;
                    };
                }(t, e, r);
            case j.MethodKind.ServerStreaming:
                return function(e, t, r) {
                    return function(n, s) {
                        return he(e.stream(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, function(e) {
                            return ae(this, arguments, function*() {
                                yield ie((yield* ce(oe(e))));
                            });
                        }([
                            n
                        ]), null == s ? void 0 : s.contextValues), s);
                    };
                }(t, e, r);
            case j.MethodKind.ClientStreaming:
                return function(e, t, r) {
                    return async function(n, s) {
                        var o, i, a, c, l, u;
                        const d = await e.stream(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues);
                        let p;
                        null === (l = null == s ? void 0 : s.onHeader) || void 0 === l || l.call(s, d.header);
                        let m = 0;
                        try {
                            for(var h, f = !0, g = le(d.message); !(o = (h = await g.next()).done); f = !0){
                                c = h.value, f = !1;
                                p = c, m++;
                            }
                        } catch (e) {
                            i = {
                                error: e
                            };
                        } finally{
                            try {
                                f || o || !(a = g.return) || await a.call(g);
                            } finally{
                                if (i) throw i.error;
                            }
                        }
                        if (!p) throw new ne.T("protocol error: missing response message", se.C.Unimplemented);
                        if (m > 1) throw new ne.T("protocol error: received extra messages for client streaming method", se.C.Unimplemented);
                        return null === (u = null == s ? void 0 : s.onTrailer) || void 0 === u || u.call(s, d.trailer), p;
                    };
                }(t, e, r);
            case j.MethodKind.BiDiStreaming:
                return function(e, t, r) {
                    return function(n, s) {
                        return he(e.stream(t, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues), s);
                    };
                }(t, e, r);
            default:
                return null;
        }
    });
}
function he(e, t) {
    const r = (function() {
        return pe(this, arguments, function*() {
            var r, n;
            const s = yield ue(e);
            null === (r = null == t ? void 0 : t.onHeader) || void 0 === r || r.call(t, s.header), yield ue((yield* de(le(s.message)))), null === (n = null == t ? void 0 : t.onTrailer) || void 0 === n || n.call(t, s.trailer);
        });
    })()[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                next: ()=>r.next()
            })
    };
}
function fe(e) {
    return e instanceof ye ? e.connectCode : e instanceof ne.T ? e.code : "object" == typeof e && null !== e && "code" in e ? rt(e.code) : void 0;
}
function ge(e, t) {
    return fe(e) === t;
}
class ye extends Error {
    constructor(e){
        const t = Te(e.cause);
        super(t.length > 0 ? t : "Agent store mint failed", {
            cause: e.cause
        }), this.name = "AgentStoreMintFailedError", this.cause = e.cause, this.connectCode = function(e) {
            if (e instanceof ne.T) return e.code;
            if ("object" != typeof e || null === e || !("code" in e)) return;
            return rt(e.code);
        }(e.cause), this.retryAfterMs = e.retryAfterMs, this.attempts = e.attempts;
    }
}
function we(e) {
    return e instanceof ye;
}
function ve(e) {
    const t = new Set;
    let r = e;
    for(; null != r && !t.has(r);){
        if (we(r)) return !0;
        if (t.add(r), "object" != typeof r || !("cause" in r)) return !1;
        r = r.cause;
    }
    return !1;
}
function _e(e) {
    return e instanceof ye ? e.cause : e;
}
function be(e) {
    const t = fe(e);
    return t === se.C.InvalidArgument || t === se.C.NotFound || t === se.C.FailedPrecondition;
}
function Se(e) {
    if (function(e) {
        for (const t of Ee(e))if (t instanceof ne.T && t.findDetails(W.vj).some((e)=>ke.has(e.error))) return !0;
        return !1;
    }(e) || function(e) {
        for (const t of Ee(e))for (const e of Je(t)){
            const t = e.toLowerCase();
            if (xe.some((e)=>t.includes(e))) return !0;
        }
        return !1;
    }(e)) return !1;
    for (const t of Ee(e)){
        if (t instanceof i) return !0;
        if (Ie(t)) return !0;
        const e = fe(t);
        if (e === se.C.Unauthenticated || e === se.C.PermissionDenied) return !0;
    }
    return !1;
}
const ke = new Set([
    W.yM.NOT_LOGGED_IN,
    W.yM.INVALID_AUTH_ID,
    W.yM.AUTH_TOKEN_NOT_FOUND,
    W.yM.AUTH_TOKEN_EXPIRED
]), xe = [
    "private worker is not connected",
    "private worker does not match the authenticated caller",
    "background composer is not live for private worker agent-store minting",
    "private worker is not assigned to this background composer"
];
function Ee(e) {
    const t = [], r = new Set;
    let n = e;
    for(; null != n && "object" == typeof n && !r.has(n);)r.add(n), t.push(n), n = "cause" in n ? n.cause : void 0;
    return t;
}
function Ie(e) {
    if (!function(e) {
        const t = e.toLowerCase();
        return t.includes("agent store sync is not enabled") || t.includes("agent store sync is not available in legacy privacy mode") || t.includes("private worker agent-store sync is not enabled");
    }(Te(e))) return !1;
    const t = fe(e);
    return void 0 === t || t === se.C.InvalidArgument || t === se.C.PermissionDenied;
}
function Te(e) {
    return e instanceof Error ? e.message : "string" == typeof e ? e : "";
}
const Ce = "agent_store_quota_exceeded", Pe = "agent_store_backend_throttled", Ae = 1e3, Re = "agent_store_dir_not_empty";
function Me(e) {
    const t = `${e.key}=`, r = e.haystack.indexOf(t);
    if (r < 0) return;
    const n = e.haystack.slice(r + t.length), s = n.search(/\s/), o = (s < 0 ? n : n.slice(0, s)).trim();
    return o.length > 0 ? o : void 0;
}
function Je(e) {
    const t = [], r = Te(e);
    if (r.length > 0 && t.push(r), e instanceof ne.T) for (const r of e.findDetails(W.vj)){
        const e = r.details?.detail;
        "string" == typeof e && e.length > 0 && t.push(e);
        const n = r.details?.title;
        "string" == typeof n && n.length > 0 && t.push(n);
    }
    return t;
}
function Oe(e) {
    const t = e.trim();
    return "Error" === t || "[failed_precondition] Error" === t || /^\[[^\]]+\] Error$/.test(t);
}
function Be(e) {
    const t = e.indexOf(". marker=");
    if (t > 0) return e.slice(0, t + 1).trim();
    const r = e.indexOf(" marker=");
    return r > 0 ? e.slice(0, r).trim() : e;
}
function De(e, t) {
    const r = _e(e), n = Te(r).trim();
    if (n.length > 0 && !Oe(n)) return Be(n);
    if (r instanceof ne.T) {
        const e = r.rawMessage.trim();
        if (e.length > 0 && !Oe(e)) return Be(e);
        for (const e of r.findDetails(W.vj)){
            const t = e.details?.title?.trim();
            if (void 0 !== t && t.length > 0 && !Oe(t)) return Be(t);
            const r = e.details?.detail?.trim();
            if (void 0 !== r && r.length > 0 && !Oe(r)) return Be(r);
        }
    }
    return t;
}
function qe(e) {
    const t = _e(e);
    if (!ge(t, se.C.FailedPrecondition) && !ge(t, se.C.InvalidArgument)) return;
    const r = Je(t).find((e)=>e.includes(Ce));
    if (void 0 === r) return;
    const n = Me({
        haystack: r,
        key: "limit_bytes"
    }), s = Me({
        haystack: r,
        key: "usage_bytes"
    });
    return {
        scopeKind: Me({
            haystack: r,
            key: "scope"
        }) ?? "store",
        resource: Me({
            haystack: r,
            key: "resource"
        }) ?? "storage_bytes",
        limitBytes: void 0 !== n ? Number(n) : 0,
        usageBytes: void 0 !== s ? Number(s) : 0,
        storeId: Me({
            haystack: r,
            key: "store_id"
        }) ?? ""
    };
}
function Ne(e) {
    const t = Le(e, "Retry-After");
    if (void 0 === t) return;
    const r = Number.parseInt(t.trim(), 10);
    return !Number.isFinite(r) || r < 0 ? void 0 : 1e3 * r;
}
const Fe = "x-cursor-agent-store-retry-after-ms";
function Ue(e) {
    const t = Le(e, Fe);
    if (void 0 === t) return;
    const r = Number.parseInt(t.trim(), 10);
    return !Number.isFinite(r) || r < 0 ? void 0 : r;
}
function Le(e, t) {
    for (const r of Ee(e)){
        const e = $e(r, t);
        if (void 0 !== e) return e;
    }
}
function $e(e, t) {
    if (e instanceof ne.T) {
        const r = e.metadata.get(t);
        if (null !== r && r.length > 0) return r;
    }
    if ("object" != typeof e || null === e || !("metadata" in e)) return;
    const r = e.metadata;
    if (r instanceof Headers) {
        const e = r.get(t);
        if (null !== e && e.length > 0) return e;
    }
}
function je(e) {
    if (Ie(e)) return Ne(e);
}
function Ge(e) {
    const t = _e(e), r = fe(t), n = function(e) {
        if ("object" == typeof e && null !== e) {
            for (const t of [
                "status",
                "statusCode"
            ])if (t in e) {
                const r = e[t];
                if ("number" == typeof r && Number.isFinite(r)) return r;
            }
        }
    }(t);
    if (!(r === se.C.ResourceExhausted || r === se.C.Unavailable || 429 === n || 503 === n)) return;
    const s = Je(t).find((e)=>e.includes(Pe));
    return {
        retryAfterMs: Ne(t) ?? Ae,
        scope: void 0 !== s ? Me({
            haystack: s,
            key: "scope"
        }) ?? "" : "",
        storeId: void 0 !== s ? Me({
            haystack: s,
            key: "store_id"
        }) ?? "" : ""
    };
}
function ze(e) {
    return !!ge(e, se.C.FailedPrecondition) && Je(e).some((e)=>e.includes(Re));
}
const We = new Set([
    se.C.Unavailable,
    se.C.ResourceExhausted,
    se.C.Internal,
    se.C.DeadlineExceeded
]), He = new Set([
    "ECONNREFUSED",
    "ECONNRESET",
    "EHOSTUNREACH",
    "ENETDOWN",
    "ENETUNREACH",
    "ENOTFOUND",
    "EPIPE",
    "EAI_AGAIN",
    "ETIMEDOUT",
    "UND_ERR_CONNECT_TIMEOUT",
    "UND_ERR_HEADERS_TIMEOUT",
    "UND_ERR_SOCKET"
]), Ke = [
    "connection reset",
    "fetch failed",
    "network error",
    "other side closed",
    "socket hang up"
];
function Ve(e) {
    const t = _e(e);
    if (Ye(t) || Ie(t)) return !1;
    if (be(t)) return !1;
    if (function(e) {
        const t = fe(e);
        if (t === se.C.Unauthenticated || t === se.C.PermissionDenied) return !0;
        if ("object" != typeof e || null === e) return !1;
        if ("status" in e) {
            const t = e.status;
            if (401 === t || 403 === t) return !0;
        }
        return !1;
    }(t)) return !1;
    const r = fe(t);
    return void 0 !== r ? !!We.has(r) || r === se.C.Unknown && (Qe(t) || Xe(t)) : Qe(t) || Xe(t);
}
function Ye(e) {
    const t = _e(e);
    return t instanceof Error && "AbortError" === t.name || fe(e) === se.C.Canceled;
}
function Qe(e) {
    for (const t of Ze(e)){
        const e = et(t, "status") ?? et(t, "statusCode");
        if (429 === e || void 0 !== e && e >= 500 && e < 600) return !0;
    }
    return !1;
}
function Xe(e) {
    for (const t of Ze(e)){
        if (!(t instanceof Error) || "AbortError" === t.name) continue;
        const e = tt(t);
        if (void 0 !== e && He.has(e)) return !0;
        const r = t.message.toLowerCase();
        if (Ke.some((e)=>r.includes(e))) return !0;
    }
    return !1;
}
function* Ze(e) {
    const t = new Set, r = [
        e
    ];
    for(; r.length > 0;){
        const e = r.pop();
        if (void 0 !== e && !t.has(e) && (t.add(e), yield e, "object" == typeof e && null !== e && ("cause" in e && void 0 !== e.cause && r.push(e.cause), e instanceof AggregateError))) for (const t of e.errors)r.push(t);
    }
}
function et(e, t) {
    if ("object" != typeof e || null === e) return;
    let r;
    if ("status" === t && "status" in e) r = e.status;
    else {
        if ("statusCode" !== t || !("statusCode" in e)) return;
        r = e.statusCode;
    }
    return "number" == typeof r && Number.isFinite(r) ? r : void 0;
}
function tt(e) {
    if (!("code" in e)) return;
    const t = e.code;
    return "string" == typeof t ? t : void 0;
}
function rt(e) {
    if ("number" == typeof e && "string" == typeof se.C[e]) return e;
    if ("string" == typeof e && 0 !== e.length) {
        for (const t of Object.values(se.C))if ("number" == typeof t && se.C[t] === e) return t;
    }
}
function nt(e) {
    const t = e?.trim();
    return void 0 === t || 0 === t.length ? "" : t.startsWith('"') && t.endsWith('"') ? t.slice(1, -1) : t;
}
function st(e) {
    return nt(e).toLowerCase();
}
const ot = "background-composer", it = "rpc_service";
function at(e) {
    return !0 === e ? "agent-store" : ot;
}
const ct = "x-agent-store-token", lt = 1e4;
function ut(e = ot) {
    return "agent-store" === e ? G : re;
}
const dt = 6e4, pt = 18e5, mt = 864e5;
class ht {
    constructor(e){
        if (this.directoryListCache = new Map, this.completeFlatListCache = new Map, this.listCacheGenerationByTarget = new Map, this.knownLargeTargets = new Map, this.now = e.now ?? Date.now, this.directoryListCacheTtlMs = e.flatFileListCacheTtlMs ?? 1e3, this.mintTokenHeaders = e.mintTokenHeaders, this.rpcTimeoutMs = function(e) {
            if (void 0 === e) return dt;
            if (!Number.isFinite(e) || e < 0) return dt;
            return Math.floor(e);
        }(e.rpcTimeoutMs), this.largeTargetTtlMs = function(e) {
            if (void 0 === e || !Number.isFinite(e)) return pt;
            return Math.min(mt, Math.max(6e4, Math.floor(e)));
        }(e.largeTargetTtlMs), void 0 !== e.client) this.client = e.client;
        else {
            if (void 0 === e.transport) throw new Error("BcsAgentStoreTransport requires either `client` or `transport`.");
            this.client = me(ut(e.service), e.transport);
        }
    }
    async mintToken(e, t) {
        try {
            const r = await this.invokeRpc((t)=>this.client.mintAgentStoreToken(function(e) {
                    switch(e.kind){
                        case "share":
                            return new o.dy({
                                shareId: e.shareId
                            });
                        case "store":
                            return new o.dy({
                                storeId: e.storeId
                            });
                        case "source":
                            return new o.dy({
                                source: new o.x$({
                                    kind: vt(e.sourceKind),
                                    sourceId: e.sourceId
                                })
                            });
                    }
                }(e), t), {
                ...void 0 === this.mintTokenHeaders ? {} : {
                    headers: {
                        ...this.mintTokenHeaders
                    }
                },
                ...void 0 === t?.signal ? {} : {
                    signal: t.signal
                }
            });
            return {
                token: r.token,
                expiresAtMs: Number(r.expiresAtMs),
                storeIds: [
                    ...r.storeIds.length > 0 ? r.storeIds : r.agentIds
                ]
            };
        } catch (e) {
            throw Ut(e);
        }
    }
    async listFiles({ token: e, storeId: t, relPath: r, shareId: n, signal: s, tombstoneMode: o, tombstonesSinceMs: i, ifVersionEqual: a }) {
        return await this.fetchCachedDirectoryList({
            token: e,
            storeId: t,
            relPath: r,
            shareId: n,
            signal: s,
            tombstoneMode: o,
            tombstonesSinceMs: i,
            ..."" === r && void 0 !== a && "" !== a ? {
                ifVersionEqual: a
            } : {}
        });
    }
    async presignReads({ token: e, storeId: t, relPaths: r, shareId: n, signal: s }) {
        try {
            return (await this.invokeRpc((e)=>this.client.presignAgentStoreReads(new o.xN(void 0 !== n ? {
                    shareId: n,
                    relPaths: [
                        ...r
                    ]
                } : {
                    storeId: t,
                    relPaths: [
                        ...r
                    ]
                }), e), _t(e.token, s))).instructions.map((e)=>({
                    relPath: e.relPath,
                    url: e.url,
                    expiresAtMs: Number(e.expiresAtMs)
                }));
        } catch (e) {
            throw Ut(e);
        }
    }
    async presignWrites({ token: e, storeId: t, files: r, signal: n }) {
        this.invalidateListCache({
            storeId: t
        });
        const s = new Map(r.map((e)=>[
                v(e.relPath),
                e.sha
            ]));
        for (const e of r){
            if (void 0 !== e.baseEtag && !0 === e.expectAbsent) throw new Error(`Agent store write for ${e.relPath} sets both baseEtag and expectAbsent; they are mutually exclusive`);
            if (void 0 !== e.baseEtag && 0 === st(e.baseEtag).length) throw new Error(`Agent store write for ${e.relPath} carries an empty baseEtag`);
        }
        try {
            return (await this.invokeRpc((e)=>this.client.presignAgentStoreWrites(new o.WJ({
                    storeId: t,
                    supportsSignedContentLength: !0,
                    files: r.map((e)=>new o.Mx({
                            relPath: e.relPath,
                            sizeBytes: BigInt(e.size),
                            sha: e.sha,
                            multipartParts: e.multipartParts?.map((e)=>new o.Ws({
                                    partNumber: e.partNumber,
                                    offsetBytes: BigInt(e.offsetBytes),
                                    sizeBytes: BigInt(e.sizeBytes),
                                    checksumSha256: new Uint8Array(e.checksumSha256)
                                })),
                            ...void 0 !== e.baseEtag ? {
                                precondition: {
                                    case: "baseEtag",
                                    value: st(e.baseEtag)
                                }
                            } : !0 === e.expectAbsent ? {
                                precondition: {
                                    case: "expectAbsent",
                                    value: !0
                                }
                            } : {}
                        }))
                }), e), _t(e.token, n))).instructions.map((e, t)=>{
                const n = e.relPath;
                let o = r[t]?.sha;
                try {
                    o = s.get(v(n)) ?? o;
                } catch  {}
                if (void 0 === o) throw new Error(`BCS presign write response missing requested file: ${n}`);
                return {
                    relPath: n,
                    sha: o,
                    url: e.url,
                    headers: {
                        ...e.headers
                    },
                    expiresAtMs: Number(e.expiresAtMs),
                    ...void 0 !== e.multipart ? {
                        multipart: St(e.multipart)
                    } : {},
                    ...e.primaryPreconditionFailed ? {
                        primaryPreconditionFailed: !0
                    } : {},
                    ...void 0 !== e.lockRedirect ? {
                        lockRedirect: {
                            conflictRelPath: e.lockRedirect.conflictRelPath,
                            lockExpiresAtMs: Number(e.lockRedirect.lockExpiresAtMs)
                        }
                    } : {},
                    ...void 0 !== e.conflict ? {
                        conflict: bt(e.conflict)
                    } : {}
                };
            });
        } catch (e) {
            throw Ut(e);
        }
    }
    async completeMultipartWrites({ token: e, storeId: t, completions: r, signal: n }) {
        this.invalidateListCache({
            storeId: t
        });
        try {
            const s = await this.invokeRpc((e)=>this.client.completeAgentStoreMultipartWrites(new o.bB({
                    storeId: t,
                    completions: r.map((e)=>(function(e) {
                            return new o.kk({
                                context: xt(e.context),
                                parts: e.parts.map((e)=>new o.OQ({
                                        partNumber: e.partNumber,
                                        etag: e.etag,
                                        checksumSha256: new Uint8Array(e.checksumSha256)
                                    }))
                            });
                        })(e))
                }), e), _t(e.token, n));
            return function({ inputs: e, results: t }) {
                const r = Array.from({
                    length: e.length
                });
                for (const n of t){
                    const t = Et({
                        inputCount: e.length,
                        inputIndex: n.inputIndex,
                        kind: "complete"
                    });
                    if (void 0 !== r[t]) throw new l(`BCS multipart complete response repeated inputIndex ${t}`);
                    const s = v(e[t].context.relPath), o = It({
                        relPath: n.relPath,
                        inputIndex: t,
                        kind: "complete"
                    });
                    if (o !== s) throw new l(`BCS multipart complete response relPath mismatch at inputIndex ${t}`);
                    r[t] = Ct({
                        result: n,
                        relPath: o
                    });
                }
                return Tt({
                    ordered: r,
                    kind: "complete"
                });
            }({
                inputs: r,
                results: s.results
            });
        } catch (e) {
            throw Ut(e);
        } finally{
            this.invalidateListCache({
                storeId: t
            });
        }
    }
    async abortMultipartWrites({ token: e, storeId: t, uploads: r, signal: n }) {
        try {
            const s = await this.invokeRpc((e)=>this.client.abortAgentStoreMultipartWrites(new o.mr({
                    storeId: t,
                    uploads: r.map((e)=>(function(e) {
                            return new o.Sz({
                                context: xt(e.context)
                            });
                        })(e))
                }), e), _t(e.token, n));
            return function({ inputs: e, results: t }) {
                const r = Array.from({
                    length: e.length
                });
                for (const n of t){
                    const t = Et({
                        inputCount: e.length,
                        inputIndex: n.inputIndex,
                        kind: "abort"
                    });
                    if (void 0 !== r[t]) throw new l(`BCS multipart abort response repeated inputIndex ${t}`);
                    const s = v(e[t].context.relPath), o = It({
                        relPath: n.relPath,
                        inputIndex: t,
                        kind: "abort"
                    });
                    if (o !== s) throw new l(`BCS multipart abort response relPath mismatch at inputIndex ${t}`);
                    r[t] = Pt({
                        result: n,
                        relPath: o
                    });
                }
                return Tt({
                    ordered: r,
                    kind: "abort"
                });
            }({
                inputs: r,
                results: s.results
            });
        } catch (e) {
            throw Ut(e);
        }
    }
    invalidateListCache({ storeId: e, shareId: t }) {
        const r = new Set([
            `self:${e}`
        ]);
        void 0 !== t && r.add(`share:${t}`);
        for (const e of r)this.listCacheGenerationByTarget.set(e, (this.listCacheGenerationByTarget.get(e) ?? 0) + 1), this.knownLargeTargets.delete(e);
        for (const e of this.directoryListCache.keys()){
            const t = e.split("\0", 1)[0];
            void 0 !== t && r.has(t) && this.directoryListCache.delete(e);
        }
        for (const e of this.completeFlatListCache.keys()){
            const t = e.split("\0", 1)[0];
            void 0 !== t && r.has(t) && this.completeFlatListCache.delete(e);
        }
    }
    async checkVersions({ entries: e, signal: t }) {
        const r = e[0];
        if (void 0 === r) return [];
        const n = this.client.checkAgentStoreVersions;
        if (void 0 === n) throw new l("Agent store client cannot check listing versions");
        try {
            const s = await this.invokeRpc((t)=>n.call(this.client, new o.rX({
                    entries: e.map((e, t)=>new o.eH({
                            requestId: String(t),
                            ...void 0 !== e.shareId ? {
                                shareId: e.shareId
                            } : {
                                storeId: e.storeId
                            },
                            token: e.token,
                            version: e.version,
                            preferCompleteFlatStore: e.preferCompleteFlatStore
                        }))
                }), t), _t(r.token, t));
            if (s.results.length !== e.length || s.results.some((e, t)=>e.requestId !== String(t))) throw new l(`Agent store version check answered ${s.results.length} of ${e.length} entries out of order`);
            return s.results.map((e)=>({
                    status: yt(e.status),
                    version: e.version
                }));
        } catch (e) {
            throw Ut(e);
        }
    }
    rootListingPrefersCompleteFlatStore(e) {
        return !this.isKnownLargeTarget(Dt(e));
    }
    fetchCachedDirectoryList(e) {
        if (!0 === e.signal?.aborted) {
            const t = e.signal.reason;
            return Promise.reject(t instanceof Error ? t : new DOMException("The operation was aborted", "AbortError"));
        }
        const t = this.now();
        for (const [e, r] of this.completeFlatListCache)r.expiresAtMs <= t && this.completeFlatListCache.delete(e);
        const r = Rt(e), n = this.completeFlatListCache.get(r);
        if (void 0 !== n) return Promise.resolve(L({
            files: n.files,
            relPath: e.relPath,
            tombstones: n.tombstones,
            listingComplete: !0,
            removedSubdirs: n.removedSubdirs,
            tombstoneWatermarkMs: n.tombstoneWatermarkMs,
            tombstoneFloorMs: n.tombstoneFloorMs,
            version: n.version
        }));
        const s = function({ token: e, storeId: t, relPath: r, shareId: n, tombstoneMode: s, tombstonesSinceMs: o, ifVersionEqual: i }) {
            return `${Dt({
                storeId: t,
                shareId: n
            })}\0${e.token}\0${qt(r)}\0${Mt({
                tombstoneMode: s,
                tombstonesSinceMs: o
            })}\0${i ?? ""}`;
        }(e);
        let o = this.directoryListCache.get(s);
        if (void 0 === o || o.expiresAtMs <= t) {
            for (const [e, r] of this.directoryListCache)r.expiresAtMs <= t && this.directoryListCache.delete(e);
            const r = this.fetchDirectoryList(e).then((e)=>(Ft(e) && this.directoryListCache.get(s)?.promise === r && this.directoryListCache.delete(s), e)).catch((e)=>{
                throw this.directoryListCache.get(s)?.promise === r && this.directoryListCache.delete(s), e;
            });
            o = {
                promise: r,
                expiresAtMs: t + this.directoryListCacheTtlMs
            }, this.directoryListCache.set(s, o);
        }
        return o.promise;
    }
    isKnownLargeTarget(e) {
        const t = this.knownLargeTargets.get(e);
        return void 0 !== t && (!(t <= this.now()) || (this.knownLargeTargets.delete(e), !1));
    }
    async fetchDirectoryList({ token: e, storeId: t, relPath: r, shareId: n, signal: s, tombstoneMode: i, tombstonesSinceMs: a, ifVersionEqual: l }) {
        try {
            const u = new Map, d = new Set, p = new Map, m = new Set, h = new Set, f = Dt({
                storeId: t,
                shareId: n
            }), g = this.listCacheGenerationByTarget.get(f) ?? 0, y = "" === r && !this.isKnownLargeTarget(f), w = function({ tombstoneMode: e, tombstonesSinceMs: t }) {
                switch(e){
                    case o.hw.OMIT:
                        return {
                            tombstoneMode: o.hw.OMIT
                        };
                    case o.hw.SINCE:
                        {
                            const e = Jt(t);
                            return void 0 === e ? {} : {
                                tombstoneMode: o.hw.SINCE,
                                tombstonesSinceMs: BigInt(e)
                            };
                        }
                    default:
                        return {};
                }
            }({
                tombstoneMode: i,
                tombstonesSinceMs: a
            });
            let v, _, b, S = "", k = 0, x = !1;
            const E = void 0 !== l && "" !== l, I = (e)=>{
                const t = Ot(e.tombstoneWatermarkMs), r = Ot(e.tombstoneFloorMs);
                if (!x) return v = t, _ = r, void (x = !0);
                v = Bt(v, t), _ = Bt(_, r);
            };
            do {
                if (k += 1, k > 10) throw new c("Agent store directory listing exceeded 10 pages");
                const x = await this.invokeRpc((e)=>this.client.listAgentStoreDirectory(new o.zc({
                        ...void 0 !== n ? {
                            shareId: n
                        } : {
                            storeId: t
                        },
                        relativePath: r,
                        pageSize: 1e3,
                        pageToken: S,
                        preferCompleteFlatStore: y && "" === S,
                        ...w,
                        ...E && "" === S ? {
                            ifVersionEqual: l
                        } : {}
                    }), e), _t(e.token, s));
                if (I(x), x.notModified) {
                    if ("" !== S || !E) throw new c("Agent store directory listing answered not_modified without a matching condition");
                    return {
                        files: [],
                        subdirs: [],
                        tombstones: [],
                        removedSubdirs: [],
                        listingComplete: !1,
                        notModified: !0,
                        version: "" === x.version ? l : x.version,
                        ...void 0 !== v ? {
                            tombstoneWatermarkMs: v
                        } : {},
                        ...void 0 !== _ ? {
                            tombstoneFloorMs: _
                        } : {}
                    };
                }
                if ("" === S && (b = "" === x.version ? void 0 : x.version), x.mode === o.NG.COMPLETE_FLAT_STORE) {
                    const r = x.files.map((e)=>({
                            relPath: e.relPath,
                            etag: st(e.etag),
                            size: Number(e.sizeBytes),
                            serverMtimeMs: Number(e.lastModifiedMs)
                        })), s = wt(x.tombstones);
                    if (r.length + s.length > lt) throw new c("Agent store directory listing exceeded 10000 entries");
                    const o = L({
                        files: r,
                        relPath: "",
                        tombstones: s,
                        listingComplete: !0,
                        removedSubdirs: x.removedSubdirs,
                        tombstoneWatermarkMs: v,
                        tombstoneFloorMs: _,
                        version: b
                    });
                    return (this.listCacheGenerationByTarget.get(f) ?? 0) !== g || Ft(o) || this.completeFlatListCache.set(Rt({
                        token: e,
                        storeId: t,
                        shareId: n,
                        tombstoneMode: i,
                        tombstonesSinceMs: a
                    }), {
                        files: r,
                        tombstones: s,
                        removedSubdirs: o.removedSubdirs ?? [],
                        tombstoneWatermarkMs: v,
                        tombstoneFloorMs: _,
                        version: b,
                        expiresAtMs: this.now() + this.directoryListCacheTtlMs
                    }), (this.listCacheGenerationByTarget.get(f) ?? 0) === g && this.knownLargeTargets.delete(f), o;
                }
                y && "" === S && (this.listCacheGenerationByTarget.get(f) ?? 0) === g && this.knownLargeTargets.set(f, this.now() + this.largeTargetTtlMs);
                for (const e of x.files)u.set(e.relPath, {
                    relPath: e.relPath,
                    etag: st(e.etag),
                    size: Number(e.sizeBytes),
                    serverMtimeMs: Number(e.lastModifiedMs)
                });
                for (const e of x.subdirs){
                    const t = Nt(e);
                    "" !== t && d.add(t);
                }
                for (const e of wt(x.tombstones))p.set(e.relPath, e);
                for (const e of x.removedSubdirs){
                    const t = Nt(e);
                    "" !== t && m.add(t);
                }
                for (const e of [
                    ...d
                ])m.has(e) && d.delete(e);
                if (u.size + d.size + p.size > lt) throw new c("Agent store directory listing exceeded 10000 entries");
                if (S = x.nextPageToken, "" !== S && h.has(S)) throw new c("Agent store directory listing repeated a page token");
                "" !== S && h.add(S);
            }while ("" !== S)
            return {
                files: [
                    ...u.values()
                ].sort((e, t)=>e.relPath.localeCompare(t.relPath)),
                subdirs: [
                    ...d
                ].sort(),
                tombstones: [
                    ...p.values()
                ].sort((e, t)=>e.relPath.localeCompare(t.relPath)),
                removedSubdirs: [
                    ...m
                ].sort(),
                listingComplete: !0,
                ...void 0 !== v ? {
                    tombstoneWatermarkMs: v
                } : {},
                ...void 0 !== _ ? {
                    tombstoneFloorMs: _
                } : {},
                ...void 0 !== b ? {
                    version: b
                } : {}
            };
        } catch (e) {
            throw Ut(e);
        }
    }
    async deleteFiles({ token: e, storeId: t, files: r, signal: n }) {
        for (const e of r)if (0 === st(e.baseEtag).length) throw new Error(`Agent store delete for ${e.relPath} carries an empty baseEtag`);
        this.invalidateListCache({
            storeId: t
        });
        try {
            const s = (await this.invokeRpc((e)=>this.client.deleteAgentStoreFiles(new o.uM({
                    storeId: t,
                    files: r.map((e)=>new o.gu({
                            relPath: e.relPath,
                            baseEtag: st(e.baseEtag),
                            ...void 0 !== e.mutationId ? {
                                mutationId: e.mutationId
                            } : {}
                        }))
                }), e), _t(e.token, n))).results.map((e)=>{
                const t = qt(e.relPath), r = st(e.tombstoneEtag);
                switch(e.status){
                    case o._O.DELETED:
                        return {
                            relPath: t,
                            status: "deleted",
                            tombstoneEtag: r
                        };
                    case o._O.ALREADY_DELETED:
                        return {
                            relPath: t,
                            status: "already_deleted",
                            ...r.length > 0 ? {
                                tombstoneEtag: r
                            } : {}
                        };
                    case o._O.CONFLICT:
                        {
                            const r = st(e.currentEtag);
                            return {
                                relPath: t,
                                status: "conflict",
                                ...r.length > 0 ? {
                                    currentEtag: r
                                } : {}
                            };
                        }
                    case o._O.UNSPECIFIED:
                        throw new Error(`BCS delete returned UNSPECIFIED status for ${t}`);
                    default:
                        throw new Error(`BCS delete returned an unknown status for ${t}: ${e.status}`);
                }
            });
            return this.invalidateListCache({
                storeId: t
            }), s;
        } catch (e) {
            throw Ut(e);
        }
    }
    async rmdir({ token: e, storeId: t, relPath: r, signal: n }) {
        this.invalidateListCache({
            storeId: t
        });
        try {
            await this.invokeRpc((e)=>this.client.rmdirAgentStore(new o.q5({
                    storeId: t,
                    relPath: r
                }), e), _t(e.token, n)), this.invalidateListCache({
                storeId: t
            });
        } catch (e) {
            throw Ut(e);
        }
    }
    buildCallOptions(e) {
        if (this.rpcTimeoutMs <= 0) return {
            options: e,
            timeoutSignal: void 0
        };
        const t = AbortSignal.timeout(this.rpcTimeoutMs), r = void 0 !== e?.signal ? AbortSignal.any([
            e.signal,
            t
        ]) : t;
        return {
            options: {
                ...e,
                timeoutMs: this.rpcTimeoutMs,
                signal: r
            },
            timeoutSignal: t
        };
    }
    async invokeRpc(e, t) {
        const { options: r, timeoutSignal: n } = this.buildCallOptions(t);
        return await function(e, { signal: t, timeoutSignal: r }) {
            if (void 0 === t) return e;
            if (t.aborted) return Promise.reject(ft({
                signal: t,
                timeoutSignal: r
            }));
            return new Promise((n, s)=>{
                const o = ()=>{
                    i(), s(ft({
                        signal: t,
                        timeoutSignal: r
                    }));
                }, i = ()=>{
                    t.removeEventListener("abort", o);
                };
                t.addEventListener("abort", o, {
                    once: !0
                }), e.then((e)=>{
                    i(), n(e);
                }, (e)=>{
                    i(), r?.aborted && function(e) {
                        if (e instanceof Error && "AbortError" === e.name) return !0;
                        if (e instanceof ne.T) return e.code === se.C.Canceled || e.code === se.C.DeadlineExceeded;
                        return !1;
                    }(e) ? s(gt(r)) : s(e);
                });
            });
        }(e(r), {
            signal: r?.signal,
            timeoutSignal: n
        });
    }
}
function ft({ signal: e, timeoutSignal: t }) {
    if (t?.aborted) return gt(t);
    const r = e.reason;
    if (r instanceof ne.T) return r;
    if (r instanceof Error && "AbortError" === r.name) return new ne.T(r.message, se.C.Canceled);
    const n = r instanceof Error && r.message.length > 0 ? r.message : "agent store RPC canceled";
    return new ne.T(n, se.C.Canceled);
}
function gt(e) {
    const t = e.reason;
    if (t instanceof ne.T) return t;
    const r = t instanceof Error && t.message.length > 0 ? t.message : "agent store RPC deadline exceeded";
    return new ne.T(r, se.C.DeadlineExceeded);
}
function yt(e) {
    switch(e){
        case o.UI.UNCHANGED:
            return "unchanged";
        case o.UI.CHANGED:
            return "changed";
        case o.UI.UNAUTHORIZED:
            return "unauthorized";
        default:
            return "error";
    }
}
function wt(e) {
    return (e ?? []).map((e)=>({
            relPath: qt(e.relPath),
            tombstoneEtag: st(e.tombstoneEtag),
            deletedAtMs: Number(e.deletedAtMs)
        }));
}
function vt(e) {
    switch(e){
        case "cloud":
            return o.as.CLOUD;
        case "local":
            return o.as.LOCAL;
        case "user":
            return o.as.USER;
        case "team":
            return o.as.TEAM;
        case "automation":
            return o.as.AUTOMATION;
    }
}
function _t(e, t) {
    return {
        headers: {
            [ct]: e
        },
        ...void 0 !== t ? {
            signal: t
        } : {}
    };
}
function bt(e) {
    return {
        relPath: e.relPath,
        url: e.url,
        headers: {
            ...e.headers
        },
        expiresAtMs: Number(e.expiresAtMs),
        ...void 0 !== e.multipart ? {
            multipart: St(e.multipart)
        } : {}
    };
}
function St(e) {
    if (void 0 === e.context) throw new l("BCS multipart write instruction is missing context");
    return {
        context: (t = e.context, {
            uploadId: t.uploadId,
            storeId: t.storeId,
            relPath: t.relPath,
            sizeBytes: Number(t.sizeBytes),
            sha: t.sha,
            expectedPartCount: t.expectedPartCount,
            precondition: kt(t.precondition),
            sessionId: t.sessionId
        }),
        parts: e.parts.map((e)=>({
                partNumber: e.partNumber,
                url: e.url,
                headers: {
                    ...e.headers
                },
                offsetBytes: Number(e.offsetBytes),
                sizeBytes: Number(e.sizeBytes)
            })),
        partUrlsExpiresAtMs: Number(e.partUrlsExpiresAtMs)
    };
    var t;
}
function kt(e) {
    switch(e.case){
        case "baseEtag":
            return {
                case: "baseEtag",
                value: e.value
            };
        case "expectAbsent":
            return {
                case: "expectAbsent",
                value: e.value
            };
        case void 0:
            return {
                case: void 0
            };
    }
}
function xt(e) {
    return new o.jU({
        uploadId: e.uploadId,
        storeId: e.storeId,
        relPath: e.relPath,
        sizeBytes: BigInt(e.sizeBytes),
        sha: e.sha,
        expectedPartCount: e.expectedPartCount,
        precondition: kt(e.precondition),
        sessionId: e.sessionId
    });
}
function Et({ inputCount: e, inputIndex: t, kind: r }) {
    if (!Number.isInteger(t) || t < 0 || t >= e) throw new l(`BCS multipart ${r} response returned out-of-range inputIndex ${t}`);
    return t;
}
function It(e) {
    try {
        return v(e.relPath);
    } catch  {
        throw new l(`BCS multipart ${e.kind} response returned an invalid relPath at inputIndex ${e.inputIndex}`);
    }
}
function Tt({ ordered: e, kind: t }) {
    const r = [];
    for (const [n, s] of e.entries()){
        if (void 0 === s) throw new l(`BCS multipart ${t} response missing result for inputIndex ${n}`);
        r.push(s);
    }
    return r;
}
function Ct({ result: e, relPath: t }) {
    switch(e.outcome.case){
        case "success":
            return {
                kind: "success",
                relPath: t,
                etag: st(e.outcome.value.etag)
            };
        case "failure":
            return {
                kind: "failure",
                relPath: t,
                code: At(e.outcome.value.code)
            };
        case void 0:
            return {
                kind: "failure",
                relPath: t,
                code: "internal"
            };
    }
}
function Pt({ result: e, relPath: t }) {
    switch(e.outcome.case){
        case "success":
            return {
                kind: "success",
                relPath: t,
                alreadyFinished: e.outcome.value.alreadyFinished
            };
        case "failure":
            return {
                kind: "failure",
                relPath: t,
                code: At(e.outcome.value.code)
            };
        case void 0:
            return {
                kind: "failure",
                relPath: t,
                code: "internal"
            };
    }
}
function At(e) {
    switch(e){
        case o.l4.UNSPECIFIED:
            return "internal";
        case o.l4.PRECONDITION_FAILED:
            return "precondition_failed";
        case o.l4.UPLOAD_NOT_FOUND:
            return "upload_not_found";
        case o.l4.INVALID_PARTS:
            return "invalid_parts";
        case o.l4.CHECKSUM_MISMATCH:
            return "checksum_mismatch";
        case o.l4.TRANSIENT:
            return "transient";
        case o.l4.INTERNAL:
            return "internal";
        case o.l4.RESTART_REQUIRED:
            return "restart_required";
        default:
            return "unknown";
    }
}
function Rt({ token: e, storeId: t, shareId: r, tombstoneMode: n, tombstonesSinceMs: s }) {
    return `${Dt({
        storeId: t,
        shareId: r
    })}\0${e.token}\0${Mt({
        tombstoneMode: n,
        tombstonesSinceMs: s
    })}`;
}
function Mt({ tombstoneMode: e, tombstonesSinceMs: t }) {
    switch(e){
        case o.hw.OMIT:
            return "omit";
        case o.hw.SINCE:
            return void 0 === Jt(t) ? "include" : `since:${t}`;
        default:
            return "include";
    }
}
function Jt(e) {
    if (void 0 !== e && Number.isSafeInteger(e) && !(e <= 0)) return e;
}
function Ot(e) {
    if (void 0 !== e) {
        if ("bigint" == typeof e) {
            if (e <= BigInt(0) || e > BigInt(Number.MAX_SAFE_INTEGER)) return;
            return Number(e);
        }
        if (Number.isSafeInteger(e) && !(e <= 0)) return e;
    }
}
function Bt(e, t) {
    if (void 0 !== e && void 0 !== t) return Math.min(e, t);
}
function Dt({ storeId: e, shareId: t }) {
    return void 0 !== t ? `share:${t}` : `self:${e}`;
}
function qt(e) {
    return e.replaceAll("\\", "/").replace(/^\/+/, "").replace(/\/+$/, "");
}
function Nt(e) {
    return e.replace(/\/+$/, "");
}
function Ft(e) {
    return (e.skippedUnsafeEntries ?? 0) > 0 && 0 === e.files.length;
}
function Ut(e) {
    return e instanceof ne.T ? e.code === se.C.Unauthenticated || e.code === se.C.PermissionDenied ? new i(e.message, {
        cause: e
    }) : ze(e) ? new a(e.message) : e : e;
}
class Lt {
    constructor(e = {}){
        this.inFlight = 0, this.waiting = [], this.priorityWaiting = [];
        const t = e.max ?? 4;
        if (!Number.isInteger(t) || t <= 0) throw new Error(`BoundedConcurrencyQueue max must be a positive integer, got ${t}`);
        const r = e.reservedForPriority ?? 0;
        if (!Number.isInteger(r) || r < 0) throw new Error(`BoundedConcurrencyQueue reservedForPriority must be a non-negative integer, got ${r}`);
        this.max = t, this.reservedForPriority = Math.min(r, t - 1);
    }
    async enqueue(e) {
        return await this.run(e, !1);
    }
    async enqueuePriority(e) {
        return await this.run(e, !0);
    }
    async run(e, t) {
        await this.acquire(t);
        try {
            return await e();
        } finally{
            this.inFlight--, this.drain();
        }
    }
    acquire(e) {
        return this.inFlight < this.limitFor(e) ? (this.inFlight++, Promise.resolve()) : new Promise((t)=>{
            (e ? this.priorityWaiting : this.waiting).push(t);
        });
    }
    limitFor(e) {
        return e ? this.max : this.max - this.reservedForPriority;
    }
    drain() {
        for(;;){
            const e = this.inFlight < this.max ? this.priorityWaiting.shift() : void 0;
            if (void 0 !== e) {
                this.inFlight++, e();
                continue;
            }
            const t = this.inFlight < this.limitFor(!1) ? this.waiting.shift() : void 0;
            if (void 0 === t) return;
            this.inFlight++, t();
        }
    }
}
var $t = require("./module-93181.js"), jt = require("./module-90393.js"), Gt = require("./module-84683.js"), zt = require("./module-75149.js"), Wt = require("./module-83737.js");
const Ht = "agent_store_sync.client.", Kt = 64, Vt = /^[a-zA-Z0-9_.:\-/]+$/;
function Yt(e) {
    if (0 === e.length) return "other";
    const t = e.length > Kt ? e.slice(0, Kt) : e;
    return Vt.test(t) ? t : "other";
}
class Qt {
    constructor(e){
        this.sink = e.sink, this.baseTags = {
            ...e.extraTags ?? {},
            surface: e.surface,
            [it]: e.service ?? ot
        };
    }
    bindRpcService(e) {
        this.baseTags = {
            ...this.baseTags,
            [it]: e
        };
    }
    onDiskFull(e) {
        this.increment({
            name: "disk_full",
            value: 1,
            agentId: e.agentId,
            tags: {
                op: Yt(e.op)
            }
        });
    }
    onSymlinkRefused(e) {
        this.increment({
            name: "symlink_refused",
            value: 1,
            agentId: e.agentId,
            tags: {
                op: Yt(e.op)
            }
        });
    }
    onNetworkError(e) {
        this.increment({
            name: "network_error",
            value: 1,
            agentId: e.agentId,
            tags: {
                op: Yt(e.op),
                error_class: Yt(e.errorClass),
                exhausted: e.exhausted ? "true" : "false"
            }
        });
    }
    onMintGateStateChanged(e) {
        this.increment({
            name: "mint_gate_state",
            value: 1,
            agentId: "process",
            tags: {
                from: Yt(e.from),
                to: Yt(e.to),
                reason: Yt(e.reason)
            }
        });
    }
    onThrottled(e) {
        this.increment({
            name: "throttled",
            value: 1,
            agentId: e.agentId,
            tags: {
                op: Yt(e.op),
                error_class: Yt(e.errorClass),
                exhausted: e.exhausted ? "true" : "false",
                scope: Yt(e.scope.length > 0 ? e.scope : "unknown")
            }
        });
    }
    onSyncRound(e) {
        this.increment({
            name: "sync_round",
            value: 1,
            agentId: e.agentId,
            tags: {
                schedule: Yt(e.schedule)
            }
        });
    }
    onSessionState(e) {
        const t = "active" === e.state ? 1 : 0;
        this.gauge({
            name: "session_state",
            value: t,
            agentId: e.agentId,
            tags: {
                state: "active"
            }
        }), this.gauge({
            name: "session_state",
            value: 1 === t ? 0 : 1,
            agentId: e.agentId,
            tags: {
                state: "idle"
            }
        });
    }
    recordMultipartAbandoned(e) {
        const t = {
            round_aborted: e.roundAborted ? "true" : "false"
        }, r = e.agentId;
        this.increment({
            name: "multipart_abandoned",
            value: 1,
            agentId: r,
            tags: t
        }), this.distribution({
            name: "multipart_abandoned.bytes",
            value: e.bytes,
            agentId: r,
            tags: t
        });
    }
    onRoundCompleted(e) {
        const t = {
            failed: e.failed ? "true" : "false",
            scope: Yt(e.scope)
        }, r = e.agentId;
        this.increment({
            name: "round",
            value: 1,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round_completed",
            value: 1,
            agentId: r,
            tags: t
        }), void 0 !== e.sinceLastSuccessMs && this.distribution({
            name: "round_completed.since_last_success_ms",
            value: e.sinceLastSuccessMs,
            agentId: r,
            tags: t
        }), this.distributionIfPositive({
            name: "round.duration_ms",
            value: e.durationMs,
            agentId: r,
            tags: t
        }), this.distributionIfPositive({
            name: "round.walk_ms",
            value: e.walkMs,
            agentId: r,
            tags: t
        }), this.distributionIfPositive({
            name: "round.hash_ms",
            value: e.hashMs,
            agentId: r,
            tags: t
        }), this.distributionIfPositive({
            name: "round.presign_ms",
            value: e.presignMs,
            agentId: r,
            tags: t
        }), this.distributionIfPositive({
            name: "round.upload_ms",
            value: e.uploadMs,
            agentId: r,
            tags: t
        }), this.distributionIfPositive({
            name: "round.list_ms",
            value: e.listMs,
            agentId: r,
            tags: t
        }), this.distributionIfPositive({
            name: "round.download_ms",
            value: e.downloadMs,
            agentId: r,
            tags: t
        }), this.distributionIfPositive({
            name: "round.files_pushed",
            value: e.filesPushed,
            agentId: r,
            tags: t
        }), this.distributionIfPositive({
            name: "round.files_pulled",
            value: e.filesPulled,
            agentId: r,
            tags: t
        }), this.distributionIfPositive({
            name: "round.bytes_pushed",
            value: e.bytesPushed,
            agentId: r,
            tags: t
        }), this.distributionIfPositive({
            name: "round.bytes_pulled",
            value: e.bytesPulled,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.files_skipped",
            value: e.filesSkipped,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.refusals",
            value: e.refusals,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.files_conflicted",
            value: e.filesConflicted,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.identical_content_conflicts_suppressed",
            value: e.identicalContentConflictsSuppressed ?? 0,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.conflict_protection_downgrades",
            value: e.conflictProtectionDowngrades,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.legacy_probes",
            value: e.legacyProbes,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.push_entries_parked",
            value: e.pushEntriesParked,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.pulls_deferred",
            value: e.pullsDeferred,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.pulls_skipped_pending_delete",
            value: e.pullsSkippedPendingDelete,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.files_deleted_remote",
            value: e.filesDeletedRemote,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.files_deleted_local",
            value: e.filesDeletedLocal,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.delete_conflicts",
            value: e.deleteConflicts,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.scan_deletes_journaled",
            value: e.scanDeletesJournaled,
            agentId: r,
            tags: t
        }), this.increment({
            name: "rmdir_pushed",
            value: e.rmdirPushed ?? 0,
            agentId: r,
            tags: t
        }), this.increment({
            name: "removed_dirs_applied",
            value: e.removedDirsApplied ?? 0,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.recovery_disarms",
            value: e.recoveryDisarms,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.legacy_rows_restored",
            value: e.legacyRowsRestored,
            agentId: r,
            tags: t
        }), void 0 !== e.tombstonesReceived && this.increment({
            name: "round.tombstones_received",
            value: e.tombstonesReceived,
            agentId: r,
            tags: t
        }), void 0 !== e.tombstoneCursorAdvancedMs && this.distributionIfPositive({
            name: "round.tombstone_cursor_advanced_ms",
            value: e.tombstoneCursorAdvancedMs,
            agentId: r,
            tags: t
        }), void 0 !== e.absenceDeletesApplied && this.increment({
            name: "round.absence_deletes_applied",
            value: e.absenceDeletesApplied,
            agentId: r,
            tags: t
        }), void 0 !== e.absenceDeletesSkippedModified && this.increment({
            name: "round.absence_deletes_skipped_modified",
            value: e.absenceDeletesSkippedModified,
            agentId: r,
            tags: t
        }), e.identityRecoveryWipeFailed && this.increment({
            name: "round.identity_recovery_wipe_failed",
            value: 1,
            agentId: r,
            tags: t
        }), this.increment({
            name: "round.errors",
            value: e.errorCount,
            agentId: r,
            tags: t
        }), void 0 !== e.pullOutcome && this.increment({
            name: "pull",
            value: 1,
            agentId: r,
            tags: {
                outcome: e.pullOutcome
            }
        });
        for (const t of e.remoteVersionEvents ?? [])this.increment({
            name: "version",
            value: 1,
            agentId: r,
            tags: {
                event: t.event,
                reason: t.reason
            }
        });
        void 0 !== e.versionAudit && this.increment({
            name: "version_audit",
            value: 1,
            agentId: r,
            tags: {
                result: e.versionAudit
            }
        });
    }
    syncRoundSkipped(e) {
        this.increment({
            name: "sync_round_skipped",
            value: 1,
            agentId: e.agentId,
            tags: {
                reason: Yt(e.reason)
            }
        });
    }
    onRoundLifecycle(e) {
        const t = {
            ...void 0 !== e.late ? {
                late: e.late ? "true" : "false"
            } : {},
            ...void 0 !== e.reason ? {
                reason: e.reason
            } : {}
        }, r = Object.keys(t).length > 0;
        this.increment({
            name: `round_${e.kind}`,
            value: 1,
            agentId: e.agentId,
            ...r ? {
                tags: t
            } : {}
        }), void 0 !== e.durationMs && this.distributionIfPositive({
            name: `round_${e.kind}.duration_ms`,
            value: e.durationMs,
            agentId: e.agentId,
            ...r ? {
                tags: t
            } : {}
        }), void 0 !== e.lateMs && this.distributionIfPositive({
            name: `round_${e.kind}.late_ms`,
            value: e.lateMs,
            agentId: e.agentId
        });
    }
    onLockEvent(e) {
        const t = {};
        void 0 !== e.cause && (t.cause = e.cause), void 0 !== e.holderKind && (t.holder_kind = Yt(e.holderKind)), void 0 !== e.samePid && (t.same_pid = e.samePid ? "true" : "false"), this.increment({
            name: e.kind,
            value: 1,
            agentId: e.agentId,
            ...Object.keys(t).length > 0 ? {
                tags: t
            } : {}
        });
    }
    onBlobTransferTiming(e) {
        this.distribution({
            name: `blob_put.${e.phase}_ms`,
            value: e.durationMs,
            agentId: "process",
            tags: {
                reused_socket: e.reusedSocket ? "true" : "false",
                outcome: e.outcome
            }
        });
    }
    onResumeDetected(e) {
        this.increment({
            name: "resume_detected",
            value: 1,
            agentId: e.agentId
        }), this.distributionIfPositive({
            name: "resume_detected.gap_ms",
            value: e.gapMs,
            agentId: e.agentId
        });
    }
    onSchedulerTick(e) {
        this.distribution({
            name: "scheduler_tick",
            value: e.sessions,
            agentId: "process"
        });
    }
    onVersionProbeBatch(e) {
        this.distributionIfPositive({
            name: "probe_batch_size",
            value: e.entries.length,
            agentId: "process"
        });
        for (const t of e.entries)this.increment({
            name: "probe",
            value: 1,
            agentId: t.agentId,
            tags: {
                status: t.status
            }
        });
    }
    onDirtyPassiveStalled(e) {
        this.increment({
            name: "dirty_passive_stalled",
            value: 1,
            agentId: e.agentId
        }), this.distributionIfPositive({
            name: "dirty_passive_stalled.stalled_ms",
            value: e.stalledMs,
            agentId: e.agentId
        });
    }
    recordIndexLookupClosed(e) {
        this.increment({
            name: "index_lookup_closed",
            value: 1,
            agentId: e.agentId
        });
    }
    onError(e) {
        this.increment({
            name: "error",
            value: 1,
            agentId: e.agentId,
            tags: {
                op: Yt(e.op),
                error_class: Yt(e.errorClass),
                ...void 0 === e.errorName ? {} : {
                    error_name: Yt(e.errorName)
                }
            }
        }), void 0 !== e.timeoutClass && this.increment({
            name: "operation_timeout",
            value: 1,
            agentId: e.agentId,
            tags: {
                op: Yt(e.op),
                timeout_class: e.timeoutClass
            }
        });
    }
    onConflict(e) {
        this.safe(()=>{
            this.sink.increment(`${Ht}conflict`, 1, {
                ...this.baseTags,
                store_kind: e.storeKind
            });
        });
    }
    recordStorePin(e) {
        "acquire_failed" !== e.kind ? "waited" === e.kind && void 0 !== e.waitMs && this.distribution({
            name: "store_pin.wait_ms",
            value: e.waitMs,
            agentId: "store-pin"
        }) : this.increment({
            name: "store_pin.acquire_failed",
            value: 1,
            agentId: "store-pin"
        });
    }
    recordStoreEviction(e) {
        const t = {
            outcome: Yt(e.outcome),
            reason: Yt(e.reason ?? "none"),
            mode: Yt(e.mode)
        };
        this.increment({
            name: "store_eviction.outcome",
            value: 1,
            agentId: e.mountKey,
            tags: t
        }), this.distribution({
            name: "store_eviction.hashed_bytes",
            value: e.hashedBytes,
            agentId: e.mountKey,
            tags: t
        }), this.distribution({
            name: "store_eviction.duration_ms",
            value: e.durationMs,
            agentId: e.mountKey,
            tags: t
        });
    }
    recordMountOutcome(e) {
        const t = {
            outcome: Yt(e.outcome),
            reason: Yt(e.reason),
            mount_kind: Yt(e.mountKind)
        };
        this.increment({
            name: "mount.outcome",
            value: 1,
            agentId: e.agentId,
            tags: t
        }), this.distribution({
            name: "mount.duration_ms",
            value: e.durationMs,
            agentId: e.agentId,
            tags: t
        });
    }
    recordMountRequested(e) {
        this.increment({
            name: "mount_requested",
            value: 1,
            agentId: e.agentId,
            tags: {
                reason: Yt(e.reason),
                policy: Yt(e.policy)
            }
        });
    }
    recordWriteBarrier(e) {
        const t = {
            outcome: Yt(e.outcome)
        };
        this.distributionIfPositive({
            name: "write_barrier.duration_ms",
            value: e.durationMs,
            agentId: e.agentId,
            tags: t
        }), this.increment({
            name: "write_barrier.outcome",
            value: 1,
            agentId: e.agentId,
            tags: t
        });
    }
    recordCitationStarted(e) {
        this.increment({
            name: "citation.started",
            value: 1,
            agentId: e.agentId
        });
    }
    recordCitationResolution(e) {
        const t = {
            tier: Yt(e.tier),
            outcome: Yt(e.outcome),
            reason: Yt(e.reason)
        };
        this.distribution({
            name: "citation.duration_ms",
            value: e.durationMs,
            agentId: e.agentId,
            tags: t
        }), this.increment({
            name: "citation.resolved",
            value: 1,
            agentId: e.agentId,
            tags: t
        });
    }
    recordStatFastPath(e) {
        this.increment({
            name: "stat_fast_path",
            value: 1,
            agentId: e.agentId,
            tags: {
                result: e.result
            }
        });
    }
    recordCitationStaleness(e) {
        this.increment({
            name: "citation.served_staleness",
            value: 1,
            agentId: e.agentId,
            tags: {
                state: Yt(e.state)
            }
        });
    }
    tokenMinted(e) {
        this.increment({
            name: "token_minted",
            value: 1,
            agentId: e.agentId,
            tags: {
                reason: e.reason
            }
        });
    }
    tokenRefreshUnauthorized(e) {
        this.increment({
            name: "token_refresh_unauthorized",
            value: 1,
            agentId: e.agentId,
            tags: {
                op: Yt(e.op)
            }
        });
    }
    tokenMintNegativeCached(e) {
        this.increment({
            name: "token_mint_negative_cached",
            value: 1,
            agentId: e.agentId,
            tags: {
                until_finite: Number.isFinite(e.untilMs) ? "true" : "false",
                reason: e.reason
            }
        });
    }
    tokenMintFailureCached(e) {
        this.increment({
            name: "token_mint_failure_cached",
            value: 1,
            agentId: e.agentId,
            tags: {
                kind: e.kind
            }
        });
    }
    tokenMintRetried(e) {
        this.increment({
            name: "token_mint_retried",
            value: 1,
            agentId: e.agentId,
            tags: {
                attempt: String(e.attempt)
            }
        }), Number.isFinite(e.delayMs) && e.delayMs >= 0 && this.distribution({
            name: "token_mint_retry_delay_ms",
            value: e.delayMs,
            agentId: e.agentId
        });
    }
    tokenMintRetryDenied(e) {
        this.increment({
            name: "token_mint_retry_denied",
            value: 1,
            agentId: e.agentId,
            tags: {
                reason: e.reason
            }
        });
    }
    tokenRefreshFailedKeptExisting(e) {
        this.increment({
            name: "token_refresh_failed_kept_existing",
            value: 1,
            agentId: e.agentId
        }), Number.isFinite(e.remainingMs) && e.remainingMs >= 0 && this.distribution({
            name: "token_refresh_failed_kept_existing_remaining_ms",
            value: e.remainingMs,
            agentId: e.agentId
        });
    }
    increment(e) {
        !Number.isFinite(e.value) || e.value <= 0 || this.safe(()=>{
            this.sink.increment(`${Ht}${e.name}`, e.value, this.mergeTags({
                agentId: e.agentId,
                tags: e.tags ?? {}
            }));
        });
    }
    gauge(e) {
        Number.isFinite(e.value) && this.safe(()=>{
            this.sink.gauge?.(`${Ht}${e.name}`, e.value, this.mergeTags({
                agentId: e.agentId,
                tags: e.tags ?? {}
            }));
        });
    }
    distribution(e) {
        !Number.isFinite(e.value) || e.value < 0 || this.safe(()=>{
            this.sink.distribution(`${Ht}${e.name}`, e.value, this.mergeTags({
                agentId: e.agentId,
                tags: e.tags ?? {}
            }));
        });
    }
    distributionIfPositive(e) {
        e.value > 0 && this.distribution(e);
    }
    mergeTags(e) {
        return {
            ...this.baseTags,
            store_kind: (0, Wt.Pz)(e.agentId),
            ...e.tags
        };
    }
    safe(e) {
        try {
            e();
        } catch  {}
    }
}
var Xt = require("./module-48161.js");
function Zt(e, t) {
    return tr(e, ()=>(function(e, t) {
            return nr(e, function() {
                const e = p.constants;
                let t = e.O_RDWR ?? 0;
                "number" == typeof e.O_CREAT && (t |= e.O_CREAT);
                "number" == typeof e.O_NOFOLLOW && (t |= e.O_NOFOLLOW);
                "number" == typeof e.O_CLOEXEC && (t |= e.O_CLOEXEC);
                return t;
            }(), t);
        })(e, t));
}
function er(e) {
    return tr(e, ()=>nr(e, function() {
            const e = p.constants;
            let t = e.O_RDWR ?? 0;
            return "number" == typeof e.O_NOFOLLOW && (t |= e.O_NOFOLLOW), "number" == typeof e.O_CLOEXEC && (t |= e.O_CLOEXEC), t;
        }()));
}
function tr(e, t) {
    const r = h.dirname(e), n = function(e) {
        const t = function() {
            const e = p.constants;
            let t = e.O_RDONLY ?? 0;
            "number" == typeof e.O_DIRECTORY && (t |= e.O_DIRECTORY);
            "number" == typeof e.O_NOFOLLOW && (t |= e.O_NOFOLLOW);
            "number" == typeof e.O_CLOEXEC && (t |= e.O_CLOEXEC);
            return t;
        }();
        try {
            return p.openSync(e, t);
        } catch (t) {
            if (cr(t) || lr(t) && "ENOTDIR" === t.code && function(e) {
                try {
                    return p.lstatSync(e).isSymbolicLink();
                } catch  {
                    return !1;
                }
            }(e)) throw new Wt.y$({
                code: "symlink_refused",
                message: `Refusing to open sqlite under symlinked parent: ${e}`,
                failedPath: e
            });
            throw t;
        }
    }(r);
    let s = !0;
    try {
        const o = p.fstatSync(n);
        if (!o.isDirectory()) throw new Wt.y$({
            code: "symlink_refused",
            message: `Refusing to open sqlite under non-directory parent: ${r}`,
            failedPath: r
        });
        const i = {
            dev: o.dev,
            ino: o.ino
        };
        or(i, r);
        const a = t();
        let c;
        try {
            const t = p.fstatSync(a);
            if (!t.isFile()) throw new Wt.y$({
                code: "symlink_refused",
                message: `Refusing to open non-regular sqlite path: ${e}`,
                failedPath: e
            });
            sr(e), c = {
                dev: t.dev,
                ino: t.ino
            };
        } finally{
            p.closeSync(a);
        }
        let l = !1, u = !1;
        const d = ()=>{
            l || (or(i, r), function(e, t) {
                const r = ir();
                let n;
                try {
                    n = p.openSync(e, r);
                } catch (t) {
                    if (cr(t)) throw new Wt.y$({
                        code: "symlink_refused",
                        message: `Sqlite path became symlinked between open and verification: ${e}`,
                        failedPath: e
                    });
                    throw t;
                }
                try {
                    const r = p.fstatSync(n);
                    if (sr(e), r.dev !== t.dev || r.ino !== t.ino) throw new Wt.y$({
                        code: "symlink_refused",
                        message: `Sqlite path inode drifted between open and verification (expected dev=${t.dev} ino=${t.ino}, got dev=${r.dev} ino=${r.ino}): ${e}`,
                        failedPath: e
                    });
                } finally{
                    p.closeSync(n);
                }
            }(e, c), l = !0);
        };
        return s = !1, {
            sqlitePath: e,
            verifyOpenedInode: d,
            close: ()=>{
                u || (u = !0, p.closeSync(n));
            }
        };
    } finally{
        s && p.closeSync(n);
    }
}
async function rr(e, t, r) {
    const n = ar();
    let s;
    try {
        s = await p.promises.open(e, n, r), sr(e), await s.writeFile(t, {
            encoding: "utf8"
        });
    } catch (t) {
        if (cr(t)) throw new Wt.y$({
            code: "symlink_refused",
            message: `Refusing to create lockfile at symlinked path: ${e}`,
            failedPath: e
        });
        throw t;
    } finally{
        await s?.close();
    }
}
function nr(e, t, r) {
    try {
        return void 0 === r ? p.openSync(e, t) : p.openSync(e, t, r);
    } catch (t) {
        if (cr(t)) throw new Wt.y$({
            code: "symlink_refused",
            message: `Refusing to open symlinked path: ${e}`,
            failedPath: e
        });
        throw t;
    }
}
function sr(e) {
    (0, Wt.rs)(e);
}
function or(e, t) {
    let r;
    try {
        r = p.lstatSync(t);
    } catch (e) {
        throw new Wt.y$({
            code: "symlink_refused",
            message: `Unable to lstat parent directory ${t}: ${e instanceof Error ? e.message : String(e)}`,
            failedPath: t
        });
    }
    if (r.isSymbolicLink()) throw new Wt.y$({
        code: "symlink_refused",
        message: `Parent directory became symlinked between open and verification: ${t}`,
        failedPath: t
    });
    if (r.dev !== e.dev || r.ino !== e.ino) throw new Wt.y$({
        code: "symlink_refused",
        message: `Parent directory inode drifted between open and verification (expected dev=${e.dev} ino=${e.ino}, got dev=${r.dev} ino=${r.ino}): ${t}`,
        failedPath: t
    });
}
function ir() {
    const e = p.constants;
    let t = e.O_RDONLY ?? 0;
    return "number" == typeof e.O_NOFOLLOW && (t |= e.O_NOFOLLOW), "number" == typeof e.O_CLOEXEC && (t |= e.O_CLOEXEC), t;
}
function ar() {
    const e = p.constants;
    let t = e.O_WRONLY ?? 0;
    return "number" == typeof e.O_CREAT && (t |= e.O_CREAT), "number" == typeof e.O_EXCL && (t |= e.O_EXCL), "number" == typeof e.O_NOFOLLOW && (t |= e.O_NOFOLLOW), "number" == typeof e.O_CLOEXEC && (t |= e.O_CLOEXEC), t;
}
function cr(e) {
    return !!lr(e) && ("ELOOP" === e.code || "EMLINK" === e.code || "EPERM" === e.code && "number" == typeof p.constants.O_NOFOLLOW);
}
function lr(e) {
    return e instanceof Error && "string" == typeof e.code;
}
const ur = 1e3, dr = 6e5, pr = 384;
class mr extends Error {
    constructor(e){
        super(e.message), this.code = e.code, this.lockPath = e.lockPath, this.name = "StoreLockError";
    }
}
class hr {
    constructor(e, t){
        this.options = e, this.owner = t, this.disposed = !1, this.unhealthy = !1, e.mtimeUpdateMs > 0 && (this.timer = setInterval(()=>{
            this.refreshMtime().catch(()=>{
                this.clearTimer();
            });
        }, e.mtimeUpdateMs), this.timer.unref?.());
    }
    async verifyStillOwned() {
        if (this.disposed) return !1;
        const e = await _r(this.options.lockPath, {
            fs: this.options.fs,
            throwOnInvalid: !1
        });
        return void 0 !== e && kr(e, this.owner);
    }
    markUnhealthy() {
        this.unhealthy = !0, this.clearTimer();
    }
    async dispose() {
        if (this.disposed) return;
        this.disposed = !0, this.clearTimer();
        const e = await _r(this.options.lockPath, {
            fs: this.options.fs,
            throwOnInvalid: !1
        });
        void 0 !== e && kr(e, this.owner) && await Tr(()=>this.options.fs.unlink(this.options.lockPath));
    }
    async refreshMtime() {
        if (this.disposed || this.unhealthy) return;
        const e = await _r(this.options.lockPath, this.options);
        if (this.disposed || this.unhealthy) return;
        if (void 0 === e || !kr(e, this.owner)) return void this.clearTimer();
        const t = new Date(this.options.now());
        await Tr(()=>this.options.fs.utimes(this.options.lockPath, t, t));
    }
    clearTimer() {
        void 0 !== this.timer && clearInterval(this.timer);
    }
}
async function fr(e) {
    const t = xr(e);
    return (0, Wt.Ew)(h.dirname(t.lockPath)), (0, Wt.rs)(t.lockPath), wr(t, !1);
}
async function gr(e) {
    const t = xr({
        ...e,
        windowId: "read-active-owner",
        mtimeUpdateMs: 0
    });
    (0, Wt.rs)(t.lockPath);
    const r = await _r(t.lockPath, {
        fs: t.fs,
        throwOnInvalid: !1
    });
    if (void 0 === r) return;
    if (Sr(r, t), !t.processExists(r.pid)) return;
    if (t.now() - await br(t) > t.staleLockMs) return;
    const n = await _r(t.lockPath, {
        fs: t.fs,
        throwOnInvalid: !1
    });
    return void 0 !== n && kr(r, n) ? r : void 0;
}
function yr(e = process.platform) {
    if ("win32" === e) return {
        sid: Er()
    };
    const t = process.geteuid?.();
    if (void 0 === t) throw new mr({
        code: "missing_identity",
        message: "Could not determine current uid for store lock",
        lockPath: ""
    });
    return {
        uid: t
    };
}
async function wr(e, t) {
    const r = function(e) {
        return {
            uid: e.identity.uid,
            sid: e.identity.sid,
            pid: e.pid,
            hostname: e.hostname,
            windowId: e.windowId,
            acquiredAt: e.now(),
            ...void 0 === e.ownerKind || 0 === e.ownerKind.length ? {} : {
                kind: e.ownerKind
            }
        };
    }(e);
    try {
        return await e.fs.writeLockExclusive(e.lockPath, JSON.stringify(r), pr), {
            kind: "acquired",
            lock: new hr(e, r)
        };
    } catch (e) {
        if (!(e instanceof Error) || "EEXIST" !== Cr(e)) throw e;
    }
    const n = await _r(e.lockPath, {
        fs: e.fs,
        throwOnInvalid: !1
    });
    if (void 0 === n) return t ? {
        kind: "held",
        owner: void 0
    } : await vr(e);
    if (Sr(n, e), t) return {
        kind: "held",
        owner: n
    };
    if (!e.processExists(n.pid)) return await vr(e);
    if (e.now() - await br(e) <= e.staleLockMs) return {
        kind: "held",
        owner: n
    };
    await async function(e) {
        if (e <= 0) return;
        await new Promise((t)=>{
            setTimeout(t, e);
        });
    }(e.staleRecheckDelayMs);
    return e.now() - await br(e) <= e.staleLockMs ? {
        kind: "held",
        owner: n
    } : await vr(e);
}
async function vr(e) {
    return await Tr(()=>e.fs.unlink(e.lockPath)), await wr(e, !0);
}
async function _r(e, t) {
    let r, n;
    try {
        r = await t.fs.readFile(e, "utf8");
    } catch (r) {
        if (r instanceof Error && "ENOENT" === Cr(r)) return;
        if (r instanceof Error && ("EACCES" === Cr(r) || "EPERM" === Cr(r))) {
            if (!1 === t.throwOnInvalid) return;
            throw new mr({
                code: "invalid_lockfile",
                message: `Unreadable agent store lockfile: ${e}`,
                lockPath: e
            });
        }
        throw r;
    }
    try {
        n = JSON.parse(r);
    } catch  {
        if (!1 === t.throwOnInvalid) return;
        throw new mr({
            code: "invalid_lockfile",
            message: `Invalid agent store lockfile JSON: ${e}`,
            lockPath: e
        });
    }
    const s = function(e) {
        if (!function(e) {
            return "object" == typeof e && null !== e && !Array.isArray(e);
        }(e)) return;
        const { pid: t, hostname: r, windowId: n, acquiredAt: s, kind: o, uid: i, sid: a } = e;
        if ("number" != typeof t || "string" != typeof r || "string" != typeof n || "number" != typeof s || void 0 !== i && "number" != typeof i || void 0 !== a && "string" != typeof a) return;
        return {
            pid: t,
            hostname: r,
            windowId: n,
            acquiredAt: s,
            ..."string" == typeof o ? {
                kind: o
            } : {},
            uid: i,
            sid: a
        };
    }(n);
    if (void 0 === s) {
        if (!1 === t.throwOnInvalid) return;
        throw new mr({
            code: "invalid_lockfile",
            message: `Invalid agent store lockfile contents: ${e}`,
            lockPath: e
        });
    }
    return s;
}
async function br(e) {
    try {
        return (await e.fs.stat(e.lockPath)).mtimeMs;
    } catch (e) {
        if (e instanceof Error && "ENOENT" === Cr(e)) return 0;
        throw e;
    }
}
function Sr(e, t) {
    if (e.uid !== t.identity.uid) throw new mr({
        code: "foreign_identity_lock",
        message: `Agent store lock is held by uid ${e.uid}, expected ${t.identity.uid}`,
        lockPath: t.lockPath
    });
    if (e.sid !== t.identity.sid) throw new mr({
        code: "foreign_identity_lock",
        message: `Agent store lock is held by sid ${e.sid}, expected ${t.identity.sid}`,
        lockPath: t.lockPath
    });
}
function kr(e, t) {
    return e.pid === t.pid && e.hostname === t.hostname && e.windowId === t.windowId && e.acquiredAt === t.acquiredAt;
}
function xr(e) {
    return {
        lockPath: h.resolve(e.lockPath),
        windowId: e.windowId,
        ownerKind: e.ownerKind,
        hostname: e.hostname ?? Xt.hostname(),
        identity: e.identity ?? yr(),
        now: e.now ?? Date.now,
        pid: e.pid ?? process.pid,
        processExists: e.processExists ?? Ir,
        staleLockMs: e.staleLockMs ?? dr,
        staleRecheckDelayMs: e.staleRecheckDelayMs ?? 2e3,
        mtimeUpdateMs: e.mtimeUpdateMs ?? ur,
        fs: e.fs ?? {
            readFile: (e, t)=>p.promises.readFile(e, t),
            stat: (e)=>p.promises.stat(e),
            unlink: (e)=>p.promises.unlink(e),
            utimes: (e, t, r)=>p.promises.utimes(e, t, r),
            writeLockExclusive: (e, t, r)=>rr(e, t, r)
        }
    };
}
function Er() {
    const e = (0, Wt.Yy)()?.sid;
    if (void 0 === e) throw new mr({
        code: "missing_identity",
        message: "Could not determine current Windows lock identity",
        lockPath: ""
    });
    return e;
}
function Ir(e) {
    try {
        return process.kill(e, 0), !0;
    } catch (e) {
        return e instanceof Error && "EPERM" === Cr(e);
    }
}
async function Tr(e) {
    try {
        await e();
    } catch (e) {
        if (!(e instanceof Error) || "ENOENT" !== Cr(e)) throw e;
    }
}
function Cr(e) {
    if ("code" in e && "string" == typeof e.code) return e.code;
}
const Pr = "exclusive-mutation.lock";
function Ar(e) {
    return h.join(h.dirname(h.resolve(e)), Wt.kR, Pr);
}
async function Rr(e) {
    const t = Ar(e.filesDir);
    (0, Wt.Ew)(h.dirname(t));
    const r = await fr({
        lockPath: t,
        windowId: e.ownerId
    });
    return "acquired" === r.kind ? r.lock : void 0;
}
async function Mr(e) {
    return await gr({
        lockPath: Ar(e.filesDir)
    });
}
const Jr = Object.freeze({
    policy: "recover",
    startJitterMs: 3e4,
    probeBaseMs: 3e5,
    probeMaxMs: 36e5,
    rememberedMountsMax: 16
}), Or = 3e4, Br = 3e5, Dr = 36e5, qr = 864e5, Nr = .2, Fr = {
    kind: "never-started"
};
function Ur(e) {
    const t = e.attempts ?? 0;
    return {
        kind: "down",
        reason: e.reason,
        since: e.since,
        attempts: t,
        nextProbeAtMs: $r({
            since: e.since,
            attempts: t,
            retryAfterMs: e.retryAfterMs,
            config: e.config,
            random: e.random
        })
    };
}
function Lr(e) {
    return "down" !== e.previous.kind ? e.previous : Ur({
        reason: e.previous.reason,
        since: e.now,
        attempts: e.previous.attempts + 1,
        config: e.config,
        random: e.random
    });
}
function $r(e) {
    const t = e.config ?? Jr, r = Math.max(1, t.probeBaseMs), n = Math.max(r, t.probeMaxMs), s = Math.max(0, Math.floor(e.attempts)), o = Math.min(r * 2 ** s, n), i = void 0 !== e.retryAfterMs ? Math.min(qr, Math.max(0, Math.floor(e.retryAfterMs))) : void 0, a = void 0 !== i ? Math.max(o, i) : o, c = (l = (e.random ?? Math.random)(), Number.isFinite(l) ? Math.min(Math.max(l, 0), 1) : 0);
    var l;
    const u = a * (1 - Nr + 2 * c * Nr);
    let d = Math.max(1, Math.floor(u));
    return void 0 !== i && (d = Math.max(d, i)), e.since + d;
}
function jr(e) {
    return "extension_deactivate" === e ? "extension_deactivate" : "gate_off" === e || e.startsWith("gate_off:") ? "gate_off" : "server_disabled";
}
function Gr(e) {
    switch(e.phase.kind){
        case "starting":
        case "stopping":
            return "none";
        case "down":
            {
                if ("extension_deactivate" === e.phase.reason) return "none";
                const t = e.config ?? Jr;
                if ("disabled" === e.gateState && "server_disabled" === e.phase.reason) return "stand-down";
                if ("latch" === t.policy) return "none";
                if ("disabled" === e.gateState) return "none";
                if ("gate_off" === e.phase.reason) return "enabled" === e.gateState ? "start" : "none";
                if ("enabled" === e.gateState && "disabled" === e.previousGateState) return "start";
                if ("gate_change" === (e.trigger ?? "gate_change") && "enabled" !== e.gateState) return "none";
                return (e.now ?? 0) >= e.phase.nextProbeAtMs ? "start" : "none";
            }
        case "never-started":
            return "enabled" === e.gateState ? "start" : "none";
        case "up":
            return "disabled" === e.gateState ? "stand-down" : "none";
        default:
            return e.phase;
    }
}
function zr(e) {
    return "start" === e.action || ("down" !== e.phase?.kind || "gate_off" !== e.phase.reason || "down" !== e.fromPhase?.kind || "gate_off" === e.fromPhase.reason) && "unknown" === e.gateState && "latch" !== e.policy && "gate_change" === (e.trigger ?? "gate_change");
}
function Wr(e) {
    return "disabled" === e.gateState || "stopping" !== e.phase.kind && ("down" !== e.phase.kind || "extension_deactivate" !== e.phase.reason) && ("down" !== e.phase.kind || "server_disabled" !== e.phase.reason) && (!e.coreReady || void 0 === e.gateState);
}
function Hr(e) {
    if ("down" !== e.fromPhase.kind) return 0;
    const t = e.jitterMs ?? Or;
    if (t <= 0) return 0;
    const r = (e.random ?? Math.random)(), n = Number.isFinite(r) ? Math.min(Math.max(r, 0), 1) : 0;
    return Math.floor(n * t);
}
function Kr(e) {
    return "down" !== e.kind ? "start" : "gate_off" === e.reason ? "recovered_gate_change" : "recovered_server_disabled";
}
function Vr(e) {
    return "server_disabled" !== e.reason || void 0 === e.previousDownAttempts ? 0 : e.previousDownAttempts + 1;
}
const Yr = 16;
function Qr(e) {
    const t = Math.max(0, e.max ?? Yr), r = [], n = new Set, s = [
        ...[
            ...e.mounts
        ].reverse(),
        ...e.remembered ?? []
    ];
    for (const e of s){
        if (r.length >= t) break;
        "self" !== e.mountKind && "peer" !== e.mountKind && "share" !== e.mountKind || n.has(e.mountKey) || (n.add(e.mountKey), r.push(e));
    }
    return r;
}
function Xr(e) {
    return e.slice().reverse();
}
function Zr(e, t) {
    return Xr(e).slice(t).reverse();
}
function en(e) {
    const t = new Set;
    for (const r of e.pending)t.add(r.mountKey);
    const r = [], n = new Map;
    for (const s of e.live)n.set(s.mountKey, s), t.has(s.mountKey) || r.push(s);
    return Qr({
        mounts: r,
        remembered: (e.replayComplete ? e.pending.filter((e)=>n.has(e.mountKey)) : e.pending).map((e)=>n.get(e.mountKey) ?? e),
        max: e.max
    });
}
function tn(e) {
    switch(e.mountKind){
        case "self":
            return {
                kind: "self",
                agentId: e.remoteTarget.agentId
            };
        case "peer":
            return {
                kind: "peer",
                agentId: e.remoteTarget.agentId,
                ...void 0 !== e.alias ? {
                    alias: e.alias
                } : {},
                ...!0 === e.isProjectStore ? {
                    isProjectStore: !0
                } : {}
            };
        case "share":
            return {
                kind: "share",
                shareId: e.remoteTarget.shareId,
                ...void 0 !== e.alias ? {
                    alias: e.alias
                } : {}
            };
        default:
            return;
    }
}
function rn(e) {
    if ("latch" !== (e.config ?? Jr).policy && "down" === e.phase.kind && "extension_deactivate" !== e.phase.reason && "gate_off" !== e.phase.reason) return Math.max(0, e.phase.nextProbeAtMs - e.now);
}
function nn(e) {
    const t = rn(e);
    return void 0 !== t && t > 0;
}
function sn(e) {
    if ("probe_timer" === e.trigger) return !1;
    const t = rn(e);
    return void 0 !== t && t <= 0;
}
function on(e) {
    const t = rn(e);
    return void 0 !== t && t <= 0 ? "probe_timer" : e.trigger;
}
function an(e) {
    return Gr({
        phase: e.stoodDownForSession ? Ur({
            reason: "gate_off",
            since: 0
        }) : e.coreUp ? {
            kind: "up"
        } : Fr,
        gateState: e.gateState
    });
}
function cn(e) {
    return "down" === e.kind && ("gate_off" === e.reason || "server_disabled" === e.reason);
}
function ln(e) {
    if ("down" === e.phase.kind && "server_disabled" === e.phase.reason && "gate_off" === e.downReason) return Ur({
        reason: "gate_off",
        since: e.now,
        attempts: Vr({
            reason: e.downReason,
            previousDownAttempts: e.previousDownAttempts
        }),
        retryAfterMs: e.retryAfterMs,
        config: e.config
    });
}
function un(e) {
    return "stopping" === e.kind || "down" === e.kind;
}
function dn(e) {
    switch(e.kind){
        case "never-started":
        case "starting":
        case "up":
            return e.kind;
        case "stopping":
            return "stopping";
        case "down":
            return "down";
        default:
            return e;
    }
}
function pn(e) {
    return `${dn(e.from)} -> ${dn(e.to)} (${e.reason})`;
}
const mn = BigInt(1e6);
function hn(e, t) {
    return "all" === e || "posix" === e && "win32" !== t;
}
function fn(e) {
    return hn(e.mode, e.platform) ? function(e) {
        const t = e.recorded, r = e.live;
        if (!e.synced || void 0 === t || 1 !== r.nlink || void 0 === r.mtimeNs || void 0 === r.ctimeNs || void 0 === r.inoNs || void 0 === r.devNs) return !1;
        if (void 0 !== e.indexSize && e.indexSize !== t.size) return !1;
        if (r.size !== t.size || r.mtimeNs !== t.mtimeNs || r.ctimeNs !== t.ctimeNs || r.inoNs !== t.ino || r.devNs !== t.dev) return !1;
        const n = Number.isFinite(e.racyMarginMs) ? e.racyMarginMs : 0, s = Number(r.ctimeNs / mn);
        return t.recordedMs - s >= n;
    }(e) ? {
        action: "skip"
    } : {
        action: "hash"
    } : {
        action: "off"
    };
}
function gn(e) {
    if (null === e.stat_size || null === e.stat_mtime_ns || null === e.stat_ctime_ns || null === e.stat_ino || null === e.stat_dev || null === e.stat_recorded_ms) return;
    if (!Number.isSafeInteger(e.stat_size) || e.stat_size < 0) return;
    if (!Number.isSafeInteger(e.stat_recorded_ms)) return;
    const t = yn(e.stat_mtime_ns), r = yn(e.stat_ctime_ns), n = yn(e.stat_ino), s = yn(e.stat_dev);
    return void 0 !== t && void 0 !== r && void 0 !== n && void 0 !== s ? {
        size: e.stat_size,
        mtimeNs: t,
        ctimeNs: r,
        ino: n,
        dev: s,
        recordedMs: e.stat_recorded_ms
    } : void 0;
}
function yn(e) {
    if (/^\d+$/.test(e)) return BigInt(e);
}
function wn(e) {
    if (!Number.isSafeInteger(e.expectedSize) || e.expectedSize < 0) return;
    let t;
    try {
        t = p.lstatSync(e.absPath, {
            bigint: !0
        });
    } catch  {
        return;
    }
    return t.isSymbolicLink() || !t.isFile() || t.size !== BigInt(e.expectedSize) || void 0 !== e.expectedIno && t.ino !== e.expectedIno || void 0 !== e.expectedDev && t.dev !== e.expectedDev ? void 0 : {
        size: e.expectedSize,
        mtimeNs: t.mtimeNs,
        ctimeNs: t.ctimeNs,
        ino: t.ino,
        dev: t.dev,
        recordedMs: e.recordedMs
    };
}
const vn = 5, _n = "deletion_armed", bn = "files_root_dev", Sn = "files_root_ino", kn = "tombstone_cursor_ms", xn = "last_complete_round_ms", En = "last_listing_applied_ms", In = "index_created_ms", Tn = "root_id", Cn = "tombstone_rounds_since_include", Pn = "tombstone_last_include_ms", An = "remote_version", Rn = "remote_version_listed_ms";
class Mn extends Error {
    constructor(e, t){
        super(t), this.code = e, this.name = "LocalIndexError";
    }
}
const Jn = new Map;
class On {
    constructor(e, t){
        this.indexPath = e, this.core = t, this.closed = !1;
    }
    static open(e, t) {
        const r = h.resolve(e), n = Jn.get(r);
        if (void 0 !== n) return On.attach(n, !0 === t.statSchemaEnabled);
        const s = Bn.openNew(r, t);
        try {
            return On.attach(s, !0 === t.statSchemaEnabled);
        } catch (e) {
            throw s.abandon(), e;
        }
    }
    close() {
        this.closed || (this.closed = !0, this.core.release(this));
    }
    isClosed() {
        return this.closed;
    }
    setStatSchemaEnabled(e) {
        this.closed || this.core.setVote(this, e);
    }
    getFile(e) {
        return this.withCore((t)=>t.getFile(e));
    }
    listFiles() {
        return this.withCore((e)=>e.listFiles());
    }
    hasLiveDescendantFiles(e) {
        return this.withCore((t)=>t.hasLiveDescendantFiles(e));
    }
    hasLiveFilesUnder(e) {
        return this.withCore((t)=>t.hasLiveFilesUnder(e));
    }
    upsertFile(e) {
        this.withCore((t)=>t.upsertFile(e));
    }
    listPendingDeletes() {
        return this.withCore((e)=>e.listPendingDeletes());
    }
    hasPendingDelete(e) {
        return this.withCore((t)=>t.hasPendingDelete(e));
    }
    hasPendingDeletesUnder(e) {
        return this.withCore((t)=>t.hasPendingDeletesUnder(e));
    }
    upsertPendingDelete(e) {
        this.withCore((t)=>t.upsertPendingDelete(e));
    }
    removePendingDelete(e) {
        return this.withCore((t)=>t.removePendingDelete(e));
    }
    listPendingRmdirs() {
        return this.withCore((e)=>e.listPendingRmdirs());
    }
    hasPendingRmdir(e) {
        return this.withCore((t)=>t.hasPendingRmdir(e));
    }
    upsertPendingRmdir(e) {
        this.withCore((t)=>t.upsertPendingRmdir(e));
    }
    removePendingRmdir(e) {
        return this.withCore((t)=>t.removePendingRmdir(e));
    }
    clearPendingDeletes() {
        return this.withCore((e)=>e.clearPendingDeletes());
    }
    disarmDeletionAndClearPending() {
        return this.withCore((e)=>e.disarmDeletionAndClearPending());
    }
    bindRootId(e) {
        return this.withCore((t)=>t.bindRootId(e));
    }
    armDeletionWithIdentity(e) {
        this.withCore((t)=>t.armDeletionWithIdentity(e));
    }
    deleteFile(e) {
        return this.withCore((t)=>t.deleteFile(e));
    }
    clearRecordedStat(e) {
        this.withCore((t)=>t.clearRecordedStat(e));
    }
    getMeta(e) {
        return this.withCore((t)=>t.getMeta(e));
    }
    setMeta(e) {
        this.withCore((t)=>t.setMeta(e));
    }
    deleteMeta(e) {
        return this.withCore((t)=>t.deleteMeta(e));
    }
    static attach(e, t) {
        const r = new On(e.indexPath, e);
        return e.register(r, t), Jn.set(e.indexPath, e), r;
    }
    assertOpen() {
        if (this.closed) throw new Mn("closed", "agent store local index is closed");
    }
    withCore(e) {
        return this.assertOpen(), e(this.core);
    }
}
class Bn {
    static openNew(e, t) {
        let r;
        (0, Wt.rs)(e), (0, Wt.Ew)(h.dirname(e)), (0, Wt.rs)(e);
        try {
            const t = p.statSync(e).mtimeMs;
            Number.isFinite(t) && t > 0 && (r = Math.floor(t));
        } catch  {}
        const n = Zt(e, 384);
        let s, o;
        try {
            return s = new t.sqlite(n.sqlitePath), n.verifyOpenedInode(), Gn(e), o = new Bn(e, s, n), s = void 0, o.migrate(r), o;
        } catch (e) {
            throw void 0 !== o ? o.abandon() : (s?.close(), n.close()), e;
        }
    }
    constructor(e, t, r){
        this.indexPath = e, this.db = t, this.connectionClosed = !1, this.statSchemaEnabled = !1, this.leases = new Set, this.votes = new Map, this.opened = r;
    }
    register(e, t) {
        this.leases.add(e), this.votes.set(e, t);
        try {
            this.applyVotes(), 1 === this.leases.size && this.restrictFileModes();
        } catch (t) {
            if (this.leases.delete(e), this.votes.delete(e), this.leases.size > 0) try {
                this.applyVotes();
            } catch  {}
            throw t;
        }
    }
    setVote(e, t) {
        if (!this.leases.has(e)) return;
        const r = !0 === this.votes.get(e);
        this.votes.set(e, t);
        try {
            this.applyVotes();
        } catch (t) {
            this.votes.set(e, r);
            try {
                this.applyVotes();
            } catch  {}
            throw t;
        }
    }
    release(e) {
        this.leases.delete(e) && (this.votes.delete(e), 0 !== this.leases.size ? this.applyVotes() : this.closeConnection());
    }
    abandon() {
        this.leases.clear(), this.votes.clear(), this.closeConnection();
    }
    applyVotes() {
        let e = !1;
        if (this.votes.size > 0) {
            e = !0;
            for (const t of this.votes.values())if (!t) {
                e = !1;
                break;
            }
        }
        this.applyStatSchema(e);
    }
    closeConnection() {
        if (!this.connectionClosed) {
            this.connectionClosed = !0, Jn.get(this.indexPath) === this && Jn.delete(this.indexPath);
            try {
                this.db.close();
            } finally{
                this.opened?.close(), this.opened = void 0;
            }
        }
    }
    getFile(e) {
        const t = this.db.prepare(`SELECT ${qn} FROM files WHERE rel_path = ?`).get(e);
        return void 0 === t ? void 0 : $n(t);
    }
    listFiles() {
        return this.db.prepare(`SELECT ${qn} FROM files ORDER BY rel_path ASC`).all().map($n);
    }
    hasLiveDescendantFiles(e) {
        if ("" === e) return this.hasLiveFilesUnder("");
        const t = jn(e);
        return void 0 !== this.db.prepare("SELECT 1 AS ok FROM files\n         WHERE state != 'tombstoned'\n           AND rel_path >= ? AND rel_path < ?\n         LIMIT 1").get(t.start, t.end);
    }
    hasLiveFilesUnder(e) {
        if ("" === e) {
            return void 0 !== this.db.prepare("SELECT 1 AS ok FROM files WHERE state != 'tombstoned' LIMIT 1").get();
        }
        const t = jn(e);
        return void 0 !== this.db.prepare("SELECT 1 AS ok FROM files\n         WHERE state != 'tombstoned'\n           AND (rel_path = ? OR (rel_path >= ? AND rel_path < ?))\n         LIMIT 1").get(e, t.start, t.end);
    }
    upsertFile(e) {
        const t = e.state ?? "live", r = "tombstoned" === t ? e.tombstoneEtag : null, n = "tombstoned" === t ? e.deletedAtMs : null, s = "tombstoned" !== t && this.statSchemaEnabled ? e.recordedStat : void 0, o = this.statSchemaEnabled ? `stat_size = ${Un},\n          stat_mtime_ns = ${Ln("stat_mtime_ns")},\n          stat_ctime_ns = ${Ln("stat_ctime_ns")},\n          stat_ino = ${Ln("stat_ino")},\n          stat_dev = ${Ln("stat_dev")},\n          stat_recorded_ms = ${Ln("stat_recorded_ms")}` : "stat_size = NULL,\n          stat_mtime_ns = NULL,\n          stat_ctime_ns = NULL,\n          stat_ino = NULL,\n          stat_dev = NULL,\n          stat_recorded_ms = NULL";
        this.db.prepare(`\n        INSERT INTO files (\n          rel_path,\n          last_synced_sha,\n          last_seen_etag,\n          size,\n          last_synced_ms,\n          direction,\n          state,\n          tombstone_etag,\n          deleted_at_ms,\n          stat_size,\n          stat_mtime_ns,\n          stat_ctime_ns,\n          stat_ino,\n          stat_dev,\n          stat_recorded_ms\n        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\n        ON CONFLICT(rel_path) DO UPDATE SET\n          last_synced_sha = excluded.last_synced_sha,\n          last_seen_etag = excluded.last_seen_etag,\n          size = excluded.size,\n          last_synced_ms = excluded.last_synced_ms,\n          direction = excluded.direction,\n          state = excluded.state,\n          tombstone_etag = excluded.tombstone_etag,\n          deleted_at_ms = excluded.deleted_at_ms,\n          ${o}\n      `).run(e.relPath, e.lastSyncedSha, e.lastSeenEtag ?? null, e.size, e.lastSyncedMs, e.direction, t, r ?? null, n ?? null, s?.size ?? null, void 0 === s ? null : s.mtimeNs.toString(), void 0 === s ? null : s.ctimeNs.toString(), void 0 === s ? null : s.ino.toString(), void 0 === s ? null : s.dev.toString(), s?.recordedMs ?? null), this.restrictFileModes();
    }
    listPendingDeletes() {
        return this.db.prepare("SELECT rel_path, base_etag, requested_at_ms, mutation_id FROM pending_deletes ORDER BY rel_path ASC").all().map((e)=>({
                relPath: e.rel_path,
                baseEtag: e.base_etag,
                requestedAtMs: e.requested_at_ms,
                mutationId: e.mutation_id ?? void 0
            }));
    }
    hasPendingDelete(e) {
        return void 0 !== this.db.prepare("SELECT rel_path FROM pending_deletes WHERE rel_path = ?").get(e);
    }
    hasPendingDeletesUnder(e) {
        if ("" === e) {
            return void 0 !== this.db.prepare("SELECT 1 AS ok FROM pending_deletes LIMIT 1").get();
        }
        const t = jn(e);
        return void 0 !== this.db.prepare("SELECT 1 AS ok FROM pending_deletes\n         WHERE rel_path = ? OR (rel_path >= ? AND rel_path < ?)\n         LIMIT 1").get(e, t.start, t.end);
    }
    upsertPendingDelete(e) {
        this.db.prepare("\n        INSERT INTO pending_deletes (\n          rel_path,\n          base_etag,\n          requested_at_ms,\n          mutation_id\n        ) VALUES (?, ?, ?, ?)\n        ON CONFLICT(rel_path) DO UPDATE SET\n          base_etag = excluded.base_etag,\n          requested_at_ms = excluded.requested_at_ms,\n          mutation_id = excluded.mutation_id\n      ").run(e.relPath, e.baseEtag, e.requestedAtMs, e.mutationId ?? null), this.restrictFileModes();
    }
    removePendingDelete(e) {
        return this.db.prepare("DELETE FROM pending_deletes WHERE rel_path = ?").run(e).changes > 0;
    }
    listPendingRmdirs() {
        return this.db.prepare("SELECT rel_path, requested_at_ms FROM pending_rmdirs ORDER BY (LENGTH(rel_path) - LENGTH(REPLACE(rel_path, '/', ''))) DESC, rel_path ASC").all().map((e)=>({
                relPath: e.rel_path,
                requestedAtMs: e.requested_at_ms
            }));
    }
    hasPendingRmdir(e) {
        return void 0 !== this.db.prepare("SELECT rel_path FROM pending_rmdirs WHERE rel_path = ?").get(e);
    }
    upsertPendingRmdir(e) {
        this.db.prepare("\n        INSERT INTO pending_rmdirs (rel_path, requested_at_ms)\n        VALUES (?, ?)\n        ON CONFLICT(rel_path) DO UPDATE SET\n          requested_at_ms = excluded.requested_at_ms\n      ").run(e.relPath, e.requestedAtMs), this.restrictFileModes();
    }
    removePendingRmdir(e) {
        return this.db.prepare("DELETE FROM pending_rmdirs WHERE rel_path = ?").run(e).changes > 0;
    }
    clearPendingDeletes() {
        const e = this.db.prepare("DELETE FROM pending_deletes").run();
        return this.db.prepare("DELETE FROM pending_rmdirs").run(), e.changes;
    }
    disarmDeletionAndClearPending() {
        const e = this.db.transaction(()=>this.clearDeletionRights())();
        return this.restrictFileModes(), e;
    }
    clearDeletionRights() {
        return this.db.prepare("\n        INSERT INTO meta (key, value)\n        VALUES (?, ?)\n        ON CONFLICT(key) DO UPDATE SET value = excluded.value\n      ").run(_n, "0"), this.db.prepare("DELETE FROM meta WHERE key = ?").run(bn), this.db.prepare("DELETE FROM meta WHERE key = ?").run(Sn), this.db.prepare("DELETE FROM meta WHERE key = ?").run(An), this.db.prepare("DELETE FROM meta WHERE key = ?").run(Rn), this.db.prepare("DELETE FROM pending_rmdirs").run(), this.db.prepare("DELETE FROM pending_deletes").run().changes;
    }
    bindRootId(e) {
        const t = this.getMeta(Tn);
        return void 0 === t ? (this.setMeta({
            key: Tn,
            value: e
        }), "adopted") : t === e ? "bound" : (this.db.transaction(()=>{
            this.clearDeletionRights(), this.db.prepare("\n          INSERT INTO meta (key, value)\n          VALUES (?, ?)\n          ON CONFLICT(key) DO UPDATE SET value = excluded.value\n        ").run(Tn, e);
        })(), this.restrictFileModes(), "rebound");
    }
    armDeletionWithIdentity(e) {
        this.db.transaction(()=>{
            const t = this.db.prepare("\n        INSERT INTO meta (key, value)\n        VALUES (?, ?)\n        ON CONFLICT(key) DO UPDATE SET value = excluded.value\n      ");
            t.run(_n, "1"), t.run(bn, String(e.dev)), t.run(Sn, String(e.ino));
        })(), this.restrictFileModes();
    }
    deleteFile(e) {
        const t = this.db.prepare("DELETE FROM files WHERE rel_path = ?").run(e);
        return t.changes > 0 && this.restrictFileModes(), t.changes > 0;
    }
    clearRecordedStat(e) {
        this.db.prepare("UPDATE files SET\n          stat_size = NULL,\n          stat_mtime_ns = NULL,\n          stat_ctime_ns = NULL,\n          stat_ino = NULL,\n          stat_dev = NULL,\n          stat_recorded_ms = NULL\n        WHERE rel_path = ?").run(e).changes > 0 && this.restrictFileModes();
    }
    getMeta(e) {
        const t = this.db.prepare("SELECT value FROM meta WHERE key = ?").get(e);
        return t?.value;
    }
    setMeta(e) {
        this.db.prepare("\n        INSERT INTO meta (key, value)\n        VALUES (?, ?)\n        ON CONFLICT(key) DO UPDATE SET value = excluded.value\n      ").run(e.key, e.value), this.restrictFileModes();
    }
    deleteMeta(e) {
        const t = this.db.prepare("DELETE FROM meta WHERE key = ?").run(e);
        return t.changes > 0 && this.restrictFileModes(), t.changes > 0;
    }
    applyStatSchema(e) {
        if (this.ensureStatColumns(), e) return this.getMeta("schema_version") !== String(vn) && this.setMeta({
            key: "schema_version",
            value: String(vn)
        }), void (this.statSchemaEnabled = !0);
        const t = this.getMeta("schema_version"), r = this.db.prepare(`SELECT 1 AS ok FROM files WHERE ${Nn} LIMIT 1`).get();
        t !== String(4) || void 0 !== r ? (this.restrictFileModes(), this.db.transaction(()=>{
            void 0 !== r && this.db.exec(Fn), t !== String(4) && this.db.prepare("\n            INSERT INTO meta (key, value)\n            VALUES (?, ?)\n            ON CONFLICT(key) DO UPDATE SET value = excluded.value\n          ").run("schema_version", String(4));
        })(), this.statSchemaEnabled = !1) : this.statSchemaEnabled = !1;
    }
    migrate(e) {
        this.db.pragma("journal_mode = WAL"), this.db.pragma("synchronous = NORMAL"), this.db.pragma("busy_timeout = 5000"), this.db.exec("\n      CREATE TABLE IF NOT EXISTS meta (\n        key TEXT PRIMARY KEY,\n        value TEXT NOT NULL\n      );\n    ");
        const t = this.getMeta("schema_version");
        if (void 0 === t) return this.createCurrentSchema(), void this.ensureIndexCreatedMs(e);
        const r = Number(t);
        if (!Number.isInteger(r) || r < 1 || r > vn) throw new Mn("unsupported_schema_version", `Unsupported agent store index schema version: ${t}`);
        this.createFilesTableIfNeeded(), r < 4 && (this.deleteMeta(An), this.deleteMeta(Rn)), r < 2 && this.migrateV1ToV2(), r < 3 && this.migrateV2ToV3(), r < 4 && this.migrateV3ToV4(), this.ensureStatColumns(), this.ensureIndexCreatedMs(e);
    }
    ensureIndexCreatedMs(e) {
        const t = this.getMeta(In);
        if (void 0 !== t && "" !== t) {
            const e = Number(t);
            if (Number.isSafeInteger(e) && e > 0) return;
        }
        const r = void 0 !== e && e > 0 ? e : Date.now();
        this.setMeta({
            key: In,
            value: String(r)
        });
    }
    createCurrentSchema() {
        this.createFilesTableIfNeeded(), this.createPendingDeletesTableIfNeeded(), this.createPendingRmdirsTableIfNeeded(), this.setMeta({
            key: "schema_version",
            value: String(4)
        });
    }
    createFilesTableIfNeeded() {
        this.db.exec("\n      CREATE TABLE IF NOT EXISTS files (\n        rel_path TEXT PRIMARY KEY,\n        last_synced_sha TEXT NOT NULL,\n        last_seen_etag TEXT,\n        size INTEGER NOT NULL,\n        last_synced_ms INTEGER NOT NULL,\n        direction TEXT NOT NULL CHECK(direction IN ('pulled', 'pushed')),\n        state TEXT NOT NULL DEFAULT 'live' CHECK(state IN ('live', 'tombstoned')),\n        tombstone_etag TEXT,\n        deleted_at_ms INTEGER,\n        stat_size INTEGER,\n        stat_mtime_ns TEXT,\n        stat_ctime_ns TEXT,\n        stat_ino TEXT,\n        stat_dev TEXT,\n        stat_recorded_ms INTEGER\n      );\n    ");
    }
    createPendingDeletesTableIfNeeded() {
        this.db.exec("\n      CREATE TABLE IF NOT EXISTS pending_deletes (\n        rel_path TEXT PRIMARY KEY,\n        base_etag TEXT NOT NULL,\n        requested_at_ms INTEGER NOT NULL,\n        mutation_id TEXT\n      );\n    ");
    }
    migrateV1ToV2() {
        const e = this.db.prepare("PRAGMA table_info(files)").all();
        e.some((e)=>"last_seen_sha" === e.name) && this.db.exec("ALTER TABLE files RENAME COLUMN last_seen_sha TO last_synced_sha"), e.some((e)=>"last_seen_etag" === e.name) || this.db.exec("ALTER TABLE files ADD COLUMN last_seen_etag TEXT"), this.setMeta({
            key: "schema_version",
            value: "2"
        });
    }
    migrateV2ToV3() {
        const e = this.db.prepare("PRAGMA table_info(files)").all();
        e.some((e)=>"state" === e.name) || this.db.exec("ALTER TABLE files ADD COLUMN state TEXT NOT NULL DEFAULT 'live' CHECK(state IN ('live', 'tombstoned'))"), e.some((e)=>"tombstone_etag" === e.name) || this.db.exec("ALTER TABLE files ADD COLUMN tombstone_etag TEXT"), e.some((e)=>"deleted_at_ms" === e.name) || this.db.exec("ALTER TABLE files ADD COLUMN deleted_at_ms INTEGER"), this.createPendingDeletesTableIfNeeded(), this.setMeta({
            key: "schema_version",
            value: "3"
        });
    }
    migrateV3ToV4() {
        this.createPendingRmdirsTableIfNeeded(), this.setMeta({
            key: "schema_version",
            value: "4"
        });
    }
    ensureStatColumns() {
        const e = this.db.prepare("PRAGMA table_info(files)").all(), t = new Set(e.map((e)=>e.name)), r = (e, r)=>{
            t.has(e) || this.db.exec(`ALTER TABLE files ADD COLUMN ${e} ${r}`);
        };
        r("stat_size", "INTEGER"), r("stat_mtime_ns", "TEXT"), r("stat_ctime_ns", "TEXT"), r("stat_ino", "TEXT"), r("stat_dev", "TEXT"), r("stat_recorded_ms", "INTEGER");
    }
    createPendingRmdirsTableIfNeeded() {
        this.db.exec("\n      CREATE TABLE IF NOT EXISTS pending_rmdirs (\n        rel_path TEXT PRIMARY KEY,\n        requested_at_ms INTEGER NOT NULL\n      );\n    ");
    }
    restrictFileModes() {
        Gn(this.indexPath);
    }
}
function Dn(e, t) {
    return On.open(e, t);
}
const qn = "rel_path, last_synced_sha, last_seen_etag, size, last_synced_ms, direction, state, tombstone_etag, deleted_at_ms, stat_size, stat_mtime_ns, stat_ctime_ns, stat_ino, stat_dev, stat_recorded_ms", Nn = "stat_size IS NOT NULL OR stat_mtime_ns IS NOT NULL OR stat_ctime_ns IS NOT NULL OR stat_ino IS NOT NULL OR stat_dev IS NOT NULL OR stat_recorded_ms IS NOT NULL", Fn = `UPDATE files SET\n  stat_size = NULL,\n  stat_mtime_ns = NULL,\n  stat_ctime_ns = NULL,\n  stat_ino = NULL,\n  stat_dev = NULL,\n  stat_recorded_ms = NULL\n WHERE ${Nn}`, Un = "CASE\n            WHEN excluded.state = 'tombstoned' THEN NULL\n            WHEN excluded.stat_size IS NOT NULL THEN excluded.stat_size\n            WHEN excluded.last_synced_sha = files.last_synced_sha AND excluded.size = files.size THEN files.stat_size\n            ELSE NULL\n          END";
function Ln(e) {
    return `CASE\n            WHEN excluded.state = 'tombstoned' THEN NULL\n            WHEN excluded.stat_size IS NOT NULL THEN excluded.${e}\n            WHEN excluded.last_synced_sha = files.last_synced_sha AND excluded.size = files.size THEN files.${e}\n            ELSE NULL\n          END`;
}
function $n(e) {
    const t = gn(e);
    return {
        relPath: e.rel_path,
        lastSyncedSha: e.last_synced_sha,
        lastSeenEtag: e.last_seen_etag ?? void 0,
        size: e.size,
        lastSyncedMs: e.last_synced_ms,
        direction: e.direction,
        state: e.state,
        tombstoneEtag: e.tombstone_etag ?? void 0,
        deletedAtMs: e.deleted_at_ms ?? void 0,
        ...void 0 === t ? {} : {
            recordedStat: t
        }
    };
}
function jn(e) {
    return {
        start: `${e}/`,
        end: `${e}0`
    };
}
function Gn(e) {
    for (const t of [
        e,
        `${e}-wal`,
        `${e}-shm`
    ])p.existsSync(t) && p.chmodSync(t, 384);
}
function zn(e, t) {
    const r = h.resolve(e);
    let n;
    try {
        n = p.lstatSync(r);
    } catch (e) {
        if (Vn(e) && "ENOENT" === e.code) return {
            kind: "absent"
        };
        throw e;
    }
    if (n.isSymbolicLink() || !n.isFile()) throw new Wt.y$({
        code: "symlink_refused",
        message: `Refusing to audit a non-regular index: ${r}`,
        failedPath: r
    });
    if (0 === n.size && !function(e) {
        try {
            const t = p.lstatSync(`${e}-wal`);
            return !t.isFile() || t.size > 0;
        } catch (e) {
            if (Vn(e) && "ENOENT" === e.code) return !1;
            throw e;
        }
    }(r)) return {
        kind: "absent"
    };
    (0, Wt.rs)(r);
    const s = er(r);
    let o;
    try {
        o = new t.sqlite(s.sqlitePath, {
            fileMustExist: !0
        }), s.verifyOpenedInode();
        const e = function(e) {
            const t = e.prepare("SELECT value FROM meta WHERE key = 'schema_version'").get(), r = t?.value ?? "", n = Number(r);
            if (!Number.isInteger(n) || n < 1 || n > vn) return {
                kind: "unsupported",
                raw: r
            };
            return {
                kind: "ok",
                version: n
            };
        }(o);
        if ("unsupported" === e.kind) return o.close(), s.close(), o = void 0, {
            kind: "unsupported_schema",
            version: e.raw
        };
        const r = new Wn(o, s, e.version);
        return o = void 0, {
            kind: "open",
            index: r
        };
    } catch (e) {
        throw o?.close(), s.close(), e;
    }
}
class Wn {
    constructor(e, t, r){
        this.db = e, this.opened = t, this.version = r, this.closed = !1;
    }
    journalMode() {
        this.assertOpen();
        const e = this.db.pragma("journal_mode", {
            simple: !0
        });
        return "string" == typeof e ? e : "";
    }
    getMeta(e) {
        this.assertOpen();
        const t = this.db.prepare("SELECT value FROM meta WHERE key = ?").get(e);
        return t?.value;
    }
    listFiles() {
        if (this.assertOpen(), !this.hasTable("files")) throw new Kn("agent store index has no files table");
        const e = this.columnNames("files"), t = e.has("last_synced_sha") ? "last_synced_sha" : e.has("last_seen_sha") ? "last_seen_sha" : void 0;
        if (void 0 === t || !e.has("rel_path") || !e.has("size")) throw new Kn("agent store index files table is missing its content columns");
        return this.db.prepare(`\n      SELECT\n        rel_path,\n        ${t} AS last_synced_sha,\n        ${e.has("last_seen_etag") ? "last_seen_etag" : "NULL"} AS last_seen_etag,\n        size,\n        ${e.has("last_synced_ms") ? "last_synced_ms" : "0"} AS last_synced_ms,\n        ${e.has("direction") ? "direction" : "'pulled'"} AS direction,\n        ${e.has("state") ? "state" : "'live'"} AS state,\n        ${e.has("tombstone_etag") ? "tombstone_etag" : "NULL"} AS tombstone_etag,\n        ${e.has("deleted_at_ms") ? "deleted_at_ms" : "NULL"} AS deleted_at_ms,\n        ${e.has("stat_size") ? "stat_size" : "NULL"} AS stat_size,\n        ${e.has("stat_mtime_ns") ? "stat_mtime_ns" : "NULL"} AS stat_mtime_ns,\n        ${e.has("stat_ctime_ns") ? "stat_ctime_ns" : "NULL"} AS stat_ctime_ns,\n        ${e.has("stat_ino") ? "stat_ino" : "NULL"} AS stat_ino,\n        ${e.has("stat_dev") ? "stat_dev" : "NULL"} AS stat_dev,\n        ${e.has("stat_recorded_ms") ? "stat_recorded_ms" : "NULL"} AS stat_recorded_ms\n      FROM files\n      ORDER BY rel_path ASC\n    `).all().map(Hn);
    }
    listPendingDeletes() {
        if (this.assertOpen(), !this.hasTable("pending_deletes")) return [];
        const e = this.columnNames("pending_deletes");
        if (!e.has("rel_path") || !e.has("base_etag")) throw new Kn("agent store index pending_deletes table is missing its columns");
        return this.db.prepare(`\n      SELECT\n        rel_path,\n        base_etag,\n        ${e.has("requested_at_ms") ? "requested_at_ms" : "0"} AS requested_at_ms,\n        ${e.has("mutation_id") ? "mutation_id" : "NULL"} AS mutation_id\n      FROM pending_deletes\n      ORDER BY rel_path ASC\n    `).all().map((e)=>({
                relPath: e.rel_path,
                baseEtag: e.base_etag,
                requestedAtMs: e.requested_at_ms,
                ...null === e.mutation_id ? {} : {
                    mutationId: e.mutation_id
                }
            }));
    }
    listPendingRmdirs() {
        if (this.assertOpen(), !this.hasTable("pending_rmdirs")) return [];
        return this.db.prepare("\n      SELECT rel_path, requested_at_ms\n      FROM pending_rmdirs\n      ORDER BY rel_path ASC\n    ").all().map((e)=>({
                relPath: e.rel_path,
                requestedAtMs: e.requested_at_ms
            }));
    }
    close() {
        this.closed || (this.closed = !0, this.db.close(), this.opened.close());
    }
    assertOpen() {
        if (this.closed) throw new Error("agent store audit index is closed");
    }
    hasTable(e) {
        return void 0 !== this.db.prepare("SELECT 1 AS ok FROM sqlite_master WHERE type = 'table' AND name = ?").get(e);
    }
    columnNames(e) {
        const t = "files" === e ? "PRAGMA table_info(files)" : "pending_deletes" === e ? "PRAGMA table_info(pending_deletes)" : "PRAGMA table_info(pending_rmdirs)", r = this.db.prepare(t).all();
        return new Set(r.map((e)=>e.name));
    }
}
function Hn(e) {
    if ("pulled" !== e.direction && "pushed" !== e.direction) throw new Kn(`agent store index has an unknown direction: ${e.direction}`);
    if ("live" !== e.state && "tombstoned" !== e.state) throw new Kn(`agent store index has an unknown file state: ${e.state}`);
    const t = gn(e);
    return {
        relPath: e.rel_path,
        lastSyncedSha: e.last_synced_sha,
        lastSeenEtag: e.last_seen_etag ?? void 0,
        size: e.size,
        lastSyncedMs: e.last_synced_ms,
        direction: e.direction,
        state: e.state,
        tombstoneEtag: e.tombstone_etag ?? void 0,
        deletedAtMs: e.deleted_at_ms ?? void 0,
        ...void 0 === t ? {} : {
            recordedStat: t
        }
    };
}
class Kn extends Error {
    constructor(e){
        super(e), this.code = "audit_unreadable", this.name = "AuditReadError";
    }
}
function Vn(e) {
    return e instanceof Error && "string" == typeof e.code;
}
var Yn = require("./module-61933.js");
function Qn(e) {
    return "lazy" !== e.policy ? {
        action: "mount",
        reason: e.reason
    } : !0 === e.resumeRequested || e.indexPopulated || (0, Yn.PZ)(e.agentId) ? {
        action: "mount",
        reason: "resume"
    } : {
        action: "defer"
    };
}
const Xn = Object.freeze({
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
function Zn({ agentId: e, summary: t, sinceLastSuccessMs: r }) {
    return {
        agentId: e,
        durationMs: t.durationMs,
        filesPushed: t.filesPushed,
        filesPulled: t.filesPulled,
        filesSkipped: t.filesSkipped,
        bytesPushed: t.bytesPushed,
        bytesPulled: t.bytesPulled,
        refusals: t.refusals,
        filesConflicted: t.filesConflicted,
        identicalContentConflictsSuppressed: t.identicalContentConflictsSuppressed ?? 0,
        conflictProtectionDowngrades: t.conflictProtectionDowngrades,
        legacyProbes: t.legacyProbes,
        pushEntriesParked: t.pushEntriesParked,
        pullsDeferred: t.pullsDeferred,
        pullsSkippedPendingDelete: t.pullsSkippedPendingDelete,
        filesDeletedRemote: t.filesDeletedRemote,
        filesDeletedLocal: t.filesDeletedLocal,
        ...void 0 !== t.tombstonesReceived ? {
            tombstonesReceived: t.tombstonesReceived
        } : {},
        ...void 0 !== t.tombstoneCursorAdvancedMs ? {
            tombstoneCursorAdvancedMs: t.tombstoneCursorAdvancedMs
        } : {},
        ...void 0 !== t.absenceDeletesApplied ? {
            absenceDeletesApplied: t.absenceDeletesApplied
        } : {},
        ...void 0 !== t.absenceDeletesSkippedModified ? {
            absenceDeletesSkippedModified: t.absenceDeletesSkippedModified
        } : {},
        deleteConflicts: t.deleteConflicts,
        scanDeletesJournaled: t.scanDeletesJournaled,
        rmdirPushed: t.rmdirPushed ?? 0,
        removedDirsApplied: t.removedDirsApplied ?? 0,
        recoveryDisarms: t.recoveryDisarms,
        identityRecoveryWipeFailed: t.identityRecoveryWipeFailed,
        legacyRowsRestored: t.legacyRowsRestored,
        listingComplete: t.listingComplete,
        ...void 0 !== r ? {
            sinceLastSuccessMs: r
        } : {},
        errorCount: t.errors.length,
        failed: t.errors.length > 0,
        walkMs: t.walkMs ?? 0,
        hashMs: t.hashMs ?? 0,
        presignMs: t.presignMs ?? 0,
        uploadMs: t.uploadMs ?? 0,
        listMs: t.listMs ?? 0,
        downloadMs: t.downloadMs ?? 0,
        scope: t.scope ?? "full",
        ...void 0 !== t.pullOutcome ? {
            pullOutcome: t.pullOutcome
        } : {},
        ...void 0 !== t.remoteVersionEvents && t.remoteVersionEvents.length > 0 ? {
            remoteVersionEvents: [
                ...t.remoteVersionEvents
            ]
        } : {},
        ...void 0 !== t.versionAudit ? {
            versionAudit: t.versionAudit
        } : {}
    };
}
function es(e, t) {
    if (void 0 !== e) try {
        e.addBreadcrumb(t);
    } catch  {}
}
const ts = 3e5;
class rs {
    constructor(e = {}){
        if (this.diskFullLastEmittedMs = new Map, this.emitter = e.emitter ?? {}, this.breadcrumbs = e.breadcrumbs, this.diskFullRepeatMs = e.diskFullRepeatMs ?? ts, this.now = e.now ?? Date.now, !Number.isFinite(this.diskFullRepeatMs) || this.diskFullRepeatMs < 0) throw new RangeError("AggregatingAgentStoreMetricsEmitter diskFullRepeatMs must be finite and >= 0");
    }
    bindRpcService(e) {
        this.emitter instanceof Qt && this.emitter.bindRpcService(e);
    }
    onDiskFull(e) {
        const t = this.diskFullLastEmittedMs.get(e.agentId), r = this.now();
        void 0 !== t && r - t < this.diskFullRepeatMs || (this.emitter.onDiskFull?.(e), this.diskFullLastEmittedMs.set(e.agentId, r), this.warnBreadcrumb("disk_full", {
            agentId: e.agentId,
            op: e.op
        }));
    }
    onSymlinkRefused(e) {
        this.emitter.onSymlinkRefused?.(e), this.warnBreadcrumb("symlink_refused", {
            agentId: e.agentId,
            op: e.op,
            relPathHash: e.relPathHash
        });
    }
    onNetworkError(e) {
        this.emitter.onNetworkError?.(e), e.exhausted && this.warnBreadcrumb("network_error_exhausted", {
            agentId: e.agentId,
            op: e.op,
            errorClass: e.errorClass,
            attempt: e.attempt
        });
    }
    onMintGateStateChanged(e) {
        this.emitter.onMintGateStateChanged?.(e);
    }
    onThrottled(e) {
        this.emitter.onThrottled?.(e), e.exhausted && this.warnBreadcrumb("throttled_exhausted", {
            agentId: e.agentId,
            op: e.op,
            errorClass: e.errorClass,
            attempt: e.attempt,
            retryAfterMs: e.retryAfterMs,
            scope: e.scope
        });
    }
    onRoundCompleted(e) {
        this.emitter.onRoundCompleted?.(e);
    }
    recordMultipartAbandoned(e) {
        this.emitter.recordMultipartAbandoned?.(e);
    }
    onSyncRound(e) {
        this.emitter.onSyncRound?.(e);
    }
    onSessionState(e) {
        this.emitter.onSessionState?.(e);
    }
    syncRoundSkipped(e) {
        this.emitter.syncRoundSkipped?.(e);
    }
    onRoundLifecycle(e) {
        this.emitter.onRoundLifecycle?.(e), "rearmed" !== e.kind ? "timeout" === e.kind && this.warnBreadcrumb("round_timeout", {
            agentId: e.agentId,
            durationMs: e.durationMs,
            lateMs: e.lateMs,
            late: e.late,
            ...void 0 !== e.reason ? {
                reason: e.reason
            } : {}
        }) : this.emit("info", "round_rearmed", {
            agentId: e.agentId,
            durationMs: e.durationMs,
            lateMs: e.lateMs
        });
    }
    onBlobTransferTiming(e) {
        this.emitter.onBlobTransferTiming?.(e);
    }
    onLockEvent(e) {
        this.emitter.onLockEvent?.(e), "passive_took_over" !== e.kind ? "lock_contended" !== e.kind ? "lock_relinquished" !== e.kind ? this.warnBreadcrumb(e.kind, {
            agentId: e.agentId
        }) : this.emit("exclusive_claim" === e.cause ? "info" : "warning", e.kind, {
            agentId: e.agentId,
            cause: e.cause
        }) : this.emit("info", e.kind, {
            agentId: e.agentId,
            holderKind: e.holderKind,
            samePid: e.samePid
        }) : this.emit("info", e.kind, {
            agentId: e.agentId
        });
    }
    onResumeDetected(e) {
        this.emitter.onResumeDetected?.(e), this.warnBreadcrumb("resume_detected", {
            agentId: e.agentId,
            gapMs: e.gapMs
        });
    }
    onDirtyPassiveStalled(e) {
        this.emitter.onDirtyPassiveStalled?.(e), this.warnBreadcrumb("dirty_passive_stalled", {
            agentId: e.agentId,
            stalledMs: e.stalledMs
        });
    }
    onSchedulerTick(e) {
        this.emitter.onSchedulerTick?.(e);
    }
    onVersionProbeBatch(e) {
        this.emitter.onVersionProbeBatch?.(e);
    }
    onError(e) {
        this.emitter.onError?.(e), this.errorBreadcrumb("error", {
            agentId: e.agentId,
            op: e.op,
            errorClass: e.errorClass
        });
    }
    recordIndexLookupClosed(e) {
        this.emitter.recordIndexLookupClosed?.(e);
    }
    recordMountRequested(e) {
        this.emitter.recordMountRequested?.(e);
    }
    recordMountOutcome(e) {
        this.emitter.recordMountOutcome?.(e);
    }
    recordWriteBarrier(e) {
        this.emitter.recordWriteBarrier?.(e);
    }
    recordCitationStarted(e) {
        this.emitter.recordCitationStarted?.(e);
    }
    recordCitationResolution(e) {
        this.emitter.recordCitationResolution?.(e);
    }
    recordCitationStaleness(e) {
        this.emitter.recordCitationStaleness?.(e);
    }
    recordStatFastPath(e) {
        this.emitter.recordStatFastPath?.(e);
    }
    recordStorePin(e) {
        this.emitter.recordStorePin?.(e);
    }
    recordStoreEviction(e) {
        this.emitter.recordStoreEviction?.(e);
    }
    onConflict(e) {
        this.emitter.onConflict?.(e), this.emit("info", "conflict_file", {
            agentId: e.agentId,
            storeKind: e.storeKind,
            relPathHash: e.relPathHash,
            conflictRelPathHash: e.conflictRelPathHash
        });
    }
    tokenMinted(e) {
        this.emitter.tokenMinted?.(e);
    }
    tokenRefreshUnauthorized(e) {
        this.emitter.tokenRefreshUnauthorized?.(e), this.warnBreadcrumb("token_refresh_unauthorized", {
            agentId: e.agentId,
            op: e.op
        });
    }
    tokenMintNegativeCached(e) {
        this.emitter.tokenMintNegativeCached?.(e);
    }
    tokenMintFailureCached(e) {
        this.emitter.tokenMintFailureCached?.(e);
    }
    tokenMintRetried(e) {
        this.emitter.tokenMintRetried?.(e);
    }
    tokenMintRetryDenied(e) {
        this.emitter.tokenMintRetryDenied?.(e);
    }
    tokenRefreshFailedKeptExisting(e) {
        this.emitter.tokenRefreshFailedKeptExisting?.(e);
    }
    warnBreadcrumb(e, t) {
        this.emit("warning", e, t);
    }
    errorBreadcrumb(e, t) {
        this.emit("error", e, t);
    }
    emit(e, t, r) {
        es(this.breadcrumbs, {
            category: "agent_store_sync",
            level: e,
            message: t,
            data: r
        });
    }
}
class ns {
    constructor(e){
        this.options = e, this.inFlight = new Map, this.quiesceTimers = new Map, this.windowHidden = !1, this.disposed = !1;
    }
    noteTurn(e, t) {
        if (this.disposed) return;
        const r = e.trim();
        if (0 === r.length) return;
        const n = this.options.idleQuiesceMs() > 0;
        if ("start" === t) return this.clearQuiesceTimer(r), this.inFlight.set(r, (this.inFlight.get(r) ?? 0) + 1), void (n && this.options.setActivity(r, this.windowHidden ? "idle" : "active"));
        const s = (this.inFlight.get(r) ?? 0) - 1;
        if (s > 0) return void this.inFlight.set(r, s);
        if (s < 0) return;
        if (this.inFlight.delete(r), !n) return;
        if (this.windowHidden) return void this.options.setActivity(r, "idle");
        this.clearQuiesceTimer(r);
        const o = this.options.idleQuiesceMs();
        let i;
        i = this.options.schedule(()=>{
            this.quiesceTimers.get(r) === i && this.quiesceTimers.delete(r), this.inFlight.has(r) || this.disposed || this.options.setActivity(r, "idle");
        }, o), this.quiesceTimers.set(r, i);
    }
    noteWindowFocused(e) {
        if (this.disposed) return;
        const t = this.options.idleQuiesceMs() > 0;
        if (!e) {
            if (this.windowHidden = !0, !t) return;
            return this.clearAllQuiesceTimers(), void this.options.quiesceSelfSessions();
        }
        const r = this.windowHidden;
        if (this.windowHidden = !1, t && r) for (const e of this.inFlight.keys())this.options.setActivity(e, "active");
    }
    dispose() {
        this.disposed = !0, this.clearAllQuiesceTimers(), this.inFlight.clear();
    }
    clearQuiesceTimer(e) {
        this.quiesceTimers.get(e)?.dispose(), this.quiesceTimers.delete(e);
    }
    clearAllQuiesceTimers() {
        for (const e of this.quiesceTimers.values())e.dispose();
        this.quiesceTimers.clear();
    }
}
const ss = Symbol.for("cursor.agentStoreConversationTurnListeners");
function os() {
    const e = globalThis;
    let t = e[ss];
    return void 0 === t && (t = new Set, e[ss] = t), t;
}
function is(e) {
    const t = os();
    return t.add(e), ()=>{
        t.delete(e);
    };
}
function as(e, t) {
    for (const r of os())try {
        r(e, t);
    } catch  {}
}
function cs(e) {
    const t = new Qt({
        sink: e.sink,
        surface: e.surface,
        extraTags: e.extraTags,
        service: e.service
    });
    return {
        emitter: new rs({
            emitter: t,
            breadcrumbs: e.breadcrumbs,
            diskFullRepeatMs: e.diskFullRepeatMs
        }),
        pathHashSalt: e.pathHashSalt
    };
}
class ls {
    constructor(e = {}){
        this.state = "closed", this.untilMs = 0, this.probeInFlight = !1, this.failures = [], this.enabled = !0, this.generation = 0;
        const t = e.openThreshold ?? 5;
        if (!Number.isInteger(t) || t < 1) throw new RangeError(`AgentStoreMintGate openThreshold must be an integer >= 1, got ${t}`);
        this.openThreshold = t, this.windowMs = n({
            value: e.windowMs ?? 3e4,
            name: "windowMs",
            context: "AgentStoreMintGate"
        });
        const r = n({
            value: e.openBaseMs ?? 5e3,
            name: "openBaseMs",
            context: "AgentStoreMintGate"
        }), s = n({
            value: e.openMaxMs ?? 12e4,
            name: "openMaxMs",
            context: "AgentStoreMintGate"
        });
        if (r > s) throw new RangeError(`AgentStoreMintGate openBaseMs (${r}) must be <= openMaxMs (${s})`);
        this.openBaseMs = r, this.openMaxMs = s, this.now = e.now ?? Date.now, this.random = e.random ?? Math.random, this.onStateChanged = e.onStateChanged, this.resolveEnabled = e.enabled, this.openBackoff = this.createOpenBackoff(), this.syncEnabledFromResolver();
    }
    get remainingMs() {
        return this.refreshState(), this.enabled && "closed" !== this.state ? Math.max(0, this.untilMs - this.now()) : 0;
    }
    get currentState() {
        return this.refreshState(), this.state;
    }
    setTimings(e) {
        if (this.syncEnabledFromResolver(), void 0 !== e.openThreshold) {
            if (!Number.isInteger(e.openThreshold) || e.openThreshold < 1) throw new RangeError(`AgentStoreMintGate openThreshold must be an integer >= 1, got ${e.openThreshold}`);
            this.openThreshold = e.openThreshold;
        }
        void 0 !== e.windowMs && (this.windowMs = n({
            value: e.windowMs,
            name: "windowMs",
            context: "AgentStoreMintGate"
        }));
        const t = e.openBaseMs ?? this.openBaseMs, r = e.openMaxMs ?? this.openMaxMs, s = n({
            value: t,
            name: "openBaseMs",
            context: "AgentStoreMintGate"
        }), o = n({
            value: r,
            name: "openMaxMs",
            context: "AgentStoreMintGate"
        });
        if (s > o) throw new RangeError(`AgentStoreMintGate openBaseMs (${s}) must be <= openMaxMs (${o})`);
        if (s !== this.openBaseMs || o !== this.openMaxMs) {
            const e = this.openBackoff.failures;
            this.openBaseMs = s, this.openMaxMs = o, this.openBackoff = this.createOpenBackoff(), this.openBackoff.restoreFailures(e);
        }
        this.enabled && "closed" === this.state && (this.prune(), this.failures.length >= this.openThreshold && this.open("threshold", this.lastError?.retryAfterMs));
    }
    setEnabled(e) {
        this.enabled = e, e || (this.failures = [], this.lastError = void 0, this.generation += 1, this.probeInFlight = !1, this.untilMs = 0, this.openBackoff.recordSuccess(), "closed" !== this.state && this.transition("closed", "probe_succeeded"));
    }
    createOpenBackoff() {
        return new s({
            baseDelayMs: this.openBaseMs,
            maxDelayMs: this.openMaxMs,
            jitter: .2,
            random: this.random
        });
    }
    peek() {
        return this.refreshState(), this.enabled ? "open" === this.state || "half_open" === this.state && this.probeInFlight || "closed" === this.state && (this.prune(), this.failures.length >= this.openThreshold) ? {
            allowed: !1,
            error: this.blockedError()
        } : {
            allowed: !0,
            probe: "half_open" === this.state,
            generation: this.generation
        } : {
            allowed: !0,
            probe: !1,
            generation: this.generation
        };
    }
    begin() {
        const e = this.peek();
        return e.allowed && this.enabled ? (e.probe && (this.probeInFlight = !0), e) : e;
    }
    end(e, t) {
        if (this.syncEnabledFromResolver(), !this.enabled) return;
        if (void 0 !== t && t.generation !== this.generation) return;
        if (e.ok) return this.probeInFlight = !1, void this.close("probe_succeeded");
        if (!(!1 !== e.transient)) return this.probeInFlight = !1, void ("half_open" === this.state && this.close("probe_succeeded"));
        if (this.lastError = e.error, "open" !== this.state) {
            if ("half_open" === this.state) {
                if (void 0 !== t && !t.probe) return;
                return this.probeInFlight = !1, void this.open("probe_failed", e.error.retryAfterMs);
            }
            this.failures.push(this.now()), this.prune(), this.failures.length >= this.openThreshold && this.open("threshold", e.error.retryAfterMs);
        } else !0 === t?.probe && (this.probeInFlight = !1);
    }
    syncEnabledFromResolver() {
        if (void 0 === this.resolveEnabled) return;
        let e;
        try {
            e = this.resolveEnabled();
        } catch  {
            return;
        }
        e !== this.enabled && this.setEnabled(e);
    }
    refreshState() {
        this.syncEnabledFromResolver(), "open" === this.state && this.now() >= this.untilMs && this.transition("half_open", "retry_after");
    }
    prune() {
        const e = this.now() - this.windowMs;
        this.failures.length > 0 && this.failures[0] <= e && (this.failures = this.failures.filter((t)=>t > e));
    }
    open(e, t) {
        const r = this.openBackoff.recordFailure(), n = void 0 !== t ? Math.max(r, t) : r;
        this.untilMs = this.now() + Math.max(1, Math.min(this.openMaxMs, n)), this.generation += 1, this.transition("open", e);
    }
    close(e) {
        this.failures = [], this.openBackoff.recordSuccess(), this.untilMs = 0, this.lastError = void 0, this.generation += 1, this.transition("closed", e);
    }
    transition(e, t) {
        const r = this.state;
        if (r !== e) {
            this.state = e;
            try {
                this.onStateChanged?.({
                    from: r,
                    to: e,
                    reason: t,
                    untilMs: this.untilMs
                });
            } catch  {}
        }
    }
    blockedError() {
        const e = this.remainingMs, t = e > 0 ? e : void 0;
        return void 0 !== this.lastError ? new ye({
            cause: this.lastError.cause,
            attempts: this.lastError.attempts,
            retryAfterMs: t
        }) : new ye({
            cause: new Error("Agent store mint gate is open"),
            attempts: 0,
            retryAfterMs: t
        });
    }
}
class us {
    constructor(e = {}){
        this.attempts = [], this.retries = [], this.windowMs = n({
            value: e.windowMs ?? 6e4,
            name: "windowMs",
            context: "AgentStoreMintRetryBudget"
        });
        const t = e.ratio ?? .1;
        if (!Number.isFinite(t) || t < 0 || t > 1) throw new RangeError(`AgentStoreMintRetryBudget ratio must be in [0, 1], got ${t}`);
        this.ratio = t;
        const r = e.floor ?? 3;
        if (!Number.isInteger(r) || r < 0) throw new RangeError(`AgentStoreMintRetryBudget floor must be a non-negative integer, got ${r}`);
        this.floor = r;
        const s = e.minAttempts ?? 1;
        if (!Number.isInteger(s) || s < 1) throw new RangeError(`AgentStoreMintRetryBudget minAttempts must be an integer >= 1, got ${s}`);
        this.minAttempts = s, this.now = e.now ?? Date.now;
    }
    setTimings(e) {
        if (void 0 !== e.ratio) {
            if (!Number.isFinite(e.ratio) || e.ratio < 0 || e.ratio > 1) throw new RangeError(`AgentStoreMintRetryBudget ratio must be in [0, 1], got ${e.ratio}`);
            this.ratio = e.ratio;
        }
        if (void 0 !== e.floor) {
            if (!Number.isInteger(e.floor) || e.floor < 0) throw new RangeError(`AgentStoreMintRetryBudget floor must be a non-negative integer, got ${e.floor}`);
            this.floor = e.floor;
        }
    }
    recordAttempt() {
        this.prune(), this.attempts.push(this.now());
    }
    tryConsumeRetry() {
        if (this.prune(), this.retries.length < this.floor) return this.retries.push(this.now()), !0;
        const e = Math.max(this.attempts.length, this.minAttempts);
        return this.retries.length / e < this.ratio && (this.retries.push(this.now()), !0);
    }
    prune() {
        const e = this.now() - this.windowMs;
        this.attempts.length > 0 && this.attempts[0] <= e && (this.attempts = this.attempts.filter((t)=>t > e)), this.retries.length > 0 && this.retries[0] <= e && (this.retries = this.retries.filter((t)=>t > e));
    }
}
const ds = 1, ps = /^[A-Za-z_][A-Za-z0-9_]*$/;
function ms(e) {
    return ps.test(e) && !Object.hasOwn(Object.prototype, e);
}
function hs(e, t) {
    const r = "peer" === e ? "agent_store" : "shared_store", n = `${r}_${t.slice(-8).replace(/[^A-Za-z0-9_]/g, "_").replace(/^[0-9]/, "_")}`;
    return ps.test(n) ? n : r;
}
function fs({ preferred: e, usedAliases: t, reservedAliases: r }) {
    if (!ms(e)) throw new Error(`invalid agent store mount alias: ${e}`);
    const n = new Set(t);
    if (void 0 !== r) for (const e of r)n.add(e);
    let s = e, o = 2;
    for(; n.has(s);)s = `${e}_${o}`, o += 1;
    return t.add(s), s;
}
function gs(e) {
    return "principal" === e.mountKind || "share" === e.mountKind;
}
function ys(e) {
    if (!(0, Yn.v8)(e)) throw new Error(`invalid self agent store source id: ${e}`);
    return (0, Wt._b)(e), {
        mountKey: e,
        mountKind: "self",
        remoteTarget: {
            kind: "direct",
            agentId: e
        },
        syncMode: "readWrite"
    };
}
function ws(e, t) {
    if (!(0, Yn.v8)(e) && !(0, Yn.Y6)(e)) throw new Error(`invalid peer agent store id: ${e}`);
    if ((0, Wt._b)(e), void 0 !== t?.alias && !ms(t.alias)) throw new Error(`invalid agent store mount alias: ${t.alias}`);
    return {
        mountKey: e,
        mountKind: "peer",
        remoteTarget: {
            kind: "direct",
            agentId: e
        },
        syncMode: "readWrite",
        ...void 0 !== t?.alias ? {
            alias: t.alias
        } : {},
        ...!0 === t?.isProjectStore ? {
            isProjectStore: !0
        } : {}
    };
}
function vs(e, t) {
    if (!(0, Yn.A8)(e)) throw new Error(`invalid agent store share mount key: ${e}`);
    if ((0, Wt.qh)(e), void 0 !== t?.alias && !ms(t.alias)) throw new Error(`invalid agent store mount alias: ${t.alias}`);
    return {
        mountKey: e,
        mountKind: "share",
        remoteTarget: {
            kind: "share",
            shareId: e
        },
        syncMode: "readOnly",
        ...void 0 !== t?.alias ? {
            alias: t.alias
        } : {}
    };
}
function _s(e, t) {
    if ("user" !== t.alias && "team" !== t.alias && "automation" !== t.alias) throw new Error(`invalid principal mount alias: ${t.alias}`);
    if ("user" === t.alias && void 0 === (0, Yn.Z6)(e) || "team" === t.alias && void 0 === (0, Yn.ZJ)(e) || "automation" === t.alias && !(0, Yn.Ae)(e)) throw new Error(`principal source id does not match alias ${t.alias}: ${e}`);
    if ("automation" !== t.alias && !(0, Yn.XW)(e)) throw new Error(`invalid principal agent store source id: ${e}`);
    if (void 0 !== t.syncMode && "readOnly" !== t.syncMode && "readWrite" !== t.syncMode) throw new Error(`invalid principal sync mode: ${t.syncMode}`);
    return (0, Wt.qh)(e), {
        mountKey: e,
        mountKind: "principal",
        remoteTarget: {
            kind: "direct",
            agentId: e,
            sourceKind: t.alias
        },
        syncMode: t.syncMode ?? "readWrite",
        alias: t.alias
    };
}
function bs({ existing: e, incoming: t }) {
    if (e.mountKey !== t.mountKey) return {
        result: "unchanged",
        canonical: e
    };
    if ("self" !== t.mountKind || "self" === e.mountKind) return "peer" === e.mountKind && "peer" === t.mountKind && !0 === t.isProjectStore && !0 !== e.isProjectStore ? {
        result: "unchanged",
        canonical: {
            ...e,
            isProjectStore: !0
        }
    } : {
        result: "unchanged",
        canonical: e
    };
    if ("share" === e.mountKind) return {
        result: "refused",
        canonical: e
    };
    return {
        result: "promoted",
        canonical: {
            mountKey: e.mountKey,
            mountKind: "self",
            remoteTarget: t.remoteTarget,
            syncMode: "readWrite"
        }
    };
}
const Ss = 1;
function ks(e) {
    return e ? "readOnly" : "readWrite";
}
function xs(e) {
    return "share" === e.remoteTarget.kind ? e.remoteTarget.shareId : e.remoteTarget.agentId;
}
function Es(e) {
    return function(e) {
        switch(e.mountKind){
            case "self":
                if ("readWrite" !== e.syncMode || "direct" !== e.remoteTarget.kind || e.remoteTarget.agentId !== e.mountKey) throw new Error("invalid self Agent Store mount spec");
                return void ys(e.mountKey);
            case "peer":
                if ("readWrite" !== e.syncMode || "direct" !== e.remoteTarget.kind || e.remoteTarget.agentId !== e.mountKey) throw new Error("invalid peer Agent Store mount spec");
                return void ws(e.mountKey, {
                    ...void 0 !== e.alias ? {
                        alias: e.alias
                    } : {},
                    ...!0 === e.isProjectStore ? {
                        isProjectStore: !0
                    } : {}
                });
            case "share":
                if ("readOnly" !== e.syncMode || "share" !== e.remoteTarget.kind || e.remoteTarget.shareId !== e.mountKey) throw new Error("invalid share Agent Store mount spec");
                return void vs(e.mountKey, {
                    ...void 0 !== e.alias ? {
                        alias: e.alias
                    } : {}
                });
            case "principal":
                if ("direct" !== e.remoteTarget.kind || e.remoteTarget.agentId !== e.mountKey) throw new Error("invalid principal Agent Store mount spec");
                _s(e.mountKey, {
                    alias: e.alias,
                    syncMode: e.syncMode
                });
        }
    }(e), JSON.stringify(function(e) {
        const t = e.mountKey;
        switch(e.mountKind){
            case "self":
                return {
                    version: Ss,
                    kind: "self",
                    mountKey: t,
                    readOnly: !1
                };
            case "peer":
                return {
                    version: Ss,
                    kind: "peer",
                    mountKey: t,
                    readOnly: !1,
                    remoteId: xs(e),
                    ...void 0 !== e.alias ? {
                        alias: e.alias
                    } : {}
                };
            case "share":
                return {
                    version: Ss,
                    kind: "share",
                    mountKey: t,
                    readOnly: !0,
                    remoteId: xs(e),
                    ...void 0 !== e.alias ? {
                        alias: e.alias
                    } : {}
                };
            case "principal":
                return {
                    version: Ss,
                    kind: "principal",
                    mountKey: t,
                    readOnly: (r = e.syncMode, "readOnly" === r),
                    remoteId: xs(e),
                    alias: e.alias
                };
        }
        var r;
    }(e), void 0, 2);
}
function Is(e) {
    let t;
    try {
        t = JSON.parse(e);
    } catch  {
        return;
    }
    if ("object" != typeof (r = t) || null === r || Array.isArray(r)) return;
    var r;
    if (t.version !== Ss) return;
    const n = t.kind, s = t.mountKey, o = t.readOnly;
    if ("string" != typeof n || "string" != typeof s || "boolean" != typeof o) return;
    if (void 0 !== t.remoteId && "string" != typeof t.remoteId) return;
    if (void 0 !== t.alias && "string" != typeof t.alias) return;
    const i = t.remoteId, a = {
        mountKey: s,
        remoteId: i,
        readOnly: o,
        alias: t.alias
    };
    if (void 0 !== i || "self" === n) switch(n){
        case "self":
            return function({ mountKey: e, remoteId: t, readOnly: r, alias: n }) {
                if (void 0 === t && !r && void 0 === n) try {
                    return ys(e);
                } catch  {
                    return;
                }
            }(a);
        case "peer":
            return function({ mountKey: e, remoteId: t, readOnly: r, alias: n }) {
                if (!r && void 0 !== t && t === e) try {
                    return ws(e, {
                        ...void 0 !== n ? {
                            alias: n
                        } : {}
                    });
                } catch  {
                    return;
                }
            }(a);
        case "share":
            return function({ mountKey: e, remoteId: t, readOnly: r, alias: n }) {
                if (r && void 0 !== t && t === e) try {
                    return vs(e, {
                        ...void 0 !== n ? {
                            alias: n
                        } : {}
                    });
                } catch  {
                    return;
                }
            }(a);
        case "principal":
            return function({ mountKey: e, remoteId: t, readOnly: r, alias: n }) {
                if (void 0 !== t && t === e && ("user" === n || "team" === n || "automation" === n)) try {
                    return _s(e, {
                        alias: n,
                        syncMode: ks(r)
                    });
                } catch  {
                    return;
                }
            }(a);
        default:
            return;
    }
}
const Ts = {
    symlink_refused: "store-path-symlink",
    insecure_permissions: "store-path-insecure-permissions",
    foreign_uid: "store-path-foreign-uid",
    missing_uid: "store-path-missing-uid",
    not_directory: "store-path-not-directory",
    acl_refused: "store-path-acl-refused",
    invalid_store_base: "store-path-invalid-base",
    invalid_agent_id: "store-path-invalid-agent-id",
    missing_homedir: "store-path-missing-homedir",
    unsupported_platform: "store-path-unsupported-platform"
};
function Cs(e, t, r) {
    return void 0 === r ? {
        outcome: e,
        reason: t
    } : {
        outcome: e,
        reason: t,
        syncState: r
    };
}
function Ps(e) {
    if (e instanceof ye) return Ps(e.cause);
    if (Ie(e)) return "mint-sync-disabled";
    if (e instanceof Mn && "unsupported_schema_version" === e.code) return "index-schema-unsupported";
    if (e instanceof mr) switch(e.code){
        case "foreign_identity_lock":
            return "lock-foreign-identity";
        case "invalid_lockfile":
            return "lock-unreadable";
        case "missing_identity":
            return "lock-identity-missing";
    }
    if (e instanceof Wt.y$) return Ts[e.code];
    if (e instanceof f) return "unsafe-relative-path";
    if (void 0 !== qe(e)) return "quota-exceeded";
    if (void 0 !== Ge(e)) return "backend-throttled";
    if (e instanceof i) return "mint-unauthorized";
    const t = fe(e);
    return t === se.C.Unauthenticated || t === se.C.PermissionDenied ? "mint-unauthorized" : t === se.C.NotFound ? "mint-not-found" : "ENOSPC" === function(e) {
        if ("object" != typeof e || null === e || !("code" in e)) return;
        const t = e.code;
        return "string" == typeof t ? t : void 0;
    }(e) ? "disk-full" : "other";
}
class As {
    constructor(e){
        if (this.inner = e.inner, this.target = e.target, "direct" === this.target.kind) {
            const e = this.inner.completeMultipartWrites;
            void 0 !== e && (this.completeMultipartWrites = (t)=>e.call(this.inner, this.rewriteWriteMutation(t)));
            const t = this.inner.abortMultipartWrites;
            void 0 !== t && (this.abortMultipartWrites = (e)=>t.call(this.inner, this.rewriteWriteMutation(e)));
            const r = this.inner.rmdir;
            void 0 !== r && (this.rmdir = (e)=>r.call(this.inner, this.rewriteWriteMutation(e)));
        }
    }
    getResolvedStoreId(e) {
        return "share" === this.target.kind ? this.inner.getResolvedStoreId?.({
            agentId: this.target.shareId,
            shareId: this.target.shareId
        }) : this.inner.getResolvedStoreId?.({
            agentId: this.target.agentId
        });
    }
    async listFiles(e) {
        return await this.inner.listFiles(this.rewriteRead(e));
    }
    async presignReads(e) {
        return await this.inner.presignReads(this.rewriteRead(e));
    }
    async presignWrites(e) {
        if ("share" === this.target.kind) throw new Error("MountScopedAgentStoreClient: presignWrites is not supported on share mounts.");
        return await this.inner.presignWrites(this.rewriteWriteMutation(e));
    }
    async deleteFiles(e) {
        if ("share" === this.target.kind) throw new Error("MountScopedAgentStoreClient: deleteFiles is not supported on share mounts.");
        const t = this.inner.deleteFiles?.bind(this.inner);
        if (void 0 === t) throw new Error("MountScopedAgentStoreClient: inner client does not support deleteFiles");
        return await t(this.rewriteWriteMutation(e));
    }
    invalidateListCache(e) {
        "share" !== this.target.kind ? this.inner.invalidateListCache?.({
            ...e,
            agentId: this.target.agentId
        }) : this.inner.invalidateListCache?.({
            agentId: this.target.shareId,
            shareId: this.target.shareId
        });
    }
    versionProbeTarget(e) {
        return "share" === this.target.kind ? this.inner.versionProbeTarget?.({
            agentId: this.target.shareId,
            shareId: this.target.shareId
        }) : this.inner.versionProbeTarget?.({
            agentId: this.target.agentId
        });
    }
    rewriteRead(e) {
        if ("share" === this.target.kind) return {
            ...e,
            agentId: this.target.shareId,
            shareId: this.target.shareId
        };
        return {
            ...e,
            agentId: this.target.agentId,
            ...void 0 !== this.target.sourceKind ? {
                mintSourceKind: this.target.sourceKind
            } : {}
        };
    }
    rewriteWriteMutation(e) {
        if ("share" === this.target.kind) throw new Error("MountScopedAgentStoreClient: write mutations are not supported on share mounts.");
        return {
            ...e,
            agentId: this.target.agentId,
            ...void 0 !== this.target.sourceKind ? {
                mintSourceKind: this.target.sourceKind
            } : {}
        };
    }
}
class Rs extends Error {
    constructor(e){
        super(e.message), this.name = "PresignedUrlRejectedError", this.code = e.code, this.url = e.url;
    }
}
function Ms(e) {
    if ($s(e), "https:" !== e.protocol) throw new Rs({
        code: "scheme_not_allowed",
        message: `Refused presigned URL with non-https scheme: ${e.protocol}`,
        url: js(e)
    });
    const t = Ws(e.hostname);
    if (function(e) {
        if (0 === e.length) return !0;
        if (zs(e)) return !0;
        if (Hs(e)) return Ks(e);
        if (function(e) {
            return e.includes(":");
        }(e)) return function(e) {
            const t = e.toLowerCase();
            if ("::" === t || "::1" === t) return !0;
            const r = function(e) {
                const t = e.match(/^(?:0:0:0:0:0|::):?ffff:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/i);
                if (t) return t[1];
                if (e.startsWith("::ffff:")) {
                    const t = e.slice(7);
                    if (Hs(t)) return t;
                    const r = t.match(/^([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
                    if (r) {
                        const e = Number.parseInt(r[1], 16), t = Number.parseInt(r[2], 16);
                        if (Number.isFinite(e) && Number.isFinite(t) && e >= 0 && e <= 65535 && t >= 0 && t <= 65535) return `${e >> 8 & 255}.${255 & e}.${t >> 8 & 255}.${255 & t}`;
                    }
                }
                return;
            }(t);
            if (void 0 !== r) return Ks(r);
            if (t.startsWith("fc") || t.startsWith("fd")) return !0;
            if (t.startsWith("fe8") || t.startsWith("fe9")) return !0;
            if (t.startsWith("fea") || t.startsWith("feb")) return !0;
            if (t.startsWith("ff")) return !0;
            return !1;
        }(e);
        return !1;
    }(t)) throw new Rs({
        code: "private_host_not_allowed",
        message: `Refused https presigned URL with private/internal host: ${t}`,
        url: js(e)
    });
    if (!Js(t)) throw new Rs({
        code: "host_not_allowed",
        message: `Refused presigned URL whose host is not an AWS S3 endpoint: ${t}`,
        url: js(e)
    });
}
function Js(e) {
    const t = e.toLowerCase();
    if ("amazonaws.com" !== t && !t.endsWith(".amazonaws.com")) return !1;
    return t.split(".").some((e)=>Os.has(e));
}
const Os = new Set([
    "s3",
    "s3-accelerate",
    "s3-fips"
]);
function Bs(e) {
    const t = new Set(e.map((e)=>e.toLowerCase()));
    return (e)=>{
        if (Ms(e), !t.has(e.hostname.toLowerCase())) throw new Rs({
            code: "host_not_allowed",
            message: `Refused presigned URL whose host is not in the allowlist: ${e.hostname}`,
            url: js(e)
        });
    };
}
const Ds = [
    "agent-stores.s3.us-east-1.amazonaws.com",
    "agent-stores.s3.amazonaws.com"
], qs = [
    "agent-stores-928182716709-us-west-2-an.s3.us-west-2.amazonaws.com",
    "agent-stores-928182716709-us-west-2-an.s3.amazonaws.com"
];
function Ns() {
    return Bs(Ds);
}
function Fs(e) {
    const t = e.trim();
    return "" !== t && (t.includes("localhost") || t.includes("lclhst.build"));
}
function Us(e) {
    return Fs(e) ? function() {
        const e = Ns();
        return (t)=>{
            $s(t);
            const r = Ws(t.hostname);
            "http:" === t.protocol && zs(r) || e(t);
        };
    }() : function(e) {
        try {
            const t = new URL(e).hostname.toLowerCase();
            return "playground.cursor.sh" === t || t.endsWith(".playground.cursor.sh");
        } catch  {
            return !1;
        }
    }(e) ? Bs(qs) : Ns();
}
function Ls(e) {
    $s(e);
    const t = Ws(e.hostname);
    "http:" === e.protocol && zs(t) || Ms(e);
}
function $s(e) {
    if ("" !== e.username || "" !== e.password) throw new Rs({
        code: "userinfo_not_allowed",
        message: "Refused presigned URL with embedded userinfo",
        url: js(e)
    });
}
function js(e) {
    try {
        const t = "string" == typeof e ? new URL(e) : e;
        return `${t.protocol}//${t.host}${t.pathname}`;
    } catch  {
        return "<unparseable-presigned-url>";
    }
}
function Gs(e) {
    let t;
    try {
        t = new URL(e.rawUrl);
    } catch  {
        throw new Error(`Refusing unparseable presigned URL for ${e.relPath}`);
    }
    try {
        e.validatePresignedUrl(t);
    } catch (t) {
        throw new Error(`Refusing presigned URL for ${e.relPath}: ${t instanceof Error ? t.message : String(t)}`, {
            cause: t instanceof Error ? t : void 0
        });
    }
}
function zs(e) {
    const t = e.toLowerCase();
    return "localhost" === t || "ip6-localhost" === t || "127.0.0.1" === t || "::1" === t || "0:0:0:0:0:0:0:1" === t;
}
function Ws(e) {
    return e.startsWith("[") && e.endsWith("]") ? e.slice(1, -1) : e;
}
function Hs(e) {
    const t = e.split(".");
    return 4 === t.length && t.every((e)=>{
        if (0 === e.length || e.length > 3) return !1;
        if (!/^\d+$/.test(e)) return !1;
        const t = Number(e);
        return Number.isInteger(t) && t >= 0 && t <= 255;
    });
}
function Ks(e) {
    const [t, r] = e.split(".").map(Number);
    return void 0 === t || void 0 === r || 0 === t || 10 === t || 127 === t || 169 === t && 254 === r || 172 === t && r >= 16 && r <= 31 || 192 === t && 168 === r || 100 === t && r >= 64 && r <= 127 || t >= 224 && t <= 239 || t >= 240;
}
async function Vs(e) {
    const t = e.runPresign ?? (async (e)=>e()), r = e.runS3 ?? (async (e)=>e()), [n] = await t(()=>e.client.presignReads({
            agentId: e.agentId,
            relPaths: [
                e.relPath
            ],
            signal: e.signal
        }));
    if (void 0 === n) throw new Error(`agent-store baseline probe returned no read for ${e.relPath}`);
    let s, o;
    try {
        s = v(e.relPath), o = v(n.relPath);
    } catch (t) {
        throw new Error(`agent-store baseline probe relPath mismatch for ${e.relPath}: ${t instanceof Error ? t.message : String(t)}`);
    }
    if (o !== s) throw new Error(`agent-store baseline probe relPath mismatch for ${e.relPath} (got ${n.relPath})`);
    Gs({
        rawUrl: n.url,
        relPath: e.relPath,
        validatePresignedUrl: e.validatePresignedUrl
    });
    const i = async (t)=>e.fetchImpl(n.url, {
            redirect: "error",
            ...void 0 !== e.signal ? {
                signal: e.signal
            } : {},
            ...t ? {
                headers: {
                    Range: "bytes=0-0"
                }
            } : {}
        });
    let a = await r(()=>i(!0));
    416 === a.status && (await a.body?.cancel(), a = await r(()=>i(!1)));
    try {
        if (404 === a.status) return {
            kind: "absent"
        };
        if (200 !== a.status && 206 !== a.status) throw new Error(`agent-store baseline probe failed for ${e.relPath}: ${a.status}`);
        const t = st(a.headers.get("etag") ?? void 0);
        if (0 === t.length) throw new Error(`agent-store baseline probe for ${e.relPath} returned no usable etag`);
        return {
            kind: "exists",
            etag: t
        };
    } finally{
        await a.body?.cancel();
    }
}
var Ys = require("./module-77598.js");
const Qs = "path-sync-requests", Xs = 6e4, Zs = 250, eo = 50, to = 384, ro = 1;
function no(e) {
    return h.join(h.dirname(h.resolve(e)), Wt.kR, Qs);
}
function so(e, t) {
    return h.join(e, `${t}.json`);
}
function oo(e) {
    const t = [], r = new Set;
    for (const n of e){
        let e;
        try {
            e = v(n);
        } catch  {
            return;
        }
        r.has(e) || (r.add(e), t.push(e));
    }
    return t;
}
async function io(e) {
    const t = oo(e.relPaths);
    if (void 0 === t || 0 === t.length) return;
    const r = no(e.filesDir);
    try {
        (0, Wt.Ew)(r);
    } catch  {
        return;
    }
    const n = (0, Ys.randomBytes)(16).toString("hex"), s = {
        v: ro,
        id: n,
        relPaths: t,
        createdAtMs: (e.now ?? Date.now)(),
        kind: e.kind ?? "push"
    }, o = so(r, n);
    try {
        await rr(o, `${JSON.stringify(s)}\n`, to);
    } catch  {
        return;
    }
    return n;
}
function ao(e) {
    let t;
    try {
        t = JSON.parse(e);
    } catch  {
        return;
    }
    if ("object" != typeof t || null === t) return;
    const r = t;
    if (r.v !== ro) return;
    if ("string" != typeof r.id || 0 === r.id.length) return;
    if (!Array.isArray(r.relPaths)) return;
    if ("number" != typeof r.createdAtMs || !Number.isFinite(r.createdAtMs)) return;
    const n = oo(r.relPaths.filter((e)=>"string" == typeof e));
    return void 0 !== n && 0 !== n.length ? {
        v: ro,
        id: r.id,
        relPaths: n,
        createdAtMs: r.createdAtMs,
        kind: "pull" === r.kind ? "pull" : "push"
    } : void 0;
}
function co(e) {
    const t = no(e.filesDir);
    let r;
    try {
        r = p.readdirSync(t);
    } catch  {
        return [];
    }
    const n = (e.now ?? Date.now)(), s = e.staleMs ?? Xs, o = [];
    for (const e of r){
        if (!e.endsWith(".json")) continue;
        const r = h.join(t, e);
        let i, a;
        try {
            i = p.lstatSync(r);
        } catch  {
            continue;
        }
        if (i.isSymbolicLink() || !i.isFile()) {
            try {
                p.unlinkSync(r);
            } catch  {}
            continue;
        }
        try {
            a = p.readFileSync(r, "utf8");
        } catch  {
            continue;
        }
        const c = ao(a);
        if (void 0 !== c) if (n - c.createdAtMs > s) try {
            p.unlinkSync(r);
        } catch  {}
        else o.push(c);
        else try {
            p.unlinkSync(r);
        } catch  {}
    }
    return o;
}
function lo(e) {
    const t = so(no(e.filesDir), e.requestId);
    let r, n;
    try {
        r = p.lstatSync(t);
    } catch (e) {
        return "object" == typeof e && null !== e && "code" in e && "ENOENT" === e.code ? "acked" : "pending";
    }
    if (r.isSymbolicLink() || !r.isFile()) {
        try {
            p.unlinkSync(t);
        } catch  {}
        return "stale";
    }
    try {
        n = p.readFileSync(t, "utf8");
    } catch  {
        return "pending";
    }
    const s = ao(n);
    if (void 0 === s) {
        try {
            p.unlinkSync(t);
        } catch  {}
        return "stale";
    }
    const o = (e.now ?? Date.now)(), i = e.staleMs ?? Xs;
    if (o - s.createdAtMs > i) {
        try {
            p.unlinkSync(t);
        } catch  {}
        return "stale";
    }
    return "pending";
}
function uo(e) {
    return "acked" === lo(e);
}
function po(e) {
    const t = no(e.filesDir);
    for (const r of e.requestIds)if (/^[0-9a-f]+$/i.test(r)) try {
        p.unlinkSync(so(t, r));
    } catch  {}
}
async function mo(e) {
    const t = e.pollMs ?? eo, r = e.delay ?? ((e)=>new Promise((t)=>setTimeout(t, e)));
    for(;;){
        const n = lo(e);
        if ("acked" === n) return "acked";
        if ("stale" === n) return "stale";
        if (!0 === e.shouldAbort?.()) return "aborted";
        await r(t);
    }
}
const ho = Object.freeze({
    onDiskFull () {},
    onSymlinkRefused () {},
    onNetworkError () {},
    onThrottled () {},
    onMintGateStateChanged () {}
});
function fo(e, t, r) {
    if (void 0 === e) return;
    const n = e[t];
    if ("function" != typeof n) return;
    let s;
    try {
        s = n.call(e, r);
    } catch  {
        return;
    }
    null != s && "function" == typeof s.then && s.then(go, go);
}
function go() {}
const yo = 18e5, wo = 6e4, vo = 864e5, _o = Number.POSITIVE_INFINITY, bo = {
    tokenMinted () {},
    tokenRefreshUnauthorized () {}
};
class So {
    constructor(e, t = {}){
        if (this.transport = e, this.tokens = new Map, this.refreshAtMs = new Map, this.resolvedStoreIds = new Map, this.inFlightMints = new Map, this.mintNegativeCache = new Map, this.metrics = t.metrics ?? bo, this.now = t.now ?? Date.now, this.refreshBufferMs = t.refreshBufferMs ?? 6e4, this.tokenRefreshJitterRatio = xo({
            value: t.tokenRefreshJitterRatio ?? .5,
            name: "tokenRefreshJitterRatio",
            context: "TokenCachingAgentStoreClient"
        }), this.minTokenSlackMs = n({
            value: t.minTokenSlackMs ?? 5e3,
            name: "minTokenSlackMs",
            context: "TokenCachingAgentStoreClient"
        }), this.mintNegativeCacheBaseMs = t.mintNegativeCacheBaseMs ?? 3e4, this.mintNegativeCacheMaxMs = t.mintNegativeCacheMaxMs ?? 9e5, this.mintTerminalDenialCacheMs = t.mintTerminalDenialCacheMs ?? yo, this.resolveTransientNegativeCacheBaseMs = ko({
            value: t.mintTransientNegativeCacheBaseMs,
            fallback: 5e3,
            name: "mintTransientNegativeCacheBaseMs"
        }), this.resolveTransientNegativeCacheMaxMs = ko({
            value: t.mintTransientNegativeCacheMaxMs,
            fallback: 12e4,
            name: "mintTransientNegativeCacheMaxMs"
        }), this.resolveMintRetryPolicyVersion = function(e) {
            if ("function" == typeof e) return e;
            const t = e ?? ds;
            return ()=>t;
        }(t.mintRetryPolicyVersion), this.mintRetryMaxAttempts = t.mintRetryMaxAttempts ?? 2, !Number.isInteger(this.mintRetryMaxAttempts) || this.mintRetryMaxAttempts < 1) throw new RangeError(`TokenCachingAgentStoreClient mintRetryMaxAttempts must be a positive integer, got ${this.mintRetryMaxAttempts}`);
        if (this.mintRetryBaseDelayMs = n({
            value: t.mintRetryBaseDelayMs ?? 250,
            name: "mintRetryBaseDelayMs",
            context: "TokenCachingAgentStoreClient"
        }), this.mintRetryMaxDelayMs = n({
            value: t.mintRetryMaxDelayMs ?? 2e3,
            name: "mintRetryMaxDelayMs",
            context: "TokenCachingAgentStoreClient"
        }), this.mintRetryBaseDelayMs > this.mintRetryMaxDelayMs) throw new RangeError(`TokenCachingAgentStoreClient mintRetryBaseDelayMs (${this.mintRetryBaseDelayMs}) must be <= mintRetryMaxDelayMs (${this.mintRetryMaxDelayMs})`);
        this.sleep = t.sleep ?? Eo, this.random = t.random ?? Math.random, this.mintRetryBudget = t.mintRetryBudget ?? new us({
            now: this.now
        }), this.mintGate = t.mintGate, this.onResolvedStoreIdChanged = t.onResolvedStoreIdChanged, this.onSyncDisabledMint = t.onSyncDisabledMint, this.onMintDenied = t.onMintDenied;
        const r = e.completeMultipartWrites;
        void 0 !== r && (this.completeMultipartWrites = (t)=>this.callWithRefresh({
                cacheKey: t.agentId,
                mintAgentId: t.agentId,
                mintSourceKind: t.mintSourceKind,
                opName: "completeMultipartWrites",
                op: (n, s)=>r.call(e, {
                        completions: t.completions,
                        storeId: s,
                        token: n,
                        signal: t.signal
                    })
            }));
        const s = e.abortMultipartWrites;
        void 0 !== s && (this.abortMultipartWrites = (t)=>this.callWithRefresh({
                cacheKey: t.agentId,
                mintAgentId: t.agentId,
                mintSourceKind: t.mintSourceKind,
                opName: "abortMultipartWrites",
                op: (r, n)=>s.call(e, {
                        uploads: t.uploads,
                        storeId: n,
                        token: r,
                        signal: t.signal
                    })
            }));
        const o = e.rmdir;
        void 0 !== o && (this.rmdir = (t)=>this.callWithRefresh({
                cacheKey: t.agentId,
                mintAgentId: t.agentId,
                mintSourceKind: t.mintSourceKind,
                opName: "rmdir",
                signal: t.signal,
                op: (r, n)=>o.call(e, {
                        relPath: t.relPath,
                        storeId: n,
                        token: r,
                        signal: t.signal
                    })
            }));
    }
    getResolvedStoreId(e) {
        return this.resolvedStoreIds.get(Po(e));
    }
    async listFiles(e) {
        return await this.callWithRefresh({
            cacheKey: Po(e),
            mintAgentId: e.agentId,
            shareId: e.shareId,
            mintSourceKind: e.mintSourceKind,
            opName: "listFiles",
            signal: e.signal,
            op: (t, r)=>this.transport.listFiles({
                    relPath: e.relPath,
                    shareId: e.shareId,
                    storeId: r,
                    token: t,
                    signal: e.signal,
                    tombstoneMode: e.tombstoneMode,
                    tombstonesSinceMs: e.tombstonesSinceMs,
                    ifVersionEqual: e.ifVersionEqual
                })
        });
    }
    async presignReads(e) {
        return await this.callWithRefresh({
            cacheKey: Po(e),
            mintAgentId: e.agentId,
            shareId: e.shareId,
            mintSourceKind: e.mintSourceKind,
            opName: "presignReads",
            signal: e.signal,
            op: (t, r)=>this.transport.presignReads({
                    relPaths: e.relPaths,
                    shareId: e.shareId,
                    storeId: r,
                    token: t,
                    signal: e.signal
                })
        });
    }
    async presignWrites(e) {
        return await this.callWithRefresh({
            cacheKey: e.agentId,
            mintAgentId: e.agentId,
            mintSourceKind: e.mintSourceKind,
            opName: "presignWrites",
            signal: e.signal,
            op: (t, r)=>this.transport.presignWrites({
                    files: e.files,
                    storeId: r,
                    token: t,
                    signal: e.signal
                })
        });
    }
    async deleteFiles(e) {
        const t = this.transport.deleteFiles?.bind(this.transport);
        if (void 0 === t) throw new Error("TokenCachingAgentStoreClient: transport does not support deleteFiles");
        return await this.callWithRefresh({
            cacheKey: e.agentId,
            mintAgentId: e.agentId,
            mintSourceKind: e.mintSourceKind,
            opName: "deleteFiles",
            signal: e.signal,
            op: (r, n)=>t({
                    files: e.files,
                    storeId: n,
                    token: r,
                    signal: e.signal
                })
        });
    }
    versionProbeTarget(e) {
        const t = this.transport.rootListingPrefersCompleteFlatStore;
        if (void 0 === t) return;
        const r = Po(e), n = this.tokens.get(r);
        if (void 0 === n || this.shouldRefreshToken(r, n)) return;
        const s = n.storeIds[0];
        return void 0 !== s && "" !== s ? {
            ...void 0 !== e.shareId ? {
                shareId: e.shareId
            } : {
                storeId: s
            },
            token: n.token,
            preferCompleteFlatStore: t.call(this.transport, {
                storeId: s,
                shareId: e.shareId
            })
        } : void 0;
    }
    invalidateListCache(e) {
        const t = this.tokens.get(Po(e));
        if (void 0 === t) return;
        const r = t.storeIds[0];
        void 0 !== r && "" !== r && this.transport.invalidateListCache?.({
            storeId: r,
            shareId: e.shareId
        });
    }
    async callWithRefresh(e) {
        const t = await this.getValidToken({
            cacheKey: e.cacheKey,
            mintAgentId: e.mintAgentId,
            shareId: e.shareId,
            mintSourceKind: e.mintSourceKind,
            signal: e.signal
        }), r = Co(t);
        this.setResolvedStoreId(e, r);
        try {
            return await e.op(t, r);
        } catch (t) {
            if (!(t instanceof Error && Ao(t) || "object" == typeof t && null !== t && Ao(t))) throw t;
            this.metrics.tokenRefreshUnauthorized({
                agentId: e.mintAgentId,
                op: e.opName
            }), this.evictCachedToken(e.cacheKey), this.setResolvedStoreId(e, void 0);
            const r = await this.getValidToken({
                cacheKey: e.cacheKey,
                mintAgentId: e.mintAgentId,
                shareId: e.shareId,
                mintSourceKind: e.mintSourceKind,
                mintReason: "after_unauthorized",
                signal: e.signal
            }), n = Co(r);
            this.setResolvedStoreId(e, n);
            try {
                return await e.op(r, n);
            } catch (t) {
                throw (t instanceof Error && Ao(t) || "object" == typeof t && null !== t && Ao(t)) && (this.evictCachedToken(e.cacheKey), this.setResolvedStoreId(e, void 0)), t;
            }
        }
    }
    setResolvedStoreId(e, t) {
        if (this.resolvedStoreIds.get(e.cacheKey) !== t) {
            void 0 === t ? this.resolvedStoreIds.delete(e.cacheKey) : this.resolvedStoreIds.set(e.cacheKey, t);
            try {
                this.onResolvedStoreIdChanged?.({
                    agentId: e.mintAgentId,
                    shareId: e.shareId,
                    storeId: t
                });
            } catch  {}
        }
    }
    async getValidToken(e) {
        const { cacheKey: t, mintAgentId: r, shareId: n, mintSourceKind: s, mintReason: o, signal: i } = e, a = this.tokens.get(t), c = this.stillValidTokenDespiteTerminalDenial(t, a);
        if (void 0 !== c) return c;
        if (void 0 !== a && "after_unauthorized" !== o && !this.shouldRefreshToken(t, a)) return a;
        const l = this.tryKeepThroughTransientNegativeCache({
            cacheKey: t,
            mintAgentId: r,
            existing: a,
            mintReason: o
        });
        if (void 0 !== l) return l;
        this.throwIfMintNegativeCached({
            cacheKey: t,
            mintAgentId: r,
            mintReason: o
        });
        let u = this.inFlightMints.get(t);
        if (void 0 === u) {
            const e = this.throwIfMintGateBlockedUnlessKept({
                cacheKey: t,
                mintAgentId: r,
                existing: a,
                mintReason: o
            });
            if (void 0 !== e) return e;
            const i = o ?? (void 0 === a ? "cold" : "near_expiry");
            u = this.mintWithRetries({
                cacheKey: t,
                mintAgentId: r,
                shareId: n,
                mintSourceKind: s,
                reason: i
            }).finally(()=>{
                this.inFlightMints.delete(t);
            }), this.inFlightMints.set(t, u);
        }
        try {
            return await async function(e, t) {
                if (void 0 === t) return await e;
                if (t.aborted) throw To(t);
                return await new Promise((r, n)=>{
                    const s = ()=>{
                        o(), n(To(t));
                    }, o = ()=>{
                        t.removeEventListener("abort", s);
                    };
                    t.addEventListener("abort", s, {
                        once: !0
                    }), e.then((e)=>{
                        o(), r(e);
                    }, (e)=>{
                        o(), n(e);
                    });
                });
            }(u, i);
        } catch (e) {
            if (Ye(e)) throw e;
            if (Ve(e)) {
                const n = this.tryKeepExistingToken({
                    cacheKey: t,
                    mintAgentId: r,
                    existing: a,
                    mintReason: o,
                    emitMetric: !0,
                    error: e
                });
                if (void 0 !== n) return n;
            }
            const n = e instanceof ye ? e.cause : e;
            if (Se(e) && !Ie(n) && void 0 !== a && a.expiresAtMs > this.now() && this.tokens.get(t) === a) return a;
            throw e;
        }
    }
    setMintTiming(e) {
        let t = !1;
        if (void 0 !== e.refreshBufferMs) {
            const r = function({ value: e, name: t, context: r }) {
                if (!Number.isFinite(e) || e < 0) throw new RangeError(`${r} ${t} must be a finite non-negative number, got ${e}`);
                return e;
            }({
                value: e.refreshBufferMs,
                name: "refreshBufferMs",
                context: "TokenCachingAgentStoreClient"
            });
            r !== this.refreshBufferMs && (this.refreshBufferMs = r, t = !0);
        }
        if (void 0 !== e.tokenRefreshJitterRatio) {
            const r = xo({
                value: e.tokenRefreshJitterRatio,
                name: "tokenRefreshJitterRatio",
                context: "TokenCachingAgentStoreClient"
            });
            r !== this.tokenRefreshJitterRatio && (this.tokenRefreshJitterRatio = r, t = !0);
        }
        if (t && this.rescheduleCachedTokenRefreshes(), void 0 !== e.minTokenSlackMs && (this.minTokenSlackMs = n({
            value: e.minTokenSlackMs,
            name: "minTokenSlackMs",
            context: "TokenCachingAgentStoreClient"
        })), void 0 !== e.mintRetryMaxAttempts) {
            if (!Number.isInteger(e.mintRetryMaxAttempts) || e.mintRetryMaxAttempts < 1) throw new RangeError(`TokenCachingAgentStoreClient mintRetryMaxAttempts must be a positive integer, got ${e.mintRetryMaxAttempts}`);
            this.mintRetryMaxAttempts = e.mintRetryMaxAttempts;
        }
        if (void 0 !== e.mintRetryBaseDelayMs && (this.mintRetryBaseDelayMs = n({
            value: e.mintRetryBaseDelayMs,
            name: "mintRetryBaseDelayMs",
            context: "TokenCachingAgentStoreClient"
        })), void 0 !== e.mintRetryMaxDelayMs && (this.mintRetryMaxDelayMs = n({
            value: e.mintRetryMaxDelayMs,
            name: "mintRetryMaxDelayMs",
            context: "TokenCachingAgentStoreClient"
        })), (void 0 !== e.mintRetryBaseDelayMs || void 0 !== e.mintRetryMaxDelayMs) && this.mintRetryBaseDelayMs > this.mintRetryMaxDelayMs) throw new RangeError(`TokenCachingAgentStoreClient mintRetryBaseDelayMs (${this.mintRetryBaseDelayMs}) must be <= mintRetryMaxDelayMs (${this.mintRetryMaxDelayMs})`);
    }
    rescheduleCachedTokenRefreshes() {
        for (const [e, t] of this.tokens)this.refreshAtMs.set(e, this.computeRefreshAtMs(t));
    }
    retuneTransientMintBackoffs() {
        for (const [e, t] of this.mintNegativeCache){
            if ("transient" !== t.kind) continue;
            const r = this.createMintNegativeCacheBackoff("transient");
            r.restoreFailures(t.backoff.failures), this.mintNegativeCache.set(e, {
                ...t,
                backoff: r
            });
        }
    }
    shouldRefreshToken(e, t) {
        if (this.resolveMintRetryPolicyVersion() < 1) return t.expiresAtMs - this.now() <= this.refreshBufferMs;
        let r = this.refreshAtMs.get(e);
        return void 0 === r && (r = this.computeRefreshAtMs(t), this.refreshAtMs.set(e, r)), this.now() >= r;
    }
    canKeepExistingToken(e, t, r) {
        return this.resolveMintRetryPolicyVersion() >= 1 && "after_unauthorized" !== t && (void 0 === r || !Ie(r)) && e.expiresAtMs > this.now() + this.minTokenSlackMs;
    }
    throwIfMintGateBlockedUnlessKept(e) {
        if (this.resolveMintRetryPolicyVersion() < 1 || void 0 === this.mintGate) return;
        const t = this.mintGate.peek();
        if (t.allowed) return;
        const r = this.tryKeepExistingToken({
            ...e,
            emitMetric: !1
        });
        if (void 0 !== r) return r;
        throw this.metrics.tokenMintRetryDenied?.({
            agentId: e.mintAgentId,
            reason: "gate"
        }), t.error;
    }
    tryKeepExistingToken(e) {
        const { cacheKey: t, mintAgentId: r, existing: n, mintReason: s, emitMetric: o, error: i } = e;
        if (void 0 !== n && this.tokens.get(t) === n && this.canKeepExistingToken(n, s, i)) return this.deferRefreshAfterKeep(t, n), o && this.metrics.tokenRefreshFailedKeptExisting?.({
            agentId: r,
            remainingMs: n.expiresAtMs - this.now()
        }), n;
    }
    tryKeepThroughTransientNegativeCache(e) {
        const t = this.mintNegativeCache.get(e.cacheKey);
        if (!(void 0 === t || "transient" !== t.kind || this.now() >= t.untilMs)) return this.tryKeepExistingToken({
            ...e,
            emitMetric: !0
        });
    }
    computeRefreshAtMs(e) {
        const t = this.tokenRefreshJitterRatio, r = 1 - t + 2 * this.unitRandom() * t;
        return e.expiresAtMs - Math.floor(this.refreshBufferMs * r);
    }
    deferRefreshAfterKeep(e, t) {
        const r = this.now();
        this.refreshAtMs.set(e, Math.min(t.expiresAtMs - this.minTokenSlackMs, r + this.minTokenSlackMs));
    }
    evictCachedToken(e) {
        this.tokens.delete(e), this.refreshAtMs.delete(e);
    }
    throwIfMintNegativeCached(e) {
        const { cacheKey: t, mintAgentId: r } = e, n = this.mintNegativeCache.get(t);
        if (void 0 !== n) if ("terminal" !== n.kind || 0 !== this.terminalDenialCacheMs()) {
            if (!(this.now() >= n.untilMs || this.resolveMintRetryPolicyVersion() < 1 && "transient" === n.kind)) {
                if ("after_unauthorized" !== e.mintReason || "transient" !== n.kind) {
                    if ("transient" === n.kind && this.resolveMintRetryPolicyVersion() >= 1 && void 0 !== this.mintGate) {
                        const e = this.mintGate.peek();
                        if (e.allowed && e.probe) return void this.mintNegativeCache.delete(t);
                    }
                    throw this.metrics.tokenMintNegativeCached?.({
                        agentId: r,
                        untilMs: n.untilMs,
                        reason: n.kind
                    }), n.error;
                }
                this.mintNegativeCache.delete(t);
            }
        } else this.mintNegativeCache.delete(t);
    }
    async mintWithRetries(e) {
        const t = this.resolveMintRetryPolicyVersion();
        let r = t >= 1 ? this.mintRetryMaxAttempts : 1;
        const n = function(e) {
            if (void 0 !== e.shareId) return {
                kind: "share",
                shareId: e.shareId
            };
            if (void 0 !== e.sourceKind) return {
                kind: "source",
                sourceKind: e.sourceKind,
                sourceId: e.agentId
            };
            if (Yn.hG.test(e.agentId)) return {
                kind: "store",
                storeId: e.agentId
            };
            if ((0, Yn.PZ)(e.agentId)) return {
                kind: "source",
                sourceKind: "cloud",
                sourceId: e.agentId
            };
            if ((0, Yn.Ae)(e.agentId)) return {
                kind: "source",
                sourceKind: "local",
                sourceId: e.agentId
            };
            if (void 0 !== (0, Yn.Z6)(e.agentId)) return {
                kind: "source",
                sourceKind: "user",
                sourceId: e.agentId
            };
            if (void 0 !== (0, Yn.ZJ)(e.agentId)) return {
                kind: "source",
                sourceKind: "team",
                sourceId: e.agentId
            };
            throw new i("Agent store target is not a valid store or source id");
        }({
            agentId: e.mintAgentId,
            shareId: e.shareId,
            sourceKind: e.mintSourceKind
        });
        let s, o, a = 0, c = !1;
        const l = t >= 1 ? this.mintGate : void 0, u = l?.begin();
        if (void 0 !== u && !u.allowed) throw this.metrics.tokenMintRetryDenied?.({
            agentId: e.mintAgentId,
            reason: "gate"
        }), u.error;
        !0 === u?.probe && (r = 1);
        try {
            for(; a < r && (void 0 === u || u.allowed);){
                a += 1, t >= 1 && this.mintRetryBudget.recordAttempt();
                try {
                    const t = await this.transport.mintToken(n);
                    return this.mintNegativeCache.delete(e.cacheKey), this.tokens.set(e.cacheKey, t), this.refreshAtMs.set(e.cacheKey, this.computeRefreshAtMs(t)), this.metrics.tokenMinted({
                        agentId: e.mintAgentId,
                        reason: e.reason
                    }), c = !0, !0 === u?.allowed && l?.end({
                        ok: !0
                    }, u), t;
                } catch (n) {
                    s = n, o = Ge(n)?.retryAfterMs;
                    const i = this.classifyMintRetry({
                        error: n,
                        attempt: a,
                        maxAttempts: r,
                        policy: t,
                        retryAfterMs: o
                    });
                    if ("stop" === i.kind) {
                        void 0 !== i.denied && this.metrics.tokenMintRetryDenied?.({
                            agentId: e.mintAgentId,
                            reason: i.denied
                        });
                        break;
                    }
                    if (t >= 1 && !this.mintRetryBudget.tryConsumeRetry()) {
                        this.metrics.tokenMintRetryDenied?.({
                            agentId: e.mintAgentId,
                            reason: "budget"
                        });
                        break;
                    }
                    this.metrics.tokenMintRetried?.({
                        agentId: e.mintAgentId,
                        attempt: a,
                        delayMs: i.delayMs
                    }), await this.sleep(i.delayMs);
                }
            }
        } finally{
            !0 !== u?.allowed || c || void 0 === s || l?.end({
                ok: !1,
                error: new ye({
                    cause: s,
                    attempts: a,
                    retryAfterMs: o
                }),
                transient: Ve(s)
            }, u);
        }
        if (Ye(s)) throw s;
        const d = t < 1 ? s : new ye({
            cause: s,
            attempts: a,
            retryAfterMs: o
        });
        throw this.recordMintFailure({
            cacheKey: e.cacheKey,
            agentId: e.mintAgentId,
            error: d
        }), d;
    }
    classifyMintRetry(e) {
        if (e.policy < 1) return {
            kind: "stop"
        };
        if (Ye(e.error)) return {
            kind: "stop"
        };
        if (!Ve(e.error)) return {
            kind: "stop"
        };
        if (void 0 !== e.retryAfterMs && e.retryAfterMs > this.mintRetryMaxDelayMs) return {
            kind: "stop",
            denied: "retry_after"
        };
        if (e.attempt >= e.maxAttempts) return {
            kind: "stop",
            denied: "max_attempts"
        };
        return {
            kind: "retry",
            delayMs: void 0 !== e.retryAfterMs ? e.retryAfterMs : this.jitteredMintRetryDelayMs()
        };
    }
    unitRandom() {
        const e = this.random();
        return Number.isFinite(e) ? Math.max(0, Math.min(e, 1)) : 0;
    }
    jitteredMintRetryDelayMs() {
        const e = .8 + 2 * this.unitRandom() * .2;
        return Math.max(1, Math.min(this.mintRetryMaxDelayMs, Math.floor(this.mintRetryBaseDelayMs * e)));
    }
    terminalDenialCacheMs() {
        const e = this.mintTerminalDenialCacheMs, t = "function" == typeof e ? e() : e;
        return 0 === t ? 0 : "number" != typeof t || !Number.isFinite(t) || t < 0 ? yo : t;
    }
    mintDeniedUntilMs(e) {
        const t = this.now();
        let r;
        const n = (e, n)=>{
            "terminal" !== n.kind && "stand_down" !== n.kind || "terminal" === n.kind && 0 === this.terminalDenialCacheMs() || n.untilMs > t && !this.hasUnexpiredToken(e) && (void 0 === r || n.untilMs > r) && (r = n.untilMs);
        };
        if (void 0 !== e) {
            const t = this.mintNegativeCache.get(e);
            return void 0 !== t && n(e, t), r;
        }
        for (const [e, t] of this.mintNegativeCache)n(e, t);
        return r;
    }
    hasUnexpiredToken(e) {
        const t = this.tokens.get(e);
        return void 0 !== t && t.expiresAtMs > this.now();
    }
    stillValidTokenDespiteTerminalDenial(e, t) {
        if (void 0 === t || t.expiresAtMs <= this.now()) return;
        const r = this.mintNegativeCache.get(e);
        return void 0 === r || "terminal" !== r.kind || this.now() >= r.untilMs || 0 === this.terminalDenialCacheMs() ? void 0 : t;
    }
    recordMintFailure(e) {
        const { cacheKey: t, agentId: r, error: n } = e, s = n instanceof ye ? n.cause : n, o = Ie(s), i = this.terminalDenialCacheMs();
        if (Se(s) && i > 0) {
            const e = Ue(s), a = void 0 === e ? i : Io(e);
            o && this.evictCachedToken(t);
            const c = this.now() + a;
            return this.mintNegativeCache.set(t, {
                error: n,
                untilMs: c,
                backoff: this.createMintNegativeCacheBackoff("terminal"),
                kind: "terminal"
            }), this.metrics.tokenMintFailureCached?.({
                agentId: r,
                kind: "terminal"
            }), this.safeNotifyMintDenied({
                agentId: r,
                error: n,
                untilMs: c,
                kind: "terminal"
            }), void (o && this.safeNotifySyncDisabledMint({
                agentId: r,
                message: s instanceof Error ? s.message : String(s),
                retryAfterMs: je(s)
            }));
        }
        if (o) {
            this.evictCachedToken(t);
            const e = this.mintNegativeCache.get(t), o = "stand_down" === e?.kind ? e.backoff : this.createMintNegativeCacheBackoff("stand_down");
            return this.mintNegativeCache.set(t, {
                error: n,
                untilMs: _o,
                backoff: o,
                kind: "stand_down"
            }), this.metrics.tokenMintFailureCached?.({
                agentId: r,
                kind: "stand_down"
            }), this.safeNotifyMintDenied({
                agentId: r,
                error: n,
                untilMs: _o,
                kind: "stand_down"
            }), void this.safeNotifySyncDisabledMint({
                agentId: r,
                message: s instanceof Error ? s.message : String(s),
                retryAfterMs: je(s)
            });
        }
        be(s) ? this.writeMintNegativeCache({
            cacheKey: t,
            agentId: r,
            error: n,
            kind: "backoff"
        }) : this.resolveMintRetryPolicyVersion() >= 1 && Ve(s) && this.writeMintNegativeCache({
            cacheKey: t,
            agentId: r,
            error: n,
            kind: "transient",
            retryAfterMs: n instanceof ye ? n.retryAfterMs : Ge(s)?.retryAfterMs
        });
    }
    writeMintNegativeCache(e) {
        const t = this.mintNegativeCache.get(e.cacheKey), r = t?.kind === e.kind ? t.backoff : this.createMintNegativeCacheBackoff(e.kind), n = r.recordFailure(), s = e.retryAfterMs, o = void 0 !== s ? Math.max(n, this.jitteredRetryAfterMs(s)) : n;
        this.mintNegativeCache.set(e.cacheKey, {
            error: e.error,
            untilMs: this.now() + o,
            backoff: r,
            kind: e.kind
        }), this.metrics.tokenMintFailureCached?.({
            agentId: e.agentId,
            kind: e.kind
        });
    }
    createMintNegativeCacheBackoff(e) {
        const t = "transient" === e;
        return new s({
            baseDelayMs: t ? this.resolveTransientNegativeCacheBaseMs() : this.mintNegativeCacheBaseMs,
            maxDelayMs: t ? this.resolveTransientNegativeCacheMaxMs() : this.mintNegativeCacheMaxMs,
            jitter: .2,
            random: this.random
        });
    }
    jitteredRetryAfterMs(e) {
        const t = .8 + 2 * this.unitRandom() * .2;
        return Math.max(e, Math.floor(e * t));
    }
    safeNotifySyncDisabledMint(e) {
        this.safeNotifyCallback(this.onSyncDisabledMint, e);
    }
    safeNotifyMintDenied(e) {
        this.safeNotifyCallback(this.onMintDenied, e);
    }
    safeNotifyCallback(e, t) {
        if (void 0 === e) return;
        let r;
        try {
            r = e(t);
        } catch  {
            return;
        }
        null != r && "function" == typeof r.then && r.then(()=>{}, ()=>{});
    }
}
function ko(e) {
    if ("function" == typeof e.value) return e.value;
    const t = n({
        value: e.value ?? e.fallback,
        name: e.name,
        context: "TokenCachingAgentStoreClient"
    });
    return ()=>t;
}
function xo(e) {
    const { value: t, name: r, context: n } = e;
    if (!Number.isFinite(t) || t < 0 || t > 1) throw new RangeError(`${n} ${r} must be a finite number in [0, 1], got ${t}`);
    return t;
}
function Eo(e) {
    return e <= 0 ? Promise.resolve() : new Promise((t)=>{
        setTimeout(t, e);
    });
}
function Io(e) {
    return Math.min(Math.max(Math.floor(e), wo), vo);
}
function To(e) {
    const t = e.reason;
    return t instanceof Error ? t : new DOMException("The operation was aborted", "AbortError");
}
function Co(e) {
    const t = e.storeIds[0];
    if (void 0 === t || "" === t) throw new i("Agent store token did not include a scoped store id");
    return t;
}
function Po(e) {
    return e.shareId ?? e.agentId;
}
function Ao(e) {
    if (e instanceof ye && e.cause instanceof Error) return Ao(e.cause);
    if (e instanceof i) return !0;
    const t = "status" in e ? e.status : void 0;
    if (401 === t || 403 === t) return !0;
    const r = "code" in e ? e.code : void 0;
    return 7 === r || 16 === r || "PermissionDenied" === r || "Unauthenticated" === r || "PERMISSION_DENIED" === r || "UNAUTHENTICATED" === r;
}
class Ro {
    constructor(e, t = {}){
        if (this.inner = e, this.throttleGates = new Map, this.maxAttempts = t.maxAttempts ?? 3, !Number.isInteger(this.maxAttempts) || this.maxAttempts < 1) throw new RangeError(`RetryingAgentStoreClient maxAttempts must be a positive integer, got ${this.maxAttempts}`);
        if (this.baseDelayMs = n({
            value: t.baseDelayMs ?? 250,
            name: "baseDelayMs",
            context: "RetryingAgentStoreClient"
        }), this.maxDelayMs = n({
            value: t.maxDelayMs ?? 5e3,
            name: "maxDelayMs",
            context: "RetryingAgentStoreClient"
        }), this.baseDelayMs > this.maxDelayMs) throw new RangeError(`RetryingAgentStoreClient baseDelayMs (${this.baseDelayMs}) must be <= maxDelayMs (${this.maxDelayMs})`);
        const r = t.multiplier ?? 2;
        if (!Number.isFinite(r) || r < 1) throw new RangeError(`RetryingAgentStoreClient multiplier must be >= 1, got ${r}`);
        var s;
        this.multiplier = r, this.sleep = t.sleep ?? Fo, this.currentMintRetryPolicyVersion = ()=>Jo(t.mintRetryPolicyVersion), this.shouldRetry = t.shouldRetry ?? (s = t.mintRetryPolicyVersion, (e)=>e instanceof ye && Jo(s) < 1 ? Oo(e.cause) : Oo(e)), this.listener = t.listener, this.now = t.now ?? Date.now, this.random = t.random ?? Math.random;
        const o = e.completeMultipartWrites;
        void 0 !== o && (this.completeMultipartWrites = (t)=>this.callWithRetries({
                agentId: t.agentId,
                op: "complete_multipart_writes",
                signal: t.signal
            }, ()=>o.call(e, t)));
        const i = e.abortMultipartWrites;
        void 0 !== i && (this.abortMultipartWrites = (t)=>this.callWithRetries({
                agentId: t.agentId,
                op: "abort_multipart_writes",
                signal: t.signal
            }, ()=>i.call(e, t)));
        const a = e.rmdir;
        void 0 !== a && (this.rmdir = (t)=>this.callWithRetries({
                agentId: t.agentId,
                op: "rmdir",
                signal: t.signal
            }, ()=>a.call(e, t)));
    }
    getResolvedStoreId(e) {
        return this.inner.getResolvedStoreId?.(e);
    }
    async listFiles(e) {
        return await this.callWithRetries({
            agentId: e.agentId,
            op: "list",
            signal: e.signal
        }, ()=>this.inner.listFiles(e));
    }
    async presignReads(e) {
        return await this.callWithRetries({
            agentId: e.agentId,
            op: "presign_reads",
            signal: e.signal
        }, ()=>this.inner.presignReads(e));
    }
    async presignWrites(e) {
        return await this.callWithRetries({
            agentId: e.agentId,
            op: "presign_writes",
            signal: e.signal
        }, ()=>this.inner.presignWrites(e));
    }
    async deleteFiles(e) {
        const t = this.inner.deleteFiles?.bind(this.inner);
        if (void 0 === t) throw new Error("RetryingAgentStoreClient: inner client does not support deleteFiles");
        return await this.callWithRetries({
            agentId: e.agentId,
            op: "delete_files",
            signal: e.signal
        }, ()=>t(e));
    }
    invalidateListCache(e) {
        this.inner.invalidateListCache?.(e);
    }
    versionProbeTarget(e) {
        return this.inner.versionProbeTarget?.(e);
    }
    async callWithRetries(e, t) {
        let r, n = 0;
        for(; n < this.maxAttempts;){
            n += 1;
            try {
                await this.awaitThrottleGate(e);
            } catch (t) {
                this.rethrowThrottleWait({
                    context: e,
                    waitError: t,
                    lastError: r,
                    attempt: n
                });
            }
            try {
                const r = await t();
                return this.clearThrottleGate(e.agentId), r;
            } catch (t) {
                t instanceof ye && this.currentMintRetryPolicyVersion() >= 1 && this.rethrowMintFailure({
                    context: e,
                    error: t,
                    attempt: n
                }), r = t;
                const s = this.shouldRetry(t) && !0 !== e.signal?.aborted, o = s && n < this.maxAttempts, i = Ge(t);
                if (s && (void 0 !== i ? this.notifyThrottled({
                    context: e,
                    error: t,
                    attempt: n,
                    exhausted: !o,
                    retryAfterMs: i.retryAfterMs,
                    scope: i.scope
                }) : this.notifyNetworkError({
                    context: e,
                    error: t,
                    attempt: n,
                    exhausted: !o
                })), void 0 !== i && this.armThrottleGate(e.agentId, i.retryAfterMs), !o) throw t;
                if (void 0 !== i) continue;
                try {
                    await this.sleep(this.computeAttemptDelayMs(n));
                } catch  {
                    throw s && this.notifyNetworkError({
                        context: e,
                        error: t,
                        attempt: n,
                        exhausted: !0
                    }), t;
                }
            }
        }
        throw r ?? new Error("RetryingAgentStoreClient: no result");
    }
    rethrowMintFailure({ context: e, error: t, attempt: r }) {
        const n = Ge(t);
        throw void 0 !== n ? (this.notifyThrottled({
            context: e,
            error: t,
            attempt: r,
            exhausted: !0,
            retryAfterMs: t.retryAfterMs ?? n.retryAfterMs,
            scope: n.scope
        }), this.armThrottleGate(e.agentId, t.retryAfterMs ?? n.retryAfterMs)) : Ve(t) && this.notifyNetworkError({
            context: e,
            error: t,
            attempt: r,
            exhausted: !0
        }), t;
    }
    notifyNetworkError({ context: e, error: t, attempt: r, exhausted: n }) {
        const s = {
            agentId: e.agentId,
            op: e.op,
            errorClass: qo(t),
            attempt: r,
            exhausted: n
        };
        fo(this.listener, "onNetworkError", s);
    }
    notifyThrottled({ context: e, error: t, attempt: r, exhausted: n, retryAfterMs: s, scope: o }) {
        const i = {
            agentId: e.agentId,
            op: e.op,
            errorClass: Do(t),
            attempt: r,
            exhausted: n,
            retryAfterMs: s,
            scope: o
        };
        fo(this.listener, "onThrottled", i);
    }
    computeAttemptDelayMs(e) {
        const t = this.baseDelayMs * this.multiplier ** (e - 1);
        return Math.max(0, Math.min(this.maxDelayMs, Math.floor(t)));
    }
    rethrowThrottleWait({ context: e, waitError: t, lastError: r, attempt: n }) {
        if (!(Bo(t) || !0 === e.signal?.aborted)) throw r ?? t;
        if (void 0 !== r) {
            const t = Ge(r);
            void 0 !== t ? this.notifyThrottled({
                context: e,
                error: r,
                attempt: n,
                exhausted: !0,
                retryAfterMs: t.retryAfterMs,
                scope: t.scope
            }) : this.shouldRetry(r) && this.notifyNetworkError({
                context: e,
                error: r,
                attempt: n,
                exhausted: !0
            });
        }
        if (Bo(t)) throw t;
        if (void 0 !== e.signal) throw No(e.signal);
        throw t;
    }
    async awaitThrottleGate(e) {
        const t = this.throttleGates.get(e.agentId);
        if (void 0 === t) return;
        const r = t.untilMs - this.now();
        r <= 0 || await async function(e, t) {
            if (void 0 === t) return await e;
            if (t.aborted) throw No(t);
            return await new Promise((r, n)=>{
                const s = ()=>{
                    o(), n(No(t));
                }, o = ()=>{
                    t.removeEventListener("abort", s);
                };
                t.addEventListener("abort", s, {
                    once: !0
                }), e.then((e)=>{
                    o(), r(e);
                }, (e)=>{
                    o(), n(e);
                });
            });
        }(this.sleep(r), e.signal);
    }
    armThrottleGate(e, t) {
        const r = this.now();
        let n = this.throttleGates.get(e);
        void 0 === n && (n = {
            untilMs: r,
            backoff: new s({
                baseDelayMs: this.baseDelayMs,
                maxDelayMs: this.maxDelayMs,
                multiplier: this.multiplier,
                jitter: .2,
                random: this.random
            })
        }, this.throttleGates.set(e, n));
        const o = n.untilMs > r ? n.untilMs - r : n.backoff.recordFailure(), i = Math.max(o, this.jitterDelayMs(t));
        return n.untilMs = Math.max(n.untilMs, r + i), n.untilMs - r;
    }
    jitterDelayMs(e) {
        const t = this.random(), r = .8 + 2 * (Number.isFinite(t) ? Math.max(0, Math.min(t, 1)) : 0) * .2;
        return Math.max(1, Math.floor(e * r));
    }
    clearThrottleGate(e) {
        const t = this.throttleGates.get(e);
        void 0 !== t && t.untilMs <= this.now() && this.throttleGates.delete(e);
    }
}
const Mo = new Set([
    se.C.Unavailable,
    se.C.ResourceExhausted,
    se.C.Internal,
    se.C.Aborted,
    se.C.DeadlineExceeded
]);
function Jo(e) {
    return "function" == typeof e ? e() : e ?? ds;
}
function Oo(e) {
    if (e instanceof ye) return !1;
    if (e instanceof c || e instanceof a || e instanceof l) return !1;
    if (function(e) {
        return "object" == typeof e && null !== e && "code" in e && "round_aborted" === e.code;
    }(e) || Bo(e)) return !1;
    if (function(e) {
        if (e instanceof Error) return Ao(e);
        if ("object" == typeof e && null !== e) return Ao(e);
        return !1;
    }(e)) return !1;
    const t = fe(e);
    return void 0 !== t ? !!Mo.has(t) || t === se.C.Unknown && (Qe(e) || Xe(e)) : !(!Qe(e) && !Xe(e)) || (e instanceof TypeError || e instanceof RangeError || e instanceof SyntaxError || ReferenceError, !1);
}
function Bo(e) {
    if (e instanceof Error && "AbortError" === e.name) return !0;
    return fe(e) === se.C.Canceled;
}
function Do(e) {
    const t = fe(e);
    return t === se.C.ResourceExhausted ? "resource_exhausted" : t === se.C.Unavailable ? "unavailable" : qo(e);
}
function qo(e) {
    if (e instanceof ye) return qo(e.cause);
    if (e instanceof Error) {
        const t = e.code;
        return "string" == typeof t && t.length > 0 ? t : "number" == typeof t && Number.isFinite(t) ? `code_${t}` : e.name;
    }
    if ("object" == typeof e && null !== e) {
        const t = e.code;
        if ("string" == typeof t && t.length > 0) return t;
    }
    return "unknown";
}
function No(e) {
    const t = e.reason;
    return t instanceof Error ? t : new DOMException("The operation was aborted", "AbortError");
}
function Fo(e) {
    return e <= 0 ? Promise.resolve() : new Promise((t)=>{
        setTimeout(t, e);
    });
}
const Uo = "root-id", Lo = 384, $o = 128, jo = 50, Go = new Int32Array(new SharedArrayBuffer(4));
let zo = 0;
const Wo = new Set([
    "ENOENT",
    "ENOTDIR",
    "ELOOP"
]);
function Ho(e) {
    const t = ti(e);
    return "id" === t.kind ? {
        kind: "present",
        rootId: t.id
    } : "refused" === t.kind ? {
        kind: "unreadable"
    } : {
        kind: "missing"
    };
}
function Ko(e) {
    const t = ti(e);
    return "id" === t.kind ? t.id : void 0;
}
function Vo(e) {
    const t = ti(e);
    if ("id" === t.kind) return t.id;
    if ("absent" === t.kind) {
        try {
            (0, Wt.rs)(e);
        } catch  {
            return;
        }
        return function(e, t) {
            if (zo > 0) return t();
            const r = `${e}.lock`, n = function(e) {
                const t = Xo(e);
                if ("notadb" !== t) return t;
                Atomics.wait(Go, 0, 0, 2);
                const r = Xo(e);
                if ("notadb" !== r) return r;
                !function(e) {
                    let t;
                    try {
                        t = p.openSync(e, function() {
                            const e = p.constants;
                            let t = e.O_RDWR ?? 0;
                            "number" == typeof e.O_NOFOLLOW && (t |= e.O_NOFOLLOW);
                            "number" == typeof e.O_CLOEXEC && (t |= e.O_CLOEXEC);
                            return t;
                        }());
                        const r = p.fstatSync(t);
                        if (!r.isFile() || r.size > 1048576) return;
                        const n = p.lstatSync(e);
                        if (!n.isFile() || n.dev !== r.dev || n.ino !== r.ino) return;
                        p.ftruncateSync(t, 0), p.fsyncSync(t);
                    } catch  {
                        return;
                    } finally{
                        if (void 0 !== t) try {
                            p.closeSync(t);
                        } catch  {}
                    }
                }(e);
                const n = Xo(e);
                return "notadb" === n ? "failed" : n;
            }(r);
            if ("busy" === n) return ei(e);
            if ("failed" === n) return;
            zo += 1;
            try {
                return t();
            } finally{
                zo -= 1;
                try {
                    n.close();
                } catch  {}
            }
        }(e, ()=>{
            const t = ti(e);
            return "id" === t.kind ? t.id : "absent" === t.kind && function(e) {
                let t;
                try {
                    t = p.openSync(e, ir());
                } catch (e) {
                    return ri(e) && "ENOENT" === e.code;
                }
                let r = !1;
                try {
                    const e = p.fstatSync(t);
                    if (!e.isFile()) return !1;
                    r = 0 === e.size;
                } catch  {
                    return !1;
                } finally{
                    p.closeSync(t);
                }
                if (!r) return !0;
                try {
                    return p.unlinkSync(e), !0;
                } catch (e) {
                    return ri(e) && "ENOENT" === e.code;
                }
            }(e) ? function(e) {
                const t = (0, Ys.randomUUID)();
                let r;
                try {
                    return r = p.openSync(e, ar(), Lo), p.writeFileSync(r, t, {
                        encoding: "utf8"
                    }), p.fsyncSync(r), p.fchmodSync(r, Lo), t;
                } catch (t) {
                    if (void 0 !== r) try {
                        p.unlinkSync(e);
                    } catch  {}
                    return ri(t) && "EEXIST" === t.code ? ei(e) : void 0;
                } finally{
                    if (void 0 !== r) try {
                        p.closeSync(r);
                    } catch  {}
                }
            }(e) : void 0;
        });
    }
}
const Yo = new Set([
    5,
    6
]), Qo = 26;
function Xo(e) {
    try {
        (0, Wt.rs)(e);
    } catch  {
        return "failed";
    }
    if (!function(e) {
        try {
            const t = p.openSync(e, ar(), Lo);
            return p.closeSync(t), !0;
        } catch (e) {
            if (!ri(e) || "EEXIST" !== e.code) return !1;
        }
        let t;
        try {
            return t = p.openSync(e, ir()), p.fstatSync(t).isFile();
        } catch  {
            return !1;
        } finally{
            if (void 0 !== t) try {
                p.closeSync(t);
            } catch  {}
        }
    }(e)) return "failed";
    let t, r;
    try {
        t = p.lstatSync(e);
    } catch  {
        return "failed";
    }
    if (!t.isFile()) return "failed";
    try {
        r = function(e) {
            return new (process.getBuiltinModule("node:sqlite")).DatabaseSync(e);
        }(e);
        const n = p.lstatSync(e);
        return n.isFile() && n.dev === t.dev && n.ino === t.ino ? (r.exec("PRAGMA busy_timeout = 0"), r.exec("PRAGMA journal_mode = OFF"), r.exec("BEGIN EXCLUSIVE"), r) : (r.close(), "failed");
    } catch (e) {
        try {
            r?.close();
        } catch  {}
        return function(e) {
            const t = Zo(e);
            return void 0 !== t && Yo.has(t);
        }(e) ? "busy" : Zo(e) === Qo ? "notadb" : "failed";
    }
}
function Zo(e) {
    if (e instanceof Error && "errcode" in e) return "number" == typeof e.errcode ? e.errcode : void 0;
}
function ei(e) {
    const t = Date.now() + jo;
    for(;;){
        const r = ti(e);
        if ("id" === r.kind) return r.id;
        if ("absent" !== r.kind || Date.now() >= t) return;
        Atomics.wait(Go, 0, 0, 2);
    }
}
function ti(e) {
    let t;
    try {
        t = p.openSync(e, ir());
    } catch (e) {
        return ri(e) && Wo.has(e.code ?? "") ? {
            kind: "absent"
        } : {
            kind: "refused"
        };
    }
    try {
        const e = p.fstatSync(t);
        if (!e.isFile() || e.size > $o) return {
            kind: "invalid"
        };
        if (0 === e.size) return {
            kind: "absent"
        };
        const r = p.readFileSync(t, "utf8").trim();
        return (0, Yn.Ae)(r) ? {
            kind: "id",
            id: r
        } : {
            kind: "invalid"
        };
    } catch  {
        return {
            kind: "refused"
        };
    } finally{
        p.closeSync(t);
    }
}
function ri(e) {
    return e instanceof Error && "code" in e;
}
var ni = require("./module-65716.js"), si = require("./module-68388.js");
const oi = {
    totalMs: 6e3,
    pollMs: 200
};
function ii(e, t) {
    return "passive" !== t || e.listingComplete ? {
        kind: "ran",
        summary: e
    } : {
        kind: "holder-owns-fetch"
    };
}
function ai(e) {
    try {
        (0, Wt.rs)(e);
        const t = p.statSync(e);
        return t.isFile() ? t.size : void 0;
    } catch  {
        return;
    }
}
function ci(e) {
    return void 0 !== ai(e);
}
async function li(e) {
    const { citedPath: t, relPath: r, mountReady: n, indexTierEnabled: s, waitBudget: o, lookupIndex: i, pullPaths: a, onStaleness: c } = e;
    if (!n) return {
        tier: "mirror",
        outcome: ci(t) ? "served" : "unavailable",
        reason: "mount-not-ready"
    };
    const l = s ? function(e, t, r) {
        if ("unavailable" === e.kind) return "index-unavailable";
        if ("miss" === e.kind) return "index-miss";
        if ("tombstoned" === e.entry.state) return "index-tombstoned";
        if (ai(t) !== e.entry.size) return "index-size-mismatch";
        return function(e, t) {
            try {
                const r = t.split("/").at(-1);
                return void 0 !== r && "" !== r && p.readdirSync((0, h.dirname)(e)).includes(r);
            } catch  {
                return !1;
            }
        }(t, r) ? "index-hit" : "index-case-mismatch";
    }(i(), t, r) : "index-gate-off";
    if ("index-hit" === l) return a([
        r
    ]).then((e)=>{
        c(function(e) {
            if ("ran" !== e.kind) return "unknown";
            const { summary: t } = e;
            if (t.errors.length > 0 || t.refusals > 0) return "unknown";
            if (t.filesPulled > 0) return "behind";
            if (t.filesSkipped > 0) return "current";
            if (!t.listingComplete || t.pullsSkippedPendingDelete > 0 || t.pullsDeferred > 0) return "unknown";
            return "orphaned";
        }(e));
    }).catch(()=>{
        c("unknown");
    }), {
        tier: "index",
        outcome: "served",
        reason: "index-hit"
    };
    const u = await a([
        r
    ]);
    if (ci(t)) return {
        tier: "pull",
        outcome: "served",
        reason: l
    };
    if ("holder-owns-fetch" !== u.kind) return {
        tier: "pull",
        outcome: "unavailable",
        reason: ui(u)
    };
    const d = await async function(e, t) {
        const r = Date.now() + t.totalMs;
        for(;;){
            if (ci(e)) return !0;
            if (Date.now() >= r) return !1;
            await (0, ni.cb)(t.pollMs);
        }
    }(t, o);
    return {
        tier: "holder-wait",
        outcome: d ? "served" : "unavailable",
        reason: d ? "holder-served" : "holder-timeout"
    };
}
function ui(e) {
    if ("failed" === e.kind) return "pull-failed";
    if ("ran" !== e.kind) return "pull-unavailable";
    const { summary: t } = e;
    return t.errors.length > 0 ? "pull-failed" : t.listingComplete ? t.pullsSkippedPendingDelete > 0 ? "pull-unavailable" : "absent" : "pull-unavailable";
}
const di = Symbol.for("anysphere.agent-store-sync.cloud-subagent-store-preparers.v1");
function pi() {
    const e = Reflect.get(globalThis, di);
    if (e instanceof Set) return e;
    const t = new Set;
    return Reflect.set(globalThis, di, t), t;
}
function mi() {
    return performance.now();
}
class hi {
    constructor(){
        this.timers = new Map, this.disposed = !1;
    }
    schedule(e, t, r, n) {
        if (this.disposed) return;
        this.cancel(e);
        const s = Math.max(0, t - Date.now()), o = setTimeout(()=>{
            this.timers.get(e) === o && (this.timers.delete(e), r());
        }, s);
        o.unref?.(), this.timers.set(e, o);
    }
    cancel(e) {
        const t = this.timers.get(e);
        void 0 !== t && (clearTimeout(t), this.timers.delete(e));
    }
    dispose() {
        this.disposed = !0;
        for (const e of [
            ...this.timers.keys()
        ])this.cancel(e);
    }
}
class fi {
    constructor(e){
        this.entries = new Map, this.timerToken = 0, this.firing = !1, this.disposed = !1, this.coalesceMs = vi(e.coalesceMs), this.onTick = e.onTick;
    }
    setCoalesceMs(e) {
        const t = vi(e);
        if (t !== this.coalesceMs) {
            this.coalesceMs = t;
            for (const [e, t] of this.entries){
                const r = this.gridMsFor(t.requestedDueAtMs);
                this.entries.set(e, {
                    ...t,
                    gridMs: r,
                    dueAtMs: this.placedDueAtMs(t.requestedDueAtMs, r)
                });
            }
            this.firing || this.arm();
        }
    }
    schedule(e, t, r, n) {
        if (this.disposed) return;
        const s = this.gridMsFor(t);
        this.entries.set(e, {
            requestedDueAtMs: t,
            dueAtMs: this.placedDueAtMs(t, s),
            gridMs: s,
            run: r,
            group: n ?? e
        }), this.firing || this.arm();
    }
    cancel(e) {
        this.entries.delete(e) && (this.firing || this.arm());
    }
    dispose() {
        this.disposed = !0, this.entries.clear(), this.clearTimer();
    }
    placedDueAtMs(e, t) {
        return e <= Date.now() ? e : yi(e, t);
    }
    gridMsFor(e) {
        const t = e - Date.now();
        return t > 0 && t < this.coalesceMs ? 0 : this.coalesceMs;
    }
    arm() {
        let e;
        for (const t of this.entries.values())(void 0 === e || t.dueAtMs < e) && (e = t.dueAtMs);
        if (void 0 === e) return void this.clearTimer();
        if (void 0 !== this.timer && this.timerDueAtMs === e) return;
        this.clearTimer(), this.timerDueAtMs = e;
        const t = Math.max(0, e - Date.now()), r = this.timerToken;
        this.timer = setTimeout(()=>{
            r === this.timerToken && this.fire();
        }, t), this.timer.unref?.();
    }
    fire() {
        this.timer = void 0, this.timerDueAtMs = void 0, this.timerToken += 1;
        const e = Date.now() + this.coalesceMs, t = [];
        for (const [r, n] of this.entries)n.dueAtMs <= e && t.push([
            r,
            n
        ]);
        t.sort((e, t)=>e[1].dueAtMs - t[1].dueAtMs), this.firing = !0;
        try {
            const e = new Set;
            for (const [r, n] of t)if (this.entries.get(r) === n) {
                this.entries.delete(r), e.add(n.group);
                try {
                    n.run();
                } catch  {}
            }
            if (e.size > 0) try {
                this.onTick?.(e.size);
            } catch  {}
        } finally{
            this.firing = !1, this.arm();
        }
    }
    clearTimer() {
        this.timerToken += 1, void 0 !== this.timer && (clearTimeout(this.timer), this.timer = void 0), this.timerDueAtMs = void 0;
    }
}
function gi(e, t) {
    return e.sharedScheduler ? new fi({
        coalesceMs: e.periodicCoalesceMs,
        onTick: t
    }) : new hi;
}
function yi(e, t) {
    if (!Number.isFinite(e) || t <= 1) return e;
    const r = e % t;
    return 0 === r ? e : e + (t - r);
}
function wi(e) {
    const t = e.nowMs ?? Date.now();
    if (void 0 === e.previousDueAtMs) return t + e.intervalMs;
    const r = e.previousDueAtMs + e.intervalMs;
    return r <= t ? t + e.intervalMs : r;
}
function vi(e) {
    return !Number.isFinite(e) || e < 1 ? 1 : Math.floor(e);
}
async function _i(e) {
    if (!Number.isFinite(e.maxIdleMs) || e.maxIdleMs <= 0) return [];
    const t = e.now ?? Date.now, r = e.isMountLive ?? (()=>!1), n = e.windowId ?? `stale-root-sweep-${process.pid}`, s = e.lockIdentity ?? yr(), o = h.join(e.store.base, e.store.tmpDirName);
    let i;
    try {
        i = await p.promises.readdir(o, {
            withFileTypes: !0
        });
    } catch (e) {
        if (xi(e) && "ENOENT" === e.code) return [];
        throw e;
    }
    const a = [];
    for (const c of i){
        const i = c.name;
        if (!c.isDirectory() || c.isSymbolicLink()) continue;
        if (i.startsWith(bi)) {
            await Si(h.join(o, i));
            continue;
        }
        try {
            (0, Wt.qh)(i);
        } catch  {
            continue;
        }
        if (r(i)) continue;
        const l = (0, Wt.WX)(e.store, i), u = (0, Wt.dv)(l);
        try {
            (0, Wt.rs)(u);
            const r = ki(h.join(u, Wt.kR));
            if (void 0 === r || !r.isDirectory()) continue;
            if (t() - r.mtimeMs < e.maxIdleMs) continue;
            const c = await fr({
                lockPath: (0, Wt.N1)(l),
                windowId: n,
                identity: s,
                now: t,
                staleLockMs: Number.POSITIVE_INFINITY,
                mtimeUpdateMs: 0
            });
            if ("acquired" !== c.kind) continue;
            try {
                (0, Wt.rs)(u);
                const e = h.join(o, `${bi}${i}-${(0, Ys.randomUUID)()}`);
                await p.promises.rename(u, e), a.push(i), await p.promises.rm(e, {
                    recursive: !0,
                    force: !0
                });
            } finally{
                await c.lock.dispose().catch(()=>{});
            }
        } catch  {}
    }
    return a;
}
const bi = ".sweep-trash-";
async function Si(e) {
    try {
        (0, Wt.rs)(e), await p.promises.rm(e, {
            recursive: !0,
            force: !0
        });
    } catch  {}
}
function ki(e) {
    try {
        return p.lstatSync(e);
    } catch (e) {
        if (xi(e) && "ENOENT" === e.code) return;
        throw e;
    }
}
function xi(e) {
    return e instanceof Error && "string" == typeof e.code;
}
const Ei = require("node:timers");
var Ii = require("./module-37067.js"), Ti = require.t(Ii, 2), Ci = require("./module-44708.js"), Pi = require.t(Ci, 2);
const Ai = require("node:tls");
var Ri = require("./module-57075.js"), Mi = require("./module-46466.js");
const Ji = "The database connection is not open", Oi = "agent store local index is closed", Bi = "agent store audit index is closed";
function Di(e) {
    let t = e;
    const r = new Set;
    for(; "object" == typeof t && null !== t && !r.has(t);){
        if (r.add(t), void 0 !== qi(t)) return !0;
        t = "cause" in t ? t.cause : void 0;
    }
    return !1;
}
function qi(e) {
    if (!("message" in e) || "string" != typeof e.message) return;
    const t = e.message;
    return t === Ji ? e instanceof TypeError ? t : void 0 : t === Oi || t === Bi ? t : void 0;
}
function Ni(e) {
    return e === Ji || e === Oi || e === Bi;
}
function Fi({ agentId: e, summary: t, listener: r, pathHashSalt: n }) {
    if (void 0 === r) return;
    let s;
    for (const o of t.errors)try {
        Ui({
            agentId: e,
            error: o,
            listener: r,
            pathHashSalt: n
        });
    } catch (e) {
        void 0 === s && (s = e);
    }
    if (void 0 !== s) throw s;
}
function Ui({ agentId: e, error: t, listener: r, pathHashSalt: n }) {
    "symlink_refused" !== t.code && "toctou_swap_refused" !== t.code ? function(e) {
        return "fs_write_failed" === e.code || "fs_read_failed" === e.code;
    }(t) && fo(r, "onDiskFull", {
        agentId: e,
        op: "fs_read_failed" === t.code ? "fs_read" : "fs_write"
    }) : fo(r, "onSymlinkRefused", {
        agentId: e,
        op: "fs_read",
        relPathHash: Li({
            relPath: t.relPath,
            salt: $i(n)
        })
    });
}
function Li({ relPath: e, salt: t }) {
    return (0, Ys.createHash)("sha256").update(t).update("\0").update(e ?? "<unknown>").digest("hex").slice(0, 32);
}
function $i(e) {
    if (void 0 === e || 0 === e.length) throw new Error("notifySummaryResult: pathHashSalt is required when emitting symlink-refused events");
    return e;
}
const ji = new Set([
    "symlink_refused",
    "toctou_swap_refused",
    "fs_write_failed",
    "fs_read_failed"
]);
function Gi({ agentId: e, summary: t, listener: r, metricsEmitter: n, pathHashSalt: s, sinceLastSuccessMs: o }) {
    let i;
    if (void 0 !== n) try {
        !function({ agentId: e, summary: t, metricsEmitter: r, pathHashSalt: n, sinceLastSuccessMs: s }) {
            let o;
            const i = (e)=>{
                void 0 === o && (o = e);
            };
            try {
                r.onRoundCompleted?.(Zn({
                    agentId: e,
                    summary: t,
                    sinceLastSuccessMs: s
                }));
            } catch (e) {
                i(e);
            }
            const a = void 0 !== n && n.length > 0 ? n : void 0;
            if (void 0 !== r.onError) for (const n of t.errors){
                const t = {
                    agentId: e,
                    op: zi(n.code),
                    errorClass: Ni(n.message) ? "index_closed" : n.code,
                    relPathHash: void 0 === n.relPath || void 0 === a ? void 0 : Li({
                        relPath: n.relPath,
                        salt: a
                    }),
                    ...void 0 === n.timeoutClass ? {} : {
                        timeoutClass: n.timeoutClass
                    }
                };
                try {
                    r.onError(t);
                } catch (e) {
                    i(e);
                }
            }
            if (void 0 !== r.onConflict && t.conflicts.length > 0) {
                const n = (0, Wt.Pz)(e);
                for (const s of t.conflicts){
                    const t = {
                        agentId: e,
                        storeKind: n,
                        relPathHash: void 0 === a ? void 0 : Li({
                            relPath: s.relPath,
                            salt: a
                        }),
                        conflictRelPathHash: void 0 === a ? void 0 : Li({
                            relPath: s.conflictRelPath,
                            salt: a
                        })
                    };
                    try {
                        r.onConflict(t);
                    } catch (e) {
                        i(e);
                    }
                }
            }
            if (void 0 !== o) throw o;
        }({
            agentId: e,
            summary: t,
            metricsEmitter: n,
            pathHashSalt: s,
            sinceLastSuccessMs: o
        });
    } catch (e) {
        i = e;
    }
    try {
        Fi({
            agentId: e,
            summary: t,
            listener: r,
            pathHashSalt: s
        });
    } catch (e) {
        void 0 === i && (i = e);
    }
    if (void 0 !== i) throw i;
}
function zi(e) {
    switch(e){
        case "symlink_refused":
        case "toctou_swap_refused":
        case "fs_read_failed":
            return "fs_read";
        case "fs_write_failed":
            return "fs_write";
        case "upload_failed":
        case "write_conflict":
            return "blob_put";
        case "delete_failed":
            return "delete_files";
        case "download_failed":
            return "blob_get";
        default:
            return "unknown";
    }
}
const Wi = Symbol("sync-round-abandoned");
class Hi extends Error {
    constructor(){
        super("Agent store full sync stood aside for path sync"), this.name = "SyncRoundStoodAsideError";
    }
}
function Ki(e) {
    return e instanceof Hi;
}
function Vi(e) {
    return "path" === e || "path-yield" === e;
}
class Yi {
    constructor(){
        this.pending = [], this.yielding = !1;
    }
    enqueue(e, t) {
        return new Promise((r, n)=>{
            const s = {
                kind: e,
                run: t,
                resolve: r,
                reject: n
            };
            if (Vi(e)) {
                "path" === e && this.fullRoundStandAside?.abort(new Hi);
                const t = this.pending.findIndex((e)=>"full" === e.kind);
                -1 === t ? this.pending.push(s) : this.pending.splice(t, 0, s);
            } else this.pending.push(s);
            this.ensurePump();
        });
    }
    hasPendingPathRounds() {
        return this.pending.some((e)=>Vi(e.kind));
    }
    async yieldToPathRounds() {
        if (void 0 !== this.fullRoundStandAside && !this.yielding && this.hasPendingPathRounds()) {
            this.yielding = !0;
            try {
                for(;;){
                    if (!0 === this.fullRoundStandAside?.signal.aborted) return;
                    const e = this.pending.findIndex((e)=>Vi(e.kind));
                    if (-1 === e) return;
                    const [t] = this.pending.splice(e, 1);
                    try {
                        t.resolve(await t.run(void 0));
                    } catch (e) {
                        t.reject(e);
                    }
                }
            } finally{
                this.yielding = !1;
            }
        }
    }
    abandonInFlight() {
        const e = this.pending.splice(0);
        for (const t of e)t.reject(new Error("Agent store sync round abandoned by watchdog"));
        this.abandonInFlightReject?.(Wi), this.abandonInFlightReject = void 0, this.fullRoundStandAside = void 0;
    }
    async drain() {
        for(; this.pending.length > 0 || void 0 !== this.pumping;)await (this.pumping ?? Promise.resolve());
    }
    ensurePump() {
        void 0 === this.pumping && (this.pumping = this.pump().finally(()=>{
            this.pumping = void 0, this.pending.length > 0 && this.ensurePump();
        }));
    }
    async pump() {
        for(; this.pending.length > 0;){
            const e = this.pending.shift(), t = "full" === e.kind ? new AbortController : void 0;
            void 0 !== t && (this.fullRoundStandAside = t);
            const r = e.run(t?.signal), n = new Promise((e, t)=>{
                this.abandonInFlightReject = t;
            });
            try {
                const t = await Promise.race([
                    r,
                    n
                ]);
                e.resolve(t);
            } catch (t) {
                if (t === Wi) {
                    r.then(e.resolve, e.reject);
                    break;
                }
                e.reject(t);
            } finally{
                void 0 !== this.abandonInFlightReject && (this.abandonInFlightReject = void 0), this.fullRoundStandAside === t && (this.fullRoundStandAside = void 0);
            }
        }
    }
}
const Qi = Yn.EO, Xi = 67108864, Zi = 16777216, ea = 6e4, ta = 16777216, ra = 2592e6, na = 2880, sa = 864e5, oa = 2592e5, ia = _n, aa = bn, ca = Sn, la = kn, ua = In, da = xn, pa = An, ma = Rn, ha = 864e5;
function fa() {
    return {
        s3: new Lt({
            max: 8,
            reservedForPriority: 1
        }),
        list: new Lt({
            max: 4
        }),
        hash: new Lt({
            max: 4,
            reservedForPriority: 1
        }),
        presign: new Lt({
            max: 4,
            reservedForPriority: 1
        })
    };
}
class ga extends Error {
    constructor(e){
        super(e.message), this.name = "AgentStoreSyncError", this.code = e.code, this.relPath = e.relPath, this.cause = e.cause, this.httpStatus = e.httpStatus, this.retryable = e.retryable, this.timeoutClass = e.timeoutClass;
    }
}
class ya {
    constructor(e){
        if (this.remoteVersionStaleFromPathWrite = !1, this.lockOwnershipCheckedAtMs = 0, this.lockOwnershipCached = !0, this.stateMutation = Promise.resolve(), this.inFlightRounds = new Set, this.pendingLockLost = !1, this.orphanedRounds = new Set, this.roundScheduler = new Yi, this.roundChainAbandoned = !1, this.passiveRetryHandle = {}, this.passiveIndexHandle = {}, this.disposed = !1, this.closeFlushPending = !1, this.closing = !1, this.lockReleaseDeferred = !1, this.lastDisposeReleasedLock = !1, this.lastPullListingComplete = !1, this.recoveryDisarmed = !1, this.pathHashSalt = (0, Ys.randomBytes)(16).toString("hex"), this.roundJournaledConflictEmits = [], this.pushParkedUntilMs = new Map, this.pushParkBackoff = new Map, this.roundByteBudgets = new Map, this.unboundByteBudgets = new Map, this.roundQueueActivity = new Map, this.onPassiveRetryDue = ()=>{
            const e = this.passiveRetryDueAtMs;
            this.passiveRetryDueAtMs = void 0, this.disposed || this.closing || "passive" !== this.state || this.passiveRetryIntervalMs <= 0 || void 0 === this.periodicScheduler || (this.passiveRetryDueAtMs = this.armPassiveDeadline(this.passiveRetryHandle, wi({
                previousDueAtMs: e,
                intervalMs: this.passiveRetryIntervalMs
            }), this.onPassiveRetryDue), this.unpause().catch(()=>{}));
        }, this.onPassiveIndexDue = ()=>{
            const e = this.passiveIndexDueAtMs;
            this.passiveIndexDueAtMs = void 0, this.disposed || "passive" !== this.state || this.passiveIndexPollIntervalMs <= 0 || void 0 === this.periodicScheduler || void 0 === this.onPassiveIndexUpdated || void 0 === this.indexFilePath || (this.passiveIndexDueAtMs = this.armPassiveDeadline(this.passiveIndexHandle, wi({
                previousDueAtMs: e,
                intervalMs: this.passiveIndexPollIntervalMs
            }), this.onPassiveIndexDue), this.checkPassiveIndexProgress());
        }, this.activeRoundLane = "full", this.fullRoundParkedForYield = !1, this.pathsRefreshedDuringFullRound = new Set, !h.isAbsolute(e.filesDir)) throw new Error(`AgentStoreSyncEngine.filesDir must be absolute: ${e.filesDir}`);
        if (!h.isAbsolute(e.tmpDir)) throw new Error(`AgentStoreSyncEngine.tmpDir must be absolute: ${e.tmpDir}`);
        if (this.agentId = e.agentId, this.filesDir = h.resolve(e.filesDir), this.tmpDir = h.resolve(e.tmpDir), this.client = e.client, this.index = e.index, this.queues = e.queues, this.maxFileSizeBytes = e.maxFileSizeBytes ?? Qi, this.multipartUploadThresholdBytes = e.multipartUploadThresholdBytes ?? Xi, this.multipartPartSizeBytes = e.multipartPartSizeBytes ?? Zi, this.multipartPresignWindowSize = e.multipartPresignWindowSize ?? 8, this.pushOrder = e.pushOrder ?? "scan", this.pullPresignWindowSize = e.pullPresignWindowSize ?? 500, this.listWalkConcurrency = e.listWalkConcurrency ?? 4, this.multipartCompleteMaxAttempts = e.multipartCompleteMaxAttempts ?? 3, this.multipartMaxRestarts = e.multipartMaxRestarts ?? 1, this.multipartMaxConflictRenames = e.multipartMaxConflictRenames ?? 1, this.multipartMaxExpiryRefreshes = e.multipartMaxExpiryRefreshes ?? 1, !Number.isSafeInteger(this.multipartUploadThresholdBytes) || this.multipartUploadThresholdBytes < 1 || !Number.isSafeInteger(this.multipartPartSizeBytes) || this.multipartPartSizeBytes < 1 || !Number.isSafeInteger(this.multipartPresignWindowSize) || this.multipartPresignWindowSize < 1 || !Number.isSafeInteger(this.pullPresignWindowSize) || this.pullPresignWindowSize < 1 || !Number.isSafeInteger(this.listWalkConcurrency) || this.listWalkConcurrency < 1 || !Number.isSafeInteger(this.multipartCompleteMaxAttempts) || this.multipartCompleteMaxAttempts < 1 || !Number.isSafeInteger(this.multipartMaxRestarts) || this.multipartMaxRestarts < 0 || !Number.isSafeInteger(this.multipartMaxConflictRenames) || this.multipartMaxConflictRenames < 0 || !Number.isSafeInteger(this.multipartMaxExpiryRefreshes) || this.multipartMaxExpiryRefreshes < 0) throw new RangeError("AgentStoreSyncEngine multipart/pull-presign/list-walk controls must be safe integers within their minimums");
        this.blobIdleTimeoutMs = mc(e.blobIdleTimeoutMs), this.blobConnectTimeoutMs = hc(e.blobConnectTimeoutMs), this.resumeLockCallTimeoutMs = Math.max(0, e.resumeLockCallTimeoutMs ?? 0), this.tombstoneFullRefreshRoundsValue = Wa(e.tombstoneFullRefreshRounds), this.tombstoneFullRefreshIntervalMsValue = Ha(e.tombstoneFullRefreshIntervalMs), this.tombstonePruneSlackMsValue = Ka(e.tombstonePruneSlackMs), this.remoteVersionEnabledValue = !0 === e.remoteVersionEnabled, this.versionFullListIntervalMsValue = Ya(e.versionFullListIntervalMs), this.versionAuditSampleRateValue = Qa(e.versionAuditSampleRate), void 0 !== e.blobTransfer ? (this.blobTransfer = e.blobTransfer, this.blobTransfer instanceof pc && (this.blobTransfer.setBlobIdleTimeoutMs(this.blobIdleTimeoutMs), this.blobTransfer.setBlobConnectTimeoutMs(this.blobConnectTimeoutMs))) : this.blobTransfer = new pc({
            maxFileSizeBytes: this.maxFileSizeBytes,
            blobIdleTimeoutMs: this.blobIdleTimeoutMs,
            blobConnectTimeoutMs: this.blobConnectTimeoutMs
        }), this.fetchImpl = e.fetch ?? globalThis.fetch.bind(globalThis), this.now = e.now ?? Date.now, this.monotonicNow = e.monotonicNow ?? mi, this.validatePresignedUrl = e.validatePresignedUrl, this.lockProvider = e.lockProvider, this.rootIdFence = e.rootIdFence, this.syncMode = e.syncMode ?? "readWrite", this.platform = e.platform ?? process.platform, this.localStatFastPath = e.localStatFastPath ?? "off", this.localStatFastPathAuditRate = e.localStatFastPathAuditRate ?? 1, this.localStatRacyMarginMs = e.localStatRacyMarginMs ?? 2e3, this.random = e.random ?? Math.random, this.onStatFastPath = e.onStatFastPath, this.onMultipartAbandoned = e.onMultipartAbandoned, this.onRoundProgress = e.onRoundProgress, this.onRoundBodyStarted = e.onRoundBodyStarted, this.onStateChanged = e.onStateChanged, this.passiveRetryIntervalMs = e.passiveRetryIntervalMs ?? 5e3, this.passiveIndexPollIntervalMs = e.passiveIndexPollIntervalMs ?? 2e3, this.periodicScheduler = e.periodicScheduler, this.periodicSchedulerGroup = e.periodicSchedulerGroup ?? this, this.indexFilePath = e.indexPath, this.onPassiveIndexUpdated = e.onPassiveIndexUpdated, this.onWarn = e.onWarn, this.defaultSignal = e.signal, this.shouldRelinquishLockLost = e.shouldRelinquishLockLost ?? (()=>!0), this.state = e.initialState ?? "running", "running" === this.state && void 0 !== this.lockProvider && (this.state = "paused"), this.conflictJournal = new $t.aJ((0, $t.KD)(this.filesDir), {
            warn: (e, t)=>this.warn(e, t)
        }), this.pendingConflictJournal = new $t.Tj((0, $t.Zz)(this.filesDir), {
            warn: (e, t)=>this.warn(e, t)
        }), this.syncStatSchema();
    }
    syncStatSchema() {
        this.index.setStatSchemaEnabled(hn(this.localStatFastPath, this.platform));
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
    notifyRoundBodyStarted(e) {
        if (void 0 !== this.onRoundBodyStarted) try {
            this.onRoundBodyStarted(e);
        } catch (e) {
            this.warn("round body listener failed", e);
        }
    }
    emitRoundProgress(e) {
        if (void 0 !== this.onRoundProgress) try {
            this.onRoundProgress(e);
        } catch (e) {
            this.warn("progress listener failed", e);
        }
    }
    progressReporter(e) {
        const t = this.onRoundProgress, r = this.activeRoundSignal;
        return void 0 === t ? ()=>{} : (t)=>{
            (void 0 === r || !r.aborted && this.activeRoundSignal === r) && ("blob_put_bytes" !== e && "blob_get_bytes" !== e ? this.emitRoundProgress({
                kind: e
            }) : this.emitRoundProgress({
                kind: e,
                bytes: t ?? 0
            }));
        };
    }
    isRoundWaitingOnlyForQueueSlots() {
        const e = this.roundQueueCounts();
        return void 0 !== e && e.waiting > 0 && 0 === e.runningLocal && 0 === e.runningNetwork;
    }
    isRoundRunningLocalWork() {
        const e = this.roundQueueCounts();
        return void 0 !== e && e.runningLocal > 0 && 0 === e.runningNetwork;
    }
    roundQueueCounts() {
        const e = this.activeRoundSignal;
        if (void 0 !== e) return this.roundQueueActivity.get(e);
    }
    adjustRoundQueue(e, t, r) {
        if (void 0 === e) return;
        const n = this.roundQueueActivity.get(e) ?? {
            waiting: 0,
            runningLocal: 0,
            runningNetwork: 0
        };
        n[t] += r, 0 !== n.waiting || 0 !== n.runningLocal || 0 !== n.runningNetwork ? this.roundQueueActivity.set(e, n) : this.roundQueueActivity.delete(e);
    }
    async trackQueue(e, t, r = "network") {
        const n = this.activeRoundSignal, s = "local" === r ? "runningLocal" : "runningNetwork";
        this.adjustRoundQueue(n, "waiting", 1);
        let o = !1;
        try {
            return await e(async ()=>{
                o = !0, this.adjustRoundQueue(n, "waiting", -1), this.adjustRoundQueue(n, s, 1);
                try {
                    return await t();
                } finally{
                    this.adjustRoundQueue(n, s, -1);
                }
            });
        } finally{
            o || this.adjustRoundQueue(n, "waiting", -1);
        }
    }
    warn(e, t) {
        if (void 0 !== this.onWarn) try {
            this.onWarn(e, t);
        } catch  {}
    }
    pulledFileMode() {
        return "readOnly" === this.syncMode ? 256 : 384;
    }
    async pause() {
        await this.serialize(async ()=>{
            "paused" !== this.state && (this.transitionTo("paused", "pause"), await this.drainInFlightRounds(), this.attemptPendingConflictJournalFlushForShutdown(), this.orphanedRounds.size > 0 ? this.warn("pause proceeding with abandoned in-flight round; lock recovery deferred", void 0) : this.lockReleaseDeferred || await this.releaseLockIfHeld());
        });
    }
    async unpause() {
        await this.serialize(async ()=>{
            if (this.disposed || this.closing) return;
            if ("running" === this.state) return;
            if (void 0 === this.lockProvider) return void this.transitionTo("running", "unpause");
            if (this.orphanedRounds.size > 0) return void ("passive" !== this.state && this.transitionTo("passive", "unpause"));
            const e = await this.acquireLockBounded(this.lockProvider);
            if (void 0 !== e) this.lockHandle = e, this.lockReleaseDeferred = !1, this.lockOwnershipCheckedAtMs = 0, this.lockOwnershipCached = !0, this.transitionTo("running", "unpause");
            else if ("passive" !== this.state) {
                const e = this.lockProvider.peekHeldOwner?.();
                this.transitionTo("passive", "unpause", void 0 === e ? void 0 : {
                    kind: e.kind,
                    samePid: e.pid === process.pid
                });
            }
        });
    }
    async dispose(e) {
        await this.serialize(async ()=>{
            if (this.disposed) return;
            const t = this.state, r = "running" === this.state || this.closeFlushPending, n = !0 === e?.deferLockRelease;
            if (this.disposed = !0, this.stopPassiveTimers(), "paused" !== this.state ? this.transitionTo("paused", "unmount") : this.emitStateChanged({
                fromState: t,
                toState: "paused",
                reason: "unmount"
            }), await this.drainInFlightRounds(), this.orphanedRounds.size > 0) return this.attemptPendingConflictJournalFlushForShutdown(), void this.warn("dispose proceeding with abandoned in-flight round; lock recovery deferred", void 0);
            !n && this.closeFlushPending && this.clearLockReleaseDeferredIfIdle();
            let s = !1;
            if (r && !this.lockReleaseDeferred && (void 0 === this.lockProvider || void 0 !== this.lockHandle)) {
                try {
                    await this.runSyncRound({
                        finalFlush: !0,
                        signal: this.defaultSignal
                    });
                } catch  {}
                s = 0 === this.inFlightRounds.size && 0 === this.orphanedRounds.size;
            }
            this.attemptPendingConflictJournalFlushForShutdown(), s && (this.lockReleaseDeferred = !1), this.lockReleaseDeferred ? this.lastDisposeReleasedLock = !1 : (await this.releaseLockIfHeld(), this.lastDisposeReleasedLock = !0);
        });
    }
    transitionTo(e, t, r) {
        if (this.state === e) return;
        const n = this.state;
        this.state = e, "passive" === e ? (this.resetPassiveIndexBaseline(), this.startPassiveTimers()) : this.stopPassiveTimers(), this.emitStateChanged({
            fromState: n,
            toState: e,
            reason: t,
            ...void 0 === r ? {} : {
                heldBy: r
            }
        });
    }
    emitStateChanged(e) {
        if (void 0 !== this.onStateChanged) try {
            this.onStateChanged({
                agentId: this.agentId,
                ...e
            });
        } catch  {}
    }
    resetPassiveIndexBaseline() {
        this.lastIndexMtimeMs = void 0 === this.indexFilePath ? void 0 : Fa(this.indexFilePath);
    }
    setTombstoneFullRefreshRounds(e) {
        this.tombstoneFullRefreshRoundsValue = Wa(e);
    }
    setTombstoneFullRefreshIntervalMs(e) {
        this.tombstoneFullRefreshIntervalMsValue = Ha(e);
    }
    setTombstonePruneSlackMs(e) {
        this.tombstonePruneSlackMsValue = Ka(e);
    }
    setRemoteVersionEnabled(e) {
        this.remoteVersionEnabledValue = e;
    }
    setVersionFullListIntervalMs(e) {
        this.versionFullListIntervalMsValue = Ya(e);
    }
    setVersionAuditSampleRate(e) {
        this.versionAuditSampleRateValue = Qa(e);
    }
    setLocalStatFastPath(e) {
        void 0 !== e.mode && (this.localStatFastPath = e.mode), void 0 !== e.auditRate && Number.isFinite(e.auditRate) && (this.localStatFastPathAuditRate = e.auditRate), void 0 !== e.racyMarginMs && Number.isFinite(e.racyMarginMs) && (this.localStatRacyMarginMs = e.racyMarginMs), this.syncStatSchema();
    }
    setPassiveRetryIntervalMs(e) {
        e !== this.passiveRetryIntervalMs && (this.passiveRetryIntervalMs = e, this.disposed || "passive" !== this.state || this.startPassiveTimers());
    }
    setPassiveIndexPollIntervalMs(e) {
        e !== this.passiveIndexPollIntervalMs && (this.passiveIndexPollIntervalMs = e, this.disposed || "passive" !== this.state || this.startPassiveTimers());
    }
    setPeriodicScheduler(e) {
        if (e === this.periodicScheduler) return;
        const t = this.periodicScheduler, r = this.passiveRetryDueAtMs, n = this.passiveIndexDueAtMs;
        t?.cancel(this.passiveRetryHandle), t?.cancel(this.passiveIndexHandle), this.periodicScheduler = e, void 0 !== r && e.schedule(this.passiveRetryHandle, r, this.onPassiveRetryDue, this.periodicSchedulerGroup), void 0 !== n && e.schedule(this.passiveIndexHandle, n, this.onPassiveIndexDue, this.periodicSchedulerGroup);
    }
    startPassiveTimers() {
        this.stopPassiveTimers(), this.disposed || void 0 === this.lockProvider || (this.passiveRetryIntervalMs > 0 && (void 0 !== this.periodicScheduler ? this.passiveRetryDueAtMs = this.armPassiveDeadline(this.passiveRetryHandle, wi({
            intervalMs: this.passiveRetryIntervalMs
        }), this.onPassiveRetryDue) : (this.passiveRetryTimer = setInterval(()=>{
            this.disposed || this.closing || "passive" !== this.state || this.unpause().catch(()=>{});
        }, this.passiveRetryIntervalMs), this.passiveRetryTimer.unref?.())), this.passiveIndexPollIntervalMs > 0 && void 0 !== this.onPassiveIndexUpdated && void 0 !== this.indexFilePath && (void 0 !== this.periodicScheduler ? this.passiveIndexDueAtMs = this.armPassiveDeadline(this.passiveIndexHandle, wi({
            intervalMs: this.passiveIndexPollIntervalMs
        }), this.onPassiveIndexDue) : (this.passiveIndexTimer = setInterval(()=>{
            this.checkPassiveIndexProgress();
        }, this.passiveIndexPollIntervalMs), this.passiveIndexTimer.unref?.()), this.checkPassiveIndexProgress()));
    }
    armPassiveDeadline(e, t, r) {
        return this.periodicScheduler?.schedule(e, t, r, this.periodicSchedulerGroup), t;
    }
    checkPassiveIndexProgress() {
        if (this.disposed || "passive" !== this.state || void 0 === this.indexFilePath) return;
        const e = Fa(this.indexFilePath);
        if (void 0 !== e) if (void 0 !== this.lastIndexMtimeMs) {
            if (e > this.lastIndexMtimeMs) {
                this.lastIndexMtimeMs = e;
                try {
                    this.onPassiveIndexUpdated?.({
                        agentId: this.agentId,
                        mtimeMs: e
                    });
                } catch  {}
            }
        } else this.lastIndexMtimeMs = e;
    }
    stopPassiveTimers() {
        void 0 !== this.passiveRetryTimer && (clearInterval(this.passiveRetryTimer), this.passiveRetryTimer = void 0), void 0 !== this.passiveIndexTimer && (clearInterval(this.passiveIndexTimer), this.passiveIndexTimer = void 0), this.periodicScheduler?.cancel(this.passiveRetryHandle), this.periodicScheduler?.cancel(this.passiveIndexHandle), this.passiveRetryDueAtMs = void 0, this.passiveIndexDueAtMs = void 0;
    }
    async releaseLockIfHeld() {
        const e = this.lockHandle;
        if (void 0 === e) return;
        this.lockHandle = void 0;
        const t = e.release().catch(()=>{});
        await this.raceResumeLockCall(t, void 0);
    }
    async relinquishLock(e = "lock_lost") {
        void 0 !== this.lockProvider && await this.serialize(async ()=>{
            if (!this.disposed && "running" === this.state) {
                if (this.closeFlushPending || !this.shouldRelinquishLockLost()) return this.lockOwnershipCheckedAtMs = 0, void (this.lockOwnershipCached = !0);
                await this.releaseLockIfHeld(), this.transitionTo("passive", e);
            }
        });
    }
    markCloseFlushPending() {
        this.closeFlushPending = !0;
    }
    markClosing() {
        this.closing = !0;
    }
    markLockUnhealthy() {
        this.lockReleaseDeferred = !0, this.lockHandle?.markUnhealthy?.();
    }
    releasedLockOnDispose() {
        return this.lastDisposeReleasedLock;
    }
    clearLockReleaseDeferredIfIdle() {
        this.lockReleaseDeferred && 0 === this.inFlightRounds.size && 0 === this.orphanedRounds.size && (this.lockReleaseDeferred = !1);
    }
    async revalidateLockOwnership() {
        void 0 !== this.lockProvider && await this.serialize(async ()=>{
            if (this.disposed || this.closing || "running" !== this.state || void 0 === this.lockHandle) return;
            this.lockOwnershipCheckedAtMs = 0;
            !1 === await this.raceResumeLockCall(this.isLockStillOwnedOnDisk(), "timeout") && (await this.releaseLockIfHeld(), this.transitionTo("passive", "lock_lost"));
        });
    }
    async raceResumeLockCall(e, t) {
        const r = this.resumeLockCallTimeoutMs;
        if (r <= 0) return await e;
        let n;
        const s = new Promise((e)=>{
            n = setTimeout(()=>e(t), r), n.unref?.();
        });
        try {
            return await Promise.race([
                e,
                s
            ]);
        } finally{
            void 0 !== n && clearTimeout(n);
        }
    }
    async acquireLockBounded(e) {
        const t = this.resumeLockCallTimeoutMs, r = e.acquire();
        if (t <= 0) return await r;
        let n;
        const s = new Promise((e)=>{
            n = setTimeout(()=>e("timeout"), t), n.unref?.();
        });
        let o;
        try {
            o = await Promise.race([
                r,
                s
            ]);
        } finally{
            void 0 !== n && clearTimeout(n);
        }
        if ("timeout" !== o) return o;
        r.then((e)=>this.releaseOrphanedLockHandle(e)).catch(()=>{});
    }
    async releaseOrphanedLockHandle(e) {
        if (void 0 !== e && e !== this.lockHandle) try {
            await e.release();
        } catch  {}
    }
    async isLockStillOwnedOnDisk() {
        const e = this.lockHandle;
        if (void 0 === e?.verifyStillOwned) return !0;
        const t = this.now();
        if (0 !== this.lockOwnershipCheckedAtMs && t - this.lockOwnershipCheckedAtMs < 1e3) return this.lockOwnershipCached;
        let r;
        try {
            r = await e.verifyStillOwned();
        } catch  {
            r = !0;
        }
        return this.lockOwnershipCheckedAtMs = t, this.lockOwnershipCached = r, r;
    }
    async assertRoundStillOwnsLock(e, t) {
        if (this.throwIfRoundAborted(e), !0 === t?.bypassCache && (this.lockOwnershipCheckedAtMs = 0), !await this.isLockStillOwnedOnDisk()) throw this.pendingLockLost = !0, new ga({
            code: "lock_held_by_other",
            relPath: e,
            message: `Agent store engine for ${this.agentId} lost the write lock to another holder`
        });
    }
    async drainInFlightRounds() {
        for(await this.roundScheduler.drain(); this.inFlightRounds.size > 0;)await Promise.allSettled([
            ...this.inFlightRounds
        ]);
    }
    async serialize(e) {
        const t = this.stateMutation.then(e, e);
        this.stateMutation = t.then(Ia, Ia), await t;
    }
    async forceSync(e) {
        const t = e?.signal ?? this.defaultSignal;
        return this.throwIfSignalAborted(t), await this.scheduleRound("full", (r)=>this.runSyncRound({
                signal: wc(t, r),
                remoteUnchangedVersion: e?.remoteUnchangedVersion,
                roundOwner: e?.roundOwner
            }));
    }
    versionToProbe() {
        return this.remoteVersionToSend();
    }
    async syncPaths(e, t) {
        const r = t?.signal ?? this.defaultSignal;
        return this.throwIfSignalAborted(r), await this.scheduleRound(t?.lane ?? "path", ()=>this.runSyncPaths(e, r));
    }
    async pullPaths(e, t) {
        const r = t?.signal ?? this.defaultSignal;
        return this.throwIfSignalAborted(r), await this.scheduleRound(t?.lane ?? "path", ()=>this.withPublishedRoundSignal(r, void 0, ()=>this.runPullPathsBody(e)));
    }
    async yieldToPathRounds() {
        if ("full" === this.activeRoundLane && this.roundScheduler.hasPendingPathRounds()) {
            this.fullRoundParkedForYield = !0;
            try {
                await this.roundScheduler.yieldToPathRounds();
            } finally{
                this.fullRoundParkedForYield = !1, this.activeRoundLane = "full";
            }
            this.throwIfRoundAborted();
        }
    }
    notePathsRefreshedForParkedFullRound(e, t) {
        if (!this.fullRoundParkedForYield) return;
        const r = new Set(t.errors.map((e)=>e.relPath));
        for (const t of e)r.has(t) || this.pathsRefreshedDuringFullRound.add(t);
    }
    async runPullPathsBody(e) {
        const t = tc("pull-path");
        if (!this.syncRoundStillAuthorized()) return this.throwIfRoundAborted(), t;
        await this.assertRoundStillOwnsLock(), this.assertRootStillBound("pull path round");
        const r = this.monotonicNow();
        if (this.throwIfRoundAborted(), !this.tryRemoveObstructingFilesRoot(t)) return t.durationMs = this.monotonicNow() - r, t;
        this.ensureDirsExist();
        const n = new Map;
        for (const r of e){
            let e;
            try {
                e = v(r);
            } catch (e) {
                t.refusals++, t.errors.push({
                    relPath: r,
                    code: "not_regular_file",
                    message: e instanceof Error ? e.message : `Unsafe path: ${r}`
                });
                continue;
            }
            if ((0, Wt.TM)(e)) {
                t.reservedPathsSkipped = (t.reservedPathsSkipped ?? 0) + 1;
                continue;
            }
            const s = Ua(e), o = n.get(s);
            void 0 === o ? n.set(s, [
                e
            ]) : o.includes(e) || o.push(e);
        }
        const s = [];
        let i = !1, a = !0;
        const c = [];
        for (const [e, r] of n){
            this.throwIfRoundAborted();
            const n = this.monotonicNow();
            let l;
            try {
                l = await this.runQueuedControlRpc(this.queues.list, "listing_page", ()=>this.client.listFiles({
                        agentId: this.agentId,
                        relPath: e,
                        tombstoneMode: o.hw.OMIT,
                        signal: this.activeRoundSignal
                    }));
            } catch (e) {
                this.rethrowIfRoundAbort(e), this.rethrowIfLockLost(e), a = !1;
                for (const n of r)t.errors.push({
                    relPath: n,
                    code: e instanceof ga ? e.code : "list_failed",
                    message: e instanceof Error ? e.message : String(e),
                    ...yc(e)
                });
                continue;
            } finally{
                t.listMs = (t.listMs ?? 0) + (this.monotonicNow() - n);
            }
            if (i = !0, !0 === l.listingComplete) c.push(...r);
            else {
                a = !1;
                for (const e of l.files){
                    let t;
                    try {
                        t = v(e.relPath);
                    } catch  {
                        continue;
                    }
                    r.includes(t) && c.push(t);
                }
            }
            s.push(...this.pullCandidatesFromListing(l.files, t, new Set(r)));
        }
        return t.listingComplete = i && a, await this.pullCandidates(s, t), this.notePathsRefreshedForParkedFullRound(c, t), t.durationMs = this.monotonicNow() - r, t;
    }
    runQueued(e, t, r = "network") {
        return this.trackQueue((t)=>"full" !== this.activeRoundLane && void 0 !== e.enqueuePriority ? e.enqueuePriority(t) : e.enqueue(t), t, r);
    }
    async runQueuedControlRpc(e, t, r) {
        const n = this.progressReporter(t), s = await this.runQueued(e, r);
        return n(), s;
    }
    cappedRoundBytes(e, t, r) {
        const n = this.roundByteBudget(`${e}\0${t}\0${r}`), s = this.progressReporter(e);
        return (e)=>{
            const t = r - n.reported, o = t <= 0 ? 0 : Math.min(Math.max(0, e), t);
            n.reported += o, s(o);
        };
    }
    roundByteBudget(e) {
        const t = this.activeRoundSignal, r = void 0 === t ? this.unboundByteBudgets : this.budgetsForRound(t);
        let n = r.get(e);
        return void 0 === n && (n = {
            reported: 0
        }, r.set(e, n)), n;
    }
    budgetsForRound(e) {
        let t = this.roundByteBudgets.get(e);
        return void 0 === t && (t = new Map, this.roundByteBudgets.set(e, t)), t;
    }
    assertRoundAuthorized() {
        if (this.disposed) throw new ga({
            code: "paused",
            message: `Agent store engine for ${this.agentId} is disposed`
        });
        if ("paused" === this.state) throw new ga({
            code: "paused",
            message: `Agent store engine for ${this.agentId} is paused`
        });
        if ("passive" === this.state) throw new ga({
            code: "lock_held_by_other",
            message: `Agent store engine for ${this.agentId} lock is held by another holder`
        });
        if (void 0 !== this.lockProvider && void 0 === this.lockHandle) throw new ga({
            code: "lock_held_by_other",
            message: `Agent store engine for ${this.agentId} does not hold the write lock`
        });
    }
    listingSnapshotStaleFor(e) {
        return "full" === this.activeRoundLane && this.pathsRefreshedDuringFullRound.has(e);
    }
    async scheduleRound(e, t) {
        let r;
        this.assertRoundAuthorized(), await this.serialize(async ()=>{
            if (this.assertRoundAuthorized(), this.roundChainAbandoned) {
                if (this.orphanedRounds.size > 0 || this.inFlightRounds.size > 0) throw new ga({
                    code: "round_aborted",
                    message: "previous sync round still draining after watchdog abandon"
                });
                this.roundChainAbandoned = !1;
            }
            r = this.roundScheduler.enqueue(e, async (r)=>{
                this.activeRoundLane = e, "full" === e && this.pathsRefreshedDuringFullRound.clear();
                const n = t(r), s = n.then(Ia, Ia);
                this.inFlightRounds.add(s);
                try {
                    return await n;
                } finally{
                    this.inFlightRounds.delete(s);
                }
            });
        });
        try {
            return await r;
        } finally{
            this.pendingLockLost && (this.pendingLockLost = !1, this.shouldRelinquishLockLost() ? await this.relinquishLock("lock_lost") : (this.lockOwnershipCheckedAtMs = 0, this.lockOwnershipCached = !0));
        }
    }
    releaseWedgedRoundChain() {
        this.roundChainAbandoned = !0, this.roundScheduler.abandonInFlight();
        for (const e of this.inFlightRounds)this.orphanedRounds.add(e), e.finally(()=>{
            this.orphanedRounds.delete(e), 0 !== this.orphanedRounds.size || "passive" !== this.state || this.disposed || this.closing || this.unpause().catch(()=>{});
        });
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
        return 0 === this.orphanedRounds.size ? Promise.resolve() : Promise.allSettled([
            ...this.orphanedRounds
        ]).then(()=>this.whenAbandonedInFlightRoundsIdle());
    }
    throwIfRoundAborted(e) {
        const t = this.activeRoundSignal;
        !0 === t?.aborted && fc(e, t.reason);
    }
    throwIfSignalAborted(e) {
        !0 === e?.aborted && fc(void 0, e.reason);
    }
    isRoundAbortError(e) {
        return e instanceof ga ? "round_aborted" === e.code : !0 === this.activeRoundSignal?.aborted && (e instanceof ne.T && (e.code === se.C.DeadlineExceeded || e.code === se.C.Canceled) || e instanceof Error && ("AbortError" === e.name || "TimeoutError" === e.name));
    }
    rethrowIfRoundAbort(e, t) {
        if (Ki(e)) throw e;
        if (this.isRoundAbortError(e)) {
            if (e instanceof ga && "round_aborted" === e.code) throw e;
            fc(t, this.activeRoundSignal?.reason ?? e);
        }
    }
    rethrowIfLockLost(e) {
        if (e instanceof ga && "lock_held_by_other" === e.code) throw e;
    }
    async runSyncRound(e = {}) {
        return await this.withPublishedRoundSignal(e.signal, e.roundOwner, ()=>this.runSyncRoundBody(e));
    }
    async withPublishedRoundSignal(e, t, r) {
        const n = new AbortController;
        let s;
        if (void 0 !== e) if (e.aborted) n.abort(e.reason);
        else {
            const t = ()=>n.abort(e.reason);
            e.addEventListener("abort", t, {
                once: !0
            }), s = ()=>e.removeEventListener("abort", t);
        }
        const o = this.activeRoundSignal, i = this.activeRoundAbort;
        this.activeRoundSignal = n.signal, this.activeRoundAbort = n, this.notifyRoundBodyStarted(t);
        try {
            return await r();
        } finally{
            this.roundByteBudgets.delete(n.signal), this.activeRoundSignal = o, this.activeRoundAbort = i, s?.();
        }
    }
    abortActiveRound(e) {
        this.activeRoundAbort?.abort(e);
    }
    async awaitInFlightRoundsSettled() {
        await this.drainInFlightRounds();
    }
    async runSyncRoundBody(e = {}) {
        if (e.finalFlush) {
            if (void 0 !== this.lockProvider && void 0 === this.lockHandle) return tc();
        } else {
            if (!this.syncRoundStillAuthorized()) return this.throwIfRoundAborted(), tc();
            await this.assertRoundStillOwnsLock();
        }
        this.assertRootStillBound("full round"), this.throwIfRoundAborted();
        const t = this.monotonicNow(), r = tc();
        let n = !1;
        const s = "readOnly" !== this.syncMode;
        if (s && this.isDeletionArmed() && !this.recoveryDisarmed) {
            const e = this.checkRecordedFilesRootIdentity();
            if ("compromised" === e) {
                if (!this.prepareIdentityRecovery(r)) return r.durationMs = this.monotonicNow() - t, r;
                n = !0;
            } else if ("unreadable" === e) return r.errors.push({
                relPath: void 0,
                code: "fs_read_failed",
                message: "Agent store files root temporarily unreadable; deletion journal retained"
            }), r.durationMs = this.monotonicNow() - t, r;
        }
        if (!this.tryRemoveObstructingFilesRoot(r)) return r.durationMs = this.monotonicNow() - t, r;
        this.ensureDirsExist();
        let o = this.probeFilesRootIdentity();
        if (!n) {
            if (await this.pushAll(r), r.identityRecoveryWipeFailed) return r.durationMs = this.monotonicNow() - t, r;
            r.recoveryDisarms > 0 && (n = !0, this.ensureDirsExist(), o = this.probeFilesRootIdentity());
        }
        this.throwIfRoundAborted(), await this.pullAll(r, {
            remoteUnchangedVersion: n ? void 0 : e.remoteUnchangedVersion
        });
        let i = this.probeFilesRootIdentity();
        const a = Ca({
            start: o,
            end: i
        });
        if (s && a && 0 === r.recoveryDisarms && this.isDeletionArmed() && !this.recoveryDisarmed) {
            if (!this.prepareIdentityRecovery(r)) return r.durationMs = this.monotonicNow() - t, r;
            n = !0, this.ensureDirsExist();
            if (!await this.pullAllWithFollowUpWipe(r)) return r.durationMs = this.monotonicNow() - t, r;
            i = this.probeFilesRootIdentity();
        } else if (s && a && (n || r.recoveryDisarms > 0)) {
            if (!this.clearCompromisedFilesRoot(r)) return r.durationMs = this.monotonicNow() - t, r;
            this.ensureDirsExist();
            if (!await this.pullAllWithFollowUpWipe(r)) return r.durationMs = this.monotonicNow() - t, r;
            i = this.probeFilesRootIdentity();
        }
        return a || 0 !== r.recoveryDisarms || this.maybeArmDeletionDetection({
            summary: r,
            filesRootIdentity: i
        }), r.durationMs = this.monotonicNow() - t, r;
    }
    async runSyncPaths(e, t) {
        return await this.withPublishedRoundSignal(t, void 0, ()=>this.runSyncPathsBody(e, t));
    }
    async runSyncPathsBody(e, t) {
        if (!this.syncRoundStillAuthorized()) return this.throwIfRoundAborted(), tc("path");
        await this.assertRoundStillOwnsLock(), this.assertRootStillBound("path round");
        const r = this.monotonicNow(), n = tc("path");
        if (this.throwIfRoundAborted(), "readOnly" !== this.syncMode && this.isDeletionArmed() && !this.recoveryDisarmed) {
            const e = this.checkRecordedFilesRootIdentity();
            if ("compromised" === e) return this.prepareIdentityRecovery(n) ? (this.ensureDirsExist(), await this.pullAllWithFollowUpWipe(n), n.durationMs = this.monotonicNow() - r, n) : (n.durationMs = this.monotonicNow() - r, n);
            if ("unreadable" === e) return n.errors.push({
                relPath: void 0,
                code: "fs_read_failed",
                message: "Agent store files root temporarily unreadable; deletion journal retained"
            }), n.durationMs = this.monotonicNow() - r, n;
        }
        if (!this.tryRemoveObstructingFilesRoot(n)) return n.durationMs = this.monotonicNow() - r, n;
        if (this.ensureDirsExist(), "readOnly" === this.syncMode) return this.stripJournaledPendingConflictMirrors(), this.roundJournaledConflictEmits = [], this.flushPendingConflictJournalEmits(), this.stripJournaledPendingConflictMirrors(), n.durationMs = this.monotonicNow() - r, n;
        this.stripJournaledPendingConflictMirrors(), this.roundJournaledConflictEmits = [], this.flushPendingConflictJournalEmits();
        try {
            await this.pushPathsBody(e, n, t);
        } catch (e) {
            throw this.remoteVersionStaleFromPathWrite = !0, e;
        } finally{
            this.stripJournaledPendingConflictMirrors();
        }
        return ec(n) && (this.remoteVersionStaleFromPathWrite = !0), n.durationMs = this.monotonicNow() - r, n;
    }
    async pushPathsBody(e, t, r) {
        const n = new Set, s = [], o = [], i = new Map;
        for (const r of e){
            let e, a;
            try {
                e = v(r);
            } catch (e) {
                t.refusals++, t.errors.push({
                    relPath: r,
                    code: "not_regular_file",
                    message: e instanceof Error ? e.message : `Unsafe path: ${r}`
                });
                continue;
            }
            if (n.has(e)) continue;
            if (n.add(e), (0, Wt.TM)(e)) {
                t.reservedPathsSkipped = (t.reservedPathsSkipped ?? 0) + 1;
                continue;
            }
            try {
                a = T({
                    base: this.filesDir,
                    relPath: e
                });
            } catch (r) {
                if (r instanceof f) {
                    t.refusals++, t.errors.push({
                        relPath: e,
                        code: "symlink_refused" === r.code ? "symlink_refused" : "not_regular_file",
                        message: r.message
                    });
                    continue;
                }
                t.errors.push({
                    relPath: e,
                    code: "fs_read_failed",
                    message: r instanceof Error ? r.message : String(r)
                });
                continue;
            }
            if ("absent" === a.kind) continue;
            if ("refused" === a.kind) {
                s.push(a.refusal), t.refusals++, t.errors.push({
                    relPath: a.refusal.relPath,
                    code: a.refusal.reason,
                    message: `Skipped ${a.refusal.relPath} (${a.refusal.reason})`
                });
                continue;
            }
            const c = e.toLowerCase(), l = i.get(c);
            if (void 0 !== l && l !== e) {
                t.errors.push({
                    relPath: e,
                    code: "case_collision",
                    message: `Agent store has case-colliding paths: ${l} and ${e}`
                });
                continue;
            }
            i.set(c, e);
            const u = a.entry;
            u.size > this.maxFileSizeBytes ? t.errors.push({
                relPath: e,
                code: "file_too_large",
                message: `File ${e} (${u.size} bytes) exceeds the ${this.maxFileSizeBytes}-byte cap`
            }) : o.push({
                relPath: e,
                absPath: u.absPath,
                size: u.size,
                mtimeMs: u.mtimeMs,
                dev: u.dev,
                ino: u.ino,
                existing: this.index.getFile(e)
            });
        }
        const a = this.monotonicNow(), c = await Promise.all(o.map((e)=>this.runQueued(this.queues.hash, ()=>(this.throwIfRoundAborted(e.relPath), this.hashCandidate(e)), "local")));
        t.hashMs = (t.hashMs ?? 0) + (this.monotonicNow() - a), this.throwIfRoundAborted();
        const l = this.selectUploadable(c, t);
        await this.uploadHashedCandidates(l, t, {
            preferProbeForLegacy: !0,
            signal: r
        }), this.throwIfRoundAborted(), await this.flushPendingDeletes({
            summary: t,
            presentRelPaths: new Set(o.map((e)=>e.relPath)),
            refusals: s,
            scopeRelPaths: n
        });
    }
    maybeArmDeletionDetection(e) {
        const { summary: t, filesRootIdentity: r } = e;
        "readOnly" !== this.syncMode && (t.recoveryDisarms > 0 || t.errors.length > 0 || t.refusals > 0 || this.lastPullListingComplete && "present" === r.kind && (this.index.armDeletionWithIdentity(r.identity), this.recoveryDisarmed = !1));
    }
    clearCompromisedFilesRoot(e) {
        this.assertRootStillBound("wiping files/"), this.clearRemoteVersion(e, "before_wipe");
        try {
            return p.rmSync(this.filesDir, {
                recursive: !0,
                force: !0
            }), !0;
        } catch (t) {
            return !(!uc(t) || "ENOENT" !== t.code) || (e.errors.push({
                relPath: void 0,
                code: "fs_write_failed",
                message: `Failed to clear compromised agent store files root: ${t instanceof Error ? t.message : String(t)}`
            }), !1);
        }
    }
    prepareIdentityRecovery(e) {
        return !!this.tryRemoveObstructingFilesRoot(e) && !!this.clearCompromisedFilesRoot(e) && (this.enterDeletionRecovery(e), !0);
    }
    async pullAllWithFollowUpWipe(e) {
        const t = this.probeFilesRootIdentity();
        await this.pullAll(e);
        return !Ca({
            start: t,
            end: this.probeFilesRootIdentity()
        }) || !!this.clearCompromisedFilesRoot(e) && (this.ensureDirsExist(), await this.pullAll(e), !0);
    }
    tryRemoveObstructingFilesRoot(e) {
        try {
            const e = p.lstatSync(this.filesDir);
            return e.isDirectory() && !e.isSymbolicLink() || p.rmSync(this.filesDir, {
                recursive: !0,
                force: !0
            }), !0;
        } catch (t) {
            return !(!uc(t) || "ENOENT" !== t.code) || (e.errors.push({
                relPath: void 0,
                code: "fs_write_failed",
                message: `Failed to clear obstructing agent store files root: ${t instanceof Error ? t.message : String(t)}`
            }), !1);
        }
    }
    isDeletionArmed() {
        return "1" === this.index.getMeta(ia);
    }
    probeFilesRootIdentity() {
        try {
            const e = p.lstatSync(this.filesDir);
            return !e.isDirectory() || e.isSymbolicLink() ? {
                kind: "absent"
            } : {
                kind: "present",
                identity: {
                    dev: e.dev,
                    ino: e.ino
                }
            };
        } catch (e) {
            return uc(e) && "ENOENT" === e.code ? {
                kind: "absent"
            } : {
                kind: "unreadable"
            };
        }
    }
    enterDeletionRecovery(e) {
        this.index.disarmDeletionAndClearPending(), this.recoveryDisarmed = !0, e.recoveryDisarms++;
    }
    detectScanDeletions(e, t) {
        if ("readOnly" === this.syncMode) return "ok";
        if (void 0 !== this.lockProvider && void 0 === this.lockHandle) return "ok";
        if (!this.isDeletionArmed() || this.recoveryDisarmed) return "ok";
        this.assertRootStillBound("delete scan");
        const r = this.checkRecordedFilesRootIdentity();
        if ("compromised" === r) return this.prepareIdentityRecovery(t) || (t.identityRecoveryWipeFailed = !0), "abort_uploads";
        if ("unreadable" === r) return t.errors.push({
            relPath: void 0,
            code: "fs_read_failed",
            message: "Agent store files root temporarily unreadable; pending deletes retained"
        }), "hold";
        const n = new Set(e.files.map((e)=>e.relPath));
        for (const r of this.index.listFiles()){
            if ("tombstoned" === r.state) continue;
            if ((0, Wt.TM)(r.relPath)) continue;
            if (n.has(r.relPath)) continue;
            if (this.index.hasPendingDelete(r.relPath)) continue;
            if (Pa(e.refusals, r.relPath)) continue;
            if (void 0 === r.lastSeenEtag || 0 === r.lastSeenEtag.length) {
                t.legacyRowsRestored++;
                continue;
            }
            let s;
            try {
                s = x({
                    base: this.filesDir,
                    relPath: r.relPath
                });
            } catch  {
                continue;
            }
            try {
                p.lstatSync(s);
                continue;
            } catch (e) {
                if (!uc(e) || "ENOENT" !== e.code) continue;
            }
            this.index.upsertPendingDelete({
                relPath: r.relPath,
                baseEtag: r.lastSeenEtag,
                requestedAtMs: this.now(),
                mutationId: (0, Ys.randomUUID)()
            }), t.scanDeletesJournaled++;
        }
        return "ok";
    }
    checkRecordedFilesRootIdentity() {
        const e = this.index.getMeta(aa), t = this.index.getMeta(ca);
        if (void 0 === e || void 0 === t) return "compromised";
        const r = this.probeFilesRootIdentity();
        switch(r.kind){
            case "unreadable":
                return "unreadable";
            case "absent":
                return "compromised";
            case "present":
                return String(r.identity.dev) === e && String(r.identity.ino) === t ? "intact" : "compromised";
            default:
                throw new Error(`unexpected files root probe: ${r}`);
        }
    }
    syncRoundStillAuthorized() {
        return !this.disposed && "running" === this.state && (void 0 === this.lockProvider || void 0 !== this.lockHandle);
    }
    assertRootStillBound(e) {
        const t = this.rootIdFence;
        if (void 0 === t || !t.enabled) return;
        const r = Ho(t.rootIdPath);
        if ("present" !== r.kind || r.rootId !== t.expected) {
            if ("unreadable" === r.kind) throw new ga({
                code: "fs_read_failed",
                message: `Agent store root id unreadable before ${e}`
            });
            throw new ga({
                code: "root_retired",
                message: `Agent store root identity changed before ${e}`
            });
        }
    }
    async flushPendingDeletes(e) {
        this.assertRootStillBound("delete flush");
        const { summary: t, presentRelPaths: r, refusals: n = [], scopeRelPaths: s } = e, o = void 0 === s ? this.index.listPendingDeletes() : this.index.listPendingDeletes().filter((e)=>s.has(e.relPath));
        if (0 === o.length) return void await this.flushPendingRmdirs({
            summary: t,
            ackedDeletePaths: [],
            refusals: n,
            presentRelPaths: r,
            scopeRelPaths: s
        });
        const i = [];
        for (const e of o){
            if ((0, Wt.TM)(e.relPath)) {
                this.index.removePendingDelete(e.relPath);
                continue;
            }
            if (r.has(e.relPath)) {
                this.index.removePendingDelete(e.relPath);
                continue;
            }
            if (Pa(n, e.relPath)) {
                this.index.removePendingDelete(e.relPath);
                continue;
            }
            let s;
            try {
                s = x({
                    base: this.filesDir,
                    relPath: e.relPath
                });
            } catch  {
                this.index.removePendingDelete(e.relPath);
                continue;
            }
            try {
                p.lstatSync(s), this.index.removePendingDelete(e.relPath);
                continue;
            } catch (r) {
                if (!uc(r) || "ENOENT" !== r.code) {
                    this.index.removePendingDelete(e.relPath), t.errors.push({
                        relPath: e.relPath,
                        code: "delete_failed",
                        message: r instanceof Error ? r.message : String(r)
                    });
                    continue;
                }
            }
            i.push(e);
        }
        if (0 === i.length) return void await this.flushPendingRmdirs({
            summary: t,
            ackedDeletePaths: [],
            refusals: n,
            presentRelPaths: r,
            scopeRelPaths: s
        });
        const a = this.client.deleteFiles?.bind(this.client);
        if (void 0 === a) return t.errors.push({
            relPath: void 0,
            code: "delete_failed",
            message: `Agent store client for ${this.agentId} does not support deleteFiles; ${i.length} pending delete(s) deferred`
        }), void await this.flushPendingRmdirs({
            summary: t,
            ackedDeletePaths: [],
            refusals: n,
            presentRelPaths: r,
            scopeRelPaths: s
        });
        const c = [];
        for(let e = 0; e < i.length; e += 500){
            const o = i.slice(e, e + 500);
            let l;
            await this.assertRoundStillOwnsLock();
            try {
                l = await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>a({
                        agentId: this.agentId,
                        files: o.map((e)=>({
                                relPath: e.relPath,
                                baseEtag: e.baseEtag,
                                ...void 0 !== e.mutationId ? {
                                    mutationId: e.mutationId
                                } : {}
                            })),
                        signal: this.activeRoundSignal
                    }));
            } catch (o) {
                return this.rethrowIfRoundAbort(o), t.errors.push({
                    relPath: void 0,
                    code: "delete_failed",
                    message: `Failed to delete ${i.length - e} agent store file(s): ${o instanceof Error ? o.message : String(o)}`
                }), void await this.flushPendingRmdirs({
                    summary: t,
                    ackedDeletePaths: c,
                    refusals: n,
                    presentRelPaths: r,
                    scopeRelPaths: s
                });
            }
            const u = new Map(l.map((e)=>[
                    e.relPath,
                    e
                ]));
            for (const e of o){
                const r = u.get(e.relPath);
                if (void 0 !== r) switch(this.index.removePendingDelete(e.relPath), r.status){
                    case "deleted":
                    case "already_deleted":
                        {
                            const n = r.tombstoneEtag;
                            if (void 0 !== n && n.length > 0) {
                                const t = this.index.getFile(e.relPath);
                                this.index.upsertFile({
                                    relPath: e.relPath,
                                    lastSyncedSha: t?.lastSyncedSha ?? "",
                                    ...void 0 !== t?.lastSeenEtag ? {
                                        lastSeenEtag: t.lastSeenEtag
                                    } : {},
                                    size: t?.size ?? 0,
                                    lastSyncedMs: this.now(),
                                    direction: t?.direction ?? "pushed",
                                    state: "tombstoned",
                                    tombstoneEtag: n,
                                    deletedAtMs: this.now()
                                });
                            } else this.index.deleteFile(e.relPath);
                            t.filesDeletedRemote++, c.push(e.relPath);
                            break;
                        }
                    case "conflict":
                        t.deleteConflicts++;
                }
                else t.errors.push({
                    relPath: e.relPath,
                    code: "delete_failed",
                    message: `Server returned no delete outcome for ${e.relPath}`
                });
            }
        }
        await this.flushPendingRmdirs({
            summary: t,
            ackedDeletePaths: c,
            refusals: n,
            presentRelPaths: r,
            scopeRelPaths: s
        });
    }
    async flushPendingRmdirs(e) {
        const { summary: t, ackedDeletePaths: r, refusals: n, presentRelPaths: s } = e, o = new Set;
        for (const e of r){
            const t = Oa(e);
            void 0 !== t && "" !== t && o.add(t);
        }
        for (const t of this.index.listPendingRmdirs())(void 0 === e.scopeRelPaths || Na(t.relPath, e.scopeRelPaths)) && o.add(t.relPath);
        if (0 === o.size) return;
        const i = this.client.rmdir?.bind(this.client), c = (e)=>(this.index.hasLiveDescendantFiles(e) || function(e, t) {
                if ("" === t) return e.size > 0;
                const r = `${t}/`;
                for (const t of e)if (t.startsWith(r)) return !0;
                return !1;
            }(s, e) || !!Pa(n, e)) && (this.index.removePendingRmdir(e), !0);
        if (void 0 === i) {
            for (const e of o)c(e) || this.hasPendingDeletesUnder(e) || this.index.hasPendingRmdir(e) || this.index.upsertPendingRmdir({
                relPath: e,
                requestedAtMs: this.now()
            });
            return;
        }
        for (const e of o)c(e) || this.index.upsertPendingRmdir({
            relPath: e,
            requestedAtMs: this.now()
        });
        const l = [
            ...o
        ].sort(qa), u = new Set;
        let d = 0;
        for(; l.length > 0;){
            const e = l.shift();
            if ("" === e || u.has(e)) continue;
            if (u.add(e), Da(e) > Aa) {
                this.index.removePendingRmdir(e);
                const t = Oa(e);
                void 0 === t || "" === t || u.has(t) || (this.index.upsertPendingRmdir({
                    relPath: t,
                    requestedAtMs: this.now()
                }), l.push(t), l.sort(qa));
                continue;
            }
            if (this.hasPendingDeletesUnder(e)) continue;
            if (c(e)) continue;
            let r;
            try {
                r = C({
                    base: this.filesDir,
                    relPath: e
                });
            } catch (t) {
                if (t instanceof f) {
                    this.index.removePendingRmdir(e);
                    continue;
                }
                if (!uc(t) || "ENOENT" !== t.code) continue;
                r = {
                    kind: "absent"
                };
            }
            if ("refused" === r.kind) {
                if (!(r.refusal.relPath === e && "not_regular_file" === r.refusal.reason)) {
                    this.index.removePendingRmdir(e);
                    continue;
                }
            }
            if ("directory" === r.kind) continue;
            if (d >= Ra) break;
            this.index.upsertPendingRmdir({
                relPath: e,
                requestedAtMs: this.now()
            }), await this.assertRoundStillOwnsLock(), d += 1;
            try {
                await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>i({
                        agentId: this.agentId,
                        relPath: e,
                        signal: this.activeRoundSignal
                    }));
            } catch (r) {
                if (this.rethrowIfRoundAbort(r), r instanceof a) {
                    this.index.removePendingRmdir(e);
                    let t = Oa(e);
                    for(; void 0 !== t && "" !== t;)this.index.removePendingRmdir(t), u.add(t), t = Oa(t);
                    continue;
                }
                return void t.errors.push({
                    relPath: e,
                    code: "delete_failed",
                    message: `Failed to rmdir ${e}: ${r instanceof Error ? r.message : String(r)}`
                });
            }
            this.index.removePendingRmdir(e), t.rmdirPushed = (t.rmdirPushed ?? 0) + 1;
            const n = Oa(e);
            void 0 === n || "" === n || u.has(n) || (this.index.upsertPendingRmdir({
                relPath: n,
                requestedAtMs: this.now()
            }), l.push(n), l.sort(qa));
        }
    }
    hasPendingDeletesUnder(e) {
        return this.index.hasPendingDeletesUnder(e);
    }
    hasLiveIndexRowsUnder(e) {
        return this.index.hasLiveFilesUnder(e);
    }
    async pushAll(e = tc()) {
        this.ensureDirsExist(), void 0 === this.activeRoundSignal && this.unboundByteBudgets.clear(), this.stripJournaledPendingConflictMirrors(), this.roundJournaledConflictEmits = [], this.flushPendingConflictJournalEmits();
        try {
            return await this.pushAllBody(e);
        } finally{
            this.stripJournaledPendingConflictMirrors();
        }
    }
    async pushAllBody(e) {
        const t = I(this.filesDir);
        e.reservedPathsSkipped = (e.reservedPathsSkipped ?? 0) + function(e) {
            const t = [];
            let r = 0;
            for (const n of e.files)(0, Wt.TM)(n.relPath) ? r++ : t.push(n);
            return e.files = t, r;
        }(t);
        const r = this.detectScanDeletions(t, e);
        if ("readOnly" === this.syncMode) {
            for (const e of this.index.listPendingDeletes())this.index.removePendingDelete(e.relPath);
            for (const e of this.index.listPendingRmdirs())this.index.removePendingRmdir(e.relPath);
        } else "ok" === r && await this.flushPendingDeletes({
            summary: e,
            presentRelPaths: new Set(t.files.map((e)=>e.relPath)),
            refusals: t.refusals
        });
        if ("readOnly" === this.syncMode || "abort_uploads" === r || e.recoveryDisarms > 0) return e;
        for (const r of t.refusals)e.refusals++, e.errors.push({
            relPath: r.relPath,
            code: r.reason,
            message: `Skipped ${r.relPath} (${r.reason})`
        });
        const n = new Map;
        for (const e of this.index.listFiles())n.set(e.relPath, e);
        const s = [], o = new Map;
        for (const r of t.files){
            const t = r.relPath.toLowerCase(), i = o.get(t);
            if (void 0 !== i && i !== r.relPath) {
                e.errors.push({
                    relPath: r.relPath,
                    code: "case_collision",
                    message: `Agent store has case-colliding paths: ${i} and ${r.relPath}`
                });
                continue;
            }
            if (o.set(t, r.relPath), r.size > this.maxFileSizeBytes) {
                e.errors.push({
                    relPath: r.relPath,
                    code: "file_too_large",
                    message: `File ${r.relPath} (${r.size} bytes) exceeds the ${this.maxFileSizeBytes}-byte cap`
                });
                continue;
            }
            const a = n.get(r.relPath), c = {
                relPath: r.relPath,
                absPath: r.absPath,
                size: r.size,
                mtimeMs: r.mtimeMs,
                dev: r.dev,
                ino: r.ino,
                existing: a
            };
            s.push(c);
        }
        const i = await Promise.all(s.map((e)=>this.trackQueue((e)=>this.queues.hash.enqueue(e), ()=>(this.throwIfRoundAborted(e.relPath), this.hashCandidate(e)), "local"))), a = this.selectUploadable(i, e);
        return await this.uploadHashedCandidates(a, e), e;
    }
    selectUploadable(e, t) {
        const r = [];
        for (const n of e)if ("stat_unchanged" !== n.kind) if ("error" !== n.kind) {
            if ("skip" === n.statFastPathAudit) {
                const e = void 0 !== n.existing && "tombstoned" !== n.existing.state && n.existing.lastSyncedSha === n.sha && n.existing.size === n.size;
                this.noteStatFastPath(e ? "hit" : "mismatch"), e || this.index.clearRecordedStat(n.relPath);
            }
            void 0 === n.existing || "tombstoned" === n.existing.state || n.existing.lastSyncedSha !== n.sha || n.existing.size !== n.size ? this.isPushParked(n.relPath) ? t.pushEntriesParked++ : r.push(n) : (t.filesSkipped++, this.clearPushPark(n.relPath), this.index.upsertFile({
                ...n.existing,
                lastSyncedMs: this.now(),
                recordedStat: this.captureRecordedStat(n)
            }));
        } else t.errors.push({
            relPath: n.relPath,
            code: n.code,
            message: n.message
        });
        else t.filesSkipped++, this.noteStatFastPath("hit"), this.clearPushPark(n.relPath), this.index.upsertFile({
            ...n.existing,
            lastSyncedMs: this.now()
        });
        return r;
    }
    async uploadHashedCandidates(e, t, r = {}) {
        if (0 === e.length) return;
        const { preconditions: n, skippedDueToListingFailure: s } = await this.resolvePushPreconditions(e, t, {
            preferProbeForLegacy: r.preferProbeForLegacy
        });
        let o = e.filter((e)=>!s.has(e.relPath));
        if (0 !== o.length) {
            this.throwIfRoundAborted(), "size_asc" === this.pushOrder && (o = [
                ...o
            ].sort((e, t)=>e.size - t.size));
            for(let e = 0; e < o.length; e += this.multipartPresignWindowSize)await this.pushUploadWindow({
                candidates: o.slice(e, e + this.multipartPresignWindowSize),
                preconditionByPath: n,
                summary: t,
                signal: r.signal
            });
        }
    }
    async pushUploadWindow(e) {
        const t = e.candidates, r = e.preconditionByPath, n = e.summary;
        let s;
        this.throwIfRoundAborted(), await this.assertRoundStillOwnsLock();
        const o = this.monotonicNow();
        try {
            s = await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>this.client.presignWrites({
                    agentId: this.agentId,
                    files: t.map((e)=>{
                        const t = r.get(e.relPath);
                        return {
                            relPath: e.relPath,
                            sha: e.sha,
                            size: e.size,
                            ...void 0 !== t ? {
                                multipartParts: e.multipartParts,
                                ...t
                            } : {}
                        };
                    }),
                    signal: this.activeRoundSignal
                }));
        } catch (e) {
            if (this.rethrowIfRoundAbort(e), Ie(e)) throw e;
            if (!ge(e, se.C.FailedPrecondition) && !ge(e, se.C.InvalidArgument)) throw e;
            const s = t.filter((e)=>!r.has(e.relPath)), o = qe(e), i = void 0 !== o ? t : s.length > 0 ? s : t;
            for (const t of i)void 0 !== o ? this.parkQuotaExceededEntry({
                relPath: t.relPath,
                absPath: t.absPath,
                summary: n,
                quota: o,
                message: De(e, "Agent-store quota exceeded")
            }) : this.parkPushEntry({
                relPath: t.relPath,
                summary: n,
                message: e instanceof Error ? e.message : "Terminal push rejection from presignWrites"
            });
            return;
        }
        n.presignMs = (n.presignMs ?? 0) + (this.monotonicNow() - o), this.throwIfRoundAborted();
        const i = new Map;
        for (const e of s){
            let t;
            try {
                t = v(e.relPath);
            } catch (t) {
                n.errors.push({
                    relPath: e.relPath,
                    code: "presign_response_mismatch",
                    message: `Server returned an unsafe relPath: ${e.relPath} (${t instanceof Error ? t.message : String(t)})`
                });
                continue;
            }
            i.set(t, e);
        }
        const a = await this.processMultipartWrites({
            candidates: t,
            presignedByPath: i,
            preconditionByPath: r,
            summary: n
        }), c = this.monotonicNow();
        await Promise.all(t.map(async (e)=>{
            if (await this.assertRoundStillOwnsLock(e.relPath, {
                bypassCache: !0
            }), a.has(e.relPath)) return;
            const t = i.get(e.relPath);
            if (void 0 === t) return void n.errors.push({
                relPath: e.relPath,
                code: "presign_response_mismatch",
                message: `Server returned no presigned URL for ${e.relPath}`
            });
            if (t.sha !== e.sha) return void n.errors.push({
                relPath: e.relPath,
                code: "presign_response_mismatch",
                message: `Presigned write sha mismatch for ${e.relPath} (got ${t.sha}, expected ${e.sha})`
            });
            const s = r.get(e.relPath);
            if (Sa(t, this.now())) {
                try {
                    await this.refreshAndCompleteLegacyWrite({
                        candidate: e,
                        precondition: s,
                        summary: n
                    });
                } catch (t) {
                    if (this.tryParkQuotaExceeded({
                        relPath: e.relPath,
                        absPath: e.absPath,
                        summary: n,
                        error: t
                    })) return;
                    n.errors.push(Ea(e.relPath, t));
                }
                return;
            }
            if (ba(t)) {
                if (void 0 === s || void 0 === t.conflict) return void n.errors.push({
                    relPath: e.relPath,
                    code: "presign_response_mismatch",
                    message: `Conflict-directed write for ${e.relPath} did not include a conflict target and write precondition`
                });
                try {
                    await this.handleWriteConflict({
                        candidate: e,
                        conflict: t.conflict,
                        precondition: s,
                        summary: n,
                        suppressIfRemoteIdentical: !0 === t.primaryPreconditionFailed
                    });
                } catch (t) {
                    if (this.rethrowIfRoundAbort(t, e.relPath), this.rethrowIfLockLost(t), this.tryParkQuotaExceeded({
                        relPath: e.relPath,
                        absPath: e.absPath,
                        summary: n,
                        error: t
                    })) return;
                    this.emitConflictFallbackFailed({
                        candidate: e
                    }), n.errors.push(Ea(e.relPath, t));
                }
                return;
            }
            if (t.expiresAtMs <= this.now()) {
                try {
                    await this.refreshAndCompleteLegacyWrite({
                        candidate: e,
                        precondition: s,
                        summary: n
                    });
                } catch (t) {
                    if (this.tryParkQuotaExceeded({
                        relPath: e.relPath,
                        absPath: e.absPath,
                        summary: n,
                        error: t
                    })) return;
                    n.errors.push(Ea(e.relPath, t));
                }
                return;
            }
            const o = void 0 !== s && void 0 === t.conflict;
            if (o && ka(t)) n.errors.push({
                relPath: e.relPath,
                code: "presign_response_mismatch",
                message: `Presigned write for ${e.relPath} carries a conditional header but no conflict instruction`
            });
            else try {
                const r = await this.uploadPrimaryWithConflictRetry(e, t, n);
                this.recordPrimaryPushSuccess({
                    candidate: e,
                    etag: r.etag,
                    summary: n
                }), o && n.conflictProtectionDowngrades++;
            } catch (r) {
                if (this.rethrowIfRoundAbort(r, e.relPath), this.rethrowIfLockLost(r), Ie(r)) throw r;
                if (ge(r, se.C.FailedPrecondition) || ge(r, se.C.InvalidArgument)) {
                    const t = qe(r);
                    return void (void 0 !== t ? this.parkQuotaExceededEntry({
                        relPath: e.relPath,
                        absPath: e.absPath,
                        summary: n,
                        quota: t,
                        message: De(r, "Agent-store quota exceeded")
                    }) : this.parkPushEntry({
                        relPath: e.relPath,
                        summary: n,
                        message: r instanceof Error ? r.message : "Terminal push rejection during upload"
                    }));
                }
                if (_a(r)) {
                    try {
                        await this.refreshAndCompleteLegacyWrite({
                            candidate: e,
                            precondition: s,
                            summary: n
                        });
                    } catch (t) {
                        if (this.tryParkQuotaExceeded({
                            relPath: e.relPath,
                            absPath: e.absPath,
                            summary: n,
                            error: t
                        })) return;
                        n.errors.push(Ea(e.relPath, t));
                    }
                    return;
                }
                if (va(r) && void 0 !== s && void 0 !== t.conflict) try {
                    return void await this.handleWriteConflict({
                        candidate: e,
                        conflict: t.conflict,
                        precondition: s,
                        summary: n,
                        suppressIfRemoteIdentical: !0
                    });
                } catch (t) {
                    if (this.rethrowIfRoundAbort(t, e.relPath), this.rethrowIfLockLost(t), this.tryParkQuotaExceeded({
                        relPath: e.relPath,
                        absPath: e.absPath,
                        summary: n,
                        error: t
                    })) return;
                    return this.emitConflictFallbackFailed({
                        candidate: e
                    }), void n.errors.push(Ea(e.relPath, t));
                }
                n.errors.push(Ea(e.relPath, r));
            }
        })), n.uploadMs = (n.uploadMs ?? 0) + (this.monotonicNow() - c);
    }
    async processMultipartWrites(e) {
        const t = new Set, r = new Map, n = [];
        return await this.withPendingMultipartContexts(r, async ()=>{
            for (const s of e.candidates){
                const o = e.presignedByPath.get(s.relPath);
                if (void 0 === o) continue;
                const i = ba(o);
                if (!(void 0 !== o.multipart || void 0 !== o.conflict?.multipart)) continue;
                const a = e.preconditionByPath.get(s.relPath);
                try {
                    if (this.registerMultipartContexts({
                        presign: o,
                        pendingContexts: r
                    }), o.sha !== s.sha || void 0 === a) continue;
                    let c;
                    if (i) {
                        const r = o.conflict;
                        if (void 0 === r?.multipart) continue;
                        if (!0 === o.primaryPreconditionFailed && await this.trySuppressIdenticalWriteConflict(s, e.summary)) {
                            t.add(s.relPath);
                            continue;
                        }
                        c = {
                            target: "conflict",
                            candidate: s,
                            presign: o,
                            conflict: r,
                            upload: r.multipart,
                            precondition: a,
                            restartCount: 0,
                            conflictRenameCount: 0,
                            expiryRefreshCount: 0
                        };
                    } else {
                        if (void 0 === o.multipart) continue;
                        if (void 0 === o.conflict) throw new ga({
                            code: "presign_response_mismatch",
                            relPath: s.relPath,
                            message: `Multipart primary write for ${s.relPath} did not include conflict protection`
                        });
                        c = {
                            target: "primary",
                            candidate: s,
                            presign: o,
                            upload: o.multipart,
                            precondition: a,
                            restartCount: 0,
                            conflictRenameCount: 0,
                            expiryRefreshCount: 0
                        };
                    }
                    n.push(c), t.add(s.relPath);
                } catch (t) {
                    this.rethrowIfRoundAbort(t, s.relPath), e.summary.errors.push(Ea(s.relPath, t));
                }
            }
            let s = n;
            for(; s.length > 0;)s = await this.runMultipartWorkWave({
                works: s,
                pendingContexts: r,
                summary: e.summary
            });
            return t;
        });
    }
    async runMultipartWorkWave(e) {
        const t = await Promise.all(e.works.map(async (t)=>{
            let r = t;
            try {
                for(; r.upload.partUrlsExpiresAtMs <= this.now() || Sa(r.presign, this.now());){
                    const t = await this.refreshExpiredMultipartWork({
                        work: r,
                        pendingContexts: e.pendingContexts,
                        summary: e.summary
                    });
                    if (void 0 === t) return {
                        kind: "finished"
                    };
                    r = t;
                }
                return {
                    kind: "uploaded",
                    entry: await this.uploadMultipartWork(r, e.pendingContexts)
                };
            } catch (t) {
                if (this.rethrowIfRoundAbort(t, r.candidate.relPath), this.rethrowIfLockLost(t), _a(t)) try {
                    const t = await this.refreshExpiredMultipartWork({
                        work: r,
                        pendingContexts: e.pendingContexts,
                        summary: e.summary
                    });
                    return void 0 === t ? {
                        kind: "finished"
                    } : {
                        kind: "retry",
                        work: t
                    };
                } catch (t) {
                    return this.rethrowIfRoundAbort(t, r.candidate.relPath), this.rethrowIfLockLost(t), this.tryParkQuotaExceeded({
                        relPath: r.candidate.relPath,
                        absPath: r.candidate.absPath,
                        summary: e.summary,
                        error: t
                    }) ? {
                        kind: "finished"
                    } : (e.summary.errors.push(Ea(r.candidate.relPath, t)), {
                        kind: "finished"
                    });
                }
                return this.tryParkQuotaExceeded({
                    relPath: r.candidate.relPath,
                    absPath: r.candidate.absPath,
                    summary: e.summary,
                    error: t
                }) || e.summary.errors.push(Ea(r.candidate.relPath, t)), {
                    kind: "finished"
                };
            }
        })), r = t.filter((e)=>"uploaded" === e.kind).map((e)=>e.entry), n = t.filter((e)=>"retry" === e.kind).map((e)=>e.work);
        if (0 === r.length) return n;
        let s;
        this.throwIfRoundAborted();
        try {
            await this.assertRoundStillOwnsLock(void 0, {
                bypassCache: !0
            }), s = await this.completeMultipartWithTransientRetries(r);
        } catch (t) {
            this.rethrowIfRoundAbort(t), this.rethrowIfLockLost(t);
            for (const n of r)this.tryParkQuotaExceeded({
                relPath: n.work.candidate.relPath,
                absPath: n.work.candidate.absPath,
                summary: e.summary,
                error: t
            }) || e.summary.errors.push(Ea(n.work.candidate.relPath, t));
            return n;
        }
        for(let t = 0; t < r.length; t++){
            const o = r[t], i = s[t];
            if (void 0 !== o && void 0 !== i) if ("rpc_error" !== i.kind) try {
                const t = await this.handleMultipartCompletionResult({
                    entry: o,
                    result: i,
                    pendingContexts: e.pendingContexts,
                    summary: e.summary
                });
                void 0 !== t && n.push(t);
            } catch (t) {
                if (this.rethrowIfRoundAbort(t, o.work.candidate.relPath), this.rethrowIfLockLost(t), this.tryParkQuotaExceeded({
                    relPath: o.work.candidate.relPath,
                    absPath: o.work.candidate.absPath,
                    summary: e.summary,
                    error: t
                })) continue;
                e.summary.errors.push(Ea(o.work.candidate.relPath, t));
            }
            else {
                if (this.rethrowIfRoundAbort(i.error, o.work.candidate.relPath), this.tryParkQuotaExceeded({
                    relPath: o.work.candidate.relPath,
                    absPath: o.work.candidate.absPath,
                    summary: e.summary,
                    error: i.error
                })) continue;
                e.summary.errors.push(Ea(o.work.candidate.relPath, i.error));
            }
        }
        return n;
    }
    async refreshExpiredMultipartWork(e) {
        if (e.work.expiryRefreshCount >= this.multipartMaxExpiryRefreshes) throw new ga({
            code: "presigned_url_expired",
            relPath: e.work.candidate.relPath,
            message: `Multipart upload URLs for ${e.work.candidate.relPath} expired again after a fresh presign`,
            retryable: !1
        });
        return await this.assertRoundStillOwnsLock(e.work.candidate.relPath, {
            bypassCache: !0
        }), await this.presignFreshMultipartWork({
            previous: e.work,
            pendingContexts: e.pendingContexts,
            summary: e.summary,
            expiryRefreshCount: e.work.expiryRefreshCount + 1
        });
    }
    async uploadMultipartWork(e, t) {
        const r = "primary" === e.target ? e.candidate.relPath : e.conflict.relPath;
        this.validateMultipartInstruction(e);
        const n = e.candidate.multipartParts;
        if (void 0 === n) throw new ga({
            code: "presign_response_mismatch",
            relPath: e.candidate.relPath,
            message: `Multipart instructions were returned without client part checksums for ${e.candidate.relPath}`
        });
        const s = await Promise.all(e.upload.parts.map(async (s, o)=>{
            try {
                const i = n[o];
                if (void 0 === i) throw new ga({
                    code: "presign_response_mismatch",
                    relPath: e.candidate.relPath,
                    message: `Multipart part ${s.partNumber} was not requested for ${e.candidate.relPath}`
                });
                this.assertPresignedUrlSafe({
                    rawUrl: s.url,
                    relPath: r
                });
                const a = await this.runQueued(this.queues.s3, async ()=>(await this.assertRoundStillOwnsLock(r, {
                        bypassCache: !0
                    }), this.blobTransfer.uploadPart({
                        url: s.url,
                        relPath: r,
                        absPath: e.candidate.absPath,
                        partNumber: s.partNumber,
                        offset: s.offsetBytes,
                        size: s.sizeBytes,
                        fileSize: e.candidate.size,
                        expiresAtMs: e.upload.partUrlsExpiresAtMs,
                        expectedDev: e.candidate.dev,
                        expectedIno: e.candidate.ino,
                        checksumSha256: i.checksumSha256,
                        presignHeaders: s.headers ?? {},
                        signal: this.activeRoundSignal,
                        ...void 0 !== this.onRoundProgress ? {
                            onBytes: this.cappedRoundBytes("blob_put_bytes", r, e.candidate.size)
                        } : {}
                    }))), c = t.get(e.upload.context.uploadId);
                return void 0 !== c && (c.acceptedBytes += s.sizeBytes), {
                    kind: "success",
                    part: {
                        partNumber: s.partNumber,
                        etag: a.etag,
                        checksumSha256: i.checksumSha256
                    }
                };
            } catch (e) {
                return {
                    kind: "failure",
                    error: e
                };
            }
        })), o = s.find((e)=>"failure" === e.kind);
        if (void 0 !== o) throw o.error;
        const i = s.map((e)=>{
            if ("failure" === e.kind) throw e.error;
            return e.part;
        }), a = await nc({
            absPath: e.candidate.absPath,
            maxBytes: this.maxFileSizeBytes,
            expectedDev: e.candidate.dev,
            expectedIno: e.candidate.ino
        });
        if (a.size !== e.candidate.size || a.sha !== e.candidate.sha) throw new ga({
            code: "sha_mismatch",
            relPath: e.candidate.relPath,
            message: `Local file ${e.candidate.relPath} changed during multipart upload`
        });
        return {
            work: e,
            completion: {
                context: e.upload.context,
                parts: i
            }
        };
    }
    async completeMultipartWithTransientRetries(e) {
        const t = this.client.completeMultipartWrites;
        if (void 0 === t) throw new ga({
            code: "upload_failed",
            message: "Agent store client does not support multipart completion"
        });
        const r = new Array(e.length);
        let n = e.map((e, t)=>({
                entry: e,
                index: t
            }));
        for(let e = 1; e <= this.multipartCompleteMaxAttempts && n.length > 0; e++){
            let s;
            try {
                s = await t.call(this.client, {
                    agentId: this.agentId,
                    completions: n.map((e)=>e.entry.completion),
                    signal: this.activeRoundSignal
                }), this.progressReporter("rpc")();
            } catch (e) {
                for (const t of n)r[t.index] = {
                    kind: "rpc_error",
                    error: e
                };
                n = [];
                break;
            }
            const o = [];
            for(let t = 0; t < n.length; t++){
                const i = n[t], a = s[t];
                if (void 0 === i || void 0 === a) throw new ga({
                    code: "presign_response_mismatch",
                    message: "Multipart completion response did not match its request"
                });
                "failure" === a.kind && "transient" === a.code && e < this.multipartCompleteMaxAttempts ? o.push(i) : r[i.index] = a;
            }
            n = o;
        }
        return r.map((e)=>{
            if (void 0 === e) throw new ga({
                code: "upload_failed",
                message: "Multipart completion exhausted transient retries"
            });
            return e;
        });
    }
    async handleMultipartCompletionResult(e) {
        const { work: t } = e.entry;
        if ("success" === e.result.kind) return e.pendingContexts.delete(t.upload.context.uploadId), void ("primary" === t.target ? this.recordPrimaryPushSuccess({
            candidate: t.candidate,
            etag: e.result.etag,
            summary: e.summary
        }) : await this.handleWriteConflict({
            candidate: t.candidate,
            conflict: t.conflict,
            precondition: t.precondition,
            summary: e.summary,
            completedUpload: {
                etag: e.result.etag
            }
        }));
        switch(e.result.code){
            case "precondition_failed":
                if ("primary" === t.target) {
                    if (await this.trySuppressIdenticalWriteConflict(t.candidate, e.summary)) return;
                    const r = t.presign.conflict;
                    if (void 0 === r) throw new ga({
                        code: "write_conflict",
                        relPath: t.candidate.relPath,
                        message: `Multipart write for ${t.candidate.relPath} lost its precondition without a conflict target`
                    });
                    return void 0 === r.multipart ? void await this.handleWriteConflict({
                        candidate: t.candidate,
                        conflict: r,
                        precondition: t.precondition,
                        summary: e.summary,
                        suppressIfRemoteIdentical: !0
                    }) : {
                        target: "conflict",
                        candidate: t.candidate,
                        presign: t.presign,
                        conflict: r,
                        upload: r.multipart,
                        precondition: t.precondition,
                        restartCount: t.restartCount,
                        conflictRenameCount: t.conflictRenameCount,
                        expiryRefreshCount: 0
                    };
                }
                if (t.conflictRenameCount >= this.multipartMaxConflictRenames) throw new ga({
                    code: "write_conflict",
                    relPath: t.candidate.relPath,
                    message: `Multipart conflict target for ${t.candidate.relPath} collided after a fresh presign`
                });
                return await this.presignFreshMultipartWork({
                    previous: t,
                    pendingContexts: e.pendingContexts,
                    summary: e.summary,
                    conflictRenameCount: t.conflictRenameCount + 1
                });
            case "restart_required":
                if (t.restartCount >= this.multipartMaxRestarts) throw new ga({
                    code: "upload_failed",
                    relPath: t.candidate.relPath,
                    message: `Multipart upload for ${t.candidate.relPath} still required restart after a fresh presign`
                });
                return await this.presignFreshMultipartWork({
                    previous: t,
                    pendingContexts: e.pendingContexts,
                    summary: e.summary,
                    restartCount: t.restartCount + 1
                });
            case "checksum_mismatch":
                throw new ga({
                    code: "sha_mismatch",
                    relPath: t.candidate.relPath,
                    message: `Multipart checksum did not match ${t.candidate.relPath}`
                });
            case "upload_not_found":
                {
                    const r = e.pendingContexts.get(t.upload.context.uploadId);
                    throw void 0 !== r && this.notePendingMultipartAbandoned(r), e.pendingContexts.delete(t.upload.context.uploadId), new ga({
                        code: "upload_failed",
                        relPath: t.candidate.relPath,
                        message: `Multipart upload for ${t.candidate.relPath} no longer exists`
                    });
                }
            case "invalid_parts":
                throw new ga({
                    code: "presign_response_mismatch",
                    relPath: t.candidate.relPath,
                    message: `Multipart completion rejected the uploaded part list for ${t.candidate.relPath}`
                });
            case "transient":
                throw new ga({
                    code: "upload_failed",
                    relPath: t.candidate.relPath,
                    message: `Multipart completion exhausted transient retries for ${t.candidate.relPath}`
                });
            case "internal":
            case "unknown":
                throw new ga({
                    code: "upload_failed",
                    relPath: t.candidate.relPath,
                    message: `Multipart completion failed internally for ${t.candidate.relPath}`
                });
        }
    }
    async presignFreshMultipartWork(e) {
        const t = await this.presignFreshWrite(e.previous.candidate, e.previous.precondition, e.summary);
        this.registerMultipartContexts({
            presign: t,
            pendingContexts: e.pendingContexts
        });
        const r = e.restartCount ?? e.previous.restartCount, n = e.conflictRenameCount ?? e.previous.conflictRenameCount, s = e.expiryRefreshCount ?? e.previous.expiryRefreshCount;
        if ("conflict" === e.previous.target && !Sa(e.previous.presign, this.now()) || ba(t)) {
            const o = t.conflict;
            if (void 0 === o) throw new ga({
                code: "presign_response_mismatch",
                relPath: e.previous.candidate.relPath,
                message: `Fresh presign for ${e.previous.candidate.relPath} did not include conflict instructions`
            });
            const i = void 0 === t.lockRedirect && (!0 === t.primaryPreconditionFailed || "conflict" === e.previous.target && void 0 === e.previous.presign.lockRedirect);
            if (i && await this.trySuppressIdenticalWriteConflict(e.previous.candidate, e.summary)) return;
            return void 0 === o.multipart ? void await this.handleWriteConflict({
                candidate: e.previous.candidate,
                conflict: o,
                precondition: e.previous.precondition,
                summary: e.summary,
                suppressIfRemoteIdentical: i
            }) : {
                target: "conflict",
                candidate: e.previous.candidate,
                presign: t,
                conflict: o,
                upload: o.multipart,
                precondition: e.previous.precondition,
                restartCount: r,
                conflictRenameCount: n,
                expiryRefreshCount: s
            };
        }
        if (void 0 === t.multipart) try {
            return void await this.completeFreshLegacyWrite({
                candidate: e.previous.candidate,
                presign: t,
                precondition: e.previous.precondition,
                summary: e.summary
            });
        } catch (t) {
            if (!_a(t) || s >= this.multipartMaxExpiryRefreshes) throw t;
            return await this.presignFreshMultipartWork({
                previous: e.previous,
                pendingContexts: e.pendingContexts,
                summary: e.summary,
                restartCount: r,
                conflictRenameCount: n,
                expiryRefreshCount: s + 1
            });
        }
        if (void 0 === t.conflict) throw new ga({
            code: "presign_response_mismatch",
            relPath: e.previous.candidate.relPath,
            message: `Fresh multipart presign for ${e.previous.candidate.relPath} did not include conflict instructions`
        });
        return {
            target: "primary",
            candidate: e.previous.candidate,
            presign: t,
            upload: t.multipart,
            precondition: e.previous.precondition,
            restartCount: r,
            conflictRenameCount: n,
            expiryRefreshCount: s
        };
    }
    async completeFreshLegacyWrite(e) {
        if (Sa(e.presign, this.now())) throw new ga({
            code: "presigned_url_expired",
            relPath: e.candidate.relPath,
            message: `Fresh presign for ${e.candidate.relPath} contained an expired lock redirect`
        });
        if (ba(e.presign)) {
            if (void 0 === e.presign.conflict || void 0 === e.precondition) throw new ga({
                code: "presign_response_mismatch",
                relPath: e.candidate.relPath,
                message: `Fresh conflict-only presign for ${e.candidate.relPath} did not include a conflict target and write precondition`
            });
            return void await this.handleWriteConflict({
                candidate: e.candidate,
                conflict: e.presign.conflict,
                precondition: e.precondition,
                summary: e.summary,
                suppressIfRemoteIdentical: !0 === e.presign.primaryPreconditionFailed
            });
        }
        const t = void 0 !== e.precondition && void 0 === e.presign.conflict;
        if (void 0 === e.presign.conflict && ka(e.presign)) throw new ga({
            code: "presign_response_mismatch",
            relPath: e.candidate.relPath,
            message: `Fresh conditional presign for ${e.candidate.relPath} did not include a conflict target`
        });
        try {
            const r = await this.uploadPrimaryWithConflictRetry(e.candidate, e.presign, e.summary);
            this.recordPrimaryPushSuccess({
                candidate: e.candidate,
                etag: r.etag,
                summary: e.summary
            }), t && e.summary.conflictProtectionDowngrades++;
        } catch (t) {
            if (va(t) && void 0 !== e.presign.conflict && void 0 !== e.precondition) return void await this.handleWriteConflict({
                candidate: e.candidate,
                conflict: e.presign.conflict,
                precondition: e.precondition,
                summary: e.summary,
                suppressIfRemoteIdentical: !0
            });
            throw t;
        }
    }
    async refreshAndCompleteLegacyWrite(e) {
        await this.withFreshLegacyPresign({
            candidate: e.candidate,
            precondition: e.precondition,
            summary: e.summary,
            operation: async (t)=>{
                await this.completeFreshLegacyWrite({
                    candidate: e.candidate,
                    presign: t,
                    precondition: e.precondition,
                    summary: e.summary
                });
            }
        });
    }
    async presignFreshWrite(e, t, r) {
        const n = (await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>this.client.presignWrites({
                agentId: this.agentId,
                files: [
                    {
                        relPath: e.relPath,
                        sha: e.sha,
                        size: e.size,
                        ...void 0 !== t ? {
                            multipartParts: e.multipartParts,
                            ...t
                        } : {}
                    }
                ],
                signal: this.activeRoundSignal
            })))[0];
        if (void 0 === n || n.sha !== e.sha || v(n.relPath) !== e.relPath) throw new ga({
            code: "presign_response_mismatch",
            relPath: e.relPath,
            message: `Fresh presign did not match ${e.relPath}`
        });
        return n;
    }
    async withFreshLegacyPresign(e) {
        const t = new Map;
        return await this.withPendingMultipartContexts(t, async ()=>{
            const r = await this.presignFreshWrite(e.candidate, e.precondition, e.summary);
            return this.registerMultipartContexts({
                presign: r,
                pendingContexts: t
            }), await e.operation(r);
        });
    }
    registerMultipartContexts(e) {
        for (const t of [
            e.presign.multipart,
            e.presign.conflict?.multipart
        ]){
            if (void 0 === t) continue;
            const r = t.context.uploadId;
            if (0 === r.length || e.pendingContexts.has(r)) throw new ga({
                code: "presign_response_mismatch",
                relPath: e.presign.relPath,
                message: `Multipart presign for ${e.presign.relPath} returned an invalid or duplicate upload context`
            });
            e.pendingContexts.set(r, {
                context: t.context,
                acceptedBytes: 0
            });
        }
    }
    validateMultipartInstruction(e) {
        const { candidate: t, upload: r } = e, n = "primary" === e.target ? t.relPath : e.conflict.relPath, s = "conflict" === e.target ? "expectAbsent" === r.context.precondition.case && !0 === r.context.precondition.value : void 0 !== e.precondition.baseEtag ? "baseEtag" === r.context.precondition.case && r.context.precondition.value === e.precondition.baseEtag : !0 === e.precondition.expectAbsent && "expectAbsent" === r.context.precondition.case && !0 === r.context.precondition.value, o = t.multipartParts;
        if (void 0 === o || v(r.context.relPath) !== v(n) || r.context.sha !== t.sha || r.context.sizeBytes !== t.size || !s || r.context.expectedPartCount !== r.parts.length || o.length !== r.parts.length || 0 === r.context.uploadId.length || 0 === r.context.storeId.length || 0 === r.context.sessionId.length || 0 === r.parts.length || !Number.isFinite(r.partUrlsExpiresAtMs)) throw new ga({
            code: "presign_response_mismatch",
            relPath: t.relPath,
            message: `Multipart instructions did not match ${t.relPath}`
        });
        let i = 0;
        for(let e = 0; e < r.parts.length; e++){
            const n = r.parts[e], s = o[e];
            if (void 0 === n || void 0 === s || n.partNumber !== e + 1 || n.partNumber !== s.partNumber || !Number.isSafeInteger(n.offsetBytes) || n.offsetBytes !== i || n.offsetBytes !== s.offsetBytes || !Number.isSafeInteger(n.sizeBytes) || n.sizeBytes <= 0 || n.sizeBytes !== s.sizeBytes || xa(n.headers ?? {}, "x-amz-checksum-sha256") !== Buffer.from(s.checksumSha256).toString("base64") || 0 === n.url.length) throw new ga({
                code: "presign_response_mismatch",
                relPath: t.relPath,
                message: `Multipart part layout did not match ${t.relPath}`
            });
            i += n.sizeBytes;
        }
        if (i !== t.size) throw new ga({
            code: "presign_response_mismatch",
            relPath: t.relPath,
            message: `Multipart parts did not cover ${t.relPath}`
        });
    }
    async withPendingMultipartContexts(e, t) {
        try {
            return await t();
        } finally{
            await this.abortPendingMultipartContexts(e);
        }
    }
    noteMultipartAbandoned(e) {
        for (const t of e.values())this.notePendingMultipartAbandoned(t);
    }
    notePendingMultipartAbandoned(e) {
        const t = e.acceptedBytes;
        e.acceptedBytes = 0;
        const r = this.onMultipartAbandoned;
        void 0 === r || t <= 0 || r({
            bytes: t,
            roundAborted: !0 === this.activeRoundSignal?.aborted
        });
    }
    async abortPendingMultipartContexts(e) {
        if (this.noteMultipartAbandoned(e), 0 === e.size) return;
        const t = this.client.abortMultipartWrites;
        if (void 0 !== t) try {
            await t.call(this.client, {
                agentId: this.agentId,
                uploads: [
                    ...e.values()
                ].map(({ context: e })=>({
                        context: e
                    })),
                signal: this.activeRoundSignal
            }), this.progressReporter("rpc")();
        } catch (e) {
            this.rethrowIfRoundAbort(e);
        }
    }
    recordPrimaryPushSuccess(e) {
        this.clearPushPark(e.candidate.relPath), this.throwIfRoundAborted(e.candidate.relPath), e.summary.filesPushed++, e.summary.bytesPushed += e.candidate.size, this.index.upsertFile({
            relPath: e.candidate.relPath,
            lastSeenEtag: e.etag,
            lastSyncedSha: e.candidate.sha,
            size: e.candidate.size,
            lastSyncedMs: this.now(),
            direction: "pushed",
            recordedStat: this.captureRecordedStat(e.candidate)
        }), this.progressReporter("index_commit")(), this.notePathsRefreshedForParkedFullRound([
            e.candidate.relPath
        ], e.summary);
    }
    async resolvePushPreconditions(e, t, r = {}) {
        const n = !0 === r.preferProbeForLegacy, s = new Map, i = new Set;
        let a, c = !1;
        if (e.some((e)=>void 0 !== e.existing && "tombstoned" !== e.existing.state && (void 0 === e.existing.lastSeenEtag || 0 === e.existing.lastSeenEtag.length)) && !n) try {
            const e = await this.listServerFiles(t, {
                tombstoneMode: o.hw.OMIT
            }), r = new Set, n = new Map;
            for (const t of e.files){
                let e;
                try {
                    e = v(t.relPath);
                } catch  {
                    continue;
                }
                r.add(e);
                const s = st(t.etag);
                s.length > 0 && n.set(e, s);
            }
            a = {
                listedPaths: r,
                etagByPath: n
            };
        } catch (e) {
            this.rethrowIfRoundAbort(e), c = !0, t.errors.push({
                relPath: void 0,
                code: "list_failed",
                message: `Failed to list agent store for legacy push baselines: ${e instanceof Error ? e.message : String(e)}`
            });
        }
        for (const r of e){
            if (void 0 === r.existing) {
                s.set(r.relPath, {
                    expectAbsent: !0
                });
                continue;
            }
            if ("tombstoned" === r.existing.state) {
                const e = r.existing.tombstoneEtag;
                void 0 !== e && e.length > 0 ? s.set(r.relPath, {
                    baseEtag: e
                }) : s.set(r.relPath, {
                    expectAbsent: !0
                });
                continue;
            }
            const e = r.existing.lastSeenEtag;
            if (void 0 !== e && e.length > 0) {
                s.set(r.relPath, {
                    baseEtag: e
                });
                continue;
            }
            if (n) {
                const e = await this.probeLegacyPushPrecondition(r.relPath, t);
                void 0 === e ? i.add(r.relPath) : s.set(r.relPath, e);
                continue;
            }
            if (c || void 0 === a) {
                i.add(r.relPath);
                continue;
            }
            if (!a.listedPaths.has(r.relPath)) {
                s.set(r.relPath, {
                    expectAbsent: !0
                });
                continue;
            }
            const o = a.etagByPath.get(r.relPath);
            if (void 0 !== o) {
                s.set(r.relPath, {
                    baseEtag: o
                });
                continue;
            }
            const l = await this.probeLegacyPushPrecondition(r.relPath, t);
            void 0 === l ? i.add(r.relPath) : s.set(r.relPath, l);
        }
        return {
            preconditions: s,
            skippedDueToListingFailure: i
        };
    }
    async probeLegacyPushPrecondition(e, t) {
        try {
            const r = await Vs({
                client: this.client,
                agentId: this.agentId,
                relPath: e,
                fetchImpl: this.fetchImpl,
                validatePresignedUrl: this.validatePresignedUrl,
                runPresign: (e)=>this.runQueuedControlRpc(this.queues.presign, "rpc", e),
                runS3: (e)=>this.runQueued(this.queues.s3, e),
                signal: this.activeRoundSignal
            });
            return t.legacyProbes++, "absent" === r.kind ? {
                expectAbsent: !0
            } : {
                baseEtag: r.etag
            };
        } catch (r) {
            if (Ie(r)) throw r;
            return this.rethrowIfRoundAbort(r, e), void t.errors.push({
                relPath: e,
                code: "probe_failed",
                message: `Failed to probe agent store object for legacy push baseline: ${r instanceof Error ? r.message : String(r)}`
            });
        }
    }
    isPushParked(e) {
        const t = this.pushParkedUntilMs.get(e);
        return void 0 !== t && (!(this.now() >= t) || (this.pushParkedUntilMs.delete(e), !1));
    }
    clearPushPark(e) {
        this.pushParkedUntilMs.delete(e);
        const t = this.pushParkBackoff.get(e);
        void 0 !== t && (t.recordSuccess(), this.pushParkBackoff.delete(e));
    }
    parkPushEntry(e) {
        let t = this.pushParkBackoff.get(e.relPath);
        void 0 === t && (t = new s({
            baseDelayMs: 5e3,
            maxDelayMs: 9e5,
            jitter: .2
        }), this.pushParkBackoff.set(e.relPath, t));
        const r = t.recordFailure();
        this.pushParkedUntilMs.set(e.relPath, this.now() + r), e.summary.pushEntriesParked++, e.summary.errors.push({
            relPath: e.relPath,
            code: e.code ?? "push_terminal",
            message: `${e.message} (parked ${r}ms)`
        });
    }
    parkQuotaExceededEntry(e) {
        this.parkPushEntry({
            relPath: e.relPath,
            summary: e.summary,
            message: e.message,
            code: "quota_exceeded"
        }), this.emitQuotaExceededJournal({
            relPath: e.relPath,
            absPath: e.absPath,
            quota: e.quota
        });
    }
    tryParkQuotaExceeded(e) {
        if (!ge(e.error, se.C.FailedPrecondition) && !ge(e.error, se.C.InvalidArgument)) return !1;
        if (Ie(e.error)) return !1;
        const t = qe(e.error);
        return void 0 !== t && (this.parkQuotaExceededEntry({
            relPath: e.relPath,
            absPath: e.absPath,
            summary: e.summary,
            quota: t,
            message: De(e.error, "Agent-store quota exceeded")
        }), !0);
    }
    emitQuotaExceededJournal(e) {
        const t = {
            kind: "quota_exceeded",
            storeId: this.agentId,
            originalRelPath: e.relPath,
            originalAbsPath: e.absPath,
            source: "local_sync",
            scopeKind: e.quota.scopeKind,
            limitBytes: e.quota.limitBytes,
            usageBytes: e.quota.usageBytes
        };
        this.emitConflictJournalEventWithRetry(t);
    }
    async uploadPrimaryWithConflictRetry(e, t, r) {
        try {
            return await this.uploadOne(e, t, r);
        } catch (n) {
            if (va(n) && 409 === n.httpStatus) return await this.uploadOne(e, t, r);
            throw n;
        }
    }
    async tryRecreateOverListedTombstone(e) {
        this.client.invalidateListCache?.({
            agentId: this.agentId
        });
        const t = Ua(e.candidate.relPath);
        let r;
        try {
            r = await this.runQueuedControlRpc(this.queues.list, "listing_page", ()=>this.client.listFiles({
                    agentId: this.agentId,
                    relPath: t,
                    tombstoneMode: o.hw.INCLUDE,
                    signal: this.activeRoundSignal
                }));
        } catch (t) {
            return this.rethrowIfRoundAbort(t, e.candidate.relPath), this.rethrowIfLockLost(t), !1;
        }
        const n = $a(r.tombstoneFloorMs);
        if (void 0 === n) return !1;
        const s = n - this.tombstonePruneSlackMs();
        let i;
        for (const t of r.tombstones ?? []){
            let r;
            try {
                r = v(t.relPath);
            } catch  {
                continue;
            }
            if (r !== e.candidate.relPath) continue;
            const n = st(t.tombstoneEtag);
            if (!(0 === n.length || t.deletedAtMs <= 0) && !(t.deletedAtMs >= s)) {
                i = n;
                break;
            }
        }
        if (void 0 === i) return !1;
        try {
            const t = await this.presignFreshWrite(e.candidate, {
                baseEtag: i
            }, e.summary);
            if (ba(t) || void 0 !== t.multipart) return !1;
            const r = await this.uploadPrimaryWithConflictRetry(e.candidate, t, e.summary);
            try {
                return this.recordPrimaryPushSuccess({
                    candidate: e.candidate,
                    etag: r.etag,
                    summary: e.summary
                }), !0;
            } finally{
                this.client.invalidateListCache?.({
                    agentId: this.agentId
                });
            }
        } catch (t) {
            return this.rethrowIfRoundAbort(t, e.candidate.relPath), this.rethrowIfLockLost(t), !1;
        }
    }
    async handleWriteConflict(e) {
        const { candidate: t, precondition: r, summary: n } = e;
        if (void 0 === e.completedUpload && !0 === e.suppressIfRemoteIdentical && await this.trySuppressIdenticalWriteConflict(t, n)) return;
        if (void 0 === e.completedUpload && !0 === e.suppressIfRemoteIdentical && !0 === r.expectAbsent && await this.tryRecreateOverListedTombstone({
            candidate: t,
            summary: n
        })) return;
        let s = e.conflict, o = e.completedUpload;
        if (void 0 === o) {
            let e;
            try {
                s.expiresAtMs <= this.now() ? { conflict: s, uploaded: o } = await this.uploadFreshLegacyConflict(t, r, n) : o = await this.uploadConflict(t, s, n);
            } catch (t) {
                e = t;
            }
            if (void 0 === o) {
                if (this.rethrowIfRoundAbort(e, t.relPath), !va(e) && !_a(e)) throw e;
                ({ conflict: s, uploaded: o } = await this.uploadFreshLegacyConflict(t, r, n));
            }
        }
        n.filesConflicted++, n.conflicts.push({
            relPath: t.relPath,
            conflictRelPath: s.relPath,
            conflictEtag: o.etag
        });
        try {
            this.materializeAndRecordConflict({
                candidate: t,
                conflict: s,
                precondition: r,
                uploaded: o
            });
        } catch (e) {
            n.errors.push({
                relPath: t.relPath,
                code: e instanceof ga ? e.code : "upload_failed",
                message: e instanceof Error ? e.message : String(e)
            });
        }
    }
    async trySuppressIdenticalWriteConflict(e, t) {
        if (e.size > ta) return !1;
        let r;
        try {
            const n = (await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>this.client.presignReads({
                    agentId: this.agentId,
                    relPaths: [
                        e.relPath
                    ],
                    signal: this.activeRoundSignal
                })))[0];
            if (void 0 === n || v(n.relPath) !== e.relPath) return !1;
            if (this.assertPresignedUrlSafe({
                rawUrl: n.url,
                relPath: e.relPath
            }), r = await this.runQueued(this.queues.s3, async ()=>(this.throwIfRoundAborted(e.relPath), await this.fetchImpl(n.url, {
                    redirect: "error",
                    ...void 0 !== this.activeRoundSignal ? {
                        signal: this.activeRoundSignal
                    } : {}
                }))), 200 !== r.status) return !1;
            const s = st(r.headers.get("etag") ?? void 0);
            if (0 === s.length) return !1;
            const o = (0, Ys.createHash)("sha256");
            let i = 0;
            const a = this.cappedRoundBytes("blob_get_bytes", e.relPath, e.size);
            if (null !== r.body) {
                const t = r.body.getReader();
                try {
                    for(;;){
                        const r = await t.read();
                        if (r.done) break;
                        if (i += r.value.byteLength, a(r.value.byteLength), i > Math.min(e.size, ta)) return await t.cancel(), !1;
                        o.update(r.value);
                    }
                } finally{
                    t.releaseLock();
                }
            }
            if (i !== e.size || o.digest("hex") !== e.sha) return !1;
            const c = await nc({
                absPath: e.absPath,
                maxBytes: this.maxFileSizeBytes,
                expectedDev: e.dev,
                expectedIno: e.ino
            });
            return c.size === e.size && c.sha === e.sha && (this.clearPushPark(e.relPath), this.throwIfRoundAborted(e.relPath), t.identicalContentConflictsSuppressed = (t.identicalContentConflictsSuppressed ?? 0) + 1, this.index.upsertFile({
                relPath: e.relPath,
                lastSeenEtag: s,
                lastSyncedSha: e.sha,
                size: e.size,
                lastSyncedMs: this.now(),
                direction: "pushed"
            }), this.progressReporter("index_commit")(), !0);
        } catch (t) {
            return this.rethrowIfRoundAbort(t, e.relPath), !1;
        } finally{
            await r?.body?.cancel().catch(()=>{});
        }
    }
    materializeAndRecordConflict(e) {
        const { candidate: t, conflict: r, precondition: n, uploaded: s } = e;
        try {
            this.materializeConflictBookkeeping({
                candidate: t,
                conflict: r,
                precondition: n,
                uploaded: s
            });
        } finally{
            this.client.invalidateListCache?.({
                agentId: this.agentId
            });
        }
    }
    materializeConflictBookkeeping(e) {
        const { candidate: t, conflict: r, precondition: n, uploaded: s } = e, o = this.materializeConflictRename(t, r.relPath);
        if (this.emitConflictJournalEvent({
            candidate: t,
            conflictRelPath: r.relPath,
            precondition: n,
            remoteOnly: void 0 === o
        }), void 0 !== o) {
            this.index.upsertFile({
                relPath: o.canonicalRelPath,
                lastSeenEtag: s.etag,
                lastSyncedSha: t.sha,
                size: t.size,
                lastSyncedMs: this.now(),
                direction: "pushed"
            });
            const e = t.existing?.lastSeenEtag;
            void 0 === t.existing || void 0 !== e && 0 !== e.length || this.index.upsertFile({
                ...t.existing,
                lastSeenEtag: s.etag,
                lastSyncedSha: t.sha,
                size: t.size,
                lastSyncedMs: this.now(),
                direction: "pushed"
            });
        } else {
            const e = t.existing?.lastSeenEtag;
            this.index.upsertFile({
                relPath: t.relPath,
                lastSeenEtag: void 0 !== e && e.length > 0 ? e : s.etag,
                lastSyncedSha: t.sha,
                size: t.size,
                lastSyncedMs: this.now(),
                direction: "pushed"
            });
        }
    }
    emitConflictJournalEvent(e) {
        const t = !0 === e.precondition.expectAbsent ? "create_conflict" : "write_conflict";
        let r;
        try {
            r = x({
                base: this.filesDir,
                relPath: v(e.conflictRelPath)
            });
        } catch  {
            r = void 0;
        }
        const n = {
            kind: t,
            storeId: this.agentId,
            originalRelPath: e.candidate.relPath,
            conflictRelPath: e.conflictRelPath,
            originalAbsPath: e.candidate.absPath,
            conflictAbsPath: r,
            preservedBytes: e.candidate.size,
            source: "local_sync",
            remoteOnly: e.remoteOnly
        };
        this.emitConflictJournalEventWithRetry(n);
    }
    emitConflictJournalEventWithRetry(e) {
        this.tryEmitConflictJournalEvent(e) || this.tryEmitConflictJournalEvent(e) || (this.enqueuePendingConflictJournalEmit(e), this.warn(`conflict journal append or dedup refresh failed after retry for ${Li({
            relPath: e.originalRelPath,
            salt: this.pathHashSalt
        })}; conflict preserved remotely and event queued for next push round (failures=${this.conflictJournal.appendFailureCount()})`, void 0));
    }
    tryEmitConflictJournalEvent(e) {
        if (!this.conflictJournal.refreshDedupFromDisk()) return !1;
        const t = this.conflictJournal.wouldDedup(e), r = this.conflictJournal.rotationCount(), n = this.conflictJournal.emit(e);
        if (this.conflictJournal.rotationCount() !== r) {
            for (const e of this.roundJournaledConflictEmits)this.enqueuePendingConflictJournalEmit(e);
            return t || this.enqueuePendingConflictJournalEmit(e), this.roundJournaledConflictEmits = [], this.warn("conflict journal rotated during emit; re-queued same-round notice(s) into the pending sidecar so a rotation cannot wipe a just-flushed event with nothing left to retry", void 0), n;
        }
        return !!n && (t || (this.roundJournaledConflictEmits.push(e), this.enqueuePendingConflictJournalEmit(e)), !0);
    }
    enqueuePendingConflictJournalEmit(e) {
        this.pendingConflictJournal.enqueue(e);
    }
    flushPendingConflictJournalEmits() {
        if (this.pendingConflictJournal.reload(), !this.conflictJournal.refreshDedupFromDisk()) return;
        if (this.pendingConflictJournal.isEmpty()) return;
        const e = this.pendingConflictJournal.list(), t = this.conflictJournal.rotationCount(), r = [], n = [], s = [];
        let o = 0;
        for (const t of e){
            const e = this.conflictJournal.wouldDedup(t);
            this.conflictJournal.emit(t) ? (s.push(t), e || n.push(t)) : (o++, r.push(t));
        }
        this.conflictJournal.rotationCount() === t ? (this.roundJournaledConflictEmits.push(...n), this.pendingConflictJournal.replaceAll([
            ...r,
            ...s
        ]), o > 0 && this.warn(`conflict journal pending retry failed for ${o} event(s); will retry on the next push round (pending=${this.pendingConflictJournal.size()}, failures=${this.conflictJournal.appendFailureCount()})`, void 0)) : this.warn(`conflict journal rotated during pending flush; keeping ${this.pendingConflictJournal.size()} queued event(s) for the next push round to avoid losing a rotated notice`, void 0);
    }
    stripJournaledPendingConflictMirrors() {
        if (this.pendingConflictJournal.reload(), !this.conflictJournal.refreshDedupFromDisk()) return;
        if (this.pendingConflictJournal.isEmpty()) return;
        const e = [];
        for (const t of this.pendingConflictJournal.list())this.conflictJournal.wouldDedup(t) || e.push(t);
        e.length !== this.pendingConflictJournal.size() && this.pendingConflictJournal.replaceAll(e);
    }
    conflictJournalPathsSafeForShutdownFlush() {
        for (const e of [
            this.conflictJournal.path,
            this.pendingConflictJournal.path
        ])try {
            if (p.lstatSync(e).isSymbolicLink()) return !1;
        } catch (e) {
            if (!uc(e) || "ENOENT" !== e.code) return !1;
        }
        return !0;
    }
    attemptPendingConflictJournalFlushForShutdown() {
        void 0 !== this.lockProvider && void 0 === this.lockHandle || (this.conflictJournalPathsSafeForShutdownFlush() ? (this.flushPendingConflictJournalEmits(), this.stripJournaledPendingConflictMirrors()) : this.warn("conflict journal shutdown flush skipped; journal or pending sidecar path is not a safe regular file", void 0));
    }
    emitConflictFallbackFailed(e) {
        this.emitConflictJournalEventWithRetry({
            kind: "conflict_fallback_failed",
            storeId: this.agentId,
            originalRelPath: e.candidate.relPath,
            originalAbsPath: e.candidate.absPath,
            source: "local_sync"
        });
    }
    async uploadFreshLegacyConflict(e, t, r) {
        return await this.assertRoundStillOwnsLock(e.relPath, {
            bypassCache: !0
        }), await this.withFreshLegacyPresign({
            candidate: e,
            precondition: t,
            summary: r,
            operation: async (t)=>{
                if (void 0 === t.conflict) throw new ga({
                    code: "write_conflict",
                    relPath: e.relPath,
                    message: `Conflict write for ${e.relPath} collided and the fresh presign returned no usable conflict instruction`
                });
                const n = t.conflict;
                return {
                    conflict: n,
                    uploaded: await this.uploadConflict(e, n, r)
                };
            }
        });
    }
    async uploadConflict(e, t, r) {
        return this.assertPresignedUrlSafe({
            rawUrl: t.url,
            relPath: t.relPath
        }), await this.runQueued(this.queues.s3, async ()=>(this.throwIfRoundAborted(t.relPath), this.assertPresignedUrlNotExpired({
                expiresAtMs: t.expiresAtMs,
                relPath: t.relPath
            }), await this.assertRoundStillOwnsLock(e.relPath, {
                bypassCache: !0
            }), await this.blobTransfer.uploadFile({
                url: t.url,
                relPath: t.relPath,
                absPath: e.absPath,
                sha: e.sha,
                size: e.size,
                expectedDev: e.dev,
                expectedIno: e.ino,
                presignHeaders: t.headers,
                signal: this.activeRoundSignal,
                ...void 0 !== this.onRoundProgress ? {
                    onBytes: this.cappedRoundBytes("blob_put_bytes", t.relPath, e.size)
                } : {}
            })));
    }
    parkUnsyncedBytesBesidePath(e) {
        return this.parkUnsyncedBytesAtRelPath({
            absPath: e.absPath,
            parkedRelPath: Ta(e.relPath)
        });
    }
    parkUnsyncedBytesOutsideRemovedDir(e) {
        return this.parkUnsyncedBytesAtRelPath({
            absPath: e.absPath,
            parkedRelPath: Ta(Ja({
                relPath: e.relPath,
                dir: e.dir
            }))
        });
    }
    parkUnsyncedBytesAtRelPath(e) {
        const t = this.materializeConflictRename({
            absPath: e.absPath
        }, e.parkedRelPath);
        if (void 0 === t) return !1;
        let r = 0;
        try {
            r = p.lstatSync(x({
                base: this.filesDir,
                relPath: t.canonicalRelPath
            })).size;
        } catch  {}
        return this.index.upsertFile({
            relPath: t.canonicalRelPath,
            lastSyncedSha: "",
            size: r,
            lastSyncedMs: this.now(),
            direction: "pushed"
        }), !0;
    }
    materializeConflictRename(e, t, r = {}) {
        try {
            const n = v(t);
            k({
                relPath: n,
                platform: this.platform
            });
            const s = x({
                base: this.filesDir,
                relPath: n
            }), o = h.dirname(s);
            ac({
                base: this.filesDir,
                parent: o,
                relPath: n
            }), cc({
                base: this.filesDir,
                target: o,
                relPath: n
            }), ic({
                absPath: s,
                relPath: n
            });
            const i = p.lstatSync(e.absPath);
            if (i.isDirectory()) return;
            if (!1 !== r.requireRegularFile && !i.isFile()) return;
            return p.renameSync(e.absPath, s), {
                canonicalRelPath: n
            };
        } catch  {
            return;
        }
    }
    async pullAll(e = tc(), t = {}) {
        this.ensureDirsExist();
        const r = this.lastCompleteRoundMs(), n = this.remoteVersionToSend();
        let s;
        if (void 0 !== n && t.remoteUnchangedVersion === n && !ec(e)) {
            const t = await this.relistInsteadOfNotModified(e);
            if (void 0 === t) return this.applyNotModified({
                tombstoneWatermarkMs: void 0,
                listedWithInclude: !1
            }, e, "probe_unchanged"), e;
            s = t;
        } else if (s = await this.listServerFiles(e, {
            ifVersionEqual: n
        }), s.notModified) {
            const t = await this.relistInsteadOfNotModified(e);
            if (void 0 === t) return this.applyNotModified(s, e), e;
            s = t;
        }
        this.clearRemoteVersion(e, "before_apply");
        const i = s.listStartMs, a = this.shouldApplyAbsenceDeletes({
            listingComplete: s.listingComplete,
            listedWithInclude: s.listedWithInclude,
            tombstoneFloorMs: s.tombstoneFloorMs,
            lastCompleteRoundMs: r
        });
        "needs-include" === a && (s = await this.listServerFiles(e, {
            tombstoneMode: o.hw.INCLUDE
        }));
        const { files: c, tombstones: l, listingComplete: u, removedSubdirs: d, tombstoneWatermarkMs: p, tombstoneFloorMs: m, listedWithInclude: h } = s;
        e.pullOutcome = void 0 !== s.version ? "listed" : "listed_no_version", this.lastPullListingComplete = u, e.listingComplete = u;
        const f = await this.applyRemoteTombstones(l, e), g = await this.applyAbsenceDeletes({
            files: c,
            tombstones: l,
            removedSubdirs: d,
            listingComplete: u,
            listedWithInclude: h,
            tombstoneFloorMs: m,
            lastCompleteRoundMs: r,
            summary: e
        });
        this.pruneExpiredTombstoneRows({
            tombstones: l,
            listingComplete: u,
            tombstoneFloorMs: m,
            listedWithInclude: h
        }), this.commitTombstoneCursor({
            watermarkMs: p,
            listingComplete: u,
            listedWithInclude: h,
            deferred: f.deferred,
            summary: e
        }), await this.applyRemovedLocalDirs(d, c, e);
        const y = this.pullCandidatesFromListing(c, e);
        await this.pullCandidates(y, e);
        const w = this.commitLastCompleteRoundMs({
            listingComplete: u,
            listStartMs: i,
            watermarkMs: p,
            absenceNeeded: "no" !== a,
            tombstoneFloorMs: m,
            absenceDeferred: g.deferred
        });
        return this.maybePersistRemoteVersion({
            version: s.version,
            completeRoundCommitted: w,
            tombstonesDeferred: f.deferred,
            summary: e
        }), e;
    }
    remoteVersionToSend() {
        if (!this.remoteVersionEnabledValue) return;
        if (this.remoteVersionStaleFromPathWrite) return;
        const e = this.index.getMeta(An);
        if (void 0 === e || "" === e) return;
        const t = this.versionFullListIntervalMsValue;
        if (t > 0) {
            const e = Ga(this.index.getMeta(Rn));
            if (void 0 === e || this.now() - e >= t) return;
        }
        return this.tombstoneListingMode().include ? void 0 : e;
    }
    maybePersistRemoteVersion(e) {
        const { version: t, summary: r } = e;
        void 0 !== t && "" !== t && (!e.completeRoundCommitted || e.tombstonesDeferred > 0 || r.pullsDeferred > 0 || r.errors.some((e)=>!Va.has(e.code)) || !0 === this.activeRoundSignal?.aborted || (this.index.setMeta({
            key: An,
            value: t
        }), this.index.setMeta({
            key: Rn,
            value: String(this.now())
        }), this.remoteVersionStaleFromPathWrite = !1, Xa(r, {
            event: "persisted",
            reason: "clean_round"
        })));
    }
    clearRemoteVersion(e, t) {
        const r = this.index.deleteMeta(An);
        this.index.deleteMeta(Rn), r && Xa(e, {
            event: "cleared",
            reason: t
        });
    }
    applyNotModified(e, t, r = "not_modified") {
        t.pullOutcome = r, t.listingComplete = !0, this.lastPullListingComplete = !0, this.index.setMeta({
            key: En,
            value: String(this.now())
        }), e.listedWithInclude ? (this.index.setMeta({
            key: Cn,
            value: "0"
        }), this.index.setMeta({
            key: Pn,
            value: String(this.now())
        })) : this.bumpRoundsSinceInclude(), void 0 !== e.tombstoneWatermarkMs && void 0 !== Ga(this.index.getMeta(xn)) && this.index.setMeta({
            key: xn,
            value: String(e.tombstoneWatermarkMs)
        });
    }
    async relistInsteadOfNotModified(e) {
        if (this.hasMissingMirrorFile()) return this.clearRemoteVersion(e, "local_file_missing"), await this.listServerFiles(e);
        const t = await this.auditNotModified(e);
        return void 0 !== t && this.clearRemoteVersion(e, "audit_mismatch"), t;
    }
    hasMissingMirrorFile() {
        const e = new Set(this.index.listPendingDeletes().map((e)=>e.relPath));
        for (const t of this.index.listFiles()){
            if ("tombstoned" === t.state || e.has(t.relPath)) continue;
            let r;
            try {
                r = x({
                    base: this.filesDir,
                    relPath: t.relPath
                });
            } catch  {
                return !0;
            }
            if (!oc(r)) return !0;
        }
        return !1;
    }
    async auditNotModified(e) {
        const t = this.versionAuditSampleRateValue;
        if (t <= 0 || this.random() >= t) return;
        const r = await this.listServerFiles(e, {
            tombstoneMode: o.hw.INCLUDE
        });
        if (!r.listingComplete) return;
        const n = function(e) {
            const t = new Map;
            for (const r of e.files){
                let n;
                try {
                    n = v(r.relPath);
                } catch  {
                    continue;
                }
                !0 !== e.pendingDeletePaths?.has(n) && t.set(n, st(r.etag));
            }
            const r = new Set;
            for (const t of e.tombstones)try {
                r.add(v(t.relPath));
            } catch  {
                continue;
            }
            let n = 0;
            const s = new Set;
            for (const o of e.indexed){
                if ("tombstoned" === o.state || !0 === e.pendingDeletePaths?.has(o.relPath)) continue;
                s.add(o.relPath);
                const i = t.get(o.relPath);
                if (void 0 === i || r.has(o.relPath)) {
                    n += 1;
                    continue;
                }
                const a = st(o.lastSeenEtag ?? "");
                "" !== a && a !== i && (n += 1);
            }
            for (const e of t.keys())s.has(e) || (n += 1);
            return n;
        }({
            files: Za({
                files: r.files,
                maxFileSizeBytes: this.maxFileSizeBytes,
                platform: this.platform
            }),
            tombstones: r.tombstones,
            indexed: this.index.listFiles(),
            pendingDeletePaths: new Set(this.index.listPendingDeletes().map((e)=>e.relPath))
        });
        if (0 !== n) return e.versionAudit = "mismatch", this.warn(`Agent store listing version audit: server said not modified but ${n} index row(s) differ from the listing`, void 0), r;
        e.versionAudit = "match";
    }
    async pullDownloadWindow(e) {
        const t = e.candidates, r = e.summary;
        this.throwIfRoundAborted(), await this.assertRoundStillOwnsLock(void 0, {
            bypassCache: !0
        });
        const n = this.monotonicNow(), s = await this.runQueuedControlRpc(this.queues.presign, "rpc", ()=>this.client.presignReads({
                agentId: this.agentId,
                relPaths: t.map((e)=>e.relPath),
                signal: this.activeRoundSignal
            }));
        r.presignMs = (r.presignMs ?? 0) + (this.monotonicNow() - n);
        const o = new Map;
        for (const e of s){
            let t;
            try {
                t = v(e.relPath);
            } catch (t) {
                r.errors.push({
                    relPath: e.relPath,
                    code: "presign_response_mismatch",
                    message: `Server returned an unsafe relPath: ${e.relPath} (${t.message})`
                });
                continue;
            }
            o.set(t, e);
        }
        const i = new Set;
        for (const e of t){
            if (i.size >= 16 && await Promise.race(i), "full" === this.activeRoundLane && this.roundScheduler.hasPendingPathRounds() && (await Promise.all(i), await this.yieldToPathRounds()), this.listingSnapshotStaleFor(e.relPath)) {
                r.filesSkipped++;
                continue;
            }
            const t = this.trackQueue((e)=>this.queues.s3.enqueue(e), ()=>this.downloadPullCandidate(e, o, r)).finally(()=>i.delete(t));
            i.add(t);
        }
        await Promise.all(i);
    }
    async downloadPullCandidate(e, t, r) {
        const n = this.progressReporter("index_commit");
        await this.assertRoundStillOwnsLock(e.relPath, {
            bypassCache: !0
        });
        const s = t.get(e.relPath);
        if (void 0 !== s) try {
            const t = await this.downloadOne(e, s);
            if ("deferred" === t.kind) return void r.pullsDeferred++;
            this.throwIfRoundAborted(e.relPath), r.filesPulled++, r.bytesPulled += t.size, this.index.upsertFile({
                relPath: e.relPath,
                lastSeenEtag: t.etag,
                lastSyncedSha: t.sha,
                size: t.size,
                lastSyncedMs: this.now(),
                direction: "pulled",
                recordedStat: wn({
                    absPath: e.absPath,
                    expectedSize: t.size,
                    recordedMs: this.now()
                })
            }), n();
        } catch (t) {
            this.rethrowIfRoundAbort(t, e.relPath), this.rethrowIfLockLost(t), r.errors.push({
                relPath: e.relPath,
                code: t instanceof ga ? t.code : "download_failed",
                message: t instanceof Error ? t.message : String(t),
                ...yc(t)
            });
        }
        else r.errors.push({
            relPath: e.relPath,
            code: "presign_response_mismatch",
            message: `Server returned no presigned URL for ${e.relPath}`
        });
    }
    async listServerFiles(e, t) {
        const r = this.monotonicNow();
        try {
            return await this.walkServerFiles(e, t);
        } finally{
            e.listMs = (e.listMs ?? 0) + (this.monotonicNow() - r);
        }
    }
    async walkServerFiles(e, t) {
        const r = this.now();
        let n;
        n = t?.tombstoneMode === o.hw.OMIT ? {
            include: !1,
            request: {
                tombstoneMode: o.hw.OMIT
            }
        } : t?.tombstoneMode === o.hw.INCLUDE ? {
            include: !0,
            request: {
                tombstoneMode: o.hw.INCLUDE
            }
        } : this.tombstoneListingMode();
        const s = [], i = new Set, a = new Map, c = new Set;
        let l, u, d = !0, p = !1, m = [
            ""
        ];
        const h = new Set([
            ""
        ]);
        let f;
        const g = void 0 !== t?.ifVersionEqual && "" !== t.ifVersionEqual ? t.ifVersionEqual : void 0;
        for(; m.length > 0;){
            const t = m;
            let o;
            m = [], this.throwIfRoundAborted();
            try {
                o = await this.listLevel(t, n.request, g);
            } catch (e) {
                throw this.rethrowIfRoundAbort(e), e;
            }
            this.throwIfRoundAborted();
            for (const [y, w] of t.entries()){
                const t = o[y];
                if ("" === w) {
                    if (f = void 0 !== t.version && "" !== t.version ? t.version : void 0, !0 === t.notModified) {
                        if (void 0 === g) throw new Error("Agent store listing answered not modified without a version condition");
                        return e.tombstonesReceived = 0, {
                            files: [],
                            tombstones: [],
                            listingComplete: !1,
                            removedSubdirs: [],
                            tombstoneWatermarkMs: $a(t.tombstoneWatermarkMs),
                            tombstoneFloorMs: $a(t.tombstoneFloorMs),
                            listedWithInclude: n.include,
                            listStartMs: r,
                            version: f ?? g,
                            notModified: !0
                        };
                    }
                } else if (!0 === t.notModified) throw new Error(`Agent store listing of ${w} answered not modified without a condition`);
                !0 !== t.listingComplete && (d = !1);
                const _ = $a(t.tombstoneWatermarkMs), b = $a(t.tombstoneFloorMs);
                p ? (l = ja(l, _), u = ja(u, b)) : (l = _, u = b, p = !0);
                for (const e of t.removedSubdirs ?? []){
                    let t;
                    try {
                        t = v(e);
                    } catch  {
                        continue;
                    }
                    c.add(t), this.index.hasLiveDescendantFiles(t) && this.enqueueRemovedDirWalk(t, m, h);
                }
                const S = [
                    ...c
                ].some((e)=>w === e || w.startsWith(`${e}/`)), k = new Set;
                if (!S) for (const e of t.files){
                    let t;
                    try {
                        t = v(e.relPath);
                    } catch  {
                        t = e.relPath;
                    }
                    i.has(t) || U({
                        relPath: t,
                        listedDir: w,
                        removed: c
                    }) || (i.add(t), k.add(t), a.delete(t), s.push(e));
                }
                for (const r of t.tombstones ?? []){
                    let t;
                    try {
                        t = v(r.relPath);
                    } catch  {
                        e.refusals++;
                        continue;
                    }
                    k.has(t) || a.has(t) || a.set(t, {
                        ...r,
                        relPath: t
                    });
                }
                for (const r of t.subdirs){
                    let t;
                    try {
                        t = v(r);
                    } catch (t) {
                        e.errors.push({
                            relPath: r,
                            code: "presign_response_mismatch",
                            message: `Server returned an unsafe subdir: ${r} (${t.message})`
                        });
                        continue;
                    }
                    h.has(t) || [
                        ...c
                    ].some((e)=>t === e || t.startsWith(`${e}/`)) || (h.add(t), m.push(t));
                }
            }
        }
        const y = [
            ...a.values()
        ];
        return e.tombstonesReceived = y.length, {
            files: s,
            tombstones: y,
            listingComplete: d,
            removedSubdirs: [
                ...c
            ],
            tombstoneWatermarkMs: l,
            tombstoneFloorMs: u,
            listedWithInclude: n.include,
            listStartMs: r,
            version: f,
            notModified: !1
        };
    }
    async listLevel(e, t, r) {
        const n = this.activeRoundSignal, s = new AbortController, o = wc(n, s.signal), i = (e)=>{
            !0 === n?.aborted && fc(e, n.reason), s.signal.throwIfAborted();
        }, a = new Array(e.length), c = new Set;
        let l;
        const u = (e)=>{
            void 0 === l && (l = {
                cause: e
            }, s.abort());
        };
        for (const [n, s] of e.entries()){
            if (c.size >= this.listWalkConcurrency && await Promise.race(c), void 0 !== l) break;
            if ("full" === this.activeRoundLane && this.roundScheduler.hasPendingPathRounds()) {
                if (await Promise.all(c), void 0 !== l) break;
                try {
                    await this.yieldToPathRounds();
                } catch (e) {
                    u(e);
                    break;
                }
            }
            const e = this.trackQueue((e)=>this.queues.list.enqueue(e), async ()=>{
                const e = this.progressReporter("listing_page");
                i(s), a[n] = await this.client.listFiles({
                    agentId: this.agentId,
                    relPath: s,
                    signal: o,
                    ...t,
                    ..."" === s && void 0 !== r ? {
                        ifVersionEqual: r
                    } : {}
                }), e();
            }).then(Ia, u).finally(()=>c.delete(e));
            c.add(e);
        }
        if (await Promise.all(c), void 0 !== l) throw l.cause;
        return a;
    }
    enqueueRemovedDirWalk(e, t, r) {
        r.has(e) || (r.add(e), t.push(e));
        for (const n of this.index.listFiles()){
            if ("tombstoned" === n.state) continue;
            if (!Ba({
                relPath: n.relPath,
                dir: e
            })) continue;
            let s = Oa(n.relPath);
            for(; void 0 !== s && "" !== s && Ba({
                relPath: s,
                dir: e
            });)r.has(s) || (r.add(s), t.push(s)), s = Oa(s);
        }
    }
    async applyRemovedLocalDirs(e, t, r) {
        const n = new Set;
        for (const e of t)try {
            n.add(v(e.relPath));
        } catch  {}
        const s = [
            ...new Set(e)
        ].sort(qa);
        for (const e of s)"" !== e && (this.index.removePendingRmdir(e), n.has(e) ? (await this.clearLeftoverDescendantsForReusedFile(e, r), this.rmdirLocalEmptyAncestors(e, r)) : this.hasLiveIndexRowsUnder(e) || this.rmdirLocalEmptyAncestors(e, r));
    }
    async clearLeftoverDescendantsForReusedFile(e, t) {
        for (const r of this.index.listFiles()){
            if ("tombstoned" === r.state || r.relPath === e) continue;
            if (!Ba({
                relPath: r.relPath,
                dir: e
            })) continue;
            const n = Ma({
                base: this.filesDir,
                relPath: r.relPath
            });
            if ("absent" === n.kind) {
                this.index.deleteFile(r.relPath);
                continue;
            }
            if ("refused" === n.kind) {
                t.errors.push({
                    relPath: r.relPath,
                    code: "not_regular_file",
                    message: n.message
                });
                continue;
            }
            const s = n.leafAbs;
            let o, i;
            try {
                o = p.lstatSync(s);
            } catch (e) {
                if (!uc(e) || "ENOENT" !== e.code) {
                    t.errors.push({
                        relPath: r.relPath,
                        code: "fs_read_failed",
                        message: e instanceof Error ? e.message : String(e)
                    });
                    continue;
                }
                this.index.deleteFile(r.relPath);
                continue;
            }
            if (o.isSymbolicLink() || !o.isFile()) {
                if (o.isDirectory()) continue;
                if (!this.relocateBlockerOutsideRemovedDir({
                    absPath: s,
                    relPath: r.relPath,
                    dir: e
                })) {
                    t.errors.push({
                        relPath: r.relPath,
                        code: "fs_write_failed",
                        message: `Failed to park leftover ${r.relPath} under reused ${e}`
                    });
                    continue;
                }
                this.index.deleteFile(r.relPath);
                continue;
            }
            try {
                i = (await nc({
                    absPath: s,
                    maxBytes: this.maxFileSizeBytes,
                    expectedDev: o.dev,
                    expectedIno: o.ino
                })).sha;
            } catch (e) {
                t.errors.push({
                    relPath: r.relPath,
                    code: e instanceof ga ? e.code : "fs_read_failed",
                    message: e instanceof Error ? e.message : String(e)
                });
                continue;
            }
            const a = Ma({
                base: this.filesDir,
                relPath: r.relPath
            });
            if ("ready" === a.kind && a.leafAbs === s) {
                if (i !== r.lastSyncedSha) {
                    if (!this.parkUnsyncedBytesOutsideRemovedDir({
                        absPath: s,
                        relPath: r.relPath,
                        dir: e
                    })) {
                        t.errors.push({
                            relPath: r.relPath,
                            code: "fs_write_failed",
                            message: `Failed to park leftover ${r.relPath} under reused ${e}`
                        });
                        continue;
                    }
                } else {
                    try {
                        p.unlinkSync(s);
                    } catch (n) {
                        if (!uc(n) || "ENOENT" !== n.code) {
                            t.errors.push({
                                relPath: r.relPath,
                                code: "fs_write_failed",
                                message: `Failed to unlink leftover ${r.relPath} under reused ${e}: ${n instanceof Error ? n.message : String(n)}`
                            });
                            continue;
                        }
                    }
                    t.filesDeletedLocal++;
                }
                this.index.deleteFile(r.relPath);
            } else t.errors.push({
                relPath: r.relPath,
                code: "not_regular_file",
                message: `Refusing leftover ${r.relPath}: parent changed before park or unlink`
            });
        }
        this.clearUnindexedDiskLeftoversForReusedFile(e, t);
    }
    clearUnindexedDiskLeftoversForReusedFile(e, t) {
        const r = this.listDiskNodesUnder(e, t);
        r.sort((e, t)=>qa(e.relPath, t.relPath));
        for (const n of r){
            const r = this.index.getFile(n.relPath);
            if (void 0 !== r && "tombstoned" !== r.state) continue;
            ("file" === n.kind ? this.parkUnsyncedBytesOutsideRemovedDir({
                absPath: n.absPath,
                relPath: n.relPath,
                dir: e
            }) : this.relocateBlockerOutsideRemovedDir({
                absPath: n.absPath,
                relPath: n.relPath,
                dir: e
            })) ? void 0 !== r && this.index.deleteFile(n.relPath) : t.errors.push({
                relPath: n.relPath,
                code: "fs_write_failed",
                message: `Failed to park unindexed leftover ${n.relPath} under reused ${e}`
            });
        }
    }
    relocateBlockerOutsideRemovedDir(e) {
        return void 0 !== this.materializeConflictRename({
            absPath: e.absPath
        }, Ta(Ja({
            relPath: e.relPath,
            dir: e.dir
        })), {
            requireRegularFile: !1
        });
    }
    listDiskNodesUnder(e, t) {
        const r = [];
        let n;
        try {
            n = C({
                base: this.filesDir,
                relPath: e
            });
        } catch (n) {
            return t.errors.push({
                relPath: e,
                code: "fs_read_failed",
                message: n instanceof Error ? n.message : String(n)
            }), r;
        }
        if ("directory" !== n.kind) return r;
        const s = [
            {
                relPath: e,
                absPath: n.absPath
            }
        ];
        for(; s.length > 0;){
            const e = s.pop();
            if (void 0 === e) break;
            let n;
            try {
                const r = p.lstatSync(e.absPath);
                if (r.isSymbolicLink() || !r.isDirectory()) {
                    t.errors.push({
                        relPath: e.relPath,
                        code: "not_regular_file",
                        message: `Refusing to walk leftover parent ${e.relPath}: not a directory`
                    });
                    continue;
                }
                n = p.readdirSync(e.absPath, {
                    withFileTypes: !0
                });
                const s = p.lstatSync(e.absPath);
                if (s.isSymbolicLink() || !s.isDirectory() || s.dev !== r.dev || s.ino !== r.ino) {
                    t.errors.push({
                        relPath: e.relPath,
                        code: "not_regular_file",
                        message: `Refusing to walk leftover parent ${e.relPath}: directory changed during readdir`
                    });
                    continue;
                }
            } catch (r) {
                if (uc(r) && "ENOENT" === r.code) continue;
                t.errors.push({
                    relPath: e.relPath,
                    code: "fs_read_failed",
                    message: r instanceof Error ? r.message : String(r)
                });
                continue;
            }
            for (const o of n){
                if ("." === o.name || ".." === o.name || 0 === o.name.length || o.name.includes("/") || o.name.includes("\\")) continue;
                const n = "" === e.relPath ? o.name : `${e.relPath}/${o.name}`;
                try {
                    v(n);
                } catch (e) {
                    t.errors.push({
                        relPath: n,
                        code: "fs_read_failed",
                        message: e instanceof Error ? e.message : String(e)
                    });
                    continue;
                }
                const i = h.join(e.absPath, o.name);
                let a;
                try {
                    a = p.lstatSync(i);
                } catch (e) {
                    if (uc(e) && "ENOENT" === e.code) continue;
                    t.errors.push({
                        relPath: n,
                        code: "fs_read_failed",
                        message: e instanceof Error ? e.message : String(e)
                    });
                    continue;
                }
                !a.isSymbolicLink() && a.isDirectory() ? s.push({
                    relPath: n,
                    absPath: i
                }) : r.push({
                    relPath: n,
                    absPath: i,
                    kind: a.isFile() ? "file" : "blocker"
                });
            }
        }
        return r;
    }
    rmdirLocalEmptyAncestors(e, t) {
        const { removedCount: r } = P({
            base: this.filesDir,
            dirRelPath: e
        });
        r > 0 && (t.removedDirsApplied = (t.removedDirsApplied ?? 0) + r);
    }
    async applyRemoteTombstones(e, t, r) {
        const n = !0 === r?.acceptEmptyTombstoneEtag;
        let s = 0, o = 0, i = 0;
        for (const r of e){
            if (0 === r.tombstoneEtag.length && !n) {
                s++;
                continue;
            }
            const e = r.relPath;
            if (this.listingSnapshotStaleFor(e)) {
                s++;
                continue;
            }
            const a = this.index.getFile(e);
            if ("tombstoned" === a?.state) {
                const e = La(r.tombstoneEtag);
                void 0 !== e && a.tombstoneEtag !== e && this.index.upsertFile({
                    ...a,
                    lastSyncedMs: this.now(),
                    state: "tombstoned",
                    tombstoneEtag: e,
                    deletedAtMs: r.deletedAtMs > 0 ? r.deletedAtMs : this.now()
                });
                continue;
            }
            let c, l;
            try {
                c = x({
                    base: this.filesDir,
                    relPath: e
                });
            } catch (r) {
                t.refusals++, t.errors.push({
                    relPath: e,
                    code: "not_regular_file",
                    message: r instanceof Error ? r.message : String(r)
                }), s++;
                continue;
            }
            try {
                l = p.lstatSync(c);
            } catch (r) {
                if (!uc(r) || "ENOENT" !== r.code) {
                    t.errors.push({
                        relPath: e,
                        code: "fs_read_failed",
                        message: r instanceof Error ? r.message : String(r)
                    }), s++;
                    continue;
                }
            }
            if (void 0 !== l) {
                if (!l.isFile() || l.isSymbolicLink()) {
                    t.errors.push({
                        relPath: e,
                        code: "not_regular_file",
                        message: `Refusing to apply tombstone over non-regular file: ${e}`
                    }), s++;
                    continue;
                }
                if (void 0 === a) {
                    if ("readWrite" === this.syncMode) {
                        s++;
                        continue;
                    }
                    if (!this.parkUnsyncedBytesBesidePath({
                        absPath: c,
                        relPath: e
                    })) {
                        s++;
                        continue;
                    }
                    t.filesDeletedLocal++, this.index.upsertFile({
                        relPath: e,
                        lastSyncedSha: "",
                        size: 0,
                        lastSyncedMs: this.now(),
                        direction: "pulled",
                        state: "tombstoned",
                        tombstoneEtag: La(r.tombstoneEtag),
                        deletedAtMs: r.deletedAtMs > 0 ? r.deletedAtMs : this.now()
                    }), o++;
                    continue;
                }
                let n;
                try {
                    n = (await nc({
                        absPath: c,
                        maxBytes: this.maxFileSizeBytes,
                        expectedDev: l.dev,
                        expectedIno: l.ino
                    })).sha;
                } catch (r) {
                    t.errors.push({
                        relPath: e,
                        code: r instanceof ga ? r.code : "fs_read_failed",
                        message: r instanceof Error ? r.message : String(r)
                    }), s++;
                    continue;
                }
                if (n !== a.lastSyncedSha) {
                    if ("readWrite" === this.syncMode) {
                        s++, i++;
                        continue;
                    }
                    if (!this.parkUnsyncedBytesBesidePath({
                        absPath: c,
                        relPath: e
                    })) {
                        s++;
                        continue;
                    }
                }
                const u = t.conflicts.find((t)=>t.relPath === e);
                if (void 0 !== u) {
                    const e = this.materializeConflictRename({
                        absPath: c
                    }, u.conflictRelPath);
                    if (void 0 === e) {
                        s++;
                        continue;
                    }
                    this.index.upsertFile({
                        relPath: e.canonicalRelPath,
                        lastSeenEtag: u.conflictEtag,
                        lastSyncedSha: n,
                        size: l.size,
                        lastSyncedMs: this.now(),
                        direction: "pushed"
                    });
                } else {
                    try {
                        p.unlinkSync(c);
                    } catch (r) {
                        if (!uc(r) || "ENOENT" !== r.code) {
                            t.errors.push({
                                relPath: e,
                                code: "fs_write_failed",
                                message: `Failed to unlink remotely deleted ${e}: ${r instanceof Error ? r.message : String(r)}`
                            }), s++;
                            continue;
                        }
                    }
                    t.filesDeletedLocal++;
                }
            }
            this.index.upsertFile({
                relPath: e,
                lastSyncedSha: a?.lastSyncedSha ?? "",
                ...void 0 !== a?.lastSeenEtag ? {
                    lastSeenEtag: a.lastSeenEtag
                } : {},
                size: a?.size ?? 0,
                lastSyncedMs: this.now(),
                direction: a?.direction ?? "pulled",
                state: "tombstoned",
                tombstoneEtag: La(r.tombstoneEtag),
                deletedAtMs: r.deletedAtMs > 0 ? r.deletedAtMs : this.now()
            }), o++;
        }
        return {
            deferred: s,
            applied: o,
            skippedModified: i
        };
    }
    tombstoneListingMode() {
        const e = Ga(this.index.getMeta(kn)), t = this.tombstoneFullRefreshRounds(), r = za(this.index.getMeta(Cn)), n = Ga(this.index.getMeta(Pn)), s = this.tombstoneFullRefreshIntervalMs(), i = s > 0 && void 0 !== e && (void 0 === n || this.now() - n >= s);
        return void 0 === e || t <= 1 || r + 1 >= t || i ? {
            include: !0,
            request: {
                tombstoneMode: o.hw.INCLUDE
            }
        } : {
            include: !1,
            request: {
                tombstoneMode: o.hw.SINCE,
                tombstonesSinceMs: e
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
    commitTombstoneCursor(e) {
        if (!e.listingComplete) return;
        if (e.listedWithInclude && (this.index.setMeta({
            key: Cn,
            value: "0"
        }), this.index.setMeta({
            key: Pn,
            value: String(this.now())
        })), void 0 === e.watermarkMs || e.deferred > 0) return;
        const t = Ga(this.index.getMeta(kn));
        this.index.setMeta({
            key: kn,
            value: String(e.watermarkMs)
        }), e.summary.tombstoneCursorAdvancedMs = void 0 === t ? 0 : e.watermarkMs - t, e.listedWithInclude || this.bumpRoundsSinceInclude();
    }
    bumpRoundsSinceInclude() {
        const e = za(this.index.getMeta(Cn)) + 1;
        this.index.setMeta({
            key: Cn,
            value: String(e)
        });
    }
    pruneExpiredTombstoneRows({ tombstones: e, listingComplete: t, tombstoneFloorMs: r, listedWithInclude: n }) {
        if (void 0 !== r) {
            const e = r - this.tombstonePruneSlackMs();
            for (const t of this.index.listFiles()){
                if ("tombstoned" !== t.state) continue;
                (t.deletedAtMs ?? t.lastSyncedMs) >= e || this.index.deleteFile(t.relPath);
            }
            return;
        }
        if (!t || !n) return;
        const s = new Set(e.map((e)=>e.relPath)), o = this.now() - ra;
        for (const e of this.index.listFiles()){
            if ("tombstoned" !== e.state) continue;
            if (s.has(e.relPath)) continue;
            (e.deletedAtMs ?? e.lastSyncedMs) > o || this.index.deleteFile(e.relPath);
        }
    }
    lastCompleteRoundMs() {
        return Ga(this.index.getMeta(xn)) ?? Ga(this.index.getMeta(In));
    }
    commitLastCompleteRoundMs(e) {
        return !!e.listingComplete && (this.index.setMeta({
            key: En,
            value: String(this.now())
        }), (!e.absenceNeeded || void 0 !== e.tombstoneFloorMs) && !(e.absenceDeferred > 0) && (this.index.setMeta({
            key: xn,
            value: String(e.watermarkMs ?? e.listStartMs)
        }), !0));
    }
    shouldApplyAbsenceDeletes(e) {
        return !e.listingComplete || void 0 === e.tombstoneFloorMs || void 0 === e.lastCompleteRoundMs || e.lastCompleteRoundMs >= e.tombstoneFloorMs ? "no" : e.listedWithInclude ? "ready" : "needs-include";
    }
    async applyAbsenceDeletes(e) {
        const t = e.tombstoneFloorMs;
        if ("ready" !== this.shouldApplyAbsenceDeletes({
            listingComplete: e.listingComplete,
            listedWithInclude: e.listedWithInclude,
            tombstoneFloorMs: t,
            lastCompleteRoundMs: e.lastCompleteRoundMs
        }) || void 0 === t) return {
            deferred: 0
        };
        const r = new Set;
        for (const t of e.files)try {
            r.add(v(t.relPath));
        } catch  {
            continue;
        }
        const n = new Set(e.tombstones.map((e)=>e.relPath)), s = [];
        for (const o of this.index.listFiles())"live" === o.state && void 0 !== o.lastSeenEtag && 0 !== o.lastSeenEtag.length && ((0, Wt.TM)(o.relPath) || this.index.hasPendingDelete(o.relPath) || r.has(o.relPath) || n.has(o.relPath) || e.removedSubdirs.some((e)=>Ba({
                relPath: o.relPath,
                dir: e
            })) || s.push({
            relPath: o.relPath,
            tombstoneEtag: "",
            deletedAtMs: t
        }));
        const o = await this.applyRemoteTombstones(s, e.summary, {
            acceptEmptyTombstoneEtag: !0
        });
        e.summary.absenceDeletesApplied = o.applied, e.summary.absenceDeletesSkippedModified = o.skippedModified;
        const i = new Set;
        for (const e of s){
            if ("tombstoned" !== this.index.getFile(e.relPath)?.state) continue;
            const t = Oa(e.relPath);
            void 0 !== t && "" !== t && i.add(t);
        }
        for (const t of [
            ...i
        ].sort(qa))this.hasLiveIndexRowsUnder(t) || this.rmdirLocalEmptyAncestors(t, e.summary);
        return {
            deferred: o.deferred
        };
    }
    preparePullCandidate(e, t) {
        let r, n;
        try {
            r = v(e.relPath), k({
                relPath: r,
                platform: this.platform
            }), n = x({
                base: this.filesDir,
                relPath: r
            });
        } catch (r) {
            t.refusals++;
            let n = "presign_response_mismatch";
            return r instanceof f && (n = "windows_incompatible" === r.code ? "windows_incompatible" : "not_regular_file"), void t.errors.push({
                relPath: e.relPath,
                code: n,
                message: r instanceof Error ? r.message : String(r)
            });
        }
        if (e.size > this.maxFileSizeBytes) return void t.errors.push({
            relPath: r,
            code: "file_too_large",
            message: `Server file ${r} (${e.size} bytes) exceeds the ${this.maxFileSizeBytes}-byte cap`
        });
        if (this.listingSnapshotStaleFor(r)) return void t.filesSkipped++;
        const s = this.index.getFile(r);
        return void 0 !== s && s.lastSeenEtag === st(e.etag) && oc(n) ? (this.index.upsertFile({
            ...s,
            lastSyncedMs: this.now(),
            state: "live",
            tombstoneEtag: void 0,
            deletedAtMs: void 0
        }), void t.filesSkipped++) : {
            relPath: r,
            absPath: n,
            serverEtag: st(e.etag),
            serverSize: e.size
        };
    }
    pullCandidatesFromListing(e, t, r) {
        const n = new Set(this.index.listPendingDeletes().map((e)=>e.relPath)), s = [], o = new Map;
        for (const i of e){
            let e;
            try {
                e = v(i.relPath);
            } catch (e) {
                void 0 === r && (t.refusals++, t.errors.push({
                    relPath: i.relPath,
                    code: "presign_response_mismatch",
                    message: e instanceof Error ? e.message : String(e)
                }));
                continue;
            }
            const a = e.toLowerCase(), c = o.get(a);
            if (void 0 !== c && c !== e) {
                (void 0 === r || r.has(e)) && t.errors.push({
                    relPath: e,
                    code: "case_collision",
                    message: `Server listing has case-colliding paths: ${c} and ${e}`
                });
                continue;
            }
            if (o.set(a, e), void 0 !== r && !r.has(e)) continue;
            if (n.has(e)) {
                t.pullsSkippedPendingDelete++;
                continue;
            }
            const l = this.preparePullCandidate(i, t);
            void 0 !== l && s.push(l);
        }
        return s;
    }
    async pullCandidates(e, t) {
        for(let r = 0; r < e.length; r += this.pullPresignWindowSize)await this.yieldToPathRounds(), await this.pullDownloadWindow({
            candidates: e.slice(r, r + this.pullPresignWindowSize),
            summary: t
        });
    }
    async downloadOne(e, t) {
        this.assertPresignedUrlSafe({
            rawUrl: t.url,
            relPath: e.relPath
        });
        const r = this.activeRoundSignal, n = function(e) {
            if (e <= 0) return;
            const t = new AbortController;
            let r;
            const n = ()=>{
                t.signal.aborted || (void 0 !== r && clearTimeout(r), r = setTimeout(()=>{
                    t.abort(new DOMException(`blob transfer idle timeout after ${e}ms`, "TimeoutError"));
                }, e), r.unref?.());
            };
            return {
                signal: t.signal,
                rearm: n,
                clear: ()=>{
                    void 0 !== r && (clearTimeout(r), r = void 0);
                }
            };
        }(this.blobIdleTimeoutMs), s = wc(r, n?.signal);
        let o;
        try {
            o = await this.fetchImpl(t.url, {
                method: "GET",
                redirect: "error",
                ...void 0 !== s ? {
                    signal: s
                } : {}
            });
        } catch (s) {
            if (n?.clear(), !0 === r?.aborted && fc(e.relPath, r.reason ?? s), vc(s, n?.signal)) throw new ga({
                code: "download_failed",
                relPath: e.relPath,
                timeoutClass: "blob_get",
                message: `blob_get idle timeout after ${this.blobIdleTimeoutMs}ms (url=${js(t.url)})`
            });
            throw s;
        }
        if (!o.ok) {
            n?.clear();
            const r = await async function(e) {
                try {
                    return await e.text();
                } catch  {
                    return "";
                }
            }(o);
            throw new ga({
                code: "download_failed",
                relPath: e.relPath,
                message: `Download of ${e.relPath} failed (${o.status} ${o.statusText}, url=${js(t.url)}): ${r}`
            });
        }
        if (null === o.body) throw n?.clear(), new ga({
            code: "download_failed",
            relPath: e.relPath,
            message: `Download of ${e.relPath} returned an empty response body`
        });
        const i = h.dirname(e.absPath);
        ac({
            base: this.filesDir,
            parent: i,
            relPath: e.relPath
        }), cc({
            base: this.filesDir,
            target: i,
            relPath: e.relPath
        }), ic({
            absPath: e.absPath,
            relPath: e.relPath
        });
        const a = `${(0, Ys.randomBytes)(16).toString("hex")}.bin`, c = x({
            base: this.tmpDir,
            relPath: a
        }), l = p.openSync(c, sc(), 384);
        let u = 0;
        const d = (0, Ys.createHash)("sha256"), m = this.maxFileSizeBytes, f = void 0 === this.onRoundProgress ? void 0 : this.progressReporter("blob_get_bytes"), g = new Ri.Transform({
            transform: (t, r, s)=>{
                const o = Buffer.isBuffer(t) ? t : Buffer.from(t);
                u += o.byteLength, f?.(o.byteLength), n?.rearm(), u > m ? s(new ga({
                    code: "file_too_large",
                    relPath: e.relPath,
                    message: `Server returned >${m} bytes for ${e.relPath}`
                })) : (d.update(o), s(null, o));
            }
        }), y = p.createWriteStream("", {
            fd: l,
            autoClose: !1
        }), w = ()=>{
            n?.rearm();
        };
        let v = !1, _ = !1, b = "", S = "";
        try {
            try {
                n?.rearm(), y.on("drain", w), await (0, Mi.pipeline)(Ri.Readable.fromWeb(o.body), g, y);
            } catch (s) {
                if (s instanceof ga) throw s;
                if (!0 === r?.aborted && fc(e.relPath, r.reason ?? s), vc(s, n?.signal)) throw new ga({
                    code: "download_failed",
                    relPath: e.relPath,
                    timeoutClass: "blob_get",
                    message: `blob_get idle timeout after ${this.blobIdleTimeoutMs}ms (url=${js(t.url)})`
                });
                throw new ga({
                    code: "download_failed",
                    relPath: e.relPath,
                    message: `Streaming ${e.relPath} from ${js(t.url)} failed: ${s instanceof Error ? s.message : String(s)}`
                });
            } finally{
                y.off("drain", w), n?.clear();
            }
            try {
                p.fsyncSync(l);
            } catch  {}
            if (p.closeSync(l), _ = !0, S = st(o.headers.get("etag") ?? void 0), 0 === S.length) throw new ga({
                code: "etag_mismatch",
                relPath: e.relPath,
                message: `Download of ${e.relPath} returned no ETag header (expected ${e.serverEtag})`
            });
            const s = await this.listedIdentity(e, S);
            if (s?.etag !== S) throw new ga({
                code: "etag_mismatch",
                relPath: e.relPath,
                message: `Downloaded ${e.relPath} etag ${S}, but the server lists ${s?.etag ?? "no such file"} (round listed ${e.serverEtag})`
            });
            if (u !== s.size) throw new ga({
                code: "etag_mismatch",
                relPath: e.relPath,
                message: `Downloaded ${e.relPath} size ${u}, expected ${s.size}`
            });
            if (b = d.digest("hex"), "readWrite" === this.syncMode && !await this.isLocalFileReplaceable(e, b)) return {
                kind: "deferred"
            };
            try {
                p.renameSync(c, e.absPath), v = !0;
            } catch (t) {
                throw new ga({
                    code: "fs_write_failed",
                    relPath: e.relPath,
                    message: `Failed to rename staged blob into ${e.absPath}: ${t instanceof Error ? t.message : String(t)}`
                });
            }
            try {
                p.chmodSync(e.absPath, this.pulledFileMode());
            } catch  {}
        } finally{
            if (!_) try {
                p.closeSync(l);
            } catch  {}
            if (!v) try {
                p.unlinkSync(c);
            } catch  {}
        }
        return {
            kind: "downloaded",
            size: u,
            sha: b,
            etag: S
        };
    }
    async listedIdentity(e, t) {
        if (t === e.serverEtag) return {
            etag: e.serverEtag,
            size: e.serverSize
        };
        this.client.invalidateListCache?.({
            agentId: this.agentId
        });
        const r = await this.runQueuedControlRpc(this.queues.list, "listing_page", ()=>this.client.listFiles({
                agentId: this.agentId,
                relPath: Ua(e.relPath),
                tombstoneMode: o.hw.OMIT,
                signal: this.activeRoundSignal
            }));
        for (const t of r.files){
            let r;
            try {
                r = v(t.relPath);
            } catch  {
                continue;
            }
            if (r === e.relPath) return {
                etag: st(t.etag),
                size: t.size
            };
        }
    }
    async isLocalFileReplaceable(e, t) {
        let r;
        try {
            r = p.lstatSync(e.absPath);
        } catch (e) {
            return !(!uc(e) || "ENOENT" !== e.code);
        }
        if (!r.isFile()) return !1;
        if (r.nlink > 1) return !0;
        try {
            const { sha: n } = await nc({
                absPath: e.absPath,
                maxBytes: this.maxFileSizeBytes,
                expectedDev: r.dev,
                expectedIno: r.ino
            });
            if (n === t) return !0;
            const s = this.index.getFile(e.relPath);
            return void 0 !== s && n === s.lastSyncedSha;
        } catch  {
            return !1;
        }
    }
    decidePushStatFastPath(e) {
        if (!hn(this.localStatFastPath, this.platform)) return "hash";
        const t = e.existing, r = fn({
            mode: this.localStatFastPath,
            platform: this.platform,
            racyMarginMs: this.localStatRacyMarginMs,
            live: wa(e.absPath, e.size),
            recorded: t?.recordedStat,
            synced: void 0 !== t && "tombstoned" !== t.state,
            indexSize: t?.size
        });
        return "skip" !== r.action || this.shouldAuditStatFastPath() ? "skip" === r.action ? "audit" : ("hash" === r.action && this.noteStatFastPath("miss"), "hash") : "unchanged";
    }
    async hashCandidate(e) {
        let t;
        try {
            t = x({
                base: this.filesDir,
                relPath: e.relPath
            });
        } catch (t) {
            return {
                kind: "error",
                relPath: e.relPath,
                code: "not_regular_file",
                message: t instanceof Error ? t.message : `Unsafe path: ${e.relPath}`
            };
        }
        if (t !== e.absPath) return {
            kind: "error",
            relPath: e.relPath,
            code: "not_regular_file",
            message: `Resolved path ${t} did not match walk-reported path ${e.absPath}`
        };
        const r = this.decidePushStatFastPath(e);
        if ("unchanged" === r && void 0 !== e.existing) return {
            kind: "stat_unchanged",
            relPath: e.relPath,
            existing: e.existing
        };
        let n, s, o, i;
        "audit" === r && (e = {
            ...e,
            statFastPathAudit: "skip"
        });
        try {
            const t = await nc({
                absPath: e.absPath,
                maxBytes: this.maxFileSizeBytes,
                expectedDev: e.dev,
                expectedIno: e.ino,
                ...e.size >= this.multipartUploadThresholdBytes ? {
                    multipartPartSizeBytes: this.multipartPartSizeBytes
                } : {}
            });
            n = t.size, s = t.sha, o = t.etag, i = t.multipartParts;
        } catch (t) {
            return t instanceof ga ? {
                kind: "error",
                relPath: e.relPath,
                code: t.code,
                message: t.message
            } : {
                kind: "error",
                relPath: e.relPath,
                code: "fs_read_failed",
                message: t instanceof Error ? t.message : `Failed to hash file: ${t}`
            };
        }
        return {
            kind: "hashed",
            relPath: e.relPath,
            absPath: e.absPath,
            size: n,
            mtimeMs: e.mtimeMs,
            dev: e.dev,
            ino: e.ino,
            sha: s,
            etag: o,
            ...void 0 !== i ? {
                multipartParts: i
            } : {},
            ...void 0 !== e.statFastPathAudit ? {
                statFastPathAudit: e.statFastPathAudit
            } : {},
            existing: e.existing
        };
    }
    async uploadOne(e, t, r) {
        return this.assertPresignedUrlSafe({
            rawUrl: t.url,
            relPath: e.relPath
        }), await this.runQueued(this.queues.s3, async ()=>(this.throwIfRoundAborted(e.relPath), this.assertPresignedUrlNotExpired({
                expiresAtMs: t.expiresAtMs,
                relPath: e.relPath
            }), await this.assertRoundStillOwnsLock(e.relPath, {
                bypassCache: !0
            }), await this.blobTransfer.uploadFile({
                url: t.url,
                relPath: e.relPath,
                absPath: e.absPath,
                sha: e.sha,
                size: e.size,
                expectedDev: e.dev,
                expectedIno: e.ino,
                presignHeaders: t.headers,
                signal: this.activeRoundSignal,
                ...void 0 !== this.onRoundProgress ? {
                    onBytes: this.cappedRoundBytes("blob_put_bytes", e.relPath, e.size)
                } : {}
            })));
    }
    assertPresignedUrlNotExpired(e) {
        if (e.expiresAtMs <= this.now()) throw new ga({
            code: "presigned_url_expired",
            relPath: e.relPath,
            message: `Presigned upload URL expired before ${e.relPath} could be sent`,
            retryable: !1
        });
    }
    assertPresignedUrlSafe({ rawUrl: e, relPath: t }) {
        try {
            Gs({
                rawUrl: e,
                relPath: t,
                validatePresignedUrl: this.validatePresignedUrl
            });
        } catch (e) {
            throw new ga({
                code: "presigned_url_rejected",
                relPath: t,
                message: e instanceof Error ? e.message : String(e),
                cause: e instanceof Error ? e : void 0
            });
        }
    }
    shouldAuditStatFastPath() {
        const e = this.localStatFastPathAuditRate;
        return e > 0 && (e >= 1 || this.random() < e);
    }
    noteStatFastPath(e) {
        try {
            this.onStatFastPath?.(e);
        } catch  {}
    }
    captureRecordedStat(e) {
        return wn({
            absPath: e.absPath,
            expectedSize: e.size,
            expectedDev: BigInt(e.dev),
            expectedIno: BigInt(e.ino),
            recordedMs: this.now()
        });
    }
    ensureDirsExist() {
        p.mkdirSync(this.filesDir, {
            recursive: !0,
            mode: Wt.qH
        }), p.mkdirSync(this.tmpDir, {
            recursive: !0,
            mode: Wt.qH
        });
    }
}
function wa(e, t) {
    try {
        const r = p.lstatSync(e, {
            bigint: !0
        });
        if (r.isSymbolicLink() || !r.isFile() || r.size > BigInt(Number.MAX_SAFE_INTEGER)) return {
            size: t
        };
        const n = r.nlink <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(r.nlink) : void 0;
        return {
            size: Number(r.size),
            mtimeNs: r.mtimeNs,
            ctimeNs: r.ctimeNs,
            inoNs: r.ino,
            devNs: r.dev,
            ...void 0 !== n ? {
                nlink: n
            } : {}
        };
    } catch  {
        return {
            size: t
        };
    }
}
function va(e) {
    return e instanceof ga && "write_conflict" === e.code;
}
function _a(e) {
    return e instanceof ga && "presigned_url_expired" === e.code;
}
function ba(e) {
    return !0 === e.primaryPreconditionFailed || void 0 !== e.lockRedirect;
}
function Sa(e, t) {
    return !0 !== e.primaryPreconditionFailed && void 0 !== e.lockRedirect && e.lockRedirect.lockExpiresAtMs <= t;
}
function ka(e) {
    for (const t of Object.keys(e.headers ?? {})){
        const e = t.toLowerCase();
        if ("if-match" === e || "if-none-match" === e) return !0;
    }
    return !1;
}
function xa(e, t) {
    const r = t.toLowerCase();
    for (const [t, n] of Object.entries(e))if (t.toLowerCase() === r) return n;
}
function Ea(e, t) {
    return {
        relPath: e,
        code: t instanceof ga ? t.code : "upload_failed",
        message: t instanceof Error ? t.message : String(t),
        ...yc(t)
    };
}
function Ia() {}
function Ta(e) {
    const t = e.lastIndexOf("/"), r = t >= 0 ? e.slice(0, t + 1) : "", n = t >= 0 ? e.slice(t + 1) : e, s = n.lastIndexOf("."), o = s > 0, i = o ? n.slice(0, s) : n, a = o ? n.slice(s) : "";
    return `${r}${i}.local-conflict.${(0, Ys.randomUUID)()}${a}`;
}
function Ca(e) {
    const { start: t, end: r } = e;
    return "unreadable" !== t.kind && "unreadable" !== r.kind && ("absent" === t.kind || "absent" === r.kind || t.identity.dev !== r.identity.dev || t.identity.ino !== r.identity.ino);
}
function Pa(e, t) {
    for (const r of e){
        const e = r.relPath;
        if ("." === e || e === t || t.startsWith(`${e}/`)) return !0;
    }
    return !1;
}
const Aa = 64, Ra = 200;
function Ma(e) {
    let t;
    try {
        t = v(e.relPath);
    } catch (e) {
        return {
            kind: "refused",
            message: e instanceof Error ? e.message : String(e)
        };
    }
    const r = t.lastIndexOf("/"), n = r < 0 ? "" : t.slice(0, r), s = r < 0 ? t : t.slice(r + 1);
    if (0 === s.length || "." === s || ".." === s || s.includes("/")) return {
        kind: "refused",
        message: `Refusing leftover leaf ${t}`
    };
    let o;
    if ("" === n) {
        try {
            const t = p.lstatSync(e.base);
            if (t.isSymbolicLink() || !t.isDirectory()) return {
                kind: "refused",
                message: "Refusing leftover under a non-directory store base"
            };
        } catch (e) {
            return {
                kind: "refused",
                message: e instanceof Error ? e.message : String(e)
            };
        }
        o = e.base;
    } else {
        let r;
        try {
            r = C({
                base: e.base,
                relPath: n
            });
        } catch (e) {
            return {
                kind: "refused",
                message: e instanceof Error ? e.message : String(e)
            };
        }
        if ("absent" === r.kind) return {
            kind: "absent"
        };
        if ("directory" !== r.kind) return {
            kind: "refused",
            message: `Refusing leftover ${t}: parent ${n} is not a directory`
        };
        o = r.absPath;
    }
    try {
        const e = p.lstatSync(o);
        if (e.isSymbolicLink() || !e.isDirectory()) return {
            kind: "refused",
            message: `Refusing leftover ${t}: parent changed before the leaf stat`
        };
    } catch (e) {
        return uc(e) && "ENOENT" === e.code ? {
            kind: "absent"
        } : {
            kind: "refused",
            message: e instanceof Error ? e.message : String(e)
        };
    }
    return {
        kind: "ready",
        leafAbs: h.join(o, s)
    };
}
function Ja(e) {
    const t = `${e.dir}/`, r = (e.relPath.startsWith(t) ? e.relPath.slice(t.length) : e.relPath).replaceAll("/", "-"), n = Oa(e.dir);
    return void 0 === n || "" === n ? r : `${n}/${r}`;
}
function Oa(e) {
    if ("" === e) return;
    const t = e.lastIndexOf("/");
    return t < 0 ? "" : e.slice(0, t);
}
function Ba(e) {
    const { relPath: t, dir: r } = e;
    return "" === r || t === r || t.startsWith(`${r}/`);
}
function Da(e) {
    return "" === e ? 0 : e.split("/").length;
}
function qa(e, t) {
    return Da(t) - Da(e);
}
function Na(e, t) {
    for (const r of t)if (Ba({
        relPath: r,
        dir: e
    }) || Ba({
        relPath: e,
        dir: r
    })) return !0;
    return !1;
}
function Fa(e) {
    let t;
    for (const r of [
        e,
        `${e}-wal`,
        `${e}-shm`
    ])try {
        const e = p.lstatSync(r).mtimeMs;
        (void 0 === t || e > t) && (t = e);
    } catch  {}
    return t;
}
function Ua(e) {
    const t = e.lastIndexOf("/");
    return t <= 0 ? "" : e.slice(0, t);
}
function La(e) {
    return e.length > 0 ? e : void 0;
}
function $a(e) {
    if (void 0 !== e && Number.isSafeInteger(e) && !(e <= 0)) return e;
}
function ja(e, t) {
    if (void 0 !== e && void 0 !== t) return Math.min(e, t);
}
function Ga(e) {
    if (void 0 === e || "" === e) return;
    const t = Number(e);
    return !Number.isSafeInteger(t) || t <= 0 ? void 0 : t;
}
function za(e) {
    if (void 0 === e || "" === e) return 0;
    const t = Number(e);
    return !Number.isSafeInteger(t) || t < 0 ? 0 : t;
}
function Wa(e) {
    return void 0 === e || !Number.isSafeInteger(e) || e < 1 ? na : e;
}
function Ha(e) {
    return void 0 === e || !Number.isSafeInteger(e) || e < 0 ? sa : e;
}
function Ka(e) {
    return void 0 === e || !Number.isSafeInteger(e) || e < 0 ? oa : e;
}
const Va = new Set([
    "file_too_large",
    "case_collision",
    "windows_incompatible",
    "symlink_refused"
]);
function Ya(e) {
    return void 0 === e || !Number.isSafeInteger(e) || e < 0 ? ha : e;
}
function Qa(e) {
    return void 0 !== e && Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0;
}
function Xa(e, t) {
    (e.remoteVersionEvents ??= []).push(t);
}
function Za(e) {
    const t = [], r = new Map;
    for (const n of e.files){
        let s;
        try {
            s = v(n.relPath);
        } catch  {
            t.push(n);
            continue;
        }
        const o = s.toLowerCase(), i = r.get(o);
        if ((void 0 === i || i === s) && (r.set(o, s), !(n.size > e.maxFileSizeBytes))) {
            try {
                k({
                    relPath: s,
                    platform: e.platform
                });
            } catch (e) {
                if (e instanceof f && "windows_incompatible" === e.code) continue;
            }
            t.push(n);
        }
    }
    return t;
}
function ec(e) {
    return e.filesPushed > 0 || e.filesConflicted > 0 || e.filesDeletedRemote > 0 || (e.rmdirPushed ?? 0) > 0 || e.errors.length > 0;
}
function tc(e = "full") {
    return {
        filesPushed: 0,
        bytesPushed: 0,
        filesPulled: 0,
        bytesPulled: 0,
        filesSkipped: 0,
        refusals: 0,
        reservedPathsSkipped: 0,
        filesConflicted: 0,
        conflicts: [],
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
        rmdirPushed: 0,
        removedDirsApplied: 0,
        recoveryDisarms: 0,
        identityRecoveryWipeFailed: !1,
        legacyRowsRestored: 0,
        listingComplete: !1,
        errors: [],
        durationMs: 0,
        walkMs: 0,
        hashMs: 0,
        presignMs: 0,
        uploadMs: 0,
        listMs: 0,
        downloadMs: 0,
        scope: e
    };
}
function rc({ absPath: e, maxBytes: t, expectedDev: r, expectedIno: n }) {
    const s = function() {
        const e = p.constants;
        let t = e.O_RDONLY ?? 0;
        "number" == typeof e.O_NOFOLLOW && (t |= e.O_NOFOLLOW);
        "number" == typeof e.O_CLOEXEC && (t |= e.O_CLOEXEC);
        return t;
    }();
    let o;
    try {
        o = p.openSync(e, s);
    } catch (t) {
        if (uc(t) && ("ELOOP" === t.code || "EMLINK" === t.code || "ENOENT" === t.code)) throw new ga({
            code: "not_regular_file",
            message: `Refused to open ${e}: ${t.code}`
        });
        throw t;
    }
    try {
        const s = p.fstatSync(o);
        if (!s.isFile()) throw new ga({
            code: "not_regular_file",
            message: `Refused to read non-regular file: ${e}`
        });
        if (s.dev !== r || s.ino !== n) throw new ga({
            code: "toctou_swap_refused",
            message: `Refused to read ${e}: filesystem identity changed between safeWalk and open (expected dev=${r} ino=${n}, got dev=${s.dev} ino=${s.ino})`
        });
        if (s.nlink > 1) throw new ga({
            code: "not_regular_file",
            message: `Refused to read ${e}: hard-linked file (nlink=${s.nlink})`
        });
        if (s.size > t) throw new ga({
            code: "file_too_large",
            message: `${e} (${s.size} bytes) exceeds the ${t}-byte cap`
        });
        return {
            fd: o,
            size: s.size
        };
    } catch (e) {
        throw p.closeSync(o), e;
    }
}
async function nc({ absPath: e, maxBytes: t, expectedDev: r, expectedIno: n, multipartPartSizeBytes: s }) {
    if (void 0 !== s && (!Number.isSafeInteger(s) || s <= 0)) throw new RangeError("multipartPartSizeBytes must be a positive integer");
    const { fd: o } = rc({
        absPath: e,
        maxBytes: t,
        expectedDev: r,
        expectedIno: n
    }), i = p.createReadStream(e, {
        fd: o,
        autoClose: !0
    }), a = (0, Ys.createHash)("sha256"), c = (0, Ys.createHash)("md5");
    let l = void 0 !== s ? (0, Ys.createHash)("sha256") : void 0;
    const u = [];
    let d = 0, m = 0, h = 0;
    try {
        for await (const r of i){
            const n = Buffer.isBuffer(r) ? r : Buffer.from(r);
            if (h += n.byteLength, h > t) throw i.destroy(), new ga({
                code: "file_too_large",
                message: `File at ${e} exceeded ${t} bytes while hashing`
            });
            if (a.update(n), c.update(n), void 0 !== s && void 0 !== l) {
                let e = 0;
                for(; e < n.byteLength;){
                    const t = Math.min(s - m, n.byteLength - e);
                    l.update(n.subarray(e, e + t)), m += t, e += t, m === s && (u.push({
                        partNumber: u.length + 1,
                        offsetBytes: d,
                        sizeBytes: m,
                        checksumSha256: new Uint8Array(l.digest())
                    }), d += m, m = 0, l = (0, Ys.createHash)("sha256"));
                }
            }
        }
    } finally{
        i.destroyed || i.destroy();
    }
    return void 0 !== l && m > 0 && u.push({
        partNumber: u.length + 1,
        offsetBytes: d,
        sizeBytes: m,
        checksumSha256: new Uint8Array(l.digest())
    }), {
        sha: a.digest("hex"),
        etag: c.digest("hex"),
        size: h,
        ...void 0 !== s ? {
            multipartParts: u
        } : {}
    };
}
const sc = ar;
function oc(e) {
    try {
        const t = p.lstatSync(e);
        return t.isFile() && !t.isSymbolicLink();
    } catch  {
        return !1;
    }
}
function ic({ absPath: e, relPath: t }) {
    let r;
    try {
        r = p.lstatSync(e);
    } catch (e) {
        if (!uc(e) || "ENOENT" !== e.code) throw e;
        return;
    }
    if (r.isSymbolicLink()) throw new ga({
        code: "not_regular_file",
        relPath: t,
        message: `Refusing to overwrite symlinked target: ${e}`
    });
    if (!r.isFile()) throw new ga({
        code: "not_regular_file",
        relPath: t,
        message: `Refusing to overwrite non-regular target: ${e}`
    });
}
function ac({ base: e, parent: t, relPath: r }) {
    const n = h.resolve(e), s = h.resolve(t);
    if (!E({
        parent: n,
        candidate: s
    })) throw new ga({
        code: "not_regular_file",
        relPath: r,
        message: `Refusing to write outside the agent store base (${n}): ${s}`
    });
}
function cc({ base: e, target: t, relPath: r }) {
    const n = h.resolve(e), s = h.resolve(t);
    if (s === n) return void lc({
        targetPath: n,
        relPath: r
    });
    const o = h.relative(n, s);
    if (0 === o.length || o.startsWith("..") || h.isAbsolute(o)) throw new ga({
        code: "not_regular_file",
        relPath: r,
        message: `Refusing to create ${s} (outside of ${n})`
    });
    const i = o.split(h.sep).filter((e)=>e.length > 0);
    let a = n;
    lc({
        targetPath: a,
        relPath: r
    });
    for (const e of i){
        let t;
        a = h.join(a, e);
        try {
            t = p.lstatSync(a);
        } catch (e) {
            if (!uc(e) || "ENOENT" !== e.code) throw e;
            try {
                p.mkdirSync(a, {
                    mode: Wt.qH
                });
            } catch (e) {
                if (!uc(e) || "EEXIST" !== e.code) throw e;
            }
            t = p.lstatSync(a);
        }
        if (t.isSymbolicLink()) throw new ga({
            code: "not_regular_file",
            relPath: r,
            message: `Refusing to traverse symlinked ancestor: ${a}`
        });
        if (!t.isDirectory()) throw new ga({
            code: "not_regular_file",
            relPath: r,
            message: `Refusing to use non-directory ancestor: ${a}`
        });
    }
}
function lc({ targetPath: e, relPath: t }) {
    const r = p.lstatSync(e);
    if (r.isSymbolicLink()) throw new ga({
        code: "not_regular_file",
        relPath: t,
        message: `Refusing to use symlinked agent store base: ${e}`
    });
    if (!r.isDirectory()) throw new ga({
        code: "not_regular_file",
        relPath: t,
        message: `Refusing to use non-directory agent store base: ${e}`
    });
}
function uc(e) {
    return e instanceof Error && "string" == typeof e.code;
}
const dc = new Set([
    "content-md5",
    "content-type",
    "if-match",
    "if-none-match"
]);
class pc {
    constructor(e = {}){
        if (this.maxFileSizeBytes = e.maxFileSizeBytes ?? 1073741824, this.allowInsecureScheme = e.allowInsecureScheme ?? !1, this.partUploadMaxAttempts = e.partUploadMaxAttempts ?? 3, !Number.isInteger(this.partUploadMaxAttempts) || this.partUploadMaxAttempts < 1) throw new RangeError(`HttpAgentStoreBlobTransfer partUploadMaxAttempts must be a positive integer, got ${this.partUploadMaxAttempts}`);
        if (this.partUploadBaseDelayMs = e.partUploadBaseDelayMs ?? 250, !Number.isFinite(this.partUploadBaseDelayMs) || this.partUploadBaseDelayMs < 0) throw new RangeError(`HttpAgentStoreBlobTransfer partUploadBaseDelayMs must be non-negative, got ${this.partUploadBaseDelayMs}`);
        this.now = e.now ?? Date.now, this.sleep = e.sleep ?? (async (e)=>{
            await new Promise((t)=>{
                setTimeout(t, e);
            });
        }), this.agent = e.agent, this.onTransferTiming = e.onTransferTiming, this.blobIdleTimeoutMs = mc(e.blobIdleTimeoutMs), this.blobConnectTimeoutMs = hc(e.blobConnectTimeoutMs);
    }
    setBlobIdleTimeoutMs(e) {
        this.blobIdleTimeoutMs = mc(e);
    }
    setBlobConnectTimeoutMs(e) {
        this.blobConnectTimeoutMs = hc(e);
    }
    reportBlobTransferTiming(e) {
        const t = this.onTransferTiming;
        if (void 0 !== t) try {
            t(e);
        } catch  {}
    }
    async uploadFile(e) {
        return {
            etag: st((await this.uploadRange({
                url: e.url,
                relPath: e.relPath,
                absPath: e.absPath,
                offset: 0,
                size: e.size,
                fileSize: e.size,
                expectedDev: e.expectedDev,
                expectedIno: e.expectedIno,
                presignHeaders: e.presignHeaders ?? {
                    "x-amz-meta-content-sha256": e.sha
                },
                signal: e.signal,
                onBytes: e.onBytes
            })).etag)
        };
    }
    async uploadPart(e) {
        const t = Buffer.from(e.checksumSha256).toString("base64");
        if (32 !== e.checksumSha256.byteLength || xa(e.presignHeaders, "x-amz-checksum-sha256") !== t) throw new ga({
            code: "presign_response_mismatch",
            relPath: e.relPath,
            message: `Multipart part ${e.partNumber} of ${e.relPath} is missing its signed SHA-256 checksum`,
            retryable: !1
        });
        const r = function(e, t) {
            if (void 0 === e) return;
            let r = 0;
            return (n)=>{
                const s = t - r;
                if (s <= 0) return void e(0);
                const o = Math.min(n, s);
                r += o, e(o);
            };
        }(e.onBytes, e.size);
        for(let t = 1;; t++){
            if (e.expiresAtMs <= this.now()) throw new ga({
                code: "presigned_url_expired",
                relPath: e.relPath,
                message: `Multipart upload URL expired before part ${e.partNumber} of ${e.relPath} could be sent`,
                retryable: !1
            });
            try {
                return await this.uploadRange({
                    url: e.url,
                    relPath: e.relPath,
                    absPath: e.absPath,
                    offset: e.offset,
                    size: e.size,
                    fileSize: e.fileSize,
                    expectedDev: e.expectedDev,
                    expectedIno: e.expectedIno,
                    presignHeaders: e.presignHeaders,
                    signal: e.signal,
                    onBytes: r
                });
            } catch (e) {
                if (!(e instanceof ga && !0 === e.retryable) || t >= this.partUploadMaxAttempts) throw e;
                await this.sleep(this.partUploadBaseDelayMs * 2 ** Math.max(0, t - 1));
            }
        }
    }
    async uploadRange(e) {
        const t = 0 === e.offset && 0 === e.size && 0 === e.fileSize;
        if (!Number.isSafeInteger(e.offset) || e.offset < 0 || !Number.isSafeInteger(e.size) || e.size < 0 || 0 === e.size && !t || e.offset + e.size > e.fileSize) throw new ga({
            code: "presign_response_mismatch",
            relPath: e.relPath,
            message: `Invalid multipart byte range for ${e.relPath}`,
            retryable: !1
        });
        const r = new URL(e.url), n = this.clientForUrl({
            parsedUrl: r,
            relPath: e.relPath
        }), s = function(e, t, r) {
            const n = {};
            for (const [s, o] of Object.entries(e)){
                const e = s.toLowerCase();
                if ("content-length" !== e) {
                    if (!e.startsWith("x-amz-") && !dc.has(e)) throw new ga({
                        code: "presign_response_mismatch",
                        relPath: t,
                        message: `Refusing to forward unsanctioned presign header for ${t}: ${s}`
                    });
                    n[s] = o;
                } else {
                    if (void 0 === r || o.trim() !== String(r)) throw new ga({
                        code: "presign_response_mismatch",
                        relPath: t,
                        message: `Refusing to forward mismatched content-length for ${t}`
                    });
                    n["content-length"] = String(r);
                }
            }
            return n;
        }(e.presignHeaders, e.relPath, e.size), o = js(e.url), { fd: i, size: a } = rc({
            absPath: e.absPath,
            maxBytes: this.maxFileSizeBytes,
            expectedDev: e.expectedDev,
            expectedIno: e.expectedIno
        });
        if (a !== e.fileSize) throw p.closeSync(i), new ga({
            code: "sha_mismatch",
            relPath: e.relPath,
            message: `Local file ${e.relPath} changed between hash and upload (size ${e.fileSize} -> ${a})`,
            retryable: !1
        });
        let c;
        t ? (p.closeSync(i), c = Ri.Readable.from([])) : c = p.createReadStream(e.absPath, {
            fd: i,
            autoClose: !0,
            start: e.offset,
            end: e.offset + e.size - 1
        });
        try {
            return await new Promise((i, a)=>{
                let l = !1, u = !1, d = ()=>{}, p = ()=>{}, m = ()=>{};
                const h = void 0 !== this.onTransferTiming, f = h ? mi() : 0;
                let g, y, w, v, _ = !1, b = h && t ? f : void 0, S = !1, k = !1, x = !1;
                const E = (e, t, r)=>{
                    h && this.reportBlobTransferTiming({
                        phase: e,
                        durationMs: Math.max(0, mi() - t),
                        reusedSocket: _,
                        outcome: r
                    });
                }, I = (e)=>{
                    h && !S && (S = !0, v = e, E("connect", g ?? f, e));
                }, T = ()=>{
                    u || !h || k || void 0 === b || void 0 === y || (k = !0, w = Math.max(b, y), this.reportBlobTransferTiming({
                        phase: "first_byte_sent",
                        durationMs: Math.max(0, w - f),
                        reusedSocket: _,
                        outcome: "ok"
                    }));
                }, C = (e)=>{
                    h && !x && (x = !0, E("response", w ?? y ?? f, e));
                }, P = (t)=>{
                    if (l) return;
                    if (l = !0, u = !0, m(), p(), d(), h) {
                        const e = "success" === t.kind ? "ok" : function(e) {
                            if (Ki(e) || e instanceof ga && "round_aborted" === e.code) return "abort";
                            if (e instanceof ga && "blob_put" === e.timeoutClass) return "timeout";
                            return "error";
                        }(t.error);
                        S ? "ok" !== v || k || "ok" === e ? "ok" !== v || x || "ok" === e || C(e) : (k = !0, this.reportBlobTransferTiming({
                            phase: "first_byte_sent",
                            durationMs: Math.max(0, mi() - f),
                            reusedSocket: _,
                            outcome: e
                        })) : I(e), E("total", f, e);
                    }
                    if ("success" === t.kind) return void i({
                        etag: t.etag
                    });
                    const { error: r } = t;
                    a(r instanceof ga ? r : new ga({
                        code: "upload_failed",
                        relPath: e.relPath,
                        message: `Upload of ${e.relPath} failed (url=${o}): ${r instanceof Error ? r.message : String(r)}`,
                        cause: r,
                        retryable: !0
                    }));
                }, A = {
                    ...s,
                    "content-length": String(e.size)
                }, R = n.request(r, {
                    method: "PUT",
                    headers: A,
                    ...void 0 !== this.agent ? {
                        agent: this.agent
                    } : {}
                }, (t)=>{
                    u ? t.resume() : (T(), C("ok"), t.on("error", (e)=>P({
                            kind: "failure",
                            error: e
                        })), t.resume(), t.on("end", ()=>{
                        const r = t.statusCode ?? 0;
                        if (r >= 200 && r < 300) {
                            const r = nt(t.headers.etag);
                            return r.length > 0 ? void P({
                                kind: "success",
                                etag: r
                            }) : void P({
                                kind: "failure",
                                error: new ga({
                                    code: "upload_failed",
                                    relPath: e.relPath,
                                    message: `Upload of ${e.relPath} succeeded but returned no ETag (url=${o})`,
                                    retryable: !1
                                })
                            });
                        }
                        P({
                            kind: "failure",
                            error: new ga({
                                code: 412 === r || 409 === r ? "write_conflict" : "upload_failed",
                                relPath: e.relPath,
                                httpStatus: r,
                                message: `Upload of ${e.relPath} failed (${r} ${t.statusMessage ?? ""}, url=${o})`,
                                retryable: 408 === r || 429 === r || r >= 500
                            })
                        });
                    }));
                });
                R.on("error", (e)=>P({
                        kind: "failure",
                        error: e
                    })), R.once("socket", (t)=>{
                    if (l) return;
                    if (!h && this.blobConnectTimeoutMs <= 0) return;
                    h && (g = mi(), _ = R.reusedSocket);
                    const n = t.connecting || t instanceof Ai.TLSSocket && function(e) {
                        return !0 === e.secureConnecting;
                    }(t), s = ()=>{
                        m(), p(), u || (y = mi(), n ? I("ok") : h && (S = !0, v = "ok"), T());
                    };
                    if (!n) return void s();
                    if (this.blobConnectTimeoutMs <= 0) {
                        const e = t instanceof Ai.TLSSocket && "https:" === r.protocol ? "secureConnect" : "connect";
                        return t.once(e, s), void (m = ()=>{
                            t.off(e, s);
                        });
                    }
                    const i = this.blobConnectTimeoutMs, a = setTimeout(()=>{
                        const t = new ga({
                            code: "upload_failed",
                            relPath: e.relPath,
                            timeoutClass: "blob_put",
                            message: `blob_put connect timeout after ${i}ms (url=${o})`,
                            retryable: !0
                        });
                        u = !0, m(), I("timeout"), c.destroy(), R.destroy(t), P({
                            kind: "failure",
                            error: t
                        });
                    }, i);
                    a.unref?.();
                    const d = ()=>{
                        clearTimeout(a);
                    };
                    p = d;
                    const f = t instanceof Ai.TLSSocket && "https:" === r.protocol ? "secureConnect" : "connect";
                    t.once(f, s), m = ()=>{
                        t.off(f, s);
                    }, t.once("error", d);
                });
                let M = !1;
                const J = ()=>{
                    M || this.blobIdleTimeoutMs <= 0 || (M = !0, R.setTimeout(this.blobIdleTimeoutMs, ()=>{
                        const t = new ga({
                            code: "upload_failed",
                            relPath: e.relPath,
                            timeoutClass: "blob_put",
                            message: `blob_put idle timeout after ${this.blobIdleTimeoutMs}ms (url=${o})`,
                            retryable: !0
                        });
                        u = !0, m(), c.destroy(), R.destroy(t), P({
                            kind: "failure",
                            error: t
                        });
                    }));
                }, O = e.signal;
                if (void 0 !== O) {
                    const t = ()=>{
                        const t = Ki(O.reason) ? O.reason : gc(e.relPath, O.reason);
                        u = !0, m(), c.destroy(), R.destroy(t), P({
                            kind: "failure",
                            error: t
                        });
                    };
                    if (O.aborted) return void t();
                    O.addEventListener("abort", t, {
                        once: !0
                    }), d = ()=>{
                        O.removeEventListener("abort", t);
                    };
                }
                const B = e.onBytes, D = h ? new Ri.Transform({
                    transform: (e, t, r)=>{
                        void 0 === b && (b = mi(), T()), r(null, e);
                    }
                }) : void 0, q = (e)=>{
                    const t = (e)=>{
                        P({
                            kind: "failure",
                            error: e
                        });
                    };
                    void 0 === D || void 0 === e ? void 0 === D ? void 0 === e ? (0, Mi.pipeline)(c, R).catch(t) : (0, Mi.pipeline)(c, e, R).catch(t) : (0, Mi.pipeline)(c, D, R).catch(t) : (0, Mi.pipeline)(c, D, e, R).catch(t);
                };
                if (this.blobIdleTimeoutMs > 0 && t) J(), q(void 0);
                else if (this.blobIdleTimeoutMs > 0 || void 0 !== B && !t) {
                    q(new Ri.Transform({
                        transform (e, t, r) {
                            J(), ((e)=>{
                                B?.("string" == typeof e ? Buffer.byteLength(e) : e.byteLength);
                            })(e), r(null, e);
                        }
                    }));
                } else q(void 0);
            });
        } catch (e) {
            throw c.destroy(), e;
        }
    }
    clientForUrl(e) {
        const { parsedUrl: t, relPath: r } = e;
        let n;
        if ("https:" === t.protocol ? n = Pi : "http:" === t.protocol && this.allowInsecureScheme && (n = Ti), void 0 === n) throw new ga({
            code: "upload_failed",
            relPath: r,
            message: `Refusing to upload over unsupported scheme: ${t.protocol}`,
            retryable: !1
        });
        return n;
    }
}
function mc(e) {
    return void 0 === e || !Number.isFinite(e) || e < 0 ? ea : Math.floor(e);
}
function hc(e) {
    return void 0 === e || !Number.isFinite(e) || e < 0 ? 0 : Math.floor(e);
}
function fc(e, t) {
    if (Ki(t)) throw t;
    throw gc(e, t);
}
function gc(e, t) {
    const r = function(e) {
        let t = e;
        const r = new Set;
        for(; "object" == typeof t && null !== t && !r.has(t);){
            if (r.add(t), t instanceof Error) {
                const e = t.message;
                if ("session closing" === e || "host resumed from suspend" === e || e.includes("still draining after watchdog abandon")) return !0;
            }
            t = "cause" in t ? t.cause : void 0;
        }
        return !1;
    }(t);
    return new ga({
        code: "round_aborted",
        message: void 0 !== e ? `Agent store sync round aborted before syncing ${e}` : "Agent store sync round aborted",
        relPath: e,
        cause: t,
        ...r ? {} : {
            timeoutClass: "round"
        }
    });
}
function yc(e) {
    return e instanceof ga && void 0 !== e.timeoutClass ? {
        timeoutClass: e.timeoutClass
    } : {};
}
function wc(e, t) {
    return void 0 === e ? t : void 0 === t ? e : AbortSignal.any([
        e,
        t
    ]);
}
function vc(e, t) {
    return !!(!0 === t?.aborted && (r = t.reason, r instanceof Error && "TimeoutError" === r.name && r.message.includes("blob transfer idle timeout"))) && (e === t.reason || e instanceof Error && ("TimeoutError" === e.name || "AbortError" === e.name));
    var r;
}
const _c = 2e3;
async function bc(e) {
    try {
        return await async function(e) {
            const t = (0, Wt.f$)(e.parts), r = (0, Wt.mD)(e.parts), n = function(e) {
                let t;
                try {
                    t = p.lstatSync(e);
                } catch (e) {
                    return Ac(e) && "ENOENT" === e.code ? {
                        kind: "walk",
                        walk: {
                            files: [],
                            refusals: []
                        }
                    } : {
                        kind: "unreadable"
                    };
                }
                if (t.isSymbolicLink() || !t.isDirectory()) return {
                    kind: "residue"
                };
                try {
                    return {
                        kind: "walk",
                        walk: I(e)
                    };
                } catch (e) {
                    if (e instanceof f) return {
                        kind: "residue"
                    };
                    throw e;
                }
            }(t);
            if ("walk" !== n.kind) return {
                kind: "skipped",
                reason: n.kind
            };
            const s = n.walk;
            if (s.refusals.length > 0) return {
                kind: "skipped",
                reason: "residue"
            };
            const o = function(e) {
                const t = [];
                for (const r of e.files){
                    let e;
                    try {
                        e = p.lstatSync(r.absPath, {
                            bigint: !0
                        });
                    } catch  {
                        return;
                    }
                    if (!e.isFile()) return;
                    t.push({
                        relPath: r.relPath,
                        size: Number(e.size),
                        mtimeNs: e.mtimeNs,
                        ctimeNs: e.ctimeNs,
                        ino: e.ino
                    });
                }
                return t.sort((e, t)=>e.relPath < t.relPath ? -1 : e.relPath > t.relPath ? 1 : 0), t;
            }(s);
            if (void 0 === o) return {
                kind: "skipped",
                reason: "unreadable"
            };
            const i = zn(r, {
                sqlite: e.sqlite
            });
            if ("absent" === i.kind) return await async function(e, t, r, n) {
                if (Ic(e).length > 0) return {
                    kind: "dirty",
                    reason: "files_without_index",
                    counts: Cc(e, [], 0)
                };
                const s = await Sc(r, n);
                if (void 0 !== s) return Tc(s, e, [], 0);
                const o = await Ec(t, e, [], n);
                if (void 0 === o) return {
                    kind: "skipped",
                    reason: "unreadable"
                };
                return {
                    kind: "clean",
                    empty: 0 === e.files.length,
                    snapshot: o,
                    hashedBytes: 0
                };
            }(s, o, t, e);
            if ("unsupported_schema" === i.kind) return function(e, t) {
                if (xc(e)) return {
                    kind: "skipped",
                    reason: "open_handle"
                };
                return t;
            }(r, {
                kind: "skipped",
                reason: "schema"
            });
            const a = i.index;
            let c, l = "";
            try {
                l = a.journalMode(), c = await async function(e) {
                    const { options: t, walk: r, index: n } = e, s = n.listFiles(), o = n.listPendingDeletes(), i = n.listPendingRmdirs();
                    if (o.length > 0) return Tc("pending_delete", r, s, 0);
                    if (i.length > 0) return Tc("pending_rmdir", r, s, 0);
                    const a = await Sc(e.filesDir, t);
                    if (void 0 !== a) return Tc(a, r, s, 0);
                    const c = function(e) {
                        let t = 0;
                        for (const r of e)t += r.size;
                        return t;
                    }(Ic(r));
                    if (c > t.hashBudgetBytes) return {
                        kind: "skipped",
                        reason: "budget",
                        bytesNeeded: c
                    };
                    const l = await async function(e) {
                        const t = new Map(e.rows.map((e)=>[
                                e.relPath,
                                e
                            ]));
                        let r = 0, n = !1;
                        for (const s of Ic(e.walk)){
                            n && await Pc(), n = !0;
                            const o = t.get(s.relPath);
                            if (void 0 === o) return {
                                kind: "dirty",
                                reason: "unknown_file",
                                hashedBytes: r
                            };
                            if ("tombstoned" === o.state) return {
                                kind: "dirty",
                                reason: "tombstoned_present",
                                hashedBytes: r
                            };
                            if (kc(s, o, e)) continue;
                            let i;
                            try {
                                i = (await nc({
                                    absPath: s.absPath,
                                    maxBytes: e.options.maxFileBytes ?? Qi,
                                    expectedDev: s.dev,
                                    expectedIno: s.ino
                                })).sha;
                            } catch  {
                                return {
                                    kind: "dirty",
                                    reason: "unhashable",
                                    hashedBytes: r
                                };
                            }
                            if (r += s.size, i !== o.lastSyncedSha) return {
                                kind: "dirty",
                                reason: "content_mismatch",
                                hashedBytes: r
                            };
                        }
                        return {
                            kind: "ok",
                            hashedBytes: r
                        };
                    }({
                        options: t,
                        walk: r,
                        rows: s,
                        version: n.version
                    });
                    if ("dirty" === l.kind) return Tc(l.reason, r, s, l.hashedBytes);
                    const u = function(e, t, r) {
                        if (e.version < 3 || "1" !== e.getMeta(_n)) return !1;
                        const n = new Set(t.files.map((e)=>e.relPath));
                        for (const e of r)if ("live" === e.state && !(0, Wt.TM)(e.relPath) && void 0 !== e.lastSeenEtag && 0 !== e.lastSeenEtag.length && !n.has(e.relPath)) return !0;
                        return !1;
                    }(n, r, s);
                    if (u) return Tc("missing_armed_file", r, s, l.hashedBytes);
                    const d = await Ec(e.snapshot, r, s, t);
                    if (void 0 === d) return {
                        kind: "skipped",
                        reason: "unreadable"
                    };
                    return {
                        kind: "clean",
                        empty: !1,
                        snapshot: d,
                        hashedBytes: l.hashedBytes
                    };
                }({
                    options: e,
                    filesDir: t,
                    walk: s,
                    snapshot: o,
                    index: a
                });
            } finally{
                a.close();
            }
            if ("wal" !== l || xc(r)) return {
                kind: "skipped",
                reason: "open_handle"
            };
            return c;
        }(e);
    } catch (e) {
        if (function(e) {
            if (Ac(e)) return !0;
            if (e instanceof Error && ("SqliteError" === e.name || "AuditReadError" === e.name)) return !0;
            return !1;
        }(e)) return {
            kind: "skipped",
            reason: "unreadable"
        };
        throw e;
    }
}
async function Sc(e, t) {
    if (function(e) {
        const t = (0, $t.Zz)(e);
        let r;
        try {
            r = p.lstatSync(t);
        } catch (e) {
            if (Ac(e) && "ENOENT" === e.code) return !1;
            throw e;
        }
        return !r.isFile() || r.size > 0;
    }(e)) return "pending_conflict";
    return void 0 === await gr({
        lockPath: Ar(e),
        now: t.now
    }) ? void 0 : "exclusive_claim";
}
function kc(e, t, r) {
    if (r.version < vn) return !1;
    let n;
    try {
        n = p.lstatSync(e.absPath, {
            bigint: !0
        });
    } catch  {
        return !1;
    }
    return "skip" === fn({
        mode: r.options.statFastPathMode,
        platform: r.options.platform ?? process.platform,
        racyMarginMs: r.options.racyMarginMs ?? _c,
        live: {
            size: Number(n.size),
            mtimeNs: n.mtimeNs,
            ctimeNs: n.ctimeNs,
            inoNs: n.ino,
            devNs: n.dev,
            nlink: Number(n.nlink)
        },
        recorded: t.recordedStat,
        synced: !0,
        indexSize: t.size
    }).action;
}
function xc(e) {
    try {
        return p.lstatSync(`${e}-wal`).isFile();
    } catch (e) {
        if (Ac(e) && "ENOENT" === e.code) return !1;
        throw e;
    }
}
async function Ec(e, t, r, n) {
    const s = new Map(t.files.map((e)=>[
            e.relPath,
            e
        ])), o = new Map(r.map((e)=>[
            e.relPath,
            e.lastSyncedSha
        ])), i = [];
    for (const t of e){
        const e = o.get(t.relPath);
        let r = (0, Wt.TM)(t.relPath) || void 0 === e || 0 === e.length ? void 0 : e;
        if (void 0 === r) {
            const e = s.get(t.relPath);
            if (void 0 === e) return;
            try {
                r = (await nc({
                    absPath: e.absPath,
                    maxBytes: n.maxFileBytes ?? Qi,
                    expectedDev: e.dev,
                    expectedIno: e.ino
                })).sha;
            } catch  {
                return;
            }
        }
        i.push({
            ...t,
            sha256: r
        });
    }
    return i;
}
function Ic(e) {
    return e.files.filter((e)=>!(0, Wt.TM)(e.relPath));
}
function Tc(e, t, r, n) {
    return {
        kind: "dirty",
        reason: e,
        counts: Cc(t, r, n)
    };
}
function Cc(e, t, r) {
    return {
        files: Ic(e).length,
        rows: t.length,
        hashedBytes: r
    };
}
function Pc() {
    return new Promise((e)=>{
        (0, Ei.setImmediate)(e);
    });
}
function Ac(e) {
    return e instanceof Error && "string" == typeof e.code;
}
const Rc = 6e5, Mc = 100, Jc = 2e3, Oc = 1e3, Bc = ".evicting.lock", Dc = 384, qc = 1;
function Nc(e, t) {
    return h.join((0, Wt.ve)(e, t), "pins");
}
function Fc(e, t) {
    return h.join((0, Wt.ve)(e, t), "background-pins");
}
function Uc(e, t) {
    return h.join((0, Wt.ve)(e, t), "evicting.json");
}
async function Lc(e) {
    const t = Xc(e);
    let r;
    try {
        let e;
        for(r = await tl(t);;){
            const n = await ol(t);
            if (void 0 !== n && (e = (e ?? 0) + n), r = await il(t, r), void 0 === Gc(t)) break;
            wl(r), r = await tl(t);
        }
        return void 0 !== e && al(t, {
            kind: "waited",
            waitMs: e
        }), new Yc(!0, t.purpose, r);
    } catch (e) {
        return void 0 !== r && wl(r), al(t, {
            kind: "acquire_failed"
        }), Qc(t.purpose, e);
    }
}
function $c(e) {
    const t = Xc(e);
    let r;
    try {
        return r = nl(t), void 0 !== Gc(t) ? (wl(r), {
            kind: "evicting"
        }) : (r = function(e, t) {
            if (gl(t)) return t;
            return nl(e);
        }(t, r), void 0 !== Gc(t) ? (wl(r), {
            kind: "evicting"
        }) : {
            kind: "ready",
            handle: new Yc(!0, t.purpose, r)
        });
    } catch (e) {
        return void 0 !== r && wl(r), al(t, {
            kind: "acquire_failed"
        }), {
            kind: "ready",
            handle: Qc(t.purpose, e)
        };
    }
}
function jc(e) {
    const t = e.processExists ?? Ir, r = e.identity ?? yr(), n = Nc(e.store, e.mountKey), s = Fc(e.store, e.mountKey);
    return {
        pinsDirMtimeMs: hl(n),
        pins: [
            ...cl(n, "foreground", t, r),
            ...cl(s, "background", t, r)
        ]
    };
}
function Gc(e) {
    const t = e.processExists ?? Ir, r = e.now ?? Date.now, n = e.markTtlMs ?? Rc, s = (0, Wt.ve)(e.store, e.mountKey), o = function(e) {
        const t = vl(e.controlDir);
        if ("missing" === t) return e.fn();
        if ("directory" !== t) return "busy";
        const r = kl(e);
        if ("busy" === r) return "busy";
        try {
            return e.fn();
        } finally{
            r();
        }
    }({
        controlDir: s,
        processExists: t,
        waitMs: 0,
        fn: ()=>{
            const s = ul(Uc(e.store, e.mountKey));
            if (void 0 !== s) return pl(s, t, r(), n) ? s : void 0;
        }
    });
    if ("busy" === o) {
        const e = function(e) {
            return bl(_l(e)) ?? bl(e);
        }(s);
        if (void 0 === e || r() - e >= n) return;
        return {
            version: 1,
            pid: process.pid,
            windowId: "",
            startedAtMs: e
        };
    }
    return o;
}
async function zc(e) {
    const t = Uc(e.store, e.mountKey);
    (0, Wt.Ew)(h.dirname(t));
    const r = {
        version: 1,
        pid: e.pid ?? process.pid,
        windowId: e.windowId,
        startedAtMs: (e.now ?? Date.now)()
    }, n = `${JSON.stringify(r)}\n`, s = await Sl({
        controlDir: h.dirname(t),
        processExists: e.processExists ?? Ir,
        waitMs: Jc
    });
    try {
        return await async function(e) {
            const t = e.target, r = e.body, n = e.processExists, s = e.now(), o = e.markTtlMs;
            try {
                return await rr(t, r, Dc), {
                    kind: "written"
                };
            } catch (e) {
                if ("EEXIST" !== Il(e)) throw e;
            }
            const i = ul(t);
            if (void 0 !== i && pl(i, n, s, o)) return {
                kind: "live",
                record: i
            };
            wl(t);
            try {
                return await rr(t, r, Dc), {
                    kind: "written"
                };
            } catch (e) {
                if ("EEXIST" !== Il(e)) throw e;
            }
            const a = ul(t);
            if (void 0 !== a && pl(a, n, s, o)) return {
                kind: "live",
                record: a
            };
            throw new Error("evicting mark changed while it was being replaced");
        }({
            target: t,
            body: n,
            processExists: e.processExists ?? Ir,
            now: e.now ?? Date.now,
            markTtlMs: e.markTtlMs ?? Rc
        });
    } finally{
        s();
    }
}
async function Wc(e) {
    const t = Uc(e.store, e.mountKey), r = h.dirname(t);
    if ("directory" !== vl(r)) return;
    const n = await Sl({
        controlDir: r,
        processExists: e.processExists ?? Ir,
        waitMs: Jc
    });
    try {
        if (void 0 === e.expected) return void wl(t);
        !function(e, t) {
            const r = Kc(e);
            if (void 0 === r || !Hc(r.record, t)) return;
            if (!function(e, t) {
                try {
                    const r = p.lstatSync(e);
                    return r.isFile() && r.dev === t.dev && r.ino === t.ino;
                } catch (e) {
                    if ("ENOENT" === Il(e)) return !1;
                    throw e;
                }
            }(e, r)) return;
            const n = Kc(e);
            if (void 0 === n || !Hc(n.record, t) || n.dev !== r.dev || n.ino !== r.ino) return;
            p.unlinkSync(e);
        }(t, e.expected);
    } finally{
        n();
    }
}
function Hc(e, t) {
    return void 0 !== e && e.pid === t.pid && e.windowId === t.windowId && e.startedAtMs === t.startedAtMs;
}
function Kc(e) {
    let t;
    try {
        const r = p.constants.O_RDONLY | (p.constants.O_NOFOLLOW ?? 0);
        t = p.openSync(e, r);
        const n = p.fstatSync(t);
        if (!n.isFile()) return;
        const s = dl(p.readFileSync(t, "utf8"));
        if (void 0 === s) return;
        return {
            dev: n.dev,
            ino: n.ino,
            record: s
        };
    } catch (e) {
        if ("ENOENT" === Il(e) || "ELOOP" === Il(e)) return;
        throw e;
    } finally{
        void 0 !== t && p.closeSync(t);
    }
}
function Vc(e) {
    const t = e.now ?? Date.now(), r = (0, Wt.WX)(e.store, e.mountKey), n = [
        hl(Nc(e.store, e.mountKey)),
        fl((0, Wt.mD)(r)),
        hl((0, Wt.Du)(r))
    ];
    for (const e of n)if (void 0 !== e) return t - e;
}
class Yc {
    constructor(e, t, r, n){
        this.acquired = e, this.purpose = t, this.path = r, this.error = n, this.released = !1;
    }
    release() {
        return this.released || void 0 === this.path ? (this.released = !0, Promise.resolve()) : (this.released = !0, wl(this.path), Promise.resolve());
    }
}
function Qc(e, t) {
    return new Yc(!1, e, void 0, t);
}
function Xc(e) {
    return {
        store: e.store,
        mountKey: e.mountKey,
        windowId: e.windowId,
        purpose: e.purpose,
        processExists: e.processExists ?? Ir,
        now: e.now ?? Date.now,
        markTtlMs: e.markTtlMs ?? Rc,
        metrics: e.metrics,
        sleep: e.sleep ?? Cl,
        pid: e.pid ?? process.pid,
        hostname: e.hostname ?? Xt.hostname(),
        identity: e.identity ?? yr()
    };
}
function Zc(e) {
    return "background" === e.purpose ? Fc(e.store, e.mountKey) : Nc(e.store, e.mountKey);
}
function el(e) {
    const t = {
        version: qc,
        pid: e.pid,
        windowId: e.windowId,
        purpose: e.purpose,
        createdAtMs: e.now(),
        hostname: e.hostname,
        ...void 0 !== e.identity.uid ? {
            uid: e.identity.uid
        } : {},
        ...void 0 !== e.identity.sid ? {
            sid: e.identity.sid
        } : {}
    };
    return `${JSON.stringify(t)}\n`;
}
async function tl(e) {
    try {
        return await rl(e);
    } catch (t) {
        if ("ENOENT" !== Il(t)) throw t;
        return await rl(e);
    }
}
async function rl(e) {
    const t = Zc(e);
    (0, Wt.Ew)(t);
    const r = h.join(t, `${e.pid}-${(0, Ys.randomUUID)()}.json`);
    try {
        await rr(r, el(e), Dc);
    } catch (e) {
        throw wl(r), e;
    }
    return r;
}
function nl(e) {
    try {
        return sl(e);
    } catch (t) {
        if ("ENOENT" !== Il(t)) throw t;
        return sl(e);
    }
}
function sl(e) {
    const t = Zc(e);
    (0, Wt.Ew)(t);
    const r = h.join(t, `${e.pid}-${(0, Ys.randomUUID)()}.json`);
    return function(e, t) {
        const r = ar();
        let n;
        try {
            n = p.openSync(e, r, Dc), (0, Wt.rs)(e), p.writeFileSync(n, t, {
                encoding: "utf8"
            });
        } catch (t) {
            if (void 0 !== n) {
                try {
                    p.closeSync(n);
                } catch  {}
                n = void 0;
            }
            throw wl(e), t;
        } finally{
            void 0 !== n && p.closeSync(n);
        }
    }(r, el(e)), r;
}
async function ol(e) {
    if (void 0 === Gc(e)) return;
    const t = e.now();
    for(;;)if (await e.sleep(Mc), void 0 === Gc(e)) return Math.max(0, e.now() - t);
}
async function il(e, t) {
    return gl(t) ? t : await tl(e);
}
function al(e, t) {
    try {
        e.metrics?.recordStorePin?.(t);
    } catch  {}
}
function cl(e, t, r, n) {
    let s;
    try {
        s = p.readdirSync(e);
    } catch (e) {
        if ("ENOENT" === Il(e)) return [];
        throw e;
    }
    const o = [];
    for (const i of s){
        const s = h.join(e, i);
        let a;
        try {
            a = p.lstatSync(s);
        } catch  {
            continue;
        }
        if (!a.isFile()) continue;
        const c = ll(s), l = void 0 === c || c.purpose === t && r(c.pid) && ml(c, n);
        o.push({
            path: s,
            purpose: t,
            record: c,
            live: l
        });
    }
    return o;
}
function ll(e) {
    const t = yl(e);
    if (void 0 !== t) return function(e) {
        let t;
        try {
            t = JSON.parse(e);
        } catch  {
            return;
        }
        if (!Tl(t) || t.version !== qc) return;
        const { pid: r, windowId: n, purpose: s, createdAtMs: o, hostname: i, uid: a, sid: c } = t;
        if ("number" != typeof r || !Number.isFinite(r) || "string" != typeof n || "foreground" !== s && "background" !== s || "number" != typeof o || !Number.isFinite(o) || "string" != typeof i || void 0 !== a && "number" != typeof a || void 0 !== c && "string" != typeof c) return;
        return {
            version: 1,
            pid: r,
            windowId: n,
            purpose: s,
            createdAtMs: o,
            hostname: i,
            ..."number" == typeof a ? {
                uid: a
            } : {},
            ..."string" == typeof c ? {
                sid: c
            } : {}
        };
    }(t);
}
function ul(e) {
    const t = yl(e);
    if (void 0 !== t) return dl(t);
}
function dl(e) {
    let t;
    try {
        t = JSON.parse(e);
    } catch  {
        return;
    }
    if (!Tl(t) || 1 !== t.version) return;
    const { pid: r, windowId: n, startedAtMs: s } = t;
    return "number" == typeof r && Number.isFinite(r) && "string" == typeof n && "number" == typeof s && Number.isFinite(s) ? {
        version: 1,
        pid: r,
        windowId: n,
        startedAtMs: s
    } : void 0;
}
function pl(e, t, r, n) {
    return !!t(e.pid) && r - e.startedAtMs < n;
}
function ml(e, t) {
    return e.uid === t.uid && e.sid === t.sid;
}
function hl(e) {
    try {
        const t = p.lstatSync(e);
        return t.isDirectory() ? t.mtimeMs : void 0;
    } catch (e) {
        if ("ENOENT" === Il(e)) return;
        throw e;
    }
}
function fl(e) {
    try {
        const t = p.lstatSync(e);
        return t.isFile() ? t.mtimeMs : void 0;
    } catch (e) {
        if ("ENOENT" === Il(e)) return;
        throw e;
    }
}
function gl(e) {
    try {
        return p.lstatSync(e).isFile();
    } catch  {
        return !1;
    }
}
function yl(e) {
    let t;
    try {
        if (!p.lstatSync(e).isFile()) return;
        const r = p.constants.O_RDONLY | (p.constants.O_NOFOLLOW ?? 0);
        return t = p.openSync(e, r), p.readFileSync(t, "utf8");
    } catch  {
        return;
    } finally{
        void 0 !== t && p.closeSync(t);
    }
}
function wl(e) {
    try {
        p.unlinkSync(e);
    } catch  {}
}
function vl(e) {
    try {
        return p.lstatSync(e).isDirectory() ? "directory" : "other";
    } catch (e) {
        if ("ENOENT" === Il(e)) return "missing";
        throw e;
    }
}
function _l(e) {
    return h.join(e, Bc);
}
function bl(e) {
    try {
        return p.lstatSync(e).mtimeMs;
    } catch (e) {
        if ("ENOENT" === Il(e)) return;
        throw e;
    }
}
async function Sl(e) {
    const t = Date.now() + e.waitMs;
    for(;;){
        const r = kl(e);
        if ("busy" !== r) return r;
        if (Date.now() >= t) throw new Error("Timed out waiting to update the eviction mark");
        await Cl(5);
    }
}
function kl(e) {
    const t = _l(e.controlDir);
    let r, n = !1;
    try {
        p.mkdirSync(t, {
            mode: 448
        }), n = !0;
    } catch (r) {
        if ("EEXIST" !== Il(r)) throw r;
        if (!function(e, t) {
            let r;
            try {
                r = p.lstatSync(e);
            } catch (e) {
                if ("ENOENT" === Il(e)) return !1;
                throw e;
            }
            if (!r.isDirectory() || !xl(e, r, t)) return !1;
            const n = `${e}.${(0, Ys.randomUUID)()}.dead`;
            try {
                p.renameSync(e, n);
            } catch (e) {
                if ("ENOENT" === Il(e)) return !1;
                throw e;
            }
            let s;
            try {
                s = p.lstatSync(n);
            } catch  {
                return !1;
            }
            if (!s.isDirectory() || !xl(n, s, t)) return function(e, t) {
                try {
                    p.renameSync(e, t);
                } catch (e) {
                    if ("ENOENT" === Il(e)) return;
                    try {
                        if (p.lstatSync(t).isDirectory()) return;
                    } catch  {}
                    throw e;
                }
            }(n, e), !1;
            p.rmSync(n, {
                recursive: !0,
                force: !0
            });
            try {
                return p.mkdirSync(e, {
                    mode: 448
                }), !0;
            } catch  {
                return !1;
            }
        }(t, e.processExists)) return "busy";
        n = !0;
    }
    try {
        r = p.lstatSync(t);
    } catch  {
        return "busy";
    }
    if (!r.isDirectory()) return "busy";
    const s = h.join(t, "owner");
    try {
        p.writeFileSync(s, `${process.pid}\n`, {
            mode: 384,
            flag: "wx"
        });
    } catch (e) {
        if (n) {
            wl(s);
            try {
                p.rmdirSync(t);
            } catch  {}
        }
        if ("EEXIST" === Il(e)) return "busy";
        throw e;
    }
    let o = !1;
    return ()=>{
        o || (o = !0, function(e) {
            const t = _l(e), r = h.join(t, "owner");
            if (El(r) !== process.pid) return;
            wl(r);
            try {
                p.lstatSync(t).isDirectory() && p.rmdirSync(t);
            } catch  {}
        }(e.controlDir));
    };
}
function xl(e, t, r) {
    const n = El(h.join(e, "owner"));
    return void 0 === n ? Date.now() - t.mtimeMs >= Oc : !r(n);
}
function El(e) {
    let t;
    try {
        t = p.readFileSync(e, "utf8");
    } catch  {
        return;
    }
    const r = Number(t.trim());
    if (Number.isInteger(r) && !(r <= 0)) return r;
}
function Il(e) {
    if ("object" == typeof e && null !== e && "code" in e) {
        const t = e.code;
        return "string" == typeof t ? t : void 0;
    }
}
function Tl(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
function Cl(e) {
    return new Promise((t)=>{
        setTimeout(t, e);
    });
}
const Pl = ".sweep-trash-", Al = ".store-eviction-last-run", Rl = ".evicted.json", Ml = ".unverified", Jl = ".unverified", Ol = new Map, Bl = new Map;
function Dl(e) {
    const t = e.now ?? Date.now(), r = h.resolve(e.storesRoot), n = function(e) {
        const t = Bl.get(e), r = Fl(e);
        if (void 0 === t) return r;
        if (void 0 === r) return t;
        return Math.max(t, r);
    }(r);
    if (void 0 !== n && t - n < e.minIntervalMs) return !1;
    Bl.set(r, t);
    try {
        !function(e, t) {
            p.mkdirSync(e, {
                recursive: !0
            });
            const r = Nl(e), n = h.join(e, `${Al}.${process.pid}.${(0, Ys.randomUUID)()}.tmp`);
            p.writeFileSync(n, `${t}\n`, {
                encoding: "utf8",
                mode: 384
            });
            try {
                p.renameSync(n, r);
            } catch (e) {
                throw p.rmSync(n, {
                    force: !0
                }), e;
            }
        }(r, t);
    } catch  {}
    return !0;
}
function ql(e) {
    const t = h.resolve(e), r = Bl.get(t);
    if (Bl.delete(t), void 0 === r) return;
    const n = Nl(t);
    let s;
    try {
        s = p.lstatSync(n);
    } catch  {
        return;
    }
    if (s.isFile() && !s.isSymbolicLink() && Fl(t) === r) try {
        const e = p.lstatSync(n);
        if (e.ino !== s.ino || e.mtimeMs !== s.mtimeMs || e.size !== s.size) return;
        p.unlinkSync(n);
    } catch  {
        return;
    }
}
function Nl(e) {
    return h.join(e, Al);
}
function Fl(e) {
    try {
        const t = Nl(e), r = p.lstatSync(t);
        if (!r.isFile() || r.isSymbolicLink()) return;
        const n = p.readFileSync(t, "utf8").trim();
        if (!/^[0-9]+$/.test(n)) return;
        const s = Number(n);
        return Number.isSafeInteger(s) ? s : void 0;
    } catch  {
        return;
    }
}
async function Ul(e) {
    if (!Number.isFinite(e.maxIdleMs) || e.maxIdleMs <= 0) return {
        outcomes: []
    };
    const t = h.join(e.store.base, e.store.tmpDirName), r = e.now ?? Date.now, n = [];
    "dry_run" !== e.mode && (await async function(e, t, r) {
        const n = h.join(e, Wt.Jl);
        let s;
        try {
            s = await p.promises.readdir(n, {
                withFileTypes: !0
            });
        } catch (e) {
            if (Zl(e) && "ENOENT" === e.code) return;
            throw e;
        }
        for (const e of s){
            if (!e.isDirectory() || e.isSymbolicLink()) continue;
            if (e.name.endsWith(Ml)) continue;
            const s = h.join(n, e.name);
            if (zl(s)) continue;
            const o = Wl(s), i = void 0 === o ? Math.max(t.quarantineMs, t.markTtlMs) : t.quarantineMs, a = o ?? Hl(e.name);
            void 0 === a || r() - a < i || await Kl(s, {
                recursive: !0,
                force: !0,
                maxRetries: 3,
                retryDelay: 100
            });
        }
    }(t, {
        quarantineMs: e.quarantineMs,
        markTtlMs: e.markTtlMs
    }, r), await async function(e) {
        let t;
        try {
            t = await p.promises.readdir(e, {
                withFileTypes: !0
            });
        } catch (e) {
            if (Zl(e) && "ENOENT" === e.code) return;
            throw e;
        }
        for (const r of t){
            if (!r.isDirectory() || r.isSymbolicLink() || !r.name.startsWith(Pl)) continue;
            const t = h.join(e, r.name);
            try {
                (0, Wt.rs)(t), await Kl(t, {
                    recursive: !0,
                    force: !0,
                    maxRetries: 3,
                    retryDelay: 100
                });
            } catch  {}
        }
    }(t));
    const s = function(e, t) {
        if (void 0 === t) return [
            ...e
        ];
        const r = e.findIndex((e)=>e > t);
        if (r <= 0) return [
            ...e
        ];
        return [
            ...e.slice(r),
            ...e.slice(0, r)
        ];
    }(function(e, t, r) {
        let n;
        try {
            n = p.readdirSync(t, {
                withFileTypes: !0
            });
        } catch (e) {
            if (Zl(e) && "ENOENT" === e.code) return [];
            throw e;
        }
        const s = [];
        for (const o of n){
            if (!o.isDirectory() || o.isSymbolicLink()) continue;
            if (o.name.startsWith(Pl)) continue;
            try {
                (0, Wt.qh)(o.name);
            } catch  {
                continue;
            }
            if (e.isMountLive(o.name)) continue;
            const n = Ql(h.join(t, o.name, Wt.kR));
            if (void 0 === n || !n.isDirectory() || n.isSymbolicLink()) continue;
            const i = Vc({
                store: e.store,
                mountKey: o.name,
                now: r()
            });
            void 0 === i || i < e.maxIdleMs || s.push(o.name);
        }
        return s.sort(), s;
    }(e, t, r), Ol.get(t));
    let o = 0, i = 0;
    for (const r of s){
        if (i >= e.maxRootsPerRun) break;
        i += 1, Ol.set(t, r);
        const s = await Ll({
            options: e,
            storesRoot: t,
            mountKey: r,
            hashBudgetBytes: e.maxHashBytesPerRun - o
        });
        if (void 0 !== s) {
            o += s.hashedBytes, n.push(s);
            try {
                e.onOutcome?.(s), e.log?.(`${r} ${s.outcome}${void 0 === s.reason ? "" : ` ${s.reason}`} hashed=${s.hashedBytes}`);
            } catch  {}
        }
    }
    return {
        outcomes: n
    };
}
async function Ll(e) {
    const { options: t, storesRoot: r, mountKey: n, hashBudgetBytes: s } = e, o = (t.now ?? Date.now)(), i = t.now ?? Date.now, a = t.processExists ?? Ir, c = (0, Wt.WX)(t.store, n), l = (0, Wt.dv)(c);
    let u, d, m = !1, g = !1;
    const y = (e, t = {})=>({
            mountKey: n,
            outcome: e,
            ...void 0 === t.reason ? {} : {
                reason: t.reason
            },
            hashedBytes: t.hashedBytes ?? 0,
            durationMs: Math.max(0, i() - o)
        }), w = h.join(l, Wt.kR), v = (0, Wt.mD)(c), _ = Vl(w, "directory");
    const b = Vl(v, "file");
    let S = !1;
    try {
        (0, Wt.rs)(l);
        const e = await fr({
            lockPath: (0, Wt.N1)(c),
            windowId: t.windowId,
            identity: yr(),
            now: i,
            processExists: a,
            staleLockMs: Number.POSITIVE_INFINITY
        });
        if ("acquired" !== e.kind) return y("skipped_locked");
        u = e.lock, S = !0;
        const o = i();
        if ("live" === (await zc({
            store: t.store,
            mountKey: n,
            windowId: t.windowId,
            processExists: a,
            now: ()=>o,
            markTtlMs: t.markTtlMs
        })).kind) return y("skipped_marked");
        if (d = {
            version: 1,
            pid: process.pid,
            windowId: t.windowId,
            startedAtMs: o
        }, jl(t, n, a)) return y("skipped_pinned");
        if (p.existsSync(Nc(t.store, n)) || p.existsSync((0, Wt.mD)(c))) {
            const e = Vc({
                store: t.store,
                mountKey: n,
                now: i()
            });
            if (void 0 === e || e < t.maxIdleMs) return y("skipped_pinned", {
                reason: "recently_used"
            });
        }
        if (t.isMountLive(n)) return y("skipped_live");
        const m = await bc({
            parts: c,
            sqlite: t.sqlite,
            statFastPathMode: t.statFastPathMode,
            hashBudgetBytes: s,
            now: i
        });
        if ("clean" !== m.kind) {
            const e = function(e) {
                if ("dirty" === e.kind) return {
                    outcome: "skipped_dirty",
                    reason: e.reason,
                    hashedBytes: e.counts.hashedBytes
                };
                return {
                    outcome: $l(e.reason),
                    reason: e.reason,
                    hashedBytes: 0
                };
            }(m);
            return y(e.outcome, {
                reason: e.reason,
                hashedBytes: e.hashedBytes
            });
        }
        if (!await u.verifyStillOwned()) return y("lock_lost", {
            hashedBytes: m.hashedBytes
        });
        if (await t.beforeLateRecheck?.(n), t.isMountLive(n)) return y("skipped_live", {
            hashedBytes: m.hashedBytes
        });
        if (jl(t, n, a)) return y("late_pin", {
            hashedBytes: m.hashedBytes
        });
        if (i() - d.startedAtMs >= t.markTtlMs / 2) return y("mark_expired", {
            hashedBytes: m.hashedBytes
        });
        if ("dry_run" === t.mode) return y("would_evict", {
            hashedBytes: m.hashedBytes
        });
        await t.beforeRename?.(n);
        const w = i(), v = `${n}.${w}.${(0, Ys.randomUUID)()}`, _ = h.join(r, Wt.Jl);
        (0, Wt.Ew)(_);
        const b = h.join(_, v);
        try {
            await (t.rename ?? p.promises.rename)(l, b);
        } catch (e) {
            if (function(e) {
                const t = Xl(e);
                return "EBUSY" === t || "EPERM" === t || "ENOTEMPTY" === t || "EACCES" === t;
            }(e)) return y("rename_failed", {
                reason: Xl(e),
                hashedBytes: m.hashedBytes
            });
            throw e;
        }
        if (g = !0, await u.dispose(), u = void 0, !await async function(e, t, r) {
            const n = h.join(e, "files");
            let s;
            try {
                const e = p.lstatSync(n);
                if (e.isSymbolicLink() || !e.isDirectory()) return !1;
                const t = I(n);
                if (t.refusals.length > 0) return !1;
                s = t.files;
            } catch (e) {
                if (e instanceof f) return !1;
                if (Zl(e) && "ENOENT" === e.code) return 0 === t.length;
                throw e;
            }
            if (s.length !== t.length) return !1;
            const o = new Map(t.map((e)=>[
                    e.relPath,
                    e
                ]));
            for (const e of s){
                const t = o.get(e.relPath);
                if (void 0 === t) return !1;
                const n = p.lstatSync(e.absPath, {
                    bigint: !0
                }), s = "win32" !== r && n.ctimeNs !== t.ctimeNs;
                if (!n.isFile() || Number(n.size) !== t.size || n.mtimeNs !== t.mtimeNs || s || n.ino !== t.ino) return !1;
                try {
                    if ((await nc({
                        absPath: e.absPath,
                        maxBytes: Qi,
                        expectedDev: Number(n.dev),
                        expectedIno: Number(n.ino)
                    })).sha !== t.sha256) return !1;
                } catch  {
                    return !1;
                }
            }
            return !0;
        }(b, m.snapshot, t.platform ?? process.platform)) {
            const e = await async function(e) {
                const { options: t, storesRoot: r, movedPath: n, movedName: s } = e, o = h.join(r, Wt.qA);
                try {
                    return (0, Wt.Ew)(o), void await (t.rename ?? p.promises.rename)(n, h.join(o, s));
                } catch (e) {
                    const r = `${n}${Ml}`;
                    try {
                        await (t.rename ?? p.promises.rename)(n, r);
                    } catch  {
                        !function(e) {
                            try {
                                p.writeFileSync(h.join(e, Jl), "");
                            } catch  {
                                return;
                            }
                        }(n);
                    }
                    return `kept_in_evicted:${Xl(e) ?? "rename_failed"}`;
                }
            }({
                options: t,
                storesRoot: r,
                movedPath: b,
                movedName: v
            });
            return y("salvaged", {
                reason: e,
                hashedBytes: m.hashedBytes
            });
        }
        return await k(), "quarantine" === t.mode ? (await rr(h.join(b, Rl), `${JSON.stringify({
            mountKey: n,
            evictedAtMs: w
        })}\n`, 384), y("quarantined", {
            hashedBytes: m.hashedBytes
        })) : (await (t.rm ?? Kl)(b, {
            recursive: !0,
            force: !0,
            maxRetries: 3,
            retryDelay: 100
        }), y(m.empty ? "evicted_empty" : "evicted", {
            hashedBytes: m.hashedBytes
        }));
    } catch (e) {
        return y("error", {
            reason: Xl(e) ?? "failed"
        });
    } finally{
        if (void 0 !== u && (await u.dispose().catch(()=>{}), u = void 0), S && !g && (void 0 !== _ && Yl(w, _, "directory"), void 0 !== b && Yl(v, b, "file")), m || await k().catch(()=>{}), g) try {
            !function(e, t, r) {
                const n = jc({
                    store: e.store,
                    mountKey: t,
                    processExists: r
                });
                for (const e of n.pins)if (!e.live) try {
                    p.lstatSync(e.path).isFile() && p.unlinkSync(e.path);
                } catch (e) {
                    if ("ENOENT" !== Xl(e)) throw e;
                }
                Gl(Nc(e.store, t)), Gl(Fc(e.store, t)), Gl(h.dirname(Nc(e.store, t)));
            }(t, n, a);
        } catch  {}
    }
    function k() {
        return void 0 === d || m ? Promise.resolve() : (m = !0, Wc({
            store: t.store,
            mountKey: n,
            expected: d,
            processExists: a
        }));
    }
}
function $l(e) {
    switch(e){
        case "schema":
            return "skipped_schema";
        case "open_handle":
            return "skipped_open_handle";
        case "residue":
            return "skipped_residue";
        case "budget":
            return "skipped_budget";
        case "unreadable":
            return "skipped_unreadable";
        default:
            return e;
    }
}
function jl(e, t, r) {
    return jc({
        store: e.store,
        mountKey: t,
        processExists: r
    }).pins.some((e)=>e.live);
}
function Gl(e) {
    try {
        const t = p.lstatSync(e);
        if (!t.isDirectory() || t.isSymbolicLink()) return;
        p.rmdirSync(e);
    } catch (e) {
        const t = Xl(e);
        if ("ENOENT" === t || "ENOTEMPTY" === t || "EEXIST" === t) return;
        throw e;
    }
}
function zl(e) {
    const t = Ql(h.join(e, Jl));
    return void 0 !== t && t.isFile() && !t.isSymbolicLink();
}
function Wl(e) {
    try {
        const t = JSON.parse(p.readFileSync(h.join(e, Rl), "utf8"));
        if ("object" == typeof t && null !== t && "evictedAtMs" in t) {
            const e = t.evictedAtMs;
            if ("number" == typeof e && Number.isSafeInteger(e)) return e;
        }
    } catch (e) {
        if (!Zl(e) || "ENOENT" !== e.code) return;
    }
}
function Hl(e) {
    const t = e.split(".");
    if (t.length < 3) return;
    const r = t[t.length - 2];
    if (void 0 === r || !/^[0-9]+$/.test(r)) return;
    const n = Number(r);
    return Number.isSafeInteger(n) ? n : void 0;
}
function Kl(e, t) {
    return p.promises.rm(e, t);
}
function Vl(e, t) {
    const r = Ql(e);
    if (void 0 !== r && !r.isSymbolicLink() && ("directory" === t ? r.isDirectory() : r.isFile())) return r.mtime;
}
function Yl(e, t, r) {
    try {
        const n = p.lstatSync(e);
        if (n.isSymbolicLink()) return;
        if ("directory" === r ? !n.isDirectory() : !n.isFile()) return;
        p.utimesSync(e, n.atime, t);
    } catch  {
        return;
    }
}
function Ql(e) {
    try {
        return p.lstatSync(e);
    } catch (e) {
        if (Zl(e) && "ENOENT" === e.code) return;
        throw e;
    }
}
function Xl(e) {
    return Zl(e) ? e.code : void 0;
}
function Zl(e) {
    return e instanceof Error && "string" == typeof e.code;
}
function eu({ parentAbs: e, childAbs: t }) {
    const r = h.resolve(e), n = h.resolve(t);
    if (n === r) return !0;
    const s = h.relative(r, n);
    return s.length > 0 && !s.startsWith("..") && !h.isAbsolute(s);
}
function tu(e, t) {
    if (0 === e.length || !h.isAbsolute(e)) return;
    let r, n = -1;
    for (const s of t){
        if (!eu({
            parentAbs: s.filesDir,
            childAbs: e
        })) continue;
        const t = h.resolve(s.filesDir).length;
        t > n && (r = s, n = t);
    }
    return r;
}
const ru = [
    "eager",
    "lazy"
], nu = [
    "legacy_sweep",
    "off",
    "dry_run",
    "quarantine",
    "on"
], su = [
    "prompt_inventory",
    "env_provider",
    "write_detected",
    "explicit_sync",
    "resume",
    "inherited",
    "import",
    "flush"
], ou = [
    "scan",
    "size_asc"
], iu = {
    syncDebounceMs: "sync_debounce_ms",
    idleBackoffFactor: "idle_backoff_factor",
    syncIdleMaxMs: "sync_idle_max_ms",
    idleQuiesceMs: "idle_quiesce_ms",
    largeTargetTtlMs: "large_target_ttl_ms",
    syncBackoffBaseMs: "sync_backoff_base_ms",
    syncBackoffMaxMs: "sync_backoff_max_ms",
    projectSyncDebounceMs: "project_sync_debounce_ms",
    projectSyncIdleMaxMs: "project_sync_idle_max_ms",
    projectSyncBackoffBaseMs: "project_sync_backoff_base_ms",
    projectSyncBackoffMaxMs: "project_sync_backoff_max_ms",
    passiveRetryIntervalMs: "passive_retry_interval_ms",
    passiveIndexPollIntervalMs: "passive_index_poll_interval_ms",
    pathRefreshMinIntervalMs: "path_refresh_min_interval_ms",
    maxFileSizeBytes: "max_file_size_bytes",
    tokenRefreshBufferMs: "token_refresh_buffer_ms",
    mintTerminalDenialCacheMs: "mint_terminal_denial_cache_ms",
    skipDeniedMountSync: "skip_denied_mount_sync",
    rpcRetryMaxAttempts: "rpc_retry_max_attempts",
    rpcRetryBaseDelayMs: "rpc_retry_base_delay_ms",
    rpcRetryMaxDelayMs: "rpc_retry_max_delay_ms",
    rpcRetryMultiplier: "rpc_retry_multiplier",
    rpcTimeoutMs: "rpc_timeout_ms",
    blobIdleTimeoutMs: "blob_idle_timeout_ms",
    blobConnectTimeoutMs: "blob_connect_timeout_ms",
    syncRoundTimeoutMs: "sync_round_timeout_ms",
    syncRoundProgressTimeoutMs: "sync_round_progress_timeout_ms",
    syncRoundHardCapMs: "sync_round_hard_cap_ms",
    syncRoundUnwindTimeoutMs: "sync_round_unwind_timeout_ms",
    lockReleaseFailureThreshold: "lock_release_failure_threshold",
    lockReleaseFailureStreakThreshold: "lock_release_failure_streak_threshold",
    lockReleaseFailureStreakPassiveMs: "lock_release_failure_streak_passive_ms",
    resumeGapThresholdMs: "resume_gap_threshold_ms",
    resumeDetectionMode: "resume_detection_mode",
    dirtyPassiveStalledThresholdMs: "dirty_passive_stalled_threshold_ms",
    s3Concurrency: "s3_concurrency",
    listConcurrency: "list_concurrency",
    listWalkConcurrency: "list_walk_concurrency",
    hashConcurrency: "hash_concurrency",
    presignConcurrency: "presign_concurrency",
    multipartUploadThresholdBytes: "multipart_upload_threshold_bytes",
    multipartPartSizeBytes: "multipart_part_size_bytes",
    multipartPresignWindowSize: "multipart_presign_window_size",
    pullPresignWindowSize: "pull_presign_window_size",
    multipartCompleteMaxAttempts: "multipart_complete_max_attempts",
    multipartMaxRestarts: "multipart_max_restarts",
    multipartMaxConflictRenames: "multipart_max_conflict_renames",
    multipartMaxExpiryRefreshes: "multipart_max_expiry_refreshes",
    writeBarrierTimeoutMs: "write_barrier_timeout_ms",
    scopedReservedSlots: "scoped_reserved_slots",
    pathSyncRequestPollMs: "path_sync_request_poll_ms",
    pathSyncRequestWaitPollMs: "path_sync_request_wait_poll_ms",
    exclusiveMutationClaimPollMs: "exclusive_mutation_claim_poll_ms",
    sharedScheduler: "shared_scheduler",
    storeRootIdFence: "store_root_id_fence",
    indexClosedInvalidatesSession: "index_closed_invalidates_session",
    periodicCoalesceMs: "periodic_coalesce_ms",
    staleStoreRootMaxIdleMs: "stale_store_root_max_idle_ms",
    storeEvictionMode: "store_eviction_mode",
    storeEvictionQuarantineMs: "store_eviction_quarantine_ms",
    storeEvictionMaxRootsPerRun: "store_eviction_max_roots_per_run",
    storeEvictionMaxHashBytesPerRun: "store_eviction_max_hash_bytes_per_run",
    storeEvictionMarkTtlMs: "store_eviction_mark_ttl_ms",
    storeEvictionMinIntervalMs: "store_eviction_min_interval_ms",
    tombstoneFullRefreshRounds: "tombstone_full_refresh_rounds",
    tombstoneFullRefreshIntervalMs: "tombstone_full_refresh_interval_ms",
    tombstonePruneSlackMs: "tombstone_prune_slack_ms",
    remoteVersionEnabled: "remote_version_enabled",
    versionFullListIntervalMs: "version_full_list_interval_ms",
    versionAuditSampleRate: "version_audit_sample_rate",
    versionProbeEnabled: "version_probe_enabled",
    versionProbeMaxEntries: "version_probe_max_entries",
    mintRetryPolicyVersion: "mint_retry_policy_version",
    mintRetryMaxAttempts: "mint_retry_max_attempts",
    mintRetryBaseDelayMs: "mint_retry_base_delay_ms",
    mintRetryMaxDelayMs: "mint_retry_max_delay_ms",
    mintRetryBudgetRatio: "mint_retry_budget_ratio",
    mintRetryBudgetFloor: "mint_retry_budget_floor",
    mintTransientNegativeCacheBaseMs: "mint_transient_negative_cache_base_ms",
    mintTransientNegativeCacheMaxMs: "mint_transient_negative_cache_max_ms",
    mintGateOpenThreshold: "mint_gate_open_threshold",
    mintGateWindowMs: "mint_gate_window_ms",
    mintGateOpenBaseMs: "mint_gate_open_base_ms",
    mintGateOpenMaxMs: "mint_gate_open_max_ms",
    tokenRefreshJitterRatio: "token_refresh_jitter_ratio",
    minTokenSlackMs: "min_token_slack_ms",
    localStatFastPath: "local_stat_fast_path",
    localStatFastPathAuditRate: "local_stat_fast_path_audit_rate",
    localStatRacyMarginMs: "local_stat_racy_margin_ms",
    harnessRecoveryPolicy: "harness_recovery_policy",
    harnessRecoveryStartJitterMs: "harness_recovery_start_jitter_ms",
    harnessRecoveryProbeBaseMs: "harness_recovery_probe_base_ms",
    harnessRecoveryProbeMaxMs: "harness_recovery_probe_max_ms",
    harnessRememberedMountsMax: "harness_remembered_mounts_max",
    mountPolicy: "mount_policy",
    pushOrder: "push_order"
}, au = 864e5, cu = Object.freeze({
    syncDebounceMs: 5e3,
    idleBackoffFactor: 1,
    syncIdleMaxMs: 5e3,
    idleQuiesceMs: 0,
    largeTargetTtlMs: 18e5,
    syncBackoffBaseMs: 5e3,
    syncBackoffMaxMs: 6e4,
    projectSyncDebounceMs: 5e3,
    projectSyncIdleMaxMs: 5e3,
    projectSyncBackoffBaseMs: 5e3,
    projectSyncBackoffMaxMs: 6e4,
    passiveRetryIntervalMs: 5e3,
    passiveIndexPollIntervalMs: 2e3,
    pathRefreshMinIntervalMs: 1e3,
    maxFileSizeBytes: Qi,
    tokenRefreshBufferMs: 6e4,
    mintTerminalDenialCacheMs: 18e5,
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
    listWalkConcurrency: 4,
    hashConcurrency: 4,
    presignConcurrency: 4,
    multipartUploadThresholdBytes: Xi,
    multipartPartSizeBytes: Zi,
    multipartPresignWindowSize: 8,
    pullPresignWindowSize: 500,
    multipartCompleteMaxAttempts: 3,
    multipartMaxRestarts: 1,
    multipartMaxConflictRenames: 1,
    multipartMaxExpiryRefreshes: 1,
    writeBarrierTimeoutMs: 2e3,
    scopedReservedSlots: 1,
    pathSyncRequestPollMs: 250,
    pathSyncRequestWaitPollMs: 50,
    exclusiveMutationClaimPollMs: 250,
    sharedScheduler: !1,
    storeRootIdFence: !1,
    indexClosedInvalidatesSession: !1,
    periodicCoalesceMs: 2e3,
    staleStoreRootMaxIdleMs: 7 * au,
    storeEvictionMode: "legacy_sweep",
    storeEvictionQuarantineMs: au,
    storeEvictionMaxRootsPerRun: 4,
    storeEvictionMaxHashBytesPerRun: 268435456,
    storeEvictionMarkTtlMs: Rc,
    storeEvictionMinIntervalMs: 216e5,
    tombstoneFullRefreshRounds: na,
    tombstoneFullRefreshIntervalMs: sa,
    tombstonePruneSlackMs: oa,
    remoteVersionEnabled: !1,
    versionFullListIntervalMs: ha,
    versionAuditSampleRate: 0,
    versionProbeEnabled: !1,
    versionProbeMaxEntries: 50,
    mintRetryPolicyVersion: 1,
    mintRetryMaxAttempts: 2,
    mintRetryBaseDelayMs: 250,
    mintRetryMaxDelayMs: 2e3,
    mintRetryBudgetRatio: .1,
    mintRetryBudgetFloor: 3,
    mintTransientNegativeCacheBaseMs: 5e3,
    mintTransientNegativeCacheMaxMs: 12e4,
    mintGateOpenThreshold: 5,
    mintGateWindowMs: 3e4,
    mintGateOpenBaseMs: 5e3,
    mintGateOpenMaxMs: 12e4,
    tokenRefreshJitterRatio: .5,
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
}), lu = Object.freeze({
    ...cu,
    mountPolicy: "lazy"
});
function uu(e = "ide") {
    return "ide" === e ? lu : cu;
}
const du = 1048576, pu = {
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
        min: 6e4,
        max: 864e5
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
        max: 1073741824
    },
    tokenRefreshBufferMs: {
        min: 0,
        max: 6e5
    },
    mintTerminalDenialCacheMs: {
        min: 6e4,
        max: au
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
        max: 3e5
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
        min: 5 * du,
        max: 1024 * du
    },
    multipartPartSizeBytes: {
        min: 5 * du,
        max: 512 * du
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
        max: Rc
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
        min: 36e5,
        max: 6048e5
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
function mu(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
function hu(e, t) {
    if (void 0 === e) return;
    const r = iu[t];
    return Object.hasOwn(e, r) ? e[r] : Object.hasOwn(e, t) ? e[t] : void 0;
}
function fu(e, t, r, n) {
    if ("number" != typeof e || !Number.isFinite(e)) return t;
    const s = !1 === n?.integer ? e : Math.floor(e);
    return Math.min(Math.max(s, r.min), r.max);
}
function gu(e, t) {
    return "boolean" == typeof e ? e : t;
}
function yu(e, t, r) {
    return 0 === e ? 0 : fu(e, t, r);
}
function wu(e, t) {
    const r = fu(hu(e, "harnessRecoveryProbeBaseMs"), t.harnessRecoveryProbeBaseMs, pu.harnessRecoveryProbeBaseMs), n = fu(hu(e, "harnessRecoveryProbeMaxMs"), t.harnessRecoveryProbeMaxMs, pu.harnessRecoveryProbeMaxMs);
    return {
        syncDebounceMs: fu(hu(e, "syncDebounceMs"), t.syncDebounceMs, pu.syncDebounceMs),
        idleBackoffFactor: fu(hu(e, "idleBackoffFactor"), t.idleBackoffFactor, pu.idleBackoffFactor, {
            integer: !1
        }),
        syncIdleMaxMs: fu(hu(e, "syncIdleMaxMs"), t.syncIdleMaxMs, pu.syncIdleMaxMs),
        idleQuiesceMs: fu(hu(e, "idleQuiesceMs"), t.idleQuiesceMs, pu.idleQuiesceMs),
        largeTargetTtlMs: fu(hu(e, "largeTargetTtlMs"), t.largeTargetTtlMs, pu.largeTargetTtlMs),
        syncBackoffBaseMs: fu(hu(e, "syncBackoffBaseMs"), t.syncBackoffBaseMs, pu.syncBackoffBaseMs),
        syncBackoffMaxMs: fu(hu(e, "syncBackoffMaxMs"), t.syncBackoffMaxMs, pu.syncBackoffMaxMs),
        projectSyncDebounceMs: fu(hu(e, "projectSyncDebounceMs"), t.projectSyncDebounceMs, pu.projectSyncDebounceMs),
        projectSyncIdleMaxMs: fu(hu(e, "projectSyncIdleMaxMs"), t.projectSyncIdleMaxMs, pu.projectSyncIdleMaxMs),
        projectSyncBackoffBaseMs: fu(hu(e, "projectSyncBackoffBaseMs"), t.projectSyncBackoffBaseMs, pu.projectSyncBackoffBaseMs),
        projectSyncBackoffMaxMs: fu(hu(e, "projectSyncBackoffMaxMs"), t.projectSyncBackoffMaxMs, pu.projectSyncBackoffMaxMs),
        passiveRetryIntervalMs: fu(hu(e, "passiveRetryIntervalMs"), t.passiveRetryIntervalMs, pu.passiveRetryIntervalMs),
        passiveIndexPollIntervalMs: fu(hu(e, "passiveIndexPollIntervalMs"), t.passiveIndexPollIntervalMs, pu.passiveIndexPollIntervalMs),
        pathRefreshMinIntervalMs: fu(hu(e, "pathRefreshMinIntervalMs"), t.pathRefreshMinIntervalMs, pu.pathRefreshMinIntervalMs),
        maxFileSizeBytes: fu(hu(e, "maxFileSizeBytes"), t.maxFileSizeBytes, pu.maxFileSizeBytes),
        tokenRefreshBufferMs: fu(hu(e, "tokenRefreshBufferMs"), t.tokenRefreshBufferMs, pu.tokenRefreshBufferMs),
        mintTerminalDenialCacheMs: yu(hu(e, "mintTerminalDenialCacheMs"), t.mintTerminalDenialCacheMs, pu.mintTerminalDenialCacheMs),
        skipDeniedMountSync: Iu(hu(e, "skipDeniedMountSync"), t.skipDeniedMountSync),
        rpcRetryMaxAttempts: fu(hu(e, "rpcRetryMaxAttempts"), t.rpcRetryMaxAttempts, pu.rpcRetryMaxAttempts),
        rpcRetryBaseDelayMs: fu(hu(e, "rpcRetryBaseDelayMs"), t.rpcRetryBaseDelayMs, pu.rpcRetryBaseDelayMs),
        rpcRetryMaxDelayMs: fu(hu(e, "rpcRetryMaxDelayMs"), t.rpcRetryMaxDelayMs, pu.rpcRetryMaxDelayMs),
        rpcRetryMultiplier: fu(hu(e, "rpcRetryMultiplier"), t.rpcRetryMultiplier, pu.rpcRetryMultiplier, {
            integer: !1
        }),
        rpcTimeoutMs: fu(hu(e, "rpcTimeoutMs"), t.rpcTimeoutMs, pu.rpcTimeoutMs),
        blobIdleTimeoutMs: yu(hu(e, "blobIdleTimeoutMs"), t.blobIdleTimeoutMs, pu.blobIdleTimeoutMs),
        blobConnectTimeoutMs: yu(hu(e, "blobConnectTimeoutMs"), t.blobConnectTimeoutMs, pu.blobConnectTimeoutMs),
        syncRoundTimeoutMs: yu(hu(e, "syncRoundTimeoutMs"), t.syncRoundTimeoutMs, pu.syncRoundTimeoutMs),
        syncRoundProgressTimeoutMs: yu(hu(e, "syncRoundProgressTimeoutMs"), t.syncRoundProgressTimeoutMs, pu.syncRoundProgressTimeoutMs),
        syncRoundHardCapMs: yu(hu(e, "syncRoundHardCapMs"), t.syncRoundHardCapMs, pu.syncRoundHardCapMs),
        syncRoundUnwindTimeoutMs: fu(hu(e, "syncRoundUnwindTimeoutMs"), t.syncRoundUnwindTimeoutMs, pu.syncRoundUnwindTimeoutMs),
        lockReleaseFailureThreshold: fu(hu(e, "lockReleaseFailureThreshold"), t.lockReleaseFailureThreshold, pu.lockReleaseFailureThreshold),
        lockReleaseFailureStreakThreshold: fu(hu(e, "lockReleaseFailureStreakThreshold"), t.lockReleaseFailureStreakThreshold, pu.lockReleaseFailureStreakThreshold),
        lockReleaseFailureStreakPassiveMs: fu(hu(e, "lockReleaseFailureStreakPassiveMs"), t.lockReleaseFailureStreakPassiveMs, pu.lockReleaseFailureStreakPassiveMs),
        resumeGapThresholdMs: yu(hu(e, "resumeGapThresholdMs"), t.resumeGapThresholdMs, pu.resumeGapThresholdMs),
        resumeDetectionMode: vu(hu(e, "resumeDetectionMode"), t.resumeDetectionMode),
        dirtyPassiveStalledThresholdMs: yu(hu(e, "dirtyPassiveStalledThresholdMs"), t.dirtyPassiveStalledThresholdMs, pu.dirtyPassiveStalledThresholdMs),
        s3Concurrency: fu(hu(e, "s3Concurrency"), t.s3Concurrency, pu.s3Concurrency),
        listConcurrency: fu(hu(e, "listConcurrency"), t.listConcurrency, pu.listConcurrency),
        hashConcurrency: fu(hu(e, "hashConcurrency"), t.hashConcurrency, pu.hashConcurrency),
        presignConcurrency: fu(hu(e, "presignConcurrency"), t.presignConcurrency, pu.presignConcurrency),
        multipartUploadThresholdBytes: fu(hu(e, "multipartUploadThresholdBytes"), t.multipartUploadThresholdBytes, pu.multipartUploadThresholdBytes),
        multipartPartSizeBytes: fu(hu(e, "multipartPartSizeBytes"), t.multipartPartSizeBytes, pu.multipartPartSizeBytes),
        multipartPresignWindowSize: fu(hu(e, "multipartPresignWindowSize"), t.multipartPresignWindowSize, pu.multipartPresignWindowSize),
        pullPresignWindowSize: fu(hu(e, "pullPresignWindowSize"), t.pullPresignWindowSize, pu.pullPresignWindowSize),
        listWalkConcurrency: fu(hu(e, "listWalkConcurrency"), t.listWalkConcurrency, pu.listWalkConcurrency),
        multipartCompleteMaxAttempts: fu(hu(e, "multipartCompleteMaxAttempts"), t.multipartCompleteMaxAttempts, pu.multipartCompleteMaxAttempts),
        multipartMaxRestarts: fu(hu(e, "multipartMaxRestarts"), t.multipartMaxRestarts, pu.multipartMaxRestarts),
        multipartMaxConflictRenames: fu(hu(e, "multipartMaxConflictRenames"), t.multipartMaxConflictRenames, pu.multipartMaxConflictRenames),
        multipartMaxExpiryRefreshes: fu(hu(e, "multipartMaxExpiryRefreshes"), t.multipartMaxExpiryRefreshes, pu.multipartMaxExpiryRefreshes),
        writeBarrierTimeoutMs: fu(hu(e, "writeBarrierTimeoutMs"), t.writeBarrierTimeoutMs, pu.writeBarrierTimeoutMs),
        scopedReservedSlots: fu(hu(e, "scopedReservedSlots"), t.scopedReservedSlots, pu.scopedReservedSlots),
        pathSyncRequestPollMs: fu(hu(e, "pathSyncRequestPollMs"), t.pathSyncRequestPollMs, pu.pathSyncRequestPollMs),
        pathSyncRequestWaitPollMs: fu(hu(e, "pathSyncRequestWaitPollMs"), t.pathSyncRequestWaitPollMs, pu.pathSyncRequestWaitPollMs),
        exclusiveMutationClaimPollMs: fu(hu(e, "exclusiveMutationClaimPollMs"), t.exclusiveMutationClaimPollMs, pu.exclusiveMutationClaimPollMs),
        sharedScheduler: gu(hu(e, "sharedScheduler"), t.sharedScheduler),
        storeRootIdFence: gu(hu(e, "storeRootIdFence"), t.storeRootIdFence),
        indexClosedInvalidatesSession: gu(hu(e, "indexClosedInvalidatesSession"), t.indexClosedInvalidatesSession),
        periodicCoalesceMs: fu(hu(e, "periodicCoalesceMs"), t.periodicCoalesceMs, pu.periodicCoalesceMs),
        staleStoreRootMaxIdleMs: Pu(hu(e, "staleStoreRootMaxIdleMs"), t.staleStoreRootMaxIdleMs),
        storeEvictionMode: Su(hu(e, "storeEvictionMode"), t.storeEvictionMode),
        storeEvictionQuarantineMs: Cu(hu(e, "storeEvictionQuarantineMs"), t.storeEvictionQuarantineMs),
        storeEvictionMaxRootsPerRun: Tu(hu(e, "storeEvictionMaxRootsPerRun"), t.storeEvictionMaxRootsPerRun),
        storeEvictionMaxHashBytesPerRun: Tu(hu(e, "storeEvictionMaxHashBytesPerRun"), t.storeEvictionMaxHashBytesPerRun),
        storeEvictionMarkTtlMs: Math.min(Pu(hu(e, "storeEvictionMarkTtlMs"), t.storeEvictionMarkTtlMs, pu.storeEvictionMarkTtlMs.min), pu.storeEvictionMarkTtlMs.max),
        storeEvictionMinIntervalMs: Cu(hu(e, "storeEvictionMinIntervalMs"), t.storeEvictionMinIntervalMs),
        tombstoneFullRefreshRounds: Tu(hu(e, "tombstoneFullRefreshRounds"), t.tombstoneFullRefreshRounds),
        tombstoneFullRefreshIntervalMs: Cu(hu(e, "tombstoneFullRefreshIntervalMs"), t.tombstoneFullRefreshIntervalMs),
        tombstonePruneSlackMs: Cu(hu(e, "tombstonePruneSlackMs"), t.tombstonePruneSlackMs),
        remoteVersionEnabled: gu(hu(e, "remoteVersionEnabled"), t.remoteVersionEnabled),
        versionFullListIntervalMs: fu(hu(e, "versionFullListIntervalMs"), t.versionFullListIntervalMs, pu.versionFullListIntervalMs),
        versionAuditSampleRate: fu(hu(e, "versionAuditSampleRate"), t.versionAuditSampleRate, pu.versionAuditSampleRate, {
            integer: !1
        }),
        versionProbeEnabled: gu(hu(e, "versionProbeEnabled"), t.versionProbeEnabled),
        versionProbeMaxEntries: fu(hu(e, "versionProbeMaxEntries"), t.versionProbeMaxEntries, pu.versionProbeMaxEntries),
        mintRetryPolicyVersion: ku(hu(e, "mintRetryPolicyVersion"), t.mintRetryPolicyVersion),
        mintRetryMaxAttempts: fu(hu(e, "mintRetryMaxAttempts"), t.mintRetryMaxAttempts, pu.mintRetryMaxAttempts),
        mintRetryBaseDelayMs: fu(hu(e, "mintRetryBaseDelayMs"), t.mintRetryBaseDelayMs, pu.mintRetryBaseDelayMs),
        mintRetryMaxDelayMs: fu(hu(e, "mintRetryMaxDelayMs"), t.mintRetryMaxDelayMs, pu.mintRetryMaxDelayMs),
        mintRetryBudgetRatio: fu(hu(e, "mintRetryBudgetRatio"), t.mintRetryBudgetRatio, pu.mintRetryBudgetRatio, {
            integer: !1
        }),
        mintRetryBudgetFloor: fu(hu(e, "mintRetryBudgetFloor"), t.mintRetryBudgetFloor, pu.mintRetryBudgetFloor),
        mintTransientNegativeCacheBaseMs: fu(hu(e, "mintTransientNegativeCacheBaseMs"), t.mintTransientNegativeCacheBaseMs, pu.mintTransientNegativeCacheBaseMs),
        mintTransientNegativeCacheMaxMs: fu(hu(e, "mintTransientNegativeCacheMaxMs"), t.mintTransientNegativeCacheMaxMs, pu.mintTransientNegativeCacheMaxMs),
        mintGateOpenThreshold: fu(hu(e, "mintGateOpenThreshold"), t.mintGateOpenThreshold, pu.mintGateOpenThreshold),
        mintGateWindowMs: fu(hu(e, "mintGateWindowMs"), t.mintGateWindowMs, pu.mintGateWindowMs),
        mintGateOpenBaseMs: fu(hu(e, "mintGateOpenBaseMs"), t.mintGateOpenBaseMs, pu.mintGateOpenBaseMs),
        mintGateOpenMaxMs: fu(hu(e, "mintGateOpenMaxMs"), t.mintGateOpenMaxMs, pu.mintGateOpenMaxMs),
        tokenRefreshJitterRatio: fu(hu(e, "tokenRefreshJitterRatio"), t.tokenRefreshJitterRatio, pu.tokenRefreshJitterRatio, {
            integer: !1
        }),
        minTokenSlackMs: fu(hu(e, "minTokenSlackMs"), t.minTokenSlackMs, pu.minTokenSlackMs),
        localStatFastPath: bu(hu(e, "localStatFastPath"), t.localStatFastPath),
        localStatFastPathAuditRate: fu(hu(e, "localStatFastPathAuditRate"), t.localStatFastPathAuditRate, pu.localStatFastPathAuditRate, {
            integer: !1
        }),
        localStatRacyMarginMs: fu(hu(e, "localStatRacyMarginMs"), t.localStatRacyMarginMs, pu.localStatRacyMarginMs),
        harnessRecoveryPolicy: xu(hu(e, "harnessRecoveryPolicy"), t.harnessRecoveryPolicy),
        harnessRecoveryStartJitterMs: fu(hu(e, "harnessRecoveryStartJitterMs"), t.harnessRecoveryStartJitterMs, pu.harnessRecoveryStartJitterMs),
        harnessRecoveryProbeBaseMs: r,
        harnessRecoveryProbeMaxMs: Math.max(r, n),
        harnessRememberedMountsMax: fu(hu(e, "harnessRememberedMountsMax"), t.harnessRememberedMountsMax, pu.harnessRememberedMountsMax),
        mountPolicy: Eu(hu(e, "mountPolicy"), t.mountPolicy),
        pushOrder: _u(hu(e, "pushOrder"), t.pushOrder)
    };
}
function vu(e, t) {
    return "mono_gap" === e || "timer_lateness" === e ? e : t;
}
function _u(e, t) {
    return "scan" === e || "size_asc" === e ? e : t;
}
function bu(e, t) {
    return "off" === e || "posix" === e || "all" === e ? e : t;
}
function Su(e, t) {
    return "legacy_sweep" === e || "off" === e || "dry_run" === e || "quarantine" === e || "on" === e ? e : t;
}
function ku(e, t) {
    return 0 === e || 1 === e ? e : t;
}
function xu(e, t) {
    return "latch" === e || "recover" === e ? e : t;
}
function Eu(e, t) {
    return "eager" === e || "lazy" === e ? e : t;
}
function Iu(e, t) {
    return 0 === e || 1 === e ? e : t;
}
function Tu(e, t) {
    return "number" == typeof e && Number.isSafeInteger(e) && e >= 1 ? e : t;
}
function Cu(e, t) {
    return "number" == typeof e && Number.isSafeInteger(e) && e >= 0 ? e : t;
}
function Pu(e, t, r = 0) {
    if (0 === e) return r > 0 ? r : 0;
    if ("number" == typeof e && Number.isFinite(e) && e > 0) {
        const t = Math.floor(e);
        return r > 0 && t < r ? r : t;
    }
    return t;
}
function Au(e, t = "ide", r) {
    const n = mu(e) ? e : void 0, s = mu(n?.surfaces) ? n.surfaces : void 0, o = mu(s?.[t]) ? s[t] : void 0;
    let i = function(e) {
        const t = e.syncBackoffBaseMs;
        let r = e.syncBackoffMaxMs;
        t > r && (r = t);
        const n = e.projectSyncBackoffBaseMs;
        let s = e.projectSyncBackoffMaxMs;
        n > s && (s = n);
        const o = e.rpcRetryBaseDelayMs;
        let i = e.rpcRetryMaxDelayMs;
        o > i && (i = o);
        const a = e.mintRetryBaseDelayMs;
        let c = e.mintRetryMaxDelayMs;
        a > c && (c = a);
        const l = e.mintTransientNegativeCacheBaseMs;
        let u = e.mintTransientNegativeCacheMaxMs;
        l > u && (u = l);
        const d = e.mintGateOpenBaseMs;
        let p = e.mintGateOpenMaxMs;
        return d > p && (p = d), t === e.syncBackoffBaseMs && r === e.syncBackoffMaxMs && s === e.projectSyncBackoffMaxMs && o === e.rpcRetryBaseDelayMs && i === e.rpcRetryMaxDelayMs && c === e.mintRetryMaxDelayMs && u === e.mintTransientNegativeCacheMaxMs && p === e.mintGateOpenMaxMs ? e : {
            ...e,
            syncBackoffBaseMs: t,
            syncBackoffMaxMs: r,
            projectSyncBackoffMaxMs: s,
            rpcRetryBaseDelayMs: o,
            rpcRetryMaxDelayMs: i,
            mintRetryMaxDelayMs: c,
            mintTransientNegativeCacheMaxMs: u,
            mintGateOpenMaxMs: p
        };
    }(wu(o, wu(n, uu(t))));
    return Ru(n, "syncIdleMaxMs") || Ru(o, "syncIdleMaxMs") || i.syncIdleMaxMs === i.syncDebounceMs || (i = {
        ...i,
        syncIdleMaxMs: i.syncDebounceMs
    }), Ru(n, "projectSyncIdleMaxMs") || Ru(o, "projectSyncIdleMaxMs") || i.projectSyncIdleMaxMs === i.projectSyncDebounceMs || (i = {
        ...i,
        projectSyncIdleMaxMs: i.projectSyncDebounceMs
    }), function(e, t) {
        if (void 0 === t || Ju || 1 !== e.skipDeniedMountSync || 0 !== e.mintTerminalDenialCacheMs) return;
        Ju = !0;
        try {
            t("skip_denied_mount_sync is 1 but mint_terminal_denial_cache_ms is 0, so terminal denials are not cached and those rounds are not skipped");
        } catch  {}
    }(i, r?.onWarn), i;
}
function Ru(e, t) {
    return void 0 !== hu(e, t);
}
function Mu(e, t) {
    return t ? e.projectSyncIdleMaxMs : e.syncIdleMaxMs;
}
let Ju = !1;
function Ou(e, t) {
    return t ? {
        syncDebounceMs: e.projectSyncDebounceMs,
        syncBackoffBaseMs: e.projectSyncBackoffBaseMs,
        syncBackoffMaxMs: e.projectSyncBackoffMaxMs
    } : {
        syncDebounceMs: e.syncDebounceMs,
        syncBackoffBaseMs: e.syncBackoffBaseMs,
        syncBackoffMaxMs: e.syncBackoffMaxMs
    };
}
function Bu(e, t = !1) {
    return {
        ...Ou(e, t),
        idleBackoffFactor: e.idleBackoffFactor,
        syncIdleMaxMs: Mu(e, t),
        ...Du(e),
        ...qu(e),
        passiveRetryIntervalMs: e.passiveRetryIntervalMs,
        passiveIndexPollIntervalMs: e.passiveIndexPollIntervalMs,
        pathRefreshMinIntervalMs: e.pathRefreshMinIntervalMs,
        maxFileSizeBytes: e.maxFileSizeBytes,
        multipartUploadThresholdBytes: e.multipartUploadThresholdBytes,
        multipartPartSizeBytes: e.multipartPartSizeBytes,
        multipartPresignWindowSize: e.multipartPresignWindowSize,
        pullPresignWindowSize: e.pullPresignWindowSize,
        listWalkConcurrency: e.listWalkConcurrency,
        multipartCompleteMaxAttempts: e.multipartCompleteMaxAttempts,
        multipartMaxRestarts: e.multipartMaxRestarts,
        multipartMaxConflictRenames: e.multipartMaxConflictRenames,
        multipartMaxExpiryRefreshes: e.multipartMaxExpiryRefreshes,
        pathSyncRequestPollMs: e.pathSyncRequestPollMs,
        pathSyncRequestWaitPollMs: e.pathSyncRequestWaitPollMs,
        exclusiveMutationClaimPollMs: e.exclusiveMutationClaimPollMs,
        blobIdleTimeoutMs: e.blobIdleTimeoutMs,
        blobConnectTimeoutMs: e.blobConnectTimeoutMs,
        syncRoundTimeoutMs: e.syncRoundTimeoutMs,
        syncRoundProgressTimeoutMs: e.syncRoundProgressTimeoutMs,
        syncRoundHardCapMs: e.syncRoundHardCapMs,
        syncRoundUnwindTimeoutMs: e.syncRoundUnwindTimeoutMs,
        lockReleaseFailureThreshold: e.lockReleaseFailureThreshold,
        lockReleaseFailureStreakThreshold: e.lockReleaseFailureStreakThreshold,
        lockReleaseFailureStreakPassiveMs: e.lockReleaseFailureStreakPassiveMs,
        resumeGapThresholdMs: e.resumeGapThresholdMs,
        resumeDetectionMode: e.resumeDetectionMode,
        localStatFastPath: e.localStatFastPath,
        localStatFastPathAuditRate: e.localStatFastPathAuditRate,
        localStatRacyMarginMs: e.localStatRacyMarginMs,
        pushOrder: e.pushOrder,
        storeRootIdFence: e.storeRootIdFence,
        indexClosedInvalidatesSession: e.indexClosedInvalidatesSession
    };
}
function Du(e) {
    return {
        tombstoneFullRefreshRounds: e.tombstoneFullRefreshRounds,
        tombstoneFullRefreshIntervalMs: e.tombstoneFullRefreshIntervalMs,
        tombstonePruneSlackMs: e.tombstonePruneSlackMs
    };
}
function qu(e) {
    return {
        remoteVersionEnabled: e.remoteVersionEnabled,
        versionFullListIntervalMs: e.versionFullListIntervalMs,
        versionAuditSampleRate: e.versionAuditSampleRate
    };
}
function Nu(e = cu) {
    const t = e.scopedReservedSlots;
    return {
        s3: new Lt({
            max: e.s3Concurrency,
            reservedForPriority: t
        }),
        list: new Lt({
            max: e.listConcurrency
        }),
        hash: new Lt({
            max: e.hashConcurrency,
            reservedForPriority: t
        }),
        presign: new Lt({
            max: e.presignConcurrency,
            reservedForPriority: t
        })
    };
}
function Fu(e) {
    return {
        policy: e.harnessRecoveryPolicy,
        startJitterMs: e.harnessRecoveryStartJitterMs,
        probeBaseMs: e.harnessRecoveryProbeBaseMs,
        probeMaxMs: e.harnessRecoveryProbeMaxMs,
        rememberedMountsMax: e.harnessRememberedMountsMax
    };
}
function Uu(e, t = "ide") {
    const r = uu(t);
    for (const t of Object.keys(r))if (e[t] !== r[t]) return !0;
    return !1;
}
function Lu(e) {
    try {
        return v(e);
    } catch  {
        return;
    }
}
function $u(e, t) {
    if ("absent" === e.kind || "passive" === e.kind || "denied" === e.kind) return e.kind;
    const { errors: r } = e.summary;
    if (r.some((e)=>void 0 === e.relPath)) return "error";
    if (0 === r.length) return "synced-path";
    const n = new Set;
    for (const e of r){
        if (void 0 === e.relPath) continue;
        const t = Lu(e.relPath);
        if (void 0 === t) return "error";
        n.add(t);
    }
    for (const e of t){
        const t = Lu(e);
        if (void 0 === t || n.has(t)) return "error";
    }
    return "synced-path";
}
class ju {
    constructor(e){
        this.states = new Map, this.run = e.run, this.resolveOutcome = e.resolveOutcome ?? ((e)=>e);
    }
    request(e, t = [], r) {
        const n = this.stateFor(e), s = {
            relPaths: [
                ...t
            ],
            timeoutMs: r?.timeoutMs
        };
        if (void 0 === n.inFlight) return this.enqueueStart(e, n, s);
        const o = n.pending ?? this.createPendingBatch(n);
        for (const e of t)o.relPaths.add(e);
        return new Promise((e, t)=>{
            o.waiters.push({
                ...s,
                resolve: e,
                reject: t
            });
        });
    }
    stateFor(e) {
        const t = this.states.get(e);
        if (void 0 !== t) return t;
        const r = {
            inFlight: void 0,
            pending: void 0
        };
        return this.states.set(e, r), r;
    }
    createPendingBatch(e) {
        const t = {
            relPaths: new Set,
            waiters: []
        };
        return e.pending = t, t;
    }
    enqueueStart(e, t, r) {
        return new Promise((n, s)=>{
            this.start(e, t, [
                {
                    ...r,
                    resolve: n,
                    reject: s
                }
            ]);
        });
    }
    start(e, t, r) {
        const n = new Set;
        let s;
        for (const e of r){
            for (const t of e.relPaths)n.add(t);
            void 0 !== e.timeoutMs && (s = void 0 === s ? e.timeoutMs : Math.max(s, e.timeoutMs));
        }
        const o = this.run(e, [
            ...n
        ], {
            timeoutMs: s
        });
        t.inFlight = o.then((e)=>{
            for (const t of r)try {
                t.resolve(this.resolveOutcome(e, t.relPaths));
            } catch (e) {
                t.reject(e);
            }
        }, (e)=>{
            for (const t of r)t.reject(e);
        }), t.inFlight.then(()=>{
            t.inFlight = void 0;
            const r = t.pending;
            t.pending = void 0, void 0 !== r ? this.start(e, t, r.waiters) : this.states.get(e) === t && this.states.delete(e);
        });
    }
}
const Gu = 1e4;
class zu {
    constructor(e){
        this.options = e, this.queued = [], this.flushQueued = !1;
    }
    isEnabled() {
        return this.options.isEnabled();
    }
    probe(e) {
        return new Promise((t)=>{
            this.queued.push({
                agentId: e.agentId,
                entry: e.entry,
                resolve: t
            }), this.flushQueued || (this.flushQueued = !0, queueMicrotask(()=>this.flush()));
        });
    }
    flush() {
        this.flushQueued = !1;
        const e = this.queued;
        this.queued = [];
        const t = function(e) {
            if (!Number.isFinite(e) || e < 1) return 1;
            return Math.floor(e);
        }(this.options.maxEntries());
        for(let r = 0; r < e.length; r += t)this.send(e.slice(r, r + t));
    }
    async send(e) {
        let t;
        const r = new AbortController;
        let n;
        const s = new Promise((e)=>{
            n = setTimeout(()=>{
                r.abort(), e(void 0);
            }, this.options.timeoutMs ?? Gu), n.unref?.();
        });
        try {
            const n = this.options.checkVersions({
                entries: e.map((e)=>e.entry),
                signal: r.signal
            }).then((e)=>e, ()=>{});
            t = await Promise.race([
                n,
                s
            ]), void 0 !== t && t.length !== e.length && (t = void 0);
        } catch  {
            t = void 0;
        } finally{
            clearTimeout(n);
        }
        try {
            this.options.onBatch?.({
                entries: e.map((e, r)=>({
                        agentId: e.agentId,
                        status: t?.[r]?.status ?? "rpc_failed"
                    }))
            });
        } catch  {}
        e.forEach((e, r)=>{
            e.resolve(t?.[r]);
        });
    }
}
function Wu(e) {
    return Math.min(e, 3e4);
}
function Hu(e) {
    return new e.BackoffScheduler({
        baseDelayMs: 3e4,
        maxDelayMs: 6e5,
        jitter: .2
    });
}
function Ku(e) {
    return "passive" === e.fromState && "running" === e.toState;
}
class Vu {
    constructor(e, t, r, n, s, o, i = cu, a){
        this.harness = e, this.windowId = t, this.log = r, this.ports = n, this.onMountInvalidated = s, this.syncMetrics = o, this.syncConfig = i, this.onSyncDisabled = a, this.mountMetadata = new Map, this.disposables = [], this.resolvedStoreIds = new Map, this.resolvedStoreIdWriters = new Map, this.resolvedStoreIdListeners = new Set, this.mountBackoff = new Map, this.lastDiskFullToastMs = new Map, this.controllerSyncConfigLoadSeq = 0, this.controllerSyncConfigAppliedSeq = 0, this.syncConfigApplied = !1, this.dirtyMounts = new Set, this.fullSyncCoalescer = new ju({
            run: (e)=>this.runFullSyncForConflictNotices(e)
        }), this.scopedSyncCoalescer = new ju({
            run: (e, t, { timeoutMs: r })=>this.runScopedSyncForConflictNotices(e, t, r),
            resolveOutcome: (e, t)=>$u(e, t)
        }), this.dirtyPassiveStalledSince = new Map, this.dirtyPassiveStalledReported = new Set, this.inheritedConflictNoticeMounts = new Map, this.deferredLocalStores = new Map, this.lazySelfOpens = new Set, this.lazySelfOpenSettled = new Map, this.admittedResumeStores = new Set, this.disposed = !1, this.mintClients = new Map, this.periodicScheduler = new hi, this.versionProbe = new zu({
            isEnabled: ()=>this.isVersionProbeActive(),
            maxEntries: ()=>this.syncConfig.versionProbeMaxEntries,
            checkVersions: (e)=>this.checkAgentStoreVersions(e),
            onBatch: (e)=>this.syncMetrics?.emitter.onVersionProbeBatch?.(e)
        }), this.versionProbeIgnoredLogged = !1, this.holdNewSelfSessionsIdle = !1, this.staleStoreSweepRunning = !1, this.latestSyncConfig = i, this.syncPeriodicScheduler(i), this.mintRetryBudget = new us({
            ratio: i.mintRetryBudgetRatio,
            floor: i.mintRetryBudgetFloor
        }), this.mintGate = new ls({
            openThreshold: i.mintGateOpenThreshold,
            windowMs: i.mintGateWindowMs,
            openBaseMs: i.mintGateOpenBaseMs,
            openMaxMs: i.mintGateOpenMaxMs,
            enabled: ()=>this.syncConfig.mintRetryPolicyVersion >= 1,
            onStateChanged: (e)=>{
                this.syncMetrics?.emitter.onMintGateStateChanged?.(e);
            }
        }), this.logIgnoredVersionProbe(i);
        const c = globalThis;
        if ("function" == typeof c.addEventListener) {
            const e = ()=>this.onOnlineEvent();
            c.addEventListener("online", e), this.disposables.push({
                dispose: ()=>{
                    c.removeEventListener?.("online", e);
                }
            });
        }
        var l;
        l = this, pi().add(l);
    }
    isDirtyPassiveWatchdogEnabled() {
        return this.syncConfigApplied && this.syncConfig.dirtyPassiveStalledThresholdMs > 0 && this.syncConfig.passiveIndexPollIntervalMs > 0;
    }
    startDirtyPassiveWatchdog() {
        if (void 0 !== this.dirtyPassiveWatchdogTimer) return;
        if (!this.isDirtyPassiveWatchdogEnabled()) return;
        const e = Wu(this.syncConfig.dirtyPassiveStalledThresholdMs), t = setInterval(()=>this.checkDirtyPassiveStalls(), e);
        t.unref?.(), this.dirtyPassiveWatchdogTimer = t, this.disposables.push({
            dispose: ()=>{
                clearInterval(t), this.dirtyPassiveWatchdogTimer = void 0;
            }
        }), this.checkDirtyPassiveStalls();
    }
    stopDirtyPassiveWatchdog() {
        const e = this.dirtyPassiveWatchdogTimer;
        void 0 !== e && (clearInterval(e), this.dirtyPassiveWatchdogTimer = void 0);
    }
    syncPeriodicScheduler(e) {
        const t = this.periodicScheduler;
        if (e.sharedScheduler && t instanceof fi) return void t.setCoalesceMs(e.periodicCoalesceMs);
        if (!e.sharedScheduler && t instanceof hi) return;
        t.dispose(), this.periodicScheduler = gi(e, (e)=>{
            this.syncMetrics?.emitter.onSchedulerTick?.({
                sessions: e
            });
        });
        const r = this.sessions;
        if (void 0 !== r) for (const e of this.mountMetadata.keys()){
            const t = r.get(e);
            if (void 0 !== t && !t.isClosed() && !t.isClosing()) {
                t.setPeriodicScheduler(this.periodicScheduler);
                continue;
            }
            const n = r.getSlot(e);
            "opening" === n?.kind && n.promise.then((e)=>{
                e.isClosed() || e.isClosing() || e.setPeriodicScheduler(this.periodicScheduler);
            }, ()=>{});
        }
    }
    applyControllerSyncConfig(e) {
        const t = this.isDirtyPassiveWatchdogEnabled(), r = 0 === this.syncConfig.idleQuiesceMs;
        this.syncConfigApplied = !0, this.syncConfig = e, this.syncPeriodicScheduler(e), this.mintRetryBudget.setTimings({
            ratio: e.mintRetryBudgetRatio,
            floor: e.mintRetryBudgetFloor
        }), this.mintGate.setTimings({
            openThreshold: e.mintGateOpenThreshold,
            windowMs: e.mintGateWindowMs,
            openBaseMs: e.mintGateOpenBaseMs,
            openMaxMs: e.mintGateOpenMaxMs
        }), this.mintGate.setEnabled(e.mintRetryPolicyVersion >= 1), this.logIgnoredVersionProbe(e);
        for (const t of this.mintClients.values())t.setMintTiming({
            refreshBufferMs: e.tokenRefreshBufferMs,
            tokenRefreshJitterRatio: e.tokenRefreshJitterRatio,
            minTokenSlackMs: e.minTokenSlackMs,
            mintRetryMaxAttempts: e.mintRetryMaxAttempts,
            mintRetryBaseDelayMs: e.mintRetryBaseDelayMs,
            mintRetryMaxDelayMs: e.mintRetryMaxDelayMs
        }), t.retuneTransientMintBackoffs();
        r || 0 !== e.idleQuiesceMs ? r && e.idleQuiesceMs > 0 && this.idleQuiesceEnabledListener?.() : (this.holdNewSelfSessionsIdle = !1, this.reactivateSelfSessions()), "eager" === e.mountPolicy && this.mountDeferredLocalStoresNow(), this.applyLiveTimingToOpenSessions(e);
        const n = e.dirtyPassiveStalledThresholdMs > 0 && e.passiveIndexPollIntervalMs > 0;
        t || !n ? t && !n && (this.stopDirtyPassiveWatchdog(), this.dirtyPassiveStalledSince.clear(), this.dirtyPassiveStalledReported.clear()) : this.startDirtyPassiveWatchdog();
    }
    isVersionProbeActive() {
        const e = this.syncConfig;
        return e.versionProbeEnabled && e.remoteVersionEnabled && e.sharedScheduler;
    }
    logIgnoredVersionProbe(e) {
        const t = e.versionProbeEnabled && !(e.remoteVersionEnabled && e.sharedScheduler);
        t && !this.versionProbeIgnoredLogged && this.log.appendLine("[agent-store-sync] version_probe_enabled ignored: needs remote_version_enabled and shared_scheduler"), this.versionProbeIgnoredLogged = t;
    }
    async checkAgentStoreVersions(e) {
        const t = await this.loadModule();
        if (void 0 === t) throw new Error("agent-store-sync module load failed");
        const r = await this.ports.getAgentStoreRpcService?.() ?? ot, n = new t.BcsAgentStoreTransport({
            transport: this.ports.getConnectTransport(),
            rpcTimeoutMs: this.syncConfig.rpcTimeoutMs,
            service: r
        });
        return await n.checkVersions(e);
    }
    reactivateSelfSessions() {
        const e = this.sessions;
        if (void 0 !== e) for (const [t, r] of this.mountMetadata)"self" === r.mountKind && e.get(t)?.setConversationActivity("active");
    }
    applyLiveTimingToOpenSessions(e) {
        const t = this.sessions;
        if (void 0 !== t) for (const r of this.mountMetadata.keys()){
            const n = t.get(r);
            void 0 === n || n.isClosed() || n.isClosing() || n.setRemoteTiming({
                passiveIndexPollIntervalMs: e.passiveIndexPollIntervalMs,
                passiveRetryIntervalMs: e.passiveRetryIntervalMs,
                pathRefreshMinIntervalMs: e.pathRefreshMinIntervalMs,
                resumeGapThresholdMs: e.resumeGapThresholdMs,
                resumeDetectionMode: e.resumeDetectionMode,
                syncRoundProgressTimeoutMs: e.syncRoundProgressTimeoutMs,
                syncRoundHardCapMs: e.syncRoundHardCapMs,
                localStatFastPath: e.localStatFastPath,
                localStatFastPathAuditRate: e.localStatFastPathAuditRate,
                localStatRacyMarginMs: e.localStatRacyMarginMs,
                ...Du(e),
                ...qu(e)
            });
        }
    }
    recordHolderIndexProgress(e) {
        this.clearDirtyPassiveStallTracking(e);
    }
    clearDirtyPassiveStallTracking(e) {
        this.dirtyPassiveStalledSince.delete(e), this.dirtyPassiveStalledReported.delete(e);
    }
    checkDirtyPassiveStalls(e = performance.now()) {
        if (this.disposed) return;
        if (!this.isDirtyPassiveWatchdogEnabled()) return;
        const t = this.syncConfig.dirtyPassiveStalledThresholdMs, r = Date.now(), n = this.lastDirtyPassiveCheckWallMs;
        this.lastDirtyPassiveCheckWallMs = r, void 0 !== n && r - n > function(e) {
            return Math.max(e, Wu(e) + 1e4);
        }(t) && (this.dirtyPassiveStalledSince.clear(), this.dirtyPassiveStalledReported.clear());
        for (const e of [
            ...this.dirtyPassiveStalledSince.keys()
        ])this.dirtyMounts.has(e) || this.dirtyPassiveStalledSince.delete(e);
        for (const e of [
            ...this.dirtyPassiveStalledReported
        ])this.dirtyMounts.has(e) || this.dirtyPassiveStalledReported.delete(e);
        for (const r of this.dirtyMounts){
            const n = this.sessions?.get(r)?.getEngineState();
            if ("passive" !== n) {
                this.dirtyPassiveStalledSince.delete(r), this.dirtyPassiveStalledReported.delete(r);
                continue;
            }
            const s = this.dirtyPassiveStalledSince.get(r);
            if (void 0 === s) {
                this.dirtyPassiveStalledSince.set(r, e);
                continue;
            }
            const o = e - s;
            o >= t && !this.dirtyPassiveStalledReported.has(r) && (this.dirtyPassiveStalledReported.add(r), this.log.appendLine(`[agent-store-sync] ${r} has un-pushed writes stuck passive for ${o}ms with no lock-holder progress; the holder may be wedged`), this.syncMetrics?.emitter?.onDirtyPassiveStalled?.({
                agentId: r,
                stalledMs: o
            }));
        }
    }
    getSharedQueues(e) {
        return void 0 === this.queues && (this.queues = e.createAgentStoreSyncQueues(this.syncConfig)), this.queues;
    }
    async settleMountAttempt(e, t, r) {
        const n = mi();
        let s;
        try {
            s = await r();
        } catch (e) {
            s = Cs("not-started", Ps(e));
        }
        return this.recordMountOutcome(e, t, s, n), s;
    }
    recordMountOutcome(e, t, r, n) {
        this.syncMetrics?.emitter?.recordMountOutcome?.({
            agentId: t,
            mountKind: e,
            outcome: r.outcome,
            reason: r.reason,
            durationMs: mi() - n
        });
    }
    listMounts() {
        return [
            ...this.mountMetadata.values()
        ];
    }
    ensureMounted(e) {
        const t = mi();
        if (this.disposed) this.recordMountOutcome("self", e, Cs("not-started", "controller-disposed"), t);
        else try {
            (0, Wt._b)(e), this.ensureMountedSelf(e).catch((e)=>{
                this.log.appendLine(`[agent-store-sync] refusing unsafe self mount: ${this.ports.sanitizeLogMessage(e)}`);
            });
        } catch (r) {
            this.recordMountOutcome("self", e, Cs("invalid", "unsafe-mount-key"), t), this.log.appendLine(`[agent-store-sync] refusing unsafe agent id: ${String(r)}`);
        }
    }
    async ensureMountedSelfAwaited(e, t) {
        const r = mi();
        if (this.disposed) return this.recordMountOutcome("self", e, Cs("not-started", "controller-disposed"), r), Cs("not-started", "controller-disposed");
        try {
            (0, Wt._b)(e);
        } catch (t) {
            return this.recordMountOutcome("self", e, Cs("invalid", "unsafe-mount-key"), r), this.log.appendLine(`[agent-store-sync] refusing unsafe agent id: ${String(t)}`), Cs("invalid", "unsafe-mount-key");
        }
        const n = t?.timeoutMs ?? this.syncConfig.writeBarrierTimeoutMs;
        try {
            return await (0, ni.wj)(this.ensureMountedSelf(e), n, `Agent Store self mount for ${e} still opening after ${n}ms`);
        } catch (e) {
            return this.log.appendLine(`[agent-store-sync] awaited self mount did not complete: ${this.ports.sanitizeLogMessage(e)}`), Cs("not-started", "mount-still-opening");
        }
    }
    async ensureMountedSelf(e) {
        return await this.settleMountAttempt("self", e, async ()=>{
            const t = await this.loadModule();
            return void 0 === t ? Cs("not-started", "module-unavailable") : await this.ensureMountedSpec(t, t.createSelfMountSpec(e));
        });
    }
    async ensureMountedPeer(e) {
        return await this.settleMountAttempt("peer", e.peerAgentId, async ()=>{
            if (this.disposed) return Cs("not-started", "controller-disposed");
            let t, r;
            try {
                (0, Wt._b)(e.peerAgentId);
                const n = await this.loadModule();
                if (void 0 === n) return Cs("not-started", "module-unavailable");
                t = n, r = t.createPeerMountSpec(e.peerAgentId, {
                    ...void 0 !== e.alias ? {
                        alias: e.alias
                    } : {},
                    ...!0 === e.isProjectStore ? {
                        isProjectStore: !0
                    } : {}
                });
            } catch (e) {
                return this.log.appendLine(`[agent-store-sync] refusing unsafe peer mount: ${String(e)}`), Cs("invalid", "unsafe-mount-key");
            }
            const { isProjectStore: n, awaitInitialRound: s } = e;
            return await this.ensureMountedSpec(t, r, {
                isProjectStore: n,
                awaitInitialRound: s
            });
        });
    }
    async ensureMountedPrincipal(e) {
        return await this.settleMountAttempt("principal", e.sourceId, async ()=>{
            if (this.disposed) return Cs("not-started", "controller-disposed");
            if (!(0, Yn.XW)(e.sourceId)) return this.log.appendLine(`[agent-store-sync] refusing invalid principal source id for ${e.alias}`), Cs("invalid", "unsafe-mount-key");
            let t, r;
            try {
                (0, Wt.qh)(e.sourceId);
                const n = await this.loadModule();
                if (void 0 === n) return Cs("not-started", "module-unavailable");
                t = n, r = t.createPrincipalMountSpec(e.sourceId, {
                    alias: e.alias
                });
            } catch (e) {
                return this.log.appendLine(`[agent-store-sync] refusing unsafe principal mount: ${String(e)}`), Cs("invalid", "unsafe-mount-key");
            }
            return await this.ensureMountedSpec(t, r);
        });
    }
    async ensureMountedShare(e) {
        return await this.settleMountAttempt("share", e.shareId, async ()=>{
            if (this.disposed) return Cs("not-started", "controller-disposed");
            if (!(0, Wt.A8)(e.shareId)) return this.log.appendLine(`[agent-store-sync] refusing unsafe share mount key: ${e.shareId}`), Cs("invalid", "unsafe-mount-key");
            let t, r;
            try {
                (0, Wt.qh)(e.shareId);
                const n = await this.loadModule();
                if (void 0 === n) return Cs("not-started", "module-unavailable");
                t = n, r = t.createShareMountSpec(e.shareId, {
                    ...void 0 !== e.alias ? {
                        alias: e.alias
                    } : {}
                });
            } catch (e) {
                return this.log.appendLine(`[agent-store-sync] refusing unsafe share mount: ${String(e)}`), Cs("invalid", "unsafe-mount-key");
            }
            return await this.ensureMountedSpec(t, r);
        });
    }
    getResolvedStoreId(e) {
        return this.resolvedStoreIds.get(e);
    }
    getMountSyncState(e) {
        const t = this.sessions?.get(e);
        return void 0 !== t ? t.getSyncState() : this.mountBackoff.has(e) ? "sync-failed" : void 0;
    }
    onDidChangeResolvedStoreId(e) {
        return this.disposed ? {
            dispose () {}
        } : (this.resolvedStoreIdListeners.add(e), {
            dispose: ()=>{
                this.resolvedStoreIdListeners.delete(e);
            }
        });
    }
    async unmountPrincipal(e) {
        const t = this.mountMetadata.get(e);
        if (this.mountBackoff.delete(e), void 0 === t || "principal" !== t.mountKind) return;
        this.mountMetadata.delete(e), this.revokeResolvedStoreIdWriter(e), this.lastDiskFullToastMs.delete(e), this.dirtyMounts.delete(e), this.clearDirtyPassiveStallTracking(e);
        const r = this.sessions;
        if (void 0 !== r) try {
            await r.close(e, {
                flush: !1
            });
        } catch (t) {
            this.log.appendLine(`[agent-store-sync] principal unmount ${e} failed: ${this.ports.sanitizeLogMessage(t)}`);
        }
    }
    async sweepStaleStoreRoots() {
        if (this.disposed) return;
        const e = this.latestSyncConfig, t = e.storeEvictionMode;
        return "off" !== t ? "legacy_sweep" === t ? this.sweepLegacyStaleStoreRoots(e.staleStoreRootMaxIdleMs) : void await this.evictIdleStoreRoots(e, t) : void 0;
    }
    async sweepLegacyStaleStoreRoots(e) {
        if (!(e <= 0)) try {
            const t = await _i({
                store: this.harness,
                maxIdleMs: e,
                windowId: `${this.windowId}:stale-root-sweep`,
                isMountLive: (e)=>this.mountMetadata.has(e) || this.isMountReserved(e)
            });
            return this.log.appendLine(`[agent-store-sync] stale store sweep removed=${t.length}` + (t.length > 0 ? ` ${t.join(",")}` : "")), t;
        } catch (e) {
            return void this.log.appendLine(`[agent-store-sync] stale store sweep failed: ${this.ports.sanitizeLogMessage(e)}`);
        }
    }
    async evictIdleStoreRoots(e, t) {
        if (e.staleStoreRootMaxIdleMs <= 0) return;
        const r = h.join(this.harness.base, this.harness.tmpDirName);
        if (!Dl({
            storesRoot: r,
            minIntervalMs: e.storeEvictionMinIntervalMs
        })) return;
        let n = !1;
        try {
            const r = await this.loadSqlite();
            if (this.disposed) return;
            n = !0, await Ul({
                store: this.harness,
                mode: t,
                maxIdleMs: e.staleStoreRootMaxIdleMs,
                quarantineMs: e.storeEvictionQuarantineMs,
                markTtlMs: e.storeEvictionMarkTtlMs,
                maxRootsPerRun: e.storeEvictionMaxRootsPerRun,
                maxHashBytesPerRun: e.storeEvictionMaxHashBytesPerRun,
                statFastPathMode: e.localStatFastPath,
                isMountLive: (e)=>this.mountMetadata.has(e) || this.isMountReserved(e),
                windowId: `${this.windowId}:store-eviction`,
                sqlite: r,
                log: (e)=>{
                    this.log.appendLine(`[agent-store-sync] store eviction ${e}`);
                },
                onOutcome: (e)=>{
                    this.syncMetrics?.emitter.recordStoreEviction?.({
                        mountKey: e.mountKey,
                        outcome: e.outcome,
                        reason: e.reason,
                        mode: t,
                        hashedBytes: e.hashedBytes,
                        durationMs: e.durationMs
                    });
                }
            });
        } catch (e) {
            this.log.appendLine(`[agent-store-sync] store eviction failed: ${this.ports.sanitizeLogMessage(e)}`);
        } finally{
            n || ql(r);
        }
    }
    kickStaleStoreSweep() {
        if (this.staleStoreSweepRunning || this.disposed) return;
        this.staleStoreSweepRunning = !0;
        const e = setTimeout(()=>{
            this.sweepStaleStoreRoots().finally(()=>{
                this.staleStoreSweepRunning = !1;
            });
        }, 0);
        e.unref?.();
    }
    isMountReserved(e) {
        const t = this.sessions?.getSlot(e);
        return "opening" === t?.kind || "closing" === t?.kind || "open" === t?.kind && !t.session.isClosed();
    }
    reconcileMountMetadata(e, t, r) {
        const n = this.mountMetadata.get(t);
        if (void 0 === n) return void this.mountMetadata.set(t, r);
        const { result: s, canonical: o } = e.reconcileMountCollision({
            existing: n,
            incoming: r
        });
        if ("refused" === s) this.log.appendLine(`[agent-store-sync] refusing to promote share mount ${r.mountKey} to self`);
        else if ("promoted" === s) {
            this.log.appendLine(`[agent-store-sync] promoting ${r.mountKey} from peer to self`);
            const n = this.sessions?.get(t);
            void 0 !== n && (this.writeMountConfig(e, o), this.holdNewSelfSessionsIdle && this.syncConfig.idleQuiesceMs > 0 && n.setConversationActivity("idle"));
        }
        this.mountMetadata.set(t, o);
    }
    publishMountSuccess(e, t, r) {
        this.mountBackoff.delete(t);
        const n = this.mountMetadata.get(t);
        void 0 !== n && n.mountKey === t && "principal" !== n.mountKind && this.writeMountConfig(e, n), this.log.appendLine(`[agent-store-sync] mounted ${t} (state=${r.getEngineState()})`), this.holdNewSelfSessionsIdle && "self" === n?.mountKind && this.syncConfig.idleQuiesceMs > 0 && r.setConversationActivity("idle"), this.refreshSessionRemoteTiming(t);
    }
    raceReasonFor(e) {
        return this.disposed ? "controller-disposed" : e.isClosed() || e.isClosing() ? "session-closed" : "session-superseded";
    }
    raceOutcome(e, t, r) {
        if (this.disposed || r.isClosed() || r.isClosing() || e.get(t) !== r) return Cs("not-started", this.raceReasonFor(r));
    }
    async joinOpenSession(e) {
        const { sessions: t, mountKey: r, session: n, reason: s } = e;
        return this.promoteMountedProjectStore(n, e.isProjectStore), e.awaitInitialRound && await n.awaitInitialRound(), this.raceOutcome(t, r, n) ?? Cs("already-present", s, n.getSyncState());
    }
    async ensureMountedSpec(e, t, r = {}) {
        const { isProjectStore: n } = r, s = !1 !== r.awaitInitialRound, o = t.mountKey, i = this.mountBackoff.get(o);
        if (void 0 !== i && Date.now() < i.readyAtMs) return Cs("cooling-down", "mount-backoff");
        const a = this.getSessions(e), c = a.getSlot(o);
        if ("open" === c?.kind && !c.session.isClosed() && !c.session.isClosing()) return this.reconcileMountMetadata(e, o, t), await this.joinOpenSession({
            sessions: a,
            mountKey: o,
            session: c.session,
            reason: "slot-open",
            isProjectStore: n,
            awaitInitialRound: s
        });
        if ("opening" === c?.kind) {
            this.reconcileMountMetadata(e, o, t);
            const r = c.promise;
            try {
                const t = await r, i = this.raceOutcome(a, o, t);
                return void 0 !== i ? i : (this.publishMountSuccess(e, o, t), await this.joinOpenSession({
                    sessions: a,
                    mountKey: o,
                    session: t,
                    reason: "slot-joined",
                    isProjectStore: n,
                    awaitInitialRound: s
                }));
            } catch  {
                return this.isMountReserved(o) || (this.mountMetadata.delete(o), this.revokeResolvedStoreIdWriter(o)), Cs("not-started", "open-rejected");
            }
        }
        if ("closing" === c?.kind) {
            try {
                await c.promise;
            } catch  {}
            if (this.disposed) return Cs("not-started", "controller-disposed");
        }
        this.reconcileMountMetadata(e, o, t);
        try {
            const t = await a.open(o, (e)=>this.openSession(e, {
                    isProjectStore: n,
                    awaitInitialRound: !1
                }));
            s && await t.awaitInitialRound();
            const r = this.raceOutcome(a, o, t);
            return void 0 !== r ? r : (this.publishMountSuccess(e, o, t), this.promoteMountedProjectStore(t, n), this.kickStaleStoreSweep(), Cs("mounted", "opened", t.getSyncState()));
        } catch (t) {
            this.isMountReserved(o) || (this.mountMetadata.delete(o), this.revokeResolvedStoreIdWriter(o)), this.dirtyMounts.delete(o), this.clearDirtyPassiveStallTracking(o);
            const r = this.mountBackoff.get(o)?.scheduler ?? Hu(e), n = r.recordFailure();
            return this.mountBackoff.set(o, {
                scheduler: r,
                readyAtMs: Date.now() + n
            }), this.log.appendLine(`[agent-store-sync] mount ${o} failed: ${this.ports.sanitizeLogMessage(t)} (next retry in ${Math.round(n / 1e3)}s)`), Cs("not-started", Ps(t));
        }
    }
    async forceSyncMountedIfPresent(e) {
        if ("lazy" === this.syncConfig.mountPolicy && this.shouldJoinLazySelfOpen(e)) {
            if ("absent" === await this.prepareExplicitSelfSync(e, "flush")) return {
                kind: "not-mounted"
            };
        }
        const t = this.sessions?.get(e);
        if (void 0 === t) return {
            kind: "not-mounted"
        };
        const r = await t.forceSync();
        return void 0 === r ? {
            kind: "mounted-no-summary"
        } : {
            kind: "synced",
            summary: r
        };
    }
    async prepareCloudSubagentStores(e) {
        e.signal.throwIfAborted();
        const t = e.parentStoreId.trim();
        if (0 === t.length) return [];
        if (!(0, Yn.v8)(t)) return [];
        await this.ensureMountedSelf(t), e.signal.throwIfAborted();
        const r = (0, Wt.f$)(this.pathParts(t));
        try {
            (0, Wt.rs)(r);
        } catch (e) {
            return this.log.appendLine(`[agent-store-sync] skipping cloud subagent store preparation for ${t}: ${this.ports.sanitizeLogMessage(e)}`), [];
        }
        const n = [];
        for (const r of [
            t,
            ...e.additionalStoreIds
        ]){
            const e = r.trim();
            0 !== e.length && !n.includes(e) && (0, Yn.v8)(e) && n.push(e);
        }
        for (const t of n)e.signal.throwIfAborted(), await this.forceSyncMountedIfPresent(t);
        return e.signal.throwIfAborted(), n;
    }
    listConflictJournalRefs(e) {
        return this.listConflictNoticeMounts(e).filter((e)=>!1 !== e.deliverEvents).map((e)=>({
                journalPath: e.journalPath
            }));
    }
    storeMountRoots() {
        const e = [], t = new Set, r = (r)=>{
            if (!t.has(r)) {
                t.add(r);
                try {
                    const t = this.pathParts(r);
                    e.push({
                        mountKey: r,
                        filesDir: (0, Wt.f$)(t)
                    });
                } catch  {}
            }
        };
        for (const e of this.mountMetadata.keys())r(e);
        for (const e of this.deferredLocalStores.keys())r(e);
        for (const e of this.lazySelfOpens)r(e);
        return e;
    }
    wakeForWrittenPath({ writtenPath: e, basePaths: t }) {
        const r = void 0 !== t && t.length > 0 ? t : [
            void 0
        ];
        let n = !1;
        for (const t of r){
            const r = tu((0, si.o1)(e, t), this.storeMountRoots());
            if (void 0 === r) continue;
            if (this.dirtyMounts.add(r.mountKey), this.mountDeferredStoreForWrite(r.mountKey), n) continue;
            const s = this.sessions?.get(r.mountKey);
            void 0 !== s && "running" === s.getEngineState() && (s.wake(), n = !0);
        }
    }
    setConversationActivity(e, t) {
        if (this.disposed) return;
        if ("idle" === t && 0 === this.syncConfig.idleQuiesceMs) return;
        const r = this.mountMetadata.get(e);
        void 0 !== r && "self" === r.mountKind && this.sessions?.get(e)?.setConversationActivity(t);
    }
    quiesceIdleSelfSessions() {
        if (!this.disposed && 0 !== this.syncConfig.idleQuiesceMs) {
            this.holdNewSelfSessionsIdle = !0;
            for (const [e, t] of this.mountMetadata)"self" === t.mountKind && this.sessions?.get(e)?.setConversationActivity("idle");
        }
    }
    releaseNewSelfSessionHold() {
        this.holdNewSelfSessionsIdle = !1;
    }
    setIdleQuiesceEnabledListener(e) {
        this.idleQuiesceEnabledListener = e;
    }
    idleQuiesceMs() {
        return this.syncConfig.idleQuiesceMs;
    }
    wakeAllRunningSessions() {
        const e = this.sessions;
        if (void 0 !== e) for (const [t, r] of this.mountMetadata){
            "peer" !== r.mountKind && this.dirtyMounts.add(t);
            const n = e.get(t);
            void 0 !== n && "running" === n.getEngineState() && n.wake();
        }
        this.mountDeferredLocalStoresWithFiles();
    }
    noteInheritedConflictNoticeMounts(e, t) {
        const r = e.trim();
        if (0 === r.length) return;
        const n = new Set;
        for (const e of t){
            const t = e.trim();
            t.length > 0 && t !== r && n.add(t);
        }
        0 !== n.size ? this.inheritedConflictNoticeMounts.set(r, n) : this.inheritedConflictNoticeMounts.delete(r);
    }
    clearInheritedConflictNoticeMounts(e) {
        const t = e.trim();
        0 !== t.length && this.inheritedConflictNoticeMounts.delete(t);
    }
    listConflictNoticeMounts(e) {
        const t = [], r = void 0 !== e ? this.inheritedConflictNoticeMounts.get(e) : void 0, n = new Set, s = (e, r)=>{
            if (!n.has(e)) try {
                const s = this.pathParts(e);
                t.push({
                    mountKey: e,
                    journalPath: (0, Wt.VN)(s),
                    ...r ? {} : {
                        deliverEvents: !1
                    }
                }), n.add(e);
            } catch  {}
        };
        for (const [t, n] of this.mountMetadata){
            const o = void 0 === e || t === e, i = gs(n), a = r?.has(t) ?? !1;
            (o || i || a) && s(t, o || i);
        }
        if (void 0 !== e && s(e, !0), void 0 !== r) for (const e of r)s(e, !1);
        return t;
    }
    resolveConflictNoticeMountKeyForPath({ absPath: e, basePaths: t }) {
        const r = void 0 !== t && t.length > 0 ? t : [
            void 0
        ];
        for (const t of r){
            const r = (0, si.o1)(e, t), n = tu(r, this.storeMountRoots())?.mountKey;
            if (void 0 !== n) return n;
        }
    }
    resolveConflictNoticeWrittenPath({ absPath: e, basePaths: t }) {
        const r = void 0 !== t && t.length > 0 ? t : [
            void 0
        ];
        for (const t of r){
            const r = (0, si.o1)(e, t);
            if (void 0 !== tu(r, this.storeMountRoots())) return r;
        }
    }
    isConflictNoticeMountDirty(e) {
        return !this.isMountSyncDenied(e) && this.dirtyMounts.has(e);
    }
    isMountSyncDenied(e) {
        return 1 === this.syncConfig.skipDeniedMountSync && void 0 !== this.mountSyncDeniedUntilMs(e);
    }
    conflictNoticeSkipIsDenied(e, t) {
        return this.isMountSyncDenied(e) || !0 === t.isSyncRoundDenied?.();
    }
    mountSyncDeniedUntilMs(e) {
        return this.mintClients.get(e)?.mintDeniedUntilMs();
    }
    async forceSyncForConflictNotices(e) {
        return this.isMountSyncDenied(e) ? "denied" : await this.fullSyncCoalescer.request(e);
    }
    async runFullSyncForConflictNotices(e) {
        if ("lazy" === this.syncConfig.mountPolicy && this.shouldJoinLazySelfOpen(e)) {
            if ("absent" === await this.prepareExplicitSelfSync(e, "explicit_sync")) return "absent";
        }
        const t = await this.sessionAfterOpen(e);
        if (this.isMountSyncDenied(e)) return "denied";
        if (void 0 === t) return "absent";
        const r = await t.forceSync();
        return void 0 === r ? this.conflictNoticeSkipIsDenied(e, t) ? "denied" : "passive" : r.errors.length > 0 ? "error" : "synced";
    }
    async resolveCitedPath(e) {
        const { mountKey: t, relPath: r, indexTierEnabled: n } = e, s = this.syncMetrics?.emitter, o = performance.now();
        s?.recordCitationStarted({
            agentId: t
        });
        const i = await this.ensureMountedPeer({
            peerAgentId: t,
            isProjectStore: !0 === e.isProjectStore,
            awaitInitialRound: !1
        }).then((e)=>e.outcome).catch(()=>"invalid"), a = await li({
            citedPath: h.join((0, Wt.f$)(this.pathParts(t)), r),
            relPath: r,
            mountReady: "mounted" === i || "already-present" === i,
            indexTierEnabled: n,
            waitBudget: e.waitBudget ?? oi,
            lookupIndex: ()=>this.sessions?.get(t)?.getIndexEntry(r) ?? {
                    kind: "unavailable"
                },
            pullPaths: (e)=>this.pullAgentStorePaths({
                    mountKey: t,
                    relPaths: e
                }),
            onStaleness: (e)=>{
                s?.recordCitationStaleness({
                    agentId: t,
                    state: e
                });
            }
        });
        return s?.recordCitationResolution({
            agentId: t,
            durationMs: performance.now() - o,
            tier: a.tier,
            outcome: a.outcome,
            reason: a.reason
        }), a.outcome;
    }
    async refreshPeerPaths(e) {
        const t = await this.ensureMountedPeer({
            peerAgentId: e.peerAgentId,
            isProjectStore: !0 === e.isProjectStore,
            awaitInitialRound: !1
        }).catch(()=>{});
        if (void 0 === t || "mounted" !== t.outcome && "already-present" !== t.outcome) return {
            kind: "unavailable"
        };
        const r = await this.sessionAfterOpen(e.peerAgentId);
        return void 0 === r ? {
            kind: "unavailable"
        } : await r.refreshPaths(e.relPaths);
    }
    async pullAgentStorePaths(e) {
        const t = await this.sessionAfterOpen(e.mountKey);
        return await t?.pullPaths(e.relPaths) ?? {
            kind: "unavailable"
        };
    }
    async sessionAfterOpen(e) {
        const t = this.sessions;
        if (void 0 === t) return;
        const r = t.getSlot(e);
        if ("opening" === r?.kind) try {
            await r.promise;
        } catch  {
            return;
        }
        return t.get(e);
    }
    async forceSyncPathForConflictNotices(e) {
        const { mountKey: t, absPath: r, basePaths: n, timeoutMs: s } = e;
        if (this.isMountSyncDenied(t)) return "denied";
        const o = this.resolveRelPathWithinMount(t, r, n);
        return void 0 === o ? await this.forceSyncForConflictNotices(t) : await this.scopedSyncCoalescer.request(t, [
            o
        ], {
            timeoutMs: s
        });
    }
    async forceSyncPathsForConflictNotices(e) {
        const { mountKey: t, absPaths: r, basePaths: n, timeoutMs: s } = e;
        if (this.isMountSyncDenied(t)) return "denied";
        const o = [];
        for (const e of r){
            const r = this.resolveRelPathWithinMount(t, e, n);
            if (void 0 === r) return await this.forceSyncForConflictNotices(t);
            o.push(r);
        }
        return 0 === o.length ? await this.forceSyncForConflictNotices(t) : await this.scopedSyncCoalescer.request(t, o, {
            timeoutMs: s
        });
    }
    shouldJoinLazySelfOpen(e) {
        const t = this.mountMetadata.get(e);
        return void 0 !== t ? (this.lazySelfOpens.delete(e), "self" === t.mountKind) : this.deferredLocalStores.has(e) || this.lazySelfOpens.has(e) || this.admittedResumeStores.has(e);
    }
    async runScopedSyncForConflictNotices(e, t, r) {
        if ("lazy" === this.syncConfig.mountPolicy && this.shouldJoinLazySelfOpen(e)) {
            if ("absent" === await this.prepareExplicitSelfSync(e, "explicit_sync", {
                openEmpty: !0
            })) return {
                kind: "absent"
            };
        }
        const n = await this.sessionAfterOpen(e);
        if (this.isMountSyncDenied(e)) return {
            kind: "denied"
        };
        if (void 0 === n) return {
            kind: "absent"
        };
        const s = await n.syncPaths(t, {
            passiveWaitTimeoutMs: r ?? this.syncConfig.writeBarrierTimeoutMs
        });
        return void 0 === s ? this.conflictNoticeSkipIsDenied(e, n) ? {
            kind: "denied"
        } : {
            kind: "passive"
        } : {
            kind: "summary",
            summary: s
        };
    }
    resolveRelPathWithinMount(e, t, r) {
        const n = void 0 !== r && r.length > 0 ? r : [
            void 0
        ], s = this.storeMountRoots();
        for (const r of n){
            const n = (0, si.o1)(t, r), o = tu(n, s);
            if (void 0 === o || o.mountKey !== e) continue;
            const i = h.relative(o.filesDir, n);
            if (0 === i.length || i.startsWith("..") || h.isAbsolute(i)) return;
            try {
                return v(i);
            } catch  {
                return;
            }
        }
    }
    writeBarrierTimeoutMs() {
        return this.syncConfig.writeBarrierTimeoutMs;
    }
    mountPolicy() {
        return this.syncConfig.mountPolicy;
    }
    recordMountRequested(e, t) {
        "write_detected" === t && this.dirtyMounts.add(e), "resume" === t && this.admittedResumeStores.add(e);
        try {
            this.syncMetrics?.emitter.recordMountRequested?.({
                agentId: e,
                reason: t,
                policy: this.syncConfig.mountPolicy
            });
        } catch  {}
    }
    hasSelfMount(e) {
        const t = this.mountMetadata.get(e)?.mountKind;
        if (void 0 !== t) return "self" === t;
        const r = this.sessions?.get(e);
        return void 0 !== r && !r.isClosed();
    }
    hasAdmittedResume(e) {
        return this.admittedResumeStores.has(e);
    }
    hasNonSelfMount(e) {
        const t = this.mountMetadata.get(e)?.mountKind;
        return void 0 !== t && "self" !== t;
    }
    localStoreIndexIsPopulated(e) {
        try {
            return p.statSync((0, Wt.mD)(this.pathParts(e))).size > 0;
        } catch  {
            return !1;
        }
    }
    noteDeferredLocalStore(e, t) {
        this.hasSelfMount(e) || this.hasNonSelfMount(e) || this.deferredLocalStores.has(e) || this.deferredLocalStores.set(e, t);
    }
    forgetDeferredLocalStore(e) {
        this.deferredLocalStores.delete(e);
    }
    async prepareExplicitSelfSync(e, t, r) {
        if ("lazy" !== this.syncConfig.mountPolicy) return "proceed";
        if (this.hasNonSelfMount(e)) return "absent";
        if (!this.hasSelfMount(e)) {
            if (!0 !== r?.openEmpty && !this.localFilesDirHasEntries(e) && !this.lazyEmptyDirShouldOpen(e)) return "absent";
            this.recordMountRequested(e, t);
        }
        const n = await this.ensureMountedSelfAwaited(e);
        return "mounted" === n.outcome || "already-present" === n.outcome ? (this.forgetDeferredLocalStore(e), this.lazySelfOpens.delete(e), "proceed") : "absent";
    }
    localFilesDirHasEntries(e) {
        try {
            return p.readdirSync((0, Wt.f$)(this.pathParts(e))).length > 0;
        } catch  {
            return !1;
        }
    }
    lazyEmptyDirShouldOpen(e) {
        return !(!this.admittedResumeStores.has(e) && !this.lazySelfOpens.has(e)) || "mount" === Qn({
            agentId: e,
            policy: "lazy",
            reason: "explicit_sync",
            indexPopulated: this.localStoreIndexIsPopulated(e)
        }).action;
    }
    requestDeferredSelfMount(e, t) {
        return this.beginLazySelfOpen(e, t);
    }
    openAdmittedLazySelf(e, t) {
        return this.hasNonSelfMount(e) ? Promise.resolve() : this.hasSelfMount(e) ? (this.deferredLocalStores.delete(e), this.lazySelfOpens.delete(e), Promise.resolve()) : this.startLazySelfOpen(e, t);
    }
    beginLazySelfOpen(e, t) {
        if (this.hasNonSelfMount(e)) return Promise.resolve();
        if (this.hasSelfMount(e)) return this.deferredLocalStores.delete(e), this.lazySelfOpens.delete(e), Promise.resolve();
        const r = this.lazySelfOpenSettled.get(e);
        return void 0 !== r ? r : this.deferredLocalStores.has(e) ? this.startLazySelfOpen(e, t) : Promise.resolve();
    }
    startLazySelfOpen(e, t) {
        const r = this.lazySelfOpenSettled.get(e);
        if (void 0 !== r) return r;
        this.lazySelfOpens.add(e), this.recordMountRequested(e, t);
        const n = this.ensureMountedSelf(e).then((r)=>{
            this.lazySelfOpens.delete(e), this.hasSelfMount(e) || "mounted" === r.outcome || "already-present" === r.outcome ? this.deferredLocalStores.delete(e) : this.deferredLocalStores.has(e) || this.deferredLocalStores.set(e, t);
        }).finally(()=>{
            this.lazySelfOpenSettled.delete(e);
        });
        return this.lazySelfOpenSettled.set(e, n), n;
    }
    mountDeferredStoreForWrite(e) {
        this.beginLazySelfOpen(e, "write_detected");
    }
    mountDeferredLocalStoresWithFiles() {
        if ("lazy" === this.syncConfig.mountPolicy) for (const [e, t] of [
            ...this.deferredLocalStores.entries()
        ]){
            const r = this.localFilesDirHasEntries(e);
            (r || this.lazyEmptyDirShouldOpen(e)) && this.beginLazySelfOpen(e, r ? "write_detected" : t);
        }
    }
    mountDeferredLocalStoresNow() {
        const e = [
            ...this.deferredLocalStores.entries()
        ];
        for (const [t, r] of e)this.hasSelfMount(t) || this.hasNonSelfMount(t) ? this.deferredLocalStores.delete(t) : this.startLazySelfOpen(t, r);
    }
    recordWriteBarrier(e) {
        try {
            this.syncMetrics?.emitter.recordWriteBarrier?.({
                agentId: this.windowId,
                durationMs: e.durationMs,
                outcome: e.outcome
            });
        } catch  {}
    }
    async dispose() {
        if (!this.disposed) {
            var e;
            this.disposed = !0, this.deferredLocalStores.clear(), this.lazySelfOpens.clear(), this.lazySelfOpenSettled.clear(), this.admittedResumeStores.clear(), this.resolvedStoreIds.clear(), this.resolvedStoreIdWriters.clear(), this.resolvedStoreIdListeners.clear(), e = this, pi().delete(e);
            for (const e of this.disposables.splice(0))try {
                e.dispose();
            } catch  {}
            for (const e of [
                ...this.mountMetadata.keys()
            ])this.logShutdownFlushSkipIfNeeded(e);
            try {
                await this.sessions?.closeAll({
                    flush: !0
                });
            } catch (e) {
                this.log.appendLine(`[agent-store-sync] dispose failed: ${this.ports.sanitizeLogMessage(e)}`);
            } finally{
                this.mountMetadata.clear(), this.lastDiskFullToastMs.clear(), this.dirtyMounts.clear(), this.dirtyPassiveStalledSince.clear(), this.dirtyPassiveStalledReported.clear(), this.inheritedConflictNoticeMounts.clear(), this.periodicScheduler.dispose();
            }
        }
    }
    logShutdownFlushSkipIfNeeded(e) {
        const t = this.guardedPathsForMount(e);
        if (void 0 !== t) try {
            for (const e of t)(0, Wt.rs)(e);
        } catch (t) {
            this.log.appendLine(`[agent-store-sync] skipping final flush for ${e}: ${this.ports.sanitizeLogMessage(t)}`);
        }
    }
    pathParts(e) {
        return (0, Wt.WX)(this.harness, e);
    }
    guardedPathsForMount(e) {
        try {
            const t = this.pathParts(e), r = (0, Wt.DE)(t), n = (0, Wt.mD)(t), s = (0, Wt.N1)(t), o = (0, Wt.BE)(t), i = (0, Wt.VN)(t);
            return [
                r,
                n,
                s,
                o,
                i,
                (0, Wt.AC)(t)
            ];
        } catch  {
            return;
        }
    }
    async openSession(e, t = {}) {
        const r = await this.loadModule();
        if (void 0 === r) throw new Error("agent-store-sync module load failed");
        const n = this.pathParts(e), s = (0, Wt.f$)(n), o = (0, Wt.DE)(n), i = (0, Wt.mD)(n), a = [
            o,
            i,
            (0, Wt.N1)(n),
            (0, Wt.BE)(n),
            (0, Wt.VN)(n),
            (0, Wt.AC)(n)
        ], c = ()=>{
            for (const e of a)(0, Wt.rs)(e);
        };
        c();
        const l = await this.loadSqlite();
        c();
        const u = this.mountMetadata.get(e);
        if (void 0 === u) throw new Error(`missing mount metadata for ${e}`);
        const d = await this.ports.getAgentStoreRpcService?.() ?? ot, p = new r.BcsAgentStoreTransport({
            transport: this.ports.getConnectTransport(),
            rpcTimeoutMs: this.syncConfig.rpcTimeoutMs,
            service: d,
            largeTargetTtlMs: this.syncConfig.largeTargetTtlMs
        }), m = this.syncMetrics, h = m?.emitter;
        h?.bindRpcService(d);
        const f = Symbol(e);
        this.resolvedStoreIdWriters.set(e, f);
        const g = ()=>this.syncConfig.mintRetryPolicyVersion, y = new r.TokenCachingAgentStoreClient(p, {
            metrics: h,
            refreshBufferMs: this.syncConfig.tokenRefreshBufferMs,
            tokenRefreshJitterRatio: this.syncConfig.tokenRefreshJitterRatio,
            minTokenSlackMs: this.syncConfig.minTokenSlackMs,
            mintTerminalDenialCacheMs: ()=>this.syncConfig.mintTerminalDenialCacheMs,
            mintTransientNegativeCacheBaseMs: ()=>this.syncConfig.mintTransientNegativeCacheBaseMs,
            mintTransientNegativeCacheMaxMs: ()=>this.syncConfig.mintTransientNegativeCacheMaxMs,
            mintRetryBudget: this.mintRetryBudget,
            mintGate: this.mintGate,
            mintRetryPolicyVersion: g,
            mintRetryMaxAttempts: this.syncConfig.mintRetryMaxAttempts,
            mintRetryBaseDelayMs: this.syncConfig.mintRetryBaseDelayMs,
            mintRetryMaxDelayMs: this.syncConfig.mintRetryMaxDelayMs,
            onResolvedStoreIdChanged: ({ storeId: t })=>{
                this.updateResolvedStoreId(e, t, f);
            },
            onSyncDisabledMint: (e)=>{
                this.onSyncDisabled?.(e.message, {
                    retryAfterMs: e.retryAfterMs
                });
            }
        });
        this.mintClients.set(e, y);
        const w = new r.RetryingAgentStoreClient(y, {
            listener: h,
            maxAttempts: this.syncConfig.rpcRetryMaxAttempts,
            baseDelayMs: this.syncConfig.rpcRetryBaseDelayMs,
            maxDelayMs: this.syncConfig.rpcRetryMaxDelayMs,
            multiplier: this.syncConfig.rpcRetryMultiplier,
            mintRetryPolicyVersion: g
        }), v = "self" === u.mountKind ? w : new r.MountScopedAgentStoreClient({
            inner: w,
            target: u.remoteTarget
        }), _ = this.getSharedQueues(r), b = this.ports.getCursorCreds()?.backendUrl ?? "", S = r.isLocalAgentStoreBackendUrl(b);
        let k;
        try {
            return k = await Lc({
                store: this.harness,
                mountKey: e,
                windowId: this.windowId,
                purpose: "foreground",
                metrics: h
            }), k.acquired || this.log.appendLine(`[agent-store-sync] ${e} store pin not acquired` + (void 0 !== k.error ? `: ${this.ports.sanitizeLogMessage(k.error)}` : "")), await r.AgentStoreSyncSession.open({
                key: e,
                ...t,
                rootPin: k,
                client: v,
                openIndex: (e)=>r.openAgentStoreLocalIndex(e, {
                        sqlite: l,
                        statSchemaEnabled: hn(this.syncConfig.localStatFastPath, process.platform)
                    }),
                queues: _,
                validatePresignedUrl: r.createAgentStorePresignedUrlValidatorForBackend(b),
                blobTransfer: new r.HttpAgentStoreBlobTransfer({
                    allowInsecureScheme: S,
                    maxFileSizeBytes: this.syncConfig.maxFileSizeBytes,
                    blobIdleTimeoutMs: this.syncConfig.blobIdleTimeoutMs,
                    blobConnectTimeoutMs: this.syncConfig.blobConnectTimeoutMs,
                    onTransferTiming: (e)=>{
                        h?.onBlobTransferTiming?.(e);
                    }
                }),
                syncMode: u.syncMode,
                lockProvider: this.lockProviderFor(r, e),
                lockOwnerId: this.windowId,
                paths: {
                    filesDir: s,
                    tmpDir: o,
                    indexPath: i
                },
                guardedPaths: a,
                validatePaths: c,
                metricsEmitter: h,
                pathHashSalt: m?.pathHashSalt,
                ...r.agentStoreSyncSessionOptionsFromClientConfig(this.syncConfig, t.isProjectStore),
                periodicScheduler: this.periodicScheduler,
                versionProbe: this.versionProbe,
                mintGate: this.mintGate,
                mintDeniedUntilMs: ()=>y.mintDeniedUntilMs(),
                skipDeniedMountSync: ()=>1 === this.syncConfig.skipDeniedMountSync,
                onPassiveIndexUpdated: (e)=>{
                    this.recordHolderIndexProgress(e.agentId);
                },
                onResumeDetected: (e)=>{
                    this.clearDirtyPassiveStallTracking(e.agentId);
                },
                onStateChanged: (e)=>{
                    this.log.appendLine(`[agent-store-sync] ${e.agentId} ${e.fromState} → ${e.toState} (${e.reason})`), "lock_lost" === e.reason && this.log.appendLine(`[agent-store-sync] ${e.agentId} relinquished write lock (lock_lost); going passive`), Ku(e) && h?.onLockEvent?.({
                        agentId: e.agentId,
                        kind: "passive_took_over"
                    });
                },
                onSyncSummary: (t)=>{
                    this.handleSyncSummary({
                        mountKey: e,
                        summary: t,
                        sync: r
                    });
                },
                onSyncError: (t)=>{
                    if (function(e) {
                        return "object" == typeof e && null !== e && "code" in e && "string" == typeof e.code;
                    }(t)) return this.log.appendLine(`[agent-store-sync] ${e} ${t.code}` + (void 0 === t.relPath ? "" : ` relPathHash=${r.hashRelPath({
                        relPath: t.relPath,
                        salt: this.windowId
                    })}`) + `: ${this.ports.sanitizeLogMessage(t.message)}`), void ("fs_write_failed" === t.code && this.maybeShowDiskFullToast(e));
                    this.log.appendLine(`[agent-store-sync] ${e} sync failed: ${this.ports.sanitizeLogMessage(t)}`), r.isAgentStoreSyncDisabledError(t) && this.onSyncDisabled?.(t instanceof Error ? t.message : String(t), {
                        retryAfterMs: je(t)
                    });
                },
                onInvalidated: (t)=>{
                    this.handleSessionInvalidated({
                        mountKey: e,
                        reason: t,
                        writer: f
                    });
                },
                onWarn: (t, r)=>{
                    this.log.appendLine(`[agent-store-sync] ${e} ${t}` + (void 0 !== r ? `: ${this.ports.sanitizeLogMessage(r)}` : ""));
                }
            });
        } catch (t) {
            throw await k?.release(), this.revokeResolvedStoreIdWriter(e, f), t;
        }
    }
    handleSyncSummary(e) {
        const { mountKey: t, summary: r, sync: n } = e;
        if (0 === r.errors.length && (this.dirtyMounts.delete(t), this.clearDirtyPassiveStallTracking(t)), r.filesConflicted > 0) {
            const e = r.conflicts[0];
            this.log.appendLine(`[agent-store-sync] ${t} conflicts=${r.filesConflicted}` + (void 0 !== e ? ` first=${n.hashRelPath({
                relPath: e.relPath,
                salt: this.windowId
            })}→${n.hashRelPath({
                relPath: e.conflictRelPath,
                salt: this.windowId
            })}` : ""));
        }
        const s = {
            onConflict: (e)=>{
                this.log.appendLine(`[agent-store-sync] ${e.agentId} conflict_file storeKind=${e.storeKind}` + (void 0 !== e.relPathHash ? ` relPathHash=${e.relPathHash}` : ""));
            }
        };
        try {
            n.notifySummaryMetrics({
                agentId: t,
                summary: r,
                metricsEmitter: s,
                pathHashSalt: this.windowId
            });
        } catch (e) {
            this.log.appendLine(`[agent-store-sync] ${t} summary metrics failed: ${this.ports.sanitizeLogMessage(e)}`);
        }
        this.refreshSessionRemoteTiming(t);
    }
    async loadSyncClientConfig() {
        let e;
        try {
            e = await this.ports.getDynamicConfigValue(Yn.$8);
        } catch (e) {
            this.log.appendLine(`[agent-store-sync] sync client config unavailable: ${this.ports.sanitizeLogMessage(e)}`);
        }
        return Au(e, "ide", {
            onWarn: (e)=>{
                this.log.appendLine(`[agent-store-sync] ${e}`);
            }
        });
    }
    promoteMountedProjectStore(e, t) {
        !0 === t && (this.markMountMetadataProjectStore(e.key), e.promoteToProjectStore() && (this.log.appendLine(`[agent-store-sync] ${e.key} promoted to project sync timing`), this.applySessionRemoteTiming(e, this.latestSyncConfig)));
    }
    markMountMetadataProjectStore(e) {
        const t = this.mountMetadata.get(e);
        void 0 !== t && "peer" === t.mountKind && !0 !== t.isProjectStore && this.mountMetadata.set(e, {
            ...t,
            isProjectStore: !0
        });
    }
    applySessionRemoteTiming(e, t) {
        e.setRemoteTiming({
            ...Ou(t, e.isProjectStore),
            idleBackoffFactor: t.idleBackoffFactor,
            syncIdleMaxMs: Mu(t, e.isProjectStore),
            pathSyncRequestPollMs: t.pathSyncRequestPollMs,
            localStatFastPath: t.localStatFastPath,
            localStatFastPathAuditRate: t.localStatFastPathAuditRate,
            localStatRacyMarginMs: t.localStatRacyMarginMs,
            pathSyncRequestWaitPollMs: t.pathSyncRequestWaitPollMs,
            exclusiveMutationClaimPollMs: t.exclusiveMutationClaimPollMs,
            syncRoundTimeoutMs: t.syncRoundTimeoutMs,
            syncRoundProgressTimeoutMs: t.syncRoundProgressTimeoutMs,
            syncRoundHardCapMs: t.syncRoundHardCapMs,
            resumeGapThresholdMs: t.resumeGapThresholdMs,
            resumeDetectionMode: t.resumeDetectionMode,
            passiveIndexPollIntervalMs: t.passiveIndexPollIntervalMs,
            passiveRetryIntervalMs: t.passiveRetryIntervalMs,
            pathRefreshMinIntervalMs: t.pathRefreshMinIntervalMs,
            ...Du(t),
            ...qu(t)
        });
    }
    async refreshSessionRemoteTiming(e) {
        if (this.disposed) return;
        const t = this.sessions?.get(e);
        if (void 0 === t || t.isClosed() || t.isClosing()) return;
        const r = ++this.controllerSyncConfigLoadSeq, n = await this.loadSyncClientConfig();
        this.disposed || (this.applyNewestControllerSyncConfig(n, r), this.disposed || this.sessions?.get(e) !== t || t.isClosed() || t.isClosing() || this.applySessionRemoteTiming(t, this.latestSyncConfig));
    }
    applyNewestControllerSyncConfig(e, t) {
        t <= this.controllerSyncConfigAppliedSeq || (this.controllerSyncConfigAppliedSeq = t, this.latestSyncConfig = e, this.applyControllerSyncConfig(e));
    }
    async handleSessionInvalidated({ mountKey: e, reason: t, writer: r }) {
        if (this.resolvedStoreIdWriters.get(e) !== r) return;
        const n = this.mountMetadata.get(e);
        this.log.appendLine(`[agent-store-sync] unmounting ${e}: ${t}`), this.revokeResolvedStoreIdWriter(e, r);
        try {
            await this.sessions?.close(e, {
                flush: !1
            });
        } catch (t) {
            this.log.appendLine(`[agent-store-sync] invalidated session close ${e} failed: ${this.ports.sanitizeLogMessage(t)}`);
        }
        this.mountMetadata.delete(e), this.lastDiskFullToastMs.delete(e), this.dirtyMounts.delete(e), this.clearDirtyPassiveStallTracking(e);
        const s = await this.loadModule();
        if (void 0 === s) return;
        const o = this.mountBackoff.get(e)?.scheduler ?? Hu(s), i = o.recordFailure();
        this.mountBackoff.set(e, {
            scheduler: o,
            readyAtMs: Date.now() + i
        });
        try {
            this.onMountInvalidated?.({
                mountKey: e,
                mountKind: n?.mountKind ?? "peer"
            });
        } catch (e) {
            this.log.appendLine(`[agent-store-sync] mount invalidation callback failed: ${this.ports.sanitizeLogMessage(e)}`);
        }
    }
    writeMountConfig(e, t) {
        const r = t.mountKey, n = (0, Wt.BE)(this.pathParts(r));
        try {
            (0, Wt.rs)(n), p.writeFileSync(n, e.encodeAgentStoreMountConfig(t), {
                mode: 384
            });
        } catch (e) {
            this.log.appendLine(`[agent-store-sync] failed to write mount config for ${r}: ${this.ports.sanitizeLogMessage(e)}`);
        }
    }
    async loadModule() {
        return void 0 === this.modulePromise && (this.modulePromise = (async ()=>{
            try {
                return await this.ports.loadSyncModule();
            } catch (e) {
                return void this.log.appendLine(`[agent-store-sync] failed to load @anysphere/agent-store-sync: ${String(e)}`);
            }
        })()), await this.modulePromise;
    }
    async loadSqlite() {
        return void 0 === this.sqliteCtor && (this.sqliteCtor = await this.ports.loadSqlite()), this.sqliteCtor;
    }
    getSessions(e) {
        return void 0 === this.sessions && (this.sessions = new e.AgentStoreSyncSessionController), this.sessions;
    }
    updateResolvedStoreId(e, t, r) {
        if (this.disposed || void 0 !== r && this.resolvedStoreIdWriters.get(e) !== r || this.resolvedStoreIds.get(e) === t) return;
        void 0 === t ? this.resolvedStoreIds.delete(e) : this.resolvedStoreIds.set(e, t);
        const n = {
            mountKey: e,
            storeId: t
        };
        for (const e of [
            ...this.resolvedStoreIdListeners
        ])try {
            e(n);
        } catch  {}
    }
    revokeResolvedStoreIdWriter(e, t) {
        void 0 !== t && this.resolvedStoreIdWriters.get(e) !== t || (this.resolvedStoreIdWriters.delete(e), this.mintClients.delete(e), this.updateResolvedStoreId(e, void 0));
    }
    lockProviderFor(e, t) {
        const r = this.pathParts(t), n = (0, Wt.N1)(r), s = (0, Wt.f$)(r), o = this.windowId;
        let i;
        return {
            async acquire () {
                i = void 0;
                try {
                    (0, Wt.rs)(n);
                } catch  {
                    return;
                }
                const t = await e.readAgentStoreExclusiveMutationClaimOwner({
                    filesDir: s
                });
                if (void 0 !== t && t.windowId !== o) return;
                const r = await e.tryAcquireStoreLock({
                    lockPath: n,
                    windowId: o,
                    ownerKind: "ide"
                });
                if ("acquired" === r.kind) return {
                    release: async ()=>{
                        try {
                            await r.lock.dispose();
                        } catch  {}
                    },
                    verifyStillOwned: ()=>r.lock.verifyStillOwned(),
                    markUnhealthy: ()=>r.lock.markUnhealthy()
                };
                i = r.owner;
            },
            peekHeldOwner: ()=>i
        };
    }
    maybeShowDiskFullToast(e) {
        const t = Date.now();
        t - (this.lastDiskFullToastMs.get(e) ?? 0) < 3e5 || (this.lastDiskFullToastMs.set(e, t), this.ports.showWarningMessage(`Cursor agent store can't write to ${this.harness.base}. Some agent files won't sync until space is freed.`));
    }
    onOnlineEvent() {
        const e = this.sessions;
        if (void 0 === e) return;
        const t = [];
        for (const [r] of this.mountMetadata){
            const n = e.get(r);
            void 0 !== n && "running" === n.getEngineState() && t.push(n);
        }
        if (0 !== t.length) {
            this.log.appendLine(`[agent-store-sync] online → waking ${t.length} engine(s)`);
            for (const e of t)e.wake();
        }
    }
}
const Yu = 864e5;
function Qu(e) {
    return new s({
        baseDelayMs: e.baseDelayMs,
        maxDelayMs: e.maxDelayMs,
        jitter: .2
    });
}
function Xu(e, t) {
    if (void 0 === e) return;
    let r;
    try {
        r = e(t);
    } catch  {
        return;
    }
    null != r && "function" == typeof r.then && r.then(Zu, Zu);
}
function Zu() {}
const ed = 3e4;
async function td(e, t) {
    let r;
    const n = new Promise((e)=>{
        r = setTimeout(()=>e({
                kind: "deadline"
            }), t), r.unref?.();
    });
    try {
        return await Promise.race([
            e,
            n
        ]);
    } finally{
        void 0 !== r && clearTimeout(r);
    }
}
function rd(e) {
    if ("rejected" === e.kind) throw e.error;
    return e.summary;
}
function nd(e, t) {
    if ("rejected" === t.kind) throw t.error;
    const r = e.reason;
    if (r instanceof Error) throw r;
    throw new ga({
        code: "round_aborted",
        message: "sync round aborted before completion",
        ...void 0 !== r ? {
            cause: r
        } : {}
    });
}
async function sd(e, t) {
    if (t <= 0) return await e, "settled";
    let r;
    const n = new Promise((e)=>{
        r = setTimeout(()=>e("timeout"), t), r.unref?.();
    }), s = e.then(()=>"settled");
    try {
        return await Promise.race([
            s,
            n
        ]);
    } finally{
        void 0 !== r && clearTimeout(r);
    }
}
function od(e) {
    return !ld(e) && (e instanceof ga ? "round_aborted" === e.code || void 0 !== e.timeoutClass : pd(e));
}
function id(e) {
    return "session closing" === e || "host resumed from suspend" === e;
}
function ad(e) {
    return id(e) || e.includes("still draining after watchdog abandon");
}
function cd(e, t) {
    let r = e;
    const n = new Set;
    for(; "object" == typeof r && null !== r && !n.has(r);){
        if (n.add(r), r instanceof ga && "round_aborted" === r.code && t(r.message)) return !0;
        r = "cause" in r ? r.cause : void 0;
    }
    return !1;
}
function ld(e) {
    return cd(e, ad);
}
const ud = /^[A-Za-z_$][\w$]{0,63}$/, dd = [
    ..."function" == typeof DOMException ? [
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
function pd(e) {
    let t = e;
    const r = new Set;
    for(; "object" == typeof t && null !== t && !r.has(t);){
        if (r.add(t), "code" in t) {
            const e = t.code;
            if (e === se.C.DeadlineExceeded || "DeadlineExceeded" === e || "deadline_exceeded" === e) return !0;
        }
        t = "cause" in t ? t.cause : void 0;
    }
    return !1;
}
function md(e) {
    if (void 0 === e || "" === e) return;
    const t = Number(e);
    return Number.isSafeInteger(t) && t > 0 ? t : void 0;
}
class hd {
    static async open(e) {
        const t = new hd(e);
        e.onConstructed?.(t);
        try {
            await t.initialize(), await t.awaitOpenSettlement(!1 !== e.awaitInitialRound);
        } catch (e) {
            throw await t.awaitTeardown(), await t.releaseRootPin(), e;
        }
        if (t.isClosing()) throw await t.awaitTeardown(), await t.releaseRootPin(), new Error(`AgentStoreSyncSession for ${e.key} was invalidated during open`);
        return t;
    }
    constructor(e){
        this.lastResumeWallMs = 0, this.lastResumeMonoMs = 0, this.roundBodyStartWaiters = new Map, this.consecutiveNoopRounds = 0, this.idleStreakEpoch = 0, this.suppressNextIdleNote = !1, this.conversationActivity = "active", this.periodicSyncHeld = !1, this.versionProbeInFlight = !1, this.periodicSyncHandle = {}, this.periodicSyncArmed = !1, this.currentRoundSchedule = "periodic", this.closeReleasedLock = !1, this.lockReleasedWaiters = [], this.exclusiveMutationClaimHandle = {}, this.exclusiveMutationClaimArmed = !1, this.pathSyncRequestFailureDelayMs = 0, this.pathSyncRequestRetryNotBeforeMs = 0, this.followUpNeeded = !1, this.roundGeneration = 0, this.mirrorSyncState = "opening", this.initialRoundWaitersReleased = new Promise((e)=>{
            this.releaseInitialRoundWaiters = e;
        }), this.lifecycle = "open", this.rootRetiredInvalidationStarted = !1, this.indexClosedInvalidationStarted = !1, this.roundWatchdogTripped = !1, this.roundUnwound = !0, this.consecutiveTimeoutFailures = 0, this.indexLookupClosedEmitted = !1, this.consecutiveRoundFailures = 0, this.failureStreakPassiveUntilMs = 0, this.passiveCatchUpSuppressions = 0, this.resumeBackoffResetPending = !1, this.activeRoundResumeRecoveryPending = !1, this.resumeRecoveryInProgress = !1, this.abandonRequested = !1, this.onExclusiveMutationClaimDue = ()=>{
            const e = this.exclusiveMutationClaimDueAtMs;
            this.exclusiveMutationClaimArmed = !1, this.exclusiveMutationClaimDueAtMs = void 0, void 0 === this.lockOwnerId || this.isClosing() || "running" !== this.engine?.getState() || (this.armExclusiveMutationClaim(e), this.checkExclusiveMutationClaim());
        }, this.onPeriodicSyncDue = ()=>{
            this.periodicSyncArmed = !1, this.periodicDueAtMs = void 0;
            const e = "idle" === this.pendingScheduleKind ? "idle" : "periodic";
            "periodic" !== this.pendingScheduleKind && "idle" !== this.pendingScheduleKind || (this.pendingScheduleKind = void 0);
            const t = this.startVersionProbe();
            void 0 !== t ? (this.versionProbeInFlight = !0, this.runSyncAfterVersionProbe(t, e).finally(()=>{
                this.versionProbeInFlight = !1;
            })) : this.runSync({
                schedule: e
            });
        }, this.key = e.key, this.projectStore = e.isProjectStore ?? !1, this.filesDir = e.paths.filesDir, this.client = e.client, this.openIndex = e.openIndex, this.lockProvider = e.lockProvider, this.lockOwnerId = e.lockOwnerId, this.queues = e.queues, this.syncMode = e.syncMode ?? "readWrite", this.validatePresignedUrl = e.validatePresignedUrl, this.blobTransfer = e.blobTransfer, this.fetchImpl = e.fetch, this.paths = e.paths, this.engineIndexPath = e.indexPath ?? e.paths.indexPath, this.rootIdPath = h.join(h.dirname(e.paths.indexPath), Uo), this.storeRootIdFence = e.storeRootIdFence ?? !1;
        const t = e.guardedPaths ?? [
            e.paths.tmpDir,
            e.paths.indexPath,
            (0, $t.KD)(e.paths.filesDir),
            (0, $t.Zz)(e.paths.filesDir)
        ];
        this.guardedPaths = t.includes(this.rootIdPath) ? t : [
            ...t,
            this.rootIdPath
        ];
        const r = e.validatePaths;
        this.validatePathsHook = ()=>{
            if (void 0 !== r) r();
            else for (const e of this.guardedPaths)e !== this.rootIdPath && (0, Wt.rs)(e);
            (0, Wt.rs)(this.rootIdPath);
        }, this.onStateChangedCallback = e.onStateChanged, this.onSyncSummaryCallback = e.onSyncSummary, this.onSyncErrorCallback = e.onSyncError, this.onInvalidatedCallback = e.onInvalidated, this.metricsEmitter = e.metricsEmitter, this.pathHashSalt = e.pathHashSalt, this.onWarnCallback = e.onWarn, this.rootPin = e.rootPin, this.maxFileSizeBytes = e.maxFileSizeBytes, this.blobIdleTimeoutMs = e.blobIdleTimeoutMs, this.blobConnectTimeoutMs = e.blobConnectTimeoutMs, this.passiveRetryIntervalMs = e.passiveRetryIntervalMs, this.mintGate = e.mintGate, this.mintDeniedUntilMs = e.mintDeniedUntilMs, this.skipDeniedMountSync = e.skipDeniedMountSync, this.passiveIndexPollIntervalMs = e.passiveIndexPollIntervalMs, this.pathRefreshMinIntervalMs = e.pathRefreshMinIntervalMs ?? cu.pathRefreshMinIntervalMs, this.multipartUploadThresholdBytes = e.multipartUploadThresholdBytes, this.multipartPartSizeBytes = e.multipartPartSizeBytes, this.multipartPresignWindowSize = e.multipartPresignWindowSize, this.pullPresignWindowSize = e.pullPresignWindowSize, this.listWalkConcurrency = e.listWalkConcurrency, this.multipartCompleteMaxAttempts = e.multipartCompleteMaxAttempts, this.multipartMaxRestarts = e.multipartMaxRestarts, this.multipartMaxConflictRenames = e.multipartMaxConflictRenames, this.multipartMaxExpiryRefreshes = e.multipartMaxExpiryRefreshes, this.pushOrder = e.pushOrder ?? cu.pushOrder, this.onPassiveIndexUpdatedCallback = e.onPassiveIndexUpdated, this.onResumeDetectedCallback = e.onResumeDetected, this.syncRoundTimeoutMs = e.syncRoundTimeoutMs ?? cu.syncRoundTimeoutMs, this.syncRoundProgressTimeoutMs = e.syncRoundProgressTimeoutMs ?? cu.syncRoundProgressTimeoutMs, this.syncRoundHardCapMs = e.syncRoundHardCapMs ?? cu.syncRoundHardCapMs, this.syncRoundUnwindTimeoutMs = e.syncRoundUnwindTimeoutMs ?? cu.syncRoundUnwindTimeoutMs, this.lockReleaseFailureThreshold = e.lockReleaseFailureThreshold ?? cu.lockReleaseFailureThreshold, this.indexClosedInvalidatesSession = !0 === e.indexClosedInvalidatesSession, this.lockReleaseFailureStreakThreshold = e.lockReleaseFailureStreakThreshold ?? cu.lockReleaseFailureStreakThreshold, this.lockReleaseFailureStreakPassiveMs = e.lockReleaseFailureStreakPassiveMs ?? cu.lockReleaseFailureStreakPassiveMs, this.resumeGapThresholdMs = e.resumeGapThresholdMs ?? cu.resumeGapThresholdMs, this.resumeDetectionMode = e.resumeDetectionMode ?? cu.resumeDetectionMode, this.syncDebounceMs = e.syncDebounceMs ?? cu.syncDebounceMs, this.idleBackoffFactor = e.idleBackoffFactor ?? cu.idleBackoffFactor, this.syncIdleMaxMs = e.syncIdleMaxMs ?? this.syncDebounceMs, this.syncBackoffBaseMs = e.syncBackoffBaseMs ?? cu.syncBackoffBaseMs, this.syncBackoffMaxMs = e.syncBackoffMaxMs ?? cu.syncBackoffMaxMs, this.pathSyncRequestPollMs = e.pathSyncRequestPollMs ?? Zs, this.pathSyncRequestWaitPollMs = e.pathSyncRequestWaitPollMs ?? eo, this.exclusiveMutationClaimPollMs = e.exclusiveMutationClaimPollMs ?? cu.exclusiveMutationClaimPollMs, this.tombstoneFullRefreshRounds = e.tombstoneFullRefreshRounds, this.tombstoneFullRefreshIntervalMs = e.tombstoneFullRefreshIntervalMs, this.tombstonePruneSlackMs = e.tombstonePruneSlackMs, this.remoteVersionEnabled = e.remoteVersionEnabled, this.versionFullListIntervalMs = e.versionFullListIntervalMs, this.versionAuditSampleRate = e.versionAuditSampleRate, this.localStatFastPath = e.localStatFastPath ?? cu.localStatFastPath, this.localStatFastPathAuditRate = e.localStatFastPathAuditRate ?? cu.localStatFastPathAuditRate, this.localStatRacyMarginMs = e.localStatRacyMarginMs ?? cu.localStatRacyMarginMs, this.syncBackoff = Qu({
            baseDelayMs: this.syncBackoffBaseMs,
            maxDelayMs: this.syncBackoffMaxMs
        }), this.ownsPeriodicScheduler = void 0 === e.periodicScheduler, this.periodicScheduler = e.periodicScheduler ?? new hi, this.versionProbe = e.versionProbe;
    }
    get isProjectStore() {
        return this.projectStore;
    }
    promoteToProjectStore() {
        return !this.projectStore && (this.projectStore = !0, !0);
    }
    setRemoteTiming(e) {
        const t = this.syncDebounceMs, r = this.idleBackoffFactor, n = this.syncIdleMaxMs, s = this.resumeGapThresholdMs;
        if (void 0 !== e.syncDebounceMs && (this.syncDebounceMs = e.syncDebounceMs), void 0 !== e.idleBackoffFactor && (this.idleBackoffFactor = e.idleBackoffFactor), void 0 !== e.syncIdleMaxMs && (this.syncIdleMaxMs = e.syncIdleMaxMs), void 0 !== e.syncRoundTimeoutMs && (this.syncRoundTimeoutMs = e.syncRoundTimeoutMs), void 0 !== e.syncRoundProgressTimeoutMs && (this.syncRoundProgressTimeoutMs = e.syncRoundProgressTimeoutMs), void 0 !== e.syncRoundHardCapMs && (this.syncRoundHardCapMs = e.syncRoundHardCapMs), void 0 !== e.resumeGapThresholdMs && (this.resumeGapThresholdMs = e.resumeGapThresholdMs), void 0 !== e.resumeDetectionMode && (this.resumeDetectionMode = e.resumeDetectionMode), void 0 !== e.passiveIndexPollIntervalMs && (this.passiveIndexPollIntervalMs = e.passiveIndexPollIntervalMs, this.isClosing() || this.engine?.setPassiveIndexPollIntervalMs(e.passiveIndexPollIntervalMs)), void 0 !== e.pathRefreshMinIntervalMs && (this.pathRefreshMinIntervalMs = e.pathRefreshMinIntervalMs), void 0 !== e.passiveRetryIntervalMs && (this.passiveRetryIntervalMs = e.passiveRetryIntervalMs, !this.isClosing())) {
            const t = this.mintGate?.remainingMs ?? 0, r = Math.max(t, this.denialRemainingMs(), this.failureStreakStretchMs());
            this.engine?.setPassiveRetryIntervalMs(Math.max(e.passiveRetryIntervalMs, r));
        }
        this.resumeGapThresholdMs === s || this.isClosing() || (this.stopResumeDetector(), this.startResumeDetector());
        const o = e.syncBackoffBaseMs ?? this.syncBackoffBaseMs, i = e.syncBackoffMaxMs ?? this.syncBackoffMaxMs;
        if (o !== this.syncBackoffBaseMs || i !== this.syncBackoffMaxMs) {
            const e = this.syncBackoff.failures;
            this.syncBackoffBaseMs = o, this.syncBackoffMaxMs = i, this.syncBackoff = Qu({
                baseDelayMs: o,
                maxDelayMs: i
            }), this.syncBackoff.restoreFailures(e);
        }
        if ((this.syncDebounceMs !== t || this.idleBackoffFactor !== r || this.syncIdleMaxMs !== n) && this.periodicSyncArmed && ("periodic" === this.pendingScheduleKind || "idle" === this.pendingScheduleKind) && void 0 === this.syncing && !this.isClosing()) {
            const e = this.nextPeriodicDelay();
            this.scheduleSync(e.delayMs, e.kind);
        }
        void 0 !== e.tombstoneFullRefreshRounds && (this.tombstoneFullRefreshRounds = e.tombstoneFullRefreshRounds, this.isClosing() || this.engine?.setTombstoneFullRefreshRounds(e.tombstoneFullRefreshRounds)), void 0 !== e.tombstoneFullRefreshIntervalMs && (this.tombstoneFullRefreshIntervalMs = e.tombstoneFullRefreshIntervalMs, this.isClosing() || this.engine?.setTombstoneFullRefreshIntervalMs(e.tombstoneFullRefreshIntervalMs)), void 0 !== e.tombstonePruneSlackMs && (this.tombstonePruneSlackMs = e.tombstonePruneSlackMs, this.isClosing() || this.engine?.setTombstonePruneSlackMs(e.tombstonePruneSlackMs)), void 0 !== e.remoteVersionEnabled && (this.remoteVersionEnabled = e.remoteVersionEnabled, this.isClosing() || this.engine?.setRemoteVersionEnabled(e.remoteVersionEnabled)), void 0 !== e.versionFullListIntervalMs && (this.versionFullListIntervalMs = e.versionFullListIntervalMs, this.isClosing() || this.engine?.setVersionFullListIntervalMs(e.versionFullListIntervalMs)), void 0 !== e.versionAuditSampleRate && (this.versionAuditSampleRate = e.versionAuditSampleRate, this.isClosing() || this.engine?.setVersionAuditSampleRate(e.versionAuditSampleRate)), void 0 === e.localStatFastPath && void 0 === e.localStatFastPathAuditRate && void 0 === e.localStatRacyMarginMs || (void 0 !== e.localStatFastPath && (this.localStatFastPath = e.localStatFastPath), void 0 !== e.localStatFastPathAuditRate && (this.localStatFastPathAuditRate = e.localStatFastPathAuditRate), void 0 !== e.localStatRacyMarginMs && (this.localStatRacyMarginMs = e.localStatRacyMarginMs), this.isClosing() || this.engine?.setLocalStatFastPath({
            mode: this.localStatFastPath,
            auditRate: this.localStatFastPathAuditRate,
            racyMarginMs: this.localStatRacyMarginMs
        })), void 0 !== e.pathSyncRequestWaitPollMs && (this.pathSyncRequestWaitPollMs = e.pathSyncRequestWaitPollMs), void 0 !== e.pathSyncRequestPollMs && e.pathSyncRequestPollMs !== this.pathSyncRequestPollMs && (this.pathSyncRequestPollMs = e.pathSyncRequestPollMs, "running" !== this.engine?.getState() || this.isClosing() || (this.stopPathSyncRequestPolling(), this.startPathSyncRequestPolling())), void 0 !== e.exclusiveMutationClaimPollMs && e.exclusiveMutationClaimPollMs !== this.exclusiveMutationClaimPollMs && (this.exclusiveMutationClaimPollMs = e.exclusiveMutationClaimPollMs, "running" !== this.engine?.getState() || this.isClosing() || (this.stopExclusiveMutationClaimPolling(), this.startExclusiveMutationClaimPolling()));
    }
    get lastSyncSummary() {
        return this.lastSummary;
    }
    isClosed() {
        return "closed" === this.lifecycle;
    }
    isClosing() {
        return "open" !== this.lifecycle;
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
        void 0 !== this.teardownPromise && await this.teardownPromise;
    }
    getSyncState() {
        return this.mirrorSyncState;
    }
    markMirror(e) {
        "synced" !== this.mirrorSyncState && (this.mirrorSyncState = e, "sync-failed" === e && (this.mirrorSyncFailedAtMs = Date.now())), this.releaseInitialRoundWaiters();
    }
    markMirrorFromSharedIndex() {
        const e = this.index, t = void 0 === e ? void 0 : md(e.getMeta(En)) ?? md(e.getMeta(xn)), r = this.mirrorSyncFailedAtMs;
        void 0 !== t && ("sync-failed" !== this.mirrorSyncState || void 0 === r || t > r) ? this.markMirror("synced") : this.releaseInitialRoundWaiters();
    }
    async awaitInitialRound() {
        "opening" === this.getSyncState() && await this.initialRoundWaitersReleased;
    }
    async awaitOpenSettlement(e) {
        const t = e ? this.syncing : void 0;
        if (void 0 !== t) {
            const e = this.activeRoundAbandoned;
            await (void 0 !== e ? Promise.race([
                t,
                e
            ]) : t);
        }
        await this.awaitTeardown();
    }
    async forceSync() {
        if (!this.isClosing()) {
            if ("running" !== this.engine?.getState() && this.failureStreakStretchMs() > 0) {
                this.passiveCatchUpSuppressions += 1;
                try {
                    await this.recontendForLock();
                } finally{
                    this.passiveCatchUpSuppressions -= 1;
                }
            }
            if ("running" === this.engine?.getState()) return this.clearSyncTimer(), this.resetIdleStreak(), await this.runSync({
                kind: "explicit",
                schedule: "explicit"
            });
        }
    }
    async syncPath(e, t) {
        return await this.syncPaths([
            e
        ], t);
    }
    async syncPaths(e, t) {
        if (this.isClosing()) return;
        const r = this.engine;
        if (void 0 === r) return;
        const n = r.getState();
        if ("running" === n) {
            if (this.skipDeniedSyncRound()) return;
            if (!this.guardedPathsSafe({
                invalidateOnFailure: !0
            })) return;
            this.keepPathLaneOffIdleStreak();
            try {
                const t = await r.syncPaths(e);
                return this.emitSyncMetrics(t, "explicit"), t;
            } catch (e) {
                return this.emitThrownSyncMetrics(e, "explicit"), this.invalidateRetiredRoot(e), void this.invalidateClosedIndex(e);
            }
        }
        return "passive" === n ? await this.awaitLockHolderPathSync(e, t) : void 0;
    }
    async pullPaths(e) {
        if (this.isClosing()) return {
            kind: "unavailable"
        };
        const t = this.engine;
        if (void 0 === t) return {
            kind: "unavailable"
        };
        const r = t.getState();
        if ("passive" === r) return {
            kind: "holder-owns-fetch"
        };
        if ("running" !== r) return {
            kind: "unavailable"
        };
        if (this.skipDeniedSyncRound()) return {
            kind: "unavailable"
        };
        if (!this.guardedPathsSafe({
            invalidateOnFailure: !0
        })) return {
            kind: "failed"
        };
        this.keepPathLaneOffIdleStreak();
        try {
            const r = await t.pullPaths(e);
            return this.emitSyncMetrics(r, "explicit"), ii(r, t.getState());
        } catch (e) {
            return this.emitThrownSyncMetrics(e, "explicit"), this.invalidateRetiredRoot(e), this.invalidateClosedIndex(e), {
                kind: "failed"
            };
        }
    }
    async refreshPaths(e) {
        if (this.isClosing()) return {
            kind: "unavailable"
        };
        const t = this.engine;
        if (void 0 === t) return {
            kind: "unavailable"
        };
        if (this.pathRefreshMinIntervalMs > 0 && void 0 !== this.lastPathRefreshAdmittedAtMs) {
            const e = mi() - this.lastPathRefreshAdmittedAtMs;
            if (e < this.pathRefreshMinIntervalMs) return {
                kind: "throttled",
                retryAfterMs: this.pathRefreshMinIntervalMs - e
            };
        }
        const r = t.getState();
        if ("passive" === r) return this.lastPathRefreshAdmittedAtMs = mi(), await this.leaveRefreshToHolder(e);
        if ("running" !== r) return {
            kind: "unavailable"
        };
        if (this.skipDeniedSyncRound()) return {
            kind: "unavailable"
        };
        if (!this.guardedPathsSafe({
            invalidateOnFailure: !0
        })) return {
            kind: "failed"
        };
        this.lastPathRefreshAdmittedAtMs = mi();
        try {
            const r = await t.syncPaths(e, {
                lane: "path-yield"
            });
            this.emitSyncMetrics(r, "explicit");
            const n = this.pathsWithoutUnjournaledLocalDeletion(e);
            if (0 === n.length) return {
                kind: "ran",
                pushed: r.filesPushed,
                pulled: 0,
                listingComplete: !0,
                errors: r.errors.length
            };
            const s = await t.pullPaths(n, {
                lane: "path-yield"
            });
            this.emitSyncMetrics(s, "explicit");
            return "ran" !== ii(s, t.getState()).kind ? await this.leaveRefreshToHolder(e) : {
                kind: "ran",
                pushed: r.filesPushed,
                pulled: s.filesPulled,
                listingComplete: s.listingComplete,
                errors: r.errors.length + s.errors.length
            };
        } catch (e) {
            return this.emitThrownSyncMetrics(e, "explicit"), this.invalidateRetiredRoot(e), this.invalidateClosedIndex(e), {
                kind: "failed"
            };
        }
    }
    async leaveRefreshToHolder(e) {
        const t = [];
        for (const r of e)await this.hasUnsyncedLocalBytes(r) && t.push(r);
        return {
            kind: "holder-owns-fetch",
            pushRequested: t.length > 0 && void 0 !== await io({
                filesDir: this.filesDir,
                relPaths: t,
                kind: "push"
            }),
            pullRequested: void 0 !== await io({
                filesDir: this.filesDir,
                relPaths: e,
                kind: "pull"
            })
        };
    }
    statMirrorPath(e) {
        try {
            const t = v(e);
            return {
                canonical: t,
                stat: T({
                    base: this.filesDir,
                    relPath: t
                })
            };
        } catch  {
            return;
        }
    }
    async hasUnsyncedLocalBytes(e) {
        const t = this.statMirrorPath(e);
        if (void 0 === t || "file" !== t.stat.kind) return !1;
        const r = this.getIndexEntry(t.canonical);
        if ("miss" === r.kind) return !0;
        if ("hit" !== r.kind) return !1;
        if (r.entry.size !== t.stat.entry.size) return !0;
        try {
            const { sha: e } = await nc({
                absPath: t.stat.entry.absPath,
                maxBytes: this.maxFileSizeBytes ?? Qi,
                expectedDev: t.stat.entry.dev,
                expectedIno: t.stat.entry.ino
            });
            return e !== r.entry.lastSyncedSha;
        } catch  {
            return !1;
        }
    }
    pathsWithoutUnjournaledLocalDeletion(e) {
        return "readOnly" === this.syncMode ? e : e.filter((e)=>!this.hasUnjournaledLocalDeletion(e));
    }
    hasUnjournaledLocalDeletion(e) {
        const t = this.statMirrorPath(e);
        if (void 0 === t || "absent" !== t.stat.kind) return !1;
        const r = this.getIndexEntry(t.canonical);
        return "hit" === r.kind && "tombstoned" !== r.entry.state && void 0 !== r.entry.lastSeenEtag && r.entry.lastSeenEtag.length > 0;
    }
    getIndexEntry(e) {
        const t = this.index;
        if (void 0 === t) return {
            kind: "unavailable"
        };
        if (t.isClosed()) return this.emitIndexLookupClosed(), {
            kind: "unavailable",
            reason: "index_closed"
        };
        if (this.isClosing()) return {
            kind: "unavailable"
        };
        try {
            const r = t.getFile(v(e));
            return void 0 === r ? {
                kind: "miss"
            } : {
                kind: "hit",
                entry: r
            };
        } catch (e) {
            return Di(e) ? (this.emitIndexLookupClosed(), {
                kind: "unavailable",
                reason: "index_closed"
            }) : {
                kind: "unavailable"
            };
        }
    }
    setConversationActivity(e) {
        this.isClosing() || this.conversationActivity === e || (this.conversationActivity = e, this.emitSessionState(), "idle" !== e ? "running" === this.engine?.getState() && this.wake() : "backoff" !== this.pendingScheduleKind && this.clearSyncTimer());
    }
    wake() {
        this.isClosing() || (this.clearSyncTimer(), this.resetIdleStreak(), this.runSync({
            schedule: "explicit"
        }));
    }
    setPeriodicScheduler(e) {
        if (e === this.periodicScheduler) return;
        const t = this.periodicDueAtMs, r = this.periodicSyncArmed, n = this.exclusiveMutationClaimDueAtMs, s = this.exclusiveMutationClaimArmed;
        if (this.engine?.setPeriodicScheduler(e), this.ownsPeriodicScheduler ? (this.periodicScheduler.dispose(), this.ownsPeriodicScheduler = !1) : (this.periodicScheduler.cancel(this.periodicSyncHandle), this.periodicScheduler.cancel(this.exclusiveMutationClaimHandle)), this.periodicScheduler = e, !r || void 0 === t || this.isClosing() ? (this.periodicSyncArmed = !1, this.periodicDueAtMs = void 0) : (this.periodicSyncArmed = !0, this.periodicScheduler.schedule(this.periodicSyncHandle, t, this.onPeriodicSyncDue, this)), !s || void 0 === n || this.isClosing()) return this.exclusiveMutationClaimArmed = !1, void (this.exclusiveMutationClaimDueAtMs = void 0);
        this.exclusiveMutationClaimArmed = !0, this.periodicScheduler.schedule(this.exclusiveMutationClaimHandle, n, this.onExclusiveMutationClaimDue, this);
    }
    async recontendForLock() {
        this.isClosing() || "passive" !== this.engine?.getState() || await this.engine.unpause();
    }
    holdPeriodicSync(e) {
        this.periodicSyncHeld !== e && (this.periodicSyncHeld = e, e ? "periodic" !== this.pendingScheduleKind && "idle" !== this.pendingScheduleKind || this.clearSyncTimer() : this.isClosing() || void 0 !== this.syncing || this.syncScheduleArmed() || this.versionProbeInFlight || this.scheduleSync());
    }
    async park() {
        this.isClosing() || (this.clearSyncTimer(), await this.engine?.pause(), this.clearSyncTimer());
    }
    async unpark() {
        const e = this.engine;
        this.isClosing() || void 0 === e || "paused" !== e.getState() || (await e.unpause(), await this.awaitOpenSettlement(!0));
    }
    async close(e) {
        await this.beginTeardown({
            kind: "close",
            options: e
        });
    }
    async initialize() {
        this.assertPathsSafe();
        const e = this.openIndex(this.paths.indexPath);
        this.index = e;
        const t = Vo(this.rootIdPath);
        let r;
        try {
            if (void 0 === t) this.onEngineWarn("agent store root id unavailable; deletion fence disabled", void 0);
            else {
                const r = e.bindRootId(t);
                this.boundRootId = t, "rebound" === r && this.onEngineWarn(`agent store root id rebound to ${this.boundRootId}; scan deletion disarmed until a clean round`, void 0);
            }
            r = new ya({
                agentId: this.key,
                filesDir: this.paths.filesDir,
                tmpDir: this.paths.tmpDir,
                client: this.client,
                index: e,
                queues: this.queues,
                syncMode: this.syncMode,
                validatePresignedUrl: this.validatePresignedUrl,
                blobTransfer: this.blobTransfer,
                fetch: this.fetchImpl,
                lockProvider: this.lockProvider,
                ...void 0 !== this.boundRootId ? {
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
                onPassiveIndexUpdated: (e)=>{
                    this.markMirrorFromSharedIndex(), Xu(this.onPassiveIndexUpdatedCallback, e);
                },
                onStateChanged: (e)=>this.onEngineStateChanged(e),
                onRoundBodyStarted: (e)=>{
                    this.noteRoundBodyStarted(e);
                },
                onRoundProgress: ()=>{
                    const e = this.roundBodyStarted;
                    void 0 !== e && e.generation === this.roundGeneration && (this.roundProgress = {
                        at: mi(),
                        wallAt: Date.now(),
                        generation: e.generation
                    });
                },
                onWarn: (e, t)=>this.onEngineWarn(e, t),
                tombstoneFullRefreshRounds: this.tombstoneFullRefreshRounds,
                tombstoneFullRefreshIntervalMs: this.tombstoneFullRefreshIntervalMs,
                tombstonePruneSlackMs: this.tombstonePruneSlackMs,
                localStatFastPath: this.localStatFastPath,
                localStatFastPathAuditRate: this.localStatFastPathAuditRate,
                localStatRacyMarginMs: this.localStatRacyMarginMs,
                onStatFastPath: (e)=>{
                    this.metricsEmitter?.recordStatFastPath?.({
                        agentId: this.key,
                        result: e
                    });
                },
                onMultipartAbandoned: (e)=>{
                    this.metricsEmitter?.recordMultipartAbandoned?.({
                        agentId: this.key,
                        ...e
                    });
                },
                remoteVersionEnabled: this.remoteVersionEnabled,
                versionFullListIntervalMs: this.versionFullListIntervalMs,
                versionAuditSampleRate: this.versionAuditSampleRate
            }), this.engine = r, await r.unpause(), this.abandonRequested && this.markLockUnhealthy(), this.startResumeDetector();
        } catch (t) {
            throw await this.disposeConstructedResources(r, e), t;
        }
    }
    startResumeDetector() {
        this.resumeGapThresholdMs <= 0 || void 0 !== this.resumeTimer || (this.lastResumeWallMs = Date.now(), this.lastResumeMonoMs = performance.now(), this.resumeTimer = setInterval(()=>{
            const e = Date.now(), t = performance.now(), r = e - this.lastResumeWallMs, n = t - this.lastResumeMonoMs;
            this.lastResumeWallMs = e, this.lastResumeMonoMs = t;
            const s = r - n, o = r - ed, i = "timer_lateness" === this.resumeDetectionMode ? Math.max(s, o) : s;
            i <= this.resumeGapThresholdMs || this.isClosing() || (void 0 === this.resumeHandling ? this.resumeHandling = this.drainResumeRecovery(i).finally(()=>{
                this.resumeHandling = void 0;
            }) : this.pendingResumeGapMs = Math.max(this.pendingResumeGapMs ?? 0, i));
        }, ed), this.resumeTimer.unref?.());
    }
    stopResumeDetector() {
        void 0 !== this.resumeTimer && (clearInterval(this.resumeTimer), this.resumeTimer = void 0);
    }
    async drainResumeRecovery(e) {
        let t = e;
        for(; void 0 !== t && !this.isClosing();){
            const e = t;
            this.pendingResumeGapMs = void 0, await this.handleResume(e), t = this.pendingResumeGapMs;
        }
    }
    async handleResume(e) {
        if (!this.isClosing()) {
            this.onEngineWarn(`resume detected after ~${Math.round(e)}ms wall-clock gap`, void 0), this.emitResumeDetected(e), this.consecutiveTimeoutFailures = 0, this.consecutiveRoundFailures = 0, this.reconcileFailureStreakAfterResume(), this.resumeRecoveryInProgress = !0;
            try {
                const e = await this.drainRoundsForResume();
                if (this.isClosing()) return;
                if (e) this.pendingRelinquishCause = "resume_abandon", await sd(this.relinquishEngineLock(), this.unwindHardCapMs());
                else {
                    const e = this.engine;
                    void 0 !== e && await sd(e.revalidateLockOwnership().catch(()=>{}), this.unwindHardCapMs());
                }
                if (this.isClosing()) return;
                const t = this.engine;
                "passive" !== t?.getState() || t.hasAbandonedInFlightRounds() || await sd(t.unpause().catch(()=>{}), this.unwindHardCapMs()), this.wake();
            } finally{
                this.resumeRecoveryInProgress = !1;
            }
        }
    }
    async drainRoundsForResume() {
        let e = !1, t = !1, r = 0;
        for(; !this.isClosing() && void 0 !== this.syncing;){
            if (r >= hd.RESUME_DRAIN_MAX_LAPS) return this.unstickAbandonedRoundWaiters({
                unjamChain: !0
            }), this.resumeBackoffResetPending = !1, this.activeRoundResumeRecoveryPending = !1, this.syncBackoff.recordSuccess(), !0;
            r += 1, e = !0, this.activeRoundResumeRecoveryPending = !0, this.abortActiveRound("host resumed from suspend"), this.engine?.abortActiveRound(new ga({
                code: "round_aborted",
                message: "host resumed from suspend"
            })), this.resumeBackoffResetPending = !0;
            const n = await sd(this.syncing, this.unwindHardCapMs());
            if (this.isClosing()) return this.resumeBackoffResetPending = !1, this.unstickAbandonedRoundWaiters({
                unjamChain: "timeout" === n
            }), "timeout" === n || t;
            "timeout" === n && (this.unstickAbandonedRoundWaiters({
                unjamChain: !0
            }), this.resumeBackoffResetPending = !1, this.activeRoundResumeRecoveryPending = !1, this.syncBackoff.recordSuccess(), t = !0);
        }
        return this.isClosing() ? t : e ? (this.engine?.abortActiveRound(new ga({
            code: "round_aborted",
            message: "host resumed from suspend"
        })), await this.recoverWedgedScopedRound() && (t = !0), t) : (this.engine?.abortActiveRound(new ga({
            code: "round_aborted",
            message: "host resumed from suspend"
        })), await this.recoverWedgedScopedRound() && (t = !0), this.isClosing() || this.syncBackoff.recordSuccess(), t);
    }
    async recoverWedgedScopedRound() {
        const e = this.engine;
        if (void 0 === e) return !1;
        if (this.isClosing()) return !!e.hasLiveRoundWork() && (e.releaseWedgedRoundChain(), this.markLockUnhealthy(), !0);
        return "settled" !== await sd(e.awaitInFlightRoundsSettled(), this.unwindHardCapMs()) && (e.releaseWedgedRoundChain(), this.markLockUnhealthy(), !0);
    }
    resumeRecoveryTeardownBudgetMs() {
        return this.unwindHardCapMs() * (hd.RESUME_DRAIN_MAX_LAPS + 1);
    }
    async beginTeardown(e) {
        if ("closed" !== this.lifecycle) {
            if (void 0 !== this.teardownPromise) return "invalidate" === e.kind && void 0 !== e.reason && Xu(this.onInvalidatedCallback, e.reason), await this.teardownPromise;
            this.lifecycle = "closing", this.releaseInitialRoundWaiters(), this.engine?.markClosing(), e.options.flush && this.engine?.markCloseFlushPending(), this.teardownPromise = this.teardownInternal(e.options), "invalidate" === e.kind && void 0 !== e.reason && Xu(this.onInvalidatedCallback, e.reason);
            try {
                await this.teardownPromise;
            } finally{
                this.lifecycle = "closed";
            }
        }
    }
    async teardownInternal(e) {
        this.clearSyncTimer(), this.clearFailureStreakRestoreTimer(), this.ownsPeriodicScheduler && (this.periodicScheduler.dispose(), this.ownsPeriodicScheduler = !1), this.stopPathSyncRequestPolling(), this.stopResumeDetector(), this.abortActiveRound("session closing"), this.engine?.abortActiveRound(new ga({
            code: "round_aborted",
            message: "session closing"
        })), void 0 !== this.pathSyncRequestDrain && await sd(this.pathSyncRequestDrain.catch(()=>{}), this.unwindHardCapMs());
        const t = this.resumeHandling;
        void 0 !== t && await sd(t.catch(()=>{}), this.resumeRecoveryTeardownBudgetMs());
        let r = !0, n = !1;
        if (void 0 !== this.syncing) {
            const e = await sd(this.syncing, this.unwindHardCapMs());
            r = "settled" === e, n = "timeout" === e;
        }
        if (r && !0 === this.engine?.hasInFlightRounds()) {
            "timeout" === await sd(this.engine.awaitInFlightRoundsSettled(), this.unwindHardCapMs()) && (r = !1, n = !0);
        }
        const s = this.engine, o = this.index;
        if (this.engine = void 0, this.index = void 0, void 0 === s) return this.closeReleasedLock = !0, void await this.closeIndexSafely(o);
        this.disposingEngine = s;
        try {
            await this.finishDetachedTeardown(s, o, e, r, n);
        } finally{
            this.disposingEngine === s && (this.disposingEngine = void 0);
        }
    }
    async finishDetachedTeardown(e, t, r, n, s) {
        let o = !1;
        n && e.hasAbandonedInFlightRounds() && (n = !1, o = !0), s && (e.releaseWedgedRoundChain(), this.markLockUnhealthy(e));
        const i = this.disposeEngine(e, r, s);
        if (n) return await i, this.noteIfLockReleased(e), void await this.closeIndexSafely(t);
        if (o) {
            const r = this.syncRoundUnwindTimeoutMs;
            let n;
            const s = await new Promise((t)=>{
                let s = !1;
                const o = (e)=>{
                    s || (s = !0, void 0 !== n && clearTimeout(n), t(e));
                };
                r > 0 && (n = setTimeout(()=>o("timeout"), r), n.unref?.()), i.then(()=>o("disposed"), ()=>o("disposed")), e.whenAbandonedInFlightRoundsIdle().then(()=>o("orphans_idle"));
            });
            return "disposed" === s ? e.hasAbandonedInFlightRounds() ? (this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0), void this.releaseRootPinWhenQuiet(e, Promise.resolve(), t)) : (this.noteIfLockReleased(e), void await this.closeIndexSafely(t)) : "orphans_idle" === s ? (await i, this.noteIfLockReleased(e), void await this.closeIndexSafely(t)) : (this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0), this.markLockUnhealthy(e), this.watchDisposalForLockRelease(i, e), void this.releaseRootPinWhenQuiet(e, i, t));
        }
        const a = await sd(i, this.syncRoundUnwindTimeoutMs);
        if ("settled" === a) return e.hasAbandonedInFlightRounds() ? (this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0), void this.releaseRootPinWhenQuiet(e, Promise.resolve(), t)) : (this.noteIfLockReleased(e), void await this.closeIndexSafely(t));
        "timeout" === a && (this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0), this.markLockUnhealthy(e), this.watchDisposalForLockRelease(i, e), this.releaseRootPinWhenQuiet(e, i, t));
    }
    noteIfLockReleased(e) {
        if (!e.releasedLockOnDispose()) return;
        this.closeReleasedLock = !0;
        const t = this.lockReleasedWaiters.splice(0);
        for (const e of t)e();
    }
    whenAbandonedLockReleased() {
        return this.holdsAbandonedLock() ? new Promise((e)=>{
            this.lockReleasedWaiters.push(e);
        }) : Promise.resolve();
    }
    watchDisposalForLockRelease(e, t) {
        e.then(()=>{
            this.noteIfLockReleased(t);
        }, ()=>{
            this.noteIfLockReleased(t);
        });
    }
    async closeIndexSafely(e) {
        if (void 0 !== e) try {
            e.close();
        } catch  {}
        await this.releaseRootPin();
    }
    async releaseRootPin() {
        const e = this.rootPin;
        this.rootPin = void 0, await e?.release();
    }
    releaseRootPinWhenQuiet(e, t, r) {
        const n = this.rootPin;
        this.rootPin = void 0;
        const s = n?.release.bind(n);
        void 0 !== n && (n.release = ()=>Promise.resolve()), (async ()=>{
            try {
                await t;
            } catch  {}
            try {
                if (await e.whenAbandonedInFlightRoundsIdle(), void 0 !== r) try {
                    r.close();
                } catch  {}
            } catch  {}
            await s?.();
        })();
    }
    async disposeEngine(e, t, r = !1) {
        if (t.flush && this.guardedPathsSafe({
            invalidateOnFailure: !1
        })) try {
            await e.dispose({
                deferLockRelease: r
            });
        } catch (e) {
            Xu(this.onSyncErrorCallback, e);
        }
        else {
            try {
                await e.pause();
            } catch  {}
            try {
                await e.dispose({
                    deferLockRelease: r
                });
            } catch (e) {
                Xu(this.onSyncErrorCallback, e);
            }
        }
    }
    abortActiveRound(e) {
        const t = ad(e);
        this.activeRoundAbortController?.abort(new ga({
            code: "round_aborted",
            message: e,
            ...t ? {} : {
                timeoutClass: "round"
            }
        }));
    }
    async disposeConstructedResources(e, t) {
        if (this.stopResumeDetector(), void 0 !== e) {
            try {
                await e.pause();
            } catch  {}
            try {
                await e.dispose();
            } catch (e) {
                Xu(this.onSyncErrorCallback, e);
            }
        }
        try {
            t.close();
        } catch  {}
        await this.releaseRootPin(), this.engine = void 0, this.index = void 0;
    }
    onEngineStateChanged(e) {
        if (Xu(this.onStateChangedCallback, e), "passive" === e.toState && "lock_lost" === e.reason) {
            const e = this.pendingRelinquishCause ?? "engine";
            this.pendingRelinquishCause = void 0, this.emitLockRelinquished(e);
        }
        if ("passive" === e.toState && void 0 !== e.heldBy && this.emitLockContended(e.heldBy), "passive" === e.toState && this.markMirrorFromSharedIndex(), "running" === e.toState && !this.isClosing()) return this.clearFailureStreakStretch(), this.restorePassiveRetryInterval(), this.emitSessionState(), this.startPathSyncRequestPolling(), this.clearSyncTimer(), void ("passive" === e.fromState ? (this.consecutiveRoundFailures = 0, this.resetIdleStreak(), 0 === this.passiveCatchUpSuppressions && this.runSync({
            schedule: "explicit"
        })) : this.runSync());
        this.stopPathSyncRequestPolling();
    }
    async awaitLockHolderPathSync(e, t) {
        const r = await io({
            filesDir: this.filesDir,
            relPaths: e
        });
        if (void 0 === r) return;
        const n = t?.passiveWaitTimeoutMs, s = Date.now(), o = await mo({
            filesDir: this.filesDir,
            requestId: r,
            pollMs: this.pathSyncRequestWaitPollMs,
            shouldAbort: ()=>!!this.isClosing() || "running" === this.engine?.getState() || void 0 !== n && Date.now() - s >= n
        });
        if (!this.isClosing()) {
            if ("running" === this.engine?.getState()) {
                if (this.skipDeniedSyncRound()) return;
                if (!this.guardedPathsSafe({
                    invalidateOnFailure: !0
                })) return;
                this.keepPathLaneOffIdleStreak();
                try {
                    const t = await this.engine.syncPaths(e);
                    return po({
                        filesDir: this.filesDir,
                        requestIds: [
                            r
                        ]
                    }), this.emitSyncMetrics(t, "explicit"), t;
                } catch (e) {
                    return this.emitThrownSyncMetrics(e, "explicit"), this.invalidateRetiredRoot(e), void this.invalidateClosedIndex(e);
                }
            }
            if ("acked" === o) return {
                ...tc("path"),
                walkMs: 0,
                hashMs: 0
            };
        }
    }
    startExclusiveMutationClaimPolling() {
        void 0 === this.lockOwnerId || this.exclusiveMutationClaimArmed || this.isClosing() || (this.armExclusiveMutationClaim(), this.checkExclusiveMutationClaim());
    }
    armExclusiveMutationClaim(e) {
        this.exclusiveMutationClaimArmed = !0, this.exclusiveMutationClaimDueAtMs = wi({
            previousDueAtMs: e,
            intervalMs: this.exclusiveMutationClaimPollMs
        }), this.periodicScheduler.schedule(this.exclusiveMutationClaimHandle, this.exclusiveMutationClaimDueAtMs, this.onExclusiveMutationClaimDue, this);
    }
    stopExclusiveMutationClaimPolling() {
        this.exclusiveMutationClaimArmed && (this.periodicScheduler.cancel(this.exclusiveMutationClaimHandle), this.exclusiveMutationClaimArmed = !1, this.exclusiveMutationClaimDueAtMs = void 0);
    }
    async checkExclusiveMutationClaim() {
        const e = this.exclusiveMutationClaimCheck;
        if (void 0 !== e) return void await e;
        const t = this.checkExclusiveMutationClaimInternal();
        this.exclusiveMutationClaimCheck = t;
        try {
            await t;
        } catch (e) {
            this.onEngineWarn("exclusive mutation claim check failed", e);
        } finally{
            this.exclusiveMutationClaimCheck === t && (this.exclusiveMutationClaimCheck = void 0);
        }
    }
    async checkExclusiveMutationClaimInternal() {
        const e = this.lockOwnerId;
        if (void 0 === e || this.isClosing() || "running" !== this.engine?.getState()) return;
        const t = await Mr({
            filesDir: this.filesDir
        });
        if (void 0 === t || t.windowId === e) return;
        const r = await this.forceSync();
        if (void 0 === r || r.errors.length > 0 || this.isClosing() || "running" !== this.engine?.getState()) return;
        const n = await Mr({
            filesDir: this.filesDir
        });
        void 0 !== n && n.windowId !== e && (this.pendingRelinquishCause = "exclusive_claim", await this.relinquishEngineLock());
    }
    startPathSyncRequestPolling() {
        void 0 !== this.pathSyncRequestTimer || this.isClosing() || (this.startExclusiveMutationClaimPolling(), this.pathSyncRequestFailureDelayMs = 0, this.pathSyncRequestRetryNotBeforeMs = 0, this.pathSyncRequestPollMs > 0 && (this.pathSyncRequestTimer = setInterval(()=>{
            this.drainPathSyncRequests();
        }, this.pathSyncRequestPollMs), this.pathSyncRequestTimer.unref?.()), this.drainPathSyncRequests());
    }
    stopPathSyncRequestPolling() {
        this.stopExclusiveMutationClaimPolling(), void 0 !== this.pathSyncRequestTimer && (clearInterval(this.pathSyncRequestTimer), this.pathSyncRequestTimer = void 0);
    }
    notePathSyncRequestDrainFailure() {
        const e = Math.max(this.pathSyncRequestPollMs, 100);
        this.pathSyncRequestFailureDelayMs = 0 === this.pathSyncRequestFailureDelayMs ? e : Math.min(2 * this.pathSyncRequestFailureDelayMs, 3e4), this.pathSyncRequestRetryNotBeforeMs = Date.now() + this.pathSyncRequestFailureDelayMs;
    }
    clearPathSyncRequestDrainFailure() {
        this.pathSyncRequestFailureDelayMs = 0, this.pathSyncRequestRetryNotBeforeMs = 0;
    }
    async drainPathSyncRequests() {
        if (void 0 !== this.pathSyncRequestDrain) return await this.pathSyncRequestDrain, await this.drainPathSyncRequests();
        this.isClosing() || "running" !== this.engine?.getState() || this.denialRemainingMs() > 0 || Date.now() < this.pathSyncRequestRetryNotBeforeMs || (this.pathSyncRequestDrain = (async ()=>{
            for(;;){
                if (this.isClosing() || "running" !== this.engine?.getState()) return;
                const e = co({
                    filesDir: this.filesDir
                });
                if (0 === e.length) return void this.clearPathSyncRequestDrainFailure();
                const t = new Set, r = new Set;
                for (const n of e){
                    const e = "pull" === n.kind ? r : t;
                    for (const t of n.relPaths)e.add(t);
                }
                if (!this.guardedPathsSafe({
                    invalidateOnFailure: !0
                })) return;
                const n = this.engine;
                if (void 0 === n || "running" !== n.getState()) return;
                if (this.denialRemainingMs() > 0) return;
                try {
                    const s = t.size > 0 ? await n.syncPaths([
                        ...t
                    ], {
                        lane: "path-yield"
                    }) : void 0, o = this.pathsWithoutUnjournaledLocalDeletion([
                        ...r
                    ]), i = o.length > 0 ? await n.pullPaths(o, {
                        lane: "path-yield"
                    }) : void 0, a = new Set;
                    let c = !1;
                    for (const e of [
                        s,
                        i
                    ])if (void 0 !== e) {
                        this.emitSyncMetrics(e, "explicit");
                        for (const t of e.errors)void 0 === t.relPath ? c = !0 : a.add(t.relPath);
                    }
                    const l = c ? [] : e.filter((e)=>e.relPaths.every((e)=>!a.has(e))).map((e)=>e.id);
                    if (0 === l.length) return void this.notePathSyncRequestDrainFailure();
                    this.clearPathSyncRequestDrainFailure(), po({
                        filesDir: this.filesDir,
                        requestIds: l
                    });
                } catch (e) {
                    return this.emitThrownSyncMetrics(e, "explicit"), this.invalidateRetiredRoot(e), this.invalidateClosedIndex(e), void this.notePathSyncRequestDrainFailure();
                }
            }
        })().finally(()=>{
            this.pathSyncRequestDrain = void 0;
        }), await this.pathSyncRequestDrain);
    }
    onEngineWarn(e, t) {
        const r = this.onWarnCallback;
        if (void 0 !== r) try {
            r(e, t);
        } catch  {}
    }
    startVersionProbe() {
        const e = this.versionProbe;
        if (void 0 === e || !e.isEnabled()) return;
        if (this.isClosing() || void 0 !== this.syncing || this.followUpNeeded || void 0 !== this.backoffTimer || this.syncBackoff.failures > 0) return;
        const t = this.engine;
        if (void 0 === t || "running" !== t.getState()) return;
        const r = t.versionToProbe();
        if (void 0 === r) return;
        const n = this.client.versionProbeTarget?.({
            agentId: this.key
        });
        return void 0 !== n ? {
            version: r,
            roundGeneration: this.roundGeneration,
            result: e.probe({
                agentId: this.key,
                entry: {
                    ...n,
                    version: r
                }
            })
        } : void 0;
    }
    async runSyncAfterVersionProbe(e, t) {
        const r = await e.result;
        if (this.versionProbeInFlight = !1, this.roundGeneration !== e.roundGeneration || void 0 !== this.syncing || this.periodicSyncHeld) return;
        if (this.isClosing() || "running" !== this.engine?.getState()) return;
        const n = "unchanged" === r?.status && r.version === e.version && this.engine?.versionToProbe() === e.version;
        await this.runSync({
            schedule: t,
            ...n ? {
                remoteUnchangedVersion: e.version
            } : {}
        });
    }
    keepPathLaneOffIdleStreak() {
        const e = this.pendingScheduleKind, t = void 0 !== this.syncing || this.versionProbeInFlight;
        "idle" === e && (this.clearSyncTimer(), t || this.scheduleSync()), (t || "periodic" === e || "idle" === e) && (this.suppressNextIdleNote = !0), this.resetIdleStreak();
    }
    resetIdleStreak() {
        this.consecutiveNoopRounds = 0, this.idleStreakEpoch += 1;
    }
    noteRoundForIdleStreak(e, t, r) {
        this.idleStreakEpoch === t && ("periodic" !== r && "idle" !== r || (!function(e) {
            return !(void 0 === e || !e.listingComplete || 0 !== e.errors.length || 0 !== e.filesPushed || 0 !== e.filesPulled || 0 !== e.filesConflicted || 0 !== (e.tombstonesReceived ?? 0) || 0 !== (e.identicalContentConflictsSuppressed ?? 0) || 0 !== e.pullsDeferred || 0 !== e.filesDeletedRemote || 0 !== e.filesDeletedLocal || 0 !== (e.absenceDeletesApplied ?? 0) || 0 !== e.deleteConflicts || 0 !== e.scanDeletesJournaled || 0 !== (e.rmdirPushed ?? 0) || 0 !== (e.removedDirsApplied ?? 0) || 0 !== e.recoveryDisarms || e.identityRecoveryWipeFailed);
        }(e) ? this.consecutiveNoopRounds = 0 : this.consecutiveNoopRounds += 1));
    }
    nextPeriodicDelay() {
        if (this.idleBackoffFactor <= 1 || this.consecutiveNoopRounds <= 0) return {
            delayMs: this.syncDebounceMs,
            kind: "periodic"
        };
        const e = Math.min(this.consecutiveNoopRounds, 32), t = this.syncDebounceMs * this.idleBackoffFactor ** e, r = Math.min(t, this.syncIdleMaxMs);
        return !Number.isFinite(r) || r <= this.syncDebounceMs ? {
            delayMs: this.syncDebounceMs,
            kind: "periodic"
        } : {
            delayMs: r,
            kind: "idle"
        };
    }
    scheduleSync(e = this.syncDebounceMs, t = "periodic") {
        if (!(this.isClosing() || "idle" === this.conversationActivity && "backoff" !== t)) if (this.disarmSyncSchedule(), "periodic" !== t && "idle" !== t || !this.periodicSyncHeld) {
            if (this.pendingScheduleKind = t, "backoff" === t) return this.backoffTimer = setTimeout(()=>{
                this.backoffTimer = void 0, this.pendingScheduleKind = void 0, this.runSync({
                    schedule: "backoff"
                });
            }, e), void this.backoffTimer.unref?.();
            this.periodicSyncArmed = !0, this.periodicDueAtMs = Date.now() + e, this.periodicScheduler.schedule(this.periodicSyncHandle, this.periodicDueAtMs, this.onPeriodicSyncDue, this);
        } else this.pendingScheduleKind = void 0;
    }
    disarmSyncSchedule() {
        void 0 !== this.backoffTimer && (clearTimeout(this.backoffTimer), this.backoffTimer = void 0), this.periodicSyncArmed && (this.periodicScheduler.cancel(this.periodicSyncHandle), this.periodicSyncArmed = !1, this.periodicDueAtMs = void 0);
    }
    syncScheduleArmed() {
        return void 0 !== this.backoffTimer || this.periodicSyncArmed;
    }
    clearSyncTimer() {
        this.disarmSyncSchedule(), this.pendingScheduleKind = void 0, this.suppressNextIdleNote = !1;
    }
    getOrCreateExplicitFollowUpDeferred() {
        if (void 0 === this.explicitFollowUpDeferred) {
            let e;
            const t = new Promise((t)=>{
                e = t;
            });
            this.explicitFollowUpDeferred = {
                promise: t,
                resolve: e
            };
        }
        return this.explicitFollowUpDeferred.promise;
    }
    takeExplicitFollowUpDeferred() {
        const e = this.explicitFollowUpDeferred;
        return this.explicitFollowUpDeferred = void 0, e;
    }
    resolveExplicitFollowUp(e, t) {
        e?.resolve(t);
    }
    cancelQueuedExplicitFollowUp() {
        const e = this.takeExplicitFollowUpDeferred();
        this.resolveExplicitFollowUp(e, void 0);
    }
    unstickAbandonedRoundWaiters(e) {
        e.unjamChain && (this.engine?.releaseWedgedRoundChain(), this.markLockUnhealthy()), this.syncing = void 0, this.followUpNeeded = !1, this.cancelQueuedExplicitFollowUp(), this.abandonActiveRoundOwner?.(), this.abandonActiveRoundOwner = void 0, this.activeRoundAbandoned = void 0, this.releaseInitialRoundWaiters();
    }
    async runSync(e = {}) {
        if (this.isClosing()) return;
        const t = this.engine;
        if (void 0 === t || "running" !== t.getState()) return;
        const r = e.kind ?? "periodic", n = e.schedule ?? ("explicit" === r ? "explicit" : "periodic");
        return void 0 !== this.syncing ? (this.followUpNeeded = !0, "explicit" === n && (this.followUpSchedule = "explicit"), "explicit" === r ? await this.getOrCreateExplicitFollowUpDeferred() : void 0) : this.skipDeniedSyncRound() ? void 0 : await this.executeSyncRound("explicit" === r, n, e.remoteUnchangedVersion);
    }
    async runFollowUpRound(e, t) {
        if (this.skipDeniedSyncRound()) return void this.resolveExplicitFollowUp(e, void 0);
        const r = await this.executeSyncRound(!0, t);
        if (this.resolveExplicitFollowUp(e, r), !this.isClosing() && void 0 === this.syncing && !this.syncScheduleArmed()) {
            const e = this.nextPeriodicDelay();
            this.scheduleSync(e.delayMs, e.kind);
        }
    }
    isRoundOwner(e, t) {
        return this.syncing === e && this.roundGeneration === t;
    }
    throwSupersededRound(e) {
        const t = e.reason;
        throw new ga({
            code: "round_aborted",
            message: "host resumed from suspend",
            ...void 0 !== t ? {
                cause: t
            } : {}
        });
    }
    async forceSyncWithWatchdog(e, t, r, n) {
        const s = mi(), o = Date.now(), i = this.syncRoundTimeoutMs, a = this.syncRoundProgressTimeoutMs, c = this.syncRoundHardCapMs > 0 ? this.syncRoundHardCapMs : i, l = a > 0;
        this.emitRoundLifecycle({
            kind: "started"
        });
        const u = e.forceSync({
            signal: t.signal,
            roundOwner: r,
            ...void 0 !== n ? {
                remoteUnchangedVersion: n
            } : {}
        }).then((e)=>({
                kind: "fulfilled",
                summary: e
            }), (e)=>({
                kind: "rejected",
                error: e
            }));
        if (!l && 0 === i) {
            const e = await u;
            return (t.signal.aborted || this.roundGeneration !== r) && (this.emitRoundLifecycle({
                kind: "aborted",
                durationMs: mi() - s
            }), nd(t.signal, e)), rd(e);
        }
        let d = s;
        if (l) {
            const e = this.roundBodyStarted?.generation === r ? this.roundBodyStarted.at : void 0;
            if (void 0 === e) {
                const e = await Promise.race([
                    this.waitForRoundBody(r).then((e)=>({
                            kind: "body",
                            at: e
                        })),
                    u.then((e)=>({
                            kind: "settled",
                            settled: e
                        }))
                ]);
                if ("settled" === e.kind) return this.roundBodyStartWaiters.delete(r), (t.signal.aborted || this.roundGeneration !== r) && (this.emitRoundLifecycle({
                    kind: "aborted",
                    durationMs: mi() - s
                }), nd(t.signal, e.settled)), rd(e.settled);
                this.roundBodyStartWaiters.delete(r), this.roundGeneration !== r && this.throwSupersededRound(t.signal), d = e.at;
            } else d = e;
        }
        const p = this.resumeDetectionMode;
        let m, h = i, f = o, g = !1, y = !1, w = 0, v = 0, _ = 0, b = !1, S = d;
        for(;;){
            if (l && !y) {
                const e = this.progressForGeneration(r)?.at ?? d;
                S = e;
                const t = e + a, n = c > 0 ? d + c : Number.POSITIVE_INFINITY, s = Math.min(t, n);
                h = Math.max(0, s - mi()), f = Date.now(), m = n <= t ? "hard_cap" : "no_progress";
            } else y && (h = ed, f = Date.now(), y = !1);
            const n = await td(u, h);
            if ("deadline" !== n.kind) return (t.signal.aborted || this.roundGeneration !== r) && (this.emitRoundLifecycle({
                kind: "aborted",
                durationMs: mi() - s
            }), nd(t.signal, n)), rd(n);
            if (w = mi() - d, this.roundGeneration !== r && this.throwSupersededRound(t.signal), l) {
                const t = this.progressForGeneration(r)?.at ?? d, n = c > 0 && w >= c;
                if (!n && t > S) continue;
                if (!n && (e.isRoundWaitingOnlyForQueueSlots() || e.isRoundRunningLocalWork())) {
                    const e = mi();
                    this.roundProgress = {
                        at: e,
                        wallAt: Date.now(),
                        generation: r
                    };
                    continue;
                }
            }
            if ({ wallElapsedMs: v, lateMs: _, late: b } = this.deadlineLateness({
                roundWallStartedAt: o,
                waitWallStartedAt: f,
                waitMs: h
            }), g || !this.shouldYieldLateDeadline(_, p)) break;
            g = !0, y = !0, this.emitRoundLifecycle({
                kind: "rearmed",
                durationMs: w,
                lateMs: _
            }), this.onEngineWarn(`round deadline slept through (lateMs=${Math.round(_)}); re-arming once`, void 0);
        }
        this.roundWatchdogTripped = !0, this.emitRoundLifecycle({
            kind: "timeout",
            durationMs: w,
            lateMs: _,
            late: b,
            ...void 0 !== m ? {
                reason: m
            } : {}
        });
        const k = "hard_cap" === m ? c : "no_progress" === m ? a : i, x = new ga({
            code: "round_aborted",
            timeoutClass: "round",
            message: "hard_cap" === m ? `sync round reached its ${k}ms hard cap` : "no_progress" === m ? `sync round made no progress for ${k}ms` : `sync round stalled after ${k}ms`
        }), E = void 0 !== m ? `, reason=${m}` : "";
        this.onEngineWarn(`round stalled after ${k}ms (elapsedMs=${Math.round(w)}, wallElapsedMs=${Math.round(v)}, lateMs=${Math.round(_)}, late=${b}${E})`, void 0), t.abort(x), this.emitRoundLifecycle({
            kind: "aborted",
            durationMs: w
        });
        const I = await td(u, this.syncRoundUnwindTimeoutMs);
        if ("fulfilled" === I.kind) return this.roundGeneration !== r && this.throwSupersededRound(t.signal), this.roundUnwound = !0, I.summary;
        if ("rejected" === I.kind) throw this.roundGeneration !== r && this.throwSupersededRound(t.signal), this.roundUnwound = !0, I.error;
        const T = this.unwindHardCapMs(), C = T - this.syncRoundUnwindTimeoutMs, P = C > 0 ? await td(u, C) : {
            kind: "deadline"
        };
        if ("fulfilled" === P.kind) return this.roundGeneration !== r && this.throwSupersededRound(t.signal), this.roundUnwound = !0, P.summary;
        if ("rejected" === P.kind) throw this.roundGeneration !== r && this.throwSupersededRound(t.signal), this.roundUnwound = !0, P.error;
        throw this.roundGeneration !== r && this.throwSupersededRound(t.signal), this.roundUnwound = !1, e.releaseWedgedRoundChain(), this.markLockUnhealthy(e), new ga({
            code: "round_aborted",
            cause: x,
            timeoutClass: "round",
            message: `sync round did not unwind within ${T}ms`
        });
    }
    unwindHardCapMs() {
        return 3 * this.syncRoundUnwindTimeoutMs;
    }
    abandonLock() {
        this.abandonRequested = !0, this.markLockUnhealthy(this.disposingEngine);
    }
    holdsAbandonedLock() {
        return this.abandonRequested && !this.closeReleasedLock;
    }
    markLockUnhealthy(e) {
        (e ?? this.engine)?.markLockUnhealthy(), this.emitLockEvent("lock_released_unhealthy");
    }
    noteRoundBodyStarted(e) {
        if (void 0 === e || e !== this.roundGeneration) return;
        if (this.roundBodyStarted?.generation === e) return;
        const t = mi();
        this.roundBodyStarted = {
            at: t,
            wallAt: Date.now(),
            generation: e
        }, this.roundProgress = this.roundBodyStarted;
        const r = this.roundBodyStartWaiters.get(e);
        if (void 0 !== r) {
            this.roundBodyStartWaiters.delete(e);
            for (const e of r)e(t);
        }
    }
    waitForRoundBody(e) {
        const t = this.roundBodyStarted;
        return t?.generation === e ? Promise.resolve(t.at) : new Promise((t)=>{
            const r = this.roundBodyStarted;
            if (r?.generation === e) return void t(r.at);
            const n = this.roundBodyStartWaiters.get(e) ?? [];
            n.push(t), this.roundBodyStartWaiters.set(e, n);
        });
    }
    progressForGeneration(e) {
        const t = this.roundProgress;
        if (void 0 !== t && t.generation === e) return t;
    }
    deadlineLateness(e) {
        const t = Date.now(), r = t - e.roundWallStartedAt, n = Math.max(0, t - e.waitWallStartedAt - e.waitMs);
        return {
            wallElapsedMs: r,
            lateMs: n,
            late: n > this.lateDeadlineThresholdMs()
        };
    }
    lateDeadlineThresholdMs() {
        return this.resumeGapThresholdMs > 0 ? this.resumeGapThresholdMs : cu.resumeGapThresholdMs;
    }
    shouldYieldLateDeadline(e, t) {
        return "timer_lateness" === t && this.resumeGapThresholdMs > 0 && e > this.resumeGapThresholdMs;
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
        const e = this.failureStreakStretchMs();
        if (e <= 0) return;
        const t = setTimeout(()=>{
            this.failureStreakRestoreTimer === t && (this.failureStreakRestoreTimer = void 0, this.finishFailureStreakStretch());
        }, e);
        t.unref?.(), this.failureStreakRestoreTimer = t;
    }
    reconcileFailureStreakAfterResume() {
        0 !== this.failureStreakPassiveUntilMs && (this.failureStreakStretchMs() <= 0 ? this.finishFailureStreakStretch() : (this.armFailureStreakRestoreTimer(), this.armFailureStreakVacancyProbe()));
    }
    finishFailureStreakStretch() {
        if (this.clearFailureStreakStretch(), this.isClosing()) return;
        const e = Math.max(this.mintGate?.remainingMs ?? 0, this.denialRemainingMs());
        e > 0 ? this.extendPassiveRetryInterval(e) : this.restorePassiveRetryInterval();
    }
    clearFailureStreakRestoreTimer() {
        void 0 !== this.failureStreakRestoreTimer && (clearTimeout(this.failureStreakRestoreTimer), this.failureStreakRestoreTimer = void 0);
    }
    clearFailureStreakStretch() {
        this.failureStreakPassiveUntilMs = 0, this.clearFailureStreakRestoreTimer(), this.clearFailureStreakVacancyProbe();
    }
    vacancyProbeDelayMs() {
        const e = this.syncBackoff.lastDelayMs(), t = this.passiveRetryIntervalMs ?? 0, r = Math.max(e, t);
        return r > 0 ? r : this.syncBackoffMaxMs;
    }
    armFailureStreakVacancyProbe() {
        this.clearFailureStreakVacancyProbe();
        const e = this.failureStreakStretchMs();
        if (e <= 0 || this.isClosing() || "passive" !== this.engine?.getState()) return;
        const t = Math.min(e, this.vacancyProbeDelayMs()), r = setTimeout(()=>{
            this.failureStreakVacancyTimer === r && (this.failureStreakVacancyTimer = void 0, this.probeFailureStreakVacancy());
        }, t);
        r.unref?.(), this.failureStreakVacancyTimer = r;
    }
    clearFailureStreakVacancyProbe() {
        void 0 !== this.failureStreakVacancyTimer && (clearTimeout(this.failureStreakVacancyTimer), this.failureStreakVacancyTimer = void 0);
    }
    async probeFailureStreakVacancy() {
        this.isClosing() || this.failureStreakStretchMs() <= 0 || "passive" === this.engine?.getState() && (await this.recontendForLock(), this.isClosing() || this.failureStreakStretchMs() <= 0 || "passive" !== this.engine?.getState() || this.armFailureStreakVacancyProbe());
    }
    async applyRoundFailurePolicy(e) {
        if (this.isClosing()) return;
        if (this.activeRoundResumeRecoveryPending) return this.activeRoundResumeRecoveryPending = !1, this.consecutiveTimeoutFailures = 0, void (this.consecutiveRoundFailures = 0);
        if (this.roundWatchdogTripped) return this.consecutiveTimeoutFailures = 0, this.consecutiveRoundFailures = 0, void (this.roundUnwound && (this.pendingRelinquishCause = "watchdog", await this.relinquishEngineLock()));
        if (!e.roundFailed) return this.consecutiveTimeoutFailures = 0, void (this.consecutiveRoundFailures = 0);
        if (e.failureTimeoutClassified) return this.consecutiveTimeoutFailures += 1, this.consecutiveRoundFailures = 0, void (this.consecutiveTimeoutFailures >= this.lockReleaseFailureThreshold && (this.consecutiveTimeoutFailures = 0, this.pendingRelinquishCause = "timeout_streak", await this.relinquishEngineLock()));
        this.consecutiveTimeoutFailures = 0;
        const t = (this.mintGate?.remainingMs ?? 0) > 0 || this.denialRemainingMs() > 0;
        if (e.countsTowardStreak && this.lockReleaseFailureStreakThreshold > 0 && !t) return this.consecutiveRoundFailures += 1, void (this.consecutiveRoundFailures >= this.lockReleaseFailureStreakThreshold && (this.consecutiveRoundFailures = 0, this.consecutiveTimeoutFailures = 0, this.failureStreakPassiveUntilMs = Date.now() + this.lockReleaseFailureStreakPassiveMs, this.extendPassiveRetryInterval(this.failureStreakStretchMs()), this.pendingRelinquishCause = "failure_streak", await this.relinquishEngineLock(), "passive" === this.engine?.getState() ? this.armFailureStreakRestoreTimer() : (this.clearFailureStreakStretch(), this.restorePassiveRetryInterval())));
        this.consecutiveRoundFailures = 0;
    }
    async executeSyncRound(e, t = "periodic", r) {
        if (this.isClosing()) return;
        const n = this.engine;
        if (void 0 === n || "running" !== n.getState()) return;
        if (!this.guardedPathsSafe({
            invalidateOnFailure: !0
        })) return;
        let s, o;
        this.currentRoundSchedule = t;
        const i = this.idleStreakEpoch;
        !this.suppressNextIdleNote || "periodic" !== t && "idle" !== t || (this.suppressNextIdleNote = !1, this.idleStreakEpoch += 1);
        const a = new AbortController;
        this.activeRoundAbortController = a, this.roundWatchdogTripped = !1, this.roundUnwound = !0, this.activeRoundResumeRecoveryPending = !1;
        const c = ++this.roundGeneration;
        let l, u;
        l = (async ()=>{
            let u = !1, d = !1;
            try {
                const e = await this.forceSyncWithWatchdog(n, a, c, r);
                if (s = e, this.lastSummary = e, e.listingComplete ? this.markMirror("synced") : e.errors.length > 0 && this.markMirror("sync-failed"), this.emitSyncMetrics(e), Xu(this.onSyncSummaryCallback, e), e.errors.length > 0) {
                    u = !0;
                    for (const t of e.errors)Xu(this.onSyncErrorCallback, t);
                }
                this.isRoundOwner(l, c) && await this.applyRoundFailurePolicy({
                    roundFailed: e.errors.length > 0,
                    failureTimeoutClassified: (p = e.errors, p.length > 0 && p.every((e)=>!("round_aborted" === e.code && ad(e.message) || "round" !== e.timeoutClass && "rpc" !== e.timeoutClass))),
                    countsTowardStreak: e.errors.length > 0 && !e.listingComplete
                });
            } catch (e) {
                if (Ki(e)) d = !0, s = void 0;
                else {
                    u = !ld(e), s = void 0, u && this.markMirror("sync-failed");
                    const t = this.activeRoundResumeRecoveryPending;
                    this.invalidateRetiredRoot(e), this.invalidateClosedIndex(e, {
                        promise: l,
                        generation: c
                    }), t || function(e) {
                        return cd(e, id);
                    }(e) || (this.emitThrownSyncMetrics(e), Xu(this.onSyncErrorCallback, e)), this.isRoundOwner(l, c) && await this.applyRoundFailurePolicy({
                        roundFailed: !0,
                        failureTimeoutClassified: od(e),
                        countsTowardStreak: u && !(e instanceof ga && "lock_held_by_other" === e.code)
                    });
                }
            } finally{
                if (this.activeRoundAbortController === a && (this.activeRoundAbortController = void 0), this.syncing === l) {
                    this.syncing = void 0;
                    let r = this.syncDebounceMs, n = "periodic";
                    if (this.resumeBackoffResetPending) this.resumeBackoffResetPending = !1, this.syncBackoff.recordSuccess();
                    else if (u) this.resetIdleStreak(), r = this.delayAfterRoundFailure(), n = "backoff", this.failureStreakStretchMs() > 0 && "passive" === this.engine?.getState() && !this.isClosing() && this.armFailureStreakVacancyProbe();
                    else if (d) void 0 !== this.mintGate && this.mintGate.remainingMs <= 0 && this.restorePassiveRetryInterval();
                    else if (this.syncBackoff.recordSuccess(), this.clearFailureStreakStretch(), this.restorePassiveRetryInterval(), this.noteRoundForIdleStreak(s, i, t), "periodic" === n) {
                        const e = this.nextPeriodicDelay();
                        r = e.delayMs, n = e.kind;
                    }
                    if (this.isClosing()) this.followUpNeeded && (this.followUpNeeded = !1, this.cancelQueuedExplicitFollowUp());
                    else if (this.resumeRecoveryInProgress) d && (this.followUpNeeded = !0), d && e && (o = this.getOrCreateExplicitFollowUpDeferred());
                    else if (d && (this.followUpNeeded = !0), d && e && (o = this.getOrCreateExplicitFollowUpDeferred()), this.followUpNeeded) {
                        this.followUpNeeded = !1;
                        const e = this.takeExplicitFollowUpDeferred(), t = this.followUpSchedule ?? "periodic";
                        this.followUpSchedule = void 0, this.runFollowUpRound(e, t);
                    } else this.scheduleSync(r, n);
                }
            }
            var p;
        })(), this.syncing = l;
        const d = new Promise((e)=>{
            u = e;
        });
        this.abandonActiveRoundOwner = u, this.activeRoundAbandoned = d;
        try {
            await Promise.race([
                l,
                d
            ]);
        } finally{
            this.abandonActiveRoundOwner === u && (this.abandonActiveRoundOwner = void 0, this.activeRoundAbandoned = void 0);
        }
        return void 0 !== o ? await o : e ? s : void 0;
    }
    assertPathsSafe() {
        this.validatePathsHook();
    }
    invalidateClosedIndex(e, t) {
        !this.indexClosedInvalidatesSession || this.indexClosedInvalidationStarted || this.isClosing() || void 0 !== t && !this.isRoundOwner(t.promise, t.generation) || !Di(e) || (this.indexClosedInvalidationStarted = !0, this.beginTeardown({
            kind: "invalidate",
            options: {
                flush: !1
            },
            reason: "index_closed"
        }));
    }
    invalidateRetiredRoot(e) {
        !this.rootRetiredInvalidationStarted && function(e) {
            let t = e;
            const r = new Set;
            for(; "object" == typeof t && null !== t && !r.has(t);){
                if (r.add(t), t instanceof ga && "root_retired" === t.code) return !0;
                t = "cause" in t ? t.cause : void 0;
            }
            return !1;
        }(e) && (this.rootRetiredInvalidationStarted = !0, this.beginTeardown({
            kind: "invalidate",
            options: {
                flush: !1
            },
            reason: "root_retired"
        }));
    }
    guardedPathsSafe(e) {
        try {
            return this.validatePathsHook(), !0;
        } catch (t) {
            return e.invalidateOnFailure && this.beginTeardown({
                kind: "invalidate",
                options: {
                    flush: !1
                },
                reason: String(t)
            }), !1;
        }
    }
    delayAfterRoundFailure() {
        const e = this.syncBackoff.recordFailure(), t = this.denialRemainingMs(), r = this.failureStreakStretchMs();
        let n = e;
        if (void 0 !== this.mintGate || r > 0) {
            const s = this.mintGate?.remainingMs ?? 0, o = Math.max(s, t, r);
            o <= 0 ? this.restorePassiveRetryInterval() : (this.extendPassiveRetryInterval(o), n = Math.max(e, o));
        } else t > 0 && (n = Math.max(e, t));
        return t <= 0 ? n : Math.min(Yu, Math.max(n, t));
    }
    skipDeniedSyncRound() {
        if (!0 !== this.skipDeniedMountSync?.()) return !1;
        const e = this.mintDeniedUntilMs?.(), t = Date.now();
        if (void 0 === e || !(e > t)) return this.loggedDenialUntilMs = void 0, !1;
        if (this.loggedDenialUntilMs !== e) {
            this.loggedDenialUntilMs = e;
            const t = Number.isFinite(e) ? new Date(e).toISOString() : "session stand-down";
            this.onEngineWarn(`sync denied until ${t}`, void 0);
        }
        if (this.emitSyncRoundSkipped("denied"), "opening" === this.mirrorSyncState && this.markMirror("sync-failed"), Number.isFinite(e)) {
            const r = Math.min(Math.max(1, e - t), Yu);
            this.scheduleSync(r, "backoff");
        } else this.clearSyncTimer();
        return !0;
    }
    isSyncRoundDenied() {
        return this.denialRemainingMs() > 0;
    }
    denialRemainingMs() {
        if (!0 !== this.skipDeniedMountSync?.()) return 0;
        const e = this.mintDeniedUntilMs?.(), t = Date.now();
        return void 0 !== e && e > t ? Number.isFinite(e) ? e - t : Yu : 0;
    }
    emitSyncRoundSkipped(e) {
        try {
            this.metricsEmitter?.syncRoundSkipped?.({
                agentId: this.key,
                reason: e
            });
        } catch  {}
    }
    extendPassiveRetryInterval(e) {
        const t = this.passiveRetryIntervalMs ?? 0;
        this.engine?.setPassiveRetryIntervalMs(Math.max(t, e));
    }
    restorePassiveRetryInterval() {
        const e = this.failureStreakStretchMs();
        (void 0 !== this.passiveRetryIntervalMs || e > 0) && this.engine?.setPassiveRetryIntervalMs(Math.max(this.passiveRetryIntervalMs ?? 0, e));
    }
    emitSyncMetrics(e, t) {
        const r = this.metricsEmitter;
        if (void 0 === r) return;
        if (0 === e.durationMs && 0 === e.errors.length && !e.listingComplete) return;
        const n = mi();
        this.recordFinishedListing(e, n);
        const s = this.elapsedSinceListingComplete(n);
        try {
            Gi({
                agentId: this.key,
                summary: e,
                metricsEmitter: r,
                listener: r,
                pathHashSalt: this.pathHashSalt,
                sinceLastSuccessMs: s
            }), this.emitRoundSchedule(t);
        } catch  {}
    }
    emitIndexLookupClosed() {
        if (!this.indexLookupClosedEmitted) {
            this.indexLookupClosedEmitted = !0;
            try {
                this.metricsEmitter?.recordIndexLookupClosed?.({
                    agentId: this.key
                });
            } catch  {}
        }
    }
    emitSessionState() {
        try {
            this.metricsEmitter?.onSessionState?.({
                agentId: this.key,
                state: this.conversationActivity
            });
        } catch  {}
    }
    emitRoundSchedule(e) {
        try {
            this.metricsEmitter?.onSyncRound?.({
                agentId: this.key,
                schedule: e ?? this.currentRoundSchedule
            });
        } catch  {}
    }
    emitRoundLifecycle(e) {
        try {
            this.metricsEmitter?.onRoundLifecycle?.({
                agentId: this.key,
                ...e
            });
        } catch  {}
    }
    emitLockEvent(e) {
        try {
            this.metricsEmitter?.onLockEvent?.({
                agentId: this.key,
                kind: e
            });
        } catch  {}
    }
    emitLockRelinquished(e) {
        try {
            this.metricsEmitter?.onLockEvent?.({
                agentId: this.key,
                kind: "lock_relinquished",
                cause: e
            });
        } catch  {}
    }
    emitLockContended(e) {
        const t = "ide" === e.kind || "cli" === e.kind || "private_worker" === e.kind ? e.kind : "unknown";
        try {
            this.metricsEmitter?.onLockEvent?.({
                agentId: this.key,
                kind: "lock_contended",
                holderKind: t,
                samePid: e.samePid
            });
        } catch  {}
    }
    emitResumeDetected(e) {
        const t = {
            agentId: this.key,
            gapMs: e
        };
        Xu(this.onResumeDetectedCallback, t);
        try {
            this.metricsEmitter?.onResumeDetected?.(t);
        } catch  {}
    }
    emitThrownSyncMetrics(e, t) {
        const r = this.metricsEmitter;
        if (void 0 === r) return;
        const n = e instanceof ga ? e.code : Di(e) ? "index_closed" : "unknown", s = "unknown" === n ? function(e) {
            if (e instanceof Error) {
                for (const [t, r] of dd)if (e instanceof t) return r;
                return e instanceof ne.T ? "ConnectError" : ud.test(e.name) ? e.name : "Error";
            }
        }(e) : void 0, o = ld(e) ? void 0 : e instanceof ga && void 0 !== e.timeoutClass ? e.timeoutClass : pd(e) ? "rpc" : void 0, i = this.elapsedSinceListingComplete(mi());
        try {
            this.emitRoundSchedule(t), r.onError?.({
                agentId: this.key,
                op: "unknown",
                errorClass: n,
                ...void 0 !== s ? {
                    errorName: s
                } : {},
                ...void 0 !== o ? {
                    timeoutClass: o
                } : {}
            }), r.onRoundCompleted?.({
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
                identityRecoveryWipeFailed: !1,
                legacyRowsRestored: 0,
                listingComplete: !1,
                errorCount: 1,
                failed: !0,
                walkMs: 0,
                hashMs: 0,
                presignMs: 0,
                uploadMs: 0,
                listMs: 0,
                downloadMs: 0,
                scope: "full",
                ...void 0 !== i ? {
                    sinceLastSuccessMs: i
                } : {}
            });
        } catch  {}
    }
    recordFinishedListing(e, t) {
        e.listingComplete && "full" === (e.scope ?? "full") && (this.lastListingCompleteMonoMs = t);
    }
    elapsedSinceListingComplete(e) {
        const t = this.lastListingCompleteMonoMs;
        if (void 0 !== t) return Math.max(0, e - t);
    }
}
function fd(e, t) {
    const r = e.get(t);
    "open" === r?.kind && r.session.isClosed() && e.delete(t);
}
hd.RESUME_DRAIN_MAX_LAPS = 2;
class gd {
    constructor(){
        this.slots = new Map, this.trackedSessions = new Set, this.keyGeneration = new Map, this.openAttempts = new Map, this.closeAllActive = !1, this.inFlightOpens = new Set, this.abandonedSessions = new Set;
    }
    get(e) {
        fd(this.slots, e);
        const t = this.slots.get(e);
        return function(e) {
            return "open" === e?.kind;
        }(t) ? t.session : void 0;
    }
    has(e) {
        return fd(this.slots, e), this.slots.has(e);
    }
    getSlot(e) {
        return this.slots.get(e);
    }
    track(e) {
        this.trackedSessions.add(e);
    }
    abandonLocks() {
        const e = new Set, t = (t)=>{
            void 0 === t || e.has(t) || (e.add(t), t.isClosed() ? this.trackedSessions.delete(t) : (t.abandonLock(), this.abandonedSessions.add(t)));
        };
        for (const e of this.trackedSessions)t(e);
        for (const e of this.slots.values())"open" !== e.kind && "closing" !== e.kind || t(e.session);
    }
    holdsAbandonedLock() {
        let e = !1;
        for (const t of this.abandonedSessions)t.holdsAbandonedLock() ? e = !0 : this.abandonedSessions.delete(t);
        return e;
    }
    whenAbandonedLockReleased() {
        const e = [];
        for (const t of this.abandonedSessions)t.holdsAbandonedLock() && e.push(t.whenAbandonedLockReleased());
        return 0 === e.length ? Promise.resolve() : Promise.all(e).then(()=>{});
    }
    async open(e, t) {
        if (this.closeAllActive) throw new Error(`AgentStoreSyncSessionController is closing; refusing open for ${e}`);
        const r = this.currentGeneration(e);
        let n;
        const s = new Promise((e)=>{
            n = e;
        });
        this.inFlightOpens.add(s);
        try {
            const n = this.openAttempts.get(e), o = n?.get(r);
            if (void 0 !== o) return await o.promise;
            const i = n ?? new Map;
            void 0 === n && this.openAttempts.set(e, i);
            const a = this.openAfterTracked(e, t, r);
            i.set(r, {
                generation: r,
                promise: a,
                completion: s,
                closeOptions: void 0
            });
            try {
                return await a;
            } finally{
                const t = this.openAttempts.get(e);
                t?.get(r)?.promise === a && (t.delete(r), 0 === t.size && this.openAttempts.delete(e));
            }
        } finally{
            n(), this.inFlightOpens.delete(s);
        }
    }
    async openAfterTracked(e, t, r) {
        await this.awaitClosingSlot(e);
        for (const t of this.earlierOpenAttempts(e, r))await t.completion;
        if (this.closeAllActive) throw new Error(`AgentStoreSyncSessionController is closing; refusing open for ${e}`);
        if (!this.isGenerationCurrent(e, r)) throw new Error(`AgentStoreSyncSession open for ${e} was superseded before starting`);
        fd(this.slots, e);
        const n = this.slots.get(e);
        if ("open" === n?.kind) return n.session;
        if ("opening" === n?.kind) return await n.promise;
        const s = this.openInternal(e, t, r);
        this.slots.set(e, {
            kind: "opening",
            generation: r,
            promise: s
        });
        try {
            const t = await s;
            if (!this.isGenerationCurrent(e, r)) throw await this.closeSession(t, this.supersededCloseOptions(e, r)), new Error(`AgentStoreSyncSession open for ${e} was superseded before publish`);
            if (this.closeAllActive) throw await this.closeSession(t, this.supersededCloseOptions(e, r)), new Error(`AgentStoreSyncSessionController is closing; refusing open for ${e}`);
            const n = this.slots.get(e);
            if ("opening" === n?.kind && n.generation === r && n.promise === s) return this.slots.set(e, {
                kind: "open",
                generation: r,
                session: t
            }), t;
            throw await this.closeSession(t, this.supersededCloseOptions(e, r)), new Error(`AgentStoreSyncSession open for ${e} was superseded before publish`);
        } catch (t) {
            const n = this.slots.get(e);
            throw "opening" === n?.kind && n.generation === r && n.promise === s && this.slots.delete(e), t;
        }
    }
    async forceSync(e) {
        const t = this.get(e);
        if (void 0 !== t) return await t.forceSync();
    }
    async syncPath(e) {
        const t = this.get(e.key);
        if (void 0 !== t) return await t.syncPath(e.relPath, e.options);
    }
    async syncPaths(e, t, r) {
        const n = this.get(e);
        if (void 0 !== n) return await n.syncPaths(t, r);
    }
    async close(e, t) {
        const r = this.slots.get(e), n = this.currentGeneration(e), s = this.openAttempts.get(e)?.get(n), o = this.openAttempts.get(e);
        if (void 0 !== o) for (const e of o.values())e.closeOptions = {
            flush: !0 === e.closeOptions?.flush || t.flush
        };
        if (void 0 === r && void 0 === s || this.supersedeKey(e), void 0 !== r) if ("closing" !== r.kind) {
            if ("opening" === r.kind) {
                const n = r.promise, s = {}, o = n.then(async (e)=>{
                    s.session = e, await this.closeSession(e, t);
                }).catch(()=>{});
                this.slots.set(e, {
                    kind: "closing",
                    generation: this.currentGeneration(e),
                    promise: o,
                    get session () {
                        return s.session;
                    }
                });
                try {
                    await o;
                } finally{
                    const t = this.slots.get(e);
                    "closing" === t?.kind && t.promise === o && this.slots.delete(e);
                }
                return;
            }
            await this.closeOpenSession(e, r.session, t, this.currentGeneration(e));
        } else await r.promise;
    }
    async closeAll(e) {
        this.closeAllActive = !0;
        try {
            for (const t of this.openAttempts.values())for (const r of t.values())r.closeOptions = {
                flush: !0 === r.closeOptions?.flush || e.flush
            };
            const t = [
                ...this.slots.keys()
            ];
            await Promise.all(t.map((t)=>this.close(t, e))), this.inFlightOpens.size > 0 && await Promise.all([
                ...this.inFlightOpens
            ]), this.slots.clear(), this.keyGeneration.clear(), this.openAttempts.clear();
        } finally{
            this.closeAllActive = !1;
        }
    }
    currentGeneration(e) {
        return this.keyGeneration.get(e) ?? 0;
    }
    supersedeKey(e) {
        this.keyGeneration.set(e, this.currentGeneration(e) + 1);
    }
    isGenerationCurrent(e, t) {
        return !this.closeAllActive && this.currentGeneration(e) === t;
    }
    async awaitClosingSlot(e) {
        let t = this.slots.get(e);
        for(; "closing" === t?.kind;)await t.promise, fd(this.slots, e), t = this.slots.get(e);
    }
    earlierOpenAttempts(e, t) {
        const r = this.openAttempts.get(e);
        return void 0 === r ? [] : [
            ...r.values()
        ].filter((e)=>e.generation < t);
    }
    supersededCloseOptions(e, t) {
        const r = this.openAttempts.get(e)?.get(t)?.closeOptions;
        return r ?? {
            flush: !1
        };
    }
    async openInternal(e, t, r) {
        const n = await t(e);
        if (!this.isGenerationCurrent(e, r)) throw await this.closeSession(n, this.supersededCloseOptions(e, r)), new Error(`AgentStoreSyncSession open for ${e} was superseded before publish`);
        const s = this.slots.get(e);
        if ("opening" !== s?.kind || s.generation !== r) throw await this.closeSession(n, this.supersededCloseOptions(e, r)), new Error(`AgentStoreSyncSession open for ${e} was superseded before publish`);
        if (n.isClosing()) throw await n.awaitTeardown(), new Error(`AgentStoreSyncSession open for ${e} was invalidated during open`);
        return n;
    }
    async closeOpenSession(e, t, r, n) {
        const s = this.slots.get(e);
        if ("closing" === s?.kind) return void await s.promise;
        const o = this.closeSession(t, r);
        this.slots.set(e, {
            kind: "closing",
            generation: n,
            promise: o,
            session: t
        });
        try {
            await o;
        } finally{
            const t = this.slots.get(e);
            "closing" === t?.kind && t.promise === o && this.slots.delete(e);
        }
    }
    async closeSession(e, t) {
        if (e.isClosed()) this.trackedSessions.delete(e);
        else try {
            await e.close(t);
        } catch  {} finally{
            e.isClosed() && this.trackedSessions.delete(e);
        }
    }
}
