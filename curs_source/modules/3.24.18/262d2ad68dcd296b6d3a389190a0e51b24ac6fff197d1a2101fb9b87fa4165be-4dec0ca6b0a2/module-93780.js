"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.QueueAction = void 0;
const n = require("./module-69651.js");
class o extends n.AsyncAction {
    scheduler;
    work;
    constructor(e, t){
        super(e, t), this.scheduler = e, this.work = t;
    }
    schedule(e, t = 0) {
        return t > 0 ? super.schedule(e, t) : (this.delay = t, this.state = e, this.scheduler.flush(this), this);
    }
    execute(e, t) {
        return t > 0 || this.closed ? super.execute(e, t) : this._execute(e, t);
    }
    requestAsyncId(e, t, r = 0) {
        return null != r && r > 0 || null == r && this.delay > 0 ? super.requestAsyncId(e, t, r) : (e.flush(this), 0);
    }
}
exports.QueueAction = o;
