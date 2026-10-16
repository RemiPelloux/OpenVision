import { Di } from "./Iwo.js";
import { WZn } from "./SZu.js";
import { ZVa } from "./agentTranslationUtils.js";
import { ju } from "./agent_pb.js";
import { rp } from "./bcIdFromAuthority.js";
import { m9m } from "./bubbleTiming.js";
import { sd } from "./chat_pb.js";
import { uv } from "./composerData.js";
import { tf } from "./composer_pb.js";
import { nl } from "./index.ts";
import { Ng } from "./index_3.ts";
import { OT } from "./index_5.ts";
import { Rj } from "./selected_context_pb.js";
import { Hqe } from "./simulatedMessageMetadataUtils.js";
import { rKa } from "./slackSubscriptionEvent.js";
import { o$1 } from "./slackThreadContextUtils.js";
import { D3 } from "./stopwatch.js";
import { Rpe } from "./subagentTaskState.js";
import { kCe } from "./subagentTaskStatusLine.js";
import { Fx } from "./tiptapRichText.js";
import { Zet } from "./todo_tool_pb.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { Xo, xed } from "./uuid_2.js";
var k9m, uJr;
export { k9m, uJr };
var __wakaru_rG_initialized = false;
export function rG() {
if (__wakaru_rG_initialized) return;
__wakaru_rG_initialized = true;
"use strict";
E(), nl(), ju(), Zet(), Rj(), sd(), tf(), Pu(), OT(), rp(), Ng(), uv(), Hqe(), o$1(), kCe(), Rpe(), Fx(), Xo(), Di(), D3(), ZVa(), rKa(), m9m(), k9m = "v2", uJr = WZn(`anysphere-populate-conversation-bubble:${k9m}`, xed);

}
