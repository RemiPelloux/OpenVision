import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { IndexFileData_NodeData, ReflectionData, init_symbolic_context_pb } from "./symbolic_context_pb.js";
import { CodeBlock, DetailedLine, EmbeddingModel, File2, ModelDetails, SimpleRange, init_utils_pb2 } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage25, __protoMessage325, ChunkingStrategy, SimilarityMetricType, PathKeyHashType, RerankerAlgorithm, DatabaseProvider, RechunkerChoice, GetHighLevelFolderDescriptionRequest, GetHighLevelFolderDescriptionRequest_Readme, GetHighLevelFolderDescriptionResponse, EnsureIndexCreatedRequest, EnsureIndexCreatedResponse, PartialPathItem, FastRepoInitHandshakeRequest, FastRepoInitHandshakeResponse, FastRepoInitHandshakeResponse_Status, LocalCodebaseFileInfo, FastRepoInitHandshakeV2Request, QueryOnlyRepositoryInfo, RepositoryCodebaseInfo, RepositoryCodebaseInfo_Status, FastRepoInitHandshakeV2Response, FastRepoInitHandshakeV2Response_Status, RepositoryCodebaseSyncStatus, RepositoryCodebaseSyncStatus_Status, FastRepoSyncCompleteRequest, FastRepoSyncCompleteResponse, SyncMerkleSubtreeRequest, SyncMerkleSubtreeResponse, SyncMerkleSubtreeResponse_Mismatch, ClientRepositoryInfo, SyncMerkleSubtreeV2Request, SyncMerkleSubtreeV2Response, SyncMerkleSubtreeV2Response_Mismatch, SyncMerkleSubtreeV2Response_PartialPathResult, FastUpdateFileRequest, FastUpdateFileRequest_UpdateType, FastUpdateFileRequest_LocalFile, FastUpdateFileResponse, FastUpdateFileResponse_Status, FastUpdateFileV2Request, FastUpdateFileV2Request_UpdateType, FastUpdateFileV2Request_LocalFile, FastUpdateFileV2Request_FileUpdate, FastUpdateFileV2Response, FastUpdateFileV2Response_Status, GetUploadLimitsRequest, GetUploadLimitsResponse, GetNumFilesToSendRequest, GetNumFilesToSendResponse, GetAvailableChunkingStrategiesRequest, GetAvailableChunkingStrategiesResponse, GetEmbeddingsRequest, GetEmbeddingsResponse, GetEmbeddingsResponse_Embedding, RemoveRepositoryRequest, RemoveRepositoryResponse, RemoveRepositoryResponse_Status, SearchRepositoryRequest, QueryOnlyRepoAccess, CodeResult, FileResult, SearchRepositoryResponse, SemSearchRequest, CodeResultWithClassificationInfo, CodeResultWithClassificationInfo_LineNumberClassification, SemSearchResponse, SemSearchResponse_SemSearchMetadata, RepositoryInfo, NodeResult, ReflectionResult, SearchRepositoryDeepContextResponse, GetLineNumberClassificationsRequest, GetLineNumberClassificationsResponse, GetCopyStatusRequest, GetCopyStatusResponse, GetCopyStatusResponse_Phase, GetCopyStatusResponse_CompletedStatus, IndexedFile, IndexedPullRequest, RepoHistoryInitHandshakeRequest, RepoHistoryInfo, RepoHistoryInitHandshakeResponse, RepoHistoryInitHandshakeResponse_Status, RepoHistorySyncOneRequest, RepoHistorySyncOneResponse, RepoHistorySyncOneResponse_Status, RepoHistorySyncCompleteRequest, RepoHistorySyncCompleteRequest_Status, RepoHistorySyncCompleteRequest_SyncedHistory, RepoHistorySyncCompleteResponse, SearchPRHistoryRequest, PRDiffChunkPointer, SearchPRHistoryResponse, SearchPRHistoryResponse_PRSearchResult, RemoveRepoHistoryRequest, RemoveRepoHistoryResponse, RemoveRepoHistoryResponse_Status, GetPRIndexingStatusRequest, GetPRIndexingStatusResponse, GetPRIndexingStatusResponse_Status;
export { ChunkingStrategy, ClientRepositoryInfo, CodeResult, CodeResultWithClassificationInfo, CodeResultWithClassificationInfo_LineNumberClassification, DatabaseProvider, EnsureIndexCreatedRequest, EnsureIndexCreatedResponse, FastRepoInitHandshakeRequest, FastRepoInitHandshakeResponse, FastRepoInitHandshakeResponse_Status, FastRepoInitHandshakeV2Request, FastRepoInitHandshakeV2Response, FastRepoInitHandshakeV2Response_Status, FastRepoSyncCompleteRequest, FastRepoSyncCompleteResponse, FastUpdateFileRequest, FastUpdateFileRequest_LocalFile, FastUpdateFileRequest_UpdateType, FastUpdateFileResponse, FastUpdateFileResponse_Status, FastUpdateFileV2Request, FastUpdateFileV2Request_FileUpdate, FastUpdateFileV2Request_LocalFile, FastUpdateFileV2Request_UpdateType, FastUpdateFileV2Response, FastUpdateFileV2Response_Status, FileResult, GetAvailableChunkingStrategiesRequest, GetAvailableChunkingStrategiesResponse, GetCopyStatusRequest, GetCopyStatusResponse, GetCopyStatusResponse_CompletedStatus, GetCopyStatusResponse_Phase, GetEmbeddingsRequest, GetEmbeddingsResponse, GetEmbeddingsResponse_Embedding, GetHighLevelFolderDescriptionRequest, GetHighLevelFolderDescriptionRequest_Readme, GetHighLevelFolderDescriptionResponse, GetLineNumberClassificationsRequest, GetLineNumberClassificationsResponse, GetNumFilesToSendRequest, GetNumFilesToSendResponse, GetPRIndexingStatusRequest, GetPRIndexingStatusResponse, GetPRIndexingStatusResponse_Status, GetUploadLimitsRequest, GetUploadLimitsResponse, IndexedFile, IndexedPullRequest, LocalCodebaseFileInfo, NodeResult, PRDiffChunkPointer, PartialPathItem, PathKeyHashType, QueryOnlyRepoAccess, QueryOnlyRepositoryInfo, RechunkerChoice, ReflectionResult, RemoveRepoHistoryRequest, RemoveRepoHistoryResponse, RemoveRepoHistoryResponse_Status, RemoveRepositoryRequest, RemoveRepositoryResponse, RemoveRepositoryResponse_Status, RepoHistoryInfo, RepoHistoryInitHandshakeRequest, RepoHistoryInitHandshakeResponse, RepoHistoryInitHandshakeResponse_Status, RepoHistorySyncCompleteRequest, RepoHistorySyncCompleteRequest_Status, RepoHistorySyncCompleteRequest_SyncedHistory, RepoHistorySyncCompleteResponse, RepoHistorySyncOneRequest, RepoHistorySyncOneResponse, RepoHistorySyncOneResponse_Status, RepositoryCodebaseInfo, RepositoryCodebaseInfo_Status, RepositoryCodebaseSyncStatus, RepositoryCodebaseSyncStatus_Status, RepositoryInfo, RerankerAlgorithm, SearchPRHistoryRequest, SearchPRHistoryResponse, SearchPRHistoryResponse_PRSearchResult, SearchRepositoryDeepContextResponse, SearchRepositoryRequest, SearchRepositoryResponse, SemSearchRequest, SemSearchResponse, SemSearchResponse_SemSearchMetadata, SimilarityMetricType, SyncMerkleSubtreeRequest, SyncMerkleSubtreeResponse, SyncMerkleSubtreeResponse_Mismatch, SyncMerkleSubtreeV2Request, SyncMerkleSubtreeV2Response, SyncMerkleSubtreeV2Response_Mismatch, SyncMerkleSubtreeV2Response_PartialPathResult, __protoMessage325, __protoPackage25 };
var __wakaru_init_repository_pb_initialized = false;
export function init_repository_pb() {
if (__wakaru_init_repository_pb_initialized) return;
__wakaru_init_repository_pb_initialized = true;
"use strict";
init_esm2();
init_utils_pb2();
init_symbolic_context_pb();
init_compact();
__protoPackage25 = "aiserver.v1.";
__protoMessage325 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage25;
    }
};
ChunkingStrategy = enumType2(proto3, __protoPackage25, "ChunkingStrategy", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DEFAULT"
    ]
], 1);
SimilarityMetricType = enumType2(proto3, __protoPackage25, "SimilarityMetricType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SIMHASH"
    ]
], 1);
PathKeyHashType = enumType2(proto3, __protoPackage25, "PathKeyHashType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SHA256"
    ]
], 1);
RerankerAlgorithm = enumType2(proto3, __protoPackage25, "RerankerAlgorithm", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LULEA"
    ],
    [
        2,
        "UMEA"
    ],
    [
        3,
        "NONE"
    ],
    [
        4,
        "LLAMA"
    ],
    [
        5,
        "STARCODER_V1"
    ],
    [
        6,
        "GPT_3_5_LOGPROBS"
    ],
    [
        7,
        "LULEA_HAIKU"
    ],
    [
        8,
        "COHERE"
    ],
    [
        9,
        "VOYAGE"
    ],
    [
        10,
        "VOYAGE_EMBEDS"
    ],
    [
        11,
        "IDENTITY"
    ],
    [
        12,
        "ADA_EMBEDS"
    ]
], 1);
DatabaseProvider = enumType2(proto3, __protoPackage25, "DatabaseProvider", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "AURORA"
    ],
    [
        2,
        "PLANETSCALE"
    ]
], 1);
RechunkerChoice = enumType2(proto3, __protoPackage25, "RechunkerChoice", [
    [
        0,
        "RECHUNKER_CHOICE_UNSPECIFIED"
    ],
    [
        1,
        "RECHUNKER_CHOICE_IDENTITY"
    ],
    [
        2,
        "RECHUNKER_CHOICE_600_TOKS"
    ],
    [
        3,
        "RECHUNKER_CHOICE_2400_TOKS"
    ],
    [
        4,
        "RECHUNKER_CHOICE_4000_TOKS"
    ]
]);
GetHighLevelFolderDescriptionRequest = class _GetHighLevelFolderDescriptionRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.readmes = [];
        this.topLevelRelativeWorkspacePaths = [];
        this.workspaceRootPath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetHighLevelFolderDescriptionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetHighLevelFolderDescriptionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetHighLevelFolderDescriptionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetHighLevelFolderDescriptionRequest, a, b2);
    }
    static $() {
        return [
            "GetHighLevelFolderDescriptionRequest|1 readmes #0*|2 top_level_relative_workspace_paths 9*|4 workspace_root_path 9",
            GetHighLevelFolderDescriptionRequest_Readme
        ];
    }
};
GetHighLevelFolderDescriptionRequest_Readme = class _GetHighLevelFolderDescriptionRequest_Readme extends __protoMessage325 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.contents = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetHighLevelFolderDescriptionRequest_Readme().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetHighLevelFolderDescriptionRequest_Readme().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetHighLevelFolderDescriptionRequest_Readme().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetHighLevelFolderDescriptionRequest_Readme, a, b2);
    }
    static $() {
        return [
            "GetHighLevelFolderDescriptionRequest.Readme|1 relative_workspace_path 9|2 contents 9"
        ];
    }
};
GetHighLevelFolderDescriptionResponse = class _GetHighLevelFolderDescriptionResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.description = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetHighLevelFolderDescriptionResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetHighLevelFolderDescriptionResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetHighLevelFolderDescriptionResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetHighLevelFolderDescriptionResponse, a, b2);
    }
    static $() {
        return [
            "GetHighLevelFolderDescriptionResponse|1 description 9"
        ];
    }
};
EnsureIndexCreatedRequest = class _EnsureIndexCreatedRequest extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnsureIndexCreatedRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnsureIndexCreatedRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnsureIndexCreatedRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EnsureIndexCreatedRequest, a, b2);
    }
    static $() {
        return [
            "EnsureIndexCreatedRequest|1 repository #0",
            RepositoryInfo
        ];
    }
};
EnsureIndexCreatedResponse = class _EnsureIndexCreatedResponse extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnsureIndexCreatedResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnsureIndexCreatedResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnsureIndexCreatedResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EnsureIndexCreatedResponse, a, b2);
    }
    static $() {
        return [
            "EnsureIndexCreatedResponse"
        ];
    }
};
PartialPathItem = class _PartialPathItem extends __protoMessage325 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.hashOfNode = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PartialPathItem().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PartialPathItem().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PartialPathItem().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PartialPathItem, a, b2);
    }
    static $() {
        return [
            "PartialPathItem|1 relative_workspace_path 9|2 hash_of_node 9"
        ];
    }
};
FastRepoInitHandshakeRequest = class _FastRepoInitHandshakeRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.rootHash = "";
        this.potentialLegacyRepoName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastRepoInitHandshakeRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastRepoInitHandshakeRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastRepoInitHandshakeRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastRepoInitHandshakeRequest, a, b2);
    }
    static $() {
        return [
            "FastRepoInitHandshakeRequest|1 repository #0|2 root_hash 9|3 potential_legacy_repo_name 9",
            RepositoryInfo
        ];
    }
};
FastRepoInitHandshakeResponse = class _FastRepoInitHandshakeResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.status = FastRepoInitHandshakeResponse_Status.UNSPECIFIED;
        this.repoName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastRepoInitHandshakeResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastRepoInitHandshakeResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastRepoInitHandshakeResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastRepoInitHandshakeResponse, a, b2);
    }
    static $() {
        return [
            "FastRepoInitHandshakeResponse|1 status #0|2 repo_name 9",
            FastRepoInitHandshakeResponse_Status
        ];
    }
};
FastRepoInitHandshakeResponse_Status = enumType2(proto3, __protoPackage25, "FastRepoInitHandshakeResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UP_TO_DATE"
    ],
    [
        2,
        "OUT_OF_SYNC"
    ],
    [
        3,
        "FAILURE"
    ],
    [
        4,
        "EMPTY"
    ]
], 1);
LocalCodebaseFileInfo = class _LocalCodebaseFileInfo extends __protoMessage325 {
    constructor(data){
        super();
        this.encryptedRelativePath = "";
        this.hash = "";
        this.children = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _LocalCodebaseFileInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _LocalCodebaseFileInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _LocalCodebaseFileInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_LocalCodebaseFileInfo, a, b2);
    }
    static $() {
        return [
            "LocalCodebaseFileInfo|1 encrypted_relative_path 9|2 hash 9|3 children #0*|4 separator 9?",
            _LocalCodebaseFileInfo
        ];
    }
};
FastRepoInitHandshakeV2Request = class _FastRepoInitHandshakeV2Request extends __protoMessage325 {
    constructor(data){
        super();
        this.rootHash = "";
        this.similarityMetricType = SimilarityMetricType.UNSPECIFIED;
        this.similarityMetric = [];
        this.pathKeyHash = "";
        this.pathKeyHashType = PathKeyHashType.UNSPECIFIED;
        this.doCopy = false;
        this.pathKey = "";
        this.returnAfterBackgroundCopyStarted = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastRepoInitHandshakeV2Request().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastRepoInitHandshakeV2Request().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastRepoInitHandshakeV2Request().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastRepoInitHandshakeV2Request, a, b2);
    }
    static $() {
        return [
            "FastRepoInitHandshakeV2Request|1 repository #0|2 root_hash 9|3 similarity_metric_type #1|4 similarity_metric 2*|5 path_key_hash 9|6 path_key_hash_type #2|7 do_copy 8|8 path_key 9|9 local_codebase_root_info #3|10 return_after_background_copy_started 8",
            RepositoryInfo,
            SimilarityMetricType,
            PathKeyHashType,
            LocalCodebaseFileInfo
        ];
    }
};
QueryOnlyRepositoryInfo = class _QueryOnlyRepositoryInfo extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _QueryOnlyRepositoryInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _QueryOnlyRepositoryInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _QueryOnlyRepositoryInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_QueryOnlyRepositoryInfo, a, b2);
    }
    static $() {
        return [
            "QueryOnlyRepositoryInfo|1 repository #0|2 query_only_repo_access #1",
            RepositoryInfo,
            QueryOnlyRepoAccess
        ];
    }
};
RepositoryCodebaseInfo = class _RepositoryCodebaseInfo extends __protoMessage325 {
    constructor(data){
        super();
        this.codebaseId = "";
        this.status = RepositoryCodebaseInfo_Status.UNSPECIFIED;
        this.copyTaskHandle = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepositoryCodebaseInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepositoryCodebaseInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepositoryCodebaseInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepositoryCodebaseInfo, a, b2);
    }
    static $() {
        return [
            "RepositoryCodebaseInfo|1 codebase_id 9|2 status #0|3 query_only_similar_repo #1|4 copy_task_handle 9",
            RepositoryCodebaseInfo_Status,
            QueryOnlyRepositoryInfo
        ];
    }
};
RepositoryCodebaseInfo_Status = enumType2(proto3, __protoPackage25, "RepositoryCodebaseInfo.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UP_TO_DATE"
    ],
    [
        2,
        "OUT_OF_SYNC"
    ],
    [
        3,
        "EMPTY"
    ],
    [
        4,
        "EMPTY_WITH_COPY_AVAILABLE"
    ],
    [
        5,
        "COPY_IN_PROGRESS"
    ]
], 1);
FastRepoInitHandshakeV2Response = class _FastRepoInitHandshakeV2Response extends __protoMessage325 {
    constructor(data){
        super();
        this.status = FastRepoInitHandshakeV2Response_Status.UNSPECIFIED;
        this.codebases = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastRepoInitHandshakeV2Response().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastRepoInitHandshakeV2Response().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastRepoInitHandshakeV2Response().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastRepoInitHandshakeV2Response, a, b2);
    }
    static $() {
        return [
            "FastRepoInitHandshakeV2Response|1 status #0|2 codebases #1*",
            FastRepoInitHandshakeV2Response_Status,
            RepositoryCodebaseInfo
        ];
    }
};
FastRepoInitHandshakeV2Response_Status = enumType2(proto3, __protoPackage25, "FastRepoInitHandshakeV2Response.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FAILURE"
    ],
    [
        2,
        "SUCCESS"
    ]
], 1);
RepositoryCodebaseSyncStatus = class _RepositoryCodebaseSyncStatus extends __protoMessage325 {
    constructor(data){
        super();
        this.codebaseId = "";
        this.status = RepositoryCodebaseSyncStatus_Status.UNSPECIFIED;
        this.similarityMetricType = SimilarityMetricType.UNSPECIFIED;
        this.similarityMetric = [];
        this.pathKeyHash = "";
        this.pathKeyHashType = PathKeyHashType.UNSPECIFIED;
        this.failedUploadCount = 0;
        this.failedDeleteCount = 0;
        this.totalUploadCount = 0;
        this.totalDeleteCount = 0;
        this.failedSubtreeCount = 0;
        this.totalSubtreeCount = 0;
        this.hitIterationLimit = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepositoryCodebaseSyncStatus().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepositoryCodebaseSyncStatus().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepositoryCodebaseSyncStatus().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepositoryCodebaseSyncStatus, a, b2);
    }
    static $() {
        return [
            "RepositoryCodebaseSyncStatus|1 codebase_id 9|2 status #0|3 similarity_metric_type #1|4 similarity_metric 2*|5 path_key_hash 9|6 path_key_hash_type #2|7 failed_upload_count 5|8 failed_delete_count 5|9 total_upload_count 5|10 total_delete_count 5|11 failed_subtree_count 5|12 total_subtree_count 5|13 hit_iteration_limit 8",
            RepositoryCodebaseSyncStatus_Status,
            SimilarityMetricType,
            PathKeyHashType
        ];
    }
};
RepositoryCodebaseSyncStatus_Status = enumType2(proto3, __protoPackage25, "RepositoryCodebaseSyncStatus.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "FAILURE"
    ]
], 1);
FastRepoSyncCompleteRequest = class _FastRepoSyncCompleteRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.codebases = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastRepoSyncCompleteRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastRepoSyncCompleteRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastRepoSyncCompleteRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastRepoSyncCompleteRequest, a, b2);
    }
    static $() {
        return [
            "FastRepoSyncCompleteRequest|1 codebases #0*",
            RepositoryCodebaseSyncStatus
        ];
    }
};
FastRepoSyncCompleteResponse = class _FastRepoSyncCompleteResponse extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastRepoSyncCompleteResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastRepoSyncCompleteResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastRepoSyncCompleteResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastRepoSyncCompleteResponse, a, b2);
    }
    static $() {
        return [
            "FastRepoSyncCompleteResponse"
        ];
    }
};
SyncMerkleSubtreeRequest = class _SyncMerkleSubtreeRequest extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SyncMerkleSubtreeRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SyncMerkleSubtreeRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SyncMerkleSubtreeRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SyncMerkleSubtreeRequest, a, b2);
    }
    static $() {
        return [
            "SyncMerkleSubtreeRequest|1 repository #0|2 local_partial_path #1",
            RepositoryInfo,
            PartialPathItem
        ];
    }
};
SyncMerkleSubtreeResponse = class _SyncMerkleSubtreeResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SyncMerkleSubtreeResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SyncMerkleSubtreeResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SyncMerkleSubtreeResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SyncMerkleSubtreeResponse, a, b2);
    }
    static $() {
        return [
            "SyncMerkleSubtreeResponse|1 match 8 result|2 mismatch #0 result",
            SyncMerkleSubtreeResponse_Mismatch
        ];
    }
};
SyncMerkleSubtreeResponse_Mismatch = class _SyncMerkleSubtreeResponse_Mismatch extends __protoMessage325 {
    constructor(data){
        super();
        this.children = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SyncMerkleSubtreeResponse_Mismatch().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SyncMerkleSubtreeResponse_Mismatch().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SyncMerkleSubtreeResponse_Mismatch().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SyncMerkleSubtreeResponse_Mismatch, a, b2);
    }
    static $() {
        return [
            "SyncMerkleSubtreeResponse.Mismatch|1 children #0*",
            PartialPathItem
        ];
    }
};
ClientRepositoryInfo = class _ClientRepositoryInfo extends __protoMessage325 {
    constructor(data){
        super();
        this.orthogonalTransformSeed = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ClientRepositoryInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ClientRepositoryInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ClientRepositoryInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ClientRepositoryInfo, a, b2);
    }
    static $() {
        return [
            "ClientRepositoryInfo|1 orthogonal_transform_seed 1"
        ];
    }
};
SyncMerkleSubtreeV2Request = class _SyncMerkleSubtreeV2Request extends __protoMessage325 {
    constructor(data){
        super();
        this.codebaseId = "";
        this.localPartialPaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SyncMerkleSubtreeV2Request().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SyncMerkleSubtreeV2Request().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SyncMerkleSubtreeV2Request().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SyncMerkleSubtreeV2Request, a, b2);
    }
    static $() {
        return [
            "SyncMerkleSubtreeV2Request|1 client_repository_info #0|2 codebase_id 9|3 local_partial_path #1|4 local_partial_paths #1*",
            ClientRepositoryInfo,
            PartialPathItem
        ];
    }
};
SyncMerkleSubtreeV2Response = class _SyncMerkleSubtreeV2Response extends __protoMessage325 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        this.results = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SyncMerkleSubtreeV2Response().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SyncMerkleSubtreeV2Response().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SyncMerkleSubtreeV2Response().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SyncMerkleSubtreeV2Response, a, b2);
    }
    static $() {
        return [
            "SyncMerkleSubtreeV2Response|1 match 8 result|2 mismatch #0 result|3 results #1*",
            SyncMerkleSubtreeV2Response_Mismatch,
            SyncMerkleSubtreeV2Response_PartialPathResult
        ];
    }
};
SyncMerkleSubtreeV2Response_Mismatch = class _SyncMerkleSubtreeV2Response_Mismatch extends __protoMessage325 {
    constructor(data){
        super();
        this.children = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SyncMerkleSubtreeV2Response_Mismatch().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SyncMerkleSubtreeV2Response_Mismatch().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SyncMerkleSubtreeV2Response_Mismatch().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SyncMerkleSubtreeV2Response_Mismatch, a, b2);
    }
    static $() {
        return [
            "SyncMerkleSubtreeV2Response.Mismatch|1 children #0*",
            PartialPathItem
        ];
    }
};
SyncMerkleSubtreeV2Response_PartialPathResult = class _SyncMerkleSubtreeV2Response_PartialPathResult extends __protoMessage325 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SyncMerkleSubtreeV2Response_PartialPathResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SyncMerkleSubtreeV2Response_PartialPathResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SyncMerkleSubtreeV2Response_PartialPathResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SyncMerkleSubtreeV2Response_PartialPathResult, a, b2);
    }
    static $() {
        return [
            "SyncMerkleSubtreeV2Response.PartialPathResult|1 match 8 result|2 mismatch #0 result|3 response_size_limit_exceeded 8 result",
            SyncMerkleSubtreeV2Response_Mismatch
        ];
    }
};
FastUpdateFileRequest = class _FastUpdateFileRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.partialPath = {
            case: void 0
        };
        this.ancestorSpline = [];
        this.updateType = FastUpdateFileRequest_UpdateType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastUpdateFileRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastUpdateFileRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastUpdateFileRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastUpdateFileRequest, a, b2);
    }
    static $() {
        return [
            "FastUpdateFileRequest|1 repository #0|2 directory #1 partial_path|3 local_file #2 partial_path|4 ancestor_spline #1*|5 update_type #3",
            RepositoryInfo,
            PartialPathItem,
            FastUpdateFileRequest_LocalFile,
            FastUpdateFileRequest_UpdateType
        ];
    }
};
FastUpdateFileRequest_UpdateType = enumType2(proto3, __protoPackage25, "FastUpdateFileRequest.UpdateType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ADD"
    ],
    [
        2,
        "DELETE"
    ],
    [
        3,
        "MODIFY"
    ]
], 1);
FastUpdateFileRequest_LocalFile = class _FastUpdateFileRequest_LocalFile extends __protoMessage325 {
    constructor(data){
        super();
        this.hash = "";
        this.unencryptedRelativeWorkspacePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastUpdateFileRequest_LocalFile().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastUpdateFileRequest_LocalFile().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastUpdateFileRequest_LocalFile().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastUpdateFileRequest_LocalFile, a, b2);
    }
    static $() {
        return [
            "FastUpdateFileRequest.LocalFile|1 file #0|2 hash 9|3 unencrypted_relative_workspace_path 9",
            File2
        ];
    }
};
FastUpdateFileResponse = class _FastUpdateFileResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.status = FastUpdateFileResponse_Status.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastUpdateFileResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastUpdateFileResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastUpdateFileResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastUpdateFileResponse, a, b2);
    }
    static $() {
        return [
            "FastUpdateFileResponse|1 status #0",
            FastUpdateFileResponse_Status
        ];
    }
};
FastUpdateFileResponse_Status = enumType2(proto3, __protoPackage25, "FastUpdateFileResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "FAILURE"
    ],
    [
        3,
        "EXPECTED_FAILURE"
    ]
], 1);
FastUpdateFileV2Request = class _FastUpdateFileV2Request extends __protoMessage325 {
    constructor(data){
        super();
        this.codebaseId = "";
        this.partialPath = {
            case: void 0
        };
        this.ancestorSpline = [];
        this.updateType = FastUpdateFileV2Request_UpdateType.UNSPECIFIED;
        this.fileUpdates = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastUpdateFileV2Request().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastUpdateFileV2Request().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastUpdateFileV2Request().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastUpdateFileV2Request, a, b2);
    }
    static $() {
        return [
            "FastUpdateFileV2Request|1 client_repository_info #0|2 codebase_id 9|3 directory #1 partial_path|4 local_file #2 partial_path|5 ancestor_spline #1*|6 update_type #3|7 file_updates #4*",
            ClientRepositoryInfo,
            PartialPathItem,
            FastUpdateFileV2Request_LocalFile,
            FastUpdateFileV2Request_UpdateType,
            FastUpdateFileV2Request_FileUpdate
        ];
    }
};
FastUpdateFileV2Request_UpdateType = enumType2(proto3, __protoPackage25, "FastUpdateFileV2Request.UpdateType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ADD"
    ],
    [
        2,
        "DELETE"
    ],
    [
        3,
        "MODIFY"
    ],
    [
        4,
        "BATCH"
    ]
], 1);
FastUpdateFileV2Request_LocalFile = class _FastUpdateFileV2Request_LocalFile extends __protoMessage325 {
    constructor(data){
        super();
        this.hash = "";
        this.unencryptedRelativeWorkspacePath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastUpdateFileV2Request_LocalFile().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastUpdateFileV2Request_LocalFile().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastUpdateFileV2Request_LocalFile().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastUpdateFileV2Request_LocalFile, a, b2);
    }
    static $() {
        return [
            "FastUpdateFileV2Request.LocalFile|1 file #0|2 hash 9|3 unencrypted_relative_workspace_path 9",
            File2
        ];
    }
};
FastUpdateFileV2Request_FileUpdate = class _FastUpdateFileV2Request_FileUpdate extends __protoMessage325 {
    constructor(data){
        super();
        this.partialPath = {
            case: void 0
        };
        this.ancestorSpline = [];
        this.updateType = FastUpdateFileV2Request_UpdateType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastUpdateFileV2Request_FileUpdate().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastUpdateFileV2Request_FileUpdate().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastUpdateFileV2Request_FileUpdate().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastUpdateFileV2Request_FileUpdate, a, b2);
    }
    static $() {
        return [
            "FastUpdateFileV2Request.FileUpdate|1 directory #0 partial_path|2 local_file #1 partial_path|3 ancestor_spline #0*|4 update_type #2",
            PartialPathItem,
            FastUpdateFileV2Request_LocalFile,
            FastUpdateFileV2Request_UpdateType
        ];
    }
};
FastUpdateFileV2Response = class _FastUpdateFileV2Response extends __protoMessage325 {
    constructor(data){
        super();
        this.status = FastUpdateFileV2Response_Status.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FastUpdateFileV2Response().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FastUpdateFileV2Response().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FastUpdateFileV2Response().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FastUpdateFileV2Response, a, b2);
    }
    static $() {
        return [
            "FastUpdateFileV2Response|1 status #0",
            FastUpdateFileV2Response_Status
        ];
    }
};
FastUpdateFileV2Response_Status = enumType2(proto3, __protoPackage25, "FastUpdateFileV2Response.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "FAILURE"
    ],
    [
        3,
        "EXPECTED_FAILURE"
    ]
], 1);
GetUploadLimitsRequest = class _GetUploadLimitsRequest extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetUploadLimitsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetUploadLimitsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetUploadLimitsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetUploadLimitsRequest, a, b2);
    }
    static $() {
        return [
            "GetUploadLimitsRequest|1 repository #0?",
            RepositoryInfo
        ];
    }
};
GetUploadLimitsResponse = class _GetUploadLimitsResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.softLimit = 0;
        this.hardLimit = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetUploadLimitsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetUploadLimitsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetUploadLimitsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetUploadLimitsResponse, a, b2);
    }
    static $() {
        return [
            "GetUploadLimitsResponse|1 soft_limit 5|2 hard_limit 5"
        ];
    }
};
GetNumFilesToSendRequest = class _GetNumFilesToSendRequest extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetNumFilesToSendRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetNumFilesToSendRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetNumFilesToSendRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetNumFilesToSendRequest, a, b2);
    }
    static $() {
        return [
            "GetNumFilesToSendRequest|1 repository #0",
            RepositoryInfo
        ];
    }
};
GetNumFilesToSendResponse = class _GetNumFilesToSendResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.numFiles = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetNumFilesToSendResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetNumFilesToSendResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetNumFilesToSendResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetNumFilesToSendResponse, a, b2);
    }
    static $() {
        return [
            "GetNumFilesToSendResponse|1 num_files 5"
        ];
    }
};
GetAvailableChunkingStrategiesRequest = class _GetAvailableChunkingStrategiesRequest extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAvailableChunkingStrategiesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAvailableChunkingStrategiesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAvailableChunkingStrategiesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAvailableChunkingStrategiesRequest, a, b2);
    }
    static $() {
        return [
            "GetAvailableChunkingStrategiesRequest|1 repository #0",
            RepositoryInfo
        ];
    }
};
GetAvailableChunkingStrategiesResponse = class _GetAvailableChunkingStrategiesResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.chunkingStrategies = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAvailableChunkingStrategiesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAvailableChunkingStrategiesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAvailableChunkingStrategiesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAvailableChunkingStrategiesResponse, a, b2);
    }
    static $() {
        return [
            "GetAvailableChunkingStrategiesResponse|1 chunking_strategies #0*",
            ChunkingStrategy
        ];
    }
};
GetEmbeddingsRequest = class _GetEmbeddingsRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.texts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetEmbeddingsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetEmbeddingsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetEmbeddingsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetEmbeddingsRequest, a, b2);
    }
    static $() {
        return [
            "GetEmbeddingsRequest|1 texts 9*"
        ];
    }
};
GetEmbeddingsResponse = class _GetEmbeddingsResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.embeddings = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetEmbeddingsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetEmbeddingsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetEmbeddingsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetEmbeddingsResponse, a, b2);
    }
    static $() {
        return [
            "GetEmbeddingsResponse|2 embeddings #0*",
            GetEmbeddingsResponse_Embedding
        ];
    }
};
GetEmbeddingsResponse_Embedding = class _GetEmbeddingsResponse_Embedding extends __protoMessage325 {
    constructor(data){
        super();
        this.embedding = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetEmbeddingsResponse_Embedding().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetEmbeddingsResponse_Embedding().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetEmbeddingsResponse_Embedding().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetEmbeddingsResponse_Embedding, a, b2);
    }
    static $() {
        return [
            "GetEmbeddingsResponse.Embedding|1 embedding 2*"
        ];
    }
};
RemoveRepositoryRequest = class _RemoveRepositoryRequest extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoveRepositoryRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoveRepositoryRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoveRepositoryRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoveRepositoryRequest, a, b2);
    }
    static $() {
        return [
            "RemoveRepositoryRequest|1 repository #0",
            RepositoryInfo
        ];
    }
};
RemoveRepositoryResponse = class _RemoveRepositoryResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.status = RemoveRepositoryResponse_Status.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoveRepositoryResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoveRepositoryResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoveRepositoryResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoveRepositoryResponse, a, b2);
    }
    static $() {
        return [
            "RemoveRepositoryResponse|1 status #0",
            RemoveRepositoryResponse_Status
        ];
    }
};
RemoveRepositoryResponse_Status = enumType2(proto3, __protoPackage25, "RemoveRepositoryResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOT_FOUND"
    ],
    [
        2,
        "NOT_AUTHORIZED"
    ],
    [
        3,
        "STARTED"
    ],
    [
        4,
        "SUCCESS"
    ]
], 1);
SearchRepositoryRequest = class _SearchRepositoryRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.query = "";
        this.topK = 0;
        this.rerank = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SearchRepositoryRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SearchRepositoryRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SearchRepositoryRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SearchRepositoryRequest, a, b2);
    }
    static $() {
        return [
            "SearchRepositoryRequest|1 query 9|2 repository #0|3 top_k 5|4 model_details #1|5 rerank 8|6 context_cache_request 8?|7 glob_filter 9?|8 not_glob_filter 9?|9 race_n_requests 5?|10 query_only_repo_access #2",
            RepositoryInfo,
            ModelDetails,
            QueryOnlyRepoAccess
        ];
    }
};
QueryOnlyRepoAccess = class _QueryOnlyRepoAccess extends __protoMessage325 {
    constructor(data){
        super();
        this.ownerAuthId = "";
        this.accessToken = "";
        this.userRepoOwner = "";
        this.userRepoName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _QueryOnlyRepoAccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _QueryOnlyRepoAccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _QueryOnlyRepoAccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_QueryOnlyRepoAccess, a, b2);
    }
    static $() {
        return [
            "QueryOnlyRepoAccess|1 owner_auth_id 9|2 access_token 9|3 user_repo_owner 9|4 user_repo_name 9"
        ];
    }
};
CodeResult = class _CodeResult extends __protoMessage325 {
    constructor(data){
        super();
        this.score = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CodeResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CodeResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CodeResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CodeResult, a, b2);
    }
    static $() {
        return [
            "CodeResult|1 code_block #0|2 score 2",
            CodeBlock
        ];
    }
};
FileResult = class _FileResult extends __protoMessage325 {
    constructor(data){
        super();
        this.score = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FileResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FileResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FileResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FileResult, a, b2);
    }
    static $() {
        return [
            "FileResult|1 file #0|2 score 2",
            File2
        ];
    }
};
SearchRepositoryResponse = class _SearchRepositoryResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.codeResults = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SearchRepositoryResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SearchRepositoryResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SearchRepositoryResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SearchRepositoryResponse, a, b2);
    }
    static $() {
        return [
            "SearchRepositoryResponse|1 code_results #0*",
            CodeResult
        ];
    }
};
SemSearchRequest = class _SemSearchRequest extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SemSearchRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SemSearchRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SemSearchRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SemSearchRequest, a, b2);
    }
    static $() {
        return [
            "SemSearchRequest|1 request #0",
            SearchRepositoryRequest
        ];
    }
};
CodeResultWithClassificationInfo = class _CodeResultWithClassificationInfo extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CodeResultWithClassificationInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CodeResultWithClassificationInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CodeResultWithClassificationInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CodeResultWithClassificationInfo, a, b2);
    }
    static $() {
        return [
            "CodeResultWithClassificationInfo|1 code_result #0|2 line_number_classification #1?",
            CodeResult,
            CodeResultWithClassificationInfo_LineNumberClassification
        ];
    }
};
CodeResultWithClassificationInfo_LineNumberClassification = class _CodeResultWithClassificationInfo_LineNumberClassification extends __protoMessage325 {
    constructor(data){
        super();
        this.queryComputedFor = "";
        this.matchedStrings = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CodeResultWithClassificationInfo_LineNumberClassification().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CodeResultWithClassificationInfo_LineNumberClassification().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CodeResultWithClassificationInfo_LineNumberClassification().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CodeResultWithClassificationInfo_LineNumberClassification, a, b2);
    }
    static $() {
        return [
            "CodeResultWithClassificationInfo.LineNumberClassification|1 detailed_line #0|2 query_computed_for 9|3 matched_strings 9*|4 highlight_range #1",
            DetailedLine,
            SimpleRange
        ];
    }
};
SemSearchResponse = class _SemSearchResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.codeResults = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SemSearchResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SemSearchResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SemSearchResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SemSearchResponse, a, b2);
    }
    static $() {
        return [
            "SemSearchResponse|1 response #0|2 metadata #1?|3 code_results #2*",
            SearchRepositoryResponse,
            SemSearchResponse_SemSearchMetadata,
            CodeResultWithClassificationInfo
        ];
    }
};
SemSearchResponse_SemSearchMetadata = class _SemSearchResponse_SemSearchMetadata extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SemSearchResponse_SemSearchMetadata().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SemSearchResponse_SemSearchMetadata().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SemSearchResponse_SemSearchMetadata().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SemSearchResponse_SemSearchMetadata, a, b2);
    }
    static $() {
        return [
            "SemSearchResponse.SemSearchMetadata|1 query_embedding_model 9?|2 server_side_latency_ms 5?|3 embed_latency_ms 5?|4 knn_latency_ms 5?"
        ];
    }
};
RepositoryInfo = class _RepositoryInfo extends __protoMessage325 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.remoteUrls = [];
        this.remoteNames = [];
        this.repoName = "";
        this.repoOwner = "";
        this.isTracked = false;
        this.isLocal = false;
        this.workspaceUri = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepositoryInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepositoryInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepositoryInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepositoryInfo, a, b2);
    }
    static $() {
        return [
            "RepositoryInfo|1 relative_workspace_path 9|2 remote_urls 9*|3 remote_names 9*|4 repo_name 9|5 repo_owner 9|6 is_tracked 8|7 is_local 8|8 num_files 5?|9 orthogonal_transform_seed 1?|10 preferred_embedding_model #0?|11 workspace_uri 9|12 preferred_db_provider #1?",
            EmbeddingModel,
            DatabaseProvider
        ];
    }
};
NodeResult = class _NodeResult extends __protoMessage325 {
    constructor(data){
        super();
        this.score = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NodeResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NodeResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NodeResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NodeResult, a, b2);
    }
    static $() {
        return [
            "NodeResult|1 node #0|2 file #1|3 score 2",
            IndexFileData_NodeData,
            File2
        ];
    }
};
ReflectionResult = class _ReflectionResult extends __protoMessage325 {
    constructor(data){
        super();
        this.score = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReflectionResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReflectionResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReflectionResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReflectionResult, a, b2);
    }
    static $() {
        return [
            "ReflectionResult|1 reflection #0|2 score 2",
            ReflectionData
        ];
    }
};
SearchRepositoryDeepContextResponse = class _SearchRepositoryDeepContextResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.topNodes = [];
        this.reflections = [];
        this.indexId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SearchRepositoryDeepContextResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SearchRepositoryDeepContextResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SearchRepositoryDeepContextResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SearchRepositoryDeepContextResponse, a, b2);
    }
    static $() {
        return [
            "SearchRepositoryDeepContextResponse|1 top_nodes #0*|2 reflections #1*|3 index_id 9",
            NodeResult,
            ReflectionResult
        ];
    }
};
GetLineNumberClassificationsRequest = class _GetLineNumberClassificationsRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.query = "";
        this.codeResults = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetLineNumberClassificationsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetLineNumberClassificationsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetLineNumberClassificationsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetLineNumberClassificationsRequest, a, b2);
    }
    static $() {
        return [
            "GetLineNumberClassificationsRequest|1 query 9|2 code_results #0*",
            CodeResult
        ];
    }
};
GetLineNumberClassificationsResponse = class _GetLineNumberClassificationsResponse extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetLineNumberClassificationsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetLineNumberClassificationsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetLineNumberClassificationsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetLineNumberClassificationsResponse, a, b2);
    }
    static $() {
        return [
            "GetLineNumberClassificationsResponse|1 classified_result #0",
            CodeResultWithClassificationInfo
        ];
    }
};
GetCopyStatusRequest = class _GetCopyStatusRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.codebaseId = "";
        this.copyTaskHandle = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetCopyStatusRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetCopyStatusRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetCopyStatusRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetCopyStatusRequest, a, b2);
    }
    static $() {
        return [
            "GetCopyStatusRequest|1 codebase_id 9|2 copy_task_handle 9"
        ];
    }
};
GetCopyStatusResponse = class _GetCopyStatusResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.phase = GetCopyStatusResponse_Phase.UNSPECIFIED;
        this.percentDone = 0;
        this.errorMessage = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetCopyStatusResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetCopyStatusResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetCopyStatusResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetCopyStatusResponse, a, b2);
    }
    static $() {
        return [
            "GetCopyStatusResponse|1 phase #0|2 percent_done 2|3 error_message 9|4 completed_status #1?",
            GetCopyStatusResponse_Phase,
            GetCopyStatusResponse_CompletedStatus
        ];
    }
};
GetCopyStatusResponse_Phase = enumType2(proto3, __protoPackage25, "GetCopyStatusResponse.Phase", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INITIALIZING"
    ],
    [
        2,
        "COPYING"
    ],
    [
        3,
        "COMPLETED"
    ],
    [
        4,
        "CREATING_SEARCH_FILTERS"
    ],
    [
        5,
        "COPYING_SEARCH_STATE"
    ],
    [
        6,
        "COPYING_TREE_STATE"
    ],
    [
        7,
        "SYNCING_COPY"
    ]
], 1);
GetCopyStatusResponse_CompletedStatus = enumType2(proto3, __protoPackage25, "GetCopyStatusResponse.CompletedStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UP_TO_DATE"
    ],
    [
        2,
        "OUT_OF_SYNC"
    ],
    [
        3,
        "FAILURE"
    ]
], 1);
IndexedFile = class _IndexedFile extends __protoMessage325 {
    constructor(data){
        super();
        this.path = "";
        this.diff = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _IndexedFile().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _IndexedFile().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _IndexedFile().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_IndexedFile, a, b2);
    }
    static $() {
        return [
            "IndexedFile|1 path 9|2 diff 9*"
        ];
    }
};
IndexedPullRequest = class _IndexedPullRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.prNumber = 0;
        this.sha = "";
        this.message = "";
        this.changedFiles = [];
        this.generation = 0;
        this.commitSecret = "";
        this.unixTimestamp = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _IndexedPullRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _IndexedPullRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _IndexedPullRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_IndexedPullRequest, a, b2);
    }
    static $() {
        return [
            "IndexedPullRequest|1 pr_number 13|2 sha 9|3 message 9|4 changed_files #0*|5 generation 13|6 commit_secret 9|7 unix_timestamp 3|8 title 9?|9 author 9?",
            IndexedFile
        ];
    }
};
RepoHistoryInitHandshakeRequest = class _RepoHistoryInitHandshakeRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.origin = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoHistoryInitHandshakeRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoHistoryInitHandshakeRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoHistoryInitHandshakeRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoHistoryInitHandshakeRequest, a, b2);
    }
    static $() {
        return [
            "RepoHistoryInitHandshakeRequest|1 repository #0|2 origin 9|3 test_origin_commit 9?|4 test_origin_commit_secret 9?|5 send_copy_candidates 8?",
            RepositoryInfo
        ];
    }
};
RepoHistoryInfo = class _RepoHistoryInfo extends __protoMessage325 {
    constructor(data){
        super();
        this.historyId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoHistoryInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoHistoryInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoHistoryInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoHistoryInfo, a, b2);
    }
    static $() {
        return [
            "RepoHistoryInfo|1 history_id 9|2 branch_name 9?|3 last_indexed_commit 9?|4 last_indexed_commit_generation 13?|5 sync_bitmap 12?"
        ];
    }
};
RepoHistoryInitHandshakeResponse = class _RepoHistoryInitHandshakeResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.status = RepoHistoryInitHandshakeResponse_Status.UNSPECIFIED;
        this.histories = [];
        this.copyCandidates = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoHistoryInitHandshakeResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoHistoryInitHandshakeResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoHistoryInitHandshakeResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoHistoryInitHandshakeResponse, a, b2);
    }
    static $() {
        return [
            "RepoHistoryInitHandshakeResponse|1 status #0|2 histories #1*|3 copy_candidate_nonce 9?|4 copy_candidates 9*|5 error_message 9?",
            RepoHistoryInitHandshakeResponse_Status,
            RepoHistoryInfo
        ];
    }
};
RepoHistoryInitHandshakeResponse_Status = enumType2(proto3, __protoPackage25, "RepoHistoryInitHandshakeResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FAILURE"
    ],
    [
        2,
        "SUCCESS"
    ],
    [
        3,
        "TEST_CANDIDATES"
    ],
    [
        4,
        "NO_INDEXING"
    ]
], 1);
RepoHistorySyncOneRequest = class _RepoHistorySyncOneRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.historyId = "";
        this.pullRequests = [];
        this.ignoreCommits = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoHistorySyncOneRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoHistorySyncOneRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoHistorySyncOneRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoHistorySyncOneRequest, a, b2);
    }
    static $() {
        return [
            "RepoHistorySyncOneRequest|1 history_id 9|2 pull_requests #0*|3 ignore_commits 13*",
            IndexedPullRequest
        ];
    }
};
RepoHistorySyncOneResponse = class _RepoHistorySyncOneResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.status = RepoHistorySyncOneResponse_Status.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoHistorySyncOneResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoHistorySyncOneResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoHistorySyncOneResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoHistorySyncOneResponse, a, b2);
    }
    static $() {
        return [
            "RepoHistorySyncOneResponse|1 status #0",
            RepoHistorySyncOneResponse_Status
        ];
    }
};
RepoHistorySyncOneResponse_Status = enumType2(proto3, __protoPackage25, "RepoHistorySyncOneResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "FAILURE"
    ],
    [
        3,
        "PARTIAL_SUCCESS"
    ],
    [
        4,
        "NOT_INDEXING"
    ]
], 1);
RepoHistorySyncCompleteRequest = class _RepoHistorySyncCompleteRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.syncedHistories = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoHistorySyncCompleteRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoHistorySyncCompleteRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoHistorySyncCompleteRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoHistorySyncCompleteRequest, a, b2);
    }
    static $() {
        return [
            "RepoHistorySyncCompleteRequest|1 synced_histories #0*",
            RepoHistorySyncCompleteRequest_SyncedHistory
        ];
    }
};
RepoHistorySyncCompleteRequest_Status = enumType2(proto3, __protoPackage25, "RepoHistorySyncCompleteRequest.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUCCESS"
    ],
    [
        2,
        "FAILURE"
    ],
    [
        3,
        "TOTAL_FAILURE"
    ],
    [
        4,
        "INTERRUPTED"
    ]
], 1);
RepoHistorySyncCompleteRequest_SyncedHistory = class _RepoHistorySyncCompleteRequest_SyncedHistory extends __protoMessage325 {
    constructor(data){
        super();
        this.historyId = "";
        this.status = RepoHistorySyncCompleteRequest_Status.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoHistorySyncCompleteRequest_SyncedHistory().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoHistorySyncCompleteRequest_SyncedHistory().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoHistorySyncCompleteRequest_SyncedHistory().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoHistorySyncCompleteRequest_SyncedHistory, a, b2);
    }
    static $() {
        return [
            "RepoHistorySyncCompleteRequest.SyncedHistory|1 history_id 9|2 status #0|3 last_indexed_commit 9?|4 last_indexed_commit_secret 9?|5 last_indexed_commit_generation 13?",
            RepoHistorySyncCompleteRequest_Status
        ];
    }
};
RepoHistorySyncCompleteResponse = class _RepoHistorySyncCompleteResponse extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoHistorySyncCompleteResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoHistorySyncCompleteResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoHistorySyncCompleteResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoHistorySyncCompleteResponse, a, b2);
    }
    static $() {
        return [
            "RepoHistorySyncCompleteResponse"
        ];
    }
};
SearchPRHistoryRequest = class _SearchPRHistoryRequest extends __protoMessage325 {
    constructor(data){
        super();
        this.query = "";
        this.topK = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SearchPRHistoryRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SearchPRHistoryRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SearchPRHistoryRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SearchPRHistoryRequest, a, b2);
    }
    static $() {
        return [
            "SearchPRHistoryRequest|1 repository #0|2 query 9|3 top_k 5",
            RepositoryInfo
        ];
    }
};
PRDiffChunkPointer = class _PRDiffChunkPointer extends __protoMessage325 {
    constructor(data){
        super();
        this.filePath = "";
        this.startLineNumberZeroIndexed = 0;
        this.endLineNumberZeroIndexedExclusive = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PRDiffChunkPointer().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PRDiffChunkPointer().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PRDiffChunkPointer().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PRDiffChunkPointer, a, b2);
    }
    static $() {
        return [
            "PRDiffChunkPointer|1 file_path 9|2 start_line_number_zero_indexed 5|3 end_line_number_zero_indexed_exclusive 5"
        ];
    }
};
SearchPRHistoryResponse = class _SearchPRHistoryResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.results = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SearchPRHistoryResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SearchPRHistoryResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SearchPRHistoryResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SearchPRHistoryResponse, a, b2);
    }
    static $() {
        return [
            "SearchPRHistoryResponse|1 results #0*|2 git_height 13?",
            SearchPRHistoryResponse_PRSearchResult
        ];
    }
};
SearchPRHistoryResponse_PRSearchResult = class _SearchPRHistoryResponse_PRSearchResult extends __protoMessage325 {
    constructor(data){
        super();
        this.commitHash = "";
        this.score = 0;
        this.diffChunks = [];
        this.changedFiles = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SearchPRHistoryResponse_PRSearchResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SearchPRHistoryResponse_PRSearchResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SearchPRHistoryResponse_PRSearchResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SearchPRHistoryResponse_PRSearchResult, a, b2);
    }
    static $() {
        return [
            "SearchPRHistoryResponse.PRSearchResult|1 commit_hash 9|2 score 2|3 diff_chunks #0*|4 title 9?|5 summary 9?|6 pr_number 13?|7 author 9?|8 date 9?|9 changed_files 9*",
            PRDiffChunkPointer
        ];
    }
};
RemoveRepoHistoryRequest = class _RemoveRepoHistoryRequest extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoveRepoHistoryRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoveRepoHistoryRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoveRepoHistoryRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoveRepoHistoryRequest, a, b2);
    }
    static $() {
        return [
            "RemoveRepoHistoryRequest|1 repository #0",
            RepositoryInfo
        ];
    }
};
RemoveRepoHistoryResponse = class _RemoveRepoHistoryResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.status = RemoveRepoHistoryResponse_Status.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoveRepoHistoryResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoveRepoHistoryResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoveRepoHistoryResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoveRepoHistoryResponse, a, b2);
    }
    static $() {
        return [
            "RemoveRepoHistoryResponse|1 status #0",
            RemoveRepoHistoryResponse_Status
        ];
    }
};
RemoveRepoHistoryResponse_Status = enumType2(proto3, __protoPackage25, "RemoveRepoHistoryResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOT_FOUND"
    ],
    [
        2,
        "NOT_AUTHORIZED"
    ],
    [
        3,
        "PARTIAL_SUCCESS"
    ],
    [
        4,
        "SUCCESS"
    ]
], 1);
GetPRIndexingStatusRequest = class _GetPRIndexingStatusRequest extends __protoMessage325 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetPRIndexingStatusRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetPRIndexingStatusRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetPRIndexingStatusRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetPRIndexingStatusRequest, a, b2);
    }
    static $() {
        return [
            "GetPRIndexingStatusRequest|1 repository #0",
            RepositoryInfo
        ];
    }
};
GetPRIndexingStatusResponse = class _GetPRIndexingStatusResponse extends __protoMessage325 {
    constructor(data){
        super();
        this.status = GetPRIndexingStatusResponse_Status.UNSPECIFIED;
        this.syncPercentage = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetPRIndexingStatusResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetPRIndexingStatusResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetPRIndexingStatusResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetPRIndexingStatusResponse, a, b2);
    }
    static $() {
        return [
            "GetPRIndexingStatusResponse|1 status #0|2 sync_percentage 2|3 last_indexed_commit 9?|4 last_indexed_generation 13?|5 total_commits 13?|6 indexing_rate 2?|7 last_updated_timestamp 3?|8 index_version 13?",
            GetPRIndexingStatusResponse_Status
        ];
    }
};
GetPRIndexingStatusResponse_Status = enumType2(proto3, __protoPackage25, "GetPRIndexingStatusResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EMPTY"
    ],
    [
        2,
        "SYNCING"
    ],
    [
        3,
        "SYNCED"
    ],
    [
        4,
        "PARTIAL"
    ]
], 1);

}
