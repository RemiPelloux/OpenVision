import { init_tmux_backed_shell_instructions } from "../../../../prompts/tmux-backed-shell-instructions.js";
import { init_core5 } from "../../../core.js";
import { init_git_sections } from "./git-sections.js";
import { init_sandbox_description } from "./sandbox-description.js";
import { init_lenient_number } from "../../../lenient-number.js";
import { external_exports } from "../../../../../../external_exports.js";
import { init_zod } from "../../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_jsx_runtime } from "../../../../../../prompt-jsx/dist/jsx-runtime.js";
import { getTimeoutSchema } from "../../../../../../tree_chunk_napi_exports.js";
var SHELL_DESCRIPTION_PARAMETER, commandSchema, workingDirectorySchema, descriptionSchema, isBackgroundSchema, notifyOnOutputSchema, parametersSchemaLatest4;
export { SHELL_DESCRIPTION_PARAMETER, commandSchema, descriptionSchema, isBackgroundSchema, notifyOnOutputSchema, parametersSchemaLatest4, workingDirectorySchema };
var __wakaru_init_latest2_initialized = false;
export function init_latest2() {
if (__wakaru_init_latest2_initialized) return;
__wakaru_init_latest2_initialized = true;
"use strict";
init_jsx_runtime();
init_zod();
init_tmux_backed_shell_instructions();
init_core5();
init_lenient_number();
init_git_sections();
init_sandbox_description();
SHELL_DESCRIPTION_PARAMETER = 'Very short phrase naming what this command does; shown to the user after the word "Ran". Avoid leading with verbs or using trailing periods';
commandSchema = external_exports.string().describe("The command to execute");
workingDirectorySchema = external_exports.string().optional().describe("The absolute path to the working directory to execute the command in (defaults to current directory)");
descriptionSchema = external_exports.string().optional().describe(SHELL_DESCRIPTION_PARAMETER);
isBackgroundSchema = external_exports.boolean().optional().describe("Whether the command should be run in the background");
notifyOnOutputSchema = external_exports.object({
    pattern: external_exports.string().describe("Regex pattern matched against stdout/stderr output. Output redirected only to a file will not trigger it. Do not match all outputs."),
    reason: external_exports.string().describe("5 or less words describing why you are watching for this output. The UI (only visible to user) will prefix it as 'Monitored `reason`'."),
    debounce_ms: external_exports.number().optional().describe("Milliseconds that must elapse between notifications. The harness enforces a minimum of 5000ms.")
}).optional().describe("Optional output notification config. Each terminal output which matches the pattern will notify you. ONLY set this when the user explicitly requests monitoring.");
parametersSchemaLatest4 = external_exports.object({
    command: commandSchema,
    working_directory: workingDirectorySchema,
    timeout: getTimeoutSchema(false),
    description: descriptionSchema,
    is_background: isBackgroundSchema
});

}
