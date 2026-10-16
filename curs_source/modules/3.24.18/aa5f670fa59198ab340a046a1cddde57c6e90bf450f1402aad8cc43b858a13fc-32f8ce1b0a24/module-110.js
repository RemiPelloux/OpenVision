require.r(exports);
require.d(exports, {
    StartGrindPlanningArgs: ()=>StartGrindPlanningArgs,
    StartGrindPlanningError: ()=>StartGrindPlanningError,
    StartGrindPlanningResult: ()=>StartGrindPlanningResult,
    StartGrindPlanningSuccess: ()=>StartGrindPlanningSuccess,
    StartGrindPlanningToolCall: ()=>StartGrindPlanningToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const StartGrindPlanningArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StartGrindPlanningArgs", ()=>[
        {
            no: 1,
            name: "explanation",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const StartGrindPlanningResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StartGrindPlanningResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: StartGrindPlanningSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: StartGrindPlanningError,
            oneof: "result"
        }
    ]);
const StartGrindPlanningSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StartGrindPlanningSuccess", []);
const StartGrindPlanningError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StartGrindPlanningError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const StartGrindPlanningToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StartGrindPlanningToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: StartGrindPlanningArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: StartGrindPlanningResult
        }
    ]);
