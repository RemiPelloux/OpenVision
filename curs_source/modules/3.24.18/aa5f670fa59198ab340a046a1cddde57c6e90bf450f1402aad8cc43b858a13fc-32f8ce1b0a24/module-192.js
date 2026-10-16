require.r(exports);
require.d(exports, {
    AgentStartupTraceEvent: ()=>AgentStartupTraceEvent,
    AgentStartupTraceEvent_ContextLink: ()=>AgentStartupTraceEvent_ContextLink,
    AgentStartupTraceEvent_SpanEnded: ()=>AgentStartupTraceEvent_SpanEnded,
    AgentStartupTraceEvent_SpanStarted: ()=>AgentStartupTraceEvent_SpanStarted,
    AgentStartupTraceEvent_TurnClose: ()=>AgentStartupTraceEvent_TurnClose,
    AgentStartupTraceEvent_UserAction: ()=>AgentStartupTraceEvent_UserAction
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const AgentStartupTraceEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStartupTraceEvent", ()=>[
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
            T: AgentStartupTraceEvent_SpanStarted,
            oneof: "payload"
        },
        {
            no: 3,
            name: "span_ended",
            kind: "message",
            T: AgentStartupTraceEvent_SpanEnded,
            oneof: "payload"
        },
        {
            no: 4,
            name: "user_action",
            kind: "message",
            T: AgentStartupTraceEvent_UserAction,
            oneof: "payload"
        },
        {
            no: 5,
            name: "turn_close",
            kind: "message",
            T: AgentStartupTraceEvent_TurnClose,
            oneof: "payload"
        },
        {
            no: 6,
            name: "context_link",
            kind: "message",
            T: AgentStartupTraceEvent_ContextLink,
            oneof: "payload"
        }
    ]);
const AgentStartupTraceEvent_ContextLink = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStartupTraceEvent.ContextLink", ()=>[
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
});
const AgentStartupTraceEvent_SpanStarted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStartupTraceEvent.SpanStarted", ()=>[
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
            opt: true
        },
        {
            no: 4,
            name: "href",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "temporal_run_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "temporal_activity_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "AgentStartupTraceEvent_SpanStarted"
});
const AgentStartupTraceEvent_SpanEnded = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStartupTraceEvent.SpanEnded", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AgentStartupTraceEvent_SpanEnded"
});
const AgentStartupTraceEvent_UserAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStartupTraceEvent.UserAction", ()=>[
        {
            no: 1,
            name: "turn_index",
            kind: "scalar",
            T: 13
        }
    ], {
    localName: "AgentStartupTraceEvent_UserAction"
});
const AgentStartupTraceEvent_TurnClose = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AgentStartupTraceEvent.TurnClose", ()=>[
        {
            no: 1,
            name: "turn_index",
            kind: "scalar",
            T: 13
        }
    ], {
    localName: "AgentStartupTraceEvent_TurnClose"
});
