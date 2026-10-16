import { Mt } from "./cancellation.js";
import { Ve, bm, kt } from "./errors.js";
import { N, O, ge, se } from "./event.js";
import { Xo } from "./lazy.js";
import { J, Ut, ei, j } from "./lifecycle.js";
import { m4, oe } from "./platform.js";
import { Ft, nt } from "./resources.js";
import { Bxe, _3 } from "./symbols.js";
import { h } from "./tslib.es6.js";
function rT() {
    let e, t;
    return {
        promise: new Promise((r, s)=>{
            e = r, t = s;
        }),
        resolve: e,
        reject: t
    };
}
var zR, k3, sT, S3, y3, iT, pa, Bl, aT, Gl, w3, YR, Vl, oT, xr, E3, JR, XR, cT, b3, R3, C3, wr, Qn, QR;
export { Bl, C3, E3, Gl, JR, QR, Qn, R3, S3, Vl, XR, YR, aT, b3, cT, iT, k3, oT, pa, rT, sT, w3, wr, xr, y3, zR };
var __wakaru_le_initialized = false;
export function le() {
if (__wakaru_le_initialized) return;
__wakaru_le_initialized = true;
"use strict";
h(), Mt(), Ve(), se(), j(), Ft(), oe(), Bxe(), Xo(), zR = class {
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
            this.activePromise.then((r)=>{
                this.activePromise = null, t(r);
            }, (r)=>{
                this.activePromise = null, n(r);
            });
        });
    }
    dispose() {
        this.isDisposed = !0;
    }
}, k3 = class {
    constructor(){
        this.current = Promise.resolve(null);
    }
    queue(e) {
        return this.current = this.current.then(()=>e(), ()=>e());
    }
}, sT = class {
    constructor(){
        this.promiseMap = new Map;
    }
    queue(e, t) {
        const r = (this.promiseMap.get(e) ?? Promise.resolve()).catch(()=>{}).then(t).finally(()=>{
            this.promiseMap.get(e) === r && this.promiseMap.delete(e);
        });
        return this.promiseMap.set(e, r), r;
    }
    keys() {
        return this.promiseMap.keys();
    }
}, S3 = (e, t)=>{
    let n = !0;
    const r = setTimeout(()=>{
        n = !1, t();
    }, e);
    return {
        isTriggered: ()=>n,
        dispose: ()=>{
            clearTimeout(r), n = !1;
        }
    };
}, y3 = (e)=>{
    let t = !0;
    return queueMicrotask(()=>{
        t && (t = !1, e());
    }), {
        isTriggered: ()=>t,
        dispose: ()=>{
            t = !1;
        }
    };
}, iT = class {
    constructor(e){
        this.defaultDelay = e, this._isDisposed = !1, this.deferred = null, this.completionPromise = null, this.doResolve = null, this.doReject = null, this.task = null;
    }
    trigger(e, t = this.defaultDelay) {
        if (this._isDisposed) return Promise.reject(new kt);
        this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((r, s)=>{
            this.doResolve = r, this.doReject = s;
        }).then(()=>{
            if (this.completionPromise = null, this.doResolve = null, this.task) {
                const r = this.task;
                return this.task = null, r();
            }
        }));
        const n = ()=>{
            this.deferred = null, this.doResolve?.(null);
        };
        return this.deferred = t === _3 ? y3(n) : S3(t, n), this.completionPromise;
    }
    isTriggered() {
        return !!this.deferred?.isTriggered();
    }
    cancel() {
        this.cancelTimeout(), this.completionPromise && (this.doReject?.(new kt), this.completionPromise = null);
    }
    cancelTimeout() {
        this.deferred?.dispose(), this.deferred = null;
    }
    dispose() {
        this._isDisposed = !0, this.cancel();
    }
}, pa = class {
    constructor(e){
        this.delayer = new iT(e), this.throttler = new zR;
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
}, Bl = class {
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
}, aT = class {
    constructor(e){
        this._size = 0, this._isDisposed = !1, this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onDrained = new N;
    }
    whenIdle() {
        return this.size > 0 ? O.toPromise(this.onDrained) : Promise.resolve();
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
}, Gl = class extends aT {
    constructor(){
        super(1);
    }
}, w3 = class {
    constructor(){
        this.sequentializer = new C3, this.tasks = 0;
    }
    queue(e) {
        return this.sequentializer.isRunning() ? this.sequentializer.queue(()=>this.sequentializer.run(this.tasks++, e())) : this.sequentializer.run(this.tasks++, e());
    }
}, YR = class {
    constructor(){
        this.queues = new Map, this.drainers = new Set, this.drainListeners = void 0, this.drainListenerCount = 0, this._isDisposed = !1;
    }
    async whenDrained() {
        if (this.isDrained()) return;
        const e = new wr;
        return this.drainers.add(e), e.p;
    }
    isDrained() {
        for (const [, e] of this.queues)if (e.size > 0) return !1;
        return !0;
    }
    queueSize(e, t = nt) {
        const n = t.getComparisonKey(e);
        return this.queues.get(n)?.size ?? 0;
    }
    queueFor(e, t, n = nt) {
        if (this._isDisposed) return t();
        const r = n.getComparisonKey(e);
        let s = this.queues.get(r);
        if (!s) {
            s = new Gl;
            const i = this.drainListenerCount++, a = O.once(s.onDrained)(()=>{
                s?.dispose(), this.queues.delete(r), this.onDidQueueDrain(), this.drainListeners?.deleteAndDispose(i), this.drainListeners?.size === 0 && (this.drainListeners.dispose(), this.drainListeners = void 0);
            });
            this.drainListeners || (this.drainListeners = new ei), this.drainListeners.set(i, a), this.queues.set(r, s);
        }
        return s.queue(t);
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
}, Vl = class {
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
        if (this._isDisposed) throw new bm("Calling 'cancelAndSet' on a disposed TimeoutTimer");
        this.cancel(), this._token = setTimeout(()=>{
            this._token = -1, e();
        }, t);
    }
    setIfNotSet(e, t) {
        if (this._isDisposed) throw new bm("Calling 'setIfNotSet' on a disposed TimeoutTimer");
        this._token === -1 && (this._token = setTimeout(()=>{
            this._token = -1, e();
        }, t));
    }
}, oT = class {
    constructor(){
        this.isDisposed = !1;
    }
    cancel() {
        this.disposable?.dispose(), this.disposable = void 0;
    }
    cancelAndSet(e, t, n = globalThis) {
        if (this.isDisposed) throw new bm("Calling 'cancelAndSet' on a disposed IntervalTimer");
        this.cancel();
        const r = n.setInterval(()=>{
            e();
        }, t);
        this.disposable = new Ut, this.disposable.value = ge(()=>{
            n.clearInterval(r);
        });
    }
    dispose() {
        this.cancel(), this.isDisposed = !0;
    }
}, xr = class {
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
}, E3 = class extends xr {
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
}, JR = class extends J {
    constructor(e, t){
        super(), this.options = e, this.handler = t, this.pendingWork = [], this.throttler = this._register(new Ut), this.disposed = !1, this.lastExecutionTime = 0;
    }
    get pending() {
        return this.pendingWork.length;
    }
    work(e) {
        if (this.disposed) return !1;
        if (typeof this.options.maxBufferedWork == "number") {
            if (this.throttler.value) {
                if (this.pending + e.length > this.options.maxBufferedWork) return !1;
            } else if (this.pending + e.length - this.options.maxWorkChunkSize > this.options.maxBufferedWork) return !1;
        }
        for (const n of e)this.pendingWork.push(n);
        const t = Date.now() - this.lastExecutionTime;
        return !this.throttler.value && (!this.options.waitThrottleDelayBetweenWorkUnits || t >= this.options.throttleDelay) ? this.doWork() : !this.throttler.value && this.options.waitThrottleDelayBetweenWorkUnits && this.scheduleThrottler(Math.max(this.options.throttleDelay - t, 0)), !0;
    }
    doWork() {
        this.lastExecutionTime = Date.now(), this.handler(this.pendingWork.splice(0, this.options.maxWorkChunkSize)), this.pendingWork.length > 0 && this.scheduleThrottler();
    }
    scheduleThrottler(e = this.options.throttleDelay) {
        this.throttler.value = new xr(()=>{
            this.throttler.clear(), this.doWork();
        }, e), this.throttler.value.schedule();
    }
    dispose() {
        super.dispose(), this.pendingWork.length = 0, this.disposed = !0;
    }
}, (function() {
    typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? cT = (e, t, n)=>{
        m4(()=>{
            if (r) return;
            const s = Date.now() + 15;
            t(Object.freeze({
                didTimeout: !0,
                timeRemaining () {
                    return Math.max(0, s - Date.now());
                }
            }));
        });
        let r = !1;
        return {
            dispose () {
                r || (r = !0);
            }
        };
    } : cT = (e, t, n)=>{
        const r = e.requestIdleCallback(t, typeof n == "number" ? {
            timeout: n
        } : void 0);
        let s = !1;
        return {
            dispose () {
                s || (s = !0, e.cancelIdleCallback(r));
            }
        };
    }, XR = (e, t)=>cT(globalThis, e, t);
})(), b3 = class {
    constructor(e, t){
        this._didRun = !1, this._executor = ()=>{
            try {
                this._value = t();
            } catch (n) {
                this._error = n;
            } finally{
                this._didRun = !0;
            }
        }, this._handle = cT(e, ()=>this._executor());
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
}, R3 = class extends b3 {
    constructor(e){
        super(globalThis, e);
    }
}, C3 = class {
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
            const { promise: t, resolve: n, reject: r } = rT();
            this._queued = {
                run: e,
                promise: t,
                promiseResolve: n,
                promiseReject: r
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
}, wr = class K9e {
    static fromPromise(t) {
        const n = new K9e;
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
        return this.error(new kt);
    }
}, ((e)=>{
    async function t(r) {
        let s;
        const i = await Promise.all(r.map((a)=>a.then((o)=>o, (o)=>{
                s || (s = o);
            })));
        if (typeof s < "u") throw s;
        return i;
    }
    e.settled = t;
    function n(r) {
        return new Promise(async (s, i)=>{
            try {
                await r(s, i);
            } catch (a) {
                i(a);
            }
        });
    }
    e.withAsyncBody = n;
})(Qn || (Qn = {})), QR = class zs {
    static fromArray(t) {
        return new zs((n)=>{
            n.emitMany(t);
        });
    }
    static fromPromise(t) {
        return new zs(async (n)=>{
            n.emitMany(await t);
        });
    }
    static fromPromisesResolveOrder(t) {
        return new zs(async (n)=>{
            await Promise.all(t.map(async (r)=>n.emitOne(await r)));
        });
    }
    static merge(t) {
        return new zs(async (n)=>{
            await Promise.all(t.map(async (r)=>{
                for await (const s of r)n.emitOne(s);
            }));
        });
    }
    constructor(t, n){
        this._state = 0, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new N, queueMicrotask(async ()=>{
            const r = {
                emitOne: (s)=>this.emitOne(s),
                emitMany: (s)=>this.emitMany(s),
                reject: (s)=>this.reject(s)
            };
            try {
                await Promise.resolve(t(r)), this.resolve();
            } catch (s) {
                this.reject(s);
            } finally{
                r.emitOne = void 0, r.emitMany = void 0, r.reject = void 0;
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
                    await O.toPromise(this._onStateChanged.event);
                }while (!0)
            },
            return: async ()=>(this._onReturn?.(), {
                    done: !0,
                    value: void 0
                })
        };
    }
    static map(t, n) {
        return new zs(async (r)=>{
            for await (const s of t)r.emitOne(n(s));
        });
    }
    map(t) {
        return zs.map(this, t);
    }
    static filter(t, n) {
        return new zs(async (r)=>{
            for await (const s of t)n(s) && r.emitOne(s);
        });
    }
    filter(t) {
        return zs.filter(this, t);
    }
    static coalesce(t) {
        return zs.filter(t, (n)=>!!n);
    }
    coalesce() {
        return zs.coalesce(this);
    }
    static async toPromise(t) {
        const n = [];
        for await (const r of t)n.push(r);
        return n;
    }
    toPromise() {
        return zs.toPromise(this);
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
}, QR.EMPTY = QR.fromArray([]);

}
