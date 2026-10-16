import { K5p, RM1 } from "./Action_2.js";
import { DM1 } from "./arrRemove.js";
import { PM1, pSi } from "./intervalProvider.js";
import { MM1 } from "./ipa.js";
import { E } from "./tslib.es6.js";
var Y5p;
export { Y5p };
var __wakaru_NM1_initialized = false;
export function NM1() {
if (__wakaru_NM1_initialized) return;
__wakaru_NM1_initialized = true;
E(), RM1(), PM1(), DM1(), Y5p = class extends K5p {
    scheduler;
    work;
    id;
    state;
    delay;
    pending = !1;
    constructor(t, e){
        super(t, e), this.scheduler = t, this.work = e;
    }
    schedule(t, e = 0) {
        if (this.closed) return this;
        this.state = t;
        const n = this.id, i = this.scheduler;
        return n != null && (this.id = this.recycleAsyncId(i, n, e)), this.pending = !0, this.delay = e, this.id = this.id ?? this.requestAsyncId(i, this.id, e), this;
    }
    requestAsyncId(t, e, n = 0) {
        return pSi.setInterval(t.flush.bind(t, this), n);
    }
    recycleAsyncId(t, e, n = 0) {
        if (n != null && this.delay === n && this.pending === !1) return e;
        e != null && pSi.clearInterval(e);
    }
    execute(t, e) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        const n = this._execute(t, e);
        if (n) return n;
        this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }
    _execute(t, e) {
        let n = !1, i;
        try {
            this.work(t);
        } catch (r) {
            n = !0, i = r || new Error("Scheduled action threw falsy error");
        }
        if (n) return this.unsubscribe(), i;
    }
    unsubscribe() {
        if (!this.closed) {
            const { id: t, scheduler: e } = this, { actions: n } = e;
            this.work = this.state = this.scheduler = null, this.pending = !1, MM1(n, this), t != null && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null, super.unsubscribe();
        }
    }
};

}
