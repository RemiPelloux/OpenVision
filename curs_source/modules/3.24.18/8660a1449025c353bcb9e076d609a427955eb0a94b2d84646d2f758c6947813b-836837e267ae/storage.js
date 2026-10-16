import { Dse, Gt, Qe, Yw, en, st, wf } from "./Iwo.js";
import { Agr, c_t, red } from "./SZu.js";
import { nW, qn } from "./async.js";
import { Yq } from "./marshalling.js";
import { UZn } from "./storageSizeBreakdown.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var ehn, NEo, ket, jZn;
export { NEo, ehn, jZn, ket };
var __wakaru_LEo_initialized = false;
export function LEo() {
if (__wakaru_LEo_initialized) return;
__wakaru_LEo_initialized = true;
"use strict";
E(), qn(), Gt(), Qe(), Yq(), To(), UZn(), ehn = ((t)=>(t[t.STORAGE_DOES_NOT_EXIST = 0] = "STORAGE_DOES_NOT_EXIST", t[t.STORAGE_IN_MEMORY = 1] = "STORAGE_IN_MEMORY", t))(ehn || {}), NEo = class sAb extends st {
    constructor(e, n = Object.create(null)){
        super(), this.database = e, this.options = n, this._onDidChangeStorage = this._register(new Dse), this.onDidChangeStorage = this._onDidChangeStorage.event, this.state = 0, this.cache = new Map, this.flushDelayer = this._register(new nW(sAb.DEFAULT_FLUSH_DELAY)), this.pendingDeletes = new Set, this.pendingInserts = new Map, this.unacknowledgedKeys = new Set, this.pendingClose = void 0, this.whenFlushedCallbacks = [], this.registerListeners();
    }
    registerListeners() {
        this._register(this.database.onDidChangeItemsExternal((e)=>this.onDidChangeItemsExternal(e)));
    }
    onDidChangeItemsExternal(e) {
        this._onDidChangeStorage.pause();
        try {
            e.changed?.forEach((n, i)=>this.acceptExternal(i, n)), e.deleted?.forEach((n)=>this.acceptExternal(n, void 0));
        } finally{
            this._onDidChangeStorage.resume();
        }
    }
    acceptExternal(e, n) {
        if (this.state === 2 || this.hasUnacknowledgedWrite(e)) return;
        let i = !1;
        Yw(n) ? i = this.cache.delete(e) : this.cache.get(e) !== n && (this.cache.set(e, n), i = !0), i && this._onDidChangeStorage.fire({
            key: e,
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
    collectionBulkInsert(e, n) {
        return this.database.collectionBulkInsert(e, n);
    }
    collectionUpsertIfPreferred(e, n) {
        return this.database.collectionUpsertIfPreferred(e, n);
    }
    collectionDeleteMany(e, n) {
        return this.database.collectionDeleteMany(e, n);
    }
    collectionQuery(e, n) {
        return this.database.collectionQuery(e, n);
    }
    cursorDiskKVGet(e, n) {
        return this.database.cursorDiskKVGet(e, n);
    }
    cursorDiskKVGetWithLogs(e) {
        return this.database.cursorDiskKVGetWithLogs(e);
    }
    cursorDiskKVGetBatch(e) {
        return this.database.cursorDiskKVGetBatch(e);
    }
    cursorDiskKVSet(e, n) {
        return this.database.cursorDiskKVSet(e, n);
    }
    cursorDiskKVSetIfAbsent(e, n) {
        return this.database.cursorDiskKVSetIfAbsent(e, n);
    }
    cursorDiskKVReplaceIfEquals(e, n, i) {
        return this.database.cursorDiskKVReplaceIfEquals(e, n, i);
    }
    cursorDiskKVSetBinary(e, n) {
        return this.database.cursorDiskKVSetBinary(e, n);
    }
    cursorDiskKVSetBinaryBatch(e) {
        return this.database.cursorDiskKVSetBinaryBatch(e);
    }
    cursorDiskKVSetBatch(e, n) {
        return this.database.cursorDiskKVSetBatch(e, n);
    }
    cursorDiskKVGetBinary(e) {
        return this.database.cursorDiskKVGetBinary(e);
    }
    cursorDiskKVDelete(e, n) {
        return this.database.cursorDiskKVDelete(e, n);
    }
    cursorDiskKVClearPrefix(e) {
        return this.database.cursorDiskKVClearPrefix(e);
    }
    cursorDiskKVGetPrefix(e) {
        return this.database.cursorDiskKVGetPrefix(e);
    }
    cursorDiskKVGetPrefixKeys(e) {
        return this.database.cursorDiskKVGetPrefixKeys(e);
    }
    cursorDiskKVGetPrefixBinary(e) {
        return this.database.cursorDiskKVGetPrefixBinary(e);
    }
    get(e, n) {
        const i = this.cache.get(e);
        return Yw(i) ? n : i;
    }
    getBoolean(e, n) {
        const i = this.get(e);
        return Yw(i) ? n : i === "true";
    }
    getNumber(e, n) {
        const i = this.get(e);
        return Yw(i) ? n : parseFloat(i);
    }
    getObject(e, n) {
        const i = this.get(e);
        return Yw(i) ? n : c_t(i);
    }
    async set(e, n, i = !1) {
        if (this.state === 2) return;
        if (Yw(n)) return this.delete(e, i);
        const r = wf(n) || Array.isArray(n) ? red(n) : String(n);
        if (this.cache.get(e) !== r) return this.cache.set(e, r), this.pendingInserts.set(e, r), this.pendingDeletes.delete(e), this._onDidChangeStorage.fire({
            key: e,
            external: i
        }), this.doFlush();
    }
    async delete(e, n = !1) {
        if (!(this.state === 2 || !this.cache.delete(e))) return this.pendingDeletes.has(e) || this.pendingDeletes.add(e), this.pendingInserts.delete(e), this._onDidChangeStorage.fire({
            key: e,
            external: n
        }), this.doFlush();
    }
    async optimize(e) {
        if (this.state !== 2) return await this.flush(0), this.database.optimize(e);
    }
    async getStorageStats() {
        return this.database.getStorageStats?.();
    }
    async getStorageSizeBreakdown(e) {
        return this.database.getStorageSizeBreakdown?.(e);
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
    hasUnacknowledgedWrite(e) {
        return this.pendingInserts.has(e) || this.pendingDeletes.has(e) || this.unacknowledgedKeys.has(e);
    }
    markAcknowledged(e) {
        e.insert?.forEach((n, i)=>this.unacknowledgedKeys.delete(i)), e.delete?.forEach((n)=>this.unacknowledgedKeys.delete(n));
    }
    async flushPending() {
        if (!this.hasPending) return;
        const e = {
            insert: this.pendingInserts,
            delete: this.pendingDeletes
        };
        return this.pendingDeletes = new Set, this.pendingInserts = new Map, e.insert.forEach((n, i)=>this.unacknowledgedKeys.add(i)), e.delete.forEach((n)=>this.unacknowledgedKeys.add(n)), this.database.updateItems(e, (n)=>this.markAcknowledged(n)).finally(()=>{
            if (this.markAcknowledged(e), !this.hasPending) for(; this.whenFlushedCallbacks.length;)this.whenFlushedCallbacks.pop()?.();
        });
    }
    async flush(e) {
        if (!(this.state === 2 || this.pendingClose)) return this.doFlush(e);
    }
    async doFlush(e) {
        return this.options.hint === 1 ? this.flushPending() : this.flushDelayer.trigger(()=>this.flushPending(), e);
    }
    async whenFlushed() {
        if (this.hasPending) return new Promise((e)=>this.whenFlushedCallbacks.push(e));
    }
    isInMemory() {
        return this.options.hint === 1;
    }
}, NEo.DEFAULT_FLUSH_DELAY = 100, ket = NEo, jZn = class {
    constructor(){
        this.onDidChangeItemsExternal = en.None, this.items = new Map;
    }
    async getItems() {
        return this.items;
    }
    async collectionBulkInsert(t, e) {}
    async collectionUpsertIfPreferred(t, e) {
        return {
            applied: 0,
            rejected: []
        };
    }
    async collectionDeleteMany(t, e) {}
    async collectionQuery(t, e) {
        return [];
    }
    async cursorDiskKVGet(t, e) {
        e?.(`[storage] InMemoryStorageDatabase.cursorDiskKVGet: ${t} undefined`);
    }
    async cursorDiskKVGetWithLogs(t) {
        return {
            result: void 0,
            logs: [
                `[storage] InMemoryStorageDatabase.cursorDiskKVGetWithLogs: ${t} undefined`
            ]
        };
    }
    async cursorDiskKVGetBatch(t) {
        return [];
    }
    async cursorDiskKVSet(t, e) {}
    async cursorDiskKVSetIfAbsent(t, e) {
        return !0;
    }
    async cursorDiskKVReplaceIfEquals(t, e, n) {
        return !1;
    }
    async cursorDiskKVSetBinary(t, e) {}
    async cursorDiskKVSetBinaryBatch(t) {}
    async cursorDiskKVSetBatch(t, e) {
        return e === void 0;
    }
    async cursorDiskKVGetBinary(t) {}
    async cursorDiskKVDelete(t) {}
    async cursorDiskKVClearPrefix(t) {}
    async cursorDiskKVGetPrefix(t) {
        return [];
    }
    async cursorDiskKVGetPrefixKeys(t) {
        return [];
    }
    async getStorageSizeBreakdown(t) {
        return Agr();
    }
    async cancelStorageSizeBreakdown() {}
    async cursorDiskKVGetPrefixBinary(t) {
        return [];
    }
    async updateItems(t) {
        t.insert?.forEach((e, n)=>this.items.set(n, e)), t.delete?.forEach((e)=>this.items.delete(e));
    }
    async optimize(t) {}
    async close() {}
};

}
