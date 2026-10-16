import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { O_t, i5e } from "./utils_pb_2.js";
var $Do, Wbr, Spd, kpd, wpd;
export { $Do, Spd, Wbr, kpd, wpd };
var __wakaru_HDo_initialized = false;
export function HDo() {
if (__wakaru_HDo_initialized) return;
__wakaru_HDo_initialized = true;
"use strict";
E(), hr(), i5e(), $Do = x.makeMessageType("agent.v1.AiAttributionArgs", ()=>[
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
    ]), Wbr = x.makeMessageType("agent.v1.AiAttributionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Spd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: kpd,
            oneof: "result"
        }
    ]), Spd = x.makeMessageType("agent.v1.AiAttributionSuccess", ()=>[
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
            T: O_t,
            opt: !0
        }
    ]), kpd = x.makeMessageType("agent.v1.AiAttributionError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), wpd = x.makeMessageType("agent.v1.AiAttributionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: $Do
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Wbr
        }
    ]);

}
