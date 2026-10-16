import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var W4i, VIu, jIu, qIu, zIu, KIu, YIu, XIu, ZIu, QIu, JIu, eAu, tAu, nAu, iAu, rAu, sAu, oAu, aAu, cAu, lAu, uAu, dAu, hAu, pAu, mAu, gAu;
export { JIu, KIu, QIu, VIu, W4i, XIu, YIu, ZIu, aAu, cAu, dAu, eAu, gAu, hAu, iAu, jIu, lAu, mAu, nAu, oAu, pAu, qIu, rAu, sAu, tAu, uAu, zIu };
var __wakaru_fAu_initialized = false;
export function fAu() {
if (__wakaru_fAu_initialized) return;
__wakaru_fAu_initialized = true;
"use strict";
x(), bi(), W4i = k.makeEnum("agent.v1.CreateAgentPlacementApprovalState", [
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
]), VIu = k.makeMessageType("agent.v1.GetAgentStatusArgs", ()=>[
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
    ]), jIu = k.makeMessageType("agent.v1.GetAgentStatusWorker", ()=>[
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
    ]), qIu = k.makeMessageType("agent.v1.GetAgentStatusSuccess", ()=>[
        {
            no: 1,
            name: "workers",
            kind: "message",
            T: jIu,
            repeated: !0
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), zIu = k.makeMessageType("agent.v1.GetAgentStatusError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), KIu = k.makeMessageType("agent.v1.GetAgentStatusResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: qIu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: zIu,
            oneof: "result"
        }
    ]), YIu = k.makeMessageType("agent.v1.GetAgentStatusToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: VIu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: KIu
        }
    ]), XIu = k.makeMessageType("agent.v1.SendToAgentArgs", ()=>[
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
    ]), ZIu = k.makeMessageType("agent.v1.SendToAgentSuccess", ()=>[
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
    ]), QIu = k.makeMessageType("agent.v1.SendToAgentError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), JIu = k.makeMessageType("agent.v1.SendToAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ZIu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: QIu,
            oneof: "result"
        }
    ]), eAu = k.makeMessageType("agent.v1.SendToAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: XIu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: JIu
        }
    ]), tAu = k.makeMessageType("agent.v1.ReadAgentTranscriptArgs", ()=>[
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
    ]), nAu = k.makeMessageType("agent.v1.ReadAgentTranscriptSuccess", ()=>[
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
    ]), iAu = k.makeMessageType("agent.v1.ReadAgentTranscriptError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), rAu = k.makeMessageType("agent.v1.ReadAgentTranscriptResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: nAu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: iAu,
            oneof: "result"
        }
    ]), sAu = k.makeMessageType("agent.v1.ReadAgentTranscriptToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: tAu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: rAu
        }
    ]), oAu = k.makeMessageType("agent.v1.CreateAgentArgs", ()=>[
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
    ]), aAu = k.makeMessageType("agent.v1.CreateAgentSuccess", ()=>[
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
    ]), cAu = k.makeMessageType("agent.v1.CreateAgentError", ()=>[
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
            T: k.getEnumType(W4i),
            opt: !0
        }
    ]), lAu = k.makeMessageType("agent.v1.CreateAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: aAu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: cAu,
            oneof: "result"
        }
    ]), uAu = k.makeMessageType("agent.v1.CreateAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: oAu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: lAu
        }
    ]), dAu = k.makeMessageType("agent.v1.StopAgentArgs", ()=>[
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
    ]), hAu = k.makeMessageType("agent.v1.StopAgentSuccess", ()=>[
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
    ]), pAu = k.makeMessageType("agent.v1.StopAgentError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), mAu = k.makeMessageType("agent.v1.StopAgentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: hAu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: pAu,
            oneof: "result"
        }
    ]), gAu = k.makeMessageType("agent.v1.StopAgentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: dAu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: mAu
        }
    ]);

}
