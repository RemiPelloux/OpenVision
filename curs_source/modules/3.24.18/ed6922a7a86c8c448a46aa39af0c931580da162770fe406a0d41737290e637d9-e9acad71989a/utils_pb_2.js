import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var k0e, S$, WZe, $Ut;
export { $Ut, S$, WZe, k0e };
var __wakaru_w0e_initialized = false;
export function w0e() {
if (__wakaru_w0e_initialized) return;
__wakaru_w0e_initialized = true;
"use strict";
x(), bi(), k0e = k.makeMessageType("agent.v1.Range", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: S$
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: S$
        }
    ]), S$ = k.makeMessageType("agent.v1.Position", ()=>[
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
    ]), WZe = k.makeMessageType("agent.v1.OutputLocation", ()=>[
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
    ]), $Ut = k.makeMessageType("agent.v1.SmartModeApproval", ()=>[
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
