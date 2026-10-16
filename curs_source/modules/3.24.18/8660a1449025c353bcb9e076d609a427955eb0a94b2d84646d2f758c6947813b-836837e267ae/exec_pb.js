import { Dwd, Pwd, jIy } from "./agent_store_conflict_exec_pb.js";
import { DDo, F_t, Get, b4t, opd } from "./background_shell_exec_pb.js";
import { Kkd, o9o, s9o } from "./canvas_diagnostics_exec_pb.js";
import { Jei, Qei, Zei } from "./computer_use_tool_pb.js";
import { Emn, _ni, bni } from "./conversation_search_exec_pb.js";
import { Yet, amn, lmn } from "./delete_exec_pb.js";
import { $4t, Vti, ett } from "./diagnostics_exec_pb.js";
import { Dvd, d5o, h5o } from "./fetch_exec_pb.js";
import { O4t, V_t, s5e } from "./grep_exec_pb.js";
import { f4t, jei } from "./hook_additional_context_pb.js";
import { $wd, Bwd, Fwd, Gwd, Jwd, Kwd, Owd, Qwd, Uwd, Vwd, Wwd, Xwd, Ywd, Zwd, e0d, i0d, jwd, n0d, qwd, t0d, zwd } from "./hooks_pb.js";
import { Fpn, k4t, zet } from "./ls_exec_pb.js";
import { a9o, c9o, l9o } from "./mcp_allowlist_precheck_exec_pb.js";
import { Jti, KOo, Qti, U$e, VOo, Xti, eni, tni, zke } from "./mcp_exec_pb.js";
import { NIy, owd, swd } from "./pi_bash_exec_pb.js";
import { LIy, cwd, uwd } from "./pi_edit_exec_pb.js";
import { BIy, Cwd, wwd } from "./pi_find_exec_pb.js";
import { FIy, bwd, ywd } from "./pi_grep_exec_pb.js";
import { Iwd, UIy, xwd } from "./pi_ls_exec_pb.js";
import { DIy, nwd, twd } from "./pi_read_exec_pb.js";
import { OIy, gwd, mwd } from "./pi_write_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { dbt, qni, zni } from "./read_exec_pb.js";
import { B_t, Dpn, y4t } from "./record_screen_exec_pb.js";
import { Gte, Sni, ntt } from "./request_context_exec_pb.js";
import { Xkd, Ykd, Zkd } from "./shell_allowlist_precheck_exec_pb.js";
import { $te, Aj, D$e, IDo, MDo, epd } from "./shell_exec_pb.js";
import { C1r, k1r, w1r } from "./smart_mode_classifier_exec_pb.js";
import { S1r, hbt, mbt, pbt, q$e, t9o, y1r } from "./subagent_exec_pb.js";
import { E } from "./tslib.es6.js";
import { A$e, Hu, jke } from "./utils_pb.js";
import { Jkd, Qkd, ewd } from "./web_fetch_allowlist_precheck_exec_pb.js";
import { Ikd, J4o, Q4o } from "./write_exec_pb.js";
var T1r, E1r, d9o, Bve, h9o, Gmn, Kni, qde, p5e, r0d, s0d, p9o, m9o;
export { Bve, E1r, Gmn, Kni, T1r, d9o, h9o, m9o, p5e, p9o, qde, r0d, s0d };
var __wakaru_Xse_initialized = false;
export function Xse() {
if (__wakaru_Xse_initialized) return;
__wakaru_Xse_initialized = true;
"use strict";
E(), hr(), $te(), J4o(), lmn(), O4t(), zni(), zet(), $4t(), Gte(), zke(), F_t(), Dvd(), y4t(), Jei(), q$e(), C1r(), Kkd(), Zkd(), c9o(), ewd(), Hu(), DIy(), NIy(), LIy(), OIy(), FIy(), BIy(), UIy(), bni(), jIy(), jei(), i0d(), T1r = x.makeMessageType("agent.v1.ExecClientStreamClose", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]), E1r = x.makeMessageType("agent.v1.ExecClientThrow", ()=>[
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
    ]), d9o = x.makeMessageType("agent.v1.ExecClientHeartbeat", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]), Bve = x.makeMessageType("agent.v1.ExecClientControlMessage", ()=>[
        {
            no: 1,
            name: "stream_close",
            kind: "message",
            T: T1r,
            oneof: "message"
        },
        {
            no: 2,
            name: "throw",
            kind: "message",
            T: E1r,
            oneof: "message"
        },
        {
            no: 3,
            name: "heartbeat",
            kind: "message",
            T: d9o,
            oneof: "message"
        }
    ]), h9o = x.makeMessageType("agent.v1.ExecServerAbort", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]), Gmn = x.makeMessageType("agent.v1.ExecServerControlMessage", ()=>[
        {
            no: 1,
            name: "abort",
            kind: "message",
            T: h9o,
            oneof: "message"
        }
    ]), Kni = x.makeMessageType("agent.v1.SpanContext", ()=>[
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
    ]), qde = x.makeMessageType("agent.v1.ExecServerMessage", ()=>[
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
            T: D$e,
            oneof: "message"
        },
        {
            no: 3,
            name: "write_args",
            kind: "message",
            T: Q4o,
            oneof: "message"
        },
        {
            no: 4,
            name: "delete_args",
            kind: "message",
            T: amn,
            oneof: "message"
        },
        {
            no: 5,
            name: "grep_args",
            kind: "message",
            T: V_t,
            oneof: "message"
        },
        {
            no: 7,
            name: "read_args",
            kind: "message",
            T: qni,
            oneof: "message"
        },
        {
            no: 29,
            name: "redacted_read_args",
            kind: "message",
            T: qni,
            oneof: "message"
        },
        {
            no: 8,
            name: "ls_args",
            kind: "message",
            T: Fpn,
            oneof: "message"
        },
        {
            no: 9,
            name: "diagnostics_args",
            kind: "message",
            T: Vti,
            oneof: "message"
        },
        {
            no: 10,
            name: "request_context_args",
            kind: "message",
            T: ntt,
            oneof: "message"
        },
        {
            no: 11,
            name: "mcp_args",
            kind: "message",
            T: U$e,
            oneof: "message"
        },
        {
            no: 14,
            name: "shell_stream_args",
            kind: "message",
            T: D$e,
            oneof: "message"
        },
        {
            no: 16,
            name: "background_shell_spawn_args",
            kind: "message",
            T: opd,
            oneof: "message"
        },
        {
            no: 17,
            name: "list_mcp_resources_exec_args",
            kind: "message",
            T: Qti,
            oneof: "message"
        },
        {
            no: 18,
            name: "read_mcp_resource_exec_args",
            kind: "message",
            T: eni,
            oneof: "message"
        },
        {
            no: 36,
            name: "mcp_state_exec_args",
            kind: "message",
            T: VOo,
            oneof: "message"
        },
        {
            no: 20,
            name: "fetch_args",
            kind: "message",
            T: d5o,
            oneof: "message"
        },
        {
            no: 21,
            name: "record_screen_args",
            kind: "message",
            T: B_t,
            oneof: "message"
        },
        {
            no: 22,
            name: "computer_use_args",
            kind: "message",
            T: Zei,
            oneof: "message"
        },
        {
            no: 23,
            name: "write_shell_stdin_args",
            kind: "message",
            T: Get,
            oneof: "message"
        },
        {
            no: 27,
            name: "execute_hook_args",
            kind: "message",
            T: r0d,
            oneof: "message"
        },
        {
            no: 28,
            name: "subagent_args",
            kind: "message",
            T: hbt,
            oneof: "message"
        },
        {
            no: 30,
            name: "force_background_shell_args",
            kind: "message",
            T: IDo,
            oneof: "message"
        },
        {
            no: 31,
            name: "force_background_subagent_args",
            kind: "message",
            T: y1r,
            oneof: "message"
        },
        {
            no: 37,
            name: "subagent_await_args",
            kind: "message",
            T: t9o,
            oneof: "message"
        },
        {
            no: 38,
            name: "smart_mode_classifier_args",
            kind: "message",
            T: k1r,
            oneof: "message"
        },
        {
            no: 40,
            name: "canvas_diagnostics_args",
            kind: "message",
            T: s9o,
            oneof: "message"
        },
        {
            no: 41,
            name: "shell_allowlist_precheck_args",
            kind: "message",
            T: Ykd,
            oneof: "message"
        },
        {
            no: 42,
            name: "mcp_allowlist_precheck_args",
            kind: "message",
            T: a9o,
            oneof: "message"
        },
        {
            no: 43,
            name: "web_fetch_allowlist_precheck_args",
            kind: "message",
            T: Qkd,
            oneof: "message"
        },
        {
            no: 44,
            name: "git_diff_request",
            kind: "message",
            T: A$e,
            oneof: "message"
        },
        {
            no: 45,
            name: "pi_read_args",
            kind: "message",
            T: twd,
            oneof: "message"
        },
        {
            no: 46,
            name: "pi_bash_args",
            kind: "message",
            T: swd,
            oneof: "message"
        },
        {
            no: 47,
            name: "pi_edit_args",
            kind: "message",
            T: cwd,
            oneof: "message"
        },
        {
            no: 48,
            name: "pi_write_args",
            kind: "message",
            T: mwd,
            oneof: "message"
        },
        {
            no: 49,
            name: "pi_grep_args",
            kind: "message",
            T: bwd,
            oneof: "message"
        },
        {
            no: 50,
            name: "pi_find_args",
            kind: "message",
            T: wwd,
            oneof: "message"
        },
        {
            no: 51,
            name: "pi_ls_args",
            kind: "message",
            T: Iwd,
            oneof: "message"
        },
        {
            no: 52,
            name: "mini_swe_agent_bash_args",
            kind: "message",
            T: D$e,
            oneof: "message"
        },
        {
            no: 53,
            name: "conversation_search_args",
            kind: "message",
            T: _ni,
            oneof: "message"
        },
        {
            no: 54,
            name: "agent_store_conflict_args",
            kind: "message",
            T: Pwd,
            oneof: "message"
        },
        {
            no: 19,
            name: "span_context",
            kind: "message",
            T: Kni,
            opt: !0
        },
        {
            no: 55,
            name: "accept_hook_additional_contexts",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), p5e = x.makeMessageType("agent.v1.ExecClientMessage", ()=>[
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
            T: f4t,
            repeated: !0
        },
        {
            no: 2,
            name: "shell_result",
            kind: "message",
            T: Aj,
            oneof: "message"
        },
        {
            no: 3,
            name: "write_result",
            kind: "message",
            T: Ikd,
            oneof: "message"
        },
        {
            no: 4,
            name: "delete_result",
            kind: "message",
            T: Yet,
            oneof: "message"
        },
        {
            no: 5,
            name: "grep_result",
            kind: "message",
            T: s5e,
            oneof: "message"
        },
        {
            no: 7,
            name: "read_result",
            kind: "message",
            T: dbt,
            oneof: "message"
        },
        {
            no: 29,
            name: "redacted_read_result",
            kind: "message",
            T: dbt,
            oneof: "message"
        },
        {
            no: 8,
            name: "ls_result",
            kind: "message",
            T: k4t,
            oneof: "message"
        },
        {
            no: 9,
            name: "diagnostics_result",
            kind: "message",
            T: ett,
            oneof: "message"
        },
        {
            no: 10,
            name: "request_context_result",
            kind: "message",
            T: Sni,
            oneof: "message"
        },
        {
            no: 11,
            name: "mcp_result",
            kind: "message",
            T: Xti,
            oneof: "message"
        },
        {
            no: 14,
            name: "shell_stream",
            kind: "message",
            T: MDo,
            oneof: "message"
        },
        {
            no: 16,
            name: "background_shell_spawn_result",
            kind: "message",
            T: DDo,
            oneof: "message"
        },
        {
            no: 17,
            name: "list_mcp_resources_exec_result",
            kind: "message",
            T: Jti,
            oneof: "message"
        },
        {
            no: 18,
            name: "read_mcp_resource_exec_result",
            kind: "message",
            T: tni,
            oneof: "message"
        },
        {
            no: 36,
            name: "mcp_state_exec_result",
            kind: "message",
            T: KOo,
            oneof: "message"
        },
        {
            no: 20,
            name: "fetch_result",
            kind: "message",
            T: h5o,
            oneof: "message"
        },
        {
            no: 21,
            name: "record_screen_result",
            kind: "message",
            T: Dpn,
            oneof: "message"
        },
        {
            no: 22,
            name: "computer_use_result",
            kind: "message",
            T: Qei,
            oneof: "message"
        },
        {
            no: 23,
            name: "write_shell_stdin_result",
            kind: "message",
            T: b4t,
            oneof: "message"
        },
        {
            no: 27,
            name: "execute_hook_result",
            kind: "message",
            T: s0d,
            oneof: "message"
        },
        {
            no: 28,
            name: "subagent_result",
            kind: "message",
            T: pbt,
            oneof: "message"
        },
        {
            no: 30,
            name: "force_background_shell_result",
            kind: "message",
            T: epd,
            oneof: "message"
        },
        {
            no: 31,
            name: "force_background_subagent_result",
            kind: "message",
            T: S1r,
            oneof: "message"
        },
        {
            no: 37,
            name: "subagent_await_result",
            kind: "message",
            T: mbt,
            oneof: "message"
        },
        {
            no: 38,
            name: "smart_mode_classifier_result",
            kind: "message",
            T: w1r,
            oneof: "message"
        },
        {
            no: 40,
            name: "canvas_diagnostics_result",
            kind: "message",
            T: o9o,
            oneof: "message"
        },
        {
            no: 41,
            name: "shell_allowlist_precheck_result",
            kind: "message",
            T: Xkd,
            oneof: "message"
        },
        {
            no: 42,
            name: "mcp_allowlist_precheck_result",
            kind: "message",
            T: l9o,
            oneof: "message"
        },
        {
            no: 43,
            name: "web_fetch_allowlist_precheck_result",
            kind: "message",
            T: Jkd,
            oneof: "message"
        },
        {
            no: 44,
            name: "git_diff_response",
            kind: "message",
            T: jke,
            oneof: "message"
        },
        {
            no: 46,
            name: "pi_read_result",
            kind: "message",
            T: nwd,
            oneof: "message"
        },
        {
            no: 47,
            name: "pi_bash_result",
            kind: "message",
            T: owd,
            oneof: "message"
        },
        {
            no: 48,
            name: "pi_edit_result",
            kind: "message",
            T: uwd,
            oneof: "message"
        },
        {
            no: 49,
            name: "pi_write_result",
            kind: "message",
            T: gwd,
            oneof: "message"
        },
        {
            no: 50,
            name: "pi_grep_result",
            kind: "message",
            T: ywd,
            oneof: "message"
        },
        {
            no: 51,
            name: "pi_find_result",
            kind: "message",
            T: Cwd,
            oneof: "message"
        },
        {
            no: 52,
            name: "pi_ls_result",
            kind: "message",
            T: xwd,
            oneof: "message"
        },
        {
            no: 53,
            name: "conversation_search_result",
            kind: "message",
            T: Emn,
            oneof: "message"
        },
        {
            no: 54,
            name: "agent_store_conflict_result",
            kind: "message",
            T: Dwd,
            oneof: "message"
        },
        {
            no: 55,
            name: "mini_swe_agent_bash_result",
            kind: "message",
            T: Aj,
            oneof: "message"
        }
    ]), r0d = x.makeMessageType("agent.v1.ExecuteHookArgs", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: p9o
        }
    ]), s0d = x.makeMessageType("agent.v1.ExecuteHookResult", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: m9o
        }
    ]), p9o = x.makeMessageType("agent.v1.ExecuteHookRequest", ()=>[
        {
            no: 1,
            name: "pre_compact",
            kind: "message",
            T: Owd,
            oneof: "request"
        },
        {
            no: 2,
            name: "subagent_start",
            kind: "message",
            T: Bwd,
            oneof: "request"
        },
        {
            no: 3,
            name: "subagent_stop",
            kind: "message",
            T: jwd,
            oneof: "request"
        },
        {
            no: 4,
            name: "pre_tool_use",
            kind: "message",
            T: Zwd,
            oneof: "request"
        },
        {
            no: 5,
            name: "post_tool_use",
            kind: "message",
            T: Jwd,
            oneof: "request"
        },
        {
            no: 6,
            name: "post_tool_use_failure",
            kind: "message",
            T: t0d,
            oneof: "request"
        },
        {
            no: 7,
            name: "before_submit_prompt",
            kind: "message",
            T: Wwd,
            oneof: "request"
        },
        {
            no: 8,
            name: "after_agent_response",
            kind: "message",
            T: qwd,
            oneof: "request"
        },
        {
            no: 9,
            name: "after_agent_thought",
            kind: "message",
            T: Vwd,
            oneof: "request"
        },
        {
            no: 11,
            name: "stop",
            kind: "message",
            T: Ywd,
            oneof: "request"
        }
    ]), m9o = x.makeMessageType("agent.v1.ExecuteHookResponse", ()=>[
        {
            no: 1,
            name: "pre_compact",
            kind: "message",
            T: Fwd,
            oneof: "response"
        },
        {
            no: 2,
            name: "subagent_start",
            kind: "message",
            T: Uwd,
            oneof: "response"
        },
        {
            no: 3,
            name: "subagent_stop",
            kind: "message",
            T: $wd,
            oneof: "response"
        },
        {
            no: 4,
            name: "pre_tool_use",
            kind: "message",
            T: Qwd,
            oneof: "response"
        },
        {
            no: 5,
            name: "post_tool_use",
            kind: "message",
            T: e0d,
            oneof: "response"
        },
        {
            no: 6,
            name: "post_tool_use_failure",
            kind: "message",
            T: n0d,
            oneof: "response"
        },
        {
            no: 7,
            name: "before_submit_prompt",
            kind: "message",
            T: Gwd,
            oneof: "response"
        },
        {
            no: 8,
            name: "after_agent_response",
            kind: "message",
            T: zwd,
            oneof: "response"
        },
        {
            no: 9,
            name: "after_agent_thought",
            kind: "message",
            T: Kwd,
            oneof: "response"
        },
        {
            no: 11,
            name: "stop",
            kind: "message",
            T: Xwd,
            oneof: "response"
        }
    ]);

}
