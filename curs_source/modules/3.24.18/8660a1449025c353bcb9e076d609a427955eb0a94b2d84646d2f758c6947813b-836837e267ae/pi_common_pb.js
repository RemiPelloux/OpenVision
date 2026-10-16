import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Vke;
export { Vke };
var __wakaru_j$e_initialized = false;
export function j$e() {
if (__wakaru_j$e_initialized) return;
__wakaru_j$e_initialized = true;
"use strict";
E(), hr(), Vke = x.makeMessageType("agent.v1.PiTruncation", ()=>[
        {
            no: 1,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "truncated_by",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "total_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "output_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "output_bytes",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "max_lines",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 7,
            name: "max_bytes",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 8,
            name: "first_line_exceeds_limit",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "last_line_partial",
            kind: "scalar",
            T: 8
        }
    ]);

}
