import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Uxu, $xu, Hxu, Wxu, Gxu;
export { $xu, Gxu, Hxu, Uxu, Wxu };
var __wakaru_fdv_initialized = false;
export function fdv() {
if (__wakaru_fdv_initialized) return;
__wakaru_fdv_initialized = true;
"use strict";
x(), bi(), Uxu = k.makeMessageType("agent.v1.FetchCloudAgentDataArgs", ()=>[
        {
            no: 4,
            name: "bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "sources",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "statuses",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "include_team_wide",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "include_archived",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 12,
            name: "include_transcript",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "active_since",
            kind: "scalar",
            T: 9
        }
    ]), $xu = k.makeMessageType("agent.v1.FetchCloudAgentDataResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Hxu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Wxu,
            oneof: "result"
        }
    ]), Hxu = k.makeMessageType("agent.v1.FetchCloudAgentDataSuccess", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agent_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "written_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "unavailable_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Wxu = k.makeMessageType("agent.v1.FetchCloudAgentDataError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Gxu = k.makeMessageType("agent.v1.FetchCloudAgentDataToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Uxu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: $xu
        }
    ]);

}
