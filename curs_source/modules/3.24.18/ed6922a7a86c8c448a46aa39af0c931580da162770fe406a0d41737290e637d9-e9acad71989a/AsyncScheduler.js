import { Qzs, ppv } from "./Scheduler.js";
import { x } from "./tslib.es6.js";
var RPu;
export { RPu };
var __wakaru_mpv_initialized = false;
export function mpv() {
if (__wakaru_mpv_initialized) return;
__wakaru_mpv_initialized = true;
x(), ppv(), RPu = class extends Qzs {
    actions = [];
    _active = !1;
    _scheduled;
    constructor(e, t = Qzs.now){
        super(e, t);
    }
    flush(e) {
        const { actions: t } = this;
        if (this._active) {
            t.push(e);
            return;
        }
        let n;
        this._active = !0;
        do if (n = e.execute(e.state, e.delay)) break;
        while (e = t.shift())
        if (this._active = !1, n) {
            for(; e = t.shift();)e.unsubscribe();
            throw n;
        }
    }
};

}
