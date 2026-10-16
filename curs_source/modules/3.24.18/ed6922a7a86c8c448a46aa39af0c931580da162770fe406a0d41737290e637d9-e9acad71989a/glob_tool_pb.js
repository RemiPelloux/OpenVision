import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var l4i, u4i, J1u, WWs, XRn;
export { J1u, WWs, XRn, l4i, u4i };
var __wakaru_GWs_initialized = false;
export function GWs() {
if (__wakaru_GWs_initialized) return;
__wakaru_GWs_initialized = true;
"use strict";
x(), bi(), l4i = k.makeMessageType("agent.v1.GlobToolArgs", ()=>[
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
    ]), u4i = k.makeMessageType("agent.v1.GlobToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: WWs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: J1u,
            oneof: "result"
        }
    ]), J1u = k.makeMessageType("agent.v1.GlobToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), WWs = k.makeMessageType("agent.v1.GlobToolSuccess", ()=>[
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
    ]), XRn = k.makeMessageType("agent.v1.GlobToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: l4i
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: u4i
        }
    ]);

}
