import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var AAd, yro, RAd, DAd, MAd, PAd, LAd, NAd;
export { AAd, DAd, LAd, MAd, NAd, PAd, RAd, yro };
var __wakaru_OAd_initialized = false;
export function OAd() {
if (__wakaru_OAd_initialized) return;
__wakaru_OAd_initialized = true;
"use strict";
x(), bi(), AAd = k.makeMessageType("aiserver.v1.ReportAgentSnapshotRequest", ()=>[
        {
            no: 1,
            name: "agent_request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "initial_file_snapshots",
            kind: "message",
            T: yro,
            repeated: !0
        },
        {
            no: 3,
            name: "file_snapshots",
            kind: "message",
            T: yro,
            repeated: !0
        },
        {
            no: 4,
            name: "too_big_files",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 11,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "snapshot_date_unix_milliseconds",
            kind: "scalar",
            T: 1
        }
    ]), yro = k.makeMessageType("aiserver.v1.RequestTrackingFileSnapshot", ()=>[
        {
            no: 1,
            name: "fs_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "file_size_bytes",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "num_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(RAd)
        },
        {
            no: 5,
            name: "diff_timed_out",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "git_info",
            kind: "message",
            T: MAd
        },
        {
            no: 6,
            name: "diff_changes",
            kind: "message",
            T: DAd,
            repeated: !0
        },
        {
            no: 7,
            name: "original_file_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), RAd = k.makeEnum("aiserver.v1.RequestTrackingFileSnapshot.Kind", [
    {
        no: 0,
        name: "KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "KIND_ADDED",
        localName: "ADDED"
    },
    {
        no: 2,
        name: "KIND_DELETED",
        localName: "DELETED"
    },
    {
        no: 3,
        name: "KIND_MODIFIED",
        localName: "MODIFIED"
    }
]), DAd = k.makeMessageType("aiserver.v1.RequestTrackingFileSnapshot.DiffChange", ()=>[
        {
            no: 1,
            name: "original_start_line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "original_end_line_number_exclusive_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "modified_start_line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "modified_end_line_number_exclusive_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "tokenized_added_lines",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 5,
            name: "added_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "RequestTrackingFileSnapshot_DiffChange"
}), MAd = k.makeMessageType("aiserver.v1.RequestTrackingFileGitInfo", ()=>[
        {
            no: 1,
            name: "git_info",
            kind: "message",
            T: PAd,
            oneof: "info"
        },
        {
            no: 2,
            name: "no_repo_found",
            kind: "scalar",
            T: 8,
            oneof: "info"
        }
    ]), PAd = k.makeMessageType("aiserver.v1.RequestTrackingFileGitInfo.GitInfo", ()=>[
        {
            no: 1,
            name: "git_root",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "branch",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "RequestTrackingFileGitInfo_GitInfo"
}), LAd = k.makeMessageType("aiserver.v1.ReportAgentSnapshotResponse", []), NAd = k.makeMessageType("aiserver.v1.OnlineMetricsConfig", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "max_requests_tracked",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "max_requests_tracked_mb",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "max_request_retention_seconds",
            kind: "scalar",
            T: 1
        },
        {
            no: 5,
            name: "send_original_file_contents_for_initial_snapshot",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "send_full_added_lines_in_diff_changes",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "num_commits_tracked",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "time_intervals_tracked_minutes",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 9,
            name: "too_big_file_size_bytes",
            kind: "scalar",
            T: 5
        }
    ]);

}
