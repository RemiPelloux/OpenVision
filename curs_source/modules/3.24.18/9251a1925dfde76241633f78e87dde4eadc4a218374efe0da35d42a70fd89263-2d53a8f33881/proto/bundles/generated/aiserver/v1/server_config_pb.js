import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { OnlineMetricsConfig, init_online_metrics_pb } from "./online_metrics_pb.js";
import { ProfilingConfig, init_profiling_config_pb } from "./profiling_config_pb.js";
import { BugConfigResponse, init_review_pb } from "./review_pb.js";
import { ClientAction, VscodeOSProperties, VscodeOSStatistics, init_utils_pb2 } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage159, __protoMessage3152, ButtonType, DisplayMode, ClientUpdateLevel, RemoteConnectionType, ClientSurface, InAppAdTrigger, ScmConnectAdProvider, ScmConnectAdConnectionState, Http2Config, RetrievalKeepAliveConfig, BugbotPlanType, NewRepoFlowProbeInterpreter, NewRepoFlowFact, NewRepoFlowStepPresentation, NewRepoFlowPluginAuthTarget, InferenceProviderWarningTrigger, ModalDisplayConfig, InAppAd, AdHeader, AdContent, AdSection, AdButton, ClientVersionStatus, IndexingConfig, GitIndexingConfig, ClientTracingConfig, ChatConfig, RemoteAuthority, ScmConnectAdContext, DevEnvironment, GetServerConfigRequest, MetricsConfig, BackgroundComposerConfig, AutoContextConfig, MemoryMonitorConfig, UpdateConfig, UpdateConfig_UpdateMode, PerformanceEventsConfig, InteractionConfig, AgentTelemetryConfig, TraceConfig, ModelMigration, FolderSizeLimit, RunTerminalServerConfig, AgentLayoutPolicy, TerminalTipConfig, OnboardingConfig, BugbotConfig, CodebaseTelemetryConfig, NewRepoFlowProbe, ResolveNewRepoFlowBackendProbeRequest, ResolveNewRepoFlowBackendProbeResponse, GetNewRepoFlowConfigRequest, GetNewRepoFlowConfigResponse, NewRepoFlowCondition, NewRepoFlowInstallPluginAction, NewRepoFlowSubmitFollowupAction, NewRepoFlowDismissAction, NewRepoFlowMcpAuthenticateAction, NewRepoFlowStepButton, NewRepoFlowStep, NewRepoFlowConfig, GetServerConfigResponse, GoogleWorkspaceMcpOAuthClient, InferenceProviderWarning, AgentUrlConfig;
export { AdButton, AdContent, AdHeader, AdSection, AgentLayoutPolicy, AgentTelemetryConfig, AgentUrlConfig, AutoContextConfig, BackgroundComposerConfig, BugbotConfig, BugbotPlanType, ButtonType, ChatConfig, ClientSurface, ClientTracingConfig, ClientUpdateLevel, ClientVersionStatus, CodebaseTelemetryConfig, DevEnvironment, DisplayMode, FolderSizeLimit, GetNewRepoFlowConfigRequest, GetNewRepoFlowConfigResponse, GetServerConfigRequest, GetServerConfigResponse, GitIndexingConfig, GoogleWorkspaceMcpOAuthClient, Http2Config, InAppAd, InAppAdTrigger, IndexingConfig, InferenceProviderWarning, InferenceProviderWarningTrigger, InteractionConfig, MemoryMonitorConfig, MetricsConfig, ModalDisplayConfig, ModelMigration, NewRepoFlowCondition, NewRepoFlowConfig, NewRepoFlowDismissAction, NewRepoFlowFact, NewRepoFlowInstallPluginAction, NewRepoFlowMcpAuthenticateAction, NewRepoFlowPluginAuthTarget, NewRepoFlowProbe, NewRepoFlowProbeInterpreter, NewRepoFlowStep, NewRepoFlowStepButton, NewRepoFlowStepPresentation, NewRepoFlowSubmitFollowupAction, OnboardingConfig, PerformanceEventsConfig, RemoteAuthority, RemoteConnectionType, ResolveNewRepoFlowBackendProbeRequest, ResolveNewRepoFlowBackendProbeResponse, RetrievalKeepAliveConfig, RunTerminalServerConfig, ScmConnectAdConnectionState, ScmConnectAdContext, ScmConnectAdProvider, TerminalTipConfig, TraceConfig, UpdateConfig, UpdateConfig_UpdateMode, __protoMessage3152, __protoPackage159 };
var __wakaru_init_server_config_pb_initialized = false;
export function init_server_config_pb() {
if (__wakaru_init_server_config_pb_initialized) return;
__wakaru_init_server_config_pb_initialized = true;
"use strict";
init_esm2();
init_utils_pb2();
init_review_pb();
init_profiling_config_pb();
init_online_metrics_pb();
init_compact();
__protoPackage159 = "aiserver.v1.";
__protoMessage3152 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage159;
    }
};
ButtonType = enumType2(proto3, __protoPackage159, "ButtonType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LEADING"
    ],
    [
        2,
        "PRIMARY"
    ],
    [
        3,
        "SECONDARY"
    ]
], 1);
DisplayMode = enumType2(proto3, __protoPackage159, "DisplayMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TOAST"
    ],
    [
        2,
        "MODAL"
    ]
], 1);
ClientUpdateLevel = enumType2(proto3, __protoPackage159, "ClientUpdateLevel", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "RECOMMENDED"
    ],
    [
        3,
        "REQUIRED"
    ]
], 1);
RemoteConnectionType = enumType2(proto3, __protoPackage159, "RemoteConnectionType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LOCAL"
    ],
    [
        2,
        "WSL"
    ],
    [
        3,
        "SSH"
    ],
    [
        4,
        "DEVCONTAINER"
    ],
    [
        5,
        "DEVCONTAINER_SSH"
    ],
    [
        6,
        "DEVCONTAINER_WSL"
    ]
], 1);
ClientSurface = enumType2(proto3, __protoPackage159, "ClientSurface", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EDITOR"
    ],
    [
        2,
        "GLASS"
    ]
], 1);
InAppAdTrigger = enumType2(proto3, __protoPackage159, "InAppAdTrigger", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MOUNT"
    ],
    [
        2,
        "FIND_ISSUES"
    ],
    [
        3,
        "GIT_PUSH"
    ],
    [
        4,
        "COMMIT"
    ],
    [
        5,
        "IOS_DOWNLOAD_MENU"
    ]
], 1);
ScmConnectAdProvider = enumType2(proto3, __protoPackage159, "ScmConnectAdProvider", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "GITHUB"
    ],
    [
        2,
        "GITLAB"
    ]
], 1);
ScmConnectAdConnectionState = enumType2(proto3, __protoPackage159, "ScmConnectAdConnectionState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UNKNOWN"
    ],
    [
        2,
        "NOT_CONNECTED"
    ],
    [
        3,
        "HAS_ACCESS"
    ]
], 1);
Http2Config = enumType2(proto3, __protoPackage159, "Http2Config", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FORCE_ALL_DISABLED"
    ],
    [
        2,
        "FORCE_ALL_ENABLED"
    ],
    [
        3,
        "FORCE_BIDI_DISABLED"
    ],
    [
        4,
        "FORCE_BIDI_ENABLED"
    ]
], 1);
RetrievalKeepAliveConfig = enumType2(proto3, __protoPackage159, "RetrievalKeepAliveConfig", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FORCE_DISABLED"
    ],
    [
        2,
        "FORCE_ENABLED"
    ]
], 1);
BugbotPlanType = enumType2(proto3, __protoPackage159, "BugbotPlanType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TEAM"
    ],
    [
        2,
        "USER"
    ]
], 1);
NewRepoFlowProbeInterpreter = enumType2(proto3, __protoPackage159, "NewRepoFlowProbeInterpreter", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "VERCEL_PROJECT_LINK_MATCH"
    ],
    [
        2,
        "JSON_PATH_EQUALS"
    ],
    [
        3,
        "BOOLEAN_FIELD"
    ]
], 1);
NewRepoFlowFact = enumType2(proto3, __protoPackage159, "NewRepoFlowFact", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "STARTED_AS_NEW_PROJECT"
    ],
    [
        2,
        "REPO_IS_STANDARD_ORIGIN"
    ],
    [
        3,
        "IS_SUBAGENT_CONVERSATION"
    ],
    [
        4,
        "PLUGIN_INSTALLED"
    ],
    [
        5,
        "PROBE_RESULT"
    ],
    [
        6,
        "STEP_LATCHED"
    ],
    [
        7,
        "SERVER_FACT"
    ],
    [
        8,
        "PROBE_LINKED_WITH_LATCH_FALLBACK"
    ],
    [
        9,
        "MCP_NEEDS_AUTH"
    ]
], 1);
NewRepoFlowStepPresentation = enumType2(proto3, __protoPackage159, "NewRepoFlowStepPresentation", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PILL"
    ],
    [
        2,
        "PLUGIN_NUDGE"
    ],
    [
        3,
        "BLOCKING_TRAY"
    ]
], 1);
NewRepoFlowPluginAuthTarget = enumType2(proto3, __protoPackage159, "NewRepoFlowPluginAuthTarget", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLOUD"
    ],
    [
        2,
        "LOCAL"
    ]
], 1);
InferenceProviderWarningTrigger = enumType2(proto3, __protoPackage159, "InferenceProviderWarningTrigger", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ON_SELECT"
    ],
    [
        2,
        "ON_ERROR"
    ]
], 1);
ModalDisplayConfig = class _ModalDisplayConfig extends __protoMessage3152 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ModalDisplayConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ModalDisplayConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ModalDisplayConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ModalDisplayConfig, a, b2);
    }
    static $() {
        return [
            "ModalDisplayConfig|1 background_gradient 9?|2 description 9?|3 background_gradient_light 9?|4 background_gradient_dark 9?"
        ];
    }
};
InAppAd = class _InAppAd extends __protoMessage3152 {
    constructor(data){
        super();
        this.id = "";
        this.buttons = [];
        this.displayMode = DisplayMode.UNSPECIFIED;
        this.targetSurfaces = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InAppAd().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InAppAd().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InAppAd().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InAppAd, a, b2);
    }
    static $() {
        return [
            "InAppAd|1 id 9|2 header #0|3 content #1|4 buttons #2*|5 force_dark_close_button 8?|6 display_mode #3|7 analytics_variant 9?|8 modal_display_config #4?|9 target_surfaces #5*",
            AdHeader,
            AdContent,
            AdButton,
            DisplayMode,
            ModalDisplayConfig,
            ClientSurface
        ];
    }
};
AdHeader = class _AdHeader extends __protoMessage3152 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AdHeader().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AdHeader().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AdHeader().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AdHeader, a, b2);
    }
    static $() {
        return [
            "AdHeader|1 banner_url 9?|2 banner_url_light 9?|3 banner_url_dark 9?"
        ];
    }
};
AdContent = class _AdContent extends __protoMessage3152 {
    constructor(data){
        super();
        this.title = "";
        this.sections = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AdContent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AdContent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AdContent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AdContent, a, b2);
    }
    static $() {
        return [
            "AdContent|1 tag 9?|2 title 9|3 sections #0*|4 center_title 8?",
            AdSection
        ];
    }
};
AdSection = class _AdSection extends __protoMessage3152 {
    constructor(data){
        super();
        this.iconSvg = "";
        this.title = "";
        this.description = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AdSection().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AdSection().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AdSection().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AdSection, a, b2);
    }
    static $() {
        return [
            "AdSection|1 icon_svg 9|2 title 9|3 description 9|4 is_beta 8?"
        ];
    }
};
AdButton = class _AdButton extends __protoMessage3152 {
    constructor(data){
        super();
        this.text = "";
        this.buttonType = ButtonType.UNSPECIFIED;
        this.action = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AdButton().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AdButton().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AdButton().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AdButton, a, b2);
    }
    static $() {
        return [
            "AdButton|1 text 9|2 button_type #0|3 external_url 9 action|4 command_id 9 action|5 client_action #1 action",
            ButtonType,
            ClientAction
        ];
    }
};
ClientVersionStatus = class _ClientVersionStatus extends __protoMessage3152 {
    constructor(data){
        super();
        this.updateLevel = ClientUpdateLevel.UNSPECIFIED;
        this.currentClientVersion = "";
        this.minSupportedClientVersion = "";
        this.minAllowedClientVersion = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ClientVersionStatus().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ClientVersionStatus().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ClientVersionStatus().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ClientVersionStatus, a, b2);
    }
    static $() {
        return [
            "ClientVersionStatus|1 update_level #0|2 current_client_version 9|3 min_supported_client_version 9|4 min_allowed_client_version 9|5 message 9?",
            ClientUpdateLevel
        ];
    }
};
IndexingConfig = class _IndexingConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.maxConcurrentUploads = 0;
        this.absoluteMaxNumberFiles = 0;
        this.maxFileRetries = 0;
        this.syncConcurrency = 0;
        this.autoIndexingMaxNumFiles = 0;
        this.indexingPeriodSeconds = 0;
        this.repo42AuthToken = "";
        this.copyStatusCheckPeriodSeconds = 0;
        this.copyTimeoutSeconds = 0;
        this.maxBatchBytes = 0;
        this.maxBatchNumRequests = 0;
        this.maxSyncMerkleBatchSize = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _IndexingConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _IndexingConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _IndexingConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_IndexingConfig, a, b2);
    }
    static $() {
        return [
            "IndexingConfig|1 max_concurrent_uploads 5|2 absolute_max_number_files 5|3 max_file_retries 5|4 sync_concurrency 5|5 auto_indexing_max_num_files 5|6 indexing_period_seconds 5|7 repo42_auth_token 9|8 incremental 8?|9 default_user_path_encryption_key 9?|10 default_team_path_encryption_key 9?|11 multi_root_indexing_enabled 8?|12 copy_status_check_period_seconds 1|13 copy_timeout_seconds 5|14 max_batch_bytes 5|15 max_batch_num_requests 5|16 max_sync_merkle_batch_size 5"
        ];
    }
};
GitIndexingConfig = class _GitIndexingConfig extends __protoMessage3152 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GitIndexingConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GitIndexingConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GitIndexingConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GitIndexingConfig, a, b2);
    }
    static $() {
        return [
            "GitIndexingConfig|1 enabled 8?|2 max_pr_count 5?|3 max_pr_size 5?|4 pr_embedding_context 5?|5 js_concurrency 5?|6 js_chunk_size 5?|7 cpu_concurrency 5?|8 indexing_period_seconds 5?|9 max_attempts_per_pr 5?|10 allow_index_copy_from_server 8?"
        ];
    }
};
ClientTracingConfig = class _ClientTracingConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.globalSampleRate = 0;
        this.tracesSampleRate = 0;
        this.loggerSampleRate = 0;
        this.minidumpSampleRate = 0;
        this.errorRateLimit = 0;
        this.performanceUnitRateLimit = 0;
        this.profilesSampleRate = 0;
        this.jsonStringifySampleRate = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ClientTracingConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ClientTracingConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ClientTracingConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ClientTracingConfig, a, b2);
    }
    static $() {
        return [
            "ClientTracingConfig|1 global_sample_rate 1|2 traces_sample_rate 1|3 logger_sample_rate 1|4 minidump_sample_rate 1|5 error_rate_limit 1|6 performance_unit_rate_limit 1|7 profiles_sample_rate 1|8 json_stringify_sample_rate 1"
        ];
    }
};
ChatConfig = class _ChatConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.disableUnification = false;
        this.fullContextTokenLimit = 0;
        this.disableYoloMode = false;
        this.maxRuleLength = 0;
        this.maxMcpTools = 0;
        this.warnMcpTools = 0;
        this.summarizationMessage = "";
        this.numFilesForMemoryGeneration = 0;
        this.memoryDefaultEnabled = false;
        this.numSummarizationsBeforeWarningShown = 0;
        this.cursorRulesReadFileFixEnabled = false;
        this.dontSendCtrlCBeforeCommand = false;
        this.clientStatsigPollIntervalMs = 0;
        this.disableStatsig = false;
        this.listDirV2PredefinedIgnoreGlobs = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ChatConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ChatConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ChatConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ChatConfig, a, b2);
    }
    static $() {
        return [
            "ChatConfig|1 disable_unification 8|2 full_context_token_limit 5|3 disable_yolo_mode 8|4 max_rule_length 5|5 max_mcp_tools 5|6 warn_mcp_tools 5|7 summarization_message 9|8 num_files_for_memory_generation 5|9 memory_default_enabled 8|10 num_summarizations_before_warning_shown 5|11 cursor_rules_read_file_fix_enabled 8|12 dont_send_ctrl_c_before_command 8|13 client_statsig_poll_interval_ms 5|14 disable_statsig 8|15 list_dir_v2_predefined_ignore_globs 9*"
        ];
    }
};
RemoteAuthority = class _RemoteAuthority extends __protoMessage3152 {
    constructor(data){
        super();
        this.connectionType = RemoteConnectionType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoteAuthority().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoteAuthority().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoteAuthority().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoteAuthority, a, b2);
    }
    static $() {
        return [
            "RemoteAuthority|1 connection_type #0",
            RemoteConnectionType
        ];
    }
};
ScmConnectAdContext = class _ScmConnectAdContext extends __protoMessage3152 {
    constructor(data){
        super();
        this.provider = ScmConnectAdProvider.UNSPECIFIED;
        this.remoteUrl = "";
        this.connectionState = ScmConnectAdConnectionState.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ScmConnectAdContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ScmConnectAdContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ScmConnectAdContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ScmConnectAdContext, a, b2);
    }
    static $() {
        return [
            "ScmConnectAdContext|1 provider #0|2 remote_url 9|3 connection_state #1",
            ScmConnectAdProvider,
            ScmConnectAdConnectionState
        ];
    }
};
DevEnvironment = class _DevEnvironment extends __protoMessage3152 {
    constructor(data){
        super();
        this.hasAlternativeCli = false;
        this.hasCursorAgentCli = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DevEnvironment().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DevEnvironment().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DevEnvironment().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DevEnvironment, a, b2);
    }
    static $() {
        return [
            "DevEnvironment|1 has_alternative_cli 8|2 has_cursor_agent_cli 8"
        ];
    }
};
GetServerConfigRequest = class _GetServerConfigRequest extends __protoMessage3152 {
    constructor(data){
        super();
        this.telemEnabled = false;
        this.bugBotDismissedNotificationLast10TimesUnixMs = [];
        this.bugBotViewedNotificationLast10TimesUnixMs = [];
        this.inAppAdTrigger = InAppAdTrigger.UNSPECIFIED;
        this.clientSurface = ClientSurface.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetServerConfigRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetServerConfigRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetServerConfigRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetServerConfigRequest, a, b2);
    }
    static $() {
        return [
            "GetServerConfigRequest|1 telem_enabled 8|2 bug_bot_dismissed_notification_last_10_times_unix_ms 1*|3 bug_bot_viewed_notification_last_10_times_unix_ms 1*|4 os_stats #0|5 os_properties #1|6 remote_authority #2|7 in_app_ad_trigger #3|8 dev_environment #4|9 client_surface #5|10 scm_connect_ad_context #6",
            VscodeOSStatistics,
            VscodeOSProperties,
            RemoteAuthority,
            InAppAdTrigger,
            DevEnvironment,
            ClientSurface,
            ScmConnectAdContext
        ];
    }
};
MetricsConfig = class _MetricsConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.enabledInPrivacyMode = false;
        this.enabledInNonPrivacyMode = false;
        this.excludedAgentHostModuleTagKeys = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MetricsConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MetricsConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MetricsConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MetricsConfig, a, b2);
    }
    static $() {
        return [
            "MetricsConfig|2 enabled_in_privacy_mode 8|3 enabled_in_non_privacy_mode 8|4 excluded_agent_host_module_tag_keys 9*"
        ];
    }
};
BackgroundComposerConfig = class _BackgroundComposerConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.enableBackgroundAgent = false;
        this.showBackgroundAgentInBetaSettings = false;
        this.showBackgroundAgentHistoryAction = false;
        this.useModalExperience = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BackgroundComposerConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BackgroundComposerConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BackgroundComposerConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BackgroundComposerConfig, a, b2);
    }
    static $() {
        return [
            "BackgroundComposerConfig|1 enable_background_agent 8|2 show_background_agent_in_beta_settings 8|3 window_in_window_preload_count 5?|4 window_in_window_ping_interval_ms 1?|5 show_background_agent_disclaimer 8?|6 show_background_agent_slack_ad 8?|7 show_background_agent_history_action 8|8 max_window_in_windows 5?|9 use_modal_experience 8|10 max_multi_repo_environment_repos 5?"
        ];
    }
};
AutoContextConfig = class _AutoContextConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.enabled = false;
        this.enabledFallback = false;
        this.enabledGitGraph = false;
        this.enabledSemSearch = false;
        this.enabledV2 = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AutoContextConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AutoContextConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AutoContextConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AutoContextConfig, a, b2);
    }
    static $() {
        return [
            "AutoContextConfig|1 enabled 8|2 enabled_fallback 8|3 enabled_git_graph 8|4 enabled_sem_search 8|5 enabled_v2 8"
        ];
    }
};
MemoryMonitorConfig = class _MemoryMonitorConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.enabled = false;
        this.showStatusEntry = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MemoryMonitorConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MemoryMonitorConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MemoryMonitorConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MemoryMonitorConfig, a, b2);
    }
    static $() {
        return [
            "MemoryMonitorConfig|1 enabled 8|2 show_status_entry 8|3 base_threshold_mb 5?|4 critical_offset_mb 5?|5 process_memory_interval_sec 5?"
        ];
    }
};
UpdateConfig = class _UpdateConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.releaseTrack = "";
        this.mode = UpdateConfig_UpdateMode.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateConfig, a, b2);
    }
    static $() {
        return [
            "UpdateConfig|1 release_track 9|2 mode #0|3 applied_at 5?",
            UpdateConfig_UpdateMode
        ];
    }
};
UpdateConfig_UpdateMode = enumType2(proto3, __protoPackage159, "UpdateConfig.UpdateMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ONE_TIME"
    ]
], 1);
PerformanceEventsConfig = class _PerformanceEventsConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.enabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PerformanceEventsConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PerformanceEventsConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PerformanceEventsConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PerformanceEventsConfig, a, b2);
    }
    static $() {
        return [
            "PerformanceEventsConfig|1 enabled 8|2 buffer_size 5?|3 flush_interval_ms 5?"
        ];
    }
};
InteractionConfig = class _InteractionConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.profilingEnabled = false;
        this.metricsEnabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InteractionConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InteractionConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InteractionConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InteractionConfig, a, b2);
    }
    static $() {
        return [
            "InteractionConfig|1 profiling_enabled 8|2 metrics_enabled 8|3 profiling_interval_sec 5?|4 metrics_interval_sec 5?|5 profiling_max_buffer_size 5?|6 profiling_interaction_duration_threshold_ms 5?|7 profiling_sample_interval_ms 5?|8 metrics_min_interactions_for_loaf 5?|9 metrics_min_foreground_time_ms 5?|10 metrics_combined_inp_drop_highest_count 5?|11 metrics_click_inp_drop_highest_count 5?|12 metrics_keypress_inp_drop_highest_count 5?|13 metrics_startup_threshold_sec 5?|14 analytics_summary_every_n_windows 5?|15 ext_host_lag_summary_interval_sec 5?"
        ];
    }
};
AgentTelemetryConfig = class _AgentTelemetryConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.enabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentTelemetryConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentTelemetryConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentTelemetryConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentTelemetryConfig, a, b2);
    }
    static $() {
        return [
            "AgentTelemetryConfig|1 enabled 8"
        ];
    }
};
TraceConfig = class _TraceConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.enabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _TraceConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _TraceConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _TraceConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_TraceConfig, a, b2);
    }
    static $() {
        return [
            "TraceConfig|1 enabled 8|2 buffer_size 5?|3 flush_interval_ms 5?|4 sample_rate 1?|5 internal_sample_rate 1?|6 internal_ext_host_sample_rate 1?"
        ];
    }
};
ModelMigration = class _ModelMigration extends __protoMessage3152 {
    constructor(data){
        super();
        this.id = "";
        this.modelSetting = "";
        this.targetModel = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ModelMigration().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ModelMigration().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ModelMigration().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ModelMigration, a, b2);
    }
    static $() {
        return [
            "ModelMigration|1 id 9|2 model_setting 9|3 target_model 9|4 previous_model 9?|5 migrate_mode_models 8?|6 remove_previous_model 8?|7 max_mode 8?|8 migrate_old_composers_and_current_composer 8?"
        ];
    }
};
FolderSizeLimit = class _FolderSizeLimit extends __protoMessage3152 {
    constructor(data){
        super();
        this.maxTotalBytes = 0;
        this.maxNumFiles = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FolderSizeLimit().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FolderSizeLimit().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FolderSizeLimit().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FolderSizeLimit, a, b2);
    }
    static $() {
        return [
            "FolderSizeLimit|1 max_total_bytes 5|2 max_num_files 5"
        ];
    }
};
RunTerminalServerConfig = class _RunTerminalServerConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.compositeShellCommands = [];
        this.safeShellCommands = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RunTerminalServerConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RunTerminalServerConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RunTerminalServerConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RunTerminalServerConfig, a, b2);
    }
    static $() {
        return [
            "RunTerminalServerConfig|1 composite_shell_commands 9*|2 safe_shell_commands 9*"
        ];
    }
};
AgentLayoutPolicy = class _AgentLayoutPolicy extends __protoMessage3152 {
    constructor(data){
        super();
        this.allowedActionIds = [];
        this.deniedActionIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentLayoutPolicy().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentLayoutPolicy().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentLayoutPolicy().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentLayoutPolicy, a, b2);
    }
    static $() {
        return [
            "AgentLayoutPolicy|1 allowed_action_ids 9*|2 denied_action_ids 9*"
        ];
    }
};
TerminalTipConfig = class _TerminalTipConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.message = "";
        this.enabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _TerminalTipConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _TerminalTipConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _TerminalTipConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_TerminalTipConfig, a, b2);
    }
    static $() {
        return [
            "TerminalTipConfig|1 message 9|2 enabled 8"
        ];
    }
};
OnboardingConfig = class _OnboardingConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.marketplacePluginNames = [];
        this.agenticOnboardingEnabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OnboardingConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OnboardingConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OnboardingConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OnboardingConfig, a, b2);
    }
    static $() {
        return [
            "OnboardingConfig|1 marketplace_plugin_names 9*|2 agentic_onboarding_enabled 8"
        ];
    }
};
BugbotConfig = class _BugbotConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.bugbotPlanEnabled = false;
        this.bugbotPlanType = BugbotPlanType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BugbotConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BugbotConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BugbotConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BugbotConfig, a, b2);
    }
    static $() {
        return [
            "BugbotConfig|1 bugbot_plan_enabled 8|2 bugbot_plan_type #0",
            BugbotPlanType
        ];
    }
};
CodebaseTelemetryConfig = class _CodebaseTelemetryConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.enabled = false;
        this.resetToken = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CodebaseTelemetryConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CodebaseTelemetryConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CodebaseTelemetryConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CodebaseTelemetryConfig, a, b2);
    }
    static $() {
        return [
            "CodebaseTelemetryConfig|1 enabled 8|2 reset_token 9"
        ];
    }
};
NewRepoFlowProbe = class _NewRepoFlowProbe extends __protoMessage3152 {
    constructor(data){
        super();
        this.id = "";
        this.mcpServerNameMatch = "";
        this.toolName = "";
        this.argsJson = "";
        this.interpreter = NewRepoFlowProbeInterpreter.UNSPECIFIED;
        this.interpreterParam = "";
        this.interpreterExpectedValue = "";
        this.backendMethod = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NewRepoFlowProbe().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NewRepoFlowProbe().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NewRepoFlowProbe().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NewRepoFlowProbe, a, b2);
    }
    static $() {
        return [
            "NewRepoFlowProbe|1 id 9|2 mcp_server_name_match 9|3 tool_name 9|4 args_json 9|5 interpreter #0|6 interpreter_param 9|7 interpreter_expected_value 9|8 backend_method 9",
            NewRepoFlowProbeInterpreter
        ];
    }
};
ResolveNewRepoFlowBackendProbeRequest = class _ResolveNewRepoFlowBackendProbeRequest extends __protoMessage3152 {
    constructor(data){
        super();
        this.method = "";
        this.repoName = "";
        this.repoUrl = "";
        this.previousRepoName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ResolveNewRepoFlowBackendProbeRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ResolveNewRepoFlowBackendProbeRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ResolveNewRepoFlowBackendProbeRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ResolveNewRepoFlowBackendProbeRequest, a, b2);
    }
    static $() {
        return [
            "ResolveNewRepoFlowBackendProbeRequest|1 method 9|2 repo_name 9|3 repo_url 9|4 previous_repo_name 9"
        ];
    }
};
ResolveNewRepoFlowBackendProbeResponse = class _ResolveNewRepoFlowBackendProbeResponse extends __protoMessage3152 {
    constructor(data){
        super();
        this.payloadText = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ResolveNewRepoFlowBackendProbeResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ResolveNewRepoFlowBackendProbeResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ResolveNewRepoFlowBackendProbeResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ResolveNewRepoFlowBackendProbeResponse, a, b2);
    }
    static $() {
        return [
            "ResolveNewRepoFlowBackendProbeResponse|1 payload_text 9"
        ];
    }
};
GetNewRepoFlowConfigRequest = class _GetNewRepoFlowConfigRequest extends __protoMessage3152 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetNewRepoFlowConfigRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetNewRepoFlowConfigRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetNewRepoFlowConfigRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetNewRepoFlowConfigRequest, a, b2);
    }
    static $() {
        return [
            "GetNewRepoFlowConfigRequest"
        ];
    }
};
GetNewRepoFlowConfigResponse = class _GetNewRepoFlowConfigResponse extends __protoMessage3152 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetNewRepoFlowConfigResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetNewRepoFlowConfigResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetNewRepoFlowConfigResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetNewRepoFlowConfigResponse, a, b2);
    }
    static $() {
        return [
            "GetNewRepoFlowConfigResponse|1 config #0",
            NewRepoFlowConfig
        ];
    }
};
NewRepoFlowCondition = class _NewRepoFlowCondition extends __protoMessage3152 {
    constructor(data){
        super();
        this.fact = NewRepoFlowFact.UNSPECIFIED;
        this.param = "";
        this.expectedValue = "";
        this.negate = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NewRepoFlowCondition().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NewRepoFlowCondition().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NewRepoFlowCondition().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NewRepoFlowCondition, a, b2);
    }
    static $() {
        return [
            "NewRepoFlowCondition|1 fact #0|2 param 9|3 expected_value 9|4 negate 8",
            NewRepoFlowFact
        ];
    }
};
NewRepoFlowInstallPluginAction = class _NewRepoFlowInstallPluginAction extends __protoMessage3152 {
    constructor(data){
        super();
        this.pluginName = "";
        this.authTarget = NewRepoFlowPluginAuthTarget.UNSPECIFIED;
        this.redirectMetadata = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NewRepoFlowInstallPluginAction().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NewRepoFlowInstallPluginAction().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NewRepoFlowInstallPluginAction().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NewRepoFlowInstallPluginAction, a, b2);
    }
    static $() {
        return [
            "NewRepoFlowInstallPluginAction|1 plugin_name 9|2 auth_target #0|3 redirect_metadata 9,9",
            NewRepoFlowPluginAuthTarget
        ];
    }
};
NewRepoFlowSubmitFollowupAction = class _NewRepoFlowSubmitFollowupAction extends __protoMessage3152 {
    constructor(data){
        super();
        this.slashCommand = "";
        this.promptBody = "";
        this.compactTitle = "";
        this.latchKey = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NewRepoFlowSubmitFollowupAction().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NewRepoFlowSubmitFollowupAction().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NewRepoFlowSubmitFollowupAction().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NewRepoFlowSubmitFollowupAction, a, b2);
    }
    static $() {
        return [
            "NewRepoFlowSubmitFollowupAction|1 slash_command 9|2 prompt_body 9|3 compact_title 9|4 latch_key 9"
        ];
    }
};
NewRepoFlowDismissAction = class _NewRepoFlowDismissAction extends __protoMessage3152 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NewRepoFlowDismissAction().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NewRepoFlowDismissAction().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NewRepoFlowDismissAction().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NewRepoFlowDismissAction, a, b2);
    }
    static $() {
        return [
            "NewRepoFlowDismissAction"
        ];
    }
};
NewRepoFlowMcpAuthenticateAction = class _NewRepoFlowMcpAuthenticateAction extends __protoMessage3152 {
    constructor(data){
        super();
        this.serverNameMatch = "";
        this.postAuthReturnPathTemplate = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NewRepoFlowMcpAuthenticateAction().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NewRepoFlowMcpAuthenticateAction().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NewRepoFlowMcpAuthenticateAction().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NewRepoFlowMcpAuthenticateAction, a, b2);
    }
    static $() {
        return [
            "NewRepoFlowMcpAuthenticateAction|1 server_name_match 9|2 post_auth_return_path_template 9"
        ];
    }
};
NewRepoFlowStepButton = class _NewRepoFlowStepButton extends __protoMessage3152 {
    constructor(data){
        super();
        this.label = "";
        this.buttonType = ButtonType.UNSPECIFIED;
        this.action = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NewRepoFlowStepButton().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NewRepoFlowStepButton().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NewRepoFlowStepButton().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NewRepoFlowStepButton, a, b2);
    }
    static $() {
        return [
            "NewRepoFlowStepButton|1 label 9|2 button_type #0|3 external_url 9 action|4 install_plugin #1 action|5 submit_followup #2 action|6 client_action #3 action|7 dismiss #4 action|8 mcp_authenticate #5 action",
            ButtonType,
            NewRepoFlowInstallPluginAction,
            NewRepoFlowSubmitFollowupAction,
            ClientAction,
            NewRepoFlowDismissAction,
            NewRepoFlowMcpAuthenticateAction
        ];
    }
};
NewRepoFlowStep = class _NewRepoFlowStep extends __protoMessage3152 {
    constructor(data){
        super();
        this.id = "";
        this.presentation = NewRepoFlowStepPresentation.UNSPECIFIED;
        this.title = "";
        this.bodyMarkdown = "";
        this.pillLabel = "";
        this.buttons = [];
        this.visibleWhen = [];
        this.dismissible = false;
        this.brandPluginName = "";
        this.disabledWhen = [];
        this.disabledReason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NewRepoFlowStep().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NewRepoFlowStep().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NewRepoFlowStep().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NewRepoFlowStep, a, b2);
    }
    static $() {
        return [
            "NewRepoFlowStep|1 id 9|2 presentation #0|3 title 9|4 body_markdown 9|5 pill_label 9|6 buttons #1*|7 visible_when #2*|8 dismissible 8|9 brand_plugin_name 9|10 disabled_when #2*|11 disabled_reason 9",
            NewRepoFlowStepPresentation,
            NewRepoFlowStepButton,
            NewRepoFlowCondition
        ];
    }
};
NewRepoFlowConfig = class _NewRepoFlowConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.configVersion = "";
        this.probes = [];
        this.steps = [];
        this.serverFacts = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NewRepoFlowConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NewRepoFlowConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NewRepoFlowConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NewRepoFlowConfig, a, b2);
    }
    static $() {
        return [
            "NewRepoFlowConfig|1 config_version 9|2 probes #0*|3 steps #1*|4 server_facts 9,9",
            NewRepoFlowProbe,
            NewRepoFlowStep
        ];
    }
};
GetServerConfigResponse = class _GetServerConfigResponse extends __protoMessage3152 {
    constructor(data){
        super();
        this.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers = false;
        this.configVersion = "";
        this.http2Config = Http2Config.UNSPECIFIED;
        this.modelMigrations = [];
        this.useNlbForNal = false;
        this.inferenceProviderWarnings = [];
        this.retrievalKeepAliveConfig = RetrievalKeepAliveConfig.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetServerConfigResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetServerConfigResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetServerConfigResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetServerConfigResponse, a, b2);
    }
    static $() {
        return [
            "GetServerConfigResponse|1 bug_config_response #0|2 is_dev_do_not_use_for_secret_things_because_can_be_spoofed_by_users 8|3 indexing_config #1|4 client_tracing_config #2|5 chat_config #3|6 config_version 9|7 http2_config #4|8 profiling_config #5|9 metrics_config #6|10 background_composer_config #7|11 auto_context_config #8|12 model_migrations #9*|13 memory_monitor_config #10|14 folder_size_limit #11|20 online_metrics_config #12|15 git_indexing_config #13|16 performance_events_config #14|17 current_in_app_ad #15?|18 trace_config #16|19 run_terminal_server_config #17?|21 interaction_config #18|22 agent_telemetry_config #19|23 client_version_status #20?|24 update_config #21?|25 agent_layout_policy #22?|26 use_nlb_for_nal 8|27 agent_url_config #23|28 cli_sandbox_default_enabled 8?|30 terminal_tip_config #24?|31 model_picker_nudge 9?|32 inference_provider_warnings #25*|33 onboarding_config #26?|34 bugbot_config #27?|35 codebase_telemetry_config #28?|36 retrieval_keep_alive_config #29|37 google_workspace_mcp_oauth_client #30?|38 new_repo_flow_config #31?",
            BugConfigResponse,
            IndexingConfig,
            ClientTracingConfig,
            ChatConfig,
            Http2Config,
            ProfilingConfig,
            MetricsConfig,
            BackgroundComposerConfig,
            AutoContextConfig,
            ModelMigration,
            MemoryMonitorConfig,
            FolderSizeLimit,
            OnlineMetricsConfig,
            GitIndexingConfig,
            PerformanceEventsConfig,
            InAppAd,
            TraceConfig,
            RunTerminalServerConfig,
            InteractionConfig,
            AgentTelemetryConfig,
            ClientVersionStatus,
            UpdateConfig,
            AgentLayoutPolicy,
            AgentUrlConfig,
            TerminalTipConfig,
            InferenceProviderWarning,
            OnboardingConfig,
            BugbotConfig,
            CodebaseTelemetryConfig,
            RetrievalKeepAliveConfig,
            GoogleWorkspaceMcpOAuthClient,
            NewRepoFlowConfig
        ];
    }
};
GoogleWorkspaceMcpOAuthClient = class _GoogleWorkspaceMcpOAuthClient extends __protoMessage3152 {
    constructor(data){
        super();
        this.clientId = "";
        this.clientSecret = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GoogleWorkspaceMcpOAuthClient().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GoogleWorkspaceMcpOAuthClient().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GoogleWorkspaceMcpOAuthClient().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GoogleWorkspaceMcpOAuthClient, a, b2);
    }
    static $() {
        return [
            "GoogleWorkspaceMcpOAuthClient|1 client_id 9|2 client_secret 9"
        ];
    }
};
InferenceProviderWarning = class _InferenceProviderWarning extends __protoMessage3152 {
    constructor(data){
        super();
        this.message = "";
        this.affectedModels = [];
        this.trigger = InferenceProviderWarningTrigger.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InferenceProviderWarning().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InferenceProviderWarning().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InferenceProviderWarning().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InferenceProviderWarning, a, b2);
    }
    static $() {
        return [
            "InferenceProviderWarning|1 message 9|2 affected_models 9*|3 fallback_model 9?|4 trigger #0",
            InferenceProviderWarningTrigger
        ];
    }
};
AgentUrlConfig = class _AgentUrlConfig extends __protoMessage3152 {
    constructor(data){
        super();
        this.agentUrl = "";
        this.agentnUrl = "";
        this.localLoopInferenceUrl = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentUrlConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentUrlConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentUrlConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentUrlConfig, a, b2);
    }
    static $() {
        return [
            "AgentUrlConfig|1 agent_url 9|2 agentn_url 9|3 local_loop_inference_url 9"
        ];
    }
};

}
