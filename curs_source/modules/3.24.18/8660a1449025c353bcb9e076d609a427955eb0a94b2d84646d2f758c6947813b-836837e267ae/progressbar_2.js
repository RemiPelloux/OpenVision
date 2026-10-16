import { Qe, Vn, st, zR } from "./Iwo.js";
import { IRk, iIg } from "./Ycg.js";
import { Yu, qn } from "./async.js";
import { Hn } from "./dom_2.js";
import { xRk } from "./progressbar.css";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { AS, R0 } from "./ze.js";
var Aus, Rus, nAi, iAi, Pus, Mus, VVt;
export { Aus, Mus, Pus, Rus, VVt, iAi, nAi };
var __wakaru_KVt_initialized = false;
export function KVt() {
if (__wakaru_KVt_initialized) return;
__wakaru_KVt_initialized = true;
"use strict";
E(), Hn(), iIg(), qn(), Qe(), To(), xRk(), Aus = "done", Rus = "active", nAi = "infinite", iAi = "infinite-long-running", Pus = "discrete", Mus = class seu extends st {
    constructor(e, n){
        super(), this.progressSignal = this._register(new Vn), this.workedVal = 0, this.showDelayedScheduler = this._register(new Yu(()=>R0(this.element), 0)), this.longRunningScheduler = this._register(new Yu(()=>this.infiniteLongRunning(), seu.LONG_RUNNING_INFINITE_THRESHOLD)), this.create(e, n);
    }
    create(e, n) {
        this.element = document.createElement("div"), this.element.classList.add("monaco-progress-container"), this.element.setAttribute("role", "progressbar"), this.element.setAttribute("aria-valuemin", "0"), e.appendChild(this.element), this.bit = document.createElement("div"), this.bit.classList.add("progress-bit"), this.bit.style.backgroundColor = n?.progressBarBackground || "#0E70C0", this.element.appendChild(this.bit);
    }
    off() {
        this.bit.style.width = "inherit", this.bit.style.opacity = "1", this.element.classList.remove(Rus, nAi, iAi, Pus), this.workedVal = 0, this.totalWork = void 0, this.longRunningScheduler.cancel(), this.progressSignal.clear();
    }
    done() {
        return this.doDone(!0);
    }
    stop() {
        return this.doDone(!1);
    }
    doDone(e) {
        return this.element.classList.add(Aus), this.element.classList.contains(nAi) ? (this.bit.style.opacity = "0", e ? setTimeout(()=>this.off(), 200) : this.off()) : (this.bit.style.width = "inherit", e ? setTimeout(()=>this.off(), 200) : this.off()), this;
    }
    infinite() {
        return this.bit.style.width = "2%", this.bit.style.opacity = "1", this.element.classList.remove(Pus, Aus, iAi), this.element.classList.add(Rus, nAi), this.longRunningScheduler.schedule(), this;
    }
    infiniteLongRunning() {
        this.element.classList.add(iAi);
    }
    total(e) {
        return this.workedVal = 0, this.totalWork = e, this.element.setAttribute("aria-valuemax", e.toString()), this;
    }
    hasTotal() {
        return zR(this.totalWork);
    }
    worked(e) {
        return e = Math.max(1, Number(e)), this.doSetWorked(this.workedVal + e);
    }
    setWorked(e) {
        return e = Math.max(1, Number(e)), this.doSetWorked(e);
    }
    doSetWorked(e) {
        const n = this.totalWork || 100;
        return this.workedVal = e, this.workedVal = Math.min(n, this.workedVal), this.element.classList.remove(nAi, iAi, Aus), this.element.classList.add(Rus, Pus), this.element.setAttribute("aria-valuenow", e.toString()), this.bit.style.width = 100 * (this.workedVal / n) + "%", this;
    }
    getContainer() {
        return this.element;
    }
    show(e) {
        this.showDelayedScheduler.cancel(), this.progressSignal.value = IRk(seu.PROGRESS_SIGNAL_DEFAULT_DELAY), typeof e == "number" ? this.showDelayedScheduler.schedule(e) : R0(this.element);
    }
    hide() {
        AS(this.element), this.showDelayedScheduler.cancel(), this.progressSignal.clear();
    }
}, Mus.LONG_RUNNING_INFINITE_THRESHOLD = 1e4, Mus.PROGRESS_SIGNAL_DEFAULT_DELAY = 3e3, VVt = Mus;

}
