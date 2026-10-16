import { Lm0 } from "./array.mjs";
import { Dm0, Nm0 } from "./ofv.js";
import { E } from "./tslib.es6.js";
var gYl;
export { gYl };
var __wakaru_qm0_initialized = false;
export function qm0() {
if (__wakaru_qm0_initialized) return;
__wakaru_qm0_initialized = true;
E(), Lm0(), gYl = class {
    constructor(){
        this.subscriptions = [];
    }
    add(t) {
        return Dm0(this.subscriptions, t), ()=>Nm0(this.subscriptions, t);
    }
    notify(t, e, n) {
        const i = this.subscriptions.length;
        if (i) if (i === 1) this.subscriptions[0](t, e, n);
        else for(let r = 0; r < i; r++){
            const s = this.subscriptions[r];
            s && s(t, e, n);
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
};

}
