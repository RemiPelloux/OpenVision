import { S } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { rt } from "./nls.js";
import { vn } from "./qIc.js";
import { Kp, Us } from "./severity_2.js";
import { x } from "./tslib.es6.js";
var nc, gKe, eT;
export { eT, gKe, nc };
var __wakaru_$__initialized = false;
export function $_() {
if (__wakaru_$__initialized) return;
__wakaru_$__initialized = true;
"use strict";
x(), Kp(), rt(), Ze(), nc = ((e)=>(e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.AI = 3] = "AI", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error", e))(nc || {}), ((e)=>{
    function t(c, l) {
        return l - c;
    }
    e.compare = t;
    const n = Object.create(null);
    n[8] = S(2112, null), n[4] = S(2113, null), n[2] = S(2114, null), n[3] = "AI Hint";
    function i(c) {
        return n[c] || "";
    }
    e.toString = i;
    const r = Object.create(null);
    r[8] = S(2115, null), r[4] = S(2116, null), r[2] = S(2117, null);
    function s(c) {
        return r[c] || "";
    }
    e.toStringPlural = s;
    function o(c) {
        switch(c){
            case Us.Error:
                return 8;
            case Us.Warning:
                return 4;
            case Us.Info:
                return 2;
            case Us.Ignore:
                return 1;
            case Us.AI:
                return 3;
            case Us.Success:
                return 2;
        }
    }
    e.fromSeverity = o;
    function a(c) {
        switch(c){
            case 8:
                return Us.Error;
            case 4:
                return Us.Warning;
            case 2:
                return Us.Info;
            case 1:
                return Us.Ignore;
            case 3:
                return Us.AI;
        }
    }
    e.toSeverity = a;
})(nc || (nc = {})), ((e)=>{
    function n(r) {
        return i(r, !0);
    }
    e.makeKey = n;
    function i(r, s) {
        const o = [
            ""
        ];
        return r.source ? o.push(r.source.replace("\xA6", "\\\xA6")) : o.push(""), r.code ? typeof r.code == "string" ? o.push(r.code.replace("\xA6", "\\\xA6")) : o.push(r.code.value.replace("\xA6", "\\\xA6")) : o.push(""), r.severity !== void 0 && r.severity !== null ? o.push(nc.toString(r.severity)) : o.push(""), r.message && s ? o.push(r.message.replace("\xA6", "\\\xA6")) : o.push(""), r.startLineNumber !== void 0 && r.startLineNumber !== null ? o.push(r.startLineNumber.toString()) : o.push(""), r.startColumn !== void 0 && r.startColumn !== null ? o.push(r.startColumn.toString()) : o.push(""), r.endLineNumber !== void 0 && r.endLineNumber !== null ? o.push(r.endLineNumber.toString()) : o.push(""), r.endColumn !== void 0 && r.endColumn !== null ? o.push(r.endColumn.toString()) : o.push(""), o.push(""), o.join("\xA6");
    }
    e.makeKeyOptionalMessage = i;
})(gKe || (gKe = {})), eT = vn("markerService");

}
