import { Se, cn, we } from "./HVr.js";
import { ac, bn } from "./async.js";
import { en, xi } from "./dom_2.js";
import { f3 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var _9h;
export { _9h };
var __wakaru_sh__initialized = false;
export function sh_() {
if (__wakaru_sh__initialized) return;
__wakaru_sh__initialized = true;
"use strict";
x(), en(), bn(), Se(), _9h = class extends we {
    constructor(e, t, n, i, r){
        super(), this._isVisible = e, this._getXterm = t, this._resizeBothCallback = n, this._resizeXCallback = i, this._resizeYCallback = r, this._latestX = 0, this._latestY = 0, this._resizeXJob = this._register(new cn), this._resizeYJob = this._register(new cn), this._debounceResizeXScheduler = this._register(new ac(()=>this._resizeXCallback(this._latestX), 100));
    }
    async resize(e, t, n) {
        if (this._store.isDisposed) return;
        if (this._latestX = e, this._latestY = t, n || this._getXterm().raw.buffer.normal.length < 200) {
            this._resizeXJob.clear(), this._resizeYJob.clear(), this._debounceResizeXScheduler.cancel(), this._resizeBothCallback(e, t);
            return;
        }
        const i = xi(this._getXterm().raw.element);
        if (i && !this._isVisible()) {
            this._resizeXJob.value || (this._resizeXJob.value = f3(i, async ()=>{
                this._store.isDisposed || (this._resizeXCallback(this._latestX), this._resizeXJob.clear());
            })), this._resizeYJob.value || (this._resizeYJob.value = f3(i, async ()=>{
                this._store.isDisposed || (this._resizeYCallback(this._latestY), this._resizeYJob.clear());
            }));
            return;
        }
        this._resizeYCallback(t), this._latestX = e, this._debounceResizeXScheduler.schedule();
    }
    flush() {
        this._store.isDisposed || (this._resizeXJob.value || this._resizeYJob.value || this._debounceResizeXScheduler.isScheduled()) && (this._resizeXJob.clear(), this._resizeYJob.clear(), this._debounceResizeXScheduler.cancel(), this._resizeBothCallback(this._latestX, this._latestY));
    }
};

}
