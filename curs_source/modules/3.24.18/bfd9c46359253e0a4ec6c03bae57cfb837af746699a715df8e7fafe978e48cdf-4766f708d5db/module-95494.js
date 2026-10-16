"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
const n = require("./module-69651.js"), s = require("./module-51078.js"), o = require("./module-75488.js");
class i extends o.AsyncScheduler {
    maxFrames;
    static frameTimeFactor = 10;
    frame = 0;
    index = -1;
    constructor(e = a, t = 1 / 0){
        super(e, ()=>this.frame), this.maxFrames = t;
    }
    flush() {
        const { actions: e, maxFrames: t } = this;
        let r, n;
        for(; (n = e[0]) && n.delay <= t && (e.shift(), this.frame = n.delay, !(r = n.execute(n.state, n.delay))););
        if (r) {
            for(; n = e.shift();)n.unsubscribe();
            throw r;
        }
    }
}
exports.VirtualTimeScheduler = i;
class a extends n.AsyncAction {
    scheduler;
    work;
    index;
    active = !0;
    constructor(e, t, r = e.index += 1){
        super(e, t), this.scheduler = e, this.work = t, this.index = r, this.index = e.index = r;
    }
    schedule(e, t = 0) {
        if (Number.isFinite(t)) {
            if (!this.id) return super.schedule(e, t);
            this.active = !1;
            const r = new a(this.scheduler, this.work);
            return this.add(r), r.schedule(e, t);
        }
        return s.Subscription.EMPTY;
    }
    requestAsyncId(e, t, r = 0) {
        this.delay = e.frame + r;
        const { actions: n } = e;
        return n.push(this), n.sort(a.sortActions), 1;
    }
    recycleAsyncId(e, t, r = 0) {}
    _execute(e, t) {
        if (!0 === this.active) return super._execute(e, t);
    }
    static sortActions(e, t) {
        return e.delay === t.delay ? e.index === t.index ? 0 : e.index > t.index ? 1 : -1 : e.delay > t.delay ? 1 : -1;
    }
}
exports.VirtualAction = a;
