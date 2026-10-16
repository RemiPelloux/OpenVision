import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Npn, qet, FDo, bpd, BDo, ypd, Hbr, UDo, jDo;
export { BDo, FDo, Hbr, Npn, UDo, bpd, jDo, qet, ypd };
var __wakaru_U_t_initialized = false;
export function U_t() {
if (__wakaru_U_t_initialized) return;
__wakaru_U_t_initialized = true;
"use strict";
E(), hr(), Npn = x.makeMessageType("agent.v1.GenerateImageArgs", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "reference_image_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "aspect_ratio",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), qet = x.makeMessageType("agent.v1.GenerateImageResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: FDo,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: bpd,
            oneof: "result"
        }
    ]), FDo = x.makeMessageType("agent.v1.GenerateImageSuccess", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "image_data",
            kind: "scalar",
            T: 9
        }
    ]), bpd = x.makeMessageType("agent.v1.GenerateImageError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), BDo = x.makeMessageType("agent.v1.GenerateImageToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Npn
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: qet
        }
    ]), ypd = x.makeMessageType("agent.v1.GenerateImageRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Npn
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), Hbr = x.makeMessageType("agent.v1.GenerateImageRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: UDo,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: jDo,
            oneof: "result"
        }
    ]), UDo = x.makeMessageType("agent.v1.GenerateImageRequestResponse.Approved", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GenerateImageRequestResponse_Approved"
}), jDo = x.makeMessageType("agent.v1.GenerateImageRequestResponse.Rejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GenerateImageRequestResponse_Rejected"
});

}
