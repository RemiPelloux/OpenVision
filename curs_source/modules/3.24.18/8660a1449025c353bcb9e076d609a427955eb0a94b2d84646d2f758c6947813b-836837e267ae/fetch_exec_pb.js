import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var d5o, h5o, Pvd, Mvd;
export { Mvd, Pvd, d5o, h5o };
var __wakaru_Dvd_initialized = false;
export function Dvd() {
if (__wakaru_Dvd_initialized) return;
__wakaru_Dvd_initialized = true;
"use strict";
E(), hr(), d5o = x.makeMessageType("agent.v1.FetchArgs", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), h5o = x.makeMessageType("agent.v1.FetchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Pvd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Mvd,
            oneof: "result"
        }
    ]), Pvd = x.makeMessageType("agent.v1.FetchSuccess", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "content_type",
            kind: "scalar",
            T: 9
        }
    ]), Mvd = x.makeMessageType("agent.v1.FetchError", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
