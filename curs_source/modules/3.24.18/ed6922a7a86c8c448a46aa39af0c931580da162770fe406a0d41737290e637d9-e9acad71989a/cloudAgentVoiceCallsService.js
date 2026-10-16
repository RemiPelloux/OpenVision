import { td } from "./A3u.js";
import { zv } from "./De_3.js";
import { Kl, Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Sg, jp } from "./aiService.js";
import { bn } from "./async.js";
import { hPe, hm, vVd } from "./background_composer_pb.js";
import { iwt } from "./cacheFirstBlobStore.js";
import { swt, tGt } from "./cloudAgentCacheService.js";
import { Pn } from "./extensions.js";
import { A1 } from "./index_5.ts";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Fw } from "./utils_24.js";
import { Js, zn } from "./uuid.js";
import { Net } from "./xmo.js";
var zqi, igo, CJd, Kqi;
export { CJd, Kqi, igo, zqi };
var __wakaru_rgo_initialized = false;
export function rgo() {
if (__wakaru_rgo_initialized) return;
__wakaru_rgo_initialized = true;
"use strict";
x(), A1(), hm(), bt(), bn(), Se(), Js(), Ze(), Pn(), Qn(), Fw(), Sg(), iwt(), tGt(), zqi = vn("cloudAgentVoiceCallsService"), igo = "empty", CJd = [
    2e3,
    1e4,
    3e4
], Kqi = class extends we {
    constructor(e, t, n){
        super(), this.aiService = e, this.cloudAgentCacheService = t, this.logService = n, this._calls = new Map, this._latestBlobKey = new Map, this._blobStores = new Map, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event;
    }
    getCalls(e) {
        return this._calls.get(e)?.calls ?? [];
    }
    loadedAgentIds() {
        return [
            ...this._calls.keys()
        ];
    }
    async applyBlobId(e, t) {
        const n = t === void 0 || t.length === 0 ? igo : zv(t);
        if (this._latestBlobKey.set(e, n), this._calls.get(e)?.blobKey !== n) {
            if (t === void 0 || n === igo) {
                this._commit(e, n, []);
                return;
            }
            for(let i = 0;; i++)try {
                const r = await this._blobStoreForAgent(e).getBlob(t);
                this._latestBlobKey.get(e) === n && this._commit(e, n, vVd.fromBinary(r).calls);
                return;
            } catch (r) {
                const s = CJd[i];
                if (s === void 0 || this._latestBlobKey.get(e) !== n) {
                    this.logService.warn(`[CloudAgentVoiceCallsService] Failed to load voice calls bcId=${e} blobKey=${n}`, r instanceof Error ? r.name : typeof r);
                    return;
                }
                if (await Kl(s), this._latestBlobKey.get(e) !== n) return;
            }
        }
    }
    releaseAgent(e) {
        this._calls.delete(e), this._latestBlobKey.delete(e), this._blobStores.delete(e);
    }
    _commit(e, t, n) {
        this._calls.set(e, {
            blobKey: t,
            calls: n
        }), this._onDidChange.fire(e);
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
}, Kqi = ie([
    C(0, jp),
    C(1, swt),
    C(2, Wn)
], Kqi), mn(zqi, Kqi, 1);

}
