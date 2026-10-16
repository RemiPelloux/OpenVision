import { Oc, kG } from "./origin_common_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { AKt, Bps, RKt, Ups, WHg, a1l, jRi, nPn, tPn, tWg, u1l, yWg } from "./rpc_pb.js";
import { E } from "./tslib.es6.js";
var OWg, FWg, BWg, UWg, jWg, $Wg, HWg, WWg, GWg, qWg, zWg, VWg, KWg, m1l, YWg, XWg, ZWg, QWg, JWg, eGg, tGg, nGg, iGg, rGg, sGg, oGg, aGg, lGg, cGg, uGg, dGg, hGg, pGg, mGg, gGg, g1l, fGg, vGg, _Gg, bGg, yGg, SGg, kGg, wGg, f1l, CGg, TGg, EGg, IGg, xGg, AGg;
export { $Wg, AGg, BWg, CGg, EGg, FWg, GWg, HWg, IGg, JWg, KWg, OWg, QWg, SGg, TGg, UWg, VWg, WWg, XWg, YWg, ZWg, _Gg, aGg, bGg, cGg, dGg, eGg, f1l, fGg, g1l, gGg, hGg, iGg, jWg, kGg, lGg, m1l, mGg, nGg, oGg, pGg, qWg, rGg, sGg, tGg, uGg, vGg, wGg, xGg, yGg, zWg };
var __wakaru_v1l_initialized = false;
export function v1l() {
if (__wakaru_v1l_initialized) return;
__wakaru_v1l_initialized = true;
"use strict";
E(), hr(), kG(), nPn(), OWg = x.makeEnum("origin.v1.GithubCodeownersFileStatus", [
    {
        no: 0,
        name: "GITHUB_CODEOWNERS_FILE_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GITHUB_CODEOWNERS_FILE_STATUS_FOUND",
        localName: "FOUND"
    },
    {
        no: 2,
        name: "GITHUB_CODEOWNERS_FILE_STATUS_MISSING",
        localName: "MISSING"
    },
    {
        no: 3,
        name: "GITHUB_CODEOWNERS_FILE_STATUS_TOO_LARGE",
        localName: "TOO_LARGE"
    },
    {
        no: 4,
        name: "GITHUB_CODEOWNERS_FILE_STATUS_NOT_SERVED",
        localName: "NOT_SERVED"
    },
    {
        no: 5,
        name: "GITHUB_CODEOWNERS_FILE_STATUS_TOO_COMPLEX",
        localName: "TOO_COMPLEX"
    }
]), FWg = x.makeEnum("origin.v1.GithubCodeownerViewerMatch", [
    {
        no: 0,
        name: "GITHUB_CODEOWNER_VIEWER_MATCH_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GITHUB_CODEOWNER_VIEWER_MATCH_MATCH",
        localName: "MATCH"
    },
    {
        no: 2,
        name: "GITHUB_CODEOWNER_VIEWER_MATCH_NO_MATCH",
        localName: "NO_MATCH"
    },
    {
        no: 3,
        name: "GITHUB_CODEOWNER_VIEWER_MATCH_UNKNOWN",
        localName: "UNKNOWN"
    }
]), BWg = x.makeEnum("origin.v1.GithubCodeownersViewerMembershipUnknownReason", [
    {
        no: 0,
        name: "GITHUB_CODEOWNERS_VIEWER_MEMBERSHIP_UNKNOWN_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GITHUB_CODEOWNERS_VIEWER_MEMBERSHIP_UNKNOWN_REASON_LOOKUP_DISABLED",
        localName: "LOOKUP_DISABLED"
    },
    {
        no: 2,
        name: "GITHUB_CODEOWNERS_VIEWER_MEMBERSHIP_UNKNOWN_REASON_NOT_A_USER",
        localName: "NOT_A_USER"
    },
    {
        no: 3,
        name: "GITHUB_CODEOWNERS_VIEWER_MEMBERSHIP_UNKNOWN_REASON_NO_LINKED_GITHUB_LOGIN",
        localName: "NO_LINKED_GITHUB_LOGIN"
    },
    {
        no: 4,
        name: "GITHUB_CODEOWNERS_VIEWER_MEMBERSHIP_UNKNOWN_REASON_ORGANIZATION_NOT_SYNCED",
        localName: "ORGANIZATION_NOT_SYNCED"
    },
    {
        no: 5,
        name: "GITHUB_CODEOWNERS_VIEWER_MEMBERSHIP_UNKNOWN_REASON_GITHUB_ENTERPRISE_UNSUPPORTED",
        localName: "GITHUB_ENTERPRISE_UNSUPPORTED"
    },
    {
        no: 6,
        name: "GITHUB_CODEOWNERS_VIEWER_MEMBERSHIP_UNKNOWN_REASON_CACHE_UNAVAILABLE",
        localName: "CACHE_UNAVAILABLE"
    },
    {
        no: 7,
        name: "GITHUB_CODEOWNERS_VIEWER_MEMBERSHIP_UNKNOWN_REASON_TOO_MANY_OWNERS",
        localName: "TOO_MANY_OWNERS"
    },
    {
        no: 8,
        name: "GITHUB_CODEOWNERS_VIEWER_MEMBERSHIP_UNKNOWN_REASON_CACHE_CONTRACT_ERROR",
        localName: "CACHE_CONTRACT_ERROR"
    },
    {
        no: 9,
        name: "GITHUB_CODEOWNERS_VIEWER_MEMBERSHIP_UNKNOWN_REASON_REPOSITORY_OWNER_UNRESOLVED",
        localName: "REPOSITORY_OWNER_UNRESOLVED"
    }
]), UWg = x.makeMessageType("origin.v1.ResolveRepoPathClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "ref_path",
            kind: "scalar",
            T: 9
        }
    ]), jWg = x.makeMessageType("origin.v1.GetRepoContentClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "ref_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "max_file_size",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), $Wg = x.makeMessageType("origin.v1.MintRawRepoFileLinkClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "ref_path",
            kind: "scalar",
            T: 9
        }
    ]), HWg = x.makeMessageType("origin.v1.MintRawRepoFileLinkClientResponse", ()=>[
        {
            no: 1,
            name: "token",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path_identifier",
            kind: "message",
            T: RKt
        },
        {
            no: 3,
            name: "raw_origin",
            kind: "scalar",
            T: 9
        }
    ]), WWg = x.makeMessageType("origin.v1.GetRepoTarballClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        }
    ]), GWg = x.makeMessageType("origin.v1.GetRepoTarballClientResponse", ()=>[
        {
            no: 1,
            name: "download_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "filename",
            kind: "scalar",
            T: 9
        }
    ]), qWg = x.makeMessageType("origin.v1.GetRepoContentAtShaClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "path_identifier",
            kind: "message",
            T: RKt
        },
        {
            no: 3,
            name: "max_file_size",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), zWg = x.makeMessageType("origin.v1.GetRepoContentDetailsAtShaClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "path_identifier",
            kind: "message",
            T: RKt
        }
    ]), VWg = x.makeMessageType("origin.v1.BatchGetRepoContentAtShaClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "max_file_size",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), KWg = x.makeMessageType("origin.v1.GetRepoCodeownersClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), m1l = x.makeMessageType("origin.v1.CodeownersOwners", ()=>[
        {
            no: 1,
            name: "owners",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), YWg = x.makeMessageType("origin.v1.GetRepoCodeownersResponse", ()=>[
        {
            no: 1,
            name: "codeowners_by_path",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: m1l
            }
        }
    ]), XWg = x.makeMessageType("origin.v1.GetGithubRepoCodeownersClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), ZWg = x.makeMessageType("origin.v1.GetGithubRepoCodeownersResponse", ()=>[
        {
            no: 1,
            name: "codeowners_by_path",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: m1l
            }
        },
        {
            no: 2,
            name: "file_status",
            kind: "enum",
            T: x.getEnumType(OWg)
        },
        {
            no: 3,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "viewer_match_by_owner",
            kind: "map",
            K: 9,
            V: {
                kind: "enum",
                T: x.getEnumType(FWg)
            }
        },
        {
            no: 5,
            name: "viewer_membership_known",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "viewer_membership_unknown_reason",
            kind: "enum",
            T: x.getEnumType(BWg)
        }
    ]), QWg = x.makeMessageType("origin.v1.GetCommitClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        }
    ]), JWg = x.makeMessageType("origin.v1.GetBlobClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "blob_sha",
            kind: "scalar",
            T: 9
        }
    ]), eGg = x.makeMessageType("origin.v1.GetTagClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "tag_sha",
            kind: "scalar",
            T: 9
        }
    ]), tGg = x.makeMessageType("origin.v1.GetTreeClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "tree_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "recursive",
            kind: "scalar",
            T: 8
        }
    ]), nGg = x.makeMessageType("origin.v1.GetFileHistoryClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "start_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "max_commits",
            kind: "scalar",
            T: 13
        }
    ]), iGg = x.makeMessageType("origin.v1.GetFileHistoryPageClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "start_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "page_size",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "next_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), rGg = x.makeMessageType("origin.v1.GetFileHistoryPageResponse", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: tPn,
            repeated: !0
        },
        {
            no: 2,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "next_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), sGg = x.makeMessageType("origin.v1.GetFileHistoryPageWithDiffStatsClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "start_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "page_size",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "next_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), oGg = x.makeMessageType("origin.v1.GetBlameClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "start_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), aGg = x.makeMessageType("origin.v1.GetTreeBlameClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "start_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), lGg = x.makeMessageType("origin.v1.GetFuzzyPathsClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "limit",
            kind: "scalar",
            T: 13
        }
    ]), cGg = x.makeMessageType("origin.v1.ListRepoPathsClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "includes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "excludes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "limit",
            kind: "scalar",
            T: 13
        }
    ]), uGg = x.makeMessageType("origin.v1.GrepRepoClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: yWg
        },
        {
            no: 5,
            name: "max_results",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "max_total_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "priority",
            kind: "enum",
            T: x.getEnumType(WHg)
        }
    ]), dGg = x.makeMessageType("origin.v1.GetPullRequestDiffClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "head_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "include_patches",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "include_file_stats",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "page_size",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 7,
            name: "page_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "context_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "generated_attributes_revision",
            kind: "enum",
            T: x.getEnumType(a1l)
        }
    ]), hGg = x.makeMessageType("origin.v1.GetCommitDiffClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "include_patches",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "page_size",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 7,
            name: "page_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), pGg = x.makeMessageType("origin.v1.GetCommitDiff2ClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "include_patches",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), mGg = x.makeMessageType("origin.v1.GetCommitChangedPathsClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gGg = x.makeMessageType("origin.v1.GetCommitDiffStatsClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), g1l = x.makeMessageType("origin.v1.ListRefsClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "filter",
            kind: "enum",
            T: x.getEnumType(Ups)
        },
        {
            no: 3,
            name: "names_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "prefix",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "limit",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 7,
            name: "page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), fGg = x.makeMessageType("origin.v1.SearchRefsClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "filter",
            kind: "enum",
            T: x.getEnumType(Ups)
        },
        {
            no: 3,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "limit",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), vGg = x.makeMessageType("origin.v1.LookupCommitsClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "sha_prefix",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), _Gg = x.makeMessageType("origin.v1.GetCommitActivityClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "since_timestamp",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 4,
            name: "max_contributors",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 5,
            name: "until_timestamp",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 6,
            name: "include_line_stats",
            kind: "scalar",
            T: 8
        }
    ]), bGg = x.makeMessageType("origin.v1.GetCommitActivityClientResponse", ()=>[
        {
            no: 1,
            name: "activity",
            kind: "message",
            T: tWg
        },
        {
            no: 2,
            name: "users_by_contributor_key",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: yGg
            }
        },
        {
            no: 3,
            name: "pending",
            kind: "scalar",
            T: 8
        }
    ]), yGg = x.makeMessageType("origin.v1.CommitActivityContributorUser", ()=>[
        {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "avatar_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "profile_handle",
            kind: "scalar",
            T: 9
        }
    ]), SGg = x.makeMessageType("origin.v1.CanMergeClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "ours",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "theirs",
            kind: "scalar",
            T: 9
        }
    ]), kGg = x.makeMessageType("origin.v1.CompareCommitsClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "base_revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "head_revision",
            kind: "scalar",
            T: 9
        }
    ]), wGg = x.makeMessageType("origin.v1.ListCommitsInRangeClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "base_revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "head_revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "max_commits",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "oldest_first",
            kind: "scalar",
            T: 8
        }
    ]), f1l = x.makeMessageType("origin.v1.CreateCommitFromFilesClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expected_head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "author",
            kind: "message",
            T: AKt
        },
        {
            no: 6,
            name: "committer",
            kind: "message",
            T: AKt,
            opt: !0
        },
        {
            no: 7,
            name: "files",
            kind: "message",
            T: u1l,
            repeated: !0
        }
    ]), CGg = x.makeMessageType("origin.v1.CreateCommitFromFilesClientResponse", ()=>[
        {
            no: 1,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tree_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "old_head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "reverse_mirror_push_failed",
            kind: "scalar",
            T: 8
        }
    ]), TGg = x.makeMessageType("origin.v1.CollectedFileDiff", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "old_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "change_kind",
            kind: "enum",
            T: x.getEnumType(Bps)
        },
        {
            no: 4,
            name: "is_binary",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "patch",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "additions",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "deletions",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "is_generated",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "old_mode",
            kind: "enum",
            T: x.getEnumType(jRi),
            opt: !0
        },
        {
            no: 10,
            name: "new_mode",
            kind: "enum",
            T: x.getEnumType(jRi),
            opt: !0
        }
    ]), EGg = x.makeMessageType("origin.v1.GetCollectedPullRequestDiffRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "head_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "include_patches",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "include_file_stats",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "page_size",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 7,
            name: "page_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "change_number",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 9,
            name: "version_number",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 10,
            name: "context_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 11,
            name: "generated_attributes_revision",
            kind: "enum",
            T: x.getEnumType(a1l)
        },
        {
            no: 12,
            name: "project_latest_version_base",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), IGg = x.makeMessageType("origin.v1.GetCollectedPullRequestDiffResponse", ()=>[
        {
            no: 1,
            name: "merge_base_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: TGg,
            repeated: !0
        },
        {
            no: 4,
            name: "next_page_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "resolved_head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "resolved_base_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "resolved_version_number",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), xGg = x.makeMessageType("origin.v1.FastForwardBranchClientRequest", ()=>[
        {
            no: 1,
            name: "identifier",
            kind: "message",
            T: Oc
        },
        {
            no: 2,
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expected_head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "new_head_sha",
            kind: "scalar",
            T: 9
        }
    ]), AGg = x.makeMessageType("origin.v1.FastForwardBranchClientResponse", ()=>[
        {
            no: 1,
            name: "old_head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "unchanged",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "reverse_mirror_push_failed",
            kind: "scalar",
            T: 8
        }
    ]);

}
