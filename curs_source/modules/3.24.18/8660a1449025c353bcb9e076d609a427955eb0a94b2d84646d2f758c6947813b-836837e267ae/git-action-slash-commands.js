import { ERt, IFi } from "./diff-tab-commit-actions.js";
import { E } from "./tslib.es6.js";
var BRs, xZl, AZl;
export { AZl, BRs, xZl };
var __wakaru_Swv_initialized = false;
export function Swv() {
if (__wakaru_Swv_initialized) return;
__wakaru_Swv_initialized = true;
"use strict";
E(), ERt(), BRs = {
    commit: {
        slug: "commit",
        description: "Commit the current changes",
        icon: "git-commit"
    },
    commitAndPush: {
        slug: "commit-and-push",
        description: "Commit all changes and push",
        icon: "git-push"
    },
    createBranchAndCommit: {
        slug: "create-branch-and-commit",
        description: "Create a new branch and commit the changes",
        icon: "git-branch"
    },
    createBranchCommitAndPush: {
        slug: "create-branch-commit-and-push",
        description: "Create a new branch, commit, and push",
        icon: "git-push"
    },
    createBranch: {
        slug: "create-branch",
        description: "Create a new branch for the current changes",
        icon: "git-branch"
    },
    push: {
        slug: "push",
        description: "Push unpushed commits",
        icon: "git-push"
    },
    createPr: {
        slug: "create-pr",
        description: "Create a pull request for this branch",
        icon: "git-pull-request-create"
    },
    createPrWithChanges: {
        slug: "commit-and-create-pr",
        description: "Commit the changes and open a pull request",
        icon: "git-pull-request-create"
    },
    fixMergeConflicts: {
        slug: "fix-merge-conflicts",
        description: "Fix merge conflicts with the base branch",
        icon: "git-merge"
    },
    multitaskSplitPrs: {
        slug: "split-prs",
        description: "Split the current work into reviewable pull requests",
        icon: "git-fork"
    }
}, xZl = "glass-git-action-", AZl = [
    ...IFi,
    "fixMergeConflicts",
    "multitaskSplitPrs"
];

}
