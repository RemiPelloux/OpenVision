import { Ct, Rl, Se, Sge, Zu, bt, cn, jn, po, rn, sJ, si, ve } from "./HVr.js";
import { Ar } from "./cancellation.js";
import { Yf, qC } from "./lazy.js";
import { Li, pl } from "./resources.js";
import { RNt, ght } from "./symbols.js";
import { x } from "./tslib.es6.js";
var JH, qie, TAe, FIc, BIc, xg, TO, p3, qpn, aR, zie, Imi, zpn, wE, bI, ac, DNt, kge, Kpn, _zr, Ypn, Ami, UIc, Am, Rm, $Ic, HIc, Rmi, eW, WIc, GIc;
export { $Ic, Am, Ami, BIc, DNt, FIc, GIc, HIc, Imi, JH, Kpn, Rm, Rmi, TAe, TO, UIc, WIc, Ypn, _zr, aR, ac, bI, eW, kge, p3, qie, qpn, wE, xg, zie, zpn };
var __wakaru_bn_initialized = false;
export function bn() {
if (__wakaru_bn_initialized) return;
__wakaru_bn_initialized = true;
"use strict";
x(), Ar(), si(), bt(), Se(), Li(), jn(), RNt(), qC(), JH = class {
    constructor(){
        this.isDisposed = !1, this.activePromise = null, this.queuedPromise = null, this.queuedPromiseFactory = null;
    }
    queue(e) {
        if (this.isDisposed) return Promise.reject(new Error("Throttler is disposed"));
        if (this.activePromise) {
            if (this.queuedPromiseFactory = e, !this.queuedPromise) {
                const t = ()=>{
                    if (this.queuedPromise = null, this.isDisposed) return;
                    const n = this.queue(this.queuedPromiseFactory);
                    return this.queuedPromiseFactory = null, n;
                };
                this.queuedPromise = new Promise((n)=>{
                    this.activePromise.then(t, t).then(n);
                });
            }
            return new Promise((t, n)=>{
                this.queuedPromise.then(t, n);
            });
        }
        return this.activePromise = e(), new Promise((t, n)=>{
            this.activePromise.then((i)=>{
                this.activePromise = null, t(i);
            }, (i)=>{
                this.activePromise = null, n(i);
            });
        });
    }
    dispose() {
        this.isDisposed = !0;
    }
}, qie = class {
    constructor(){
        this.current = Promise.resolve(null);
    }
    queue(e) {
        return this.current = this.current.then(()=>e(), ()=>e());
    }
}, TAe = class {
    constructor(){
        this.promiseMap = new Map;
    }
    queue(e, t) {
        const i = (this.promiseMap.get(e) ?? Promise.resolve()).catch(()=>{}).then(t).finally(()=>{
            this.promiseMap.get(e) === i && this.promiseMap.delete(e);
        });
        return this.promiseMap.set(e, i), i;
    }
    keys() {
        return this.promiseMap.keys();
    }
}, FIc = (e, t)=>{
    let n = !0;
    const i = setTimeout(()=>{
        n = !1, t();
    }, e);
    return {
        isTriggered: ()=>n,
        dispose: ()=>{
            clearTimeout(i), n = !1;
        }
    };
}, BIc = (e)=>{
    let t = !0;
    return queueMicrotask(()=>{
        t && (t = !1, e());
    }), {
        isTriggered: ()=>t,
        dispose: ()=>{
            t = !1;
        }
    };
}, xg = class {
    constructor(e){
        this.defaultDelay = e, this._isDisposed = !1, this.deferred = null, this.completionPromise = null, this.doResolve = null, this.doReject = null, this.task = null;
    }
    trigger(e, t = this.defaultDelay) {
        if (this._isDisposed) return Promise.reject(new Rl);
        this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((i, r)=>{
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
        return this.deferred = t === ght ? BIc(n) : FIc(t, n), this.completionPromise;
    }
    isTriggered() {
        return !!this.deferred?.isTriggered();
    }
    cancel() {
        this.cancelTimeout(), this.completionPromise && (this.doReject?.(new Rl), this.completionPromise = null);
    }
    cancelTimeout() {
        this.deferred?.dispose(), this.deferred = null;
    }
    dispose() {
        this._isDisposed = !0, this.cancel();
    }
}, TO = class {
    constructor(e){
        this.delayer = new xg(e), this.throttler = new JH;
    }
    trigger(e, t) {
        return this.delayer.trigger(()=>this.throttler.queue(e), t);
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
}, p3 = class {
    constructor(){
        this._isOpen = !1, this._promise = new Promise((e, t)=>{
            this._completePromise = e;
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
}, qpn = class extends p3 {
    constructor(e){
        super(), this._timeout = setTimeout(()=>this.open(), e);
    }
    open() {
        clearTimeout(this._timeout), super.open();
    }
}, aR = class {
    constructor(e){
        this._size = 0, this._isDisposed = !1, this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onDrained = new ve;
    }
    whenIdle() {
        return this.size > 0 ? Ct.toPromise(this.onDrained) : Promise.resolve();
    }
    get onDrained() {
        return this._onDrained.event;
    }
    get size() {
        return this._size;
    }
    queue(e) {
        if (this._isDisposed) throw new Error("Object has been disposed");
        return this._size++, new Promise((t, n)=>{
            this.outstandingPromises.push({
                factory: e,
                c: t,
                e: n
            }), this.consume();
        });
    }
    consume() {
        for(; this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism;){
            const e = this.outstandingPromises.shift();
            this.runningPromises++;
            const t = e.factory();
            t.then(e.c, e.e), t.then(()=>this.consumed(), ()=>this.consumed());
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
}, zie = class extends aR {
    constructor(){
        super(1);
    }
}, Imi = class {
    constructor(){
        this.sequentializer = new Ami, this.tasks = 0;
    }
    queue(e) {
        return this.sequentializer.isRunning() ? this.sequentializer.queue(()=>this.sequentializer.run(this.tasks++, e())) : this.sequentializer.run(this.tasks++, e());
    }
}, zpn = class {
    constructor(){
        this.queues = new Map, this.drainers = new Set, this.drainListeners = void 0, this.drainListenerCount = 0, this._isDisposed = !1;
    }
    async whenDrained() {
        if (this.isDrained()) return;
        const e = new Am;
        return this.drainers.add(e), e.p;
    }
    isDrained() {
        for (const [, e] of this.queues)if (e.size > 0) return !1;
        return !0;
    }
    queueSize(e, t = pl) {
        const n = t.getComparisonKey(e);
        return this.queues.get(n)?.size ?? 0;
    }
    queueFor(e, t, n = pl) {
        if (this._isDisposed) return t();
        const i = n.getComparisonKey(e);
        let r = this.queues.get(i);
        if (!r) {
            r = new zie;
            const s = this.drainListenerCount++, o = Ct.once(r.onDrained)(()=>{
                r?.dispose(), this.queues.delete(i), this.onDidQueueDrain(), this.drainListeners?.deleteAndDispose(s), this.drainListeners?.size === 0 && (this.drainListeners.dispose(), this.drainListeners = void 0);
            });
            this.drainListeners || (this.drainListeners = new po), this.drainListeners.set(s, o), this.queues.set(i, r);
        }
        return r.queue(t);
    }
    onDidQueueDrain() {
        this.isDrained() && this.releaseDrainers();
    }
    releaseDrainers() {
        for (const e of this.drainers)e.complete();
        this.drainers.clear();
    }
    dispose() {
        this._isDisposed = !0;
        for (const [, e] of this.queues)e.dispose();
        this.queues.clear(), this.releaseDrainers(), this.drainListeners?.dispose(), this.drainListeners = void 0;
    }
}, wE = class {
    constructor(e, t){
        this._isDisposed = !1, this._token = -1, typeof e == "function" && typeof t == "number" && this.setIfNotSet(e, t);
    }
    dispose() {
        this.cancel(), this._isDisposed = !0;
    }
    cancel() {
        this._token !== -1 && (clearTimeout(this._token), this._token = -1);
    }
    cancelAndSet(e, t) {
        if (this._isDisposed) throw new Zu("Calling 'cancelAndSet' on a disposed TimeoutTimer");
        this.cancel(), this._token = setTimeout(()=>{
            this._token = -1, e();
        }, t);
    }
    setIfNotSet(e, t) {
        if (this._isDisposed) throw new Zu("Calling 'setIfNotSet' on a disposed TimeoutTimer");
        this._token === -1 && (this._token = setTimeout(()=>{
            this._token = -1, e();
        }, t));
    }
}, bI = class {
    constructor(){
        this.isDisposed = !1;
    }
    cancel() {
        this.disposable?.dispose(), this.disposable = void 0;
    }
    cancelAndSet(e, t, n = globalThis) {
        if (this.isDisposed) throw new Zu("Calling 'cancelAndSet' on a disposed IntervalTimer");
        this.cancel();
        const i = n.setInterval(()=>{
            e();
        }, t);
        this.disposable = new cn, this.disposable.value = rn(()=>{
            n.clearInterval(i);
        });
    }
    dispose() {
        this.cancel(), this.isDisposed = !0;
    }
}, ac = class {
    constructor(e, t){
        this.timeoutToken = -1, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this);
    }
    dispose() {
        this.cancel(), this.runner = null;
    }
    cancel() {
        this.isScheduled() && (clearTimeout(this.timeoutToken), this.timeoutToken = -1);
    }
    schedule(e = this.timeout) {
        this.cancel(), this.timeoutToken = setTimeout(this.timeoutHandler, e);
    }
    get delay() {
        return this.timeout;
    }
    set delay(e) {
        this.timeout = e;
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
}, DNt = class extends ac {
    constructor(e, t){
        super(e, t), this.units = [];
    }
    work(e) {
        this.units.push(e), this.isScheduled() || this.schedule();
    }
    doRun() {
        const e = this.units;
        this.units = [], this.runner?.(e);
    }
    dispose() {
        this.units = [], super.dispose();
    }
}, (function() {
    typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? Kpn = (e, t, n)=>{
        sJ(()=>{
            if (i) return;
            const r = Date.now() + 15;
            t(Object.freeze({
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
    } : Kpn = (e, t, n)=>{
        const i = e.requestIdleCallback(t, typeof n == "number" ? {
            timeout: n
        } : void 0);
        let r = !1;
        return {
            dispose () {
                r || (r = !0, e.cancelIdleCallback(i));
            }
        };
    }, kge = (e, t)=>Kpn(globalThis, e, t);
})(), _zr = class {
    constructor(e, t){
        this._didRun = !1, this._executor = ()=>{
            try {
                this._value = t();
            } catch (n) {
                this._error = n;
            } finally{
                this._didRun = !0;
            }
        }, this._handle = Kpn(e, ()=>this._executor());
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
}, Ypn = class extends _zr {
    constructor(e){
        super(globalThis, e);
    }
}, Ami = class {
    isRunning(e) {
        return typeof e == "number" ? this._running?.taskId === e : !!this._running;
    }
    get running() {
        return this._running?.promise;
    }
    cancelRunning() {
        this._running?.cancel();
    }
    run(e, t, n) {
        return this._running = {
            taskId: e,
            cancel: ()=>n?.(),
            promise: t
        }, t.then(()=>this.doneRunning(e), ()=>this.doneRunning(e)), t;
    }
    doneRunning(e) {
        this._running && e === this._running.taskId && (this._running = void 0, this.runQueued());
    }
    runQueued() {
        if (this._queued) {
            const e = this._queued;
            this._queued = void 0, e.run().then(e.promiseResolve, e.promiseReject);
        }
    }
    queue(e) {
        if (this._queued) this._queued.run = e;
        else {
            const { promise: t, resolve: n, reject: i } = Sge();
            this._queued = {
                run: e,
                promise: t,
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
}, UIc = class {
    constructor(e, t = ()=>Date.now()){
        this.interval = e, this.nowFn = t, this.lastIncrementTime = 0, this.value = 0;
    }
    increment() {
        const e = this.nowFn();
        return e - this.lastIncrementTime > this.interval && (this.lastIncrementTime = e, this.value = 0), this.value++, this.value;
    }
}, Am = class ySm {
    static fromPromise(t) {
        const n = new ySm;
        return n.settleWith(t), n;
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
        this.p = new Promise((t, n)=>{
            this.completeCallback = t, this.errorCallback = n;
        });
    }
    complete(t) {
        return new Promise((n)=>{
            this.completeCallback(t), this.outcome = {
                outcome: 0,
                value: t
            }, n();
        });
    }
    error(t) {
        return new Promise((n)=>{
            this.errorCallback(t), this.outcome = {
                outcome: 1,
                value: t
            }, n();
        });
    }
    settleWith(t) {
        return t.then((n)=>this.complete(n), (n)=>this.error(n));
    }
    cancel() {
        return this.error(new Rl);
    }
}, ((e)=>{
    async function t(i) {
        let r;
        const s = await Promise.all(i.map((o)=>o.then((a)=>a, (a)=>{
                r || (r = a);
            })));
        if (typeof r < "u") throw r;
        return s;
    }
    e.settled = t;
    function n(i) {
        return new Promise(async (r, s)=>{
            try {
                await i(r, s);
            } catch (o) {
                s(o);
            }
        });
    }
    e.withAsyncBody = n;
})(Rm || (Rm = {})), $Ic = class {
    constructor(e){
        this._value = void 0, this._error = void 0, this._isResolved = !1, this.promise = e.then((t)=>(this._value = t, this._isResolved = !0, t), (t)=>{
            throw this._error = t, this._isResolved = !0, t;
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
        if (!this._isResolved) throw new Zu("Promise is not resolved yet");
        if (this._error) throw this._error;
        return this._value;
    }
}, HIc = class {
    constructor(e){
        this._compute = e, this._promise = new Yf(()=>new $Ic(this._compute()));
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
}, Rmi = class Oye {
    static fromArray(t) {
        return new Oye((n)=>{
            n.emitMany(t);
        });
    }
    static fromPromise(t) {
        return new Oye(async (n)=>{
            n.emitMany(await t);
        });
    }
    static fromPromisesResolveOrder(t) {
        return new Oye(async (n)=>{
            await Promise.all(t.map(async (i)=>n.emitOne(await i)));
        });
    }
    static merge(t) {
        return new Oye(async (n)=>{
            await Promise.all(t.map(async (i)=>{
                for await (const r of i)n.emitOne(r);
            }));
        });
    }
    constructor(t, n){
        this._state = 0, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new ve, queueMicrotask(async ()=>{
            const i = {
                emitOne: (r)=>this.emitOne(r),
                emitMany: (r)=>this.emitMany(r),
                reject: (r)=>this.reject(r)
            };
            try {
                await Promise.resolve(t(i)), this.resolve();
            } catch (r) {
                this.reject(r);
            } finally{
                i.emitOne = void 0, i.emitMany = void 0, i.reject = void 0;
            }
        });
    }
    [Symbol.asyncIterator]() {
        let t = 0;
        return {
            next: async ()=>{
                do {
                    if (this._state === 2) throw this._error;
                    if (t < this._results.length) return {
                        done: !1,
                        value: this._results[t++]
                    };
                    if (this._state === 1) return {
                        done: !0,
                        value: void 0
                    };
                    await Ct.toPromise(this._onStateChanged.event);
                }while (!0)
            },
            return: async ()=>(this._onReturn?.(), {
                    done: !0,
                    value: void 0
                })
        };
    }
    static map(t, n) {
        return new Oye(async (i)=>{
            for await (const r of t)i.emitOne(n(r));
        });
    }
    map(t) {
        return Oye.map(this, t);
    }
    static filter(t, n) {
        return new Oye(async (i)=>{
            for await (const r of t)n(r) && i.emitOne(r);
        });
    }
    filter(t) {
        return Oye.filter(this, t);
    }
    static coalesce(t) {
        return Oye.filter(t, (n)=>!!n);
    }
    coalesce() {
        return Oye.coalesce(this);
    }
    static async toPromise(t) {
        const n = [];
        for await (const i of t)n.push(i);
        return n;
    }
    toPromise() {
        return Oye.toPromise(this);
    }
    emitOne(t) {
        this._state === 0 && (this._results.push(t), this._onStateChanged.fire());
    }
    emitMany(t) {
        this._state === 0 && (this._results = this._results.concat(t), this._onStateChanged.fire());
    }
    resolve() {
        this._state === 0 && (this._state = 1, this._onStateChanged.fire());
    }
    reject(t) {
        this._state === 0 && (this._state = 2, this._error = t, this._onStateChanged.fire());
    }
}, Rmi.EMPTY = Rmi.fromArray([]), eW = Rmi, WIc = class extends eW {
    constructor(e, t){
        super(t), this._source = e;
    }
    cancel() {
        this._source.cancel();
    }
}, GIc = class {
    constructor(e){
        this._deferred = new Am, this._asyncIterable = new eW((i)=>{
            if (t) {
                i.reject(t);
                return;
            }
            return n && i.emitMany(n), this._errorFn = (r)=>i.reject(r), this._emitFn = (r)=>i.emitOne(r), this._deferred.p;
        }, e);
        let t, n;
        this._emitFn = (i)=>{
            n || (n = []), n.push(i);
        }, this._errorFn = (i)=>{
            t || (t = i);
        };
    }
    get asyncIterable() {
        return this._asyncIterable;
    }
    resolve() {
        this._deferred.complete();
    }
    reject(e) {
        this._errorFn(e), this._deferred.complete();
    }
    emitOne(e) {
        this._emitFn(e);
    }
};

}
