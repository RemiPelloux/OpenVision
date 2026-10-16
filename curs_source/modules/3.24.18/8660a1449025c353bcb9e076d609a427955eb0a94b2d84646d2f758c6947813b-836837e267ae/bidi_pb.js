import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var CPe, $Bm, HBm, Qqe, Jqe;
export { $Bm, CPe, HBm, Jqe, Qqe };
var __wakaru_JEn_initialized = false;
export function JEn() {
if (__wakaru_JEn_initialized) return;
__wakaru_JEn_initialized = true;
"use strict";
E(), hr(), CPe = x.makeMessageType("aiserver.v1.BidiRequestId", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        }
    ]), $Bm = x.makeMessageType("aiserver.v1.BidiAppendRequest", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "request_id",
            kind: "message",
            T: CPe
        },
        {
            no: 3,
            name: "append_seqno",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "data_binary",
            kind: "scalar",
            T: 12
        }
    ]), HBm = x.makeMessageType("aiserver.v1.BidiAppendResponse", []), Qqe = x.makeMessageType("aiserver.v1.BidiPollRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "message",
            T: CPe
        },
        {
            no: 2,
            name: "start_request",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Jqe = x.makeMessageType("aiserver.v1.BidiPollResponse", ()=>[
        {
            no: 1,
            name: "seqno",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "eof",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]);

}
