import { is } from "./collections.js";
import { Ue, ht, jt, os } from "./errors.js";
import { us } from "./functional.js";
import { Le, Re, _e, dt, et, ft, pt, xr } from "./lifecycle.js";
import { ea } from "./linkedList.js";
import { ks, ta } from "./stopwatch.js";
import { w } from "./tslib.es6.js";
function $t(e) {
    $o(e) || os.onUnexpectedError(e);
}
function $o(e) {
    return e instanceof ht ? !0 : e instanceof Error && e.name === jt && e.message === jt;
}
function Wo(e, t) {
    const r = this;
    let s = !1, i;
    return function() {
        if (s) return i;
        if (s = !0, t) try {
            i = e.apply(r, arguments);
        } finally{
            t();
        }
        else i = e.apply(r, arguments);
        return i;
    };
}
function Yo(e, t) {
    if (Le) for (const r of e)Le.setParent(r, t);
}
function Xo(...e) {
    const t = qe(()=>xr(e));
    return Yo(e, t), t;
}
function qe(e) {
    const t = dt({
        dispose: Wo(()=>{
            pt(t), e();
        })
    });
    return t;
}
function Ps() {
    return (Os++).toString(16).padStart(3, "0");
}
var jr, Ds, oe, qt, Ts, Wr, Os, Ls, Bt, Ur, Rs, gt, xs, qr, ae, Is;
export { $o, $t, Bt, Ds, Is, Ls, Os, Ps, Rs, Ts, Ur, Wo, Wr, Xo, Yo, ae, gt, jr, oe, qe, qr, qt, xs };
var __wakaru_Br_initialized = false;
export function Br() {
if (__wakaru_Br_initialized) return;
__wakaru_Br_initialized = true;
"use strict";
w(), is(), Ue(), us(), et(), ea(), ta(), jr = !1, Ds = !1, ((e)=>{
    e.None = ()=>_e.None;
    function t(g) {
        if (Ds) {
            const { onDidAddListener: p } = g, v = Bt.create();
            let y = 0;
            g.onDidAddListener = ()=>{
                ++y === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), v.print()), p?.();
            };
        }
    }
    function r(g, p) {
        return d(g, ()=>{}, 0, void 0, !0, void 0, p);
    }
    e.defer = r;
    function s(g) {
        return (p, v = null, y)=>{
            let S = !1, L;
            return L = g((j)=>{
                if (!S) return L ? L.dispose() : S = !0, p.call(v, j);
            }, null, y), S && L.dispose(), L;
        };
    }
    e.once = s;
    function i(g, p) {
        return e.once(e.filter(g, p));
    }
    e.onceIf = i;
    function n(g, p, v) {
        return u((y, S = null, L)=>g((j)=>y.call(S, p(j)), null, L), v);
    }
    e.map = n;
    function a(g, p, v) {
        return u((y, S = null, L)=>g((j)=>{
                p(j), y.call(S, j);
            }, null, L), v);
    }
    e.forEach = a;
    function o(g, p, v) {
        return u((y, S = null, L)=>g((j)=>p(j) && y.call(S, j), null, L), v);
    }
    e.filter = o;
    function l(g) {
        return g;
    }
    e.signal = l;
    function c(...g) {
        return (p, v = null, y)=>{
            const S = Xo(...g.map((L)=>L((j)=>p.call(v, j))));
            return f(S, y);
        };
    }
    e.any = c;
    function h(g, p, v, y) {
        let S = v;
        return n(g, (L)=>(S = p(S, L), S), y);
    }
    e.reduce = h;
    function u(g, p) {
        let v;
        const y = {
            onWillAddFirstListener () {
                v = g(S.fire, S);
            },
            onDidRemoveLastListener () {
                v?.dispose();
            }
        };
        p || t(y);
        const S = new ae(y);
        return p?.add(S), S.event;
    }
    function f(g, p) {
        return p instanceof Array ? p.push(g) : p && p.add(g), g;
    }
    function d(g, p, v = 100, y = !1, S = !1, L, j) {
        let G, J, Xe, Mt = 0, ut;
        const ts = {
            leakWarningThreshold: L,
            onWillAddFirstListener () {
                G = g((ko)=>{
                    Mt++, J = p(J, ko), y && !Xe && (Ft.fire(J), J = void 0), ut ??= ()=>{
                        const Po = J;
                        J = void 0, Xe = void 0, (!y || Mt > 1) && Ft.fire(Po), Mt = 0;
                    }, typeof v == "number" ? (clearTimeout(Xe), Xe = setTimeout(ut, v)) : Xe === void 0 && (Xe = 0, queueMicrotask(ut));
                });
            },
            onWillRemoveListener () {
                S && Mt > 0 && ut?.();
            },
            onDidRemoveLastListener () {
                ut = void 0, G.dispose();
            }
        };
        j || t(ts);
        const Ft = new ae(ts);
        return j?.add(Ft), Ft.event;
    }
    e.debounce = d;
    function m(g, p = 0, v) {
        return e.debounce(g, (y, S)=>y ? (y.push(S), y) : [
                S
            ], p, void 0, !0, void 0, v);
    }
    e.accumulate = m;
    function k(g, p = (y, S)=>y === S, v) {
        let y = !0, S;
        return o(g, (L)=>{
            const j = y || !p(L, S);
            return y = !1, S = L, j;
        }, v);
    }
    e.latch = k;
    function D(g, p, v) {
        return [
            e.filter(g, p, v),
            e.filter(g, (y)=>!p(y), v)
        ];
    }
    e.split = D;
    function P(g, p = !1, v = [], y) {
        let S = v.slice(), L = g((J)=>{
            S ? S.push(J) : G.fire(J);
        });
        y && y.add(L);
        const j = ()=>{
            S?.forEach((J)=>G.fire(J)), S = null;
        }, G = new ae({
            onWillAddFirstListener () {
                L || (L = g((J)=>G.fire(J)), y && y.add(L));
            },
            onDidAddFirstListener () {
                S && (p ? setTimeout(j) : j());
            },
            onDidRemoveLastListener () {
                L && L.dispose(), L = null;
            }
        });
        return y && y.add(G), G.event;
    }
    e.buffer = P;
    function x(g, p) {
        return (y, S, L)=>{
            const j = p(new Z);
            return g(function(G) {
                const J = j.evaluate(G);
                J !== O && y.call(S, J);
            }, void 0, L);
        };
    }
    e.chain = x;
    const O = Symbol("HaltChainable");
    class Z {
        constructor(){
            this.steps = [];
        }
        map(p) {
            return this.steps.push(p), this;
        }
        forEach(p) {
            return this.steps.push((v)=>(p(v), v)), this;
        }
        filter(p) {
            return this.steps.push((v)=>p(v) ? v : O), this;
        }
        reduce(p, v) {
            let y = v;
            return this.steps.push((S)=>(y = p(y, S), y)), this;
        }
        latch(p = (v, y)=>v === y) {
            let v = !0, y;
            return this.steps.push((S)=>{
                const L = v || !p(S, y);
                return v = !1, y = S, L ? S : O;
            }), this;
        }
        evaluate(p) {
            for (const v of this.steps)if (p = v(p), p === O) break;
            return p;
        }
    }
    function C(g, p, v = (y)=>y) {
        const y = (...G)=>j.fire(v(...G)), S = ()=>g.on(p, y), L = ()=>g.removeListener(p, y), j = new ae({
            onWillAddFirstListener: S,
            onDidRemoveLastListener: L
        });
        return j.event;
    }
    e.fromNodeEventEmitter = C;
    function _(g) {
        let p;
        const v = ()=>{
            p = g.subscribe((L)=>S.fire(L));
        }, y = ()=>{
            p?.unsubscribe(), p = void 0;
        }, S = new ae({
            onWillAddFirstListener: v,
            onDidRemoveLastListener: y
        });
        return S.event;
    }
    e.fromRxJS = _;
    function T(g, p, v = (y)=>y) {
        const y = (...G)=>j.fire(v(...G)), S = ()=>g.addEventListener(p, y), L = ()=>g.removeEventListener(p, y), j = new ae({
            onWillAddFirstListener: S,
            onDidRemoveLastListener: L
        });
        return j.event;
    }
    e.fromDOMEventEmitter = T;
    function I(g, p) {
        return new Promise((v)=>s(g)(v, null, p));
    }
    e.toPromise = I;
    function A(g) {
        const p = new ae;
        return g.then((v)=>{
            p.fire(v);
        }, ()=>{
            p.fire(void 0);
        }).finally(()=>{
            p.dispose();
        }), p.event;
    }
    e.fromPromise = A;
    function U(g, p) {
        return g((v)=>p.fire(v));
    }
    e.forward = U;
    function fe(g, p, v) {
        return p(v), g((y)=>p(y));
    }
    e.runAndSubscribe = fe;
    class $ {
        constructor(p, v){
            this._observable = p, this._counter = 0, this._hasChanged = !1;
            const y = {
                onWillAddFirstListener: ()=>{
                    p.addObserver(this), this._observable.reportChanges();
                },
                onDidRemoveLastListener: ()=>{
                    p.removeObserver(this);
                }
            };
            v || t(y), this.emitter = new ae(y), v && v.add(this.emitter);
        }
        beginUpdate(p) {
            this._counter++;
        }
        handlePossibleChange(p) {}
        handleChange(p, v) {
            this._hasChanged = !0;
        }
        endUpdate(p) {
            this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
        }
    }
    function We(g, p) {
        return new $(g, p).emitter.event;
    }
    e.fromObservable = We;
    function ne(g) {
        return (p, v, y)=>{
            let S = 0, L = !1;
            const j = {
                beginUpdate () {
                    S++;
                },
                endUpdate () {
                    S--, S === 0 && (g.reportChanges(), L && (L = !1, p.call(v)));
                },
                handlePossibleChange () {},
                handleChange () {
                    L = !0;
                }
            };
            g.addObserver(j), g.reportChanges();
            const G = {
                dispose () {
                    g.removeObserver(j);
                }
            };
            return y instanceof Re ? y.add(G) : Array.isArray(y) && y.push(G), G;
        };
    }
    e.fromObservableLight = ne;
})(oe || (oe = {})), qt = class Z1 {
    constructor(t){
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${Z1._idPool++}`, Z1.all.add(this);
    }
    start(t) {
        this._stopWatch = new ks, this.listenerCount = t;
    }
    stop() {
        if (this._stopWatch) {
            const t = this._stopWatch.elapsed();
            this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
        }
    }
}, qt.all = new Set, qt._idPool = 0, Ts = qt, Wr = -1, Os = 1, Ls = class {
    constructor(e, t, r = Ps()){
        this._errorHandler = e, this.threshold = t, this.name = r, this._warnCountdown = 0;
    }
    dispose() {
        this._stacks?.clear();
    }
    check(e, t) {
        const r = this.threshold;
        if (r <= 0 || t < r) return;
        this._stacks || (this._stacks = new Map);
        const s = e.value, i = this._stacks.get(s) || 0;
        if (this._stacks.set(s, i + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
            this._warnCountdown = r * .5;
            const [n, a] = this.getMostFrequentStack(), o = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${a}):`;
            console.warn(o), console.warn(n);
            const l = a / t > .3 ? "dominated" : "popular", c = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, h = new Ur(l, o, n, t, c);
            this._errorHandler(h), ft(h, "emitter_listener_leak");
        }
        return ()=>{
            const n = this._stacks.get(s) || 0;
            n <= 1 ? this._stacks.delete(s) : this._stacks.set(s, n - 1);
        };
    }
    getMostFrequentStack() {
        if (!this._stacks) return;
        let e, t = 0;
        for (const [r, s] of this._stacks)(!e || t < s) && (e = [
            r,
            s
        ], t = s);
        return e;
    }
}, Bt = class Eo {
    constructor(t){
        this.value = t;
    }
    static create() {
        const t = new Error;
        return new Eo(t.stack ?? "");
    }
    print() {
        console.warn(this.value.split(`
`).slice(2).join(`
`));
    }
}, Ur = class extends Error {
    constructor(e, t, r, s, i){
        super(i ? `[${i}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = s, this.details = t, this.stack = r;
    }
}, Rs = class extends Ur {
    constructor(e, t, r, s, i){
        super(e, t, r, s, i), this.name = "ListenerRefusalError";
    }
}, gt = class {
    constructor(e){
        this.value = e;
    }
}, xs = 2, qr = (e, t)=>{
    if (e instanceof gt) t(e);
    else for(let r = 0; r < e.length; r++){
        const s = e[r];
        s && t(s);
    }
}, ae = class {
    constructor(e){
        this._size = 0, this._options = e, (Wr > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? Wr, this._leakWarningName = this._options?.leakWarningName ?? Ps(), this._leakWarningErrorHandler = this._options?.onListenerError ?? $t), this._perfMon = this._options?._profName ? new Ts(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
    }
    _getLeakageMonitor() {
        if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new Ls(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
    }
    dispose() {
        if (!this._disposed) {
            if (this._disposed = !0, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
                if (jr) {
                    const e = this._listeners;
                    queueMicrotask(()=>{
                        qr(e, (t)=>t.stack?.print());
                    });
                }
                qr(this._listeners, (e)=>{
                    e.value = void 0;
                }), this._listeners = void 0, this._size = 0;
            }
            this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
        }
    }
    get event() {
        return this._event ??= (e, t, r)=>{
            if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
                const o = this._getLeakageMonitor();
                if (o) {
                    const l = `[${o.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${o.threshold})`;
                    console.warn(l);
                    const c = o.getMostFrequentStack() ?? [
                        "UNKNOWN stack",
                        -1
                    ], h = c[1] / this._size > .3 ? "dominated" : "popular", u = new Rs(h, `${l}. HINT: Stack shows most frequent listener (${c[1]}-times)`, c[0], this._size, this._options?.leakWarningName);
                    return (this._options?.onListenerError || $t)(u), ft(u, "emitter_listener_refusal"), _e.None;
                }
            }
            if (this._disposed) {
                const o = new Error("Trying to listen to an Emitter that has already been disposed of.");
                return ft(o, "emitter_use_after_dispose"), _e.None;
            }
            t && (e = e.bind(t));
            const s = new gt(e);
            let i, n;
            if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * .2)) {
                const o = this._getLeakageMonitor();
                o && (s.stack = Bt.create(), i = o.check(s.stack, this._size + 1));
            }
            jr && (s.stack = n ?? Bt.create()), this._listeners ? this._listeners instanceof gt ? (this._deliveryQueue ??= new Is, this._listeners = [
                this._listeners,
                s
            ]) : this._listeners.push(s) : (this._options?.onWillAddFirstListener?.(this), this._listeners = s, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
            const a = qe(()=>{
                i?.(), this._removeListener(s);
            });
            return r instanceof Re ? r.add(a) : Array.isArray(r) && r.push(a), a;
        }, this._event;
    }
    _removeListener(e) {
        if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
        if (this._size === 1) {
            this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
            return;
        }
        const t = this._listeners, r = t.indexOf(e);
        if (r === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
        this._size--, t[r] = void 0;
        const s = this._deliveryQueue.current === this;
        if (this._size * xs <= t.length) {
            let i = 0;
            for(let n = 0; n < t.length; n++)t[n] ? t[i++] = t[n] : s && i < this._deliveryQueue.end && (this._deliveryQueue.end--, i < this._deliveryQueue.i && this._deliveryQueue.i--);
            t.length = i;
        }
    }
    _deliver(e, t) {
        if (!e) return;
        const r = this._options?.onListenerError || $t;
        if (!r) {
            e.value(t);
            return;
        }
        try {
            e.value(t);
        } catch (s) {
            r(s);
        }
    }
    _deliverQueue(e) {
        const t = e.current._listeners;
        for(; e.i < e.end;)this._deliver(t[e.i++], e.value);
        e.reset();
    }
    fire(e) {
        if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof gt) this._deliver(this._listeners, e);
        else {
            const t = this._deliveryQueue;
            t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
        }
        this._perfMon?.stop();
    }
    hasListeners() {
        return this._size > 0;
    }
}, Is = class {
    constructor(){
        this.i = -1, this.end = 0;
    }
    enqueue(e, t, r) {
        this.i = 0, this.end = r, this.current = e, this.value = t;
    }
    reset() {
        this.i = this.end, this.current = void 0, this.value = void 0;
    }
};

}
