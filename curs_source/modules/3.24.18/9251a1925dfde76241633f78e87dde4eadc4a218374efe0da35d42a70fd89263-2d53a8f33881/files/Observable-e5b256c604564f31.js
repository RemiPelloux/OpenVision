var __wakaru_require_Observable_cache;
export function require_Observable() {
if (__wakaru_require_Observable_cache) return __wakaru_require_Observable_cache;
var exports2 = {};
__wakaru_require_Observable_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createNotification = exports2.nextNotification = exports2.errorNotification = exports2.COMPLETE_NOTIFICATION = exports2.isObservable = exports2.isArrayLike = exports2.isPromise = exports2.readableStreamLikeToAsyncGenerator = exports2.isFunction = exports2.getObservableInputType = exports2.ObservableInputType = exports2.subscribeToArray = exports2.fromPromise = exports2.fromArrayLike = exports2.from = exports2.reportUnhandledError = exports2.Observable = exports2.operate = exports2.config = exports2.Subscriber = exports2.Subscription = exports2.UnsubscriptionError = void 0;
var UnsubscriptionError = class extends Error {
    errors;
    constructor(errors){
        super(errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i)=>`${i + 1}) ${err.toString()}`).join("\n  ")}` : "");
        this.errors = errors;
        this.name = "UnsubscriptionError";
    }
};
exports2.UnsubscriptionError = UnsubscriptionError;
var Subscription2 = class _Subscription {
    initialTeardown;
    static EMPTY = (()=>{
        const empty = new _Subscription();
        empty.closed = true;
        return empty;
    })();
    closed = false;
    _finalizers = null;
    constructor(initialTeardown){
        this.initialTeardown = initialTeardown;
    }
    unsubscribe() {
        let errors;
        if (!this.closed) {
            this.closed = true;
            const { initialTeardown: initialFinalizer } = this;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                } catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [
                        e
                    ];
                }
            }
            const { _finalizers } = this;
            if (_finalizers) {
                this._finalizers = null;
                for (const finalizer of _finalizers){
                    try {
                        execFinalizer(finalizer);
                    } catch (err) {
                        errors = errors ?? [];
                        if (err instanceof UnsubscriptionError) {
                            errors.push(...err.errors);
                        } else {
                            errors.push(err);
                        }
                    }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    }
    add(teardown) {
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            } else {
                if (teardown && "add" in teardown) {
                    teardown.add(()=>{
                        this.remove(teardown);
                    });
                }
                this._finalizers ??= new Set();
                this._finalizers.add(teardown);
            }
        }
    }
    remove(teardown) {
        this._finalizers?.delete(teardown);
    }
};
exports2.Subscription = Subscription2;
if (typeof Symbol.dispose === "symbol") {
    Subscription2.prototype[Symbol.dispose] = Subscription2.prototype.unsubscribe;
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    } else {
        finalizer.unsubscribe();
    }
}
var Subscriber = class _Subscriber extends Subscription2 {
    isStopped = false;
    destination;
    _nextOverride = null;
    _errorOverride = null;
    _completeOverride = null;
    _onFinalize = null;
    constructor(destination, overrides){
        super();
        this.destination = destination instanceof _Subscriber ? destination : createSafeObserver(destination);
        this._nextOverride = overrides?.next ?? null;
        this._errorOverride = overrides?.error ?? null;
        this._completeOverride = overrides?.complete ?? null;
        this._onFinalize = overrides?.finalize ?? null;
        this._next = this._nextOverride ? overrideNext : this._next;
        this._error = this._errorOverride ? overrideError : this._error;
        this._complete = this._completeOverride ? overrideComplete : this._complete;
        if (hasAddAndUnsubscribe(destination)) {
            destination.add(this);
        }
    }
    next(value) {
        if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
        } else {
            this._next(value);
        }
    }
    error(err) {
        if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
        } else {
            this.isStopped = true;
            this._error(err);
        }
    }
    complete() {
        if (this.isStopped) {
            handleStoppedNotification(exports2.COMPLETE_NOTIFICATION, this);
        } else {
            this.isStopped = true;
            this._complete();
        }
    }
    unsubscribe() {
        if (!this.closed) {
            this.isStopped = true;
            super.unsubscribe();
            this._onFinalize?.();
        }
    }
    _next(value) {
        this.destination.next(value);
    }
    _error(err) {
        try {
            this.destination.error(err);
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
};
exports2.Subscriber = Subscriber;
exports2.config = {
    onUnhandledError: null,
    onStoppedNotification: null
};
function overrideNext(value) {
    try {
        this._nextOverride(value);
    } catch (error3) {
        this.destination.error(error3);
    }
}
function overrideError(err) {
    try {
        this._errorOverride(err);
    } catch (error3) {
        this.destination.error(error3);
    } finally{
        this.unsubscribe();
    }
}
function overrideComplete() {
    try {
        this._completeOverride();
    } catch (error3) {
        this.destination.error(error3);
    } finally{
        this.unsubscribe();
    }
}
var ConsumerObserver = class {
    partialObserver;
    constructor(partialObserver){
        this.partialObserver = partialObserver;
    }
    next(value) {
        const { partialObserver } = this;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            } catch (error3) {
                reportUnhandledError(error3);
            }
        }
    }
    error(err) {
        const { partialObserver } = this;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            } catch (error3) {
                reportUnhandledError(error3);
            }
        } else {
            reportUnhandledError(err);
        }
    }
    complete() {
        const { partialObserver } = this;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            } catch (error3) {
                reportUnhandledError(error3);
            }
        }
    }
};
function createSafeObserver(observerOrNext) {
    return new ConsumerObserver(!observerOrNext || isFunction(observerOrNext) ? {
        next: observerOrNext ?? void 0
    } : observerOrNext);
}
function handleStoppedNotification(notification, subscriber) {
    const { onStoppedNotification } = exports2.config;
    onStoppedNotification && setTimeout(()=>onStoppedNotification(notification, subscriber));
}
function hasAddAndUnsubscribe(value) {
    return value && isFunction(value.unsubscribe) && isFunction(value.add);
}
function operate({ destination, ...subscriberOverrides }) {
    return new Subscriber(destination, subscriberOverrides);
}
exports2.operate = operate;
var Observable2 = class {
    constructor(subscribe){
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    subscribe(observerOrNext) {
        const subscriber = observerOrNext instanceof Subscriber ? observerOrNext : new Subscriber(observerOrNext);
        subscriber.add(this._trySubscribe(subscriber));
        return subscriber;
    }
    _trySubscribe(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            sink.error(err);
        }
    }
    forEach(next) {
        return new Promise((resolve36, reject2)=>{
            const subscriber = new Subscriber({
                next: (value)=>{
                    try {
                        next(value);
                    } catch (err) {
                        reject2(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject2,
                complete: resolve36
            });
            this.subscribe(subscriber);
        });
    }
    _subscribe(_subscriber) {
        return;
    }
    [Symbol.observable ?? "@@observable"]() {
        return this;
    }
    pipe(...operations2) {
        return operations2.reduce(pipeReducer, this);
    }
    [Symbol.asyncIterator]() {
        let subscription;
        let hasError = false;
        let error3;
        let completed = false;
        const values = [];
        const deferreds = [];
        const handleError = (err)=>{
            hasError = true;
            error3 = err;
            while(deferreds.length){
                const [_2, reject2] = deferreds.shift();
                reject2(err);
            }
        };
        const handleComplete = ()=>{
            completed = true;
            while(deferreds.length){
                const [resolve36] = deferreds.shift();
                resolve36({
                    value: void 0,
                    done: true
                });
            }
        };
        return {
            next: ()=>{
                if (!subscription) {
                    subscription = this.subscribe({
                        next: (value)=>{
                            if (deferreds.length) {
                                const [resolve36] = deferreds.shift();
                                resolve36({
                                    value,
                                    done: false
                                });
                            } else {
                                values.push(value);
                            }
                        },
                        error: handleError,
                        complete: handleComplete
                    });
                }
                if (values.length) {
                    return Promise.resolve({
                        value: values.shift(),
                        done: false
                    });
                }
                if (completed) {
                    return Promise.resolve({
                        value: void 0,
                        done: true
                    });
                }
                if (hasError) {
                    return Promise.reject(error3);
                }
                return new Promise((resolve36, reject2)=>{
                    deferreds.push([
                        resolve36,
                        reject2
                    ]);
                });
            },
            throw: (err)=>{
                subscription?.unsubscribe();
                handleError(err);
                return Promise.reject(err);
            },
            return: ()=>{
                subscription?.unsubscribe();
                handleComplete();
                return Promise.resolve({
                    value: void 0,
                    done: true
                });
            },
            [Symbol.asyncIterator] () {
                return this;
            }
        };
    }
};
exports2.Observable = Observable2;
function pipeReducer(prev, fn) {
    return fn(prev);
}
function reportUnhandledError(err) {
    setTimeout(()=>{
        const { onUnhandledError } = exports2.config;
        if (onUnhandledError) {
            onUnhandledError(err);
        } else {
            throw err;
        }
    });
}
exports2.reportUnhandledError = reportUnhandledError;
function from2(input) {
    const type2 = getObservableInputType(input);
    switch(type2){
        case ObservableInputType.Own:
            return input;
        case ObservableInputType.InteropObservable:
            return fromInteropObservable(input);
        case ObservableInputType.ArrayLike:
            return fromArrayLike(input);
        case ObservableInputType.Promise:
            return fromPromise(input);
        case ObservableInputType.AsyncIterable:
            return fromAsyncIterable(input);
        case ObservableInputType.Iterable:
            return fromIterable(input);
        case ObservableInputType.ReadableStreamLike:
            return fromReadableStreamLike(input);
    }
}
exports2.from = from2;
function fromInteropObservable(obj) {
    return new Observable2((subscriber)=>{
        const obs = obj[Symbol.observable ?? "@@observable"]();
        if (isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
}
function fromArrayLike(array3) {
    return new Observable2((subscriber)=>{
        subscribeToArray(array3, subscriber);
    });
}
exports2.fromArrayLike = fromArrayLike;
function fromPromise(promise) {
    return new Observable2((subscriber)=>{
        promise.then((value)=>{
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, (err)=>subscriber.error(err)).then(null, reportUnhandledError);
    });
}
exports2.fromPromise = fromPromise;
function fromIterable(iterable) {
    return new Observable2((subscriber)=>{
        for (const value of iterable){
            subscriber.next(value);
            if (subscriber.closed) {
                return;
            }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable2((subscriber)=>{
        process3(asyncIterable, subscriber).catch((err)=>subscriber.error(err));
    });
}
function fromReadableStreamLike(readableStream2) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream2));
}
async function process3(asyncIterable, subscriber) {
    for await (const value of asyncIterable){
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
    }
    subscriber.complete();
}
function subscribeToArray(array3, subscriber) {
    const length = array3.length;
    for(let i = 0; i < length; i++){
        if (subscriber.closed) {
            return;
        }
        subscriber.next(array3[i]);
    }
    subscriber.complete();
}
exports2.subscribeToArray = subscribeToArray;
var ObservableInputType;
(function(ObservableInputType2) {
    ObservableInputType2[ObservableInputType2["Own"] = 0] = "Own";
    ObservableInputType2[ObservableInputType2["InteropObservable"] = 1] = "InteropObservable";
    ObservableInputType2[ObservableInputType2["ArrayLike"] = 2] = "ArrayLike";
    ObservableInputType2[ObservableInputType2["Promise"] = 3] = "Promise";
    ObservableInputType2[ObservableInputType2["AsyncIterable"] = 4] = "AsyncIterable";
    ObservableInputType2[ObservableInputType2["Iterable"] = 5] = "Iterable";
    ObservableInputType2[ObservableInputType2["ReadableStreamLike"] = 6] = "ReadableStreamLike";
})(ObservableInputType = exports2.ObservableInputType || (exports2.ObservableInputType = {}));
function getObservableInputType(input) {
    if (input instanceof Observable2) {
        return ObservableInputType.Own;
    }
    if (isInteropObservable(input)) {
        return ObservableInputType.InteropObservable;
    }
    if (isArrayLike(input)) {
        return ObservableInputType.ArrayLike;
    }
    if (isPromise(input)) {
        return ObservableInputType.Promise;
    }
    if (isAsyncIterable3(input)) {
        return ObservableInputType.AsyncIterable;
    }
    if (isIterable(input)) {
        return ObservableInputType.Iterable;
    }
    if (isReadableStreamLike(input)) {
        return ObservableInputType.ReadableStreamLike;
    }
    throw new TypeError(`You provided ${input !== null && typeof input === "object" ? "an invalid object" : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
exports2.getObservableInputType = getObservableInputType;
function isFunction(value) {
    return typeof value === "function";
}
exports2.isFunction = isFunction;
function isAsyncIterable3(obj) {
    return Symbol.asyncIterator && isFunction(obj?.[Symbol.asyncIterator]);
}
async function* readableStreamLikeToAsyncGenerator(readableStream2) {
    const reader = readableStream2.getReader();
    try {
        while(true){
            const { value, done } = await reader.read();
            if (done) {
                return;
            }
            yield value;
        }
    } finally{
        reader.releaseLock();
    }
}
exports2.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
function isReadableStreamLike(obj) {
    return isFunction(obj?.getReader);
}
function isPromise(value) {
    return isFunction(value?.then);
}
exports2.isPromise = isPromise;
function isInteropObservable(input) {
    return isFunction(input[Symbol.observable ?? "@@observable"]);
}
function isIterable(input) {
    return isFunction(input?.[Symbol.iterator]);
}
function isArrayLike(x) {
    return x && typeof x.length === "number" && !isFunction(x);
}
exports2.isArrayLike = isArrayLike;
function isObservable(obj) {
    return !!obj && (obj instanceof Observable2 || isFunction(obj.lift) && isFunction(obj.subscribe));
}
exports2.isObservable = isObservable;
exports2.COMPLETE_NOTIFICATION = (()=>createNotification("C", void 0, void 0))();
function errorNotification(error3) {
    return createNotification("E", void 0, error3);
}
exports2.errorNotification = errorNotification;
function nextNotification(value) {
    return createNotification("N", value, void 0);
}
exports2.nextNotification = nextNotification;
function createNotification(kind, value, error3) {
    return {
        kind,
        value,
        error: error3
    };
}
exports2.createNotification = createNotification;

return exports2;
}
