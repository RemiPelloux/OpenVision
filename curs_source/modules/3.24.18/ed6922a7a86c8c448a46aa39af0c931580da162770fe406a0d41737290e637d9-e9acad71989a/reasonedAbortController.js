import { Mlg, PEc, Vjr, si } from "./HVr.js";
import { x } from "./tslib.es6.js";
var $fh, Hfh, Wfh, Gfh;
export { $fh, Gfh, Hfh, Wfh };
var __wakaru_FGv_initialized = false;
export function FGv() {
if (__wakaru_FGv_initialized) return;
__wakaru_FGv_initialized = true;
"use strict";
x(), si(), $fh = class extends AbortController {
    constructor(e, t, n = 1, i){
        super(), this._logKey = e, this._structuredLogger = t, this._samplingRate = n, this._metadata = i, this.signal.addEventListener("abort", ()=>this._logAbortEvent(), {
            once: !0
        });
    }
    abort(e) {
        this.signal.aborted || (this._reason = e, super.abort(e));
    }
    getReason() {
        return this._reason;
    }
    _logAbortEvent() {
        if (Math.random() >= this._samplingRate) return;
        const e = {
            reason: this._reason || "unknown",
            ...this._metadata || {}
        };
        this._structuredLogger.info(this._logKey, "abort_controller_aborted", e);
    }
}, Hfh = class {
    constructor(e){
        this._structuredLogger = e;
    }
    create(e, t, n = 1) {
        const i = typeof n == "number" && n >= 0 && n <= 1 ? n : 1;
        return new $fh(e, this._structuredLogger, i, t);
    }
}, Wfh = AbortController, Gfh = class extends Wfh {
    abort(e) {
        if (e !== void 0 && Mlg() && PEc()) {
            const t = new Error().stack ?? "";
            Vjr.some((n)=>t.includes(n)) && console.trace("[AbortController.abort]", e);
        }
        super.abort(e);
    }
}, globalThis.AbortController = Gfh;

}
