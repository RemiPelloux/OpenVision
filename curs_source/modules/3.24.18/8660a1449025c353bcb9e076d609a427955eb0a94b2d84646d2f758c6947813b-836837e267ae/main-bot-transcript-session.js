import { Pn, Qe, st } from "./Iwo.js";
import { Bwc, Uwc } from "./grok-bot-transcript-tail.js";
import { CuT, d0c } from "./mE_.js";
import { V9s, kUi } from "./main-bot-transcript-state.js";
import { fwc } from "./tracked-promise.js";
import { E } from "./tslib.es6.js";
var f0c;
export { f0c };
var __wakaru_xA__initialized = false;
export function xA_() {
if (__wakaru_xA__initialized) return;
__wakaru_xA__initialized = true;
"use strict";
E(), Qe(), fwc(), Uwc(), kUi(), f0c = class extends st {
    constructor({ agentId: t, transport: e, log: n }){
        super(), this.state = V9s, this.agentId = t;
        const i = CuT();
        this.initialReplay = i.promise, this.tail = this._register(new Bwc({
            agentId: t,
            transport: e,
            dispatch: (r)=>this.dispatch(r),
            log: n,
            onInitialReplay: ()=>i.settle()
        })), this.tail.start();
    }
    get snapshot() {
        return this.state;
    }
    dispatch(t) {
        this.state = d0c(this.state, t), this.sink?.(t);
    }
    attach(t) {
        return this.sink = t, t({
            type: "replace",
            state: this.state
        }), Pn(()=>{
            this.sink === t && (this.sink = void 0);
        });
    }
    reconnectNow() {
        this.tail.reconnectNow();
    }
    dispose() {
        this.sink = void 0, super.dispose();
    }
};

}
