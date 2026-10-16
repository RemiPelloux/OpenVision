import { F2f, TR } from "./BA.js";
import { $2f, j2f } from "./Store.mjs";
import { Uxt } from "./Ycg.js";
import { uDe } from "./empty.mjs";
import { E } from "./tslib.es6.js";
import { DG, pC } from "./useIsoLayoutEffect.mjs";
import { sce } from "./useStableCallback.mjs";
import { pOl } from "./useStore.mjs";
import * as GXt from "./react-runtime/react/esm-index-production.js";
var mOl;
export { mOl };
var __wakaru_Qpw_initialized = false;
export function Qpw() {
if (__wakaru_Qpw_initialized) return;
__wakaru_Qpw_initialized = true;
"use client";
E(), $2f(), pOl(), sce(), DG(), uDe(), mOl = class extends j2f {
    constructor(t, e = {}, n){
        super(t), this.context = e, this.selectors = n;
    }
    useSyncedValue(t, e) {
        GXt.useDebugValue(t);
        const n = this;
        pC(()=>{
            n.state[t] !== e && n.set(t, e);
        }, [
            n,
            t,
            e
        ]);
    }
    useSyncedValueWithCleanup(t, e) {
        const n = this;
        pC(()=>(n.state[t] !== e && n.set(t, e), ()=>{
                n.set(t, void 0);
            }), [
            n,
            t,
            e
        ]);
    }
    useSyncedValues(t) {
        const e = this;
        if (process.env.NODE_ENV !== "production") {
            GXt.useDebugValue(t, (s)=>Object.keys(s));
            const i = GXt.useRef(Object.keys(t)).current, r = Object.keys(t);
            (i.length !== r.length || i.some((s, o)=>s !== r[o])) && console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
        }
        const n = Object.values(t);
        pC(()=>{
            e.update(t);
        }, [
            e,
            ...n
        ]);
    }
    useControlledProp(t, e) {
        GXt.useDebugValue(t);
        const n = this, i = e !== void 0;
        if (pC(()=>{
            i && !Object.is(n.state[t], e) && n.setState({
                ...n.state,
                [t]: e
            });
        }, [
            n,
            t,
            e,
            i
        ]), process.env.NODE_ENV !== "production") {
            const r = this.controlledValues ??= new Map;
            r.has(t) || r.set(t, i);
            const s = r.get(t);
            s !== void 0 && s !== i && console.error(`A component is changing the ${i ? "" : "un"}controlled state of ${t.toString()} to be ${i ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
        }
    }
    select(t, e, n, i) {
        const r = this.selectors[t];
        return r(this.state, e, n, i);
    }
    useState(t, e, n, i) {
        return GXt.useDebugValue(t), F2f(this, this.selectors[t], e, n, i);
    }
    useContextCallback(t, e) {
        GXt.useDebugValue(t);
        const n = TR(e ?? Uxt);
        this.context[t] = n;
    }
    useStateSetter(t) {
        const e = GXt.useRef(void 0);
        return e.current === void 0 && (e.current = (n)=>{
            this.set(t, n);
        }), e.current;
    }
    observe(t, e) {
        let n;
        typeof t == "function" ? n = t : n = this.selectors[t];
        let i = n(this.state);
        return e(i, i, this), this.subscribe((r)=>{
            const s = n(r);
            if (!Object.is(i, s)) {
                const o = i;
                i = s, e(s, o, this);
            }
        });
    }
};

}
