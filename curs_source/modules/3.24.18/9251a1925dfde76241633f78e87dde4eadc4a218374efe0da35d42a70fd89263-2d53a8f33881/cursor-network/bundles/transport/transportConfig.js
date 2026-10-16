import { __toCommonJS } from "../aggregatingMetricsProvider.js";
import { dashboard_connect_exports } from "../../../dashboard_connect_exports.js";
import { agent_service_connect_exports, aiserver_connect_exports, background_composer_connect_exports, chat_connect_exports, cmdk_connect_exports, filesyncserver_connect_exports, health_connect_exports, inference_connect_exports, origin_connect_exports, private_inference_connect_exports, remote_agent_host_presence_connect_exports, repository_connect_exports, uploadserver_connect_exports } from "../../../entry.js";
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
import { init_uploadserver_connect } from "../../../proto/dist/generated/aiserver/v1/uploadserver_connect.js";
import { init_origin_connect } from "../../../proto/dist/generated/origin/v1/origin_connect.js";
var __wakaru_require_transportConfig_cache;
export function require_transportConfig() {
if (__wakaru_require_transportConfig_cache) return __wakaru_require_transportConfig_cache;
var exports2 = {};
__wakaru_require_transportConfig_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
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
var uploadserver_connect_js_1 = (init_uploadserver_connect(), __toCommonJS(uploadserver_connect_exports));
var origin_connect_js_1 = (init_origin_connect(), __toCommonJS(origin_connect_exports));
var OVERRIDE_METHOD_NAMES = [
    aiserver_connect_js_1.AiService.methods.streamNextCursorPrediction.name,
    aiserver_connect_js_1.AiService.methods.getCppEditClassification.name,
    aiserver_connect_js_1.AiService.methods.streamCpp.name,
    aiserver_connect_js_1.AiService.methods.cppConfig.name,
    aiserver_connect_js_1.AiService.methods.cppEditHistoryAppend.name,
    aiserver_connect_js_1.AiService.methods.cppAppend.name,
    chat_connect_js_1.ChatService.methods.streamUnifiedChatWithTools.name,
    chat_connect_js_1.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name,
    chat_connect_js_1.ChatService.methods.warmStreamUnifiedChatWithTools.name,
    aiserver_connect_js_1.AiService.methods.streamStt.name,
    aiserver_connect_js_1.AiService.methods.streamBugBotAgentic.name,
    aiserver_connect_js_1.AiService.methods.streamUiBestOfNJudge.name,
    dashboard_connect_js_1.DashboardService.methods.listBackgroundComposerSecrets.name,
    dashboard_connect_js_1.DashboardService.methods.createBackgroundComposerSecret.name,
    dashboard_connect_js_1.DashboardService.methods.revokeBackgroundComposerSecret.name,
    agent_service_connect_js_1.AgentService.methods.run.name,
    inference_connect_js_1.InferenceService.methods.runInference.name
];
var OVERRIDE_SERVICE_NAMES__LOWER_PRIORITY_THAN_METHOD_OVERRIDES = [
    repository_connect_js_1.RepositoryService.typeName,
    repository_connect_js_1.GitIndexService.typeName,
    uploadserver_connect_js_1.UploadService.typeName,
    cmdk_connect_js_1.CmdKService.typeName,
    filesyncserver_connect_js_1.FileSyncService.typeName,
    background_composer_connect_js_1.BackgroundComposerService.typeName,
    health_connect_js_1.HealthService.typeName,
    agent_service_connect_js_1.AgentService.typeName,
    origin_connect_js_1.OriginService.typeName,
    remote_agent_host_presence_connect_js_1.RemoteAgentHostPresenceService.typeName,
    private_inference_connect_js_1.PrivateInferenceService.typeName
];

return exports2;
}
