require.r(exports);
require.d(exports, {
    DebugModeConfig: ()=>DebugModeConfig,
    GitRepoInfo: ()=>GitRepoInfo,
    HooksConfigInfo: ()=>HooksConfigInfo,
    ImageProto: ()=>ImageProto,
    ImageProto_Dimension: ()=>ImageProto_Dimension,
    MatchedInstalledPlugin: ()=>MatchedInstalledPlugin,
    MountedAgentStore: ()=>MountedAgentStore,
    MountedAgentStoreKind: ()=>MountedAgentStoreKind,
    PermissionsAutoRunInstructions: ()=>PermissionsAutoRunInstructions,
    PrecomputedHumanChange: ()=>PrecomputedHumanChange,
    PrecomputedHumanChangeRenderedDiff: ()=>PrecomputedHumanChangeRenderedDiff,
    RecentlyAddedPlugin: ()=>RecentlyAddedPlugin,
    RecentlyAddedPlugin_CapabilityDescriptor: ()=>RecentlyAddedPlugin_CapabilityDescriptor,
    RequestContext: ()=>RequestContext,
    RequestContextArgs: ()=>RequestContextArgs,
    RequestContextEnv: ()=>RequestContextEnv,
    RequestContextError: ()=>RequestContextError,
    RequestContextMcpsPart: ()=>RequestContextMcpsPart,
    RequestContextPartReferences: ()=>RequestContextPartReferences,
    RequestContextRejected: ()=>RequestContextRejected,
    RequestContextResult: ()=>RequestContextResult,
    RequestContextRulesPart: ()=>RequestContextRulesPart,
    RequestContextSkillsPart: ()=>RequestContextSkillsPart,
    RequestContextSubagentsPart: ()=>RequestContextSubagentsPart,
    RequestContextSuccess: ()=>RequestContextSuccess,
    SkillDescriptor: ()=>SkillDescriptor,
    SkillOptions: ()=>SkillOptions,
    UserAgentStoreWebContext: ()=>UserAgentStoreWebContext,
    UserGitContext: ()=>UserGitContext
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _cursor_packages_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-145.js");
var _cursor_rules_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-80.js");
var _repo_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-146.js");
var _mcp_pb_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-89.js");
var _ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_5__ = require("./module-84.js");
var _subagents_pb_js__WEBPACK_IMPORTED_MODULE_6__ = require("./module-68.js");
var _agent_skills_pb_js__WEBPACK_IMPORTED_MODULE_7__ = require("./module-147.js");
var _system_prompt_pb_js__WEBPACK_IMPORTED_MODULE_8__ = require("./module-148.js");
const MountedAgentStoreKind = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.MountedAgentStoreKind", [
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
]);
const RequestContextArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContextArgs", ()=>[
        {
            no: 2,
            name: "notes_session_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "workspace_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "read_only_pinned_tree_sha",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "read_only_plugin_cache_root",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "use_cached",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "wait_for_workspace_cache",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const RequestContextResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContextResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: RequestContextSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: RequestContextError,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: RequestContextRejected,
            oneof: "result"
        }
    ]);
const RequestContextSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContextSuccess", ()=>[
        {
            no: 1,
            name: "request_context",
            kind: "message",
            T: RequestContext
        },
        {
            no: 2,
            name: "served_from_disk_cache",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const RequestContextError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContextError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const RequestContextRejected = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContextRejected", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
const ImageProto = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ImageProto", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "dimension",
            kind: "message",
            T: ImageProto_Dimension
        },
        {
            no: 6,
            name: "task_specific_description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]);
const ImageProto_Dimension = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ImageProto.Dimension", ()=>[
        {
            no: 1,
            name: "width",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "height",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ImageProto_Dimension"
});
const GitRepoInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.GitRepoInfo", ()=>[
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
            opt: true
        },
        {
            no: 5,
            name: "previous_branch_is_ancestor",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "is_origin_backed",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const RequestContextEnv = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContextEnv", ()=>[
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
            repeated: true
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
            opt: true
        },
        {
            no: 14,
            name: "sandbox_supported",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 16,
            name: "sandbox_network_has_defaults",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 17,
            name: "sandbox_network_explicit_allowlist",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 18,
            name: "secret_redaction_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 19,
            name: "computer_use_supported",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 20,
            name: "is_working_dir_home_dir",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 21,
            name: "process_working_directory",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 22,
            name: "smart_mode_classifier_auto_mode_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 23,
            name: "dev_force_next_smart_mode_classifier_block_token",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 24,
            name: "dev_delay_next_smart_mode_classifier_token",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 25,
            name: "mounted_agent_stores",
            kind: "message",
            T: MountedAgentStore,
            repeated: true
        },
        {
            no: 26,
            name: "user_agent_store_web_context",
            kind: "message",
            T: UserAgentStoreWebContext,
            opt: true
        },
        {
            no: 27,
            name: "dev_mock_prompt_time",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Timestamp,
            opt: true
        },
        {
            no: 28,
            name: "agent_store_dynamic_mount_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const MountedAgentStore = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.MountedAgentStore", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(MountedAgentStoreKind)
        },
        {
            no: 3,
            name: "alias",
            kind: "scalar",
            T: 9,
            opt: true
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
            opt: true
        }
    ]);
const UserAgentStoreWebContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UserAgentStoreWebContext", ()=>[
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
    ]);
const UserGitContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.UserGitContext", ()=>[
        {
            no: 1,
            name: "username",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const DebugModeConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.DebugModeConfig", ()=>[
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
    ]);
const SkillDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SkillDescriptor", ()=>[
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
            opt: true
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_cursor_packages_pb_js__WEBPACK_IMPORTED_MODULE_1__.PackageType)
        }
    ]);
const SkillOptions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SkillOptions", ()=>[
        {
            no: 1,
            name: "skill_descriptors",
            kind: "message",
            T: SkillDescriptor,
            repeated: true
        }
    ]);
const HooksConfigInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.HooksConfigInfo", ()=>[
        {
            no: 1,
            name: "configured_steps",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const PermissionsAutoRunInstructions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PermissionsAutoRunInstructions", ()=>[
        {
            no: 1,
            name: "allow_instructions",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "block_instructions",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const PrecomputedHumanChangeRenderedDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PrecomputedHumanChangeRenderedDiff", ()=>[
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
            repeated: true
        },
        {
            no: 4,
            name: "removed_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "added_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "after_context_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const PrecomputedHumanChange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PrecomputedHumanChange", ()=>[
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
            T: PrecomputedHumanChangeRenderedDiff,
            repeated: true
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
    ]);
const RequestContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContext", ()=>[
        {
            no: 2,
            name: "rules",
            kind: "message",
            T: _cursor_rules_pb_js__WEBPACK_IMPORTED_MODULE_2__.CursorRule,
            repeated: true
        },
        {
            no: 4,
            name: "env",
            kind: "message",
            T: RequestContextEnv
        },
        {
            no: 6,
            name: "repository_info",
            kind: "message",
            T: _repo_pb_js__WEBPACK_IMPORTED_MODULE_3__.RepositoryIndexingInfo,
            repeated: true
        },
        {
            no: 7,
            name: "tools",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_4__.McpToolDefinition,
            repeated: true
        },
        {
            no: 8,
            name: "conversation_notes_listing",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "shared_notes_listing",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "git_repos",
            kind: "message",
            T: GitRepoInfo,
            repeated: true
        },
        {
            no: 13,
            name: "project_layouts",
            kind: "message",
            T: _ls_exec_pb_js__WEBPACK_IMPORTED_MODULE_5__.LsDirectoryTreeNode,
            repeated: true
        },
        {
            no: 14,
            name: "mcp_instructions",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_4__.McpInstructions,
            repeated: true
        },
        {
            no: 15,
            name: "debug_mode_config",
            kind: "message",
            T: DebugModeConfig,
            opt: true
        },
        {
            no: 16,
            name: "cloud_rule",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "web_search_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 18,
            name: "skill_options",
            kind: "message",
            T: SkillOptions,
            opt: true
        },
        {
            no: 19,
            name: "repository_info_should_query_prod",
            kind: "scalar",
            T: 8,
            opt: true
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
            opt: true
        },
        {
            no: 22,
            name: "custom_subagents",
            kind: "message",
            T: _subagents_pb_js__WEBPACK_IMPORTED_MODULE_6__.CustomSubagent,
            repeated: true
        },
        {
            no: 23,
            name: "mcp_file_system_options",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_4__.McpFileSystemOptions,
            opt: true
        },
        {
            no: 24,
            name: "web_fetch_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 25,
            name: "hooks_additional_context",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 26,
            name: "commit_attribution_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 27,
            name: "pr_attribution_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 28,
            name: "hooks_config",
            kind: "message",
            T: HooksConfigInfo,
            opt: true
        },
        {
            no: 29,
            name: "agent_skills",
            kind: "message",
            T: _agent_skills_pb_js__WEBPACK_IMPORTED_MODULE_7__.AgentSkill,
            repeated: true
        },
        {
            no: 30,
            name: "precomputed_human_changes",
            kind: "message",
            T: PrecomputedHumanChange,
            repeated: true
        },
        {
            no: 31,
            name: "recently_added_plugin",
            kind: "message",
            T: RecentlyAddedPlugin,
            opt: true
        },
        {
            no: 32,
            name: "supports_mcp_auth",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 33,
            name: "git_repo_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 34,
            name: "mcp_meta_tool_options",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_4__.McpMetaToolOptions,
            opt: true
        },
        {
            no: 35,
            name: "read_lints_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 36,
            name: "mcp_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 37,
            name: "non_file_rules",
            kind: "message",
            T: _cursor_rules_pb_js__WEBPACK_IMPORTED_MODULE_2__.CursorRule,
            repeated: true
        },
        {
            no: 38,
            name: "matched_installed_plugin",
            kind: "message",
            T: MatchedInstalledPlugin,
            opt: true
        },
        {
            no: 39,
            name: "rules_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 40,
            name: "env_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 41,
            name: "repository_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 42,
            name: "custom_subagents_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 43,
            name: "agent_skills_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 44,
            name: "mcp_file_system_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 45,
            name: "git_status_info_complete",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 46,
            name: "user_permissions_auto_run",
            kind: "message",
            T: PermissionsAutoRunInstructions,
            opt: true
        },
        {
            no: 47,
            name: "project_permissions_auto_run",
            kind: "message",
            T: PermissionsAutoRunInstructions,
            opt: true
        },
        {
            no: 48,
            name: "admin_permissions_auto_run",
            kind: "message",
            T: PermissionsAutoRunInstructions,
            opt: true
        },
        {
            no: 49,
            name: "disabled_team_rules",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 50,
            name: "search_conversations_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 51,
            name: "send_message_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 52,
            name: "admin_command_denylist",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 53,
            name: "system_prompt_override",
            kind: "message",
            T: _system_prompt_pb_js__WEBPACK_IMPORTED_MODULE_8__.SystemPromptSpec,
            opt: true
        }
    ]);
const RequestContextRulesPart = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContextRulesPart", ()=>[
        {
            no: 1,
            name: "rules",
            kind: "message",
            T: _cursor_rules_pb_js__WEBPACK_IMPORTED_MODULE_2__.CursorRule,
            repeated: true
        },
        {
            no: 2,
            name: "non_file_rules",
            kind: "message",
            T: _cursor_rules_pb_js__WEBPACK_IMPORTED_MODULE_2__.CursorRule,
            repeated: true
        },
        {
            no: 3,
            name: "cloud_rule",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RequestContextSkillsPart = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContextSkillsPart", ()=>[
        {
            no: 1,
            name: "agent_skills",
            kind: "message",
            T: _agent_skills_pb_js__WEBPACK_IMPORTED_MODULE_7__.AgentSkill,
            repeated: true
        },
        {
            no: 2,
            name: "skill_options",
            kind: "message",
            T: SkillOptions,
            opt: true
        }
    ]);
const RequestContextSubagentsPart = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContextSubagentsPart", ()=>[
        {
            no: 1,
            name: "custom_subagents",
            kind: "message",
            T: _subagents_pb_js__WEBPACK_IMPORTED_MODULE_6__.CustomSubagent,
            repeated: true
        }
    ]);
const RequestContextMcpsPart = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContextMcpsPart", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_4__.McpToolDefinition,
            repeated: true
        },
        {
            no: 2,
            name: "mcp_instructions",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_4__.McpInstructions,
            repeated: true
        },
        {
            no: 3,
            name: "mcp_file_system_options",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_4__.McpFileSystemOptions,
            opt: true
        },
        {
            no: 4,
            name: "mcp_meta_tool_options",
            kind: "message",
            T: _mcp_pb_js__WEBPACK_IMPORTED_MODULE_4__.McpMetaToolOptions,
            opt: true
        }
    ]);
const RequestContextPartReferences = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestContextPartReferences", ()=>[
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
            T: RequestContext
        }
    ]);
const RecentlyAddedPlugin = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecentlyAddedPlugin", ()=>[
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
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 4,
            name: "subagents",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 5,
            name: "hooks",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 6,
            name: "rules",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 7,
            name: "commands",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 8,
            name: "mcp_servers",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const RecentlyAddedPlugin_CapabilityDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecentlyAddedPlugin.CapabilityDescriptor", ()=>[
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
});
const MatchedInstalledPlugin = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.MatchedInstalledPlugin", ()=>[
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
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 5,
            name: "subagents",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 6,
            name: "hooks",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 7,
            name: "rules",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 8,
            name: "commands",
            kind: "message",
            T: RecentlyAddedPlugin_CapabilityDescriptor,
            repeated: true
        },
        {
            no: 9,
            name: "mcp_servers",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
