import { init_tmux_backed_shell_instructions } from "../../../../prompts/tmux-backed-shell-instructions.js";
import { SHELL_DESCRIPTION_PARAMETER, init_latest2 } from "./latest.js";
import { init_sandbox_description } from "./sandbox-description.js";
import { init_sandbox_shared } from "./sandbox-shared.js";
import { init_lenient_number } from "../../../lenient-number.js";
import { external_exports } from "../../../../../../external_exports.js";
import { lenientNumber } from "../../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_dist32 } from "../../../../../../prompt-jsx/dist/index.js";
var baseDescriptionDsv3, baseDescriptionDsv31205, baseParametersSchemaDsv3, baseParametersSchemaDsv31205, blockUntilMsDescriptionRequired, baseParametersSchemaDsv31205WithBlockUntilShared, baseParametersSchemaDsv31205WithBlockUntilRequired, baseParametersSchemaDsv30226;
export { baseDescriptionDsv3, baseDescriptionDsv31205, baseParametersSchemaDsv3, baseParametersSchemaDsv30226, baseParametersSchemaDsv31205, baseParametersSchemaDsv31205WithBlockUntilRequired, baseParametersSchemaDsv31205WithBlockUntilShared, blockUntilMsDescriptionRequired };
var __wakaru_init_dsv32_initialized = false;
export function init_dsv32() {
if (__wakaru_init_dsv32_initialized) return;
__wakaru_init_dsv32_initialized = true;
"use strict";
init_dist32();
init_zod();
init_tmux_backed_shell_instructions();
init_lenient_number();
init_latest2();
init_sandbox_description();
init_sandbox_shared();
baseDescriptionDsv3 = `PROPOSE a command to run on behalf of the user.
If you have this tool, note that you DO have the ability to run commands directly on the USER's system.
Note that the user may have to approve the command before it is executed.
The user may reject it if it is not to their liking, or may modify the command before approving it.  If they do change it, take those changes into account.
In using these tools, adhere to the following guidelines:
1. Based on the contents of the conversation, you will be told if you are in the same shell as a previous step or a different shell.
2. If in a new shell, you should \`cd\` to the appropriate directory and do necessary setup in addition to running the command. By default, the shell will initialize in the project root.
3. If in the same shell, LOOK IN CHAT HISTORY for your current working directory.
4. For ANY commands that would require user interaction, ASSUME THE USER IS NOT AVAILABLE TO INTERACT and PASS THE NON-INTERACTIVE FLAGS (e.g. --yes for npx).
5. If the command would use a pager, append \` | cat\` to the command.
6. For commands that are long running/expected to run indefinitely until interruption, please run them in the background. To run jobs in the background, set \`is_background\` to true rather than changing the details of the command.
7. Dont include any newlines in the command.`;
baseDescriptionDsv31205 = `Executes a given command in a shell session with optional timeout.
Before executing the command, please follow these steps:
1. Check for Running Processes:
   - Before starting dev servers or long-running processes that should not be duplicated, search the terminals folder to check if they are already running in existing terminals.
   - You can use this information to determine which terminal, if any, matches the command you want to run, contains the output from the command you want to inspect, or has changed since you last read them.
   - Since these are text files, you can read any terminal's contents simply by reading the file, search using the grep tool, etc.
2. Command Execution:
   - Always quote file paths that contain spaces with double quotes (e.g., cd "path with spaces/file.txt")
   - Examples of proper quoting:
     - cd "/Users/name/My Documents" (correct)
     - cd /Users/name/My Documents (incorrect - will fail)
     - python "/path/with spaces/script.py" (correct)
     - python /path/with spaces/script.py (incorrect - will fail)
   - After ensuring proper quoting, execute the command.
   - Capture the output of the command.
Usage notes:
- The command argument is required.
- You can specify an optional timeout in milliseconds (up to 600000ms / 10 minutes). If not specified, commands will timeout after 30000ms (30 seconds).
- Avoid using search commands like \`find\` and \`grep\`. Instead prefer Grep, Glob to search. Avoid read tools like \`cat\`, \`head\`, and \`tail\`, and prefer Read to read files.
- If you _still_ need to run \`grep\`, STOP. ALWAYS USE ripgrep at \`rg\` first, which all users have pre-installed.
- When issuing multiple commands, use the ';' or '&&' operator to separate them. DO NOT use newlines (newlines are ok in quoted strings).
- Try to maintain your current working directory throughout the session by using absolute paths and avoiding usage of \`cd\`. You may use \`cd\` if the User explicitly requests it.<good-example>pytest /foo/bar/tests</good-example><bad-example>cd /foo/bar && pytest tests</bad-example>`;
baseParametersSchemaDsv3 = external_exports.object({
    command: external_exports.string().describe("The terminal command to execute"),
    is_background: external_exports.boolean().describe("Whether the command should be run in the background"),
    explanation: external_exports.string().optional().describe("One sentence explanation as to why this command needs to be run and how it contributes to the goal.")
});
baseParametersSchemaDsv31205 = external_exports.object({
    command: external_exports.string().describe("The command to execute"),
    working_directory: external_exports.string().optional().describe("The absolute path to the working directory to execute the command in (defaults to current directory)"),
    timeout: lenientNumber().optional().describe("Timeout in milliseconds (defaults to 30000ms/30s)"),
    description: external_exports.string().optional().describe(SHELL_DESCRIPTION_PARAMETER),
    is_background: external_exports.boolean().optional().describe("Whether the command should be run in the background")
});
blockUntilMsDescriptionRequired = "How long to block and wait for the command to complete before moving it to background (in milliseconds). Set to 0 to immediately run the command in the background. The timer includes the shell startup time.";
baseParametersSchemaDsv31205WithBlockUntilShared = external_exports.object({
    command: external_exports.string().describe("The command to execute"),
    working_directory: external_exports.string().optional().describe("The absolute path to the working directory to execute the command in (defaults to current directory)"),
    description: external_exports.string().optional().describe(SHELL_DESCRIPTION_PARAMETER)
});
baseParametersSchemaDsv31205WithBlockUntilRequired = baseParametersSchemaDsv31205WithBlockUntilShared.extend({
    block_until_ms: lenientNumber().describe(blockUntilMsDescriptionRequired)
});
baseParametersSchemaDsv30226 = baseParametersSchemaDsv31205WithBlockUntilShared.extend({
    block_until_ms: lenientNumber().optional().describe("How long to block and wait for the command to complete before moving it to background (in milliseconds). Defaults to 30000ms (30 seconds). Set to 0 to immediately run the command in the background. Make sure to set `block_until_ms` to higher than the command's expected runtime. Add some buffer since block_until_ms includes shell startup time; increase buffer next time based on previous elapsed times if you chose too low. E.g. if you sleep for 40s, recommended `block_until_ms` is 45s. Do not specify a 'timeout' parameter; no such param exists.")
});

}
