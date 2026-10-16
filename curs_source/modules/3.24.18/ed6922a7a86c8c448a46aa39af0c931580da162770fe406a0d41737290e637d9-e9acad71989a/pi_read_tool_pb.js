import { RMe, rde } from "./pi_common_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Yxu, Xxu, Zxu, Qxu, Jxu;
export { Jxu, Qxu, Xxu, Yxu, Zxu };
var __wakaru__dv_initialized = false;
export function _dv() {
if (__wakaru__dv_initialized) return;
__wakaru__dv_initialized = true;
"use strict";
x(), bi(), RMe(), Yxu = k.makeMessageType("agent.v1.PiReadToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Xxu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Zxu
        }
    ]), Xxu = k.makeMessageType("agent.v1.PiReadToolArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), Zxu = k.makeMessageType("agent.v1.PiReadToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Qxu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Jxu,
            oneof: "result"
        }
    ]), Qxu = k.makeMessageType("agent.v1.PiReadToolSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "truncation",
            kind: "message",
            T: rde,
            opt: !0
        }
    ]), Jxu = k.makeMessageType("agent.v1.PiReadToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
