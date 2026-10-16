import { init_common9 } from "../../common.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { createHistogram } from "../../../../../dist_exports.js";
import { external_exports } from "../../../../../external_exports.js";
import { init_dist4 } from "../../../../../metrics/dist/index.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var blameByFilePathDuration, parametersSchema2;
export { blameByFilePathDuration, parametersSchema2 };
var __wakaru_init_blame_by_file_path_bugbot_initialized = false;
export function init_blame_by_file_path_bugbot() {
if (__wakaru_init_blame_by_file_path_bugbot_initialized) return;
__wakaru_init_blame_by_file_path_bugbot_initialized = true;
"use strict";
init_dist26();
init_dist4();
init_zod();
init_common9();
blameByFilePathDuration = createHistogram("bugbot.context.get_blame_by_file_path.duration_ms", {
    description: "Latency of CursorBlame file path lookups in milliseconds",
    labelNames: []
});
parametersSchema2 = external_exports.object({
    file_path: external_exports.string().describe("The repository-relative path of the file to look up Cursor Blame data for (as shown in the diff)."),
    start_line: external_exports.number().int().positive().optional().describe("Optional start line number to narrow the blame lookup to a specific range within the file."),
    end_line: external_exports.number().int().positive().optional().describe("Optional end line number to narrow the blame lookup to a specific range within the file. Defaults to start_line if start_line is provided.")
});

}
