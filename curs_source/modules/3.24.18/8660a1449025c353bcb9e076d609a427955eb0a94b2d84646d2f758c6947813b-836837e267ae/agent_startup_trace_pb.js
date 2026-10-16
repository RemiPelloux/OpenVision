import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var oxm, axm, lxm, cxm, uxm, dxm;
export { axm, cxm, dxm, lxm, oxm, uxm };
var __wakaru_VU1_initialized = false;
export function VU1() {
if (__wakaru_VU1_initialized) return;
__wakaru_VU1_initialized = true;
"use strict";
E(), hr(), oxm = x.makeMessageType("aiserver.v1.AgentStartupTraceEvent", ()=>[
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
            T: lxm,
            oneof: "payload"
        },
        {
            no: 3,
            name: "span_ended",
            kind: "message",
            T: cxm,
            oneof: "payload"
        },
        {
            no: 4,
            name: "user_action",
            kind: "message",
            T: uxm,
            oneof: "payload"
        },
        {
            no: 5,
            name: "turn_close",
            kind: "message",
            T: dxm,
            oneof: "payload"
        },
        {
            no: 6,
            name: "context_link",
            kind: "message",
            T: axm,
            oneof: "payload"
        }
    ]), axm = x.makeMessageType("aiserver.v1.AgentStartupTraceEvent.ContextLink", ()=>[
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
}), lxm = x.makeMessageType("aiserver.v1.AgentStartupTraceEvent.SpanStarted", ()=>[
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
}), cxm = x.makeMessageType("aiserver.v1.AgentStartupTraceEvent.SpanEnded", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AgentStartupTraceEvent_SpanEnded"
}), uxm = x.makeMessageType("aiserver.v1.AgentStartupTraceEvent.UserAction", ()=>[
        {
            no: 1,
            name: "turn_index",
            kind: "scalar",
            T: 13
        }
    ], {
    localName: "AgentStartupTraceEvent_UserAction"
}), dxm = x.makeMessageType("aiserver.v1.AgentStartupTraceEvent.TurnClose", ()=>[
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
