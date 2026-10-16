import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var WP, BP, gz, fz, _z, vz, Tz, kz, Sz;
export { BP, Sz, Tz, WP, _z, fz, gz, kz, vz };
var __wakaru_yz_initialized = false;
export function yz() {
if (__wakaru_yz_initialized) return;
__wakaru_yz_initialized = true;
"use strict";
h(), F(), WP = c.makeMessageType("agent.v1.GenerateImageArgs", ()=>[
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
    ]), BP = c.makeMessageType("agent.v1.GenerateImageResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: gz,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: fz,
            oneof: "result"
        }
    ]), gz = c.makeMessageType("agent.v1.GenerateImageSuccess", ()=>[
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
    ]), fz = c.makeMessageType("agent.v1.GenerateImageError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), _z = c.makeMessageType("agent.v1.GenerateImageToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WP
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: BP
        }
    ]), vz = c.makeMessageType("agent.v1.GenerateImageRequestQuery", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: WP
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]), Tz = c.makeMessageType("agent.v1.GenerateImageRequestResponse", ()=>[
        {
            no: 1,
            name: "approved",
            kind: "message",
            T: kz,
            oneof: "result"
        },
        {
            no: 2,
            name: "rejected",
            kind: "message",
            T: Sz,
            oneof: "result"
        }
    ]), kz = c.makeMessageType("agent.v1.GenerateImageRequestResponse.Approved", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GenerateImageRequestResponse_Approved"
}), Sz = c.makeMessageType("agent.v1.GenerateImageRequestResponse.Rejected", ()=>[
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
