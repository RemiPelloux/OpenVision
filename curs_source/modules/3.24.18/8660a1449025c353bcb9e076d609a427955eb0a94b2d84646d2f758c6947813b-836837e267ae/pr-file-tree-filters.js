import { EOs } from "./codeowners-path-utils.js";
import { Bmc } from "./pr-codeowner-handles.js";
import { WYe } from "./pr-diff-render-utils.js";
import { E } from "./tslib.es6.js";
var jBi, _i_, $Os, bi_;
export { $Os, _i_, bi_, jBi };
var __wakaru_U6n_initialized = false;
export function U6n() {
if (__wakaru_U6n_initialized) return;
__wakaru_U6n_initialized = true;
"use strict";
E(), EOs(), Bmc(), WYe(), jBi = {
    showNotOwnedFiles: !0,
    showDeletedFiles: !0,
    showViewedFiles: !0,
    showTestFiles: !0
}, _i_ = /(?:^|\/)(?:__tests__|tests?|specs?)\/|[._](?:test|spec)\.[^/]*$|(?:^|\/)test_[^/]*\.py$/i, $Os = [
    "showNotOwnedFiles",
    "showDeletedFiles",
    "showViewedFiles",
    "showTestFiles"
], bi_ = [
    "showDeletedFiles",
    "showTestFiles"
];

}
