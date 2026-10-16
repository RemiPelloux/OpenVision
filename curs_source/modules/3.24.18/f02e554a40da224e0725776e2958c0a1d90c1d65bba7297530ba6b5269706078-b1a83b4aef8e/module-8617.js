"use strict";
require.r(exports), require.d(exports, {
    AdButton: ()=>H,
    AdContent: ()=>$,
    AdHeader: ()=>L,
    AdSection: ()=>G,
    AgentLayoutPolicy: ()=>pt,
    AgentTelemetryConfig: ()=>ct,
    AgentUrlConfig: ()=>Nt,
    AutoContextConfig: ()=>nt,
    BackgroundComposerConfig: ()=>rt,
    BugbotConfig: ()=>At,
    BugbotPlanType: ()=>x,
    ButtonType: ()=>E,
    ChatConfig: ()=>Y,
    ClientSurface: ()=>k,
    ClientTracingConfig: ()=>W,
    ClientUpdateLevel: ()=>C,
    ClientVersionStatus: ()=>K,
    CodebaseTelemetryConfig: ()=>_t,
    DevEnvironment: ()=>Z,
    DisplayMode: ()=>I,
    FolderSizeLimit: ()=>dt,
    GetNewRepoFlowConfigRequest: ()=>Jt,
    GetNewRepoFlowConfigResponse: ()=>Bt,
    GetServerConfigRequest: ()=>tt,
    GetServerConfigResponse: ()=>Pt,
    GitIndexingConfig: ()=>z,
    GoogleWorkspaceMcpOAuthClient: ()=>Tt,
    Http2Config: ()=>P,
    InAppAd: ()=>F,
    InAppAdTrigger: ()=>v,
    IndexingConfig: ()=>V,
    InferenceProviderWarning: ()=>xt,
    InferenceProviderWarningTrigger: ()=>M,
    InteractionConfig: ()=>ut,
    MemoryMonitorConfig: ()=>st,
    MetricsConfig: ()=>et,
    ModalDisplayConfig: ()=>O,
    ModelMigration: ()=>mt,
    NewRepoFlowCondition: ()=>Et,
    NewRepoFlowConfig: ()=>Rt,
    NewRepoFlowDismissAction: ()=>bt,
    NewRepoFlowFact: ()=>D,
    NewRepoFlowInstallPluginAction: ()=>It,
    NewRepoFlowMcpAuthenticateAction: ()=>kt,
    NewRepoFlowPluginAuthTarget: ()=>Q,
    NewRepoFlowProbe: ()=>yt,
    NewRepoFlowProbeInterpreter: ()=>N,
    NewRepoFlowStep: ()=>qt,
    NewRepoFlowStepButton: ()=>vt,
    NewRepoFlowStepPresentation: ()=>U,
    NewRepoFlowSubmitFollowupAction: ()=>Ct,
    OnboardingConfig: ()=>gt,
    PerformanceEventsConfig: ()=>at,
    RemoteAuthority: ()=>j,
    RemoteConnectionType: ()=>b,
    ResolveNewRepoFlowBackendProbeRequest: ()=>wt,
    ResolveNewRepoFlowBackendProbeResponse: ()=>St,
    RetrievalKeepAliveConfig: ()=>T,
    RunTerminalServerConfig: ()=>ft,
    ScmConnectAdConnectionState: ()=>R,
    ScmConnectAdContext: ()=>X,
    ScmConnectAdProvider: ()=>q,
    TerminalTipConfig: ()=>ht,
    TraceConfig: ()=>lt,
    UpdateConfig: ()=>it,
    UpdateConfig_UpdateMode: ()=>ot
});
var n = require("./module-6038.js"), s = require("./module-7918.js"), i = (require("./module-1934.js"), require("./module-8072.js"), require("./module-8592.js"));
i.HL;
const o = "aiserver.v1.";
class a extends i.HL {
    static get runtime() {
        return (0, i.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
n.proto3;
class u extends a {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(u, t, e);
    }
    static $() {
        return [
            "BugConfigResponse|1 linter_strategy_v1 #0|2 bug_bot_v1 #1|3 linter_strategy_v2 #2",
            c,
            m,
            l
        ];
    }
}
class c extends a {
    constructor(t){
        super(), this.enabled = !1, this.tryTriggerOnSave = !1, this.waitBetweenTriggersMs = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(c, t, e);
    }
    static $() {
        return [
            "BugConfigResponse.LinterStrategyV1|1 enabled 8|2 try_trigger_on_save 8|3 wait_between_triggers_ms 1"
        ];
    }
}
class l extends a {
    constructor(t){
        super(), this.enabled = !1, this.waitBetweenTriggersMs = 0, this.debounceTriggersMs = 0, this.keepLinesAroundChunk = 0, this.preventTriggeringForFilesWithThisManyLines = 0, this.preventTriggeringWhenLints = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(l, t, e);
    }
    static $() {
        return [
            "BugConfigResponse.LinterStrategyV2|1 enabled 8|2 wait_between_triggers_ms 1|3 debounce_triggers_ms 1|4 keep_lines_around_chunk 5|5 prevent_triggering_for_files_with_this_many_lines 5|6 prevent_triggering_when_lints 8"
        ];
    }
}
class m extends a {
    constructor(t){
        super(), this.enabled = !1, this.isSubsidized = !1, this.backgroundCallFrequencyMs = 0, this.killSwitch = !1, this.showIntrusiveNotificationOnlyIfLastTimeWasMoreThanMsAgo = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(m, t, e);
    }
    static $() {
        return [
            "BugConfigResponse.BugBotV1|1 enabled 8|2 is_subsidized 8|3 background_call_frequency_ms 5|4 kill_switch 8|5 show_intrusive_notification_only_if_last_time_was_more_than_ms_ago 1|6 background_diff_absolute_max_tokens 5?|7 background_diff_min_min_token_threshold 5?|8 background_diff_min_max_token_threshold 5?|9 background_diff_last_commit_less_than_this_many_ms_ago 1?|15 background_unified_context_lines 5?|16 background_diff_include_uncommitted 8?|10 default_diff_context_lines 5?|11 diff_absolute_max_tokens 5?|12 custom_instructions_max_char_length 5?|13 default_fallback_iterations 5?|14 threshold_for_expensive_run_modal_cents 5?|17 cheap_model_name 9?|18 cheap_absolute_max_tokens 5?|19 expensive_absolute_max_tokens 5?"
        ];
    }
}
n.proto3;
n.proto3;
class d extends i.HL {
    static get runtime() {
        return (0, i.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class f extends d {
    constructor(t){
        super(), this.samplingInterval = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(f, t, e);
    }
    static $() {
        return [
            "HeapProfileConfig|1 sampling_interval 5|2 include_objects_collected_by_major_gc 8?|3 include_objects_collected_by_minor_gc 8?"
        ];
    }
}
class p extends d {
    constructor(t){
        super(), this.interval = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(p, t, e);
    }
    static $() {
        return [
            "CpuProfileConfig|1 interval 5"
        ];
    }
}
class h extends d {
    constructor(t){
        super(), this.id = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(h, t, e);
    }
    static $() {
        return [
            "ProfileConfig|1 id 9|2 heap #0?|3 cpu #1?",
            f,
            p
        ];
    }
}
class g extends d {
    constructor(t){
        super(), this.id = "", this.process = "", this.configId = "", this.activityTimeout = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new g).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new g).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new g).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(g, t, e);
    }
    static $() {
        return [
            "ProfileScheduleConfig|1 id 9|2 process 9|3 config_id 9|4 schedule #0|5 activity_timeout 5",
            A
        ];
    }
}
class A extends d {
    constructor(t){
        super(), this.interval = 0, this.duration = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new A).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new A).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new A).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(A, t, e);
    }
    static $() {
        return [
            "ProfileScheduleConfig.ScheduleConfig|1 interval 5|2 duration 5"
        ];
    }
}
class _ extends d {
    constructor(t){
        super(), this.enabled = !1, this.configs = [], this.schedules = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_, t, e);
    }
    static $() {
        return [
            "ProfilingConfig|1 enabled 8|2 configs #0*|3 schedules #1*",
            h,
            g
        ];
    }
}
const y = "aiserver.v1.";
class w extends i.HL {
    static get runtime() {
        return (0, i.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return y;
    }
}
n.proto3;
class S extends w {
    constructor(t){
        super(), this.enabled = !1, this.maxRequestsTracked = 0, this.maxRequestsTrackedMb = 0, this.maxRequestRetentionSeconds = 0, this.sendOriginalFileContentsForInitialSnapshot = !1, this.sendFullAddedLinesInDiffChanges = !1, this.numCommitsTracked = 0, this.timeIntervalsTrackedMinutes = [], this.tooBigFileSizeBytes = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new S).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new S).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new S).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(S, t, e);
    }
    static $() {
        return [
            "OnlineMetricsConfig|1 enabled 8|2 max_requests_tracked 5|3 max_requests_tracked_mb 5|4 max_request_retention_seconds 1|5 send_original_file_contents_for_initial_snapshot 8|6 send_full_added_lines_in_diff_changes 8|7 num_commits_tracked 5|8 time_intervals_tracked_minutes 5*|9 too_big_file_size_bytes 5"
        ];
    }
}
const J = "aiserver.v1.";
class B extends i.HL {
    static get runtime() {
        return (0, i.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return J;
    }
}
var E = (0, i.QT)(n.proto3, J, "ButtonType", [
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
], 1), I = (0, i.QT)(n.proto3, J, "DisplayMode", [
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
], 1), C = (0, i.QT)(n.proto3, J, "ClientUpdateLevel", [
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
], 1), b = (0, i.QT)(n.proto3, J, "RemoteConnectionType", [
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
], 1), k = (0, i.QT)(n.proto3, J, "ClientSurface", [
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
], 1), v = (0, i.QT)(n.proto3, J, "InAppAdTrigger", [
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
], 1), q = (0, i.QT)(n.proto3, J, "ScmConnectAdProvider", [
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
], 1), R = (0, i.QT)(n.proto3, J, "ScmConnectAdConnectionState", [
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
], 1), P = (0, i.QT)(n.proto3, J, "Http2Config", [
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
], 1), T = (0, i.QT)(n.proto3, J, "RetrievalKeepAliveConfig", [
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
], 1), x = (0, i.QT)(n.proto3, J, "BugbotPlanType", [
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
], 1), N = (0, i.QT)(n.proto3, J, "NewRepoFlowProbeInterpreter", [
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
], 1), D = (0, i.QT)(n.proto3, J, "NewRepoFlowFact", [
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
], 1), U = (0, i.QT)(n.proto3, J, "NewRepoFlowStepPresentation", [
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
], 1), Q = (0, i.QT)(n.proto3, J, "NewRepoFlowPluginAuthTarget", [
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
], 1), M = (0, i.QT)(n.proto3, J, "InferenceProviderWarningTrigger", [
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
class O extends B {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new O).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new O).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new O).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(O, t, e);
    }
    static $() {
        return [
            "ModalDisplayConfig|1 background_gradient 9?|2 description 9?|3 background_gradient_light 9?|4 background_gradient_dark 9?"
        ];
    }
}
class F extends B {
    constructor(t){
        super(), this.id = "", this.buttons = [], this.displayMode = I.UNSPECIFIED, this.targetSurfaces = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new F).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new F).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new F).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(F, t, e);
    }
    static $() {
        return [
            "InAppAd|1 id 9|2 header #0|3 content #1|4 buttons #2*|5 force_dark_close_button 8?|6 display_mode #3|7 analytics_variant 9?|8 modal_display_config #4?|9 target_surfaces #5*",
            L,
            $,
            H,
            I,
            O,
            k
        ];
    }
}
class L extends B {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new L).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new L).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new L).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(L, t, e);
    }
    static $() {
        return [
            "AdHeader|1 banner_url 9?|2 banner_url_light 9?|3 banner_url_dark 9?"
        ];
    }
}
class $ extends B {
    constructor(t){
        super(), this.title = "", this.sections = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new $).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new $).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new $).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals($, t, e);
    }
    static $() {
        return [
            "AdContent|1 tag 9?|2 title 9|3 sections #0*|4 center_title 8?",
            G
        ];
    }
}
class G extends B {
    constructor(t){
        super(), this.iconSvg = "", this.title = "", this.description = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new G).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new G).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new G).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(G, t, e);
    }
    static $() {
        return [
            "AdSection|1 icon_svg 9|2 title 9|3 description 9|4 is_beta 8?"
        ];
    }
}
class H extends B {
    constructor(t){
        super(), this.text = "", this.buttonType = E.UNSPECIFIED, this.action = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new H).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new H).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new H).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(H, t, e);
    }
    static $() {
        return [
            "AdButton|1 text 9|2 button_type #0|3 external_url 9 action|4 command_id 9 action|5 client_action #1 action",
            E,
            s.ClientAction
        ];
    }
}
class K extends B {
    constructor(t){
        super(), this.updateLevel = C.UNSPECIFIED, this.currentClientVersion = "", this.minSupportedClientVersion = "", this.minAllowedClientVersion = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new K).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new K).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new K).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(K, t, e);
    }
    static $() {
        return [
            "ClientVersionStatus|1 update_level #0|2 current_client_version 9|3 min_supported_client_version 9|4 min_allowed_client_version 9|5 message 9?",
            C
        ];
    }
}
class V extends B {
    constructor(t){
        super(), this.maxConcurrentUploads = 0, this.absoluteMaxNumberFiles = 0, this.maxFileRetries = 0, this.syncConcurrency = 0, this.autoIndexingMaxNumFiles = 0, this.indexingPeriodSeconds = 0, this.repo42AuthToken = "", this.copyStatusCheckPeriodSeconds = 0, this.copyTimeoutSeconds = 0, this.maxBatchBytes = 0, this.maxBatchNumRequests = 0, this.maxSyncMerkleBatchSize = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new V).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new V).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new V).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(V, t, e);
    }
    static $() {
        return [
            "IndexingConfig|1 max_concurrent_uploads 5|2 absolute_max_number_files 5|3 max_file_retries 5|4 sync_concurrency 5|5 auto_indexing_max_num_files 5|6 indexing_period_seconds 5|7 repo42_auth_token 9|8 incremental 8?|9 default_user_path_encryption_key 9?|10 default_team_path_encryption_key 9?|11 multi_root_indexing_enabled 8?|12 copy_status_check_period_seconds 1|13 copy_timeout_seconds 5|14 max_batch_bytes 5|15 max_batch_num_requests 5|16 max_sync_merkle_batch_size 5"
        ];
    }
}
class z extends B {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(z, t, e);
    }
    static $() {
        return [
            "GitIndexingConfig|1 enabled 8?|2 max_pr_count 5?|3 max_pr_size 5?|4 pr_embedding_context 5?|5 js_concurrency 5?|6 js_chunk_size 5?|7 cpu_concurrency 5?|8 indexing_period_seconds 5?|9 max_attempts_per_pr 5?|10 allow_index_copy_from_server 8?"
        ];
    }
}
class W extends B {
    constructor(t){
        super(), this.globalSampleRate = 0, this.tracesSampleRate = 0, this.loggerSampleRate = 0, this.minidumpSampleRate = 0, this.errorRateLimit = 0, this.performanceUnitRateLimit = 0, this.profilesSampleRate = 0, this.jsonStringifySampleRate = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new W).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new W).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new W).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(W, t, e);
    }
    static $() {
        return [
            "ClientTracingConfig|1 global_sample_rate 1|2 traces_sample_rate 1|3 logger_sample_rate 1|4 minidump_sample_rate 1|5 error_rate_limit 1|6 performance_unit_rate_limit 1|7 profiles_sample_rate 1|8 json_stringify_sample_rate 1"
        ];
    }
}
class Y extends B {
    constructor(t){
        super(), this.disableUnification = !1, this.fullContextTokenLimit = 0, this.disableYoloMode = !1, this.maxRuleLength = 0, this.maxMcpTools = 0, this.warnMcpTools = 0, this.summarizationMessage = "", this.numFilesForMemoryGeneration = 0, this.memoryDefaultEnabled = !1, this.numSummarizationsBeforeWarningShown = 0, this.cursorRulesReadFileFixEnabled = !1, this.dontSendCtrlCBeforeCommand = !1, this.clientStatsigPollIntervalMs = 0, this.disableStatsig = !1, this.listDirV2PredefinedIgnoreGlobs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Y, t, e);
    }
    static $() {
        return [
            "ChatConfig|1 disable_unification 8|2 full_context_token_limit 5|3 disable_yolo_mode 8|4 max_rule_length 5|5 max_mcp_tools 5|6 warn_mcp_tools 5|7 summarization_message 9|8 num_files_for_memory_generation 5|9 memory_default_enabled 8|10 num_summarizations_before_warning_shown 5|11 cursor_rules_read_file_fix_enabled 8|12 dont_send_ctrl_c_before_command 8|13 client_statsig_poll_interval_ms 5|14 disable_statsig 8|15 list_dir_v2_predefined_ignore_globs 9*"
        ];
    }
}
class j extends B {
    constructor(t){
        super(), this.connectionType = b.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new j).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new j).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new j).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(j, t, e);
    }
    static $() {
        return [
            "RemoteAuthority|1 connection_type #0",
            b
        ];
    }
}
class X extends B {
    constructor(t){
        super(), this.provider = q.UNSPECIFIED, this.remoteUrl = "", this.connectionState = R.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new X).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new X).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new X).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(X, t, e);
    }
    static $() {
        return [
            "ScmConnectAdContext|1 provider #0|2 remote_url 9|3 connection_state #1",
            q,
            R
        ];
    }
}
class Z extends B {
    constructor(t){
        super(), this.hasAlternativeCli = !1, this.hasCursorAgentCli = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Z).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Z).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Z).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Z, t, e);
    }
    static $() {
        return [
            "DevEnvironment|1 has_alternative_cli 8|2 has_cursor_agent_cli 8"
        ];
    }
}
class tt extends B {
    constructor(t){
        super(), this.telemEnabled = !1, this.bugBotDismissedNotificationLast10TimesUnixMs = [], this.bugBotViewedNotificationLast10TimesUnixMs = [], this.inAppAdTrigger = v.UNSPECIFIED, this.clientSurface = k.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new tt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new tt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new tt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(tt, t, e);
    }
    static $() {
        return [
            "GetServerConfigRequest|1 telem_enabled 8|2 bug_bot_dismissed_notification_last_10_times_unix_ms 1*|3 bug_bot_viewed_notification_last_10_times_unix_ms 1*|4 os_stats #0|5 os_properties #1|6 remote_authority #2|7 in_app_ad_trigger #3|8 dev_environment #4|9 client_surface #5|10 scm_connect_ad_context #6",
            s.VscodeOSStatistics,
            s.VscodeOSProperties,
            j,
            v,
            Z,
            k,
            X
        ];
    }
}
class et extends B {
    constructor(t){
        super(), this.enabledInPrivacyMode = !1, this.enabledInNonPrivacyMode = !1, this.excludedAgentHostModuleTagKeys = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new et).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new et).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new et).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(et, t, e);
    }
    static $() {
        return [
            "MetricsConfig|2 enabled_in_privacy_mode 8|3 enabled_in_non_privacy_mode 8|4 excluded_agent_host_module_tag_keys 9*"
        ];
    }
}
class rt extends B {
    constructor(t){
        super(), this.enableBackgroundAgent = !1, this.showBackgroundAgentInBetaSettings = !1, this.showBackgroundAgentHistoryAction = !1, this.useModalExperience = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new rt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new rt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new rt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(rt, t, e);
    }
    static $() {
        return [
            "BackgroundComposerConfig|1 enable_background_agent 8|2 show_background_agent_in_beta_settings 8|3 window_in_window_preload_count 5?|4 window_in_window_ping_interval_ms 1?|5 show_background_agent_disclaimer 8?|6 show_background_agent_slack_ad 8?|7 show_background_agent_history_action 8|8 max_window_in_windows 5?|9 use_modal_experience 8|10 max_multi_repo_environment_repos 5?"
        ];
    }
}
class nt extends B {
    constructor(t){
        super(), this.enabled = !1, this.enabledFallback = !1, this.enabledGitGraph = !1, this.enabledSemSearch = !1, this.enabledV2 = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new nt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new nt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new nt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(nt, t, e);
    }
    static $() {
        return [
            "AutoContextConfig|1 enabled 8|2 enabled_fallback 8|3 enabled_git_graph 8|4 enabled_sem_search 8|5 enabled_v2 8"
        ];
    }
}
class st extends B {
    constructor(t){
        super(), this.enabled = !1, this.showStatusEntry = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new st).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new st).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new st).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(st, t, e);
    }
    static $() {
        return [
            "MemoryMonitorConfig|1 enabled 8|2 show_status_entry 8|3 base_threshold_mb 5?|4 critical_offset_mb 5?|5 process_memory_interval_sec 5?"
        ];
    }
}
class it extends B {
    constructor(t){
        super(), this.releaseTrack = "", this.mode = ot.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new it).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new it).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new it).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(it, t, e);
    }
    static $() {
        return [
            "UpdateConfig|1 release_track 9|2 mode #0|3 applied_at 5?",
            ot
        ];
    }
}
var ot = (0, i.QT)(n.proto3, J, "UpdateConfig.UpdateMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ONE_TIME"
    ]
], 1);
class at extends B {
    constructor(t){
        super(), this.enabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new at).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new at).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new at).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(at, t, e);
    }
    static $() {
        return [
            "PerformanceEventsConfig|1 enabled 8|2 buffer_size 5?|3 flush_interval_ms 5?"
        ];
    }
}
class ut extends B {
    constructor(t){
        super(), this.profilingEnabled = !1, this.metricsEnabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ut).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ut).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ut).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ut, t, e);
    }
    static $() {
        return [
            "InteractionConfig|1 profiling_enabled 8|2 metrics_enabled 8|3 profiling_interval_sec 5?|4 metrics_interval_sec 5?|5 profiling_max_buffer_size 5?|6 profiling_interaction_duration_threshold_ms 5?|7 profiling_sample_interval_ms 5?|8 metrics_min_interactions_for_loaf 5?|9 metrics_min_foreground_time_ms 5?|10 metrics_combined_inp_drop_highest_count 5?|11 metrics_click_inp_drop_highest_count 5?|12 metrics_keypress_inp_drop_highest_count 5?|13 metrics_startup_threshold_sec 5?|14 analytics_summary_every_n_windows 5?|15 ext_host_lag_summary_interval_sec 5?"
        ];
    }
}
class ct extends B {
    constructor(t){
        super(), this.enabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ct).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ct).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ct).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ct, t, e);
    }
    static $() {
        return [
            "AgentTelemetryConfig|1 enabled 8"
        ];
    }
}
class lt extends B {
    constructor(t){
        super(), this.enabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new lt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new lt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new lt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(lt, t, e);
    }
    static $() {
        return [
            "TraceConfig|1 enabled 8|2 buffer_size 5?|3 flush_interval_ms 5?|4 sample_rate 1?|5 internal_sample_rate 1?|6 internal_ext_host_sample_rate 1?"
        ];
    }
}
class mt extends B {
    constructor(t){
        super(), this.id = "", this.modelSetting = "", this.targetModel = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new mt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new mt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new mt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(mt, t, e);
    }
    static $() {
        return [
            "ModelMigration|1 id 9|2 model_setting 9|3 target_model 9|4 previous_model 9?|5 migrate_mode_models 8?|6 remove_previous_model 8?|7 max_mode 8?|8 migrate_old_composers_and_current_composer 8?"
        ];
    }
}
class dt extends B {
    constructor(t){
        super(), this.maxTotalBytes = 0, this.maxNumFiles = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new dt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new dt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new dt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(dt, t, e);
    }
    static $() {
        return [
            "FolderSizeLimit|1 max_total_bytes 5|2 max_num_files 5"
        ];
    }
}
class ft extends B {
    constructor(t){
        super(), this.compositeShellCommands = [], this.safeShellCommands = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ft).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ft).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ft).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ft, t, e);
    }
    static $() {
        return [
            "RunTerminalServerConfig|1 composite_shell_commands 9*|2 safe_shell_commands 9*"
        ];
    }
}
class pt extends B {
    constructor(t){
        super(), this.allowedActionIds = [], this.deniedActionIds = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new pt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new pt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new pt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(pt, t, e);
    }
    static $() {
        return [
            "AgentLayoutPolicy|1 allowed_action_ids 9*|2 denied_action_ids 9*"
        ];
    }
}
class ht extends B {
    constructor(t){
        super(), this.message = "", this.enabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new ht).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new ht).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new ht).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(ht, t, e);
    }
    static $() {
        return [
            "TerminalTipConfig|1 message 9|2 enabled 8"
        ];
    }
}
class gt extends B {
    constructor(t){
        super(), this.marketplacePluginNames = [], this.agenticOnboardingEnabled = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new gt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new gt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new gt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(gt, t, e);
    }
    static $() {
        return [
            "OnboardingConfig|1 marketplace_plugin_names 9*|2 agentic_onboarding_enabled 8"
        ];
    }
}
class At extends B {
    constructor(t){
        super(), this.bugbotPlanEnabled = !1, this.bugbotPlanType = x.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new At).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new At).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new At).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(At, t, e);
    }
    static $() {
        return [
            "BugbotConfig|1 bugbot_plan_enabled 8|2 bugbot_plan_type #0",
            x
        ];
    }
}
class _t extends B {
    constructor(t){
        super(), this.enabled = !1, this.resetToken = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _t).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _t).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _t).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_t, t, e);
    }
    static $() {
        return [
            "CodebaseTelemetryConfig|1 enabled 8|2 reset_token 9"
        ];
    }
}
class yt extends B {
    constructor(t){
        super(), this.id = "", this.mcpServerNameMatch = "", this.toolName = "", this.argsJson = "", this.interpreter = N.UNSPECIFIED, this.interpreterParam = "", this.interpreterExpectedValue = "", this.backendMethod = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new yt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new yt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new yt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(yt, t, e);
    }
    static $() {
        return [
            "NewRepoFlowProbe|1 id 9|2 mcp_server_name_match 9|3 tool_name 9|4 args_json 9|5 interpreter #0|6 interpreter_param 9|7 interpreter_expected_value 9|8 backend_method 9",
            N
        ];
    }
}
class wt extends B {
    constructor(t){
        super(), this.method = "", this.repoName = "", this.repoUrl = "", this.previousRepoName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new wt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new wt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new wt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(wt, t, e);
    }
    static $() {
        return [
            "ResolveNewRepoFlowBackendProbeRequest|1 method 9|2 repo_name 9|3 repo_url 9|4 previous_repo_name 9"
        ];
    }
}
class St extends B {
    constructor(t){
        super(), this.payloadText = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new St).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new St).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new St).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(St, t, e);
    }
    static $() {
        return [
            "ResolveNewRepoFlowBackendProbeResponse|1 payload_text 9"
        ];
    }
}
class Jt extends B {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Jt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Jt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Jt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Jt, t, e);
    }
    static $() {
        return [
            "GetNewRepoFlowConfigRequest"
        ];
    }
}
class Bt extends B {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Bt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Bt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Bt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Bt, t, e);
    }
    static $() {
        return [
            "GetNewRepoFlowConfigResponse|1 config #0",
            Rt
        ];
    }
}
class Et extends B {
    constructor(t){
        super(), this.fact = D.UNSPECIFIED, this.param = "", this.expectedValue = "", this.negate = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Et).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Et).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Et).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Et, t, e);
    }
    static $() {
        return [
            "NewRepoFlowCondition|1 fact #0|2 param 9|3 expected_value 9|4 negate 8",
            D
        ];
    }
}
class It extends B {
    constructor(t){
        super(), this.pluginName = "", this.authTarget = Q.UNSPECIFIED, this.redirectMetadata = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new It).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new It).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new It).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(It, t, e);
    }
    static $() {
        return [
            "NewRepoFlowInstallPluginAction|1 plugin_name 9|2 auth_target #0|3 redirect_metadata 9,9",
            Q
        ];
    }
}
class Ct extends B {
    constructor(t){
        super(), this.slashCommand = "", this.promptBody = "", this.compactTitle = "", this.latchKey = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Ct).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Ct).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Ct).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Ct, t, e);
    }
    static $() {
        return [
            "NewRepoFlowSubmitFollowupAction|1 slash_command 9|2 prompt_body 9|3 compact_title 9|4 latch_key 9"
        ];
    }
}
class bt extends B {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new bt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new bt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new bt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(bt, t, e);
    }
    static $() {
        return [
            "NewRepoFlowDismissAction"
        ];
    }
}
class kt extends B {
    constructor(t){
        super(), this.serverNameMatch = "", this.postAuthReturnPathTemplate = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new kt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new kt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new kt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(kt, t, e);
    }
    static $() {
        return [
            "NewRepoFlowMcpAuthenticateAction|1 server_name_match 9|2 post_auth_return_path_template 9"
        ];
    }
}
class vt extends B {
    constructor(t){
        super(), this.label = "", this.buttonType = E.UNSPECIFIED, this.action = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new vt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new vt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new vt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(vt, t, e);
    }
    static $() {
        return [
            "NewRepoFlowStepButton|1 label 9|2 button_type #0|3 external_url 9 action|4 install_plugin #1 action|5 submit_followup #2 action|6 client_action #3 action|7 dismiss #4 action|8 mcp_authenticate #5 action",
            E,
            It,
            Ct,
            s.ClientAction,
            bt,
            kt
        ];
    }
}
class qt extends B {
    constructor(t){
        super(), this.id = "", this.presentation = U.UNSPECIFIED, this.title = "", this.bodyMarkdown = "", this.pillLabel = "", this.buttons = [], this.visibleWhen = [], this.dismissible = !1, this.brandPluginName = "", this.disabledWhen = [], this.disabledReason = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new qt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new qt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new qt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(qt, t, e);
    }
    static $() {
        return [
            "NewRepoFlowStep|1 id 9|2 presentation #0|3 title 9|4 body_markdown 9|5 pill_label 9|6 buttons #1*|7 visible_when #2*|8 dismissible 8|9 brand_plugin_name 9|10 disabled_when #2*|11 disabled_reason 9",
            U,
            vt,
            Et
        ];
    }
}
class Rt extends B {
    constructor(t){
        super(), this.configVersion = "", this.probes = [], this.steps = [], this.serverFacts = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Rt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Rt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Rt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Rt, t, e);
    }
    static $() {
        return [
            "NewRepoFlowConfig|1 config_version 9|2 probes #0*|3 steps #1*|4 server_facts 9,9",
            yt,
            qt
        ];
    }
}
class Pt extends B {
    constructor(t){
        super(), this.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers = !1, this.configVersion = "", this.http2Config = P.UNSPECIFIED, this.modelMigrations = [], this.useNlbForNal = !1, this.inferenceProviderWarnings = [], this.retrievalKeepAliveConfig = T.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Pt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Pt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Pt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Pt, t, e);
    }
    static $() {
        return [
            "GetServerConfigResponse|1 bug_config_response #0|2 is_dev_do_not_use_for_secret_things_because_can_be_spoofed_by_users 8|3 indexing_config #1|4 client_tracing_config #2|5 chat_config #3|6 config_version 9|7 http2_config #4|8 profiling_config #5|9 metrics_config #6|10 background_composer_config #7|11 auto_context_config #8|12 model_migrations #9*|13 memory_monitor_config #10|14 folder_size_limit #11|20 online_metrics_config #12|15 git_indexing_config #13|16 performance_events_config #14|17 current_in_app_ad #15?|18 trace_config #16|19 run_terminal_server_config #17?|21 interaction_config #18|22 agent_telemetry_config #19|23 client_version_status #20?|24 update_config #21?|25 agent_layout_policy #22?|26 use_nlb_for_nal 8|27 agent_url_config #23|28 cli_sandbox_default_enabled 8?|30 terminal_tip_config #24?|31 model_picker_nudge 9?|32 inference_provider_warnings #25*|33 onboarding_config #26?|34 bugbot_config #27?|35 codebase_telemetry_config #28?|36 retrieval_keep_alive_config #29|37 google_workspace_mcp_oauth_client #30?|38 new_repo_flow_config #31?",
            u,
            V,
            W,
            Y,
            P,
            _,
            et,
            rt,
            nt,
            mt,
            st,
            dt,
            S,
            z,
            at,
            F,
            lt,
            ft,
            ut,
            ct,
            K,
            it,
            pt,
            Nt,
            ht,
            xt,
            gt,
            At,
            _t,
            T,
            Tt,
            Rt
        ];
    }
}
class Tt extends B {
    constructor(t){
        super(), this.clientId = "", this.clientSecret = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Tt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Tt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Tt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Tt, t, e);
    }
    static $() {
        return [
            "GoogleWorkspaceMcpOAuthClient|1 client_id 9|2 client_secret 9"
        ];
    }
}
class xt extends B {
    constructor(t){
        super(), this.message = "", this.affectedModels = [], this.trigger = M.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new xt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new xt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new xt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(xt, t, e);
    }
    static $() {
        return [
            "InferenceProviderWarning|1 message 9|2 affected_models 9*|3 fallback_model 9?|4 trigger #0",
            M
        ];
    }
}
class Nt extends B {
    constructor(t){
        super(), this.agentUrl = "", this.agentnUrl = "", this.localLoopInferenceUrl = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Nt).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Nt).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Nt).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Nt, t, e);
    }
    static $() {
        return [
            "AgentUrlConfig|1 agent_url 9|2 agentn_url 9|3 local_loop_inference_url 9"
        ];
    }
}
