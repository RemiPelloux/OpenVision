import { Kni, Xse } from "./exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var O5a, L4p, O4p, F4p, B4p, U4p, jCn;
export { B4p, F4p, L4p, O4p, O5a, U4p, jCn };
var __wakaru_j4p_initialized = false;
export function j4p() {
if (__wakaru_j4p_initialized) return;
__wakaru_j4p_initialized = true;
"use strict";
E(), hr(), Xse(), O5a = x.makeMessageType("agent.v1.Error", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), L4p = x.makeMessageType("agent.v1.GetBlobArgs", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        }
    ]), O4p = x.makeMessageType("agent.v1.GetBlobResult", ()=>[
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
            T: O5a,
            opt: !0
        }
    ]), F4p = x.makeMessageType("agent.v1.SetBlobArgs", ()=>[
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
    ]), B4p = x.makeMessageType("agent.v1.SetBlobResult", ()=>[
        {
            no: 1,
            name: "error",
            kind: "message",
            T: O5a,
            opt: !0
        }
    ]), U4p = x.makeMessageType("agent.v1.KvServerMessage", ()=>[
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
            T: L4p,
            oneof: "message"
        },
        {
            no: 3,
            name: "set_blob_args",
            kind: "message",
            T: F4p,
            oneof: "message"
        },
        {
            no: 4,
            name: "span_context",
            kind: "message",
            T: Kni,
            opt: !0
        }
    ]), jCn = x.makeMessageType("agent.v1.KvClientMessage", ()=>[
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
            T: O4p,
            oneof: "message"
        },
        {
            no: 3,
            name: "set_blob_result",
            kind: "message",
            T: B4p,
            oneof: "message"
        }
    ]);

}
