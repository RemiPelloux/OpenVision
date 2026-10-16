require.r(exports);
require.d(exports, {
    GetLintsForChangeRequest: ()=>GetLintsForChangeRequest,
    GetLintsForChangeRequest_File: ()=>GetLintsForChangeRequest_File,
    GetLintsForChangeRequest_File_IRange: ()=>GetLintsForChangeRequest_File_IRange,
    GetLintsForChangeRequest_File_RangeCollection: ()=>GetLintsForChangeRequest_File_RangeCollection,
    GetLintsForChangeResponse: ()=>GetLintsForChangeResponse,
    GetLintsForChangeResponse_Lint: ()=>GetLintsForChangeResponse_Lint,
    GetLintsForChangeResponse_Lint_QuickFix: ()=>GetLintsForChangeResponse_Lint_QuickFix,
    GetLintsForChangeResponse_Lint_QuickFix_Edit: ()=>GetLintsForChangeResponse_Lint_QuickFix_Edit,
    ShadowHealthCheckRequest: ()=>ShadowHealthCheckRequest,
    ShadowHealthCheckResponse: ()=>ShadowHealthCheckResponse,
    SwCallClientSideV2ToolRequest: ()=>SwCallClientSideV2ToolRequest,
    SwCallClientSideV2ToolResponse: ()=>SwCallClientSideV2ToolResponse,
    SwCallDiagnosticsExecutorRequest: ()=>SwCallDiagnosticsExecutorRequest,
    SwCallDiagnosticsExecutorResponse: ()=>SwCallDiagnosticsExecutorResponse,
    SwCompileRepoIncludeExcludePatternsRequest: ()=>SwCompileRepoIncludeExcludePatternsRequest,
    SwCompileRepoIncludeExcludePatternsResponse: ()=>SwCompileRepoIncludeExcludePatternsResponse,
    SwGetEnvironmentInfoRequest: ()=>SwGetEnvironmentInfoRequest,
    SwGetEnvironmentInfoResponse: ()=>SwGetEnvironmentInfoResponse,
    SwGetExplicitContextRequest: ()=>SwGetExplicitContextRequest,
    SwGetExplicitContextResponse: ()=>SwGetExplicitContextResponse,
    SwGetLinterErrorsRequest: ()=>SwGetLinterErrorsRequest,
    SwGetLinterErrorsResponse: ()=>SwGetLinterErrorsResponse,
    SwGetMcpToolsRequest: ()=>SwGetMcpToolsRequest,
    SwGetMcpToolsResponse: ()=>SwGetMcpToolsResponse,
    SwProvideTemporaryAccessTokenRequest: ()=>SwProvideTemporaryAccessTokenRequest,
    SwProvideTemporaryAccessTokenResponse: ()=>SwProvideTemporaryAccessTokenResponse,
    SwSyncIndexRequest: ()=>SwSyncIndexRequest,
    SwSyncIndexResponse: ()=>SwSyncIndexResponse,
    SwTrackModelRequest: ()=>SwTrackModelRequest,
    SwTrackModelResponse: ()=>SwTrackModelResponse,
    SwWriteTextFileWithLintsRequest: ()=>SwWriteTextFileWithLintsRequest,
    SwWriteTextFileWithLintsResponse: ()=>SwWriteTextFileWithLintsResponse
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _agent_v1_diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-86.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-55.js");
var _tools_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-151.js");
var _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-91.js");
const SwTrackModelRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwTrackModelRequest", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        }
    ]);
const SwTrackModelResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwTrackModelResponse", []);
const SwCallDiagnosticsExecutorRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwCallDiagnosticsExecutorRequest", ()=>[
        {
            no: 1,
            name: "diagnostics_args",
            kind: "message",
            T: _agent_v1_diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.DiagnosticsArgs
        }
    ]);
const SwCallDiagnosticsExecutorResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwCallDiagnosticsExecutorResponse", ()=>[
        {
            no: 1,
            name: "diagnostics_result",
            kind: "message",
            T: _agent_v1_diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.DiagnosticsResult
        }
    ]);
const SwWriteTextFileWithLintsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwWriteTextFileWithLintsRequest", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_contents",
            kind: "scalar",
            T: 9
        }
    ]);
const SwWriteTextFileWithLintsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwWriteTextFileWithLintsResponse", ()=>[
        {
            no: 1,
            name: "new_linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.LinterError,
            repeated: true
        }
    ]);
const SwGetExplicitContextRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwGetExplicitContextRequest", []);
const SwGetExplicitContextResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwGetExplicitContextResponse", ()=>[
        {
            no: 1,
            name: "explicit_context",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.ExplicitContext
        }
    ]);
const SwGetEnvironmentInfoRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwGetEnvironmentInfoRequest", []);
const SwGetEnvironmentInfoResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwGetEnvironmentInfoResponse", ()=>[
        {
            no: 1,
            name: "environment_info",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.EnvironmentInfo
        }
    ]);
const SwGetLinterErrorsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwGetLinterErrorsRequest", ()=>[
        {
            no: 1,
            name: "absolute_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const SwGetLinterErrorsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwGetLinterErrorsResponse", ()=>[
        {
            no: 1,
            name: "linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_2__.LinterErrors,
            repeated: true
        }
    ]);
const SwGetMcpToolsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwGetMcpToolsRequest", ()=>[
        {
            no: 1,
            name: "browser_integration_preference",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SwGetMcpToolsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwGetMcpToolsResponse", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_3__.MCPParams_Tool,
            repeated: true
        }
    ]);
const SwCallClientSideV2ToolRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwCallClientSideV2ToolRequest", ()=>[
        {
            no: 1,
            name: "tool_call",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_3__.ClientSideToolV2Call
        },
        {
            no: 2,
            name: "composer_id",
            kind: "scalar",
            T: 9
        }
    ]);
const SwCallClientSideV2ToolResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwCallClientSideV2ToolResponse", ()=>[
        {
            no: 1,
            name: "tool_result",
            kind: "message",
            T: _tools_pb_js__WEBPACK_IMPORTED_MODULE_3__.ClientSideToolV2Result
        }
    ]);
const SwCompileRepoIncludeExcludePatternsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwCompileRepoIncludeExcludePatternsRequest", ()=>[
        {
            no: 1,
            name: "include_pattern",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "exclude_pattern",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "path_encryption_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repository_info",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__.RepositoryInfo
        }
    ]);
const SwCompileRepoIncludeExcludePatternsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwCompileRepoIncludeExcludePatternsResponse", ()=>[
        {
            no: 1,
            name: "glob_filter",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "not_glob_filter",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SwProvideTemporaryAccessTokenRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwProvideTemporaryAccessTokenRequest", ()=>[
        {
            no: 1,
            name: "access_token",
            kind: "scalar",
            T: 9
        }
    ]);
const SwProvideTemporaryAccessTokenResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwProvideTemporaryAccessTokenResponse", []);
const ShadowHealthCheckRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ShadowHealthCheckRequest", []);
const ShadowHealthCheckResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ShadowHealthCheckResponse", []);
const SwSyncIndexRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwSyncIndexRequest", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__.RepositoryInfo
        },
        {
            no: 2,
            name: "path_encryption_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "indexing_progress_threshold",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ]);
const SwSyncIndexResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SwSyncIndexResponse", []);
const GetLintsForChangeRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetLintsForChangeRequest", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: GetLintsForChangeRequest_File,
            repeated: true
        },
        {
            no: 2,
            name: "include_quick_fixes",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "do_not_use_in_prod_new_files_should_be_temporarily_created_for_increased_accuracy",
            kind: "scalar",
            T: 8
        }
    ]);
const GetLintsForChangeRequest_File = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "initial_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "final_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "get_all_lints_not_just_delta_lints_for_ranges_in_final_model",
            kind: "message",
            T: GetLintsForChangeRequest_File_RangeCollection,
            opt: true
        }
    ], {
    localName: "GetLintsForChangeRequest_File"
});
const GetLintsForChangeRequest_File_RangeCollection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File.RangeCollection", ()=>[
        {
            no: 1,
            name: "ranges",
            kind: "message",
            T: GetLintsForChangeRequest_File_IRange,
            repeated: true
        }
    ], {
    localName: "GetLintsForChangeRequest_File_RangeCollection"
});
const GetLintsForChangeRequest_File_IRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File.IRange", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_column",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "GetLintsForChangeRequest_File_IRange"
});
const GetLintsForChangeResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetLintsForChangeResponse", ()=>[
        {
            no: 1,
            name: "lints",
            kind: "message",
            T: GetLintsForChangeResponse_Lint,
            repeated: true
        }
    ]);
const GetLintsForChangeResponse_Lint = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "start_line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "start_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "end_line_number_inclusive_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "end_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "quick_fixes",
            kind: "message",
            T: GetLintsForChangeResponse_Lint_QuickFix,
            repeated: true
        }
    ], {
    localName: "GetLintsForChangeResponse_Lint"
});
const GetLintsForChangeResponse_Lint_QuickFix = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_preferred",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "edits",
            kind: "message",
            T: GetLintsForChangeResponse_Lint_QuickFix_Edit,
            repeated: true
        }
    ], {
    localName: "GetLintsForChangeResponse_Lint_QuickFix"
});
const GetLintsForChangeResponse_Lint_QuickFix_Edit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix.Edit", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "start_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "end_line_number_inclusive_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "end_column_one_indexed",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "GetLintsForChangeResponse_Lint_QuickFix_Edit"
});
