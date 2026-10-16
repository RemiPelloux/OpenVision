import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { GetResourceUsageResponse, init_control_service_pb } from "../../agent/v1/control_service_pb.js";
import { AbortAgentStoreMultipartWritesRequest, AbortAgentStoreMultipartWritesResponse, AcquireAgentStoreFileLockRequest, AcquireAgentStoreFileLockResponse, CheckAgentStoreVersionsRequest, CheckAgentStoreVersionsResponse, CompleteAgentStoreMultipartWritesRequest, CompleteAgentStoreMultipartWritesResponse, DeleteAgentStoreFilesRequest, DeleteAgentStoreFilesResponse, GetAgentStoreFileLockRequest, GetAgentStoreFileLockResponse, ListAgentStoreDirectoryRequest, ListAgentStoreDirectoryResponse, ListAgentStoreEntriesRequest, ListAgentStoreEntriesResponse, ListAgentStoreFilesRequest, ListAgentStoreFilesResponse, ListAgentStoreTombstonesRequest, ListAgentStoreTombstonesResponse, ListAgentStoresRequest, ListAgentStoresResponse, ListSharedAgentStoresRequest, ListSharedAgentStoresResponse, MintAgentStoreTokenRequest, MintAgentStoreTokenResponse, PresignAgentStoreReadsRequest, PresignAgentStoreReadsResponse, PresignAgentStoreWritesRequest, PresignAgentStoreWritesResponse, ReadAgentStoreFileRequest, ReadAgentStoreFileResponse, ReleaseAgentStoreFileLockRequest, ReleaseAgentStoreFileLockResponse, RenewAgentStoreFileLockRequest, RenewAgentStoreFileLockResponse, RmdirAgentStoreRequest, RmdirAgentStoreResponse, SetAgentStoreDocumentVisibilityRequest, SetAgentStoreDocumentVisibilityResponse, ShareAgentStoreRequest, ShareAgentStoreResponse, UndeleteAgentStoreFilesRequest, UndeleteAgentStoreFilesResponse, UnshareAgentStoreRequest, UnshareAgentStoreResponse, WriteAgentStoreDocumentRequest, WriteAgentStoreDocumentResponse, init_agent_store_pb } from "./agent_store_pb.js";
import { AbortPromptUploadRequest, AbortPromptUploadResponse, AddAsyncFollowupBackgroundComposerRequest, AddAsyncFollowupBackgroundComposerResponse, AddPullRequestReviewCommentRequest, AddPullRequestReviewCommentResponse, AdminDeleteNamedAgentRequest, AdminDeleteNamedAgentResponse, AdminKillAllActiveBackgroundComposersRequest, AdminKillAllActiveBackgroundComposersResponse, AdminKillBackgroundComposerRequest, AdminKillBackgroundComposerResponse, AdminListActiveBackgroundComposersRequest, AdminListActiveBackgroundComposersResponse, AdminListTeamNamedAgentsRequest, AdminListTeamNamedAgentsResponse, AdminListUserPrivateWorkersRequest, AdminListUserPrivateWorkersResponse, AdminSettleInteractionRequest, AdminSettleInteractionResponse, AdminUnparkFollowupsRequest, AdminUnparkFollowupsResponse, AdvanceBackgroundComposerReadCursorRequest, AdvanceBackgroundComposerReadCursorResponse, AggregateCloudAgentRunsForDashboardRequest, AggregateCloudAgentRunsForDashboardResponse, ArchiveBackgroundComposerRequest, ArchiveBackgroundComposerResponse, ArchiveRepoBackgroundComposersRequest, ArchiveRepoBackgroundComposersResponse, AttachAgentStartupTraceRequest, AttachAgentStartupTraceResponse, AttachBackgroundComposerLogsRequest, AttachBackgroundComposerLogsResponse, AttachBackgroundComposerPodRequest, AttachBackgroundComposerPodResponse, AttachBackgroundComposerRequest, AttachBackgroundComposerResponse, AttachEnvironmentBuildLogRequest, AttachEnvironmentBuildLogResponse, BackgroundComposerDesktopLeaseRequest, BackgroundComposerDesktopLeaseResponse, BatchRefreshPullRequestStatusRequest, BatchRefreshPullRequestStatusResponse, CancelBackgroundComposerToolCallRequest, CancelBackgroundComposerToolCallResponse, CancelEnvironmentBuildRequest, CancelEnvironmentBuildResponse, CancelModelRoutingLoadTestRequest, CancelModelRoutingLoadTestResponse, ChangeBackgroundComposerSnapshotVisibilityRequest, ChangeBackgroundComposerSnapshotVisibilityResponse, CheckPullRequestMergeabilityRequest, CheckPullRequestMergeabilityResponse, ClaimPendingPrivateWorkerRequestRequest, ClaimPendingPrivateWorkerRequestResponse, ClearWorkerManagerRequest, ClearWorkerManagerResponse, CloseEventSubscriptionRequest, CloseEventSubscriptionResponse, CommitBackgroundComposerRequest, CommitBackgroundComposerResponse, CompletePromptUploadRequest, CompletePromptUploadResponse, ConvertPullRequestFromDraftRequest, ConvertPullRequestFromDraftResponse, CopyTeamSecretsToKeyringRequest, CopyTeamSecretsToKeyringResponse, CreateAgentShareRequest, CreateAgentShareResponse, CreateBackgroundComposerPodRequest, CreateBackgroundComposerPodResponse, CreateBackgroundComposerPodSnapshotRequest, CreateBackgroundComposerPodSnapshotResponse, CreateKeyringFromTeamSecretsRequest, CreateKeyringFromTeamSecretsResponse, CreateKeyringRequest, CreateKeyringResponse, CreateKeyringSecretRequest, CreateKeyringSecretResponse, CreateProjectWorkerRequest, CreateProjectWorkerResponse, DeleteBackgroundComposerRequest, DeleteBackgroundComposerResponse, DeleteKeyringRequest, DeleteKeyringResponse, DeleteLiveActivityRequest, DeleteLiveActivityResponse, DeletePendingFollowupRequest, DeletePendingFollowupResponse, DeletePersonalEnvironmentJsonRequest, DeletePersonalEnvironmentJsonResponse, DeletePullRequestReviewCommentRequest, DeletePullRequestReviewCommentResponse, DeletePushNotificationTokenRequest, DeletePushNotificationTokenResponse, DeleteStagedProjectsRequest, DeleteStagedProjectsResponse, DeleteTeamEnvironmentRequest, DeleteTeamEnvironmentResponse, DeregisterPrivateWorkerPoolRequest, DeregisterPrivateWorkerPoolResponse, DisablePullRequestAutoMergeRequest, DisablePullRequestAutoMergeResponse, DismissStagedProjectRequest, DismissStagedProjectResponse, DuplicateEnvironmentRequest, DuplicateEnvironmentResponse, EnablePullRequestAutoMergeRequest, EnablePullRequestAutoMergeResponse, EnsureModelRoutingLoadTestStartedRequest, EnsureModelRoutingLoadTestStartedResponse, FetchBackgroundComposerRequest, FetchBackgroundComposerResponse, ForkBackgroundComposerRequest, ForkBackgroundComposerResponse, GetAgentSharePreviewRequest, GetAgentSharePreviewResponse, GetBackgroundComposerArtifactBytesRequest, GetBackgroundComposerArtifactBytesResponse, GetBackgroundComposerArtifactRequest, GetBackgroundComposerArtifactResponse, GetBackgroundComposerChangesHashRequest, GetBackgroundComposerChangesHashResponse, GetBackgroundComposerConversationRequest, GetBackgroundComposerConversationResponse, GetBackgroundComposerDiffDetailsRequest, GetBackgroundComposerDiffDetailsResponse, GetBackgroundComposerEnvironmentVersionRequest, GetBackgroundComposerEnvironmentVersionResponse, GetBackgroundComposerInfoRequest, GetBackgroundComposerInfoResponse, GetBackgroundComposerNameRequest, GetBackgroundComposerNameResponse, GetBackgroundComposerPromptRequest, GetBackgroundComposerPromptResponse, GetBackgroundComposerPullRequestRequest, GetBackgroundComposerPullRequestResponse, GetBackgroundComposerRepositoryInfoRequest, GetBackgroundComposerRepositoryInfoResponse, GetBackgroundComposerSnapshotInfoRequest, GetBackgroundComposerSnapshotInfoResponse, GetBackgroundComposerSnapshotStateRequest, GetBackgroundComposerSnapshotStateResponse, GetBackgroundComposerStatusRequest, GetBackgroundComposerStatusResponse, GetBackgroundComposerTimingsRequest, GetBackgroundComposerTimingsResponse, GetBackgroundComposerUserSettingsRequest, GetBackgroundComposerUserSettingsResponse, GetBackgroundComposerVmUsageRequest, GetBackgroundComposerVmUsageResponse, GetBlobForAgentKVRequest, GetBlobForAgentKVResponse, GetCloudAgentDebugDetailsRequest, GetCloudAgentDebugDetailsResponse, GetCloudAgentMemoryDbLogsRequest, GetCloudAgentMemoryDbLogsResponse, GetCloudAgentRunForDashboardRequest, GetCloudAgentRunForDashboardResponse, GetConversationPageRequest, GetConversationPageResponse, GetCursorServerUrlRequest, GetCursorServerUrlResponse, GetDetailedPullRequestStatusRequest, GetDetailedPullRequestStatusResponse, GetEnvironmentActiveBuildRequest, GetEnvironmentActiveBuildResponse, GetEnvironmentBuildConfigRequest, GetEnvironmentBuildConfigResponse, GetEnvironmentBuildRequest, GetEnvironmentBuildResponse, GetEnvironmentBuildSettingsRequest, GetEnvironmentBuildSettingsResponse, GetEnvironmentHistoryRequest, GetEnvironmentHistoryResponse, GetEnvironmentJsonCandidatesRequest, GetEnvironmentJsonCandidatesResponse, GetEnvironmentPersistentRecurringBuildFailuresRequest, GetEnvironmentPersistentRecurringBuildFailuresResponse, GetEnvironmentRequest, GetEnvironmentResponse, GetGithubAccessTokenForReposRequest, GetGithubAccessTokenForReposResponse, GetKeyringRequest, GetKeyringResponse, GetLatestAgentConversationStateRequest, GetLatestAgentConversationStateResponse, GetMachineRequest, GetMachineResourceUsageRequest, GetMachineResponse, GetOptimizedDiffDetailsRequest, GetOptimizedDiffDetailsResponse, GetOriginAgentApprovalRequest, GetOriginAgentApprovalResponse, GetPersonalEnvironmentJsonRequest, GetPersonalEnvironmentJsonResponse, GetPrivateWorkerRequest, GetPrivateWorkerResponse, GetPrivateWorkersSummaryRequest, GetPrivateWorkersSummaryResponse, GetPublicBackgroundComposerArtifactRequest, GetPublicBackgroundComposerArtifactResponse, GetPullRequestCommitsRequest, GetPullRequestCommitsResponse, GetPullRequestDiscussionsRequest, GetPullRequestDiscussionsResponse, GetPullRequestMergeStatusRequest, GetPullRequestMergeStatusResponse, GetPullRequestTimelineEventsRequest, GetPullRequestTimelineEventsResponse, GetRepositoryBranchesRequest, GetRepositoryBranchesResponse, GetRepositoryDefaultBranchRequest, GetRepositoryDefaultBranchResponse, GetTurnSummaryBackgroundComposerRequest, GetTurnSummaryBackgroundComposerResponse, GrantKeyringPermissionsRequest, GrantKeyringPermissionsResponse, InjectBackgroundComposerContextRequest, InjectBackgroundComposerContextResponse, ListBackgroundComposerArtifactsRequest, ListBackgroundComposerArtifactsResponse, ListBackgroundComposerChildrenRequest, ListBackgroundComposerChildrenResponse, ListBackgroundComposerSnapshotStatusesByBcIdsRequest, ListBackgroundComposerSnapshotStatusesByBcIdsResponse, ListBackgroundComposerSnapshotsByBcIdRequest, ListBackgroundComposerSnapshotsByBcIdResponse, ListBackgroundComposersRequest, ListBackgroundComposersResponse, ListCloudAgentRunEventsForDashboardRequest, ListCloudAgentRunEventsForDashboardResponse, ListCloudAgentRunsForDashboardRequest, ListCloudAgentRunsForDashboardResponse, ListCustomerPrivatelinkAllowedHostsRequest, ListCustomerPrivatelinkAllowedHostsResponse, ListDetailedBackgroundComposersRequest, ListDetailedBackgroundComposersResponse, ListEnvironmentBuildsRequest, ListEnvironmentBuildsResponse, ListEnvironmentsRequest, ListEnvironmentsResponse, ListEventSubscriptionsRequest, ListEventSubscriptionsResponse, ListKeyringGrantsRequest, ListKeyringGrantsResponse, ListKeyringSecretsRequest, ListKeyringSecretsResponse, ListKeyringsRequest, ListKeyringsResponse, ListNamedAgentSessionsRequest, ListNamedAgentSessionsResponse, ListNamedAgentsRequest, ListNamedAgentsResponse, ListPendingFollowupsRequest, ListPendingFollowupsResponse, ListPendingPrivateWorkerRequestsRequest, ListPendingPrivateWorkerRequestsResponse, ListPersonalEnvironmentsRequest, ListPersonalEnvironmentsResponse, ListPlacementGrantsRequest, ListPlacementGrantsResponse, ListPrBackgroundComposersRequest, ListPrBackgroundComposersResponse, ListPrivateWorkerPoolsRequest, ListPrivateWorkerPoolsResponse, ListPrivateWorkersRequest, ListPrivateWorkersResponse, ListProjectSubtreesRequest, ListProjectSubtreesResponse, ListReposWithLocalEnvironmentRequest, ListReposWithLocalEnvironmentResponse, ListSharedBackgroundComposerArtifactsRequest, ListSharedBackgroundComposerArtifactsResponse, ListStagedProjectsRequest, ListStagedProjectsResponse, ListTeamEnvironmentsRequest, ListTeamEnvironmentsResponse, ListWorkersForManagerRequest, ListWorkersForManagerResponse, ListWorkspaceFilesRequest, ListWorkspaceFilesResponse, MakeGithubRequestRequest, MakeGithubRequestResponse, MakePRBackgroundComposerRequest, MakePRBackgroundComposerResponse, MarkBackgroundComposerReadRequest, MarkBackgroundComposerReadResponse, MarkBackgroundComposerUnreadRequest, MarkBackgroundComposerUnreadResponse, MarkFollowupEditingRequest, MarkFollowupEditingResponse, MergePullRequestRequest, MergePullRequestResponse, MigrateEnvironmentToOriginRequest, MigrateEnvironmentToOriginResponse, MintCustomerPrivatelinkProxyTokenRequest, MintCustomerPrivatelinkProxyTokenResponse, NotifyBackgroundComposerShownRequest, NotifyBackgroundComposerShownResponse, OpenPRBackgroundComposerRequest, OpenPRBackgroundComposerResponse, PauseBackgroundComposerRequest, PauseBackgroundComposerResponse, PinBackgroundComposersRequest, PinBackgroundComposersResponse, PreWarmPodRequest, PreWarmPodResponse, PresignPromptUploadRequest, PresignPromptUploadResponse, PreviewStagedProjectsRequest, PreviewStagedProjectsResponse, ProvisionSyntheticsServiceAccountsRequest, ProvisionSyntheticsServiceAccountsResponse, PublishBackgroundComposerTempRepoRequest, PublishBackgroundComposerTempRepoResponse, PublishEnvironmentRequest, PublishEnvironmentResponse, PublishPersonalEnvironmentRequest, PublishPersonalEnvironmentResponse, ReadBinaryFileRequest, ReadBinaryFileResponse, ReadCanvasRequest, ReadCanvasResponse, RefreshGithubAccessTokenInBackgroundComposerRequest, RefreshGithubAccessTokenInBackgroundComposerResponse, RegisterPrivateWorkerPoolRequest, RegisterPrivateWorkerPoolResponse, RegisterPushNotificationTokenRequest, RegisterPushNotificationTokenResponse, ReleasePrivateWorkerClaimRequest, ReleasePrivateWorkerClaimResponse, ReleasePrivateWorkerRequest, ReleasePrivateWorkerResponse, RenameBackgroundComposerRequest, RenameBackgroundComposerResponse, RenameEnvironmentRequest, RenameEnvironmentResponse, RenameKeyringRequest, RenameKeyringResponse, ReorderPendingFollowupRequest, ReorderPendingFollowupResponse, ReparentBackgroundComposerRequest, ReparentBackgroundComposerResponse, ReplyToReviewThreadRequest, ReplyToReviewThreadResponse, ResolveOrCreateDraftEnvironmentRequest, ResolveOrCreateDraftEnvironmentResponse, ResolveOrCreateMultiRepoEnvironmentRequest, ResolveOrCreateMultiRepoEnvironmentResponse, ResolveOriginAgentApprovalRequest, ResolveOriginAgentApprovalResponse, ResolveReviewThreadRequest, ResolveReviewThreadResponse, RestoreEnvironmentVersionRequest, RestoreEnvironmentVersionResponse, ResumeBackgroundComposerRequest, ResumeBackgroundComposerResponse, RevokeKeyringPermissionsRequest, RevokeKeyringPermissionsResponse, RevokeKeyringSecretRequest, RevokeKeyringSecretResponse, SaveCloudAgentVoiceCallRequest, SaveCloudAgentVoiceCallResponse, SeedStagedProjectsRequest, SeedStagedProjectsResponse, SetPersonalEnvironmentJsonRequest, SetPersonalEnvironmentJsonResponse, SetTeamEnvironmentJsonRequest, SetTeamEnvironmentJsonResponse, SetWorkerManagerRequest, SetWorkerManagerResponse, ShareBackgroundComposerArtifactRequest, ShareBackgroundComposerArtifactResponse, SnapshotAndSaveEnvironmentRequest, SnapshotAndSaveEnvironmentResponse, StartBackgroundComposerFromSnapshotRequest, StartBackgroundComposerFromSnapshotResponse, StartChangeMonitorOnboardingRequest, StartCloudAgentLoadTestRequest, StartCloudAgentLoadTestResponse, StartCloudOnboardingHeuristicEnvSetupRequest, StartCloudOnboardingHeuristicEnvSetupResponse, StartCloudOnboardingRequest, StartGithubStreamingForFollowupRequest, StartGithubStreamingForFollowupResponse, StartLinearStreamingForFollowupRequest, StartLinearStreamingForFollowupResponse, StartSideChatBackgroundComposerRequest, StartSideChatBackgroundComposerResponse, StartSlackStreamingForFollowupRequest, StartSlackStreamingForFollowupResponse, StreamBackgroundComposerArtifactRequest, StreamBackgroundComposerArtifactResponse, StreamBackgroundComposerUpdatesRequest, StreamBackgroundComposerUpdatesResponse, StreamConversationRequest, StreamConversationResponse, StreamPendingPrivateWorkerRequestsRequest, StreamPendingPrivateWorkerRequestsResponse, SubmitInteractionResponseBackgroundComposerRequest, SubmitInteractionResponseBackgroundComposerResponse, SubmitPendingFollowupNowRequest, SubmitPendingFollowupNowResponse, SyncLiveActivityRequest, SyncLiveActivityResponse, TriggerEnvironmentBuildRequest, TriggerEnvironmentBuildResponse, UnpinBackgroundComposersRequest, UnpinBackgroundComposersResponse, UnresolveReviewThreadRequest, UnresolveReviewThreadResponse, UnshareBackgroundComposerArtifactRequest, UnshareBackgroundComposerArtifactResponse, UpdateBackgroundComposerEnvironmentRequest, UpdateBackgroundComposerEnvironmentResponse, UpdateBackgroundComposerExperimentalModelOptOutRequest, UpdateBackgroundComposerExperimentalModelOptOutResponse, UpdateBackgroundComposerUserSettingsRequest, UpdateBackgroundComposerUserSettingsResponse, UpdateEnvironmentBuildRequest, UpdateEnvironmentBuildResponse, UpdateEnvironmentBuildSettingsRequest, UpdateEnvironmentBuildSettingsResponse, UpdateKeyringPermissionsRequest, UpdateKeyringPermissionsResponse, UpdateKeyringSecretRequest, UpdateKeyringSecretResponse, UpdatePendingFollowupRequest, UpdatePendingFollowupResponse, UpdatePlacementGrantsRequest, UpdatePlacementGrantsResponse, UpdateProjectAppearanceRequest, UpdateProjectAppearanceResponse, UpdatePullRequestBranchRequest, UpdatePullRequestBranchResponse, VerifyBackgroundComposerAccessRequest, VerifyBackgroundComposerAccessResponse, WakeBackgroundComposerRequest, WakeBackgroundComposerResponse, WarmCursorServerDownloadRequest, WarmCursorServerDownloadResponse, WatchBackgroundComposerSnapshotStateRequest, WatchBackgroundComposerSnapshotStateResponse, WriteCanvasRequest, WriteCanvasResponse, init_background_composer_pb } from "./background_composer_pb.js";
import { FetchAllInstallationReposRequest, FetchAllInstallationReposResponse, GetGithubInstallationsRequest, GetGithubInstallationsResponse, init_dashboard_pb } from "./dashboard_pb.js";
var BackgroundComposerService;
export { BackgroundComposerService };
var __wakaru_init_background_composer_connect_initialized = false;
export function init_background_composer_connect() {
if (__wakaru_init_background_composer_connect_initialized) return;
__wakaru_init_background_composer_connect_initialized = true;
"use strict";
init_background_composer_pb();
init_esm2();
init_control_service_pb();
init_dashboard_pb();
init_agent_store_pb();
BackgroundComposerService = {
    typeName: "aiserver.v1.BackgroundComposerService",
    methods: {
        listBackgroundComposers: {
            name: "ListBackgroundComposers",
            I: ListBackgroundComposersRequest,
            O: ListBackgroundComposersResponse,
            kind: MethodKind.Unary
        },
        listPrBackgroundComposers: {
            name: "ListPrBackgroundComposers",
            I: ListPrBackgroundComposersRequest,
            O: ListPrBackgroundComposersResponse,
            kind: MethodKind.Unary
        },
        pinBackgroundComposers: {
            name: "PinBackgroundComposers",
            I: PinBackgroundComposersRequest,
            O: PinBackgroundComposersResponse,
            kind: MethodKind.Unary
        },
        unpinBackgroundComposers: {
            name: "UnpinBackgroundComposers",
            I: UnpinBackgroundComposersRequest,
            O: UnpinBackgroundComposersResponse,
            kind: MethodKind.Unary
        },
        attachBackgroundComposer: {
            name: "AttachBackgroundComposer",
            I: AttachBackgroundComposerRequest,
            O: AttachBackgroundComposerResponse,
            kind: MethodKind.ServerStreaming
        },
        streamConversation: {
            name: "StreamConversation",
            I: StreamConversationRequest,
            O: StreamConversationResponse,
            kind: MethodKind.ServerStreaming
        },
        getLatestAgentConversationState: {
            name: "GetLatestAgentConversationState",
            I: GetLatestAgentConversationStateRequest,
            O: GetLatestAgentConversationStateResponse,
            kind: MethodKind.Unary
        },
        getBlobForAgentKV: {
            name: "GetBlobForAgentKV",
            I: GetBlobForAgentKVRequest,
            O: GetBlobForAgentKVResponse,
            kind: MethodKind.Unary
        },
        getConversationPage: {
            name: "GetConversationPage",
            I: GetConversationPageRequest,
            O: GetConversationPageResponse,
            kind: MethodKind.Unary
        },
        attachBackgroundComposerLogs: {
            name: "AttachBackgroundComposerLogs",
            I: AttachBackgroundComposerLogsRequest,
            O: AttachBackgroundComposerLogsResponse,
            kind: MethodKind.ServerStreaming
        },
        attachAgentStartupTrace: {
            name: "AttachAgentStartupTrace",
            I: AttachAgentStartupTraceRequest,
            O: AttachAgentStartupTraceResponse,
            kind: MethodKind.ServerStreaming
        },
        startBackgroundComposerFromSnapshot: {
            name: "StartBackgroundComposerFromSnapshot",
            I: StartBackgroundComposerFromSnapshotRequest,
            O: StartBackgroundComposerFromSnapshotResponse,
            kind: MethodKind.Unary
        },
        startCloudOnboarding: {
            name: "StartCloudOnboarding",
            I: StartCloudOnboardingRequest,
            O: StartBackgroundComposerFromSnapshotResponse,
            kind: MethodKind.Unary
        },
        startChangeMonitorOnboarding: {
            name: "StartChangeMonitorOnboarding",
            I: StartChangeMonitorOnboardingRequest,
            O: StartBackgroundComposerFromSnapshotResponse,
            kind: MethodKind.Unary
        },
        startCloudOnboardingHeuristicEnvSetup: {
            name: "StartCloudOnboardingHeuristicEnvSetup",
            I: StartCloudOnboardingHeuristicEnvSetupRequest,
            O: StartCloudOnboardingHeuristicEnvSetupResponse,
            kind: MethodKind.Unary
        },
        forkBackgroundComposer: {
            name: "ForkBackgroundComposer",
            I: ForkBackgroundComposerRequest,
            O: ForkBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        startSideChatBackgroundComposer: {
            name: "StartSideChatBackgroundComposer",
            I: StartSideChatBackgroundComposerRequest,
            O: StartSideChatBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        listBackgroundComposerChildren: {
            name: "ListBackgroundComposerChildren",
            I: ListBackgroundComposerChildrenRequest,
            O: ListBackgroundComposerChildrenResponse,
            kind: MethodKind.Unary
        },
        makePRBackgroundComposer: {
            name: "MakePRBackgroundComposer",
            I: MakePRBackgroundComposerRequest,
            O: MakePRBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        openPRBackgroundComposer: {
            name: "OpenPRBackgroundComposer",
            I: OpenPRBackgroundComposerRequest,
            O: OpenPRBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerStatus: {
            name: "GetBackgroundComposerStatus",
            I: GetBackgroundComposerStatusRequest,
            O: GetBackgroundComposerStatusResponse,
            kind: MethodKind.Unary
        },
        addAsyncFollowupBackgroundComposer: {
            name: "AddAsyncFollowupBackgroundComposer",
            I: AddAsyncFollowupBackgroundComposerRequest,
            O: AddAsyncFollowupBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        injectBackgroundComposerContext: {
            name: "InjectBackgroundComposerContext",
            I: InjectBackgroundComposerContextRequest,
            O: InjectBackgroundComposerContextResponse,
            kind: MethodKind.Unary
        },
        submitInteractionResponseBackgroundComposer: {
            name: "SubmitInteractionResponseBackgroundComposer",
            I: SubmitInteractionResponseBackgroundComposerRequest,
            O: SubmitInteractionResponseBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        listPendingFollowups: {
            name: "ListPendingFollowups",
            I: ListPendingFollowupsRequest,
            O: ListPendingFollowupsResponse,
            kind: MethodKind.Unary
        },
        updatePendingFollowup: {
            name: "UpdatePendingFollowup",
            I: UpdatePendingFollowupRequest,
            O: UpdatePendingFollowupResponse,
            kind: MethodKind.Unary
        },
        deletePendingFollowup: {
            name: "DeletePendingFollowup",
            I: DeletePendingFollowupRequest,
            O: DeletePendingFollowupResponse,
            kind: MethodKind.Unary
        },
        reorderPendingFollowup: {
            name: "ReorderPendingFollowup",
            I: ReorderPendingFollowupRequest,
            O: ReorderPendingFollowupResponse,
            kind: MethodKind.Unary
        },
        submitPendingFollowupNow: {
            name: "SubmitPendingFollowupNow",
            I: SubmitPendingFollowupNowRequest,
            O: SubmitPendingFollowupNowResponse,
            kind: MethodKind.Unary
        },
        markFollowupEditing: {
            name: "MarkFollowupEditing",
            I: MarkFollowupEditingRequest,
            O: MarkFollowupEditingResponse,
            kind: MethodKind.Unary
        },
        getCursorServerUrl: {
            name: "GetCursorServerUrl",
            I: GetCursorServerUrlRequest,
            O: GetCursorServerUrlResponse,
            kind: MethodKind.Unary
        },
        warmCursorServerDownload: {
            name: "WarmCursorServerDownload",
            I: WarmCursorServerDownloadRequest,
            O: WarmCursorServerDownloadResponse,
            kind: MethodKind.Unary
        },
        preWarmPod: {
            name: "PreWarmPod",
            I: PreWarmPodRequest,
            O: PreWarmPodResponse,
            kind: MethodKind.Unary
        },
        wakeBackgroundComposer: {
            name: "WakeBackgroundComposer",
            I: WakeBackgroundComposerRequest,
            O: WakeBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        pauseBackgroundComposer: {
            name: "PauseBackgroundComposer",
            I: PauseBackgroundComposerRequest,
            O: PauseBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        cancelBackgroundComposerToolCall: {
            name: "CancelBackgroundComposerToolCall",
            I: CancelBackgroundComposerToolCallRequest,
            O: CancelBackgroundComposerToolCallResponse,
            kind: MethodKind.Unary
        },
        resumeBackgroundComposer: {
            name: "ResumeBackgroundComposer",
            I: ResumeBackgroundComposerRequest,
            O: ResumeBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        archiveBackgroundComposer: {
            name: "ArchiveBackgroundComposer",
            I: ArchiveBackgroundComposerRequest,
            O: ArchiveBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        archiveRepoBackgroundComposers: {
            name: "ArchiveRepoBackgroundComposers",
            I: ArchiveRepoBackgroundComposersRequest,
            O: ArchiveRepoBackgroundComposersResponse,
            kind: MethodKind.Unary
        },
        deleteBackgroundComposer: {
            name: "DeleteBackgroundComposer",
            I: DeleteBackgroundComposerRequest,
            O: DeleteBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerInfo: {
            name: "GetBackgroundComposerInfo",
            I: GetBackgroundComposerInfoRequest,
            O: GetBackgroundComposerInfoResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerEnvironmentVersion: {
            name: "GetBackgroundComposerEnvironmentVersion",
            I: GetBackgroundComposerEnvironmentVersionRequest,
            O: GetBackgroundComposerEnvironmentVersionResponse,
            kind: MethodKind.Unary
        },
        getEnvironmentHistory: {
            name: "GetEnvironmentHistory",
            I: GetEnvironmentHistoryRequest,
            O: GetEnvironmentHistoryResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerTimings: {
            name: "GetBackgroundComposerTimings",
            I: GetBackgroundComposerTimingsRequest,
            O: GetBackgroundComposerTimingsResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerRepositoryInfo: {
            name: "GetBackgroundComposerRepositoryInfo",
            I: GetBackgroundComposerRepositoryInfoRequest,
            O: GetBackgroundComposerRepositoryInfoResponse,
            kind: MethodKind.Unary
        },
        getMachine: {
            name: "GetMachine",
            I: GetMachineRequest,
            O: GetMachineResponse,
            kind: MethodKind.Unary
        },
        listWorkspaceFiles: {
            name: "ListWorkspaceFiles",
            I: ListWorkspaceFilesRequest,
            O: ListWorkspaceFilesResponse,
            kind: MethodKind.Unary
        },
        desktopLease: {
            name: "DesktopLease",
            I: BackgroundComposerDesktopLeaseRequest,
            O: BackgroundComposerDesktopLeaseResponse,
            kind: MethodKind.Unary
        },
        getMachineResourceUsage: {
            name: "GetMachineResourceUsage",
            I: GetMachineResourceUsageRequest,
            O: GetResourceUsageResponse,
            kind: MethodKind.Unary
        },
        listDetailedBackgroundComposers: {
            name: "ListDetailedBackgroundComposers",
            I: ListDetailedBackgroundComposersRequest,
            O: ListDetailedBackgroundComposersResponse,
            kind: MethodKind.Unary
        },
        listCloudAgentRunsForDashboard: {
            name: "ListCloudAgentRunsForDashboard",
            I: ListCloudAgentRunsForDashboardRequest,
            O: ListCloudAgentRunsForDashboardResponse,
            kind: MethodKind.Unary
        },
        aggregateCloudAgentRunsForDashboard: {
            name: "AggregateCloudAgentRunsForDashboard",
            I: AggregateCloudAgentRunsForDashboardRequest,
            O: AggregateCloudAgentRunsForDashboardResponse,
            kind: MethodKind.Unary
        },
        getCloudAgentRunForDashboard: {
            name: "GetCloudAgentRunForDashboard",
            I: GetCloudAgentRunForDashboardRequest,
            O: GetCloudAgentRunForDashboardResponse,
            kind: MethodKind.Unary
        },
        listCloudAgentRunEventsForDashboard: {
            name: "ListCloudAgentRunEventsForDashboard",
            I: ListCloudAgentRunEventsForDashboardRequest,
            O: ListCloudAgentRunEventsForDashboardResponse,
            kind: MethodKind.Unary
        },
        listNamedAgents: {
            name: "ListNamedAgents",
            I: ListNamedAgentsRequest,
            O: ListNamedAgentsResponse,
            kind: MethodKind.Unary
        },
        listNamedAgentSessions: {
            name: "ListNamedAgentSessions",
            I: ListNamedAgentSessionsRequest,
            O: ListNamedAgentSessionsResponse,
            kind: MethodKind.Unary
        },
        listEventSubscriptions: {
            name: "ListEventSubscriptions",
            I: ListEventSubscriptionsRequest,
            O: ListEventSubscriptionsResponse,
            kind: MethodKind.Unary
        },
        closeEventSubscription: {
            name: "CloseEventSubscription",
            I: CloseEventSubscriptionRequest,
            O: CloseEventSubscriptionResponse,
            kind: MethodKind.Unary
        },
        getGithubAccessTokenForRepos: {
            name: "GetGithubAccessTokenForRepos",
            I: GetGithubAccessTokenForReposRequest,
            O: GetGithubAccessTokenForReposResponse,
            kind: MethodKind.Unary
        },
        makeGithubRequest: {
            name: "MakeGithubRequest",
            I: MakeGithubRequestRequest,
            O: MakeGithubRequestResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerDiffDetails: {
            name: "GetBackgroundComposerDiffDetails",
            I: GetBackgroundComposerDiffDetailsRequest,
            O: GetBackgroundComposerDiffDetailsResponse,
            kind: MethodKind.Unary
        },
        getOptimizedDiffDetails: {
            name: "GetOptimizedDiffDetails",
            I: GetOptimizedDiffDetailsRequest,
            O: GetOptimizedDiffDetailsResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerChangesHash: {
            name: "GetBackgroundComposerChangesHash",
            I: GetBackgroundComposerChangesHashRequest,
            O: GetBackgroundComposerChangesHashResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerPullRequest: {
            name: "GetBackgroundComposerPullRequest",
            I: GetBackgroundComposerPullRequestRequest,
            O: GetBackgroundComposerPullRequestResponse,
            kind: MethodKind.Unary
        },
        refreshGithubAccessTokenInBackgroundComposer: {
            name: "RefreshGithubAccessTokenInBackgroundComposer",
            I: RefreshGithubAccessTokenInBackgroundComposerRequest,
            O: RefreshGithubAccessTokenInBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        createBackgroundComposerPod: {
            name: "CreateBackgroundComposerPod",
            I: CreateBackgroundComposerPodRequest,
            O: CreateBackgroundComposerPodResponse,
            kind: MethodKind.Unary
        },
        attachBackgroundComposerPod: {
            name: "AttachBackgroundComposerPod",
            I: AttachBackgroundComposerPodRequest,
            O: AttachBackgroundComposerPodResponse,
            kind: MethodKind.ServerStreaming
        },
        createBackgroundComposerPodSnapshot: {
            name: "CreateBackgroundComposerPodSnapshot",
            I: CreateBackgroundComposerPodSnapshotRequest,
            O: CreateBackgroundComposerPodSnapshotResponse,
            kind: MethodKind.Unary
        },
        changeBackgroundComposerSnapshotVisibility: {
            name: "ChangeBackgroundComposerSnapshotVisibility",
            I: ChangeBackgroundComposerSnapshotVisibilityRequest,
            O: ChangeBackgroundComposerSnapshotVisibilityResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerSnapshotInfo: {
            name: "GetBackgroundComposerSnapshotInfo",
            I: GetBackgroundComposerSnapshotInfoRequest,
            O: GetBackgroundComposerSnapshotInfoResponse,
            kind: MethodKind.Unary
        },
        listBackgroundComposerSnapshotsByBcId: {
            name: "ListBackgroundComposerSnapshotsByBcId",
            I: ListBackgroundComposerSnapshotsByBcIdRequest,
            O: ListBackgroundComposerSnapshotsByBcIdResponse,
            kind: MethodKind.Unary
        },
        listBackgroundComposerSnapshotStatusesByBcIds: {
            name: "ListBackgroundComposerSnapshotStatusesByBcIds",
            I: ListBackgroundComposerSnapshotStatusesByBcIdsRequest,
            O: ListBackgroundComposerSnapshotStatusesByBcIdsResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerSnapshotState: {
            name: "GetBackgroundComposerSnapshotState",
            I: GetBackgroundComposerSnapshotStateRequest,
            O: GetBackgroundComposerSnapshotStateResponse,
            kind: MethodKind.Unary
        },
        watchBackgroundComposerSnapshotState: {
            name: "WatchBackgroundComposerSnapshotState",
            I: WatchBackgroundComposerSnapshotStateRequest,
            O: WatchBackgroundComposerSnapshotStateResponse,
            kind: MethodKind.ServerStreaming
        },
        getBackgroundComposerConversation: {
            name: "GetBackgroundComposerConversation",
            I: GetBackgroundComposerConversationRequest,
            O: GetBackgroundComposerConversationResponse,
            kind: MethodKind.Unary
        },
        renameBackgroundComposer: {
            name: "RenameBackgroundComposer",
            I: RenameBackgroundComposerRequest,
            O: RenameBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        saveCloudAgentVoiceCall: {
            name: "SaveCloudAgentVoiceCall",
            I: SaveCloudAgentVoiceCallRequest,
            O: SaveCloudAgentVoiceCallResponse,
            kind: MethodKind.Unary
        },
        updateProjectAppearance: {
            name: "UpdateProjectAppearance",
            I: UpdateProjectAppearanceRequest,
            O: UpdateProjectAppearanceResponse,
            kind: MethodKind.Unary
        },
        seedStagedProjects: {
            name: "SeedStagedProjects",
            I: SeedStagedProjectsRequest,
            O: SeedStagedProjectsResponse,
            kind: MethodKind.Unary
        },
        listStagedProjects: {
            name: "ListStagedProjects",
            I: ListStagedProjectsRequest,
            O: ListStagedProjectsResponse,
            kind: MethodKind.Unary
        },
        dismissStagedProject: {
            name: "DismissStagedProject",
            I: DismissStagedProjectRequest,
            O: DismissStagedProjectResponse,
            kind: MethodKind.Unary
        },
        previewStagedProjects: {
            name: "PreviewStagedProjects",
            I: PreviewStagedProjectsRequest,
            O: PreviewStagedProjectsResponse,
            kind: MethodKind.Unary
        },
        deleteStagedProjects: {
            name: "DeleteStagedProjects",
            I: DeleteStagedProjectsRequest,
            O: DeleteStagedProjectsResponse,
            kind: MethodKind.Unary
        },
        publishBackgroundComposerTempRepo: {
            name: "PublishBackgroundComposerTempRepo",
            I: PublishBackgroundComposerTempRepoRequest,
            O: PublishBackgroundComposerTempRepoResponse,
            kind: MethodKind.Unary
        },
        reparentBackgroundComposer: {
            name: "ReparentBackgroundComposer",
            I: ReparentBackgroundComposerRequest,
            O: ReparentBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        setWorkerManager: {
            name: "SetWorkerManager",
            I: SetWorkerManagerRequest,
            O: SetWorkerManagerResponse,
            kind: MethodKind.Unary
        },
        createProjectWorker: {
            name: "CreateProjectWorker",
            I: CreateProjectWorkerRequest,
            O: CreateProjectWorkerResponse,
            kind: MethodKind.Unary
        },
        clearWorkerManager: {
            name: "ClearWorkerManager",
            I: ClearWorkerManagerRequest,
            O: ClearWorkerManagerResponse,
            kind: MethodKind.Unary
        },
        listWorkersForManager: {
            name: "ListWorkersForManager",
            I: ListWorkersForManagerRequest,
            O: ListWorkersForManagerResponse,
            kind: MethodKind.Unary
        },
        listProjectSubtrees: {
            name: "ListProjectSubtrees",
            I: ListProjectSubtreesRequest,
            O: ListProjectSubtreesResponse,
            kind: MethodKind.Unary
        },
        streamBackgroundComposerUpdates: {
            name: "StreamBackgroundComposerUpdates",
            I: StreamBackgroundComposerUpdatesRequest,
            O: StreamBackgroundComposerUpdatesResponse,
            kind: MethodKind.ServerStreaming
        },
        updateBackgroundComposerExperimentalModelOptOut: {
            name: "UpdateBackgroundComposerExperimentalModelOptOut",
            I: UpdateBackgroundComposerExperimentalModelOptOutRequest,
            O: UpdateBackgroundComposerExperimentalModelOptOutResponse,
            kind: MethodKind.Unary
        },
        commitBackgroundComposer: {
            name: "CommitBackgroundComposer",
            I: CommitBackgroundComposerRequest,
            O: CommitBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        setPersonalEnvironmentJson: {
            name: "SetPersonalEnvironmentJson",
            I: SetPersonalEnvironmentJsonRequest,
            O: SetPersonalEnvironmentJsonResponse,
            kind: MethodKind.Unary
        },
        getPersonalEnvironmentJson: {
            name: "GetPersonalEnvironmentJson",
            I: GetPersonalEnvironmentJsonRequest,
            O: GetPersonalEnvironmentJsonResponse,
            kind: MethodKind.Unary
        },
        getEnvironmentJsonCandidates: {
            name: "GetEnvironmentJsonCandidates",
            I: GetEnvironmentJsonCandidatesRequest,
            O: GetEnvironmentJsonCandidatesResponse,
            kind: MethodKind.Unary
        },
        listPersonalEnvironments: {
            name: "ListPersonalEnvironments",
            I: ListPersonalEnvironmentsRequest,
            O: ListPersonalEnvironmentsResponse,
            kind: MethodKind.Unary
        },
        deletePersonalEnvironmentJson: {
            name: "DeletePersonalEnvironmentJson",
            I: DeletePersonalEnvironmentJsonRequest,
            O: DeletePersonalEnvironmentJsonResponse,
            kind: MethodKind.Unary
        },
        publishEnvironment: {
            name: "PublishEnvironment",
            I: PublishEnvironmentRequest,
            O: PublishEnvironmentResponse,
            kind: MethodKind.Unary
        },
        publishPersonalEnvironment: {
            name: "PublishPersonalEnvironment",
            I: PublishPersonalEnvironmentRequest,
            O: PublishPersonalEnvironmentResponse,
            kind: MethodKind.Unary
        },
        listTeamEnvironments: {
            name: "ListTeamEnvironments",
            I: ListTeamEnvironmentsRequest,
            O: ListTeamEnvironmentsResponse,
            kind: MethodKind.Unary
        },
        deleteTeamEnvironment: {
            name: "DeleteTeamEnvironment",
            I: DeleteTeamEnvironmentRequest,
            O: DeleteTeamEnvironmentResponse,
            kind: MethodKind.Unary
        },
        setTeamEnvironmentJson: {
            name: "SetTeamEnvironmentJson",
            I: SetTeamEnvironmentJsonRequest,
            O: SetTeamEnvironmentJsonResponse,
            kind: MethodKind.Unary
        },
        restoreEnvironmentVersion: {
            name: "RestoreEnvironmentVersion",
            I: RestoreEnvironmentVersionRequest,
            O: RestoreEnvironmentVersionResponse,
            kind: MethodKind.Unary
        },
        listEnvironments: {
            name: "ListEnvironments",
            I: ListEnvironmentsRequest,
            O: ListEnvironmentsResponse,
            kind: MethodKind.Unary
        },
        getEnvironment: {
            name: "GetEnvironment",
            I: GetEnvironmentRequest,
            O: GetEnvironmentResponse,
            kind: MethodKind.Unary
        },
        renameEnvironment: {
            name: "RenameEnvironment",
            I: RenameEnvironmentRequest,
            O: RenameEnvironmentResponse,
            kind: MethodKind.Unary
        },
        migrateEnvironmentToOrigin: {
            name: "MigrateEnvironmentToOrigin",
            I: MigrateEnvironmentToOriginRequest,
            O: MigrateEnvironmentToOriginResponse,
            kind: MethodKind.Unary
        },
        duplicateEnvironment: {
            name: "DuplicateEnvironment",
            I: DuplicateEnvironmentRequest,
            O: DuplicateEnvironmentResponse,
            kind: MethodKind.Unary
        },
        listEnvironmentBuilds: {
            name: "ListEnvironmentBuilds",
            I: ListEnvironmentBuildsRequest,
            O: ListEnvironmentBuildsResponse,
            kind: MethodKind.Unary
        },
        getEnvironmentActiveBuild: {
            name: "GetEnvironmentActiveBuild",
            I: GetEnvironmentActiveBuildRequest,
            O: GetEnvironmentActiveBuildResponse,
            kind: MethodKind.Unary
        },
        getEnvironmentPersistentRecurringBuildFailures: {
            name: "GetEnvironmentPersistentRecurringBuildFailures",
            I: GetEnvironmentPersistentRecurringBuildFailuresRequest,
            O: GetEnvironmentPersistentRecurringBuildFailuresResponse,
            kind: MethodKind.Unary
        },
        getEnvironmentBuild: {
            name: "GetEnvironmentBuild",
            I: GetEnvironmentBuildRequest,
            O: GetEnvironmentBuildResponse,
            kind: MethodKind.Unary
        },
        getEnvironmentBuildConfig: {
            name: "GetEnvironmentBuildConfig",
            I: GetEnvironmentBuildConfigRequest,
            O: GetEnvironmentBuildConfigResponse,
            kind: MethodKind.Unary
        },
        updateEnvironmentBuild: {
            name: "UpdateEnvironmentBuild",
            I: UpdateEnvironmentBuildRequest,
            O: UpdateEnvironmentBuildResponse,
            kind: MethodKind.Unary
        },
        triggerEnvironmentBuild: {
            name: "TriggerEnvironmentBuild",
            I: TriggerEnvironmentBuildRequest,
            O: TriggerEnvironmentBuildResponse,
            kind: MethodKind.Unary
        },
        attachEnvironmentBuildLog: {
            name: "AttachEnvironmentBuildLog",
            I: AttachEnvironmentBuildLogRequest,
            O: AttachEnvironmentBuildLogResponse,
            kind: MethodKind.ServerStreaming
        },
        cancelEnvironmentBuild: {
            name: "CancelEnvironmentBuild",
            I: CancelEnvironmentBuildRequest,
            O: CancelEnvironmentBuildResponse,
            kind: MethodKind.Unary
        },
        getEnvironmentBuildSettings: {
            name: "GetEnvironmentBuildSettings",
            I: GetEnvironmentBuildSettingsRequest,
            O: GetEnvironmentBuildSettingsResponse,
            kind: MethodKind.Unary
        },
        updateEnvironmentBuildSettings: {
            name: "UpdateEnvironmentBuildSettings",
            I: UpdateEnvironmentBuildSettingsRequest,
            O: UpdateEnvironmentBuildSettingsResponse,
            kind: MethodKind.Unary
        },
        resolveOrCreateMultiRepoEnvironment: {
            name: "ResolveOrCreateMultiRepoEnvironment",
            I: ResolveOrCreateMultiRepoEnvironmentRequest,
            O: ResolveOrCreateMultiRepoEnvironmentResponse,
            kind: MethodKind.Unary
        },
        resolveOrCreateDraftEnvironment: {
            name: "ResolveOrCreateDraftEnvironment",
            I: ResolveOrCreateDraftEnvironmentRequest,
            O: ResolveOrCreateDraftEnvironmentResponse,
            kind: MethodKind.Unary
        },
        snapshotAndSaveEnvironment: {
            name: "SnapshotAndSaveEnvironment",
            I: SnapshotAndSaveEnvironmentRequest,
            O: SnapshotAndSaveEnvironmentResponse,
            kind: MethodKind.Unary
        },
        listReposWithLocalEnvironment: {
            name: "ListReposWithLocalEnvironment",
            I: ListReposWithLocalEnvironmentRequest,
            O: ListReposWithLocalEnvironmentResponse,
            kind: MethodKind.Unary
        },
        markBackgroundComposerRead: {
            name: "MarkBackgroundComposerRead",
            I: MarkBackgroundComposerReadRequest,
            O: MarkBackgroundComposerReadResponse,
            kind: MethodKind.Unary
        },
        markBackgroundComposerUnread: {
            name: "MarkBackgroundComposerUnread",
            I: MarkBackgroundComposerUnreadRequest,
            O: MarkBackgroundComposerUnreadResponse,
            kind: MethodKind.Unary
        },
        advanceBackgroundComposerReadCursor: {
            name: "AdvanceBackgroundComposerReadCursor",
            I: AdvanceBackgroundComposerReadCursorRequest,
            O: AdvanceBackgroundComposerReadCursorResponse,
            kind: MethodKind.Unary
        },
        notifyBackgroundComposerShown: {
            name: "NotifyBackgroundComposerShown",
            I: NotifyBackgroundComposerShownRequest,
            O: NotifyBackgroundComposerShownResponse,
            kind: MethodKind.Unary
        },
        fetchBackgroundComposer: {
            name: "FetchBackgroundComposer",
            I: FetchBackgroundComposerRequest,
            O: FetchBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        getTurnSummaryBackgroundComposer: {
            name: "GetTurnSummaryBackgroundComposer",
            I: GetTurnSummaryBackgroundComposerRequest,
            O: GetTurnSummaryBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerName: {
            name: "GetBackgroundComposerName",
            I: GetBackgroundComposerNameRequest,
            O: GetBackgroundComposerNameResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerPrompt: {
            name: "GetBackgroundComposerPrompt",
            I: GetBackgroundComposerPromptRequest,
            O: GetBackgroundComposerPromptResponse,
            kind: MethodKind.Unary
        },
        readBinaryFile: {
            name: "ReadBinaryFile",
            I: ReadBinaryFileRequest,
            O: ReadBinaryFileResponse,
            kind: MethodKind.Unary
        },
        listBackgroundComposerArtifacts: {
            name: "ListBackgroundComposerArtifacts",
            I: ListBackgroundComposerArtifactsRequest,
            O: ListBackgroundComposerArtifactsResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerArtifact: {
            name: "GetBackgroundComposerArtifact",
            I: GetBackgroundComposerArtifactRequest,
            O: GetBackgroundComposerArtifactResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerArtifactBytes: {
            name: "GetBackgroundComposerArtifactBytes",
            I: GetBackgroundComposerArtifactBytesRequest,
            O: GetBackgroundComposerArtifactBytesResponse,
            kind: MethodKind.Unary
        },
        streamBackgroundComposerArtifact: {
            name: "StreamBackgroundComposerArtifact",
            I: StreamBackgroundComposerArtifactRequest,
            O: StreamBackgroundComposerArtifactResponse,
            kind: MethodKind.ServerStreaming
        },
        listSharedBackgroundComposerArtifacts: {
            name: "ListSharedBackgroundComposerArtifacts",
            I: ListSharedBackgroundComposerArtifactsRequest,
            O: ListSharedBackgroundComposerArtifactsResponse,
            kind: MethodKind.Unary
        },
        shareBackgroundComposerArtifact: {
            name: "ShareBackgroundComposerArtifact",
            I: ShareBackgroundComposerArtifactRequest,
            O: ShareBackgroundComposerArtifactResponse,
            kind: MethodKind.Unary
        },
        unshareBackgroundComposerArtifact: {
            name: "UnshareBackgroundComposerArtifact",
            I: UnshareBackgroundComposerArtifactRequest,
            O: UnshareBackgroundComposerArtifactResponse,
            kind: MethodKind.Unary
        },
        getPublicBackgroundComposerArtifact: {
            name: "GetPublicBackgroundComposerArtifact",
            I: GetPublicBackgroundComposerArtifactRequest,
            O: GetPublicBackgroundComposerArtifactResponse,
            kind: MethodKind.Unary
        },
        updateBackgroundComposerUserSettings: {
            name: "UpdateBackgroundComposerUserSettings",
            I: UpdateBackgroundComposerUserSettingsRequest,
            O: UpdateBackgroundComposerUserSettingsResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerUserSettings: {
            name: "GetBackgroundComposerUserSettings",
            I: GetBackgroundComposerUserSettingsRequest,
            O: GetBackgroundComposerUserSettingsResponse,
            kind: MethodKind.Unary
        },
        updateBackgroundComposerEnvironment: {
            name: "UpdateBackgroundComposerEnvironment",
            I: UpdateBackgroundComposerEnvironmentRequest,
            O: UpdateBackgroundComposerEnvironmentResponse,
            kind: MethodKind.Unary
        },
        getRepositoryBranches: {
            name: "GetRepositoryBranches",
            I: GetRepositoryBranchesRequest,
            O: GetRepositoryBranchesResponse,
            kind: MethodKind.Unary
        },
        getRepositoryDefaultBranch: {
            name: "GetRepositoryDefaultBranch",
            I: GetRepositoryDefaultBranchRequest,
            O: GetRepositoryDefaultBranchResponse,
            kind: MethodKind.Unary
        },
        getPullRequestMergeStatus: {
            name: "GetPullRequestMergeStatus",
            I: GetPullRequestMergeStatusRequest,
            O: GetPullRequestMergeStatusResponse,
            kind: MethodKind.Unary
        },
        getDetailedPullRequestStatus: {
            name: "GetDetailedPullRequestStatus",
            I: GetDetailedPullRequestStatusRequest,
            O: GetDetailedPullRequestStatusResponse,
            kind: MethodKind.Unary
        },
        checkPullRequestMergeability: {
            name: "CheckPullRequestMergeability",
            I: CheckPullRequestMergeabilityRequest,
            O: CheckPullRequestMergeabilityResponse,
            kind: MethodKind.Unary
        },
        getPullRequestDiscussions: {
            name: "GetPullRequestDiscussions",
            I: GetPullRequestDiscussionsRequest,
            O: GetPullRequestDiscussionsResponse,
            kind: MethodKind.Unary
        },
        getPullRequestCommits: {
            name: "GetPullRequestCommits",
            I: GetPullRequestCommitsRequest,
            O: GetPullRequestCommitsResponse,
            kind: MethodKind.Unary
        },
        getPullRequestTimelineEvents: {
            name: "GetPullRequestTimelineEvents",
            I: GetPullRequestTimelineEventsRequest,
            O: GetPullRequestTimelineEventsResponse,
            kind: MethodKind.Unary
        },
        replyToReviewThread: {
            name: "ReplyToReviewThread",
            I: ReplyToReviewThreadRequest,
            O: ReplyToReviewThreadResponse,
            kind: MethodKind.Unary
        },
        resolveReviewThread: {
            name: "ResolveReviewThread",
            I: ResolveReviewThreadRequest,
            O: ResolveReviewThreadResponse,
            kind: MethodKind.Unary
        },
        unresolveReviewThread: {
            name: "UnresolveReviewThread",
            I: UnresolveReviewThreadRequest,
            O: UnresolveReviewThreadResponse,
            kind: MethodKind.Unary
        },
        deletePullRequestReviewComment: {
            name: "DeletePullRequestReviewComment",
            I: DeletePullRequestReviewCommentRequest,
            O: DeletePullRequestReviewCommentResponse,
            kind: MethodKind.Unary
        },
        addPullRequestReviewComment: {
            name: "AddPullRequestReviewComment",
            I: AddPullRequestReviewCommentRequest,
            O: AddPullRequestReviewCommentResponse,
            kind: MethodKind.Unary
        },
        mergePullRequest: {
            name: "MergePullRequest",
            I: MergePullRequestRequest,
            O: MergePullRequestResponse,
            kind: MethodKind.Unary
        },
        enablePullRequestAutoMerge: {
            name: "EnablePullRequestAutoMerge",
            I: EnablePullRequestAutoMergeRequest,
            O: EnablePullRequestAutoMergeResponse,
            kind: MethodKind.Unary
        },
        disablePullRequestAutoMerge: {
            name: "DisablePullRequestAutoMerge",
            I: DisablePullRequestAutoMergeRequest,
            O: DisablePullRequestAutoMergeResponse,
            kind: MethodKind.Unary
        },
        convertPullRequestFromDraft: {
            name: "ConvertPullRequestFromDraft",
            I: ConvertPullRequestFromDraftRequest,
            O: ConvertPullRequestFromDraftResponse,
            kind: MethodKind.Unary
        },
        updatePullRequestBranch: {
            name: "UpdatePullRequestBranch",
            I: UpdatePullRequestBranchRequest,
            O: UpdatePullRequestBranchResponse,
            kind: MethodKind.Unary
        },
        registerPushNotificationToken: {
            name: "RegisterPushNotificationToken",
            I: RegisterPushNotificationTokenRequest,
            O: RegisterPushNotificationTokenResponse,
            kind: MethodKind.Unary
        },
        deletePushNotificationToken: {
            name: "DeletePushNotificationToken",
            I: DeletePushNotificationTokenRequest,
            O: DeletePushNotificationTokenResponse,
            kind: MethodKind.Unary
        },
        resolveOriginAgentApproval: {
            name: "ResolveOriginAgentApproval",
            I: ResolveOriginAgentApprovalRequest,
            O: ResolveOriginAgentApprovalResponse,
            kind: MethodKind.Unary
        },
        getOriginAgentApproval: {
            name: "GetOriginAgentApproval",
            I: GetOriginAgentApprovalRequest,
            O: GetOriginAgentApprovalResponse,
            kind: MethodKind.Unary
        },
        syncLiveActivity: {
            name: "SyncLiveActivity",
            I: SyncLiveActivityRequest,
            O: SyncLiveActivityResponse,
            kind: MethodKind.Unary
        },
        deleteLiveActivity: {
            name: "DeleteLiveActivity",
            I: DeleteLiveActivityRequest,
            O: DeleteLiveActivityResponse,
            kind: MethodKind.Unary
        },
        verifyBackgroundComposerAccess: {
            name: "VerifyBackgroundComposerAccess",
            I: VerifyBackgroundComposerAccessRequest,
            O: VerifyBackgroundComposerAccessResponse,
            kind: MethodKind.Unary
        },
        startSlackStreamingForFollowup: {
            name: "StartSlackStreamingForFollowup",
            I: StartSlackStreamingForFollowupRequest,
            O: StartSlackStreamingForFollowupResponse,
            kind: MethodKind.Unary
        },
        startGithubStreamingForFollowup: {
            name: "StartGithubStreamingForFollowup",
            I: StartGithubStreamingForFollowupRequest,
            O: StartGithubStreamingForFollowupResponse,
            kind: MethodKind.Unary
        },
        startLinearStreamingForFollowup: {
            name: "StartLinearStreamingForFollowup",
            I: StartLinearStreamingForFollowupRequest,
            O: StartLinearStreamingForFollowupResponse,
            kind: MethodKind.Unary
        },
        getGithubInstallations: {
            name: "GetGithubInstallations",
            I: GetGithubInstallationsRequest,
            O: GetGithubInstallationsResponse,
            kind: MethodKind.Unary
        },
        fetchAllInstallationRepos: {
            name: "FetchAllInstallationRepos",
            I: FetchAllInstallationReposRequest,
            O: FetchAllInstallationReposResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerVmUsage: {
            name: "GetBackgroundComposerVmUsage",
            I: GetBackgroundComposerVmUsageRequest,
            O: GetBackgroundComposerVmUsageResponse,
            kind: MethodKind.Unary
        },
        getCloudAgentDebugDetails: {
            name: "GetCloudAgentDebugDetails",
            I: GetCloudAgentDebugDetailsRequest,
            O: GetCloudAgentDebugDetailsResponse,
            kind: MethodKind.Unary
        },
        getCloudAgentMemoryDbLogs: {
            name: "GetCloudAgentMemoryDbLogs",
            I: GetCloudAgentMemoryDbLogsRequest,
            O: GetCloudAgentMemoryDbLogsResponse,
            kind: MethodKind.Unary
        },
        createAgentShare: {
            name: "CreateAgentShare",
            I: CreateAgentShareRequest,
            O: CreateAgentShareResponse,
            kind: MethodKind.Unary
        },
        getAgentSharePreview: {
            name: "GetAgentSharePreview",
            I: GetAgentSharePreviewRequest,
            O: GetAgentSharePreviewResponse,
            kind: MethodKind.Unary
        },
        listPrivateWorkers: {
            name: "ListPrivateWorkers",
            I: ListPrivateWorkersRequest,
            O: ListPrivateWorkersResponse,
            kind: MethodKind.Unary
        },
        listPrivateWorkerPools: {
            name: "ListPrivateWorkerPools",
            I: ListPrivateWorkerPoolsRequest,
            O: ListPrivateWorkerPoolsResponse,
            kind: MethodKind.Unary
        },
        listPlacementGrants: {
            name: "ListPlacementGrants",
            I: ListPlacementGrantsRequest,
            O: ListPlacementGrantsResponse,
            kind: MethodKind.Unary
        },
        updatePlacementGrants: {
            name: "UpdatePlacementGrants",
            I: UpdatePlacementGrantsRequest,
            O: UpdatePlacementGrantsResponse,
            kind: MethodKind.Unary
        },
        registerPrivateWorkerPool: {
            name: "RegisterPrivateWorkerPool",
            I: RegisterPrivateWorkerPoolRequest,
            O: RegisterPrivateWorkerPoolResponse,
            kind: MethodKind.Unary
        },
        deregisterPrivateWorkerPool: {
            name: "DeregisterPrivateWorkerPool",
            I: DeregisterPrivateWorkerPoolRequest,
            O: DeregisterPrivateWorkerPoolResponse,
            kind: MethodKind.Unary
        },
        adminListUserPrivateWorkers: {
            name: "AdminListUserPrivateWorkers",
            I: AdminListUserPrivateWorkersRequest,
            O: AdminListUserPrivateWorkersResponse,
            kind: MethodKind.Unary
        },
        adminKillBackgroundComposer: {
            name: "AdminKillBackgroundComposer",
            I: AdminKillBackgroundComposerRequest,
            O: AdminKillBackgroundComposerResponse,
            kind: MethodKind.Unary
        },
        adminSettleInteraction: {
            name: "AdminSettleInteraction",
            I: AdminSettleInteractionRequest,
            O: AdminSettleInteractionResponse,
            kind: MethodKind.Unary
        },
        adminUnparkFollowups: {
            name: "AdminUnparkFollowups",
            I: AdminUnparkFollowupsRequest,
            O: AdminUnparkFollowupsResponse,
            kind: MethodKind.Unary
        },
        adminListActiveBackgroundComposers: {
            name: "AdminListActiveBackgroundComposers",
            I: AdminListActiveBackgroundComposersRequest,
            O: AdminListActiveBackgroundComposersResponse,
            kind: MethodKind.Unary
        },
        adminKillAllActiveBackgroundComposers: {
            name: "AdminKillAllActiveBackgroundComposers",
            I: AdminKillAllActiveBackgroundComposersRequest,
            O: AdminKillAllActiveBackgroundComposersResponse,
            kind: MethodKind.Unary
        },
        listPendingPrivateWorkerRequests: {
            name: "ListPendingPrivateWorkerRequests",
            I: ListPendingPrivateWorkerRequestsRequest,
            O: ListPendingPrivateWorkerRequestsResponse,
            kind: MethodKind.Unary
        },
        streamPendingPrivateWorkerRequests: {
            name: "StreamPendingPrivateWorkerRequests",
            I: StreamPendingPrivateWorkerRequestsRequest,
            O: StreamPendingPrivateWorkerRequestsResponse,
            kind: MethodKind.ServerStreaming
        },
        claimPendingPrivateWorkerRequest: {
            name: "ClaimPendingPrivateWorkerRequest",
            I: ClaimPendingPrivateWorkerRequestRequest,
            O: ClaimPendingPrivateWorkerRequestResponse,
            kind: MethodKind.Unary
        },
        releasePrivateWorkerClaim: {
            name: "ReleasePrivateWorkerClaim",
            I: ReleasePrivateWorkerClaimRequest,
            O: ReleasePrivateWorkerClaimResponse,
            kind: MethodKind.Unary
        },
        getPrivateWorkersSummary: {
            name: "GetPrivateWorkersSummary",
            I: GetPrivateWorkersSummaryRequest,
            O: GetPrivateWorkersSummaryResponse,
            kind: MethodKind.Unary
        },
        getPrivateWorker: {
            name: "GetPrivateWorker",
            I: GetPrivateWorkerRequest,
            O: GetPrivateWorkerResponse,
            kind: MethodKind.Unary
        },
        releasePrivateWorker: {
            name: "ReleasePrivateWorker",
            I: ReleasePrivateWorkerRequest,
            O: ReleasePrivateWorkerResponse,
            kind: MethodKind.Unary
        },
        batchRefreshPullRequestStatus: {
            name: "BatchRefreshPullRequestStatus",
            I: BatchRefreshPullRequestStatusRequest,
            O: BatchRefreshPullRequestStatusResponse,
            kind: MethodKind.Unary
        },
        listAgentStores: {
            name: "ListAgentStores",
            I: ListAgentStoresRequest,
            O: ListAgentStoresResponse,
            kind: MethodKind.Unary
        },
        listAgentStoreEntries: {
            name: "ListAgentStoreEntries",
            I: ListAgentStoreEntriesRequest,
            O: ListAgentStoreEntriesResponse,
            kind: MethodKind.Unary
        },
        readAgentStoreFile: {
            name: "ReadAgentStoreFile",
            I: ReadAgentStoreFileRequest,
            O: ReadAgentStoreFileResponse,
            kind: MethodKind.Unary
        },
        writeAgentStoreDocument: {
            name: "WriteAgentStoreDocument",
            I: WriteAgentStoreDocumentRequest,
            O: WriteAgentStoreDocumentResponse,
            kind: MethodKind.Unary
        },
        setAgentStoreDocumentVisibility: {
            name: "SetAgentStoreDocumentVisibility",
            I: SetAgentStoreDocumentVisibilityRequest,
            O: SetAgentStoreDocumentVisibilityResponse,
            kind: MethodKind.Unary
        },
        mintAgentStoreToken: {
            name: "MintAgentStoreToken",
            I: MintAgentStoreTokenRequest,
            O: MintAgentStoreTokenResponse,
            kind: MethodKind.Unary
        },
        writeCanvas: {
            name: "WriteCanvas",
            I: WriteCanvasRequest,
            O: WriteCanvasResponse,
            kind: MethodKind.Unary
        },
        readCanvas: {
            name: "ReadCanvas",
            I: ReadCanvasRequest,
            O: ReadCanvasResponse,
            kind: MethodKind.Unary
        },
        listAgentStoreFiles: {
            name: "ListAgentStoreFiles",
            I: ListAgentStoreFilesRequest,
            O: ListAgentStoreFilesResponse,
            kind: MethodKind.Unary
        },
        listAgentStoreDirectory: {
            name: "ListAgentStoreDirectory",
            I: ListAgentStoreDirectoryRequest,
            O: ListAgentStoreDirectoryResponse,
            kind: MethodKind.Unary
        },
        checkAgentStoreVersions: {
            name: "CheckAgentStoreVersions",
            I: CheckAgentStoreVersionsRequest,
            O: CheckAgentStoreVersionsResponse,
            kind: MethodKind.Unary
        },
        presignAgentStoreReads: {
            name: "PresignAgentStoreReads",
            I: PresignAgentStoreReadsRequest,
            O: PresignAgentStoreReadsResponse,
            kind: MethodKind.Unary
        },
        presignAgentStoreWrites: {
            name: "PresignAgentStoreWrites",
            I: PresignAgentStoreWritesRequest,
            O: PresignAgentStoreWritesResponse,
            kind: MethodKind.Unary
        },
        completeAgentStoreMultipartWrites: {
            name: "CompleteAgentStoreMultipartWrites",
            I: CompleteAgentStoreMultipartWritesRequest,
            O: CompleteAgentStoreMultipartWritesResponse,
            kind: MethodKind.Unary
        },
        abortAgentStoreMultipartWrites: {
            name: "AbortAgentStoreMultipartWrites",
            I: AbortAgentStoreMultipartWritesRequest,
            O: AbortAgentStoreMultipartWritesResponse,
            kind: MethodKind.Unary
        },
        presignPromptUpload: {
            name: "PresignPromptUpload",
            I: PresignPromptUploadRequest,
            O: PresignPromptUploadResponse,
            kind: MethodKind.Unary
        },
        completePromptUpload: {
            name: "CompletePromptUpload",
            I: CompletePromptUploadRequest,
            O: CompletePromptUploadResponse,
            kind: MethodKind.Unary
        },
        abortPromptUpload: {
            name: "AbortPromptUpload",
            I: AbortPromptUploadRequest,
            O: AbortPromptUploadResponse,
            kind: MethodKind.Unary
        },
        acquireAgentStoreFileLock: {
            name: "AcquireAgentStoreFileLock",
            I: AcquireAgentStoreFileLockRequest,
            O: AcquireAgentStoreFileLockResponse,
            kind: MethodKind.Unary
        },
        renewAgentStoreFileLock: {
            name: "RenewAgentStoreFileLock",
            I: RenewAgentStoreFileLockRequest,
            O: RenewAgentStoreFileLockResponse,
            kind: MethodKind.Unary
        },
        releaseAgentStoreFileLock: {
            name: "ReleaseAgentStoreFileLock",
            I: ReleaseAgentStoreFileLockRequest,
            O: ReleaseAgentStoreFileLockResponse,
            kind: MethodKind.Unary
        },
        getAgentStoreFileLock: {
            name: "GetAgentStoreFileLock",
            I: GetAgentStoreFileLockRequest,
            O: GetAgentStoreFileLockResponse,
            kind: MethodKind.Unary
        },
        deleteAgentStoreFiles: {
            name: "DeleteAgentStoreFiles",
            I: DeleteAgentStoreFilesRequest,
            O: DeleteAgentStoreFilesResponse,
            kind: MethodKind.Unary
        },
        rmdirAgentStore: {
            name: "RmdirAgentStore",
            I: RmdirAgentStoreRequest,
            O: RmdirAgentStoreResponse,
            kind: MethodKind.Unary
        },
        undeleteAgentStoreFiles: {
            name: "UndeleteAgentStoreFiles",
            I: UndeleteAgentStoreFilesRequest,
            O: UndeleteAgentStoreFilesResponse,
            kind: MethodKind.Unary
        },
        listAgentStoreTombstones: {
            name: "ListAgentStoreTombstones",
            I: ListAgentStoreTombstonesRequest,
            O: ListAgentStoreTombstonesResponse,
            kind: MethodKind.Unary
        },
        shareAgentStore: {
            name: "ShareAgentStore",
            I: ShareAgentStoreRequest,
            O: ShareAgentStoreResponse,
            kind: MethodKind.Unary
        },
        unshareAgentStore: {
            name: "UnshareAgentStore",
            I: UnshareAgentStoreRequest,
            O: UnshareAgentStoreResponse,
            kind: MethodKind.Unary
        },
        listSharedAgentStores: {
            name: "ListSharedAgentStores",
            I: ListSharedAgentStoresRequest,
            O: ListSharedAgentStoresResponse,
            kind: MethodKind.Unary
        },
        provisionSyntheticsServiceAccounts: {
            name: "ProvisionSyntheticsServiceAccounts",
            I: ProvisionSyntheticsServiceAccountsRequest,
            O: ProvisionSyntheticsServiceAccountsResponse,
            kind: MethodKind.Unary
        },
        startCloudAgentLoadTest: {
            name: "StartCloudAgentLoadTest",
            I: StartCloudAgentLoadTestRequest,
            O: StartCloudAgentLoadTestResponse,
            kind: MethodKind.Unary
        },
        ensureModelRoutingLoadTestStarted: {
            name: "EnsureModelRoutingLoadTestStarted",
            I: EnsureModelRoutingLoadTestStartedRequest,
            O: EnsureModelRoutingLoadTestStartedResponse,
            kind: MethodKind.Unary
        },
        cancelModelRoutingLoadTest: {
            name: "CancelModelRoutingLoadTest",
            I: CancelModelRoutingLoadTestRequest,
            O: CancelModelRoutingLoadTestResponse,
            kind: MethodKind.Unary
        },
        mintCustomerPrivatelinkProxyToken: {
            name: "MintCustomerPrivatelinkProxyToken",
            I: MintCustomerPrivatelinkProxyTokenRequest,
            O: MintCustomerPrivatelinkProxyTokenResponse,
            kind: MethodKind.Unary
        },
        listCustomerPrivatelinkAllowedHosts: {
            name: "ListCustomerPrivatelinkAllowedHosts",
            I: ListCustomerPrivatelinkAllowedHostsRequest,
            O: ListCustomerPrivatelinkAllowedHostsResponse,
            kind: MethodKind.Unary
        },
        adminListTeamNamedAgents: {
            name: "AdminListTeamNamedAgents",
            I: AdminListTeamNamedAgentsRequest,
            O: AdminListTeamNamedAgentsResponse,
            kind: MethodKind.Unary
        },
        adminDeleteNamedAgent: {
            name: "AdminDeleteNamedAgent",
            I: AdminDeleteNamedAgentRequest,
            O: AdminDeleteNamedAgentResponse,
            kind: MethodKind.Unary
        },
        listKeyrings: {
            name: "ListKeyrings",
            I: ListKeyringsRequest,
            O: ListKeyringsResponse,
            kind: MethodKind.Unary
        },
        getKeyring: {
            name: "GetKeyring",
            I: GetKeyringRequest,
            O: GetKeyringResponse,
            kind: MethodKind.Unary
        },
        createKeyring: {
            name: "CreateKeyring",
            I: CreateKeyringRequest,
            O: CreateKeyringResponse,
            kind: MethodKind.Unary
        },
        createKeyringFromTeamSecrets: {
            name: "CreateKeyringFromTeamSecrets",
            I: CreateKeyringFromTeamSecretsRequest,
            O: CreateKeyringFromTeamSecretsResponse,
            kind: MethodKind.Unary
        },
        copyTeamSecretsToKeyring: {
            name: "CopyTeamSecretsToKeyring",
            I: CopyTeamSecretsToKeyringRequest,
            O: CopyTeamSecretsToKeyringResponse,
            kind: MethodKind.Unary
        },
        renameKeyring: {
            name: "RenameKeyring",
            I: RenameKeyringRequest,
            O: RenameKeyringResponse,
            kind: MethodKind.Unary
        },
        deleteKeyring: {
            name: "DeleteKeyring",
            I: DeleteKeyringRequest,
            O: DeleteKeyringResponse,
            kind: MethodKind.Unary
        },
        listKeyringSecrets: {
            name: "ListKeyringSecrets",
            I: ListKeyringSecretsRequest,
            O: ListKeyringSecretsResponse,
            kind: MethodKind.Unary
        },
        createKeyringSecret: {
            name: "CreateKeyringSecret",
            I: CreateKeyringSecretRequest,
            O: CreateKeyringSecretResponse,
            kind: MethodKind.Unary
        },
        updateKeyringSecret: {
            name: "UpdateKeyringSecret",
            I: UpdateKeyringSecretRequest,
            O: UpdateKeyringSecretResponse,
            kind: MethodKind.Unary
        },
        revokeKeyringSecret: {
            name: "RevokeKeyringSecret",
            I: RevokeKeyringSecretRequest,
            O: RevokeKeyringSecretResponse,
            kind: MethodKind.Unary
        },
        listKeyringGrants: {
            name: "ListKeyringGrants",
            I: ListKeyringGrantsRequest,
            O: ListKeyringGrantsResponse,
            kind: MethodKind.Unary
        },
        grantKeyringPermissions: {
            name: "GrantKeyringPermissions",
            I: GrantKeyringPermissionsRequest,
            O: GrantKeyringPermissionsResponse,
            kind: MethodKind.Unary
        },
        updateKeyringPermissions: {
            name: "UpdateKeyringPermissions",
            I: UpdateKeyringPermissionsRequest,
            O: UpdateKeyringPermissionsResponse,
            kind: MethodKind.Unary
        },
        revokeKeyringPermissions: {
            name: "RevokeKeyringPermissions",
            I: RevokeKeyringPermissionsRequest,
            O: RevokeKeyringPermissionsResponse,
            kind: MethodKind.Unary
        }
    }
};

}
