require.r(exports);
require.d(exports, {
    ContextIntent: ()=>ContextIntent,
    ContextIntent_ChatHistory: ()=>ContextIntent_ChatHistory,
    ContextIntent_CmdKCurrentFile: ()=>ContextIntent_CmdKCurrentFile,
    ContextIntent_CmdKDefinitions: ()=>ContextIntent_CmdKDefinitions,
    ContextIntent_CmdKQueryEtc: ()=>ContextIntent_CmdKQueryEtc,
    ContextIntent_CodeSelection: ()=>ContextIntent_CodeSelection,
    ContextIntent_CodebaseChunks: ()=>ContextIntent_CodebaseChunks,
    ContextIntent_CommitNotes: ()=>ContextIntent_CommitNotes,
    ContextIntent_CustomInstructions: ()=>ContextIntent_CustomInstructions,
    ContextIntent_DiffHistory: ()=>ContextIntent_DiffHistory,
    ContextIntent_Documentation: ()=>ContextIntent_Documentation,
    ContextIntent_File: ()=>ContextIntent_File,
    ContextIntent_File_Mode: ()=>ContextIntent_File_Mode,
    ContextIntent_Lints: ()=>ContextIntent_Lints,
    ContextIntent_Lints_CmdKScope: ()=>ContextIntent_Lints_CmdKScope,
    ContextIntent_Lints_FileScope: ()=>ContextIntent_Lints_FileScope,
    ContextIntent_LspSubgraph: ()=>ContextIntent_LspSubgraph,
    ContextIntent_PastCmdkConversationsInDiffSessions: ()=>ContextIntent_PastCmdkConversationsInDiffSessions,
    ContextIntent_RecentLocations: ()=>ContextIntent_RecentLocations,
    ContextIntent_Symbol: ()=>ContextIntent_Symbol,
    ContextIntent_TerminalCmdKDefaults: ()=>ContextIntent_TerminalCmdKDefaults,
    ContextIntent_TerminalHistory: ()=>ContextIntent_TerminalHistory,
    ContextIntent_Type: ()=>ContextIntent_Type,
    ContextIntent_VisibleTabs: ()=>ContextIntent_VisibleTabs,
    ContextItem: ()=>ContextItem,
    ContextItemStatus: ()=>ContextItemStatus,
    ContextItemStatus_PostGenerationEvaluation: ()=>ContextItemStatus_PostGenerationEvaluation,
    ContextItem_ChatHistory: ()=>ContextItem_ChatHistory,
    ContextItem_CmdKImmediateContext: ()=>ContextItem_CmdKImmediateContext,
    ContextItem_CmdKImmediateContext_Line: ()=>ContextItem_CmdKImmediateContext_Line,
    ContextItem_CmdKQuery: ()=>ContextItem_CmdKQuery,
    ContextItem_CmdKQueryHistory: ()=>ContextItem_CmdKQueryHistory,
    ContextItem_CmdKQueryHistoryInDiffSession: ()=>ContextItem_CmdKQueryHistoryInDiffSession,
    ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession: ()=>ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession,
    ContextItem_CmdKSelection: ()=>ContextItem_CmdKSelection,
    ContextItem_CommitNoteChunk: ()=>ContextItem_CommitNoteChunk,
    ContextItem_CustomInstructions: ()=>ContextItem_CustomInstructions,
    ContextItem_DocumentationChunk: ()=>ContextItem_DocumentationChunk,
    ContextItem_FileChunk: ()=>ContextItem_FileChunk,
    ContextItem_FileDiffHistory: ()=>ContextItem_FileDiffHistory,
    ContextItem_GoToDefinitionResult: ()=>ContextItem_GoToDefinitionResult,
    ContextItem_Lints: ()=>ContextItem_Lints,
    ContextItem_Lints_Line: ()=>ContextItem_Lints_Line,
    ContextItem_LspSubgraphChunk: ()=>ContextItem_LspSubgraphChunk,
    ContextItem_NotebookCellOutput: ()=>ContextItem_NotebookCellOutput,
    ContextItem_OutlineChunk: ()=>ContextItem_OutlineChunk,
    ContextItem_SparseFileChunk: ()=>ContextItem_SparseFileChunk,
    ContextItem_SparseFileChunk_Line: ()=>ContextItem_SparseFileChunk_Line,
    ContextItem_TerminalCmdKQuery: ()=>ContextItem_TerminalCmdKQuery,
    ContextItem_TerminalCmdKQueryHistory: ()=>ContextItem_TerminalCmdKQueryHistory,
    ContextItem_TerminalHistory: ()=>ContextItem_TerminalHistory,
    ContextStatusUpdate: ()=>ContextStatusUpdate,
    MissingContextItems: ()=>MissingContextItems,
    PotentiallyCachedContextItem: ()=>PotentiallyCachedContextItem
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-55.js");
var _cpp_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-174.js");
var _lsp_subgraph_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-175.js");
const PotentiallyCachedContextItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PotentiallyCachedContextItem", ()=>[
        {
            no: 1,
            name: "context_item",
            kind: "message",
            T: ContextItem,
            oneof: "item"
        },
        {
            no: 2,
            name: "context_item_hash",
            kind: "scalar",
            T: 9,
            oneof: "item"
        }
    ]);
const ContextStatusUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextStatusUpdate", ()=>[
        {
            no: 1,
            name: "context_item_statuses",
            kind: "message",
            T: ContextItemStatus,
            repeated: true
        }
    ]);
const MissingContextItems = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MissingContextItems", ()=>[
        {
            no: 2,
            name: "missing_context_item_hashes",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const ContextItemStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItemStatus", ()=>[
        {
            no: 1,
            name: "context_item_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shown_to_the_model",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 4,
            name: "percentage_of_available_space",
            kind: "scalar",
            T: 2
        },
        {
            no: 5,
            name: "post_generation_evaluation",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ContextItemStatus_PostGenerationEvaluation)
        }
    ]);
const ContextItemStatus_PostGenerationEvaluation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ContextItemStatus.PostGenerationEvaluation", [
    {
        no: 0,
        name: "POST_GENERATION_EVALUATION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "POST_GENERATION_EVALUATION_USEFUL",
        localName: "USEFUL"
    },
    {
        no: 2,
        name: "POST_GENERATION_EVALUATION_USELESS",
        localName: "USELESS"
    }
]);
const ContextItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem", ()=>[
        {
            no: 1,
            name: "intent",
            kind: "message",
            T: ContextIntent
        },
        {
            no: 2,
            name: "file_chunk",
            kind: "message",
            T: ContextItem_FileChunk,
            oneof: "item"
        },
        {
            no: 3,
            name: "outline_chunk",
            kind: "message",
            T: ContextItem_OutlineChunk,
            oneof: "item"
        },
        {
            no: 4,
            name: "cmd_k_selection",
            kind: "message",
            T: ContextItem_CmdKSelection,
            oneof: "item"
        },
        {
            no: 5,
            name: "cmd_k_immediate_context",
            kind: "message",
            T: ContextItem_CmdKImmediateContext,
            oneof: "item"
        },
        {
            no: 6,
            name: "cmd_k_query",
            kind: "message",
            T: ContextItem_CmdKQuery,
            oneof: "item"
        },
        {
            no: 7,
            name: "cmd_k_query_history",
            kind: "message",
            T: ContextItem_CmdKQueryHistory,
            oneof: "item"
        },
        {
            no: 8,
            name: "custom_instructions",
            kind: "message",
            T: ContextItem_CustomInstructions,
            oneof: "item"
        },
        {
            no: 9,
            name: "go_to_definition_result",
            kind: "message",
            T: ContextItem_GoToDefinitionResult,
            oneof: "item"
        },
        {
            no: 10,
            name: "documentation_chunk",
            kind: "message",
            T: ContextItem_DocumentationChunk,
            oneof: "item"
        },
        {
            no: 11,
            name: "lints",
            kind: "message",
            T: ContextItem_Lints,
            oneof: "item"
        },
        {
            no: 12,
            name: "chat_history",
            kind: "message",
            T: ContextItem_ChatHistory,
            oneof: "item"
        },
        {
            no: 13,
            name: "notebook_cell_output",
            kind: "message",
            T: ContextItem_NotebookCellOutput,
            oneof: "item"
        },
        {
            no: 14,
            name: "terminal_history",
            kind: "message",
            T: ContextItem_TerminalHistory,
            oneof: "item"
        },
        {
            no: 15,
            name: "terminal_cmd_k_query",
            kind: "message",
            T: ContextItem_TerminalCmdKQuery,
            oneof: "item"
        },
        {
            no: 16,
            name: "terminal_cmd_k_query_history",
            kind: "message",
            T: ContextItem_TerminalCmdKQueryHistory,
            oneof: "item"
        },
        {
            no: 17,
            name: "sparse_file_chunk",
            kind: "message",
            T: ContextItem_SparseFileChunk,
            oneof: "item"
        },
        {
            no: 18,
            name: "lsp_subgraph_chunk",
            kind: "message",
            T: ContextItem_LspSubgraphChunk,
            oneof: "item"
        },
        {
            no: 19,
            name: "commit_note_chunk",
            kind: "message",
            T: ContextItem_CommitNoteChunk,
            oneof: "item"
        },
        {
            no: 20,
            name: "file_diff_history",
            kind: "message",
            T: ContextItem_FileDiffHistory,
            oneof: "item"
        },
        {
            no: 21,
            name: "cmd_k_query_history_in_diff_session",
            kind: "message",
            T: ContextItem_CmdKQueryHistoryInDiffSession,
            oneof: "item"
        },
        {
            no: 22,
            name: "project_rule",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CursorRule,
            oneof: "item"
        }
    ]);
const ContextItem_FileChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.FileChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "chunk_contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_FileChunk"
});
const ContextItem_SparseFileChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.SparseFileChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "message",
            T: ContextItem_SparseFileChunk_Line,
            repeated: true
        },
        {
            no: 3,
            name: "total_number_of_lines_in_file",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "cell_number",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "ContextItem_SparseFileChunk"
});
const ContextItem_SparseFileChunk_Line = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.SparseFileChunk.Line", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_SparseFileChunk_Line"
});
const ContextItem_OutlineChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.OutlineChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "full_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LineRange
        }
    ], {
    localName: "ContextItem_OutlineChunk"
});
const ContextItem_CmdKSelection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.CmdKSelection", ()=>[
        {
            no: 1,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_CmdKSelection"
});
const ContextItem_FileDiffHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.FileDiffHistory", ()=>[
        {
            no: 1,
            name: "cpp_file_diff_history",
            kind: "message",
            T: _cpp_pb_js__WEBPACK_IMPORTED_MODULE_2__.CppFileDiffHistory
        },
        {
            no: 2,
            name: "how_many_diffs_ago",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "is_very_recent",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "ContextItem_FileDiffHistory"
});
const ContextItem_CmdKImmediateContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.CmdKImmediateContext", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "message",
            T: ContextItem_CmdKImmediateContext_Line,
            repeated: true
        },
        {
            no: 3,
            name: "total_number_of_lines_in_file",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "cell_number",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "ContextItem_CmdKImmediateContext"
});
const ContextItem_CmdKImmediateContext_Line = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.CmdKImmediateContext.Line", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_CmdKImmediateContext_Line"
});
const ContextItem_CmdKQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.CmdKQuery", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_CmdKQuery"
});
const ContextItem_TerminalCmdKQuery = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.TerminalCmdKQuery", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_TerminalCmdKQuery"
});
const ContextItem_TerminalCmdKQueryHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.TerminalCmdKQueryHistory", ()=>[
        {
            no: 1,
            name: "query",
            kind: "message",
            T: ContextItem_TerminalCmdKQuery
        },
        {
            no: 2,
            name: "query_history",
            kind: "message",
            T: ContextItem_TerminalCmdKQueryHistory
        },
        {
            no: 5,
            name: "context_item_hashes",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "suggested_command",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_TerminalCmdKQueryHistory"
});
const ContextItem_CmdKQueryHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistory", ()=>[
        {
            no: 1,
            name: "query",
            kind: "message",
            T: ContextItem_CmdKQuery
        },
        {
            no: 2,
            name: "immediate_context",
            kind: "message",
            T: ContextItem_CmdKImmediateContext
        },
        {
            no: 3,
            name: "selection",
            kind: "message",
            T: ContextItem_CmdKSelection
        },
        {
            no: 4,
            name: "query_history",
            kind: "message",
            T: ContextItem_CmdKQueryHistory
        },
        {
            no: 5,
            name: "context_item_hashes",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "timestamp",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 7,
            name: "timestamp_double",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ], {
    localName: "ContextItem_CmdKQueryHistory"
});
const ContextItem_CmdKQueryHistoryInDiffSession = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession", ()=>[
        {
            no: 1,
            name: "past_cmdk_queries",
            kind: "message",
            T: ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession,
            repeated: true
        },
        {
            no: 3,
            name: "curr_timestamp_double",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "ContextItem_CmdKQueryHistoryInDiffSession"
});
const ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession.PastCmdKQueryInDiffSession", ()=>[
        {
            no: 1,
            name: "query",
            kind: "message",
            T: ContextItem_CmdKQuery
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "cmdk_was_accepted",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "timestamp_double",
            kind: "scalar",
            T: 1
        },
        {
            no: 7,
            name: "timestamp_for_diff_interleaving",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 8,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession"
});
const ContextItem_ChatHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.ChatHistory", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "assistant_response",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chat_history",
            kind: "message",
            T: ContextItem_ChatHistory
        },
        {
            no: 4,
            name: "active_for_cmd_k",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "timestamp",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 6,
            name: "timestamp_double",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ], {
    localName: "ContextItem_ChatHistory"
});
const ContextItem_TerminalHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.TerminalHistory", ()=>[
        {
            no: 1,
            name: "history",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "cwd_full",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "cwd_relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "active_for_cmd_k",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "timestamp",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 8,
            name: "timestamp_double",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ], {
    localName: "ContextItem_TerminalHistory"
});
const ContextItem_CustomInstructions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.CustomInstructions", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_CustomInstructions"
});
const ContextItem_GoToDefinitionResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.GoToDefinitionResult", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "column_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "definition_chunk",
            kind: "message",
            T: ContextItem_FileChunk
        }
    ], {
    localName: "ContextItem_GoToDefinitionResult"
});
const ContextItem_DocumentationChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.DocumentationChunk", ()=>[
        {
            no: 1,
            name: "doc_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "page_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "documentation_chunk",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ], {
    localName: "ContextItem_DocumentationChunk"
});
const ContextItem_Lints = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.Lints", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lints",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.Lint,
            repeated: true
        },
        {
            no: 3,
            name: "context_lines",
            kind: "message",
            T: ContextItem_Lints_Line,
            repeated: true
        }
    ], {
    localName: "ContextItem_Lints"
});
const ContextItem_Lints_Line = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.Lints.Line", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_Lints_Line"
});
const ContextItem_NotebookCellOutput = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.NotebookCellOutput", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cell_output",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "cell_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_NotebookCellOutput"
});
const ContextItem_LspSubgraphChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.LspSubgraphChunk", ()=>[
        {
            no: 1,
            name: "lsp_subgraph_full_context",
            kind: "message",
            T: _lsp_subgraph_pb_js__WEBPACK_IMPORTED_MODULE_3__.LspSubgraphFullContext
        }
    ], {
    localName: "ContextItem_LspSubgraphChunk"
});
const ContextItem_CommitNoteChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextItem.CommitNoteChunk", ()=>[
        {
            no: 1,
            name: "note",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_CommitNoteChunk"
});
const ContextIntent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ContextIntent_Type)
        },
        {
            no: 15,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file",
            kind: "message",
            T: ContextIntent_File,
            oneof: "intent"
        },
        {
            no: 3,
            name: "code_selection",
            kind: "message",
            T: ContextIntent_CodeSelection,
            oneof: "intent"
        },
        {
            no: 5,
            name: "lints",
            kind: "message",
            T: ContextIntent_Lints,
            oneof: "intent"
        },
        {
            no: 6,
            name: "recent_locations",
            kind: "message",
            T: ContextIntent_RecentLocations,
            oneof: "intent"
        },
        {
            no: 8,
            name: "cmd_k_current_file",
            kind: "message",
            T: ContextIntent_CmdKCurrentFile,
            oneof: "intent"
        },
        {
            no: 9,
            name: "cmd_k_query_etc",
            kind: "message",
            T: ContextIntent_CmdKQueryEtc,
            oneof: "intent"
        },
        {
            no: 14,
            name: "terminal_cmd_k_defaults",
            kind: "message",
            T: ContextIntent_TerminalCmdKDefaults,
            oneof: "intent"
        },
        {
            no: 10,
            name: "cmd_k_definitions",
            kind: "message",
            T: ContextIntent_CmdKDefinitions,
            oneof: "intent"
        },
        {
            no: 11,
            name: "documentation",
            kind: "message",
            T: ContextIntent_Documentation,
            oneof: "intent"
        },
        {
            no: 12,
            name: "custom_instructions",
            kind: "message",
            T: ContextIntent_CustomInstructions,
            oneof: "intent"
        },
        {
            no: 13,
            name: "chat_history",
            kind: "message",
            T: ContextIntent_ChatHistory,
            oneof: "intent"
        },
        {
            no: 16,
            name: "terminal_history",
            kind: "message",
            T: ContextIntent_TerminalHistory,
            oneof: "intent"
        },
        {
            no: 17,
            name: "visible_tabs",
            kind: "message",
            T: ContextIntent_VisibleTabs,
            oneof: "intent"
        },
        {
            no: 18,
            name: "lsp_subgraph",
            kind: "message",
            T: ContextIntent_LspSubgraph,
            oneof: "intent"
        },
        {
            no: 19,
            name: "commit_notes",
            kind: "message",
            T: ContextIntent_CommitNotes,
            oneof: "intent"
        },
        {
            no: 20,
            name: "diff_history",
            kind: "message",
            T: ContextIntent_DiffHistory,
            oneof: "intent"
        },
        {
            no: 21,
            name: "past_cmdk_messages_in_diff_sessions",
            kind: "message",
            T: ContextIntent_PastCmdkConversationsInDiffSessions,
            oneof: "intent"
        }
    ]);
const ContextIntent_Type = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ContextIntent.Type", [
    {
        no: 0,
        name: "TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TYPE_USER_ADDED",
        localName: "USER_ADDED"
    },
    {
        no: 2,
        name: "TYPE_AUTOMATIC",
        localName: "AUTOMATIC"
    }
]);
const ContextIntent_Documentation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.Documentation", ()=>[
        {
            no: 1,
            name: "documentation_identifier",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextIntent_Documentation"
});
const ContextIntent_File = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.File", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ContextIntent_File_Mode)
        }
    ], {
    localName: "ContextIntent_File"
});
const ContextIntent_File_Mode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ContextIntent.File.Mode", [
    {
        no: 0,
        name: "MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MODE_FULL",
        localName: "FULL"
    },
    {
        no: 2,
        name: "MODE_OUTLINE",
        localName: "OUTLINE"
    },
    {
        no: 3,
        name: "MODE_CHUNKS",
        localName: "CHUNKS"
    }
]);
const ContextIntent_CodeSelection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.CodeSelection", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "potentially_out_of_date_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SimpleRange
        },
        {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextIntent_CodeSelection"
});
const ContextIntent_Symbol = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.Symbol", ()=>[
        {
            no: 1,
            name: "symbol",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.DocumentSymbol
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextIntent_Symbol"
});
const ContextIntent_CommitNotes = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.CommitNotes", [], {
    localName: "ContextIntent_CommitNotes"
});
const ContextIntent_Lints = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.Lints", ()=>[
        {
            no: 1,
            name: "cmdk_scope",
            kind: "message",
            T: ContextIntent_Lints_CmdKScope,
            oneof: "scope"
        },
        {
            no: 2,
            name: "file_scope",
            kind: "message",
            T: ContextIntent_Lints_FileScope,
            oneof: "scope"
        },
        {
            no: 3,
            name: "filter_to_severities",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LintSeverity),
            repeated: true
        }
    ], {
    localName: "ContextIntent_Lints"
});
const ContextIntent_Lints_CmdKScope = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.Lints.CmdKScope", [], {
    localName: "ContextIntent_Lints_CmdKScope"
});
const ContextIntent_Lints_FileScope = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.Lints.FileScope", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "filter_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LineRange,
            opt: true
        }
    ], {
    localName: "ContextIntent_Lints_FileScope"
});
const ContextIntent_RecentLocations = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.RecentLocations", ()=>[
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ], {
    localName: "ContextIntent_RecentLocations"
});
const ContextIntent_PastCmdkConversationsInDiffSessions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.PastCmdkConversationsInDiffSessions", [], {
    localName: "ContextIntent_PastCmdkConversationsInDiffSessions"
});
const ContextIntent_VisibleTabs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.VisibleTabs", [], {
    localName: "ContextIntent_VisibleTabs"
});
const ContextIntent_CodebaseChunks = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.CodebaseChunks", [], {
    localName: "ContextIntent_CodebaseChunks"
});
const ContextIntent_CmdKCurrentFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.CmdKCurrentFile", [], {
    localName: "ContextIntent_CmdKCurrentFile"
});
const ContextIntent_CmdKQueryEtc = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.CmdKQueryEtc", [], {
    localName: "ContextIntent_CmdKQueryEtc"
});
const ContextIntent_CustomInstructions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.CustomInstructions", [], {
    localName: "ContextIntent_CustomInstructions"
});
const ContextIntent_CmdKDefinitions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.CmdKDefinitions", [], {
    localName: "ContextIntent_CmdKDefinitions"
});
const ContextIntent_ChatHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.ChatHistory", [], {
    localName: "ContextIntent_ChatHistory"
});
const ContextIntent_DiffHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.DiffHistory", [], {
    localName: "ContextIntent_DiffHistory"
});
const ContextIntent_TerminalCmdKDefaults = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.TerminalCmdKDefaults", [], {
    localName: "ContextIntent_TerminalCmdKDefaults"
});
const ContextIntent_TerminalHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.TerminalHistory", ()=>[
        {
            no: 1,
            name: "instance_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "active_for_cmd_k",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "use_active_instance_as_fallback",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "ContextIntent_TerminalHistory"
});
const ContextIntent_LspSubgraph = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ContextIntent.LspSubgraph", [], {
    localName: "ContextIntent_LspSubgraph"
});
