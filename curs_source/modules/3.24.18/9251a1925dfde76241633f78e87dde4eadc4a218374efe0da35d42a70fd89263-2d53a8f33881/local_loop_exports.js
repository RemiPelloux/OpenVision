import { parsePrivateInferenceCatalog, resolvePrivateInferenceModel } from "./dashboard_connect_exports.js";
import { HarnessLoader, createPrivateInferenceAgentClient, createPrivateInferenceUsageAdmission, resolvePrivateInferenceCatalog } from "./tree_chunk_napi_exports.js";
import { createAgentHostWithManagedLocalFactory } from "./private_inference_loop_exports.js";
import { createManagedLocalAgentClient, runInferenceAgentModule } from "./dist_exports4.js";
import { entry_exports, startHarnessValidationSidecar } from "./entry_exports.js";
import { PrivateInferenceConfigError } from "./agent-host/dist/agentAdapter/local/private-inference-config.js";
import { STATICALLY_LINKED_AGENT_MODULE_BUILD } from "./agent-host/dist/agentAdapter/local/run-inference-agent-module.js";
import { createAgentHost4 } from "./agent-host/dist/local-loop.js";
import { HarnessLoader as HarnessLoader$2 } from "./tree_chunk_napi_exports.js";
export function createManagedLocalFromBackend(attachAttemptContext) {
    return (backendClients, _host, servingTags)=>{
        const inferenceClient = backendClients.managedInferenceClient;
        const agentToolsClient = backendClients.managedAgentToolsClient;
        if (inferenceClient === void 0 || agentToolsClient === void 0) {
            return void 0;
        }
        return createManagedLocalAgentClient({
            inferenceClient,
            getPrivacyModeEnum: ()=>backendClients.runtimeCapabilities?.getPrivacyModeEnum?.(),
            agentToolsClient,
            ...backendClients.managedAgentServiceClient === void 0 ? {} : {
                conversationBlobClient: backendClients.managedAgentServiceClient
            },
            attachAttemptContext,
            metricTags: servingTags,
            agentModule: runInferenceAgentModule(STATICALLY_LINKED_AGENT_MODULE_BUILD, servingTags.module_channel)
        });
    };
}
export function composeAgentHarness(options2) {
    if (options2 === void 0) {
        return void 0;
    }
    const log5 = (line)=>options2.log(`[agent-harness] ${line}`);
    return {
        log: log5,
        loopLogContext: options2.loopLogContext,
        ...options2.onModuleReverted === void 0 ? {} : {
            onModuleReverted: options2.onModuleReverted
        },
        loader: ()=>HarnessLoader.shared({
                ...options2,
                staticFloor: entry_exports,
                log: log5
            })
    };
}
export function validateAgentHarness(options2) {
    const log5 = (line)=>options2.log(`[agent-harness] ${line}`);
    const pollIntervalMs = options2.timing?.pollIntervalMs;
    return startHarnessValidationSidecar({
        loader: HarnessLoader.shared({
            ...options2,
            staticFloor: entry_exports,
            log: log5
        }),
        log: log5,
        ...options2.metrics === void 0 ? {} : {
            metrics: options2.metrics
        },
        loopLogContext: options2.loopLogContext,
        ...typeof pollIntervalMs === "number" ? {
            pollIntervalMs
        } : {}
    });
}
export function createPrivateInferenceCreateAgentHost(config2) {
    return (options2)=>createAgentHostWithManagedLocalFactory(options2, (backendClients, host)=>createPrivateInferenceAgentClient({
                sessionProvider: config2.sessionProvider,
                catalog: config2.catalog,
                ...config2.configErrorDetail === void 0 ? {} : {
                    configErrorDetail: config2.configErrorDetail
                },
                ...config2.gatewayRetry === void 0 ? {} : {
                    gatewayRetry: config2.gatewayRetry
                },
                ...config2.promptQualityCaptures === void 0 ? {} : {
                    promptQualityCaptures: config2.promptQualityCaptures
                },
                getPrivacyModeEnum: ()=>backendClients.runtimeCapabilities?.getPrivacyModeEnum?.(),
                attachAttemptContext: options2.attachLocalLoopAttemptContext,
                ...backendClients.privateInferenceBackend === void 0 || host.privateInferenceUsage === void 0 ? {} : {
                    usageAdmission: createPrivateInferenceUsageAdmission(backendClients.privateInferenceBackend, host.privateInferenceUsage)
                }
            }), void 0, {
            kind: "private-inference",
            privateInference: config2.routing
        });
}
export { PrivateInferenceConfigError, createAgentHost4, parsePrivateInferenceCatalog, resolvePrivateInferenceCatalog, resolvePrivateInferenceModel };

export var local_loop_exports = {};
Object.defineProperty(local_loop_exports, "PrivateInferenceConfigError", {
    enumerable: true,
    get: ()=>PrivateInferenceConfigError
});
Object.defineProperty(local_loop_exports, "createAgentHost", {
    enumerable: true,
    get: ()=>createAgentHost4
});
Object.defineProperty(local_loop_exports, "createPrivateInferenceCreateAgentHost", {
    enumerable: true,
    get: ()=>createPrivateInferenceCreateAgentHost
});
Object.defineProperty(local_loop_exports, "parsePrivateInferenceCatalog", {
    enumerable: true,
    get: ()=>parsePrivateInferenceCatalog
});
Object.defineProperty(local_loop_exports, "resolvePrivateInferenceCatalog", {
    enumerable: true,
    get: ()=>resolvePrivateInferenceCatalog
});
Object.defineProperty(local_loop_exports, "resolvePrivateInferenceModel", {
    enumerable: true,
    get: ()=>resolvePrivateInferenceModel
});
Object.defineProperty(local_loop_exports, "validateAgentHarness", {
    enumerable: true,
    get: ()=>validateAgentHarness
});
