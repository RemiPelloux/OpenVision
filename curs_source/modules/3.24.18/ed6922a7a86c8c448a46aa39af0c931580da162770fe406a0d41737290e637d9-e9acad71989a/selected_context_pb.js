import { Fyt, GQe } from "./agent_skills_pb.js";
import { Cee, _4e } from "./cursor_rules_pb.js";
import { G6e, qUt } from "./ls_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { k0e, w0e } from "./utils_pb_2.js";
var dVs, Byt, hVs, pVs, PDn, e$t, nRu, LDn, iRu, mVs, rRu, sRu, Uyt, oRu, gVs, aRu, q4i, fVs, vVs, z4i, _Vs, cRu, bVs, lRu, MMe, uRu, NDn, yVs, SVs, dRu, hRu, pRu, mRu, kVs, wVs, t$t, gRu, CVs, TVs, fRu, vRu, _Ru, EVs, ODn, bRu, Tee, K4i, yRu, SRu, kRu, xVs, n$t, IVs, AVs;
export { AVs, Byt, CVs, EVs, IVs, K4i, LDn, MMe, NDn, ODn, PDn, SRu, SVs, TVs, Tee, Uyt, _Ru, _Vs, aRu, bRu, bVs, cRu, dRu, dVs, e$t, fRu, fVs, gRu, gVs, hRu, hVs, iRu, kRu, kVs, lRu, mRu, mVs, n$t, nRu, oRu, pRu, pVs, q4i, rRu, sRu, t$t, uRu, vRu, vVs, wVs, xVs, yRu, yVs, z4i };
var __wakaru_jW_initialized = false;
export function jW() {
if (__wakaru_jW_initialized) return;
__wakaru_jW_initialized = true;
"use strict";
x(), bi(), w0e(), G6e(), _4e(), GQe(), dVs = k.makeEnum("agent.v1.SelectedPluginCapabilityType", [
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
]), Byt = k.makeMessageType("agent.v1.SelectedImage", ()=>[
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
            T: hVs,
            oneof: "data_or_blob_id"
        },
        {
            no: 10,
            name: "prompt_upload_ref",
            kind: "message",
            T: PDn,
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
            T: pVs
        },
        {
            no: 7,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]), hVs = k.makeMessageType("agent.v1.SelectedImage.BlobIdWithData", ()=>[
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
}), pVs = k.makeMessageType("agent.v1.SelectedImage.Dimension", ()=>[
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
}), PDn = k.makeMessageType("agent.v1.PromptUploadRef", ()=>[
        {
            no: 1,
            name: "upload_id",
            kind: "scalar",
            T: 9
        }
    ]), e$t = k.makeMessageType("agent.v1.SelectedDocument", ()=>[
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
            T: nRu,
            oneof: "data_or_blob_id"
        },
        {
            no: 10,
            name: "prompt_upload_ref",
            kind: "message",
            T: PDn,
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
    ]), nRu = k.makeMessageType("agent.v1.SelectedDocument.BlobIdWithData", ()=>[
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
}), LDn = k.makeMessageType("agent.v1.SelectedVideo", ()=>[
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
            T: iRu,
            oneof: "data_or_blob_id"
        },
        {
            no: 11,
            name: "signed_url",
            kind: "message",
            T: mVs,
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
    ]), iRu = k.makeMessageType("agent.v1.SelectedVideo.BlobIdWithData", ()=>[
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
}), mVs = k.makeMessageType("agent.v1.SelectedVideo.SignedUrl", ()=>[
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
}), rRu = k.makeMessageType("agent.v1.ExtraContextEntry", ()=>[
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
    ]), sRu = k.makeMessageType("agent.v1.SelectedFile", ()=>[
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
    ]), Uyt = k.makeMessageType("agent.v1.SelectedCodeSelection", ()=>[
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
            T: k0e
        }
    ]), oRu = k.makeMessageType("agent.v1.SelectedTerminal", ()=>[
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
    ]), gVs = k.makeMessageType("agent.v1.SelectedTerminalSelection", ()=>[
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
            T: k0e
        }
    ]), aRu = k.makeMessageType("agent.v1.SelectedFolder", ()=>[
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
            T: qUt
        }
    ]), q4i = k.makeMessageType("agent.v1.SelectedExternalLink", ()=>[
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
    ]), fVs = k.makeMessageType("agent.v1.SelectedCursorRule", ()=>[
        {
            no: 1,
            name: "rule",
            kind: "message",
            T: Cee
        }
    ]), vVs = k.makeMessageType("agent.v1.SelectedGitDiff", ()=>[
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
    ]), z4i = k.makeMessageType("agent.v1.SelectedGitDiffFromBranchToMain", ()=>[
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
    ]), _Vs = k.makeMessageType("agent.v1.SelectedGitCommit", ()=>[
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
    ]), cRu = k.makeMessageType("agent.v1.SelectedPullRequest", ()=>[
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
    ]), bVs = k.makeMessageType("agent.v1.SelectedGitPRDiffSelection", ()=>[
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
    ]), lRu = k.makeMessageType("agent.v1.SelectedPluginCapabilityRef", ()=>[
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
            T: k.getEnumType(dVs)
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
    ]), MMe = k.makeMessageType("agent.v1.SelectedCursorCommand", ()=>[
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
            T: lRu,
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
    ]), uRu = k.makeMessageType("agent.v1.SelectedDocumentation", ()=>[
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
    ]), NDn = k.makeMessageType("agent.v1.SelectedPastChat", ()=>[
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
    ]), yVs = k.makeMessageType("agent.v1.RecentAgent", ()=>[
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
    ]), SVs = k.makeMessageType("agent.v1.RecentAgentsContext", ()=>[
        {
            no: 1,
            name: "recent_agents",
            kind: "message",
            T: yVs,
            repeated: !0
        }
    ]), dRu = k.makeMessageType("agent.v1.CallFrame", ()=>[
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
    ]), hRu = k.makeMessageType("agent.v1.StackTrace", ()=>[
        {
            no: 1,
            name: "call_frames",
            kind: "message",
            T: dRu,
            repeated: !0
        },
        {
            no: 2,
            name: "raw_stack_trace",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), pRu = k.makeMessageType("agent.v1.SelectedConsoleLog", ()=>[
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
            T: hRu,
            opt: !0
        },
        {
            no: 7,
            name: "object_data_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), mRu = k.makeMessageType("agent.v1.SelectedUIElement", ()=>[
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
    ]), kVs = k.makeMessageType("agent.v1.SelectedSubagent", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]), wVs = k.makeMessageType("agent.v1.SelectedBrowser", ()=>[
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
    ]), t$t = k.makeMessageType("agent.v1.SelectedAgenticGitActionCommitParams", ()=>[
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
            T: CVs,
            repeated: !0
        },
        {
            no: 6,
            name: "files_to_exclude_from_commit_with_status",
            kind: "message",
            T: CVs,
            repeated: !0
        }
    ]), gRu = k.makeMessageType("agent.v1.SelectedAgenticGitActionCreateBranchParams", []), CVs = k.makeMessageType("agent.v1.SelectedAgenticGitFileWithStatus", ()=>[
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
    ]), TVs = k.makeMessageType("agent.v1.SelectedAgenticGitActionPushParams", ()=>[
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
    ]), fRu = k.makeMessageType("agent.v1.SelectedAgenticGitActionFixMergeConflictsParams", ()=>[
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
    ]), vRu = k.makeMessageType("agent.v1.SelectedAgenticGitActionBabysitPrInCloudParams", ()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), _Ru = k.makeMessageType("agent.v1.SelectedAgenticGitActionUpdateBranchParams", ()=>[
        {
            no: 1,
            name: "base_branch",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), EVs = k.makeMessageType("agent.v1.SelectedAgenticGitActionPullLocallyParams", ()=>[
        {
            no: 1,
            name: "remote_branch",
            kind: "scalar",
            T: 9
        }
    ]), ODn = k.makeMessageType("agent.v1.SelectedAgenticGitAction", ()=>[
        {
            no: 2,
            name: "commit_params",
            kind: "message",
            T: t$t,
            oneof: "params"
        },
        {
            no: 6,
            name: "commit_and_push_params",
            kind: "message",
            T: t$t,
            oneof: "params"
        },
        {
            no: 3,
            name: "push_params",
            kind: "message",
            T: TVs,
            oneof: "params"
        },
        {
            no: 7,
            name: "create_pr_params",
            kind: "message",
            T: TVs,
            oneof: "params"
        },
        {
            no: 8,
            name: "create_pr_with_changes_params",
            kind: "message",
            T: t$t,
            oneof: "params"
        },
        {
            no: 4,
            name: "fix_merge_conflicts_params",
            kind: "message",
            T: fRu,
            oneof: "params"
        },
        {
            no: 11,
            name: "babysit_pr_in_cloud_params",
            kind: "message",
            T: vRu,
            oneof: "params"
        },
        {
            no: 14,
            name: "apply_locally_params",
            kind: "message",
            T: EVs,
            oneof: "params"
        },
        {
            no: 15,
            name: "checkout_branch_params",
            kind: "message",
            T: EVs,
            oneof: "params"
        },
        {
            no: 12,
            name: "create_branch_and_commit_params",
            kind: "message",
            T: t$t,
            oneof: "params"
        },
        {
            no: 13,
            name: "create_branch_commit_and_push_params",
            kind: "message",
            T: t$t,
            oneof: "params"
        },
        {
            no: 16,
            name: "update_branch_params",
            kind: "message",
            T: _Ru,
            oneof: "params"
        },
        {
            no: 17,
            name: "create_branch_params",
            kind: "message",
            T: gRu,
            oneof: "params"
        },
        {
            no: 5,
            name: "branch_context",
            kind: "message",
            T: bRu,
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
    ]), bRu = k.makeMessageType("agent.v1.SelectedGitBranchContext", ()=>[
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
    ]), Tee = k.makeMessageType("agent.v1.SelectedContext", ()=>[
        {
            no: 1,
            name: "selected_images",
            kind: "message",
            T: Byt,
            repeated: !0
        },
        {
            no: 2,
            name: "invocation_context",
            kind: "message",
            T: K4i,
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
            T: rRu,
            repeated: !0
        },
        {
            no: 4,
            name: "files",
            kind: "message",
            T: sRu,
            repeated: !0
        },
        {
            no: 5,
            name: "code_selections",
            kind: "message",
            T: Uyt,
            repeated: !0
        },
        {
            no: 6,
            name: "terminals",
            kind: "message",
            T: oRu,
            repeated: !0
        },
        {
            no: 7,
            name: "terminal_selections",
            kind: "message",
            T: gVs,
            repeated: !0
        },
        {
            no: 8,
            name: "folders",
            kind: "message",
            T: aRu,
            repeated: !0
        },
        {
            no: 9,
            name: "external_links",
            kind: "message",
            T: q4i,
            repeated: !0
        },
        {
            no: 10,
            name: "cursor_rules",
            kind: "message",
            T: fVs,
            repeated: !0
        },
        {
            no: 18,
            name: "git_diff",
            kind: "message",
            T: vVs,
            opt: !0
        },
        {
            no: 11,
            name: "git_diff_from_branch_to_main",
            kind: "message",
            T: z4i,
            opt: !0
        },
        {
            no: 12,
            name: "cursor_commands",
            kind: "message",
            T: MMe,
            repeated: !0
        },
        {
            no: 13,
            name: "documentations",
            kind: "message",
            T: uRu,
            repeated: !0
        },
        {
            no: 14,
            name: "ui_elements",
            kind: "message",
            T: mRu,
            repeated: !0
        },
        {
            no: 15,
            name: "console_logs",
            kind: "message",
            T: pRu,
            repeated: !0
        },
        {
            no: 17,
            name: "git_commits",
            kind: "message",
            T: _Vs,
            repeated: !0
        },
        {
            no: 19,
            name: "past_chats",
            kind: "message",
            T: NDn,
            repeated: !0
        },
        {
            no: 20,
            name: "git_pr_diff_selections",
            kind: "message",
            T: bVs,
            repeated: !0
        },
        {
            no: 21,
            name: "selected_pull_requests",
            kind: "message",
            T: cRu,
            repeated: !0
        },
        {
            no: 22,
            name: "selected_subagents",
            kind: "message",
            T: kVs,
            repeated: !0
        },
        {
            no: 23,
            name: "selected_videos",
            kind: "message",
            T: LDn,
            repeated: !0
        },
        {
            no: 24,
            name: "selected_browsers",
            kind: "message",
            T: wVs,
            repeated: !0
        },
        {
            no: 25,
            name: "selected_documents",
            kind: "message",
            T: e$t,
            repeated: !0
        },
        {
            no: 26,
            name: "selected_skills",
            kind: "message",
            T: Fyt,
            repeated: !0
        },
        {
            no: 27,
            name: "recent_agents_context",
            kind: "message",
            T: SVs,
            opt: !0
        },
        {
            no: 34,
            name: "selected_agentic_git_action",
            kind: "message",
            T: ODn,
            opt: !0
        }
    ]), K4i = k.makeMessageType("agent.v1.InvocationContext", ()=>[
        {
            no: 1,
            name: "slack_thread",
            kind: "message",
            T: yRu,
            oneof: "data"
        },
        {
            no: 2,
            name: "github_pr",
            kind: "message",
            T: kRu,
            oneof: "data"
        },
        {
            no: 3,
            name: "ide_state",
            kind: "message",
            T: xVs,
            oneof: "data"
        },
        {
            no: 4,
            name: "microsoft_teams_thread",
            kind: "message",
            T: SRu,
            oneof: "data"
        },
        {
            no: 10,
            name: "blob_id",
            kind: "scalar",
            T: 12,
            oneof: "data"
        }
    ]), yRu = k.makeMessageType("agent.v1.InvocationContext.SlackThread", ()=>[
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
}), SRu = k.makeMessageType("agent.v1.InvocationContext.MicrosoftTeamsThread", ()=>[
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
}), kRu = k.makeMessageType("agent.v1.InvocationContext.GithubPR", ()=>[
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
}), xVs = k.makeMessageType("agent.v1.InvocationContext.IdeState", ()=>[
        {
            no: 1,
            name: "visible_files",
            kind: "message",
            T: n$t,
            repeated: !0
        },
        {
            no: 2,
            name: "recently_viewed_files",
            kind: "message",
            T: n$t,
            repeated: !0
        },
        {
            no: 3,
            name: "currently_viewed_prs",
            kind: "message",
            T: AVs,
            repeated: !0
        }
    ], {
    localName: "InvocationContext_IdeState"
}), n$t = k.makeMessageType("agent.v1.InvocationContext.IdeState.File", ()=>[
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
            T: IVs,
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
}), IVs = k.makeMessageType("agent.v1.InvocationContext.IdeState.File.CursorPosition", ()=>[
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
}), AVs = k.makeMessageType("agent.v1.InvocationContext.IdeState.ViewedPullRequest", ()=>[
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
