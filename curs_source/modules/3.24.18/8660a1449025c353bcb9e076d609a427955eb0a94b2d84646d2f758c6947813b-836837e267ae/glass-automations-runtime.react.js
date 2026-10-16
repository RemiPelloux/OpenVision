import { Dc } from "./aiService.js";
import { Rs } from "./authenticationService.js";
import { TDs } from "./automation-view-from-wire.js";
import { $k } from "./automations-query-keys.js";
import { GM } from "./automations_pb.js";
import { Ag } from "./connectErrors.js";
import { Du } from "./dashboard_pb.js";
import { ooc } from "./glass-automations-domain.react.js";
import { zKe } from "./glass-github-connect-service.js";
import { zc } from "./glass-notification-service.js";
import { Xf } from "./glass-opener-service.js";
import { eh } from "./index_221.js";
import { Y5n } from "./picker-options-from-wire.js";
import { EE } from "./privateInferenceEnablementService.js";
import { PB } from "./privateInferenceFeatures.js";
import { lSs } from "./team-context.react.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { N6v } from "./use-all-runs-query.react.js";
import { rH0 } from "./use-cancel-all-automation-runs-mutation.react.js";
import { aH0 } from "./use-cancel-automation-run-mutation.react.js";
import { loc } from "./use-create-automation-mutation.react.js";
import { dH0 } from "./use-create-workflow-from-template-mutation.react.js";
import { gH0 } from "./use-delete-automation-memory-mutation.react.js";
import { uoc } from "./use-delete-automation-mutation.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { bH0 } from "./use-get-automation-memory-query.react.js";
import { A4i } from "./use-github-installations-query.react.js";
import { P2 } from "./use-glass-account.react.js";
import { wH0 } from "./use-list-automation-memories-query.react.js";
import { RH0 } from "./use-origin-repository-branches-query.react.js";
import { XZt } from "./use-preferred-repo-source.react.js";
import { FH0 } from "./use-repository-branches-query.react.js";
import { $H0 } from "./use-repository-default-branch-query.react.js";
import { GH0 } from "./use-retry-automation-run-mutation.react.js";
import { XH0 } from "./use-run-summary-query.react.js";
import { In } from "./use-service.react_2.js";
import { DDs } from "./use-slack-conversations-query.react.js";
import { dKe } from "./use-team.react.js";
import { h4v } from "./use-test-automation-mutation.react.js";
import { iW0 } from "./use-update-automation-memory-mutation.react.js";
import { m4v } from "./use-update-automation-mutation.react.js";
import { v4v } from "./use-validate-automation-tools-mutation.react.js";
import { pW0 } from "./use-verify-repository-branch-query.react.js";
import { v6v } from "./use-version-gated-template-ids.react.js";
import { Fsc } from "./workflow-draft-to-wire.js";
var C4v;
export { C4v };
var __wakaru_ODs_initialized = false;
export function ODs() {
if (__wakaru_ODs_initialized) return;
__wakaru_ODs_initialized = true;
"use strict";
E(), eh(), GM(), Du(), fn(), Dc(), Ag(), Rs(), EE(), PB(), TDs(), Y5n(), Fsc(), lSs(), Ru(), P2(), XZt(), In(), dKe(), $k(), zKe(), zc(), Xf(), ooc(), N6v(), rH0(), aH0(), loc(), dH0(), gH0(), uoc(), bH0(), A4i(), wH0(), RH0(), FH0(), $H0(), GH0(), XH0(), DDs(), h4v(), iW0(), m4v(), v4v(), pW0(), v6v(), C4v = {
    github: "https://cursor.com/dashboard?tab=integrations",
    gitlab: "https://cursor.com/dashboard?tab=integrations",
    slack: "https://cursor.com/dashboard?tab=integrations",
    microsoftTeams: "https://cursor.com/dashboard?tab=integrations",
    linear: "https://cursor.com/dashboard?tab=integrations",
    pagerduty: "https://cursor.com/dashboard?tab=integrations",
    sentry: "https://cursor.com/dashboard?tab=integrations"
};

}
