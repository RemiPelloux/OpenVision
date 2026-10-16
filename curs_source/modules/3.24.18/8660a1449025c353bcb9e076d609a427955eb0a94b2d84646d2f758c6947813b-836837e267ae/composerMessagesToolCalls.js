import { wl } from "./agentRepositoryServiceTypes.js";
import { cat } from "./agentWindowCommandBridge.js";
import { fMn } from "./agentWindowTabPersistence.js";
import { ju } from "./agent_pb.js";
import { rp } from "./bcIdFromAuthority.js";
import { O0w } from "./clientSideToolToAgentToolCall.js";
import { tU } from "./composerMessagesHelpers.js";
import { eCe } from "./composerTaskFollowupMessageUtils.js";
import { k6l } from "./glassSubagentNavigation.js";
import { uqe } from "./internalAgentToolsFileUtils.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { rC } from "./utils_23.js";
import { Cu } from "./workspaceCollectionService.js";
var __wakaru_aNi_initialized = false;
export function aNi() {
if (__wakaru_aNi_initialized) return;
__wakaru_aNi_initialized = true;
"use strict";
E(), ju(), Pu(), Pu(), cat(), O0w(), fMn(), uqe(), rp(), wl(), k6l(), rC(), tU(), eCe(), Cu();

}
