"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createLogLevelDiagLogger = void 0;
const n = require("./module-89340.js");
exports.createLogLevelDiagLogger = function(e, t) {
    function r(r, n) {
        const o = t[r];
        return "function" == typeof o && e >= n ? o.bind(t) : function() {};
    }
    return e < n.DiagLogLevel.NONE ? e = n.DiagLogLevel.NONE : e > n.DiagLogLevel.ALL && (e = n.DiagLogLevel.ALL), t = t || {}, {
        error: r("error", n.DiagLogLevel.ERROR),
        warn: r("warn", n.DiagLogLevel.WARN),
        info: r("info", n.DiagLogLevel.INFO),
        debug: r("debug", n.DiagLogLevel.DEBUG),
        verbose: r("verbose", n.DiagLogLevel.VERBOSE)
    };
};
