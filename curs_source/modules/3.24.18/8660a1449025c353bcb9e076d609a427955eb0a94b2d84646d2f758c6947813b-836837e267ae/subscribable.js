import { E } from "./tslib.es6.js";
var wYt;
export { wYt };
var __wakaru_NMn_initialized = false;
export function NMn() {
if (__wakaru_NMn_initialized) return;
__wakaru_NMn_initialized = true;
E(), wYt = class {
    constructor(){
        this.listeners = new Set, this.subscribe = this.subscribe.bind(this);
    }
    subscribe(t) {
        return this.listeners.add(t), this.onSubscribe(), ()=>{
            this.listeners.delete(t), this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
};

}
