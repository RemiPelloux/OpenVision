import { Hgv } from "./NoopMeterProvider.js";
import { M$t } from "./diag.js";
import { D$t } from "./global-utils.js";
import { x } from "./tslib.es6.js";
var __wakaru_Wgv_cache;
export function Wgv() {
if (__wakaru_Wgv_cache) return __wakaru_Wgv_cache;
var e = {};
__wakaru_Wgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.MetricsAPI = void 0;
var t = Hgv(), n = D$t(), i = M$t(), r = "metrics", s = class gCm {
    constructor(){}
    static getInstance() {
        return this._instance || (this._instance = new gCm), this._instance;
    }
    setGlobalMeterProvider(a) {
        return (0, n.registerGlobal)(r, a, i.DiagAPI.instance());
    }
    getMeterProvider() {
        return (0, n.getGlobal)(r) || t.NOOP_METER_PROVIDER;
    }
    getMeter(a, c, l) {
        return this.getMeterProvider().getMeter(a, c, l);
    }
    disable() {
        (0, n.unregisterGlobal)(r, i.DiagAPI.instance());
    }
};
e.MetricsAPI = s;

return e;
}
