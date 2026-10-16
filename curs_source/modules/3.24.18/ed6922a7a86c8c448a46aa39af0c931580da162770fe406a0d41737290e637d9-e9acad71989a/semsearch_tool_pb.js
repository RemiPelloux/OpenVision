import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { YO, nX } from "./repository_pb.js";
import { x } from "./tslib.es6.js";
var mGs, gGs, fGs, UTu, $Tu;
export { $Tu, UTu, fGs, gGs, mGs };
var __wakaru_HTu_initialized = false;
export function HTu() {
if (__wakaru_HTu_initialized) return;
__wakaru_HTu_initialized = true;
"use strict";
x(), bi(), nX(), mGs = k.makeMessageType("agent.v1.SemSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: gGs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: fGs
        }
    ]), gGs = k.makeMessageType("agent.v1.SemSearchToolArgs", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_directories",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "explanation",
            kind: "scalar",
            T: 9
        }
    ]), fGs = k.makeMessageType("agent.v1.SemSearchToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: UTu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: $Tu,
            oneof: "result"
        }
    ]), UTu = k.makeMessageType("agent.v1.SemSearchToolSuccess", ()=>[
        {
            no: 1,
            name: "results",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "code_results",
            kind: "message",
            T: YO,
            repeated: !0
        }
    ]), $Tu = k.makeMessageType("agent.v1.SemSearchToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);

}
