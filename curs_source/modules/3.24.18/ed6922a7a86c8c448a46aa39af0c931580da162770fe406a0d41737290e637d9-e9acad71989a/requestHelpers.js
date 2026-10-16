import { hjd } from "./A3u.js";
import { TN } from "./connectErrors.js";
import { x } from "./tslib.es6.js";
var MYi, Dyo;
export { Dyo, MYi };
var __wakaru_Myo_initialized = false;
export function Myo() {
if (__wakaru_Myo_initialized) return;
__wakaru_Myo_initialized = true;
"use strict";
x(), TN(), MYi = class TCm extends Error {
    constructor(t, n, i){
        super(`${t} failed with HTTP ${n}`), this.operation = t, this.status = n, this.retryAtMs = i, this.name = "HttpResponseError";
    }
    static fromResponse(t, n, i = Date.now()) {
        const r = hjd(n.headers.get("retry-after"), i);
        return new TCm(t, n.status, r === void 0 ? void 0 : i + r);
    }
}, Dyo = new WeakMap;

}
