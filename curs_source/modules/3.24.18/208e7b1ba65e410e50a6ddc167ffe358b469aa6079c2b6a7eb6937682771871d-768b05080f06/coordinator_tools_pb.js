import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Mie, Pie, Nie, Die, Oie, Lie, Uie, xie, Fie, Wie, Bie, Gie, Vie, $ie, jie, Hie, qie, Kie, zie, Yie, Jie, Xie, Qie, Zie, eae, tae, nae;
export { $ie, Bie, Die, Fie, Gie, Hie, Jie, Kie, Lie, Mie, Nie, Oie, Pie, Qie, Uie, Vie, Wie, Xie, Yie, Zie, eae, jie, nae, qie, tae, xie, zie };
var __wakaru_fKe_initialized = false;
export function fKe() {
if (__wakaru_fKe_initialized) return;
__wakaru_fKe_initialized = true;
"use strict";
h(), F(), Mie = c.makeEnum("agent.v1.CreateAgentPlacementApprovalState", [
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
]), Pie = c.makeMessageType("agent.v1.GetAgentStatusArgs", ()=>[
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
    ]), Nie = c.makeMessageType("agent.v1.GetAgentStatusWorker", ()=>[
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
    ]), Die = c.makeMessageType("agent.v1.GetAgentStatusSuccess", ()=>[
        {
            no: 1,
            name: "workers",
            kind: "message",
            T: Nie,
            repeated: !0
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), Oie = c.makeMessageType("agent.v1.GetAgentStatusError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Lie = c.makeMessageType("agent.v1.GetAgentStatusResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Die,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Oie,
            oneof: "result"
        }
    ]), Uie = c.makeMessageType("agent.v1.GetAgentStatusToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Pie
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Lie
        }
    ]), xie = c.makeMessageType("agent.v1.SendToAgentArgs", ()=>[
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
    ]), Fie = c.makeMessageType("agent.v1.SendToAgentSuccess", ()=>[
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
    ]), Wie = c.makeMessageType("agent.v1.SendToAgentError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Bie = c.makeMessageType("agent.v1.SendToAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Fie,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Wie,
            oneof: "result"
        }
    ]), Gie = c.makeMessageType("agent.v1.SendToAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: xie
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Bie
        }
    ]), Vie = c.makeMessageType("agent.v1.ReadAgentTranscriptArgs", ()=>[
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
    ]), $ie = c.makeMessageType("agent.v1.ReadAgentTranscriptSuccess", ()=>[
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
    ]), jie = c.makeMessageType("agent.v1.ReadAgentTranscriptError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Hie = c.makeMessageType("agent.v1.ReadAgentTranscriptResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: $ie,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: jie,
            oneof: "result"
        }
    ]), qie = c.makeMessageType("agent.v1.ReadAgentTranscriptToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Vie
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Hie
        }
    ]), Kie = c.makeMessageType("agent.v1.CreateAgentArgs", ()=>[
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
    ]), zie = c.makeMessageType("agent.v1.CreateAgentSuccess", ()=>[
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
    ]), Yie = c.makeMessageType("agent.v1.CreateAgentError", ()=>[
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
            T: c.getEnumType(Mie),
            opt: !0
        }
    ]), Jie = c.makeMessageType("agent.v1.CreateAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: zie,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Yie,
            oneof: "result"
        }
    ]), Xie = c.makeMessageType("agent.v1.CreateAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Kie
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Jie
        }
    ]), Qie = c.makeMessageType("agent.v1.StopAgentArgs", ()=>[
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
    ]), Zie = c.makeMessageType("agent.v1.StopAgentSuccess", ()=>[
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
    ]), eae = c.makeMessageType("agent.v1.StopAgentError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), tae = c.makeMessageType("agent.v1.StopAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Zie,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: eae,
            oneof: "result"
        }
    ]), nae = c.makeMessageType("agent.v1.StopAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Qie
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: tae
        }
    ]);

}
