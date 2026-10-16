require.r(exports);
require.d(exports, {
    AgentStoreConflictArgs: ()=>AgentStoreConflictArgs,
    AgentStoreConflictCursor: ()=>AgentStoreConflictCursor,
    AgentStoreConflictError: ()=>AgentStoreConflictError,
    AgentStoreConflictEvent: ()=>AgentStoreConflictEvent,
    AgentStoreConflictResult: ()=>AgentStoreConflictResult,
    AgentStoreConflictSuccess: ()=>AgentStoreConflictSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const AgentStoreConflictCursor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AgentStoreConflictCursor", ()=>[
        {
            no: 1,
            name: "journal_epoch",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "seq",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "last_event_id",
            kind: "scalar",
            T: 9
        }
    ]);
const AgentStoreConflictArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AgentStoreConflictArgs", ()=>[
        {
            no: 1,
            name: "cursor",
            kind: "message",
            T: AgentStoreConflictCursor,
            opt: true
        },
        {
            no: 2,
            name: "advance",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "include_quota_notices",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const AgentStoreConflictEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AgentStoreConflictEvent", ()=>[
        {
            no: 1,
            name: "v",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "journal_epoch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "seq",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "ts_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "store_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "original_rel_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "conflict_rel_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "original_abs_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "conflict_abs_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "preserved_bytes",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 13,
            name: "scope_kind",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "limit_bytes",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 15,
            name: "usage_bytes",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
const AgentStoreConflictResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AgentStoreConflictResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: AgentStoreConflictSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: AgentStoreConflictError,
            oneof: "result"
        }
    ]);
const AgentStoreConflictSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AgentStoreConflictSuccess", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: AgentStoreConflictEvent,
            repeated: true
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "message",
            T: AgentStoreConflictCursor
        },
        {
            no: 3,
            name: "gap",
            kind: "scalar",
            T: 8
        }
    ]);
const AgentStoreConflictError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AgentStoreConflictError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
