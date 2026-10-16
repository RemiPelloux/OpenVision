import { Ei, TD } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var w6, w0m, C0m, pCe, W4;
export { C0m, W4, pCe, w0m, w6 };
var __wakaru_UM_initialized = false;
export function UM() {
if (__wakaru_UM_initialized) return;
__wakaru_UM_initialized = true;
"use strict";
E(), Ei(), It(), w6 = jn("remoteAuthorityResolverService"), w0m = class {
    constructor(t){
        this.id = t, this.type = 1;
    }
    toString() {
        return `Managed(${this.id})`;
    }
}, C0m = class {
    constructor(t, e){
        this.host = t, this.port = e, this.type = 0;
    }
    toString() {
        return `WebSocket(${this.host}:${this.port})`;
    }
}, pCe = ((t)=>(t.Unknown = "Unknown", t.NotAvailable = "NotAvailable", t.TemporarilyNotAvailable = "TemporarilyNotAvailable", t.NoResolverFound = "NoResolverFound", t.InvalidAuthority = "InvalidAuthority", t))(pCe || {}), W4 = class Wsn extends TD {
    static isNotAvailable(e) {
        return e instanceof Wsn && e._code === "NotAvailable";
    }
    static isTemporarilyNotAvailable(e) {
        return e instanceof Wsn && e._code === "TemporarilyNotAvailable";
    }
    static isNoResolverFound(e) {
        return e instanceof Wsn && e._code === "NoResolverFound";
    }
    static isInvalidAuthority(e) {
        return e instanceof Wsn && e._code === "InvalidAuthority";
    }
    static isHandled(e) {
        return e instanceof Wsn && e.isHandled;
    }
    constructor(e, n = "Unknown", i){
        super(e), this._message = e, this._code = n, this._detail = i, this.isHandled = n === "NotAvailable" && i === !0, Object.setPrototypeOf(this, Wsn.prototype);
    }
};

}
