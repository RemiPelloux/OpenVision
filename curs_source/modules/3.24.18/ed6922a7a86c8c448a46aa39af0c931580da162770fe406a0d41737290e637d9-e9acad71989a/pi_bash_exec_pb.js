import { RMe, rde } from "./pi_common_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var V2u, j2u, q2u, z2u;
export { V2u, j2u, q2u, z2u };
var __wakaru_zfv_initialized = false;
export function zfv() {
if (__wakaru_zfv_initialized) return;
__wakaru_zfv_initialized = true;
"use strict";
x(), bi(), RMe(), V2u = k.makeMessageType("agent.v1.PiBashExecArgs", ()=>[
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
    ]), j2u = k.makeMessageType("agent.v1.PiBashExecResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: q2u,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: z2u,
            oneof: "result"
        }
    ]), q2u = k.makeMessageType("agent.v1.PiBashExecSuccess", ()=>[
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
            T: rde,
            opt: !0
        },
        {
            no: 3,
            name: "full_output_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), z2u = k.makeMessageType("agent.v1.PiBashExecError", ()=>[
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
            T: rde,
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
