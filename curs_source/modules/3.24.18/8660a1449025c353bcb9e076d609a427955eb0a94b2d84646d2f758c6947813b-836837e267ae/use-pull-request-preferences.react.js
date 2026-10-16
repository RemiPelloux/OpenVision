import { Qe } from "./Iwo.js";
import { iS } from "./adminSettingsService.js";
import { Dc } from "./aiService.js";
import { Rs } from "./authenticationService.js";
import { Rme } from "./cloudAgentPullRequestUtils.js";
import { Du } from "./dashboard_pb.js";
import { Od } from "./host.js";
import { ctv } from "./pullRequestPreferences.js";
import { E } from "./tslib.es6.js";
import { D$ } from "./use-feature-gate.react.js";
import { Lg } from "./use-service.react.js";
var __wakaru_Dqw_initialized = false;
export function Dqw() {
if (__wakaru_Dqw_initialized) return;
__wakaru_Dqw_initialized = true;
"use strict";
E(), Du(), Qe(), ctv(), Rme(), Dc(), iS(), Rs(), Od(), D$(), Lg();

}
