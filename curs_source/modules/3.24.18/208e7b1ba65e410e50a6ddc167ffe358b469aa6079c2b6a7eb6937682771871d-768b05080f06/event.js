import { I4 } from "./collections.js";
import { Ve, wm } from "./errors.js";
import { Ov } from "./functional.js";
import { Am, Im, J, Mm, Ut, j, oa, ve, yr } from "./lifecycle.js";
import { j4, lR } from "./linkedList.js";
import { Yo, ca } from "./stopwatch.js";
import { Cs } from "./storage_3.js";
import { h } from "./tslib.es6.js";
function yn(e) {
    Cs(e) || wm.onUnexpectedError(e);
}
function Dv(e, t) {
    const n = this;
    let r = !1, s;
    return function() {
        if (r) return s;
        if (r = !0, t) try {
            s = e.apply(n, arguments);
        } finally{
            t();
        }
        else s = e.apply(n, arguments);
        return s;
    };
}
function kUe(e, t) {
    if (oa) for (const n of e)oa.setParent(n, t);
}
function SUe(...e) {
    const t = ge(()=>yr(e));
    return kUe(e, t), t;
}
function ge(e) {
    const t = Am({
        dispose: Dv(()=>{
            Mm(t), e();
        })
    });
    return t;
}
function q4() {
    return (Y4++).toString(16).padStart(3, "0");
}
var dR, K4, O, Bv, z4, uR, Y4, J4, Gv, mR, X4, Nm, Q4, pR, N, Z4, Vv, e5, t5, hR;
export { Bv, Dv, Gv, J4, K4, N, Nm, O, Q4, SUe, Vv, X4, Y4, Z4, dR, e5, ge, hR, kUe, mR, pR, q4, t5, uR, yn, z4 };
var __wakaru_se_initialized = false;
export function se() {
if (__wakaru_se_initialized) return;
__wakaru_se_initialized = true;
"use strict";
h(), I4(), Ve(), Ov(), j(), j4(), Yo(), dR = !1, K4 = !1, ((e)=>{
    e.None = ()=>J.None;
    function t(re) {
        if (K4) {
            const { onDidAddListener: z } = re, he = Gv.create();
            let de = 0;
            re.onDidAddListener = ()=>{
                ++de === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), he.print()), z?.();
            };
        }
    }
    function n(re, z) {
        return v(re, ()=>{}, 0, void 0, !0, void 0, z);
    }
    e.defer = n;
    function r(re) {
        return (z, he = null, de)=>{
            let _e = !1, ce;
            return ce = re((R)=>{
                if (!_e) return ce ? ce.dispose() : _e = !0, z.call(he, R);
            }, null, de), _e && ce.dispose(), ce;
        };
    }
    e.once = r;
    function s(re, z) {
        return e.once(e.filter(re, z));
    }
    e.onceIf = s;
    function i(re, z, he) {
        return m((de, _e = null, ce)=>re((R)=>de.call(_e, z(R)), null, ce), he);
    }
    e.map = i;
    function a(re, z, he) {
        return m((de, _e = null, ce)=>re((R)=>{
                z(R), de.call(_e, R);
            }, null, ce), he);
    }
    e.forEach = a;
    function o(re, z, he) {
        return m((de, _e = null, ce)=>re((R)=>z(R) && de.call(_e, R), null, ce), he);
    }
    e.filter = o;
    function l(re) {
        return re;
    }
    e.signal = l;
    function d(...re) {
        return (z, he = null, de)=>{
            const _e = SUe(...re.map((ce)=>ce((R)=>z.call(he, R))));
            return f(_e, de);
        };
    }
    e.any = d;
    function u(re, z, he, de) {
        let _e = he;
        return i(re, (ce)=>(_e = z(_e, ce), _e), de);
    }
    e.reduce = u;
    function m(re, z) {
        let he;
        const de = {
            onWillAddFirstListener () {
                he = re(_e.fire, _e);
            },
            onDidRemoveLastListener () {
                he?.dispose();
            }
        };
        z || t(de);
        const _e = new N(de);
        return z?.add(_e), _e.event;
    }
    function f(re, z) {
        return z instanceof Array ? z.push(re) : z && z.add(re), re;
    }
    function v(re, z, he = 100, de = !1, _e = !1, ce, R) {
        let A, M, Y, Me = 0, Xe;
        const Ge = {
            leakWarningThreshold: ce,
            onWillAddFirstListener () {
                A = re((zt)=>{
                    Me++, M = z(M, zt), de && !Y && (pn.fire(M), M = void 0), Xe ??= ()=>{
                        const Pn = M;
                        M = void 0, Y = void 0, (!de || Me > 1) && pn.fire(Pn), Me = 0;
                    }, typeof he == "number" ? (clearTimeout(Y), Y = setTimeout(Xe, he)) : Y === void 0 && (Y = 0, queueMicrotask(Xe));
                });
            },
            onWillRemoveListener () {
                _e && Me > 0 && Xe?.();
            },
            onDidRemoveLastListener () {
                Xe = void 0, A.dispose();
            }
        };
        R || t(Ge);
        const pn = new N(Ge);
        return R?.add(pn), pn.event;
    }
    e.debounce = v;
    function T(re, z = 0, he) {
        return e.debounce(re, (de, _e)=>de ? (de.push(_e), de) : [
                _e
            ], z, void 0, !0, void 0, he);
    }
    e.accumulate = T;
    function S(re, z = (de, _e)=>de === _e, he) {
        let de = !0, _e;
        return o(re, (ce)=>{
            const R = de || !z(ce, _e);
            return de = !1, _e = ce, R;
        }, he);
    }
    e.latch = S;
    function k(re, z, he) {
        return [
            e.filter(re, z, he),
            e.filter(re, (de)=>!z(de), he)
        ];
    }
    e.split = k;
    function y(re, z = !1, he = [], de) {
        let _e = he.slice(), ce = re((M)=>{
            _e ? _e.push(M) : A.fire(M);
        });
        de && de.add(ce);
        const R = ()=>{
            _e?.forEach((M)=>A.fire(M)), _e = null;
        }, A = new N({
            onWillAddFirstListener () {
                ce || (ce = re((M)=>A.fire(M)), de && de.add(ce));
            },
            onDidAddFirstListener () {
                _e && (z ? setTimeout(R) : R());
            },
            onDidRemoveLastListener () {
                ce && ce.dispose(), ce = null;
            }
        });
        return de && de.add(A), A.event;
    }
    e.buffer = y;
    function b(re, z) {
        return (de, _e, ce)=>{
            const R = z(new G);
            return re(function(A) {
                const M = R.evaluate(A);
                M !== I && de.call(_e, M);
            }, void 0, ce);
        };
    }
    e.chain = b;
    const I = Symbol("HaltChainable");
    class G {
        constructor(){
            this.steps = [];
        }
        map(z) {
            return this.steps.push(z), this;
        }
        forEach(z) {
            return this.steps.push((he)=>(z(he), he)), this;
        }
        filter(z) {
            return this.steps.push((he)=>z(he) ? he : I), this;
        }
        reduce(z, he) {
            let de = he;
            return this.steps.push((_e)=>(de = z(de, _e), de)), this;
        }
        latch(z = (he, de)=>he === de) {
            let he = !0, de;
            return this.steps.push((_e)=>{
                const ce = he || !z(_e, de);
                return he = !1, de = _e, ce ? _e : I;
            }), this;
        }
        evaluate(z) {
            for (const he of this.steps)if (z = he(z), z === I) break;
            return z;
        }
    }
    function U(re, z, he = (de)=>de) {
        const de = (...A)=>R.fire(he(...A)), _e = ()=>re.on(z, de), ce = ()=>re.removeListener(z, de), R = new N({
            onWillAddFirstListener: _e,
            onDidRemoveLastListener: ce
        });
        return R.event;
    }
    e.fromNodeEventEmitter = U;
    function X(re) {
        let z;
        const he = ()=>{
            z = re.subscribe((ce)=>_e.fire(ce));
        }, de = ()=>{
            z?.unsubscribe(), z = void 0;
        }, _e = new N({
            onWillAddFirstListener: he,
            onDidRemoveLastListener: de
        });
        return _e.event;
    }
    e.fromRxJS = X;
    function W(re, z, he = (de)=>de) {
        const de = (...A)=>R.fire(he(...A)), _e = ()=>re.addEventListener(z, de), ce = ()=>re.removeEventListener(z, de), R = new N({
            onWillAddFirstListener: _e,
            onDidRemoveLastListener: ce
        });
        return R.event;
    }
    e.fromDOMEventEmitter = W;
    function K(re, z) {
        return new Promise((he)=>r(re)(he, null, z));
    }
    e.toPromise = K;
    function H(re) {
        const z = new N;
        return re.then((he)=>{
            z.fire(he);
        }, ()=>{
            z.fire(void 0);
        }).finally(()=>{
            z.dispose();
        }), z.event;
    }
    e.fromPromise = H;
    function ue(re, z) {
        return re((he)=>z.fire(he));
    }
    e.forward = ue;
    function Ee(re, z, he) {
        return z(he), re((de)=>z(de));
    }
    e.runAndSubscribe = Ee;
    class me {
        constructor(z, he){
            this._observable = z, this._counter = 0, this._hasChanged = !1;
            const de = {
                onWillAddFirstListener: ()=>{
                    z.addObserver(this), this._observable.reportChanges();
                },
                onDidRemoveLastListener: ()=>{
                    z.removeObserver(this);
                }
            };
            he || t(de), this.emitter = new N(de), he && he.add(this.emitter);
        }
        beginUpdate(z) {
            this._counter++;
        }
        handlePossibleChange(z) {}
        handleChange(z, he) {
            this._hasChanged = !0;
        }
        endUpdate(z) {
            this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
        }
    }
    function Nt(re, z) {
        return new me(re, z).emitter.event;
    }
    e.fromObservable = Nt;
    function Le(re) {
        return (z, he, de)=>{
            let _e = 0, ce = !1;
            const R = {
                beginUpdate () {
                    _e++;
                },
                endUpdate () {
                    _e--, _e === 0 && (re.reportChanges(), ce && (ce = !1, z.call(he)));
                },
                handlePossibleChange () {},
                handleChange () {
                    ce = !0;
                }
            };
            re.addObserver(R), re.reportChanges();
            const A = {
                dispose () {
                    re.removeObserver(R);
                }
            };
            return de instanceof ve ? de.add(A) : Array.isArray(de) && de.push(A), A;
        };
    }
    e.fromObservableLight = Le;
})(O || (O = {})), Bv = class kx {
    constructor(t){
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${kx._idPool++}`, kx.all.add(this);
    }
    start(t) {
        this._stopWatch = new ca, this.listenerCount = t;
    }
    stop() {
        if (this._stopWatch) {
            const t = this._stopWatch.elapsed();
            this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
        }
    }
}, Bv.all = new Set, Bv._idPool = 0, z4 = Bv, uR = -1, Y4 = 1, J4 = class {
    constructor(e, t, n = q4()){
        this._errorHandler = e, this.threshold = t, this.name = n, this._warnCountdown = 0;
    }
    dispose() {
        this._stacks?.clear();
    }
    check(e, t) {
        const n = this.threshold;
        if (n <= 0 || t < n) return;
        this._stacks || (this._stacks = new Map);
        const r = e.value, s = this._stacks.get(r) || 0;
        if (this._stacks.set(r, s + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
            this._warnCountdown = n * .5;
            const [i, a] = this.getMostFrequentStack(), o = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${a}):`;
            console.warn(o), console.warn(i);
            const l = a / t > .3 ? "dominated" : "popular", d = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, u = new mR(l, o, i, t, d);
            this._errorHandler(u), Im(u, "emitter_listener_leak");
        }
        return ()=>{
            const i = this._stacks.get(r) || 0;
            i <= 1 ? this._stacks.delete(r) : this._stacks.set(r, i - 1);
        };
    }
    getMostFrequentStack() {
        if (!this._stacks) return;
        let e, t = 0;
        for (const [n, r] of this._stacks)(!e || t < r) && (e = [
            n,
            r
        ], t = r);
        return e;
    }
}, Gv = class q9e {
    constructor(t){
        this.value = t;
    }
    static create() {
        const t = new Error;
        return new q9e(t.stack ?? "");
    }
    print() {
        console.warn(this.value.split(`
`).slice(2).join(`
`));
    }
}, mR = class extends Error {
    constructor(e, t, n, r, s){
        super(s ? `[${s}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = r, this.details = t, this.stack = n;
    }
}, X4 = class extends mR {
    constructor(e, t, n, r, s){
        super(e, t, n, r, s), this.name = "ListenerRefusalError";
    }
}, Nm = class {
    constructor(e){
        this.value = e;
    }
}, Q4 = 2, pR = (e, t)=>{
    if (e instanceof Nm) t(e);
    else for(let n = 0; n < e.length; n++){
        const r = e[n];
        r && t(r);
    }
}, N = class {
    constructor(e){
        this._size = 0, this._options = e, (uR > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? uR, this._leakWarningName = this._options?.leakWarningName ?? q4(), this._leakWarningErrorHandler = this._options?.onListenerError ?? yn), this._perfMon = this._options?._profName ? new z4(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
    }
    _getLeakageMonitor() {
        if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new J4(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
    }
    dispose() {
        if (!this._disposed) {
            if (this._disposed = !0, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
                if (dR) {
                    const e = this._listeners;
                    queueMicrotask(()=>{
                        pR(e, (t)=>t.stack?.print());
                    });
                }
                pR(this._listeners, (e)=>{
                    e.value = void 0;
                }), this._listeners = void 0, this._size = 0;
            }
            this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
        }
    }
    get event() {
        return this._event ??= (e, t, n)=>{
            if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
                const o = this._getLeakageMonitor();
                if (o) {
                    const l = `[${o.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${o.threshold})`;
                    console.warn(l);
                    const d = o.getMostFrequentStack() ?? [
                        "UNKNOWN stack",
                        -1
                    ], u = d[1] / this._size > .3 ? "dominated" : "popular", m = new X4(u, `${l}. HINT: Stack shows most frequent listener (${d[1]}-times)`, d[0], this._size, this._options?.leakWarningName);
                    return (this._options?.onListenerError || yn)(m), Im(m, "emitter_listener_refusal"), J.None;
                }
            }
            if (this._disposed) {
                const o = new Error("Trying to listen to an Emitter that has already been disposed of.");
                return Im(o, "emitter_use_after_dispose"), J.None;
            }
            t && (e = e.bind(t));
            const r = new Nm(e);
            let s, i;
            if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * .2)) {
                const o = this._getLeakageMonitor();
                o && (r.stack = Gv.create(), s = o.check(r.stack, this._size + 1));
            }
            dR && (r.stack = i ?? Gv.create()), this._listeners ? this._listeners instanceof Nm ? (this._deliveryQueue ??= new Z4, this._listeners = [
                this._listeners,
                r
            ]) : this._listeners.push(r) : (this._options?.onWillAddFirstListener?.(this), this._listeners = r, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
            const a = ge(()=>{
                s?.(), this._removeListener(r);
            });
            return n instanceof ve ? n.add(a) : Array.isArray(n) && n.push(a), a;
        }, this._event;
    }
    _removeListener(e) {
        if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
        if (this._size === 1) {
            this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
            return;
        }
        const t = this._listeners, n = t.indexOf(e);
        if (n === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
        this._size--, t[n] = void 0;
        const r = this._deliveryQueue.current === this;
        if (this._size * Q4 <= t.length) {
            let s = 0;
            for(let i = 0; i < t.length; i++)t[i] ? t[s++] = t[i] : r && s < this._deliveryQueue.end && (this._deliveryQueue.end--, s < this._deliveryQueue.i && this._deliveryQueue.i--);
            t.length = s;
        }
    }
    _deliver(e, t) {
        if (!e) return;
        const n = this._options?.onListenerError || yn;
        if (!n) {
            e.value(t);
            return;
        }
        try {
            e.value(t);
        } catch (r) {
            n(r);
        }
    }
    _deliverQueue(e) {
        const t = e.current._listeners;
        for(; e.i < e.end;)this._deliver(t[e.i++], e.value);
        e.reset();
    }
    fire(e) {
        if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof Nm) this._deliver(this._listeners, e);
        else {
            const t = this._deliveryQueue;
            t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
        }
        this._perfMon?.stop();
    }
    hasListeners() {
        return this._size > 0;
    }
}, Z4 = class {
    constructor(){
        this.i = -1, this.end = 0;
    }
    enqueue(e, t, n) {
        this.i = 0, this.end = n, this.current = e, this.value = t;
    }
    reset() {
        this.i = this.end, this.current = void 0, this.value = void 0;
    }
}, Vv = class extends N {
    constructor(e){
        super(e), this._isPaused = 0, this._eventQueue = new lR, this._mergeFn = e?.merge;
    }
    get isPaused() {
        return this._isPaused !== 0;
    }
    pause() {
        this._isPaused++;
    }
    resume() {
        if (this._isPaused !== 0 && --this._isPaused === 0) if (this._mergeFn) {
            if (this._eventQueue.size > 0) {
                const e = Array.from(this._eventQueue);
                this._eventQueue.clear(), super.fire(this._mergeFn(e));
            }
        } else for(; !this._isPaused && this._eventQueue.size !== 0;)super.fire(this._eventQueue.shift());
    }
    fire(e) {
        this._size && (this._isPaused !== 0 ? this._eventQueue.push(e) : super.fire(e));
    }
}, e5 = class {
    constructor(e){
        this.event = e, this._listener = new Ut;
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
}, t5 = class {
    constructor(){
        this.hasListeners = !1, this.sources = [], this.emitter = new N({
            onWillAddFirstListener: ()=>this.onFirstListenerAdd(),
            onDidRemoveLastListener: ()=>this.onLastListenerRemove()
        });
    }
    get event() {
        return this.emitter.event;
    }
    add(e) {
        const t = new e5(e);
        return this.sources.push(t), this.hasListeners && t.hook(this.emitter.fire, this.emitter), ge(Dv(()=>{
            t.disposeListener();
            const r = this.sources.indexOf(t);
            r !== -1 && this.sources.splice(r, 1);
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
}, hR = class {
    constructor(){
        this.listening = !1, this.inputEvent = O.None, this.emitter = new N({
            onDidAddFirstListener: ()=>{
                this.listening = !0, this.inputEventListener?.dispose(), this.inputEventListener = new Ut, this.inputEventListener.value = this.inputEvent(this.emitter.fire, this.emitter);
            },
            onDidRemoveLastListener: ()=>{
                this.listening = !1, this.inputEventListener?.dispose(), this.inputEventListener = void 0;
            }
        }), this.event = this.emitter.event;
    }
    set input(e) {
        this.inputEvent = e, this.listening && (this.inputEventListener ??= new Ut, this.inputEventListener.value = e(this.emitter.fire, this.emitter));
    }
    dispose() {
        this.inputEventListener?.dispose(), this.inputEventListener = void 0, this.inputEvent = O.None, this.emitter.dispose();
    }
};

}
