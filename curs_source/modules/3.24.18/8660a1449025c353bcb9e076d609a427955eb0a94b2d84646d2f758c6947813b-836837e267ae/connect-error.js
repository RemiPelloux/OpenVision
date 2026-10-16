import { Wzr } from "./code-string.js";
import { pr, vL } from "./code_3.js";
import { E } from "./tslib.es6.js";
import { l51 } from "./yBp.js";
var Us;
export { Us };
var __wakaru_Z5_initialized = false;
export function Z5() {
if (__wakaru_Z5_initialized) return;
__wakaru_Z5_initialized = true;
"use strict";
E(), vL(), Wzr(), Us = class u$n extends Error {
    constructor(e, n = pr.Unknown, i, r, s){
        super(l51(e, n)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e, this.code = n, this.metadata = new Headers(i ?? {}), this.details = r ?? [], this.cause = s;
    }
    static from(e, n = pr.Unknown) {
        return e instanceof u$n ? e : e instanceof Error ? e.name == "AbortError" ? new u$n(e.message, pr.Canceled) : new u$n(e.message, n, void 0, void 0, e) : new u$n(String(e), n, void 0, void 0, e);
    }
    static [Symbol.hasInstance](e) {
        return e instanceof Error ? Object.getPrototypeOf(e) === u$n.prototype ? !0 : e.name === "ConnectError" && "code" in e && typeof e.code == "number" && "metadata" in e && "details" in e && Array.isArray(e.details) && "rawMessage" in e && typeof e.rawMessage == "string" && "cause" in e : !1;
    }
    findDetails(e) {
        const n = "typeName" in e ? {
            findMessage: (r)=>r === e.typeName ? e : void 0
        } : e, i = [];
        for (const r of this.details){
            if ("getType" in r) {
                n.findMessage(r.getType().typeName) && i.push(r);
                continue;
            }
            const s = n.findMessage(r.type);
            if (s) try {
                i.push(s.fromBinary(r.value));
            } catch  {}
        }
        return i;
    }
};

}
