import { __toCommonJS } from "../aggregatingMetricsProvider.js";
import { require_structuredLogProvider } from "../structuredLogProvider.js";
import { require_adaptiveGzip } from "./adaptiveGzip.js";
import { require_agentRunWebSocketConnectionContext } from "./agentRunWebSocketConnectionContext.js";
import { require_agentRunWebSocketSelection } from "./agentRunWebSocketSelection.js";
import { require_authInit } from "./authInit.js";
import { require_bidiTransportFactory } from "./bidiTransportFactory.js";
import { require_httpKeepalive } from "./httpKeepalive.js";
import { require_ipChangeMonitor } from "./ipChangeMonitor.js";
import { require_networkChangeMonitor } from "./networkChangeMonitor.js";
import { require_transportFactory } from "./transportFactory.js";
import { require_transportTelemetry } from "./transportTelemetry.js";
import { require_ws_reachability_probe } from "./ws-reachability-probe.js";
import { dashboard_connect_exports } from "../../../dashboard_connect_exports.js";
import { agent_service_connect_exports, aiserver_connect_exports, background_composer_connect_exports, chat_connect_exports, cmdk_connect_exports, filesyncserver_connect_exports, health_connect_exports, inference_connect_exports, origin_connect_exports, private_inference_connect_exports, remote_agent_host_presence_connect_exports, repository_connect_exports, server_config_pb_exports, uploadserver_connect_exports } from "../../../entry.js";
import { require_cjs3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
import { require_cookie2 } from "../../../node_modules/.pnpm/tough-cookie@5.1.2/node_modules/tough-cookie/dist/cookie/index.js";
import { init_agent_service_connect } from "../../../proto/dist/generated/agent/v1/agent_service_connect.js";
import { init_aiserver_connect } from "../../../proto/dist/generated/aiserver/v1/aiserver_connect.js";
import { init_background_composer_connect } from "../../../proto/dist/generated/aiserver/v1/background_composer_connect.js";
import { init_chat_connect } from "../../../proto/dist/generated/aiserver/v1/chat_connect.js";
import { init_cmdk_connect } from "../../../proto/dist/generated/aiserver/v1/cmdk_connect.js";
import { init_dashboard_connect } from "../../../proto/dist/generated/aiserver/v1/dashboard_connect.js";
import { init_filesyncserver_connect } from "../../../proto/dist/generated/aiserver/v1/filesyncserver_connect.js";
import { init_health_connect } from "../../../proto/dist/generated/aiserver/v1/health_connect.js";
import { init_inference_connect } from "../../../proto/dist/generated/aiserver/v1/inference_connect.js";
import { init_private_inference_connect } from "../../../proto/dist/generated/aiserver/v1/private_inference_connect.js";
import { init_remote_agent_host_presence_connect } from "../../../proto/dist/generated/aiserver/v1/remote_agent_host_presence_connect.js";
import { init_repository_connect } from "../../../proto/dist/generated/aiserver/v1/repository_connect.js";
import { init_server_config_pb } from "../../../proto/dist/generated/aiserver/v1/server_config_pb.js";
import { init_uploadserver_connect } from "../../../proto/dist/generated/aiserver/v1/uploadserver_connect.js";
import { init_origin_connect } from "../../../proto/dist/generated/origin/v1/origin_connect.js";
var __wakaru_require_handler_cache;
export function require_handler() {
if (__wakaru_require_handler_cache) return __wakaru_require_handler_cache;
var exports2 = {};
__wakaru_require_handler_cache = exports2;
"use strict";
var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    var desc = Object.getOwnPropertyDescriptor(m2, k2);
    if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m2[k2];
            }
        };
    }
    Object.defineProperty(o, k22, desc);
}) : (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    o[k22] = m2[k2];
}));
var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v2) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v2
    });
}) : function(o, v2) {
    o["default"] = v2;
});
var __importStar = exports2 && exports2.__importStar || (function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar2 = [];
            for(var k2 in o2)if (Object.prototype.hasOwnProperty.call(o2, k2)) ar2[ar2.length] = k2;
            return ar2;
        };
        return ownKeys(o);
    };
    return function(mod2) {
        if (mod2 && mod2.__esModule) return mod2;
        var result = {};
        if (mod2 != null) {
            for(var k2 = ownKeys(mod2), i = 0; i < k2.length; i++)if (k2[i] !== "default") __createBinding(result, mod2, k2[i]);
        }
        __setModuleDefault(result, mod2);
        return result;
    };
})();
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AiConnectTransportHandler = exports2.BIDI_ENDPOINT_TO_POLL_METHOD_MAP = exports2.BIDI_ENDPOINT_TO_SSE_METHOD_MAP = void 0;
var crypto8 = __importStar(require("node:crypto"));
var agent_service_connect_js_1 = (init_agent_service_connect(), __toCommonJS(agent_service_connect_exports));
var aiserver_connect_js_1 = (init_aiserver_connect(), __toCommonJS(aiserver_connect_exports));
var background_composer_connect_js_1 = (init_background_composer_connect(), __toCommonJS(background_composer_connect_exports));
var chat_connect_js_1 = (init_chat_connect(), __toCommonJS(chat_connect_exports));
var cmdk_connect_js_1 = (init_cmdk_connect(), __toCommonJS(cmdk_connect_exports));
var dashboard_connect_js_1 = (init_dashboard_connect(), __toCommonJS(dashboard_connect_exports));
var filesyncserver_connect_js_1 = (init_filesyncserver_connect(), __toCommonJS(filesyncserver_connect_exports));
var health_connect_js_1 = (init_health_connect(), __toCommonJS(health_connect_exports));
var inference_connect_js_1 = (init_inference_connect(), __toCommonJS(inference_connect_exports));
var private_inference_connect_js_1 = (init_private_inference_connect(), __toCommonJS(private_inference_connect_exports));
var remote_agent_host_presence_connect_js_1 = (init_remote_agent_host_presence_connect(), __toCommonJS(remote_agent_host_presence_connect_exports));
var repository_connect_js_1 = (init_repository_connect(), __toCommonJS(repository_connect_exports));
var server_config_pb_js_1 = (init_server_config_pb(), __toCommonJS(server_config_pb_exports));
var uploadserver_connect_js_1 = (init_uploadserver_connect(), __toCommonJS(uploadserver_connect_exports));
var origin_connect_js_1 = (init_origin_connect(), __toCommonJS(origin_connect_exports));
var connect_1 = require_cjs3();
var tough_cookie_1 = require_cookie2();
var structuredLogProvider_js_1 = require_structuredLogProvider();
var agentRunWebSocketConnectionContext_js_1 = require_agentRunWebSocketConnectionContext();
var adaptiveGzip_js_1 = require_adaptiveGzip();
var agentRunWebSocketSelection_js_1 = require_agentRunWebSocketSelection();
var authInit_js_1 = require_authInit();
var bidiTransportFactory_js_1 = require_bidiTransportFactory();
var httpKeepalive_js_1 = require_httpKeepalive();
var ipChangeMonitor_js_1 = require_ipChangeMonitor();
var networkChangeMonitor_js_1 = require_networkChangeMonitor();
var transportFactory_js_1 = require_transportFactory();
var transportTelemetry_js_1 = require_transportTelemetry();
var ws_reachability_probe_js_1 = require_ws_reachability_probe();
exports2.BIDI_ENDPOINT_TO_SSE_METHOD_MAP = {
    [chat_connect_js_1.ChatService.methods.streamUnifiedChatWithTools.name]: chat_connect_js_1.ChatService.methods.streamUnifiedChatWithToolsSSE,
    [chat_connect_js_1.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: chat_connect_js_1.ChatService.methods.streamUnifiedChatWithToolsIdempotentSSE,
    [health_connect_js_1.HealthService.methods.streamBidi.name]: health_connect_js_1.HealthService.methods.streamBidiSSE,
    [aiserver_connect_js_1.AiService.methods.streamStt.name]: aiserver_connect_js_1.AiService.methods.streamSttSSE,
    [aiserver_connect_js_1.AiService.methods.streamBugBotAgentic.name]: aiserver_connect_js_1.AiService.methods.streamBugBotAgenticSSE,
    [aiserver_connect_js_1.AiService.methods.streamUiBestOfNJudge.name]: aiserver_connect_js_1.AiService.methods.streamUiBestOfNJudgeSSE,
    [agent_service_connect_js_1.AgentService.methods.run.name]: agent_service_connect_js_1.AgentService.methods.runSSE,
    [inference_connect_js_1.InferenceService.methods.runInference.name]: inference_connect_js_1.InferenceService.methods.runInferenceSSE
};
exports2.BIDI_ENDPOINT_TO_POLL_METHOD_MAP = {
    [chat_connect_js_1.ChatService.methods.streamUnifiedChatWithTools.name]: {
        ...chat_connect_js_1.ChatService.methods.streamUnifiedChatWithToolsPoll,
        O: chat_connect_js_1.ChatService.methods.streamUnifiedChatWithTools.O
    },
    [chat_connect_js_1.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: {
        ...chat_connect_js_1.ChatService.methods.streamUnifiedChatWithToolsIdempotentPoll,
        O: chat_connect_js_1.ChatService.methods.streamUnifiedChatWithToolsIdempotent.O
    },
    [health_connect_js_1.HealthService.methods.streamBidi.name]: {
        ...health_connect_js_1.HealthService.methods.streamBidiPoll,
        O: health_connect_js_1.HealthService.methods.streamBidi.O
    },
    [aiserver_connect_js_1.AiService.methods.streamStt.name]: {
        ...aiserver_connect_js_1.AiService.methods.streamSttPoll,
        O: aiserver_connect_js_1.AiService.methods.streamSttSSE.O
    },
    [aiserver_connect_js_1.AiService.methods.streamBugBotAgentic.name]: {
        ...aiserver_connect_js_1.AiService.methods.streamBugBotAgenticPoll,
        O: aiserver_connect_js_1.AiService.methods.streamBugBotAgenticSSE.O
    },
    [aiserver_connect_js_1.AiService.methods.streamUiBestOfNJudge.name]: {
        ...aiserver_connect_js_1.AiService.methods.streamUiBestOfNJudgePoll,
        O: aiserver_connect_js_1.AiService.methods.streamUiBestOfNJudgeSSE.O
    },
    [agent_service_connect_js_1.AgentService.methods.run.name]: {
        ...agent_service_connect_js_1.AgentService.methods.runPoll,
        O: agent_service_connect_js_1.AgentService.methods.run.O
    },
    [inference_connect_js_1.InferenceService.methods.runInference.name]: {
        ...inference_connect_js_1.InferenceService.methods.runInferencePoll,
        O: inference_connect_js_1.InferenceService.methods.runInference.O
    }
};
function withLocalLoopInferenceFallback(transport, onFallback) {
    return {
        unary (service, method, signal, timeoutMs, header, input, contextValues) {
            return transport.unary(service, method, signal, timeoutMs, header, input, contextValues);
        },
        async stream (service, method, signal, timeoutMs, header, input, contextValues) {
            try {
                return await transport.stream(service, method, signal, timeoutMs, header, input, contextValues);
            } catch (error3) {
                const connectError = connect_1.ConnectError.from(error3);
                if (signal?.aborted === true || connectError.code !== connect_1.Code.Unimplemented && connectError.code !== connect_1.Code.Unavailable) {
                    throw error3;
                }
                onFallback(connectError);
                throw new connect_1.ConnectError("connection aborted (local-loop inference fell back to the backend URL)", connect_1.Code.Unavailable, void 0, void 0, error3);
            }
        }
    };
}
var AiConnectTransportHandler2 = class {
    _updateTransportMap(t) {
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[repository_connect_js_1.RepositoryService.typeName] = t.repoTransport;
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[repository_connect_js_1.GitIndexService.typeName] = t.repoTransport;
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[uploadserver_connect_js_1.UploadService.typeName] = t.repoTransport;
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[cmdk_connect_js_1.CmdKService.typeName] = t.cmdkTransport;
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[filesyncserver_connect_js_1.FileSyncService.typeName] = t.geoCppTransport;
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[health_connect_js_1.HealthService.typeName] = t.agentBidiTransport;
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[background_composer_connect_js_1.BackgroundComposerService.typeName] = t.backgroundComposerProxyTransport;
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[agent_service_connect_js_1.AgentService.typeName] = t.agentBidiTransport;
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[origin_connect_js_1.OriginService.typeName] = t.originTransport;
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[remote_agent_host_presence_connect_js_1.RemoteAgentHostPresenceService.typeName] = t.remoteAgentHostPresenceTransport;
        this._overrideMethodNameToTransportMap[agent_service_connect_js_1.AgentService.methods.run.name] = t.agentBidiTransport;
        const localLoopInferenceUsable = t.localLoopInferenceTransport !== void 0 && t.localLoopInferenceUrl !== void 0 && t.localLoopInferenceUrl !== this.localLoopInferenceFellBackUrl;
        this._overrideMethodNameToTransportMap[inference_connect_js_1.InferenceService.methods.runInference.name] = localLoopInferenceUsable && t.localLoopInferenceTransport !== void 0 ? t.localLoopInferenceTransport : t.agenticComposerTransport;
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[private_inference_connect_js_1.PrivateInferenceService.typeName] = t.agenticComposerTransport;
        this._overrideMethodNameToTransportMap[aiserver_connect_js_1.AiService.methods.streamNextCursorPrediction.name] = t.geoCppTransport;
        this._overrideMethodNameToTransportMap[aiserver_connect_js_1.AiService.methods.getCppEditClassification.name] = t.geoCppTransport;
        this._overrideMethodNameToTransportMap[aiserver_connect_js_1.AiService.methods.streamCpp.name] = t.geoCppTransport;
        this._overrideMethodNameToTransportMap[aiserver_connect_js_1.AiService.methods.cppConfig.name] = t.cppConfigTransport;
        this._overrideMethodNameToTransportMap[aiserver_connect_js_1.AiService.methods.cppEditHistoryAppend.name] = t.telemTransport;
        this._overrideMethodNameToTransportMap[aiserver_connect_js_1.AiService.methods.cppAppend.name] = t.telemTransport;
        this._overrideMethodNameToTransportMap[chat_connect_js_1.ChatService.methods.streamUnifiedChatWithTools.name] = t.agenticComposerTransport;
        this._overrideMethodNameToTransportMap[chat_connect_js_1.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name] = t.agenticComposerTransport;
        this._overrideMethodNameToTransportMap[chat_connect_js_1.ChatService.methods.warmStreamUnifiedChatWithTools.name] = t.agenticComposerTransport;
        this._overrideMethodNameToTransportMap[aiserver_connect_js_1.AiService.methods.streamStt.name] = t.agenticComposerTransport;
        this._overrideMethodNameToTransportMap[aiserver_connect_js_1.AiService.methods.streamBugBotAgentic.name] = t.agenticComposerTransport;
        this._overrideMethodNameToTransportMap[aiserver_connect_js_1.AiService.methods.streamUiBestOfNJudge.name] = t.agenticComposerTransport;
        this._overrideMethodNameToTransportMap[dashboard_connect_js_1.DashboardService.methods.listBackgroundComposerSecrets.name] = t.backgroundComposerProxyTransport;
        this._overrideMethodNameToTransportMap[dashboard_connect_js_1.DashboardService.methods.createBackgroundComposerSecret.name] = t.backgroundComposerProxyTransport;
        this._overrideMethodNameToTransportMap[dashboard_connect_js_1.DashboardService.methods.revokeBackgroundComposerSecret.name] = t.backgroundComposerProxyTransport;
    }
    constructor(host){
        this.host = host;
        this.INACTIVITY_THRESHOLD = 1e3 * 60 * 30;
        this.loggedTokenFallback = false;
        this.disposables = [];
        this.numMsForRequestToResetConnection = 1e3 * 10;
        this.http1KeepaliveDisabled = false;
        this.agentConnectionPoolSize = 4;
        this.disposed = false;
        this._ready = false;
        this.transportRebuildQueue = Promise.resolve();
        this._overrideMethodNameToTransportMap = {
            [aiserver_connect_js_1.AiService.methods.streamNextCursorPrediction.name]: void 0,
            [aiserver_connect_js_1.AiService.methods.getCppEditClassification.name]: void 0,
            [aiserver_connect_js_1.AiService.methods.cppConfig.name]: void 0,
            [aiserver_connect_js_1.AiService.methods.streamCpp.name]: void 0,
            [aiserver_connect_js_1.AiService.methods.cppEditHistoryAppend.name]: void 0,
            [aiserver_connect_js_1.AiService.methods.cppAppend.name]: void 0,
            [chat_connect_js_1.ChatService.methods.streamUnifiedChatWithTools.name]: void 0,
            [chat_connect_js_1.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: void 0,
            [chat_connect_js_1.ChatService.methods.warmStreamUnifiedChatWithTools.name]: void 0,
            [aiserver_connect_js_1.AiService.methods.streamStt.name]: void 0,
            [aiserver_connect_js_1.AiService.methods.streamBugBotAgentic.name]: void 0,
            [aiserver_connect_js_1.AiService.methods.streamUiBestOfNJudge.name]: void 0,
            [dashboard_connect_js_1.DashboardService.methods.listBackgroundComposerSecrets.name]: void 0,
            [dashboard_connect_js_1.DashboardService.methods.createBackgroundComposerSecret.name]: void 0,
            [dashboard_connect_js_1.DashboardService.methods.revokeBackgroundComposerSecret.name]: void 0,
            [agent_service_connect_js_1.AgentService.methods.run.name]: void 0,
            [inference_connect_js_1.InferenceService.methods.runInference.name]: void 0
        };
        this._bidiEndpointToSSEMethodMap = exports2.BIDI_ENDPOINT_TO_SSE_METHOD_MAP;
        this._bidiEndpointToPollMethodMap = exports2.BIDI_ENDPOINT_TO_POLL_METHOD_MAP;
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides = {
            [repository_connect_js_1.RepositoryService.typeName]: void 0,
            [repository_connect_js_1.GitIndexService.typeName]: void 0,
            [uploadserver_connect_js_1.UploadService.typeName]: void 0,
            [cmdk_connect_js_1.CmdKService.typeName]: void 0,
            [filesyncserver_connect_js_1.FileSyncService.typeName]: void 0,
            [background_composer_connect_js_1.BackgroundComposerService.typeName]: void 0,
            [health_connect_js_1.HealthService.typeName]: void 0,
            [agent_service_connect_js_1.AgentService.typeName]: void 0,
            [origin_connect_js_1.OriginService.typeName]: void 0,
            [remote_agent_host_presence_connect_js_1.RemoteAgentHostPresenceService.typeName]: void 0,
            [private_inference_connect_js_1.PrivateInferenceService.typeName]: void 0
        };
        this.debugLog = host.debugLog;
        this.isSetup = new Promise((resolve36)=>{
            this.isSetupResolve = resolve36;
        });
        this.authReady = new Promise((resolve36)=>{
            this.authReadyResolve = resolve36;
        });
        this.cookieJar = new tough_cookie_1.CookieJar();
        this.clientKey = crypto8.randomBytes(32);
        this.transportFactory = new transportFactory_js_1.TransportFactory(host, this.cookieJar, ()=>{
            if (this.accessToken !== void 0) {
                return this.accessToken;
            }
            const live = host.getCursorAuthToken();
            if (!this.loggedTokenFallback) {
                this.loggedTokenFallback = true;
                structuredLogProvider_js_1.StructuredLogProviderImpl.info("auth", "ext-host token cache empty; fell back to live host read", {
                    subkey: "exthost_token_fallback",
                    hasLiveToken: String(live !== void 0)
                });
            }
            return live;
        }, this.clientKey, ()=>this.createAbortAndErrorInterceptor());
        this.bidiTransportFactory = new bidiTransportFactory_js_1.BidiTransportFactory(host, this.transportFactory, this._bidiEndpointToSSEMethodMap, this._bidiEndpointToPollMethodMap);
        this.setupEventListeners();
        void this.getInitialValues().catch((err)=>{
            this.debugLog.error("[AiConnectTransportHandler] getInitialValues failed during init", err);
        });
        this.networkChangeMonitor = new networkChangeMonitor_js_1.NetworkChangeMonitor(host, 1e3 * 5, ()=>this.setup("network_change"));
        this.disposables.push(this.networkChangeMonitor);
        this.disposables.push(this.transportFactory.getPrivateInferenceEnablement().onDidChange((state)=>{
            if (state === "enabled") {
                this.ownedAgentRunWebSocketSelection?.drain();
            }
        }));
        this.setupHttp1KeepaliveDisabledRefresh();
    }
    get isDisposed() {
        return this.disposed;
    }
    dispose() {
        this.disposed = true;
        this.resolveAuthReady(false);
        this.resolveIsSetup();
        this.disposables.forEach((sub)=>{
            sub.dispose();
        });
        this.ownedAgentRunWebSocketSelection?.dispose();
        this.ownedAgentRunWebSocketSelection = void 0;
        this.transportFactory.abortAllSessionManagers();
        this.transportFactory.destroyAllAgents();
    }
    resolveAuthReady(hasToken) {
        const resolve36 = this.authReadyResolve;
        if (resolve36 !== void 0) {
            this.authReadyResolve = void 0;
            resolve36(hasToken);
        }
    }
    resolveIsSetup() {
        const resolve36 = this.isSetupResolve;
        if (resolve36 !== void 0) {
            this.isSetupResolve = void 0;
            resolve36();
        }
    }
    setupEventListeners() {
        this.disposables.push(this.host.onDidChangeCursorAuthToken((token)=>{
            this.accessToken = token;
            if (this.cursorCreds === void 0) {
                return;
            }
            this.setup("auth_token");
        }));
        this.disposables.push(this.host.onDidChangeCursorCreds((creds)=>{
            this.cursorCreds = creds;
            this.setup("creds");
        }));
        this.disposables.push(this.host.onDidChangeHttpProtocolSettings(()=>{
            this.setup("protocol_settings");
        }));
        const serverConfigSetIntervalId = setInterval(async ()=>{
            await this.setServerConfig();
            if (this.lastServerHttp2DisabledValue !== (await this.getConfig())?.http2Config) {
                this.lastServerHttp2DisabledValue = (await this.getConfig())?.http2Config;
                await this.setup("server_config");
            }
        }, 10 * 60 * 1e3);
        this.disposables.push({
            dispose: ()=>clearInterval(serverConfigSetIntervalId)
        });
    }
    resolveHttp1Reason() {
        if (this.lastServerHttp2DisabledValue === server_config_pb_js_1.Http2Config.FORCE_ALL_DISABLED) {
            return "server_force_all";
        }
        if (this.lastServerHttp2DisabledValue === server_config_pb_js_1.Http2Config.FORCE_BIDI_DISABLED) {
            return "server_force_bidi";
        }
        if (this.lastServerHttp2DisabledValue !== server_config_pb_js_1.Http2Config.FORCE_ALL_ENABLED && this.lastServerHttp2DisabledValue !== server_config_pb_js_1.Http2Config.FORCE_BIDI_ENABLED && this.host.isHttp2Disabled()) {
            return "client_disabled";
        }
        return void 0;
    }
    getWsReachabilityProbeContext() {
        if (this.cursorCreds === void 0) {
            return void 0;
        }
        const http1Reason = this.resolveHttp1Reason();
        if (http1Reason === void 0) {
            return void 0;
        }
        return {
            backendUrl: this.cursorCreds.backendUrl,
            http1Reason,
            mode: this.host.isHttp1SseDisabled() ? "poll" : "sse",
            hasEffectiveProxy: this.host.hasEffectiveProxy?.() ?? false
        };
    }
    recordTransportRebuilt(trigger, mode) {
        const previousMode = this.lastBidiTransportMode ?? "none";
        const http1Reason = this.resolveHttp1Reason() ?? "none";
        this.lastBidiTransportMode = mode;
        this.debugLog.info(`[AiConnectTransportHandler] transports rebuilt (${trigger}): ${previousMode} -> ${mode}, http1 reason ${http1Reason}`);
        (0, transportTelemetry_js_1.incrementTransportMetric)(this.host, "transport.rebuilt", {
            trigger,
            mode,
            previous_mode: previousMode,
            http1_reason: http1Reason
        });
        (0, transportTelemetry_js_1.emitTransportStructuredLog)(this.host, {
            level: "info",
            message: "Transports rebuilt",
            metadata: {
                service: "transport_factory",
                subkey: "transport_rebuilt",
                trigger,
                mode,
                previousMode,
                modeChanged: previousMode !== mode,
                http1Reason
            }
        });
    }
    maybeScheduleWsReachabilityProbe() {
        const disposable = (0, ws_reachability_probe_js_1.scheduleWsReachabilityProbe)({
            host: this.host,
            getContext: ()=>this.getWsReachabilityProbeContext()
        });
        if (disposable !== void 0) {
            this.disposables.push(disposable);
        }
        this.maybeScheduleWsDurabilityProbe();
    }
    maybeScheduleWsDurabilityProbe() {
        const disposable = (0, ws_reachability_probe_js_1.scheduleWsDurabilityProbe)({
            host: this.host,
            getContext: ()=>this.getWsReachabilityProbeContext()
        });
        if (disposable !== void 0) {
            this.disposables.push(disposable);
        }
    }
    setupHttp1KeepaliveDisabledRefresh() {
        const updateHttp1KeepaliveDisabledFlag = async ()=>{
            try {
                const disableHttp1Keepalive = await this.host.checkFeatureGate("http1_keepalive_disabled");
                if (this.http1KeepaliveDisabled !== disableHttp1Keepalive) {
                    this.debugLog.info(`[AiConnectTransportHandler] HTTP/1 keepalive disabled flag updated: ${this.http1KeepaliveDisabled}`);
                    structuredLogProvider_js_1.StructuredLogProviderImpl.info("transport", "HTTP/1 keepalive disabled flag updated", {
                        service: "transport_factory",
                        subkey: "http1_keepalive_disabled_flag_updated",
                        http1KeepaliveDisabled: disableHttp1Keepalive
                    });
                }
                this.http1KeepaliveDisabled = disableHttp1Keepalive;
            } catch (error3) {
                this.debugLog.error("[AiConnectTransportHandler] Error checking HTTP/1 keepalive disabled flag, keeping previous value", error3);
            }
        };
        updateHttp1KeepaliveDisabledFlag();
        this.disposables.push(this.host.onDidChangeGates((e)=>{
            if (e.changedGates?.includes("http1_keepalive_disabled")) {
                updateHttp1KeepaliveDisabledFlag();
            }
            if (e.changedGates?.includes("ws_reachability_probe")) {
                this.maybeScheduleWsReachabilityProbe();
            }
            if (e.changedGates?.includes("ws_dark_durability_probe")) {
                (0, ws_reachability_probe_js_1.cancelWsDurabilityProbe)();
                this.maybeScheduleWsDurabilityProbe();
            }
        }));
    }
    async getInitialValues() {
        let hasToken = false;
        try {
            this.lastServerHttp2DisabledValue = (await this.getConfig())?.http2Config;
            const { creds, token } = await (0, authInit_js_1.pollForAuthValues)({
                getCreds: ()=>this.host.getCursorCreds(),
                getToken: ()=>this.host.getCursorAuthToken()
            }, {
                onTimeout: (info2)=>{
                    this.debugLog.warn("[AiConnectTransportHandler] getInitialValues: timeout waiting for auth", info2);
                    structuredLogProvider_js_1.StructuredLogProviderImpl.info("auth", "Auth init timeout - proceeding without token (likely logged out)", {
                        subkey: "auth_init_timeout",
                        source: "handler",
                        ...info2
                    });
                },
                onRaceConditionPrevented: (info2)=>{
                    this.debugLog.warn("[AiConnectTransportHandler] getInitialValues: race condition prevented", info2);
                    structuredLogProvider_js_1.StructuredLogProviderImpl.warn("auth", "Auth token race condition prevented at startup", {
                        subkey: "auth_race_condition_prevented",
                        source: "handler",
                        ...info2
                    });
                }
            }, this.debugLog);
            this.cursorCreds = creds;
            this.accessToken = token;
            hasToken = this.accessToken !== void 0;
            this.debugLog.info("[AiConnectTransportHandler] getInitialValues: auth ready", {
                hasAccessToken: hasToken
            });
            this.resolveAuthReady(hasToken);
            await this.setup("init");
        } finally{
            this.resolveAuthReady(hasToken);
        }
    }
    getAiServerClient() {
        if (this._aiServerClient === void 0) {
            throw new Error("INVARIANT VIOLATION: AiServerClient is undefined");
        }
        const now2 = performance.now();
        if (this.lastClientCreationTime !== void 0 && now2 - this.lastClientCreationTime > this.INACTIVITY_THRESHOLD) {
            this.refresh();
        }
        this.lastClientCreationTime = now2;
        return this._aiServerClient;
    }
    async getBackgroundComposerClient() {
        await this.isSetup;
        if (this._backgroundComposerClient === void 0) {
            throw new Error("INVARIANT VIOLATION: BackgroundComposerClient is undefined");
        }
        return this._backgroundComposerClient;
    }
    getAgentClient() {
        if (this._agentClient === void 0) {
            throw new Error("INVARIANT VIOLATION: AgentClient is undefined");
        }
        return this._agentClient;
    }
    getFilesyncClient() {
        if (this._filesyncClient === void 0) {
            throw new Error("INVARIANT VIOLATION: FilesyncClient is undefined");
        }
        return this._filesyncClient;
    }
    getTransport() {
        if (this._transport === void 0) {
            throw new Error("INVARIANT VIOLATION: Connect transport is undefined");
        }
        return this._transport;
    }
    getTransportIfReady() {
        return this._transport;
    }
    getPrivateInferenceEnablement() {
        return this.transportFactory.getPrivateInferenceEnablement();
    }
    isHttp2TransportFor(rpc) {
        return this._getTransportForService(rpc.serviceName, rpc.methodName, false)?.isHttp2 === true;
    }
    isDebug() {
        return (this.cursorCreds?.backendUrl?.includes("lclhst.build") || this.cursorCreds?.backendUrl?.includes("localhost")) ?? false;
    }
    async refresh() {
        await this.setup("refresh");
    }
    _getTransportForService(serviceName, methodName, incrementUsage = true) {
        let transportWithUsage;
        if (serviceName === health_connect_js_1.HealthService.typeName) {
            const disableHttp2 = this.host.isHttp2Disabled();
            if (disableHttp2 && methodName !== health_connect_js_1.HealthService.methods.streamBidi.name) {
                return this._backendTransport;
            } else {
                return this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[health_connect_js_1.HealthService.typeName];
            }
        } else if (methodName in this._overrideMethodNameToTransportMap) {
            transportWithUsage = this._overrideMethodNameToTransportMap[methodName];
        } else if (serviceName in this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides) {
            transportWithUsage = this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[serviceName];
        } else {
            transportWithUsage = this._backendTransport;
        }
        if (transportWithUsage === void 0) {
            return void 0;
        }
        if (incrementUsage) {
            transportWithUsage.usage++;
            if (transportWithUsage.isHttp2 === true && transportWithUsage.usage > 500) {
                this.createTransports("usage_rotation");
            }
        }
        return transportWithUsage;
    }
    async setup(trigger) {
        await this.createTransports(trigger);
        const transport = this.createMultiProxyTransport();
        this._transport = transport;
        this._aiServerClient = (0, connect_1.createPromiseClient)(aiserver_connect_js_1.AiService, transport);
        this._filesyncClient = (0, connect_1.createPromiseClient)(filesyncserver_connect_js_1.FileSyncService, transport);
        this._backgroundComposerClient = (0, connect_1.createPromiseClient)(background_composer_connect_js_1.BackgroundComposerService, transport);
        this._agentClient = (0, connect_1.createPromiseClient)(agent_service_connect_js_1.AgentService, transport);
        this.resolveIsSetup();
    }
    createMultiProxyTransport() {
        if (!this._ready) {
            throw new Error("INVARIANT VIOLATION: This should not be called without having this._ready.");
        }
        const t = this;
        const transport = {
            unary (service, method, signal, timeoutMs, header, input, contextValues) {
                const transport2 = t._getTransportForService(service.typeName, method.name);
                if (transport2 === void 0) {
                    throw new Error("INVARIANT VIOLATION: Transport is undefined for service: " + service.typeName);
                }
                return transport2.transport.unary(service, method, signal, timeoutMs, header, input, contextValues);
            },
            stream (service, method, signal, timeoutMs, header, input, contextValues) {
                const transport2 = t._getTransportForService(service.typeName, method.name);
                if (transport2 === void 0) {
                    throw new Error("INVARIANT VIOLATION: Transport is undefined for service: " + service.typeName);
                }
                return transport2.transport.stream(service, method, signal, timeoutMs, header, input, contextValues);
            },
            getTransportHost (serviceName, methodName) {
                return t._getTransportForService(serviceName, methodName, false)?.host;
            }
        };
        return transport;
    }
    async setServerConfig() {
        try {
            this.config = server_config_pb_js_1.GetServerConfigResponse.fromJson(await this.host.getCachedServerConfigJson());
        } catch (e) {
            this.debugLog.error("Error getting server config", e);
        }
    }
    async getConfig() {
        if (this.config === void 0) {
            await this.setServerConfig();
        }
        return this.config;
    }
    createTransports(trigger) {
        const rebuild = this.transportRebuildQueue.then(async ()=>{
            if (this.disposed) {
                return;
            }
            try {
                await this.createTransportsForLatestContext(trigger);
            } finally{
                if (this.disposed) {
                    this.ownedAgentRunWebSocketSelection?.dispose();
                    this.ownedAgentRunWebSocketSelection = void 0;
                    this.transportFactory.abortAllSessionManagers();
                    this.transportFactory.destroyAllAgents();
                }
            }
        });
        this.transportRebuildQueue = rebuild.catch(()=>{});
        return rebuild;
    }
    async createTransportsForLatestContext(trigger) {
        if (!this.cursorCreds) {
            throw new Error("CursorCreds is undefined");
        }
        const previousAgentRunWebSocketSelection = this.ownedAgentRunWebSocketSelection;
        this.transportFactory.destroyAllAgents();
        const getHttp1KeepaliveDisabled = ()=>{
            return this.http1KeepaliveDisabled;
        };
        const http1KeepaliveConfig = await (0, httpKeepalive_js_1.getHttp1KeepaliveConfig)(this.host);
        const http1KeepaliveInitialDelayMs = http1KeepaliveConfig.keepAliveInitialDelayMs;
        try {
            const poolConfig = await this.host.getDynamicConfigValue("http2_agent_connection_pool_config");
            if (poolConfig && typeof poolConfig === "object" && "poolSize" in poolConfig && typeof poolConfig.poolSize === "number" && poolConfig.poolSize > 0) {
                this.agentConnectionPoolSize = poolConfig.poolSize;
            }
        } catch (error3) {
            this.debugLog.error("[AiConnectTransportHandler] Error fetching connection pool config, using default", error3);
        }
        const isHttp2Disabled = (()=>{
            if (this.lastServerHttp2DisabledValue === server_config_pb_js_1.Http2Config.FORCE_ALL_DISABLED || this.lastServerHttp2DisabledValue === server_config_pb_js_1.Http2Config.FORCE_BIDI_DISABLED) {
                return true;
            }
            if (this.lastServerHttp2DisabledValue === server_config_pb_js_1.Http2Config.FORCE_ALL_ENABLED || this.lastServerHttp2DisabledValue === server_config_pb_js_1.Http2Config.FORCE_BIDI_ENABLED) {
                return false;
            }
            return this.host.isHttp2Disabled();
        })();
        const { backendUrl, repoBackendUrl, geoCppBackendUrl, cppConfigBackendUrl, cmdkBackendUrl, telemBackendUrl, originBackendUrl, bcProxyUrl, agentBackendUrlNonPrivacy, localLoopInferenceUrl } = this.cursorCreds;
        const selectedAgentUrl = agentBackendUrlNonPrivacy["default"] || backendUrl;
        const httpAgentUrl = selectedAgentUrl && !isHttp2Disabled ? selectedAgentUrl : backendUrl;
        this.maybeScheduleWsReachabilityProbe();
        this.transportFactory.setHttp2SessionEstablishTimeoutMs(await (0, httpKeepalive_js_1.getHttp2SessionEstablishTimeoutMs)(this.host));
        this._backendTransport = this.transportFactory.createTransport({
            baseUrl: backendUrl,
            useHttp2: false,
            maybeUseCppSpoofToken: false,
            pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.BACKEND),
            getHttp1KeepaliveDisabled,
            http1KeepaliveInitialDelayMs
        });
        this._bidiTransport = this.transportFactory.createTransport({
            baseUrl: backendUrl,
            useHttp2: false,
            maybeUseCppSpoofToken: false,
            pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.BIDI),
            getHttp1KeepaliveDisabled,
            http1KeepaliveInitialDelayMs
        });
        const agentBidiTransport = this.bidiTransportFactory.createTransport({
            baseUrl: httpAgentUrl,
            useHttp2: !isHttp2Disabled,
            maybeUseCppSpoofToken: true,
            bidiTransport: this._bidiTransport,
            pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.AGENT),
            getHttp1KeepaliveDisabled,
            http1KeepaliveInitialDelayMs,
            usePooledConnections: true,
            connectionPoolSize: this.agentConnectionPoolSize
        });
        let localLoopInferenceTransport;
        let localLoopInferenceRouteUrl;
        if (localLoopInferenceUrl && !isHttp2Disabled && localLoopInferenceUrl !== this.localLoopInferenceFellBackUrl) {
            const routeUrl = localLoopInferenceUrl;
            localLoopInferenceRouteUrl = routeUrl;
            localLoopInferenceTransport = this.bidiTransportFactory.createTransport({
                baseUrl: routeUrl,
                useHttp2: true,
                maybeUseCppSpoofToken: true,
                pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.LOCAL_LOOP_INFERENCE),
                usePooledConnections: true,
                connectionPoolSize: this.agentConnectionPoolSize
            });
            localLoopInferenceTransport.transport = withLocalLoopInferenceFallback(localLoopInferenceTransport.transport, (error3)=>this.fallBackLocalLoopInference(routeUrl, error3));
        }
        const transportConfig = {
            repoTransport: this.transportFactory.createTransport({
                baseUrl: repoBackendUrl,
                useHttp2: false,
                maybeUseCppSpoofToken: false,
                pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.REPO),
                getHttp1KeepaliveDisabled,
                http1KeepaliveInitialDelayMs,
                overrideAuthToken: async ()=>{
                    if (repoBackendUrl.includes("repo42.cursor.sh") && backendUrl.includes("localhost")) {
                        const config2 = await this.getConfig();
                        if (config2?.indexingConfig?.repo42AuthToken) {
                            return config2.indexingConfig.repo42AuthToken;
                        }
                    }
                    return void 0;
                }
            }),
            http2RepoTransport: this.transportFactory.createTransport({
                baseUrl: repoBackendUrl,
                useHttp2: !isHttp2Disabled,
                maybeUseCppSpoofToken: false,
                pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.HTTP2_REPO),
                getHttp1KeepaliveDisabled,
                http1KeepaliveInitialDelayMs,
                overrideAuthToken: async ()=>{
                    if (repoBackendUrl.includes("repo42.cursor.sh") && backendUrl.includes("localhost")) {
                        const config2 = await this.getConfig();
                        if (config2?.indexingConfig?.repo42AuthToken) {
                            return config2.indexingConfig.repo42AuthToken;
                        }
                    }
                    return void 0;
                }
            }),
            geoCppTransport: this.transportFactory.createTransport({
                baseUrl: geoCppBackendUrl,
                useHttp2: !isHttp2Disabled && geoCppBackendUrl.includes(".cursor.sh") && !geoCppBackendUrl.includes("api2.cursor.sh"),
                maybeUseCppSpoofToken: true,
                pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.GEO_CPP),
                getHttp1KeepaliveDisabled,
                http1KeepaliveInitialDelayMs
            }),
            cppConfigTransport: this.transportFactory.createTransport({
                baseUrl: cppConfigBackendUrl,
                useHttp2: !isHttp2Disabled && cppConfigBackendUrl.includes(".cursor.sh") && !cppConfigBackendUrl.includes("api2.cursor.sh"),
                maybeUseCppSpoofToken: true,
                pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.CPP_CONFIG),
                getHttp1KeepaliveDisabled,
                http1KeepaliveInitialDelayMs
            }),
            cmdkTransport: this.transportFactory.createTransport({
                baseUrl: cmdkBackendUrl,
                useHttp2: !isHttp2Disabled && cmdkBackendUrl.includes("api3.cursor"),
                maybeUseCppSpoofToken: false,
                pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.CMDK),
                getHttp1KeepaliveDisabled,
                http1KeepaliveInitialDelayMs
            }),
            telemTransport: this.transportFactory.createTransport({
                baseUrl: telemBackendUrl,
                useHttp2: !isHttp2Disabled && telemBackendUrl.includes("api3.cursor"),
                maybeUseCppSpoofToken: true,
                pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.TELEM),
                getHttp1KeepaliveDisabled,
                http1KeepaliveInitialDelayMs
            }),
            originTransport: this.transportFactory.createTransport({
                baseUrl: originBackendUrl,
                useHttp2: false,
                maybeUseCppSpoofToken: false,
                pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.ORIGIN),
                getHttp1KeepaliveDisabled,
                http1KeepaliveInitialDelayMs
            }),
            remoteAgentHostPresenceTransport: this.transportFactory.createTransport({
                baseUrl: backendUrl,
                useHttp2: true,
                maybeUseCppSpoofToken: false,
                pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.REMOTE_AGENT_HOST_PRESENCE, {
                    fallbackDefaults: httpKeepalive_js_1.HTTP2_PING_PRODUCTION_DEFAULTS
                }),
                getHttp1KeepaliveDisabled,
                http1KeepaliveInitialDelayMs,
                sendCompression: adaptiveGzip_js_1.adaptiveGzip,
                onGoaway: ()=>this.host.notifyRemoteAgentHostTunnelGoaway?.()
            }),
            agenticComposerTransport: this.bidiTransportFactory.createTransport({
                baseUrl: backendUrl,
                useHttp2: !isHttp2Disabled,
                pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.AGENTIC_COMPOSER),
                maybeUseCppSpoofToken: true,
                bidiTransport: this._bidiTransport
            }),
            agentBidiTransport,
            localLoopInferenceTransport,
            localLoopInferenceUrl: localLoopInferenceRouteUrl,
            backgroundComposerProxyTransport: this.transportFactory.createTransport({
                baseUrl: bcProxyUrl,
                useHttp2: !isHttp2Disabled,
                maybeUseCppSpoofToken: false,
                pingConfig: await (0, httpKeepalive_js_1.getHttp2PingConfig)(this.host, httpKeepalive_js_1.Http2TransportCallSite.BACKGROUND_COMPOSER_PROXY, {
                    fallbackDefaults: httpKeepalive_js_1.HTTP2_PING_PRODUCTION_DEFAULTS
                }),
                getHttp1KeepaliveDisabled,
                http1KeepaliveInitialDelayMs,
                overrideAuthToken: async ()=>{
                    if (bcProxyUrl.includes("api2.cursor.sh") && backendUrl.includes("localhost")) {
                        const config2 = await this.getConfig();
                        if (config2?.indexingConfig?.repo42AuthToken) {
                            return config2.indexingConfig.repo42AuthToken;
                        }
                    }
                    return void 0;
                }
            })
        };
        const nextAgentRunWebSocketSelection = this.createAgentRunWebSocketSelectionForTransportContext({
            httpTransport: agentBidiTransport.transport,
            httpAgentUrl,
            agentUsesHttp2: !isHttp2Disabled
        });
        agentBidiTransport.transport = nextAgentRunWebSocketSelection.transport;
        if (this.disposed) {
            nextAgentRunWebSocketSelection.dispose();
            return;
        }
        this.transportConfig = transportConfig;
        this._updateTransportMap(transportConfig);
        this.ownedAgentRunWebSocketSelection = nextAgentRunWebSocketSelection;
        this._ready = true;
        this.recordTransportRebuilt(trigger, (0, transportTelemetry_js_1.resolveHttpTransportMode)({
            http2Disabled: isHttp2Disabled,
            http1SseDisabled: this.host.isHttp1SseDisabled()
        }));
        if (this.transportFactory.getPrivateInferenceEnablement().state === "enabled") {
            nextAgentRunWebSocketSelection.drain();
        }
        try {
            previousAgentRunWebSocketSelection?.drain();
        } catch (error3) {
            this.debugLog.error("[AiConnectTransportHandler] Error draining replaced Agent WebSocket selection", error3);
        }
    }
    fallBackLocalLoopInference(url2, error3) {
        this.localLoopInferenceFellBackUrl = url2;
        const config2 = this.transportConfig;
        if (config2 === void 0 || config2.localLoopInferenceUrl !== url2) {
            this.debugLog.info("[AiConnectTransportHandler] a replaced local-loop URL failed late; current route unchanged", error3);
            return;
        }
        this._overrideMethodNameToTransportMap[inference_connect_js_1.InferenceService.methods.runInference.name] = config2.agenticComposerTransport;
        (0, transportTelemetry_js_1.incrementTransportMetric)(this.host, "transport.local_loop_inference_fallback", {
            connect_code: connect_1.Code[error3.code]
        });
        this.debugLog.warn("[AiConnectTransportHandler] RunInference fell back from the local-loop URL to the backend URL", error3);
    }
    createAgentRunWebSocketSelectionForTransportContext(options2) {
        const webSocketUrl = (0, agentRunWebSocketSelection_js_1.resolveAgentWebSocketUrl)(options2.httpAgentUrl) ?? options2.httpAgentUrl;
        return (0, agentRunWebSocketSelection_js_1.createAgentRunWebSocketSelection)({
            httpTransport: options2.httpTransport,
            baseUrl: options2.httpAgentUrl,
            agentUsesHttp2: options2.agentUsesHttp2,
            debugLog: this.debugLog,
            checkFeatureGate: (gateName)=>this.host.checkFeatureGate(gateName),
            getDynamicConfigValue: (configName)=>this.host.getDynamicConfigValue(configName),
            onDidChangeFeatureGate: (gateName, listener)=>this.host.onDidChangeGates((event)=>{
                    const hasNamedChanges = event.changedGates !== void 0 || event.changedConfigs !== void 0 || event.changedExperiments !== void 0;
                    const gateMayHaveChanged = event.changedGates?.includes(gateName) === true || !hasNamedChanges;
                    if (gateMayHaveChanged) {
                        listener();
                    }
                }),
            onDidChangeDynamicConfig: (configName, listener)=>this.host.onDidChangeGates((event)=>{
                    const hasNamedChanges = event.changedGates !== void 0 || event.changedConfigs !== void 0 || event.changedExperiments !== void 0;
                    const configMayHaveChanged = event.changedConfigs?.includes(configName) === true || !hasNamedChanges;
                    if (configMayHaveChanged) {
                        listener();
                    }
                }),
            connectionContext: (0, agentRunWebSocketConnectionContext_js_1.createHostAgentRunWebSocketConnectionContextSource)(this.host, {
                endpoint: webSocketUrl
            }),
            runWithNetworkContext: (fn)=>this.host.runWithNetworkContext(fn),
            observePreconnect: (event)=>{
                try {
                    this.host.metricsIncrement({
                        stat: "transport.agent_websocket_preconnect",
                        tags: {
                            outcome: event.outcome,
                            failure_category: event.failureCategory ?? "none"
                        }
                    });
                } catch  {}
            },
            metricsIncrement: (metric)=>this.host.metricsIncrement(metric),
            prepareUpgrade: (prepareOptions)=>this.transportFactory.prepareAgentRunRequest({
                    baseUrl: options2.httpAgentUrl,
                    maybeUseCppSpoofToken: true,
                    callerHeaders: prepareOptions.callerHeaders,
                    ...prepareOptions.signal !== void 0 ? {
                        signal: prepareOptions.signal
                    } : {}
                })
        });
    }
    async resetConnectionIfIpChangedOrNetworkReset(startingNetworkId) {
        const { isDisconnected: ipChanged } = await this.resetConnectionIfIpChanged();
        const networkObjectChanged = startingNetworkId !== void 0 && this.networkChangeMonitor.networkId !== startingNetworkId;
        return ipChanged || networkObjectChanged;
    }
    async resetConnectionIfIpChanged() {
        const baseUrl = this.cursorCreds?.backendUrl;
        const accessToken = this.accessToken;
        if (baseUrl === void 0 || accessToken === void 0) {
            return {
                isDisconnected: false
            };
        }
        return this.networkChangeMonitor.triggerCallbackIfDisconnected(baseUrl, accessToken);
    }
    createAbortAndErrorInterceptor() {
        return (0, ipChangeMonitor_js_1.createAbortErrorAndTimeoutInterceptor)(()=>this.networkChangeMonitor.networkId, (startingNetworkId)=>this.resetConnectionIfIpChangedOrNetworkReset(startingNetworkId), this.numMsForRequestToResetConnection);
    }
};
exports2.AiConnectTransportHandler = AiConnectTransportHandler2;

return exports2;
}
