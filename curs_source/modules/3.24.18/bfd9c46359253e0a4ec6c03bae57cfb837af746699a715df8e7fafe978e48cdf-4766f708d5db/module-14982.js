"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DiagComponentLogger = void 0;
const n = require("./module-27976.js");
function s(e, t, r) {
    const s = (0, n.getGlobal)("diag");
    if (s) return r.unshift(t), s[e](...r);
}
exports.DiagComponentLogger = class {
    constructor(e){
        this._namespace = e.namespace || "DiagComponentLogger";
    }
    debug(...e) {
        return s("debug", this._namespace, e);
    }
    error(...e) {
        return s("error", this._namespace, e);
    }
    info(...e) {
        return s("info", this._namespace, e);
    }
    warn(...e) {
        return s("warn", this._namespace, e);
    }
    verbose(...e) {
        return s("verbose", this._namespace, e);
    }
};
