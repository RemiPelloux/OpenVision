import { Ade, Di, Ei, Gt, Hc, LOe, Pn, Qe, Vn, da, en, tt, xh } from "./Iwo.js";
import { yo } from "./cancellation.js";
import { ES, hP } from "./lazy.js";
import { Iu, Lr } from "./resources.js";
import { cZn, xdn } from "./symbols.js";
import { E } from "./tslib.es6.js";
var e_t, OOe, FOe, pZu, mZu, II, nW, c7, dZn, xI, Ake, Emr, hZn, ZE, AI, Yu, Adn, BOe, pZn, iTo, mZn, Imr, gZu, df, I_, fZu, vZu, xmr, Ote, _Zu;
export { AI, Adn, Ake, BOe, Emr, FOe, II, I_, Imr, OOe, Ote, Yu, ZE, _Zu, c7, dZn, df, e_t, fZu, gZu, hZn, iTo, mZn, mZu, nW, pZn, pZu, vZu, xI, xmr };
var __wakaru_qn_initialized = false;
export function qn() {
if (__wakaru_qn_initialized) return;
__wakaru_qn_initialized = true;
"use strict";
E(), yo(), Ei(), Gt(), Qe(), Lr(), Di(), cZn(), hP(), e_t = class {
    constructor(){
        this.isDisposed = !1, this.activePromise = null, this.queuedPromise = null, this.queuedPromiseFactory = null;
    }
    queue(t) {
        if (this.isDisposed) return Promise.reject(new Error("Throttler is disposed"));
        if (this.activePromise) {
            if (this.queuedPromiseFactory = t, !this.queuedPromise) {
                const e = ()=>{
                    if (this.queuedPromise = null, this.isDisposed) return;
                    const n = this.queue(this.queuedPromiseFactory);
                    return this.queuedPromiseFactory = null, n;
                };
                this.queuedPromise = new Promise((n)=>{
                    this.activePromise.then(e, e).then(n);
                });
            }
            return new Promise((e, n)=>{
                this.queuedPromise.then(e, n);
            });
        }
        return this.activePromise = t(), new Promise((e, n)=>{
            this.activePromise.then((i)=>{
                this.activePromise = null, e(i);
            }, (i)=>{
                this.activePromise = null, n(i);
            });
        });
    }
    dispose() {
        this.isDisposed = !0;
    }
}, OOe = class {
    constructor(){
        this.current = Promise.resolve(null);
    }
    queue(t) {
        return this.current = this.current.then(()=>t(), ()=>t());
    }
}, FOe = class {
    constructor(){
        this.promiseMap = new Map;
    }
    queue(t, e) {
        const i = (this.promiseMap.get(t) ?? Promise.resolve()).catch(()=>{}).then(e).finally(()=>{
            this.promiseMap.get(t) === i && this.promiseMap.delete(t);
        });
        return this.promiseMap.set(t, i), i;
    }
    keys() {
        return this.promiseMap.keys();
    }
}, pZu = (t, e)=>{
    let n = !0;
    const i = setTimeout(()=>{
        n = !1, e();
    }, t);
    return {
        isTriggered: ()=>n,
        dispose: ()=>{
            clearTimeout(i), n = !1;
        }
    };
}, mZu = (t)=>{
    let e = !0;
    return queueMicrotask(()=>{
        e && (e = !1, t());
    }), {
        isTriggered: ()=>e,
        dispose: ()=>{
            e = !1;
        }
    };
}, II = class {
    constructor(t){
        this.defaultDelay = t, this._isDisposed = !1, this.deferred = null, this.completionPromise = null, this.doResolve = null, this.doReject = null, this.task = null;
    }
    trigger(t, e = this.defaultDelay) {
        if (this._isDisposed) return Promise.reject(new Hc);
        this.task = t, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((i, r)=>{
            this.doResolve = i, this.doReject = r;
        }).then(()=>{
            if (this.completionPromise = null, this.doResolve = null, this.task) {
                const i = this.task;
                return this.task = null, i();
            }
        }));
        const n = ()=>{
            this.deferred = null, this.doResolve?.(null);
        };
        return this.deferred = e === xdn ? mZu(n) : pZu(e, n), this.completionPromise;
    }
    isTriggered() {
        return !!this.deferred?.isTriggered();
    }
    cancel() {
        this.cancelTimeout(), this.completionPromise && (this.doReject?.(new Hc), this.completionPromise = null);
    }
    cancelTimeout() {
        this.deferred?.dispose(), this.deferred = null;
    }
    dispose() {
        this._isDisposed = !0, this.cancel();
    }
}, nW = class {
    constructor(t){
        this.delayer = new II(t), this.throttler = new e_t;
    }
    trigger(t, e) {
        return this.delayer.trigger(()=>this.throttler.queue(t), e);
    }
    isTriggered() {
        return this.delayer.isTriggered();
    }
    cancel() {
        this.delayer.cancel();
    }
    dispose() {
        this.delayer.dispose(), this.throttler.dispose();
    }
}, c7 = class {
    constructor(){
        this._isOpen = !1, this._promise = new Promise((t, e)=>{
            this._completePromise = t;
        });
    }
    isOpen() {
        return this._isOpen;
    }
    open() {
        this._isOpen = !0, this._completePromise(!0);
    }
    wait() {
        return this._promise;
    }
}, dZn = class extends c7 {
    constructor(t){
        super(), this._timeout = setTimeout(()=>this.open(), t);
    }
    open() {
        clearTimeout(this._timeout), super.open();
    }
}, xI = class {
    constructor(t){
        this._size = 0, this._isDisposed = !1, this.maxDegreeOfParalellism = t, this.outstandingPromises = [], this.runningPromises = 0, this._onDrained = new tt;
    }
    whenIdle() {
        return this.size > 0 ? en.toPromise(this.onDrained) : Promise.resolve();
    }
    get onDrained() {
        return this._onDrained.event;
    }
    get size() {
        return this._size;
    }
    queue(t) {
        if (this._isDisposed) throw new Error("Object has been disposed");
        return this._size++, new Promise((e, n)=>{
            this.outstandingPromises.push({
                factory: t,
                c: e,
                e: n
            }), this.consume();
        });
    }
    consume() {
        for(; this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism;){
            const t = this.outstandingPromises.shift();
            this.runningPromises++;
            const e = t.factory();
            e.then(t.c, t.e), e.then(()=>this.consumed(), ()=>this.consumed());
        }
    }
    consumed() {
        this._isDisposed || (this.runningPromises--, --this._size === 0 && this._onDrained.fire(), this.outstandingPromises.length > 0 && this.consume());
    }
    clear() {
        if (this._isDisposed) throw new Error("Object has been disposed");
        this.outstandingPromises.length = 0, this._size = this.runningPromises;
    }
    dispose() {
        this._isDisposed = !0, this.outstandingPromises.length = 0, this._size = 0, this._onDrained.dispose();
    }
}, Ake = class extends xI {
    constructor(){
        super(1);
    }
}, Emr = class {
    constructor(){
        this.sequentializer = new Imr, this.tasks = 0;
    }
    queue(t) {
        return this.sequentializer.isRunning() ? this.sequentializer.queue(()=>this.sequentializer.run(this.tasks++, t())) : this.sequentializer.run(this.tasks++, t());
    }
}, hZn = class {
    constructor(){
        this.queues = new Map, this.drainers = new Set, this.drainListeners = void 0, this.drainListenerCount = 0, this._isDisposed = !1;
    }
    async whenDrained() {
        if (this.isDrained()) return;
        const t = new df;
        return this.drainers.add(t), t.p;
    }
    isDrained() {
        for (const [, t] of this.queues)if (t.size > 0) return !1;
        return !0;
    }
    queueSize(t, e = Iu) {
        const n = e.getComparisonKey(t);
        return this.queues.get(n)?.size ?? 0;
    }
    queueFor(t, e, n = Iu) {
        if (this._isDisposed) return e();
        const i = n.getComparisonKey(t);
        let r = this.queues.get(i);
        if (!r) {
            r = new Ake;
            const s = this.drainListenerCount++, o = en.once(r.onDrained)(()=>{
                r?.dispose(), this.queues.delete(i), this.onDidQueueDrain(), this.drainListeners?.deleteAndDispose(s), this.drainListeners?.size === 0 && (this.drainListeners.dispose(), this.drainListeners = void 0);
            });
            this.drainListeners || (this.drainListeners = new da), this.drainListeners.set(s, o), this.queues.set(i, r);
        }
        return r.queue(e);
    }
    onDidQueueDrain() {
        this.isDrained() && this.releaseDrainers();
    }
    releaseDrainers() {
        for (const t of this.drainers)t.complete();
        this.drainers.clear();
    }
    dispose() {
        this._isDisposed = !0;
        for (const [, t] of this.queues)t.dispose();
        this.queues.clear(), this.releaseDrainers(), this.drainListeners?.dispose(), this.drainListeners = void 0;
    }
}, ZE = class {
    constructor(t, e){
        this._isDisposed = !1, this._token = -1, typeof t == "function" && typeof e == "number" && this.setIfNotSet(t, e);
    }
    dispose() {
        this.cancel(), this._isDisposed = !0;
    }
    cancel() {
        this._token !== -1 && (clearTimeout(this._token), this._token = -1);
    }
    cancelAndSet(t, e) {
        if (this._isDisposed) throw new xh("Calling 'cancelAndSet' on a disposed TimeoutTimer");
        this.cancel(), this._token = setTimeout(()=>{
            this._token = -1, t();
        }, e);
    }
    setIfNotSet(t, e) {
        if (this._isDisposed) throw new xh("Calling 'setIfNotSet' on a disposed TimeoutTimer");
        this._token === -1 && (this._token = setTimeout(()=>{
            this._token = -1, t();
        }, e));
    }
}, AI = class {
    constructor(){
        this.isDisposed = !1;
    }
    cancel() {
        this.disposable?.dispose(), this.disposable = void 0;
    }
    cancelAndSet(t, e, n = globalThis) {
        if (this.isDisposed) throw new xh("Calling 'cancelAndSet' on a disposed IntervalTimer");
        this.cancel();
        const i = n.setInterval(()=>{
            t();
        }, e);
        this.disposable = new Vn, this.disposable.value = Pn(()=>{
            n.clearInterval(i);
        });
    }
    dispose() {
        this.cancel(), this.isDisposed = !0;
    }
}, Yu = class {
    constructor(t, e){
        this.timeoutToken = -1, this.runner = t, this.timeout = e, this.timeoutHandler = this.onTimeout.bind(this);
    }
    dispose() {
        this.cancel(), this.runner = null;
    }
    cancel() {
        this.isScheduled() && (clearTimeout(this.timeoutToken), this.timeoutToken = -1);
    }
    schedule(t = this.timeout) {
        this.cancel(), this.timeoutToken = setTimeout(this.timeoutHandler, t);
    }
    get delay() {
        return this.timeout;
    }
    set delay(t) {
        this.timeout = t;
    }
    isScheduled() {
        return this.timeoutToken !== -1;
    }
    flush() {
        this.isScheduled() && (this.cancel(), this.doRun());
    }
    onTimeout() {
        this.timeoutToken = -1, this.runner && this.doRun();
    }
    doRun() {
        this.runner?.();
    }
}, Adn = class extends Yu {
    constructor(t, e){
        super(t, e), this.units = [];
    }
    work(t) {
        this.units.push(t), this.isScheduled() || this.schedule();
    }
    doRun() {
        const t = this.units;
        this.units = [], this.runner?.(t);
    }
    dispose() {
        this.units = [], super.dispose();
    }
}, (function() {
    typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? pZn = (t, e, n)=>{
        Ade(()=>{
            if (i) return;
            const r = Date.now() + 15;
            e(Object.freeze({
                didTimeout: !0,
                timeRemaining () {
                    return Math.max(0, r - Date.now());
                }
            }));
        });
        let i = !1;
        return {
            dispose () {
                i || (i = !0);
            }
        };
    } : pZn = (t, e, n)=>{
        const i = t.requestIdleCallback(e, typeof n == "number" ? {
            timeout: n
        } : void 0);
        let r = !1;
        return {
            dispose () {
                r || (r = !0, t.cancelIdleCallback(i));
            }
        };
    }, BOe = (t, e)=>pZn(globalThis, t, e);
})(), iTo = class {
    constructor(t, e){
        this._didRun = !1, this._executor = ()=>{
            try {
                this._value = e();
            } catch (n) {
                this._error = n;
            } finally{
                this._didRun = !0;
            }
        }, this._handle = pZn(t, ()=>this._executor());
    }
    dispose() {
        this._handle.dispose();
    }
    get value() {
        if (this._didRun || (this._handle.dispose(), this._executor()), this._error) throw this._error;
        return this._value;
    }
    get isInitialized() {
        return this._didRun;
    }
}, mZn = class extends iTo {
    constructor(t){
        super(globalThis, t);
    }
}, Imr = class {
    isRunning(t) {
        return typeof t == "number" ? this._running?.taskId === t : !!this._running;
    }
    get running() {
        return this._running?.promise;
    }
    cancelRunning() {
        this._running?.cancel();
    }
    run(t, e, n) {
        return this._running = {
            taskId: t,
            cancel: ()=>n?.(),
            promise: e
        }, e.then(()=>this.doneRunning(t), ()=>this.doneRunning(t)), e;
    }
    doneRunning(t) {
        this._running && t === this._running.taskId && (this._running = void 0, this.runQueued());
    }
    runQueued() {
        if (this._queued) {
            const t = this._queued;
            this._queued = void 0, t.run().then(t.promiseResolve, t.promiseReject);
        }
    }
    queue(t) {
        if (this._queued) this._queued.run = t;
        else {
            const { promise: e, resolve: n, reject: i } = LOe();
            this._queued = {
                run: t,
                promise: e,
                promiseResolve: n,
                promiseReject: i
            };
        }
        return this._queued.promise;
    }
    hasQueued() {
        return !!this._queued;
    }
    async join() {
        return this._queued?.promise ?? this._running?.promise;
    }
}, gZu = class {
    constructor(t, e = ()=>Date.now()){
        this.interval = t, this.nowFn = e, this.lastIncrementTime = 0, this.value = 0;
    }
    increment() {
        const t = this.nowFn();
        return t - this.lastIncrementTime > this.interval && (this.lastIncrementTime = t, this.value = 0), this.value++, this.value;
    }
}, df = class qxb {
    static fromPromise(e) {
        const n = new qxb;
        return n.settleWith(e), n;
    }
    get isRejected() {
        return this.outcome?.outcome === 1;
    }
    get isResolved() {
        return this.outcome?.outcome === 0;
    }
    get isSettled() {
        return !!this.outcome;
    }
    get value() {
        return this.outcome?.outcome === 0 ? this.outcome?.value : void 0;
    }
    constructor(){
        this.p = new Promise((e, n)=>{
            this.completeCallback = e, this.errorCallback = n;
        });
    }
    complete(e) {
        return new Promise((n)=>{
            this.completeCallback(e), this.outcome = {
                outcome: 0,
                value: e
            }, n();
        });
    }
    error(e) {
        return new Promise((n)=>{
            this.errorCallback(e), this.outcome = {
                outcome: 1,
                value: e
            }, n();
        });
    }
    settleWith(e) {
        return e.then((n)=>this.complete(n), (n)=>this.error(n));
    }
    cancel() {
        return this.error(new Hc);
    }
}, ((t)=>{
    async function e(i) {
        let r;
        const s = await Promise.all(i.map((o)=>o.then((a)=>a, (a)=>{
                r || (r = a);
            })));
        if (typeof r < "u") throw r;
        return s;
    }
    t.settled = e;
    function n(i) {
        return new Promise(async (r, s)=>{
            try {
                await i(r, s);
            } catch (o) {
                s(o);
            }
        });
    }
    t.withAsyncBody = n;
})(I_ || (I_ = {})), fZu = class {
    constructor(t){
        this._value = void 0, this._error = void 0, this._isResolved = !1, this.promise = t.then((e)=>(this._value = e, this._isResolved = !0, e), (e)=>{
            throw this._error = e, this._isResolved = !0, e;
        });
    }
    get value() {
        return this._value;
    }
    get error() {
        return this._error;
    }
    get isResolved() {
        return this._isResolved;
    }
    requireValue() {
        if (!this._isResolved) throw new xh("Promise is not resolved yet");
        if (this._error) throw this._error;
        return this._value;
    }
}, vZu = class {
    constructor(t){
        this._compute = t, this._promise = new ES(()=>new fZu(this._compute()));
    }
    requireValue() {
        return this._promise.value.requireValue();
    }
    getPromise() {
        return this._promise.value.promise;
    }
    get currentValue() {
        return this._promise.rawValue?.value;
    }
}, xmr = class mNe {
    static fromArray(e) {
        return new mNe((n)=>{
            n.emitMany(e);
        });
    }
    static fromPromise(e) {
        return new mNe(async (n)=>{
            n.emitMany(await e);
        });
    }
    static fromPromisesResolveOrder(e) {
        return new mNe(async (n)=>{
            await Promise.all(e.map(async (i)=>n.emitOne(await i)));
        });
    }
    static merge(e) {
        return new mNe(async (n)=>{
            await Promise.all(e.map(async (i)=>{
                for await (const r of i)n.emitOne(r);
            }));
        });
    }
    constructor(e, n){
        this._state = 0, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new tt, queueMicrotask(async ()=>{
            const i = {
                emitOne: (r)=>this.emitOne(r),
                emitMany: (r)=>this.emitMany(r),
                reject: (r)=>this.reject(r)
            };
            try {
                await Promise.resolve(e(i)), this.resolve();
            } catch (r) {
                this.reject(r);
            } finally{
                i.emitOne = void 0, i.emitMany = void 0, i.reject = void 0;
            }
        });
    }
    [Symbol.asyncIterator]() {
        let e = 0;
        return {
            next: async ()=>{
                do {
                    if (this._state === 2) throw this._error;
                    if (e < this._results.length) return {
                        done: !1,
                        value: this._results[e++]
                    };
                    if (this._state === 1) return {
                        done: !0,
                        value: void 0
                    };
                    await en.toPromise(this._onStateChanged.event);
                }while (!0)
            },
            return: async ()=>(this._onReturn?.(), {
                    done: !0,
                    value: void 0
                })
        };
    }
    static map(e, n) {
        return new mNe(async (i)=>{
            for await (const r of e)i.emitOne(n(r));
        });
    }
    map(e) {
        return mNe.map(this, e);
    }
    static filter(e, n) {
        return new mNe(async (i)=>{
            for await (const r of e)n(r) && i.emitOne(r);
        });
    }
    filter(e) {
        return mNe.filter(this, e);
    }
    static coalesce(e) {
        return mNe.filter(e, (n)=>!!n);
    }
    coalesce() {
        return mNe.coalesce(this);
    }
    static async toPromise(e) {
        const n = [];
        for await (const i of e)n.push(i);
        return n;
    }
    toPromise() {
        return mNe.toPromise(this);
    }
    emitOne(e) {
        this._state === 0 && (this._results.push(e), this._onStateChanged.fire());
    }
    emitMany(e) {
        this._state === 0 && (this._results = this._results.concat(e), this._onStateChanged.fire());
    }
    resolve() {
        this._state === 0 && (this._state = 1, this._onStateChanged.fire());
    }
    reject(e) {
        this._state === 0 && (this._state = 2, this._error = e, this._onStateChanged.fire());
    }
}, xmr.EMPTY = xmr.fromArray([]), Ote = xmr, _Zu = class extends Ote {
    constructor(t, e){
        super(e), this._source = t;
    }
    cancel() {
        this._source.cancel();
    }
};

}
