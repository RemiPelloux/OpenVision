import { He, Se, rn } from "./HVr.js";
import { Fn, en, xi } from "./dom_2.js";
import { Xt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Upt;
export { Upt };
var __wakaru_VOt_initialized = false;
export function VOt() {
if (__wakaru_VOt_initialized) return;
__wakaru_VOt_initialized = true;
"use strict";
x(), en(), Se(), Upt = class {
    constructor(){
        this._hooks = new He, this._pointerMoveCallback = null, this._onStopCallback = null;
    }
    dispose() {
        this.stopMonitoring(!1), this._hooks.dispose();
    }
    stopMonitoring(e, t) {
        if (!this.isMonitoring()) return;
        this._hooks.clear(), this._pointerMoveCallback = null;
        const n = this._onStopCallback;
        this._onStopCallback = null, e && n && n(t);
    }
    isMonitoring() {
        return !!this._pointerMoveCallback;
    }
    startMonitoring(e, t, n, i, r) {
        this.isMonitoring() && this.stopMonitoring(!1), this._pointerMoveCallback = i, this._onStopCallback = r;
        let s = e;
        try {
            e.setPointerCapture(t), this._hooks.add(rn(()=>{
                try {
                    e.releasePointerCapture(t);
                } catch  {}
            }));
        } catch  {
            s = xi(e);
        }
        this._hooks.add(Xt(s, Fn.POINTER_MOVE, (o)=>{
            if (o.buttons !== n) {
                this.stopMonitoring(!0);
                return;
            }
            o.preventDefault(), this._pointerMoveCallback(o);
        })), this._hooks.add(Xt(s, Fn.POINTER_UP, (o)=>this.stopMonitoring(!0)));
    }
};

}
