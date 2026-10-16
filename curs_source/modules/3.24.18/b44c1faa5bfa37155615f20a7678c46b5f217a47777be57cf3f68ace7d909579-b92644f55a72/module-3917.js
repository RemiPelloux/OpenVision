"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ContextAPI = void 0;
const n = require("./module-12739.js"), s = require("./module-27976.js"), o = require("./module-30071.js"), i = "context", a = new n.NoopContextManager;
class c {
    constructor(){}
    static getInstance() {
        return this._instance || (this._instance = new c), this._instance;
    }
    setGlobalContextManager(e) {
        return (0, s.registerGlobal)(i, e, o.DiagAPI.instance());
    }
    active() {
        return this._getContextManager().active();
    }
    with(e, t, r, ...n) {
        return this._getContextManager().with(e, t, r, ...n);
    }
    bind(e, t) {
        return this._getContextManager().bind(e, t);
    }
    _getContextManager() {
        return (0, s.getGlobal)(i) || a;
    }
    disable() {
        this._getContextManager().disable(), (0, s.unregisterGlobal)(i, o.DiagAPI.instance());
    }
}
exports.ContextAPI = c;
