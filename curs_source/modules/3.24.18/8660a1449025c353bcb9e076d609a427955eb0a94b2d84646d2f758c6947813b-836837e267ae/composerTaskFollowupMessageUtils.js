import { sd } from "./chat_pb.js";
import { tf } from "./composer_pb.js";
import { Mt } from "./index_197.js";
import { u31 } from "./metaParentCompletionProtocol.js";
import { bQ } from "./subagents_pb.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { ESi } from "./turnCollapsing.js";
var c6p, u6p, QOa, d6p;
export { QOa, c6p, d6p, u6p };
var __wakaru_eCe_initialized = false;
export function eCe() {
if (__wakaru_eCe_initialized) return;
__wakaru_eCe_initialized = true;
"use strict";
E(), sd(), bQ(), tf(), Pu(), Mt(), u31(), ESi(), c6p = /<task>([\s\S]*?)<\/task>/im, u6p = /^(kind|status|reason|task_id|tool_call_id|agent_id|title|output_path):(?:\s*(.*))?$/, QOa = "<user_visible_high_level_summary>", d6p = "</user_visible_high_level_summary>";

}
