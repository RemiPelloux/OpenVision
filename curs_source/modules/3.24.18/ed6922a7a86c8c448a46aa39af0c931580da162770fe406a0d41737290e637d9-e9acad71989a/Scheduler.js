import { Zzs, apv } from "./dateTimestampProvider.js";
import { x } from "./tslib.es6.js";
var Qzs;
export { Qzs };
var __wakaru_ppv_initialized = false;
export function ppv() {
if (__wakaru_ppv_initialized) return;
__wakaru_ppv_initialized = true;
x(), apv(), Qzs = class dCm {
    schedulerActionCtor;
    static now = Zzs.now;
    constructor(t, n = dCm.now){
        this.schedulerActionCtor = t, this.now = n;
    }
    now;
    schedule(t, n = 0, i) {
        return new this.schedulerActionCtor(this, t).schedule(i, n);
    }
};

}
