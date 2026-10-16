import { NSc } from "./agent-checkout-access.js";
import { Ry } from "./agentRepositoryService.js";
import { ju } from "./agent_pb.js";
import { Ss } from "./aiMiscServices.js";
import { ERt } from "./diff-tab-commit-actions.js";
import { Ns_ } from "./diff-tab-error-state.js";
import { t2s } from "./diff-tab-view-utils.js";
import { tCv } from "./git-action-submit.js";
import { hy } from "./gitContextService.js";
import { qV } from "./glass-diff-hooks.js";
import { $G } from "./glass-diff-service.js";
import { SOs } from "./glass-git-action-visibility.js";
import { Zu } from "./glass-log-service.js";
import { zc } from "./glass-notification-service.js";
import { xc } from "./glass-storage-service.js";
import { of } from "./modelConfigServiceTypes.js";
import { tZ } from "./per-branch-pr-tabs.js";
import { U8i } from "./pull-request-action-label.js";
import { Kf, ca } from "./reactive.js";
import { dv } from "./storage-keys.js";
import { E } from "./tslib.es6.js";
import { Cb_ } from "./use-agent-pending-action-lock.react.js";
import { NRt } from "./use-agent-running-state.react.js";
import { kF } from "./use-agent-workspace.react.js";
import { _o_ } from "./use-branch-pull-request-visibility.react.js";
import { Ogc } from "./use-cloud-agent-pinned-diff-base.react.js";
import { $gc } from "./use-cloud-cached-composer-diff.react.js";
import { ISc } from "./use-diff-scope-emptiness.react.js";
import { z6 } from "./use-glass-persistent-state.react.js";
import { sgc } from "./use-has-unpushed-commits.react.js";
import { IG } from "./use-header-tracked-git-derived.react.js";
import { At_ } from "./use-is-worktree-agent-header.react.js";
import { pRt } from "./use-machine-reachability.react.js";
import { c2s } from "./use-ongoing-git-action.react.js";
import { RV } from "./use-pr-lifecycle.react.js";
import { i3n } from "./use-pull-request-states-tick.react.js";
import { $h } from "./use-reactive.react_2.js";
import { In } from "./use-service.react_2.js";
import { Af } from "./use-solid-selector.react_2.js";
import { HP } from "./use-workspace.react_2.js";
import { Cu } from "./workspaceCollectionService.js";
import { Lpe } from "./workspaceConnectionService.js";
var b1_, y1_, JPt;
export { JPt, b1_, y1_ };
var __wakaru_WKC_initialized = false;
export function WKC() {
if (__wakaru_WKC_initialized) return;
__wakaru_WKC_initialized = true;
"use strict";
E(), ju(), Ry(), Kf(), Ss(), hy(), of(), Cu(), Lpe(), ERt(), Ns_(), t2s(), Ogc(), $gc(), tZ(), i3n(), pRt(), dv(), qV(), $G(), SOs(), ISc(), Zu(), zc(), xc(), NSc(), tCv(), U8i(), Cb_(), NRt(), kF(), _o_(), z6(), sgc(), IG(), At_(), c2s(), RV(), $h(), In(), Af(), HP(), b1_ = new ca([]), y1_ = new ca([]), JPt = Object.freeze({
    kind: "hidden"
});

}
