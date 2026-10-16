import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var _ae, vae, Tae, kae, Sae;
export { Sae, Tae, _ae, kae, vae };
var __wakaru_vKe_initialized = false;
export function vKe() {
if (__wakaru_vKe_initialized) return;
__wakaru_vKe_initialized = true;
"use strict";
h(), F(), _ae = c.makeMessageType("agent.v1.GenerateVideoArgs", ()=>[
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
    ]), vae = c.makeMessageType("agent.v1.GenerateVideoResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Tae,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: kae,
            oneof: "result"
        }
    ]), Tae = c.makeMessageType("agent.v1.GenerateVideoSuccess", ()=>[
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
    ]), kae = c.makeMessageType("agent.v1.GenerateVideoError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Sae = c.makeMessageType("agent.v1.GenerateVideoToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: _ae
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: vae
        }
    ]);

}
