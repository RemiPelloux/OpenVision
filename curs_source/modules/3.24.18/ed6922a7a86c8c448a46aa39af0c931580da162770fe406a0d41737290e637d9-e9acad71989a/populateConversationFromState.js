import { jn } from "./HVr.js";
import { hpo } from "./agentTranslationUtils.js";
import { zd } from "./agent_pb.js";
import { nb } from "./bcIdFromAuthority.js";
import { aZd } from "./bubbleTiming.js";
import { Hu } from "./chat_pb.js";
import { Wf } from "./composerData.js";
import { Jm } from "./composer_pb.js";
import { Ml } from "./index.ts";
import { Gp } from "./index_3.ts";
import { A1 } from "./index_5.ts";
import { svi } from "./qIc.js";
import { jW } from "./selected_context_pb.js";
import { xUe } from "./simulatedMessageMetadataUtils.js";
import { bpo } from "./slackSubscriptionEvent.js";
import { IIv } from "./slackThreadContextUtils.js";
import { aA } from "./stopwatch.js";
import { Eet } from "./subagentTaskState.js";
import { Tet } from "./subagentTaskStatusLine.js";
import { QO } from "./tiptapRichText.js";
import { b4e } from "./todo_tool_pb.js";
import { ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { Js, b2c } from "./uuid.js";
var gZd, uqi;
export { gZd, uqi };
var __wakaru_nG_initialized = false;
export function nG() {
if (__wakaru_nG_initialized) return;
__wakaru_nG_initialized = true;
"use strict";
x(), Ml(), zd(), b4e(), jW(), Hu(), Jm(), ql(), A1(), nb(), Gp(), Wf(), xUe(), IIv(), Tet(), Eet(), QO(), Js(), jn(), aA(), hpo(), bpo(), aZd(), gZd = "v2", uqi = svi(`anysphere-populate-conversation-bubble:${gZd}`, b2c);

}
