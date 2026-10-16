import { Jc, zi } from "./pi_common_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var yse, wse, Ese, bse, Rse;
export { Ese, Rse, bse, wse, yse };
var __wakaru_cKe_initialized = false;
export function cKe() {
if (__wakaru_cKe_initialized) return;
__wakaru_cKe_initialized = true;
"use strict";
h(), F(), zi(), yse = c.makeMessageType("agent.v1.PiBashToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: wse
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Ese
        }
    ]), wse = c.makeMessageType("agent.v1.PiBashToolArgs", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timeout",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), Ese = c.makeMessageType("agent.v1.PiBashToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: bse,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Rse,
            oneof: "result"
        }
    ]), bse = c.makeMessageType("agent.v1.PiBashToolSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: Jc,
            opt: !0
        },
        {
            no: 3,
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Rse = c.makeMessageType("agent.v1.PiBashToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: Jc,
            opt: !0
        },
        {
            no: 3,
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
