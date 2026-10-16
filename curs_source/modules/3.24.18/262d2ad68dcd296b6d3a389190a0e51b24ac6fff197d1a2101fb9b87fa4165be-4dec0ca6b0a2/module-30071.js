"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DiagAPI = void 0;
const n = require("./module-14982.js"), o = require("./module-74975.js"), s = require("./module-89340.js"), i = require("./module-27976.js");
class a {
    constructor(){
        function e(e) {
            return function(...t) {
                const r = (0, i.getGlobal)("diag");
                if (r) return r[e](...t);
            };
        }
        const t = this;
        t.setLogger = (e, r = {
            logLevel: s.DiagLogLevel.INFO
        })=>{
            var n, a, l;
            if (e === t) {
                const e = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                return t.error(null !== (n = e.stack) && void 0 !== n ? n : e.message), !1;
            }
            "number" == typeof r && (r = {
                logLevel: r
            });
            const c = (0, i.getGlobal)("diag"), u = (0, o.createLogLevelDiagLogger)(null !== (a = r.logLevel) && void 0 !== a ? a : s.DiagLogLevel.INFO, e);
            if (c && !r.suppressOverrideMessage) {
                const e = null !== (l = (new Error).stack) && void 0 !== l ? l : "<failed to generate stacktrace>";
                c.warn(`Current logger will be overwritten from ${e}`), u.warn(`Current logger will overwrite one already registered from ${e}`);
            }
            return (0, i.registerGlobal)("diag", u, t, !0);
        }, t.disable = ()=>{
            (0, i.unregisterGlobal)("diag", t);
        }, t.createComponentLogger = (e)=>new n.DiagComponentLogger(e), t.verbose = e("verbose"), t.debug = e("debug"), t.info = e("info"), t.warn = e("warn"), t.error = e("error");
    }
    static instance() {
        return this._instance || (this._instance = new a), this._instance;
    }
}
exports.DiagAPI = a;
