import { f5s } from "./ci-finding-key.js";
import { xc } from "./glass-storage-service.js";
import { dv } from "./storage-keys.js";
import { v1 } from "./store.js";
import { E } from "./tslib.es6.js";
import { CTe } from "./use-persistent-state.react.js";
import { In } from "./use-service.react_2.js";
import { Af } from "./use-solid-selector.react_2.js";
import { pi } from "./ze.js";
var vfc, _fc, s8i, bfc, ga_, APt;
export { APt, _fc, bfc, ga_, s8i, vfc };
var __wakaru_fa__initialized = false;
export function fa_() {
if (__wakaru_fa__initialized) return;
__wakaru_fa__initialized = true;
"use strict";
E(), pi(), v1(), CTe(), dv(), xc(), f5s(), In(), Af(), vfc = [
    "related",
    "unrelated",
    "unknown"
], _fc = [
    "likely",
    "unlikely",
    "unknown"
], s8i = [
    "fix",
    "rerun",
    "wait",
    "ignore",
    "ask",
    "investigate"
], bfc = [
    "high",
    "medium",
    "low"
], ga_ = {
    schema: 2,
    findings: {},
    overall: null
}, APt = {
    findings: new Map,
    overall: void 0
};

}
