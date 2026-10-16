"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = exports.isObservable = exports.isArrayLike = exports.isPromise = exports.readableStreamLikeToAsyncGenerator = exports.isFunction = exports.getObservableInputType = exports.ObservableInputType = exports.subscribeToArray = exports.fromPromise = exports.fromArrayLike = exports.from = exports.reportUnhandledError = exports.Observable = exports.operate = exports.config = exports.Subscriber = exports.Subscription = exports.UnsubscriptionError = void 0;
class r extends Error {
    errors;
    constructor(e){
        super(e ? `${e.length} errors occurred during unsubscription:\n${e.map((e, t)=>`${t + 1}) ${e.toString()}`).join("\n  ")}` : ""), this.errors = e, this.name = "UnsubscriptionError";
    }
}
exports.UnsubscriptionError = r;
class n {
    initialTeardown;
    static EMPTY = (()=>{
        const e = new n;
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
            const { initialTeardown: t } = this;
            if (_(t)) try {
                t();
            } catch (t) {
                e = t instanceof r ? t.errors : [
                    t
                ];
            }
            const { _finalizers: n } = this;
            if (n) {
                this._finalizers = null;
                for (const t of n)try {
                    s(t);
                } catch (t) {
                    e = e ?? [], t instanceof r ? e.push(...t.errors) : e.push(t);
                }
            }
            if (e) throw new r(e);
        }
    }
    add(e) {
        e && e !== this && (this.closed ? s(e) : (e && "add" in e && e.add(()=>{
            this.remove(e);
        }), this._finalizers ??= new Set, this._finalizers.add(e)));
    }
    remove(e) {
        this._finalizers?.delete(e);
    }
}
function s(e) {
    _(e) ? e() : e.unsubscribe();
}
exports.Subscription = n, "symbol" == typeof Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.unsubscribe);
class o extends n {
    isStopped = !1;
    destination;
    _nextOverride = null;
    _errorOverride = null;
    _completeOverride = null;
    _onFinalize = null;
    constructor(e, t){
        var r, n;
        super(), this.destination = e instanceof o ? e : new l(!(r = e) || _(r) ? {
            next: r ?? void 0
        } : r), this._nextOverride = t?.next ?? null, this._errorOverride = t?.error ?? null, this._completeOverride = t?.complete ?? null, this._onFinalize = t?.finalize ?? null, this._next = this._nextOverride ? i : this._next, this._error = this._errorOverride ? a : this._error, this._complete = this._completeOverride ? c : this._complete, (n = e) && _(n.unsubscribe) && _(n.add) && e.add(this);
    }
    next(e) {
        this.isStopped ? u(I(e), this) : this._next(e);
    }
    error(e) {
        this.isStopped ? u(E(e), this) : (this.isStopped = !0, this._error(e));
    }
    complete() {
        this.isStopped ? u(exports.COMPLETE_NOTIFICATION, this) : (this.isStopped = !0, this._complete());
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
}
function i(e) {
    try {
        this._nextOverride(e);
    } catch (e) {
        this.destination.error(e);
    }
}
function a(e) {
    try {
        this._errorOverride(e);
    } catch (e) {
        this.destination.error(e);
    } finally{
        this.unsubscribe();
    }
}
function c() {
    try {
        this._completeOverride();
    } catch (e) {
        this.destination.error(e);
    } finally{
        this.unsubscribe();
    }
}
exports.Subscriber = o, exports.config = {
    onUnhandledError: null,
    onStoppedNotification: null
};
class l {
    partialObserver;
    constructor(e){
        this.partialObserver = e;
    }
    next(e) {
        const { partialObserver: t } = this;
        if (t.next) try {
            t.next(e);
        } catch (e) {
            m(e);
        }
    }
    error(e) {
        const { partialObserver: t } = this;
        if (t.error) try {
            t.error(e);
        } catch (e) {
            m(e);
        }
        else m(e);
    }
    complete() {
        const { partialObserver: e } = this;
        if (e.complete) try {
            e.complete();
        } catch (e) {
            m(e);
        }
    }
}
function u(e, r) {
    const { onStoppedNotification: n } = exports.config;
    n && setTimeout(()=>n(e, r));
}
exports.operate = function({ destination: e, ...t }) {
    return new o(e, t);
};
class d {
    constructor(e){
        e && (this._subscribe = e);
    }
    subscribe(e) {
        const t = e instanceof o ? e : new o(e);
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
        return new Promise((t, r)=>{
            const n = new o({
                next: (t)=>{
                    try {
                        e(t);
                    } catch (e) {
                        r(e), n.unsubscribe();
                    }
                },
                error: r,
                complete: t
            });
            this.subscribe(n);
        });
    }
    _subscribe(e) {}
    [Symbol.observable ?? "@@observable"]() {
        return this;
    }
    pipe(...e) {
        return e.reduce(p, this);
    }
    [Symbol.asyncIterator]() {
        let e, t, r = !1, n = !1;
        const s = [], o = [], i = (e)=>{
            for(r = !0, t = e; o.length;){
                const [t, r] = o.shift();
                r(e);
            }
        }, a = ()=>{
            for(n = !0; o.length;){
                const [e] = o.shift();
                e({
                    value: void 0,
                    done: !0
                });
            }
        };
        return {
            next: ()=>(e || (e = this.subscribe({
                    next: (e)=>{
                        if (o.length) {
                            const [t] = o.shift();
                            t({
                                value: e,
                                done: !1
                            });
                        } else s.push(e);
                    },
                    error: i,
                    complete: a
                })), s.length ? Promise.resolve({
                    value: s.shift(),
                    done: !1
                }) : n ? Promise.resolve({
                    value: void 0,
                    done: !0
                }) : r ? Promise.reject(t) : new Promise((e, t)=>{
                    o.push([
                        e,
                        t
                    ]);
                })),
            throw: (t)=>(e?.unsubscribe(), i(t), Promise.reject(t)),
            return: ()=>(e?.unsubscribe(), a(), Promise.resolve({
                    value: void 0,
                    done: !0
                })),
            [Symbol.asyncIterator] () {
                return this;
            }
        };
    }
}
function p(e, t) {
    return t(e);
}
function m(e) {
    setTimeout(()=>{
        const { onUnhandledError: r } = exports.config;
        if (!r) throw e;
        r(e);
    });
}
function h(e) {
    return new d((t)=>{
        y(e, t);
    });
}
function f(e) {
    return new d((t)=>{
        e.then((e)=>{
            t.closed || (t.next(e), t.complete());
        }, (e)=>t.error(e)).then(null, m);
    });
}
function g(e) {
    return new d((t)=>{
        (async function(e, t) {
            for await (const r of e)if (t.next(r), t.closed) return;
            t.complete();
        })(e, t).catch((e)=>t.error(e));
    });
}
function y(e, t) {
    const r = e.length;
    for(let n = 0; n < r; n++){
        if (t.closed) return;
        t.next(e[n]);
    }
    t.complete();
}
var w;
function v(e) {
    if (e instanceof d) return w.Own;
    if (function(e) {
        return _(e[Symbol.observable ?? "@@observable"]);
    }(e)) return w.InteropObservable;
    if (b(e)) return w.ArrayLike;
    if (S(e)) return w.Promise;
    if (t = e, Symbol.asyncIterator && _(t?.[Symbol.asyncIterator])) return w.AsyncIterable;
    var t;
    if (function(e) {
        return _(e?.[Symbol.iterator]);
    }(e)) return w.Iterable;
    if (function(e) {
        return _(e?.getReader);
    }(e)) return w.ReadableStreamLike;
    throw new TypeError(`You provided ${null !== e && "object" == typeof e ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
function _(e) {
    return "function" == typeof e;
}
async function* A(e) {
    const t = e.getReader();
    try {
        for(;;){
            const { value: e, done: r } = await t.read();
            if (r) return;
            yield e;
        }
    } finally{
        t.releaseLock();
    }
}
function S(e) {
    return _(e?.then);
}
function b(e) {
    return e && "number" == typeof e.length && !_(e);
}
function E(e) {
    return C("E", void 0, e);
}
function I(e) {
    return C("N", e, void 0);
}
function C(e, t, r) {
    return {
        kind: e,
        value: t,
        error: r
    };
}
exports.Observable = d, exports.reportUnhandledError = m, exports.from = function(e) {
    switch(v(e)){
        case w.Own:
            return e;
        case w.InteropObservable:
            return r = e, new d((e)=>{
                const t = r[Symbol.observable ?? "@@observable"]();
                if (_(t.subscribe)) return t.subscribe(e);
                throw new TypeError("Provided object does not correctly implement Symbol.observable");
            });
        case w.ArrayLike:
            return h(e);
        case w.Promise:
            return f(e);
        case w.AsyncIterable:
            return g(e);
        case w.Iterable:
            return t = e, new d((e)=>{
                for (const r of t)if (e.next(r), e.closed) return;
                e.complete();
            });
        case w.ReadableStreamLike:
            return g(A(e));
    }
    var t, r;
}, exports.fromArrayLike = h, exports.fromPromise = f, exports.subscribeToArray = y, function(e) {
    e[e.Own = 0] = "Own", e[e.InteropObservable = 1] = "InteropObservable", e[e.ArrayLike = 2] = "ArrayLike", e[e.Promise = 3] = "Promise", e[e.AsyncIterable = 4] = "AsyncIterable", e[e.Iterable = 5] = "Iterable", e[e.ReadableStreamLike = 6] = "ReadableStreamLike";
}(w = exports.ObservableInputType || (exports.ObservableInputType = {})), exports.getObservableInputType = v, exports.isFunction = _, exports.readableStreamLikeToAsyncGenerator = A, exports.isPromise = S, exports.isArrayLike = b, exports.isObservable = function(e) {
    return !!e && (e instanceof d || _(e.lift) && _(e.subscribe));
}, exports.COMPLETE_NOTIFICATION = C("C", void 0, void 0), exports.errorNotification = E, exports.nextNotification = I, exports.createNotification = C;
