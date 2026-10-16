import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { uu, zc } from "./repository_pb.js";
import { h } from "./tslib.es6.js";
var mte, pte, hte, gte, fte;
export { fte, gte, hte, mte, pte };
var __wakaru_Oqe_initialized = false;
export function Oqe() {
if (__wakaru_Oqe_initialized) return;
__wakaru_Oqe_initialized = true;
"use strict";
h(), F(), zc(), mte = c.makeMessageType("agent.v1.SemSearchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: pte
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: hte
        }
    ]), pte = c.makeMessageType("agent.v1.SemSearchToolArgs", ()=>[
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
    ]), hte = c.makeMessageType("agent.v1.SemSearchToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: gte,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: fte,
            oneof: "result"
        }
    ]), gte = c.makeMessageType("agent.v1.SemSearchToolSuccess", ()=>[
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
            T: uu,
            repeated: !0
        }
    ]), fte = c.makeMessageType("agent.v1.SemSearchToolError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);

}
