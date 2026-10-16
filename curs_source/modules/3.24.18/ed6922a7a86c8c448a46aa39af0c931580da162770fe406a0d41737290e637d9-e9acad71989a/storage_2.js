import { Ct, IV, Lo, Se, Tf, bt, cn, ve, we } from "./HVr.js";
import { Rm, ac, bn, kge } from "./async.js";
import { Ze } from "./instantiation.js";
import { $gn, Ol, S2c, fze, k2c, vn, wI } from "./qIc.js";
import { Fgn, LBe, Q2t, RZr } from "./storage.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { dC } from "./userDataProfile.js";
var $Zr, sOt, yn, _J, gpt, ovi, HZr, Hgn, WZr;
export { $Zr, HZr, Hgn, WZr, _J, gpt, ovi, sOt, yn };
var __wakaru_Vn_initialized = false;
export function Vn() {
if (__wakaru_Vn_initialized) return;
__wakaru_Vn_initialized = true;
"use strict";
x(), bn(), bt(), Se(), wI(), gr(), RZr(), Ze(), dC(), $Zr = "__$__isNewStorageMarker", sOt = "__$__targetStorageMarker", yn = vn("storageService"), _J = ((e)=>(e[e.NONE = 0] = "NONE", e[e.SHUTDOWN = 1] = "SHUTDOWN", e))(_J || {}), gpt = ((e)=>(e[e.APPLICATION = -1] = "APPLICATION", e[e.PROFILE = 0] = "PROFILE", e[e.WORKSPACE = 1] = "WORKSPACE", e))(gpt || {}), ovi = ((e)=>(e[e.USER = 0] = "USER", e[e.MACHINE = 1] = "MACHINE", e))(ovi || {}), HZr = class XSm extends we {
    constructor(t = {
        flushInterval: XSm.DEFAULT_FLUSH_INTERVAL
    }){
        super(), this._onDidChangeValue = this._register(new IV), this._onDidChangeTarget = this._register(new IV), this.onDidChangeTarget = this._onDidChangeTarget.event, this._onWillSaveState = this._register(new ve), this.onWillSaveState = this._onWillSaveState.event, this.runFlushWhenIdle = this._register(new cn), this._workspaceKeyTargets = void 0, this._profileKeyTargets = void 0, this._applicationKeyTargets = void 0, this.onDiskShouldSaveCallbacks = [], this.flushWhenIdleScheduler = this._register(new ac(()=>this.doFlushWhenIdle(), t.flushInterval));
    }
    get vscodeService() {
        return this;
    }
    onDidChangeValue(t, n, i) {
        return Ct.filter(this._onDidChangeValue.event, (r)=>r.scope === t && (n === void 0 || r.key === n), i);
    }
    doFlushWhenIdle() {
        this.runFlushWhenIdle.value = kge(()=>{
            this.shouldFlushWhenIdle() && this.flush(), this.flushWhenIdleScheduler.schedule();
        });
    }
    shouldFlushWhenIdle() {
        return !0;
    }
    stopFlushWhenIdle() {
        Lo([
            this.runFlushWhenIdle,
            this.flushWhenIdleScheduler
        ]);
    }
    initialize() {
        return this.initializationPromise || (this.initializationPromise = (async ()=>{
            Ol("code/willInitStorage");
            try {
                await this.doInitialize();
            } finally{
                Ol("code/didInitStorage");
            }
            this.flushWhenIdleScheduler.schedule();
        })()), this.initializationPromise;
    }
    emitDidChangeValue(t, n) {
        const { key: i, external: r } = n;
        if (i === sOt) {
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
            key: i,
            target: this.getKeyTargets(t)[i],
            external: r
        });
    }
    emitWillSaveState(t) {
        this._onWillSaveState.fire({
            reason: t
        });
    }
    get(t, n, i) {
        return this.getStorage(n)?.get(t, i) ?? i;
    }
    getBoolean(t, n, i) {
        return this.getStorage(n)?.getBoolean(t, i) ?? i;
    }
    getNumber(t, n, i) {
        return this.getStorage(n)?.getNumber(t, i) ?? i;
    }
    getObject(t, n, i) {
        return this.getStorage(n)?.getObject(t, i) ?? i;
    }
    storeAll(t, n) {
        this.withPausedEmitters(()=>{
            for (const i of t)this.store(i.key, i.value, i.scope, i.target, n);
        });
    }
    store(t, n, i, r, s = !1) {
        if (Tf(n)) {
            this.remove(t, i, s);
            return;
        }
        this.withPausedEmitters(()=>{
            this.updateKeyTarget(t, i, r), this.getStorage(i)?.set(t, n, s);
        });
    }
    remove(t, n, i = !1) {
        this.withPausedEmitters(()=>{
            this.updateKeyTarget(t, n, void 0), this.getStorage(n)?.delete(t, i);
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
        const i = [], r = this.getKeyTargets(t);
        for (const s of Object.keys(r))r[s] === n && i.push(s);
        return i;
    }
    updateKeyTarget(t, n, i, r = !1) {
        const s = this.getKeyTargets(n);
        typeof i == "number" ? s[t] !== i && (s[t] = i, this.getStorage(n)?.set(sOt, JSON.stringify(s), r)) : typeof s[t] == "number" && (delete s[t], this.getStorage(n)?.set(sOt, JSON.stringify(s), r));
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
        return n ? S2c(n) : Object.create(null);
    }
    isNew(t) {
        return this.getBoolean($Zr, t) === !0;
    }
    async collectionBulkInsert(t, n) {
        return this.getStorage(-1)?.collectionBulkInsert(t, n);
    }
    async collectionUpsertIfPreferred(t, n) {
        return this.getStorage(-1)?.collectionUpsertIfPreferred(t, n) ?? {
            applied: 0,
            rejected: n.map((i)=>i.pk)
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
    async cursorDiskKVReplaceIfEquals(t, n, i) {
        return this.getStorage(-1)?.cursorDiskKVReplaceIfEquals(t, n, i) ?? !1;
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
        const n = this.getStorage(-1), i = this.getStorage(0), r = this.getStorage(1);
        switch(t){
            case 0:
                for (const s of this.onDiskShouldSaveCallbacks)try {
                    s(t).catch(console.error);
                } catch  {}
                await Rm.settled([
                    n?.whenFlushed() ?? Promise.resolve(),
                    i?.whenFlushed() ?? Promise.resolve(),
                    r?.whenFlushed() ?? Promise.resolve()
                ]);
                break;
            case 1:
                for (const s of this.onDiskShouldSaveCallbacks)try {
                    await s(t);
                } catch (o) {
                    console.error(o);
                }
                await Rm.settled([
                    n?.flush(0) ?? Promise.resolve(),
                    i?.flush(0) ?? Promise.resolve(),
                    r?.flush(0) ?? Promise.resolve()
                ]);
                break;
        }
    }
    async log() {
        const t = this.getStorage(-1)?.items ?? new Map, n = this.getStorage(0)?.items ?? new Map, i = this.getStorage(1)?.items ?? new Map;
        return k2c(t, n, i, this.getLogDetails(-1) ?? "", this.getLogDetails(0) ?? "", this.getLogDetails(1) ?? "");
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
        return this.emitWillSaveState(0), fze(t) ? this.switchToProfile(t, n) : this.switchToWorkspace(t, n);
    }
    canSwitchProfile(t, n) {
        return !(t.id === n.id || $gn(n) && $gn(t));
    }
    switchData(t, n, i) {
        this.withPausedEmitters(()=>{
            const r = new Set;
            for (const [s, o] of t)r.add(s), n.get(s) !== o && this.emitDidChangeValue(i, {
                key: s,
                external: !0
            });
            for (const [s] of n.items)r.has(s) || this.emitDidChangeValue(i, {
                key: s,
                external: !0
            });
        });
    }
}, HZr.DEFAULT_FLUSH_INTERVAL = 60 * 1e3, Hgn = HZr, WZr = class extends Hgn {
    constructor(){
        super(), this.applicationStorage = this._register(new LBe(new Fgn, {
            hint: Q2t.STORAGE_IN_MEMORY
        })), this.profileStorage = this._register(new LBe(new Fgn, {
            hint: Q2t.STORAGE_IN_MEMORY
        })), this.workspaceStorage = this._register(new LBe(new Fgn, {
            hint: Q2t.STORAGE_IN_MEMORY
        })), this._register(this.workspaceStorage.onDidChangeStorage((e)=>this.emitDidChangeValue(1, e))), this._register(this.profileStorage.onDidChangeStorage((e)=>this.emitDidChangeValue(0, e))), this._register(this.applicationStorage.onDidChangeStorage((e)=>this.emitDidChangeValue(-1, e)));
    }
    getStorage(e) {
        switch(e){
            case -1:
                return this.applicationStorage;
            case 0:
                return this.profileStorage;
            default:
                return this.workspaceStorage;
        }
    }
    getLogDetails(e) {
        switch(e){
            case -1:
                return "inMemory (application)";
            case 0:
                return "inMemory (profile)";
            default:
                return "inMemory (workspace)";
        }
    }
    async doInitialize() {}
    async switchToProfile() {}
    async switchToWorkspace() {}
    shouldFlushWhenIdle() {
        return !1;
    }
    hasScope(e) {
        return !1;
    }
};

}
