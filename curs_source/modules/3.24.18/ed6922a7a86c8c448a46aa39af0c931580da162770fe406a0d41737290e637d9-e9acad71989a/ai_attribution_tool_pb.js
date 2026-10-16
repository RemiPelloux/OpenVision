import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { WZe, w0e } from "./utils_pb_2.js";
var aBs, g3i, Smu, kmu, wmu;
export { Smu, aBs, g3i, kmu, wmu };
var __wakaru_cBs_initialized = false;
export function cBs() {
if (__wakaru_cBs_initialized) return;
__wakaru_cBs_initialized = true;
"use strict";
x(), bi(), w0e(), aBs = k.makeMessageType("agent.v1.AiAttributionArgs", ()=>[
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
    ]), g3i = k.makeMessageType("agent.v1.AiAttributionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Smu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: kmu,
            oneof: "result"
        }
    ]), Smu = k.makeMessageType("agent.v1.AiAttributionSuccess", ()=>[
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
            T: WZe,
            opt: !0
        }
    ]), kmu = k.makeMessageType("agent.v1.AiAttributionError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), wmu = k.makeMessageType("agent.v1.AiAttributionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: aBs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: g3i
        }
    ]);

}
