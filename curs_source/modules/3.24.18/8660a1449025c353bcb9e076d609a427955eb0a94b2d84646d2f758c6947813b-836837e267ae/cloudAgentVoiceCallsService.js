import { Gt, Qe, Wd, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Dc, jl } from "./aiService.js";
import { qn } from "./async.js";
import { QLm, Rqe, pd } from "./background_composer_pb.js";
import { _qt } from "./cacheFirstBlobStore.js";
import { jCt, yqt } from "./cloudAgentCacheService.js";
import { Rn } from "./extensions.js";
import { UCt } from "./gYa.js";
import { OT } from "./index_5.ts";
import { It } from "./instantiation.js";
import { $v } from "./ipa.js";
import { Ji, Li } from "./log.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { gT } from "./utils_24.js";
import { Ai, Xo } from "./uuid_2.js";
import { vh } from "./yBp.js";
var XJr, $Ya, M8m, ZJr;
export { $Ya, M8m, XJr, ZJr };
var __wakaru_HYa_initialized = false;
export function HYa() {
if (__wakaru_HYa_initialized) return;
__wakaru_HYa_initialized = true;
"use strict";
E(), OT(), pd(), Gt(), qn(), Qe(), Xo(), It(), Rn(), Ji(), gT(), Dc(), _qt(), yqt(), XJr = jn("cloudAgentVoiceCallsService"), $Ya = "empty", M8m = [
    2e3,
    1e4,
    3e4
], ZJr = class extends st {
    constructor(t, e, n){
        super(), this.aiService = t, this.cloudAgentCacheService = e, this.logService = n, this._calls = new Map, this._latestBlobKey = new Map, this._blobStores = new Map, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event;
    }
    getCalls(t) {
        return this._calls.get(t)?.calls ?? [];
    }
    loadedAgentIds() {
        return [
            ...this._calls.keys()
        ];
    }
    async applyBlobId(t, e) {
        const n = e === void 0 || e.length === 0 ? $Ya : $v(e);
        if (this._latestBlobKey.set(t, n), this._calls.get(t)?.blobKey !== n) {
            if (e === void 0 || n === $Ya) {
                this._commit(t, n, []);
                return;
            }
            for(let i = 0;; i++)try {
                const r = await this._blobStoreForAgent(t).getBlob(e);
                this._latestBlobKey.get(t) === n && this._commit(t, n, QLm.fromBinary(r).calls);
                return;
            } catch (r) {
                const s = M8m[i];
                if (s === void 0 || this._latestBlobKey.get(t) !== n) {
                    this.logService.warn(`[CloudAgentVoiceCallsService] Failed to load voice calls bcId=${t} blobKey=${n}`, r instanceof Error ? r.name : typeof r);
                    return;
                }
                if (await Wd(s), this._latestBlobKey.get(t) !== n) return;
            }
        }
    }
    releaseAgent(t) {
        this._calls.delete(t), this._latestBlobKey.delete(t), this._blobStores.delete(t);
    }
    _commit(t, e, n) {
        this._calls.set(t, {
            blobKey: e,
            calls: n
        }), this._onDidChange.fire(t);
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
}, ZJr = Re([
    F(0, jl),
    F(1, jCt),
    F(2, Li)
], ZJr), bn(XJr, ZJr, 1);

}
