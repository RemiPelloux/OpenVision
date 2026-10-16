import { UU, Yj } from "./cpp_pb.js";
import { DHi, lno } from "./lsp_subgraph_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { SRe, TVc, c6, hu, wRe, x3 } from "./utils_pb.js";
var PJe, fLn, vLn, Tyd, Eyd, _Ln, GHi, xyd, Iyd, Ayd, Mno, Ryd, Pno, Dyd, VHi, Lno, Nno, Ono, Myd, Pyd, Fno, Lyd, Nyd, Bno, Oyd, Fyd, Byd, Uyd, $yd, Hyd, IHt, AR, Wyd, Gyd, $U, Vyd, jyd, qyd, zyd, Kyd, Yyd, Xyd, Zyd, Qyd, Jyd, eSd, tSd, nSd, iSd, rSd, sSd, oSd;
export { $U, $yd, AR, Ayd, Bno, Byd, Dyd, Eyd, Fno, Fyd, GHi, Gyd, Hyd, IHt, Iyd, Jyd, Kyd, Lno, Lyd, Mno, Myd, Nno, Nyd, Ono, Oyd, PJe, Pno, Pyd, Qyd, Ryd, Tyd, Uyd, VHi, Vyd, Wyd, Xyd, Yyd, Zyd, _Ln, eSd, fLn, iSd, jyd, nSd, oSd, qyd, rSd, sSd, tSd, vLn, xyd, zyd };
var __wakaru_A6_initialized = false;
export function A6() {
if (__wakaru_A6_initialized) return;
__wakaru_A6_initialized = true;
"use strict";
x(), bi(), hu(), UU(), lno(), PJe = k.makeMessageType("aiserver.v1.PotentiallyCachedContextItem", ()=>[
        {
            no: 1,
            name: "context_item",
            kind: "message",
            T: _Ln,
            oneof: "item"
        },
        {
            no: 2,
            name: "context_item_hash",
            kind: "scalar",
            T: 9,
            oneof: "item"
        }
    ]), fLn = k.makeMessageType("aiserver.v1.ContextStatusUpdate", ()=>[
        {
            no: 1,
            name: "context_item_statuses",
            kind: "message",
            T: Tyd,
            repeated: !0
        }
    ]), vLn = k.makeMessageType("aiserver.v1.MissingContextItems", ()=>[
        {
            no: 2,
            name: "missing_context_item_hashes",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Tyd = k.makeMessageType("aiserver.v1.ContextItemStatus", ()=>[
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
            T: k.getEnumType(Eyd)
        }
    ]), Eyd = k.makeEnum("aiserver.v1.ContextItemStatus.PostGenerationEvaluation", [
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
]), _Ln = k.makeMessageType("aiserver.v1.ContextItem", ()=>[
        {
            no: 1,
            name: "intent",
            kind: "message",
            T: IHt
        },
        {
            no: 2,
            name: "file_chunk",
            kind: "message",
            T: GHi,
            oneof: "item"
        },
        {
            no: 3,
            name: "outline_chunk",
            kind: "message",
            T: Ayd,
            oneof: "item"
        },
        {
            no: 4,
            name: "cmd_k_selection",
            kind: "message",
            T: Mno,
            oneof: "item"
        },
        {
            no: 5,
            name: "cmd_k_immediate_context",
            kind: "message",
            T: Pno,
            oneof: "item"
        },
        {
            no: 6,
            name: "cmd_k_query",
            kind: "message",
            T: VHi,
            oneof: "item"
        },
        {
            no: 7,
            name: "cmd_k_query_history",
            kind: "message",
            T: Ono,
            oneof: "item"
        },
        {
            no: 8,
            name: "custom_instructions",
            kind: "message",
            T: Nyd,
            oneof: "item"
        },
        {
            no: 9,
            name: "go_to_definition_result",
            kind: "message",
            T: Bno,
            oneof: "item"
        },
        {
            no: 10,
            name: "documentation_chunk",
            kind: "message",
            T: Oyd,
            oneof: "item"
        },
        {
            no: 11,
            name: "lints",
            kind: "message",
            T: Fyd,
            oneof: "item"
        },
        {
            no: 12,
            name: "chat_history",
            kind: "message",
            T: Fno,
            oneof: "item"
        },
        {
            no: 13,
            name: "notebook_cell_output",
            kind: "message",
            T: Uyd,
            oneof: "item"
        },
        {
            no: 14,
            name: "terminal_history",
            kind: "message",
            T: Lyd,
            oneof: "item"
        },
        {
            no: 15,
            name: "terminal_cmd_k_query",
            kind: "message",
            T: Lno,
            oneof: "item"
        },
        {
            no: 16,
            name: "terminal_cmd_k_query_history",
            kind: "message",
            T: Nno,
            oneof: "item"
        },
        {
            no: 17,
            name: "sparse_file_chunk",
            kind: "message",
            T: xyd,
            oneof: "item"
        },
        {
            no: 18,
            name: "lsp_subgraph_chunk",
            kind: "message",
            T: $yd,
            oneof: "item"
        },
        {
            no: 19,
            name: "commit_note_chunk",
            kind: "message",
            T: Hyd,
            oneof: "item"
        },
        {
            no: 20,
            name: "file_diff_history",
            kind: "message",
            T: Ryd,
            oneof: "item"
        },
        {
            no: 21,
            name: "cmd_k_query_history_in_diff_session",
            kind: "message",
            T: Myd,
            oneof: "item"
        },
        {
            no: 22,
            name: "project_rule",
            kind: "message",
            T: wRe,
            oneof: "item"
        }
    ]), GHi = k.makeMessageType("aiserver.v1.ContextItem.FileChunk", ()=>[
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
}), xyd = k.makeMessageType("aiserver.v1.ContextItem.SparseFileChunk", ()=>[
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
            T: Iyd,
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
}), Iyd = k.makeMessageType("aiserver.v1.ContextItem.SparseFileChunk.Line", ()=>[
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
}), Ayd = k.makeMessageType("aiserver.v1.ContextItem.OutlineChunk", ()=>[
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
            T: c6
        }
    ], {
    localName: "ContextItem_OutlineChunk"
}), Mno = k.makeMessageType("aiserver.v1.ContextItem.CmdKSelection", ()=>[
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
}), Ryd = k.makeMessageType("aiserver.v1.ContextItem.FileDiffHistory", ()=>[
        {
            no: 1,
            name: "cpp_file_diff_history",
            kind: "message",
            T: Yj
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
}), Pno = k.makeMessageType("aiserver.v1.ContextItem.CmdKImmediateContext", ()=>[
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
            T: Dyd,
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
}), Dyd = k.makeMessageType("aiserver.v1.ContextItem.CmdKImmediateContext.Line", ()=>[
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
}), VHi = k.makeMessageType("aiserver.v1.ContextItem.CmdKQuery", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_CmdKQuery"
}), Lno = k.makeMessageType("aiserver.v1.ContextItem.TerminalCmdKQuery", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_TerminalCmdKQuery"
}), Nno = k.makeMessageType("aiserver.v1.ContextItem.TerminalCmdKQueryHistory", ()=>[
        {
            no: 1,
            name: "query",
            kind: "message",
            T: Lno
        },
        {
            no: 2,
            name: "query_history",
            kind: "message",
            T: Nno
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
}), Ono = k.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistory", ()=>[
        {
            no: 1,
            name: "query",
            kind: "message",
            T: VHi
        },
        {
            no: 2,
            name: "immediate_context",
            kind: "message",
            T: Pno
        },
        {
            no: 3,
            name: "selection",
            kind: "message",
            T: Mno
        },
        {
            no: 4,
            name: "query_history",
            kind: "message",
            T: Ono
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
}), Myd = k.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession", ()=>[
        {
            no: 1,
            name: "past_cmdk_queries",
            kind: "message",
            T: Pyd,
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
}), Pyd = k.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession.PastCmdKQueryInDiffSession", ()=>[
        {
            no: 1,
            name: "query",
            kind: "message",
            T: VHi
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
}), Fno = k.makeMessageType("aiserver.v1.ContextItem.ChatHistory", ()=>[
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
            T: Fno
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
}), Lyd = k.makeMessageType("aiserver.v1.ContextItem.TerminalHistory", ()=>[
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
}), Nyd = k.makeMessageType("aiserver.v1.ContextItem.CustomInstructions", ()=>[
        {
            no: 1,
            name: "instructions",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_CustomInstructions"
}), Bno = k.makeMessageType("aiserver.v1.ContextItem.GoToDefinitionResult", ()=>[
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
            T: GHi
        }
    ], {
    localName: "ContextItem_GoToDefinitionResult"
}), Oyd = k.makeMessageType("aiserver.v1.ContextItem.DocumentationChunk", ()=>[
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
}), Fyd = k.makeMessageType("aiserver.v1.ContextItem.Lints", ()=>[
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
            T: TVc,
            repeated: !0
        },
        {
            no: 3,
            name: "context_lines",
            kind: "message",
            T: Byd,
            repeated: !0
        }
    ], {
    localName: "ContextItem_Lints"
}), Byd = k.makeMessageType("aiserver.v1.ContextItem.Lints.Line", ()=>[
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
}), Uyd = k.makeMessageType("aiserver.v1.ContextItem.NotebookCellOutput", ()=>[
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
}), $yd = k.makeMessageType("aiserver.v1.ContextItem.LspSubgraphChunk", ()=>[
        {
            no: 1,
            name: "lsp_subgraph_full_context",
            kind: "message",
            T: DHi
        }
    ], {
    localName: "ContextItem_LspSubgraphChunk"
}), Hyd = k.makeMessageType("aiserver.v1.ContextItem.CommitNoteChunk", ()=>[
        {
            no: 1,
            name: "note",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextItem_CommitNoteChunk"
}), IHt = k.makeMessageType("aiserver.v1.ContextIntent", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: k.getEnumType(AR)
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
            T: Gyd,
            oneof: "intent"
        },
        {
            no: 3,
            name: "code_selection",
            kind: "message",
            T: Vyd,
            oneof: "intent"
        },
        {
            no: 5,
            name: "lints",
            kind: "message",
            T: qyd,
            oneof: "intent"
        },
        {
            no: 6,
            name: "recent_locations",
            kind: "message",
            T: Yyd,
            oneof: "intent"
        },
        {
            no: 8,
            name: "cmd_k_current_file",
            kind: "message",
            T: Qyd,
            oneof: "intent"
        },
        {
            no: 9,
            name: "cmd_k_query_etc",
            kind: "message",
            T: Jyd,
            oneof: "intent"
        },
        {
            no: 14,
            name: "terminal_cmd_k_defaults",
            kind: "message",
            T: rSd,
            oneof: "intent"
        },
        {
            no: 10,
            name: "cmd_k_definitions",
            kind: "message",
            T: tSd,
            oneof: "intent"
        },
        {
            no: 11,
            name: "documentation",
            kind: "message",
            T: Wyd,
            oneof: "intent"
        },
        {
            no: 12,
            name: "custom_instructions",
            kind: "message",
            T: eSd,
            oneof: "intent"
        },
        {
            no: 13,
            name: "chat_history",
            kind: "message",
            T: nSd,
            oneof: "intent"
        },
        {
            no: 16,
            name: "terminal_history",
            kind: "message",
            T: sSd,
            oneof: "intent"
        },
        {
            no: 17,
            name: "visible_tabs",
            kind: "message",
            T: Zyd,
            oneof: "intent"
        },
        {
            no: 18,
            name: "lsp_subgraph",
            kind: "message",
            T: oSd,
            oneof: "intent"
        },
        {
            no: 19,
            name: "commit_notes",
            kind: "message",
            T: jyd,
            oneof: "intent"
        },
        {
            no: 20,
            name: "diff_history",
            kind: "message",
            T: iSd,
            oneof: "intent"
        },
        {
            no: 21,
            name: "past_cmdk_messages_in_diff_sessions",
            kind: "message",
            T: Xyd,
            oneof: "intent"
        }
    ]), AR = k.makeEnum("aiserver.v1.ContextIntent.Type", [
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
]), Wyd = k.makeMessageType("aiserver.v1.ContextIntent.Documentation", ()=>[
        {
            no: 1,
            name: "documentation_identifier",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextIntent_Documentation"
}), Gyd = k.makeMessageType("aiserver.v1.ContextIntent.File", ()=>[
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
            T: k.getEnumType($U)
        }
    ], {
    localName: "ContextIntent_File"
}), $U = k.makeEnum("aiserver.v1.ContextIntent.File.Mode", [
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
]), Vyd = k.makeMessageType("aiserver.v1.ContextIntent.CodeSelection", ()=>[
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
            T: x3
        },
        {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ContextIntent_CodeSelection"
}), jyd = k.makeMessageType("aiserver.v1.ContextIntent.CommitNotes", [], {
    localName: "ContextIntent_CommitNotes"
}), qyd = k.makeMessageType("aiserver.v1.ContextIntent.Lints", ()=>[
        {
            no: 1,
            name: "cmdk_scope",
            kind: "message",
            T: zyd,
            oneof: "scope"
        },
        {
            no: 2,
            name: "file_scope",
            kind: "message",
            T: Kyd,
            oneof: "scope"
        },
        {
            no: 3,
            name: "filter_to_severities",
            kind: "enum",
            T: k.getEnumType(SRe),
            repeated: !0
        }
    ], {
    localName: "ContextIntent_Lints"
}), zyd = k.makeMessageType("aiserver.v1.ContextIntent.Lints.CmdKScope", [], {
    localName: "ContextIntent_Lints_CmdKScope"
}), Kyd = k.makeMessageType("aiserver.v1.ContextIntent.Lints.FileScope", ()=>[
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
            T: c6,
            opt: !0
        }
    ], {
    localName: "ContextIntent_Lints_FileScope"
}), Yyd = k.makeMessageType("aiserver.v1.ContextIntent.RecentLocations", ()=>[
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ], {
    localName: "ContextIntent_RecentLocations"
}), Xyd = k.makeMessageType("aiserver.v1.ContextIntent.PastCmdkConversationsInDiffSessions", [], {
    localName: "ContextIntent_PastCmdkConversationsInDiffSessions"
}), Zyd = k.makeMessageType("aiserver.v1.ContextIntent.VisibleTabs", [], {
    localName: "ContextIntent_VisibleTabs"
}), Qyd = k.makeMessageType("aiserver.v1.ContextIntent.CmdKCurrentFile", [], {
    localName: "ContextIntent_CmdKCurrentFile"
}), Jyd = k.makeMessageType("aiserver.v1.ContextIntent.CmdKQueryEtc", [], {
    localName: "ContextIntent_CmdKQueryEtc"
}), eSd = k.makeMessageType("aiserver.v1.ContextIntent.CustomInstructions", [], {
    localName: "ContextIntent_CustomInstructions"
}), tSd = k.makeMessageType("aiserver.v1.ContextIntent.CmdKDefinitions", [], {
    localName: "ContextIntent_CmdKDefinitions"
}), nSd = k.makeMessageType("aiserver.v1.ContextIntent.ChatHistory", [], {
    localName: "ContextIntent_ChatHistory"
}), iSd = k.makeMessageType("aiserver.v1.ContextIntent.DiffHistory", [], {
    localName: "ContextIntent_DiffHistory"
}), rSd = k.makeMessageType("aiserver.v1.ContextIntent.TerminalCmdKDefaults", [], {
    localName: "ContextIntent_TerminalCmdKDefaults"
}), sSd = k.makeMessageType("aiserver.v1.ContextIntent.TerminalHistory", ()=>[
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
}), oSd = k.makeMessageType("aiserver.v1.ContextIntent.LspSubgraph", [], {
    localName: "ContextIntent_LspSubgraph"
});

}
