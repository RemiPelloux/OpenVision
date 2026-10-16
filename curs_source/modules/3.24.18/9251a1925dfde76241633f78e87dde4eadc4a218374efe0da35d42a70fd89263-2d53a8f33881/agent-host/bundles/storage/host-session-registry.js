import { isPathSafeSessionId } from "./agent-host-storage.js";
import { init_catalog_merge } from "./catalog-merge.js";
import { AgentHostStorageInstruments, createContext, init_instruments } from "./instruments.js";
import { init_open_host_session } from "./open-host-session.js";
import { HostSessionCatalogScanner, init_session_catalog_scanner } from "./session-catalog-scanner.js";
import { init_session_id } from "./session-id.js";
import { init_session_manifest } from "./session-manifest.js";
import { init_session_meta } from "./session-meta.js";
import { AgentHostStoreEmptyError, AgentHostStoreNotAFileError, init_sqlite_store } from "./sqlite-store.js";
import { init_dist } from "../../../context/dist/index.js";
import { birthRecency, describeErrorCode, describeFailure, describeFirstFailures, describeReconciliation, forkHostSession, isSessionStoreGone, mergeRetiredSessionMeta, openOrMigrateHostSession, readManifest, readRetiredSessionMeta, readSessionMetaFile, removeRetiredSessionMeta, restoreHeldSessionMeta, retireHeldSessionMeta, serializeSessionMeta, sessionMetaFromManifestAndProjection, sessionMetaToCatalogEntry, takeSessionMetaIfUnchanged, withCommittedRootAndRecency, writeSessionMeta } from "../../../dist_exports.js";
var HostSessionRegistry;
export { HostSessionRegistry };
var __wakaru_init_host_session_registry_initialized = false;
export function init_host_session_registry() {
if (__wakaru_init_host_session_registry_initialized) return;
__wakaru_init_host_session_registry_initialized = true;
"use strict";
init_dist();
init_catalog_merge();
init_instruments();
init_open_host_session();
init_session_catalog_scanner();
init_session_id();
init_session_manifest();
init_session_meta();
init_sqlite_store();
HostSessionRegistry = class {
    constructor(options2){
        this.preparedSessions = new Map();
        this.inFlightPrepares = new Map();
        this.latestTitles = new Map();
        this.latestArchived = new Map();
        this.disposed = false;
        this.hostOwnedStorageListeners = new Set();
        this.rootAdvancedListeners = new Set();
        this.storage = options2.storage;
        this.log = options2.log;
        this.clock = options2.clock;
        this.instruments = options2.instruments ?? AgentHostStorageInstruments.none;
        this.hasLiveSession = options2.hasLiveSession ?? (()=>false);
        this.catalog = new HostSessionCatalogScanner({
            storage: options2.storage,
            log: options2.log,
            clock: options2.clock,
            ...options2.watch === void 0 ? {} : {
                watch: options2.watch
            },
            onSessionChanged: (sessionId, hostOwned)=>{
                if (hostOwned) {
                    this.notifyHostOwnedStorageChanged(sessionId, true);
                } else {
                    this.forgetDeletedSession(sessionId);
                }
            },
            ...options2.revalidateIntervalMs === void 0 ? {} : {
                revalidateIntervalMs: options2.revalidateIntervalMs
            }
        });
    }
    onHostOwnedStorageChanged(listener) {
        this.hostOwnedStorageListeners.add(listener);
        return ()=>{
            this.hostOwnedStorageListeners.delete(listener);
        };
    }
    onRootAdvanced(listener) {
        this.rootAdvancedListeners.add(listener);
        return ()=>{
            this.rootAdvancedListeners.delete(listener);
        };
    }
    ownedSessionIds() {
        return [
            ...this.preparedSessions.keys()
        ].sort();
    }
    notifyHostOwnedStorageChanged(sessionId, hostOwnedStorage) {
        for (const listener of this.hostOwnedStorageListeners){
            try {
                listener(sessionId, hostOwnedStorage);
            } catch (error3) {
                this.log.error(`[hostStorage] a host-owned storage listener failed for session ${sessionId}`, error3);
            }
        }
    }
    async prepareSession(args) {
        return this.instruments.timeAsync("hydrate", args.ctx ?? createContext(), ()=>this.prepareSessionJoined(args), (prepared)=>({
                hostOwned: prepared !== void 0,
                ...prepared === void 0 ? {} : {
                    kind: prepared.kind
                }
            }));
    }
    async prepareSessionJoined(args) {
        for(;;){
            const existing = this.preparedSessions.get(args.sessionId);
            if (existing !== void 0) {
                return existing;
            }
            const inFlight = this.inFlightPrepares.get(args.sessionId);
            if (inFlight === void 0) {
                break;
            }
            await Promise.allSettled([
                inFlight.settled
            ]);
            if (inFlight.deleted) {
                this.log.info(`[hostStorage] session ${args.sessionId} was deleted while an earlier open or seed of it was in flight; nothing opened, it stays where it was`);
                return void 0;
            }
        }
        const prepare = this.prepareSessionUncontended(args).finally(()=>{
            this.inFlightPrepares.delete(args.sessionId);
        });
        this.inFlightPrepares.set(args.sessionId, {
            settled: prepare,
            deleted: false
        });
        return prepare;
    }
    async prepareSessionUncontended(args) {
        const judgedSidecar = isPathSafeSessionId(args.sessionId) ? readSessionMetaFile(this.storage.sessionDir(args.sessionId)) : {
            kind: "absent"
        };
        let result;
        try {
            result = await openOrMigrateHostSession({
                storage: this.storage,
                sessionId: args.sessionId,
                ...args.initialHistory === void 0 ? {} : {
                    initialHistory: args.initialHistory
                },
                ...args.surfaceHistory === void 0 ? {} : {
                    surfaceHistory: args.surfaceHistory
                },
                ...args.allowCreate === void 0 ? {} : {
                    allowCreate: args.allowCreate
                },
                ...args.legacyGetBlob === void 0 ? {} : {
                    legacyGetBlob: args.legacyGetBlob
                },
                ...args.readCurrentHistory === void 0 ? {} : {
                    readCurrentHistory: args.readCurrentHistory
                },
                ...args.admitSeedHistory === void 0 ? {} : {
                    admitSeedHistory: args.admitSeedHistory
                },
                ...args.mirror === void 0 ? {} : {
                    mirror: args.mirror
                },
                onRootAdvanced: ()=>{
                    this.noteRootAdvanced(args.sessionId);
                },
                now: ()=>this.clock.now(),
                instruments: this.instruments
            });
        } catch (error3) {
            this.log.error(`[hostStorage] session ${args.sessionId} has a committed host store that cannot be opened or hydrated; the session cannot start from it`, error3);
            throw error3;
        }
        switch(result.kind){
            case "unavailable":
                if (result.cause !== "unsafe-session-id") {
                    this.retireStaleSidecar(args.sessionId, {
                        sidecar: judgedSidecar,
                        store: "manifest-less"
                    });
                }
                if (result.cause === "no-history") {
                    this.log.info(`[hostStorage] session ${args.sessionId} has no host store and nothing to seed one from; it stays where it was`);
                } else if (result.cause === "history-moved") {
                    this.log.info(`[hostStorage] session ${args.sessionId} advanced on the surface while its history was being copied; nothing committed, it stays where it was`);
                } else {
                    this.log.warn(`[hostStorage] session ${args.sessionId} stays on the surface's path (pre-commit): ${result.cause}`);
                }
                return void 0;
            case "failed":
                this.retireStaleSidecar(args.sessionId, {
                    sidecar: judgedSidecar,
                    store: result.cause === "not-a-file" ? "refused" : "manifest-less"
                });
                if (result.cause === "not-a-file") {
                    this.log.error(`[hostStorage] session ${args.sessionId} has something other than a regular file at its store path; refused unopened, it stays where it was`, result.error);
                    return void 0;
                }
                this.log.error(`[hostStorage] seeding session ${args.sessionId} failed before anything committed (${result.cause}); it stays where it was${describeFailure(result)}`, result.cause === "closure" ? void 0 : result.error);
                return void 0;
            case "diverged":
                switch(result.cause){
                    case "roots":
                        this.instruments.fault({
                            kind: "roots_diverged",
                            store: "session",
                            sessionId: args.sessionId,
                            relPath: this.storage.sessionDbRelPath(args.sessionId),
                            ...result.divergence
                        });
                        this.instruments.distribution("roots_diverged", 1, {
                            store: "session"
                        });
                        this.log.error(`[hostStorage] session ${args.sessionId} diverged from its committed host store (neither root continues the other); neither side adopted, the session stays where it was`, void 0, result.divergence);
                        break;
                    case "not-equal":
                        this.log.warn(`[hostStorage] session ${args.sessionId} has a committed host store this open may only use as it is, and its transcript is not the handed history's; the session stays where it was`);
                        break;
                    case "closure":
                        this.log.error(`[hostStorage] session ${args.sessionId} has a newer history than its committed host store, but it reaches pieces that failed validation; neither side adopted, the session stays where it was${describeFirstFailures(result.failures)}`);
                        break;
                    case "catch-up":
                        this.log.warn(`[hostStorage] session ${args.sessionId} has a newer history than its committed host store, but the catch-up onto the committed root did not commit${describeErrorCode(result.error)}; the session stays where it was until the next open`);
                        break;
                }
                return void 0;
            case "opened":
            case "seeded":
                {
                    const prepared = {
                        sessionId: args.sessionId,
                        kind: result.kind,
                        store: result.store,
                        consumed: false
                    };
                    if (this.disposed) {
                        result.store.dispose();
                        return void 0;
                    }
                    this.preparedSessions.set(args.sessionId, prepared);
                    if (!this.writeSessionSidecar(prepared, args.workspacePaths)) {
                        return void 0;
                    }
                    this.notifyHostOwnedStorageChanged(args.sessionId, true);
                    const manifest = result.store.getManifest();
                    this.log.info(result.kind === "seeded" ? `[hostStorage] seeded ${manifest.origin} storage for session ${args.sessionId} (${result.migratedBlobCount} piece(s) copied)` : `[hostStorage] opened committed host-owned storage for session ${args.sessionId} (root ${manifest.latestRootBlobIdHex.slice(0, 12)}\u2026${describeReconciliation(result.reconciliation)})`);
                    return prepared;
                }
        }
    }
    async forkSession(args) {
        const parent = this.preparedSessions.get(args.parentSessionId);
        if (parent === void 0) {
            this.log.info(`[hostStorage] fork ${args.sessionId} of session ${args.parentSessionId}: the parent has no host store held here; the fork stays where it was`);
            return false;
        }
        if (this.preparedSessions.has(args.sessionId)) {
            this.log.warn(`[hostStorage] fork ${args.sessionId} of session ${args.parentSessionId} already names a held store; nothing seeded`);
            return false;
        }
        if (this.inFlightPrepares.has(args.sessionId)) {
            this.log.warn(`[hostStorage] fork ${args.sessionId} of session ${args.parentSessionId}: the surface is already opening the fork id, and that open decides where the fork lives; nothing seeded`);
            return false;
        }
        if (this.hasLiveSession(args.sessionId)) {
            this.log.warn(`[hostStorage] fork ${args.sessionId} of session ${args.parentSessionId}: the fork already has a live session here, so it stays where it was; nothing seeded under it`);
            return false;
        }
        const seed = this.seedForkUncontended(args, parent).finally(()=>{
            this.inFlightPrepares.delete(args.sessionId);
        });
        this.inFlightPrepares.set(args.sessionId, {
            settled: seed,
            deleted: false
        });
        return seed;
    }
    async seedForkUncontended(args, parent) {
        const ctx = args.ctx ?? createContext();
        const parentBlobs = parent.store.getBlobStore();
        let store;
        try {
            store = await forkHostSession({
                storage: this.storage,
                instruments: this.instruments
            }, {
                sessionId: args.sessionId,
                history: args.history,
                readParentBlob: (blobId)=>parentBlobs.getBlob(ctx, blobId)
            });
        } catch (error3) {
            this.log.error(`[hostStorage] fork ${args.sessionId} of session ${args.parentSessionId} could not be seeded; the fork stays where it was`, error3);
            return false;
        }
        if (this.inFlightPrepares.get(args.sessionId)?.deleted === true) {
            store.dispose();
            try {
                this.storage.deleteSessionDir(args.sessionId);
            } catch (error3) {
                this.log.error(`[hostStorage] failed to remove the seed of fork ${args.sessionId}, deleted while it was being seeded`, error3);
                return false;
            }
            this.log.info(`[hostStorage] fork ${args.sessionId} of session ${args.parentSessionId} was deleted while its store was being seeded; the seed is removed and nothing announced`);
            return false;
        }
        if (this.disposed) {
            store.dispose();
            return false;
        }
        const manifest = store.getManifest();
        let storePresent;
        try {
            storePresent = this.writeSessionSidecar({
                sessionId: args.sessionId,
                kind: "seeded",
                store
            }, args.workspacePaths ?? this.catalog.get(args.parentSessionId)?.workspacePaths);
        } finally{
            store.dispose();
        }
        if (!storePresent) {
            const inFlight = this.inFlightPrepares.get(args.sessionId);
            if (inFlight !== void 0) {
                inFlight.deleted = true;
            }
            this.log.warn(`[hostStorage] fork ${args.sessionId} of session ${args.parentSessionId}: its store is gone (deleted by another host while it was being seeded); nothing announced`);
            return false;
        }
        this.notifyHostOwnedStorageChanged(args.sessionId, true);
        this.log.info(`[hostStorage] seeded fork ${args.sessionId} of session ${args.parentSessionId} (root ${manifest.latestRootBlobIdHex.slice(0, 12)}\u2026, ${manifest.migratedBlobCount} piece(s) copied from the parent)`);
        return true;
    }
    writeSessionSidecar(prepared, workspacePaths) {
        this.reconcileListingProjection(prepared);
        return this.updateSidecar(prepared.sessionId, (existing)=>this.sidecarFromManifest(prepared, existing, workspacePaths));
    }
    reconcileListingProjection(prepared) {
        const sessionId = prepared.sessionId;
        const title = this.latestTitles.has(sessionId) ? this.resolveTitle(sessionId, void 0) : void 0;
        const isArchived = this.latestArchived.get(sessionId);
        if (!this.latestTitles.has(sessionId) && isArchived === void 0) {
            return;
        }
        this.writeHeldListingProjection(prepared, {
            ...this.latestTitles.has(sessionId) ? {
                title
            } : {},
            ...isArchived === void 0 ? {} : {
                isArchived
            }
        });
    }
    writeHeldListingProjection(prepared, patch) {
        try {
            prepared.store.writeListingProjection(patch);
        } catch (error3) {
            this.log.error(`[hostStorage] failed to write the listing projection for session ${prepared.sessionId}`, error3);
        }
    }
    retireStaleSidecar(sessionId, judged) {
        let held;
        const putBack = ()=>{
            if (held !== void 0) {
                restoreHeldSessionMeta(held);
                held = void 0;
            }
        };
        const retire = ()=>{
            if (held === void 0) {
                return false;
            }
            retireHeldSessionMeta(held);
            held = void 0;
            return true;
        };
        try {
            let now2 = this.lookAtStoreAgain(sessionId, judged.store);
            if ((now2.kind === "holds" || now2.kind === "gone") && judged.sidecar.kind === "ok") {
                const taken = takeSessionMetaIfUnchanged(this.storage.sessionDir(sessionId), judged.sidecar.fingerprint);
                if (taken.kind === "changed") {
                    this.log.info(`[hostStorage] session ${sessionId} had its listing sidecar rewritten while this open was judging the store; the newer listing stands`);
                    return;
                }
                if (taken.kind === "held") {
                    held = taken.held;
                }
                now2 = this.lookAtStoreAgain(sessionId, judged.store);
            }
            switch(now2.kind){
                case "committed":
                    putBack();
                    this.log.info(`[hostStorage] session ${sessionId} was committed by a peer while this open was judging it; its listing stands`);
                    return;
                case "unknown":
                    putBack();
                    this.log.warn(`[hostStorage] could not look at the store of session ${sessionId} again before retiring its listing${describeErrorCode(now2.error)}; it stays listed until the next open`);
                    return;
                case "gone":
                    retire();
                    if (this.catalog.remove(sessionId)) {
                        this.log.info(`[hostStorage] unlisted session ${sessionId}: its store is gone`);
                        this.notifyHostOwnedStorageChanged(sessionId, false);
                    }
                    return;
                case "holds":
                    this.log.info(retire() ? `[hostStorage] unlisted session ${sessionId}: its listing sidecar had no committed store behind it` : `[hostStorage] unlisted session ${sessionId}: there is a store at its path with no committed manifest to list it from`);
                    this.catalog.remove(sessionId);
                    this.notifyHostOwnedStorageChanged(sessionId, false);
                    return;
            }
        } catch (error3) {
            try {
                putBack();
            } catch (restoreError) {
                this.log.error(`[hostStorage] the listing sidecar of session ${sessionId} is held under a private name in its directory and could not be put back`, restoreError);
            }
            this.log.error(`[hostStorage] failed to retire the stale listing of session ${sessionId}; it may stay listed until its store is committed or removed`, error3);
        }
    }
    lookAtStoreAgain(sessionId, judgedStore) {
        if (!this.storage.hasSessionStore(sessionId)) {
            return {
                kind: "gone"
            };
        }
        if (judgedStore === "refused") {
            return {
                kind: "holds"
            };
        }
        let store;
        try {
            store = this.storage.readSessionStore(sessionId);
        } catch (error3) {
            if (!this.storage.hasSessionStore(sessionId)) {
                return {
                    kind: "gone"
                };
            }
            if (error3 instanceof AgentHostStoreEmptyError || error3 instanceof AgentHostStoreNotAFileError) {
                return {
                    kind: "holds"
                };
            }
            return {
                kind: "unknown",
                error: error3
            };
        }
        try {
            return readManifest(store) === void 0 ? {
                kind: "holds"
            } : {
                kind: "committed"
            };
        } catch (error3) {
            return {
                kind: "unknown",
                error: error3
            };
        } finally{
            store.close();
        }
    }
    sidecarFromManifest(prepared, existing, workspacePaths) {
        const manifest = prepared.store.getManifest();
        const projection = prepared.store.readListingProjection();
        const title = this.latestTitles.has(prepared.sessionId) ? this.resolveTitle(prepared.sessionId, existing) : existing?.title ?? projection?.title;
        const roots = workspacePaths !== void 0 && workspacePaths.length > 0 ? workspacePaths : existing?.workspacePaths;
        return sessionMetaFromManifestAndProjection(manifest, {
            ...title === void 0 ? {} : {
                title
            },
            isArchived: this.latestArchived.get(prepared.sessionId) ?? existing?.isArchived ?? projection?.isArchived ?? false,
            ...projection?.updatedAtMs === void 0 ? {} : {
                updatedAtMs: projection.updatedAtMs
            }
        }, roots);
    }
    resolveTitle(sessionId, existing) {
        if (this.latestTitles.has(sessionId)) {
            const title = this.latestTitles.get(sessionId)?.trim();
            return title === void 0 || title.length === 0 ? void 0 : title;
        }
        return existing?.title;
    }
    updateSidecar(sessionId, update, proposedUpdatedAtMs) {
        try {
            const sessionDir = this.storage.sessionDir(sessionId);
            const read = readSessionMetaFile(sessionDir);
            if (read.kind === "unusable") {
                this.log.warn(`[hostStorage] not writing the listing sidecar for session ${sessionId}: the existing sidecar is unusable (${read.reason})`);
                return true;
            }
            const onDisk = read.kind === "ok" ? read.meta : void 0;
            const prepared = this.preparedSessions.get(sessionId);
            if (onDisk === void 0 && isSessionStoreGone(this.storage.sessionDbPath(sessionId))) {
                if (prepared !== void 0) {
                    this.forgetDeletedSession(sessionId);
                }
                return false;
            }
            const retired = prepared === void 0 ? void 0 : readRetiredSessionMeta(sessionDir);
            const existing = mergeRetiredSessionMeta({
                onDisk,
                retired: retired?.meta
            });
            const merged = update(existing) ?? existing;
            if (merged === void 0) {
                return true;
            }
            const next = withCommittedRootAndRecency(merged, {
                committedRoot: prepared?.store.readCommittedRoot(),
                existingUpdatedAtMs: existing?.updatedAtMs,
                proposedUpdatedAtMs
            });
            const fingerprint = read.kind === "ok" && serializeSessionMeta(next) === serializeSessionMeta(read.meta) ? read.fingerprint : writeSessionMeta(sessionDir, next);
            if (retired !== void 0) {
                removeRetiredSessionMeta(retired);
                if (retired.unusableReasons.length > 0) {
                    this.log.warn(`[hostStorage] leaving ${retired.unusableReasons.length} retired listing sidecar(s) of session ${sessionId} in place: not readable by this build (${retired.unusableReasons.join("; ")})`);
                }
            }
            this.catalog.upsert(sessionId, next, fingerprint);
        } catch (error3) {
            this.log.error(`[hostStorage] failed to write the listing sidecar for session ${sessionId}`, error3);
        }
        return true;
    }
    noteRootAdvanced(sessionId) {
        const prepared = this.preparedSessions.get(sessionId);
        this.updateSidecar(sessionId, (existing)=>(existing ?? (prepared === void 0 ? void 0 : this.sidecarFromManifest(prepared, void 0, void 0))), this.clock.now());
        for (const listener of this.rootAdvancedListeners){
            try {
                listener(sessionId);
            } catch (error3) {
                this.log.error(`[hostStorage] a root-advanced listener failed for session ${sessionId}`, error3);
            }
        }
    }
    noteTitleChanged(sessionId, title) {
        this.latestTitles.set(sessionId, title);
        const prepared = this.preparedSessions.get(sessionId);
        if (prepared !== void 0) {
            this.writeHeldListingProjection(prepared, {
                title: this.resolveTitle(sessionId, void 0)
            });
        }
        this.updateSidecar(sessionId, (existing)=>{
            if (existing === void 0) {
                return void 0;
            }
            const nextTitle = this.resolveTitle(sessionId, existing);
            const { title: _previous, ...rest } = existing;
            return nextTitle === void 0 ? rest : {
                ...rest,
                title: nextTitle
            };
        });
    }
    noteArchivedChanged(sessionId, isArchived) {
        this.latestArchived.set(sessionId, isArchived);
        const prepared = this.preparedSessions.get(sessionId);
        if (prepared !== void 0) {
            this.writeHeldListingProjection(prepared, {
                isArchived
            });
        }
        this.updateSidecar(sessionId, (existing)=>existing === void 0 ? void 0 : {
                ...existing,
                isArchived
            });
    }
    listNativeCatalogEntries(limit, ctx, select) {
        try {
            const entries = this.instruments.time("list", ctx ?? createContext(), ()=>this.catalog.list(limit, select === void 0 ? void 0 : (meta)=>{
                    const selected = select(sessionMetaToCatalogEntry(meta));
                    return selected === void 0 ? void 0 : {
                        recency: selected.updatedAt ?? meta.updatedAtMs ?? birthRecency(meta.origin, meta.createdAtMs)
                    };
                }).map(sessionMetaToCatalogEntry), (rows)=>({
                    resultCount: rows.length
                }));
            this.instruments.distribution("list_result_count", entries.length);
            return entries;
        } catch (error3) {
            this.log.error("[hostStorage] failed to list host-owned sessions", error3);
            return [];
        }
    }
    hasNativeCatalogEntries(options2) {
        try {
            return this.catalog.hasCatalogEntries(options2);
        } catch (error3) {
            this.log.error("[hostStorage] failed to inspect host-owned session coverage", error3);
            return false;
        }
    }
    getPreparedSessionStore(sessionId) {
        return this.preparedSessions.get(sessionId)?.store;
    }
    consumePreparedSessionStore(sessionId) {
        const held = this.preparedSessions.get(sessionId);
        if (held === void 0) {
            return void 0;
        }
        held.consumed = true;
        return held.store;
    }
    rollbackDanglingPreparedSession(sessionId) {
        const held = this.preparedSessions.get(sessionId);
        if (held === void 0 || held.consumed) {
            return false;
        }
        const removable = held.kind === "seeded" && this.isStillOwnSeed(held);
        this.log.warn(`[hostStorage] rolling back the unconsumed ${held.kind} store for session ${sessionId} (${removable ? "removing it" : "closing it, the store is not this prepare's to remove"}); the session stays where it was`);
        if (removable) {
            this.deleteSessionStorage(sessionId);
        } else {
            this.releaseSession(sessionId);
        }
        return true;
    }
    cleanupFailedSessionCreate(sessionId) {
        const held = this.preparedSessions.get(sessionId);
        if (held === void 0) {
            return true;
        }
        if (!held.consumed) {
            this.rollbackDanglingPreparedSession(sessionId);
            return true;
        }
        const removable = held.kind === "seeded" && this.isStillOwnSeed(held);
        this.log.warn(`[hostStorage] cleaning up the consumed ${held.kind} store after session create failed (${removable ? "removing its unchanged seed" : "closing it, the store is not this create's to remove"})`);
        if (removable) {
            return this.deleteSessionStorage(sessionId);
        }
        this.releaseSession(sessionId);
        return true;
    }
    isStillOwnSeed(held) {
        try {
            return held.store.readCommittedRoot() === held.store.getManifest().latestRootBlobIdHex;
        } catch  {
            return false;
        }
    }
    getPreparedBlobStore(args) {
        const prepared = this.preparedSessions.get(args.sessionId) ?? this.preparedSessions.get(args.rootSessionId) ?? (args.parentSessionId === void 0 ? void 0 : this.preparedSessions.get(args.parentSessionId));
        return prepared?.store.getBlobStore();
    }
    hasPreparedSession(sessionId) {
        return this.preparedSessions.has(sessionId);
    }
    hasNativeSession(sessionId) {
        return this.preparedSessions.has(sessionId) || this.catalog.get(sessionId) !== void 0;
    }
    getNativeCatalogEntry(sessionId) {
        const meta = this.catalog.get(sessionId);
        return meta === void 0 ? void 0 : sessionMetaToCatalogEntry(meta);
    }
    releaseSession(sessionId) {
        const prepared = this.preparedSessions.get(sessionId);
        if (prepared === void 0) {
            return;
        }
        this.preparedSessions.delete(sessionId);
        try {
            prepared.store.dispose();
        } catch (error3) {
            this.log.error(`[hostStorage] failed to dispose the store for session ${sessionId}`, error3);
        }
    }
    deleteSessionStorage(sessionId) {
        const inFlight = this.inFlightPrepares.get(sessionId);
        if (inFlight !== void 0) {
            inFlight.deleted = true;
        }
        this.releaseSession(sessionId);
        try {
            this.storage.deleteSessionDir(sessionId);
        } catch (error3) {
            this.log.error(`[hostStorage] failed to delete the storage for session ${sessionId}; it stays listed`, error3);
            return false;
        }
        this.log.info(`[hostStorage] deleted the host-owned storage for session ${sessionId}`);
        this.forgetSession(sessionId);
        return true;
    }
    forgetDeletedSession(sessionId) {
        if (this.preparedSessions.has(sessionId)) {
            this.log.warn(`[hostStorage] the host-owned storage for session ${sessionId} was deleted by another host; closing the store, no further host writes`);
        }
        this.forgetSession(sessionId);
    }
    forgetSession(sessionId) {
        this.catalog.remove(sessionId);
        this.releaseSession(sessionId);
        this.latestTitles.delete(sessionId);
        this.latestArchived.delete(sessionId);
        this.notifyHostOwnedStorageChanged(sessionId, false);
    }
    dispose() {
        this.disposed = true;
        for (const sessionId of [
            ...this.preparedSessions.keys()
        ]){
            this.releaseSession(sessionId);
        }
        this.hostOwnedStorageListeners.clear();
        this.rootAdvancedListeners.clear();
        this.catalog.dispose();
    }
};

}
