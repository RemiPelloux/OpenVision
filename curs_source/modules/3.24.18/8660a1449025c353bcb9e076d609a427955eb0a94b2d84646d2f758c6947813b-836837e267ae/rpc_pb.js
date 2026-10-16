import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var BHg, UHg, o1l, jHg, $Hg, HHg, WHg, GHg, a1l, jRi, Bps, Ups, qHg, zHg, VHg, KHg, YHg, XHg, ZHg, QHg, JHg, l1l, eWg, tWg, nWg, iWg, rWg, c1l, sWg, u1l, xKt, AKt, RKt, jps, d1l, oWg, h1l, aWg, lWg, cWg, uWg, dWg, hWg, pWg, mWg, gWg, fWg, vWg, _Wg, bWg, yWg, SWg, kWg, wWg, tPn, CWg, TWg, EWg, IWg, xWg, AWg, RWg, PWg, MWg, DWg, $ps, PKt, Hps, p1l, NWg, LWg;
export { $Hg, $ps, AKt, AWg, BHg, Bps, CWg, DWg, EWg, GHg, HHg, Hps, IWg, JHg, KHg, LWg, MWg, NWg, PKt, PWg, QHg, RKt, RWg, SWg, TWg, UHg, Ups, VHg, WHg, XHg, YHg, ZHg, _Wg, a1l, aWg, bWg, c1l, cWg, d1l, dWg, eWg, fWg, gWg, h1l, hWg, iWg, jHg, jRi, jps, kWg, l1l, lWg, mWg, nWg, o1l, oWg, p1l, pWg, qHg, rWg, sWg, tPn, tWg, u1l, uWg, vWg, wWg, xKt, xWg, yWg, zHg };
var __wakaru_nPn_initialized = false;
export function nPn() {
if (__wakaru_nPn_initialized) return;
__wakaru_nPn_initialized = true;
"use strict";
E(), hr(), BHg = x.makeEnum("git_forge.v1.CommitActivityLineStats", [
    {
        no: 0,
        name: "COMMIT_ACTIVITY_LINE_STATS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "COMMIT_ACTIVITY_LINE_STATS_INCLUDED",
        localName: "INCLUDED"
    },
    {
        no: 2,
        name: "COMMIT_ACTIVITY_LINE_STATS_OMITTED_TOO_MANY_COMMITS",
        localName: "OMITTED_TOO_MANY_COMMITS"
    }
]), UHg = x.makeEnum("git_forge.v1.CompareCommitsStatus", [
    {
        no: 0,
        name: "COMPARE_COMMITS_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "COMPARE_COMMITS_STATUS_IDENTICAL",
        localName: "IDENTICAL"
    },
    {
        no: 2,
        name: "COMPARE_COMMITS_STATUS_AHEAD",
        localName: "AHEAD"
    },
    {
        no: 3,
        name: "COMPARE_COMMITS_STATUS_BEHIND",
        localName: "BEHIND"
    },
    {
        no: 4,
        name: "COMPARE_COMMITS_STATUS_DIVERGED",
        localName: "DIVERGED"
    },
    {
        no: 5,
        name: "COMPARE_COMMITS_STATUS_NO_MERGE_BASE",
        localName: "NO_MERGE_BASE"
    }
]), o1l = x.makeEnum("git_forge.v1.MergeMode", [
    {
        no: 0,
        name: "MERGE_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MERGE_MODE_MERGE_COMMIT",
        localName: "MERGE_COMMIT"
    },
    {
        no: 2,
        name: "MERGE_MODE_SQUASH",
        localName: "SQUASH"
    }
]), jHg = x.makeEnum("git_forge.v1.MergeRenameMode", [
    {
        no: 0,
        name: "MERGE_RENAME_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MERGE_RENAME_MODE_CAPPED",
        localName: "CAPPED"
    },
    {
        no: 2,
        name: "MERGE_RENAME_MODE_CAPPED_WITH_LINEAGE_SHADOW",
        localName: "CAPPED_WITH_LINEAGE_SHADOW"
    },
    {
        no: 3,
        name: "MERGE_RENAME_MODE_LINEAGE",
        localName: "LINEAGE"
    }
]), $Hg = x.makeEnum("git_forge.v1.CanMergeCacheOnlyOutcome", [
    {
        no: 0,
        name: "CAN_MERGE_CACHE_ONLY_OUTCOME_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CAN_MERGE_CACHE_ONLY_OUTCOME_HIT",
        localName: "HIT"
    },
    {
        no: 2,
        name: "CAN_MERGE_CACHE_ONLY_OUTCOME_MISS",
        localName: "MISS"
    }
]), HHg = x.makeEnum("git_forge.v1.CommitFileMode", [
    {
        no: 0,
        name: "COMMIT_FILE_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "COMMIT_FILE_MODE_REGULAR",
        localName: "REGULAR"
    },
    {
        no: 2,
        name: "COMMIT_FILE_MODE_EXECUTABLE",
        localName: "EXECUTABLE"
    },
    {
        no: 3,
        name: "COMMIT_FILE_MODE_SYMLINK",
        localName: "SYMLINK"
    }
]), WHg = x.makeEnum("git_forge.v1.GrepPriority", [
    {
        no: 0,
        name: "GREP_PRIORITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GREP_PRIORITY_INTERACTIVE",
        localName: "INTERACTIVE"
    },
    {
        no: 2,
        name: "GREP_PRIORITY_BACKGROUND",
        localName: "BACKGROUND"
    }
]), GHg = x.makeEnum("git_forge.v1.GrepLineKind", [
    {
        no: 0,
        name: "GREP_LINE_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "GREP_LINE_KIND_MATCH",
        localName: "MATCH"
    },
    {
        no: 2,
        name: "GREP_LINE_KIND_CONTEXT",
        localName: "CONTEXT"
    }
]), a1l = x.makeEnum("git_forge.v1.GeneratedAttributesRevision", [
    {
        no: 0,
        name: "GENERATED_ATTRIBUTES_REVISION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 3,
        name: "GENERATED_ATTRIBUTES_REVISION_OFF",
        localName: "OFF"
    },
    {
        no: 1,
        name: "GENERATED_ATTRIBUTES_REVISION_MERGE_BASE",
        localName: "MERGE_BASE"
    },
    {
        no: 2,
        name: "GENERATED_ATTRIBUTES_REVISION_HEAD",
        localName: "HEAD"
    }
]), jRi = x.makeEnum("git_forge.v1.FileMode", [
    {
        no: 0,
        name: "FILE_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FILE_MODE_REGULAR",
        localName: "REGULAR"
    },
    {
        no: 2,
        name: "FILE_MODE_EXECUTABLE",
        localName: "EXECUTABLE"
    },
    {
        no: 3,
        name: "FILE_MODE_SYMLINK",
        localName: "SYMLINK"
    },
    {
        no: 4,
        name: "FILE_MODE_GITLINK",
        localName: "GITLINK"
    }
]), Bps = x.makeEnum("git_forge.v1.ChangeKind", [
    {
        no: 0,
        name: "CHANGE_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHANGE_KIND_ADDED",
        localName: "ADDED"
    },
    {
        no: 2,
        name: "CHANGE_KIND_DELETED",
        localName: "DELETED"
    },
    {
        no: 3,
        name: "CHANGE_KIND_MODIFIED",
        localName: "MODIFIED"
    },
    {
        no: 4,
        name: "CHANGE_KIND_RENAMED",
        localName: "RENAMED"
    },
    {
        no: 5,
        name: "CHANGE_KIND_COPIED",
        localName: "COPIED"
    }
]), Ups = x.makeEnum("git_forge.v1.ListRefsFilter", [
    {
        no: 0,
        name: "LIST_REFS_FILTER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LIST_REFS_FILTER_ALL",
        localName: "ALL"
    },
    {
        no: 2,
        name: "LIST_REFS_FILTER_BRANCHES",
        localName: "BRANCHES"
    },
    {
        no: 3,
        name: "LIST_REFS_FILTER_TAGS",
        localName: "TAGS"
    }
]), qHg = x.makeMessageType("git_forge.v1.GetCommitResponse", ()=>[
        {
            no: 1,
            name: "commit",
            kind: "message",
            T: xKt
        }
    ]), zHg = x.makeMessageType("git_forge.v1.GetBlobResponse", ()=>[
        {
            no: 1,
            name: "blob",
            kind: "message",
            T: jps
        }
    ]), VHg = x.makeMessageType("git_forge.v1.GetTagResponse", ()=>[
        {
            no: 1,
            name: "tag",
            kind: "message",
            T: ZHg
        }
    ]), KHg = x.makeMessageType("git_forge.v1.GetTreeResponse", ()=>[
        {
            no: 1,
            name: "tree",
            kind: "message",
            T: YHg
        }
    ]), YHg = x.makeMessageType("git_forge.v1.Tree", ()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tree",
            kind: "message",
            T: XHg,
            repeated: !0
        },
        {
            no: 3,
            name: "truncated",
            kind: "scalar",
            T: 8
        }
    ]), XHg = x.makeMessageType("git_forge.v1.TreeEntry", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mode",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "size",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), ZHg = x.makeMessageType("git_forge.v1.Tag", ()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
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
            name: "tagger",
            kind: "message",
            T: AKt
        },
        {
            no: 5,
            name: "object_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "object_type",
            kind: "scalar",
            T: 9
        }
    ]), QHg = x.makeMessageType("git_forge.v1.LookupCommitsResponse", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: xKt,
            repeated: !0
        },
        {
            no: 2,
            name: "truncated",
            kind: "scalar",
            T: 8
        }
    ]), JHg = x.makeMessageType("git_forge.v1.CommitActivityDay", ()=>[
        {
            no: 1,
            name: "day_start",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "commits",
            kind: "scalar",
            T: 13
        }
    ]), l1l = x.makeMessageType("git_forge.v1.CommitActivityWeek", ()=>[
        {
            no: 1,
            name: "week_start",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "commits",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "additions",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "deletions",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "line_stats_partial_commits",
            kind: "scalar",
            T: 13
        }
    ]), eWg = x.makeMessageType("git_forge.v1.CommitActivityContributor", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "commits",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "weeks",
            kind: "message",
            T: l1l,
            repeated: !0
        },
        {
            no: 5,
            name: "additions",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "deletions",
            kind: "scalar",
            T: 4
        },
        {
            no: 7,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "days",
            kind: "message",
            T: JHg,
            repeated: !0
        }
    ]), tWg = x.makeMessageType("git_forge.v1.GetCommitActivityResponse", ()=>[
        {
            no: 1,
            name: "commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "weeks",
            kind: "message",
            T: l1l,
            repeated: !0
        },
        {
            no: 3,
            name: "contributors",
            kind: "message",
            T: eWg,
            repeated: !0
        },
        {
            no: 4,
            name: "total_commits",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "total_contributors",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "line_stats",
            kind: "enum",
            T: x.getEnumType(BHg)
        },
        {
            no: 8,
            name: "line_stats_partial_commits",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "base_is_ancestor",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "days_included",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "root_commit_sha",
            kind: "scalar",
            T: 9
        }
    ]), nWg = x.makeMessageType("git_forge.v1.ListCommitsInRangeResponse", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: xKt,
            repeated: !0
        },
        {
            no: 2,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "head_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "merge_base_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "truncated",
            kind: "scalar",
            T: 8
        }
    ]), iWg = x.makeMessageType("git_forge.v1.CompareCommitsResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(UHg)
        },
        {
            no: 2,
            name: "ahead_by",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "behind_by",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "head_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "merge_base_commit_sha",
            kind: "scalar",
            T: 9
        }
    ]), rWg = x.makeMessageType("git_forge.v1.CanMergeResponse", ()=>[
        {
            no: 1,
            name: "can_merge_without_conflicts",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "merged_tree_sha",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 3,
            name: "conflicted_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "rename_mode",
            kind: "enum",
            T: x.getEnumType(jHg)
        },
        {
            no: 5,
            name: "cache_only_outcome",
            kind: "enum",
            T: x.getEnumType($Hg)
        }
    ]), c1l = x.makeMessageType("git_forge.v1.CommitFileUpsert", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: x.getEnumType(HHg)
        }
    ]), sWg = x.makeMessageType("git_forge.v1.CommitFileDelete", []), u1l = x.makeMessageType("git_forge.v1.CommitFileOperation", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "upsert",
            kind: "message",
            T: c1l,
            oneof: "operation"
        },
        {
            no: 3,
            name: "delete",
            kind: "message",
            T: sWg,
            oneof: "operation"
        }
    ]), xKt = x.makeMessageType("git_forge.v1.Commit", ()=>[
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
            name: "author",
            kind: "message",
            T: AKt
        },
        {
            no: 4,
            name: "committer",
            kind: "message",
            T: AKt
        },
        {
            no: 5,
            name: "parent_shas",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "tree_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "change_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), AKt = x.makeMessageType("git_forge.v1.Signature", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "timezone_offset",
            kind: "scalar",
            T: 5
        }
    ]), RKt = x.makeMessageType("git_forge.v1.PathIdentifier", ()=>[
        {
            no: 1,
            name: "revision",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), jps = x.makeMessageType("git_forge.v1.FileContent", ()=>[
        {
            no: 1,
            name: "size",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "encoding",
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
            name: "sha",
            kind: "scalar",
            T: 9
        }
    ]), d1l = x.makeMessageType("git_forge.v1.DirectoryContent", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: CWg,
            repeated: !0
        },
        {
            no: 2,
            name: "sha",
            kind: "scalar",
            T: 9
        }
    ]), oWg = x.makeMessageType("git_forge.v1.ResolveRefPathResponse", ()=>[
        {
            no: 1,
            name: "path_identifier",
            kind: "message",
            T: RKt
        },
        {
            no: 2,
            name: "resolved_commit_sha",
            kind: "scalar",
            T: 9
        }
    ]), h1l = x.makeMessageType("git_forge.v1.GetRepoContentResponse", ()=>[
        {
            no: 1,
            name: "file_content",
            kind: "message",
            T: jps,
            oneof: "content"
        },
        {
            no: 2,
            name: "directory_content",
            kind: "message",
            T: d1l,
            oneof: "content"
        },
        {
            no: 3,
            name: "path_identifier",
            kind: "message",
            T: RKt
        },
        {
            no: 4,
            name: "resolved_commit_sha",
            kind: "scalar",
            T: 9
        }
    ]), aWg = x.makeMessageType("git_forge.v1.BatchRepoContentResult", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "found",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "file_content",
            kind: "message",
            T: jps,
            oneof: "content"
        },
        {
            no: 4,
            name: "directory_content",
            kind: "message",
            T: d1l,
            oneof: "content"
        }
    ]), lWg = x.makeMessageType("git_forge.v1.BatchGetRepoContentResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: aWg,
            repeated: !0
        },
        {
            no: 2,
            name: "resolved_commit_sha",
            kind: "scalar",
            T: 9
        }
    ]), cWg = x.makeMessageType("git_forge.v1.RepoContentDetails", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 3,
            name: "is_binary",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "too_large_to_introspect",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "sha",
            kind: "scalar",
            T: 9
        }
    ]), uWg = x.makeMessageType("git_forge.v1.GetRepoContentDetailsResponse", ()=>[
        {
            no: 1,
            name: "details",
            kind: "message",
            T: cWg,
            opt: !0
        },
        {
            no: 2,
            name: "path_identifier",
            kind: "message",
            T: RKt
        },
        {
            no: 3,
            name: "resolved_commit_sha",
            kind: "scalar",
            T: 9
        }
    ]), dWg = x.makeMessageType("git_forge.v1.GetFileHistoryResponse", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: tPn,
            repeated: !0
        }
    ]), hWg = x.makeMessageType("git_forge.v1.FileHistoryCommitEntry", ()=>[
        {
            no: 1,
            name: "commit",
            kind: "message",
            T: tPn
        },
        {
            no: 2,
            name: "diff_base_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "path_stats",
            kind: "message",
            T: $ps,
            opt: !0
        },
        {
            no: 9,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "renamed_from_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "rename_not_checked",
            kind: "scalar",
            T: 8
        }
    ]), pWg = x.makeMessageType("git_forge.v1.GetFileHistoryPageWithDiffStatsResponse", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: hWg,
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
    ]), mWg = x.makeMessageType("git_forge.v1.BlameLineRange", ()=>[
        {
            no: 1,
            name: "commit_sha",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "start_in_blamed_file",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "len",
            kind: "scalar",
            T: 13
        }
    ]), gWg = x.makeMessageType("git_forge.v1.BlameChunk", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: tPn,
            repeated: !0
        },
        {
            no: 2,
            name: "line_ranges",
            kind: "message",
            T: mWg,
            repeated: !0
        }
    ]), fWg = x.makeMessageType("git_forge.v1.TreeEntryBlame", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "last_commit",
            kind: "message",
            T: tPn
        }
    ]), vWg = x.makeMessageType("git_forge.v1.GetTreeBlameResponse", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: fWg,
            repeated: !0
        }
    ]), _Wg = x.makeMessageType("git_forge.v1.GetFuzzyPathsResponse", ()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "has_more",
            kind: "scalar",
            T: 8
        }
    ]), bWg = x.makeMessageType("git_forge.v1.ListTreePathsResponse", ()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "has_more",
            kind: "scalar",
            T: 8
        }
    ]), yWg = x.makeMessageType("git_forge.v1.GrepSearchOptions", ()=>[
        {
            no: 1,
            name: "literal",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "case_insensitive",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "whole_word",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "context_before",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "context_after",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "max_lines",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 7,
            name: "filter_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "includes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 9,
            name: "excludes",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), SWg = x.makeMessageType("git_forge.v1.GrepSubmatch", ()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "end",
            kind: "scalar",
            T: 13
        }
    ]), kWg = x.makeMessageType("git_forge.v1.GrepMatch", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "absolute_offset",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "submatches",
            kind: "message",
            T: SWg,
            repeated: !0
        },
        {
            no: 6,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(GHg)
        }
    ]), wWg = x.makeMessageType("git_forge.v1.GrepRepoChunk", ()=>[
        {
            no: 1,
            name: "matches",
            kind: "message",
            T: kWg,
            repeated: !0
        },
        {
            no: 2,
            name: "limit_hit",
            kind: "scalar",
            T: 8
        }
    ]), tPn = x.makeMessageType("git_forge.v1.ShortCommit", ()=>[
        {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "author_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "author_email",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "timestamp",
            kind: "scalar",
            T: 3
        }
    ]), CWg = x.makeMessageType("git_forge.v1.RepoContentEntry", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
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
            name: "sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "size",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), TWg = x.makeMessageType("git_forge.v1.PullRequestDiffChunk", ()=>[
        {
            no: 1,
            name: "header",
            kind: "message",
            T: DWg,
            opt: !0
        },
        {
            no: 3,
            name: "entries",
            kind: "message",
            T: PKt,
            repeated: !0
        }
    ]), EWg = x.makeMessageType("git_forge.v1.CommitDiffHeader", ()=>[
        {
            no: 1,
            name: "commit",
            kind: "message",
            T: xKt
        },
        {
            no: 2,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "stats",
            kind: "message",
            T: Hps
        },
        {
            no: 5,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "next_page_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "entries",
            kind: "message",
            T: PKt,
            repeated: !0
        }
    ]), IWg = x.makeMessageType("git_forge.v1.CommitDiffChunk", ()=>[
        {
            no: 1,
            name: "header",
            kind: "message",
            T: EWg,
            opt: !0
        },
        {
            no: 3,
            name: "entries",
            kind: "message",
            T: PKt,
            repeated: !0
        }
    ]), xWg = x.makeMessageType("git_forge.v1.CommitDiff2Header", ()=>[
        {
            no: 1,
            name: "commit",
            kind: "message",
            T: xKt
        },
        {
            no: 2,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "entries",
            kind: "message",
            T: PKt,
            repeated: !0
        }
    ]), AWg = x.makeMessageType("git_forge.v1.CommitDiff2Entry", ()=>[
        {
            no: 1,
            name: "header_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "stats",
            kind: "message",
            T: $ps
        },
        {
            no: 3,
            name: "patch",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), RWg = x.makeMessageType("git_forge.v1.CommitDiff2Chunk", ()=>[
        {
            no: 1,
            name: "header",
            kind: "message",
            T: xWg,
            opt: !0
        },
        {
            no: 2,
            name: "entries",
            kind: "message",
            T: AWg,
            repeated: !0
        },
        {
            no: 3,
            name: "trailer",
            kind: "message",
            T: Hps,
            opt: !0
        }
    ]), PWg = x.makeMessageType("git_forge.v1.GetCommitChangedPathsResponse", ()=>[
        {
            no: 1,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "entries",
            kind: "message",
            T: PKt,
            repeated: !0
        }
    ]), MWg = x.makeMessageType("git_forge.v1.GetCommitDiffStatsResponse", ()=>[
        {
            no: 1,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "stats",
            kind: "message",
            T: Hps
        }
    ]), DWg = x.makeMessageType("git_forge.v1.DiffHeader", ()=>[
        {
            no: 1,
            name: "merge_base_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "has_more",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "next_page_cursor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "entries",
            kind: "message",
            T: PKt,
            repeated: !0
        }
    ]), $ps = x.makeMessageType("git_forge.v1.FileStats", ()=>[
        {
            no: 1,
            name: "additions",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "deletions",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "is_binary",
            kind: "scalar",
            T: 8
        }
    ]), PKt = x.makeMessageType("git_forge.v1.DiffEntry", ()=>[
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
            name: "old_mode",
            kind: "enum",
            T: x.getEnumType(jRi),
            opt: !0
        },
        {
            no: 5,
            name: "new_mode",
            kind: "enum",
            T: x.getEnumType(jRi),
            opt: !0
        },
        {
            no: 6,
            name: "old_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "new_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "stats",
            kind: "message",
            T: $ps,
            opt: !0
        },
        {
            no: 9,
            name: "patch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "is_generated",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Hps = x.makeMessageType("git_forge.v1.CommitDiffStats", ()=>[
        {
            no: 1,
            name: "files_changed",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "additions",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "deletions",
            kind: "scalar",
            T: 5
        }
    ]), p1l = x.makeMessageType("git_forge.v1.RefInfo", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "object_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "object_type",
            kind: "scalar",
            T: 9
        }
    ]), NWg = x.makeMessageType("git_forge.v1.ListRefsResponse", ()=>[
        {
            no: 1,
            name: "refs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "ref_infos",
            kind: "message",
            T: p1l,
            repeated: !0
        },
        {
            no: 5,
            name: "next_page_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), LWg = x.makeMessageType("git_forge.v1.SearchRefsResponse", ()=>[
        {
            no: 1,
            name: "ref_infos",
            kind: "message",
            T: p1l,
            repeated: !0
        },
        {
            no: 2,
            name: "exact_match",
            kind: "scalar",
            T: 8
        }
    ]);

}
