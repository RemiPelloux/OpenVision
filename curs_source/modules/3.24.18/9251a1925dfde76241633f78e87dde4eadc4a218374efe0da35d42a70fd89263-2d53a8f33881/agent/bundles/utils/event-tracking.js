import { init_dist } from "../../../context/dist/index.js";
import { createCounter } from "../../../dist_exports.js";
import { createKey } from "../../../entry_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var skillApplied, agentEventTrackerKey, getAgentEventTracker;
export { agentEventTrackerKey, getAgentEventTracker, skillApplied };
var __wakaru_init_event_tracking_initialized = false;
export function init_event_tracking() {
if (__wakaru_init_event_tracking_initialized) return;
__wakaru_init_event_tracking_initialized = true;
"use strict";
init_dist();
init_dist4();
init_dist27();
skillApplied = createCounter("skill.applied", {
    description: "Skill applications (e.g. SKILL.md reads), tagged by the catalog truncation that ran for the current turn, the skill source, and the entrypoint that triggered the application",
    labelNames: [
        "truncation",
        "skill_source",
        "entrypoint"
    ]
});
agentEventTrackerKey = createKey(Symbol("agentEventTracker"), {
    trackUnfinishedTodos: ()=>{},
    trackUnfinishedTodosWhenCreatedTodos: ()=>{},
    trackUnfinishedTodosWhenHadUnfinishedTodosAtStart: ()=>{},
    trackSummarizationTriggered: ()=>{},
    trackSummaryLifecycle: ()=>{},
    trackPromptTokens: ()=>{},
    trackNumberOfToolCalls: ()=>{},
    trackToolCallStarted: ()=>{},
    trackToolCallResult: ()=>{},
    trackComputerUseExecution: ()=>{},
    trackRecordScreenExecution: ()=>{},
    trackLoopDetected: ()=>{},
    trackSubagentCreated: ()=>{},
    trackSubagentCompleted: ()=>{},
    trackShellSandboxResult: ()=>{},
    trackSkillUsed: ()=>{},
    trackSkillApplied: ()=>{},
    trackHookExecuted: ()=>{},
    trackSmartModeClassifierCall: ()=>{},
    trackUnauthorizedAccessJudgeVerdict: ()=>{},
    trackPlanModeModelFinished: ()=>{},
    trackMcpToolCall: ()=>{},
    trackMcpToolCallResult: ()=>{},
    trackContextInjectionLifecycle: ()=>{}
});
getAgentEventTracker = (ctx)=>{
    return ctx.get(agentEventTrackerKey);
};

}
