import { OT, si } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var I2, eOd, tOd, xde, nF;
export { I2, eOd, nF, tOd, xde };
var __wakaru_DR_initialized = false;
export function DR() {
if (__wakaru_DR_initialized) return;
__wakaru_DR_initialized = true;
"use strict";
x(), si(), Ze(), I2 = vn("remoteAuthorityResolverService"), eOd = class {
    constructor(e){
        this.id = e, this.type = 1;
    }
    toString() {
        return `Managed(${this.id})`;
    }
}, tOd = class {
    constructor(e, t){
        this.host = e, this.port = t, this.type = 0;
    }
    toString() {
        return `WebSocket(${this.host}:${this.port})`;
    }
}, xde = ((e)=>(e.Unknown = "Unknown", e.NotAvailable = "NotAvailable", e.TemporarilyNotAvailable = "TemporarilyNotAvailable", e.NoResolverFound = "NoResolverFound", e.InvalidAuthority = "InvalidAuthority", e))(xde || {}), nF = class BAt extends OT {
    static isNotAvailable(t) {
        return t instanceof BAt && t._code === "NotAvailable";
    }
    static isTemporarilyNotAvailable(t) {
        return t instanceof BAt && t._code === "TemporarilyNotAvailable";
    }
    static isNoResolverFound(t) {
        return t instanceof BAt && t._code === "NoResolverFound";
    }
    static isInvalidAuthority(t) {
        return t instanceof BAt && t._code === "InvalidAuthority";
    }
    static isHandled(t) {
        return t instanceof BAt && t.isHandled;
    }
    constructor(t, n = "Unknown", i){
        super(t), this._message = t, this._code = n, this._detail = i, this.isHandled = n === "NotAvailable" && i === !0, Object.setPrototypeOf(this, BAt.prototype);
    }
};

}
