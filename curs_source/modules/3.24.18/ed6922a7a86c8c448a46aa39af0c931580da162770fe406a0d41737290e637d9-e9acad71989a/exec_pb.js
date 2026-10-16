import { Jfv, _Ou, fOu } from "./agent_store_conflict_exec_pb.js";
import { Cbt, GZe, H6e, J3s, omu } from "./background_shell_exec_pb.js";
import { P2u, _Ys, vYs } from "./canvas_diagnostics_exec_pb.js";
import { iIn, nIn, rIn } from "./computer_use_tool_pb.js";
import { EDn, Q7t, TDn } from "./conversation_search_exec_pb.js";
import { F7t, O7t, f4e } from "./delete_exec_pb.js";
import { Myt, nDn, y4e } from "./diagnostics_exec_pb.js";
import { IGs, XTu, xGs } from "./fetch_exec_pb.js";
import { Ayt, B7t, Iyt } from "./grep_exec_pb.js";
import { Vxn, ybt } from "./hook_additional_context_pb.js";
import { $Ou, AOu, BOu, COu, DOu, EOu, FOu, HOu, IOu, LOu, MOu, NOu, OOu, POu, ROu, SOu, TOu, UOu, WOu, kOu, wOu } from "./hooks_pb.js";
import { G6e, jUt, xbt } from "./ls_exec_pb.js";
import { SYs, bYs, yYs } from "./mcp_allowlist_precheck_exec_pb.js";
import { BQe, P0e, aDn, cDn, cGs, lDn, lGs, oDn, sDn } from "./mcp_exec_pb.js";
import { V2u, j2u, zfv } from "./pi_bash_exec_pb.js";
import { K2u, Kfv, Y2u } from "./pi_edit_exec_pb.js";
import { Zfv, cOu, lOu } from "./pi_find_exec_pb.js";
import { Xfv, rOu, sOu } from "./pi_grep_exec_pb.js";
import { Qfv, hOu, pOu } from "./pi_ls_exec_pb.js";
import { $2u, H2u, qfv } from "./pi_read_exec_pb.js";
import { J2u, Yfv, eOu } from "./pi_write_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { LMn, PMn, rJe } from "./read_exec_pb.js";
import { HUt, Tbt, VZe } from "./record_screen_exec_pb.js";
import { Bj, IDn, S4e } from "./request_context_exec_pb.js";
import { L2u, N2u, O2u } from "./shell_allowlist_precheck_exec_pb.js";
import { $6e, Q3s, emu, hee, k$, z3s } from "./shell_exec_pb.js";
import { B8i, F8i, U8i } from "./smart_mode_classifier_exec_pb.js";
import { $Me, N8i, O8i, aJe, oJe, pYs, sJe } from "./subagent_exec_pb.js";
import { x } from "./tslib.es6.js";
import { Wle, hu, kRe } from "./utils_pb.js";
import { B2u, F2u, U2u } from "./web_fetch_allowlist_precheck_exec_pb.js";
import { dYs, h2u, uYs } from "./write_exec_pb.js";
var $8i, H8i, wYs, Lse, CYs, O$t, OMn, Iee, W0e, GOu, VOu, TYs, EYs;
export { $8i, CYs, EYs, GOu, H8i, Iee, Lse, O$t, OMn, TYs, VOu, W0e, wYs };
var __wakaru__X_initialized = false;
export function _X() {
if (__wakaru__X_initialized) return;
__wakaru__X_initialized = true;
"use strict";
x(), bi(), hee(), dYs(), F7t(), B7t(), LMn(), G6e(), Myt(), Bj(), P0e(), GZe(), XTu(), Tbt(), rIn(), $Me(), U8i(), P2u(), O2u(), SYs(), U2u(), hu(), qfv(), zfv(), Kfv(), Yfv(), Xfv(), Zfv(), Qfv(), EDn(), Jfv(), Vxn(), WOu(), $8i = k.makeMessageType("agent.v1.ExecClientStreamClose", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]), H8i = k.makeMessageType("agent.v1.ExecClientThrow", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stack_trace",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "error_code",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), wYs = k.makeMessageType("agent.v1.ExecClientHeartbeat", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]), Lse = k.makeMessageType("agent.v1.ExecClientControlMessage", ()=>[
        {
            no: 1,
            name: "stream_close",
            kind: "message",
            T: $8i,
            oneof: "message"
        },
        {
            no: 2,
            name: "throw",
            kind: "message",
            T: H8i,
            oneof: "message"
        },
        {
            no: 3,
            name: "heartbeat",
            kind: "message",
            T: wYs,
            oneof: "message"
        }
    ]), CYs = k.makeMessageType("agent.v1.ExecServerAbort", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]), O$t = k.makeMessageType("agent.v1.ExecServerControlMessage", ()=>[
        {
            no: 1,
            name: "abort",
            kind: "message",
            T: CYs,
            oneof: "message"
        }
    ]), OMn = k.makeMessageType("agent.v1.SpanContext", ()=>[
        {
            no: 1,
            name: "trace_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "trace_flags",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 4,
            name: "trace_state",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Iee = k.makeMessageType("agent.v1.ExecServerMessage", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 15,
            name: "exec_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 57,
            name: "machine_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "shell_args",
            kind: "message",
            T: $6e,
            oneof: "message"
        },
        {
            no: 3,
            name: "write_args",
            kind: "message",
            T: uYs,
            oneof: "message"
        },
        {
            no: 4,
            name: "delete_args",
            kind: "message",
            T: O7t,
            oneof: "message"
        },
        {
            no: 5,
            name: "grep_args",
            kind: "message",
            T: Iyt,
            oneof: "message"
        },
        {
            no: 7,
            name: "read_args",
            kind: "message",
            T: PMn,
            oneof: "message"
        },
        {
            no: 29,
            name: "redacted_read_args",
            kind: "message",
            T: PMn,
            oneof: "message"
        },
        {
            no: 8,
            name: "ls_args",
            kind: "message",
            T: jUt,
            oneof: "message"
        },
        {
            no: 9,
            name: "diagnostics_args",
            kind: "message",
            T: nDn,
            oneof: "message"
        },
        {
            no: 10,
            name: "request_context_args",
            kind: "message",
            T: S4e,
            oneof: "message"
        },
        {
            no: 11,
            name: "mcp_args",
            kind: "message",
            T: BQe,
            oneof: "message"
        },
        {
            no: 14,
            name: "shell_stream_args",
            kind: "message",
            T: $6e,
            oneof: "message"
        },
        {
            no: 16,
            name: "background_shell_spawn_args",
            kind: "message",
            T: omu,
            oneof: "message"
        },
        {
            no: 17,
            name: "list_mcp_resources_exec_args",
            kind: "message",
            T: oDn,
            oneof: "message"
        },
        {
            no: 18,
            name: "read_mcp_resource_exec_args",
            kind: "message",
            T: cDn,
            oneof: "message"
        },
        {
            no: 36,
            name: "mcp_state_exec_args",
            kind: "message",
            T: cGs,
            oneof: "message"
        },
        {
            no: 20,
            name: "fetch_args",
            kind: "message",
            T: xGs,
            oneof: "message"
        },
        {
            no: 21,
            name: "record_screen_args",
            kind: "message",
            T: VZe,
            oneof: "message"
        },
        {
            no: 22,
            name: "computer_use_args",
            kind: "message",
            T: nIn,
            oneof: "message"
        },
        {
            no: 23,
            name: "write_shell_stdin_args",
            kind: "message",
            T: H6e,
            oneof: "message"
        },
        {
            no: 27,
            name: "execute_hook_args",
            kind: "message",
            T: GOu,
            oneof: "message"
        },
        {
            no: 28,
            name: "subagent_args",
            kind: "message",
            T: sJe,
            oneof: "message"
        },
        {
            no: 30,
            name: "force_background_shell_args",
            kind: "message",
            T: z3s,
            oneof: "message"
        },
        {
            no: 31,
            name: "force_background_subagent_args",
            kind: "message",
            T: N8i,
            oneof: "message"
        },
        {
            no: 37,
            name: "subagent_await_args",
            kind: "message",
            T: pYs,
            oneof: "message"
        },
        {
            no: 38,
            name: "smart_mode_classifier_args",
            kind: "message",
            T: F8i,
            oneof: "message"
        },
        {
            no: 40,
            name: "canvas_diagnostics_args",
            kind: "message",
            T: vYs,
            oneof: "message"
        },
        {
            no: 41,
            name: "shell_allowlist_precheck_args",
            kind: "message",
            T: L2u,
            oneof: "message"
        },
        {
            no: 42,
            name: "mcp_allowlist_precheck_args",
            kind: "message",
            T: bYs,
            oneof: "message"
        },
        {
            no: 43,
            name: "web_fetch_allowlist_precheck_args",
            kind: "message",
            T: F2u,
            oneof: "message"
        },
        {
            no: 44,
            name: "git_diff_request",
            kind: "message",
            T: kRe,
            oneof: "message"
        },
        {
            no: 45,
            name: "pi_read_args",
            kind: "message",
            T: $2u,
            oneof: "message"
        },
        {
            no: 46,
            name: "pi_bash_args",
            kind: "message",
            T: V2u,
            oneof: "message"
        },
        {
            no: 47,
            name: "pi_edit_args",
            kind: "message",
            T: K2u,
            oneof: "message"
        },
        {
            no: 48,
            name: "pi_write_args",
            kind: "message",
            T: J2u,
            oneof: "message"
        },
        {
            no: 49,
            name: "pi_grep_args",
            kind: "message",
            T: rOu,
            oneof: "message"
        },
        {
            no: 50,
            name: "pi_find_args",
            kind: "message",
            T: cOu,
            oneof: "message"
        },
        {
            no: 51,
            name: "pi_ls_args",
            kind: "message",
            T: hOu,
            oneof: "message"
        },
        {
            no: 52,
            name: "mini_swe_agent_bash_args",
            kind: "message",
            T: $6e,
            oneof: "message"
        },
        {
            no: 53,
            name: "conversation_search_args",
            kind: "message",
            T: TDn,
            oneof: "message"
        },
        {
            no: 54,
            name: "agent_store_conflict_args",
            kind: "message",
            T: fOu,
            oneof: "message"
        },
        {
            no: 19,
            name: "span_context",
            kind: "message",
            T: OMn,
            opt: !0
        },
        {
            no: 55,
            name: "accept_hook_additional_contexts",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), W0e = k.makeMessageType("agent.v1.ExecClientMessage", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        },
        {
            no: 15,
            name: "exec_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 39,
            name: "local_execution_time_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 45,
            name: "hook_additional_contexts",
            kind: "message",
            T: ybt,
            repeated: !0
        },
        {
            no: 2,
            name: "shell_result",
            kind: "message",
            T: k$,
            oneof: "message"
        },
        {
            no: 3,
            name: "write_result",
            kind: "message",
            T: h2u,
            oneof: "message"
        },
        {
            no: 4,
            name: "delete_result",
            kind: "message",
            T: f4e,
            oneof: "message"
        },
        {
            no: 5,
            name: "grep_result",
            kind: "message",
            T: Ayt,
            oneof: "message"
        },
        {
            no: 7,
            name: "read_result",
            kind: "message",
            T: rJe,
            oneof: "message"
        },
        {
            no: 29,
            name: "redacted_read_result",
            kind: "message",
            T: rJe,
            oneof: "message"
        },
        {
            no: 8,
            name: "ls_result",
            kind: "message",
            T: xbt,
            oneof: "message"
        },
        {
            no: 9,
            name: "diagnostics_result",
            kind: "message",
            T: y4e,
            oneof: "message"
        },
        {
            no: 10,
            name: "request_context_result",
            kind: "message",
            T: IDn,
            oneof: "message"
        },
        {
            no: 11,
            name: "mcp_result",
            kind: "message",
            T: sDn,
            oneof: "message"
        },
        {
            no: 14,
            name: "shell_stream",
            kind: "message",
            T: Q3s,
            oneof: "message"
        },
        {
            no: 16,
            name: "background_shell_spawn_result",
            kind: "message",
            T: J3s,
            oneof: "message"
        },
        {
            no: 17,
            name: "list_mcp_resources_exec_result",
            kind: "message",
            T: aDn,
            oneof: "message"
        },
        {
            no: 18,
            name: "read_mcp_resource_exec_result",
            kind: "message",
            T: lDn,
            oneof: "message"
        },
        {
            no: 36,
            name: "mcp_state_exec_result",
            kind: "message",
            T: lGs,
            oneof: "message"
        },
        {
            no: 20,
            name: "fetch_result",
            kind: "message",
            T: IGs,
            oneof: "message"
        },
        {
            no: 21,
            name: "record_screen_result",
            kind: "message",
            T: HUt,
            oneof: "message"
        },
        {
            no: 22,
            name: "computer_use_result",
            kind: "message",
            T: iIn,
            oneof: "message"
        },
        {
            no: 23,
            name: "write_shell_stdin_result",
            kind: "message",
            T: Cbt,
            oneof: "message"
        },
        {
            no: 27,
            name: "execute_hook_result",
            kind: "message",
            T: VOu,
            oneof: "message"
        },
        {
            no: 28,
            name: "subagent_result",
            kind: "message",
            T: oJe,
            oneof: "message"
        },
        {
            no: 30,
            name: "force_background_shell_result",
            kind: "message",
            T: emu,
            oneof: "message"
        },
        {
            no: 31,
            name: "force_background_subagent_result",
            kind: "message",
            T: O8i,
            oneof: "message"
        },
        {
            no: 37,
            name: "subagent_await_result",
            kind: "message",
            T: aJe,
            oneof: "message"
        },
        {
            no: 38,
            name: "smart_mode_classifier_result",
            kind: "message",
            T: B8i,
            oneof: "message"
        },
        {
            no: 40,
            name: "canvas_diagnostics_result",
            kind: "message",
            T: _Ys,
            oneof: "message"
        },
        {
            no: 41,
            name: "shell_allowlist_precheck_result",
            kind: "message",
            T: N2u,
            oneof: "message"
        },
        {
            no: 42,
            name: "mcp_allowlist_precheck_result",
            kind: "message",
            T: yYs,
            oneof: "message"
        },
        {
            no: 43,
            name: "web_fetch_allowlist_precheck_result",
            kind: "message",
            T: B2u,
            oneof: "message"
        },
        {
            no: 44,
            name: "git_diff_response",
            kind: "message",
            T: Wle,
            oneof: "message"
        },
        {
            no: 46,
            name: "pi_read_result",
            kind: "message",
            T: H2u,
            oneof: "message"
        },
        {
            no: 47,
            name: "pi_bash_result",
            kind: "message",
            T: j2u,
            oneof: "message"
        },
        {
            no: 48,
            name: "pi_edit_result",
            kind: "message",
            T: Y2u,
            oneof: "message"
        },
        {
            no: 49,
            name: "pi_write_result",
            kind: "message",
            T: eOu,
            oneof: "message"
        },
        {
            no: 50,
            name: "pi_grep_result",
            kind: "message",
            T: sOu,
            oneof: "message"
        },
        {
            no: 51,
            name: "pi_find_result",
            kind: "message",
            T: lOu,
            oneof: "message"
        },
        {
            no: 52,
            name: "pi_ls_result",
            kind: "message",
            T: pOu,
            oneof: "message"
        },
        {
            no: 53,
            name: "conversation_search_result",
            kind: "message",
            T: Q7t,
            oneof: "message"
        },
        {
            no: 54,
            name: "agent_store_conflict_result",
            kind: "message",
            T: _Ou,
            oneof: "message"
        },
        {
            no: 55,
            name: "mini_swe_agent_bash_result",
            kind: "message",
            T: k$,
            oneof: "message"
        }
    ]), GOu = k.makeMessageType("agent.v1.ExecuteHookArgs", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: TYs
        }
    ]), VOu = k.makeMessageType("agent.v1.ExecuteHookResult", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: EYs
        }
    ]), TYs = k.makeMessageType("agent.v1.ExecuteHookRequest", ()=>[
        {
            no: 1,
            name: "pre_compact",
            kind: "message",
            T: SOu,
            oneof: "request"
        },
        {
            no: 2,
            name: "subagent_start",
            kind: "message",
            T: wOu,
            oneof: "request"
        },
        {
            no: 3,
            name: "subagent_stop",
            kind: "message",
            T: TOu,
            oneof: "request"
        },
        {
            no: 4,
            name: "pre_tool_use",
            kind: "message",
            T: OOu,
            oneof: "request"
        },
        {
            no: 5,
            name: "post_tool_use",
            kind: "message",
            T: BOu,
            oneof: "request"
        },
        {
            no: 6,
            name: "post_tool_use_failure",
            kind: "message",
            T: $Ou,
            oneof: "request"
        },
        {
            no: 7,
            name: "before_submit_prompt",
            kind: "message",
            T: IOu,
            oneof: "request"
        },
        {
            no: 8,
            name: "after_agent_response",
            kind: "message",
            T: ROu,
            oneof: "request"
        },
        {
            no: 9,
            name: "after_agent_thought",
            kind: "message",
            T: MOu,
            oneof: "request"
        },
        {
            no: 11,
            name: "stop",
            kind: "message",
            T: LOu,
            oneof: "request"
        }
    ]), EYs = k.makeMessageType("agent.v1.ExecuteHookResponse", ()=>[
        {
            no: 1,
            name: "pre_compact",
            kind: "message",
            T: kOu,
            oneof: "response"
        },
        {
            no: 2,
            name: "subagent_start",
            kind: "message",
            T: COu,
            oneof: "response"
        },
        {
            no: 3,
            name: "subagent_stop",
            kind: "message",
            T: EOu,
            oneof: "response"
        },
        {
            no: 4,
            name: "pre_tool_use",
            kind: "message",
            T: FOu,
            oneof: "response"
        },
        {
            no: 5,
            name: "post_tool_use",
            kind: "message",
            T: UOu,
            oneof: "response"
        },
        {
            no: 6,
            name: "post_tool_use_failure",
            kind: "message",
            T: HOu,
            oneof: "response"
        },
        {
            no: 7,
            name: "before_submit_prompt",
            kind: "message",
            T: AOu,
            oneof: "response"
        },
        {
            no: 8,
            name: "after_agent_response",
            kind: "message",
            T: DOu,
            oneof: "response"
        },
        {
            no: 9,
            name: "after_agent_thought",
            kind: "message",
            T: POu,
            oneof: "response"
        },
        {
            no: 11,
            name: "stop",
            kind: "message",
            T: NOu,
            oneof: "response"
        }
    ]);

}
