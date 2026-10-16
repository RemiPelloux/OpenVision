import { init_dist7 } from "../../../../../agent-core/dist/index.js";
import { init_goal_metrics } from "../../../goal-metrics.js";
import { init_common9 } from "../../common.js";
import { init_request_id } from "../../../utils/request-id.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { GoalStatus, init_goal_tool_pb } from "../../../../../proto/dist/generated/agent/v1/goal_tool_pb.js";
var import_node_crypto39, GOAL_STATUSES, goalStatusByName, goalStatusNameByValue, createGoalSchema, updateGoalSchema;
export { GOAL_STATUSES, createGoalSchema, goalStatusByName, goalStatusNameByValue, import_node_crypto39, updateGoalSchema };
var __wakaru_init_goals_initialized = false;
export function init_goals() {
if (__wakaru_init_goals_initialized) return;
__wakaru_init_goals_initialized = true;
"use strict";
import_node_crypto39 = require("node:crypto");
init_dist7();
init_dist26();
init_agent_pb();
init_goal_tool_pb();
init_zod();
init_goal_metrics();
init_request_id();
init_common9();
GOAL_STATUSES = [
    "active",
    "complete"
];
goalStatusByName = {
    active: GoalStatus.ACTIVE,
    complete: GoalStatus.COMPLETE
};
goalStatusNameByValue = new Map(GOAL_STATUSES.map((status)=>[
        goalStatusByName[status],
        status
    ]));
createGoalSchema = external_exports.object({
    objective: external_exports.string().trim().min(1)
});
updateGoalSchema = external_exports.object({
    status: external_exports.enum(GOAL_STATUSES)
});

}
