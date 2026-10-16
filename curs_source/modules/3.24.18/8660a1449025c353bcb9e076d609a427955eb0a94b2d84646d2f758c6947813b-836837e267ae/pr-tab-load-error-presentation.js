import { Mk } from "./pullRequestIdentity.js";
import { E } from "./tslib.es6.js";
var Omc, oi_;
export { Omc, oi_ };
var __wakaru_q_C_initialized = false;
export function q_C() {
if (__wakaru_q_C_initialized) return;
__wakaru_q_C_initialized = true;
"use strict";
E(), Mk(), Omc = {
    diffs: {
        generic: "We couldn't load this PR's diff. Try again, or view the PR on the web.",
        rateLimited: "GitHub is rate-limiting diff requests right now. Try again in a moment, or view the PR on the web.",
        timeout: "Loading this PR's diff is taking longer than expected. Try again, or view the PR on the web.",
        unauthenticated: "Connect GitHub to view this PR's diff, or view the PR on the web."
    },
    checks: {
        generic: "We couldn't load this PR's checks. Try again, or view the PR on the web.",
        rateLimited: "GitHub is rate-limiting checks right now. Try again in a moment, or view the PR on the web.",
        timeout: "Loading this PR's checks is taking longer than expected. Try again, or view the PR on the web.",
        unauthenticated: "Connect GitHub to view this PR's checks, or view the PR on the web."
    },
    commits: {
        generic: "We couldn't load this PR's commits. Try again, or view the PR on the web.",
        rateLimited: "GitHub is rate-limiting commit requests right now. Try again in a moment, or view the PR on the web.",
        timeout: "Loading this PR's commits is taking longer than expected. Try again, or view the PR on the web.",
        unauthenticated: "Connect GitHub to view this PR's commits, or view the PR on the web."
    },
    reviews: {
        generic: "We couldn't load this PR's review activity. Try again, or view the PR on the web.",
        rateLimited: "GitHub is rate-limiting review activity right now. Try again in a moment, or view the PR on the web.",
        timeout: "Loading this PR's review activity is taking longer than expected. Try again, or view the PR on the web.",
        unauthenticated: "Connect GitHub to view this PR's review activity, or view the PR on the web."
    },
    "self-driving": {
        generic: "We couldn't load Self-Driving history for this pull request. Try again, or view the PR on the web.",
        rateLimited: "GitHub is rate-limiting self-driving requests right now. Try again in a moment, or view the PR on the web.",
        timeout: "Loading Self-Driving history is taking longer than expected. Try again, or view the PR on the web.",
        unauthenticated: "Connect GitHub to view Self-Driving history for this PR, or view the PR on the web."
    }
}, oi_ = {
    diffs: {
        rateLimited: "Diff requests are rate-limited right now. Try again in a moment, or view the PR on the web.",
        unauthenticated: "You don't have access to this PR's diff. Try again, or view the PR on the web."
    },
    checks: {
        rateLimited: "Check requests are rate-limited right now. Try again in a moment, or view the PR on the web.",
        unauthenticated: "You don't have access to this PR's checks. Try again, or view the PR on the web."
    },
    commits: {
        rateLimited: "Commit requests are rate-limited right now. Try again in a moment, or view the PR on the web.",
        unauthenticated: "You don't have access to this PR's commits. Try again, or view the PR on the web."
    },
    reviews: {
        rateLimited: "Review activity requests are rate-limited right now. Try again in a moment, or view the PR on the web.",
        unauthenticated: "You don't have access to this PR's review activity. Try again, or view the PR on the web."
    },
    "self-driving": {
        rateLimited: "Self-driving requests are rate-limited right now. Try again in a moment, or view the PR on the web.",
        unauthenticated: "You don't have access to Self-Driving history for this PR. Try again, or view the PR on the web."
    }
};

}
