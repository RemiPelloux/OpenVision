import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Cse, Ise, Ase, Mse, Pse, Nse, Dse;
export { Ase, Cse, Dse, Ise, Mse, Nse, Pse };
var __wakaru_Ose_initialized = false;
export function Ose() {
if (__wakaru_Ose_initialized) return;
__wakaru_Ose_initialized = true;
"use strict";
h(), F(), Cse = c.makeMessageType("agent.v1.PiEditReplacement", ()=>[
        {
            no: 1,
            name: "old_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_text",
            kind: "scalar",
            T: 9
        }
    ]), Ise = c.makeMessageType("agent.v1.PiEditToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Ase
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Mse
        }
    ]), Ase = c.makeMessageType("agent.v1.PiEditToolArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edits",
            kind: "message",
            T: Cse,
            repeated: !0
        }
    ]), Mse = c.makeMessageType("agent.v1.PiEditToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Pse,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Nse,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Dse,
            oneof: "result"
        }
    ]), Pse = c.makeMessageType("agent.v1.PiEditToolSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "patch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "first_changed_line",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), Nse = c.makeMessageType("agent.v1.PiEditToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Dse = c.makeMessageType("agent.v1.PiEditToolRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
