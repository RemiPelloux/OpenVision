import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var n5e, dY, O_t, Ppn;
export { O_t, Ppn, dY, n5e };
var __wakaru_i5e_initialized = false;
export function i5e() {
if (__wakaru_i5e_initialized) return;
__wakaru_i5e_initialized = true;
"use strict";
E(), hr(), n5e = x.makeMessageType("agent.v1.Range", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: dY
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: dY
        }
    ]), dY = x.makeMessageType("agent.v1.Position", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "column",
            kind: "scalar",
            T: 13
        }
    ]), O_t = x.makeMessageType("agent.v1.OutputLocation", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "line_count",
            kind: "scalar",
            T: 3
        }
    ]), Ppn = x.makeMessageType("agent.v1.SmartModeApproval", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
