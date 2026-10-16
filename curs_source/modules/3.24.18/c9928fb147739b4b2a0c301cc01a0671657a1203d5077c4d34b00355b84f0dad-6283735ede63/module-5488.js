Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsyncScheduler = void 0;
const s = require("./module-4458.js");
class o extends s.Scheduler {
    actions = [];
    _active = !1;
    _scheduled;
    constructor(e, a = s.Scheduler.now){
        super(e, a);
    }
    flush(e) {
        const { actions: a } = this;
        if (this._active) return void a.push(e);
        let n;
        this._active = !0;
        do {
            if (n = e.execute(e.state, e.delay)) break;
        }while (e = a.shift())
        if (this._active = !1, n) {
            for(; e = a.shift();)e.unsubscribe();
            throw n;
        }
    }
}
exports.AsyncScheduler = o;
