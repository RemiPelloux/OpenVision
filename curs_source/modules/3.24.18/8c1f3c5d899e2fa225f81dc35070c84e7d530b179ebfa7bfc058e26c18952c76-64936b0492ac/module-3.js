Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ValueWithChangeEvent = exports.Relay = exports.EventBufferer = exports.DynamicListEventMultiplexer = exports.EventMultiplexer = exports.MicrotaskEmitter = exports.DebounceEmitter = exports.PauseableEmitter = exports.AsyncEmitter = exports.createEventDeliveryQueue = exports.Emitter = exports.ListenerRefusalError = exports.ListenerLeakError = exports.EventProfiling = exports.Event = void 0, exports.setGlobalLeakWarningThreshold = function(e) {
    const t = c;
    return c = e, {
        dispose () {
            c = t;
        }
    };
}, exports.trackSetChanges = function(e, t, n) {
    const r = new o.DisposableMap;
    let s = new Set(e());
    for (const e of s)r.set(e, n(e));
    const a = new o.DisposableStore;
    return a.add(t(()=>{
        const t = e(), o = (0, i.diffSets)(s, t);
        for (const e of o.removed)r.deleteAndDispose(e);
        for (const e of o.added)r.set(e, n(e));
        s = new Set(t);
    })), a.add(r), a;
};
const i = require("./module-846.js"), r = require("./module-976.js"), s = require("./module-46.js"), o = require("./module-147.js"), a = require("./module-118.js"), u = require("./module-252.js");
var l;
!function(e) {
    function t(e) {
        false;
    }
    function n(e) {
        return (t, n = null, i)=>{
            let r, s = !1;
            return r = e((e)=>{
                if (!s) return r ? r.dispose() : s = !0, t.call(n, e);
            }, null, i), s && r.dispose(), r;
        };
    }
    function i(e, t, n) {
        return s((n, i = null, r)=>e((e)=>n.call(i, t(e)), null, r), n);
    }
    function r(e, t, n) {
        return s((n, i = null, r)=>e((e)=>t(e) && n.call(i, e), null, r), n);
    }
    function s(e, n) {
        let i;
        const r = {
            onWillAddFirstListener () {
                i = e(s.fire, s);
            },
            onDidRemoveLastListener () {
                i?.dispose();
            }
        };
        n || t();
        const s = new v(r);
        return n?.add(s), s.event;
    }
    function a(e, n, i = 100, r = !1, s = !1, o, a) {
        let u, l, h, c, f = 0;
        const d = {
            leakWarningThreshold: o,
            onWillAddFirstListener () {
                u = e((e)=>{
                    f++, l = n(l, e), r && !h && (g.fire(l), l = void 0), c ??= ()=>{
                        const e = l;
                        l = void 0, h = void 0, (!r || f > 1) && g.fire(e), f = 0;
                    }, "number" == typeof i ? (clearTimeout(h), h = setTimeout(c, i)) : void 0 === h && (h = 0, queueMicrotask(c));
                });
            },
            onWillRemoveListener () {
                s && f > 0 && c?.();
            },
            onDidRemoveLastListener () {
                c = void 0, u.dispose();
            }
        };
        a || t();
        const g = new v(d);
        return a?.add(g), g.event;
    }
    e.None = ()=>o.Disposable.None, e.defer = function(e, t) {
        return a(e, ()=>{}, 0, void 0, !0, void 0, t);
    }, e.once = n, e.onceIf = function(t, n) {
        return e.once(e.filter(t, n));
    }, e.map = i, e.forEach = function(e, t, n) {
        return s((n, i = null, r)=>e((e)=>{
                t(e), n.call(i, e);
            }, null, r), n);
    }, e.filter = r, e.signal = function(e) {
        return e;
    }, e.any = function(...e) {
        return (t, n = null, i)=>(function(e, t) {
                t instanceof Array ? t.push(e) : t && t.add(e);
                return e;
            })((0, o.combinedDisposable)(...e.map((e)=>e((e)=>t.call(n, e)))), i);
    }, e.reduce = function(e, t, n, r) {
        let s = n;
        return i(e, (e)=>(s = t(s, e), s), r);
    }, e.debounce = a, e.accumulate = function(t, n = 0, i) {
        return e.debounce(t, (e, t)=>e ? (e.push(t), e) : [
                t
            ], n, void 0, !0, void 0, i);
    }, e.latch = function(e, t = (e, t)=>e === t, n) {
        let i, s = !0;
        return r(e, (e)=>{
            const n = s || !t(e, i);
            return s = !1, i = e, n;
        }, n);
    }, e.split = function(t, n, i) {
        return [
            e.filter(t, n, i),
            e.filter(t, (e)=>!n(e), i)
        ];
    }, e.buffer = function(e, t = !1, n = [], i) {
        let r = n.slice(), s = e((e)=>{
            r ? r.push(e) : a.fire(e);
        });
        i && i.add(s);
        const o = ()=>{
            r?.forEach((e)=>a.fire(e)), r = null;
        }, a = new v({
            onWillAddFirstListener () {
                s || (s = e((e)=>a.fire(e)), i && i.add(s));
            },
            onDidAddFirstListener () {
                r && (t ? setTimeout(o) : o());
            },
            onDidRemoveLastListener () {
                s && s.dispose(), s = null;
            }
        });
        return i && i.add(a), a.event;
    }, e.chain = function(e, t) {
        return (n, i, r)=>{
            const s = t(new l);
            return e(function(e) {
                const t = s.evaluate(e);
                t !== u && n.call(i, t);
            }, void 0, r);
        };
    };
    const u = Symbol("HaltChainable");
    class l {
        constructor(){
            this.steps = [];
        }
        map(e) {
            return this.steps.push(e), this;
        }
        forEach(e) {
            return this.steps.push((t)=>(e(t), t)), this;
        }
        filter(e) {
            return this.steps.push((t)=>e(t) ? t : u), this;
        }
        reduce(e, t) {
            let n = t;
            return this.steps.push((t)=>(n = e(n, t), n)), this;
        }
        latch(e = (e, t)=>e === t) {
            let t, n = !0;
            return this.steps.push((i)=>{
                const r = n || !e(i, t);
                return n = !1, t = i, r ? i : u;
            }), this;
        }
        evaluate(e) {
            for (const t of this.steps)if ((e = t(e)) === u) break;
            return e;
        }
    }
    e.fromNodeEventEmitter = function(e, t, n = (e)=>e) {
        const i = (...e)=>r.fire(n(...e)), r = new v({
            onWillAddFirstListener: ()=>e.on(t, i),
            onDidRemoveLastListener: ()=>e.removeListener(t, i)
        });
        return r.event;
    }, e.fromRxJS = function(e) {
        let t;
        const n = new v({
            onWillAddFirstListener: ()=>{
                t = e.subscribe((e)=>n.fire(e));
            },
            onDidRemoveLastListener: ()=>{
                t?.unsubscribe(), t = void 0;
            }
        });
        return n.event;
    }, e.fromDOMEventEmitter = function(e, t, n = (e)=>e) {
        const i = (...e)=>r.fire(n(...e)), r = new v({
            onWillAddFirstListener: ()=>e.addEventListener(t, i),
            onDidRemoveLastListener: ()=>e.removeEventListener(t, i)
        });
        return r.event;
    }, e.toPromise = function(e, t) {
        return new Promise((i)=>n(e)(i, null, t));
    }, e.fromPromise = function(e) {
        const t = new v;
        return e.then((e)=>{
            t.fire(e);
        }, ()=>{
            t.fire(void 0);
        }).finally(()=>{
            t.dispose();
        }), t.event;
    }, e.forward = function(e, t) {
        return e((e)=>t.fire(e));
    }, e.runAndSubscribe = function(e, t, n) {
        return t(n), e((e)=>t(e));
    };
    class h {
        constructor(e, n){
            this._observable = e, this._counter = 0, this._hasChanged = !1;
            const i = {
                onWillAddFirstListener: ()=>{
                    e.addObserver(this), this._observable.reportChanges();
                },
                onDidRemoveLastListener: ()=>{
                    e.removeObserver(this);
                }
            };
            n || t(), this.emitter = new v(i), n && n.add(this.emitter);
        }
        beginUpdate(e) {
            this._counter++;
        }
        handlePossibleChange(e) {}
        handleChange(e, t) {
            this._hasChanged = !0;
        }
        endUpdate(e) {
            this._counter--, 0 === this._counter && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
        }
    }
    e.fromObservable = function(e, t) {
        return new h(e, t).emitter.event;
    }, e.fromObservableLight = function(e) {
        return (t, n, i)=>{
            let r = 0, s = !1;
            const a = {
                beginUpdate () {
                    r++;
                },
                endUpdate () {
                    r--, 0 === r && (e.reportChanges(), s && (s = !1, t.call(n)));
                },
                handlePossibleChange () {},
                handleChange () {
                    s = !0;
                }
            };
            e.addObserver(a), e.reportChanges();
            const u = {
                dispose () {
                    e.removeObserver(a);
                }
            };
            return i instanceof o.DisposableStore ? i.add(u) : Array.isArray(i) && i.push(u), u;
        };
    };
}(l || (exports.Event = l = {}));
class h {
    static{
        this.all = new Set;
    }
    static{
        this._idPool = 0;
    }
    constructor(e){
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${e}_${h._idPool++}`, h.all.add(this);
    }
    start(e) {
        this._stopWatch = new u.StopWatch, this.listenerCount = e;
    }
    stop() {
        if (this._stopWatch) {
            const e = this._stopWatch.elapsed();
            this.durations.push(e), this.elapsedOverall += e, this.invocationCount += 1, this._stopWatch = void 0;
        }
    }
}
exports.EventProfiling = h;
let c = -1;
let f = 1;
function d() {
    return (f++).toString(16).padStart(3, "0");
}
class g {
    constructor(e, t, n = d()){
        this._errorHandler = e, this.threshold = t, this.name = n, this._warnCountdown = 0;
    }
    dispose() {
        this._stacks?.clear();
    }
    check(e, t) {
        const n = this.threshold;
        if (n <= 0 || t < n) return;
        this._stacks || (this._stacks = new Map);
        const i = e.value, r = this._stacks.get(i) || 0;
        if (this._stacks.set(i, r + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
            this._warnCountdown = .5 * n;
            const [e, i] = this.getMostFrequentStack(), r = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${i}):`;
            console.warn(r), console.warn(e), console.warn(JSON.parse(JSON.stringify(Array.from(this._stacks))));
            const s = i / t > .3 ? "dominated" : "popular", a = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, u = new p(s, r, e, t, a);
            this._errorHandler(u), (0, o.reportLifecycleMisuse)(u, "emitter_listener_leak");
        }
        return ()=>{
            const e = this._stacks.get(i) || 0;
            e <= 1 ? this._stacks.delete(i) : this._stacks.set(i, e - 1);
        };
    }
    getMostFrequentStack() {
        if (!this._stacks) return;
        let e, t = 0;
        for (const [n, i] of this._stacks)(!e || t < i) && (e = [
            n,
            i
        ], t = i);
        return e;
    }
}
class m {
    static create() {
        const e = new Error;
        return new m(e.stack ?? "");
    }
    constructor(e){
        this.value = e;
    }
    print() {
        console.warn(this.value.split("\n").slice(2).join("\n"));
    }
}
class p extends Error {
    constructor(e, t, n, i, r){
        super(r ? `[${r}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = i, this.details = t, this.stack = n;
    }
}
exports.ListenerLeakError = p;
class b extends p {
    constructor(e, t, n, i, r){
        super(e, t, n, i, r), this.name = "ListenerRefusalError";
    }
}
exports.ListenerRefusalError = b;
class L {
    constructor(e){
        this.value = e;
    }
}
const _ = (e, t)=>{
    if (e instanceof L) t(e);
    else for(let n = 0; n < e.length; n++){
        const i = e[n];
        i && t(i);
    }
};
class v {
    constructor(e){
        this._size = 0, this._options = e, (c > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? c, this._leakWarningName = this._options?.leakWarningName ?? d(), this._leakWarningErrorHandler = this._options?.onListenerError ?? r.onUnexpectedError), this._perfMon = this._options?._profName ? new h(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
    }
    _getLeakageMonitor() {
        if (void 0 !== this._leakWarningThreshold && void 0 !== this._leakWarningName && void 0 !== this._leakWarningErrorHandler) return this._leakageMon ??= new g(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
    }
    dispose() {
        this._disposed || (this._disposed = !0, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners && (_(this._listeners, (e)=>{
            e.value = void 0;
        }), this._listeners = void 0, this._size = 0), this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose());
    }
    get event() {
        return this._event ??= (e, t, n)=>{
            if (void 0 !== this._leakWarningThreshold && this._size > this._leakWarningThreshold ** 2) {
                const e = this._getLeakageMonitor();
                if (e) {
                    const t = `[${e.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${e.threshold})`;
                    console.warn(t);
                    const n = e.getMostFrequentStack() ?? [
                        "UNKNOWN stack",
                        -1
                    ], i = n[1] / this._size > .3 ? "dominated" : "popular", s = new b(i, `${t}. HINT: Stack shows most frequent listener (${n[1]}-times)`, n[0], this._size, this._options?.leakWarningName);
                    return (this._options?.onListenerError || r.onUnexpectedError)(s), (0, o.reportLifecycleMisuse)(s, "emitter_listener_refusal"), o.Disposable.None;
                }
            }
            if (this._disposed) {
                const e = new Error("Trying to listen to an Emitter that has already been disposed of.");
                return (0, o.reportLifecycleMisuse)(e, "emitter_use_after_dispose"), o.Disposable.None;
            }
            t && (e = e.bind(t));
            const i = new L(e);
            let s;
            if (void 0 !== this._leakWarningThreshold && this._size >= Math.ceil(.2 * this._leakWarningThreshold)) {
                const e = this._getLeakageMonitor();
                e && (i.stack = m.create(), s = e.check(i.stack, this._size + 1));
            }
            this._listeners ? this._listeners instanceof L ? (this._deliveryQueue ??= new E, this._listeners = [
                this._listeners,
                i
            ]) : this._listeners.push(i) : (this._options?.onWillAddFirstListener?.(this), this._listeners = i, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
            const a = (0, o.toDisposable)(()=>{
                s?.(), this._removeListener(i);
            });
            return n instanceof o.DisposableStore ? n.add(a) : Array.isArray(n) && n.push(a), a;
        }, this._event;
    }
    _removeListener(e) {
        if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
        if (1 === this._size) return this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), void (this._size = 0);
        const t = this._listeners, n = t.indexOf(e);
        if (-1 === n) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
        this._size--, t[n] = void 0;
        const i = this._deliveryQueue.current === this;
        if (2 * this._size <= t.length) {
            let e = 0;
            for(let n = 0; n < t.length; n++)t[n] ? t[e++] = t[n] : i && e < this._deliveryQueue.end && (this._deliveryQueue.end--, e < this._deliveryQueue.i && this._deliveryQueue.i--);
            t.length = e;
        }
    }
    _deliver(e, t) {
        if (!e) return;
        const n = this._options?.onListenerError || r.onUnexpectedError;
        if (n) try {
            e.value(t);
        } catch (e) {
            n(e);
        }
        else e.value(t);
    }
    _deliverQueue(e) {
        const t = e.current._listeners;
        for(; e.i < e.end;)this._deliver(t[e.i++], e.value);
        e.reset();
    }
    fire(e) {
        if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof L) this._deliver(this._listeners, e);
        else {
            const t = this._deliveryQueue;
            t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
        }
        else ;
        this._perfMon?.stop();
    }
    hasListeners() {
        return this._size > 0;
    }
}
exports.Emitter = v;
exports.createEventDeliveryQueue = ()=>new E;
class E {
    constructor(){
        this.i = -1, this.end = 0;
    }
    enqueue(e, t, n) {
        this.i = 0, this.end = n, this.current = e, this.value = t;
    }
    reset() {
        this.i = this.end, this.current = void 0, this.value = void 0;
    }
}
exports.AsyncEmitter = class extends v {
    async fireAsync(e, t, n) {
        if (this._listeners) for(this._asyncDeliveryQueue || (this._asyncDeliveryQueue = new a.LinkedList), _(this._listeners, (t)=>this._asyncDeliveryQueue.push([
                t.value,
                e
            ])); this._asyncDeliveryQueue.size > 0 && !t.isCancellationRequested;){
            const [e, i] = this._asyncDeliveryQueue.shift(), s = [], o = {
                ...i,
                token: t,
                waitUntil: (t)=>{
                    if (Object.isFrozen(s)) throw new Error("waitUntil can NOT be called asynchronous");
                    n && (t = n(t, e)), s.push(t);
                }
            };
            try {
                e(o);
            } catch (e) {
                (0, r.onUnexpectedError)(e);
                continue;
            }
            Object.freeze(s), await Promise.allSettled(s).then((e)=>{
                for (const t of e)"rejected" === t.status && (0, r.onUnexpectedError)(t.reason);
            });
        }
    }
};
class w extends v {
    get isPaused() {
        return 0 !== this._isPaused;
    }
    constructor(e){
        super(e), this._isPaused = 0, this._eventQueue = new a.LinkedList, this._mergeFn = e?.merge;
    }
    pause() {
        this._isPaused++;
    }
    resume() {
        if (0 !== this._isPaused && 0 === --this._isPaused) if (this._mergeFn) {
            if (this._eventQueue.size > 0) {
                const e = Array.from(this._eventQueue);
                this._eventQueue.clear(), super.fire(this._mergeFn(e));
            }
        } else for(; !this._isPaused && 0 !== this._eventQueue.size;)super.fire(this._eventQueue.shift());
    }
    fire(e) {
        this._size && (0 !== this._isPaused ? this._eventQueue.push(e) : super.fire(e));
    }
}
exports.PauseableEmitter = w;
exports.DebounceEmitter = class extends w {
    constructor(e){
        super(e), this._delay = e.delay ?? 100;
    }
    fire(e) {
        this._handle || (this.pause(), this._handle = setTimeout(()=>{
            this._handle = void 0, this.resume();
        }, this._delay)), super.fire(e);
    }
};
exports.MicrotaskEmitter = class extends v {
    constructor(e){
        super(e), this._queuedEvents = [], this._mergeFn = e?.merge;
    }
    fire(e) {
        this.hasListeners() && (this._queuedEvents.push(e), 1 === this._queuedEvents.length && queueMicrotask(()=>{
            this._mergeFn ? super.fire(this._mergeFn(this._queuedEvents)) : this._queuedEvents.forEach((e)=>super.fire(e)), this._queuedEvents = [];
        }));
    }
};
class y {
    constructor(e){
        this.event = e, this._listener = new o.MutableDisposable;
    }
    hook(e, t) {
        this._listener.value = this.event(e, t);
    }
    unhook() {
        this._listener.clear();
    }
    disposeListener() {
        this._listener.dispose();
    }
}
class N {
    constructor(){
        this.hasListeners = !1, this.sources = [], this.emitter = new v({
            onWillAddFirstListener: ()=>this.onFirstListenerAdd(),
            onDidRemoveLastListener: ()=>this.onLastListenerRemove()
        });
    }
    get event() {
        return this.emitter.event;
    }
    add(e) {
        const t = new y(e);
        this.sources.push(t), this.hasListeners && t.hook(this.emitter.fire, this.emitter);
        return (0, o.toDisposable)((0, s.createSingleCallFunction)(()=>{
            t.disposeListener();
            const e = this.sources.indexOf(t);
            -1 !== e && this.sources.splice(e, 1);
        }));
    }
    onFirstListenerAdd() {
        this.hasListeners = !0, this.sources.forEach((e)=>e.hook(this.emitter.fire, this.emitter));
    }
    onLastListenerRemove() {
        this.hasListeners = !1, this.sources.forEach((e)=>e.unhook());
    }
    dispose() {
        this.emitter.dispose();
        for (const e of this.sources)e.disposeListener();
        this.sources.length = 0;
    }
}
exports.EventMultiplexer = N;
exports.DynamicListEventMultiplexer = class {
    constructor(e, t, n, i){
        this._store = new o.DisposableStore;
        const r = this._store.add(new N), s = this._store.add(new o.DisposableMap);
        function a(e) {
            s.set(e, r.add(i(e)));
        }
        for (const t of e)a(t);
        this._store.add(t((e)=>{
            a(e);
        })), this._store.add(n((e)=>{
            s.deleteAndDispose(e);
        })), this.event = r.event;
    }
    dispose() {
        this._store.dispose();
    }
};
exports.EventBufferer = class {
    constructor(){
        this.data = [];
    }
    wrapEvent(e, t, n) {
        return (i, r, s)=>e((e)=>{
                const s = this.data[this.data.length - 1];
                if (!t) return void (s ? s.buffers.push(()=>i.call(r, e)) : i.call(r, e));
                const o = s;
                o ? (o.items ??= [], o.items.push(e), 0 === o.buffers.length && s.buffers.push(()=>{
                    o.reducedResult ??= n ? o.items.reduce(t, n) : o.items.reduce(t), i.call(r, o.reducedResult);
                })) : i.call(r, t(n, e));
            }, void 0, s);
    }
    bufferEvents(e) {
        const t = {
            buffers: new Array
        };
        this.data.push(t);
        const n = e();
        return this.data.pop(), t.buffers.forEach((e)=>e()), n;
    }
};
exports.Relay = class {
    constructor(){
        this.listening = !1, this.inputEvent = l.None, this.emitter = new v({
            onDidAddFirstListener: ()=>{
                this.listening = !0, this.inputEventListener?.dispose(), this.inputEventListener = new o.MutableDisposable, this.inputEventListener.value = this.inputEvent(this.emitter.fire, this.emitter);
            },
            onDidRemoveLastListener: ()=>{
                this.listening = !1, this.inputEventListener?.dispose(), this.inputEventListener = void 0;
            }
        }), this.event = this.emitter.event;
    }
    set input(e) {
        this.inputEvent = e, this.listening && (this.inputEventListener ??= new o.MutableDisposable, this.inputEventListener.value = e(this.emitter.fire, this.emitter));
    }
    dispose() {
        this.inputEventListener?.dispose(), this.inputEventListener = void 0, this.inputEvent = l.None, this.emitter.dispose();
    }
};
exports.ValueWithChangeEvent = class {
    static const(e) {
        return new R(e);
    }
    constructor(e){
        this._value = e, this._onDidChange = new v, this.onDidChange = this._onDidChange.event;
    }
    get value() {
        return this._value;
    }
    set value(e) {
        e !== this._value && (this._value = e, this._onDidChange.fire(void 0));
    }
};
class R {
    constructor(e){
        this.value = e, this.onDidChange = l.None;
    }
}
