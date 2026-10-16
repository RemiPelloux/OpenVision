import { Zt } from "./cancellation.js";
import { Ue, ht } from "./errors.js";
import { Br, ae, oe } from "./event.js";
import { Ct } from "./lazy.js";
import { Fr, Ss, _e, et } from "./lifecycle.js";
import { X, Zs } from "./platform.js";
import { M, c1 } from "./resources.js";
import { o2 } from "./symbols.js";
import { w } from "./tslib.es6.js";
var Bi, u1, Vi, h1, zi, Gi, l2, f1, d1, Hi, p1;
export { Bi, Gi, Hi, Vi, d1, f1, h1, l2, p1, u1, zi };
var __wakaru_St_initialized = false;
export function St() {
if (__wakaru_St_initialized) return;
__wakaru_St_initialized = true;
"use strict";
w(), Zt(), Ue(), Br(), et(), c1(), X(), o2(), Ct(), Bi = class {
    constructor(e){
        this._size = 0, this._isDisposed = !1, this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onDrained = new ae;
    }
    whenIdle() {
        return this.size > 0 ? oe.toPromise(this.onDrained) : Promise.resolve();
    }
    get onDrained() {
        return this._onDrained.event;
    }
    get size() {
        return this._size;
    }
    queue(e) {
        if (this._isDisposed) throw new Error("Object has been disposed");
        return this._size++, new Promise((t, r)=>{
            this.outstandingPromises.push({
                factory: e,
                c: t,
                e: r
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
}, u1 = class extends Bi {
    constructor(){
        super(1);
    }
}, Vi = class {
    constructor(){
        this.queues = new Map, this.drainers = new Set, this.drainListeners = void 0, this.drainListenerCount = 0, this._isDisposed = !1;
    }
    async whenDrained() {
        if (this.isDrained()) return;
        const e = new d1;
        return this.drainers.add(e), e.p;
    }
    isDrained() {
        for (const [, e] of this.queues)if (e.size > 0) return !1;
        return !0;
    }
    queueSize(e, t = M) {
        const r = t.getComparisonKey(e);
        return this.queues.get(r)?.size ?? 0;
    }
    queueFor(e, t, r = M) {
        if (this._isDisposed) return t();
        const s = r.getComparisonKey(e);
        let i = this.queues.get(s);
        if (!i) {
            i = new u1;
            const n = this.drainListenerCount++, a = oe.once(i.onDrained)(()=>{
                i?.dispose(), this.queues.delete(s), this.onDidQueueDrain(), this.drainListeners?.deleteAndDispose(n), this.drainListeners?.size === 0 && (this.drainListeners.dispose(), this.drainListeners = void 0);
            });
            this.drainListeners || (this.drainListeners = new Ss), this.drainListeners.set(n, a), this.queues.set(s, i);
        }
        return i.queue(t);
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
}, h1 = class {
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
}, zi = class extends h1 {
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
}, Gi = class extends _e {
    constructor(e, t){
        super(), this.options = e, this.handler = t, this.pendingWork = [], this.throttler = this._register(new Fr), this.disposed = !1, this.lastExecutionTime = 0;
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
        for (const r of e)this.pendingWork.push(r);
        const t = Date.now() - this.lastExecutionTime;
        return !this.throttler.value && (!this.options.waitThrottleDelayBetweenWorkUnits || t >= this.options.throttleDelay) ? this.doWork() : !this.throttler.value && this.options.waitThrottleDelayBetweenWorkUnits && this.scheduleThrottler(Math.max(this.options.throttleDelay - t, 0)), !0;
    }
    doWork() {
        this.lastExecutionTime = Date.now(), this.handler(this.pendingWork.splice(0, this.options.maxWorkChunkSize)), this.pendingWork.length > 0 && this.scheduleThrottler();
    }
    scheduleThrottler(e = this.options.throttleDelay) {
        this.throttler.value = new h1(()=>{
            this.throttler.clear(), this.doWork();
        }, e), this.throttler.value.schedule();
    }
    dispose() {
        super.dispose(), this.pendingWork.length = 0, this.disposed = !0;
    }
}, (function() {
    typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? f1 = (e, t, r)=>{
        Zs(()=>{
            if (s) return;
            const i = Date.now() + 15;
            t(Object.freeze({
                didTimeout: !0,
                timeRemaining () {
                    return Math.max(0, i - Date.now());
                }
            }));
        });
        let s = !1;
        return {
            dispose () {
                s || (s = !0);
            }
        };
    } : f1 = (e, t, r)=>{
        const s = e.requestIdleCallback(t, typeof r == "number" ? {
            timeout: r
        } : void 0);
        let i = !1;
        return {
            dispose () {
                i || (i = !0, e.cancelIdleCallback(s));
            }
        };
    }, l2 = (e, t)=>f1(globalThis, e, t);
})(), d1 = class So {
    static fromPromise(t) {
        const r = new So;
        return r.settleWith(t), r;
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
        this.p = new Promise((t, r)=>{
            this.completeCallback = t, this.errorCallback = r;
        });
    }
    complete(t) {
        return new Promise((r)=>{
            this.completeCallback(t), this.outcome = {
                outcome: 0,
                value: t
            }, r();
        });
    }
    error(t) {
        return new Promise((r)=>{
            this.errorCallback(t), this.outcome = {
                outcome: 1,
                value: t
            }, r();
        });
    }
    settleWith(t) {
        return t.then((r)=>this.complete(r), (r)=>this.error(r));
    }
    cancel() {
        return this.error(new ht);
    }
}, ((e)=>{
    async function t(s) {
        let i;
        const n = await Promise.all(s.map((a)=>a.then((o)=>o, (o)=>{
                i || (i = o);
            })));
        if (typeof i < "u") throw i;
        return n;
    }
    e.settled = t;
    function r(s) {
        return new Promise(async (i, n)=>{
            try {
                await s(i, n);
            } catch (a) {
                n(a);
            }
        });
    }
    e.withAsyncBody = r;
})(Hi || (Hi = {})), p1 = class he {
    static fromArray(t) {
        return new he((r)=>{
            r.emitMany(t);
        });
    }
    static fromPromise(t) {
        return new he(async (r)=>{
            r.emitMany(await t);
        });
    }
    static fromPromisesResolveOrder(t) {
        return new he(async (r)=>{
            await Promise.all(t.map(async (s)=>r.emitOne(await s)));
        });
    }
    static merge(t) {
        return new he(async (r)=>{
            await Promise.all(t.map(async (s)=>{
                for await (const i of s)r.emitOne(i);
            }));
        });
    }
    constructor(t, r){
        this._state = 0, this._results = [], this._error = null, this._onReturn = r, this._onStateChanged = new ae, queueMicrotask(async ()=>{
            const s = {
                emitOne: (i)=>this.emitOne(i),
                emitMany: (i)=>this.emitMany(i),
                reject: (i)=>this.reject(i)
            };
            try {
                await Promise.resolve(t(s)), this.resolve();
            } catch (i) {
                this.reject(i);
            } finally{
                s.emitOne = void 0, s.emitMany = void 0, s.reject = void 0;
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
                    await oe.toPromise(this._onStateChanged.event);
                }while (!0)
            },
            return: async ()=>(this._onReturn?.(), {
                    done: !0,
                    value: void 0
                })
        };
    }
    static map(t, r) {
        return new he(async (s)=>{
            for await (const i of t)s.emitOne(r(i));
        });
    }
    map(t) {
        return he.map(this, t);
    }
    static filter(t, r) {
        return new he(async (s)=>{
            for await (const i of t)r(i) && s.emitOne(i);
        });
    }
    filter(t) {
        return he.filter(this, t);
    }
    static coalesce(t) {
        return he.filter(t, (r)=>!!r);
    }
    coalesce() {
        return he.coalesce(this);
    }
    static async toPromise(t) {
        const r = [];
        for await (const s of t)r.push(s);
        return r;
    }
    toPromise() {
        return he.toPromise(this);
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
}, p1.EMPTY = p1.fromArray([]);

}
