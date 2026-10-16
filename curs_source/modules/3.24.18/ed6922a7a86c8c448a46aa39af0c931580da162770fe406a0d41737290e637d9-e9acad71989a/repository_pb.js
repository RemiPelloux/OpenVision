import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { Kmu, hBs, ngu } from "./symbolic_context_pb.js";
import { x } from "./tslib.es6.js";
import { KSi, ffe, hu, kD, x3, xf, zP } from "./utils_pb.js";
var igu, gBs, fBs, rgu, sgu, ogu, agu, cgu, lgu, ugu, dgu, Dve, hgu, pgu, mgu, vBs, ggu, fgu, vgu, _gu, bgu, ygu, Sgu, kgu, wgu, Cgu, Tgu, Egu, xgu, _Bs, Igu, Agu, bBs, Rgu, Dgu, Mgu, Pgu, Lgu, Ngu, Ogu, yBs, SBs, Fgu, Bgu, Ugu, $gu, Hgu, Wgu, Ggu, Vgu, jgu, qgu, zgu, Kgu, kBs, Ygu, Xgu, wBs, GUt, YO, Zgu, CBs, TBs, EBs, Qgu, xBs, Jgu, w1, efu, tfu, nfu, ifu, rfu, sfu, ofu, afu, cfu, lfu, ufu, dfu, hfu, pfu, mfu, gfu, ffu, vfu, _fu, bfu, yfu, Sfu, kfu, wfu, Cfu, Tfu, Efu, xfu, Ifu, Afu, Rfu, Dfu;
export { $gu, Afu, Agu, Bgu, CBs, Cfu, Cgu, Dfu, Dgu, Dve, EBs, Efu, Egu, Fgu, GUt, Ggu, Hgu, Ifu, Igu, Jgu, Kgu, Lgu, Mgu, Ngu, Ogu, Pgu, Qgu, Rfu, Rgu, SBs, Sfu, Sgu, TBs, Tfu, Tgu, Ugu, Vgu, Wgu, Xgu, YO, Ygu, Zgu, _Bs, _fu, _gu, afu, agu, bBs, bfu, bgu, cfu, cgu, dfu, dgu, efu, fBs, ffu, fgu, gBs, gfu, ggu, hfu, hgu, ifu, igu, jgu, kBs, kfu, kgu, lfu, lgu, mfu, mgu, nfu, ofu, ogu, pfu, pgu, qgu, rfu, rgu, sfu, sgu, tfu, ufu, ugu, vBs, vfu, vgu, w1, wBs, wfu, wgu, xBs, xfu, xgu, yBs, yfu, ygu, zgu };
var __wakaru_nX_initialized = false;
export function nX() {
if (__wakaru_nX_initialized) return;
__wakaru_nX_initialized = true;
"use strict";
x(), bi(), hu(), ngu(), igu = k.makeEnum("aiserver.v1.ChunkingStrategy", [
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
]), gBs = k.makeEnum("aiserver.v1.SimilarityMetricType", [
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
]), fBs = k.makeEnum("aiserver.v1.PathKeyHashType", [
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
]), rgu = k.makeEnum("aiserver.v1.RerankerAlgorithm", [
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
]), sgu = k.makeEnum("aiserver.v1.DatabaseProvider", [
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
]), ogu = k.makeEnum("aiserver.v1.RechunkerChoice", [
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
]), agu = k.makeMessageType("aiserver.v1.GetHighLevelFolderDescriptionRequest", ()=>[
        {
            no: 1,
            name: "readmes",
            kind: "message",
            T: cgu,
            repeated: !0
        },
        {
            no: 2,
            name: "top_level_relative_workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        }
    ]), cgu = k.makeMessageType("aiserver.v1.GetHighLevelFolderDescriptionRequest.Readme", ()=>[
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
}), lgu = k.makeMessageType("aiserver.v1.GetHighLevelFolderDescriptionResponse", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]), ugu = k.makeMessageType("aiserver.v1.EnsureIndexCreatedRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
        }
    ]), dgu = k.makeMessageType("aiserver.v1.EnsureIndexCreatedResponse", []), Dve = k.makeMessageType("aiserver.v1.PartialPathItem", ()=>[
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
    ]), hgu = k.makeMessageType("aiserver.v1.FastRepoInitHandshakeRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
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
    ]), pgu = k.makeMessageType("aiserver.v1.FastRepoInitHandshakeResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(mgu)
        },
        {
            no: 2,
            name: "repo_name",
            kind: "scalar",
            T: 9
        }
    ]), mgu = k.makeEnum("aiserver.v1.FastRepoInitHandshakeResponse.Status", [
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
]), vBs = k.makeMessageType("aiserver.v1.LocalCodebaseFileInfo", ()=>[
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
            T: vBs,
            repeated: !0
        },
        {
            no: 4,
            name: "separator",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ggu = k.makeMessageType("aiserver.v1.FastRepoInitHandshakeV2Request", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
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
            T: k.getEnumType(gBs)
        },
        {
            no: 4,
            name: "similarity_metric",
            kind: "scalar",
            T: 2,
            repeated: !0
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
            T: k.getEnumType(fBs)
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
            T: vBs
        },
        {
            no: 10,
            name: "return_after_background_copy_started",
            kind: "scalar",
            T: 8
        }
    ]), fgu = k.makeMessageType("aiserver.v1.QueryOnlyRepositoryInfo", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
        },
        {
            no: 2,
            name: "query_only_repo_access",
            kind: "message",
            T: GUt
        }
    ]), vgu = k.makeMessageType("aiserver.v1.RepositoryCodebaseInfo", ()=>[
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
            T: k.getEnumType(_gu)
        },
        {
            no: 3,
            name: "query_only_similar_repo",
            kind: "message",
            T: fgu
        },
        {
            no: 4,
            name: "copy_task_handle",
            kind: "scalar",
            T: 9
        }
    ]), _gu = k.makeEnum("aiserver.v1.RepositoryCodebaseInfo.Status", [
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
]), bgu = k.makeMessageType("aiserver.v1.FastRepoInitHandshakeV2Response", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(ygu)
        },
        {
            no: 2,
            name: "codebases",
            kind: "message",
            T: vgu,
            repeated: !0
        }
    ]), ygu = k.makeEnum("aiserver.v1.FastRepoInitHandshakeV2Response.Status", [
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
]), Sgu = k.makeMessageType("aiserver.v1.RepositoryCodebaseSyncStatus", ()=>[
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
            T: k.getEnumType(kgu)
        },
        {
            no: 3,
            name: "similarity_metric_type",
            kind: "enum",
            T: k.getEnumType(gBs)
        },
        {
            no: 4,
            name: "similarity_metric",
            kind: "scalar",
            T: 2,
            repeated: !0
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
            T: k.getEnumType(fBs)
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
    ]), kgu = k.makeEnum("aiserver.v1.RepositoryCodebaseSyncStatus.Status", [
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
]), wgu = k.makeMessageType("aiserver.v1.FastRepoSyncCompleteRequest", ()=>[
        {
            no: 1,
            name: "codebases",
            kind: "message",
            T: Sgu,
            repeated: !0
        }
    ]), Cgu = k.makeMessageType("aiserver.v1.FastRepoSyncCompleteResponse", []), Tgu = k.makeMessageType("aiserver.v1.SyncMerkleSubtreeRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
        },
        {
            no: 2,
            name: "local_partial_path",
            kind: "message",
            T: Dve
        }
    ]), Egu = k.makeMessageType("aiserver.v1.SyncMerkleSubtreeResponse", ()=>[
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
            T: xgu,
            oneof: "result"
        }
    ]), xgu = k.makeMessageType("aiserver.v1.SyncMerkleSubtreeResponse.Mismatch", ()=>[
        {
            no: 1,
            name: "children",
            kind: "message",
            T: Dve,
            repeated: !0
        }
    ], {
    localName: "SyncMerkleSubtreeResponse_Mismatch"
}), _Bs = k.makeMessageType("aiserver.v1.ClientRepositoryInfo", ()=>[
        {
            no: 1,
            name: "orthogonal_transform_seed",
            kind: "scalar",
            T: 1
        }
    ]), Igu = k.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Request", ()=>[
        {
            no: 1,
            name: "client_repository_info",
            kind: "message",
            T: _Bs
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
            T: Dve
        },
        {
            no: 4,
            name: "local_partial_paths",
            kind: "message",
            T: Dve,
            repeated: !0
        }
    ]), Agu = k.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Response", ()=>[
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
            T: bBs,
            oneof: "result"
        },
        {
            no: 3,
            name: "results",
            kind: "message",
            T: Rgu,
            repeated: !0
        }
    ]), bBs = k.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Response.Mismatch", ()=>[
        {
            no: 1,
            name: "children",
            kind: "message",
            T: Dve,
            repeated: !0
        }
    ], {
    localName: "SyncMerkleSubtreeV2Response_Mismatch"
}), Rgu = k.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Response.PartialPathResult", ()=>[
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
            T: bBs,
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
}), Dgu = k.makeMessageType("aiserver.v1.FastUpdateFileRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
        },
        {
            no: 2,
            name: "directory",
            kind: "message",
            T: Dve,
            oneof: "partial_path"
        },
        {
            no: 3,
            name: "local_file",
            kind: "message",
            T: Pgu,
            oneof: "partial_path"
        },
        {
            no: 4,
            name: "ancestor_spline",
            kind: "message",
            T: Dve,
            repeated: !0
        },
        {
            no: 5,
            name: "update_type",
            kind: "enum",
            T: k.getEnumType(Mgu)
        }
    ]), Mgu = k.makeEnum("aiserver.v1.FastUpdateFileRequest.UpdateType", [
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
]), Pgu = k.makeMessageType("aiserver.v1.FastUpdateFileRequest.LocalFile", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: ffe
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
}), Lgu = k.makeMessageType("aiserver.v1.FastUpdateFileResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(Ngu)
        }
    ]), Ngu = k.makeEnum("aiserver.v1.FastUpdateFileResponse.Status", [
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
]), Ogu = k.makeMessageType("aiserver.v1.FastUpdateFileV2Request", ()=>[
        {
            no: 1,
            name: "client_repository_info",
            kind: "message",
            T: _Bs
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
            T: Dve,
            oneof: "partial_path"
        },
        {
            no: 4,
            name: "local_file",
            kind: "message",
            T: SBs,
            oneof: "partial_path"
        },
        {
            no: 5,
            name: "ancestor_spline",
            kind: "message",
            T: Dve,
            repeated: !0
        },
        {
            no: 6,
            name: "update_type",
            kind: "enum",
            T: k.getEnumType(yBs)
        },
        {
            no: 7,
            name: "file_updates",
            kind: "message",
            T: Fgu,
            repeated: !0
        }
    ]), yBs = k.makeEnum("aiserver.v1.FastUpdateFileV2Request.UpdateType", [
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
]), SBs = k.makeMessageType("aiserver.v1.FastUpdateFileV2Request.LocalFile", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: ffe
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
}), Fgu = k.makeMessageType("aiserver.v1.FastUpdateFileV2Request.FileUpdate", ()=>[
        {
            no: 1,
            name: "directory",
            kind: "message",
            T: Dve,
            oneof: "partial_path"
        },
        {
            no: 2,
            name: "local_file",
            kind: "message",
            T: SBs,
            oneof: "partial_path"
        },
        {
            no: 3,
            name: "ancestor_spline",
            kind: "message",
            T: Dve,
            repeated: !0
        },
        {
            no: 4,
            name: "update_type",
            kind: "enum",
            T: k.getEnumType(yBs)
        }
    ], {
    localName: "FastUpdateFileV2Request_FileUpdate"
}), Bgu = k.makeMessageType("aiserver.v1.FastUpdateFileV2Response", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(Ugu)
        }
    ]), Ugu = k.makeEnum("aiserver.v1.FastUpdateFileV2Response.Status", [
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
]), $gu = k.makeMessageType("aiserver.v1.GetUploadLimitsRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1,
            opt: !0
        }
    ]), Hgu = k.makeMessageType("aiserver.v1.GetUploadLimitsResponse", ()=>[
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
    ]), Wgu = k.makeMessageType("aiserver.v1.GetNumFilesToSendRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
        }
    ]), Ggu = k.makeMessageType("aiserver.v1.GetNumFilesToSendResponse", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]), Vgu = k.makeMessageType("aiserver.v1.GetAvailableChunkingStrategiesRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
        }
    ]), jgu = k.makeMessageType("aiserver.v1.GetAvailableChunkingStrategiesResponse", ()=>[
        {
            no: 1,
            name: "chunking_strategies",
            kind: "enum",
            T: k.getEnumType(igu),
            repeated: !0
        }
    ]), qgu = k.makeMessageType("aiserver.v1.GetEmbeddingsRequest", ()=>[
        {
            no: 1,
            name: "texts",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), zgu = k.makeMessageType("aiserver.v1.GetEmbeddingsResponse", ()=>[
        {
            no: 2,
            name: "embeddings",
            kind: "message",
            T: Kgu,
            repeated: !0
        }
    ]), Kgu = k.makeMessageType("aiserver.v1.GetEmbeddingsResponse.Embedding", ()=>[
        {
            no: 1,
            name: "embedding",
            kind: "scalar",
            T: 2,
            repeated: !0
        }
    ], {
    localName: "GetEmbeddingsResponse_Embedding"
}), kBs = k.makeMessageType("aiserver.v1.RemoveRepositoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
        }
    ]), Ygu = k.makeMessageType("aiserver.v1.RemoveRepositoryResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(Xgu)
        }
    ]), Xgu = k.makeEnum("aiserver.v1.RemoveRepositoryResponse.Status", [
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
]), wBs = k.makeMessageType("aiserver.v1.SearchRepositoryRequest", ()=>[
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
            T: w1
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
            T: xf
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
            opt: !0
        },
        {
            no: 7,
            name: "glob_filter",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "not_glob_filter",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "race_n_requests",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "query_only_repo_access",
            kind: "message",
            T: GUt
        }
    ]), GUt = k.makeMessageType("aiserver.v1.QueryOnlyRepoAccess", ()=>[
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
    ]), YO = k.makeMessageType("aiserver.v1.CodeResult", ()=>[
        {
            no: 1,
            name: "code_block",
            kind: "message",
            T: kD
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), Zgu = k.makeMessageType("aiserver.v1.FileResult", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: ffe
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), CBs = k.makeMessageType("aiserver.v1.SearchRepositoryResponse", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: YO,
            repeated: !0
        }
    ]), TBs = k.makeMessageType("aiserver.v1.SemSearchRequest", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: wBs
        }
    ]), EBs = k.makeMessageType("aiserver.v1.CodeResultWithClassificationInfo", ()=>[
        {
            no: 1,
            name: "code_result",
            kind: "message",
            T: YO
        },
        {
            no: 2,
            name: "line_number_classification",
            kind: "message",
            T: Qgu,
            opt: !0
        }
    ]), Qgu = k.makeMessageType("aiserver.v1.CodeResultWithClassificationInfo.LineNumberClassification", ()=>[
        {
            no: 1,
            name: "detailed_line",
            kind: "message",
            T: KSi
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
            repeated: !0
        },
        {
            no: 4,
            name: "highlight_range",
            kind: "message",
            T: x3
        }
    ], {
    localName: "CodeResultWithClassificationInfo_LineNumberClassification"
}), xBs = k.makeMessageType("aiserver.v1.SemSearchResponse", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: CBs
        },
        {
            no: 2,
            name: "metadata",
            kind: "message",
            T: Jgu,
            opt: !0
        },
        {
            no: 3,
            name: "code_results",
            kind: "message",
            T: EBs,
            repeated: !0
        }
    ]), Jgu = k.makeMessageType("aiserver.v1.SemSearchResponse.SemSearchMetadata", ()=>[
        {
            no: 1,
            name: "query_embedding_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "server_side_latency_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "embed_latency_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "knn_latency_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "SemSearchResponse_SemSearchMetadata"
}), w1 = k.makeMessageType("aiserver.v1.RepositoryInfo", ()=>[
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
            repeated: !0
        },
        {
            no: 3,
            name: "remote_names",
            kind: "scalar",
            T: 9,
            repeated: !0
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
            opt: !0
        },
        {
            no: 9,
            name: "orthogonal_transform_seed",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 10,
            name: "preferred_embedding_model",
            kind: "enum",
            T: k.getEnumType(zP),
            opt: !0
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
            T: k.getEnumType(sgu),
            opt: !0
        }
    ]), efu = k.makeMessageType("aiserver.v1.NodeResult", ()=>[
        {
            no: 1,
            name: "node",
            kind: "message",
            T: hBs
        },
        {
            no: 2,
            name: "file",
            kind: "message",
            T: ffe
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), tfu = k.makeMessageType("aiserver.v1.ReflectionResult", ()=>[
        {
            no: 1,
            name: "reflection",
            kind: "message",
            T: Kmu
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), nfu = k.makeMessageType("aiserver.v1.SearchRepositoryDeepContextResponse", ()=>[
        {
            no: 1,
            name: "top_nodes",
            kind: "message",
            T: efu,
            repeated: !0
        },
        {
            no: 2,
            name: "reflections",
            kind: "message",
            T: tfu,
            repeated: !0
        },
        {
            no: 3,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]), ifu = k.makeMessageType("aiserver.v1.GetLineNumberClassificationsRequest", ()=>[
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
            T: YO,
            repeated: !0
        }
    ]), rfu = k.makeMessageType("aiserver.v1.GetLineNumberClassificationsResponse", ()=>[
        {
            no: 1,
            name: "classified_result",
            kind: "message",
            T: EBs
        }
    ]), sfu = k.makeMessageType("aiserver.v1.GetCopyStatusRequest", ()=>[
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
    ]), ofu = k.makeMessageType("aiserver.v1.GetCopyStatusResponse", ()=>[
        {
            no: 1,
            name: "phase",
            kind: "enum",
            T: k.getEnumType(afu)
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
            T: k.getEnumType(cfu),
            opt: !0
        }
    ]), afu = k.makeEnum("aiserver.v1.GetCopyStatusResponse.Phase", [
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
]), cfu = k.makeEnum("aiserver.v1.GetCopyStatusResponse.CompletedStatus", [
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
]), lfu = k.makeMessageType("aiserver.v1.IndexedFile", ()=>[
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
            repeated: !0
        }
    ]), ufu = k.makeMessageType("aiserver.v1.IndexedPullRequest", ()=>[
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
            T: lfu,
            repeated: !0
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
            opt: !0
        },
        {
            no: 9,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), dfu = k.makeMessageType("aiserver.v1.RepoHistoryInitHandshakeRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
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
            opt: !0
        },
        {
            no: 4,
            name: "test_origin_commit_secret",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "send_copy_candidates",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), hfu = k.makeMessageType("aiserver.v1.RepoHistoryInfo", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "last_indexed_commit",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "last_indexed_commit_generation",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 5,
            name: "sync_bitmap",
            kind: "scalar",
            T: 12,
            opt: !0
        }
    ]), pfu = k.makeMessageType("aiserver.v1.RepoHistoryInitHandshakeResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(mfu)
        },
        {
            no: 2,
            name: "histories",
            kind: "message",
            T: hfu,
            repeated: !0
        },
        {
            no: 3,
            name: "copy_candidate_nonce",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "copy_candidates",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), mfu = k.makeEnum("aiserver.v1.RepoHistoryInitHandshakeResponse.Status", [
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
]), gfu = k.makeMessageType("aiserver.v1.RepoHistorySyncOneRequest", ()=>[
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
            T: ufu,
            repeated: !0
        },
        {
            no: 3,
            name: "ignore_commits",
            kind: "scalar",
            T: 13,
            repeated: !0
        }
    ]), ffu = k.makeMessageType("aiserver.v1.RepoHistorySyncOneResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(vfu)
        }
    ]), vfu = k.makeEnum("aiserver.v1.RepoHistorySyncOneResponse.Status", [
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
]), _fu = k.makeMessageType("aiserver.v1.RepoHistorySyncCompleteRequest", ()=>[
        {
            no: 1,
            name: "synced_histories",
            kind: "message",
            T: yfu,
            repeated: !0
        }
    ]), bfu = k.makeEnum("aiserver.v1.RepoHistorySyncCompleteRequest.Status", [
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
]), yfu = k.makeMessageType("aiserver.v1.RepoHistorySyncCompleteRequest.SyncedHistory", ()=>[
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
            T: k.getEnumType(bfu)
        },
        {
            no: 3,
            name: "last_indexed_commit",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "last_indexed_commit_secret",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "last_indexed_commit_generation",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ], {
    localName: "RepoHistorySyncCompleteRequest_SyncedHistory"
}), Sfu = k.makeMessageType("aiserver.v1.RepoHistorySyncCompleteResponse", []), kfu = k.makeMessageType("aiserver.v1.SearchPRHistoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
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
    ]), wfu = k.makeMessageType("aiserver.v1.PRDiffChunkPointer", ()=>[
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
    ]), Cfu = k.makeMessageType("aiserver.v1.SearchPRHistoryResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Tfu,
            repeated: !0
        },
        {
            no: 2,
            name: "git_height",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), Tfu = k.makeMessageType("aiserver.v1.SearchPRHistoryResponse.PRSearchResult", ()=>[
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
            T: wfu,
            repeated: !0
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "pr_number",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 7,
            name: "author",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "date",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "changed_files",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "SearchPRHistoryResponse_PRSearchResult"
}), Efu = k.makeMessageType("aiserver.v1.RemoveRepoHistoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
        }
    ]), xfu = k.makeMessageType("aiserver.v1.RemoveRepoHistoryResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(Ifu)
        }
    ]), Ifu = k.makeEnum("aiserver.v1.RemoveRepoHistoryResponse.Status", [
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
]), Afu = k.makeMessageType("aiserver.v1.GetPRIndexingStatusRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: w1
        }
    ]), Rfu = k.makeMessageType("aiserver.v1.GetPRIndexingStatusResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: k.getEnumType(Dfu)
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
            opt: !0
        },
        {
            no: 4,
            name: "last_indexed_generation",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 5,
            name: "total_commits",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 6,
            name: "indexing_rate",
            kind: "scalar",
            T: 2,
            opt: !0
        },
        {
            no: 7,
            name: "last_updated_timestamp",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 8,
            name: "index_version",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), Dfu = k.makeEnum("aiserver.v1.GetPRIndexingStatusResponse.Status", [
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

}
