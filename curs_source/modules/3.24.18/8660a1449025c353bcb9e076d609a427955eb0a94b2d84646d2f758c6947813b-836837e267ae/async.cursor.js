import { Ei, Pn, Qe, Vn, Wd, st } from "./Iwo.js";
import { Yu, qn } from "./async.js";
import { E } from "./tslib.es6.js";
import { fF1, j8a } from "./yBp.js";
var cbm, Ebe, nPe, $8a, lie, ubm, dbm, cot, LKr, G6e, ype, H8a, hbm;
export { $8a, Ebe, G6e, H8a, LKr, cbm, cot, dbm, hbm, lie, nPe, ubm, ype };
var __wakaru_c__initialized = false;
export function c_() {
if (__wakaru_c__initialized) return;
__wakaru_c__initialized = true;
"use strict";
E(), qn(), Ei(), Qe(), cbm = 12, Ebe = class {
    constructor(t = cbm, e = {}){
        this._maxSyncMs = t, this._now = e.now ?? Date.now, this._sliceStartMs = this._now();
    }
    shouldYield() {
        return this._now() - this._sliceStartMs >= this._maxSyncMs;
    }
    async yieldNow() {
        await Wd(0), this._sliceStartMs = this._now();
    }
    async yieldIfExhausted() {
        return this.shouldYield() ? (await this.yieldNow(), !0) : !1;
    }
}, nPe = class {
    constructor(t, e){
        this.timeoutMs = t, this.queue = [], this.waiter = void 0, this.wakeWaiter = void 0, this._end = !1, this._overflowed = !1, this.e = void 0, this._maxQueueSize = e?.maxQueueSize, this._onOverflow = e?.onOverflow;
    }
    get size() {
        return this.queue.length;
    }
    push(t) {
        if (this._maxQueueSize !== void 0 && this.queue.length >= this._maxQueueSize) {
            if (!this._overflowed) {
                this._overflowed = !0;
                const e = this._onOverflow ? this._onOverflow(this.queue.length, this._maxQueueSize) : new Error(`AsyncIterPushable: queue overflow (size=${this.queue.length}, max=${this._maxQueueSize})`);
                this.error(e);
            }
            return;
        }
        this.queue.push(t), this.wake();
    }
    end() {
        this._end = !0, this.wake();
    }
    error(t) {
        this.e ??= t, this.wake();
    }
    wake() {
        const t = this.wakeWaiter;
        t !== void 0 && (this.waiter = void 0, this.wakeWaiter = void 0, t());
    }
    [Symbol.asyncIterator]() {
        return {
            next: ()=>this.e !== void 0 ? Promise.reject(this.e) : this.queue.length > 0 ? Promise.resolve({
                    done: !1,
                    value: this.queue.shift()
                }) : this._end ? Promise.resolve({
                    done: !0,
                    value: void 0
                }) : this.waitForNext()
        };
    }
    async waitForNext() {
        this.waiter === void 0 && (this.waiter = new Promise((n)=>{
            this.wakeWaiter = n;
        }));
        const t = this.waiter;
        let e = !1;
        if (this.timeoutMs === void 0 ? await t : e = await fF1(t, this.timeoutMs), this.e !== void 0) throw this.e;
        if (this.queue.length > 0) return {
            done: !1,
            value: this.queue.shift()
        };
        if (e || this._end) return this.waiter === t && (this.waiter = void 0, this.wakeWaiter = void 0), {
            done: !0,
            value: void 0
        };
        throw new Error("AsyncIterPushable: should not be here");
    }
}, $8a = class extends st {
    constructor(t, e){
        super(), this._tick = t, this._options = e, this._pendingTick = this._register(new Vn), this._disposeAbortController = new AbortController, this._tickInFlight = !1, this._runImmediatelyAfterCurrentTick = !1, this._consecutiveFailures = 0, this._register(Pn(()=>this._disposeAbortController.abort()));
    }
    get isTickInFlight() {
        return this._tickInFlight;
    }
    get consecutiveFailures() {
        return this._consecutiveFailures;
    }
    get lastError() {
        return this._lastError;
    }
    get lastTickCompletedAtMs() {
        return this._lastTickCompletedAtMs;
    }
    start(t) {
        if (t?.immediate === !1) {
            this._lastTickCompletedAtMs = (this._options._testing?.now ?? Date.now)(), this.reschedule();
            return;
        }
        this._runTick();
    }
    reschedule(t) {
        this._tickInFlight || this._store.isDisposed || this._schedule(t ?? this._computeNextDelayMs());
    }
    runNow() {
        if (!this._store.isDisposed) {
            if (this._tickInFlight) {
                this._runImmediatelyAfterCurrentTick = !0;
                return;
            }
            this._runTick();
        }
    }
    resetBackoff() {
        this._consecutiveFailures = 0, this._lastError = void 0, this.reschedule();
    }
    notifyExternalTickCompleted() {
        this._lastTickCompletedAtMs = (this._options._testing?.now ?? Date.now)();
    }
    async _runTick() {
        if (!(this._tickInFlight || this._store.isDisposed)) {
            this._pendingTick.clear(), this._tickInFlight = !0;
            try {
                await this._tick(this._disposeAbortController.signal), this._consecutiveFailures = 0, this._lastError = void 0;
            } catch (t) {
                this._disposeAbortController.signal.aborted || this._options.isCancellation?.(t) === !0 ? (this._consecutiveFailures = 0, this._lastError = void 0) : (this._consecutiveFailures++, this._lastError = t, this._options.onTickError?.(t));
            } finally{
                this._tickInFlight = !1, this._lastTickCompletedAtMs = (this._options._testing?.now ?? Date.now)();
            }
            if (!this._store.isDisposed) {
                if (this._runImmediatelyAfterCurrentTick) {
                    this._runImmediatelyAfterCurrentTick = !1, this._runTick();
                    return;
                }
                this._schedule(this._computeNextDelayMs());
            }
        }
    }
    _computeNextDelayMs() {
        return this._options.computeNextDelayMs({
            consecutiveFailures: this._consecutiveFailures,
            lastError: this._lastError
        });
    }
    _schedule(t) {
        const e = ()=>void this._runTick(), n = this._options.context;
        if (n) {
            const i = n.setTimeout(e, t);
            this._pendingTick.value = Pn(()=>n.clearTimeout(i));
        } else {
            const i = setTimeout(e, t);
            this._pendingTick.value = Pn(()=>clearTimeout(i));
        }
    }
}, lie = class extends st {
    constructor(t, e){
        super(), this._options = e, this._poller = this._register(new $8a(t, {
            computeNextDelayMs: ({ consecutiveFailures: n, lastError: i })=>this._computeNextDelayMs({
                    consecutiveFailures: n,
                    lastError: i
                }),
            onTickError: e.onTickError,
            isCancellation: e.isCancellation,
            context: e.context,
            _testing: {
                now: e._testing?.now
            }
        })), this._register(e.focus.onDidChangeFocus((n)=>this._onDidChangeFocus(n)));
    }
    start(t) {
        this._poller.start(t);
    }
    runNow() {
        this._poller.runNow();
    }
    resetBackoff() {
        this._poller.resetBackoff();
    }
    notifyExternalTickCompleted() {
        this._poller.notifyExternalTickCompleted();
    }
    _backoffComponentsMs({ baseIntervalMs: t, consecutiveFailures: e, lastError: n }) {
        const i = Math.min(t * Math.pow(2, e), this._options.maxIntervalMs), r = e > 0 ? this._options.getErrorBackoffMs?.(n) : void 0, s = r !== void 0 && Number.isFinite(r) ? Math.max(0, r) : 0;
        return {
            exponentialBackoffMs: i,
            requestedBackoffMs: s
        };
    }
    _backoffMs(t) {
        const { exponentialBackoffMs: e, requestedBackoffMs: n } = this._backoffComponentsMs(t);
        return Math.max(e, n);
    }
    _computeNextDelayMs({ consecutiveFailures: t, lastError: e }) {
        const n = this._options.focus.hasFocus ? this._options.focusedIntervalMs : this._options.unfocusedIntervalMs, i = this._backoffMs({
            baseIntervalMs: n,
            consecutiveFailures: t,
            lastError: e
        }), r = (this._options._testing?.randomFn ?? Math.random)() * .3 * i;
        return i + r;
    }
    _onDidChangeFocus(t) {
        if (!t) return;
        const { exponentialBackoffMs: e, requestedBackoffMs: n } = this._backoffComponentsMs({
            baseIntervalMs: this._options.focusedIntervalMs,
            consecutiveFailures: this._poller.consecutiveFailures,
            lastError: this._poller.lastError
        }), i = this._poller.lastTickCompletedAtMs, r = (this._options._testing?.now ?? Date.now)(), s = i === void 0 ? 0 : Math.max(0, i + e - r), o = Math.max(s, n);
        this._poller.reschedule(o);
    }
}, ubm = class {
    constructor(t, e, n){
        this._bufferedBytes = 0, this._options = e, this._queue = new nPe(t, n);
    }
    async push(t) {
        const e = this._queue.size;
        this._queue.push(t), this._queue.size > e && (this._bufferedBytes += t.byteLength), (this._backpressurePromise !== void 0 || this._bufferedBytes > this._options.queueHighWatermarkBytes) && (this._backpressurePromise ??= this._waitForLowWatermark().finally(()=>{
            this._backpressurePromise = void 0;
        }), await this._backpressurePromise);
    }
    end() {
        this._queue.end();
    }
    error(t) {
        this._queue.error(t);
    }
    async _waitForLowWatermark() {
        for(;;){
            if (this._options.shouldContinueWaiting && !this._options.shouldContinueWaiting() || this._bufferedBytes <= this._options.queueLowWatermarkBytes) return;
            await new Promise((t)=>{
                setTimeout(t, this._options.pollMs);
            });
        }
    }
    [Symbol.asyncIterator]() {
        const t = this._queue[Symbol.asyncIterator]();
        return {
            next: async ()=>{
                const e = await t.next();
                return e.done || (this._bufferedBytes = Math.max(0, this._bufferedBytes - e.value.byteLength)), e;
            }
        };
    }
}, dbm = class {
    constructor(t, e){
        if (this.isDisposed = !1, e.debounceDelayMs < 0) throw new Error("debounceDelayMs must be >= 0.");
        if (e.maxFlushDelayMs <= e.debounceDelayMs) throw new Error("maxFlushDelayMs must be greater than debounceDelayMs.");
        this.runner = t, this.debounceDelayMs = e.debounceDelayMs, this.maxFlushDelayMs = e.maxFlushDelayMs, this.debounceScheduler = new Yu(()=>this.doRunTask(), this.debounceDelayMs), this.maxFlushScheduler = new Yu(()=>this.doRunTask(), this.maxFlushDelayMs);
    }
    trigger() {
        this.isDisposed || (this.debounceScheduler.schedule(this.debounceDelayMs), this.maxFlushScheduler.isScheduled() || this.maxFlushScheduler.schedule(this.maxFlushDelayMs));
    }
    cancel() {
        this.debounceScheduler.cancel(), this.maxFlushScheduler.cancel();
    }
    flush() {
        this.isDisposed || !this.debounceScheduler.isScheduled() && !this.maxFlushScheduler.isScheduled() || (this.cancel(), this.doRunTask());
    }
    dispose() {
        this.isDisposed || (this.isDisposed = !0, this.debounceScheduler.dispose(), this.maxFlushScheduler.dispose());
    }
    doRunTask() {
        if (!this.isDisposed) {
            this.cancel();
            try {
                this.runner();
            } catch  {}
        }
    }
}, cot = class {
    constructor(t, e){
        this.max = t, this.counter = 0, this.waiting = [], this.abortSignal = e ?? new AbortController().signal;
    }
    getCount() {
        return this.counter;
    }
    async withSemaphore(t, e) {
        await this.acquire();
        const n = Date.now();
        try {
            return this.abortSignal.aborted ? Promise.reject("Aborted") : await t();
        } finally{
            this.release(), e && e(Date.now() - n);
        }
    }
    async withRetrySemaphore(t, e, n = 3) {
        if (this.abortSignal.aborted) return Promise.reject("Aborted");
        for(let i = 1; i < n; i++)try {
            return await this.withSemaphore(t, e);
        } catch  {
            await new Promise((s)=>setTimeout(s, 200 * i));
        }
        return await this.withSemaphore(t);
    }
    take() {
        if (this.waiting.length > 0 && this.counter < this.max) {
            this.counter++;
            const t = this.waiting.shift();
            t && t.resolve();
        }
    }
    acquire() {
        return this.counter < this.max ? (this.counter++, new Promise((t)=>{
            t();
        })) : new Promise((t, e)=>{
            this.waiting.push({
                resolve: t,
                err: e
            });
        });
    }
    release() {
        this.counter--, this.take();
    }
    purge() {
        const t = this.waiting.length;
        for(let e = 0; e < t; e++)this.waiting[e].err("Task has been purged.");
        return this.counter = 0, this.waiting = [], t;
    }
}, LKr = class extends cot {
    constructor(){
        super(1);
    }
}, G6e = class {
    constructor(){
        this._cells = new Map;
    }
    get size() {
        return this._cells.size;
    }
    capture(t) {
        return j8a(this._cell(t));
    }
    bump(t) {
        return this._cell(t).generation++, this.capture(t);
    }
    delete(t) {
        const e = this._cells.get(t);
        e !== void 0 && (e.generation++, this._cells.delete(t));
    }
    clear() {
        for (const t of this._cells.values())t.generation++;
        this._cells.clear();
    }
    _cell(t) {
        let e = this._cells.get(t);
        return e === void 0 && (e = {
            generation: 0
        }, this._cells.set(t, e)), e;
    }
}, ype = class {
    constructor(){
        this._cell = {
            generation: 0
        };
    }
    get isInFlight() {
        return this._inFlight !== void 0;
    }
    run(t) {
        const e = this._inFlight;
        if (e !== void 0) return e;
        const n = j8a(this._cell);
        this._ownerToken = n;
        const i = this._runFenced(t, n).finally(()=>{
            this._ownerToken === n && (this._ownerToken = void 0, this._inFlight = void 0);
        });
        return this._inFlight = i, i;
    }
    invalidate() {
        this._cell.generation++, this._ownerToken = void 0, this._inFlight = void 0;
    }
    dispose() {
        this.invalidate();
    }
    async _runFenced(t, e) {
        const n = await t(e);
        return e.throwIfStale(), n;
    }
}, H8a = class extends Error {
    constructor(t, e){
        super(e ?? `Request did not settle within ${t}ms`), this.name = "RequestDeadlineError", this.timeoutMs = t, this.cause = new DOMException(this.message, "TimeoutError");
    }
}, hbm = class {
    constructor(){
        this._cell = {
            generation: 0
        }, this._hasUserWrite = !1;
    }
    get value() {
        return this._value;
    }
    get hasUserWrite() {
        return this._hasUserWrite;
    }
    userWrite(t) {
        this._cell.generation++, this._value = t, this._hasUserWrite = !0;
    }
    beginSystemDecision() {
        return j8a(this._cell);
    }
    commitSystemDecision(t, e) {
        if (!t.isCurrent()) return !1;
        const n = e(this._value);
        return n === void 0 ? !1 : (this._value = n, !0);
    }
    systemApply(t) {
        return this.commitSystemDecision(this.beginSystemDecision(), t);
    }
};

}
