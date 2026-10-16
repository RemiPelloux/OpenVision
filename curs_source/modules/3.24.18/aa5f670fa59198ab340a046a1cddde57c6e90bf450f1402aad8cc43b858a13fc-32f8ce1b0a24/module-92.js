require.r(exports);
require.d(exports, {
    ChooseCodeReferencesRequest: ()=>ChooseCodeReferencesRequest,
    ChooseCodeReferencesRequest_FileRequest: ()=>ChooseCodeReferencesRequest_FileRequest,
    ChooseCodeReferencesRequest_NodeRequest: ()=>ChooseCodeReferencesRequest_NodeRequest,
    ChooseCodeReferencesResponse: ()=>ChooseCodeReferencesResponse,
    ChooseCodeReferencesResponse_FileResponse: ()=>ChooseCodeReferencesResponse_FileResponse,
    ChooseCodeReferencesResponse_NodeResponse: ()=>ChooseCodeReferencesResponse_NodeResponse,
    CodeSnippet: ()=>CodeSnippet,
    CodeSymbolWithAction: ()=>CodeSymbolWithAction,
    CodeSymbolWithAction_CodeSymbolAction: ()=>CodeSymbolWithAction_CodeSymbolAction,
    ComputeIndexTopoSortRequest: ()=>ComputeIndexTopoSortRequest,
    ComputeIndexTopoSortResponse: ()=>ComputeIndexTopoSortResponse,
    CreateExperimentalIndexRequest: ()=>CreateExperimentalIndexRequest,
    CreateExperimentalIndexResponse: ()=>CreateExperimentalIndexResponse,
    ExtractPathsRequest: ()=>ExtractPathsRequest,
    ExtractPathsResponse: ()=>ExtractPathsResponse,
    FileCodeSnippets: ()=>FileCodeSnippets,
    IndexFileData: ()=>IndexFileData,
    IndexFileData_NodeData: ()=>IndexFileData_NodeData,
    ListExperimentalIndexFilesRequest: ()=>ListExperimentalIndexFilesRequest,
    ListExperimentalIndexFilesResponse: ()=>ListExperimentalIndexFilesResponse,
    ListenExperimentalIndexRequest: ()=>ListenExperimentalIndexRequest,
    ListenExperimentalIndexResponse: ()=>ListenExperimentalIndexResponse,
    ListenExperimentalIndexResponse_ChooseItem: ()=>ListenExperimentalIndexResponse_ChooseItem,
    ListenExperimentalIndexResponse_ErrorItem: ()=>ListenExperimentalIndexResponse_ErrorItem,
    ListenExperimentalIndexResponse_ReadyItem: ()=>ListenExperimentalIndexResponse_ReadyItem,
    ListenExperimentalIndexResponse_RegisterItem: ()=>ListenExperimentalIndexResponse_RegisterItem,
    ListenExperimentalIndexResponse_SummarizeItem: ()=>ListenExperimentalIndexResponse_SummarizeItem,
    ReflectionData: ()=>ReflectionData,
    RegisterCodeReferencesRequest: ()=>RegisterCodeReferencesRequest,
    RegisterCodeReferencesResponse: ()=>RegisterCodeReferencesResponse,
    RegisterFileToIndexRequest: ()=>RegisterFileToIndexRequest,
    RegisterFileToIndexResponse: ()=>RegisterFileToIndexResponse,
    RequestReceivedResponse: ()=>RequestReceivedResponse,
    SerializedContextNode: ()=>SerializedContextNode,
    SetupIndexDependenciesRequest: ()=>SetupIndexDependenciesRequest,
    SetupIndexDependenciesResponse: ()=>SetupIndexDependenciesResponse,
    SummarizeWithReferencesRequest: ()=>SummarizeWithReferencesRequest,
    SummarizeWithReferencesResponse: ()=>SummarizeWithReferencesResponse,
    SummarizeWithReferencesResponse_Dependency: ()=>SummarizeWithReferencesResponse_Dependency,
    SummarizeWithReferencesResponse_Success: ()=>SummarizeWithReferencesResponse_Success,
    SymbolActionResultReference: ()=>SymbolActionResultReference,
    SymbolActionResults: ()=>SymbolActionResults,
    URIResolutionAttempt: ()=>URIResolutionAttempt,
    URIResolutionResult: ()=>URIResolutionResult
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-55.js");
const CreateExperimentalIndexRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreateExperimentalIndexRequest", ()=>[
        {
            no: 1,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "target_dir",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo",
            kind: "scalar",
            T: 9
        }
    ]);
const CreateExperimentalIndexResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CreateExperimentalIndexResponse", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ListExperimentalIndexFilesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListExperimentalIndexFilesRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ListExperimentalIndexFilesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListExperimentalIndexFilesResponse", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: IndexFileData,
            repeated: true
        }
    ]);
const ListenExperimentalIndexRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListenExperimentalIndexRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ListenExperimentalIndexResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ready",
            kind: "message",
            T: ListenExperimentalIndexResponse_ReadyItem,
            oneof: "item"
        },
        {
            no: 3,
            name: "register",
            kind: "message",
            T: ListenExperimentalIndexResponse_RegisterItem,
            oneof: "item"
        },
        {
            no: 4,
            name: "choose",
            kind: "message",
            T: ListenExperimentalIndexResponse_ChooseItem,
            oneof: "item"
        },
        {
            no: 5,
            name: "summarize",
            kind: "message",
            T: ListenExperimentalIndexResponse_SummarizeItem,
            oneof: "item"
        },
        {
            no: 6,
            name: "error",
            kind: "message",
            T: ListenExperimentalIndexResponse_ErrorItem,
            oneof: "item"
        }
    ]);
const ListenExperimentalIndexResponse_ReadyItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ReadyItem", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: ListenExperimentalIndexRequest
        }
    ], {
    localName: "ListenExperimentalIndexResponse_ReadyItem"
});
const ListenExperimentalIndexResponse_RegisterItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.RegisterItem", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: RegisterFileToIndexResponse
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: RegisterFileToIndexRequest
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListenExperimentalIndexResponse_RegisterItem"
});
const ListenExperimentalIndexResponse_ChooseItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ChooseItem", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: ChooseCodeReferencesResponse
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: ChooseCodeReferencesRequest
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListenExperimentalIndexResponse_ChooseItem"
});
const ListenExperimentalIndexResponse_SummarizeItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.SummarizeItem", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: SummarizeWithReferencesResponse
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: SummarizeWithReferencesRequest
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListenExperimentalIndexResponse_SummarizeItem"
});
const ListenExperimentalIndexResponse_ErrorItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ErrorItem", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "register",
            kind: "message",
            T: RegisterFileToIndexRequest,
            oneof: "request"
        },
        {
            no: 4,
            name: "choose",
            kind: "message",
            T: ChooseCodeReferencesRequest,
            oneof: "request"
        },
        {
            no: 5,
            name: "summarize",
            kind: "message",
            T: SummarizeWithReferencesRequest,
            oneof: "request"
        },
        {
            no: 6,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListenExperimentalIndexResponse_ErrorItem"
});
const RegisterFileToIndexRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RegisterFileToIndexRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "root_context_node",
            kind: "message",
            T: SerializedContextNode
        },
        {
            no: 4,
            name: "content",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const RegisterFileToIndexResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RegisterFileToIndexResponse", ()=>[
        {
            no: 1,
            name: "file_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "root_context_node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "dependency_resolution_attempts",
            kind: "message",
            T: URIResolutionAttempt,
            repeated: true
        },
        {
            no: 4,
            name: "file_data",
            kind: "message",
            T: IndexFileData
        }
    ]);
const SetupIndexDependenciesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SetupIndexDependenciesRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "file_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "dependency_resolution_results",
            kind: "message",
            T: URIResolutionResult,
            repeated: true
        }
    ]);
const SetupIndexDependenciesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SetupIndexDependenciesResponse", []);
const ComputeIndexTopoSortRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComputeIndexTopoSortRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ComputeIndexTopoSortResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComputeIndexTopoSortResponse", []);
const ChooseCodeReferencesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file",
            kind: "message",
            T: ChooseCodeReferencesRequest_FileRequest,
            oneof: "request"
        },
        {
            no: 3,
            name: "node",
            kind: "message",
            T: ChooseCodeReferencesRequest_NodeRequest,
            oneof: "request"
        },
        {
            no: 4,
            name: "recompute",
            kind: "scalar",
            T: 8
        }
    ]);
const ChooseCodeReferencesRequest_FileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest.FileRequest", ()=>[
        {
            no: 1,
            name: "file_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ChooseCodeReferencesRequest_FileRequest"
});
const ChooseCodeReferencesRequest_NodeRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest.NodeRequest", ()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ChooseCodeReferencesRequest_NodeRequest"
});
const ChooseCodeReferencesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: ChooseCodeReferencesResponse_FileResponse,
            oneof: "response"
        },
        {
            no: 2,
            name: "node",
            kind: "message",
            T: ChooseCodeReferencesResponse_NodeResponse,
            oneof: "response"
        }
    ]);
const ChooseCodeReferencesResponse_NodeResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse.NodeResponse", ()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "actions",
            kind: "message",
            T: CodeSymbolWithAction,
            repeated: true
        },
        {
            no: 3,
            name: "skipped",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "dependencies",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "ChooseCodeReferencesResponse_NodeResponse"
});
const ChooseCodeReferencesResponse_FileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse.FileResponse", ()=>[
        {
            no: 1,
            name: "file_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "node_responses",
            kind: "message",
            T: ChooseCodeReferencesResponse_NodeResponse,
            repeated: true
        }
    ], {
    localName: "ChooseCodeReferencesResponse_FileResponse"
});
const RegisterCodeReferencesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RegisterCodeReferencesRequest", ()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "references",
            kind: "message",
            T: SymbolActionResults,
            repeated: true
        }
    ]);
const RegisterCodeReferencesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RegisterCodeReferencesResponse", ()=>[
        {
            no: 1,
            name: "dependencies",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const SummarizeWithReferencesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SummarizeWithReferencesRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "recompute",
            kind: "scalar",
            T: 8
        }
    ]);
const SummarizeWithReferencesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: SummarizeWithReferencesResponse_Success,
            oneof: "response"
        },
        {
            no: 2,
            name: "dependency",
            kind: "message",
            T: SummarizeWithReferencesResponse_Dependency,
            oneof: "response"
        },
        {
            no: 3,
            name: "node_id",
            kind: "scalar",
            T: 9
        }
    ]);
const SummarizeWithReferencesResponse_Success = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse.Success", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SummarizeWithReferencesResponse_Success"
});
const SummarizeWithReferencesResponse_Dependency = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse.Dependency", ()=>[
        {
            no: 2,
            name: "nodes",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "SummarizeWithReferencesResponse_Dependency"
});
const RequestReceivedResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RequestReceivedResponse", ()=>[
        {
            no: 1,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ]);
const ReflectionData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReflectionData", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]);
const IndexFileData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.IndexFileData", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stage",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "order",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "nodes",
            kind: "message",
            T: IndexFileData_NodeData,
            repeated: true
        }
    ]);
const IndexFileData_NodeData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.IndexFileData.NodeData", ()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stage",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "IndexFileData_NodeData"
});
const SerializedContextNode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SerializedContextNode", ()=>[
        {
            no: 1,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
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
            name: "children",
            kind: "message",
            T: SerializedContextNode,
            repeated: true
        },
        {
            no: 5,
            name: "node_snippets",
            kind: "message",
            T: FileCodeSnippets
        }
    ]);
const URIResolutionAttempt = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.URIResolutionAttempt", ()=>[
        {
            no: 1,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "symbol",
            kind: "message",
            T: CodeSymbolWithAction
        }
    ]);
const URIResolutionResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.URIResolutionResult", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: URIResolutionAttempt
        },
        {
            no: 2,
            name: "resolved_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const ExtractPathsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ExtractPathsRequest", ()=>[
        {
            no: 1,
            name: "file_code_snippets",
            kind: "message",
            T: FileCodeSnippets
        }
    ]);
const ExtractPathsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ExtractPathsResponse", ()=>[
        {
            no: 1,
            name: "paths",
            kind: "message",
            T: CodeSymbolWithAction,
            repeated: true
        }
    ]);
const SymbolActionResults = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SymbolActionResults", ()=>[
        {
            no: 1,
            name: "action",
            kind: "message",
            T: CodeSymbolWithAction
        },
        {
            no: 2,
            name: "references",
            kind: "message",
            T: SymbolActionResultReference,
            repeated: true
        }
    ]);
const SymbolActionResultReference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SymbolActionResultReference", ()=>[
        {
            no: 1,
            name: "range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SimpleRange
        },
        {
            no: 2,
            name: "reference",
            kind: "message",
            T: FileCodeSnippets
        }
    ]);
const FileCodeSnippets = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FileCodeSnippets", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "snippets",
            kind: "message",
            T: CodeSnippet,
            repeated: true
        }
    ]);
const CodeSnippet = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CodeSnippet", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const CodeSymbolWithAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CodeSymbolWithAction", ()=>[
        {
            no: 1,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "symbol_start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "symbol_end_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "action",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CodeSymbolWithAction_CodeSymbolAction)
        },
        {
            no: 6,
            name: "symbol",
            kind: "scalar",
            T: 9
        }
    ]);
const CodeSymbolWithAction_CodeSymbolAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CodeSymbolWithAction.CodeSymbolAction", [
    {
        no: 0,
        name: "CODE_SYMBOL_ACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CODE_SYMBOL_ACTION_GO_TO_DEFINITION",
        localName: "GO_TO_DEFINITION"
    },
    {
        no: 2,
        name: "CODE_SYMBOL_ACTION_GO_TO_IMPLEMENTATION",
        localName: "GO_TO_IMPLEMENTATION"
    },
    {
        no: 3,
        name: "CODE_SYMBOL_ACTION_REFERENCES",
        localName: "REFERENCES"
    }
]);
