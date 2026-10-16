import { Qe, Vn, st } from "./Iwo.js";
import { Yu, qn } from "./async.js";
import { Hn, ws } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { y7 } from "./ze.js";
var Y2g;
export { Y2g };
var __wakaru_pDk_initialized = false;
export function pDk() {
if (__wakaru_pDk_initialized) return;
__wakaru_pDk_initialized = true;
"use strict";
E(), Hn(), qn(), Qe(), Y2g = class extends st {
    constructor(t, e, n, i, r){
        super(), this._isVisible = t, this._getXterm = e, this._resizeBothCallback = n, this._resizeXCallback = i, this._resizeYCallback = r, this._latestX = 0, this._latestY = 0, this._resizeXJob = this._register(new Vn), this._resizeYJob = this._register(new Vn), this._debounceResizeXScheduler = this._register(new Yu(()=>this._resizeXCallback(this._latestX), 100));
    }
    async resize(t, e, n) {
        if (this._store.isDisposed) return;
        if (this._latestX = t, this._latestY = e, n || this._getXterm().raw.buffer.normal.length < 200) {
            this._resizeXJob.clear(), this._resizeYJob.clear(), this._debounceResizeXScheduler.cancel(), this._resizeBothCallback(t, e);
            return;
        }
        const i = ws(this._getXterm().raw.element);
        if (i && !this._isVisible()) {
            this._resizeXJob.value || (this._resizeXJob.value = y7(i, async ()=>{
                this._store.isDisposed || (this._resizeXCallback(this._latestX), this._resizeXJob.clear());
            })), this._resizeYJob.value || (this._resizeYJob.value = y7(i, async ()=>{
                this._store.isDisposed || (this._resizeYCallback(this._latestY), this._resizeYJob.clear());
            }));
            return;
        }
        this._resizeYCallback(e), this._latestX = t, this._debounceResizeXScheduler.schedule();
    }
    flush() {
        this._store.isDisposed || (this._resizeXJob.value || this._resizeYJob.value || this._debounceResizeXScheduler.isScheduled()) && (this._resizeXJob.clear(), this._resizeYJob.clear(), this._debounceResizeXScheduler.cancel(), this._resizeBothCallback(this._latestX, this._latestY));
    }
};

}
