import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { JF, SQ, ott, rtt, stt } from "./requested_model_pb.js";
import { Rj, gY } from "./selected_context_pb.js";
import { Kei, TAe, bQ, zse } from "./subagents_pb.js";
import { E } from "./tslib.es6.js";
var a9t, hbt, Fkd, pbt, t9o, mbt, n9o, i9o, r9o, Vni, b1r, Wmn, y1r, S1r;
export { Fkd, S1r, Vni, Wmn, a9t, b1r, hbt, i9o, mbt, n9o, pbt, r9o, t9o, y1r };
var __wakaru_q$e_initialized = false;
export function q$e() {
if (__wakaru_q$e_initialized) return;
__wakaru_q$e_initialized = true;
"use strict";
E(), hr(), SQ(), bQ(), Rj(), a9t = x.makeEnum("agent.v1.ForceBackgroundSubagentStatus", [
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
]), hbt = x.makeMessageType("agent.v1.SubagentArgs", ()=>[
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
            T: Fkd
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
            T: rtt,
            oneof: "credentials"
        },
        {
            no: 11,
            name: "azure_credentials",
            kind: "message",
            T: stt,
            oneof: "credentials"
        },
        {
            no: 12,
            name: "bedrock_credentials",
            kind: "message",
            T: ott,
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
            T: x.getEnumType(Kei)
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
            T: gY,
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
            T: x.getEnumType(zse)
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
            T: JF,
            repeated: !0
        }
    ]), Fkd = x.makeMessageType("agent.v1.ClientContinuationConfig", ()=>[
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
    ]), pbt = x.makeMessageType("agent.v1.SubagentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: b1r,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Wmn,
            oneof: "result"
        }
    ]), t9o = x.makeMessageType("agent.v1.SubagentAwaitArgs", ()=>[
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
    ]), mbt = x.makeMessageType("agent.v1.SubagentAwaitResult", ()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: n9o,
            oneof: "result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: i9o,
            oneof: "result"
        },
        {
            no: 3,
            name: "not_found",
            kind: "message",
            T: r9o,
            oneof: "result"
        },
        {
            no: 4,
            name: "error",
            kind: "message",
            T: Vni,
            oneof: "result"
        }
    ]), n9o = x.makeMessageType("agent.v1.SubagentAwaitComplete", ()=>[
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
    ]), i9o = x.makeMessageType("agent.v1.SubagentAwaitStillRunning", ()=>[
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
    ]), r9o = x.makeMessageType("agent.v1.SubagentAwaitNotFound", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]), Vni = x.makeMessageType("agent.v1.SubagentAwaitError", ()=>[
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
    ]), b1r = x.makeMessageType("agent.v1.SubagentSuccess", ()=>[
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
            T: x.getEnumType(TAe)
        },
        {
            no: 5,
            name: "transcript_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Wmn = x.makeMessageType("agent.v1.SubagentError", ()=>[
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
    ]), y1r = x.makeMessageType("agent.v1.ForceBackgroundSubagentArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), S1r = x.makeMessageType("agent.v1.ForceBackgroundSubagentResult", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(a9t)
        }
    ]);

}
