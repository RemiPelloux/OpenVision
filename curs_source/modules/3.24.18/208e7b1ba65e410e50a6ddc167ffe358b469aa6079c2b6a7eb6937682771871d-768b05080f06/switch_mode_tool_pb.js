import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var PN, Jte, Xte, Qte, Zte, ene, tne, nne, rne, sne;
export { Jte, PN, Qte, Xte, Zte, ene, nne, rne, sne, tne };
var __wakaru_Wqe_initialized = false;
export function Wqe() {
if (__wakaru_Wqe_initialized) return;
__wakaru_Wqe_initialized = true;
"use strict";
h(), F(), PN = c.makeMessageType("agent.v1.SwitchModeArgs", ()=>[
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
    ]), Jte = c.makeMessageType("agent.v1.SwitchModeResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Xte,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Qte,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Zte,
            oneof: "result"
        }
    ]), Xte = c.makeMessageType("agent.v1.SwitchModeSuccess", ()=>[
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
    ]), Qte = c.makeMessageType("agent.v1.SwitchModeError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Zte = c.makeMessageType("agent.v1.SwitchModeRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), ene = c.makeMessageType("agent.v1.SwitchModeToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PN
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Jte
        }
    ]), tne = c.makeMessageType("agent.v1.SwitchModeRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PN
        }
    ]), nne = c.makeMessageType("agent.v1.SwitchModeRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: rne,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: sne,
            oneof: "result"
        }
    ]), rne = c.makeMessageType("agent.v1.SwitchModeRequestResponse.Approved", [], {
    localName: "SwitchModeRequestResponse_Approved"
}), sne = c.makeMessageType("agent.v1.SwitchModeRequestResponse.Rejected", ()=>[
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
