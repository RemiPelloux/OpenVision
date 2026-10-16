import { Xil } from "./createEventEmitter.js";
import { Yil } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Zil, Qil, Vds, L0i;
export { L0i, Qil, Vds, Zil };
var __wakaru_jds_initialized = false;
export function jds() {
if (__wakaru_jds_initialized) return;
__wakaru_jds_initialized = true;
x(), Xil(), Zil = Object.defineProperty, Qil = (e, t, n)=>t in e ? Zil(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, Vds = (e, t, n)=>Qil(e, typeof t != "symbol" ? t + "" : t, n), L0i = class {
    constructor(){
        Vds(this, "nodesRef", {
            current: []
        }), Vds(this, "events", Yil());
    }
    addNode(e) {
        this.nodesRef.current.push(e);
    }
    removeNode(e) {
        const t = this.nodesRef.current.findIndex((n)=>n === e);
        t !== -1 && this.nodesRef.current.splice(t, 1);
    }
};

}
