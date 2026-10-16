import { le } from "./async.js";
import { Jn, Mt } from "./cancellation.js";
import { N, ge, se } from "./event.js";
import { B } from "./ipc.js";
import { J, j, yr } from "./lifecycle.js";
import { En } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
var F1;
export { F1 };
var __wakaru_pet_initialized = false;
export function pet() {
if (__wakaru_pet_initialized) return;
__wakaru_pet_initialized = true;
"use strict";
h(), le(), Mt(), se(), j(), te(), F1 = class extends J {
    constructor(e, t){
        super(), this._logService = t, this._lastRequestId = 0, this._pendingRequests = new Map, this._pendingRequestDisposables = new Map, this._onCreateRequest = this._register(new N), this.onCreateRequest = this._onCreateRequest.event, this._timeout = e === void 0 ? 15e3 : e, this._register(ge(()=>{
            for (const n of this._pendingRequestDisposables.values())yr(n);
        }));
    }
    createRequest(e) {
        return new Promise((t, n)=>{
            const r = ++this._lastRequestId;
            this._pendingRequests.set(r, t), this._onCreateRequest.fire({
                requestId: r,
                ...e
            });
            const s = new Jn;
            En(this._timeout, s.token).then(()=>n(`Request ${r} timed out (${this._timeout}ms)`)), this._pendingRequestDisposables.set(r, [
                ge(()=>s.cancel())
            ]);
        });
    }
    acceptReply(e, t) {
        const n = this._pendingRequests.get(e);
        n ? (this._pendingRequests.delete(e), yr(this._pendingRequestDisposables.get(e) || []), this._pendingRequestDisposables.delete(e), n(t)) : this._logService.warn(`RequestStore#acceptReply was called without receiving a matching request ${e}`);
    }
}, F1 = B([
    w(1, Z)
], F1);

}
