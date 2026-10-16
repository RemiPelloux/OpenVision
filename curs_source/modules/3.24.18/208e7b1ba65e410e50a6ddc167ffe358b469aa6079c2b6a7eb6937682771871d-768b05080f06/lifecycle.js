import { Vn, b4 } from "./arrays.js";
import { I4 } from "./collections.js";
import { Ov } from "./functional.js";
import { xv, zo } from "./iterator.js";
import { U4, mr } from "./map.js";
import { h } from "./tslib.es6.js";
function lUe(e, t) {
    return (n, r)=>t(e(n), e(r));
}
function dUe(e, t) {
    const n = Object.create(null);
    for (const r of e){
        const s = t(r);
        let i = n[s];
        i || (i = n[s] = []), i.push(r);
    }
    return n;
}
function Im(e, t) {
    if (oa?.onLifecycleMisuse?.(e, t), !oR) return;
    const n = `${t}\0${e.stack ?? ""}`;
    Fv.has(n) || Fv.size >= G4 || (Fv.add(n), oR(e, t));
}
function sR(e) {
    Im(e, "disposable_post_dispose_set");
}
function TUe(e) {
    oa = e;
}
function Am(e) {
    return oa?.trackDisposable(e), e;
}
function Mm(e) {
    oa?.markAsDisposed(e);
}
function Pm(e, t) {
    oa?.setParent(e, t);
}
function yr(e) {
    if (zo.is(e)) {
        let t;
        for (const n of e)if (n) try {
            n.dispose();
        } catch (r) {
            (t ??= []).push(r);
        }
        if (t !== void 0) throw t.length === 1 ? t[0] : new AggregateError(t, "Encountered errors while disposing of store");
        return Array.isArray(e) ? [] : e;
    } else if (e) return e.dispose(), e;
}
var oR, Fv, G4, V4, oa, $4, cR, ve, J, Ut, ei;
export { $4, Am, Fv, G4, Im, J, Mm, Pm, TUe, Ut, V4, cR, dUe, ei, lUe, oR, oa, sR, ve, yr };
var __wakaru_j_initialized = false;
export function j() {
if (__wakaru_j_initialized) return;
__wakaru_j_initialized = true;
"use strict";
if (h(), Vn(), I4(), mr(), Ov(), xv(), oR = void 0, Fv = new Set, G4 = 50, V4 = !1, oa = null, $4 = class j9e {
    constructor(){
        this.livingDisposables = new Map;
    }
    getDisposableData(t) {
        let n = this.livingDisposables.get(t);
        return n || (n = {
            parent: null,
            source: null,
            isSingleton: !1,
            value: t,
            idx: j9e.idx++
        }, this.livingDisposables.set(t, n)), n;
    }
    trackDisposable(t) {
        const n = this.getDisposableData(t);
        n.source || (n.source = new Error().stack);
    }
    setParent(t, n) {
        const r = this.getDisposableData(t);
        r.parent = n;
    }
    markAsDisposed(t) {
        this.livingDisposables.delete(t);
    }
    markAsSingleton(t) {
        this.getDisposableData(t).isSingleton = !0;
    }
    getRootParent(t, n) {
        const r = n.get(t);
        if (r) return r;
        const s = t.parent ? this.getRootParent(this.getDisposableData(t.parent), n) : t;
        return n.set(t, s), s;
    }
    getTrackedDisposables() {
        const t = new Map;
        return [
            ...this.livingDisposables.entries()
        ].filter(([, r])=>r.source !== null && !this.getRootParent(r, t).isSingleton).flatMap(([r])=>r);
    }
    computeLeakingDisposables(t = 10, n) {
        let r;
        if (n) r = n;
        else {
            const l = new Map, d = [
                ...this.livingDisposables.values()
            ].filter((m)=>m.source !== null && !this.getRootParent(m, l).isSingleton);
            if (d.length === 0) return;
            const u = new Set(d.map((m)=>m.value));
            if (r = d.filter((m)=>!(m.parent && u.has(m.parent))), r.length === 0) throw new Error("There are cyclic diposable chains!");
        }
        if (!r) return;
        function s(l) {
            function d(m, f) {
                for(; m.length > 0 && f.some((v)=>typeof v == "string" ? v === m[0] : m[0].match(v));)m.shift();
            }
            const u = l.source.split(`
`).map((m)=>m.trim().replace("at ", "")).filter((m)=>m !== "");
            return d(u, [
                "Error",
                /^trackDisposable \(.*\)$/,
                /^DisposableTracker.trackDisposable \(.*\)$/
            ]), u.reverse();
        }
        const i = new U4;
        for (const l of r){
            const d = s(l);
            for(let u = 0; u <= d.length; u++)i.add(d.slice(0, u).join(`
`), l);
        }
        r.sort(lUe((l)=>l.idx, b4));
        let a = "", o = 0;
        for (const l of r.slice(0, t)){
            o++;
            const d = s(l), u = [];
            for(let m = 0; m < d.length; m++){
                let f = d[m];
                f = `(shared with ${i.get(d.slice(0, m + 1).join(`
`)).size}/${r.length} leaks) at ${f}`;
                const T = i.get(d.slice(0, m).join(`
`)), S = dUe([
                    ...T
                ].map((k)=>s(k)[m]), (k)=>k);
                delete S[d[m]];
                for (const [k, y] of Object.entries(S))u.unshift(`    - stacktraces of ${y.length} other leaks continue with ${k}`);
                u.unshift(f);
            }
            a += `


==================== Leaking disposable ${o}/${r.length}: ${l.value.constructor.name} ====================
${u.join(`
`)}
============================================================

`;
        }
        return r.length > t && (a += `


... and ${r.length - t} more leaking disposables

`), {
            leaks: r,
            details: a
        };
    }
}, $4.idx = 0, V4) {
    const e = "__is_disposable_tracked__";
    TUe(new class {
        trackDisposable(t) {
            const n = new Error("Potentially leaked disposable").stack;
            setTimeout(()=>{
                t[e] || console.log(n);
            }, 3e3);
        }
        setParent(t, n) {
            if (t && t !== J.None) try {
                t[e] = !0;
            } catch  {}
        }
        markAsDisposed(t) {
            if (t && t !== J.None) try {
                t[e] = !0;
            } catch  {}
        }
        markAsSingleton(t) {}
    });
}
cR = class vx {
    constructor(){
        this._toDispose = new Set, this._isDisposed = !1, Am(this);
    }
    dispose() {
        this._isDisposed || (Mm(this), this._isDisposed = !0, this.clear());
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
            yr(this._toDispose);
        } finally{
            this._toDispose.clear();
        }
    }
    add(t) {
        if (!t) return t;
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        if (Pm(t, this), this._isDisposed) {
            const n = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
            vx.DISABLE_DISPOSED_WARNING || console.warn(n.stack), sR(n);
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
        t && this._toDispose.has(t) && (this._toDispose.delete(t), Pm(t, null));
    }
    transferOut(t) {
        if (this._isDisposed) {
            const n = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
            vx.DISABLE_DISPOSED_WARNING || console.warn(n.stack), Im(n, "disposable_use_after_dispose");
        }
        return this.deleteAndLeak(t), t;
    }
}, cR.DISABLE_DISPOSED_WARNING = !1, ve = cR, J = class {
    constructor(){
        this._store = new ve, Am(this), Pm(this._store, this);
    }
    dispose() {
        Mm(this), this._store.dispose();
    }
    _register(e) {
        if (e === this) throw new Error("Cannot register a disposable on itself!");
        return this._store.add(e);
    }
}, J.None = Object.freeze({
    dispose () {}
}), Ut = class {
    constructor(){
        this._isDisposed = !1, Am(this);
    }
    get value() {
        return this._isDisposed ? void 0 : this._value;
    }
    set value(e) {
        if (this._isDisposed) {
            if (e) {
                const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
                ve.DISABLE_DISPOSED_WARNING || console.warn(t.stack), sR(t), e.dispose();
            }
            return;
        }
        e !== this._value && (this._value?.dispose(), e && Pm(e, this), this._value = e);
    }
    clear() {
        this.value = void 0;
    }
    dispose() {
        this._isDisposed = !0, Mm(this), this._value?.dispose(), this._value = void 0;
    }
    clearAndLeak() {
        const e = this._value;
        return this._value = void 0, e && Pm(e, null), e;
    }
}, ei = class {
    constructor(e = new Map){
        this._isDisposed = !1, this._store = e, Am(this);
    }
    dispose() {
        Mm(this), this._isDisposed = !0, this.clearAndDisposeAll();
    }
    clearAndDisposeAll() {
        if (this._store.size) try {
            yr(this._store.values());
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
    set(e, t, n = !1) {
        if (this._isDisposed) {
            const r = new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!");
            console.warn(r.stack), sR(r);
            return;
        }
        n || this._store.get(e)?.dispose(), this._store.set(e, t);
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
