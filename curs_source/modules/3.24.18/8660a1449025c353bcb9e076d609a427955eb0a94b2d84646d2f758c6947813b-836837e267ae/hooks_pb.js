import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { JF, SQ } from "./requested_model_pb.js";
import { qd } from "./struct_pb.js";
import { E } from "./tslib.es6.js";
var Owd, Fwd, Bwd, Uwd, jwd, $wd, Hwd, Wwd, Gwd, qwd, zwd, Vwd, Kwd, Ywd, Xwd, Zwd, Qwd, Jwd, e0d, t0d, n0d;
export { $wd, Bwd, Fwd, Gwd, Hwd, Jwd, Kwd, Owd, Qwd, Uwd, Vwd, Wwd, Xwd, Ywd, Zwd, e0d, jwd, n0d, qwd, t0d, zwd };
var __wakaru_i0d_initialized = false;
export function i0d() {
if (__wakaru_i0d_initialized) return;
__wakaru_i0d_initialized = true;
"use strict";
E(), hr(), SQ(), Owd = x.makeMessageType("agent.v1.PreCompactRequestQuery", ()=>[
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
            T: JF,
            repeated: !0
        }
    ]), Fwd = x.makeMessageType("agent.v1.PreCompactRequestResponse", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Bwd = x.makeMessageType("agent.v1.SubagentStartRequestQuery", ()=>[
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
            T: JF,
            repeated: !0
        }
    ]), Uwd = x.makeMessageType("agent.v1.SubagentStartRequestResponse", ()=>[
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
    ]), jwd = x.makeMessageType("agent.v1.SubagentStopRequestQuery", ()=>[
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
            T: JF,
            repeated: !0
        },
        {
            no: 20,
            name: "child_conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), $wd = x.makeMessageType("agent.v1.SubagentStopRequestResponse", ()=>[
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
    ]), Hwd = x.makeMessageType("agent.v1.BeforeSubmitPromptAttachment", ()=>[
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
    ]), Wwd = x.makeMessageType("agent.v1.BeforeSubmitPromptRequestQuery", ()=>[
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
            T: Hwd,
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
            T: JF,
            repeated: !0
        }
    ]), Gwd = x.makeMessageType("agent.v1.BeforeSubmitPromptRequestResponse", ()=>[
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
    ]), qwd = x.makeMessageType("agent.v1.AfterAgentResponseRequestQuery", ()=>[
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
            T: JF,
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
    ]), zwd = x.makeMessageType("agent.v1.AfterAgentResponseRequestResponse", []), Vwd = x.makeMessageType("agent.v1.AfterAgentThoughtRequestQuery", ()=>[
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
            T: JF,
            repeated: !0
        }
    ]), Kwd = x.makeMessageType("agent.v1.AfterAgentThoughtRequestResponse", []), Ywd = x.makeMessageType("agent.v1.StopRequestQuery", ()=>[
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
            T: JF,
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
    ]), Xwd = x.makeMessageType("agent.v1.StopRequestResponse", ()=>[
        {
            no: 1,
            name: "followup_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Zwd = x.makeMessageType("agent.v1.PreToolUseRequestQuery", ()=>[
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
            T: qd
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
            T: JF,
            repeated: !0
        },
        {
            no: 10,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Qwd = x.makeMessageType("agent.v1.PreToolUseRequestResponse", ()=>[
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
    ]), Jwd = x.makeMessageType("agent.v1.PostToolUseRequestQuery", ()=>[
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
            T: qd
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
            T: JF,
            repeated: !0
        },
        {
            no: 12,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), e0d = x.makeMessageType("agent.v1.PostToolUseRequestResponse", ()=>[
        {
            no: 1,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), t0d = x.makeMessageType("agent.v1.PostToolUseFailureRequestQuery", ()=>[
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
            T: qd
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
            T: JF,
            repeated: !0
        },
        {
            no: 13,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), n0d = x.makeMessageType("agent.v1.PostToolUseFailureRequestResponse", ()=>[
        {
            no: 1,
            name: "additional_context",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
