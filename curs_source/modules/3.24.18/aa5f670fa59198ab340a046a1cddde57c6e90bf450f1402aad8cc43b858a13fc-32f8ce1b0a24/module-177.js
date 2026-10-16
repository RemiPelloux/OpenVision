require.r(exports);
require.d(exports, {
    CmdKLegacyContext: ()=>CmdKLegacyContext,
    CmdKOptions: ()=>CmdKOptions,
    CmdKPreviousEdit: ()=>CmdKPreviousEdit,
    CmdKUpcomingEdit: ()=>CmdKUpcomingEdit,
    GetRelevantChunksRequest: ()=>GetRelevantChunksRequest,
    GetRelevantChunksResponse: ()=>GetRelevantChunksResponse,
    GetRelevantChunksResponse_ChainOfThoughtStream: ()=>GetRelevantChunksResponse_ChainOfThoughtStream,
    GetRelevantChunksResponse_CodeBlocks: ()=>GetRelevantChunksResponse_CodeBlocks,
    RerankCmdKContextRequest: ()=>RerankCmdKContextRequest,
    RerankCmdKContextResponse: ()=>RerankCmdKContextResponse,
    RerankTerminalCmdKContextRequest: ()=>RerankTerminalCmdKContextRequest,
    RerankTerminalCmdKContextResponse: ()=>RerankTerminalCmdKContextResponse,
    StreamCmdKRequest: ()=>StreamCmdKRequest,
    StreamCmdKRequest_BranchDiff: ()=>StreamCmdKRequest_BranchDiff,
    StreamCmdKRequest_BranchDiff_FileDiff: ()=>StreamCmdKRequest_BranchDiff_FileDiff,
    StreamCmdKResponse: ()=>StreamCmdKResponse,
    StreamCmdKResponseContextWrapped: ()=>StreamCmdKResponseContextWrapped,
    StreamCmdKResponse_Chat: ()=>StreamCmdKResponse_Chat,
    StreamCmdKResponse_EditEnd: ()=>StreamCmdKResponse_EditEnd,
    StreamCmdKResponse_EditStart: ()=>StreamCmdKResponse_EditStart,
    StreamCmdKResponse_EditStream: ()=>StreamCmdKResponse_EditStream,
    StreamCmdKResponse_StatusUpdate: ()=>StreamCmdKResponse_StatusUpdate,
    StreamGetRelevantChunksResponseContextWrapped: ()=>StreamGetRelevantChunksResponseContextWrapped,
    StreamHypermodeRequest: ()=>StreamHypermodeRequest,
    StreamTerminalCmdKRequest: ()=>StreamTerminalCmdKRequest,
    StreamTerminalCmdKResponse: ()=>StreamTerminalCmdKResponse,
    StreamTerminalCmdKResponseContextWrapped: ()=>StreamTerminalCmdKResponseContextWrapped,
    StreamTerminalCmdKResponse_Chat: ()=>StreamTerminalCmdKResponse_Chat,
    StreamTerminalCmdKResponse_StatusUpdate: ()=>StreamTerminalCmdKResponse_StatusUpdate,
    StreamTerminalCmdKResponse_TerminalCommand: ()=>StreamTerminalCmdKResponse_TerminalCommand,
    TerminalCmdKOptions: ()=>TerminalCmdKOptions,
    TimingInfo: ()=>TimingInfo
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _context_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-178.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-55.js");
var _cpp_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-174.js");
var _chat_pb_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-150.js");
const RerankCmdKContextRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RerankCmdKContextRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.PotentiallyCachedContextItem,
            repeated: true
        },
        {
            no: 3,
            name: "legacy_context",
            kind: "message",
            T: CmdKLegacyContext
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: CmdKOptions
        }
    ]);
const RerankCmdKContextResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RerankCmdKContextResponse", ()=>[
        {
            no: 1,
            name: "context_status_update",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.ContextStatusUpdate,
            oneof: "response"
        },
        {
            no: 2,
            name: "missing_context_items",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.MissingContextItems,
            oneof: "response"
        },
        {
            no: 3,
            name: "did_call",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const RerankTerminalCmdKContextRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RerankTerminalCmdKContextRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.PotentiallyCachedContextItem,
            repeated: true
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: TerminalCmdKOptions
        }
    ]);
const RerankTerminalCmdKContextResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RerankTerminalCmdKContextResponse", ()=>[
        {
            no: 1,
            name: "context_status_update",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.ContextStatusUpdate,
            oneof: "response"
        },
        {
            no: 2,
            name: "missing_context_items",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.MissingContextItems,
            oneof: "response"
        }
    ]);
const TerminalCmdKOptions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TerminalCmdKOptions", ()=>[
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ModelDetails
        },
        {
            no: 1,
            name: "chat_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "ada_cmd_k_context",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "use_web",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const CmdKOptions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKOptions", ()=>[
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ModelDetails
        },
        {
            no: 1,
            name: "chat_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "ada_cmd_k_context",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "use_reranker",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "use_web",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "request_is_for_caching",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const CmdKUpcomingEdit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKUpcomingEdit", ()=>[
        {
            no: 1,
            name: "original_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extra_context_above",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "extra_context_below",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const CmdKPreviousEdit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKPreviousEdit", ()=>[
        {
            no: 1,
            name: "original_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "new_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extra_context_above",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "extra_context_below",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const StreamHypermodeRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamHypermodeRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.PotentiallyCachedContextItem,
            repeated: true
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: CmdKOptions
        },
        {
            no: 4,
            name: "cmd_k_debug_info",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CmdKDebugInfo
        },
        {
            no: 6,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "legacy_context",
            kind: "message",
            T: CmdKLegacyContext
        },
        {
            no: 7,
            name: "previous_edit",
            kind: "message",
            T: CmdKPreviousEdit,
            opt: true
        },
        {
            no: 8,
            name: "previous_edits",
            kind: "message",
            T: CmdKPreviousEdit,
            repeated: true
        },
        {
            no: 12,
            name: "upcoming_edits",
            kind: "message",
            T: CmdKUpcomingEdit,
            repeated: true
        },
        {
            no: 9,
            name: "use_big_cmdk_for_multi_file_edit",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ImageProto,
            repeated: true
        },
        {
            no: 11,
            name: "links",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CmdKExternalLink,
            repeated: true
        },
        {
            no: 13,
            name: "diff_history",
            kind: "message",
            T: _cpp_pb_js__WEBPACK_IMPORTED_MODULE_3__.CppFileDiffHistory,
            repeated: true
        },
        {
            no: 14,
            name: "hyper_model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "timing_info",
            kind: "message",
            T: TimingInfo,
            opt: true
        }
    ]);
const StreamCmdKRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCmdKRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.PotentiallyCachedContextItem,
            repeated: true
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: CmdKOptions
        },
        {
            no: 4,
            name: "cmd_k_debug_info",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CmdKDebugInfo
        },
        {
            no: 6,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "legacy_context",
            kind: "message",
            T: CmdKLegacyContext
        },
        {
            no: 7,
            name: "previous_edit",
            kind: "message",
            T: CmdKPreviousEdit,
            opt: true
        },
        {
            no: 8,
            name: "previous_edits",
            kind: "message",
            T: CmdKPreviousEdit,
            repeated: true
        },
        {
            no: 12,
            name: "upcoming_edits",
            kind: "message",
            T: CmdKUpcomingEdit,
            repeated: true
        },
        {
            no: 9,
            name: "use_big_cmdk_for_multi_file_edit",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ImageProto,
            repeated: true
        },
        {
            no: 11,
            name: "links",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CmdKExternalLink,
            repeated: true
        },
        {
            no: 13,
            name: "diff_history",
            kind: "message",
            T: _cpp_pb_js__WEBPACK_IMPORTED_MODULE_3__.CppFileDiffHistory,
            repeated: true
        },
        {
            no: 14,
            name: "diff_to_base_branch",
            kind: "message",
            T: StreamCmdKRequest_BranchDiff,
            opt: true
        },
        {
            no: 15,
            name: "timing_info",
            kind: "message",
            T: TimingInfo,
            opt: true
        },
        {
            no: 16,
            name: "rules",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CursorRule,
            repeated: true
        }
    ]);
const StreamCmdKRequest_BranchDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCmdKRequest.BranchDiff", ()=>[
        {
            no: 1,
            name: "file_diffs",
            kind: "message",
            T: StreamCmdKRequest_BranchDiff_FileDiff,
            repeated: true
        },
        {
            no: 2,
            name: "commits",
            kind: "message",
            T: _chat_pb_js__WEBPACK_IMPORTED_MODULE_4__.Commit,
            repeated: true
        }
    ], {
    localName: "StreamCmdKRequest_BranchDiff"
});
const StreamCmdKRequest_BranchDiff_FileDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCmdKRequest.BranchDiff.FileDiff", ()=>[
        {
            no: 1,
            name: "file_name",
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
            name: "too_big",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "StreamCmdKRequest_BranchDiff_FileDiff"
});
const TimingInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TimingInfo", ()=>[
        {
            no: 1,
            name: "user_input_time",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "stream_cmdk_time",
            kind: "scalar",
            T: 1
        }
    ]);
const StreamTerminalCmdKRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamTerminalCmdKRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.PotentiallyCachedContextItem,
            repeated: true
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: TerminalCmdKOptions
        },
        {
            no: 6,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "legacy_context",
            kind: "message",
            T: CmdKLegacyContext
        }
    ]);
const CmdKLegacyContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKLegacyContext", ()=>[
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ExplicitContext
        },
        {
            no: 12,
            name: "prompt_code_blocks",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock,
            repeated: true
        },
        {
            no: 10,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const StreamCmdKResponseContextWrapped = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCmdKResponseContextWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: StreamCmdKResponse,
            oneof: "response"
        },
        {
            no: 2,
            name: "context_status_update",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.ContextStatusUpdate,
            oneof: "response"
        },
        {
            no: 3,
            name: "missing_context_items",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.MissingContextItems,
            oneof: "response"
        }
    ]);
const StreamTerminalCmdKResponseContextWrapped = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamTerminalCmdKResponseContextWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: StreamTerminalCmdKResponse,
            oneof: "response"
        },
        {
            no: 2,
            name: "context_status_update",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.ContextStatusUpdate,
            oneof: "response"
        },
        {
            no: 3,
            name: "missing_context_items",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.MissingContextItems,
            oneof: "response"
        }
    ]);
const StreamTerminalCmdKResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse", ()=>[
        {
            no: 1,
            name: "terminal_command",
            kind: "message",
            T: StreamTerminalCmdKResponse_TerminalCommand,
            oneof: "response"
        },
        {
            no: 4,
            name: "chat",
            kind: "message",
            T: StreamTerminalCmdKResponse_Chat,
            oneof: "response"
        },
        {
            no: 5,
            name: "status_update",
            kind: "message",
            T: StreamTerminalCmdKResponse_StatusUpdate,
            oneof: "response"
        }
    ]);
const StreamTerminalCmdKResponse_TerminalCommand = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse.TerminalCommand", ()=>[
        {
            no: 1,
            name: "partial_command",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamTerminalCmdKResponse_TerminalCommand"
});
const StreamTerminalCmdKResponse_Chat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse.Chat", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamTerminalCmdKResponse_Chat"
});
const StreamTerminalCmdKResponse_StatusUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse.StatusUpdate", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "StreamTerminalCmdKResponse_StatusUpdate"
});
const StreamCmdKResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCmdKResponse", ()=>[
        {
            no: 1,
            name: "edit_start",
            kind: "message",
            T: StreamCmdKResponse_EditStart,
            oneof: "response"
        },
        {
            no: 2,
            name: "edit_stream",
            kind: "message",
            T: StreamCmdKResponse_EditStream,
            oneof: "response"
        },
        {
            no: 3,
            name: "edit_end",
            kind: "message",
            T: StreamCmdKResponse_EditEnd,
            oneof: "response"
        },
        {
            no: 4,
            name: "chat",
            kind: "message",
            T: StreamCmdKResponse_Chat,
            oneof: "response"
        },
        {
            no: 5,
            name: "status_update",
            kind: "message",
            T: StreamCmdKResponse_StatusUpdate,
            oneof: "response"
        }
    ]);
const StreamCmdKResponse_EditStart = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCmdKResponse.EditStart", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "edit_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "max_end_line_number_exclusive",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "file_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "StreamCmdKResponse_EditStart"
});
const StreamCmdKResponse_EditStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCmdKResponse.EditStream", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edit_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "file_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "StreamCmdKResponse_EditStream"
});
const StreamCmdKResponse_EditEnd = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCmdKResponse.EditEnd", ()=>[
        {
            no: 1,
            name: "end_line_number_exclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "edit_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "file_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "StreamCmdKResponse_EditEnd"
});
const StreamCmdKResponse_Chat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCmdKResponse.Chat", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamCmdKResponse_Chat"
});
const StreamCmdKResponse_StatusUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCmdKResponse.StatusUpdate", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "StreamCmdKResponse_StatusUpdate"
});
const GetRelevantChunksRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetRelevantChunksRequest", ()=>[
        {
            no: 1,
            name: "code_blocks",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock,
            repeated: true
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: CmdKOptions
        },
        {
            no: 3,
            name: "context_items",
            kind: "message",
            T: _context_pb_js__WEBPACK_IMPORTED_MODULE_1__.PotentiallyCachedContextItem,
            repeated: true
        },
        {
            no: 4,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "legacy_context",
            kind: "message",
            T: CmdKLegacyContext
        }
    ]);
const StreamGetRelevantChunksResponseContextWrapped = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamGetRelevantChunksResponseContextWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: GetRelevantChunksResponse,
            oneof: "response"
        }
    ]);
const GetRelevantChunksResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetRelevantChunksResponse", ()=>[
        {
            no: 1,
            name: "code_blocks",
            kind: "message",
            T: GetRelevantChunksResponse_CodeBlocks,
            oneof: "response"
        },
        {
            no: 2,
            name: "chain_of_thought_stream",
            kind: "message",
            T: GetRelevantChunksResponse_ChainOfThoughtStream,
            oneof: "response"
        }
    ]);
const GetRelevantChunksResponse_ChainOfThoughtStream = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetRelevantChunksResponse.ChainOfThoughtStream", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GetRelevantChunksResponse_ChainOfThoughtStream"
});
const GetRelevantChunksResponse_CodeBlocks = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetRelevantChunksResponse.CodeBlocks", ()=>[
        {
            no: 1,
            name: "code_blocks",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock,
            repeated: true
        }
    ], {
    localName: "GetRelevantChunksResponse_CodeBlocks"
});
