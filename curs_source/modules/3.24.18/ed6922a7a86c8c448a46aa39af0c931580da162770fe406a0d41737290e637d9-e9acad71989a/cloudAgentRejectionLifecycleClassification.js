import { hg } from "./connect.js";
import { x } from "./tslib.es6.js";
import { hu, io } from "./utils_pb.js";
var YEh, XEh, ZEh;
export { XEh, YEh, ZEh };
var __wakaru_ne__initialized = false;
export function ne_() {
if (__wakaru_ne__initialized) return;
__wakaru_ne__initialized = true;
"use strict";
x(), hg(), hu(), YEh = new Set([
    io.GITHUB_NO_USER_CREDENTIALS,
    io.GITHUB_USER_NO_ACCESS,
    io.GITHUB_APP_NO_ACCESS,
    io.GITHUB_MULTIPLE_OWNERS
]), XEh = new Set([
    io.RATE_LIMITED,
    io.RATE_LIMITED_CHANGEABLE,
    io.FREE_USER_USAGE_LIMIT,
    io.PRO_USER_USAGE_LIMIT,
    io.USAGE_PRICING_REQUIRED,
    io.USAGE_PRICING_REQUIRED_CHANGEABLE
]), ZEh = [
    "not supported in your region",
    "not available in your region",
    "inference region required by your team"
];

}
