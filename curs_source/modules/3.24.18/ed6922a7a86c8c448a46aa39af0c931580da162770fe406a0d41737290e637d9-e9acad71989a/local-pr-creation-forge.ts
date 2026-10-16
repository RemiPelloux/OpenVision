import { Uzs } from "./repo-url.ts";
import { x } from "./tslib.es6.js";
var Hzs, Wzs, Gzs, Vzs;
export { Gzs, Hzs, Vzs, Wzs };
var __wakaru_Ihv_initialized = false;
export function Ihv() {
if (__wakaru_Ihv_initialized) return;
__wakaru_Ihv_initialized = true;
"use strict";
x(), Uzs(), Hzs = "cursor://internal/local-pr-creation-forge", Wzs = "Preferred pull request host:", Gzs = "This guidance applies only when opening a new pull request. If a PR already exists for the branch, update that existing PR with the same CLI you would use for that host; do not open a second PR on a different host because the preferred host changed.", Vzs = [
    "Cursor can open new pull requests on either:",
    "- GitHub, with the `gh` CLI (`gh pr create`)",
    "- Cursor Origin (Cursor's own pull-request host \u2014 not the git remote named `origin`), with the `origin` CLI (`origin pr create`)",
    "Prefer `gh` or `origin` over `gt`. If you use `gt`, you MUST pass `--github` or `--origin` for the intended host."
].join(`
`);

}
