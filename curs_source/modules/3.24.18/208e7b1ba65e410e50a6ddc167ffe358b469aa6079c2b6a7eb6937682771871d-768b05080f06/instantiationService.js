import { R3, le } from "./async.js";
import { Hd, pe } from "./descriptors.js";
import { Ve } from "./errors.js";
import { O, ge, se, yn } from "./event.js";
import { KU, Kct } from "./graph.js";
import { ne, ni, ti } from "./instantiation.js";
import { Ci, Xo } from "./lazy.js";
import { j } from "./lifecycle.js";
import { j4, lR } from "./linkedList.js";
import { T4 } from "./scanner.js";
import { BS, gM } from "./serviceCollection.js";
import { h } from "./tslib.es6.js";
function iR(e) {
    return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
var K2e, z2e, zU, Y2e, rm, mb;
export { K2e, Y2e, iR, mb, rm, z2e, zU };
var __wakaru_zct_initialized = false;
export function zct() {
if (__wakaru_zct_initialized) return;
__wakaru_zct_initialized = true;
"use strict";
h(), le(), se(), Ve(), Xo(), j(), Hd(), Kct(), ne(), gM(), j4(), K2e = class {
    constructor(e){
        this._lazy = new Ci(e);
    }
    get value() {
        return this._lazy.value;
    }
    get isInitialized() {
        return this._lazy.hasValue;
    }
    dispose() {}
}, z2e = !1, zU = class extends Error {
    constructor(e, t){
        super("cyclic dependency between services"), this.message = `REASON: ${t}
` + (e.findCycleSlow() ?? `UNABLE to detect cycle, dumping graph: 
${e.toString()}`);
    }
}, Y2e = class Cx {
    constructor(t = new BS, n = !1, r, s = z2e, i = !1, a){
        this._services = t, this._strict = n, this._parent = r, this._enableTracing = s, this._enableLazyInstantiation = i, this._label = a, this._isDisposed = !1, this._servicesToMaybeDispose = new Set, this._children = new Set, this._activeInstantiations = new Set, this._services.set(ni, this), this._globalGraph = s ? r?._globalGraph ?? new KU((o)=>o) : void 0;
    }
    dispose() {
        if (!this._isDisposed) {
            this._isDisposed = !0, this._disposedAt = new Error("InstantiationService disposed here");
            for (const t of [
                ...this._children
            ])try {
                t.dispose();
            } catch (n) {
                yn(n);
            }
            this._children.clear();
            for (const t of this._servicesToMaybeDispose)if (iR(t)) try {
                t.dispose();
            } catch (n) {
                yn(n);
            }
            this._servicesToMaybeDispose.clear();
        }
    }
    _throwIfDisposed() {
        if (this._isDisposed) {
            const t = this._findLabel();
            let n = t ? `InstantiationService has been disposed (${t})` : "InstantiationService has been disposed";
            throw this._disposedAt?.stack && (n += `
--- disposed at: ---
${this._disposedAt.stack}
---`), new Error(n);
        }
    }
    _findLabel() {
        return this._label ?? this._parent?._findLabel();
    }
    createChild(t, n) {
        this._throwIfDisposed();
        const r = this, s = new class extends Cx {
            dispose() {
                r._children.delete(s), super.dispose();
            }
        }(t, this._strict, this, this._enableTracing, this._enableLazyInstantiation);
        return this._children.add(s), n?.add(s), s;
    }
    invokeFunction(t, ...n) {
        this._throwIfDisposed();
        const r = mb.traceInvocation(this._enableTracing, t);
        let s = !1;
        try {
            return t({
                get: (a)=>{
                    if (s) throw T4("service accessor is only valid during the invocation of its target method");
                    const o = this._getOrCreateServiceInstance(a, r);
                    if (!o) throw new Error(`[invokeFunction] unknown service '${a}'`);
                    return o;
                }
            }, ...n);
        } finally{
            s = !0, r.stop();
        }
    }
    createInstance(t, ...n) {
        this._throwIfDisposed();
        let r, s;
        return t instanceof pe ? (r = mb.traceCreation(this._enableTracing, t.ctor), s = this._createInstance(t.ctor, t.staticArguments.concat(n), r)) : (r = mb.traceCreation(this._enableTracing, t), s = this._createInstance(t, n, r)), r.stop(), s;
    }
    _createInstance(t, n = [], r) {
        const s = ti.getServiceDependencies(t).sort((o, l)=>o.index - l.index), i = [];
        for (const o of s){
            const l = this._getOrCreateServiceInstance(o.id, r);
            l || this._throwIfStrict(`[createInstance] ${t.name} depends on UNKNOWN service ${o.id}.`, !1), i.push(l);
        }
        const a = s.length > 0 ? s[0].index : n.length;
        if (n.length !== a) {
            console.trace(`[createInstance] First service dependency of ${t.name} at position ${a + 1} conflicts with ${n.length} static arguments`);
            const o = a - n.length;
            o > 0 ? n = n.concat(new Array(o)) : n = n.slice(0, a);
        }
        return Reflect.construct(t, n.concat(i));
    }
    _setCreatedServiceInstance(t, n) {
        if (this._services.get(t) instanceof pe) this._services.set(t, n);
        else if (this._parent) this._parent._setCreatedServiceInstance(t, n);
        else throw new Error("illegalState - setting UNKNOWN service instance");
    }
    _getServiceInstanceOrDescriptor(t) {
        const n = this._services.get(t);
        return !n && this._parent ? this._parent._getServiceInstanceOrDescriptor(t) : n;
    }
    _getOrCreateServiceInstance(t, n) {
        this._globalGraph && this._globalGraphImplicitDependency && this._globalGraph.insertEdge(this._globalGraphImplicitDependency, String(t));
        const r = this._getServiceInstanceOrDescriptor(t);
        return r instanceof pe ? this._safeCreateAndCacheServiceInstance(t, r, n.branch(t, !0)) : (n.branch(t, !1), r);
    }
    _safeCreateAndCacheServiceInstance(t, n, r) {
        if (this._activeInstantiations.has(t)) throw new Error(`illegal state - RECURSIVELY instantiating service '${t}'`);
        this._activeInstantiations.add(t);
        try {
            return this._createAndCacheServiceInstance(t, n, r);
        } finally{
            this._activeInstantiations.delete(t);
        }
    }
    _createAndCacheServiceInstance(t, n, r) {
        const s = new KU((l)=>l.id.toString());
        let i = 0;
        const a = [
            {
                id: t,
                desc: n,
                _trace: r
            }
        ], o = new Set;
        for(; a.length;){
            const l = a.pop();
            if (!o.has(String(l.id))) {
                if (o.add(String(l.id)), s.lookupOrInsertNode(l), i++ > 1e4) throw new zU(s, "cycle count more than 1000");
                for (const d of ti.getServiceDependencies(l.desc.ctor)){
                    const u = this._getServiceInstanceOrDescriptor(d.id);
                    if (u || this._throwIfStrict(`[createInstance] ${t} depends on ${d.id} which is NOT registered.`, !0), this._globalGraph?.insertEdge(String(l.id), String(d.id)), u instanceof pe) {
                        const m = {
                            id: d.id,
                            desc: u,
                            _trace: l._trace.branch(d.id, !0)
                        };
                        s.insertEdge(l, m), a.push(m);
                    }
                }
            }
        }
        for(;;){
            const l = s.roots();
            if (l.length === 0) {
                if (!s.isEmpty()) throw new zU(s, "no more roots but still nodes in the graph");
                break;
            }
            for (const { data: d } of l){
                if (this._getServiceInstanceOrDescriptor(d.id) instanceof pe) {
                    const m = this._createServiceInstanceWithOwner(d.id, d.desc.ctor, d.desc.staticArguments, d.desc.supportsDelayedInstantiation, d.desc.supportsLazyInstantiation, d._trace);
                    this._setCreatedServiceInstance(d.id, m);
                }
                s.removeNode(d);
            }
        }
        return this._getServiceInstanceOrDescriptor(t);
    }
    _createServiceInstanceWithOwner(t, n, r = [], s, i, a) {
        if (this._services.get(t) instanceof pe) return this._createServiceInstance(t, n, r, s, i, a, this._servicesToMaybeDispose);
        if (this._parent) return this._parent._createServiceInstanceWithOwner(t, n, r, s, i, a);
        throw new Error(`illegalState - creating UNKNOWN service instance ${n.name}`);
    }
    _createServiceInstance(t, n, r = [], s, i, a, o) {
        if (s) {
            const l = new Cx(void 0, this._strict, this, this._enableTracing, this._enableLazyInstantiation);
            l._globalGraphImplicitDependency = String(t);
            const d = new Map, u = i && this._enableLazyInstantiation, m = ()=>{
                if (this._isDisposed) {
                    d.clear();
                    return;
                }
                const v = l._createInstance(n, r, a);
                if (this._isDisposed) {
                    if (iR(v)) try {
                        v.dispose();
                    } catch (T) {
                        yn(T);
                    }
                    d.clear();
                    return;
                }
                for (const [T, S] of d){
                    const k = v[T];
                    if (typeof k == "function") for (const y of S)y.disposable = k.apply(v, y.listener);
                }
                return d.clear(), o.add(v), v;
            }, f = u ? new K2e(m) : new R3(m);
            return o.add(f), new Proxy(Object.create(null), {
                get (v, T) {
                    if (!f.isInitialized && typeof T == "string" && (T.startsWith("onDid") || T.startsWith("onWill"))) {
                        let y = d.get(T);
                        return y || (y = new lR, d.set(T, y)), (I, G, U)=>{
                            if (f.isInitialized) {
                                const X = f.value;
                                return X ? X[T](I, G, U) : O.None(I, G, U);
                            } else {
                                const X = {
                                    listener: [
                                        I,
                                        G,
                                        U
                                    ],
                                    disposable: void 0
                                }, W = y.push(X);
                                return ge(()=>{
                                    W(), X.disposable?.dispose();
                                });
                            }
                        };
                    }
                    if (T in v) return v[T];
                    const S = f.value;
                    if (!S) return;
                    let k = S[T];
                    return typeof k != "function" || (k = k.bind(S), v[T] = k), k;
                },
                set (v, T, S) {
                    const k = f.value;
                    return k && (k[T] = S), !0;
                },
                getPrototypeOf (v) {
                    return n.prototype;
                }
            });
        } else {
            const l = this._createInstance(n, r, a);
            return o.add(l), l;
        }
    }
    _throwIfStrict(t, n) {
        if (n && console.warn(t), this._strict) throw new Error(t);
    }
}, rm = class Ba {
    constructor(t, n){
        this.type = t, this.name = n, this._start = Date.now(), this._dep = [];
    }
    static traceInvocation(t, n) {
        return t ? new Ba(2, n.name || new Error().stack.split(`
`).slice(3, 4).join(`
`)) : Ba._None;
    }
    static traceCreation(t, n) {
        return t ? new Ba(1, n.name) : Ba._None;
    }
    branch(t, n) {
        const r = new Ba(3, t.toString());
        return this._dep.push([
            t,
            n,
            r
        ]), r;
    }
    stop() {
        const t = Date.now() - this._start;
        Ba._totals += t;
        let n = !1;
        function r(i, a) {
            const o = [], l = new Array(i + 1).join("	");
            for (const [d, u, m] of a._dep)if (u && m) {
                n = !0, o.push(`${l}CREATES -> ${d}`);
                const f = r(i + 1, m);
                f && o.push(f);
            } else o.push(`${l}uses -> ${d}`);
            return o.join(`
`);
        }
        const s = [
            `${this.type === 1 ? "CREATE" : "CALL"} ${this.name}`,
            `${r(1, this)}`,
            `DONE, took ${t.toFixed(2)}ms (grand total ${Ba._totals.toFixed(2)}ms)`
        ];
        (t > 2 || n) && Ba.all.add(s.join(`
`));
    }
}, rm.all = new Set, rm._None = new class extends rm {
    constructor(){
        super(0, null);
    }
    stop() {}
    branch() {
        return this;
    }
}, rm._totals = 0, mb = rm;

}
