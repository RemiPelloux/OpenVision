import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_paths3 } from "./paths.js";
import { dedupKeyFor, dedupKeyForEvent, ensureSecureDirectoryChain, eventToJsonLine, isEnoent, nowMs, openNoFollowSync, parseConflictJournalLines, parsePendingConflictEmit, pendingConflictEmitKey, pendingEmitToJsonLine, readFileNoFollowSync, wrapConflictJournalWarn } from "../../../mcp_sandbox_policy_exports.js";
var import_node_crypto23, fs18, path32, CONFLICT_JOURNAL_ROTATE_BYTES, MAX_DEDUP_ENTRIES, EVENT_SCHEMA_VERSION, PRIVATE_FILE_MODE, O_NOFOLLOW_FLAG, KNOWN_KINDS, PENDING_EMIT_KINDS, ConflictJournal, PendingConflictJournal, PENDING_FILE_MODE;
export { CONFLICT_JOURNAL_ROTATE_BYTES, ConflictJournal, EVENT_SCHEMA_VERSION, KNOWN_KINDS, MAX_DEDUP_ENTRIES, O_NOFOLLOW_FLAG, PENDING_EMIT_KINDS, PENDING_FILE_MODE, PRIVATE_FILE_MODE, PendingConflictJournal, fs18, import_node_crypto23, path32 };
var __wakaru_init_conflict_events_initialized = false;
export function init_conflict_events() {
if (__wakaru_init_conflict_events_initialized) return;
__wakaru_init_conflict_events_initialized = true;
"use strict";
import_node_crypto23 = require("node:crypto");
fs18 = __toESM(require("node:fs"), 1);
path32 = __toESM(require("node:path"), 1);
init_paths3();
CONFLICT_JOURNAL_ROTATE_BYTES = 4 * 1024 * 1024;
MAX_DEDUP_ENTRIES = 65536;
EVENT_SCHEMA_VERSION = 1;
PRIVATE_FILE_MODE = 384;
O_NOFOLLOW_FLAG = fs18.constants.O_NOFOLLOW;
KNOWN_KINDS = new Set([
    "write_conflict",
    "create_conflict",
    "truncate_conflict_failed",
    "conflict_fallback_failed",
    "quota_exceeded",
    "gap"
]);
PENDING_EMIT_KINDS = new Set([
    "write_conflict",
    "create_conflict",
    "truncate_conflict_failed",
    "conflict_fallback_failed",
    "quota_exceeded"
]);
ConflictJournal = class {
    constructor(journalPath, options2){
        this.nextSeq = 1;
        this.appendFailures = 0;
        this.rotations = 0;
        this.emittedConflicts = new Set();
        this.path = journalPath;
        this.epoch = (0, import_node_crypto23.randomUUID)();
        this.warn = wrapConflictJournalWarn(options2?.warn ?? ((message, error3)=>{
            void message;
            void error3;
        }));
        this.hydrateDedupFromDisk();
    }
    hydrateDedupFromDisk() {
        const keys = this.readDedupKeysFromDisk();
        if (keys === void 0) {
            return;
        }
        this.replaceDedupKeys(keys);
    }
    readDedupKeysFromDisk() {
        let body;
        try {
            body = readFileNoFollowSync(this.path);
        } catch (error3) {
            if (!isEnoent(error3)) {
                this.warn("conflict journal dedup hydrate failed", error3);
                return void 0;
            }
            return [];
        }
        const keys = [];
        for (const event of parseConflictJournalLines(body)){
            const key = dedupKeyForEvent(event);
            if (key === void 0) {
                continue;
            }
            keys.push(key);
        }
        return keys;
    }
    replaceDedupKeys(keys) {
        this.emittedConflicts.clear();
        for (const key of keys){
            if (this.emittedConflicts.size >= MAX_DEDUP_ENTRIES) {
                this.emittedConflicts.clear();
            }
            this.emittedConflicts.add(key);
        }
    }
    refreshDedupFromDisk() {
        const keys = this.readDedupKeysFromDisk();
        if (keys === void 0) {
            return false;
        }
        this.replaceDedupKeys(keys);
        return true;
    }
    appendFailureCount() {
        return this.appendFailures;
    }
    rotationCount() {
        return this.rotations;
    }
    wouldDedup(emit2) {
        const key = dedupKeyFor(emit2);
        return key !== void 0 && this.emittedConflicts.has(key);
    }
    emit(emit2) {
        const key = dedupKeyFor(emit2);
        if (key !== void 0 && this.emittedConflicts.has(key)) {
            return true;
        }
        try {
            this.appendEmit(emit2, key);
            return true;
        } catch (error3) {
            this.appendFailures += 1;
            this.warn(`conflict journal append failed; sync round still succeeded (failures=${this.appendFailures})`, error3);
            return false;
        }
    }
    appendEmit(emit2, key) {
        if (key !== void 0 && this.emittedConflicts.has(key)) {
            return;
        }
        const parent = path32.dirname(this.path);
        if (parent.length > 0) {
            ensureSecureDirectoryChain(parent);
        }
        this.maybeRotateLocked();
        const seq2 = this.nextSeq;
        const event = {
            v: EVENT_SCHEMA_VERSION,
            event_id: (0, import_node_crypto23.randomUUID)(),
            journal_epoch: this.epoch,
            seq: seq2,
            ts_ms: nowMs(),
            kind: emit2.kind,
            store_id: emit2.storeId,
            original_rel_path: emit2.originalRelPath,
            conflict_rel_path: emit2.conflictRelPath,
            original_abs_path: emit2.originalAbsPath,
            conflict_abs_path: emit2.conflictAbsPath,
            preserved_bytes: emit2.preservedBytes,
            scope_kind: emit2.scopeKind,
            limit_bytes: emit2.limitBytes,
            usage_bytes: emit2.usageBytes,
            ...emit2.source !== void 0 ? {
                source: emit2.source
            } : {},
            ...emit2.remoteOnly === true ? {
                remote_only: true
            } : {}
        };
        this.writeJsonlLine(event);
        this.nextSeq = seq2 + 1;
        if (key !== void 0) {
            if (this.emittedConflicts.size >= MAX_DEDUP_ENTRIES) {
                this.emittedConflicts.clear();
            }
            this.emittedConflicts.add(key);
        }
    }
    writeJsonlLine(event) {
        const line = eventToJsonLine(event);
        const fd = openNoFollowSync(this.path, {
            baseFlags: fs18.constants.O_WRONLY | fs18.constants.O_CREAT | fs18.constants.O_APPEND,
            mode: PRIVATE_FILE_MODE,
            nofollowFlag: O_NOFOLLOW_FLAG
        });
        try {
            try {
                fs18.fchmodSync(fd, PRIVATE_FILE_MODE);
            } catch  {}
            fs18.writeSync(fd, line);
            try {
                fs18.fsyncSync(fd);
            } catch  {}
        } finally{
            fs18.closeSync(fd);
        }
    }
    maybeRotateLocked() {
        let size;
        try {
            size = fs18.statSync(this.path).size;
        } catch (error3) {
            if (typeof error3 === "object" && error3 !== null && "code" in error3 && error3.code === "ENOENT") {
                return;
            }
            this.warn("conflict journal metadata failed; skipping rotate", error3);
            return;
        }
        if (size < CONFLICT_JOURNAL_ROTATE_BYTES) {
            return;
        }
        try {
            this.forceGapRewriteLocked();
        } catch (error3) {
            this.warn("conflict journal rotate rewrite failed; appending onto oversized journal", error3);
        }
    }
    forceGapRewriteLocked() {
        const seq2 = this.nextSeq;
        const gap = {
            v: EVENT_SCHEMA_VERSION,
            event_id: (0, import_node_crypto23.randomUUID)(),
            journal_epoch: this.epoch,
            seq: seq2,
            ts_ms: nowMs(),
            kind: "gap"
        };
        const line = eventToJsonLine(gap);
        const tmp = `${this.path}.rotate-tmp`;
        try {
            fs18.unlinkSync(tmp);
        } catch (error3) {
            if (!isEnoent(error3)) {
                throw error3;
            }
        }
        const fd = openNoFollowSync(tmp, {
            baseFlags: fs18.constants.O_WRONLY | fs18.constants.O_CREAT | fs18.constants.O_EXCL,
            mode: PRIVATE_FILE_MODE,
            nofollowFlag: O_NOFOLLOW_FLAG
        });
        try {
            try {
                fs18.fchmodSync(fd, PRIVATE_FILE_MODE);
            } catch  {}
            fs18.writeSync(fd, line);
            try {
                fs18.fsyncSync(fd);
            } catch  {}
        } finally{
            fs18.closeSync(fd);
        }
        fs18.renameSync(tmp, this.path);
        this.nextSeq = seq2 + 1;
        this.emittedConflicts.clear();
        this.rotations += 1;
    }
};
PendingConflictJournal = class {
    constructor(pendingPath, options2){
        this.pending = [];
        this.keys = new Set();
        this.persistFailures = 0;
        this.dirty = false;
        this.loadFailed = false;
        this.path = pendingPath;
        this.warn = wrapConflictJournalWarn(options2?.warn ?? ((message, error3)=>{
            void message;
            void error3;
        }));
        const loaded = this.tryReadDisk();
        if (loaded !== void 0) {
            this.pending = loaded.pending;
            this.keys = loaded.keys;
        } else {
            this.loadFailed = true;
        }
    }
    size() {
        return this.pending.length;
    }
    isEmpty() {
        return this.pending.length === 0;
    }
    list() {
        return [
            ...this.pending
        ];
    }
    persistFailureCount() {
        return this.persistFailures;
    }
    reload() {
        const loaded = this.tryReadDisk();
        if (loaded === void 0) {
            return;
        }
        this.loadFailed = false;
        if (!this.dirty) {
            this.pending = loaded.pending;
            this.keys = loaded.keys;
            return;
        }
        const mergedByKey = new Map();
        for (const emit2 of loaded.pending){
            mergedByKey.set(pendingConflictEmitKey(emit2), emit2);
        }
        for (const emit2 of this.pending){
            mergedByKey.set(pendingConflictEmitKey(emit2), emit2);
        }
        const merged = [
            ...mergedByKey.values()
        ];
        this.pending = merged;
        this.keys = new Set(mergedByKey.keys());
        this.dirty = !this.persistPending(merged);
    }
    enqueue(emit2) {
        const key = pendingConflictEmitKey(emit2);
        if (this.keys.has(key)) {
            if (this.dirty || this.loadFailed) {
                this.dirty = !this.persistPending(this.pending);
            }
            return;
        }
        this.keys.add(key);
        this.pending.push(emit2);
        this.dirty = !this.persistPending(this.pending);
    }
    replaceAll(emits) {
        const next = [];
        const nextKeys = new Set();
        for (const emit2 of emits){
            const key = pendingConflictEmitKey(emit2);
            if (nextKeys.has(key)) {
                continue;
            }
            nextKeys.add(key);
            next.push(emit2);
        }
        const recoveringLoad = this.loadFailed;
        if (this.persistPending(next)) {
            if (!recoveringLoad) {
                this.pending = next;
                this.keys = nextKeys;
            }
            this.dirty = false;
        }
    }
    tryReadDisk() {
        let body;
        try {
            body = readFileNoFollowSync(this.path);
        } catch (error3) {
            if (isEnoent(error3)) {
                return {
                    pending: [],
                    keys: new Set()
                };
            }
            this.warn("conflict pending journal load failed", error3);
            return void 0;
        }
        const pending = [];
        const keys = new Set();
        for (const line of body.split("\n")){
            const trimmed = line.trim();
            if (trimmed.length === 0) {
                continue;
            }
            let parsed;
            try {
                parsed = JSON.parse(trimmed);
            } catch  {
                continue;
            }
            const emit2 = parsePendingConflictEmit(parsed);
            if (emit2 === void 0) {
                continue;
            }
            const key = pendingConflictEmitKey(emit2);
            if (keys.has(key)) {
                continue;
            }
            keys.add(key);
            pending.push(emit2);
        }
        return {
            pending,
            keys
        };
    }
    persistPending(pending) {
        if (this.loadFailed) {
            const loaded = this.tryReadDisk();
            if (loaded === void 0) {
                this.persistFailures += 1;
                this.warn(`conflict pending journal persist skipped; sidecar still unreadable (failures=${this.persistFailures})`, void 0);
                return false;
            }
            this.loadFailed = false;
            const mergedByKey = new Map();
            for (const emit2 of loaded.pending){
                mergedByKey.set(pendingConflictEmitKey(emit2), emit2);
            }
            for (const emit2 of pending){
                mergedByKey.set(pendingConflictEmitKey(emit2), emit2);
            }
            const merged = [
                ...mergedByKey.values()
            ];
            this.pending = merged;
            this.keys = new Set(mergedByKey.keys());
            return this.persistPending(merged);
        }
        try {
            if (pending.length === 0) {
                this.removeFile();
                return true;
            }
            const parent = path32.dirname(this.path);
            if (parent.length > 0) {
                ensureSecureDirectoryChain(parent);
            }
            const body = pending.map(pendingEmitToJsonLine).join("");
            this.atomicRewrite(body);
            return true;
        } catch (error3) {
            this.persistFailures += 1;
            this.warn(`conflict pending journal persist failed (failures=${this.persistFailures})`, error3);
            return false;
        }
    }
    atomicRewrite(body) {
        const tmp = `${this.path}.pending-tmp`;
        try {
            fs18.unlinkSync(tmp);
        } catch (error3) {
            if (!isEnoent(error3)) {
                throw error3;
            }
        }
        const fd = openNoFollowSync(tmp, {
            baseFlags: fs18.constants.O_WRONLY | fs18.constants.O_CREAT | fs18.constants.O_EXCL,
            mode: PENDING_FILE_MODE,
            nofollowFlag: O_NOFOLLOW_FLAG
        });
        try {
            try {
                fs18.fchmodSync(fd, PENDING_FILE_MODE);
            } catch  {}
            fs18.writeSync(fd, body);
            try {
                fs18.fsyncSync(fd);
            } catch  {}
        } finally{
            fs18.closeSync(fd);
        }
        fs18.renameSync(tmp, this.path);
    }
    removeFile() {
        try {
            fs18.unlinkSync(this.path);
        } catch (error3) {
            if (!isEnoent(error3)) {
                throw error3;
            }
        }
    }
};
PENDING_FILE_MODE = 384;

}
