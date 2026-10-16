import { Qe } from "./Iwo.js";
import { iS } from "./adminSettingsService.js";
import { Ss } from "./aiMiscServices.js";
import { Dc } from "./aiService.js";
import { Rme } from "./cloudAgentPullRequestUtils.js";
import { Nw } from "./cloudEnvironmentTemplateService.js";
import { jm } from "./command-ids.js";
import { ifc } from "./diff-tab-content.react.js";
import { a5s } from "./diff-tab-header.react.js";
import { mv } from "./editor-panel-context.react.js";
import { _s } from "./experimentService.js";
import { QQt } from "./github-header-action.js";
import { oyf } from "./githubPullRequestReviewCursorLink.js";
import { cS } from "./glass-clipboard-service.js";
import { a5 } from "./glass-dialog-service.js";
import { I8e } from "./glass-editor-panel-analytics.js";
import { Zu } from "./glass-log-service.js";
import { zc } from "./glass-notification-service.js";
import { Xf } from "./glass-opener-service.js";
import { BS } from "./glass-toast.js";
import { Mt } from "./index_197.js";
import { URC } from "./link-pull-request-flow.js";
import { tZ } from "./per-branch-pr-tabs.js";
import { WRC } from "./pr-stack-merge.js";
import { M2C } from "./pr-stack-navigator.react.js";
import { f8i } from "./pr-tab-context.react.js";
import { O2C } from "./pr-tab-header-menu.react.js";
import { j2C } from "./pr-tab-loading.js";
import { Gvc } from "./pr-tab-skeletons.react.js";
import { DPC } from "./pr-tab-subview-tabs.react.js";
import { FPC } from "./pr-tab-title-row.react.js";
import { oI } from "./prettyDialog.js";
import { MRC } from "./pull-request-provider-icon.js";
import { Mk } from "./pullRequestIdentity.js";
import { QPC } from "./self-driving-mode-control.react.js";
import { E } from "./tslib.es6.js";
import { eMC } from "./unlink-pull-request-flow.js";
import { r1 } from "./use-command-bridge.react.js";
import { FRC } from "./use-edit-pull-request-title.react.js";
import { hk } from "./use-keybinding-label.react.js";
import { RV } from "./use-pr-lifecycle.react.js";
import { mMC } from "./use-pr-tab-github-actions.react.js";
import { yMC } from "./use-pr-tab-pull-request-lifecycle-actions.react.js";
import { JMC } from "./use-pr-tab-stack.react.js";
import { w_ } from "./use-service-event-state.react_2.js";
import { In } from "./use-service.react_2.js";
import { Af } from "./use-solid-selector.react_2.js";
import { yBe } from "./use-timed-flag.react_2.js";
var cd_, ud_;
export { cd_, ud_ };
var __wakaru_rDC_initialized = false;
export function rDC() {
if (__wakaru_rDC_initialized) return;
__wakaru_rDC_initialized = true;
"use strict";
E(), a5(), Mt(), Qe(), Nw(), oI(), Rme(), Mk(), Ss(), Dc(), oyf(), iS(), _s(), jm(), r1(), hk(), RV(), In(), w_(), Af(), yBe(), cS(), Zu(), zc(), BS(), Xf(), MRC(), ifc(), a5s(), QQt(), mv(), I8e(), FRC(), URC(), tZ(), WRC(), M2C(), f8i(), O2C(), j2C(), Gvc(), DPC(), FPC(), QPC(), eMC(), mMC(), yMC(), JMC(), cd_ = {
    type: "markAsReady",
    label: "Mark as Ready",
    disabled: !0
}, ud_ = 1500;

}
