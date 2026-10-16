import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var XGs, sIu, oIu, aIu, cIu, lIu, uIu;
export { XGs, aIu, cIu, lIu, oIu, sIu, uIu };
var __wakaru_dIu_initialized = false;
export function dIu() {
if (__wakaru_dIu_initialized) return;
__wakaru_dIu_initialized = true;
"use strict";
x(), bi(), XGs = k.makeMessageType("agent.v1.PiEditReplacement", ()=>[
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
    ]), sIu = k.makeMessageType("agent.v1.PiEditToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: oIu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: aIu
        }
    ]), oIu = k.makeMessageType("agent.v1.PiEditToolArgs", ()=>[
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
            T: XGs,
            repeated: !0
        }
    ]), aIu = k.makeMessageType("agent.v1.PiEditToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: cIu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: lIu,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: uIu,
            oneof: "result"
        }
    ]), cIu = k.makeMessageType("agent.v1.PiEditToolSuccess", ()=>[
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
    ]), lIu = k.makeMessageType("agent.v1.PiEditToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), uIu = k.makeMessageType("agent.v1.PiEditToolRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
