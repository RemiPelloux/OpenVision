Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsapAction = void 0;
const s = require("./module-9651.js"), o = require("./module-2997.js");
class r extends s.AsyncAction {
    scheduler;
    work;
    constructor(e, a){
        super(e, a), this.scheduler = e, this.work = a;
    }
    requestAsyncId(e, a, n = 0) {
        return null !== n && n > 0 ? super.requestAsyncId(e, a, n) : (e.actions.push(this), e._scheduled || (e._scheduled = o.immediateProvider.setImmediate(e.flush.bind(e, void 0))));
    }
    recycleAsyncId(e, a, n = 0) {
        if (null != n ? n > 0 : this.delay > 0) return super.recycleAsyncId(e, a, n);
        const { actions: s } = e;
        null != a && s[s.length - 1]?.id !== a && (o.immediateProvider.clearImmediate(a), e._scheduled === a && (e._scheduled = void 0));
    }
}
exports.AsapAction = r;
