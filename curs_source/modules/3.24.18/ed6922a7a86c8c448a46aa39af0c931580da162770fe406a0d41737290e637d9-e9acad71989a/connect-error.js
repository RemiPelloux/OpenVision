import { q_v } from "./A3u.js";
import { TXs } from "./code-string.js";
import { PD, Rs } from "./code_3.js";
import { x } from "./tslib.es6.js";
var Qo;
export { Qo };
var __wakaru_rL_initialized = false;
export function rL() {
if (__wakaru_rL_initialized) return;
__wakaru_rL_initialized = true;
"use strict";
x(), PD(), TXs(), Qo = class Uin extends Error {
    constructor(t, n = Rs.Unknown, i, r, s){
        super(q_v(t, n)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = t, this.code = n, this.metadata = new Headers(i ?? {}), this.details = r ?? [], this.cause = s;
    }
    static from(t, n = Rs.Unknown) {
        return t instanceof Uin ? t : t instanceof Error ? t.name == "AbortError" ? new Uin(t.message, Rs.Canceled) : new Uin(t.message, n, void 0, void 0, t) : new Uin(String(t), n, void 0, void 0, t);
    }
    static [Symbol.hasInstance](t) {
        return t instanceof Error ? Object.getPrototypeOf(t) === Uin.prototype ? !0 : t.name === "ConnectError" && "code" in t && typeof t.code == "number" && "metadata" in t && "details" in t && Array.isArray(t.details) && "rawMessage" in t && typeof t.rawMessage == "string" && "cause" in t : !1;
    }
    findDetails(t) {
        const n = "typeName" in t ? {
            findMessage: (r)=>r === t.typeName ? t : void 0
        } : t, i = [];
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
