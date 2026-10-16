import { pNu } from "./NoopMeter.js";
import { x } from "./tslib.es6.js";
var __wakaru_Hgv_cache;
export function Hgv() {
if (__wakaru_Hgv_cache) return __wakaru_Hgv_cache;
var e = {};
__wakaru_Hgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.NOOP_METER_PROVIDER = e.NoopMeterProvider = void 0;
var t = pNu(), n = class {
    getMeter(i, r, s) {
        return t.NOOP_METER;
    }
};
e.NoopMeterProvider = n, e.NOOP_METER_PROVIDER = new n;

return e;
}
