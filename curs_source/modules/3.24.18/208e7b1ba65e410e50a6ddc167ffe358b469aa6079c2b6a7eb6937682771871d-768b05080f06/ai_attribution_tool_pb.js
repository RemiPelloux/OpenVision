import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
import { So, ko } from "./utils_pb.js";
var wz, GP, Ez, bz, Rz;
export { Ez, GP, Rz, bz, wz };
var __wakaru_Cz_initialized = false;
export function Cz() {
if (__wakaru_Cz_initialized) return;
__wakaru_Cz_initialized = true;
"use strict";
h(), F(), So(), wz = c.makeMessageType("agent.v1.AiAttributionArgs", ()=>[
        {
            no: 5,
            name: "file_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "commit_hashes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "output_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "max_commits",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "include_line_ranges",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), GP = c.makeMessageType("agent.v1.AiAttributionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Ez,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: bz,
            oneof: "result"
        }
    ]), Ez = c.makeMessageType("agent.v1.AiAttributionSuccess", ()=>[
        {
            no: 1,
            name: "attribution_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output_location",
            kind: "message",
            T: ko,
            opt: !0
        }
    ]), bz = c.makeMessageType("agent.v1.AiAttributionError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Rz = c.makeMessageType("agent.v1.AiAttributionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: wz
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GP
        }
    ]);

}
