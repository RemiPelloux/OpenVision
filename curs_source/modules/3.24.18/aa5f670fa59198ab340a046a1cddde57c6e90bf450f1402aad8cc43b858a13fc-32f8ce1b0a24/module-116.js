require.r(exports);
require.d(exports, {
    AwaitArgs: ()=>AwaitArgs,
    AwaitError: ()=>AwaitError,
    AwaitResult: ()=>AwaitResult,
    AwaitSuccess: ()=>AwaitSuccess,
    AwaitTaskComplete: ()=>AwaitTaskComplete,
    AwaitTaskStillRunning: ()=>AwaitTaskStillRunning,
    AwaitToolCall: ()=>AwaitToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const AwaitArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AwaitArgs", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "block_until_ms",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 3,
            name: "regex",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const AwaitTaskComplete = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AwaitTaskComplete", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "runtime_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "output_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "output_length",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "regex_requested",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "regex_match",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "exit_code",
            kind: "scalar",
            T: 17,
            opt: true
        },
        {
            no: 8,
            name: "wake_reason",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const AwaitTaskStillRunning = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AwaitTaskStillRunning", ()=>[
        {
            no: 1,
            name: "task_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "runtime_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "output_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "output_length",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "regex_requested",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "regex_match",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "wake_reason",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const AwaitError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AwaitError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const AwaitSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AwaitSuccess", ()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: AwaitTaskComplete,
            oneof: "await_result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: AwaitTaskStillRunning,
            oneof: "await_result"
        }
    ]);
const AwaitResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AwaitResult", ()=>[
        {
            no: 1,
            name: "complete",
            kind: "message",
            T: AwaitTaskComplete,
            oneof: "result"
        },
        {
            no: 2,
            name: "still_running",
            kind: "message",
            T: AwaitTaskStillRunning,
            oneof: "result"
        },
        {
            no: 3,
            name: "error",
            kind: "message",
            T: AwaitError,
            oneof: "result"
        },
        {
            no: 4,
            name: "success",
            kind: "message",
            T: AwaitSuccess,
            oneof: "result"
        }
    ]);
const AwaitToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AwaitToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: AwaitArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: AwaitResult
        }
    ]);
