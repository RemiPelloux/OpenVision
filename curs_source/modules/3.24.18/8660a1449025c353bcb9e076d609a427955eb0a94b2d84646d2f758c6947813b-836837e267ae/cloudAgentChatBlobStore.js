import { kle } from "./Aeg.js";
import { c_, cot } from "./async.cursor.js";
import { Rqe, pd } from "./background_composer_pb.js";
import { _qt } from "./cacheFirstBlobStore.js";
import { CEi } from "./cloudAgentStream.js";
import { UCt } from "./gYa.js";
import { E } from "./tslib.es6.js";
import { gT } from "./utils_24.js";
import { Ai, Xo } from "./uuid_2.js";
import { vh } from "./yBp.js";
var ggg, fgg;
export { fgg, ggg };
var __wakaru_x1k_initialized = false;
export function x1k() {
if (__wakaru_x1k_initialized) return;
__wakaru_x1k_initialized = true;
"use strict";
E(), pd(), c_(), Xo(), gT(), _qt(), CEi(), ggg = 16, fgg = class {
    constructor(t, e, n){
        this.cachedBlobKeys = new Set, this._abortController = new AbortController, this._remoteSemaphore = new cot(ggg), this._cacheReads = 0, this._networkReads = 0;
        const i = this._abortController.signal;
        this._store = UCt({
            getBlobFromCache: (r)=>e.getBlob(t, r),
            getBlobFromRemote: (r)=>this._remoteSemaphore.withSemaphore(async ()=>(i.throwIfAborted(), (await (await n.backgroundComposerClient()).getBlobForAgentKV(new Rqe({
                        bcId: t,
                        blobId: r
                    }), {
                        signal: i,
                        headers: vh(Ai())
                    })).blobData)),
            setBlobInCache: (r, s)=>{
                i.aborted || e.setBlob(t, r, s);
            },
            onBlobResolved: (r, s, o)=>{
                this.cachedBlobKeys.add(kle(r)), o === "cache" ? this._cacheReads++ : this._networkReads++;
            }
        });
    }
    async getBlob(t, e) {
        const n = this._abortController.signal;
        n.throwIfAborted();
        const i = await this._store.getBlob(e);
        return n.throwIfAborted(), i;
    }
    hasBlobCached(t) {
        return this.cachedBlobKeys.has(kle(t));
    }
    get readCounts() {
        return {
            cache: this._cacheReads,
            network: this._networkReads
        };
    }
    dispose() {
        this._abortController.abort(), this._store.clear();
    }
};

}
