import { Nt, Pn, Qe } from "./Iwo.js";
import { Hn, Pr, ws } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { li } from "./ze.js";
var lBt;
export { lBt };
var __wakaru_wfn_initialized = false;
export function wfn() {
if (__wakaru_wfn_initialized) return;
__wakaru_wfn_initialized = true;
"use strict";
E(), Hn(), Qe(), lBt = class {
    constructor(){
        this._hooks = new Nt, this._pointerMoveCallback = null, this._onStopCallback = null;
    }
    dispose() {
        this.stopMonitoring(!1), this._hooks.dispose();
    }
    stopMonitoring(t, e) {
        if (!this.isMonitoring()) return;
        this._hooks.clear(), this._pointerMoveCallback = null;
        const n = this._onStopCallback;
        this._onStopCallback = null, t && n && n(e);
    }
    isMonitoring() {
        return !!this._pointerMoveCallback;
    }
    startMonitoring(t, e, n, i, r) {
        this.isMonitoring() && this.stopMonitoring(!1), this._pointerMoveCallback = i, this._onStopCallback = r;
        let s = t;
        try {
            t.setPointerCapture(e), this._hooks.add(Pn(()=>{
                try {
                    t.releasePointerCapture(e);
                } catch  {}
            }));
        } catch  {
            s = ws(t);
        }
        this._hooks.add(li(s, Pr.POINTER_MOVE, (o)=>{
            if (o.buttons !== n) {
                this.stopMonitoring(!0);
                return;
            }
            o.preventDefault(), this._pointerMoveCallback(o);
        })), this._hooks.add(li(s, Pr.POINTER_UP, (o)=>this.stopMonitoring(!0)));
    }
};

}
