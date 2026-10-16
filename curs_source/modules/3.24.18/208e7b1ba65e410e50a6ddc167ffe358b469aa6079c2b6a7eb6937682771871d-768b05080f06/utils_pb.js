import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var hP, bg, ko, Rg;
export { Rg, bg, hP, ko };
var __wakaru_So_initialized = false;
export function So() {
if (__wakaru_So_initialized) return;
__wakaru_So_initialized = true;
"use strict";
h(), F(), hP = c.makeMessageType("agent.v1.Range", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: bg
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: bg
        }
    ]), bg = c.makeMessageType("agent.v1.Position", ()=>[
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
    ]), ko = c.makeMessageType("agent.v1.OutputLocation", ()=>[
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
    ]), Rg = c.makeMessageType("agent.v1.SmartModeApproval", ()=>[
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
