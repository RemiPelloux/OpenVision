import { Vgv } from "./NoopTextMapPropagator.js";
import { mNu } from "./TextMapPropagator.js";
import { jgv } from "./context-helpers.js";
import { M$t } from "./diag.js";
import { D$t } from "./global-utils.js";
import { x } from "./tslib.es6.js";
import { hNu } from "./utils_21.js";
var __wakaru_qgv_cache;
export function qgv() {
if (__wakaru_qgv_cache) return __wakaru_qgv_cache;
var e = {};
__wakaru_qgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.PropagationAPI = void 0;
var t = D$t(), n = Vgv(), i = mNu(), r = jgv(), s = hNu(), o = M$t(), a = "propagation", c = new n.NoopTextMapPropagator, l = class fCm {
    constructor(){
        this.createBaggage = s.createBaggage, this.getBaggage = r.getBaggage, this.getActiveBaggage = r.getActiveBaggage, this.setBaggage = r.setBaggage, this.deleteBaggage = r.deleteBaggage;
    }
    static getInstance() {
        return this._instance || (this._instance = new fCm), this._instance;
    }
    setGlobalPropagator(h) {
        return (0, t.registerGlobal)(a, h, o.DiagAPI.instance());
    }
    inject(h, p, g = i.defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(h, p, g);
    }
    extract(h, p, g = i.defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(h, p, g);
    }
    fields() {
        return this._getGlobalPropagator().fields();
    }
    disable() {
        (0, t.unregisterGlobal)(a, o.DiagAPI.instance());
    }
    _getGlobalPropagator() {
        return (0, t.getGlobal)(a) || c;
    }
};
e.PropagationAPI = l;

return e;
}
