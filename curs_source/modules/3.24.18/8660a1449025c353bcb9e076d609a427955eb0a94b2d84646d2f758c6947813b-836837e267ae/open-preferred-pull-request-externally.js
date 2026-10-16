import { iS } from "./adminSettingsService.js";
import { Ss } from "./aiMiscServices.js";
import { Dc } from "./aiService.js";
import { Rme } from "./cloudAgentPullRequestUtils.js";
import { Nw } from "./cloudEnvironmentTemplateService.js";
import { _s } from "./experimentService.js";
import { Zu } from "./glass-log-service.js";
import { Xf } from "./glass-opener-service.js";
import { E } from "./tslib.es6.js";
var __wakaru_BOs_initialized = false;
export function BOs() {
if (__wakaru_BOs_initialized) return;
__wakaru_BOs_initialized = true;
"use strict";
E(), Nw(), Rme(), Ss(), Dc(), iS(), _s(), Zu(), Xf();

}
