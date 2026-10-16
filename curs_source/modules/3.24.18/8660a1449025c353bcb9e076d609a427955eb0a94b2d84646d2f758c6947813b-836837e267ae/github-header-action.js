import { n2s } from "./ofv.js";
import { Mk } from "./pullRequestIdentity.js";
import { N0v } from "./pullRequestMergeBlockedCopy.js";
import { p10 } from "./pullRequestMergePrimaryAction.js";
import { Nos } from "./pullRequestMergeability.js";
import { dv } from "./storage-keys.js";
import { E } from "./tslib.es6.js";
var B0v, U0v, j0v, $0v, oQl, aQl, lQl, H0v;
export { $0v, B0v, H0v, U0v, aQl, j0v, lQl, oQl };
var __wakaru_QQt_initialized = false;
export function QQt() {
if (__wakaru_QQt_initialized) return;
__wakaru_QQt_initialized = true;
"use strict";
E(), Nos(), N0v(), p10(), Mk(), dv(), B0v = [
    {
        value: "squash",
        label: "Squash & Merge"
    },
    {
        value: "merge",
        label: "Merge"
    },
    {
        value: "rebase",
        label: "Rebase Merge"
    }
], U0v = [
    {
        value: "merge",
        label: "Merge"
    },
    {
        value: "squash",
        label: "Squash & Merge"
    }
], j0v = [
    {
        value: "merge",
        label: "Create a Merge Commit",
        description: "All commits in each PR will be added to the base branch via a merge commit."
    },
    {
        value: "squash",
        label: "Squash and Merge",
        description: "The entire stack will be squashed into a single commit in the base branch."
    }
], $0v = [
    {
        value: "merge",
        label: "Merge"
    },
    {
        value: "rebase",
        label: "Rebase Merge"
    }
], oQl = [
    {
        value: "squash",
        label: "Squash"
    },
    {
        value: "merge",
        label: "Merge"
    },
    {
        value: "rebase",
        label: "Rebase"
    }
], aQl = n2s({
    mergeableStateUpper: "UNKNOWN"
}), lQl = {
    type: "mergeUnavailable",
    label: aQl.label,
    disabled: !0,
    tooltip: aQl.description
}, H0v = {
    type: "mergeUnavailable",
    label: "Merge status unavailable",
    disabled: !0,
    tooltip: "Couldn't read this pull request's stack. Refresh to try again."
};

}
