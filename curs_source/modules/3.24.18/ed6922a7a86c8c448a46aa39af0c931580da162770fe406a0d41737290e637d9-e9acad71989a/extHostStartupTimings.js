import { Se, bt, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var mRo, gRo, fRo, Cnr, vRo, y0t, _Ro, t3h, n3h;
export { Cnr, _Ro, fRo, gRo, mRo, n3h, t3h, vRo, y0t };
var __wakaru_bRo_initialized = false;
export function bRo() {
if (__wakaru_bRo_initialized) return;
__wakaru_bRo_initialized = true;
"use strict";
x(), bt(), Se(), mRo = "code/timeOrigin", gRo = "code/extHost/willConnectToRenderer", fRo = "code/extHost/didWaitForInitData", Cnr = "code/extHost/ready", vRo = "code/extHost/didActivateEagerExtensions", y0t = "localExtHost:", _Ro = "user", t3h = `${y0t}${_Ro}`, n3h = class extends we {
    constructor(e){
        super(), this._marks = e, this._onDidObserveActivationMark = this._register(new ve), this.onDidObserveActivationMark = this._onDidObserveActivationMark.event, this._observedRoles = new Set;
    }
    observe(e) {
        if (!e.startsWith(y0t) || this._marks.getStartTimeForSource(e, vRo) === -1) return;
        const t = e.slice(y0t.length);
        this._observedRoles.has(t) || (this._observedRoles.add(t), this._onDidObserveActivationMark.fire(t));
    }
    getTimingsByRole() {
        const e = [], t = new Set;
        for (const [n] of this._marks.getEntries()){
            if (!n.startsWith(y0t) || t.has(n)) continue;
            t.add(n);
            const i = this._computeForSource(n);
            Object.values(i).some((r)=>r !== void 0) && e.push({
                role: n.slice(y0t.length),
                ...i
            });
        }
        return e;
    }
    getUserHostTimings() {
        return this._computeForSource(t3h);
    }
    _computeForSource(e) {
        const t = (n)=>n === void 0 ? void 0 : Math.round(n);
        return {
            boot: t(this._marks.getDurationIfPresentForSource(e, mRo, Cnr)),
            bundleLoad: t(this._marks.getDurationIfPresentForSource(e, mRo, gRo)),
            waitForInit: this._marks.getDurationIfPresentForSource(e, gRo, fRo),
            init: this._marks.getDurationIfPresentForSource(e, fRo, Cnr),
            eagerActivation: this._marks.getDurationIfPresentForSource(e, Cnr, vRo)
        };
    }
};

}
