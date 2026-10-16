import { HU, wde } from "./observableValue.js";
import { x } from "./tslib.es6.js";
var S1o;
export { S1o };
var __wakaru_yZv_initialized = false;
export function yZv() {
if (__wakaru_yZv_initialized) return;
__wakaru_yZv_initialized = true;
"use strict";
x(), wde(), S1o = class {
    constructor(){
        this._count = new HU, this._count.set(0);
    }
    get value() {
        return this._count;
    }
    getCurrentCount() {
        const e = this._count.getState();
        return e.state === "fulfilled" ? e.value : 0;
    }
    createLease() {
        this._count.set(this.getCurrentCount() + 1);
        let e = !1;
        return {
            dispose: ()=>{
                e || (e = !0, this._count.set(Math.max(0, this.getCurrentCount() - 1)));
            }
        };
    }
    createDelayedLease(e) {
        let t, n = !1;
        const i = setTimeout(()=>{
            n || (t = this.createLease());
        }, e);
        return {
            dispose: ()=>{
                n || (n = !0, clearTimeout(i), t?.dispose());
            }
        };
    }
    clear() {
        this._count.clear();
    }
};

}
