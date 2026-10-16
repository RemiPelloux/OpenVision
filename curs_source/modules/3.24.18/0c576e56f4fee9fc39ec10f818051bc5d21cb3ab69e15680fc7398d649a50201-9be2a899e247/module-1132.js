"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PropagationAPI = void 0;
const n = require("./module-7976.js"), o = require("./module-5582.js"), s = require("./module-8414.js"), i = require("./module-3827.js"), a = require("./module-2505.js"), c = require("./module-71.js"), u = "propagation", l = new o.NoopTextMapPropagator;
class d {
    constructor(){
        this.createBaggage = a.createBaggage, this.getBaggage = i.getBaggage, this.getActiveBaggage = i.getActiveBaggage, this.setBaggage = i.setBaggage, this.deleteBaggage = i.deleteBaggage;
    }
    static getInstance() {
        return this._instance || (this._instance = new d), this._instance;
    }
    setGlobalPropagator(e) {
        return (0, n.registerGlobal)(u, e, c.DiagAPI.instance());
    }
    inject(e, t, r = s.defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(e, t, r);
    }
    extract(e, t, r = s.defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(e, t, r);
    }
    fields() {
        return this._getGlobalPropagator().fields();
    }
    disable() {
        (0, n.unregisterGlobal)(u, c.DiagAPI.instance());
    }
    _getGlobalPropagator() {
        return (0, n.getGlobal)(u) || l;
    }
}
exports.PropagationAPI = d;
