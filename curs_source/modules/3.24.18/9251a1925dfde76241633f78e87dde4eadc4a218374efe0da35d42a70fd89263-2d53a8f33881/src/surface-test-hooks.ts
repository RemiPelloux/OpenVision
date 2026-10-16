import { init_esm2 } from "../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { ScalarType } from "../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/scalar.js";
import { MethodKind } from "../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { init_agent_host_plugins_pb } from "../proto/dist/generated/agent/v1/agent_host_plugins_pb.js";
import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_conversation_search_exec_pb } from "../proto/dist/generated/agent/v1/conversation_search_exec_pb.js";
import { init_exec_pb } from "../proto/dist/generated/agent/v1/exec_pb.js";
import { init_hooks_pb } from "../proto/dist/generated/agent/v1/hooks_pb.js";
import { init_request_context_exec_pb } from "../proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { init_utils_pb2 } from "../proto/dist/generated/aiserver/v1/utils_pb.js";
import { init_durable_subagent_invocation_store } from "./durable-subagent-invocation-store.ts";
import { init_product_auth_refresh } from "./product-auth-refresh.ts";
import { init_surface_canvas_mcp_writer_fixtures } from "./surface-canvas-mcp-writer-fixtures.ts";
import { init_surface_channel_hub } from "./surface-channel-hub.ts";
import { init_surface_cloud_subagent_fixtures } from "./surface-cloud-subagent-fixtures.ts";
var DebugEmitAgentHostSurfaceAuthRefreshRequest, DebugEmitAgentHostSurfaceAuthRefreshResponse, DebugInvokeAgentHostSurfaceKindRequest, DebugInvokeAgentHostSurfaceKindResponse, DebugSpawnDemoShellRequest, DebugSpawnDemoShellResponse, DebugClaimDurableSubagentInvocationRequest, DebugClaimDurableSubagentInvocationResponse, DebugReadDurableSubagentInvocationRequest, DebugReadDurableSubagentInvocationResponse, AgentHostSurfaceTestHooksService, AgentHostDebugShellHooksService;
export { AgentHostDebugShellHooksService, AgentHostSurfaceTestHooksService, DebugClaimDurableSubagentInvocationRequest, DebugClaimDurableSubagentInvocationResponse, DebugEmitAgentHostSurfaceAuthRefreshRequest, DebugEmitAgentHostSurfaceAuthRefreshResponse, DebugInvokeAgentHostSurfaceKindRequest, DebugInvokeAgentHostSurfaceKindResponse, DebugReadDurableSubagentInvocationRequest, DebugReadDurableSubagentInvocationResponse, DebugSpawnDemoShellRequest, DebugSpawnDemoShellResponse };
var __wakaru_init_surface_test_hooks_initialized = false;
export function init_surface_test_hooks() {
if (__wakaru_init_surface_test_hooks_initialized) return;
__wakaru_init_surface_test_hooks_initialized = true;
"use strict";
init_agent_host_plugins_pb();
init_agent_host_surface_pb();
init_conversation_search_exec_pb();
init_exec_pb();
init_hooks_pb();
init_request_context_exec_pb();
init_utils_pb2();
init_esm2();
init_durable_subagent_invocation_store();
init_product_auth_refresh();
init_surface_canvas_mcp_writer_fixtures();
init_surface_channel_hub();
init_surface_cloud_subagent_fixtures();
DebugEmitAgentHostSurfaceAuthRefreshRequest = proto3.makeMessageType("agent.v1.DebugEmitAgentHostSurfaceAuthRefreshRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: ScalarType.STRING
        }
    ]);
DebugEmitAgentHostSurfaceAuthRefreshResponse = proto3.makeMessageType("agent.v1.DebugEmitAgentHostSurfaceAuthRefreshResponse", ()=>[
        {
            no: 1,
            name: "delivered",
            kind: "scalar",
            T: ScalarType.BOOL
        }
    ]);
DebugInvokeAgentHostSurfaceKindRequest = proto3.makeMessageType("agent.v1.DebugInvokeAgentHostSurfaceKindRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 2,
            name: "kind",
            kind: "scalar",
            T: ScalarType.STRING
        }
    ]);
DebugInvokeAgentHostSurfaceKindResponse = proto3.makeMessageType("agent.v1.DebugInvokeAgentHostSurfaceKindResponse", ()=>[
        {
            no: 1,
            name: "denied",
            kind: "scalar",
            T: ScalarType.BOOL
        },
        {
            no: 2,
            name: "error_code",
            kind: "scalar",
            T: ScalarType.STRING,
            opt: true
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: ScalarType.STRING,
            opt: true
        }
    ]);
DebugSpawnDemoShellRequest = proto3.makeMessageType("agent.v1.DebugSpawnDemoShellRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 2,
            name: "command",
            kind: "scalar",
            T: ScalarType.STRING
        }
    ]);
DebugSpawnDemoShellResponse = proto3.makeMessageType("agent.v1.DebugSpawnDemoShellResponse", ()=>[
        {
            no: 1,
            name: "accepted",
            kind: "scalar",
            T: ScalarType.BOOL
        },
        {
            no: 2,
            name: "shell_id",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 3,
            name: "error",
            kind: "scalar",
            T: ScalarType.STRING,
            opt: true
        }
    ]);
DebugClaimDurableSubagentInvocationRequest = proto3.makeMessageType("agent.v1.DebugClaimDurableSubagentInvocationRequest", ()=>[
        {
            no: 1,
            name: "parent_session_id",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 2,
            name: "root_session_id",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 3,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 4,
            name: "proposed_child_session_id",
            kind: "scalar",
            T: ScalarType.STRING
        }
    ]);
DebugClaimDurableSubagentInvocationResponse = proto3.makeMessageType("agent.v1.DebugClaimDurableSubagentInvocationResponse", ()=>[
        {
            no: 1,
            name: "claim_kind",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 2,
            name: "child_session_id",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 3,
            name: "invocation_kind",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 4,
            name: "error",
            kind: "scalar",
            T: ScalarType.STRING,
            opt: true
        }
    ]);
DebugReadDurableSubagentInvocationRequest = proto3.makeMessageType("agent.v1.DebugReadDurableSubagentInvocationRequest", ()=>[
        {
            no: 1,
            name: "parent_session_id",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 2,
            name: "root_session_id",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 3,
            name: "parent_tool_call_id",
            kind: "scalar",
            T: ScalarType.STRING
        }
    ]);
DebugReadDurableSubagentInvocationResponse = proto3.makeMessageType("agent.v1.DebugReadDurableSubagentInvocationResponse", ()=>[
        {
            no: 1,
            name: "found",
            kind: "scalar",
            T: ScalarType.BOOL
        },
        {
            no: 2,
            name: "child_session_id",
            kind: "scalar",
            T: ScalarType.STRING
        },
        {
            no: 3,
            name: "invocation_kind",
            kind: "scalar",
            T: ScalarType.STRING
        }
    ]);
AgentHostSurfaceTestHooksService = {
    typeName: "agent.v1.AgentHostSurfaceTestHooks",
    methods: {
        emitAuthRefresh: {
            name: "EmitAuthRefresh",
            I: DebugEmitAgentHostSurfaceAuthRefreshRequest,
            O: DebugEmitAgentHostSurfaceAuthRefreshResponse,
            kind: MethodKind.Unary
        },
        invokeKind: {
            name: "InvokeKind",
            I: DebugInvokeAgentHostSurfaceKindRequest,
            O: DebugInvokeAgentHostSurfaceKindResponse,
            kind: MethodKind.Unary
        },
        claimDurableSubagentInvocation: {
            name: "ClaimDurableSubagentInvocation",
            I: DebugClaimDurableSubagentInvocationRequest,
            O: DebugClaimDurableSubagentInvocationResponse,
            kind: MethodKind.Unary
        },
        readDurableSubagentInvocation: {
            name: "ReadDurableSubagentInvocation",
            I: DebugReadDurableSubagentInvocationRequest,
            O: DebugReadDurableSubagentInvocationResponse,
            kind: MethodKind.Unary
        }
    }
};
AgentHostDebugShellHooksService = {
    typeName: "agent.v1.AgentHostDebugShellHooks",
    methods: {
        spawnDemoShell: {
            name: "SpawnDemoShell",
            I: DebugSpawnDemoShellRequest,
            O: DebugSpawnDemoShellResponse,
            kind: MethodKind.Unary
        }
    }
};

}
