require.r(exports);
require.d(exports, {
    AskQuestionArgs: ()=>AskQuestionArgs,
    AskQuestionArgs_Option: ()=>AskQuestionArgs_Option,
    AskQuestionArgs_Question: ()=>AskQuestionArgs_Question,
    AskQuestionAsync: ()=>AskQuestionAsync,
    AskQuestionError: ()=>AskQuestionError,
    AskQuestionRejected: ()=>AskQuestionRejected,
    AskQuestionResult: ()=>AskQuestionResult,
    AskQuestionSuccess: ()=>AskQuestionSuccess,
    AskQuestionSuccess_Answer: ()=>AskQuestionSuccess_Answer,
    AskQuestionToolCall: ()=>AskQuestionToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const AskQuestionToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: AskQuestionArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: AskQuestionResult
        }
    ]);
const AskQuestionArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionArgs", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "questions",
            kind: "message",
            T: AskQuestionArgs_Question,
            repeated: true
        },
        {
            no: 5,
            name: "run_async",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "async_original_tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const AskQuestionArgs_Question = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionArgs.Question", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: AskQuestionArgs_Option,
            repeated: true
        },
        {
            no: 4,
            name: "allow_multiple",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "AskQuestionArgs_Question"
});
const AskQuestionArgs_Option = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionArgs.Option", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AskQuestionArgs_Option"
});
const AskQuestionAsync = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionAsync", ()=>[
        {
            no: 1,
            name: "interaction_id",
            kind: "scalar",
            T: 9
        }
    ]);
const AskQuestionResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: AskQuestionSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: AskQuestionError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: AskQuestionRejected,
            oneof: "result"
        },
        {
            no: 4,
            name: "async",
            kind: "message",
            T: AskQuestionAsync,
            oneof: "result"
        }
    ]);
const AskQuestionSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionSuccess", ()=>[
        {
            no: 1,
            name: "answers",
            kind: "message",
            T: AskQuestionSuccess_Answer,
            repeated: true
        }
    ]);
const AskQuestionSuccess_Answer = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionSuccess.Answer", ()=>[
        {
            no: 1,
            name: "question_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "selected_option_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "freeform_text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "AskQuestionSuccess_Answer"
});
const AskQuestionError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionError", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
const AskQuestionRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AskQuestionRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
