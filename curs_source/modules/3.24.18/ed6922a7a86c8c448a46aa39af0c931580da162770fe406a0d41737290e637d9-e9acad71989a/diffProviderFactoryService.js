import { Se, bt, cn, ve } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { YC, kM } from "./editorWorker.js";
import { Pn } from "./extensions.js";
import { Ze, _t } from "./instantiation.js";
import { Vl, hA } from "./lineRange.js";
import { mn, vn } from "./qIc.js";
import { C3, KV, Ple } from "./rangeMapping.js";
import { x } from "./tslib.es6.js";
var Zbi, Qbi, aRe;
export { Qbi, Zbi, aRe };
var __wakaru_V8c_initialized = false;
export function V8c() {
if (__wakaru_V8c_initialized) return;
__wakaru_V8c_initialized = true;
"use strict";
x(), Pn(), Ze(), bt(), Se(), hA(), Ple(), kM(), Zbi = vn("diffProviderFactoryService"), Qbi = class {
    constructor(e){
        this.instantiationService = e;
    }
    createDiffProvider(e) {
        return this.instantiationService.createInstance(aRe, e);
    }
}, Qbi = ie([
    C(0, _t)
], Qbi), mn(Zbi, Qbi, 1), aRe = class {
    constructor(e, t){
        this.editorWorkerService = t, this.onDidChangeEventEmitter = new ve, this.onDidChange = this.onDidChangeEventEmitter.event, this.diffAlgorithm = "advanced", this.diffAlgorithmOnDidChangeSubscription = new cn, this.setOptions(e);
    }
    dispose() {
        this.diffAlgorithmOnDidChangeSubscription.clear();
    }
    async computeDiff(e, t, n, i) {
        if (typeof this.diffAlgorithm != "string") return this.diffAlgorithm.computeDiff(e, t, n, i);
        if (e.isDisposed() || t.isDisposed()) return {
            changes: [],
            identical: !0,
            quitEarly: !1,
            moves: []
        };
        if (e.getLineCount() === 1 && e.getLineMaxColumn(1) === 1) return t.getLineCount() === 1 && t.getLineMaxColumn(1) === 1 ? {
            changes: [],
            identical: !0,
            quitEarly: !1,
            moves: []
        } : {
            changes: [
                new C3(new Vl(1, 2), new Vl(1, t.getLineCount() + 1), [
                    new KV(e.getFullModelRange(), t.getFullModelRange())
                ])
            ],
            identical: !1,
            quitEarly: !1,
            moves: []
        };
        const r = JSON.stringify([
            e.uri.toString(),
            t.uri.toString()
        ]), s = JSON.stringify([
            e.id,
            t.id,
            e.getAlternativeVersionId(),
            t.getAlternativeVersionId(),
            JSON.stringify(n)
        ]), o = aRe.diffCache.get(r);
        if (o && o.context === s) return o.result;
        const a = await this.editorWorkerService.computeDiff(e.uri, t.uri, n, this.diffAlgorithm);
        if (i.isCancellationRequested) return {
            changes: [],
            identical: !1,
            quitEarly: !0,
            moves: []
        };
        if (!a) throw new Error("no diff result available");
        return aRe.diffCache.size > 10 && aRe.diffCache.delete(aRe.diffCache.keys().next().value), aRe.diffCache.set(r, {
            result: a,
            context: s
        }), a;
    }
    setOptions(e) {
        let t = !1;
        e.diffAlgorithm && this.diffAlgorithm !== e.diffAlgorithm && (this.diffAlgorithmOnDidChangeSubscription.clear(), this.diffAlgorithm = e.diffAlgorithm, typeof e.diffAlgorithm != "string" && (this.diffAlgorithmOnDidChangeSubscription.value = e.diffAlgorithm.onDidChange(()=>this.onDidChangeEventEmitter.fire())), t = !0), t && this.onDidChangeEventEmitter.fire();
    }
}, aRe.diffCache = new Map, aRe = ie([
    C(1, YC)
], aRe);

}
