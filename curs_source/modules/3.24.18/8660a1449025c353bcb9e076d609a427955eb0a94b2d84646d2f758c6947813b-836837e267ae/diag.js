import { q31 } from "./ComponentLogger.js";
import { FCn } from "./global-utils.js";
import { z31 } from "./logLevelLogger.js";
import { E } from "./tslib.es6.js";
import { _5a } from "./types_9.js";
var __wakaru_BCn_cache;
export function BCn() {
if (__wakaru_BCn_cache) return __wakaru_BCn_cache;
var t = {};
__wakaru_BCn_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.DiagAPI = void 0;
var e = q31(), n = z31(), i = _5a(), r = FCn(), s = "diag", o = class X2b {
    constructor(){
        function l(d) {
            return function(...h) {
                const p = (0, r.getGlobal)("diag");
                if (p) return p[d](...h);
            };
        }
        const c = this, u = (d, h = {
            logLevel: i.DiagLogLevel.INFO
        })=>{
            var p, g, f;
            if (d === c) {
                const y = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                return c.error((p = y.stack) !== null && p !== void 0 ? p : y.message), !1;
            }
            typeof h == "number" && (h = {
                logLevel: h
            });
            const _ = (0, r.getGlobal)("diag"), b = (0, n.createLogLevelDiagLogger)((g = h.logLevel) !== null && g !== void 0 ? g : i.DiagLogLevel.INFO, d);
            if (_ && !h.suppressOverrideMessage) {
                const y = (f = new Error().stack) !== null && f !== void 0 ? f : "<failed to generate stacktrace>";
                _.warn(`Current logger will be overwritten from ${y}`), b.warn(`Current logger will overwrite one already registered from ${y}`);
            }
            return (0, r.registerGlobal)("diag", b, c, !0);
        };
        c.setLogger = u, c.disable = ()=>{
            (0, r.unregisterGlobal)(s, c);
        }, c.createComponentLogger = (d)=>new e.DiagComponentLogger(d), c.verbose = l("verbose"), c.debug = l("debug"), c.info = l("info"), c.warn = l("warn"), c.error = l("error");
    }
    static instance() {
        return this._instance || (this._instance = new X2b), this._instance;
    }
};
t.DiagAPI = o;

return t;
}
