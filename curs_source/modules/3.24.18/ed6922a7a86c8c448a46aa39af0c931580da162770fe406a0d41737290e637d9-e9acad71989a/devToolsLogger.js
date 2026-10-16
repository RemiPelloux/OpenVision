import { Tl, Zu, ns, si } from "./HVr.js";
import { Dmn, t2t } from "./autorun.js";
import { rDc } from "./consoleObservableLogger.js";
import { bhg } from "./debuggerRpc.js";
import { TK, n2t } from "./derived.js";
import { Kqe, aDc, cDc, hBe, oDc, vBe, vhg } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { MAe, xge } from "./utils_10.js";
import { Shg, lDc } from "./utils_11.js";
var mYr, uDc;
export { mYr, uDc };
var __wakaru_khg_initialized = false;
export function khg() {
if (__wakaru_khg_initialized) return;
__wakaru_khg_initialized = true;
"use strict";
x(), Dmn(), hBe(), n2t(), rDc(), bhg(), Shg(), gr(), xge(), si(), mYr = class DXn {
    constructor(){
        this._declarationId = 0, this._instanceId = 0, this._declarations = new Map, this._instanceInfos = new WeakMap, this._aliveInstances = new Map, this._activeTransactions = new Set, this._channel = vhg("observableDevTools", ()=>({
                notifications: {
                    setDeclarationIdFilter: (t)=>{},
                    logObservableValue: (t)=>{
                        console.log("logObservableValue", t);
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
                        const t = {};
                        for (const n of this._declarations.values())t[n.id] = n;
                        return {
                            decls: t
                        };
                    },
                    getSummarizedInstances: ()=>null,
                    getObservableValueInfo: (t)=>({
                            observers: [
                                ...this._aliveInstances.get(t).debugGetObservers()
                            ].map((i)=>this._formatObserver(i)).filter(Tl)
                        }),
                    getDerivedInfo: (t)=>{
                        const n = this._aliveInstances.get(t);
                        return {
                            dependencies: [
                                ...n.debugGetState().dependencies
                            ].map((i)=>this._formatObservable(i)).filter(Tl),
                            observers: [
                                ...n.debugGetObservers()
                            ].map((i)=>this._formatObserver(i)).filter(Tl)
                        };
                    },
                    getAutorunInfo: (t)=>({
                            dependencies: [
                                ...this._aliveInstances.get(t).debugGetState().dependencies
                            ].map((i)=>this._formatObservable(i)).filter(Tl)
                        }),
                    getTransactionState: ()=>this.getTransactionState(),
                    setValue: (t, n)=>{
                        const i = this._aliveInstances.get(t);
                        if (i instanceof TK) i.debugSetValue(n);
                        else if (i instanceof Kqe) i.debugSetValue(n);
                        else if (i instanceof MAe) i.debugSetValue(n);
                        else throw new Zu("Observable is not supported");
                        const r = [
                            ...i.debugGetObservers()
                        ];
                        for (const s of r)s.beginUpdate(i);
                        for (const s of r)s.handleChange(i, void 0);
                        for (const s of r)s.endUpdate(i);
                    },
                    getValue: (t)=>{
                        const n = this._aliveInstances.get(t);
                        if (n instanceof TK) return vBe(n.debugGetState().value, 200);
                        if (n instanceof Kqe) return vBe(n.debugGetState().value, 200);
                    }
                }
            })), this._pendingChanges = null, this._changeThrottler = new lDc, this._fullState = {}, this._flushUpdates = ()=>{
            this._pendingChanges !== null && (this._channel.api.notifications.handleChange(this._pendingChanges, !1), this._pendingChanges = null);
        };
    }
    static getInstance() {
        return DXn._instance === void 0 && (DXn._instance = new DXn), DXn._instance;
    }
    getTransactionState() {
        const t = [], n = [
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
            o && t.push(o);
        }
        return {
            names: n.map((s)=>s.getDebugName() ?? "tx"),
            affected: t
        };
    }
    _getObservableInfo(t) {
        const n = this._instanceInfos.get(t);
        if (!n) {
            ns(new Zu("No info found"));
            return;
        }
        return n;
    }
    _getAutorunInfo(t) {
        const n = this._instanceInfos.get(t);
        if (!n) {
            ns(new Zu("No info found"));
            return;
        }
        return n;
    }
    _getInfo(t, n) {
        if (t instanceof TK) {
            const i = [
                ...t.debugGetObservers()
            ];
            for (const c of i)n(c);
            const r = this._getObservableInfo(t);
            if (!r) return;
            const s = t.debugGetState(), o = {
                name: t.debugName,
                instanceId: r.instanceId,
                updateCount: s.updateCount
            }, a = [
                ...r.changedObservables
            ].map((c)=>this._instanceInfos.get(c)?.instanceId).filter(Tl);
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
        } else if (t instanceof t2t) {
            const i = this._getAutorunInfo(t);
            if (!i) return;
            const r = {
                name: t.debugName,
                instanceId: i.instanceId,
                updateCount: i.updateCount
            }, s = [
                ...i.changedObservables
            ].map((o)=>this._instanceInfos.get(o).instanceId);
            if (t.debugGetState().isRunning) return {
                ...r,
                type: "autorun",
                state: "updating",
                changedDependencies: s
            };
            switch(t.debugGetState().state){
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
    _formatObservable(t) {
        const n = this._getObservableInfo(t);
        if (n) return {
            name: t.debugName,
            instanceId: n.instanceId
        };
    }
    _formatObserver(t) {
        if (t instanceof TK) return {
            name: t.toString(),
            instanceId: this._getObservableInfo(t)?.instanceId
        };
        const n = this._getAutorunInfo(t);
        if (n) return {
            name: t.toString(),
            instanceId: n.instanceId
        };
    }
    _handleChange(t) {
        cDc(this._fullState, t), this._pendingChanges === null ? this._pendingChanges = t : aDc(this._pendingChanges, t), this._changeThrottler.throttle(this._flushUpdates, 10);
    }
    _getDeclarationId(t) {
        let n = !0, i;
        const r = Error;
        for(;;){
            const o = r.stackTraceLimit;
            r.stackTraceLimit = n ? 6 : 20;
            const a = new Error().stack;
            r.stackTraceLimit = o;
            let c = oDc(a, /[/\\]observableInternal[/\\]|\.observe|[/\\]util(s)?\./);
            if (!n && !c && (c = oDc(a, /[/\\]observableInternal[/\\]|\.observe/)), c) {
                i = c;
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
            type: t,
            url: i.fileName,
            line: i.line,
            column: i.column
        }, this._declarations.set(i.id, s), this._handleChange({
            decls: {
                [s.id]: s
            }
        })), s.id;
    }
    handleObservableCreated(t) {
        const i = {
            declarationId: this._getDeclarationId("observable/value"),
            instanceId: this._instanceId++,
            listenerCount: 0,
            lastValue: void 0,
            updateCount: 0,
            changedObservables: new Set
        };
        this._instanceInfos.set(t, i);
    }
    handleOnListenerCountChanged(t, n) {
        const i = this._getObservableInfo(t);
        if (i) {
            if (i.listenerCount === 0 && n > 0) {
                const r = t instanceof TK ? "observable/derived" : "observable/value";
                this._aliveInstances.set(i.instanceId, t), this._handleChange({
                    instances: {
                        [i.instanceId]: {
                            instanceId: i.instanceId,
                            declarationId: i.declarationId,
                            formattedValue: i.lastValue,
                            type: r,
                            name: t.debugName
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
    handleObservableUpdated(t, n) {
        if (t instanceof TK) {
            this._handleDerivedRecomputed(t, n);
            return;
        }
        const i = this._getObservableInfo(t);
        i && n.didChange && (i.lastValue = vBe(n.newValue, 30), i.listenerCount > 0 && this._handleChange({
            instances: {
                [i.instanceId]: {
                    formattedValue: i.lastValue
                }
            }
        }));
    }
    handleAutorunCreated(t) {
        const i = {
            declarationId: this._getDeclarationId("autorun"),
            instanceId: this._instanceId++,
            updateCount: 0,
            changedObservables: new Set
        };
        this._instanceInfos.set(t, i), this._aliveInstances.set(i.instanceId, t), i && this._handleChange({
            instances: {
                [i.instanceId]: {
                    instanceId: i.instanceId,
                    declarationId: i.declarationId,
                    runCount: 0,
                    type: "autorun",
                    name: t.debugName
                }
            }
        });
    }
    handleAutorunDisposed(t) {
        const n = this._getAutorunInfo(t);
        n && (this._handleChange({
            instances: {
                [n.instanceId]: null
            }
        }), this._instanceInfos.delete(t), this._aliveInstances.delete(n.instanceId));
    }
    handleAutorunDependencyChanged(t, n, i) {
        const r = this._getAutorunInfo(t);
        r && r.changedObservables.add(n);
    }
    handleAutorunStarted(t) {}
    handleAutorunFinished(t) {
        const n = this._getAutorunInfo(t);
        n && (n.changedObservables.clear(), n.updateCount++, this._handleChange({
            instances: {
                [n.instanceId]: {
                    runCount: n.updateCount
                }
            }
        }));
    }
    handleDerivedDependencyChanged(t, n, i) {
        const r = this._getObservableInfo(t);
        r && r.changedObservables.add(n);
    }
    _handleDerivedRecomputed(t, n) {
        const i = this._getObservableInfo(t);
        if (!i) return;
        const r = vBe(n.newValue, 30);
        i.updateCount++, i.changedObservables.clear(), i.lastValue = r, i.listenerCount > 0 && this._handleChange({
            instances: {
                [i.instanceId]: {
                    formattedValue: r,
                    recomputationCount: i.updateCount
                }
            }
        });
    }
    handleDerivedCleared(t) {
        const n = this._getObservableInfo(t);
        n && (n.lastValue = void 0, n.changedObservables.clear(), n.listenerCount > 0 && this._handleChange({
            instances: {
                [n.instanceId]: {
                    formattedValue: void 0
                }
            }
        }));
    }
    handleBeginTransaction(t) {
        this._activeTransactions.add(t);
    }
    handleEndTransaction(t) {
        this._activeTransactions.delete(t);
    }
}, mYr._instance = void 0, uDc = mYr;

}
