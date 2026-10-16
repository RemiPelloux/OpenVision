import { Ct, IV, Se, Tf, bt, dp, we } from "./HVr.js";
import { TO, bn } from "./async.js";
import { a2 } from "./marshalling.js";
import { MK, QNc, Qmg } from "./qIc.js";
import { IZr } from "./storageSizeBreakdown.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var Q2t, AZr, LBe, Fgn;
export { AZr, Fgn, LBe, Q2t };
var __wakaru_RZr_initialized = false;
export function RZr() {
if (__wakaru_RZr_initialized) return;
__wakaru_RZr_initialized = true;
"use strict";
x(), bn(), bt(), Se(), a2(), gr(), IZr(), Q2t = ((e)=>(e[e.STORAGE_DOES_NOT_EXIST = 0] = "STORAGE_DOES_NOT_EXIST", e[e.STORAGE_IN_MEMORY = 1] = "STORAGE_IN_MEMORY", e))(Q2t || {}), AZr = class KSm extends we {
    constructor(t, n = Object.create(null)){
        super(), this.database = t, this.options = n, this._onDidChangeStorage = this._register(new IV), this.onDidChangeStorage = this._onDidChangeStorage.event, this.state = 0, this.cache = new Map, this.flushDelayer = this._register(new TO(KSm.DEFAULT_FLUSH_DELAY)), this.pendingDeletes = new Set, this.pendingInserts = new Map, this.unacknowledgedKeys = new Set, this.pendingClose = void 0, this.whenFlushedCallbacks = [], this.registerListeners();
    }
    registerListeners() {
        this._register(this.database.onDidChangeItemsExternal((t)=>this.onDidChangeItemsExternal(t)));
    }
    onDidChangeItemsExternal(t) {
        this._onDidChangeStorage.pause();
        try {
            t.changed?.forEach((n, i)=>this.acceptExternal(i, n)), t.deleted?.forEach((n)=>this.acceptExternal(n, void 0));
        } finally{
            this._onDidChangeStorage.resume();
        }
    }
    acceptExternal(t, n) {
        if (this.state === 2 || this.hasUnacknowledgedWrite(t)) return;
        let i = !1;
        Tf(n) ? i = this.cache.delete(t) : this.cache.get(t) !== n && (this.cache.set(t, n), i = !0), i && this._onDidChangeStorage.fire({
            key: t,
            external: !0
        });
    }
    get items() {
        return this.cache;
    }
    get size() {
        return this.cache.size;
    }
    async init() {
        this.state === 0 && (this.state = 1, this.options.hint !== 0 && (this.cache = await this.database.getItems()));
    }
    collectionBulkInsert(t, n) {
        return this.database.collectionBulkInsert(t, n);
    }
    collectionUpsertIfPreferred(t, n) {
        return this.database.collectionUpsertIfPreferred(t, n);
    }
    collectionDeleteMany(t, n) {
        return this.database.collectionDeleteMany(t, n);
    }
    collectionQuery(t, n) {
        return this.database.collectionQuery(t, n);
    }
    cursorDiskKVGet(t, n) {
        return this.database.cursorDiskKVGet(t, n);
    }
    cursorDiskKVGetWithLogs(t) {
        return this.database.cursorDiskKVGetWithLogs(t);
    }
    cursorDiskKVGetBatch(t) {
        return this.database.cursorDiskKVGetBatch(t);
    }
    cursorDiskKVSet(t, n) {
        return this.database.cursorDiskKVSet(t, n);
    }
    cursorDiskKVSetIfAbsent(t, n) {
        return this.database.cursorDiskKVSetIfAbsent(t, n);
    }
    cursorDiskKVReplaceIfEquals(t, n, i) {
        return this.database.cursorDiskKVReplaceIfEquals(t, n, i);
    }
    cursorDiskKVSetBinary(t, n) {
        return this.database.cursorDiskKVSetBinary(t, n);
    }
    cursorDiskKVSetBinaryBatch(t) {
        return this.database.cursorDiskKVSetBinaryBatch(t);
    }
    cursorDiskKVSetBatch(t, n) {
        return this.database.cursorDiskKVSetBatch(t, n);
    }
    cursorDiskKVGetBinary(t) {
        return this.database.cursorDiskKVGetBinary(t);
    }
    cursorDiskKVDelete(t, n) {
        return this.database.cursorDiskKVDelete(t, n);
    }
    cursorDiskKVClearPrefix(t) {
        return this.database.cursorDiskKVClearPrefix(t);
    }
    cursorDiskKVGetPrefix(t) {
        return this.database.cursorDiskKVGetPrefix(t);
    }
    cursorDiskKVGetPrefixKeys(t) {
        return this.database.cursorDiskKVGetPrefixKeys(t);
    }
    cursorDiskKVGetPrefixBinary(t) {
        return this.database.cursorDiskKVGetPrefixBinary(t);
    }
    get(t, n) {
        const i = this.cache.get(t);
        return Tf(i) ? n : i;
    }
    getBoolean(t, n) {
        const i = this.get(t);
        return Tf(i) ? n : i === "true";
    }
    getNumber(t, n) {
        const i = this.get(t);
        return Tf(i) ? n : parseFloat(i);
    }
    getObject(t, n) {
        const i = this.get(t);
        return Tf(i) ? n : MK(i);
    }
    async set(t, n, i = !1) {
        if (this.state === 2) return;
        if (Tf(n)) return this.delete(t, i);
        const r = dp(n) || Array.isArray(n) ? QNc(n) : String(n);
        if (this.cache.get(t) !== r) return this.cache.set(t, r), this.pendingInserts.set(t, r), this.pendingDeletes.delete(t), this._onDidChangeStorage.fire({
            key: t,
            external: i
        }), this.doFlush();
    }
    async delete(t, n = !1) {
        if (!(this.state === 2 || !this.cache.delete(t))) return this.pendingDeletes.has(t) || this.pendingDeletes.add(t), this.pendingInserts.delete(t), this._onDidChangeStorage.fire({
            key: t,
            external: n
        }), this.doFlush();
    }
    async optimize(t) {
        if (this.state !== 2) return await this.flush(0), this.database.optimize(t);
    }
    async getStorageStats() {
        return this.database.getStorageStats?.();
    }
    async getStorageSizeBreakdown(t) {
        return this.database.getStorageSizeBreakdown?.(t);
    }
    async cancelStorageSizeBreakdown() {
        await this.database.cancelStorageSizeBreakdown?.();
    }
    async close() {
        return this.pendingClose || (this.pendingClose = this.doClose()), this.pendingClose;
    }
    async doClose() {
        this.state = 2;
        try {
            await this.doFlush(0);
        } catch  {}
        await this.database.close(()=>this.cache), this.cache = new Map, this.pendingInserts = new Map, this.pendingDeletes = new Set;
    }
    get hasPending() {
        return this.pendingInserts.size > 0 || this.pendingDeletes.size > 0;
    }
    hasUnacknowledgedWrite(t) {
        return this.pendingInserts.has(t) || this.pendingDeletes.has(t) || this.unacknowledgedKeys.has(t);
    }
    markAcknowledged(t) {
        t.insert?.forEach((n, i)=>this.unacknowledgedKeys.delete(i)), t.delete?.forEach((n)=>this.unacknowledgedKeys.delete(n));
    }
    async flushPending() {
        if (!this.hasPending) return;
        const t = {
            insert: this.pendingInserts,
            delete: this.pendingDeletes
        };
        return this.pendingDeletes = new Set, this.pendingInserts = new Map, t.insert.forEach((n, i)=>this.unacknowledgedKeys.add(i)), t.delete.forEach((n)=>this.unacknowledgedKeys.add(n)), this.database.updateItems(t, (n)=>this.markAcknowledged(n)).finally(()=>{
            if (this.markAcknowledged(t), !this.hasPending) for(; this.whenFlushedCallbacks.length;)this.whenFlushedCallbacks.pop()?.();
        });
    }
    async flush(t) {
        if (!(this.state === 2 || this.pendingClose)) return this.doFlush(t);
    }
    async doFlush(t) {
        return this.options.hint === 1 ? this.flushPending() : this.flushDelayer.trigger(()=>this.flushPending(), t);
    }
    async whenFlushed() {
        if (this.hasPending) return new Promise((t)=>this.whenFlushedCallbacks.push(t));
    }
    isInMemory() {
        return this.options.hint === 1;
    }
}, AZr.DEFAULT_FLUSH_DELAY = 100, LBe = AZr, Fgn = class {
    constructor(){
        this.onDidChangeItemsExternal = Ct.None, this.items = new Map;
    }
    async getItems() {
        return this.items;
    }
    async collectionBulkInsert(e, t) {}
    async collectionUpsertIfPreferred(e, t) {
        return {
            applied: 0,
            rejected: []
        };
    }
    async collectionDeleteMany(e, t) {}
    async collectionQuery(e, t) {
        return [];
    }
    async cursorDiskKVGet(e, t) {
        t?.(`[storage] InMemoryStorageDatabase.cursorDiskKVGet: ${e} undefined`);
    }
    async cursorDiskKVGetWithLogs(e) {
        return {
            result: void 0,
            logs: [
                `[storage] InMemoryStorageDatabase.cursorDiskKVGetWithLogs: ${e} undefined`
            ]
        };
    }
    async cursorDiskKVGetBatch(e) {
        return [];
    }
    async cursorDiskKVSet(e, t) {}
    async cursorDiskKVSetIfAbsent(e, t) {
        return !0;
    }
    async cursorDiskKVReplaceIfEquals(e, t, n) {
        return !1;
    }
    async cursorDiskKVSetBinary(e, t) {}
    async cursorDiskKVSetBinaryBatch(e) {}
    async cursorDiskKVSetBatch(e, t) {
        return t === void 0;
    }
    async cursorDiskKVGetBinary(e) {}
    async cursorDiskKVDelete(e) {}
    async cursorDiskKVClearPrefix(e) {}
    async cursorDiskKVGetPrefix(e) {
        return [];
    }
    async cursorDiskKVGetPrefixKeys(e) {
        return [];
    }
    async getStorageSizeBreakdown(e) {
        return Qmg();
    }
    async cancelStorageSizeBreakdown() {}
    async cursorDiskKVGetPrefixBinary(e) {
        return [];
    }
    async updateItems(e) {
        e.insert?.forEach((t, n)=>this.items.set(n, t)), e.delete?.forEach((t)=>this.items.delete(t));
    }
    async optimize(e) {}
    async close() {}
};

}
