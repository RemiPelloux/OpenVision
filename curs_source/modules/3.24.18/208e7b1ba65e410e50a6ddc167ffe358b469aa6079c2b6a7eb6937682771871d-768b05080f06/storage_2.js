import { Qn, XR, le, xr } from "./async.js";
import { Sr } from "./configurationRegistry.js";
import { N, O, Vv, se } from "./event.js";
import { Q, ne } from "./instantiation.js";
import { J, Ut, j, yr } from "./lifecycle.js";
import { At, sa } from "./performance.js";
import { j6 } from "./storage.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { x } from "./uri.js";
import { Us } from "./userDataProfile.js";
function W5e(e) {
    const t = e;
    return !!(t && typeof t == "object" && typeof t.id == "string" && typeof t.isDefault == "boolean" && typeof t.name == "string" && x.isUri(t.location) && x.isUri(t.globalStorageHome) && x.isUri(t.settingsResource) && x.isUri(t.keybindingsResource) && x.isUri(t.tasksResource) && x.isUri(t.snippetsHome) && x.isUri(t.promptsHome) && x.isUri(t.extensionsResource));
}
function fC(e) {
    const t = e.get(ds);
    if (t) try {
        return JSON.parse(t);
    } catch  {}
    return Object.create(null);
}
function _C(e) {
    return e.isDefault || !!e.useDefaultFlags?.globalState;
}
async function B5e(e, t, n, r, s, i) {
    const a = (S)=>{
        try {
            return JSON.parse(S);
        } catch  {
            return S;
        }
    }, o = new Map, l = new Map;
    e.forEach((S, k)=>{
        o.set(k, S), l.set(k, a(S));
    });
    const d = new Map, u = new Map;
    t.forEach((S, k)=>{
        d.set(k, S), u.set(k, a(S));
    });
    const m = new Map, f = new Map;
    n.forEach((S, k)=>{
        m.set(k, S), f.set(k, a(S));
    }), console.group(r !== s ? `Storage: Application (path: ${r})` : `Storage: Application & Profile (path: ${r}, default profile)`);
    const v = [];
    if (o.forEach((S, k)=>{
        v.push({
            key: k,
            value: S
        });
    }), console.table(v), console.groupEnd(), console.log(l), r !== s) {
        console.group(`Storage: Profile (path: ${s}, profile specific)`);
        const S = [];
        d.forEach((k, y)=>{
            S.push({
                key: y,
                value: k
            });
        }), console.table(S), console.groupEnd(), console.log(u);
    }
    console.group(`Storage: Workspace (path: ${i})`);
    const T = [];
    m.forEach((S, k)=>{
        T.push({
            key: k,
            value: S
        });
    }), console.table(T), console.groupEnd(), console.log(f);
}
var kp, ds, G5e, vC, J6;
export { B5e, G5e, J6, W5e, _C, ds, fC, kp, vC };
var __wakaru_tk_initialized = false;
export function tk() {
if (__wakaru_tk_initialized) return;
__wakaru_tk_initialized = true;
"use strict";
h(), le(), se(), j(), sa(), Ze(), j6(), ne(), Us(), kp = "__$__isNewStorageMarker", ds = "__$__targetStorageMarker", G5e = Q("storageService"), vC = class uLe extends J {
    constructor(t = {
        flushInterval: uLe.DEFAULT_FLUSH_INTERVAL
    }){
        super(), this._onDidChangeValue = this._register(new Vv), this._onDidChangeTarget = this._register(new Vv), this.onDidChangeTarget = this._onDidChangeTarget.event, this._onWillSaveState = this._register(new N), this.onWillSaveState = this._onWillSaveState.event, this.runFlushWhenIdle = this._register(new Ut), this._workspaceKeyTargets = void 0, this._profileKeyTargets = void 0, this._applicationKeyTargets = void 0, this.onDiskShouldSaveCallbacks = [], this.flushWhenIdleScheduler = this._register(new xr(()=>this.doFlushWhenIdle(), t.flushInterval));
    }
    get vscodeService() {
        return this;
    }
    onDidChangeValue(t, n, r) {
        return O.filter(this._onDidChangeValue.event, (s)=>s.scope === t && (n === void 0 || s.key === n), r);
    }
    doFlushWhenIdle() {
        this.runFlushWhenIdle.value = XR(()=>{
            this.shouldFlushWhenIdle() && this.flush(), this.flushWhenIdleScheduler.schedule();
        });
    }
    shouldFlushWhenIdle() {
        return !0;
    }
    stopFlushWhenIdle() {
        yr([
            this.runFlushWhenIdle,
            this.flushWhenIdleScheduler
        ]);
    }
    initialize() {
        return this.initializationPromise || (this.initializationPromise = (async ()=>{
            At("code/willInitStorage");
            try {
                await this.doInitialize();
            } finally{
                At("code/didInitStorage");
            }
            this.flushWhenIdleScheduler.schedule();
        })()), this.initializationPromise;
    }
    emitDidChangeValue(t, n) {
        const { key: r, external: s } = n;
        if (r === ds) {
            switch(t){
                case -1:
                    this._applicationKeyTargets = void 0;
                    break;
                case 0:
                    this._profileKeyTargets = void 0;
                    break;
                case 1:
                    this._workspaceKeyTargets = void 0;
                    break;
            }
            this._onDidChangeTarget.fire({
                scope: t
            });
        } else this._onDidChangeValue.fire({
            scope: t,
            key: r,
            target: this.getKeyTargets(t)[r],
            external: s
        });
    }
    emitWillSaveState(t) {
        this._onWillSaveState.fire({
            reason: t
        });
    }
    get(t, n, r) {
        return this.getStorage(n)?.get(t, r) ?? r;
    }
    getBoolean(t, n, r) {
        return this.getStorage(n)?.getBoolean(t, r) ?? r;
    }
    getNumber(t, n, r) {
        return this.getStorage(n)?.getNumber(t, r) ?? r;
    }
    getObject(t, n, r) {
        return this.getStorage(n)?.getObject(t, r) ?? r;
    }
    storeAll(t, n) {
        this.withPausedEmitters(()=>{
            for (const r of t)this.store(r.key, r.value, r.scope, r.target, n);
        });
    }
    store(t, n, r, s, i = !1) {
        if (Sr(n)) {
            this.remove(t, r, i);
            return;
        }
        this.withPausedEmitters(()=>{
            this.updateKeyTarget(t, r, s), this.getStorage(r)?.set(t, n, i);
        });
    }
    remove(t, n, r = !1) {
        this.withPausedEmitters(()=>{
            this.updateKeyTarget(t, n, void 0), this.getStorage(n)?.delete(t, r);
        });
    }
    withPausedEmitters(t) {
        this._onDidChangeValue.pause(), this._onDidChangeTarget.pause();
        try {
            t();
        } finally{
            this._onDidChangeValue.resume(), this._onDidChangeTarget.resume();
        }
    }
    keys(t, n) {
        const r = [], s = this.getKeyTargets(t);
        for (const i of Object.keys(s))s[i] === n && r.push(i);
        return r;
    }
    updateKeyTarget(t, n, r, s = !1) {
        const i = this.getKeyTargets(n);
        typeof r == "number" ? i[t] !== r && (i[t] = r, this.getStorage(n)?.set(ds, JSON.stringify(i), s)) : typeof i[t] == "number" && (delete i[t], this.getStorage(n)?.set(ds, JSON.stringify(i), s));
    }
    get workspaceKeyTargets() {
        return this._workspaceKeyTargets || (this._workspaceKeyTargets = this.loadKeyTargets(1)), this._workspaceKeyTargets;
    }
    get profileKeyTargets() {
        return this._profileKeyTargets || (this._profileKeyTargets = this.loadKeyTargets(0)), this._profileKeyTargets;
    }
    get applicationKeyTargets() {
        return this._applicationKeyTargets || (this._applicationKeyTargets = this.loadKeyTargets(-1)), this._applicationKeyTargets;
    }
    getKeyTargets(t) {
        switch(t){
            case -1:
                return this.applicationKeyTargets;
            case 0:
                return this.profileKeyTargets;
            default:
                return this.workspaceKeyTargets;
        }
    }
    loadKeyTargets(t) {
        const n = this.getStorage(t);
        return n ? fC(n) : Object.create(null);
    }
    isNew(t) {
        return this.getBoolean(kp, t) === !0;
    }
    async collectionBulkInsert(t, n) {
        return this.getStorage(-1)?.collectionBulkInsert(t, n);
    }
    async collectionUpsertIfPreferred(t, n) {
        return this.getStorage(-1)?.collectionUpsertIfPreferred(t, n) ?? {
            applied: 0,
            rejected: n.map((r)=>r.pk)
        };
    }
    async collectionDeleteMany(t, n) {
        return this.getStorage(-1)?.collectionDeleteMany(t, n);
    }
    async collectionQuery(t, n) {
        return this.getStorage(-1)?.collectionQuery(t, n) ?? [];
    }
    async cursorDiskKVGet(t, n) {
        return this.getStorage(-1)?.cursorDiskKVGet(t, n);
    }
    async cursorDiskKVGetWithLogs(t) {
        return await this.getStorage(-1)?.cursorDiskKVGetWithLogs(t) ?? {
            result: void 0,
            logs: [
                `[storage] StorageService.cursorDiskKVGetWithLogs: ${t} undefined storage`
            ]
        };
    }
    async cursorDiskKVGetBatch(t) {
        return await this.getStorage(-1)?.cursorDiskKVGetBatch(t) ?? [];
    }
    async cursorDiskKVSet(t, n) {
        return this.getStorage(-1)?.cursorDiskKVSet(t, n);
    }
    async cursorDiskKVSetIfAbsent(t, n) {
        return this.getStorage(-1)?.cursorDiskKVSetIfAbsent(t, n) ?? !1;
    }
    async cursorDiskKVReplaceIfEquals(t, n, r) {
        return this.getStorage(-1)?.cursorDiskKVReplaceIfEquals(t, n, r) ?? !1;
    }
    async cursorDiskKVSetBinary(t, n) {
        return this.getStorage(-1)?.cursorDiskKVSetBinary(t, n);
    }
    async cursorDiskKVSetBinaryBatch(t) {
        return this.getStorage(-1)?.cursorDiskKVSetBinaryBatch(t);
    }
    async cursorDiskKVSetBatch(t, n) {
        return await this.getStorage(-1)?.cursorDiskKVSetBatch(t, n) ?? !1;
    }
    async cursorDiskKVGetBinary(t) {
        return this.getStorage(-1)?.cursorDiskKVGetBinary(t);
    }
    async cursorDiskKVDelete(t, n) {
        return this.getStorage(-1)?.cursorDiskKVDelete(t, n);
    }
    async cursorDiskKVClearPrefix(t) {
        return this.getStorage(-1)?.cursorDiskKVClearPrefix(t);
    }
    async cursorDiskKVGetPrefix(t) {
        return this.getStorage(-1)?.cursorDiskKVGetPrefix(t) ?? [];
    }
    async cursorDiskKVGetPrefixKeys(t) {
        return this.getStorage(-1)?.cursorDiskKVGetPrefixKeys(t) ?? [];
    }
    async cursorDiskKVGetPrefixBinary(t) {
        return this.getStorage(-1)?.cursorDiskKVGetPrefixBinary(t) ?? [];
    }
    cursorDiskKVOnShouldSave(t) {
        return this.onDiskShouldSaveCallbacks.push(t), {
            dispose: ()=>{
                this.onDiskShouldSaveCallbacks = this.onDiskShouldSaveCallbacks.filter((n)=>n !== t);
            }
        };
    }
    async flushStorage(t) {
        await this.getStorage(t)?.flush(0);
    }
    async flush(t = 0) {
        this._onWillSaveState.fire({
            reason: t
        });
        const n = this.getStorage(-1), r = this.getStorage(0), s = this.getStorage(1);
        switch(t){
            case 0:
                for (const i of this.onDiskShouldSaveCallbacks)try {
                    i(t).catch(console.error);
                } catch  {}
                await Qn.settled([
                    n?.whenFlushed() ?? Promise.resolve(),
                    r?.whenFlushed() ?? Promise.resolve(),
                    s?.whenFlushed() ?? Promise.resolve()
                ]);
                break;
            case 1:
                for (const i of this.onDiskShouldSaveCallbacks)try {
                    await i(t);
                } catch (a) {
                    console.error(a);
                }
                await Qn.settled([
                    n?.flush(0) ?? Promise.resolve(),
                    r?.flush(0) ?? Promise.resolve(),
                    s?.flush(0) ?? Promise.resolve()
                ]);
                break;
        }
    }
    async log() {
        const t = this.getStorage(-1)?.items ?? new Map, n = this.getStorage(0)?.items ?? new Map, r = this.getStorage(1)?.items ?? new Map;
        return B5e(t, n, r, this.getLogDetails(-1) ?? "", this.getLogDetails(0) ?? "", this.getLogDetails(1) ?? "");
    }
    async optimize(t, n) {
        return await this.flush(), this.getStorage(t)?.optimize(n);
    }
    async getStorageStats(t) {
        return this.getStorage(t)?.getStorageStats();
    }
    async getStorageSizeBreakdown(t, n) {
        return this.getStorage(t)?.getStorageSizeBreakdown(n);
    }
    async cancelStorageSizeBreakdown(t) {
        await this.getStorage(t)?.cancelStorageSizeBreakdown();
    }
    async switch(t, n) {
        return this.emitWillSaveState(0), W5e(t) ? this.switchToProfile(t, n) : this.switchToWorkspace(t, n);
    }
    canSwitchProfile(t, n) {
        return !(t.id === n.id || _C(n) && _C(t));
    }
    switchData(t, n, r) {
        this.withPausedEmitters(()=>{
            const s = new Set;
            for (const [i, a] of t)s.add(i), n.get(i) !== a && this.emitDidChangeValue(r, {
                key: i,
                external: !0
            });
            for (const [i] of n.items)s.has(i) || this.emitDidChangeValue(r, {
                key: i,
                external: !0
            });
        });
    }
}, vC.DEFAULT_FLUSH_INTERVAL = 60 * 1e3, J6 = vC;

}
