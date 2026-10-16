import { ds, kr } from "./arrays.js";
import { is } from "./collections.js";
import { us } from "./functional.js";
import { Jo, Lr } from "./iterator.js";
import { Tr, ws } from "./map.js";
import { w } from "./tslib.es6.js";
function Mo(e, t) {
    const r = Object.create(null);
    for (const s of e){
        const i = t(s);
        let n = r[i];
        n || (n = r[i] = []), n.push(s);
    }
    return r;
}
function Bo(e, t) {
    return (r, s)=>t(e(r), e(s));
}
function ft(e, t) {
    if (Le?.onLifecycleMisuse?.(e, t), !Nr) return;
    const r = `${t}\0${e.stack ?? ""}`;
    Ut.has(r) || Ut.size >= bs || (Ut.add(r), Nr(e, t));
}
function Rr(e) {
    ft(e, "disposable_post_dispose_set");
}
function Qo(e) {
    Le = e;
}
function dt(e) {
    return Le?.trackDisposable(e), e;
}
function pt(e) {
    Le?.markAsDisposed(e);
}
function mt(e, t) {
    Le?.setParent(e, t);
}
function xr(e) {
    if (Lr.is(e)) {
        let t;
        for (const r of e)if (r) try {
            r.dispose();
        } catch (s) {
            (t ??= []).push(s);
        }
        if (t !== void 0) throw t.length === 1 ? t[0] : new AggregateError(t, "Encountered errors while disposing of store");
        return Array.isArray(e) ? [] : e;
    } else if (e) return e.dispose(), e;
}
var Nr, Ut, bs, Cs, Le, Es, Mr, Re, _e, Fr, Ss;
export { Bo, Cs, Es, Fr, Le, Mo, Mr, Nr, Qo, Re, Rr, Ss, Ut, _e, bs, dt, ft, mt, pt, xr };
var __wakaru_et_initialized = false;
export function et() {
if (__wakaru_et_initialized) return;
__wakaru_et_initialized = true;
"use strict";
if (w(), kr(), is(), Tr(), us(), Jo(), Nr = void 0, Ut = new Set, bs = 50, Cs = !1, Le = null, Es = class bo {
    constructor(){
        this.livingDisposables = new Map;
    }
    getDisposableData(t) {
        let r = this.livingDisposables.get(t);
        return r || (r = {
            parent: null,
            source: null,
            isSingleton: !1,
            value: t,
            idx: bo.idx++
        }, this.livingDisposables.set(t, r)), r;
    }
    trackDisposable(t) {
        const r = this.getDisposableData(t);
        r.source || (r.source = new Error().stack);
    }
    setParent(t, r) {
        const s = this.getDisposableData(t);
        s.parent = r;
    }
    markAsDisposed(t) {
        this.livingDisposables.delete(t);
    }
    markAsSingleton(t) {
        this.getDisposableData(t).isSingleton = !0;
    }
    getRootParent(t, r) {
        const s = r.get(t);
        if (s) return s;
        const i = t.parent ? this.getRootParent(this.getDisposableData(t.parent), r) : t;
        return r.set(t, i), i;
    }
    getTrackedDisposables() {
        const t = new Map;
        return [
            ...this.livingDisposables.entries()
        ].filter(([, s])=>s.source !== null && !this.getRootParent(s, t).isSingleton).flatMap(([s])=>s);
    }
    computeLeakingDisposables(t = 10, r) {
        let s;
        if (r) s = r;
        else {
            const l = new Map, c = [
                ...this.livingDisposables.values()
            ].filter((u)=>u.source !== null && !this.getRootParent(u, l).isSingleton);
            if (c.length === 0) return;
            const h = new Set(c.map((u)=>u.value));
            if (s = c.filter((u)=>!(u.parent && h.has(u.parent))), s.length === 0) throw new Error("There are cyclic diposable chains!");
        }
        if (!s) return;
        function i(l) {
            function c(u, f) {
                for(; u.length > 0 && f.some((d)=>typeof d == "string" ? d === u[0] : u[0].match(d));)u.shift();
            }
            const h = l.source.split(`
`).map((u)=>u.trim().replace("at ", "")).filter((u)=>u !== "");
            return c(h, [
                "Error",
                /^trackDisposable \(.*\)$/,
                /^DisposableTracker.trackDisposable \(.*\)$/
            ]), h.reverse();
        }
        const n = new ws;
        for (const l of s){
            const c = i(l);
            for(let h = 0; h <= c.length; h++)n.add(c.slice(0, h).join(`
`), l);
        }
        s.sort(Bo((l)=>l.idx, ds));
        let a = "", o = 0;
        for (const l of s.slice(0, t)){
            o++;
            const c = i(l), h = [];
            for(let u = 0; u < c.length; u++){
                let f = c[u];
                f = `(shared with ${n.get(c.slice(0, u + 1).join(`
`)).size}/${s.length} leaks) at ${f}`;
                const m = n.get(c.slice(0, u).join(`
`)), k = Mo([
                    ...m
                ].map((D)=>i(D)[u]), (D)=>D);
                delete k[c[u]];
                for (const [D, P] of Object.entries(k))h.unshift(`    - stacktraces of ${P.length} other leaks continue with ${D}`);
                h.unshift(f);
            }
            a += `


==================== Leaking disposable ${o}/${s.length}: ${l.value.constructor.name} ====================
${h.join(`
`)}
============================================================

`;
        }
        return s.length > t && (a += `


... and ${s.length - t} more leaking disposables

`), {
            leaks: s,
            details: a
        };
    }
}, Es.idx = 0, Cs) {
    const e = "__is_disposable_tracked__";
    Qo(new class {
        trackDisposable(t) {
            const r = new Error("Potentially leaked disposable").stack;
            setTimeout(()=>{
                t[e] || console.log(r);
            }, 3e3);
        }
        setParent(t, r) {
            if (t && t !== _e.None) try {
                t[e] = !0;
            } catch  {}
        }
        markAsDisposed(t) {
            if (t && t !== _e.None) try {
                t[e] = !0;
            } catch  {}
        }
        markAsSingleton(t) {}
    });
}
Mr = class Q1 {
    constructor(){
        this._toDispose = new Set, this._isDisposed = !1, dt(this);
    }
    dispose() {
        this._isDisposed || (pt(this), this._isDisposed = !0, this.clear());
    }
    [Symbol.dispose]() {
        this.dispose();
    }
    get isDisposed() {
        return this._isDisposed;
    }
    has(t) {
        return this._toDispose.has(t);
    }
    get size() {
        return this._toDispose.size;
    }
    clear() {
        if (this._toDispose.size !== 0) try {
            xr(this._toDispose);
        } finally{
            this._toDispose.clear();
        }
    }
    add(t) {
        if (!t) return t;
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        if (mt(t, this), this._isDisposed) {
            const r = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
            Q1.DISABLE_DISPOSED_WARNING || console.warn(r.stack), Rr(r);
        } else this._toDispose.add(t);
        return t;
    }
    delete(t) {
        if (t) {
            if (t === this) throw new Error("Cannot dispose a disposable on itself!");
            this._toDispose.delete(t), t.dispose();
        }
    }
    deleteAndLeak(t) {
        t && this._toDispose.has(t) && (this._toDispose.delete(t), mt(t, null));
    }
    transferOut(t) {
        if (this._isDisposed) {
            const r = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
            Q1.DISABLE_DISPOSED_WARNING || console.warn(r.stack), ft(r, "disposable_use_after_dispose");
        }
        return this.deleteAndLeak(t), t;
    }
}, Mr.DISABLE_DISPOSED_WARNING = !1, Re = Mr, _e = class {
    constructor(){
        this._store = new Re, dt(this), mt(this._store, this);
    }
    dispose() {
        pt(this), this._store.dispose();
    }
    _register(e) {
        if (e === this) throw new Error("Cannot register a disposable on itself!");
        return this._store.add(e);
    }
}, _e.None = Object.freeze({
    dispose () {}
}), Fr = class {
    constructor(){
        this._isDisposed = !1, dt(this);
    }
    get value() {
        return this._isDisposed ? void 0 : this._value;
    }
    set value(e) {
        if (this._isDisposed) {
            if (e) {
                const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
                Re.DISABLE_DISPOSED_WARNING || console.warn(t.stack), Rr(t), e.dispose();
            }
            return;
        }
        e !== this._value && (this._value?.dispose(), e && mt(e, this), this._value = e);
    }
    clear() {
        this.value = void 0;
    }
    dispose() {
        this._isDisposed = !0, pt(this), this._value?.dispose(), this._value = void 0;
    }
    clearAndLeak() {
        const e = this._value;
        return this._value = void 0, e && mt(e, null), e;
    }
}, Ss = class {
    constructor(e = new Map){
        this._isDisposed = !1, this._store = e, dt(this);
    }
    dispose() {
        pt(this), this._isDisposed = !0, this.clearAndDisposeAll();
    }
    clearAndDisposeAll() {
        if (this._store.size) try {
            xr(this._store.values());
        } finally{
            this._store.clear();
        }
    }
    has(e) {
        return this._store.has(e);
    }
    get size() {
        return this._store.size;
    }
    get(e) {
        return this._store.get(e);
    }
    set(e, t, r = !1) {
        if (this._isDisposed) {
            const s = new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!");
            console.warn(s.stack), Rr(s);
            return;
        }
        r || this._store.get(e)?.dispose(), this._store.set(e, t);
    }
    deleteAndDispose(e) {
        this._store.get(e)?.dispose(), this._store.delete(e);
    }
    deleteAndLeak(e) {
        const t = this._store.get(e);
        return this._store.delete(e), t;
    }
    keys() {
        return this._store.keys();
    }
    values() {
        return this._store.values();
    }
    [Symbol.iterator]() {
        return this._store[Symbol.iterator]();
    }
};

}
