import { CPu, Ghv, Hhv, SPu, TPu, Vhv, Whv, jhv, lMn, qhv, qzs, ude, zzs } from "./De_3.js";
import { x } from "./tslib.es6.js";
var qUi, C$t, XQe, Kzs, EPu, ZO, fX, Yzs;
export { C$t, EPu, Kzs, XQe, Yzs, ZO, fX, qUi };
var __wakaru_N5_initialized = false;
export function N5() {
if (__wakaru_N5_initialized) return;
__wakaru_N5_initialized = true;
x(), qUi = class extends Error {
    errors;
    constructor(e){
        super(e ? `${e.length} errors occurred during unsubscription:
${e.map((t, n)=>`${n + 1}) ${t.toString()}`).join(`
  `)}` : ""), this.errors = e, this.name = "UnsubscriptionError";
    }
}, C$t = class lCm {
    initialTeardown;
    static EMPTY = (()=>{
        const t = new lCm;
        return t.closed = !0, t;
    })();
    closed = !1;
    _finalizers = null;
    constructor(t){
        this.initialTeardown = t;
    }
    unsubscribe() {
        let t;
        if (!this.closed) {
            this.closed = !0;
            const { initialTeardown: n } = this;
            if (ude(n)) try {
                n();
            } catch (r) {
                t = r instanceof qUi ? r.errors : [
                    r
                ];
            }
            const { _finalizers: i } = this;
            if (i) {
                this._finalizers = null;
                for (const r of i)try {
                    SPu(r);
                } catch (s) {
                    t = t ?? [], s instanceof qUi ? t.push(...s.errors) : t.push(s);
                }
            }
            if (t) throw new qUi(t);
        }
    }
    add(t) {
        t && t !== this && (this.closed ? SPu(t) : (t && "add" in t && t.add(()=>{
            this.remove(t);
        }), this._finalizers ??= new Set, this._finalizers.add(t)));
    }
    remove(t) {
        this._finalizers?.delete(t);
    }
}, typeof Symbol.dispose == "symbol" && (C$t.prototype[Symbol.dispose] = C$t.prototype.unsubscribe), XQe = class uCm extends C$t {
    isStopped = !1;
    destination;
    _nextOverride = null;
    _errorOverride = null;
    _completeOverride = null;
    _onFinalize = null;
    constructor(t, n){
        super(), this.destination = t instanceof uCm ? t : Vhv(t), this._nextOverride = n?.next ?? null, this._errorOverride = n?.error ?? null, this._completeOverride = n?.complete ?? null, this._onFinalize = n?.finalize ?? null, this._next = this._nextOverride ? Hhv : this._next, this._error = this._errorOverride ? Whv : this._error, this._complete = this._completeOverride ? Ghv : this._complete, jhv(t) && t.add(this);
    }
    next(t) {
        this.isStopped ? qzs(TPu(t), this) : this._next(t);
    }
    error(t) {
        this.isStopped ? qzs(CPu(t), this) : (this.isStopped = !0, this._error(t));
    }
    complete() {
        this.isStopped ? qzs(Yzs, this) : (this.isStopped = !0, this._complete());
    }
    unsubscribe() {
        this.closed || (this.isStopped = !0, super.unsubscribe(), this._onFinalize?.());
    }
    _next(t) {
        this.destination.next(t);
    }
    _error(t) {
        try {
            this.destination.error(t);
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
}, Kzs = {
    onUnhandledError: null,
    onStoppedNotification: null
}, EPu = class {
    partialObserver;
    constructor(e){
        this.partialObserver = e;
    }
    next(e) {
        const { partialObserver: t } = this;
        if (t.next) try {
            t.next(e);
        } catch (n) {
            lMn(n);
        }
    }
    error(e) {
        const { partialObserver: t } = this;
        if (t.error) try {
            t.error(e);
        } catch (n) {
            lMn(n);
        }
        else lMn(e);
    }
    complete() {
        const { partialObserver: e } = this;
        if (e.complete) try {
            e.complete();
        } catch (t) {
            lMn(t);
        }
    }
}, ZO = class {
    constructor(e){
        e && (this._subscribe = e);
    }
    subscribe(e) {
        const t = e instanceof XQe ? e : new XQe(e);
        return t.add(this._trySubscribe(t)), t;
    }
    _trySubscribe(e) {
        try {
            return this._subscribe(e);
        } catch (t) {
            e.error(t);
        }
    }
    forEach(e) {
        return new Promise((t, n)=>{
            const i = new XQe({
                next: (r)=>{
                    try {
                        e(r);
                    } catch (s) {
                        n(s), i.unsubscribe();
                    }
                },
                error: n,
                complete: t
            });
            this.subscribe(i);
        });
    }
    _subscribe(e) {}
    [Symbol.observable ?? "@@observable"]() {
        return this;
    }
    pipe(...e) {
        return e.reduce(qhv, this);
    }
    [Symbol.asyncIterator]() {
        let e, t = !1, n, i = !1;
        const r = [], s = [], o = (c)=>{
            for(t = !0, n = c; s.length;){
                const [l, u] = s.shift();
                u(c);
            }
        }, a = ()=>{
            for(i = !0; s.length;){
                const [c] = s.shift();
                c({
                    value: void 0,
                    done: !0
                });
            }
        };
        return {
            next: ()=>(e || (e = this.subscribe({
                    next: (c)=>{
                        if (s.length) {
                            const [l] = s.shift();
                            l({
                                value: c,
                                done: !1
                            });
                        } else r.push(c);
                    },
                    error: o,
                    complete: a
                })), r.length ? Promise.resolve({
                    value: r.shift(),
                    done: !1
                }) : i ? Promise.resolve({
                    value: void 0,
                    done: !0
                }) : t ? Promise.reject(n) : new Promise((c, l)=>{
                    s.push([
                        c,
                        l
                    ]);
                })),
            throw: (c)=>(e?.unsubscribe(), o(c), Promise.reject(c)),
            return: ()=>(e?.unsubscribe(), a(), Promise.resolve({
                    value: void 0,
                    done: !0
                })),
            [Symbol.asyncIterator] () {
                return this;
            }
        };
    }
}, (function(e) {
    e[e.Own = 0] = "Own", e[e.InteropObservable = 1] = "InteropObservable", e[e.ArrayLike = 2] = "ArrayLike", e[e.Promise = 3] = "Promise", e[e.AsyncIterable = 4] = "AsyncIterable", e[e.Iterable = 5] = "Iterable", e[e.ReadableStreamLike = 6] = "ReadableStreamLike";
})(fX || (fX = {})), Yzs = zzs("C", void 0, void 0);

}
