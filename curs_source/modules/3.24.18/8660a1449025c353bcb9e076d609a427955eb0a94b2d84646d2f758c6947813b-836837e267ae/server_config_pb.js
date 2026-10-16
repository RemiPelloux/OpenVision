import { dLd, hLd } from "./online_metrics_pb.js";
import { HIy, rLd } from "./profiling_config_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { C8o, QNd } from "./review_pb.js";
import { E } from "./tslib.es6.js";
import { Hu, Oei, Qdd, Zdd } from "./utils_pb.js";
var e6, akr, c9t, mtt, gtt, _bt, PAe, u9t, A8o, pLd, mLd, mii, f5e, gii, lkr, ckr, gLd, fLd, vLd, _Ld, bLd, yLd, SLd, R8o, kLd, wLd, P8o, ukr, M8o, D8o, CLd, TLd, ELd, ILd, xLd, ALd, RLd, PLd, MLd, DLd, NLd, LLd, N8o, OLd, FLd, BLd, ULd, jLd, $Ld, HLd, WLd, GLd, qLd, zLd, L8o, VLd, KLd, YLd, XLd, ZLd, QLd, O8o, d9t, JLd, eOd, tOd;
export { $Ld, A8o, ALd, BLd, CLd, D8o, DLd, ELd, FLd, GLd, HLd, ILd, JLd, KLd, L8o, LLd, M8o, MLd, N8o, NLd, O8o, OLd, P8o, PAe, PLd, QLd, R8o, RLd, SLd, TLd, ULd, VLd, WLd, XLd, YLd, ZLd, _Ld, _bt, akr, bLd, c9t, ckr, d9t, e6, eOd, f5e, fLd, gLd, gii, gtt, jLd, kLd, lkr, mLd, mii, mtt, pLd, qLd, tOd, u9t, ukr, vLd, wLd, xLd, yLd, zLd };
var __wakaru_zde_initialized = false;
export function zde() {
if (__wakaru_zde_initialized) return;
__wakaru_zde_initialized = true;
"use strict";
E(), hr(), Hu(), QNd(), HIy(), hLd(), e6 = x.makeEnum("aiserver.v1.ButtonType", [
    {
        no: 0,
        name: "BUTTON_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUTTON_TYPE_LEADING",
        localName: "LEADING"
    },
    {
        no: 2,
        name: "BUTTON_TYPE_PRIMARY",
        localName: "PRIMARY"
    },
    {
        no: 3,
        name: "BUTTON_TYPE_SECONDARY",
        localName: "SECONDARY"
    }
]), akr = x.makeEnum("aiserver.v1.DisplayMode", [
    {
        no: 0,
        name: "DISPLAY_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DISPLAY_MODE_TOAST",
        localName: "TOAST"
    },
    {
        no: 2,
        name: "DISPLAY_MODE_MODAL",
        localName: "MODAL"
    }
]), c9t = x.makeEnum("aiserver.v1.ClientUpdateLevel", [
    {
        no: 0,
        name: "CLIENT_UPDATE_LEVEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLIENT_UPDATE_LEVEL_NONE",
        localName: "NONE"
    },
    {
        no: 2,
        name: "CLIENT_UPDATE_LEVEL_RECOMMENDED",
        localName: "RECOMMENDED"
    },
    {
        no: 3,
        name: "CLIENT_UPDATE_LEVEL_REQUIRED",
        localName: "REQUIRED"
    }
]), mtt = x.makeEnum("aiserver.v1.RemoteConnectionType", [
    {
        no: 0,
        name: "REMOTE_CONNECTION_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REMOTE_CONNECTION_TYPE_LOCAL",
        localName: "LOCAL"
    },
    {
        no: 2,
        name: "REMOTE_CONNECTION_TYPE_WSL",
        localName: "WSL"
    },
    {
        no: 3,
        name: "REMOTE_CONNECTION_TYPE_SSH",
        localName: "SSH"
    },
    {
        no: 4,
        name: "REMOTE_CONNECTION_TYPE_DEVCONTAINER",
        localName: "DEVCONTAINER"
    },
    {
        no: 5,
        name: "REMOTE_CONNECTION_TYPE_DEVCONTAINER_SSH",
        localName: "DEVCONTAINER_SSH"
    },
    {
        no: 6,
        name: "REMOTE_CONNECTION_TYPE_DEVCONTAINER_WSL",
        localName: "DEVCONTAINER_WSL"
    }
]), gtt = x.makeEnum("aiserver.v1.ClientSurface", [
    {
        no: 0,
        name: "CLIENT_SURFACE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLIENT_SURFACE_EDITOR",
        localName: "EDITOR"
    },
    {
        no: 2,
        name: "CLIENT_SURFACE_GLASS",
        localName: "GLASS"
    }
]), _bt = x.makeEnum("aiserver.v1.InAppAdTrigger", [
    {
        no: 0,
        name: "IN_APP_AD_TRIGGER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "IN_APP_AD_TRIGGER_MOUNT",
        localName: "MOUNT"
    },
    {
        no: 2,
        name: "IN_APP_AD_TRIGGER_FIND_ISSUES",
        localName: "FIND_ISSUES"
    },
    {
        no: 3,
        name: "IN_APP_AD_TRIGGER_GIT_PUSH",
        localName: "GIT_PUSH"
    },
    {
        no: 4,
        name: "IN_APP_AD_TRIGGER_COMMIT",
        localName: "COMMIT"
    },
    {
        no: 5,
        name: "IN_APP_AD_TRIGGER_IOS_DOWNLOAD_MENU",
        localName: "IOS_DOWNLOAD_MENU"
    }
]), PAe = x.makeEnum("aiserver.v1.ScmConnectAdProvider", [
    {
        no: 0,
        name: "SCM_CONNECT_AD_PROVIDER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SCM_CONNECT_AD_PROVIDER_GITHUB",
        localName: "GITHUB"
    },
    {
        no: 2,
        name: "SCM_CONNECT_AD_PROVIDER_GITLAB",
        localName: "GITLAB"
    }
]), u9t = x.makeEnum("aiserver.v1.ScmConnectAdConnectionState", [
    {
        no: 0,
        name: "SCM_CONNECT_AD_CONNECTION_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SCM_CONNECT_AD_CONNECTION_STATE_UNKNOWN",
        localName: "UNKNOWN"
    },
    {
        no: 2,
        name: "SCM_CONNECT_AD_CONNECTION_STATE_NOT_CONNECTED",
        localName: "NOT_CONNECTED"
    },
    {
        no: 3,
        name: "SCM_CONNECT_AD_CONNECTION_STATE_HAS_ACCESS",
        localName: "HAS_ACCESS"
    }
]), A8o = x.makeEnum("aiserver.v1.Http2Config", [
    {
        no: 0,
        name: "HTTP2_CONFIG_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "HTTP2_CONFIG_FORCE_ALL_DISABLED",
        localName: "FORCE_ALL_DISABLED"
    },
    {
        no: 2,
        name: "HTTP2_CONFIG_FORCE_ALL_ENABLED",
        localName: "FORCE_ALL_ENABLED"
    },
    {
        no: 3,
        name: "HTTP2_CONFIG_FORCE_BIDI_DISABLED",
        localName: "FORCE_BIDI_DISABLED"
    },
    {
        no: 4,
        name: "HTTP2_CONFIG_FORCE_BIDI_ENABLED",
        localName: "FORCE_BIDI_ENABLED"
    }
]), pLd = x.makeEnum("aiserver.v1.RetrievalKeepAliveConfig", [
    {
        no: 0,
        name: "RETRIEVAL_KEEP_ALIVE_CONFIG_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RETRIEVAL_KEEP_ALIVE_CONFIG_FORCE_DISABLED",
        localName: "FORCE_DISABLED"
    },
    {
        no: 2,
        name: "RETRIEVAL_KEEP_ALIVE_CONFIG_FORCE_ENABLED",
        localName: "FORCE_ENABLED"
    }
]), mLd = x.makeEnum("aiserver.v1.BugbotPlanType", [
    {
        no: 0,
        name: "BUGBOT_PLAN_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUGBOT_PLAN_TYPE_TEAM",
        localName: "TEAM"
    },
    {
        no: 2,
        name: "BUGBOT_PLAN_TYPE_USER",
        localName: "USER"
    }
]), mii = x.makeEnum("aiserver.v1.NewRepoFlowProbeInterpreter", [
    {
        no: 0,
        name: "NEW_REPO_FLOW_PROBE_INTERPRETER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "NEW_REPO_FLOW_PROBE_INTERPRETER_VERCEL_PROJECT_LINK_MATCH",
        localName: "VERCEL_PROJECT_LINK_MATCH"
    },
    {
        no: 2,
        name: "NEW_REPO_FLOW_PROBE_INTERPRETER_JSON_PATH_EQUALS",
        localName: "JSON_PATH_EQUALS"
    },
    {
        no: 3,
        name: "NEW_REPO_FLOW_PROBE_INTERPRETER_BOOLEAN_FIELD",
        localName: "BOOLEAN_FIELD"
    }
]), f5e = x.makeEnum("aiserver.v1.NewRepoFlowFact", [
    {
        no: 0,
        name: "NEW_REPO_FLOW_FACT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "NEW_REPO_FLOW_FACT_STARTED_AS_NEW_PROJECT",
        localName: "STARTED_AS_NEW_PROJECT"
    },
    {
        no: 2,
        name: "NEW_REPO_FLOW_FACT_REPO_IS_STANDARD_ORIGIN",
        localName: "REPO_IS_STANDARD_ORIGIN"
    },
    {
        no: 3,
        name: "NEW_REPO_FLOW_FACT_IS_SUBAGENT_CONVERSATION",
        localName: "IS_SUBAGENT_CONVERSATION"
    },
    {
        no: 4,
        name: "NEW_REPO_FLOW_FACT_PLUGIN_INSTALLED",
        localName: "PLUGIN_INSTALLED"
    },
    {
        no: 5,
        name: "NEW_REPO_FLOW_FACT_PROBE_RESULT",
        localName: "PROBE_RESULT"
    },
    {
        no: 6,
        name: "NEW_REPO_FLOW_FACT_STEP_LATCHED",
        localName: "STEP_LATCHED"
    },
    {
        no: 7,
        name: "NEW_REPO_FLOW_FACT_SERVER_FACT",
        localName: "SERVER_FACT"
    },
    {
        no: 8,
        name: "NEW_REPO_FLOW_FACT_PROBE_LINKED_WITH_LATCH_FALLBACK",
        localName: "PROBE_LINKED_WITH_LATCH_FALLBACK"
    },
    {
        no: 9,
        name: "NEW_REPO_FLOW_FACT_MCP_NEEDS_AUTH",
        localName: "MCP_NEEDS_AUTH"
    }
]), gii = x.makeEnum("aiserver.v1.NewRepoFlowStepPresentation", [
    {
        no: 0,
        name: "NEW_REPO_FLOW_STEP_PRESENTATION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "NEW_REPO_FLOW_STEP_PRESENTATION_PILL",
        localName: "PILL"
    },
    {
        no: 2,
        name: "NEW_REPO_FLOW_STEP_PRESENTATION_PLUGIN_NUDGE",
        localName: "PLUGIN_NUDGE"
    },
    {
        no: 3,
        name: "NEW_REPO_FLOW_STEP_PRESENTATION_BLOCKING_TRAY",
        localName: "BLOCKING_TRAY"
    }
]), lkr = x.makeEnum("aiserver.v1.NewRepoFlowPluginAuthTarget", [
    {
        no: 0,
        name: "NEW_REPO_FLOW_PLUGIN_AUTH_TARGET_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "NEW_REPO_FLOW_PLUGIN_AUTH_TARGET_CLOUD",
        localName: "CLOUD"
    },
    {
        no: 2,
        name: "NEW_REPO_FLOW_PLUGIN_AUTH_TARGET_LOCAL",
        localName: "LOCAL"
    }
]), ckr = x.makeEnum("aiserver.v1.InferenceProviderWarningTrigger", [
    {
        no: 0,
        name: "INFERENCE_PROVIDER_WARNING_TRIGGER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INFERENCE_PROVIDER_WARNING_TRIGGER_ON_SELECT",
        localName: "ON_SELECT"
    },
    {
        no: 2,
        name: "INFERENCE_PROVIDER_WARNING_TRIGGER_ON_ERROR",
        localName: "ON_ERROR"
    }
]), gLd = x.makeMessageType("aiserver.v1.ModalDisplayConfig", ()=>[
        {
            no: 1,
            name: "background_gradient",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "background_gradient_light",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "background_gradient_dark",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), fLd = x.makeMessageType("aiserver.v1.InAppAd", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "header",
            kind: "message",
            T: vLd
        },
        {
            no: 3,
            name: "content",
            kind: "message",
            T: _Ld
        },
        {
            no: 4,
            name: "buttons",
            kind: "message",
            T: yLd,
            repeated: !0
        },
        {
            no: 5,
            name: "force_dark_close_button",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "display_mode",
            kind: "enum",
            T: x.getEnumType(akr)
        },
        {
            no: 7,
            name: "analytics_variant",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "modal_display_config",
            kind: "message",
            T: gLd,
            opt: !0
        },
        {
            no: 9,
            name: "target_surfaces",
            kind: "enum",
            T: x.getEnumType(gtt),
            repeated: !0
        }
    ]), vLd = x.makeMessageType("aiserver.v1.AdHeader", ()=>[
        {
            no: 1,
            name: "banner_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "banner_url_light",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "banner_url_dark",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), _Ld = x.makeMessageType("aiserver.v1.AdContent", ()=>[
        {
            no: 1,
            name: "tag",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "sections",
            kind: "message",
            T: bLd,
            repeated: !0
        },
        {
            no: 4,
            name: "center_title",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), bLd = x.makeMessageType("aiserver.v1.AdSection", ()=>[
        {
            no: 1,
            name: "icon_svg",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "is_beta",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), yLd = x.makeMessageType("aiserver.v1.AdButton", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "button_type",
            kind: "enum",
            T: x.getEnumType(e6)
        },
        {
            no: 3,
            name: "external_url",
            kind: "scalar",
            T: 9,
            oneof: "action"
        },
        {
            no: 4,
            name: "command_id",
            kind: "scalar",
            T: 9,
            oneof: "action"
        },
        {
            no: 5,
            name: "client_action",
            kind: "message",
            T: Oei,
            oneof: "action"
        }
    ]), SLd = x.makeMessageType("aiserver.v1.ClientVersionStatus", ()=>[
        {
            no: 1,
            name: "update_level",
            kind: "enum",
            T: x.getEnumType(c9t)
        },
        {
            no: 2,
            name: "current_client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "min_supported_client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "min_allowed_client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), R8o = x.makeMessageType("aiserver.v1.IndexingConfig", ()=>[
        {
            no: 1,
            name: "max_concurrent_uploads",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "absolute_max_number_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "max_file_retries",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "sync_concurrency",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "auto_indexing_max_num_files",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "indexing_period_seconds",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "repo42_auth_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "incremental",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "default_user_path_encryption_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "default_team_path_encryption_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "multi_root_indexing_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "copy_status_check_period_seconds",
            kind: "scalar",
            T: 1
        },
        {
            no: 13,
            name: "copy_timeout_seconds",
            kind: "scalar",
            T: 5
        },
        {
            no: 14,
            name: "max_batch_bytes",
            kind: "scalar",
            T: 5
        },
        {
            no: 15,
            name: "max_batch_num_requests",
            kind: "scalar",
            T: 5
        },
        {
            no: 16,
            name: "max_sync_merkle_batch_size",
            kind: "scalar",
            T: 5
        }
    ]), kLd = x.makeMessageType("aiserver.v1.GitIndexingConfig", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "max_pr_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "max_pr_size",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "pr_embedding_context",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "js_concurrency",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "js_chunk_size",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "cpu_concurrency",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "indexing_period_seconds",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "max_attempts_per_pr",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "allow_index_copy_from_server",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), wLd = x.makeMessageType("aiserver.v1.ClientTracingConfig", ()=>[
        {
            no: 1,
            name: "global_sample_rate",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "traces_sample_rate",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "logger_sample_rate",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "minidump_sample_rate",
            kind: "scalar",
            T: 1
        },
        {
            no: 5,
            name: "error_rate_limit",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "performance_unit_rate_limit",
            kind: "scalar",
            T: 1
        },
        {
            no: 7,
            name: "profiles_sample_rate",
            kind: "scalar",
            T: 1
        },
        {
            no: 8,
            name: "json_stringify_sample_rate",
            kind: "scalar",
            T: 1
        }
    ]), P8o = x.makeMessageType("aiserver.v1.ChatConfig", ()=>[
        {
            no: 1,
            name: "disable_unification",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "full_context_token_limit",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "disable_yolo_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "max_rule_length",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "max_mcp_tools",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "warn_mcp_tools",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "summarization_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "num_files_for_memory_generation",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "memory_default_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "num_summarizations_before_warning_shown",
            kind: "scalar",
            T: 5
        },
        {
            no: 11,
            name: "cursor_rules_read_file_fix_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "dont_send_ctrl_c_before_command",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "client_statsig_poll_interval_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 14,
            name: "disable_statsig",
            kind: "scalar",
            T: 8
        },
        {
            no: 15,
            name: "list_dir_v2_predefined_ignore_globs",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), ukr = x.makeMessageType("aiserver.v1.RemoteAuthority", ()=>[
        {
            no: 1,
            name: "connection_type",
            kind: "enum",
            T: x.getEnumType(mtt)
        }
    ]), M8o = x.makeMessageType("aiserver.v1.ScmConnectAdContext", ()=>[
        {
            no: 1,
            name: "provider",
            kind: "enum",
            T: x.getEnumType(PAe)
        },
        {
            no: 2,
            name: "remote_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "connection_state",
            kind: "enum",
            T: x.getEnumType(u9t)
        }
    ]), D8o = x.makeMessageType("aiserver.v1.DevEnvironment", ()=>[
        {
            no: 1,
            name: "has_alternative_cli",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "has_cursor_agent_cli",
            kind: "scalar",
            T: 8
        }
    ]), CLd = x.makeMessageType("aiserver.v1.GetServerConfigRequest", ()=>[
        {
            no: 1,
            name: "telem_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "bug_bot_dismissed_notification_last_10_times_unix_ms",
            kind: "scalar",
            T: 1,
            repeated: !0
        },
        {
            no: 3,
            name: "bug_bot_viewed_notification_last_10_times_unix_ms",
            kind: "scalar",
            T: 1,
            repeated: !0
        },
        {
            no: 4,
            name: "os_stats",
            kind: "message",
            T: Zdd
        },
        {
            no: 5,
            name: "os_properties",
            kind: "message",
            T: Qdd
        },
        {
            no: 6,
            name: "remote_authority",
            kind: "message",
            T: ukr
        },
        {
            no: 7,
            name: "in_app_ad_trigger",
            kind: "enum",
            T: x.getEnumType(_bt)
        },
        {
            no: 8,
            name: "dev_environment",
            kind: "message",
            T: D8o
        },
        {
            no: 9,
            name: "client_surface",
            kind: "enum",
            T: x.getEnumType(gtt)
        },
        {
            no: 10,
            name: "scm_connect_ad_context",
            kind: "message",
            T: M8o
        }
    ]), TLd = x.makeMessageType("aiserver.v1.MetricsConfig", ()=>[
        {
            no: 2,
            name: "enabled_in_privacy_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "enabled_in_non_privacy_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "excluded_agent_host_module_tag_keys",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), ELd = x.makeMessageType("aiserver.v1.BackgroundComposerConfig", ()=>[
        {
            no: 1,
            name: "enable_background_agent",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "show_background_agent_in_beta_settings",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "window_in_window_preload_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "window_in_window_ping_interval_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 5,
            name: "show_background_agent_disclaimer",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "show_background_agent_slack_ad",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "show_background_agent_history_action",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "max_window_in_windows",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "use_modal_experience",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "max_multi_repo_environment_repos",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), ILd = x.makeMessageType("aiserver.v1.AutoContextConfig", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "enabled_fallback",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "enabled_git_graph",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "enabled_sem_search",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "enabled_v2",
            kind: "scalar",
            T: 8
        }
    ]), xLd = x.makeMessageType("aiserver.v1.MemoryMonitorConfig", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "show_status_entry",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "base_threshold_mb",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "critical_offset_mb",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "process_memory_interval_sec",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), ALd = x.makeMessageType("aiserver.v1.UpdateConfig", ()=>[
        {
            no: 1,
            name: "release_track",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: x.getEnumType(RLd)
        },
        {
            no: 3,
            name: "applied_at",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), RLd = x.makeEnum("aiserver.v1.UpdateConfig.UpdateMode", [
    {
        no: 0,
        name: "UPDATE_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "UPDATE_MODE_ONE_TIME",
        localName: "ONE_TIME"
    }
]), PLd = x.makeMessageType("aiserver.v1.PerformanceEventsConfig", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "buffer_size",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "flush_interval_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), MLd = x.makeMessageType("aiserver.v1.InteractionConfig", ()=>[
        {
            no: 1,
            name: "profiling_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "metrics_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "profiling_interval_sec",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "metrics_interval_sec",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "profiling_max_buffer_size",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "profiling_interaction_duration_threshold_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "profiling_sample_interval_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 8,
            name: "metrics_min_interactions_for_loaf",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "metrics_min_foreground_time_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "metrics_combined_inp_drop_highest_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 11,
            name: "metrics_click_inp_drop_highest_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 12,
            name: "metrics_keypress_inp_drop_highest_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 13,
            name: "metrics_startup_threshold_sec",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 14,
            name: "analytics_summary_every_n_windows",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 15,
            name: "ext_host_lag_summary_interval_sec",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), DLd = x.makeMessageType("aiserver.v1.AgentTelemetryConfig", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]), NLd = x.makeMessageType("aiserver.v1.TraceConfig", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "buffer_size",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "flush_interval_ms",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "sample_rate",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 5,
            name: "internal_sample_rate",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 6,
            name: "internal_ext_host_sample_rate",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), LLd = x.makeMessageType("aiserver.v1.ModelMigration", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_setting",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "target_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "previous_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "migrate_mode_models",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "remove_previous_model",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "migrate_old_composers_and_current_composer",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), N8o = x.makeMessageType("aiserver.v1.FolderSizeLimit", ()=>[
        {
            no: 1,
            name: "max_total_bytes",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "max_num_files",
            kind: "scalar",
            T: 5
        }
    ]), OLd = x.makeMessageType("aiserver.v1.RunTerminalServerConfig", ()=>[
        {
            no: 1,
            name: "composite_shell_commands",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "safe_shell_commands",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), FLd = x.makeMessageType("aiserver.v1.AgentLayoutPolicy", ()=>[
        {
            no: 1,
            name: "allowed_action_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "denied_action_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), BLd = x.makeMessageType("aiserver.v1.TerminalTipConfig", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "enabled",
            kind: "scalar",
            T: 8
        }
    ]), ULd = x.makeMessageType("aiserver.v1.OnboardingConfig", ()=>[
        {
            no: 1,
            name: "marketplace_plugin_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "agentic_onboarding_enabled",
            kind: "scalar",
            T: 8
        }
    ]), jLd = x.makeMessageType("aiserver.v1.BugbotConfig", ()=>[
        {
            no: 1,
            name: "bugbot_plan_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "bugbot_plan_type",
            kind: "enum",
            T: x.getEnumType(mLd)
        }
    ]), $Ld = x.makeMessageType("aiserver.v1.CodebaseTelemetryConfig", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "reset_token",
            kind: "scalar",
            T: 9
        }
    ]), HLd = x.makeMessageType("aiserver.v1.NewRepoFlowProbe", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mcp_server_name_match",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "args_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "interpreter",
            kind: "enum",
            T: x.getEnumType(mii)
        },
        {
            no: 6,
            name: "interpreter_param",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "interpreter_expected_value",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "backend_method",
            kind: "scalar",
            T: 9
        }
    ]), WLd = x.makeMessageType("aiserver.v1.ResolveNewRepoFlowBackendProbeRequest", ()=>[
        {
            no: 1,
            name: "method",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "previous_repo_name",
            kind: "scalar",
            T: 9
        }
    ]), GLd = x.makeMessageType("aiserver.v1.ResolveNewRepoFlowBackendProbeResponse", ()=>[
        {
            no: 1,
            name: "payload_text",
            kind: "scalar",
            T: 9
        }
    ]), qLd = x.makeMessageType("aiserver.v1.GetNewRepoFlowConfigRequest", []), zLd = x.makeMessageType("aiserver.v1.GetNewRepoFlowConfigResponse", ()=>[
        {
            no: 1,
            name: "config",
            kind: "message",
            T: O8o
        }
    ]), L8o = x.makeMessageType("aiserver.v1.NewRepoFlowCondition", ()=>[
        {
            no: 1,
            name: "fact",
            kind: "enum",
            T: x.getEnumType(f5e)
        },
        {
            no: 2,
            name: "param",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expected_value",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "negate",
            kind: "scalar",
            T: 8
        }
    ]), VLd = x.makeMessageType("aiserver.v1.NewRepoFlowInstallPluginAction", ()=>[
        {
            no: 1,
            name: "plugin_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "auth_target",
            kind: "enum",
            T: x.getEnumType(lkr)
        },
        {
            no: 3,
            name: "redirect_metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), KLd = x.makeMessageType("aiserver.v1.NewRepoFlowSubmitFollowupAction", ()=>[
        {
            no: 1,
            name: "slash_command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt_body",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "compact_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "latch_key",
            kind: "scalar",
            T: 9
        }
    ]), YLd = x.makeMessageType("aiserver.v1.NewRepoFlowDismissAction", []), XLd = x.makeMessageType("aiserver.v1.NewRepoFlowMcpAuthenticateAction", ()=>[
        {
            no: 1,
            name: "server_name_match",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "post_auth_return_path_template",
            kind: "scalar",
            T: 9
        }
    ]), ZLd = x.makeMessageType("aiserver.v1.NewRepoFlowStepButton", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "button_type",
            kind: "enum",
            T: x.getEnumType(e6)
        },
        {
            no: 3,
            name: "external_url",
            kind: "scalar",
            T: 9,
            oneof: "action"
        },
        {
            no: 4,
            name: "install_plugin",
            kind: "message",
            T: VLd,
            oneof: "action"
        },
        {
            no: 5,
            name: "submit_followup",
            kind: "message",
            T: KLd,
            oneof: "action"
        },
        {
            no: 6,
            name: "client_action",
            kind: "message",
            T: Oei,
            oneof: "action"
        },
        {
            no: 7,
            name: "dismiss",
            kind: "message",
            T: YLd,
            oneof: "action"
        },
        {
            no: 8,
            name: "mcp_authenticate",
            kind: "message",
            T: XLd,
            oneof: "action"
        }
    ]), QLd = x.makeMessageType("aiserver.v1.NewRepoFlowStep", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "presentation",
            kind: "enum",
            T: x.getEnumType(gii)
        },
        {
            no: 3,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "body_markdown",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "pill_label",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "buttons",
            kind: "message",
            T: ZLd,
            repeated: !0
        },
        {
            no: 7,
            name: "visible_when",
            kind: "message",
            T: L8o,
            repeated: !0
        },
        {
            no: 8,
            name: "dismissible",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "brand_plugin_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "disabled_when",
            kind: "message",
            T: L8o,
            repeated: !0
        },
        {
            no: 11,
            name: "disabled_reason",
            kind: "scalar",
            T: 9
        }
    ]), O8o = x.makeMessageType("aiserver.v1.NewRepoFlowConfig", ()=>[
        {
            no: 1,
            name: "config_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "probes",
            kind: "message",
            T: HLd,
            repeated: !0
        },
        {
            no: 3,
            name: "steps",
            kind: "message",
            T: QLd,
            repeated: !0
        },
        {
            no: 4,
            name: "server_facts",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), d9t = x.makeMessageType("aiserver.v1.GetServerConfigResponse", ()=>[
        {
            no: 1,
            name: "bug_config_response",
            kind: "message",
            T: C8o
        },
        {
            no: 2,
            name: "is_dev_do_not_use_for_secret_things_because_can_be_spoofed_by_users",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "indexing_config",
            kind: "message",
            T: R8o
        },
        {
            no: 4,
            name: "client_tracing_config",
            kind: "message",
            T: wLd
        },
        {
            no: 5,
            name: "chat_config",
            kind: "message",
            T: P8o
        },
        {
            no: 6,
            name: "config_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "http2_config",
            kind: "enum",
            T: x.getEnumType(A8o)
        },
        {
            no: 8,
            name: "profiling_config",
            kind: "message",
            T: rLd
        },
        {
            no: 9,
            name: "metrics_config",
            kind: "message",
            T: TLd
        },
        {
            no: 10,
            name: "background_composer_config",
            kind: "message",
            T: ELd
        },
        {
            no: 11,
            name: "auto_context_config",
            kind: "message",
            T: ILd
        },
        {
            no: 12,
            name: "model_migrations",
            kind: "message",
            T: LLd,
            repeated: !0
        },
        {
            no: 13,
            name: "memory_monitor_config",
            kind: "message",
            T: xLd
        },
        {
            no: 14,
            name: "folder_size_limit",
            kind: "message",
            T: N8o
        },
        {
            no: 20,
            name: "online_metrics_config",
            kind: "message",
            T: dLd
        },
        {
            no: 15,
            name: "git_indexing_config",
            kind: "message",
            T: kLd
        },
        {
            no: 16,
            name: "performance_events_config",
            kind: "message",
            T: PLd
        },
        {
            no: 17,
            name: "current_in_app_ad",
            kind: "message",
            T: fLd,
            opt: !0
        },
        {
            no: 18,
            name: "trace_config",
            kind: "message",
            T: NLd
        },
        {
            no: 19,
            name: "run_terminal_server_config",
            kind: "message",
            T: OLd,
            opt: !0
        },
        {
            no: 21,
            name: "interaction_config",
            kind: "message",
            T: MLd
        },
        {
            no: 22,
            name: "agent_telemetry_config",
            kind: "message",
            T: DLd
        },
        {
            no: 23,
            name: "client_version_status",
            kind: "message",
            T: SLd,
            opt: !0
        },
        {
            no: 24,
            name: "update_config",
            kind: "message",
            T: ALd,
            opt: !0
        },
        {
            no: 25,
            name: "agent_layout_policy",
            kind: "message",
            T: FLd,
            opt: !0
        },
        {
            no: 26,
            name: "use_nlb_for_nal",
            kind: "scalar",
            T: 8
        },
        {
            no: 27,
            name: "agent_url_config",
            kind: "message",
            T: tOd
        },
        {
            no: 28,
            name: "cli_sandbox_default_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 30,
            name: "terminal_tip_config",
            kind: "message",
            T: BLd,
            opt: !0
        },
        {
            no: 31,
            name: "model_picker_nudge",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 32,
            name: "inference_provider_warnings",
            kind: "message",
            T: eOd,
            repeated: !0
        },
        {
            no: 33,
            name: "onboarding_config",
            kind: "message",
            T: ULd,
            opt: !0
        },
        {
            no: 34,
            name: "bugbot_config",
            kind: "message",
            T: jLd,
            opt: !0
        },
        {
            no: 35,
            name: "codebase_telemetry_config",
            kind: "message",
            T: $Ld,
            opt: !0
        },
        {
            no: 36,
            name: "retrieval_keep_alive_config",
            kind: "enum",
            T: x.getEnumType(pLd)
        },
        {
            no: 37,
            name: "google_workspace_mcp_oauth_client",
            kind: "message",
            T: JLd,
            opt: !0
        },
        {
            no: 38,
            name: "new_repo_flow_config",
            kind: "message",
            T: O8o,
            opt: !0
        }
    ]), JLd = x.makeMessageType("aiserver.v1.GoogleWorkspaceMcpOAuthClient", ()=>[
        {
            no: 1,
            name: "client_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "client_secret",
            kind: "scalar",
            T: 9
        }
    ]), eOd = x.makeMessageType("aiserver.v1.InferenceProviderWarning", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "affected_models",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "fallback_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "trigger",
            kind: "enum",
            T: x.getEnumType(ckr)
        }
    ]), tOd = x.makeMessageType("aiserver.v1.AgentUrlConfig", ()=>[
        {
            no: 1,
            name: "agent_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "agentn_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "local_loop_inference_url",
            kind: "scalar",
            T: 9
        }
    ]);

}
