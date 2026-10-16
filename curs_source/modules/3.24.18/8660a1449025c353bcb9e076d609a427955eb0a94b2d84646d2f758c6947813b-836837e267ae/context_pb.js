import { lW, zte } from "./cpp_pb.js";
import { I1r, g9o } from "./lsp_subgraph_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { Hu, R$e, aW, lhd, m7, x$e } from "./utils_pb.js";
var gbt, tii, nii, BTd, UTd, iii, B1r, jTd, $Td, HTd, B9o, WTd, U9o, GTd, U1r, j9o, $9o, H9o, qTd, zTd, W9o, VTd, KTd, G9o, YTd, XTd, ZTd, QTd, JTd, eEd, Ymn, hO, tEd, nEd, sz, iEd, rEd, sEd, oEd, aEd, lEd, cEd, uEd, dEd, hEd, pEd, mEd, gEd, fEd, vEd, _Ed, bEd;
export { $9o, $Td, B1r, B9o, BTd, G9o, GTd, H9o, HTd, JTd, KTd, QTd, U1r, U9o, UTd, VTd, W9o, WTd, XTd, YTd, Ymn, ZTd, _Ed, aEd, bEd, cEd, dEd, eEd, fEd, gEd, gbt, hEd, hO, iEd, iii, j9o, jTd, lEd, mEd, nEd, nii, oEd, pEd, qTd, rEd, sEd, sz, tEd, tii, uEd, vEd, zTd };
var __wakaru_cW_initialized = false;
export function cW() {
if (__wakaru_cW_initialized) return;
__wakaru_cW_initialized = true;
"use strict";
E(), hr(), Hu(), lW(), g9o(), gbt = x.makeMessageType("aiserver.v1.PotentiallyCachedContextItem", ()=>[
        {
            no: 1,
            name: "context_item",
            kind: "message",
            T: iii,
            oneof: "item"
        },
        {
            no: 2,
            name: "context_item_hash",
            kind: "scalar",
            T: 9,
            oneof: "item"
        }
    ]), tii = x.makeMessageType("aiserver.v1.ContextStatusUpdate", ()=>[
        {
            no: 1,
            name: "context_item_statuses",
            kind: "message",
            T: BTd,
            repeated: !0
        }
    ]), nii = x.makeMessageType("aiserver.v1.MissingContextItems", ()=>[
        {
            no: 2,
            name: "missing_context_item_hashes",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), BTd = x.makeMessageType("aiserver.v1.ContextItemStatus", ()=>[
        {
            no: 1,
            name: "context_item_hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "shown_to_the_model",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 4,
            name: "percentage_of_available_space",
            kind: "scalar",
            T: 2
        },
        {
            no: 5,
            name: "post_generation_evaluation",
            kind: "enum",
            T: x.getEnumType(UTd)
        }
    ]), UTd = x.makeEnum("aiserver.v1.ContextItemStatus.PostGenerationEvaluation", [
    {
        no: 0,
        name: "POST_GENERATION_EVALUATION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "POST_GENERATION_EVALUATION_USEFUL",
        localName: "USEFUL"
    },
    {
        no: 2,
        name: "POST_GENERATION_EVALUATION_USELESS",
        localName: "USELESS"
    }
]), iii = x.makeMessageType("aiserver.v1.ContextItem", ()=>[
        {
            no: 1,
            name: "intent",
            kind: "message",
            T: Ymn
        },
        {
            no: 2,
            name: "file_chunk",
            kind: "message",
            T: B1r,
            oneof: "item"
        },
        {
            no: 3,
            name: "outline_chunk",
            kind: "message",
            T: HTd,
            oneof: "item"
        },
        {
            no: 4,
            name: "cmd_k_selection",
            kind: "message",
            T: B9o,
            oneof: "item"
        },
        {
            no: 5,
            name: "cmd_k_immediate_context",
            kind: "message",
            T: U9o,
            oneof: "item"
        },
        {
            no: 6,
            name: "cmd_k_query",
            kind: "message",
            T: U1r,
            oneof: "item"
        },
        {
            no: 7,
            name: "cmd_k_query_history",
            kind: "message",
            T: H9o,
            oneof: "item"
        },
        {
            no: 8,
            name: "custom_instructions",
            kind: "message",
            T: KTd,
            oneof: "item"
        },
        {
            no: 9,
            name: "go_to_definition_result",
            kind: "message",
            T: G9o,
            oneof: "item"
        },
        {
            no: 10,
            name: "documentation_chunk",
            kind: "message",
            T: YTd,
            oneof: "item"
        },
        {
            no: 11,
            name: "lints",
            kind: "message",
            T: XTd,
            oneof: "item"
        },
        {
            no: 12,
            name: "chat_history",
            kind: "message",
            T: W9o,
            oneof: "item"
        },
        {
            no: 13,
            name: "notebook_cell_output",
            kind: "message",
            T: QTd,
            oneof: "item"
        },
        {
            no: 14,
            name: "terminal_history",
            kind: "message",
            T: VTd,
            oneof: "item"
        },
        {
            no: 15,
            name: "terminal_cmd_k_query",
            kind: "message",
            T: j9o,
            oneof: "item"
        },
        {
            no: 16,
            name: "terminal_cmd_k_query_history",
            kind: "message",
            T: $9o,
            oneof: "item"
        },
        {
            no: 17,
            name: "sparse_file_chunk",
            kind: "message",
            T: jTd,
            oneof: "item"
        },
        {
            no: 18,
            name: "lsp_subgraph_chunk",
            kind: "message",
            T: JTd,
            oneof: "item"
        },
        {
            no: 19,
            name: "commit_note_chunk",
            kind: "message",
            T: eEd,
            oneof: "item"
        },
        {
            no: 20,
            name: "file_diff_history",
            kind: "message",
            T: WTd,
            oneof: "item"
        },
        {
            no: 21,
            name: "cmd_k_query_history_in_diff_session",
            kind: "message",
            T: qTd,
            oneof: "item"
        },
        {
            no: 22,
            name: "project_rule",
            kind: "message",
            T: R$e,
            oneof: "item"
        }
    ]), B1r = x.makeMessageType("aiserver.v1.ContextItem.FileChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "chunk_contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_FileChunk"
}), jTd = x.makeMessageType("aiserver.v1.ContextItem.SparseFileChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "message",
            T: $Td,
            repeated: !0
        },
        {
            no: 3,
            name: "total_number_of_lines_in_file",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "cell_number",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "ContextItem_SparseFileChunk"
}), $Td = x.makeMessageType("aiserver.v1.ContextItem.SparseFileChunk.Line", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_SparseFileChunk_Line"
}), HTd = x.makeMessageType("aiserver.v1.ContextItem.OutlineChunk", ()=>[
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
            name: "full_range",
            kind: "message",
            T: aW
        }
    ], {
    localName: "ContextItem_OutlineChunk"
}), B9o = x.makeMessageType("aiserver.v1.ContextItem.CmdKSelection", ()=>[
        {
            no: 1,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_CmdKSelection"
}), WTd = x.makeMessageType("aiserver.v1.ContextItem.FileDiffHistory", ()=>[
        {
            no: 1,
            name: "cpp_file_diff_history",
            kind: "message",
            T: zte
        },
        {
            no: 2,
            name: "how_many_diffs_ago",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "is_very_recent",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "ContextItem_FileDiffHistory"
}), U9o = x.makeMessageType("aiserver.v1.ContextItem.CmdKImmediateContext", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "message",
            T: GTd,
            repeated: !0
        },
        {
            no: 3,
            name: "total_number_of_lines_in_file",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "cell_number",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "ContextItem_CmdKImmediateContext"
}), GTd = x.makeMessageType("aiserver.v1.ContextItem.CmdKImmediateContext.Line", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_CmdKImmediateContext_Line"
}), U1r = x.makeMessageType("aiserver.v1.ContextItem.CmdKQuery", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_CmdKQuery"
}), j9o = x.makeMessageType("aiserver.v1.ContextItem.TerminalCmdKQuery", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_TerminalCmdKQuery"
}), $9o = x.makeMessageType("aiserver.v1.ContextItem.TerminalCmdKQueryHistory", ()=>[
        {
            no: 1,
            name: "query",
            kind: "message",
            T: j9o
        },
        {
            no: 2,
            name: "query_history",
            kind: "message",
            T: $9o
        },
        {
            no: 5,
            name: "context_item_hashes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "suggested_command",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_TerminalCmdKQueryHistory"
}), H9o = x.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistory", ()=>[
        {
            no: 1,
            name: "query",
            kind: "message",
            T: U1r
        },
        {
            no: 2,
            name: "immediate_context",
            kind: "message",
            T: U9o
        },
        {
            no: 3,
            name: "selection",
            kind: "message",
            T: B9o
        },
        {
            no: 4,
            name: "query_history",
            kind: "message",
            T: H9o
        },
        {
            no: 5,
            name: "context_item_hashes",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "timestamp",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 7,
            name: "timestamp_double",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ], {
    localName: "ContextItem_CmdKQueryHistory"
}), qTd = x.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession", ()=>[
        {
            no: 1,
            name: "past_cmdk_queries",
            kind: "message",
            T: zTd,
            repeated: !0
        },
        {
            no: 3,
            name: "curr_timestamp_double",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "ContextItem_CmdKQueryHistoryInDiffSession"
}), zTd = x.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession.PastCmdKQueryInDiffSession", ()=>[
        {
            no: 1,
            name: "query",
            kind: "message",
            T: U1r
        },
        {
            no: 2,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "cmdk_was_accepted",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "timestamp_double",
            kind: "scalar",
            T: 1
        },
        {
            no: 7,
            name: "timestamp_for_diff_interleaving",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 8,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession"
}), W9o = x.makeMessageType("aiserver.v1.ContextItem.ChatHistory", ()=>[
        {
            no: 1,
            name: "user_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "assistant_response",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chat_history",
            kind: "message",
            T: W9o
        },
        {
            no: 4,
            name: "active_for_cmd_k",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "timestamp",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 6,
            name: "timestamp_double",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ], {
    localName: "ContextItem_ChatHistory"
}), VTd = x.makeMessageType("aiserver.v1.ContextItem.TerminalHistory", ()=>[
        {
            no: 1,
            name: "history",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "cwd_full",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "cwd_relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "active_for_cmd_k",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "timestamp",
            kind: "scalar",
            T: 3,
            opt: !0
        },
        {
            no: 8,
            name: "timestamp_double",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ], {
    localName: "ContextItem_TerminalHistory"
}), KTd = x.makeMessageType("aiserver.v1.ContextItem.CustomInstructions", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_CustomInstructions"
}), G9o = x.makeMessageType("aiserver.v1.ContextItem.GoToDefinitionResult", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "column_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "definition_chunk",
            kind: "message",
            T: B1r
        }
    ], {
    localName: "ContextItem_GoToDefinitionResult"
}), YTd = x.makeMessageType("aiserver.v1.ContextItem.DocumentationChunk", ()=>[
        {
            no: 1,
            name: "doc_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "page_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "documentation_chunk",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ], {
    localName: "ContextItem_DocumentationChunk"
}), XTd = x.makeMessageType("aiserver.v1.ContextItem.Lints", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lints",
            kind: "message",
            T: lhd,
            repeated: !0
        },
        {
            no: 3,
            name: "context_lines",
            kind: "message",
            T: ZTd,
            repeated: !0
        }
    ], {
    localName: "ContextItem_Lints"
}), ZTd = x.makeMessageType("aiserver.v1.ContextItem.Lints.Line", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_Lints_Line"
}), QTd = x.makeMessageType("aiserver.v1.ContextItem.NotebookCellOutput", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cell_output",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "cell_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ContextItem_NotebookCellOutput"
}), JTd = x.makeMessageType("aiserver.v1.ContextItem.LspSubgraphChunk", ()=>[
        {
            no: 1,
            name: "lsp_subgraph_full_context",
            kind: "message",
            T: I1r
        }
    ], {
    localName: "ContextItem_LspSubgraphChunk"
}), eEd = x.makeMessageType("aiserver.v1.ContextItem.CommitNoteChunk", ()=>[
        {
            no: 1,
            name: "note",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_CommitNoteChunk"
}), Ymn = x.makeMessageType("aiserver.v1.ContextIntent", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: x.getEnumType(hO)
        },
        {
            no: 15,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file",
            kind: "message",
            T: nEd,
            oneof: "intent"
        },
        {
            no: 3,
            name: "code_selection",
            kind: "message",
            T: iEd,
            oneof: "intent"
        },
        {
            no: 5,
            name: "lints",
            kind: "message",
            T: sEd,
            oneof: "intent"
        },
        {
            no: 6,
            name: "recent_locations",
            kind: "message",
            T: lEd,
            oneof: "intent"
        },
        {
            no: 8,
            name: "cmd_k_current_file",
            kind: "message",
            T: dEd,
            oneof: "intent"
        },
        {
            no: 9,
            name: "cmd_k_query_etc",
            kind: "message",
            T: hEd,
            oneof: "intent"
        },
        {
            no: 14,
            name: "terminal_cmd_k_defaults",
            kind: "message",
            T: vEd,
            oneof: "intent"
        },
        {
            no: 10,
            name: "cmd_k_definitions",
            kind: "message",
            T: mEd,
            oneof: "intent"
        },
        {
            no: 11,
            name: "documentation",
            kind: "message",
            T: tEd,
            oneof: "intent"
        },
        {
            no: 12,
            name: "custom_instructions",
            kind: "message",
            T: pEd,
            oneof: "intent"
        },
        {
            no: 13,
            name: "chat_history",
            kind: "message",
            T: gEd,
            oneof: "intent"
        },
        {
            no: 16,
            name: "terminal_history",
            kind: "message",
            T: _Ed,
            oneof: "intent"
        },
        {
            no: 17,
            name: "visible_tabs",
            kind: "message",
            T: uEd,
            oneof: "intent"
        },
        {
            no: 18,
            name: "lsp_subgraph",
            kind: "message",
            T: bEd,
            oneof: "intent"
        },
        {
            no: 19,
            name: "commit_notes",
            kind: "message",
            T: rEd,
            oneof: "intent"
        },
        {
            no: 20,
            name: "diff_history",
            kind: "message",
            T: fEd,
            oneof: "intent"
        },
        {
            no: 21,
            name: "past_cmdk_messages_in_diff_sessions",
            kind: "message",
            T: cEd,
            oneof: "intent"
        }
    ]), hO = x.makeEnum("aiserver.v1.ContextIntent.Type", [
    {
        no: 0,
        name: "TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TYPE_USER_ADDED",
        localName: "USER_ADDED"
    },
    {
        no: 2,
        name: "TYPE_AUTOMATIC",
        localName: "AUTOMATIC"
    }
]), tEd = x.makeMessageType("aiserver.v1.ContextIntent.Documentation", ()=>[
        {
            no: 1,
            name: "documentation_identifier",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextIntent_Documentation"
}), nEd = x.makeMessageType("aiserver.v1.ContextIntent.File", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: x.getEnumType(sz)
        }
    ], {
    localName: "ContextIntent_File"
}), sz = x.makeEnum("aiserver.v1.ContextIntent.File.Mode", [
    {
        no: 0,
        name: "MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MODE_FULL",
        localName: "FULL"
    },
    {
        no: 2,
        name: "MODE_OUTLINE",
        localName: "OUTLINE"
    },
    {
        no: 3,
        name: "MODE_CHUNKS",
        localName: "CHUNKS"
    }
]), iEd = x.makeMessageType("aiserver.v1.ContextIntent.CodeSelection", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "potentially_out_of_date_range",
            kind: "message",
            T: m7
        },
        {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextIntent_CodeSelection"
}), rEd = x.makeMessageType("aiserver.v1.ContextIntent.CommitNotes", [], {
    localName: "ContextIntent_CommitNotes"
}), sEd = x.makeMessageType("aiserver.v1.ContextIntent.Lints", ()=>[
        {
            no: 1,
            name: "cmdk_scope",
            kind: "message",
            T: oEd,
            oneof: "scope"
        },
        {
            no: 2,
            name: "file_scope",
            kind: "message",
            T: aEd,
            oneof: "scope"
        },
        {
            no: 3,
            name: "filter_to_severities",
            kind: "enum",
            T: x.getEnumType(x$e),
            repeated: !0
        }
    ], {
    localName: "ContextIntent_Lints"
}), oEd = x.makeMessageType("aiserver.v1.ContextIntent.Lints.CmdKScope", [], {
    localName: "ContextIntent_Lints_CmdKScope"
}), aEd = x.makeMessageType("aiserver.v1.ContextIntent.Lints.FileScope", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "filter_range",
            kind: "message",
            T: aW,
            opt: !0
        }
    ], {
    localName: "ContextIntent_Lints_FileScope"
}), lEd = x.makeMessageType("aiserver.v1.ContextIntent.RecentLocations", ()=>[
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ], {
    localName: "ContextIntent_RecentLocations"
}), cEd = x.makeMessageType("aiserver.v1.ContextIntent.PastCmdkConversationsInDiffSessions", [], {
    localName: "ContextIntent_PastCmdkConversationsInDiffSessions"
}), uEd = x.makeMessageType("aiserver.v1.ContextIntent.VisibleTabs", [], {
    localName: "ContextIntent_VisibleTabs"
}), dEd = x.makeMessageType("aiserver.v1.ContextIntent.CmdKCurrentFile", [], {
    localName: "ContextIntent_CmdKCurrentFile"
}), hEd = x.makeMessageType("aiserver.v1.ContextIntent.CmdKQueryEtc", [], {
    localName: "ContextIntent_CmdKQueryEtc"
}), pEd = x.makeMessageType("aiserver.v1.ContextIntent.CustomInstructions", [], {
    localName: "ContextIntent_CustomInstructions"
}), mEd = x.makeMessageType("aiserver.v1.ContextIntent.CmdKDefinitions", [], {
    localName: "ContextIntent_CmdKDefinitions"
}), gEd = x.makeMessageType("aiserver.v1.ContextIntent.ChatHistory", [], {
    localName: "ContextIntent_ChatHistory"
}), fEd = x.makeMessageType("aiserver.v1.ContextIntent.DiffHistory", [], {
    localName: "ContextIntent_DiffHistory"
}), vEd = x.makeMessageType("aiserver.v1.ContextIntent.TerminalCmdKDefaults", [], {
    localName: "ContextIntent_TerminalCmdKDefaults"
}), _Ed = x.makeMessageType("aiserver.v1.ContextIntent.TerminalHistory", ()=>[
        {
            no: 1,
            name: "instance_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "active_for_cmd_k",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "use_active_instance_as_fallback",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "ContextIntent_TerminalHistory"
}), bEd = x.makeMessageType("aiserver.v1.ContextIntent.LspSubgraph", [], {
    localName: "ContextIntent_LspSubgraph"
});

}
