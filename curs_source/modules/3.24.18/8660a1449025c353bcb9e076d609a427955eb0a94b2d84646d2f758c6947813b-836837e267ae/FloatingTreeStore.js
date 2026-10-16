import { Noh } from "./LYd.js";
import { Loh } from "./createEventEmitter.js";
import { E } from "./tslib.es6.js";
var Ooh, Foh, GQo, LRr;
export { Foh, GQo, LRr, Ooh };
var __wakaru_qQo_initialized = false;
export function qQo() {
if (__wakaru_qQo_initialized) return;
__wakaru_qQo_initialized = true;
E(), Loh(), Ooh = Object.defineProperty, Foh = (t, e, n)=>e in t ? Ooh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, GQo = (t, e, n)=>Foh(t, typeof e != "symbol" ? e + "" : e, n), LRr = class {
    constructor(){
        GQo(this, "nodesRef", {
            current: []
        }), GQo(this, "events", Noh());
    }
    addNode(t) {
        this.nodesRef.current.push(t);
    }
    removeNode(t) {
        const e = this.nodesRef.current.findIndex((n)=>n === t);
        e !== -1 && this.nodesRef.current.splice(e, 1);
    }
};

}
