require.r(exports);
require.d(exports, {
    EditPrLabelsArgs: ()=>EditPrLabelsArgs,
    EditPrLabelsError: ()=>EditPrLabelsError,
    EditPrLabelsResult: ()=>EditPrLabelsResult,
    EditPrLabelsSuccess: ()=>EditPrLabelsSuccess,
    EditPrLabelsToolCall: ()=>EditPrLabelsToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const EditPrLabelsArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditPrLabelsArgs", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "add_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "remove_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const EditPrLabelsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditPrLabelsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: EditPrLabelsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: EditPrLabelsError,
            oneof: "result"
        }
    ]);
const EditPrLabelsSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditPrLabelsSuccess", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pr_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const EditPrLabelsError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditPrLabelsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const EditPrLabelsToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.EditPrLabelsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: EditPrLabelsArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: EditPrLabelsResult
        }
    ]);
