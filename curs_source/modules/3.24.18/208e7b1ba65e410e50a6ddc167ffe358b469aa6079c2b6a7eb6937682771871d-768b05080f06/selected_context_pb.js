import { Hy, qy } from "./agent_skills_pb.js";
import { Fg, RN } from "./cursor_rules_pb.js";
import { Lg, mu } from "./ls_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
import { So, hP } from "./utils_pb.js";
var jae, Hae, qae, Kae, YN, zae, Yae, Jae, Xae, Qae, Zae, eoe, toe, noe, roe, soe, ioe, aoe, ooe, coe, loe, doe, uoe, moe, sw, poe, iw, hoe, goe, foe, _oe, voe, Toe, koe, Soe, fu, yoe, JN, XN, woe, Eoe, boe, QN, Roe, Coe, Ioe, Aoe, Moe, Poe, Noe, Doe, ZN, Ooe, Loe;
export { Aoe, Coe, Doe, Eoe, Hae, Ioe, JN, Jae, Kae, Loe, Moe, Noe, Ooe, Poe, QN, Qae, Roe, Soe, Toe, XN, Xae, YN, Yae, ZN, Zae, _oe, aoe, boe, coe, doe, eoe, foe, fu, goe, hoe, ioe, iw, jae, koe, loe, moe, noe, ooe, poe, qae, roe, soe, sw, toe, uoe, voe, woe, yoe, zae };
var __wakaru_aw_initialized = false;
export function aw() {
if (__wakaru_aw_initialized) return;
__wakaru_aw_initialized = true;
"use strict";
h(), F(), So(), Lg(), RN(), qy(), jae = c.makeEnum("agent.v1.SelectedPluginCapabilityType", [
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
]), Hae = c.makeMessageType("agent.v1.SelectedImage", ()=>[
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
            T: qae,
            oneof: "data_or_blob_id"
        },
        {
            no: 10,
            name: "prompt_upload_ref",
            kind: "message",
            T: YN,
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
            T: Kae
        },
        {
            no: 7,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]), qae = c.makeMessageType("agent.v1.SelectedImage.BlobIdWithData", ()=>[
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
}), Kae = c.makeMessageType("agent.v1.SelectedImage.Dimension", ()=>[
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
}), YN = c.makeMessageType("agent.v1.PromptUploadRef", ()=>[
        {
            no: 1,
            name: "upload_id",
            kind: "scalar",
            T: 9
        }
    ]), zae = c.makeMessageType("agent.v1.SelectedDocument", ()=>[
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
            T: Yae,
            oneof: "data_or_blob_id"
        },
        {
            no: 10,
            name: "prompt_upload_ref",
            kind: "message",
            T: YN,
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
    ]), Yae = c.makeMessageType("agent.v1.SelectedDocument.BlobIdWithData", ()=>[
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
}), Jae = c.makeMessageType("agent.v1.SelectedVideo", ()=>[
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
            T: Xae,
            oneof: "data_or_blob_id"
        },
        {
            no: 11,
            name: "signed_url",
            kind: "message",
            T: Qae,
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
    ]), Xae = c.makeMessageType("agent.v1.SelectedVideo.BlobIdWithData", ()=>[
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
}), Qae = c.makeMessageType("agent.v1.SelectedVideo.SignedUrl", ()=>[
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
}), Zae = c.makeMessageType("agent.v1.ExtraContextEntry", ()=>[
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
    ]), eoe = c.makeMessageType("agent.v1.SelectedFile", ()=>[
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
    ]), toe = c.makeMessageType("agent.v1.SelectedCodeSelection", ()=>[
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
            T: hP
        }
    ]), noe = c.makeMessageType("agent.v1.SelectedTerminal", ()=>[
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
    ]), roe = c.makeMessageType("agent.v1.SelectedTerminalSelection", ()=>[
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
            T: hP
        }
    ]), soe = c.makeMessageType("agent.v1.SelectedFolder", ()=>[
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
            T: mu
        }
    ]), ioe = c.makeMessageType("agent.v1.SelectedExternalLink", ()=>[
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
    ]), aoe = c.makeMessageType("agent.v1.SelectedCursorRule", ()=>[
        {
            no: 1,
            name: "rule",
            kind: "message",
            T: Fg
        }
    ]), ooe = c.makeMessageType("agent.v1.SelectedGitDiff", ()=>[
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
    ]), coe = c.makeMessageType("agent.v1.SelectedGitDiffFromBranchToMain", ()=>[
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
    ]), loe = c.makeMessageType("agent.v1.SelectedGitCommit", ()=>[
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
    ]), doe = c.makeMessageType("agent.v1.SelectedPullRequest", ()=>[
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
    ]), uoe = c.makeMessageType("agent.v1.SelectedGitPRDiffSelection", ()=>[
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
    ]), moe = c.makeMessageType("agent.v1.SelectedPluginCapabilityRef", ()=>[
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
            T: c.getEnumType(jae)
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
    ]), sw = c.makeMessageType("agent.v1.SelectedCursorCommand", ()=>[
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
            T: moe,
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
    ]), poe = c.makeMessageType("agent.v1.SelectedDocumentation", ()=>[
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
    ]), iw = c.makeMessageType("agent.v1.SelectedPastChat", ()=>[
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
    ]), hoe = c.makeMessageType("agent.v1.RecentAgent", ()=>[
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
    ]), goe = c.makeMessageType("agent.v1.RecentAgentsContext", ()=>[
        {
            no: 1,
            name: "recent_agents",
            kind: "message",
            T: hoe,
            repeated: !0
        }
    ]), foe = c.makeMessageType("agent.v1.CallFrame", ()=>[
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
    ]), _oe = c.makeMessageType("agent.v1.StackTrace", ()=>[
        {
            no: 1,
            name: "call_frames",
            kind: "message",
            T: foe,
            repeated: !0
        },
        {
            no: 2,
            name: "raw_stack_trace",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), voe = c.makeMessageType("agent.v1.SelectedConsoleLog", ()=>[
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
            T: _oe,
            opt: !0
        },
        {
            no: 7,
            name: "object_data_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Toe = c.makeMessageType("agent.v1.SelectedUIElement", ()=>[
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
    ]), koe = c.makeMessageType("agent.v1.SelectedSubagent", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), Soe = c.makeMessageType("agent.v1.SelectedBrowser", ()=>[
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
    ]), fu = c.makeMessageType("agent.v1.SelectedAgenticGitActionCommitParams", ()=>[
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
            T: JN,
            repeated: !0
        },
        {
            no: 6,
            name: "files_to_exclude_from_commit_with_status",
            kind: "message",
            T: JN,
            repeated: !0
        }
    ]), yoe = c.makeMessageType("agent.v1.SelectedAgenticGitActionCreateBranchParams", []), JN = c.makeMessageType("agent.v1.SelectedAgenticGitFileWithStatus", ()=>[
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
    ]), XN = c.makeMessageType("agent.v1.SelectedAgenticGitActionPushParams", ()=>[
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
    ]), woe = c.makeMessageType("agent.v1.SelectedAgenticGitActionFixMergeConflictsParams", ()=>[
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
    ]), Eoe = c.makeMessageType("agent.v1.SelectedAgenticGitActionBabysitPrInCloudParams", ()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), boe = c.makeMessageType("agent.v1.SelectedAgenticGitActionUpdateBranchParams", ()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), QN = c.makeMessageType("agent.v1.SelectedAgenticGitActionPullLocallyParams", ()=>[
        {
            no: 1,
            name: "remote_branch",
            kind: "scalar",
            T: 9
        }
    ]), Roe = c.makeMessageType("agent.v1.SelectedAgenticGitAction", ()=>[
        {
            no: 2,
            name: "commit_params",
            kind: "message",
            T: fu,
            oneof: "params"
        },
        {
            no: 6,
            name: "commit_and_push_params",
            kind: "message",
            T: fu,
            oneof: "params"
        },
        {
            no: 3,
            name: "push_params",
            kind: "message",
            T: XN,
            oneof: "params"
        },
        {
            no: 7,
            name: "create_pr_params",
            kind: "message",
            T: XN,
            oneof: "params"
        },
        {
            no: 8,
            name: "create_pr_with_changes_params",
            kind: "message",
            T: fu,
            oneof: "params"
        },
        {
            no: 4,
            name: "fix_merge_conflicts_params",
            kind: "message",
            T: woe,
            oneof: "params"
        },
        {
            no: 11,
            name: "babysit_pr_in_cloud_params",
            kind: "message",
            T: Eoe,
            oneof: "params"
        },
        {
            no: 14,
            name: "apply_locally_params",
            kind: "message",
            T: QN,
            oneof: "params"
        },
        {
            no: 15,
            name: "checkout_branch_params",
            kind: "message",
            T: QN,
            oneof: "params"
        },
        {
            no: 12,
            name: "create_branch_and_commit_params",
            kind: "message",
            T: fu,
            oneof: "params"
        },
        {
            no: 13,
            name: "create_branch_commit_and_push_params",
            kind: "message",
            T: fu,
            oneof: "params"
        },
        {
            no: 16,
            name: "update_branch_params",
            kind: "message",
            T: boe,
            oneof: "params"
        },
        {
            no: 17,
            name: "create_branch_params",
            kind: "message",
            T: yoe,
            oneof: "params"
        },
        {
            no: 5,
            name: "branch_context",
            kind: "message",
            T: Coe,
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
    ]), Coe = c.makeMessageType("agent.v1.SelectedGitBranchContext", ()=>[
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
    ]), Ioe = c.makeMessageType("agent.v1.SelectedContext", ()=>[
        {
            no: 1,
            name: "selected_images",
            kind: "message",
            T: Hae,
            repeated: !0
        },
        {
            no: 2,
            name: "invocation_context",
            kind: "message",
            T: Aoe,
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
            T: Zae,
            repeated: !0
        },
        {
            no: 4,
            name: "files",
            kind: "message",
            T: eoe,
            repeated: !0
        },
        {
            no: 5,
            name: "code_selections",
            kind: "message",
            T: toe,
            repeated: !0
        },
        {
            no: 6,
            name: "terminals",
            kind: "message",
            T: noe,
            repeated: !0
        },
        {
            no: 7,
            name: "terminal_selections",
            kind: "message",
            T: roe,
            repeated: !0
        },
        {
            no: 8,
            name: "folders",
            kind: "message",
            T: soe,
            repeated: !0
        },
        {
            no: 9,
            name: "external_links",
            kind: "message",
            T: ioe,
            repeated: !0
        },
        {
            no: 10,
            name: "cursor_rules",
            kind: "message",
            T: aoe,
            repeated: !0
        },
        {
            no: 18,
            name: "git_diff",
            kind: "message",
            T: ooe,
            opt: !0
        },
        {
            no: 11,
            name: "git_diff_from_branch_to_main",
            kind: "message",
            T: coe,
            opt: !0
        },
        {
            no: 12,
            name: "cursor_commands",
            kind: "message",
            T: sw,
            repeated: !0
        },
        {
            no: 13,
            name: "documentations",
            kind: "message",
            T: poe,
            repeated: !0
        },
        {
            no: 14,
            name: "ui_elements",
            kind: "message",
            T: Toe,
            repeated: !0
        },
        {
            no: 15,
            name: "console_logs",
            kind: "message",
            T: voe,
            repeated: !0
        },
        {
            no: 17,
            name: "git_commits",
            kind: "message",
            T: loe,
            repeated: !0
        },
        {
            no: 19,
            name: "past_chats",
            kind: "message",
            T: iw,
            repeated: !0
        },
        {
            no: 20,
            name: "git_pr_diff_selections",
            kind: "message",
            T: uoe,
            repeated: !0
        },
        {
            no: 21,
            name: "selected_pull_requests",
            kind: "message",
            T: doe,
            repeated: !0
        },
        {
            no: 22,
            name: "selected_subagents",
            kind: "message",
            T: koe,
            repeated: !0
        },
        {
            no: 23,
            name: "selected_videos",
            kind: "message",
            T: Jae,
            repeated: !0
        },
        {
            no: 24,
            name: "selected_browsers",
            kind: "message",
            T: Soe,
            repeated: !0
        },
        {
            no: 25,
            name: "selected_documents",
            kind: "message",
            T: zae,
            repeated: !0
        },
        {
            no: 26,
            name: "selected_skills",
            kind: "message",
            T: Hy,
            repeated: !0
        },
        {
            no: 27,
            name: "recent_agents_context",
            kind: "message",
            T: goe,
            opt: !0
        },
        {
            no: 34,
            name: "selected_agentic_git_action",
            kind: "message",
            T: Roe,
            opt: !0
        }
    ]), Aoe = c.makeMessageType("agent.v1.InvocationContext", ()=>[
        {
            no: 1,
            name: "slack_thread",
            kind: "message",
            T: Moe,
            oneof: "data"
        },
        {
            no: 2,
            name: "github_pr",
            kind: "message",
            T: Noe,
            oneof: "data"
        },
        {
            no: 3,
            name: "ide_state",
            kind: "message",
            T: Doe,
            oneof: "data"
        },
        {
            no: 4,
            name: "microsoft_teams_thread",
            kind: "message",
            T: Poe,
            oneof: "data"
        },
        {
            no: 10,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data"
        }
    ]), Moe = c.makeMessageType("agent.v1.InvocationContext.SlackThread", ()=>[
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
}), Poe = c.makeMessageType("agent.v1.InvocationContext.MicrosoftTeamsThread", ()=>[
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
}), Noe = c.makeMessageType("agent.v1.InvocationContext.GithubPR", ()=>[
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
}), Doe = c.makeMessageType("agent.v1.InvocationContext.IdeState", ()=>[
        {
            no: 1,
            name: "visible_files",
            kind: "message",
            T: ZN,
            repeated: !0
        },
        {
            no: 2,
            name: "recently_viewed_files",
            kind: "message",
            T: ZN,
            repeated: !0
        },
        {
            no: 3,
            name: "currently_viewed_prs",
            kind: "message",
            T: Loe,
            repeated: !0
        }
    ], {
    localName: "InvocationContext_IdeState"
}), ZN = c.makeMessageType("agent.v1.InvocationContext.IdeState.File", ()=>[
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
            T: Ooe,
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
}), Ooe = c.makeMessageType("agent.v1.InvocationContext.IdeState.File.CursorPosition", ()=>[
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
}), Loe = c.makeMessageType("agent.v1.InvocationContext.IdeState.ViewedPullRequest", ()=>[
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
