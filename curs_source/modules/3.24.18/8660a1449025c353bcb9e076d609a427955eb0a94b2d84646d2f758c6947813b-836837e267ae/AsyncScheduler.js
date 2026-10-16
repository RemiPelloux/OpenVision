import { COa, LM1 } from "./Scheduler.js";
import { E } from "./tslib.es6.js";
var X5p;
export { X5p };
var __wakaru_OM1_initialized = false;
export function OM1() {
if (__wakaru_OM1_initialized) return;
__wakaru_OM1_initialized = true;
E(), LM1(), X5p = class extends COa {
    actions = [];
    _active = !1;
    _scheduled;
    constructor(t, e = COa.now){
        super(t, e);
    }
    flush(t) {
        const { actions: e } = this;
        if (this._active) {
            e.push(t);
            return;
        }
        let n;
        this._active = !0;
        do if (n = t.execute(t.state, t.delay)) break;
        while (t = e.shift())
        if (this._active = !1, n) {
            for(; t = e.shift();)t.unsubscribe();
            throw n;
        }
    }
};

}
