import { init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
var MAX_FILE_PATHS_IN_PROMPT, DIFF_TAB_CREATE_PR_FORGE_INSTRUCTION, DIFF_TAB_CREATE_PR_CLI_UNAVAILABLE_INSTRUCTION;
export { DIFF_TAB_CREATE_PR_CLI_UNAVAILABLE_INSTRUCTION, DIFF_TAB_CREATE_PR_FORGE_INSTRUCTION, MAX_FILE_PATHS_IN_PROMPT };
var __wakaru_init_diff_tab_git_action_prompt_initialized = false;
export function init_diff_tab_git_action_prompt() {
if (__wakaru_init_diff_tab_git_action_prompt_initialized) return;
__wakaru_init_diff_tab_git_action_prompt_initialized = true;
"use strict";
init_agent_pb();
MAX_FILE_PATHS_IN_PROMPT = 30;
DIFF_TAB_CREATE_PR_FORGE_INSTRUCTION = "- Create the pull request with `gh pr create` (GitHub) or `origin pr create` (Cursor Origin \u2014 Cursor's PR host, not the git remote named `origin`). Prefer those over `gt`. If you use `gt`, you MUST pass `--github` or `--origin` for the intended host. If this conversation already includes preferred-host / create-command guidance, follow that instead.";
DIFF_TAB_CREATE_PR_CLI_UNAVAILABLE_INSTRUCTION = "- If the CLI needed to create the pull request is not installed or not signed in, stop after pushing and give the user a compare link instead.";

}
