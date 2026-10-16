import { Ei } from "./Iwo.js";
import { wl } from "./agentRepositoryServiceTypes.js";
import { Ss } from "./aiMiscServices.js";
import { Nw } from "./cloudEnvironmentTemplateService.js";
import { LE } from "./compute-target-guards.js";
import { Ef } from "./constants_18.js";
import { PUv } from "./create-project-dialog-create-gating.js";
import { W3s } from "./create-project-dialog-staged.js";
import { BUv } from "./create-project-github-onboarding.js";
import { zUv } from "./create-project-instant.js";
import { p3s } from "./draft-picker-target.js";
import { vFn } from "./empty-state-submit-options.js";
import { _s } from "./experimentService.js";
import { W4i } from "./first-project-onboarding.js";
import { KUv } from "./glass-action-pill.react.js";
import { s3s } from "./glass-create-project-draft-service.js";
import { MDe } from "./glass-error-boundary.react.js";
import { jJt } from "./glass-new-project-service.js";
import { zc } from "./glass-notification-service.js";
import { sFn } from "./glass-staged-projects-service.contract.js";
import { BS } from "./glass-toast.js";
import { Mt } from "./index_197.js";
import { eh } from "./index_221.js";
import { QJt } from "./index_233.js";
import { joc } from "./lBv.js";
import { _Fn } from "./new-project-cloud-picker-utils.js";
import { VeC } from "./new-project-model-picker.react.js";
import { YeC } from "./new-project-picker-status-trigger.react.js";
import { LBv } from "./new-project-submit-failed-actions.js";
import { U$ } from "./pending-new-project.js";
import { Koc } from "./project-app-first-task-open.js";
import { wye } from "./project-selector-no-repo.js";
import { ZeC } from "./project-submit-target.js";
import { el } from "./reactiveStorageServiceTypes.js";
import { E } from "./tslib.es6.js";
import { wov } from "./use-background-composer-client.react.js";
import { dtC } from "./use-create-project-flow-analytics.react.js";
import { CtC } from "./use-create-project-github-onboarding.react.js";
import { Gac } from "./use-ensure-no-repo-environment-mutation.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { D2t } from "./use-glass-window-identity.react.js";
import { L2t } from "./use-new-project-availability.react.js";
import { ttC } from "./use-new-project-cloud-projects.react.js";
import { atC } from "./use-new-project-default-repo.react.js";
import { ZJt } from "./use-private-worker-gating.react.js";
import { $h } from "./use-reactive.react_2.js";
import { KX } from "./use-recent-projects.react.js";
import { In } from "./use-service.react_2.js";
import { ItC } from "./use-staged-project-logical-environments.react.js";
import { Xo } from "./uuid_2.js";
import { cm } from "./workspace-helpers.js";
import { Lh } from "./workspaceMetadataService.js";
var clc, pjv, mjv, gjv, fjv, vjv, _jv, een;
export { _jv, clc, een, fjv, gjv, mjv, pjv, vjv };
var __wakaru_PtC_initialized = false;
export function PtC() {
if (__wakaru_PtC_initialized) return;
__wakaru_PtC_initialized = true;
"use strict";
E(), Mt(), eh(), Ei(), Xo(), el(), Nw(), Ef(), wl(), Ss(), _s(), Lh(), wov(), Ru(), joc(), D2t(), L2t(), $h(), KX(), In(), s3s(), jJt(), zc(), BS(), LBv(), sFn(), LE(), p3s(), W4i(), U$(), Koc(), cm(), QJt(), wye(), ZJt(), vFn(), Gac(), PUv(), W3s(), BUv(), zUv(), KUv(), MDe(), _Fn(), VeC(), YeC(), ZeC(), ttC(), atC(), dtC(), CtC(), ItC(), clc = "Create Project", pjv = "Create a focused chat where Agents coordinate work", mjv = "Create Project", gjv = "Project name", fjv = "Workspace", vjv = "Model", _jv = {
    runtime: "cloud"
}, een = {
    body: {
        k1xSpc: "glass-78zum5",
        kzqmXN: "glass-h8yej3",
        kXwgrk: "glass-dt5ytf",
        kGNEyG: "glass-1qjc9v5",
        kOIVth: "glass-1qqbgdy",
        k7Eaqz: "glass-euugli",
        kLKAdn: "glass-1avjwpx",
        kGO01o: "glass-ab0n8b",
        $$css: !0
    },
    nameInputGroup: {
        kzqmXN: "glass-h8yej3",
        $$css: !0
    },
    nameInput: {
        kGuDYH: "glass-wsyq91",
        k63SB2: "glass-k50ysn",
        k9WMMc: "glass-2b8uid",
        $$css: !0
    },
    stagedDescription: {
        k9WMMc: "glass-2b8uid",
        kHjlTd: "glass-j0a0fe",
        $$css: !0
    },
    closeButton: {
        kzqmXN: "glass-w4jnvo",
        kZKoxP: "glass-1qx5ct2",
        k7Eaqz: "glass-t4ypqs",
        kAzted: "glass-isnujt",
        $$css: !0
    },
    footer: {
        kjj79g: "glass-13a6bvl",
        kGNEyG: "glass-6s0dn4",
        kOIVth: "glass-ehausa",
        $$css: !0
    }
};

}
