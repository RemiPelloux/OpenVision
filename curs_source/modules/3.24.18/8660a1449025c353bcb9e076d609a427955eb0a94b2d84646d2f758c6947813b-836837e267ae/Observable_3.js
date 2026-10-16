import { $5p, G5p, J0e, _Oa, bOa, cM1, dM1, hM1, hSi, mM1, pM1, q5p, uM1 } from "./ipa.js";
import { E } from "./tslib.es6.js";
var uqr, PCn, T0t, yOa, z5p, F4, Uae, SOa;
export { F4, PCn, SOa, T0t, Uae, uqr, yOa, z5p };
var __wakaru_K7_initialized = false;
export function K7() {
if (__wakaru_K7_initialized) return;
__wakaru_K7_initialized = true;
E(), uqr = class extends Error {
    errors;
    constructor(t){
        super(t ? `${t.length} errors occurred during unsubscription:
${t.map((e, n)=>`${n + 1}) ${e.toString()}`).join(`
  `)}` : ""), this.errors = t, this.name = "UnsubscriptionError";
    }
}, PCn = class V2b {
    initialTeardown;
    static EMPTY = (()=>{
        const e = new V2b;
        return e.closed = !0, e;
    })();
    closed = !1;
    _finalizers = null;
    constructor(e){
        this.initialTeardown = e;
    }
    unsubscribe() {
        let e;
        if (!this.closed) {
            this.closed = !0;
            const { initialTeardown: n } = this;
            if (J0e(n)) try {
                n();
            } catch (r) {
                e = r instanceof uqr ? r.errors : [
                    r
                ];
            }
            const { _finalizers: i } = this;
            if (i) {
                this._finalizers = null;
                for (const r of i)try {
                    $5p(r);
                } catch (s) {
                    e = e ?? [], s instanceof uqr ? e.push(...s.errors) : e.push(s);
                }
            }
            if (e) throw new uqr(e);
        }
    }
    add(e) {
        e && e !== this && (this.closed ? $5p(e) : (e && "add" in e && e.add(()=>{
            this.remove(e);
        }), this._finalizers ??= new Set, this._finalizers.add(e)));
    }
    remove(e) {
        this._finalizers?.delete(e);
    }
}, typeof Symbol.dispose == "symbol" && (PCn.prototype[Symbol.dispose] = PCn.prototype.unsubscribe), T0t = class K2b extends PCn {
    isStopped = !1;
    destination;
    _nextOverride = null;
    _errorOverride = null;
    _completeOverride = null;
    _onFinalize = null;
    constructor(e, n){
        super(), this.destination = e instanceof K2b ? e : hM1(e), this._nextOverride = n?.next ?? null, this._errorOverride = n?.error ?? null, this._completeOverride = n?.complete ?? null, this._onFinalize = n?.finalize ?? null, this._next = this._nextOverride ? cM1 : this._next, this._error = this._errorOverride ? uM1 : this._error, this._complete = this._completeOverride ? dM1 : this._complete, pM1(e) && e.add(this);
    }
    next(e) {
        this.isStopped ? _Oa(q5p(e), this) : this._next(e);
    }
    error(e) {
        this.isStopped ? _Oa(G5p(e), this) : (this.isStopped = !0, this._error(e));
    }
    complete() {
        this.isStopped ? _Oa(SOa, this) : (this.isStopped = !0, this._complete());
    }
    unsubscribe() {
        this.closed || (this.isStopped = !0, super.unsubscribe(), this._onFinalize?.());
    }
    _next(e) {
        this.destination.next(e);
    }
    _error(e) {
        try {
            this.destination.error(e);
        } finally{
            this.unsubscribe();
        }
    }
    _complete() {
        try {
            this.destination.complete();
        } finally{
            this.unsubscribe();
        }
    }
}, yOa = {
    onUnhandledError: null,
    onStoppedNotification: null
}, z5p = class {
    partialObserver;
    constructor(t){
        this.partialObserver = t;
    }
    next(t) {
        const { partialObserver: e } = this;
        if (e.next) try {
            e.next(t);
        } catch (n) {
            hSi(n);
        }
    }
    error(t) {
        const { partialObserver: e } = this;
        if (e.error) try {
            e.error(t);
        } catch (n) {
            hSi(n);
        }
        else hSi(t);
    }
    complete() {
        const { partialObserver: t } = this;
        if (t.complete) try {
            t.complete();
        } catch (e) {
            hSi(e);
        }
    }
}, F4 = class {
    constructor(t){
        t && (this._subscribe = t);
    }
    subscribe(t) {
        const e = t instanceof T0t ? t : new T0t(t);
        return e.add(this._trySubscribe(e)), e;
    }
    _trySubscribe(t) {
        try {
            return this._subscribe(t);
        } catch (e) {
            t.error(e);
        }
    }
    forEach(t) {
        return new Promise((e, n)=>{
            const i = new T0t({
                next: (r)=>{
                    try {
                        t(r);
                    } catch (s) {
                        n(s), i.unsubscribe();
                    }
                },
                error: n,
                complete: e
            });
            this.subscribe(i);
        });
    }
    _subscribe(t) {}
    [Symbol.observable ?? "@@observable"]() {
        return this;
    }
    pipe(...t) {
        return t.reduce(mM1, this);
    }
    [Symbol.asyncIterator]() {
        let t, e = !1, n, i = !1;
        const r = [], s = [], o = (l)=>{
            for(e = !0, n = l; s.length;){
                const [c, u] = s.shift();
                u(l);
            }
        }, a = ()=>{
            for(i = !0; s.length;){
                const [l] = s.shift();
                l({
                    value: void 0,
                    done: !0
                });
            }
        };
        return {
            next: ()=>(t || (t = this.subscribe({
                    next: (l)=>{
                        if (s.length) {
                            const [c] = s.shift();
                            c({
                                value: l,
                                done: !1
                            });
                        } else r.push(l);
                    },
                    error: o,
                    complete: a
                })), r.length ? Promise.resolve({
                    value: r.shift(),
                    done: !1
                }) : i ? Promise.resolve({
                    value: void 0,
                    done: !0
                }) : e ? Promise.reject(n) : new Promise((l, c)=>{
                    s.push([
                        l,
                        c
                    ]);
                })),
            throw: (l)=>(t?.unsubscribe(), o(l), Promise.reject(l)),
            return: ()=>(t?.unsubscribe(), a(), Promise.resolve({
                    value: void 0,
                    done: !0
                })),
            [Symbol.asyncIterator] () {
                return this;
            }
        };
    }
}, (function(t) {
    t[t.Own = 0] = "Own", t[t.InteropObservable = 1] = "InteropObservable", t[t.ArrayLike = 2] = "ArrayLike", t[t.Promise = 3] = "Promise", t[t.AsyncIterable = 4] = "AsyncIterable", t[t.Iterable = 5] = "Iterable", t[t.ReadableStreamLike = 6] = "ReadableStreamLike";
})(Uae || (Uae = {})), SOa = bOa("C", void 0, void 0);

}
