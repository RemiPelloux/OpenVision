import { zze } from "./PullRequestRepositoryService.contract.js";
import { Dc } from "./aiService.js";
import { qn } from "./async.js";
import { Rme } from "./cloudAgentPullRequestUtils.js";
import { mv } from "./editor-panel-context.react.js";
import { j5s } from "./pr-lifecycle-cache.js";
import { Lme } from "./pr-query-client_2.js";
import { CDe } from "./pr-query-keys_2.js";
import { nm_ } from "./pr-tab-refresh.js";
import { E } from "./tslib.es6.js";
import { r1 } from "./use-command-bridge.react.js";
import { In } from "./use-service.react_2.js";
import { I5C } from "./use-turn-settled-refresh.react.js";
var sm_, om_;
export { om_, sm_ };
var __wakaru_M5C_initialized = false;
export function M5C() {
if (__wakaru_M5C_initialized) return;
__wakaru_M5C_initialized = true;
"use strict";
E(), qn(), Rme(), zze(), Dc(), r1(), In(), I5C(), j5s(), Lme(), CDe(), mv(), nm_(), sm_ = 1e3, om_ = new Set([
    "metadata",
    "stack",
    "commits",
    "timeline",
    "discussions"
]);

}
