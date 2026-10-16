import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Q9, qse } from "./repository_pb.js";
import { E } from "./tslib.es6.js";
var QOo, JOo, e5o, wvd, Cvd;
export { Cvd, JOo, QOo, e5o, wvd };
var __wakaru_Tvd_initialized = false;
export function Tvd() {
if (__wakaru_Tvd_initialized) return;
__wakaru_Tvd_initialized = true;
"use strict";
E(), hr(), qse(), QOo = x.makeMessageType("agent.v1.SemSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: JOo
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: e5o
        }
    ]), JOo = x.makeMessageType("agent.v1.SemSearchToolArgs", ()=>[
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
    ]), e5o = x.makeMessageType("agent.v1.SemSearchToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: wvd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Cvd,
            oneof: "result"
        }
    ]), wvd = x.makeMessageType("agent.v1.SemSearchToolSuccess", ()=>[
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
            T: Q9,
            repeated: !0
        }
    ]), Cvd = x.makeMessageType("agent.v1.SemSearchToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);

}
