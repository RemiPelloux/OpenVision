import { Hu, NMe } from "./chat_pb.js";
import { A6, PJe, fLn, vLn } from "./context_pb.js";
import { UU, Yj } from "./cpp_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { OO, Vle, eki, gfe, hu, kD, wRe, xf } from "./utils_pb.js";
var jHi, aSd, cSd, lSd, Uno, bLn, $no, yLn, uSd, Hno, dSd, hSd, Wno, Gno, ePe, Vno, pSd, mSd, gSd, fSd, vSd, SLn, _Sd, bSd, ySd, SSd, kSd, wSd, CSd, TSd, ESd, xSd;
export { $no, CSd, ESd, Gno, Hno, SLn, SSd, TSd, Uno, Vno, Wno, _Sd, aSd, bLn, bSd, cSd, dSd, ePe, fSd, gSd, hSd, jHi, kSd, lSd, mSd, pSd, uSd, vSd, wSd, xSd, yLn, ySd };
var __wakaru_kLn_initialized = false;
export function kLn() {
if (__wakaru_kLn_initialized) return;
__wakaru_kLn_initialized = true;
"use strict";
x(), bi(), A6(), hu(), UU(), Hu(), jHi = k.makeMessageType("aiserver.v1.RerankCmdKContextRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: PJe,
            repeated: !0
        },
        {
            no: 3,
            name: "legacy_context",
            kind: "message",
            T: ePe
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: bLn
        }
    ]), aSd = k.makeMessageType("aiserver.v1.RerankCmdKContextResponse", ()=>[
        {
            no: 1,
            name: "context_status_update",
            kind: "message",
            T: fLn,
            oneof: "response"
        },
        {
            no: 2,
            name: "missing_context_items",
            kind: "message",
            T: vLn,
            oneof: "response"
        },
        {
            no: 3,
            name: "did_call",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), cSd = k.makeMessageType("aiserver.v1.RerankTerminalCmdKContextRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: PJe,
            repeated: !0
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: Uno
        }
    ]), lSd = k.makeMessageType("aiserver.v1.RerankTerminalCmdKContextResponse", ()=>[
        {
            no: 1,
            name: "context_status_update",
            kind: "message",
            T: fLn,
            oneof: "response"
        },
        {
            no: 2,
            name: "missing_context_items",
            kind: "message",
            T: vLn,
            oneof: "response"
        }
    ]), Uno = k.makeMessageType("aiserver.v1.TerminalCmdKOptions", ()=>[
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: xf
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
    ]), bLn = k.makeMessageType("aiserver.v1.CmdKOptions", ()=>[
        {
            no: 3,
            name: "model_details",
            kind: "message",
            T: xf
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
    ]), $no = k.makeMessageType("aiserver.v1.CmdKUpcomingEdit", ()=>[
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
    ]), yLn = k.makeMessageType("aiserver.v1.CmdKPreviousEdit", ()=>[
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
    ]), uSd = k.makeMessageType("aiserver.v1.StreamHypermodeRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: PJe,
            repeated: !0
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: bLn
        },
        {
            no: 4,
            name: "cmd_k_debug_info",
            kind: "message",
            T: gfe
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
            T: ePe
        },
        {
            no: 7,
            name: "previous_edit",
            kind: "message",
            T: yLn,
            opt: !0
        },
        {
            no: 8,
            name: "previous_edits",
            kind: "message",
            T: yLn,
            repeated: !0
        },
        {
            no: 12,
            name: "upcoming_edits",
            kind: "message",
            T: $no,
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
            T: Vle,
            repeated: !0
        },
        {
            no: 11,
            name: "links",
            kind: "message",
            T: eki,
            repeated: !0
        },
        {
            no: 13,
            name: "diff_history",
            kind: "message",
            T: Yj,
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
            T: Wno,
            opt: !0
        }
    ]), Hno = k.makeMessageType("aiserver.v1.StreamCmdKRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: PJe,
            repeated: !0
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: bLn
        },
        {
            no: 4,
            name: "cmd_k_debug_info",
            kind: "message",
            T: gfe
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
            T: ePe
        },
        {
            no: 7,
            name: "previous_edit",
            kind: "message",
            T: yLn,
            opt: !0
        },
        {
            no: 8,
            name: "previous_edits",
            kind: "message",
            T: yLn,
            repeated: !0
        },
        {
            no: 12,
            name: "upcoming_edits",
            kind: "message",
            T: $no,
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
            T: Vle,
            repeated: !0
        },
        {
            no: 11,
            name: "links",
            kind: "message",
            T: eki,
            repeated: !0
        },
        {
            no: 13,
            name: "diff_history",
            kind: "message",
            T: Yj,
            repeated: !0
        },
        {
            no: 14,
            name: "diff_to_base_branch",
            kind: "message",
            T: dSd,
            opt: !0
        },
        {
            no: 15,
            name: "timing_info",
            kind: "message",
            T: Wno,
            opt: !0
        },
        {
            no: 16,
            name: "rules",
            kind: "message",
            T: wRe,
            repeated: !0
        }
    ]), dSd = k.makeMessageType("aiserver.v1.StreamCmdKRequest.BranchDiff", ()=>[
        {
            no: 1,
            name: "file_diffs",
            kind: "message",
            T: hSd,
            repeated: !0
        },
        {
            no: 2,
            name: "commits",
            kind: "message",
            T: NMe,
            repeated: !0
        }
    ], {
    localName: "StreamCmdKRequest_BranchDiff"
}), hSd = k.makeMessageType("aiserver.v1.StreamCmdKRequest.BranchDiff.FileDiff", ()=>[
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
}), Wno = k.makeMessageType("aiserver.v1.TimingInfo", ()=>[
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
    ]), Gno = k.makeMessageType("aiserver.v1.StreamTerminalCmdKRequest", ()=>[
        {
            no: 1,
            name: "context_items",
            kind: "message",
            T: PJe,
            repeated: !0
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: Uno
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
            T: ePe
        }
    ]), ePe = k.makeMessageType("aiserver.v1.CmdKLegacyContext", ()=>[
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
        },
        {
            no: 12,
            name: "prompt_code_blocks",
            kind: "message",
            T: kD,
            repeated: !0
        },
        {
            no: 10,
            name: "documentation_identifiers",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Vno = k.makeMessageType("aiserver.v1.StreamCmdKResponseContextWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: SLn,
            oneof: "response"
        },
        {
            no: 2,
            name: "context_status_update",
            kind: "message",
            T: fLn,
            oneof: "response"
        },
        {
            no: 3,
            name: "missing_context_items",
            kind: "message",
            T: vLn,
            oneof: "response"
        }
    ]), pSd = k.makeMessageType("aiserver.v1.StreamTerminalCmdKResponseContextWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: mSd,
            oneof: "response"
        },
        {
            no: 2,
            name: "context_status_update",
            kind: "message",
            T: fLn,
            oneof: "response"
        },
        {
            no: 3,
            name: "missing_context_items",
            kind: "message",
            T: vLn,
            oneof: "response"
        }
    ]), mSd = k.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse", ()=>[
        {
            no: 1,
            name: "terminal_command",
            kind: "message",
            T: gSd,
            oneof: "response"
        },
        {
            no: 4,
            name: "chat",
            kind: "message",
            T: fSd,
            oneof: "response"
        },
        {
            no: 5,
            name: "status_update",
            kind: "message",
            T: vSd,
            oneof: "response"
        }
    ]), gSd = k.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse.TerminalCommand", ()=>[
        {
            no: 1,
            name: "partial_command",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamTerminalCmdKResponse_TerminalCommand"
}), fSd = k.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse.Chat", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamTerminalCmdKResponse_Chat"
}), vSd = k.makeMessageType("aiserver.v1.StreamTerminalCmdKResponse.StatusUpdate", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "StreamTerminalCmdKResponse_StatusUpdate"
}), SLn = k.makeMessageType("aiserver.v1.StreamCmdKResponse", ()=>[
        {
            no: 1,
            name: "edit_start",
            kind: "message",
            T: _Sd,
            oneof: "response"
        },
        {
            no: 2,
            name: "edit_stream",
            kind: "message",
            T: bSd,
            oneof: "response"
        },
        {
            no: 3,
            name: "edit_end",
            kind: "message",
            T: ySd,
            oneof: "response"
        },
        {
            no: 4,
            name: "chat",
            kind: "message",
            T: SSd,
            oneof: "response"
        },
        {
            no: 5,
            name: "status_update",
            kind: "message",
            T: kSd,
            oneof: "response"
        }
    ]), _Sd = k.makeMessageType("aiserver.v1.StreamCmdKResponse.EditStart", ()=>[
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
}), bSd = k.makeMessageType("aiserver.v1.StreamCmdKResponse.EditStream", ()=>[
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
}), ySd = k.makeMessageType("aiserver.v1.StreamCmdKResponse.EditEnd", ()=>[
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
}), SSd = k.makeMessageType("aiserver.v1.StreamCmdKResponse.Chat", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "StreamCmdKResponse_Chat"
}), kSd = k.makeMessageType("aiserver.v1.StreamCmdKResponse.StatusUpdate", ()=>[
        {
            no: 1,
            name: "messages",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "StreamCmdKResponse_StatusUpdate"
}), wSd = k.makeMessageType("aiserver.v1.GetRelevantChunksRequest", ()=>[
        {
            no: 1,
            name: "code_blocks",
            kind: "message",
            T: kD,
            repeated: !0
        },
        {
            no: 2,
            name: "cmd_k_options",
            kind: "message",
            T: bLn
        },
        {
            no: 3,
            name: "context_items",
            kind: "message",
            T: PJe,
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
            T: ePe
        }
    ]), CSd = k.makeMessageType("aiserver.v1.StreamGetRelevantChunksResponseContextWrapped", ()=>[
        {
            no: 1,
            name: "real_response",
            kind: "message",
            T: TSd,
            oneof: "response"
        }
    ]), TSd = k.makeMessageType("aiserver.v1.GetRelevantChunksResponse", ()=>[
        {
            no: 1,
            name: "code_blocks",
            kind: "message",
            T: xSd,
            oneof: "response"
        },
        {
            no: 2,
            name: "chain_of_thought_stream",
            kind: "message",
            T: ESd,
            oneof: "response"
        }
    ]), ESd = k.makeMessageType("aiserver.v1.GetRelevantChunksResponse.ChainOfThoughtStream", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "GetRelevantChunksResponse_ChainOfThoughtStream"
}), xSd = k.makeMessageType("aiserver.v1.GetRelevantChunksResponse.CodeBlocks", ()=>[
        {
            no: 1,
            name: "code_blocks",
            kind: "message",
            T: kD,
            repeated: !0
        }
    ], {
    localName: "GetRelevantChunksResponse_CodeBlocks"
});

}
