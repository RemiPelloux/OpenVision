import { ZLa } from "./repo-url.ts";
import { E } from "./tslib.es6.js";
var JLa, eOa, tOa, nOa;
export { JLa, eOa, nOa, tOa };
var __wakaru_lP1_initialized = false;
export function lP1() {
if (__wakaru_lP1_initialized) return;
__wakaru_lP1_initialized = true;
"use strict";
E(), ZLa(), JLa = "cursor://internal/local-pr-creation-forge", eOa = "Preferred pull request host:", tOa = "This guidance applies only when opening a new pull request. If a PR already exists for the branch, update that existing PR with the same CLI you would use for that host; do not open a second PR on a different host because the preferred host changed.", nOa = [
    "Cursor can open new pull requests on either:",
    "- GitHub, with the `gh` CLI (`gh pr create`)",
    "- Cursor Origin (Cursor's own pull-request host \u2014 not the git remote named `origin`), with the `origin` CLI (`origin pr create`)",
    "Prefer `gh` or `origin` over `gt`. If you use `gt`, you MUST pass `--github` or `--origin` for the intended host."
].join(`
`);

}
