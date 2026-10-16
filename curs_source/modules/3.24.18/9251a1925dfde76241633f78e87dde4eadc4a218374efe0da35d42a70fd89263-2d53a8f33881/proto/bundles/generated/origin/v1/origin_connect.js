import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { BatchGetRepoContentResponse, BlameChunk, CanMergeResponse, CommitDiff2Chunk, CommitDiffChunk, CompareCommitsResponse, GetBlobResponse, GetCommitChangedPathsResponse, GetCommitDiffStatsResponse, GetCommitResponse, GetFileHistoryPageWithDiffStatsResponse, GetFileHistoryResponse, GetFuzzyPathsResponse, GetRepoContentDetailsResponse, GetRepoContentResponse, GetTagResponse, GetTreeBlameResponse, GetTreeResponse, GrepRepoChunk, ListCommitsInRangeResponse, ListRefsResponse, ListTreePathsResponse, LookupCommitsResponse, PullRequestDiffChunk, ResolveRefPathResponse, SearchRefsResponse, init_rpc_pb } from "../../git_forge/v1/rpc_pb.js";
import { AcceptShareInviteRequest, AcceptShareInviteResponse, CreateRepoShareBatchInvitesRequest, CreateRepoShareBatchInvitesResponse, CreateRepoShareInviteRequest, CreateRepoShareInviteResponse, DeclineShareInviteRequest, DeclineShareInviteResponse, GetNamespaceTeamAccessRequest, GetNamespaceTeamAccessResponse, GetRepoTeamAccessRequest, GetRepoTeamAccessResponse, GetShareInviteByTokenRequest, GetShareInviteByTokenResponse, HasOriginPermissionRequest, HasOriginPermissionResponse, LeaveMyExternalRepositoryRequest, LeaveMyExternalRepositoryResponse, ListGroupGrantsInNamespaceRequest, ListGroupGrantsInNamespaceResponse, ListMyExternalRepositoriesRequest, ListMyExternalRepositoriesResponse, ListMyShareInvitesRequest, ListMyShareInvitesResponse, ListNamespaceAssignablePoliciesRequest, ListNamespaceAssignablePoliciesResponse, ListNamespaceGrantsRequest, ListNamespaceGrantsResponse, ListRepoAssignablePoliciesRequest, ListRepoAssignablePoliciesResponse, ListRepoExternalCollaboratorsRequest, ListRepoExternalCollaboratorsResponse, ListRepoGrantsRequest, ListRepoGrantsResponse, ListRepoShareInvitesRequest, ListRepoShareInvitesResponse, RevokeRepoShareInviteRequest, RevokeRepoShareInviteResponse, SetNamespaceGroupAccessRequest, SetNamespaceGroupAccessResponse, SetNamespaceTeamAccessRequest, SetNamespaceTeamAccessResponse, SetNamespaceUserAccessRequest, SetNamespaceUserAccessResponse, SetRepoExternalCollaboratorAccessRequest, SetRepoExternalCollaboratorAccessResponse, SetRepoGroupAccessRequest, SetRepoGroupAccessResponse, SetRepoTeamAccessRequest, SetRepoTeamAccessResponse, SetRepoUserAccessRequest, SetRepoUserAccessResponse, UpdateRepoShareInviteRequest, UpdateRepoShareInviteResponse, init_access_pb } from "./access_pb.js";
import { AddAppSigningKeyRequest, AddAppSigningKeyResponse, CancelMyAppInstallRequestRequest, CancelMyAppInstallRequestResponse, ConfirmAppUserConfirmationRequest, ConfirmAppUserConfirmationResponse, CreateAppRequest, CreateAppResponse, CreateInstallationRequest, CreateInstallationResponse, DeleteAppRequest, DeleteAppResponse, DeleteInstallationRequest, DeleteInstallationResponse, DenyAppInstallRequestsRequest, DenyAppInstallRequestsResponse, GetAppMetadataRequest, GetAppMetadataResponse, GetAppRequest, GetAppResponse, GetInstallationRequest, GetInstallationResponse, GetMyAppInstallRequestRequest, GetMyAppInstallRequestResponse, ListAppInstallRequestsRequest, ListAppInstallRequestsResponse, ListNamespaceAppsRequest, ListNamespaceAppsResponse, ListNamespaceInstallationsRequest, ListNamespaceInstallationsResponse, ListPublicAppsRequest, ListPublicAppsResponse, ListRepoInstallationsRequest, ListRepoInstallationsResponse, PreviewAppInstallationRequest, PreviewAppInstallationResponse, PreviewAppUserConfirmationRequest, PreviewAppUserConfirmationResponse, RequestAppInstallRequest, RequestAppInstallResponse, RevokeAppSigningKeyRequest, RevokeAppSigningKeyResponse, SendAppWebhookTestDeliveryRequest, SendAppWebhookTestDeliveryResponse, SetAppIconRequest, SetAppIconResponse, SetAppWebhookDeliveryEnabledRequest, SetAppWebhookDeliveryEnabledResponse, SuspendInstallationRequest, SuspendInstallationResponse, UnsuspendInstallationRequest, UnsuspendInstallationResponse, UpdateAppRequest, UpdateAppResponse, init_app_pb } from "./app_pb.js";
import { GetAtlasNodeRequest, GetAtlasNodeResponse, GetAtlasRepoStatusRequest, GetAtlasRepoStatusResponse, ListAtlasNodePathsRequest, ListAtlasNodePathsResponse, RefreshAtlasRepoRequest, RefreshAtlasRepoResponse, SetAtlasRepoConfigRequest, SetAtlasRepoConfigResponse, init_atlas_pb } from "./atlas_pb.js";
import { AddAssigneeRequest, AddAssigneeResponse, ApplyReviewRequestChangesRequest, ApplyReviewRequestChangesResponse, BatchGetChangesRequest, BatchGetChangesResponse, CheckChangeCreationAccessRequest, CheckChangeCreationAccessResponse, CloseReviewRequestRequest, CloseReviewRequestResponse, CountSectionsOfChangesRequest, CountSectionsOfChangesResponse, CreateChangeRequest, CreateChangeResponse, CreateCommentRequest, CreateCommentResponse, CreateReviewRequest, CreateReviewResponse, DeleteChangeHeadBranchRequest, DeleteChangeHeadBranchResponse, DiscardPendingReviewRequest, DiscardPendingReviewResponse, DismissReviewRequest, DismissReviewResponse, FoldChangeRequest, FoldChangeResponse, GetChangeCodeownersApplicationRequest, GetChangeCodeownersApplicationResponse, GetChangeRequest, GetChangeResponse, GetChangeStackRequest, GetChangeStackResponse, GetCommitReferencesRequest, GetCommitReferencesResponse, GetPendingReviewRequest, GetPendingReviewResponse, GetProjectedLatestVersionsRequest, GetProjectedLatestVersionsResponse, GetSectionOfChangesRequest, GetSectionOfChangesResponse, LandChangeTreePathRequest, LandChangeTreePathResponse, ListChangeCommitsRequest, ListChangeCommitsResponse, ListChangeTimelineEventsRequest, ListChangeTimelineEventsResponse, ListChangesByHeadRefRequest, ListChangesByHeadRefResponse, ListChangesRequest, ListChangesResponse, ListCommentsRequest, ListCommentsResponse, ListOriginRepoReviewerCandidatesRequest, ListOriginRepoReviewerCandidatesResponse, ListPullRequestGateReportsRequest, ListPullRequestGateReportsResponse, ListReviewRequestEventsRequest, ListReviewRequestEventsResponse, ListReviewsRequest, ListReviewsResponse, RemoveAssigneeRequest, RemoveAssigneeResponse, RequestReviewRequest, RequestReviewResponse, RequestReviewsRequest, RequestReviewsResponse, ResolveSectionPersonalBotAuthorsRequest, ResolveSectionPersonalBotAuthorsResponse, RestorePullRequestBranchRequest, RestorePullRequestBranchResponse, RetargetChangeRequest, RetargetChangeResponse, RevertPullRequestRequest, RevertPullRequestResponse, SearchChangesRequest, SearchChangesResponse, SplitChangeIntoStackRequest, SplitChangeIntoStackResponse, StartReviewRequest, StartReviewResponse, SubmitPullRequestGateReportRequest, SubmitPullRequestGateReportResponse, SubmitReviewRequest, SubmitReviewResponse, UpdateChangeBranchRequest, UpdateChangeBranchResponse, UpdateChangeMetadataRequest, UpdateChangeMetadataResponse, UpdateChangeRequest, UpdateChangeResponse, UpdateChangeStatusRequest, UpdateChangeStatusResponse, UpdateReviewRequest, UpdateReviewResponse, UploadPullRequestGateTranscriptRequest, UploadPullRequestGateTranscriptResponse, init_change_pb } from "./change_pb.js";
import { BatchGetCommitCheckRollupsRequest, BatchGetCommitCheckRollupsResponse, CreateCheckRunAnnotationsRequest, CreateCheckRunAnnotationsResponse, GetChangesetMergeabilityRequest, GetChangesetMergeabilityResponse, GetCheckRunRequest, GetCheckRunResponse, GetCiStateRequest, GetCiStateResponse, GetOriginCiJobLogRequest, GetOriginCiJobLogResponse, ListCheckRunAnnotationsRequest, ListCheckRunAnnotationsResponse, ListRepoCheckSourcesRequest, ListRepoCheckSourcesResponse, MergeStackRequest, MergeStackResponse, PostCheckRunRequest, PostCheckRunResponse, RerequestCheckRunRequest, RerequestCheckRunResponse, RestackStackRequest, RestackStackResponse, init_ci_pb } from "./ci_pb.js";
import { FindCodeIntelligenceReferencesAtPositionRequest, FindCodeIntelligenceReferencesAtPositionResponse, ResolveCodeIntelligenceSymbolAtPositionRequest, ResolveCodeIntelligenceSymbolAtPositionResponse, init_code_intelligence_pb } from "./code_intelligence_pb.js";
import { AddCommentToThreadRequest, AddCommentToThreadResponse, CreateCommentThreadRequest, CreateCommentThreadResponse, DeleteCommentRequest, DeleteCommentResponse, ListCommentReactionsRequest, ListCommentReactionsResponse, ListCommentThreadsRequest, ListCommentThreadsResponse, ReopenCommentThreadRequest, ReopenCommentThreadResponse, ResolveCommentThreadRequest, ResolveCommentThreadResponse, SetCommentReactionRequest, SetCommentReactionResponse, UpdateCommentRequest, UpdateCommentResponse, init_comment_thread_pb } from "./comment_thread_pb.js";
import { GetOriginCommitEmailVerificationRequest, GetOriginCommitEmailVerificationResponse, StartOriginCommitEmailVerificationRequest, StartOriginCommitEmailVerificationResponse, init_commit_email_verification_pb } from "./commit_email_verification_pb.js";
import { GetDiffEngineInfoClientRequest, GetDiffFileClientRequest, GetDiffListingClientRequest, OriginDiffEnvelope, PortAnchorsClientRequest, StreamDiffFilesClientRequest, init_diff_relay_pb } from "./diff_relay_pb.js";
import { ListFileViewedStatesRequest, ListFileViewedStatesResponse, MarkAllFilesAsViewedRequest, MarkAllFilesAsViewedResponse, MarkDirectoryAsViewedRequest, MarkDirectoryAsViewedResponse, MarkFileAsViewedRequest, MarkFileAsViewedResponse, UnmarkAllFilesAsViewedRequest, UnmarkAllFilesAsViewedResponse, UnmarkFileAsViewedRequest, UnmarkFileAsViewedResponse, init_file_viewed_state_pb } from "./file_viewed_state_pb.js";
import { GetGeneratedCodeTourRequest, GetGeneratedCodeTourResponse, UpsertGeneratedCodeTourRequest, UpsertGeneratedCodeTourResponse, init_generated_code_tour_pb } from "./generated_code_tour_pb.js";
import { BatchGetRepoContentAtShaClientRequest, CanMergeClientRequest, CompareCommitsClientRequest, CreateCommitFromFilesClientRequest, CreateCommitFromFilesClientResponse, FastForwardBranchClientRequest, FastForwardBranchClientResponse, GetBlameClientRequest, GetBlobClientRequest, GetCollectedPullRequestDiffRequest, GetCollectedPullRequestDiffResponse, GetCommitActivityClientRequest, GetCommitActivityClientResponse, GetCommitChangedPathsClientRequest, GetCommitClientRequest, GetCommitDiff2ClientRequest, GetCommitDiffClientRequest, GetCommitDiffStatsClientRequest, GetFileHistoryClientRequest, GetFileHistoryPageClientRequest, GetFileHistoryPageResponse, GetFileHistoryPageWithDiffStatsClientRequest, GetFuzzyPathsClientRequest, GetGithubRepoCodeownersClientRequest, GetGithubRepoCodeownersResponse, GetPullRequestDiffClientRequest, GetRepoCodeownersClientRequest, GetRepoCodeownersResponse, GetRepoContentAtShaClientRequest, GetRepoContentClientRequest, GetRepoContentDetailsAtShaClientRequest, GetRepoTarballClientRequest, GetRepoTarballClientResponse, GetTagClientRequest, GetTreeBlameClientRequest, GetTreeClientRequest, GrepRepoClientRequest, ListCommitsInRangeClientRequest, ListRefsClientRequest, ListRepoPathsClientRequest, LookupCommitsClientRequest, MintRawRepoFileLinkClientRequest, MintRawRepoFileLinkClientResponse, ResolveRepoPathClientRequest, SearchRefsClientRequest, init_git_operations_pb } from "./git_operations_pb.js";
import { GithubOutageDrillProbeRequest, GithubOutageDrillProbeResponse, init_github_outage_drill_pb } from "./github_outage_drill_pb.js";
import { AddLabelToChangeRequest, AddLabelToChangeResponse, CreateLabelRequest, CreateLabelResponse, DeleteLabelRequest, DeleteLabelResponse, GetLabelByNameRequest, GetLabelByNameResponse, ListLabelsRequest, ListLabelsResponse, RemoveLabelFromChangeRequest, RemoveLabelFromChangeResponse, UpdateLabelRequest, UpdateLabelResponse, init_label_pb } from "./label_pb.js";
import { ApplyMergeConflictResolutionRequest, ApplyMergeConflictResolutionResponse, GetMergeConflictResolutionRequest, GetMergeConflictResolutionResponse, UndoMergeConflictResolutionRequest, UndoMergeConflictResolutionResponse, init_merge_conflict_resolution_pb } from "./merge_conflict_resolution_pb.js";
import { CancelMergeQueueEntryRequest, CancelMergeQueueEntryResponse, DisableMergeQueueRequest, DisableMergeQueueResponse, EnableMergeQueueRequest, EnableMergeQueueResponse, EnqueueForMergeRequest, EnqueueForMergeResponse, GetMergeQueueConfigRequest, GetMergeQueueConfigResponse, GetMergeQueueRequest, GetMergeQueueResponse, GetMergeQueueStatusRequest, GetMergeQueueStatusResponse, UpdateMergeQueueConfigRequest, UpdateMergeQueueConfigResponse, init_merge_queue_pb } from "./merge_queue_pb.js";
import { DisableChangeMergeWhenReadyRequest, DisableChangeMergeWhenReadyResponse, EnableChangeMergeWhenReadyRequest, EnableChangeMergeWhenReadyResponse, GetChangeMergeWhenReadyRequest, GetChangeMergeWhenReadyResponse, init_merge_when_ready_pb } from "./merge_when_ready_pb.js";
import { AddNamespaceInboundIpAllowlistEntryRequest, AddNamespaceInboundIpAllowlistEntryResponse, DeleteNamespaceInboundIpAllowlistEntryRequest, DeleteNamespaceInboundIpAllowlistEntryResponse, GetNamespaceInboundIpAllowlistRequest, GetNamespaceInboundIpAllowlistResponse, SetNamespaceInboundIpAllowlistEnabledRequest, SetNamespaceInboundIpAllowlistEnabledResponse, UpdateNamespaceInboundIpAllowlistEntryRequest, UpdateNamespaceInboundIpAllowlistEntryResponse, init_namespace_inbound_ip_allowlist_pb } from "./namespace_inbound_ip_allowlist_pb.js";
import { AddNamespaceSshCertificateAuthorityRequest, AddNamespaceSshCertificateAuthorityResponse, GetNamespaceSshCertificateAuthoritiesRequest, GetNamespaceSshCertificateAuthoritiesResponse, RemoveNamespaceSshCertificateAuthorityRequest, RemoveNamespaceSshCertificateAuthorityResponse, SetNamespaceSshRequireCertificatesRequest, SetNamespaceSshRequireCertificatesResponse, init_namespace_ssh_certificate_authority_pb } from "./namespace_ssh_certificate_authority_pb.js";
import { ImportGithubPullRequestRequest, ImportGithubPullRequestResponse, init_pull_request_import_pb } from "./pull_request_import_pb.js";
import { MarkPullRequestAsViewedRequest, MarkPullRequestAsViewedResponse, init_pull_request_viewed_state_pb } from "./pull_request_viewed_state_pb.js";
import { CreateMirroredRepoRequest, CreateOriginNamespaceRequest, CreateOriginNamespaceResponse, CreateRepoMirrorDeployKeyRequest, CreateRepoMirrorDeployKeyResponse, CreateRepoRequest, CreateRepoResponse, DeleteMirroredRepoRequest, DeleteMirroredRepoResponse, DeleteRepoClientRequest, DeleteRepoClientResponse, DeleteRepoMirrorDeployKeyRequest, DeleteRepoMirrorDeployKeyResponse, DetachRepoMirrorRequest, DetachRepoMirrorResponse, DoesNamespaceExistForTeamRequest, DoesNamespaceExistForTeamResponse, FilterMirrorableGithubReposRequest, FilterMirrorableGithubReposResponse, ForceRepoMirrorCutoverRequest, ForceRepoMirrorCutoverResponse, GetActiveMirrorTransitionJobRequest, GetActiveMirrorTransitionJobResponse, GetAuthorizedNamespacesRequest, GetAuthorizedNamespacesResponse, GetMirrorTransitionJobRequest, GetMirrorTransitionJobResponse, GetRepoByGithubMirrorRequest, GetRepoMirrorDeployKeyRequest, GetRepoMirrorDeployKeyResponse, GetRepoNamespaceRequest, GetRepoNamespaceResponse, GetRepoRequest, GetRepoResponse, GetRepoWithMirrorInfoResponse, ListHostedReposRequest, ListHostedReposResponse, ListRepoCloneKitsRequest, ListRepoCloneKitsResponse, ListReposForAppInstallRequest, PublishAgentTempRepoRequest, PublishAgentTempRepoResponse, ReattachRepoMirrorRequest, ReattachRepoMirrorResponse, RecordCloneKitUsageRequest, RecordCloneKitUsageResponse, SetupTeamNamespaceRequest, SetupTeamNamespaceResponse, SetupUserNamespaceRequest, SetupUserNamespaceResponse, SuggestOriginNamespaceRequest, SuggestOriginNamespaceResponse, SyncMirrorRequest, SyncMirrorResponse, TransitionRepoMirrorStatusRequest, TransitionRepoMirrorStatusResponse, UpdateRepoBranchDeletionSettingRequest, UpdateRepoBranchDeletionSettingResponse, UpdateRepoDefaultBranchRequest, UpdateRepoDefaultBranchResponse, UpdateRepoMergeSettingsRequest, UpdateRepoMergeSettingsResponse, UpdateRepoVisibilityRequest, UpdateRepoVisibilityResponse, init_repo_pb2 } from "./repo_pb.js";
import { GetReviewRequirementsRequest, GetReviewRequirementsResponse, init_review_requirements_pb } from "./review_requirements_pb.js";
import { DeleteRulesetRequest, DeleteRulesetResponse, GetRulesetRequest, GetRulesetResponse, ListRulesetsRequest, ListRulesetsResponse, UpsertRulesetRequest, UpsertRulesetResponse, init_ruleset_pb } from "./ruleset_pb.js";
import { ListOriginSlackChannelSubscriptionsRequest, ListOriginSlackChannelSubscriptionsResponse, SubscribeOriginSlackChannelRequest, SubscribeOriginSlackChannelResponse, UnsubscribeOriginSlackChannelRequest, UnsubscribeOriginSlackChannelResponse, init_slack_channel_subscription_pb } from "./slack_channel_subscription_pb.js";
import { DeleteOriginUserSlackNotificationRequest, DeleteOriginUserSlackNotificationResponse, GetOriginUserSlackNotificationRequest, GetOriginUserSlackNotificationResponse, UpsertOriginUserSlackNotificationRequest, UpsertOriginUserSlackNotificationResponse, init_slack_notification_pb } from "./slack_notification_pb.js";
import { CreateOriginUserSlackReviewReminderRequest, CreateOriginUserSlackReviewReminderResponse, DisableOriginUserSlackReviewReminderRequest, DisableOriginUserSlackReviewReminderResponse, GetOriginUserSlackReviewReminderRequest, GetOriginUserSlackReviewReminderResponse, ListOriginUserSlackReviewRemindersRequest, ListOriginUserSlackReviewRemindersResponse, UpdateOriginUserSlackReviewReminderRequest, UpdateOriginUserSlackReviewReminderResponse, init_slack_review_reminder_pb } from "./slack_review_reminder_pb.js";
import { AddSshPublicKeyRequest, AddSshPublicKeyResponse, DeleteSshPublicKeyRequest, DeleteSshPublicKeyResponse, ListSshPublicKeysRequest, ListSshPublicKeysResponse, init_ssh_public_key_pb } from "./ssh_public_key_pb.js";
import { GetChangeStackPageDataRequest, GetChangeStackPageDataResponse, init_stack_page_pb } from "./stack_page_pb.js";
import { UpdateWatchChangeSyncSubscriptionsRequest, UpdateWatchChangeSyncSubscriptionsResponse, WatchChangeSyncEventsRequest, WatchChangeSyncEventsResponse, WatchChangeSyncEventsV2Request, WatchChangeSyncEventsV2Response, init_sync_pb } from "./sync_pb.js";
import { GetChangeSyncSnapshotRequest, GetChangeSyncSnapshotResponse, init_sync_snapshot_pb } from "./sync_snapshot_pb.js";
var OriginService;
export { OriginService };
var __wakaru_init_origin_connect_initialized = false;
export function init_origin_connect() {
if (__wakaru_init_origin_connect_initialized) return;
__wakaru_init_origin_connect_initialized = true;
"use strict";
init_repo_pb2();
init_esm2();
init_access_pb();
init_namespace_ssh_certificate_authority_pb();
init_namespace_inbound_ip_allowlist_pb();
init_ssh_public_key_pb();
init_slack_notification_pb();
init_commit_email_verification_pb();
init_slack_review_reminder_pb();
init_slack_channel_subscription_pb();
init_git_operations_pb();
init_rpc_pb();
init_code_intelligence_pb();
init_diff_relay_pb();
init_change_pb();
init_pull_request_import_pb();
init_merge_conflict_resolution_pb();
init_comment_thread_pb();
init_file_viewed_state_pb();
init_pull_request_viewed_state_pb();
init_generated_code_tour_pb();
init_merge_when_ready_pb();
init_merge_queue_pb();
init_stack_page_pb();
init_ci_pb();
init_review_requirements_pb();
init_app_pb();
init_atlas_pb();
init_ruleset_pb();
init_label_pb();
init_sync_pb();
init_sync_snapshot_pb();
init_github_outage_drill_pb();
OriginService = {
    typeName: "origin.v1.OriginService",
    methods: {
        listHostedRepos: {
            name: "ListHostedRepos",
            I: ListHostedReposRequest,
            O: ListHostedReposResponse,
            kind: MethodKind.Unary
        },
        createRepo: {
            name: "CreateRepo",
            I: CreateRepoRequest,
            O: CreateRepoResponse,
            kind: MethodKind.Unary
        },
        createRepoAndEnsureUserNamespace: {
            name: "CreateRepoAndEnsureUserNamespace",
            I: CreateRepoRequest,
            O: CreateRepoResponse,
            kind: MethodKind.Unary
        },
        publishAgentTempRepo: {
            name: "PublishAgentTempRepo",
            I: PublishAgentTempRepoRequest,
            O: PublishAgentTempRepoResponse,
            kind: MethodKind.Unary
        },
        createMirroredRepo: {
            name: "CreateMirroredRepo",
            I: CreateMirroredRepoRequest,
            O: CreateRepoResponse,
            kind: MethodKind.Unary
        },
        filterMirrorableGithubRepos: {
            name: "FilterMirrorableGithubRepos",
            I: FilterMirrorableGithubReposRequest,
            O: FilterMirrorableGithubReposResponse,
            kind: MethodKind.Unary
        },
        deleteRepo: {
            name: "DeleteRepo",
            I: DeleteRepoClientRequest,
            O: DeleteRepoClientResponse,
            kind: MethodKind.Unary
        },
        deleteMirroredRepo: {
            name: "DeleteMirroredRepo",
            I: DeleteMirroredRepoRequest,
            O: DeleteMirroredRepoResponse,
            kind: MethodKind.Unary
        },
        getRepo: {
            name: "GetRepo",
            I: GetRepoRequest,
            O: GetRepoResponse,
            kind: MethodKind.Unary
        },
        getRepoWithMirrorInfo: {
            name: "GetRepoWithMirrorInfo",
            I: GetRepoRequest,
            O: GetRepoWithMirrorInfoResponse,
            kind: MethodKind.Unary
        },
        getRepoByGithubMirror: {
            name: "GetRepoByGithubMirror",
            I: GetRepoByGithubMirrorRequest,
            O: GetRepoWithMirrorInfoResponse,
            kind: MethodKind.Unary
        },
        recordCloneKitUsage: {
            name: "RecordCloneKitUsage",
            I: RecordCloneKitUsageRequest,
            O: RecordCloneKitUsageResponse,
            kind: MethodKind.Unary
        },
        updateRepoMergeSettings: {
            name: "UpdateRepoMergeSettings",
            I: UpdateRepoMergeSettingsRequest,
            O: UpdateRepoMergeSettingsResponse,
            kind: MethodKind.Unary
        },
        updateRepoBranchDeletionSetting: {
            name: "UpdateRepoBranchDeletionSetting",
            I: UpdateRepoBranchDeletionSettingRequest,
            O: UpdateRepoBranchDeletionSettingResponse,
            kind: MethodKind.Unary
        },
        listRepoCloneKits: {
            name: "ListRepoCloneKits",
            I: ListRepoCloneKitsRequest,
            O: ListRepoCloneKitsResponse,
            kind: MethodKind.Unary
        },
        updateRepoVisibility: {
            name: "UpdateRepoVisibility",
            I: UpdateRepoVisibilityRequest,
            O: UpdateRepoVisibilityResponse,
            kind: MethodKind.Unary
        },
        updateRepoDefaultBranch: {
            name: "UpdateRepoDefaultBranch",
            I: UpdateRepoDefaultBranchRequest,
            O: UpdateRepoDefaultBranchResponse,
            kind: MethodKind.Unary
        },
        detachRepoMirror: {
            name: "DetachRepoMirror",
            I: DetachRepoMirrorRequest,
            O: DetachRepoMirrorResponse,
            kind: MethodKind.Unary
        },
        reattachRepoMirror: {
            name: "ReattachRepoMirror",
            I: ReattachRepoMirrorRequest,
            O: ReattachRepoMirrorResponse,
            kind: MethodKind.Unary
        },
        transitionRepoMirrorStatus: {
            name: "TransitionRepoMirrorStatus",
            I: TransitionRepoMirrorStatusRequest,
            O: TransitionRepoMirrorStatusResponse,
            kind: MethodKind.Unary
        },
        forceRepoMirrorCutover: {
            name: "ForceRepoMirrorCutover",
            I: ForceRepoMirrorCutoverRequest,
            O: ForceRepoMirrorCutoverResponse,
            kind: MethodKind.Unary
        },
        syncMirror: {
            name: "SyncMirror",
            I: SyncMirrorRequest,
            O: SyncMirrorResponse,
            kind: MethodKind.Unary
        },
        createRepoMirrorDeployKey: {
            name: "CreateRepoMirrorDeployKey",
            I: CreateRepoMirrorDeployKeyRequest,
            O: CreateRepoMirrorDeployKeyResponse,
            kind: MethodKind.Unary
        },
        getRepoMirrorDeployKey: {
            name: "GetRepoMirrorDeployKey",
            I: GetRepoMirrorDeployKeyRequest,
            O: GetRepoMirrorDeployKeyResponse,
            kind: MethodKind.Unary
        },
        deleteRepoMirrorDeployKey: {
            name: "DeleteRepoMirrorDeployKey",
            I: DeleteRepoMirrorDeployKeyRequest,
            O: DeleteRepoMirrorDeployKeyResponse,
            kind: MethodKind.Unary
        },
        getMirrorTransitionJob: {
            name: "GetMirrorTransitionJob",
            I: GetMirrorTransitionJobRequest,
            O: GetMirrorTransitionJobResponse,
            kind: MethodKind.Unary
        },
        getActiveMirrorTransitionJob: {
            name: "GetActiveMirrorTransitionJob",
            I: GetActiveMirrorTransitionJobRequest,
            O: GetActiveMirrorTransitionJobResponse,
            kind: MethodKind.Unary
        },
        getRepoNamespace: {
            name: "GetRepoNamespace",
            I: GetRepoNamespaceRequest,
            O: GetRepoNamespaceResponse,
            kind: MethodKind.Unary
        },
        doesNamespaceExistForTeam: {
            name: "DoesNamespaceExistForTeam",
            I: DoesNamespaceExistForTeamRequest,
            O: DoesNamespaceExistForTeamResponse,
            kind: MethodKind.Unary
        },
        getAuthorizedNamespaces: {
            name: "GetAuthorizedNamespaces",
            I: GetAuthorizedNamespacesRequest,
            O: GetAuthorizedNamespacesResponse,
            kind: MethodKind.Unary
        },
        createOriginNamespace: {
            name: "CreateOriginNamespace",
            I: CreateOriginNamespaceRequest,
            O: CreateOriginNamespaceResponse,
            kind: MethodKind.Unary
        },
        setupTeamNamespace: {
            name: "SetupTeamNamespace",
            I: SetupTeamNamespaceRequest,
            O: SetupTeamNamespaceResponse,
            kind: MethodKind.Unary
        },
        setupUserNamespace: {
            name: "SetupUserNamespace",
            I: SetupUserNamespaceRequest,
            O: SetupUserNamespaceResponse,
            kind: MethodKind.Unary
        },
        suggestOriginNamespace: {
            name: "SuggestOriginNamespace",
            I: SuggestOriginNamespaceRequest,
            O: SuggestOriginNamespaceResponse,
            kind: MethodKind.Unary
        },
        listRepoAssignablePolicies: {
            name: "ListRepoAssignablePolicies",
            I: ListRepoAssignablePoliciesRequest,
            O: ListRepoAssignablePoliciesResponse,
            kind: MethodKind.Unary
        },
        getRepoTeamAccess: {
            name: "GetRepoTeamAccess",
            I: GetRepoTeamAccessRequest,
            O: GetRepoTeamAccessResponse,
            kind: MethodKind.Unary
        },
        listRepoGrants: {
            name: "ListRepoGrants",
            I: ListRepoGrantsRequest,
            O: ListRepoGrantsResponse,
            kind: MethodKind.Unary
        },
        setRepoTeamAccess: {
            name: "SetRepoTeamAccess",
            I: SetRepoTeamAccessRequest,
            O: SetRepoTeamAccessResponse,
            kind: MethodKind.Unary
        },
        setRepoUserAccess: {
            name: "SetRepoUserAccess",
            I: SetRepoUserAccessRequest,
            O: SetRepoUserAccessResponse,
            kind: MethodKind.Unary
        },
        createRepoShareInvite: {
            name: "CreateRepoShareInvite",
            I: CreateRepoShareInviteRequest,
            O: CreateRepoShareInviteResponse,
            kind: MethodKind.Unary
        },
        createRepoShareBatchInvites: {
            name: "CreateRepoShareBatchInvites",
            I: CreateRepoShareBatchInvitesRequest,
            O: CreateRepoShareBatchInvitesResponse,
            kind: MethodKind.Unary
        },
        updateRepoShareInvite: {
            name: "UpdateRepoShareInvite",
            I: UpdateRepoShareInviteRequest,
            O: UpdateRepoShareInviteResponse,
            kind: MethodKind.Unary
        },
        revokeRepoShareInvite: {
            name: "RevokeRepoShareInvite",
            I: RevokeRepoShareInviteRequest,
            O: RevokeRepoShareInviteResponse,
            kind: MethodKind.Unary
        },
        listRepoShareInvites: {
            name: "ListRepoShareInvites",
            I: ListRepoShareInvitesRequest,
            O: ListRepoShareInvitesResponse,
            kind: MethodKind.Unary
        },
        getShareInviteByToken: {
            name: "GetShareInviteByToken",
            I: GetShareInviteByTokenRequest,
            O: GetShareInviteByTokenResponse,
            kind: MethodKind.Unary
        },
        declineShareInvite: {
            name: "DeclineShareInvite",
            I: DeclineShareInviteRequest,
            O: DeclineShareInviteResponse,
            kind: MethodKind.Unary
        },
        acceptShareInvite: {
            name: "AcceptShareInvite",
            I: AcceptShareInviteRequest,
            O: AcceptShareInviteResponse,
            kind: MethodKind.Unary
        },
        listMyShareInvites: {
            name: "ListMyShareInvites",
            I: ListMyShareInvitesRequest,
            O: ListMyShareInvitesResponse,
            kind: MethodKind.Unary
        },
        listMyExternalRepositories: {
            name: "ListMyExternalRepositories",
            I: ListMyExternalRepositoriesRequest,
            O: ListMyExternalRepositoriesResponse,
            kind: MethodKind.Unary
        },
        leaveMyExternalRepository: {
            name: "LeaveMyExternalRepository",
            I: LeaveMyExternalRepositoryRequest,
            O: LeaveMyExternalRepositoryResponse,
            kind: MethodKind.Unary
        },
        setRepoGroupAccess: {
            name: "SetRepoGroupAccess",
            I: SetRepoGroupAccessRequest,
            O: SetRepoGroupAccessResponse,
            kind: MethodKind.Unary
        },
        hasOriginPermission: {
            name: "HasOriginPermission",
            I: HasOriginPermissionRequest,
            O: HasOriginPermissionResponse,
            kind: MethodKind.Unary
        },
        getNamespaceTeamAccess: {
            name: "GetNamespaceTeamAccess",
            I: GetNamespaceTeamAccessRequest,
            O: GetNamespaceTeamAccessResponse,
            kind: MethodKind.Unary
        },
        setNamespaceTeamAccess: {
            name: "SetNamespaceTeamAccess",
            I: SetNamespaceTeamAccessRequest,
            O: SetNamespaceTeamAccessResponse,
            kind: MethodKind.Unary
        },
        listNamespaceGrants: {
            name: "ListNamespaceGrants",
            I: ListNamespaceGrantsRequest,
            O: ListNamespaceGrantsResponse,
            kind: MethodKind.Unary
        },
        setNamespaceUserAccess: {
            name: "SetNamespaceUserAccess",
            I: SetNamespaceUserAccessRequest,
            O: SetNamespaceUserAccessResponse,
            kind: MethodKind.Unary
        },
        setNamespaceGroupAccess: {
            name: "SetNamespaceGroupAccess",
            I: SetNamespaceGroupAccessRequest,
            O: SetNamespaceGroupAccessResponse,
            kind: MethodKind.Unary
        },
        listNamespaceAssignablePolicies: {
            name: "ListNamespaceAssignablePolicies",
            I: ListNamespaceAssignablePoliciesRequest,
            O: ListNamespaceAssignablePoliciesResponse,
            kind: MethodKind.Unary
        },
        listGroupGrantsInNamespace: {
            name: "ListGroupGrantsInNamespace",
            I: ListGroupGrantsInNamespaceRequest,
            O: ListGroupGrantsInNamespaceResponse,
            kind: MethodKind.Unary
        },
        getNamespaceSshCertificateAuthorities: {
            name: "GetNamespaceSshCertificateAuthorities",
            I: GetNamespaceSshCertificateAuthoritiesRequest,
            O: GetNamespaceSshCertificateAuthoritiesResponse,
            kind: MethodKind.Unary
        },
        addNamespaceSshCertificateAuthority: {
            name: "AddNamespaceSshCertificateAuthority",
            I: AddNamespaceSshCertificateAuthorityRequest,
            O: AddNamespaceSshCertificateAuthorityResponse,
            kind: MethodKind.Unary
        },
        removeNamespaceSshCertificateAuthority: {
            name: "RemoveNamespaceSshCertificateAuthority",
            I: RemoveNamespaceSshCertificateAuthorityRequest,
            O: RemoveNamespaceSshCertificateAuthorityResponse,
            kind: MethodKind.Unary
        },
        setNamespaceSshRequireCertificates: {
            name: "SetNamespaceSshRequireCertificates",
            I: SetNamespaceSshRequireCertificatesRequest,
            O: SetNamespaceSshRequireCertificatesResponse,
            kind: MethodKind.Unary
        },
        getNamespaceInboundIpAllowlist: {
            name: "GetNamespaceInboundIpAllowlist",
            I: GetNamespaceInboundIpAllowlistRequest,
            O: GetNamespaceInboundIpAllowlistResponse,
            kind: MethodKind.Unary
        },
        addNamespaceInboundIpAllowlistEntry: {
            name: "AddNamespaceInboundIpAllowlistEntry",
            I: AddNamespaceInboundIpAllowlistEntryRequest,
            O: AddNamespaceInboundIpAllowlistEntryResponse,
            kind: MethodKind.Unary
        },
        updateNamespaceInboundIpAllowlistEntry: {
            name: "UpdateNamespaceInboundIpAllowlistEntry",
            I: UpdateNamespaceInboundIpAllowlistEntryRequest,
            O: UpdateNamespaceInboundIpAllowlistEntryResponse,
            kind: MethodKind.Unary
        },
        deleteNamespaceInboundIpAllowlistEntry: {
            name: "DeleteNamespaceInboundIpAllowlistEntry",
            I: DeleteNamespaceInboundIpAllowlistEntryRequest,
            O: DeleteNamespaceInboundIpAllowlistEntryResponse,
            kind: MethodKind.Unary
        },
        setNamespaceInboundIpAllowlistEnabled: {
            name: "SetNamespaceInboundIpAllowlistEnabled",
            I: SetNamespaceInboundIpAllowlistEnabledRequest,
            O: SetNamespaceInboundIpAllowlistEnabledResponse,
            kind: MethodKind.Unary
        },
        addSshPublicKey: {
            name: "AddSshPublicKey",
            I: AddSshPublicKeyRequest,
            O: AddSshPublicKeyResponse,
            kind: MethodKind.Unary
        },
        listSshPublicKeys: {
            name: "ListSshPublicKeys",
            I: ListSshPublicKeysRequest,
            O: ListSshPublicKeysResponse,
            kind: MethodKind.Unary
        },
        deleteSshPublicKey: {
            name: "DeleteSshPublicKey",
            I: DeleteSshPublicKeyRequest,
            O: DeleteSshPublicKeyResponse,
            kind: MethodKind.Unary
        },
        upsertOriginUserSlackNotification: {
            name: "UpsertOriginUserSlackNotification",
            I: UpsertOriginUserSlackNotificationRequest,
            O: UpsertOriginUserSlackNotificationResponse,
            kind: MethodKind.Unary
        },
        deleteOriginUserSlackNotification: {
            name: "DeleteOriginUserSlackNotification",
            I: DeleteOriginUserSlackNotificationRequest,
            O: DeleteOriginUserSlackNotificationResponse,
            kind: MethodKind.Unary
        },
        getOriginUserSlackNotification: {
            name: "GetOriginUserSlackNotification",
            I: GetOriginUserSlackNotificationRequest,
            O: GetOriginUserSlackNotificationResponse,
            kind: MethodKind.Unary
        },
        getOriginCommitEmailVerification: {
            name: "GetOriginCommitEmailVerification",
            I: GetOriginCommitEmailVerificationRequest,
            O: GetOriginCommitEmailVerificationResponse,
            kind: MethodKind.Unary
        },
        startOriginCommitEmailVerification: {
            name: "StartOriginCommitEmailVerification",
            I: StartOriginCommitEmailVerificationRequest,
            O: StartOriginCommitEmailVerificationResponse,
            kind: MethodKind.Unary
        },
        createOriginUserSlackReviewReminder: {
            name: "CreateOriginUserSlackReviewReminder",
            I: CreateOriginUserSlackReviewReminderRequest,
            O: CreateOriginUserSlackReviewReminderResponse,
            kind: MethodKind.Unary
        },
        updateOriginUserSlackReviewReminder: {
            name: "UpdateOriginUserSlackReviewReminder",
            I: UpdateOriginUserSlackReviewReminderRequest,
            O: UpdateOriginUserSlackReviewReminderResponse,
            kind: MethodKind.Unary
        },
        listOriginUserSlackReviewReminders: {
            name: "ListOriginUserSlackReviewReminders",
            I: ListOriginUserSlackReviewRemindersRequest,
            O: ListOriginUserSlackReviewRemindersResponse,
            kind: MethodKind.Unary
        },
        getOriginUserSlackReviewReminder: {
            name: "GetOriginUserSlackReviewReminder",
            I: GetOriginUserSlackReviewReminderRequest,
            O: GetOriginUserSlackReviewReminderResponse,
            kind: MethodKind.Unary
        },
        disableOriginUserSlackReviewReminder: {
            name: "DisableOriginUserSlackReviewReminder",
            I: DisableOriginUserSlackReviewReminderRequest,
            O: DisableOriginUserSlackReviewReminderResponse,
            kind: MethodKind.Unary
        },
        subscribeOriginSlackChannel: {
            name: "SubscribeOriginSlackChannel",
            I: SubscribeOriginSlackChannelRequest,
            O: SubscribeOriginSlackChannelResponse,
            kind: MethodKind.Unary
        },
        unsubscribeOriginSlackChannel: {
            name: "UnsubscribeOriginSlackChannel",
            I: UnsubscribeOriginSlackChannelRequest,
            O: UnsubscribeOriginSlackChannelResponse,
            kind: MethodKind.Unary
        },
        listOriginSlackChannelSubscriptions: {
            name: "ListOriginSlackChannelSubscriptions",
            I: ListOriginSlackChannelSubscriptionsRequest,
            O: ListOriginSlackChannelSubscriptionsResponse,
            kind: MethodKind.Unary
        },
        getCommit: {
            name: "GetCommit",
            I: GetCommitClientRequest,
            O: GetCommitResponse,
            kind: MethodKind.Unary
        },
        getBlob: {
            name: "GetBlob",
            I: GetBlobClientRequest,
            O: GetBlobResponse,
            kind: MethodKind.Unary
        },
        getTag: {
            name: "GetTag",
            I: GetTagClientRequest,
            O: GetTagResponse,
            kind: MethodKind.Unary
        },
        getTree: {
            name: "GetTree",
            I: GetTreeClientRequest,
            O: GetTreeResponse,
            kind: MethodKind.Unary
        },
        resolveRepoPath: {
            name: "ResolveRepoPath",
            I: ResolveRepoPathClientRequest,
            O: ResolveRefPathResponse,
            kind: MethodKind.Unary
        },
        getRepoContent: {
            name: "GetRepoContent",
            I: GetRepoContentClientRequest,
            O: GetRepoContentResponse,
            kind: MethodKind.Unary
        },
        mintRawRepoFileLink: {
            name: "MintRawRepoFileLink",
            I: MintRawRepoFileLinkClientRequest,
            O: MintRawRepoFileLinkClientResponse,
            kind: MethodKind.Unary
        },
        getRepoTarball: {
            name: "GetRepoTarball",
            I: GetRepoTarballClientRequest,
            O: GetRepoTarballClientResponse,
            kind: MethodKind.Unary
        },
        getRepoContentAtSha: {
            name: "GetRepoContentAtSha",
            I: GetRepoContentAtShaClientRequest,
            O: GetRepoContentResponse,
            kind: MethodKind.Unary
        },
        getRepoContentDetailsAtSha: {
            name: "GetRepoContentDetailsAtSha",
            I: GetRepoContentDetailsAtShaClientRequest,
            O: GetRepoContentDetailsResponse,
            kind: MethodKind.Unary
        },
        batchGetRepoContentAtSha: {
            name: "BatchGetRepoContentAtSha",
            I: BatchGetRepoContentAtShaClientRequest,
            O: BatchGetRepoContentResponse,
            kind: MethodKind.Unary
        },
        resolveCodeIntelligenceSymbolAtPosition: {
            name: "ResolveCodeIntelligenceSymbolAtPosition",
            I: ResolveCodeIntelligenceSymbolAtPositionRequest,
            O: ResolveCodeIntelligenceSymbolAtPositionResponse,
            kind: MethodKind.Unary
        },
        findCodeIntelligenceReferencesAtPosition: {
            name: "FindCodeIntelligenceReferencesAtPosition",
            I: FindCodeIntelligenceReferencesAtPositionRequest,
            O: FindCodeIntelligenceReferencesAtPositionResponse,
            kind: MethodKind.ServerStreaming
        },
        getRepoCodeowners: {
            name: "GetRepoCodeowners",
            I: GetRepoCodeownersClientRequest,
            O: GetRepoCodeownersResponse,
            kind: MethodKind.Unary
        },
        getGithubRepoCodeowners: {
            name: "GetGithubRepoCodeowners",
            I: GetGithubRepoCodeownersClientRequest,
            O: GetGithubRepoCodeownersResponse,
            kind: MethodKind.Unary
        },
        getFileHistory: {
            name: "GetFileHistory",
            I: GetFileHistoryClientRequest,
            O: GetFileHistoryResponse,
            kind: MethodKind.Unary
        },
        getFileHistoryPage: {
            name: "GetFileHistoryPage",
            I: GetFileHistoryPageClientRequest,
            O: GetFileHistoryPageResponse,
            kind: MethodKind.Unary
        },
        getFileHistoryPageWithDiffStats: {
            name: "GetFileHistoryPageWithDiffStats",
            I: GetFileHistoryPageWithDiffStatsClientRequest,
            O: GetFileHistoryPageWithDiffStatsResponse,
            kind: MethodKind.Unary
        },
        getFuzzyPaths: {
            name: "GetFuzzyPaths",
            I: GetFuzzyPathsClientRequest,
            O: GetFuzzyPathsResponse,
            kind: MethodKind.Unary
        },
        listRepoPaths: {
            name: "ListRepoPaths",
            I: ListRepoPathsClientRequest,
            O: ListTreePathsResponse,
            kind: MethodKind.Unary
        },
        grepRepo: {
            name: "GrepRepo",
            I: GrepRepoClientRequest,
            O: GrepRepoChunk,
            kind: MethodKind.ServerStreaming
        },
        getPullRequestDiff: {
            name: "GetPullRequestDiff",
            I: GetPullRequestDiffClientRequest,
            O: PullRequestDiffChunk,
            kind: MethodKind.ServerStreaming
        },
        getCommitDiff: {
            name: "GetCommitDiff",
            I: GetCommitDiffClientRequest,
            O: CommitDiffChunk,
            kind: MethodKind.ServerStreaming
        },
        getCommitDiff2: {
            name: "GetCommitDiff2",
            I: GetCommitDiff2ClientRequest,
            O: CommitDiff2Chunk,
            kind: MethodKind.ServerStreaming
        },
        getCommitChangedPaths: {
            name: "GetCommitChangedPaths",
            I: GetCommitChangedPathsClientRequest,
            O: GetCommitChangedPathsResponse,
            kind: MethodKind.Unary
        },
        getCommitDiffStats: {
            name: "GetCommitDiffStats",
            I: GetCommitDiffStatsClientRequest,
            O: GetCommitDiffStatsResponse,
            kind: MethodKind.Unary
        },
        getBlame: {
            name: "GetBlame",
            I: GetBlameClientRequest,
            O: BlameChunk,
            kind: MethodKind.ServerStreaming
        },
        getTreeBlame: {
            name: "GetTreeBlame",
            I: GetTreeBlameClientRequest,
            O: GetTreeBlameResponse,
            kind: MethodKind.Unary
        },
        listRefs: {
            name: "ListRefs",
            I: ListRefsClientRequest,
            O: ListRefsResponse,
            kind: MethodKind.Unary
        },
        searchRefs: {
            name: "SearchRefs",
            I: SearchRefsClientRequest,
            O: SearchRefsResponse,
            kind: MethodKind.Unary
        },
        lookupCommits: {
            name: "LookupCommits",
            I: LookupCommitsClientRequest,
            O: LookupCommitsResponse,
            kind: MethodKind.Unary
        },
        getCommitActivity: {
            name: "GetCommitActivity",
            I: GetCommitActivityClientRequest,
            O: GetCommitActivityClientResponse,
            kind: MethodKind.Unary
        },
        compareCommits: {
            name: "CompareCommits",
            I: CompareCommitsClientRequest,
            O: CompareCommitsResponse,
            kind: MethodKind.Unary
        },
        listCommitsInRange: {
            name: "ListCommitsInRange",
            I: ListCommitsInRangeClientRequest,
            O: ListCommitsInRangeResponse,
            kind: MethodKind.Unary
        },
        canMerge: {
            name: "CanMerge",
            I: CanMergeClientRequest,
            O: CanMergeResponse,
            kind: MethodKind.Unary
        },
        createCommitFromFiles: {
            name: "CreateCommitFromFiles",
            I: CreateCommitFromFilesClientRequest,
            O: CreateCommitFromFilesClientResponse,
            kind: MethodKind.Unary
        },
        getCollectedPullRequestDiff: {
            name: "GetCollectedPullRequestDiff",
            I: GetCollectedPullRequestDiffRequest,
            O: GetCollectedPullRequestDiffResponse,
            kind: MethodKind.Unary
        },
        getDiffListing: {
            name: "GetDiffListing",
            I: GetDiffListingClientRequest,
            O: OriginDiffEnvelope,
            kind: MethodKind.Unary
        },
        streamDiffFiles: {
            name: "StreamDiffFiles",
            I: StreamDiffFilesClientRequest,
            O: OriginDiffEnvelope,
            kind: MethodKind.ServerStreaming
        },
        getDiffFile: {
            name: "GetDiffFile",
            I: GetDiffFileClientRequest,
            O: OriginDiffEnvelope,
            kind: MethodKind.Unary
        },
        getDiffEngineInfo: {
            name: "GetDiffEngineInfo",
            I: GetDiffEngineInfoClientRequest,
            O: OriginDiffEnvelope,
            kind: MethodKind.Unary
        },
        portAnchors: {
            name: "PortAnchors",
            I: PortAnchorsClientRequest,
            O: OriginDiffEnvelope,
            kind: MethodKind.Unary
        },
        createChange: {
            name: "CreateChange",
            I: CreateChangeRequest,
            O: CreateChangeResponse,
            kind: MethodKind.Unary
        },
        importGithubPullRequest: {
            name: "ImportGithubPullRequest",
            I: ImportGithubPullRequestRequest,
            O: ImportGithubPullRequestResponse,
            kind: MethodKind.Unary
        },
        updateChange: {
            name: "UpdateChange",
            I: UpdateChangeRequest,
            O: UpdateChangeResponse,
            kind: MethodKind.Unary
        },
        updateChangeBranch: {
            name: "UpdateChangeBranch",
            I: UpdateChangeBranchRequest,
            O: UpdateChangeBranchResponse,
            kind: MethodKind.Unary
        },
        getMergeConflictResolution: {
            name: "GetMergeConflictResolution",
            I: GetMergeConflictResolutionRequest,
            O: GetMergeConflictResolutionResponse,
            kind: MethodKind.Unary
        },
        applyMergeConflictResolution: {
            name: "ApplyMergeConflictResolution",
            I: ApplyMergeConflictResolutionRequest,
            O: ApplyMergeConflictResolutionResponse,
            kind: MethodKind.Unary
        },
        undoMergeConflictResolution: {
            name: "UndoMergeConflictResolution",
            I: UndoMergeConflictResolutionRequest,
            O: UndoMergeConflictResolutionResponse,
            kind: MethodKind.Unary
        },
        deleteChangeHeadBranch: {
            name: "DeleteChangeHeadBranch",
            I: DeleteChangeHeadBranchRequest,
            O: DeleteChangeHeadBranchResponse,
            kind: MethodKind.Unary
        },
        restorePullRequestBranch: {
            name: "RestorePullRequestBranch",
            I: RestorePullRequestBranchRequest,
            O: RestorePullRequestBranchResponse,
            kind: MethodKind.Unary
        },
        retargetChange: {
            name: "RetargetChange",
            I: RetargetChangeRequest,
            O: RetargetChangeResponse,
            kind: MethodKind.Unary
        },
        foldChange: {
            name: "FoldChange",
            I: FoldChangeRequest,
            O: FoldChangeResponse,
            kind: MethodKind.Unary
        },
        landChangeTreePath: {
            name: "LandChangeTreePath",
            I: LandChangeTreePathRequest,
            O: LandChangeTreePathResponse,
            kind: MethodKind.Unary
        },
        splitChangeIntoStack: {
            name: "SplitChangeIntoStack",
            I: SplitChangeIntoStackRequest,
            O: SplitChangeIntoStackResponse,
            kind: MethodKind.Unary
        },
        updateChangeMetadata: {
            name: "UpdateChangeMetadata",
            I: UpdateChangeMetadataRequest,
            O: UpdateChangeMetadataResponse,
            kind: MethodKind.Unary
        },
        updateChangeStatus: {
            name: "UpdateChangeStatus",
            I: UpdateChangeStatusRequest,
            O: UpdateChangeStatusResponse,
            kind: MethodKind.Unary
        },
        createReview: {
            name: "CreateReview",
            I: CreateReviewRequest,
            O: CreateReviewResponse,
            kind: MethodKind.Unary
        },
        updateReview: {
            name: "UpdateReview",
            I: UpdateReviewRequest,
            O: UpdateReviewResponse,
            kind: MethodKind.Unary
        },
        dismissReview: {
            name: "DismissReview",
            I: DismissReviewRequest,
            O: DismissReviewResponse,
            kind: MethodKind.Unary
        },
        listReviews: {
            name: "ListReviews",
            I: ListReviewsRequest,
            O: ListReviewsResponse,
            kind: MethodKind.Unary
        },
        listChangeTimelineEvents: {
            name: "ListChangeTimelineEvents",
            I: ListChangeTimelineEventsRequest,
            O: ListChangeTimelineEventsResponse,
            kind: MethodKind.Unary
        },
        startReview: {
            name: "StartReview",
            I: StartReviewRequest,
            O: StartReviewResponse,
            kind: MethodKind.Unary
        },
        submitReview: {
            name: "SubmitReview",
            I: SubmitReviewRequest,
            O: SubmitReviewResponse,
            kind: MethodKind.Unary
        },
        discardPendingReview: {
            name: "DiscardPendingReview",
            I: DiscardPendingReviewRequest,
            O: DiscardPendingReviewResponse,
            kind: MethodKind.Unary
        },
        getPendingReview: {
            name: "GetPendingReview",
            I: GetPendingReviewRequest,
            O: GetPendingReviewResponse,
            kind: MethodKind.Unary
        },
        requestReview: {
            name: "RequestReview",
            I: RequestReviewRequest,
            O: RequestReviewResponse,
            kind: MethodKind.Unary
        },
        applyReviewRequestChanges: {
            name: "ApplyReviewRequestChanges",
            I: ApplyReviewRequestChangesRequest,
            O: ApplyReviewRequestChangesResponse,
            kind: MethodKind.Unary
        },
        requestReviews: {
            name: "RequestReviews",
            I: RequestReviewsRequest,
            O: RequestReviewsResponse,
            kind: MethodKind.Unary
        },
        closeReviewRequest: {
            name: "CloseReviewRequest",
            I: CloseReviewRequestRequest,
            O: CloseReviewRequestResponse,
            kind: MethodKind.Unary
        },
        listReviewRequestEvents: {
            name: "ListReviewRequestEvents",
            I: ListReviewRequestEventsRequest,
            O: ListReviewRequestEventsResponse,
            kind: MethodKind.Unary
        },
        addAssignee: {
            name: "AddAssignee",
            I: AddAssigneeRequest,
            O: AddAssigneeResponse,
            kind: MethodKind.Unary
        },
        removeAssignee: {
            name: "RemoveAssignee",
            I: RemoveAssigneeRequest,
            O: RemoveAssigneeResponse,
            kind: MethodKind.Unary
        },
        listOriginRepoReviewerCandidates: {
            name: "ListOriginRepoReviewerCandidates",
            I: ListOriginRepoReviewerCandidatesRequest,
            O: ListOriginRepoReviewerCandidatesResponse,
            kind: MethodKind.Unary
        },
        createComment: {
            name: "CreateComment",
            I: CreateCommentRequest,
            O: CreateCommentResponse,
            kind: MethodKind.Unary
        },
        listComments: {
            name: "ListComments",
            I: ListCommentsRequest,
            O: ListCommentsResponse,
            kind: MethodKind.Unary
        },
        createCommentThread: {
            name: "CreateCommentThread",
            I: CreateCommentThreadRequest,
            O: CreateCommentThreadResponse,
            kind: MethodKind.Unary
        },
        submitPullRequestGateReport: {
            name: "SubmitPullRequestGateReport",
            I: SubmitPullRequestGateReportRequest,
            O: SubmitPullRequestGateReportResponse,
            kind: MethodKind.Unary
        },
        listPullRequestGateReports: {
            name: "ListPullRequestGateReports",
            I: ListPullRequestGateReportsRequest,
            O: ListPullRequestGateReportsResponse,
            kind: MethodKind.Unary
        },
        uploadPullRequestGateTranscript: {
            name: "UploadPullRequestGateTranscript",
            I: UploadPullRequestGateTranscriptRequest,
            O: UploadPullRequestGateTranscriptResponse,
            kind: MethodKind.Unary
        },
        listCommentThreads: {
            name: "ListCommentThreads",
            I: ListCommentThreadsRequest,
            O: ListCommentThreadsResponse,
            kind: MethodKind.Unary
        },
        addCommentToThread: {
            name: "AddCommentToThread",
            I: AddCommentToThreadRequest,
            O: AddCommentToThreadResponse,
            kind: MethodKind.Unary
        },
        resolveCommentThread: {
            name: "ResolveCommentThread",
            I: ResolveCommentThreadRequest,
            O: ResolveCommentThreadResponse,
            kind: MethodKind.Unary
        },
        reopenCommentThread: {
            name: "ReopenCommentThread",
            I: ReopenCommentThreadRequest,
            O: ReopenCommentThreadResponse,
            kind: MethodKind.Unary
        },
        updateComment: {
            name: "UpdateComment",
            I: UpdateCommentRequest,
            O: UpdateCommentResponse,
            kind: MethodKind.Unary
        },
        deleteComment: {
            name: "DeleteComment",
            I: DeleteCommentRequest,
            O: DeleteCommentResponse,
            kind: MethodKind.Unary
        },
        setCommentReaction: {
            name: "SetCommentReaction",
            I: SetCommentReactionRequest,
            O: SetCommentReactionResponse,
            kind: MethodKind.Unary
        },
        listCommentReactions: {
            name: "ListCommentReactions",
            I: ListCommentReactionsRequest,
            O: ListCommentReactionsResponse,
            kind: MethodKind.Unary
        },
        markFileAsViewed: {
            name: "MarkFileAsViewed",
            I: MarkFileAsViewedRequest,
            O: MarkFileAsViewedResponse,
            kind: MethodKind.Unary
        },
        unmarkFileAsViewed: {
            name: "UnmarkFileAsViewed",
            I: UnmarkFileAsViewedRequest,
            O: UnmarkFileAsViewedResponse,
            kind: MethodKind.Unary
        },
        markDirectoryAsViewed: {
            name: "MarkDirectoryAsViewed",
            I: MarkDirectoryAsViewedRequest,
            O: MarkDirectoryAsViewedResponse,
            kind: MethodKind.Unary
        },
        markAllFilesAsViewed: {
            name: "MarkAllFilesAsViewed",
            I: MarkAllFilesAsViewedRequest,
            O: MarkAllFilesAsViewedResponse,
            kind: MethodKind.Unary
        },
        unmarkAllFilesAsViewed: {
            name: "UnmarkAllFilesAsViewed",
            I: UnmarkAllFilesAsViewedRequest,
            O: UnmarkAllFilesAsViewedResponse,
            kind: MethodKind.Unary
        },
        listFileViewedStates: {
            name: "ListFileViewedStates",
            I: ListFileViewedStatesRequest,
            O: ListFileViewedStatesResponse,
            kind: MethodKind.Unary
        },
        markPullRequestAsViewed: {
            name: "MarkPullRequestAsViewed",
            I: MarkPullRequestAsViewedRequest,
            O: MarkPullRequestAsViewedResponse,
            kind: MethodKind.Unary
        },
        getGeneratedCodeTour: {
            name: "GetGeneratedCodeTour",
            I: GetGeneratedCodeTourRequest,
            O: GetGeneratedCodeTourResponse,
            kind: MethodKind.Unary
        },
        upsertGeneratedCodeTour: {
            name: "UpsertGeneratedCodeTour",
            I: UpsertGeneratedCodeTourRequest,
            O: UpsertGeneratedCodeTourResponse,
            kind: MethodKind.Unary
        },
        enableChangeMergeWhenReady: {
            name: "EnableChangeMergeWhenReady",
            I: EnableChangeMergeWhenReadyRequest,
            O: EnableChangeMergeWhenReadyResponse,
            kind: MethodKind.Unary
        },
        getChangeMergeWhenReady: {
            name: "GetChangeMergeWhenReady",
            I: GetChangeMergeWhenReadyRequest,
            O: GetChangeMergeWhenReadyResponse,
            kind: MethodKind.Unary
        },
        disableChangeMergeWhenReady: {
            name: "DisableChangeMergeWhenReady",
            I: DisableChangeMergeWhenReadyRequest,
            O: DisableChangeMergeWhenReadyResponse,
            kind: MethodKind.Unary
        },
        enqueueForMerge: {
            name: "EnqueueForMerge",
            I: EnqueueForMergeRequest,
            O: EnqueueForMergeResponse,
            kind: MethodKind.Unary
        },
        cancelMergeQueueEntry: {
            name: "CancelMergeQueueEntry",
            I: CancelMergeQueueEntryRequest,
            O: CancelMergeQueueEntryResponse,
            kind: MethodKind.Unary
        },
        getMergeQueueStatus: {
            name: "GetMergeQueueStatus",
            I: GetMergeQueueStatusRequest,
            O: GetMergeQueueStatusResponse,
            kind: MethodKind.Unary
        },
        getMergeQueue: {
            name: "GetMergeQueue",
            I: GetMergeQueueRequest,
            O: GetMergeQueueResponse,
            kind: MethodKind.Unary
        },
        getMergeQueueConfig: {
            name: "GetMergeQueueConfig",
            I: GetMergeQueueConfigRequest,
            O: GetMergeQueueConfigResponse,
            kind: MethodKind.Unary
        },
        enableMergeQueue: {
            name: "EnableMergeQueue",
            I: EnableMergeQueueRequest,
            O: EnableMergeQueueResponse,
            kind: MethodKind.Unary
        },
        disableMergeQueue: {
            name: "DisableMergeQueue",
            I: DisableMergeQueueRequest,
            O: DisableMergeQueueResponse,
            kind: MethodKind.Unary
        },
        updateMergeQueueConfig: {
            name: "UpdateMergeQueueConfig",
            I: UpdateMergeQueueConfigRequest,
            O: UpdateMergeQueueConfigResponse,
            kind: MethodKind.Unary
        },
        getChange: {
            name: "GetChange",
            I: GetChangeRequest,
            O: GetChangeResponse,
            kind: MethodKind.Unary
        },
        getChangeCodeownersApplication: {
            name: "GetChangeCodeownersApplication",
            I: GetChangeCodeownersApplicationRequest,
            O: GetChangeCodeownersApplicationResponse,
            kind: MethodKind.Unary
        },
        getProjectedLatestVersions: {
            name: "GetProjectedLatestVersions",
            I: GetProjectedLatestVersionsRequest,
            O: GetProjectedLatestVersionsResponse,
            kind: MethodKind.Unary
        },
        getChangeStackPageData: {
            name: "GetChangeStackPageData",
            I: GetChangeStackPageDataRequest,
            O: GetChangeStackPageDataResponse,
            kind: MethodKind.Unary
        },
        getChangeStack: {
            name: "GetChangeStack",
            I: GetChangeStackRequest,
            O: GetChangeStackResponse,
            kind: MethodKind.Unary
        },
        listChangeCommits: {
            name: "ListChangeCommits",
            I: ListChangeCommitsRequest,
            O: ListChangeCommitsResponse,
            kind: MethodKind.Unary
        },
        listChanges: {
            name: "ListChanges",
            I: ListChangesRequest,
            O: ListChangesResponse,
            kind: MethodKind.Unary
        },
        listChangesByHeadRef: {
            name: "ListChangesByHeadRef",
            I: ListChangesByHeadRefRequest,
            O: ListChangesByHeadRefResponse,
            kind: MethodKind.Unary
        },
        getCommitReferences: {
            name: "GetCommitReferences",
            I: GetCommitReferencesRequest,
            O: GetCommitReferencesResponse,
            kind: MethodKind.Unary
        },
        batchGetChanges: {
            name: "BatchGetChanges",
            I: BatchGetChangesRequest,
            O: BatchGetChangesResponse,
            kind: MethodKind.Unary
        },
        searchChanges: {
            name: "SearchChanges",
            I: SearchChangesRequest,
            O: SearchChangesResponse,
            kind: MethodKind.Unary
        },
        getSectionOfChanges: {
            name: "GetSectionOfChanges",
            I: GetSectionOfChangesRequest,
            O: GetSectionOfChangesResponse,
            kind: MethodKind.Unary
        },
        countSectionsOfChanges: {
            name: "CountSectionsOfChanges",
            I: CountSectionsOfChangesRequest,
            O: CountSectionsOfChangesResponse,
            kind: MethodKind.Unary
        },
        resolveSectionPersonalBotAuthors: {
            name: "ResolveSectionPersonalBotAuthors",
            I: ResolveSectionPersonalBotAuthorsRequest,
            O: ResolveSectionPersonalBotAuthorsResponse,
            kind: MethodKind.Unary
        },
        getCiState: {
            name: "GetCiState",
            I: GetCiStateRequest,
            O: GetCiStateResponse,
            kind: MethodKind.Unary
        },
        batchGetCommitCheckRollups: {
            name: "BatchGetCommitCheckRollups",
            I: BatchGetCommitCheckRollupsRequest,
            O: BatchGetCommitCheckRollupsResponse,
            kind: MethodKind.Unary
        },
        getCheckRun: {
            name: "GetCheckRun",
            I: GetCheckRunRequest,
            O: GetCheckRunResponse,
            kind: MethodKind.Unary
        },
        listRepoCheckSources: {
            name: "ListRepoCheckSources",
            I: ListRepoCheckSourcesRequest,
            O: ListRepoCheckSourcesResponse,
            kind: MethodKind.Unary
        },
        getOriginCiJobLog: {
            name: "GetOriginCiJobLog",
            I: GetOriginCiJobLogRequest,
            O: GetOriginCiJobLogResponse,
            kind: MethodKind.Unary
        },
        postCheckRun: {
            name: "PostCheckRun",
            I: PostCheckRunRequest,
            O: PostCheckRunResponse,
            kind: MethodKind.Unary
        },
        createCheckRunAnnotations: {
            name: "CreateCheckRunAnnotations",
            I: CreateCheckRunAnnotationsRequest,
            O: CreateCheckRunAnnotationsResponse,
            kind: MethodKind.Unary
        },
        listCheckRunAnnotations: {
            name: "ListCheckRunAnnotations",
            I: ListCheckRunAnnotationsRequest,
            O: ListCheckRunAnnotationsResponse,
            kind: MethodKind.Unary
        },
        rerequestCheckRun: {
            name: "RerequestCheckRun",
            I: RerequestCheckRunRequest,
            O: RerequestCheckRunResponse,
            kind: MethodKind.Unary
        },
        getChangesetMergeability: {
            name: "GetChangesetMergeability",
            I: GetChangesetMergeabilityRequest,
            O: GetChangesetMergeabilityResponse,
            kind: MethodKind.Unary
        },
        getReviewRequirements: {
            name: "GetReviewRequirements",
            I: GetReviewRequirementsRequest,
            O: GetReviewRequirementsResponse,
            kind: MethodKind.Unary
        },
        mergeStack: {
            name: "MergeStack",
            I: MergeStackRequest,
            O: MergeStackResponse,
            kind: MethodKind.Unary
        },
        revertPullRequest: {
            name: "RevertPullRequest",
            I: RevertPullRequestRequest,
            O: RevertPullRequestResponse,
            kind: MethodKind.Unary
        },
        restackStack: {
            name: "RestackStack",
            I: RestackStackRequest,
            O: RestackStackResponse,
            kind: MethodKind.Unary
        },
        getApp: {
            name: "GetApp",
            I: GetAppRequest,
            O: GetAppResponse,
            kind: MethodKind.Unary
        },
        createApp: {
            name: "CreateApp",
            I: CreateAppRequest,
            O: CreateAppResponse,
            kind: MethodKind.Unary
        },
        addAppSigningKey: {
            name: "AddAppSigningKey",
            I: AddAppSigningKeyRequest,
            O: AddAppSigningKeyResponse,
            kind: MethodKind.Unary
        },
        revokeAppSigningKey: {
            name: "RevokeAppSigningKey",
            I: RevokeAppSigningKeyRequest,
            O: RevokeAppSigningKeyResponse,
            kind: MethodKind.Unary
        },
        getAppMetadata: {
            name: "GetAppMetadata",
            I: GetAppMetadataRequest,
            O: GetAppMetadataResponse,
            kind: MethodKind.Unary
        },
        listNamespaceApps: {
            name: "ListNamespaceApps",
            I: ListNamespaceAppsRequest,
            O: ListNamespaceAppsResponse,
            kind: MethodKind.Unary
        },
        listPublicApps: {
            name: "ListPublicApps",
            I: ListPublicAppsRequest,
            O: ListPublicAppsResponse,
            kind: MethodKind.Unary
        },
        createInstallation: {
            name: "CreateInstallation",
            I: CreateInstallationRequest,
            O: CreateInstallationResponse,
            kind: MethodKind.Unary
        },
        getInstallation: {
            name: "GetInstallation",
            I: GetInstallationRequest,
            O: GetInstallationResponse,
            kind: MethodKind.Unary
        },
        listNamespaceInstallations: {
            name: "ListNamespaceInstallations",
            I: ListNamespaceInstallationsRequest,
            O: ListNamespaceInstallationsResponse,
            kind: MethodKind.Unary
        },
        listRepoInstallations: {
            name: "ListRepoInstallations",
            I: ListRepoInstallationsRequest,
            O: ListRepoInstallationsResponse,
            kind: MethodKind.Unary
        },
        updateApp: {
            name: "UpdateApp",
            I: UpdateAppRequest,
            O: UpdateAppResponse,
            kind: MethodKind.Unary
        },
        setAppWebhookDeliveryEnabled: {
            name: "SetAppWebhookDeliveryEnabled",
            I: SetAppWebhookDeliveryEnabledRequest,
            O: SetAppWebhookDeliveryEnabledResponse,
            kind: MethodKind.Unary
        },
        sendAppWebhookTestDelivery: {
            name: "SendAppWebhookTestDelivery",
            I: SendAppWebhookTestDeliveryRequest,
            O: SendAppWebhookTestDeliveryResponse,
            kind: MethodKind.Unary
        },
        deleteApp: {
            name: "DeleteApp",
            I: DeleteAppRequest,
            O: DeleteAppResponse,
            kind: MethodKind.Unary
        },
        setAppIcon: {
            name: "SetAppIcon",
            I: SetAppIconRequest,
            O: SetAppIconResponse,
            kind: MethodKind.Unary
        },
        deleteInstallation: {
            name: "DeleteInstallation",
            I: DeleteInstallationRequest,
            O: DeleteInstallationResponse,
            kind: MethodKind.Unary
        },
        suspendInstallation: {
            name: "SuspendInstallation",
            I: SuspendInstallationRequest,
            O: SuspendInstallationResponse,
            kind: MethodKind.Unary
        },
        unsuspendInstallation: {
            name: "UnsuspendInstallation",
            I: UnsuspendInstallationRequest,
            O: UnsuspendInstallationResponse,
            kind: MethodKind.Unary
        },
        listReposForAppInstall: {
            name: "ListReposForAppInstall",
            I: ListReposForAppInstallRequest,
            O: ListHostedReposResponse,
            kind: MethodKind.Unary
        },
        previewAppInstallation: {
            name: "PreviewAppInstallation",
            I: PreviewAppInstallationRequest,
            O: PreviewAppInstallationResponse,
            kind: MethodKind.Unary
        },
        requestAppInstall: {
            name: "RequestAppInstall",
            I: RequestAppInstallRequest,
            O: RequestAppInstallResponse,
            kind: MethodKind.Unary
        },
        getMyAppInstallRequest: {
            name: "GetMyAppInstallRequest",
            I: GetMyAppInstallRequestRequest,
            O: GetMyAppInstallRequestResponse,
            kind: MethodKind.Unary
        },
        cancelMyAppInstallRequest: {
            name: "CancelMyAppInstallRequest",
            I: CancelMyAppInstallRequestRequest,
            O: CancelMyAppInstallRequestResponse,
            kind: MethodKind.Unary
        },
        listAppInstallRequests: {
            name: "ListAppInstallRequests",
            I: ListAppInstallRequestsRequest,
            O: ListAppInstallRequestsResponse,
            kind: MethodKind.Unary
        },
        denyAppInstallRequests: {
            name: "DenyAppInstallRequests",
            I: DenyAppInstallRequestsRequest,
            O: DenyAppInstallRequestsResponse,
            kind: MethodKind.Unary
        },
        getAtlasNode: {
            name: "GetAtlasNode",
            I: GetAtlasNodeRequest,
            O: GetAtlasNodeResponse,
            kind: MethodKind.Unary
        },
        listAtlasNodePaths: {
            name: "ListAtlasNodePaths",
            I: ListAtlasNodePathsRequest,
            O: ListAtlasNodePathsResponse,
            kind: MethodKind.Unary
        },
        getAtlasRepoStatus: {
            name: "GetAtlasRepoStatus",
            I: GetAtlasRepoStatusRequest,
            O: GetAtlasRepoStatusResponse,
            kind: MethodKind.Unary
        },
        setAtlasRepoConfig: {
            name: "SetAtlasRepoConfig",
            I: SetAtlasRepoConfigRequest,
            O: SetAtlasRepoConfigResponse,
            kind: MethodKind.Unary
        },
        refreshAtlasRepo: {
            name: "RefreshAtlasRepo",
            I: RefreshAtlasRepoRequest,
            O: RefreshAtlasRepoResponse,
            kind: MethodKind.Unary
        },
        listRulesets: {
            name: "ListRulesets",
            I: ListRulesetsRequest,
            O: ListRulesetsResponse,
            kind: MethodKind.Unary
        },
        getRuleset: {
            name: "GetRuleset",
            I: GetRulesetRequest,
            O: GetRulesetResponse,
            kind: MethodKind.Unary
        },
        upsertRuleset: {
            name: "UpsertRuleset",
            I: UpsertRulesetRequest,
            O: UpsertRulesetResponse,
            kind: MethodKind.Unary
        },
        deleteRuleset: {
            name: "DeleteRuleset",
            I: DeleteRulesetRequest,
            O: DeleteRulesetResponse,
            kind: MethodKind.Unary
        },
        createLabel: {
            name: "CreateLabel",
            I: CreateLabelRequest,
            O: CreateLabelResponse,
            kind: MethodKind.Unary
        },
        updateLabel: {
            name: "UpdateLabel",
            I: UpdateLabelRequest,
            O: UpdateLabelResponse,
            kind: MethodKind.Unary
        },
        deleteLabel: {
            name: "DeleteLabel",
            I: DeleteLabelRequest,
            O: DeleteLabelResponse,
            kind: MethodKind.Unary
        },
        listLabels: {
            name: "ListLabels",
            I: ListLabelsRequest,
            O: ListLabelsResponse,
            kind: MethodKind.Unary
        },
        getLabelByName: {
            name: "GetLabelByName",
            I: GetLabelByNameRequest,
            O: GetLabelByNameResponse,
            kind: MethodKind.Unary
        },
        addLabelToChange: {
            name: "AddLabelToChange",
            I: AddLabelToChangeRequest,
            O: AddLabelToChangeResponse,
            kind: MethodKind.Unary
        },
        removeLabelFromChange: {
            name: "RemoveLabelFromChange",
            I: RemoveLabelFromChangeRequest,
            O: RemoveLabelFromChangeResponse,
            kind: MethodKind.Unary
        },
        checkChangeCreationAccess: {
            name: "CheckChangeCreationAccess",
            I: CheckChangeCreationAccessRequest,
            O: CheckChangeCreationAccessResponse,
            kind: MethodKind.Unary
        },
        watchChangeSyncEvents: {
            name: "WatchChangeSyncEvents",
            I: WatchChangeSyncEventsRequest,
            O: WatchChangeSyncEventsResponse,
            kind: MethodKind.ServerStreaming
        },
        getChangeSyncSnapshot: {
            name: "GetChangeSyncSnapshot",
            I: GetChangeSyncSnapshotRequest,
            O: GetChangeSyncSnapshotResponse,
            kind: MethodKind.Unary
        },
        watchChangeSyncEventsV2: {
            name: "WatchChangeSyncEventsV2",
            I: WatchChangeSyncEventsV2Request,
            O: WatchChangeSyncEventsV2Response,
            kind: MethodKind.ServerStreaming
        },
        updateWatchChangeSyncSubscriptions: {
            name: "UpdateWatchChangeSyncSubscriptions",
            I: UpdateWatchChangeSyncSubscriptionsRequest,
            O: UpdateWatchChangeSyncSubscriptionsResponse,
            kind: MethodKind.Unary
        },
        fastForwardBranch: {
            name: "FastForwardBranch",
            I: FastForwardBranchClientRequest,
            O: FastForwardBranchClientResponse,
            kind: MethodKind.Unary
        },
        listRepoExternalCollaborators: {
            name: "ListRepoExternalCollaborators",
            I: ListRepoExternalCollaboratorsRequest,
            O: ListRepoExternalCollaboratorsResponse,
            kind: MethodKind.Unary
        },
        setRepoExternalCollaboratorAccess: {
            name: "SetRepoExternalCollaboratorAccess",
            I: SetRepoExternalCollaboratorAccessRequest,
            O: SetRepoExternalCollaboratorAccessResponse,
            kind: MethodKind.Unary
        },
        previewAppUserConfirmation: {
            name: "PreviewAppUserConfirmation",
            I: PreviewAppUserConfirmationRequest,
            O: PreviewAppUserConfirmationResponse,
            kind: MethodKind.Unary
        },
        confirmAppUserConfirmation: {
            name: "ConfirmAppUserConfirmation",
            I: ConfirmAppUserConfirmationRequest,
            O: ConfirmAppUserConfirmationResponse,
            kind: MethodKind.Unary
        },
        githubOutageDrillProbe: {
            name: "GithubOutageDrillProbe",
            I: GithubOutageDrillProbeRequest,
            O: GithubOutageDrillProbeResponse,
            kind: MethodKind.Unary
        }
    }
};

}
