require.r(exports);
require.d(exports, {
    AdminRemoveRepositoryRequest: ()=>AdminRemoveRepositoryRequest,
    AdminRemoveRepositoryResponse: ()=>AdminRemoveRepositoryResponse,
    BatchRepositoryStatusRequest: ()=>BatchRepositoryStatusRequest,
    BatchRepositoryStatusResponse: ()=>BatchRepositoryStatusResponse,
    ChunkingStrategy: ()=>ChunkingStrategy,
    ClientRepositoryInfo: ()=>ClientRepositoryInfo,
    CodeResult: ()=>CodeResult,
    CodeResultWithClassificationInfo: ()=>CodeResultWithClassificationInfo,
    CodeResultWithClassificationInfo_LineNumberClassification: ()=>CodeResultWithClassificationInfo_LineNumberClassification,
    DatabaseProvider: ()=>DatabaseProvider,
    EnsureIndexCreatedRequest: ()=>EnsureIndexCreatedRequest,
    EnsureIndexCreatedResponse: ()=>EnsureIndexCreatedResponse,
    FastRepoInitHandshakeRequest: ()=>FastRepoInitHandshakeRequest,
    FastRepoInitHandshakeResponse: ()=>FastRepoInitHandshakeResponse,
    FastRepoInitHandshakeResponse_Status: ()=>FastRepoInitHandshakeResponse_Status,
    FastRepoInitHandshakeV2Request: ()=>FastRepoInitHandshakeV2Request,
    FastRepoInitHandshakeV2Response: ()=>FastRepoInitHandshakeV2Response,
    FastRepoInitHandshakeV2Response_Status: ()=>FastRepoInitHandshakeV2Response_Status,
    FastRepoSyncCompleteRequest: ()=>FastRepoSyncCompleteRequest,
    FastRepoSyncCompleteResponse: ()=>FastRepoSyncCompleteResponse,
    FastUpdateFileRequest: ()=>FastUpdateFileRequest,
    FastUpdateFileRequest_LocalFile: ()=>FastUpdateFileRequest_LocalFile,
    FastUpdateFileRequest_UpdateType: ()=>FastUpdateFileRequest_UpdateType,
    FastUpdateFileResponse: ()=>FastUpdateFileResponse,
    FastUpdateFileResponse_Status: ()=>FastUpdateFileResponse_Status,
    FastUpdateFileV2Request: ()=>FastUpdateFileV2Request,
    FastUpdateFileV2Request_FileUpdate: ()=>FastUpdateFileV2Request_FileUpdate,
    FastUpdateFileV2Request_LocalFile: ()=>FastUpdateFileV2Request_LocalFile,
    FastUpdateFileV2Request_UpdateType: ()=>FastUpdateFileV2Request_UpdateType,
    FastUpdateFileV2Response: ()=>FastUpdateFileV2Response,
    FastUpdateFileV2Response_Status: ()=>FastUpdateFileV2Response_Status,
    FileResult: ()=>FileResult,
    FinishUpdateRepoRequest: ()=>FinishUpdateRepoRequest,
    FinishUpdateRepoResponse: ()=>FinishUpdateRepoResponse,
    FinishUpdateRepoResponse_Status: ()=>FinishUpdateRepoResponse_Status,
    FinishUploadRepoRequest: ()=>FinishUploadRepoRequest,
    FinishUploadRepoResponse: ()=>FinishUploadRepoResponse,
    FinishUploadRepoResponse_Status: ()=>FinishUploadRepoResponse_Status,
    GetAvailableChunkingStrategiesRequest: ()=>GetAvailableChunkingStrategiesRequest,
    GetAvailableChunkingStrategiesResponse: ()=>GetAvailableChunkingStrategiesResponse,
    GetCopyStatusRequest: ()=>GetCopyStatusRequest,
    GetCopyStatusResponse: ()=>GetCopyStatusResponse,
    GetCopyStatusResponse_CompletedStatus: ()=>GetCopyStatusResponse_CompletedStatus,
    GetCopyStatusResponse_Phase: ()=>GetCopyStatusResponse_Phase,
    GetEmbeddingsRequest: ()=>GetEmbeddingsRequest,
    GetEmbeddingsResponse: ()=>GetEmbeddingsResponse,
    GetEmbeddingsResponse_Embedding: ()=>GetEmbeddingsResponse_Embedding,
    GetHighLevelFolderDescriptionRequest: ()=>GetHighLevelFolderDescriptionRequest,
    GetHighLevelFolderDescriptionRequest_Readme: ()=>GetHighLevelFolderDescriptionRequest_Readme,
    GetHighLevelFolderDescriptionResponse: ()=>GetHighLevelFolderDescriptionResponse,
    GetLineNumberClassificationsRequest: ()=>GetLineNumberClassificationsRequest,
    GetLineNumberClassificationsResponse: ()=>GetLineNumberClassificationsResponse,
    GetNumFilesToSendRequest: ()=>GetNumFilesToSendRequest,
    GetNumFilesToSendResponse: ()=>GetNumFilesToSendResponse,
    GetPRIndexingStatusRequest: ()=>GetPRIndexingStatusRequest,
    GetPRIndexingStatusResponse: ()=>GetPRIndexingStatusResponse,
    GetPRIndexingStatusResponse_Status: ()=>GetPRIndexingStatusResponse_Status,
    GetUploadLimitsRequest: ()=>GetUploadLimitsRequest,
    GetUploadLimitsResponse: ()=>GetUploadLimitsResponse,
    IndexedFile: ()=>IndexedFile,
    IndexedPullRequest: ()=>IndexedPullRequest,
    IsLoggedInRequest: ()=>IsLoggedInRequest,
    IsLoggedInResponse: ()=>IsLoggedInResponse,
    LocalCodebaseFileInfo: ()=>LocalCodebaseFileInfo,
    LoginRequest: ()=>LoginRequest,
    LoginResponse: ()=>LoginResponse,
    LogoutRequest: ()=>LogoutRequest,
    LogoutResponse: ()=>LogoutResponse,
    LogoutResponse_Status: ()=>LogoutResponse_Status,
    NodeResult: ()=>NodeResult,
    PRDiffChunkPointer: ()=>PRDiffChunkPointer,
    PartialPathItem: ()=>PartialPathItem,
    PathKeyHashType: ()=>PathKeyHashType,
    PollLoginRequest: ()=>PollLoginRequest,
    PollLoginResponse: ()=>PollLoginResponse,
    PollLoginResponse_Status: ()=>PollLoginResponse_Status,
    QueryOnlyRepoAccess: ()=>QueryOnlyRepoAccess,
    QueryOnlyRepositoryInfo: ()=>QueryOnlyRepositoryInfo,
    RechunkerChoice: ()=>RechunkerChoice,
    ReflectionResult: ()=>ReflectionResult,
    RemoveRepoHistoryRequest: ()=>RemoveRepoHistoryRequest,
    RemoveRepoHistoryResponse: ()=>RemoveRepoHistoryResponse,
    RemoveRepoHistoryResponse_Status: ()=>RemoveRepoHistoryResponse_Status,
    RemoveRepositoryRequest: ()=>RemoveRepositoryRequest,
    RemoveRepositoryResponse: ()=>RemoveRepositoryResponse,
    RemoveRepositoryResponse_Status: ()=>RemoveRepositoryResponse_Status,
    RepoHistoryInfo: ()=>RepoHistoryInfo,
    RepoHistoryInitHandshakeRequest: ()=>RepoHistoryInitHandshakeRequest,
    RepoHistoryInitHandshakeResponse: ()=>RepoHistoryInitHandshakeResponse,
    RepoHistoryInitHandshakeResponse_Status: ()=>RepoHistoryInitHandshakeResponse_Status,
    RepoHistorySyncCompleteRequest: ()=>RepoHistorySyncCompleteRequest,
    RepoHistorySyncCompleteRequest_Status: ()=>RepoHistorySyncCompleteRequest_Status,
    RepoHistorySyncCompleteRequest_SyncedHistory: ()=>RepoHistorySyncCompleteRequest_SyncedHistory,
    RepoHistorySyncCompleteResponse: ()=>RepoHistorySyncCompleteResponse,
    RepoHistorySyncOneRequest: ()=>RepoHistorySyncOneRequest,
    RepoHistorySyncOneResponse: ()=>RepoHistorySyncOneResponse,
    RepoHistorySyncOneResponse_Status: ()=>RepoHistorySyncOneResponse_Status,
    RepositoriesRequest: ()=>RepositoriesRequest,
    RepositoriesResponse: ()=>RepositoriesResponse,
    RepositoryCodebaseInfo: ()=>RepositoryCodebaseInfo,
    RepositoryCodebaseInfo_Status: ()=>RepositoryCodebaseInfo_Status,
    RepositoryCodebaseSyncStatus: ()=>RepositoryCodebaseSyncStatus,
    RepositoryCodebaseSyncStatus_Status: ()=>RepositoryCodebaseSyncStatus_Status,
    RepositoryInfo: ()=>RepositoryInfo,
    RepositoryStatusRequest: ()=>RepositoryStatusRequest,
    RepositoryStatusResponse: ()=>RepositoryStatusResponse,
    RepositoryStatusResponse_AuthTokenNotAuthorized: ()=>RepositoryStatusResponse_AuthTokenNotAuthorized,
    RepositoryStatusResponse_AuthTokenNotFound: ()=>RepositoryStatusResponse_AuthTokenNotFound,
    RepositoryStatusResponse_EmptyMessage: ()=>RepositoryStatusResponse_EmptyMessage,
    RepositoryStatusResponse_NotFound: ()=>RepositoryStatusResponse_NotFound,
    RepositoryStatusResponse_NotSubscribed: ()=>RepositoryStatusResponse_NotSubscribed,
    RepositoryStatusResponse_Synced: ()=>RepositoryStatusResponse_Synced,
    RepositoryStatusResponse_Syncing: ()=>RepositoryStatusResponse_Syncing,
    RepositoryStatusResponse_TooBig: ()=>RepositoryStatusResponse_TooBig,
    RepositoryStatusResponse_Uploading: ()=>RepositoryStatusResponse_Uploading,
    RerankerAlgorithm: ()=>RerankerAlgorithm,
    SearchPRHistoryRequest: ()=>SearchPRHistoryRequest,
    SearchPRHistoryResponse: ()=>SearchPRHistoryResponse,
    SearchPRHistoryResponse_PRSearchResult: ()=>SearchPRHistoryResponse_PRSearchResult,
    SearchRepositoryDeepContextRequest: ()=>SearchRepositoryDeepContextRequest,
    SearchRepositoryDeepContextResponse: ()=>SearchRepositoryDeepContextResponse,
    SearchRepositoryRequest: ()=>SearchRepositoryRequest,
    SearchRepositoryResponse: ()=>SearchRepositoryResponse,
    SemSearchRequest: ()=>SemSearchRequest,
    SemSearchResponse: ()=>SemSearchResponse,
    SemSearchResponse_SemSearchMetadata: ()=>SemSearchResponse_SemSearchMetadata,
    SimilarityMetricType: ()=>SimilarityMetricType,
    StartUpdateRepoRequest: ()=>StartUpdateRepoRequest,
    StartUpdateRepoResponse: ()=>StartUpdateRepoResponse,
    StartUpdateRepoResponse_Status: ()=>StartUpdateRepoResponse_Status,
    StartUploadRepoRequest: ()=>StartUploadRepoRequest,
    StartUploadRepoResponse: ()=>StartUploadRepoResponse,
    StartUploadRepoResponse_Status: ()=>StartUploadRepoResponse_Status,
    SubscribeRepositoryRequest: ()=>SubscribeRepositoryRequest,
    SubscribeRepositoryResponse: ()=>SubscribeRepositoryResponse,
    SubscribeRepositoryResponse_Status: ()=>SubscribeRepositoryResponse_Status,
    SyncMerkleSubtreeRequest: ()=>SyncMerkleSubtreeRequest,
    SyncMerkleSubtreeResponse: ()=>SyncMerkleSubtreeResponse,
    SyncMerkleSubtreeResponse_Mismatch: ()=>SyncMerkleSubtreeResponse_Mismatch,
    SyncMerkleSubtreeV2Request: ()=>SyncMerkleSubtreeV2Request,
    SyncMerkleSubtreeV2Response: ()=>SyncMerkleSubtreeV2Response,
    SyncMerkleSubtreeV2Response_Mismatch: ()=>SyncMerkleSubtreeV2Response_Mismatch,
    SyncMerkleSubtreeV2Response_PartialPathResult: ()=>SyncMerkleSubtreeV2Response_PartialPathResult,
    SyncRepositoryRequest: ()=>SyncRepositoryRequest,
    SyncRepositoryResponse: ()=>SyncRepositoryResponse,
    UnsubscribeRepositoryRequest: ()=>UnsubscribeRepositoryRequest,
    UnsubscribeRepositoryResponse: ()=>UnsubscribeRepositoryResponse,
    UnsubscribeRepositoryResponse_Status: ()=>UnsubscribeRepositoryResponse_Status,
    UpdateFileRequest: ()=>UpdateFileRequest,
    UpdateFileResponse: ()=>UpdateFileResponse,
    UpdateFileResponse_Status: ()=>UpdateFileResponse_Status,
    UpgradeScopeRequest: ()=>UpgradeScopeRequest,
    UpgradeScopeResponse: ()=>UpgradeScopeResponse,
    UpgradeScopeResponse_Status: ()=>UpgradeScopeResponse_Status,
    UploadFileRequest: ()=>UploadFileRequest,
    UploadFileResponse: ()=>UploadFileResponse,
    UploadFileResponse_Status: ()=>UploadFileResponse_Status,
    UploadRepositoryRequest: ()=>UploadRepositoryRequest,
    UploadRepositoryResponse: ()=>UploadRepositoryResponse,
    UploadRepositoryResponse_Status: ()=>UploadRepositoryResponse_Status
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-55.js");
var _symbolic_context_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-92.js");
const ChunkingStrategy = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ChunkingStrategy", [
    {
        no: 0,
        name: "CHUNKING_STRATEGY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHUNKING_STRATEGY_DEFAULT",
        localName: "DEFAULT"
    }
]);
const SimilarityMetricType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.SimilarityMetricType", [
    {
        no: 0,
        name: "SIMILARITY_METRIC_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SIMILARITY_METRIC_TYPE_SIMHASH",
        localName: "SIMHASH"
    }
]);
const PathKeyHashType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.PathKeyHashType", [
    {
        no: 0,
        name: "PATH_KEY_HASH_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PATH_KEY_HASH_TYPE_SHA256",
        localName: "SHA256"
    }
]);
const RerankerAlgorithm = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RerankerAlgorithm", [
    {
        no: 0,
        name: "RERANKER_ALGORITHM_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RERANKER_ALGORITHM_LULEA",
        localName: "LULEA"
    },
    {
        no: 2,
        name: "RERANKER_ALGORITHM_UMEA",
        localName: "UMEA"
    },
    {
        no: 3,
        name: "RERANKER_ALGORITHM_NONE",
        localName: "NONE"
    },
    {
        no: 4,
        name: "RERANKER_ALGORITHM_LLAMA",
        localName: "LLAMA"
    },
    {
        no: 5,
        name: "RERANKER_ALGORITHM_STARCODER_V1",
        localName: "STARCODER_V1"
    },
    {
        no: 6,
        name: "RERANKER_ALGORITHM_GPT_3_5_LOGPROBS",
        localName: "GPT_3_5_LOGPROBS"
    },
    {
        no: 7,
        name: "RERANKER_ALGORITHM_LULEA_HAIKU",
        localName: "LULEA_HAIKU"
    },
    {
        no: 8,
        name: "RERANKER_ALGORITHM_COHERE",
        localName: "COHERE"
    },
    {
        no: 9,
        name: "RERANKER_ALGORITHM_VOYAGE",
        localName: "VOYAGE"
    },
    {
        no: 10,
        name: "RERANKER_ALGORITHM_VOYAGE_EMBEDS",
        localName: "VOYAGE_EMBEDS"
    },
    {
        no: 11,
        name: "RERANKER_ALGORITHM_IDENTITY",
        localName: "IDENTITY"
    },
    {
        no: 12,
        name: "RERANKER_ALGORITHM_ADA_EMBEDS",
        localName: "ADA_EMBEDS"
    }
]);
const DatabaseProvider = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.DatabaseProvider", [
    {
        no: 0,
        name: "DATABASE_PROVIDER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DATABASE_PROVIDER_AURORA",
        localName: "AURORA"
    },
    {
        no: 2,
        name: "DATABASE_PROVIDER_PLANETSCALE",
        localName: "PLANETSCALE"
    }
]);
const RechunkerChoice = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RechunkerChoice", [
    {
        no: 0,
        name: "RECHUNKER_CHOICE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "RECHUNKER_CHOICE_IDENTITY"
    },
    {
        no: 2,
        name: "RECHUNKER_CHOICE_600_TOKS"
    },
    {
        no: 3,
        name: "RECHUNKER_CHOICE_2400_TOKS"
    },
    {
        no: 4,
        name: "RECHUNKER_CHOICE_4000_TOKS"
    }
]);
const GetHighLevelFolderDescriptionRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetHighLevelFolderDescriptionRequest", ()=>[
        {
            no: 1,
            name: "readmes",
            kind: "message",
            T: GetHighLevelFolderDescriptionRequest_Readme,
            repeated: true
        },
        {
            no: 2,
            name: "top_level_relative_workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        }
    ]);
const GetHighLevelFolderDescriptionRequest_Readme = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetHighLevelFolderDescriptionRequest.Readme", ()=>[
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
        }
    ], {
    localName: "GetHighLevelFolderDescriptionRequest_Readme"
});
const GetHighLevelFolderDescriptionResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetHighLevelFolderDescriptionResponse", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]);
const EnsureIndexCreatedRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EnsureIndexCreatedRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const EnsureIndexCreatedResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EnsureIndexCreatedResponse", []);
const PartialPathItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PartialPathItem", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "hash_of_node",
            kind: "scalar",
            T: 9
        }
    ]);
const FastRepoInitHandshakeRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastRepoInitHandshakeRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "root_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "potential_legacy_repo_name",
            kind: "scalar",
            T: 9
        }
    ]);
const FastRepoInitHandshakeResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastRepoInitHandshakeResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FastRepoInitHandshakeResponse_Status)
        },
        {
            no: 2,
            name: "repo_name",
            kind: "scalar",
            T: 9
        }
    ]);
const FastRepoInitHandshakeResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FastRepoInitHandshakeResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_UP_TO_DATE",
        localName: "UP_TO_DATE"
    },
    {
        no: 2,
        name: "STATUS_OUT_OF_SYNC",
        localName: "OUT_OF_SYNC"
    },
    {
        no: 3,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 4,
        name: "STATUS_EMPTY",
        localName: "EMPTY"
    }
]);
const LocalCodebaseFileInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LocalCodebaseFileInfo", ()=>[
        {
            no: 1,
            name: "encrypted_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "children",
            kind: "message",
            T: LocalCodebaseFileInfo,
            repeated: true
        },
        {
            no: 4,
            name: "separator",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const FastRepoInitHandshakeV2Request = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastRepoInitHandshakeV2Request", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "root_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "similarity_metric_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SimilarityMetricType)
        },
        {
            no: 4,
            name: "similarity_metric",
            kind: "scalar",
            T: 2,
            repeated: true
        },
        {
            no: 5,
            name: "path_key_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "path_key_hash_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PathKeyHashType)
        },
        {
            no: 7,
            name: "do_copy",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "path_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "local_codebase_root_info",
            kind: "message",
            T: LocalCodebaseFileInfo
        },
        {
            no: 10,
            name: "return_after_background_copy_started",
            kind: "scalar",
            T: 8
        }
    ]);
const QueryOnlyRepositoryInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.QueryOnlyRepositoryInfo", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "query_only_repo_access",
            kind: "message",
            T: QueryOnlyRepoAccess
        }
    ]);
const RepositoryCodebaseInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryCodebaseInfo", ()=>[
        {
            no: 1,
            name: "codebase_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RepositoryCodebaseInfo_Status)
        },
        {
            no: 3,
            name: "query_only_similar_repo",
            kind: "message",
            T: QueryOnlyRepositoryInfo
        },
        {
            no: 4,
            name: "copy_task_handle",
            kind: "scalar",
            T: 9
        }
    ]);
const RepositoryCodebaseInfo_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RepositoryCodebaseInfo.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_UP_TO_DATE",
        localName: "UP_TO_DATE"
    },
    {
        no: 2,
        name: "STATUS_OUT_OF_SYNC",
        localName: "OUT_OF_SYNC"
    },
    {
        no: 3,
        name: "STATUS_EMPTY",
        localName: "EMPTY"
    },
    {
        no: 4,
        name: "STATUS_EMPTY_WITH_COPY_AVAILABLE",
        localName: "EMPTY_WITH_COPY_AVAILABLE"
    },
    {
        no: 5,
        name: "STATUS_COPY_IN_PROGRESS",
        localName: "COPY_IN_PROGRESS"
    }
]);
const FastRepoInitHandshakeV2Response = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastRepoInitHandshakeV2Response", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FastRepoInitHandshakeV2Response_Status)
        },
        {
            no: 2,
            name: "codebases",
            kind: "message",
            T: RepositoryCodebaseInfo,
            repeated: true
        }
    ]);
const FastRepoInitHandshakeV2Response_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FastRepoInitHandshakeV2Response.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 2,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    }
]);
const RepositoryCodebaseSyncStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryCodebaseSyncStatus", ()=>[
        {
            no: 1,
            name: "codebase_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RepositoryCodebaseSyncStatus_Status)
        },
        {
            no: 3,
            name: "similarity_metric_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SimilarityMetricType)
        },
        {
            no: 4,
            name: "similarity_metric",
            kind: "scalar",
            T: 2,
            repeated: true
        },
        {
            no: 5,
            name: "path_key_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "path_key_hash_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PathKeyHashType)
        },
        {
            no: 7,
            name: "failed_upload_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "failed_delete_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "total_upload_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 10,
            name: "total_delete_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 11,
            name: "failed_subtree_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 12,
            name: "total_subtree_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 13,
            name: "hit_iteration_limit",
            kind: "scalar",
            T: 8
        }
    ]);
const RepositoryCodebaseSyncStatus_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RepositoryCodebaseSyncStatus.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    }
]);
const FastRepoSyncCompleteRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastRepoSyncCompleteRequest", ()=>[
        {
            no: 1,
            name: "codebases",
            kind: "message",
            T: RepositoryCodebaseSyncStatus,
            repeated: true
        }
    ]);
const FastRepoSyncCompleteResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastRepoSyncCompleteResponse", []);
const SyncMerkleSubtreeRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SyncMerkleSubtreeRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "local_partial_path",
            kind: "message",
            T: PartialPathItem
        }
    ]);
const SyncMerkleSubtreeResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SyncMerkleSubtreeResponse", ()=>[
        {
            no: 1,
            name: "match",
            kind: "scalar",
            T: 8,
            oneof: "result"
        },
        {
            no: 2,
            name: "mismatch",
            kind: "message",
            T: SyncMerkleSubtreeResponse_Mismatch,
            oneof: "result"
        }
    ]);
const SyncMerkleSubtreeResponse_Mismatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SyncMerkleSubtreeResponse.Mismatch", ()=>[
        {
            no: 1,
            name: "children",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        }
    ], {
    localName: "SyncMerkleSubtreeResponse_Mismatch"
});
const ClientRepositoryInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ClientRepositoryInfo", ()=>[
        {
            no: 1,
            name: "orthogonal_transform_seed",
            kind: "scalar",
            T: 1
        }
    ]);
const SyncMerkleSubtreeV2Request = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Request", ()=>[
        {
            no: 1,
            name: "client_repository_info",
            kind: "message",
            T: ClientRepositoryInfo
        },
        {
            no: 2,
            name: "codebase_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "local_partial_path",
            kind: "message",
            T: PartialPathItem
        },
        {
            no: 4,
            name: "local_partial_paths",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        }
    ]);
const SyncMerkleSubtreeV2Response = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Response", ()=>[
        {
            no: 1,
            name: "match",
            kind: "scalar",
            T: 8,
            oneof: "result"
        },
        {
            no: 2,
            name: "mismatch",
            kind: "message",
            T: SyncMerkleSubtreeV2Response_Mismatch,
            oneof: "result"
        },
        {
            no: 3,
            name: "results",
            kind: "message",
            T: SyncMerkleSubtreeV2Response_PartialPathResult,
            repeated: true
        }
    ]);
const SyncMerkleSubtreeV2Response_Mismatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Response.Mismatch", ()=>[
        {
            no: 1,
            name: "children",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        }
    ], {
    localName: "SyncMerkleSubtreeV2Response_Mismatch"
});
const SyncMerkleSubtreeV2Response_PartialPathResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Response.PartialPathResult", ()=>[
        {
            no: 1,
            name: "match",
            kind: "scalar",
            T: 8,
            oneof: "result"
        },
        {
            no: 2,
            name: "mismatch",
            kind: "message",
            T: SyncMerkleSubtreeV2Response_Mismatch,
            oneof: "result"
        },
        {
            no: 3,
            name: "response_size_limit_exceeded",
            kind: "scalar",
            T: 8,
            oneof: "result"
        }
    ], {
    localName: "SyncMerkleSubtreeV2Response_PartialPathResult"
});
const FastUpdateFileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastUpdateFileRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "directory",
            kind: "message",
            T: PartialPathItem,
            oneof: "partial_path"
        },
        {
            no: 3,
            name: "local_file",
            kind: "message",
            T: FastUpdateFileRequest_LocalFile,
            oneof: "partial_path"
        },
        {
            no: 4,
            name: "ancestor_spline",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        },
        {
            no: 5,
            name: "update_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FastUpdateFileRequest_UpdateType)
        }
    ]);
const FastUpdateFileRequest_UpdateType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FastUpdateFileRequest.UpdateType", [
    {
        no: 0,
        name: "UPDATE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "UPDATE_TYPE_ADD",
        localName: "ADD"
    },
    {
        no: 2,
        name: "UPDATE_TYPE_DELETE",
        localName: "DELETE"
    },
    {
        no: 3,
        name: "UPDATE_TYPE_MODIFY",
        localName: "MODIFY"
    }
]);
const FastUpdateFileRequest_LocalFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastUpdateFileRequest.LocalFile", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.File
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "unencrypted_relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "FastUpdateFileRequest_LocalFile"
});
const FastUpdateFileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastUpdateFileResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FastUpdateFileResponse_Status)
        }
    ]);
const FastUpdateFileResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FastUpdateFileResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "STATUS_EXPECTED_FAILURE",
        localName: "EXPECTED_FAILURE"
    }
]);
const FastUpdateFileV2Request = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastUpdateFileV2Request", ()=>[
        {
            no: 1,
            name: "client_repository_info",
            kind: "message",
            T: ClientRepositoryInfo
        },
        {
            no: 2,
            name: "codebase_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "directory",
            kind: "message",
            T: PartialPathItem,
            oneof: "partial_path"
        },
        {
            no: 4,
            name: "local_file",
            kind: "message",
            T: FastUpdateFileV2Request_LocalFile,
            oneof: "partial_path"
        },
        {
            no: 5,
            name: "ancestor_spline",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        },
        {
            no: 6,
            name: "update_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FastUpdateFileV2Request_UpdateType)
        },
        {
            no: 7,
            name: "file_updates",
            kind: "message",
            T: FastUpdateFileV2Request_FileUpdate,
            repeated: true
        }
    ]);
const FastUpdateFileV2Request_UpdateType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FastUpdateFileV2Request.UpdateType", [
    {
        no: 0,
        name: "UPDATE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "UPDATE_TYPE_ADD",
        localName: "ADD"
    },
    {
        no: 2,
        name: "UPDATE_TYPE_DELETE",
        localName: "DELETE"
    },
    {
        no: 3,
        name: "UPDATE_TYPE_MODIFY",
        localName: "MODIFY"
    },
    {
        no: 4,
        name: "UPDATE_TYPE_BATCH",
        localName: "BATCH"
    }
]);
const FastUpdateFileV2Request_LocalFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastUpdateFileV2Request.LocalFile", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.File
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "unencrypted_relative_workspace_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "FastUpdateFileV2Request_LocalFile"
});
const FastUpdateFileV2Request_FileUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastUpdateFileV2Request.FileUpdate", ()=>[
        {
            no: 1,
            name: "directory",
            kind: "message",
            T: PartialPathItem,
            oneof: "partial_path"
        },
        {
            no: 2,
            name: "local_file",
            kind: "message",
            T: FastUpdateFileV2Request_LocalFile,
            oneof: "partial_path"
        },
        {
            no: 3,
            name: "ancestor_spline",
            kind: "message",
            T: PartialPathItem,
            repeated: true
        },
        {
            no: 4,
            name: "update_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FastUpdateFileV2Request_UpdateType)
        }
    ], {
    localName: "FastUpdateFileV2Request_FileUpdate"
});
const FastUpdateFileV2Response = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FastUpdateFileV2Response", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FastUpdateFileV2Response_Status)
        }
    ]);
const FastUpdateFileV2Response_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FastUpdateFileV2Response.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "STATUS_EXPECTED_FAILURE",
        localName: "EXPECTED_FAILURE"
    }
]);
const GetUploadLimitsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetUploadLimitsRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo,
            opt: true
        }
    ]);
const GetUploadLimitsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetUploadLimitsResponse", ()=>[
        {
            no: 1,
            name: "soft_limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "hard_limit",
            kind: "scalar",
            T: 5
        }
    ]);
const GetNumFilesToSendRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetNumFilesToSendRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const GetNumFilesToSendResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetNumFilesToSendResponse", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]);
const GetAvailableChunkingStrategiesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetAvailableChunkingStrategiesRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const GetAvailableChunkingStrategiesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetAvailableChunkingStrategiesResponse", ()=>[
        {
            no: 1,
            name: "chunking_strategies",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ChunkingStrategy),
            repeated: true
        }
    ]);
const GetEmbeddingsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetEmbeddingsRequest", ()=>[
        {
            no: 1,
            name: "texts",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const GetEmbeddingsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetEmbeddingsResponse", ()=>[
        {
            no: 2,
            name: "embeddings",
            kind: "message",
            T: GetEmbeddingsResponse_Embedding,
            repeated: true
        }
    ]);
const GetEmbeddingsResponse_Embedding = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetEmbeddingsResponse.Embedding", ()=>[
        {
            no: 1,
            name: "embedding",
            kind: "scalar",
            T: 2,
            repeated: true
        }
    ], {
    localName: "GetEmbeddingsResponse_Embedding"
});
const AdminRemoveRepositoryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AdminRemoveRepositoryRequest", ()=>[
        {
            no: 1,
            name: "codebase_id",
            kind: "scalar",
            T: 5
        }
    ]);
const AdminRemoveRepositoryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AdminRemoveRepositoryResponse", []);
const SyncRepositoryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SyncRepositoryRequest", ()=>[
        {
            no: 1,
            name: "codebase_id",
            kind: "scalar",
            T: 5
        }
    ]);
const SyncRepositoryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SyncRepositoryResponse", []);
const StartUploadRepoRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StartUploadRepoRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const StartUploadRepoResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StartUploadRepoResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(StartUploadRepoResponse_Status)
        },
        {
            no: 2,
            name: "seen_files",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const StartUploadRepoResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.StartUploadRepoResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "STATUS_ALREADY_EXISTS",
        localName: "ALREADY_EXISTS"
    }
]);
const UploadFileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UploadFileRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.File
        },
        {
            no: 3,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "queue_id",
            kind: "scalar",
            T: 9
        }
    ]);
const UploadFileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UploadFileResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(UploadFileResponse_Status)
        }
    ]);
const UploadFileResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.UploadFileResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "STATUS_EXPECTED_FAILURE",
        localName: "EXPECTED_FAILURE"
    },
    {
        no: 4,
        name: "STATUS_QUEUE_BACKED_UP",
        localName: "QUEUE_BACKED_UP"
    }
]);
const FinishUploadRepoRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FinishUploadRepoRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const FinishUploadRepoResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FinishUploadRepoResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FinishUploadRepoResponse_Status)
        }
    ]);
const FinishUploadRepoResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FinishUploadRepoResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    }
]);
const StartUpdateRepoRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StartUpdateRepoRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const StartUpdateRepoResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StartUpdateRepoResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(StartUpdateRepoResponse_Status)
        }
    ]);
const StartUpdateRepoResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.StartUpdateRepoResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 4,
        name: "STATUS_ALREADY_SYNCING",
        localName: "ALREADY_SYNCING"
    }
]);
const UpdateFileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateFileRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "added_file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.File
        },
        {
            no: 3,
            name: "deleted_file_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "queue_id",
            kind: "scalar",
            T: 9
        }
    ]);
const UpdateFileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateFileResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(UpdateFileResponse_Status)
        }
    ]);
const UpdateFileResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.UpdateFileResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "STATUS_EXPECTED_FAILURE",
        localName: "EXPECTED_FAILURE"
    },
    {
        no: 4,
        name: "STATUS_QUEUE_BACKED_UP",
        localName: "QUEUE_BACKED_UP"
    }
]);
const FinishUpdateRepoRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FinishUpdateRepoRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const FinishUpdateRepoResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FinishUpdateRepoResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FinishUpdateRepoResponse_Status)
        }
    ]);
const FinishUpdateRepoResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FinishUpdateRepoResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    }
]);
const BatchRepositoryStatusRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BatchRepositoryStatusRequest", ()=>[
        {
            no: 1,
            name: "requests",
            kind: "message",
            T: RepositoryStatusRequest,
            repeated: true
        }
    ]);
const BatchRepositoryStatusResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BatchRepositoryStatusResponse", ()=>[
        {
            no: 1,
            name: "responses",
            kind: "message",
            T: RepositoryStatusResponse,
            repeated: true
        }
    ]);
const UnsubscribeRepositoryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UnsubscribeRepositoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const UnsubscribeRepositoryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UnsubscribeRepositoryResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(UnsubscribeRepositoryResponse_Status)
        }
    ]);
const UnsubscribeRepositoryResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.UnsubscribeRepositoryResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 2,
        name: "STATUS_NOT_SUBSCRIBED",
        localName: "NOT_SUBSCRIBED"
    },
    {
        no: 3,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    }
]);
const LogoutRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LogoutRequest", []);
const LogoutResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LogoutResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(LogoutResponse_Status)
        }
    ]);
const LogoutResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.LogoutResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "STATUS_NOT_LOGGED_IN",
        localName: "NOT_LOGGED_IN"
    }
]);
const RemoveRepositoryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RemoveRepositoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const RemoveRepositoryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RemoveRepositoryResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RemoveRepositoryResponse_Status)
        }
    ]);
const RemoveRepositoryResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RemoveRepositoryResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 2,
        name: "STATUS_NOT_AUTHORIZED",
        localName: "NOT_AUTHORIZED"
    },
    {
        no: 3,
        name: "STATUS_STARTED",
        localName: "STARTED"
    },
    {
        no: 4,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    }
]);
const SubscribeRepositoryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SubscribeRepositoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const SubscribeRepositoryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SubscribeRepositoryResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SubscribeRepositoryResponse_Status)
        }
    ]);
const SubscribeRepositoryResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.SubscribeRepositoryResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 2,
        name: "STATUS_NOT_AUTHORIZED",
        localName: "NOT_AUTHORIZED"
    },
    {
        no: 3,
        name: "STATUS_ALREADY_SUBSCRIBED",
        localName: "ALREADY_SUBSCRIBED"
    },
    {
        no: 4,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    }
]);
const SearchRepositoryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchRepositoryRequest", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 3,
            name: "top_k",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "model_details",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.ModelDetails
        },
        {
            no: 5,
            name: "rerank",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "context_cache_request",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "glob_filter",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "not_glob_filter",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "race_n_requests",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 10,
            name: "query_only_repo_access",
            kind: "message",
            T: QueryOnlyRepoAccess
        }
    ]);
const QueryOnlyRepoAccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.QueryOnlyRepoAccess", ()=>[
        {
            no: 1,
            name: "owner_auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "access_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "user_repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "user_repo_name",
            kind: "scalar",
            T: 9
        }
    ]);
const CodeResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CodeResult", ()=>[
        {
            no: 1,
            name: "code_block",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CodeBlock
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
const FileResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FileResult", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.File
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
const SearchRepositoryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchRepositoryResponse", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: CodeResult,
            repeated: true
        }
    ]);
const SemSearchRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SemSearchRequest", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: SearchRepositoryRequest
        }
    ]);
const CodeResultWithClassificationInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CodeResultWithClassificationInfo", ()=>[
        {
            no: 1,
            name: "code_result",
            kind: "message",
            T: CodeResult
        },
        {
            no: 2,
            name: "line_number_classification",
            kind: "message",
            T: CodeResultWithClassificationInfo_LineNumberClassification,
            opt: true
        }
    ]);
const CodeResultWithClassificationInfo_LineNumberClassification = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CodeResultWithClassificationInfo.LineNumberClassification", ()=>[
        {
            no: 1,
            name: "detailed_line",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.DetailedLine
        },
        {
            no: 2,
            name: "query_computed_for",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "matched_strings",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "highlight_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SimpleRange
        }
    ], {
    localName: "CodeResultWithClassificationInfo_LineNumberClassification"
});
const SemSearchResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SemSearchResponse", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: SearchRepositoryResponse
        },
        {
            no: 2,
            name: "metadata",
            kind: "message",
            T: SemSearchResponse_SemSearchMetadata,
            opt: true
        },
        {
            no: 3,
            name: "code_results",
            kind: "message",
            T: CodeResultWithClassificationInfo,
            repeated: true
        }
    ]);
const SemSearchResponse_SemSearchMetadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SemSearchResponse.SemSearchMetadata", ()=>[
        {
            no: 1,
            name: "query_embedding_model",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "server_side_latency_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "embed_latency_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "knn_latency_ms",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "SemSearchResponse_SemSearchMetadata"
});
const LoginRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LoginRequest", []);
const LoginResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LoginResponse", ()=>[
        {
            no: 1,
            name: "login_url",
            kind: "scalar",
            T: 9
        }
    ]);
const IsLoggedInRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.IsLoggedInRequest", []);
const IsLoggedInResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.IsLoggedInResponse", ()=>[
        {
            no: 1,
            name: "logged_in",
            kind: "scalar",
            T: 8
        }
    ]);
const PollLoginRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PollLoginRequest", []);
const PollLoginResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PollLoginResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PollLoginResponse_Status)
        }
    ]);
const PollLoginResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.PollLoginResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_LOGGED_IN",
        localName: "LOGGED_IN"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "STATUS_CHECKING",
        localName: "CHECKING"
    }
]);
const UpgradeScopeRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpgradeScopeRequest", ()=>[
        {
            no: 2,
            name: "scopes",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const UpgradeScopeResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpgradeScopeResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(UpgradeScopeResponse_Status)
        }
    ]);
const UpgradeScopeResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.UpgradeScopeResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    }
]);
const RepositoriesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoriesRequest", []);
const RepositoriesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoriesResponse", ()=>[
        {
            no: 1,
            name: "repositories",
            kind: "message",
            T: RepositoryInfo,
            repeated: true
        }
    ]);
const UploadRepositoryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UploadRepositoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const UploadRepositoryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UploadRepositoryResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(UploadRepositoryResponse_Status)
        }
    ]);
const UploadRepositoryResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.UploadRepositoryResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "STATUS_AUTH_TOKEN_BAD_PERMISSIONS",
        localName: "AUTH_TOKEN_BAD_PERMISSIONS"
    },
    {
        no: 4,
        name: "STATUS_ALREADY_EXISTS",
        localName: "ALREADY_EXISTS"
    }
]);
const RepositoryStatusRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryStatusRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const RepositoryStatusResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryStatusResponse", ()=>[
        {
            no: 1,
            name: "not_found",
            kind: "message",
            T: RepositoryStatusResponse_NotFound,
            oneof: "status"
        },
        {
            no: 2,
            name: "uploading",
            kind: "message",
            T: RepositoryStatusResponse_Uploading,
            oneof: "status"
        },
        {
            no: 3,
            name: "syncing",
            kind: "message",
            T: RepositoryStatusResponse_Syncing,
            oneof: "status"
        },
        {
            no: 4,
            name: "synced",
            kind: "message",
            T: RepositoryStatusResponse_Synced,
            oneof: "status"
        },
        {
            no: 5,
            name: "not_subscribed",
            kind: "message",
            T: RepositoryStatusResponse_NotSubscribed,
            oneof: "status"
        },
        {
            no: 6,
            name: "too_big",
            kind: "message",
            T: RepositoryStatusResponse_TooBig,
            oneof: "status"
        },
        {
            no: 7,
            name: "auth_token_not_found",
            kind: "message",
            T: RepositoryStatusResponse_AuthTokenNotFound,
            oneof: "status"
        },
        {
            no: 8,
            name: "auth_token_not_authorized",
            kind: "message",
            T: RepositoryStatusResponse_AuthTokenNotAuthorized,
            oneof: "status"
        },
        {
            no: 10,
            name: "error_uploading",
            kind: "message",
            T: RepositoryStatusResponse_EmptyMessage,
            oneof: "status"
        },
        {
            no: 11,
            name: "error_syncing",
            kind: "message",
            T: RepositoryStatusResponse_EmptyMessage,
            oneof: "status"
        },
        {
            no: 9,
            name: "is_owner",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const RepositoryStatusResponse_NotFound = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryStatusResponse.NotFound", [], {
    localName: "RepositoryStatusResponse_NotFound"
});
const RepositoryStatusResponse_NotSubscribed = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryStatusResponse.NotSubscribed", [], {
    localName: "RepositoryStatusResponse_NotSubscribed"
});
const RepositoryStatusResponse_Uploading = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryStatusResponse.Uploading", ()=>[
        {
            no: 1,
            name: "progress",
            kind: "scalar",
            T: 2
        }
    ], {
    localName: "RepositoryStatusResponse_Uploading"
});
const RepositoryStatusResponse_Syncing = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryStatusResponse.Syncing", ()=>[
        {
            no: 1,
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "old_commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "new_commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "progress",
            kind: "scalar",
            T: 2
        }
    ], {
    localName: "RepositoryStatusResponse_Syncing"
});
const RepositoryStatusResponse_Synced = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryStatusResponse.Synced", ()=>[
        {
            no: 1,
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "RepositoryStatusResponse_Synced"
});
const RepositoryStatusResponse_TooBig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryStatusResponse.TooBig", ()=>[
        {
            no: 1,
            name: "max_size",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "RepositoryStatusResponse_TooBig"
});
const RepositoryStatusResponse_AuthTokenNotFound = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryStatusResponse.AuthTokenNotFound", [], {
    localName: "RepositoryStatusResponse_AuthTokenNotFound"
});
const RepositoryStatusResponse_AuthTokenNotAuthorized = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryStatusResponse.AuthTokenNotAuthorized", [], {
    localName: "RepositoryStatusResponse_AuthTokenNotAuthorized"
});
const RepositoryStatusResponse_EmptyMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryStatusResponse.EmptyMessage", [], {
    localName: "RepositoryStatusResponse_EmptyMessage"
});
const RepositoryInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepositoryInfo", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "remote_urls",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "remote_names",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "is_tracked",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "is_local",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "num_files",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 9,
            name: "orthogonal_transform_seed",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 10,
            name: "preferred_embedding_model",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.EmbeddingModel),
            opt: true
        },
        {
            no: 11,
            name: "workspace_uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "preferred_db_provider",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(DatabaseProvider),
            opt: true
        }
    ]);
const SearchRepositoryDeepContextRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchRepositoryDeepContextRequest", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "top_k",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "top_reflections_k",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "index_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "use_model_on_files",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "use_reflections",
            kind: "scalar",
            T: 8
        }
    ]);
const NodeResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.NodeResult", ()=>[
        {
            no: 1,
            name: "node",
            kind: "message",
            T: _symbolic_context_pb_js__WEBPACK_IMPORTED_MODULE_2__.IndexFileData_NodeData
        },
        {
            no: 2,
            name: "file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.File
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
const ReflectionResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReflectionResult", ()=>[
        {
            no: 1,
            name: "reflection",
            kind: "message",
            T: _symbolic_context_pb_js__WEBPACK_IMPORTED_MODULE_2__.ReflectionData
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
const SearchRepositoryDeepContextResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchRepositoryDeepContextResponse", ()=>[
        {
            no: 1,
            name: "top_nodes",
            kind: "message",
            T: NodeResult,
            repeated: true
        },
        {
            no: 2,
            name: "reflections",
            kind: "message",
            T: ReflectionResult,
            repeated: true
        },
        {
            no: 3,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]);
const GetLineNumberClassificationsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetLineNumberClassificationsRequest", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "code_results",
            kind: "message",
            T: CodeResult,
            repeated: true
        }
    ]);
const GetLineNumberClassificationsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetLineNumberClassificationsResponse", ()=>[
        {
            no: 1,
            name: "classified_result",
            kind: "message",
            T: CodeResultWithClassificationInfo
        }
    ]);
const GetCopyStatusRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetCopyStatusRequest", ()=>[
        {
            no: 1,
            name: "codebase_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "copy_task_handle",
            kind: "scalar",
            T: 9
        }
    ]);
const GetCopyStatusResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetCopyStatusResponse", ()=>[
        {
            no: 1,
            name: "phase",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(GetCopyStatusResponse_Phase)
        },
        {
            no: 2,
            name: "percent_done",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "completed_status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(GetCopyStatusResponse_CompletedStatus),
            opt: true
        }
    ]);
const GetCopyStatusResponse_Phase = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.GetCopyStatusResponse.Phase", [
    {
        no: 0,
        name: "PHASE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PHASE_INITIALIZING",
        localName: "INITIALIZING"
    },
    {
        no: 2,
        name: "PHASE_COPYING",
        localName: "COPYING"
    },
    {
        no: 3,
        name: "PHASE_COMPLETED",
        localName: "COMPLETED"
    },
    {
        no: 4,
        name: "PHASE_CREATING_SEARCH_FILTERS",
        localName: "CREATING_SEARCH_FILTERS"
    },
    {
        no: 5,
        name: "PHASE_COPYING_SEARCH_STATE",
        localName: "COPYING_SEARCH_STATE"
    },
    {
        no: 6,
        name: "PHASE_COPYING_TREE_STATE",
        localName: "COPYING_TREE_STATE"
    },
    {
        no: 7,
        name: "PHASE_SYNCING_COPY",
        localName: "SYNCING_COPY"
    }
]);
const GetCopyStatusResponse_CompletedStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.GetCopyStatusResponse.CompletedStatus", [
    {
        no: 0,
        name: "COMPLETED_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "COMPLETED_STATUS_UP_TO_DATE",
        localName: "UP_TO_DATE"
    },
    {
        no: 2,
        name: "COMPLETED_STATUS_OUT_OF_SYNC",
        localName: "OUT_OF_SYNC"
    },
    {
        no: 3,
        name: "COMPLETED_STATUS_FAILURE",
        localName: "FAILURE"
    }
]);
const IndexedFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.IndexedFile", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const IndexedPullRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.IndexedPullRequest", ()=>[
        {
            no: 1,
            name: "pr_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "changed_files",
            kind: "message",
            T: IndexedFile,
            repeated: true
        },
        {
            no: 5,
            name: "generation",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "commit_secret",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "unix_timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 8,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RepoHistoryInitHandshakeRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepoHistoryInitHandshakeRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "origin",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "test_origin_commit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "test_origin_commit_secret",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "send_copy_candidates",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const RepoHistoryInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepoHistoryInfo", ()=>[
        {
            no: 1,
            name: "history_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "last_indexed_commit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "last_indexed_commit_generation",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 5,
            name: "sync_bitmap",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
const RepoHistoryInitHandshakeResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepoHistoryInitHandshakeResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RepoHistoryInitHandshakeResponse_Status)
        },
        {
            no: 2,
            name: "histories",
            kind: "message",
            T: RepoHistoryInfo,
            repeated: true
        },
        {
            no: 3,
            name: "copy_candidate_nonce",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "copy_candidates",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RepoHistoryInitHandshakeResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RepoHistoryInitHandshakeResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 2,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 3,
        name: "STATUS_TEST_CANDIDATES",
        localName: "TEST_CANDIDATES"
    },
    {
        no: 4,
        name: "STATUS_NO_INDEXING",
        localName: "NO_INDEXING"
    }
]);
const RepoHistorySyncOneRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepoHistorySyncOneRequest", ()=>[
        {
            no: 1,
            name: "history_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pull_requests",
            kind: "message",
            T: IndexedPullRequest,
            repeated: true
        },
        {
            no: 3,
            name: "ignore_commits",
            kind: "scalar",
            T: 13,
            repeated: true
        }
    ]);
const RepoHistorySyncOneResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepoHistorySyncOneResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RepoHistorySyncOneResponse_Status)
        }
    ]);
const RepoHistorySyncOneResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RepoHistorySyncOneResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "STATUS_PARTIAL_SUCCESS",
        localName: "PARTIAL_SUCCESS"
    },
    {
        no: 4,
        name: "STATUS_NOT_INDEXING",
        localName: "NOT_INDEXING"
    }
]);
const RepoHistorySyncCompleteRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepoHistorySyncCompleteRequest", ()=>[
        {
            no: 1,
            name: "synced_histories",
            kind: "message",
            T: RepoHistorySyncCompleteRequest_SyncedHistory,
            repeated: true
        }
    ]);
const RepoHistorySyncCompleteRequest_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RepoHistorySyncCompleteRequest.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "STATUS_TOTAL_FAILURE",
        localName: "TOTAL_FAILURE"
    },
    {
        no: 4,
        name: "STATUS_INTERRUPTED",
        localName: "INTERRUPTED"
    }
]);
const RepoHistorySyncCompleteRequest_SyncedHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepoHistorySyncCompleteRequest.SyncedHistory", ()=>[
        {
            no: 1,
            name: "history_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RepoHistorySyncCompleteRequest_Status)
        },
        {
            no: 3,
            name: "last_indexed_commit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "last_indexed_commit_secret",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "last_indexed_commit_generation",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ], {
    localName: "RepoHistorySyncCompleteRequest_SyncedHistory"
});
const RepoHistorySyncCompleteResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepoHistorySyncCompleteResponse", []);
const SearchPRHistoryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchPRHistoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        },
        {
            no: 2,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "top_k",
            kind: "scalar",
            T: 5
        }
    ]);
const PRDiffChunkPointer = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PRDiffChunkPointer", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number_zero_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number_zero_indexed_exclusive",
            kind: "scalar",
            T: 5
        }
    ]);
const SearchPRHistoryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchPRHistoryResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: SearchPRHistoryResponse_PRSearchResult,
            repeated: true
        },
        {
            no: 2,
            name: "git_height",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const SearchPRHistoryResponse_PRSearchResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchPRHistoryResponse.PRSearchResult", ()=>[
        {
            no: 1,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "diff_chunks",
            kind: "message",
            T: PRDiffChunkPointer,
            repeated: true
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "pr_number",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 7,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "date",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "changed_files",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "SearchPRHistoryResponse_PRSearchResult"
});
const RemoveRepoHistoryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RemoveRepoHistoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const RemoveRepoHistoryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RemoveRepoHistoryResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RemoveRepoHistoryResponse_Status)
        }
    ]);
const RemoveRepoHistoryResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RemoveRepoHistoryResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 2,
        name: "STATUS_NOT_AUTHORIZED",
        localName: "NOT_AUTHORIZED"
    },
    {
        no: 3,
        name: "STATUS_PARTIAL_SUCCESS",
        localName: "PARTIAL_SUCCESS"
    },
    {
        no: 4,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    }
]);
const GetPRIndexingStatusRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPRIndexingStatusRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: RepositoryInfo
        }
    ]);
const GetPRIndexingStatusResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetPRIndexingStatusResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(GetPRIndexingStatusResponse_Status)
        },
        {
            no: 2,
            name: "sync_percentage",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "last_indexed_commit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "last_indexed_generation",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 5,
            name: "total_commits",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 6,
            name: "indexing_rate",
            kind: "scalar",
            T: 2,
            opt: true
        },
        {
            no: 7,
            name: "last_updated_timestamp",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 8,
            name: "index_version",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const GetPRIndexingStatusResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.GetPRIndexingStatusResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_EMPTY",
        localName: "EMPTY"
    },
    {
        no: 2,
        name: "STATUS_SYNCING",
        localName: "SYNCING"
    },
    {
        no: 3,
        name: "STATUS_SYNCED",
        localName: "SYNCED"
    },
    {
        no: 4,
        name: "STATUS_PARTIAL",
        localName: "PARTIAL"
    }
]);
