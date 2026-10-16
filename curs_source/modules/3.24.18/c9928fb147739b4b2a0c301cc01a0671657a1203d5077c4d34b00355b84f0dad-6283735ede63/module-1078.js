Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = exports.isObservable = exports.isArrayLike = exports.isPromise = exports.readableStreamLikeToAsyncGenerator = exports.isFunction = exports.getObservableInputType = exports.ObservableInputType = exports.subscribeToArray = exports.fromPromise = exports.fromArrayLike = exports.from = exports.reportUnhandledError = exports.Observable = exports.operate = exports.config = exports.Subscriber = exports.Subscription = exports.UnsubscriptionError = void 0;
class n extends Error {
    errors;
    constructor(e){
        super(e ? `${e.length} errors occurred during unsubscription:\n${e.map((e, a)=>`${a + 1}) ${e.toString()}`).join("\n  ")}` : ""), this.errors = e, this.name = "UnsubscriptionError";
    }
}
exports.UnsubscriptionError = n;
class s {
    initialTeardown;
    static EMPTY = (()=>{
        const e = new s;
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
            const { initialTeardown: a } = this;
            if (y(a)) try {
                a();
            } catch (a) {
                e = a instanceof n ? a.errors : [
                    a
                ];
            }
            const { _finalizers: s } = this;
            if (s) {
                this._finalizers = null;
                for (const a of s)try {
                    o(a);
                } catch (a) {
                    e = e ?? [], a instanceof n ? e.push(...a.errors) : e.push(a);
                }
            }
            if (e) throw new n(e);
        }
    }
    add(e) {
        e && e !== this && (this.closed ? o(e) : (e && "add" in e && e.add(()=>{
            this.remove(e);
        }), this._finalizers ??= new Set, this._finalizers.add(e)));
    }
    remove(e) {
        this._finalizers?.delete(e);
    }
}
function o(e) {
    y(e) ? e() : e.unsubscribe();
}
exports.Subscription = s, "symbol" == typeof Symbol.dispose && (s.prototype[Symbol.dispose] = s.prototype.unsubscribe);
class r extends s {
    isStopped = !1;
    destination;
    _nextOverride = null;
    _errorOverride = null;
    _completeOverride = null;
    _onFinalize = null;
    constructor(e, a){
        var n, s;
        super(), this.destination = e instanceof r ? e : new l(!(n = e) || y(n) ? {
            next: n ?? void 0
        } : n), this._nextOverride = a?.next ?? null, this._errorOverride = a?.error ?? null, this._completeOverride = a?.complete ?? null, this._onFinalize = a?.finalize ?? null, this._next = this._nextOverride ? t : this._next, this._error = this._errorOverride ? i : this._error, this._complete = this._completeOverride ? m : this._complete, (s = e) && y(s.unsubscribe) && y(s.add) && e.add(this);
    }
    next(e) {
        this.isStopped ? d(N(e), this) : this._next(e);
    }
    error(e) {
        this.isStopped ? d(f(e), this) : (this.isStopped = !0, this._error(e));
    }
    complete() {
        this.isStopped ? d(exports.COMPLETE_NOTIFICATION, this) : (this.isStopped = !0, this._complete());
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
function t(e) {
    try {
        this._nextOverride(e);
    } catch (e) {
        this.destination.error(e);
    }
}
function i(e) {
    try {
        this._errorOverride(e);
    } catch (e) {
        this.destination.error(e);
    } finally{
        this.unsubscribe();
    }
}
function m() {
    try {
        this._completeOverride();
    } catch (e) {
        this.destination.error(e);
    } finally{
        this.unsubscribe();
    }
}
exports.Subscriber = r, exports.config = {
    onUnhandledError: null,
    onStoppedNotification: null
};
class l {
    partialObserver;
    constructor(e){
        this.partialObserver = e;
    }
    next(e) {
        const { partialObserver: a } = this;
        if (a.next) try {
            a.next(e);
        } catch (e) {
            p(e);
        }
    }
    error(e) {
        const { partialObserver: a } = this;
        if (a.error) try {
            a.error(e);
        } catch (e) {
            p(e);
        }
        else p(e);
    }
    complete() {
        const { partialObserver: e } = this;
        if (e.complete) try {
            e.complete();
        } catch (e) {
            p(e);
        }
    }
}
function d(e, n) {
    const { onStoppedNotification: s } = exports.config;
    s && setTimeout(()=>s(e, n));
}
exports.operate = function({ destination: e, ...a }) {
    return new r(e, a);
};
class c {
    constructor(e){
        e && (this._subscribe = e);
    }
    subscribe(e) {
        const a = e instanceof r ? e : new r(e);
        return a.add(this._trySubscribe(a)), a;
    }
    _trySubscribe(e) {
        try {
            return this._subscribe(e);
        } catch (a) {
            e.error(a);
        }
    }
    forEach(e) {
        return new Promise((a, n)=>{
            const s = new r({
                next: (a)=>{
                    try {
                        e(a);
                    } catch (e) {
                        n(e), s.unsubscribe();
                    }
                },
                error: n,
                complete: a
            });
            this.subscribe(s);
        });
    }
    _subscribe(e) {}
    [Symbol.observable ?? "@@observable"]() {
        return this;
    }
    pipe(...e) {
        return e.reduce(T, this);
    }
    [Symbol.asyncIterator]() {
        let e, a, n = !1, s = !1;
        const o = [], r = [], t = (e)=>{
            for(n = !0, a = e; r.length;){
                const [a, n] = r.shift();
                n(e);
            }
        }, i = ()=>{
            for(s = !0; r.length;){
                const [e] = r.shift();
                e({
                    value: void 0,
                    done: !0
                });
            }
        };
        return {
            next: ()=>(e || (e = this.subscribe({
                    next: (e)=>{
                        if (r.length) {
                            const [a] = r.shift();
                            a({
                                value: e,
                                done: !1
                            });
                        } else o.push(e);
                    },
                    error: t,
                    complete: i
                })), o.length ? Promise.resolve({
                    value: o.shift(),
                    done: !1
                }) : s ? Promise.resolve({
                    value: void 0,
                    done: !0
                }) : n ? Promise.reject(a) : new Promise((e, a)=>{
                    r.push([
                        e,
                        a
                    ]);
                })),
            throw: (a)=>(e?.unsubscribe(), t(a), Promise.reject(a)),
            return: ()=>(e?.unsubscribe(), i(), Promise.resolve({
                    value: void 0,
                    done: !0
                })),
            [Symbol.asyncIterator] () {
                return this;
            }
        };
    }
}
function T(e, a) {
    return a(e);
}
function p(e) {
    setTimeout(()=>{
        const { onUnhandledError: n } = exports.config;
        if (!n) throw e;
        n(e);
    });
}
function _(e) {
    return new c((a)=>{
        g(e, a);
    });
}
function k(e) {
    return new c((a)=>{
        e.then((e)=>{
            a.closed || (a.next(e), a.complete());
        }, (e)=>a.error(e)).then(null, p);
    });
}
function u(e) {
    return new c((a)=>{
        (async function(e, a) {
            for await (const n of e)if (a.next(n), a.closed) return;
            a.complete();
        })(e, a).catch((e)=>a.error(e));
    });
}
function g(e, a) {
    const n = e.length;
    for(let s = 0; s < n; s++){
        if (a.closed) return;
        a.next(e[s]);
    }
    a.complete();
}
var E;
function v(e) {
    if (e instanceof c) return E.Own;
    if (function(e) {
        return y(e[Symbol.observable ?? "@@observable"]);
    }(e)) return E.InteropObservable;
    if (I(e)) return E.ArrayLike;
    if (R(e)) return E.Promise;
    if (a = e, Symbol.asyncIterator && y(a?.[Symbol.asyncIterator])) return E.AsyncIterable;
    var a;
    if (function(e) {
        return y(e?.[Symbol.iterator]);
    }(e)) return E.Iterable;
    if (function(e) {
        return y(e?.getReader);
    }(e)) return E.ReadableStreamLike;
    throw new TypeError(`You provided ${null !== e && "object" == typeof e ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
function y(e) {
    return "function" == typeof e;
}
async function* S(e) {
    const a = e.getReader();
    try {
        for(;;){
            const { value: e, done: n } = await a.read();
            if (n) return;
            yield e;
        }
    } finally{
        a.releaseLock();
    }
}
function R(e) {
    return y(e?.then);
}
function I(e) {
    return e && "number" == typeof e.length && !y(e);
}
function f(e) {
    return O("E", void 0, e);
}
function N(e) {
    return O("N", e, void 0);
}
function O(e, a, n) {
    return {
        kind: e,
        value: a,
        error: n
    };
}
exports.Observable = c, exports.reportUnhandledError = p, exports.from = function(e) {
    switch(v(e)){
        case E.Own:
            return e;
        case E.InteropObservable:
            return n = e, new c((e)=>{
                const a = n[Symbol.observable ?? "@@observable"]();
                if (y(a.subscribe)) return a.subscribe(e);
                throw new TypeError("Provided object does not correctly implement Symbol.observable");
            });
        case E.ArrayLike:
            return _(e);
        case E.Promise:
            return k(e);
        case E.AsyncIterable:
            return u(e);
        case E.Iterable:
            return a = e, new c((e)=>{
                for (const n of a)if (e.next(n), e.closed) return;
                e.complete();
            });
        case E.ReadableStreamLike:
            return u(S(e));
    }
    var a, n;
}, exports.fromArrayLike = _, exports.fromPromise = k, exports.subscribeToArray = g, function(e) {
    e[e.Own = 0] = "Own", e[e.InteropObservable = 1] = "InteropObservable", e[e.ArrayLike = 2] = "ArrayLike", e[e.Promise = 3] = "Promise", e[e.AsyncIterable = 4] = "AsyncIterable", e[e.Iterable = 5] = "Iterable", e[e.ReadableStreamLike = 6] = "ReadableStreamLike";
}(E = exports.ObservableInputType || (exports.ObservableInputType = {})), exports.getObservableInputType = v, exports.isFunction = y, exports.readableStreamLikeToAsyncGenerator = S, exports.isPromise = R, exports.isArrayLike = I, exports.isObservable = function(e) {
    return !!e && (e instanceof c || y(e.lift) && y(e.subscribe));
}, exports.COMPLETE_NOTIFICATION = O("C", void 0, void 0), exports.errorNotification = f, exports.nextNotification = N, exports.createNotification = O;
