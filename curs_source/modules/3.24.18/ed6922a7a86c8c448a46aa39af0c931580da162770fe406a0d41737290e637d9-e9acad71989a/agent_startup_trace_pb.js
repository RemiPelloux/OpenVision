import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var $5d, H5d, W5d, G5d, V5d, j5d;
export { $5d, G5d, H5d, V5d, W5d, j5d };
var __wakaru_ZEv_initialized = false;
export function ZEv() {
if (__wakaru_ZEv_initialized) return;
__wakaru_ZEv_initialized = true;
"use strict";
x(), bi(), $5d = k.makeMessageType("aiserver.v1.AgentStartupTraceEvent", ()=>[
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
            T: W5d,
            oneof: "payload"
        },
        {
            no: 3,
            name: "span_ended",
            kind: "message",
            T: G5d,
            oneof: "payload"
        },
        {
            no: 4,
            name: "user_action",
            kind: "message",
            T: V5d,
            oneof: "payload"
        },
        {
            no: 5,
            name: "turn_close",
            kind: "message",
            T: j5d,
            oneof: "payload"
        },
        {
            no: 6,
            name: "context_link",
            kind: "message",
            T: H5d,
            oneof: "payload"
        }
    ]), H5d = k.makeMessageType("aiserver.v1.AgentStartupTraceEvent.ContextLink", ()=>[
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
}), W5d = k.makeMessageType("aiserver.v1.AgentStartupTraceEvent.SpanStarted", ()=>[
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
}), G5d = k.makeMessageType("aiserver.v1.AgentStartupTraceEvent.SpanEnded", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AgentStartupTraceEvent_SpanEnded"
}), V5d = k.makeMessageType("aiserver.v1.AgentStartupTraceEvent.UserAction", ()=>[
        {
            no: 1,
            name: "turn_index",
            kind: "scalar",
            T: 13
        }
    ], {
    localName: "AgentStartupTraceEvent_UserAction"
}), j5d = k.makeMessageType("aiserver.v1.AgentStartupTraceEvent.TurnClose", ()=>[
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
