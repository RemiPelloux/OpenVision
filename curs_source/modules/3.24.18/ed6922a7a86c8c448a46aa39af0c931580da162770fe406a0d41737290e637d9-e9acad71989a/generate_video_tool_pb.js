import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var DAu, MAu, PAu, LAu, NAu;
export { DAu, LAu, MAu, NAu, PAu };
var __wakaru_Edv_initialized = false;
export function Edv() {
if (__wakaru_Edv_initialized) return;
__wakaru_Edv_initialized = true;
"use strict";
x(), bi(), DAu = k.makeMessageType("agent.v1.GenerateVideoArgs", ()=>[
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
    ]), MAu = k.makeMessageType("agent.v1.GenerateVideoResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PAu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: LAu,
            oneof: "result"
        }
    ]), PAu = k.makeMessageType("agent.v1.GenerateVideoSuccess", ()=>[
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
    ]), LAu = k.makeMessageType("agent.v1.GenerateVideoError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), NAu = k.makeMessageType("agent.v1.GenerateVideoToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: DAu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: MAu
        }
    ]);

}
