import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { Uj, w2 } from "./requested_model_pb.js";
import { fd } from "./struct_pb.js";
import { x } from "./tslib.es6.js";
var SOu, kOu, wOu, COu, TOu, EOu, xOu, IOu, AOu, ROu, DOu, MOu, POu, LOu, NOu, OOu, FOu, BOu, UOu, $Ou, HOu;
export { $Ou, AOu, BOu, COu, DOu, EOu, FOu, HOu, IOu, LOu, MOu, NOu, OOu, POu, ROu, SOu, TOu, UOu, kOu, wOu, xOu };
var __wakaru_WOu_initialized = false;
export function WOu() {
if (__wakaru_WOu_initialized) return;
__wakaru_WOu_initialized = true;
"use strict";
x(), bi(), Uj(), SOu = k.makeMessageType("agent.v1.PreCompactRequestQuery", ()=>[
        {
            no: 1,
            name: "trigger",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "context_usage_percent",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "context_tokens",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "context_window_size",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "message_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "messages_to_compact",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "is_first_compaction",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "model_params",
            kind: "message",
            T: w2,
            repeated: !0
        }
    ]), kOu = k.makeMessageType("agent.v1.PreCompactRequestResponse", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), wOu = k.makeMessageType("agent.v1.SubagentStartRequestQuery", ()=>[
        {
            no: 1,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "task",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parent_conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "subagent_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "is_parallel_worker",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "git_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "model_params",
            kind: "message",
            T: w2,
            repeated: !0
        }
    ]), COu = k.makeMessageType("agent.v1.SubagentStartRequestResponse", ()=>[
        {
            no: 1,
            name: "permission",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), TOu = k.makeMessageType("agent.v1.SubagentStopRequestQuery", ()=>[
        {
            no: 1,
            name: "subagent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "subagent_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "parent_conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "message_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "tool_call_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "modified_files",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 11,
            name: "git_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "loop_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 16,
            name: "task",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 18,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 19,
            name: "model_params",
            kind: "message",
            T: w2,
            repeated: !0
        },
        {
            no: 20,
            name: "child_conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), EOu = k.makeMessageType("agent.v1.SubagentStopRequestResponse", ()=>[
        {
            no: 1,
            name: "followup_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xOu = k.makeMessageType("agent.v1.BeforeSubmitPromptAttachment", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9
        }
    ]), IOu = k.makeMessageType("agent.v1.BeforeSubmitPromptRequestQuery", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "attachments",
            kind: "message",
            T: xOu,
            repeated: !0
        },
        {
            no: 3,
            name: "composer_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "model_params",
            kind: "message",
            T: w2,
            repeated: !0
        }
    ]), AOu = k.makeMessageType("agent.v1.BeforeSubmitPromptRequestResponse", ()=>[
        {
            no: 1,
            name: "continue",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ROu = k.makeMessageType("agent.v1.AfterAgentResponseRequestQuery", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "model_params",
            kind: "message",
            T: w2,
            repeated: !0
        },
        {
            no: 7,
            name: "input_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 8,
            name: "output_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 9,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 10,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), DOu = k.makeMessageType("agent.v1.AfterAgentResponseRequestResponse", []), MOu = k.makeMessageType("agent.v1.AfterAgentThoughtRequestQuery", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "duration_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "model_params",
            kind: "message",
            T: w2,
            repeated: !0
        }
    ]), POu = k.makeMessageType("agent.v1.AfterAgentThoughtRequestResponse", []), LOu = k.makeMessageType("agent.v1.StopRequestQuery", ()=>[
        {
            no: 1,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "loop_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "model_params",
            kind: "message",
            T: w2,
            repeated: !0
        },
        {
            no: 8,
            name: "input_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 9,
            name: "output_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 10,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 11,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), NOu = k.makeMessageType("agent.v1.StopRequestResponse", ()=>[
        {
            no: 1,
            name: "followup_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), OOu = k.makeMessageType("agent.v1.PreToolUseRequestQuery", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_input",
            kind: "message",
            T: fd
        },
        {
            no: 3,
            name: "tool_use_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "model_params",
            kind: "message",
            T: w2,
            repeated: !0
        },
        {
            no: 10,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), FOu = k.makeMessageType("agent.v1.PreToolUseRequestResponse", ()=>[
        {
            no: 1,
            name: "permission",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "agent_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "updated_input",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), BOu = k.makeMessageType("agent.v1.PostToolUseRequestQuery", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_input",
            kind: "message",
            T: fd
        },
        {
            no: 3,
            name: "tool_output",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "tool_use_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "model_params",
            kind: "message",
            T: w2,
            repeated: !0
        },
        {
            no: 12,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), UOu = k.makeMessageType("agent.v1.PostToolUseRequestResponse", ()=>[
        {
            no: 1,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), $Ou = k.makeMessageType("agent.v1.PostToolUseFailureRequestQuery", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_input",
            kind: "message",
            T: fd
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "failure_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "tool_use_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "is_interrupt",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "generation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "model_params",
            kind: "message",
            T: w2,
            repeated: !0
        },
        {
            no: 13,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), HOu = k.makeMessageType("agent.v1.PostToolUseFailureRequestResponse", ()=>[
        {
            no: 1,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
