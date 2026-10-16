import { uBe } from "./debugName.js";
import { TK, n2t } from "./derived.js";
import { Ige, Pht, dhg, mhg, o2t, s2t, vBe } from "./qIc.js";
import { x } from "./tslib.es6.js";
var pYr;
export { pYr };
var __wakaru_rDc_initialized = false;
export function rDc() {
if (__wakaru_rDc_initialized) return;
__wakaru_rDc_initialized = true;
"use strict";
x(), n2t(), Pht(), uBe(), pYr = class {
    constructor(){
        this.indentation = 0, this.changedObservablesSets = new WeakMap;
    }
    addFilteredObj(e) {
        this._filteredObjects || (this._filteredObjects = new Set), this._filteredObjects.add(e);
    }
    _isIncluded(e) {
        return this._filteredObjects?.has(e) ?? !0;
    }
    textToConsoleArgs(e) {
        return dhg([
            s2t(mhg("|  ", this.indentation)),
            e
        ]);
    }
    formatInfo(e) {
        return e.hadValue ? e.didChange ? [
            s2t(" "),
            Ige(vBe(e.oldValue, 70), {
                color: "red",
                strikeThrough: !0
            }),
            s2t(" "),
            Ige(vBe(e.newValue, 60), {
                color: "green"
            })
        ] : [
            s2t(" (unchanged)")
        ] : [
            s2t(" "),
            Ige(vBe(e.newValue, 60), {
                color: "green"
            }),
            s2t(" (initial)")
        ];
    }
    handleObservableCreated(e) {
        if (e instanceof TK) {
            const t = e;
            if (this.changedObservablesSets.set(t, new Set), !1) {
                const i = [];
                t.__debugUpdating = i;
                const r = t.beginUpdate;
                t.beginUpdate = (o)=>(i.push(o), r.apply(t, [
                        o
                    ]));
                const s = t.endUpdate;
                t.endUpdate = (o)=>{
                    const a = i.indexOf(o);
                    return a === -1 && console.error("endUpdate called without beginUpdate", t.debugName, o.debugName), i.splice(a, 1), s.apply(t, [
                        o
                    ]);
                };
            }
        }
    }
    handleOnListenerCountChanged(e, t) {}
    handleObservableUpdated(e, t) {
        if (this._isIncluded(e)) {
            if (e instanceof TK) {
                this._handleDerivedRecomputed(e, t);
                return;
            }
            console.log(...this.textToConsoleArgs([
                o2t("observable value changed"),
                Ige(e.debugName, {
                    color: "BlueViolet"
                }),
                ...this.formatInfo(t)
            ]));
        }
    }
    formatChanges(e) {
        if (e.size !== 0) return Ige(" (changed deps: " + [
            ...e
        ].map((t)=>t.debugName).join(", ") + ")", {
            color: "gray"
        });
    }
    handleDerivedDependencyChanged(e, t, n) {
        this._isIncluded(e) && this.changedObservablesSets.get(e)?.add(t);
    }
    _handleDerivedRecomputed(e, t) {
        if (!this._isIncluded(e)) return;
        const n = this.changedObservablesSets.get(e);
        n && (console.log(...this.textToConsoleArgs([
            o2t("derived recomputed"),
            Ige(e.debugName, {
                color: "BlueViolet"
            }),
            ...this.formatInfo(t),
            this.formatChanges(n),
            {
                data: [
                    {
                        fn: e._debugNameData.referenceFn ?? e._computeFn
                    }
                ]
            }
        ])), n.clear());
    }
    handleDerivedCleared(e) {
        this._isIncluded(e) && console.log(...this.textToConsoleArgs([
            o2t("derived cleared"),
            Ige(e.debugName, {
                color: "BlueViolet"
            })
        ]));
    }
    handleFromEventObservableTriggered(e, t) {
        this._isIncluded(e) && console.log(...this.textToConsoleArgs([
            o2t("observable from event triggered"),
            Ige(e.debugName, {
                color: "BlueViolet"
            }),
            ...this.formatInfo(t),
            {
                data: [
                    {
                        fn: e._getValue
                    }
                ]
            }
        ]));
    }
    handleAutorunCreated(e) {
        this._isIncluded(e) && this.changedObservablesSets.set(e, new Set);
    }
    handleAutorunDisposed(e) {}
    handleAutorunDependencyChanged(e, t, n) {
        this._isIncluded(e) && this.changedObservablesSets.get(e).add(t);
    }
    handleAutorunStarted(e) {
        const t = this.changedObservablesSets.get(e);
        t && (this._isIncluded(e) && console.log(...this.textToConsoleArgs([
            o2t("autorun"),
            Ige(e.debugName, {
                color: "BlueViolet"
            }),
            this.formatChanges(t),
            {
                data: [
                    {
                        fn: e._debugNameData.referenceFn ?? e._runFn
                    }
                ]
            }
        ])), t.clear(), this.indentation++);
    }
    handleAutorunFinished(e) {
        this.indentation--;
    }
    handleBeginTransaction(e) {
        let t = e.getDebugName();
        t === void 0 && (t = ""), this._isIncluded(e) && console.log(...this.textToConsoleArgs([
            o2t("transaction"),
            Ige(t, {
                color: "BlueViolet"
            }),
            {
                data: [
                    {
                        fn: e._fn
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
