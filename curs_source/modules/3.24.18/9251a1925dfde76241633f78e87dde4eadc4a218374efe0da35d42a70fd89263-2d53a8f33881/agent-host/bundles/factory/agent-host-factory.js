import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_backend_clients } from "../agentAdapter/backend/backend-clients.js";
import { init_local_loop_turn_router } from "../agentAdapter/local/local-loop-turn-router.js";
import { init_local_loop_turn_telemetry } from "../agentAdapter/local/local-loop-turn-telemetry.js";
import { init_private_inference_usage_outbox } from "../agentAdapter/local/private-inference-usage-outbox.js";
import { init_agent_client_host_adapter } from "../agentAdapter/shared/agent-client-host-adapter.js";
import { init_local_loop_enrollment_denial } from "../agentAdapter/shared/local-loop-enrollment-denial.js";
import { init_routing_host_agent_adapter } from "../agentAdapter/shared/routing-host-agent-adapter.js";
import { init_native_cloud_subagent } from "../engine/cloud-subagent/native-cloud-subagent.js";
import { init_default_model } from "../engine/default-model.js";
import { init_request_context_overlay_mailbox } from "../engine/request-context-overlay-mailbox.js";
import { init_subagent_run_settings } from "../engine/subagent-run-settings.js";
import { init_git2 } from "../exec/git/index.js";
import { init_mcp3 } from "../exec/mcp/index.js";
import { init_session_wiring } from "./session-wiring.js";
import { init_connect_transport2 } from "../harness/host/connect-transport.js";
import { init_host_services } from "../harness/host/host-services.js";
import { init_routing_adapter } from "../harness/host/routing-adapter.js";
import { init_serving_module } from "../harness/host/serving-module.js";
import { init_agent_host } from "../kernel/agent-host.js";
import { init_agent_host_storage } from "../storage/agent-host-storage.js";
import { init_global_store } from "../storage/global-store.js";
import { init_instruments } from "../storage/instruments.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
var usageLogger, routingLogger, AgentHostResourceProviderAdapter;
export { AgentHostResourceProviderAdapter, routingLogger, usageLogger };
var __wakaru_init_agent_host_factory_initialized = false;
export function init_agent_host_factory() {
if (__wakaru_init_agent_host_factory_initialized) return;
__wakaru_init_agent_host_factory_initialized = true;
"use strict";
init_dist8();
init_dist();
init_backend_clients();
init_local_loop_enrollment_denial();
init_local_loop_turn_router();
init_local_loop_turn_telemetry();
init_private_inference_usage_outbox();
init_agent_client_host_adapter();
init_routing_host_agent_adapter();
init_native_cloud_subagent();
init_default_model();
init_request_context_overlay_mailbox();
init_subagent_run_settings();
init_git2();
init_mcp3();
init_connect_transport2();
init_host_services();
init_routing_adapter();
init_serving_module();
init_agent_host();
init_agent_host_storage();
init_global_store();
init_instruments();
init_session_wiring();
usageLogger = createLogger("agent-host:private-inference-usage");
routingLogger = createLogger("@anysphere/agent-host:turn-routing");
AgentHostResourceProviderAdapter = class {
    constructor(provider){
        this.provider = provider;
    }
    register(resource, value) {
        this.provider.register(resource, value);
    }
    get(resource) {
        return this.provider.get(resource);
    }
    entries() {
        return this.provider.entries();
    }
    async dispose() {
        await this.provider.dispose?.();
    }
};

}
