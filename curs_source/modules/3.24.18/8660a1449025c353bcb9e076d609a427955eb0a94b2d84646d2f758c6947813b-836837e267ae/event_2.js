import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var Gg;
export { Gg };
var __wakaru_voe_initialized = false;
export function voe() {
if (__wakaru_voe_initialized) return;
__wakaru_voe_initialized = true;
"use strict";
E(), Gt(), Gg = class {
    get event() {
        return this.emitter.event;
    }
    constructor(t, e, n){
        const i = (r)=>this.emitter.fire(r);
        this.emitter = new tt({
            onWillAddFirstListener: ()=>t.addEventListener(e, i, n),
            onDidRemoveLastListener: ()=>t.removeEventListener(e, i, n)
        });
    }
    dispose() {
        this.emitter.dispose();
    }
};

}
