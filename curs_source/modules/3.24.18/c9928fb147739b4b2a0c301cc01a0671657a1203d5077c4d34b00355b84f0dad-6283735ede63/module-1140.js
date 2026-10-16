Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AnimationFrameAction = void 0;
const s = require("./module-9651.js"), o = require("./module-8019.js");
class r extends s.AsyncAction {
    scheduler;
    work;
    constructor(e, a){
        super(e, a), this.scheduler = e, this.work = a;
    }
    requestAsyncId(e, a, n = 0) {
        return null !== n && n > 0 ? super.requestAsyncId(e, a, n) : (e.actions.push(this), e._scheduled || (e._scheduled = o.animationFrameProvider.requestAnimationFrame(()=>e.flush(void 0))));
    }
    recycleAsyncId(e, a, n = 0) {
        if (null != n ? n > 0 : this.delay > 0) return super.recycleAsyncId(e, a, n);
        const { actions: s } = e;
        null != a && s[s.length - 1]?.id !== a && (o.animationFrameProvider.cancelAnimationFrame(a), e._scheduled = void 0);
    }
}
exports.AnimationFrameAction = r;
