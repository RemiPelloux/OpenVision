import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { EnsureIndexCreatedRequest, EnsureIndexCreatedResponse, FastRepoInitHandshakeRequest, FastRepoInitHandshakeResponse, FastRepoInitHandshakeV2Request, FastRepoInitHandshakeV2Response, FastRepoSyncCompleteRequest, FastRepoSyncCompleteResponse, FastUpdateFileRequest, FastUpdateFileResponse, FastUpdateFileV2Request, FastUpdateFileV2Response, GetAvailableChunkingStrategiesRequest, GetAvailableChunkingStrategiesResponse, GetCopyStatusRequest, GetCopyStatusResponse, GetEmbeddingsRequest, GetEmbeddingsResponse, GetHighLevelFolderDescriptionRequest, GetHighLevelFolderDescriptionResponse, GetLineNumberClassificationsRequest, GetLineNumberClassificationsResponse, GetNumFilesToSendRequest, GetNumFilesToSendResponse, GetPRIndexingStatusRequest, GetPRIndexingStatusResponse, GetUploadLimitsRequest, GetUploadLimitsResponse, RemoveRepoHistoryRequest, RemoveRepoHistoryResponse, RemoveRepositoryRequest, RemoveRepositoryResponse, RepoHistoryInitHandshakeRequest, RepoHistoryInitHandshakeResponse, RepoHistorySyncCompleteRequest, RepoHistorySyncCompleteResponse, RepoHistorySyncOneRequest, RepoHistorySyncOneResponse, SearchPRHistoryRequest, SearchPRHistoryResponse, SearchRepositoryRequest, SearchRepositoryResponse, SemSearchRequest, SemSearchResponse, SyncMerkleSubtreeRequest, SyncMerkleSubtreeResponse, SyncMerkleSubtreeV2Request, SyncMerkleSubtreeV2Response, init_repository_pb } from "./repository_pb.js";
var RepositoryService, GitIndexService;
export { GitIndexService, RepositoryService };
var __wakaru_init_repository_connect_initialized = false;
export function init_repository_connect() {
if (__wakaru_init_repository_connect_initialized) return;
__wakaru_init_repository_connect_initialized = true;
"use strict";
init_repository_pb();
init_esm2();
RepositoryService = {
    typeName: "aiserver.v1.RepositoryService",
    methods: {
        fastRepoInitHandshake: {
            name: "FastRepoInitHandshake",
            I: FastRepoInitHandshakeRequest,
            O: FastRepoInitHandshakeResponse,
            kind: MethodKind.Unary
        },
        syncMerkleSubtree: {
            name: "SyncMerkleSubtree",
            I: SyncMerkleSubtreeRequest,
            O: SyncMerkleSubtreeResponse,
            kind: MethodKind.Unary
        },
        fastUpdateFile: {
            name: "FastUpdateFile",
            I: FastUpdateFileRequest,
            O: FastUpdateFileResponse,
            kind: MethodKind.Unary
        },
        searchRepositoryV2: {
            name: "SearchRepositoryV2",
            I: SearchRepositoryRequest,
            O: SearchRepositoryResponse,
            kind: MethodKind.Unary
        },
        removeRepositoryV2: {
            name: "RemoveRepositoryV2",
            I: RemoveRepositoryRequest,
            O: RemoveRepositoryResponse,
            kind: MethodKind.Unary
        },
        fastRepoInitHandshakeV2: {
            name: "FastRepoInitHandshakeV2",
            I: FastRepoInitHandshakeV2Request,
            O: FastRepoInitHandshakeV2Response,
            kind: MethodKind.Unary
        },
        syncMerkleSubtreeV2: {
            name: "SyncMerkleSubtreeV2",
            I: SyncMerkleSubtreeV2Request,
            O: SyncMerkleSubtreeV2Response,
            kind: MethodKind.Unary
        },
        fastUpdateFileV2: {
            name: "FastUpdateFileV2",
            I: FastUpdateFileV2Request,
            O: FastUpdateFileV2Response,
            kind: MethodKind.Unary
        },
        fastRepoSyncComplete: {
            name: "FastRepoSyncComplete",
            I: FastRepoSyncCompleteRequest,
            O: FastRepoSyncCompleteResponse,
            kind: MethodKind.Unary
        },
        semSearchFast: {
            name: "SemSearchFast",
            I: SemSearchRequest,
            O: SemSearchResponse,
            kind: MethodKind.ServerStreaming
        },
        semSearch: {
            name: "SemSearch",
            I: SemSearchRequest,
            O: SemSearchResponse,
            kind: MethodKind.ServerStreaming
        },
        ensureIndexCreated: {
            name: "EnsureIndexCreated",
            I: EnsureIndexCreatedRequest,
            O: EnsureIndexCreatedResponse,
            kind: MethodKind.Unary
        },
        getHighLevelFolderDescription: {
            name: "GetHighLevelFolderDescription",
            I: GetHighLevelFolderDescriptionRequest,
            O: GetHighLevelFolderDescriptionResponse,
            kind: MethodKind.Unary
        },
        getEmbeddings: {
            name: "GetEmbeddings",
            I: GetEmbeddingsRequest,
            O: GetEmbeddingsResponse,
            kind: MethodKind.Unary
        },
        getUploadLimits: {
            name: "GetUploadLimits",
            I: GetUploadLimitsRequest,
            O: GetUploadLimitsResponse,
            kind: MethodKind.Unary
        },
        getNumFilesToSend: {
            name: "GetNumFilesToSend",
            I: GetNumFilesToSendRequest,
            O: GetNumFilesToSendResponse,
            kind: MethodKind.Unary
        },
        getAvailableChunkingStrategies: {
            name: "GetAvailableChunkingStrategies",
            I: GetAvailableChunkingStrategiesRequest,
            O: GetAvailableChunkingStrategiesResponse,
            kind: MethodKind.Unary
        },
        getLineNumberClassifications: {
            name: "GetLineNumberClassifications",
            I: GetLineNumberClassificationsRequest,
            O: GetLineNumberClassificationsResponse,
            kind: MethodKind.ServerStreaming
        },
        getCopyStatus: {
            name: "GetCopyStatus",
            I: GetCopyStatusRequest,
            O: GetCopyStatusResponse,
            kind: MethodKind.Unary
        }
    }
};
GitIndexService = {
    typeName: "aiserver.v1.GitIndexService",
    methods: {
        repoHistoryInitHandshake: {
            name: "RepoHistoryInitHandshake",
            I: RepoHistoryInitHandshakeRequest,
            O: RepoHistoryInitHandshakeResponse,
            kind: MethodKind.Unary
        },
        repoHistorySyncOne: {
            name: "RepoHistorySyncOne",
            I: RepoHistorySyncOneRequest,
            O: RepoHistorySyncOneResponse,
            kind: MethodKind.Unary
        },
        repoHistorySyncComplete: {
            name: "RepoHistorySyncComplete",
            I: RepoHistorySyncCompleteRequest,
            O: RepoHistorySyncCompleteResponse,
            kind: MethodKind.Unary
        },
        removeRepoHistory: {
            name: "RemoveRepoHistory",
            I: RemoveRepoHistoryRequest,
            O: RemoveRepoHistoryResponse,
            kind: MethodKind.Unary
        },
        searchPRHistory: {
            name: "SearchPRHistory",
            I: SearchPRHistoryRequest,
            O: SearchPRHistoryResponse,
            kind: MethodKind.Unary
        },
        getPRIndexingStatus: {
            name: "GetPRIndexingStatus",
            I: GetPRIndexingStatusRequest,
            O: GetPRIndexingStatusResponse,
            kind: MethodKind.Unary
        }
    }
};

}
