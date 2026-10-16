import { $m, Ei, xh, xr } from "./Iwo.js";
import { Rkr, cgn } from "./autorun.js";
import { VOd } from "./consoleObservableLogger.js";
import { Mxy } from "./debuggerRpc.js";
import { ioe, ugn } from "./derived.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { K$e, LAe } from "./utils_10.js";
import { Nxy, QOd } from "./utils_11.js";
import { Cbt, Rxy, XOd, YOd, ZOd, ktt, ytt } from "./ze.js";
var I7o, JOd;
export { I7o, JOd };
var __wakaru_Lxy_initialized = false;
export function Lxy() {
if (__wakaru_Lxy_initialized) return;
__wakaru_Lxy_initialized = true;
"use strict";
E(), Rkr(), ytt(), ugn(), VOd(), Mxy(), Nxy(), To(), LAe(), Ei(), I7o = class fZi {
    constructor(){
        this._declarationId = 0, this._instanceId = 0, this._declarations = new Map, this._instanceInfos = new WeakMap, this._aliveInstances = new Map, this._activeTransactions = new Set, this._channel = Rxy("observableDevTools", ()=>({
                notifications: {
                    setDeclarationIdFilter: (e)=>{},
                    logObservableValue: (e)=>{
                        console.log("logObservableValue", e);
                    },
                    flushUpdates: ()=>{
                        this._flushUpdates();
                    },
                    resetUpdates: ()=>{
                        this._pendingChanges = null, this._channel.api.notifications.handleChange(this._fullState, !0);
                    }
                },
                requests: {
                    getDeclarations: ()=>{
                        const e = {};
                        for (const n of this._declarations.values())e[n.id] = n;
                        return {
                            decls: e
                        };
                    },
                    getSummarizedInstances: ()=>null,
                    getObservableValueInfo: (e)=>({
                            observers: [
                                ...this._aliveInstances.get(e).debugGetObservers()
                            ].map((i)=>this._formatObserver(i)).filter($m)
                        }),
                    getDerivedInfo: (e)=>{
                        const n = this._aliveInstances.get(e);
                        return {
                            dependencies: [
                                ...n.debugGetState().dependencies
                            ].map((i)=>this._formatObservable(i)).filter($m),
                            observers: [
                                ...n.debugGetObservers()
                            ].map((i)=>this._formatObserver(i)).filter($m)
                        };
                    },
                    getAutorunInfo: (e)=>({
                            dependencies: [
                                ...this._aliveInstances.get(e).debugGetState().dependencies
                            ].map((i)=>this._formatObservable(i)).filter($m)
                        }),
                    getTransactionState: ()=>this.getTransactionState(),
                    setValue: (e, n)=>{
                        const i = this._aliveInstances.get(e);
                        if (i instanceof ioe) i.debugSetValue(n);
                        else if (i instanceof Cbt) i.debugSetValue(n);
                        else if (i instanceof K$e) i.debugSetValue(n);
                        else throw new xh("Observable is not supported");
                        const r = [
                            ...i.debugGetObservers()
                        ];
                        for (const s of r)s.beginUpdate(i);
                        for (const s of r)s.handleChange(i, void 0);
                        for (const s of r)s.endUpdate(i);
                    },
                    getValue: (e)=>{
                        const n = this._aliveInstances.get(e);
                        if (n instanceof ioe) return ktt(n.debugGetState().value, 200);
                        if (n instanceof Cbt) return ktt(n.debugGetState().value, 200);
                    }
                }
            })), this._pendingChanges = null, this._changeThrottler = new QOd, this._fullState = {}, this._flushUpdates = ()=>{
            this._pendingChanges !== null && (this._channel.api.notifications.handleChange(this._pendingChanges, !1), this._pendingChanges = null);
        };
    }
    static getInstance() {
        return fZi._instance === void 0 && (fZi._instance = new fZi), fZi._instance;
    }
    getTransactionState() {
        const e = [], n = [
            ...this._activeTransactions
        ];
        if (n.length === 0) return;
        const i = n.flatMap((s)=>s.debugGetUpdatingObservers() ?? []).map((s)=>s.observer), r = new Set;
        for(; i.length > 0;){
            const s = i.shift();
            if (r.has(s)) continue;
            r.add(s);
            const o = this._getInfo(s, (a)=>{
                r.has(a) || i.push(a);
            });
            o && e.push(o);
        }
        return {
            names: n.map((s)=>s.getDebugName() ?? "tx"),
            affected: e
        };
    }
    _getObservableInfo(e) {
        const n = this._instanceInfos.get(e);
        if (!n) {
            xr(new xh("No info found"));
            return;
        }
        return n;
    }
    _getAutorunInfo(e) {
        const n = this._instanceInfos.get(e);
        if (!n) {
            xr(new xh("No info found"));
            return;
        }
        return n;
    }
    _getInfo(e, n) {
        if (e instanceof ioe) {
            const i = [
                ...e.debugGetObservers()
            ];
            for (const l of i)n(l);
            const r = this._getObservableInfo(e);
            if (!r) return;
            const s = e.debugGetState(), o = {
                name: e.debugName,
                instanceId: r.instanceId,
                updateCount: s.updateCount
            }, a = [
                ...r.changedObservables
            ].map((l)=>this._instanceInfos.get(l)?.instanceId).filter($m);
            if (s.isComputing) return {
                ...o,
                type: "observable/derived",
                state: "updating",
                changedDependencies: a,
                initialComputation: !1
            };
            switch(s.state){
                case 0:
                    return {
                        ...o,
                        type: "observable/derived",
                        state: "noValue"
                    };
                case 3:
                    return {
                        ...o,
                        type: "observable/derived",
                        state: "upToDate"
                    };
                case 2:
                    return {
                        ...o,
                        type: "observable/derived",
                        state: "stale",
                        changedDependencies: a
                    };
                case 1:
                    return {
                        ...o,
                        type: "observable/derived",
                        state: "possiblyStale"
                    };
            }
        } else if (e instanceof cgn) {
            const i = this._getAutorunInfo(e);
            if (!i) return;
            const r = {
                name: e.debugName,
                instanceId: i.instanceId,
                updateCount: i.updateCount
            }, s = [
                ...i.changedObservables
            ].map((o)=>this._instanceInfos.get(o).instanceId);
            if (e.debugGetState().isRunning) return {
                ...r,
                type: "autorun",
                state: "updating",
                changedDependencies: s
            };
            switch(e.debugGetState().state){
                case 3:
                    return {
                        ...r,
                        type: "autorun",
                        state: "upToDate"
                    };
                case 2:
                    return {
                        ...r,
                        type: "autorun",
                        state: "stale",
                        changedDependencies: s
                    };
                case 1:
                    return {
                        ...r,
                        type: "autorun",
                        state: "possiblyStale"
                    };
            }
        }
    }
    _formatObservable(e) {
        const n = this._getObservableInfo(e);
        if (n) return {
            name: e.debugName,
            instanceId: n.instanceId
        };
    }
    _formatObserver(e) {
        if (e instanceof ioe) return {
            name: e.toString(),
            instanceId: this._getObservableInfo(e)?.instanceId
        };
        const n = this._getAutorunInfo(e);
        if (n) return {
            name: e.toString(),
            instanceId: n.instanceId
        };
    }
    _handleChange(e) {
        ZOd(this._fullState, e), this._pendingChanges === null ? this._pendingChanges = e : XOd(this._pendingChanges, e), this._changeThrottler.throttle(this._flushUpdates, 10);
    }
    _getDeclarationId(e) {
        let n = !0, i;
        const r = Error;
        for(;;){
            const o = r.stackTraceLimit;
            r.stackTraceLimit = n ? 6 : 20;
            const a = new Error().stack;
            r.stackTraceLimit = o;
            let l = YOd(a, /[/\\]observableInternal[/\\]|\.observe|[/\\]util(s)?\./);
            if (!n && !l && (l = YOd(a, /[/\\]observableInternal[/\\]|\.observe/)), l) {
                i = l;
                break;
            }
            if (!n) {
                console.error("Could not find location for declaration", new Error().stack), i = {
                    fileName: "unknown",
                    line: 0,
                    column: 0,
                    id: "unknown"
                };
                break;
            }
            n = !1;
        }
        let s = this._declarations.get(i.id);
        return s === void 0 && (s = {
            id: this._declarationId++,
            type: e,
            url: i.fileName,
            line: i.line,
            column: i.column
        }, this._declarations.set(i.id, s), this._handleChange({
            decls: {
                [s.id]: s
            }
        })), s.id;
    }
    handleObservableCreated(e) {
        const i = {
            declarationId: this._getDeclarationId("observable/value"),
            instanceId: this._instanceId++,
            listenerCount: 0,
            lastValue: void 0,
            updateCount: 0,
            changedObservables: new Set
        };
        this._instanceInfos.set(e, i);
    }
    handleOnListenerCountChanged(e, n) {
        const i = this._getObservableInfo(e);
        if (i) {
            if (i.listenerCount === 0 && n > 0) {
                const r = e instanceof ioe ? "observable/derived" : "observable/value";
                this._aliveInstances.set(i.instanceId, e), this._handleChange({
                    instances: {
                        [i.instanceId]: {
                            instanceId: i.instanceId,
                            declarationId: i.declarationId,
                            formattedValue: i.lastValue,
                            type: r,
                            name: e.debugName
                        }
                    }
                });
            } else i.listenerCount > 0 && n === 0 && (this._handleChange({
                instances: {
                    [i.instanceId]: null
                }
            }), this._aliveInstances.delete(i.instanceId));
            i.listenerCount = n;
        }
    }
    handleObservableUpdated(e, n) {
        if (e instanceof ioe) {
            this._handleDerivedRecomputed(e, n);
            return;
        }
        const i = this._getObservableInfo(e);
        i && n.didChange && (i.lastValue = ktt(n.newValue, 30), i.listenerCount > 0 && this._handleChange({
            instances: {
                [i.instanceId]: {
                    formattedValue: i.lastValue
                }
            }
        }));
    }
    handleAutorunCreated(e) {
        const i = {
            declarationId: this._getDeclarationId("autorun"),
            instanceId: this._instanceId++,
            updateCount: 0,
            changedObservables: new Set
        };
        this._instanceInfos.set(e, i), this._aliveInstances.set(i.instanceId, e), i && this._handleChange({
            instances: {
                [i.instanceId]: {
                    instanceId: i.instanceId,
                    declarationId: i.declarationId,
                    runCount: 0,
                    type: "autorun",
                    name: e.debugName
                }
            }
        });
    }
    handleAutorunDisposed(e) {
        const n = this._getAutorunInfo(e);
        n && (this._handleChange({
            instances: {
                [n.instanceId]: null
            }
        }), this._instanceInfos.delete(e), this._aliveInstances.delete(n.instanceId));
    }
    handleAutorunDependencyChanged(e, n, i) {
        const r = this._getAutorunInfo(e);
        r && r.changedObservables.add(n);
    }
    handleAutorunStarted(e) {}
    handleAutorunFinished(e) {
        const n = this._getAutorunInfo(e);
        n && (n.changedObservables.clear(), n.updateCount++, this._handleChange({
            instances: {
                [n.instanceId]: {
                    runCount: n.updateCount
                }
            }
        }));
    }
    handleDerivedDependencyChanged(e, n, i) {
        const r = this._getObservableInfo(e);
        r && r.changedObservables.add(n);
    }
    _handleDerivedRecomputed(e, n) {
        const i = this._getObservableInfo(e);
        if (!i) return;
        const r = ktt(n.newValue, 30);
        i.updateCount++, i.changedObservables.clear(), i.lastValue = r, i.listenerCount > 0 && this._handleChange({
            instances: {
                [i.instanceId]: {
                    formattedValue: r,
                    recomputationCount: i.updateCount
                }
            }
        });
    }
    handleDerivedCleared(e) {
        const n = this._getObservableInfo(e);
        n && (n.lastValue = void 0, n.changedObservables.clear(), n.listenerCount > 0 && this._handleChange({
            instances: {
                [n.instanceId]: {
                    formattedValue: void 0
                }
            }
        }));
    }
    handleBeginTransaction(e) {
        this._activeTransactions.add(e);
    }
    handleEndTransaction(e) {
        this._activeTransactions.delete(e);
    }
}, I7o._instance = void 0, JOd = I7o;

}
