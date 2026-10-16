import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var ybd, Sbd, kbd, wbd, Cbd;
export { Cbd, Sbd, kbd, wbd, ybd };
var __wakaru_bIy_initialized = false;
export function bIy() {
if (__wakaru_bIy_initialized) return;
__wakaru_bIy_initialized = true;
"use strict";
E(), hr(), ybd = x.makeMessageType("agent.v1.FetchCloudAgentDataArgs", ()=>[
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
    ]), Sbd = x.makeMessageType("agent.v1.FetchCloudAgentDataResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: kbd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: wbd,
            oneof: "result"
        }
    ]), kbd = x.makeMessageType("agent.v1.FetchCloudAgentDataSuccess", ()=>[
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
    ]), wbd = x.makeMessageType("agent.v1.FetchCloudAgentDataError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Cbd = x.makeMessageType("agent.v1.FetchCloudAgentDataToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ybd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Sbd
        }
    ]);

}
