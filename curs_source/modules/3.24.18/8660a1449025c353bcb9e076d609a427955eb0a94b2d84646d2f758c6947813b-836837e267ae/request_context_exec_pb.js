import { rbt, z4t } from "./agent_skills_pb.js";
import { CSd, PIy } from "./cursor_packages_pb.js";
import { Wde, Xet } from "./cursor_rules_pb.js";
import { Bpn, zet } from "./ls_exec_pb.js";
import { B$e, Kti, Q_t, mmn, oSr } from "./mcp_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { MIy, TSd } from "./repo_pb.js";
import { Opn, bQ } from "./subagents_pb.js";
import { TSr, yni } from "./system_prompt_pb.js";
import { Js } from "./timestamp_pb.js";
import { E } from "./tslib.es6.js";
var $$e, ntt, Sni, kni, ESd, ISd, ESr, itt, wni, xSd, Imn, ASd, ISr, Cni, c5e, RSd, PSd, mY, MSd, DSd, NSd, LSd, K5o, Tni, u5e, OSd;
export { $$e, ASd, Cni, DSd, ESd, ESr, ISd, ISr, Imn, K5o, LSd, MSd, NSd, OSd, PSd, RSd, Sni, Tni, c5e, itt, kni, mY, ntt, u5e, wni, xSd };
var __wakaru_Gte_initialized = false;
export function Gte() {
if (__wakaru_Gte_initialized) return;
__wakaru_Gte_initialized = true;
"use strict";
E(), hr(), PIy(), Xet(), MIy(), Q_t(), zet(), bQ(), rbt(), TSr(), $$e = x.makeEnum("agent.v1.MountedAgentStoreKind", [
    {
        no: 0,
        name: "MOUNTED_AGENT_STORE_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "MOUNTED_AGENT_STORE_KIND_SELF",
        localName: "SELF"
    },
    {
        no: 2,
        name: "MOUNTED_AGENT_STORE_KIND_PEER",
        localName: "PEER"
    },
    {
        no: 3,
        name: "MOUNTED_AGENT_STORE_KIND_SHARE",
        localName: "SHARE"
    },
    {
        no: 4,
        name: "MOUNTED_AGENT_STORE_KIND_PRINCIPAL",
        localName: "PRINCIPAL"
    }
]), ntt = x.makeMessageType("agent.v1.RequestContextArgs", ()=>[
        {
            no: 2,
            name: "notes_session_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "workspace_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "read_only_pinned_tree_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "read_only_plugin_cache_root",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "use_cached",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "wait_for_workspace_cache",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Sni = x.makeMessageType("agent.v1.RequestContextResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: kni,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ESd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: ISd,
            oneof: "result"
        }
    ]), kni = x.makeMessageType("agent.v1.RequestContextSuccess", ()=>[
        {
            no: 1,
            name: "request_context",
            kind: "message",
            T: mY
        },
        {
            no: 2,
            name: "served_from_disk_cache",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), ESd = x.makeMessageType("agent.v1.RequestContextError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), ISd = x.makeMessageType("agent.v1.RequestContextRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), ESr = x.makeMessageType("agent.v1.GitRepoInfo", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "remote_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "previous_branch_is_ancestor",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "is_origin_backed",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), itt = x.makeMessageType("agent.v1.RequestContextEnv", ()=>[
        {
            no: 1,
            name: "os_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "shell",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "sandbox_enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "terminals_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "agent_shared_notes_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "agent_conversation_notes_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "time_zone",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "project_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "agent_transcripts_folder",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "artifacts_folder",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 14,
            name: "sandbox_supported",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "sandbox_network_has_defaults",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 17,
            name: "sandbox_network_explicit_allowlist",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 18,
            name: "secret_redaction_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 19,
            name: "computer_use_supported",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 20,
            name: "is_working_dir_home_dir",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 21,
            name: "process_working_directory",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 22,
            name: "smart_mode_classifier_auto_mode_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 23,
            name: "dev_force_next_smart_mode_classifier_block_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 24,
            name: "dev_delay_next_smart_mode_classifier_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 25,
            name: "mounted_agent_stores",
            kind: "message",
            T: wni,
            repeated: !0
        },
        {
            no: 26,
            name: "user_agent_store_web_context",
            kind: "message",
            T: xSd,
            opt: !0
        },
        {
            no: 27,
            name: "dev_mock_prompt_time",
            kind: "message",
            T: Js,
            opt: !0
        },
        {
            no: 28,
            name: "agent_store_dynamic_mount_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), wni = x.makeMessageType("agent.v1.MountedAgentStore", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "enum",
            T: x.getEnumType($$e)
        },
        {
            no: 3,
            name: "alias",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "read_only",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "inherited_from_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xSd = x.makeMessageType("agent.v1.UserAgentStoreWebContext", ()=>[
        {
            no: 1,
            name: "store_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "portal_base_url",
            kind: "scalar",
            T: 9
        }
    ]), Imn = x.makeMessageType("agent.v1.DebugModeConfig", ()=>[
        {
            no: 1,
            name: "log_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "server_endpoint",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), ASd = x.makeMessageType("agent.v1.SkillDescriptor", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "folder_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "parse_error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "readme_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "package_type",
            kind: "enum",
            T: x.getEnumType(CSd)
        }
    ]), ISr = x.makeMessageType("agent.v1.SkillOptions", ()=>[
        {
            no: 1,
            name: "skill_descriptors",
            kind: "message",
            T: ASd,
            repeated: !0
        }
    ]), Cni = x.makeMessageType("agent.v1.HooksConfigInfo", ()=>[
        {
            no: 1,
            name: "configured_steps",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), c5e = x.makeMessageType("agent.v1.PermissionsAutoRunInstructions", ()=>[
        {
            no: 1,
            name: "allow_instructions",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "block_instructions",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), RSd = x.makeMessageType("agent.v1.PrecomputedHumanChangeRenderedDiff", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number_exclusive",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "before_context_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "removed_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "added_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "after_context_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), PSd = x.makeMessageType("agent.v1.PrecomputedHumanChange", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "rendered_diffs",
            kind: "message",
            T: RSd,
            repeated: !0
        },
        {
            no: 3,
            name: "is_new_file",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "is_deleted_file",
            kind: "scalar",
            T: 8
        }
    ]), mY = x.makeMessageType("agent.v1.RequestContext", ()=>[
        {
            no: 2,
            name: "rules",
            kind: "message",
            T: Wde,
            repeated: !0
        },
        {
            no: 4,
            name: "env",
            kind: "message",
            T: itt
        },
        {
            no: 6,
            name: "repository_info",
            kind: "message",
            T: TSd,
            repeated: !0
        },
        {
            no: 7,
            name: "tools",
            kind: "message",
            T: B$e,
            repeated: !0
        },
        {
            no: 8,
            name: "conversation_notes_listing",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "shared_notes_listing",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "git_repos",
            kind: "message",
            T: ESr,
            repeated: !0
        },
        {
            no: 13,
            name: "project_layouts",
            kind: "message",
            T: Bpn,
            repeated: !0
        },
        {
            no: 14,
            name: "mcp_instructions",
            kind: "message",
            T: Kti,
            repeated: !0
        },
        {
            no: 15,
            name: "debug_mode_config",
            kind: "message",
            T: Imn,
            opt: !0
        },
        {
            no: 16,
            name: "cloud_rule",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 17,
            name: "web_search_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 18,
            name: "skill_options",
            kind: "message",
            T: ISr,
            opt: !0
        },
        {
            no: 19,
            name: "repository_info_should_query_prod",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 20,
            name: "file_contents",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 21,
            name: "user_intent_summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 22,
            name: "custom_subagents",
            kind: "message",
            T: Opn,
            repeated: !0
        },
        {
            no: 23,
            name: "mcp_file_system_options",
            kind: "message",
            T: mmn,
            opt: !0
        },
        {
            no: 24,
            name: "web_fetch_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 25,
            name: "hooks_additional_context",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 26,
            name: "commit_attribution_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 27,
            name: "pr_attribution_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 28,
            name: "hooks_config",
            kind: "message",
            T: Cni,
            opt: !0
        },
        {
            no: 29,
            name: "agent_skills",
            kind: "message",
            T: z4t,
            repeated: !0
        },
        {
            no: 30,
            name: "precomputed_human_changes",
            kind: "message",
            T: PSd,
            repeated: !0
        },
        {
            no: 31,
            name: "recently_added_plugin",
            kind: "message",
            T: Tni,
            opt: !0
        },
        {
            no: 32,
            name: "supports_mcp_auth",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 33,
            name: "git_repo_info_complete",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 34,
            name: "mcp_meta_tool_options",
            kind: "message",
            T: oSr,
            opt: !0
        },
        {
            no: 35,
            name: "read_lints_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 36,
            name: "mcp_info_complete",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 37,
            name: "non_file_rules",
            kind: "message",
            T: Wde,
            repeated: !0
        },
        {
            no: 38,
            name: "matched_installed_plugin",
            kind: "message",
            T: OSd,
            opt: !0
        },
        {
            no: 39,
            name: "rules_info_complete",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 40,
            name: "env_info_complete",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 41,
            name: "repository_info_complete",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 42,
            name: "custom_subagents_info_complete",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 43,
            name: "agent_skills_info_complete",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 44,
            name: "mcp_file_system_info_complete",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 45,
            name: "git_status_info_complete",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 46,
            name: "user_permissions_auto_run",
            kind: "message",
            T: c5e,
            opt: !0
        },
        {
            no: 47,
            name: "project_permissions_auto_run",
            kind: "message",
            T: c5e,
            opt: !0
        },
        {
            no: 48,
            name: "admin_permissions_auto_run",
            kind: "message",
            T: c5e,
            opt: !0
        },
        {
            no: 49,
            name: "disabled_team_rules",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 50,
            name: "search_conversations_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 51,
            name: "send_message_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 52,
            name: "admin_command_denylist",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 53,
            name: "system_prompt_override",
            kind: "message",
            T: yni,
            opt: !0
        }
    ]), MSd = x.makeMessageType("agent.v1.RequestContextRulesPart", ()=>[
        {
            no: 1,
            name: "rules",
            kind: "message",
            T: Wde,
            repeated: !0
        },
        {
            no: 2,
            name: "non_file_rules",
            kind: "message",
            T: Wde,
            repeated: !0
        },
        {
            no: 3,
            name: "cloud_rule",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), DSd = x.makeMessageType("agent.v1.RequestContextSkillsPart", ()=>[
        {
            no: 1,
            name: "agent_skills",
            kind: "message",
            T: z4t,
            repeated: !0
        },
        {
            no: 2,
            name: "skill_options",
            kind: "message",
            T: ISr,
            opt: !0
        }
    ]), NSd = x.makeMessageType("agent.v1.RequestContextSubagentsPart", ()=>[
        {
            no: 1,
            name: "custom_subagents",
            kind: "message",
            T: Opn,
            repeated: !0
        }
    ]), LSd = x.makeMessageType("agent.v1.RequestContextMcpsPart", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: B$e,
            repeated: !0
        },
        {
            no: 2,
            name: "mcp_instructions",
            kind: "message",
            T: Kti,
            repeated: !0
        },
        {
            no: 3,
            name: "mcp_file_system_options",
            kind: "message",
            T: mmn,
            opt: !0
        },
        {
            no: 4,
            name: "mcp_meta_tool_options",
            kind: "message",
            T: oSr,
            opt: !0
        }
    ]), K5o = x.makeMessageType("agent.v1.RequestContextPartReferences", ()=>[
        {
            no: 1,
            name: "rules_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "rules_byte_length",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "skills_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 4,
            name: "skills_byte_length",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "subagents_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 6,
            name: "subagents_byte_length",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "mcps_blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 8,
            name: "mcps_byte_length",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "dynamic_context",
            kind: "message",
            T: mY
        }
    ]), Tni = x.makeMessageType("agent.v1.RecentlyAddedPlugin", ()=>[
        {
            no: 1,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "skills",
            kind: "message",
            T: u5e,
            repeated: !0
        },
        {
            no: 4,
            name: "subagents",
            kind: "message",
            T: u5e,
            repeated: !0
        },
        {
            no: 5,
            name: "hooks",
            kind: "message",
            T: u5e,
            repeated: !0
        },
        {
            no: 6,
            name: "rules",
            kind: "message",
            T: u5e,
            repeated: !0
        },
        {
            no: 7,
            name: "commands",
            kind: "message",
            T: u5e,
            repeated: !0
        },
        {
            no: 8,
            name: "mcp_servers",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), u5e = x.makeMessageType("agent.v1.RecentlyAddedPlugin.CapabilityDescriptor", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "RecentlyAddedPlugin_CapabilityDescriptor"
}), OSd = x.makeMessageType("agent.v1.MatchedInstalledPlugin", ()=>[
        {
            no: 1,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "matched_keyword",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "skills",
            kind: "message",
            T: u5e,
            repeated: !0
        },
        {
            no: 5,
            name: "subagents",
            kind: "message",
            T: u5e,
            repeated: !0
        },
        {
            no: 6,
            name: "hooks",
            kind: "message",
            T: u5e,
            repeated: !0
        },
        {
            no: 7,
            name: "rules",
            kind: "message",
            T: u5e,
            repeated: !0
        },
        {
            no: 8,
            name: "commands",
            kind: "message",
            T: u5e,
            repeated: !0
        },
        {
            no: 9,
            name: "mcp_servers",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);

}
