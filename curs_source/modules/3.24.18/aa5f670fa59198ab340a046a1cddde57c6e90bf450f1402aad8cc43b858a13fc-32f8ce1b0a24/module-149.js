require.r(exports);
require.d(exports, {
    CallFrame: ()=>CallFrame,
    ExtraContextEntry: ()=>ExtraContextEntry,
    InvocationContext: ()=>InvocationContext,
    InvocationContext_GithubPR: ()=>InvocationContext_GithubPR,
    InvocationContext_IdeState: ()=>InvocationContext_IdeState,
    InvocationContext_IdeState_File: ()=>InvocationContext_IdeState_File,
    InvocationContext_IdeState_File_CursorPosition: ()=>InvocationContext_IdeState_File_CursorPosition,
    InvocationContext_IdeState_ViewedPullRequest: ()=>InvocationContext_IdeState_ViewedPullRequest,
    InvocationContext_MicrosoftTeamsThread: ()=>InvocationContext_MicrosoftTeamsThread,
    InvocationContext_SlackThread: ()=>InvocationContext_SlackThread,
    PromptUploadRef: ()=>PromptUploadRef,
    RecentAgent: ()=>RecentAgent,
    RecentAgentsContext: ()=>RecentAgentsContext,
    SelectedAgenticGitAction: ()=>SelectedAgenticGitAction,
    SelectedAgenticGitActionBabysitPrInCloudParams: ()=>SelectedAgenticGitActionBabysitPrInCloudParams,
    SelectedAgenticGitActionCommitParams: ()=>SelectedAgenticGitActionCommitParams,
    SelectedAgenticGitActionCreateBranchParams: ()=>SelectedAgenticGitActionCreateBranchParams,
    SelectedAgenticGitActionFixMergeConflictsParams: ()=>SelectedAgenticGitActionFixMergeConflictsParams,
    SelectedAgenticGitActionPullLocallyParams: ()=>SelectedAgenticGitActionPullLocallyParams,
    SelectedAgenticGitActionPushParams: ()=>SelectedAgenticGitActionPushParams,
    SelectedAgenticGitActionUpdateBranchParams: ()=>SelectedAgenticGitActionUpdateBranchParams,
    SelectedAgenticGitFileWithStatus: ()=>SelectedAgenticGitFileWithStatus,
    SelectedBrowser: ()=>SelectedBrowser,
    SelectedCodeSelection: ()=>SelectedCodeSelection,
    SelectedConsoleLog: ()=>SelectedConsoleLog,
    SelectedContext: ()=>SelectedContext,
    SelectedCursorCommand: ()=>SelectedCursorCommand,
    SelectedCursorRule: ()=>SelectedCursorRule,
    SelectedDocument: ()=>SelectedDocument,
    SelectedDocument_BlobIdWithData: ()=>SelectedDocument_BlobIdWithData,
    SelectedDocumentation: ()=>SelectedDocumentation,
    SelectedExternalLink: ()=>SelectedExternalLink,
    SelectedFile: ()=>SelectedFile,
    SelectedFolder: ()=>SelectedFolder,
    SelectedGitBranchContext: ()=>SelectedGitBranchContext,
    SelectedGitCommit: ()=>SelectedGitCommit,
    SelectedGitDiff: ()=>SelectedGitDiff,
    SelectedGitDiffFromBranchToMain: ()=>SelectedGitDiffFromBranchToMain,
    SelectedGitPRDiffSelection: ()=>SelectedGitPRDiffSelection,
    SelectedImage: ()=>SelectedImage,
    SelectedImage_BlobIdWithData: ()=>SelectedImage_BlobIdWithData,
    SelectedImage_Dimension: ()=>SelectedImage_Dimension,
    SelectedPastChat: ()=>SelectedPastChat,
    SelectedPluginCapabilityRef: ()=>SelectedPluginCapabilityRef,
    SelectedPluginCapabilityType: ()=>SelectedPluginCapabilityType,
    SelectedPullRequest: ()=>SelectedPullRequest,
    SelectedSubagent: ()=>SelectedSubagent,
    SelectedTerminal: ()=>SelectedTerminal,
    SelectedTerminalSelection: ()=>SelectedTerminalSelection,
    SelectedUIElement: ()=>SelectedUIElement,
    SelectedVideo: ()=>SelectedVideo,
    SelectedVideo_BlobIdWithData: ()=>SelectedVideo_BlobIdWithData,
    SelectedVideo_SignedUrl: ()=>SelectedVideo_SignedUrl,
    StackTrace: ()=>StackTrace
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-72.js");
var _ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-84.js");
var _cursor_rules_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-80.js");
var _agent_skills_pb_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-147.js");
const SelectedPluginCapabilityType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SelectedPluginCapabilityType", [
    {
        no: 0,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_COMMAND",
        localName: "COMMAND"
    },
    {
        no: 2,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SKILL",
        localName: "SKILL"
    },
    {
        no: 3,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SUBAGENT",
        localName: "SUBAGENT"
    }
]);
const SelectedImage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedImage", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 8,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 9,
            name: "blob_id_with_data",
            kind: "message",
            T: SelectedImage_BlobIdWithData,
            oneof: "data_or_blob_id"
        },
        {
            no: 10,
            name: "prompt_upload_ref",
            kind: "message",
            T: PromptUploadRef,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "dimension",
            kind: "message",
            T: SelectedImage_Dimension
        },
        {
            no: 7,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]);
const SelectedImage_BlobIdWithData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedImage.BlobIdWithData", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ], {
    localName: "SelectedImage_BlobIdWithData"
});
const SelectedImage_Dimension = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedImage.Dimension", ()=>[
        {
            no: 1,
            name: "width",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "height",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "SelectedImage_Dimension"
});
const PromptUploadRef = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PromptUploadRef", ()=>[
        {
            no: 1,
            name: "upload_id",
            kind: "scalar",
            T: 9
        }
    ]);
const SelectedDocument = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedDocument", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 8,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 9,
            name: "blob_id_with_data",
            kind: "message",
            T: SelectedDocument_BlobIdWithData,
            oneof: "data_or_blob_id"
        },
        {
            no: 10,
            name: "prompt_upload_ref",
            kind: "message",
            T: PromptUploadRef,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "filename",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const SelectedDocument_BlobIdWithData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedDocument.BlobIdWithData", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ], {
    localName: "SelectedDocument_BlobIdWithData"
});
const SelectedVideo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedVideo", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 8,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 9,
            name: "blob_id_with_data",
            kind: "message",
            T: SelectedVideo_BlobIdWithData,
            oneof: "data_or_blob_id"
        },
        {
            no: 11,
            name: "signed_url",
            kind: "message",
            T: SelectedVideo_SignedUrl,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "fps",
            kind: "scalar",
            T: 2,
            opt: true
        },
        {
            no: 7,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "filename",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "materialize_to_filesystem",
            kind: "scalar",
            T: 8
        }
    ]);
const SelectedVideo_BlobIdWithData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedVideo.BlobIdWithData", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ], {
    localName: "SelectedVideo_BlobIdWithData"
});
const SelectedVideo_SignedUrl = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedVideo.SignedUrl", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expires_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "refresh_after_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SelectedVideo_SignedUrl"
});
const ExtraContextEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExtraContextEntry", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        }
    ]);
const SelectedFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedFile", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedCodeSelection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedCodeSelection", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.Range
        }
    ]);
const SelectedTerminal = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedTerminal", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedTerminalSelection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedTerminalSelection", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.Range
        }
    ]);
const SelectedFolder = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedFolder", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "directory_tree",
            kind: "message",
            T: _ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_2__.LsDirectoryTreeNode
        }
    ]);
const SelectedExternalLink = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedExternalLink", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pdf_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "is_pdf",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "filename",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
const SelectedCursorRule = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedCursorRule", ()=>[
        {
            no: 1,
            name: "rule",
            kind: "message",
            T: _cursor_rules_pb_js__WEBPACK_IMPORTED_MODULE_3__.CursorRule
        }
    ]);
const SelectedGitDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedGitDiff", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "full_content_length_char_count",
            kind: "scalar",
            T: 5
        }
    ]);
const SelectedGitDiffFromBranchToMain = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedGitDiffFromBranchToMain", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "full_content_length_char_count",
            kind: "scalar",
            T: 5
        }
    ]);
const SelectedGitCommit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedGitCommit", ()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "diff",
            kind: "scalar",
            T: 9
        }
    ]);
const SelectedPullRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedPullRequest", ()=>[
        {
            no: 1,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "folder_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "summary_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
const SelectedGitPRDiffSelection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedGitPRDiffSelection", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "diff_content",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
const SelectedPluginCapabilityRef = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedPluginCapabilityRef", ()=>[
        {
            no: 1,
            name: "plugin_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "capability_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SelectedPluginCapabilityType)
        },
        {
            no: 3,
            name: "source_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "snapshot_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "resolved_commit_sha",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedCursorCommand = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedCursorCommand", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "plugin_capability",
            kind: "message",
            T: SelectedPluginCapabilityRef,
            opt: true
        },
        {
            no: 4,
            name: "full_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "display_name",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedDocumentation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedDocumentation", ()=>[
        {
            no: 1,
            name: "doc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
const SelectedPastChat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedPastChat", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
const RecentAgent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecentAgent", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "overview",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RecentAgentsContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecentAgentsContext", ()=>[
        {
            no: 1,
            name: "recent_agents",
            kind: "message",
            T: RecentAgent,
            repeated: true
        }
    ]);
const CallFrame = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CallFrame", ()=>[
        {
            no: 1,
            name: "function_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "column_number",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const StackTrace = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.StackTrace", ()=>[
        {
            no: 1,
            name: "call_frames",
            kind: "message",
            T: CallFrame,
            repeated: true
        },
        {
            no: 2,
            name: "raw_stack_trace",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedConsoleLog = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedConsoleLog", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "level",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "client_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stack_trace",
            kind: "message",
            T: StackTrace,
            opt: true
        },
        {
            no: 7,
            name: "object_data_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedUIElement = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedUIElement", ()=>[
        {
            no: 1,
            name: "element",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "xpath",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "text_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extra",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "component",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "component_props_json",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedSubagent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedSubagent", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
const SelectedBrowser = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedBrowser", ()=>[
        {
            no: 1,
            name: "browser_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "page_title",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedAgenticGitActionCommitParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedAgenticGitActionCommitParams", ()=>[
        {
            no: 1,
            name: "files_to_commit",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "files_to_exclude_from_commit",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "should_stage_all_changes",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "create_pr_draft",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "files_to_commit_with_status",
            kind: "message",
            T: SelectedAgenticGitFileWithStatus,
            repeated: true
        },
        {
            no: 6,
            name: "files_to_exclude_from_commit_with_status",
            kind: "message",
            T: SelectedAgenticGitFileWithStatus,
            repeated: true
        }
    ]);
const SelectedAgenticGitActionCreateBranchParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedAgenticGitActionCreateBranchParams", []);
const SelectedAgenticGitFileWithStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedAgenticGitFileWithStatus", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedAgenticGitActionPushParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedAgenticGitActionPushParams", ()=>[
        {
            no: 1,
            name: "files_to_push",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "create_pr_draft",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const SelectedAgenticGitActionFixMergeConflictsParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedAgenticGitActionFixMergeConflictsParams", ()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedAgenticGitActionBabysitPrInCloudParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedAgenticGitActionBabysitPrInCloudParams", ()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedAgenticGitActionUpdateBranchParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedAgenticGitActionUpdateBranchParams", ()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedAgenticGitActionPullLocallyParams = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedAgenticGitActionPullLocallyParams", ()=>[
        {
            no: 1,
            name: "remote_branch",
            kind: "scalar",
            T: 9
        }
    ]);
const SelectedAgenticGitAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedAgenticGitAction", ()=>[
        {
            no: 2,
            name: "commit_params",
            kind: "message",
            T: SelectedAgenticGitActionCommitParams,
            oneof: "params"
        },
        {
            no: 6,
            name: "commit_and_push_params",
            kind: "message",
            T: SelectedAgenticGitActionCommitParams,
            oneof: "params"
        },
        {
            no: 3,
            name: "push_params",
            kind: "message",
            T: SelectedAgenticGitActionPushParams,
            oneof: "params"
        },
        {
            no: 7,
            name: "create_pr_params",
            kind: "message",
            T: SelectedAgenticGitActionPushParams,
            oneof: "params"
        },
        {
            no: 8,
            name: "create_pr_with_changes_params",
            kind: "message",
            T: SelectedAgenticGitActionCommitParams,
            oneof: "params"
        },
        {
            no: 4,
            name: "fix_merge_conflicts_params",
            kind: "message",
            T: SelectedAgenticGitActionFixMergeConflictsParams,
            oneof: "params"
        },
        {
            no: 11,
            name: "babysit_pr_in_cloud_params",
            kind: "message",
            T: SelectedAgenticGitActionBabysitPrInCloudParams,
            oneof: "params"
        },
        {
            no: 14,
            name: "apply_locally_params",
            kind: "message",
            T: SelectedAgenticGitActionPullLocallyParams,
            oneof: "params"
        },
        {
            no: 15,
            name: "checkout_branch_params",
            kind: "message",
            T: SelectedAgenticGitActionPullLocallyParams,
            oneof: "params"
        },
        {
            no: 12,
            name: "create_branch_and_commit_params",
            kind: "message",
            T: SelectedAgenticGitActionCommitParams,
            oneof: "params"
        },
        {
            no: 13,
            name: "create_branch_commit_and_push_params",
            kind: "message",
            T: SelectedAgenticGitActionCommitParams,
            oneof: "params"
        },
        {
            no: 16,
            name: "update_branch_params",
            kind: "message",
            T: SelectedAgenticGitActionUpdateBranchParams,
            oneof: "params"
        },
        {
            no: 17,
            name: "create_branch_params",
            kind: "message",
            T: SelectedAgenticGitActionCreateBranchParams,
            oneof: "params"
        },
        {
            no: 5,
            name: "branch_context",
            kind: "message",
            T: SelectedGitBranchContext,
            opt: true
        },
        {
            no: 9,
            name: "path_to_template_file",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "path_to_template_dir",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedGitBranchContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedGitBranchContext", ()=>[
        {
            no: 1,
            name: "current_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "agent_branch_prefix",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SelectedContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SelectedContext", ()=>[
        {
            no: 1,
            name: "selected_images",
            kind: "message",
            T: SelectedImage,
            repeated: true
        },
        {
            no: 2,
            name: "invocation_context",
            kind: "message",
            T: InvocationContext,
            opt: true
        },
        {
            no: 3,
            name: "extra_context",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 16,
            name: "extra_context_entries",
            kind: "message",
            T: ExtraContextEntry,
            repeated: true
        },
        {
            no: 4,
            name: "files",
            kind: "message",
            T: SelectedFile,
            repeated: true
        },
        {
            no: 5,
            name: "code_selections",
            kind: "message",
            T: SelectedCodeSelection,
            repeated: true
        },
        {
            no: 6,
            name: "terminals",
            kind: "message",
            T: SelectedTerminal,
            repeated: true
        },
        {
            no: 7,
            name: "terminal_selections",
            kind: "message",
            T: SelectedTerminalSelection,
            repeated: true
        },
        {
            no: 8,
            name: "folders",
            kind: "message",
            T: SelectedFolder,
            repeated: true
        },
        {
            no: 9,
            name: "external_links",
            kind: "message",
            T: SelectedExternalLink,
            repeated: true
        },
        {
            no: 10,
            name: "cursor_rules",
            kind: "message",
            T: SelectedCursorRule,
            repeated: true
        },
        {
            no: 18,
            name: "git_diff",
            kind: "message",
            T: SelectedGitDiff,
            opt: true
        },
        {
            no: 11,
            name: "git_diff_from_branch_to_main",
            kind: "message",
            T: SelectedGitDiffFromBranchToMain,
            opt: true
        },
        {
            no: 12,
            name: "cursor_commands",
            kind: "message",
            T: SelectedCursorCommand,
            repeated: true
        },
        {
            no: 13,
            name: "documentations",
            kind: "message",
            T: SelectedDocumentation,
            repeated: true
        },
        {
            no: 14,
            name: "ui_elements",
            kind: "message",
            T: SelectedUIElement,
            repeated: true
        },
        {
            no: 15,
            name: "console_logs",
            kind: "message",
            T: SelectedConsoleLog,
            repeated: true
        },
        {
            no: 17,
            name: "git_commits",
            kind: "message",
            T: SelectedGitCommit,
            repeated: true
        },
        {
            no: 19,
            name: "past_chats",
            kind: "message",
            T: SelectedPastChat,
            repeated: true
        },
        {
            no: 20,
            name: "git_pr_diff_selections",
            kind: "message",
            T: SelectedGitPRDiffSelection,
            repeated: true
        },
        {
            no: 21,
            name: "selected_pull_requests",
            kind: "message",
            T: SelectedPullRequest,
            repeated: true
        },
        {
            no: 22,
            name: "selected_subagents",
            kind: "message",
            T: SelectedSubagent,
            repeated: true
        },
        {
            no: 23,
            name: "selected_videos",
            kind: "message",
            T: SelectedVideo,
            repeated: true
        },
        {
            no: 24,
            name: "selected_browsers",
            kind: "message",
            T: SelectedBrowser,
            repeated: true
        },
        {
            no: 25,
            name: "selected_documents",
            kind: "message",
            T: SelectedDocument,
            repeated: true
        },
        {
            no: 26,
            name: "selected_skills",
            kind: "message",
            T: _agent_skills_pb_js__WEBPACK_IMPORTED_MODULE_4__.AgentSkill,
            repeated: true
        },
        {
            no: 27,
            name: "recent_agents_context",
            kind: "message",
            T: RecentAgentsContext,
            opt: true
        },
        {
            no: 34,
            name: "selected_agentic_git_action",
            kind: "message",
            T: SelectedAgenticGitAction,
            opt: true
        }
    ]);
const InvocationContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InvocationContext", ()=>[
        {
            no: 1,
            name: "slack_thread",
            kind: "message",
            T: InvocationContext_SlackThread,
            oneof: "data"
        },
        {
            no: 2,
            name: "github_pr",
            kind: "message",
            T: InvocationContext_GithubPR,
            oneof: "data"
        },
        {
            no: 3,
            name: "ide_state",
            kind: "message",
            T: InvocationContext_IdeState,
            oneof: "data"
        },
        {
            no: 4,
            name: "microsoft_teams_thread",
            kind: "message",
            T: InvocationContext_MicrosoftTeamsThread,
            oneof: "data"
        },
        {
            no: 10,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data"
        }
    ]);
const InvocationContext_SlackThread = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InvocationContext.SlackThread", ()=>[
        {
            no: 1,
            name: "thread",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "channel_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "channel_purpose",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "channel_topic",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "sender_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "sender_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "sender_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "is_directly_addressed",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "InvocationContext_SlackThread"
});
const InvocationContext_MicrosoftTeamsThread = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InvocationContext.MicrosoftTeamsThread", ()=>[
        {
            no: 1,
            name: "thread",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "channel_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "team_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "channel_description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "team_description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "InvocationContext_MicrosoftTeamsThread"
});
const InvocationContext_GithubPR = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InvocationContext.GithubPR", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "comments",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "ci_failures",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "InvocationContext_GithubPR"
});
const InvocationContext_IdeState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InvocationContext.IdeState", ()=>[
        {
            no: 1,
            name: "visible_files",
            kind: "message",
            T: InvocationContext_IdeState_File,
            repeated: true
        },
        {
            no: 2,
            name: "recently_viewed_files",
            kind: "message",
            T: InvocationContext_IdeState_File,
            repeated: true
        },
        {
            no: 3,
            name: "currently_viewed_prs",
            kind: "message",
            T: InvocationContext_IdeState_ViewedPullRequest,
            repeated: true
        }
    ], {
    localName: "InvocationContext_IdeState"
});
const InvocationContext_IdeState_File = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InvocationContext.IdeState.File", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "cursor_position",
            kind: "message",
            T: InvocationContext_IdeState_File_CursorPosition,
            opt: true
        },
        {
            no: 4,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "active_command",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "InvocationContext_IdeState_File"
});
const InvocationContext_IdeState_File_CursorPosition = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InvocationContext.IdeState.File.CursorPosition", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "InvocationContext_IdeState_File_CursorPosition"
});
const InvocationContext_IdeState_ViewedPullRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.InvocationContext.IdeState.ViewedPullRequest", ()=>[
        {
            no: 1,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "folder_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "summary_json",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "InvocationContext_IdeState_ViewedPullRequest"
});
