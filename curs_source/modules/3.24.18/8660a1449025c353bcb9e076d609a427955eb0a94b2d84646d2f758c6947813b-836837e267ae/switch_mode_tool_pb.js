import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var lni, p5o, Lvd, Ovd, Fvd, m5o, g5o, a5e, cni, tbt;
export { Fvd, Lvd, Ovd, a5e, cni, g5o, lni, m5o, p5o, tbt };
var __wakaru_uni_initialized = false;
export function uni() {
if (__wakaru_uni_initialized) return;
__wakaru_uni_initialized = true;
"use strict";
E(), hr(), lni = x.makeMessageType("agent.v1.SwitchModeArgs", ()=>[
        {
            no: 1,
            name: "target_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), p5o = x.makeMessageType("agent.v1.SwitchModeResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Lvd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Ovd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Fvd,
            oneof: "result"
        }
    ]), Lvd = x.makeMessageType("agent.v1.SwitchModeSuccess", ()=>[
        {
            no: 1,
            name: "from_mode_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "to_mode_id",
            kind: "scalar",
            T: 9
        }
    ]), Ovd = x.makeMessageType("agent.v1.SwitchModeError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Fvd = x.makeMessageType("agent.v1.SwitchModeRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), m5o = x.makeMessageType("agent.v1.SwitchModeToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: lni
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: p5o
        }
    ]), g5o = x.makeMessageType("agent.v1.SwitchModeRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: lni
        }
    ]), a5e = x.makeMessageType("agent.v1.SwitchModeRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: cni,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: tbt,
            oneof: "result"
        }
    ]), cni = x.makeMessageType("agent.v1.SwitchModeRequestResponse.Approved", [], {
    localName: "SwitchModeRequestResponse_Approved"
}), tbt = x.makeMessageType("agent.v1.SwitchModeRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SwitchModeRequestResponse_Rejected"
});

}
