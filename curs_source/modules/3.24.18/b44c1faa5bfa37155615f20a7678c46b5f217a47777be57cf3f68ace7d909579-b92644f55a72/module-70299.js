"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MetricsAPI = void 0;
const n = require("./module-41847.js"), s = require("./module-27976.js"), o = require("./module-30071.js"), i = "metrics";
class a {
    constructor(){}
    static getInstance() {
        return this._instance || (this._instance = new a), this._instance;
    }
    setGlobalMeterProvider(e) {
        return (0, s.registerGlobal)(i, e, o.DiagAPI.instance());
    }
    getMeterProvider() {
        return (0, s.getGlobal)(i) || n.NOOP_METER_PROVIDER;
    }
    getMeter(e, t, r) {
        return this.getMeterProvider().getMeter(e, t, r);
    }
    disable() {
        (0, s.unregisterGlobal)(i, o.DiagAPI.instance());
    }
}
exports.MetricsAPI = a;
