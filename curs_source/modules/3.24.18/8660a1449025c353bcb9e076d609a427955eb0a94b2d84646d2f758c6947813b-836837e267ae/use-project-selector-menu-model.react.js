import { N3s } from "./any-repo-pool-repositories.js";
import { Nw } from "./cloudEnvironmentTemplateService.js";
import { LE } from "./compute-target-guards.js";
import { TBv } from "./create-local-workspace-project.js";
import { z4i } from "./environment-selector-capabilities.js";
import { o3v } from "./git-clone-url-match.js";
import { hy } from "./gitContextService.js";
import { YJt } from "./glass-cloud-recents-service.contract.js";
import { a5 } from "./glass-dialog-service.js";
import { hv } from "./glass-file-service.js";
import { Cce } from "./glass-modal-service.js";
import { Xf } from "./glass-opener-service.js";
import { xd } from "./glass-workspace-context-service.js";
import { OG } from "./glass-workspaces-management-service.js";
import { pce } from "./glass-workspaces-service.contract.js";
import { Mt } from "./index_197.js";
import { ub } from "./localAgentRepository.js";
import { bF } from "./multi-repo-cloud-targets.js";
import { eic } from "./multi-root-workspace-fallback-name.js";
import { OQ0 } from "./multi-root-workspace-picker-utils.js";
import { HNi } from "./multiRootWorkspaceFileService.js";
import { Ki } from "./network.js";
import { nut } from "./origin-cloud-projects.js";
import { U$ } from "./pending-new-project.js";
import { D7v } from "./project-selector-browse.react.js";
import { u7v } from "./project-selector-menu-host-context.react.js";
import { BQ0 } from "./project-selector-menu-session.js";
import { wye } from "./project-selector-no-repo.js";
import { jQ0 } from "./project-selector-parent-search-rows.js";
import { qJt } from "./project-selector-search-values.js";
import { WT } from "./project-selector-utils.js";
import { L_ } from "./projectService.js";
import { rEt } from "./repoAssociation.js";
import { Qws } from "./scmProviderInstallations.js";
import { uFn } from "./short-repo-names.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { C7v } from "./use-cloud-git-repo-search.react.js";
import { q4i } from "./use-cloud-logical-environments.react.js";
import { cEe } from "./use-cloud-projects.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { P2 } from "./use-glass-account.react.js";
import { o9i } from "./use-glass-github-connect-action.react.js";
import { zQ0 } from "./use-local-folder-match.react.js";
import { O7v } from "./use-max-multi-repo-environment-repos.react.js";
import { L2t } from "./use-new-project-availability.react.js";
import { aFn } from "./use-origin-cloud-projects.react.js";
import { RYe } from "./use-origin-repositories.react.js";
import { XZt } from "./use-preferred-repo-source.react.js";
import { eJ0 } from "./use-project-selector-data.react.js";
import { w_ } from "./use-service-event-state.react_2.js";
import { In } from "./use-service.react_2.js";
import { cm } from "./workspace-helpers.js";
import { Lh } from "./workspaceMetadataService.js";
var G7v, q7v, z7v, V7v, K7v, Y7v, X7v, Z7v, Q7v;
export { G7v, K7v, Q7v, V7v, X7v, Y7v, Z7v, q7v, z7v };
var __wakaru_rJ0_initialized = false;
export function rJ0() {
if (__wakaru_rJ0_initialized) return;
__wakaru_rJ0_initialized = true;
"use strict";
E(), Mt(), Ki(), fn(), ub(), Qws(), Nw(), L_(), rEt(), hy(), HNi(), Lh(), C7v(), q4i(), cEe(), Ru(), P2(), O7v(), o9i(), L2t(), aFn(), RYe(), XZt(), In(), w_(), a5(), hv(), YJt(), Cce(), pce(), Xf(), xd(), OG(), LE(), eic(), nut(), U$(), cm(), N3s(), TBv(), o3v(), bF(), z4i(), OQ0(), D7v(), u7v(), BQ0(), jQ0(), qJt(), wye(), WT(), uFn(), zQ0(), eJ0(), G7v = new Set, q7v = [], z7v = new Set, V7v = "https://cursor.com/dashboard?tab=integrations", K7v = [], Y7v = [
    {
        id: "github",
        label: "GitHub",
        icon: "logo-github"
    },
    {
        id: "gitlab",
        label: "GitLab",
        icon: "logo-gitlab"
    },
    {
        id: "azure-devops",
        label: "Azure DevOps",
        icon: "logo-azure-devops"
    }
], X7v = "glass://local-workspace-create", Z7v = "glass://local-git-repo-create", Q7v = "glass://flyout-folder-create";

}
