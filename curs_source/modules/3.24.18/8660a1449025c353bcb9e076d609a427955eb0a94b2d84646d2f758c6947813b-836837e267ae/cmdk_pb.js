import { G$e, sd } from "./chat_pb.js";
import { cW, gbt, nii, tii } from "./context_pb.js";
import { lW, zte } from "./cpp_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { Hke, Hu, Lbr, Mg, R$e, Z9, kAe, rL } from "./utils_pb.js";
var j1r, yEd, SEd, kEd, q9o, rii, z9o, sii, wEd, V9o, CEd, TEd, K9o, Y9o, z$e, X9o, EEd, IEd, xEd, AEd, REd, oii, PEd, MEd, DEd, NEd, LEd, OEd, FEd, BEd, UEd, jEd;
export { AEd, BEd, CEd, DEd, EEd, FEd, IEd, K9o, LEd, MEd, NEd, OEd, PEd, REd, SEd, TEd, UEd, V9o, X9o, Y9o, j1r, jEd, kEd, oii, q9o, rii, sii, wEd, xEd, yEd, z$e, z9o };
var __wakaru_aii_initialized = false;
export function aii() {
if (__wakaru_aii_initialized) return;
__wakaru_aii_initialized = true;
"use strict";
E(), hr(), cW(), Hu(), lW(), sd(), j1r = x.makeMessageType("aiserver.v1.RerankCmdKContextRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: gbt,
            repeated: !0
        },
        {
            no: 3,
            name: "legacy_context",
            kind: "message",
            T: z$e
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: rii
        }
    ]), yEd = x.makeMessageType("aiserver.v1.RerankCmdKContextResponse", ()=>[
        {
            no: 1,
            name: "context_status_update",
            kind: "message",
            T: tii,
            oneof: "response"
        },
        {
            no: 2,
            name: "missing_context_items",
            kind: "message",
            T: nii,
            oneof: "response"
        },
        {
            no: 3,
            name: "did_call",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), SEd = x.makeMessageType("aiserver.v1.RerankTerminalCmdKContextRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: gbt,
            repeated: !0
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: q9o
        }
    ]), kEd = x.makeMessageType("aiserver.v1.RerankTerminalCmdKContextResponse", ()=>[
        {
            no: 1,
            name: "context_status_update",
            kind: "message",
            T: tii,
            oneof: "response"
        },
        {
            no: 2,
            name: "missing_context_items",
            kind: "message",
            T: nii,
            oneof: "response"
        }
    ]), q9o = x.makeMessageType("aiserver.v1.TerminalCmdKOptions", ()=>[
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 1,
            name: "chat_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "ada_cmd_k_context",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "use_web",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), rii = x.makeMessageType("aiserver.v1.CmdKOptions", ()=>[
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: Mg
        },
        {
            no: 1,
            name: "chat_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "ada_cmd_k_context",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "use_reranker",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "use_web",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "request_is_for_caching",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), z9o = x.makeMessageType("aiserver.v1.CmdKUpcomingEdit", ()=>[
        {
            no: 1,
            name: "original_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extra_context_above",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "extra_context_below",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), sii = x.makeMessageType("aiserver.v1.CmdKPreviousEdit", ()=>[
        {
            no: 1,
            name: "original_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "new_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extra_context_above",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "extra_context_below",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), wEd = x.makeMessageType("aiserver.v1.StreamHypermodeRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: gbt,
            repeated: !0
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: rii
        },
        {
            no: 4,
            name: "cmd_k_debug_info",
            kind: "message",
            T: kAe
        },
        {
            no: 6,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "legacy_context",
            kind: "message",
            T: z$e
        },
        {
            no: 7,
            name: "previous_edit",
            kind: "message",
            T: sii,
            opt: !0
        },
        {
            no: 8,
            name: "previous_edits",
            kind: "message",
            T: sii,
            repeated: !0
        },
        {
            no: 12,
            name: "upcoming_edits",
            kind: "message",
            T: z9o,
            repeated: !0
        },
        {
            no: 9,
            name: "use_big_cmdk_for_multi_file_edit",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: Hke,
            repeated: !0
        },
        {
            no: 11,
            name: "links",
            kind: "message",
            T: Lbr,
            repeated: !0
        },
        {
            no: 13,
            name: "diff_history",
            kind: "message",
            T: zte,
            repeated: !0
        },
        {
            no: 14,
            name: "hyper_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "timing_info",
            kind: "message",
            T: K9o,
            opt: !0
        }
    ]), V9o = x.makeMessageType("aiserver.v1.StreamCmdKRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: gbt,
            repeated: !0
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: rii
        },
        {
            no: 4,
            name: "cmd_k_debug_info",
            kind: "message",
            T: kAe
        },
        {
            no: 6,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "legacy_context",
            kind: "message",
            T: z$e
        },
        {
            no: 7,
            name: "previous_edit",
            kind: "message",
            T: sii,
            opt: !0
        },
        {
            no: 8,
            name: "previous_edits",
            kind: "message",
            T: sii,
            repeated: !0
        },
        {
            no: 12,
            name: "upcoming_edits",
            kind: "message",
            T: z9o,
            repeated: !0
        },
        {
            no: 9,
            name: "use_big_cmdk_for_multi_file_edit",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "images",
            kind: "message",
            T: Hke,
            repeated: !0
        },
        {
            no: 11,
            name: "links",
            kind: "message",
            T: Lbr,
            repeated: !0
        },
        {
            no: 13,
            name: "diff_history",
            kind: "message",
            T: zte,
            repeated: !0
        },
        {
            no: 14,
            name: "diff_to_base_branch",
            kind: "message",
            T: CEd,
            opt: !0
        },
        {
            no: 15,
            name: "timing_info",
            kind: "message",
            T: K9o,
            opt: !0
        },
        {
            no: 16,
            name: "rules",
            kind: "message",
            T: R$e,
            repeated: !0
        }
    ]), CEd = x.makeMessageType("aiserver.v1.StreamCmdKRequest.BranchDiff", ()=>[
        {
            no: 1,
            name: "file_diffs",
            kind: "message",
            T: TEd,
            repeated: !0
        },
        {
            no: 2,
            name: "commits",
            kind: "message",
            T: G$e,
            repeated: !0
        }
    ], {
    localName: "StreamCmdKRequest_BranchDiff"
}), TEd = x.makeMessageType("aiserver.v1.StreamCmdKRequest.BranchDiff.FileDiff", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "too_big",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "StreamCmdKRequest_BranchDiff_FileDiff"
}), K9o = x.makeMessageType("aiserver.v1.TimingInfo", ()=>[
        {
            no: 1,
            name: "user_input_time",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "stream_cmdk_time",
            kind: "scalar",
            T: 1
        }
    ]), Y9o = x.makeMessageType("aiserver.v1.StreamTerminalCmdKRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: gbt,
            repeated: !0
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: q9o
        },
        {
            no: 6,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "legacy_context",
            kind: "message",
            T: z$e
        }
    ]), z$e = x.makeMessageType("aiserver.v1.CmdKLegacyContext", ()=>[
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 12,
            name: "prompt_code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 10,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), X9o = x.makeMessageType("aiserver.v1.StreamCmdKResponseContextWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: oii,
            oneof: "response"
        },
        {
            no: 2,
            name: "context_status_update",
            kind: "message",
            T: tii,
            oneof: "response"
        },
        {
            no: 3,
            name: "missing_context_items",
            kind: "message",
            T: nii,
            oneof: "response"
        }
    ]), EEd = x.makeMessageType("aiserver.v1.StreamTerminalCmdKResponseContextWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: IEd,
            oneof: "response"
        },
        {
            no: 2,
            name: "context_status_update",
            kind: "message",
            T: tii,
            oneof: "response"
        },
        {
            no: 3,
            name: "missing_context_items",
            kind: "message",
            T: nii,
            oneof: "response"
        }
    ]), IEd = x.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse", ()=>[
        {
            no: 1,
            name: "terminal_command",
            kind: "message",
            T: xEd,
            oneof: "response"
        },
        {
            no: 4,
            name: "chat",
            kind: "message",
            T: AEd,
            oneof: "response"
        },
        {
            no: 5,
            name: "status_update",
            kind: "message",
            T: REd,
            oneof: "response"
        }
    ]), xEd = x.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse.TerminalCommand", ()=>[
        {
            no: 1,
            name: "partial_command",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamTerminalCmdKResponse_TerminalCommand"
}), AEd = x.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse.Chat", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamTerminalCmdKResponse_Chat"
}), REd = x.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse.StatusUpdate", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "StreamTerminalCmdKResponse_StatusUpdate"
}), oii = x.makeMessageType("aiserver.v1.StreamCmdKResponse", ()=>[
        {
            no: 1,
            name: "edit_start",
            kind: "message",
            T: PEd,
            oneof: "response"
        },
        {
            no: 2,
            name: "edit_stream",
            kind: "message",
            T: MEd,
            oneof: "response"
        },
        {
            no: 3,
            name: "edit_end",
            kind: "message",
            T: DEd,
            oneof: "response"
        },
        {
            no: 4,
            name: "chat",
            kind: "message",
            T: NEd,
            oneof: "response"
        },
        {
            no: 5,
            name: "status_update",
            kind: "message",
            T: LEd,
            oneof: "response"
        }
    ]), PEd = x.makeMessageType("aiserver.v1.StreamCmdKResponse.EditStart", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "edit_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "max_end_line_number_exclusive",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "file_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "StreamCmdKResponse_EditStart"
}), MEd = x.makeMessageType("aiserver.v1.StreamCmdKResponse.EditStream", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edit_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "file_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "StreamCmdKResponse_EditStream"
}), DEd = x.makeMessageType("aiserver.v1.StreamCmdKResponse.EditEnd", ()=>[
        {
            no: 1,
            name: "end_line_number_exclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "edit_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "file_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "StreamCmdKResponse_EditEnd"
}), NEd = x.makeMessageType("aiserver.v1.StreamCmdKResponse.Chat", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamCmdKResponse_Chat"
}), LEd = x.makeMessageType("aiserver.v1.StreamCmdKResponse.StatusUpdate", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "StreamCmdKResponse_StatusUpdate"
}), OEd = x.makeMessageType("aiserver.v1.GetRelevantChunksRequest", ()=>[
        {
            no: 1,
            name: "code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: rii
        },
        {
            no: 3,
            name: "context_items",
            kind: "message",
            T: gbt,
            repeated: !0
        },
        {
            no: 4,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "legacy_context",
            kind: "message",
            T: z$e
        }
    ]), FEd = x.makeMessageType("aiserver.v1.StreamGetRelevantChunksResponseContextWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: BEd,
            oneof: "response"
        }
    ]), BEd = x.makeMessageType("aiserver.v1.GetRelevantChunksResponse", ()=>[
        {
            no: 1,
            name: "code_blocks",
            kind: "message",
            T: jEd,
            oneof: "response"
        },
        {
            no: 2,
            name: "chain_of_thought_stream",
            kind: "message",
            T: UEd,
            oneof: "response"
        }
    ]), UEd = x.makeMessageType("aiserver.v1.GetRelevantChunksResponse.ChainOfThoughtStream", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GetRelevantChunksResponse_ChainOfThoughtStream"
}), jEd = x.makeMessageType("aiserver.v1.GetRelevantChunksResponse.CodeBlocks", ()=>[
        {
            no: 1,
            name: "code_blocks",
            kind: "message",
            T: rL,
            repeated: !0
        }
    ], {
    localName: "GetRelevantChunksResponse_CodeBlocks"
});

}
