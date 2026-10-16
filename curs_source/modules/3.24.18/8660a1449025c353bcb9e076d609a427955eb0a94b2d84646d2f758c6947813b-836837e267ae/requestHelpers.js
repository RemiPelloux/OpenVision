import { Ag } from "./connectErrors.js";
import { E } from "./tslib.es6.js";
import { t5m } from "./yBp.js";
var Xns, anl;
export { Xns, anl };
var __wakaru_lnl_initialized = false;
export function lnl() {
if (__wakaru_lnl_initialized) return;
__wakaru_lnl_initialized = true;
"use strict";
E(), Ag(), Xns = class cPb extends Error {
    constructor(e, n, i){
        super(`${e} failed with HTTP ${n}`), this.operation = e, this.status = n, this.retryAtMs = i, this.name = "HttpResponseError";
    }
    static fromResponse(e, n, i = Date.now()) {
        const r = t5m(n.headers.get("retry-after"), i);
        return new cPb(e, n.status, r === void 0 ? void 0 : i + r);
    }
}, anl = new WeakMap;

}
