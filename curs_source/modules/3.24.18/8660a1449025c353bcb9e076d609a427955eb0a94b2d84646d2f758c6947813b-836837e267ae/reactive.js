import { Nt, Qe, st } from "./Iwo.js";
import { frk, grk } from "./gYa.js";
import { cp } from "./objects.js";
import { E } from "./tslib.es6.js";
import { Rp } from "./ze.js";
var WVm, Qh, cV, ca, T4e, qJa, Hts;
export { Hts, Qh, T4e, WVm, cV, ca, qJa };
var __wakaru_Kf_initialized = false;
export function Kf() {
if (__wakaru_Kf_initialized) return;
__wakaru_Kf_initialized = true;
"use strict";
E(), Qe(), cp(), WVm = "__MUTABLE_REACTIVE_TRACE_STRUCTURALLY_EQUAL_SETS__", Qh = {
    pending () {},
    resolved (t) {
        return {
            type: "resolved",
            value: t
        };
    },
    isResolved (t) {
        return t !== void 0;
    }
}, cV = class {
    constructor(t){
        this.value = t;
    }
    onChange(t) {
        return st.None;
    }
}, ca = class {
    constructor(t){
        this._listeners = new Set, this._value = t;
    }
    get value() {
        return this._value;
    }
    get hasListeners() {
        return this._listeners.size > 0;
    }
    set(t) {
        const e = this._value;
        if (!Object.is(e, t)) {
            if (grk() && e !== null && t !== null && typeof e == "object" && typeof t == "object") try {
                Rp(e, t) && console.trace("[MutableReactive] set called with a new reference that is structurally equal to the previous value.", {
                    previousValue: e,
                    value: t
                });
            } catch  {}
            this._value = t;
            for (const n of this._listeners)n(t);
        }
    }
    onChange(t) {
        return this._listeners.add(t), {
            dispose: ()=>this._listeners.delete(t)
        };
    }
}, T4e = class extends st {
    constructor(t, e){
        super(), this.sources = t, this.derive = e, this._listeners = new Set, this._subscriptions = this._register(new Nt), this._value = this._compute();
        for (const n of t)this._subscriptions.add(n.onChange(()=>{
            this._value = this._compute();
            for (const i of this._listeners)i(this._value);
        }));
    }
    get value() {
        return this._value;
    }
    onChange(t) {
        return this._listeners.add(t), {
            dispose: ()=>this._listeners.delete(t)
        };
    }
    dispose() {
        this._listeners.clear(), super.dispose();
    }
    _compute() {
        const t = this.sources.map((e)=>e.value);
        return this.derive(...t);
    }
}, qJa = class extends st {
    constructor(t){
        super(), this.sources = t, this._listeners = new Set, this._subscriptions = this._register(new Nt), this._value = this._compute();
        for (const e of t)this._subscriptions.add(e.onChange(()=>{
            this._value = this._compute();
            for (const n of this._listeners)n(this._value);
        }));
    }
    get value() {
        return this._value;
    }
    onChange(t) {
        return this._listeners.add(t), {
            dispose: ()=>this._listeners.delete(t)
        };
    }
    dispose() {
        this._listeners.clear(), super.dispose();
    }
    _compute() {
        return this.sources.flatMap((t)=>t.value);
    }
}, Hts = class {
    constructor(t, e){
        this._initial = t, this._warmed = !1, this._publishedSinceConstruction = !1, this._disposed = !1, this._options = {
            load: e.load,
            loadAsync: e.loadAsync,
            save: e.save,
            serialize: e.serialize ?? ((r)=>r),
            deserialize: e.deserialize ?? ((r)=>r)
        };
        const n = e.debounceSave ?? ((r)=>frk(r));
        this._debouncedSave = n(this._options.save);
        let i = this._initial;
        try {
            const r = this._options.load?.();
            r !== void 0 && (i = this._options.deserialize(r));
        } catch  {}
        this._inner = new ca(i);
    }
    get value() {
        return this._inner.value;
    }
    set(t) {
        this._publishedSinceConstruction = !0, this._inner.set(t), this._debouncedSave.schedule(()=>this._options.serialize(t));
    }
    setTransient(t) {
        this._publishedSinceConstruction = !0, this._inner.set(t);
    }
    warm() {
        if (this._warmed) return;
        this._warmed = !0;
        const t = this._options.loadAsync;
        t !== void 0 && (async ()=>{
            let e;
            try {
                e = await t();
            } catch  {
                return;
            }
            if (!(e === void 0 || this._disposed || this._publishedSinceConstruction)) try {
                this._inner.set(this._options.deserialize(e));
            } catch  {}
        })();
    }
    flush() {
        try {
            this._debouncedSave.flush();
        } catch  {}
    }
    onChange(t) {
        return this._inner.onChange(t);
    }
    dispose() {
        this._disposed = !0;
        try {
            this._debouncedSave.flush();
        } catch  {}
        this._debouncedSave.dispose(), this._inner.set(this._initial);
    }
};

}
