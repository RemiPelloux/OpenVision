"use strict";
require.r(exports), require.d(exports, {
    AdButton: ()=>G,
    AdContent: ()=>Q,
    AdHeader: ()=>$,
    AdSection: ()=>j,
    AgentLayoutPolicy: ()=>he,
    AgentTelemetryConfig: ()=>le,
    AgentUrlConfig: ()=>qe,
    AutoContextConfig: ()=>ne,
    BackgroundComposerConfig: ()=>re,
    BugbotConfig: ()=>ye,
    BugbotPlanType: ()=>M,
    ButtonType: ()=>E,
    ChatConfig: ()=>K,
    ClientSurface: ()=>x,
    ClientTracingConfig: ()=>V,
    ClientUpdateLevel: ()=>C,
    ClientVersionStatus: ()=>H,
    CodebaseTelemetryConfig: ()=>we,
    DevEnvironment: ()=>X,
    DisplayMode: ()=>I,
    FolderSizeLimit: ()=>pe,
    GetNewRepoFlowConfigRequest: ()=>Se,
    GetNewRepoFlowConfigResponse: ()=>be,
    GetServerConfigRequest: ()=>ee,
    GetServerConfigResponse: ()=>Pe,
    GitIndexingConfig: ()=>W,
    GoogleWorkspaceMcpOAuthClient: ()=>Je,
    Http2Config: ()=>P,
    InAppAd: ()=>L,
    InAppAdTrigger: ()=>T,
    IndexingConfig: ()=>z,
    InferenceProviderWarning: ()=>Me,
    InferenceProviderWarningTrigger: ()=>F,
    InteractionConfig: ()=>ce,
    MemoryMonitorConfig: ()=>se,
    MetricsConfig: ()=>te,
    ModalDisplayConfig: ()=>U,
    ModelMigration: ()=>de,
    NewRepoFlowCondition: ()=>Ee,
    NewRepoFlowConfig: ()=>Be,
    NewRepoFlowDismissAction: ()=>ke,
    NewRepoFlowFact: ()=>D,
    NewRepoFlowInstallPluginAction: ()=>Ie,
    NewRepoFlowMcpAuthenticateAction: ()=>xe,
    NewRepoFlowPluginAuthTarget: ()=>N,
    NewRepoFlowProbe: ()=>ve,
    NewRepoFlowProbeInterpreter: ()=>q,
    NewRepoFlowStep: ()=>Re,
    NewRepoFlowStepButton: ()=>Te,
    NewRepoFlowStepPresentation: ()=>O,
    NewRepoFlowSubmitFollowupAction: ()=>Ce,
    OnboardingConfig: ()=>ge,
    PerformanceEventsConfig: ()=>ae,
    RemoteAuthority: ()=>Y,
    RemoteConnectionType: ()=>k,
    ResolveNewRepoFlowBackendProbeRequest: ()=>_e,
    ResolveNewRepoFlowBackendProbeResponse: ()=>Ae,
    RetrievalKeepAliveConfig: ()=>J,
    RunTerminalServerConfig: ()=>me,
    ScmConnectAdConnectionState: ()=>B,
    ScmConnectAdContext: ()=>Z,
    ScmConnectAdProvider: ()=>R,
    TerminalTipConfig: ()=>fe,
    TraceConfig: ()=>ue,
    UpdateConfig: ()=>oe,
    UpdateConfig_UpdateMode: ()=>ie
});
var n = require("./module-36038.js"), s = require("./module-67918.js"), o = (require("./module-21934.js"), require("./module-58072.js"), require("./module-8592.js"));
o.HL;
const i = "aiserver.v1.";
class a extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
n.proto3;
class c extends a {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new c).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new c).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new c).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(c, e, t);
    }
    static $() {
        return [
            "BugConfigResponse|1 linter_strategy_v1 #0|2 bug_bot_v1 #1|3 linter_strategy_v2 #2",
            l,
            d,
            u
        ];
    }
}
class l extends a {
    constructor(e){
        super(), this.enabled = !1, this.tryTriggerOnSave = !1, this.waitBetweenTriggersMs = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new l).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new l).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new l).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(l, e, t);
    }
    static $() {
        return [
            "BugConfigResponse.LinterStrategyV1|1 enabled 8|2 try_trigger_on_save 8|3 wait_between_triggers_ms 1"
        ];
    }
}
class u extends a {
    constructor(e){
        super(), this.enabled = !1, this.waitBetweenTriggersMs = 0, this.debounceTriggersMs = 0, this.keepLinesAroundChunk = 0, this.preventTriggeringForFilesWithThisManyLines = 0, this.preventTriggeringWhenLints = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new u).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new u).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new u).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(u, e, t);
    }
    static $() {
        return [
            "BugConfigResponse.LinterStrategyV2|1 enabled 8|2 wait_between_triggers_ms 1|3 debounce_triggers_ms 1|4 keep_lines_around_chunk 5|5 prevent_triggering_for_files_with_this_many_lines 5|6 prevent_triggering_when_lints 8"
        ];
    }
}
class d extends a {
    constructor(e){
        super(), this.enabled = !1, this.isSubsidized = !1, this.backgroundCallFrequencyMs = 0, this.killSwitch = !1, this.showIntrusiveNotificationOnlyIfLastTimeWasMoreThanMsAgo = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new d).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new d).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new d).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(d, e, t);
    }
    static $() {
        return [
            "BugConfigResponse.BugBotV1|1 enabled 8|2 is_subsidized 8|3 background_call_frequency_ms 5|4 kill_switch 8|5 show_intrusive_notification_only_if_last_time_was_more_than_ms_ago 1|6 background_diff_absolute_max_tokens 5?|7 background_diff_min_min_token_threshold 5?|8 background_diff_min_max_token_threshold 5?|9 background_diff_last_commit_less_than_this_many_ms_ago 1?|15 background_unified_context_lines 5?|16 background_diff_include_uncommitted 8?|10 default_diff_context_lines 5?|11 diff_absolute_max_tokens 5?|12 custom_instructions_max_char_length 5?|13 default_fallback_iterations 5?|14 threshold_for_expensive_run_modal_cents 5?|17 cheap_model_name 9?|18 cheap_absolute_max_tokens 5?|19 expensive_absolute_max_tokens 5?"
        ];
    }
}
n.proto3;
n.proto3;
class p extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class m extends p {
    constructor(e){
        super(), this.samplingInterval = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new m).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new m).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new m).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(m, e, t);
    }
    static $() {
        return [
            "HeapProfileConfig|1 sampling_interval 5|2 include_objects_collected_by_major_gc 8?|3 include_objects_collected_by_minor_gc 8?"
        ];
    }
}
class h extends p {
    constructor(e){
        super(), this.interval = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new h).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new h).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new h).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(h, e, t);
    }
    static $() {
        return [
            "CpuProfileConfig|1 interval 5"
        ];
    }
}
class f extends p {
    constructor(e){
        super(), this.id = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new f).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new f).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new f).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(f, e, t);
    }
    static $() {
        return [
            "ProfileConfig|1 id 9|2 heap #0?|3 cpu #1?",
            m,
            h
        ];
    }
}
class g extends p {
    constructor(e){
        super(), this.id = "", this.process = "", this.configId = "", this.activityTimeout = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new g).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new g).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new g).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(g, e, t);
    }
    static $() {
        return [
            "ProfileScheduleConfig|1 id 9|2 process 9|3 config_id 9|4 schedule #0|5 activity_timeout 5",
            y
        ];
    }
}
class y extends p {
    constructor(e){
        super(), this.interval = 0, this.duration = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(y, e, t);
    }
    static $() {
        return [
            "ProfileScheduleConfig.ScheduleConfig|1 interval 5|2 duration 5"
        ];
    }
}
class w extends p {
    constructor(e){
        super(), this.enabled = !1, this.configs = [], this.schedules = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new w).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new w).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new w).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(w, e, t);
    }
    static $() {
        return [
            "ProfilingConfig|1 enabled 8|2 configs #0*|3 schedules #1*",
            f,
            g
        ];
    }
}
const v = "aiserver.v1.";
class _ extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return v;
    }
}
n.proto3;
class A extends _ {
    constructor(e){
        super(), this.enabled = !1, this.maxRequestsTracked = 0, this.maxRequestsTrackedMb = 0, this.maxRequestRetentionSeconds = 0, this.sendOriginalFileContentsForInitialSnapshot = !1, this.sendFullAddedLinesInDiffChanges = !1, this.numCommitsTracked = 0, this.timeIntervalsTrackedMinutes = [], this.tooBigFileSizeBytes = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new A).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new A).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new A).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(A, e, t);
    }
    static $() {
        return [
            "OnlineMetricsConfig|1 enabled 8|2 max_requests_tracked 5|3 max_requests_tracked_mb 5|4 max_request_retention_seconds 1|5 send_original_file_contents_for_initial_snapshot 8|6 send_full_added_lines_in_diff_changes 8|7 num_commits_tracked 5|8 time_intervals_tracked_minutes 5*|9 too_big_file_size_bytes 5"
        ];
    }
}
const S = "aiserver.v1.";
class b extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return S;
    }
}
var E = (0, o.QT)(n.proto3, S, "ButtonType", [
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
], 1), I = (0, o.QT)(n.proto3, S, "DisplayMode", [
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
], 1), C = (0, o.QT)(n.proto3, S, "ClientUpdateLevel", [
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
], 1), k = (0, o.QT)(n.proto3, S, "RemoteConnectionType", [
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
], 1), x = (0, o.QT)(n.proto3, S, "ClientSurface", [
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
], 1), T = (0, o.QT)(n.proto3, S, "InAppAdTrigger", [
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
], 1), R = (0, o.QT)(n.proto3, S, "ScmConnectAdProvider", [
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
], 1), B = (0, o.QT)(n.proto3, S, "ScmConnectAdConnectionState", [
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
], 1), P = (0, o.QT)(n.proto3, S, "Http2Config", [
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
], 1), J = (0, o.QT)(n.proto3, S, "RetrievalKeepAliveConfig", [
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
], 1), M = (0, o.QT)(n.proto3, S, "BugbotPlanType", [
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
], 1), q = (0, o.QT)(n.proto3, S, "NewRepoFlowProbeInterpreter", [
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
], 1), D = (0, o.QT)(n.proto3, S, "NewRepoFlowFact", [
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
], 1), O = (0, o.QT)(n.proto3, S, "NewRepoFlowStepPresentation", [
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
], 1), N = (0, o.QT)(n.proto3, S, "NewRepoFlowPluginAuthTarget", [
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
], 1), F = (0, o.QT)(n.proto3, S, "InferenceProviderWarningTrigger", [
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
class U extends b {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new U).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new U).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new U).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(U, e, t);
    }
    static $() {
        return [
            "ModalDisplayConfig|1 background_gradient 9?|2 description 9?|3 background_gradient_light 9?|4 background_gradient_dark 9?"
        ];
    }
}
class L extends b {
    constructor(e){
        super(), this.id = "", this.buttons = [], this.displayMode = I.UNSPECIFIED, this.targetSurfaces = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new L).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new L).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new L).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(L, e, t);
    }
    static $() {
        return [
            "InAppAd|1 id 9|2 header #0|3 content #1|4 buttons #2*|5 force_dark_close_button 8?|6 display_mode #3|7 analytics_variant 9?|8 modal_display_config #4?|9 target_surfaces #5*",
            $,
            Q,
            G,
            I,
            U,
            x
        ];
    }
}
class $ extends b {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new $).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new $).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new $).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals($, e, t);
    }
    static $() {
        return [
            "AdHeader|1 banner_url 9?|2 banner_url_light 9?|3 banner_url_dark 9?"
        ];
    }
}
class Q extends b {
    constructor(e){
        super(), this.title = "", this.sections = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Q).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Q).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Q).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Q, e, t);
    }
    static $() {
        return [
            "AdContent|1 tag 9?|2 title 9|3 sections #0*|4 center_title 8?",
            j
        ];
    }
}
class j extends b {
    constructor(e){
        super(), this.iconSvg = "", this.title = "", this.description = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new j).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new j).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new j).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(j, e, t);
    }
    static $() {
        return [
            "AdSection|1 icon_svg 9|2 title 9|3 description 9|4 is_beta 8?"
        ];
    }
}
class G extends b {
    constructor(e){
        super(), this.text = "", this.buttonType = E.UNSPECIFIED, this.action = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new G).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new G).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new G).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(G, e, t);
    }
    static $() {
        return [
            "AdButton|1 text 9|2 button_type #0|3 external_url 9 action|4 command_id 9 action|5 client_action #1 action",
            E,
            s.ClientAction
        ];
    }
}
class H extends b {
    constructor(e){
        super(), this.updateLevel = C.UNSPECIFIED, this.currentClientVersion = "", this.minSupportedClientVersion = "", this.minAllowedClientVersion = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new H).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new H).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new H).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(H, e, t);
    }
    static $() {
        return [
            "ClientVersionStatus|1 update_level #0|2 current_client_version 9|3 min_supported_client_version 9|4 min_allowed_client_version 9|5 message 9?",
            C
        ];
    }
}
class z extends b {
    constructor(e){
        super(), this.maxConcurrentUploads = 0, this.absoluteMaxNumberFiles = 0, this.maxFileRetries = 0, this.syncConcurrency = 0, this.autoIndexingMaxNumFiles = 0, this.indexingPeriodSeconds = 0, this.repo42AuthToken = "", this.copyStatusCheckPeriodSeconds = 0, this.copyTimeoutSeconds = 0, this.maxBatchBytes = 0, this.maxBatchNumRequests = 0, this.maxSyncMerkleBatchSize = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new z).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new z).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new z).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(z, e, t);
    }
    static $() {
        return [
            "IndexingConfig|1 max_concurrent_uploads 5|2 absolute_max_number_files 5|3 max_file_retries 5|4 sync_concurrency 5|5 auto_indexing_max_num_files 5|6 indexing_period_seconds 5|7 repo42_auth_token 9|8 incremental 8?|9 default_user_path_encryption_key 9?|10 default_team_path_encryption_key 9?|11 multi_root_indexing_enabled 8?|12 copy_status_check_period_seconds 1|13 copy_timeout_seconds 5|14 max_batch_bytes 5|15 max_batch_num_requests 5|16 max_sync_merkle_batch_size 5"
        ];
    }
}
class W extends b {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new W).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new W).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new W).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(W, e, t);
    }
    static $() {
        return [
            "GitIndexingConfig|1 enabled 8?|2 max_pr_count 5?|3 max_pr_size 5?|4 pr_embedding_context 5?|5 js_concurrency 5?|6 js_chunk_size 5?|7 cpu_concurrency 5?|8 indexing_period_seconds 5?|9 max_attempts_per_pr 5?|10 allow_index_copy_from_server 8?"
        ];
    }
}
class V extends b {
    constructor(e){
        super(), this.globalSampleRate = 0, this.tracesSampleRate = 0, this.loggerSampleRate = 0, this.minidumpSampleRate = 0, this.errorRateLimit = 0, this.performanceUnitRateLimit = 0, this.profilesSampleRate = 0, this.jsonStringifySampleRate = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new V).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new V).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new V).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(V, e, t);
    }
    static $() {
        return [
            "ClientTracingConfig|1 global_sample_rate 1|2 traces_sample_rate 1|3 logger_sample_rate 1|4 minidump_sample_rate 1|5 error_rate_limit 1|6 performance_unit_rate_limit 1|7 profiles_sample_rate 1|8 json_stringify_sample_rate 1"
        ];
    }
}
class K extends b {
    constructor(e){
        super(), this.disableUnification = !1, this.fullContextTokenLimit = 0, this.disableYoloMode = !1, this.maxRuleLength = 0, this.maxMcpTools = 0, this.warnMcpTools = 0, this.summarizationMessage = "", this.numFilesForMemoryGeneration = 0, this.memoryDefaultEnabled = !1, this.numSummarizationsBeforeWarningShown = 0, this.cursorRulesReadFileFixEnabled = !1, this.dontSendCtrlCBeforeCommand = !1, this.clientStatsigPollIntervalMs = 0, this.disableStatsig = !1, this.listDirV2PredefinedIgnoreGlobs = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new K).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new K).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new K).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(K, e, t);
    }
    static $() {
        return [
            "ChatConfig|1 disable_unification 8|2 full_context_token_limit 5|3 disable_yolo_mode 8|4 max_rule_length 5|5 max_mcp_tools 5|6 warn_mcp_tools 5|7 summarization_message 9|8 num_files_for_memory_generation 5|9 memory_default_enabled 8|10 num_summarizations_before_warning_shown 5|11 cursor_rules_read_file_fix_enabled 8|12 dont_send_ctrl_c_before_command 8|13 client_statsig_poll_interval_ms 5|14 disable_statsig 8|15 list_dir_v2_predefined_ignore_globs 9*"
        ];
    }
}
class Y extends b {
    constructor(e){
        super(), this.connectionType = k.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Y, e, t);
    }
    static $() {
        return [
            "RemoteAuthority|1 connection_type #0",
            k
        ];
    }
}
class Z extends b {
    constructor(e){
        super(), this.provider = R.UNSPECIFIED, this.remoteUrl = "", this.connectionState = B.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Z).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Z).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Z).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Z, e, t);
    }
    static $() {
        return [
            "ScmConnectAdContext|1 provider #0|2 remote_url 9|3 connection_state #1",
            R,
            B
        ];
    }
}
class X extends b {
    constructor(e){
        super(), this.hasAlternativeCli = !1, this.hasCursorAgentCli = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new X).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new X).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new X).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(X, e, t);
    }
    static $() {
        return [
            "DevEnvironment|1 has_alternative_cli 8|2 has_cursor_agent_cli 8"
        ];
    }
}
class ee extends b {
    constructor(e){
        super(), this.telemEnabled = !1, this.bugBotDismissedNotificationLast10TimesUnixMs = [], this.bugBotViewedNotificationLast10TimesUnixMs = [], this.inAppAdTrigger = T.UNSPECIFIED, this.clientSurface = x.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ee).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ee).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ee).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ee, e, t);
    }
    static $() {
        return [
            "GetServerConfigRequest|1 telem_enabled 8|2 bug_bot_dismissed_notification_last_10_times_unix_ms 1*|3 bug_bot_viewed_notification_last_10_times_unix_ms 1*|4 os_stats #0|5 os_properties #1|6 remote_authority #2|7 in_app_ad_trigger #3|8 dev_environment #4|9 client_surface #5|10 scm_connect_ad_context #6",
            s.VscodeOSStatistics,
            s.VscodeOSProperties,
            Y,
            T,
            X,
            x,
            Z
        ];
    }
}
class te extends b {
    constructor(e){
        super(), this.enabledInPrivacyMode = !1, this.enabledInNonPrivacyMode = !1, this.excludedAgentHostModuleTagKeys = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new te).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new te).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new te).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(te, e, t);
    }
    static $() {
        return [
            "MetricsConfig|2 enabled_in_privacy_mode 8|3 enabled_in_non_privacy_mode 8|4 excluded_agent_host_module_tag_keys 9*"
        ];
    }
}
class re extends b {
    constructor(e){
        super(), this.enableBackgroundAgent = !1, this.showBackgroundAgentInBetaSettings = !1, this.showBackgroundAgentHistoryAction = !1, this.useModalExperience = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new re).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new re).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new re).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(re, e, t);
    }
    static $() {
        return [
            "BackgroundComposerConfig|1 enable_background_agent 8|2 show_background_agent_in_beta_settings 8|3 window_in_window_preload_count 5?|4 window_in_window_ping_interval_ms 1?|5 show_background_agent_disclaimer 8?|6 show_background_agent_slack_ad 8?|7 show_background_agent_history_action 8|8 max_window_in_windows 5?|9 use_modal_experience 8|10 max_multi_repo_environment_repos 5?"
        ];
    }
}
class ne extends b {
    constructor(e){
        super(), this.enabled = !1, this.enabledFallback = !1, this.enabledGitGraph = !1, this.enabledSemSearch = !1, this.enabledV2 = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ne).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ne).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ne).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ne, e, t);
    }
    static $() {
        return [
            "AutoContextConfig|1 enabled 8|2 enabled_fallback 8|3 enabled_git_graph 8|4 enabled_sem_search 8|5 enabled_v2 8"
        ];
    }
}
class se extends b {
    constructor(e){
        super(), this.enabled = !1, this.showStatusEntry = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new se).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new se).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new se).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(se, e, t);
    }
    static $() {
        return [
            "MemoryMonitorConfig|1 enabled 8|2 show_status_entry 8|3 base_threshold_mb 5?|4 critical_offset_mb 5?|5 process_memory_interval_sec 5?"
        ];
    }
}
class oe extends b {
    constructor(e){
        super(), this.releaseTrack = "", this.mode = ie.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new oe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new oe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new oe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(oe, e, t);
    }
    static $() {
        return [
            "UpdateConfig|1 release_track 9|2 mode #0|3 applied_at 5?",
            ie
        ];
    }
}
var ie = (0, o.QT)(n.proto3, S, "UpdateConfig.UpdateMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ONE_TIME"
    ]
], 1);
class ae extends b {
    constructor(e){
        super(), this.enabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ae).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ae).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ae).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ae, e, t);
    }
    static $() {
        return [
            "PerformanceEventsConfig|1 enabled 8|2 buffer_size 5?|3 flush_interval_ms 5?"
        ];
    }
}
class ce extends b {
    constructor(e){
        super(), this.profilingEnabled = !1, this.metricsEnabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ce).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ce).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ce).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ce, e, t);
    }
    static $() {
        return [
            "InteractionConfig|1 profiling_enabled 8|2 metrics_enabled 8|3 profiling_interval_sec 5?|4 metrics_interval_sec 5?|5 profiling_max_buffer_size 5?|6 profiling_interaction_duration_threshold_ms 5?|7 profiling_sample_interval_ms 5?|8 metrics_min_interactions_for_loaf 5?|9 metrics_min_foreground_time_ms 5?|10 metrics_combined_inp_drop_highest_count 5?|11 metrics_click_inp_drop_highest_count 5?|12 metrics_keypress_inp_drop_highest_count 5?|13 metrics_startup_threshold_sec 5?|14 analytics_summary_every_n_windows 5?|15 ext_host_lag_summary_interval_sec 5?"
        ];
    }
}
class le extends b {
    constructor(e){
        super(), this.enabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new le).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new le).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new le).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(le, e, t);
    }
    static $() {
        return [
            "AgentTelemetryConfig|1 enabled 8"
        ];
    }
}
class ue extends b {
    constructor(e){
        super(), this.enabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ue).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ue).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ue).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ue, e, t);
    }
    static $() {
        return [
            "TraceConfig|1 enabled 8|2 buffer_size 5?|3 flush_interval_ms 5?|4 sample_rate 1?|5 internal_sample_rate 1?|6 internal_ext_host_sample_rate 1?"
        ];
    }
}
class de extends b {
    constructor(e){
        super(), this.id = "", this.modelSetting = "", this.targetModel = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new de).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new de).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new de).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(de, e, t);
    }
    static $() {
        return [
            "ModelMigration|1 id 9|2 model_setting 9|3 target_model 9|4 previous_model 9?|5 migrate_mode_models 8?|6 remove_previous_model 8?|7 max_mode 8?|8 migrate_old_composers_and_current_composer 8?"
        ];
    }
}
class pe extends b {
    constructor(e){
        super(), this.maxTotalBytes = 0, this.maxNumFiles = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new pe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new pe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new pe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(pe, e, t);
    }
    static $() {
        return [
            "FolderSizeLimit|1 max_total_bytes 5|2 max_num_files 5"
        ];
    }
}
class me extends b {
    constructor(e){
        super(), this.compositeShellCommands = [], this.safeShellCommands = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new me).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new me).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new me).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(me, e, t);
    }
    static $() {
        return [
            "RunTerminalServerConfig|1 composite_shell_commands 9*|2 safe_shell_commands 9*"
        ];
    }
}
class he extends b {
    constructor(e){
        super(), this.allowedActionIds = [], this.deniedActionIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new he).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new he).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new he).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(he, e, t);
    }
    static $() {
        return [
            "AgentLayoutPolicy|1 allowed_action_ids 9*|2 denied_action_ids 9*"
        ];
    }
}
class fe extends b {
    constructor(e){
        super(), this.message = "", this.enabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new fe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new fe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new fe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(fe, e, t);
    }
    static $() {
        return [
            "TerminalTipConfig|1 message 9|2 enabled 8"
        ];
    }
}
class ge extends b {
    constructor(e){
        super(), this.marketplacePluginNames = [], this.agenticOnboardingEnabled = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ge).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ge).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ge).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ge, e, t);
    }
    static $() {
        return [
            "OnboardingConfig|1 marketplace_plugin_names 9*|2 agentic_onboarding_enabled 8"
        ];
    }
}
class ye extends b {
    constructor(e){
        super(), this.bugbotPlanEnabled = !1, this.bugbotPlanType = M.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ye).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ye).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ye).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ye, e, t);
    }
    static $() {
        return [
            "BugbotConfig|1 bugbot_plan_enabled 8|2 bugbot_plan_type #0",
            M
        ];
    }
}
class we extends b {
    constructor(e){
        super(), this.enabled = !1, this.resetToken = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new we).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new we).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new we).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(we, e, t);
    }
    static $() {
        return [
            "CodebaseTelemetryConfig|1 enabled 8|2 reset_token 9"
        ];
    }
}
class ve extends b {
    constructor(e){
        super(), this.id = "", this.mcpServerNameMatch = "", this.toolName = "", this.argsJson = "", this.interpreter = q.UNSPECIFIED, this.interpreterParam = "", this.interpreterExpectedValue = "", this.backendMethod = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ve).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ve).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ve).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ve, e, t);
    }
    static $() {
        return [
            "NewRepoFlowProbe|1 id 9|2 mcp_server_name_match 9|3 tool_name 9|4 args_json 9|5 interpreter #0|6 interpreter_param 9|7 interpreter_expected_value 9|8 backend_method 9",
            q
        ];
    }
}
class _e extends b {
    constructor(e){
        super(), this.method = "", this.repoName = "", this.repoUrl = "", this.previousRepoName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _e).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _e).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _e).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_e, e, t);
    }
    static $() {
        return [
            "ResolveNewRepoFlowBackendProbeRequest|1 method 9|2 repo_name 9|3 repo_url 9|4 previous_repo_name 9"
        ];
    }
}
class Ae extends b {
    constructor(e){
        super(), this.payloadText = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ae).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ae).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ae).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ae, e, t);
    }
    static $() {
        return [
            "ResolveNewRepoFlowBackendProbeResponse|1 payload_text 9"
        ];
    }
}
class Se extends b {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Se).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Se).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Se).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Se, e, t);
    }
    static $() {
        return [
            "GetNewRepoFlowConfigRequest"
        ];
    }
}
class be extends b {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new be).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new be).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new be).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(be, e, t);
    }
    static $() {
        return [
            "GetNewRepoFlowConfigResponse|1 config #0",
            Be
        ];
    }
}
class Ee extends b {
    constructor(e){
        super(), this.fact = D.UNSPECIFIED, this.param = "", this.expectedValue = "", this.negate = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ee).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ee).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ee).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ee, e, t);
    }
    static $() {
        return [
            "NewRepoFlowCondition|1 fact #0|2 param 9|3 expected_value 9|4 negate 8",
            D
        ];
    }
}
class Ie extends b {
    constructor(e){
        super(), this.pluginName = "", this.authTarget = N.UNSPECIFIED, this.redirectMetadata = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ie).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ie).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ie).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ie, e, t);
    }
    static $() {
        return [
            "NewRepoFlowInstallPluginAction|1 plugin_name 9|2 auth_target #0|3 redirect_metadata 9,9",
            N
        ];
    }
}
class Ce extends b {
    constructor(e){
        super(), this.slashCommand = "", this.promptBody = "", this.compactTitle = "", this.latchKey = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Ce).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Ce).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Ce).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Ce, e, t);
    }
    static $() {
        return [
            "NewRepoFlowSubmitFollowupAction|1 slash_command 9|2 prompt_body 9|3 compact_title 9|4 latch_key 9"
        ];
    }
}
class ke extends b {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new ke).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new ke).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new ke).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(ke, e, t);
    }
    static $() {
        return [
            "NewRepoFlowDismissAction"
        ];
    }
}
class xe extends b {
    constructor(e){
        super(), this.serverNameMatch = "", this.postAuthReturnPathTemplate = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new xe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new xe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new xe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(xe, e, t);
    }
    static $() {
        return [
            "NewRepoFlowMcpAuthenticateAction|1 server_name_match 9|2 post_auth_return_path_template 9"
        ];
    }
}
class Te extends b {
    constructor(e){
        super(), this.label = "", this.buttonType = E.UNSPECIFIED, this.action = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Te).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Te).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Te).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Te, e, t);
    }
    static $() {
        return [
            "NewRepoFlowStepButton|1 label 9|2 button_type #0|3 external_url 9 action|4 install_plugin #1 action|5 submit_followup #2 action|6 client_action #3 action|7 dismiss #4 action|8 mcp_authenticate #5 action",
            E,
            Ie,
            Ce,
            s.ClientAction,
            ke,
            xe
        ];
    }
}
class Re extends b {
    constructor(e){
        super(), this.id = "", this.presentation = O.UNSPECIFIED, this.title = "", this.bodyMarkdown = "", this.pillLabel = "", this.buttons = [], this.visibleWhen = [], this.dismissible = !1, this.brandPluginName = "", this.disabledWhen = [], this.disabledReason = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Re).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Re).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Re).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Re, e, t);
    }
    static $() {
        return [
            "NewRepoFlowStep|1 id 9|2 presentation #0|3 title 9|4 body_markdown 9|5 pill_label 9|6 buttons #1*|7 visible_when #2*|8 dismissible 8|9 brand_plugin_name 9|10 disabled_when #2*|11 disabled_reason 9",
            O,
            Te,
            Ee
        ];
    }
}
class Be extends b {
    constructor(e){
        super(), this.configVersion = "", this.probes = [], this.steps = [], this.serverFacts = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Be).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Be).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Be).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Be, e, t);
    }
    static $() {
        return [
            "NewRepoFlowConfig|1 config_version 9|2 probes #0*|3 steps #1*|4 server_facts 9,9",
            ve,
            Re
        ];
    }
}
class Pe extends b {
    constructor(e){
        super(), this.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers = !1, this.configVersion = "", this.http2Config = P.UNSPECIFIED, this.modelMigrations = [], this.useNlbForNal = !1, this.inferenceProviderWarnings = [], this.retrievalKeepAliveConfig = J.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Pe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Pe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Pe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Pe, e, t);
    }
    static $() {
        return [
            "GetServerConfigResponse|1 bug_config_response #0|2 is_dev_do_not_use_for_secret_things_because_can_be_spoofed_by_users 8|3 indexing_config #1|4 client_tracing_config #2|5 chat_config #3|6 config_version 9|7 http2_config #4|8 profiling_config #5|9 metrics_config #6|10 background_composer_config #7|11 auto_context_config #8|12 model_migrations #9*|13 memory_monitor_config #10|14 folder_size_limit #11|20 online_metrics_config #12|15 git_indexing_config #13|16 performance_events_config #14|17 current_in_app_ad #15?|18 trace_config #16|19 run_terminal_server_config #17?|21 interaction_config #18|22 agent_telemetry_config #19|23 client_version_status #20?|24 update_config #21?|25 agent_layout_policy #22?|26 use_nlb_for_nal 8|27 agent_url_config #23|28 cli_sandbox_default_enabled 8?|30 terminal_tip_config #24?|31 model_picker_nudge 9?|32 inference_provider_warnings #25*|33 onboarding_config #26?|34 bugbot_config #27?|35 codebase_telemetry_config #28?|36 retrieval_keep_alive_config #29|37 google_workspace_mcp_oauth_client #30?|38 new_repo_flow_config #31?",
            c,
            z,
            V,
            K,
            P,
            w,
            te,
            re,
            ne,
            de,
            se,
            pe,
            A,
            W,
            ae,
            L,
            ue,
            me,
            ce,
            le,
            H,
            oe,
            he,
            qe,
            fe,
            Me,
            ge,
            ye,
            we,
            J,
            Je,
            Be
        ];
    }
}
class Je extends b {
    constructor(e){
        super(), this.clientId = "", this.clientSecret = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Je).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Je).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Je).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Je, e, t);
    }
    static $() {
        return [
            "GoogleWorkspaceMcpOAuthClient|1 client_id 9|2 client_secret 9"
        ];
    }
}
class Me extends b {
    constructor(e){
        super(), this.message = "", this.affectedModels = [], this.trigger = F.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new Me).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new Me).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new Me).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(Me, e, t);
    }
    static $() {
        return [
            "InferenceProviderWarning|1 message 9|2 affected_models 9*|3 fallback_model 9?|4 trigger #0",
            F
        ];
    }
}
class qe extends b {
    constructor(e){
        super(), this.agentUrl = "", this.agentnUrl = "", this.localLoopInferenceUrl = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new qe).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new qe).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new qe).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(qe, e, t);
    }
    static $() {
        return [
            "AgentUrlConfig|1 agent_url 9|2 agentn_url 9|3 local_loop_inference_url 9"
        ];
    }
}
