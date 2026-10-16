import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { CustomToolCallError, init_common9 } from "../../common.js";
import { ToolErrorClassification, init_core5 } from "../../core.js";
import { init_formatters } from "../../core/ls/formatters.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var parametersSchema4, LsToolCallTimeoutError;
export { LsToolCallTimeoutError, parametersSchema4 };
var __wakaru_init_ls_bugbot_initialized = false;
export function init_ls_bugbot() {
if (__wakaru_init_ls_bugbot_initialized) return;
__wakaru_init_ls_bugbot_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_zod();
init_common9();
init_formatters();
init_core5();
parametersSchema4 = external_exports.object({
    target_directory: external_exports.string().describe('The repository-relative path of the directory to list (e.g. "src/components"). Use "." or "" for the repository root.')
});
LsToolCallTimeoutError = class extends CustomToolCallError {
    constructor(directoryTreeRoot){
        const message = "The operation timed out";
        super(ToolErrorClassification.TIMEOUT, {
            clientVisibleErrorMessage: message,
            modelVisibleErrorMessage: message,
            error: message
        });
        this.directoryTreeRoot = directoryTreeRoot;
    }
};
LsToolCallTimeoutError.telemetryName = "LsToolCallTimeoutError";

}
