Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
const s = require("./module-9651.js"), o = require("./module-1078.js"), r = require("./module-5488.js");
class t extends r.AsyncScheduler {
    maxFrames;
    static frameTimeFactor = 10;
    frame = 0;
    index = -1;
    constructor(e = i, a = 1 / 0){
        super(e, ()=>this.frame), this.maxFrames = a;
    }
    flush() {
        const { actions: e, maxFrames: a } = this;
        let n, s;
        for(; (s = e[0]) && s.delay <= a && (e.shift(), this.frame = s.delay, !(n = s.execute(s.state, s.delay))););
        if (n) {
            for(; s = e.shift();)s.unsubscribe();
            throw n;
        }
    }
}
exports.VirtualTimeScheduler = t;
class i extends s.AsyncAction {
    scheduler;
    work;
    index;
    active = !0;
    constructor(e, a, n = e.index += 1){
        super(e, a), this.scheduler = e, this.work = a, this.index = n, this.index = e.index = n;
    }
    schedule(e, a = 0) {
        if (Number.isFinite(a)) {
            if (!this.id) return super.schedule(e, a);
            this.active = !1;
            const n = new i(this.scheduler, this.work);
            return this.add(n), n.schedule(e, a);
        }
        return o.Subscription.EMPTY;
    }
    requestAsyncId(e, a, n = 0) {
        this.delay = e.frame + n;
        const { actions: s } = e;
        return s.push(this), s.sort(i.sortActions), 1;
    }
    recycleAsyncId(e, a, n = 0) {}
    _execute(e, a) {
        if (!0 === this.active) return super._execute(e, a);
    }
    static sortActions(e, a) {
        return e.delay === a.delay ? e.index === a.index ? 0 : e.index > a.index ? 1 : -1 : e.delay > a.delay ? 1 : -1;
    }
}
exports.VirtualAction = i;
