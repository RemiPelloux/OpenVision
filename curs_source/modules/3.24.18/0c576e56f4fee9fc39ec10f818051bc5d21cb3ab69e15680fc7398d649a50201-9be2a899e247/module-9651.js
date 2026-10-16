"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsyncAction = void 0;
const n = require("./module-2591.js"), o = require("./module-3553.js"), s = require("./module-5143.js");
class i extends n.Action {
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
        const r = this.id, n = this.scheduler;
        return null != r && (this.id = this.recycleAsyncId(n, r, t)), this.pending = !0, this.delay = t, this.id = this.id ?? this.requestAsyncId(n, this.id, t), this;
    }
    requestAsyncId(e, t, r = 0) {
        return o.intervalProvider.setInterval(e.flush.bind(e, this), r);
    }
    recycleAsyncId(e, t, r = 0) {
        if (null != r && this.delay === r && !1 === this.pending) return t;
        null != t && o.intervalProvider.clearInterval(t);
    }
    execute(e, t) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        const r = this._execute(e, t);
        if (r) return r;
        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }
    _execute(e, t) {
        let r, n = !1;
        try {
            this.work(e);
        } catch (e) {
            n = !0, r = e || new Error("Scheduled action threw falsy error");
        }
        if (n) return this.unsubscribe(), r;
    }
    unsubscribe() {
        if (!this.closed) {
            const { id: e, scheduler: t } = this, { actions: r } = t;
            this.work = this.state = this.scheduler = null, this.pending = !1, (0, s.arrRemove)(r, this), null != e && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null, super.unsubscribe();
        }
    }
}
exports.AsyncAction = i;
