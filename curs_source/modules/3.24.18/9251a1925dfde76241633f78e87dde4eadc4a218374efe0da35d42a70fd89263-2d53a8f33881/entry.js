import { AGENT_DATA_CLEANUP_INITIAL_DELAY_MS } from "./agent-host-exec/dist/agent-data-cleanup.js";
import { AutoApprovePendingDecisionProvider } from "./agent-host-exec/dist/create-headless-decision-provider.js";
import { HostedMcpLeaseFilter, HostedMcpRoutingState } from "./agent-host-exec/dist/hosted-mcp-routing.js";
import { ALL_RUNTIME_SETTING_SOURCES } from "./agent-host-exec/dist/setting-sources.js";
import { PRIVATE_INFERENCE_CREDENTIAL_ENV_NAMES, PrivateInferenceConfigError, init_private_inference_config } from "./agent-host/dist/agentAdapter/local/private-inference-config.js";
import { HARNESS_INTERFACE_REVISION } from "./agent-host/dist/harness/api-constants.js";
import { CAPABILITIES } from "./agent-host/dist/harness/generation/entry.js";
import { createAgentHost4 } from "./agent-host/dist/local-loop.js";
import { init_storage } from "./agent-host/dist/storage.js";
import { AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER, AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL, AGENT_WEBSOCKET_PROTOCOL_VERSION, AGENT_WEBSOCKET_REUSE_HEADER, AGENT_WEBSOCKET_SEQUENTIAL_V1_REUSE_VALUE, AGENT_WEBSOCKET_SUBPROTOCOL } from "./bidi-connect/dist/agent-websocket-wire.js";
import { AGENT_HOST_LOOPS, AGENT_HOST_MODULE_CHANNELS, AGENT_HOST_MODULE_METRIC_TAG_KEYS, AGENT_HOST_MODULE_SERVE_CAUSES, AGENT_HOST_MODULE_SOURCES, AGENT_HOST_MODULE_STATIC_GENERATION, AGENT_HOST_TURN_RUNTIMES } from "./constants/dist/agent-host-module.js";
import { AGENT_STORE_SELF_MOUNT_ROOT, INBOX_ROOT_DIR, INTERACTIVE_CHILD_ROUTE_ID_PREFIX, MAX_CHILD_INBOX_REMINDER_ENTRIES, SUBSCRIPTION_RESULTS_INBOX_PREFIX, SUBSCRIPTION_RESULTS_INBOX_TYPE } from "./constants/dist/agent-inbox.js";
import { AGENT_LAYOUT_ALLOWLISTED_ACTION_IDS, INPUT_FOCUSED_EDITOR_DENYLIST_ACTION_IDS } from "./constants/dist/agent-layout.js";
import { AGENT_STORE_REFRESH_PEER_PATHS_MAX, APPLY_SUBAGENT_AGENT_STORE_MOUNTS_COMMAND, CLEAR_SUBAGENT_AGENT_STORE_MOUNTS_COMMAND, FLUSH_AGENT_STORE_FOR_SUBAGENT_COMMAND, GET_AGENT_STORE_SKILL_ROOTS_COMMAND, GET_AGENT_STORE_SKILL_TARGET_DIRS_COMMAND, GET_MOUNTED_AGENT_STORES_COMMAND, MOUNT_AGENT_STORE_COMMAND, NOTIFY_AGENT_STORE_SKILL_TARGET_DIRS_CHANGED_COMMAND, REFRESH_AGENT_STORE_PEER_PATHS_COMMAND, REFRESH_USER_AGENT_STORE_SKILLS_SYNC_SETTING_COMMAND, RESOLVE_AGENT_STORE_REFERENCES_COMMAND, RESOLVE_AGENT_STORE_SCOPE_PATHS_COMMAND, SYNC_AGENT_STORE_PATH_COMMAND } from "./constants/dist/agent-store-commands.js";
import { AGENT_STORE_FUSE_BINARY_CMDLINE_NEEDLE, AGENT_STORE_FUSE_DISPATCH_WEDGE_REPORT_PATH, AGENT_STORE_FUSE_EVENTS_PATH, AGENT_STORE_FUSE_NOTICE_CURSOR_PATH, AGENT_STORE_FUSE_PID_FILE, AGENT_STORE_FUSE_RELAUNCH_REASON_PATH, AGENT_STORE_FUSE_RUNTIME_DIR, AGENT_STORE_FUSE_WEDGE_REPORT_PATH } from "./constants/dist/agent-store-fuse.js";
import { AGENT_SERVE_DEPLOYMENT_STORE_MOUNT_NAME, AGENT_SERVE_USER_STORE_FILES_SOURCE_ID, AGENT_SERVE_USER_STORE_KEY_PREFIX, AGENT_STORE_AUTOMATION_MOUNT_NAME, AGENT_STORE_DEFAULT_MAX_FILE_SIZE_BYTES, AGENT_STORE_FILES_DIR_NAME, AGENT_STORE_FUSE_USE_DEDICATED_SERVICE_GATE, AGENT_STORE_GROK_BOT_MOUNT_NAME, AGENT_STORE_ID_PATTERN, AGENT_STORE_ID_QUERY_PARAM, AGENT_STORE_MOUNT_ROOT2, AGENT_STORE_RESERVED_CURSOR_PATH_PREFIX, AGENT_STORE_SELF_MOUNT_NAME, AGENT_STORE_SHARE_ID_PATTERN, AGENT_STORE_SHARE_ID_PREFIX, AGENT_STORE_SHARE_ID_QUERY_PARAM, AGENT_STORE_SKILLS_DIR_NAME, AGENT_STORE_SYNC_CLIENT_CONFIG_NAME, AGENT_STORE_TEAM_MOUNT_NAME, AGENT_STORE_TEAM_SOURCE_ID_PATTERN, AGENT_STORE_TMP_DIR_NAME, AGENT_STORE_TMP_DIR_NAME_DEV, AGENT_STORE_USER_MOUNT_NAME, AGENT_STORE_USER_SOURCE_ID_PATTERN, AGENT_STORE_USE_DEDICATED_SERVICE_GATE, AUTOMATION_STORE_CANVASES_DIR, BARE_UUID_PATTERN, CANVAS_STORE_PERSIST_ROOTS, CLOUD_AGENT_STORE_ID_PATTERN, CLOUD_CANVAS_ROOT2, CURSOR_AGENT_STORE_FILES_DIR_ENV, CURSOR_AGENT_STORE_SHARED_PATHS_ENV, GROK_BOT_AGENT_STORE_SOURCE_ID_PATTERN, GROK_BOT_AGENT_STORE_SOURCE_ID_PREFIX, NAMED_AGENT_HOME_STORE_MOUNT_NAME, PARENT_STORE_ALIAS, USER_STORE_CANVASES_DIR } from "./constants/dist/agent-store-ids.js";
import { AGENT_TRANSPORT_MODE_RESPONSE_HEADER, AGENT_WEBSOCKET_SOCKET_REUSE_RESPONSE_HEADER } from "./constants/dist/agent-transport.js";
import { ORG_API_KEY_SCOPES, ORG_API_KEY_SCOPE_ADMIN, ORG_API_KEY_SCOPE_AUDIT_LOGS_READ, ORG_API_KEY_SCOPE_MEMBERS, ORG_API_KEY_SCOPE_MEMBERS_READ, ORG_API_KEY_SCOPE_MODELS, ORG_API_KEY_SCOPE_MODELS_READ, ORG_API_KEY_SCOPE_USAGE, TEAM_API_KEY_SCOPES, TEAM_API_KEY_SCOPE_ADMIN, TEAM_API_KEY_SCOPE_AGENT, TEAM_API_KEY_SCOPE_MODELS, TEAM_API_KEY_SCOPE_MODELS_READ, TEAM_API_KEY_SCOPE_READ, TEAM_API_KEY_STATIC_SCOPES } from "./constants/dist/api-key-scopes.js";
import { ASK_QUESTION_AUTO_ANSWER_REASON, ASK_QUESTION_AUTO_ANSWER_REASON_PREFIX, PLACEMENT_CONSENT_ALLOW_OPTION_ID, PLACEMENT_CONSENT_DENY_OPTION_ID, PLACEMENT_CONSENT_QUESTION_ID } from "./constants/dist/ask-question.js";
import { AuthProviderType, GITHUB_OAUTH_CLIENT_IDS } from "./constants/dist/authentication.js";
import { AUTO_AB_PROMPT_VARIANTS } from "./constants/dist/auto-ab-prompt-variant.js";
import { AUTO_SPILLOVER_UI_DEFAULTS } from "./constants/dist/auto-spillover-ui.js";
import { CUSTOM_AGENTS_BASE_PATH, CUSTOM_AGENTS_ROUTE_SEGMENT, LEGACY_AUTOMATIONS_BASE_PATH, LEGACY_AUTOMATIONS_ROUTE_SEGMENT } from "./constants/dist/automations.js";
import { CANVAS_GET_HOST_THEME_STATE_COMMAND } from "./constants/dist/canvas-host-theme.js";
import { CHAT_NAME_MAX_CHARS, CHAT_NAME_USER_REQUEST_CLOSE_TAG, CHAT_NAME_USER_REQUEST_OPEN_TAG, SIDE_CHAT_NAME_REMINDER } from "./constants/dist/chat-naming.js";
import { CLAUDE_HISTORY_FILENAME, CLAUDE_HOME_SUBDIR, CLAUDE_PROJECTS_SUBDIR } from "./constants/dist/claude-code-paths.js";
import { CLI_FEEDBACK_MAX_CHARS } from "./constants/dist/cli-feedback.js";
import { CLOUD_AGENT_IDENTITY_GROK_BOT_BOX_TOKEN_PATH, CLOUD_AGENT_IDENTITY_WORKER_TOKEN_PATH, CURSOR_AGENT_METADATA_PATH_PREFIX, CURSOR_AGENT_OIDC_TOKEN_PATH, CURSOR_AGENT_SOCKET_ENV_VAR, GROK_BOT_BOX_IDENTITY_SOCKET_PATH, UPLOAD_LOCAL_AGENT_RUN_TO_PROMPT_QUALITY_AUDIENCE, UPLOAD_LOCAL_AGENT_RUN_TO_PROMPT_QUALITY_PATH } from "./constants/dist/cloud-agent-identity.js";
import { CLOUD_AGENT_FOLLOWUP_RETRY_HINT, CLOUD_AGENT_LEGACY_PRIVACY_ENFORCING_TEAMS_INFO_KEY, CLOUD_AGENT_REPEATED_UNEXPECTED_ERROR_MESSAGE, CLOUD_AGENT_START_PAYLOAD_TOO_LARGE_MESSAGE_PREFIX, CLOUD_AGENT_USAGE_LIMIT_ERROR_CODE, DOCKER_BUILD_FAILED_USER_FACING_MESSAGE, EMPTY_REPOSITORY_USER_FACING_MESSAGE, GITHUB_IP_ALLOWLIST_DOCS_URL, GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE, GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE_PREFIX, GIT_REMOTE_TRANSIENT_FAILURE_USER_FACING_MESSAGE, IMAGE_PULL_FAILED_USER_FACING_MESSAGE, NON_RETRYABLE_PROVIDER_ERROR_CODE, NON_RETRYABLE_PROVIDER_ERROR_SUBTYPES, PINNED_WORKER_OFFLINE_DETAIL_MARKDOWN, PINNED_WORKER_OFFLINE_ROW_STATUS, PRIVATE_WORKER_ALL_BUSY_USER_FACING_MESSAGE, PRIVATE_WORKER_CAPACITY_USER_FACING_MESSAGE, PRIVATE_WORKER_DISCONNECTED_TITLE, PRIVATE_WORKER_DISCONNECTED_USER_FACING_MESSAGE, PRIVATE_WORKER_MACHINE_OFFLINE_USER_FACING_MESSAGE, PRIVATE_WORKER_MISSING_REPO_URL_MESSAGE, PROVIDER_USER_BLOCKED_ERROR_CODE, SCM_AUTH_FAILED_MESSAGE_PREFIX, SCM_AUTH_FAILED_USER_FACING_MESSAGE, SCM_CHECKOUT_FAILED_USER_FACING_MESSAGE, SCM_PROVIDERS, SCM_REF_NOT_FOUND_MESSAGE_PREFIX, SHELL_INITIALIZATION_FAILED_USER_FACING_MESSAGE, SNAPSHOT_COPY_FAILED_USER_FACING_MESSAGE, SNAPSHOT_EXPIRED_USER_FACING_MESSAGE, SNAPSHOT_INVALID_USER_FACING_MESSAGE, SNAPSHOT_NOT_FOUND_OR_NO_ACCESS_USER_FACING_MESSAGE, USER_INSTALL_COMMAND_FAILED_USER_FACING_MESSAGE } from "./constants/dist/cloud-agent-startup-errors.js";
import { CLOUD_AGENT_RETRYABLE_ERROR_RECOVERY_MESSAGE, CLOUD_AGENT_TRANSIENT_ERROR_TITLE } from "./constants/dist/cloud-agent-stream-error-presentation.js";
import { BACKEND_REQUEST_BODY_SIZE_LIMIT_BYTES, CHANGE_MONITOR_DEFAULT_MONITORING_CRITERIA, CHANGE_MONITOR_ONBOARDING_MANAGED_SKILL_PATH, CHANGE_MONITOR_ONBOARDING_PR_TITLE, CHANGE_MONITOR_ONBOARDING_SKILL_ID, CLOUD_AGENT_ALL_SECRET_NAMES_ENV_VAR, CLOUD_AGENT_ARTIFACTS_DIR, CLOUD_AGENT_DESKTOP_LEASE_GATE, CLOUD_AGENT_DESKTOP_LEASE_HUMAN_TTL_MS, CLOUD_AGENT_FUSE_LIVENESS_KILL_GATE, CLOUD_AGENT_INJECTED_SECRET_NAMES_ENV_VAR, CLOUD_AGENT_MACHINE_RESOURCES_GATE, CLOUD_AGENT_ORIGIN_CLI_SESSION_TOKEN_ENV_VAR, CLOUD_AGENT_SINGLE_REPO_WORKSPACE_ROOT, CLOUD_AGENT_USER_EMAIL_ADDRESS_ENV_VAR, CLOUD_ONBOARDING_MANAGED_SKILL_PATH, CLOUD_ONBOARDING_SKILL_ID, CURSOR_AGENT_ALLOWED_TOOLS_HEADER_NAME, CURSOR_AGENT_EXCLUDE_TOOLS_HEADER_NAME, CURSOR_UNIVERSAL_MAGIC_DOCKER_IMAGE_NAME, DEFAULT_ENV_SETUP_COMPOSER_NAME, DEFAULT_ENV_SETUP_MODEL_NAME, ENV_SETUP_MANAGED_SKILL_DIRECTORY, ENV_SETUP_MANAGED_SKILL_PATH, ENV_SETUP_SKILL_ID, ENV_SETUP_TMUX_SESSION_NAME, EXEC_DAEMON_STARTUP_TRACEPARENT_ENV_VAR, GENERATE_VIDEO_INPUT_IMAGES_MAX_BYTES, GH_TELEMETRY_ENV_VAR, MAX_LIST_DETAILED_COMPOSERS, PRIVATE_WORKER_SESSION_OWNER_FILENAME, RESOLVE_PR_MERGE_CONFLICTS_SKILL_ID, SUBAGENT_COMPOSER_BCID_NAMESPACE, WALKTHROUGH_ARTIFACTS_SKILL_ID } from "./constants/dist/cloud-agent.js";
import { CLOUD_MCP_RUNTIME_PLUGIN_SUFFIX, CLOUD_MCP_RUNTIME_TEAM_SUFFIX } from "./constants/dist/cloud-mcp-runtime-identity.js";
import { HEALTHY_USER_MIN_ACCOUNT_AGE_MS } from "./constants/dist/cloud-onboarding-audiences.js";
import { CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_DEFAULT_MAX_RESULTS, CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_GITHUB_PROVIDER, CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_PATH, CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_RPC_METHOD, CLOUD_ONBOARDING_UI_GATE } from "./constants/dist/cloud-onboarding-auto-env-setup.js";
import { CURSOR_AGENT_EMAIL, CURSOR_COAUTHORED_BY_TRAILER, CURSOR_COAUTHOR_EMAILS, CURSOR_COAUTHOR_NAME, CURSOR_GIT_AUTHOR_NAME, LEGACY_MADE_WITH_TRAILER } from "./constants/dist/commit-identity.js";
import { MAX_TEXT_SIZE } from "./constants/dist/composer.js";
import { DESKTOP_BRIDGE_MAX_LIST_THREADS, DESKTOP_BRIDGE_MAX_MESSAGE_BYTES, DESKTOP_BRIDGE_PROTOCOL_VERSION } from "./constants/dist/desktop-bridge.js";
import { CURSOR_SANDBOX_ENV_NAME_PATTERN, ENV_NAME_PATTERN, SPAWN_CWD_HOP_ENV_VAR, WORKLOAD_CGROUP_ENV_VAR } from "./constants/dist/env-var-names.js";
import { ADO_SERVICE_ACCOUNT_UNSUPPORTED_FAILURE_CODE, BITBUCKET_FORGE_NOT_INSTALLED_FAILURE_CODE, CLOUD_AGENTS_NOT_AUTHORIZED_FAILURE_CODE, DOCKER_BUILD_FAILED_FAILURE_CODE, ENVIRONMENT_BUILD_FAILURE_CATEGORY_BY_CODE, ENVIRONMENT_BUILD_FAILURE_CODES_WITH_SPECIFIC_USER_FACING_ERROR, ENVIRONMENT_JSON_INVALID_FAILURE_CODE, GITHUB_APP_NOT_ASSOCIATED_FAILURE_CODE, GITHUB_APP_NOT_ASSOCIATED_MESSAGE_FRAGMENT, GITHUB_APP_NOT_INSTALLED_FAILURE_CODE, GITHUB_INSTALLATION_REPO_ACCESS_FAILURE_CODE, GITHUB_IP_ALLOWLIST_FAILURE_CODE, GITHUB_TEAM_NO_REPO_ACCESS_FAILURE_CODE, GITHUB_USER_NO_REPO_ACCESS_FAILURE_CODE, GITLAB_REPO_NOT_LINKED_FAILURE_CODE, GIT_CLONE_FAILED_FAILURE_CODE, INFRA_TRANSIENT_FAILURE_CODE, INSTALL_FAILED_FAILURE_CODE, ORIGIN_PLAN_REQUIRED_FAILURE_CODE, REPO_NOT_FOUND_FAILURE_CODE, SCM_ACCOUNT_NOT_CONNECTED_FAILURE_CODE, SCM_AUTH_FAILED_FAILURE_CODE, SCM_HOST_UNAVAILABLE_FAILURE_CODE, SCM_RATE_LIMITED_FAILURE_CODE, SCM_REF_NOT_FOUND_FAILURE_CODE, SCM_REPO_ACCESS_DENIED_FAILURE_CODE, SCM_REPO_EMPTY_FAILURE_CODE, SNAPSHOT_FAILED_FAILURE_CODE, TIMED_OUT_INSTALL_FAILURE_CODE } from "./constants/dist/environment-builds.js";
import { DEFAULT_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS, ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS_KEY, ENVIRONMENT_SETUP_RESUME_CONFIG_NAME, MAX_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS, MIN_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS } from "./constants/dist/environment-setup.js";
import { error_codes_default } from "./constants/dist/error-codes.js";
import { GIT_DIFF_INTRO, GIT_DIFF_TRUNCATION_NOTICE, GIT_DIFF_UNCOMMITTED_INTRO, MAX_GIT_DIFF_CHAR_LENGTH } from "./constants/dist/git-diff.js";
import { GLASS_HEADLESS_SHELL_EVENT_COMMAND } from "./constants/dist/glass-headless-shell-event.js";
import { GLASS_PERF_VOTE_CONFIG_DEFAULTS } from "./constants/dist/glass-perf-vote-config.js";
import { GROK_BOT_DESKTOP_GITHUB_CONNECT_CALLBACK_URL, GROK_BOT_GITHUB_CONNECT_STATE_PREFIXES, GROK_BOT_GITHUB_CONNECT_STATE_PREFIX_BY_CALLBACK_URL, GROK_BOT_SLACK_CONNECT_RETURN_URLS } from "./constants/dist/grok-bot-connect.js";
import { MAX_INACTIVITY_THRESHOLD_MINUTES, PRIMARY_INTRO_FIRE_TYPE, PROACTIVE_TYPES } from "./constants/dist/grok-bot-proactivity.js";
import { GROK_BOT_TEMPLATE_BLOB_MAX_BYTES } from "./constants/dist/grok-bot-templates.js";
import { IN_APP_AD_NEW_USER_BLACKOUT_MS } from "./constants/dist/in-app-ad-new-user-blackout.js";
import { CURSOR_LOCAL_AGENT_HEADERS_ENV } from "./constants/dist/local-agent-headers.js";
import { TOOL_ALLOWLIST_MODES } from "./constants/dist/mcp-tool-allowlist-mode.js";
import { ADMIN_TOOL_POLICY_BUILTIN_MCP_PROVIDERS, CURSOR_SCM_MCP_PROVIDERS, GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID, GOOGLE_WORKSPACE_MCP_HOSTS, HOSTED_MCP_ROUTING_REPORT_STATE_COMMAND, LEGACY_GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID, MCP_OAUTH_CALLBACK_PATH, MCP_OAUTH_CANONICAL_DESKTOP_URL_PROTOCOLS, MCP_OAUTH_CLIENT_LOGO_URI, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_PATH, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_REDIRECT_URIS, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_URL, MCP_OAUTH_CURSOR_CLIENT_BRANDING, MCP_OAUTH_DESKTOP_RETURN_URL, MCP_OAUTH_EXTENSION_ID, MCP_OAUTH_GROK_BOT_BOUNCE_CALLBACK_URL, MCP_OAUTH_GROK_BOT_CLIENT_BRANDING, MCP_OAUTH_GROK_BOT_CLIENT_METADATA_DOCUMENT_PATH, MCP_OAUTH_GROK_BOT_MOBILE_CALLBACK_URL, MCP_OAUTH_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL, MCP_OAUTH_GROK_BOT_RETURN_URL, MCP_OAUTH_GROK_WEB_CALLBACK_URL, MCP_OAUTH_LEGACY_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL, MCP_OAUTH_LEGACY_SAND_RETURN_URL, MCP_OAUTH_LOOPBACK_CALLBACK_URL, MCP_OAUTH_LOOPBACK_FALLBACK_PORTS, MCP_OAUTH_LOOPBACK_IPV4_CALLBACK_URL, MCP_OAUTH_PORTAL_CALLBACK_URL, MCP_OAUTH_PORTAL_RETURN_PATH_PREFIXES, MCP_OAUTH_POST_AUTH_RETURN_URLS, MCP_OAUTH_PROVIDER_POLICIES, MCP_OAUTH_RELAYED_LOOPBACK_HEADER, MCP_OAUTH_RETURN_PATH, MCP_OAUTH_SAND_RETURN_URL, MCP_OAUTH_STATE_ACCOUNT_MISMATCH_MESSAGE, MCP_OAUTH_STATE_TARGET_DESKTOP_LOOPBACK, MCP_OAUTH_STATE_TARGET_GROK_BOT_MOBILE, MCP_OAUTH_STATE_TARGET_GROK_WEB, MCP_OAUTH_STATE_TARGET_X_APP, MCP_OAUTH_X_APP_CALLBACK_URL, MCP_REDACTED_VALUE, MCP_TOOL_REQUIRES_CONFIRMATION_META_KEY, ORIGIN_MCP_BUILTIN_TARGET, ORIGIN_MCP_READONLY_SERVER_URL, ORIGIN_MCP_SERVER_URL, REST_MCP_CURSOR_AUTH_HEADER, REST_MCP_HOST, REST_MCP_SCM_ERROR_CODES, REST_MCP_SCM_NOT_CONNECTED_REASONS } from "./constants/dist/mcp.js";
import { OFFER_TEMPLATES, OFFER_TEMPLATE_KEYS } from "./constants/dist/offer-templates.js";
import { JOB_ROLE, JOB_ROLES, JOB_ROLE_SLUG, USE_CASE, USE_CASES } from "./constants/dist/onboarding.js";
import { AGENT_SERVE_DEPLOYMENT_PERMISSIONS, AGENT_STORE_PERMISSIONS, AGENT_STORE_SHARE_PERMISSIONS, AgentServeDeploymentPermission, AgentStorePermission, AgentStoreSharePermission, ENVIRONMENT_PERMISSIONS, EnvironmentPermission, GROK_BOT_AGENT_PERMISSIONS, GROK_BOT_TEMPLATE_PERMISSIONS, GrokBotAgentPermission, GrokBotTemplatePermission, KEYRING_PERMISSIONS, KeyringPermission, ORGANIZATION_PERMISSIONS, OrganizationPermission, PERMISSION_RESOURCE_TYPES, TEAM_PERMISSIONS, TeamPermission } from "./constants/dist/permissions.js";
import { PR_CODE_TOUR_SOURCE_PRECEDENCE } from "./constants/dist/pr-code-tour-current.js";
import { TOUR_ARTIFACT_BLOCK_PREFIX } from "./constants/dist/pr-code-tour-edit.js";
import { CODE_TOUR_DEFAULT_MODEL_VERSION, CODE_TOUR_DEFAULT_PROMPT_VERSION, CODE_TOUR_FORMAT_VERSION, CODE_TOUR_PROMPT_CACHE_KEY_PATTERN, CODE_TOUR_PROMPT_REVISION, CODE_TOUR_VARIANTS, DEFAULT_CODE_TOUR_VARIANT_NAME } from "./constants/dist/pr-code-tour-storage-key.js";
import { CODE_TOUR_TERM_GLOSS_MAX_CHARS } from "./constants/dist/pr-code-tour-term.js";
import { PRIVATE_INFERENCE_FEATURE_OFF_MESSAGE, PRIVATE_INFERENCE_OFF_FEATURES } from "./constants/dist/private-inference-features.js";
import { BRIDGE_CANCEL_CONTROLLER_METHOD, BRIDGE_CANCEL_REQUEST_METHOD, CLONE_GIT_REPOS_LABEL_KEY, MINT_GITHUB_TOKEN_LABEL_KEY, PRIVATE_WORKER_BC_ID_HEADER_NAME, PRIVATE_WORKER_CLAIMED_BC_ID_HEADER_NAME, PRIVATE_WORKER_CLI_VERSION_HEADER_NAME, PRIVATE_WORKER_HOST_POWER_STATE_HEADER_NAME, PRIVATE_WORKER_ID_HEADER_NAME, PRIVATE_WORKER_RESUMED_AFTER_SUSPEND_MS_HEADER_NAME, SYNC_DASHBOARD_SECRETS_LABEL_KEY } from "./constants/dist/private-worker-bridge.js";
import { PROFILE_BADGE_CURSOR_AMBASSADOR, PROFILE_BADGE_CURSOR_TEAM, PROFILE_BADGE_IDS, PROFILE_METADATA_BADGES_KEY } from "./constants/dist/profile-badges.js";
import { NEW_PROJECT_KICKOFF_MESSAGE, PROJECT_APPEARANCE_COLOR_IDS, STAGED_PROJECT_ICONS, STAGED_PROJECT_INIT_DESCRIPTION_MAX_CHARS } from "./constants/dist/project-conversation.js";
import { PROJECT_SUBAGENT_DEFAULT_NAME, PROJECT_SUBAGENT_TYPE_NAME } from "./constants/dist/project-subagents.js";
import { GITHUB_PULL_REQUEST_PATH_PATTERN, GRAPHITE_ORIGIN, LEGACY_REVIEW_CURSOR_HOST, LEGACY_REVIEW_CURSOR_HOSTS, LEGACY_REVIEW_CURSOR_HOST_STAGING, ORIGIN_PR_IDENTITY_HOST, ORIGIN_PR_IDENTITY_HOST_STAGING } from "./constants/dist/pull-request-review-links.js";
import { RECENTLY_CREATED_USER_WINDOW_MS } from "./constants/dist/recently-created-user.js";
import { REMOTE_AGENT_HOST_CANCEL_METHOD, REMOTE_AGENT_HOST_CONTROLLER_CHALLENGES_CHANGED_METHOD, REMOTE_AGENT_HOST_HEARTBEAT_INTERVAL_MS, REMOTE_AGENT_HOST_HEARTBEAT_METHOD, REMOTE_AGENT_HOST_HEARTBEAT_TIMEOUT_MS, REMOTE_AGENT_HOST_TUNNEL_GOAWAY_COMMAND, REMOTE_AGENT_HOST_TUNNEL_REVISIONS_HEADER, REMOTE_AGENT_HOST_TUNNEL_REVISION_FLOW_CONTROL, REMOTE_AGENT_HOST_TUNNEL_SETTINGS_METHOD, REMOTE_AGENT_HOST_WINDOW_UPDATE_METHOD } from "./constants/dist/remote-agent-host.js";
import { KNOWN_GIT_HOSTING_DOMAINS, REPO_LABEL_FIXTURES, SCP_STYLE_GIT_URL_REGEX } from "./constants/dist/repo-label.js";
import { SAND_BOX_PERSISTED_PATHS, SAND_BOX_PERSIST_ARCHIVE_EXCLUDES, SAND_BOX_WORKSPACE_DEFAULT_IGNORE_PATTERNS, SAND_WORKSPACE_IGNORE_FILE_NAME } from "./constants/dist/sand-box-archive.js";
import { SAND_AGENT_STORE_RPC_SERVICE_DEDICATED_VALUE, SAND_AGENT_STORE_RPC_SERVICE_ENV, SAND_BOX_HIBERNATE_HOOK_PATH, SAND_BOX_LEGACY_STORE_ABSENT_VALUE, SAND_BOX_LEGACY_STORE_ENV, SAND_BOX_STORE_BACKEND_ENV, SAND_BOX_STORE_BACKEND_V2_VALUE, SAND_BOX_STORE_BLOBS_PREFIX, SAND_BOX_STORE_COPY_IN_ENV, SAND_BOX_STORE_FLUSH_FIFO_DIR, SAND_BOX_STORE_HIBERNATE_HOOK_ENV, SAND_BOX_STORE_HIBERNATE_HOOK_ON_VALUE, SAND_BOX_STORE_ID_ENV, SAND_BOX_STORE_MANIFEST_COMMIT_ENV, SAND_BOX_STORE_MANIFEST_COMMIT_ON_VALUE, SAND_BOX_STORE_MANIFEST_REL_PATH, SAND_BOX_STORE_OWNER_REL_PATH, SAND_BOX_STORE_SYNC_ENV } from "./constants/dist/sand-box-store.js";
import { ANYGRESS_DNS_RESOLVER_POD_LABEL, CLOUDFLARE_VNET_POD_LABEL, SAND_BOX_FORK_NOVNC_PORT, SAND_BOX_IMAGE_TAG_LATEST, SAND_BOX_IMAGE_TAG_PREFIX, SAND_BOX_LABEL_EGRESS_TEAM, SAND_BOX_LABEL_FLAVOR, SAND_BOX_LABEL_IMAGE_TAG, SAND_BOX_LABEL_KIND, SAND_BOX_LABEL_OWNER, SAND_BOX_LABEL_SESSION, SAND_BOX_NOVNC_HIBERNATION_BOUNDS, SAND_BOX_PARK_HEADER, SAND_BOX_PARK_MODES, SAND_BOX_PRIMARY_NOVNC_PORT, SAND_BOX_SESSION_ENV, SAND_BOX_SESSION_ON_VALUE, SHORT_GIT_SHA_REGEX } from "./constants/dist/sand-box.js";
import { SAND_BOX_AGENT_DATA_ROOT, SAND_BOX_CHROME_POLICY_ONEPASSWORD_ENV, SAND_BOX_HOST_BUNDLE_ROOT, SAND_BOX_HOST_DIR, SAND_BOX_HOST_ENTRY, SAND_BOX_HOST_UPGRADE_MARKER_PATH, SAND_BOX_HOST_USER, SAND_BOX_HOST_VERSION_PATH, SAND_BOX_ONEPASSWORD_EXTENSION_DIR, SAND_BOX_ONEPASSWORD_EXTENSION_ID_FILE, SAND_BOX_ONEPASSWORD_EXTENSION_UPDATE_XML, SAND_DESKTOP_SUPERVISION_DISABLED_ENV, SAND_DESKTOP_SUPERVISOR_DIR, SAND_HOST_BUNDLE_CHANNELS, SAND_HOST_BUNDLE_CHANNEL_ENV, SAND_HOST_BUNDLE_DEFAULT_CHANNEL, SAND_HOST_BUNDLE_PROMOTABLE_CHANNELS, SAND_HOST_BUNDLE_PUBLIC_BASE_URL, SAND_HOST_BUNDLE_S3_BUCKET, SAND_HOST_BUNDLE_S3_PREFIX, SAND_HOST_BUNDLE_S3_REGION, SAND_HOST_BUNDLE_SHA256_REGEX, SAND_HOST_UID_SPLIT_ENV, SAND_HOST_UPGRADE_MAX_DEFER_MS, SAND_SUPERVISOR_ACKS_DIR, SAND_SUPERVISOR_COMMAND_KINDS, SAND_SUPERVISOR_COMMAND_PART_PATH, SAND_SUPERVISOR_COMMAND_PATH, SAND_SUPERVISOR_DESKTOP_DIR, SAND_SUPERVISOR_DESKTOP_HEALTH_PATH, SAND_SUPERVISOR_DESKTOP_HEALTH_PATH_ENV, SAND_SUPERVISOR_DIR, SAND_SUPERVISOR_DIR_ENV, SAND_SUPERVISOR_ROLES, SAND_SUPERVISOR_ROLE_ENV, SAND_SUPERVISOR_STAGED_BUNDLE_PART_PATH, SAND_SUPERVISOR_STAGED_BUNDLE_PATH, SAND_SUPERVISOR_STATUS_PATH, SAND_SUPERVISOR_UPGRADE_MODES } from "./constants/dist/sand-supervisor.js";
import { SAND_MANAGED_ROOT, SAND_MANAGED_SETUP_AS_BOX_USER_FLAG, SAND_MANAGED_SETUP_FORCE_FLAG, SAND_MANAGED_SETUP_PRIVILEGED_CONVERGE_PATH, SAND_MANAGED_SETUP_RUN_AS_ENV, SAND_MANAGED_SETUP_RUN_AS_VALUES, SAND_MANAGED_SETUP_TEAM_ID_ENV, SAND_MANIFESTS_ROOT, SAND_MANIFEST_ASSIGNMENT_PATH, SAND_SETUP_CONVERGE_LOG_PATH, SAND_SETUP_FAILURE_CLASSES, SAND_SETUP_MAX_SECRETS_PER_TEAM, SAND_SETUP_MAX_SECRET_ENV_BYTES, SAND_SETUP_MAX_SECRET_VALUE_BYTES, SAND_SETUP_PHASES, SAND_SETUP_RECEIPTS_ROOT, SAND_SETUP_SCHEMA_VERSION, SAND_SETUP_SCOPE_KINDS, SAND_SETUP_SECRET_ENVELOPE_VERSION, SAND_SETUP_STATUS_PATH } from "./constants/dist/sand-team-converge.js";
import { SCM_PR_BATCH_MAX_URLS } from "./constants/dist/scm-batch-limits.js";
import { AZURE_DEVOPS_SERVICES_UUID, BITBUCKET_CLOUD_UUID, GITLAB_COM_UUID } from "./constants/dist/scm-provider-installations.js";
import { ALLOWED_SCM_RPC_CALLSITES, SCM_RPC_CALLSITES, SCM_RPC_CALLSITE_HEADER_NAME } from "./constants/dist/scm-rpc-callsite.js";
import { SERVICE_TOKEN_ORGANIZATION_SCOPES, SERVICE_TOKEN_ORGANIZATION_SCOPE_GROUPS, SERVICE_TOKEN_SCOPE_CLI_SESSION, SERVICE_TOKEN_SCOPE_CLOUD_AGENTS, SERVICE_TOKEN_TEAM_SCOPES, SERVICE_TOKEN_TEAM_SCOPE_GROUPS, SERVICE_TOKEN_USER_SCOPES, SERVICE_TOKEN_USER_SCOPE_GROUPS } from "./constants/dist/service-token-scopes.js";
import { SIDE_CHAT_BOUNDARY_BODY, SIDE_CHAT_BOUNDARY_MESSAGE_ID_PREFIX, SIDE_CHAT_BOUNDARY_TAG, SIDE_CHAT_CREATION_REJECTED_REASON_KEY, SIDE_CHAT_CREATION_REJECTED_TOO_MANY, SIDE_CHAT_DEFAULT_NAME, SIDE_CHAT_LIMIT_REACHED_MESSAGE, SIDE_CHAT_LIMIT_REACHED_TITLE, SIDE_CHAT_NAME_MAX_LENGTH, SIDE_CHAT_STICKY_REMINDER_BODY, SIDE_CHAT_STICKY_SYSTEM_REMINDER, SIDE_CHAT_SUBAGENT_TYPE_NAME } from "./constants/dist/side-chats.js";
import { AGENT_SDK_SLACK_CHANNEL_POSTS_MAX_IDS } from "./constants/dist/slack-channel-id.js";
import { DEV_SMART_MODE_CLASSIFIER_DELAY_MS, DEV_SMART_MODE_CLASSIFIER_DELAY_SECONDS } from "./constants/dist/smart-mode-classifier.js";
import { CURSOR_GROK_45_CREDIT_GRANT_MODEL_IDS, CURSOR_GROK_46_CREDIT_GRANT_MODEL_IDS, CURSOR_GROK_47_CREDIT_GRANT_MODEL_IDS, STARTUP_OFFER_V2_12MO_MONTHS, STARTUP_OFFER_V2_CONFIGS, STARTUP_OFFER_V2_MONTHS } from "./constants/dist/startup-offers-v2.js";
import { STRUCTURED_LOG_KEYS } from "./constants/dist/structured-log.js";
import { SYSTEM_NOTIFICATION_CLOSE_TAG, SYSTEM_NOTIFICATION_OPEN_TAG, SYSTEM_NOTIFICATION_TAG } from "./constants/dist/system-notification.js";
import { TEAM_MEMBER_INVITE_PROMO_CREDIT_AMOUNT_CENTS, TEAM_MEMBER_INVITE_PROMO_GRANT_PRODUCT_ID, TEAM_MEMBER_INVITE_PROMO_GRANT_SOURCE_TYPE } from "./constants/dist/team-member-invite-promo.js";
import { LEGACY_STARTUP_TEAM_REFERRAL_DISCOUNT_ID, STANDARD_STARTUP_CREDIT_GRANT_CENTS, STANDARD_STARTUP_CREDIT_GRANT_PRODUCT_ID, STANDARD_STARTUP_PROMO_DURATION_MONTHS, STARTUP_OFFER_TYPES, STARTUP_T1_20_50_12MO_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_T1_20_50_ATTRIBUTION_SOURCE, STARTUP_T1_20_50_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_BATCH_20_50_12MO_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_BATCH_20_50_ATTRIBUTION_SOURCE, STARTUP_YC_BATCH_20_50_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_BATCH_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_STANDARD_12MO_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_STANDARD_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_TEAM_REFERRAL_DISCOUNT_ID, TEAMS_TRIAL_AMOUNT_CENTS, TEAMS_TRIAL_DISCOUNT_ID, TEAMS_TRIAL_V2_DURATION_DAYS, TEAMS_TRIAL_V2_INITIAL_CREDIT_AMOUNT_CENTS, TEAMS_TRIAL_V2_INITIAL_GRANT_PRODUCT_ID, TEAMS_TRIAL_V2_INVITE_PROMO_PAID_COUNT_OFFSET, TEAMS_TRIAL_V2_MAX_FREE_SEATS, TEAMS_TRIAL_V2_MAX_INVITE_PROMO_SEATS, TEAMS_TRIAL_V2_REFERRAL_DISCOUNT_ID, YC_STARTUP_CREDIT_GRANT_CENTS, YC_STARTUP_MONTHLY_BUGBOT_CREDIT_GRANT_CENTS, YC_STARTUP_MONTHLY_BUGBOT_CREDIT_GRANT_PREFIX, YC_STARTUP_MONTHLY_CREDIT_GRANT_CENTS, YC_STARTUP_MONTHLY_CREDIT_GRANT_MONTHS, YC_STARTUP_MONTHLY_CREDIT_GRANT_PREFIX, YC_STARTUP_V2_TEAM_SEATS_COUPON_ID } from "./constants/dist/team-offers.js";
import { CURSOR_WORKTREES_DIR, CURSOR_WORKTREES_GLOB } from "./constants/dist/worktrees.js";
import { DenyPendingDecisionProvider, DenyPermissionsService, NoopCodebaseReferenceProvider, NoopCursorRulesService, NoopDiagnosticsProvider } from "./daemon_metrics_exports.js";
import { CachedTeamSettingsService } from "./local-exec/dist/services/team-settings-service.js";
import { names2 } from "./node_modules/.pnpm/@jimp+core@1.6.0/node_modules/@jimp/core/dist/esm/utils/composite-modes.js";
import { BlendMode, HorizontalAlign, VerticalAlign } from "./node_modules/.pnpm/@jimp+core@1.6.0/node_modules/@jimp/core/dist/esm/utils/constants.js";
import { PNGColorType, PNGFilterType } from "./node_modules/.pnpm/@jimp+js-png@1.6.0/node_modules/@jimp/js-png/dist/esm/constants.js";
import { ResizeStrategy } from "./node_modules/.pnpm/@jimp+plugin-resize@1.6.0/node_modules/@jimp/plugin-resize/dist/esm/constants.js";
import { methods } from "./node_modules/.pnpm/@jimp+plugin-resize@1.6.0/node_modules/@jimp/plugin-resize/dist/esm/index.js";
import { BmpCompression } from "./node_modules/.pnpm/bmp-ts@1.0.9/node_modules/bmp-ts/dist/esm/types.js";
import { ZodError, ZodIssueCode, quotelessJson } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js";
import { DIRTY, EMPTY_PATH, INVALID, OK, ParseStatus, isAborted, isAsync, isDirty, isValid, makeIssue } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js";
import { ZodParsedType, getParsedType, objectUtil, util } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js";
import { en_default } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js";
import { BRAND, NEVER, ZodAny, ZodArray, ZodBigInt, ZodBoolean, ZodBranded, ZodCatch, ZodDate, ZodDefault, ZodDiscriminatedUnion, ZodEffects, ZodEnum, ZodFirstPartyTypeKind, ZodFunction, ZodIntersection, ZodLazy, ZodLiteral, ZodMap, ZodNaN, ZodNativeEnum, ZodNever, ZodNull, ZodNullable, ZodNumber, ZodObject, ZodOptional, ZodPipeline, ZodPromise, ZodReadonly, ZodRecord, ZodSet, ZodString, ZodSymbol, ZodTuple, ZodType, ZodUndefined, ZodUnion, ZodUnknown, ZodVoid, addIssueToContext, anyType, arrayType, bigIntType, booleanType, coerce, custom, dateType, datetimeRegex, discriminatedUnionType, effectsType, enumType, functionType, getErrorMap, instanceOfType, intersectionType, late, lazyType, literalType, mapType, nanType, nativeEnumType, neverType, nullType, nullableType, numberType, objectType, oboolean, onumber, optionalType, ostring, pipelineType, preprocessType, promiseType, recordType, setType, strictObjectType, stringType, symbolType, tupleType, undefinedType, unionType, unknownType, voidType } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js";
import { ZodISODate, ZodISODateTime, ZodISODuration, ZodISOTime } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/classic/iso.js";
import { BIGINT_FORMAT_RANGES, Class, NUMBER_FORMAT_RANGES, allowsEval, captureStackTrace, getParsedType2, primitiveTypes, propertyKeyTypes } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/util.js";
import { AbortException, AnnotationEditorLayer, AnnotationEditorParamsType, AnnotationEditorType, AnnotationEditorUIManager, AnnotationLayer, AnnotationMode, AnnotationType, CSSConstants, ColorPicker, DOMSVGFactory, DrawLayer, GlobalWorkerOptions, InvalidPDFException, OPS, OutputScale, PDFDataRangeTransport, PDFDateString, PDFWorker, PasswordResponses, PermissionFlag, PixelsPerInch, RenderingCancelledException, ResponseException, SignatureExtractor, SupportedImageMimeTypes, TextLayer, TouchManager, Util, VerbosityLevel, XfaLayer, build, isValidExplicitDest, util_FeatureTest, util_ImageKind, version3 } from "./pdf_exports.js";
import { MCP_TOOL_CLIENT_CALL_DURATION_STAT } from "./placement-routing-mcp/dist/call-observability.js";
import { AgentService } from "./proto/dist/generated/agent/v1/agent_service_connect.js";
import { AgentWebSocketCancelRun, AgentWebSocketClientFrame, AgentWebSocketClientHalfClose, AgentWebSocketClientMessage, AgentWebSocketConnectCode, AgentWebSocketConnectError, AgentWebSocketConnectErrorDetail, AgentWebSocketHeader, AgentWebSocketHello, AgentWebSocketProtocolVersion, AgentWebSocketRunAccepted, AgentWebSocketRunEnd, AgentWebSocketRunIdentity, AgentWebSocketRunRejected, AgentWebSocketRunStart, AgentWebSocketServerFrame, AgentWebSocketServerMessage } from "./proto/dist/generated/agent/v1/agent_websocket_pb.js";
import { AiService } from "./proto/dist/generated/aiserver/v1/aiserver_connect.js";
import { AnalyticsService } from "./proto/dist/generated/aiserver/v1/analytics_connect.js";
import { AnalyticsContext, AnalyticsEvent, BatchEvent, BatchRequest, BatchResponse, BootstrapStatsigRequest, BootstrapStatsigResponse, ClientInfo, ClientLogEntry, ClientLogLevel, ClientOS, DownloadIssueTracesRequest, DownloadIssueTracesResponse, EventData, GetFirstWindowStatsigDecisionRequest, GetFirstWindowStatsigDecisionResponse, IngestConversationRequest, IngestConversationResponse, SubmitLogsRequest, SubmitLogsResponse, TrackEventsRequest, TrackEventsResponse, UploadIssueTraceRequest, UploadIssueTraceResponse } from "./proto/dist/generated/aiserver/v1/analytics_pb.js";
import { BackgroundComposerService } from "./proto/dist/generated/aiserver/v1/background_composer_connect.js";
import { BidiService } from "./proto/dist/generated/aiserver/v1/bidi_connect.js";
import { BidiAppendRequest, BidiAppendResponse, BidiPollRequest, BidiPollResponse, BidiRequestId } from "./proto/dist/generated/aiserver/v1/bidi_pb.js";
import { ChatService, ReplayChatService } from "./proto/dist/generated/aiserver/v1/chat_connect.js";
import { CmdKService } from "./proto/dist/generated/aiserver/v1/cmdk_connect.js";
import { DashboardService } from "./proto/dist/generated/aiserver/v1/dashboard_connect.js";
import { FileSyncService } from "./proto/dist/generated/aiserver/v1/filesyncserver_connect.js";
import { HealthService } from "./proto/dist/generated/aiserver/v1/health_connect.js";
import { InferenceService } from "./proto/dist/generated/aiserver/v1/inference_connect.js";
import { PrivacyMode } from "./proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { PrivateInferenceService } from "./proto/dist/generated/aiserver/v1/private_inference_connect.js";
import { RemoteAgentHostPresenceService } from "./proto/dist/generated/aiserver/v1/remote_agent_host_presence_connect.js";
import { GitIndexService, RepositoryService } from "./proto/dist/generated/aiserver/v1/repository_connect.js";
import { AdButton, AdContent, AdHeader, AdSection, AgentLayoutPolicy, AgentTelemetryConfig, AgentUrlConfig, AutoContextConfig, BackgroundComposerConfig, BugbotConfig, BugbotPlanType, ButtonType, ChatConfig, ClientSurface, ClientTracingConfig, ClientUpdateLevel, ClientVersionStatus, CodebaseTelemetryConfig, DevEnvironment, DisplayMode, FolderSizeLimit, GetNewRepoFlowConfigRequest, GetNewRepoFlowConfigResponse, GetServerConfigRequest, GetServerConfigResponse, GitIndexingConfig, GoogleWorkspaceMcpOAuthClient, Http2Config, InAppAd, InAppAdTrigger, IndexingConfig, InferenceProviderWarning, InferenceProviderWarningTrigger, InteractionConfig, MemoryMonitorConfig, MetricsConfig, ModalDisplayConfig, ModelMigration, NewRepoFlowCondition, NewRepoFlowConfig, NewRepoFlowDismissAction, NewRepoFlowFact, NewRepoFlowInstallPluginAction, NewRepoFlowMcpAuthenticateAction, NewRepoFlowPluginAuthTarget, NewRepoFlowProbe, NewRepoFlowProbeInterpreter, NewRepoFlowStep, NewRepoFlowStepButton, NewRepoFlowStepPresentation, NewRepoFlowSubmitFollowupAction, OnboardingConfig, PerformanceEventsConfig, RemoteAuthority, RemoteConnectionType, ResolveNewRepoFlowBackendProbeRequest, ResolveNewRepoFlowBackendProbeResponse, RetrievalKeepAliveConfig, RunTerminalServerConfig, ScmConnectAdConnectionState, ScmConnectAdContext, ScmConnectAdProvider, TerminalTipConfig, TraceConfig, UpdateConfig, UpdateConfig_UpdateMode } from "./proto/dist/generated/aiserver/v1/server_config_pb.js";
import { ChatRequestEventService, MetricsService, PerformanceEventService, ProfilingService, ToolCallEventService, TraceService, WebProfilingService } from "./proto/dist/generated/aiserver/v1/telemetry_connect.js";
import { CapturedProfile, CapturedWebProfile, ChatRequestTelemetryEvent, Interaction, InteractionType, PerformanceEvent, PerformanceEventType, PerformanceMetric, ProfileKind, ReportInlineActionRequest, ReportInlineActionResponse, ReportMetricsRequest, ReportMetricsRequest_Metric, ReportMetricsRequest_NamedMetric, ReportMetricsResponse, ScriptTiming, SpanKind2, Status2, Status_StatusCode, SubmitChatRequestEventsRequest, SubmitChatRequestEventsResponse, SubmitInteractionWindowRequest, SubmitInteractionWindowResponse, SubmitPerformanceEventsRequest, SubmitPerformanceEventsResponse, SubmitProfileRequest, SubmitProfileResponse, SubmitSpansRequest, SubmitSpansResponse, SubmitToolCallEventsRequest, SubmitToolCallEventsResponse, SystemMetadata, ToolCallTelemetryEvent, TraceLink, TraceSpan } from "./proto/dist/generated/aiserver/v1/telemetry_pb.js";
import { UploadService } from "./proto/dist/generated/aiserver/v1/uploadserver_connect.js";
import { AzureState, BM25Chunk, BedrockState, ChatExternalLink, ChatQuote, ClientAction, CloudAgentModelSelection, CloudAgentModelSelection_ParameterValue, CmdKDebugInfo, CmdKDebugInfo_CppFileDiffHistory, CmdKDebugInfo_OpenEditor, CmdKDebugInfo_PastThought, CmdKDebugInfo_UnsavedFiles, CmdKExternalLink, CodeBlock, CodeBlock_Signatures, CodeChunk, CodeChunk_Intent, CodeChunk_SummarizationStrategy, CommitDiffString, CommitNote, CommitNoteWithEmbeddings, ComposerExternalLink, ComputeLinesDiffOriginalAndModified, ConfigureSpendLimitAction, CrossExtHostHeader, CrossExtHostHeaders, CurrentFileInfo, CurrentFileInfo_NotebookCell, CursorPosition, CursorRange, CursorRule2, CustomErrorDetails, DashboardAction, DataframeInfo, DataframeInfo_Column, DetailedLine, Diagnostic2, Diagnostic_DiagnosticSeverity, Diagnostic_RelatedInformation, DocumentSymbol, DocumentSymbolWithText, DocumentSymbol_Range, DocumentSymbol_SymbolKind, EmbeddingModel, EnvironmentInfo, ErrorAnalyticsMetadata, ErrorButton, ErrorDetails, ErrorDetails_Error, ExplicitContext, FeatureType, File2, FileDiff, FileDiff_Chunk, FileGit, FullCommitNotes, GetDiffRequest, GetDiffRequest_OutputFormat, GetDiffResponse, GetDiffResponse_SubmoduleDiff, GitCommit, GitDiff, GitDiff_DiffType, HoverDetails, ImageProto, ImageProto_Dimension, LineRange, Lint, LintSeverity, LinterError, LinterErrors, LinterErrorsWithoutFileContents, MCPInstructions, ModelDetails, ModelInfo, PlanChoice, PureMessage, PureMessage_MessageType, RCPCallFrame, RCPChatMessage, RCPLogEntry, RCPMessage, RCPStackTrace, RCPUIElementPicked, ReloadWindowAction, SelectionWithOrientation, SimpleFileChunk, SimpleRange, SimpleUnaryCrossExtensionHostMessage, SimplestRange, SwitchModelAction, SwitchModelAction_ModelParameterValue, UpgradeAction, UpgradeChoice, UriComponents, UrlAction, VscodeCPUProperties, VscodeOSProperties, VscodeOSStatistics } from "./proto/dist/generated/aiserver/v1/utils_pb.js";
import { OriginService } from "./proto/dist/generated/origin/v1/origin_connect.js";
import { BashState } from "./shell-exec/dist/bash.js";
import { INSECURE_NONE_SANDBOX_POLICY } from "./shell-exec/dist/index.js";
import { NaiveTerminalExecutor } from "./shell-exec/dist/naive.js";
import { OutputSuppressionController, SHELL_OUTPUT_SUPPRESSED_NOTICE } from "./shell-exec/dist/output-suppression.js";
import { PowerShellState } from "./shell-exec/dist/powershell.js";
import { SandboxUnsupportedError } from "./shell-exec/dist/sandbox/sandbox.js";
import { KnownShellExecutor } from "./shell-exec/dist/types.js";
import { ZshState } from "./shell-exec/dist/zsh.js";
import { init_credential_manager } from "./src/credential-manager.ts";
import { init_daemon } from "./src/daemon.ts";
import { init_listen } from "./src/listen.ts";
import { DAEMON_AGENT_HOST_SURFACE, DaemonMetrics, init_daemon_metrics } from "./src/metrics/daemon-metrics.ts";
import { init_private_inference_enablement } from "./src/private-inference-enablement.ts";
import { init_session_storage } from "./src/session-storage.ts";
import { UNIX_SOCKET_PARENT_MODE, init_unix_socket } from "./src/unix-socket.ts";
import { setErrorMap } from "./external_exports.js";
import { agentHostModuleChannel, agentHostModuleIdentity, agentHostModuleMetricTags, agentHostModuleServing, agentHostModuleTags, allocateUniqueSideChatName, appendCodeTourStorageKeyFragments, appendTourMarkdownBlock, applyMcpOAuthProviderAuthorizationParams, applySideChatSeedWorkingStateResets, attachTourArtifact, breakDownPrCodeTourSections, buildAutomationScope, buildChatNamePrompt, buildChildTurnRouteId, buildCloudAgentStartPayloadTooLargeUserFacingMessage, buildGithubAppInstallUrl, buildGithubAppManageUrl, buildGithubPullRequestReviewPath, buildGrokBotAgentStoreSourceId, buildGrokBotDesktopDownloadUrl, buildInteractiveChildRouteId, buildMcpOAuthClientMetadataDocument, buildMcpOAuthDesktopCallbackUrl, buildOfferCreditGrantPlan, buildOriginPrIdentityKey, buildPeriodicCreditGrantSchedule, buildResourceChildInboxReminder, buildSandBoxNoVncUrl, buildSandSupervisorCommand, buildScmAuthFailedUserFacingMessage, buildScmRefNotFoundUserFacingMessage, buildSideChatNameFromPrompt, buildStartupCreditGrantPlan, buildStartupPoolGrantPlan, buildTeamAgentStoreSourceId, buildUniqueSideChatNameFromPrompt, buildUserAgentStoreSourceId, buildYcStartupMonthlyCreditGrantSchedule, calculateBackoffDelay, chatNameReminder, chatNameSystemPrompt, clampCodeTourFileDiffsToHunks, cloudAgentWorkspaceRootUriPath, cloudServerHasPluginId, cloudServerIsTeamScoped, cloudServerMatchesRuntimeSourceHint, codeTourDiffHunksFromGitFiles, codeTourGenerationIdentityFeatureConfiguration, codeTourStorageKeyVariantFragments, codeTourTermDefinitionHref, codeTourTermDefinitionLinesFromGitFiles, codeTourTermNameKey, coerceSandHostBundleChannel, collapseOriginRepoLabelValue, countGrantDaysFromDateRange, countGrantMonthsFromDateRange, countGrantPeriodsFromDateRange, countGrantWeeksFromDateRange, cursorScmMcpServerIdentifier, cursorScmProviderForMcpServerIdentifier, deriveRepoLabelValueFromUrl, deriveSideChatComposerBcId, desktopBridgeDiscoveryDir, detectEnvironmentSetupTaskFromPrompt, dropRestartedCodeTourDraft, eligibleMcpOAuthAppTarget, environmentBuildFailureCategoryForCode, expandPinprickCodeTourFileDiffs, extractAgentStoreMountIdsFromPromptText, extractTypedTextFromTipTapRichText, filterByEnvironment, findCloudMcpServerByRuntimeName, findCloudMcpServersByNormalizedName, foldOriginRepoLabelValue, foldUnanchoredCodeTourSections, formatAgentStorePathForDisplay, formatCloudMcpAuthServerLabel, formatCloudMcpRuntimeIdentity, formatCodeTourTermOpenTag, formatMcpAuthPromptedReason, formatPlacementConsentTitle, formatPrCodeTourSectionSummary, formatSideChatBoundaryUserMessageText, getAgentStorePathDisplayParts, getCanonicalMcpOAuthDesktopRedirectUris, getCanonicalMcpOAuthRedirectUris, getCloudAgentStreamErrorPresentation, getCloudAgentTerminalErrorRecovery, getCodeTourRecordingSource, getCompetingStartupOfferProductIdPrefixes, getEnvSetupComposerName, getEnvironmentSetupTaskPrompt, getGithubOAuthClientIdForEnvironment, getJobRoleSlug, getMcpOAuthProviderPolicy, getMcpOAuthProviderPolicyForUrl, getOfferGrantProductIdPrefix, getOfferTemplate, getOfferTemplateCoupons, getOfferTemplateStartupOfferType, getPinnedWorkerOfflineTitle, getPrivateWorkerRepositoryUrl, getPublicArtifactContentDisposition, getRepoNameFromUrl, getRestMcpProviderIdForUrl, getRestMcpProviderIdForUrlPath, getScmProviderDisplayName, getSideChatSkipLeadingTurns, getStartupCreditGrantProductIdPrefix, getStartupOfferConfig, getStartupOfferCoupons, getStartupOfferTypeFromReferralDiscountId, getStartupOfferV2TemplateKeyFromReferralDiscountId, getTeamPromoSourceFromDiscountId, getUnsupportedConversationTurnFallbackText, gitShaFromSandBoxImageTag, gitSupportsNoWriteFetchHead, grokBotDesktopPlatformFromProcess, grokBotGithubConnectCallbackUrlForState, gtmMcpOmitsResourceIndicator, hasAutomationScope, hasCursorCommitAttribution, hasNonEmptyToolAllowlist, hasParseableCodeTourFileAnchor, hasPublicArtifactOrigin, hasRequiredTeamApiKeyScope, hasRootProjectIdentity, imageTagFromRegistryReference, inboxLeafTimestamp, inferToolAllowlistMode, inferTourArtifactKind, insertPrCodeTourSectionMedia, isAccountOlderThan, isAgentHostModuleMetricTag, isAgentStoreDashboardMountUrl, isAgentStoreId, isAgentStorePrincipalMountName, isAgentStoreShareMountKey, isAgentStoreSourceId, isAskQuestionAutoAnswerReason, isAutomationScope, isChildTurnInboxRelPath, isCloudAgentStartPayloadTooLargeUserFacingMessage, isCloudAgentStoreId, isCloudAgentStreamErrorDisplayable, isCloudAgentWorkspaceRootUriPath, isCodeTourArtifactUrl, isCodeTourSelfAuditNote, isCodeTourStorageKeyVariantFragment, isCodeTourTermCloseTag, isCodeTourVariantName, isComputerUseGuidedSkill, isCursorCoAuthor, isCustomCodeTourStorageKey, isDesktopThreadId, isDirectDesktopThreadRef, isDurablePoolRepoLess, isEmptyRepositoryErrorMessage, isEmptyRepositoryUserFacingMessage, isEntraAuthorizationUrl, isEnvironmentBuildFailedUserFacingMessage, isEnvironmentEligible, isErrorWithUserFacingErrorMessage, isFeatureOffUnderPrivateInference, isGitHubIpAllowlistUserFacingMessage, isHeadlessCodeTourMarkdown, isInAudience, isInteractiveChildInboxLeaf, isInteractiveChildRouteId, isKnownGitHostingDomain, isLegacyReviewCursorHost, isLoopbackHttpUri, isMcpAuthPromptedReason, isMcpOAuthPortalReturnPath, isMcpOAuthPostAuthReturnUrl, isNonRetryableProviderErrorCode, isOfferTemplateKey, isOrgApiKeyScope, isOriginMcpBuiltinTarget, isOriginMcpServerUrl, isPlayableCodeTourRecordingPath, isPrimaryIntroFireType, isPrincipalAgentStoreSourceId, isPrivateWorkerCapacityUserFacingMessage, isPrivateWorkerDisconnectedUserFacingMessage, isProactiveType, isProjectSendMessageEnabled, isRecentlyCreatedUser, isRecordedProactivityFireType, isRepoLessPoolFormSelection, isReservedAgentStorePathSegment, isRootProjectDetails, isSafeCodeTourTermPath, isSafeStagedBundlePath, isSandDesktopSupervisionEnabled, isSandHostBundleChannel, isSandHostBundlePromotableChannel, isSandHostUpgradeAvailable, isScmAuthFailedUserFacingMessage, isScmCheckoutFailedUserFacingMessage, isScmRefNotFoundUserFacingMessage, isScpStyleGitUrl, isServiceTokenCatalogScopeForOwner, isServiceTokenOrganizationScope, isServiceTokenTeamScope, isSideChatBoundaryMessageId, isSideChatPlaceholderName, isSlackChannelPostId, isStaleCodeTourPromptRevision, isStaticTeamApiKeyScope, isSubscriptionResourceChildInboxRelPath, isSubscriptionResourceChildRouteId, isTeamApiKeyScope, isToolAllowlistMode, isUnusableCodeTourMarkdown, isValidBareUuid, isValidManagedEnvVarName, isWithinInAppAdNewUserBlackout, listOfferTemplates, listPrivateInferenceOffFeatureRpcs, looksLikeAgentStoreDisplayPath, matchAgentStorePathForDisplay, mcpOAuthLoopbackCallbackUrlForPort, mcpOAuthLoopbackRedirectUrl, mcpOAuthServerRequiresIpv4Loopback, mcpOAuthStateTargetUrl, mcpOAuthStateWithoutLoopbackPort, mcpResourceUrlValidatorForUrl, normalizeAutoSpilloverApiTitle, normalizeAutoSpilloverAutoBeyondLimitDescription, normalizeAutoSpilloverAutoDescription, normalizeAutoSpilloverAutoTitle, normalizeCodeTourTermGloss, normalizeEnvironmentSetupMaxResumeAgeMs, normalizeGitCommitSha, orgApiKeyHasScope, orgApiKeyScopeImplies, originPrIdentityHostForLegacyReviewHost, parseAgentHostLoop, parseAgentHostServingModule, parseAgentHostTurnRuntime, parseAgentStoreMountInput, parseAskQuestionAutoAnswerIdentity, parseBridgeRequest, parseCloudMcpRuntimeIdentity, parseCodeTourTermOpenTag, parseDiscoveryFile, parseGeneratedChatName, parseGrokBotAgentStoreSourceId, parseMcpAuthPromptedInteractionId, parseOriginCodeTourArtifactContentUrl, parsePlacementConsentMachineLabel, parsePrivateWorkerRepoScopeFromUrl, parseRepoNameFromUrl, parseRestMcpProviderMetadataFromPrm, parseRestMcpScmToolError, parseSandBoxParkMode, parseSandHostBundleDigest, parseSandSupervisorStatus, parseTeamAgentStoreSourceId, parseThreadSummary, parseUserAgentStoreSourceId, patchTourSection, pickUniqueCloudMcpMatch, portalMcpOAuthCallbackUrlForWebsite, proactivityWakeAllowsSilence, providerFacingMcpOAuthRedirectUri, pruneUnanchoredCodeTourSteps, repairCodeTourOverviewOpener, resolveAgentStoreMountTarget, resolveCloudOnboardingAudience, resolveCodeTourArtifactSrc, resolveCodeTourTermDefinitionLine, resolveCurrentPrCodeTour, resolveEnvSetupComposerName, resolveLocalAgentHeaders, resolveMcpOAuthScopeOverride, resolvePluginBrandIconSource, resolvePluginBrandIconSources, resourceChildInboxRelPath, retargetMcpOAuthStateToLoopbackPort, rewriteScpGitUrl, sandBoxFlavorFromNamespace, sandBoxNoVncHibernationBounds, sandHostBundleDigestKey, sandHostBundleTarballKey, sandHostBundleVersionFileName, sandHostBundleVersionKey, selectRegisteredMcpOAuthRedirectUris, serializeSandSupervisorCommand, serviceTokenCatalogScopeGroups, serviceTokenCatalogScopes, shouldForceHostUpgrade, shouldInjectSideChatBoundary, shouldRegenerateStaleCodeTour, shouldShowBackgroundComposerFollowupRetryHint, shouldShowEnvironmentSetupCta, sideChatBoundaryMessageId, sideChatNameSystemPrompt, splitRepoLabelValue, stripAgentStorePathLineSuffix, stripCodeTourSelfAuditNotes, stripCodeTourTerms, stripConsentPrompt, stripMcpOAuthStateTarget, truncateUserRequestForChatName, validateBoxSecretKey, validateCloudMcpAuthorizationUrl, validateMcpProtectedResourceUrl, withMcpOAuthStateTarget } from "./utils_pb_exports.js";
import { collectPrivateInferenceEnvKeyNames, createMemoryCredentialManager, cursorAgentsDir, defaultUnixListenAddress, fail, formatListenAddress, getTracer, homeDirFromEnv, isChildSpanSuppressed, isPrivateInferenceShorthandRequested, nonEmpty, parseListenAddress, parsePrivateInferenceCatalog, readDaemonTeamMembership, resolvePrivateInferenceModel, teamEnablementAtActivation, teamEnablementForTurn, withSpan } from "./dashboard_connect_exports.js";
import { allowsAgentWebSocketSequentialReuse, validateAgentWebSocketClientFrame, validateAgentWebSocketConnectError, validateAgentWebSocketHello, validateAgentWebSocketRunIdentity, validateAgentWebSocketServerFrame } from "./agent_websocket_pb_exports.js";
import { configureRipgrepPath, configureSandboxPrereqs2, createIgnoreMapping, createNaiveTerminalExecutor, getHardcodedAllowedReadPaths, getLastSandboxFailureReason, getPowerShellExecutable, getRipgrepBinaryPath, getSandboxPolicyType, getSandboxProjectDir, isAllowAllNetworkByPolicy, isHardcodedWriteProtected, isNetworkEnabledByPolicy, isRipgrepConfigured, isSandboxSupported, loadSandboxPolicyFromFileOrUndefined, mergeAdditionalReadPaths, mergeNetworkPolicies, mergePathsIntersection, mergePathsUnion, mergeReadBoundary, networkAllowAllPolicy, networkDisabledPolicy, parseSandboxPolicyJson, primeSandboxSupport, resolvePolicyPaths, resolveRipgrepFromPath, resolveSandboxPolicyForWorkspace, spawnInSandbox, spawnWithSignal, withConfiguredRipgrepEnv } from "./bidi_connect_exports.js";
import { createDefaultTerminalExecutor, getShellExecutablePath, getSuggestedShell } from "./dist_exports2.js";
import { add, composite, darken2, difference, dstOver, exclusion, getExifOrientation, hardLight, lighten2, multiply, overlay, screen, srcOver } from "./composite_modes_exports.js";
import { createJimp } from "./esm_exports.js";
import { png } from "./esm_exports2.js";
import { jpeg } from "./esm_exports3.js";
import { bmp, msBmp } from "./esm_exports4.js";
import { gif } from "./esm_exports6.js";
import { tiff } from "./esm_exports7.js";
import { buildMcpSandboxPolicy } from "./esm_exports8.js";
import { aborted, assert2, assertEqual, assertIs, assertNever, assertNotEqual, assignProp, cached, cleanEnum, cleanRegex, clone2, createTransparentProxy, defineLazy, esc, escapeRegex, extend, finalizeIssue, floatSafeRemainder2, getElementAtPath, getEnumValues, getLengthableOrigin, getSizableOrigin, isObject3, isPlainObject, issue, joinValues, jsonStringifyReplacer, merge3, normalizeParams, nullish, numKeys, omit, optionalKeys, partial, pick, prefixIssues, promiseAllObject, randomString, required, stringifyPrimitive, unwrapMessage } from "./util_exports.js";
import { date2, datetime2, duration2, time2 } from "./iso_exports.js";
import { bigint2, boolean3, date3, number3, string3 } from "./coerce_exports.js";
import { MathClamp, applyOpacity, createValidAbsoluteUrl, fetchData, findContrastColor, getDocument, getFilenameFromUrl, getPdfFilenameFromUrl, getRGB, getUuid, getXfaPageViewport, isDataScheme, isPdfFile, noContextMenu, normalizeUnicode, renderRichText, setLayerDimensions, shadow, stopEvent, updateUrlHash } from "./pdf_exports.js";
import { extractPdfTextWorker } from "./pdf_worker_exports.js";
import { destroyWorkerPools, resolvePrivateInferenceCatalog } from "./tree_chunk_napi_exports.js";
import { createPrivateInferenceLoopClient, resolveDaemonStorageDir } from "./private_inference_loop_exports.js";
import { createAgentHostExec, createCredentialBoundTeamSettingsService, createDeferredConnectTransport, createEmptyTeamSettingsService2, createHeadlessDecisionProvider, createHeadlessDiskHookExecutor, createHeadlessHooksOverlay, createHeadlessMcpGrantStore, createHeadlessMcpLease, createHeadlessSettingSourcesLoader, createHostedMcpRoutingProvider, createTurnRuntimeCallerResolver, hasSettingSource, headlessMcpDefinitionRef, isHeadlessWorkspaceTrusted, isNoAmbientSettings, listHeadlessMcpDefinitions, normalizeHeadlessDiskSettingSources, normalizeSettingSources, runAgentDataCleanupIfDue, scheduleAgentDataCleanup } from "./daemon_metrics_exports.js";
import { activate, createManagedToolClient, generationContext, hostLoggerBackend, hostMetricsBackend } from "./entry_exports.js";
import { createPrivateInferenceCreateAgentHost, validateAgentHarness } from "./local_loop_exports.js";
import { createStitchedAgentHost, execWorkspacePathsFromCatalog, withForwardedLocalLoopGate, wrapHostWithSessionExecRegistry } from "./stitch_exports.js";
import { startAgentHostDaemon } from "./daemon_exports.js";
var external_exports = {};
Object.defineProperty(external_exports, "BRAND", {
    enumerable: true,
    get: ()=>BRAND
});
Object.defineProperty(external_exports, "DIRTY", {
    enumerable: true,
    get: ()=>DIRTY
});
Object.defineProperty(external_exports, "EMPTY_PATH", {
    enumerable: true,
    get: ()=>EMPTY_PATH
});
Object.defineProperty(external_exports, "INVALID", {
    enumerable: true,
    get: ()=>INVALID
});
Object.defineProperty(external_exports, "NEVER", {
    enumerable: true,
    get: ()=>NEVER
});
Object.defineProperty(external_exports, "OK", {
    enumerable: true,
    get: ()=>OK
});
Object.defineProperty(external_exports, "ParseStatus", {
    enumerable: true,
    get: ()=>ParseStatus
});
Object.defineProperty(external_exports, "Schema", {
    enumerable: true,
    get: ()=>ZodType
});
Object.defineProperty(external_exports, "ZodAny", {
    enumerable: true,
    get: ()=>ZodAny
});
Object.defineProperty(external_exports, "ZodArray", {
    enumerable: true,
    get: ()=>ZodArray
});
Object.defineProperty(external_exports, "ZodBigInt", {
    enumerable: true,
    get: ()=>ZodBigInt
});
Object.defineProperty(external_exports, "ZodBoolean", {
    enumerable: true,
    get: ()=>ZodBoolean
});
Object.defineProperty(external_exports, "ZodBranded", {
    enumerable: true,
    get: ()=>ZodBranded
});
Object.defineProperty(external_exports, "ZodCatch", {
    enumerable: true,
    get: ()=>ZodCatch
});
Object.defineProperty(external_exports, "ZodDate", {
    enumerable: true,
    get: ()=>ZodDate
});
Object.defineProperty(external_exports, "ZodDefault", {
    enumerable: true,
    get: ()=>ZodDefault
});
Object.defineProperty(external_exports, "ZodDiscriminatedUnion", {
    enumerable: true,
    get: ()=>ZodDiscriminatedUnion
});
Object.defineProperty(external_exports, "ZodEffects", {
    enumerable: true,
    get: ()=>ZodEffects
});
Object.defineProperty(external_exports, "ZodEnum", {
    enumerable: true,
    get: ()=>ZodEnum
});
Object.defineProperty(external_exports, "ZodError", {
    enumerable: true,
    get: ()=>ZodError
});
Object.defineProperty(external_exports, "ZodFirstPartyTypeKind", {
    enumerable: true,
    get: ()=>ZodFirstPartyTypeKind
});
Object.defineProperty(external_exports, "ZodFunction", {
    enumerable: true,
    get: ()=>ZodFunction
});
Object.defineProperty(external_exports, "ZodIntersection", {
    enumerable: true,
    get: ()=>ZodIntersection
});
Object.defineProperty(external_exports, "ZodIssueCode", {
    enumerable: true,
    get: ()=>ZodIssueCode
});
Object.defineProperty(external_exports, "ZodLazy", {
    enumerable: true,
    get: ()=>ZodLazy
});
Object.defineProperty(external_exports, "ZodLiteral", {
    enumerable: true,
    get: ()=>ZodLiteral
});
Object.defineProperty(external_exports, "ZodMap", {
    enumerable: true,
    get: ()=>ZodMap
});
Object.defineProperty(external_exports, "ZodNaN", {
    enumerable: true,
    get: ()=>ZodNaN
});
Object.defineProperty(external_exports, "ZodNativeEnum", {
    enumerable: true,
    get: ()=>ZodNativeEnum
});
Object.defineProperty(external_exports, "ZodNever", {
    enumerable: true,
    get: ()=>ZodNever
});
Object.defineProperty(external_exports, "ZodNull", {
    enumerable: true,
    get: ()=>ZodNull
});
Object.defineProperty(external_exports, "ZodNullable", {
    enumerable: true,
    get: ()=>ZodNullable
});
Object.defineProperty(external_exports, "ZodNumber", {
    enumerable: true,
    get: ()=>ZodNumber
});
Object.defineProperty(external_exports, "ZodObject", {
    enumerable: true,
    get: ()=>ZodObject
});
Object.defineProperty(external_exports, "ZodOptional", {
    enumerable: true,
    get: ()=>ZodOptional
});
Object.defineProperty(external_exports, "ZodParsedType", {
    enumerable: true,
    get: ()=>ZodParsedType
});
Object.defineProperty(external_exports, "ZodPipeline", {
    enumerable: true,
    get: ()=>ZodPipeline
});
Object.defineProperty(external_exports, "ZodPromise", {
    enumerable: true,
    get: ()=>ZodPromise
});
Object.defineProperty(external_exports, "ZodReadonly", {
    enumerable: true,
    get: ()=>ZodReadonly
});
Object.defineProperty(external_exports, "ZodRecord", {
    enumerable: true,
    get: ()=>ZodRecord
});
Object.defineProperty(external_exports, "ZodSchema", {
    enumerable: true,
    get: ()=>ZodType
});
Object.defineProperty(external_exports, "ZodSet", {
    enumerable: true,
    get: ()=>ZodSet
});
Object.defineProperty(external_exports, "ZodString", {
    enumerable: true,
    get: ()=>ZodString
});
Object.defineProperty(external_exports, "ZodSymbol", {
    enumerable: true,
    get: ()=>ZodSymbol
});
Object.defineProperty(external_exports, "ZodTransformer", {
    enumerable: true,
    get: ()=>ZodEffects
});
Object.defineProperty(external_exports, "ZodTuple", {
    enumerable: true,
    get: ()=>ZodTuple
});
Object.defineProperty(external_exports, "ZodType", {
    enumerable: true,
    get: ()=>ZodType
});
Object.defineProperty(external_exports, "ZodUndefined", {
    enumerable: true,
    get: ()=>ZodUndefined
});
Object.defineProperty(external_exports, "ZodUnion", {
    enumerable: true,
    get: ()=>ZodUnion
});
Object.defineProperty(external_exports, "ZodUnknown", {
    enumerable: true,
    get: ()=>ZodUnknown
});
Object.defineProperty(external_exports, "ZodVoid", {
    enumerable: true,
    get: ()=>ZodVoid
});
Object.defineProperty(external_exports, "addIssueToContext", {
    enumerable: true,
    get: ()=>addIssueToContext
});
Object.defineProperty(external_exports, "any", {
    enumerable: true,
    get: ()=>anyType
});
Object.defineProperty(external_exports, "array", {
    enumerable: true,
    get: ()=>arrayType
});
Object.defineProperty(external_exports, "bigint", {
    enumerable: true,
    get: ()=>bigIntType
});
Object.defineProperty(external_exports, "boolean", {
    enumerable: true,
    get: ()=>booleanType
});
Object.defineProperty(external_exports, "coerce", {
    enumerable: true,
    get: ()=>coerce
});
Object.defineProperty(external_exports, "custom", {
    enumerable: true,
    get: ()=>custom
});
Object.defineProperty(external_exports, "date", {
    enumerable: true,
    get: ()=>dateType
});
Object.defineProperty(external_exports, "datetimeRegex", {
    enumerable: true,
    get: ()=>datetimeRegex
});
Object.defineProperty(external_exports, "defaultErrorMap", {
    enumerable: true,
    get: ()=>en_default
});
Object.defineProperty(external_exports, "discriminatedUnion", {
    enumerable: true,
    get: ()=>discriminatedUnionType
});
Object.defineProperty(external_exports, "effect", {
    enumerable: true,
    get: ()=>effectsType
});
Object.defineProperty(external_exports, "enum", {
    enumerable: true,
    get: ()=>enumType
});
Object.defineProperty(external_exports, "function", {
    enumerable: true,
    get: ()=>functionType
});
Object.defineProperty(external_exports, "getErrorMap", {
    enumerable: true,
    get: ()=>getErrorMap
});
Object.defineProperty(external_exports, "getParsedType", {
    enumerable: true,
    get: ()=>getParsedType
});
Object.defineProperty(external_exports, "instanceof", {
    enumerable: true,
    get: ()=>instanceOfType
});
Object.defineProperty(external_exports, "intersection", {
    enumerable: true,
    get: ()=>intersectionType
});
Object.defineProperty(external_exports, "isAborted", {
    enumerable: true,
    get: ()=>isAborted
});
Object.defineProperty(external_exports, "isAsync", {
    enumerable: true,
    get: ()=>isAsync
});
Object.defineProperty(external_exports, "isDirty", {
    enumerable: true,
    get: ()=>isDirty
});
Object.defineProperty(external_exports, "isValid", {
    enumerable: true,
    get: ()=>isValid
});
Object.defineProperty(external_exports, "late", {
    enumerable: true,
    get: ()=>late
});
Object.defineProperty(external_exports, "lazy", {
    enumerable: true,
    get: ()=>lazyType
});
Object.defineProperty(external_exports, "literal", {
    enumerable: true,
    get: ()=>literalType
});
Object.defineProperty(external_exports, "makeIssue", {
    enumerable: true,
    get: ()=>makeIssue
});
Object.defineProperty(external_exports, "map", {
    enumerable: true,
    get: ()=>mapType
});
Object.defineProperty(external_exports, "nan", {
    enumerable: true,
    get: ()=>nanType
});
Object.defineProperty(external_exports, "nativeEnum", {
    enumerable: true,
    get: ()=>nativeEnumType
});
Object.defineProperty(external_exports, "never", {
    enumerable: true,
    get: ()=>neverType
});
Object.defineProperty(external_exports, "null", {
    enumerable: true,
    get: ()=>nullType
});
Object.defineProperty(external_exports, "nullable", {
    enumerable: true,
    get: ()=>nullableType
});
Object.defineProperty(external_exports, "number", {
    enumerable: true,
    get: ()=>numberType
});
Object.defineProperty(external_exports, "object", {
    enumerable: true,
    get: ()=>objectType
});
Object.defineProperty(external_exports, "objectUtil", {
    enumerable: true,
    get: ()=>objectUtil
});
Object.defineProperty(external_exports, "oboolean", {
    enumerable: true,
    get: ()=>oboolean
});
Object.defineProperty(external_exports, "onumber", {
    enumerable: true,
    get: ()=>onumber
});
Object.defineProperty(external_exports, "optional", {
    enumerable: true,
    get: ()=>optionalType
});
Object.defineProperty(external_exports, "ostring", {
    enumerable: true,
    get: ()=>ostring
});
Object.defineProperty(external_exports, "pipeline", {
    enumerable: true,
    get: ()=>pipelineType
});
Object.defineProperty(external_exports, "preprocess", {
    enumerable: true,
    get: ()=>preprocessType
});
Object.defineProperty(external_exports, "promise", {
    enumerable: true,
    get: ()=>promiseType
});
Object.defineProperty(external_exports, "quotelessJson", {
    enumerable: true,
    get: ()=>quotelessJson
});
Object.defineProperty(external_exports, "record", {
    enumerable: true,
    get: ()=>recordType
});
Object.defineProperty(external_exports, "set", {
    enumerable: true,
    get: ()=>setType
});
Object.defineProperty(external_exports, "setErrorMap", {
    enumerable: true,
    get: ()=>setErrorMap
});
Object.defineProperty(external_exports, "strictObject", {
    enumerable: true,
    get: ()=>strictObjectType
});
Object.defineProperty(external_exports, "string", {
    enumerable: true,
    get: ()=>stringType
});
Object.defineProperty(external_exports, "symbol", {
    enumerable: true,
    get: ()=>symbolType
});
Object.defineProperty(external_exports, "transformer", {
    enumerable: true,
    get: ()=>effectsType
});
Object.defineProperty(external_exports, "tuple", {
    enumerable: true,
    get: ()=>tupleType
});
Object.defineProperty(external_exports, "undefined", {
    enumerable: true,
    get: ()=>undefinedType
});
Object.defineProperty(external_exports, "union", {
    enumerable: true,
    get: ()=>unionType
});
Object.defineProperty(external_exports, "unknown", {
    enumerable: true,
    get: ()=>unknownType
});
Object.defineProperty(external_exports, "util", {
    enumerable: true,
    get: ()=>util
});
Object.defineProperty(external_exports, "void", {
    enumerable: true,
    get: ()=>voidType
});
var utils_pb_exports = {};
Object.defineProperty(utils_pb_exports, "AzureState", {
    enumerable: true,
    get: ()=>AzureState
});
Object.defineProperty(utils_pb_exports, "BM25Chunk", {
    enumerable: true,
    get: ()=>BM25Chunk
});
Object.defineProperty(utils_pb_exports, "BedrockState", {
    enumerable: true,
    get: ()=>BedrockState
});
Object.defineProperty(utils_pb_exports, "ChatExternalLink", {
    enumerable: true,
    get: ()=>ChatExternalLink
});
Object.defineProperty(utils_pb_exports, "ChatQuote", {
    enumerable: true,
    get: ()=>ChatQuote
});
Object.defineProperty(utils_pb_exports, "ClientAction", {
    enumerable: true,
    get: ()=>ClientAction
});
Object.defineProperty(utils_pb_exports, "CloudAgentModelSelection", {
    enumerable: true,
    get: ()=>CloudAgentModelSelection
});
Object.defineProperty(utils_pb_exports, "CloudAgentModelSelection_ParameterValue", {
    enumerable: true,
    get: ()=>CloudAgentModelSelection_ParameterValue
});
Object.defineProperty(utils_pb_exports, "CmdKDebugInfo", {
    enumerable: true,
    get: ()=>CmdKDebugInfo
});
Object.defineProperty(utils_pb_exports, "CmdKDebugInfo_CppFileDiffHistory", {
    enumerable: true,
    get: ()=>CmdKDebugInfo_CppFileDiffHistory
});
Object.defineProperty(utils_pb_exports, "CmdKDebugInfo_OpenEditor", {
    enumerable: true,
    get: ()=>CmdKDebugInfo_OpenEditor
});
Object.defineProperty(utils_pb_exports, "CmdKDebugInfo_PastThought", {
    enumerable: true,
    get: ()=>CmdKDebugInfo_PastThought
});
Object.defineProperty(utils_pb_exports, "CmdKDebugInfo_UnsavedFiles", {
    enumerable: true,
    get: ()=>CmdKDebugInfo_UnsavedFiles
});
Object.defineProperty(utils_pb_exports, "CmdKExternalLink", {
    enumerable: true,
    get: ()=>CmdKExternalLink
});
Object.defineProperty(utils_pb_exports, "CodeBlock", {
    enumerable: true,
    get: ()=>CodeBlock
});
Object.defineProperty(utils_pb_exports, "CodeBlock_Signatures", {
    enumerable: true,
    get: ()=>CodeBlock_Signatures
});
Object.defineProperty(utils_pb_exports, "CodeChunk", {
    enumerable: true,
    get: ()=>CodeChunk
});
Object.defineProperty(utils_pb_exports, "CodeChunk_Intent", {
    enumerable: true,
    get: ()=>CodeChunk_Intent
});
Object.defineProperty(utils_pb_exports, "CodeChunk_SummarizationStrategy", {
    enumerable: true,
    get: ()=>CodeChunk_SummarizationStrategy
});
Object.defineProperty(utils_pb_exports, "CommitDiffString", {
    enumerable: true,
    get: ()=>CommitDiffString
});
Object.defineProperty(utils_pb_exports, "CommitNote", {
    enumerable: true,
    get: ()=>CommitNote
});
Object.defineProperty(utils_pb_exports, "CommitNoteWithEmbeddings", {
    enumerable: true,
    get: ()=>CommitNoteWithEmbeddings
});
Object.defineProperty(utils_pb_exports, "ComposerExternalLink", {
    enumerable: true,
    get: ()=>ComposerExternalLink
});
Object.defineProperty(utils_pb_exports, "ComputeLinesDiffOriginalAndModified", {
    enumerable: true,
    get: ()=>ComputeLinesDiffOriginalAndModified
});
Object.defineProperty(utils_pb_exports, "ConfigureSpendLimitAction", {
    enumerable: true,
    get: ()=>ConfigureSpendLimitAction
});
Object.defineProperty(utils_pb_exports, "CrossExtHostHeader", {
    enumerable: true,
    get: ()=>CrossExtHostHeader
});
Object.defineProperty(utils_pb_exports, "CrossExtHostHeaders", {
    enumerable: true,
    get: ()=>CrossExtHostHeaders
});
Object.defineProperty(utils_pb_exports, "CurrentFileInfo", {
    enumerable: true,
    get: ()=>CurrentFileInfo
});
Object.defineProperty(utils_pb_exports, "CurrentFileInfo_NotebookCell", {
    enumerable: true,
    get: ()=>CurrentFileInfo_NotebookCell
});
Object.defineProperty(utils_pb_exports, "CursorPosition", {
    enumerable: true,
    get: ()=>CursorPosition
});
Object.defineProperty(utils_pb_exports, "CursorRange", {
    enumerable: true,
    get: ()=>CursorRange
});
Object.defineProperty(utils_pb_exports, "CursorRule", {
    enumerable: true,
    get: ()=>CursorRule2
});
Object.defineProperty(utils_pb_exports, "CustomErrorDetails", {
    enumerable: true,
    get: ()=>CustomErrorDetails
});
Object.defineProperty(utils_pb_exports, "DashboardAction", {
    enumerable: true,
    get: ()=>DashboardAction
});
Object.defineProperty(utils_pb_exports, "DataframeInfo", {
    enumerable: true,
    get: ()=>DataframeInfo
});
Object.defineProperty(utils_pb_exports, "DataframeInfo_Column", {
    enumerable: true,
    get: ()=>DataframeInfo_Column
});
Object.defineProperty(utils_pb_exports, "DetailedLine", {
    enumerable: true,
    get: ()=>DetailedLine
});
Object.defineProperty(utils_pb_exports, "Diagnostic", {
    enumerable: true,
    get: ()=>Diagnostic2
});
Object.defineProperty(utils_pb_exports, "Diagnostic_DiagnosticSeverity", {
    enumerable: true,
    get: ()=>Diagnostic_DiagnosticSeverity
});
Object.defineProperty(utils_pb_exports, "Diagnostic_RelatedInformation", {
    enumerable: true,
    get: ()=>Diagnostic_RelatedInformation
});
Object.defineProperty(utils_pb_exports, "DocumentSymbol", {
    enumerable: true,
    get: ()=>DocumentSymbol
});
Object.defineProperty(utils_pb_exports, "DocumentSymbolWithText", {
    enumerable: true,
    get: ()=>DocumentSymbolWithText
});
Object.defineProperty(utils_pb_exports, "DocumentSymbol_Range", {
    enumerable: true,
    get: ()=>DocumentSymbol_Range
});
Object.defineProperty(utils_pb_exports, "DocumentSymbol_SymbolKind", {
    enumerable: true,
    get: ()=>DocumentSymbol_SymbolKind
});
Object.defineProperty(utils_pb_exports, "EmbeddingModel", {
    enumerable: true,
    get: ()=>EmbeddingModel
});
Object.defineProperty(utils_pb_exports, "EnvironmentInfo", {
    enumerable: true,
    get: ()=>EnvironmentInfo
});
Object.defineProperty(utils_pb_exports, "ErrorAnalyticsMetadata", {
    enumerable: true,
    get: ()=>ErrorAnalyticsMetadata
});
Object.defineProperty(utils_pb_exports, "ErrorButton", {
    enumerable: true,
    get: ()=>ErrorButton
});
Object.defineProperty(utils_pb_exports, "ErrorDetails", {
    enumerable: true,
    get: ()=>ErrorDetails
});
Object.defineProperty(utils_pb_exports, "ErrorDetails_Error", {
    enumerable: true,
    get: ()=>ErrorDetails_Error
});
Object.defineProperty(utils_pb_exports, "ExplicitContext", {
    enumerable: true,
    get: ()=>ExplicitContext
});
Object.defineProperty(utils_pb_exports, "FeatureType", {
    enumerable: true,
    get: ()=>FeatureType
});
Object.defineProperty(utils_pb_exports, "File", {
    enumerable: true,
    get: ()=>File2
});
Object.defineProperty(utils_pb_exports, "FileDiff", {
    enumerable: true,
    get: ()=>FileDiff
});
Object.defineProperty(utils_pb_exports, "FileDiff_Chunk", {
    enumerable: true,
    get: ()=>FileDiff_Chunk
});
Object.defineProperty(utils_pb_exports, "FileGit", {
    enumerable: true,
    get: ()=>FileGit
});
Object.defineProperty(utils_pb_exports, "FullCommitNotes", {
    enumerable: true,
    get: ()=>FullCommitNotes
});
Object.defineProperty(utils_pb_exports, "GetDiffRequest", {
    enumerable: true,
    get: ()=>GetDiffRequest
});
Object.defineProperty(utils_pb_exports, "GetDiffRequest_OutputFormat", {
    enumerable: true,
    get: ()=>GetDiffRequest_OutputFormat
});
Object.defineProperty(utils_pb_exports, "GetDiffResponse", {
    enumerable: true,
    get: ()=>GetDiffResponse
});
Object.defineProperty(utils_pb_exports, "GetDiffResponse_SubmoduleDiff", {
    enumerable: true,
    get: ()=>GetDiffResponse_SubmoduleDiff
});
Object.defineProperty(utils_pb_exports, "GitCommit", {
    enumerable: true,
    get: ()=>GitCommit
});
Object.defineProperty(utils_pb_exports, "GitDiff", {
    enumerable: true,
    get: ()=>GitDiff
});
Object.defineProperty(utils_pb_exports, "GitDiff_DiffType", {
    enumerable: true,
    get: ()=>GitDiff_DiffType
});
Object.defineProperty(utils_pb_exports, "HoverDetails", {
    enumerable: true,
    get: ()=>HoverDetails
});
Object.defineProperty(utils_pb_exports, "ImageProto", {
    enumerable: true,
    get: ()=>ImageProto
});
Object.defineProperty(utils_pb_exports, "ImageProto_Dimension", {
    enumerable: true,
    get: ()=>ImageProto_Dimension
});
Object.defineProperty(utils_pb_exports, "LineRange", {
    enumerable: true,
    get: ()=>LineRange
});
Object.defineProperty(utils_pb_exports, "Lint", {
    enumerable: true,
    get: ()=>Lint
});
Object.defineProperty(utils_pb_exports, "LintSeverity", {
    enumerable: true,
    get: ()=>LintSeverity
});
Object.defineProperty(utils_pb_exports, "LinterError", {
    enumerable: true,
    get: ()=>LinterError
});
Object.defineProperty(utils_pb_exports, "LinterErrors", {
    enumerable: true,
    get: ()=>LinterErrors
});
Object.defineProperty(utils_pb_exports, "LinterErrorsWithoutFileContents", {
    enumerable: true,
    get: ()=>LinterErrorsWithoutFileContents
});
Object.defineProperty(utils_pb_exports, "MCPInstructions", {
    enumerable: true,
    get: ()=>MCPInstructions
});
Object.defineProperty(utils_pb_exports, "ModelDetails", {
    enumerable: true,
    get: ()=>ModelDetails
});
Object.defineProperty(utils_pb_exports, "ModelInfo", {
    enumerable: true,
    get: ()=>ModelInfo
});
Object.defineProperty(utils_pb_exports, "PlanChoice", {
    enumerable: true,
    get: ()=>PlanChoice
});
Object.defineProperty(utils_pb_exports, "PureMessage", {
    enumerable: true,
    get: ()=>PureMessage
});
Object.defineProperty(utils_pb_exports, "PureMessage_MessageType", {
    enumerable: true,
    get: ()=>PureMessage_MessageType
});
Object.defineProperty(utils_pb_exports, "RCPCallFrame", {
    enumerable: true,
    get: ()=>RCPCallFrame
});
Object.defineProperty(utils_pb_exports, "RCPChatMessage", {
    enumerable: true,
    get: ()=>RCPChatMessage
});
Object.defineProperty(utils_pb_exports, "RCPLogEntry", {
    enumerable: true,
    get: ()=>RCPLogEntry
});
Object.defineProperty(utils_pb_exports, "RCPMessage", {
    enumerable: true,
    get: ()=>RCPMessage
});
Object.defineProperty(utils_pb_exports, "RCPStackTrace", {
    enumerable: true,
    get: ()=>RCPStackTrace
});
Object.defineProperty(utils_pb_exports, "RCPUIElementPicked", {
    enumerable: true,
    get: ()=>RCPUIElementPicked
});
Object.defineProperty(utils_pb_exports, "ReloadWindowAction", {
    enumerable: true,
    get: ()=>ReloadWindowAction
});
Object.defineProperty(utils_pb_exports, "SelectionWithOrientation", {
    enumerable: true,
    get: ()=>SelectionWithOrientation
});
Object.defineProperty(utils_pb_exports, "SimpleFileChunk", {
    enumerable: true,
    get: ()=>SimpleFileChunk
});
Object.defineProperty(utils_pb_exports, "SimpleRange", {
    enumerable: true,
    get: ()=>SimpleRange
});
Object.defineProperty(utils_pb_exports, "SimpleUnaryCrossExtensionHostMessage", {
    enumerable: true,
    get: ()=>SimpleUnaryCrossExtensionHostMessage
});
Object.defineProperty(utils_pb_exports, "SimplestRange", {
    enumerable: true,
    get: ()=>SimplestRange
});
Object.defineProperty(utils_pb_exports, "SwitchModelAction", {
    enumerable: true,
    get: ()=>SwitchModelAction
});
Object.defineProperty(utils_pb_exports, "SwitchModelAction_ModelParameterValue", {
    enumerable: true,
    get: ()=>SwitchModelAction_ModelParameterValue
});
Object.defineProperty(utils_pb_exports, "UpgradeAction", {
    enumerable: true,
    get: ()=>UpgradeAction
});
Object.defineProperty(utils_pb_exports, "UpgradeChoice", {
    enumerable: true,
    get: ()=>UpgradeChoice
});
Object.defineProperty(utils_pb_exports, "UriComponents", {
    enumerable: true,
    get: ()=>UriComponents
});
Object.defineProperty(utils_pb_exports, "UrlAction", {
    enumerable: true,
    get: ()=>UrlAction
});
Object.defineProperty(utils_pb_exports, "VscodeCPUProperties", {
    enumerable: true,
    get: ()=>VscodeCPUProperties
});
Object.defineProperty(utils_pb_exports, "VscodeOSProperties", {
    enumerable: true,
    get: ()=>VscodeOSProperties
});
Object.defineProperty(utils_pb_exports, "VscodeOSStatistics", {
    enumerable: true,
    get: ()=>VscodeOSStatistics
});
var dist_exports = {};
Object.defineProperty(dist_exports, "ADMIN_TOOL_POLICY_BUILTIN_MCP_PROVIDERS", {
    enumerable: true,
    get: ()=>ADMIN_TOOL_POLICY_BUILTIN_MCP_PROVIDERS
});
Object.defineProperty(dist_exports, "ADO_SERVICE_ACCOUNT_UNSUPPORTED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>ADO_SERVICE_ACCOUNT_UNSUPPORTED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "AGENT_HOST_LOOPS", {
    enumerable: true,
    get: ()=>AGENT_HOST_LOOPS
});
Object.defineProperty(dist_exports, "AGENT_HOST_MODULE_CHANNELS", {
    enumerable: true,
    get: ()=>AGENT_HOST_MODULE_CHANNELS
});
Object.defineProperty(dist_exports, "AGENT_HOST_MODULE_METRIC_TAG_KEYS", {
    enumerable: true,
    get: ()=>AGENT_HOST_MODULE_METRIC_TAG_KEYS
});
Object.defineProperty(dist_exports, "AGENT_HOST_MODULE_SERVE_CAUSES", {
    enumerable: true,
    get: ()=>AGENT_HOST_MODULE_SERVE_CAUSES
});
Object.defineProperty(dist_exports, "AGENT_HOST_MODULE_SOURCES", {
    enumerable: true,
    get: ()=>AGENT_HOST_MODULE_SOURCES
});
Object.defineProperty(dist_exports, "AGENT_HOST_MODULE_STATIC_GENERATION", {
    enumerable: true,
    get: ()=>AGENT_HOST_MODULE_STATIC_GENERATION
});
Object.defineProperty(dist_exports, "AGENT_HOST_TURN_RUNTIMES", {
    enumerable: true,
    get: ()=>AGENT_HOST_TURN_RUNTIMES
});
Object.defineProperty(dist_exports, "AGENT_LAYOUT_ALLOWLISTED_ACTION_IDS", {
    enumerable: true,
    get: ()=>AGENT_LAYOUT_ALLOWLISTED_ACTION_IDS
});
Object.defineProperty(dist_exports, "AGENT_SDK_SLACK_CHANNEL_POSTS_MAX_IDS", {
    enumerable: true,
    get: ()=>AGENT_SDK_SLACK_CHANNEL_POSTS_MAX_IDS
});
Object.defineProperty(dist_exports, "AGENT_SERVE_DEPLOYMENT_PERMISSIONS", {
    enumerable: true,
    get: ()=>AGENT_SERVE_DEPLOYMENT_PERMISSIONS
});
Object.defineProperty(dist_exports, "AGENT_SERVE_DEPLOYMENT_STORE_MOUNT_NAME", {
    enumerable: true,
    get: ()=>AGENT_SERVE_DEPLOYMENT_STORE_MOUNT_NAME
});
Object.defineProperty(dist_exports, "AGENT_SERVE_USER_STORE_FILES_SOURCE_ID", {
    enumerable: true,
    get: ()=>AGENT_SERVE_USER_STORE_FILES_SOURCE_ID
});
Object.defineProperty(dist_exports, "AGENT_SERVE_USER_STORE_KEY_PREFIX", {
    enumerable: true,
    get: ()=>AGENT_SERVE_USER_STORE_KEY_PREFIX
});
Object.defineProperty(dist_exports, "AGENT_STORE_AUTOMATION_MOUNT_NAME", {
    enumerable: true,
    get: ()=>AGENT_STORE_AUTOMATION_MOUNT_NAME
});
Object.defineProperty(dist_exports, "AGENT_STORE_DEFAULT_MAX_FILE_SIZE_BYTES", {
    enumerable: true,
    get: ()=>AGENT_STORE_DEFAULT_MAX_FILE_SIZE_BYTES
});
Object.defineProperty(dist_exports, "AGENT_STORE_FILES_DIR_NAME", {
    enumerable: true,
    get: ()=>AGENT_STORE_FILES_DIR_NAME
});
Object.defineProperty(dist_exports, "AGENT_STORE_FUSE_BINARY_CMDLINE_NEEDLE", {
    enumerable: true,
    get: ()=>AGENT_STORE_FUSE_BINARY_CMDLINE_NEEDLE
});
Object.defineProperty(dist_exports, "AGENT_STORE_FUSE_DISPATCH_WEDGE_REPORT_PATH", {
    enumerable: true,
    get: ()=>AGENT_STORE_FUSE_DISPATCH_WEDGE_REPORT_PATH
});
Object.defineProperty(dist_exports, "AGENT_STORE_FUSE_EVENTS_PATH", {
    enumerable: true,
    get: ()=>AGENT_STORE_FUSE_EVENTS_PATH
});
Object.defineProperty(dist_exports, "AGENT_STORE_FUSE_NOTICE_CURSOR_PATH", {
    enumerable: true,
    get: ()=>AGENT_STORE_FUSE_NOTICE_CURSOR_PATH
});
Object.defineProperty(dist_exports, "AGENT_STORE_FUSE_PID_FILE", {
    enumerable: true,
    get: ()=>AGENT_STORE_FUSE_PID_FILE
});
Object.defineProperty(dist_exports, "AGENT_STORE_FUSE_RELAUNCH_REASON_PATH", {
    enumerable: true,
    get: ()=>AGENT_STORE_FUSE_RELAUNCH_REASON_PATH
});
Object.defineProperty(dist_exports, "AGENT_STORE_FUSE_RUNTIME_DIR", {
    enumerable: true,
    get: ()=>AGENT_STORE_FUSE_RUNTIME_DIR
});
Object.defineProperty(dist_exports, "AGENT_STORE_FUSE_USE_DEDICATED_SERVICE_GATE", {
    enumerable: true,
    get: ()=>AGENT_STORE_FUSE_USE_DEDICATED_SERVICE_GATE
});
Object.defineProperty(dist_exports, "AGENT_STORE_FUSE_WEDGE_REPORT_PATH", {
    enumerable: true,
    get: ()=>AGENT_STORE_FUSE_WEDGE_REPORT_PATH
});
Object.defineProperty(dist_exports, "AGENT_STORE_GROK_BOT_MOUNT_NAME", {
    enumerable: true,
    get: ()=>AGENT_STORE_GROK_BOT_MOUNT_NAME
});
Object.defineProperty(dist_exports, "AGENT_STORE_ID_PATTERN", {
    enumerable: true,
    get: ()=>AGENT_STORE_ID_PATTERN
});
Object.defineProperty(dist_exports, "AGENT_STORE_ID_QUERY_PARAM", {
    enumerable: true,
    get: ()=>AGENT_STORE_ID_QUERY_PARAM
});
Object.defineProperty(dist_exports, "AGENT_STORE_MOUNT_ROOT", {
    enumerable: true,
    get: ()=>AGENT_STORE_MOUNT_ROOT2
});
Object.defineProperty(dist_exports, "AGENT_STORE_PERMISSIONS", {
    enumerable: true,
    get: ()=>AGENT_STORE_PERMISSIONS
});
Object.defineProperty(dist_exports, "AGENT_STORE_REFRESH_PEER_PATHS_MAX", {
    enumerable: true,
    get: ()=>AGENT_STORE_REFRESH_PEER_PATHS_MAX
});
Object.defineProperty(dist_exports, "AGENT_STORE_RESERVED_CURSOR_PATH_PREFIX", {
    enumerable: true,
    get: ()=>AGENT_STORE_RESERVED_CURSOR_PATH_PREFIX
});
Object.defineProperty(dist_exports, "AGENT_STORE_SELF_MOUNT_NAME", {
    enumerable: true,
    get: ()=>AGENT_STORE_SELF_MOUNT_NAME
});
Object.defineProperty(dist_exports, "AGENT_STORE_SELF_MOUNT_ROOT", {
    enumerable: true,
    get: ()=>AGENT_STORE_SELF_MOUNT_ROOT
});
Object.defineProperty(dist_exports, "AGENT_STORE_SHARE_ID_PATTERN", {
    enumerable: true,
    get: ()=>AGENT_STORE_SHARE_ID_PATTERN
});
Object.defineProperty(dist_exports, "AGENT_STORE_SHARE_ID_PREFIX", {
    enumerable: true,
    get: ()=>AGENT_STORE_SHARE_ID_PREFIX
});
Object.defineProperty(dist_exports, "AGENT_STORE_SHARE_ID_QUERY_PARAM", {
    enumerable: true,
    get: ()=>AGENT_STORE_SHARE_ID_QUERY_PARAM
});
Object.defineProperty(dist_exports, "AGENT_STORE_SHARE_PERMISSIONS", {
    enumerable: true,
    get: ()=>AGENT_STORE_SHARE_PERMISSIONS
});
Object.defineProperty(dist_exports, "AGENT_STORE_SKILLS_DIR_NAME", {
    enumerable: true,
    get: ()=>AGENT_STORE_SKILLS_DIR_NAME
});
Object.defineProperty(dist_exports, "AGENT_STORE_SYNC_CLIENT_CONFIG_NAME", {
    enumerable: true,
    get: ()=>AGENT_STORE_SYNC_CLIENT_CONFIG_NAME
});
Object.defineProperty(dist_exports, "AGENT_STORE_TEAM_MOUNT_NAME", {
    enumerable: true,
    get: ()=>AGENT_STORE_TEAM_MOUNT_NAME
});
Object.defineProperty(dist_exports, "AGENT_STORE_TEAM_SOURCE_ID_PATTERN", {
    enumerable: true,
    get: ()=>AGENT_STORE_TEAM_SOURCE_ID_PATTERN
});
Object.defineProperty(dist_exports, "AGENT_STORE_TMP_DIR_NAME", {
    enumerable: true,
    get: ()=>AGENT_STORE_TMP_DIR_NAME
});
Object.defineProperty(dist_exports, "AGENT_STORE_TMP_DIR_NAME_DEV", {
    enumerable: true,
    get: ()=>AGENT_STORE_TMP_DIR_NAME_DEV
});
Object.defineProperty(dist_exports, "AGENT_STORE_USER_MOUNT_NAME", {
    enumerable: true,
    get: ()=>AGENT_STORE_USER_MOUNT_NAME
});
Object.defineProperty(dist_exports, "AGENT_STORE_USER_SOURCE_ID_PATTERN", {
    enumerable: true,
    get: ()=>AGENT_STORE_USER_SOURCE_ID_PATTERN
});
Object.defineProperty(dist_exports, "AGENT_STORE_USE_DEDICATED_SERVICE_GATE", {
    enumerable: true,
    get: ()=>AGENT_STORE_USE_DEDICATED_SERVICE_GATE
});
Object.defineProperty(dist_exports, "AGENT_TRANSPORT_MODE_RESPONSE_HEADER", {
    enumerable: true,
    get: ()=>AGENT_TRANSPORT_MODE_RESPONSE_HEADER
});
Object.defineProperty(dist_exports, "AGENT_WEBSOCKET_SOCKET_REUSE_RESPONSE_HEADER", {
    enumerable: true,
    get: ()=>AGENT_WEBSOCKET_SOCKET_REUSE_RESPONSE_HEADER
});
Object.defineProperty(dist_exports, "ALLOWED_SCM_RPC_CALLSITES", {
    enumerable: true,
    get: ()=>ALLOWED_SCM_RPC_CALLSITES
});
Object.defineProperty(dist_exports, "ANYGRESS_DNS_RESOLVER_POD_LABEL", {
    enumerable: true,
    get: ()=>ANYGRESS_DNS_RESOLVER_POD_LABEL
});
Object.defineProperty(dist_exports, "APPLY_SUBAGENT_AGENT_STORE_MOUNTS_COMMAND", {
    enumerable: true,
    get: ()=>APPLY_SUBAGENT_AGENT_STORE_MOUNTS_COMMAND
});
Object.defineProperty(dist_exports, "ASK_QUESTION_AUTO_ANSWER_REASON", {
    enumerable: true,
    get: ()=>ASK_QUESTION_AUTO_ANSWER_REASON
});
Object.defineProperty(dist_exports, "ASK_QUESTION_AUTO_ANSWER_REASON_PREFIX", {
    enumerable: true,
    get: ()=>ASK_QUESTION_AUTO_ANSWER_REASON_PREFIX
});
Object.defineProperty(dist_exports, "AUTOMATION_STORE_CANVASES_DIR", {
    enumerable: true,
    get: ()=>AUTOMATION_STORE_CANVASES_DIR
});
Object.defineProperty(dist_exports, "AUTO_AB_PROMPT_VARIANTS", {
    enumerable: true,
    get: ()=>AUTO_AB_PROMPT_VARIANTS
});
Object.defineProperty(dist_exports, "AUTO_SPILLOVER_UI_DEFAULTS", {
    enumerable: true,
    get: ()=>AUTO_SPILLOVER_UI_DEFAULTS
});
Object.defineProperty(dist_exports, "AZURE_DEVOPS_SERVICES_UUID", {
    enumerable: true,
    get: ()=>AZURE_DEVOPS_SERVICES_UUID
});
Object.defineProperty(dist_exports, "AgentServeDeploymentPermission", {
    enumerable: true,
    get: ()=>AgentServeDeploymentPermission
});
Object.defineProperty(dist_exports, "AgentStorePermission", {
    enumerable: true,
    get: ()=>AgentStorePermission
});
Object.defineProperty(dist_exports, "AgentStoreSharePermission", {
    enumerable: true,
    get: ()=>AgentStoreSharePermission
});
Object.defineProperty(dist_exports, "AuthProviderType", {
    enumerable: true,
    get: ()=>AuthProviderType
});
Object.defineProperty(dist_exports, "BACKEND_REQUEST_BODY_SIZE_LIMIT_BYTES", {
    enumerable: true,
    get: ()=>BACKEND_REQUEST_BODY_SIZE_LIMIT_BYTES
});
Object.defineProperty(dist_exports, "BARE_UUID_PATTERN", {
    enumerable: true,
    get: ()=>BARE_UUID_PATTERN
});
Object.defineProperty(dist_exports, "BITBUCKET_CLOUD_UUID", {
    enumerable: true,
    get: ()=>BITBUCKET_CLOUD_UUID
});
Object.defineProperty(dist_exports, "BITBUCKET_FORGE_NOT_INSTALLED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>BITBUCKET_FORGE_NOT_INSTALLED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "BRIDGE_CANCEL_CONTROLLER_METHOD", {
    enumerable: true,
    get: ()=>BRIDGE_CANCEL_CONTROLLER_METHOD
});
Object.defineProperty(dist_exports, "BRIDGE_CANCEL_REQUEST_METHOD", {
    enumerable: true,
    get: ()=>BRIDGE_CANCEL_REQUEST_METHOD
});
Object.defineProperty(dist_exports, "CANVAS_GET_HOST_THEME_STATE_COMMAND", {
    enumerable: true,
    get: ()=>CANVAS_GET_HOST_THEME_STATE_COMMAND
});
Object.defineProperty(dist_exports, "CANVAS_STORE_PERSIST_ROOTS", {
    enumerable: true,
    get: ()=>CANVAS_STORE_PERSIST_ROOTS
});
Object.defineProperty(dist_exports, "CHANGE_MONITOR_DEFAULT_MONITORING_CRITERIA", {
    enumerable: true,
    get: ()=>CHANGE_MONITOR_DEFAULT_MONITORING_CRITERIA
});
Object.defineProperty(dist_exports, "CHANGE_MONITOR_ONBOARDING_MANAGED_SKILL_PATH", {
    enumerable: true,
    get: ()=>CHANGE_MONITOR_ONBOARDING_MANAGED_SKILL_PATH
});
Object.defineProperty(dist_exports, "CHANGE_MONITOR_ONBOARDING_PR_TITLE", {
    enumerable: true,
    get: ()=>CHANGE_MONITOR_ONBOARDING_PR_TITLE
});
Object.defineProperty(dist_exports, "CHANGE_MONITOR_ONBOARDING_SKILL_ID", {
    enumerable: true,
    get: ()=>CHANGE_MONITOR_ONBOARDING_SKILL_ID
});
Object.defineProperty(dist_exports, "CHAT_NAME_MAX_CHARS", {
    enumerable: true,
    get: ()=>CHAT_NAME_MAX_CHARS
});
Object.defineProperty(dist_exports, "CHAT_NAME_USER_REQUEST_CLOSE_TAG", {
    enumerable: true,
    get: ()=>CHAT_NAME_USER_REQUEST_CLOSE_TAG
});
Object.defineProperty(dist_exports, "CHAT_NAME_USER_REQUEST_OPEN_TAG", {
    enumerable: true,
    get: ()=>CHAT_NAME_USER_REQUEST_OPEN_TAG
});
Object.defineProperty(dist_exports, "CLAUDE_HISTORY_FILENAME", {
    enumerable: true,
    get: ()=>CLAUDE_HISTORY_FILENAME
});
Object.defineProperty(dist_exports, "CLAUDE_HOME_SUBDIR", {
    enumerable: true,
    get: ()=>CLAUDE_HOME_SUBDIR
});
Object.defineProperty(dist_exports, "CLAUDE_PROJECTS_SUBDIR", {
    enumerable: true,
    get: ()=>CLAUDE_PROJECTS_SUBDIR
});
Object.defineProperty(dist_exports, "CLEAR_SUBAGENT_AGENT_STORE_MOUNTS_COMMAND", {
    enumerable: true,
    get: ()=>CLEAR_SUBAGENT_AGENT_STORE_MOUNTS_COMMAND
});
Object.defineProperty(dist_exports, "CLI_FEEDBACK_MAX_CHARS", {
    enumerable: true,
    get: ()=>CLI_FEEDBACK_MAX_CHARS
});
Object.defineProperty(dist_exports, "CLONE_GIT_REPOS_LABEL_KEY", {
    enumerable: true,
    get: ()=>CLONE_GIT_REPOS_LABEL_KEY
});
Object.defineProperty(dist_exports, "CLOUDFLARE_VNET_POD_LABEL", {
    enumerable: true,
    get: ()=>CLOUDFLARE_VNET_POD_LABEL
});
Object.defineProperty(dist_exports, "CLOUD_AGENTS_NOT_AUTHORIZED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>CLOUD_AGENTS_NOT_AUTHORIZED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_ALL_SECRET_NAMES_ENV_VAR", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_ALL_SECRET_NAMES_ENV_VAR
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_ARTIFACTS_DIR", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_ARTIFACTS_DIR
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_DESKTOP_LEASE_GATE", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_DESKTOP_LEASE_GATE
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_DESKTOP_LEASE_HUMAN_TTL_MS", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_DESKTOP_LEASE_HUMAN_TTL_MS
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_FOLLOWUP_RETRY_HINT", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_FOLLOWUP_RETRY_HINT
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_FUSE_LIVENESS_KILL_GATE", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_FUSE_LIVENESS_KILL_GATE
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_IDENTITY_GROK_BOT_BOX_TOKEN_PATH", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_IDENTITY_GROK_BOT_BOX_TOKEN_PATH
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_IDENTITY_WORKER_TOKEN_PATH", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_IDENTITY_WORKER_TOKEN_PATH
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_INJECTED_SECRET_NAMES_ENV_VAR", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_INJECTED_SECRET_NAMES_ENV_VAR
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_LEGACY_PRIVACY_ENFORCING_TEAMS_INFO_KEY", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_LEGACY_PRIVACY_ENFORCING_TEAMS_INFO_KEY
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_MACHINE_RESOURCES_GATE", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_MACHINE_RESOURCES_GATE
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_ORIGIN_CLI_SESSION_TOKEN_ENV_VAR", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_ORIGIN_CLI_SESSION_TOKEN_ENV_VAR
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_REPEATED_UNEXPECTED_ERROR_MESSAGE", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_REPEATED_UNEXPECTED_ERROR_MESSAGE
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_RETRYABLE_ERROR_RECOVERY_MESSAGE", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_RETRYABLE_ERROR_RECOVERY_MESSAGE
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_SINGLE_REPO_WORKSPACE_ROOT", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_SINGLE_REPO_WORKSPACE_ROOT
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_START_PAYLOAD_TOO_LARGE_MESSAGE_PREFIX", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_START_PAYLOAD_TOO_LARGE_MESSAGE_PREFIX
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_STORE_ID_PATTERN", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_STORE_ID_PATTERN
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_TRANSIENT_ERROR_TITLE", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_TRANSIENT_ERROR_TITLE
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_USAGE_LIMIT_ERROR_CODE", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_USAGE_LIMIT_ERROR_CODE
});
Object.defineProperty(dist_exports, "CLOUD_AGENT_USER_EMAIL_ADDRESS_ENV_VAR", {
    enumerable: true,
    get: ()=>CLOUD_AGENT_USER_EMAIL_ADDRESS_ENV_VAR
});
Object.defineProperty(dist_exports, "CLOUD_CANVAS_ROOT", {
    enumerable: true,
    get: ()=>CLOUD_CANVAS_ROOT2
});
Object.defineProperty(dist_exports, "CLOUD_MCP_RUNTIME_PLUGIN_SUFFIX", {
    enumerable: true,
    get: ()=>CLOUD_MCP_RUNTIME_PLUGIN_SUFFIX
});
Object.defineProperty(dist_exports, "CLOUD_MCP_RUNTIME_TEAM_SUFFIX", {
    enumerable: true,
    get: ()=>CLOUD_MCP_RUNTIME_TEAM_SUFFIX
});
Object.defineProperty(dist_exports, "CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_DEFAULT_MAX_RESULTS", {
    enumerable: true,
    get: ()=>CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_DEFAULT_MAX_RESULTS
});
Object.defineProperty(dist_exports, "CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_GITHUB_PROVIDER", {
    enumerable: true,
    get: ()=>CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_GITHUB_PROVIDER
});
Object.defineProperty(dist_exports, "CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_PATH", {
    enumerable: true,
    get: ()=>CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_PATH
});
Object.defineProperty(dist_exports, "CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_RPC_METHOD", {
    enumerable: true,
    get: ()=>CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_RPC_METHOD
});
Object.defineProperty(dist_exports, "CLOUD_ONBOARDING_MANAGED_SKILL_PATH", {
    enumerable: true,
    get: ()=>CLOUD_ONBOARDING_MANAGED_SKILL_PATH
});
Object.defineProperty(dist_exports, "CLOUD_ONBOARDING_SKILL_ID", {
    enumerable: true,
    get: ()=>CLOUD_ONBOARDING_SKILL_ID
});
Object.defineProperty(dist_exports, "CLOUD_ONBOARDING_UI_GATE", {
    enumerable: true,
    get: ()=>CLOUD_ONBOARDING_UI_GATE
});
Object.defineProperty(dist_exports, "CODE_TOUR_DEFAULT_MODEL_VERSION", {
    enumerable: true,
    get: ()=>CODE_TOUR_DEFAULT_MODEL_VERSION
});
Object.defineProperty(dist_exports, "CODE_TOUR_DEFAULT_PROMPT_VERSION", {
    enumerable: true,
    get: ()=>CODE_TOUR_DEFAULT_PROMPT_VERSION
});
Object.defineProperty(dist_exports, "CODE_TOUR_FORMAT_VERSION", {
    enumerable: true,
    get: ()=>CODE_TOUR_FORMAT_VERSION
});
Object.defineProperty(dist_exports, "CODE_TOUR_PROMPT_CACHE_KEY_PATTERN", {
    enumerable: true,
    get: ()=>CODE_TOUR_PROMPT_CACHE_KEY_PATTERN
});
Object.defineProperty(dist_exports, "CODE_TOUR_PROMPT_REVISION", {
    enumerable: true,
    get: ()=>CODE_TOUR_PROMPT_REVISION
});
Object.defineProperty(dist_exports, "CODE_TOUR_TERM_GLOSS_MAX_CHARS", {
    enumerable: true,
    get: ()=>CODE_TOUR_TERM_GLOSS_MAX_CHARS
});
Object.defineProperty(dist_exports, "CODE_TOUR_VARIANTS", {
    enumerable: true,
    get: ()=>CODE_TOUR_VARIANTS
});
Object.defineProperty(dist_exports, "CURSOR_AGENT_ALLOWED_TOOLS_HEADER_NAME", {
    enumerable: true,
    get: ()=>CURSOR_AGENT_ALLOWED_TOOLS_HEADER_NAME
});
Object.defineProperty(dist_exports, "CURSOR_AGENT_EMAIL", {
    enumerable: true,
    get: ()=>CURSOR_AGENT_EMAIL
});
Object.defineProperty(dist_exports, "CURSOR_AGENT_EXCLUDE_TOOLS_HEADER_NAME", {
    enumerable: true,
    get: ()=>CURSOR_AGENT_EXCLUDE_TOOLS_HEADER_NAME
});
Object.defineProperty(dist_exports, "CURSOR_AGENT_METADATA_PATH_PREFIX", {
    enumerable: true,
    get: ()=>CURSOR_AGENT_METADATA_PATH_PREFIX
});
Object.defineProperty(dist_exports, "CURSOR_AGENT_OIDC_TOKEN_PATH", {
    enumerable: true,
    get: ()=>CURSOR_AGENT_OIDC_TOKEN_PATH
});
Object.defineProperty(dist_exports, "CURSOR_AGENT_SOCKET_ENV_VAR", {
    enumerable: true,
    get: ()=>CURSOR_AGENT_SOCKET_ENV_VAR
});
Object.defineProperty(dist_exports, "CURSOR_AGENT_STORE_FILES_DIR_ENV", {
    enumerable: true,
    get: ()=>CURSOR_AGENT_STORE_FILES_DIR_ENV
});
Object.defineProperty(dist_exports, "CURSOR_AGENT_STORE_SHARED_PATHS_ENV", {
    enumerable: true,
    get: ()=>CURSOR_AGENT_STORE_SHARED_PATHS_ENV
});
Object.defineProperty(dist_exports, "CURSOR_COAUTHORED_BY_TRAILER", {
    enumerable: true,
    get: ()=>CURSOR_COAUTHORED_BY_TRAILER
});
Object.defineProperty(dist_exports, "CURSOR_COAUTHOR_EMAILS", {
    enumerable: true,
    get: ()=>CURSOR_COAUTHOR_EMAILS
});
Object.defineProperty(dist_exports, "CURSOR_COAUTHOR_NAME", {
    enumerable: true,
    get: ()=>CURSOR_COAUTHOR_NAME
});
Object.defineProperty(dist_exports, "CURSOR_GIT_AUTHOR_NAME", {
    enumerable: true,
    get: ()=>CURSOR_GIT_AUTHOR_NAME
});
Object.defineProperty(dist_exports, "CURSOR_GROK_45_CREDIT_GRANT_MODEL_IDS", {
    enumerable: true,
    get: ()=>CURSOR_GROK_45_CREDIT_GRANT_MODEL_IDS
});
Object.defineProperty(dist_exports, "CURSOR_GROK_46_CREDIT_GRANT_MODEL_IDS", {
    enumerable: true,
    get: ()=>CURSOR_GROK_46_CREDIT_GRANT_MODEL_IDS
});
Object.defineProperty(dist_exports, "CURSOR_GROK_47_CREDIT_GRANT_MODEL_IDS", {
    enumerable: true,
    get: ()=>CURSOR_GROK_47_CREDIT_GRANT_MODEL_IDS
});
Object.defineProperty(dist_exports, "CURSOR_LOCAL_AGENT_HEADERS_ENV", {
    enumerable: true,
    get: ()=>CURSOR_LOCAL_AGENT_HEADERS_ENV
});
Object.defineProperty(dist_exports, "CURSOR_SANDBOX_ENV_NAME_PATTERN", {
    enumerable: true,
    get: ()=>CURSOR_SANDBOX_ENV_NAME_PATTERN
});
Object.defineProperty(dist_exports, "CURSOR_SCM_MCP_PROVIDERS", {
    enumerable: true,
    get: ()=>CURSOR_SCM_MCP_PROVIDERS
});
Object.defineProperty(dist_exports, "CURSOR_UNIVERSAL_MAGIC_DOCKER_IMAGE_NAME", {
    enumerable: true,
    get: ()=>CURSOR_UNIVERSAL_MAGIC_DOCKER_IMAGE_NAME
});
Object.defineProperty(dist_exports, "CURSOR_WORKTREES_DIR", {
    enumerable: true,
    get: ()=>CURSOR_WORKTREES_DIR
});
Object.defineProperty(dist_exports, "CURSOR_WORKTREES_GLOB", {
    enumerable: true,
    get: ()=>CURSOR_WORKTREES_GLOB
});
Object.defineProperty(dist_exports, "CUSTOM_AGENTS_BASE_PATH", {
    enumerable: true,
    get: ()=>CUSTOM_AGENTS_BASE_PATH
});
Object.defineProperty(dist_exports, "CUSTOM_AGENTS_ROUTE_SEGMENT", {
    enumerable: true,
    get: ()=>CUSTOM_AGENTS_ROUTE_SEGMENT
});
Object.defineProperty(dist_exports, "DEFAULT_CODE_TOUR_VARIANT_NAME", {
    enumerable: true,
    get: ()=>DEFAULT_CODE_TOUR_VARIANT_NAME
});
Object.defineProperty(dist_exports, "DEFAULT_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS", {
    enumerable: true,
    get: ()=>DEFAULT_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS
});
Object.defineProperty(dist_exports, "DEFAULT_ENV_SETUP_COMPOSER_NAME", {
    enumerable: true,
    get: ()=>DEFAULT_ENV_SETUP_COMPOSER_NAME
});
Object.defineProperty(dist_exports, "DEFAULT_ENV_SETUP_MODEL_NAME", {
    enumerable: true,
    get: ()=>DEFAULT_ENV_SETUP_MODEL_NAME
});
Object.defineProperty(dist_exports, "DESKTOP_BRIDGE_MAX_LIST_THREADS", {
    enumerable: true,
    get: ()=>DESKTOP_BRIDGE_MAX_LIST_THREADS
});
Object.defineProperty(dist_exports, "DESKTOP_BRIDGE_MAX_MESSAGE_BYTES", {
    enumerable: true,
    get: ()=>DESKTOP_BRIDGE_MAX_MESSAGE_BYTES
});
Object.defineProperty(dist_exports, "DESKTOP_BRIDGE_PROTOCOL_VERSION", {
    enumerable: true,
    get: ()=>DESKTOP_BRIDGE_PROTOCOL_VERSION
});
Object.defineProperty(dist_exports, "DEV_SMART_MODE_CLASSIFIER_DELAY_MS", {
    enumerable: true,
    get: ()=>DEV_SMART_MODE_CLASSIFIER_DELAY_MS
});
Object.defineProperty(dist_exports, "DEV_SMART_MODE_CLASSIFIER_DELAY_SECONDS", {
    enumerable: true,
    get: ()=>DEV_SMART_MODE_CLASSIFIER_DELAY_SECONDS
});
Object.defineProperty(dist_exports, "DOCKER_BUILD_FAILED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>DOCKER_BUILD_FAILED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "DOCKER_BUILD_FAILED_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>DOCKER_BUILD_FAILED_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "EMPTY_REPOSITORY_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>EMPTY_REPOSITORY_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "ENVIRONMENT_BUILD_FAILURE_CATEGORY_BY_CODE", {
    enumerable: true,
    get: ()=>ENVIRONMENT_BUILD_FAILURE_CATEGORY_BY_CODE
});
Object.defineProperty(dist_exports, "ENVIRONMENT_BUILD_FAILURE_CODES_WITH_SPECIFIC_USER_FACING_ERROR", {
    enumerable: true,
    get: ()=>ENVIRONMENT_BUILD_FAILURE_CODES_WITH_SPECIFIC_USER_FACING_ERROR
});
Object.defineProperty(dist_exports, "ENVIRONMENT_JSON_INVALID_FAILURE_CODE", {
    enumerable: true,
    get: ()=>ENVIRONMENT_JSON_INVALID_FAILURE_CODE
});
Object.defineProperty(dist_exports, "ENVIRONMENT_PERMISSIONS", {
    enumerable: true,
    get: ()=>ENVIRONMENT_PERMISSIONS
});
Object.defineProperty(dist_exports, "ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS_KEY", {
    enumerable: true,
    get: ()=>ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS_KEY
});
Object.defineProperty(dist_exports, "ENVIRONMENT_SETUP_RESUME_CONFIG_NAME", {
    enumerable: true,
    get: ()=>ENVIRONMENT_SETUP_RESUME_CONFIG_NAME
});
Object.defineProperty(dist_exports, "ENV_NAME_PATTERN", {
    enumerable: true,
    get: ()=>ENV_NAME_PATTERN
});
Object.defineProperty(dist_exports, "ENV_SETUP_MANAGED_SKILL_DIRECTORY", {
    enumerable: true,
    get: ()=>ENV_SETUP_MANAGED_SKILL_DIRECTORY
});
Object.defineProperty(dist_exports, "ENV_SETUP_MANAGED_SKILL_PATH", {
    enumerable: true,
    get: ()=>ENV_SETUP_MANAGED_SKILL_PATH
});
Object.defineProperty(dist_exports, "ENV_SETUP_SKILL_ID", {
    enumerable: true,
    get: ()=>ENV_SETUP_SKILL_ID
});
Object.defineProperty(dist_exports, "ENV_SETUP_TMUX_SESSION_NAME", {
    enumerable: true,
    get: ()=>ENV_SETUP_TMUX_SESSION_NAME
});
Object.defineProperty(dist_exports, "ERROR_CODES", {
    enumerable: true,
    get: ()=>error_codes_default
});
Object.defineProperty(dist_exports, "EXEC_DAEMON_STARTUP_TRACEPARENT_ENV_VAR", {
    enumerable: true,
    get: ()=>EXEC_DAEMON_STARTUP_TRACEPARENT_ENV_VAR
});
Object.defineProperty(dist_exports, "EnvironmentPermission", {
    enumerable: true,
    get: ()=>EnvironmentPermission
});
Object.defineProperty(dist_exports, "FLUSH_AGENT_STORE_FOR_SUBAGENT_COMMAND", {
    enumerable: true,
    get: ()=>FLUSH_AGENT_STORE_FOR_SUBAGENT_COMMAND
});
Object.defineProperty(dist_exports, "GENERATE_VIDEO_INPUT_IMAGES_MAX_BYTES", {
    enumerable: true,
    get: ()=>GENERATE_VIDEO_INPUT_IMAGES_MAX_BYTES
});
Object.defineProperty(dist_exports, "GET_AGENT_STORE_SKILL_ROOTS_COMMAND", {
    enumerable: true,
    get: ()=>GET_AGENT_STORE_SKILL_ROOTS_COMMAND
});
Object.defineProperty(dist_exports, "GET_AGENT_STORE_SKILL_TARGET_DIRS_COMMAND", {
    enumerable: true,
    get: ()=>GET_AGENT_STORE_SKILL_TARGET_DIRS_COMMAND
});
Object.defineProperty(dist_exports, "GET_MOUNTED_AGENT_STORES_COMMAND", {
    enumerable: true,
    get: ()=>GET_MOUNTED_AGENT_STORES_COMMAND
});
Object.defineProperty(dist_exports, "GH_TELEMETRY_ENV_VAR", {
    enumerable: true,
    get: ()=>GH_TELEMETRY_ENV_VAR
});
Object.defineProperty(dist_exports, "GITHUB_APP_NOT_ASSOCIATED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>GITHUB_APP_NOT_ASSOCIATED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "GITHUB_APP_NOT_ASSOCIATED_MESSAGE_FRAGMENT", {
    enumerable: true,
    get: ()=>GITHUB_APP_NOT_ASSOCIATED_MESSAGE_FRAGMENT
});
Object.defineProperty(dist_exports, "GITHUB_APP_NOT_INSTALLED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>GITHUB_APP_NOT_INSTALLED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "GITHUB_INSTALLATION_REPO_ACCESS_FAILURE_CODE", {
    enumerable: true,
    get: ()=>GITHUB_INSTALLATION_REPO_ACCESS_FAILURE_CODE
});
Object.defineProperty(dist_exports, "GITHUB_IP_ALLOWLIST_DOCS_URL", {
    enumerable: true,
    get: ()=>GITHUB_IP_ALLOWLIST_DOCS_URL
});
Object.defineProperty(dist_exports, "GITHUB_IP_ALLOWLIST_FAILURE_CODE", {
    enumerable: true,
    get: ()=>GITHUB_IP_ALLOWLIST_FAILURE_CODE
});
Object.defineProperty(dist_exports, "GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE_PREFIX", {
    enumerable: true,
    get: ()=>GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE_PREFIX
});
Object.defineProperty(dist_exports, "GITHUB_OAUTH_CLIENT_IDS", {
    enumerable: true,
    get: ()=>GITHUB_OAUTH_CLIENT_IDS
});
Object.defineProperty(dist_exports, "GITHUB_PULL_REQUEST_PATH_PATTERN", {
    enumerable: true,
    get: ()=>GITHUB_PULL_REQUEST_PATH_PATTERN
});
Object.defineProperty(dist_exports, "GITHUB_TEAM_NO_REPO_ACCESS_FAILURE_CODE", {
    enumerable: true,
    get: ()=>GITHUB_TEAM_NO_REPO_ACCESS_FAILURE_CODE
});
Object.defineProperty(dist_exports, "GITHUB_USER_NO_REPO_ACCESS_FAILURE_CODE", {
    enumerable: true,
    get: ()=>GITHUB_USER_NO_REPO_ACCESS_FAILURE_CODE
});
Object.defineProperty(dist_exports, "GITLAB_COM_UUID", {
    enumerable: true,
    get: ()=>GITLAB_COM_UUID
});
Object.defineProperty(dist_exports, "GITLAB_REPO_NOT_LINKED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>GITLAB_REPO_NOT_LINKED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "GIT_CLONE_FAILED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>GIT_CLONE_FAILED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "GIT_DIFF_INTRO", {
    enumerable: true,
    get: ()=>GIT_DIFF_INTRO
});
Object.defineProperty(dist_exports, "GIT_DIFF_TRUNCATION_NOTICE", {
    enumerable: true,
    get: ()=>GIT_DIFF_TRUNCATION_NOTICE
});
Object.defineProperty(dist_exports, "GIT_DIFF_UNCOMMITTED_INTRO", {
    enumerable: true,
    get: ()=>GIT_DIFF_UNCOMMITTED_INTRO
});
Object.defineProperty(dist_exports, "GIT_REMOTE_TRANSIENT_FAILURE_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>GIT_REMOTE_TRANSIENT_FAILURE_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "GLASS_HEADLESS_SHELL_EVENT_COMMAND", {
    enumerable: true,
    get: ()=>GLASS_HEADLESS_SHELL_EVENT_COMMAND
});
Object.defineProperty(dist_exports, "GLASS_PERF_VOTE_CONFIG_DEFAULTS", {
    enumerable: true,
    get: ()=>GLASS_PERF_VOTE_CONFIG_DEFAULTS
});
Object.defineProperty(dist_exports, "GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID", {
    enumerable: true,
    get: ()=>GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID
});
Object.defineProperty(dist_exports, "GOOGLE_WORKSPACE_MCP_HOSTS", {
    enumerable: true,
    get: ()=>GOOGLE_WORKSPACE_MCP_HOSTS
});
Object.defineProperty(dist_exports, "GRAPHITE_ORIGIN", {
    enumerable: true,
    get: ()=>GRAPHITE_ORIGIN
});
Object.defineProperty(dist_exports, "GROK_BOT_AGENT_PERMISSIONS", {
    enumerable: true,
    get: ()=>GROK_BOT_AGENT_PERMISSIONS
});
Object.defineProperty(dist_exports, "GROK_BOT_AGENT_STORE_SOURCE_ID_PATTERN", {
    enumerable: true,
    get: ()=>GROK_BOT_AGENT_STORE_SOURCE_ID_PATTERN
});
Object.defineProperty(dist_exports, "GROK_BOT_AGENT_STORE_SOURCE_ID_PREFIX", {
    enumerable: true,
    get: ()=>GROK_BOT_AGENT_STORE_SOURCE_ID_PREFIX
});
Object.defineProperty(dist_exports, "GROK_BOT_BOX_IDENTITY_SOCKET_PATH", {
    enumerable: true,
    get: ()=>GROK_BOT_BOX_IDENTITY_SOCKET_PATH
});
Object.defineProperty(dist_exports, "GROK_BOT_DESKTOP_GITHUB_CONNECT_CALLBACK_URL", {
    enumerable: true,
    get: ()=>GROK_BOT_DESKTOP_GITHUB_CONNECT_CALLBACK_URL
});
Object.defineProperty(dist_exports, "GROK_BOT_GITHUB_CONNECT_STATE_PREFIXES", {
    enumerable: true,
    get: ()=>GROK_BOT_GITHUB_CONNECT_STATE_PREFIXES
});
Object.defineProperty(dist_exports, "GROK_BOT_GITHUB_CONNECT_STATE_PREFIX_BY_CALLBACK_URL", {
    enumerable: true,
    get: ()=>GROK_BOT_GITHUB_CONNECT_STATE_PREFIX_BY_CALLBACK_URL
});
Object.defineProperty(dist_exports, "GROK_BOT_SLACK_CONNECT_RETURN_URLS", {
    enumerable: true,
    get: ()=>GROK_BOT_SLACK_CONNECT_RETURN_URLS
});
Object.defineProperty(dist_exports, "GROK_BOT_TEMPLATE_BLOB_MAX_BYTES", {
    enumerable: true,
    get: ()=>GROK_BOT_TEMPLATE_BLOB_MAX_BYTES
});
Object.defineProperty(dist_exports, "GROK_BOT_TEMPLATE_PERMISSIONS", {
    enumerable: true,
    get: ()=>GROK_BOT_TEMPLATE_PERMISSIONS
});
Object.defineProperty(dist_exports, "GrokBotAgentPermission", {
    enumerable: true,
    get: ()=>GrokBotAgentPermission
});
Object.defineProperty(dist_exports, "GrokBotTemplatePermission", {
    enumerable: true,
    get: ()=>GrokBotTemplatePermission
});
Object.defineProperty(dist_exports, "HEALTHY_USER_MIN_ACCOUNT_AGE_MS", {
    enumerable: true,
    get: ()=>HEALTHY_USER_MIN_ACCOUNT_AGE_MS
});
Object.defineProperty(dist_exports, "HOSTED_MCP_ROUTING_REPORT_STATE_COMMAND", {
    enumerable: true,
    get: ()=>HOSTED_MCP_ROUTING_REPORT_STATE_COMMAND
});
Object.defineProperty(dist_exports, "IMAGE_PULL_FAILED_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>IMAGE_PULL_FAILED_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "INBOX_ROOT_DIR", {
    enumerable: true,
    get: ()=>INBOX_ROOT_DIR
});
Object.defineProperty(dist_exports, "INFRA_TRANSIENT_FAILURE_CODE", {
    enumerable: true,
    get: ()=>INFRA_TRANSIENT_FAILURE_CODE
});
Object.defineProperty(dist_exports, "INPUT_FOCUSED_EDITOR_DENYLIST_ACTION_IDS", {
    enumerable: true,
    get: ()=>INPUT_FOCUSED_EDITOR_DENYLIST_ACTION_IDS
});
Object.defineProperty(dist_exports, "INSTALL_FAILED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>INSTALL_FAILED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "INTERACTIVE_CHILD_ROUTE_ID_PREFIX", {
    enumerable: true,
    get: ()=>INTERACTIVE_CHILD_ROUTE_ID_PREFIX
});
Object.defineProperty(dist_exports, "IN_APP_AD_NEW_USER_BLACKOUT_MS", {
    enumerable: true,
    get: ()=>IN_APP_AD_NEW_USER_BLACKOUT_MS
});
Object.defineProperty(dist_exports, "JOB_ROLE", {
    enumerable: true,
    get: ()=>JOB_ROLE
});
Object.defineProperty(dist_exports, "JOB_ROLES", {
    enumerable: true,
    get: ()=>JOB_ROLES
});
Object.defineProperty(dist_exports, "JOB_ROLE_SLUG", {
    enumerable: true,
    get: ()=>JOB_ROLE_SLUG
});
Object.defineProperty(dist_exports, "KEYRING_PERMISSIONS", {
    enumerable: true,
    get: ()=>KEYRING_PERMISSIONS
});
Object.defineProperty(dist_exports, "KNOWN_GIT_HOSTING_DOMAINS", {
    enumerable: true,
    get: ()=>KNOWN_GIT_HOSTING_DOMAINS
});
Object.defineProperty(dist_exports, "KeyringPermission", {
    enumerable: true,
    get: ()=>KeyringPermission
});
Object.defineProperty(dist_exports, "LEGACY_AUTOMATIONS_BASE_PATH", {
    enumerable: true,
    get: ()=>LEGACY_AUTOMATIONS_BASE_PATH
});
Object.defineProperty(dist_exports, "LEGACY_AUTOMATIONS_ROUTE_SEGMENT", {
    enumerable: true,
    get: ()=>LEGACY_AUTOMATIONS_ROUTE_SEGMENT
});
Object.defineProperty(dist_exports, "LEGACY_GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID", {
    enumerable: true,
    get: ()=>LEGACY_GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID
});
Object.defineProperty(dist_exports, "LEGACY_MADE_WITH_TRAILER", {
    enumerable: true,
    get: ()=>LEGACY_MADE_WITH_TRAILER
});
Object.defineProperty(dist_exports, "LEGACY_REVIEW_CURSOR_HOST", {
    enumerable: true,
    get: ()=>LEGACY_REVIEW_CURSOR_HOST
});
Object.defineProperty(dist_exports, "LEGACY_REVIEW_CURSOR_HOSTS", {
    enumerable: true,
    get: ()=>LEGACY_REVIEW_CURSOR_HOSTS
});
Object.defineProperty(dist_exports, "LEGACY_REVIEW_CURSOR_HOST_STAGING", {
    enumerable: true,
    get: ()=>LEGACY_REVIEW_CURSOR_HOST_STAGING
});
Object.defineProperty(dist_exports, "LEGACY_STARTUP_TEAM_REFERRAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>LEGACY_STARTUP_TEAM_REFERRAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "MAX_CHILD_INBOX_REMINDER_ENTRIES", {
    enumerable: true,
    get: ()=>MAX_CHILD_INBOX_REMINDER_ENTRIES
});
Object.defineProperty(dist_exports, "MAX_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS", {
    enumerable: true,
    get: ()=>MAX_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS
});
Object.defineProperty(dist_exports, "MAX_GIT_DIFF_CHAR_LENGTH", {
    enumerable: true,
    get: ()=>MAX_GIT_DIFF_CHAR_LENGTH
});
Object.defineProperty(dist_exports, "MAX_INACTIVITY_THRESHOLD_MINUTES", {
    enumerable: true,
    get: ()=>MAX_INACTIVITY_THRESHOLD_MINUTES
});
Object.defineProperty(dist_exports, "MAX_LIST_DETAILED_COMPOSERS", {
    enumerable: true,
    get: ()=>MAX_LIST_DETAILED_COMPOSERS
});
Object.defineProperty(dist_exports, "MAX_TEXT_SIZE", {
    enumerable: true,
    get: ()=>MAX_TEXT_SIZE
});
Object.defineProperty(dist_exports, "MCP_OAUTH_CALLBACK_PATH", {
    enumerable: true,
    get: ()=>MCP_OAUTH_CALLBACK_PATH
});
Object.defineProperty(dist_exports, "MCP_OAUTH_CANONICAL_DESKTOP_URL_PROTOCOLS", {
    enumerable: true,
    get: ()=>MCP_OAUTH_CANONICAL_DESKTOP_URL_PROTOCOLS
});
Object.defineProperty(dist_exports, "MCP_OAUTH_CLIENT_LOGO_URI", {
    enumerable: true,
    get: ()=>MCP_OAUTH_CLIENT_LOGO_URI
});
Object.defineProperty(dist_exports, "MCP_OAUTH_CLIENT_METADATA_DOCUMENT_PATH", {
    enumerable: true,
    get: ()=>MCP_OAUTH_CLIENT_METADATA_DOCUMENT_PATH
});
Object.defineProperty(dist_exports, "MCP_OAUTH_CLIENT_METADATA_DOCUMENT_REDIRECT_URIS", {
    enumerable: true,
    get: ()=>MCP_OAUTH_CLIENT_METADATA_DOCUMENT_REDIRECT_URIS
});
Object.defineProperty(dist_exports, "MCP_OAUTH_CLIENT_METADATA_DOCUMENT_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_CLIENT_METADATA_DOCUMENT_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_CURSOR_CLIENT_BRANDING", {
    enumerable: true,
    get: ()=>MCP_OAUTH_CURSOR_CLIENT_BRANDING
});
Object.defineProperty(dist_exports, "MCP_OAUTH_DESKTOP_RETURN_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_DESKTOP_RETURN_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_EXTENSION_ID", {
    enumerable: true,
    get: ()=>MCP_OAUTH_EXTENSION_ID
});
Object.defineProperty(dist_exports, "MCP_OAUTH_GROK_BOT_BOUNCE_CALLBACK_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_GROK_BOT_BOUNCE_CALLBACK_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_GROK_BOT_CLIENT_BRANDING", {
    enumerable: true,
    get: ()=>MCP_OAUTH_GROK_BOT_CLIENT_BRANDING
});
Object.defineProperty(dist_exports, "MCP_OAUTH_GROK_BOT_CLIENT_METADATA_DOCUMENT_PATH", {
    enumerable: true,
    get: ()=>MCP_OAUTH_GROK_BOT_CLIENT_METADATA_DOCUMENT_PATH
});
Object.defineProperty(dist_exports, "MCP_OAUTH_GROK_BOT_MOBILE_CALLBACK_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_GROK_BOT_MOBILE_CALLBACK_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_GROK_BOT_RETURN_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_GROK_BOT_RETURN_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_GROK_WEB_CALLBACK_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_GROK_WEB_CALLBACK_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_LEGACY_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_LEGACY_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_LEGACY_SAND_RETURN_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_LEGACY_SAND_RETURN_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_LOOPBACK_CALLBACK_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_LOOPBACK_CALLBACK_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_LOOPBACK_FALLBACK_PORTS", {
    enumerable: true,
    get: ()=>MCP_OAUTH_LOOPBACK_FALLBACK_PORTS
});
Object.defineProperty(dist_exports, "MCP_OAUTH_LOOPBACK_IPV4_CALLBACK_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_LOOPBACK_IPV4_CALLBACK_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_PORTAL_CALLBACK_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_PORTAL_CALLBACK_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_PORTAL_RETURN_PATH_PREFIXES", {
    enumerable: true,
    get: ()=>MCP_OAUTH_PORTAL_RETURN_PATH_PREFIXES
});
Object.defineProperty(dist_exports, "MCP_OAUTH_POST_AUTH_RETURN_URLS", {
    enumerable: true,
    get: ()=>MCP_OAUTH_POST_AUTH_RETURN_URLS
});
Object.defineProperty(dist_exports, "MCP_OAUTH_PROVIDER_POLICIES", {
    enumerable: true,
    get: ()=>MCP_OAUTH_PROVIDER_POLICIES
});
Object.defineProperty(dist_exports, "MCP_OAUTH_RELAYED_LOOPBACK_HEADER", {
    enumerable: true,
    get: ()=>MCP_OAUTH_RELAYED_LOOPBACK_HEADER
});
Object.defineProperty(dist_exports, "MCP_OAUTH_RETURN_PATH", {
    enumerable: true,
    get: ()=>MCP_OAUTH_RETURN_PATH
});
Object.defineProperty(dist_exports, "MCP_OAUTH_SAND_RETURN_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_SAND_RETURN_URL
});
Object.defineProperty(dist_exports, "MCP_OAUTH_STATE_ACCOUNT_MISMATCH_MESSAGE", {
    enumerable: true,
    get: ()=>MCP_OAUTH_STATE_ACCOUNT_MISMATCH_MESSAGE
});
Object.defineProperty(dist_exports, "MCP_OAUTH_STATE_TARGET_DESKTOP_LOOPBACK", {
    enumerable: true,
    get: ()=>MCP_OAUTH_STATE_TARGET_DESKTOP_LOOPBACK
});
Object.defineProperty(dist_exports, "MCP_OAUTH_STATE_TARGET_GROK_BOT_MOBILE", {
    enumerable: true,
    get: ()=>MCP_OAUTH_STATE_TARGET_GROK_BOT_MOBILE
});
Object.defineProperty(dist_exports, "MCP_OAUTH_STATE_TARGET_GROK_WEB", {
    enumerable: true,
    get: ()=>MCP_OAUTH_STATE_TARGET_GROK_WEB
});
Object.defineProperty(dist_exports, "MCP_OAUTH_STATE_TARGET_X_APP", {
    enumerable: true,
    get: ()=>MCP_OAUTH_STATE_TARGET_X_APP
});
Object.defineProperty(dist_exports, "MCP_OAUTH_X_APP_CALLBACK_URL", {
    enumerable: true,
    get: ()=>MCP_OAUTH_X_APP_CALLBACK_URL
});
Object.defineProperty(dist_exports, "MCP_REDACTED_VALUE", {
    enumerable: true,
    get: ()=>MCP_REDACTED_VALUE
});
Object.defineProperty(dist_exports, "MCP_TOOL_REQUIRES_CONFIRMATION_META_KEY", {
    enumerable: true,
    get: ()=>MCP_TOOL_REQUIRES_CONFIRMATION_META_KEY
});
Object.defineProperty(dist_exports, "MINT_GITHUB_TOKEN_LABEL_KEY", {
    enumerable: true,
    get: ()=>MINT_GITHUB_TOKEN_LABEL_KEY
});
Object.defineProperty(dist_exports, "MIN_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS", {
    enumerable: true,
    get: ()=>MIN_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS
});
Object.defineProperty(dist_exports, "MOUNT_AGENT_STORE_COMMAND", {
    enumerable: true,
    get: ()=>MOUNT_AGENT_STORE_COMMAND
});
Object.defineProperty(dist_exports, "NAMED_AGENT_HOME_STORE_MOUNT_NAME", {
    enumerable: true,
    get: ()=>NAMED_AGENT_HOME_STORE_MOUNT_NAME
});
Object.defineProperty(dist_exports, "NEW_PROJECT_KICKOFF_MESSAGE", {
    enumerable: true,
    get: ()=>NEW_PROJECT_KICKOFF_MESSAGE
});
Object.defineProperty(dist_exports, "NON_RETRYABLE_PROVIDER_ERROR_CODE", {
    enumerable: true,
    get: ()=>NON_RETRYABLE_PROVIDER_ERROR_CODE
});
Object.defineProperty(dist_exports, "NON_RETRYABLE_PROVIDER_ERROR_SUBTYPES", {
    enumerable: true,
    get: ()=>NON_RETRYABLE_PROVIDER_ERROR_SUBTYPES
});
Object.defineProperty(dist_exports, "NOTIFY_AGENT_STORE_SKILL_TARGET_DIRS_CHANGED_COMMAND", {
    enumerable: true,
    get: ()=>NOTIFY_AGENT_STORE_SKILL_TARGET_DIRS_CHANGED_COMMAND
});
Object.defineProperty(dist_exports, "OFFER_TEMPLATES", {
    enumerable: true,
    get: ()=>OFFER_TEMPLATES
});
Object.defineProperty(dist_exports, "OFFER_TEMPLATE_KEYS", {
    enumerable: true,
    get: ()=>OFFER_TEMPLATE_KEYS
});
Object.defineProperty(dist_exports, "ORGANIZATION_PERMISSIONS", {
    enumerable: true,
    get: ()=>ORGANIZATION_PERMISSIONS
});
Object.defineProperty(dist_exports, "ORG_API_KEY_SCOPES", {
    enumerable: true,
    get: ()=>ORG_API_KEY_SCOPES
});
Object.defineProperty(dist_exports, "ORG_API_KEY_SCOPE_ADMIN", {
    enumerable: true,
    get: ()=>ORG_API_KEY_SCOPE_ADMIN
});
Object.defineProperty(dist_exports, "ORG_API_KEY_SCOPE_AUDIT_LOGS_READ", {
    enumerable: true,
    get: ()=>ORG_API_KEY_SCOPE_AUDIT_LOGS_READ
});
Object.defineProperty(dist_exports, "ORG_API_KEY_SCOPE_MEMBERS", {
    enumerable: true,
    get: ()=>ORG_API_KEY_SCOPE_MEMBERS
});
Object.defineProperty(dist_exports, "ORG_API_KEY_SCOPE_MEMBERS_READ", {
    enumerable: true,
    get: ()=>ORG_API_KEY_SCOPE_MEMBERS_READ
});
Object.defineProperty(dist_exports, "ORG_API_KEY_SCOPE_MODELS", {
    enumerable: true,
    get: ()=>ORG_API_KEY_SCOPE_MODELS
});
Object.defineProperty(dist_exports, "ORG_API_KEY_SCOPE_MODELS_READ", {
    enumerable: true,
    get: ()=>ORG_API_KEY_SCOPE_MODELS_READ
});
Object.defineProperty(dist_exports, "ORG_API_KEY_SCOPE_USAGE", {
    enumerable: true,
    get: ()=>ORG_API_KEY_SCOPE_USAGE
});
Object.defineProperty(dist_exports, "ORIGIN_MCP_BUILTIN_TARGET", {
    enumerable: true,
    get: ()=>ORIGIN_MCP_BUILTIN_TARGET
});
Object.defineProperty(dist_exports, "ORIGIN_MCP_READONLY_SERVER_URL", {
    enumerable: true,
    get: ()=>ORIGIN_MCP_READONLY_SERVER_URL
});
Object.defineProperty(dist_exports, "ORIGIN_MCP_SERVER_URL", {
    enumerable: true,
    get: ()=>ORIGIN_MCP_SERVER_URL
});
Object.defineProperty(dist_exports, "ORIGIN_PLAN_REQUIRED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>ORIGIN_PLAN_REQUIRED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "ORIGIN_PR_IDENTITY_HOST", {
    enumerable: true,
    get: ()=>ORIGIN_PR_IDENTITY_HOST
});
Object.defineProperty(dist_exports, "ORIGIN_PR_IDENTITY_HOST_STAGING", {
    enumerable: true,
    get: ()=>ORIGIN_PR_IDENTITY_HOST_STAGING
});
Object.defineProperty(dist_exports, "OrganizationPermission", {
    enumerable: true,
    get: ()=>OrganizationPermission
});
Object.defineProperty(dist_exports, "PARENT_STORE_ALIAS", {
    enumerable: true,
    get: ()=>PARENT_STORE_ALIAS
});
Object.defineProperty(dist_exports, "PERMISSION_RESOURCE_TYPES", {
    enumerable: true,
    get: ()=>PERMISSION_RESOURCE_TYPES
});
Object.defineProperty(dist_exports, "PINNED_WORKER_OFFLINE_DETAIL_MARKDOWN", {
    enumerable: true,
    get: ()=>PINNED_WORKER_OFFLINE_DETAIL_MARKDOWN
});
Object.defineProperty(dist_exports, "PINNED_WORKER_OFFLINE_ROW_STATUS", {
    enumerable: true,
    get: ()=>PINNED_WORKER_OFFLINE_ROW_STATUS
});
Object.defineProperty(dist_exports, "PLACEMENT_CONSENT_ALLOW_OPTION_ID", {
    enumerable: true,
    get: ()=>PLACEMENT_CONSENT_ALLOW_OPTION_ID
});
Object.defineProperty(dist_exports, "PLACEMENT_CONSENT_DENY_OPTION_ID", {
    enumerable: true,
    get: ()=>PLACEMENT_CONSENT_DENY_OPTION_ID
});
Object.defineProperty(dist_exports, "PLACEMENT_CONSENT_QUESTION_ID", {
    enumerable: true,
    get: ()=>PLACEMENT_CONSENT_QUESTION_ID
});
Object.defineProperty(dist_exports, "PRIMARY_INTRO_FIRE_TYPE", {
    enumerable: true,
    get: ()=>PRIMARY_INTRO_FIRE_TYPE
});
Object.defineProperty(dist_exports, "PRIVATE_INFERENCE_FEATURE_OFF_MESSAGE", {
    enumerable: true,
    get: ()=>PRIVATE_INFERENCE_FEATURE_OFF_MESSAGE
});
Object.defineProperty(dist_exports, "PRIVATE_INFERENCE_OFF_FEATURES", {
    enumerable: true,
    get: ()=>PRIVATE_INFERENCE_OFF_FEATURES
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_ALL_BUSY_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_ALL_BUSY_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_BC_ID_HEADER_NAME", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_BC_ID_HEADER_NAME
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_CAPACITY_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_CAPACITY_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_CLAIMED_BC_ID_HEADER_NAME", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_CLAIMED_BC_ID_HEADER_NAME
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_CLI_VERSION_HEADER_NAME", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_CLI_VERSION_HEADER_NAME
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_DISCONNECTED_TITLE", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_DISCONNECTED_TITLE
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_DISCONNECTED_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_DISCONNECTED_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_HOST_POWER_STATE_HEADER_NAME", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_HOST_POWER_STATE_HEADER_NAME
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_ID_HEADER_NAME", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_ID_HEADER_NAME
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_MACHINE_OFFLINE_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_MACHINE_OFFLINE_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_MISSING_REPO_URL_MESSAGE", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_MISSING_REPO_URL_MESSAGE
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_RESUMED_AFTER_SUSPEND_MS_HEADER_NAME", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_RESUMED_AFTER_SUSPEND_MS_HEADER_NAME
});
Object.defineProperty(dist_exports, "PRIVATE_WORKER_SESSION_OWNER_FILENAME", {
    enumerable: true,
    get: ()=>PRIVATE_WORKER_SESSION_OWNER_FILENAME
});
Object.defineProperty(dist_exports, "PROACTIVE_TYPES", {
    enumerable: true,
    get: ()=>PROACTIVE_TYPES
});
Object.defineProperty(dist_exports, "PROFILE_BADGE_CURSOR_AMBASSADOR", {
    enumerable: true,
    get: ()=>PROFILE_BADGE_CURSOR_AMBASSADOR
});
Object.defineProperty(dist_exports, "PROFILE_BADGE_CURSOR_TEAM", {
    enumerable: true,
    get: ()=>PROFILE_BADGE_CURSOR_TEAM
});
Object.defineProperty(dist_exports, "PROFILE_BADGE_IDS", {
    enumerable: true,
    get: ()=>PROFILE_BADGE_IDS
});
Object.defineProperty(dist_exports, "PROFILE_METADATA_BADGES_KEY", {
    enumerable: true,
    get: ()=>PROFILE_METADATA_BADGES_KEY
});
Object.defineProperty(dist_exports, "PROJECT_APPEARANCE_COLOR_IDS", {
    enumerable: true,
    get: ()=>PROJECT_APPEARANCE_COLOR_IDS
});
Object.defineProperty(dist_exports, "PROJECT_SUBAGENT_DEFAULT_NAME", {
    enumerable: true,
    get: ()=>PROJECT_SUBAGENT_DEFAULT_NAME
});
Object.defineProperty(dist_exports, "PROJECT_SUBAGENT_TYPE_NAME", {
    enumerable: true,
    get: ()=>PROJECT_SUBAGENT_TYPE_NAME
});
Object.defineProperty(dist_exports, "PROVIDER_USER_BLOCKED_ERROR_CODE", {
    enumerable: true,
    get: ()=>PROVIDER_USER_BLOCKED_ERROR_CODE
});
Object.defineProperty(dist_exports, "PR_CODE_TOUR_SOURCE_PRECEDENCE", {
    enumerable: true,
    get: ()=>PR_CODE_TOUR_SOURCE_PRECEDENCE
});
Object.defineProperty(dist_exports, "RECENTLY_CREATED_USER_WINDOW_MS", {
    enumerable: true,
    get: ()=>RECENTLY_CREATED_USER_WINDOW_MS
});
Object.defineProperty(dist_exports, "REFRESH_AGENT_STORE_PEER_PATHS_COMMAND", {
    enumerable: true,
    get: ()=>REFRESH_AGENT_STORE_PEER_PATHS_COMMAND
});
Object.defineProperty(dist_exports, "REFRESH_USER_AGENT_STORE_SKILLS_SYNC_SETTING_COMMAND", {
    enumerable: true,
    get: ()=>REFRESH_USER_AGENT_STORE_SKILLS_SYNC_SETTING_COMMAND
});
Object.defineProperty(dist_exports, "REMOTE_AGENT_HOST_CANCEL_METHOD", {
    enumerable: true,
    get: ()=>REMOTE_AGENT_HOST_CANCEL_METHOD
});
Object.defineProperty(dist_exports, "REMOTE_AGENT_HOST_CONTROLLER_CHALLENGES_CHANGED_METHOD", {
    enumerable: true,
    get: ()=>REMOTE_AGENT_HOST_CONTROLLER_CHALLENGES_CHANGED_METHOD
});
Object.defineProperty(dist_exports, "REMOTE_AGENT_HOST_HEARTBEAT_INTERVAL_MS", {
    enumerable: true,
    get: ()=>REMOTE_AGENT_HOST_HEARTBEAT_INTERVAL_MS
});
Object.defineProperty(dist_exports, "REMOTE_AGENT_HOST_HEARTBEAT_METHOD", {
    enumerable: true,
    get: ()=>REMOTE_AGENT_HOST_HEARTBEAT_METHOD
});
Object.defineProperty(dist_exports, "REMOTE_AGENT_HOST_HEARTBEAT_TIMEOUT_MS", {
    enumerable: true,
    get: ()=>REMOTE_AGENT_HOST_HEARTBEAT_TIMEOUT_MS
});
Object.defineProperty(dist_exports, "REMOTE_AGENT_HOST_TUNNEL_GOAWAY_COMMAND", {
    enumerable: true,
    get: ()=>REMOTE_AGENT_HOST_TUNNEL_GOAWAY_COMMAND
});
Object.defineProperty(dist_exports, "REMOTE_AGENT_HOST_TUNNEL_REVISIONS_HEADER", {
    enumerable: true,
    get: ()=>REMOTE_AGENT_HOST_TUNNEL_REVISIONS_HEADER
});
Object.defineProperty(dist_exports, "REMOTE_AGENT_HOST_TUNNEL_REVISION_FLOW_CONTROL", {
    enumerable: true,
    get: ()=>REMOTE_AGENT_HOST_TUNNEL_REVISION_FLOW_CONTROL
});
Object.defineProperty(dist_exports, "REMOTE_AGENT_HOST_TUNNEL_SETTINGS_METHOD", {
    enumerable: true,
    get: ()=>REMOTE_AGENT_HOST_TUNNEL_SETTINGS_METHOD
});
Object.defineProperty(dist_exports, "REMOTE_AGENT_HOST_WINDOW_UPDATE_METHOD", {
    enumerable: true,
    get: ()=>REMOTE_AGENT_HOST_WINDOW_UPDATE_METHOD
});
Object.defineProperty(dist_exports, "REPO_LABEL_FIXTURES", {
    enumerable: true,
    get: ()=>REPO_LABEL_FIXTURES
});
Object.defineProperty(dist_exports, "REPO_NOT_FOUND_FAILURE_CODE", {
    enumerable: true,
    get: ()=>REPO_NOT_FOUND_FAILURE_CODE
});
Object.defineProperty(dist_exports, "RESOLVE_AGENT_STORE_REFERENCES_COMMAND", {
    enumerable: true,
    get: ()=>RESOLVE_AGENT_STORE_REFERENCES_COMMAND
});
Object.defineProperty(dist_exports, "RESOLVE_AGENT_STORE_SCOPE_PATHS_COMMAND", {
    enumerable: true,
    get: ()=>RESOLVE_AGENT_STORE_SCOPE_PATHS_COMMAND
});
Object.defineProperty(dist_exports, "RESOLVE_PR_MERGE_CONFLICTS_SKILL_ID", {
    enumerable: true,
    get: ()=>RESOLVE_PR_MERGE_CONFLICTS_SKILL_ID
});
Object.defineProperty(dist_exports, "REST_MCP_CURSOR_AUTH_HEADER", {
    enumerable: true,
    get: ()=>REST_MCP_CURSOR_AUTH_HEADER
});
Object.defineProperty(dist_exports, "REST_MCP_HOST", {
    enumerable: true,
    get: ()=>REST_MCP_HOST
});
Object.defineProperty(dist_exports, "REST_MCP_SCM_ERROR_CODES", {
    enumerable: true,
    get: ()=>REST_MCP_SCM_ERROR_CODES
});
Object.defineProperty(dist_exports, "REST_MCP_SCM_NOT_CONNECTED_REASONS", {
    enumerable: true,
    get: ()=>REST_MCP_SCM_NOT_CONNECTED_REASONS
});
Object.defineProperty(dist_exports, "SAND_AGENT_STORE_RPC_SERVICE_DEDICATED_VALUE", {
    enumerable: true,
    get: ()=>SAND_AGENT_STORE_RPC_SERVICE_DEDICATED_VALUE
});
Object.defineProperty(dist_exports, "SAND_AGENT_STORE_RPC_SERVICE_ENV", {
    enumerable: true,
    get: ()=>SAND_AGENT_STORE_RPC_SERVICE_ENV
});
Object.defineProperty(dist_exports, "SAND_BOX_AGENT_DATA_ROOT", {
    enumerable: true,
    get: ()=>SAND_BOX_AGENT_DATA_ROOT
});
Object.defineProperty(dist_exports, "SAND_BOX_CHROME_POLICY_ONEPASSWORD_ENV", {
    enumerable: true,
    get: ()=>SAND_BOX_CHROME_POLICY_ONEPASSWORD_ENV
});
Object.defineProperty(dist_exports, "SAND_BOX_FORK_NOVNC_PORT", {
    enumerable: true,
    get: ()=>SAND_BOX_FORK_NOVNC_PORT
});
Object.defineProperty(dist_exports, "SAND_BOX_HIBERNATE_HOOK_PATH", {
    enumerable: true,
    get: ()=>SAND_BOX_HIBERNATE_HOOK_PATH
});
Object.defineProperty(dist_exports, "SAND_BOX_HOST_BUNDLE_ROOT", {
    enumerable: true,
    get: ()=>SAND_BOX_HOST_BUNDLE_ROOT
});
Object.defineProperty(dist_exports, "SAND_BOX_HOST_DIR", {
    enumerable: true,
    get: ()=>SAND_BOX_HOST_DIR
});
Object.defineProperty(dist_exports, "SAND_BOX_HOST_ENTRY", {
    enumerable: true,
    get: ()=>SAND_BOX_HOST_ENTRY
});
Object.defineProperty(dist_exports, "SAND_BOX_HOST_UPGRADE_MARKER_PATH", {
    enumerable: true,
    get: ()=>SAND_BOX_HOST_UPGRADE_MARKER_PATH
});
Object.defineProperty(dist_exports, "SAND_BOX_HOST_USER", {
    enumerable: true,
    get: ()=>SAND_BOX_HOST_USER
});
Object.defineProperty(dist_exports, "SAND_BOX_HOST_VERSION_PATH", {
    enumerable: true,
    get: ()=>SAND_BOX_HOST_VERSION_PATH
});
Object.defineProperty(dist_exports, "SAND_BOX_IMAGE_TAG_LATEST", {
    enumerable: true,
    get: ()=>SAND_BOX_IMAGE_TAG_LATEST
});
Object.defineProperty(dist_exports, "SAND_BOX_IMAGE_TAG_PREFIX", {
    enumerable: true,
    get: ()=>SAND_BOX_IMAGE_TAG_PREFIX
});
Object.defineProperty(dist_exports, "SAND_BOX_LABEL_EGRESS_TEAM", {
    enumerable: true,
    get: ()=>SAND_BOX_LABEL_EGRESS_TEAM
});
Object.defineProperty(dist_exports, "SAND_BOX_LABEL_FLAVOR", {
    enumerable: true,
    get: ()=>SAND_BOX_LABEL_FLAVOR
});
Object.defineProperty(dist_exports, "SAND_BOX_LABEL_IMAGE_TAG", {
    enumerable: true,
    get: ()=>SAND_BOX_LABEL_IMAGE_TAG
});
Object.defineProperty(dist_exports, "SAND_BOX_LABEL_KIND", {
    enumerable: true,
    get: ()=>SAND_BOX_LABEL_KIND
});
Object.defineProperty(dist_exports, "SAND_BOX_LABEL_OWNER", {
    enumerable: true,
    get: ()=>SAND_BOX_LABEL_OWNER
});
Object.defineProperty(dist_exports, "SAND_BOX_LABEL_SESSION", {
    enumerable: true,
    get: ()=>SAND_BOX_LABEL_SESSION
});
Object.defineProperty(dist_exports, "SAND_BOX_LEGACY_STORE_ABSENT_VALUE", {
    enumerable: true,
    get: ()=>SAND_BOX_LEGACY_STORE_ABSENT_VALUE
});
Object.defineProperty(dist_exports, "SAND_BOX_LEGACY_STORE_ENV", {
    enumerable: true,
    get: ()=>SAND_BOX_LEGACY_STORE_ENV
});
Object.defineProperty(dist_exports, "SAND_BOX_NOVNC_HIBERNATION_BOUNDS", {
    enumerable: true,
    get: ()=>SAND_BOX_NOVNC_HIBERNATION_BOUNDS
});
Object.defineProperty(dist_exports, "SAND_BOX_ONEPASSWORD_EXTENSION_DIR", {
    enumerable: true,
    get: ()=>SAND_BOX_ONEPASSWORD_EXTENSION_DIR
});
Object.defineProperty(dist_exports, "SAND_BOX_ONEPASSWORD_EXTENSION_ID_FILE", {
    enumerable: true,
    get: ()=>SAND_BOX_ONEPASSWORD_EXTENSION_ID_FILE
});
Object.defineProperty(dist_exports, "SAND_BOX_ONEPASSWORD_EXTENSION_UPDATE_XML", {
    enumerable: true,
    get: ()=>SAND_BOX_ONEPASSWORD_EXTENSION_UPDATE_XML
});
Object.defineProperty(dist_exports, "SAND_BOX_PARK_HEADER", {
    enumerable: true,
    get: ()=>SAND_BOX_PARK_HEADER
});
Object.defineProperty(dist_exports, "SAND_BOX_PARK_MODES", {
    enumerable: true,
    get: ()=>SAND_BOX_PARK_MODES
});
Object.defineProperty(dist_exports, "SAND_BOX_PERSISTED_PATHS", {
    enumerable: true,
    get: ()=>SAND_BOX_PERSISTED_PATHS
});
Object.defineProperty(dist_exports, "SAND_BOX_PERSIST_ARCHIVE_EXCLUDES", {
    enumerable: true,
    get: ()=>SAND_BOX_PERSIST_ARCHIVE_EXCLUDES
});
Object.defineProperty(dist_exports, "SAND_BOX_PRIMARY_NOVNC_PORT", {
    enumerable: true,
    get: ()=>SAND_BOX_PRIMARY_NOVNC_PORT
});
Object.defineProperty(dist_exports, "SAND_BOX_SESSION_ENV", {
    enumerable: true,
    get: ()=>SAND_BOX_SESSION_ENV
});
Object.defineProperty(dist_exports, "SAND_BOX_SESSION_ON_VALUE", {
    enumerable: true,
    get: ()=>SAND_BOX_SESSION_ON_VALUE
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_BACKEND_ENV", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_BACKEND_ENV
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_BACKEND_V2_VALUE", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_BACKEND_V2_VALUE
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_BLOBS_PREFIX", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_BLOBS_PREFIX
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_COPY_IN_ENV", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_COPY_IN_ENV
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_FLUSH_FIFO_DIR", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_FLUSH_FIFO_DIR
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_HIBERNATE_HOOK_ENV", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_HIBERNATE_HOOK_ENV
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_HIBERNATE_HOOK_ON_VALUE", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_HIBERNATE_HOOK_ON_VALUE
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_ID_ENV", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_ID_ENV
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_MANIFEST_COMMIT_ENV", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_MANIFEST_COMMIT_ENV
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_MANIFEST_COMMIT_ON_VALUE", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_MANIFEST_COMMIT_ON_VALUE
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_MANIFEST_REL_PATH", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_MANIFEST_REL_PATH
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_OWNER_REL_PATH", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_OWNER_REL_PATH
});
Object.defineProperty(dist_exports, "SAND_BOX_STORE_SYNC_ENV", {
    enumerable: true,
    get: ()=>SAND_BOX_STORE_SYNC_ENV
});
Object.defineProperty(dist_exports, "SAND_BOX_WORKSPACE_DEFAULT_IGNORE_PATTERNS", {
    enumerable: true,
    get: ()=>SAND_BOX_WORKSPACE_DEFAULT_IGNORE_PATTERNS
});
Object.defineProperty(dist_exports, "SAND_DESKTOP_SUPERVISION_DISABLED_ENV", {
    enumerable: true,
    get: ()=>SAND_DESKTOP_SUPERVISION_DISABLED_ENV
});
Object.defineProperty(dist_exports, "SAND_DESKTOP_SUPERVISOR_DIR", {
    enumerable: true,
    get: ()=>SAND_DESKTOP_SUPERVISOR_DIR
});
Object.defineProperty(dist_exports, "SAND_HOST_BUNDLE_CHANNELS", {
    enumerable: true,
    get: ()=>SAND_HOST_BUNDLE_CHANNELS
});
Object.defineProperty(dist_exports, "SAND_HOST_BUNDLE_CHANNEL_ENV", {
    enumerable: true,
    get: ()=>SAND_HOST_BUNDLE_CHANNEL_ENV
});
Object.defineProperty(dist_exports, "SAND_HOST_BUNDLE_DEFAULT_CHANNEL", {
    enumerable: true,
    get: ()=>SAND_HOST_BUNDLE_DEFAULT_CHANNEL
});
Object.defineProperty(dist_exports, "SAND_HOST_BUNDLE_PROMOTABLE_CHANNELS", {
    enumerable: true,
    get: ()=>SAND_HOST_BUNDLE_PROMOTABLE_CHANNELS
});
Object.defineProperty(dist_exports, "SAND_HOST_BUNDLE_PUBLIC_BASE_URL", {
    enumerable: true,
    get: ()=>SAND_HOST_BUNDLE_PUBLIC_BASE_URL
});
Object.defineProperty(dist_exports, "SAND_HOST_BUNDLE_S3_BUCKET", {
    enumerable: true,
    get: ()=>SAND_HOST_BUNDLE_S3_BUCKET
});
Object.defineProperty(dist_exports, "SAND_HOST_BUNDLE_S3_PREFIX", {
    enumerable: true,
    get: ()=>SAND_HOST_BUNDLE_S3_PREFIX
});
Object.defineProperty(dist_exports, "SAND_HOST_BUNDLE_S3_REGION", {
    enumerable: true,
    get: ()=>SAND_HOST_BUNDLE_S3_REGION
});
Object.defineProperty(dist_exports, "SAND_HOST_BUNDLE_SHA256_REGEX", {
    enumerable: true,
    get: ()=>SAND_HOST_BUNDLE_SHA256_REGEX
});
Object.defineProperty(dist_exports, "SAND_HOST_UID_SPLIT_ENV", {
    enumerable: true,
    get: ()=>SAND_HOST_UID_SPLIT_ENV
});
Object.defineProperty(dist_exports, "SAND_HOST_UPGRADE_MAX_DEFER_MS", {
    enumerable: true,
    get: ()=>SAND_HOST_UPGRADE_MAX_DEFER_MS
});
Object.defineProperty(dist_exports, "SAND_MANAGED_ROOT", {
    enumerable: true,
    get: ()=>SAND_MANAGED_ROOT
});
Object.defineProperty(dist_exports, "SAND_MANAGED_SETUP_AS_BOX_USER_FLAG", {
    enumerable: true,
    get: ()=>SAND_MANAGED_SETUP_AS_BOX_USER_FLAG
});
Object.defineProperty(dist_exports, "SAND_MANAGED_SETUP_FORCE_FLAG", {
    enumerable: true,
    get: ()=>SAND_MANAGED_SETUP_FORCE_FLAG
});
Object.defineProperty(dist_exports, "SAND_MANAGED_SETUP_PRIVILEGED_CONVERGE_PATH", {
    enumerable: true,
    get: ()=>SAND_MANAGED_SETUP_PRIVILEGED_CONVERGE_PATH
});
Object.defineProperty(dist_exports, "SAND_MANAGED_SETUP_RUN_AS_ENV", {
    enumerable: true,
    get: ()=>SAND_MANAGED_SETUP_RUN_AS_ENV
});
Object.defineProperty(dist_exports, "SAND_MANAGED_SETUP_RUN_AS_VALUES", {
    enumerable: true,
    get: ()=>SAND_MANAGED_SETUP_RUN_AS_VALUES
});
Object.defineProperty(dist_exports, "SAND_MANAGED_SETUP_TEAM_ID_ENV", {
    enumerable: true,
    get: ()=>SAND_MANAGED_SETUP_TEAM_ID_ENV
});
Object.defineProperty(dist_exports, "SAND_MANIFESTS_ROOT", {
    enumerable: true,
    get: ()=>SAND_MANIFESTS_ROOT
});
Object.defineProperty(dist_exports, "SAND_MANIFEST_ASSIGNMENT_PATH", {
    enumerable: true,
    get: ()=>SAND_MANIFEST_ASSIGNMENT_PATH
});
Object.defineProperty(dist_exports, "SAND_SETUP_CONVERGE_LOG_PATH", {
    enumerable: true,
    get: ()=>SAND_SETUP_CONVERGE_LOG_PATH
});
Object.defineProperty(dist_exports, "SAND_SETUP_FAILURE_CLASSES", {
    enumerable: true,
    get: ()=>SAND_SETUP_FAILURE_CLASSES
});
Object.defineProperty(dist_exports, "SAND_SETUP_MAX_SECRETS_PER_TEAM", {
    enumerable: true,
    get: ()=>SAND_SETUP_MAX_SECRETS_PER_TEAM
});
Object.defineProperty(dist_exports, "SAND_SETUP_MAX_SECRET_ENV_BYTES", {
    enumerable: true,
    get: ()=>SAND_SETUP_MAX_SECRET_ENV_BYTES
});
Object.defineProperty(dist_exports, "SAND_SETUP_MAX_SECRET_VALUE_BYTES", {
    enumerable: true,
    get: ()=>SAND_SETUP_MAX_SECRET_VALUE_BYTES
});
Object.defineProperty(dist_exports, "SAND_SETUP_PHASES", {
    enumerable: true,
    get: ()=>SAND_SETUP_PHASES
});
Object.defineProperty(dist_exports, "SAND_SETUP_RECEIPTS_ROOT", {
    enumerable: true,
    get: ()=>SAND_SETUP_RECEIPTS_ROOT
});
Object.defineProperty(dist_exports, "SAND_SETUP_SCHEMA_VERSION", {
    enumerable: true,
    get: ()=>SAND_SETUP_SCHEMA_VERSION
});
Object.defineProperty(dist_exports, "SAND_SETUP_SCOPE_KINDS", {
    enumerable: true,
    get: ()=>SAND_SETUP_SCOPE_KINDS
});
Object.defineProperty(dist_exports, "SAND_SETUP_SECRET_ENVELOPE_VERSION", {
    enumerable: true,
    get: ()=>SAND_SETUP_SECRET_ENVELOPE_VERSION
});
Object.defineProperty(dist_exports, "SAND_SETUP_STATUS_PATH", {
    enumerable: true,
    get: ()=>SAND_SETUP_STATUS_PATH
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_ACKS_DIR", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_ACKS_DIR
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_COMMAND_KINDS", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_COMMAND_KINDS
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_COMMAND_PART_PATH", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_COMMAND_PART_PATH
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_COMMAND_PATH", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_COMMAND_PATH
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_DESKTOP_DIR", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_DESKTOP_DIR
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_DESKTOP_HEALTH_PATH", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_DESKTOP_HEALTH_PATH
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_DESKTOP_HEALTH_PATH_ENV", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_DESKTOP_HEALTH_PATH_ENV
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_DIR", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_DIR
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_DIR_ENV", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_DIR_ENV
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_ROLES", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_ROLES
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_ROLE_ENV", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_ROLE_ENV
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_STAGED_BUNDLE_PART_PATH", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_STAGED_BUNDLE_PART_PATH
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_STAGED_BUNDLE_PATH", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_STAGED_BUNDLE_PATH
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_STATUS_PATH", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_STATUS_PATH
});
Object.defineProperty(dist_exports, "SAND_SUPERVISOR_UPGRADE_MODES", {
    enumerable: true,
    get: ()=>SAND_SUPERVISOR_UPGRADE_MODES
});
Object.defineProperty(dist_exports, "SAND_WORKSPACE_IGNORE_FILE_NAME", {
    enumerable: true,
    get: ()=>SAND_WORKSPACE_IGNORE_FILE_NAME
});
Object.defineProperty(dist_exports, "SCM_ACCOUNT_NOT_CONNECTED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>SCM_ACCOUNT_NOT_CONNECTED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "SCM_AUTH_FAILED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>SCM_AUTH_FAILED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "SCM_AUTH_FAILED_MESSAGE_PREFIX", {
    enumerable: true,
    get: ()=>SCM_AUTH_FAILED_MESSAGE_PREFIX
});
Object.defineProperty(dist_exports, "SCM_AUTH_FAILED_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>SCM_AUTH_FAILED_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "SCM_CHECKOUT_FAILED_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>SCM_CHECKOUT_FAILED_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "SCM_HOST_UNAVAILABLE_FAILURE_CODE", {
    enumerable: true,
    get: ()=>SCM_HOST_UNAVAILABLE_FAILURE_CODE
});
Object.defineProperty(dist_exports, "SCM_PROVIDERS", {
    enumerable: true,
    get: ()=>SCM_PROVIDERS
});
Object.defineProperty(dist_exports, "SCM_PR_BATCH_MAX_URLS", {
    enumerable: true,
    get: ()=>SCM_PR_BATCH_MAX_URLS
});
Object.defineProperty(dist_exports, "SCM_RATE_LIMITED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>SCM_RATE_LIMITED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "SCM_REF_NOT_FOUND_FAILURE_CODE", {
    enumerable: true,
    get: ()=>SCM_REF_NOT_FOUND_FAILURE_CODE
});
Object.defineProperty(dist_exports, "SCM_REF_NOT_FOUND_MESSAGE_PREFIX", {
    enumerable: true,
    get: ()=>SCM_REF_NOT_FOUND_MESSAGE_PREFIX
});
Object.defineProperty(dist_exports, "SCM_REPO_ACCESS_DENIED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>SCM_REPO_ACCESS_DENIED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "SCM_REPO_EMPTY_FAILURE_CODE", {
    enumerable: true,
    get: ()=>SCM_REPO_EMPTY_FAILURE_CODE
});
Object.defineProperty(dist_exports, "SCM_RPC_CALLSITES", {
    enumerable: true,
    get: ()=>SCM_RPC_CALLSITES
});
Object.defineProperty(dist_exports, "SCM_RPC_CALLSITE_HEADER_NAME", {
    enumerable: true,
    get: ()=>SCM_RPC_CALLSITE_HEADER_NAME
});
Object.defineProperty(dist_exports, "SCP_STYLE_GIT_URL_REGEX", {
    enumerable: true,
    get: ()=>SCP_STYLE_GIT_URL_REGEX
});
Object.defineProperty(dist_exports, "SERVICE_TOKEN_ORGANIZATION_SCOPES", {
    enumerable: true,
    get: ()=>SERVICE_TOKEN_ORGANIZATION_SCOPES
});
Object.defineProperty(dist_exports, "SERVICE_TOKEN_ORGANIZATION_SCOPE_GROUPS", {
    enumerable: true,
    get: ()=>SERVICE_TOKEN_ORGANIZATION_SCOPE_GROUPS
});
Object.defineProperty(dist_exports, "SERVICE_TOKEN_SCOPE_CLI_SESSION", {
    enumerable: true,
    get: ()=>SERVICE_TOKEN_SCOPE_CLI_SESSION
});
Object.defineProperty(dist_exports, "SERVICE_TOKEN_SCOPE_CLOUD_AGENTS", {
    enumerable: true,
    get: ()=>SERVICE_TOKEN_SCOPE_CLOUD_AGENTS
});
Object.defineProperty(dist_exports, "SERVICE_TOKEN_TEAM_SCOPES", {
    enumerable: true,
    get: ()=>SERVICE_TOKEN_TEAM_SCOPES
});
Object.defineProperty(dist_exports, "SERVICE_TOKEN_TEAM_SCOPE_GROUPS", {
    enumerable: true,
    get: ()=>SERVICE_TOKEN_TEAM_SCOPE_GROUPS
});
Object.defineProperty(dist_exports, "SERVICE_TOKEN_USER_SCOPES", {
    enumerable: true,
    get: ()=>SERVICE_TOKEN_USER_SCOPES
});
Object.defineProperty(dist_exports, "SERVICE_TOKEN_USER_SCOPE_GROUPS", {
    enumerable: true,
    get: ()=>SERVICE_TOKEN_USER_SCOPE_GROUPS
});
Object.defineProperty(dist_exports, "SHELL_INITIALIZATION_FAILED_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>SHELL_INITIALIZATION_FAILED_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "SHORT_GIT_SHA_REGEX", {
    enumerable: true,
    get: ()=>SHORT_GIT_SHA_REGEX
});
Object.defineProperty(dist_exports, "SIDE_CHAT_BOUNDARY_BODY", {
    enumerable: true,
    get: ()=>SIDE_CHAT_BOUNDARY_BODY
});
Object.defineProperty(dist_exports, "SIDE_CHAT_BOUNDARY_MESSAGE_ID_PREFIX", {
    enumerable: true,
    get: ()=>SIDE_CHAT_BOUNDARY_MESSAGE_ID_PREFIX
});
Object.defineProperty(dist_exports, "SIDE_CHAT_BOUNDARY_TAG", {
    enumerable: true,
    get: ()=>SIDE_CHAT_BOUNDARY_TAG
});
Object.defineProperty(dist_exports, "SIDE_CHAT_CREATION_REJECTED_REASON_KEY", {
    enumerable: true,
    get: ()=>SIDE_CHAT_CREATION_REJECTED_REASON_KEY
});
Object.defineProperty(dist_exports, "SIDE_CHAT_CREATION_REJECTED_TOO_MANY", {
    enumerable: true,
    get: ()=>SIDE_CHAT_CREATION_REJECTED_TOO_MANY
});
Object.defineProperty(dist_exports, "SIDE_CHAT_DEFAULT_NAME", {
    enumerable: true,
    get: ()=>SIDE_CHAT_DEFAULT_NAME
});
Object.defineProperty(dist_exports, "SIDE_CHAT_LIMIT_REACHED_MESSAGE", {
    enumerable: true,
    get: ()=>SIDE_CHAT_LIMIT_REACHED_MESSAGE
});
Object.defineProperty(dist_exports, "SIDE_CHAT_LIMIT_REACHED_TITLE", {
    enumerable: true,
    get: ()=>SIDE_CHAT_LIMIT_REACHED_TITLE
});
Object.defineProperty(dist_exports, "SIDE_CHAT_NAME_MAX_LENGTH", {
    enumerable: true,
    get: ()=>SIDE_CHAT_NAME_MAX_LENGTH
});
Object.defineProperty(dist_exports, "SIDE_CHAT_NAME_REMINDER", {
    enumerable: true,
    get: ()=>SIDE_CHAT_NAME_REMINDER
});
Object.defineProperty(dist_exports, "SIDE_CHAT_STICKY_REMINDER_BODY", {
    enumerable: true,
    get: ()=>SIDE_CHAT_STICKY_REMINDER_BODY
});
Object.defineProperty(dist_exports, "SIDE_CHAT_STICKY_SYSTEM_REMINDER", {
    enumerable: true,
    get: ()=>SIDE_CHAT_STICKY_SYSTEM_REMINDER
});
Object.defineProperty(dist_exports, "SIDE_CHAT_SUBAGENT_TYPE_NAME", {
    enumerable: true,
    get: ()=>SIDE_CHAT_SUBAGENT_TYPE_NAME
});
Object.defineProperty(dist_exports, "SNAPSHOT_COPY_FAILED_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>SNAPSHOT_COPY_FAILED_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "SNAPSHOT_EXPIRED_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>SNAPSHOT_EXPIRED_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "SNAPSHOT_FAILED_FAILURE_CODE", {
    enumerable: true,
    get: ()=>SNAPSHOT_FAILED_FAILURE_CODE
});
Object.defineProperty(dist_exports, "SNAPSHOT_INVALID_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>SNAPSHOT_INVALID_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "SNAPSHOT_NOT_FOUND_OR_NO_ACCESS_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>SNAPSHOT_NOT_FOUND_OR_NO_ACCESS_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "SPAWN_CWD_HOP_ENV_VAR", {
    enumerable: true,
    get: ()=>SPAWN_CWD_HOP_ENV_VAR
});
Object.defineProperty(dist_exports, "STAGED_PROJECT_ICONS", {
    enumerable: true,
    get: ()=>STAGED_PROJECT_ICONS
});
Object.defineProperty(dist_exports, "STAGED_PROJECT_INIT_DESCRIPTION_MAX_CHARS", {
    enumerable: true,
    get: ()=>STAGED_PROJECT_INIT_DESCRIPTION_MAX_CHARS
});
Object.defineProperty(dist_exports, "STANDARD_STARTUP_CREDIT_GRANT_CENTS", {
    enumerable: true,
    get: ()=>STANDARD_STARTUP_CREDIT_GRANT_CENTS
});
Object.defineProperty(dist_exports, "STANDARD_STARTUP_CREDIT_GRANT_PRODUCT_ID", {
    enumerable: true,
    get: ()=>STANDARD_STARTUP_CREDIT_GRANT_PRODUCT_ID
});
Object.defineProperty(dist_exports, "STANDARD_STARTUP_PROMO_DURATION_MONTHS", {
    enumerable: true,
    get: ()=>STANDARD_STARTUP_PROMO_DURATION_MONTHS
});
Object.defineProperty(dist_exports, "STARTUP_OFFER_TYPES", {
    enumerable: true,
    get: ()=>STARTUP_OFFER_TYPES
});
Object.defineProperty(dist_exports, "STARTUP_OFFER_V2_12MO_MONTHS", {
    enumerable: true,
    get: ()=>STARTUP_OFFER_V2_12MO_MONTHS
});
Object.defineProperty(dist_exports, "STARTUP_OFFER_V2_CONFIGS", {
    enumerable: true,
    get: ()=>STARTUP_OFFER_V2_CONFIGS
});
Object.defineProperty(dist_exports, "STARTUP_OFFER_V2_MONTHS", {
    enumerable: true,
    get: ()=>STARTUP_OFFER_V2_MONTHS
});
Object.defineProperty(dist_exports, "STARTUP_T1_20_50_12MO_TEAM_REFERRAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>STARTUP_T1_20_50_12MO_TEAM_REFERRAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "STARTUP_T1_20_50_ATTRIBUTION_SOURCE", {
    enumerable: true,
    get: ()=>STARTUP_T1_20_50_ATTRIBUTION_SOURCE
});
Object.defineProperty(dist_exports, "STARTUP_T1_20_50_TEAM_REFERRAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>STARTUP_T1_20_50_TEAM_REFERRAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "STARTUP_TEAM_REFERRAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>STARTUP_TEAM_REFERRAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "STARTUP_YC_BATCH_20_50_12MO_TEAM_REFERRAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>STARTUP_YC_BATCH_20_50_12MO_TEAM_REFERRAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "STARTUP_YC_BATCH_20_50_ATTRIBUTION_SOURCE", {
    enumerable: true,
    get: ()=>STARTUP_YC_BATCH_20_50_ATTRIBUTION_SOURCE
});
Object.defineProperty(dist_exports, "STARTUP_YC_BATCH_20_50_TEAM_REFERRAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>STARTUP_YC_BATCH_20_50_TEAM_REFERRAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "STARTUP_YC_BATCH_TEAM_REFERRAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>STARTUP_YC_BATCH_TEAM_REFERRAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "STARTUP_YC_STANDARD_12MO_TEAM_REFERRAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>STARTUP_YC_STANDARD_12MO_TEAM_REFERRAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "STARTUP_YC_STANDARD_TEAM_REFERRAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>STARTUP_YC_STANDARD_TEAM_REFERRAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "STARTUP_YC_TEAM_REFERRAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>STARTUP_YC_TEAM_REFERRAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "STRUCTURED_LOG_KEYS", {
    enumerable: true,
    get: ()=>STRUCTURED_LOG_KEYS
});
Object.defineProperty(dist_exports, "SUBAGENT_COMPOSER_BCID_NAMESPACE", {
    enumerable: true,
    get: ()=>SUBAGENT_COMPOSER_BCID_NAMESPACE
});
Object.defineProperty(dist_exports, "SUBSCRIPTION_RESULTS_INBOX_PREFIX", {
    enumerable: true,
    get: ()=>SUBSCRIPTION_RESULTS_INBOX_PREFIX
});
Object.defineProperty(dist_exports, "SUBSCRIPTION_RESULTS_INBOX_TYPE", {
    enumerable: true,
    get: ()=>SUBSCRIPTION_RESULTS_INBOX_TYPE
});
Object.defineProperty(dist_exports, "SYNC_AGENT_STORE_PATH_COMMAND", {
    enumerable: true,
    get: ()=>SYNC_AGENT_STORE_PATH_COMMAND
});
Object.defineProperty(dist_exports, "SYNC_DASHBOARD_SECRETS_LABEL_KEY", {
    enumerable: true,
    get: ()=>SYNC_DASHBOARD_SECRETS_LABEL_KEY
});
Object.defineProperty(dist_exports, "SYSTEM_NOTIFICATION_CLOSE_TAG", {
    enumerable: true,
    get: ()=>SYSTEM_NOTIFICATION_CLOSE_TAG
});
Object.defineProperty(dist_exports, "SYSTEM_NOTIFICATION_OPEN_TAG", {
    enumerable: true,
    get: ()=>SYSTEM_NOTIFICATION_OPEN_TAG
});
Object.defineProperty(dist_exports, "SYSTEM_NOTIFICATION_TAG", {
    enumerable: true,
    get: ()=>SYSTEM_NOTIFICATION_TAG
});
Object.defineProperty(dist_exports, "TEAMS_TRIAL_AMOUNT_CENTS", {
    enumerable: true,
    get: ()=>TEAMS_TRIAL_AMOUNT_CENTS
});
Object.defineProperty(dist_exports, "TEAMS_TRIAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>TEAMS_TRIAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "TEAMS_TRIAL_V2_DURATION_DAYS", {
    enumerable: true,
    get: ()=>TEAMS_TRIAL_V2_DURATION_DAYS
});
Object.defineProperty(dist_exports, "TEAMS_TRIAL_V2_INITIAL_CREDIT_AMOUNT_CENTS", {
    enumerable: true,
    get: ()=>TEAMS_TRIAL_V2_INITIAL_CREDIT_AMOUNT_CENTS
});
Object.defineProperty(dist_exports, "TEAMS_TRIAL_V2_INITIAL_GRANT_PRODUCT_ID", {
    enumerable: true,
    get: ()=>TEAMS_TRIAL_V2_INITIAL_GRANT_PRODUCT_ID
});
Object.defineProperty(dist_exports, "TEAMS_TRIAL_V2_INVITE_PROMO_PAID_COUNT_OFFSET", {
    enumerable: true,
    get: ()=>TEAMS_TRIAL_V2_INVITE_PROMO_PAID_COUNT_OFFSET
});
Object.defineProperty(dist_exports, "TEAMS_TRIAL_V2_MAX_FREE_SEATS", {
    enumerable: true,
    get: ()=>TEAMS_TRIAL_V2_MAX_FREE_SEATS
});
Object.defineProperty(dist_exports, "TEAMS_TRIAL_V2_MAX_INVITE_PROMO_SEATS", {
    enumerable: true,
    get: ()=>TEAMS_TRIAL_V2_MAX_INVITE_PROMO_SEATS
});
Object.defineProperty(dist_exports, "TEAMS_TRIAL_V2_REFERRAL_DISCOUNT_ID", {
    enumerable: true,
    get: ()=>TEAMS_TRIAL_V2_REFERRAL_DISCOUNT_ID
});
Object.defineProperty(dist_exports, "TEAM_API_KEY_SCOPES", {
    enumerable: true,
    get: ()=>TEAM_API_KEY_SCOPES
});
Object.defineProperty(dist_exports, "TEAM_API_KEY_SCOPE_ADMIN", {
    enumerable: true,
    get: ()=>TEAM_API_KEY_SCOPE_ADMIN
});
Object.defineProperty(dist_exports, "TEAM_API_KEY_SCOPE_AGENT", {
    enumerable: true,
    get: ()=>TEAM_API_KEY_SCOPE_AGENT
});
Object.defineProperty(dist_exports, "TEAM_API_KEY_SCOPE_MODELS", {
    enumerable: true,
    get: ()=>TEAM_API_KEY_SCOPE_MODELS
});
Object.defineProperty(dist_exports, "TEAM_API_KEY_SCOPE_MODELS_READ", {
    enumerable: true,
    get: ()=>TEAM_API_KEY_SCOPE_MODELS_READ
});
Object.defineProperty(dist_exports, "TEAM_API_KEY_SCOPE_READ", {
    enumerable: true,
    get: ()=>TEAM_API_KEY_SCOPE_READ
});
Object.defineProperty(dist_exports, "TEAM_API_KEY_STATIC_SCOPES", {
    enumerable: true,
    get: ()=>TEAM_API_KEY_STATIC_SCOPES
});
Object.defineProperty(dist_exports, "TEAM_MEMBER_INVITE_PROMO_CREDIT_AMOUNT_CENTS", {
    enumerable: true,
    get: ()=>TEAM_MEMBER_INVITE_PROMO_CREDIT_AMOUNT_CENTS
});
Object.defineProperty(dist_exports, "TEAM_MEMBER_INVITE_PROMO_GRANT_PRODUCT_ID", {
    enumerable: true,
    get: ()=>TEAM_MEMBER_INVITE_PROMO_GRANT_PRODUCT_ID
});
Object.defineProperty(dist_exports, "TEAM_MEMBER_INVITE_PROMO_GRANT_SOURCE_TYPE", {
    enumerable: true,
    get: ()=>TEAM_MEMBER_INVITE_PROMO_GRANT_SOURCE_TYPE
});
Object.defineProperty(dist_exports, "TEAM_PERMISSIONS", {
    enumerable: true,
    get: ()=>TEAM_PERMISSIONS
});
Object.defineProperty(dist_exports, "TIMED_OUT_INSTALL_FAILURE_CODE", {
    enumerable: true,
    get: ()=>TIMED_OUT_INSTALL_FAILURE_CODE
});
Object.defineProperty(dist_exports, "TOOL_ALLOWLIST_MODES", {
    enumerable: true,
    get: ()=>TOOL_ALLOWLIST_MODES
});
Object.defineProperty(dist_exports, "TOUR_ARTIFACT_BLOCK_PREFIX", {
    enumerable: true,
    get: ()=>TOUR_ARTIFACT_BLOCK_PREFIX
});
Object.defineProperty(dist_exports, "TeamPermission", {
    enumerable: true,
    get: ()=>TeamPermission
});
Object.defineProperty(dist_exports, "UPLOAD_LOCAL_AGENT_RUN_TO_PROMPT_QUALITY_AUDIENCE", {
    enumerable: true,
    get: ()=>UPLOAD_LOCAL_AGENT_RUN_TO_PROMPT_QUALITY_AUDIENCE
});
Object.defineProperty(dist_exports, "UPLOAD_LOCAL_AGENT_RUN_TO_PROMPT_QUALITY_PATH", {
    enumerable: true,
    get: ()=>UPLOAD_LOCAL_AGENT_RUN_TO_PROMPT_QUALITY_PATH
});
Object.defineProperty(dist_exports, "USER_INSTALL_COMMAND_FAILED_USER_FACING_MESSAGE", {
    enumerable: true,
    get: ()=>USER_INSTALL_COMMAND_FAILED_USER_FACING_MESSAGE
});
Object.defineProperty(dist_exports, "USER_STORE_CANVASES_DIR", {
    enumerable: true,
    get: ()=>USER_STORE_CANVASES_DIR
});
Object.defineProperty(dist_exports, "USE_CASE", {
    enumerable: true,
    get: ()=>USE_CASE
});
Object.defineProperty(dist_exports, "USE_CASES", {
    enumerable: true,
    get: ()=>USE_CASES
});
Object.defineProperty(dist_exports, "WALKTHROUGH_ARTIFACTS_SKILL_ID", {
    enumerable: true,
    get: ()=>WALKTHROUGH_ARTIFACTS_SKILL_ID
});
Object.defineProperty(dist_exports, "WORKLOAD_CGROUP_ENV_VAR", {
    enumerable: true,
    get: ()=>WORKLOAD_CGROUP_ENV_VAR
});
Object.defineProperty(dist_exports, "YC_STARTUP_CREDIT_GRANT_CENTS", {
    enumerable: true,
    get: ()=>YC_STARTUP_CREDIT_GRANT_CENTS
});
Object.defineProperty(dist_exports, "YC_STARTUP_MONTHLY_BUGBOT_CREDIT_GRANT_CENTS", {
    enumerable: true,
    get: ()=>YC_STARTUP_MONTHLY_BUGBOT_CREDIT_GRANT_CENTS
});
Object.defineProperty(dist_exports, "YC_STARTUP_MONTHLY_BUGBOT_CREDIT_GRANT_PREFIX", {
    enumerable: true,
    get: ()=>YC_STARTUP_MONTHLY_BUGBOT_CREDIT_GRANT_PREFIX
});
Object.defineProperty(dist_exports, "YC_STARTUP_MONTHLY_CREDIT_GRANT_CENTS", {
    enumerable: true,
    get: ()=>YC_STARTUP_MONTHLY_CREDIT_GRANT_CENTS
});
Object.defineProperty(dist_exports, "YC_STARTUP_MONTHLY_CREDIT_GRANT_MONTHS", {
    enumerable: true,
    get: ()=>YC_STARTUP_MONTHLY_CREDIT_GRANT_MONTHS
});
Object.defineProperty(dist_exports, "YC_STARTUP_MONTHLY_CREDIT_GRANT_PREFIX", {
    enumerable: true,
    get: ()=>YC_STARTUP_MONTHLY_CREDIT_GRANT_PREFIX
});
Object.defineProperty(dist_exports, "YC_STARTUP_V2_TEAM_SEATS_COUPON_ID", {
    enumerable: true,
    get: ()=>YC_STARTUP_V2_TEAM_SEATS_COUPON_ID
});
Object.defineProperty(dist_exports, "agentHostModuleChannel", {
    enumerable: true,
    get: ()=>agentHostModuleChannel
});
Object.defineProperty(dist_exports, "agentHostModuleIdentity", {
    enumerable: true,
    get: ()=>agentHostModuleIdentity
});
Object.defineProperty(dist_exports, "agentHostModuleMetricTags", {
    enumerable: true,
    get: ()=>agentHostModuleMetricTags
});
Object.defineProperty(dist_exports, "agentHostModuleServing", {
    enumerable: true,
    get: ()=>agentHostModuleServing
});
Object.defineProperty(dist_exports, "agentHostModuleTags", {
    enumerable: true,
    get: ()=>agentHostModuleTags
});
Object.defineProperty(dist_exports, "allocateUniqueSideChatName", {
    enumerable: true,
    get: ()=>allocateUniqueSideChatName
});
Object.defineProperty(dist_exports, "appendCodeTourStorageKeyFragments", {
    enumerable: true,
    get: ()=>appendCodeTourStorageKeyFragments
});
Object.defineProperty(dist_exports, "appendTourMarkdownBlock", {
    enumerable: true,
    get: ()=>appendTourMarkdownBlock
});
Object.defineProperty(dist_exports, "applyMcpOAuthProviderAuthorizationParams", {
    enumerable: true,
    get: ()=>applyMcpOAuthProviderAuthorizationParams
});
Object.defineProperty(dist_exports, "applySideChatSeedWorkingStateResets", {
    enumerable: true,
    get: ()=>applySideChatSeedWorkingStateResets
});
Object.defineProperty(dist_exports, "attachTourArtifact", {
    enumerable: true,
    get: ()=>attachTourArtifact
});
Object.defineProperty(dist_exports, "breakDownPrCodeTourSections", {
    enumerable: true,
    get: ()=>breakDownPrCodeTourSections
});
Object.defineProperty(dist_exports, "buildAutomationScope", {
    enumerable: true,
    get: ()=>buildAutomationScope
});
Object.defineProperty(dist_exports, "buildChatNamePrompt", {
    enumerable: true,
    get: ()=>buildChatNamePrompt
});
Object.defineProperty(dist_exports, "buildChildTurnRouteId", {
    enumerable: true,
    get: ()=>buildChildTurnRouteId
});
Object.defineProperty(dist_exports, "buildCloudAgentStartPayloadTooLargeUserFacingMessage", {
    enumerable: true,
    get: ()=>buildCloudAgentStartPayloadTooLargeUserFacingMessage
});
Object.defineProperty(dist_exports, "buildGithubAppInstallUrl", {
    enumerable: true,
    get: ()=>buildGithubAppInstallUrl
});
Object.defineProperty(dist_exports, "buildGithubAppManageUrl", {
    enumerable: true,
    get: ()=>buildGithubAppManageUrl
});
Object.defineProperty(dist_exports, "buildGithubPullRequestReviewPath", {
    enumerable: true,
    get: ()=>buildGithubPullRequestReviewPath
});
Object.defineProperty(dist_exports, "buildGrokBotAgentStoreSourceId", {
    enumerable: true,
    get: ()=>buildGrokBotAgentStoreSourceId
});
Object.defineProperty(dist_exports, "buildGrokBotDesktopDownloadUrl", {
    enumerable: true,
    get: ()=>buildGrokBotDesktopDownloadUrl
});
Object.defineProperty(dist_exports, "buildInteractiveChildRouteId", {
    enumerable: true,
    get: ()=>buildInteractiveChildRouteId
});
Object.defineProperty(dist_exports, "buildMcpOAuthClientMetadataDocument", {
    enumerable: true,
    get: ()=>buildMcpOAuthClientMetadataDocument
});
Object.defineProperty(dist_exports, "buildMcpOAuthDesktopCallbackUrl", {
    enumerable: true,
    get: ()=>buildMcpOAuthDesktopCallbackUrl
});
Object.defineProperty(dist_exports, "buildOfferCreditGrantPlan", {
    enumerable: true,
    get: ()=>buildOfferCreditGrantPlan
});
Object.defineProperty(dist_exports, "buildOriginPrIdentityKey", {
    enumerable: true,
    get: ()=>buildOriginPrIdentityKey
});
Object.defineProperty(dist_exports, "buildPeriodicCreditGrantSchedule", {
    enumerable: true,
    get: ()=>buildPeriodicCreditGrantSchedule
});
Object.defineProperty(dist_exports, "buildResourceChildInboxReminder", {
    enumerable: true,
    get: ()=>buildResourceChildInboxReminder
});
Object.defineProperty(dist_exports, "buildSandBoxNoVncUrl", {
    enumerable: true,
    get: ()=>buildSandBoxNoVncUrl
});
Object.defineProperty(dist_exports, "buildSandSupervisorCommand", {
    enumerable: true,
    get: ()=>buildSandSupervisorCommand
});
Object.defineProperty(dist_exports, "buildScmAuthFailedUserFacingMessage", {
    enumerable: true,
    get: ()=>buildScmAuthFailedUserFacingMessage
});
Object.defineProperty(dist_exports, "buildScmRefNotFoundUserFacingMessage", {
    enumerable: true,
    get: ()=>buildScmRefNotFoundUserFacingMessage
});
Object.defineProperty(dist_exports, "buildSideChatNameFromPrompt", {
    enumerable: true,
    get: ()=>buildSideChatNameFromPrompt
});
Object.defineProperty(dist_exports, "buildStartupCreditGrantPlan", {
    enumerable: true,
    get: ()=>buildStartupCreditGrantPlan
});
Object.defineProperty(dist_exports, "buildStartupPoolGrantPlan", {
    enumerable: true,
    get: ()=>buildStartupPoolGrantPlan
});
Object.defineProperty(dist_exports, "buildTeamAgentStoreSourceId", {
    enumerable: true,
    get: ()=>buildTeamAgentStoreSourceId
});
Object.defineProperty(dist_exports, "buildUniqueSideChatNameFromPrompt", {
    enumerable: true,
    get: ()=>buildUniqueSideChatNameFromPrompt
});
Object.defineProperty(dist_exports, "buildUserAgentStoreSourceId", {
    enumerable: true,
    get: ()=>buildUserAgentStoreSourceId
});
Object.defineProperty(dist_exports, "buildYcStartupMonthlyCreditGrantSchedule", {
    enumerable: true,
    get: ()=>buildYcStartupMonthlyCreditGrantSchedule
});
Object.defineProperty(dist_exports, "calculateBackoffDelay", {
    enumerable: true,
    get: ()=>calculateBackoffDelay
});
Object.defineProperty(dist_exports, "chatNameReminder", {
    enumerable: true,
    get: ()=>chatNameReminder
});
Object.defineProperty(dist_exports, "chatNameSystemPrompt", {
    enumerable: true,
    get: ()=>chatNameSystemPrompt
});
Object.defineProperty(dist_exports, "clampCodeTourFileDiffsToHunks", {
    enumerable: true,
    get: ()=>clampCodeTourFileDiffsToHunks
});
Object.defineProperty(dist_exports, "cloudAgentWorkspaceRootUriPath", {
    enumerable: true,
    get: ()=>cloudAgentWorkspaceRootUriPath
});
Object.defineProperty(dist_exports, "cloudServerHasPluginId", {
    enumerable: true,
    get: ()=>cloudServerHasPluginId
});
Object.defineProperty(dist_exports, "cloudServerIsTeamScoped", {
    enumerable: true,
    get: ()=>cloudServerIsTeamScoped
});
Object.defineProperty(dist_exports, "cloudServerMatchesRuntimeSourceHint", {
    enumerable: true,
    get: ()=>cloudServerMatchesRuntimeSourceHint
});
Object.defineProperty(dist_exports, "codeTourDiffHunksFromGitFiles", {
    enumerable: true,
    get: ()=>codeTourDiffHunksFromGitFiles
});
Object.defineProperty(dist_exports, "codeTourGenerationIdentityFeatureConfiguration", {
    enumerable: true,
    get: ()=>codeTourGenerationIdentityFeatureConfiguration
});
Object.defineProperty(dist_exports, "codeTourStorageKeyVariantFragments", {
    enumerable: true,
    get: ()=>codeTourStorageKeyVariantFragments
});
Object.defineProperty(dist_exports, "codeTourTermDefinitionHref", {
    enumerable: true,
    get: ()=>codeTourTermDefinitionHref
});
Object.defineProperty(dist_exports, "codeTourTermDefinitionLinesFromGitFiles", {
    enumerable: true,
    get: ()=>codeTourTermDefinitionLinesFromGitFiles
});
Object.defineProperty(dist_exports, "codeTourTermNameKey", {
    enumerable: true,
    get: ()=>codeTourTermNameKey
});
Object.defineProperty(dist_exports, "coerceSandHostBundleChannel", {
    enumerable: true,
    get: ()=>coerceSandHostBundleChannel
});
Object.defineProperty(dist_exports, "collapseOriginRepoLabelValue", {
    enumerable: true,
    get: ()=>collapseOriginRepoLabelValue
});
Object.defineProperty(dist_exports, "countGrantDaysFromDateRange", {
    enumerable: true,
    get: ()=>countGrantDaysFromDateRange
});
Object.defineProperty(dist_exports, "countGrantMonthsFromDateRange", {
    enumerable: true,
    get: ()=>countGrantMonthsFromDateRange
});
Object.defineProperty(dist_exports, "countGrantPeriodsFromDateRange", {
    enumerable: true,
    get: ()=>countGrantPeriodsFromDateRange
});
Object.defineProperty(dist_exports, "countGrantWeeksFromDateRange", {
    enumerable: true,
    get: ()=>countGrantWeeksFromDateRange
});
Object.defineProperty(dist_exports, "cursorScmMcpServerIdentifier", {
    enumerable: true,
    get: ()=>cursorScmMcpServerIdentifier
});
Object.defineProperty(dist_exports, "cursorScmProviderForMcpServerIdentifier", {
    enumerable: true,
    get: ()=>cursorScmProviderForMcpServerIdentifier
});
Object.defineProperty(dist_exports, "deriveRepoLabelValueFromUrl", {
    enumerable: true,
    get: ()=>deriveRepoLabelValueFromUrl
});
Object.defineProperty(dist_exports, "deriveSideChatComposerBcId", {
    enumerable: true,
    get: ()=>deriveSideChatComposerBcId
});
Object.defineProperty(dist_exports, "desktopBridgeDiscoveryDir", {
    enumerable: true,
    get: ()=>desktopBridgeDiscoveryDir
});
Object.defineProperty(dist_exports, "detectEnvironmentSetupTaskFromPrompt", {
    enumerable: true,
    get: ()=>detectEnvironmentSetupTaskFromPrompt
});
Object.defineProperty(dist_exports, "dropRestartedCodeTourDraft", {
    enumerable: true,
    get: ()=>dropRestartedCodeTourDraft
});
Object.defineProperty(dist_exports, "eligibleMcpOAuthAppTarget", {
    enumerable: true,
    get: ()=>eligibleMcpOAuthAppTarget
});
Object.defineProperty(dist_exports, "environmentBuildFailureCategoryForCode", {
    enumerable: true,
    get: ()=>environmentBuildFailureCategoryForCode
});
Object.defineProperty(dist_exports, "expandPinprickCodeTourFileDiffs", {
    enumerable: true,
    get: ()=>expandPinprickCodeTourFileDiffs
});
Object.defineProperty(dist_exports, "extractAgentStoreMountIdsFromPromptText", {
    enumerable: true,
    get: ()=>extractAgentStoreMountIdsFromPromptText
});
Object.defineProperty(dist_exports, "extractTypedTextFromTipTapRichText", {
    enumerable: true,
    get: ()=>extractTypedTextFromTipTapRichText
});
Object.defineProperty(dist_exports, "filterByEnvironment", {
    enumerable: true,
    get: ()=>filterByEnvironment
});
Object.defineProperty(dist_exports, "findCloudMcpServerByRuntimeName", {
    enumerable: true,
    get: ()=>findCloudMcpServerByRuntimeName
});
Object.defineProperty(dist_exports, "findCloudMcpServersByNormalizedName", {
    enumerable: true,
    get: ()=>findCloudMcpServersByNormalizedName
});
Object.defineProperty(dist_exports, "foldOriginRepoLabelValue", {
    enumerable: true,
    get: ()=>foldOriginRepoLabelValue
});
Object.defineProperty(dist_exports, "foldUnanchoredCodeTourSections", {
    enumerable: true,
    get: ()=>foldUnanchoredCodeTourSections
});
Object.defineProperty(dist_exports, "formatAgentStorePathForDisplay", {
    enumerable: true,
    get: ()=>formatAgentStorePathForDisplay
});
Object.defineProperty(dist_exports, "formatCloudMcpAuthServerLabel", {
    enumerable: true,
    get: ()=>formatCloudMcpAuthServerLabel
});
Object.defineProperty(dist_exports, "formatCloudMcpRuntimeIdentity", {
    enumerable: true,
    get: ()=>formatCloudMcpRuntimeIdentity
});
Object.defineProperty(dist_exports, "formatCodeTourTermOpenTag", {
    enumerable: true,
    get: ()=>formatCodeTourTermOpenTag
});
Object.defineProperty(dist_exports, "formatMcpAuthPromptedReason", {
    enumerable: true,
    get: ()=>formatMcpAuthPromptedReason
});
Object.defineProperty(dist_exports, "formatPlacementConsentTitle", {
    enumerable: true,
    get: ()=>formatPlacementConsentTitle
});
Object.defineProperty(dist_exports, "formatPrCodeTourSectionSummary", {
    enumerable: true,
    get: ()=>formatPrCodeTourSectionSummary
});
Object.defineProperty(dist_exports, "formatSideChatBoundaryUserMessageText", {
    enumerable: true,
    get: ()=>formatSideChatBoundaryUserMessageText
});
Object.defineProperty(dist_exports, "getAgentStorePathDisplayParts", {
    enumerable: true,
    get: ()=>getAgentStorePathDisplayParts
});
Object.defineProperty(dist_exports, "getCanonicalMcpOAuthDesktopRedirectUris", {
    enumerable: true,
    get: ()=>getCanonicalMcpOAuthDesktopRedirectUris
});
Object.defineProperty(dist_exports, "getCanonicalMcpOAuthRedirectUris", {
    enumerable: true,
    get: ()=>getCanonicalMcpOAuthRedirectUris
});
Object.defineProperty(dist_exports, "getCloudAgentStreamErrorPresentation", {
    enumerable: true,
    get: ()=>getCloudAgentStreamErrorPresentation
});
Object.defineProperty(dist_exports, "getCloudAgentTerminalErrorRecovery", {
    enumerable: true,
    get: ()=>getCloudAgentTerminalErrorRecovery
});
Object.defineProperty(dist_exports, "getCodeTourRecordingSource", {
    enumerable: true,
    get: ()=>getCodeTourRecordingSource
});
Object.defineProperty(dist_exports, "getCompetingStartupOfferProductIdPrefixes", {
    enumerable: true,
    get: ()=>getCompetingStartupOfferProductIdPrefixes
});
Object.defineProperty(dist_exports, "getEnvSetupComposerName", {
    enumerable: true,
    get: ()=>getEnvSetupComposerName
});
Object.defineProperty(dist_exports, "getEnvironmentSetupTaskPrompt", {
    enumerable: true,
    get: ()=>getEnvironmentSetupTaskPrompt
});
Object.defineProperty(dist_exports, "getGithubOAuthClientIdForEnvironment", {
    enumerable: true,
    get: ()=>getGithubOAuthClientIdForEnvironment
});
Object.defineProperty(dist_exports, "getJobRoleSlug", {
    enumerable: true,
    get: ()=>getJobRoleSlug
});
Object.defineProperty(dist_exports, "getMcpOAuthProviderPolicy", {
    enumerable: true,
    get: ()=>getMcpOAuthProviderPolicy
});
Object.defineProperty(dist_exports, "getMcpOAuthProviderPolicyForUrl", {
    enumerable: true,
    get: ()=>getMcpOAuthProviderPolicyForUrl
});
Object.defineProperty(dist_exports, "getOfferGrantProductIdPrefix", {
    enumerable: true,
    get: ()=>getOfferGrantProductIdPrefix
});
Object.defineProperty(dist_exports, "getOfferTemplate", {
    enumerable: true,
    get: ()=>getOfferTemplate
});
Object.defineProperty(dist_exports, "getOfferTemplateCoupons", {
    enumerable: true,
    get: ()=>getOfferTemplateCoupons
});
Object.defineProperty(dist_exports, "getOfferTemplateStartupOfferType", {
    enumerable: true,
    get: ()=>getOfferTemplateStartupOfferType
});
Object.defineProperty(dist_exports, "getPinnedWorkerOfflineTitle", {
    enumerable: true,
    get: ()=>getPinnedWorkerOfflineTitle
});
Object.defineProperty(dist_exports, "getPrivateWorkerRepositoryUrl", {
    enumerable: true,
    get: ()=>getPrivateWorkerRepositoryUrl
});
Object.defineProperty(dist_exports, "getPublicArtifactContentDisposition", {
    enumerable: true,
    get: ()=>getPublicArtifactContentDisposition
});
Object.defineProperty(dist_exports, "getRepoNameFromUrl", {
    enumerable: true,
    get: ()=>getRepoNameFromUrl
});
Object.defineProperty(dist_exports, "getRestMcpProviderIdForUrl", {
    enumerable: true,
    get: ()=>getRestMcpProviderIdForUrl
});
Object.defineProperty(dist_exports, "getRestMcpProviderIdForUrlPath", {
    enumerable: true,
    get: ()=>getRestMcpProviderIdForUrlPath
});
Object.defineProperty(dist_exports, "getScmProviderDisplayName", {
    enumerable: true,
    get: ()=>getScmProviderDisplayName
});
Object.defineProperty(dist_exports, "getSideChatSkipLeadingTurns", {
    enumerable: true,
    get: ()=>getSideChatSkipLeadingTurns
});
Object.defineProperty(dist_exports, "getStartupCreditGrantProductIdPrefix", {
    enumerable: true,
    get: ()=>getStartupCreditGrantProductIdPrefix
});
Object.defineProperty(dist_exports, "getStartupOfferConfig", {
    enumerable: true,
    get: ()=>getStartupOfferConfig
});
Object.defineProperty(dist_exports, "getStartupOfferCoupons", {
    enumerable: true,
    get: ()=>getStartupOfferCoupons
});
Object.defineProperty(dist_exports, "getStartupOfferTypeFromReferralDiscountId", {
    enumerable: true,
    get: ()=>getStartupOfferTypeFromReferralDiscountId
});
Object.defineProperty(dist_exports, "getStartupOfferV2TemplateKeyFromReferralDiscountId", {
    enumerable: true,
    get: ()=>getStartupOfferV2TemplateKeyFromReferralDiscountId
});
Object.defineProperty(dist_exports, "getTeamPromoSourceFromDiscountId", {
    enumerable: true,
    get: ()=>getTeamPromoSourceFromDiscountId
});
Object.defineProperty(dist_exports, "getUnsupportedConversationTurnFallbackText", {
    enumerable: true,
    get: ()=>getUnsupportedConversationTurnFallbackText
});
Object.defineProperty(dist_exports, "gitShaFromSandBoxImageTag", {
    enumerable: true,
    get: ()=>gitShaFromSandBoxImageTag
});
Object.defineProperty(dist_exports, "gitSupportsNoWriteFetchHead", {
    enumerable: true,
    get: ()=>gitSupportsNoWriteFetchHead
});
Object.defineProperty(dist_exports, "grokBotDesktopPlatformFromProcess", {
    enumerable: true,
    get: ()=>grokBotDesktopPlatformFromProcess
});
Object.defineProperty(dist_exports, "grokBotGithubConnectCallbackUrlForState", {
    enumerable: true,
    get: ()=>grokBotGithubConnectCallbackUrlForState
});
Object.defineProperty(dist_exports, "gtmMcpOmitsResourceIndicator", {
    enumerable: true,
    get: ()=>gtmMcpOmitsResourceIndicator
});
Object.defineProperty(dist_exports, "hasAutomationScope", {
    enumerable: true,
    get: ()=>hasAutomationScope
});
Object.defineProperty(dist_exports, "hasCursorCommitAttribution", {
    enumerable: true,
    get: ()=>hasCursorCommitAttribution
});
Object.defineProperty(dist_exports, "hasNonEmptyToolAllowlist", {
    enumerable: true,
    get: ()=>hasNonEmptyToolAllowlist
});
Object.defineProperty(dist_exports, "hasParseableCodeTourFileAnchor", {
    enumerable: true,
    get: ()=>hasParseableCodeTourFileAnchor
});
Object.defineProperty(dist_exports, "hasPublicArtifactOrigin", {
    enumerable: true,
    get: ()=>hasPublicArtifactOrigin
});
Object.defineProperty(dist_exports, "hasRequiredTeamApiKeyScope", {
    enumerable: true,
    get: ()=>hasRequiredTeamApiKeyScope
});
Object.defineProperty(dist_exports, "hasRootProjectIdentity", {
    enumerable: true,
    get: ()=>hasRootProjectIdentity
});
Object.defineProperty(dist_exports, "imageTagFromRegistryReference", {
    enumerable: true,
    get: ()=>imageTagFromRegistryReference
});
Object.defineProperty(dist_exports, "inboxLeafTimestamp", {
    enumerable: true,
    get: ()=>inboxLeafTimestamp
});
Object.defineProperty(dist_exports, "inferToolAllowlistMode", {
    enumerable: true,
    get: ()=>inferToolAllowlistMode
});
Object.defineProperty(dist_exports, "inferTourArtifactKind", {
    enumerable: true,
    get: ()=>inferTourArtifactKind
});
Object.defineProperty(dist_exports, "insertPrCodeTourSectionMedia", {
    enumerable: true,
    get: ()=>insertPrCodeTourSectionMedia
});
Object.defineProperty(dist_exports, "isAccountOlderThan", {
    enumerable: true,
    get: ()=>isAccountOlderThan
});
Object.defineProperty(dist_exports, "isAgentHostModuleMetricTag", {
    enumerable: true,
    get: ()=>isAgentHostModuleMetricTag
});
Object.defineProperty(dist_exports, "isAgentStoreDashboardMountUrl", {
    enumerable: true,
    get: ()=>isAgentStoreDashboardMountUrl
});
Object.defineProperty(dist_exports, "isAgentStoreId", {
    enumerable: true,
    get: ()=>isAgentStoreId
});
Object.defineProperty(dist_exports, "isAgentStorePrincipalMountName", {
    enumerable: true,
    get: ()=>isAgentStorePrincipalMountName
});
Object.defineProperty(dist_exports, "isAgentStoreShareMountKey", {
    enumerable: true,
    get: ()=>isAgentStoreShareMountKey
});
Object.defineProperty(dist_exports, "isAgentStoreSourceId", {
    enumerable: true,
    get: ()=>isAgentStoreSourceId
});
Object.defineProperty(dist_exports, "isAskQuestionAutoAnswerReason", {
    enumerable: true,
    get: ()=>isAskQuestionAutoAnswerReason
});
Object.defineProperty(dist_exports, "isAutomationScope", {
    enumerable: true,
    get: ()=>isAutomationScope
});
Object.defineProperty(dist_exports, "isChildTurnInboxRelPath", {
    enumerable: true,
    get: ()=>isChildTurnInboxRelPath
});
Object.defineProperty(dist_exports, "isCloudAgentStartPayloadTooLargeUserFacingMessage", {
    enumerable: true,
    get: ()=>isCloudAgentStartPayloadTooLargeUserFacingMessage
});
Object.defineProperty(dist_exports, "isCloudAgentStoreId", {
    enumerable: true,
    get: ()=>isCloudAgentStoreId
});
Object.defineProperty(dist_exports, "isCloudAgentStreamErrorDisplayable", {
    enumerable: true,
    get: ()=>isCloudAgentStreamErrorDisplayable
});
Object.defineProperty(dist_exports, "isCloudAgentWorkspaceRootUriPath", {
    enumerable: true,
    get: ()=>isCloudAgentWorkspaceRootUriPath
});
Object.defineProperty(dist_exports, "isCodeTourArtifactUrl", {
    enumerable: true,
    get: ()=>isCodeTourArtifactUrl
});
Object.defineProperty(dist_exports, "isCodeTourSelfAuditNote", {
    enumerable: true,
    get: ()=>isCodeTourSelfAuditNote
});
Object.defineProperty(dist_exports, "isCodeTourStorageKeyVariantFragment", {
    enumerable: true,
    get: ()=>isCodeTourStorageKeyVariantFragment
});
Object.defineProperty(dist_exports, "isCodeTourTermCloseTag", {
    enumerable: true,
    get: ()=>isCodeTourTermCloseTag
});
Object.defineProperty(dist_exports, "isCodeTourVariantName", {
    enumerable: true,
    get: ()=>isCodeTourVariantName
});
Object.defineProperty(dist_exports, "isComputerUseGuidedSkill", {
    enumerable: true,
    get: ()=>isComputerUseGuidedSkill
});
Object.defineProperty(dist_exports, "isCursorCoAuthor", {
    enumerable: true,
    get: ()=>isCursorCoAuthor
});
Object.defineProperty(dist_exports, "isCustomCodeTourStorageKey", {
    enumerable: true,
    get: ()=>isCustomCodeTourStorageKey
});
Object.defineProperty(dist_exports, "isDesktopThreadId", {
    enumerable: true,
    get: ()=>isDesktopThreadId
});
Object.defineProperty(dist_exports, "isDirectDesktopThreadRef", {
    enumerable: true,
    get: ()=>isDirectDesktopThreadRef
});
Object.defineProperty(dist_exports, "isDurablePoolRepoLess", {
    enumerable: true,
    get: ()=>isDurablePoolRepoLess
});
Object.defineProperty(dist_exports, "isEmptyRepositoryErrorMessage", {
    enumerable: true,
    get: ()=>isEmptyRepositoryErrorMessage
});
Object.defineProperty(dist_exports, "isEmptyRepositoryUserFacingMessage", {
    enumerable: true,
    get: ()=>isEmptyRepositoryUserFacingMessage
});
Object.defineProperty(dist_exports, "isEntraAuthorizationUrl", {
    enumerable: true,
    get: ()=>isEntraAuthorizationUrl
});
Object.defineProperty(dist_exports, "isEnvironmentBuildFailedUserFacingMessage", {
    enumerable: true,
    get: ()=>isEnvironmentBuildFailedUserFacingMessage
});
Object.defineProperty(dist_exports, "isEnvironmentEligible", {
    enumerable: true,
    get: ()=>isEnvironmentEligible
});
Object.defineProperty(dist_exports, "isErrorWithUserFacingErrorMessage", {
    enumerable: true,
    get: ()=>isErrorWithUserFacingErrorMessage
});
Object.defineProperty(dist_exports, "isFeatureOffUnderPrivateInference", {
    enumerable: true,
    get: ()=>isFeatureOffUnderPrivateInference
});
Object.defineProperty(dist_exports, "isGitHubIpAllowlistUserFacingMessage", {
    enumerable: true,
    get: ()=>isGitHubIpAllowlistUserFacingMessage
});
Object.defineProperty(dist_exports, "isHeadlessCodeTourMarkdown", {
    enumerable: true,
    get: ()=>isHeadlessCodeTourMarkdown
});
Object.defineProperty(dist_exports, "isInAudience", {
    enumerable: true,
    get: ()=>isInAudience
});
Object.defineProperty(dist_exports, "isInteractiveChildInboxLeaf", {
    enumerable: true,
    get: ()=>isInteractiveChildInboxLeaf
});
Object.defineProperty(dist_exports, "isInteractiveChildRouteId", {
    enumerable: true,
    get: ()=>isInteractiveChildRouteId
});
Object.defineProperty(dist_exports, "isKnownGitHostingDomain", {
    enumerable: true,
    get: ()=>isKnownGitHostingDomain
});
Object.defineProperty(dist_exports, "isLegacyReviewCursorHost", {
    enumerable: true,
    get: ()=>isLegacyReviewCursorHost
});
Object.defineProperty(dist_exports, "isLoopbackHttpUri", {
    enumerable: true,
    get: ()=>isLoopbackHttpUri
});
Object.defineProperty(dist_exports, "isMcpAuthPromptedReason", {
    enumerable: true,
    get: ()=>isMcpAuthPromptedReason
});
Object.defineProperty(dist_exports, "isMcpOAuthPortalReturnPath", {
    enumerable: true,
    get: ()=>isMcpOAuthPortalReturnPath
});
Object.defineProperty(dist_exports, "isMcpOAuthPostAuthReturnUrl", {
    enumerable: true,
    get: ()=>isMcpOAuthPostAuthReturnUrl
});
Object.defineProperty(dist_exports, "isNonRetryableProviderErrorCode", {
    enumerable: true,
    get: ()=>isNonRetryableProviderErrorCode
});
Object.defineProperty(dist_exports, "isOfferTemplateKey", {
    enumerable: true,
    get: ()=>isOfferTemplateKey
});
Object.defineProperty(dist_exports, "isOrgApiKeyScope", {
    enumerable: true,
    get: ()=>isOrgApiKeyScope
});
Object.defineProperty(dist_exports, "isOriginMcpBuiltinTarget", {
    enumerable: true,
    get: ()=>isOriginMcpBuiltinTarget
});
Object.defineProperty(dist_exports, "isOriginMcpServerUrl", {
    enumerable: true,
    get: ()=>isOriginMcpServerUrl
});
Object.defineProperty(dist_exports, "isPlayableCodeTourRecordingPath", {
    enumerable: true,
    get: ()=>isPlayableCodeTourRecordingPath
});
Object.defineProperty(dist_exports, "isPrimaryIntroFireType", {
    enumerable: true,
    get: ()=>isPrimaryIntroFireType
});
Object.defineProperty(dist_exports, "isPrincipalAgentStoreSourceId", {
    enumerable: true,
    get: ()=>isPrincipalAgentStoreSourceId
});
Object.defineProperty(dist_exports, "isPrivateWorkerCapacityUserFacingMessage", {
    enumerable: true,
    get: ()=>isPrivateWorkerCapacityUserFacingMessage
});
Object.defineProperty(dist_exports, "isPrivateWorkerDisconnectedUserFacingMessage", {
    enumerable: true,
    get: ()=>isPrivateWorkerDisconnectedUserFacingMessage
});
Object.defineProperty(dist_exports, "isProactiveType", {
    enumerable: true,
    get: ()=>isProactiveType
});
Object.defineProperty(dist_exports, "isProjectSendMessageEnabled", {
    enumerable: true,
    get: ()=>isProjectSendMessageEnabled
});
Object.defineProperty(dist_exports, "isRecentlyCreatedUser", {
    enumerable: true,
    get: ()=>isRecentlyCreatedUser
});
Object.defineProperty(dist_exports, "isRecordedProactivityFireType", {
    enumerable: true,
    get: ()=>isRecordedProactivityFireType
});
Object.defineProperty(dist_exports, "isRepoLessPoolFormSelection", {
    enumerable: true,
    get: ()=>isRepoLessPoolFormSelection
});
Object.defineProperty(dist_exports, "isReservedAgentStorePathSegment", {
    enumerable: true,
    get: ()=>isReservedAgentStorePathSegment
});
Object.defineProperty(dist_exports, "isRootProjectDetails", {
    enumerable: true,
    get: ()=>isRootProjectDetails
});
Object.defineProperty(dist_exports, "isSafeCodeTourTermPath", {
    enumerable: true,
    get: ()=>isSafeCodeTourTermPath
});
Object.defineProperty(dist_exports, "isSafeStagedBundlePath", {
    enumerable: true,
    get: ()=>isSafeStagedBundlePath
});
Object.defineProperty(dist_exports, "isSandDesktopSupervisionEnabled", {
    enumerable: true,
    get: ()=>isSandDesktopSupervisionEnabled
});
Object.defineProperty(dist_exports, "isSandHostBundleChannel", {
    enumerable: true,
    get: ()=>isSandHostBundleChannel
});
Object.defineProperty(dist_exports, "isSandHostBundlePromotableChannel", {
    enumerable: true,
    get: ()=>isSandHostBundlePromotableChannel
});
Object.defineProperty(dist_exports, "isSandHostUpgradeAvailable", {
    enumerable: true,
    get: ()=>isSandHostUpgradeAvailable
});
Object.defineProperty(dist_exports, "isScmAuthFailedUserFacingMessage", {
    enumerable: true,
    get: ()=>isScmAuthFailedUserFacingMessage
});
Object.defineProperty(dist_exports, "isScmCheckoutFailedUserFacingMessage", {
    enumerable: true,
    get: ()=>isScmCheckoutFailedUserFacingMessage
});
Object.defineProperty(dist_exports, "isScmRefNotFoundUserFacingMessage", {
    enumerable: true,
    get: ()=>isScmRefNotFoundUserFacingMessage
});
Object.defineProperty(dist_exports, "isScpStyleGitUrl", {
    enumerable: true,
    get: ()=>isScpStyleGitUrl
});
Object.defineProperty(dist_exports, "isServiceTokenCatalogScopeForOwner", {
    enumerable: true,
    get: ()=>isServiceTokenCatalogScopeForOwner
});
Object.defineProperty(dist_exports, "isServiceTokenOrganizationScope", {
    enumerable: true,
    get: ()=>isServiceTokenOrganizationScope
});
Object.defineProperty(dist_exports, "isServiceTokenTeamScope", {
    enumerable: true,
    get: ()=>isServiceTokenTeamScope
});
Object.defineProperty(dist_exports, "isSideChatBoundaryMessageId", {
    enumerable: true,
    get: ()=>isSideChatBoundaryMessageId
});
Object.defineProperty(dist_exports, "isSideChatPlaceholderName", {
    enumerable: true,
    get: ()=>isSideChatPlaceholderName
});
Object.defineProperty(dist_exports, "isSlackChannelPostId", {
    enumerable: true,
    get: ()=>isSlackChannelPostId
});
Object.defineProperty(dist_exports, "isStaleCodeTourPromptRevision", {
    enumerable: true,
    get: ()=>isStaleCodeTourPromptRevision
});
Object.defineProperty(dist_exports, "isStaticTeamApiKeyScope", {
    enumerable: true,
    get: ()=>isStaticTeamApiKeyScope
});
Object.defineProperty(dist_exports, "isSubscriptionResourceChildInboxRelPath", {
    enumerable: true,
    get: ()=>isSubscriptionResourceChildInboxRelPath
});
Object.defineProperty(dist_exports, "isSubscriptionResourceChildRouteId", {
    enumerable: true,
    get: ()=>isSubscriptionResourceChildRouteId
});
Object.defineProperty(dist_exports, "isTeamApiKeyScope", {
    enumerable: true,
    get: ()=>isTeamApiKeyScope
});
Object.defineProperty(dist_exports, "isToolAllowlistMode", {
    enumerable: true,
    get: ()=>isToolAllowlistMode
});
Object.defineProperty(dist_exports, "isUnusableCodeTourMarkdown", {
    enumerable: true,
    get: ()=>isUnusableCodeTourMarkdown
});
Object.defineProperty(dist_exports, "isValidBareUuid", {
    enumerable: true,
    get: ()=>isValidBareUuid
});
Object.defineProperty(dist_exports, "isValidManagedEnvVarName", {
    enumerable: true,
    get: ()=>isValidManagedEnvVarName
});
Object.defineProperty(dist_exports, "isWithinInAppAdNewUserBlackout", {
    enumerable: true,
    get: ()=>isWithinInAppAdNewUserBlackout
});
Object.defineProperty(dist_exports, "listOfferTemplates", {
    enumerable: true,
    get: ()=>listOfferTemplates
});
Object.defineProperty(dist_exports, "listPrivateInferenceOffFeatureRpcs", {
    enumerable: true,
    get: ()=>listPrivateInferenceOffFeatureRpcs
});
Object.defineProperty(dist_exports, "looksLikeAgentStoreDisplayPath", {
    enumerable: true,
    get: ()=>looksLikeAgentStoreDisplayPath
});
Object.defineProperty(dist_exports, "matchAgentStorePathForDisplay", {
    enumerable: true,
    get: ()=>matchAgentStorePathForDisplay
});
Object.defineProperty(dist_exports, "mcpOAuthLoopbackCallbackUrlForPort", {
    enumerable: true,
    get: ()=>mcpOAuthLoopbackCallbackUrlForPort
});
Object.defineProperty(dist_exports, "mcpOAuthLoopbackRedirectUrl", {
    enumerable: true,
    get: ()=>mcpOAuthLoopbackRedirectUrl
});
Object.defineProperty(dist_exports, "mcpOAuthServerRequiresIpv4Loopback", {
    enumerable: true,
    get: ()=>mcpOAuthServerRequiresIpv4Loopback
});
Object.defineProperty(dist_exports, "mcpOAuthStateTargetUrl", {
    enumerable: true,
    get: ()=>mcpOAuthStateTargetUrl
});
Object.defineProperty(dist_exports, "mcpOAuthStateWithoutLoopbackPort", {
    enumerable: true,
    get: ()=>mcpOAuthStateWithoutLoopbackPort
});
Object.defineProperty(dist_exports, "mcpResourceUrlValidatorForUrl", {
    enumerable: true,
    get: ()=>mcpResourceUrlValidatorForUrl
});
Object.defineProperty(dist_exports, "normalizeAutoSpilloverApiTitle", {
    enumerable: true,
    get: ()=>normalizeAutoSpilloverApiTitle
});
Object.defineProperty(dist_exports, "normalizeAutoSpilloverAutoBeyondLimitDescription", {
    enumerable: true,
    get: ()=>normalizeAutoSpilloverAutoBeyondLimitDescription
});
Object.defineProperty(dist_exports, "normalizeAutoSpilloverAutoDescription", {
    enumerable: true,
    get: ()=>normalizeAutoSpilloverAutoDescription
});
Object.defineProperty(dist_exports, "normalizeAutoSpilloverAutoTitle", {
    enumerable: true,
    get: ()=>normalizeAutoSpilloverAutoTitle
});
Object.defineProperty(dist_exports, "normalizeCodeTourTermGloss", {
    enumerable: true,
    get: ()=>normalizeCodeTourTermGloss
});
Object.defineProperty(dist_exports, "normalizeEnvironmentSetupMaxResumeAgeMs", {
    enumerable: true,
    get: ()=>normalizeEnvironmentSetupMaxResumeAgeMs
});
Object.defineProperty(dist_exports, "normalizeGitCommitSha", {
    enumerable: true,
    get: ()=>normalizeGitCommitSha
});
Object.defineProperty(dist_exports, "orgApiKeyHasScope", {
    enumerable: true,
    get: ()=>orgApiKeyHasScope
});
Object.defineProperty(dist_exports, "orgApiKeyScopeImplies", {
    enumerable: true,
    get: ()=>orgApiKeyScopeImplies
});
Object.defineProperty(dist_exports, "originPrIdentityHostForLegacyReviewHost", {
    enumerable: true,
    get: ()=>originPrIdentityHostForLegacyReviewHost
});
Object.defineProperty(dist_exports, "parseAgentHostLoop", {
    enumerable: true,
    get: ()=>parseAgentHostLoop
});
Object.defineProperty(dist_exports, "parseAgentHostServingModule", {
    enumerable: true,
    get: ()=>parseAgentHostServingModule
});
Object.defineProperty(dist_exports, "parseAgentHostTurnRuntime", {
    enumerable: true,
    get: ()=>parseAgentHostTurnRuntime
});
Object.defineProperty(dist_exports, "parseAgentStoreMountInput", {
    enumerable: true,
    get: ()=>parseAgentStoreMountInput
});
Object.defineProperty(dist_exports, "parseAskQuestionAutoAnswerIdentity", {
    enumerable: true,
    get: ()=>parseAskQuestionAutoAnswerIdentity
});
Object.defineProperty(dist_exports, "parseBridgeRequest", {
    enumerable: true,
    get: ()=>parseBridgeRequest
});
Object.defineProperty(dist_exports, "parseCloudMcpRuntimeIdentity", {
    enumerable: true,
    get: ()=>parseCloudMcpRuntimeIdentity
});
Object.defineProperty(dist_exports, "parseCodeTourTermOpenTag", {
    enumerable: true,
    get: ()=>parseCodeTourTermOpenTag
});
Object.defineProperty(dist_exports, "parseDiscoveryFile", {
    enumerable: true,
    get: ()=>parseDiscoveryFile
});
Object.defineProperty(dist_exports, "parseGeneratedChatName", {
    enumerable: true,
    get: ()=>parseGeneratedChatName
});
Object.defineProperty(dist_exports, "parseGrokBotAgentStoreSourceId", {
    enumerable: true,
    get: ()=>parseGrokBotAgentStoreSourceId
});
Object.defineProperty(dist_exports, "parseMcpAuthPromptedInteractionId", {
    enumerable: true,
    get: ()=>parseMcpAuthPromptedInteractionId
});
Object.defineProperty(dist_exports, "parseOriginCodeTourArtifactContentUrl", {
    enumerable: true,
    get: ()=>parseOriginCodeTourArtifactContentUrl
});
Object.defineProperty(dist_exports, "parsePlacementConsentMachineLabel", {
    enumerable: true,
    get: ()=>parsePlacementConsentMachineLabel
});
Object.defineProperty(dist_exports, "parsePrivateWorkerRepoScopeFromUrl", {
    enumerable: true,
    get: ()=>parsePrivateWorkerRepoScopeFromUrl
});
Object.defineProperty(dist_exports, "parseRepoNameFromUrl", {
    enumerable: true,
    get: ()=>parseRepoNameFromUrl
});
Object.defineProperty(dist_exports, "parseRestMcpProviderMetadataFromPrm", {
    enumerable: true,
    get: ()=>parseRestMcpProviderMetadataFromPrm
});
Object.defineProperty(dist_exports, "parseRestMcpScmToolError", {
    enumerable: true,
    get: ()=>parseRestMcpScmToolError
});
Object.defineProperty(dist_exports, "parseSandBoxParkMode", {
    enumerable: true,
    get: ()=>parseSandBoxParkMode
});
Object.defineProperty(dist_exports, "parseSandHostBundleDigest", {
    enumerable: true,
    get: ()=>parseSandHostBundleDigest
});
Object.defineProperty(dist_exports, "parseSandSupervisorStatus", {
    enumerable: true,
    get: ()=>parseSandSupervisorStatus
});
Object.defineProperty(dist_exports, "parseTeamAgentStoreSourceId", {
    enumerable: true,
    get: ()=>parseTeamAgentStoreSourceId
});
Object.defineProperty(dist_exports, "parseThreadSummary", {
    enumerable: true,
    get: ()=>parseThreadSummary
});
Object.defineProperty(dist_exports, "parseUserAgentStoreSourceId", {
    enumerable: true,
    get: ()=>parseUserAgentStoreSourceId
});
Object.defineProperty(dist_exports, "patchTourSection", {
    enumerable: true,
    get: ()=>patchTourSection
});
Object.defineProperty(dist_exports, "pickUniqueCloudMcpMatch", {
    enumerable: true,
    get: ()=>pickUniqueCloudMcpMatch
});
Object.defineProperty(dist_exports, "portalMcpOAuthCallbackUrlForWebsite", {
    enumerable: true,
    get: ()=>portalMcpOAuthCallbackUrlForWebsite
});
Object.defineProperty(dist_exports, "proactivityWakeAllowsSilence", {
    enumerable: true,
    get: ()=>proactivityWakeAllowsSilence
});
Object.defineProperty(dist_exports, "providerFacingMcpOAuthRedirectUri", {
    enumerable: true,
    get: ()=>providerFacingMcpOAuthRedirectUri
});
Object.defineProperty(dist_exports, "pruneUnanchoredCodeTourSteps", {
    enumerable: true,
    get: ()=>pruneUnanchoredCodeTourSteps
});
Object.defineProperty(dist_exports, "repairCodeTourOverviewOpener", {
    enumerable: true,
    get: ()=>repairCodeTourOverviewOpener
});
Object.defineProperty(dist_exports, "resolveAgentStoreMountTarget", {
    enumerable: true,
    get: ()=>resolveAgentStoreMountTarget
});
Object.defineProperty(dist_exports, "resolveCloudOnboardingAudience", {
    enumerable: true,
    get: ()=>resolveCloudOnboardingAudience
});
Object.defineProperty(dist_exports, "resolveCodeTourArtifactSrc", {
    enumerable: true,
    get: ()=>resolveCodeTourArtifactSrc
});
Object.defineProperty(dist_exports, "resolveCodeTourTermDefinitionLine", {
    enumerable: true,
    get: ()=>resolveCodeTourTermDefinitionLine
});
Object.defineProperty(dist_exports, "resolveCurrentPrCodeTour", {
    enumerable: true,
    get: ()=>resolveCurrentPrCodeTour
});
Object.defineProperty(dist_exports, "resolveEnvSetupComposerName", {
    enumerable: true,
    get: ()=>resolveEnvSetupComposerName
});
Object.defineProperty(dist_exports, "resolveLocalAgentHeaders", {
    enumerable: true,
    get: ()=>resolveLocalAgentHeaders
});
Object.defineProperty(dist_exports, "resolveMcpOAuthScopeOverride", {
    enumerable: true,
    get: ()=>resolveMcpOAuthScopeOverride
});
Object.defineProperty(dist_exports, "resolvePluginBrandIconSource", {
    enumerable: true,
    get: ()=>resolvePluginBrandIconSource
});
Object.defineProperty(dist_exports, "resolvePluginBrandIconSources", {
    enumerable: true,
    get: ()=>resolvePluginBrandIconSources
});
Object.defineProperty(dist_exports, "resourceChildInboxRelPath", {
    enumerable: true,
    get: ()=>resourceChildInboxRelPath
});
Object.defineProperty(dist_exports, "retargetMcpOAuthStateToLoopbackPort", {
    enumerable: true,
    get: ()=>retargetMcpOAuthStateToLoopbackPort
});
Object.defineProperty(dist_exports, "rewriteScpGitUrl", {
    enumerable: true,
    get: ()=>rewriteScpGitUrl
});
Object.defineProperty(dist_exports, "sandBoxFlavorFromNamespace", {
    enumerable: true,
    get: ()=>sandBoxFlavorFromNamespace
});
Object.defineProperty(dist_exports, "sandBoxNoVncHibernationBounds", {
    enumerable: true,
    get: ()=>sandBoxNoVncHibernationBounds
});
Object.defineProperty(dist_exports, "sandHostBundleDigestKey", {
    enumerable: true,
    get: ()=>sandHostBundleDigestKey
});
Object.defineProperty(dist_exports, "sandHostBundleTarballKey", {
    enumerable: true,
    get: ()=>sandHostBundleTarballKey
});
Object.defineProperty(dist_exports, "sandHostBundleVersionFileName", {
    enumerable: true,
    get: ()=>sandHostBundleVersionFileName
});
Object.defineProperty(dist_exports, "sandHostBundleVersionKey", {
    enumerable: true,
    get: ()=>sandHostBundleVersionKey
});
Object.defineProperty(dist_exports, "selectRegisteredMcpOAuthRedirectUris", {
    enumerable: true,
    get: ()=>selectRegisteredMcpOAuthRedirectUris
});
Object.defineProperty(dist_exports, "serializeSandSupervisorCommand", {
    enumerable: true,
    get: ()=>serializeSandSupervisorCommand
});
Object.defineProperty(dist_exports, "serviceTokenCatalogScopeGroups", {
    enumerable: true,
    get: ()=>serviceTokenCatalogScopeGroups
});
Object.defineProperty(dist_exports, "serviceTokenCatalogScopes", {
    enumerable: true,
    get: ()=>serviceTokenCatalogScopes
});
Object.defineProperty(dist_exports, "shouldForceHostUpgrade", {
    enumerable: true,
    get: ()=>shouldForceHostUpgrade
});
Object.defineProperty(dist_exports, "shouldInjectSideChatBoundary", {
    enumerable: true,
    get: ()=>shouldInjectSideChatBoundary
});
Object.defineProperty(dist_exports, "shouldRegenerateStaleCodeTour", {
    enumerable: true,
    get: ()=>shouldRegenerateStaleCodeTour
});
Object.defineProperty(dist_exports, "shouldShowBackgroundComposerFollowupRetryHint", {
    enumerable: true,
    get: ()=>shouldShowBackgroundComposerFollowupRetryHint
});
Object.defineProperty(dist_exports, "shouldShowEnvironmentSetupCta", {
    enumerable: true,
    get: ()=>shouldShowEnvironmentSetupCta
});
Object.defineProperty(dist_exports, "sideChatBoundaryMessageId", {
    enumerable: true,
    get: ()=>sideChatBoundaryMessageId
});
Object.defineProperty(dist_exports, "sideChatNameSystemPrompt", {
    enumerable: true,
    get: ()=>sideChatNameSystemPrompt
});
Object.defineProperty(dist_exports, "splitRepoLabelValue", {
    enumerable: true,
    get: ()=>splitRepoLabelValue
});
Object.defineProperty(dist_exports, "stripAgentStorePathLineSuffix", {
    enumerable: true,
    get: ()=>stripAgentStorePathLineSuffix
});
Object.defineProperty(dist_exports, "stripCodeTourSelfAuditNotes", {
    enumerable: true,
    get: ()=>stripCodeTourSelfAuditNotes
});
Object.defineProperty(dist_exports, "stripCodeTourTerms", {
    enumerable: true,
    get: ()=>stripCodeTourTerms
});
Object.defineProperty(dist_exports, "stripConsentPrompt", {
    enumerable: true,
    get: ()=>stripConsentPrompt
});
Object.defineProperty(dist_exports, "stripMcpOAuthStateTarget", {
    enumerable: true,
    get: ()=>stripMcpOAuthStateTarget
});
Object.defineProperty(dist_exports, "truncateUserRequestForChatName", {
    enumerable: true,
    get: ()=>truncateUserRequestForChatName
});
Object.defineProperty(dist_exports, "validateBoxSecretKey", {
    enumerable: true,
    get: ()=>validateBoxSecretKey
});
Object.defineProperty(dist_exports, "validateCloudMcpAuthorizationUrl", {
    enumerable: true,
    get: ()=>validateCloudMcpAuthorizationUrl
});
Object.defineProperty(dist_exports, "validateMcpProtectedResourceUrl", {
    enumerable: true,
    get: ()=>validateMcpProtectedResourceUrl
});
Object.defineProperty(dist_exports, "withMcpOAuthStateTarget", {
    enumerable: true,
    get: ()=>withMcpOAuthStateTarget
});
var privacy_mode_pb_exports = {};
Object.defineProperty(privacy_mode_pb_exports, "PrivacyMode", {
    enumerable: true,
    get: ()=>PrivacyMode
});
var dashboard_connect_exports = {};
Object.defineProperty(dashboard_connect_exports, "DashboardService", {
    enumerable: true,
    get: ()=>DashboardService
});
var telemetry_pb_exports = {};
Object.defineProperty(telemetry_pb_exports, "CapturedProfile", {
    enumerable: true,
    get: ()=>CapturedProfile
});
Object.defineProperty(telemetry_pb_exports, "CapturedWebProfile", {
    enumerable: true,
    get: ()=>CapturedWebProfile
});
Object.defineProperty(telemetry_pb_exports, "ChatRequestTelemetryEvent", {
    enumerable: true,
    get: ()=>ChatRequestTelemetryEvent
});
Object.defineProperty(telemetry_pb_exports, "Interaction", {
    enumerable: true,
    get: ()=>Interaction
});
Object.defineProperty(telemetry_pb_exports, "InteractionType", {
    enumerable: true,
    get: ()=>InteractionType
});
Object.defineProperty(telemetry_pb_exports, "PerformanceEvent", {
    enumerable: true,
    get: ()=>PerformanceEvent
});
Object.defineProperty(telemetry_pb_exports, "PerformanceEventType", {
    enumerable: true,
    get: ()=>PerformanceEventType
});
Object.defineProperty(telemetry_pb_exports, "PerformanceMetric", {
    enumerable: true,
    get: ()=>PerformanceMetric
});
Object.defineProperty(telemetry_pb_exports, "ProfileKind", {
    enumerable: true,
    get: ()=>ProfileKind
});
Object.defineProperty(telemetry_pb_exports, "ReportInlineActionRequest", {
    enumerable: true,
    get: ()=>ReportInlineActionRequest
});
Object.defineProperty(telemetry_pb_exports, "ReportInlineActionResponse", {
    enumerable: true,
    get: ()=>ReportInlineActionResponse
});
Object.defineProperty(telemetry_pb_exports, "ReportMetricsRequest", {
    enumerable: true,
    get: ()=>ReportMetricsRequest
});
Object.defineProperty(telemetry_pb_exports, "ReportMetricsRequest_Metric", {
    enumerable: true,
    get: ()=>ReportMetricsRequest_Metric
});
Object.defineProperty(telemetry_pb_exports, "ReportMetricsRequest_NamedMetric", {
    enumerable: true,
    get: ()=>ReportMetricsRequest_NamedMetric
});
Object.defineProperty(telemetry_pb_exports, "ReportMetricsResponse", {
    enumerable: true,
    get: ()=>ReportMetricsResponse
});
Object.defineProperty(telemetry_pb_exports, "ScriptTiming", {
    enumerable: true,
    get: ()=>ScriptTiming
});
Object.defineProperty(telemetry_pb_exports, "SpanKind", {
    enumerable: true,
    get: ()=>SpanKind2
});
Object.defineProperty(telemetry_pb_exports, "Status", {
    enumerable: true,
    get: ()=>Status2
});
Object.defineProperty(telemetry_pb_exports, "Status_StatusCode", {
    enumerable: true,
    get: ()=>Status_StatusCode
});
Object.defineProperty(telemetry_pb_exports, "SubmitChatRequestEventsRequest", {
    enumerable: true,
    get: ()=>SubmitChatRequestEventsRequest
});
Object.defineProperty(telemetry_pb_exports, "SubmitChatRequestEventsResponse", {
    enumerable: true,
    get: ()=>SubmitChatRequestEventsResponse
});
Object.defineProperty(telemetry_pb_exports, "SubmitInteractionWindowRequest", {
    enumerable: true,
    get: ()=>SubmitInteractionWindowRequest
});
Object.defineProperty(telemetry_pb_exports, "SubmitInteractionWindowResponse", {
    enumerable: true,
    get: ()=>SubmitInteractionWindowResponse
});
Object.defineProperty(telemetry_pb_exports, "SubmitPerformanceEventsRequest", {
    enumerable: true,
    get: ()=>SubmitPerformanceEventsRequest
});
Object.defineProperty(telemetry_pb_exports, "SubmitPerformanceEventsResponse", {
    enumerable: true,
    get: ()=>SubmitPerformanceEventsResponse
});
Object.defineProperty(telemetry_pb_exports, "SubmitProfileRequest", {
    enumerable: true,
    get: ()=>SubmitProfileRequest
});
Object.defineProperty(telemetry_pb_exports, "SubmitProfileResponse", {
    enumerable: true,
    get: ()=>SubmitProfileResponse
});
Object.defineProperty(telemetry_pb_exports, "SubmitSpansRequest", {
    enumerable: true,
    get: ()=>SubmitSpansRequest
});
Object.defineProperty(telemetry_pb_exports, "SubmitSpansResponse", {
    enumerable: true,
    get: ()=>SubmitSpansResponse
});
Object.defineProperty(telemetry_pb_exports, "SubmitToolCallEventsRequest", {
    enumerable: true,
    get: ()=>SubmitToolCallEventsRequest
});
Object.defineProperty(telemetry_pb_exports, "SubmitToolCallEventsResponse", {
    enumerable: true,
    get: ()=>SubmitToolCallEventsResponse
});
Object.defineProperty(telemetry_pb_exports, "SystemMetadata", {
    enumerable: true,
    get: ()=>SystemMetadata
});
Object.defineProperty(telemetry_pb_exports, "ToolCallTelemetryEvent", {
    enumerable: true,
    get: ()=>ToolCallTelemetryEvent
});
Object.defineProperty(telemetry_pb_exports, "TraceLink", {
    enumerable: true,
    get: ()=>TraceLink
});
Object.defineProperty(telemetry_pb_exports, "TraceSpan", {
    enumerable: true,
    get: ()=>TraceSpan
});
var telemetry_connect_exports = {};
Object.defineProperty(telemetry_connect_exports, "ChatRequestEventService", {
    enumerable: true,
    get: ()=>ChatRequestEventService
});
Object.defineProperty(telemetry_connect_exports, "MetricsService", {
    enumerable: true,
    get: ()=>MetricsService
});
Object.defineProperty(telemetry_connect_exports, "PerformanceEventService", {
    enumerable: true,
    get: ()=>PerformanceEventService
});
Object.defineProperty(telemetry_connect_exports, "ProfilingService", {
    enumerable: true,
    get: ()=>ProfilingService
});
Object.defineProperty(telemetry_connect_exports, "ToolCallEventService", {
    enumerable: true,
    get: ()=>ToolCallEventService
});
Object.defineProperty(telemetry_connect_exports, "TraceService", {
    enumerable: true,
    get: ()=>TraceService
});
Object.defineProperty(telemetry_connect_exports, "WebProfilingService", {
    enumerable: true,
    get: ()=>WebProfilingService
});
var analytics_pb_exports = {};
Object.defineProperty(analytics_pb_exports, "AnalyticsContext", {
    enumerable: true,
    get: ()=>AnalyticsContext
});
Object.defineProperty(analytics_pb_exports, "AnalyticsEvent", {
    enumerable: true,
    get: ()=>AnalyticsEvent
});
Object.defineProperty(analytics_pb_exports, "BatchEvent", {
    enumerable: true,
    get: ()=>BatchEvent
});
Object.defineProperty(analytics_pb_exports, "BatchRequest", {
    enumerable: true,
    get: ()=>BatchRequest
});
Object.defineProperty(analytics_pb_exports, "BatchResponse", {
    enumerable: true,
    get: ()=>BatchResponse
});
Object.defineProperty(analytics_pb_exports, "BootstrapStatsigRequest", {
    enumerable: true,
    get: ()=>BootstrapStatsigRequest
});
Object.defineProperty(analytics_pb_exports, "BootstrapStatsigResponse", {
    enumerable: true,
    get: ()=>BootstrapStatsigResponse
});
Object.defineProperty(analytics_pb_exports, "ClientInfo", {
    enumerable: true,
    get: ()=>ClientInfo
});
Object.defineProperty(analytics_pb_exports, "ClientLogEntry", {
    enumerable: true,
    get: ()=>ClientLogEntry
});
Object.defineProperty(analytics_pb_exports, "ClientLogLevel", {
    enumerable: true,
    get: ()=>ClientLogLevel
});
Object.defineProperty(analytics_pb_exports, "ClientOS", {
    enumerable: true,
    get: ()=>ClientOS
});
Object.defineProperty(analytics_pb_exports, "DownloadIssueTracesRequest", {
    enumerable: true,
    get: ()=>DownloadIssueTracesRequest
});
Object.defineProperty(analytics_pb_exports, "DownloadIssueTracesResponse", {
    enumerable: true,
    get: ()=>DownloadIssueTracesResponse
});
Object.defineProperty(analytics_pb_exports, "EventData", {
    enumerable: true,
    get: ()=>EventData
});
Object.defineProperty(analytics_pb_exports, "GetFirstWindowStatsigDecisionRequest", {
    enumerable: true,
    get: ()=>GetFirstWindowStatsigDecisionRequest
});
Object.defineProperty(analytics_pb_exports, "GetFirstWindowStatsigDecisionResponse", {
    enumerable: true,
    get: ()=>GetFirstWindowStatsigDecisionResponse
});
Object.defineProperty(analytics_pb_exports, "IngestConversationRequest", {
    enumerable: true,
    get: ()=>IngestConversationRequest
});
Object.defineProperty(analytics_pb_exports, "IngestConversationResponse", {
    enumerable: true,
    get: ()=>IngestConversationResponse
});
Object.defineProperty(analytics_pb_exports, "SubmitLogsRequest", {
    enumerable: true,
    get: ()=>SubmitLogsRequest
});
Object.defineProperty(analytics_pb_exports, "SubmitLogsResponse", {
    enumerable: true,
    get: ()=>SubmitLogsResponse
});
Object.defineProperty(analytics_pb_exports, "TrackEventsRequest", {
    enumerable: true,
    get: ()=>TrackEventsRequest
});
Object.defineProperty(analytics_pb_exports, "TrackEventsResponse", {
    enumerable: true,
    get: ()=>TrackEventsResponse
});
Object.defineProperty(analytics_pb_exports, "UploadIssueTraceRequest", {
    enumerable: true,
    get: ()=>UploadIssueTraceRequest
});
Object.defineProperty(analytics_pb_exports, "UploadIssueTraceResponse", {
    enumerable: true,
    get: ()=>UploadIssueTraceResponse
});
var analytics_connect_exports = {};
Object.defineProperty(analytics_connect_exports, "AnalyticsService", {
    enumerable: true,
    get: ()=>AnalyticsService
});
var bidi_pb_exports = {};
Object.defineProperty(bidi_pb_exports, "BidiAppendRequest", {
    enumerable: true,
    get: ()=>BidiAppendRequest
});
Object.defineProperty(bidi_pb_exports, "BidiAppendResponse", {
    enumerable: true,
    get: ()=>BidiAppendResponse
});
Object.defineProperty(bidi_pb_exports, "BidiPollRequest", {
    enumerable: true,
    get: ()=>BidiPollRequest
});
Object.defineProperty(bidi_pb_exports, "BidiPollResponse", {
    enumerable: true,
    get: ()=>BidiPollResponse
});
Object.defineProperty(bidi_pb_exports, "BidiRequestId", {
    enumerable: true,
    get: ()=>BidiRequestId
});
var agent_service_connect_exports = {};
Object.defineProperty(agent_service_connect_exports, "AgentService", {
    enumerable: true,
    get: ()=>AgentService
});
var aiserver_connect_exports = {};
Object.defineProperty(aiserver_connect_exports, "AiService", {
    enumerable: true,
    get: ()=>AiService
});
var background_composer_connect_exports = {};
Object.defineProperty(background_composer_connect_exports, "BackgroundComposerService", {
    enumerable: true,
    get: ()=>BackgroundComposerService
});
var chat_connect_exports = {};
Object.defineProperty(chat_connect_exports, "ChatService", {
    enumerable: true,
    get: ()=>ChatService
});
Object.defineProperty(chat_connect_exports, "ReplayChatService", {
    enumerable: true,
    get: ()=>ReplayChatService
});
var cmdk_connect_exports = {};
Object.defineProperty(cmdk_connect_exports, "CmdKService", {
    enumerable: true,
    get: ()=>CmdKService
});
var filesyncserver_connect_exports = {};
Object.defineProperty(filesyncserver_connect_exports, "FileSyncService", {
    enumerable: true,
    get: ()=>FileSyncService
});
var health_connect_exports = {};
Object.defineProperty(health_connect_exports, "HealthService", {
    enumerable: true,
    get: ()=>HealthService
});
var inference_connect_exports = {};
Object.defineProperty(inference_connect_exports, "InferenceService", {
    enumerable: true,
    get: ()=>InferenceService
});
var private_inference_connect_exports = {};
Object.defineProperty(private_inference_connect_exports, "PrivateInferenceService", {
    enumerable: true,
    get: ()=>PrivateInferenceService
});
var remote_agent_host_presence_connect_exports = {};
Object.defineProperty(remote_agent_host_presence_connect_exports, "RemoteAgentHostPresenceService", {
    enumerable: true,
    get: ()=>RemoteAgentHostPresenceService
});
var repository_connect_exports = {};
Object.defineProperty(repository_connect_exports, "GitIndexService", {
    enumerable: true,
    get: ()=>GitIndexService
});
Object.defineProperty(repository_connect_exports, "RepositoryService", {
    enumerable: true,
    get: ()=>RepositoryService
});
var server_config_pb_exports = {};
Object.defineProperty(server_config_pb_exports, "AdButton", {
    enumerable: true,
    get: ()=>AdButton
});
Object.defineProperty(server_config_pb_exports, "AdContent", {
    enumerable: true,
    get: ()=>AdContent
});
Object.defineProperty(server_config_pb_exports, "AdHeader", {
    enumerable: true,
    get: ()=>AdHeader
});
Object.defineProperty(server_config_pb_exports, "AdSection", {
    enumerable: true,
    get: ()=>AdSection
});
Object.defineProperty(server_config_pb_exports, "AgentLayoutPolicy", {
    enumerable: true,
    get: ()=>AgentLayoutPolicy
});
Object.defineProperty(server_config_pb_exports, "AgentTelemetryConfig", {
    enumerable: true,
    get: ()=>AgentTelemetryConfig
});
Object.defineProperty(server_config_pb_exports, "AgentUrlConfig", {
    enumerable: true,
    get: ()=>AgentUrlConfig
});
Object.defineProperty(server_config_pb_exports, "AutoContextConfig", {
    enumerable: true,
    get: ()=>AutoContextConfig
});
Object.defineProperty(server_config_pb_exports, "BackgroundComposerConfig", {
    enumerable: true,
    get: ()=>BackgroundComposerConfig
});
Object.defineProperty(server_config_pb_exports, "BugbotConfig", {
    enumerable: true,
    get: ()=>BugbotConfig
});
Object.defineProperty(server_config_pb_exports, "BugbotPlanType", {
    enumerable: true,
    get: ()=>BugbotPlanType
});
Object.defineProperty(server_config_pb_exports, "ButtonType", {
    enumerable: true,
    get: ()=>ButtonType
});
Object.defineProperty(server_config_pb_exports, "ChatConfig", {
    enumerable: true,
    get: ()=>ChatConfig
});
Object.defineProperty(server_config_pb_exports, "ClientSurface", {
    enumerable: true,
    get: ()=>ClientSurface
});
Object.defineProperty(server_config_pb_exports, "ClientTracingConfig", {
    enumerable: true,
    get: ()=>ClientTracingConfig
});
Object.defineProperty(server_config_pb_exports, "ClientUpdateLevel", {
    enumerable: true,
    get: ()=>ClientUpdateLevel
});
Object.defineProperty(server_config_pb_exports, "ClientVersionStatus", {
    enumerable: true,
    get: ()=>ClientVersionStatus
});
Object.defineProperty(server_config_pb_exports, "CodebaseTelemetryConfig", {
    enumerable: true,
    get: ()=>CodebaseTelemetryConfig
});
Object.defineProperty(server_config_pb_exports, "DevEnvironment", {
    enumerable: true,
    get: ()=>DevEnvironment
});
Object.defineProperty(server_config_pb_exports, "DisplayMode", {
    enumerable: true,
    get: ()=>DisplayMode
});
Object.defineProperty(server_config_pb_exports, "FolderSizeLimit", {
    enumerable: true,
    get: ()=>FolderSizeLimit
});
Object.defineProperty(server_config_pb_exports, "GetNewRepoFlowConfigRequest", {
    enumerable: true,
    get: ()=>GetNewRepoFlowConfigRequest
});
Object.defineProperty(server_config_pb_exports, "GetNewRepoFlowConfigResponse", {
    enumerable: true,
    get: ()=>GetNewRepoFlowConfigResponse
});
Object.defineProperty(server_config_pb_exports, "GetServerConfigRequest", {
    enumerable: true,
    get: ()=>GetServerConfigRequest
});
Object.defineProperty(server_config_pb_exports, "GetServerConfigResponse", {
    enumerable: true,
    get: ()=>GetServerConfigResponse
});
Object.defineProperty(server_config_pb_exports, "GitIndexingConfig", {
    enumerable: true,
    get: ()=>GitIndexingConfig
});
Object.defineProperty(server_config_pb_exports, "GoogleWorkspaceMcpOAuthClient", {
    enumerable: true,
    get: ()=>GoogleWorkspaceMcpOAuthClient
});
Object.defineProperty(server_config_pb_exports, "Http2Config", {
    enumerable: true,
    get: ()=>Http2Config
});
Object.defineProperty(server_config_pb_exports, "InAppAd", {
    enumerable: true,
    get: ()=>InAppAd
});
Object.defineProperty(server_config_pb_exports, "InAppAdTrigger", {
    enumerable: true,
    get: ()=>InAppAdTrigger
});
Object.defineProperty(server_config_pb_exports, "IndexingConfig", {
    enumerable: true,
    get: ()=>IndexingConfig
});
Object.defineProperty(server_config_pb_exports, "InferenceProviderWarning", {
    enumerable: true,
    get: ()=>InferenceProviderWarning
});
Object.defineProperty(server_config_pb_exports, "InferenceProviderWarningTrigger", {
    enumerable: true,
    get: ()=>InferenceProviderWarningTrigger
});
Object.defineProperty(server_config_pb_exports, "InteractionConfig", {
    enumerable: true,
    get: ()=>InteractionConfig
});
Object.defineProperty(server_config_pb_exports, "MemoryMonitorConfig", {
    enumerable: true,
    get: ()=>MemoryMonitorConfig
});
Object.defineProperty(server_config_pb_exports, "MetricsConfig", {
    enumerable: true,
    get: ()=>MetricsConfig
});
Object.defineProperty(server_config_pb_exports, "ModalDisplayConfig", {
    enumerable: true,
    get: ()=>ModalDisplayConfig
});
Object.defineProperty(server_config_pb_exports, "ModelMigration", {
    enumerable: true,
    get: ()=>ModelMigration
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowCondition", {
    enumerable: true,
    get: ()=>NewRepoFlowCondition
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowConfig", {
    enumerable: true,
    get: ()=>NewRepoFlowConfig
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowDismissAction", {
    enumerable: true,
    get: ()=>NewRepoFlowDismissAction
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowFact", {
    enumerable: true,
    get: ()=>NewRepoFlowFact
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowInstallPluginAction", {
    enumerable: true,
    get: ()=>NewRepoFlowInstallPluginAction
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowMcpAuthenticateAction", {
    enumerable: true,
    get: ()=>NewRepoFlowMcpAuthenticateAction
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowPluginAuthTarget", {
    enumerable: true,
    get: ()=>NewRepoFlowPluginAuthTarget
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowProbe", {
    enumerable: true,
    get: ()=>NewRepoFlowProbe
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowProbeInterpreter", {
    enumerable: true,
    get: ()=>NewRepoFlowProbeInterpreter
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowStep", {
    enumerable: true,
    get: ()=>NewRepoFlowStep
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowStepButton", {
    enumerable: true,
    get: ()=>NewRepoFlowStepButton
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowStepPresentation", {
    enumerable: true,
    get: ()=>NewRepoFlowStepPresentation
});
Object.defineProperty(server_config_pb_exports, "NewRepoFlowSubmitFollowupAction", {
    enumerable: true,
    get: ()=>NewRepoFlowSubmitFollowupAction
});
Object.defineProperty(server_config_pb_exports, "OnboardingConfig", {
    enumerable: true,
    get: ()=>OnboardingConfig
});
Object.defineProperty(server_config_pb_exports, "PerformanceEventsConfig", {
    enumerable: true,
    get: ()=>PerformanceEventsConfig
});
Object.defineProperty(server_config_pb_exports, "RemoteAuthority", {
    enumerable: true,
    get: ()=>RemoteAuthority
});
Object.defineProperty(server_config_pb_exports, "RemoteConnectionType", {
    enumerable: true,
    get: ()=>RemoteConnectionType
});
Object.defineProperty(server_config_pb_exports, "ResolveNewRepoFlowBackendProbeRequest", {
    enumerable: true,
    get: ()=>ResolveNewRepoFlowBackendProbeRequest
});
Object.defineProperty(server_config_pb_exports, "ResolveNewRepoFlowBackendProbeResponse", {
    enumerable: true,
    get: ()=>ResolveNewRepoFlowBackendProbeResponse
});
Object.defineProperty(server_config_pb_exports, "RetrievalKeepAliveConfig", {
    enumerable: true,
    get: ()=>RetrievalKeepAliveConfig
});
Object.defineProperty(server_config_pb_exports, "RunTerminalServerConfig", {
    enumerable: true,
    get: ()=>RunTerminalServerConfig
});
Object.defineProperty(server_config_pb_exports, "ScmConnectAdConnectionState", {
    enumerable: true,
    get: ()=>ScmConnectAdConnectionState
});
Object.defineProperty(server_config_pb_exports, "ScmConnectAdContext", {
    enumerable: true,
    get: ()=>ScmConnectAdContext
});
Object.defineProperty(server_config_pb_exports, "ScmConnectAdProvider", {
    enumerable: true,
    get: ()=>ScmConnectAdProvider
});
Object.defineProperty(server_config_pb_exports, "TerminalTipConfig", {
    enumerable: true,
    get: ()=>TerminalTipConfig
});
Object.defineProperty(server_config_pb_exports, "TraceConfig", {
    enumerable: true,
    get: ()=>TraceConfig
});
Object.defineProperty(server_config_pb_exports, "UpdateConfig", {
    enumerable: true,
    get: ()=>UpdateConfig
});
Object.defineProperty(server_config_pb_exports, "UpdateConfig_UpdateMode", {
    enumerable: true,
    get: ()=>UpdateConfig_UpdateMode
});
var uploadserver_connect_exports = {};
Object.defineProperty(uploadserver_connect_exports, "UploadService", {
    enumerable: true,
    get: ()=>UploadService
});
var origin_connect_exports = {};
Object.defineProperty(origin_connect_exports, "OriginService", {
    enumerable: true,
    get: ()=>OriginService
});
var agent_websocket_pb_exports = {};
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketCancelRun", {
    enumerable: true,
    get: ()=>AgentWebSocketCancelRun
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketClientFrame", {
    enumerable: true,
    get: ()=>AgentWebSocketClientFrame
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketClientHalfClose", {
    enumerable: true,
    get: ()=>AgentWebSocketClientHalfClose
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketClientMessage", {
    enumerable: true,
    get: ()=>AgentWebSocketClientMessage
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketConnectCode", {
    enumerable: true,
    get: ()=>AgentWebSocketConnectCode
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketConnectError", {
    enumerable: true,
    get: ()=>AgentWebSocketConnectError
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketConnectErrorDetail", {
    enumerable: true,
    get: ()=>AgentWebSocketConnectErrorDetail
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketHeader", {
    enumerable: true,
    get: ()=>AgentWebSocketHeader
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketHello", {
    enumerable: true,
    get: ()=>AgentWebSocketHello
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketProtocolVersion", {
    enumerable: true,
    get: ()=>AgentWebSocketProtocolVersion
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketRunAccepted", {
    enumerable: true,
    get: ()=>AgentWebSocketRunAccepted
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketRunEnd", {
    enumerable: true,
    get: ()=>AgentWebSocketRunEnd
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketRunIdentity", {
    enumerable: true,
    get: ()=>AgentWebSocketRunIdentity
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketRunRejected", {
    enumerable: true,
    get: ()=>AgentWebSocketRunRejected
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketRunStart", {
    enumerable: true,
    get: ()=>AgentWebSocketRunStart
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketServerFrame", {
    enumerable: true,
    get: ()=>AgentWebSocketServerFrame
});
Object.defineProperty(agent_websocket_pb_exports, "AgentWebSocketServerMessage", {
    enumerable: true,
    get: ()=>AgentWebSocketServerMessage
});
var agent_websocket_exports = {};
Object.defineProperty(agent_websocket_exports, "AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER", {
    enumerable: true,
    get: ()=>AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER
});
Object.defineProperty(agent_websocket_exports, "AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL", {
    enumerable: true,
    get: ()=>AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL
});
Object.defineProperty(agent_websocket_exports, "AGENT_WEBSOCKET_PROTOCOL_VERSION", {
    enumerable: true,
    get: ()=>AGENT_WEBSOCKET_PROTOCOL_VERSION
});
Object.defineProperty(agent_websocket_exports, "AGENT_WEBSOCKET_REUSE_HEADER", {
    enumerable: true,
    get: ()=>AGENT_WEBSOCKET_REUSE_HEADER
});
Object.defineProperty(agent_websocket_exports, "AGENT_WEBSOCKET_SEQUENTIAL_V1_REUSE_VALUE", {
    enumerable: true,
    get: ()=>AGENT_WEBSOCKET_SEQUENTIAL_V1_REUSE_VALUE
});
Object.defineProperty(agent_websocket_exports, "AGENT_WEBSOCKET_SUBPROTOCOL", {
    enumerable: true,
    get: ()=>AGENT_WEBSOCKET_SUBPROTOCOL
});
Object.defineProperty(agent_websocket_exports, "allowsAgentWebSocketSequentialReuse", {
    enumerable: true,
    get: ()=>allowsAgentWebSocketSequentialReuse
});
Object.defineProperty(agent_websocket_exports, "validateAgentWebSocketClientFrame", {
    enumerable: true,
    get: ()=>validateAgentWebSocketClientFrame
});
Object.defineProperty(agent_websocket_exports, "validateAgentWebSocketConnectError", {
    enumerable: true,
    get: ()=>validateAgentWebSocketConnectError
});
Object.defineProperty(agent_websocket_exports, "validateAgentWebSocketHello", {
    enumerable: true,
    get: ()=>validateAgentWebSocketHello
});
Object.defineProperty(agent_websocket_exports, "validateAgentWebSocketRunIdentity", {
    enumerable: true,
    get: ()=>validateAgentWebSocketRunIdentity
});
Object.defineProperty(agent_websocket_exports, "validateAgentWebSocketServerFrame", {
    enumerable: true,
    get: ()=>validateAgentWebSocketServerFrame
});
var bidi_connect_exports = {};
Object.defineProperty(bidi_connect_exports, "BidiService", {
    enumerable: true,
    get: ()=>BidiService
});
var dist_exports2 = {};
Object.defineProperty(dist_exports2, "BashState", {
    enumerable: true,
    get: ()=>BashState
});
Object.defineProperty(dist_exports2, "INSECURE_NONE_SANDBOX_POLICY", {
    enumerable: true,
    get: ()=>INSECURE_NONE_SANDBOX_POLICY
});
Object.defineProperty(dist_exports2, "KnownShellExecutor", {
    enumerable: true,
    get: ()=>KnownShellExecutor
});
Object.defineProperty(dist_exports2, "NaiveTerminalExecutor", {
    enumerable: true,
    get: ()=>NaiveTerminalExecutor
});
Object.defineProperty(dist_exports2, "OutputSuppressionController", {
    enumerable: true,
    get: ()=>OutputSuppressionController
});
Object.defineProperty(dist_exports2, "PowerShellState", {
    enumerable: true,
    get: ()=>PowerShellState
});
Object.defineProperty(dist_exports2, "SHELL_OUTPUT_SUPPRESSED_NOTICE", {
    enumerable: true,
    get: ()=>SHELL_OUTPUT_SUPPRESSED_NOTICE
});
Object.defineProperty(dist_exports2, "SandboxUnsupportedError", {
    enumerable: true,
    get: ()=>SandboxUnsupportedError
});
Object.defineProperty(dist_exports2, "ZshState", {
    enumerable: true,
    get: ()=>ZshState
});
Object.defineProperty(dist_exports2, "configureRipgrepPath", {
    enumerable: true,
    get: ()=>configureRipgrepPath
});
Object.defineProperty(dist_exports2, "configureSandboxPrereqs", {
    enumerable: true,
    get: ()=>configureSandboxPrereqs2
});
Object.defineProperty(dist_exports2, "createDefaultTerminalExecutor", {
    enumerable: true,
    get: ()=>createDefaultTerminalExecutor
});
Object.defineProperty(dist_exports2, "createIgnoreMapping", {
    enumerable: true,
    get: ()=>createIgnoreMapping
});
Object.defineProperty(dist_exports2, "createNaiveTerminalExecutor", {
    enumerable: true,
    get: ()=>createNaiveTerminalExecutor
});
Object.defineProperty(dist_exports2, "getHardcodedAllowedReadPaths", {
    enumerable: true,
    get: ()=>getHardcodedAllowedReadPaths
});
Object.defineProperty(dist_exports2, "getLastSandboxFailureReason", {
    enumerable: true,
    get: ()=>getLastSandboxFailureReason
});
Object.defineProperty(dist_exports2, "getPowerShellExecutable", {
    enumerable: true,
    get: ()=>getPowerShellExecutable
});
Object.defineProperty(dist_exports2, "getRipgrepBinaryPath", {
    enumerable: true,
    get: ()=>getRipgrepBinaryPath
});
Object.defineProperty(dist_exports2, "getSandboxPolicyType", {
    enumerable: true,
    get: ()=>getSandboxPolicyType
});
Object.defineProperty(dist_exports2, "getSandboxProjectDir", {
    enumerable: true,
    get: ()=>getSandboxProjectDir
});
Object.defineProperty(dist_exports2, "getShellExecutablePath", {
    enumerable: true,
    get: ()=>getShellExecutablePath
});
Object.defineProperty(dist_exports2, "getSuggestedShell", {
    enumerable: true,
    get: ()=>getSuggestedShell
});
Object.defineProperty(dist_exports2, "isAllowAllNetworkByPolicy", {
    enumerable: true,
    get: ()=>isAllowAllNetworkByPolicy
});
Object.defineProperty(dist_exports2, "isHardcodedWriteProtected", {
    enumerable: true,
    get: ()=>isHardcodedWriteProtected
});
Object.defineProperty(dist_exports2, "isNetworkEnabledByPolicy", {
    enumerable: true,
    get: ()=>isNetworkEnabledByPolicy
});
Object.defineProperty(dist_exports2, "isRipgrepConfigured", {
    enumerable: true,
    get: ()=>isRipgrepConfigured
});
Object.defineProperty(dist_exports2, "isSandboxSupported", {
    enumerable: true,
    get: ()=>isSandboxSupported
});
Object.defineProperty(dist_exports2, "loadSandboxPolicyFromFileOrUndefined", {
    enumerable: true,
    get: ()=>loadSandboxPolicyFromFileOrUndefined
});
Object.defineProperty(dist_exports2, "mergeAdditionalReadPaths", {
    enumerable: true,
    get: ()=>mergeAdditionalReadPaths
});
Object.defineProperty(dist_exports2, "mergeNetworkPolicies", {
    enumerable: true,
    get: ()=>mergeNetworkPolicies
});
Object.defineProperty(dist_exports2, "mergePathsIntersection", {
    enumerable: true,
    get: ()=>mergePathsIntersection
});
Object.defineProperty(dist_exports2, "mergePathsUnion", {
    enumerable: true,
    get: ()=>mergePathsUnion
});
Object.defineProperty(dist_exports2, "mergeReadBoundary", {
    enumerable: true,
    get: ()=>mergeReadBoundary
});
Object.defineProperty(dist_exports2, "networkAllowAllPolicy", {
    enumerable: true,
    get: ()=>networkAllowAllPolicy
});
Object.defineProperty(dist_exports2, "networkDisabledPolicy", {
    enumerable: true,
    get: ()=>networkDisabledPolicy
});
Object.defineProperty(dist_exports2, "parseSandboxPolicyJson", {
    enumerable: true,
    get: ()=>parseSandboxPolicyJson
});
Object.defineProperty(dist_exports2, "primeSandboxSupport", {
    enumerable: true,
    get: ()=>primeSandboxSupport
});
Object.defineProperty(dist_exports2, "resolvePolicyPaths", {
    enumerable: true,
    get: ()=>resolvePolicyPaths
});
Object.defineProperty(dist_exports2, "resolveRipgrepFromPath", {
    enumerable: true,
    get: ()=>resolveRipgrepFromPath
});
Object.defineProperty(dist_exports2, "resolveSandboxPolicyForWorkspace", {
    enumerable: true,
    get: ()=>resolveSandboxPolicyForWorkspace
});
Object.defineProperty(dist_exports2, "spawnInSandbox", {
    enumerable: true,
    get: ()=>spawnInSandbox
});
Object.defineProperty(dist_exports2, "spawnWithSignal", {
    enumerable: true,
    get: ()=>spawnWithSignal
});
Object.defineProperty(dist_exports2, "withConfiguredRipgrepEnv", {
    enumerable: true,
    get: ()=>withConfiguredRipgrepEnv
});
var composite_modes_exports = {};
Object.defineProperty(composite_modes_exports, "add", {
    enumerable: true,
    get: ()=>add
});
Object.defineProperty(composite_modes_exports, "darken", {
    enumerable: true,
    get: ()=>darken2
});
Object.defineProperty(composite_modes_exports, "difference", {
    enumerable: true,
    get: ()=>difference
});
Object.defineProperty(composite_modes_exports, "dstOver", {
    enumerable: true,
    get: ()=>dstOver
});
Object.defineProperty(composite_modes_exports, "exclusion", {
    enumerable: true,
    get: ()=>exclusion
});
Object.defineProperty(composite_modes_exports, "hardLight", {
    enumerable: true,
    get: ()=>hardLight
});
Object.defineProperty(composite_modes_exports, "lighten", {
    enumerable: true,
    get: ()=>lighten2
});
Object.defineProperty(composite_modes_exports, "multiply", {
    enumerable: true,
    get: ()=>multiply
});
Object.defineProperty(composite_modes_exports, "names", {
    enumerable: true,
    get: ()=>names2
});
Object.defineProperty(composite_modes_exports, "overlay", {
    enumerable: true,
    get: ()=>overlay
});
Object.defineProperty(composite_modes_exports, "screen", {
    enumerable: true,
    get: ()=>screen
});
Object.defineProperty(composite_modes_exports, "srcOver", {
    enumerable: true,
    get: ()=>srcOver
});
var esm_exports = {};
Object.defineProperty(esm_exports, "BlendMode", {
    enumerable: true,
    get: ()=>BlendMode
});
Object.defineProperty(esm_exports, "HorizontalAlign", {
    enumerable: true,
    get: ()=>HorizontalAlign
});
Object.defineProperty(esm_exports, "VerticalAlign", {
    enumerable: true,
    get: ()=>VerticalAlign
});
Object.defineProperty(esm_exports, "composite", {
    enumerable: true,
    get: ()=>composite
});
Object.defineProperty(esm_exports, "createJimp", {
    enumerable: true,
    get: ()=>createJimp
});
Object.defineProperty(esm_exports, "getExifOrientation", {
    enumerable: true,
    get: ()=>getExifOrientation
});
var esm_exports2 = {};
Object.defineProperty(esm_exports2, "PNGColorType", {
    enumerable: true,
    get: ()=>PNGColorType
});
Object.defineProperty(esm_exports2, "PNGFilterType", {
    enumerable: true,
    get: ()=>PNGFilterType
});
Object.defineProperty(esm_exports2, "default", {
    enumerable: true,
    get: ()=>png
});
var esm_exports3 = {};
Object.defineProperty(esm_exports3, "default", {
    enumerable: true,
    get: ()=>jpeg
});
var esm_exports4 = {};
Object.defineProperty(esm_exports4, "BmpCompression", {
    enumerable: true,
    get: ()=>BmpCompression
});
Object.defineProperty(esm_exports4, "default", {
    enumerable: true,
    get: ()=>bmp
});
Object.defineProperty(esm_exports4, "msBmp", {
    enumerable: true,
    get: ()=>msBmp
});
var esm_exports6 = {};
Object.defineProperty(esm_exports6, "default", {
    enumerable: true,
    get: ()=>gif
});
var esm_exports7 = {};
Object.defineProperty(esm_exports7, "default", {
    enumerable: true,
    get: ()=>tiff
});
var esm_exports8 = {};
Object.defineProperty(esm_exports8, "ResizeStrategy", {
    enumerable: true,
    get: ()=>ResizeStrategy
});
Object.defineProperty(esm_exports8, "methods", {
    enumerable: true,
    get: ()=>methods
});
var util_exports = {};
Object.defineProperty(util_exports, "BIGINT_FORMAT_RANGES", {
    enumerable: true,
    get: ()=>BIGINT_FORMAT_RANGES
});
Object.defineProperty(util_exports, "Class", {
    enumerable: true,
    get: ()=>Class
});
Object.defineProperty(util_exports, "NUMBER_FORMAT_RANGES", {
    enumerable: true,
    get: ()=>NUMBER_FORMAT_RANGES
});
Object.defineProperty(util_exports, "aborted", {
    enumerable: true,
    get: ()=>aborted
});
Object.defineProperty(util_exports, "allowsEval", {
    enumerable: true,
    get: ()=>allowsEval
});
Object.defineProperty(util_exports, "assert", {
    enumerable: true,
    get: ()=>assert2
});
Object.defineProperty(util_exports, "assertEqual", {
    enumerable: true,
    get: ()=>assertEqual
});
Object.defineProperty(util_exports, "assertIs", {
    enumerable: true,
    get: ()=>assertIs
});
Object.defineProperty(util_exports, "assertNever", {
    enumerable: true,
    get: ()=>assertNever
});
Object.defineProperty(util_exports, "assertNotEqual", {
    enumerable: true,
    get: ()=>assertNotEqual
});
Object.defineProperty(util_exports, "assignProp", {
    enumerable: true,
    get: ()=>assignProp
});
Object.defineProperty(util_exports, "cached", {
    enumerable: true,
    get: ()=>cached
});
Object.defineProperty(util_exports, "captureStackTrace", {
    enumerable: true,
    get: ()=>captureStackTrace
});
Object.defineProperty(util_exports, "cleanEnum", {
    enumerable: true,
    get: ()=>cleanEnum
});
Object.defineProperty(util_exports, "cleanRegex", {
    enumerable: true,
    get: ()=>cleanRegex
});
Object.defineProperty(util_exports, "clone", {
    enumerable: true,
    get: ()=>clone2
});
Object.defineProperty(util_exports, "createTransparentProxy", {
    enumerable: true,
    get: ()=>createTransparentProxy
});
Object.defineProperty(util_exports, "defineLazy", {
    enumerable: true,
    get: ()=>defineLazy
});
Object.defineProperty(util_exports, "esc", {
    enumerable: true,
    get: ()=>esc
});
Object.defineProperty(util_exports, "escapeRegex", {
    enumerable: true,
    get: ()=>escapeRegex
});
Object.defineProperty(util_exports, "extend", {
    enumerable: true,
    get: ()=>extend
});
Object.defineProperty(util_exports, "finalizeIssue", {
    enumerable: true,
    get: ()=>finalizeIssue
});
Object.defineProperty(util_exports, "floatSafeRemainder", {
    enumerable: true,
    get: ()=>floatSafeRemainder2
});
Object.defineProperty(util_exports, "getElementAtPath", {
    enumerable: true,
    get: ()=>getElementAtPath
});
Object.defineProperty(util_exports, "getEnumValues", {
    enumerable: true,
    get: ()=>getEnumValues
});
Object.defineProperty(util_exports, "getLengthableOrigin", {
    enumerable: true,
    get: ()=>getLengthableOrigin
});
Object.defineProperty(util_exports, "getParsedType", {
    enumerable: true,
    get: ()=>getParsedType2
});
Object.defineProperty(util_exports, "getSizableOrigin", {
    enumerable: true,
    get: ()=>getSizableOrigin
});
Object.defineProperty(util_exports, "isObject", {
    enumerable: true,
    get: ()=>isObject3
});
Object.defineProperty(util_exports, "isPlainObject", {
    enumerable: true,
    get: ()=>isPlainObject
});
Object.defineProperty(util_exports, "issue", {
    enumerable: true,
    get: ()=>issue
});
Object.defineProperty(util_exports, "joinValues", {
    enumerable: true,
    get: ()=>joinValues
});
Object.defineProperty(util_exports, "jsonStringifyReplacer", {
    enumerable: true,
    get: ()=>jsonStringifyReplacer
});
Object.defineProperty(util_exports, "merge", {
    enumerable: true,
    get: ()=>merge3
});
Object.defineProperty(util_exports, "normalizeParams", {
    enumerable: true,
    get: ()=>normalizeParams
});
Object.defineProperty(util_exports, "nullish", {
    enumerable: true,
    get: ()=>nullish
});
Object.defineProperty(util_exports, "numKeys", {
    enumerable: true,
    get: ()=>numKeys
});
Object.defineProperty(util_exports, "omit", {
    enumerable: true,
    get: ()=>omit
});
Object.defineProperty(util_exports, "optionalKeys", {
    enumerable: true,
    get: ()=>optionalKeys
});
Object.defineProperty(util_exports, "partial", {
    enumerable: true,
    get: ()=>partial
});
Object.defineProperty(util_exports, "pick", {
    enumerable: true,
    get: ()=>pick
});
Object.defineProperty(util_exports, "prefixIssues", {
    enumerable: true,
    get: ()=>prefixIssues
});
Object.defineProperty(util_exports, "primitiveTypes", {
    enumerable: true,
    get: ()=>primitiveTypes
});
Object.defineProperty(util_exports, "promiseAllObject", {
    enumerable: true,
    get: ()=>promiseAllObject
});
Object.defineProperty(util_exports, "propertyKeyTypes", {
    enumerable: true,
    get: ()=>propertyKeyTypes
});
Object.defineProperty(util_exports, "randomString", {
    enumerable: true,
    get: ()=>randomString
});
Object.defineProperty(util_exports, "required", {
    enumerable: true,
    get: ()=>required
});
Object.defineProperty(util_exports, "stringifyPrimitive", {
    enumerable: true,
    get: ()=>stringifyPrimitive
});
Object.defineProperty(util_exports, "unwrapMessage", {
    enumerable: true,
    get: ()=>unwrapMessage
});
var iso_exports = {};
Object.defineProperty(iso_exports, "ZodISODate", {
    enumerable: true,
    get: ()=>ZodISODate
});
Object.defineProperty(iso_exports, "ZodISODateTime", {
    enumerable: true,
    get: ()=>ZodISODateTime
});
Object.defineProperty(iso_exports, "ZodISODuration", {
    enumerable: true,
    get: ()=>ZodISODuration
});
Object.defineProperty(iso_exports, "ZodISOTime", {
    enumerable: true,
    get: ()=>ZodISOTime
});
Object.defineProperty(iso_exports, "date", {
    enumerable: true,
    get: ()=>date2
});
Object.defineProperty(iso_exports, "datetime", {
    enumerable: true,
    get: ()=>datetime2
});
Object.defineProperty(iso_exports, "duration", {
    enumerable: true,
    get: ()=>duration2
});
Object.defineProperty(iso_exports, "time", {
    enumerable: true,
    get: ()=>time2
});
var coerce_exports = {};
Object.defineProperty(coerce_exports, "bigint", {
    enumerable: true,
    get: ()=>bigint2
});
Object.defineProperty(coerce_exports, "boolean", {
    enumerable: true,
    get: ()=>boolean3
});
Object.defineProperty(coerce_exports, "date", {
    enumerable: true,
    get: ()=>date3
});
Object.defineProperty(coerce_exports, "number", {
    enumerable: true,
    get: ()=>number3
});
Object.defineProperty(coerce_exports, "string", {
    enumerable: true,
    get: ()=>string3
});
var mcp_sandbox_policy_exports = {};
Object.defineProperty(mcp_sandbox_policy_exports, "buildMcpSandboxPolicy", {
    enumerable: true,
    get: ()=>buildMcpSandboxPolicy
});
var pdf_exports = {};
Object.defineProperty(pdf_exports, "AbortException", {
    enumerable: true,
    get: ()=>AbortException
});
Object.defineProperty(pdf_exports, "AnnotationEditorLayer", {
    enumerable: true,
    get: ()=>AnnotationEditorLayer
});
Object.defineProperty(pdf_exports, "AnnotationEditorParamsType", {
    enumerable: true,
    get: ()=>AnnotationEditorParamsType
});
Object.defineProperty(pdf_exports, "AnnotationEditorType", {
    enumerable: true,
    get: ()=>AnnotationEditorType
});
Object.defineProperty(pdf_exports, "AnnotationEditorUIManager", {
    enumerable: true,
    get: ()=>AnnotationEditorUIManager
});
Object.defineProperty(pdf_exports, "AnnotationLayer", {
    enumerable: true,
    get: ()=>AnnotationLayer
});
Object.defineProperty(pdf_exports, "AnnotationMode", {
    enumerable: true,
    get: ()=>AnnotationMode
});
Object.defineProperty(pdf_exports, "AnnotationType", {
    enumerable: true,
    get: ()=>AnnotationType
});
Object.defineProperty(pdf_exports, "CSSConstants", {
    enumerable: true,
    get: ()=>CSSConstants
});
Object.defineProperty(pdf_exports, "ColorPicker", {
    enumerable: true,
    get: ()=>ColorPicker
});
Object.defineProperty(pdf_exports, "DOMSVGFactory", {
    enumerable: true,
    get: ()=>DOMSVGFactory
});
Object.defineProperty(pdf_exports, "DrawLayer", {
    enumerable: true,
    get: ()=>DrawLayer
});
Object.defineProperty(pdf_exports, "FeatureTest", {
    enumerable: true,
    get: ()=>util_FeatureTest
});
Object.defineProperty(pdf_exports, "GlobalWorkerOptions", {
    enumerable: true,
    get: ()=>GlobalWorkerOptions
});
Object.defineProperty(pdf_exports, "ImageKind", {
    enumerable: true,
    get: ()=>util_ImageKind
});
Object.defineProperty(pdf_exports, "InvalidPDFException", {
    enumerable: true,
    get: ()=>InvalidPDFException
});
Object.defineProperty(pdf_exports, "MathClamp", {
    enumerable: true,
    get: ()=>MathClamp
});
Object.defineProperty(pdf_exports, "OPS", {
    enumerable: true,
    get: ()=>OPS
});
Object.defineProperty(pdf_exports, "OutputScale", {
    enumerable: true,
    get: ()=>OutputScale
});
Object.defineProperty(pdf_exports, "PDFDataRangeTransport", {
    enumerable: true,
    get: ()=>PDFDataRangeTransport
});
Object.defineProperty(pdf_exports, "PDFDateString", {
    enumerable: true,
    get: ()=>PDFDateString
});
Object.defineProperty(pdf_exports, "PDFWorker", {
    enumerable: true,
    get: ()=>PDFWorker
});
Object.defineProperty(pdf_exports, "PasswordResponses", {
    enumerable: true,
    get: ()=>PasswordResponses
});
Object.defineProperty(pdf_exports, "PermissionFlag", {
    enumerable: true,
    get: ()=>PermissionFlag
});
Object.defineProperty(pdf_exports, "PixelsPerInch", {
    enumerable: true,
    get: ()=>PixelsPerInch
});
Object.defineProperty(pdf_exports, "RenderingCancelledException", {
    enumerable: true,
    get: ()=>RenderingCancelledException
});
Object.defineProperty(pdf_exports, "ResponseException", {
    enumerable: true,
    get: ()=>ResponseException
});
Object.defineProperty(pdf_exports, "SignatureExtractor", {
    enumerable: true,
    get: ()=>SignatureExtractor
});
Object.defineProperty(pdf_exports, "SupportedImageMimeTypes", {
    enumerable: true,
    get: ()=>SupportedImageMimeTypes
});
Object.defineProperty(pdf_exports, "TextLayer", {
    enumerable: true,
    get: ()=>TextLayer
});
Object.defineProperty(pdf_exports, "TouchManager", {
    enumerable: true,
    get: ()=>TouchManager
});
Object.defineProperty(pdf_exports, "Util", {
    enumerable: true,
    get: ()=>Util
});
Object.defineProperty(pdf_exports, "VerbosityLevel", {
    enumerable: true,
    get: ()=>VerbosityLevel
});
Object.defineProperty(pdf_exports, "XfaLayer", {
    enumerable: true,
    get: ()=>XfaLayer
});
Object.defineProperty(pdf_exports, "applyOpacity", {
    enumerable: true,
    get: ()=>applyOpacity
});
Object.defineProperty(pdf_exports, "build", {
    enumerable: true,
    get: ()=>build
});
Object.defineProperty(pdf_exports, "createValidAbsoluteUrl", {
    enumerable: true,
    get: ()=>createValidAbsoluteUrl
});
Object.defineProperty(pdf_exports, "fetchData", {
    enumerable: true,
    get: ()=>fetchData
});
Object.defineProperty(pdf_exports, "findContrastColor", {
    enumerable: true,
    get: ()=>findContrastColor
});
Object.defineProperty(pdf_exports, "getDocument", {
    enumerable: true,
    get: ()=>getDocument
});
Object.defineProperty(pdf_exports, "getFilenameFromUrl", {
    enumerable: true,
    get: ()=>getFilenameFromUrl
});
Object.defineProperty(pdf_exports, "getPdfFilenameFromUrl", {
    enumerable: true,
    get: ()=>getPdfFilenameFromUrl
});
Object.defineProperty(pdf_exports, "getRGB", {
    enumerable: true,
    get: ()=>getRGB
});
Object.defineProperty(pdf_exports, "getUuid", {
    enumerable: true,
    get: ()=>getUuid
});
Object.defineProperty(pdf_exports, "getXfaPageViewport", {
    enumerable: true,
    get: ()=>getXfaPageViewport
});
Object.defineProperty(pdf_exports, "isDataScheme", {
    enumerable: true,
    get: ()=>isDataScheme
});
Object.defineProperty(pdf_exports, "isPdfFile", {
    enumerable: true,
    get: ()=>isPdfFile
});
Object.defineProperty(pdf_exports, "isValidExplicitDest", {
    enumerable: true,
    get: ()=>isValidExplicitDest
});
Object.defineProperty(pdf_exports, "noContextMenu", {
    enumerable: true,
    get: ()=>noContextMenu
});
Object.defineProperty(pdf_exports, "normalizeUnicode", {
    enumerable: true,
    get: ()=>normalizeUnicode
});
Object.defineProperty(pdf_exports, "renderRichText", {
    enumerable: true,
    get: ()=>renderRichText
});
Object.defineProperty(pdf_exports, "setLayerDimensions", {
    enumerable: true,
    get: ()=>setLayerDimensions
});
Object.defineProperty(pdf_exports, "shadow", {
    enumerable: true,
    get: ()=>shadow
});
Object.defineProperty(pdf_exports, "stopEvent", {
    enumerable: true,
    get: ()=>stopEvent
});
Object.defineProperty(pdf_exports, "updateUrlHash", {
    enumerable: true,
    get: ()=>updateUrlHash
});
Object.defineProperty(pdf_exports, "version", {
    enumerable: true,
    get: ()=>version3
});
var pdf_worker_exports = {};
Object.defineProperty(pdf_worker_exports, "default", {
    enumerable: true,
    get: ()=>extractPdfTextWorker
});
var tree_chunk_napi_exports = {};
var private_inference_loop_exports = {};
Object.defineProperty(private_inference_loop_exports, "createPrivateInferenceLoopClient", {
    enumerable: true,
    get: ()=>createPrivateInferenceLoopClient
});
var daemon_metrics_exports = {};
Object.defineProperty(daemon_metrics_exports, "DAEMON_AGENT_HOST_SURFACE", {
    enumerable: true,
    get: ()=>DAEMON_AGENT_HOST_SURFACE
});
Object.defineProperty(daemon_metrics_exports, "DaemonMetrics", {
    enumerable: true,
    get: ()=>DaemonMetrics
});
var dist_exports4 = {};
Object.defineProperty(dist_exports4, "AGENT_DATA_CLEANUP_INITIAL_DELAY_MS", {
    enumerable: true,
    get: ()=>AGENT_DATA_CLEANUP_INITIAL_DELAY_MS
});
Object.defineProperty(dist_exports4, "ALL_RUNTIME_SETTING_SOURCES", {
    enumerable: true,
    get: ()=>ALL_RUNTIME_SETTING_SOURCES
});
Object.defineProperty(dist_exports4, "AutoApprovePendingDecisionProvider", {
    enumerable: true,
    get: ()=>AutoApprovePendingDecisionProvider
});
Object.defineProperty(dist_exports4, "CachedTeamSettingsService", {
    enumerable: true,
    get: ()=>CachedTeamSettingsService
});
Object.defineProperty(dist_exports4, "DenyPendingDecisionProvider", {
    enumerable: true,
    get: ()=>DenyPendingDecisionProvider
});
Object.defineProperty(dist_exports4, "DenyPermissionsService", {
    enumerable: true,
    get: ()=>DenyPermissionsService
});
Object.defineProperty(dist_exports4, "HostedMcpLeaseFilter", {
    enumerable: true,
    get: ()=>HostedMcpLeaseFilter
});
Object.defineProperty(dist_exports4, "HostedMcpRoutingState", {
    enumerable: true,
    get: ()=>HostedMcpRoutingState
});
Object.defineProperty(dist_exports4, "MCP_TOOL_CLIENT_CALL_DURATION_STAT", {
    enumerable: true,
    get: ()=>MCP_TOOL_CLIENT_CALL_DURATION_STAT
});
Object.defineProperty(dist_exports4, "NoopCodebaseReferenceProvider", {
    enumerable: true,
    get: ()=>NoopCodebaseReferenceProvider
});
Object.defineProperty(dist_exports4, "NoopCursorRulesService", {
    enumerable: true,
    get: ()=>NoopCursorRulesService
});
Object.defineProperty(dist_exports4, "NoopDiagnosticsProvider", {
    enumerable: true,
    get: ()=>NoopDiagnosticsProvider
});
Object.defineProperty(dist_exports4, "createAgentHostExec", {
    enumerable: true,
    get: ()=>createAgentHostExec
});
Object.defineProperty(dist_exports4, "createCredentialBoundTeamSettingsService", {
    enumerable: true,
    get: ()=>createCredentialBoundTeamSettingsService
});
Object.defineProperty(dist_exports4, "createDeferredConnectTransport", {
    enumerable: true,
    get: ()=>createDeferredConnectTransport
});
Object.defineProperty(dist_exports4, "createEmptyTeamSettingsService", {
    enumerable: true,
    get: ()=>createEmptyTeamSettingsService2
});
Object.defineProperty(dist_exports4, "createHeadlessDecisionProvider", {
    enumerable: true,
    get: ()=>createHeadlessDecisionProvider
});
Object.defineProperty(dist_exports4, "createHeadlessDiskHookExecutor", {
    enumerable: true,
    get: ()=>createHeadlessDiskHookExecutor
});
Object.defineProperty(dist_exports4, "createHeadlessHooksOverlay", {
    enumerable: true,
    get: ()=>createHeadlessHooksOverlay
});
Object.defineProperty(dist_exports4, "createHeadlessMcpGrantStore", {
    enumerable: true,
    get: ()=>createHeadlessMcpGrantStore
});
Object.defineProperty(dist_exports4, "createHeadlessMcpLease", {
    enumerable: true,
    get: ()=>createHeadlessMcpLease
});
Object.defineProperty(dist_exports4, "createHeadlessSettingSourcesLoader", {
    enumerable: true,
    get: ()=>createHeadlessSettingSourcesLoader
});
Object.defineProperty(dist_exports4, "createHostedMcpRoutingProvider", {
    enumerable: true,
    get: ()=>createHostedMcpRoutingProvider
});
Object.defineProperty(dist_exports4, "createTurnRuntimeCallerResolver", {
    enumerable: true,
    get: ()=>createTurnRuntimeCallerResolver
});
Object.defineProperty(dist_exports4, "hasSettingSource", {
    enumerable: true,
    get: ()=>hasSettingSource
});
Object.defineProperty(dist_exports4, "headlessMcpDefinitionRef", {
    enumerable: true,
    get: ()=>headlessMcpDefinitionRef
});
Object.defineProperty(dist_exports4, "isHeadlessWorkspaceTrusted", {
    enumerable: true,
    get: ()=>isHeadlessWorkspaceTrusted
});
Object.defineProperty(dist_exports4, "isNoAmbientSettings", {
    enumerable: true,
    get: ()=>isNoAmbientSettings
});
Object.defineProperty(dist_exports4, "listHeadlessMcpDefinitions", {
    enumerable: true,
    get: ()=>listHeadlessMcpDefinitions
});
Object.defineProperty(dist_exports4, "normalizeHeadlessDiskSettingSources", {
    enumerable: true,
    get: ()=>normalizeHeadlessDiskSettingSources
});
Object.defineProperty(dist_exports4, "normalizeSettingSources", {
    enumerable: true,
    get: ()=>normalizeSettingSources
});
Object.defineProperty(dist_exports4, "runAgentDataCleanupIfDue", {
    enumerable: true,
    get: ()=>runAgentDataCleanupIfDue
});
Object.defineProperty(dist_exports4, "scheduleAgentDataCleanup", {
    enumerable: true,
    get: ()=>scheduleAgentDataCleanup
});
var entry_exports = {};
Object.defineProperty(entry_exports, "CAPABILITIES", {
    enumerable: true,
    get: ()=>CAPABILITIES
});
Object.defineProperty(entry_exports, "HARNESS_INTERFACE_REVISION", {
    enumerable: true,
    get: ()=>HARNESS_INTERFACE_REVISION
});
Object.defineProperty(entry_exports, "activate", {
    enumerable: true,
    get: ()=>activate
});
Object.defineProperty(entry_exports, "createManagedToolClient", {
    enumerable: true,
    get: ()=>createManagedToolClient
});
Object.defineProperty(entry_exports, "deactivate", {
    enumerable: true,
    get: ()=>destroyWorkerPools
});
Object.defineProperty(entry_exports, "generationContext", {
    enumerable: true,
    get: ()=>generationContext
});
Object.defineProperty(entry_exports, "hostLoggerBackend", {
    enumerable: true,
    get: ()=>hostLoggerBackend
});
Object.defineProperty(entry_exports, "hostMetricsBackend", {
    enumerable: true,
    get: ()=>hostMetricsBackend
});
var local_loop_exports = {};
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
var stitch_exports = {};
Object.defineProperty(stitch_exports, "createStitchedAgentHost", {
    enumerable: true,
    get: ()=>createStitchedAgentHost
});
Object.defineProperty(stitch_exports, "execWorkspacePathsFromCatalog", {
    enumerable: true,
    get: ()=>execWorkspacePathsFromCatalog
});
Object.defineProperty(stitch_exports, "withForwardedLocalLoopGate", {
    enumerable: true,
    get: ()=>withForwardedLocalLoopGate
});
Object.defineProperty(stitch_exports, "wrapHostWithSessionExecRegistry", {
    enumerable: true,
    get: ()=>wrapHostWithSessionExecRegistry
});
var daemon_exports = {};
Object.defineProperty(daemon_exports, "startAgentHostDaemon", {
    enumerable: true,
    get: ()=>startAgentHostDaemon
});
export { agent_service_connect_exports, agent_websocket_exports, agent_websocket_pb_exports, aiserver_connect_exports, analytics_connect_exports, analytics_pb_exports, background_composer_connect_exports, bidi_connect_exports, bidi_pb_exports, chat_connect_exports, childSpanSuppressionPredicate, cmdk_connect_exports, coerce_exports, dashboard_connect_exports, dist_exports, external_exports, filesyncserver_connect_exports, health_connect_exports, inference_connect_exports, iso_exports, origin_connect_exports, pdf_exports, privacy_mode_pb_exports, private_inference_connect_exports, remote_agent_host_presence_connect_exports, repository_connect_exports, server_config_pb_exports, telemetry_connect_exports, telemetry_pb_exports, uploadserver_connect_exports, util_exports, utils_pb_exports };
const import_meta_url = require("node:url").pathToFileURL(__filename).href;
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to3, from2, except, desc)=>{
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
        for (let key of __getOwnPropNames(from2))if (!__hasOwnProp.call(to3, key) && key !== except) __defProp(to3, key, {
            get: ()=>from2[key],
            enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable
        });
    }
    return to3;
};
var __toESM = (mod2, isNodeMode, target)=>(target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", {
        value: mod2,
        enumerable: true
    }) : target, mod2));
var __toCommonJS = (mod2)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod2);
function stateVscdbUpsert(table) {
    return `INSERT INTO ${table} (key, value) VALUES (?, ?) ON CONFLICT (key) DO UPDATE SET value = excluded.value WHERE value IS NOT excluded.value`;
}
function loadNodeSqlite() {
    return process.getBuiltinModule("node:sqlite");
}
function errorCode(error3) {
    if (!(error3 instanceof Error)) {
        return {};
    }
    const code = "code" in error3 ? error3.code : void 0;
    const errcode = "errcode" in error3 ? error3.errcode : void 0;
    return {
        code: typeof code === "string" ? code : void 0,
        sqliteErrcode: typeof errcode === "number" ? errcode : void 0
    };
}
function isThenable(value) {
    return (typeof value === "object" || typeof value === "function") && value !== null && "then" in value && typeof value.then === "function";
}
function withoutAbsolutePath(error3, relPath) {
    const { code } = errorCode(error3);
    return code === void 0 ? error3 : Object.assign(new Error(`${code} on ${relPath}`), {
        code
    });
}
function readPragma(db, name17) {
    return db.prepare(`PRAGMA ${name17}`).get()?.[name17];
}
function readCount(row) {
    return typeof row === "object" && row !== null && "n" in row && typeof row.n === "number" ? row.n : 0;
}
function prefixUpperBound(prefix) {
    const codePoints = Array.from(prefix, (c)=>c.codePointAt(0) ?? 0);
    while(codePoints.length > 0){
        const last = codePoints[codePoints.length - 1];
        if (last < 1114111) {
            const next = last + 1;
            codePoints[codePoints.length - 1] = next >= 55296 && next <= 57343 ? 57344 : next;
            return String.fromCodePoint(...codePoints);
        }
        codePoints.pop();
    }
    return new Uint8Array(0);
}
function assertKey(key) {
    if (key.includes("\0") || !key.isWellFormed()) {
        throw new TypeError(`Key must be well-formed text without NUL: ${JSON.stringify(key)}`);
    }
}
function upsertBindingNullAsEmpty(table) {
    return stateVscdbUpsert(table).replace("VALUES (?, ?)", "VALUES (?, COALESCE(?, X''))");
}
function getAbortReasonInfo(reason) {
    if (reason instanceof Error) {
        return {
            abortReasonType: "error",
            abortReasonName: reason.name,
            abortReasonMessage: reason.message
        };
    }
    if (typeof reason === "string") {
        return {
            abortReasonType: "string",
            abortReasonMessage: reason
        };
    }
    if (reason === void 0) {
        return {
            abortReasonType: "undefined"
        };
    }
    return {
        abortReasonType: typeof reason
    };
}
function createContextKey(description3) {
    return Symbol.for(description3);
}
function isSpanContext(spanContext) {
    return typeof spanContext === "object" && typeof spanContext["spanId"] === "string" && typeof spanContext["traceId"] === "string" && typeof spanContext["traceFlags"] === "number";
}
function createChildController(parentSignal) {
    const controller = new AbortController();
    if (parentSignal.aborted) {
        controller.abort(parentSignal.reason);
        return controller;
    }
    const propagate = ()=>controller.abort(parentSignal.reason);
    parentSignal.addEventListener("abort", propagate, {
        once: true
    });
    return {
        signal: controller.signal,
        abort (reason) {
            parentSignal.removeEventListener("abort", propagate);
            controller.abort(reason);
        }
    };
}
function wait(ctx) {
    return new Promise((resolve36)=>{
        if (ctx.canceled) {
            resolve36();
            return;
        }
        ctx.signal.addEventListener("abort", ()=>resolve36(), {
            once: true
        });
    });
}
function createLoggerMiddleware(backend, attributes) {
    return {
        log: (ctx, entry)=>{
            backend.log(ctx, {
                ...entry,
                metadata: {
                    ...attributes,
                    ...entry.metadata
                }
            });
        }
    };
}
function describeThrownValue(error3) {
    if (error3 instanceof Error) {
        return error3.message;
    }
    if (typeof error3 === "string") {
        return error3;
    }
    if (error3 === null || error3 === void 0) {
        return String(error3);
    }
    if (typeof error3 === "object") {
        const maybeMessage = error3.message;
        if (typeof maybeMessage === "string" && maybeMessage.length > 0) {
            return maybeMessage;
        }
        try {
            const json2 = JSON.stringify(error3);
            if (json2 !== void 0 && json2 !== "{}") {
                return json2;
            }
        } catch  {}
    }
    return String(error3);
}
var childSpanSuppressionPredicate;
function processCreateParams(params) {
    if (!params) return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description: description3 } = params;
    if (errorMap2 && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap2) return {
        errorMap: errorMap2,
        description: description3
    };
    const customMap = (iss, ctx)=>{
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
            return {
                message: message ?? ctx.defaultError
            };
        }
        if (typeof ctx.data === "undefined") {
            return {
                message: message ?? required_error ?? ctx.defaultError
            };
        }
        if (iss.code !== "invalid_type") return {
            message: ctx.defaultError
        };
        return {
            message: message ?? invalid_type_error ?? ctx.defaultError
        };
    };
    return {
        errorMap: customMap,
        description: description3
    };
}
function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    }
    const secondsQuantifier = args.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
}
function cleanParams(params, data) {
    const p2 = typeof params === "function" ? params(data) : typeof params === "string" ? {
        message: params
    } : params;
    const p22 = typeof p2 === "string" ? {
        message: p2
    } : p2;
    return p22;
}
var import_node_fs48 = require("node:fs");
var import_node_path109 = require("node:path");
var import_node_sqlite = require("node:sqlite");
init_storage();
init_credential_manager();
init_listen();
var import_node_fs10 = require("node:fs");
init_private_inference_config();
var import_node_fs9 = require("node:fs");
var import_node_path9 = __toESM(require("node:path"), 1);
init_private_inference_config();
var PRIVATE_INFERENCE_CONFIG_FILE_NAME = "private-inference.toml";
function enterpriseCursorDirectory(platform) {
    switch(platform){
        case "darwin":
            return import_node_path9.default.join("/Library", "Application Support", "Cursor");
        case "win32":
            return import_node_path9.default.join("C:\\", "ProgramData", "Cursor");
        default:
            return import_node_path9.default.join("/etc", "cursor");
    }
}
function getWellKnownPrivateInferenceConfigPath(platform) {
    return import_node_path9.default.join(enterpriseCursorDirectory(platform), PRIVATE_INFERENCE_CONFIG_FILE_NAME);
}
function fileExistsFailClosed(configPath) {
    try {
        (0, import_node_fs9.lstatSync)(configPath);
        return true;
    } catch (error3) {
        return !(error3 instanceof Error && "code" in error3 && error3.code === "ENOENT");
    }
}
function isFullyAbsolute(candidate, platform) {
    if (platform === "win32") {
        return /^(?:[a-zA-Z]:[\\/]|\\\\)/.test(candidate);
    }
    return import_node_path9.default.posix.isAbsolute(candidate);
}
function locatePrivateInferenceConfigFile(input) {
    const policyPath = nonEmpty(input.policyPath);
    if (policyPath !== void 0) {
        if (!isFullyAbsolute(policyPath, input.platform)) {
            fail(`the managed policy path must be absolute (got ${JSON.stringify(policyPath)})`);
        }
        return {
            path: policyPath,
            source: "policy"
        };
    }
    const wellKnownPath = getWellKnownPrivateInferenceConfigPath(input.platform);
    if ((input.fileExists ?? fileExistsFailClosed)(wellKnownPath)) {
        return {
            path: wellKnownPath,
            source: "well-known"
        };
    }
    const envPath = nonEmpty(input.env.CURSOR_PRIVATE_INFERENCE_CONFIG);
    if (envPath !== void 0) {
        return {
            path: import_node_path9.default.resolve(envPath),
            source: "env"
        };
    }
    return void 0;
}
function describeConfigSource(configFile) {
    if (configFile === void 0) {
        return "the CURSOR_PRIVATE_INFERENCE_* shorthand";
    }
    switch(configFile.source){
        case "policy":
            return `the managed policy config file ${configFile.path}`;
        case "well-known":
            return `the enterprise config file ${configFile.path}`;
        case "env":
            return `CURSOR_PRIVATE_INFERENCE_CONFIG=${configFile.path}`;
    }
}
function noConfigDetail(platform) {
    return `Private inference config: private inference is enabled for your team but no configuration is present \u2014 put ${PRIVATE_INFERENCE_CONFIG_FILE_NAME} at ${getWellKnownPrivateInferenceConfigPath(platform)} (or set CURSOR_PRIVATE_INFERENCE_CONFIG for development), then restart`;
}
function decidePrivateInferenceActivation(input) {
    const configured = input.configFile !== void 0 || isPrivateInferenceShorthandRequested(input.env);
    if (!configured) {
        switch(input.team){
            case "disabled":
            case "unavailable":
                return {
                    kind: "not-configured"
                };
            case "enabled":
                return {
                    kind: "fail-closed",
                    configErrorDetail: noConfigDetail(input.platform)
                };
            case "pending":
                return {
                    kind: "enrollment-pending",
                    configErrorDetail: noConfigDetail(input.platform)
                };
        }
    }
    switch(input.team){
        case "enabled":
        case "unavailable":
        case "pending":
            return {
                kind: "hydrate",
                configFile: input.configFile
            };
        case "disabled":
            return {
                kind: "backend-loop",
                warning: `Private inference is configured (${describeConfigSource(input.configFile)}) but is not enabled for your team; ignoring it and running turns on the backend loop (Cursor-managed models)`
            };
    }
}
init_private_inference_config();
init_private_inference_enablement();
async function resolveDaemonPrivateInferenceActivation(env, deps = {}) {
    let configFile;
    try {
        const locate = deps.locateConfigFile ?? locatePrivateInferenceConfigFile;
        const log5 = deps.log ?? writeStderr;
        const readMembership = deps.readMembership ?? (()=>readDaemonTeamMembership({
                getAccessToken: deps.getAccessToken,
                dashboardEndpoint: deps.dashboardEndpoint,
                env
            }));
        configFile = locate({
            env,
            platform: process.platform
        });
        const team = teamEnablementAtActivation(await readMembership(), configFile !== void 0);
        const decision = decidePrivateInferenceActivation({
            configFile,
            env: configFile === void 0 ? {} : env,
            platform: process.platform,
            team
        });
        if (decision.kind === "not-configured") {
            return void 0;
        }
        if (decision.kind === "backend-loop") {
            log5(decision.warning);
            return void 0;
        }
        if (decision.kind === "hydrate" && configFile !== void 0) {
            log5(`Private inference config: ${configFile.path} (${configFile.source})`);
        }
        const routing = {
            readTeamEnablement: async ()=>teamEnablementForTurn(await readMembership()),
            enrollmentUndecided: decision.kind === "enrollment-pending"
        };
        return {
            decision,
            env: {
                ...env
            },
            routing
        };
    } finally{
        if (configFile !== void 0) {
            scrubPrivateInferenceSecrets(env, configFile);
        }
    }
}
function scrubPrivateInferenceSecrets(env, configFile) {
    const content = readTomlOrUndefined(configFile.path);
    const names3 = secretEnvNames(content);
    const secrets = new Set();
    for (const name17 of names3){
        addSecret(secrets, env[name17]);
    }
    const catalog = tryParseCatalog(env, configFile, content);
    for (const model of catalog?.models ?? []){
        addSecret(secrets, model.endpoint.apiKey);
        addSecret(secrets, model.endpoint.apiKeyHelper?.command);
    }
    for (const name17 of names3){
        delete env[name17];
    }
    for (const [name17, value] of Object.entries(env)){
        if (value !== void 0 && secrets.has(value)) {
            delete env[name17];
        }
    }
}
function secretEnvNames(content) {
    const names3 = new Set(PRIVATE_INFERENCE_CREDENTIAL_ENV_NAMES);
    for (const name17 of collectPrivateInferenceEnvKeyNames(content)){
        names3.add(name17);
    }
    return names3;
}
function addSecret(secrets, value) {
    if (value !== void 0 && value.length > 0) {
        secrets.add(value);
    }
}
function tryParseCatalog(env, configFile, content) {
    try {
        return parsePrivateInferenceCatalog({
            configFileContent: content,
            configFilePath: configFile.path,
            env
        });
    } catch (error3) {
        if (error3 instanceof Error) {
            return void 0;
        }
        throw error3;
    }
}
function readTomlOrUndefined(path64) {
    try {
        return (0, import_node_fs10.readFileSync)(path64, "utf8");
    } catch (error3) {
        if (error3 instanceof Error && "code" in error3 && typeof error3.code === "string") {
            return void 0;
        }
        throw error3;
    }
}
function writeStderr(message) {
    process.stderr.write(`${message}
`);
}
var import_node_path97 = require("node:path");
init_listen();
init_session_storage();
var AGENT_HOST_DAEMON_HOSTED_MCP_ROUTING_ENV = "AGENT_HOST_DAEMON_HOSTED_MCP_ROUTING";
function parseDaemonProcessArgs(argv, env = process.env) {
    const flags = collectFlags(argv);
    if (flags.has("help") || flags.has("h")) {
        return placeholderHelpArgs();
    }
    const dev = flags.has("dev");
    const localLoop = flags.has("local-loop");
    const updaterEnabled = flags.has("updater");
    const enableSurfaceTestHooks = flags.has("surface-test-hooks");
    const homeDir = homeDirFromEnv(env);
    const listen = parseListenFromFlags(flags, env, dev, homeDir);
    const agentsDir = cursorAgentsDir({
        dev,
        homeDir
    });
    const projectDirFlag = firstFlag(flags, "project-dir");
    const projectDirOverride = projectDirFlag === void 0 ? void 0 : (0, import_node_path97.resolve)(projectDirFlag);
    const blobsDir = resolveDaemonStorageDir({
        storageDir: firstFlag(flags, "blobs-dir"),
        env,
        agentsDir
    });
    const surfaceOwnsBackgroundWakeups = resolveSurfaceOwnsBackgroundWakeups(flags, localLoop);
    const bindSpawnDemoShell = flags.has("bind-spawn-demo-shell");
    const nativeCloudSubagents = flags.has("native-cloud-subagents");
    const hostedMcpRouting = flags.has("hosted-mcp-routing") || env[AGENT_HOST_DAEMON_HOSTED_MCP_ROUTING_ENV] === "1";
    return {
        listen,
        help: false,
        enableSurfaceTestHooks: enableSurfaceTestHooks ? true : void 0,
        bindSpawnDemoShell,
        metrics: flags.has("metrics"),
        stitch: {
            agentsDir,
            dev,
            localLoop: localLoop ? true : void 0,
            updaterEnabled: updaterEnabled ? true : void 0,
            projectDirOverride,
            modelId: firstFlag(flags, "model-id"),
            blobsDir,
            ...surfaceOwnsBackgroundWakeups === true ? {
                surfaceOwnsBackgroundWakeups: true
            } : {},
            ...nativeCloudSubagents ? {
                nativeCloudSubagents: true
            } : {},
            ...hostedMcpRouting ? {
                hostedMcpRouting: true
            } : {}
        }
    };
}
function daemonUsage() {
    return [
        "Usage: agent-host-daemon [options]",
        "",
        "Options:",
        "  --listen <unix:///path>                   Listen address (default ~/.cursor-agents/daemon.sock)",
        "  --socket <path>                           Unix socket path shorthand",
        "  --dev                                     Use ~/.cursor-agents-dev for the socket, storage, and project scratch",
        "  --local-loop                              Route agent turns through @anysphere/agent-host/local-loop",
        "  --updater                                 Enable Agent Host updater apply (client gate agent_host_updater)",
        "  --project-dir <abs-path>                  Scratch dir override for every session (default per session under ~/.cursor-agents/projects/<slug>)",
        "  --blobs-dir <abs-path>                    Storage dir for data.sqlite and sessions/ (default ~/.cursor-agents)",
        "  --model-id <id>                           Optional default model id",
        "  --surface-owns-background-wakeups         Packaged listen default: host does not own background wakeups",
        "  --no-surface-owns-background-wakeups      Leave surfaceOwnsBackgroundWakeups unset (local-loop / scripted)",
        "  --bind-spawn-demo-shell                   Debug-only: bind SpawnDemoShell on the unix socket",
        "  --native-cloud-subagents                   Use the host native cloud engine instead of hopping cloud_subagent",
        "  --hosted-mcp-routing                      Dogfood: route server-placed MCP through McpToolService for every session (or AGENT_HOST_DAEMON_HOSTED_MCP_ROUTING=1)",
        "  --metrics                                 Send Agent Host client metrics to Cursor's MetricsService (off by default)",
        "  --help                                    Show this help"
    ].join("\n");
}
function resolveSurfaceOwnsBackgroundWakeups(flags, localLoop) {
    if (flags.has("surface-owns-background-wakeups")) {
        return true;
    }
    if (localLoop || flags.has("no-surface-owns-background-wakeups")) {
        return void 0;
    }
    return true;
}
function parseListenFromFlags(flags, env, dev, homeDir) {
    const listen = firstFlag(flags, "listen") ?? env.AGENT_HOST_DAEMON_LISTEN;
    if (listen !== void 0) {
        return parseListenAddress(listen);
    }
    const socket = firstFlag(flags, "socket");
    if (socket !== void 0) {
        return parseListenAddress((0, import_node_path97.isAbsolute)(socket) ? socket : `unix://${socket}`);
    }
    return defaultUnixListenAddress({
        dev,
        homeDir
    });
}
function collectFlags(argv) {
    const flags = new Map();
    for(let i = 0; i < argv.length; i += 1){
        const arg = argv[i] ?? "";
        if (arg === "--") {
            continue;
        }
        if (arg === "--help" || arg === "-h") {
            flags.set("help", [
                ""
            ]);
            continue;
        }
        if (arg === "--dev") {
            flags.set("dev", [
                ""
            ]);
            continue;
        }
        if (arg === "--local-loop") {
            flags.set("local-loop", [
                ""
            ]);
            continue;
        }
        if (arg === "--updater") {
            flags.set("updater", [
                ""
            ]);
            continue;
        }
        if (arg === "--surface-test-hooks") {
            flags.set("surface-test-hooks", [
                ""
            ]);
            continue;
        }
        if (arg === "--surface-owns-background-wakeups") {
            flags.set("surface-owns-background-wakeups", [
                ""
            ]);
            continue;
        }
        if (arg === "--no-surface-owns-background-wakeups") {
            flags.set("no-surface-owns-background-wakeups", [
                ""
            ]);
            continue;
        }
        if (arg === "--bind-spawn-demo-shell") {
            flags.set("bind-spawn-demo-shell", [
                ""
            ]);
            continue;
        }
        if (arg === "--native-cloud-subagents") {
            flags.set("native-cloud-subagents", [
                ""
            ]);
            continue;
        }
        if (arg === "--hosted-mcp-routing") {
            flags.set("hosted-mcp-routing", [
                ""
            ]);
            continue;
        }
        if (arg === "--metrics") {
            flags.set("metrics", [
                ""
            ]);
            continue;
        }
        if (!arg.startsWith("--")) {
            throw new Error(`unexpected argument: ${arg}`);
        }
        const key = arg.slice(2);
        rejectRemovedDaemonFlag(key);
        const value = argv[i + 1];
        if (value === void 0 || value.startsWith("--")) {
            throw new Error(`missing value for --${key}`);
        }
        i += 1;
        const existing = flags.get(key) ?? [];
        existing.push(value);
        flags.set(key, existing);
    }
    return flags;
}
function rejectRemovedDaemonFlag(key) {
    if (key === "test-named-policy") {
        throw new Error('daemon no longer accepts --test-named-policy; integration tests use startStitchedHost({ permissions: "interactive" })');
    }
    if (key === "workspace") {
        throw new Error("daemon no longer accepts --workspace; pass session_options.workspace_paths on CreateSession");
    }
    if (key === "tcp" || key === "insecure-bind") {
        throw new Error("tcp listen is not supported; use a unix socket so only this user can connect");
    }
    if (key === "token" || key === "token-file") {
        throw new Error("daemon RPC no longer uses a bearer token; the unix socket is restricted to this user");
    }
}
function firstFlag(flags, key) {
    return flags.get(key)?.[0];
}
function placeholderHelpArgs() {
    return {
        listen: {
            kind: "unix",
            path: "/tmp/agent-host-daemon-help.sock"
        },
        help: true,
        bindSpawnDemoShell: false,
        metrics: false,
        stitch: {
            agentsDir: cursorAgentsDir(),
            blobsDir: cursorAgentsDir(),
            dev: false
        }
    };
}
init_unix_socket();
var STORAGE_ROOT_LOCK_FILENAME = ".agent-host-daemon-lock.sqlite";
var SQLITE_BUSY2 = 5;
var SQLITE_LOCKED2 = 6;
async function runDaemonProcess(argv, env = process.env, io2 = process, deps = {}) {
    let args;
    try {
        args = parseDaemonProcessArgs(argv, env);
    } catch (error3) {
        io2.stderr.write(`${error3 instanceof Error ? error3.message : String(error3)}
`);
        io2.stderr.write(`${daemonUsage()}
`);
        return 2;
    }
    if (args.help) {
        io2.stdout.write(`${daemonUsage()}
`);
        return 0;
    }
    let storageRootLock;
    let metrics;
    try {
        const rootLock = await acquireStorageRootLock(args.stitch.blobsDir);
        storageRootLock = rootLock;
        metrics = new (await Promise.resolve().then(()=>(init_daemon_metrics(), daemon_metrics_exports))).DaemonMetrics(args.metrics);
        const releaseStorageRootAndExit = ()=>{
            void rootLock.release().finally(()=>metrics?.dispose()).finally(()=>{
                process.exit(0);
            });
        };
        const startAgentHostDaemon2 = deps.startAgentHostDaemon ?? (await Promise.resolve().then(()=>(init_daemon(), daemon_exports))).startAgentHostDaemon;
        const resolvePrivateInference = deps.resolvePrivateInference ?? resolveDaemonPrivateInferenceActivation;
        const stitch = await stitchWithPrivateInference({
            ...args.stitch,
            metrics
        }, env, resolvePrivateInference);
        const daemon = await startAgentHostDaemon2({
            listen: args.listen,
            stitch,
            enableSurfaceTestHooks: args.enableSurfaceTestHooks === true,
            ...args.bindSpawnDemoShell === true ? {
                bindSpawnDemoShell: args.bindSpawnDemoShell
            } : {},
            onRpcShutdownComplete: releaseStorageRootAndExit
        });
        io2.stdout.write(`listening ${formatListenAddress(daemon.listen)}
`);
        io2.stderr.write(`agent-host-daemon ready at ${performance.now().toFixed(1)}ms
`);
        process.on("unhandledRejection", (reason)=>{
            reportUnhandledRejection(reason, io2.stderr, metrics);
        });
        const stop = ()=>{
            void daemon.stop().finally(releaseStorageRootAndExit);
        };
        process.once("SIGINT", stop);
        process.once("SIGTERM", stop);
        await new Promise(()=>{});
        return 0;
    } catch (error3) {
        await storageRootLock?.release();
        io2.stderr.write(`${error3 instanceof Error ? error3.message : String(error3)}
`);
        void metrics?.dispose();
        return 1;
    }
}
function reportUnhandledRejection(reason, stderr, metrics) {
    const detail = reason instanceof Error ? reason.stack ?? `${reason.name}: ${reason.message}` : String(reason);
    stderr.write(`agent-host-daemon: unhandled rejection: ${detail}
`);
    metrics?.increment({
        stat: "agent_host.daemon.unhandled_rejection",
        tags: {
            error: reason instanceof Error ? reason.name : typeof reason
        }
    });
}
async function stitchWithPrivateInference(stitch, env, resolvePrivateInference) {
    const usingDefaultResolver = resolvePrivateInference === resolveDaemonPrivateInferenceActivation;
    const credentialManager = usingDefaultResolver ? credentialManagerForEnablement(stitch) : void 0;
    const privateInference = credentialManager !== void 0 ? await resolveDaemonPrivateInferenceActivation(env, {
        getAccessToken: ()=>credentialManager.getAccessToken(),
        dashboardEndpoint: stitch.network?.kind === "builtin" ? stitch.network.backendUrl : void 0
    }) : await resolvePrivateInference(env);
    if (privateInference === void 0) {
        return stitch;
    }
    if (stitch.localLoop !== true) {
        throw new Error("private inference requires --local-loop (or stitch.localLoop: true); refusing to start without it");
    }
    return {
        ...stitch,
        ...credentialManager !== void 0 && stitch.network === void 0 ? {
            network: {
                kind: "builtin",
                credentialManager
            }
        } : {},
        piOptions: privateInference
    };
}
function credentialManagerForEnablement(stitch) {
    if (stitch.network?.kind === "builtin") {
        return stitch.network.credentialManager;
    }
    return createMemoryCredentialManager();
}
async function acquireStorageRootLock(storageDir) {
    const storageRoot = (0, import_node_path109.resolve)(storageDir);
    (0, import_node_fs48.mkdirSync)(storageRoot, {
        recursive: true,
        mode: UNIX_SOCKET_PARENT_MODE
    });
    const path64 = (0, import_node_path109.join)(storageRoot, STORAGE_ROOT_LOCK_FILENAME);
    const fd = (0, import_node_fs48.openSync)(path64, import_node_fs48.constants.O_CREAT | import_node_fs48.constants.O_RDWR | import_node_fs48.constants.O_NOFOLLOW, 384);
    (0, import_node_fs48.closeSync)(fd);
    const database = new import_node_sqlite.DatabaseSync(path64);
    try {
        database.exec("PRAGMA busy_timeout=0; BEGIN EXCLUSIVE");
    } catch (error3) {
        database.close();
        const { sqliteErrcode } = errorCode(error3);
        if (sqliteErrcode === SQLITE_BUSY2 || sqliteErrcode === SQLITE_LOCKED2) {
            throw new Error(`agent-host-daemon storage root is already owned by another daemon: ${storageRoot}`, {
                cause: error3
            });
        }
        throw error3;
    }
    let released = false;
    return {
        release: async ()=>{
            if (released) {
                return;
            }
            released = true;
            try {
                database.exec("ROLLBACK");
            } finally{
                database.close();
            }
        }
    };
}
var enteredAtMs = performance.now();
process.stderr.write(`agent-host-daemon entered at ${enteredAtMs.toFixed(1)}ms
`);
void runDaemonProcess(process.argv.slice(2)).then((exitCode)=>{
    if (exitCode !== 0) {
        process.exit(exitCode);
    }
});
