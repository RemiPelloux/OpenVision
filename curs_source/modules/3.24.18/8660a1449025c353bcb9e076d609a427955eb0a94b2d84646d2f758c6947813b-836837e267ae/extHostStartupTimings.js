import { Gt, Qe, st, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var Jgl, efl, tfl, Yus, nfl, eKt, ifl, Dxg, Nxg;
export { Dxg, Jgl, Nxg, Yus, eKt, efl, ifl, nfl, tfl };
var __wakaru_rfl_initialized = false;
export function rfl() {
if (__wakaru_rfl_initialized) return;
__wakaru_rfl_initialized = true;
"use strict";
E(), Gt(), Qe(), Jgl = "code/timeOrigin", efl = "code/extHost/willConnectToRenderer", tfl = "code/extHost/didWaitForInitData", Yus = "code/extHost/ready", nfl = "code/extHost/didActivateEagerExtensions", eKt = "localExtHost:", ifl = "user", Dxg = `${eKt}${ifl}`, Nxg = class extends st {
    constructor(t){
        super(), this._marks = t, this._onDidObserveActivationMark = this._register(new tt), this.onDidObserveActivationMark = this._onDidObserveActivationMark.event, this._observedRoles = new Set;
    }
    observe(t) {
        if (!t.startsWith(eKt) || this._marks.getStartTimeForSource(t, nfl) === -1) return;
        const e = t.slice(eKt.length);
        this._observedRoles.has(e) || (this._observedRoles.add(e), this._onDidObserveActivationMark.fire(e));
    }
    getTimingsByRole() {
        const t = [], e = new Set;
        for (const [n] of this._marks.getEntries()){
            if (!n.startsWith(eKt) || e.has(n)) continue;
            e.add(n);
            const i = this._computeForSource(n);
            Object.values(i).some((r)=>r !== void 0) && t.push({
                role: n.slice(eKt.length),
                ...i
            });
        }
        return t;
    }
    getUserHostTimings() {
        return this._computeForSource(Dxg);
    }
    _computeForSource(t) {
        const e = (n)=>n === void 0 ? void 0 : Math.round(n);
        return {
            boot: e(this._marks.getDurationIfPresentForSource(t, Jgl, Yus)),
            bundleLoad: e(this._marks.getDurationIfPresentForSource(t, Jgl, efl)),
            waitForInit: this._marks.getDurationIfPresentForSource(t, efl, tfl),
            init: this._marks.getDurationIfPresentForSource(t, tfl, Yus),
            eagerActivation: this._marks.getDurationIfPresentForSource(t, Yus, nfl)
        };
    }
};

}
