require.r(exports);
require.d(exports, {
    CreateGoalArgs: ()=>CreateGoalArgs,
    CreateGoalResult: ()=>CreateGoalResult,
    CreateGoalSuccess: ()=>CreateGoalSuccess,
    CreateGoalToolCall: ()=>CreateGoalToolCall,
    GoalError: ()=>GoalError,
    GoalStatus: ()=>GoalStatus,
    UpdateGoalArgs: ()=>UpdateGoalArgs,
    UpdateGoalResult: ()=>UpdateGoalResult,
    UpdateGoalSuccess: ()=>UpdateGoalSuccess,
    UpdateGoalToolCall: ()=>UpdateGoalToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const GoalStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.GoalStatus", [
    {
        no: 0,
        name: "GOAL_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GOAL_STATUS_ACTIVE",
        localName: "ACTIVE"
    },
    {
        no: 2,
        name: "GOAL_STATUS_PAUSED",
        localName: "PAUSED"
    },
    {
        no: 3,
        name: "GOAL_STATUS_COMPLETE",
        localName: "COMPLETE"
    },
    {
        no: 4,
        name: "GOAL_STATUS_CLEARED",
        localName: "CLEARED"
    }
]);
const CreateGoalArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreateGoalArgs", ()=>[
        {
            no: 1,
            name: "objective",
            kind: "scalar",
            T: 9
        }
    ]);
const CreateGoalSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreateGoalSuccess", []);
const GoalError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GoalError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const CreateGoalResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreateGoalResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: CreateGoalSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GoalError,
            oneof: "result"
        }
    ]);
const CreateGoalToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CreateGoalToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: CreateGoalArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: CreateGoalResult
        }
    ]);
const UpdateGoalArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UpdateGoalArgs", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(GoalStatus)
        }
    ]);
const UpdateGoalSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UpdateGoalSuccess", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(GoalStatus)
        }
    ]);
const UpdateGoalResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UpdateGoalResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: UpdateGoalSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: GoalError,
            oneof: "result"
        }
    ]);
const UpdateGoalToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UpdateGoalToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: UpdateGoalArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: UpdateGoalResult
        }
    ]);
