"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PropagationAPI = void 0;
const n = require("./module-27976.js"), s = require("./module-75582.js"), o = require("./module-8414.js"), i = require("./module-53827.js"), a = require("./module-42505.js"), c = require("./module-30071.js"), l = "propagation", u = new s.NoopTextMapPropagator;
class d {
    constructor(){
        this.createBaggage = a.createBaggage, this.getBaggage = i.getBaggage, this.getActiveBaggage = i.getActiveBaggage, this.setBaggage = i.setBaggage, this.deleteBaggage = i.deleteBaggage;
    }
    static getInstance() {
        return this._instance || (this._instance = new d), this._instance;
    }
    setGlobalPropagator(e) {
        return (0, n.registerGlobal)(l, e, c.DiagAPI.instance());
    }
    inject(e, t, r = o.defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(e, t, r);
    }
    extract(e, t, r = o.defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(e, t, r);
    }
    fields() {
        return this._getGlobalPropagator().fields();
    }
    disable() {
        (0, n.unregisterGlobal)(l, c.DiagAPI.instance());
    }
    _getGlobalPropagator() {
        return (0, n.getGlobal)(l) || u;
    }
}
exports.PropagationAPI = d;
