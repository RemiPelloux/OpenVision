import { td } from "./A3u.js";
import { Z4e, ub } from "./async.cursor.js";
import { hPe, hm } from "./background_composer_pb.js";
import { iwt } from "./cacheFirstBlobStore.js";
import { QX } from "./cgh.js";
import { h3n } from "./cloudAgentStream.js";
import { x } from "./tslib.es6.js";
import { Fw } from "./utils_24.js";
import { Js, zn } from "./uuid.js";
import { Net } from "./xmo.js";
var Oxh, Fxh;
export { Fxh, Oxh };
var __wakaru_Ge__initialized = false;
export function Ge_() {
if (__wakaru_Ge__initialized) return;
__wakaru_Ge__initialized = true;
"use strict";
x(), hm(), ub(), Js(), Fw(), iwt(), h3n(), Oxh = 16, Fxh = class {
    constructor(e, t, n){
        this.cachedBlobKeys = new Set, this._abortController = new AbortController, this._remoteSemaphore = new Z4e(Oxh), this._cacheReads = 0, this._networkReads = 0;
        const i = this._abortController.signal;
        this._store = Net({
            getBlobFromCache: (r)=>t.getBlob(e, r),
            getBlobFromRemote: (r)=>this._remoteSemaphore.withSemaphore(async ()=>(i.throwIfAborted(), (await (await n.backgroundComposerClient()).getBlobForAgentKV(new hPe({
                        bcId: e,
                        blobId: r
                    }), {
                        signal: i,
                        headers: td(zn())
                    })).blobData)),
            setBlobInCache: (r, s)=>{
                i.aborted || t.setBlob(e, r, s);
            },
            onBlobResolved: (r, s, o)=>{
                this.cachedBlobKeys.add(QX(r)), o === "cache" ? this._cacheReads++ : this._networkReads++;
            }
        });
    }
    async getBlob(e, t) {
        const n = this._abortController.signal;
        n.throwIfAborted();
        const i = await this._store.getBlob(t);
        return n.throwIfAborted(), i;
    }
    hasBlobCached(e) {
        return this.cachedBlobKeys.has(QX(e));
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
