"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DiagComponentLogger = void 0;
const n = require("./module-27976.js");
function o(e, t, r) {
    const o = (0, n.getGlobal)("diag");
    if (o) return r.unshift(t), o[e](...r);
}
exports.DiagComponentLogger = class {
    constructor(e){
        this._namespace = e.namespace || "DiagComponentLogger";
    }
    debug(...e) {
        return o("debug", this._namespace, e);
    }
    error(...e) {
        return o("error", this._namespace, e);
    }
    info(...e) {
        return o("info", this._namespace, e);
    }
    warn(...e) {
        return o("warn", this._namespace, e);
    }
    verbose(...e) {
        return o("verbose", this._namespace, e);
    }
};
