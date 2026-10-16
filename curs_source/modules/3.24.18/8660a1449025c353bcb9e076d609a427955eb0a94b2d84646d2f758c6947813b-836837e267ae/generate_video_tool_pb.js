import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var hSd, pSd, mSd, gSd, fSd;
export { fSd, gSd, hSd, mSd, pSd };
var __wakaru_AIy_initialized = false;
export function AIy() {
if (__wakaru_AIy_initialized) return;
__wakaru_AIy_initialized = true;
"use strict";
E(), hr(), hSd = x.makeMessageType("agent.v1.GenerateVideoArgs", ()=>[
        {
            no: 1,
            name: "prompt",
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
            no: 3,
            name: "image_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "reference_image_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "duration_seconds",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 6,
            name: "aspect_ratio",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "resolution",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), pSd = x.makeMessageType("agent.v1.GenerateVideoResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: mSd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: gSd,
            oneof: "result"
        }
    ]), mSd = x.makeMessageType("agent.v1.GenerateVideoSuccess", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "duration_seconds",
            kind: "scalar",
            T: 13
        }
    ]), gSd = x.makeMessageType("agent.v1.GenerateVideoError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), fSd = x.makeMessageType("agent.v1.GenerateVideoToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: hSd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: pSd
        }
    ]);

}
