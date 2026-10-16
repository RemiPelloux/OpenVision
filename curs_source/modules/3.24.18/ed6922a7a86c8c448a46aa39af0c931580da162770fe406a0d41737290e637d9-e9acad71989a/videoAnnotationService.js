import { td } from "./A3u.js";
import { zv } from "./De_3.js";
import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Sg, jp } from "./aiService.js";
import { XMe, ub } from "./async.cursor.js";
import { $Hd, hPe, hm } from "./background_composer_pb.js";
import { iwt } from "./cacheFirstBlobStore.js";
import { swt, tGt } from "./cloudAgentCacheService.js";
import { Bkt, OWt } from "./cloudAgentStorageService.js";
import { Pn } from "./extensions.js";
import { nsv } from "./f0s.js";
import { mi } from "./index_188.js";
import { A1 } from "./index_5.ts";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Fw } from "./utils_24.js";
import { Js, zn } from "./uuid.js";
import { UUt } from "./video-annotations.js";
import { Net, bMv, yMv } from "./xmo.js";
var jqi, qqi;
export { jqi, qqi };
var __wakaru_ngo_initialized = false;
export function ngo() {
if (__wakaru_ngo_initialized) return;
__wakaru_ngo_initialized = true;
"use strict";
x(), A1(), mi(), hm(), ub(), bt(), Se(), Js(), Ze(), Pn(), Fw(), Sg(), OWt(), Qn(), iwt(), tGt(), jqi = vn("videoAnnotationService"), qqi = class extends we {
    constructor(e, t, n, i){
        super(), this.aiService = e, this.cloudAgentStorageService = t, this.cloudAgentCacheService = n, this.logService = i, this._cache = new Map, this._latestBlobKey = new Map, this._suppressedLoadBlobKey = new Map, this._streamSourcedBcIds = new Set, this._purgeGuard = new XMe, this._blobStores = new Map, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event;
    }
    getAnnotations(e) {
        return this._cache.get(e)?.annotations ?? UUt;
    }
    async ensureLoaded(e, t) {
        if (this._streamSourcedBcIds.has(e)) return;
        const n = this._purgeGuard.capture(e);
        let i;
        try {
            const { value: r } = await this.cloudAgentStorageService.getCloudAgentState({
                bcId: e,
                composerId: t
            });
            i = r.videoAnnotationsBlobId;
        } catch (r) {
            if (this._streamSourcedBcIds.has(e)) return;
            const s = `[VideoAnnotationService] Failed to read videoAnnotationsBlobId bcId=${e} composerId=${t}`;
            yMv(r) ? this.logService.debug(s, r) : this.logService.warn(s, r);
            return;
        }
        n.isCurrent() && (this._streamSourcedBcIds.has(e) || await this._applyLatestBlobId(e, i, `storage composerId=${t}`));
    }
    async ensureLoadedFromBlobId(e, t) {
        this._streamSourcedBcIds.add(e), await this._applyLatestBlobId(e, t, "stream");
    }
    releaseStreamSource(e) {
        this._streamSourcedBcIds.delete(e);
    }
    releaseAgent(e) {
        this._purgeAgent(e);
    }
    dispose() {
        this._cache.clear(), this._blobStores.clear(), this._latestBlobKey.clear(), this._suppressedLoadBlobKey.clear(), this._streamSourcedBcIds.clear(), this._purgeGuard.clear(), super.dispose();
    }
    _purgeAgent(e) {
        this._blobStores.delete(e), this._cache.delete(e), this._latestBlobKey.delete(e), this._suppressedLoadBlobKey.delete(e), this._streamSourcedBcIds.delete(e), this._purgeGuard.delete(e);
    }
    async _applyLatestBlobId(e, t, n) {
        const i = this._blobKey(t), r = this._latestBlobKey.get(e);
        if (this._latestBlobKey.set(e, i), r !== void 0 && r !== i && this._suppressedLoadBlobKey.delete(e), i === "empty") {
            if (this._suppressedLoadBlobKey.delete(e), this._cache.get(e)?.blobKey === "empty") return;
            const s = this._cache.has(e);
            this._cache.set(e, {
                blobKey: "empty",
                annotations: UUt
            }), s && this._onDidChange.fire(e);
            return;
        }
        if (this._cache.get(e)?.blobKey !== i && this._suppressedLoadBlobKey.get(e) !== i) try {
            if (t === void 0) return;
            const s = await this._blobStoreForAgent(e).getBlob(t);
            if (this._latestBlobKey.get(e) !== i || this._cache.get(e)?.blobKey === i) return;
            const o = $Hd.fromBinary(s);
            this._suppressedLoadBlobKey.delete(e), this._cache.set(e, {
                blobKey: i,
                annotations: nsv(o.entries)
            }), this._onDidChange.fire(e);
        } catch (s) {
            if (this._latestBlobKey.get(e) !== i) return;
            this._suppressedLoadBlobKey.set(e, i);
            const o = this._cache.get(e);
            o !== void 0 && o.blobKey !== i && (this._cache.delete(e), this._onDidChange.fire(e)), this.logService.warn(`[VideoAnnotationService] Failed to load video annotations blob bcId=${e} source=${n} blobKey=${i}`, s);
        }
    }
    _blobKey(e) {
        return e === void 0 || bMv(e) ? "empty" : zv(e);
    }
    _blobStoreForAgent(e) {
        const t = this._blobStores.get(e);
        if (t !== void 0) return t;
        const n = Net({
            getBlobFromCache: (i)=>this.cloudAgentCacheService.getBlob(e, i),
            getBlobFromRemote: async (i)=>(await this.aiService.backgroundComposerSyncClient.getBlobForAgentKV(new hPe({
                    bcId: e,
                    blobId: i
                }), {
                    headers: td(zn())
                })).blobData,
            setBlobInCache: (i, r)=>{
                this.cloudAgentCacheService.setBlob(e, i, r);
            }
        });
        return this._blobStores.set(e, n), n;
    }
}, qqi = ie([
    C(0, jp),
    C(1, Bkt),
    C(2, swt),
    C(3, Wn)
], qqi), mn(jqi, qqi, 1);

}
