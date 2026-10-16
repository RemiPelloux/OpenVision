import { CRf } from "./BA.js";
import { TRf } from "./createEventEmitter.mjs";
import { E } from "./tslib.es6.js";
var ERf;
export { ERf };
var __wakaru_Whw_initialized = false;
export function Whw() {
if (__wakaru_Whw_initialized) return;
__wakaru_Whw_initialized = true;
E(), TRf(), ERf = class {
    nodesRef = {
        current: []
    };
    events = CRf();
    addNode(t) {
        this.nodesRef.current.push(t);
    }
    removeNode(t) {
        const e = this.nodesRef.current.findIndex((n)=>n === t);
        e !== -1 && this.nodesRef.current.splice(e, 1);
    }
};

}
