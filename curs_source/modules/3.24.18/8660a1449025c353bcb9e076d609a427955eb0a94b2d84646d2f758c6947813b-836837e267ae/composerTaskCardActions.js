import { wl } from "./agentRepositoryServiceTypes.js";
import { fMn } from "./agentWindowTabPersistence.js";
import { ju } from "./agent_pb.js";
import { C1 } from "./aiServerConfigService.js";
import { RB } from "./backgroundComposerDataService.js";
import { pd } from "./background_composer_pb.js";
import { rp } from "./bcIdFromAuthority.js";
import { Ypg } from "./cloudSubagentInfo.js";
import { rs } from "./commands.js";
import { vS } from "./composer.js";
import { E5f } from "./composerAgentNavigation.js";
import { Pl } from "./composerDataServiceTypes.js";
import { eks } from "./composerTaskCardModel.js";
import { eCe } from "./composerTaskFollowupMessageUtils.js";
import { WB } from "./composerUtilsServiceTypes.js";
import { Ux } from "./composerViews.js";
import { Ld } from "./editorGroupsService.js";
import { Wo } from "./editorService.js";
import { k6l } from "./glassSubagentNavigation.js";
import { y2 } from "./mcpServiceTypes.js";
import { hAn } from "./pendingSubagentApproval.js";
import { Cm } from "./structuredLog.js";
import { V0w } from "./taskResultComposerDataHydration.js";
import { S5f } from "./taskSubagentHandleResolution.js";
import { WJ } from "./toolCallHumanReviewService.js";
import { E } from "./tslib.es6.js";
var __wakaru_N5f_initialized = false;
export function N5f() {
if (__wakaru_N5f_initialized) return;
__wakaru_N5f_initialized = true;
"use strict";
E(), ju(), pd(), rp(), rs(), Cm(), fMn(), y2(), wl(), Ypg(), C1(), RB(), Ld(), Wo(), vS(), Pl(), WB(), Ux(), S5f(), V0w(), WJ(), eCe(), hAn(), k6l(), eks(), E5f();

}
