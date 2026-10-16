import { Ps, S, T0, jn, si } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { Yf, qC } from "./lazy.js";
import { li } from "./network.js";
import { rt } from "./nls.js";
import { ba } from "./path_2.js";
import { c2c, vn } from "./qIc.js";
import { J9, gJ } from "./ternarySearchTree.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Qt } from "./uri.js";
var Ii, _M, OBe, h_, Jfi, FBe, evi, OZr, BBe, WT, mpt, eOt, b3, N7, tOt, FZr, BZr, UZr, h2c, Ig, Oge, Fge, GT;
export { BBe, BZr, FBe, FZr, Fge, GT, Ig, Ii, Jfi, N7, OBe, OZr, Oge, UZr, WT, _M, b3, eOt, evi, h2c, h_, mpt, tOt };
var __wakaru_Fi_initialized = false;
export function Fi() {
if (__wakaru_Fi_initialized) return;
__wakaru_Fi_initialized = true;
"use strict";
x(), si(), gJ(), ba(), Ps(), gr(), Qt(), rt(), Ze(), jn(), li(), qC(), Ii = vn("fileService"), _M = ((e)=>(e[e.Unknown = 0] = "Unknown", e[e.File = 1] = "File", e[e.Directory = 2] = "Directory", e[e.SymbolicLink = 64] = "SymbolicLink", e))(_M || {}), OBe = ((e)=>(e[e.Readonly = 1] = "Readonly", e[e.Locked = 2] = "Locked", e))(OBe || {}), h_ = ((e)=>(e.FileExists = "EntryExists", e.FileNotFound = "EntryNotFound", e.FileNotADirectory = "EntryNotADirectory", e.FileIsADirectory = "EntryIsADirectory", e.FileExceedsStorageQuota = "EntryExceedsStorageQuota", e.FileTooLarge = "EntryTooLarge", e.FileWriteLocked = "EntryWriteLocked", e.NoPermissions = "NoPermissions", e.Unavailable = "Unavailable", e.Unknown = "Unknown", e))(h_ || {}), Jfi = class YSm extends Error {
    constructor(t, n){
        super(t), this.code = n;
    }
    static create(t, n) {
        const i = new YSm(t.toString(), n);
        return c2c(i, n), i;
    }
}, FBe = class {
    constructor(e, t, n){
        this.resource = e, this.operation = t, this.target = n;
    }
    isOperation(e) {
        return this.operation === e;
    }
}, evi = ((e)=>(e[e.UPDATED = 0] = "UPDATED", e[e.ADDED = 1] = "ADDED", e[e.DELETED = 2] = "DELETED", e))(evi || {}), OZr = class s1r {
    constructor(t, n){
        this.ignorePathCasing = n, this.correlationId = void 0, this.added = new Yf(()=>{
            const i = J9.forUris(()=>this.ignorePathCasing);
            return i.fill(this.rawAdded.map((r)=>[
                    r,
                    !0
                ])), i;
        }), this.updated = new Yf(()=>{
            const i = J9.forUris(()=>this.ignorePathCasing);
            return i.fill(this.rawUpdated.map((r)=>[
                    r,
                    !0
                ])), i;
        }), this.deleted = new Yf(()=>{
            const i = J9.forUris(()=>this.ignorePathCasing);
            return i.fill(this.rawDeleted.map((r)=>[
                    r,
                    !0
                ])), i;
        }), this.rawAdded = [], this.rawUpdated = [], this.rawDeleted = [];
        for (const i of t){
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
            this.correlationId !== s1r.MIXED_CORRELATION && (typeof i.cId == "number" ? this.correlationId === void 0 ? this.correlationId = i.cId : this.correlationId !== i.cId && (this.correlationId = s1r.MIXED_CORRELATION) : this.correlationId !== void 0 && (this.correlationId = s1r.MIXED_CORRELATION));
        }
    }
    contains(t, ...n) {
        return this.doContains(t, {
            includeChildren: !1
        }, ...n);
    }
    affects(t, ...n) {
        return this.doContains(t, {
            includeChildren: !0
        }, ...n);
    }
    doContains(t, n, ...i) {
        if (!t) return !1;
        const r = i.length > 0;
        return !!((!r || i.includes(1)) && (this.added.value.get(t) || n.includeChildren && this.added.value.findSuperstr(t)) || (!r || i.includes(0)) && (this.updated.value.get(t) || n.includeChildren && this.updated.value.findSuperstr(t)) || (!r || i.includes(2)) && (this.deleted.value.findSubstr(t) || n.includeChildren && this.deleted.value.findSuperstr(t)));
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
    correlates(t) {
        return this.correlationId === t;
    }
    hasCorrelation() {
        return typeof this.correlationId == "number";
    }
}, OZr.MIXED_CORRELATION = null, BBe = OZr, WT = class extends Error {
    constructor(e, t, n){
        super(e), this.fileOperationResult = t, this.options = n;
    }
}, mpt = class extends WT {
    constructor(e, t, n, i){
        super(e, t, i), this.fileOperationResult = t, this.size = n;
    }
}, eOt = class extends WT {
    constructor(e, t, n){
        super(e, 2, n), this.stat = t;
    }
}, b3 = {
    OFF: "off",
    AFTER_DELAY: "afterDelay",
    ON_FOCUS_CHANGE: "onFocusChange",
    ON_WINDOW_CHANGE: "onWindowChange"
}, N7 = {
    OFF: "off",
    ON_EXIT: "onExit",
    ON_EXIT_AND_WINDOW_CLOSE: "onExitAndWindowClose"
}, tOt = "files.associations", FZr = "files.exclude", BZr = "files.readonlyInclude", UZr = "files.readonlyExclude", h2c = "files.readonlyFromPermissions", Ig = ((e)=>(e[e.FILE = 0] = "FILE", e[e.FOLDER = 1] = "FOLDER", e[e.ROOT_FOLDER = 2] = "ROOT_FOLDER", e[e.PULL_REQUEST = 3] = "PULL_REQUEST", e))(Ig || {}), Oge = "", Fge = class HWe {
    static formatSize(t) {
        return T0(t) || (t = 0), t < HWe.KB ? S(2024, null, t.toFixed(0)) : t < HWe.MB ? S(2025, null, (t / HWe.KB).toFixed(2)) : t < HWe.GB ? S(2026, null, (t / HWe.MB).toFixed(2)) : t < HWe.TB ? S(2027, null, (t / HWe.GB).toFixed(2)) : S(2028, null, (t / HWe.TB).toFixed(2));
    }
}, Fge.KB = 1024, Fge.MB = Fge.KB * Fge.KB, Fge.GB = Fge.MB * Fge.KB, Fge.TB = Fge.GB * Fge.KB, GT = Fge;

}
