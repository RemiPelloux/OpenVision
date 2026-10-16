import { init_common9 } from "../../common.js";
import { formatWorkspaceBlock, isWorkspaceEmpty, renderMultiWorkspace, truncateOutput } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_dist3 } from "../../../../../utils/dist/index.js";
var GREP_CHAR_BUDGET, resultToString5;
export { GREP_CHAR_BUDGET, resultToString5 };
var __wakaru_init_formatters3_initialized = false;
export function init_formatters3() {
if (__wakaru_init_formatters3_initialized) return;
__wakaru_init_formatters3_initialized = true;
"use strict";
init_dist3();
init_common9();
GREP_CHAR_BUDGET = 15e3;
resultToString5 = (result)=>{
    if (result.result.case === "error") {
        const error3 = result.result.value;
        return `Error running tool: ${truncateOutput(error3.error, GREP_CHAR_BUDGET, true).output}`;
    }
    if (result.result.case !== "success") {
        return "No results found.";
    }
    const success = result.result.value;
    let output = "";
    const entries = Object.entries(success.workspaceResults);
    if (entries.length === 0) {
        return "No results found.";
    }
    if (entries.length > 1) {
        const allEmpty = entries.every(([, ws2])=>isWorkspaceEmpty(ws2, success.outputMode));
        if (allEmpty) {
            if (success.outputMode === "files_with_matches") return "No files with matches found";
            return "No matches found";
        }
    }
    const formatterWithBudget = (ws2, charBudget)=>formatWorkspaceBlock(ws2, success.outputMode, {
            pattern: success.pattern,
            path: success.path,
            charBudget
        });
    output += renderMultiWorkspace(entries, formatterWithBudget, GREP_CHAR_BUDGET);
    return output.trim();
};

}
