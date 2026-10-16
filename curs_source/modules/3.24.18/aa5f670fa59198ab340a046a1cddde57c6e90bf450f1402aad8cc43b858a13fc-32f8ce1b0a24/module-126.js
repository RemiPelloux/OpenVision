require.r(exports);
require.d(exports, {
    FetchCloudAgentDataArgs: ()=>FetchCloudAgentDataArgs,
    FetchCloudAgentDataError: ()=>FetchCloudAgentDataError,
    FetchCloudAgentDataResult: ()=>FetchCloudAgentDataResult,
    FetchCloudAgentDataSuccess: ()=>FetchCloudAgentDataSuccess,
    FetchCloudAgentDataToolCall: ()=>FetchCloudAgentDataToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const FetchCloudAgentDataArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FetchCloudAgentDataArgs", ()=>[
        {
            no: 4,
            name: "bc_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "sources",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "statuses",
            kind: "scalar",
            T: 9,
            repeated: true
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
            opt: true
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
    ]);
const FetchCloudAgentDataResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FetchCloudAgentDataResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: FetchCloudAgentDataSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: FetchCloudAgentDataError,
            oneof: "result"
        }
    ]);
const FetchCloudAgentDataSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FetchCloudAgentDataSuccess", ()=>[
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
            repeated: true
        },
        {
            no: 4,
            name: "unavailable_bc_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const FetchCloudAgentDataError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FetchCloudAgentDataError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const FetchCloudAgentDataToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.FetchCloudAgentDataToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: FetchCloudAgentDataArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: FetchCloudAgentDataResult
        }
    ]);
