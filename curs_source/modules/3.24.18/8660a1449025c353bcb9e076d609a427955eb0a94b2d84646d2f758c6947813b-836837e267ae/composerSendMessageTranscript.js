import { zO } from "./agentReferenceLifetime.js";
import { ju } from "./agent_pb.js";
import { sd } from "./chat_pb.js";
import { tU } from "./composerMessagesHelpers.js";
import { $eg } from "./composerSendMessageCapability.js";
import { jB } from "./projectAgentHeader.js";
import { E } from "./tslib.es6.js";
import { ESi } from "./turnCollapsing.js";
var __wakaru_bTt_initialized = false;
export function bTt() {
if (__wakaru_bTt_initialized) return;
__wakaru_bTt_initialized = true;
"use strict";
E(), ju(), sd(), tU(), jB(), zO(), $eg(), ESi();

}
