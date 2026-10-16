import { E } from "./configurationRegistry.js";
import { Ve } from "./errors.js";
import { Q, ne } from "./instantiation.js";
import { Ci, Xo } from "./lazy.js";
import { $e } from "./network.js";
import { Ne } from "./nls.js";
import { Ce } from "./path.js";
import { oe } from "./platform.js";
import { jn } from "./strings.js";
import { fa, lc } from "./ternarySearchTree.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { ye } from "./uri.js";
function Uv(e) {
    return typeof e == "number" && !isNaN(e);
}
function u5e(e, t) {
    return e.name = t ? `${t} (FileSystemError)` : "FileSystemError", e;
}
var cn, qn, id, ln, BT, uc, H0, m6, gr, GT, VT, $T, jT, Ds, mc;
export { $T, BT, Ds, GT, H0, Uv, VT, cn, gr, id, jT, ln, m6, mc, qn, u5e, uc };
var __wakaru_Wt_initialized = false;
export function Wt() {
if (__wakaru_Wt_initialized) return;
__wakaru_Wt_initialized = true;
"use strict";
h(), Ve(), lc(), Ce(), jn(), Ze(), ye(), Ne(), ne(), oe(), $e(), Xo(), cn = Q("fileService"), qn = ((e)=>(e[e.Unknown = 0] = "Unknown", e[e.File = 1] = "File", e[e.Directory = 2] = "Directory", e[e.SymbolicLink = 64] = "SymbolicLink", e))(qn || {}), id = ((e)=>(e[e.Readonly = 1] = "Readonly", e[e.Locked = 2] = "Locked", e))(id || {}), ln = ((e)=>(e.FileExists = "EntryExists", e.FileNotFound = "EntryNotFound", e.FileNotADirectory = "EntryNotADirectory", e.FileIsADirectory = "EntryIsADirectory", e.FileExceedsStorageQuota = "EntryExceedsStorageQuota", e.FileTooLarge = "EntryTooLarge", e.FileWriteLocked = "EntryWriteLocked", e.NoPermissions = "NoPermissions", e.Unavailable = "Unavailable", e.Unknown = "Unknown", e))(ln || {}), BT = class cLe extends Error {
    constructor(t, n){
        super(t), this.code = n;
    }
    static create(t, n) {
        const r = new cLe(t.toString(), n);
        return u5e(r, n), r;
    }
}, uc = class {
    constructor(e, t, n){
        this.resource = e, this.operation = t, this.target = n;
    }
    isOperation(e) {
        return this.operation === e;
    }
}, H0 = class Rb {
    constructor(t, n){
        this.ignorePathCasing = n, this.correlationId = void 0, this.added = new Ci(()=>{
            const r = fa.forUris(()=>this.ignorePathCasing);
            return r.fill(this.rawAdded.map((s)=>[
                    s,
                    !0
                ])), r;
        }), this.updated = new Ci(()=>{
            const r = fa.forUris(()=>this.ignorePathCasing);
            return r.fill(this.rawUpdated.map((s)=>[
                    s,
                    !0
                ])), r;
        }), this.deleted = new Ci(()=>{
            const r = fa.forUris(()=>this.ignorePathCasing);
            return r.fill(this.rawDeleted.map((s)=>[
                    s,
                    !0
                ])), r;
        }), this.rawAdded = [], this.rawUpdated = [], this.rawDeleted = [];
        for (const r of t){
            switch(r.type){
                case 1:
                    this.rawAdded.push(r.resource);
                    break;
                case 0:
                    this.rawUpdated.push(r.resource);
                    break;
                case 2:
                    this.rawDeleted.push(r.resource);
                    break;
            }
            this.correlationId !== Rb.MIXED_CORRELATION && (typeof r.cId == "number" ? this.correlationId === void 0 ? this.correlationId = r.cId : this.correlationId !== r.cId && (this.correlationId = Rb.MIXED_CORRELATION) : this.correlationId !== void 0 && (this.correlationId = Rb.MIXED_CORRELATION));
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
    doContains(t, n, ...r) {
        if (!t) return !1;
        const s = r.length > 0;
        return !!((!s || r.includes(1)) && (this.added.value.get(t) || n.includeChildren && this.added.value.findSuperstr(t)) || (!s || r.includes(0)) && (this.updated.value.get(t) || n.includeChildren && this.updated.value.findSuperstr(t)) || (!s || r.includes(2)) && (this.deleted.value.findSubstr(t) || n.includeChildren && this.deleted.value.findSuperstr(t)));
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
}, H0.MIXED_CORRELATION = null, m6 = H0, gr = class extends Error {
    constructor(e, t, n){
        super(e), this.fileOperationResult = t, this.options = n;
    }
}, GT = class extends gr {
    constructor(e, t, n, r){
        super(e, t, r), this.fileOperationResult = t, this.size = n;
    }
}, VT = class extends gr {
    constructor(e, t, n){
        super(e, 2, n), this.stat = t;
    }
}, $T = {
    OFF: "off",
    ON_EXIT: "onExit",
    ON_EXIT_AND_WINDOW_CLOSE: "onExitAndWindowClose"
}, jT = "", Ds = class Fa {
    static formatSize(t) {
        return Uv(t) || (t = 0), t < Fa.KB ? E(2024, null, t.toFixed(0)) : t < Fa.MB ? E(2025, null, (t / Fa.KB).toFixed(2)) : t < Fa.GB ? E(2026, null, (t / Fa.MB).toFixed(2)) : t < Fa.TB ? E(2027, null, (t / Fa.GB).toFixed(2)) : E(2028, null, (t / Fa.TB).toFixed(2));
    }
}, Ds.KB = 1024, Ds.MB = Ds.KB * Ds.KB, Ds.GB = Ds.MB * Ds.KB, Ds.TB = Ds.GB * Ds.KB, mc = Ds;

}
