import { dp } from "./connect.js";
import { E } from "./tslib.es6.js";
import { Hu, wo } from "./utils_pb.js";
var gmg, fmg, vmg;
export { fmg, gmg, vmg };
var __wakaru_qSk_initialized = false;
export function qSk() {
if (__wakaru_qSk_initialized) return;
__wakaru_qSk_initialized = true;
"use strict";
E(), dp(), Hu(), gmg = new Set([
    wo.GITHUB_NO_USER_CREDENTIALS,
    wo.GITHUB_USER_NO_ACCESS,
    wo.GITHUB_APP_NO_ACCESS,
    wo.GITHUB_MULTIPLE_OWNERS
]), fmg = new Set([
    wo.RATE_LIMITED,
    wo.RATE_LIMITED_CHANGEABLE,
    wo.FREE_USER_USAGE_LIMIT,
    wo.PRO_USER_USAGE_LIMIT,
    wo.USAGE_PRICING_REQUIRED,
    wo.USAGE_PRICING_REQUIRED_CHANGEABLE
]), vmg = [
    "not supported in your region",
    "not available in your region",
    "inference region required by your team"
];

}
