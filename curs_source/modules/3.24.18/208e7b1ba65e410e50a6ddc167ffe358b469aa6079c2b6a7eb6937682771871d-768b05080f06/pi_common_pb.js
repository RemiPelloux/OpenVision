import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Jc;
export { Jc };
var __wakaru_zi_initialized = false;
export function zi() {
if (__wakaru_zi_initialized) return;
__wakaru_zi_initialized = true;
"use strict";
h(), F(), Jc = c.makeMessageType("agent.v1.PiTruncation", ()=>[
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
