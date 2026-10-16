import { Dse, Gt, Nc, Qe, Vn, Yw, en, st, tt } from "./Iwo.js";
import { Aed, Med, Ped, jn, mP, qZn, ud } from "./SZu.js";
import { BOe, I_, Yu, qn } from "./async.js";
import { It } from "./instantiation.js";
import { LEo, ehn, jZn, ket } from "./storage.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { JR } from "./userDataProfile.js";
var KEo, ohn, ki, Lke, io, Wg, YEo, zZn, XEo;
export { KEo, Lke, Wg, XEo, YEo, io, ki, ohn, zZn };
var __wakaru_Zi_initialized = false;
export function Zi() {
if (__wakaru_Zi_initialized) return;
__wakaru_Zi_initialized = true;
"use strict";
E(), qn(), Gt(), Qe(), mP(), To(), LEo(), It(), JR(), KEo = "__$__isNewStorageMarker", ohn = "__$__targetStorageMarker", ki = jn("storageService"), Lke = ((t)=>(t[t.NONE = 0] = "NONE", t[t.SHUTDOWN = 1] = "SHUTDOWN", t))(Lke || {}), io = ((t)=>(t[t.APPLICATION = -1] = "APPLICATION", t[t.PROFILE = 0] = "PROFILE", t[t.WORKSPACE = 1] = "WORKSPACE", t))(io || {}), Wg = ((t)=>(t[t.USER = 0] = "USER", t[t.MACHINE = 1] = "MACHINE", t))(Wg || {}), YEo = class aAb extends st {
    constructor(e = {
        flushInterval: aAb.DEFAULT_FLUSH_INTERVAL
    }){
        super(), this._onDidChangeValue = this._register(new Dse), this._onDidChangeTarget = this._register(new Dse), this.onDidChangeTarget = this._onDidChangeTarget.event, this._onWillSaveState = this._register(new tt), this.onWillSaveState = this._onWillSaveState.event, this.runFlushWhenIdle = this._register(new Vn), this._workspaceKeyTargets = void 0, this._profileKeyTargets = void 0, this._applicationKeyTargets = void 0, this.onDiskShouldSaveCallbacks = [], this.flushWhenIdleScheduler = this._register(new Yu(()=>this.doFlushWhenIdle(), e.flushInterval));
    }
    get vscodeService() {
        return this;
    }
    onDidChangeValue(e, n, i) {
        return en.filter(this._onDidChangeValue.event, (r)=>r.scope === e && (n === void 0 || r.key === n), i);
    }
    doFlushWhenIdle() {
        this.runFlushWhenIdle.value = BOe(()=>{
            this.shouldFlushWhenIdle() && this.flush(), this.flushWhenIdleScheduler.schedule();
        });
    }
    shouldFlushWhenIdle() {
        return !0;
    }
    stopFlushWhenIdle() {
        Nc([
            this.runFlushWhenIdle,
            this.flushWhenIdleScheduler
        ]);
    }
    initialize() {
        return this.initializationPromise || (this.initializationPromise = (async ()=>{
            ud("code/willInitStorage");
            try {
                await this.doInitialize();
            } finally{
                ud("code/didInitStorage");
            }
            this.flushWhenIdleScheduler.schedule();
        })()), this.initializationPromise;
    }
    emitDidChangeValue(e, n) {
        const { key: i, external: r } = n;
        if (i === ohn) {
            switch(e){
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
                scope: e
            });
        } else this._onDidChangeValue.fire({
            scope: e,
            key: i,
            target: this.getKeyTargets(e)[i],
            external: r
        });
    }
    emitWillSaveState(e) {
        this._onWillSaveState.fire({
            reason: e
        });
    }
    get(e, n, i) {
        return this.getStorage(n)?.get(e, i) ?? i;
    }
    getBoolean(e, n, i) {
        return this.getStorage(n)?.getBoolean(e, i) ?? i;
    }
    getNumber(e, n, i) {
        return this.getStorage(n)?.getNumber(e, i) ?? i;
    }
    getObject(e, n, i) {
        return this.getStorage(n)?.getObject(e, i) ?? i;
    }
    storeAll(e, n) {
        this.withPausedEmitters(()=>{
            for (const i of e)this.store(i.key, i.value, i.scope, i.target, n);
        });
    }
    store(e, n, i, r, s = !1) {
        if (Yw(n)) {
            this.remove(e, i, s);
            return;
        }
        this.withPausedEmitters(()=>{
            this.updateKeyTarget(e, i, r), this.getStorage(i)?.set(e, n, s);
        });
    }
    remove(e, n, i = !1) {
        this.withPausedEmitters(()=>{
            this.updateKeyTarget(e, n, void 0), this.getStorage(n)?.delete(e, i);
        });
    }
    withPausedEmitters(e) {
        this._onDidChangeValue.pause(), this._onDidChangeTarget.pause();
        try {
            e();
        } finally{
            this._onDidChangeValue.resume(), this._onDidChangeTarget.resume();
        }
    }
    keys(e, n) {
        const i = [], r = this.getKeyTargets(e);
        for (const s of Object.keys(r))r[s] === n && i.push(s);
        return i;
    }
    updateKeyTarget(e, n, i, r = !1) {
        const s = this.getKeyTargets(n);
        typeof i == "number" ? s[e] !== i && (s[e] = i, this.getStorage(n)?.set(ohn, JSON.stringify(s), r)) : typeof s[e] == "number" && (delete s[e], this.getStorage(n)?.set(ohn, JSON.stringify(s), r));
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
    getKeyTargets(e) {
        switch(e){
            case -1:
                return this.applicationKeyTargets;
            case 0:
                return this.profileKeyTargets;
            default:
                return this.workspaceKeyTargets;
        }
    }
    loadKeyTargets(e) {
        const n = this.getStorage(e);
        return n ? Ped(n) : Object.create(null);
    }
    isNew(e) {
        return this.getBoolean(KEo, e) === !0;
    }
    async collectionBulkInsert(e, n) {
        return this.getStorage(-1)?.collectionBulkInsert(e, n);
    }
    async collectionUpsertIfPreferred(e, n) {
        return this.getStorage(-1)?.collectionUpsertIfPreferred(e, n) ?? {
            applied: 0,
            rejected: n.map((i)=>i.pk)
        };
    }
    async collectionDeleteMany(e, n) {
        return this.getStorage(-1)?.collectionDeleteMany(e, n);
    }
    async collectionQuery(e, n) {
        return this.getStorage(-1)?.collectionQuery(e, n) ?? [];
    }
    async cursorDiskKVGet(e, n) {
        return this.getStorage(-1)?.cursorDiskKVGet(e, n);
    }
    async cursorDiskKVGetWithLogs(e) {
        return await this.getStorage(-1)?.cursorDiskKVGetWithLogs(e) ?? {
            result: void 0,
            logs: [
                `[storage] StorageService.cursorDiskKVGetWithLogs: ${e} undefined storage`
            ]
        };
    }
    async cursorDiskKVGetBatch(e) {
        return await this.getStorage(-1)?.cursorDiskKVGetBatch(e) ?? [];
    }
    async cursorDiskKVSet(e, n) {
        return this.getStorage(-1)?.cursorDiskKVSet(e, n);
    }
    async cursorDiskKVSetIfAbsent(e, n) {
        return this.getStorage(-1)?.cursorDiskKVSetIfAbsent(e, n) ?? !1;
    }
    async cursorDiskKVReplaceIfEquals(e, n, i) {
        return this.getStorage(-1)?.cursorDiskKVReplaceIfEquals(e, n, i) ?? !1;
    }
    async cursorDiskKVSetBinary(e, n) {
        return this.getStorage(-1)?.cursorDiskKVSetBinary(e, n);
    }
    async cursorDiskKVSetBinaryBatch(e) {
        return this.getStorage(-1)?.cursorDiskKVSetBinaryBatch(e);
    }
    async cursorDiskKVSetBatch(e, n) {
        return await this.getStorage(-1)?.cursorDiskKVSetBatch(e, n) ?? !1;
    }
    async cursorDiskKVGetBinary(e) {
        return this.getStorage(-1)?.cursorDiskKVGetBinary(e);
    }
    async cursorDiskKVDelete(e, n) {
        return this.getStorage(-1)?.cursorDiskKVDelete(e, n);
    }
    async cursorDiskKVClearPrefix(e) {
        return this.getStorage(-1)?.cursorDiskKVClearPrefix(e);
    }
    async cursorDiskKVGetPrefix(e) {
        return this.getStorage(-1)?.cursorDiskKVGetPrefix(e) ?? [];
    }
    async cursorDiskKVGetPrefixKeys(e) {
        return this.getStorage(-1)?.cursorDiskKVGetPrefixKeys(e) ?? [];
    }
    async cursorDiskKVGetPrefixBinary(e) {
        return this.getStorage(-1)?.cursorDiskKVGetPrefixBinary(e) ?? [];
    }
    cursorDiskKVOnShouldSave(e) {
        return this.onDiskShouldSaveCallbacks.push(e), {
            dispose: ()=>{
                this.onDiskShouldSaveCallbacks = this.onDiskShouldSaveCallbacks.filter((n)=>n !== e);
            }
        };
    }
    async flushStorage(e) {
        await this.getStorage(e)?.flush(0);
    }
    async flush(e = 0) {
        this._onWillSaveState.fire({
            reason: e
        });
        const n = this.getStorage(-1), i = this.getStorage(0), r = this.getStorage(1);
        switch(e){
            case 0:
                for (const s of this.onDiskShouldSaveCallbacks)try {
                    s(e).catch(console.error);
                } catch  {}
                await I_.settled([
                    n?.whenFlushed() ?? Promise.resolve(),
                    i?.whenFlushed() ?? Promise.resolve(),
                    r?.whenFlushed() ?? Promise.resolve()
                ]);
                break;
            case 1:
                for (const s of this.onDiskShouldSaveCallbacks)try {
                    await s(e);
                } catch (o) {
                    console.error(o);
                }
                await I_.settled([
                    n?.flush(0) ?? Promise.resolve(),
                    i?.flush(0) ?? Promise.resolve(),
                    r?.flush(0) ?? Promise.resolve()
                ]);
                break;
        }
    }
    async log() {
        const e = this.getStorage(-1)?.items ?? new Map, n = this.getStorage(0)?.items ?? new Map, i = this.getStorage(1)?.items ?? new Map;
        return Med(e, n, i, this.getLogDetails(-1) ?? "", this.getLogDetails(0) ?? "", this.getLogDetails(1) ?? "");
    }
    async optimize(e, n) {
        return await this.flush(), this.getStorage(e)?.optimize(n);
    }
    async getStorageStats(e) {
        return this.getStorage(e)?.getStorageStats();
    }
    async getStorageSizeBreakdown(e, n) {
        return this.getStorage(e)?.getStorageSizeBreakdown(n);
    }
    async cancelStorageSizeBreakdown(e) {
        await this.getStorage(e)?.cancelStorageSizeBreakdown();
    }
    async switch(e, n) {
        return this.emitWillSaveState(0), Aed(e) ? this.switchToProfile(e, n) : this.switchToWorkspace(e, n);
    }
    canSwitchProfile(e, n) {
        return !(e.id === n.id || qZn(n) && qZn(e));
    }
    switchData(e, n, i) {
        this.withPausedEmitters(()=>{
            const r = new Set;
            for (const [s, o] of e)r.add(s), n.get(s) !== o && this.emitDidChangeValue(i, {
                key: s,
                external: !0
            });
            for (const [s] of n.items)r.has(s) || this.emitDidChangeValue(i, {
                key: s,
                external: !0
            });
        });
    }
}, YEo.DEFAULT_FLUSH_INTERVAL = 60 * 1e3, zZn = YEo, XEo = class extends zZn {
    constructor(){
        super(), this.applicationStorage = this._register(new ket(new jZn, {
            hint: ehn.STORAGE_IN_MEMORY
        })), this.profileStorage = this._register(new ket(new jZn, {
            hint: ehn.STORAGE_IN_MEMORY
        })), this.workspaceStorage = this._register(new ket(new jZn, {
            hint: ehn.STORAGE_IN_MEMORY
        })), this._register(this.workspaceStorage.onDidChangeStorage((t)=>this.emitDidChangeValue(1, t))), this._register(this.profileStorage.onDidChangeStorage((t)=>this.emitDidChangeValue(0, t))), this._register(this.applicationStorage.onDidChangeStorage((t)=>this.emitDidChangeValue(-1, t)));
    }
    getStorage(t) {
        switch(t){
            case -1:
                return this.applicationStorage;
            case 0:
                return this.profileStorage;
            default:
                return this.workspaceStorage;
        }
    }
    getLogDetails(t) {
        switch(t){
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
    hasScope(t) {
        return !1;
    }
};

}
