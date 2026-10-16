require.r(exports);
require.d(exports, {
    PiEditReplacement: ()=>PiEditReplacement,
    PiEditToolArgs: ()=>PiEditToolArgs,
    PiEditToolCall: ()=>PiEditToolCall,
    PiEditToolError: ()=>PiEditToolError,
    PiEditToolRejected: ()=>PiEditToolRejected,
    PiEditToolResult: ()=>PiEditToolResult,
    PiEditToolSuccess: ()=>PiEditToolSuccess
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const PiEditReplacement = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditReplacement", ()=>[
        {
            no: 1,
            name: "old_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_text",
            kind: "scalar",
            T: 9
        }
    ]);
const PiEditToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: PiEditToolArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: PiEditToolResult
        }
    ]);
const PiEditToolArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditToolArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edits",
            kind: "message",
            T: PiEditReplacement,
            repeated: true
        }
    ]);
const PiEditToolResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditToolResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: PiEditToolSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: PiEditToolError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: PiEditToolRejected,
            oneof: "result"
        }
    ]);
const PiEditToolSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditToolSuccess", ()=>[
        {
            no: 1,
            name: "output",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "patch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "first_changed_line",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const PiEditToolError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditToolError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const PiEditToolRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiEditToolRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
