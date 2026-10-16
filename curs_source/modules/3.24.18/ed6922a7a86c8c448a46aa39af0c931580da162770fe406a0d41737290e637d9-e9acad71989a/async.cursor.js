import { oto, tyv } from "./A3u.js";
import { Kl, Se, cn, rn, si, we } from "./HVr.js";
import { ac, bn } from "./async.js";
import { x } from "./tslib.es6.js";
var Ggd, Q0e, J0e, Vgd, SX, jgd, qgd, Z4e, Z$i, XMe, ZMe, ato, zgd;
export { Ggd, J0e, Q0e, SX, Vgd, XMe, Z$i, Z4e, ZMe, ato, jgd, qgd, zgd };
var __wakaru_ub_initialized = false;
export function ub() {
if (__wakaru_ub_initialized) return;
__wakaru_ub_initialized = true;
"use strict";
x(), bn(), si(), Se(), Ggd = 12, Q0e = class {
    constructor(e = Ggd, t = {}){
        this._maxSyncMs = e, this._now = t.now ?? Date.now, this._sliceStartMs = this._now();
    }
    shouldYield() {
        return this._now() - this._sliceStartMs >= this._maxSyncMs;
    }
    async yieldNow() {
        await Kl(0), this._sliceStartMs = this._now();
    }
    async yieldIfExhausted() {
        return this.shouldYield() ? (await this.yieldNow(), !0) : !1;
    }
}, J0e = class {
    constructor(e, t){
        this.timeoutMs = e, this.queue = [], this.waiter = void 0, this.wakeWaiter = void 0, this._end = !1, this._overflowed = !1, this.e = void 0, this._maxQueueSize = t?.maxQueueSize, this._onOverflow = t?.onOverflow;
    }
    get size() {
        return this.queue.length;
    }
    push(e) {
        if (this._maxQueueSize !== void 0 && this.queue.length >= this._maxQueueSize) {
            if (!this._overflowed) {
                this._overflowed = !0;
                const t = this._onOverflow ? this._onOverflow(this.queue.length, this._maxQueueSize) : new Error(`AsyncIterPushable: queue overflow (size=${this.queue.length}, max=${this._maxQueueSize})`);
                this.error(t);
            }
            return;
        }
        this.queue.push(e), this.wake();
    }
    end() {
        this._end = !0, this.wake();
    }
    error(e) {
        this.e ??= e, this.wake();
    }
    wake() {
        const e = this.wakeWaiter;
        e !== void 0 && (this.waiter = void 0, this.wakeWaiter = void 0, e());
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
        const e = this.waiter;
        let t = !1;
        if (this.timeoutMs === void 0 ? await e : t = await tyv(e, this.timeoutMs), this.e !== void 0) throw this.e;
        if (this.queue.length > 0) return {
            done: !1,
            value: this.queue.shift()
        };
        if (t || this._end) return this.waiter === e && (this.waiter = void 0, this.wakeWaiter = void 0), {
            done: !0,
            value: void 0
        };
        throw new Error("AsyncIterPushable: should not be here");
    }
}, Vgd = class extends we {
    constructor(e, t){
        super(), this._tick = e, this._options = t, this._pendingTick = this._register(new cn), this._disposeAbortController = new AbortController, this._tickInFlight = !1, this._runImmediatelyAfterCurrentTick = !1, this._consecutiveFailures = 0, this._register(rn(()=>this._disposeAbortController.abort()));
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
    start(e) {
        if (e?.immediate === !1) {
            this._lastTickCompletedAtMs = (this._options._testing?.now ?? Date.now)(), this.reschedule();
            return;
        }
        this._runTick();
    }
    reschedule(e) {
        this._tickInFlight || this._store.isDisposed || this._schedule(e ?? this._computeNextDelayMs());
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
            } catch (e) {
                this._disposeAbortController.signal.aborted || this._options.isCancellation?.(e) === !0 ? (this._consecutiveFailures = 0, this._lastError = void 0) : (this._consecutiveFailures++, this._lastError = e, this._options.onTickError?.(e));
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
    _schedule(e) {
        const t = ()=>void this._runTick(), n = this._options.context;
        if (n) {
            const i = n.setTimeout(t, e);
            this._pendingTick.value = rn(()=>n.clearTimeout(i));
        } else {
            const i = setTimeout(t, e);
            this._pendingTick.value = rn(()=>clearTimeout(i));
        }
    }
}, SX = class extends we {
    constructor(e, t){
        super(), this._options = t, this._poller = this._register(new Vgd(e, {
            computeNextDelayMs: ({ consecutiveFailures: n, lastError: i })=>this._computeNextDelayMs({
                    consecutiveFailures: n,
                    lastError: i
                }),
            onTickError: t.onTickError,
            isCancellation: t.isCancellation,
            context: t.context,
            _testing: {
                now: t._testing?.now
            }
        })), this._register(t.focus.onDidChangeFocus((n)=>this._onDidChangeFocus(n)));
    }
    start(e) {
        this._poller.start(e);
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
    _backoffComponentsMs({ baseIntervalMs: e, consecutiveFailures: t, lastError: n }) {
        const i = Math.min(e * Math.pow(2, t), this._options.maxIntervalMs), r = t > 0 ? this._options.getErrorBackoffMs?.(n) : void 0, s = r !== void 0 && Number.isFinite(r) ? Math.max(0, r) : 0;
        return {
            exponentialBackoffMs: i,
            requestedBackoffMs: s
        };
    }
    _backoffMs(e) {
        const { exponentialBackoffMs: t, requestedBackoffMs: n } = this._backoffComponentsMs(e);
        return Math.max(t, n);
    }
    _computeNextDelayMs({ consecutiveFailures: e, lastError: t }) {
        const n = this._options.focus.hasFocus ? this._options.focusedIntervalMs : this._options.unfocusedIntervalMs, i = this._backoffMs({
            baseIntervalMs: n,
            consecutiveFailures: e,
            lastError: t
        }), r = (this._options._testing?.randomFn ?? Math.random)() * .3 * i;
        return i + r;
    }
    _onDidChangeFocus(e) {
        if (!e) return;
        const { exponentialBackoffMs: t, requestedBackoffMs: n } = this._backoffComponentsMs({
            baseIntervalMs: this._options.focusedIntervalMs,
            consecutiveFailures: this._poller.consecutiveFailures,
            lastError: this._poller.lastError
        }), i = this._poller.lastTickCompletedAtMs, r = (this._options._testing?.now ?? Date.now)(), s = i === void 0 ? 0 : Math.max(0, i + t - r), o = Math.max(s, n);
        this._poller.reschedule(o);
    }
}, jgd = class {
    constructor(e, t, n){
        this._bufferedBytes = 0, this._options = t, this._queue = new J0e(e, n);
    }
    async push(e) {
        const t = this._queue.size;
        this._queue.push(e), this._queue.size > t && (this._bufferedBytes += e.byteLength), (this._backpressurePromise !== void 0 || this._bufferedBytes > this._options.queueHighWatermarkBytes) && (this._backpressurePromise ??= this._waitForLowWatermark().finally(()=>{
            this._backpressurePromise = void 0;
        }), await this._backpressurePromise);
    }
    end() {
        this._queue.end();
    }
    error(e) {
        this._queue.error(e);
    }
    async _waitForLowWatermark() {
        for(;;){
            if (this._options.shouldContinueWaiting && !this._options.shouldContinueWaiting() || this._bufferedBytes <= this._options.queueLowWatermarkBytes) return;
            await new Promise((e)=>{
                setTimeout(e, this._options.pollMs);
            });
        }
    }
    [Symbol.asyncIterator]() {
        const e = this._queue[Symbol.asyncIterator]();
        return {
            next: async ()=>{
                const t = await e.next();
                return t.done || (this._bufferedBytes = Math.max(0, this._bufferedBytes - t.value.byteLength)), t;
            }
        };
    }
}, qgd = class {
    constructor(e, t){
        if (this.isDisposed = !1, t.debounceDelayMs < 0) throw new Error("debounceDelayMs must be >= 0.");
        if (t.maxFlushDelayMs <= t.debounceDelayMs) throw new Error("maxFlushDelayMs must be greater than debounceDelayMs.");
        this.runner = e, this.debounceDelayMs = t.debounceDelayMs, this.maxFlushDelayMs = t.maxFlushDelayMs, this.debounceScheduler = new ac(()=>this.doRunTask(), this.debounceDelayMs), this.maxFlushScheduler = new ac(()=>this.doRunTask(), this.maxFlushDelayMs);
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
}, Z4e = class {
    constructor(e, t){
        this.max = e, this.counter = 0, this.waiting = [], this.abortSignal = t ?? new AbortController().signal;
    }
    getCount() {
        return this.counter;
    }
    async withSemaphore(e, t) {
        await this.acquire();
        const n = Date.now();
        try {
            return this.abortSignal.aborted ? Promise.reject("Aborted") : await e();
        } finally{
            this.release(), t && t(Date.now() - n);
        }
    }
    async withRetrySemaphore(e, t, n = 3) {
        if (this.abortSignal.aborted) return Promise.reject("Aborted");
        for(let i = 1; i < n; i++)try {
            return await this.withSemaphore(e, t);
        } catch  {
            await new Promise((s)=>setTimeout(s, 200 * i));
        }
        return await this.withSemaphore(e);
    }
    take() {
        if (this.waiting.length > 0 && this.counter < this.max) {
            this.counter++;
            const e = this.waiting.shift();
            e && e.resolve();
        }
    }
    acquire() {
        return this.counter < this.max ? (this.counter++, new Promise((e)=>{
            e();
        })) : new Promise((e, t)=>{
            this.waiting.push({
                resolve: e,
                err: t
            });
        });
    }
    release() {
        this.counter--, this.take();
    }
    purge() {
        const e = this.waiting.length;
        for(let t = 0; t < e; t++)this.waiting[t].err("Task has been purged.");
        return this.counter = 0, this.waiting = [], e;
    }
}, Z$i = class extends Z4e {
    constructor(){
        super(1);
    }
}, XMe = class {
    constructor(){
        this._cells = new Map;
    }
    get size() {
        return this._cells.size;
    }
    capture(e) {
        return oto(this._cell(e));
    }
    bump(e) {
        return this._cell(e).generation++, this.capture(e);
    }
    delete(e) {
        const t = this._cells.get(e);
        t !== void 0 && (t.generation++, this._cells.delete(e));
    }
    clear() {
        for (const e of this._cells.values())e.generation++;
        this._cells.clear();
    }
    _cell(e) {
        let t = this._cells.get(e);
        return t === void 0 && (t = {
            generation: 0
        }, this._cells.set(e, t)), t;
    }
}, ZMe = class {
    constructor(){
        this._cell = {
            generation: 0
        };
    }
    get isInFlight() {
        return this._inFlight !== void 0;
    }
    run(e) {
        const t = this._inFlight;
        if (t !== void 0) return t;
        const n = oto(this._cell);
        this._ownerToken = n;
        const i = this._runFenced(e, n).finally(()=>{
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
    async _runFenced(e, t) {
        const n = await e(t);
        return t.throwIfStale(), n;
    }
}, ato = class extends Error {
    constructor(e, t){
        super(t ?? `Request did not settle within ${e}ms`), this.name = "RequestDeadlineError", this.timeoutMs = e, this.cause = new DOMException(this.message, "TimeoutError");
    }
}, zgd = class {
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
    userWrite(e) {
        this._cell.generation++, this._value = e, this._hasUserWrite = !0;
    }
    beginSystemDecision() {
        return oto(this._cell);
    }
    commitSystemDecision(e, t) {
        if (!e.isCurrent()) return !1;
        const n = t(this._value);
        return n === void 0 ? !1 : (this._value = n, !0);
    }
    systemApply(e) {
        return this.commitSystemDecision(this.beginSystemDecision(), e);
    }
};

}
