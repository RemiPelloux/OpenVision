import { uN1 } from "./NoopTextMapPropagator.js";
import { B6p } from "./TextMapPropagator.js";
import { dN1 } from "./context-helpers.js";
import { BCn } from "./diag.js";
import { FCn } from "./global-utils.js";
import { E } from "./tslib.es6.js";
import { O6p } from "./utils_21.js";
var __wakaru_hN1_cache;
export function hN1() {
if (__wakaru_hN1_cache) return __wakaru_hN1_cache;
var t = {};
__wakaru_hN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.PropagationAPI = void 0;
var e = FCn(), n = uN1(), i = B6p(), r = dN1(), s = O6p(), o = BCn(), a = "propagation", l = new n.NoopTextMapPropagator, c = class ePb {
    constructor(){
        this.createBaggage = s.createBaggage, this.getBaggage = r.getBaggage, this.getActiveBaggage = r.getActiveBaggage, this.setBaggage = r.setBaggage, this.deleteBaggage = r.deleteBaggage;
    }
    static getInstance() {
        return this._instance || (this._instance = new ePb), this._instance;
    }
    setGlobalPropagator(d) {
        return (0, e.registerGlobal)(a, d, o.DiagAPI.instance());
    }
    inject(d, h, p = i.defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(d, h, p);
    }
    extract(d, h, p = i.defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(d, h, p);
    }
    fields() {
        return this._getGlobalPropagator().fields();
    }
    disable() {
        (0, e.unregisterGlobal)(a, o.DiagAPI.instance());
    }
    _getGlobalPropagator() {
        return (0, e.getGlobal)(a) || l;
    }
};
t.PropagationAPI = c;

return t;
}
