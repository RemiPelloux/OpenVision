import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Dc, jl } from "./aiService.js";
import { G6e, c_ } from "./async.cursor.js";
import { Rqe, T3m, pd } from "./background_composer_pb.js";
import { _qt } from "./cacheFirstBlobStore.js";
import { jCt, yqt } from "./cloudAgentCacheService.js";
import { IEn, KGt } from "./cloudAgentStorageService.js";
import { Rn } from "./extensions.js";
import { $G1, UCt, jG1 } from "./gYa.js";
import { Mt } from "./index_197.js";
import { OT } from "./index_5.ts";
import { It } from "./instantiation.js";
import { $v, a2p } from "./ipa.js";
import { Ji, Li } from "./log.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { gT } from "./utils_24.js";
import { Ai, Xo } from "./uuid_2.js";
import { AHt } from "./video-annotations.js";
import { vh } from "./yBp.js";
var KJr, YJr;
export { KJr, YJr };
var __wakaru_jYa_initialized = false;
export function jYa() {
if (__wakaru_jYa_initialized) return;
__wakaru_jYa_initialized = true;
"use strict";
E(), OT(), Mt(), pd(), c_(), Gt(), Qe(), Xo(), It(), Rn(), gT(), Dc(), IEn(), Ji(), _qt(), yqt(), KJr = jn("videoAnnotationService"), YJr = class extends st {
    constructor(t, e, n, i){
        super(), this.aiService = t, this.cloudAgentStorageService = e, this.cloudAgentCacheService = n, this.logService = i, this._cache = new Map, this._latestBlobKey = new Map, this._suppressedLoadBlobKey = new Map, this._streamSourcedBcIds = new Set, this._purgeGuard = new G6e, this._blobStores = new Map, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event;
    }
    getAnnotations(t) {
        return this._cache.get(t)?.annotations ?? AHt;
    }
    async ensureLoaded(t, e) {
        if (this._streamSourcedBcIds.has(t)) return;
        const n = this._purgeGuard.capture(t);
        let i;
        try {
            const { value: r } = await this.cloudAgentStorageService.getCloudAgentState({
                bcId: t,
                composerId: e
            });
            i = r.videoAnnotationsBlobId;
        } catch (r) {
            if (this._streamSourcedBcIds.has(t)) return;
            const s = `[VideoAnnotationService] Failed to read videoAnnotationsBlobId bcId=${t} composerId=${e}`;
            $G1(r) ? this.logService.debug(s, r) : this.logService.warn(s, r);
            return;
        }
        n.isCurrent() && (this._streamSourcedBcIds.has(t) || await this._applyLatestBlobId(t, i, `storage composerId=${e}`));
    }
    async ensureLoadedFromBlobId(t, e) {
        this._streamSourcedBcIds.add(t), await this._applyLatestBlobId(t, e, "stream");
    }
    releaseStreamSource(t) {
        this._streamSourcedBcIds.delete(t);
    }
    releaseAgent(t) {
        this._purgeAgent(t);
    }
    dispose() {
        this._cache.clear(), this._blobStores.clear(), this._latestBlobKey.clear(), this._suppressedLoadBlobKey.clear(), this._streamSourcedBcIds.clear(), this._purgeGuard.clear(), super.dispose();
    }
    _purgeAgent(t) {
        this._blobStores.delete(t), this._cache.delete(t), this._latestBlobKey.delete(t), this._suppressedLoadBlobKey.delete(t), this._streamSourcedBcIds.delete(t), this._purgeGuard.delete(t);
    }
    async _applyLatestBlobId(t, e, n) {
        const i = this._blobKey(e), r = this._latestBlobKey.get(t);
        if (this._latestBlobKey.set(t, i), r !== void 0 && r !== i && this._suppressedLoadBlobKey.delete(t), i === "empty") {
            if (this._suppressedLoadBlobKey.delete(t), this._cache.get(t)?.blobKey === "empty") return;
            const s = this._cache.has(t);
            this._cache.set(t, {
                blobKey: "empty",
                annotations: AHt
            }), s && this._onDidChange.fire(t);
            return;
        }
        if (this._cache.get(t)?.blobKey !== i && this._suppressedLoadBlobKey.get(t) !== i) try {
            if (e === void 0) return;
            const s = await this._blobStoreForAgent(t).getBlob(e);
            if (this._latestBlobKey.get(t) !== i || this._cache.get(t)?.blobKey === i) return;
            const o = T3m.fromBinary(s);
            this._suppressedLoadBlobKey.delete(t), this._cache.set(t, {
                blobKey: i,
                annotations: a2p(o.entries)
            }), this._onDidChange.fire(t);
        } catch (s) {
            if (this._latestBlobKey.get(t) !== i) return;
            this._suppressedLoadBlobKey.set(t, i);
            const o = this._cache.get(t);
            o !== void 0 && o.blobKey !== i && (this._cache.delete(t), this._onDidChange.fire(t)), this.logService.warn(`[VideoAnnotationService] Failed to load video annotations blob bcId=${t} source=${n} blobKey=${i}`, s);
        }
    }
    _blobKey(t) {
        return t === void 0 || jG1(t) ? "empty" : $v(t);
    }
    _blobStoreForAgent(t) {
        const e = this._blobStores.get(t);
        if (e !== void 0) return e;
        const n = UCt({
            getBlobFromCache: (i)=>this.cloudAgentCacheService.getBlob(t, i),
            getBlobFromRemote: async (i)=>(await this.aiService.backgroundComposerSyncClient.getBlobForAgentKV(new Rqe({
                    bcId: t,
                    blobId: i
                }), {
                    headers: vh(Ai())
                })).blobData,
            setBlobInCache: (i, r)=>{
                this.cloudAgentCacheService.setBlob(t, i, r);
            }
        });
        return this._blobStores.set(t, n), n;
    }
}, YJr = Re([
    F(0, jl),
    F(1, KGt),
    F(2, jCt),
    F(3, Li)
], YJr), bn(KJr, YJr, 1);

}
