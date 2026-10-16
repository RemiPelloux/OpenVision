import { E } from "./tslib.es6.js";
import { rdd } from "./ze.js";
var sdd, odd, add, QMo, ldd, cdd;
export { QMo, add, cdd, ldd, odd, sdd };
var __wakaru_BJn_initialized = false;
export function BJn() {
if (__wakaru_BJn_initialized) return;
__wakaru_BJn_initialized = true;
"use strict";
E(), sdd = rdd, odd = new Set([
    "constructor",
    "toString",
    "toJSON",
    "valueOf"
]), add = new Set([
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
]), QMo = (t)=>`${t}$`, ldd = (t)=>add.has(t) ? QMo(t) : t, cdd = (t)=>odd.has(t) ? QMo(t) : t;

}
