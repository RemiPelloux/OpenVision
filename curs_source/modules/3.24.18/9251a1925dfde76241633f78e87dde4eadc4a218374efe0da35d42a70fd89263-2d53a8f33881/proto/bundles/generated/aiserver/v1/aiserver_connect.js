import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { GetDefaultModelForCliRequest, GetDefaultModelForCliResponse, GetUsableModelsRequest, GetUsableModelsResponse, NameAgentRequest, NameAgentResponse, init_agent_service_pb } from "../../agent/v1/agent_service_pb.js";
import { AcknowledgeGracePeriodDisclaimerRequest, AcknowledgeGracePeriodDisclaimerResponse, AiProjectRequest, AiProjectResponse, AutoContextRequest, AutoContextResponse, AvailableDocsRequest, AvailableDocsResponse, AvailableModelsRequest, AvailableModelsResponse, BackgroundCmdKEvalRequest, BackgroundCmdKEvalResponse, BackgroundCmdKRequest, BackgroundCmdKResponse, BulkEmbedRequest, BulkEmbedResponse, CalculateAutoSelectionRequest, CalculateAutoSelectionResponse, CheckBugBotPriceRequest, CheckBugBotPriceResponse, CheckBugBotTelemetryHealthyRequest, CheckBugBotTelemetryHealthyResponse, CheckDoableAsTaskRequest, CheckDoableAsTaskResponse, CheckFeatureStatusRequest, CheckFeatureStatusResponse, CheckFeaturesStatusRequest, CheckFeaturesStatusResponse, CheckLongFilesFitResponse, CheckNumberConfigRequest, CheckNumberConfigResponse, CheckNumberConfigsRequest, CheckNumberConfigsResponse, CheckQueuePositionRequest, CheckQueuePositionResponse, CheckUsageBasedPriceRequest, CheckUsageBasedPriceResponse, ClassifyAgentAutoReviewRequest, ClassifyAgentAutoReviewResponse, ComposerEnhancerClientMessage, ComposerEnhancerServerMessage, ComputerUseDecideNextActionRequest, ComputerUseDecideNextActionResponse, ContextRerankingRequest, ContextRerankingResponse, ContextScoresRequest, ContextScoresResponse, CountTokensRequest, CountTokensResponse, DetectShellHangRequest, DetectShellHangResponse, DevOnlyGetPastRequestIdsRequest, DevOnlyGetPastRequestIdsResponse, DoThisForMeCheckRequest, DoThisForMeCheckResponse, DoThisForMeRequest, DoThisForMeResponseWrapped, EvaluatePromptHookRequest, EvaluatePromptHookResponse, FetchRelevantKnowledgeForConversationRequest, FetchRelevantKnowledgeForConversationResponse, FindBugsRequest, FindBugsResponse, FixMarkersRequest, FixMarkersResponse, GenerateTldrRequest, GenerateTldrResponse, GetAtSymbolSuggestionsRequest, GetAtSymbolSuggestionsResponse, GetBackgroundComposerFeedbackLinkRequest, GetBackgroundComposerFeedbackLinkResponse, GetChatRequest, GetChatSuggestionsRequest, GetChatSuggestionsResponse, GetChatTitleRequest, GetChatTitleResponse, GetCloudSetupBlockersRequest, GetCloudSetupBlockersResponse, GetCodebaseQuestionsResponse, GetCompletionRequest, GetCompletionResponse, GetComposerAutocompleteRequest, GetComposerAutocompleteResponse, GetComposerChatRequest, GetDefaultModelNudgeDataRequest, GetDefaultModelNudgeDataResponse, GetDefaultModelRequest, GetDefaultModelResponse, GetDiffReviewRequest, GetEditorBugbotAutoRunStatusRequest, GetEditorBugbotAutoRunStatusResponse, GetEffectiveTokenLimitRequest, GetEffectiveTokenLimitResponse, GetEvaluationPromptRequest, GetEvaluationPromptResponse, GetFilesForComposerRequest, GetFilesForComposerResponse, GetLastDefaultModelNudgeRequest, GetLastDefaultModelNudgeResponse, GetModelLabelsRequest, GetModelLabelsResponse, GetPassthroughPromptRequest, GetPassthroughPromptResponse, GetRealtimeVoiceRequest, GetRealtimeVoiceResponse, GetSimplePromptRequest, GetSimplePromptResponse, GetSuggestedBugBotIterationsRequest, GetSuggestedBugBotIterationsResponse, GetTerminalCompletionRequest, GetTerminalCompletionResponse, GetThoughtAnnotationRequest, GetThoughtAnnotationResponse, GetUserInfoRequest, GetUserInfoResponse, GetUserInstructionsRequest, GetUserInstructionsResponse, HealthCheckRequest, HealthCheckResponse, InferBackgroundComposerScriptsRequest, InferBackgroundComposerScriptsResponse, IntentPredictionRequest, IntentPredictionResponse, InterfaceAgentInitRequest, InterfaceAgentInitResponse, IsCursorPredictionEnabledRequest, IsCursorPredictionEnabledResponse, IsTerminalFinishedRequest, IsTerminalFinishedResponseV2, IsolatedTreesitterRequest, IsolatedTreesitterResponse, KeepComposerCacheWarmRequest, KeepComposerCacheWarmResponse, KeepTaskListRequest, KeepTaskListResponse, KnowledgeBaseAddRequest, KnowledgeBaseAddResponse, KnowledgeBaseListRequest, KnowledgeBaseListResponse, KnowledgeBaseRemoveRequest, KnowledgeBaseRemoveResponse, KnowledgeBaseUpdateRequest, KnowledgeBaseUpdateResponse, LlmGatewayConnectionTesterRequest, LlmGatewayConnectionTesterResponse, LogLinterExplicitUserFeedbackRequest, LogLinterExplicitUserFeedbackResponse, LogUserLintReplyRequest, LogUserLintReplyResponse, MintRealtimeVoiceSecretRequest, MintRealtimeVoiceSecretResponse, ModelQueryRequest, ModelQueryResponse, ModelQueryResponseV2, NameTabRequest, NameTabResponse, PotentialLocsInitialQueriesRequest, PotentialLocsInitialQueriesResponse, PotentialLocsRequest, PotentialLocsResponse, PotentialLocsUnderneathRequest, PotentialLocsUnderneathResponse, PotentiallyGenerateMemoryRequest, PotentiallyGenerateMemoryResponse, PreloadEditRequest, PreloadEditResponse, PrivacyCheckRequest, PrivacyCheckResponse, PushAiThoughtRequest, PushAiThoughtResponse, RecordIdeBugReactionRequest, RecordIdeBugReactionResponse, ReportAgentFeedbackRequest, ReportAgentFeedbackResponse, ReportAgentMessageFeedbackRequest, ReportAgentMessageFeedbackResponse, ReportAiCodeChangeMetricsRequest, ReportAiCodeChangeMetricsResponse, ReportAutoRoutingResultFeedbackRequest, ReportAutoRoutingResultFeedbackResponse, ReportBugRequest, ReportBugResponse, ReportClientNumericMetricsRequest, ReportClientNumericMetricsResponse, ReportCmdKFateRequest, ReportCmdKFateResponse, ReportCommitAiAnalyticsRequest, ReportCommitAiAnalyticsResponse, ReportFeedbackRequest, ReportFeedbackResponse, ReportGenerationFeedbackRequest, ReportGenerationFeedbackResponse, ReportGroundTruthCandidateRequest, ReportGroundTruthCandidateResponse, ReportProcessMetricsRequest, ReportProcessMetricsResponse, ReportProcessMetricsV2Request, ReportProcessMetricsV2Response, ReportSandProcessMetricsRequest, ReportSandProcessMetricsResponse, RerankerRequest, RerankerResponse, ReviewChatRequest, ReviewChatResponse, ReviewRequest, ReviewResponse, RunDescribeImageRequest, RunDescribeImageResponse, RunGenerateImageRequest, RunGenerateImageResponse, RunGenerateVideoRequest, RunGenerateVideoResponse, RunWebFetchRequest, RunWebFetchResponse, RunWebSearchRequest, RunWebSearchResponse, RunXSearchRequest, RunXSearchResponse, ServerTimeRequest, ServerTimeResponse, SetRealtimeVoiceRequest, SetRealtimeVoiceResponse, ShowWelcomeScreenRequest, ShowWelcomeScreenResponse, SlashEditFollowUpWithPreviousEditsRequest, SlashEditRequest, SlashEditResponse, StreamAiCursorHelpRequest, StreamAiCursorHelpResponse, StreamAiLintBugRequest, StreamAiLintBugResponse, StreamBugBotAgenticClientMessage, StreamBugBotAgenticServerMessage, StreamBugBotResponse, StreamChatContextRequest, StreamChatContextResponse, StreamChatDeepContextRequest, StreamChatDeepContextResponse, StreamChatResponse, StreamChatToolformerContinueRequest, StreamChatToolformerResponse, StreamCursorTutorRequest, StreamCursorTutorResponse, StreamDiffReviewByFileResponse, StreamDiffReviewResponse, StreamEditRequest, StreamFastEditRequest, StreamFastEditResponse, StreamGenerateRequest, StreamInterfaceAgentStatusRequest, StreamInterfaceAgentStatusResponse, StreamLintRequest, StreamNewRuleRequest, StreamNextCursorPredictionRequest, StreamNextCursorPredictionResponse, StreamPriomptPromptRequest, StreamPriomptPromptResponse, StreamPseudocodeGeneratorRequest, StreamPseudocodeGeneratorResponse, StreamPseudocodeMapperRequest, StreamPseudocodeMapperResponse, StreamSlashEditFollowUpWithPreviousEditsResponse, StreamTerminalAutocompleteRequest, StreamTerminalAutocompleteResponse, StreamUiBestOfNJudgeClientMessage, StreamUiBestOfNJudgeServerMessage, StreamWebCmdKV1Request, StreamWebCmdKV1Response, SttClientMessage, SttServerMessage, SuggestQuickActionsRequest, SuggestQuickActionsResponse, TakeNotesOnCommitDiffRequest, TakeNotesOnCommitDiffResponse, TaskGetInterfaceAgentStatusRequest, TaskGetInterfaceAgentStatusResponseWrapped, TaskInfoRequest, TaskInfoResponse, TaskInitRequest, TaskInitResponse, TaskPauseRequest, TaskPauseResponse, TaskProvideResultRequest, TaskProvideResultResponse, TaskSendMessageRequest, TaskSendMessageResponse, TaskStreamChatContextRequest, TaskStreamChatContextResponseWrapped, TaskStreamLogRequest, TaskStreamLogResponse, TestBedrockCredentialsRequest, TestBedrockCredentialsResponse, TestBidiRequest, TestBidiResponse, TestModelStatusRequest, TestModelStatusResponse, TestTeamInferenceHookConnectionRequest, TestTeamInferenceHookConnectionResponse, TextToSpeechRequest, TextToSpeechResponse, ThrowErrorCheckRequest, ThrowErrorCheckResponse, TimeLeftHealthCheckResponse, ToCamelCaseRequest, ToCamelCaseResponse, TranscribeAudioRequest, TranscribeAudioResponse, TryParseTypeScriptTreeSitterRequest, TryParseTypeScriptTreeSitterResponse, UpdateVscodeProfileRequest, UpdateVscodeProfileResponse, WarmChatCacheRequest, WarmChatCacheResponse, WarmComposerCacheResponse, WriteGitBranchNameRequest, WriteGitBranchNameResponse, WriteGitCommitMessageRequest, WriteGitCommitMessageResponse, init_aiserver_pb } from "./aiserver_pb.js";
import { BidiPollRequest, BidiPollResponse, BidiRequestId, init_bidi_pb } from "./bidi_pb.js";
import { StreamBugBotRequest, init_bugbot_pb } from "./bugbot_pb.js";
import { RerankDocumentsRequest, RerankDocumentsResponse, init_chat_pb } from "./chat_pb.js";
import { CppAppendRequest, CppAppendResponse, CppConfigRequest, CppConfigResponse, CppEditHistoryStatusRequest, CppEditHistoryStatusResponse, EditHistoryAppendChangesRequest, EditHistoryAppendChangesResponse, GetCppEditClassificationRequest, GetCppEditClassificationResponse, RefreshTabContextRequest, RefreshTabContextResponse, ShouldTurnOnCppOnboardingRequest, ShouldTurnOnCppOnboardingResponse, StreamCppRequest, StreamCppResponse, init_cpp_pb } from "./cpp_pb.js";
import { DocumentationQueryRequest, DocumentationQueryResponse, init_docs_pb } from "./docs_pb.js";
import { StreamAiPreviewsRequest, StreamAiPreviewsResponse, init_fastpreviews_pb } from "./fastpreviews_pb.js";
import { StreamInlineLongCompletionRequest, init_inline_gpt4_pb } from "./inline_gpt4_pb.js";
import { ChooseCodeReferencesRequest, ComputeIndexTopoSortRequest, ComputeIndexTopoSortResponse, CreateExperimentalIndexRequest, CreateExperimentalIndexResponse, ExtractPathsRequest, ExtractPathsResponse, ListExperimentalIndexFilesRequest, ListExperimentalIndexFilesResponse, ListenExperimentalIndexRequest, ListenExperimentalIndexResponse, RegisterCodeReferencesRequest, RegisterCodeReferencesResponse, RegisterFileToIndexRequest, RequestReceivedResponse, SetupIndexDependenciesRequest, SetupIndexDependenciesResponse, SummarizeWithReferencesRequest, init_symbolic_context_pb } from "./symbolic_context_pb.js";
import { ReportInlineActionRequest, ReportInlineActionResponse, init_telemetry_pb } from "./telemetry_pb.js";
var AiService;
export { AiService };
var __wakaru_init_aiserver_connect_initialized = false;
export function init_aiserver_connect() {
if (__wakaru_init_aiserver_connect_initialized) return;
__wakaru_init_aiserver_connect_initialized = true;
"use strict";
init_aiserver_pb();
init_esm2();
init_chat_pb();
init_inline_gpt4_pb();
init_fastpreviews_pb();
init_cpp_pb();
init_symbolic_context_pb();
init_docs_pb();
init_telemetry_pb();
init_bugbot_pb();
init_bidi_pb();
init_agent_service_pb();
AiService = {
    typeName: "aiserver.v1.AiService",
    methods: {
        serverTime: {
            name: "ServerTime",
            I: ServerTimeRequest,
            O: ServerTimeResponse,
            kind: MethodKind.Unary
        },
        healthCheck: {
            name: "HealthCheck",
            I: HealthCheckRequest,
            O: HealthCheckResponse,
            kind: MethodKind.Unary
        },
        privacyCheck: {
            name: "PrivacyCheck",
            I: PrivacyCheckRequest,
            O: PrivacyCheckResponse,
            kind: MethodKind.Unary
        },
        timeLeftHealthCheck: {
            name: "TimeLeftHealthCheck",
            I: HealthCheckRequest,
            O: TimeLeftHealthCheckResponse,
            kind: MethodKind.Unary
        },
        throwErrorCheck: {
            name: "ThrowErrorCheck",
            I: ThrowErrorCheckRequest,
            O: ThrowErrorCheckResponse,
            kind: MethodKind.Unary
        },
        availableModels: {
            name: "AvailableModels",
            I: AvailableModelsRequest,
            O: AvailableModelsResponse,
            kind: MethodKind.Unary
        },
        streamChatTryReallyHard: {
            name: "StreamChatTryReallyHard",
            I: GetChatRequest,
            O: StreamChatResponse,
            kind: MethodKind.ServerStreaming
        },
        rerankDocuments: {
            name: "RerankDocuments",
            I: RerankDocumentsRequest,
            O: RerankDocumentsResponse,
            kind: MethodKind.Unary
        },
        streamComposer: {
            name: "StreamComposer",
            I: GetComposerChatRequest,
            O: StreamChatResponse,
            kind: MethodKind.ServerStreaming
        },
        streamComposerContext: {
            name: "StreamComposerContext",
            I: StreamChatContextRequest,
            O: StreamChatContextResponse,
            kind: MethodKind.ServerStreaming
        },
        warmComposerCache: {
            name: "WarmComposerCache",
            I: GetComposerChatRequest,
            O: WarmComposerCacheResponse,
            kind: MethodKind.Unary
        },
        keepComposerCacheWarm: {
            name: "KeepComposerCacheWarm",
            I: KeepComposerCacheWarmRequest,
            O: KeepComposerCacheWarmResponse,
            kind: MethodKind.Unary
        },
        countTokens: {
            name: "CountTokens",
            I: CountTokensRequest,
            O: CountTokensResponse,
            kind: MethodKind.Unary
        },
        streamPotentialLocs: {
            name: "StreamPotentialLocs",
            I: PotentialLocsRequest,
            O: PotentialLocsResponse,
            kind: MethodKind.ServerStreaming
        },
        streamPotentialLocsUnderneath: {
            name: "StreamPotentialLocsUnderneath",
            I: PotentialLocsUnderneathRequest,
            O: PotentialLocsUnderneathResponse,
            kind: MethodKind.ServerStreaming
        },
        streamPotentialLocsInitialQueries: {
            name: "StreamPotentialLocsInitialQueries",
            I: PotentialLocsInitialQueriesRequest,
            O: PotentialLocsInitialQueriesResponse,
            kind: MethodKind.ServerStreaming
        },
        getChatTitle: {
            name: "GetChatTitle",
            I: GetChatTitleRequest,
            O: GetChatTitleResponse,
            kind: MethodKind.Unary
        },
        getCompletion: {
            name: "GetCompletion",
            I: GetCompletionRequest,
            O: GetCompletionResponse,
            kind: MethodKind.Unary
        },
        isolatedTreesitter: {
            name: "IsolatedTreesitter",
            I: IsolatedTreesitterRequest,
            O: IsolatedTreesitterResponse,
            kind: MethodKind.Unary
        },
        getSimplePrompt: {
            name: "GetSimplePrompt",
            I: GetSimplePromptRequest,
            O: GetSimplePromptResponse,
            kind: MethodKind.Unary
        },
        getPassthroughPrompt: {
            name: "GetPassthroughPrompt",
            I: GetPassthroughPromptRequest,
            O: GetPassthroughPromptResponse,
            kind: MethodKind.Unary
        },
        suggestQuickActions: {
            name: "SuggestQuickActions",
            I: SuggestQuickActionsRequest,
            O: SuggestQuickActionsResponse,
            kind: MethodKind.Unary
        },
        checkLongFilesFit: {
            name: "CheckLongFilesFit",
            I: GetChatRequest,
            O: CheckLongFilesFitResponse,
            kind: MethodKind.Unary
        },
        getEvaluationPrompt: {
            name: "GetEvaluationPrompt",
            I: GetEvaluationPromptRequest,
            O: GetEvaluationPromptResponse,
            kind: MethodKind.Unary
        },
        getUserInfo: {
            name: "GetUserInfo",
            I: GetUserInfoRequest,
            O: GetUserInfoResponse,
            kind: MethodKind.Unary
        },
        streamChat: {
            name: "StreamChat",
            I: GetChatRequest,
            O: StreamChatResponse,
            kind: MethodKind.ServerStreaming
        },
        streamChatWeb: {
            name: "StreamChatWeb",
            I: GetChatRequest,
            O: StreamChatResponse,
            kind: MethodKind.ServerStreaming
        },
        warmChatCache: {
            name: "WarmChatCache",
            I: WarmChatCacheRequest,
            O: WarmChatCacheResponse,
            kind: MethodKind.Unary
        },
        streamEdit: {
            name: "StreamEdit",
            I: StreamEditRequest,
            O: StreamChatResponse,
            kind: MethodKind.ServerStreaming
        },
        preloadEdit: {
            name: "PreloadEdit",
            I: PreloadEditRequest,
            O: PreloadEditResponse,
            kind: MethodKind.Unary
        },
        streamFastEdit: {
            name: "StreamFastEdit",
            I: StreamFastEditRequest,
            O: StreamFastEditResponse,
            kind: MethodKind.ServerStreaming
        },
        streamGenerate: {
            name: "StreamGenerate",
            I: StreamGenerateRequest,
            O: StreamChatResponse,
            kind: MethodKind.ServerStreaming
        },
        streamInlineLongCompletion: {
            name: "StreamInlineLongCompletion",
            I: StreamInlineLongCompletionRequest,
            O: StreamChatResponse,
            kind: MethodKind.ServerStreaming
        },
        slashEdit: {
            name: "SlashEdit",
            I: SlashEditRequest,
            O: SlashEditResponse,
            kind: MethodKind.ServerStreaming
        },
        slashEditFollowUpWithPreviousEdits: {
            name: "SlashEditFollowUpWithPreviousEdits",
            I: SlashEditFollowUpWithPreviousEditsRequest,
            O: StreamSlashEditFollowUpWithPreviousEditsResponse,
            kind: MethodKind.ServerStreaming
        },
        streamAiPreviews: {
            name: "StreamAiPreviews",
            I: StreamAiPreviewsRequest,
            O: StreamAiPreviewsResponse,
            kind: MethodKind.ServerStreaming
        },
        shouldTurnOnCppOnboarding: {
            name: "ShouldTurnOnCppOnboarding",
            I: ShouldTurnOnCppOnboardingRequest,
            O: ShouldTurnOnCppOnboardingResponse,
            kind: MethodKind.Unary
        },
        getComposerAutocomplete: {
            name: "GetComposerAutocomplete",
            I: GetComposerAutocompleteRequest,
            O: GetComposerAutocompleteResponse,
            kind: MethodKind.Unary
        },
        streamReview: {
            name: "StreamReview",
            I: ReviewRequest,
            O: ReviewResponse,
            kind: MethodKind.ServerStreaming
        },
        streamReviewChat: {
            name: "StreamReviewChat",
            I: ReviewChatRequest,
            O: ReviewChatResponse,
            kind: MethodKind.ServerStreaming
        },
        checkQueuePosition: {
            name: "CheckQueuePosition",
            I: CheckQueuePositionRequest,
            O: CheckQueuePositionResponse,
            kind: MethodKind.Unary
        },
        checkUsageBasedPrice: {
            name: "CheckUsageBasedPrice",
            I: CheckUsageBasedPriceRequest,
            O: CheckUsageBasedPriceResponse,
            kind: MethodKind.Unary
        },
        doThisForMeCheck: {
            name: "DoThisForMeCheck",
            I: DoThisForMeCheckRequest,
            O: DoThisForMeCheckResponse,
            kind: MethodKind.Unary
        },
        streamDoThisForMe: {
            name: "StreamDoThisForMe",
            I: DoThisForMeRequest,
            O: DoThisForMeResponseWrapped,
            kind: MethodKind.ServerStreaming
        },
        streamChatToolformer: {
            name: "StreamChatToolformer",
            I: GetChatRequest,
            O: StreamChatToolformerResponse,
            kind: MethodKind.ServerStreaming
        },
        streamChatToolformerContinue: {
            name: "StreamChatToolformerContinue",
            I: StreamChatToolformerContinueRequest,
            O: StreamChatToolformerResponse,
            kind: MethodKind.ServerStreaming
        },
        pushAiThought: {
            name: "PushAiThought",
            I: PushAiThoughtRequest,
            O: PushAiThoughtResponse,
            kind: MethodKind.Unary
        },
        checkDoableAsTask: {
            name: "CheckDoableAsTask",
            I: CheckDoableAsTaskRequest,
            O: CheckDoableAsTaskResponse,
            kind: MethodKind.Unary
        },
        reportGroundTruthCandidate: {
            name: "ReportGroundTruthCandidate",
            I: ReportGroundTruthCandidateRequest,
            O: ReportGroundTruthCandidateResponse,
            kind: MethodKind.Unary
        },
        reportCmdKFate: {
            name: "ReportCmdKFate",
            I: ReportCmdKFateRequest,
            O: ReportCmdKFateResponse,
            kind: MethodKind.Unary
        },
        showWelcomeScreen: {
            name: "ShowWelcomeScreen",
            I: ShowWelcomeScreenRequest,
            O: ShowWelcomeScreenResponse,
            kind: MethodKind.Unary
        },
        interfaceAgentInit: {
            name: "InterfaceAgentInit",
            I: InterfaceAgentInitRequest,
            O: InterfaceAgentInitResponse,
            kind: MethodKind.Unary
        },
        streamInterfaceAgentStatus: {
            name: "StreamInterfaceAgentStatus",
            I: StreamInterfaceAgentStatusRequest,
            O: StreamInterfaceAgentStatusResponse,
            kind: MethodKind.ServerStreaming
        },
        taskGetInterfaceAgentStatus: {
            name: "TaskGetInterfaceAgentStatus",
            I: TaskGetInterfaceAgentStatusRequest,
            O: TaskGetInterfaceAgentStatusResponseWrapped,
            kind: MethodKind.ServerStreaming
        },
        updateVscodeProfile: {
            name: "UpdateVscodeProfile",
            I: UpdateVscodeProfileRequest,
            O: UpdateVscodeProfileResponse,
            kind: MethodKind.Unary
        },
        taskInit: {
            name: "TaskInit",
            I: TaskInitRequest,
            O: TaskInitResponse,
            kind: MethodKind.Unary
        },
        taskPause: {
            name: "TaskPause",
            I: TaskPauseRequest,
            O: TaskPauseResponse,
            kind: MethodKind.Unary
        },
        taskInfo: {
            name: "TaskInfo",
            I: TaskInfoRequest,
            O: TaskInfoResponse,
            kind: MethodKind.Unary
        },
        taskStreamLog: {
            name: "TaskStreamLog",
            I: TaskStreamLogRequest,
            O: TaskStreamLogResponse,
            kind: MethodKind.ServerStreaming
        },
        taskSendMessage: {
            name: "TaskSendMessage",
            I: TaskSendMessageRequest,
            O: TaskSendMessageResponse,
            kind: MethodKind.Unary
        },
        taskProvideResult: {
            name: "TaskProvideResult",
            I: TaskProvideResultRequest,
            O: TaskProvideResultResponse,
            kind: MethodKind.Unary
        },
        createExperimentalIndex: {
            name: "CreateExperimentalIndex",
            I: CreateExperimentalIndexRequest,
            O: CreateExperimentalIndexResponse,
            kind: MethodKind.Unary
        },
        listExperimentalIndexFiles: {
            name: "ListExperimentalIndexFiles",
            I: ListExperimentalIndexFilesRequest,
            O: ListExperimentalIndexFilesResponse,
            kind: MethodKind.Unary
        },
        listenExperimentalIndex: {
            name: "ListenExperimentalIndex",
            I: ListenExperimentalIndexRequest,
            O: ListenExperimentalIndexResponse,
            kind: MethodKind.ServerStreaming
        },
        registerFileToIndex: {
            name: "RegisterFileToIndex",
            I: RegisterFileToIndexRequest,
            O: RequestReceivedResponse,
            kind: MethodKind.Unary
        },
        setupIndexDependencies: {
            name: "SetupIndexDependencies",
            I: SetupIndexDependenciesRequest,
            O: SetupIndexDependenciesResponse,
            kind: MethodKind.Unary
        },
        computeIndexTopoSort: {
            name: "ComputeIndexTopoSort",
            I: ComputeIndexTopoSortRequest,
            O: ComputeIndexTopoSortResponse,
            kind: MethodKind.Unary
        },
        streamChatDeepContext: {
            name: "StreamChatDeepContext",
            I: StreamChatDeepContextRequest,
            O: StreamChatDeepContextResponse,
            kind: MethodKind.ServerStreaming
        },
        chooseCodeReferences: {
            name: "ChooseCodeReferences",
            I: ChooseCodeReferencesRequest,
            O: RequestReceivedResponse,
            kind: MethodKind.Unary
        },
        registerCodeReferences: {
            name: "RegisterCodeReferences",
            I: RegisterCodeReferencesRequest,
            O: RegisterCodeReferencesResponse,
            kind: MethodKind.Unary
        },
        extractPaths: {
            name: "ExtractPaths",
            I: ExtractPathsRequest,
            O: ExtractPathsResponse,
            kind: MethodKind.Unary
        },
        summarizeWithReferences: {
            name: "SummarizeWithReferences",
            I: SummarizeWithReferencesRequest,
            O: RequestReceivedResponse,
            kind: MethodKind.Unary
        },
        documentationQuery: {
            name: "DocumentationQuery",
            I: DocumentationQueryRequest,
            O: DocumentationQueryResponse,
            kind: MethodKind.Unary
        },
        availableDocs: {
            name: "AvailableDocs",
            I: AvailableDocsRequest,
            O: AvailableDocsResponse,
            kind: MethodKind.Unary
        },
        runWebSearch: {
            name: "RunWebSearch",
            I: RunWebSearchRequest,
            O: RunWebSearchResponse,
            kind: MethodKind.Unary
        },
        runWebFetch: {
            name: "RunWebFetch",
            I: RunWebFetchRequest,
            O: RunWebFetchResponse,
            kind: MethodKind.Unary
        },
        runGenerateImage: {
            name: "RunGenerateImage",
            I: RunGenerateImageRequest,
            O: RunGenerateImageResponse,
            kind: MethodKind.Unary
        },
        runGenerateVideo: {
            name: "RunGenerateVideo",
            I: RunGenerateVideoRequest,
            O: RunGenerateVideoResponse,
            kind: MethodKind.Unary
        },
        runXSearch: {
            name: "RunXSearch",
            I: RunXSearchRequest,
            O: RunXSearchResponse,
            kind: MethodKind.Unary
        },
        classifyAgentAutoReview: {
            name: "ClassifyAgentAutoReview",
            I: ClassifyAgentAutoReviewRequest,
            O: ClassifyAgentAutoReviewResponse,
            kind: MethodKind.Unary
        },
        runDescribeImage: {
            name: "RunDescribeImage",
            I: RunDescribeImageRequest,
            O: RunDescribeImageResponse,
            kind: MethodKind.Unary
        },
        detectShellHang: {
            name: "DetectShellHang",
            I: DetectShellHangRequest,
            O: DetectShellHangResponse,
            kind: MethodKind.Unary
        },
        reportFeedback: {
            name: "ReportFeedback",
            I: ReportFeedbackRequest,
            O: ReportFeedbackResponse,
            kind: MethodKind.Unary
        },
        reportBug: {
            name: "ReportBug",
            I: ReportBugRequest,
            O: ReportBugResponse,
            kind: MethodKind.Unary
        },
        streamChatContext: {
            name: "StreamChatContext",
            I: StreamChatContextRequest,
            O: StreamChatContextResponse,
            kind: MethodKind.ServerStreaming
        },
        generateTldr: {
            name: "GenerateTldr",
            I: GenerateTldrRequest,
            O: GenerateTldrResponse,
            kind: MethodKind.Unary
        },
        taskStreamChatContext: {
            name: "TaskStreamChatContext",
            I: TaskStreamChatContextRequest,
            O: TaskStreamChatContextResponseWrapped,
            kind: MethodKind.ServerStreaming
        },
        rerankResults: {
            name: "RerankResults",
            I: RerankerRequest,
            O: RerankerResponse,
            kind: MethodKind.Unary
        },
        modelQuery: {
            name: "ModelQuery",
            I: ModelQueryRequest,
            O: ModelQueryResponse,
            kind: MethodKind.Unary
        },
        modelQueryV2: {
            name: "ModelQueryV2",
            I: ModelQueryRequest,
            O: ModelQueryResponseV2,
            kind: MethodKind.ServerStreaming
        },
        intentPrediction: {
            name: "IntentPrediction",
            I: IntentPredictionRequest,
            O: IntentPredictionResponse,
            kind: MethodKind.Unary
        },
        getChatSuggestions: {
            name: "GetChatSuggestions",
            I: GetChatSuggestionsRequest,
            O: GetChatSuggestionsResponse,
            kind: MethodKind.Unary
        },
        getUserInstructions: {
            name: "GetUserInstructions",
            I: GetUserInstructionsRequest,
            O: GetUserInstructionsResponse,
            kind: MethodKind.Unary
        },
        streamCursorTutor: {
            name: "StreamCursorTutor",
            I: StreamCursorTutorRequest,
            O: StreamCursorTutorResponse,
            kind: MethodKind.ServerStreaming
        },
        checkFeatureStatus: {
            name: "CheckFeatureStatus",
            I: CheckFeatureStatusRequest,
            O: CheckFeatureStatusResponse,
            kind: MethodKind.Unary
        },
        checkFeaturesStatus: {
            name: "CheckFeaturesStatus",
            I: CheckFeaturesStatusRequest,
            O: CheckFeaturesStatusResponse,
            kind: MethodKind.Unary
        },
        checkFeatureStatusUnauthenticated: {
            name: "CheckFeatureStatusUnauthenticated",
            I: CheckFeatureStatusRequest,
            O: CheckFeatureStatusResponse,
            kind: MethodKind.Unary
        },
        getEffectiveTokenLimit: {
            name: "GetEffectiveTokenLimit",
            I: GetEffectiveTokenLimitRequest,
            O: GetEffectiveTokenLimitResponse,
            kind: MethodKind.Unary
        },
        getContextScores: {
            name: "GetContextScores",
            I: ContextScoresRequest,
            O: ContextScoresResponse,
            kind: MethodKind.Unary
        },
        streamCpp: {
            name: "StreamCpp",
            I: StreamCppRequest,
            O: StreamCppResponse,
            kind: MethodKind.ServerStreaming
        },
        cppConfig: {
            name: "CppConfig",
            I: CppConfigRequest,
            O: CppConfigResponse,
            kind: MethodKind.Unary
        },
        cppEditHistoryStatus: {
            name: "CppEditHistoryStatus",
            I: CppEditHistoryStatusRequest,
            O: CppEditHistoryStatusResponse,
            kind: MethodKind.Unary
        },
        cppAppend: {
            name: "CppAppend",
            I: CppAppendRequest,
            O: CppAppendResponse,
            kind: MethodKind.Unary
        },
        refreshTabContext: {
            name: "RefreshTabContext",
            I: RefreshTabContextRequest,
            O: RefreshTabContextResponse,
            kind: MethodKind.Unary
        },
        checkNumberConfig: {
            name: "CheckNumberConfig",
            I: CheckNumberConfigRequest,
            O: CheckNumberConfigResponse,
            kind: MethodKind.Unary
        },
        checkNumberConfigUnauthenticated: {
            name: "CheckNumberConfigUnauthenticated",
            I: CheckNumberConfigRequest,
            O: CheckNumberConfigResponse,
            kind: MethodKind.Unary
        },
        checkNumberConfigs: {
            name: "CheckNumberConfigs",
            I: CheckNumberConfigsRequest,
            O: CheckNumberConfigsResponse,
            kind: MethodKind.Unary
        },
        streamTerminalAutocomplete: {
            name: "StreamTerminalAutocomplete",
            I: StreamTerminalAutocompleteRequest,
            O: StreamTerminalAutocompleteResponse,
            kind: MethodKind.ServerStreaming
        },
        streamPseudocodeGenerator: {
            name: "StreamPseudocodeGenerator",
            I: StreamPseudocodeGeneratorRequest,
            O: StreamPseudocodeGeneratorResponse,
            kind: MethodKind.ServerStreaming
        },
        streamPseudocodeMapper: {
            name: "StreamPseudocodeMapper",
            I: StreamPseudocodeMapperRequest,
            O: StreamPseudocodeMapperResponse,
            kind: MethodKind.ServerStreaming
        },
        acknowledgeGracePeriodDisclaimer: {
            name: "AcknowledgeGracePeriodDisclaimer",
            I: AcknowledgeGracePeriodDisclaimerRequest,
            O: AcknowledgeGracePeriodDisclaimerResponse,
            kind: MethodKind.Unary
        },
        streamAiLintBug: {
            name: "StreamAiLintBug",
            I: StreamAiLintBugRequest,
            O: StreamAiLintBugResponse,
            kind: MethodKind.ServerStreaming
        },
        streamAiCursorHelp: {
            name: "StreamAiCursorHelp",
            I: StreamAiCursorHelpRequest,
            O: StreamAiCursorHelpResponse,
            kind: MethodKind.ServerStreaming
        },
        logUserLintReply: {
            name: "LogUserLintReply",
            I: LogUserLintReplyRequest,
            O: LogUserLintReplyResponse,
            kind: MethodKind.Unary
        },
        logLinterExplicitUserFeedback: {
            name: "LogLinterExplicitUserFeedback",
            I: LogLinterExplicitUserFeedbackRequest,
            O: LogLinterExplicitUserFeedbackResponse,
            kind: MethodKind.Unary
        },
        streamFixMarkers: {
            name: "StreamFixMarkers",
            I: FixMarkersRequest,
            O: FixMarkersResponse,
            kind: MethodKind.ServerStreaming
        },
        reportInlineAction: {
            name: "ReportInlineAction",
            I: ReportInlineActionRequest,
            O: ReportInlineActionResponse,
            kind: MethodKind.Unary
        },
        streamPriomptPrompt: {
            name: "StreamPriomptPrompt",
            I: StreamPriomptPromptRequest,
            O: StreamPriomptPromptResponse,
            kind: MethodKind.ServerStreaming
        },
        streamLint: {
            name: "StreamLint",
            I: StreamLintRequest,
            O: StreamChatResponse,
            kind: MethodKind.ServerStreaming
        },
        streamNewLintRule: {
            name: "StreamNewLintRule",
            I: StreamNewRuleRequest,
            O: StreamChatResponse,
            kind: MethodKind.ServerStreaming
        },
        aiProject: {
            name: "AiProject",
            I: AiProjectRequest,
            O: AiProjectResponse,
            kind: MethodKind.ServerStreaming
        },
        toCamelCase: {
            name: "ToCamelCase",
            I: ToCamelCaseRequest,
            O: ToCamelCaseResponse,
            kind: MethodKind.Unary
        },
        reportGenerationFeedback: {
            name: "ReportGenerationFeedback",
            I: ReportGenerationFeedbackRequest,
            O: ReportGenerationFeedbackResponse,
            kind: MethodKind.Unary
        },
        reportAgentFeedback: {
            name: "ReportAgentFeedback",
            I: ReportAgentFeedbackRequest,
            O: ReportAgentFeedbackResponse,
            kind: MethodKind.Unary
        },
        reportAgentMessageFeedback: {
            name: "ReportAgentMessageFeedback",
            I: ReportAgentMessageFeedbackRequest,
            O: ReportAgentMessageFeedbackResponse,
            kind: MethodKind.Unary
        },
        reportAutoRoutingResultFeedback: {
            name: "ReportAutoRoutingResultFeedback",
            I: ReportAutoRoutingResultFeedbackRequest,
            O: ReportAutoRoutingResultFeedbackResponse,
            kind: MethodKind.Unary
        },
        getThoughtAnnotation: {
            name: "GetThoughtAnnotation",
            I: GetThoughtAnnotationRequest,
            O: GetThoughtAnnotationResponse,
            kind: MethodKind.Unary
        },
        streamWebCmdKV1: {
            name: "StreamWebCmdKV1",
            I: StreamWebCmdKV1Request,
            O: StreamWebCmdKV1Response,
            kind: MethodKind.ServerStreaming
        },
        streamNextCursorPrediction: {
            name: "StreamNextCursorPrediction",
            I: StreamNextCursorPredictionRequest,
            O: StreamNextCursorPredictionResponse,
            kind: MethodKind.ServerStreaming
        },
        isCursorPredictionEnabled: {
            name: "IsCursorPredictionEnabled",
            I: IsCursorPredictionEnabledRequest,
            O: IsCursorPredictionEnabledResponse,
            kind: MethodKind.Unary
        },
        getCppEditClassification: {
            name: "GetCppEditClassification",
            I: GetCppEditClassificationRequest,
            O: GetCppEditClassificationResponse,
            kind: MethodKind.Unary
        },
        getTerminalCompletion: {
            name: "GetTerminalCompletion",
            I: GetTerminalCompletionRequest,
            O: GetTerminalCompletionResponse,
            kind: MethodKind.Unary
        },
        takeNotesOnCommitDiff: {
            name: "TakeNotesOnCommitDiff",
            I: TakeNotesOnCommitDiffRequest,
            O: TakeNotesOnCommitDiffResponse,
            kind: MethodKind.Unary
        },
        bulkEmbed: {
            name: "BulkEmbed",
            I: BulkEmbedRequest,
            O: BulkEmbedResponse,
            kind: MethodKind.Unary
        },
        backgroundCmdKEval: {
            name: "BackgroundCmdKEval",
            I: BackgroundCmdKEvalRequest,
            O: BackgroundCmdKEvalResponse,
            kind: MethodKind.ServerStreaming
        },
        backgroundCmdK: {
            name: "BackgroundCmdK",
            I: BackgroundCmdKRequest,
            O: BackgroundCmdKResponse,
            kind: MethodKind.ServerStreaming
        },
        calculateAutoSelection: {
            name: "CalculateAutoSelection",
            I: CalculateAutoSelectionRequest,
            O: CalculateAutoSelectionResponse,
            kind: MethodKind.Unary
        },
        getAtSymbolSuggestions: {
            name: "GetAtSymbolSuggestions",
            I: GetAtSymbolSuggestionsRequest,
            O: GetAtSymbolSuggestionsResponse,
            kind: MethodKind.Unary
        },
        getCodebaseQuestions: {
            name: "GetCodebaseQuestions",
            I: GetChatRequest,
            O: GetCodebaseQuestionsResponse,
            kind: MethodKind.Unary
        },
        cppEditHistoryAppend: {
            name: "CppEditHistoryAppend",
            I: EditHistoryAppendChangesRequest,
            O: EditHistoryAppendChangesResponse,
            kind: MethodKind.Unary
        },
        devOnlyGetPastRequestIds: {
            name: "DevOnlyGetPastRequestIds",
            I: DevOnlyGetPastRequestIdsRequest,
            O: DevOnlyGetPastRequestIdsResponse,
            kind: MethodKind.Unary
        },
        getFilesForComposer: {
            name: "GetFilesForComposer",
            I: GetFilesForComposerRequest,
            O: GetFilesForComposerResponse,
            kind: MethodKind.Unary
        },
        tryParseTypeScriptTreeSitter: {
            name: "TryParseTypeScriptTreeSitter",
            I: TryParseTypeScriptTreeSitterRequest,
            O: TryParseTypeScriptTreeSitterResponse,
            kind: MethodKind.Unary
        },
        nameTab: {
            name: "NameTab",
            I: NameTabRequest,
            O: NameTabResponse,
            kind: MethodKind.Unary
        },
        keepTaskList: {
            name: "KeepTaskList",
            I: KeepTaskListRequest,
            O: KeepTaskListResponse,
            kind: MethodKind.Unary
        },
        isTerminalFinishedV2: {
            name: "IsTerminalFinishedV2",
            I: IsTerminalFinishedRequest,
            O: IsTerminalFinishedResponseV2,
            kind: MethodKind.Unary
        },
        testModelStatus: {
            name: "TestModelStatus",
            I: TestModelStatusRequest,
            O: TestModelStatusResponse,
            kind: MethodKind.Unary
        },
        findBugs: {
            name: "FindBugs",
            I: FindBugsRequest,
            O: FindBugsResponse,
            kind: MethodKind.Unary
        },
        contextReranking: {
            name: "ContextReranking",
            I: ContextRerankingRequest,
            O: ContextRerankingResponse,
            kind: MethodKind.Unary
        },
        autoContext: {
            name: "AutoContext",
            I: AutoContextRequest,
            O: AutoContextResponse,
            kind: MethodKind.Unary
        },
        writeGitCommitMessage: {
            name: "WriteGitCommitMessage",
            I: WriteGitCommitMessageRequest,
            O: WriteGitCommitMessageResponse,
            kind: MethodKind.Unary
        },
        writeGitBranchName: {
            name: "WriteGitBranchName",
            I: WriteGitBranchNameRequest,
            O: WriteGitBranchNameResponse,
            kind: MethodKind.Unary
        },
        streamBugBot: {
            name: "StreamBugBot",
            I: StreamBugBotRequest,
            O: StreamBugBotResponse,
            kind: MethodKind.ServerStreaming
        },
        streamBugBotAgentic: {
            name: "StreamBugBotAgentic",
            I: StreamBugBotAgenticClientMessage,
            O: StreamBugBotAgenticServerMessage,
            kind: MethodKind.BiDiStreaming
        },
        streamBugBotAgenticSSE: {
            name: "StreamBugBotAgenticSSE",
            I: BidiRequestId,
            O: StreamBugBotAgenticServerMessage,
            kind: MethodKind.ServerStreaming
        },
        streamBugBotAgenticPoll: {
            name: "StreamBugBotAgenticPoll",
            I: BidiPollRequest,
            O: BidiPollResponse,
            kind: MethodKind.ServerStreaming
        },
        streamUiBestOfNJudge: {
            name: "StreamUiBestOfNJudge",
            I: StreamUiBestOfNJudgeClientMessage,
            O: StreamUiBestOfNJudgeServerMessage,
            kind: MethodKind.BiDiStreaming
        },
        streamUiBestOfNJudgeSSE: {
            name: "StreamUiBestOfNJudgeSSE",
            I: BidiRequestId,
            O: StreamUiBestOfNJudgeServerMessage,
            kind: MethodKind.ServerStreaming
        },
        streamUiBestOfNJudgePoll: {
            name: "StreamUiBestOfNJudgePoll",
            I: BidiPollRequest,
            O: BidiPollResponse,
            kind: MethodKind.ServerStreaming
        },
        checkBugBotPrice: {
            name: "CheckBugBotPrice",
            I: CheckBugBotPriceRequest,
            O: CheckBugBotPriceResponse,
            kind: MethodKind.Unary
        },
        checkBugBotTelemetryHealthy: {
            name: "CheckBugBotTelemetryHealthy",
            I: CheckBugBotTelemetryHealthyRequest,
            O: CheckBugBotTelemetryHealthyResponse,
            kind: MethodKind.Unary
        },
        recordIdeBugReaction: {
            name: "RecordIdeBugReaction",
            I: RecordIdeBugReactionRequest,
            O: RecordIdeBugReactionResponse,
            kind: MethodKind.Unary
        },
        getSuggestedBugBotIterations: {
            name: "GetSuggestedBugBotIterations",
            I: GetSuggestedBugBotIterationsRequest,
            O: GetSuggestedBugBotIterationsResponse,
            kind: MethodKind.Unary
        },
        getEditorBugbotAutoRunStatus: {
            name: "GetEditorBugbotAutoRunStatus",
            I: GetEditorBugbotAutoRunStatusRequest,
            O: GetEditorBugbotAutoRunStatusResponse,
            kind: MethodKind.Unary
        },
        testBidi: {
            name: "TestBidi",
            I: TestBidiRequest,
            O: TestBidiResponse,
            kind: MethodKind.BiDiStreaming
        },
        streamDiffReview: {
            name: "StreamDiffReview",
            I: GetDiffReviewRequest,
            O: StreamDiffReviewResponse,
            kind: MethodKind.ServerStreaming
        },
        streamDiffReviewByFile: {
            name: "StreamDiffReviewByFile",
            I: GetDiffReviewRequest,
            O: StreamDiffReviewByFileResponse,
            kind: MethodKind.ServerStreaming
        },
        getModelLabels: {
            name: "GetModelLabels",
            I: GetModelLabelsRequest,
            O: GetModelLabelsResponse,
            kind: MethodKind.Unary
        },
        getLastDefaultModelNudge: {
            name: "GetLastDefaultModelNudge",
            I: GetLastDefaultModelNudgeRequest,
            O: GetLastDefaultModelNudgeResponse,
            kind: MethodKind.Unary
        },
        getDefaultModelNudgeData: {
            name: "GetDefaultModelNudgeData",
            I: GetDefaultModelNudgeDataRequest,
            O: GetDefaultModelNudgeDataResponse,
            kind: MethodKind.Unary
        },
        getDefaultModel: {
            name: "GetDefaultModel",
            I: GetDefaultModelRequest,
            O: GetDefaultModelResponse,
            kind: MethodKind.Unary
        },
        reportCommitAiAnalytics: {
            name: "ReportCommitAiAnalytics",
            I: ReportCommitAiAnalyticsRequest,
            O: ReportCommitAiAnalyticsResponse,
            kind: MethodKind.Unary
        },
        testBedrockCredentials: {
            name: "TestBedrockCredentials",
            I: TestBedrockCredentialsRequest,
            O: TestBedrockCredentialsResponse,
            kind: MethodKind.Unary
        },
        reportAiCodeChangeMetrics: {
            name: "ReportAiCodeChangeMetrics",
            I: ReportAiCodeChangeMetricsRequest,
            O: ReportAiCodeChangeMetricsResponse,
            kind: MethodKind.Unary
        },
        reportProcessMetrics: {
            name: "ReportProcessMetrics",
            I: ReportProcessMetricsRequest,
            O: ReportProcessMetricsResponse,
            kind: MethodKind.Unary
        },
        reportProcessMetricsV2: {
            name: "ReportProcessMetricsV2",
            I: ReportProcessMetricsV2Request,
            O: ReportProcessMetricsV2Response,
            kind: MethodKind.Unary
        },
        reportSandProcessMetrics: {
            name: "ReportSandProcessMetrics",
            I: ReportSandProcessMetricsRequest,
            O: ReportSandProcessMetricsResponse,
            kind: MethodKind.Unary
        },
        reportClientNumericMetrics: {
            name: "ReportClientNumericMetrics",
            I: ReportClientNumericMetricsRequest,
            O: ReportClientNumericMetricsResponse,
            kind: MethodKind.Unary
        },
        potentiallyGenerateMemory: {
            name: "PotentiallyGenerateMemory",
            I: PotentiallyGenerateMemoryRequest,
            O: PotentiallyGenerateMemoryResponse,
            kind: MethodKind.Unary
        },
        knowledgeBaseAdd: {
            name: "KnowledgeBaseAdd",
            I: KnowledgeBaseAddRequest,
            O: KnowledgeBaseAddResponse,
            kind: MethodKind.Unary
        },
        knowledgeBaseList: {
            name: "KnowledgeBaseList",
            I: KnowledgeBaseListRequest,
            O: KnowledgeBaseListResponse,
            kind: MethodKind.Unary
        },
        knowledgeBaseRemove: {
            name: "KnowledgeBaseRemove",
            I: KnowledgeBaseRemoveRequest,
            O: KnowledgeBaseRemoveResponse,
            kind: MethodKind.Unary
        },
        knowledgeBaseUpdate: {
            name: "KnowledgeBaseUpdate",
            I: KnowledgeBaseUpdateRequest,
            O: KnowledgeBaseUpdateResponse,
            kind: MethodKind.Unary
        },
        fetchRelevantKnowledgeForConversation: {
            name: "FetchRelevantKnowledgeForConversation",
            I: FetchRelevantKnowledgeForConversationRequest,
            O: FetchRelevantKnowledgeForConversationResponse,
            kind: MethodKind.Unary
        },
        inferBackgroundComposerScripts: {
            name: "InferBackgroundComposerScripts",
            I: InferBackgroundComposerScriptsRequest,
            O: InferBackgroundComposerScriptsResponse,
            kind: MethodKind.Unary
        },
        getBackgroundComposerFeedbackLink: {
            name: "GetBackgroundComposerFeedbackLink",
            I: GetBackgroundComposerFeedbackLinkRequest,
            O: GetBackgroundComposerFeedbackLinkResponse,
            kind: MethodKind.Unary
        },
        getUsableModels: {
            name: "GetUsableModels",
            I: GetUsableModelsRequest,
            O: GetUsableModelsResponse,
            kind: MethodKind.Unary
        },
        getDefaultModelForCli: {
            name: "GetDefaultModelForCli",
            I: GetDefaultModelForCliRequest,
            O: GetDefaultModelForCliResponse,
            kind: MethodKind.Unary
        },
        streamComposerEnhancer: {
            name: "StreamComposerEnhancer",
            I: ComposerEnhancerClientMessage,
            O: ComposerEnhancerServerMessage,
            kind: MethodKind.BiDiStreaming
        },
        streamComposerEnhancerSSE: {
            name: "StreamComposerEnhancerSSE",
            I: BidiRequestId,
            O: ComposerEnhancerServerMessage,
            kind: MethodKind.ServerStreaming
        },
        streamComposerEnhancerPoll: {
            name: "StreamComposerEnhancerPoll",
            I: BidiPollRequest,
            O: BidiPollResponse,
            kind: MethodKind.ServerStreaming
        },
        streamStt: {
            name: "StreamStt",
            I: SttClientMessage,
            O: SttServerMessage,
            kind: MethodKind.BiDiStreaming
        },
        streamSttSSE: {
            name: "StreamSttSSE",
            I: BidiRequestId,
            O: SttServerMessage,
            kind: MethodKind.ServerStreaming
        },
        streamSttPoll: {
            name: "StreamSttPoll",
            I: BidiPollRequest,
            O: BidiPollResponse,
            kind: MethodKind.ServerStreaming
        },
        transcribeAudio: {
            name: "TranscribeAudio",
            I: TranscribeAudioRequest,
            O: TranscribeAudioResponse,
            kind: MethodKind.Unary
        },
        llmGatewayConnectionTester: {
            name: "LlmGatewayConnectionTester",
            I: LlmGatewayConnectionTesterRequest,
            O: LlmGatewayConnectionTesterResponse,
            kind: MethodKind.Unary
        },
        testTeamInferenceHookConnection: {
            name: "TestTeamInferenceHookConnection",
            I: TestTeamInferenceHookConnectionRequest,
            O: TestTeamInferenceHookConnectionResponse,
            kind: MethodKind.Unary
        },
        textToSpeech: {
            name: "TextToSpeech",
            I: TextToSpeechRequest,
            O: TextToSpeechResponse,
            kind: MethodKind.Unary
        },
        mintRealtimeVoiceSecret: {
            name: "MintRealtimeVoiceSecret",
            I: MintRealtimeVoiceSecretRequest,
            O: MintRealtimeVoiceSecretResponse,
            kind: MethodKind.Unary
        },
        setRealtimeVoice: {
            name: "SetRealtimeVoice",
            I: SetRealtimeVoiceRequest,
            O: SetRealtimeVoiceResponse,
            kind: MethodKind.Unary
        },
        getRealtimeVoice: {
            name: "GetRealtimeVoice",
            I: GetRealtimeVoiceRequest,
            O: GetRealtimeVoiceResponse,
            kind: MethodKind.Unary
        },
        nameAgent: {
            name: "NameAgent",
            I: NameAgentRequest,
            O: NameAgentResponse,
            kind: MethodKind.Unary
        },
        evaluatePromptHook: {
            name: "EvaluatePromptHook",
            I: EvaluatePromptHookRequest,
            O: EvaluatePromptHookResponse,
            kind: MethodKind.Unary
        },
        computerUseDecideNextAction: {
            name: "ComputerUseDecideNextAction",
            I: ComputerUseDecideNextActionRequest,
            O: ComputerUseDecideNextActionResponse,
            kind: MethodKind.Unary
        },
        getCloudSetupBlockers: {
            name: "GetCloudSetupBlockers",
            I: GetCloudSetupBlockersRequest,
            O: GetCloudSetupBlockersResponse,
            kind: MethodKind.Unary
        }
    }
};

}
