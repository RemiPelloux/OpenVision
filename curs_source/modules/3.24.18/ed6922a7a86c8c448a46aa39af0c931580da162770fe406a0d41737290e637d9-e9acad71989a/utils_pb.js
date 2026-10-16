import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var SRe, pVc, zP, a6, mVc, gVc, fVc, zSi, vVc, kRe, wbn, Wle, _Vc, Gle, Tss, y5, mfe, C5e, x3t, x3, gfe, bVc, yVc, SVc, kVc, c6, ej, KSi, kD, wVc, CVc, YSi, ffe, Ess, T5e, XSi, TVc, EVc, ZC, xVc, xss, Iss, xf, Amt, IVc, AVc, ZSi, Ass, AJ, oN, RVc, wRe, OO, DVc, I3t, MVc, Cbn, PVc, Rss, Dss, LVc, Tbn, vk, io, NKe, NVc, OVc, Rmt, QSi, Ebn, xbn, FVc, BVc, UVc, $Vc, HVc, WVc, Vle, GVc, JSi, VVc, A3t, eki, Mss, jVc, qVc, zVc, Pss, Dmt, Lss, KVc, YVc, XVc, ZVc, QVc, JVc;
export { $Vc, A3t, AJ, AVc, Amt, Ass, BVc, C5e, CVc, Cbn, DVc, Dmt, Dss, EVc, Ebn, Ess, FVc, GVc, Gle, HVc, I3t, IVc, Iss, JSi, JVc, KSi, KVc, LVc, Lss, MVc, Mss, NKe, NVc, OO, OVc, PVc, Pss, QSi, QVc, RVc, Rmt, Rss, SRe, SVc, T5e, TVc, Tbn, Tss, UVc, VVc, Vle, WVc, Wle, XSi, XVc, YSi, YVc, ZC, ZSi, ZVc, _Vc, a6, bVc, c6, ej, eki, fVc, ffe, gVc, gfe, io, jVc, kD, kRe, kVc, mVc, mfe, oN, pVc, qVc, vVc, vk, wRe, wVc, wbn, x3, x3t, xVc, xbn, xf, xss, y5, yVc, zP, zSi, zVc };
var __wakaru_hu_initialized = false;
export function hu() {
if (__wakaru_hu_initialized) return;
__wakaru_hu_initialized = true;
"use strict";
x(), bi(), SRe = k.makeEnum("aiserver.v1.LintSeverity", [
    {
        no: 0,
        name: "LINT_SEVERITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LINT_SEVERITY_ERROR",
        localName: "ERROR"
    },
    {
        no: 2,
        name: "LINT_SEVERITY_WARNING",
        localName: "WARNING"
    },
    {
        no: 3,
        name: "LINT_SEVERITY_INFO",
        localName: "INFO"
    },
    {
        no: 4,
        name: "LINT_SEVERITY_HINT",
        localName: "HINT"
    },
    {
        no: 5,
        name: "LINT_SEVERITY_AI",
        localName: "AI"
    }
]), pVc = k.makeEnum("aiserver.v1.FeatureType", [
    {
        no: 0,
        name: "FEATURE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FEATURE_TYPE_EDIT",
        localName: "EDIT"
    },
    {
        no: 2,
        name: "FEATURE_TYPE_GENERATE",
        localName: "GENERATE"
    },
    {
        no: 3,
        name: "FEATURE_TYPE_INLINE_LONG_COMPLETION",
        localName: "INLINE_LONG_COMPLETION"
    }
]), zP = k.makeEnum("aiserver.v1.EmbeddingModel", [
    {
        no: 0,
        name: "EMBEDDING_MODEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EMBEDDING_MODEL_VOYAGE_CODE_2",
        localName: "VOYAGE_CODE_2"
    },
    {
        no: 2,
        name: "EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3",
        localName: "TEXT_EMBEDDINGS_LARGE_3"
    },
    {
        no: 3,
        name: "EMBEDDING_MODEL_QWEN_1_5B_CUSTOM",
        localName: "QWEN_1_5B_CUSTOM"
    },
    {
        no: 4,
        name: "EMBEDDING_MODEL_MOCK_CHUNKER_ERROR",
        localName: "MOCK_CHUNKER_ERROR"
    },
    {
        no: 5,
        name: "EMBEDDING_MODEL_QWEN_1_5B_0618_CUSTOM",
        localName: "QWEN_1_5B_0618_CUSTOM"
    },
    {
        no: 6,
        name: "EMBEDDING_MODEL_QWEN_1_5B_0618_FP8_MM_CUSTOM",
        localName: "QWEN_1_5B_0618_FP8_MM_CUSTOM"
    }
]), a6 = k.makeMessageType("aiserver.v1.CursorPosition", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "column",
            kind: "scalar",
            T: 5
        }
    ]), mVc = k.makeMessageType("aiserver.v1.VscodeOSStatistics", ()=>[
        {
            no: 1,
            name: "totalmem",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "freemem",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "loadavg",
            kind: "scalar",
            T: 1,
            repeated: !0
        }
    ]), gVc = k.makeMessageType("aiserver.v1.VscodeOSProperties", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "release",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "arch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "platform",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "cpus",
            kind: "message",
            T: fVc,
            repeated: !0
        }
    ]), fVc = k.makeMessageType("aiserver.v1.VscodeCPUProperties", ()=>[
        {
            no: 1,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "speed",
            kind: "scalar",
            T: 1
        }
    ]), zSi = k.makeMessageType("aiserver.v1.EnvironmentInfo", ()=>[
        {
            no: 1,
            name: "exthost_platform",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "exthost_arch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "exthost_release",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "exthost_shell",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "local_timestamp",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "workspace_uris",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "cursor_version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "is_remote",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "local_os_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "home_directory",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "local_timezone",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), vVc = k.makeMessageType("aiserver.v1.SelectionWithOrientation", ()=>[
        {
            no: 1,
            name: "selection_start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "selection_start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "position_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "position_column",
            kind: "scalar",
            T: 5
        }
    ]), kRe = k.makeMessageType("aiserver.v1.GetDiffRequest", ()=>[
        {
            no: 1,
            name: "cwd",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "base_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "merge_base",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "target_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "unified_context_lines",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "max_untracked_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "submodule_recurse_depth",
            kind: "scalar",
            T: 5
        },
        {
            no: 10,
            name: "include_space_changes",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "committed_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "compute_patch_id",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "return_head_sha",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "max_response_bytes",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 15,
            name: "max_files_with_contents",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 16,
            name: "max_content_bytes",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 8,
            name: "output_format",
            kind: "enum",
            T: k.getEnumType(wbn),
            opt: !0
        }
    ]), wbn = k.makeEnum("aiserver.v1.GetDiffRequest.OutputFormat", [
    {
        no: 0,
        name: "OUTPUT_FORMAT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OUTPUT_FORMAT_NAME_STATUS",
        localName: "NAME_STATUS"
    },
    {
        no: 2,
        name: "OUTPUT_FORMAT_NAME_STATUS_AND_NUMSTAT",
        localName: "NAME_STATUS_AND_NUMSTAT"
    },
    {
        no: 3,
        name: "OUTPUT_FORMAT_FILE_DIFFS",
        localName: "FILE_DIFFS"
    },
    {
        no: 4,
        name: "OUTPUT_FORMAT_DIFFS_WITH_BEFORE_AND_AFTER",
        localName: "DIFFS_WITH_BEFORE_AND_AFTER"
    }
]), Wle = k.makeMessageType("aiserver.v1.GetDiffResponse", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "message",
            T: y5
        },
        {
            no: 2,
            name: "submodule_diffs",
            kind: "message",
            T: _Vc,
            repeated: !0
        },
        {
            no: 3,
            name: "patch_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "has_uncommitted_changes",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), _Vc = k.makeMessageType("aiserver.v1.GetDiffResponse.SubmoduleDiff", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: y5
        },
        {
            no: 3,
            name: "errored",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "GetDiffResponse_SubmoduleDiff"
}), Gle = k.makeMessageType("aiserver.v1.SimplestRange", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_inclusive",
            kind: "scalar",
            T: 5
        }
    ]), Tss = k.makeMessageType("aiserver.v1.ComputeLinesDiffOriginalAndModified", ()=>[
        {
            no: 1,
            name: "original",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "modified",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), y5 = k.makeMessageType("aiserver.v1.GitDiff", ()=>[
        {
            no: 1,
            name: "diffs",
            kind: "message",
            T: C5e,
            repeated: !0
        },
        {
            no: 2,
            name: "diff_type",
            kind: "enum",
            T: k.getEnumType(mfe)
        },
        {
            no: 3,
            name: "file_contents_omitted",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), mfe = k.makeEnum("aiserver.v1.GitDiff.DiffType", [
    {
        no: 0,
        name: "DIFF_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DIFF_TYPE_DIFF_TO_HEAD",
        localName: "DIFF_TO_HEAD"
    },
    {
        no: 2,
        name: "DIFF_TYPE_DIFF_FROM_BRANCH_TO_MAIN",
        localName: "DIFF_FROM_BRANCH_TO_MAIN"
    }
]), C5e = k.makeMessageType("aiserver.v1.FileDiff", ()=>[
        {
            no: 4,
            name: "added",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "removed",
            kind: "scalar",
            T: 5
        },
        {
            no: 1,
            name: "from",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "to",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunks",
            kind: "message",
            T: x3t,
            repeated: !0
        },
        {
            no: 6,
            name: "before_file_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "after_file_contents",
            kind: "scalar",
            T: 9,
            opt: !0
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
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "new_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), x3t = k.makeMessageType("aiserver.v1.FileDiff.Chunk", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "old_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "old_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "new_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "new_lines",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "FileDiff_Chunk"
}), x3 = k.makeMessageType("aiserver.v1.SimpleRange", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_column",
            kind: "scalar",
            T: 5
        }
    ]), gfe = k.makeMessageType("aiserver.v1.CmdKDebugInfo", ()=>[
        {
            no: 1,
            name: "remote_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "git_patch",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "unsaved_files",
            kind: "message",
            T: bVc,
            repeated: !0
        },
        {
            no: 5,
            name: "unix_timestamp_ms",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "open_editors",
            kind: "message",
            T: yVc,
            repeated: !0
        },
        {
            no: 7,
            name: "file_diff_histories",
            kind: "message",
            T: SVc,
            repeated: !0
        },
        {
            no: 8,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "branch_notes",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "branch_notes_rich",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "global_notes",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "past_thoughts",
            kind: "message",
            T: kVc,
            repeated: !0
        },
        {
            no: 13,
            name: "base_branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "base_branch_commit_id",
            kind: "scalar",
            T: 9
        }
    ]), bVc = k.makeMessageType("aiserver.v1.CmdKDebugInfo.UnsavedFiles", ()=>[
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
    localName: "CmdKDebugInfo_UnsavedFiles"
}), yVc = k.makeMessageType("aiserver.v1.CmdKDebugInfo.OpenEditor", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "editor_group_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "editor_group_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "is_active",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "CmdKDebugInfo_OpenEditor"
}), SVc = k.makeMessageType("aiserver.v1.CmdKDebugInfo.CppFileDiffHistory", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff_history",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "CmdKDebugInfo_CppFileDiffHistory"
}), kVc = k.makeMessageType("aiserver.v1.CmdKDebugInfo.PastThought", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "time_in_unix_seconds",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "CmdKDebugInfo_PastThought"
}), c6 = k.makeMessageType("aiserver.v1.LineRange", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        }
    ]), ej = k.makeMessageType("aiserver.v1.CursorRange", ()=>[
        {
            no: 1,
            name: "start_position",
            kind: "message",
            T: a6
        },
        {
            no: 2,
            name: "end_position",
            kind: "message",
            T: a6
        }
    ]), KSi = k.makeMessageType("aiserver.v1.DetailedLine", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "is_signature",
            kind: "scalar",
            T: 8
        }
    ]), kD = k.makeMessageType("aiserver.v1.CodeBlock", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "file_contents_length",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "range",
            kind: "message",
            T: ej
        },
        {
            no: 4,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "signatures",
            kind: "message",
            T: wVc
        },
        {
            no: 6,
            name: "override_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "original_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "detailed_lines",
            kind: "message",
            T: KSi,
            repeated: !0
        },
        {
            no: 10,
            name: "file_git_context",
            kind: "message",
            T: YSi
        }
    ]), wVc = k.makeMessageType("aiserver.v1.CodeBlock.Signatures", ()=>[
        {
            no: 1,
            name: "ranges",
            kind: "message",
            T: ej,
            repeated: !0
        }
    ], {
    localName: "CodeBlock_Signatures"
}), CVc = k.makeMessageType("aiserver.v1.GitCommit", ()=>[
        {
            no: 1,
            name: "commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "author",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "date",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), YSi = k.makeMessageType("aiserver.v1.FileGit", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: CVc,
            repeated: !0
        }
    ]), ffe = k.makeMessageType("aiserver.v1.File", ()=>[
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
        },
        {
            no: 3,
            name: "file_git_context",
            kind: "message",
            T: YSi
        }
    ]), Ess = k.makeMessageType("aiserver.v1.Diagnostic", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: ej
        },
        {
            no: 3,
            name: "severity",
            kind: "enum",
            T: k.getEnumType(T5e)
        },
        {
            no: 4,
            name: "related_information",
            kind: "message",
            T: XSi,
            repeated: !0
        }
    ]), T5e = k.makeEnum("aiserver.v1.Diagnostic.DiagnosticSeverity", [
    {
        no: 0,
        name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DIAGNOSTIC_SEVERITY_ERROR",
        localName: "ERROR"
    },
    {
        no: 2,
        name: "DIAGNOSTIC_SEVERITY_WARNING",
        localName: "WARNING"
    },
    {
        no: 3,
        name: "DIAGNOSTIC_SEVERITY_INFORMATION",
        localName: "INFORMATION"
    },
    {
        no: 4,
        name: "DIAGNOSTIC_SEVERITY_HINT",
        localName: "HINT"
    }
]), XSi = k.makeMessageType("aiserver.v1.Diagnostic.RelatedInformation", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: ej
        }
    ], {
    localName: "Diagnostic_RelatedInformation"
}), TVc = k.makeMessageType("aiserver.v1.Lint", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: x3
        },
        {
            no: 3,
            name: "severity",
            kind: "enum",
            T: k.getEnumType(SRe)
        }
    ]), EVc = k.makeMessageType("aiserver.v1.BM25Chunk", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: Gle
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "relative_path",
            kind: "scalar",
            T: 9
        }
    ]), ZC = k.makeMessageType("aiserver.v1.CurrentFileInfo", ()=>[
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
        },
        {
            no: 18,
            name: "rely_on_filesync",
            kind: "scalar",
            T: 8
        },
        {
            no: 17,
            name: "sha_256_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "cells",
            kind: "message",
            T: xVc,
            repeated: !0
        },
        {
            no: 10,
            name: "top_chunks",
            kind: "message",
            T: EVc,
            repeated: !0
        },
        {
            no: 9,
            name: "contents_start_at_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "cursor_position",
            kind: "message",
            T: a6
        },
        {
            no: 4,
            name: "dataframes",
            kind: "message",
            T: ZSi,
            repeated: !0
        },
        {
            no: 8,
            name: "total_number_of_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "language_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "selection",
            kind: "message",
            T: ej
        },
        {
            no: 11,
            name: "alternative_version_id",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "diagnostics",
            kind: "message",
            T: Ess,
            repeated: !0
        },
        {
            no: 14,
            name: "file_version",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 15,
            name: "cell_start_lines",
            kind: "scalar",
            T: 5,
            repeated: !0
        },
        {
            no: 19,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 20,
            name: "line_ending",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xVc = k.makeMessageType("aiserver.v1.CurrentFileInfo.NotebookCell", [], {
    localName: "CurrentFileInfo_NotebookCell"
}), xss = k.makeMessageType("aiserver.v1.AzureState", ()=>[
        {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "base_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "deployment",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "use_azure",
            kind: "scalar",
            T: 8
        }
    ]), Iss = k.makeMessageType("aiserver.v1.BedrockState", ()=>[
        {
            no: 1,
            name: "access_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secret_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "region",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "use_bedrock",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "session_token",
            kind: "scalar",
            T: 9
        }
    ]), xf = k.makeMessageType("aiserver.v1.ModelDetails", ()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "enable_ghost_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "azure_state",
            kind: "message",
            T: xss,
            opt: !0
        },
        {
            no: 5,
            name: "enable_slow_pool",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "openai_api_base_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "bedrock_state",
            kind: "message",
            T: Iss,
            opt: !0
        },
        {
            no: 8,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Amt = k.makeMessageType("aiserver.v1.CloudAgentModelSelection", ()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parameters",
            kind: "message",
            T: IVc,
            repeated: !0
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), IVc = k.makeMessageType("aiserver.v1.CloudAgentModelSelection.ParameterValue", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "CloudAgentModelSelection_ParameterValue"
}), AVc = k.makeMessageType("aiserver.v1.ModelInfo", ()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9
        }
    ]), ZSi = k.makeMessageType("aiserver.v1.DataframeInfo", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shape",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "data_dimensionality",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "columns",
            kind: "message",
            T: Ass,
            repeated: !0
        },
        {
            no: 7,
            name: "row_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "index_column",
            kind: "scalar",
            T: 9
        }
    ]), Ass = k.makeMessageType("aiserver.v1.DataframeInfo.Column", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "type",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "DataframeInfo_Column"
}), AJ = k.makeMessageType("aiserver.v1.LinterError", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: ej
        },
        {
            no: 3,
            name: "source",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "related_information",
            kind: "message",
            T: XSi,
            repeated: !0
        },
        {
            no: 5,
            name: "severity",
            kind: "enum",
            T: k.getEnumType(T5e),
            opt: !0
        },
        {
            no: 6,
            name: "is_stale",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), oN = k.makeMessageType("aiserver.v1.LinterErrors", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "errors",
            kind: "message",
            T: AJ,
            repeated: !0
        },
        {
            no: 3,
            name: "file_contents",
            kind: "scalar",
            T: 9
        }
    ]), RVc = k.makeMessageType("aiserver.v1.LinterErrorsWithoutFileContents", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "errors",
            kind: "message",
            T: AJ,
            repeated: !0
        }
    ]), wRe = k.makeMessageType("aiserver.v1.CursorRule", ()=>[
        {
            no: 1,
            name: "name",
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
            name: "body",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "is_from_glob",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "always_apply",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "attach_to_background_agents",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "full_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 9,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 10,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), OO = k.makeMessageType("aiserver.v1.ExplicitContext", ()=>[
        {
            no: 1,
            name: "context",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_context",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "rules",
            kind: "message",
            T: wRe,
            repeated: !0
        },
        {
            no: 4,
            name: "mode_specific_context",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "mcp_instructions",
            kind: "message",
            T: DVc,
            repeated: !0
        }
    ]), DVc = k.makeMessageType("aiserver.v1.MCPInstructions", ()=>[
        {
            no: 1,
            name: "server_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "instructions",
            kind: "scalar",
            T: 9
        }
    ]), I3t = k.makeMessageType("aiserver.v1.PureMessage", ()=>[
        {
            no: 1,
            name: "message_type",
            kind: "enum",
            T: k.getEnumType(MVc)
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), MVc = k.makeEnum("aiserver.v1.PureMessage.MessageType", [
    {
        no: 0,
        name: "MESSAGE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MESSAGE_TYPE_SYSTEM",
        localName: "SYSTEM"
    },
    {
        no: 2,
        name: "MESSAGE_TYPE_USER",
        localName: "USER"
    },
    {
        no: 3,
        name: "MESSAGE_TYPE_ASSISTANT",
        localName: "ASSISTANT"
    }
]), Cbn = k.makeMessageType("aiserver.v1.DocumentSymbol", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(PVc)
        },
        {
            no: 5,
            name: "container_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "range",
            kind: "message",
            T: Rss
        },
        {
            no: 7,
            name: "selection_range",
            kind: "message",
            T: Rss
        },
        {
            no: 8,
            name: "children",
            kind: "message",
            T: Cbn,
            repeated: !0
        }
    ]), PVc = k.makeEnum("aiserver.v1.DocumentSymbol.SymbolKind", [
    {
        no: 0,
        name: "SYMBOL_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SYMBOL_KIND_FILE",
        localName: "FILE"
    },
    {
        no: 2,
        name: "SYMBOL_KIND_MODULE",
        localName: "MODULE"
    },
    {
        no: 3,
        name: "SYMBOL_KIND_NAMESPACE",
        localName: "NAMESPACE"
    },
    {
        no: 4,
        name: "SYMBOL_KIND_PACKAGE",
        localName: "PACKAGE"
    },
    {
        no: 5,
        name: "SYMBOL_KIND_CLASS",
        localName: "CLASS"
    },
    {
        no: 6,
        name: "SYMBOL_KIND_METHOD",
        localName: "METHOD"
    },
    {
        no: 7,
        name: "SYMBOL_KIND_PROPERTY",
        localName: "PROPERTY"
    },
    {
        no: 8,
        name: "SYMBOL_KIND_FIELD",
        localName: "FIELD"
    },
    {
        no: 9,
        name: "SYMBOL_KIND_CONSTRUCTOR",
        localName: "CONSTRUCTOR"
    },
    {
        no: 10,
        name: "SYMBOL_KIND_ENUM",
        localName: "ENUM"
    },
    {
        no: 11,
        name: "SYMBOL_KIND_INTERFACE",
        localName: "INTERFACE"
    },
    {
        no: 12,
        name: "SYMBOL_KIND_FUNCTION",
        localName: "FUNCTION"
    },
    {
        no: 13,
        name: "SYMBOL_KIND_VARIABLE",
        localName: "VARIABLE"
    },
    {
        no: 14,
        name: "SYMBOL_KIND_CONSTANT",
        localName: "CONSTANT"
    },
    {
        no: 15,
        name: "SYMBOL_KIND_STRING",
        localName: "STRING"
    },
    {
        no: 16,
        name: "SYMBOL_KIND_NUMBER",
        localName: "NUMBER"
    },
    {
        no: 17,
        name: "SYMBOL_KIND_BOOLEAN",
        localName: "BOOLEAN"
    },
    {
        no: 18,
        name: "SYMBOL_KIND_ARRAY",
        localName: "ARRAY"
    },
    {
        no: 19,
        name: "SYMBOL_KIND_OBJECT",
        localName: "OBJECT"
    },
    {
        no: 20,
        name: "SYMBOL_KIND_KEY",
        localName: "KEY"
    },
    {
        no: 21,
        name: "SYMBOL_KIND_NULL",
        localName: "NULL"
    },
    {
        no: 22,
        name: "SYMBOL_KIND_ENUM_MEMBER",
        localName: "ENUM_MEMBER"
    },
    {
        no: 23,
        name: "SYMBOL_KIND_STRUCT",
        localName: "STRUCT"
    },
    {
        no: 24,
        name: "SYMBOL_KIND_EVENT",
        localName: "EVENT"
    },
    {
        no: 25,
        name: "SYMBOL_KIND_OPERATOR",
        localName: "OPERATOR"
    },
    {
        no: 26,
        name: "SYMBOL_KIND_TYPE_PARAMETER",
        localName: "TYPE_PARAMETER"
    }
]), Rss = k.makeMessageType("aiserver.v1.DocumentSymbol.Range", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_column",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "DocumentSymbol_Range"
}), Dss = k.makeMessageType("aiserver.v1.HoverDetails", ()=>[
        {
            no: 1,
            name: "code_details",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "markdown_blocks",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), LVc = k.makeMessageType("aiserver.v1.UriComponents", ()=>[
        {
            no: 1,
            name: "scheme",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "authority",
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
            name: "query",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "fragment",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Tbn = k.makeMessageType("aiserver.v1.DocumentSymbolWithText", ()=>[
        {
            no: 1,
            name: "symbol",
            kind: "message",
            T: Cbn
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "text_in_symbol_range",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "uri_components",
            kind: "message",
            T: LVc
        }
    ]), vk = k.makeMessageType("aiserver.v1.ErrorDetails", ()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: k.getEnumType(io)
        },
        {
            no: 2,
            name: "details",
            kind: "message",
            T: NKe
        },
        {
            no: 3,
            name: "is_expected",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), io = k.makeEnum("aiserver.v1.ErrorDetails.Error", [
    {
        no: 0,
        name: "ERROR_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ERROR_BAD_API_KEY",
        localName: "BAD_API_KEY"
    },
    {
        no: 42,
        name: "ERROR_BAD_USER_API_KEY",
        localName: "BAD_USER_API_KEY"
    },
    {
        no: 2,
        name: "ERROR_NOT_LOGGED_IN",
        localName: "NOT_LOGGED_IN"
    },
    {
        no: 3,
        name: "ERROR_INVALID_AUTH_ID",
        localName: "INVALID_AUTH_ID"
    },
    {
        no: 4,
        name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS",
        localName: "NOT_HIGH_ENOUGH_PERMISSIONS"
    },
    {
        no: 18,
        name: "ERROR_AGENT_REQUIRES_LOGIN",
        localName: "AGENT_REQUIRES_LOGIN"
    },
    {
        no: 5,
        name: "ERROR_BAD_MODEL_NAME",
        localName: "BAD_MODEL_NAME"
    },
    {
        no: 39,
        name: "ERROR_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 40,
        name: "ERROR_DEPRECATED",
        localName: "DEPRECATED"
    },
    {
        no: 6,
        name: "ERROR_USER_NOT_FOUND",
        localName: "USER_NOT_FOUND"
    },
    {
        no: 7,
        name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED",
        localName: "FREE_USER_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 8,
        name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED",
        localName: "PRO_USER_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 9,
        name: "ERROR_FREE_USER_USAGE_LIMIT",
        localName: "FREE_USER_USAGE_LIMIT"
    },
    {
        no: 10,
        name: "ERROR_PRO_USER_USAGE_LIMIT",
        localName: "PRO_USER_USAGE_LIMIT"
    },
    {
        no: 41,
        name: "ERROR_RESOURCE_EXHAUSTED",
        localName: "RESOURCE_EXHAUSTED"
    },
    {
        no: 11,
        name: "ERROR_AUTH_TOKEN_NOT_FOUND",
        localName: "AUTH_TOKEN_NOT_FOUND"
    },
    {
        no: 12,
        name: "ERROR_AUTH_TOKEN_EXPIRED",
        localName: "AUTH_TOKEN_EXPIRED"
    },
    {
        no: 13,
        name: "ERROR_OPENAI",
        localName: "OPENAI"
    },
    {
        no: 14,
        name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED",
        localName: "OPENAI_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 20,
        name: "ERROR_MAX_TOKENS",
        localName: "MAX_TOKENS"
    },
    {
        no: 23,
        name: "ERROR_PRO_USER_ONLY",
        localName: "PRO_USER_ONLY"
    },
    {
        no: 21,
        name: "ERROR_USER_ABORTED_REQUEST",
        localName: "USER_ABORTED_REQUEST"
    },
    {
        no: 25,
        name: "ERROR_TIMEOUT",
        localName: "TIMEOUT"
    },
    {
        no: 22,
        name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED",
        localName: "GENERIC_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 28,
        name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT",
        localName: "GPT_4_VISION_PREVIEW_RATE_LIMIT"
    },
    {
        no: 29,
        name: "ERROR_CUSTOM_MESSAGE",
        localName: "CUSTOM_MESSAGE"
    },
    {
        no: 30,
        name: "ERROR_OUTDATED_CLIENT",
        localName: "OUTDATED_CLIENT"
    },
    {
        no: 31,
        name: "ERROR_CLAUDE_IMAGE_TOO_LARGE",
        localName: "CLAUDE_IMAGE_TOO_LARGE"
    },
    {
        no: 33,
        name: "ERROR_FILE_NOT_FOUND",
        localName: "FILE_NOT_FOUND"
    },
    {
        no: 34,
        name: "ERROR_API_KEY_RATE_LIMIT",
        localName: "API_KEY_RATE_LIMIT"
    },
    {
        no: 35,
        name: "ERROR_DEBOUNCED",
        localName: "DEBOUNCED"
    },
    {
        no: 36,
        name: "ERROR_BAD_REQUEST",
        localName: "BAD_REQUEST"
    },
    {
        no: 37,
        name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED",
        localName: "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"
    },
    {
        no: 38,
        name: "ERROR_UNAUTHORIZED",
        localName: "UNAUTHORIZED"
    },
    {
        no: 43,
        name: "ERROR_CONVERSATION_TOO_LONG",
        localName: "CONVERSATION_TOO_LONG"
    },
    {
        no: 44,
        name: "ERROR_USAGE_PRICING_REQUIRED",
        localName: "USAGE_PRICING_REQUIRED"
    },
    {
        no: 45,
        name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE",
        localName: "USAGE_PRICING_REQUIRED_CHANGEABLE"
    },
    {
        no: 46,
        name: "ERROR_GITHUB_NO_USER_CREDENTIALS",
        localName: "GITHUB_NO_USER_CREDENTIALS"
    },
    {
        no: 47,
        name: "ERROR_GITHUB_USER_NO_ACCESS",
        localName: "GITHUB_USER_NO_ACCESS"
    },
    {
        no: 48,
        name: "ERROR_GITHUB_APP_NO_ACCESS",
        localName: "GITHUB_APP_NO_ACCESS"
    },
    {
        no: 49,
        name: "ERROR_GITHUB_MULTIPLE_OWNERS",
        localName: "GITHUB_MULTIPLE_OWNERS"
    },
    {
        no: 50,
        name: "ERROR_RATE_LIMITED",
        localName: "RATE_LIMITED"
    },
    {
        no: 51,
        name: "ERROR_RATE_LIMITED_CHANGEABLE",
        localName: "RATE_LIMITED_CHANGEABLE"
    },
    {
        no: 52,
        name: "ERROR_CUSTOM",
        localName: "CUSTOM"
    },
    {
        no: 53,
        name: "ERROR_HOOKS_BLOCKED",
        localName: "HOOKS_BLOCKED"
    },
    {
        no: 54,
        name: "ERROR_SUSPICIOUS_USAGE_BLOCKED",
        localName: "SUSPICIOUS_USAGE_BLOCKED"
    },
    {
        no: 55,
        name: "ERROR_EXTENSION_HOST_TIMEOUT",
        localName: "EXTENSION_HOST_TIMEOUT"
    },
    {
        no: 56,
        name: "ERROR_NETWORK_ERROR",
        localName: "NETWORK_ERROR"
    },
    {
        no: 57,
        name: "ERROR_PROVIDER_ERROR",
        localName: "PROVIDER_ERROR"
    },
    {
        no: 58,
        name: "ERROR_MODEL_BLOCKED",
        localName: "MODEL_BLOCKED"
    },
    {
        no: 59,
        name: "ERROR_INTERNAL",
        localName: "INTERNAL"
    },
    {
        no: 60,
        name: "ERROR_MAX_MODE_REQUIRED",
        localName: "MAX_MODE_REQUIRED"
    },
    {
        no: 61,
        name: "ERROR_MODEL_NO_LONGER_SUPPORTED",
        localName: "MODEL_NO_LONGER_SUPPORTED"
    },
    {
        no: 62,
        name: "ERROR_PRICING_WARNING",
        localName: "PRICING_WARNING"
    },
    {
        no: 63,
        name: "ERROR_SLOW_POOL",
        localName: "SLOW_POOL"
    },
    {
        no: 64,
        name: "ERROR_UNSUPPORTED_REGION",
        localName: "UNSUPPORTED_REGION"
    },
    {
        no: 65,
        name: "ERROR_ACCOUNT_CLOSED",
        localName: "ACCOUNT_CLOSED"
    },
    {
        no: 66,
        name: "ERROR_TENANT_RESTRICTION_VIOLATION",
        localName: "TENANT_RESTRICTION_VIOLATION"
    }
]), NKe = k.makeMessageType("aiserver.v1.CustomErrorDetails", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "is_retryable",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "show_request_id",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "should_show_immediate_error",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "buttons",
            kind: "message",
            T: Rmt,
            repeated: !0
        },
        {
            no: 7,
            name: "additional_info",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 9,
            name: "plan_choices",
            kind: "message",
            T: OVc,
            repeated: !0
        },
        {
            no: 10,
            name: "analytics_metadata",
            kind: "message",
            T: NVc,
            opt: !0
        }
    ]), NVc = k.makeMessageType("aiserver.v1.ErrorAnalyticsMetadata", ()=>[
        {
            no: 1,
            name: "action_required",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), OVc = k.makeMessageType("aiserver.v1.PlanChoice", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sublabel",
            kind: "scalar",
            T: 9,
            opt: !0
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
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), Rmt = k.makeMessageType("aiserver.v1.ErrorButton", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "upgrade",
            kind: "message",
            T: BVc,
            oneof: "action"
        },
        {
            no: 3,
            name: "switch_model",
            kind: "message",
            T: UVc,
            oneof: "action"
        },
        {
            no: 4,
            name: "configure_spend_limit",
            kind: "message",
            T: HVc,
            oneof: "action"
        },
        {
            no: 5,
            name: "url",
            kind: "message",
            T: WVc,
            oneof: "action"
        },
        {
            no: 6,
            name: "upgrade_choice",
            kind: "message",
            T: FVc,
            oneof: "action"
        },
        {
            no: 7,
            name: "dashboard_action",
            kind: "message",
            T: xbn,
            oneof: "action"
        },
        {
            no: 8,
            name: "reload_window",
            kind: "message",
            T: Ebn,
            oneof: "action"
        },
        {
            no: 9,
            name: "client_action",
            kind: "message",
            T: QSi,
            oneof: "action"
        }
    ]), QSi = k.makeMessageType("aiserver.v1.ClientAction", ()=>[
        {
            no: 1,
            name: "command_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), Ebn = k.makeMessageType("aiserver.v1.ReloadWindowAction", []), xbn = k.makeMessageType("aiserver.v1.DashboardAction", ()=>[
        {
            no: 1,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 3,
            name: "success_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), FVc = k.makeMessageType("aiserver.v1.UpgradeChoice", []), BVc = k.makeMessageType("aiserver.v1.UpgradeAction", ()=>[
        {
            no: 1,
            name: "membership_to_upgrade_to",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "try_immediate_upgrade",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "allow_trial",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "dashboard_action",
            kind: "message",
            T: xbn,
            opt: !0
        }
    ]), UVc = k.makeMessageType("aiserver.v1.SwitchModelAction", ()=>[
        {
            no: 1,
            name: "suggested_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "parameters",
            kind: "message",
            T: $Vc,
            repeated: !0
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), $Vc = k.makeMessageType("aiserver.v1.SwitchModelAction.ModelParameterValue", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SwitchModelAction_ModelParameterValue"
}), HVc = k.makeMessageType("aiserver.v1.ConfigureSpendLimitAction", ()=>[
        {
            no: 1,
            name: "confirm_label",
            kind: "scalar",
            T: 9
        }
    ]), WVc = k.makeMessageType("aiserver.v1.UrlAction", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), Vle = k.makeMessageType("aiserver.v1.ImageProto", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "dimension",
            kind: "message",
            T: GVc
        },
        {
            no: 3,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "task_specific_description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), GVc = k.makeMessageType("aiserver.v1.ImageProto.Dimension", ()=>[
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
    localName: "ImageProto_Dimension"
}), JSi = k.makeMessageType("aiserver.v1.ChatQuote", ()=>[
        {
            no: 1,
            name: "markdown",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bubble_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "section_index",
            kind: "scalar",
            T: 5
        }
    ]), VVc = k.makeMessageType("aiserver.v1.ChatExternalLink", ()=>[
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
        }
    ]), A3t = k.makeMessageType("aiserver.v1.ComposerExternalLink", ()=>[
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
        }
    ]), eki = k.makeMessageType("aiserver.v1.CmdKExternalLink", ()=>[
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
        }
    ]), Mss = k.makeMessageType("aiserver.v1.CommitNote", ()=>[
        {
            no: 1,
            name: "note",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        }
    ]), jVc = k.makeMessageType("aiserver.v1.CommitNoteWithEmbeddings", ()=>[
        {
            no: 1,
            name: "note",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "commit_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "embeddings",
            kind: "scalar",
            T: 1,
            repeated: !0
        }
    ]), qVc = k.makeMessageType("aiserver.v1.CommitDiffString", ()=>[
        {
            no: 1,
            name: "diff",
            kind: "scalar",
            T: 9
        }
    ]), zVc = k.makeMessageType("aiserver.v1.CrossExtHostHeader", ()=>[
        {
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), Pss = k.makeMessageType("aiserver.v1.CrossExtHostHeaders", ()=>[
        {
            no: 1,
            name: "headers",
            kind: "message",
            T: zVc,
            repeated: !0
        }
    ]), Dmt = k.makeMessageType("aiserver.v1.SimpleUnaryCrossExtensionHostMessage", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "header",
            kind: "message",
            T: Pss
        },
        {
            no: 3,
            name: "trailer",
            kind: "message",
            T: Pss
        },
        {
            no: 4,
            name: "is_error",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "connect_error",
            kind: "scalar",
            T: 9
        }
    ]), Lss = k.makeMessageType("aiserver.v1.CodeChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "summarization_strategy",
            kind: "enum",
            T: k.getEnumType(YVc),
            opt: !0
        },
        {
            no: 5,
            name: "language_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "intent",
            kind: "enum",
            T: k.getEnumType(KVc),
            opt: !0
        },
        {
            no: 7,
            name: "is_final_version",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "is_first_version",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), KVc = k.makeEnum("aiserver.v1.CodeChunk.Intent", [
    {
        no: 0,
        name: "INTENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INTENT_COMPOSER_FILE",
        localName: "COMPOSER_FILE"
    },
    {
        no: 2,
        name: "INTENT_COMPRESSED_COMPOSER_FILE",
        localName: "COMPRESSED_COMPOSER_FILE"
    }
]), YVc = k.makeEnum("aiserver.v1.CodeChunk.SummarizationStrategy", [
    {
        no: 0,
        name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED",
        localName: "NONE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUMMARIZATION_STRATEGY_SUMMARIZED",
        localName: "SUMMARIZED"
    },
    {
        no: 2,
        name: "SUMMARIZATION_STRATEGY_EMBEDDED",
        localName: "EMBEDDED"
    }
]), XVc = k.makeMessageType("aiserver.v1.RCPCallFrame", ()=>[
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
    ]), ZVc = k.makeMessageType("aiserver.v1.RCPStackTrace", ()=>[
        {
            no: 1,
            name: "call_frames",
            kind: "message",
            T: XVc,
            repeated: !0
        },
        {
            no: 2,
            name: "raw_stack_trace",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), QVc = k.makeMessageType("aiserver.v1.RCPLogEntry", ()=>[
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
            T: ZVc,
            opt: !0
        },
        {
            no: 7,
            name: "object_data_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), JVc = k.makeMessageType("aiserver.v1.RCPUIElementPicked", ()=>[
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
    ]);

}
