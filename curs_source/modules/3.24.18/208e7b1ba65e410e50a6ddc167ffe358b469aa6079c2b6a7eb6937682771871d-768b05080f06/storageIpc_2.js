import { ae, it } from "./buffer.js";
import { N, O, se } from "./event.js";
import { za } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { pT } from "./marshalling.js";
import { GYe } from "./storageIpc.js";
import { W6, ad, fp } from "./storageSizeBreakdown.js";
import { h } from "./tslib.es6.js";
import { x } from "./uri.js";
import { bn } from "./workspace.js";
function A5e(e) {
    return Object.prototype.hasOwnProperty.call(W6, e);
}
function P5e(e) {
    return e === "overview" || e === ad || typeof e == "string" && A5e(e);
}
function N5e(e) {
    if (e == null || typeof e != "object" || !("phase" in e)) return;
    const t = e.phase;
    return P5e(t) ? {
        phase: t
    } : void 0;
}
function vp(e) {
    const t = e;
    if (t?.uri) return {
        id: t.id,
        uri: x.revive(t.uri)
    };
    const n = e;
    if (n?.configPath) return {
        id: n.id,
        configPath: x.revive(n.configPath)
    };
    if (e?.id) return {
        id: e.id
    };
}
function Xw(e) {
    return typeof e == "object" && e !== null && "prefix" in e && typeof e.prefix == "string";
}
var gO, Gpe;
export { A5e, Gpe, N5e, P5e, Xw, gO, vp };
var __wakaru_VYe_initialized = false;
export function VYe() {
if (__wakaru_VYe_initialized) return;
__wakaru_VYe_initialized = true;
"use strict";
h(), se(), j(), it(), pT(), GYe(), fp(), bn(), gO = class vLe extends J {
    constructor(t, n){
        super(), this.logService = t, this.storageMainService = n, this.onDidChangeApplicationStorageEmitter = this._register(new N), this.mapProfileToOnDidChangeProfileStorageEmitter = new Map, this.mapWorkspaceToOnDidChangeWorkspaceStorageEmitter = new Map, this.registerStorageChangeListeners(n.applicationStorage, this.onDidChangeApplicationStorageEmitter);
    }
    registerStorageChangeListeners(t, n) {
        this._register(O.debounce(t.onDidChangeStorage, (r, s)=>(r ? r.push(s) : r = [
                s
            ], r), vLe.STORAGE_CHANGE_DEBOUNCE_TIME)((r)=>{
            r.length && n.fire(this.serializeStorageChangeEvents(r, t));
        }));
    }
    serializeStorageChangeEvents(t, n) {
        const r = new Map, s = new Set;
        return t.forEach((i)=>{
            const a = n.get(i.key);
            typeof a == "string" ? r.set(i.key, a) : s.add(i.key);
        }), {
            changed: Array.from(r.entries()),
            deleted: Array.from(s.values())
        };
    }
    listen(t, n, r) {
        switch(n){
            case "onDidChangeStorage":
                {
                    const s = r.profile ? za(r.profile) : void 0, i = vp(r.workspace);
                    if (i) {
                        let o = this.mapWorkspaceToOnDidChangeWorkspaceStorageEmitter.get(i.id);
                        return o || (o = this._register(new N), this.registerStorageChangeListeners(this.storageMainService.workspaceStorage(i), o), this.mapWorkspaceToOnDidChangeWorkspaceStorageEmitter.set(i.id, o)), o.event;
                    }
                    if (!s) return this.onDidChangeApplicationStorageEmitter.event;
                    let a = this.mapProfileToOnDidChangeProfileStorageEmitter.get(s.id);
                    return a || (a = this._register(new N), this.registerStorageChangeListeners(this.storageMainService.profileStorage(s), a), this.mapProfileToOnDidChangeProfileStorageEmitter.set(s.id, a)), a.event;
                }
        }
        throw new Error(`Event not found: ${n}`);
    }
    async call(t, n, r) {
        let s = {
            profile: void 0,
            workspace: void 0
        };
        if (Array.isArray(r)) {
            if (!new Set([
                "cursorDiskKVGet",
                "cursorDiskKVGetBatch",
                "cursorDiskKVSet",
                "cursorDiskKVSetIfAbsent",
                "cursorDiskKVReplaceIfEquals",
                "cursorDiskKVGetWithLogs",
                "cursorDiskKVSetBinary",
                "cursorDiskKVSetBinaryBatch",
                "cursorDiskKVSetBatch",
                "cursorDiskKVGetBinary",
                "cursorDiskKVDelete",
                "collectionBulkInsert",
                "collectionUpsertIfPreferred",
                "collectionDeleteMany",
                "collectionQuery"
            ]).has(n)) throw new Error(`Unexpected array argument for command: ${n}`);
            const [d, u] = r;
            s = {
                profile: d,
                workspace: u
            };
        } else s = r;
        const i = s.profile ? za(s.profile) : void 0, a = vp(s.workspace), o = await this.withStorageInitialized(i, a);
        if (Array.isArray(r)) switch(n){
            case "collectionBulkInsert":
                {
                    const [, , l, d] = r;
                    return o.collectionBulkInsert(l, d);
                }
            case "collectionUpsertIfPreferred":
                {
                    const [, , l, d] = r;
                    return o.collectionUpsertIfPreferred(l, d);
                }
            case "collectionDeleteMany":
                {
                    const [, , l, d] = r;
                    return o.collectionDeleteMany(l, d);
                }
            case "collectionQuery":
                {
                    const [, , l, d] = r;
                    return o.collectionQuery(l, d);
                }
            case "cursorDiskKVGet":
                {
                    const [, , l] = r;
                    return o.cursorDiskKVGet(l);
                }
            case "cursorDiskKVGetBatch":
                {
                    const [, , l] = r;
                    return o.cursorDiskKVGetBatch(l);
                }
            case "cursorDiskKVGetWithLogs":
                {
                    const [, , l] = r;
                    return o.cursorDiskKVGetWithLogs(l);
                }
            case "cursorDiskKVSet":
                {
                    const [, , l, d] = r;
                    return o.cursorDiskKVSet(l, d);
                }
            case "cursorDiskKVSetIfAbsent":
                {
                    const [, , l, d] = r;
                    return o.cursorDiskKVSetIfAbsent(l, d);
                }
            case "cursorDiskKVReplaceIfEquals":
                {
                    const [, , l, d, u] = r;
                    return o.cursorDiskKVReplaceIfEquals(l, d, u);
                }
            case "cursorDiskKVSetBinary":
                {
                    const [, , l, d] = r;
                    return o.cursorDiskKVSetBinary(l, d);
                }
            case "cursorDiskKVSetBinaryBatch":
                {
                    const [, , l] = r, d = l.map(([u, m])=>m instanceof ae ? [
                            u,
                            m.buffer
                        ] : [
                            u,
                            m
                        ]);
                    return o.cursorDiskKVSetBinaryBatch(d);
                }
            case "cursorDiskKVSetBatch":
                {
                    const [, , l, d] = r;
                    return o.cursorDiskKVSetBatch(l.map(([u, m])=>[
                            u,
                            m ?? void 0
                        ]), d ?? void 0);
                }
            case "cursorDiskKVGetBinary":
                {
                    const [, , l] = r;
                    return o.cursorDiskKVGetBinary(l);
                }
            case "cursorDiskKVDelete":
                {
                    const [, , l, d] = r;
                    return o.cursorDiskKVDelete(l, d);
                }
            default:
                throw new Error(`Call not found: ${n}`);
        }
        switch(n){
            case "getItems":
                return Array.from(o.items.entries());
            case "updateItems":
                {
                    const l = s;
                    if (l.insert) for (const [d, u] of l.insert)o.set(d, u);
                    l.delete?.forEach((d)=>o.delete(d));
                    break;
                }
            case "optimize":
                {
                    const l = s;
                    return o.optimize({
                        incrementalPages: l.incrementalPages,
                        checkpointWal: l.checkpointWal
                    });
                }
            case "getStorageStats":
                return o.getStorageStats();
            case "getStorageSizeBreakdown":
                return o.getStorageSizeBreakdown(N5e(s.payload));
            case "cancelStorageSizeBreakdown":
                return o.cancelStorageSizeBreakdown();
            case "isUsed":
                {
                    const l = s.payload;
                    if (typeof l == "string") return this.storageMainService.isUsed(l);
                }
            case "cursorDiskKVClearPrefix":
                {
                    if (!Xw(s)) throw new Error("Invalid request for cursorDiskKVClearPrefix");
                    const l = s;
                    return o.cursorDiskKVClearPrefix(l.prefix);
                }
            case "cursorDiskKVGetPrefix":
                {
                    if (!Xw(s)) throw new Error("Invalid request for cursorDiskKVGetPrefix");
                    const l = s;
                    return o.cursorDiskKVGetPrefix(l.prefix);
                }
            case "cursorDiskKVGetPrefixKeys":
                {
                    if (!Xw(s)) throw new Error("Invalid request for cursorDiskKVGetPrefixKeys");
                    const l = s;
                    return o.cursorDiskKVGetPrefixKeys(l.prefix);
                }
            case "cursorDiskKVGetPrefixBinary":
                {
                    if (!Xw(s)) throw new Error("Invalid request for cursorDiskKVGetPrefixBinary");
                    const l = s;
                    return o.cursorDiskKVGetPrefixBinary(l.prefix);
                }
            default:
                throw new Error(`Call not found: ${n}`);
        }
    }
    async withStorageInitialized(t, n) {
        let r;
        n ? r = this.storageMainService.workspaceStorage(n) : t ? r = this.storageMainService.profileStorage(t) : r = this.storageMainService.applicationStorage;
        try {
            await r.init();
        } catch (s) {
            this.logService.error(`StorageIPC#init: Unable to init ${n ? "workspace" : t ? "profile" : "application"} storage due to ${s}`);
        }
        return r;
    }
}, gO.STORAGE_CHANGE_DEBOUNCE_TIME = 100, Gpe = gO;

}
