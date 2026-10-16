import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var _Dn, AGs, QTu, JTu, eEu, RGs, DGs, L0e, bDn, $Qe;
export { $Qe, AGs, DGs, JTu, L0e, QTu, RGs, _Dn, bDn, eEu };
var __wakaru_yDn_initialized = false;
export function yDn() {
if (__wakaru_yDn_initialized) return;
__wakaru_yDn_initialized = true;
"use strict";
x(), bi(), _Dn = k.makeMessageType("agent.v1.SwitchModeArgs", ()=>[
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
    ]), AGs = k.makeMessageType("agent.v1.SwitchModeResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: QTu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: JTu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: eEu,
            oneof: "result"
        }
    ]), QTu = k.makeMessageType("agent.v1.SwitchModeSuccess", ()=>[
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
    ]), JTu = k.makeMessageType("agent.v1.SwitchModeError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), eEu = k.makeMessageType("agent.v1.SwitchModeRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), RGs = k.makeMessageType("agent.v1.SwitchModeToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _Dn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: AGs
        }
    ]), DGs = k.makeMessageType("agent.v1.SwitchModeRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _Dn
        }
    ]), L0e = k.makeMessageType("agent.v1.SwitchModeRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: bDn,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: $Qe,
            oneof: "result"
        }
    ]), bDn = k.makeMessageType("agent.v1.SwitchModeRequestResponse.Approved", [], {
    localName: "SwitchModeRequestResponse_Approved"
}), $Qe = k.makeMessageType("agent.v1.SwitchModeRequestResponse.Rejected", ()=>[
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
