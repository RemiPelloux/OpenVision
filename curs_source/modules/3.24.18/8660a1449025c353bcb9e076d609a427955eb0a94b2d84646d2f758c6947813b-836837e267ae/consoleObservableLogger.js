import { btt } from "./debugName.js";
import { ioe, ugn } from "./derived.js";
import { E } from "./tslib.es6.js";
import { Cxy, Ixy, OAe, f9t, ktt, mgn, pgn } from "./ze.js";
var E7o;
export { E7o };
var __wakaru_VOd_initialized = false;
export function VOd() {
if (__wakaru_VOd_initialized) return;
__wakaru_VOd_initialized = true;
"use strict";
E(), ugn(), f9t(), btt(), E7o = class {
    constructor(){
        this.indentation = 0, this.changedObservablesSets = new WeakMap;
    }
    addFilteredObj(t) {
        this._filteredObjects || (this._filteredObjects = new Set), this._filteredObjects.add(t);
    }
    _isIncluded(t) {
        return this._filteredObjects?.has(t) ?? !0;
    }
    textToConsoleArgs(t) {
        return Cxy([
            pgn(Ixy("|  ", this.indentation)),
            t
        ]);
    }
    formatInfo(t) {
        return t.hadValue ? t.didChange ? [
            pgn(" "),
            OAe(ktt(t.oldValue, 70), {
                color: "red",
                strikeThrough: !0
            }),
            pgn(" "),
            OAe(ktt(t.newValue, 60), {
                color: "green"
            })
        ] : [
            pgn(" (unchanged)")
        ] : [
            pgn(" "),
            OAe(ktt(t.newValue, 60), {
                color: "green"
            }),
            pgn(" (initial)")
        ];
    }
    handleObservableCreated(t) {
        if (t instanceof ioe) {
            const e = t;
            if (this.changedObservablesSets.set(e, new Set), !1) {
                const i = [];
                e.__debugUpdating = i;
                const r = e.beginUpdate;
                e.beginUpdate = (o)=>(i.push(o), r.apply(e, [
                        o
                    ]));
                const s = e.endUpdate;
                e.endUpdate = (o)=>{
                    const a = i.indexOf(o);
                    return a === -1 && console.error("endUpdate called without beginUpdate", e.debugName, o.debugName), i.splice(a, 1), s.apply(e, [
                        o
                    ]);
                };
            }
        }
    }
    handleOnListenerCountChanged(t, e) {}
    handleObservableUpdated(t, e) {
        if (this._isIncluded(t)) {
            if (t instanceof ioe) {
                this._handleDerivedRecomputed(t, e);
                return;
            }
            console.log(...this.textToConsoleArgs([
                mgn("observable value changed"),
                OAe(t.debugName, {
                    color: "BlueViolet"
                }),
                ...this.formatInfo(e)
            ]));
        }
    }
    formatChanges(t) {
        if (t.size !== 0) return OAe(" (changed deps: " + [
            ...t
        ].map((e)=>e.debugName).join(", ") + ")", {
            color: "gray"
        });
    }
    handleDerivedDependencyChanged(t, e, n) {
        this._isIncluded(t) && this.changedObservablesSets.get(t)?.add(e);
    }
    _handleDerivedRecomputed(t, e) {
        if (!this._isIncluded(t)) return;
        const n = this.changedObservablesSets.get(t);
        n && (console.log(...this.textToConsoleArgs([
            mgn("derived recomputed"),
            OAe(t.debugName, {
                color: "BlueViolet"
            }),
            ...this.formatInfo(e),
            this.formatChanges(n),
            {
                data: [
                    {
                        fn: t._debugNameData.referenceFn ?? t._computeFn
                    }
                ]
            }
        ])), n.clear());
    }
    handleDerivedCleared(t) {
        this._isIncluded(t) && console.log(...this.textToConsoleArgs([
            mgn("derived cleared"),
            OAe(t.debugName, {
                color: "BlueViolet"
            })
        ]));
    }
    handleFromEventObservableTriggered(t, e) {
        this._isIncluded(t) && console.log(...this.textToConsoleArgs([
            mgn("observable from event triggered"),
            OAe(t.debugName, {
                color: "BlueViolet"
            }),
            ...this.formatInfo(e),
            {
                data: [
                    {
                        fn: t._getValue
                    }
                ]
            }
        ]));
    }
    handleAutorunCreated(t) {
        this._isIncluded(t) && this.changedObservablesSets.set(t, new Set);
    }
    handleAutorunDisposed(t) {}
    handleAutorunDependencyChanged(t, e, n) {
        this._isIncluded(t) && this.changedObservablesSets.get(t).add(e);
    }
    handleAutorunStarted(t) {
        const e = this.changedObservablesSets.get(t);
        e && (this._isIncluded(t) && console.log(...this.textToConsoleArgs([
            mgn("autorun"),
            OAe(t.debugName, {
                color: "BlueViolet"
            }),
            this.formatChanges(e),
            {
                data: [
                    {
                        fn: t._debugNameData.referenceFn ?? t._runFn
                    }
                ]
            }
        ])), e.clear(), this.indentation++);
    }
    handleAutorunFinished(t) {
        this.indentation--;
    }
    handleBeginTransaction(t) {
        let e = t.getDebugName();
        e === void 0 && (e = ""), this._isIncluded(t) && console.log(...this.textToConsoleArgs([
            mgn("transaction"),
            OAe(e, {
                color: "BlueViolet"
            }),
            {
                data: [
                    {
                        fn: t._fn
                    }
                ]
            }
        ])), this.indentation++;
    }
    handleEndTransaction() {
        this.indentation--;
    }
};

}
