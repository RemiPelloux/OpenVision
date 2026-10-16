import { bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
var mp;
export { mp };
var __wakaru_B7_initialized = false;
export function B7() {
if (__wakaru_B7_initialized) return;
__wakaru_B7_initialized = true;
"use strict";
x(), bt(), mp = class {
    get event() {
        return this.emitter.event;
    }
    constructor(e, t, n){
        const i = (r)=>this.emitter.fire(r);
        this.emitter = new ve({
            onWillAddFirstListener: ()=>e.addEventListener(t, i, n),
            onDidRemoveLastListener: ()=>e.removeEventListener(t, i, n)
        });
    }
    dispose() {
        this.emitter.dispose();
    }
};

}
