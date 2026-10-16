import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Kpd, nmd, zDo } from "./symbolic_context_pb.js";
import { E } from "./tslib.es6.js";
import { Abr, Hu, Mg, R5, m7, rL, wAe } from "./utils_pb.js";
var imd, YDo, XDo, rmd, smd, omd, amd, lmd, cmd, umd, dmd, CAe, hmd, pmd, mmd, ZDo, gmd, fmd, vmd, _md, bmd, ymd, Smd, kmd, wmd, Cmd, Tmd, Emd, Imd, QDo, xmd, Amd, JDo, Rmd, Pmd, Mmd, Dmd, Nmd, Lmd, Omd, e3o, t3o, Fmd, Bmd, Umd, jmd, $md, Hmd, Wmd, Gmd, qmd, zmd, Vmd, Kmd, n3o, Ymd, Xmd, i3o, Lpn, Q9, Zmd, r3o, s3o, o3o, Qmd, a3o, Jmd, Cx, egd, tgd, ngd, igd, rgd, sgd, ogd, agd, lgd, cgd, ugd, dgd, hgd, pgd, mgd, ggd, fgd, vgd, _gd, bgd, ygd, Sgd, kgd, wgd, Cgd, Tgd, Egd, Igd, xgd, Agd, Rgd, Pgd;
export { $md, Agd, Amd, Bmd, CAe, Cgd, Cmd, Cx, Dmd, Egd, Emd, Fmd, Gmd, Hmd, Igd, Imd, JDo, Jmd, Kmd, Lmd, Lpn, Mmd, Nmd, Omd, Pgd, Pmd, Q9, QDo, Qmd, Rgd, Rmd, Sgd, Smd, Tgd, Tmd, Umd, Vmd, Wmd, XDo, Xmd, YDo, Ymd, ZDo, Zmd, _gd, _md, a3o, agd, amd, bgd, bmd, cgd, cmd, dgd, dmd, e3o, egd, fgd, fmd, ggd, gmd, hgd, hmd, i3o, igd, imd, jmd, kgd, kmd, lgd, lmd, mgd, mmd, n3o, ngd, o3o, ogd, omd, pgd, pmd, qmd, r3o, rgd, rmd, s3o, sgd, smd, t3o, tgd, ugd, umd, vgd, vmd, wgd, wmd, xgd, xmd, ygd, ymd, zmd };
var __wakaru_qse_initialized = false;
export function qse() {
if (__wakaru_qse_initialized) return;
__wakaru_qse_initialized = true;
"use strict";
E(), hr(), Hu(), nmd(), imd = x.makeEnum("aiserver.v1.ChunkingStrategy", [
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
]), YDo = x.makeEnum("aiserver.v1.SimilarityMetricType", [
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
]), XDo = x.makeEnum("aiserver.v1.PathKeyHashType", [
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
]), rmd = x.makeEnum("aiserver.v1.RerankerAlgorithm", [
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
]), smd = x.makeEnum("aiserver.v1.DatabaseProvider", [
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
]), omd = x.makeEnum("aiserver.v1.RechunkerChoice", [
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
]), amd = x.makeMessageType("aiserver.v1.GetHighLevelFolderDescriptionRequest", ()=>[
        {
            no: 1,
            name: "readmes",
            kind: "message",
            T: lmd,
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
    ]), lmd = x.makeMessageType("aiserver.v1.GetHighLevelFolderDescriptionRequest.Readme", ()=>[
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
}), cmd = x.makeMessageType("aiserver.v1.GetHighLevelFolderDescriptionResponse", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]), umd = x.makeMessageType("aiserver.v1.EnsureIndexCreatedRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
        }
    ]), dmd = x.makeMessageType("aiserver.v1.EnsureIndexCreatedResponse", []), CAe = x.makeMessageType("aiserver.v1.PartialPathItem", ()=>[
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
    ]), hmd = x.makeMessageType("aiserver.v1.FastRepoInitHandshakeRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
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
    ]), pmd = x.makeMessageType("aiserver.v1.FastRepoInitHandshakeResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(mmd)
        },
        {
            no: 2,
            name: "repo_name",
            kind: "scalar",
            T: 9
        }
    ]), mmd = x.makeEnum("aiserver.v1.FastRepoInitHandshakeResponse.Status", [
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
]), ZDo = x.makeMessageType("aiserver.v1.LocalCodebaseFileInfo", ()=>[
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
            T: ZDo,
            repeated: !0
        },
        {
            no: 4,
            name: "separator",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gmd = x.makeMessageType("aiserver.v1.FastRepoInitHandshakeV2Request", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
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
            T: x.getEnumType(YDo)
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
            T: x.getEnumType(XDo)
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
            T: ZDo
        },
        {
            no: 10,
            name: "return_after_background_copy_started",
            kind: "scalar",
            T: 8
        }
    ]), fmd = x.makeMessageType("aiserver.v1.QueryOnlyRepositoryInfo", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
        },
        {
            no: 2,
            name: "query_only_repo_access",
            kind: "message",
            T: Lpn
        }
    ]), vmd = x.makeMessageType("aiserver.v1.RepositoryCodebaseInfo", ()=>[
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
            T: x.getEnumType(_md)
        },
        {
            no: 3,
            name: "query_only_similar_repo",
            kind: "message",
            T: fmd
        },
        {
            no: 4,
            name: "copy_task_handle",
            kind: "scalar",
            T: 9
        }
    ]), _md = x.makeEnum("aiserver.v1.RepositoryCodebaseInfo.Status", [
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
]), bmd = x.makeMessageType("aiserver.v1.FastRepoInitHandshakeV2Response", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(ymd)
        },
        {
            no: 2,
            name: "codebases",
            kind: "message",
            T: vmd,
            repeated: !0
        }
    ]), ymd = x.makeEnum("aiserver.v1.FastRepoInitHandshakeV2Response.Status", [
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
]), Smd = x.makeMessageType("aiserver.v1.RepositoryCodebaseSyncStatus", ()=>[
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
            T: x.getEnumType(kmd)
        },
        {
            no: 3,
            name: "similarity_metric_type",
            kind: "enum",
            T: x.getEnumType(YDo)
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
            T: x.getEnumType(XDo)
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
    ]), kmd = x.makeEnum("aiserver.v1.RepositoryCodebaseSyncStatus.Status", [
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
]), wmd = x.makeMessageType("aiserver.v1.FastRepoSyncCompleteRequest", ()=>[
        {
            no: 1,
            name: "codebases",
            kind: "message",
            T: Smd,
            repeated: !0
        }
    ]), Cmd = x.makeMessageType("aiserver.v1.FastRepoSyncCompleteResponse", []), Tmd = x.makeMessageType("aiserver.v1.SyncMerkleSubtreeRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
        },
        {
            no: 2,
            name: "local_partial_path",
            kind: "message",
            T: CAe
        }
    ]), Emd = x.makeMessageType("aiserver.v1.SyncMerkleSubtreeResponse", ()=>[
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
            T: Imd,
            oneof: "result"
        }
    ]), Imd = x.makeMessageType("aiserver.v1.SyncMerkleSubtreeResponse.Mismatch", ()=>[
        {
            no: 1,
            name: "children",
            kind: "message",
            T: CAe,
            repeated: !0
        }
    ], {
    localName: "SyncMerkleSubtreeResponse_Mismatch"
}), QDo = x.makeMessageType("aiserver.v1.ClientRepositoryInfo", ()=>[
        {
            no: 1,
            name: "orthogonal_transform_seed",
            kind: "scalar",
            T: 1
        }
    ]), xmd = x.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Request", ()=>[
        {
            no: 1,
            name: "client_repository_info",
            kind: "message",
            T: QDo
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
            T: CAe
        },
        {
            no: 4,
            name: "local_partial_paths",
            kind: "message",
            T: CAe,
            repeated: !0
        }
    ]), Amd = x.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Response", ()=>[
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
            T: JDo,
            oneof: "result"
        },
        {
            no: 3,
            name: "results",
            kind: "message",
            T: Rmd,
            repeated: !0
        }
    ]), JDo = x.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Response.Mismatch", ()=>[
        {
            no: 1,
            name: "children",
            kind: "message",
            T: CAe,
            repeated: !0
        }
    ], {
    localName: "SyncMerkleSubtreeV2Response_Mismatch"
}), Rmd = x.makeMessageType("aiserver.v1.SyncMerkleSubtreeV2Response.PartialPathResult", ()=>[
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
            T: JDo,
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
}), Pmd = x.makeMessageType("aiserver.v1.FastUpdateFileRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
        },
        {
            no: 2,
            name: "directory",
            kind: "message",
            T: CAe,
            oneof: "partial_path"
        },
        {
            no: 3,
            name: "local_file",
            kind: "message",
            T: Dmd,
            oneof: "partial_path"
        },
        {
            no: 4,
            name: "ancestor_spline",
            kind: "message",
            T: CAe,
            repeated: !0
        },
        {
            no: 5,
            name: "update_type",
            kind: "enum",
            T: x.getEnumType(Mmd)
        }
    ]), Mmd = x.makeEnum("aiserver.v1.FastUpdateFileRequest.UpdateType", [
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
]), Dmd = x.makeMessageType("aiserver.v1.FastUpdateFileRequest.LocalFile", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: wAe
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
}), Nmd = x.makeMessageType("aiserver.v1.FastUpdateFileResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(Lmd)
        }
    ]), Lmd = x.makeEnum("aiserver.v1.FastUpdateFileResponse.Status", [
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
]), Omd = x.makeMessageType("aiserver.v1.FastUpdateFileV2Request", ()=>[
        {
            no: 1,
            name: "client_repository_info",
            kind: "message",
            T: QDo
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
            T: CAe,
            oneof: "partial_path"
        },
        {
            no: 4,
            name: "local_file",
            kind: "message",
            T: t3o,
            oneof: "partial_path"
        },
        {
            no: 5,
            name: "ancestor_spline",
            kind: "message",
            T: CAe,
            repeated: !0
        },
        {
            no: 6,
            name: "update_type",
            kind: "enum",
            T: x.getEnumType(e3o)
        },
        {
            no: 7,
            name: "file_updates",
            kind: "message",
            T: Fmd,
            repeated: !0
        }
    ]), e3o = x.makeEnum("aiserver.v1.FastUpdateFileV2Request.UpdateType", [
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
]), t3o = x.makeMessageType("aiserver.v1.FastUpdateFileV2Request.LocalFile", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: wAe
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
}), Fmd = x.makeMessageType("aiserver.v1.FastUpdateFileV2Request.FileUpdate", ()=>[
        {
            no: 1,
            name: "directory",
            kind: "message",
            T: CAe,
            oneof: "partial_path"
        },
        {
            no: 2,
            name: "local_file",
            kind: "message",
            T: t3o,
            oneof: "partial_path"
        },
        {
            no: 3,
            name: "ancestor_spline",
            kind: "message",
            T: CAe,
            repeated: !0
        },
        {
            no: 4,
            name: "update_type",
            kind: "enum",
            T: x.getEnumType(e3o)
        }
    ], {
    localName: "FastUpdateFileV2Request_FileUpdate"
}), Bmd = x.makeMessageType("aiserver.v1.FastUpdateFileV2Response", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(Umd)
        }
    ]), Umd = x.makeEnum("aiserver.v1.FastUpdateFileV2Response.Status", [
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
]), jmd = x.makeMessageType("aiserver.v1.GetUploadLimitsRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx,
            opt: !0
        }
    ]), $md = x.makeMessageType("aiserver.v1.GetUploadLimitsResponse", ()=>[
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
    ]), Hmd = x.makeMessageType("aiserver.v1.GetNumFilesToSendRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
        }
    ]), Wmd = x.makeMessageType("aiserver.v1.GetNumFilesToSendResponse", ()=>[
        {
            no: 1,
            name: "num_files",
            kind: "scalar",
            T: 5
        }
    ]), Gmd = x.makeMessageType("aiserver.v1.GetAvailableChunkingStrategiesRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
        }
    ]), qmd = x.makeMessageType("aiserver.v1.GetAvailableChunkingStrategiesResponse", ()=>[
        {
            no: 1,
            name: "chunking_strategies",
            kind: "enum",
            T: x.getEnumType(imd),
            repeated: !0
        }
    ]), zmd = x.makeMessageType("aiserver.v1.GetEmbeddingsRequest", ()=>[
        {
            no: 1,
            name: "texts",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Vmd = x.makeMessageType("aiserver.v1.GetEmbeddingsResponse", ()=>[
        {
            no: 2,
            name: "embeddings",
            kind: "message",
            T: Kmd,
            repeated: !0
        }
    ]), Kmd = x.makeMessageType("aiserver.v1.GetEmbeddingsResponse.Embedding", ()=>[
        {
            no: 1,
            name: "embedding",
            kind: "scalar",
            T: 2,
            repeated: !0
        }
    ], {
    localName: "GetEmbeddingsResponse_Embedding"
}), n3o = x.makeMessageType("aiserver.v1.RemoveRepositoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
        }
    ]), Ymd = x.makeMessageType("aiserver.v1.RemoveRepositoryResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(Xmd)
        }
    ]), Xmd = x.makeEnum("aiserver.v1.RemoveRepositoryResponse.Status", [
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
]), i3o = x.makeMessageType("aiserver.v1.SearchRepositoryRequest", ()=>[
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
            T: Cx
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
            T: Mg
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
            T: Lpn
        }
    ]), Lpn = x.makeMessageType("aiserver.v1.QueryOnlyRepoAccess", ()=>[
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
    ]), Q9 = x.makeMessageType("aiserver.v1.CodeResult", ()=>[
        {
            no: 1,
            name: "code_block",
            kind: "message",
            T: rL
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), Zmd = x.makeMessageType("aiserver.v1.FileResult", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: wAe
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), r3o = x.makeMessageType("aiserver.v1.SearchRepositoryResponse", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: Q9,
            repeated: !0
        }
    ]), s3o = x.makeMessageType("aiserver.v1.SemSearchRequest", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: i3o
        }
    ]), o3o = x.makeMessageType("aiserver.v1.CodeResultWithClassificationInfo", ()=>[
        {
            no: 1,
            name: "code_result",
            kind: "message",
            T: Q9
        },
        {
            no: 2,
            name: "line_number_classification",
            kind: "message",
            T: Qmd,
            opt: !0
        }
    ]), Qmd = x.makeMessageType("aiserver.v1.CodeResultWithClassificationInfo.LineNumberClassification", ()=>[
        {
            no: 1,
            name: "detailed_line",
            kind: "message",
            T: Abr
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
            T: m7
        }
    ], {
    localName: "CodeResultWithClassificationInfo_LineNumberClassification"
}), a3o = x.makeMessageType("aiserver.v1.SemSearchResponse", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: r3o
        },
        {
            no: 2,
            name: "metadata",
            kind: "message",
            T: Jmd,
            opt: !0
        },
        {
            no: 3,
            name: "code_results",
            kind: "message",
            T: o3o,
            repeated: !0
        }
    ]), Jmd = x.makeMessageType("aiserver.v1.SemSearchResponse.SemSearchMetadata", ()=>[
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
}), Cx = x.makeMessageType("aiserver.v1.RepositoryInfo", ()=>[
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
            T: x.getEnumType(R5),
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
            T: x.getEnumType(smd),
            opt: !0
        }
    ]), egd = x.makeMessageType("aiserver.v1.NodeResult", ()=>[
        {
            no: 1,
            name: "node",
            kind: "message",
            T: zDo
        },
        {
            no: 2,
            name: "file",
            kind: "message",
            T: wAe
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), tgd = x.makeMessageType("aiserver.v1.ReflectionResult", ()=>[
        {
            no: 1,
            name: "reflection",
            kind: "message",
            T: Kpd
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), ngd = x.makeMessageType("aiserver.v1.SearchRepositoryDeepContextResponse", ()=>[
        {
            no: 1,
            name: "top_nodes",
            kind: "message",
            T: egd,
            repeated: !0
        },
        {
            no: 2,
            name: "reflections",
            kind: "message",
            T: tgd,
            repeated: !0
        },
        {
            no: 3,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]), igd = x.makeMessageType("aiserver.v1.GetLineNumberClassificationsRequest", ()=>[
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
            T: Q9,
            repeated: !0
        }
    ]), rgd = x.makeMessageType("aiserver.v1.GetLineNumberClassificationsResponse", ()=>[
        {
            no: 1,
            name: "classified_result",
            kind: "message",
            T: o3o
        }
    ]), sgd = x.makeMessageType("aiserver.v1.GetCopyStatusRequest", ()=>[
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
    ]), ogd = x.makeMessageType("aiserver.v1.GetCopyStatusResponse", ()=>[
        {
            no: 1,
            name: "phase",
            kind: "enum",
            T: x.getEnumType(agd)
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
            T: x.getEnumType(lgd),
            opt: !0
        }
    ]), agd = x.makeEnum("aiserver.v1.GetCopyStatusResponse.Phase", [
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
]), lgd = x.makeEnum("aiserver.v1.GetCopyStatusResponse.CompletedStatus", [
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
]), cgd = x.makeMessageType("aiserver.v1.IndexedFile", ()=>[
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
    ]), ugd = x.makeMessageType("aiserver.v1.IndexedPullRequest", ()=>[
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
            T: cgd,
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
    ]), dgd = x.makeMessageType("aiserver.v1.RepoHistoryInitHandshakeRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
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
    ]), hgd = x.makeMessageType("aiserver.v1.RepoHistoryInfo", ()=>[
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
    ]), pgd = x.makeMessageType("aiserver.v1.RepoHistoryInitHandshakeResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(mgd)
        },
        {
            no: 2,
            name: "histories",
            kind: "message",
            T: hgd,
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
    ]), mgd = x.makeEnum("aiserver.v1.RepoHistoryInitHandshakeResponse.Status", [
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
]), ggd = x.makeMessageType("aiserver.v1.RepoHistorySyncOneRequest", ()=>[
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
            T: ugd,
            repeated: !0
        },
        {
            no: 3,
            name: "ignore_commits",
            kind: "scalar",
            T: 13,
            repeated: !0
        }
    ]), fgd = x.makeMessageType("aiserver.v1.RepoHistorySyncOneResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(vgd)
        }
    ]), vgd = x.makeEnum("aiserver.v1.RepoHistorySyncOneResponse.Status", [
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
]), _gd = x.makeMessageType("aiserver.v1.RepoHistorySyncCompleteRequest", ()=>[
        {
            no: 1,
            name: "synced_histories",
            kind: "message",
            T: ygd,
            repeated: !0
        }
    ]), bgd = x.makeEnum("aiserver.v1.RepoHistorySyncCompleteRequest.Status", [
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
]), ygd = x.makeMessageType("aiserver.v1.RepoHistorySyncCompleteRequest.SyncedHistory", ()=>[
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
            T: x.getEnumType(bgd)
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
}), Sgd = x.makeMessageType("aiserver.v1.RepoHistorySyncCompleteResponse", []), kgd = x.makeMessageType("aiserver.v1.SearchPRHistoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
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
    ]), wgd = x.makeMessageType("aiserver.v1.PRDiffChunkPointer", ()=>[
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
    ]), Cgd = x.makeMessageType("aiserver.v1.SearchPRHistoryResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Tgd,
            repeated: !0
        },
        {
            no: 2,
            name: "git_height",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), Tgd = x.makeMessageType("aiserver.v1.SearchPRHistoryResponse.PRSearchResult", ()=>[
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
            T: wgd,
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
}), Egd = x.makeMessageType("aiserver.v1.RemoveRepoHistoryRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
        }
    ]), Igd = x.makeMessageType("aiserver.v1.RemoveRepoHistoryResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(xgd)
        }
    ]), xgd = x.makeEnum("aiserver.v1.RemoveRepoHistoryResponse.Status", [
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
]), Agd = x.makeMessageType("aiserver.v1.GetPRIndexingStatusRequest", ()=>[
        {
            no: 1,
            name: "repository",
            kind: "message",
            T: Cx
        }
    ]), Rgd = x.makeMessageType("aiserver.v1.GetPRIndexingStatusResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(Pgd)
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
    ]), Pgd = x.makeEnum("aiserver.v1.GetPRIndexingStatusResponse.Status", [
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
