import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_report_bugfix_results_tool_pb } from "../../../../../proto/dist/generated/agent/v1/report_bugfix_results_tool_pb.js";
var bugfixVerdictSchema, bugfixSeveritySchema, bugfixResultItemSchema;
export { bugfixResultItemSchema, bugfixSeveritySchema, bugfixVerdictSchema };
var __wakaru_init_common14_initialized = false;
export function init_common14() {
if (__wakaru_init_common14_initialized) return;
__wakaru_init_common14_initialized = true;
"use strict";
init_agent_pb();
init_report_bugfix_results_tool_pb();
init_zod();
bugfixVerdictSchema = external_exports.enum([
    "fixed",
    "false_positive",
    "could_not_fix",
    "resolved_by_other_fix"
]);
bugfixSeveritySchema = external_exports.enum([
    "high",
    "medium",
    "low"
]);
bugfixResultItemSchema = external_exports.object({
    bug_id: external_exports.string(),
    bug_title: external_exports.string(),
    verdict: bugfixVerdictSchema,
    explanation: external_exports.string(),
    severity: bugfixSeveritySchema.optional()
});

}
