import { Tgv } from "./ComponentLogger.js";
import { D$t } from "./global-utils.js";
import { Egv } from "./logLevelLogger.js";
import { x } from "./tslib.es6.js";
import { qKs } from "./types_9.js";
var __wakaru_M$t_cache;
export function M$t() {
if (__wakaru_M$t_cache) return __wakaru_M$t_cache;
var e = {};
__wakaru_M$t_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.DiagAPI = void 0;
var t = Tgv(), n = Egv(), i = qKs(), r = D$t(), s = "diag", o = class hCm {
    constructor(){
        function c(h) {
            return function(...p) {
                const g = (0, r.getGlobal)("diag");
                if (g) return g[h](...p);
            };
        }
        const l = this, u = (h, p = {
            logLevel: i.DiagLogLevel.INFO
        })=>{
            var g, f, v;
            if (h === l) {
                const T = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                return l.error((g = T.stack) !== null && g !== void 0 ? g : T.message), !1;
            }
            typeof p == "number" && (p = {
                logLevel: p
            });
            const b = (0, r.getGlobal)("diag"), y = (0, n.createLogLevelDiagLogger)((f = p.logLevel) !== null && f !== void 0 ? f : i.DiagLogLevel.INFO, h);
            if (b && !p.suppressOverrideMessage) {
                const T = (v = new Error().stack) !== null && v !== void 0 ? v : "<failed to generate stacktrace>";
                b.warn(`Current logger will be overwritten from ${T}`), y.warn(`Current logger will overwrite one already registered from ${T}`);
            }
            return (0, r.registerGlobal)("diag", y, l, !0);
        };
        l.setLogger = u, l.disable = ()=>{
            (0, r.unregisterGlobal)(s, l);
        }, l.createComponentLogger = (h)=>new t.DiagComponentLogger(h), l.verbose = c("verbose"), l.debug = c("debug"), l.info = c("info"), l.warn = c("warn"), l.error = c("error");
    }
    static instance() {
        return this._instance || (this._instance = new hCm), this._instance;
    }
};
e.DiagAPI = o;

return e;
}
