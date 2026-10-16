import { agentHostModuleChannel, agentHostModuleIdentity, agentHostModuleMetricTags, agentHostModuleServing, agentHostModuleTags, allocateUniqueSideChatName, appendCodeTourStorageKeyFragments, appendTourMarkdownBlock, applyMcpOAuthProviderAuthorizationParams, applySideChatSeedWorkingStateResets, attachTourArtifact, breakDownPrCodeTourSections, buildAutomationScope, buildChatNamePrompt, buildChildTurnRouteId, buildCloudAgentStartPayloadTooLargeUserFacingMessage, buildGithubAppInstallUrl, buildGithubAppManageUrl, buildGithubPullRequestReviewPath, buildGrokBotAgentStoreSourceId, buildGrokBotDesktopDownloadUrl, buildInteractiveChildRouteId, buildMcpOAuthClientMetadataDocument, buildMcpOAuthDesktopCallbackUrl, buildOfferCreditGrantPlan, buildOriginPrIdentityKey, buildPeriodicCreditGrantSchedule, buildResourceChildInboxReminder, buildSandBoxNoVncUrl, buildSandSupervisorCommand, buildScmAuthFailedUserFacingMessage, buildScmRefNotFoundUserFacingMessage, buildSideChatNameFromPrompt, buildStartupCreditGrantPlan, buildStartupPoolGrantPlan, buildTeamAgentStoreSourceId, buildUniqueSideChatNameFromPrompt, buildUserAgentStoreSourceId, buildYcStartupMonthlyCreditGrantSchedule, calculateBackoffDelay, chatNameReminder, chatNameSystemPrompt, clampCodeTourFileDiffsToHunks, cloudAgentWorkspaceRootUriPath, cloudServerHasPluginId, cloudServerIsTeamScoped, cloudServerMatchesRuntimeSourceHint, codeTourDiffHunksFromGitFiles, codeTourGenerationIdentityFeatureConfiguration, codeTourStorageKeyVariantFragments, codeTourTermDefinitionHref, codeTourTermDefinitionLinesFromGitFiles, codeTourTermNameKey, coerceSandHostBundleChannel, collapseOriginRepoLabelValue, countGrantDaysFromDateRange, countGrantMonthsFromDateRange, countGrantPeriodsFromDateRange, countGrantWeeksFromDateRange, cursorScmMcpServerIdentifier, cursorScmProviderForMcpServerIdentifier, deriveRepoLabelValueFromUrl, deriveSideChatComposerBcId, desktopBridgeDiscoveryDir, detectEnvironmentSetupTaskFromPrompt, dropRestartedCodeTourDraft, eligibleMcpOAuthAppTarget, environmentBuildFailureCategoryForCode, expandPinprickCodeTourFileDiffs, extractAgentStoreMountIdsFromPromptText, extractTypedTextFromTipTapRichText, filterByEnvironment, findCloudMcpServerByRuntimeName, findCloudMcpServersByNormalizedName, foldOriginRepoLabelValue, foldUnanchoredCodeTourSections, formatAgentStorePathForDisplay, formatCloudMcpAuthServerLabel, formatCloudMcpRuntimeIdentity, formatCodeTourTermOpenTag, formatMcpAuthPromptedReason, formatPlacementConsentTitle, formatPrCodeTourSectionSummary, formatSideChatBoundaryUserMessageText, getAgentStorePathDisplayParts, getCanonicalMcpOAuthDesktopRedirectUris, getCanonicalMcpOAuthRedirectUris, getCloudAgentStreamErrorPresentation, getCloudAgentTerminalErrorRecovery, getCodeTourRecordingSource, getCompetingStartupOfferProductIdPrefixes, getEnvSetupComposerName, getEnvironmentSetupTaskPrompt, getGithubOAuthClientIdForEnvironment, getJobRoleSlug, getMcpOAuthProviderPolicy, getMcpOAuthProviderPolicyForUrl, getOfferGrantProductIdPrefix, getOfferTemplate, getOfferTemplateCoupons, getOfferTemplateStartupOfferType, getPinnedWorkerOfflineTitle, getPrivateWorkerRepositoryUrl, getPublicArtifactContentDisposition, getRepoNameFromUrl, getRestMcpProviderIdForUrl, getRestMcpProviderIdForUrlPath, getScmProviderDisplayName, getSideChatSkipLeadingTurns, getStartupCreditGrantProductIdPrefix, getStartupOfferConfig, getStartupOfferCoupons, getStartupOfferTypeFromReferralDiscountId, getStartupOfferV2TemplateKeyFromReferralDiscountId, getTeamPromoSourceFromDiscountId, getUnsupportedConversationTurnFallbackText, gitShaFromSandBoxImageTag, gitSupportsNoWriteFetchHead, grokBotDesktopPlatformFromProcess, grokBotGithubConnectCallbackUrlForState, gtmMcpOmitsResourceIndicator, hasAutomationScope, hasCursorCommitAttribution, hasNonEmptyToolAllowlist, hasParseableCodeTourFileAnchor, hasPublicArtifactOrigin, hasRequiredTeamApiKeyScope, hasRootProjectIdentity, imageTagFromRegistryReference, inboxLeafTimestamp, inferToolAllowlistMode, inferTourArtifactKind, insertPrCodeTourSectionMedia, isAccountOlderThan, isAgentHostModuleMetricTag, isAgentStoreDashboardMountUrl, isAgentStoreId, isAgentStorePrincipalMountName, isAgentStoreShareMountKey, isAgentStoreSourceId, isAskQuestionAutoAnswerReason, isAutomationScope, isChildTurnInboxRelPath, isCloudAgentStartPayloadTooLargeUserFacingMessage, isCloudAgentStoreId, isCloudAgentStreamErrorDisplayable, isCloudAgentWorkspaceRootUriPath, isCodeTourArtifactUrl, isCodeTourSelfAuditNote, isCodeTourStorageKeyVariantFragment, isCodeTourTermCloseTag, isCodeTourVariantName, isComputerUseGuidedSkill, isCursorCoAuthor, isCustomCodeTourStorageKey, isDesktopThreadId, isDirectDesktopThreadRef, isDurablePoolRepoLess, isEmptyRepositoryErrorMessage, isEmptyRepositoryUserFacingMessage, isEntraAuthorizationUrl, isEnvironmentBuildFailedUserFacingMessage, isEnvironmentEligible, isErrorWithUserFacingErrorMessage, isFeatureOffUnderPrivateInference, isGitHubIpAllowlistUserFacingMessage, isHeadlessCodeTourMarkdown, isInAudience, isInteractiveChildInboxLeaf, isInteractiveChildRouteId, isKnownGitHostingDomain, isLegacyReviewCursorHost, isLoopbackHttpUri, isMcpAuthPromptedReason, isMcpOAuthPortalReturnPath, isMcpOAuthPostAuthReturnUrl, isNonRetryableProviderErrorCode, isOfferTemplateKey, isOrgApiKeyScope, isOriginMcpBuiltinTarget, isOriginMcpServerUrl, isPlayableCodeTourRecordingPath, isPrimaryIntroFireType, isPrincipalAgentStoreSourceId, isPrivateWorkerCapacityUserFacingMessage, isPrivateWorkerDisconnectedUserFacingMessage, isProactiveType, isProjectSendMessageEnabled, isRecentlyCreatedUser, isRecordedProactivityFireType, isRepoLessPoolFormSelection, isReservedAgentStorePathSegment, isRootProjectDetails, isSafeCodeTourTermPath, isSafeStagedBundlePath, isSandDesktopSupervisionEnabled, isSandHostBundleChannel, isSandHostBundlePromotableChannel, isSandHostUpgradeAvailable, isScmAuthFailedUserFacingMessage, isScmCheckoutFailedUserFacingMessage, isScmRefNotFoundUserFacingMessage, isScpStyleGitUrl, isServiceTokenCatalogScopeForOwner, isServiceTokenOrganizationScope, isServiceTokenTeamScope, isSideChatBoundaryMessageId, isSideChatPlaceholderName, isSlackChannelPostId, isStaleCodeTourPromptRevision, isStaticTeamApiKeyScope, isSubscriptionResourceChildInboxRelPath, isSubscriptionResourceChildRouteId, isTeamApiKeyScope, isToolAllowlistMode, isUnusableCodeTourMarkdown, isValidBareUuid, isValidManagedEnvVarName, isWithinInAppAdNewUserBlackout, listOfferTemplates, listPrivateInferenceOffFeatureRpcs, looksLikeAgentStoreDisplayPath, matchAgentStorePathForDisplay, mcpOAuthLoopbackCallbackUrlForPort, mcpOAuthLoopbackRedirectUrl, mcpOAuthServerRequiresIpv4Loopback, mcpOAuthStateTargetUrl, mcpOAuthStateWithoutLoopbackPort, mcpResourceUrlValidatorForUrl, normalizeAutoSpilloverApiTitle, normalizeAutoSpilloverAutoBeyondLimitDescription, normalizeAutoSpilloverAutoDescription, normalizeAutoSpilloverAutoTitle, normalizeCodeTourTermGloss, normalizeEnvironmentSetupMaxResumeAgeMs, normalizeGitCommitSha, orgApiKeyHasScope, orgApiKeyScopeImplies, originPrIdentityHostForLegacyReviewHost, parseAgentHostLoop, parseAgentHostServingModule, parseAgentHostTurnRuntime, parseAgentStoreMountInput, parseAskQuestionAutoAnswerIdentity, parseBridgeRequest, parseCloudMcpRuntimeIdentity, parseCodeTourTermOpenTag, parseDiscoveryFile, parseGeneratedChatName, parseGrokBotAgentStoreSourceId, parseMcpAuthPromptedInteractionId, parseOriginCodeTourArtifactContentUrl, parsePlacementConsentMachineLabel, parsePrivateWorkerRepoScopeFromUrl, parseRepoNameFromUrl, parseRestMcpProviderMetadataFromPrm, parseRestMcpScmToolError, parseSandBoxParkMode, parseSandHostBundleDigest, parseSandSupervisorStatus, parseTeamAgentStoreSourceId, parseThreadSummary, parseUserAgentStoreSourceId, patchTourSection, pickUniqueCloudMcpMatch, portalMcpOAuthCallbackUrlForWebsite, proactivityWakeAllowsSilence, providerFacingMcpOAuthRedirectUri, pruneUnanchoredCodeTourSteps, repairCodeTourOverviewOpener, resolveAgentStoreMountTarget, resolveCloudOnboardingAudience, resolveCodeTourArtifactSrc, resolveCodeTourTermDefinitionLine, resolveCurrentPrCodeTour, resolveEnvSetupComposerName, resolveLocalAgentHeaders, resolveMcpOAuthScopeOverride, resolvePluginBrandIconSource, resolvePluginBrandIconSources, resourceChildInboxRelPath, retargetMcpOAuthStateToLoopbackPort, rewriteScpGitUrl, sandBoxFlavorFromNamespace, sandBoxNoVncHibernationBounds, sandHostBundleDigestKey, sandHostBundleTarballKey, sandHostBundleVersionFileName, sandHostBundleVersionKey, selectRegisteredMcpOAuthRedirectUris, serializeSandSupervisorCommand, serviceTokenCatalogScopeGroups, serviceTokenCatalogScopes, shouldForceHostUpgrade, shouldInjectSideChatBoundary, shouldRegenerateStaleCodeTour, shouldShowBackgroundComposerFollowupRetryHint, shouldShowEnvironmentSetupCta, sideChatBoundaryMessageId, sideChatNameSystemPrompt, splitRepoLabelValue, stripAgentStorePathLineSuffix, stripCodeTourSelfAuditNotes, stripCodeTourTerms, stripConsentPrompt, stripMcpOAuthStateTarget, truncateUserRequestForChatName, validateBoxSecretKey, validateCloudMcpAuthorizationUrl, validateMcpProtectedResourceUrl, withMcpOAuthStateTarget } from "./utils_pb_exports.js";
import { INFERENCE_AUTHENTICATION_JWT_HEADER_NAME, sanitizeHeaderValue } from "./agent-client/dist/common.js";
import { getMessageTypeLabelForStallDetector, requestContextBlobLogger, retryLogger } from "./agent-client/dist/connect.js";
import { AGENT_WEBSOCKET_DELIVERY_AMBIGUOUS_ERROR_NAME, AUTH_CODES, ActionRequiredError, AgentError, CANCELLED_CODES, CONFIG_CODES, CancelledError, INFERENCE_ERROR_RETRY_DENYLIST, INFERENCE_REQUEST_ERROR_TYPE_HEADER, NETWORK_ERRNO_CODES, NETWORK_ERRNO_RE, NonRetriableError, PAYMENT_CODES, RetriableError, SUMMARY_PLACEHOLDER_REJECTED_ERROR_NAME, TERMINAL_CONNECT_CODE_TITLES, TERMINAL_MESSAGE_CODES, TRANSPORT_PATTERNS, UPGRADE_CODES } from "./agent-client/dist/errors.js";
import { GATEWAY_AGENT_ID_HEADER, GATEWAY_REQUEST_ID_HEADER } from "./agent-client/dist/gateway-headers.js";
import { CONTENT_EVENT_PATTERN, GATEWAY_REQUEST_ID_RESPONSE_HEADERS, MODEL_PATTERN, OUTPUT_TOKENS_PATTERN } from "./agent-client/dist/gateway-request-timing.js";
import { RELAYED_ATTEMPT_FAILURE_KEY, relayedAttemptFailureSchema } from "./agent-client/dist/relayed-attempt-failure.js";
import { REQUEST_CONTEXT_BLOB_HARD_MAX_BYTES, REQUEST_CONTEXT_DYNAMIC_INLINE_MAX_BYTES, requestContextBlobBytes, requestContextBlobPreparationDuration, requestContextBlobPrepared } from "./agent-client/dist/request-context-blob.js";
import { AGENT_RETRY_CAPS, AGENT_RETRY_TRANSPORT_CAP_IN_TEST, RETRY_BUDGET_BY_KIND, STALL_RETRY_BUDGET_MS } from "./agent-client/dist/retry-policy.js";
import { SOFT_CANCEL_TRANSPORT_LINGER_MS } from "./agent-client/dist/soft-cancel-linger.js";
import { DEFAULT_STALL_DETECTOR_FAIL_TIMEOUT_MS, MIN_STALL_DETECTOR_FAIL_TIMEOUT_MS, UINT32_MAX2, normalizeTimeout } from "./agent-client/dist/stall-detector.js";
import { ALPN_FAILURE_FRAGMENT, BIDI_APPEND_FATAL_MARKER, HEADERLESS_RESPONSE_FRAGMENT, HTTP_STATUS_MESSAGE, POLL_SEQNO_FRAGMENT, POLL_TRANSPORT_MODE, TRANSPORT_FAILURE_KINDS } from "./agent-client/dist/transport-failure-kind.js";
import { BASE_DELAY_MS, BASE_DELAY_MS_IN_TEST, MAX_ENDLESS_RETRY_DELAY_MS, MAX_FINITE_RETRY_DELAY_MS, MAX_NO_PROGRESS_RESUME_FAILURES, MODEL_OUTPUT_UPDATE_CASES, logger13 } from "./agent-client/dist/turn-runner.js";
import { BIGINT_EIGHT, BIGINT_SIXTEEN, BIGINT_ZERO, IPV4_LOW_HEXTET_MASK } from "./agent-core/dist/domain-utils.js";
import { GOAL_ID_PATTERN, GOAL_STATUS_ACTIVE } from "./agent-core/dist/goal-continuation.js";
import { DeferredInteractionResponseError, Responses } from "./agent-core/dist/interaction-queries.js";
import { InteractionQueryIdAllocator } from "./agent-core/dist/interaction-query-ids.js";
import { Updates } from "./agent-core/dist/interaction-updates.js";
import { FRONTMATTER_ERROR_PREFIX, READ_ERROR_PREFIX, SKILL_MISSING_DESCRIPTION_ERROR } from "./agent-exec/dist/agent-skill-parse-error.js";
import { backgroundShellExecutorResource, writeBackgroundShellInputExecutorResource } from "./agent-exec/dist/background-shell.js";
import { ControlledExecDisposedError } from "./agent-exec/dist/controlled.js";
import { deleteExecutorResource } from "./agent-exec/dist/delete.js";
import { NON_AUTHENTICATABLE_MCP_PROVIDER_IDS, mcpExecutorResource } from "./agent-exec/dist/mcp.js";
import { utf8 } from "./agent-exec/dist/read.js";
import { READONLY_SDK_ERROR_MESSAGE, READONLY_WRITE_ERROR_MESSAGE } from "./agent-exec/dist/readonly-resource-accessor.js";
import { requestContextExecutorResource } from "./agent-exec/dist/request-context.js";
import { CombinedResourceAccessor, ListableCombinedResourceAccessor, RESOURCE_SYMBOL_PREFIX } from "./agent-exec/dist/resource-provider.js";
import { shellStreamExecutorResource } from "./agent-exec/dist/shell-stream.js";
import { shellExecutorResource } from "./agent-exec/dist/shell.js";
import { MAX_COMPLETED_TOOL_CALL_RESULTS, SubagentHostError } from "./agent-exec/dist/subagent.js";
import { BODY_REJECTION_PATTERN, SYMBOLIC_PATH_ARGUMENTS_MAX_COUNT, SYMBOLIC_PATH_ARGUMENTS_MAX_TOTAL_BYTES, SYMBOLIC_PATH_ARGUMENT_MAX_FILE_BYTES, SYMBOLIC_PATH_ARGUMENT_PREFIX, SymbolicPathReadError, describeReads, expansionBytes, expansionOutcomes, expansionPaths } from "./agent-exec/dist/symbolic-path-args.js";
import { writeExecutorResource } from "./agent-exec/dist/write.js";
import { isPathSafeSessionId } from "./agent-host/dist/storage/agent-host-storage.js";
import { DurableHostSessionStore } from "./agent-host/dist/storage/durable-session-store.js";
import { SQLITE_BUSY, SQLITE_LOCKED, createContext, recordCompletedSpanIfParented } from "./agent-host/dist/storage/instruments.js";
import { COMPARE_PASSES, SEED_PASSES, rejectLegacyReads } from "./agent-host/dist/storage/open-host-session.js";
import { reachability } from "./agent-host/dist/storage/reachable-blobs.js";
import { AGENT_KV_PREFIX, LocalHostBlobStore, MirroredHostBlobStore } from "./agent-host/dist/storage/session-blob-store.js";
import { import_node_fs8 } from "./agent-host/dist/storage/session-catalog-scanner.js";
import { HOST_SESSION_LISTING_PROJECTION_KEY, listingProjectionSchema } from "./agent-host/dist/storage/session-listing-projection.js";
import { HOST_SESSION_MANIFEST_KEY, HOST_SESSION_MANIFEST_VERSION, hostSessionManifestSchema } from "./agent-host/dist/storage/session-manifest.js";
import { HELD_SESSION_META_SUFFIX, MAX_SESSION_META_BYTES, RETIRED_SESSION_META_SUFFIX, SESSION_META_FILE_NAME, SESSION_META_SCHEMA_VERSION, hostSessionMetaSchema, import_node_crypto3, import_node_fs7, import_node_path6 } from "./agent-host/dist/storage/session-meta.js";
import { AgentHostStoreNotAFileError, errorCode } from "./agent-host/dist/storage/sqlite-store.js";
import { BLOB_ENCRYPTION_KEY_HEX_PATTERN, BLOB_ENCRYPTION_KEY_LENGTH_BYTES, conversationStepSerde, conversationSummarySerde, conversationTurnStructureSerde, shellCommandSerde, shellOutputSerde, todoItemSerde, userMessageSerde } from "./agent-kv/dist/agent-store.js";
import { BlobNotFoundError, MAX_CAUSE_CHAIN_DEPTH, MAX_MESSAGE_BLOB_ID_HEXES, MESSAGE_BLOB_ID_HEX_LENGTH } from "./agent-kv/dist/blob-not-found-error.js";
import { BLOB_READ_KIND_KEY } from "./agent-kv/dist/blob-read-kind.js";
import { HEX_LUT } from "./agent-kv/dist/serde.js";
import { SUBAGENT_STATE_BLOB_FETCH_CONCURRENCY, logger, subagentStateRefMissingBlob } from "./agent-kv/dist/subagent-states.js";
import { BLOB_METADATA_CALLBACK_SYMBOL } from "./agent-kv/dist/typed-blob-store.js";
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
import { SPAN_KEY2 } from "./context/dist/otel.js";
import { GIT_DIAGNOSTICS_PREFIX, GIT_DIAGNOSTICS_RE, GIT_STDERR_LOG_CAP } from "./git-core/dist/diagnostics.js";
import { HTTP_URL_PATTERN, TRAILING_URL_WRAPPER } from "./git-core/dist/redaction.js";
import { noopLogger } from "./hooks/dist/claude-code-mapper.js";
import { CLAUDE_EVENT_TO_CURSOR_STEP, CLAUDE_TOOL_TO_CURSOR_TOOL, CURSOR_STEP_TO_CLAUDE_EVENT, UNSUPPORTED_CLAUDE_EVENTS, UNSUPPORTED_CLAUDE_TOOLS } from "./hooks/dist/claude-code-types.js";
import { HookStep } from "./hooks/dist/hook-step.js";
import { SYSTEM_REMINDER_TAG_PATTERN } from "./hooks/dist/sanitize-system-reminder.js";
import { WINDOWS_HOOK_EXECUTABLE_EXTENSIONS } from "./hooks/dist/transport.js";
import { HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT, PERMISSION_HOOK_STEPS, WORKSPACE_LIFECYCLE_STEPS } from "./hooks/dist/types.js";
import { isString } from "./hooks/dist/validators/base.js";
import { metricsKey } from "./metrics/dist/index.js";
import { trace } from "./node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/trace-api.js";
import { Any } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/any_pb.js";
import { Value } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { Message } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/message.js";
import { protoBase64 } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-base64.js";
import { MethodIdempotency, MethodKind } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { Code } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { __asyncDelegator2, __asyncGenerator2, __asyncValues2, __await2 } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/promise-client.js";
import { contentTypeRegExp3, contentTypeStreamJson, contentTypeStreamProto, contentTypeStreamRegExp, contentTypeUnaryJson, contentTypeUnaryProto, contentTypeUnaryRegExp, encodingJson, encodingProto } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/content-type.js";
import { endStreamFlag } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/end-stream.js";
import { __rest } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/error-json.js";
import { contentTypePrefix } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/get-request.js";
import { methodGet, methodPost3, protocolName3 } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/handler-factory.js";
import { headerContentType2, headerProtocolVersion, headerStreamAcceptEncoding, headerStreamEncoding, headerTimeout2, headerUnaryAcceptEncoding, headerUnaryContentLength, headerUnaryEncoding, headerUserAgent2 } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/headers.js";
import { paramBase64, paramCompression, paramConnectVersion, paramEncoding, paramMessage } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/query-params.js";
import { __asyncGenerator4, __asyncValues4, __await4 } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/transport.js";
import { protocolVersion } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/version.js";
import { contentTypeJson, contentTypeProto, contentTypeRegExp } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-grpc-web/content-type.js";
import { methodPost, protocolName } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-grpc-web/handler-factory.js";
import { trailerFlag } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-grpc-web/trailer.js";
import { contentTypeJson2, contentTypeProto2, contentTypeRegExp2 } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-grpc/content-type.js";
import { Status } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-grpc/gen/status_pb.js";
import { methodPost2, protocolName2 } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-grpc/handler-factory.js";
import { headerAcceptEncoding, headerContentType, headerEncoding, headerGrpcMessage, headerGrpcStatus, headerStatusDetailsBin, headerTimeout } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-grpc/headers.js";
import { grpcStatusOk } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-grpc/trailer-status.js";
import { __asyncDelegator, __asyncGenerator, __asyncValues, __await } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/async-iterable.js";
import { compressedFlag } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/compression.js";
import { contentTypeMatcherCacheSize } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/content-type-matcher.js";
import { EnvelopeDecoderImpl } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/envelope.js";
import { __asyncDelegator3, __asyncGenerator3, __asyncValues3, __await3 } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/invoke-implementation.js";
import { defaultCompressMinBytes, maxReadMaxBytes, maxWriteMaxBytes } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/limit-io.js";
import { uResponseMethodNotAllowed, uResponseOk, uResponseUnsupportedMediaType, uResponseVersionNotSupported } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/universal.js";
import { AgentConversationTurn, AskQuestionInteractionQuery, ClientLlmGatewayCredential, ConversationAction, ConversationState, ConversationStateStructure, ConversationTurn, InteractionQuery, ResumeAction, ShellConversationTurn, SubagentPersistedState } from "./proto/dist/generated/agent/v1/agent_pb.js";
import { AskQuestionRejected, AskQuestionResult } from "./proto/dist/generated/agent/v1/ask_question_tool_pb.js";
import { BackgroundShellSpawnResult, WriteShellStdinError, WriteShellStdinResult } from "./proto/dist/generated/agent/v1/background_shell_exec_pb.js";
import { BLOB_REFERENCE_MESSAGE_TYPE_BY_NAME, BLOB_REFERENCE_METADATA_BY_MESSAGE_ID } from "./proto/dist/generated/agent/v1/blob_reference_metadata.js";
import { ConnectScmRequestQuery } from "./proto/dist/generated/agent/v1/connect_scm_tool_pb.js";
import { CreatePlanError, CreatePlanRequestQuery, CreatePlanResult } from "./proto/dist/generated/agent/v1/create_plan_tool_pb.js";
import { DeletePermissionDenied, DeleteResult } from "./proto/dist/generated/agent/v1/delete_exec_pb.js";
import { ExecClientMessage, ExecServerMessage } from "./proto/dist/generated/agent/v1/exec_pb.js";
import { McpAuthRequestQuery } from "./proto/dist/generated/agent/v1/mcp_auth_tool_pb.js";
import { McpError, McpPermissionDenied, McpResult, McpSymbolicPathArgument, McpTextContent, McpToolResultContentItem } from "./proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { McpTools } from "./proto/dist/generated/agent/v1/mcp_pb.js";
import { PrManagementError, PrManagementResult } from "./proto/dist/generated/agent/v1/pr_management_tool_pb.js";
import { ReadArgs, ReadResult, ReadSuccess } from "./proto/dist/generated/agent/v1/read_exec_pb.js";
import { ReplaceEnvFailure, ReplaceEnvResult } from "./proto/dist/generated/agent/v1/replace_env_tool_pb.js";
import { RequestContextArgs, RequestContextMcpsPart, RequestContextPartReferences, RequestContextRulesPart, RequestContextSkillsPart, RequestContextSubagentsPart } from "./proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { SetupVmEnvironmentResult, SetupVmEnvironmentSuccess } from "./proto/dist/generated/agent/v1/setup_vm_environment_tool_pb.js";
import { ShellHookApprovalRequirement, ShellHookApprovalRequirement_Kind, ShellPermissionDenied, ShellResult, ShellStream, ShellStreamExit, ShellStreamStderr, ShellStreamStdout } from "./proto/dist/generated/agent/v1/shell_exec_pb.js";
import { SubagentError, SubagentResult, SubagentSuccess } from "./proto/dist/generated/agent/v1/subagent_exec_pb.js";
import { BackgroundTaskCompletionReason } from "./proto/dist/generated/agent/v1/subagents_pb.js";
import { SwitchModeRequestQuery } from "./proto/dist/generated/agent/v1/switch_mode_tool_pb.js";
import { WebFetchRequestQuery } from "./proto/dist/generated/agent/v1/web_fetch_tool_pb.js";
import { WebSearchRequestQuery } from "./proto/dist/generated/agent/v1/web_search_tool_pb.js";
import { WritePermissionDenied, WriteResult } from "./proto/dist/generated/agent/v1/write_exec_pb.js";
import { CustomErrorDetails, ErrorDetails, ErrorDetails_Error } from "./proto/dist/generated/aiserver/v1/utils_pb.js";
import { ENCODING_MAPPINGS, LATIN1_ENCODING, UTF8_BOM_ENCODING, UTF8_ENCODING } from "./utils/dist/encoding-browser.js";
import { BINARY_EXTENSIONS, DETECTED_UTF8_ENCODING, ESCAPE_BYTE, IMAGE_EXTENSIONS, LATIN1_DECODER, LineEnding, MAX_FILE_ENCODINGS, UTF8_BOM_BYTES, UTF8_DECODER, VIDEO_EXTENSIONS, _FILE_TO_ENCODING, import_iconv_lite, import_jschardet, import_node_buffer, import_node_path3, import_promises } from "./utils/dist/encoding.js";
import { isWindows, path3, runDownPathCache, sfs } from "./utils/dist/find-executable.js";
import { GATEWAY_REQUEST_ID_PATTERN } from "./utils/dist/gateway-request-id.js";
import { BITBUCKET_NON_REPOSITORY_ROOT_PATHS, GIT_SUFFIX } from "./utils/dist/git-provider-url.js";
import { INVALID_GIT_REF_PATTERNS } from "./utils/dist/git-ref.js";
import { LEGACY_LOCAL_PR_CREATION_FORGE_GUIDANCE_HEADER, LOCAL_PR_CREATION_FORGE_GUIDANCE_HEADER } from "./utils/dist/local-pr-creation-forge.js";
import { import_node_fs3 } from "./utils/dist/oom-score-adj.js";
import { SEP, import_node_os, import_node_path4, import_node_url, import_promises2 } from "./utils/dist/path-utils.js";
import { TimeoutError, import_rxjs } from "./utils/dist/promise-extras.js";
import { ORIGIN_REPO_CLONE_PARTS_CACHE_MAX_SIZE, SANITIZED_REMOTE_URL_CACHE_MAX_SIZE, originRepoClonePartsCache, sanitizedRemoteUrlCache } from "./utils/dist/repo-url.js";
import { AGENT_STORE_FUSE_MOUNT_ROOT, PROC_SELF_MOUNTINFO, SPAWN_CWD_HOP_ARGV0, SPAWN_CWD_HOP_CD_FAILED_EXIT, SPAWN_CWD_HOP_CD_FAILED_MARKER, SPAWN_CWD_HOP_ENV_VAR2, SPAWN_CWD_HOP_SCRIPT, STDOUT_PREFIX_LIMIT, SpawnCwdHopStdoutHold, defaultReadMountinfo, import_node_crypto, import_node_fs4, import_node_os2, import_node_path5, import_node_stream } from "./utils/dist/safe-spawn-cwd.js";
import { MACOS_PROTECTED_HOME_FOLDERS, MACOS_VOLUMES_FOLDER } from "./utils/dist/scan-roots.js";
import { SpawnError, import_node_child_process, import_operators, import_rxjs2 } from "./utils/dist/spawn-promise.js";
import { TERMINAL_SHELL_INTERPRETER_NAMES } from "./utils/dist/terminal-allowlist.js";
import { DIRECT_WORKLOAD_PLACEMENT, WORKLOAD_CGROUP_PATH_PATTERN, import_node_fs6 } from "./utils/dist/workload-spawn.js";
import { CURSOR_PROJECTS_DIR, MAX_CONVERSATION_ID_LENGTH } from "./utils/dist/workspace-paths.js";
import { WriteIterableClosedError } from "./utils/dist/writable-iterable.js";
function createContextFromRemoteSpanContext(spanContext, name17, existingContext) {
    const span = trace.wrapSpanContext({
        traceId: spanContext.traceId,
        spanId: spanContext.spanId,
        traceFlags: spanContext.traceFlags,
        isRemote: true
    });
    const parentCtx = existingContext ?? createContext();
    const ctx = name17 ? parentCtx.withName(name17) : parentCtx;
    return ctx.with(SPAN_KEY2, span);
}
function mapToIconvEncoding(encoding) {
    return ENCODING_MAPPINGS[encoding] || encoding;
}
function stripUtf8Bom(text4) {
    return text4.startsWith("\uFEFF") ? text4.slice(1) : text4;
}
function normalizeEncodingName(encoding) {
    const normalized = encoding.toLowerCase();
    if (normalized === "latin-1") {
        return LATIN1_ENCODING;
    }
    if (normalized === "utf-8") {
        return UTF8_ENCODING;
    }
    if (normalized === "utf-8-bom" || normalized === "utf-8 bom") {
        return UTF8_BOM_ENCODING;
    }
    return normalized;
}
function getFileExtension(filePath) {
    const lowerCasePath = filePath.toLowerCase();
    const lastDotIndex = lowerCasePath.lastIndexOf(".");
    if (lastDotIndex === -1) {
        return "";
    }
    return lowerCasePath.substring(lastDotIndex);
}
export function isVideoFilePath(filePath) {
    const ext2 = getFileExtension(filePath);
    return VIDEO_EXTENSIONS.has(ext2);
}
function getFormatFromFileExtension(filePath) {
    const ext2 = getFileExtension(filePath);
    return {
        encoding: "binary",
        lineEnding: LineEnding.LF,
        isBinaryFile: true,
        isImageFile: IMAGE_EXTENSIONS.test(ext2),
        isVideoFile: VIDEO_EXTENSIONS.has(ext2)
    };
}
export async function readText(file, encodingHint) {
    const buf = await (0, import_promises.readFile)(file);
    const format2 = getFormatForBuffer(buf);
    if (format2.isBinaryFile) {
        throw new Error("Binary file cannot be decoded as text");
    }
    const cachedEncoding = _FILE_TO_ENCODING.get(file);
    let encodingToUse;
    if (encodingHint) {
        encodingToUse = encodingHint;
    } else if (cachedEncoding) {
        encodingToUse = cachedEncoding;
    } else {
        encodingToUse = format2.encoding;
    }
    const { text: text4, encoding } = decodeBufferWithEncoding(buf, encodingToUse);
    const str3 = stripUtf8Bom(text4);
    setFileEncoding(file, encoding === UTF8_ENCODING && hasUtf8Bom(buf) ? UTF8_BOM_ENCODING : encoding);
    if (format2.lineEnding === LineEnding.CRLF) {
        return str3.replaceAll("\r\n", "\n");
    }
    return str3;
}
export async function writeText(file, content, workspaceRoot, encodingHint) {
    const { buffer } = await getBufferForWrite(file, content, workspaceRoot, encodingHint);
    await (0, import_promises.writeFile)(file, buffer);
}
export async function getBufferForWrite(file, content, workspaceRoot, encodingHint) {
    let format2;
    try {
        if (workspaceRoot) {
            format2 = await getBestFormatForPath(file, workspaceRoot);
        } else {
            format2 = await getFormatForFile(file);
        }
    } catch  {
        const ext2 = getFileExtension(file);
        if (BINARY_EXTENSIONS.has(ext2)) {
            format2 = getFormatFromFileExtension(file);
        } else {
            format2 = getDefaultTextFormatForOS();
        }
    }
    const cachedEncoding = _FILE_TO_ENCODING.get(file);
    if (!format2.isBinaryFile) {
        let resolvedEncoding;
        if (encodingHint) {
            resolvedEncoding = normalizeEncodingName(encodingHint);
        } else if (cachedEncoding) {
            resolvedEncoding = normalizeEncodingName(cachedEncoding);
        } else {
            resolvedEncoding = normalizeEncodingName(format2.encoding);
        }
        const writeUtf8Bom = resolvedEncoding === UTF8_BOM_ENCODING || resolvedEncoding === UTF8_ENCODING && !encodingHint && await fileHasUtf8Bom(file);
        format2 = {
            ...format2,
            encoding: writeUtf8Bom ? UTF8_BOM_ENCODING : resolvedEncoding
        };
        setFileEncoding(file, format2.encoding);
    }
    const lines2 = countLines(content);
    if (format2.lineEnding === LineEnding.CRLF) {
        content = content.replace(/(?<!\r)\n/g, "\r\n");
    }
    if (format2.encoding === "binary") {
        const buffer = decodeBinaryContent(content);
        return {
            lines: lines2,
            buffer,
            format: format2
        };
    }
    return {
        lines: lines2,
        buffer: format2.encoding === UTF8_BOM_ENCODING ? Buffer.concat([
            UTF8_BOM_BYTES,
            import_iconv_lite.default.encode(stripUtf8Bom(content), UTF8_ENCODING, {
                defaultEncoding: UTF8_ENCODING
            })
        ]) : import_iconv_lite.default.encode(content, format2.encoding, {
            defaultEncoding: UTF8_ENCODING
        }),
        format: format2
    };
}
async function getBestFormatForPath(possiblePath, workspaceRoot) {
    try {
        return await getFormatForFile(possiblePath);
    } catch  {}
    const ext2 = getFileExtension(possiblePath);
    if (BINARY_EXTENSIONS.has(ext2)) {
        return getFormatFromFileExtension(possiblePath);
    }
    try {
        return await getFormatForWorkspace(workspaceRoot);
    } catch  {
        return getDefaultTextFormatForOS();
    }
}
export async function getFormatForFile(file) {
    const header = await readFirstBytes(file);
    const format2 = getFormatForBuffer(header);
    if (!format2.isBinaryFile) {
        return {
            ...format2,
            isVideoFile: false
        };
    }
    return {
        ...format2,
        isVideoFile: isVideoFilePath(file)
    };
}
export function countLines(data) {
    if (data === "") return 1;
    let lines2 = 1;
    for(let i = 0; i < data.length; i++){
        if (data[i] === "\n") {
            lines2++;
        }
    }
    return lines2;
}
function getFormatForBuffer(header) {
    if (header.length === 0) {
        return getDefaultTextFormatForOS();
    }
    const utf16Encoding = detectUTF16Encoding(header);
    if (utf16Encoding) {
        return {
            encoding: utf16Encoding,
            lineEnding: determineLineEndingsForBuffer(header),
            isBinaryFile: false,
            isImageFile: false,
            isVideoFile: false
        };
    }
    const utf32Encoding = detectUTF32Encoding(header);
    if (utf32Encoding) {
        return {
            encoding: utf32Encoding,
            lineEnding: determineLineEndingsForBuffer(header),
            isBinaryFile: false,
            isImageFile: false,
            isVideoFile: false
        };
    }
    const isBinaryFile = !isBufferText(header);
    if (isBinaryFile) {
        return {
            encoding: "binary",
            lineEnding: LineEnding.LF,
            isBinaryFile: true,
            isImageFile: isBufferAnImage(header),
            isVideoFile: false
        };
    }
    if ((0, import_node_buffer.isUtf8)(header) && !header.includes(ESCAPE_BYTE)) {
        return {
            encoding: DETECTED_UTF8_ENCODING,
            lineEnding: determineLineEndingsForBuffer(header),
            isBinaryFile: false,
            isImageFile: false,
            isVideoFile: false
        };
    }
    const detect = import_jschardet.default.detect(header);
    let enc = detect.confidence > 0.7 ? detect.encoding : "utf-8";
    if (enc === "ascii") {
        enc = "utf-8";
    }
    return {
        encoding: enc ?? "utf-8",
        lineEnding: determineLineEndingsForBuffer(header),
        isBinaryFile: false,
        isImageFile: false,
        isVideoFile: false
    };
}
async function getFormatForWorkspace(workspaceRoot) {
    const formatCounts = new Map();
    let filesProcessed = 0;
    const MAX_FILES_TO_CHECK = 100;
    for await (const filePath of walkDirectory(workspaceRoot)){
        if (filesProcessed >= MAX_FILES_TO_CHECK) {
            break;
        }
        try {
            const format2 = await getFormatForFile(filePath);
            if (!format2.isBinaryFile) {
                const key = `${format2.encoding}:${format2.lineEnding}`;
                const existing = formatCounts.get(key);
                if (existing) {
                    existing.count++;
                    if (existing.count >= 3) {
                        return existing.format;
                    }
                } else {
                    formatCounts.set(key, {
                        format: format2,
                        count: 1
                    });
                }
            }
            filesProcessed++;
        } catch (_error) {}
    }
    let mostCommon;
    for (const entry of formatCounts.values()){
        if (!mostCommon || entry.count > mostCommon.count) {
            mostCommon = entry;
        }
    }
    if (mostCommon) {
        return mostCommon.format;
    }
    return getDefaultTextFormatForOS();
}
function determineLineEndingsForBuffer(buffer) {
    let crlfCount = 0;
    let lfOnlyCount = 0;
    for(let i = 0; i < buffer.length; i++){
        if (buffer[i] === 10) {
            if (i > 0 && buffer[i - 1] === 13) {
                crlfCount++;
            } else {
                lfOnlyCount++;
            }
        }
    }
    if (crlfCount === 0 && lfOnlyCount === 0) {
        return LineEnding.LF;
    }
    const totalLineEndings = crlfCount + lfOnlyCount;
    const crlfPercentage = crlfCount / totalLineEndings * 100;
    return crlfPercentage >= 5 ? LineEnding.CRLF : LineEnding.LF;
}
function isBufferText(buffer) {
    const len = Math.min(4096, buffer.length);
    if (len === 0) {
        return true;
    }
    for(let i = 0; i < len; i++){
        if (buffer[i] === 0) {
            return false;
        }
    }
    let nonPrintableCount = 0;
    for(let i = 0; i < len; i++){
        const byte = buffer[i];
        if (byte < 32 && byte !== 9 && byte !== 10 && byte !== 13) {
            nonPrintableCount++;
        }
    }
    const nonPrintablePercentage = nonPrintableCount / len * 100;
    return nonPrintablePercentage < 5;
}
function isBufferAnImage(buffer) {
    if (buffer.length < 4) {
        return false;
    }
    if (buffer.length >= 8 && buffer[0] === 137 && buffer[1] === 80 && buffer[2] === 78 && buffer[3] === 71 && buffer[4] === 13 && buffer[5] === 10 && buffer[6] === 26 && buffer[7] === 10) {
        return true;
    }
    if (buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255) {
        return true;
    }
    if (buffer.length >= 12 && buffer[0] === 82 && buffer[1] === 73 && buffer[2] === 70 && buffer[3] === 70 && buffer[8] === 87 && buffer[9] === 69 && buffer[10] === 66 && buffer[11] === 80) {
        return true;
    }
    if (buffer.length >= 6 && buffer[0] === 71 && buffer[1] === 73 && buffer[2] === 70 && buffer[3] === 56 && (buffer[4] === 55 || buffer[4] === 57) && buffer[5] === 97) {
        return true;
    }
    return false;
}
async function readFirstBytes(file) {
    const fileHandle = await (0, import_promises.open)(file, "r");
    try {
        const buffer = Buffer.allocUnsafe(8192);
        const { bytesRead } = await fileHandle.read(buffer, 0, 8192, 0);
        return buffer.subarray(0, bytesRead);
    } finally{
        await fileHandle.close();
    }
}
async function* walkDirectory(dir) {
    const IGNORED_DIRS = new Set([
        "node_modules",
        ".git",
        ".svn",
        ".hg",
        "dist",
        "build",
        "out",
        ".next",
        ".cache",
        "coverage",
        "__pycache__",
        ".venv",
        "venv",
        ".turbo"
    ]);
    try {
        const entries = await (0, import_promises.readdir)(dir, {
            withFileTypes: true
        });
        for (const entry of entries){
            if (entry.name.startsWith(".") && entry.name !== ".gitignore") {
                continue;
            }
            const fullPath = (0, import_node_path3.join)(dir, entry.name);
            if (entry.isDirectory()) {
                if (!IGNORED_DIRS.has(entry.name)) {
                    yield* walkDirectory(fullPath);
                }
            } else if (entry.isFile()) {
                yield fullPath;
            }
        }
    } catch (_error) {
        return;
    }
}
function getDefaultTextFormatForOS() {
    return {
        encoding: UTF8_ENCODING,
        lineEnding: process.platform === "win32" ? LineEnding.CRLF : LineEnding.LF,
        isBinaryFile: false,
        isImageFile: false,
        isVideoFile: false
    };
}
function setFileEncoding(path64, encoding) {
    if (_FILE_TO_ENCODING.has(path64)) {
        _FILE_TO_ENCODING.delete(path64);
    }
    _FILE_TO_ENCODING.set(path64, encoding);
    if (_FILE_TO_ENCODING.size <= MAX_FILE_ENCODINGS) {
        return;
    }
    const oldestKey = _FILE_TO_ENCODING.keys().next().value;
    if (oldestKey !== void 0) {
        _FILE_TO_ENCODING.delete(oldestKey);
    }
}
function decodeWithUtf8Fallback(buffer) {
    try {
        return {
            text: UTF8_DECODER.decode(buffer),
            encoding: UTF8_ENCODING
        };
    } catch  {
        return {
            text: LATIN1_DECODER.decode(buffer),
            encoding: LATIN1_ENCODING
        };
    }
}
function decodeBufferWithEncoding(buffer, encoding) {
    const normalizedEncoding = normalizeEncodingName(encoding);
    if (normalizedEncoding === UTF8_ENCODING || normalizedEncoding === UTF8_BOM_ENCODING || normalizedEncoding === "ascii") {
        const decoded = decodeWithUtf8Fallback(buffer);
        if (normalizedEncoding === UTF8_BOM_ENCODING && decoded.encoding === UTF8_ENCODING) {
            return {
                text: decoded.text,
                encoding: UTF8_BOM_ENCODING
            };
        }
        return decoded;
    }
    if (normalizedEncoding === LATIN1_ENCODING) {
        return {
            text: LATIN1_DECODER.decode(buffer),
            encoding: LATIN1_ENCODING
        };
    }
    try {
        const iconvEncoding = mapToIconvEncoding(normalizedEncoding);
        if (import_iconv_lite.default.encodingExists(iconvEncoding)) {
            const decoded = import_iconv_lite.default.decode(buffer, iconvEncoding);
            return {
                text: decoded,
                encoding: normalizedEncoding
            };
        }
    } catch  {}
    return decodeWithUtf8Fallback(buffer);
}
function detectUTF16Encoding(buffer) {
    if (buffer.length < 4) {
        return null;
    }
    if (buffer[0] === 255 && buffer[1] === 254 && !(buffer[2] === 0 && buffer[3] === 0)) {
        return "UTF-16LE";
    }
    if (buffer[0] === 254 && buffer[1] === 255) {
        return "UTF-16BE";
    }
    let utf16LEMatches = 0;
    let utf16BEMatches = 0;
    const samplesToCheck = Math.min(50, Math.floor(buffer.length / 2));
    for(let i = 0; i < samplesToCheck * 2; i += 2){
        if (i + 1 >= buffer.length) break;
        if (buffer[i + 1] === 0) {
            const char = buffer[i];
            if (char >= 32 && char <= 126 || char === 9 || char === 10 || char === 13) {
                utf16LEMatches++;
            }
        }
        if (buffer[i] === 0) {
            const char = buffer[i + 1];
            if (char >= 32 && char <= 126 || char === 9 || char === 10 || char === 13) {
                utf16BEMatches++;
            }
        }
    }
    if (utf16LEMatches > samplesToCheck * 0.8) {
        return "UTF-16LE";
    }
    if (utf16BEMatches > samplesToCheck * 0.8) {
        return "UTF-16BE";
    }
    return null;
}
function hasUtf8Bom(buffer) {
    return buffer.length >= UTF8_BOM_BYTES.length && buffer[0] === UTF8_BOM_BYTES[0] && buffer[1] === UTF8_BOM_BYTES[1] && buffer[2] === UTF8_BOM_BYTES[2];
}
async function fileHasUtf8Bom(file) {
    try {
        return hasUtf8Bom(await readFirstBytes(file));
    } catch  {
        return false;
    }
}
function detectUTF32Encoding(buffer) {
    if (buffer.length < 8) {
        return null;
    }
    if (buffer[0] === 0 && buffer[1] === 0 && buffer[2] === 254 && buffer[3] === 255) {
        return "UTF-32BE";
    }
    if (buffer[0] === 255 && buffer[1] === 254 && buffer[2] === 0 && buffer[3] === 0) {
        return "UTF-32LE";
    }
    let utf32BEMatches = 0;
    let utf32LEMatches = 0;
    const samplesToCheck = Math.min(50, Math.floor(buffer.length / 4));
    for(let i = 0; i < samplesToCheck * 4; i += 4){
        if (i + 3 >= buffer.length) break;
        if (buffer[i] === 0 && buffer[i + 1] === 0 && buffer[i + 2] === 0) {
            const char = buffer[i + 3];
            if (char >= 32 && char <= 126 || char === 9 || char === 10 || char === 13) {
                utf32BEMatches++;
            }
        }
        if (buffer[i + 1] === 0 && buffer[i + 2] === 0 && buffer[i + 3] === 0) {
            const char = buffer[i];
            if (char >= 32 && char <= 126 || char === 9 || char === 10 || char === 13) {
                utf32LEMatches++;
            }
        }
    }
    if (utf32BEMatches > samplesToCheck * 0.8) {
        return "UTF-32BE";
    }
    if (utf32LEMatches > samplesToCheck * 0.8) {
        return "UTF-32LE";
    }
    return null;
}
function decodeBinaryContent(content) {
    const cleanedContent = content.trim().replace(/\s/g, "");
    const base64Pattern = /^[A-Za-z0-9+/]*={0,2}$/;
    const MIN_BASE64_LENGTH = 50;
    const MIN_DECODED_RATIO = 0.5;
    if (cleanedContent.length > MIN_BASE64_LENGTH && base64Pattern.test(cleanedContent)) {
        try {
            const decoded = Buffer.from(cleanedContent, "base64");
            if (decoded.length > 0) {
                const minExpectedLength = Math.floor(cleanedContent.length * MIN_DECODED_RATIO);
                if (decoded.length >= minExpectedLength) {
                    return decoded;
                }
            }
        } catch  {}
    }
    return Buffer.from(content, "latin1");
}
function statSyncNoException(file) {
    try {
        return sfs.statSync(file);
    } catch  {
        return null;
    }
}
function runDownPath(exe, pathMustMatch) {
    if (exe.match(/[\\/]/)) {
        return exe;
    }
    const cacheKey2 = pathMustMatch ? `${exe}\0${pathMustMatch.source}\0${pathMustMatch.flags}` : exe;
    const cached2 = runDownPathCache.get(cacheKey2);
    if (cached2 !== void 0) {
        return cached2;
    }
    const target = path3.join(".", exe);
    if (statSyncNoException(target)) {
        runDownPathCache.set(cacheKey2, target);
        return target;
    }
    const haystack = process.env.PATH.split(isWindows ? ";" : ":");
    for (const p2 of haystack){
        const needle = path3.join(p2, exe);
        if (statSyncNoException(needle) && (!pathMustMatch || pathMustMatch.test(needle))) {
            runDownPathCache.set(cacheKey2, needle);
            return needle;
        }
    }
    runDownPathCache.set(cacheKey2, exe);
    return exe;
}
export function findActualExecutable(exe, args, pathMustMatch) {
    if (process.platform !== "win32") {
        return {
            cmd: runDownPath(exe),
            args
        };
    }
    if (!sfs.existsSync(exe)) {
        const possibleExts = [
            ".exe",
            ".bat",
            ".cmd",
            ".ps1"
        ];
        const exeLower = exe.toLowerCase();
        if (possibleExts.some((ext2)=>exeLower.endsWith(ext2))) {
            const resolvedPath = runDownPath(exe, pathMustMatch);
            if (sfs.existsSync(resolvedPath)) {
                return findActualExecutable(resolvedPath, args, pathMustMatch);
            }
        }
        for (const ext2 of possibleExts){
            const possibleFullPath = runDownPath(`${exe}${ext2}`, pathMustMatch);
            if (sfs.existsSync(possibleFullPath)) {
                return findActualExecutable(possibleFullPath, args, pathMustMatch);
            }
        }
    }
    if (exe.match(/\.ps1$/i)) {
        const cmd = path3.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "PowerShell.exe");
        const psargs = [
            "-ExecutionPolicy",
            "Unrestricted",
            "-NoLogo",
            "-NonInteractive",
            "-File",
            exe
        ];
        return {
            cmd,
            args: psargs.concat(args)
        };
    }
    if (exe.match(/\.(bat|cmd)$/i)) {
        const cmd = path3.join(process.env.SYSTEMROOT, "System32", "cmd.exe");
        const cmdArgs = [
            "/C",
            exe,
            ...args
        ];
        return {
            cmd,
            args: cmdArgs
        };
    }
    if (exe.match(/\.(js)$/i)) {
        const cmd = process.execPath;
        const nodeArgs = [
            exe
        ];
        return {
            cmd,
            args: nodeArgs.concat(args)
        };
    }
    return {
        cmd: exe,
        args
    };
}
export function createWritableIterable() {
    const readQueue = [];
    const writeQueue = [];
    let closed2 = false;
    let error3;
    let nextResolve = ()=>{};
    let nextReject = ()=>{};
    const createNextPromise = ()=>{
        const promise = new Promise((resolve36, reject2)=>{
            nextResolve = resolve36;
            nextReject = reject2;
        });
        promise.catch(()=>{});
        return promise;
    };
    let nextPromise = createNextPromise();
    function drainReads(result, err) {
        while(readQueue.length > 0){
            const reader = readQueue.shift();
            if (err) {
                reader.reject(err);
            } else {
                reader.resolve(result);
            }
        }
    }
    function rejectPendingWrites(err) {
        writeQueue.length = 0;
        nextReject(err);
        nextPromise = Promise.reject(err);
        nextPromise.catch(()=>{});
    }
    return {
        async write (value) {
            if (closed2) {
                throw error3 ?? new WriteIterableClosedError("WritableIterable is closed");
            }
            const reader = readQueue.shift();
            if (reader) {
                reader.resolve({
                    done: false,
                    value
                });
                if (readQueue.length > 0) {
                    return;
                }
            } else {
                writeQueue.push(value);
            }
            const waitCount = writeQueue.length + 1;
            for(let i = 0; i < waitCount; i++){
                await nextPromise;
            }
        },
        throw (err) {
            if (closed2) return;
            closed2 = true;
            error3 = err;
            rejectPendingWrites(err);
            drainReads({
                done: true,
                value: void 0
            }, err);
        },
        close () {
            if (closed2) return;
            closed2 = true;
            writeQueue.length = 0;
            nextResolve();
            nextPromise = Promise.reject(new WriteIterableClosedError("WritableIterable is closed"));
            nextPromise.catch(()=>{});
            drainReads({
                done: true,
                value: void 0
            });
        },
        [Symbol.asyncIterator] () {
            return {
                next () {
                    nextResolve();
                    nextPromise = createNextPromise();
                    const value = writeQueue.shift();
                    if (value !== void 0) {
                        return Promise.resolve({
                            done: false,
                            value
                        });
                    }
                    if (closed2) {
                        if (error3) {
                            return Promise.reject(error3);
                        }
                        return Promise.resolve({
                            done: true,
                            value: void 0
                        });
                    }
                    return new Promise((resolve36, reject2)=>{
                        readQueue.push({
                            resolve: resolve36,
                            reject: reject2
                        });
                    });
                },
                throw (err) {
                    closed2 = true;
                    error3 = err;
                    writeQueue.length = 0;
                    rejectPendingWrites(err);
                    drainReads({
                        done: true,
                        value: void 0
                    }, err);
                    return Promise.resolve({
                        done: true,
                        value: void 0
                    });
                },
                return () {
                    closed2 = true;
                    writeQueue.length = 0;
                    nextResolve();
                    nextPromise = Promise.reject(new Error("Iterator was closed"));
                    nextPromise.catch(()=>{});
                    drainReads({
                        done: true,
                        value: void 0
                    });
                    return Promise.resolve({
                        done: true,
                        value: void 0
                    });
                }
            };
        }
    };
}
function isGatewayRequestId(value) {
    return GATEWAY_REQUEST_ID_PATTERN.test(value);
}
function stripGitSuffix(segment) {
    return segment.replace(GIT_SUFFIX, "");
}
function decodeBitbucketPathSegment(segment) {
    let decodedSegment;
    try {
        decodedSegment = decodeURIComponent(segment);
    } catch  {
        return void 0;
    }
    return decodedSegment.length > 0 && !decodedSegment.includes("/") ? decodedSegment : void 0;
}
export function isGitHubDotComHost(hostname3) {
    const normalizedHostname = hostname3.toLowerCase();
    return normalizedHostname === "github.com" || normalizedHostname.endsWith(".github.com");
}
export function isGitLabHost(hostname3) {
    return hostname3.toLowerCase().split(".").includes("gitlab");
}
export function isBitbucketCloudHost(hostname3) {
    const normalizedHostname = hostname3.toLowerCase();
    return normalizedHostname === "bitbucket.org" || normalizedHostname === "www.bitbucket.org";
}
export function isAzureDevopsServicesHost(hostname3) {
    const normalizedHostname = hostname3.toLowerCase();
    return normalizedHostname === "dev.azure.com" || normalizedHostname === "www.dev.azure.com";
}
export function parseGitHubRepositoryPathSegments(segments) {
    const owner = segments[0];
    const rawRepo = segments[1];
    if (!owner || !rawRepo) {
        return void 0;
    }
    const repo = stripGitSuffix(rawRepo);
    if (!repo) {
        return void 0;
    }
    return {
        owner,
        repo,
        hasSubpath: segments.length > 2
    };
}
export function parseGitLabRepositoryPathSegments(segments) {
    const specialRouteIndex = segments.indexOf("-");
    const hasSpecialRouteSeparator = specialRouteIndex !== -1;
    const repositorySegments = hasSpecialRouteSeparator ? segments.slice(0, specialRouteIndex) : [
        ...segments
    ];
    if (repositorySegments.length < 2 || repositorySegments.some((segment)=>segment.length === 0)) {
        return void 0;
    }
    const repo = stripGitSuffix(repositorySegments[repositorySegments.length - 1]);
    if (!repo) {
        return void 0;
    }
    repositorySegments[repositorySegments.length - 1] = repo;
    return {
        repositorySegments,
        hasSpecialRouteSeparator
    };
}
export function parseBitbucketRepositoryPathSegments(segments) {
    const rawWorkspace = segments[0];
    const rawRepo = segments[1];
    if (rawWorkspace === void 0 || rawRepo === void 0) {
        return void 0;
    }
    const workspace = decodeBitbucketPathSegment(rawWorkspace);
    const decodedRepo = decodeBitbucketPathSegment(rawRepo);
    if (workspace === void 0 || decodedRepo === void 0 || BITBUCKET_NON_REPOSITORY_ROOT_PATHS.has(workspace.toLowerCase())) {
        return void 0;
    }
    const repo = stripGitSuffix(decodedRepo);
    if (!repo) {
        return void 0;
    }
    return {
        workspace: encodeURIComponent(workspace),
        repo: encodeURIComponent(repo),
        hasSubpath: segments.length > 2
    };
}
export function parseAzureDevopsRepositoryPathSegments(segments) {
    const gitIndex = segments.findIndex((segment)=>segment.toLowerCase() === "_git");
    if (gitIndex < 1 || gitIndex > 2) {
        return void 0;
    }
    const organization = segments[0];
    const rawRepo = segments[gitIndex + 1];
    if (!organization || !rawRepo) {
        return void 0;
    }
    const repo = stripGitSuffix(rawRepo);
    if (!repo) {
        return void 0;
    }
    const project2 = gitIndex === 2 ? segments[1] : repo;
    if (!project2) {
        return void 0;
    }
    return {
        organization,
        project: project2,
        repo,
        hasSubpath: segments.length > gitIndex + 2
    };
}
export function isValidGitRef(ref) {
    if (ref.length === 0) {
        return false;
    }
    for (const char of ref){
        const code = char.charCodeAt(0);
        if (code < 32 || code === 127) {
            return false;
        }
    }
    if (ref.trim() !== ref) {
        return false;
    }
    if (ref.startsWith("-") || ref.startsWith(".") || ref.startsWith("/")) {
        return false;
    }
    if (ref === "HEAD") {
        return false;
    }
    if (ref === "@") {
        return false;
    }
    const refComponents = ref.split("/");
    if (refComponents.some((component)=>component.startsWith(".") || component.endsWith(".lock") || component.endsWith("."))) {
        return false;
    }
    return INVALID_GIT_REF_PATTERNS.every((pattern)=>!pattern.test(ref));
}
function trimRemotePath(pathname) {
    let end = pathname.length;
    while(end > 0 && pathname.charCodeAt(end - 1) === 47){
        end--;
    }
    const normalizedPath = pathname.slice(0, end).replace(/\.git$/i, "");
    if (!normalizedPath || normalizedPath === "/") {
        return "";
    }
    return normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`;
}
function toSanitizationCandidate(rawUrl) {
    const hasScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(rawUrl);
    if (hasScheme) {
        return rawUrl;
    }
    const httpsCandidate = `https://${rawUrl}`;
    try {
        void new URL(httpsCandidate);
        return httpsCandidate;
    } catch  {
        const scpLikeMatch = rawUrl.match(/^([^@/\s]+@)?([^:/\s]+):(.+)$/);
        if (scpLikeMatch) {
            const userInfo = scpLikeMatch[1] ?? "";
            const host = scpLikeMatch[2];
            const path64 = scpLikeMatch[3];
            return `ssh://${userInfo}${host}/${path64}`;
        }
        return httpsCandidate;
    }
}
function buildSanitizedRepoIdentity(host, pathname) {
    const normalizedPath = trimRemotePath(pathname);
    if (!normalizedPath) {
        return "";
    }
    return `${host}${normalizedPath}`.toLowerCase();
}
export function sanitizeRemoteUrl(raw) {
    const cached2 = sanitizedRemoteUrlCache.get(raw);
    if (cached2 !== void 0) {
        return cached2;
    }
    const sanitized = computeSanitizedRemoteUrl(raw);
    if (sanitizedRemoteUrlCache.size >= SANITIZED_REMOTE_URL_CACHE_MAX_SIZE) {
        sanitizedRemoteUrlCache.clear();
    }
    sanitizedRemoteUrlCache.set(raw, sanitized);
    return sanitized;
}
function computeSanitizedRemoteUrl(raw) {
    const rawUrl = raw.trim();
    if (!rawUrl) {
        return "";
    }
    try {
        const candidate = toSanitizationCandidate(rawUrl);
        const parsed = new URL(candidate);
        return buildSanitizedRepoIdentity(parsed.hostname, parsed.pathname);
    } catch  {
        const fallback3 = rawUrl.replace(/^(?:https?|ssh|git):\/\//i, "");
        const firstSlash = fallback3.indexOf("/");
        const authority = firstSlash === -1 ? fallback3 : fallback3.slice(0, firstSlash);
        const path64 = firstSlash === -1 ? "" : fallback3.slice(firstSlash);
        const sanitizedAuthority = authority.includes("@") ? authority.slice(authority.lastIndexOf("@") + 1) : authority;
        return buildSanitizedRepoIdentity(sanitizedAuthority, path64);
    }
}
export function sanitizeRemoteUrlForHttpUrl(raw) {
    const rawUrl = raw.trim();
    if (!rawUrl) {
        return "";
    }
    try {
        const parsed = new URL(toSanitizationCandidate(rawUrl));
        const protocol = parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed.protocol : "https:";
        const host = parsed.host.toLowerCase();
        const normalizedPath = trimRemotePath(parsed.pathname);
        if (!normalizedPath) {
            return "";
        }
        return `${protocol}//${host}${normalizedPath}`;
    } catch  {
        const normalized = sanitizeRemoteUrl(rawUrl);
        return normalized ? `https://${normalized}` : "";
    }
}
export function isOriginGitHost(host) {
    return /^origin(-[a-z0-9]+)?\.cursor\.com$/i.test(host);
}
function parseRemoteUrlForOriginCheck(rawUrl) {
    let url2 = rawUrl.trim();
    if (url2 === "") {
        return void 0;
    }
    if (url2.startsWith("git@")) {
        url2 = `https://${url2.slice("git@".length).replace(":", "/")}`;
    } else if (/^[a-z][a-z0-9+.-]*:\/\//i.test(url2) && !/^https?:\/\//i.test(url2)) {
        url2 = url2.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "https://");
    } else if (!/^https?:\/\//i.test(url2)) {
        url2 = `https://${url2}`;
    }
    try {
        return new URL(url2);
    } catch  {
        return void 0;
    }
}
function parseOriginRepoCloneUrlParts(remoteUrl) {
    if (remoteUrl === void 0) {
        return void 0;
    }
    if (originRepoClonePartsCache.has(remoteUrl)) {
        return originRepoClonePartsCache.get(remoteUrl);
    }
    const parts = computeOriginRepoCloneUrlParts(remoteUrl);
    if (originRepoClonePartsCache.size >= ORIGIN_REPO_CLONE_PARTS_CACHE_MAX_SIZE) {
        originRepoClonePartsCache.clear();
    }
    originRepoClonePartsCache.set(remoteUrl, parts);
    return parts;
}
function computeOriginRepoCloneUrlParts(remoteUrl) {
    const parsed = remoteUrl ? parseRemoteUrlForOriginCheck(remoteUrl) : void 0;
    if (parsed === void 0 || !isOriginGitHost(parsed.hostname)) {
        return void 0;
    }
    const segments = trimRemotePath(parsed.pathname).split("/").filter(Boolean);
    const isLegacyShape = segments.length === 3 && segments[0]?.toLowerCase() === "git";
    const isRootShape = segments.length === 2 && segments[0]?.toLowerCase() !== "git";
    if (!isLegacyShape && !isRootShape) {
        return void 0;
    }
    const owner = isLegacyShape ? segments[1] : segments[0];
    const name17 = isLegacyShape ? segments[2] : segments[1];
    if (!owner || !name17) {
        return void 0;
    }
    return Object.freeze({
        hostname: parsed.hostname,
        owner,
        name: name17
    });
}
function parseOriginRepoCloneUrl(remoteUrl) {
    const parts = parseOriginRepoCloneUrlParts(remoteUrl);
    return parts === void 0 ? void 0 : {
        owner: parts.owner,
        name: parts.name
    };
}
function originRepoCloneIdentity(remoteUrl) {
    const parts = parseOriginRepoCloneUrlParts(remoteUrl);
    if (parts === void 0) {
        return void 0;
    }
    return `${parts.hostname}/git/${parts.owner}/${parts.name}`.toLowerCase();
}
function repoComparisonKey(repoUrl) {
    return originRepoCloneIdentity(repoUrl) ?? sanitizeRemoteUrl(repoUrl);
}
export function repoIdentityKey(repoUrl) {
    return repoComparisonKey(repoUrl);
}
export function repoIdentityKeysEqual(a, b2) {
    return a.length > 0 && a === b2;
}
function toRepoIdentityKeySet(repoUrls) {
    const keys = new Set();
    for (const repoUrl of repoUrls){
        const key = repoIdentityKey(repoUrl);
        if (key.length > 0) {
            keys.add(key);
        }
    }
    return keys;
}
export function cloudEnvironmentRepoPreference(environments) {
    const repoUrls = [];
    for (const environment of environments){
        for (const repo of environment.repoConfig?.repos ?? []){
            repoUrls.push(repo.repoUrl);
        }
    }
    const transportUrls = new Set();
    for (const repoUrl of repoUrls){
        const transportUrl = sanitizeRemoteUrlForHttpUrl(repoUrl);
        if (transportUrl.length > 0) {
            transportUrls.add(transportUrl);
        }
    }
    return {
        identityKeys: toRepoIdentityKeySet(repoUrls),
        transportUrls
    };
}
export function isOriginBackedRemoteUrl(remoteUrl) {
    return parseOriginRepoCloneUrl(remoteUrl) !== void 0;
}
export function shouldRerenderUserInfoForLocalPrCreationForge(args) {
    if (args.forgeRuleContent === void 0 || args.forgeRuleContent.length === 0) {
        return [
            LOCAL_PR_CREATION_FORGE_GUIDANCE_HEADER,
            LEGACY_LOCAL_PR_CREATION_FORGE_GUIDANCE_HEADER
        ].some((header)=>args.userInfoContent.includes(`<user_rule>${header}`));
    }
    return !args.userInfoContent.includes(`<user_rule>${args.forgeRuleContent}</user_rule>`);
}
export function isCursorBigModel(modelName) {
    if (!modelName) return false;
    const lower = modelName.toLowerCase();
    return lower.includes("cursor-big") || lower.includes("dsv3") || lower.includes("kimi2p5-uninitialized") || lower.includes("kimi-k2p5-rl-") || lower.includes("kimi-k2p5-agent-") || lower.includes("titanium-0318") || lower.includes("composer") || lower.includes("genericbase");
}
function resetChildOomScoreAdj(pid) {
    if (process.platform !== "linux" || pid === void 0 || pid <= 0) {
        return;
    }
    try {
        (0, import_node_fs3.writeFileSync)(`/proc/${pid}/oom_score_adj`, "0");
    } catch  {}
}
export function isAbsolutePath(filePath) {
    if (filePath.startsWith("/")) {
        return true;
    }
    if (/^[a-zA-Z]:[\\/]/.test(filePath)) {
        return true;
    }
    if (filePath.startsWith("\\\\")) {
        return true;
    }
    return false;
}
function splitPath(path64) {
    return path64.split(/[/\\]/).filter((c)=>c);
}
function matchProjectSubdir(path64, targetDir) {
    const parts = splitPath(path64);
    for(let i = 0; i < parts.length - 2; i++){
        if (parts[i] === ".cursor" && parts[i + 1] === "projects" && parts[i + 3] === targetDir) {
            return {
                workspaceId: parts[i + 2],
                remainingPath: parts.slice(i + 4)
            };
        }
    }
    return null;
}
export function isCursorTerminalsDirectory(path64) {
    const match2 = matchProjectSubdir(path64, "terminals");
    return match2 !== null && match2.remainingPath.length === 0;
}
export function isAgentTranscriptPath(path64) {
    const match2 = matchProjectSubdir(path64, "agent-transcripts");
    return match2 !== null;
}
export function isAgentToolOutputFile(filePath) {
    const match2 = matchProjectSubdir(filePath, "agent-tools");
    return match2 !== null && match2.remainingPath.length === 1 && match2.remainingPath[0].endsWith(".txt");
}
export function isTerminalFilePath(filePath) {
    return extractTerminalId(filePath) !== null;
}
export function extractTerminalId(filePath) {
    const match2 = matchProjectSubdir(filePath, "terminals");
    if (!match2 || match2.remainingPath.length !== 1) {
        return null;
    }
    const fileName = match2.remainingPath[0];
    const fileMatch = /^(\d+)\.txt$/.exec(fileName);
    if (!fileMatch) return null;
    const id = Number.parseInt(fileMatch[1], 10);
    if (Number.isNaN(id)) return null;
    return {
        id
    };
}
export function sanitizeFilename(name17) {
    return name17.replace(/[^a-zA-Z0-9._-]/g, "_");
}
export function untildify(path64) {
    return path64.replace(/^~(?=$|\/|\\)/, (0, import_node_os.homedir)());
}
function stripFileUrlIfPresent(path64) {
    if (!path64.startsWith("file://")) {
        return path64;
    }
    try {
        return (0, import_node_url.fileURLToPath)(path64);
    } catch  {
        return path64;
    }
}
export function isSameDirectoryPathAsHome(path64, homeDir) {
    if (path64 === void 0) {
        return false;
    }
    if (process.platform === "win32") {
        return (0, import_node_path4.normalize)(path64).toLowerCase() === (0, import_node_path4.normalize)(homeDir).toLowerCase();
    }
    return path64 === homeDir;
}
export function resolvePath(path64, basePath) {
    const untildified = untildify(stripFileUrlIfPresent(path64));
    if (basePath && !(0, import_node_path4.isAbsolute)(untildified)) {
        return (0, import_node_path4.resolve)(basePath, untildified);
    }
    return (0, import_node_path4.resolve)(untildified);
}
export async function resolveRealPathStrict(path64, basePath) {
    const normalized = resolvePath(path64, basePath);
    let current = normalized;
    while(true){
        try {
            const resolvedCurrent = await (0, import_promises2.realpath)(current);
            return (0, import_node_path4.resolve)(resolvedCurrent, (0, import_node_path4.relative)(current, normalized));
        } catch (err) {
            if (err.code !== "ENOENT") {
                return null;
            }
            const parent = (0, import_node_path4.dirname)(current);
            if (parent === current) {
                return normalized;
            }
            current = parent;
        }
    }
}
export function isPathWithin({ basePath, targetPath }) {
    const resolvedBase = (0, import_node_path4.resolve)(basePath);
    const resolvedTarget = (0, import_node_path4.resolve)(basePath, targetPath);
    if (resolvedBase === (0, import_node_path4.parse)(resolvedBase).root) {
        return ((0, import_node_path4.parse)(resolvedTarget).root === resolvedBase && (resolvedTarget === resolvedBase || resolvedTarget.length > resolvedBase.length));
    }
    return resolvedTarget === resolvedBase || resolvedTarget.startsWith(resolvedBase + import_node_path4.sep);
}
function isPathWithinAnyRoot(targetPath, roots) {
    for (const root of roots){
        if (isPathWithin({
            basePath: root,
            targetPath
        })) {
            return true;
        }
    }
    return false;
}
export function isPathInsideWorkspaceRoot(realAbsolutePath, realRootDirectory) {
    const isCaseInsensitiveFs = process.platform === "win32" || process.platform === "darwin";
    const target = isCaseInsensitiveFs ? realAbsolutePath.toLowerCase() : realAbsolutePath;
    const root = isCaseInsensitiveFs ? realRootDirectory.toLowerCase() : realRootDirectory;
    if (target === root) {
        return true;
    }
    const rootPrefix = root.endsWith(import_node_path4.sep) ? root : root + import_node_path4.sep;
    return target.startsWith(rootPrefix);
}
export function normalizeToUnixPath(path64) {
    return path64.replace(/\\/g, SEP);
}
export function isWorktreesPath(path64) {
    const normalizedPath = normalizeToUnixPath(path64);
    return normalizedPath.includes(".cursor/worktrees");
}
function getWorktreesRepoRoot(worktreePath) {
    const normalizedPath = normalizeToUnixPath(worktreePath);
    const marker17 = "/.cursor/worktrees/";
    const markerIndex = normalizedPath.indexOf(marker17);
    if (markerIndex === -1) {
        return void 0;
    }
    const afterMarker = normalizedPath.slice(markerIndex + marker17.length);
    const parts = afterMarker.split("/");
    if (parts.length < 2) {
        return void 0;
    }
    const repoName = parts[0] ?? "";
    if (repoName.length === 0) {
        return void 0;
    }
    return normalizedPath.slice(0, markerIndex + marker17.length + repoName.length);
}
export function shouldBlockWorktreePath(params) {
    const { targetPath, workspacePaths, mainWorktreePath } = params;
    if (targetPath === void 0) {
        return false;
    }
    if (workspacePaths.length === 0) {
        return false;
    }
    if (!workspacePaths.every((path64)=>isWorktreesPath(path64))) {
        return false;
    }
    if (isPathWithinAnyRoot(targetPath, workspacePaths)) {
        return false;
    }
    const resolvedTargets = (0, import_node_path4.isAbsolute)(targetPath) ? [
        (0, import_node_path4.resolve)(targetPath)
    ] : workspacePaths.map((workspacePath)=>(0, import_node_path4.resolve)(workspacePath, targetPath));
    const worktreeRepoRoots = workspacePaths.map((root)=>getWorktreesRepoRoot(root)).filter((root)=>root !== void 0);
    if (worktreeRepoRoots.length > 0) {
        if (resolvedTargets.some((target)=>isPathWithinAnyRoot(target, worktreeRepoRoots))) {
            return true;
        }
    }
    if (mainWorktreePath !== void 0 && resolvedTargets.some((target)=>isPathWithinAnyRoot(target, [
            mainWorktreePath
        ]))) {
        return true;
    }
    return false;
}
function normalizeSlashes(path64) {
    const normalized = path64.replace(/\/{2,}/g, "/");
    return normalized.length > 1 && normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
}
function isStrictlyInside(child, parent) {
    if (child === parent) {
        return false;
    }
    return child.startsWith(parent.endsWith("/") ? parent : `${parent}/`);
}
export function getProtectedFoldersUnder(root, environment) {
    if (environment.platform !== "darwin") {
        return [];
    }
    const normalizedRoot = normalizeSlashes(root);
    const comparableRoot = normalizedRoot.toLowerCase();
    const home = normalizeSlashes(environment.homeDirectory);
    const rootSegmentCount = normalizedRoot === "/" ? 1 : normalizedRoot.split("/").length;
    return [
        ...MACOS_PROTECTED_HOME_FOLDERS.map((folder)=>`${home}/${folder}`),
        MACOS_VOLUMES_FOLDER
    ].filter((folder)=>isStrictlyInside(folder.toLowerCase(), comparableRoot)).map((folder)=>{
        const suffix = folder.split("/").slice(rootSegmentCount).join("/");
        return `${normalizedRoot === "/" ? "" : normalizedRoot}/${suffix}`;
    });
}
function asyncMap(array3, selector, options2) {
    const { max = 4 } = options2 ?? {};
    const promiseSelToObs = (k2)=>(0, import_rxjs.defer)(()=>(0, import_rxjs.from)(selector(k2)).pipe((0, import_rxjs.map)((v2)=>({
                    k: k2,
                    v: v2
                }))));
    const ret = (0, import_rxjs.from)(array3).pipe((0, import_rxjs.map)(promiseSelToObs), (0, import_rxjs.mergeAll)(max), (0, import_rxjs.reduce)((acc, kvp)=>{
        acc.set(kvp.k, kvp.v);
        return acc;
    }, new Map()));
    return (0, import_rxjs.firstValueFrom)(ret);
}
export async function asyncMapValues(array3, selector, options2) {
    const { max = 4 } = options2 ?? {};
    const promiseSelToObs = (idx)=>(0, import_rxjs.defer)(()=>(0, import_rxjs.from)(selector(array3[idx])).pipe((0, import_rxjs.map)((v2)=>({
                    idx,
                    v: v2
                }))));
    const ret = (0, import_rxjs.from)(array3.map((_2, idx)=>idx)).pipe((0, import_rxjs.map)(promiseSelToObs), (0, import_rxjs.mergeAll)(max), (0, import_rxjs.reduce)((acc, kvp)=>{
        acc[kvp.idx] = kvp.v;
        return acc;
    }, []));
    return (0, import_rxjs.firstValueFrom)(ret);
}
export function delay(ms2) {
    return new Promise((resolve36)=>{
        setTimeout(resolve36, ms2);
    });
}
export function abortableDelay(ms2, signal) {
    return new Promise((resolve36)=>{
        if (signal.aborted) {
            resolve36();
            return;
        }
        const onAbort = ()=>{
            clearTimeout(timer2);
            resolve36();
        };
        const timer2 = setTimeout(()=>{
            signal.removeEventListener("abort", onAbort);
            resolve36();
        }, ms2);
        signal.addEventListener("abort", onAbort, {
            once: true
        });
    });
}
export function withTimeout(promise, timeoutMs, message) {
    return (0, import_rxjs.firstValueFrom)((0, import_rxjs.from)(promise).pipe((0, import_rxjs.timeout)({
        first: timeoutMs,
        with: ()=>(0, import_rxjs.throwError)(()=>new TimeoutError(message ?? `Promise timed out after ${timeoutMs}ms`))
    })));
}
export function retryPromise(func, retries = 3) {
    const ret = (0, import_rxjs.defer)(()=>(0, import_rxjs.from)(func())).pipe((0, import_rxjs.retry)(retries));
    return (0, import_rxjs.firstValueFrom)(ret);
}
export function buildPaginationFooter(headLimitApplied, offsetApplied, hasMoreResults) {
    if (!hasMoreResults) {
        return "";
    }
    if (headLimitApplied === void 0 && offsetApplied === void 0) {
        return "";
    }
    const limit = headLimitApplied ?? "none";
    const offset = offsetApplied ?? 0;
    return `
[Showing paginated results, limit=${limit}, offset=${offset}]`;
}
export function truncateLinesToCharBudget(lines2, charBudget) {
    const content = lines2.join("\n").trim();
    if (charBudget === void 0 || content.length <= charBudget) {
        return {
            content,
            truncated: false
        };
    }
    const truncated = content.substring(0, charBudget);
    const lastNewlineIndex = truncated.lastIndexOf("\n");
    if (lastNewlineIndex === -1) {
        return {
            content: "... [First line would be too large to fit within character budget] ...",
            truncated: true
        };
    }
    return {
        content: truncated.substring(0, lastNewlineIndex).trim(),
        truncated: true
    };
}
export function ownedConcat(parts) {
    return Buffer.from(Buffer.concat(parts));
}
export function readProcSelfMountinfo() {
    try {
        return (0, import_node_fs4.readFileSync)(PROC_SELF_MOUNTINFO, "utf8");
    } catch  {
        return void 0;
    }
}
function resolveReadMountinfo(deps) {
    return deps?.readMountinfo ?? defaultReadMountinfo;
}
function unescapeMountinfoField(field4) {
    return field4.replace(/\\([0-7]{3})/g, (_match, oct)=>String.fromCharCode(Number.parseInt(oct, 8)));
}
function normalizeMountPoint(mountPoint) {
    if (mountPoint === "/") {
        return "/";
    }
    return mountPoint.replace(/\/+$/, "");
}
function pathIsOnMount(resolved, mountPoint) {
    return mountPoint === "/" || resolved === mountPoint || resolved.startsWith(`${mountPoint}/`);
}
function isFuseFilesystemType(fstype) {
    return fstype === "fuse" || fstype === "fuseblk" || fstype.startsWith("fuse.");
}
function parseMountinfoMounts(text4) {
    const mounts = [];
    for (const line of text4.split("\n")){
        if (line.length === 0) {
            continue;
        }
        const fields = line.split(" ");
        if (fields.length < 10) {
            continue;
        }
        let separator = -1;
        for(let i = 6; i < fields.length; i++){
            if (fields[i] === "-") {
                separator = i;
                break;
            }
        }
        const mountPointField = fields[4];
        const fstype = separator === -1 ? void 0 : fields[separator + 1];
        if (mountPointField === void 0 || fstype === void 0 || fstype.length === 0) {
            continue;
        }
        mounts.push({
            mountPoint: normalizeMountPoint(unescapeMountinfoField(mountPointField)),
            fstype
        });
    }
    return mounts;
}
function mountsFromMountinfoText(text4) {
    if (cachedMountinfoText === text4 && cachedMountinfoMounts !== void 0) {
        return cachedMountinfoMounts;
    }
    cachedMountinfoText = text4;
    cachedMountinfoMounts = parseMountinfoMounts(text4);
    return cachedMountinfoMounts;
}
function coveringMount(resolved, mounts) {
    let best;
    for (const mount of mounts){
        if (!pathIsOnMount(resolved, mount.mountPoint)) {
            continue;
        }
        if (best === void 0 || mount.mountPoint.length >= best.mountPoint.length) {
            best = mount;
        }
    }
    return best;
}
export function isFuseMountPath(cwd, deps) {
    const text4 = resolveReadMountinfo(deps)();
    if (text4 === void 0) {
        return false;
    }
    const covering = coveringMount(import_node_path5.default.resolve(cwd), mountsFromMountinfoText(text4));
    return covering !== void 0 && isFuseFilesystemType(covering.fstype);
}
export function isAgentStoreFusePath(cwd) {
    const resolved = import_node_path5.default.resolve(cwd);
    return resolved === AGENT_STORE_FUSE_MOUNT_ROOT || resolved.startsWith(`${AGENT_STORE_FUSE_MOUNT_ROOT}/`);
}
export function safeFallbackSpawnCwd(deps) {
    const processCwd = deps?.processCwd ?? process.cwd();
    const platform = deps?.platform ?? process.platform;
    if (platform === "linux" && isFuseMountPath(processCwd, deps)) {
        return deps?.tmpdir ?? (0, import_node_os2.tmpdir)();
    }
    return processCwd;
}
function planSpawnCwdHop(command, args, options2, deps) {
    const platform = deps?.platform ?? process.platform;
    const cwd = options2?.cwd;
    if (platform !== "linux" || cwd === void 0 || options2?.shell || !isFuseMountPath(cwd, deps)) {
        return {
            command,
            args: [
                ...args
            ],
            options: options2,
            hopped: false
        };
    }
    const hopCwd = import_node_path5.default.resolve(cwd);
    const fallbackCwd = safeFallbackSpawnCwd({
        processCwd: deps?.processCwd,
        tmpdir: deps?.tmpdir,
        platform,
        readMountinfo: deps?.readMountinfo
    });
    return {
        command: "/bin/sh",
        args: [
            "-c",
            SPAWN_CWD_HOP_SCRIPT,
            SPAWN_CWD_HOP_ARGV0,
            hopCwd,
            command,
            ...args
        ],
        options: {
            ...options2,
            cwd: fallbackCwd
        },
        hopped: true,
        hopCwd
    };
}
function spawnCwdHopEnabled(env = process.env) {
    return env[SPAWN_CWD_HOP_ENV_VAR2] === "1";
}
export function spawnCwdHopLogFields(cwd) {
    return {
        cwdKind: isAgentStoreFusePath(cwd) ? "agent_store_fuse" : "fuse",
        cwdHash: (0, import_node_crypto.createHash)("sha256").update(cwd, "utf8").digest("hex").slice(0, 12)
    };
}
export function isSpawnCwdHopActive(cwd, env = process.env) {
    return spawnCwdHopEnabled(env) && cwd !== void 0 && isFuseMountPath(cwd);
}
function workingDirectoryNotAccessibleMessage(cwd) {
    return `working directory is not accessible: ${import_node_path5.default.resolve(cwd)}`;
}
function stdoutPrefixIsHopCdMarker(prefix) {
    if (typeof prefix === "string") {
        return prefix === SPAWN_CWD_HOP_CD_FAILED_MARKER;
    }
    return Buffer.from(prefix).equals(Buffer.from(SPAWN_CWD_HOP_CD_FAILED_MARKER));
}
export function isSpawnCwdHopCdFailure(args) {
    return isSpawnCwdHopActive(args.cwd, args.env) && args.exitCode === SPAWN_CWD_HOP_CD_FAILED_EXIT && args.stdoutBytes === SPAWN_CWD_HOP_CD_FAILED_MARKER.length && stdoutPrefixIsHopCdMarker(args.stdoutPrefix);
}
export function spawnCwdHopCdFailedError(cwd) {
    const error3 = new Error(workingDirectoryNotAccessibleMessage(cwd));
    error3.code = "ENOENT";
    return error3;
}
export function isSpawnCwdHopCdFailedError(error3, cwd) {
    return error3 instanceof Error && error3.code === "ENOENT" && error3.message === workingDirectoryNotAccessibleMessage(cwd);
}
function execFailureStdout(error3) {
    if (error3.stdout == null) {
        return {
            bytes: 0,
            prefix: Buffer.alloc(0)
        };
    }
    const buf = typeof error3.stdout === "string" ? Buffer.from(error3.stdout) : ownedConcat([
        error3.stdout
    ]);
    return {
        bytes: buf.length,
        prefix: buf.subarray(0, STDOUT_PREFIX_LIMIT)
    };
}
function isHoppedExecFailure(error3, hopCwd) {
    if (typeof error3 !== "object" || error3 === null || !("status" in error3)) {
        return false;
    }
    const execError = error3;
    const stdout = execFailureStdout(execError);
    return isSpawnCwdHopCdFailure({
        exitCode: typeof execError.status === "number" ? execError.status : null,
        stdoutBytes: stdout.bytes,
        stdoutPrefix: stdout.prefix,
        cwd: hopCwd
    });
}
function isNodeChildProcess(value) {
    return typeof value === "object" && value !== null && "emit" in value && typeof value.emit === "function" && "on" in value && typeof value.on === "function" && "stdout" in value && "stdin" in value;
}
function isThenable2(value) {
    return typeof value === "object" && value !== null && "then" in value && typeof value.then === "function";
}
function isPtyLike(value) {
    return typeof value === "object" && value !== null && !isNodeChildProcess(value) && "onData" in value && typeof value.onData === "function" && "onExit" in value && typeof value.onExit === "function";
}
function remapHoppedChildProcess(child, hopCwd) {
    const hold = new SpawnCwdHopStdoutHold();
    const filtered = new import_node_stream.PassThrough();
    let remapped = false;
    let deferredExitArgs;
    const rawStdout = child.stdout;
    const emit2 = child.emit.bind(child);
    const finishFiltered = (dropHeld)=>{
        if (dropHeld) {
            hold.takeHeld();
        } else {
            const leftover = hold.takeHeld();
            if (leftover !== void 0 && !filtered.writableEnded) {
                filtered.write(leftover);
            }
        }
        if (!filtered.writableEnded) {
            filtered.end();
        }
    };
    const exitCodeFrom = (args)=>{
        const code = args?.[0];
        return code === null || typeof code === "number" ? code : null;
    };
    const hopCdFrom = (args)=>isSpawnCwdHopCdFailure({
            exitCode: exitCodeFrom(args),
            stdoutBytes: hold.bytes,
            stdoutPrefix: hold.stdoutPrefix,
            cwd: hopCwd
        });
    const remapToError = ()=>{
        remapped = true;
        finishFiltered(true);
        return emit2("error", spawnCwdHopCdFailedError(hopCwd));
    };
    const emitDeferredExit = ()=>{
        if (deferredExitArgs !== void 0 && exitCodeFrom(deferredExitArgs) === SPAWN_CWD_HOP_CD_FAILED_EXIT) {
            emit2("exit", ...deferredExitArgs);
            deferredExitArgs = void 0;
        }
    };
    if (rawStdout) {
        rawStdout.on("data", (chunk)=>{
            if (remapped) {
                return;
            }
            const released = hold.note(chunk);
            if (released !== void 0) {
                filtered.write(released);
                emitDeferredExit();
                return;
            }
            if (hopCdFrom(deferredExitArgs)) {
                remapToError();
            }
        });
        rawStdout.on("error", (error3)=>{
            filtered.destroy(error3);
        });
        Object.defineProperty(child, "stdout", {
            configurable: true,
            enumerable: true,
            get () {
                return filtered;
            }
        });
    }
    child.emit = ((event, ...args)=>{
        if (remapped) {
            return event === "exit" || event === "close" ? false : emit2(event, ...args);
        }
        if (event === "exit") {
            deferredExitArgs = args;
            if (exitCodeFrom(args) !== SPAWN_CWD_HOP_CD_FAILED_EXIT) {
                return emit2(event, ...args);
            }
            if (hopCdFrom(args)) {
                return remapToError();
            }
            if (hold.diverged || rawStdout == null) {
                deferredExitArgs = void 0;
                return emit2(event, ...args);
            }
            return false;
        }
        if (event === "close") {
            if (hopCdFrom(args) || hopCdFrom(deferredExitArgs)) {
                return remapToError();
            }
            finishFiltered(false);
            emitDeferredExit();
            return emit2(event, ...args);
        }
        return emit2(event, ...args);
    });
}
function remapHoppedPty(pty, hopCwd) {
    const hold = new SpawnCwdHopStdoutHold();
    const dataListeners = [];
    const originalOnData = pty.onData.bind(pty);
    const originalOnExit = pty.onExit.bind(pty);
    pty.onData = (listener)=>{
        dataListeners.push(listener);
        return originalOnData((data)=>{
            const chunk = typeof data === "string" ? Buffer.from(data) : data;
            const released = hold.note(chunk);
            if (released !== void 0) {
                listener(typeof data === "string" ? released.toString("utf8") : released);
            }
        });
    };
    pty.onExit = (listener)=>originalOnExit((event)=>{
            const leftover = hold.takeHeld();
            if (isSpawnCwdHopCdFailure({
                exitCode: event.exitCode,
                stdoutBytes: hold.bytes,
                stdoutPrefix: hold.stdoutPrefix,
                cwd: hopCwd
            })) {
                listener(event);
                return;
            }
            if (leftover !== void 0) {
                for (const dataListener of dataListeners){
                    dataListener(leftover);
                }
            }
            listener(event);
        });
}
function remapHoppedThrownError(error3, hopCwd) {
    if (isHoppedExecFailure(error3, hopCwd)) {
        throw spawnCwdHopCdFailedError(hopCwd);
    }
    throw error3;
}
function remapHoppedSpawnResult(result, hopCwd) {
    if (isNodeChildProcess(result)) {
        remapHoppedChildProcess(result, hopCwd);
        return result;
    }
    if (isPtyLike(result)) {
        remapHoppedPty(result, hopCwd);
        return result;
    }
    if (isThenable2(result)) {
        return result.then((value)=>value, (error3)=>remapHoppedThrownError(error3, hopCwd));
    }
    return result;
}
var cachedMountinfoText, cachedMountinfoMounts;
function spawn(exe, params, opts) {
    opts = opts ?? {};
    const spawnObs = new import_rxjs2.Observable((subj)=>{
        const { encoding, timeout: timeout2, ...spawnOpts } = opts;
        const { cmd, args } = findActualExecutable(exe, params);
        const stdinObs = spawnOpts.stdin;
        if (stdinObs) {
            delete spawnOpts.stdin;
            spawnOpts.stdio ??= [
                "pipe",
                "pipe",
                "pipe"
            ];
        }
        spawnOpts.stdio ??= [
            "ignore",
            "pipe",
            "pipe"
        ];
        const proc = (0, import_node_child_process.spawn)(cmd, args, spawnOpts);
        if (opts.processInfo && proc.pid !== void 0) {
            opts.processInfo.pid = proc.pid;
        }
        let timeoutHandle = null;
        if (timeout2 && timeout2 > 0) {
            timeoutHandle = setTimeout(()=>{
                if (!proc.killed) {
                    proc.kill();
                }
                const error3 = new SpawnError(`Process timed out after ${timeout2}ms`, -1, cmd, args);
                subj.error(error3);
            }, timeout2);
        }
        const bufHandler = (source)=>(b2)=>{
                if (b2.length < 1) {
                    return;
                }
                if (opts.echoOutput) {
                    (source === "stdout" ? process.stdout : process.stderr).write(b2);
                }
                let chunk = "<< String sent back was too long >>";
                try {
                    if (typeof b2 === "string") {
                        chunk = b2.toString();
                    } else {
                        chunk = b2.toString(encoding || "utf8");
                    }
                } catch  {
                    chunk = `<< Lost chunk of process output for ${exe} - length was ${b2.length}>>`;
                }
                subj.next({
                    source,
                    text: chunk
                });
            };
        const ret = new import_rxjs2.Subscription();
        if (stdinObs) {
            if (proc.stdin) {
                const stdin = proc.stdin;
                ret.add(stdinObs.subscribe({
                    next: (x)=>stdin.write(x),
                    error: subj.error.bind(subj),
                    complete: ()=>stdin.end()
                }));
            } else {
                subj.error(new Error(`opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required`));
            }
        }
        let stderrCompleted = null;
        let stdoutCompleted = null;
        let noClose = false;
        if (proc.stdout) {
            stdoutCompleted = new import_rxjs2.AsyncSubject();
            proc.stdout.on("data", bufHandler("stdout"));
            proc.stdout.on("close", ()=>{
                stdoutCompleted.next(true);
                stdoutCompleted.complete();
            });
        } else {
            stdoutCompleted = (0, import_rxjs2.of)(true);
        }
        if (proc.stderr) {
            stderrCompleted = new import_rxjs2.AsyncSubject();
            proc.stderr.on("data", bufHandler("stderr"));
            proc.stderr.on("close", ()=>{
                stderrCompleted.next(true);
                stderrCompleted.complete();
            });
        } else {
            stderrCompleted = (0, import_rxjs2.of)(true);
        }
        proc.on("error", (e)=>{
            noClose = true;
            if (timeoutHandle) {
                clearTimeout(timeoutHandle);
            }
            subj.error(e);
        });
        proc.on("close", (code)=>{
            noClose = true;
            if (timeoutHandle) {
                clearTimeout(timeoutHandle);
            }
            const pipesClosed = (0, import_rxjs2.merge)(stdoutCompleted, stderrCompleted).pipe((0, import_operators.reduce)((_acc)=>true, true));
            if (code === 0) {
                pipesClosed.subscribe(()=>subj.complete());
            } else {
                pipesClosed.subscribe(()=>{
                    const error3 = new SpawnError(`Process failed with exit code: ${code}`, code, cmd, args);
                    subj.error(error3);
                });
            }
        });
        ret.add(new import_rxjs2.Subscription(()=>{
            if (noClose) {
                return;
            }
            if (timeoutHandle) {
                clearTimeout(timeoutHandle);
            }
            proc.kill();
        }));
        return ret;
    });
    let resultObs = spawnObs;
    if (opts.retries && opts.retries > 0) {
        const retryCount = opts.retries;
        const delay3 = opts.retryDelay ?? 1e3;
        resultObs = resultObs.pipe((0, import_operators.retry)({
            count: retryCount,
            delay: (error3, _retryIndex)=>{
                if (error3 instanceof SpawnError && error3.exitCode !== 0) {
                    return (0, import_rxjs2.timer)(delay3);
                }
                throw error3;
            }
        }));
    }
    return opts.split ? resultObs : resultObs.pipe((0, import_operators.map)((x)=>x?.text));
}
function wrapObservableInPromise(obs) {
    return new Promise((res, rej)=>{
        let out = "";
        obs.subscribe({
            next: (x)=>{
                out += x;
            },
            error: (e)=>{
                if (e instanceof SpawnError) {
                    const err = new SpawnError(`${out}
${e.message}`, e.exitCode, e.command, e.args, out, e.stderr);
                    rej(err);
                } else {
                    const err = new Error(`${out}
${e instanceof Error ? e.message : String(e)}`);
                    rej(err);
                }
            },
            complete: ()=>res(out)
        });
    });
}
function wrapObservableInSplitPromise(obs) {
    return new Promise((res, rej)=>{
        let out = "";
        let err = "";
        obs.subscribe({
            next: (x)=>{
                if (x.source === "stdout") {
                    out += x.text;
                } else {
                    err += x.text;
                }
            },
            error: (e)=>{
                if (e instanceof SpawnError) {
                    const error3 = new SpawnError(`${out}
${e.message}`, e.exitCode, e.command, e.args, out, err);
                    rej(error3);
                } else {
                    const error3 = new Error(`${out}
${e instanceof Error ? e.message : String(e)}`);
                    rej(error3);
                }
            },
            complete: ()=>res([
                    out,
                    err
                ])
        });
    });
}
export function spawnPromise(exe, params, opts) {
    if (opts?.split) {
        return wrapObservableInSplitPromise(spawn(exe, params, {
            ...opts ?? {},
            split: true
        }));
    }
    return wrapObservableInPromise(spawn(exe, params, {
        ...opts ?? {},
        split: false
    }));
}
function readKernelBytes(size) {
    if (urandomUnavailable) {
        return void 0;
    }
    try {
        if (urandomFd === void 0) {
            urandomFd = (0, import_node_fs5.openSync)(URANDOM_PATH, "r");
        }
        const bytes = Buffer.alloc(size);
        let offset = 0;
        while(offset < size){
            const n = (0, import_node_fs5.readSync)(urandomFd, bytes, offset, size - offset, null);
            if (n <= 0) {
                return void 0;
            }
            offset += n;
        }
        return bytes;
    } catch  {
        urandomUnavailable = true;
        if (urandomFd !== void 0) {
            try {
                (0, import_node_fs5.closeSync)(urandomFd);
            } catch  {}
            urandomFd = void 0;
        }
        return void 0;
    }
}
function formatV4(bytes) {
    const version4 = bytes[6] ?? 0;
    const variant = bytes[8] ?? 0;
    bytes[6] = version4 & 15 | 64;
    bytes[8] = variant & 63 | 128;
    const hex = bytes.toString("hex");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
export function freshUuid() {
    const bytes = readKernelBytes(16);
    if (bytes === void 0) {
        return (0, import_node_crypto2.randomUUID)({
            disableEntropyCache: true
        });
    }
    return formatV4(bytes);
}
var urandomFd;
function tokenizeAllowlistValue(value) {
    return value.trim().split(/\s+/).filter(Boolean);
}
function getFirstAllowlistToken(value) {
    const trimmedValue = value.trim();
    const openingQuote = trimmedValue[0];
    if (openingQuote === '"' || openingQuote === "'") {
        const closingQuoteIndex = trimmedValue.indexOf(openingQuote, 1);
        if (closingQuoteIndex !== -1) {
            return trimmedValue.slice(0, closingQuoteIndex + 1);
        }
    }
    return tokenizeAllowlistValue(trimmedValue)[0];
}
export function isTerminalShellInterpreterAllowlistCandidate(value) {
    const firstToken = getFirstAllowlistToken(value);
    if (!firstToken) {
        return false;
    }
    const unquotedToken = firstToken.replace(/^["']|["']$/g, "");
    const pathSegments = unquotedToken.replaceAll("\\", "/").split("/");
    const executableName = (pathSegments[pathSegments.length - 1] ?? "").replace(/\.exe$/i, "").toLowerCase();
    return TERMINAL_SHELL_INTERPRETER_NAMES.has(executableName);
}
function tokensArePositionalPrefix(candidateTokens, targetTokens) {
    if (candidateTokens.length > targetTokens.length) return false;
    for(let k2 = 0; k2 < candidateTokens.length; k2++){
        if (candidateTokens[k2] !== targetTokens[k2]) return false;
    }
    return true;
}
function compareTerminalAllowlistOptions(a, b2) {
    return a.commandName.localeCompare(b2.commandName);
}
function buildTerminalAllowlistState(values) {
    const seen = new Set();
    const options2 = [];
    for (const rawValue of values){
        const value = rawValue.trim();
        if (!value || seen.has(value)) {
            continue;
        }
        seen.add(value);
        const tokens = tokenizeAllowlistValue(value);
        const commandName = tokens[0] ?? value;
        options2.push({
            id: value,
            label: value,
            value,
            commandName,
            tokenCount: tokens.length,
            indentLevel: 0,
            tokens,
            ancestorIds: [
                value
            ]
        });
    }
    options2.sort(compareTerminalAllowlistOptions);
    for(let i = 0; i < options2.length; i++){
        const option = options2[i];
        const optionTokenSet = new Set(option.tokens);
        let bestAncestor;
        let bestAncestorIsPositionalPrefix = false;
        for(let j2 = 0; j2 < i; j2++){
            const candidate = options2[j2];
            if (candidate.commandName !== option.commandName) continue;
            if (candidate.tokenCount >= option.tokenCount) continue;
            let allTokensPresent = true;
            for (const token of candidate.tokens){
                if (!optionTokenSet.has(token)) {
                    allTokensPresent = false;
                    break;
                }
            }
            if (!allTokensPresent) continue;
            const candidateIsPositionalPrefix = tokensArePositionalPrefix(candidate.tokens, option.tokens);
            if (bestAncestor === void 0) {
                bestAncestor = candidate;
                bestAncestorIsPositionalPrefix = candidateIsPositionalPrefix;
                continue;
            }
            if (candidate.tokenCount > bestAncestor.tokenCount) {
                bestAncestor = candidate;
                bestAncestorIsPositionalPrefix = candidateIsPositionalPrefix;
                continue;
            }
            if (candidate.tokenCount === bestAncestor.tokenCount && candidateIsPositionalPrefix && !bestAncestorIsPositionalPrefix) {
                bestAncestor = candidate;
                bestAncestorIsPositionalPrefix = true;
            }
        }
        if (bestAncestor !== void 0) {
            option.indentLevel = bestAncestor.indentLevel + 1;
            option.ancestorIds = [
                ...bestAncestor.ancestorIds,
                option.id
            ];
        }
    }
    const defaultSelectedOptionIds = options2.filter((option)=>!options2.some((other)=>other.id !== option.id && other.tokenCount < option.tokenCount && tokensArePositionalPrefix(other.tokens, option.tokens))).map((option)=>option.id);
    return {
        options: options2,
        defaultSelectedOptionIds
    };
}
function getTopLevelAllowlistCommand(optionId) {
    return optionId.split(" ")[0] ?? optionId;
}
function resolveDefaultAllowlistSelection(candidates, suggestedEntries) {
    const allowlistState = buildTerminalAllowlistState(candidates);
    const defaultSelectedIds = [
        ...allowlistState.defaultSelectedOptionIds
    ];
    if (!suggestedEntries || suggestedEntries.length === 0) {
        return {
            defaultSelectedOptionIds: defaultSelectedIds,
            hasClassifierSuggestions: false
        };
    }
    const classifierMatchedIds = [];
    const commandsWithClassifierSuggestions = new Set();
    for (const suggestion of suggestedEntries){
        const exactMatch = allowlistState.options.find((o)=>o.id === suggestion);
        if (exactMatch) {
            classifierMatchedIds.push(exactMatch.id);
            commandsWithClassifierSuggestions.add(getTopLevelAllowlistCommand(exactMatch.id));
            continue;
        }
        const optionsWhereSuggestionIsPrefix = allowlistState.options.filter((o)=>o.id.startsWith(`${suggestion} `) || o.id === suggestion);
        const optionsThatArePrefixOfSuggestion = allowlistState.options.filter((o)=>suggestion.startsWith(`${o.id} `) || suggestion === o.id);
        if (optionsThatArePrefixOfSuggestion.length > 0) {
            const longestMatch = optionsThatArePrefixOfSuggestion.reduce((a, b2)=>a.id.length > b2.id.length ? a : b2);
            classifierMatchedIds.push(longestMatch.id);
            commandsWithClassifierSuggestions.add(getTopLevelAllowlistCommand(longestMatch.id));
        } else if (optionsWhereSuggestionIsPrefix.length > 0) {
            const shortestMatch = optionsWhereSuggestionIsPrefix.reduce((a, b2)=>a.id.length < b2.id.length ? a : b2);
            classifierMatchedIds.push(shortestMatch.id);
            commandsWithClassifierSuggestions.add(getTopLevelAllowlistCommand(shortestMatch.id));
        }
    }
    if (classifierMatchedIds.length === 0) {
        return {
            defaultSelectedOptionIds: defaultSelectedIds,
            hasClassifierSuggestions: false
        };
    }
    const heuristicDefaultsToKeep = defaultSelectedIds.filter((id)=>!commandsWithClassifierSuggestions.has(getTopLevelAllowlistCommand(id)));
    return {
        defaultSelectedOptionIds: [
            ...new Set([
                ...heuristicDefaultsToKeep,
                ...classifierMatchedIds
            ])
        ],
        hasClassifierSuggestions: true
    };
}
export function resolveDefaultAllowlistOptionIds(candidates, suggestedEntries) {
    return resolveDefaultAllowlistSelection(candidates, suggestedEntries).defaultSelectedOptionIds;
}
function getIsoDateYearString(dateString) {
    if (dateString.length !== 10 || dateString[4] !== "-" || dateString[7] !== "-") {
        throw new Error(`Expected ISO date string, got: ${dateString}`);
    }
    return dateString.slice(0, 4);
}
export function buildWebSearchYearGuidance(promptDateString) {
    const currentYear = getIsoDateYearString(promptDateString);
    const parsedYear = Number.parseInt(currentYear, 10);
    const previousYear = Number.isNaN(parsedYear) ? currentYear : String(parsedYear - 1);
    return `IMPORTANT - Use the correct year in search queries:
- Today's date is ${promptDateString}. You MUST use this year when searching for recent information, documentation, or current events.
- Example: If today is ${promptDateString} and the user asks for "latest React docs", search for "React documentation ${currentYear}", NOT "React documentation ${previousYear}"`;
}
export var registeredCodec;
function buildPlacementShimScript({ workloadCgroupDir, hopCwd }) {
    const placeAndReset = `echo $$ 2>/dev/null > '${workloadCgroupDir}/cgroup.procs'; echo 0 2>/dev/null > /proc/$$/oom_score_adj; `;
    if (hopCwd !== void 0) {
        return placeAndReset + SPAWN_CWD_HOP_SCRIPT;
    }
    return `${placeAndReset}exec "$0" "$@"`;
}
function isUsableWorkloadCgroupDir(workloadCgroupDir) {
    try {
        if (!(0, import_node_fs6.statSync)(workloadCgroupDir).isDirectory()) {
            return false;
        }
        (0, import_node_fs6.accessSync)(`${workloadCgroupDir}/cgroup.procs`, import_node_fs6.constants.W_OK);
        return true;
    } catch  {
        return false;
    }
}
export function resolveWorkloadPlacement(platform, workloadCgroupDir, isUsable = isUsableWorkloadCgroupDir) {
    if (platform !== "linux" || workloadCgroupDir === void 0 || !WORKLOAD_CGROUP_PATH_PATTERN.test(workloadCgroupDir) || workloadCgroupDir.includes("..") || !isUsable(workloadCgroupDir)) {
        return DIRECT_WORKLOAD_PLACEMENT;
    }
    return Object.freeze({
        kind: "armed",
        workloadCgroupDir,
        executable: "/bin/sh",
        argumentPrefix: Object.freeze([
            "-c",
            buildPlacementShimScript({
                workloadCgroupDir
            })
        ])
    });
}
function isSpawnOptionsBag(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}
function restWithOptions(rest, options2) {
    return [
        options2,
        ...rest.slice(1)
    ];
}
function resetReturnedChildPid(value, resetChildPid) {
    if (typeof value === "object" && value !== null && "pid" in value && typeof value.pid === "number") {
        resetChildPid(value.pid);
        return;
    }
    if (typeof value === "object" && value !== null && "child" in value && typeof value.child === "object" && value.child !== null && "pid" in value.child && typeof value.child.pid === "number") {
        resetChildPid(value.child.pid);
    }
}
export function createSpawnWorkload(placement, resetChildPid = resetChildOomScoreAdj) {
    return function spawnWithPlacement(createProcess, command, args, ...rest) {
        const first = rest[0];
        const hopPlan = spawnCwdHopEnabled() && isSpawnOptionsBag(first) ? planSpawnCwdHop(command, args, first) : void 0;
        let createCommand = command;
        let createArgs = [
            ...args
        ];
        let createRest = rest;
        if (hopPlan?.hopped === true && hopPlan.hopCwd !== void 0) {
            createRest = restWithOptions(rest, hopPlan.options);
            if (placement.kind === "armed") {
                createCommand = "/bin/sh";
                createArgs = [
                    "-c",
                    buildPlacementShimScript({
                        workloadCgroupDir: placement.workloadCgroupDir,
                        hopCwd: hopPlan.hopCwd
                    }),
                    SPAWN_CWD_HOP_ARGV0,
                    hopPlan.hopCwd,
                    command,
                    ...args
                ];
            } else {
                createCommand = hopPlan.command;
                createArgs = hopPlan.args;
            }
        } else if (placement.kind === "armed") {
            createCommand = placement.executable;
            createArgs = [
                ...placement.argumentPrefix,
                command,
                ...args
            ];
        }
        let result;
        try {
            result = createProcess(createCommand, createArgs, ...createRest);
        } catch (error3) {
            if (hopPlan?.hopped === true && hopPlan.hopCwd !== void 0) {
                remapHoppedThrownError(error3, hopPlan.hopCwd);
            }
            throw error3;
        }
        resetReturnedChildPid(result, resetChildPid);
        if (hopPlan?.hopped === true && hopPlan.hopCwd !== void 0) {
            return remapHoppedSpawnResult(result, hopPlan.hopCwd);
        }
        return result;
    };
}
export function slugifyPath(path64) {
    return path64.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
export function getProjectPath(homeDir, workspacePath) {
    const dirName = slugifyPath(workspacePath);
    return `${homeDir}/${CURSOR_PROJECTS_DIR}/${dirName}`;
}
export function getSafeConversationId(conversationId) {
    let safe = encodeURIComponent(conversationId);
    safe = safe.replace(/%/g, "_");
    if (safe.length > MAX_CONVERSATION_ID_LENGTH) {
        safe = safe.slice(0, MAX_CONVERSATION_ID_LENGTH);
    }
    return safe;
}
export function createLabelMiddleware(options2) {
    const { backend, labels: middlewareLabels } = options2;
    function mergeLabels(providedLabels) {
        return {
            ...middlewareLabels,
            ...providedLabels
        };
    }
    return {
        record: (ctx, metric, value, labels)=>{
            backend.record(ctx, metric, value, mergeLabels(labels));
        },
        increment: (ctx, metric, value, labels)=>{
            backend.increment(ctx, metric, value, mergeLabels(labels));
        },
        gauge: (ctx, metric, value, labels)=>{
            backend.gauge(ctx, metric, value, mergeLabels(labels));
        },
        histogram: (ctx, metric, value, labels)=>{
            backend.histogram(ctx, metric, value, mergeLabels(labels));
        }
    };
}
function getMetricsBackend(ctx) {
    return ctx.get(metricsKey);
}
export function createCounter(name17, options2) {
    const handle = {
        name: name17,
        type: "counter",
        description: options2?.description,
        labelNames: options2?.labelNames
    };
    return {
        increment: (ctx, value, labels)=>{
            const backend = getMetricsBackend(ctx);
            backend.increment(ctx, handle, value ?? 1, labels);
        },
        record: (ctx, value, labels)=>{
            const backend = getMetricsBackend(ctx);
            backend.record(ctx, handle, value, labels);
        }
    };
}
export function createGauge(name17, options2) {
    const handle = {
        name: name17,
        type: "gauge",
        description: options2?.description,
        labelNames: options2?.labelNames
    };
    return {
        gauge: (ctx, value, labels)=>{
            const backend = getMetricsBackend(ctx);
            backend.gauge(ctx, handle, value, labels);
        },
        record: (ctx, value, labels)=>{
            const backend = getMetricsBackend(ctx);
            backend.record(ctx, handle, value, labels);
        }
    };
}
export function createHistogram(name17, options2) {
    const handle = {
        name: name17,
        type: "histogram",
        description: options2?.description,
        labelNames: options2?.labelNames
    };
    return {
        histogram: (ctx, value, labels)=>{
            const backend = getMetricsBackend(ctx);
            backend.histogram(ctx, handle, value, labels);
        },
        record: (ctx, value, labels)=>{
            const backend = getMetricsBackend(ctx);
            backend.record(ctx, handle, value, labels);
        }
    };
}
export function toHex(u8) {
    if (typeof Buffer !== "undefined") {
        return Buffer.from(u8).toString("hex");
    }
    let out = "";
    for(let i = 0; i < u8.length; i++){
        out += HEX_LUT[u8[i]];
    }
    return out;
}
export function fromHex(hex) {
    const clean = hex.trim().toLowerCase();
    if (clean.length % 2 !== 0) throw new Error("Invalid hex string length");
    const out = new Uint8Array(clean.length / 2);
    for(let i = 0; i < clean.length; i += 2){
        out[i / 2] = parseInt(clean.slice(i, i + 2), 16);
    }
    return out;
}
export function toBase64(u8) {
    if (typeof Buffer !== "undefined") {
        return Buffer.from(u8).toString("base64");
    }
    let binary2 = "";
    for(let i = 0; i < u8.length; i++){
        binary2 += String.fromCharCode(u8[i]);
    }
    return btoa(binary2);
}
export function isBlobDurable(blobStore, blobId) {
    return blobStore.isBlobDurable?.(blobId) ?? true;
}
export function toUint8Array(b2) {
    const buffer = b2.buffer;
    if (typeof SharedArrayBuffer !== "undefined" && buffer instanceof SharedArrayBuffer) return new Uint8Array(b2);
    return new Uint8Array(buffer, b2.byteOffset, b2.byteLength);
}
export async function getBlobId(blobData) {
    const hash = await crypto.subtle.digest("SHA-256", toUint8Array(blobData));
    return new Uint8Array(hash);
}
export function recordMissingSubagentStateBlob(ctx, miss) {
    logger.warn(ctx, "Subagent state ref blob not found; restoring without its transcript", miss);
    subagentStateRefMissingBlob.increment(ctx, 1, {
        reader: miss.reader,
        fallback: miss.fallback
    });
}
export async function resolveSubagentPersistedStates(ctx, state, blobStore) {
    const resolved = {
        ...state.subagentStates ?? {}
    };
    const refEntries = Object.entries(state.subagentStateRefs ?? {});
    if (refEntries.length === 0) {
        return resolved;
    }
    const loads = await asyncMapValues(refEntries, async ([subagentId, blobId])=>{
        const blob = await blobStore.getBlob(ctx, blobId);
        if (blob === void 0) {
            return {
                kind: "missing",
                subagentId,
                blobIdHex: toHex(blobId)
            };
        }
        try {
            return {
                kind: "loaded",
                subagentId,
                state: SubagentPersistedState.fromBinary(blob)
            };
        } catch (error3) {
            return {
                kind: "failed",
                error: error3
            };
        }
    }, {
        max: SUBAGENT_STATE_BLOB_FETCH_CONCURRENCY
    });
    const firstFailedLoad = loads.find((load2)=>load2.kind === "failed");
    if (firstFailedLoad !== void 0 && firstFailedLoad.kind === "failed") {
        throw firstFailedLoad.error;
    }
    for (const load2 of loads){
        if (load2.kind === "loaded") {
            resolved[load2.subagentId] = load2.state;
        } else if (load2.kind === "missing") {
            const hasInline = resolved[load2.subagentId] !== void 0;
            recordMissingSubagentStateBlob(ctx, {
                reader: "resolve",
                fallback: hasInline ? "inline" : "dropped",
                subagentId: load2.subagentId,
                blobIdHex: load2.blobIdHex
            });
        }
    }
    return resolved;
}
export function generateBlobEncryptionKeyHex() {
    const bytes = new Uint8Array(BLOB_ENCRYPTION_KEY_LENGTH_BYTES);
    crypto.getRandomValues(bytes);
    return toHex(bytes);
}
export function isValidBlobEncryptionKeyHex(value) {
    return typeof value === "string" && value.length === BLOB_ENCRYPTION_KEY_LENGTH_BYTES * 2 && BLOB_ENCRYPTION_KEY_HEX_PATTERN.test(value);
}
export async function deriveConversationStateFromStructure(ctx, structure, blobStore) {
    const newState = new ConversationState();
    const turns = [];
    const turnBlobs = structure.turns;
    for (const turnBlobId of turnBlobs){
        const turnBlob = await blobStore.getBlob(ctx, turnBlobId);
        if (!turnBlob) continue;
        const turnStructure = conversationTurnStructureSerde.deserialize(turnBlob);
        let conversationTurn;
        switch(turnStructure.turn.case){
            case "agentConversationTurn":
                {
                    const agentTurnStructure = turnStructure.turn.value;
                    const userMessageBlob = await blobStore.getBlob(ctx, agentTurnStructure.userMessage);
                    if (!userMessageBlob) continue;
                    const userMessage = userMessageSerde.deserialize(userMessageBlob);
                    const steps = [];
                    for (const stepBlobId of agentTurnStructure.steps){
                        const stepBlob = await blobStore.getBlob(ctx, stepBlobId);
                        if (stepBlob) {
                            const step = conversationStepSerde.deserialize(stepBlob);
                            steps.push(step);
                        }
                    }
                    const agentTurn = new AgentConversationTurn({
                        userMessage,
                        steps
                    });
                    conversationTurn = new ConversationTurn({
                        turn: {
                            case: "agentConversationTurn",
                            value: agentTurn
                        }
                    });
                    break;
                }
            case "shellConversationTurn":
                {
                    const shellTurnStructure = turnStructure.turn.value;
                    const shellCommandBlob = await blobStore.getBlob(ctx, shellTurnStructure.shellCommand);
                    if (!shellCommandBlob) continue;
                    const shellCommand = shellCommandSerde.deserialize(shellCommandBlob);
                    const shellOutputBlob = await blobStore.getBlob(ctx, shellTurnStructure.shellOutput);
                    if (!shellOutputBlob) continue;
                    const shellOutput = shellOutputSerde.deserialize(shellOutputBlob);
                    const shellTurn = new ShellConversationTurn({
                        shellCommand,
                        shellOutput
                    });
                    conversationTurn = new ConversationTurn({
                        turn: {
                            case: "shellConversationTurn",
                            value: shellTurn
                        }
                    });
                    break;
                }
        }
        if (!conversationTurn) continue;
        turns.push(conversationTurn);
    }
    newState.turns = turns;
    const todos = [];
    for (const todoBlobId of structure.todos){
        const todoBlob = await blobStore.getBlob(ctx, todoBlobId);
        if (todoBlob) {
            const todo = todoItemSerde.deserialize(todoBlob);
            todos.push(todo);
        }
    }
    newState.todos = todos;
    if (structure.summary) {
        const summaryBlob = await blobStore.getBlob(ctx, structure.summary);
        if (summaryBlob) {
            const summary = conversationSummarySerde.deserialize(summaryBlob);
            newState.summary = summary;
        }
    }
    return newState;
}
export function withBlobReadKind(ctx, kind) {
    return ctx.get(BLOB_READ_KIND_KEY) === kind ? ctx : ctx.with(BLOB_READ_KIND_KEY, kind);
}
export function withDefaultBlobReadKind(ctx, kind) {
    return ctx.get(BLOB_READ_KIND_KEY) === void 0 ? ctx.with(BLOB_READ_KIND_KEY, kind) : ctx;
}
export function formatMissingBlobSuffix(blobIdHexes) {
    if (blobIdHexes.length === 0) {
        return "";
    }
    const shown = blobIdHexes.slice(0, MAX_MESSAGE_BLOB_ID_HEXES).map((hex)=>hex.slice(0, MESSAGE_BLOB_ID_HEX_LENGTH));
    const label = blobIdHexes.length === 1 ? `missing blob ${shown[0]}` : `${blobIdHexes.length} missing blobs: ${shown.join(", ")}${blobIdHexes.length > shown.length ? ", \u2026" : ""}`;
    return ` (${label})`;
}
function isBlobNotFoundErrorNode(error3) {
    if (!(error3 instanceof Error)) {
        return false;
    }
    return error3 instanceof BlobNotFoundError || error3.isBlobNotFound === true || error3.name === "BlobNotFoundError";
}
function findBlobNotFoundError(error3) {
    let current = error3;
    for(let depth = 0; depth < MAX_CAUSE_CHAIN_DEPTH; depth++){
        if (current === null || current === void 0) {
            return void 0;
        }
        if (isBlobNotFoundErrorNode(current)) {
            return current;
        }
        if (typeof current !== "object" || !("cause" in current)) {
            return void 0;
        }
        current = current.cause;
    }
    return void 0;
}
export function isBlobNotFoundError(error3) {
    return findBlobNotFoundError(error3) !== void 0;
}
export function createLinkedContext(spanContext, name17, baseCtx) {
    if (!spanContext) {
        return baseCtx;
    }
    return createContextFromRemoteSpanContext({
        traceId: spanContext.traceId,
        spanId: spanContext.spanId,
        traceFlags: spanContext.traceFlags ?? 1
    }, name17, baseCtx);
}
export function recordSlowSpan(ctx, name17, thresholdMs, startEpochMs, durationMs2) {
    if (durationMs2 <= thresholdMs) {
        return;
    }
    recordCompletedSpanIfParented(ctx.withName(`${name17}.slow`), {
        startTime: startEpochMs,
        attributes: {
            durationMs: durationMs2,
            slowThresholdMs: thresholdMs
        }
    }, startEpochMs + durationMs2);
}
export function getBlobMetadataCallback(blobStore) {
    if (BLOB_METADATA_CALLBACK_SYMBOL in blobStore) {
        return blobStore[BLOB_METADATA_CALLBACK_SYMBOL];
    }
    return void 0;
}
export function getBlobTypeLabel(serde) {
    const blobType = serde.getBlobType?.();
    if (blobType === void 0) {
        return "unknown";
    }
    switch(blobType.kind){
        case "proto":
            return blobType.typeName;
        case "json":
            return "json";
        case "string":
            return "string";
        case "image":
            return `image:${blobType.mimeType}`;
        case "file":
            return blobType.mimeType ? `file:${blobType.mimeType}` : "file";
        default:
            {
                const _exhaustiveCheck = blobType;
                return _exhaustiveCheck;
            }
    }
}
export function sessionBlobKey(blobIdHex) {
    return `${AGENT_KV_PREFIX}${blobIdHex}`;
}
function parseListingProjectionValue(parsed) {
    const result = listingProjectionSchema.safeParse(parsed);
    return result.success ? result.data : void 0;
}
export function readListingProjection(store) {
    const value = store.items.get(HOST_SESSION_LISTING_PROJECTION_KEY);
    if (value === void 0) {
        return void 0;
    }
    return parseListingProjectionValue(value);
}
function serializeListingProjection(projection) {
    return {
        ...projection.title === void 0 ? {} : {
            title: projection.title
        },
        ...projection.isArchived === void 0 ? {} : {
            isArchived: projection.isArchived
        },
        ...projection.updatedAtMs === void 0 ? {} : {
            updatedAtMs: projection.updatedAtMs
        }
    };
}
function writeListingProjection(store, projection) {
    store.items.set(HOST_SESSION_LISTING_PROJECTION_KEY, serializeListingProjection(projection));
}
export function mergeListingProjection(store, patch) {
    const existing = readListingProjection(store);
    const title = Object.hasOwn(patch, "title") ? patch.title : existing?.title;
    const isArchived = patch.isArchived === void 0 ? existing?.isArchived : patch.isArchived;
    const updatedAtMs = Math.max(existing?.updatedAtMs ?? 0, patch.updatedAtMs ?? 0);
    const next = {
        ...title === void 0 ? {} : {
            title
        },
        ...isArchived === void 0 ? {} : {
            isArchived
        },
        ...updatedAtMs === 0 ? {} : {
            updatedAtMs
        }
    };
    writeListingProjection(store, next);
    return next;
}
function parseManifestValue(parsed) {
    const result = hostSessionManifestSchema.safeParse(parsed);
    if (!result.success) {
        throw new Error(`Host session manifest is invalid: ${result.error.issues.map((issue2)=>`${issue2.path.join(".") || "<root>"}: ${issue2.message}`).join("; ")}`);
    }
    return result.data;
}
function writeManifest(store, manifest) {
    store.items.set(HOST_SESSION_MANIFEST_KEY, manifest);
}
export function readManifest(store) {
    const value = store.items.get(HOST_SESSION_MANIFEST_KEY);
    if (value === void 0) {
        return void 0;
    }
    return parseManifestValue(value);
}
export function commitRoot(store, args) {
    return store.transaction(()=>{
        const onDisk = readManifest(store);
        if (onDisk?.latestRootBlobIdHex !== args.expectRoot) {
            return {
                committed: false,
                onDisk
            };
        }
        for (const [blobIdHex, bytes] of args.pieces){
            store.blobs.set(sessionBlobKey(blobIdHex), bytes);
        }
        writeManifest(store, args.manifest);
        if (args.listingUpdatedAtMs !== void 0) {
            mergeListingProjection(store, {
                updatedAtMs: args.listingUpdatedAtMs
            });
        }
        return {
            committed: true
        };
    });
}
export function birthRecency(origin, createdAtMs) {
    return origin === "host-native" ? createdAtMs : void 0;
}
export function sessionMetaFromManifestAndProjection(manifest, projection, workspacePaths) {
    return {
        schemaVersion: SESSION_META_SCHEMA_VERSION,
        sessionId: manifest.sessionId,
        origin: manifest.origin,
        createdAtMs: manifest.createdAtMs,
        ...projection?.updatedAtMs === void 0 ? {} : {
            updatedAtMs: projection.updatedAtMs
        },
        ...projection?.title === void 0 ? {} : {
            title: projection.title
        },
        isArchived: projection?.isArchived ?? false,
        ...workspacePaths === void 0 || workspacePaths.length === 0 ? {} : {
            workspacePaths
        },
        latestRootBlobIdHex: manifest.latestRootBlobIdHex
    };
}
export function sessionMetaPath(sessionDir) {
    return import_node_path6.default.join(sessionDir, SESSION_META_FILE_NAME);
}
export function serializeSessionMeta(meta) {
    const payload = {
        schemaVersion: SESSION_META_SCHEMA_VERSION,
        sessionId: meta.sessionId,
        origin: meta.origin,
        createdAtMs: meta.createdAtMs,
        ...meta.updatedAtMs === void 0 ? {} : {
            updatedAtMs: meta.updatedAtMs
        },
        ...meta.title === void 0 ? {} : {
            title: meta.title
        },
        isArchived: meta.isArchived,
        ...meta.workspacePaths === void 0 || meta.workspacePaths.length === 0 ? {} : {
            workspacePaths: [
                ...meta.workspacePaths
            ]
        },
        latestRootBlobIdHex: meta.latestRootBlobIdHex
    };
    return JSON.stringify(payload);
}
function parseSessionMetaText(raw) {
    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (error3) {
        return {
            kind: "invalid",
            reason: `not valid JSON: ${String(error3)}`
        };
    }
    const result = hostSessionMetaSchema.safeParse(parsed);
    if (result.success) {
        return {
            kind: "ok",
            meta: result.data
        };
    }
    return {
        kind: "invalid",
        reason: result.error.issues.map((issue2)=>`${issue2.path.join(".") || "<root>"}: ${issue2.message}`).join("; ")
    };
}
export function sidecarFingerprintOf(stat24) {
    return {
        ino: stat24.ino,
        mtimeMs: stat24.mtimeMs,
        size: stat24.size
    };
}
export function sameSidecarFingerprint(a, b2) {
    return a.ino === b2.ino && a.mtimeMs === b2.mtimeMs && a.size === b2.size;
}
export function readSessionMetaFile(sessionDir) {
    let fd;
    try {
        fd = import_node_fs7.default.openSync(sessionMetaPath(sessionDir), "r");
    } catch (error3) {
        const { code } = errorCode(error3);
        if (code === "ENOENT") {
            return {
                kind: "absent"
            };
        }
        return {
            kind: "unusable",
            reason: code ?? String(error3),
            fingerprint: void 0
        };
    }
    let raw;
    let fingerprint;
    try {
        const stat24 = import_node_fs7.default.fstatSync(fd);
        fingerprint = sidecarFingerprintOf(stat24);
        if (stat24.size > MAX_SESSION_META_BYTES) {
            return {
                kind: "unusable",
                reason: `too-large (${stat24.size} bytes)`,
                fingerprint
            };
        }
        raw = import_node_fs7.default.readFileSync(fd, "utf8");
    } catch (error3) {
        return {
            kind: "unusable",
            reason: errorCode(error3).code ?? String(error3),
            fingerprint: void 0
        };
    } finally{
        import_node_fs7.default.closeSync(fd);
    }
    const parsed = parseSessionMetaText(raw);
    return parsed.kind === "ok" ? {
        kind: "ok",
        meta: parsed.meta,
        fingerprint
    } : {
        kind: "unusable",
        reason: parsed.reason,
        fingerprint
    };
}
export function writeSessionMeta(sessionDir, meta) {
    const target = sessionMetaPath(sessionDir);
    const temp = `${target}.${process.pid}.${(0, import_node_crypto3.randomUUID)()}.tmp`;
    try {
        import_node_fs7.default.writeFileSync(temp, serializeSessionMeta(meta), {
            encoding: "utf8",
            mode: 384
        });
        const fingerprint = sidecarFingerprintOf(import_node_fs7.default.statSync(temp));
        import_node_fs7.default.renameSync(temp, target);
        return fingerprint;
    } catch (error3) {
        import_node_fs7.default.rmSync(temp, {
            force: true
        });
        throw error3;
    }
}
export function takeSessionMetaIfUnchanged(sessionDir, expected) {
    const target = sessionMetaPath(sessionDir);
    const heldPath = `${target}.${process.pid}.${(0, import_node_crypto3.randomUUID)()}${HELD_SESSION_META_SUFFIX}`;
    try {
        import_node_fs7.default.renameSync(target, heldPath);
    } catch (error3) {
        const { code } = errorCode(error3);
        if (code === "ENOENT" || code === "ENOTDIR") {
            return {
                kind: "absent"
            };
        }
        if (code === "EPERM" || code === "EBUSY") {
            return {
                kind: "changed"
            };
        }
        throw error3;
    }
    const held = {
        sessionDir,
        heldPath
    };
    let stat24;
    try {
        stat24 = import_node_fs7.default.statSync(heldPath);
    } catch (error3) {
        restoreHeldSessionMeta(held);
        throw error3;
    }
    if (!sameSidecarFingerprint(sidecarFingerprintOf(stat24), expected)) {
        restoreHeldSessionMeta(held);
        return {
            kind: "changed"
        };
    }
    return {
        kind: "held",
        held
    };
}
export function restoreHeldSessionMeta(held) {
    const claimed = claimPathExclusively({
        source: held.heldPath,
        target: sessionMetaPath(held.sessionDir)
    });
    if (!claimed) {
        retireHeldSessionMeta(held);
        return "superseded";
    }
    import_node_fs7.default.rmSync(held.heldPath, {
        force: true
    });
    return "restored";
}
function claimPathExclusively({ source, target }) {
    try {
        import_node_fs7.default.linkSync(source, target);
        return true;
    } catch (error3) {
        if (errorCode(error3).code === "EEXIST") {
            return false;
        }
    }
    try {
        import_node_fs7.default.copyFileSync(source, target, import_node_fs7.default.constants.COPYFILE_EXCL);
        return true;
    } catch (error3) {
        if (errorCode(error3).code === "EEXIST") {
            return false;
        }
        throw error3;
    }
}
export function retireHeldSessionMeta(held) {
    const retiredPath = `${held.heldPath.slice(0, -HELD_SESSION_META_SUFFIX.length)}${RETIRED_SESSION_META_SUFFIX}`;
    try {
        import_node_fs7.default.renameSync(held.heldPath, retiredPath);
    } catch (error3) {
        const { code } = errorCode(error3);
        if (code !== "ENOENT" && code !== "ENOTDIR") {
            throw error3;
        }
    }
}
function isRetiredSessionMetaName(name17) {
    return name17.startsWith(`${SESSION_META_FILE_NAME}.`) && name17.endsWith(RETIRED_SESSION_META_SUFFIX);
}
export function readRetiredSessionMeta(sessionDir) {
    let names3;
    try {
        names3 = import_node_fs7.default.readdirSync(sessionDir);
    } catch (error3) {
        const { code } = errorCode(error3);
        if (code === "ENOENT" || code === "ENOTDIR") {
            return {
                meta: void 0,
                usablePaths: [],
                unusableReasons: []
            };
        }
        throw error3;
    }
    const candidates = [];
    for (const name17 of names3){
        if (!isRetiredSessionMetaName(name17)) {
            continue;
        }
        const candidatePath = import_node_path6.default.join(sessionDir, name17);
        const stat24 = import_node_fs7.default.statSync(candidatePath, {
            throwIfNoEntry: false
        });
        if (stat24?.isFile()) {
            candidates.push({
                path: candidatePath,
                stat: stat24
            });
        }
    }
    candidates.sort((a, b2)=>b2.stat.mtimeMs - a.stat.mtimeMs || (a.path < b2.path ? 1 : -1));
    let meta;
    const usablePaths = [];
    const unusableReasons = [];
    for (const candidate of candidates){
        if (candidate.stat.size > MAX_SESSION_META_BYTES) {
            unusableReasons.push(`too-large (${candidate.stat.size} bytes)`);
            continue;
        }
        let raw;
        try {
            raw = import_node_fs7.default.readFileSync(candidate.path, "utf8");
        } catch (error3) {
            const { code } = errorCode(error3);
            if (code !== "ENOENT") {
                unusableReasons.push(code ?? String(error3));
            }
            continue;
        }
        const parsed = parseSessionMetaText(raw);
        if (parsed.kind === "ok") {
            meta ??= parsed.meta;
            usablePaths.push(candidate.path);
        } else {
            unusableReasons.push(parsed.reason);
        }
    }
    return {
        meta,
        usablePaths,
        unusableReasons
    };
}
export function mergeRetiredSessionMeta(args) {
    const { onDisk, retired } = args;
    if (onDisk === void 0 || retired === void 0) {
        return onDisk ?? retired;
    }
    const title = onDisk.title ?? retired.title;
    const workspacePaths = onDisk.workspacePaths ?? retired.workspacePaths;
    const updatedAtMs = Math.max(onDisk.updatedAtMs ?? 0, retired.updatedAtMs ?? 0);
    const { title: _title, workspacePaths: _workspacePaths, updatedAtMs: _updatedAtMs, ...rest } = onDisk;
    return {
        ...rest,
        ...updatedAtMs === 0 ? {} : {
            updatedAtMs
        },
        ...title === void 0 ? {} : {
            title
        },
        ...workspacePaths === void 0 ? {} : {
            workspacePaths
        }
    };
}
export function removeRetiredSessionMeta(retired) {
    for (const retiredPath of retired.usablePaths){
        import_node_fs7.default.rmSync(retiredPath, {
            force: true
        });
    }
}
export function sessionMetaToCatalogEntry(meta) {
    return {
        sessionId: meta.sessionId,
        createdAt: meta.createdAtMs,
        origin: meta.origin,
        hostOwnedStorage: true,
        ...meta.title === void 0 ? {} : {
            title: meta.title
        },
        ...meta.updatedAtMs === void 0 ? {} : {
            updatedAt: meta.updatedAtMs
        },
        ...meta.workspacePaths === void 0 ? {} : {
            workspace: {
                workspacePaths: meta.workspacePaths
            }
        }
    };
}
export function skillNameFromPath(fullPath) {
    const parts = fullPath.replace(/\\/g, "/").split("/");
    const last = parts[parts.length - 1] ?? "";
    if (last === "SKILL.md" && parts.length >= 2) {
        return parts[parts.length - 2] ?? "";
    }
    return last;
}
function errorMessage(error3) {
    return error3 instanceof Error ? error3.message : String(error3);
}
export function skillReadError(error3) {
    return READ_ERROR_PREFIX + errorMessage(error3);
}
export function skillFrontmatterError(error3) {
    return FRONTMATTER_ERROR_PREFIX + errorMessage(error3);
}
export function skillDescriptionError(description3, disableModelInvocation) {
    return description3 || disableModelInvocation ? void 0 : SKILL_MISSING_DESCRIPTION_ERROR;
}
function splitTrailingUrlWrappers(candidate) {
    let urlEnd = candidate.length;
    while(urlEnd > 0 && TRAILING_URL_WRAPPER.test(candidate.slice(urlEnd - 1, urlEnd))){
        urlEnd -= 1;
    }
    return {
        url: candidate.slice(0, urlEnd),
        wrappers: candidate.slice(urlEnd)
    };
}
function redactHttpUrlCandidate(candidate) {
    const { url: url2, wrappers } = splitTrailingUrlWrappers(candidate);
    const sensitiveSuffixStart = url2.search(/[?#]/);
    const urlWithoutSensitiveSuffix = sensitiveSuffixStart === -1 ? url2 : url2.slice(0, sensitiveSuffixStart);
    const authorityStart = urlWithoutSensitiveSuffix.indexOf("//") + 2;
    const authorityDelimiter = urlWithoutSensitiveSuffix.slice(authorityStart).search(/[/?#]/);
    const authorityEnd = authorityDelimiter === -1 ? urlWithoutSensitiveSuffix.length : authorityStart + authorityDelimiter;
    const userinfoEnd = urlWithoutSensitiveSuffix.lastIndexOf("@", authorityEnd - 1);
    if (userinfoEnd < authorityStart) {
        return urlWithoutSensitiveSuffix + wrappers;
    }
    return urlWithoutSensitiveSuffix.slice(0, authorityStart) + urlWithoutSensitiveSuffix.slice(userinfoEnd + 1) + wrappers;
}
function redactHttpUrlUserinfo(value) {
    return value.replace(HTTP_URL_PATTERN, redactHttpUrlCandidate);
}
function capStderr(stderr) {
    if (stderr.length <= GIT_STDERR_LOG_CAP) {
        return stderr;
    }
    return `${stderr.slice(0, GIT_STDERR_LOG_CAP)}\u2026 [truncated to ${GIT_STDERR_LOG_CAP} chars]`;
}
export function appendGitDiagnostics(message, error3, options2) {
    if (typeof error3 !== "object" || error3 === null) {
        return message;
    }
    if (GIT_DIAGNOSTICS_RE.test(message)) {
        return message;
    }
    const gitError = error3;
    const parts = [];
    if (typeof gitError.gitErrorCode === "string" && gitError.gitErrorCode.length > 0) {
        parts.push(`gitErrorCode=${gitError.gitErrorCode}`);
    }
    if (typeof gitError.exitCode === "number" && Number.isFinite(gitError.exitCode)) {
        parts.push(`exitCode=${gitError.exitCode}`);
    }
    if (parts.length === 0) {
        return message;
    }
    let annotated = `${message}${GIT_DIAGNOSTICS_PREFIX}${parts.join(" ")}]`;
    if (options2?.includeStderr === true && typeof gitError.stderr === "string" && gitError.stderr.length > 0) {
        annotated += `
--- git stderr ---
${capStderr(redactHttpUrlUserinfo(gitError.stderr))}`;
    }
    return annotated;
}
export function getExecClientErrorCode(error3) {
    if (error3 instanceof ControlledExecDisposedError) {
        return "EXEC_BACKEND_UNAVAILABLE";
    }
    if (error3 instanceof Error && error3.name === "AgentExecStreamStartTimeoutError") {
        return "AGENT_EXEC_STREAM_START_TIMEOUT";
    }
    return void 0;
}
function resourceSymbolFor(name17) {
    return Symbol.for(`${RESOURCE_SYMBOL_PREFIX}${name17}`);
}
export function createResource(name17, remoteImplementation, controlledImplementation) {
    return {
        name: name17,
        symbol: resourceSymbolFor(name17),
        remoteImplementation,
        registerControlledImplementation: controlledImplementation
    };
}
export function resourceEntry(resource, implementation) {
    return [
        resource,
        implementation
    ];
}
export function createServerSerializer(argsKey) {
    function serialize(id, args) {
        return new ExecServerMessage({
            id,
            message: {
                case: argsKey,
                value: args
            }
        });
    }
    return serialize;
}
export function createClientDeserializer(resultKey) {
    return (result)=>{
        if (result.message.case !== resultKey) {
            return void 0;
        }
        return result.message.value;
    };
}
export function createClientSerializer(resultKey) {
    function serialize(id, result) {
        const message = {
            case: resultKey,
            value: result
        };
        return new ExecClientMessage({
            id,
            message
        });
    }
    return serialize;
}
export function createServerDeserializer(argsKey) {
    function deserialize(result) {
        if (result.message.case !== argsKey) {
            return void 0;
        }
        return {
            id: result.id,
            args: result.message.value
        };
    }
    return deserialize;
}
export async function conflictNoticeSyncAndPeek(executor, ctx, args, options2) {
    const result = await executor.execute(ctx, {
        op: "syncAndPeek",
        ...args?.conversationId !== void 0 ? {
            conversationId: args.conversationId
        } : {},
        ...args?.writtenPaths !== void 0 ? {
            writtenPaths: args.writtenPaths
        } : {},
        ...args?.timeoutMs !== void 0 ? {
            timeoutMs: args.timeoutMs
        } : {},
        ...args?.eager === true ? {
            eager: true
        } : {}
    }, options2);
    return result;
}
export async function conflictNoticePeek(executor, ctx, args, options2) {
    const result = await executor.execute(ctx, {
        op: "peek",
        ...args?.conversationId !== void 0 ? {
            conversationId: args.conversationId
        } : {}
    }, options2);
    return result;
}
export async function conflictNoticeAck(executor, ctx, eventIds, args, options2) {
    if (eventIds.length === 0) {
        return;
    }
    await executor.execute(ctx, {
        op: "ack",
        eventIds,
        ...args?.conversationId !== void 0 ? {
            conversationId: args.conversationId
        } : {}
    }, options2);
}
export async function conflictNoticeRelease(executor, ctx, eventIds, args, options2) {
    if (eventIds.length === 0) {
        return;
    }
    await executor.execute(ctx, {
        op: "release",
        eventIds,
        ...args?.conversationId !== void 0 ? {
            conversationId: args.conversationId
        } : {}
    }, options2);
}
export async function conflictNoticeNoteDeferredEagerWrittenPaths(executor, ctx, writtenPaths, args, options2) {
    if (writtenPaths.length === 0) {
        return;
    }
    await executor.execute(ctx, {
        op: "noteDeferredEagerWrittenPaths",
        writtenPaths,
        ...args?.conversationId !== void 0 ? {
            conversationId: args.conversationId
        } : {}
    }, options2);
}
export function encodeBackgroundWorkMetadata(metadata) {
    const encoded = {};
    if (typeof metadata.title === "string" && metadata.title.trim().length > 0) {
        encoded.title = metadata.title;
    }
    if (typeof metadata.cwd === "string" && metadata.cwd.trim().length > 0) {
        encoded.cwd = metadata.cwd;
    }
    if (typeof metadata.startTimeMs === "number" && Number.isFinite(metadata.startTimeMs) && metadata.startTimeMs > 0) {
        encoded.startTimeMs = String(Math.floor(metadata.startTimeMs));
    }
    return Object.keys(encoded).length > 0 ? encoded : void 0;
}
export function mergeWakeup(queue, incoming) {
    if (queue.some((wakeup)=>wakeup.conversationId === incoming.conversationId && wakeup.id === incoming.id)) {
        return {
            queue: [
                ...queue
            ]
        };
    }
    const ownedIncoming = {
        ...incoming
    };
    if (incoming.groupKey === void 0) {
        return {
            queue: [
                ...queue,
                ownedIncoming
            ]
        };
    }
    const groupedIndex = queue.findIndex((wakeup)=>wakeup.conversationId === incoming.conversationId && wakeup.groupKey === incoming.groupKey);
    if (groupedIndex === -1) {
        return {
            queue: [
                ...queue,
                ownedIncoming
            ]
        };
    }
    const merged = [
        ...queue
    ];
    const replaced = merged[groupedIndex];
    merged[groupedIndex] = ownedIncoming;
    return {
        queue: merged,
        replaced
    };
}
export function toProtoBackgroundTaskCompletionReason(reason) {
    if (reason === void 0) {
        return void 0;
    }
    switch(reason){
        case "task_finished":
            return BackgroundTaskCompletionReason.TASK_FINISHED;
        case "task_progress":
            return BackgroundTaskCompletionReason.TASK_PROGRESS;
        default:
            {
                const _exhaustive = reason;
                return _exhaustive;
            }
    }
}
export function matchesFilter(record3, filter3) {
    if (!filter3) {
        return true;
    }
    if (filter3.kind && record3.kind !== filter3.kind) {
        return false;
    }
    if (filter3.state && record3.state !== filter3.state) {
        return false;
    }
    if (filter3.ownerId && record3.ownerId !== filter3.ownerId) {
        return false;
    }
    return true;
}
export function summarizeComputerUseActions(actions) {
    const actionCounts = {
        mouse_move: 0,
        click: 0,
        mouse_down: 0,
        mouse_up: 0,
        drag: 0,
        scroll: 0,
        type: 0,
        key: 0,
        wait: 0,
        screenshot: 0,
        cursor_position: 0
    };
    for (const action of actions){
        switch(action.action.case){
            case "mouseMove":
                actionCounts.mouse_move += 1;
                break;
            case "click":
                actionCounts.click += 1;
                break;
            case "mouseDown":
                actionCounts.mouse_down += 1;
                break;
            case "mouseUp":
                actionCounts.mouse_up += 1;
                break;
            case "drag":
                actionCounts.drag += 1;
                break;
            case "scroll":
                actionCounts.scroll += 1;
                break;
            case "type":
                actionCounts.type += 1;
                break;
            case "key":
                actionCounts.key += 1;
                break;
            case "wait":
                actionCounts.wait += 1;
                break;
            case "screenshot":
                actionCounts.screenshot += 1;
                break;
            case "cursorPosition":
                actionCounts.cursor_position += 1;
                break;
            case void 0:
                break;
        }
    }
    return {
        actionCount: actions.length,
        actionCounts
    };
}
function transformToolMatcher(matcher, logger146 = noopLogger) {
    if (!matcher || matcher === "*") {
        return "*";
    }
    const tools = matcher.split("|");
    const transformedTools = [];
    const warnings = [];
    for (const tool of tools){
        const trimmedTool = tool.trim();
        if (trimmedTool.startsWith("mcp__")) {
            const parts = trimmedTool.split("__");
            if (parts.length >= 3) {
                const toolName = parts.slice(2).join("__");
                transformedTools.push(`MCP:${toolName}`);
                continue;
            }
        }
        const cursorTool = CLAUDE_TOOL_TO_CURSOR_TOOL[trimmedTool];
        if (cursorTool === null) {
            if (UNSUPPORTED_CLAUDE_TOOLS.includes(trimmedTool)) {
                warnings.push(`Tool "${trimmedTool}" is not supported in Cursor and will be ignored`);
            }
            continue;
        }
        if (cursorTool !== void 0) {
            if (!transformedTools.includes(cursorTool)) {
                transformedTools.push(cursorTool);
            }
        } else {
            transformedTools.push(trimmedTool);
        }
    }
    for (const warning of warnings){
        logger146.warn(warning);
    }
    if (transformedTools.length === 0) {
        return null;
    }
    return transformedTools.join("|");
}
function transformHookScript(claudeScript, matcher) {
    const base = {
        loop_limit: null,
        failClosed: false
    };
    if (matcher && matcher !== "*") {
        base.matcher = matcher;
    }
    if (claudeScript.timeout !== void 0) {
        base.timeout = claudeScript.timeout;
    }
    if (claudeScript.type === "prompt") {
        if (!claudeScript.prompt) {
            return null;
        }
        return {
            type: "prompt",
            prompt: claudeScript.prompt,
            ...base
        };
    }
    if (!claudeScript.command) {
        return null;
    }
    return {
        type: "command",
        command: claudeScript.command,
        ...base
    };
}
function transformHookEntry(entry, event, logger146 = noopLogger) {
    const result = [];
    const usesToolMatcher = event === "PreToolUse" || event === "PostToolUse";
    let effectiveMatcher;
    if (usesToolMatcher) {
        const transformed = transformToolMatcher(entry.matcher, logger146);
        if (transformed === null) {
            logger146.warn(`All tools in matcher "${entry.matcher}" are unsupported, skipping hooks`);
            return [];
        }
        effectiveMatcher = transformed === "*" ? void 0 : transformed;
    } else if (event === "SessionStart" || event === "PreCompact") {
        if (entry.matcher && entry.matcher !== "*" && entry.matcher !== "" && (event === "SessionStart" ? [
            "startup",
            "resume",
            "clear",
            "compact"
        ].includes(entry.matcher) : [
            "manual",
            "auto"
        ].includes(entry.matcher))) {
            logger146.warn(`${event} trigger matcher "${entry.matcher}" is not supported in Cursor, hooks will fire for all triggers`);
        }
        effectiveMatcher = void 0;
    } else {
        effectiveMatcher = void 0;
    }
    for (const claudeScript of entry.hooks){
        const transformed = transformHookScript(claudeScript, effectiveMatcher);
        if (transformed) {
            result.push(transformed);
        }
    }
    return result;
}
export function transformClaudeHooksToConfig(claudeHooks, logger146 = noopLogger) {
    const cursorHooks = {};
    for (const [eventName, entries] of Object.entries(claudeHooks)){
        const event = eventName;
        if (UNSUPPORTED_CLAUDE_EVENTS.includes(event)) {
            logger146.warn(`Claude Code event "${event}" is not supported in Cursor and will be ignored`);
            continue;
        }
        const cursorStep = CLAUDE_EVENT_TO_CURSOR_STEP[event];
        if (!cursorStep) {
            logger146.warn(`Unknown Claude Code event "${event}", skipping`);
            continue;
        }
        const scripts = [];
        if (Array.isArray(entries)) {
            for (const entry of entries){
                const transformedScripts = transformHookEntry(entry, event, logger146);
                scripts.push(...transformedScripts);
            }
        } else if (entries !== void 0) {
            logger146.warn(`Claude Code event "${event}" has invalid value (expected array), skipping`);
        }
        if (scripts.length > 0) {
            const existingScripts = cursorHooks[cursorStep] || [];
            cursorHooks[cursorStep] = [
                ...existingScripts,
                ...scripts
            ];
        }
    }
    return {
        version: 1,
        hooks: cursorHooks
    };
}
export function detectHooksSchema(obj) {
    if (typeof obj !== "object" || obj === null) {
        return "unknown";
    }
    const config2 = obj;
    const hooksObj = typeof config2.hooks === "object" && config2.hooks !== null ? config2.hooks : null;
    if (!hooksObj) {
        return "unknown";
    }
    for (const value of Object.values(hooksObj)){
        if (!Array.isArray(value) || value.length === 0) {
            continue;
        }
        const firstEntry = value[0];
        if (typeof firstEntry !== "object" || firstEntry === null) {
            continue;
        }
        const entry = firstEntry;
        if ("hooks" in entry && Array.isArray(entry.hooks)) {
            return "claude-code";
        }
        if ("command" in entry || "prompt" in entry || "type" in entry) {
            return "cursor";
        }
    }
    return "unknown";
}
export function extractToolName(step, request3) {
    switch(step){
        case "beforeShellExecution":
        case "afterShellExecution":
            {
                const shellRequest = request3;
                return shellRequest.command || void 0;
            }
        case "beforeMCPExecution":
        case "afterMCPExecution":
            {
                const mcpRequest = request3;
                return mcpRequest.tool_name ? `MCP:${mcpRequest.tool_name}` : void 0;
            }
        case "beforeReadFile":
            return "Read";
        case "afterFileEdit":
            return "Write";
        case "beforeTabFileRead":
            return "TabRead";
        case "afterTabFileEdit":
            return "TabWrite";
        case "beforeSubmitPrompt":
            return "UserPromptSubmit";
        case "stop":
            return "Stop";
        case "afterAgentResponse":
            return "AgentResponse";
        case "afterAgentThought":
            return "AgentThought";
        case "subagentStart":
            {
                const subagentStartRequest = request3;
                return subagentStartRequest.subagent_type || void 0;
            }
        case "subagentStop":
            {
                const subagentStopRequest = request3;
                return subagentStopRequest.subagent_type || void 0;
            }
        case "preToolUse":
        case "postToolUse":
        case "postToolUseFailure":
            {
                const toolRequest = request3;
                return toolRequest.tool_name || void 0;
            }
        default:
            return void 0;
    }
}
function shouldRunHook(script, toolName) {
    if (!script.matcher || script.matcher === "" || script.matcher === "*") {
        return true;
    }
    if (toolName === void 0) {
        return true;
    }
    try {
        const regex = new RegExp(script.matcher);
        return regex.test(toolName);
    } catch  {
        return true;
    }
}
export function filterScriptsByMatcher(scripts, toolName) {
    return scripts.filter((script)=>shouldRunHook(script, toolName));
}
export function validateOptionalString(value, fieldName, errors) {
    if (value !== void 0 && !isString(value)) {
        errors.push(`${fieldName} must be a string if provided`);
    }
}
export function toBaseHookModelFields(context2) {
    const modelId = context2.modelId;
    const modelParams = context2.modelParams;
    return {
        ...modelId !== void 0 && {
            model_id: modelId
        },
        ...modelParams !== void 0 && modelParams.length > 0 ? {
            model_params: modelParams.map((param)=>({
                    id: param.id,
                    value: param.value
                }))
        } : {}
    };
}
export function isPromptHook(hook) {
    return hook.type === "prompt";
}
export function isCommandHook(hook) {
    return hook.type === "command" || hook.type === void 0;
}
export function isWorkspaceLifecycleStep(step) {
    return WORKSPACE_LIFECYCLE_STEPS.includes(step);
}
function mergePermission(existing, incoming) {
    if (existing === "deny" || incoming === "deny") {
        return "deny";
    }
    if (existing === "ask" || incoming === "ask") {
        return "ask";
    }
    if (existing === "allow" || incoming === "allow") {
        return "allow";
    }
    return void 0;
}
function concatenateMessages(existing, incoming) {
    const parts = [];
    if (existing?.trim()) {
        parts.push(existing.trim());
    }
    if (incoming?.trim()) {
        parts.push(incoming.trim());
    }
    return parts.length > 0 ? parts.join("\n\n---\n\n") : void 0;
}
function mergeEnvObjects(existing, incoming) {
    if (!existing && !incoming) {
        return void 0;
    }
    return {
        ...existing || {},
        ...incoming || {}
    };
}
export function mergeHookResponses(step, responses) {
    if (responses.length === 0) {
        return void 0;
    }
    if (responses.length === 1) {
        return responses[0];
    }
    const isPermissionHook2 = PERMISSION_HOOK_STEPS.includes(step);
    const isSessionStartHook = step === HookStep.sessionStart;
    const isWorkspaceOpenHook = step === HookStep.workspaceOpen;
    const isAdditionalContextHook = HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT.has(step);
    const merged = {};
    for (const response of responses){
        const responseObj = response;
        for (const [key, value] of Object.entries(responseObj)){
            if (value === void 0) {
                continue;
            }
            if (isWorkspaceOpenHook && key === "pluginPaths" && Array.isArray(value)) {
                const existing = merged[key] ?? [];
                const seen = new Set(existing);
                const next = [
                    ...existing
                ];
                for (const entry of value){
                    if (typeof entry === "string" && !seen.has(entry)) {
                        seen.add(entry);
                        next.push(entry);
                    }
                }
                merged[key] = next;
                continue;
            }
            if (key === "permission" && isPermissionHook2) {
                merged[key] = mergePermission(merged[key], value);
                continue;
            }
            if (key === "user_message" || key === "agent_message") {
                merged[key] = concatenateMessages(merged[key], value);
                continue;
            }
            if (isAdditionalContextHook && key === "additional_context" && typeof value === "string") {
                merged[key] = concatenateMessages(merged[key], value);
                continue;
            }
            if (key === "continue" && typeof value === "boolean") {
                if (merged[key] === void 0) {
                    merged[key] = value;
                } else {
                    merged[key] = merged[key] && value;
                }
                continue;
            }
            if (isSessionStartHook) {
                if (key === "env" && typeof value === "object" && value !== null) {
                    merged[key] = mergeEnvObjects(merged[key], value);
                    continue;
                }
            }
            merged[key] = value;
        }
    }
    return merged;
}
function isPermissionHook(step) {
    return PERMISSION_HOOK_STEPS.includes(step);
}
export function getInvalidHookOutputBlockDecision({ step, command, failClosed, kind }) {
    const permissionHook = isPermissionHook(step);
    if (!failClosed && !permissionHook) {
        return {
            shouldNotifyUser: false
        };
    }
    const invalidOutputReason = kind === "invalid_json" ? `Hook "${command}" returned invalid JSON.` : `Hook "${command}" returned invalid response.`;
    const reason = failClosed ? `Tool blocked because this hook is configured to fail closed (block when it fails). ${invalidOutputReason}` : kind === "invalid_json" ? `Hook "${command}" returned invalid JSON. The command was blocked for safety.` : `Hook "${command}" returned an invalid response for this hook step. The command was blocked for safety.`;
    const blockResponse = createBlockResponse(step, reason);
    return {
        blockResponse,
        cause: failClosed ? "script_fail_closed" : "permission_hook_invalid_output",
        reason,
        shouldNotifyUser: permissionHook && !failClosed
    };
}
export function getBlockReason(stdout, stderr, command) {
    const trimmedStdout = stdout.trim();
    const trimmedStderr = stderr.trim();
    if (trimmedStdout) {
        return trimmedStdout;
    }
    if (trimmedStderr) {
        return `Hook blocked with message: ${trimmedStderr}`;
    }
    return `Hook "${command}" blocked this action (exit code 2) but provided no reason.`;
}
export function createBlockResponse(step, reason) {
    if (isPermissionHook(step)) {
        return {
            permission: "deny",
            user_message: reason
        };
    }
    if (step === HookStep.beforeSubmitPrompt) {
        return {
            continue: false,
            user_message: reason
        };
    }
    if (step === HookStep.sessionStart) {
        return {
            continue: false,
            user_message: reason
        };
    }
    if (step === HookStep.stop) {
        return {};
    }
    return void 0;
}
export function createAllowResponse(step) {
    if (isPermissionHook(step)) {
        return {
            permission: "allow"
        };
    }
    if (step === HookStep.beforeSubmitPrompt) {
        return {
            continue: true
        };
    }
    if (step === HookStep.sessionStart) {
        return {
            continue: true
        };
    }
    if (step === HookStep.stop) {
        return {};
    }
    return void 0;
}
function tryParseJson(text4) {
    try {
        return {
            value: JSON.parse(text4)
        };
    } catch  {
        return void 0;
    }
}
export function parseHookStdoutJson(stdout) {
    const trimmed = stdout.trim();
    if (trimmed.length === 0) {
        return void 0;
    }
    const direct = tryParseJson(trimmed);
    if (direct !== void 0) {
        return direct.value;
    }
    if (!trimmed.endsWith("}")) {
        return void 0;
    }
    for(let i = trimmed.length - 1; i >= 0; i--){
        if (trimmed[i] !== "{") {
            continue;
        }
        const parsed = tryParseJson(trimmed.slice(i));
        if (parsed !== void 0) {
            return parsed.value;
        }
    }
    return void 0;
}
function isClaudeNestedHookSpecificOutputCompatibilityEnabled(options2) {
    return options2?.enableClaudeNestedHookSpecificOutputCompatibility ?? false;
}
function isObject2(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}
function getHookSpecificOutput(raw) {
    if (!isObject2(raw)) {
        return void 0;
    }
    const hookSpecificOutput = raw.hookSpecificOutput;
    return isObject2(hookSpecificOutput) ? hookSpecificOutput : void 0;
}
function isUsableHookSpecificOutputForStep(hookSpecificOutput, expectedHookEventName) {
    if (!hookSpecificOutput) {
        return false;
    }
    const declaredName = hookSpecificOutput.hookEventName;
    if (declaredName === void 0 || declaredName === "") {
        return true;
    }
    return declaredName === expectedHookEventName;
}
function normalizePreToolUseResponseInternal(raw, options2) {
    if (!isObject2(raw)) {
        return raw;
    }
    const response = raw;
    if (response.permission !== void 0 || response.user_message !== void 0 || response.agent_message !== void 0 || response.updated_input !== void 0) {
        return response;
    }
    if (!isClaudeNestedHookSpecificOutputCompatibilityEnabled(options2)) {
        return response;
    }
    const hookSpecificOutput = getHookSpecificOutput(raw);
    if (!isUsableHookSpecificOutputForStep(hookSpecificOutput, "PreToolUse")) {
        return response;
    }
    const normalized = {
        ...response
    };
    let didNormalize = false;
    if (hookSpecificOutput.permissionDecision !== void 0) {
        normalized.permission = hookSpecificOutput.permissionDecision;
        didNormalize = true;
    }
    if (typeof hookSpecificOutput.permissionDecisionReason === "string") {
        normalized.user_message = hookSpecificOutput.permissionDecisionReason;
        didNormalize = true;
    }
    if (isObject2(hookSpecificOutput.updatedInput)) {
        normalized.updated_input = hookSpecificOutput.updatedInput;
        didNormalize = true;
    }
    return didNormalize ? normalized : response;
}
function getTopLevelAdditionalContext(raw) {
    return typeof raw.additionalContext === "string" ? raw.additionalContext : void 0;
}
function getNestedAdditionalContext(step, raw, options2) {
    if (!isClaudeNestedHookSpecificOutputCompatibilityEnabled(options2)) {
        return void 0;
    }
    const expectedHookEventName = CURSOR_STEP_TO_CLAUDE_EVENT[step];
    if (expectedHookEventName === void 0) {
        return void 0;
    }
    const hookSpecificOutput = getHookSpecificOutput(raw);
    if (!isUsableHookSpecificOutputForStep(hookSpecificOutput, expectedHookEventName)) {
        return void 0;
    }
    return typeof hookSpecificOutput.additionalContext === "string" ? hookSpecificOutput.additionalContext : void 0;
}
function normalizeAdditionalContextForStep(step, raw, response, options2) {
    if (!HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT.has(step) || !isObject2(response) || response.additional_context !== void 0) {
        return response;
    }
    const additionalContext = isObject2(raw) ? getTopLevelAdditionalContext(raw) ?? getNestedAdditionalContext(step, raw, options2) : void 0;
    if (additionalContext === void 0) {
        return response;
    }
    return {
        ...response,
        additional_context: additionalContext
    };
}
function normalizeStopResponseInternal(raw, options2, expectedHookEventName) {
    if (!isObject2(raw)) {
        return raw;
    }
    const response = raw;
    if (response.followup_message !== void 0) {
        return response;
    }
    if (response.decision === "block" && typeof response.reason === "string" && response.reason.trim().length > 0) {
        return {
            ...response,
            followup_message: response.reason.trim()
        };
    }
    if (!isClaudeNestedHookSpecificOutputCompatibilityEnabled(options2)) {
        return response;
    }
    const hookSpecificOutput = getHookSpecificOutput(raw);
    const usableHookSpecificOutput = isUsableHookSpecificOutputForStep(hookSpecificOutput, expectedHookEventName) ? hookSpecificOutput : void 0;
    const candidate = usableHookSpecificOutput !== void 0 ? {
        ...response,
        ...usableHookSpecificOutput
    } : response;
    if (candidate.decision === "block" && typeof candidate.reason === "string" && candidate.reason.trim().length > 0) {
        return {
            ...candidate,
            followup_message: candidate.reason.trim()
        };
    }
    return response;
}
export function normalizeHookResponse(step, raw, options2) {
    let normalized;
    if (step === HookStep.preToolUse) {
        normalized = normalizePreToolUseResponseInternal(raw, options2);
    } else if (step === HookStep.stop) {
        normalized = normalizeStopResponseInternal(raw, options2, "Stop");
    } else if (step === HookStep.subagentStop) {
        normalized = normalizeStopResponseInternal(raw, options2, "SubagentStop");
    } else {
        normalized = raw;
    }
    return normalizeAdditionalContextForStep(step, raw, normalized, options2);
}
export function sanitizeSystemReminderContent(content) {
    return content.replace(SYSTEM_REMINDER_TAG_PATTERN, (_match, slash)=>`<${slash}system_reminder_>`);
}
export function buildWindowsHookPipelineCommand(tempPayloadPath, command) {
    const escapedTempPath = tempPayloadPath.replace(/'/g, "''");
    const invokedCommand = ensureCallOperatorForQuotedPath(command);
    return `$OutputEncoding = [System.Text.Encoding]::UTF8; Get-Content -LiteralPath '${escapedTempPath}' -Raw | & { $input | ${invokedCommand} }`;
}
function parseWindowsHookProgramToken(command) {
    let index = 0;
    while(index < command.length && /\s/.test(command.charAt(index))){
        index++;
    }
    if (command.charAt(index) === "&") {
        index++;
        while(index < command.length && /\s/.test(command.charAt(index))){
            index++;
        }
    }
    const prefix = command.slice(0, index);
    const firstChar = command.charAt(index);
    if (firstChar === "'" || firstChar === '"') {
        let closing = command.indexOf(firstChar, index + 1);
        while(firstChar === "'" && closing !== -1 && command.charAt(closing + 1) === "'"){
            closing = command.indexOf("'", closing + 2);
        }
        if (closing === -1) {
            return void 0;
        }
        return {
            prefix,
            quote: firstChar,
            rawPath: command.slice(index + 1, closing),
            rest: command.slice(closing + 1)
        };
    }
    const bareMatch = /^\S+/.exec(command.slice(index));
    if (!bareMatch) {
        return void 0;
    }
    return {
        prefix,
        quote: "",
        rawPath: bareMatch[0],
        rest: command.slice(index + bareMatch[0].length)
    };
}
function isWindowsRootedPath(candidate) {
    return /^[A-Za-z]:[\\/]/.test(candidate) || candidate.startsWith("\\") || candidate.startsWith("/");
}
export function resolveWindowsHookCommandExecutable(command, options2) {
    const token = parseWindowsHookProgramToken(command);
    if (!token) {
        return command;
    }
    const { prefix, quote, rawPath, rest } = token;
    if (rawPath.length === 0 || !/[\\/]/.test(rawPath)) {
        return command;
    }
    if (rest.length > 0 && !/^\s/.test(rest)) {
        return command;
    }
    if (/[$`{}()|;,<>]/.test(rawPath) || quote === "" && /['"]/.test(rawPath)) {
        return command;
    }
    const baseName = rawPath.slice(Math.max(rawPath.lastIndexOf("\\"), rawPath.lastIndexOf("/")) + 1);
    if (baseName.length === 0 || baseName.includes(".")) {
        return command;
    }
    const literalPath = quote === "'" ? rawPath.replace(/''/g, "'") : rawPath;
    const absolutePath = isWindowsRootedPath(literalPath) ? literalPath : `${options2.cwd.replace(/[\\/]+$/, "")}\\${literalPath}`;
    const extension3 = WINDOWS_HOOK_EXECUTABLE_EXTENSIONS.find((candidate)=>options2.isFile(absolutePath + candidate));
    if (extension3 === void 0) {
        return command;
    }
    if (quote !== "") {
        return `${prefix}${quote}${rawPath}${extension3}${quote}${rest}`;
    }
    return `${prefix}'${rawPath}${extension3}'${rest}`;
}
export function ensureCallOperatorForQuotedPath(command) {
    const trimmed = command.trimStart();
    if (trimmed.length === 0) {
        return command;
    }
    if (trimmed.startsWith("&")) {
        return command;
    }
    const firstChar = trimmed.charAt(0);
    if (firstChar === "'" || firstChar === '"') {
        return `& ${command}`;
    }
    return command;
}
export function protoAttachmentsToPromptAttachments(protoAttachments) {
    return protoAttachments.flatMap((attachment)=>attachment.type === "file" || attachment.type === "rule" ? [
            {
                type: attachment.type,
                file_path: attachment.filePath
            }
        ] : []);
}
export function supportsInteractiveMcpAuth(serverIdentifier) {
    return !NON_AUTHENTICATABLE_MCP_PROVIDER_IDS.has(serverIdentifier);
}
export function encodeMcpMetaJson(meta) {
    if (meta === void 0 || Object.keys(meta).length === 0) {
        return void 0;
    }
    try {
        return JSON.stringify(meta);
    } catch  {
        return void 0;
    }
}
export function buildMcpToolFileContent(tool) {
    return {
        name: tool.toolName,
        description: tool.description,
        arguments: tool.inputSchema,
        outputSchema: tool.outputSchema,
        plugin: tool.plugin,
        marketplace: tool.marketplace,
        pluginId: tool.pluginId,
        marketplaceId: tool.marketplaceId
    };
}
function parseMcpInputSchemaJson(inputSchemaJson) {
    if (inputSchemaJson === void 0) {
        return void 0;
    }
    try {
        return JSON.parse(inputSchemaJson);
    } catch  {
        return void 0;
    }
}
export function parseMcpOutputSchemaJson(outputSchemaJson) {
    return parseMcpInputSchemaJson(outputSchemaJson);
}
export function mcpInputSchemaToJson(tool) {
    return parseMcpInputSchemaJson(tool.inputSchemaJson) ?? tool.inputSchema?.toJson();
}
export function isFullMcpLeaseInvalidation(e) {
    return e === void 0 || e.serverIdentifiers === void 0;
}
export function mergeMcpLeaseEvents(...events) {
    const [a, b2] = events;
    if (events.length < 2) {
        return a;
    }
    if (isFullMcpLeaseInvalidation(b2)) {
        return {
            serverIdentifiers: void 0,
            reason: a?.reason ?? b2?.reason
        };
    }
    if (a === void 0) {
        return b2;
    }
    if (isFullMcpLeaseInvalidation(a)) {
        return {
            serverIdentifiers: void 0,
            reason: a.reason ?? b2?.reason
        };
    }
    return {
        serverIdentifiers: [
            ...new Set([
                ...a.serverIdentifiers ?? [],
                ...b2?.serverIdentifiers ?? []
            ])
        ],
        reason: a.reason ?? b2?.reason
    };
}
export function mcpServerUnavailableReason(status) {
    switch(status){
        case "needsAuth":
            return "This MCP server requires authentication before its tools can be used.";
        case "error":
            return "This MCP server failed during live tool discovery. Its tools are unavailable until the connection is fixed.";
        case "loading":
            return "This MCP server is still loading; tools may not be available yet.";
        default:
            return void 0;
    }
}
export function mcpClientStateToServerStatus(state) {
    switch(state.kind){
        case "ready":
            return "connected";
        case "requires_authentication":
            return "needsAuth";
        case "error":
            return "error";
        default:
            return "loading";
    }
}
export function parseMcpToolNameFromDiskDefinitionJson(jsonText) {
    try {
        const parsed = JSON.parse(jsonText);
        if (typeof parsed.name === "string" && parsed.name.length > 0) {
            return parsed.name;
        }
        if (typeof parsed.toolName === "string" && parsed.toolName.length > 0) {
            return parsed.toolName;
        }
        return void 0;
    } catch  {
        return void 0;
    }
}
async function utf8Digest(text4) {
    const encoded = utf8.encode(text4);
    const digest = await crypto.subtle.digest("SHA-256", encoded);
    return {
        sha256: [
            ...new Uint8Array(digest)
        ].map((byte)=>byte.toString(16).padStart(2, "0")).join(""),
        bytes: encoded.byteLength
    };
}
export async function toDigestOnlyReadResult(result) {
    if (result.result.case !== "success") {
        return result;
    }
    const success = result.result.value;
    if (success.output.case !== "content") {
        return result;
    }
    const { sha256: sha2562, bytes } = await utf8Digest(success.output.value);
    return new ReadResult({
        result: {
            case: "success",
            value: new ReadSuccess({
                ...success,
                output: {
                    case: void 0
                },
                outputBlobId: void 0,
                sha256: sha2562,
                sizeBytes: BigInt(bytes)
            })
        }
    });
}
function parseSymbolicPathArgument(value) {
    if (typeof value !== "string" || !value.startsWith(SYMBOLIC_PATH_ARGUMENT_PREFIX)) {
        return void 0;
    }
    const path64 = value.slice(SYMBOLIC_PATH_ARGUMENT_PREFIX.length);
    return isAbsolutePath(path64) ? path64 : void 0;
}
export function collectSymbolicPathArguments(args) {
    const paths = new Set();
    const visit2 = (value)=>{
        const path64 = parseSymbolicPathArgument(value);
        if (path64 !== void 0) {
            paths.add(path64);
        } else if (Array.isArray(value)) {
            value.forEach(visit2);
        } else if (value !== null && typeof value === "object") {
            Object.values(value).forEach(visit2);
        }
    };
    visit2(args);
    return [
        ...paths
    ];
}
function substituteSymbolicPathArguments(args, contents) {
    const substitute = (value)=>{
        const path64 = parseSymbolicPathArgument(value);
        if (path64 !== void 0) {
            return contents.get(path64) ?? value;
        }
        if (Array.isArray(value)) {
            return value.map(substitute);
        }
        if (value !== null && typeof value === "object") {
            return Object.fromEntries(Object.entries(value).map(([key, item])=>[
                    key,
                    substitute(item)
                ]));
        }
        return value;
    };
    return Object.fromEntries(Object.entries(args).map(([key, item])=>[
            key,
            substitute(item)
        ]));
}
function failure(kind, path64, reason) {
    return {
        kind,
        message: `Could not resolve the symbolic argument "${SYMBOLIC_PATH_ARGUMENT_PREFIX}${path64}": ${reason} A string argument of the form "${SYMBOLIC_PATH_ARGUMENT_PREFIX}/absolute/path" is replaced with that file's contents before the tool runs; pass the literal text instead if you did not intend that.`
    };
}
async function readSymbolicPath(ctx, readExecutor, path64, toolCallId, maxFileBytes, digestOnly) {
    const result = await readExecutor.execute(ctx, new ReadArgs({
        path: path64,
        toolCallId,
        ...digestOnly ? {
            digestOnly: true
        } : {}
    }));
    switch(result.result.case){
        case "success":
            {
                const success = result.result.value;
                const vmDigest = digestOnly && success.sha256 !== void 0 && success.sizeBytes !== void 0 ? {
                    sha256: success.sha256,
                    bytes: Number(success.sizeBytes)
                } : void 0;
                if (vmDigest === void 0 && success.output.case !== "content") {
                    throw new SymbolicPathReadError(failure("not_text", path64, "the file is not a text file."));
                }
                if (digestOnly) {
                    describeReads.increment(ctx, 1, {
                        source: vmDigest !== void 0 ? "vm_digest" : "outdated_executor"
                    });
                    if (vmDigest === void 0) {
                        throw new SymbolicPathReadError(failure("outdated_executor", path64, "the computer that would run this tool has an older tool runner that cannot substitute files. Read the file and pass its contents instead."));
                    }
                }
                const content = success.output.case === "content" ? success.output.value : void 0;
                const { sha256: sha2562, bytes } = vmDigest ?? await utf8Digest(content ?? "");
                if (success.truncated || bytes > maxFileBytes) {
                    throw new SymbolicPathReadError(failure("too_large", path64, `the file is too large to inline (${Number(success.fileSize) || bytes} bytes; at most ${maxFileBytes} bytes per file may be substituted). Pass the path to a tool that accepts one, or read a range of it.`));
                }
                return {
                    content,
                    bytes,
                    sha256: sha2562
                };
            }
        case "fileNotFound":
            throw new SymbolicPathReadError(failure("not_found", path64, "the file does not exist."));
        case "permissionDenied":
            throw new SymbolicPathReadError(failure("permission_denied", path64, "reading it was not permitted."));
        case "rejected":
            throw new SymbolicPathReadError(failure("rejected", path64, `${result.result.value.reason || "the read was rejected"}. Only files the Read tool can read without approval can be substituted; read it with Read instead.`));
        case "invalidFile":
            throw new SymbolicPathReadError(failure("not_text", path64, "the file cannot be read as text."));
        case "error":
            throw new SymbolicPathReadError(failure("read_error", path64, result.result.value.error));
        default:
            throw new SymbolicPathReadError(failure("read_error", path64, "the read returned no result."));
    }
}
async function readSymbolicPaths(ctx, paths, getReadExecutor, toolCallId, digestOnly, { maxFileBytes = SYMBOLIC_PATH_ARGUMENT_MAX_FILE_BYTES, maxTotalBytes = SYMBOLIC_PATH_ARGUMENTS_MAX_TOTAL_BYTES }) {
    if (paths.length > SYMBOLIC_PATH_ARGUMENTS_MAX_COUNT) {
        throw new SymbolicPathReadError(failure("too_many", paths[SYMBOLIC_PATH_ARGUMENTS_MAX_COUNT] ?? "", `at most ${SYMBOLIC_PATH_ARGUMENTS_MAX_COUNT} symbolic arguments may be used in one call (${paths.length} given). Split the call or pass paths to tools that accept them.`));
    }
    const readExecutor = getReadExecutor();
    if (readExecutor === void 0) {
        throw new SymbolicPathReadError(failure("no_read_executor", paths[0] ?? "", "this environment cannot read files on behalf of a tool call."));
    }
    const files = await asyncMap(paths, (path64)=>readSymbolicPath(ctx, readExecutor, path64, toolCallId, maxFileBytes, digestOnly), {
        max: SYMBOLIC_PATH_ARGUMENTS_MAX_COUNT
    });
    let totalBytes = 0;
    for (const [path64, file] of files){
        totalBytes += file.bytes;
        if (totalBytes > maxTotalBytes) {
            throw new SymbolicPathReadError(failure("over_budget", path64, `together the ${paths.length} symbolic arguments exceed the ${maxTotalBytes} bytes that may be substituted per call. Pass paths to tools that accept them instead.`));
        }
    }
    return files;
}
function asFailure(error3, path64) {
    return error3 instanceof SymbolicPathReadError ? error3.failure : failure("read_error", path64, error3 instanceof Error ? error3.message : String(error3));
}
export async function describeSymbolicPathArguments(ctx, { paths, getReadExecutor, toolCallId, ...caps }) {
    const unique = [
        ...new Set(paths)
    ];
    try {
        const files = await readSymbolicPaths(ctx, unique, getReadExecutor, toolCallId, true, caps);
        expansionOutcomes.increment(ctx, 1, {
            route: "review",
            outcome: "described"
        });
        return {
            kind: "described",
            descriptors: unique.map((path64)=>{
                const file = files.get(path64);
                return new McpSymbolicPathArgument({
                    path: path64,
                    sha256: file?.sha256 ?? "",
                    sizeBytes: BigInt(file?.bytes ?? 0)
                });
            })
        };
    } catch (error3) {
        const failureToReport = asFailure(error3, unique[0] ?? "");
        expansionOutcomes.increment(ctx, 1, {
            route: "review",
            outcome: failureToReport.kind
        });
        return {
            kind: "failed",
            failure: failureToReport
        };
    }
}
export async function expandSymbolicPathArguments(ctx, args, { route, getReadExecutor, ...caps }) {
    if (args.symbolicPathArguments.length === 0) {
        return {
            kind: "none"
        };
    }
    const descriptors = new Map(args.symbolicPathArguments.map((d)=>[
            d.path,
            d
        ]));
    const paths = [
        ...descriptors.keys()
    ];
    const fail3 = (failureToReport)=>{
        expansionOutcomes.increment(ctx, 1, {
            route,
            outcome: failureToReport.kind
        });
        return {
            kind: "failed",
            failure: failureToReport,
            result: new McpResult({
                result: {
                    case: "error",
                    value: new McpError({
                        error: failureToReport.message
                    })
                }
            })
        };
    };
    let files;
    try {
        files = await readSymbolicPaths(ctx, paths, getReadExecutor, args.toolCallId, false, caps);
    } catch (error3) {
        return fail3(asFailure(error3, paths[0] ?? ""));
    }
    let totalBytes = 0;
    for (const [path64, file] of files){
        totalBytes += file.bytes;
        const reviewed = descriptors.get(path64);
        if (reviewed?.sha256 !== file.sha256) {
            return fail3(failure("content_changed", path64, `the file changed after the call was reviewed (${reviewed?.sizeBytes ?? 0} bytes then, ${file.bytes} bytes now), so its new contents were not sent. Re-run the call to review the current contents.`));
        }
    }
    const contents = new Map([
        ...files
    ].map(([path64, file])=>[
            path64,
            file.content ?? ""
        ]));
    const jsonArgs = Object.fromEntries(Object.entries(args.args).map(([key, value])=>[
            key,
            value.toJson()
        ]));
    const substituted = substituteSymbolicPathArguments(jsonArgs, contents);
    const expanded = args.clone();
    expanded.args = Object.fromEntries(Object.entries(substituted).map(([key, value])=>[
            key,
            Value.fromJson(value)
        ]));
    expanded.symbolicPathArguments = [];
    expansionOutcomes.increment(ctx, 1, {
        route,
        outcome: "expanded"
    });
    expansionBytes.record(ctx, totalBytes, {
        route
    });
    expansionPaths.record(ctx, paths.length, {
        route
    });
    return {
        kind: "expanded",
        expansion: {
            args: expanded,
            files: [
                ...files
            ].map(([path64, file])=>({
                    path: path64,
                    bytes: file.bytes
                })),
            paths: paths.length,
            bytes: totalBytes
        }
    };
}
export function describeExpandedCallFailure(ctx, message, expansion, route) {
    if (!BODY_REJECTION_PATTERN.test(message)) {
        return message;
    }
    expansionOutcomes.increment(ctx, 1, {
        route,
        outcome: "server_rejected_body"
    });
    return `${message}

The request carried ${expansion.bytes} bytes of file contents substituted from ${expansion.paths} "${SYMBOLIC_PATH_ARGUMENT_PREFIX}/abs/path" argument(s), and the server appears to have rejected the request body as too large. Do not retry the same call: pass a smaller file or a range of it, or use a tool that accepts a path or upload instead.`;
}
function describeExpandedFiles(expansion) {
    return expansion.files.map((file)=>`"${SYMBOLIC_PATH_ARGUMENT_PREFIX}${file.path}" was replaced with the contents of ${file.path} (${file.bytes} bytes) before the call.`).join("\n");
}
export function annotateExpandedCallResult(ctx, result, expansion, route) {
    const annotated = result.clone();
    if (annotated.result.case === "success") {
        annotated.result.value.content.push(new McpToolResultContentItem({
            content: {
                case: "text",
                value: new McpTextContent({
                    text: describeExpandedFiles(expansion)
                })
            }
        }));
    } else if (annotated.result.case === "error") {
        annotated.result.value.error = describeExpandedCallFailure(ctx, annotated.result.value.error, expansion, route);
    }
    return annotated;
}
function createReadonlyShellPermissionDenied(errorMessage4, args) {
    return new ShellPermissionDenied({
        command: args.command ?? "",
        workingDirectory: args.workingDirectory ?? "",
        error: errorMessage4,
        isReadonly: true
    });
}
function createReadonlyShellExecutor(errorMessage4) {
    return {
        async execute (_ctx, args) {
            return new ShellResult({
                result: {
                    case: "permissionDenied",
                    value: createReadonlyShellPermissionDenied(errorMessage4, args)
                }
            });
        }
    };
}
function createReadonlyShellStreamExecutor(errorMessage4) {
    return {
        async *execute (_ctx, args) {
            yield new ShellStream({
                event: {
                    case: "permissionDenied",
                    value: createReadonlyShellPermissionDenied(errorMessage4, args)
                }
            });
        }
    };
}
function createReadonlyBackgroundShellExecutor(errorMessage4) {
    return {
        async execute (_ctx, args) {
            return new BackgroundShellSpawnResult({
                result: {
                    case: "permissionDenied",
                    value: createReadonlyShellPermissionDenied(errorMessage4, args)
                }
            });
        }
    };
}
function createReadonlyWriteExecutor(errorMessage4) {
    return {
        async execute (_ctx, args) {
            return new WriteResult({
                result: {
                    case: "permissionDenied",
                    value: new WritePermissionDenied({
                        path: args.path,
                        error: errorMessage4,
                        isReadonly: true
                    })
                }
            });
        }
    };
}
function createReadonlyDeleteExecutor(errorMessage4) {
    return {
        async execute (_ctx, args) {
            return new DeleteResult({
                result: {
                    case: "permissionDenied",
                    value: new DeletePermissionDenied({
                        path: args.path,
                        clientVisibleError: errorMessage4,
                        isReadonly: true
                    })
                }
            });
        }
    };
}
function createReadonlyMcpExecutor(errorMessage4) {
    return {
        async execute (_ctx, args) {
            return new McpResult({
                result: {
                    case: "permissionDenied",
                    value: new McpPermissionDenied({
                        error: `${errorMessage4} Tool: ${args.name}`,
                        isReadonly: true
                    })
                }
            });
        }
    };
}
function createReadonlyWriteBackgroundShellStdinExecutor(errorMessage4) {
    return {
        async execute (_ctx, _args) {
            return new WriteShellStdinResult({
                result: {
                    case: "error",
                    value: new WriteShellStdinError({
                        error: errorMessage4
                    })
                }
            });
        }
    };
}
function buildReadonlyResourceEntries(args) {
    const localEntries = [
        [
            writeExecutorResource,
            createReadonlyWriteExecutor(args.errorMessage)
        ],
        [
            deleteExecutorResource,
            createReadonlyDeleteExecutor(args.errorMessage)
        ],
        [
            mcpExecutorResource,
            createReadonlyMcpExecutor(args.errorMessage)
        ]
    ];
    if (args.wrapShell) {
        localEntries.push([
            shellExecutorResource,
            createReadonlyShellExecutor(args.errorMessage)
        ], [
            shellStreamExecutorResource,
            createReadonlyShellStreamExecutor(args.errorMessage)
        ], [
            backgroundShellExecutorResource,
            createReadonlyBackgroundShellExecutor(args.errorMessage)
        ]);
    }
    if (args.includeWriteBackgroundShellStdin) {
        localEntries.push([
            writeBackgroundShellInputExecutorResource,
            createReadonlyWriteBackgroundShellStdinExecutor(args.errorMessage)
        ]);
    }
    return localEntries;
}
export function createReadonlyResourceAccessor(baseAccessor, wrapShell) {
    return new CombinedResourceAccessor(baseAccessor, buildReadonlyResourceEntries({
        errorMessage: READONLY_WRITE_ERROR_MESSAGE,
        wrapShell,
        includeWriteBackgroundShellStdin: false
    }));
}
export function createListableReadonlyResourceAccessor(baseAccessor) {
    return new ListableCombinedResourceAccessor(baseAccessor, buildReadonlyResourceEntries({
        errorMessage: READONLY_SDK_ERROR_MESSAGE,
        wrapShell: true,
        includeWriteBackgroundShellStdin: true
    }));
}
function partitionRequestContext(requestContext) {
    const dynamicContext = requestContext.clone();
    dynamicContext.rules = [];
    dynamicContext.nonFileRules = [];
    dynamicContext.cloudRule = void 0;
    dynamicContext.agentSkills = [];
    dynamicContext.skillOptions = void 0;
    dynamicContext.customSubagents = [];
    dynamicContext.tools = [];
    dynamicContext.mcpInstructions = [];
    dynamicContext.mcpFileSystemOptions = void 0;
    dynamicContext.mcpMetaToolOptions = void 0;
    return {
        dynamicContext,
        rules: new RequestContextRulesPart({
            rules: requestContext.rules.map((rule)=>rule.clone()),
            nonFileRules: requestContext.nonFileRules.map((rule)=>rule.clone()),
            cloudRule: requestContext.cloudRule
        }),
        skills: new RequestContextSkillsPart({
            agentSkills: requestContext.agentSkills.map((skill)=>skill.clone()),
            skillOptions: requestContext.skillOptions?.clone()
        }),
        subagents: new RequestContextSubagentsPart({
            customSubagents: requestContext.customSubagents.map((subagent)=>subagent.clone())
        }),
        mcps: new RequestContextMcpsPart({
            tools: requestContext.tools.map((tool)=>tool.clone()),
            mcpInstructions: requestContext.mcpInstructions.map((instruction)=>instruction.clone()),
            mcpFileSystemOptions: requestContext.mcpFileSystemOptions?.clone(),
            mcpMetaToolOptions: requestContext.mcpMetaToolOptions?.clone()
        })
    };
}
export function setShellHookApprovalRequirement(args, requirement) {
    if (requirement === void 0) {
        args.hookApprovalRequirement = void 0;
        return;
    }
    args.hookApprovalRequirement = new ShellHookApprovalRequirement(requirement);
}
export function getShellHookApprovalRequirement(args) {
    return args.hookApprovalRequirement;
}
export function createForcePromptHookApprovalRequirement(reason) {
    return new ShellHookApprovalRequirement({
        kind: ShellHookApprovalRequirement_Kind.FORCE_PROMPT,
        reason
    });
}
export function isForcePromptHookApprovalRequirement(requirement) {
    return requirement?.kind === ShellHookApprovalRequirement_Kind.FORCE_PROMPT;
}
export function isIntentionalAbortReason(reason) {
    return typeof reason === "object" && reason !== null && "intentional" in reason && reason.intentional === true;
}
function normalizePatternValue(value) {
    const normalized = value.trim().toLowerCase();
    if (normalized.startsWith("[") && normalized.endsWith("]")) {
        return normalized.slice(1, -1);
    }
    return normalized;
}
function tryParseUrl(url2) {
    const trimmed = url2.trim();
    if (trimmed.length === 0) {
        return void 0;
    }
    const urlToParse = trimmed.includes("://") ? trimmed : `https://${trimmed}`;
    try {
        return new URL(urlToParse);
    } catch  {
        return void 0;
    }
}
function tryParseIpv4(input) {
    const parts = input.split(".");
    if (parts.length !== 4) {
        return void 0;
    }
    let value = BIGINT_ZERO;
    for (const part of parts){
        if (!/^\d{1,3}$/.test(part)) {
            return void 0;
        }
        const octet = Number(part);
        if (!Number.isInteger(octet) || octet < 0 || octet > 255) {
            return void 0;
        }
        value = value << BIGINT_EIGHT | BigInt(octet);
    }
    return {
        version: 4,
        value
    };
}
function parseIpv6Groups(part) {
    if (part.length === 0) {
        return [];
    }
    const groups = [];
    const segments = part.split(":");
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        if (segment.length === 0) {
            return void 0;
        }
        if (segment.includes(".")) {
            if (i !== segments.length - 1) {
                return void 0;
            }
            const ipv42 = tryParseIpv4(segment);
            if (!ipv42) {
                return void 0;
            }
            groups.push(Number(ipv42.value >> BIGINT_SIXTEEN & IPV4_LOW_HEXTET_MASK));
            groups.push(Number(ipv42.value & IPV4_LOW_HEXTET_MASK));
            continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(segment)) {
            return void 0;
        }
        groups.push(Number.parseInt(segment, 16));
    }
    return groups;
}
function tryParseIpv6(input) {
    const normalized = normalizePatternValue(input);
    if (normalized.length === 0 || normalized.includes(":::")) {
        return void 0;
    }
    const doubleColonIndex = normalized.indexOf("::");
    if (doubleColonIndex === -1) {
        const groups2 = parseIpv6Groups(normalized);
        if (!groups2 || groups2.length !== 8) {
            return void 0;
        }
        return {
            version: 6,
            value: groups2.reduce((acc, group)=>acc << BIGINT_SIXTEEN | BigInt(group), BIGINT_ZERO)
        };
    }
    if (normalized.indexOf("::", doubleColonIndex + 1) !== -1) {
        return void 0;
    }
    const leftPart = normalized.slice(0, doubleColonIndex);
    const rightPart = normalized.slice(doubleColonIndex + 2);
    const leftGroups = parseIpv6Groups(leftPart);
    const rightGroups = parseIpv6Groups(rightPart);
    if (!leftGroups || !rightGroups) {
        return void 0;
    }
    const totalGroups = leftGroups.length + rightGroups.length;
    if (totalGroups > 7) {
        return void 0;
    }
    const groups = [
        ...leftGroups,
        ...new Array(8 - totalGroups).fill(0),
        ...rightGroups
    ];
    return {
        version: 6,
        value: groups.reduce((acc, group)=>acc << BIGINT_SIXTEEN | BigInt(group), BIGINT_ZERO)
    };
}
function tryParseIpAddress(input) {
    return tryParseIpv4(input) ?? tryParseIpv6(input);
}
function matchesCidrPattern(host, pattern) {
    const slashIndex = pattern.lastIndexOf("/");
    if (slashIndex <= 0 || slashIndex === pattern.length - 1) {
        return false;
    }
    const network = tryParseIpAddress(pattern.slice(0, slashIndex));
    const hostIp = tryParseIpAddress(host);
    if (!network || !hostIp || network.version !== hostIp.version) {
        return false;
    }
    const prefixLength = Number(pattern.slice(slashIndex + 1));
    const totalBits = network.version === 4 ? 32 : 128;
    if (!Number.isInteger(prefixLength) || prefixLength < 0 || prefixLength > totalBits) {
        return false;
    }
    const shift = BigInt(totalBits - prefixLength);
    return hostIp.value >> shift === network.value >> shift;
}
export function matchesDomainPattern(domain, pattern) {
    const normalizedDomain = normalizePatternValue(domain);
    const normalizedPattern = normalizePatternValue(pattern);
    if (normalizedPattern === "*") {
        return true;
    }
    if (normalizedPattern.includes("/")) {
        return matchesCidrPattern(normalizedDomain, normalizedPattern);
    }
    if (normalizedPattern.startsWith("*.")) {
        const suffix = normalizedPattern.slice(2);
        return normalizedDomain === suffix || normalizedDomain.endsWith(`.${suffix}`);
    }
    return normalizedDomain === normalizedPattern;
}
function isDomainAllowedByPatterns(domain, allowedDomains) {
    return allowedDomains.some((pattern)=>matchesDomainPattern(domain, pattern));
}
export function isUrlAllowedByPatterns(url2, allowedDomains) {
    const parsed = tryParseUrl(url2);
    if (!parsed) {
        return false;
    }
    return isDomainAllowedByPatterns(parsed.hostname, allowedDomains);
}
function goalWorkedMs(goalState) {
    return Number(goalState?.activeDurationMs ?? BigInt(0));
}
function goalElapsedMsFrom(accruedMs, accrualAnchorMs, nowMs2) {
    if (accrualAnchorMs === void 0) {
        return accruedMs;
    }
    return accruedMs + Math.max(0, nowMs2 - accrualAnchorMs);
}
export function goalElapsedMs(goalState, nowMs2) {
    const anchorMs = goalState?.lastAccruedAtMs;
    return goalElapsedMsFrom(goalWorkedMs(goalState), anchorMs === void 0 ? void 0 : Number(anchorMs), nowMs2);
}
export function goalClockOnActivation(goalState, nowMs2) {
    return {
        activeDurationMs: goalState?.activeDurationMs ?? BigInt(0),
        lastAccruedAtMs: BigInt(nowMs2)
    };
}
export function goalClockOnDeactivation(goalState, nowMs2) {
    return {
        activeDurationMs: BigInt(goalElapsedMs(goalState, nowMs2)),
        lastAccruedAtMs: void 0
    };
}
export function isGoalStateShapeValid(goalState, identity) {
    return goalState !== void 0 && isGoalIdentityValid(goalState, identity) && goalState.status === GOAL_STATUS_ACTIVE && GOAL_ID_PATTERN.test(goalState.goalId);
}
export function isGoalIdentityValid(goalState, identity) {
    return goalState.agentSessionId === void 0 ? goalState.conversationId === identity.conversationId : isGoalOwnerValid(goalState, identity.agentSessionId);
}
function isGoalOwnerValid(goalState, agentSessionId) {
    if (goalState.agentSessionId === void 0) {
        return true;
    }
    return goalState.agentSessionId.length > 0 && agentSessionId !== void 0 && agentSessionId.length > 0 && goalState.agentSessionId === agentSessionId;
}
export function buildGoalPursuitGuidelines(toolNames2 = {}) {
    const { todoWriteToolName, updateGoalToolName } = toolNames2;
    const progressVisibility = todoWriteToolName === void 0 ? "If the next work is meaningfully multi-step, keep a concise plan tied to the real objective and update it as steps complete or the next best action changes. Skip planning overhead for trivial one-step progress, and do not treat a plan update as a substitute for doing the work." : `If ${todoWriteToolName} is available and the next work is meaningfully multi-step, use it to show a concise plan tied to the real objective. Keep the plan current as steps complete or the next best action changes. Skip planning overhead for trivial one-step progress, and do not treat a plan update as a substitute for doing the work.`;
    const updateGoalGuidance = updateGoalToolName === void 0 ? "Do not mark a goal complete merely because you are stopping work." : `If the objective is achieved, call ${updateGoalToolName} with status "complete" so usage accounting is preserved.

Do not call ${updateGoalToolName} unless the goal is complete or the user paused the goal and wants to resume. Do not mark a goal complete merely because you are stopping work.`;
    return `Continuation behavior:
- This goal persists across turns. Ending this turn does not require shrinking the objective to what fits now.
- Keep the full objective intact. If it cannot be finished now, make concrete progress toward the real requested end state, leave the goal active, and do not redefine success around a smaller or easier task.
- Temporary rough edges are acceptable while the work is moving in the right direction. Completion still requires the requested end state to be true and verified.

Work from evidence:
Use the current working tree and external state as authoritative. Previous conversation context can help locate relevant work, but inspect the current state before relying on it. Improve, replace, or remove existing work as needed to satisfy the actual objective.

Progress visibility:
${progressVisibility}

Fidelity:
- Optimize each turn for movement toward the requested end state, not for the smallest stable-looking subset or easiest passing change.
- Do not substitute a narrower, safer, smaller, merely compatible, or easier-to-test solution because it is more likely to pass current tests.
- Treat alignment as movement toward the requested end state. An edit is aligned only if it makes the requested final state more true; useful-looking behavior that preserves a different end state is misaligned.

Completion audit:
Before deciding that the goal is achieved, treat completion as unproven and verify it against the actual current state:
- Derive concrete requirements from the objective and any referenced files, plans, specifications, issues, or user instructions.
- Preserve the original scope; do not redefine success around the work that already exists.
- For every explicit requirement, numbered item, named artifact, command, test, gate, invariant, and deliverable, identify the authoritative evidence that would prove it, then inspect the relevant current-state sources: files, command output, test results, PR state, rendered artifacts, runtime behavior, or other authoritative evidence.
- For each item, determine whether the evidence proves completion, contradicts completion, shows incomplete work, is too weak or indirect to verify completion, or is missing.
- Match the verification scope to the requirement's scope; do not use a narrow check to support a broad claim.
- Treat tests, manifests, verifiers, green checks, and search results as evidence only after confirming they cover the relevant requirement.
- Treat uncertain or indirect evidence as not achieved; gather stronger evidence or continue the work.
- The audit must prove completion, not merely fail to find obvious remaining work.

Do not rely on intent, partial progress, memory of earlier work, or a plausible final answer as proof of completion. Marking the goal complete is a claim that the full objective has been finished and can withstand requirement-by-requirement scrutiny. Only mark the goal achieved when current evidence proves every requirement has been satisfied and no required work remains. If the evidence is incomplete, weak, indirect, merely consistent with completion, or leaves any requirement missing, incomplete, or unverified, keep working instead of marking the goal complete. ${updateGoalGuidance}`;
}
export async function queryWebSearch(listener, ctx, args) {
    const resp = await listener.query(ctx, new InteractionQuery({
        query: {
            case: "webSearchRequestQuery",
            value: new WebSearchRequestQuery({
                args
            })
        }
    }));
    if (resp.result.case !== "webSearchRequestResponse" || !resp.result.value) {
        throw new Error(`Unexpected response for web search query: ${resp.result.case}`);
    }
    return resp.result.value;
}
export async function queryWebFetch(listener, ctx, args, options2) {
    const queryOptions = typeof options2 === "boolean" ? {
        skipApproval: options2
    } : options2 ?? {};
    const resp = await listener.query(ctx, new InteractionQuery({
        query: {
            case: "webFetchRequestQuery",
            value: new WebFetchRequestQuery({
                args,
                skipApproval: queryOptions.skipApproval ?? false,
                smartModeApproval: queryOptions.smartModeApproval
            })
        }
    }));
    if (resp.result.case !== "webFetchRequestResponse" || !resp.result.value) {
        throw new Error(`Unexpected response for web fetch query: ${resp.result.case}`);
    }
    return resp.result.value;
}
export async function queryAskQuestion(listener, ctx, args, toolCallId) {
    const resp = await listener.query(ctx, new InteractionQuery({
        query: {
            case: "askQuestionInteractionQuery",
            value: new AskQuestionInteractionQuery({
                args,
                toolCallId
            })
        }
    }));
    if (resp.result.case !== "askQuestionInteractionResponse" || !resp.result.value) {
        throw new Error(`Unexpected response for ask question query: ${resp.result.case}`);
    }
    return resp.result.value;
}
export async function querySwitchMode(listener, ctx, args) {
    const resp = await listener.query(ctx, new InteractionQuery({
        query: {
            case: "switchModeRequestQuery",
            value: new SwitchModeRequestQuery({
                args
            })
        }
    }));
    if (resp.result.case !== "switchModeRequestResponse" || !resp.result.value) {
        throw new Error(`Unexpected response for switch mode query: ${resp.result.case}`);
    }
    return resp.result.value;
}
export async function queryCreatePlan(listener, ctx, args, toolCallId) {
    const resp = await listener.query(ctx, new InteractionQuery({
        query: {
            case: "createPlanRequestQuery",
            value: new CreatePlanRequestQuery({
                args,
                toolCallId
            })
        }
    }));
    if (resp.result.case !== "createPlanRequestResponse" || !resp.result.value) {
        throw new Error(`Unexpected response for create plan query: ${resp.result.case}`);
    }
    return resp.result.value;
}
export async function querySetupVmEnvironment(listener, ctx, args) {
    const resp = await listener.query(ctx, new InteractionQuery({
        query: {
            case: "setupVmEnvironmentArgs",
            value: args
        }
    }));
    if (resp.result.case !== "setupVmEnvironmentResult" || !resp.result.value) {
        throw new Error(`Unexpected response for setup VM environment query: ${resp.result.case}`);
    }
    return resp.result.value;
}
export async function queryReplaceEnv(listener, ctx, args) {
    const resp = await listener.query(ctx, new InteractionQuery({
        query: {
            case: "replaceEnvArgs",
            value: args
        }
    }));
    if (resp.result.case !== "replaceEnvResult" || !resp.result.value) {
        throw new Error(`Unexpected response for replace env query: ${resp.result.case}`);
    }
    return resp.result.value;
}
export async function queryMcpAuth(listener, ctx, args) {
    const resp = await listener.query(ctx, new InteractionQuery({
        query: {
            case: "mcpAuthRequestQuery",
            value: new McpAuthRequestQuery({
                args
            })
        }
    }));
    if (resp.result.case !== "mcpAuthRequestResponse" || !resp.result.value) {
        throw new Error(`Unexpected response for MCP auth query: ${resp.result.case}`);
    }
    return resp.result.value;
}
export async function queryConnectScm(listener, ctx, args) {
    const resp = await listener.query(ctx, new InteractionQuery({
        query: {
            case: "connectScmRequestQuery",
            value: new ConnectScmRequestQuery({
                args
            })
        }
    }));
    if (resp.result.case !== "connectScmRequestResponse" || !resp.result.value) {
        throw new Error(`Unexpected response for connect SCM query: ${resp.result.case}`);
    }
    return resp.result.value;
}
export async function flushPostTurnEndedWork(ctx, listener) {
    await listener.flushPostTurnEndedWork?.(ctx);
}
export function createFailClosedInteractionResponse(query, reason) {
    switch(query.query.case){
        case "webSearchRequestQuery":
            return Responses.webSearchRejected(query.id, reason);
        case "webFetchRequestQuery":
            return Responses.webFetchRejected(query.id, reason);
        case "askQuestionInteractionQuery":
            return Responses.askQuestion(query.id, new AskQuestionResult({
                result: {
                    case: "rejected",
                    value: new AskQuestionRejected({
                        reason
                    })
                }
            }));
        case "switchModeRequestQuery":
            return Responses.switchModeRejected(query.id, reason);
        case "createPlanRequestQuery":
            return Responses.createPlan(query.id, new CreatePlanResult({
                result: {
                    case: "error",
                    value: new CreatePlanError({
                        error: reason
                    })
                }
            }));
        case "setupVmEnvironmentArgs":
            return Responses.setupVmEnvironment(query.id, new SetupVmEnvironmentResult({
                result: {
                    case: "success",
                    value: new SetupVmEnvironmentSuccess({})
                }
            }));
        case "replaceEnvArgs":
            return Responses.replaceEnv(query.id, new ReplaceEnvResult({
                result: {
                    case: "failure",
                    value: new ReplaceEnvFailure({
                        errorMessage: reason,
                        setupLogs: ""
                    })
                }
            }));
        case "prManagementRequestQuery":
            return Responses.prManagement(query.id, new PrManagementResult({
                result: {
                    case: "error",
                    value: new PrManagementError({
                        error: reason
                    })
                }
            }));
        case "mcpAuthRequestQuery":
            return Responses.mcpAuthRejected(query.id, reason);
        case "connectScmRequestQuery":
            return Responses.connectScmRejected(query.id, reason);
        case "generateImageRequestQuery":
            return Responses.generateImageRejected(query.id, reason);
        case void 0:
            return void 0;
        default:
            {
                const _exhaustive = query.query;
                return _exhaustive;
            }
    }
}
export function withAllocatedQueryIds(delegate, allocator = new InteractionQueryIdAllocator()) {
    return wrapQueries(delegate, (query)=>{
        query.id = allocator.next();
    });
}
export function withObservedQueryIds(delegate, allocator) {
    return wrapQueries(delegate, (query)=>{
        allocator.observe(query.id);
    });
}
function wrapQueries(delegate, beforeQuery) {
    const { enqueuePostTurnEndedWork, flushPostTurnEndedWork: flushPostTurnEndedWork2 } = delegate;
    return {
        sendUpdate: (ctx, update)=>delegate.sendUpdate(ctx, update),
        query: (ctx, query)=>{
            beforeQuery(query);
            return delegate.query(ctx, query);
        },
        enqueuePostTurnEndedWork: enqueuePostTurnEndedWork === void 0 ? void 0 : (work)=>enqueuePostTurnEndedWork.call(delegate, work),
        flushPostTurnEndedWork: flushPostTurnEndedWork2 === void 0 ? void 0 : (ctx)=>flushPostTurnEndedWork2.call(delegate, ctx)
    };
}
export function buildLocalSubagentLimitError(args) {
    return `Too many local subagents are already running (limit: ${args.maxRunning}). Wait for running subagents to finish (or collect background subagent results) before starting another one.`;
}
function extractAgentIdFromError(error3) {
    if (error3 instanceof SubagentHostError && error3.agentId) {
        return error3.agentId;
    }
    if (!error3 || typeof error3 !== "object") {
        return void 0;
    }
    const record3 = error3;
    if (typeof record3.agentId === "string") {
        return record3.agentId;
    }
    return void 0;
}
function getInFlightKey(args) {
    if (!args.toolCallId || !args.parentConversationId) {
        return void 0;
    }
    return [
        args.parentConversationId,
        args.toolCallId,
        args.resumeAgentId ?? "",
        args.forkAgentId ?? ""
    ].join("\0");
}
export function createSubagentExecutor(adapter) {
    const inFlightByToolCall = new Map();
    const completedByToolCall = new Map();
    async function runExecute(ctx, args, options2) {
        let agentId;
        try {
            agentId = await adapter.createOrResumeSession(ctx, args);
            const outcome = await adapter.runSession(ctx, agentId, args, {
                execId: options2?.execId
            });
            if (outcome.status === "error") {
                return new SubagentResult({
                    result: {
                        case: "error",
                        value: new SubagentError({
                            agentId,
                            error: outcome.error
                        })
                    }
                });
            }
            if (outcome.status === "aborted") {
                return new SubagentResult({
                    result: {
                        case: "error",
                        value: new SubagentError({
                            agentId,
                            error: outcome.error ?? "Subagent was aborted by the user"
                        })
                    }
                });
            }
            if (outcome.status === "background") {
                return new SubagentResult({
                    result: {
                        case: "success",
                        value: new SubagentSuccess({
                            agentId,
                            finalMessage: outcome.finalMessage,
                            toolCallCount: outcome.toolCallCount ?? 0,
                            backgroundReason: outcome.backgroundReason,
                            transcriptPath: outcome.transcriptPath
                        })
                    }
                });
            }
            return new SubagentResult({
                result: {
                    case: "success",
                    value: new SubagentSuccess({
                        agentId,
                        finalMessage: outcome.finalMessage,
                        toolCallCount: outcome.toolCallCount ?? 0
                    })
                }
            });
        } catch (error3) {
            if (agentId && adapter.releaseSession) {
                adapter.releaseSession(agentId);
            }
            if (error3 instanceof DeferredInteractionResponseError) {
                throw error3;
            }
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            const errorAgentId = agentId ?? extractAgentIdFromError(error3) ?? args.resumeAgentId;
            return new SubagentResult({
                result: {
                    case: "error",
                    value: new SubagentError({
                        ...errorAgentId ? {
                            agentId: errorAgentId
                        } : {},
                        error: errorMessage4
                    })
                }
            });
        }
    }
    return {
        execute (ctx, args, options2) {
            const key = getInFlightKey(args);
            if (key === void 0) {
                return runExecute(ctx, args, options2);
            }
            const completed = completedByToolCall.get(key);
            if (completed !== void 0) {
                return Promise.resolve(completed);
            }
            const existing = inFlightByToolCall.get(key);
            if (existing !== void 0) {
                return existing;
            }
            const promise = runExecute(ctx, args, options2).then((result)=>{
                if (result.result.case === "success") {
                    completedByToolCall.set(key, result);
                    if (completedByToolCall.size > MAX_COMPLETED_TOOL_CALL_RESULTS) {
                        completedByToolCall.delete(completedByToolCall.keys().next().value);
                    }
                }
                return result;
            }).finally(()=>{
                inFlightByToolCall.delete(key);
            });
            inFlightByToolCall.set(key, promise);
            return promise;
        }
    };
}
function getNonEmptyTrimmed(value) {
    const trimmed = value?.trim();
    return trimmed && trimmed.length > 0 ? trimmed : void 0;
}
export function getFinalSummaryFromToolCall(toolCall) {
    switch(toolCall?.tool.case){
        case "sendFinalSummaryToolCall":
        case "communicateUpdateToolCall":
            return getNonEmptyTrimmed(toolCall.tool.value.args?.finalSummary);
        default:
            return void 0;
    }
}
export function renderPlanFromToolCall(toolCall) {
    if (toolCall?.tool.case !== "createPlanToolCall") {
        return void 0;
    }
    const planContents = toolCall.tool.value.args?.plan;
    if (typeof planContents !== "string" || planContents.trim().length === 0) {
        return void 0;
    }
    const planFile = toolCall.tool.value.result?.planUri?.trim() || "unknown plan file";
    return `Plan written to ${planFile}:
${planContents}`;
}
export function createIdleSubagentLifecycleState() {
    return {
        status: "idle"
    };
}
export function isSubagentLifecycleBusy(state) {
    return state.status !== "idle";
}
export function transitionSubagentLifecycle(state, event) {
    switch(state.status){
        case "idle":
            {
                return transitionFromIdleState(state, event);
            }
        case "running":
            {
                return transitionFromRunningState(state, event);
            }
        case "runningWithQueuedResume":
            {
                return transitionFromRunningWithQueuedResumeState(state, event);
            }
        default:
            {
                const exhaustiveCheck = state;
                return {
                    nextState: exhaustiveCheck,
                    effects: []
                };
            }
    }
}
function transitionFromIdleState(state, event) {
    switch(event.type){
        case "startRun":
            return {
                nextState: {
                    status: "running",
                    runId: event.runId,
                    abort: event.abort
                },
                effects: []
            };
        case "queueResume":
            if (event.targetRunId === void 0) {
                return {
                    nextState: state,
                    effects: []
                };
            }
            return {
                nextState: {
                    status: "runningWithQueuedResume",
                    runId: event.targetRunId,
                    queuedResume: event.queuedResume
                },
                effects: []
            };
        case "runFinished":
        case "clearQueuedResume":
        case "abort":
        case "release":
            return {
                nextState: state,
                effects: []
            };
        default:
            {
                const exhaustiveCheck = event;
                throw new Error(`Unhandled idle-state event: ${String(exhaustiveCheck)}`);
            }
    }
}
function transitionFromRunningState(state, event) {
    switch(event.type){
        case "startRun":
            return {
                nextState: {
                    status: "running",
                    runId: event.runId,
                    abort: event.abort
                },
                effects: [
                    {
                        type: "abortActiveRun",
                        abort: state.abort
                    }
                ]
            };
        case "queueResume":
            return {
                nextState: {
                    status: "runningWithQueuedResume",
                    runId: state.runId,
                    abort: state.abort,
                    queuedResume: event.queuedResume
                },
                effects: []
            };
        case "runFinished":
            if (event.runId !== state.runId) {
                return {
                    nextState: state,
                    effects: []
                };
            }
            return {
                nextState: {
                    status: "idle"
                },
                effects: []
            };
        case "clearQueuedResume":
            return {
                nextState: state,
                effects: []
            };
        case "abort":
            return {
                nextState: {
                    status: "idle"
                },
                effects: [
                    {
                        type: "abortActiveRun",
                        abort: state.abort
                    }
                ]
            };
        case "release":
            return {
                nextState: state,
                effects: []
            };
        default:
            {
                const exhaustiveCheck = event;
                throw new Error(`Unhandled running-state event: ${String(exhaustiveCheck)}`);
            }
    }
}
function transitionFromRunningWithQueuedResumeState(state, event) {
    switch(event.type){
        case "startRun":
            return {
                nextState: {
                    status: "runningWithQueuedResume",
                    runId: event.runId,
                    abort: event.abort,
                    queuedResume: state.queuedResume
                },
                effects: [
                    {
                        type: "abortActiveRun",
                        abort: state.abort
                    }
                ]
            };
        case "queueResume":
            return {
                nextState: {
                    ...state,
                    queuedResume: event.mergeQueuedResume(state.queuedResume, event.queuedResume)
                },
                effects: []
            };
        case "runFinished":
            if (event.runId !== state.runId) {
                return {
                    nextState: state,
                    effects: []
                };
            }
            return {
                nextState: {
                    status: "running",
                    runId: state.runId,
                    abort: state.abort
                },
                effects: [
                    {
                        type: "startQueuedRun",
                        sourceRunId: state.runId,
                        queuedResume: state.queuedResume
                    }
                ]
            };
        case "clearQueuedResume":
            return {
                nextState: {
                    status: "running",
                    runId: state.runId,
                    abort: state.abort
                },
                effects: []
            };
        case "abort":
            return {
                nextState: {
                    status: "idle"
                },
                effects: [
                    {
                        type: "abortActiveRun",
                        abort: state.abort
                    }
                ]
            };
        case "release":
            return {
                nextState: state,
                effects: []
            };
        default:
            {
                const exhaustiveCheck = event;
                throw new Error(`Unhandled runningWithQueuedResume-state event: ${String(exhaustiveCheck)}`);
            }
    }
}
export function hasSubagentPrompt(prompt) {
    return typeof prompt === "string" && prompt.trim().length > 0;
}
function requiredGlobalCommandSentinel(commandName) {
    return `--- Cursor Command: ${commandName} ---`;
}
export function prependRequiredGlobalCommands(prompt, commands) {
    const missing = commands.filter((command)=>command.content.length > 0 && !prompt.includes(requiredGlobalCommandSentinel(command.name)));
    if (missing.length === 0) {
        return prompt;
    }
    const sections = missing.map((command)=>`${requiredGlobalCommandSentinel(command.name)}
${command.content}
--- End Command ---`).join("\n");
    return `<cursor_commands>
${sections}
</cursor_commands>

${prompt}`;
}
export function isSubagentRun(options2) {
    return options2.subagentTypeName !== void 0 && options2.subagentTypeName !== "";
}
export function buildLineageRequestHeaders(options2) {
    return {
        ...options2.parentRequestId !== void 0 ? {
            "x-parent-request-id": sanitizeHeaderValue(options2.parentRequestId)
        } : {},
        ...options2.rootParentRequestId !== void 0 ? {
            "x-root-parent-request-id": sanitizeHeaderValue(options2.rootParentRequestId)
        } : {},
        ...options2.parentAgentToolCallId !== void 0 ? {
            "x-parent-agent-tool-call-id": sanitizeHeaderValue(options2.parentAgentToolCallId)
        } : {},
        ...options2.directMetaParentChildSubagent === true ? {
            "x-direct-meta-parent-child-subagent": "true"
        } : {}
    };
}
export function buildInferenceProxyJwtHeaders() {
    const env = globalThis.process?.env;
    const jwt = env?.INFERENCE_PROXY_JWT?.trim();
    if (jwt === void 0 || jwt === "" || jwt.startsWith("$")) {
        return {};
    }
    return {
        [INFERENCE_AUTHENTICATION_JWT_HEADER_NAME]: jwt
    };
}
export function codeToString(value) {
    const name17 = Code[value];
    if (typeof name17 != "string") {
        return value.toString();
    }
    return name17[0].toLowerCase() + name17.substring(1).replace(/[A-Z]/g, (c)=>"_" + c.toLowerCase());
}
export function codeFromString(value) {
    if (!stringToCode) {
        stringToCode = {};
        for (const value2 of Object.values(Code)){
            if (typeof value2 == "string") {
                continue;
            }
            stringToCode[codeToString(value2)] = value2;
        }
    }
    return stringToCode[value];
}
var stringToCode;
export function createMessage(message, code) {
    return message.length ? `[${codeToString(code)}] ${message}` : `[${codeToString(code)}]`;
}
function encodeBinaryHeader(value) {
    let bytes;
    if (typeof value == "object" && "getType" in value) {
        bytes = value.toBinary();
    } else if (typeof value == "string") {
        bytes = new TextEncoder().encode(value);
    } else {
        bytes = value instanceof Uint8Array ? value : new Uint8Array(value);
    }
    return protoBase64.enc(bytes).replace(/=+$/, "");
}
function appendHeaders(...headers) {
    const h = new Headers();
    for (const e of headers){
        e.forEach((value, key)=>{
            h.append(key, value);
        });
    }
    return h;
}
function makeAnyClient(service, createMethod) {
    const client = {};
    for (const [localName, methodInfo] of Object.entries(service.methods)){
        const method = createMethod(Object.assign(Object.assign({}, methodInfo), {
            localName,
            service
        }));
        if (method != null) {
            client[localName] = method;
        }
    }
    return client;
}
function compressionNegotiate(available, requested, accepted, headerNameAcceptEncoding) {
    let request3 = null;
    let response = null;
    let error3 = void 0;
    if (requested !== null && requested !== "identity") {
        const found = available.find((c)=>c.name === requested);
        if (found) {
            request3 = found;
        } else {
            const acceptable = available.map((c)=>c.name).join(",");
            error3 = new ConnectError(`unknown compression "${requested}": supported encodings are ${acceptable}`, Code.Unimplemented, {
                [headerNameAcceptEncoding]: acceptable
            });
        }
    }
    if (accepted === null || accepted === "") {
        response = request3;
    } else {
        const acceptNames = accepted.split(",").map((n)=>n.trim());
        for (const name17 of acceptNames){
            const found = available.find((c)=>c.name === name17);
            if (found) {
                response = found;
                break;
            }
        }
    }
    return {
        request: request3,
        response,
        error: error3
    };
}
export function validateReadWriteMaxBytes(readMaxBytes, writeMaxBytes, compressMinBytes) {
    writeMaxBytes !== null && writeMaxBytes !== void 0 ? writeMaxBytes : writeMaxBytes = maxWriteMaxBytes;
    readMaxBytes !== null && readMaxBytes !== void 0 ? readMaxBytes : readMaxBytes = maxReadMaxBytes;
    compressMinBytes !== null && compressMinBytes !== void 0 ? compressMinBytes : compressMinBytes = defaultCompressMinBytes;
    if (writeMaxBytes < 1 || writeMaxBytes > maxWriteMaxBytes) {
        throw new ConnectError(`writeMaxBytes ${writeMaxBytes} must be >= 1 and <= ${maxWriteMaxBytes}`, Code.Internal);
    }
    if (readMaxBytes < 1 || readMaxBytes > maxReadMaxBytes) {
        throw new ConnectError(`readMaxBytes ${readMaxBytes} must be >= 1 and <= ${maxReadMaxBytes}`, Code.Internal);
    }
    return {
        readMaxBytes,
        writeMaxBytes,
        compressMinBytes
    };
}
function assertWriteMaxBytes(writeMaxBytes, bytesWritten) {
    if (bytesWritten > writeMaxBytes) {
        throw new ConnectError(`message size ${bytesWritten} is larger than configured writeMaxBytes ${writeMaxBytes}`, Code.ResourceExhausted);
    }
}
export function assertReadMaxBytes(readMaxBytes, bytesRead, totalSizeKnown = false) {
    if (bytesRead > readMaxBytes) {
        let message = `message size is larger than configured readMaxBytes ${readMaxBytes}`;
        if (totalSizeKnown) {
            message = `message size ${bytesRead} is larger than configured readMaxBytes ${readMaxBytes}`;
        }
        throw new ConnectError(message, Code.ResourceExhausted);
    }
}
function createEnvelopeDecoder(readMaxBytes) {
    return new EnvelopeDecoderImpl(readMaxBytes);
}
async function envelopeCompress(envelope, compression, compressMinBytes) {
    let { flags, data } = envelope;
    if ((flags & compressedFlag) === compressedFlag) {
        throw new ConnectError("invalid envelope, already compressed", Code.Internal);
    }
    if (compression && data.byteLength >= compressMinBytes) {
        data = await compression.compress(data);
        flags = flags | compressedFlag;
    }
    return {
        data,
        flags
    };
}
async function envelopeDecompress(envelope, compression, readMaxBytes) {
    let { flags, data } = envelope;
    if ((flags & compressedFlag) === compressedFlag) {
        if (!compression) {
            throw new ConnectError("received compressed envelope, but do not know how to decompress", Code.Internal);
        }
        data = await compression.decompress(data, readMaxBytes);
        flags = flags ^ compressedFlag;
    }
    return {
        data,
        flags
    };
}
function encodeEnvelope(flags, data) {
    const bytes = new Uint8Array(data.length + 5);
    bytes.set(data, 5);
    const v2 = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    v2.setUint8(0, flags);
    v2.setUint32(1, data.length);
    return bytes;
}
function pipeTo(source, ...rest) {
    const [transforms, sink, opt] = pickTransformsAndSink(rest);
    let iterable = source;
    let abortable;
    if ((opt === null || opt === void 0 ? void 0 : opt.propagateDownStreamError) === true) {
        iterable = abortable = makeIterableAbortable(iterable);
    }
    iterable = pipe(iterable, ...transforms, {
        propagateDownStreamError: false
    });
    return sink(iterable).catch((reason)=>{
        if (abortable) {
            return abortable.abort(reason).then(()=>Promise.reject(reason));
        }
        return Promise.reject(reason);
    });
}
function pickTransformsAndSink(rest) {
    let opt;
    if (typeof rest[rest.length - 1] != "function") {
        opt = rest.pop();
    }
    const sink = rest.pop();
    return [
        rest,
        sink,
        opt
    ];
}
function sinkAllBytes(readMaxBytes, lengthHint) {
    return async function(iterable) {
        return await readAllBytes(iterable, readMaxBytes, lengthHint);
    };
}
function pipe(source, ...rest) {
    return __asyncGenerator(this, arguments, function* pipe_1() {
        var _a18;
        const [transforms, opt] = pickTransforms(rest);
        let abortable;
        const sourceIt = source[Symbol.asyncIterator]();
        const cachedSource = {
            [Symbol.asyncIterator] () {
                return sourceIt;
            }
        };
        let iterable = cachedSource;
        if ((opt === null || opt === void 0 ? void 0 : opt.propagateDownStreamError) === true) {
            iterable = abortable = makeIterableAbortable(iterable);
        }
        for (const t of transforms){
            iterable = t(iterable);
        }
        const it2 = iterable[Symbol.asyncIterator]();
        try {
            for(;;){
                const r = yield __await(it2.next());
                if (r.done === true) {
                    break;
                }
                if (!abortable) {
                    yield yield __await(r.value);
                    continue;
                }
                try {
                    yield yield __await(r.value);
                } catch (e) {
                    yield __await(abortable.abort(e));
                    throw e;
                }
            }
        } finally{
            if ((opt === null || opt === void 0 ? void 0 : opt.propagateDownStreamError) === true) {
                (_a18 = sourceIt.return) === null || _a18 === void 0 ? void 0 : _a18.call(sourceIt).catch(()=>{});
            }
        }
    });
}
function pickTransforms(rest) {
    let opt;
    if (typeof rest[rest.length - 1] != "function") {
        opt = rest.pop();
    }
    return [
        rest,
        opt
    ];
}
function transformCatchFinally(catchFinally) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            let err;
            const it2 = iterable[Symbol.asyncIterator]();
            for(;;){
                let r;
                try {
                    r = yield __await(it2.next());
                } catch (e) {
                    err = e;
                    break;
                }
                if (r.done === true) {
                    break;
                }
                yield yield __await(r.value);
            }
            const caught = yield __await(catchFinally(err));
            if (caught !== void 0) {
                yield yield __await(caught);
            }
        });
    };
}
function transformPrepend(provide) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a18, e_3, _b2, _c;
            const prepend = yield __await(provide());
            if (prepend !== void 0) {
                yield yield __await(prepend);
            }
            try {
                for(var _d = true, iterable_3 = __asyncValues(iterable), iterable_3_1; iterable_3_1 = yield __await(iterable_3.next()), _a18 = iterable_3_1.done, !_a18; _d = true){
                    _c = iterable_3_1.value;
                    _d = false;
                    const chunk = _c;
                    yield yield __await(chunk);
                }
            } catch (e_3_1) {
                e_3 = {
                    error: e_3_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_3.return)) yield __await(_b2.call(iterable_3));
                } finally{
                    if (e_3) throw e_3.error;
                }
            }
        });
    };
}
function transformSerializeEnvelope(serialization, endStreamFlag2, endSerialization) {
    if (endStreamFlag2 === void 0 || endSerialization === void 0) {
        return function(iterable) {
            return __asyncGenerator(this, arguments, function*() {
                var _a18, e_4, _b2, _c;
                try {
                    for(var _d = true, iterable_4 = __asyncValues(iterable), iterable_4_1; iterable_4_1 = yield __await(iterable_4.next()), _a18 = iterable_4_1.done, !_a18; _d = true){
                        _c = iterable_4_1.value;
                        _d = false;
                        const chunk = _c;
                        const data = serialization.serialize(chunk);
                        yield yield __await({
                            flags: 0,
                            data
                        });
                    }
                } catch (e_4_1) {
                    e_4 = {
                        error: e_4_1
                    };
                } finally{
                    try {
                        if (!_d && !_a18 && (_b2 = iterable_4.return)) yield __await(_b2.call(iterable_4));
                    } finally{
                        if (e_4) throw e_4.error;
                    }
                }
            });
        };
    }
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a18, e_5, _b2, _c;
            try {
                for(var _d = true, iterable_5 = __asyncValues(iterable), iterable_5_1; iterable_5_1 = yield __await(iterable_5.next()), _a18 = iterable_5_1.done, !_a18; _d = true){
                    _c = iterable_5_1.value;
                    _d = false;
                    const chunk = _c;
                    let data;
                    let flags = 0;
                    if (chunk.end) {
                        flags = flags | endStreamFlag2;
                        data = endSerialization.serialize(chunk.value);
                    } else {
                        data = serialization.serialize(chunk.value);
                    }
                    yield yield __await({
                        flags,
                        data
                    });
                }
            } catch (e_5_1) {
                e_5 = {
                    error: e_5_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_5.return)) yield __await(_b2.call(iterable_5));
                } finally{
                    if (e_5) throw e_5.error;
                }
            }
        });
    };
}
function transformParseEnvelope(serialization, endStreamFlag2, endSerialization) {
    if (endSerialization && endStreamFlag2 !== void 0) {
        return function(iterable) {
            return __asyncGenerator(this, arguments, function*() {
                var _a18, e_6, _b2, _c;
                try {
                    for(var _d = true, iterable_6 = __asyncValues(iterable), iterable_6_1; iterable_6_1 = yield __await(iterable_6.next()), _a18 = iterable_6_1.done, !_a18; _d = true){
                        _c = iterable_6_1.value;
                        _d = false;
                        const { flags, data } = _c;
                        if ((flags & endStreamFlag2) === endStreamFlag2) {
                            yield yield __await({
                                value: endSerialization.parse(data),
                                end: true
                            });
                        } else {
                            yield yield __await({
                                value: serialization.parse(data),
                                end: false
                            });
                        }
                    }
                } catch (e_6_1) {
                    e_6 = {
                        error: e_6_1
                    };
                } finally{
                    try {
                        if (!_d && !_a18 && (_b2 = iterable_6.return)) yield __await(_b2.call(iterable_6));
                    } finally{
                        if (e_6) throw e_6.error;
                    }
                }
            });
        };
    }
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a18, e_7, _b2, _c;
            try {
                for(var _d = true, iterable_7 = __asyncValues(iterable), iterable_7_1; iterable_7_1 = yield __await(iterable_7.next()), _a18 = iterable_7_1.done, !_a18; _d = true){
                    _c = iterable_7_1.value;
                    _d = false;
                    const { flags, data } = _c;
                    if (endStreamFlag2 !== void 0 && (flags & endStreamFlag2) === endStreamFlag2) {
                        if (endSerialization === null) {
                            throw new ConnectError("unexpected end flag", Code.InvalidArgument);
                        }
                        continue;
                    }
                    yield yield __await(serialization.parse(data));
                }
            } catch (e_7_1) {
                e_7 = {
                    error: e_7_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_7.return)) yield __await(_b2.call(iterable_7));
                } finally{
                    if (e_7) throw e_7.error;
                }
            }
        });
    };
}
function transformCompressEnvelope(compression, compressMinBytes) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a18, e_8, _b2, _c;
            try {
                for(var _d = true, iterable_8 = __asyncValues(iterable), iterable_8_1; iterable_8_1 = yield __await(iterable_8.next()), _a18 = iterable_8_1.done, !_a18; _d = true){
                    _c = iterable_8_1.value;
                    _d = false;
                    const env = _c;
                    yield yield __await(yield __await(envelopeCompress(env, compression, compressMinBytes)));
                }
            } catch (e_8_1) {
                e_8 = {
                    error: e_8_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_8.return)) yield __await(_b2.call(iterable_8));
                } finally{
                    if (e_8) throw e_8.error;
                }
            }
        });
    };
}
function transformDecompressEnvelope(compression, readMaxBytes) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a18, e_9, _b2, _c;
            try {
                for(var _d = true, iterable_9 = __asyncValues(iterable), iterable_9_1; iterable_9_1 = yield __await(iterable_9.next()), _a18 = iterable_9_1.done, !_a18; _d = true){
                    _c = iterable_9_1.value;
                    _d = false;
                    const env = _c;
                    yield yield __await(yield __await(envelopeDecompress(env, compression, readMaxBytes)));
                }
            } catch (e_9_1) {
                e_9 = {
                    error: e_9_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_9.return)) yield __await(_b2.call(iterable_9));
                } finally{
                    if (e_9) throw e_9.error;
                }
            }
        });
    };
}
function transformJoinEnvelopes() {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a18, e_10, _b2, _c;
            try {
                for(var _d = true, iterable_10 = __asyncValues(iterable), iterable_10_1; iterable_10_1 = yield __await(iterable_10.next()), _a18 = iterable_10_1.done, !_a18; _d = true){
                    _c = iterable_10_1.value;
                    _d = false;
                    const { flags, data } = _c;
                    yield yield __await(encodeEnvelope(flags, data));
                }
            } catch (e_10_1) {
                e_10 = {
                    error: e_10_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_10.return)) yield __await(_b2.call(iterable_10));
                } finally{
                    if (e_10) throw e_10.error;
                }
            }
        });
    };
}
function transformSplitEnvelope(readMaxBytes) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a18, e_11, _b2, _c;
            const buffer = createEnvelopeDecoder(readMaxBytes);
            try {
                for(var _d = true, iterable_11 = __asyncValues(iterable), iterable_11_1; iterable_11_1 = yield __await(iterable_11.next()), _a18 = iterable_11_1.done, !_a18; _d = true){
                    _c = iterable_11_1.value;
                    _d = false;
                    const chunk = _c;
                    for (const env of buffer.decode(chunk)){
                        yield yield __await(env);
                    }
                }
            } catch (e_11_1) {
                e_11 = {
                    error: e_11_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_11.return)) yield __await(_b2.call(iterable_11));
                } finally{
                    if (e_11) throw e_11.error;
                }
            }
            if (buffer.byteLength > 0) {
                throw new ConnectError("protocol error: incomplete envelope", Code.InvalidArgument);
            }
        });
    };
}
async function readAllBytes(iterable, readMaxBytes, lengthHint) {
    var _a18, e_12, _b2, _c, _d, e_13, _e2, _f;
    const [ok, hint] = parseLengthHint(lengthHint);
    if (ok) {
        if (hint > readMaxBytes) {
            assertReadMaxBytes(readMaxBytes, hint, true);
        }
        const buffer = new Uint8Array(hint);
        let offset2 = 0;
        try {
            for(var _g = true, iterable_12 = __asyncValues(iterable), iterable_12_1; iterable_12_1 = await iterable_12.next(), _a18 = iterable_12_1.done, !_a18; _g = true){
                _c = iterable_12_1.value;
                _g = false;
                const chunk = _c;
                if (offset2 + chunk.byteLength > hint) {
                    throw new ConnectError(`protocol error: promised ${hint} bytes, received ${offset2 + chunk.byteLength}`, Code.InvalidArgument);
                }
                buffer.set(chunk, offset2);
                offset2 += chunk.byteLength;
            }
        } catch (e_12_1) {
            e_12 = {
                error: e_12_1
            };
        } finally{
            try {
                if (!_g && !_a18 && (_b2 = iterable_12.return)) await _b2.call(iterable_12);
            } finally{
                if (e_12) throw e_12.error;
            }
        }
        if (offset2 < hint) {
            throw new ConnectError(`protocol error: promised ${hint} bytes, received ${offset2}`, Code.InvalidArgument);
        }
        return buffer;
    }
    const chunks = [];
    let count2 = 0;
    try {
        for(var _h = true, iterable_13 = __asyncValues(iterable), iterable_13_1; iterable_13_1 = await iterable_13.next(), _d = iterable_13_1.done, !_d; _h = true){
            _f = iterable_13_1.value;
            _h = false;
            const chunk = _f;
            count2 += chunk.byteLength;
            assertReadMaxBytes(readMaxBytes, count2);
            chunks.push(chunk);
        }
    } catch (e_13_1) {
        e_13 = {
            error: e_13_1
        };
    } finally{
        try {
            if (!_h && !_d && (_e2 = iterable_13.return)) await _e2.call(iterable_13);
        } finally{
            if (e_13) throw e_13.error;
        }
    }
    const all = new Uint8Array(count2);
    let offset = 0;
    for(let chunk = chunks.shift(); chunk; chunk = chunks.shift()){
        all.set(chunk, offset);
        offset += chunk.byteLength;
    }
    return all;
}
function parseLengthHint(lengthHint) {
    if (lengthHint === void 0 || lengthHint === null) {
        return [
            false,
            0
        ];
    }
    const n = typeof lengthHint == "string" ? parseInt(lengthHint, 10) : lengthHint;
    if (!Number.isSafeInteger(n) || n < 0) {
        return [
            false,
            n
        ];
    }
    return [
        true,
        n
    ];
}
async function untilFirst(iterable) {
    const it2 = iterable[Symbol.asyncIterator]();
    let first = await it2.next();
    return {
        [Symbol.asyncIterator] () {
            const w2 = {
                async next () {
                    if (first !== null) {
                        const n = first;
                        first = null;
                        return n;
                    }
                    return await it2.next();
                }
            };
            if (it2.throw !== void 0) {
                w2.throw = (e)=>it2.throw(e);
            }
            if (it2.return !== void 0) {
                w2.return = (value)=>it2.return(value);
            }
            return w2;
        }
    };
}
function makeIterableAbortable(iterable) {
    const innerCandidate = iterable[Symbol.asyncIterator]();
    if (innerCandidate.throw === void 0) {
        throw new Error("AsyncIterable does not implement throw");
    }
    const inner = innerCandidate;
    let aborted2;
    let resultPromise;
    let it2 = {
        next () {
            resultPromise = inner.next().finally(()=>{
                resultPromise = void 0;
            });
            return resultPromise;
        },
        throw (e) {
            return inner.throw(e);
        }
    };
    if (innerCandidate.return !== void 0) {
        it2 = Object.assign(Object.assign({}, it2), {
            return (value) {
                return inner.return(value);
            }
        });
    }
    let used = false;
    return {
        abort (reason) {
            if (aborted2) {
                return aborted2.state;
            }
            const f2 = ()=>{
                return inner.throw(reason).then((r)=>r.done === true ? "completed" : "caught", ()=>"rethrown");
            };
            if (resultPromise) {
                aborted2 = {
                    reason,
                    state: resultPromise.then(f2, f2)
                };
                return aborted2.state;
            }
            aborted2 = {
                reason,
                state: f2()
            };
            return aborted2.state;
        },
        [Symbol.asyncIterator] () {
            if (used) {
                throw new Error("AsyncIterable cannot be re-used");
            }
            used = true;
            return it2;
        }
    };
}
export function createWritableIterable2() {
    const readQueue = [];
    const writeQueue = [];
    let err = void 0;
    let nextResolve;
    let nextReject;
    let nextPromise = new Promise((resolve36, reject2)=>{
        nextResolve = resolve36;
        nextReject = reject2;
    });
    let closed2 = false;
    function drain() {
        for (const next of readQueue.splice(0, readQueue.length)){
            next({
                done: true,
                value: void 0
            });
        }
    }
    return {
        close () {
            closed2 = true;
            drain();
        },
        async write (payload) {
            if (closed2) {
                throw err !== null && err !== void 0 ? err : new Error("cannot write, WritableIterable already closed");
            }
            const read = readQueue.shift();
            if (read === void 0) {
                writeQueue.push(payload);
            } else {
                read({
                    done: false,
                    value: payload
                });
                if (readQueue.length > 0) {
                    return;
                }
            }
            const limit = writeQueue.length + 1;
            for(let i = 0; i < limit; i++){
                await nextPromise;
            }
        },
        [Symbol.asyncIterator] () {
            return {
                next () {
                    nextResolve();
                    nextPromise = new Promise((resolve36, reject2)=>{
                        nextResolve = resolve36;
                        nextReject = reject2;
                    });
                    const write2 = writeQueue.shift();
                    if (write2 !== void 0) {
                        return Promise.resolve({
                            done: false,
                            value: write2
                        });
                    }
                    if (closed2) {
                        return Promise.resolve({
                            done: true,
                            value: void 0
                        });
                    }
                    let readResolve;
                    const readPromise = new Promise((resolve36)=>readResolve = resolve36);
                    readQueue.push(readResolve);
                    return readPromise;
                },
                throw (throwErr) {
                    err = throwErr;
                    closed2 = true;
                    writeQueue.splice(0, writeQueue.length);
                    nextPromise.catch(()=>{});
                    nextReject(err);
                    drain();
                    return Promise.resolve({
                        done: true,
                        value: void 0
                    });
                },
                return () {
                    closed2 = true;
                    writeQueue.splice(0, writeQueue.length);
                    nextResolve();
                    nextPromise = Promise.reject(new Error("cannot write, consumer called return"));
                    nextPromise.catch(()=>{});
                    drain();
                    return Promise.resolve({
                        done: true,
                        value: void 0
                    });
                }
            };
        }
    };
}
function createAsyncIterable(items) {
    return __asyncGenerator(this, arguments, function* createAsyncIterable_1() {
        yield __await(yield* __asyncDelegator(__asyncValues(items)));
    });
}
export function createClient(service, transport) {
    return makeAnyClient(service, (method)=>{
        switch(method.kind){
            case MethodKind.Unary:
                return createUnaryFn(transport, service, method);
            case MethodKind.ServerStreaming:
                return createServerStreamingFn(transport, service, method);
            case MethodKind.ClientStreaming:
                return createClientStreamingFn(transport, service, method);
            case MethodKind.BiDiStreaming:
                return createBiDiStreamingFn(transport, service, method);
            default:
                return null;
        }
    });
}
function createUnaryFn(transport, service, method) {
    return async function(input, options2) {
        var _a18, _b2;
        const response = await transport.unary(service, method, options2 === null || options2 === void 0 ? void 0 : options2.signal, options2 === null || options2 === void 0 ? void 0 : options2.timeoutMs, options2 === null || options2 === void 0 ? void 0 : options2.headers, input, options2 === null || options2 === void 0 ? void 0 : options2.contextValues);
        (_a18 = options2 === null || options2 === void 0 ? void 0 : options2.onHeader) === null || _a18 === void 0 ? void 0 : _a18.call(options2, response.header);
        (_b2 = options2 === null || options2 === void 0 ? void 0 : options2.onTrailer) === null || _b2 === void 0 ? void 0 : _b2.call(options2, response.trailer);
        return response.message;
    };
}
function createServerStreamingFn(transport, service, method) {
    return function(input, options2) {
        return handleStreamResponse(transport.stream(service, method, options2 === null || options2 === void 0 ? void 0 : options2.signal, options2 === null || options2 === void 0 ? void 0 : options2.timeoutMs, options2 === null || options2 === void 0 ? void 0 : options2.headers, createAsyncIterable([
            input
        ]), options2 === null || options2 === void 0 ? void 0 : options2.contextValues), options2);
    };
}
function createClientStreamingFn(transport, service, method) {
    return async function(request3, options2) {
        var _a18, e_1, _b2, _c;
        var _d, _e2;
        const response = await transport.stream(service, method, options2 === null || options2 === void 0 ? void 0 : options2.signal, options2 === null || options2 === void 0 ? void 0 : options2.timeoutMs, options2 === null || options2 === void 0 ? void 0 : options2.headers, request3, options2 === null || options2 === void 0 ? void 0 : options2.contextValues);
        (_d = options2 === null || options2 === void 0 ? void 0 : options2.onHeader) === null || _d === void 0 ? void 0 : _d.call(options2, response.header);
        let singleMessage;
        let count2 = 0;
        try {
            for(var _f = true, _g = __asyncValues2(response.message), _h; _h = await _g.next(), _a18 = _h.done, !_a18; _f = true){
                _c = _h.value;
                _f = false;
                const message = _c;
                singleMessage = message;
                count2++;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_f && !_a18 && (_b2 = _g.return)) await _b2.call(_g);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        if (!singleMessage) {
            throw new ConnectError("protocol error: missing response message", Code.Unimplemented);
        }
        if (count2 > 1) {
            throw new ConnectError("protocol error: received extra messages for client streaming method", Code.Unimplemented);
        }
        (_e2 = options2 === null || options2 === void 0 ? void 0 : options2.onTrailer) === null || _e2 === void 0 ? void 0 : _e2.call(options2, response.trailer);
        return singleMessage;
    };
}
function createBiDiStreamingFn(transport, service, method) {
    return function(request3, options2) {
        return handleStreamResponse(transport.stream(service, method, options2 === null || options2 === void 0 ? void 0 : options2.signal, options2 === null || options2 === void 0 ? void 0 : options2.timeoutMs, options2 === null || options2 === void 0 ? void 0 : options2.headers, request3, options2 === null || options2 === void 0 ? void 0 : options2.contextValues), options2);
    };
}
function handleStreamResponse(stream3, options2) {
    const it2 = (function() {
        return __asyncGenerator2(this, arguments, function*() {
            var _a18, _b2;
            const response = yield __await2(stream3);
            (_a18 = options2 === null || options2 === void 0 ? void 0 : options2.onHeader) === null || _a18 === void 0 ? void 0 : _a18.call(options2, response.header);
            yield __await2(yield* __asyncDelegator2(__asyncValues2(response.message)));
            (_b2 = options2 === null || options2 === void 0 ? void 0 : options2.onTrailer) === null || _b2 === void 0 ? void 0 : _b2.call(options2, response.trailer);
        });
    })()[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                next: ()=>it2.next()
            })
    };
}
function createLinkedAbortController(...signals) {
    const controller = new AbortController();
    const sa = signals.filter((s3)=>s3 !== void 0).concat(controller.signal);
    for (const signal of sa){
        if (signal.aborted) {
            onAbort.apply(signal);
            break;
        }
        signal.addEventListener("abort", onAbort);
    }
    function onAbort() {
        if (!controller.signal.aborted) {
            controller.abort(getAbortSignalReason(this));
        }
        for (const signal of sa){
            signal.removeEventListener("abort", onAbort);
        }
    }
    return controller;
}
function createDeadlineSignal(timeoutMs) {
    const controller = new AbortController();
    const listener = ()=>{
        controller.abort(new ConnectError("the operation timed out", Code.DeadlineExceeded));
    };
    let timeoutId;
    if (timeoutMs !== void 0) {
        if (timeoutMs <= 0) listener();
        else timeoutId = setTimeout(listener, timeoutMs);
    }
    return {
        signal: controller.signal,
        cleanup: ()=>clearTimeout(timeoutId)
    };
}
export function getAbortSignalReason(signal) {
    if (!signal.aborted) {
        return void 0;
    }
    if (signal.reason !== void 0) {
        return signal.reason;
    }
    const e = new Error("This operation was aborted");
    e.name = "AbortError";
    return e;
}
export function createContextValues() {
    return {
        get (key) {
            return key.id in this ? this[key.id] : key.defaultValue;
        },
        set (key, value) {
            this[key.id] = value;
            return this;
        },
        delete (key) {
            delete this[key.id];
            return this;
        }
    };
}
export function createContextKey2(defaultValue, options2) {
    return {
        id: Symbol(options2 === null || options2 === void 0 ? void 0 : options2.description),
        defaultValue
    };
}
function createHandlerContext(init) {
    var _a18;
    let timeoutMs;
    if (init.timeoutMs !== void 0) {
        const date4 = new Date(Date.now() + init.timeoutMs);
        timeoutMs = ()=>date4.getTime() - Date.now();
    } else {
        timeoutMs = ()=>void 0;
    }
    const deadline = createDeadlineSignal(init.timeoutMs);
    const abortController = createLinkedAbortController(deadline.signal, init.requestSignal, init.shutdownSignal);
    return Object.assign(Object.assign({}, init), {
        signal: abortController.signal,
        timeoutMs,
        requestHeader: new Headers(init.requestHeader),
        responseHeader: new Headers(init.responseHeader),
        responseTrailer: new Headers(init.responseTrailer),
        abort (reason) {
            deadline.cleanup();
            abortController.abort(reason);
        },
        values: (_a18 = init.contextValues) !== null && _a18 !== void 0 ? _a18 : createContextValues()
    });
}
function createMethodImplSpec(service, method, impl) {
    return {
        kind: method.kind,
        service,
        method,
        impl
    };
}
function createServiceImplSpec(service, impl) {
    const s3 = {
        service,
        methods: {}
    };
    for (const [localName, methodInfo] of Object.entries(service.methods)){
        let fn = impl[localName];
        if (typeof fn == "function") {
            fn = fn.bind(impl);
        } else {
            const message = `${service.typeName}.${methodInfo.name} is not implemented`;
            fn = function unimplemented() {
                throw new ConnectError(message, Code.Unimplemented);
            };
        }
        s3.methods[localName] = createMethodImplSpec(service, methodInfo, fn);
    }
    return s3;
}
function trailerParse(data) {
    const headers = new Headers();
    const lines2 = new TextDecoder().decode(data).split("\r\n");
    for (const line of lines2){
        if (line === "") {
            continue;
        }
        const i = line.indexOf(":");
        if (i > 0) {
            const name17 = line.substring(0, i).trim();
            const value = line.substring(i + 1).trim();
            headers.append(name17, value);
        }
    }
    return headers;
}
function trailerSerialize(trailer) {
    const lines2 = [];
    trailer.forEach((value, key)=>{
        lines2.push(`${key}: ${value}\r
`);
    });
    return new TextEncoder().encode(lines2.join(""));
}
function createTrailerSerialization() {
    return {
        serialize: trailerSerialize,
        parse: trailerParse
    };
}
function parseContentType(contentType) {
    const match2 = contentType === null || contentType === void 0 ? void 0 : contentType.match(contentTypeRegExp);
    if (!match2) {
        return void 0;
    }
    const text4 = !!match2[1];
    const binary2 = !match2[2];
    return {
        text: text4,
        binary: binary2
    };
}
function parseTimeout(value, maxTimeoutMs) {
    if (value === null) {
        return {};
    }
    const results = /^(\d{1,8})([HMSmun])$/.exec(value);
    if (results === null) {
        return {
            error: new ConnectError(`protocol error: invalid grpc timeout value: ${value}`, Code.InvalidArgument)
        };
    }
    const unitToMultiplicand = {
        H: 60 * 60 * 1e3,
        M: 60 * 1e3,
        S: 1e3,
        m: 1,
        u: 1e-3,
        n: 1e-6
    };
    const timeoutMs = unitToMultiplicand[results[2]] * parseInt(results[1]);
    if (timeoutMs > maxTimeoutMs) {
        return {
            timeoutMs,
            error: new ConnectError(`timeout ${timeoutMs}ms must be <= ${maxTimeoutMs}`, Code.InvalidArgument)
        };
    }
    return {
        timeoutMs
    };
}
function setTrailerStatus(target, error3) {
    if (error3) {
        target.set(headerGrpcStatus, error3.code.toString(10));
        target.set(headerGrpcMessage, encodeURIComponent(error3.rawMessage));
        if (error3.details.length > 0) {
            const status = new Status({
                code: error3.code,
                message: error3.rawMessage,
                details: error3.details.map((value)=>"getType" in value ? Any.pack(value) : new Any({
                        typeUrl: `type.googleapis.com/${value.type}`,
                        value: value.value
                    }))
            });
            target.set(headerStatusDetailsBin, encodeBinaryHeader(status));
        }
    } else {
        target.set(headerGrpcStatus, grpcStatusOk.toString());
    }
    return target;
}
function contentTypeMatcher(...supported2) {
    const cache2 = new Map();
    const source = supported2.reduce((previousValue, currentValue)=>previousValue.concat("supported" in currentValue ? currentValue.supported : currentValue), []);
    function match2(contentType) {
        if (contentType === null || contentType.length == 0) {
            return false;
        }
        const cached2 = cache2.get(contentType);
        if (cached2 !== void 0) {
            return cached2;
        }
        const ok = source.some((re3)=>re3.test(contentType));
        if (cache2.size < contentTypeMatcherCacheSize) {
            cache2.set(contentType, ok);
        }
        return ok;
    }
    match2.supported = source;
    return match2;
}
function createMethodUrl(baseUrl, service, method) {
    const s3 = typeof service == "string" ? service : service.typeName;
    const m2 = typeof method == "string" ? method : method.name;
    return baseUrl.toString().replace(/\/?$/, `/${s3}/${m2}`);
}
function normalize2(type2, message) {
    return message instanceof type2 ? message : new type2(message);
}
function normalizeIterable(messageType, input) {
    function transform2(result) {
        if (result.done === true) {
            return result;
        }
        return {
            done: result.done,
            value: normalize2(messageType, result.value)
        };
    }
    return {
        [Symbol.asyncIterator] () {
            const it2 = input[Symbol.asyncIterator]();
            const res = {
                next: ()=>it2.next().then(transform2)
            };
            if (it2.throw !== void 0) {
                res.throw = (e)=>it2.throw(e).then(transform2);
            }
            if (it2.return !== void 0) {
                res.return = (v2)=>it2.return(v2).then(transform2);
            }
            return res;
        }
    };
}
function applyInterceptors(next, interceptors) {
    var _a18;
    return (_a18 = interceptors === null || interceptors === void 0 ? void 0 : interceptors.concat().reverse().reduce((n, i)=>i(n), next)) !== null && _a18 !== void 0 ? _a18 : next;
}
async function invokeUnaryImplementation(spec, context2, input, interceptors) {
    const anyFn = async (req)=>{
        return {
            message: normalize2(spec.method.O, await spec.impl(req.message, Object.assign(Object.assign({}, context2), {
                service: req.service,
                method: req.method,
                requestHeader: req.header,
                values: req.contextValues,
                signal: req.signal
            }))),
            stream: false,
            service: req.service,
            method: req.method,
            header: context2.responseHeader,
            trailer: context2.responseTrailer
        };
    };
    const next = applyInterceptors(anyFn, interceptors);
    const { message } = await next({
        init: {
            method: context2.requestMethod
        },
        message: input,
        url: context2.url,
        signal: context2.signal,
        service: spec.service,
        method: spec.method,
        header: context2.requestHeader,
        contextValues: context2.values,
        stream: false
    });
    return message;
}
function transformInvokeImplementation(spec, context2, interceptors) {
    switch(spec.kind){
        case MethodKind.Unary:
            return function unary(input) {
                return __asyncGenerator3(this, arguments, function* unary_1() {
                    const inputIt = input[Symbol.asyncIterator]();
                    const input1 = yield __await3(inputIt.next());
                    if (input1.done === true) {
                        throw new ConnectError("protocol error: missing input message for unary method", Code.Unimplemented);
                    }
                    const anyFn = async (req)=>{
                        return {
                            message: normalize2(spec.method.O, await spec.impl(req.message, Object.assign(Object.assign({}, context2), {
                                service: req.service,
                                method: req.method,
                                requestHeader: req.header,
                                values: req.contextValues,
                                signal: req.signal
                            }))),
                            stream: false,
                            service: req.service,
                            method: req.method,
                            header: context2.responseHeader,
                            trailer: context2.responseTrailer
                        };
                    };
                    const next = applyInterceptors(anyFn, interceptors);
                    const { message, header, trailer } = yield __await3(next({
                        init: {
                            method: context2.requestMethod
                        },
                        message: input1.value,
                        url: context2.url,
                        signal: context2.signal,
                        service: spec.service,
                        method: spec.method,
                        header: context2.requestHeader,
                        contextValues: context2.values,
                        stream: false
                    }));
                    copyHeaders(header, context2.responseHeader);
                    copyHeaders(trailer, context2.responseTrailer);
                    yield yield __await3(message);
                    const input2 = yield __await3(inputIt.next());
                    if (input2.done !== true) {
                        throw new ConnectError("protocol error: received extra input message for unary method", Code.Unimplemented);
                    }
                });
            };
        case MethodKind.ServerStreaming:
            {
                return function serverStreaming(input) {
                    return __asyncGenerator3(this, arguments, function* serverStreaming_1() {
                        const inputIt = input[Symbol.asyncIterator]();
                        const input1 = yield __await3(inputIt.next());
                        if (input1.done === true) {
                            throw new ConnectError("protocol error: missing input message for server-streaming method", Code.Unimplemented);
                        }
                        const anyFn = async (req)=>{
                            return {
                                message: normalizeIterable(spec.method.O, spec.impl(req.message, Object.assign(Object.assign({}, context2), {
                                    service: req.service,
                                    method: req.method,
                                    requestHeader: req.header,
                                    values: req.contextValues,
                                    signal: req.signal
                                }))),
                                stream: true,
                                service: req.service,
                                method: req.method,
                                header: context2.responseHeader,
                                trailer: context2.responseTrailer
                            };
                        };
                        const next = applyInterceptors(anyFn, interceptors);
                        const { message, header, trailer } = yield __await3(next({
                            init: {
                                method: context2.requestMethod
                            },
                            message: input1.value,
                            url: context2.url,
                            signal: context2.signal,
                            service: spec.service,
                            method: spec.method,
                            header: context2.requestHeader,
                            contextValues: context2.values,
                            stream: false
                        }));
                        copyHeaders(header, context2.responseHeader);
                        copyHeaders(trailer, context2.responseTrailer);
                        yield __await3(yield* __asyncDelegator3(__asyncValues3(message)));
                        const input2 = yield __await3(inputIt.next());
                        if (input2.done !== true) {
                            throw new ConnectError("protocol error: received extra input message for server-streaming method", Code.Unimplemented);
                        }
                    });
                };
            }
        case MethodKind.ClientStreaming:
            {
                return function clientStreaming(input) {
                    return __asyncGenerator3(this, arguments, function* clientStreaming_1() {
                        const anyFn = async (req)=>{
                            return {
                                message: normalize2(spec.method.O, await spec.impl(req.message, Object.assign(Object.assign({}, context2), {
                                    service: req.service,
                                    method: req.method,
                                    requestHeader: req.header,
                                    values: req.contextValues,
                                    signal: req.signal
                                }))),
                                stream: false,
                                service: req.service,
                                method: req.method,
                                header: context2.responseHeader,
                                trailer: context2.responseTrailer
                            };
                        };
                        const next = applyInterceptors(anyFn, interceptors);
                        const { message, header, trailer } = yield __await3(next({
                            init: {
                                method: context2.requestMethod
                            },
                            message: input,
                            url: context2.url,
                            signal: context2.signal,
                            service: spec.service,
                            method: spec.method,
                            header: context2.requestHeader,
                            contextValues: context2.values,
                            stream: true
                        }));
                        copyHeaders(header, context2.responseHeader);
                        copyHeaders(trailer, context2.responseTrailer);
                        yield yield __await3(message);
                    });
                };
            }
        case MethodKind.BiDiStreaming:
            return function biDiStreaming(input) {
                return __asyncGenerator3(this, arguments, function* biDiStreaming_1() {
                    const anyFn = async (req)=>{
                        return {
                            message: normalizeIterable(spec.method.O, spec.impl(req.message, Object.assign(Object.assign({}, context2), {
                                service: req.service,
                                method: req.method,
                                requestHeader: req.header,
                                values: req.contextValues,
                                signal: req.signal
                            }))),
                            stream: true,
                            service: req.service,
                            method: req.method,
                            header: context2.responseHeader,
                            trailer: context2.responseTrailer
                        };
                    };
                    const next = applyInterceptors(anyFn, interceptors);
                    const { message, header, trailer } = yield __await3(next({
                        init: {
                            method: context2.requestMethod
                        },
                        message: input,
                        url: context2.url,
                        signal: context2.signal,
                        service: spec.service,
                        method: spec.method,
                        header: context2.requestHeader,
                        contextValues: context2.values,
                        stream: true
                    }));
                    copyHeaders(header, context2.responseHeader);
                    copyHeaders(trailer, context2.responseTrailer);
                    yield __await3(yield* __asyncDelegator3(__asyncValues3(message)));
                });
            };
    }
}
function copyHeaders(from2, to3) {
    if (from2 === to3) {
        return;
    }
    to3.forEach((_2, key)=>{
        to3.delete(key);
    });
    from2.forEach((value, key)=>{
        to3.set(key, value);
    });
}
function getJsonOptions(options2) {
    var _a18;
    const o = Object.assign({}, options2);
    (_a18 = o.ignoreUnknownFields) !== null && _a18 !== void 0 ? _a18 : o.ignoreUnknownFields = true;
    return o;
}
function createMethodSerializationLookup(method, binaryOptions, jsonOptions, limitOptions) {
    const inputBinary = limitSerialization(createBinarySerialization(method.I, binaryOptions), limitOptions);
    const inputJson = limitSerialization(createJsonSerialization(method.I, jsonOptions), limitOptions);
    const outputBinary = limitSerialization(createBinarySerialization(method.O, binaryOptions), limitOptions);
    const outputJson = limitSerialization(createJsonSerialization(method.O, jsonOptions), limitOptions);
    return {
        getI (useBinaryFormat) {
            return useBinaryFormat ? inputBinary : inputJson;
        },
        getO (useBinaryFormat) {
            return useBinaryFormat ? outputBinary : outputJson;
        }
    };
}
function limitSerialization(serialization, limitOptions) {
    return {
        serialize (data) {
            const bytes = serialization.serialize(data);
            assertWriteMaxBytes(limitOptions.writeMaxBytes, bytes.byteLength);
            return bytes;
        },
        parse (data) {
            assertReadMaxBytes(limitOptions.readMaxBytes, data.byteLength, true);
            return serialization.parse(data);
        }
    };
}
function createBinarySerialization(messageType, options2) {
    return {
        parse (data) {
            try {
                return messageType.fromBinary(data, options2);
            } catch (e) {
                const m2 = e instanceof Error ? e.message : String(e);
                throw new ConnectError(`parse binary: ${m2}`, Code.Internal);
            }
        },
        serialize (data) {
            try {
                return data.toBinary(options2);
            } catch (e) {
                const m2 = e instanceof Error ? e.message : String(e);
                throw new ConnectError(`serialize binary: ${m2}`, Code.Internal);
            }
        }
    };
}
function createJsonSerialization(messageType, options2) {
    var _a18, _b2;
    const textEncoder2 = (_a18 = options2 === null || options2 === void 0 ? void 0 : options2.textEncoder) !== null && _a18 !== void 0 ? _a18 : new TextEncoder();
    const textDecoder3 = (_b2 = options2 === null || options2 === void 0 ? void 0 : options2.textDecoder) !== null && _b2 !== void 0 ? _b2 : new TextDecoder();
    const o = getJsonOptions(options2);
    return {
        parse (data) {
            try {
                const json2 = textDecoder3.decode(data);
                return messageType.fromJsonString(json2, o);
            } catch (e) {
                throw ConnectError.from(e, Code.InvalidArgument);
            }
        },
        serialize (data) {
            try {
                const json2 = data.toJsonString(o);
                return textEncoder2.encode(json2);
            } catch (e) {
                throw ConnectError.from(e, Code.Internal);
            }
        }
    };
}
function assertByteStreamRequest(req) {
    if (typeof req.body == "object" && req.body !== null && Symbol.asyncIterator in req.body) {
        return;
    }
    throw new Error("byte stream required, but received JSON");
}
function validateUniversalHandlerOptions(opt) {
    var _a18, _b2, _c;
    opt !== null && opt !== void 0 ? opt : opt = {};
    const acceptCompression = opt.acceptCompression ? [
        ...opt.acceptCompression
    ] : [];
    const requireConnectProtocolHeader = (_a18 = opt.requireConnectProtocolHeader) !== null && _a18 !== void 0 ? _a18 : false;
    const maxTimeoutMs = (_b2 = opt.maxTimeoutMs) !== null && _b2 !== void 0 ? _b2 : Number.MAX_SAFE_INTEGER;
    return Object.assign(Object.assign({
        acceptCompression
    }, validateReadWriteMaxBytes(opt.readMaxBytes, opt.writeMaxBytes, opt.compressMinBytes)), {
        jsonOptions: opt.jsonOptions,
        binaryOptions: opt.binaryOptions,
        maxTimeoutMs,
        shutdownSignal: opt.shutdownSignal,
        requireConnectProtocolHeader,
        interceptors: (_c = opt.interceptors) !== null && _c !== void 0 ? _c : []
    });
}
function createUniversalServiceHandlers(spec, protocols) {
    return Object.entries(spec.methods).map(([, implSpec])=>createUniversalMethodHandler(implSpec, protocols));
}
function createUniversalMethodHandler(spec, protocols) {
    return negotiateProtocol(protocols.map((f2)=>f2(spec)));
}
function negotiateProtocol(protocolHandlers) {
    if (protocolHandlers.length == 0) {
        throw new ConnectError("at least one protocol is required", Code.Internal);
    }
    const service = protocolHandlers[0].service;
    const method = protocolHandlers[0].method;
    const requestPath2 = protocolHandlers[0].requestPath;
    if (protocolHandlers.some((h)=>h.service !== service || h.method !== method)) {
        throw new ConnectError("cannot negotiate protocol for different RPCs", Code.Internal);
    }
    if (protocolHandlers.some((h)=>h.requestPath !== requestPath2)) {
        throw new ConnectError("cannot negotiate protocol for different requestPaths", Code.Internal);
    }
    async function protocolNegotiatingHandler(request3) {
        var _a18;
        if (method.kind == MethodKind.BiDiStreaming && request3.httpVersion.startsWith("1.")) {
            return Object.assign(Object.assign({}, uResponseVersionNotSupported), {
                header: new Headers({
                    Connection: "close"
                })
            });
        }
        const contentType = (_a18 = request3.header.get("Content-Type")) !== null && _a18 !== void 0 ? _a18 : "";
        const matchingMethod = protocolHandlers.filter((h)=>h.allowedMethods.includes(request3.method));
        if (matchingMethod.length == 0) {
            return uResponseMethodNotAllowed;
        }
        if (matchingMethod.length == 1 && contentType === "") {
            const onlyMatch = matchingMethod[0];
            return onlyMatch(request3);
        }
        const matchingContentTypes = matchingMethod.filter((h)=>h.supportedContentType(contentType));
        if (matchingContentTypes.length == 0) {
            return uResponseUnsupportedMediaType;
        }
        const firstMatch = matchingContentTypes[0];
        return firstMatch(request3);
    }
    return Object.assign(protocolNegotiatingHandler, {
        service,
        method,
        requestPath: requestPath2,
        supportedContentType: contentTypeMatcher(...protocolHandlers.map((h)=>h.supportedContentType)),
        protocolNames: protocolHandlers.flatMap((h)=>h.protocolNames).filter((value, index, array3)=>array3.indexOf(value) === index),
        allowedMethods: protocolHandlers.flatMap((h)=>h.allowedMethods).filter((value, index, array3)=>array3.indexOf(value) === index)
    });
}
function createHandlerFactory(options2) {
    const opt = validateUniversalHandlerOptions(options2);
    const trailerSerialization = createTrailerSerialization();
    function fact(spec) {
        const h = createHandler(opt, trailerSerialization, spec);
        return Object.assign(h, {
            protocolNames: [
                protocolName
            ],
            allowedMethods: [
                methodPost
            ],
            supportedContentType: contentTypeMatcher(contentTypeRegExp),
            requestPath: createMethodUrl("/", spec.service, spec.method),
            service: spec.service,
            method: spec.method
        });
    }
    fact.protocolName = protocolName;
    return fact;
}
function createHandler(opt, trailerSerialization, spec) {
    const serialization = createMethodSerializationLookup(spec.method, opt.binaryOptions, opt.jsonOptions, opt);
    return async function handle(req) {
        assertByteStreamRequest(req);
        const type2 = parseContentType(req.header.get(headerContentType));
        if (type2 == void 0 || type2.text) {
            return uResponseUnsupportedMediaType;
        }
        if (req.method !== methodPost) {
            return uResponseMethodNotAllowed;
        }
        const timeout2 = parseTimeout(req.header.get(headerTimeout), opt.maxTimeoutMs);
        const context2 = createHandlerContext(Object.assign(Object.assign({}, spec), {
            requestMethod: req.method,
            protocolName,
            timeoutMs: timeout2.timeoutMs,
            shutdownSignal: opt.shutdownSignal,
            requestSignal: req.signal,
            requestHeader: req.header,
            url: req.url,
            responseHeader: {
                [headerContentType]: type2.binary ? contentTypeProto : contentTypeJson
            },
            responseTrailer: {
                [headerGrpcStatus]: grpcStatusOk
            },
            contextValues: req.contextValues
        }));
        const compression = compressionNegotiate(opt.acceptCompression, req.header.get(headerEncoding), req.header.get(headerAcceptEncoding), headerAcceptEncoding);
        if (compression.response) {
            context2.responseHeader.set(headerEncoding, compression.response.name);
        }
        const inputIt = pipe(req.body, transformPrepend(()=>{
            if (compression.error) throw compression.error;
            if (timeout2.error) throw timeout2.error;
            return void 0;
        }), transformSplitEnvelope(opt.readMaxBytes), transformDecompressEnvelope(compression.request, opt.readMaxBytes), transformParseEnvelope(serialization.getI(type2.binary), trailerFlag));
        const it2 = transformInvokeImplementation(spec, context2, opt.interceptors)(inputIt)[Symbol.asyncIterator]();
        const outputIt = pipe({
            [Symbol.asyncIterator] () {
                return {
                    next: ()=>it2.next(),
                    throw: (e)=>{
                        var _a18, _b2;
                        context2.abort(e);
                        return (_b2 = (_a18 = it2.throw) === null || _a18 === void 0 ? void 0 : _a18.call(it2, e)) !== null && _b2 !== void 0 ? _b2 : Promise.reject({
                            done: true
                        });
                    },
                    return: (v2)=>{
                        var _a18, _b2;
                        context2.abort();
                        return (_b2 = (_a18 = it2.return) === null || _a18 === void 0 ? void 0 : _a18.call(it2, v2)) !== null && _b2 !== void 0 ? _b2 : Promise.resolve({
                            done: true,
                            value: v2
                        });
                    }
                };
            }
        }, transformSerializeEnvelope(serialization.getO(type2.binary)), transformCatchFinally((e)=>{
            context2.abort();
            if (e instanceof ConnectError) {
                setTrailerStatus(context2.responseTrailer, e);
            } else if (e !== void 0) {
                setTrailerStatus(context2.responseTrailer, new ConnectError("internal error", Code.Internal, void 0, void 0, e));
            }
            return {
                flags: trailerFlag,
                data: trailerSerialization.serialize(context2.responseTrailer)
            };
        }), transformCompressEnvelope(compression.response, opt.compressMinBytes), transformJoinEnvelopes(), {
            propagateDownStreamError: true
        });
        return Object.assign(Object.assign({}, uResponseOk), {
            body: await untilFirst(outputIt),
            header: context2.responseHeader
        });
    };
}
function parseContentType2(contentType) {
    const match2 = contentType === null || contentType === void 0 ? void 0 : contentType.match(contentTypeRegExp2);
    if (!match2) {
        return void 0;
    }
    const binary2 = !match2[1];
    return {
        binary: binary2
    };
}
function createHandlerFactory2(options2) {
    const opt = validateUniversalHandlerOptions(options2);
    function fact(spec) {
        const h = createHandler2(opt, spec);
        return Object.assign(h, {
            protocolNames: [
                protocolName2
            ],
            allowedMethods: [
                methodPost2
            ],
            supportedContentType: contentTypeMatcher(contentTypeRegExp2),
            requestPath: createMethodUrl("/", spec.service, spec.method),
            service: spec.service,
            method: spec.method
        });
    }
    fact.protocolName = protocolName2;
    return fact;
}
function createHandler2(opt, spec) {
    const serialization = createMethodSerializationLookup(spec.method, opt.binaryOptions, opt.jsonOptions, opt);
    return async function handle(req) {
        assertByteStreamRequest(req);
        const type2 = parseContentType2(req.header.get(headerContentType));
        if (type2 == void 0) {
            return uResponseUnsupportedMediaType;
        }
        if (req.method !== methodPost2) {
            return uResponseMethodNotAllowed;
        }
        const timeout2 = parseTimeout(req.header.get(headerTimeout), opt.maxTimeoutMs);
        const context2 = createHandlerContext(Object.assign(Object.assign({}, spec), {
            requestMethod: req.method,
            protocolName: protocolName2,
            timeoutMs: timeout2.timeoutMs,
            shutdownSignal: opt.shutdownSignal,
            requestSignal: req.signal,
            requestHeader: req.header,
            url: req.url,
            responseHeader: {
                [headerContentType]: type2.binary ? contentTypeProto2 : contentTypeJson2
            },
            responseTrailer: {
                [headerGrpcStatus]: grpcStatusOk
            },
            contextValues: req.contextValues
        }));
        const compression = compressionNegotiate(opt.acceptCompression, req.header.get(headerEncoding), req.header.get(headerAcceptEncoding), headerAcceptEncoding);
        if (compression.response) {
            context2.responseHeader.set(headerEncoding, compression.response.name);
        }
        const inputIt = pipe(req.body, transformPrepend(()=>{
            if (compression.error) throw compression.error;
            if (timeout2.error) throw timeout2.error;
            return void 0;
        }), transformSplitEnvelope(opt.readMaxBytes), transformDecompressEnvelope(compression.request, opt.readMaxBytes), transformParseEnvelope(serialization.getI(type2.binary)));
        const it2 = transformInvokeImplementation(spec, context2, opt.interceptors)(inputIt)[Symbol.asyncIterator]();
        const outputIt = pipe({
            [Symbol.asyncIterator] () {
                return {
                    next: ()=>it2.next(),
                    throw: (e)=>{
                        var _a18, _b2;
                        context2.abort(e);
                        return (_b2 = (_a18 = it2.throw) === null || _a18 === void 0 ? void 0 : _a18.call(it2, e)) !== null && _b2 !== void 0 ? _b2 : Promise.reject({
                            done: true
                        });
                    },
                    return: (v2)=>{
                        var _a18, _b2;
                        context2.abort();
                        return (_b2 = (_a18 = it2.return) === null || _a18 === void 0 ? void 0 : _a18.call(it2, v2)) !== null && _b2 !== void 0 ? _b2 : Promise.resolve({
                            done: true,
                            value: v2
                        });
                    }
                };
            }
        }, transformSerializeEnvelope(serialization.getO(type2.binary)), transformCompressEnvelope(compression.response, opt.compressMinBytes), transformJoinEnvelopes(), transformCatchFinally((e)=>{
            context2.abort();
            if (e instanceof ConnectError) {
                setTrailerStatus(context2.responseTrailer, e);
            } else if (e !== void 0) {
                setTrailerStatus(context2.responseTrailer, new ConnectError("internal error", Code.Internal, void 0, void 0, e));
            }
        }), {
            propagateDownStreamError: true
        });
        return Object.assign(Object.assign({}, uResponseOk), {
            body: await untilFirst(outputIt),
            header: context2.responseHeader,
            trailer: context2.responseTrailer
        });
    };
}
function parseContentType3(contentType) {
    if (contentType === "text/event-stream") return {
        stream: true,
        binary: true
    };
    const match2 = contentType === null || contentType === void 0 ? void 0 : contentType.match(contentTypeRegExp3);
    if (!match2) {
        return void 0;
    }
    const stream3 = !!match2[1];
    const binary2 = !!match2[3];
    return {
        stream: stream3,
        binary: binary2
    };
}
function parseEncodingQuery(encoding) {
    switch(encoding){
        case encodingProto:
            return {
                stream: false,
                binary: true
            };
        case encodingJson:
            return {
                stream: false,
                binary: false
            };
        default:
            return void 0;
    }
}
function errorFromJson(jsonValue, metadata, fallback3) {
    var _a18;
    if (metadata) {
        new Headers(metadata).forEach((value, key)=>fallback3.metadata.append(key, value));
    }
    if (typeof jsonValue !== "object" || jsonValue == null || Array.isArray(jsonValue)) {
        throw fallback3;
    }
    let code = fallback3.code;
    if ("code" in jsonValue && typeof jsonValue.code === "string") {
        code = (_a18 = codeFromString(jsonValue.code)) !== null && _a18 !== void 0 ? _a18 : code;
    }
    const message = jsonValue.message;
    if (message != null && typeof message !== "string") {
        throw fallback3;
    }
    const error3 = new ConnectError(message !== null && message !== void 0 ? message : "", code, metadata);
    if ("details" in jsonValue && Array.isArray(jsonValue.details)) {
        for (const detail of jsonValue.details){
            if (detail === null || typeof detail != "object" || Array.isArray(detail) || typeof detail.type != "string" || typeof detail.value != "string") {
                throw fallback3;
            }
            try {
                error3.details.push({
                    type: detail.type,
                    value: protoBase64.dec(detail.value),
                    debug: detail.debug
                });
            } catch (e) {
                throw fallback3;
            }
        }
    }
    return error3;
}
function errorFromJsonBytes(bytes, metadata, fallback3) {
    let jsonValue;
    try {
        jsonValue = JSON.parse(new TextDecoder().decode(bytes));
    } catch (e) {
        throw fallback3;
    }
    return errorFromJson(jsonValue, metadata, fallback3);
}
function errorToJson(error3, jsonWriteOptions) {
    const o = {
        code: codeToString(error3.code)
    };
    if (error3.rawMessage.length > 0) {
        o.message = error3.rawMessage;
    }
    if (error3.details.length > 0) {
        o.details = error3.details.map((value)=>{
            if ("getType" in value) {
                const i = {
                    type: value.getType().typeName,
                    value: value.toBinary()
                };
                try {
                    i.debug = value.toJson(jsonWriteOptions);
                } catch (e) {}
                return i;
            }
            return value;
        }).map((_a18)=>{
            var { value } = _a18, rest = __rest(_a18, [
                "value"
            ]);
            return Object.assign(Object.assign({}, rest), {
                value: protoBase64.enc(value).replace(/=+$/, "")
            });
        });
    }
    return o;
}
function errorToJsonBytes(error3, jsonWriteOptions) {
    const textEncoder2 = new TextEncoder();
    try {
        const jsonObject = errorToJson(error3, jsonWriteOptions);
        const jsonString = JSON.stringify(jsonObject);
        return textEncoder2.encode(jsonString);
    } catch (e) {
        const m2 = e instanceof Error ? e.message : String(e);
        throw new ConnectError(`failed to serialize Connect Error: ${m2}`, Code.Internal);
    }
}
function endStreamFromJson(data) {
    const parseErr = new ConnectError("invalid end stream", Code.Unknown);
    let jsonValue;
    try {
        jsonValue = JSON.parse(typeof data == "string" ? data : new TextDecoder().decode(data));
    } catch (e) {
        throw parseErr;
    }
    if (typeof jsonValue != "object" || jsonValue == null || Array.isArray(jsonValue)) {
        throw parseErr;
    }
    const metadata = new Headers();
    if ("metadata" in jsonValue) {
        if (typeof jsonValue.metadata != "object" || jsonValue.metadata == null || Array.isArray(jsonValue.metadata)) {
            throw parseErr;
        }
        for (const [key, values] of Object.entries(jsonValue.metadata)){
            if (!Array.isArray(values) || values.some((value)=>typeof value != "string")) {
                throw parseErr;
            }
            for (const value of values){
                metadata.append(key, value);
            }
        }
    }
    const error3 = "error" in jsonValue && jsonValue.error != null ? errorFromJson(jsonValue.error, metadata, parseErr) : void 0;
    return {
        metadata,
        error: error3
    };
}
function endStreamToJson(metadata, error3, jsonWriteOptions) {
    const es2 = {};
    if (error3 !== void 0) {
        es2.error = errorToJson(error3, jsonWriteOptions);
        metadata = appendHeaders(metadata, error3.metadata);
    }
    let hasMetadata = false;
    const md = {};
    metadata.forEach((value, key)=>{
        hasMetadata = true;
        md[key] = [
            value
        ];
    });
    if (hasMetadata) {
        es2.metadata = md;
    }
    return es2;
}
function createEndStreamSerialization(options2) {
    const textEncoder2 = new TextEncoder();
    return {
        serialize (data) {
            try {
                const jsonObject = endStreamToJson(data.metadata, data.error, options2);
                const jsonString = JSON.stringify(jsonObject);
                return textEncoder2.encode(jsonString);
            } catch (e) {
                const m2 = e instanceof Error ? e.message : String(e);
                throw new ConnectError(`failed to serialize EndStreamResponse: ${m2}`, Code.Internal);
            }
        },
        parse (data) {
            try {
                return endStreamFromJson(data);
            } catch (e) {
                const m2 = e instanceof Error ? e.message : String(e);
                throw new ConnectError(`failed to parse EndStreamResponse: ${m2}`, Code.InvalidArgument);
            }
        }
    };
}
function codeFromHttpStatus(httpStatus) {
    switch(httpStatus){
        case 400:
            return Code.Internal;
        case 401:
            return Code.Unauthenticated;
        case 403:
            return Code.PermissionDenied;
        case 404:
            return Code.Unimplemented;
        case 429:
            return Code.Unavailable;
        case 502:
            return Code.Unavailable;
        case 503:
            return Code.Unavailable;
        case 504:
            return Code.Unavailable;
        default:
            return Code.Unknown;
    }
}
function codeToHttpStatus(code) {
    switch(code){
        case Code.Canceled:
            return 499;
        case Code.Unknown:
            return 500;
        case Code.InvalidArgument:
            return 400;
        case Code.DeadlineExceeded:
            return 504;
        case Code.NotFound:
            return 404;
        case Code.AlreadyExists:
            return 409;
        case Code.PermissionDenied:
            return 403;
        case Code.ResourceExhausted:
            return 429;
        case Code.FailedPrecondition:
            return 400;
        case Code.Aborted:
            return 409;
        case Code.OutOfRange:
            return 400;
        case Code.Unimplemented:
            return 501;
        case Code.Internal:
            return 500;
        case Code.Unavailable:
            return 503;
        case Code.DataLoss:
            return 500;
        case Code.Unauthenticated:
            return 401;
        default:
            return 500;
    }
}
function parseTimeout2(value, maxTimeoutMs) {
    if (value === null) {
        return {};
    }
    const results = /^\d{1,10}$/.exec(value);
    if (results === null) {
        return {
            error: new ConnectError(`protocol error: invalid connect timeout value: ${value}`, Code.InvalidArgument)
        };
    }
    const timeoutMs = parseInt(results[0]);
    if (timeoutMs > maxTimeoutMs) {
        return {
            timeoutMs,
            error: new ConnectError(`timeout ${timeoutMs}ms must be <= ${maxTimeoutMs}`, Code.InvalidArgument)
        };
    }
    return {
        timeoutMs: parseInt(results[0])
    };
}
function trailerDemux(header) {
    const h = new Headers(), t = new Headers();
    header.forEach((value, key)=>{
        if (key.toLowerCase().startsWith("trailer-")) {
            t.append(key.substring(8), value);
        } else {
            h.append(key, value);
        }
    });
    return [
        h,
        t
    ];
}
function trailerMux(header, trailer) {
    const h = new Headers(header);
    trailer.forEach((value, key)=>{
        h.append(`trailer-${key}`, value);
    });
    return h;
}
function requireProtocolVersionHeader(requestHeader2) {
    const v2 = requestHeader2.get(headerProtocolVersion);
    if (v2 === null) {
        throw new ConnectError(`missing required header: set ${headerProtocolVersion} to "${protocolVersion}"`, Code.InvalidArgument);
    } else if (v2 !== protocolVersion) {
        throw new ConnectError(`${headerProtocolVersion} must be "${protocolVersion}": got "${v2}"`, Code.InvalidArgument);
    }
}
function requireProtocolVersionParam(queryParams) {
    const v2 = queryParams.get(paramConnectVersion);
    if (v2 === null) {
        throw new ConnectError(`missing required parameter: set ${paramConnectVersion} to "v${protocolVersion}"`, Code.InvalidArgument);
    } else if (v2 !== `v${protocolVersion}`) {
        throw new ConnectError(`${paramConnectVersion} must be "v${protocolVersion}": got "${v2}"`, Code.InvalidArgument);
    }
}
function createHandlerFactory3(options2) {
    const opt = validateUniversalHandlerOptions(options2);
    const endStreamSerialization = createEndStreamSerialization(opt.jsonOptions);
    function fact(spec) {
        let h;
        let contentTypeRegExp4;
        const serialization = createMethodSerializationLookup(spec.method, opt.binaryOptions, opt.jsonOptions, opt);
        switch(spec.kind){
            case MethodKind.Unary:
                contentTypeRegExp4 = contentTypeUnaryRegExp;
                h = createUnaryHandler(opt, spec, serialization);
                break;
            default:
                contentTypeRegExp4 = contentTypeStreamRegExp;
                h = createStreamHandler(opt, spec, serialization, endStreamSerialization);
                break;
        }
        const allowedMethods = [
            methodPost3
        ];
        if (spec.method.idempotency === MethodIdempotency.NoSideEffects) {
            allowedMethods.push(methodGet);
        }
        return Object.assign(h, {
            protocolNames: [
                protocolName3
            ],
            supportedContentType: contentTypeMatcher(contentTypeRegExp4),
            allowedMethods,
            requestPath: createMethodUrl("/", spec.service, spec.method),
            service: spec.service,
            method: spec.method
        });
    }
    fact.protocolName = protocolName3;
    return fact;
}
function createUnaryHandler(opt, spec, serialization) {
    return async function handle(req) {
        const isGet = req.method == methodGet;
        if (isGet && spec.method.idempotency != MethodIdempotency.NoSideEffects) {
            return uResponseMethodNotAllowed;
        }
        const queryParams = new URL(req.url).searchParams;
        const compressionRequested = isGet ? queryParams.get(paramCompression) : req.header.get(headerUnaryEncoding);
        const type2 = isGet ? parseEncodingQuery(queryParams.get(paramEncoding)) : parseContentType3(req.header.get(headerContentType2));
        if (type2 == void 0 || type2.stream) {
            return uResponseUnsupportedMediaType;
        }
        const timeout2 = parseTimeout2(req.header.get(headerTimeout2), opt.maxTimeoutMs);
        const context2 = createHandlerContext(Object.assign(Object.assign({}, spec), {
            requestMethod: req.method,
            protocolName: protocolName3,
            timeoutMs: timeout2.timeoutMs,
            shutdownSignal: opt.shutdownSignal,
            requestSignal: req.signal,
            requestHeader: req.header,
            url: req.url,
            responseHeader: {
                [headerContentType2]: type2.binary ? contentTypeUnaryProto : contentTypeUnaryJson
            },
            contextValues: req.contextValues
        }));
        const compression = compressionNegotiate(opt.acceptCompression, compressionRequested, req.header.get(headerUnaryAcceptEncoding), headerUnaryAcceptEncoding);
        let status = uResponseOk.status;
        let body;
        try {
            if (opt.requireConnectProtocolHeader) {
                if (isGet) {
                    requireProtocolVersionParam(queryParams);
                } else {
                    requireProtocolVersionHeader(req.header);
                }
            }
            if (compression.error) {
                throw compression.error;
            }
            if (timeout2.error) {
                throw timeout2.error;
            }
            let reqBody;
            if (isGet) {
                reqBody = await readUnaryMessageFromQuery(opt.readMaxBytes, compression.request, queryParams);
            } else {
                reqBody = await readUnaryMessageFromBody(opt.readMaxBytes, compression.request, req);
            }
            const input = parseUnaryMessage(spec.method, type2.binary, serialization, reqBody);
            const output = await invokeUnaryImplementation(spec, context2, input, opt.interceptors);
            body = serialization.getO(type2.binary).serialize(output);
        } catch (e) {
            let error3;
            if (e instanceof ConnectError) {
                error3 = e;
            } else {
                error3 = new ConnectError("internal error", Code.Internal, void 0, void 0, e);
            }
            status = codeToHttpStatus(error3.code);
            context2.responseHeader.set(headerContentType2, contentTypeUnaryJson);
            error3.metadata.forEach((value, key)=>{
                context2.responseHeader.set(key, value);
            });
            body = errorToJsonBytes(error3, opt.jsonOptions);
        } finally{
            context2.abort();
        }
        if (compression.response && body.byteLength >= opt.compressMinBytes) {
            body = await compression.response.compress(body);
            context2.responseHeader.set(headerUnaryEncoding, compression.response.name);
        }
        const header = trailerMux(context2.responseHeader, context2.responseTrailer);
        header.set(headerUnaryContentLength, body.byteLength.toString(10));
        return {
            status,
            body: createAsyncIterable([
                body
            ]),
            header
        };
    };
}
async function readUnaryMessageFromBody(readMaxBytes, compression, request3) {
    if (typeof request3.body == "object" && request3.body !== null && Symbol.asyncIterator in request3.body) {
        let reqBytes = await readAllBytes(request3.body, readMaxBytes, request3.header.get(headerUnaryContentLength));
        if (compression) {
            reqBytes = await compression.decompress(reqBytes, readMaxBytes);
        }
        return reqBytes;
    }
    return request3.body;
}
async function readUnaryMessageFromQuery(readMaxBytes, compression, queryParams) {
    var _a18;
    const base642 = queryParams.get(paramBase64);
    const message = (_a18 = queryParams.get(paramMessage)) !== null && _a18 !== void 0 ? _a18 : "";
    let decoded;
    if (base642 === "1") {
        decoded = protoBase64.dec(message);
    } else {
        decoded = new TextEncoder().encode(message);
    }
    if (compression) {
        decoded = await compression.decompress(decoded, readMaxBytes);
    }
    return decoded;
}
function parseUnaryMessage(method, useBinaryFormat, serialization, input) {
    if (input instanceof Uint8Array) {
        return serialization.getI(useBinaryFormat).parse(input);
    }
    if (useBinaryFormat) {
        throw new ConnectError("received parsed JSON request body, but content-type indicates binary format", Code.Internal);
    }
    try {
        return method.I.fromJson(input);
    } catch (e) {
        throw ConnectError.from(e, Code.InvalidArgument);
    }
}
function createStreamHandler(opt, spec, serialization, endStreamSerialization) {
    return async function handle(req) {
        assertByteStreamRequest(req);
        const type2 = parseContentType3(req.header.get(headerContentType2));
        if (type2 == void 0 || !type2.stream) {
            return uResponseUnsupportedMediaType;
        }
        if (req.method !== methodPost3) {
            return uResponseMethodNotAllowed;
        }
        const timeout2 = parseTimeout2(req.header.get(headerTimeout2), opt.maxTimeoutMs);
        const context2 = createHandlerContext(Object.assign(Object.assign({}, spec), {
            requestMethod: req.method,
            protocolName: protocolName3,
            timeoutMs: timeout2.timeoutMs,
            shutdownSignal: opt.shutdownSignal,
            requestSignal: req.signal,
            requestHeader: req.header,
            url: req.url,
            responseHeader: {
                [headerContentType2]: type2.binary ? contentTypeStreamProto : contentTypeStreamJson
            },
            contextValues: req.contextValues
        }));
        const compression = compressionNegotiate(opt.acceptCompression, req.header.get(headerStreamEncoding), req.header.get(headerStreamAcceptEncoding), headerStreamAcceptEncoding);
        if (compression.response) {
            context2.responseHeader.set(headerStreamEncoding, compression.response.name);
        }
        const inputIt = pipe(req.body, transformPrepend(()=>{
            if (opt.requireConnectProtocolHeader) {
                requireProtocolVersionHeader(req.header);
            }
            if (compression.error) throw compression.error;
            if (timeout2.error) throw timeout2.error;
            return void 0;
        }), transformSplitEnvelope(opt.readMaxBytes), transformDecompressEnvelope(compression.request, opt.readMaxBytes), transformParseEnvelope(serialization.getI(type2.binary), endStreamFlag));
        const it2 = transformInvokeImplementation(spec, context2, opt.interceptors)(inputIt)[Symbol.asyncIterator]();
        const outputIt = pipe({
            [Symbol.asyncIterator] () {
                return {
                    next: ()=>it2.next(),
                    throw: (e)=>{
                        var _a18, _b2;
                        context2.abort(e);
                        return (_b2 = (_a18 = it2.throw) === null || _a18 === void 0 ? void 0 : _a18.call(it2, e)) !== null && _b2 !== void 0 ? _b2 : Promise.reject({
                            done: true
                        });
                    },
                    return: (v2)=>{
                        var _a18, _b2;
                        context2.abort();
                        return (_b2 = (_a18 = it2.return) === null || _a18 === void 0 ? void 0 : _a18.call(it2, v2)) !== null && _b2 !== void 0 ? _b2 : Promise.resolve({
                            done: true,
                            value: v2
                        });
                    }
                };
            }
        }, transformSerializeEnvelope(serialization.getO(type2.binary)), transformCatchFinally((e)=>{
            context2.abort();
            const end = {
                metadata: context2.responseTrailer
            };
            if (e instanceof ConnectError) {
                end.error = e;
            } else if (e !== void 0) {
                end.error = new ConnectError("internal error", Code.Internal, void 0, void 0, e);
            }
            return {
                flags: endStreamFlag,
                data: endStreamSerialization.serialize(end)
            };
        }), transformCompressEnvelope(compression.response, opt.compressMinBytes), transformJoinEnvelopes(), {
            propagateDownStreamError: true
        });
        return Object.assign(Object.assign({}, uResponseOk), {
            body: await untilFirst(outputIt),
            header: context2.responseHeader
        });
    };
}
export function createConnectRouter(routerOptions) {
    const base = whichProtocols(routerOptions);
    const handlers = [];
    return {
        handlers,
        service (service, implementation, options2) {
            const { protocols } = whichProtocols(options2, base);
            handlers.push(...createUniversalServiceHandlers(createServiceImplSpec(service, implementation), protocols));
            return this;
        },
        rpc (serviceOrMethod, methodOrImpl, implementationOrOptions, options2) {
            let service;
            let method;
            let impl;
            let opt;
            if ("typeName" in serviceOrMethod) {
                service = serviceOrMethod;
                method = methodOrImpl;
                impl = implementationOrOptions;
                opt = options2;
            } else {
                service = Object.assign(Object.assign({}, serviceOrMethod.service), {
                    methods: {}
                });
                method = serviceOrMethod;
                impl = methodOrImpl;
                opt = implementationOrOptions;
            }
            const { protocols } = whichProtocols(opt, base);
            handlers.push(createUniversalMethodHandler(createMethodImplSpec(service, method, impl), protocols));
            return this;
        }
    };
}
function whichProtocols(options2, base) {
    if (base && !options2) {
        return base;
    }
    const opt = base ? Object.assign(Object.assign({}, validateUniversalHandlerOptions(base.options)), options2) : Object.assign(Object.assign({}, options2), validateUniversalHandlerOptions(options2 !== null && options2 !== void 0 ? options2 : {}));
    const protocols = [];
    if ((options2 === null || options2 === void 0 ? void 0 : options2.grpc) !== false) {
        protocols.push(createHandlerFactory2(opt));
    }
    if ((options2 === null || options2 === void 0 ? void 0 : options2.grpcWeb) !== false) {
        protocols.push(createHandlerFactory(opt));
    }
    if ((options2 === null || options2 === void 0 ? void 0 : options2.connect) !== false) {
        protocols.push(createHandlerFactory3(opt));
    }
    if (protocols.length === 0) {
        throw new ConnectError("cannot create handler, all protocols are disabled", Code.InvalidArgument);
    }
    return {
        options: opt,
        protocols
    };
}
function requestHeader(methodKind, useBinaryFormat, timeoutMs, userProvidedHeaders, setUserAgent) {
    const result = new Headers(userProvidedHeaders !== null && userProvidedHeaders !== void 0 ? userProvidedHeaders : {});
    if (timeoutMs !== void 0) {
        result.set(headerTimeout2, `${timeoutMs}`);
    }
    result.set(headerContentType2, methodKind == MethodKind.Unary ? useBinaryFormat ? contentTypeUnaryProto : contentTypeUnaryJson : useBinaryFormat ? contentTypeStreamProto : contentTypeStreamJson);
    result.set(headerProtocolVersion, protocolVersion);
    if (setUserAgent) {
        result.set(headerUserAgent2, "connect-es/1.6.1");
    }
    return result;
}
function requestHeaderWithCompression(methodKind, useBinaryFormat, timeoutMs, userProvidedHeaders, acceptCompression, sendCompression, setUserAgent) {
    const result = requestHeader(methodKind, useBinaryFormat, timeoutMs, userProvidedHeaders, setUserAgent);
    if (sendCompression != null) {
        const name17 = methodKind == MethodKind.Unary ? headerUnaryEncoding : headerStreamEncoding;
        result.set(name17, sendCompression.name);
    }
    if (acceptCompression.length > 0) {
        const name17 = methodKind == MethodKind.Unary ? headerUnaryAcceptEncoding : headerStreamAcceptEncoding;
        result.set(name17, acceptCompression.map((c)=>c.name).join(","));
    }
    return result;
}
function validateResponse(methodKind, useBinaryFormat, status, headers) {
    const mimeType = headers.get(headerContentType2);
    const parsedType2 = parseContentType3(mimeType);
    if (status !== 200) {
        const errorFromStatus = new ConnectError(`HTTP ${status}`, codeFromHttpStatus(status), headers);
        if (methodKind == MethodKind.Unary && parsedType2 && !parsedType2.binary) {
            return {
                isUnaryError: true,
                unaryError: errorFromStatus
            };
        }
        throw errorFromStatus;
    }
    const allowedContentType = {
        binary: useBinaryFormat,
        stream: methodKind !== MethodKind.Unary
    };
    if ((parsedType2 === null || parsedType2 === void 0 ? void 0 : parsedType2.binary) !== allowedContentType.binary || parsedType2.stream !== allowedContentType.stream) {
        throw new ConnectError(`unsupported content type ${mimeType}`, parsedType2 === void 0 ? Code.Unknown : Code.Internal, headers);
    }
    return {
        isUnaryError: false
    };
}
function validateResponseWithCompression(methodKind, acceptCompression, useBinaryFormat, status, headers) {
    let compression;
    const encoding = headers.get(methodKind == MethodKind.Unary ? headerUnaryEncoding : headerStreamEncoding);
    if (encoding != null && encoding.toLowerCase() !== "identity") {
        compression = acceptCompression.find((c)=>c.name === encoding);
        if (!compression) {
            throw new ConnectError(`unsupported response encoding "${encoding}"`, Code.Internal, headers);
        }
    }
    return Object.assign({
        compression
    }, validateResponse(methodKind, useBinaryFormat, status, headers));
}
function encodeMessageForUrl(message, useBase64) {
    if (useBase64) {
        return protoBase64.enc(message).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    } else {
        return encodeURIComponent(new TextDecoder().decode(message));
    }
}
function transformConnectPostToGetRequest(request3, message, useBase64) {
    let query = `?connect=v${protocolVersion}`;
    const contentType = request3.header.get(headerContentType2);
    if ((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(contentTypePrefix)) === 0) {
        query += "&encoding=" + encodeURIComponent(contentType.slice(contentTypePrefix.length));
    }
    const compression = request3.header.get(headerUnaryEncoding);
    if (compression !== null && compression !== "identity") {
        query += "&compression=" + encodeURIComponent(compression);
        useBase64 = true;
    }
    if (useBase64) {
        query += "&base64=1";
    }
    query += "&message=" + encodeMessageForUrl(message, useBase64);
    const url2 = request3.url + query;
    const header = new Headers(request3.header);
    [
        headerProtocolVersion,
        headerContentType2,
        headerUnaryContentLength,
        headerUnaryEncoding,
        headerUnaryAcceptEncoding
    ].forEach((h)=>header.delete(h));
    return Object.assign(Object.assign({}, request3), {
        init: Object.assign(Object.assign({}, request3.init), {
            method: "GET"
        }),
        url: url2,
        header
    });
}
function runUnaryCall(opt) {
    const next = applyInterceptors(opt.next, opt.interceptors);
    const [signal, abort, done] = setupSignal(opt);
    const req = Object.assign(Object.assign({}, opt.req), {
        message: normalize2(opt.req.method.I, opt.req.message),
        signal
    });
    return next(req).then((res)=>{
        done();
        return res;
    }, abort);
}
function runStreamingCall(opt) {
    const next = applyInterceptors(opt.next, opt.interceptors);
    const [signal, abort, done] = setupSignal(opt);
    const req = Object.assign(Object.assign({}, opt.req), {
        message: normalizeIterable(opt.req.method.I, opt.req.message),
        signal
    });
    let doneCalled = false;
    signal.addEventListener("abort", function() {
        var _a18, _b2;
        const it2 = opt.req.message[Symbol.asyncIterator]();
        if (!doneCalled) {
            (_a18 = it2.throw) === null || _a18 === void 0 ? void 0 : _a18.call(it2, this.reason).catch(()=>{});
        }
        (_b2 = it2.return) === null || _b2 === void 0 ? void 0 : _b2.call(it2).catch(()=>{});
    });
    return next(req).then((res)=>{
        return Object.assign(Object.assign({}, res), {
            message: {
                [Symbol.asyncIterator] () {
                    const it2 = res.message[Symbol.asyncIterator]();
                    return {
                        next () {
                            return it2.next().then((r)=>{
                                if (r.done == true) {
                                    doneCalled = true;
                                    done();
                                }
                                return r;
                            }, abort);
                        }
                    };
                }
            }
        });
    }, abort);
}
function setupSignal(opt) {
    const { signal, cleanup } = createDeadlineSignal(opt.timeoutMs);
    const controller = createLinkedAbortController(opt.signal, signal);
    return [
        controller.signal,
        function abort(reason) {
            const e = ConnectError.from(signal.aborted ? getAbortSignalReason(signal) : reason);
            controller.abort(e);
            cleanup();
            return Promise.reject(e);
        },
        function done() {
            cleanup();
            controller.abort();
        }
    ];
}
export function createTransport(opt) {
    return {
        async unary (service, method, signal, timeoutMs, header, message, contextValues) {
            const serialization = createMethodSerializationLookup(method, opt.binaryOptions, opt.jsonOptions, opt);
            timeoutMs = timeoutMs === void 0 ? opt.defaultTimeoutMs : timeoutMs <= 0 ? void 0 : timeoutMs;
            return await runUnaryCall({
                interceptors: opt.interceptors,
                signal,
                timeoutMs,
                req: {
                    stream: false,
                    service,
                    method,
                    url: createMethodUrl(opt.baseUrl, service, method),
                    init: {},
                    header: requestHeaderWithCompression(method.kind, opt.useBinaryFormat, timeoutMs, header, opt.acceptCompression, opt.sendCompression, true),
                    contextValues: contextValues !== null && contextValues !== void 0 ? contextValues : createContextValues(),
                    message
                },
                next: async (req)=>{
                    var _a18;
                    let requestBody = serialization.getI(opt.useBinaryFormat).serialize(req.message);
                    if (opt.sendCompression && requestBody.byteLength > opt.compressMinBytes) {
                        requestBody = await opt.sendCompression.compress(requestBody);
                        req.header.set(headerUnaryEncoding, opt.sendCompression.name);
                    } else {
                        req.header.delete(headerUnaryEncoding);
                    }
                    const useGet = opt.useHttpGet === true && method.idempotency === MethodIdempotency.NoSideEffects;
                    let body;
                    if (useGet) {
                        req = transformConnectPostToGetRequest(req, requestBody, opt.useBinaryFormat);
                    } else {
                        body = createAsyncIterable([
                            requestBody
                        ]);
                        if (requestBody.length === 0) {
                            req.header.set("Content-Length", "0");
                        }
                    }
                    const universalResponse = await opt.httpClient({
                        url: req.url,
                        method: (_a18 = req.init.method) !== null && _a18 !== void 0 ? _a18 : "POST",
                        header: req.header,
                        signal: req.signal,
                        body
                    });
                    const { compression, isUnaryError, unaryError } = validateResponseWithCompression(method.kind, opt.acceptCompression, opt.useBinaryFormat, universalResponse.status, universalResponse.header);
                    const [header2, trailer] = trailerDemux(universalResponse.header);
                    let responseBody = await pipeTo(universalResponse.body, sinkAllBytes(opt.readMaxBytes, universalResponse.header.get(headerUnaryContentLength)), {
                        propagateDownStreamError: false
                    });
                    if (compression) {
                        responseBody = await compression.decompress(responseBody, opt.readMaxBytes);
                    }
                    if (isUnaryError) {
                        throw errorFromJsonBytes(responseBody, appendHeaders(header2, trailer), unaryError);
                    }
                    return {
                        stream: false,
                        service,
                        method,
                        header: header2,
                        message: serialization.getO(opt.useBinaryFormat).parse(responseBody),
                        trailer
                    };
                }
            });
        },
        async stream (service, method, signal, timeoutMs, header, input, contextValues) {
            const serialization = createMethodSerializationLookup(method, opt.binaryOptions, opt.jsonOptions, opt);
            const endStreamSerialization = createEndStreamSerialization(opt.jsonOptions);
            timeoutMs = timeoutMs === void 0 ? opt.defaultTimeoutMs : timeoutMs <= 0 ? void 0 : timeoutMs;
            return runStreamingCall({
                interceptors: opt.interceptors,
                signal,
                timeoutMs,
                req: {
                    stream: true,
                    service,
                    method,
                    url: createMethodUrl(opt.baseUrl, service, method),
                    init: {
                        method: "POST",
                        redirect: "error",
                        mode: "cors"
                    },
                    header: requestHeaderWithCompression(method.kind, opt.useBinaryFormat, timeoutMs, header, opt.acceptCompression, opt.sendCompression, true),
                    contextValues: contextValues !== null && contextValues !== void 0 ? contextValues : createContextValues(),
                    message: input
                },
                next: async (req)=>{
                    const uRes = await opt.httpClient({
                        url: req.url,
                        method: "POST",
                        header: req.header,
                        signal: req.signal,
                        body: pipe(req.message, transformSerializeEnvelope(serialization.getI(opt.useBinaryFormat)), transformCompressEnvelope(opt.sendCompression, opt.compressMinBytes), transformJoinEnvelopes(), {
                            propagateDownStreamError: true
                        })
                    });
                    const { compression } = validateResponseWithCompression(method.kind, opt.acceptCompression, opt.useBinaryFormat, uRes.status, uRes.header);
                    const res = Object.assign(Object.assign({}, req), {
                        header: uRes.header,
                        trailer: new Headers(),
                        message: pipe(uRes.body, transformSplitEnvelope(opt.readMaxBytes), transformDecompressEnvelope(compression !== null && compression !== void 0 ? compression : null, opt.readMaxBytes), transformParseEnvelope(serialization.getO(opt.useBinaryFormat), endStreamFlag, endStreamSerialization), function(iterable) {
                            return __asyncGenerator4(this, arguments, function*() {
                                var _a18, e_1, _b2, _c;
                                let endStreamReceived = false;
                                try {
                                    for(var _d = true, iterable_1 = __asyncValues4(iterable), iterable_1_1; iterable_1_1 = yield __await4(iterable_1.next()), _a18 = iterable_1_1.done, !_a18; _d = true){
                                        _c = iterable_1_1.value;
                                        _d = false;
                                        const chunk = _c;
                                        if (chunk.end) {
                                            if (endStreamReceived) {
                                                throw new ConnectError("protocol error: received extra EndStreamResponse", Code.InvalidArgument);
                                            }
                                            endStreamReceived = true;
                                            if (chunk.value.error) {
                                                const error3 = chunk.value.error;
                                                uRes.header.forEach((value, key)=>{
                                                    error3.metadata.append(key, value);
                                                });
                                                throw error3;
                                            }
                                            chunk.value.metadata.forEach((value, key)=>res.trailer.set(key, value));
                                            continue;
                                        }
                                        if (endStreamReceived) {
                                            throw new ConnectError("protocol error: received extra message after EndStreamResponse", Code.InvalidArgument);
                                        }
                                        yield yield __await4(chunk.value);
                                    }
                                } catch (e_1_1) {
                                    e_1 = {
                                        error: e_1_1
                                    };
                                } finally{
                                    try {
                                        if (!_d && !_a18 && (_b2 = iterable_1.return)) yield __await4(_b2.call(iterable_1));
                                    } finally{
                                        if (e_1) throw e_1.error;
                                    }
                                }
                                if (!endStreamReceived) {
                                    throw new ConnectError("protocol error: missing EndStreamResponse", Code.InvalidArgument);
                                }
                            });
                        }, {
                            propagateDownStreamError: true
                        })
                    });
                    return res;
                }
            });
        }
    };
}
export function createUniversalHandlerClient(uHandlers) {
    const handlerMap = new Map();
    for (const handler of uHandlers){
        handlerMap.set(handler.requestPath, handler);
    }
    return async (uClientReq)=>{
        var _a18, _b2, _c;
        const pathname = new URL(uClientReq.url).pathname;
        const handler = handlerMap.get(pathname);
        if (!handler) {
            throw new ConnectError(`RouterHttpClient: no handler registered for ${pathname}`, Code.Unimplemented);
        }
        const reqSignal = (_a18 = uClientReq.signal) !== null && _a18 !== void 0 ? _a18 : new AbortController().signal;
        const uServerRes = await raceSignal(reqSignal, handler({
            body: (_b2 = uClientReq.body) !== null && _b2 !== void 0 ? _b2 : createAsyncIterable([]),
            httpVersion: "2.0",
            method: uClientReq.method,
            url: uClientReq.url,
            header: uClientReq.header,
            signal: reqSignal
        }));
        const body = (_c = uServerRes.body) !== null && _c !== void 0 ? _c : createAsyncIterable([]);
        return {
            body: pipe(body, (iterable)=>{
                return {
                    [Symbol.asyncIterator] () {
                        const it2 = iterable[Symbol.asyncIterator]();
                        const w2 = {
                            next () {
                                return raceSignal(reqSignal, it2.next());
                            }
                        };
                        if (it2.throw !== void 0) {
                            w2.throw = (e)=>it2.throw(e);
                        }
                        if (it2.return !== void 0) {
                            w2.return = (value)=>it2.return(value);
                        }
                        return w2;
                    }
                };
            }),
            header: new Headers(uServerRes.header),
            status: uServerRes.status,
            trailer: new Headers(uServerRes.trailer)
        };
    };
}
function raceSignal(signal, promise) {
    let cleanup;
    const signalPromise = new Promise((_2, reject2)=>{
        const onAbort = ()=>reject2(getAbortSignalReason(signal));
        if (signal.aborted) {
            return onAbort();
        }
        signal.addEventListener("abort", onAbort);
        cleanup = ()=>signal.removeEventListener("abort", onAbort);
    });
    return Promise.race([
        signalPromise,
        promise
    ]).finally(cleanup);
}
export function withRelayedAttemptFailure(details, failure2) {
    const relayed = details.clone();
    relayed.details ??= new CustomErrorDetails();
    relayed.details.additionalInfo[RELAYED_ATTEMPT_FAILURE_KEY] = JSON.stringify(failure2);
    return relayed;
}
function withoutRelayedAttemptFailure(details) {
    if (details.details?.additionalInfo[RELAYED_ATTEMPT_FAILURE_KEY] === void 0) {
        return details;
    }
    const sent = details.clone();
    if (sent.details !== void 0) {
        delete sent.details.additionalInfo[RELAYED_ATTEMPT_FAILURE_KEY];
        if (sent.details.equals(new CustomErrorDetails())) {
            sent.details = void 0;
        }
    }
    return sent;
}
function parseRelayedAttemptFailure(details) {
    const relayed = details?.details?.additionalInfo[RELAYED_ATTEMPT_FAILURE_KEY];
    if (relayed === void 0) {
        return void 0;
    }
    try {
        const parsed = relayedAttemptFailureSchema.safeParse(JSON.parse(relayed));
        return parsed.success ? parsed.data : void 0;
    } catch  {
        return void 0;
    }
}
export function classifyError(error3, options2 = {}) {
    const { requestId } = options2;
    if (error3 instanceof AgentError) {
        return error3;
    }
    if (isConnectError(error3)) {
        return classifyConnectError(error3, requestId);
    }
    const blobNotFound = findBlobNotFoundError(error3);
    if (blobNotFound !== void 0) {
        return new NonRetriableError(blobNotFound.message, {
            cause: error3 instanceof Error ? error3 : void 0,
            requestId,
            displayInfo: {
                title: "Conversation data missing",
                detail: blobNotFound.message,
                isRetryable: false
            }
        });
    }
    const placeholderRejected = findSummaryPlaceholderRejectedError(error3);
    if (placeholderRejected !== void 0) {
        return new NonRetriableError(placeholderRejected.message, {
            cause: error3 instanceof Error ? error3 : void 0,
            requestId,
            displayInfo: {
                title: "Context summarization failed",
                detail: placeholderRejected.message,
                isRetryable: false
            }
        });
    }
    if (error3 instanceof Error) {
        if (error3.name === "AbortError") {
            return new CancelledError(error3.message, {
                cause: error3,
                requestId
            });
        }
        if (error3.name === AGENT_WEBSOCKET_DELIVERY_AMBIGUOUS_ERROR_NAME) {
            return new RetriableError(error3.message, {
                cause: error3,
                requestId,
                isTransport: true
            });
        }
        if (matchesTransportPattern(error3)) {
            return new RetriableError(error3.message, {
                cause: error3,
                requestId
            });
        }
    }
    const message = error3 instanceof Error ? error3.message : String(error3);
    return new RetriableError(message, {
        cause: error3 instanceof Error ? error3 : void 0,
        requestId
    });
}
function isConnectError(error3) {
    if (error3 === null || typeof error3 !== "object" || !("code" in error3) || !("name" in error3)) {
        return false;
    }
    if (error3.name === "ConnectError") {
        return true;
    }
    const candidate = error3;
    return typeof candidate.rawMessage === "string" && Array.isArray(candidate.details) && typeof candidate.findDetails === "function";
}
function classifyConnectError(error3, requestId) {
    const underlying = resolveUnderlyingConnectError(error3);
    const code = underlying.code;
    const wireDetails = getErrorDetails(error3);
    const details = wireDetails === void 0 ? void 0 : withoutRelayedAttemptFailure(wireDetails);
    const displayInfo = {
        title: details?.details?.title,
        detail: details?.details?.detail,
        isRetryable: details?.details?.isRetryable,
        connectCode: code,
        errorCode: details?.error,
        inferenceRequestErrorType: getConnectMetadata(underlying, INFERENCE_REQUEST_ERROR_TYPE_HEADER) ?? getConnectMetadata(error3, INFERENCE_REQUEST_ERROR_TYPE_HEADER),
        errorDetails: details
    };
    const opts = {
        cause: error3,
        requestId,
        displayInfo,
        ...parseRelayedAttemptFailure(wireDetails)?.transport === true ? {
            isTransport: true
        } : {}
    };
    if (code === Code.Canceled || code === Code.Aborted) {
        if (matchesTransportPattern(error3)) {
            return new RetriableError(error3.message, opts);
        }
        return new CancelledError(error3.message, opts);
    }
    if (details?.error !== void 0) {
        const errorCode3 = details.error;
        if (CANCELLED_CODES.has(errorCode3)) {
            return new CancelledError(extractMessage(error3, details), opts);
        }
        const backendAction = details.details?.analyticsMetadata?.actionRequired;
        if (backendAction !== void 0 && backendAction !== "") {
            return new ActionRequiredError(extractMessage(error3, details), backendAction, opts);
        }
        if (AUTH_CODES.has(errorCode3)) {
            return new ActionRequiredError(extractMessage(error3, details), "login", opts);
        }
        if (UPGRADE_CODES.has(errorCode3)) {
            return new ActionRequiredError(extractMessage(error3, details), "upgrade", opts);
        }
        if (PAYMENT_CODES.has(errorCode3)) {
            return new ActionRequiredError(extractMessage(error3, details), "payment", opts);
        }
        if (CONFIG_CODES.has(errorCode3)) {
            return new ActionRequiredError(extractMessage(error3, details), "config", opts);
        }
        if (TERMINAL_MESSAGE_CODES.has(errorCode3) && details.details?.isRetryable !== true) {
            return new NonRetriableError(extractMessage(error3, details), opts);
        }
        if (details.details?.isRetryable === false) {
            return new NonRetriableError(extractMessage(error3, details), opts);
        }
    }
    if (code === Code.Unauthenticated) {
        return new ActionRequiredError(error3.message, "login", {
            ...opts,
            displayInfo: withStandInTitle(displayInfo, "Sign in required", underlying)
        });
    }
    const terminalTitle = TERMINAL_CONNECT_CODE_TITLES.get(code);
    if (terminalTitle !== void 0 && details?.details?.isRetryable !== true && !matchesTransportPattern(error3)) {
        return new NonRetriableError(extractMessage(error3, details), {
            ...opts,
            displayInfo: withStandInTitle(displayInfo, terminalTitle, underlying)
        });
    }
    return new RetriableError(error3.message, opts);
}
function withStandInTitle(displayInfo, title, underlying) {
    return {
        ...displayInfo,
        title: displayInfo.title || title,
        detail: displayInfo.detail || getConnectRawMessage(underlying),
        isRetryable: displayInfo.isRetryable ?? false
    };
}
function resolveUnderlyingConnectError(error3) {
    let current = error3;
    for(let depth = 0; depth < 10 && current.code === Code.Unknown; depth++){
        const cause = current.cause;
        if (!isConnectError(cause)) {
            break;
        }
        current = cause;
    }
    return current;
}
function getErrorDetails(error3) {
    let current = error3;
    for(let depth = 0; depth < 10 && isConnectError(current); depth++){
        try {
            const details = current.findDetails?.(ErrorDetails);
            if (details !== void 0 && details.length > 0) {
                return details[0];
            }
        } catch  {}
        current = current.cause;
    }
    return void 0;
}
function getConnectMetadata(error3, name17) {
    const metadata = error3.metadata;
    if (metadata === null || typeof metadata !== "object" || typeof metadata.get !== "function") {
        return void 0;
    }
    return metadata.get(name17) ?? void 0;
}
function nearestConnectError(error3) {
    let current = error3;
    for(let depth = 0; depth < 10 && typeof current === "object" && current !== null; depth++){
        if (isConnectError(current)) {
            return current;
        }
        current = "cause" in current ? current.cause : void 0;
    }
    return void 0;
}
function underlyingConnectError(error3) {
    const connectError = nearestConnectError(error3);
    return connectError === void 0 ? void 0 : resolveUnderlyingConnectError(connectError);
}
function underlyingConnectCode(error3) {
    return underlyingConnectError(error3)?.code;
}
export function relayedAttemptFailure(error3) {
    const connectError = nearestConnectError(error3);
    return connectError === void 0 ? void 0 : parseRelayedAttemptFailure(getErrorDetails(connectError));
}
function underlyingErrorDetailsCode(error3) {
    const connectError = nearestConnectError(error3);
    return connectError === void 0 ? void 0 : getErrorDetails(connectError)?.error;
}
function getConnectRawMessage(error3) {
    const rawMessage = error3.rawMessage;
    if (typeof rawMessage === "string") {
        return rawMessage;
    }
    return error3.message.replace(/^\[[a-z_]+\] /, "");
}
function extractMessage(error3, details) {
    if (details?.details) {
        const { title, detail } = details.details;
        if (title && detail) return `${title} ${detail}`;
        return title || detail || error3.message;
    }
    return error3.message;
}
function findSummaryPlaceholderRejectedError(error3) {
    const seen = new Set();
    let current = error3;
    while(current instanceof Error && !seen.has(current)){
        if (current.name === SUMMARY_PLACEHOLDER_REJECTED_ERROR_NAME) {
            return current;
        }
        seen.add(current);
        current = current.cause;
    }
    return void 0;
}
function matchesTransportPattern(error3) {
    const seen = new Set();
    let current = error3;
    while(current instanceof Error && !seen.has(current)){
        seen.add(current);
        const errorString = `${current.name}: ${current.message}`;
        if (TRANSPORT_PATTERNS.some((pattern)=>errorString.includes(pattern)) || NETWORK_ERRNO_RE.test(errorString)) {
            return true;
        }
        const errorCode3 = current.code;
        if (typeof errorCode3 === "string" && (TRANSPORT_PATTERNS.some((pattern)=>errorCode3.includes(pattern)) || NETWORK_ERRNO_CODES.has(errorCode3))) {
            return true;
        }
        current = current.cause;
    }
    return false;
}
function matchesTransportText(text4) {
    return TRANSPORT_PATTERNS.some((pattern)=>text4.includes(pattern)) || NETWORK_ERRNO_RE.test(text4);
}
export function isTransportError(error3) {
    if (error3.isTransport === true) {
        return true;
    }
    if (error3.cause instanceof Error) {
        return matchesTransportPattern(error3.cause);
    }
    return matchesTransportText(error3.message);
}
function isRetriableTransportError(error3) {
    const classified = error3 instanceof AgentError ? error3 : classifyError(error3);
    return classified instanceof RetriableError && isTransportError(classified);
}
function hasTransportSignature(error3) {
    if (error3 instanceof AgentError && error3.cause instanceof Error) {
        return matchesTransportPattern(error3.cause);
    }
    if (error3 instanceof Error) {
        return matchesTransportPattern(error3);
    }
    return typeof error3 === "string" && matchesTransportText(error3);
}
function hasTransportRetryCount(transportErrorRetries) {
    return transportErrorRetries !== void 0 && transportErrorRetries > 0;
}
function failedAttempts(retries) {
    return retries + 1;
}
function stampConnectionStalled(error3) {
    Object.defineProperty(error3, "code", {
        value: "connection_stalled",
        enumerable: true,
        configurable: true
    });
    return error3;
}
function createConnectionStalledError(options2) {
    const { cause, requestId, transportErrorRetries, connectCode } = options2;
    if (!hasTransportRetryCount(transportErrorRetries)) {
        return stampConnectionStalled(new RetriableError("Connection stalled", {
            cause,
            requestId,
            displayInfo: {
                title: "Connection stalled",
                detail: "The connection stalled. Please try again.",
                isRetryable: true,
                connectCode
            }
        }));
    }
    return stampConnectionStalled(new RetriableError("Connection stalled repeatedly", {
        cause,
        requestId,
        displayInfo: {
            title: "Connection stalled",
            detail: `The connection stalled ${failedAttempts(transportErrorRetries)} times. Please check your network connection and try again.`,
            isRetryable: true,
            connectCode
        }
    }));
}
function createConnectionFailedError(options2) {
    const { cause, requestId, transportErrorRetries, connectCode } = options2;
    if (!hasTransportRetryCount(transportErrorRetries)) {
        return new RetriableError("Connection failed", {
            cause,
            requestId,
            displayInfo: {
                title: "Connection failed",
                detail: "The connection was interrupted. Please check your network connection and try again.",
                isRetryable: true,
                connectCode
            }
        });
    }
    return new RetriableError("Connection failed repeatedly", {
        cause,
        requestId,
        displayInfo: {
            title: "Connection failed",
            detail: `The connection failed ${failedAttempts(transportErrorRetries)} times. Please check your network connection and try again.`,
            isRetryable: true,
            connectCode
        }
    });
}
function createServerFailedError(options2) {
    const { classified, requestId, serverErrorRetries } = options2;
    const displayInfo = classified.displayInfo;
    return new RetriableError(classified.message, {
        cause: classified.cause,
        requestId,
        displayInfo: {
            ...displayInfo,
            title: displayInfo?.title || "Server error",
            detail: displayInfo?.detail || `The server failed ${failedAttempts(serverErrorRetries)} times. Please try again, or contact support if the issue persists.`,
            isRetryable: true
        }
    });
}
function isNonUserTransportCancel(classified) {
    let current = classified.cause;
    for(let depth = 0; depth < 10 && current !== void 0; depth++){
        if (current instanceof Error && current.name === "AbortError") {
            return true;
        }
        if (isConnectError(current) && (current.code === Code.Canceled || current.code === Code.Aborted)) {
            return true;
        }
        current = current !== null && typeof current === "object" && "cause" in current ? current.cause : void 0;
    }
    return false;
}
function isBackendTypedCancellation(classified) {
    const code = classified.displayInfo?.errorCode;
    return code !== void 0 && CANCELLED_CODES.has(code);
}
function shouldRetryInferenceRequestError(error3) {
    const inferenceErrorType = error3.displayInfo?.inferenceRequestErrorType;
    if (inferenceErrorType === void 0) {
        return false;
    }
    return !INFERENCE_ERROR_RETRY_DENYLIST.some((deniedType)=>deniedType === inferenceErrorType);
}
export async function mintClientLlmGatewayCredential(mint, options2) {
    let minted;
    try {
        minted = await mint(options2.signal);
    } catch (error3) {
        if (options2.isCanceled()) {
            throw new CancelledError("User aborted request");
        }
        throw new NonRetriableError("Failed to mint LLM Gateway credential", {
            cause: error3 instanceof Error ? error3 : void 0,
            requestId: options2.requestId
        });
    }
    if (minted === void 0) {
        throw new NonRetriableError("LLM Gateway credential minter returned no credential", {
            requestId: options2.requestId
        });
    }
    if (minted.bearerToken.trim() === "") {
        throw new NonRetriableError("LLM Gateway credential minter returned an empty bearer token", {
            requestId: options2.requestId
        });
    }
    return new ClientLlmGatewayCredential({
        bearerToken: minted.bearerToken
    });
}
function requestContextPartBlobIds(parts) {
    if (parts === void 0) {
        return [];
    }
    return [
        parts.rulesBlobId,
        parts.skillsBlobId,
        parts.subagentsBlobId,
        parts.mcpsBlobId
    ];
}
async function encodeRequestContext({ requestContext, mode, maxBlobBytes, maxInlineDynamicBytes }) {
    const partitioned = partitionRequestContext(requestContext);
    let dynamicByteLength;
    if (mode === "ref_only") {
        dynamicByteLength = partitioned.dynamicContext.toBinary().byteLength;
        if (dynamicByteLength > maxInlineDynamicBytes) {
            return void 0;
        }
    }
    const rulesBytes = partitioned.rules.toBinary();
    const skillsBytes = partitioned.skills.toBinary();
    const subagentsBytes = partitioned.subagents.toBinary();
    const mcpsBytes = partitioned.mcps.toBinary();
    const totalPartBytes = rulesBytes.byteLength + skillsBytes.byteLength + subagentsBytes.byteLength + mcpsBytes.byteLength;
    if (totalPartBytes > maxBlobBytes) {
        return void 0;
    }
    const [rulesBlobId, skillsBlobId, subagentsBlobId, mcpsBlobId] = await Promise.all([
        getBlobId(rulesBytes),
        getBlobId(skillsBytes),
        getBlobId(subagentsBytes),
        getBlobId(mcpsBytes)
    ]);
    const stagedBlobs = [
        {
            blobId: rulesBlobId,
            blobData: rulesBytes
        },
        {
            blobId: skillsBlobId,
            blobData: skillsBytes
        },
        {
            blobId: subagentsBlobId,
            blobData: subagentsBytes
        },
        {
            blobId: mcpsBlobId,
            blobData: mcpsBytes
        }
    ];
    const parts = new RequestContextPartReferences({
        rulesBlobId,
        rulesByteLength: rulesBytes.byteLength,
        skillsBlobId,
        skillsByteLength: skillsBytes.byteLength,
        subagentsBlobId,
        subagentsByteLength: subagentsBytes.byteLength,
        mcpsBlobId,
        mcpsByteLength: mcpsBytes.byteLength,
        dynamicContext: mode === "ref_only" ? partitioned.dynamicContext : void 0
    });
    if (mode === "dual") {
        return {
            kind: "dual",
            inlineContext: requestContext,
            byteLength: totalPartBytes,
            parts
        };
    }
    return {
        kind: "ref_only",
        stagedBlobs,
        byteLength: totalPartBytes,
        parts,
        dynamicByteLength
    };
}
export function getRequestContextAction(action) {
    switch(action.action.case){
        case "userMessageAction":
        case "subscriptionNotificationAction":
        case "resumeAction":
        case "executePlanAction":
            return action.action.value;
        default:
            return void 0;
    }
}
async function hydrateRequestContext({ ctx, resources, notesSessionId }) {
    const executor = resources.get(requestContextExecutorResource);
    const result = await executor.execute(ctx, new RequestContextArgs({
        notesSessionId
    }));
    const requestContext = result.result.case === "success" ? result.result.value.requestContext : void 0;
    if (requestContext === void 0) {
        throw new Error(`Failed to compute request context: ${result.result.case}`);
    }
    return requestContext;
}
async function prepareRequestContextBlob({ ctx, action, resources, blobStore, mode, maxBlobBytes, maxInlineDynamicBytes = REQUEST_CONTEXT_DYNAMIC_INLINE_MAX_BYTES, notesSessionId }) {
    const preparationStart = performance.now();
    const requestContextAction = getRequestContextAction(action);
    if (requestContextAction === void 0) {
        return {
            kind: "not_applicable"
        };
    }
    if (mode === "legacy") {
        action.requestContextParts = void 0;
        return {
            kind: "legacy"
        };
    }
    if (action.requestContextParts !== void 0) {
        const existingBlobIds = requestContextPartBlobIds(action.requestContextParts);
        const hasInlineContext = requestContextAction.requestContext !== void 0;
        const partsReady = existingBlobIds.length > 0 && blobStore.hasAll(existingBlobIds);
        if (hasInlineContext || partsReady) {
            const parts = action.requestContextParts;
            if (mode === "ref_only" && hasInlineContext && partsReady && parts?.dynamicContext !== void 0) {
                requestContextAction.requestContext = void 0;
            }
            return {
                kind: "already_prepared"
            };
        }
    }
    action.requestContextParts = void 0;
    const hydrated = requestContextAction.requestContext === void 0;
    const requestContext = requestContextAction.requestContext ?? await hydrateRequestContext({
        ctx,
        resources,
        notesSessionId
    });
    const effectiveMaxBlobBytes = Math.min(Math.max(0, maxBlobBytes), REQUEST_CONTEXT_BLOB_HARD_MAX_BYTES);
    const encoded = await encodeRequestContext({
        requestContext,
        mode,
        maxBlobBytes: effectiveMaxBlobBytes,
        maxInlineDynamicBytes: Math.min(Math.max(0, maxInlineDynamicBytes), effectiveMaxBlobBytes)
    });
    if (encoded === void 0) {
        requestContextAction.requestContext = requestContext;
        action.requestContextParts = void 0;
        requestContextBlobPrepared.increment(ctx, 1, {
            mode,
            outcome: "oversized"
        });
        return {
            kind: "oversized"
        };
    }
    if (encoded.kind === "ref_only" && !blobStore.seedAll(encoded.stagedBlobs)) {
        requestContextAction.requestContext = requestContext;
        action.requestContextParts = void 0;
        requestContextBlobPrepared.increment(ctx, 1, {
            mode,
            outcome: "transient_budget_exceeded"
        });
        return {
            kind: "transient_budget_exceeded"
        };
    }
    requestContextAction.requestContext = encoded.kind === "dual" ? encoded.inlineContext : void 0;
    action.requestContextParts = encoded.parts;
    const totalBytes = encoded.byteLength;
    requestContextBlobPrepared.increment(ctx, 1, {
        mode,
        outcome: hydrated ? "hydrated" : "inline"
    });
    requestContextBlobBytes.histogram(ctx, totalBytes, {
        mode
    });
    requestContextBlobPreparationDuration.histogram(ctx, performance.now() - preparationStart, {
        mode
    });
    return {
        kind: "prepared",
        byteLength: totalBytes,
        hydrated,
        rulesByteLength: encoded.parts.rulesByteLength,
        skillsByteLength: encoded.parts.skillsByteLength,
        subagentsByteLength: encoded.parts.subagentsByteLength,
        mcpsByteLength: encoded.parts.mcpsByteLength,
        dynamicByteLength: encoded.kind === "ref_only" ? encoded.dynamicByteLength : void 0
    };
}
function isKnownInteger(value) {
    return value !== void 0 && Number.isFinite(value) && Number.isInteger(value);
}
function requestContextByteSnapshotFromParts(parts, extra) {
    const { rulesByteLength: rulesBytes, skillsByteLength: skillsBytes } = parts;
    const { subagentsByteLength: subagentsBytes, mcpsByteLength: mcpBytes } = parts;
    if (!isKnownInteger(rulesBytes) || !isKnownInteger(skillsBytes) || !isKnownInteger(subagentsBytes) || !isKnownInteger(mcpBytes)) {
        return void 0;
    }
    const dynamicBytes = extra?.dynamicByteLength;
    return {
        bytes: rulesBytes + skillsBytes + subagentsBytes + mcpBytes + (dynamicBytes ?? 0),
        bytesSource: "blob_parts",
        rulesBytes,
        skillsBytes,
        mcpBytes,
        subagentsBytes,
        ...isKnownInteger(dynamicBytes) ? {
            dynamicBytes
        } : {}
    };
}
function requestContextByteSnapshotFromPrepared({ prepared, parts }) {
    if (prepared.kind === "prepared") {
        return requestContextByteSnapshotFromParts(prepared, {
            dynamicByteLength: prepared.dynamicByteLength
        });
    }
    if (prepared.kind === "already_prepared" && parts !== void 0) {
        return requestContextByteSnapshotFromParts(parts);
    }
    return void 0;
}
export function isTransportFailureKind(value) {
    return typeof value === "string" && TRANSPORT_FAILURE_KINDS.includes(value);
}
function causeChain(error3) {
    const chain = [];
    const seen = new Set();
    let current = error3;
    while(typeof current === "object" && current !== null && !seen.has(current)){
        seen.add(current);
        chain.push(current);
        current = "cause" in current ? current.cause : void 0;
    }
    return chain;
}
function messageOf(node) {
    const message = node.message;
    return typeof message === "string" ? message : "";
}
function isTornDown(node) {
    return node instanceof Error && (node.name === "AbortError" || node.name === AGENT_WEBSOCKET_DELIVERY_AMBIGUOUS_ERROR_NAME);
}
function isFlaggedTransport(error3) {
    return error3 instanceof Error && error3.isTransport === true;
}
function classifyTransportFailureKind(error3, context2 = {}) {
    const chain = causeChain(error3);
    if (chain.some((node)=>BIDI_APPEND_FATAL_MARKER in node)) {
        return "append_fatal";
    }
    const messages = chain.map(messageOf);
    const mentions = (fragment)=>messages.some((message)=>message.includes(fragment));
    const code = underlyingConnectCode(error3);
    const beforeAnyHeader = context2.transportMode === void 0;
    if (beforeAnyHeader && code === Code.Unavailable && mentions(ALPN_FAILURE_FRAGMENT)) {
        return "alpn_failure";
    }
    if ((beforeAnyHeader || context2.transportMode === POLL_TRANSPORT_MODE) && code === Code.Unavailable && mentions(POLL_SEQNO_FRAGMENT)) {
        return "poll_seqno_gap";
    }
    const httpStatus = messages.map((message)=>HTTP_STATUS_MESSAGE.exec(message)?.[1]).find((status)=>status !== void 0);
    if (beforeAnyHeader && code === Code.Unknown && httpStatus === "464") {
        return "http_464";
    }
    if (beforeAnyHeader && code === Code.Unimplemented && httpStatus === "404") {
        return "http_404_unimplemented";
    }
    if (code === Code.DeadlineExceeded && underlyingErrorDetailsCode(error3) === ErrorDetails_Error.TIMEOUT) {
        return "idle_deadline";
    }
    if (beforeAnyHeader && code === Code.Unknown && mentions(HEADERLESS_RESPONSE_FRAGMENT)) {
        return "stream_closed_early";
    }
    if (hasTransportSignature(error3) || isFlaggedTransport(error3) || chain.some(isTornDown)) {
        return "socket_reset";
    }
    return "other";
}
function kindSpendsTransportBudget(kind, classified) {
    const budget = RETRY_BUDGET_BY_KIND[kind];
    return budget === "by_signature" ? hasTransportSignature(classified) : budget === "transport";
}
export function abortOriginFromSources(sources) {
    if (sources.some((source)=>source !== "stall_detector")) {
        return "owner";
    }
    if (sources.includes("stall_detector")) {
        return "stall_detector";
    }
    return "none";
}
export function resolveAgentRetryPolicy(runOptions, attemptState, caps = AGENT_RETRY_CAPS) {
    return {
        serverCap: caps.serverCap,
        transportCap: runOptions.isRunningInTest === true ? Math.min(caps.transportCap, AGENT_RETRY_TRANSPORT_CAP_IN_TEST) : caps.transportCap,
        endless: attemptState.endlessRetries,
        retryAllInference: runOptions.retryAllInferenceErrors === true
    };
}
function transportFailureKindOf(error3, abort, context2) {
    if (abort.stalled) {
        return "stall";
    }
    if (abort.userStop) {
        return "other";
    }
    return classifyTransportFailureKind(error3, context2);
}
function retryTransport(transportFailureKind) {
    return {
        action: "retry",
        countAsServerError: false,
        countAsTransportError: true,
        transportFailureKind
    };
}
function retryServer(transportFailureKind) {
    return {
        action: "retry",
        countAsServerError: true,
        countAsTransportError: false,
        transportFailureKind
    };
}
export function classifyForRetry(error3, policy, state) {
    const requestId = state.attemptRequestId;
    const endless = policy.endless === true;
    const retriesEnabled = state.retriesEnabled || endless;
    let classified = error3 instanceof AgentError ? error3 : classifyError(error3, {
        requestId
    });
    const ownedCancellation = classified instanceof CancelledError && (state.abortOrigin === "owner" || isBackendTypedCancellation(classified));
    const stalled = state.abortOrigin === "stall_detector" && !ownedCancellation && (classified instanceof CancelledError || classified instanceof RetriableError);
    const ownerStopRewrapped = state.abortOrigin === "owner" && classified instanceof RetriableError && isNonUserTransportCancel(classified);
    const transportFailureKind = transportFailureKindOf(error3, {
        stalled,
        userStop: ownedCancellation || ownerStopRewrapped
    }, {
        transportMode: state.attemptTransportMode
    });
    const throwDecision = (thrown, charged = {})=>({
            action: "throw",
            error: thrown,
            ...charged,
            transportFailureKind
        });
    const underTransportPolicy = (atCap, whenRetriesDisabled)=>{
        if (!retriesEnabled) {
            return throwDecision(whenRetriesDisabled(), {
                countAsTransportError: true
            });
        }
        if (!endless && state.transportErrorRetries >= policy.transportCap) {
            return throwDecision(atCap(), {
                countAsTransportError: true
            });
        }
        return retryTransport(transportFailureKind);
    };
    const exhaustion = ()=>({
            cause: classified.cause,
            requestId,
            transportErrorRetries: state.transportErrorRetries,
            connectCode: classified.displayInfo?.connectCode
        });
    if (stalled) {
        if (retriesEnabled && state.stallRetryElapsedMs !== void 0 && state.stallRetryElapsedMs >= STALL_RETRY_BUDGET_MS) {
            return throwDecision(createConnectionStalledError(exhaustion()), {
                countAsTransportError: true
            });
        }
        const decision = underTransportPolicy(()=>createConnectionStalledError(exhaustion()), ()=>createConnectionStalledError({
                ...exhaustion(),
                transportErrorRetries: void 0
            }));
        if (decision.action === "retry") {
            return {
                ...decision,
                stall: true
            };
        }
        return decision;
    }
    if (classified instanceof CancelledError && !ownedCancellation && isNonUserTransportCancel(classified)) {
        classified = new RetriableError(classified.message, {
            cause: classified.cause,
            requestId,
            displayInfo: classified.displayInfo,
            isTransport: true
        });
    }
    if (ownerStopRewrapped) {
        return throwDecision(new CancelledError(classified.message, {
            cause: classified.cause,
            requestId,
            displayInfo: classified.displayInfo
        }));
    }
    if (policy.retryAllInference === true && (classified instanceof ActionRequiredError || classified instanceof NonRetriableError) && shouldRetryInferenceRequestError(classified)) {
        if (!endless && state.serverErrorRetries >= policy.serverCap) {
            return throwDecision(classified);
        }
        return retryServer(transportFailureKind);
    }
    if (classified instanceof CancelledError || classified instanceof ActionRequiredError || classified instanceof NonRetriableError) {
        return throwDecision(classified);
    }
    if (classified instanceof RetriableError && (classified.isTransport === true || kindSpendsTransportBudget(transportFailureKind, classified) || state.abortOrigin !== "owner" && isNonUserTransportCancel(classified))) {
        return underTransportPolicy(()=>createConnectionFailedError(exhaustion()), ()=>classified);
    }
    if (!retriesEnabled) {
        return throwDecision(classified);
    }
    if (!endless && state.serverErrorRetries >= policy.serverCap) {
        return throwDecision(createServerFailedError({
            classified,
            requestId,
            serverErrorRetries: state.serverErrorRetries
        }));
    }
    return retryServer(transportFailureKind);
}
export function mcpToolDefinitionsToProto(mcpTools) {
    return new McpTools({
        mcpTools: mcpTools.map((tool)=>({
                name: tool.name,
                providerIdentifier: tool.providerIdentifier,
                toolName: tool.toolName,
                description: tool.description,
                inputSchema: tool.inputSchema ? Value.fromJson(tool.inputSchema) : void 0,
                outputSchemaJson: tool.outputSchema !== void 0 ? JSON.stringify(tool.outputSchema) : void 0
            }))
    });
}
export function lingerForServerDrainOnSoftCancel(args) {
    const lingerMs = args.lingerMs ?? SOFT_CANCEL_TRANSPORT_LINGER_MS;
    return new Promise((resolve36)=>{
        let settled = false;
        const finish = (outcome)=>{
            if (settled) {
                return;
            }
            settled = true;
            clearTimeout(timer2);
            resolve36(outcome);
        };
        const timer2 = setTimeout(()=>finish("linger_timed_out"), lingerMs);
        args.done.then(()=>finish("stream_ended"), ()=>finish("stream_ended"));
    });
}
export function toUint32StallDetectorTimeoutMs(value) {
    const normalized = normalizeTimeout(value);
    if (normalized === void 0) {
        return void 0;
    }
    return Math.min(Math.max(Math.round(normalized), 0), UINT32_MAX2);
}
export function resolveStallDetectorTimeouts(config2, options2) {
    const requestedFailThresholdMs = normalizeTimeout(config2?.failTimeoutMs) ?? DEFAULT_STALL_DETECTOR_FAIL_TIMEOUT_MS;
    const failThresholdMs = requestedFailThresholdMs > 0 && options2?.isRunningInTest !== true ? Math.max(requestedFailThresholdMs, MIN_STALL_DETECTOR_FAIL_TIMEOUT_MS) : requestedFailThresholdMs;
    const advisoryCandidate = normalizeTimeout(config2?.advisoryTimeoutMs);
    const advisoryThresholdMs = advisoryCandidate !== void 0 && advisoryCandidate > 0 && (failThresholdMs <= 0 || advisoryCandidate < failThresholdMs) ? advisoryCandidate : void 0;
    return {
        failThresholdMs,
        advisoryThresholdMs
    };
}
export function isStreamLoopKind(value) {
    return value === "nal" || value === "local_loop" || value === "module";
}
export function isModelOutputInteractionUpdate(update) {
    return MODEL_OUTPUT_UPDATE_CASES.has(update.message.case ?? "");
}
async function waitForRetryDelay(delayMs, signal) {
    await new Promise((resolve36, reject2)=>{
        if (signal?.aborted) {
            reject2(new CancelledError("Cancelled during backoff"));
            return;
        }
        const timeout2 = setTimeout(()=>{
            signal?.removeEventListener("abort", onAbort);
            resolve36();
        }, delayMs);
        function onAbort() {
            clearTimeout(timeout2);
            reject2(new CancelledError("Cancelled during backoff"));
        }
        signal?.addEventListener("abort", onAbort, {
            once: true
        });
    });
}
function getFiniteRetryDelay(attempt, isRunningInTest, fixedRetryDelayMs) {
    const baseDelayMs = isRunningInTest ? BASE_DELAY_MS_IN_TEST : BASE_DELAY_MS;
    const delayMs = fixedRetryDelayMs ?? Math.min(baseDelayMs * 2 ** attempt, MAX_FINITE_RETRY_DELAY_MS);
    const jitterMs = fixedRetryDelayMs === void 0 ? delayMs * 0.2 * Math.random() : 0;
    return delayMs + jitterMs;
}
function getEndlessRetryDelay(previousDelayMs, fixedRetryDelayMs) {
    const upperBoundMs = Math.min(MAX_ENDLESS_RETRY_DELAY_MS, previousDelayMs * 3);
    return fixedRetryDelayMs ?? BASE_DELAY_MS + (upperBoundMs - BASE_DELAY_MS) * Math.random();
}
export function transportLineFailureFields(reading) {
    const { connectCode: _number2, connectCodeName, ...fields } = reading;
    return connectCodeName === void 0 ? fields : {
        ...fields,
        connectCode: connectCodeName
    };
}
export async function runTurnWithRetries(input) {
    const { ctx, checkpointHandler, runOptions, requestId, hooks, cancellation } = input;
    const originalRequestId = input.originalRequestId ?? requestId;
    let previousEndlessRetryDelayMs = BASE_DELAY_MS;
    const runBackoff = async (attempt2, signal, endlessRetries, decision)=>{
        if (!endlessRetries) {
            previousEndlessRetryDelayMs = BASE_DELAY_MS;
        }
        if (input.backoff !== void 0) {
            await input.backoff(attempt2, signal);
            return;
        }
        const delayMs = endlessRetries ? getEndlessRetryDelay(previousEndlessRetryDelayMs, runOptions.fixedRetryDelayMs) : getFiniteRetryDelay(attempt2, runOptions.isRunningInTest, runOptions.fixedRetryDelayMs);
        if (endlessRetries) {
            previousEndlessRetryDelayMs = delayMs;
            if (input.logging) {
                logger13.info(ctx, `[${input.logging.tag}] Endless retry delay selected`, {
                    selectedDelayMs: delayMs,
                    attempt: attempt2,
                    retryCategory: decision.countAsServerError ? "server" : "transport",
                    endlessRetries
                });
            }
        }
        await waitForRetryDelay(delayMs, signal);
    };
    let state = input.state;
    let action = input.action;
    let attempt = 0;
    let currentRequestId = requestId;
    let serverErrorRetries = 0;
    let transportErrorRetries = 0;
    let checkpointForRetry;
    let checkpointResumeEligibility;
    let reconnectingNotified = false;
    let noProgressResumeFailures = 0;
    let stallRetryStartedAtMs;
    let attemptSawApplicationProgress = false;
    const notifyConnectedIfReconnecting = ()=>{
        if (reconnectingNotified) {
            runOptions.onConnectionStateChange?.({
                state: "connected"
            });
            reconnectingNotified = false;
        }
    };
    const notifyApplicationProgress = ()=>{
        attemptSawApplicationProgress = true;
        notifyConnectedIfReconnecting();
    };
    const createAttemptCheckpointHandler = (handlerAttempt)=>({
            handleCheckpoint: async (checkpointCtx, checkpoint, metadata)=>{
                if (handlerAttempt === attempt) {
                    attemptSawApplicationProgress = true;
                }
                await checkpointHandler.handleCheckpoint(checkpointCtx, checkpoint, metadata);
                if (handlerAttempt !== attempt) {
                    return;
                }
                checkpointForRetry = checkpoint;
                checkpointResumeEligibility = metadata?.resumeEligibility ?? "eligible";
                notifyConnectedIfReconnecting();
            },
            getLatestCheckpoint: ()=>checkpointHandler.getLatestCheckpoint()
        });
    for(;;){
        if (ctx.canceled) {
            throw cancellation.toCancelledError(void 0, currentRequestId);
        }
        checkpointForRetry = void 0;
        checkpointResumeEligibility = void 0;
        attemptSawApplicationProgress = false;
        hooks.beginAttempt?.({
            attempt,
            originalRequestId
        });
        if (attempt > 0) {
            currentRequestId = freshUuid();
            await runOptions.onRetryStarting?.(attempt, {
                actionCase: action.action.case,
                conversationState: state,
                isResume: action.action.case === "resumeAction",
                attemptRequestId: currentRequestId
            });
            if (input.logging) {
                logger13.info(ctx, `[${input.logging.tag}] Retrying attempt ${attempt}`, {
                    attempt,
                    actionCase: action.action.case,
                    requestId: currentRequestId,
                    originalRequestId
                });
            }
            if (action.action.case === "resumeAction") {
                await runOptions.onRetryResuming?.({
                    checkpointState: state,
                    nextAttempt: attempt,
                    reason: "resume_action"
                });
                if (input.logging) {
                    logger13.info(ctx, `[${input.logging.tag}] Resuming from checkpoint`, {
                        nextAttempt: attempt,
                        reason: "resume_action"
                    });
                }
            }
        } else {
            if (input.logging) {
                logger13.info(ctx, `[${input.logging.tag}] Initial request`, {
                    attempt,
                    actionCase: action.action.case,
                    requestId: currentRequestId
                });
            }
            if (input.notifyInitialResume === true && action.action.case === "resumeAction") {
                await runOptions.onRetryResuming?.({
                    checkpointState: state,
                    nextAttempt: attempt,
                    reason: "resume_action"
                });
                if (input.logging) {
                    logger13.info(ctx, `[${input.logging.tag}] Resuming from checkpoint`, {
                        nextAttempt: attempt,
                        reason: "resume_action"
                    });
                }
            }
        }
        if (ctx.canceled) {
            throw cancellation.toCancelledError(void 0, currentRequestId);
        }
        try {
            await hooks.runAttempt({
                state,
                action,
                checkpointHandler: createAttemptCheckpointHandler(attempt),
                attempt,
                attemptRequestId: currentRequestId,
                notifyConnected: notifyConnectedIfReconnecting,
                notifyApplicationProgress
            });
            notifyConnectedIfReconnecting();
            if (input.logging) {
                logger13.info(ctx, `[${input.logging.tag}] Request successful`, {
                    attempt,
                    actionCase: action.action.case,
                    requestId: currentRequestId,
                    originalRequestId
                });
            }
            return;
        } catch (error3) {
            if (cancellation.shortCircuit?.(error3) === true) {
                throw cancellation.toCancelledError(error3, currentRequestId);
            }
            const endlessRetries = runOptions.endlessRetries?.() === true;
            const nowMs2 = input.nowMs?.() ?? Date.now();
            const stallRetryElapsedMs = stallRetryStartedAtMs === void 0 ? void 0 : nowMs2 - stallRetryStartedAtMs;
            let decision = hooks.classify(error3, {
                attempt,
                attemptRequestId: currentRequestId,
                originalRequestId,
                serverErrorRetries,
                transportErrorRetries,
                stallRetryElapsedMs,
                endlessRetries
            });
            if (decision.action === "retry") {
                if (checkpointForRetry !== void 0) {
                    noProgressResumeFailures = 0;
                } else if (action.action.case === "resumeAction" && attemptSawApplicationProgress) {
                    noProgressResumeFailures++;
                    if (noProgressResumeFailures >= MAX_NO_PROGRESS_RESUME_FAILURES) {
                        if (input.logging) {
                            logger13.warn(ctx, `[${input.logging.tag}] Resume attempts are streaming but not producing checkpoints; stopping automatic resume`, {
                                noProgressResumeFailures,
                                attempt,
                                requestId: currentRequestId,
                                originalRequestId,
                                errorName: error3 instanceof Error ? error3.name : typeof error3
                            });
                        }
                        decision = {
                            action: "throw",
                            error: new RetriableError("Agent turn stopped after repeated resume attempts made no progress", {
                                cause: error3 instanceof Error ? error3 : void 0,
                                requestId: currentRequestId,
                                displayInfo: {
                                    title: "Agent stopped retrying",
                                    detail: "The connection was interrupted repeatedly without saving progress, so the agent stopped to avoid repeating the same work. Retry to continue from the last saved state.",
                                    isRetryable: true
                                }
                            }),
                            transportFailureKind: decision.transportFailureKind
                        };
                    }
                }
            }
            const failureTags = {
                ...decision.transportFailureKind === void 0 ? {} : {
                    transportFailureKind: decision.transportFailureKind
                },
                ...input.loop === void 0 ? {} : {
                    loop: input.loop
                }
            };
            const failureReading = input.logging?.diagnostics?.(error3);
            if (input.logging) {
                const decisionStr = decision.action === "retry" ? `RETRY (countAsServerError=${decision.countAsServerError}, countAsTransportError=${decision.countAsTransportError})` : `THROW ${decision.error.kind}`;
                logger13.warn(ctx, `[AGENT_ERROR_DIAGNOSTICS] requestId=${currentRequestId} originalRequestId=${originalRequestId} decision=${decisionStr}`, {
                    decision: decisionStr,
                    willRetry: decision.action === "retry",
                    enableAgentRetries: runOptions.enableAgentRetries ?? false,
                    endlessRetries,
                    isRunningInTest: runOptions.isRunningInTest ?? false,
                    serverErrorRetries,
                    transportErrorRetries,
                    attempt,
                    requestId: currentRequestId,
                    originalRequestId,
                    ...failureTags,
                    ...failureReading
                });
            }
            if (decision.action === "throw") {
                if (attempt === 0) {
                    const base = {
                        attempt: 0,
                        actionCase: action.action.case,
                        error: decision.error,
                        requestId: currentRequestId,
                        originalRequestId,
                        enableAgentRetries: runOptions.enableAgentRetries === true,
                        endlessRetries,
                        stallAborted: false,
                        abortSources: []
                    };
                    try {
                        await runOptions.onErrorNotRetried?.(hooks.buildNonRetriedErrorInfo?.(base) ?? base);
                    } catch (callbackError) {
                        if (input.logging) {
                            logger13.warn(ctx, `[${input.logging.tag}] onErrorNotRetried callback failed`, {
                                error: String(callbackError),
                                requestId: currentRequestId,
                                originalRequestId
                            });
                        }
                    }
                }
                if (input.logging) {
                    logger13.warn(ctx, `[${input.logging.tag}] Error not retryable`, {
                        ...failureTags,
                        ...failureReading,
                        attempt,
                        actionCase: action.action.case,
                        requestId: currentRequestId,
                        originalRequestId,
                        errorName: decision.error.name,
                        ...input.logging.includeErrorObjects === true ? {
                            error: decision.error
                        } : {},
                        serverErrorRetries,
                        transportErrorRetries
                    });
                }
                throw decision.error;
            }
            const nextAttempt = attempt + 1;
            if (checkpointResumeEligibility === "ineligible_terminal_turn") {
                if (input.logging) {
                    logger13.warn(ctx, `[${input.logging.tag}] Terminal checkpoint received before retryable error; completing without automatic resume`, {
                        errorName: error3 instanceof Error ? error3.name : typeof error3,
                        errorMessage: error3 instanceof Error ? error3.message : String(error3)
                    });
                }
                return;
            }
            runOptions.onConnectionStateChange?.({
                state: "reconnecting",
                attempt: nextAttempt,
                trigger: {
                    ...failureTags,
                    ...hooks.reconnectTrigger?.(error3, decision, {
                        originalRequestId,
                        failedAttemptRequestId: currentRequestId,
                        nextAttempt
                    }) ?? {
                        originatingRequestId: originalRequestId,
                        attemptRequestId: currentRequestId
                    }
                }
            });
            reconnectingNotified = true;
            if (decision.countAsServerError) {
                serverErrorRetries++;
            }
            if (decision.countAsTransportError) {
                transportErrorRetries++;
            }
            if (decision.stall === true) {
                stallRetryStartedAtMs ??= nowMs2;
            } else {
                stallRetryStartedAtMs = void 0;
            }
            attempt = nextAttempt;
            if (checkpointForRetry !== void 0) {
                state = checkpointForRetry;
                action = new ConversationAction({
                    action: {
                        case: "resumeAction",
                        value: new ResumeAction()
                    }
                });
            }
            hooks.onRetryCommitted?.();
            await runBackoff(attempt, ctx.signal, endlessRetries, decision);
        }
    }
}
export async function prepareRequestContextForSend({ ctx, action, resources, blobStore, options: options2, source, transportMode, notifyBytes }) {
    try {
        const prepared = await prepareRequestContextBlob({
            ctx,
            action,
            resources,
            blobStore,
            mode: transportMode ?? options2.requestContextBlobTransportMode ?? "legacy",
            maxBlobBytes: options2.requestContextBlobMaxBytes ?? REQUEST_CONTEXT_BLOB_HARD_MAX_BYTES,
            maxInlineDynamicBytes: options2.requestContextDynamicInlineMaxBytes ?? REQUEST_CONTEXT_DYNAMIC_INLINE_MAX_BYTES,
            notesSessionId: options2.conversationId
        });
        if (notifyBytes === true) {
            const snapshot = requestContextByteSnapshotFromPrepared({
                prepared,
                parts: action.requestContextParts
            });
            if (snapshot !== void 0) {
                options2.onRequestContextBytes?.(snapshot);
            }
        }
    } catch (error3) {
        action.requestContextParts = void 0;
        requestContextBlobLogger.warn(ctx, "Failed to prepare request context blob; using legacy fallback", {
            actionCase: action.action.case,
            errorName: error3 instanceof Error ? error3.name : typeof error3,
            source
        });
    }
}
export function splitStream(ctx, stream3, detector, onFirstMessage, signal, parentSignal, onFirstNonHeartbeatMessage, onTtftBreakdown) {
    const interactionStream = createWritableIterable2();
    const execStream = createWritableIterable2();
    const checkpointStream = createWritableIterable2();
    const kvStream = createWritableIterable2();
    let firstMessageFired = false;
    let firstNonHeartbeatFired = false;
    async function run() {
        let sawTurnEnded = false;
        let sawCheckpointAfterTurnEnded = false;
        let streamError;
        let finalError;
        try {
            for await (const message of stream3){
                if (message.ttftBreakdown !== void 0) {
                    const breakdown = message.ttftBreakdown;
                    try {
                        onTtftBreakdown?.({
                            serverFirstTokenMs: breakdown.serverFirstTokenMs,
                            preStreamSetupMs: breakdown.preStreamSetupMs,
                            waitForFirstEventMs: breakdown.waitForFirstEventMs,
                            providerTtftMs: breakdown.providerTtftMs,
                            slowPoolWaitMs: breakdown.slowPoolWaitMs,
                            ...breakdown.clientPrepMs === void 0 ? {} : {
                                clientPrepMs: breakdown.clientPrepMs
                            },
                            clock: breakdown.clientClock ? "client" : "server"
                        });
                    } catch (e) {
                        retryLogger.warn(ctx, `onTtftBreakdown callback failed`, {
                            error: String(e)
                        });
                    }
                }
                const isHeartbeat = message.message.case === "interactionUpdate" && message.message.value.message.case === "heartbeat";
                if (!firstMessageFired) {
                    firstMessageFired = true;
                    onFirstMessage(isHeartbeat);
                }
                if (isHeartbeat) {
                    detector.onServerSentHeartbeat();
                    detector.reset("inbound_message", "heartbeat");
                } else {
                    if (!firstNonHeartbeatFired) {
                        firstNonHeartbeatFired = true;
                        try {
                            onFirstNonHeartbeatMessage?.();
                        } catch (e) {
                            retryLogger.warn(ctx, `onFirstNonHeartbeatMessage callback failed`, {
                                error: String(e)
                            });
                        }
                    }
                    detector.reset("inbound_message", getMessageTypeLabelForStallDetector(message));
                }
                if (message.message.case === "interactionUpdate" && message.message.value.message.case === "turnEnded") {
                    sawTurnEnded = true;
                }
                if (message.message.case === "interactionUpdate" || message.message.case === "interactionQuery") {
                    await interactionStream.write(message.message).catch(()=>{});
                }
                if (message.message.case === "execServerMessage" || message.message.case === "execServerControlMessage") {
                    await execStream.write(message.message.value);
                }
                if (message.message.case === "conversationCheckpointUpdate") {
                    const resumeEligibility = sawTurnEnded ? "ineligible_terminal_turn" : "eligible";
                    if (resumeEligibility === "ineligible_terminal_turn") {
                        sawCheckpointAfterTurnEnded = true;
                    }
                    await checkpointStream.write({
                        checkpoint: message.message.value,
                        metadata: {
                            resumeEligibility
                        }
                    });
                }
                if (message.message.case === "kvServerMessage") {
                    await kvStream.write(message.message.value);
                }
            }
            detector.onStreamEnded();
        } catch (error3) {
            streamError = error3;
        } finally{
            finalError = streamError;
            const postTerminalTransportClose = sawTurnEnded && sawCheckpointAfterTurnEnded && streamError !== void 0 && !signal?.aborted && !parentSignal?.aborted && isRetriableTransportError(streamError);
            if (postTerminalTransportClose) {
                retryLogger.debug(ctx, "Ignoring transport close after terminal agent stream", {
                    caughtError: streamError instanceof Error ? `${streamError.name}: ${streamError.message}` : String(streamError)
                });
                detector.onStreamEnded();
                finalError = void 0;
            }
            const droppedStreamWithoutAbort = !sawTurnEnded && !signal?.aborted && !parentSignal?.aborted;
            if (droppedStreamWithoutAbort) {
                const droppedStreamMsg = "Stream ended without turnEnded \u2014 connection likely dropped mid-stream";
                if (streamError === void 0) {
                    retryLogger.warn(ctx, droppedStreamMsg);
                    finalError = new RetriableError(droppedStreamMsg, {
                        isTransport: true
                    });
                } else {
                    if (streamError instanceof Error && streamError.message === "[aborted] aborted") {
                        retryLogger.warn(ctx, `${droppedStreamMsg}; retrying caught [aborted] aborted error`);
                        finalError = new RetriableError(droppedStreamMsg, {
                            cause: streamError,
                            isTransport: true
                        });
                    } else {
                        retryLogger.warn(ctx, `${droppedStreamMsg}; caught non-retriable stream error, rethrowing as-is`, {
                            caughtError: streamError instanceof Error ? `${streamError.name}: ${streamError.message}` : String(streamError)
                        });
                    }
                }
            } else if (!sawTurnEnded && !signal?.aborted) {
                const msg = `Stream ended without turnEnded, abort signals: signal.aborted=${signal?.aborted}, parentSignal.aborted=${parentSignal?.aborted}; firstMessageFired=${firstMessageFired}`;
                retryLogger.warn(ctx, msg);
            }
            interactionStream.close();
            execStream.close();
            checkpointStream.close();
            kvStream.close();
        }
        if (finalError !== void 0) {
            throw finalError;
        }
    }
    return {
        interactionStream,
        execStream,
        checkpointStream,
        kvStream,
        done: run()
    };
}
export async function handleShellStream(ctx, shellStream, interactionListener) {
    for await (const message of shellStream){
        switch(message.event.case){
            case "stdout":
                await interactionListener.sendUpdate(ctx, Updates.shellOutputDelta({
                    case: "stdout",
                    value: new ShellStreamStdout({
                        data: message.event.value.data
                    })
                }));
                break;
            case "stderr":
                await interactionListener.sendUpdate(ctx, Updates.shellOutputDelta({
                    case: "stderr",
                    value: new ShellStreamStderr({
                        data: message.event.value.data
                    })
                }));
                break;
            case "exit":
                await interactionListener.sendUpdate(ctx, Updates.shellOutputDelta({
                    case: "exit",
                    value: new ShellStreamExit({
                        code: message.event.value.code,
                        aborted: message.event.value.aborted
                    })
                }));
                break;
        }
    }
}
export function createGuardedListener(listener, attemptGen, getCurrentGeneration) {
    return {
        sendUpdate: async (ctx, update)=>{
            if (attemptGen !== getCurrentGeneration()) {
                if (update.message?.case === "toolCallCompleted") {
                    retryLogger.warn(ctx, "nal.await_stall.stale_completion_dropped", {
                        attemptGen,
                        currentGen: getCurrentGeneration()
                    });
                }
                return;
            }
            return listener.sendUpdate(ctx, update);
        },
        query: async (ctx, query)=>{
            if (attemptGen !== getCurrentGeneration()) {
                throw new CancelledError("Stale query from previous attempt");
            }
            return listener.query(ctx, query);
        },
        enqueuePostTurnEndedWork: listener.enqueuePostTurnEndedWork ? (work)=>listener.enqueuePostTurnEndedWork(work) : void 0,
        flushPostTurnEndedWork: listener.flushPostTurnEndedWork ? (ctx)=>listener.flushPostTurnEndedWork(ctx) : void 0
    };
}
function getErrorCause(error3) {
    if (error3 === null || typeof error3 !== "object" || !("cause" in error3)) {
        return void 0;
    }
    return error3.cause;
}
function getErrorCode(error3) {
    if (error3 === null || typeof error3 !== "object" || !("code" in error3)) {
        return void 0;
    }
    const code = error3.code;
    return typeof code === "string" || typeof code === "number" ? code : void 0;
}
function getErrorName(error3) {
    return error3 instanceof Error ? error3.name : void 0;
}
export function getConnectErrorDiagnostics(error3) {
    const base = {
        errorName: getErrorName(error3)
    };
    const connectError = underlyingConnectError(error3);
    if (connectError === void 0) {
        return base;
    }
    const cause = getErrorCause(connectError);
    const causeCode = getErrorCode(cause);
    const causeName = getErrorName(cause);
    return {
        ...base,
        underlyingConnectError: {
            code: connectError.code,
            codeName: Code[connectError.code],
            cause: causeCode !== void 0 || causeName !== void 0 ? {
                code: causeCode,
                name: causeName
            } : void 0
        }
    };
}
function withGatewayHeaders(customHeaders, ids) {
    const configured = new Set(Object.keys(customHeaders ?? {}).map((name17)=>name17.toLowerCase()));
    const added = Object.entries({
        [GATEWAY_REQUEST_ID_HEADER]: ids.requestId,
        [GATEWAY_AGENT_ID_HEADER]: ids.agentId
    }).flatMap(([name17, value])=>value === void 0 || configured.has(name17.toLowerCase()) ? [] : [
            [
                name17,
                sanitizeHeaderValue(value)
            ]
        ]);
    return {
        ...customHeaders,
        ...Object.fromEntries(added)
    };
}
export function withGatewayRequestIdHeader(customHeaders, requestId) {
    return withGatewayHeaders(customHeaders, {
        requestId,
        agentId: void 0
    });
}
export function instrumentGatewayFetch(baseFetch, options2) {
    const now2 = options2.now ?? (()=>performance.now());
    const epochNow = options2.epochNow ?? (()=>Date.now());
    let nextRequestIndex = 0;
    return (async (input, init)=>{
        const identity = {
            requestId: options2.requestId,
            attempt: options2.attempt ?? 0,
            requestIndex: nextRequestIndex++,
            sentAtEpochMs: epochNow()
        };
        const sentAt = now2();
        const signal = init?.signal ?? (input instanceof Request ? input.signal : void 0);
        const report = (fields)=>{
            try {
                options2.onTiming(withoutUndefined({
                    ...identity,
                    modelId: options2.modelId,
                    ...fields
                }));
            } catch  {}
        };
        let response;
        try {
            response = await baseFetch(input, init);
        } catch (error3) {
            report({
                totalMs: now2() - sentAt,
                ...failureOf(error3, signal)
            });
            throw error3;
        }
        const ttfbMs = now2() - sentAt;
        const headerFields = {
            ttfbMs,
            httpStatus: response.status,
            gatewayRequestId: gatewayRequestIdOf(response.headers)
        };
        const statusOutcome = response.status >= 400 ? "http_error" : "ok";
        const isEventStream = response.headers.get("content-type")?.includes("text/event-stream") === true;
        if (response.body === null || !isEventStream) {
            report({
                ...headerFields,
                totalMs: ttfbMs,
                outcome: statusOutcome
            });
            return response;
        }
        const [callerBody, scannedBody] = response.body.tee();
        const reported = scanEventStream(scannedBody, ()=>now2() - sentAt).then((scan2)=>{
            const totalMs = now2() - sentAt;
            const streamMs = scan2.firstContentMs === void 0 ? void 0 : Math.max(0, totalMs - scan2.firstContentMs);
            report({
                ...headerFields,
                firstEventMs: scan2.firstEventMs,
                firstContentMs: scan2.firstContentMs,
                streamMs,
                totalMs,
                outputTokens: scan2.outputTokens,
                outputTokensPerSecond: scan2.outputTokens !== void 0 && streamMs !== void 0 && streamMs > 0 ? scan2.outputTokens / streamMs * 1e3 : void 0,
                ...scan2.modelId === void 0 ? {} : {
                    modelId: scan2.modelId
                },
                ...scan2.failure === void 0 ? {
                    outcome: statusOutcome
                } : failureOf(scan2.failure, signal)
            });
        });
        return new Response(endAfter(callerBody, reported), {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        });
    });
}
function isGatewayContentEvent(data) {
    return CONTENT_EVENT_PATTERN.test(data);
}
async function scanEventStream(body, elapsed) {
    const scan2 = {};
    const observe = (block)=>{
        const data = eventData(block);
        if (data === void 0) {
            return;
        }
        scan2.firstEventMs ??= elapsed();
        if (scan2.firstContentMs === void 0 && isGatewayContentEvent(data)) {
            scan2.firstContentMs = elapsed();
        }
        scan2.modelId ??= MODEL_PATTERN.exec(data)?.[1];
        if (data.includes('"usage"')) {
            const tokens = OUTPUT_TOKENS_PATTERN.exec(data)?.[1];
            if (tokens !== void 0) {
                scan2.outputTokens = Number(tokens);
            }
        }
    };
    const reader = body.getReader();
    const decoder2 = new TextDecoder();
    let buffer = "";
    try {
        for(;;){
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            const searchFrom = Math.max(0, buffer.length - 3);
            buffer += decoder2.decode(value, {
                stream: true
            });
            let boundary = findEventBoundary(buffer, searchFrom);
            while(boundary !== void 0){
                observe(buffer.slice(0, boundary.index));
                buffer = buffer.slice(boundary.index + boundary.length);
                boundary = findEventBoundary(buffer, 0);
            }
        }
        buffer += decoder2.decode();
        if (buffer.trim().length > 0) {
            observe(buffer);
        }
    } catch (error3) {
        scan2.failure = error3;
    } finally{
        reader.releaseLock();
    }
    return scan2;
}
function eventData(block) {
    const data = [];
    let isEvent = false;
    for (const rawLine of block.split("\n")){
        const line = rawLine.endsWith("\r") ? rawLine.slice(0, -1) : rawLine;
        if (line.length === 0 || line.startsWith(":")) {
            continue;
        }
        isEvent = true;
        if (line.startsWith("data:")) {
            data.push(line.slice("data:".length).trimStart());
        }
    }
    return isEvent ? data.join("\n") : void 0;
}
function findEventBoundary(buffer, from2) {
    const lf = buffer.indexOf("\n\n", from2);
    const crlf = buffer.indexOf("\r\n\r\n", from2);
    if (crlf !== -1 && (lf === -1 || crlf < lf)) {
        return {
            index: crlf,
            length: 4
        };
    }
    return lf === -1 ? void 0 : {
        index: lf,
        length: 2
    };
}
function endAfter(body, settled) {
    const reader = body.getReader();
    return new ReadableStream({
        async pull (controller) {
            let chunk;
            try {
                chunk = await reader.read();
            } catch (error3) {
                await settled;
                controller.error(error3);
                return;
            }
            if (chunk.done) {
                await settled;
                controller.close();
                return;
            }
            controller.enqueue(chunk.value);
        },
        cancel (reason) {
            return reader.cancel(reason);
        }
    });
}
function gatewayRequestIdOf(headers) {
    for (const name17 of GATEWAY_REQUEST_ID_RESPONSE_HEADERS){
        const value = headers.get(name17)?.trim();
        if (value !== void 0 && isGatewayRequestId(value)) {
            return value;
        }
    }
    return void 0;
}
function failureOf(error3, signal) {
    const name17 = typeof error3 === "object" && error3 !== null && "name" in error3 && typeof error3.name === "string" ? error3.name : void 0;
    const aborted2 = signal?.aborted === true || name17 === "AbortError" || name17 === "CancelledError";
    return {
        outcome: aborted2 ? "aborted" : "error",
        errorName: name17 !== void 0 && name17 !== "" ? name17 : error3 instanceof Error ? "Error" : typeof error3
    };
}
function withoutUndefined(value) {
    return Object.fromEntries(Object.entries(value).filter(([, field4])=>field4 !== void 0));
}
function compareConversationRoots(roots) {
    if (bytesEqual(roots.host, roots.renderer)) {
        return "equal";
    }
    const host = decode(roots.host);
    const renderer = decode(roots.renderer);
    if (host === void 0 || renderer === void 0) {
        return "diverged";
    }
    return compareDecodedTranscripts(host, renderer);
}
function transcriptTurnCounts(roots) {
    const host = decode(roots.host);
    const renderer = decode(roots.renderer);
    return {
        hostTurns: host?.turns.length,
        rendererTurns: renderer?.turns.length,
        commonPrefixTurns: host === void 0 || renderer === void 0 ? void 0 : commonPrefixLength(host.turns, renderer.turns)
    };
}
function decode(bytes) {
    try {
        return ConversationStateStructure.fromBinary(bytes);
    } catch  {
        return void 0;
    }
}
function compareDecodedTranscripts(host, renderer) {
    if (sameTranscript(host, renderer)) {
        return "equal";
    }
    if (extendsTranscript(host, renderer)) {
        return "renderer-ahead";
    }
    if (extendsTranscript(renderer, host)) {
        return "host-ahead";
    }
    return "diverged";
}
function sameTranscript(left, right) {
    return sameBlobIds(left.turns, right.turns) && sameOptionalBytes(left.summary, right.summary) && sameOptionalBytes(left.summaryArchive, right.summaryArchive) && sameBlobIds(left.summaryArchives, right.summaryArchives);
}
function extendsTranscript(behind, ahead) {
    return isStrictPrefix(behind.turns, ahead.turns) && isUnchangedWhenHeld(behind.summary, ahead.summary) && isUnchangedWhenHeld(behind.summaryArchive, ahead.summaryArchive) && (behind.summaryArchives.length === 0 || sameBlobIds(behind.summaryArchives, ahead.summaryArchives));
}
function isStrictPrefix(prefix, whole) {
    return prefix.length < whole.length && commonPrefixLength(prefix, whole) === prefix.length;
}
function sameBlobIds(left, right) {
    return left.length === right.length && commonPrefixLength(left, right) === left.length;
}
function commonPrefixLength(left, right) {
    const bound = Math.min(left.length, right.length);
    let length = 0;
    while(length < bound && bytesEqual(left[length], right[length])){
        length++;
    }
    return length;
}
function sameOptionalBytes(left, right) {
    return left === void 0 || right === void 0 ? left === right : bytesEqual(left, right);
}
function isUnchangedWhenHeld(behind, ahead) {
    return behind === void 0 || ahead !== void 0 && bytesEqual(behind, ahead);
}
function bytesEqual(left, right) {
    return Buffer.compare(left, right) === 0;
}
export function isContention(sqliteErrcode) {
    return sqliteErrcode === SQLITE_BUSY || sqliteErrcode === SQLITE_LOCKED;
}
export function setAttributes(span, attributes) {
    for (const [key, value] of Object.entries(attributes)){
        span.setAttribute(key, value);
    }
}
export function errorAttributes(error3) {
    const { code, sqliteErrcode } = errorCode(error3);
    return {
        outcome: "error",
        "error.type": error3 instanceof Error ? error3.name : typeof error3,
        ...code === void 0 ? {} : {
            "error.code": code
        },
        ...sqliteErrcode === void 0 ? {} : {
            "error.sqlite_errcode": sqliteErrcode
        }
    };
}
function scrubStorageError(error3, storageDir) {
    if (error3 === void 0) {
        return void 0;
    }
    const scrub = (text4)=>text4.split(storageDir).join("<storageDir>");
    if (!(error3 instanceof Error)) {
        return new Error(scrub(String(error3)));
    }
    const copy = new Error(scrub(error3.message));
    copy.name = error3.name;
    copy.stack = error3.stack === void 0 ? void 0 : scrub(error3.stack);
    return copy;
}
function getBlobReferenceMessageMetadata(messageType) {
    if (!Object.prototype.hasOwnProperty.call(BLOB_REFERENCE_METADATA_BY_MESSAGE_ID, messageType)) {
        return void 0;
    }
    return BLOB_REFERENCE_METADATA_BY_MESSAGE_ID[messageType];
}
function isProtoBlobReferenceTypeName(blobReferenceType) {
    return Object.prototype.hasOwnProperty.call(BLOB_REFERENCE_MESSAGE_TYPE_BY_NAME, blobReferenceType);
}
async function collectReachableBlobClosure(root, readBlob, options2 = {}) {
    const blobs = new Map();
    const failures = [];
    const failedHexes = new Set();
    const decodedHexes = new Set();
    function recordFailure(blobIdHex, kind, detail) {
        if (failedHexes.has(blobIdHex)) {
            return;
        }
        failedHexes.add(blobIdHex);
        failures.push({
            blobIdHex,
            kind,
            ...detail === void 0 ? {} : {
                detail
            }
        });
    }
    async function fetchValidated(blobId) {
        const hex = toHex(blobId);
        const cached2 = blobs.get(hex);
        if (cached2 !== void 0) {
            return cached2;
        }
        if (failedHexes.has(hex)) {
            return void 0;
        }
        let bytes;
        try {
            bytes = await readBlob(blobId);
        } catch (error3) {
            recordFailure(hex, "read-error", error3 instanceof Error ? error3.message : String(error3));
            return void 0;
        }
        if (bytes === void 0) {
            recordFailure(hex, "missing");
            return void 0;
        }
        const beforeHash = options2.yieldIfNeeded?.();
        if (beforeHash !== void 0) {
            await beforeHash;
        }
        const actualHex = toHex(await getBlobId(bytes));
        if (actualHex !== hex) {
            recordFailure(hex, "hash-mismatch", `bytes hash to ${actualHex}`);
            return void 0;
        }
        blobs.set(hex, bytes);
        return bytes;
    }
    async function visitBlob(blobId, referenced) {
        if (blobId.length === 0) {
            return;
        }
        const bytes = await fetchValidated(blobId);
        if (bytes === void 0 || !isProtoBlobReferenceTypeName(referenced)) {
            return;
        }
        const type2 = BLOB_REFERENCE_MESSAGE_TYPE_BY_NAME[referenced];
        if (!canReachBlobs(type2)) {
            return;
        }
        const hex = toHex(blobId);
        if (decodedHexes.has(hex)) {
            return;
        }
        decodedHexes.add(hex);
        const beforeDecode = options2.yieldIfNeeded?.();
        if (beforeDecode !== void 0) {
            await beforeDecode;
        }
        let node;
        try {
            node = type2.fromBinary(bytes);
        } catch (error3) {
            recordFailure(hex, "undecodable", `${referenced}: ${error3 instanceof Error ? error3.message : String(error3)}`);
            return;
        }
        await visitMessage(node);
    }
    async function visitMessage(message) {
        const type2 = message.getType();
        const referencedTypes = new Map(getBlobReferenceMessageMetadata(type2.typeName)?.fields.map((field4)=>[
                field4.localFieldName,
                field4.blobReferenceType
            ]));
        const values = new Map(Object.entries(message));
        for (const field4 of type2.fields.list()){
            const value = fieldValue(values, field4);
            if (value === void 0) {
                continue;
            }
            const referenced = referencedTypes.get(field4.localName);
            if (referenced !== void 0) {
                for (const blobId of valuesOf(value, isBytes)){
                    await visitBlob(blobId, referenced);
                }
            } else if (embeddedMessageType(field4) !== void 0) {
                for (const nested of valuesOf(value, isMessage2)){
                    await visitMessage(nested);
                }
            }
        }
    }
    await visitMessage(root);
    return {
        blobs,
        failures
    };
}
function fieldValue(values, field4) {
    if (field4.oneof === void 0) {
        return values.get(field4.localName);
    }
    const group = values.get(field4.oneof.localName);
    return isOneofGroup(group) && group.case === field4.localName ? group.value : void 0;
}
function valuesOf(value, is2) {
    if (is2(value)) {
        return [
            value
        ];
    }
    if (Array.isArray(value)) {
        return value.filter(is2);
    }
    if (typeof value === "object" && value !== null) {
        return Object.values(value).filter(is2);
    }
    return [];
}
function embeddedMessageType(field4) {
    if (field4.kind === "message") {
        return field4.T;
    }
    if (field4.kind === "map" && field4.V.kind === "message") {
        return field4.V.T;
    }
    return void 0;
}
function isBytes(value) {
    return value instanceof Uint8Array;
}
function isMessage2(value) {
    return value instanceof Message;
}
function isOneofGroup(value) {
    return typeof value === "object" && value !== null && "case" in value;
}
function canReachBlobs(type2, visiting = new Set()) {
    const known = reachability.get(type2.typeName);
    if (known !== void 0) {
        return known;
    }
    if (visiting.has(type2.typeName)) {
        return false;
    }
    visiting.add(type2.typeName);
    const reaches = getBlobReferenceMessageMetadata(type2.typeName) !== void 0 || type2.fields.list().some((field4)=>{
        const nested = embeddedMessageType(field4);
        return nested !== void 0 && canReachBlobs(nested, visiting);
    });
    visiting.delete(type2.typeName);
    if (reaches || visiting.size === 0) {
        reachability.set(type2.typeName, reaches);
    }
    return reaches;
}
export async function openOrMigrateHostSession(args) {
    const startedAt = performance.now();
    if (!isPathSafeSessionId(args.sessionId)) {
        return {
            kind: "unavailable",
            cause: "unsafe-session-id"
        };
    }
    if (args.storage.hasSessionStore(args.sessionId)) {
        const committed = await openCommittedHostSession(args, startedAt);
        if (committed !== void 0) {
            return committed;
        }
    }
    let history = args.initialHistory ?? (args.allowCreate === true ? new ConversationStateStructure().toBinary() : void 0);
    if (history === void 0) {
        return {
            kind: "unavailable",
            cause: "no-history"
        };
    }
    for(let pass = 1;; pass++){
        const walked = await walkSeedClosure(history, args);
        if (walked.kind !== "walked") {
            return walked;
        }
        if (args.readCurrentHistory !== void 0) {
            const confirmed = await confirmHistoryStillCurrent(history, args.readCurrentHistory);
            if (confirmed.kind === "failed") {
                return confirmed;
            }
            if (confirmed.kind === "moved") {
                if (confirmed.fresh === void 0 || pass >= SEED_PASSES || args.admitSeedHistory?.(confirmed.fresh) === false) {
                    return {
                        kind: "unavailable",
                        cause: "history-moved"
                    };
                }
                history = confirmed.fresh;
                continue;
            }
        }
        return seedFromWalk(history, walked.closure, args, startedAt);
    }
}
async function walkSeedClosure(history, args) {
    let rootState;
    try {
        rootState = ConversationStateStructure.fromBinary(history);
    } catch (error3) {
        return {
            kind: "failed",
            cause: "undecodable-history",
            error: error3
        };
    }
    const closure = await collectReachableBlobClosure(rootState, args.legacyGetBlob ?? rejectLegacyReads);
    if (closure.failures.length > 0) {
        return args.legacyGetBlob === void 0 ? {
            kind: "unavailable",
            cause: "no-legacy-reader"
        } : {
            kind: "failed",
            cause: "closure",
            failures: closure.failures
        };
    }
    return {
        kind: "walked",
        closure
    };
}
async function confirmHistoryStillCurrent(history, readCurrentHistory) {
    let fresh;
    try {
        fresh = await readCurrentHistory();
    } catch (error3) {
        return {
            kind: "failed",
            cause: "history-read",
            error: error3
        };
    }
    if (fresh !== void 0 && bytesEqual(fresh, history)) {
        return {
            kind: "current"
        };
    }
    return {
        kind: "moved",
        fresh
    };
}
async function seedFromWalk(history, closure, args, startedAt) {
    const manifest = {
        manifestVersion: HOST_SESSION_MANIFEST_VERSION,
        sessionId: args.sessionId,
        latestRootBlobIdHex: toHex(await getBlobId(history)),
        origin: closure.blobs.size === 0 ? "host-native" : "migrated-from-renderer-cas",
        createdAtMs: Date.now(),
        migratedBlobCount: closure.blobs.size
    };
    const seeded = seedSessionStore(args.storage, manifest, withRootRow(closure.blobs, manifest, history), args.onSeedFailure ?? "keep");
    switch(seeded.kind){
        case "failed":
            return seeded;
        case "peer-committed":
            return reconcileCommittedStore(seeded.store, seeded.manifest, args.initialHistory === void 0 || history === args.initialHistory ? args : {
                ...args,
                initialHistory: history
            }, startedAt);
        case "seeded":
            return {
                kind: "seeded",
                store: hydrate(seeded.store, manifest, args, startedAt),
                migratedBlobCount: closure.blobs.size
            };
    }
}
function withRootRow(pieces, manifest, rootBytes) {
    return new Map([
        ...pieces,
        [
            manifest.latestRootBlobIdHex,
            rootBytes
        ]
    ]);
}
function seedSessionStore(storage, manifest, pieces, onSeedFailure) {
    let store;
    try {
        const seeded = storage.openSessionStore(manifest.sessionId);
        store = seeded;
        const outcome = commitRoot(seeded, {
            expectRoot: void 0,
            pieces,
            manifest
        });
        if (outcome.committed) {
            return {
                kind: "seeded",
                store: seeded
            };
        }
        if (outcome.onDisk === void 0) {
            throw new Error(`Session ${manifest.sessionId} has no manifest yet its seed was refused`);
        }
        return {
            kind: "peer-committed",
            store: seeded,
            manifest: outcome.onDisk
        };
    } catch (error3) {
        if (store === void 0 || onSeedFailure === "keep") {
            store?.close();
            return {
                kind: "failed",
                cause: "seed",
                error: error3
            };
        }
        try {
            reclaimUncommittedSeed(storage, manifest.sessionId, store);
        } catch (removeError) {
            return {
                kind: "failed",
                cause: "seed",
                error: new AggregateError([
                    error3,
                    removeError
                ], `Seeding host session ${manifest.sessionId} failed and the directory the seed created could not be removed`)
            };
        }
        return {
            kind: "failed",
            cause: "seed",
            error: error3
        };
    }
}
function reclaimUncommittedSeed(storage, sessionId, store) {
    let stillManifestLess;
    try {
        stillManifestLess = store.created && store.transaction(()=>readManifest(store) === void 0);
    } catch  {
        stillManifestLess = false;
    }
    store.close();
    if (stillManifestLess) {
        storage.deleteSessionDir(sessionId);
    }
}
async function openCommittedHostSession(args, startedAt) {
    let store;
    try {
        store = args.storage.openSessionStore(args.sessionId);
    } catch (error3) {
        if (error3 instanceof AgentHostStoreNotAFileError) {
            return {
                kind: "failed",
                cause: "not-a-file",
                error: error3
            };
        }
        throw error3;
    }
    let manifest;
    try {
        manifest = readManifest(store);
    } catch (error3) {
        store.close();
        reportHydrateFault(args, error3, startedAt);
        throw error3;
    }
    if (manifest === void 0) {
        store.close();
        return void 0;
    }
    return reconcileCommittedStore(store, manifest, args, startedAt);
}
async function reconcileCommittedStore(store, manifest, args, startedAt) {
    let decision;
    try {
        decision = await decideReconciliation(store, manifest, args);
    } catch (error3) {
        store.close();
        reportHydrateFault(args, error3, startedAt);
        throw error3;
    }
    if (decision.kind === "diverged") {
        store.close();
        return decision;
    }
    return {
        kind: "opened",
        store: hydrate(store, decision.manifest, args, startedAt),
        reconciliation: decision.reconciliation
    };
}
async function decideReconciliation(store, manifest, args) {
    const history = args.initialHistory ?? args.surfaceHistory;
    const hydrateAt = (current2, reconciliation)=>({
            kind: "hydrate",
            manifest: current2,
            reconciliation
        });
    if (history === void 0) {
        return hydrateAt(manifest, "not-compared");
    }
    let current = manifest;
    for(let pass = 1; pass <= COMPARE_PASSES + 1; pass++){
        const hostRoot = store.blobs.get(sessionBlobKey(current.latestRootBlobIdHex));
        if (hostRoot === void 0) {
            return hydrateAt(current, "not-compared");
        }
        const roots = {
            host: hostRoot,
            renderer: history
        };
        const comparison = compareConversationRoots(roots);
        if (comparison === "diverged") {
            return {
                kind: "diverged",
                cause: "roots",
                divergence: {
                    hostRootBlobIdHex: current.latestRootBlobIdHex,
                    rendererRootBlobIdHex: toHex(await getBlobId(history)),
                    ...transcriptTurnCounts(roots)
                }
            };
        }
        if (comparison !== "equal" && args.onCommittedStore === "require-equal") {
            return {
                kind: "diverged",
                cause: "not-equal"
            };
        }
        if (comparison !== "renderer-ahead") {
            return hydrateAt(current, comparison);
        }
        if (pass > COMPARE_PASSES) {
            break;
        }
        const caughtUp = await catchUpToHistory(store, current, history, args);
        if (caughtUp.kind === "root-moved") {
            current = caughtUp.manifest;
            continue;
        }
        if (caughtUp.kind === "caught-up") {
            return hydrateAt(caughtUp.manifest, {
                kind: "caught-up",
                copiedBlobCount: caughtUp.copiedBlobCount
            });
        }
        return caughtUp;
    }
    return {
        kind: "diverged",
        cause: "catch-up",
        error: new Error(`Session ${args.sessionId}: the committed root moved under each of ${COMPARE_PASSES} catch-up passes and is still behind the handed history`)
    };
}
async function catchUpToHistory(store, manifest, history, args) {
    let attempt;
    try {
        attempt = await attemptCatchUp(store, manifest, history, args);
    } catch (error3) {
        return {
            kind: "diverged",
            cause: "catch-up",
            error: error3
        };
    }
    if (attempt.kind !== "refused") {
        return attempt;
    }
    if (attempt.onDisk === void 0) {
        throw new Error(`Session ${manifest.sessionId} lost its manifest while catching up`);
    }
    return {
        kind: "root-moved",
        manifest: attempt.onDisk
    };
}
async function attemptCatchUp(store, manifest, history, args) {
    const copiedHexes = new Set();
    const closure = await collectReachableBlobClosure(ConversationStateStructure.fromBinary(history), async (blobId)=>{
        const hex = toHex(blobId);
        const held = store.blobs.get(sessionBlobKey(hex));
        if (held !== void 0) {
            return held;
        }
        copiedHexes.add(hex);
        return (args.legacyGetBlob ?? rejectLegacyReads)(blobId);
    });
    if (closure.failures.length > 0) {
        return {
            kind: "diverged",
            cause: "closure",
            failures: closure.failures
        };
    }
    const next = {
        ...manifest,
        latestRootBlobIdHex: toHex(await getBlobId(history))
    };
    const copied = new Map([
        ...closure.blobs
    ].filter(([hex])=>copiedHexes.has(hex)));
    const outcome = commitRoot(store, {
        expectRoot: manifest.latestRootBlobIdHex,
        pieces: withRootRow(copied, next, history),
        manifest: next
    });
    if (!outcome.committed) {
        return {
            kind: "refused",
            onDisk: outcome.onDisk
        };
    }
    return {
        kind: "caught-up",
        manifest: next,
        copiedBlobCount: copied.size
    };
}
function hydrate(store, manifest, args, startedAt) {
    try {
        return DurableHostSessionStore.hydrate({
            db: store,
            blobStore: args.mirror === void 0 ? new LocalHostBlobStore(store) : new MirroredHostBlobStore(store, args.mirror, ()=>args.instruments?.runtimeFault("mirror_write_failed")),
            forkStore: (fork)=>forkHostSession(args, fork),
            manifest,
            expectedSessionId: args.sessionId,
            ...args.onRootAdvanced === void 0 ? {} : {
                onRootAdvanced: args.onRootAdvanced
            },
            ...args.instruments === void 0 ? {} : {
                instruments: args.instruments
            },
            ...args.now === void 0 ? {} : {
                now: args.now
            }
        });
    } catch (error3) {
        store.close();
        reportHydrateFault(args, error3, startedAt);
        throw error3;
    }
}
function reportHydrateFault(args, error3, startedAt) {
    const { code, sqliteErrcode } = errorCode(error3);
    args.instruments?.fault({
        kind: "hydrate_failed",
        store: "session",
        sessionId: args.sessionId,
        relPath: args.storage.sessionDbRelPath(args.sessionId),
        durationMs: Math.max(0, performance.now() - startedAt),
        ...code === void 0 ? {} : {
            code
        },
        ...sqliteErrcode === void 0 ? {} : {
            sqliteErrcode
        },
        error: scrubStorageError(error3, args.storage.storageDir) ?? new Error("Host session hydrate failed")
    });
}
export async function forkHostSession(parent, fork) {
    const result = await openOrMigrateHostSession({
        storage: parent.storage,
        sessionId: fork.sessionId,
        initialHistory: fork.history,
        onCommittedStore: "require-equal",
        onSeedFailure: "reclaim-created",
        legacyGetBlob: fork.readParentBlob,
        ...parent.mirror === void 0 ? {} : {
            mirror: parent.mirror
        },
        ...parent.instruments === void 0 ? {} : {
            instruments: parent.instruments
        }
    });
    if (result.kind === "seeded") {
        return result.store;
    }
    if (result.kind === "opened") {
        if (result.reconciliation === "equal") {
            return result.store;
        }
        result.store.dispose();
        throw new Error(`Host session fork ${fork.sessionId} names a committed store that does not hold its history`);
    }
    throw new Error(`Host session fork ${fork.sessionId} could not be seeded from its parent: ${result.kind} (${result.cause})`);
}
export function isSessionStoreGone(sessionDbPath) {
    try {
        import_node_fs8.default.statSync(sessionDbPath);
        return false;
    } catch (error3) {
        return errorCode(error3).code === "ENOENT";
    }
}
export function sessionMetaFromStore(storage, sessionId) {
    const store = storage.readSessionStore(sessionId);
    try {
        const manifest = readManifest(store);
        if (manifest === void 0) {
            return void 0;
        }
        return sessionMetaFromManifestAndProjection(manifest, readListingProjection(store));
    } finally{
        store.close();
    }
}
export function withCommittedRootAndRecency(meta, args) {
    const updatedAtMs = Math.max(args.existingUpdatedAtMs ?? meta.updatedAtMs ?? 0, args.proposedUpdatedAtMs ?? 0);
    const { updatedAtMs: _merged, ...rest } = meta;
    return {
        ...rest,
        ...updatedAtMs === 0 ? {} : {
            updatedAtMs
        },
        latestRootBlobIdHex: args.committedRoot ?? meta.latestRootBlobIdHex
    };
}
export function describeFailure(result) {
    if (result.cause !== "closure") {
        return "";
    }
    return describeFirstFailures(result.failures);
}
export function describeFirstFailures(failures) {
    const summary = failures.slice(0, 5).map((failure2)=>`${failure2.blobIdHex.slice(0, 12)}\u2026:${failure2.kind}`).join(", ");
    return summary.length === 0 ? "" : `; first failures: ${summary}`;
}
export function describeReconciliation(reconciliation) {
    switch(reconciliation){
        case "not-compared":
            return "";
        case "equal":
            return ", same as the surface's history";
        case "host-ahead":
            return ", ahead of the surface's history";
        default:
            return `, caught up to the surface's newer history, ${reconciliation.copiedBlobCount} piece(s) copied`;
    }
}
export function describeErrorCode(error3) {
    const { code, sqliteErrcode } = errorCode(error3);
    const codes = [
        code,
        sqliteErrcode
    ].filter((part)=>part !== void 0);
    return codes.length === 0 ? "" : ` (${codes.join("/")})`;
}
export { ADMIN_TOOL_POLICY_BUILTIN_MCP_PROVIDERS, ADO_SERVICE_ACCOUNT_UNSUPPORTED_FAILURE_CODE, AGENT_HOST_LOOPS, AGENT_HOST_MODULE_CHANNELS, AGENT_HOST_MODULE_METRIC_TAG_KEYS, AGENT_HOST_MODULE_SERVE_CAUSES, AGENT_HOST_MODULE_SOURCES, AGENT_HOST_MODULE_STATIC_GENERATION, AGENT_HOST_TURN_RUNTIMES, AGENT_LAYOUT_ALLOWLISTED_ACTION_IDS, AGENT_SDK_SLACK_CHANNEL_POSTS_MAX_IDS, AGENT_SERVE_DEPLOYMENT_PERMISSIONS, AGENT_SERVE_DEPLOYMENT_STORE_MOUNT_NAME, AGENT_SERVE_USER_STORE_FILES_SOURCE_ID, AGENT_SERVE_USER_STORE_KEY_PREFIX, AGENT_STORE_AUTOMATION_MOUNT_NAME, AGENT_STORE_DEFAULT_MAX_FILE_SIZE_BYTES, AGENT_STORE_FILES_DIR_NAME, AGENT_STORE_FUSE_BINARY_CMDLINE_NEEDLE, AGENT_STORE_FUSE_DISPATCH_WEDGE_REPORT_PATH, AGENT_STORE_FUSE_EVENTS_PATH, AGENT_STORE_FUSE_NOTICE_CURSOR_PATH, AGENT_STORE_FUSE_PID_FILE, AGENT_STORE_FUSE_RELAUNCH_REASON_PATH, AGENT_STORE_FUSE_RUNTIME_DIR, AGENT_STORE_FUSE_USE_DEDICATED_SERVICE_GATE, AGENT_STORE_FUSE_WEDGE_REPORT_PATH, AGENT_STORE_GROK_BOT_MOUNT_NAME, AGENT_STORE_ID_PATTERN, AGENT_STORE_ID_QUERY_PARAM, AGENT_STORE_MOUNT_ROOT2, AGENT_STORE_PERMISSIONS, AGENT_STORE_REFRESH_PEER_PATHS_MAX, AGENT_STORE_RESERVED_CURSOR_PATH_PREFIX, AGENT_STORE_SELF_MOUNT_NAME, AGENT_STORE_SELF_MOUNT_ROOT, AGENT_STORE_SHARE_ID_PATTERN, AGENT_STORE_SHARE_ID_PREFIX, AGENT_STORE_SHARE_ID_QUERY_PARAM, AGENT_STORE_SHARE_PERMISSIONS, AGENT_STORE_SKILLS_DIR_NAME, AGENT_STORE_SYNC_CLIENT_CONFIG_NAME, AGENT_STORE_TEAM_MOUNT_NAME, AGENT_STORE_TEAM_SOURCE_ID_PATTERN, AGENT_STORE_TMP_DIR_NAME, AGENT_STORE_TMP_DIR_NAME_DEV, AGENT_STORE_USER_MOUNT_NAME, AGENT_STORE_USER_SOURCE_ID_PATTERN, AGENT_STORE_USE_DEDICATED_SERVICE_GATE, AGENT_TRANSPORT_MODE_RESPONSE_HEADER, AGENT_WEBSOCKET_SOCKET_REUSE_RESPONSE_HEADER, ALLOWED_SCM_RPC_CALLSITES, ANYGRESS_DNS_RESOLVER_POD_LABEL, APPLY_SUBAGENT_AGENT_STORE_MOUNTS_COMMAND, ASK_QUESTION_AUTO_ANSWER_REASON, ASK_QUESTION_AUTO_ANSWER_REASON_PREFIX, AUTOMATION_STORE_CANVASES_DIR, AUTO_AB_PROMPT_VARIANTS, AUTO_SPILLOVER_UI_DEFAULTS, AZURE_DEVOPS_SERVICES_UUID, AgentServeDeploymentPermission, AgentStorePermission, AgentStoreSharePermission, AuthProviderType, BACKEND_REQUEST_BODY_SIZE_LIMIT_BYTES, BARE_UUID_PATTERN, BITBUCKET_CLOUD_UUID, BITBUCKET_FORGE_NOT_INSTALLED_FAILURE_CODE, BRIDGE_CANCEL_CONTROLLER_METHOD, BRIDGE_CANCEL_REQUEST_METHOD, CANVAS_GET_HOST_THEME_STATE_COMMAND, CANVAS_STORE_PERSIST_ROOTS, CHANGE_MONITOR_DEFAULT_MONITORING_CRITERIA, CHANGE_MONITOR_ONBOARDING_MANAGED_SKILL_PATH, CHANGE_MONITOR_ONBOARDING_PR_TITLE, CHANGE_MONITOR_ONBOARDING_SKILL_ID, CHAT_NAME_MAX_CHARS, CHAT_NAME_USER_REQUEST_CLOSE_TAG, CHAT_NAME_USER_REQUEST_OPEN_TAG, CLAUDE_HISTORY_FILENAME, CLAUDE_HOME_SUBDIR, CLAUDE_PROJECTS_SUBDIR, CLEAR_SUBAGENT_AGENT_STORE_MOUNTS_COMMAND, CLI_FEEDBACK_MAX_CHARS, CLONE_GIT_REPOS_LABEL_KEY, CLOUDFLARE_VNET_POD_LABEL, CLOUD_AGENTS_NOT_AUTHORIZED_FAILURE_CODE, CLOUD_AGENT_ALL_SECRET_NAMES_ENV_VAR, CLOUD_AGENT_ARTIFACTS_DIR, CLOUD_AGENT_DESKTOP_LEASE_GATE, CLOUD_AGENT_DESKTOP_LEASE_HUMAN_TTL_MS, CLOUD_AGENT_FOLLOWUP_RETRY_HINT, CLOUD_AGENT_FUSE_LIVENESS_KILL_GATE, CLOUD_AGENT_IDENTITY_GROK_BOT_BOX_TOKEN_PATH, CLOUD_AGENT_IDENTITY_WORKER_TOKEN_PATH, CLOUD_AGENT_INJECTED_SECRET_NAMES_ENV_VAR, CLOUD_AGENT_LEGACY_PRIVACY_ENFORCING_TEAMS_INFO_KEY, CLOUD_AGENT_MACHINE_RESOURCES_GATE, CLOUD_AGENT_ORIGIN_CLI_SESSION_TOKEN_ENV_VAR, CLOUD_AGENT_REPEATED_UNEXPECTED_ERROR_MESSAGE, CLOUD_AGENT_RETRYABLE_ERROR_RECOVERY_MESSAGE, CLOUD_AGENT_SINGLE_REPO_WORKSPACE_ROOT, CLOUD_AGENT_START_PAYLOAD_TOO_LARGE_MESSAGE_PREFIX, CLOUD_AGENT_STORE_ID_PATTERN, CLOUD_AGENT_TRANSIENT_ERROR_TITLE, CLOUD_AGENT_USAGE_LIMIT_ERROR_CODE, CLOUD_AGENT_USER_EMAIL_ADDRESS_ENV_VAR, CLOUD_CANVAS_ROOT2, CLOUD_MCP_RUNTIME_PLUGIN_SUFFIX, CLOUD_MCP_RUNTIME_TEAM_SUFFIX, CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_DEFAULT_MAX_RESULTS, CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_GITHUB_PROVIDER, CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_PATH, CLOUD_ONBOARDING_HEURISTIC_ENV_SETUP_RPC_METHOD, CLOUD_ONBOARDING_MANAGED_SKILL_PATH, CLOUD_ONBOARDING_SKILL_ID, CLOUD_ONBOARDING_UI_GATE, CODE_TOUR_DEFAULT_MODEL_VERSION, CODE_TOUR_DEFAULT_PROMPT_VERSION, CODE_TOUR_FORMAT_VERSION, CODE_TOUR_PROMPT_CACHE_KEY_PATTERN, CODE_TOUR_PROMPT_REVISION, CODE_TOUR_TERM_GLOSS_MAX_CHARS, CODE_TOUR_VARIANTS, CURSOR_AGENT_ALLOWED_TOOLS_HEADER_NAME, CURSOR_AGENT_EMAIL, CURSOR_AGENT_EXCLUDE_TOOLS_HEADER_NAME, CURSOR_AGENT_METADATA_PATH_PREFIX, CURSOR_AGENT_OIDC_TOKEN_PATH, CURSOR_AGENT_SOCKET_ENV_VAR, CURSOR_AGENT_STORE_FILES_DIR_ENV, CURSOR_AGENT_STORE_SHARED_PATHS_ENV, CURSOR_COAUTHORED_BY_TRAILER, CURSOR_COAUTHOR_EMAILS, CURSOR_COAUTHOR_NAME, CURSOR_GIT_AUTHOR_NAME, CURSOR_GROK_45_CREDIT_GRANT_MODEL_IDS, CURSOR_GROK_46_CREDIT_GRANT_MODEL_IDS, CURSOR_GROK_47_CREDIT_GRANT_MODEL_IDS, CURSOR_LOCAL_AGENT_HEADERS_ENV, CURSOR_SANDBOX_ENV_NAME_PATTERN, CURSOR_SCM_MCP_PROVIDERS, CURSOR_UNIVERSAL_MAGIC_DOCKER_IMAGE_NAME, CURSOR_WORKTREES_DIR, CURSOR_WORKTREES_GLOB, CUSTOM_AGENTS_BASE_PATH, CUSTOM_AGENTS_ROUTE_SEGMENT, DEFAULT_CODE_TOUR_VARIANT_NAME, DEFAULT_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS, DEFAULT_ENV_SETUP_COMPOSER_NAME, DEFAULT_ENV_SETUP_MODEL_NAME, DESKTOP_BRIDGE_MAX_LIST_THREADS, DESKTOP_BRIDGE_MAX_MESSAGE_BYTES, DESKTOP_BRIDGE_PROTOCOL_VERSION, DEV_SMART_MODE_CLASSIFIER_DELAY_MS, DEV_SMART_MODE_CLASSIFIER_DELAY_SECONDS, DOCKER_BUILD_FAILED_FAILURE_CODE, DOCKER_BUILD_FAILED_USER_FACING_MESSAGE, EMPTY_REPOSITORY_USER_FACING_MESSAGE, ENVIRONMENT_BUILD_FAILURE_CATEGORY_BY_CODE, ENVIRONMENT_BUILD_FAILURE_CODES_WITH_SPECIFIC_USER_FACING_ERROR, ENVIRONMENT_JSON_INVALID_FAILURE_CODE, ENVIRONMENT_PERMISSIONS, ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS_KEY, ENVIRONMENT_SETUP_RESUME_CONFIG_NAME, ENV_NAME_PATTERN, ENV_SETUP_MANAGED_SKILL_DIRECTORY, ENV_SETUP_MANAGED_SKILL_PATH, ENV_SETUP_SKILL_ID, ENV_SETUP_TMUX_SESSION_NAME, EXEC_DAEMON_STARTUP_TRACEPARENT_ENV_VAR, EnvironmentPermission, FLUSH_AGENT_STORE_FOR_SUBAGENT_COMMAND, GENERATE_VIDEO_INPUT_IMAGES_MAX_BYTES, GET_AGENT_STORE_SKILL_ROOTS_COMMAND, GET_AGENT_STORE_SKILL_TARGET_DIRS_COMMAND, GET_MOUNTED_AGENT_STORES_COMMAND, GH_TELEMETRY_ENV_VAR, GITHUB_APP_NOT_ASSOCIATED_FAILURE_CODE, GITHUB_APP_NOT_ASSOCIATED_MESSAGE_FRAGMENT, GITHUB_APP_NOT_INSTALLED_FAILURE_CODE, GITHUB_INSTALLATION_REPO_ACCESS_FAILURE_CODE, GITHUB_IP_ALLOWLIST_DOCS_URL, GITHUB_IP_ALLOWLIST_FAILURE_CODE, GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE, GITHUB_IP_ALLOWLIST_USER_FACING_MESSAGE_PREFIX, GITHUB_OAUTH_CLIENT_IDS, GITHUB_PULL_REQUEST_PATH_PATTERN, GITHUB_TEAM_NO_REPO_ACCESS_FAILURE_CODE, GITHUB_USER_NO_REPO_ACCESS_FAILURE_CODE, GITLAB_COM_UUID, GITLAB_REPO_NOT_LINKED_FAILURE_CODE, GIT_CLONE_FAILED_FAILURE_CODE, GIT_DIFF_INTRO, GIT_DIFF_TRUNCATION_NOTICE, GIT_DIFF_UNCOMMITTED_INTRO, GIT_REMOTE_TRANSIENT_FAILURE_USER_FACING_MESSAGE, GLASS_HEADLESS_SHELL_EVENT_COMMAND, GLASS_PERF_VOTE_CONFIG_DEFAULTS, GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID, GOOGLE_WORKSPACE_MCP_HOSTS, GRAPHITE_ORIGIN, GROK_BOT_AGENT_PERMISSIONS, GROK_BOT_AGENT_STORE_SOURCE_ID_PATTERN, GROK_BOT_AGENT_STORE_SOURCE_ID_PREFIX, GROK_BOT_BOX_IDENTITY_SOCKET_PATH, GROK_BOT_DESKTOP_GITHUB_CONNECT_CALLBACK_URL, GROK_BOT_GITHUB_CONNECT_STATE_PREFIXES, GROK_BOT_GITHUB_CONNECT_STATE_PREFIX_BY_CALLBACK_URL, GROK_BOT_SLACK_CONNECT_RETURN_URLS, GROK_BOT_TEMPLATE_BLOB_MAX_BYTES, GROK_BOT_TEMPLATE_PERMISSIONS, GrokBotAgentPermission, GrokBotTemplatePermission, HEALTHY_USER_MIN_ACCOUNT_AGE_MS, HOSTED_MCP_ROUTING_REPORT_STATE_COMMAND, IMAGE_PULL_FAILED_USER_FACING_MESSAGE, INBOX_ROOT_DIR, INFRA_TRANSIENT_FAILURE_CODE, INPUT_FOCUSED_EDITOR_DENYLIST_ACTION_IDS, INSTALL_FAILED_FAILURE_CODE, INTERACTIVE_CHILD_ROUTE_ID_PREFIX, IN_APP_AD_NEW_USER_BLACKOUT_MS, JOB_ROLE, JOB_ROLES, JOB_ROLE_SLUG, KEYRING_PERMISSIONS, KNOWN_GIT_HOSTING_DOMAINS, KeyringPermission, LEGACY_AUTOMATIONS_BASE_PATH, LEGACY_AUTOMATIONS_ROUTE_SEGMENT, LEGACY_GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID, LEGACY_MADE_WITH_TRAILER, LEGACY_REVIEW_CURSOR_HOST, LEGACY_REVIEW_CURSOR_HOSTS, LEGACY_REVIEW_CURSOR_HOST_STAGING, LEGACY_STARTUP_TEAM_REFERRAL_DISCOUNT_ID, MAX_CHILD_INBOX_REMINDER_ENTRIES, MAX_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS, MAX_GIT_DIFF_CHAR_LENGTH, MAX_INACTIVITY_THRESHOLD_MINUTES, MAX_LIST_DETAILED_COMPOSERS, MAX_TEXT_SIZE, MCP_OAUTH_CALLBACK_PATH, MCP_OAUTH_CANONICAL_DESKTOP_URL_PROTOCOLS, MCP_OAUTH_CLIENT_LOGO_URI, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_PATH, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_REDIRECT_URIS, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_URL, MCP_OAUTH_CURSOR_CLIENT_BRANDING, MCP_OAUTH_DESKTOP_RETURN_URL, MCP_OAUTH_EXTENSION_ID, MCP_OAUTH_GROK_BOT_BOUNCE_CALLBACK_URL, MCP_OAUTH_GROK_BOT_CLIENT_BRANDING, MCP_OAUTH_GROK_BOT_CLIENT_METADATA_DOCUMENT_PATH, MCP_OAUTH_GROK_BOT_MOBILE_CALLBACK_URL, MCP_OAUTH_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL, MCP_OAUTH_GROK_BOT_RETURN_URL, MCP_OAUTH_GROK_WEB_CALLBACK_URL, MCP_OAUTH_LEGACY_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL, MCP_OAUTH_LEGACY_SAND_RETURN_URL, MCP_OAUTH_LOOPBACK_CALLBACK_URL, MCP_OAUTH_LOOPBACK_FALLBACK_PORTS, MCP_OAUTH_LOOPBACK_IPV4_CALLBACK_URL, MCP_OAUTH_PORTAL_CALLBACK_URL, MCP_OAUTH_PORTAL_RETURN_PATH_PREFIXES, MCP_OAUTH_POST_AUTH_RETURN_URLS, MCP_OAUTH_PROVIDER_POLICIES, MCP_OAUTH_RELAYED_LOOPBACK_HEADER, MCP_OAUTH_RETURN_PATH, MCP_OAUTH_SAND_RETURN_URL, MCP_OAUTH_STATE_ACCOUNT_MISMATCH_MESSAGE, MCP_OAUTH_STATE_TARGET_DESKTOP_LOOPBACK, MCP_OAUTH_STATE_TARGET_GROK_BOT_MOBILE, MCP_OAUTH_STATE_TARGET_GROK_WEB, MCP_OAUTH_STATE_TARGET_X_APP, MCP_OAUTH_X_APP_CALLBACK_URL, MCP_REDACTED_VALUE, MCP_TOOL_REQUIRES_CONFIRMATION_META_KEY, MINT_GITHUB_TOKEN_LABEL_KEY, MIN_ENVIRONMENT_SETUP_MAX_RESUME_AGE_MS, MOUNT_AGENT_STORE_COMMAND, NAMED_AGENT_HOME_STORE_MOUNT_NAME, NEW_PROJECT_KICKOFF_MESSAGE, NON_RETRYABLE_PROVIDER_ERROR_CODE, NON_RETRYABLE_PROVIDER_ERROR_SUBTYPES, NOTIFY_AGENT_STORE_SKILL_TARGET_DIRS_CHANGED_COMMAND, OFFER_TEMPLATES, OFFER_TEMPLATE_KEYS, ORGANIZATION_PERMISSIONS, ORG_API_KEY_SCOPES, ORG_API_KEY_SCOPE_ADMIN, ORG_API_KEY_SCOPE_AUDIT_LOGS_READ, ORG_API_KEY_SCOPE_MEMBERS, ORG_API_KEY_SCOPE_MEMBERS_READ, ORG_API_KEY_SCOPE_MODELS, ORG_API_KEY_SCOPE_MODELS_READ, ORG_API_KEY_SCOPE_USAGE, ORIGIN_MCP_BUILTIN_TARGET, ORIGIN_MCP_READONLY_SERVER_URL, ORIGIN_MCP_SERVER_URL, ORIGIN_PLAN_REQUIRED_FAILURE_CODE, ORIGIN_PR_IDENTITY_HOST, ORIGIN_PR_IDENTITY_HOST_STAGING, OrganizationPermission, PARENT_STORE_ALIAS, PERMISSION_RESOURCE_TYPES, PINNED_WORKER_OFFLINE_DETAIL_MARKDOWN, PINNED_WORKER_OFFLINE_ROW_STATUS, PLACEMENT_CONSENT_ALLOW_OPTION_ID, PLACEMENT_CONSENT_DENY_OPTION_ID, PLACEMENT_CONSENT_QUESTION_ID, PRIMARY_INTRO_FIRE_TYPE, PRIVATE_INFERENCE_FEATURE_OFF_MESSAGE, PRIVATE_INFERENCE_OFF_FEATURES, PRIVATE_WORKER_ALL_BUSY_USER_FACING_MESSAGE, PRIVATE_WORKER_BC_ID_HEADER_NAME, PRIVATE_WORKER_CAPACITY_USER_FACING_MESSAGE, PRIVATE_WORKER_CLAIMED_BC_ID_HEADER_NAME, PRIVATE_WORKER_CLI_VERSION_HEADER_NAME, PRIVATE_WORKER_DISCONNECTED_TITLE, PRIVATE_WORKER_DISCONNECTED_USER_FACING_MESSAGE, PRIVATE_WORKER_HOST_POWER_STATE_HEADER_NAME, PRIVATE_WORKER_ID_HEADER_NAME, PRIVATE_WORKER_MACHINE_OFFLINE_USER_FACING_MESSAGE, PRIVATE_WORKER_MISSING_REPO_URL_MESSAGE, PRIVATE_WORKER_RESUMED_AFTER_SUSPEND_MS_HEADER_NAME, PRIVATE_WORKER_SESSION_OWNER_FILENAME, PROACTIVE_TYPES, PROFILE_BADGE_CURSOR_AMBASSADOR, PROFILE_BADGE_CURSOR_TEAM, PROFILE_BADGE_IDS, PROFILE_METADATA_BADGES_KEY, PROJECT_APPEARANCE_COLOR_IDS, PROJECT_SUBAGENT_DEFAULT_NAME, PROJECT_SUBAGENT_TYPE_NAME, PROVIDER_USER_BLOCKED_ERROR_CODE, PR_CODE_TOUR_SOURCE_PRECEDENCE, RECENTLY_CREATED_USER_WINDOW_MS, REFRESH_AGENT_STORE_PEER_PATHS_COMMAND, REFRESH_USER_AGENT_STORE_SKILLS_SYNC_SETTING_COMMAND, REMOTE_AGENT_HOST_CANCEL_METHOD, REMOTE_AGENT_HOST_CONTROLLER_CHALLENGES_CHANGED_METHOD, REMOTE_AGENT_HOST_HEARTBEAT_INTERVAL_MS, REMOTE_AGENT_HOST_HEARTBEAT_METHOD, REMOTE_AGENT_HOST_HEARTBEAT_TIMEOUT_MS, REMOTE_AGENT_HOST_TUNNEL_GOAWAY_COMMAND, REMOTE_AGENT_HOST_TUNNEL_REVISIONS_HEADER, REMOTE_AGENT_HOST_TUNNEL_REVISION_FLOW_CONTROL, REMOTE_AGENT_HOST_TUNNEL_SETTINGS_METHOD, REMOTE_AGENT_HOST_WINDOW_UPDATE_METHOD, REPO_LABEL_FIXTURES, REPO_NOT_FOUND_FAILURE_CODE, RESOLVE_AGENT_STORE_REFERENCES_COMMAND, RESOLVE_AGENT_STORE_SCOPE_PATHS_COMMAND, RESOLVE_PR_MERGE_CONFLICTS_SKILL_ID, REST_MCP_CURSOR_AUTH_HEADER, REST_MCP_HOST, REST_MCP_SCM_ERROR_CODES, REST_MCP_SCM_NOT_CONNECTED_REASONS, SAND_AGENT_STORE_RPC_SERVICE_DEDICATED_VALUE, SAND_AGENT_STORE_RPC_SERVICE_ENV, SAND_BOX_AGENT_DATA_ROOT, SAND_BOX_CHROME_POLICY_ONEPASSWORD_ENV, SAND_BOX_FORK_NOVNC_PORT, SAND_BOX_HIBERNATE_HOOK_PATH, SAND_BOX_HOST_BUNDLE_ROOT, SAND_BOX_HOST_DIR, SAND_BOX_HOST_ENTRY, SAND_BOX_HOST_UPGRADE_MARKER_PATH, SAND_BOX_HOST_USER, SAND_BOX_HOST_VERSION_PATH, SAND_BOX_IMAGE_TAG_LATEST, SAND_BOX_IMAGE_TAG_PREFIX, SAND_BOX_LABEL_EGRESS_TEAM, SAND_BOX_LABEL_FLAVOR, SAND_BOX_LABEL_IMAGE_TAG, SAND_BOX_LABEL_KIND, SAND_BOX_LABEL_OWNER, SAND_BOX_LABEL_SESSION, SAND_BOX_LEGACY_STORE_ABSENT_VALUE, SAND_BOX_LEGACY_STORE_ENV, SAND_BOX_NOVNC_HIBERNATION_BOUNDS, SAND_BOX_ONEPASSWORD_EXTENSION_DIR, SAND_BOX_ONEPASSWORD_EXTENSION_ID_FILE, SAND_BOX_ONEPASSWORD_EXTENSION_UPDATE_XML, SAND_BOX_PARK_HEADER, SAND_BOX_PARK_MODES, SAND_BOX_PERSISTED_PATHS, SAND_BOX_PERSIST_ARCHIVE_EXCLUDES, SAND_BOX_PRIMARY_NOVNC_PORT, SAND_BOX_SESSION_ENV, SAND_BOX_SESSION_ON_VALUE, SAND_BOX_STORE_BACKEND_ENV, SAND_BOX_STORE_BACKEND_V2_VALUE, SAND_BOX_STORE_BLOBS_PREFIX, SAND_BOX_STORE_COPY_IN_ENV, SAND_BOX_STORE_FLUSH_FIFO_DIR, SAND_BOX_STORE_HIBERNATE_HOOK_ENV, SAND_BOX_STORE_HIBERNATE_HOOK_ON_VALUE, SAND_BOX_STORE_ID_ENV, SAND_BOX_STORE_MANIFEST_COMMIT_ENV, SAND_BOX_STORE_MANIFEST_COMMIT_ON_VALUE, SAND_BOX_STORE_MANIFEST_REL_PATH, SAND_BOX_STORE_OWNER_REL_PATH, SAND_BOX_STORE_SYNC_ENV, SAND_BOX_WORKSPACE_DEFAULT_IGNORE_PATTERNS, SAND_DESKTOP_SUPERVISION_DISABLED_ENV, SAND_DESKTOP_SUPERVISOR_DIR, SAND_HOST_BUNDLE_CHANNELS, SAND_HOST_BUNDLE_CHANNEL_ENV, SAND_HOST_BUNDLE_DEFAULT_CHANNEL, SAND_HOST_BUNDLE_PROMOTABLE_CHANNELS, SAND_HOST_BUNDLE_PUBLIC_BASE_URL, SAND_HOST_BUNDLE_S3_BUCKET, SAND_HOST_BUNDLE_S3_PREFIX, SAND_HOST_BUNDLE_S3_REGION, SAND_HOST_BUNDLE_SHA256_REGEX, SAND_HOST_UID_SPLIT_ENV, SAND_HOST_UPGRADE_MAX_DEFER_MS, SAND_MANAGED_ROOT, SAND_MANAGED_SETUP_AS_BOX_USER_FLAG, SAND_MANAGED_SETUP_FORCE_FLAG, SAND_MANAGED_SETUP_PRIVILEGED_CONVERGE_PATH, SAND_MANAGED_SETUP_RUN_AS_ENV, SAND_MANAGED_SETUP_RUN_AS_VALUES, SAND_MANAGED_SETUP_TEAM_ID_ENV, SAND_MANIFESTS_ROOT, SAND_MANIFEST_ASSIGNMENT_PATH, SAND_SETUP_CONVERGE_LOG_PATH, SAND_SETUP_FAILURE_CLASSES, SAND_SETUP_MAX_SECRETS_PER_TEAM, SAND_SETUP_MAX_SECRET_ENV_BYTES, SAND_SETUP_MAX_SECRET_VALUE_BYTES, SAND_SETUP_PHASES, SAND_SETUP_RECEIPTS_ROOT, SAND_SETUP_SCHEMA_VERSION, SAND_SETUP_SCOPE_KINDS, SAND_SETUP_SECRET_ENVELOPE_VERSION, SAND_SETUP_STATUS_PATH, SAND_SUPERVISOR_ACKS_DIR, SAND_SUPERVISOR_COMMAND_KINDS, SAND_SUPERVISOR_COMMAND_PART_PATH, SAND_SUPERVISOR_COMMAND_PATH, SAND_SUPERVISOR_DESKTOP_DIR, SAND_SUPERVISOR_DESKTOP_HEALTH_PATH, SAND_SUPERVISOR_DESKTOP_HEALTH_PATH_ENV, SAND_SUPERVISOR_DIR, SAND_SUPERVISOR_DIR_ENV, SAND_SUPERVISOR_ROLES, SAND_SUPERVISOR_ROLE_ENV, SAND_SUPERVISOR_STAGED_BUNDLE_PART_PATH, SAND_SUPERVISOR_STAGED_BUNDLE_PATH, SAND_SUPERVISOR_STATUS_PATH, SAND_SUPERVISOR_UPGRADE_MODES, SAND_WORKSPACE_IGNORE_FILE_NAME, SCM_ACCOUNT_NOT_CONNECTED_FAILURE_CODE, SCM_AUTH_FAILED_FAILURE_CODE, SCM_AUTH_FAILED_MESSAGE_PREFIX, SCM_AUTH_FAILED_USER_FACING_MESSAGE, SCM_CHECKOUT_FAILED_USER_FACING_MESSAGE, SCM_HOST_UNAVAILABLE_FAILURE_CODE, SCM_PROVIDERS, SCM_PR_BATCH_MAX_URLS, SCM_RATE_LIMITED_FAILURE_CODE, SCM_REF_NOT_FOUND_FAILURE_CODE, SCM_REF_NOT_FOUND_MESSAGE_PREFIX, SCM_REPO_ACCESS_DENIED_FAILURE_CODE, SCM_REPO_EMPTY_FAILURE_CODE, SCM_RPC_CALLSITES, SCM_RPC_CALLSITE_HEADER_NAME, SCP_STYLE_GIT_URL_REGEX, SERVICE_TOKEN_ORGANIZATION_SCOPES, SERVICE_TOKEN_ORGANIZATION_SCOPE_GROUPS, SERVICE_TOKEN_SCOPE_CLI_SESSION, SERVICE_TOKEN_SCOPE_CLOUD_AGENTS, SERVICE_TOKEN_TEAM_SCOPES, SERVICE_TOKEN_TEAM_SCOPE_GROUPS, SERVICE_TOKEN_USER_SCOPES, SERVICE_TOKEN_USER_SCOPE_GROUPS, SHELL_INITIALIZATION_FAILED_USER_FACING_MESSAGE, SHORT_GIT_SHA_REGEX, SIDE_CHAT_BOUNDARY_BODY, SIDE_CHAT_BOUNDARY_MESSAGE_ID_PREFIX, SIDE_CHAT_BOUNDARY_TAG, SIDE_CHAT_CREATION_REJECTED_REASON_KEY, SIDE_CHAT_CREATION_REJECTED_TOO_MANY, SIDE_CHAT_DEFAULT_NAME, SIDE_CHAT_LIMIT_REACHED_MESSAGE, SIDE_CHAT_LIMIT_REACHED_TITLE, SIDE_CHAT_NAME_MAX_LENGTH, SIDE_CHAT_NAME_REMINDER, SIDE_CHAT_STICKY_REMINDER_BODY, SIDE_CHAT_STICKY_SYSTEM_REMINDER, SIDE_CHAT_SUBAGENT_TYPE_NAME, SNAPSHOT_COPY_FAILED_USER_FACING_MESSAGE, SNAPSHOT_EXPIRED_USER_FACING_MESSAGE, SNAPSHOT_FAILED_FAILURE_CODE, SNAPSHOT_INVALID_USER_FACING_MESSAGE, SNAPSHOT_NOT_FOUND_OR_NO_ACCESS_USER_FACING_MESSAGE, SPAWN_CWD_HOP_ENV_VAR, STAGED_PROJECT_ICONS, STAGED_PROJECT_INIT_DESCRIPTION_MAX_CHARS, STANDARD_STARTUP_CREDIT_GRANT_CENTS, STANDARD_STARTUP_CREDIT_GRANT_PRODUCT_ID, STANDARD_STARTUP_PROMO_DURATION_MONTHS, STARTUP_OFFER_TYPES, STARTUP_OFFER_V2_12MO_MONTHS, STARTUP_OFFER_V2_CONFIGS, STARTUP_OFFER_V2_MONTHS, STARTUP_T1_20_50_12MO_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_T1_20_50_ATTRIBUTION_SOURCE, STARTUP_T1_20_50_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_BATCH_20_50_12MO_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_BATCH_20_50_ATTRIBUTION_SOURCE, STARTUP_YC_BATCH_20_50_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_BATCH_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_STANDARD_12MO_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_STANDARD_TEAM_REFERRAL_DISCOUNT_ID, STARTUP_YC_TEAM_REFERRAL_DISCOUNT_ID, STRUCTURED_LOG_KEYS, SUBAGENT_COMPOSER_BCID_NAMESPACE, SUBSCRIPTION_RESULTS_INBOX_PREFIX, SUBSCRIPTION_RESULTS_INBOX_TYPE, SYNC_AGENT_STORE_PATH_COMMAND, SYNC_DASHBOARD_SECRETS_LABEL_KEY, SYSTEM_NOTIFICATION_CLOSE_TAG, SYSTEM_NOTIFICATION_OPEN_TAG, SYSTEM_NOTIFICATION_TAG, TEAMS_TRIAL_AMOUNT_CENTS, TEAMS_TRIAL_DISCOUNT_ID, TEAMS_TRIAL_V2_DURATION_DAYS, TEAMS_TRIAL_V2_INITIAL_CREDIT_AMOUNT_CENTS, TEAMS_TRIAL_V2_INITIAL_GRANT_PRODUCT_ID, TEAMS_TRIAL_V2_INVITE_PROMO_PAID_COUNT_OFFSET, TEAMS_TRIAL_V2_MAX_FREE_SEATS, TEAMS_TRIAL_V2_MAX_INVITE_PROMO_SEATS, TEAMS_TRIAL_V2_REFERRAL_DISCOUNT_ID, TEAM_API_KEY_SCOPES, TEAM_API_KEY_SCOPE_ADMIN, TEAM_API_KEY_SCOPE_AGENT, TEAM_API_KEY_SCOPE_MODELS, TEAM_API_KEY_SCOPE_MODELS_READ, TEAM_API_KEY_SCOPE_READ, TEAM_API_KEY_STATIC_SCOPES, TEAM_MEMBER_INVITE_PROMO_CREDIT_AMOUNT_CENTS, TEAM_MEMBER_INVITE_PROMO_GRANT_PRODUCT_ID, TEAM_MEMBER_INVITE_PROMO_GRANT_SOURCE_TYPE, TEAM_PERMISSIONS, TIMED_OUT_INSTALL_FAILURE_CODE, TOOL_ALLOWLIST_MODES, TOUR_ARTIFACT_BLOCK_PREFIX, TeamPermission, UPLOAD_LOCAL_AGENT_RUN_TO_PROMPT_QUALITY_AUDIENCE, UPLOAD_LOCAL_AGENT_RUN_TO_PROMPT_QUALITY_PATH, USER_INSTALL_COMMAND_FAILED_USER_FACING_MESSAGE, USER_STORE_CANVASES_DIR, USE_CASE, USE_CASES, WALKTHROUGH_ARTIFACTS_SKILL_ID, WORKLOAD_CGROUP_ENV_VAR, YC_STARTUP_CREDIT_GRANT_CENTS, YC_STARTUP_MONTHLY_BUGBOT_CREDIT_GRANT_CENTS, YC_STARTUP_MONTHLY_BUGBOT_CREDIT_GRANT_PREFIX, YC_STARTUP_MONTHLY_CREDIT_GRANT_CENTS, YC_STARTUP_MONTHLY_CREDIT_GRANT_MONTHS, YC_STARTUP_MONTHLY_CREDIT_GRANT_PREFIX, YC_STARTUP_V2_TEAM_SEATS_COUPON_ID, agentHostModuleChannel, agentHostModuleIdentity, agentHostModuleMetricTags, agentHostModuleServing, agentHostModuleTags, allocateUniqueSideChatName, appendCodeTourStorageKeyFragments, appendTourMarkdownBlock, applyMcpOAuthProviderAuthorizationParams, applySideChatSeedWorkingStateResets, attachTourArtifact, breakDownPrCodeTourSections, buildAutomationScope, buildChatNamePrompt, buildChildTurnRouteId, buildCloudAgentStartPayloadTooLargeUserFacingMessage, buildGithubAppInstallUrl, buildGithubAppManageUrl, buildGithubPullRequestReviewPath, buildGrokBotAgentStoreSourceId, buildGrokBotDesktopDownloadUrl, buildInteractiveChildRouteId, buildMcpOAuthClientMetadataDocument, buildMcpOAuthDesktopCallbackUrl, buildOfferCreditGrantPlan, buildOriginPrIdentityKey, buildPeriodicCreditGrantSchedule, buildResourceChildInboxReminder, buildSandBoxNoVncUrl, buildSandSupervisorCommand, buildScmAuthFailedUserFacingMessage, buildScmRefNotFoundUserFacingMessage, buildSideChatNameFromPrompt, buildStartupCreditGrantPlan, buildStartupPoolGrantPlan, buildTeamAgentStoreSourceId, buildUniqueSideChatNameFromPrompt, buildUserAgentStoreSourceId, buildYcStartupMonthlyCreditGrantSchedule, calculateBackoffDelay, chatNameReminder, chatNameSystemPrompt, clampCodeTourFileDiffsToHunks, cloudAgentWorkspaceRootUriPath, cloudServerHasPluginId, cloudServerIsTeamScoped, cloudServerMatchesRuntimeSourceHint, codeTourDiffHunksFromGitFiles, codeTourGenerationIdentityFeatureConfiguration, codeTourStorageKeyVariantFragments, codeTourTermDefinitionHref, codeTourTermDefinitionLinesFromGitFiles, codeTourTermNameKey, coerceSandHostBundleChannel, collapseOriginRepoLabelValue, countGrantDaysFromDateRange, countGrantMonthsFromDateRange, countGrantPeriodsFromDateRange, countGrantWeeksFromDateRange, cursorScmMcpServerIdentifier, cursorScmProviderForMcpServerIdentifier, deriveRepoLabelValueFromUrl, deriveSideChatComposerBcId, desktopBridgeDiscoveryDir, detectEnvironmentSetupTaskFromPrompt, dropRestartedCodeTourDraft, eligibleMcpOAuthAppTarget, environmentBuildFailureCategoryForCode, error_codes_default, expandPinprickCodeTourFileDiffs, extractAgentStoreMountIdsFromPromptText, extractTypedTextFromTipTapRichText, filterByEnvironment, findCloudMcpServerByRuntimeName, findCloudMcpServersByNormalizedName, foldOriginRepoLabelValue, foldUnanchoredCodeTourSections, formatAgentStorePathForDisplay, formatCloudMcpAuthServerLabel, formatCloudMcpRuntimeIdentity, formatCodeTourTermOpenTag, formatMcpAuthPromptedReason, formatPlacementConsentTitle, formatPrCodeTourSectionSummary, formatSideChatBoundaryUserMessageText, getAgentStorePathDisplayParts, getCanonicalMcpOAuthDesktopRedirectUris, getCanonicalMcpOAuthRedirectUris, getCloudAgentStreamErrorPresentation, getCloudAgentTerminalErrorRecovery, getCodeTourRecordingSource, getCompetingStartupOfferProductIdPrefixes, getEnvSetupComposerName, getEnvironmentSetupTaskPrompt, getGithubOAuthClientIdForEnvironment, getJobRoleSlug, getMcpOAuthProviderPolicy, getMcpOAuthProviderPolicyForUrl, getOfferGrantProductIdPrefix, getOfferTemplate, getOfferTemplateCoupons, getOfferTemplateStartupOfferType, getPinnedWorkerOfflineTitle, getPrivateWorkerRepositoryUrl, getPublicArtifactContentDisposition, getRepoNameFromUrl, getRestMcpProviderIdForUrl, getRestMcpProviderIdForUrlPath, getScmProviderDisplayName, getSideChatSkipLeadingTurns, getStartupCreditGrantProductIdPrefix, getStartupOfferConfig, getStartupOfferCoupons, getStartupOfferTypeFromReferralDiscountId, getStartupOfferV2TemplateKeyFromReferralDiscountId, getTeamPromoSourceFromDiscountId, getUnsupportedConversationTurnFallbackText, gitShaFromSandBoxImageTag, gitSupportsNoWriteFetchHead, grokBotDesktopPlatformFromProcess, grokBotGithubConnectCallbackUrlForState, gtmMcpOmitsResourceIndicator, hasAutomationScope, hasCursorCommitAttribution, hasNonEmptyToolAllowlist, hasParseableCodeTourFileAnchor, hasPublicArtifactOrigin, hasRequiredTeamApiKeyScope, hasRootProjectIdentity, imageTagFromRegistryReference, inboxLeafTimestamp, inferToolAllowlistMode, inferTourArtifactKind, insertPrCodeTourSectionMedia, isAccountOlderThan, isAgentHostModuleMetricTag, isAgentStoreDashboardMountUrl, isAgentStoreId, isAgentStorePrincipalMountName, isAgentStoreShareMountKey, isAgentStoreSourceId, isAskQuestionAutoAnswerReason, isAutomationScope, isChildTurnInboxRelPath, isCloudAgentStartPayloadTooLargeUserFacingMessage, isCloudAgentStoreId, isCloudAgentStreamErrorDisplayable, isCloudAgentWorkspaceRootUriPath, isCodeTourArtifactUrl, isCodeTourSelfAuditNote, isCodeTourStorageKeyVariantFragment, isCodeTourTermCloseTag, isCodeTourVariantName, isComputerUseGuidedSkill, isCursorCoAuthor, isCustomCodeTourStorageKey, isDesktopThreadId, isDirectDesktopThreadRef, isDurablePoolRepoLess, isEmptyRepositoryErrorMessage, isEmptyRepositoryUserFacingMessage, isEntraAuthorizationUrl, isEnvironmentBuildFailedUserFacingMessage, isEnvironmentEligible, isErrorWithUserFacingErrorMessage, isFeatureOffUnderPrivateInference, isGitHubIpAllowlistUserFacingMessage, isHeadlessCodeTourMarkdown, isInAudience, isInteractiveChildInboxLeaf, isInteractiveChildRouteId, isKnownGitHostingDomain, isLegacyReviewCursorHost, isLoopbackHttpUri, isMcpAuthPromptedReason, isMcpOAuthPortalReturnPath, isMcpOAuthPostAuthReturnUrl, isNonRetryableProviderErrorCode, isOfferTemplateKey, isOrgApiKeyScope, isOriginMcpBuiltinTarget, isOriginMcpServerUrl, isPlayableCodeTourRecordingPath, isPrimaryIntroFireType, isPrincipalAgentStoreSourceId, isPrivateWorkerCapacityUserFacingMessage, isPrivateWorkerDisconnectedUserFacingMessage, isProactiveType, isProjectSendMessageEnabled, isRecentlyCreatedUser, isRecordedProactivityFireType, isRepoLessPoolFormSelection, isReservedAgentStorePathSegment, isRootProjectDetails, isSafeCodeTourTermPath, isSafeStagedBundlePath, isSandDesktopSupervisionEnabled, isSandHostBundleChannel, isSandHostBundlePromotableChannel, isSandHostUpgradeAvailable, isScmAuthFailedUserFacingMessage, isScmCheckoutFailedUserFacingMessage, isScmRefNotFoundUserFacingMessage, isScpStyleGitUrl, isServiceTokenCatalogScopeForOwner, isServiceTokenOrganizationScope, isServiceTokenTeamScope, isSideChatBoundaryMessageId, isSideChatPlaceholderName, isSlackChannelPostId, isStaleCodeTourPromptRevision, isStaticTeamApiKeyScope, isSubscriptionResourceChildInboxRelPath, isSubscriptionResourceChildRouteId, isTeamApiKeyScope, isToolAllowlistMode, isUnusableCodeTourMarkdown, isValidBareUuid, isValidManagedEnvVarName, isWithinInAppAdNewUserBlackout, listOfferTemplates, listPrivateInferenceOffFeatureRpcs, looksLikeAgentStoreDisplayPath, matchAgentStorePathForDisplay, mcpOAuthLoopbackCallbackUrlForPort, mcpOAuthLoopbackRedirectUrl, mcpOAuthServerRequiresIpv4Loopback, mcpOAuthStateTargetUrl, mcpOAuthStateWithoutLoopbackPort, mcpResourceUrlValidatorForUrl, normalizeAutoSpilloverApiTitle, normalizeAutoSpilloverAutoBeyondLimitDescription, normalizeAutoSpilloverAutoDescription, normalizeAutoSpilloverAutoTitle, normalizeCodeTourTermGloss, normalizeEnvironmentSetupMaxResumeAgeMs, normalizeGitCommitSha, orgApiKeyHasScope, orgApiKeyScopeImplies, originPrIdentityHostForLegacyReviewHost, parseAgentHostLoop, parseAgentHostServingModule, parseAgentHostTurnRuntime, parseAgentStoreMountInput, parseAskQuestionAutoAnswerIdentity, parseBridgeRequest, parseCloudMcpRuntimeIdentity, parseCodeTourTermOpenTag, parseDiscoveryFile, parseGeneratedChatName, parseGrokBotAgentStoreSourceId, parseMcpAuthPromptedInteractionId, parseOriginCodeTourArtifactContentUrl, parsePlacementConsentMachineLabel, parsePrivateWorkerRepoScopeFromUrl, parseRepoNameFromUrl, parseRestMcpProviderMetadataFromPrm, parseRestMcpScmToolError, parseSandBoxParkMode, parseSandHostBundleDigest, parseSandSupervisorStatus, parseTeamAgentStoreSourceId, parseThreadSummary, parseUserAgentStoreSourceId, patchTourSection, pickUniqueCloudMcpMatch, portalMcpOAuthCallbackUrlForWebsite, proactivityWakeAllowsSilence, providerFacingMcpOAuthRedirectUri, pruneUnanchoredCodeTourSteps, repairCodeTourOverviewOpener, resolveAgentStoreMountTarget, resolveCloudOnboardingAudience, resolveCodeTourArtifactSrc, resolveCodeTourTermDefinitionLine, resolveCurrentPrCodeTour, resolveEnvSetupComposerName, resolveLocalAgentHeaders, resolveMcpOAuthScopeOverride, resolvePluginBrandIconSource, resolvePluginBrandIconSources, resourceChildInboxRelPath, retargetMcpOAuthStateToLoopbackPort, rewriteScpGitUrl, sandBoxFlavorFromNamespace, sandBoxNoVncHibernationBounds, sandHostBundleDigestKey, sandHostBundleTarballKey, sandHostBundleVersionFileName, sandHostBundleVersionKey, selectRegisteredMcpOAuthRedirectUris, serializeSandSupervisorCommand, serviceTokenCatalogScopeGroups, serviceTokenCatalogScopes, shouldForceHostUpgrade, shouldInjectSideChatBoundary, shouldRegenerateStaleCodeTour, shouldShowBackgroundComposerFollowupRetryHint, shouldShowEnvironmentSetupCta, sideChatBoundaryMessageId, sideChatNameSystemPrompt, splitRepoLabelValue, stripAgentStorePathLineSuffix, stripCodeTourSelfAuditNotes, stripCodeTourTerms, stripConsentPrompt, stripMcpOAuthStateTarget, truncateUserRequestForChatName, validateBoxSecretKey, validateCloudMcpAuthorizationUrl, validateMcpProtectedResourceUrl, withMcpOAuthStateTarget };

export var dist_exports = {};
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

var import_node_crypto2, import_node_fs5, URANDOM_PATH, urandomUnavailable;
export { URANDOM_PATH, import_node_crypto2, import_node_fs5, urandomUnavailable };
var __wakaru_init_fresh_uuid_initialized = false;
export function init_fresh_uuid() {
if (__wakaru_init_fresh_uuid_initialized) return;
__wakaru_init_fresh_uuid_initialized = true;
"use strict";
import_node_crypto2 = require("node:crypto");
import_node_fs5 = require("node:fs");
URANDOM_PATH = "/dev/urandom";
urandomUnavailable = false;

}
