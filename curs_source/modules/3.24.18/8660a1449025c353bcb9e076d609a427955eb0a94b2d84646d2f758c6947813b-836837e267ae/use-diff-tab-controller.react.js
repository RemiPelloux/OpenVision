import { Yye } from "./agent-submit-model-config.js";
import { Rs } from "./authenticationService.js";
import { ERt } from "./diff-tab-commit-actions.js";
import { EZl } from "./diff-tab-create-pr-preference.js";
import { mv } from "./editor-panel-context.react.js";
import { _s } from "./experimentService.js";
import { hy } from "./gitContextService.js";
import { qV } from "./glass-diff-hooks.js";
import { dkC } from "./glass-diff-revert-plan.js";
import { MRt } from "./glass-diff-types.js";
import { PRt } from "./glass-diff-utils.js";
import { zKe } from "./glass-github-connect-service.js";
import { Zu } from "./glass-log-service.js";
import { zc } from "./glass-notification-service.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { r1 } from "./use-command-bridge.react.js";
import { fkC } from "./use-discard-busy.react.js";
import { YBi } from "./use-editor-panel-message-target.react.js";
import { It_ } from "./use-glass-github-connect-nudge.react.js";
import { sgc } from "./use-has-unpushed-commits.react.js";
import { w_ } from "./use-service-event-state.react_2.js";
import { In } from "./use-service.react_2.js";
var t5s, ss_;
export { ss_, t5s };
var __wakaru_os__initialized = false;
export function os_() {
if (__wakaru_os__initialized) return;
__wakaru_os__initialized = true;
"use strict";
E(), Mt(), hy(), Rs(), _s(), r1(), It_(), sgc(), In(), w_(), qV(), dkC(), MRt(), PRt(), fkC(), zKe(), Zu(), zc(), Yye(), mv(), YBi(), ERt(), EZl(), t5s = {
    path: null,
    filePaths: [],
    isLoading: !1,
    error: void 0,
    commitInfo: void 0
}, ss_ = "unstaged";

}
