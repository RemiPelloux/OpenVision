import { Nt, Pn, Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { df, qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var B1, NHd, JAe, LWo, LHd, sne, OHd, FHd;
export { B1, FHd, JAe, LHd, LWo, NHd, OHd, sne };
var __wakaru_ab_initialized = false;
export function ab() {
if (__wakaru_ab_initialized) return;
__wakaru_ab_initialized = true;
"use strict";
E(), qn(), yo(), Qe(), Rn(), It(), B1 = jn("progressService"), NHd = Object.freeze({
    total () {},
    worked () {},
    done () {}
}), JAe = class {
    constructor(t){
        this.callback = t;
    }
    get value() {
        return this._value;
    }
    report(t) {
        this._value = t, this.callback(this._value);
    }
}, JAe.None = Object.freeze({
    report () {}
}), LWo = class extends st {
    constructor(t, e){
        super(), this.deferred = new df, e.withProgress(t, (n)=>(this.reporter = n, this.lastStep && n.report(this.lastStep), this.deferred.p)), this._register(Pn(()=>this.deferred.complete()));
    }
    report(t) {
        this.reporter ? this.reporter.report(t) : this.lastStep = t;
    }
}, LWo = Re([
    F(1, B1)
], LWo), LHd = class extends st {
    constructor(t){
        super(), this.progressIndicator = t, this.currentOperationId = 0, this.currentOperationDisposables = this._register(new Nt);
    }
    start(t) {
        this.stop();
        const e = ++this.currentOperationId, n = new El;
        return this.currentProgressTimeout = setTimeout(()=>{
            e === this.currentOperationId && (this.currentProgressRunner = this.progressIndicator.show(!0));
        }, t), this.currentOperationDisposables.add(Pn(()=>clearTimeout(this.currentProgressTimeout))), this.currentOperationDisposables.add(Pn(()=>n.cancel())), this.currentOperationDisposables.add(Pn(()=>this.currentProgressRunner ? this.currentProgressRunner.done() : void 0)), {
            id: e,
            token: n.token,
            stop: ()=>this.doStop(e),
            isCurrent: ()=>this.currentOperationId === e
        };
    }
    stop() {
        this.doStop(this.currentOperationId);
    }
    doStop(t) {
        this.currentOperationId === t && this.currentOperationDisposables.clear();
    }
}, sne = jn("editorProgressService"), OHd = Object.freeze({
    total () {},
    worked () {},
    done () {}
}), FHd = class extends st {
    show(t, e) {
        return OHd;
    }
    showWhile(t, e) {
        return Promise.resolve();
    }
}, bn(sne, FHd, 1);

}
