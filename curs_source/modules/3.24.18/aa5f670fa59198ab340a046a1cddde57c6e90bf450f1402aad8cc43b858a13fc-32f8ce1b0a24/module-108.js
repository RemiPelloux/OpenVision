require.r(exports);
require.d(exports, {
    SetupVmEnvironmentArgs: ()=>SetupVmEnvironmentArgs,
    SetupVmEnvironmentResult: ()=>SetupVmEnvironmentResult,
    SetupVmEnvironmentSuccess: ()=>SetupVmEnvironmentSuccess,
    SetupVmEnvironmentToolCall: ()=>SetupVmEnvironmentToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const SetupVmEnvironmentArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SetupVmEnvironmentArgs", ()=>[
        {
            no: 2,
            name: "install_command",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_command",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "dockerfile_contents",
            kind: "scalar",
            T: 9
        }
    ]);
const SetupVmEnvironmentResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SetupVmEnvironmentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SetupVmEnvironmentSuccess,
            oneof: "result"
        }
    ]);
const SetupVmEnvironmentSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SetupVmEnvironmentSuccess", []);
const SetupVmEnvironmentToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SetupVmEnvironmentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: SetupVmEnvironmentArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: SetupVmEnvironmentResult
        }
    ]);
