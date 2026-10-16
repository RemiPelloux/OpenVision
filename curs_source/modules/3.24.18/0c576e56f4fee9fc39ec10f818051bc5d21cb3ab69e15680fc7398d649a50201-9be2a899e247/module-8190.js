"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsapAction = void 0;
const n = require("./module-9651.js"), o = require("./module-2997.js");
class s extends n.AsyncAction {
    scheduler;
    work;
    constructor(e, t){
        super(e, t), this.scheduler = e, this.work = t;
    }
    requestAsyncId(e, t, r = 0) {
        return null !== r && r > 0 ? super.requestAsyncId(e, t, r) : (e.actions.push(this), e._scheduled || (e._scheduled = o.immediateProvider.setImmediate(e.flush.bind(e, void 0))));
    }
    recycleAsyncId(e, t, r = 0) {
        if (null != r ? r > 0 : this.delay > 0) return super.recycleAsyncId(e, t, r);
        const { actions: n } = e;
        null != t && n[n.length - 1]?.id !== t && (o.immediateProvider.clearImmediate(t), e._scheduled === t && (e._scheduled = void 0));
    }
}
exports.AsapAction = s;
