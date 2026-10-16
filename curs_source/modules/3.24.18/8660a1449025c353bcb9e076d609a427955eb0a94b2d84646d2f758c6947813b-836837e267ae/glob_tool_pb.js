import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Hti, cmn, DOo, zyr, z_t;
export { DOo, Hti, cmn, z_t, zyr };
var __wakaru_Wti_initialized = false;
export function Wti() {
if (__wakaru_Wti_initialized) return;
__wakaru_Wti_initialized = true;
"use strict";
E(), hr(), Hti = x.makeMessageType("agent.v1.GlobToolArgs", ()=>[
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
    ]), cmn = x.makeMessageType("agent.v1.GlobToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: zyr,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: DOo,
            oneof: "result"
        }
    ]), DOo = x.makeMessageType("agent.v1.GlobToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), zyr = x.makeMessageType("agent.v1.GlobToolSuccess", ()=>[
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
    ]), z_t = x.makeMessageType("agent.v1.GlobToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Hti
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: cmn
        }
    ]);

}
