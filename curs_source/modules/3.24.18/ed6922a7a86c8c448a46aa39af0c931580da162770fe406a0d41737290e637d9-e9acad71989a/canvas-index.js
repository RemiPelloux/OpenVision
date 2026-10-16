import { He, Se, bt, cn, ve, we } from "./HVr.js";
import { SX, ub } from "./async.cursor.js";
import { JH, bn } from "./async.js";
import { Yu } from "./browser.ts";
import { Kwe, p2 } from "./canvas.js";
import { P8e } from "./cloudCanvas.js";
import { Fi, _M } from "./files.js";
import { AO, Bbn, Bmt } from "./qIc.js";
import { Li, jr, ml } from "./resources.js";
import { x } from "./tslib.es6.js";
async function Us_(e, t) {
    try {
        let n = e.getProvider(t.scheme);
        if (n === void 0 && (await e.activateProvider(t.scheme), n = e.getProvider(t.scheme)), n === void 0) throw new Error(`No filesystem provider for ${t.scheme}`);
        const i = await n.readdir(t), r = await Promise.all(i.filter(([s, o])=>(o & _M.Directory) === 0 && s.endsWith(Kwe)).map(async ([s])=>{
            const o = jr(t, s);
            try {
                const a = await n.stat(o);
                return {
                    name: Bmt(s),
                    lastModifiedAt: a.mtime,
                    file: Bbn(o),
                    origin: "local"
                };
            } catch  {
                return;
            }
        }));
        return etr(r);
    } catch (n) {
        return AO(n) === 1 ? {
            status: "ready",
            entries: []
        } : {
            status: "unavailable"
        };
    }
}
function etr(e) {
    return {
        status: "ready",
        entries: e.filter((n)=>n !== void 0).sort((n, i)=>i.lastModifiedAt - n.lastModifiedAt || n.name.localeCompare(i.name))
    };
}
function rIo(e, t, n) {
    if (e.status !== t.status) return !1;
    switch(e.status){
        case "loading":
            return !0;
        case "unavailable":
            return t.status === "unavailable";
        case "ready":
            return t.status === "ready" && e.entries.length === t.entries.length && e.entries.every((i, r)=>{
                const s = t.entries[r];
                return i.name === s.name && i.lastModifiedAt === s.lastModifiedAt && i.origin === s.origin && i.file.preview.kind === s.file.preview.kind && n.extUri.isEqual(i.file.resource, s.file.resource) && n.extUri.isEqual(i.file.preview.resource, s.file.preview.resource);
            });
        default:
            return e;
    }
}
function lLh(e) {
    return "snapshot" in e ? e : {
        snapshot: e,
        shouldBackoff: !1
    };
}
var ELe, uLh, sIo, oIo, dLh;
export { ELe, Us_, dLh, etr, lLh, oIo, rIo, sIo, uLh };
var __wakaru_ttr_initialized = false;
export function ttr() {
if (__wakaru_ttr_initialized) return;
__wakaru_ttr_initialized = true;
"use strict";
x(), Yu(), bn(), ub(), bt(), Se(), Li(), Fi(), p2(), P8e(), ELe = {
    status: "loading"
}, uLh = 64 * 1024, sIo = class extends Error {
}, oIo = class extends we {
    constructor({ focus: e, query: t, uriIdentityService: n, focusedIntervalMs: i = 2e3, unfocusedIntervalMs: r = 3e4, maxIntervalMs: s = 3e4, isCancellation: o, onStart: a, onStop: c, _testing: l }){
        super(), this._poller = this._register(new cn), this._refreshThrottler = this._register(new JH), this._refreshGeneration = 0, this._manualRefreshFailureCount = 0, this._manualRefreshBlockedUntil = 0, this._snapshot = ELe, this._started = !1, this._focusedIntervalMs = i, this._unfocusedIntervalMs = r, this._maxIntervalMs = s, this._isCancellation = o, this._onStart = a, this._onStop = c, this._now = l?.now ?? Date.now, this._onDidChange = this._register(new ve({
            onWillAddFirstListener: ()=>this.start(e, t),
            onDidRemoveLastListener: ()=>this.stop()
        })), this.onDidChange = this._onDidChange.event, this.uriIdentityService = n;
    }
    getSnapshot() {
        return this._snapshot;
    }
    requestRefresh() {
        if (!this._started || this._query === void 0 || this._now() < this._manualRefreshBlockedUntil) return;
        const e = this._refreshGeneration, t = this._query;
        this._refreshThrottler.queue(async ()=>{
            if (!(!this._started || e !== this._refreshGeneration || this._now() < this._manualRefreshBlockedUntil)) try {
                const n = lLh(await t(new AbortController().signal));
                if (!this._started || e !== this._refreshGeneration) return;
                n.shouldBackoff || n.snapshot.status === "unavailable" ? this.recordManualRefreshFailure() : this.resetManualRefreshBackoff(), this.publish(n.snapshot);
            } catch  {
                this._started && e === this._refreshGeneration && this.recordManualRefreshFailure();
            }
        }).catch(()=>{});
    }
    recordManualRefreshFailure() {
        this._manualRefreshFailureCount++;
        const e = Math.min(this._focusedIntervalMs * Math.pow(2, this._manualRefreshFailureCount - 1), this._maxIntervalMs);
        this._manualRefreshBlockedUntil = this._now() + e;
    }
    resetManualRefreshBackoff() {
        this._manualRefreshFailureCount = 0, this._manualRefreshBlockedUntil = 0;
    }
    start(e, t) {
        if (this._started) return;
        this._query = t, this._started = !0, this._snapshot.status !== "ready" && this.publish(ELe);
        const n = new SX(async (i)=>{
            const r = lLh(await t(i));
            if (i.throwIfAborted(), r.shouldBackoff) throw this._started && this.publish(r.snapshot), new sIo;
            if (r.snapshot.status === "unavailable") throw new Error("Cloud Canvas index is unavailable.");
            this.resetManualRefreshBackoff(), this._started && !i.aborted && this.publish(r.snapshot);
        }, {
            focusedIntervalMs: this._focusedIntervalMs,
            unfocusedIntervalMs: this._unfocusedIntervalMs,
            maxIntervalMs: this._maxIntervalMs,
            focus: e,
            isCancellation: this._isCancellation,
            onTickError: (i)=>{
                this._started && !(i instanceof sIo) && this.publish({
                    status: "unavailable"
                });
            }
        });
        this._poller.value = n, n.start(), this._onStart?.();
    }
    stop() {
        this._started = !1, this._refreshGeneration++, this.resetManualRefreshBackoff(), this._query = void 0, this._poller.clear(), this._onStop?.();
    }
    publish(e) {
        rIo(this._snapshot, e, this.uriIdentityService) || (this._snapshot = e, this._onDidChange.fire(e));
    }
}, dLh = class extends we {
    constructor(e, t, n, i){
        super(), this.fileService = e, this.uriIdentityService = t, this.resolveDirectory = n, this.onDidInvalidateDirectory = i, this._activeResources = this._register(new cn), this._directoryResources = this._register(new cn), this._refreshThrottler = this._register(new JH), this._snapshot = ELe, this._directoryInvalidationVersion = 0, this._directoryInvalidated = !0, this._started = !1, this._onDidChange = this._register(new ve({
            onWillAddFirstListener: ()=>this.start(),
            onDidRemoveLastListener: ()=>this.stop()
        })), this.onDidChange = this._onDidChange.event;
    }
    getSnapshot() {
        return this._snapshot;
    }
    start() {
        if (this._started) return;
        this._started = !0, this._snapshot.status !== "ready" && this.publish(ELe);
        const e = new He;
        e.add(this.onDidInvalidateDirectory(()=>{
            this._directoryInvalidated = !0, this._directoryInvalidationVersion++, this.publish(ELe), this.queueRefresh();
        })), this._activeResources.value = e, this.queueRefresh();
    }
    stop() {
        this._started = !1, this._directoryInvalidated = !0, this._directoryInvalidationVersion++, this._directory = void 0, this._directoryResources.clear(), this._activeResources.clear();
    }
    queueRefresh() {
        this._started && this._refreshThrottler.queue(()=>this.refresh()).catch(()=>{});
    }
    async refresh() {
        if (!this._started) return;
        const e = this._directoryInvalidationVersion;
        try {
            if (this._directoryInvalidated || this._directory === void 0) {
                const i = await this.resolveDirectory();
                if (!this._started || e !== this._directoryInvalidationVersion) return;
                this.bindDirectory(i), this._directoryInvalidated = !1;
            }
            const t = this._directory;
            if (t === void 0) return;
            const n = await Us_(this.fileService, t);
            this._started && e === this._directoryInvalidationVersion && this.publish(n);
        } catch  {
            this._started && e === this._directoryInvalidationVersion && this.publish({
                status: "unavailable"
            });
        }
    }
    bindDirectory(e) {
        if (this._directory !== void 0 && this.uriIdentityService.extUri.isEqual(this._directory, e)) return;
        const t = new He;
        try {
            const n = t.add(this.fileService.createWatcher(e, {
                recursive: !1,
                excludes: []
            }));
            t.add(n.onDidChange((i)=>{
                this.affectsIndex(i, e) && this.queueRefresh();
            }));
        } catch (n) {
            throw t.dispose(), n;
        }
        this._directory = e, this._directoryResources.value = t;
    }
    affectsIndex(e, t) {
        return e.contains(t, 1, 2) ? !0 : [
            ...e.rawAdded,
            ...e.rawUpdated,
            ...e.rawDeleted
        ].some((n)=>n.path.endsWith(Kwe) && this.uriIdentityService.extUri.isEqual(ml(n), t));
    }
    publish(e) {
        rIo(this._snapshot, e, this.uriIdentityService) || (this._snapshot = e, this._onDidChange.fire(e));
    }
};

}
