import { F2f } from "./BA.js";
import { E } from "./tslib.es6.js";
import { pOl } from "./useStore.mjs";
var j2f;
export { j2f };
var __wakaru_$2f_initialized = false;
export function $2f() {
if (__wakaru_$2f_initialized) return;
__wakaru_$2f_initialized = true;
E(), pOl(), j2f = class {
    constructor(t){
        this.state = t, this.listeners = new Set, this.updateTick = 0;
    }
    subscribe = (t)=>(this.listeners.add(t), ()=>{
            this.listeners.delete(t);
        });
    getSnapshot = ()=>this.state;
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
        return F2f(this, t, e, n, i);
    }
};

}
