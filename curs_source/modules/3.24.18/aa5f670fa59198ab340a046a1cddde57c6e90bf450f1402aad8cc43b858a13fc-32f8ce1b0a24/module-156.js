require.r(exports);
require.d(exports, {
    AbortArgs: ()=>AbortArgs,
    AbortResult: ()=>AbortResult,
    ExecClientControlMessage: ()=>ExecClientControlMessage,
    ExecClientHeartbeat: ()=>ExecClientHeartbeat,
    ExecClientMessage: ()=>ExecClientMessage,
    ExecClientStreamClose: ()=>ExecClientStreamClose,
    ExecClientThrow: ()=>ExecClientThrow,
    ExecServerAbort: ()=>ExecServerAbort,
    ExecServerControlMessage: ()=>ExecServerControlMessage,
    ExecServerMessage: ()=>ExecServerMessage,
    ExecuteHookArgs: ()=>ExecuteHookArgs,
    ExecuteHookRequest: ()=>ExecuteHookRequest,
    ExecuteHookResponse: ()=>ExecuteHookResponse,
    ExecuteHookResult: ()=>ExecuteHookResult,
    SpanContext: ()=>SpanContext
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-70.js");
var _write_exec_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-157.js");
var _delete_exec_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-75.js");
var _grep_exec_pb_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-78.js");
var _read_exec_pb_js__WEBPACK_IMPORTED_MODULE_5__ = require("./module-158.js");
var _ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_6__ = require("./module-84.js");
var _diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_7__ = require("./module-86.js");
var _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_8__ = require("./module-144.js");
var _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_9__ = require("./module-88.js");
var _background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_10__ = require("./module-106.js");
var _fetch_exec_pb_js__WEBPACK_IMPORTED_MODULE_11__ = require("./module-99.js");
var _record_screen_exec_pb_js__WEBPACK_IMPORTED_MODULE_12__ = require("./module-103.js");
var _computer_use_tool_pb_js__WEBPACK_IMPORTED_MODULE_13__ = require("./module-104.js");
var _subagent_exec_pb_js__WEBPACK_IMPORTED_MODULE_14__ = require("./module-159.js");
var _smart_mode_classifier_exec_pb_js__WEBPACK_IMPORTED_MODULE_15__ = require("./module-160.js");
var _canvas_diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_16__ = require("./module-161.js");
var _shell_allowlist_precheck_exec_pb_js__WEBPACK_IMPORTED_MODULE_17__ = require("./module-162.js");
var _mcp_allowlist_precheck_exec_pb_js__WEBPACK_IMPORTED_MODULE_18__ = require("./module-163.js");
var _web_fetch_allowlist_precheck_exec_pb_js__WEBPACK_IMPORTED_MODULE_19__ = require("./module-164.js");
var _aiserver_v1_utils_pb_js__WEBPACK_IMPORTED_MODULE_20__ = require("./module-55.js");
var _pi_read_exec_pb_js__WEBPACK_IMPORTED_MODULE_21__ = require("./module-165.js");
var _pi_bash_exec_pb_js__WEBPACK_IMPORTED_MODULE_22__ = require("./module-166.js");
var _pi_edit_exec_pb_js__WEBPACK_IMPORTED_MODULE_23__ = require("./module-167.js");
var _pi_write_exec_pb_js__WEBPACK_IMPORTED_MODULE_24__ = require("./module-168.js");
var _pi_grep_exec_pb_js__WEBPACK_IMPORTED_MODULE_25__ = require("./module-169.js");
var _pi_find_exec_pb_js__WEBPACK_IMPORTED_MODULE_26__ = require("./module-170.js");
var _pi_ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_27__ = require("./module-171.js");
var _conversation_search_exec_pb_js__WEBPACK_IMPORTED_MODULE_28__ = require("./module-138.js");
var _agent_store_conflict_exec_pb_js__WEBPACK_IMPORTED_MODULE_29__ = require("./module-172.js");
var _hook_additional_context_pb_js__WEBPACK_IMPORTED_MODULE_30__ = require("./module-73.js");
var _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__ = require("./module-173.js");
const ExecClientStreamClose = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecClientStreamClose", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]);
const ExecClientThrow = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecClientThrow", ()=>[
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
            opt: true
        },
        {
            no: 4,
            name: "error_code",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ExecClientHeartbeat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecClientHeartbeat", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]);
const ExecClientControlMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecClientControlMessage", ()=>[
        {
            no: 1,
            name: "stream_close",
            kind: "message",
            T: ExecClientStreamClose,
            oneof: "message"
        },
        {
            no: 2,
            name: "throw",
            kind: "message",
            T: ExecClientThrow,
            oneof: "message"
        },
        {
            no: 3,
            name: "heartbeat",
            kind: "message",
            T: ExecClientHeartbeat,
            oneof: "message"
        }
    ]);
const ExecServerAbort = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecServerAbort", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 13
        }
    ]);
const ExecServerControlMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecServerControlMessage", ()=>[
        {
            no: 1,
            name: "abort",
            kind: "message",
            T: ExecServerAbort,
            oneof: "message"
        }
    ]);
const SpanContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SpanContext", ()=>[
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
            opt: true
        },
        {
            no: 4,
            name: "trace_state",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const AbortArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AbortArgs", []);
const AbortResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AbortResult", []);
const ExecServerMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecServerMessage", ()=>[
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
            opt: true
        },
        {
            no: 2,
            name: "shell_args",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellArgs,
            oneof: "message"
        },
        {
            no: 3,
            name: "write_args",
            kind: "message",
            T: _write_exec_pb_js__WEBPACK_IMPORTED_MODULE_2__.WriteArgs,
            oneof: "message"
        },
        {
            no: 4,
            name: "delete_args",
            kind: "message",
            T: _delete_exec_pb_js__WEBPACK_IMPORTED_MODULE_3__.DeleteArgs,
            oneof: "message"
        },
        {
            no: 5,
            name: "grep_args",
            kind: "message",
            T: _grep_exec_pb_js__WEBPACK_IMPORTED_MODULE_4__.GrepArgs,
            oneof: "message"
        },
        {
            no: 7,
            name: "read_args",
            kind: "message",
            T: _read_exec_pb_js__WEBPACK_IMPORTED_MODULE_5__.ReadArgs,
            oneof: "message"
        },
        {
            no: 29,
            name: "redacted_read_args",
            kind: "message",
            T: _read_exec_pb_js__WEBPACK_IMPORTED_MODULE_5__.ReadArgs,
            oneof: "message"
        },
        {
            no: 8,
            name: "ls_args",
            kind: "message",
            T: _ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_6__.LsArgs,
            oneof: "message"
        },
        {
            no: 9,
            name: "diagnostics_args",
            kind: "message",
            T: _diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_7__.DiagnosticsArgs,
            oneof: "message"
        },
        {
            no: 10,
            name: "request_context_args",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_8__.RequestContextArgs,
            oneof: "message"
        },
        {
            no: 11,
            name: "mcp_args",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_9__.McpArgs,
            oneof: "message"
        },
        {
            no: 14,
            name: "shell_stream_args",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellArgs,
            oneof: "message"
        },
        {
            no: 16,
            name: "background_shell_spawn_args",
            kind: "message",
            T: _background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_10__.BackgroundShellSpawnArgs,
            oneof: "message"
        },
        {
            no: 17,
            name: "list_mcp_resources_exec_args",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_9__.ListMcpResourcesExecArgs,
            oneof: "message"
        },
        {
            no: 18,
            name: "read_mcp_resource_exec_args",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_9__.ReadMcpResourceExecArgs,
            oneof: "message"
        },
        {
            no: 36,
            name: "mcp_state_exec_args",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_9__.McpStateExecArgs,
            oneof: "message"
        },
        {
            no: 20,
            name: "fetch_args",
            kind: "message",
            T: _fetch_exec_pb_js__WEBPACK_IMPORTED_MODULE_11__.FetchArgs,
            oneof: "message"
        },
        {
            no: 21,
            name: "record_screen_args",
            kind: "message",
            T: _record_screen_exec_pb_js__WEBPACK_IMPORTED_MODULE_12__.RecordScreenArgs,
            oneof: "message"
        },
        {
            no: 22,
            name: "computer_use_args",
            kind: "message",
            T: _computer_use_tool_pb_js__WEBPACK_IMPORTED_MODULE_13__.ComputerUseArgs,
            oneof: "message"
        },
        {
            no: 23,
            name: "write_shell_stdin_args",
            kind: "message",
            T: _background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_10__.WriteShellStdinArgs,
            oneof: "message"
        },
        {
            no: 27,
            name: "execute_hook_args",
            kind: "message",
            T: ExecuteHookArgs,
            oneof: "message"
        },
        {
            no: 28,
            name: "subagent_args",
            kind: "message",
            T: _subagent_exec_pb_js__WEBPACK_IMPORTED_MODULE_14__.SubagentArgs,
            oneof: "message"
        },
        {
            no: 30,
            name: "force_background_shell_args",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ForceBackgroundShellArgs,
            oneof: "message"
        },
        {
            no: 31,
            name: "force_background_subagent_args",
            kind: "message",
            T: _subagent_exec_pb_js__WEBPACK_IMPORTED_MODULE_14__.ForceBackgroundSubagentArgs,
            oneof: "message"
        },
        {
            no: 37,
            name: "subagent_await_args",
            kind: "message",
            T: _subagent_exec_pb_js__WEBPACK_IMPORTED_MODULE_14__.SubagentAwaitArgs,
            oneof: "message"
        },
        {
            no: 38,
            name: "smart_mode_classifier_args",
            kind: "message",
            T: _smart_mode_classifier_exec_pb_js__WEBPACK_IMPORTED_MODULE_15__.SmartModeClassifierArgs,
            oneof: "message"
        },
        {
            no: 40,
            name: "canvas_diagnostics_args",
            kind: "message",
            T: _canvas_diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_16__.CanvasDiagnosticsArgs,
            oneof: "message"
        },
        {
            no: 41,
            name: "shell_allowlist_precheck_args",
            kind: "message",
            T: _shell_allowlist_precheck_exec_pb_js__WEBPACK_IMPORTED_MODULE_17__.ShellAllowlistPrecheckArgs,
            oneof: "message"
        },
        {
            no: 42,
            name: "mcp_allowlist_precheck_args",
            kind: "message",
            T: _mcp_allowlist_precheck_exec_pb_js__WEBPACK_IMPORTED_MODULE_18__.McpAllowlistPrecheckArgs,
            oneof: "message"
        },
        {
            no: 43,
            name: "web_fetch_allowlist_precheck_args",
            kind: "message",
            T: _web_fetch_allowlist_precheck_exec_pb_js__WEBPACK_IMPORTED_MODULE_19__.WebFetchAllowlistPrecheckArgs,
            oneof: "message"
        },
        {
            no: 44,
            name: "git_diff_request",
            kind: "message",
            T: _aiserver_v1_utils_pb_js__WEBPACK_IMPORTED_MODULE_20__.GetDiffRequest,
            oneof: "message"
        },
        {
            no: 45,
            name: "pi_read_args",
            kind: "message",
            T: _pi_read_exec_pb_js__WEBPACK_IMPORTED_MODULE_21__.PiReadExecArgs,
            oneof: "message"
        },
        {
            no: 46,
            name: "pi_bash_args",
            kind: "message",
            T: _pi_bash_exec_pb_js__WEBPACK_IMPORTED_MODULE_22__.PiBashExecArgs,
            oneof: "message"
        },
        {
            no: 47,
            name: "pi_edit_args",
            kind: "message",
            T: _pi_edit_exec_pb_js__WEBPACK_IMPORTED_MODULE_23__.PiEditExecArgs,
            oneof: "message"
        },
        {
            no: 48,
            name: "pi_write_args",
            kind: "message",
            T: _pi_write_exec_pb_js__WEBPACK_IMPORTED_MODULE_24__.PiWriteExecArgs,
            oneof: "message"
        },
        {
            no: 49,
            name: "pi_grep_args",
            kind: "message",
            T: _pi_grep_exec_pb_js__WEBPACK_IMPORTED_MODULE_25__.PiGrepExecArgs,
            oneof: "message"
        },
        {
            no: 50,
            name: "pi_find_args",
            kind: "message",
            T: _pi_find_exec_pb_js__WEBPACK_IMPORTED_MODULE_26__.PiFindExecArgs,
            oneof: "message"
        },
        {
            no: 51,
            name: "pi_ls_args",
            kind: "message",
            T: _pi_ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_27__.PiLsExecArgs,
            oneof: "message"
        },
        {
            no: 52,
            name: "mini_swe_agent_bash_args",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellArgs,
            oneof: "message"
        },
        {
            no: 53,
            name: "conversation_search_args",
            kind: "message",
            T: _conversation_search_exec_pb_js__WEBPACK_IMPORTED_MODULE_28__.ConversationSearchArgs,
            oneof: "message"
        },
        {
            no: 54,
            name: "agent_store_conflict_args",
            kind: "message",
            T: _agent_store_conflict_exec_pb_js__WEBPACK_IMPORTED_MODULE_29__.AgentStoreConflictArgs,
            oneof: "message"
        },
        {
            no: 19,
            name: "span_context",
            kind: "message",
            T: SpanContext,
            opt: true
        },
        {
            no: 55,
            name: "accept_hook_additional_contexts",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const ExecClientMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecClientMessage", ()=>[
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
            opt: true
        },
        {
            no: 45,
            name: "hook_additional_contexts",
            kind: "message",
            T: _hook_additional_context_pb_js__WEBPACK_IMPORTED_MODULE_30__.HookAdditionalContext,
            repeated: true
        },
        {
            no: 2,
            name: "shell_result",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellResult,
            oneof: "message"
        },
        {
            no: 3,
            name: "write_result",
            kind: "message",
            T: _write_exec_pb_js__WEBPACK_IMPORTED_MODULE_2__.WriteResult,
            oneof: "message"
        },
        {
            no: 4,
            name: "delete_result",
            kind: "message",
            T: _delete_exec_pb_js__WEBPACK_IMPORTED_MODULE_3__.DeleteResult,
            oneof: "message"
        },
        {
            no: 5,
            name: "grep_result",
            kind: "message",
            T: _grep_exec_pb_js__WEBPACK_IMPORTED_MODULE_4__.GrepResult,
            oneof: "message"
        },
        {
            no: 7,
            name: "read_result",
            kind: "message",
            T: _read_exec_pb_js__WEBPACK_IMPORTED_MODULE_5__.ReadResult,
            oneof: "message"
        },
        {
            no: 29,
            name: "redacted_read_result",
            kind: "message",
            T: _read_exec_pb_js__WEBPACK_IMPORTED_MODULE_5__.ReadResult,
            oneof: "message"
        },
        {
            no: 8,
            name: "ls_result",
            kind: "message",
            T: _ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_6__.LsResult,
            oneof: "message"
        },
        {
            no: 9,
            name: "diagnostics_result",
            kind: "message",
            T: _diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_7__.DiagnosticsResult,
            oneof: "message"
        },
        {
            no: 10,
            name: "request_context_result",
            kind: "message",
            T: _request_context_exec_pb_js__WEBPACK_IMPORTED_MODULE_8__.RequestContextResult,
            oneof: "message"
        },
        {
            no: 11,
            name: "mcp_result",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_9__.McpResult,
            oneof: "message"
        },
        {
            no: 14,
            name: "shell_stream",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellStream,
            oneof: "message"
        },
        {
            no: 16,
            name: "background_shell_spawn_result",
            kind: "message",
            T: _background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_10__.BackgroundShellSpawnResult,
            oneof: "message"
        },
        {
            no: 17,
            name: "list_mcp_resources_exec_result",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_9__.ListMcpResourcesExecResult,
            oneof: "message"
        },
        {
            no: 18,
            name: "read_mcp_resource_exec_result",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_9__.ReadMcpResourceExecResult,
            oneof: "message"
        },
        {
            no: 36,
            name: "mcp_state_exec_result",
            kind: "message",
            T: _mcp_exec_pb_js__WEBPACK_IMPORTED_MODULE_9__.McpStateExecResult,
            oneof: "message"
        },
        {
            no: 20,
            name: "fetch_result",
            kind: "message",
            T: _fetch_exec_pb_js__WEBPACK_IMPORTED_MODULE_11__.FetchResult,
            oneof: "message"
        },
        {
            no: 21,
            name: "record_screen_result",
            kind: "message",
            T: _record_screen_exec_pb_js__WEBPACK_IMPORTED_MODULE_12__.RecordScreenResult,
            oneof: "message"
        },
        {
            no: 22,
            name: "computer_use_result",
            kind: "message",
            T: _computer_use_tool_pb_js__WEBPACK_IMPORTED_MODULE_13__.ComputerUseResult,
            oneof: "message"
        },
        {
            no: 23,
            name: "write_shell_stdin_result",
            kind: "message",
            T: _background_shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_10__.WriteShellStdinResult,
            oneof: "message"
        },
        {
            no: 27,
            name: "execute_hook_result",
            kind: "message",
            T: ExecuteHookResult,
            oneof: "message"
        },
        {
            no: 28,
            name: "subagent_result",
            kind: "message",
            T: _subagent_exec_pb_js__WEBPACK_IMPORTED_MODULE_14__.SubagentResult,
            oneof: "message"
        },
        {
            no: 30,
            name: "force_background_shell_result",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ForceBackgroundShellResult,
            oneof: "message"
        },
        {
            no: 31,
            name: "force_background_subagent_result",
            kind: "message",
            T: _subagent_exec_pb_js__WEBPACK_IMPORTED_MODULE_14__.ForceBackgroundSubagentResult,
            oneof: "message"
        },
        {
            no: 37,
            name: "subagent_await_result",
            kind: "message",
            T: _subagent_exec_pb_js__WEBPACK_IMPORTED_MODULE_14__.SubagentAwaitResult,
            oneof: "message"
        },
        {
            no: 38,
            name: "smart_mode_classifier_result",
            kind: "message",
            T: _smart_mode_classifier_exec_pb_js__WEBPACK_IMPORTED_MODULE_15__.SmartModeClassifierResult,
            oneof: "message"
        },
        {
            no: 40,
            name: "canvas_diagnostics_result",
            kind: "message",
            T: _canvas_diagnostics_exec_pb_js__WEBPACK_IMPORTED_MODULE_16__.CanvasDiagnosticsResult,
            oneof: "message"
        },
        {
            no: 41,
            name: "shell_allowlist_precheck_result",
            kind: "message",
            T: _shell_allowlist_precheck_exec_pb_js__WEBPACK_IMPORTED_MODULE_17__.ShellAllowlistPrecheckResult,
            oneof: "message"
        },
        {
            no: 42,
            name: "mcp_allowlist_precheck_result",
            kind: "message",
            T: _mcp_allowlist_precheck_exec_pb_js__WEBPACK_IMPORTED_MODULE_18__.McpAllowlistPrecheckResult,
            oneof: "message"
        },
        {
            no: 43,
            name: "web_fetch_allowlist_precheck_result",
            kind: "message",
            T: _web_fetch_allowlist_precheck_exec_pb_js__WEBPACK_IMPORTED_MODULE_19__.WebFetchAllowlistPrecheckResult,
            oneof: "message"
        },
        {
            no: 44,
            name: "git_diff_response",
            kind: "message",
            T: _aiserver_v1_utils_pb_js__WEBPACK_IMPORTED_MODULE_20__.GetDiffResponse,
            oneof: "message"
        },
        {
            no: 46,
            name: "pi_read_result",
            kind: "message",
            T: _pi_read_exec_pb_js__WEBPACK_IMPORTED_MODULE_21__.PiReadExecResult,
            oneof: "message"
        },
        {
            no: 47,
            name: "pi_bash_result",
            kind: "message",
            T: _pi_bash_exec_pb_js__WEBPACK_IMPORTED_MODULE_22__.PiBashExecResult,
            oneof: "message"
        },
        {
            no: 48,
            name: "pi_edit_result",
            kind: "message",
            T: _pi_edit_exec_pb_js__WEBPACK_IMPORTED_MODULE_23__.PiEditExecResult,
            oneof: "message"
        },
        {
            no: 49,
            name: "pi_write_result",
            kind: "message",
            T: _pi_write_exec_pb_js__WEBPACK_IMPORTED_MODULE_24__.PiWriteExecResult,
            oneof: "message"
        },
        {
            no: 50,
            name: "pi_grep_result",
            kind: "message",
            T: _pi_grep_exec_pb_js__WEBPACK_IMPORTED_MODULE_25__.PiGrepExecResult,
            oneof: "message"
        },
        {
            no: 51,
            name: "pi_find_result",
            kind: "message",
            T: _pi_find_exec_pb_js__WEBPACK_IMPORTED_MODULE_26__.PiFindExecResult,
            oneof: "message"
        },
        {
            no: 52,
            name: "pi_ls_result",
            kind: "message",
            T: _pi_ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_27__.PiLsExecResult,
            oneof: "message"
        },
        {
            no: 53,
            name: "conversation_search_result",
            kind: "message",
            T: _conversation_search_exec_pb_js__WEBPACK_IMPORTED_MODULE_28__.ConversationSearchResult,
            oneof: "message"
        },
        {
            no: 54,
            name: "agent_store_conflict_result",
            kind: "message",
            T: _agent_store_conflict_exec_pb_js__WEBPACK_IMPORTED_MODULE_29__.AgentStoreConflictResult,
            oneof: "message"
        },
        {
            no: 55,
            name: "mini_swe_agent_bash_result",
            kind: "message",
            T: _shell_exec_pb_js__WEBPACK_IMPORTED_MODULE_1__.ShellResult,
            oneof: "message"
        }
    ]);
const ExecuteHookArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecuteHookArgs", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: ExecuteHookRequest
        }
    ]);
const ExecuteHookResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecuteHookResult", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: ExecuteHookResponse
        }
    ]);
const ExecuteHookRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecuteHookRequest", ()=>[
        {
            no: 1,
            name: "pre_compact",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.PreCompactRequestQuery,
            oneof: "request"
        },
        {
            no: 2,
            name: "subagent_start",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.SubagentStartRequestQuery,
            oneof: "request"
        },
        {
            no: 3,
            name: "subagent_stop",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.SubagentStopRequestQuery,
            oneof: "request"
        },
        {
            no: 4,
            name: "pre_tool_use",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.PreToolUseRequestQuery,
            oneof: "request"
        },
        {
            no: 5,
            name: "post_tool_use",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.PostToolUseRequestQuery,
            oneof: "request"
        },
        {
            no: 6,
            name: "post_tool_use_failure",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.PostToolUseFailureRequestQuery,
            oneof: "request"
        },
        {
            no: 7,
            name: "before_submit_prompt",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.BeforeSubmitPromptRequestQuery,
            oneof: "request"
        },
        {
            no: 8,
            name: "after_agent_response",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.AfterAgentResponseRequestQuery,
            oneof: "request"
        },
        {
            no: 9,
            name: "after_agent_thought",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.AfterAgentThoughtRequestQuery,
            oneof: "request"
        },
        {
            no: 11,
            name: "stop",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.StopRequestQuery,
            oneof: "request"
        }
    ]);
const ExecuteHookResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ExecuteHookResponse", ()=>[
        {
            no: 1,
            name: "pre_compact",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.PreCompactRequestResponse,
            oneof: "response"
        },
        {
            no: 2,
            name: "subagent_start",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.SubagentStartRequestResponse,
            oneof: "response"
        },
        {
            no: 3,
            name: "subagent_stop",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.SubagentStopRequestResponse,
            oneof: "response"
        },
        {
            no: 4,
            name: "pre_tool_use",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.PreToolUseRequestResponse,
            oneof: "response"
        },
        {
            no: 5,
            name: "post_tool_use",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.PostToolUseRequestResponse,
            oneof: "response"
        },
        {
            no: 6,
            name: "post_tool_use_failure",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.PostToolUseFailureRequestResponse,
            oneof: "response"
        },
        {
            no: 7,
            name: "before_submit_prompt",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.BeforeSubmitPromptRequestResponse,
            oneof: "response"
        },
        {
            no: 8,
            name: "after_agent_response",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.AfterAgentResponseRequestResponse,
            oneof: "response"
        },
        {
            no: 9,
            name: "after_agent_thought",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.AfterAgentThoughtRequestResponse,
            oneof: "response"
        },
        {
            no: 11,
            name: "stop",
            kind: "message",
            T: _hooks_pb_js__WEBPACK_IMPORTED_MODULE_31__.StopRequestResponse,
            oneof: "response"
        }
    ]);
