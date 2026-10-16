import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var xGs, IGs, KTu, YTu;
export { IGs, KTu, YTu, xGs };
var __wakaru_XTu_initialized = false;
export function XTu() {
if (__wakaru_XTu_initialized) return;
__wakaru_XTu_initialized = true;
"use strict";
x(), bi(), xGs = k.makeMessageType("agent.v1.FetchArgs", ()=>[
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
    ]), IGs = k.makeMessageType("agent.v1.FetchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: KTu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: YTu,
            oneof: "result"
        }
    ]), KTu = k.makeMessageType("agent.v1.FetchSuccess", ()=>[
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
    ]), YTu = k.makeMessageType("agent.v1.FetchError", ()=>[
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
