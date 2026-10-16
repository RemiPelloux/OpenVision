import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Nwe, Dwe, Owe, Lwe, Uwe, xwe;
export { Dwe, Lwe, Nwe, Owe, Uwe, xwe };
var __wakaru_Bat_initialized = false;
export function Bat() {
if (__wakaru_Bat_initialized) return;
__wakaru_Bat_initialized = true;
"use strict";
h(), F(), Nwe = c.makeMessageType("aiserver.v1.AgentStartupTraceEvent", ()=>[
        {
            no: 1,
            name: "creation_timestamp_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "span_started",
            kind: "message",
            T: Owe,
            oneof: "payload"
        },
        {
            no: 3,
            name: "span_ended",
            kind: "message",
            T: Lwe,
            oneof: "payload"
        },
        {
            no: 4,
            name: "user_action",
            kind: "message",
            T: Uwe,
            oneof: "payload"
        },
        {
            no: 5,
            name: "turn_close",
            kind: "message",
            T: xwe,
            oneof: "payload"
        },
        {
            no: 6,
            name: "context_link",
            kind: "message",
            T: Dwe,
            oneof: "payload"
        }
    ]), Dwe = c.makeMessageType("aiserver.v1.AgentStartupTraceEvent.ContextLink", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "href",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AgentStartupTraceEvent_ContextLink"
}), Owe = c.makeMessageType("aiserver.v1.AgentStartupTraceEvent.SpanStarted", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parent_span_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "href",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "temporal_run_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "temporal_activity_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "AgentStartupTraceEvent_SpanStarted"
}), Lwe = c.makeMessageType("aiserver.v1.AgentStartupTraceEvent.SpanEnded", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AgentStartupTraceEvent_SpanEnded"
}), Uwe = c.makeMessageType("aiserver.v1.AgentStartupTraceEvent.UserAction", ()=>[
        {
            no: 1,
            name: "turn_index",
            kind: "scalar",
            T: 13
        }
    ], {
    localName: "AgentStartupTraceEvent_UserAction"
}), xwe = c.makeMessageType("aiserver.v1.AgentStartupTraceEvent.TurnClose", ()=>[
        {
            no: 1,
            name: "turn_index",
            kind: "scalar",
            T: 13
        }
    ], {
    localName: "AgentStartupTraceEvent_TurnClose"
});

}
