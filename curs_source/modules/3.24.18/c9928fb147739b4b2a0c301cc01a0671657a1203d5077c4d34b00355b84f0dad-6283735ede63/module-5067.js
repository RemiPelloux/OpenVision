Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AsapScheduler = void 0;
const s = require("./module-5488.js");
class o extends s.AsyncScheduler {
    flush(e) {
        this._active = !0;
        const a = this._scheduled;
        this._scheduled = void 0;
        const { actions: n } = this;
        let s;
        e = e || n.shift();
        do {
            if (s = e.execute(e.state, e.delay)) break;
        }while ((e = n[0]) && e.id === a && n.shift())
        if (this._active = !1, s) {
            for(; (e = n[0]) && e.id === a && n.shift();)e.unsubscribe();
            throw s;
        }
    }
}
exports.AsapScheduler = o;
