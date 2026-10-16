import { Gt } from "./Iwo.js";
import { Ry } from "./agentRepositoryService.js";
import { hc, ju } from "./agent_pb.js";
import { Ss } from "./aiMiscServices.js";
import { Pl } from "./composerDataServiceTypes.js";
import { oNi } from "./composerDiffScopeService.js";
import { LS } from "./composerEventService.js";
import { wCn } from "./composerGitActionStatusService.js";
import { cie } from "./composerNotLoadedError.js";
import { cs_ } from "./diff-file-tree-menu.react.js";
import { zt_ } from "./diff-list-model.contract.js";
import { Rs_ } from "./diff-meter-panel.react.js";
import { ARt } from "./diff-render-limits.js";
import { hs_ } from "./diff-tab-changes-layout.react.js";
import { LkC } from "./diff-tab-changes-scope-rows.js";
import { ERt } from "./diff-tab-commit-actions.js";
import { GkC } from "./diff-tab-empty-state.react.js";
import { Ns_ } from "./diff-tab-error-state.js";
import { Ls_ } from "./diff-tab-filter-scope.js";
import { a5s } from "./diff-tab-header.react.js";
import { t0C } from "./diff-tab-large-diff-gate.react.js";
import { r0C } from "./diff-tab-loading.js";
import { l0C } from "./diff-tab-no-repo-empty-state.react.js";
import { or_ } from "./diff-tab-turn-request.js";
import { t2s } from "./diff-tab-view-utils.js";
import { mv } from "./editor-panel-context.react.js";
import { hy } from "./gitContextService.js";
import { QQt } from "./github-header-action.js";
import { cS } from "./glass-clipboard-service.js";
import { AL } from "./glass-configuration-service.js";
import { aw } from "./glass-context-key-service.js";
import { qV } from "./glass-diff-hooks.js";
import { $G } from "./glass-diff-service.js";
import { MRt } from "./glass-diff-types.js";
import { PRt } from "./glass-diff-utils.js";
import { Hpc } from "./glass-diff-virtualization-service.js";
import { I8e } from "./glass-editor-panel-analytics.js";
import { SOs } from "./glass-git-action-visibility.js";
import { Tpc } from "./glass-github-connect-nudge.js";
import { zKe } from "./glass-github-connect-service.js";
import { Hen } from "./glass-keybinding-consumer-service.js";
import { Zu } from "./glass-log-service.js";
import { zc } from "./glass-notification-service.js";
import { Xf } from "./glass-opener-service.js";
import { xc } from "./glass-storage-service.js";
import { cD } from "./glass-tab-persistence-service.js";
import { BS } from "./glass-toast.js";
import { xd } from "./glass-workspace-context-service.js";
import { Gv } from "./glassContextKeys.js";
import { Mt } from "./index_197.js";
import { JOs } from "./local-diff-list-model.js";
import { D0C } from "./local-diff-list-view.react.js";
import { of } from "./modelConfigServiceTypes.js";
import { tZ } from "./per-branch-pr-tabs.js";
import { imc } from "./pr-diff-list-model.js";
import { Ti_ } from "./pr-diff-panel-content.react.js";
import { Umc } from "./pr-file-tree-filters-chrome.react.js";
import { U6n } from "./pr-file-tree-filters.js";
import { Kf } from "./reactive.js";
import { BbC } from "./scm-base-branch-picker.react.js";
import { MSC } from "./scm-header-row.react.js";
import { ZSC } from "./scm-header-view-pr-button.react.js";
import { dv } from "./storage-keys.js";
import { vce } from "./tab-loading-placeholder.react.js";
import { Qpe } from "./trackedGitRepoHeader.js";
import { E } from "./tslib.es6.js";
import { NRt } from "./use-agent-running-state.react.js";
import { Npc } from "./use-agent-status-branch-picker.react.js";
import { j0C } from "./use-branch-diff-scope-model.react.js";
import { i1C } from "./use-changes-scope-model.react.js";
import { W0C } from "./use-close-diff-tab-menus-when-inactive.react.js";
import { Ogc } from "./use-cloud-agent-pinned-diff-base.react.js";
import { $gc } from "./use-cloud-cached-composer-diff.react.js";
import { r1 } from "./use-command-bridge.react.js";
import { os_ } from "./use-diff-tab-controller.react.js";
import { SCC } from "./use-diff-tab-pr-affordances.react.js";
import { ICC } from "./use-diff-tab-presentation-request.react.js";
import { RCC } from "./use-diff-tree-sidebar-resize.react.js";
import { LVl } from "./use-editor-panel-pane-sidebar.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { KkC } from "./use-glass-diff-find.react.js";
import { It_ } from "./use-glass-github-connect-nudge.react.js";
import { z6 } from "./use-glass-persistent-state.react.js";
import { S2t } from "./use-glass-typography.react.js";
import { IG } from "./use-header-tracked-git-derived.react.js";
import { At_ } from "./use-is-worktree-agent-header.react.js";
import { fr_ } from "./use-last-turn-diff-scope.react.js";
import { KT } from "./use-layout-service.react.js";
import { NCC } from "./use-local-diff-file-tree-filters.react.js";
import { pRt } from "./use-machine-reachability.react.js";
import { c2s } from "./use-ongoing-git-action.react.js";
import { Pi_ } from "./use-pr-file-tree-filters.react.js";
import { RV } from "./use-pr-lifecycle.react.js";
import { Lr_ } from "./use-primary-modifier-active.react.js";
import { i3n } from "./use-pull-request-states-tick.react.js";
import { $h } from "./use-reactive.react_2.js";
import { FCC } from "./use-reset-diff-filter-scope-on-identity-change.react.js";
import { u1C } from "./use-scm-header-base-branch.react.js";
import { _1C } from "./use-scm-header-branch-view.react.js";
import { w_ } from "./use-service-event-state.react_2.js";
import { In } from "./use-service.react_2.js";
import { Fr_ } from "./workspace-connection-presentation.js";
import { Lpe } from "./workspaceConnectionService.js";
import { Lh } from "./workspaceMetadataService.js";
var Mo_, Do_, nfc, h5s, No_, Lo_;
export { Do_, Lo_, Mo_, No_, h5s, nfc };
var __wakaru_ifc_initialized = false;
export function ifc() {
if (__wakaru_ifc_initialized) return;
__wakaru_ifc_initialized = true;
"use strict";
E(), Mt(), ju(), Gt(), aw(), xd(), Pl(), cie(), oNi(), LS(), wCn(), Qpe(), Ry(), Kf(), Ss(), hy(), of(), Lpe(), Lh(), Tpc(), dv(), Gv(), NRt(), Npc(), r1(), Ru(), It_(), z6(), S2t(), IG(), At_(), KT(), c2s(), RV(), $h(), In(), ARt(), qV(), $G(), MRt(), PRt(), Hpc(), SOs(), zKe(), Hen(), zc(), BS(), cD(), zt_(), mv(), tZ(), imc(), Ti_(), Umc(), U6n(), Pi_(), i3n(), BbC(), MSC(), ZSC(), i1C(), u1C(), _1C(), vce(), pRt(), Lr_(), Fr_(), cs_(), hs_(), LkC(), GkC(), t2s(), KkC(), w_(), cS(), AL(), Zu(), Xf(), xc(), I8e(), LVl(), Rs_(), ERt(), Ns_(), Ls_(), a5s(), t0C(), r0C(), l0C(), or_(), t2s(), QQt(), JOs(), D0C(), j0C(), W0C(), Ogc(), $gc(), os_(), SCC(), ICC(), RCC(), fr_(), NCC(), FCC(), Mo_ = 6, Do_ = "unstaged", nfc = Object.freeze([]), h5s = Object.freeze([]), No_ = Object.freeze([]), Lo_ = new Map([
    [
        hc.DIFF_TAB_COMMIT,
        "commit"
    ],
    [
        hc.DIFF_TAB_COMMIT_AND_PUSH,
        "commitAndPush"
    ],
    [
        hc.DIFF_TAB_CREATE_BRANCH,
        "createBranch"
    ],
    [
        hc.DIFF_TAB_PUSH,
        "push"
    ],
    [
        hc.DIFF_TAB_CREATE_PR,
        "createPr"
    ]
]);

}
