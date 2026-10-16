import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var E_e, BQd, UQd, EPe, xPe;
export { BQd, EPe, E_e, UQd, xPe };
var __wakaru_QWt_initialized = false;
export function QWt() {
if (__wakaru_QWt_initialized) return;
__wakaru_QWt_initialized = true;
"use strict";
x(), bi(), E_e = k.makeMessageType("aiserver.v1.BidiRequestId", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        }
    ]), BQd = k.makeMessageType("aiserver.v1.BidiAppendRequest", ()=>[
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
            T: E_e
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
    ]), UQd = k.makeMessageType("aiserver.v1.BidiAppendResponse", []), EPe = k.makeMessageType("aiserver.v1.BidiPollRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "message",
            T: E_e
        },
        {
            no: 2,
            name: "start_request",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), xPe = k.makeMessageType("aiserver.v1.BidiPollResponse", ()=>[
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
