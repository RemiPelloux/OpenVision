import { Hu } from "./chat_pb.js";
import { Jm } from "./composer_pb.js";
import { mi } from "./index_188.js";
import { Gmv } from "./metaParentCompletionProtocol.js";
import { Pj } from "./subagents_pb.js";
import { ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { SMn } from "./turnCollapsing.js";
var BLu, ULu, TKs, $Lu;
export { $Lu, BLu, TKs, ULu };
var __wakaru_Xve_initialized = false;
export function Xve() {
if (__wakaru_Xve_initialized) return;
__wakaru_Xve_initialized = true;
"use strict";
x(), Hu(), Pj(), Jm(), ql(), mi(), Gmv(), SMn(), BLu = /<task>([\s\S]*?)<\/task>/im, ULu = /^(kind|status|reason|task_id|tool_call_id|agent_id|title|output_path):(?:\s*(.*))?$/, TKs = "<user_visible_high_level_summary>", $Lu = "</user_visible_high_level_summary>";

}
