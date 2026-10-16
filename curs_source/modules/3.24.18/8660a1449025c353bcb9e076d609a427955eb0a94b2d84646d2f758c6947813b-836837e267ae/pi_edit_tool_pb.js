import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var N5o, jbd, $bd, Hbd, Wbd, Gbd, qbd;
export { $bd, Gbd, Hbd, N5o, Wbd, jbd, qbd };
var __wakaru_zbd_initialized = false;
export function zbd() {
if (__wakaru_zbd_initialized) return;
__wakaru_zbd_initialized = true;
"use strict";
E(), hr(), N5o = x.makeMessageType("agent.v1.PiEditReplacement", ()=>[
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
    ]), jbd = x.makeMessageType("agent.v1.PiEditToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: $bd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Hbd
        }
    ]), $bd = x.makeMessageType("agent.v1.PiEditToolArgs", ()=>[
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
            T: N5o,
            repeated: !0
        }
    ]), Hbd = x.makeMessageType("agent.v1.PiEditToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Wbd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Gbd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: qbd,
            oneof: "result"
        }
    ]), Wbd = x.makeMessageType("agent.v1.PiEditToolSuccess", ()=>[
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
    ]), Gbd = x.makeMessageType("agent.v1.PiEditToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), qbd = x.makeMessageType("agent.v1.PiEditToolRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
