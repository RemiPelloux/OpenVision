import { w2t } from "./automations-wire-aliases.js";
import { EJ, Gqe, Pot, a0i, aqt, c4e, mie, qqe, rqt, sqt } from "./automations_pb.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Osc, o6v, a6v, l6v, c6v, u6v, d6v, h6v, p6v, m6v, g6v;
export { Osc, a6v, c6v, d6v, g6v, h6v, l6v, m6v, o6v, p6v, u6v };
var __wakaru_Fsc_initialized = false;
export function Fsc() {
if (__wakaru_Fsc_initialized) return;
__wakaru_Fsc_initialized = true;
"use strict";
E(), hr(), w2t(), Osc = class extends Error {
    constructor(t){
        super(`cannot serialize ${t} to the wire: this arm carries a config this client cannot represent (saving would rewrite its semantics)`), this.name = "AutomationsDraftToWireError";
    }
}, o6v = {
    opened: EJ.OPENED,
    pushed: EJ.PUSHED,
    merged: EJ.MERGED,
    commented: EJ.COMMENTED,
    draftOpened: EJ.DRAFT_OPENED,
    labeled: EJ.LABELED,
    unlabeled: EJ.UNLABELED
}, a6v = {
    failure: Pot.GIT_CI_COMPLETION_CONDITION_FAILURE,
    success: Pot.GIT_CI_COMPLETION_CONDITION_SUCCESS,
    any: Pot.GIT_CI_COMPLETION_CONDITION_ANY
}, l6v = {
    any: c4e.ANY,
    success: c4e.SUCCESS,
    failure: c4e.FAILURE,
    cancelled: c4e.CANCELLED
}, c6v = {
    on: Gqe.ON,
    off: Gqe.OFF,
    custom: Gqe.CUSTOM
}, u6v = {
    standard: rqt.STANDARD,
    hard: rqt.HARD
}, d6v = {
    sameChat: sqt.SAME_CHAT,
    newAgent: sqt.NEW_AGENT
}, h6v = {
    openGitPr: a0i.OPEN_GIT_PR
}, p6v = {
    private: mie.USER,
    team: mie.TEAM,
    team_visible: mie.TEAM_VISIBLE,
    team_editable: mie.TEAM_EDITABLE,
    team_editable_user: mie.TEAM_EDITABLE_USER
}, m6v = {
    portalWeb: qqe.PORTAL_WEB,
    glassUi: qqe.GLASS_UI,
    skillMcp: qqe.SKILL_MCP,
    configAsCode: qqe.CONFIG_AS_CODE
}, g6v = {
    executionRuns: aqt.EXECUTION_RUNS,
    filterEvaluations: aqt.FILTER_EVALUATIONS
};

}
