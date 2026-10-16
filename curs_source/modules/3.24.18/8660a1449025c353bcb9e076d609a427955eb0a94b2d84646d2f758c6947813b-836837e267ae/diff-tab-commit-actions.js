import { ju } from "./agent_pb.js";
import { s8l } from "./branchNameUtils.js";
import { EZl } from "./diff-tab-create-pr-preference.js";
import { Rj } from "./selected_context_pb.js";
import { E } from "./tslib.es6.js";
import { wu } from "./utilities_3.js";
var vwv, _wv, IFi, COn, bwv, ywv;
export { COn, IFi, _wv, bwv, vwv, ywv };
var __wakaru_ERt_initialized = false;
export function ERt() {
if (__wakaru_ERt_initialized) return;
__wakaru_ERt_initialized = true;
"use strict";
E(), ju(), Rj(), wu(), s8l(), EZl(), vwv = "Create PRs", _wv = "Fast Forward Branch", IFi = [
    "createBranchAndCommit",
    "createBranchCommitAndPush",
    "createBranch",
    "commitAndPush",
    "commit",
    "createPrWithChanges",
    "push",
    "createPr"
], COn = {
    createBranchAndCommit: {
        label: "Create Branch & Commit",
        loadingLabel: "Committing..."
    },
    createBranchCommitAndPush: {
        label: "Create Branch, Commit & Push",
        loadingLabel: "Committing..."
    },
    createBranch: {
        label: "Create Branch",
        loadingLabel: "Creating Branch..."
    },
    commit: {
        label: "Commit",
        loadingLabel: "Committing..."
    },
    commitAndPush: {
        label: "Commit & Push",
        loadingLabel: "Committing..."
    },
    createPrWithChanges: {
        label: "Commit & Create PR",
        loadingLabel: "Creating PR..."
    },
    push: {
        label: "Push",
        loadingLabel: "Pushing..."
    },
    createPr: {
        label: "Create PR",
        loadingLabel: "Creating PR..."
    }
}, bwv = new Set([
    "createBranchAndCommit",
    "createBranchCommitAndPush",
    "createBranch",
    "commit",
    "commitAndPush",
    "push"
]), ywv = 30;

}
