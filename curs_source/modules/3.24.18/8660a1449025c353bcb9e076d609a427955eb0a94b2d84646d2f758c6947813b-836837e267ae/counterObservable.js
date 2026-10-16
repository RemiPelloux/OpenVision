import { Yz, cCe } from "./observableValue.js";
import { E } from "./tslib.es6.js";
var los;
export { los };
var __wakaru_Sbk_initialized = false;
export function Sbk() {
if (__wakaru_Sbk_initialized) return;
__wakaru_Sbk_initialized = true;
"use strict";
E(), cCe(), los = class {
    constructor(){
        this._count = new Yz, this._count.set(0);
    }
    get value() {
        return this._count;
    }
    getCurrentCount() {
        const t = this._count.getState();
        return t.state === "fulfilled" ? t.value : 0;
    }
    createLease() {
        this._count.set(this.getCurrentCount() + 1);
        let t = !1;
        return {
            dispose: ()=>{
                t || (t = !0, this._count.set(Math.max(0, this.getCurrentCount() - 1)));
            }
        };
    }
    createDelayedLease(t) {
        let e, n = !1;
        const i = setTimeout(()=>{
            n || (e = this.createLease());
        }, t);
        return {
            dispose: ()=>{
                n || (n = !0, clearTimeout(i), e?.dispose());
            }
        };
    }
    clear() {
        this._count.clear();
    }
};

}
