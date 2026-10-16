import { h } from "./tslib.es6.js";
function Uj(e) {
    let t = !1;
    const n = [];
    for(let r = 0; r < e.length; r++){
        let s = e.charAt(r);
        switch(s){
            case "_":
                t = !0;
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                n.push(s), t = !1;
                break;
            default:
                t && (t = !1, s = s.toUpperCase()), n.push(s);
                break;
        }
    }
    return n.join("");
}
var xj, Fj, Wj, FM, Bj, Gj;
export { Bj, FM, Fj, Gj, Uj, Wj, xj };
var __wakaru_Mh_initialized = false;
export function Mh() {
if (__wakaru_Mh_initialized) return;
__wakaru_Mh_initialized = true;
"use strict";
h(), xj = Uj, Fj = new Set([
    "constructor",
    "toString",
    "toJSON",
    "valueOf"
]), Wj = new Set([
    "getType",
    "clone",
    "equals",
    "fromBinary",
    "fromJson",
    "fromJsonString",
    "toBinary",
    "toJson",
    "toJsonString",
    "toObject"
]), FM = (e)=>`${e}$`, Bj = (e)=>Wj.has(e) ? FM(e) : e, Gj = (e)=>Fj.has(e) ? FM(e) : e;

}
