"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MetricsAPI = void 0;
const n = require("./module-1847.js"), o = require("./module-7976.js"), s = require("./module-71.js"), i = "metrics";
class a {
    constructor(){}
    static getInstance() {
        return this._instance || (this._instance = new a), this._instance;
    }
    setGlobalMeterProvider(e) {
        return (0, o.registerGlobal)(i, e, s.DiagAPI.instance());
    }
    getMeterProvider() {
        return (0, o.getGlobal)(i) || n.NOOP_METER_PROVIDER;
    }
    getMeter(e, t, r) {
        return this.getMeterProvider().getMeter(e, t, r);
    }
    disable() {
        (0, o.unregisterGlobal)(i, s.DiagAPI.instance());
    }
}
exports.MetricsAPI = a;
