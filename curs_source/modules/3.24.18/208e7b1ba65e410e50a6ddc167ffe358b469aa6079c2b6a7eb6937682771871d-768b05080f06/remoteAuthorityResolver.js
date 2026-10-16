import { Ve, wi } from "./errors.js";
import { Q, ne } from "./instantiation.js";
import { h } from "./tslib.es6.js";
var Qct, Xf, ki;
export { Qct, Xf, ki };
var __wakaru_Zct_initialized = false;
export function Zct() {
if (__wakaru_Zct_initialized) return;
__wakaru_Zct_initialized = true;
"use strict";
h(), Ve(), ne(), Qct = Q("remoteAuthorityResolverService"), Xf = ((e)=>(e.Unknown = "Unknown", e.NotAvailable = "NotAvailable", e.TemporarilyNotAvailable = "TemporarilyNotAvailable", e.NoResolverFound = "NoResolverFound", e.InvalidAuthority = "InvalidAuthority", e))(Xf || {}), ki = class wl extends wi {
    static isNotAvailable(t) {
        return t instanceof wl && t._code === "NotAvailable";
    }
    static isTemporarilyNotAvailable(t) {
        return t instanceof wl && t._code === "TemporarilyNotAvailable";
    }
    static isNoResolverFound(t) {
        return t instanceof wl && t._code === "NoResolverFound";
    }
    static isInvalidAuthority(t) {
        return t instanceof wl && t._code === "InvalidAuthority";
    }
    static isHandled(t) {
        return t instanceof wl && t.isHandled;
    }
    constructor(t, n = "Unknown", r){
        super(t), this._message = t, this._code = n, this._detail = r, this.isHandled = n === "NotAvailable" && r === !0, Object.setPrototypeOf(this, wl.prototype);
    }
};

}
