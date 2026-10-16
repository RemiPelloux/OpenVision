import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var ree, see, iee, aee, oee;
export { aee, iee, oee, ree, see };
var __wakaru_Cqe_initialized = false;
export function Cqe() {
if (__wakaru_Cqe_initialized) return;
__wakaru_Cqe_initialized = true;
"use strict";
h(), F(), ree = c.makeMessageType("agent.v1.GlobToolArgs", ()=>[
        {
            no: 1,
            name: "target_directory",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "glob_pattern",
            kind: "scalar",
            T: 9
        }
    ]), see = c.makeMessageType("agent.v1.GlobToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: aee,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: iee,
            oneof: "result"
        }
    ]), iee = c.makeMessageType("agent.v1.GlobToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), aee = c.makeMessageType("agent.v1.GlobToolSuccess", ()=>[
        {
            no: 1,
            name: "pattern",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "total_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "client_truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "ripgrep_truncated",
            kind: "scalar",
            T: 8
        }
    ]), oee = c.makeMessageType("agent.v1.GlobToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ree
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: see
        }
    ]);

}
