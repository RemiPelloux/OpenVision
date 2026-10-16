import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var CSr, Tyd, Eyd, Iyd, xyd, Ayd, Ryd, Pyd, Myd, Dyd, Nyd, Lyd, Oyd, Fyd, Byd, Uyd, jyd, $yd, Hyd, Wyd, Gyd, qyd, zyd, Vyd, Kyd, Yyd, Xyd;
export { $yd, Ayd, Byd, CSr, Dyd, Eyd, Fyd, Gyd, Hyd, Iyd, Kyd, Lyd, Myd, Nyd, Oyd, Pyd, Ryd, Tyd, Uyd, Vyd, Wyd, Xyd, Yyd, jyd, qyd, xyd, zyd };
var __wakaru_Zyd_initialized = false;
export function Zyd() {
if (__wakaru_Zyd_initialized) return;
__wakaru_Zyd_initialized = true;
"use strict";
E(), hr(), CSr = x.makeEnum("agent.v1.CreateAgentPlacementApprovalState", [
    {
        no: 0,
        name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_REQUIRED",
        localName: "REQUIRED"
    },
    {
        no: 2,
        name: "CREATE_AGENT_PLACEMENT_APPROVAL_STATE_DENIED",
        localName: "DENIED"
    }
]), Tyd = x.makeMessageType("agent.v1.GetAgentStatusArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Eyd = x.makeMessageType("agent.v1.GetAgentStatusWorker", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "lifecycle",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "turn_in_flight",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "last_terminal_turn_status",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "last_activity_at_ms",
            kind: "scalar",
            T: 4
        }
    ]), Iyd = x.makeMessageType("agent.v1.GetAgentStatusSuccess", ()=>[
        {
            no: 1,
            name: "workers",
            kind: "message",
            T: Eyd,
            repeated: !0
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), xyd = x.makeMessageType("agent.v1.GetAgentStatusError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Ayd = x.makeMessageType("agent.v1.GetAgentStatusResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Iyd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: xyd,
            oneof: "result"
        }
    ]), Ryd = x.makeMessageType("agent.v1.GetAgentStatusToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Tyd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Ayd
        }
    ]), Pyd = x.makeMessageType("agent.v1.SendToAgentArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "delivery",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Myd = x.makeMessageType("agent.v1.SendToAgentSuccess", ()=>[
        {
            no: 1,
            name: "worker_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "delivered_as",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), Dyd = x.makeMessageType("agent.v1.SendToAgentError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Nyd = x.makeMessageType("agent.v1.SendToAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Myd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Dyd,
            oneof: "result"
        }
    ]), Lyd = x.makeMessageType("agent.v1.SendToAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Pyd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Nyd
        }
    ]), Oyd = x.makeMessageType("agent.v1.ReadAgentTranscriptArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "mode",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "max_turns",
            kind: "scalar",
            T: 13
        }
    ]), Fyd = x.makeMessageType("agent.v1.ReadAgentTranscriptSuccess", ()=>[
        {
            no: 1,
            name: "transcript",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncated",
            kind: "scalar",
            T: 8
        }
    ]), Byd = x.makeMessageType("agent.v1.ReadAgentTranscriptError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Uyd = x.makeMessageType("agent.v1.ReadAgentTranscriptResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Fyd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Byd,
            oneof: "result"
        }
    ]), jyd = x.makeMessageType("agent.v1.ReadAgentTranscriptToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Oyd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Uyd
        }
    ]), $yd = x.makeMessageType("agent.v1.CreateAgentArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "name",
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
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "machine_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "worker_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "pool",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "labels",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 10,
            name: "environment_build_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "environment_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Hyd = x.makeMessageType("agent.v1.CreateAgentSuccess", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), Wyd = x.makeMessageType("agent.v1.CreateAgentError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "placement_approval_state",
            kind: "enum",
            T: x.getEnumType(CSr),
            opt: !0
        }
    ]), Gyd = x.makeMessageType("agent.v1.CreateAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Hyd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Wyd,
            oneof: "result"
        }
    ]), qyd = x.makeMessageType("agent.v1.CreateAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: $yd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Gyd
        }
    ]), zyd = x.makeMessageType("agent.v1.StopAgentArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]), Vyd = x.makeMessageType("agent.v1.StopAgentSuccess", ()=>[
        {
            no: 1,
            name: "worker_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), Kyd = x.makeMessageType("agent.v1.StopAgentError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Yyd = x.makeMessageType("agent.v1.StopAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Vyd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Kyd,
            oneof: "result"
        }
    ]), Xyd = x.makeMessageType("agent.v1.StopAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: zyd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Yyd
        }
    ]);

}
