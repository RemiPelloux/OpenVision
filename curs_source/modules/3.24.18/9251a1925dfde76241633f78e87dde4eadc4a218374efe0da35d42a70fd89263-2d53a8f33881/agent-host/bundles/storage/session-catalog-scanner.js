import { isPathSafeSessionId } from "./agent-host-storage.js";
import { init_session_id } from "./session-id.js";
import { init_session_listing_projection } from "./session-listing-projection.js";
import { init_session_manifest } from "./session-manifest.js";
import { SESSION_META_FILE_NAME, init_session_meta } from "./session-meta.js";
import { AgentHostStoreEmptyError, __toESM, errorCode, init_sqlite_store } from "./sqlite-store.js";
import { birthRecency, isSessionStoreGone, readSessionMetaFile, sameSidecarFingerprint, sessionMetaFromStore, sessionMetaPath, sidecarFingerprintOf } from "../../../dist_exports.js";
var import_node_fs8, import_node_path7, watchSessionsDirRecursively, WATCH_DEBOUNCE_MS, WATCH_REARM_MS, WATCH_REARM_MAX_MS, REVALIDATE_INTERVAL_MS, NO_SIDECAR_FINGERPRINT, ABSENT_SIDECAR_FINGERPRINT, HostSessionCatalogScanner;
export { ABSENT_SIDECAR_FINGERPRINT, HostSessionCatalogScanner, NO_SIDECAR_FINGERPRINT, REVALIDATE_INTERVAL_MS, WATCH_DEBOUNCE_MS, WATCH_REARM_MAX_MS, WATCH_REARM_MS, import_node_fs8, import_node_path7, watchSessionsDirRecursively };
var __wakaru_init_session_catalog_scanner_initialized = false;
export function init_session_catalog_scanner() {
if (__wakaru_init_session_catalog_scanner_initialized) return;
__wakaru_init_session_catalog_scanner_initialized = true;
"use strict";
import_node_fs8 = __toESM(require("node:fs"), 1);
import_node_path7 = __toESM(require("node:path"), 1);
init_session_id();
init_session_listing_projection();
init_session_manifest();
init_session_meta();
init_sqlite_store();
watchSessionsDirRecursively = (sessionsDir, listener)=>import_node_fs8.default.watch(sessionsDir, {
        recursive: true
    }, listener);
WATCH_DEBOUNCE_MS = 50;
WATCH_REARM_MS = 5e3;
WATCH_REARM_MAX_MS = 6e4;
REVALIDATE_INTERVAL_MS = 2e3;
NO_SIDECAR_FINGERPRINT = {
    ino: 0,
    mtimeMs: 0,
    size: 0
};
ABSENT_SIDECAR_FINGERPRINT = {
    ino: -1,
    mtimeMs: -1,
    size: -1
};
HostSessionCatalogScanner = class {
    constructor(options2){
        this.bySessionId = new Map();
        this.sessionIdByDirName = new Map();
        this.fingerprintByDirName = new Map();
        this.pendingDirs = new Map();
        this.scanned = false;
        this.disposed = false;
        this.storage = options2.storage;
        this.log = options2.log;
        this.clock = options2.clock;
        this.watch = options2.watch ?? watchSessionsDirRecursively;
        this.onSessionChanged = options2.onSessionChanged;
        this.revalidateIntervalMs = options2.revalidateIntervalMs ?? REVALIDATE_INTERVAL_MS;
    }
    list(limit, select) {
        this.ensureFresh();
        const rows = [];
        const recencyOf = (meta)=>meta.updatedAtMs ?? birthRecency(meta.origin, meta.createdAtMs);
        for (const meta of this.bySessionId.values()){
            if (meta.isArchived) {
                continue;
            }
            const selected = select === void 0 ? {
                recency: recencyOf(meta)
            } : select(meta);
            if (selected !== void 0) {
                rows.push({
                    meta,
                    recency: selected.recency
                });
            }
        }
        rows.sort((a, b2)=>{
            const delta = (b2.recency ?? 0) - (a.recency ?? 0);
            return delta !== 0 ? delta : a.meta.sessionId.localeCompare(b2.meta.sessionId);
        });
        return rows.slice(0, Math.max(0, limit)).map((row)=>row.meta);
    }
    hasCatalogEntries(options2) {
        if (!import_node_fs8.default.existsSync(this.storage.sessionsDir)) {
            if (this.scanned) {
                this.scanAll(false);
                this.scanned = false;
            }
            return false;
        }
        if (options2.refresh) {
            this.ensureFresh();
        }
        for (const meta of this.bySessionId.values()){
            if (!meta.isArchived) {
                return true;
            }
        }
        return false;
    }
    get(sessionId) {
        this.ensureFresh();
        return this.bySessionId.get(sessionId);
    }
    upsert(dirName, meta, fingerprint) {
        this.startWatching();
        this.sessionIdByDirName.set(dirName, meta.sessionId);
        this.bySessionId.set(meta.sessionId, meta);
        this.fingerprintByDirName.set(dirName, fingerprint ?? NO_SIDECAR_FINGERPRINT);
    }
    remove(sessionId) {
        const held = this.bySessionId.delete(sessionId);
        for (const [dirName, id] of this.sessionIdByDirName){
            if (id === sessionId) {
                this.sessionIdByDirName.delete(dirName);
                this.fingerprintByDirName.delete(dirName);
            }
        }
        return held;
    }
    dispose() {
        this.disposed = true;
        this.stopWatching();
        this.rearmTimer?.dispose();
        this.rearmTimer = void 0;
        for (const pending of this.pendingDirs.values()){
            pending.dispose();
        }
        this.pendingDirs.clear();
    }
    ensureFresh() {
        if (this.disposed) {
            return;
        }
        if (!this.scanned) {
            this.startWatching();
            this.scanAll(false);
            this.scanned = true;
            return;
        }
        if (this.watcher === void 0) {
            this.startWatching();
        }
        if (this.lastDiskCheckAtMs === void 0 || this.clock.now() - this.lastDiskCheckAtMs >= this.revalidateIntervalMs) {
            this.scanAll(false);
        }
    }
    scanAll(reportAppeared) {
        this.lastDiskCheckAtMs = this.clock.now();
        let entries;
        try {
            entries = import_node_fs8.default.readdirSync(this.storage.sessionsDir, {
                withFileTypes: true
            });
        } catch (error3) {
            const { code } = errorCode(error3);
            if (code !== "ENOENT") {
                this.log.warn(`[hostStorage] could not read the session directory (${code ?? String(error3)})`);
                return;
            }
            this.stopWatching();
            for (const dirName of [
                ...this.sessionIdByDirName.keys()
            ]){
                this.forgetDir(dirName);
            }
            return;
        }
        const seenDirNames = new Set();
        for (const entry of entries){
            if (!entry.isDirectory()) {
                continue;
            }
            seenDirNames.add(entry.name);
            this.refreshDir(entry.name, reportAppeared);
        }
        for (const dirName of [
            ...this.sessionIdByDirName.keys()
        ]){
            if (!seenDirNames.has(dirName)) {
                this.forgetDir(dirName);
            }
        }
    }
    statFingerprint(dirName) {
        const metaPath = sessionMetaPath(import_node_path7.default.join(this.storage.sessionsDir, dirName));
        try {
            const stat24 = import_node_fs8.default.statSync(metaPath, {
                throwIfNoEntry: false
            });
            return stat24 === void 0 ? "absent" : sidecarFingerprintOf(stat24);
        } catch (error3) {
            this.log.warn(`[hostStorage] could not stat the listing sidecar in ${dirName} (${errorCode(error3).code ?? String(error3)}); re-reading it`);
            return void 0;
        }
    }
    refreshDir(dirName, reportAppeared) {
        if (!isPathSafeSessionId(dirName) || isSessionStoreGone(this.storage.sessionDbPath(dirName))) {
            this.forgetDir(dirName);
            return;
        }
        const current = this.statFingerprint(dirName);
        const previous = this.fingerprintByDirName.get(dirName);
        if (current === "absent") {
            if (previous === ABSENT_SIDECAR_FINGERPRINT) {
                return;
            }
        } else if (current !== void 0 && previous !== void 0 && sameSidecarFingerprint(current, previous)) {
            return;
        }
        this.applyDiskState(dirName, this.readDiskState(dirName), reportAppeared);
    }
    readDiskState(dirName) {
        const read = readSessionMetaFile(this.storage.sessionDir(dirName));
        if (read.kind === "ok" && read.meta.sessionId !== dirName) {
            return {
                kind: "unusable",
                reason: `it claims session ${read.meta.sessionId}`,
                fingerprint: read.fingerprint
            };
        }
        if (read.kind === "ok") {
            return {
                kind: "present",
                meta: read.meta,
                fingerprint: read.fingerprint
            };
        }
        if (isSessionStoreGone(this.storage.sessionDbPath(dirName))) {
            return {
                kind: "gone"
            };
        }
        return read;
    }
    applyDiskState(dirName, state, reportAppeared) {
        switch(state.kind){
            case "gone":
                this.forgetDir(dirName);
                return;
            case "present":
                this.applyRow(dirName, state.meta, state.fingerprint, reportAppeared);
                return;
            case "absent":
                {
                    const rebuilt = this.rebuildFromStore(dirName);
                    if (rebuilt.kind !== "rebuilt") {
                        this.dropRow(dirName, rebuilt.kind);
                        return;
                    }
                    this.applyRow(dirName, rebuilt.meta, ABSENT_SIDECAR_FINGERPRINT, reportAppeared);
                    return;
                }
            case "unusable":
                {
                    this.log.warn(`[hostStorage] the listing sidecar in ${dirName} is unusable (${state.reason}); leaving it untouched and listing from the store`);
                    const rebuilt = this.rebuildFromStore(dirName);
                    if (rebuilt.kind !== "rebuilt") {
                        this.dropRow(dirName, rebuilt.kind);
                        return;
                    }
                    this.applyRow(dirName, rebuilt.meta, state.fingerprint, reportAppeared);
                    return;
                }
        }
    }
    dropRow(dirName, cause) {
        if (cause === "gone") {
            this.forgetDir(dirName);
        } else {
            this.unlist(dirName);
        }
    }
    applyRow(dirName, meta, fingerprint, reportAppeared) {
        const appeared = !this.bySessionId.has(meta.sessionId);
        this.upsert(dirName, meta, fingerprint);
        if (appeared && reportAppeared) {
            this.onSessionChanged?.(meta.sessionId, true);
        }
    }
    unlist(dirName) {
        const sessionId = this.sessionIdByDirName.get(dirName);
        this.sessionIdByDirName.delete(dirName);
        this.fingerprintByDirName.delete(dirName);
        if (sessionId !== void 0) {
            this.bySessionId.delete(sessionId);
        }
    }
    rebuildFromStore(dirName) {
        try {
            const meta = sessionMetaFromStore(this.storage, dirName);
            if (meta === void 0) {
                return {
                    kind: "manifest-less"
                };
            }
            this.log.info(`[hostStorage] rebuilt the listing row for session ${dirName} from its store; it has no usable sidecar`);
            return {
                kind: "rebuilt",
                meta
            };
        } catch (error3) {
            if (isSessionStoreGone(this.storage.sessionDbPath(dirName))) {
                return {
                    kind: "gone"
                };
            }
            if (error3 instanceof AgentHostStoreEmptyError) {
                return {
                    kind: "manifest-less"
                };
            }
            this.log.warn(`[hostStorage] could not rebuild the listing row for ${dirName} from its store: ${error3 instanceof Error ? error3.message : String(error3)}`);
            return {
                kind: "manifest-less"
            };
        }
    }
    forgetDir(dirName) {
        const sessionId = this.sessionIdByDirName.get(dirName);
        this.sessionIdByDirName.delete(dirName);
        this.fingerprintByDirName.delete(dirName);
        if (sessionId !== void 0) {
            this.bySessionId.delete(sessionId);
            this.onSessionChanged?.(sessionId, false);
        }
    }
    startWatching() {
        this.armWatcher(WATCH_REARM_MS);
    }
    armWatcher(rearmMs) {
        if (this.watcher !== void 0 || this.rearmTimer !== void 0 || this.disposed) {
            return;
        }
        try {
            import_node_fs8.default.mkdirSync(this.storage.sessionsDir, {
                recursive: true,
                mode: 448
            });
            const watcher = this.watch(this.storage.sessionsDir, (_eventType, fileName)=>this.onWatchEvent(fileName));
            this.watcher = watcher;
            watcher.on("error", (error3)=>{
                if (this.watcher !== watcher) {
                    return;
                }
                this.stopWatching();
                if (errorCode(error3).code === "ENOENT") {
                    this.log.info("[hostStorage] the session directory watcher died on a vanished directory; re-armed");
                    this.startWatching();
                    this.scheduleRefresh("");
                    return;
                }
                this.rearmAfter(rearmMs, error3);
            });
        } catch (error3) {
            this.rearmAfter(rearmMs, error3);
        }
    }
    rearmAfter(rearmMs, error3) {
        this.log.warn(`[hostStorage] the session directory watcher failed (${errorCode(error3).code ?? String(error3)}); re-arming in ${rearmMs / 1e3}s, listing relies on revalidation meanwhile`);
        this.rearmTimer = this.clock.schedule(rearmMs, ()=>{
            this.rearmTimer = void 0;
            this.armWatcher(Math.min(rearmMs * 2, WATCH_REARM_MAX_MS));
            if (this.watcher !== void 0) {
                this.scheduleRefresh("");
            }
        });
    }
    onWatchEvent(fileName) {
        const relative17 = fileName === null ? "" : fileName.toString();
        if (relative17.length === 0) {
            this.scheduleRefresh("");
            return;
        }
        const [dirName, ...rest] = relative17.split(import_node_path7.default.sep);
        if (dirName === void 0 || dirName.length === 0) {
            this.scheduleRefresh("");
            return;
        }
        const leaf = rest[rest.length - 1];
        if (leaf !== void 0 && leaf !== SESSION_META_FILE_NAME && !leaf.startsWith(`${SESSION_META_FILE_NAME}.`)) {
            return;
        }
        this.scheduleRefresh(dirName);
    }
    stopWatching() {
        this.watcher?.close();
        this.watcher = void 0;
    }
    scheduleRefresh(dirName) {
        this.pendingDirs.get(dirName)?.dispose();
        this.pendingDirs.set(dirName, this.clock.schedule(WATCH_DEBOUNCE_MS, ()=>{
            this.pendingDirs.delete(dirName);
            if (this.disposed) {
                return;
            }
            if (dirName.length === 0) {
                this.scanAll(true);
                return;
            }
            this.refreshDir(dirName, true);
        }));
    }
};

}
