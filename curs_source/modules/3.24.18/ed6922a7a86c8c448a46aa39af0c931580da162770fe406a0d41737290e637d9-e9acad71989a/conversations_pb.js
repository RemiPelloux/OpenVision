import { EA, aWi } from "./aiserver_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { Nr } from "./timestamp_pb.js";
import { x } from "./tslib.es6.js";
var dro, hro, WId, cWi, GId, VId, jId, lWi, pro;
export { GId, VId, WId, cWi, dro, hro, jId, lWi, pro };
var __wakaru_mro_initialized = false;
export function mro() {
if (__wakaru_mro_initialized) return;
__wakaru_mro_initialized = true;
"use strict";
x(), bi(), EA(), dro = k.makeMessageType("aiserver.v1.ConversationSummarizationPromptOptions", ()=>[
        {
            no: 1,
            name: "inline_system_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "summarization_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "prompt_config_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), hro = k.makeMessageType("aiserver.v1.GetCommitMetricsRequest", ()=>[
        {
            no: 1,
            name: "commit_hashes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "on_demand_summaries",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "include_plans",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "include_skills",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "include_mcps",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "summarization_prompt_options",
            kind: "message",
            T: dro,
            opt: !0
        },
        {
            no: 13,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), WId = k.makeMessageType("aiserver.v1.GetCommitMetricsByFilePathRequest", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "commit_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "user_email",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "include_plans",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "include_skills",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 11,
            name: "include_mcps",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "summarization_prompt_options",
            kind: "message",
            T: dro,
            opt: !0
        },
        {
            no: 13,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), cWi = k.makeMessageType("aiserver.v1.CommitMetrics", ()=>[
        {
            no: 1,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "total_lines_added",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_lines_deleted",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "tab_lines_added",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "tab_lines_deleted",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "agent_lines_added",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "agent_lines_deleted",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "non_ai_lines_added",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "non_ai_lines_deleted",
            kind: "scalar",
            T: 5
        },
        {
            no: 10,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "is_primary_branch",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "commit_timestamp",
            kind: "message",
            T: Nr,
            opt: !0
        },
        {
            no: 16,
            name: "user_email",
            kind: "scalar",
            T: 9
        },
        {
            no: 19,
            name: "range_annotations",
            kind: "message",
            T: aWi,
            repeated: !0
        },
        {
            no: 20,
            name: "commit_source",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), GId = k.makeMessageType("aiserver.v1.ConversationPlan", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "todo_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "plan_file_uri",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "updated_at",
            kind: "message",
            T: Nr,
            opt: !0
        },
        {
            no: 5,
            name: "content",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), VId = k.makeMessageType("aiserver.v1.ConversationSkill", ()=>[
        {
            no: 1,
            name: "skill_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "platform",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "skill_source",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "entrypoint",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "usage_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "last_applied_at",
            kind: "message",
            T: Nr,
            opt: !0
        },
        {
            no: 8,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), jId = k.makeMessageType("aiserver.v1.ConversationMcp", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mcp_server_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "call_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "last_called_at",
            kind: "message",
            T: Nr,
            opt: !0
        },
        {
            no: 5,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), lWi = k.makeMessageType("aiserver.v1.ConversationReference", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "tldr",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "overview",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "summary_bullets",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "models",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "plans",
            kind: "message",
            T: GId,
            repeated: !0
        },
        {
            no: 8,
            name: "author_email",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "skills",
            kind: "message",
            T: VId,
            repeated: !0
        },
        {
            no: 10,
            name: "mcps",
            kind: "message",
            T: jId,
            repeated: !0
        },
        {
            no: 11,
            name: "initial_prompt",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), pro = k.makeMessageType("aiserver.v1.GetCommitMetricsResponse", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: cWi,
            repeated: !0
        },
        {
            no: 2,
            name: "conversations",
            kind: "message",
            T: lWi,
            repeated: !0
        }
    ]);

}
