import { Ixl } from "./Ycg.js";
import { E } from "./tslib.es6.js";
import { GIt, ZMe } from "./utils_33.js";
var Oxl;
export { Oxl };
var __wakaru_spf_initialized = false;
export function spf() {
if (__wakaru_spf_initialized) return;
__wakaru_spf_initialized = true;
E(), ZMe(), Oxl = class {
    #e;
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout(), Ixl(this.gcTime) && (this.#e = setTimeout(()=>{
            this.optionalRemove();
        }, this.gcTime));
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (GIt ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
        this.#e && (clearTimeout(this.#e), this.#e = void 0);
    }
};

}
