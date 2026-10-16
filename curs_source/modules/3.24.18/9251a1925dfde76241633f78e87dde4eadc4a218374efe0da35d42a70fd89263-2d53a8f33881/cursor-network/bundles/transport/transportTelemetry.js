import { __toCommonJS } from "../aggregatingMetricsProvider.js";
import { require_structuredLogProvider } from "../structuredLogProvider.js";
import { agent_service_connect_exports, chat_connect_exports, inference_connect_exports } from "../../../entry.js";
import { init_agent_service_connect } from "../../../proto/dist/generated/agent/v1/agent_service_connect.js";
import { init_chat_connect } from "../../../proto/dist/generated/aiserver/v1/chat_connect.js";
import { init_inference_connect } from "../../../proto/dist/generated/aiserver/v1/inference_connect.js";
var __wakaru_require_transportTelemetry_cache;
export function require_transportTelemetry() {
if (__wakaru_require_transportTelemetry_cache) return __wakaru_require_transportTelemetry_cache;
var exports2 = {};
__wakaru_require_transportTelemetry_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.resolveHttpTransportMode = resolveHttpTransportMode;
exports2.classifyBidiStreamLoop = classifyBidiStreamLoop;
exports2.incrementTransportMetric = incrementTransportMetric;
exports2.emitTransportStructuredLog = emitTransportStructuredLog;
var agent_service_connect_js_1 = (init_agent_service_connect(), __toCommonJS(agent_service_connect_exports));
var chat_connect_js_1 = (init_chat_connect(), __toCommonJS(chat_connect_exports));
var inference_connect_js_1 = (init_inference_connect(), __toCommonJS(inference_connect_exports));
var structuredLogProvider_js_1 = require_structuredLogProvider();
function resolveHttpTransportMode(settings) {
    if (!settings.http2Disabled) {
        return "http2";
    }
    return settings.http1SseDisabled ? "http1_poll" : "http1_sse";
}
function classifyBidiStreamLoop(serviceTypeName, methodName) {
    if (serviceTypeName === inference_connect_js_1.InferenceService.typeName && methodName === inference_connect_js_1.InferenceService.methods.runInference.name) {
        return "local_loop";
    }
    if (serviceTypeName === agent_service_connect_js_1.AgentService.typeName && methodName === agent_service_connect_js_1.AgentService.methods.run.name) {
        return "nal";
    }
    if (serviceTypeName === chat_connect_js_1.ChatService.typeName) {
        return "oal";
    }
    return "other";
}
function incrementTransportMetric(host, stat24, tags) {
    try {
        host.metricsIncrement({
            stat: stat24,
            value: 1,
            tags
        });
    } catch  {}
}
function emitTransportStructuredLog(host, entry) {
    try {
        if (host.logStructured !== void 0) {
            host.logStructured({
                key: "transport",
                ...entry
            });
            return;
        }
        switch(entry.level){
            case "debug":
                structuredLogProvider_js_1.StructuredLogProviderImpl.debug("transport", entry.message, entry.metadata);
                break;
            case "info":
                structuredLogProvider_js_1.StructuredLogProviderImpl.info("transport", entry.message, entry.metadata);
                break;
            case "warn":
                structuredLogProvider_js_1.StructuredLogProviderImpl.warn("transport", entry.message, entry.metadata);
                break;
            case "error":
                structuredLogProvider_js_1.StructuredLogProviderImpl.error("transport", entry.message, entry.error, entry.metadata);
                break;
        }
    } catch  {}
}

return exports2;
}
