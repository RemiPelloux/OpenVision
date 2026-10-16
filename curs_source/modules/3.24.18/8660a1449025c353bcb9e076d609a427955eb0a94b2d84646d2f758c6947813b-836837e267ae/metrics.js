import { aN1 } from "./NoopMeterProvider.js";
import { BCn } from "./diag.js";
import { FCn } from "./global-utils.js";
import { E } from "./tslib.es6.js";
var __wakaru_lN1_cache;
export function lN1() {
if (__wakaru_lN1_cache) return __wakaru_lN1_cache;
var t = {};
__wakaru_lN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.MetricsAPI = void 0;
var e = aN1(), n = FCn(), i = BCn(), r = "metrics", s = class J2b {
    constructor(){}
    static getInstance() {
        return this._instance || (this._instance = new J2b), this._instance;
    }
    setGlobalMeterProvider(a) {
        return (0, n.registerGlobal)(r, a, i.DiagAPI.instance());
    }
    getMeterProvider() {
        return (0, n.getGlobal)(r) || e.NOOP_METER_PROVIDER;
    }
    getMeter(a, l, c) {
        return this.getMeterProvider().getMeter(a, l, c);
    }
    disable() {
        (0, n.unregisterGlobal)(r, i.DiagAPI.instance());
    }
};
t.MetricsAPI = s;

return t;
}
