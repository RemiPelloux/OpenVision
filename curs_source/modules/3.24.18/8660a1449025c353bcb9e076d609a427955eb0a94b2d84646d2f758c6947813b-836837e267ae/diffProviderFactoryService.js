import { Gt, Qe, Vn, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { FD, yW } from "./editorWorker.js";
import { Rn } from "./extensions.js";
import { It, dn } from "./instantiation.js";
import { DD, wd } from "./lineRange.js";
import { I7, Swe, ane } from "./rangeMapping.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var TTr, ETr, bHe;
export { ETr, TTr, bHe };
var __wakaru__qd_initialized = false;
export function _qd() {
if (__wakaru__qd_initialized) return;
__wakaru__qd_initialized = true;
"use strict";
E(), Rn(), It(), Gt(), Qe(), DD(), Swe(), yW(), TTr = jn("diffProviderFactoryService"), ETr = class {
    constructor(t){
        this.instantiationService = t;
    }
    createDiffProvider(t) {
        return this.instantiationService.createInstance(bHe, t);
    }
}, ETr = Re([
    F(0, dn)
], ETr), bn(TTr, ETr, 1), bHe = class {
    constructor(t, e){
        this.editorWorkerService = e, this.onDidChangeEventEmitter = new tt, this.onDidChange = this.onDidChangeEventEmitter.event, this.diffAlgorithm = "advanced", this.diffAlgorithmOnDidChangeSubscription = new Vn, this.setOptions(t);
    }
    dispose() {
        this.diffAlgorithmOnDidChangeSubscription.clear();
    }
    async computeDiff(t, e, n, i) {
        if (typeof this.diffAlgorithm != "string") return this.diffAlgorithm.computeDiff(t, e, n, i);
        if (t.isDisposed() || e.isDisposed()) return {
            changes: [],
            identical: !0,
            quitEarly: !1,
            moves: []
        };
        if (t.getLineCount() === 1 && t.getLineMaxColumn(1) === 1) return e.getLineCount() === 1 && e.getLineMaxColumn(1) === 1 ? {
            changes: [],
            identical: !0,
            quitEarly: !1,
            moves: []
        } : {
            changes: [
                new I7(new wd(1, 2), new wd(1, e.getLineCount() + 1), [
                    new ane(t.getFullModelRange(), e.getFullModelRange())
                ])
            ],
            identical: !1,
            quitEarly: !1,
            moves: []
        };
        const r = JSON.stringify([
            t.uri.toString(),
            e.uri.toString()
        ]), s = JSON.stringify([
            t.id,
            e.id,
            t.getAlternativeVersionId(),
            e.getAlternativeVersionId(),
            JSON.stringify(n)
        ]), o = bHe.diffCache.get(r);
        if (o && o.context === s) return o.result;
        const a = await this.editorWorkerService.computeDiff(t.uri, e.uri, n, this.diffAlgorithm);
        if (i.isCancellationRequested) return {
            changes: [],
            identical: !1,
            quitEarly: !0,
            moves: []
        };
        if (!a) throw new Error("no diff result available");
        return bHe.diffCache.size > 10 && bHe.diffCache.delete(bHe.diffCache.keys().next().value), bHe.diffCache.set(r, {
            result: a,
            context: s
        }), a;
    }
    setOptions(t) {
        let e = !1;
        t.diffAlgorithm && this.diffAlgorithm !== t.diffAlgorithm && (this.diffAlgorithmOnDidChangeSubscription.clear(), this.diffAlgorithm = t.diffAlgorithm, typeof t.diffAlgorithm != "string" && (this.diffAlgorithmOnDidChangeSubscription.value = t.diffAlgorithm.onDidChange(()=>this.onDidChangeEventEmitter.fire())), e = !0), e && this.onDidChangeEventEmitter.fire();
    }
}, bHe.diffCache = new Map, bHe = Re([
    F(1, FD)
], bHe);

}
