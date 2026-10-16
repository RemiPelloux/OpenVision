import { He, Se, rn, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Am, bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Mm, y4c, Ile, nbi, Dts, l2, S4c, k4c;
export { Dts, Ile, Mm, S4c, k4c, l2, nbi, y4c };
var __wakaru_gp_initialized = false;
export function gp() {
if (__wakaru_gp_initialized) return;
__wakaru_gp_initialized = true;
"use strict";
x(), bn(), Ar(), Se(), Pn(), Ze(), Mm = vn("progressService"), y4c = Object.freeze({
    total () {},
    worked () {},
    done () {}
}), Ile = class {
    constructor(e){
        this.callback = e;
    }
    get value() {
        return this._value;
    }
    report(e) {
        this._value = e, this.callback(this._value);
    }
}, Ile.None = Object.freeze({
    report () {}
}), nbi = class extends we {
    constructor(e, t){
        super(), this.deferred = new Am, t.withProgress(e, (n)=>(this.reporter = n, this.lastStep && n.report(this.lastStep), this.deferred.p)), this._register(rn(()=>this.deferred.complete()));
    }
    report(e) {
        this.reporter ? this.reporter.report(e) : this.lastStep = e;
    }
}, nbi = ie([
    C(1, Mm)
], nbi), Dts = class extends we {
    constructor(e){
        super(), this.progressIndicator = e, this.currentOperationId = 0, this.currentOperationDisposables = this._register(new He);
    }
    start(e) {
        this.stop();
        const t = ++this.currentOperationId, n = new Eo;
        return this.currentProgressTimeout = setTimeout(()=>{
            t === this.currentOperationId && (this.currentProgressRunner = this.progressIndicator.show(!0));
        }, e), this.currentOperationDisposables.add(rn(()=>clearTimeout(this.currentProgressTimeout))), this.currentOperationDisposables.add(rn(()=>n.cancel())), this.currentOperationDisposables.add(rn(()=>this.currentProgressRunner ? this.currentProgressRunner.done() : void 0)), {
            id: t,
            token: n.token,
            stop: ()=>this.doStop(t),
            isCurrent: ()=>this.currentOperationId === t
        };
    }
    stop() {
        this.doStop(this.currentOperationId);
    }
    doStop(e) {
        this.currentOperationId === e && this.currentOperationDisposables.clear();
    }
}, l2 = vn("editorProgressService"), S4c = Object.freeze({
    total () {},
    worked () {},
    done () {}
}), k4c = class extends we {
    show(e, t) {
        return S4c;
    }
    showWhile(e, t) {
        return Promise.resolve();
    }
}, mn(l2, k4c, 1);

}
