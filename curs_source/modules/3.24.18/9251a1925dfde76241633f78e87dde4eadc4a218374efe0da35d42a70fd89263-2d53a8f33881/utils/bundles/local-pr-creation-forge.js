var LOCAL_PR_CREATION_FORGE_RULE_PATH, LOCAL_PR_CREATION_FORGE_GUIDANCE_HEADER, LEGACY_LOCAL_PR_CREATION_FORGE_GUIDANCE_HEADER, FORGE_CLI_GLOSSARY;
export { FORGE_CLI_GLOSSARY, LEGACY_LOCAL_PR_CREATION_FORGE_GUIDANCE_HEADER, LOCAL_PR_CREATION_FORGE_GUIDANCE_HEADER, LOCAL_PR_CREATION_FORGE_RULE_PATH };
var __wakaru_init_local_pr_creation_forge_initialized = false;
export function init_local_pr_creation_forge() {
if (__wakaru_init_local_pr_creation_forge_initialized) return;
__wakaru_init_local_pr_creation_forge_initialized = true;
"use strict";
LOCAL_PR_CREATION_FORGE_RULE_PATH = "cursor://internal/local-pr-creation-forge";
LOCAL_PR_CREATION_FORGE_GUIDANCE_HEADER = "Preferred pull request host:";
LEGACY_LOCAL_PR_CREATION_FORGE_GUIDANCE_HEADER = "Pull request forge (Creation Provider):";
FORGE_CLI_GLOSSARY = [
    "Cursor can open new pull requests on either:",
    "- GitHub, with the `gh` CLI (`gh pr create`)",
    "- Cursor Origin (Cursor's own pull-request host \u2014 not the git remote named `origin`), with the `origin` CLI (`origin pr create`)",
    "Prefer `gh` or `origin` over `gt`. If you use `gt`, you MUST pass `--github` or `--origin` for the intended host."
].join("\n");

}
