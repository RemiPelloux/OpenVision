import { Vn } from "./arrays.js";
import { le, wr } from "./async.js";
import { N, se } from "./event.js";
import { J, j } from "./lifecycle.js";
import { rn, te } from "./log.js";
import { $, $e } from "./network.js";
import { Ce, L, _t } from "./path.js";
import { gn, ie } from "./pfs.js";
import { lW } from "./prepareEvent.js";
import { yc } from "./scope.js";
import { _a } from "./sentry.js";
import { Rr } from "./spanUtils.js";
import { Yo, ca } from "./stopwatch.js";
import { _c, _p, hC, j6, vc } from "./storage.js";
import { kp, tk } from "./storage_2.js";
import { Q5e, Sp } from "./storage_3.js";
import { QB, RI, bI, ts } from "./telemetry.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Zr, rr } from "./userDataProfile.js";
import { bn } from "./workspace.js";
import * as aWe from "fs";
function eUe(e, t, n = 0, r = e.length) {
    let s = n, i = r;
    for(; s < i;){
        const a = Math.floor((s + i) / 2);
        t(e[a]) ? i = a : s = a + 1;
    }
    return s;
}
function aUe(e, t, n) {
    if (n === 0) return [];
    const r = e.slice(0, n).sort(t);
    return oUe(e, t, r, n, e.length), r;
}
function oUe(e, t, n, r, s) {
    for(const i = n.length; r < s; r++){
        const a = e[r];
        if (t(a, n[i - 1]) < 0) {
            n.pop();
            const o = eUe(n, (l)=>t(a, l) < 0);
            n.splice(o, 0, a);
        }
    }
}
function TFe(e) {
    if (e) return kFe(e) ? {
        captureContext: e
    } : SFe(e) ? {
        captureContext: e
    } : e;
}
function kFe(e) {
    return e instanceof yc || typeof e == "function";
}
function SFe(e) {
    return Object.keys(e).some((t)=>lW.includes(t));
}
function gs(e, t) {
    return Rr().captureException(e, TFe(t));
}
function oWe(e) {
    return e < 5e3 ? "2s-5s" : e < 1e4 ? "5s-10s" : e < 3e4 ? "10s-30s" : e < 6e4 ? "30s-60s" : "60s+";
}
function cWe(e) {
    const t = e / 1048576;
    return t < 100 ? "<100MB" : t < 500 ? "100MB-500MB" : t < 1024 ? "500MB-1GB" : t < 4 * 1024 ? "1GB-4GB" : t < 16 * 1024 ? "4GB-16GB" : "16GB+";
}
var AI, Bk, MI, PI, e7, t7, Gk, n7, NI;
export { AI, Bk, Gk, MI, NI, PI, SFe, TFe, aUe, cWe, e7, eUe, gs, kFe, n7, oUe, oWe, t7 };
var __wakaru_lWe_initialized = false;
export function lWe() {
if (__wakaru_lWe_initialized) return;
__wakaru_lWe_initialized = true;
"use strict";
h(), Vn(), le(), se(), j(), Ce(), Yo(), ye(), gn(), j6(), Q5e(), te(), _a(), tk(), ts(), bn(), $e(), AI = class pLe extends J {
    constructor(t, n){
        super(), this.logService = t, this.fileService = n, this._onDidChangeStorage = this._register(new N), this.onDidChangeStorage = this._onDidChangeStorage.event, this._onDidCloseStorage = this._register(new N), this.onDidCloseStorage = this._onDidCloseStorage.event, this._storage = this._register(new _p(new hC, {
            hint: _c.STORAGE_IN_MEMORY
        })), this.initializePromise = void 0, this.whenInitPromise = new wr, this.whenInit = this.whenInitPromise.p, this.state = vc.None, this.initFailed = !1;
    }
    get storage() {
        return this._storage;
    }
    collectionBulkInsert(t, n) {
        return this._storage.collectionBulkInsert(t, n);
    }
    collectionUpsertIfPreferred(t, n) {
        return this._storage.collectionUpsertIfPreferred(t, n);
    }
    collectionDeleteMany(t, n) {
        return this._storage.collectionDeleteMany(t, n);
    }
    collectionQuery(t, n) {
        return this._storage.collectionQuery(t, n);
    }
    cursorDiskKVGet(t) {
        return this._storage.cursorDiskKVGet(t);
    }
    cursorDiskKVGetWithLogs(t) {
        return this._storage.cursorDiskKVGetWithLogs(t);
    }
    cursorDiskKVGetBatch(t) {
        return this._storage.cursorDiskKVGetBatch(t);
    }
    cursorDiskKVSet(t, n) {
        return this._storage.cursorDiskKVSet(t, n);
    }
    cursorDiskKVSetIfAbsent(t, n) {
        return this._storage.cursorDiskKVSetIfAbsent(t, n);
    }
    cursorDiskKVReplaceIfEquals(t, n, r) {
        return this._storage.cursorDiskKVReplaceIfEquals(t, n, r);
    }
    cursorDiskKVSetBinary(t, n) {
        return this._storage.cursorDiskKVSetBinary(t, n);
    }
    cursorDiskKVSetBinaryBatch(t) {
        return this._storage.cursorDiskKVSetBinaryBatch(t);
    }
    cursorDiskKVSetBatch(t, n) {
        return this._storage.cursorDiskKVSetBatch(t, n);
    }
    cursorDiskKVGetBinary(t) {
        return this._storage.cursorDiskKVGetBinary(t);
    }
    cursorDiskKVDelete(t, n) {
        return this._storage.cursorDiskKVDelete(t, n);
    }
    cursorDiskKVClearPrefix(t) {
        return this._storage.cursorDiskKVClearPrefix(t);
    }
    cursorDiskKVGetPrefix(t) {
        return this._storage.cursorDiskKVGetPrefix(t);
    }
    cursorDiskKVGetPrefixKeys(t) {
        return this._storage.cursorDiskKVGetPrefixKeys(t);
    }
    cursorDiskKVGetPrefixBinary(t) {
        return this._storage.cursorDiskKVGetPrefixBinary(t);
    }
    isInMemory() {
        return this._storage.isInMemory();
    }
    init() {
        return this.initializePromise || (this.initializePromise = (async ()=>{
            if (this.state === vc.None) {
                try {
                    const t = this._register(await this.doCreate());
                    this._storage.dispose(), this._storage = t, this._register(t.onDidChangeStorage((r)=>this._onDidChangeStorage.fire(r))), await this.doInit(t);
                    const n = t.getBoolean(kp);
                    n === void 0 ? t.set(kp, !0) : n && t.set(kp, !1);
                } catch (t) {
                    throw this.logService.error(`[storage main] initialize(): Unable to init storage due to ${t}`), this.state = vc.Initialized, this.initFailed = !0, this.whenInitPromise.error(t instanceof Error ? t : new Error(String(t))), t;
                }
                this.state = vc.Initialized, this.whenInitPromise.complete();
            }
        })()), this.initializePromise;
    }
    createLoggingOptions() {
        return {
            logTrace: this.logService.getLevel() === rn.Trace ? (t)=>this.logService.trace(t) : void 0,
            logError: (t)=>this.logService.error(t),
            logSentryException: (t, n)=>{
                try {
                    gs(t, {
                        captureContext: {
                            tags: n.tags,
                            extra: n.extra,
                            fingerprint: n.fingerprint,
                            level: n.level
                        }
                    });
                } catch  {}
            }
        };
    }
    doInit(t) {
        return t.init();
    }
    get items() {
        return this._storage.items;
    }
    get(t, n) {
        return this._storage.get(t, n);
    }
    set(t, n) {
        return this._storage.set(t, n);
    }
    delete(t) {
        return this._storage.delete(t);
    }
    optimize(t) {
        return this._storage.optimize(t);
    }
    async getStorageStats() {
        return this._storage.getStorageStats();
    }
    async getStorageSizeBreakdown(t) {
        return this._storage.getStorageSizeBreakdown(t);
    }
    async cancelStorageSizeBreakdown() {
        await this._storage.cancelStorageSizeBreakdown();
    }
    async close() {
        const t = new ca(!1);
        await this.doClose(), t.stop(), t.elapsed() > pLe.LOG_SLOW_CLOSE_THRESHOLD && await this.logSlowClose(t), this._onDidCloseStorage.fire();
    }
    async logSlowClose(t) {
        if (this.path) try {
            const n = t.elapsed(), r = aUe(Array.from(this._storage.items.entries()).map(([d, u])=>({
                    key: d,
                    length: u.length
                })), (d, u)=>u.length - d.length, 5), s = r.map((d)=>`${d.key}:${d.length}`).join(", "), i = (await this.fileService.stat(x.file(this.path))).size;
            this.logService.warn(`[storage main] detected slow close() operation: Time: ${n}ms, DB size: ${i}b, Large Keys: ${s}`);
            const a = this.storageKind, o = _t(this.path), l = r[0]?.key ?? "unknown";
            try {
                gs(new Error("[storage main] detected slow close() operation"), {
                    captureContext: {
                        level: "warning",
                        tags: {
                            cursor_storage_event: "slow_close",
                            storage_kind: a,
                            storage_name: o,
                            dominant_key: l,
                            slow_close_bucket: oWe(n),
                            db_size_bucket: cWe(i)
                        },
                        extra: {
                            elapsed_ms: n,
                            db_size_bytes: i,
                            largest_entries: r
                        },
                        fingerprint: [
                            "slow_close",
                            a,
                            l
                        ]
                    }
                });
            } catch  {}
        } catch (n) {
            this.logService.error("[storage main] figuring out stats for slow DB on close() resulted in an error", n);
        }
    }
    async doClose() {
        this.initializePromise && await this.initializePromise.catch(()=>{}), this.state = vc.Closed, !this.initFailed && await this._storage.close();
    }
}, AI.LOG_SLOW_CLOSE_THRESHOLD = 2e3, Bk = AI, MI = class hLe extends Bk {
    constructor(t, n, r, s){
        super(r, s), this.profile = t, this.options = n;
    }
    get path() {
        if (!this.options.useInMemoryStorage) return L(this.profile.globalStorageHome.with({
            scheme: $.file
        }).fsPath, hLe.STORAGE_NAME);
    }
    async doCreate() {
        const t = this.path ?? Sp.IN_MEMORY_PATH;
        return new _p(new Sp(t, {
            logging: this.createLoggingOptions(),
            disableBackup: this.options.disableBackup,
            incrementalAutoVacuumOnClose: this.options.incrementalAutoVacuumOnClose,
            storageKind: this.storageKind
        }), this.path ? void 0 : {
            hint: _c.STORAGE_IN_MEMORY
        });
    }
}, MI.STORAGE_NAME = "state.vscdb", PI = MI, e7 = class extends PI {
    get storageKind() {
        return "profile";
    }
    constructor(e, t, n, r){
        super(e, t, n, r);
    }
}, t7 = class extends PI {
    get storageKind() {
        return "application";
    }
    constructor(e, t, n, r){
        super(t.defaultProfile, e, n, r);
    }
    async doInit(e) {
        await super.doInit(e), this.updateTelemetryState(e);
    }
    updateTelemetryState(e) {
        e.get(RI, void 0) === void 0 && e.set(RI, new Date().toUTCString());
        const n = e.get(bI, void 0), r = new Date().toUTCString();
        e.set(QB, typeof n > "u" ? null : n), e.set(bI, r);
    }
}, Gk = class Cb extends Bk {
    constructor(t, n, r, s, i){
        super(r, i), this.workspace = t, this.options = n, this.environmentService = s;
    }
    get storageKind() {
        return "workspace";
    }
    get path() {
        if (!this.options.useInMemoryStorage) return L(this.environmentService.workspaceStorageHome.with({
            scheme: $.file
        }).fsPath, this.workspace.id, Cb.WORKSPACE_STORAGE_NAME);
    }
    async doCreate() {
        const { storageFilePath: t, wasCreated: n } = await this.prepareWorkspaceStorageFolder();
        return new _p(new Sp(t, {
            logging: this.createLoggingOptions(),
            disableBackup: this.options.disableBackup,
            incrementalAutoVacuumOnClose: this.options.incrementalAutoVacuumOnClose,
            storageKind: this.storageKind
        }), {
            hint: this.options.useInMemoryStorage ? _c.STORAGE_IN_MEMORY : n ? _c.STORAGE_DOES_NOT_EXIST : void 0
        });
    }
    async prepareWorkspaceStorageFolder() {
        if (this.options.useInMemoryStorage) return {
            storageFilePath: Sp.IN_MEMORY_PATH,
            wasCreated: !0
        };
        const t = L(this.environmentService.workspaceStorageHome.with({
            scheme: $.file
        }).fsPath, this.workspace.id), n = L(t, Cb.WORKSPACE_STORAGE_NAME);
        return await ie.exists(t) ? {
            storageFilePath: n,
            wasCreated: !1
        } : (await aWe.promises.mkdir(t, {
            recursive: !0
        }), this.ensureWorkspaceStorageFolderMeta(t), {
            storageFilePath: n,
            wasCreated: !0
        });
    }
    async ensureWorkspaceStorageFolderMeta(t) {
        let n;
        if (Zr(this.workspace) ? n = {
            folder: this.workspace.uri.toString()
        } : rr(this.workspace) && (n = {
            workspace: this.workspace.configPath.toString()
        }), n) try {
            const r = L(t, Cb.WORKSPACE_META_NAME);
            await ie.exists(r) || await ie.writeFile(r, JSON.stringify(n, void 0, 2));
        } catch (r) {
            this.logService.error(`[storage main] ensureWorkspaceStorageFolderMeta(): Unable to create workspace storage metadata due to ${r}`);
        }
    }
}, Gk.WORKSPACE_STORAGE_NAME = "state.vscdb", Gk.WORKSPACE_META_NAME = "workspace.json", n7 = Gk, NI = class extends Bk {
    get storageKind() {
        return "in-memory";
    }
    get path() {}
    async doCreate() {
        return new _p(new hC, {
            hint: _c.STORAGE_IN_MEMORY
        });
    }
};

}
