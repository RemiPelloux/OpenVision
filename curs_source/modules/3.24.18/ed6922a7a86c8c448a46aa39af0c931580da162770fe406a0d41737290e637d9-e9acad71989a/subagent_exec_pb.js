import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { C4e, T4e, Uj, w2, w4e } from "./requested_model_pb.js";
import { Tee, jW } from "./selected_context_pb.js";
import { Jxn, Mve, Pj, pse } from "./subagents_pb.js";
import { x } from "./tslib.es6.js";
var sSt, sJe, k2u, oJe, pYs, aJe, mYs, gYs, fYs, NMn, L8i, N$t, N8i, O8i;
export { L8i, N$t, N8i, NMn, O8i, aJe, fYs, gYs, k2u, mYs, oJe, pYs, sJe, sSt };
var __wakaru_$Me_initialized = false;
export function $Me() {
if (__wakaru_$Me_initialized) return;
__wakaru_$Me_initialized = true;
"use strict";
x(), bi(), Uj(), Pj(), jW(), sSt = k.makeEnum("agent.v1.ForceBackgroundSubagentStatus", [
    {
        no: 0,
        name: "FORCE_BACKGROUND_SUBAGENT_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FORCE_BACKGROUND_SUBAGENT_STATUS_ACCEPTED",
        localName: "ACCEPTED"
    },
    {
        no: 2,
        name: "FORCE_BACKGROUND_SUBAGENT_STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    }
]), sJe = k.makeMessageType("agent.v1.SubagentArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
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
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "readonly",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "resume_agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "run_in_background",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "continuation_config",
            kind: "message",
            T: k2u
        },
        {
            no: 9,
            name: "parent_conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "api_key_credentials",
            kind: "message",
            T: w4e,
            oneof: "credentials"
        },
        {
            no: 11,
            name: "azure_credentials",
            kind: "message",
            T: C4e,
            oneof: "credentials"
        },
        {
            no: 12,
            name: "bedrock_credentials",
            kind: "message",
            T: T4e,
            oneof: "credentials"
        },
        {
            no: 13,
            name: "interrupt",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(Jxn)
        },
        {
            no: 15,
            name: "fork_agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "root_parent_conversation_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "selected_context",
            kind: "message",
            T: Tee,
            opt: !0
        },
        {
            no: 18,
            name: "direct_meta_parent_child_subagent",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 19,
            name: "environment",
            kind: "enum",
            T: k.getEnumType(pse)
        },
        {
            no: 20,
            name: "cloud_base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 21,
            name: "model_parameters",
            kind: "message",
            T: w2,
            repeated: !0
        }
    ]), k2u = k.makeMessageType("agent.v1.ClientContinuationConfig", ()=>[
        {
            no: 1,
            name: "idle_threshold",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "max_loops",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "nudge_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "escape_message_template",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "collect_background_children",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "children_completed_message_template",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "continuation_round_delay_ms",
            kind: "scalar",
            T: 5
        }
    ]), oJe = k.makeMessageType("agent.v1.SubagentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: L8i,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: N$t,
            oneof: "result"
        }
    ]), pYs = k.makeMessageType("agent.v1.SubagentAwaitArgs", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timeout_ms",
            kind: "scalar",
            T: 13
        }
    ]), aJe = k.makeMessageType("agent.v1.SubagentAwaitResult", ()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: mYs,
            oneof: "result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: gYs,
            oneof: "result"
        },
        {
            no: 3,
            name: "not_found",
            kind: "message",
            T: fYs,
            oneof: "result"
        },
        {
            no: 4,
            name: "error",
            kind: "message",
            T: NMn,
            oneof: "result"
        }
    ]), mYs = k.makeMessageType("agent.v1.SubagentAwaitComplete", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "tool_call_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "final_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gYs = k.makeMessageType("agent.v1.SubagentAwaitStillRunning", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), fYs = k.makeMessageType("agent.v1.SubagentAwaitNotFound", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]), NMn = k.makeMessageType("agent.v1.SubagentAwaitError", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), L8i = k.makeMessageType("agent.v1.SubagentSuccess", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "final_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "tool_call_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "background_reason",
            kind: "enum",
            T: k.getEnumType(Mve)
        },
        {
            no: 5,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), N$t = k.makeMessageType("agent.v1.SubagentError", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), N8i = k.makeMessageType("agent.v1.ForceBackgroundSubagentArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), O8i = k.makeMessageType("agent.v1.ForceBackgroundSubagentResult", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(sSt)
        }
    ]);

}
