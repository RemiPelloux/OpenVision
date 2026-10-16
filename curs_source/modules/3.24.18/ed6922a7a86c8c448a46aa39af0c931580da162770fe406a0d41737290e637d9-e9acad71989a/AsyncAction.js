import { IPu, cpv } from "./Action_2.js";
import { upv } from "./De_3.js";
import { dpv } from "./arrRemove.js";
import { lpv, uMn } from "./intervalProvider.js";
import { x } from "./tslib.es6.js";
var APu;
export { APu };
var __wakaru_hpv_initialized = false;
export function hpv() {
if (__wakaru_hpv_initialized) return;
__wakaru_hpv_initialized = true;
x(), cpv(), lpv(), dpv(), APu = class extends IPu {
    scheduler;
    work;
    id;
    state;
    delay;
    pending = !1;
    constructor(e, t){
        super(e, t), this.scheduler = e, this.work = t;
    }
    schedule(e, t = 0) {
        if (this.closed) return this;
        this.state = e;
        const n = this.id, i = this.scheduler;
        return n != null && (this.id = this.recycleAsyncId(i, n, t)), this.pending = !0, this.delay = t, this.id = this.id ?? this.requestAsyncId(i, this.id, t), this;
    }
    requestAsyncId(e, t, n = 0) {
        return uMn.setInterval(e.flush.bind(e, this), n);
    }
    recycleAsyncId(e, t, n = 0) {
        if (n != null && this.delay === n && this.pending === !1) return t;
        t != null && uMn.clearInterval(t);
    }
    execute(e, t) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        const n = this._execute(e, t);
        if (n) return n;
        this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }
    _execute(e, t) {
        let n = !1, i;
        try {
            this.work(e);
        } catch (r) {
            n = !0, i = r || new Error("Scheduled action threw falsy error");
        }
        if (n) return this.unsubscribe(), i;
    }
    unsubscribe() {
        if (!this.closed) {
            const { id: e, scheduler: t } = this, { actions: n } = t;
            this.work = this.state = this.scheduler = null, this.pending = !1, upv(n, this), e != null && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null, super.unsubscribe();
        }
    }
};

}
