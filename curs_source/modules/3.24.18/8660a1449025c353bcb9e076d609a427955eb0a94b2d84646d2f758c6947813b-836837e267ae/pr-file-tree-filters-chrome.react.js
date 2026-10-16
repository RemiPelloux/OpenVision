import { Mt } from "./index_197.js";
import { U6n } from "./pr-file-tree-filters.js";
import { E } from "./tslib.es6.js";
var ki_;
export { ki_ };
var __wakaru_Umc_initialized = false;
export function Umc() {
if (__wakaru_Umc_initialized) return;
__wakaru_Umc_initialized = true;
"use strict";
E(), Mt(), U6n(), ki_ = [
    {
        flag: "showNotOwnedFiles",
        label: "Files not owned by you"
    },
    {
        flag: "showDeletedFiles",
        label: "Deleted files"
    },
    {
        flag: "showViewedFiles",
        label: "Files marked as viewed"
    },
    {
        flag: "showTestFiles",
        label: "Test files"
    }
];

}
