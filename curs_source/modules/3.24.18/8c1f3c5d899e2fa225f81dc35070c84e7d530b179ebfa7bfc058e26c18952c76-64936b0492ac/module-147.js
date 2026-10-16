Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DisposableMap = exports.ImmortalReference = exports.AsyncReferenceCollection = exports.ReferenceCollection = exports.RefCountedDisposable = exports.MandatoryMutableDisposable = exports.MutableDisposable = exports.Disposable = exports.TransferableDisposable = exports.DisposableStore = exports.DisposableTracker = exports.GCBasedDisposableTracker = exports.setShouldReportLeaks = exports.setShouldPrintLeaks = void 0, exports.reportLifecycleMisuse = d, exports.reportLeakedDisposable = b, exports.setDisposableTracker = v, exports.trackDisposable = E, exports.markAsDisposed = w, exports.markAsSingleton = function(e) {
    return L?.markAsSingleton(e), e;
}, exports.isDisposable = N, exports.dispose = R, exports.disposeAll = function(...e) {
    R(e);
}, exports.disposeIfDisposable = function(e) {
    for (const t of e)N(t) && t.dispose();
    return [];
}, exports.combinedDisposable = function(...e) {
    const t = C(()=>R(e));
    return function(e, t) {
        if (!L) return;
        for (const n of e)L.setParent(n, t);
    }(e, t), t;
}, exports.toDisposable = C, exports.thenIfNotDisposed = function(e, t) {
    let n = !1;
    return e.then((e)=>{
        n || t(e);
    }), C(()=>{
        n = !0;
    });
}, exports.thenRegisterOrDispose = function(e, t) {
    return e.then((e)=>(t.isDisposed ? e.dispose() : t.add(e), e));
};
const i = require("./module-501.js"), r = require("./module-846.js"), s = require("./module-281.js"), o = require("./module-46.js"), a = require("./module-837.js");
let u, l = !1;
exports.setShouldPrintLeaks = (e)=>{
    l = e;
};
const h = ()=>l;
exports.setShouldReportLeaks = (e)=>{
    u = e;
};
const c = new Set, f = 50;
function d(e, t) {
    if (L?.onLifecycleMisuse?.(e, t), !u) return;
    const n = `${t}\0${e.stack ?? ""}`;
    c.has(n) || c.size >= f || (c.add(n), u(e, t));
}
function g(e) {
    d(e, "disposable_post_dispose_set");
}
const m = new Set, p = 50;
function b(e) {
    if (globalThis.Object !== Object) return;
    if (h() && console.warn(`[LEAKED DISPOSABLE] ${e}`), !u || m.has(e) || m.size >= p) return;
    m.add(e);
    const t = e.split("\n").slice(1).find((e)=>!e.match(/common\/(lifecycle|event)/)), n = new Error(`[LEAKED DISPOSABLE] ${t}`);
    n.stack = e, u(n, "disposable_leak");
}
let L = null;
exports.GCBasedDisposableTracker = class {
    constructor(){
        this._registry = new FinalizationRegistry(b);
    }
    trackDisposable(e) {
        const t = Error, n = t.stackTraceLimit;
        t.stackTraceLimit = 16;
        const i = new Error("CREATED via:").stack;
        t.stackTraceLimit = n, this._registry.register(e, i, e);
    }
    setParent(e, t) {
        t ? this._registry.unregister(e) : this.trackDisposable(e);
    }
    markAsDisposed(e) {
        this._registry.unregister(e);
    }
    markAsSingleton(e) {
        this._registry.unregister(e);
    }
};
class _ {
    constructor(){
        this.livingDisposables = new Map;
    }
    static{
        this.idx = 0;
    }
    getDisposableData(e) {
        let t = this.livingDisposables.get(e);
        return t || (t = {
            parent: null,
            source: null,
            isSingleton: !1,
            value: e,
            idx: _.idx++
        }, this.livingDisposables.set(e, t)), t;
    }
    trackDisposable(e) {
        const t = this.getDisposableData(e);
        t.source || (t.source = (new Error).stack);
    }
    setParent(e, t) {
        this.getDisposableData(e).parent = t;
    }
    markAsDisposed(e) {
        this.livingDisposables.delete(e);
    }
    markAsSingleton(e) {
        this.getDisposableData(e).isSingleton = !0;
    }
    getRootParent(e, t) {
        const n = t.get(e);
        if (n) return n;
        const i = e.parent ? this.getRootParent(this.getDisposableData(e.parent), t) : e;
        return t.set(e, i), i;
    }
    getTrackedDisposables() {
        const e = new Map;
        return [
            ...this.livingDisposables.entries()
        ].filter(([, t])=>null !== t.source && !this.getRootParent(t, e).isSingleton).flatMap(([e])=>e);
    }
    computeLeakingDisposables(e = 10, t) {
        let n;
        if (t) n = t;
        else {
            const e = new Map, t = [
                ...this.livingDisposables.values()
            ].filter((t)=>null !== t.source && !this.getRootParent(t, e).isSingleton);
            if (0 === t.length) return;
            const i = new Set(t.map((e)=>e.value));
            if (n = t.filter((e)=>!(e.parent && i.has(e.parent))), 0 === n.length) throw new Error("There are cyclic diposable chains!");
        }
        if (!n) return;
        function o(e) {
            const t = e.source.split("\n").map((e)=>e.trim().replace("at ", "")).filter((e)=>"" !== e);
            return function(e, t) {
                for(; e.length > 0 && t.some((t)=>"string" == typeof t ? t === e[0] : e[0].match(t));)e.shift();
            }(t, [
                "Error",
                /^trackDisposable \(.*\)$/,
                /^DisposableTracker.trackDisposable \(.*\)$/
            ]), t.reverse();
        }
        const a = new s.SetMap;
        for (const e of n){
            const t = o(e);
            for(let n = 0; n <= t.length; n++)a.add(t.slice(0, n).join("\n"), e);
        }
        n.sort((0, i.compareBy)((e)=>e.idx, i.numberComparator));
        let u = "", l = 0;
        for (const t of n.slice(0, e)){
            l++;
            const e = o(t), i = [];
            for(let t = 0; t < e.length; t++){
                let s = e[t];
                s = `(shared with ${a.get(e.slice(0, t + 1).join("\n")).size}/${n.length} leaks) at ${s}`;
                const u = a.get(e.slice(0, t).join("\n")), l = (0, r.groupBy)([
                    ...u
                ].map((e)=>o(e)[t]), (e)=>e);
                delete l[e[t]];
                for (const [e, t] of Object.entries(l))i.unshift(`    - stacktraces of ${t.length} other leaks continue with ${e}`);
                i.unshift(s);
            }
            u += `\n\n\n==================== Leaking disposable ${l}/${n.length}: ${t.value.constructor.name} ====================\n${i.join("\n")}\n============================================================\n\n`;
        }
        return n.length > e && (u += `\n\n\n... and ${n.length - e} more leaking disposables\n\n`), {
            leaks: n,
            details: u
        };
    }
}
function v(e) {
    L = e;
}
function E(e) {
    return L?.trackDisposable(e), e;
}
function w(e) {
    L?.markAsDisposed(e);
}
function y(e, t) {
    L?.setParent(e, t);
}
function N(e) {
    return "object" == typeof e && null !== e && "function" == typeof e.dispose && 0 === e.dispose.length;
}
function R(e) {
    if (a.Iterable.is(e)) {
        let t;
        for (const n of e)if (n) try {
            n.dispose();
        } catch (e) {
            (t ??= []).push(e);
        }
        if (void 0 !== t) {
            if (1 === t.length) throw t[0];
            throw new AggregateError(t, "Encountered errors while disposing of store");
        }
        return Array.isArray(e) ? [] : e;
    }
    if (e) return e.dispose(), e;
}
function C(e) {
    const t = E({
        dispose: (0, o.createSingleCallFunction)(()=>{
            w(t), e();
        })
    });
    return t;
}
exports.DisposableTracker = _;
class x {
    static{
        this.DISABLE_DISPOSED_WARNING = !1;
    }
    constructor(){
        this._toDispose = new Set, this._isDisposed = !1, E(this);
    }
    dispose() {
        this._isDisposed || (w(this), this._isDisposed = !0, this.clear());
    }
    [Symbol.dispose]() {
        this.dispose();
    }
    get isDisposed() {
        return this._isDisposed;
    }
    has(e) {
        return this._toDispose.has(e);
    }
    get size() {
        return this._toDispose.size;
    }
    clear() {
        if (0 !== this._toDispose.size) try {
            R(this._toDispose);
        } finally{
            this._toDispose.clear();
        }
    }
    add(e) {
        if (!e) return e;
        if (e === this) throw new Error("Cannot register a disposable on itself!");
        if (y(e, this), this._isDisposed) {
            const e = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
            x.DISABLE_DISPOSED_WARNING || console.warn(e.stack), g(e);
        } else this._toDispose.add(e);
        return e;
    }
    delete(e) {
        if (e) {
            if (e === this) throw new Error("Cannot dispose a disposable on itself!");
            this._toDispose.delete(e), e.dispose();
        }
    }
    deleteAndLeak(e) {
        e && this._toDispose.has(e) && (this._toDispose.delete(e), y(e, null));
    }
    transferOut(e) {
        if (this._isDisposed) {
            const e = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
            x.DISABLE_DISPOSED_WARNING || console.warn(e.stack), d(e, "disposable_use_after_dispose");
        }
        return this.deleteAndLeak(e), e;
    }
}
exports.DisposableStore = x;
class S {
    constructor(e){
        this._isDisposed = !1, this._value = e, E(this), y(e, this);
    }
    get value() {
        if (void 0 === this._value) {
            const e = new Error(this._isDisposed ? "TransferableDisposable: the held value has been disposed" : "TransferableDisposable: the held value was already transferred out");
            throw x.DISABLE_DISPOSED_WARNING || console.warn(e.stack), d(e, this._isDisposed ? "disposable_use_after_dispose" : "disposable_use_after_transfer"), e;
        }
        return this._value;
    }
    get rawValue() {
        return this._value;
    }
    transferOut() {
        const e = this.value;
        return this._value = void 0, y(e, null), e;
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, w(this), this._value?.dispose(), this._value = void 0);
    }
    [Symbol.dispose]() {
        this.dispose();
    }
}
exports.TransferableDisposable = S;
class D {
    static{
        this.None = Object.freeze({
            dispose () {}
        });
    }
    constructor(){
        this._store = new x, E(this), y(this._store, this);
    }
    dispose() {
        w(this), this._store.dispose();
    }
    _register(e) {
        if (e === this) throw new Error("Cannot register a disposable on itself!");
        return this._store.add(e);
    }
}
exports.Disposable = D;
class A {
    constructor(){
        this._isDisposed = !1, E(this);
    }
    get value() {
        return this._isDisposed ? void 0 : this._value;
    }
    set value(e) {
        if (this._isDisposed) {
            if (e) {
                const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
                x.DISABLE_DISPOSED_WARNING || console.warn(t.stack), g(t), e.dispose();
            }
        } else e !== this._value && (this._value?.dispose(), e && y(e, this), this._value = e);
    }
    clear() {
        this.value = void 0;
    }
    dispose() {
        this._isDisposed = !0, w(this), this._value?.dispose(), this._value = void 0;
    }
    clearAndLeak() {
        const e = this._value;
        return this._value = void 0, e && y(e, null), e;
    }
}
exports.MutableDisposable = A;
exports.MandatoryMutableDisposable = class {
    constructor(e){
        this._disposable = new A, this._isDisposed = !1, this._disposable.value = e;
    }
    get value() {
        return this._disposable.value;
    }
    set value(e) {
        (this._isDisposed || e !== this._disposable.value) && (this._disposable.value = e);
    }
    dispose() {
        this._isDisposed = !0, this._disposable.dispose();
    }
};
exports.RefCountedDisposable = class {
    constructor(e){
        this._disposable = e, this._counter = 1;
    }
    acquire() {
        return this._counter++, this;
    }
    release() {
        return 0 === --this._counter && this._disposable.dispose(), this;
    }
};
exports.ReferenceCollection = class {
    constructor(){
        this.references = new Map;
    }
    acquire(e, ...t) {
        let n = this.references.get(e);
        n || (n = {
            counter: 0,
            object: this.createReferencedObject(e, ...t)
        }, this.references.set(e, n));
        const { object: i } = n, r = (0, o.createSingleCallFunction)(()=>{
            0 === --n.counter && (this.destroyReferencedObject(e, n.object), this.references.delete(e));
        });
        return n.counter++, {
            object: i,
            dispose: r,
            [Symbol.dispose]: r
        };
    }
};
exports.AsyncReferenceCollection = class {
    constructor(e){
        this.referenceCollection = e;
    }
    async acquire(e, ...t) {
        const n = this.referenceCollection.acquire(e, ...t);
        try {
            const e = await n.object, t = ()=>n.dispose();
            return {
                object: e,
                dispose: t,
                [Symbol.dispose]: t
            };
        } catch (e) {
            throw n.dispose(), e;
        }
    }
};
class M {
    constructor(e){
        this.object = e;
    }
    dispose() {}
    [Symbol.dispose]() {}
}
exports.ImmortalReference = M;
class O {
    constructor(e = new Map){
        this._isDisposed = !1, this._store = e, E(this);
    }
    dispose() {
        w(this), this._isDisposed = !0, this.clearAndDisposeAll();
    }
    clearAndDisposeAll() {
        if (this._store.size) try {
            R(this._store.values());
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
            const e = new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!");
            return console.warn(e.stack), void g(e);
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
}
exports.DisposableMap = O;
