import { OMn, _X } from "./exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var xYs, jOu, qOu, zOu, KOu, YOu, F$t;
export { F$t, KOu, YOu, jOu, qOu, xYs, zOu };
var __wakaru_XOu_initialized = false;
export function XOu() {
if (__wakaru_XOu_initialized) return;
__wakaru_XOu_initialized = true;
"use strict";
x(), bi(), _X(), xYs = k.makeMessageType("agent.v1.Error", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), jOu = k.makeMessageType("agent.v1.GetBlobArgs", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        }
    ]), qOu = k.makeMessageType("agent.v1.GetBlobResult", ()=>[
        {
            no: 1,
            name: "blob_data",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: xYs,
            opt: !0
        }
    ]), zOu = k.makeMessageType("agent.v1.SetBlobArgs", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "blob_data",
            kind: "scalar",
            T: 12
        }
    ]), KOu = k.makeMessageType("agent.v1.SetBlobResult", ()=>[
        {
            no: 1,
            name: "error",
            kind: "message",
            T: xYs,
            opt: !0
        }
    ]), YOu = k.makeMessageType("agent.v1.KvServerMessage", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "get_blob_args",
            kind: "message",
            T: jOu,
            oneof: "message"
        },
        {
            no: 3,
            name: "set_blob_args",
            kind: "message",
            T: zOu,
            oneof: "message"
        },
        {
            no: 4,
            name: "span_context",
            kind: "message",
            T: OMn,
            opt: !0
        }
    ]), F$t = k.makeMessageType("agent.v1.KvClientMessage", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "get_blob_result",
            kind: "message",
            T: qOu,
            oneof: "message"
        },
        {
            no: 3,
            name: "set_blob_result",
            kind: "message",
            T: KOu,
            oneof: "message"
        }
    ]);

}
