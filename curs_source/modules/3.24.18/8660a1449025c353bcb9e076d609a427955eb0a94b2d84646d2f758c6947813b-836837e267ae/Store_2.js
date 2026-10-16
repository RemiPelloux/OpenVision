import { Ic } from "./LYd.js";
import { E } from "./tslib.es6.js";
import { TW } from "./useStore.js";
var Rsh, Psh, rQo, nRr;
export { Psh, Rsh, nRr, rQo };
var __wakaru_sQo_initialized = false;
export function sQo() {
if (__wakaru_sQo_initialized) return;
__wakaru_sQo_initialized = true;
E(), TW(), Rsh = Object.defineProperty, Psh = (t, e, n)=>e in t ? Rsh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, rQo = (t, e, n)=>Psh(t, typeof e != "symbol" ? e + "" : e, n), nRr = class {
    constructor(t){
        rQo(this, "subscribe", (e)=>(this.listeners.add(e), ()=>{
                this.listeners.delete(e);
            })), rQo(this, "getSnapshot", ()=>this.state), this.state = t, this.listeners = new Set, this.updateTick = 0;
    }
    setState(t) {
        if (this.state === t) return;
        this.state = t, this.updateTick += 1;
        const e = this.updateTick;
        for (const n of this.listeners){
            if (e !== this.updateTick) return;
            n(t);
        }
    }
    update(t) {
        for(const e in t)if (!Object.is(this.state[e], t[e])) {
            this.setState({
                ...this.state,
                ...t
            });
            return;
        }
    }
    set(t, e) {
        Object.is(this.state[t], e) || this.setState({
            ...this.state,
            [t]: e
        });
    }
    notifyAll() {
        const t = {
            ...this.state
        };
        this.setState(t);
    }
    use(t, e, n, i) {
        return Ic(this, t, e, n, i);
    }
};

}
