import { rp } from "./bcIdFromAuthority.js";
import { Mk } from "./pullRequestIdentity.js";
import { E } from "./tslib.es6.js";
import { MEe } from "./use-glass-fsd-queries.react.js";
var Pd_, Md_, FPt, Dd_;
export { Dd_, FPt, Md_, Pd_ };
var __wakaru_fre_initialized = false;
export function fre() {
if (__wakaru_fre_initialized) return;
__wakaru_fre_initialized = true;
"use strict";
E(), rp(), Mk(), MEe(), Pd_ = new Set([
    "DISMISSED",
    "SUPERSEDED"
]), Md_ = new Set([
    "REBASE_PR_HEAD",
    "REBASE_FSD_STACK",
    "RETRY_CI_BUILD",
    "PING_REVIEWERS_IN_SLACK"
]), FPt = new Set([
    "UPDATE_PR_TITLE",
    "UPDATE_PR_DESCRIPTION",
    "POST_COMMENT",
    "MARK_PR_READY_FOR_REVIEW",
    "ENABLE_PR_AUTO_MERGE"
]), Dd_ = new Set([
    ...FPt,
    "RETRY_CI_BUILD"
]);

}
