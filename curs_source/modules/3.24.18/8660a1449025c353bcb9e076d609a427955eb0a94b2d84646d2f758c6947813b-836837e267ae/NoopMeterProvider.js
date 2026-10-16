import { F6p } from "./NoopMeter.js";
import { E } from "./tslib.es6.js";
var __wakaru_aN1_cache;
export function aN1() {
if (__wakaru_aN1_cache) return __wakaru_aN1_cache;
var t = {};
__wakaru_aN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
var e = F6p(), n = class {
    getMeter(i, r, s) {
        return e.NOOP_METER;
    }
};
t.NoopMeterProvider = n, t.NOOP_METER_PROVIDER = new n;

return t;
}
