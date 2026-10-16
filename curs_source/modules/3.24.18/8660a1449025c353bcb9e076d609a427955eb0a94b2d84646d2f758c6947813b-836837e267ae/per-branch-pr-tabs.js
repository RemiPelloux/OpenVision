import { pd } from "./background_composer_pb.js";
import { NE } from "./glass-tab-persistence-constants.js";
import { Ect } from "./pr-lifecycle-presentation_2.js";
import { INn } from "./pr-tab-identity.js";
import { Mk } from "./pullRequestIdentity.js";
import { e9e } from "./pullRequestStateConversion.js";
import { Kf } from "./reactive.js";
import { E } from "./tslib.es6.js";
var XUl, ZUl;
export { XUl, ZUl };
var __wakaru_tZ_initialized = false;
export function tZ() {
if (__wakaru_tZ_initialized) return;
__wakaru_tZ_initialized = true;
"use strict";
E(), pd(), e9e(), Mk(), Kf(), Ect(), NE(), INn(), INn(), XUl = [
    "authorLogin",
    "baseBranch",
    "ciStatus",
    "isClosed",
    "isDraft",
    "isMerged",
    "mergeableState",
    "prId",
    "reviewDecision",
    "stackId",
    "stackParentId",
    "stackPosition",
    "stackSource",
    "state"
], ZUl = [
    "git-branch",
    "git-merge",
    "git-pull-request",
    "git-pull-request-closed",
    "git-pull-request-draft"
];

}
