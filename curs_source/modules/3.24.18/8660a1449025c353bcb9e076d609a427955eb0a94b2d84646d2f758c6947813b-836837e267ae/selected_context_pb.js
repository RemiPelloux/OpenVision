import { rbt, z4t } from "./agent_skills_pb.js";
import { Wde, Xet } from "./cursor_rules_pb.js";
import { Bpn, zet } from "./ls_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { i5e, n5e } from "./utils_pb_2.js";
var xSr, V4t, Y5o, X5o, Eni, xmn, FSd, Ini, BSd, Z5o, USd, jSd, K4t, $Sd, Q5o, HSd, ASr, J5o, eFo, RSr, tFo, WSd, nFo, GSd, H$e, qSd, xni, iFo, rFo, zSd, VSd, KSd, YSd, sFo, oFo, Y4t, aFo, PSr, Ani, lFo, cFo, XSd, MSr, qte, uFo, gY, DSr, ZSd, QSd, JSd, dFo, Amn, hFo, pFo;
export { $Sd, ASr, Amn, Ani, BSd, DSr, Eni, FSd, GSd, H$e, HSd, Ini, J5o, JSd, K4t, KSd, MSr, PSr, Q5o, QSd, RSr, USd, V4t, VSd, WSd, X5o, XSd, Y4t, Y5o, YSd, Z5o, ZSd, aFo, cFo, dFo, eFo, gY, hFo, iFo, jSd, lFo, nFo, oFo, pFo, qSd, qte, rFo, sFo, tFo, uFo, xSr, xmn, xni, zSd };
var __wakaru_Rj_initialized = false;
export function Rj() {
if (__wakaru_Rj_initialized) return;
__wakaru_Rj_initialized = true;
"use strict";
E(), hr(), i5e(), zet(), Xet(), rbt(), xSr = x.makeEnum("agent.v1.SelectedPluginCapabilityType", [
    {
        no: 0,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_COMMAND",
        localName: "COMMAND"
    },
    {
        no: 2,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SKILL",
        localName: "SKILL"
    },
    {
        no: 3,
        name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SUBAGENT",
        localName: "SUBAGENT"
    }
]), V4t = x.makeMessageType("agent.v1.SelectedImage", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 8,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 9,
            name: "blob_id_with_data",
            kind: "message",
            T: Y5o,
            oneof: "data_or_blob_id"
        },
        {
            no: 10,
            name: "prompt_upload_ref",
            kind: "message",
            T: Eni,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "uuid",
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
            name: "dimension",
            kind: "message",
            T: X5o
        },
        {
            no: 7,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]), Y5o = x.makeMessageType("agent.v1.SelectedImage.BlobIdWithData", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ], {
    localName: "SelectedImage_BlobIdWithData"
}), X5o = x.makeMessageType("agent.v1.SelectedImage.Dimension", ()=>[
        {
            no: 1,
            name: "width",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "height",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "SelectedImage_Dimension"
}), Eni = x.makeMessageType("agent.v1.PromptUploadRef", ()=>[
        {
            no: 1,
            name: "upload_id",
            kind: "scalar",
            T: 9
        }
    ]), xmn = x.makeMessageType("agent.v1.SelectedDocument", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 8,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 9,
            name: "blob_id_with_data",
            kind: "message",
            T: FSd,
            oneof: "data_or_blob_id"
        },
        {
            no: 10,
            name: "prompt_upload_ref",
            kind: "message",
            T: Eni,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "filename",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), FSd = x.makeMessageType("agent.v1.SelectedDocument.BlobIdWithData", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ], {
    localName: "SelectedDocument_BlobIdWithData"
}), Ini = x.makeMessageType("agent.v1.SelectedVideo", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 8,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        },
        {
            no: 9,
            name: "blob_id_with_data",
            kind: "message",
            T: BSd,
            oneof: "data_or_blob_id"
        },
        {
            no: 11,
            name: "signed_url",
            kind: "message",
            T: Z5o,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "uuid",
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
            name: "fps",
            kind: "scalar",
            T: 2,
            opt: !0
        },
        {
            no: 7,
            name: "mime_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "filename",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "materialize_to_filesystem",
            kind: "scalar",
            T: 8
        }
    ]), BSd = x.makeMessageType("agent.v1.SelectedVideo.BlobIdWithData", ()=>[
        {
            no: 1,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ], {
    localName: "SelectedVideo_BlobIdWithData"
}), Z5o = x.makeMessageType("agent.v1.SelectedVideo.SignedUrl", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expires_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "refresh_after_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SelectedVideo_SignedUrl"
}), USd = x.makeMessageType("agent.v1.ExtraContextEntry", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9,
            oneof: "data_or_blob_id"
        },
        {
            no: 2,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data_or_blob_id"
        }
    ]), jSd = x.makeMessageType("agent.v1.SelectedFile", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), K4t = x.makeMessageType("agent.v1.SelectedCodeSelection", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: n5e
        }
    ]), $Sd = x.makeMessageType("agent.v1.SelectedTerminal", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Q5o = x.makeMessageType("agent.v1.SelectedTerminalSelection", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
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
            name: "range",
            kind: "message",
            T: n5e
        }
    ]), HSd = x.makeMessageType("agent.v1.SelectedFolder", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "directory_tree",
            kind: "message",
            T: Bpn
        }
    ]), ASr = x.makeMessageType("agent.v1.SelectedExternalLink", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pdf_content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "is_pdf",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "filename",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            opt: !0
        }
    ]), J5o = x.makeMessageType("agent.v1.SelectedCursorRule", ()=>[
        {
            no: 1,
            name: "rule",
            kind: "message",
            T: Wde
        }
    ]), eFo = x.makeMessageType("agent.v1.SelectedGitDiff", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "full_content_length_char_count",
            kind: "scalar",
            T: 5
        }
    ]), RSr = x.makeMessageType("agent.v1.SelectedGitDiffFromBranchToMain", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "full_content_length_char_count",
            kind: "scalar",
            T: 5
        }
    ]), tFo = x.makeMessageType("agent.v1.SelectedGitCommit", ()=>[
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
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "diff",
            kind: "scalar",
            T: 9
        }
    ]), WSd = x.makeMessageType("agent.v1.SelectedPullRequest", ()=>[
        {
            no: 1,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "folder_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "summary_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            opt: !0
        }
    ]), nFo = x.makeMessageType("agent.v1.SelectedGitPRDiffSelection", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "diff_content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            opt: !0
        }
    ]), GSd = x.makeMessageType("agent.v1.SelectedPluginCapabilityRef", ()=>[
        {
            no: 1,
            name: "plugin_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "capability_type",
            kind: "enum",
            T: x.getEnumType(xSr)
        },
        {
            no: 3,
            name: "source_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "snapshot_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "resolved_commit_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), H$e = x.makeMessageType("agent.v1.SelectedCursorCommand", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "plugin_capability",
            kind: "message",
            T: GSd,
            opt: !0
        },
        {
            no: 4,
            name: "full_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "display_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), qSd = x.makeMessageType("agent.v1.SelectedDocumentation", ()=>[
        {
            no: 1,
            name: "doc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), xni = x.makeMessageType("agent.v1.SelectedPastChat", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), iFo = x.makeMessageType("agent.v1.RecentAgent", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "overview",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), rFo = x.makeMessageType("agent.v1.RecentAgentsContext", ()=>[
        {
            no: 1,
            name: "recent_agents",
            kind: "message",
            T: iFo,
            repeated: !0
        }
    ]), zSd = x.makeMessageType("agent.v1.CallFrame", ()=>[
        {
            no: 1,
            name: "function_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "column_number",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), VSd = x.makeMessageType("agent.v1.StackTrace", ()=>[
        {
            no: 1,
            name: "call_frames",
            kind: "message",
            T: zSd,
            repeated: !0
        },
        {
            no: 2,
            name: "raw_stack_trace",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), KSd = x.makeMessageType("agent.v1.SelectedConsoleLog", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "level",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "client_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stack_trace",
            kind: "message",
            T: VSd,
            opt: !0
        },
        {
            no: 7,
            name: "object_data_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), YSd = x.makeMessageType("agent.v1.SelectedUIElement", ()=>[
        {
            no: 1,
            name: "element",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "xpath",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "text_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extra",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "component",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "component_props_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), sFo = x.makeMessageType("agent.v1.SelectedSubagent", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), oFo = x.makeMessageType("agent.v1.SelectedBrowser", ()=>[
        {
            no: 1,
            name: "browser_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "page_title",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Y4t = x.makeMessageType("agent.v1.SelectedAgenticGitActionCommitParams", ()=>[
        {
            no: 1,
            name: "files_to_commit",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "files_to_exclude_from_commit",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "should_stage_all_changes",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "create_pr_draft",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "files_to_commit_with_status",
            kind: "message",
            T: PSr,
            repeated: !0
        },
        {
            no: 6,
            name: "files_to_exclude_from_commit_with_status",
            kind: "message",
            T: PSr,
            repeated: !0
        }
    ]), aFo = x.makeMessageType("agent.v1.SelectedAgenticGitActionCreateBranchParams", []), PSr = x.makeMessageType("agent.v1.SelectedAgenticGitFileWithStatus", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Ani = x.makeMessageType("agent.v1.SelectedAgenticGitActionPushParams", ()=>[
        {
            no: 1,
            name: "files_to_push",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "create_pr_draft",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), lFo = x.makeMessageType("agent.v1.SelectedAgenticGitActionFixMergeConflictsParams", ()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "pr_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), cFo = x.makeMessageType("agent.v1.SelectedAgenticGitActionBabysitPrInCloudParams", ()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), XSd = x.makeMessageType("agent.v1.SelectedAgenticGitActionUpdateBranchParams", ()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), MSr = x.makeMessageType("agent.v1.SelectedAgenticGitActionPullLocallyParams", ()=>[
        {
            no: 1,
            name: "remote_branch",
            kind: "scalar",
            T: 9
        }
    ]), qte = x.makeMessageType("agent.v1.SelectedAgenticGitAction", ()=>[
        {
            no: 2,
            name: "commit_params",
            kind: "message",
            T: Y4t,
            oneof: "params"
        },
        {
            no: 6,
            name: "commit_and_push_params",
            kind: "message",
            T: Y4t,
            oneof: "params"
        },
        {
            no: 3,
            name: "push_params",
            kind: "message",
            T: Ani,
            oneof: "params"
        },
        {
            no: 7,
            name: "create_pr_params",
            kind: "message",
            T: Ani,
            oneof: "params"
        },
        {
            no: 8,
            name: "create_pr_with_changes_params",
            kind: "message",
            T: Y4t,
            oneof: "params"
        },
        {
            no: 4,
            name: "fix_merge_conflicts_params",
            kind: "message",
            T: lFo,
            oneof: "params"
        },
        {
            no: 11,
            name: "babysit_pr_in_cloud_params",
            kind: "message",
            T: cFo,
            oneof: "params"
        },
        {
            no: 14,
            name: "apply_locally_params",
            kind: "message",
            T: MSr,
            oneof: "params"
        },
        {
            no: 15,
            name: "checkout_branch_params",
            kind: "message",
            T: MSr,
            oneof: "params"
        },
        {
            no: 12,
            name: "create_branch_and_commit_params",
            kind: "message",
            T: Y4t,
            oneof: "params"
        },
        {
            no: 13,
            name: "create_branch_commit_and_push_params",
            kind: "message",
            T: Y4t,
            oneof: "params"
        },
        {
            no: 16,
            name: "update_branch_params",
            kind: "message",
            T: XSd,
            oneof: "params"
        },
        {
            no: 17,
            name: "create_branch_params",
            kind: "message",
            T: aFo,
            oneof: "params"
        },
        {
            no: 5,
            name: "branch_context",
            kind: "message",
            T: uFo,
            opt: !0
        },
        {
            no: 9,
            name: "path_to_template_file",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "path_to_template_dir",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), uFo = x.makeMessageType("agent.v1.SelectedGitBranchContext", ()=>[
        {
            no: 1,
            name: "current_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "agent_branch_prefix",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), gY = x.makeMessageType("agent.v1.SelectedContext", ()=>[
        {
            no: 1,
            name: "selected_images",
            kind: "message",
            T: V4t,
            repeated: !0
        },
        {
            no: 2,
            name: "invocation_context",
            kind: "message",
            T: DSr,
            opt: !0
        },
        {
            no: 3,
            name: "extra_context",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 16,
            name: "extra_context_entries",
            kind: "message",
            T: USd,
            repeated: !0
        },
        {
            no: 4,
            name: "files",
            kind: "message",
            T: jSd,
            repeated: !0
        },
        {
            no: 5,
            name: "code_selections",
            kind: "message",
            T: K4t,
            repeated: !0
        },
        {
            no: 6,
            name: "terminals",
            kind: "message",
            T: $Sd,
            repeated: !0
        },
        {
            no: 7,
            name: "terminal_selections",
            kind: "message",
            T: Q5o,
            repeated: !0
        },
        {
            no: 8,
            name: "folders",
            kind: "message",
            T: HSd,
            repeated: !0
        },
        {
            no: 9,
            name: "external_links",
            kind: "message",
            T: ASr,
            repeated: !0
        },
        {
            no: 10,
            name: "cursor_rules",
            kind: "message",
            T: J5o,
            repeated: !0
        },
        {
            no: 18,
            name: "git_diff",
            kind: "message",
            T: eFo,
            opt: !0
        },
        {
            no: 11,
            name: "git_diff_from_branch_to_main",
            kind: "message",
            T: RSr,
            opt: !0
        },
        {
            no: 12,
            name: "cursor_commands",
            kind: "message",
            T: H$e,
            repeated: !0
        },
        {
            no: 13,
            name: "documentations",
            kind: "message",
            T: qSd,
            repeated: !0
        },
        {
            no: 14,
            name: "ui_elements",
            kind: "message",
            T: YSd,
            repeated: !0
        },
        {
            no: 15,
            name: "console_logs",
            kind: "message",
            T: KSd,
            repeated: !0
        },
        {
            no: 17,
            name: "git_commits",
            kind: "message",
            T: tFo,
            repeated: !0
        },
        {
            no: 19,
            name: "past_chats",
            kind: "message",
            T: xni,
            repeated: !0
        },
        {
            no: 20,
            name: "git_pr_diff_selections",
            kind: "message",
            T: nFo,
            repeated: !0
        },
        {
            no: 21,
            name: "selected_pull_requests",
            kind: "message",
            T: WSd,
            repeated: !0
        },
        {
            no: 22,
            name: "selected_subagents",
            kind: "message",
            T: sFo,
            repeated: !0
        },
        {
            no: 23,
            name: "selected_videos",
            kind: "message",
            T: Ini,
            repeated: !0
        },
        {
            no: 24,
            name: "selected_browsers",
            kind: "message",
            T: oFo,
            repeated: !0
        },
        {
            no: 25,
            name: "selected_documents",
            kind: "message",
            T: xmn,
            repeated: !0
        },
        {
            no: 26,
            name: "selected_skills",
            kind: "message",
            T: z4t,
            repeated: !0
        },
        {
            no: 27,
            name: "recent_agents_context",
            kind: "message",
            T: rFo,
            opt: !0
        },
        {
            no: 34,
            name: "selected_agentic_git_action",
            kind: "message",
            T: qte,
            opt: !0
        }
    ]), DSr = x.makeMessageType("agent.v1.InvocationContext", ()=>[
        {
            no: 1,
            name: "slack_thread",
            kind: "message",
            T: ZSd,
            oneof: "data"
        },
        {
            no: 2,
            name: "github_pr",
            kind: "message",
            T: JSd,
            oneof: "data"
        },
        {
            no: 3,
            name: "ide_state",
            kind: "message",
            T: dFo,
            oneof: "data"
        },
        {
            no: 4,
            name: "microsoft_teams_thread",
            kind: "message",
            T: QSd,
            oneof: "data"
        },
        {
            no: 10,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data"
        }
    ]), ZSd = x.makeMessageType("agent.v1.InvocationContext.SlackThread", ()=>[
        {
            no: 1,
            name: "thread",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "channel_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "channel_purpose",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "channel_topic",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "sender_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "sender_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "sender_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "is_directly_addressed",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "InvocationContext_SlackThread"
}), QSd = x.makeMessageType("agent.v1.InvocationContext.MicrosoftTeamsThread", ()=>[
        {
            no: 1,
            name: "thread",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "channel_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "team_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "channel_description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "team_description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "InvocationContext_MicrosoftTeamsThread"
}), JSd = x.makeMessageType("agent.v1.InvocationContext.GithubPR", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "comments",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "ci_failures",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "InvocationContext_GithubPR"
}), dFo = x.makeMessageType("agent.v1.InvocationContext.IdeState", ()=>[
        {
            no: 1,
            name: "visible_files",
            kind: "message",
            T: Amn,
            repeated: !0
        },
        {
            no: 2,
            name: "recently_viewed_files",
            kind: "message",
            T: Amn,
            repeated: !0
        },
        {
            no: 3,
            name: "currently_viewed_prs",
            kind: "message",
            T: pFo,
            repeated: !0
        }
    ], {
    localName: "InvocationContext_IdeState"
}), Amn = x.makeMessageType("agent.v1.InvocationContext.IdeState.File", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "cursor_position",
            kind: "message",
            T: hFo,
            opt: !0
        },
        {
            no: 4,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "active_command",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "InvocationContext_IdeState_File"
}), hFo = x.makeMessageType("agent.v1.InvocationContext.IdeState.File.CursorPosition", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "InvocationContext_IdeState_File_CursorPosition"
}), pFo = x.makeMessageType("agent.v1.InvocationContext.IdeState.ViewedPullRequest", ()=>[
        {
            no: 1,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "folder_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "summary_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "InvocationContext_IdeState_ViewedPullRequest"
});

}
