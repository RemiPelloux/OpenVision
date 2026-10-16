import { A0o, Ei, b_y, nYu } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var lng, cng, ung, dng;
export { cng, dng, lng, ung };
var __wakaru_shk_initialized = false;
export function shk() {
if (__wakaru_shk_initialized) return;
__wakaru_shk_initialized = true;
"use strict";
E(), Ei(), lng = class extends AbortController {
    constructor(t, e, n = 1, i){
        super(), this._logKey = t, this._structuredLogger = e, this._samplingRate = n, this._metadata = i, this.signal.addEventListener("abort", ()=>this._logAbortEvent(), {
            once: !0
        });
    }
    abort(t) {
        this.signal.aborted || (this._reason = t, super.abort(t));
    }
    getReason() {
        return this._reason;
    }
    _logAbortEvent() {
        if (Math.random() >= this._samplingRate) return;
        const t = {
            reason: this._reason || "unknown",
            ...this._metadata || {}
        };
        this._structuredLogger.info(this._logKey, "abort_controller_aborted", t);
    }
}, cng = class {
    constructor(t){
        this._structuredLogger = t;
    }
    create(t, e, n = 1) {
        const i = typeof n == "number" && n >= 0 && n <= 1 ? n : 1;
        return new lng(t, this._structuredLogger, i, e);
    }
}, ung = AbortController, dng = class extends ung {
    abort(t) {
        if (t !== void 0 && b_y() && nYu()) {
            const e = new Error().stack ?? "";
            A0o.some((n)=>e.includes(n)) && console.trace("[AbortController.abort]", t);
        }
        super.abort(t);
    }
}, globalThis.AbortController = dng;

}
