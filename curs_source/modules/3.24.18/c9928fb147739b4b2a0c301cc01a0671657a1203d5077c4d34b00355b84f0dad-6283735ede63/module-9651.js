Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsyncAction = void 0;
const s = require("./module-2591.js"), o = require("./module-3553.js"), r = require("./module-5143.js");
class t extends s.Action {
    scheduler;
    work;
    id;
    state;
    delay;
    pending = !1;
    constructor(e, a){
        super(e, a), this.scheduler = e, this.work = a;
    }
    schedule(e, a = 0) {
        if (this.closed) return this;
        this.state = e;
        const n = this.id, s = this.scheduler;
        return null != n && (this.id = this.recycleAsyncId(s, n, a)), this.pending = !0, this.delay = a, this.id = this.id ?? this.requestAsyncId(s, this.id, a), this;
    }
    requestAsyncId(e, a, n = 0) {
        return o.intervalProvider.setInterval(e.flush.bind(e, this), n);
    }
    recycleAsyncId(e, a, n = 0) {
        if (null != n && this.delay === n && !1 === this.pending) return a;
        null != a && o.intervalProvider.clearInterval(a);
    }
    execute(e, a) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        const n = this._execute(e, a);
        if (n) return n;
        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }
    _execute(e, a) {
        let n, s = !1;
        try {
            this.work(e);
        } catch (e) {
            s = !0, n = e || new Error("Scheduled action threw falsy error");
        }
        if (s) return this.unsubscribe(), n;
    }
    unsubscribe() {
        if (!this.closed) {
            const { id: e, scheduler: a } = this, { actions: n } = a;
            this.work = this.state = this.scheduler = null, this.pending = !1, (0, r.arrRemove)(n, this), null != e && (this.id = this.recycleAsyncId(a, e, null)), this.delay = null, super.unsubscribe();
        }
    }
}
exports.AsyncAction = t;
