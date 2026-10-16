import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var WUt, W6e, iBs, bmu, rBs, ymu, m3i, sBs, oBs;
export { W6e, WUt, bmu, iBs, m3i, oBs, rBs, sBs, ymu };
var __wakaru_jZe_initialized = false;
export function jZe() {
if (__wakaru_jZe_initialized) return;
__wakaru_jZe_initialized = true;
"use strict";
x(), bi(), WUt = k.makeMessageType("agent.v1.GenerateImageArgs", ()=>[
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
    ]), W6e = k.makeMessageType("agent.v1.GenerateImageResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: iBs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: bmu,
            oneof: "result"
        }
    ]), iBs = k.makeMessageType("agent.v1.GenerateImageSuccess", ()=>[
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
    ]), bmu = k.makeMessageType("agent.v1.GenerateImageError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), rBs = k.makeMessageType("agent.v1.GenerateImageToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WUt
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: W6e
        }
    ]), ymu = k.makeMessageType("agent.v1.GenerateImageRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WUt
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), m3i = k.makeMessageType("agent.v1.GenerateImageRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: sBs,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: oBs,
            oneof: "result"
        }
    ]), sBs = k.makeMessageType("agent.v1.GenerateImageRequestResponse.Approved", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GenerateImageRequestResponse_Approved"
}), oBs = k.makeMessageType("agent.v1.GenerateImageRequestResponse.Rejected", ()=>[
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
