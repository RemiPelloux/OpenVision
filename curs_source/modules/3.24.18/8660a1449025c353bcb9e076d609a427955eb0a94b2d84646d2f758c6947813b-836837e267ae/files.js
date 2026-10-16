import { D, Di, Ei, Fa, zR } from "./Iwo.js";
import { _ed, jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { ES, hP } from "./lazy.js";
import { Ki } from "./network.js";
import { Bt } from "./nls.js";
import { Ul } from "./path_2.js";
import { Xq, wve } from "./ternarySearchTree.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn } from "./uri.js";
var is, lO, Cet, $Eo, h_t, IS, Dgr, L6t, Tet, Zq, HEo, Eet, mA, O6t, nhn, Cve, d7, lY, ihn, WEo, GEo, qEo, ked, wk, cAe, uAe, Sx;
export { $Eo, Cet, Cve, Dgr, Eet, GEo, HEo, IS, L6t, O6t, Sx, Tet, WEo, Zq, cAe, d7, h_t, ihn, is, ked, lO, lY, mA, nhn, qEo, uAe, wk };
var __wakaru_ms_initialized = false;
export function ms() {
if (__wakaru_ms_initialized) return;
__wakaru_ms_initialized = true;
"use strict";
E(), Ei(), wve(), Ul(), Fa(), To(), fn(), Bt(), It(), Di(), Ki(), hP(), is = jn("fileService"), lO = ((t)=>(t[t.Unknown = 0] = "Unknown", t[t.File = 1] = "File", t[t.Directory = 2] = "Directory", t[t.SymbolicLink = 64] = "SymbolicLink", t))(lO || {}), Cet = ((t)=>(t[t.Readonly = 1] = "Readonly", t[t.Locked = 2] = "Locked", t))(Cet || {}), $Eo = ((t)=>(t[t.UPDATED = 2] = "UPDATED", t[t.ADDED = 4] = "ADDED", t[t.DELETED = 8] = "DELETED", t))($Eo || {}), h_t = ((t)=>(t[t.None = 0] = "None", t[t.FileReadWrite = 2] = "FileReadWrite", t[t.FileOpenReadWriteClose = 4] = "FileOpenReadWriteClose", t[t.FileReadStream = 16] = "FileReadStream", t[t.FileFolderCopy = 8] = "FileFolderCopy", t[t.PathCaseSensitive = 1024] = "PathCaseSensitive", t[t.Readonly = 2048] = "Readonly", t[t.Trash = 4096] = "Trash", t[t.FileWriteUnlock = 8192] = "FileWriteUnlock", t[t.FileAtomicRead = 16384] = "FileAtomicRead", t[t.FileAtomicWrite = 32768] = "FileAtomicWrite", t[t.FileAtomicDelete = 65536] = "FileAtomicDelete", t[t.FileClone = 131072] = "FileClone", t[t.FileReaddirWithMetadata = 262144] = "FileReaddirWithMetadata", t))(h_t || {}), IS = ((t)=>(t.FileExists = "EntryExists", t.FileNotFound = "EntryNotFound", t.FileNotADirectory = "EntryNotADirectory", t.FileIsADirectory = "EntryIsADirectory", t.FileExceedsStorageQuota = "EntryExceedsStorageQuota", t.FileTooLarge = "EntryTooLarge", t.FileWriteLocked = "EntryWriteLocked", t.NoPermissions = "NoPermissions", t.Unavailable = "Unavailable", t.Unknown = "Unknown", t))(IS || {}), Dgr = class oAb extends Error {
    constructor(e, n){
        super(e), this.code = n;
    }
    static create(e, n) {
        const i = new oAb(e.toString(), n);
        return _ed(i, n), i;
    }
}, L6t = ((t)=>(t[t.CREATE = 0] = "CREATE", t[t.DELETE = 1] = "DELETE", t[t.MOVE = 2] = "MOVE", t[t.COPY = 3] = "COPY", t[t.WRITE = 4] = "WRITE", t))(L6t || {}), Tet = class {
    constructor(t, e, n){
        this.resource = t, this.operation = e, this.target = n;
    }
    isOperation(t) {
        return this.operation === t;
    }
}, Zq = ((t)=>(t[t.UPDATED = 0] = "UPDATED", t[t.ADDED = 1] = "ADDED", t[t.DELETED = 2] = "DELETED", t))(Zq || {}), HEo = class WYs {
    constructor(e, n){
        this.ignorePathCasing = n, this.correlationId = void 0, this.added = new ES(()=>{
            const i = Xq.forUris(()=>this.ignorePathCasing);
            return i.fill(this.rawAdded.map((r)=>[
                    r,
                    !0
                ])), i;
        }), this.updated = new ES(()=>{
            const i = Xq.forUris(()=>this.ignorePathCasing);
            return i.fill(this.rawUpdated.map((r)=>[
                    r,
                    !0
                ])), i;
        }), this.deleted = new ES(()=>{
            const i = Xq.forUris(()=>this.ignorePathCasing);
            return i.fill(this.rawDeleted.map((r)=>[
                    r,
                    !0
                ])), i;
        }), this.rawAdded = [], this.rawUpdated = [], this.rawDeleted = [];
        for (const i of e){
            switch(i.type){
                case 1:
                    this.rawAdded.push(i.resource);
                    break;
                case 0:
                    this.rawUpdated.push(i.resource);
                    break;
                case 2:
                    this.rawDeleted.push(i.resource);
                    break;
            }
            this.correlationId !== WYs.MIXED_CORRELATION && (typeof i.cId == "number" ? this.correlationId === void 0 ? this.correlationId = i.cId : this.correlationId !== i.cId && (this.correlationId = WYs.MIXED_CORRELATION) : this.correlationId !== void 0 && (this.correlationId = WYs.MIXED_CORRELATION));
        }
    }
    contains(e, ...n) {
        return this.doContains(e, {
            includeChildren: !1
        }, ...n);
    }
    affects(e, ...n) {
        return this.doContains(e, {
            includeChildren: !0
        }, ...n);
    }
    doContains(e, n, ...i) {
        if (!e) return !1;
        const r = i.length > 0;
        return !!((!r || i.includes(1)) && (this.added.value.get(e) || n.includeChildren && this.added.value.findSuperstr(e)) || (!r || i.includes(0)) && (this.updated.value.get(e) || n.includeChildren && this.updated.value.findSuperstr(e)) || (!r || i.includes(2)) && (this.deleted.value.findSubstr(e) || n.includeChildren && this.deleted.value.findSuperstr(e)));
    }
    gotAdded() {
        return this.rawAdded.length > 0;
    }
    gotDeleted() {
        return this.rawDeleted.length > 0;
    }
    gotUpdated() {
        return this.rawUpdated.length > 0;
    }
    correlates(e) {
        return this.correlationId === e;
    }
    hasCorrelation() {
        return typeof this.correlationId == "number";
    }
}, HEo.MIXED_CORRELATION = null, Eet = HEo, mA = class extends Error {
    constructor(t, e, n){
        super(t), this.fileOperationResult = e, this.options = n;
    }
}, O6t = class extends mA {
    constructor(t, e, n, i){
        super(t, e, i), this.fileOperationResult = e, this.size = n;
    }
}, nhn = class extends mA {
    constructor(t, e, n){
        super(t, 2, n), this.stat = e;
    }
}, Cve = ((t)=>(t[t.FILE_IS_DIRECTORY = 0] = "FILE_IS_DIRECTORY", t[t.FILE_NOT_FOUND = 1] = "FILE_NOT_FOUND", t[t.FILE_NOT_MODIFIED_SINCE = 2] = "FILE_NOT_MODIFIED_SINCE", t[t.FILE_MODIFIED_SINCE = 3] = "FILE_MODIFIED_SINCE", t[t.FILE_MOVE_CONFLICT = 4] = "FILE_MOVE_CONFLICT", t[t.FILE_WRITE_LOCKED = 5] = "FILE_WRITE_LOCKED", t[t.FILE_PERMISSION_DENIED = 6] = "FILE_PERMISSION_DENIED", t[t.FILE_TOO_LARGE = 7] = "FILE_TOO_LARGE", t[t.FILE_INVALID_PATH = 8] = "FILE_INVALID_PATH", t[t.FILE_NOT_DIRECTORY = 9] = "FILE_NOT_DIRECTORY", t[t.FILE_OTHER_ERROR = 10] = "FILE_OTHER_ERROR", t[t.FILE_CANCELED = 11] = "FILE_CANCELED", t))(Cve || {}), d7 = {
    OFF: "off",
    AFTER_DELAY: "afterDelay",
    ON_FOCUS_CHANGE: "onFocusChange",
    ON_WINDOW_CHANGE: "onWindowChange"
}, lY = {
    OFF: "off",
    ON_EXIT: "onExit",
    ON_EXIT_AND_WINDOW_CLOSE: "onExitAndWindowClose"
}, ihn = "files.associations", WEo = "files.exclude", GEo = "files.readonlyInclude", qEo = "files.readonlyExclude", ked = "files.readonlyFromPermissions", wk = ((t)=>(t[t.FILE = 0] = "FILE", t[t.FOLDER = 1] = "FOLDER", t[t.ROOT_FOLDER = 2] = "ROOT_FOLDER", t[t.PULL_REQUEST = 3] = "PULL_REQUEST", t))(wk || {}), cAe = "", uAe = class omt {
    static formatSize(e) {
        return zR(e) || (e = 0), e < omt.KB ? D(2024, null, e.toFixed(0)) : e < omt.MB ? D(2025, null, (e / omt.KB).toFixed(2)) : e < omt.GB ? D(2026, null, (e / omt.MB).toFixed(2)) : e < omt.TB ? D(2027, null, (e / omt.GB).toFixed(2)) : D(2028, null, (e / omt.TB).toFixed(2));
    }
}, uAe.KB = 1024, uAe.MB = uAe.KB * uAe.KB, uAe.GB = uAe.MB * uAe.KB, uAe.TB = uAe.GB * uAe.KB, Sx = uAe;

}
