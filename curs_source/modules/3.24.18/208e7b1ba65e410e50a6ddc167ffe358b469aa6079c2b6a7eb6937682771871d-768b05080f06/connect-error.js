import { Z$ } from "./code-string.js";
import { Be, Lt } from "./code.js";
import { h } from "./tslib.es6.js";
function KS(e) {
    const t = Be[e];
    return typeof t != "string" ? e.toString() : t[0].toLowerCase() + t.substring(1).replace(/[A-Z]/g, (n)=>"_" + n.toLowerCase());
}
function yje(e, t) {
    return e.length ? `[${KS(t)}] ${e}` : `[${KS(t)}]`;
}
var wt;
export { KS, wt, yje };
var __wakaru_Kt_initialized = false;
export function Kt() {
if (__wakaru_Kt_initialized) return;
__wakaru_Kt_initialized = true;
"use strict";
h(), Lt(), Z$(), wt = class mm extends Error {
    constructor(t, n = Be.Unknown, r, s, i){
        super(yje(t, n)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = t, this.code = n, this.metadata = new Headers(r ?? {}), this.details = s ?? [], this.cause = i;
    }
    static from(t, n = Be.Unknown) {
        return t instanceof mm ? t : t instanceof Error ? t.name == "AbortError" ? new mm(t.message, Be.Canceled) : new mm(t.message, n, void 0, void 0, t) : new mm(String(t), n, void 0, void 0, t);
    }
    static [Symbol.hasInstance](t) {
        return t instanceof Error ? Object.getPrototypeOf(t) === mm.prototype ? !0 : t.name === "ConnectError" && "code" in t && typeof t.code == "number" && "metadata" in t && "details" in t && Array.isArray(t.details) && "rawMessage" in t && typeof t.rawMessage == "string" && "cause" in t : !1;
    }
    findDetails(t) {
        const n = "typeName" in t ? {
            findMessage: (s)=>s === t.typeName ? t : void 0
        } : t, r = [];
        for (const s of this.details){
            if ("getType" in s) {
                n.findMessage(s.getType().typeName) && r.push(s);
                continue;
            }
            const i = n.findMessage(s.type);
            if (i) try {
                r.push(i.fromBinary(s.value));
            } catch  {}
        }
        return r;
    }
};

}
