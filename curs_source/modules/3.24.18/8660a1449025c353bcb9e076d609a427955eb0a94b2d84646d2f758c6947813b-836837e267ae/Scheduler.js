import { AM1, wOa } from "./dateTimestampProvider.js";
import { E } from "./tslib.es6.js";
var COa;
export { COa };
var __wakaru_LM1_initialized = false;
export function LM1() {
if (__wakaru_LM1_initialized) return;
__wakaru_LM1_initialized = true;
E(), AM1(), COa = class Y2b {
    schedulerActionCtor;
    static now = wOa.now;
    constructor(e, n = Y2b.now){
        this.schedulerActionCtor = e, this.now = n;
    }
    now;
    schedule(e, n = 0, i) {
        return new this.schedulerActionCtor(this, e).schedule(i, n);
    }
};

}
