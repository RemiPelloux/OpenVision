import { Vke, j$e } from "./pi_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Lbd, Obd, Fbd, Bbd, Ubd;
export { Bbd, Fbd, Lbd, Obd, Ubd };
var __wakaru_kIy_initialized = false;
export function kIy() {
if (__wakaru_kIy_initialized) return;
__wakaru_kIy_initialized = true;
"use strict";
E(), hr(), j$e(), Lbd = x.makeMessageType("agent.v1.PiBashToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Obd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Fbd
        }
    ]), Obd = x.makeMessageType("agent.v1.PiBashToolArgs", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timeout",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), Fbd = x.makeMessageType("agent.v1.PiBashToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Bbd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Ubd,
            oneof: "result"
        }
    ]), Bbd = x.makeMessageType("agent.v1.PiBashToolSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: Vke,
            opt: !0
        },
        {
            no: 3,
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Ubd = x.makeMessageType("agent.v1.PiBashToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: Vke,
            opt: !0
        },
        {
            no: 3,
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
