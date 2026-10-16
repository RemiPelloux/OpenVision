import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { O_t, Ppn, i5e } from "./utils_pb_2.js";
var hni, pni, y5o, S5o, n_d, pSr, i_d, nbt, wmn, mni;
export { S5o, hni, i_d, mni, n_d, nbt, pSr, pni, wmn, y5o };
var __wakaru_gni_initialized = false;
export function gni() {
if (__wakaru_gni_initialized) return;
__wakaru_gni_initialized = true;
"use strict";
E(), hr(), i5e(), hni = x.makeMessageType("agent.v1.WebFetchArgs", ()=>[
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
    ]), pni = x.makeMessageType("agent.v1.WebFetchResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: y5o,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: S5o,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: n_d,
            oneof: "result"
        }
    ]), y5o = x.makeMessageType("agent.v1.WebFetchSuccess", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "markdown",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "output_location",
            kind: "message",
            T: O_t,
            opt: !0
        }
    ]), S5o = x.makeMessageType("agent.v1.WebFetchError", ()=>[
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
    ]), n_d = x.makeMessageType("agent.v1.WebFetchRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), pSr = x.makeMessageType("agent.v1.WebFetchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: hni
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: pni
        }
    ]), i_d = x.makeMessageType("agent.v1.WebFetchRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: hni
        },
        {
            no: 2,
            name: "skip_approval",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "smart_mode_approval",
            kind: "message",
            T: Ppn
        }
    ]), nbt = x.makeMessageType("agent.v1.WebFetchRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: wmn,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: mni,
            oneof: "result"
        }
    ]), wmn = x.makeMessageType("agent.v1.WebFetchRequestResponse.Approved", [], {
    localName: "WebFetchRequestResponse_Approved"
}), mni = x.makeMessageType("agent.v1.WebFetchRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "WebFetchRequestResponse_Rejected"
});

}
