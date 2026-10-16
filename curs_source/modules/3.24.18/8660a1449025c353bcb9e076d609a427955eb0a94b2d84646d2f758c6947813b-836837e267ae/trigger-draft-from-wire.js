import { w2t } from "./automations-wire-aliases.js";
import { EJ, Gqe, Pot, c4e } from "./automations_pb.js";
import { E } from "./tslib.es6.js";
var ldt, HFv, WFv, GFv, qFv, wDs, zFv, VFv, NJt;
export { GFv, HFv, NJt, VFv, WFv, ldt, qFv, wDs, zFv };
var __wakaru_CDs_initialized = false;
export function CDs() {
if (__wakaru_CDs_initialized) return;
__wakaru_CDs_initialized = true;
"use strict";
E(), w2t(), ldt = Symbol("wireZeroSentinel"), HFv = {
    [EJ.UNSPECIFIED]: ldt,
    [EJ.OPENED]: "opened",
    [EJ.PUSHED]: "pushed",
    [EJ.MERGED]: "merged",
    [EJ.COMMENTED]: "commented",
    [EJ.DRAFT_OPENED]: "draftOpened",
    [EJ.LABELED]: "labeled",
    [EJ.UNLABELED]: "unlabeled",
    [EJ.CLOSED]: void 0
}, WFv = {
    [Pot.GIT_CI_COMPLETION_CONDITION_UNSPECIFIED]: ldt,
    [Pot.GIT_CI_COMPLETION_CONDITION_FAILURE]: "failure",
    [Pot.GIT_CI_COMPLETION_CONDITION_SUCCESS]: "success",
    [Pot.GIT_CI_COMPLETION_CONDITION_ANY]: "any"
}, GFv = {
    [c4e.UNSPECIFIED]: ldt,
    [c4e.ANY]: "any",
    [c4e.SUCCESS]: "success",
    [c4e.FAILURE]: "failure",
    [c4e.CANCELLED]: "cancelled"
}, qFv = {
    [Gqe.UNSPECIFIED]: ldt,
    [Gqe.ON]: "on",
    [Gqe.OFF]: "off",
    [Gqe.CUSTOM]: "custom"
}, wDs = {
    issueCreated: "issueCreated",
    statusChanged: "statusChanged",
    endOfCycle: "endOfCycle"
}, zFv = {
    incidentTriggered: "incidentTriggered",
    incidentAcknowledged: "incidentAcknowledged",
    incidentResolved: "incidentResolved",
    incidentEscalated: "incidentEscalated",
    incidentAny: "incidentAny"
}, VFv = {
    issueCreated: "issueCreated",
    issueResolved: "issueResolved",
    issueAssigned: "issueAssigned",
    issueArchived: "issueArchived",
    issueUnresolved: "issueUnresolved",
    issueAny: "issueAny"
}, NJt = {
    kind: "unknown"
};

}
