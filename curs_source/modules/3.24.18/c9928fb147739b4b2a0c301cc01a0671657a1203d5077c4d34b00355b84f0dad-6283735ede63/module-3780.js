Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.QueueAction = void 0;
const s = require("./module-9651.js");
class o extends s.AsyncAction {
    scheduler;
    work;
    constructor(e, a){
        super(e, a), this.scheduler = e, this.work = a;
    }
    schedule(e, a = 0) {
        return a > 0 ? super.schedule(e, a) : (this.delay = a, this.state = e, this.scheduler.flush(this), this);
    }
    execute(e, a) {
        return a > 0 || this.closed ? super.execute(e, a) : this._execute(e, a);
    }
    requestAsyncId(e, a, n = 0) {
        return null != n && n > 0 || null == n && this.delay > 0 ? super.requestAsyncId(e, a, n) : (e.flush(this), 0);
    }
}
exports.QueueAction = o;
