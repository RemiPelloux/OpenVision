import { D } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { Bt } from "./nls.js";
import { Ua, ob } from "./severity_2.js";
import { E } from "./tslib.es6.js";
var ed, FBt, V3;
export { FBt, V3, ed };
var __wakaru_rT_initialized = false;
export function rT() {
if (__wakaru_rT_initialized) return;
__wakaru_rT_initialized = true;
"use strict";
E(), ob(), Bt(), It(), ed = ((t)=>(t[t.Hint = 1] = "Hint", t[t.Info = 2] = "Info", t[t.AI = 3] = "AI", t[t.Warning = 4] = "Warning", t[t.Error = 8] = "Error", t))(ed || {}), ((t)=>{
    function e(l, c) {
        return c - l;
    }
    t.compare = e;
    const n = Object.create(null);
    n[8] = D(2112, null), n[4] = D(2113, null), n[2] = D(2114, null), n[3] = "AI Hint";
    function i(l) {
        return n[l] || "";
    }
    t.toString = i;
    const r = Object.create(null);
    r[8] = D(2115, null), r[4] = D(2116, null), r[2] = D(2117, null);
    function s(l) {
        return r[l] || "";
    }
    t.toStringPlural = s;
    function o(l) {
        switch(l){
            case Ua.Error:
                return 8;
            case Ua.Warning:
                return 4;
            case Ua.Info:
                return 2;
            case Ua.Ignore:
                return 1;
            case Ua.AI:
                return 3;
            case Ua.Success:
                return 2;
        }
    }
    t.fromSeverity = o;
    function a(l) {
        switch(l){
            case 8:
                return Ua.Error;
            case 4:
                return Ua.Warning;
            case 2:
                return Ua.Info;
            case 1:
                return Ua.Ignore;
            case 3:
                return Ua.AI;
        }
    }
    t.toSeverity = a;
})(ed || (ed = {})), ((t)=>{
    function n(r) {
        return i(r, !0);
    }
    t.makeKey = n;
    function i(r, s) {
        const o = [
            ""
        ];
        return r.source ? o.push(r.source.replace("\xA6", "\\\xA6")) : o.push(""), r.code ? typeof r.code == "string" ? o.push(r.code.replace("\xA6", "\\\xA6")) : o.push(r.code.value.replace("\xA6", "\\\xA6")) : o.push(""), r.severity !== void 0 && r.severity !== null ? o.push(ed.toString(r.severity)) : o.push(""), r.message && s ? o.push(r.message.replace("\xA6", "\\\xA6")) : o.push(""), r.startLineNumber !== void 0 && r.startLineNumber !== null ? o.push(r.startLineNumber.toString()) : o.push(""), r.startColumn !== void 0 && r.startColumn !== null ? o.push(r.startColumn.toString()) : o.push(""), r.endLineNumber !== void 0 && r.endLineNumber !== null ? o.push(r.endLineNumber.toString()) : o.push(""), r.endColumn !== void 0 && r.endColumn !== null ? o.push(r.endColumn.toString()) : o.push(""), o.push(""), o.join("\xA6");
    }
    t.makeKeyOptionalMessage = i;
})(FBt || (FBt = {})), V3 = jn("markerService");

}
