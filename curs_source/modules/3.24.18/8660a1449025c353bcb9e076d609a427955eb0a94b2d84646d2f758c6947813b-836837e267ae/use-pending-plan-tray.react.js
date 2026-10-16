import { Yle } from "./agent-migration-targets.js";
import { Ss } from "./aiMiscServices.js";
import { $Qv } from "./build-plan-in-parallel.js";
import { ZAt } from "./cloud-entrypoint-github-setup.js";
import { I6 } from "./composerPlanService.js";
import { _s } from "./experimentService.js";
import { wSe } from "./glass-agent-migration-service.js";
import { Zu } from "./glass-log-service.js";
import { zc } from "./glass-notification-service.js";
import { vT } from "./glass-tab-persistence-service.contract.js";
import { fw_ } from "./open-agent-plan.js";
import { pw_ } from "./pending-plan-tray-utils.js";
import { VPe } from "./planStorageService.js";
import { iAt } from "./startMultitasking.js";
import { E } from "./tslib.es6.js";
import { kBi } from "./use-agent-migration-targets.react.js";
import { jLs } from "./use-agent-plan.react.js";
import { kF } from "./use-agent-workspace.react.js";
import { CJC } from "./use-auto-open-plan-tab.react.js";
import { d9i } from "./use-cloud-eligibility.react.js";
import { WJt } from "./use-cloud-github-access-gate.react.js";
import { RJC } from "./use-pending-plan-resolution.react.js";
import { In } from "./use-service.react_2.js";
import { Cu } from "./workspaceCollectionService.js";
var __wakaru_UJC_initialized = false;
export function UJC() {
if (__wakaru_UJC_initialized) return;
__wakaru_UJC_initialized = true;
"use strict";
E(), I6(), VPe(), iAt(), Ss(), _s(), Cu(), wSe(), Zu(), zc(), vT(), Yle(), $Qv(), ZAt(), pw_(), fw_(), kBi(), jLs(), kF(), CJC(), d9i(), WJt(), RJC(), In();

}
