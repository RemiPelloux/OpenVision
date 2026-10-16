import { ads, t0i } from "./Store_2.js";
import { LE } from "./empty.js";
import { Mx, jc, su } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { Cy } from "./useStableCallback.js";
import { kU } from "./useStore.js";
import * as Egt from "./react-runtime/react/esm-index-production.js";
var xgt;
export { xgt };
var __wakaru_MBt_initialized = false;
export function MBt() {
if (__wakaru_MBt_initialized) return;
__wakaru_MBt_initialized = true;
x(), ads(), kU(), Cy(), af(), LE(), xgt = class extends t0i {
    constructor(e, t = {}, n){
        super(e), this.context = t, this.selectors = n;
    }
    useSyncedValue(e, t) {
        Egt.useDebugValue(e);
        const n = this;
        gl(()=>{
            n.state[e] !== t && n.set(e, t);
        }, [
            n,
            e,
            t
        ]);
    }
    useSyncedValueWithCleanup(e, t) {
        const n = this;
        gl(()=>(n.state[e] !== t && n.set(e, t), ()=>{
                n.set(e, void 0);
            }), [
            n,
            e,
            t
        ]);
    }
    useSyncedValues(e) {
        const t = this;
        if (process.env.NODE_ENV !== "production") {
            Egt.useDebugValue(e, (s)=>Object.keys(s));
            const i = Egt.useRef(Object.keys(e)).current, r = Object.keys(e);
            (i.length !== r.length || i.some((s, o)=>s !== r[o])) && console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
        }
        const n = Object.values(e);
        gl(()=>{
            t.update(e);
        }, [
            t,
            ...n
        ]);
    }
    useControlledProp(e, t) {
        Egt.useDebugValue(e);
        const n = this, i = t !== void 0;
        if (gl(()=>{
            i && !Object.is(n.state[e], t) && n.setState({
                ...n.state,
                [e]: t
            });
        }, [
            n,
            e,
            t,
            i
        ]), process.env.NODE_ENV !== "production") {
            const r = this.controlledValues ?? (this.controlledValues = new Map);
            r.has(e) || r.set(e, i);
            const s = r.get(e);
            s !== void 0 && s !== i && console.error(`A component is changing the ${i ? "" : "un"}controlled state of ${e.toString()} to be ${i ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
        }
    }
    select(e, t, n, i) {
        const r = this.selectors[e];
        return r(this.state, t, n, i);
    }
    useState(e, t, n, i) {
        return Egt.useDebugValue(e), jc(this, this.selectors[e], t, n, i);
    }
    useContextCallback(e, t) {
        Egt.useDebugValue(e);
        const n = su(t ?? Mx);
        this.context[e] = n;
    }
    useStateSetter(e) {
        const t = Egt.useRef(void 0);
        return t.current === void 0 && (t.current = (n)=>{
            this.set(e, n);
        }), t.current;
    }
    observe(e, t) {
        let n;
        typeof e == "function" ? n = e : n = this.selectors[e];
        let i = n(this.state);
        return t(i, i, this), this.subscribe((r)=>{
            const s = n(r);
            if (!Object.is(i, s)) {
                const o = i;
                i = s, t(s, o, this);
            }
        });
    }
};

}
