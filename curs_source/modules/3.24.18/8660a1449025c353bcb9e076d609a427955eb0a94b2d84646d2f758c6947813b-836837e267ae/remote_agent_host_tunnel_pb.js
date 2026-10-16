import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Q2n, PMe, Ojg, Fjg;
export { Fjg, Ojg, PMe, Q2n };
var __wakaru_Pps_initialized = false;
export function Pps() {
if (__wakaru_Pps_initialized) return;
__wakaru_Pps_initialized = true;
"use strict";
E(), hr(), Q2n = x.makeMessageType("aiserver.v1.RemoteAgentHostFrame", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "method",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 4,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(PMe)
        },
        {
            no: 5,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), PMe = x.makeEnum("aiserver.v1.RemoteAgentHostFrame.Kind", [
    {
        no: 0,
        name: "KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KIND_REQUEST",
        localName: "REQUEST"
    },
    {
        no: 2,
        name: "KIND_RESPONSE",
        localName: "RESPONSE"
    },
    {
        no: 3,
        name: "KIND_ERROR",
        localName: "ERROR"
    }
]), Ojg = x.makeMessageType("aiserver.v1.RemoteAgentHostTunnelSettings", ()=>[
        {
            no: 1,
            name: "protocol_revision",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "initial_window_bytes",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "initial_window_frames",
            kind: "scalar",
            T: 13
        }
    ]), Fjg = x.makeMessageType("aiserver.v1.RemoteAgentHostWindowUpdate", ()=>[
        {
            no: 1,
            name: "bytes",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "frames",
            kind: "scalar",
            T: 13
        }
    ]);

}
