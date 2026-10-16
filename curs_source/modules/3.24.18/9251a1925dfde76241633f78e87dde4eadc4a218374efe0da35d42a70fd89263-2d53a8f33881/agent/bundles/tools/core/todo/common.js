import { init_lenient_enum } from "../../lenient-enum.js";
import { external_exports } from "../../../../../external_exports.js";
import { lenientEnum } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_jsonparser } from "../../../../../node_modules/.pnpm/@streamparser+json@0.0.21/node_modules/@streamparser/json/dist/mjs/jsonparser.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_todo_tool_pb } from "../../../../../proto/dist/generated/agent/v1/todo_tool_pb.js";
import { init_agent_v1 } from "../../../../../redacted-protos/dist/agent-v1.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var todoStatusSchema, todoItemSchema, MAX_FINISHED_TODOS;
export { MAX_FINISHED_TODOS, todoItemSchema, todoStatusSchema };
var __wakaru_init_common13_initialized = false;
export function init_common13() {
if (__wakaru_init_common13_initialized) return;
__wakaru_init_common13_initialized = true;
"use strict";
init_agent_pb();
init_todo_tool_pb();
init_agent_v1();
init_dist27();
init_jsonparser();
init_zod();
init_lenient_enum();
todoStatusSchema = lenientEnum(external_exports.enum([
    "pending",
    "in_progress",
    "completed",
    "cancelled"
]));
todoItemSchema = external_exports.object({
    id: external_exports.string(),
    content: external_exports.string().optional(),
    status: todoStatusSchema
});
MAX_FINISHED_TODOS = 50;

}
