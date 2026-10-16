import { jc } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { kU } from "./useStore.js";
var znl, Knl, ods, t0i;
export { Knl, ods, t0i, znl };
var __wakaru_ads_initialized = false;
export function ads() {
if (__wakaru_ads_initialized) return;
__wakaru_ads_initialized = true;
x(), kU(), znl = Object.defineProperty, Knl = (e, t, n)=>t in e ? znl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, ods = (e, t, n)=>Knl(e, typeof t != "symbol" ? t + "" : t, n), t0i = class {
    constructor(e){
        ods(this, "subscribe", (t)=>(this.listeners.add(t), ()=>{
                this.listeners.delete(t);
            })), ods(this, "getSnapshot", ()=>this.state), this.state = e, this.listeners = new Set, this.updateTick = 0;
    }
    setState(e) {
        if (this.state === e) return;
        this.state = e, this.updateTick += 1;
        const t = this.updateTick;
        for (const n of this.listeners){
            if (t !== this.updateTick) return;
            n(e);
        }
    }
    update(e) {
        for(const t in e)if (!Object.is(this.state[t], e[t])) {
            this.setState({
                ...this.state,
                ...e
            });
            return;
        }
    }
    set(e, t) {
        Object.is(this.state[e], t) || this.setState({
            ...this.state,
            [e]: t
        });
    }
    notifyAll() {
        const e = {
            ...this.state
        };
        this.setState(e);
    }
    use(e, t, n, i) {
        return jc(this, e, t, n, i);
    }
};

}
