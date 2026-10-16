import { SGc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var kGc, wGc, CGc, gss, TGc, EGc;
export { CGc, EGc, TGc, gss, kGc, wGc };
var __wakaru_I_n_initialized = false;
export function I_n() {
if (__wakaru_I_n_initialized) return;
__wakaru_I_n_initialized = true;
"use strict";
x(), kGc = SGc, wGc = new Set([
    "constructor",
    "toString",
    "toJSON",
    "valueOf"
]), CGc = new Set([
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
]), gss = (e)=>`${e}$`, TGc = (e)=>CGc.has(e) ? gss(e) : e, EGc = (e)=>wGc.has(e) ? gss(e) : e;

}
