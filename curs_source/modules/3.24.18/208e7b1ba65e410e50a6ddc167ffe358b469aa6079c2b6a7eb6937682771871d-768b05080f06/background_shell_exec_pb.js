import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { Ng } from "./sandbox_pb.js";
import { du } from "./shell_exec_pb.js";
import { h } from "./tslib.es6.js";
import { So } from "./utils_pb.js";
var zy, NP, tz, nz;
export { NP, nz, tz, zy };
var __wakaru_DP_initialized = false;
export function DP() {
if (__wakaru_DP_initialized) return;
__wakaru_DP_initialized = true;
"use strict";
h(), F(), du(), Ng(), So(), zy = c.makeMessageType("agent.v1.WriteShellStdinArgs", ()=>[
        {
            no: 1,
            name: "shell_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "chars",
            kind: "scalar",
            T: 9
        }
    ]), NP = c.makeMessageType("agent.v1.WriteShellStdinResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: tz,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: nz,
            oneof: "result"
        }
    ]), tz = c.makeMessageType("agent.v1.WriteShellStdinSuccess", ()=>[
        {
            no: 1,
            name: "shell_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "terminal_file_length_before_input_written",
            kind: "scalar",
            T: 13
        }
    ]), nz = c.makeMessageType("agent.v1.WriteShellStdinError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
