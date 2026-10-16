import { init_repository_resolver } from "./repository-resolver.js";
import { createContext } from "../../storage/instruments.js";
import { init_cloud_subagent } from "../../../../agent-store/sync/dist/cloud-subagent.js";
import { init_dist } from "../../../../context/dist/index.js";
import { cloudEnvironmentRepoPreference } from "../../../../dist_exports.js";
import { Code } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { init_esm3 } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_protocol_connect } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol-connect/index.js";
import { ProjectDetails, ProjectSubagentDetails, init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_requested_model_pb } from "../../../../proto/dist/generated/agent/v1/requested_model_pb.js";
import { BackgroundComposerSource, CloudSubagentParentAgentType, CloudSubagentParentReference, DevcontainerStartingPoint, ListEnvironmentsRequest, StartBackgroundComposerFromSnapshotRequest, StartingMessageType, init_background_composer_pb } from "../../../../proto/dist/generated/aiserver/v1/background_composer_pb.js";
import { buildNativeCloudRequestedModel, buildNativeCloudUserMessageAction, cloudRequestOptions, deriveLocalTaskSubagentComposerBcId, describeCloudRepositoryPreflightFailure, isDefinitiveCloudStartRejection, normalizeConnectError, prepareCloudSubagentStores, resolveCloudSubagentRepositoryBinding, resolveEffectiveModelParameters, throwIfCancelled, traceCloudSubagent, waitForCaller } from "../../../../tree_chunk_napi_exports.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
var import_node_crypto51, AGENT_HOST_CLOUD_CREATE_OUTCOME_UNKNOWN_ERROR_NAME, AGENT_STORE_MOUNT_ROOT3, CLOUD_AGENT_SINGLE_REPO_WORKSPACE_ROOT2, SUBAGENT_COMPOSER_BCID_NAMESPACE2, CLOUD_TERMINAL_STREAM_BASE_RETRY_MS, CLOUD_TERMINAL_STREAM_MAX_RETRY_MS, CLOUD_TERMINAL_STREAM_MAX_RETRIES_WITHOUT_PROGRESS, CLOUD_TERMINAL_SUMMARY_MAX_PENDING_ATTEMPTS, CLOUD_TERMINAL_STREAM_INACTIVITY_MS, CLOUD_ENVIRONMENT_REPO_PREFERENCE_TTL_MS, CLOUD_ENVIRONMENT_LIST_TIMEOUT_MS, CloudTerminalStateError, CloudFollowupSubmitError, CloudSummaryPendingError, CloudSummaryUnavailableError, NativeCloudSubagentCreatorImpl, CloudCreateOutcomeUnknownError;
export { AGENT_HOST_CLOUD_CREATE_OUTCOME_UNKNOWN_ERROR_NAME, AGENT_STORE_MOUNT_ROOT3, CLOUD_AGENT_SINGLE_REPO_WORKSPACE_ROOT2, CLOUD_ENVIRONMENT_LIST_TIMEOUT_MS, CLOUD_ENVIRONMENT_REPO_PREFERENCE_TTL_MS, CLOUD_TERMINAL_STREAM_BASE_RETRY_MS, CLOUD_TERMINAL_STREAM_INACTIVITY_MS, CLOUD_TERMINAL_STREAM_MAX_RETRIES_WITHOUT_PROGRESS, CLOUD_TERMINAL_STREAM_MAX_RETRY_MS, CLOUD_TERMINAL_SUMMARY_MAX_PENDING_ATTEMPTS, CloudCreateOutcomeUnknownError, CloudFollowupSubmitError, CloudSummaryPendingError, CloudSummaryUnavailableError, CloudTerminalStateError, NativeCloudSubagentCreatorImpl, SUBAGENT_COMPOSER_BCID_NAMESPACE2, import_node_crypto51 };
var __wakaru_init_native_cloud_subagent_initialized = false;
export function init_native_cloud_subagent() {
if (__wakaru_init_native_cloud_subagent_initialized) return;
__wakaru_init_native_cloud_subagent_initialized = true;
"use strict";
import_node_crypto51 = require("node:crypto");
init_cloud_subagent();
init_dist();
init_agent_pb();
init_requested_model_pb();
init_background_composer_pb();
init_dist3();
init_esm3();
init_protocol_connect();
init_repository_resolver();
AGENT_HOST_CLOUD_CREATE_OUTCOME_UNKNOWN_ERROR_NAME = "AgentHostCloudCreateOutcomeUnknownError";
AGENT_STORE_MOUNT_ROOT3 = "/cursor/stores";
CLOUD_AGENT_SINGLE_REPO_WORKSPACE_ROOT2 = "/workspace";
SUBAGENT_COMPOSER_BCID_NAMESPACE2 = "0d1cbb47-6f2e-4f0e-9c2a-58c0a1f6f0d4";
CLOUD_TERMINAL_STREAM_BASE_RETRY_MS = 1e3;
CLOUD_TERMINAL_STREAM_MAX_RETRY_MS = 3e4;
CLOUD_TERMINAL_STREAM_MAX_RETRIES_WITHOUT_PROGRESS = 8;
CLOUD_TERMINAL_SUMMARY_MAX_PENDING_ATTEMPTS = 8;
CLOUD_TERMINAL_STREAM_INACTIVITY_MS = 75e3;
CLOUD_ENVIRONMENT_REPO_PREFERENCE_TTL_MS = 6e4;
CLOUD_ENVIRONMENT_LIST_TIMEOUT_MS = 5e3;
CloudTerminalStateError = class extends Error {
};
CloudFollowupSubmitError = class extends Error {
};
CloudSummaryPendingError = class extends Error {
};
CloudSummaryUnavailableError = class extends Error {
};
NativeCloudSubagentCreatorImpl = class {
    constructor(options2){
        this.options = options2;
        this.creationByIdentity = new Map();
        this.createInFlight = new Map();
    }
    async resolveCloudEnvironmentRepoPreference(ctx) {
        const cached2 = this.cloudEnvironmentRepoPreferenceCache;
        if (cached2 !== void 0 && Date.now() < cached2.expiresAtMs) {
            return cached2.preference;
        }
        const inFlight = this.cloudEnvironmentRepoPreferenceInFlight;
        if (inFlight !== void 0) {
            return waitForCaller(inFlight, ctx);
        }
        const fetchPromise = this.fetchCloudEnvironmentRepoPreference().finally(()=>{
            if (this.cloudEnvironmentRepoPreferenceInFlight === fetchPromise) {
                this.cloudEnvironmentRepoPreferenceInFlight = void 0;
            }
        });
        this.cloudEnvironmentRepoPreferenceInFlight = fetchPromise;
        return waitForCaller(fetchPromise, ctx);
    }
    async fetchCloudEnvironmentRepoPreference() {
        const now2 = Date.now();
        let preference;
        const [rpcCtx, cancelRpc] = createContext().withTimeoutAndCancel(CLOUD_ENVIRONMENT_LIST_TIMEOUT_MS);
        try {
            const client = await this.options.backend.backgroundComposerClientProvider();
            const environments = [];
            let pageToken;
            do {
                const response = await client.listEnvironments(new ListEnvironmentsRequest({
                    includeEnvironmentJson: false,
                    ...pageToken === void 0 ? {} : {
                        pageToken
                    }
                }), {
                    signal: rpcCtx.signal
                });
                environments.push(...response.environments);
                pageToken = response.hasMore && response.nextPageToken ? response.nextPageToken : void 0;
            }while (pageToken !== void 0)
            preference = cloudEnvironmentRepoPreference(environments);
        } catch (error3) {
            this.options.nativeCloudSubagents.logWarning?.(`Cloud environment lookup failed; resolving repositories without environment preference: ${String(error3)}`);
            preference = void 0;
        } finally{
            cancelRpc();
        }
        this.cloudEnvironmentRepoPreferenceCache = {
            preference,
            expiresAtMs: now2 + CLOUD_ENVIRONMENT_REPO_PREFERENCE_TTL_MS
        };
        return preference;
    }
    async create(ctx, args) {
        if (args.resumeAgentId !== void 0 || args.forkAgentId !== void 0 || args.continuationConfig !== void 0) {
            throw new Error("Native cloud subagent creator only handles fresh creations.");
        }
        const parentConversationId = args.parentConversationId?.trim();
        const toolCallId = args.toolCallId.trim();
        if (!parentConversationId || !toolCallId) {
            throw new Error("Cloud subagent creation requires parent conversation and tool call IDs.");
        }
        const identity = `${parentConversationId}\0${toolCallId}`;
        const bcId = deriveLocalTaskSubagentComposerBcId({
            parentConversationId,
            parentToolCallId: toolCallId
        });
        const existing = this.creationByIdentity.get(identity);
        if (existing?.status === "created") {
            traceCloudSubagent(this.options.nativeCloudSubagents.logTrace, "create-replay", {
                status: existing.status,
                agentId: existing.bcId,
                toolCallId
            });
            return existing.bcId;
        }
        if (existing?.status === "uncertain") {
            traceCloudSubagent(this.options.nativeCloudSubagents.logTrace, "create-replay", {
                status: existing.status,
                agentId: existing.bcId,
                toolCallId
            });
            throw existing.error;
        }
        const inFlight = this.createInFlight.get(identity);
        if (inFlight !== void 0) {
            traceCloudSubagent(this.options.nativeCloudSubagents.logTrace, "create-replay", {
                status: "in-flight",
                toolCallId
            });
            return waitForCaller(inFlight, ctx);
        }
        this.creationByIdentity.set(identity, {
            status: "reserved",
            bcId
        });
        const maxMode = this.options.backend.getParentEffectiveMaxMode(parentConversationId);
        const createPromise = this.start(ctx, args, parentConversationId, toolCallId, bcId, maxMode).then((agentId)=>{
            this.creationByIdentity.set(identity, {
                status: "created",
                bcId: agentId
            });
            return agentId;
        }).catch((error3)=>{
            if (error3 instanceof CloudCreateOutcomeUnknownError) {
                this.creationByIdentity.set(identity, {
                    status: "uncertain",
                    bcId,
                    error: error3
                });
            } else {
                this.creationByIdentity.delete(identity);
            }
            throw error3;
        });
        this.createInFlight.set(identity, createPromise);
        try {
            return await createPromise;
        } finally{
            if (this.createInFlight.get(identity) === createPromise) {
                this.createInFlight.delete(identity);
            }
        }
    }
    async start(ctx, args, parentConversationId, toolCallId, bcId, maxMode) {
        throwIfCancelled(ctx);
        const sessionOptions = this.options.resolveSessionOptions(parentConversationId);
        if (sessionOptions === void 0) {
            traceCloudSubagent(this.options.nativeCloudSubagents.logTrace, "preflight-error", {
                reason: "missing-session-options",
                agentId: bcId,
                toolCallId
            });
            throw new Error(`No agent-host session options for cloud subagent parent ${parentConversationId}.`);
        }
        const workspacePaths = sessionOptions.workspacePaths ?? [];
        if (workspacePaths.length === 0 || workspacePaths.some((workspacePath)=>workspacePath.trim().length === 0)) {
            traceCloudSubagent(this.options.nativeCloudSubagents.logTrace, "preflight-error", {
                reason: "missing-workspace-roots",
                agentId: bcId,
                toolCallId
            });
            throw new Error(`No non-empty workspace roots for cloud subagent parent ${parentConversationId}.`);
        }
        const preferredRepos = await this.resolveCloudEnvironmentRepoPreference(ctx);
        throwIfCancelled(ctx);
        const repository = await resolveCloudSubagentRepositoryBinding({
            gitExecutor: this.options.gitExecutor,
            workspacePaths,
            requestedBaseBranch: args.cloudBaseBranch,
            ...preferredRepos === void 0 ? {} : {
                preferredRepos
            }
        });
        throwIfCancelled(ctx);
        if (repository.kind === "fallback") {
            traceCloudSubagent(this.options.nativeCloudSubagents.logTrace, "preflight-error", {
                reason: repository.reason,
                agentId: bcId,
                toolCallId
            });
            throw new Error(describeCloudRepositoryPreflightFailure(repository.reason));
        }
        const owningProject = sessionOptions.owningProject;
        const owningProjectAgentId = owningProject?.projectAgentId.trim() || void 0;
        const preparedStoreIds = await prepareCloudSubagentStores({
            ctx,
            parentStoreId: parentConversationId,
            additionalStoreIds: owningProjectAgentId === void 0 ? [] : [
                owningProjectAgentId
            ],
            preparer: this.options.resolveCloudSubagentStorePreparer?.(),
            logWarning: this.options.nativeCloudSubagents.logWarning
        });
        throwIfCancelled(ctx);
        const projectDetails = owningProject === void 0 ? void 0 : new ProjectDetails({
            ...owningProject.projectName?.trim() ? {
                name: owningProject.projectName.trim()
            } : {},
            subagent: new ProjectSubagentDetails({
                ...owningProjectAgentId !== void 0 && preparedStoreIds.includes(owningProjectAgentId) ? {
                    storeDir: `${AGENT_STORE_MOUNT_ROOT3}/${owningProjectAgentId}`
                } : {}
            })
        });
        const teamId = this.options.backend.getTeamId();
        const resolvedModelParameters = await resolveEffectiveModelParameters({
            ctx,
            backend: this.options.backend,
            parentSessionId: parentConversationId,
            maxMode,
            args,
            logWarning: this.options.nativeCloudSubagents.logWarning
        });
        const request3 = new StartBackgroundComposerFromSnapshotRequest({
            bcId,
            snapshotNameOrId: repository.binding.repoUrl,
            devcontainerStartingPoint: new DevcontainerStartingPoint({
                url: repository.binding.fullRepoUrl,
                ref: repository.binding.baseBranch
            }),
            snapshotWorkspaceRootPath: CLOUD_AGENT_SINGLE_REPO_WORKSPACE_ROOT2,
            returnImmediately: true,
            repoUrl: repository.binding.fullRepoUrl,
            source: BackgroundComposerSource.AS_SUBAGENT_FROM_LOCAL,
            autoBranch: true,
            baseBranch: repository.binding.baseBranch,
            conversationAction: buildNativeCloudUserMessageAction({
                prompt: args.prompt,
                messageId: toolCallId,
                selectedContext: args.selectedContext
            }),
            startingMessageType: StartingMessageType.USER_MESSAGE,
            addInitialMessageToResponses: true,
            repositoryInfo: {
                pathEncryptionKey: "",
                shouldSyncIndex: false
            },
            requestedModels: [
                buildNativeCloudRequestedModel(args, maxMode, resolvedModelParameters)
            ],
            ...teamId === void 0 ? {} : {
                teamId
            },
            cloudSubagentParent: new CloudSubagentParentReference({
                parentAgentId: parentConversationId,
                parentToolCallId: toolCallId,
                parentAgentType: CloudSubagentParentAgentType.LOCAL,
                subagentTypeName: args.subagentType
            }),
            requestedAdditionalStoreIds: preparedStoreIds,
            projectDetails,
            skills: []
        });
        const requestId = (0, import_node_crypto51.randomUUID)();
        traceCloudSubagent(this.options.nativeCloudSubagents.logTrace, "native-start", {
            agentId: bcId,
            requestId,
            toolCallId,
            runInBackground: args.runInBackground
        });
        try {
            const response = await (await this.options.backend.backgroundComposerClientProvider()).startBackgroundComposerFromSnapshot(request3, cloudRequestOptions(ctx, requestId));
            const responseBcId = response.composer?.bcId || bcId;
            if (responseBcId !== bcId) {
                throw new CloudCreateOutcomeUnknownError(`Cloud subagent returned unexpected agent id: ${responseBcId}`);
            }
            traceCloudSubagent(this.options.nativeCloudSubagents.logTrace, "native-created", {
                agentId: bcId,
                requestId,
                toolCallId
            });
            return bcId;
        } catch (error3) {
            const connectError = normalizeConnectError(error3);
            traceCloudSubagent(this.options.nativeCloudSubagents.logTrace, "native-start-error", {
                agentId: bcId,
                requestId,
                errorName: error3 instanceof Error ? error3.name : typeof error3,
                code: Code[connectError.code],
                message: connectError.rawMessage.slice(0, 200)
            });
            if (error3 instanceof CloudCreateOutcomeUnknownError) {
                throw error3;
            }
            if (isDefinitiveCloudStartRejection(connectError)) {
                throw new Error(`Cloud subagent start was rejected by the server: ${connectError.rawMessage} (${Code[connectError.code]}; bcId ${bcId}, request ID ${requestId})`, {
                    cause: error3
                });
            }
            throw new CloudCreateOutcomeUnknownError(`Cloud subagent start outcome is unknown (${Code[connectError.code]}: ${connectError.rawMessage}; bcId ${bcId}, request ID ${requestId})`, error3);
        }
    }
};
CloudCreateOutcomeUnknownError = class extends Error {
    constructor(message, cause){
        super(message, cause === void 0 ? void 0 : {
            cause
        });
        this.name = AGENT_HOST_CLOUD_CREATE_OUTCOME_UNKNOWN_ERROR_NAME;
    }
};

}
