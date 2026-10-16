import { He, Se, we } from "./HVr.js";
import { bu } from "./objects.js";
import { yh } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { e4v, t4v } from "./xmo.js";
var vch, hy, t8, gh, UGt, xKi;
export { UGt, gh, hy, t8, vch, xKi };
var __wakaru_N1_initialized = false;
export function N1() {
if (__wakaru_N1_initialized) return;
__wakaru_N1_initialized = true;
"use strict";
x(), Se(), bu(), vch = "__MUTABLE_REACTIVE_TRACE_STRUCTURALLY_EQUAL_SETS__", hy = {
    pending () {},
    resolved (e) {
        return {
            type: "resolved",
            value: e
        };
    },
    isResolved (e) {
        return e !== void 0;
    }
}, t8 = class {
    constructor(e){
        this.value = e;
    }
    onChange(e) {
        return we.None;
    }
}, gh = class {
    constructor(e){
        this._listeners = new Set, this._value = e;
    }
    get value() {
        return this._value;
    }
    get hasListeners() {
        return this._listeners.size > 0;
    }
    set(e) {
        const t = this._value;
        if (!Object.is(t, e)) {
            if (e4v() && t !== null && e !== null && typeof t == "object" && typeof e == "object") try {
                yh(t, e) && console.trace("[MutableReactive] set called with a new reference that is structurally equal to the previous value.", {
                    previousValue: t,
                    value: e
                });
            } catch  {}
            this._value = e;
            for (const n of this._listeners)n(e);
        }
    }
    onChange(e) {
        return this._listeners.add(e), {
            dispose: ()=>this._listeners.delete(e)
        };
    }
}, UGt = class extends we {
    constructor(e, t){
        super(), this.sources = e, this.derive = t, this._listeners = new Set, this._subscriptions = this._register(new He), this._value = this._compute();
        for (const n of e)this._subscriptions.add(n.onChange(()=>{
            this._value = this._compute();
            for (const i of this._listeners)i(this._value);
        }));
    }
    get value() {
        return this._value;
    }
    onChange(e) {
        return this._listeners.add(e), {
            dispose: ()=>this._listeners.delete(e)
        };
    }
    dispose() {
        this._listeners.clear(), super.dispose();
    }
    _compute() {
        const e = this.sources.map((t)=>t.value);
        return this.derive(...e);
    }
}, xKi = class {
    constructor(e, t){
        this._initial = e, this._warmed = !1, this._publishedSinceConstruction = !1, this._disposed = !1, this._options = {
            load: t.load,
            loadAsync: t.loadAsync,
            save: t.save,
            serialize: t.serialize ?? ((r)=>r),
            deserialize: t.deserialize ?? ((r)=>r)
        };
        const n = t.debounceSave ?? ((r)=>t4v(r));
        this._debouncedSave = n(this._options.save);
        let i = this._initial;
        try {
            const r = this._options.load?.();
            r !== void 0 && (i = this._options.deserialize(r));
        } catch  {}
        this._inner = new gh(i);
    }
    get value() {
        return this._inner.value;
    }
    set(e) {
        this._publishedSinceConstruction = !0, this._inner.set(e), this._debouncedSave.schedule(()=>this._options.serialize(e));
    }
    setTransient(e) {
        this._publishedSinceConstruction = !0, this._inner.set(e);
    }
    warm() {
        if (this._warmed) return;
        this._warmed = !0;
        const e = this._options.loadAsync;
        e !== void 0 && (async ()=>{
            let t;
            try {
                t = await e();
            } catch  {
                return;
            }
            if (!(t === void 0 || this._disposed || this._publishedSinceConstruction)) try {
                this._inner.set(this._options.deserialize(t));
            } catch  {}
        })();
    }
    flush() {
        try {
            this._debouncedSave.flush();
        } catch  {}
    }
    onChange(e) {
        return this._inner.onChange(e);
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
