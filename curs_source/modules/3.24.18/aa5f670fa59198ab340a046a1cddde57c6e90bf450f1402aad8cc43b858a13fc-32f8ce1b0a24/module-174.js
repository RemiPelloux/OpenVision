require.r(exports);
require.d(exports, {
    AcceptCursorPredictionEvent: ()=>AcceptCursorPredictionEvent,
    AddTabRequestToEvalRequest: ()=>AddTabRequestToEvalRequest,
    AddTabRequestToEvalResponse: ()=>AddTabRequestToEvalResponse,
    AdditionalFile: ()=>AdditionalFile,
    AiRequestEvent: ()=>AiRequestEvent,
    AiRequestEvent_RequestType: ()=>AiRequestEvent_RequestType,
    AiRequestEvent_Source: ()=>AiRequestEvent_Source,
    AnythingQuickAccessItem: ()=>AnythingQuickAccessItem,
    AnythingQuickAccessItem_Resource: ()=>AnythingQuickAccessItem_Resource,
    AnythingQuickAccessSelectionEvent: ()=>AnythingQuickAccessSelectionEvent,
    AvailableCppModelsRequest: ()=>AvailableCppModelsRequest,
    AvailableCppModelsResponse: ()=>AvailableCppModelsResponse,
    BackgroundFilesEvent: ()=>BackgroundFilesEvent,
    BackgroundFilesEvent_BackgroundFile: ()=>BackgroundFilesEvent_BackgroundFile,
    BeforeAiEditEvent: ()=>BeforeAiEditEvent,
    BlockDiffPatch: ()=>BlockDiffPatch,
    BlockDiffPatch_Change: ()=>BlockDiffPatch_Change,
    BlockDiffPatch_ModelWindow: ()=>BlockDiffPatch_ModelWindow,
    BrowserEvent: ()=>BrowserEvent,
    BrowserEvent_Navigation: ()=>BrowserEvent_Navigation,
    BrowserEvent_TabClosed: ()=>BrowserEvent_TabClosed,
    BrowserEvent_TabCreated: ()=>BrowserEvent_TabCreated,
    BrowserEvent_ToolAction: ()=>BrowserEvent_ToolAction,
    BrowserEvent_ToolAction_Source: ()=>BrowserEvent_ToolAction_Source,
    BugBotEvent: ()=>BugBotEvent,
    BugBotEvent_BackgroundIntervalEnded: ()=>BugBotEvent_BackgroundIntervalEnded,
    BugBotEvent_BackgroundIntervalErrored: ()=>BugBotEvent_BackgroundIntervalErrored,
    BugBotEvent_BackgroundIntervalInterrupted: ()=>BugBotEvent_BackgroundIntervalInterrupted,
    BugBotEvent_BackgroundIntervalInterruptedReason: ()=>BugBotEvent_BackgroundIntervalInterruptedReason,
    BugBotEvent_BackgroundIntervalStarted: ()=>BugBotEvent_BackgroundIntervalStarted,
    BugBotEvent_PressedAddToChat: ()=>BugBotEvent_PressedAddToChat,
    BugBotEvent_PressedFixInComposer: ()=>BugBotEvent_PressedFixInComposer,
    BugBotEvent_PressedOpenInEditor: ()=>BugBotEvent_PressedOpenInEditor,
    BugBotEvent_ReportsGenerated: ()=>BugBotEvent_ReportsGenerated,
    BugBotEvent_Started: ()=>BugBotEvent_Started,
    BugBotEvent_UserFeedback: ()=>BugBotEvent_UserFeedback,
    BugBotEvent_ViewedReport: ()=>BugBotEvent_ViewedReport,
    BugBotEvent_ViewedReport_ReportView: ()=>BugBotEvent_ViewedReport_ReportView,
    BugBotLinterEvent: ()=>BugBotLinterEvent,
    BugBotLinterEvent_LintDismissed: ()=>BugBotLinterEvent_LintDismissed,
    BugBotLinterEvent_LintGenerated: ()=>BugBotLinterEvent_LintGenerated,
    BugBotLinterEvent_NotShownBecauseHeuristic: ()=>BugBotLinterEvent_NotShownBecauseHeuristic,
    BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic: ()=>BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic,
    BugBotLinterEvent_Started: ()=>BugBotLinterEvent_Started,
    BugBotLinterEvent_UnviewedReport: ()=>BugBotLinterEvent_UnviewedReport,
    BugBotLinterEvent_UserFeedback: ()=>BugBotLinterEvent_UserFeedback,
    BugBotLinterEvent_ViewedReport: ()=>BugBotLinterEvent_ViewedReport,
    ChatEvent: ()=>ChatEvent,
    ChatEvent_EndOfAnyGeneration: ()=>ChatEvent_EndOfAnyGeneration,
    ChatEvent_EndOfUninterruptedGeneration: ()=>ChatEvent_EndOfUninterruptedGeneration,
    ChatEvent_SubmitPrompt: ()=>ChatEvent_SubmitPrompt,
    CmdKEvent: ()=>CmdKEvent,
    CmdKEvent_AcceptDiffs: ()=>CmdKEvent_AcceptDiffs,
    CmdKEvent_AcceptPartialDiff: ()=>CmdKEvent_AcceptPartialDiff,
    CmdKEvent_AfterReject: ()=>CmdKEvent_AfterReject,
    CmdKEvent_EndOfGeneration: ()=>CmdKEvent_EndOfGeneration,
    CmdKEvent_InterruptGeneration: ()=>CmdKEvent_InterruptGeneration,
    CmdKEvent_RejectDiffs: ()=>CmdKEvent_RejectDiffs,
    CmdKEvent_RejectPartialDiff: ()=>CmdKEvent_RejectPartialDiff,
    CmdKEvent_SubmitPrompt: ()=>CmdKEvent_SubmitPrompt,
    CppAcceptEvent: ()=>CppAcceptEvent,
    CppAcceptEventNew: ()=>CppAcceptEventNew,
    CppAppendRequest: ()=>CppAppendRequest,
    CppAppendResponse: ()=>CppAppendResponse,
    CppChangeQuickActionEvent: ()=>CppChangeQuickActionEvent,
    CppConfigRequest: ()=>CppConfigRequest,
    CppConfigResponse: ()=>CppConfigResponse,
    CppConfigResponse_Heuristic: ()=>CppConfigResponse_Heuristic,
    CppConfigResponse_ImportPredictionConfig: ()=>CppConfigResponse_ImportPredictionConfig,
    CppConfigResponse_MergeBehavior: ()=>CppConfigResponse_MergeBehavior,
    CppConfigResponse_RecentlyRejectedEditThresholds: ()=>CppConfigResponse_RecentlyRejectedEditThresholds,
    CppConfigResponse_SuggestionHintConfig: ()=>CppConfigResponse_SuggestionHintConfig,
    CppContextItem: ()=>CppContextItem,
    CppCopyEvent: ()=>CppCopyEvent,
    CppDebouncedCursorMovementEvent: ()=>CppDebouncedCursorMovementEvent,
    CppEditHistoryStatusRequest: ()=>CppEditHistoryStatusRequest,
    CppEditHistoryStatusResponse: ()=>CppEditHistoryStatusResponse,
    CppEditorChangedEvent: ()=>CppEditorChangedEvent,
    CppFate: ()=>CppFate,
    CppFileDiffHistory: ()=>CppFileDiffHistory,
    CppHistoryAppendEvent: ()=>CppHistoryAppendEvent,
    CppIntentInfo: ()=>CppIntentInfo,
    CppLinterErrorEvent: ()=>CppLinterErrorEvent,
    CppManualTriggerEvent: ()=>CppManualTriggerEvent,
    CppManualTriggerEventNew: ()=>CppManualTriggerEventNew,
    CppParameterHint: ()=>CppParameterHint,
    CppPartialAcceptEvent: ()=>CppPartialAcceptEvent,
    CppQuickAction: ()=>CppQuickAction,
    CppQuickActionCommand: ()=>CppQuickActionCommand,
    CppQuickActionFireEvent: ()=>CppQuickActionFireEvent,
    CppQuickAction_Edit: ()=>CppQuickAction_Edit,
    CppRejectEvent: ()=>CppRejectEvent,
    CppRejectEventNew: ()=>CppRejectEventNew,
    CppSessionEvent: ()=>CppSessionEvent,
    CppSource: ()=>CppSource,
    CppStoppedTrackingModelEvent: ()=>CppStoppedTrackingModelEvent,
    CppStoppedTrackingModelEvent_StoppedTrackingModelReason: ()=>CppStoppedTrackingModelEvent_StoppedTrackingModelReason,
    CppSuggestEvent: ()=>CppSuggestEvent,
    CppSuggestion: ()=>CppSuggestion,
    CppTimelineEvent: ()=>CppTimelineEvent,
    CppTimelineEvent_Change: ()=>CppTimelineEvent_Change,
    CppTimelineEvent_Change_Status: ()=>CppTimelineEvent_Change_Status,
    CppTriggerEvent: ()=>CppTriggerEvent,
    CptFileDiffHistory: ()=>CptFileDiffHistory,
    CurrentlyShownCppSuggestion: ()=>CurrentlyShownCppSuggestion,
    CursorPrediction: ()=>CursorPrediction,
    CursorPrediction_CursorPredictionSource: ()=>CursorPrediction_CursorPredictionSource,
    CursorSelection: ()=>CursorSelection,
    Edit: ()=>Edit,
    EditHistoryAppendChangesRequest: ()=>EditHistoryAppendChangesRequest,
    EditHistoryAppendChangesRequest_PrivacyModeStatus: ()=>EditHistoryAppendChangesRequest_PrivacyModeStatus,
    EditHistoryAppendChangesResponse: ()=>EditHistoryAppendChangesResponse,
    EditPatch: ()=>EditPatch,
    EditorCloseEvent: ()=>EditorCloseEvent,
    FinishedCppGenerationEvent: ()=>FinishedCppGenerationEvent,
    GetCppEditClassificationRequest: ()=>GetCppEditClassificationRequest,
    GetCppEditClassificationResponse: ()=>GetCppEditClassificationResponse,
    GetCppEditClassificationResponse_LogProbs: ()=>GetCppEditClassificationResponse_LogProbs,
    GetCppEditClassificationResponse_ScoredEdit: ()=>GetCppEditClassificationResponse_ScoredEdit,
    GitEvent: ()=>GitEvent,
    GitEvent_OperationType: ()=>GitEvent_OperationType,
    IRange: ()=>IRange,
    LspSuggestedItems: ()=>LspSuggestedItems,
    LspSuggestion: ()=>LspSuggestion,
    LspSuggestionEvent: ()=>LspSuggestionEvent,
    MarkCppRequest: ()=>MarkCppRequest,
    MarkCppRequest_CppResponseTypes: ()=>MarkCppRequest_CppResponseTypes,
    MarkCppRequest_RangeTransformation: ()=>MarkCppRequest_RangeTransformation,
    MarkCppResponse: ()=>MarkCppResponse,
    MaybeDefinedPointInTimeModel: ()=>MaybeDefinedPointInTimeModel,
    ModelAddedEvent: ()=>ModelAddedEvent,
    ModelChange: ()=>ModelChange,
    ModelOpenedEvent: ()=>ModelOpenedEvent,
    ModelWithHistory: ()=>ModelWithHistory,
    NtpEvent: ()=>NtpEvent,
    OneIndexedPosition: ()=>OneIndexedPosition,
    PointInTimeModel: ()=>PointInTimeModel,
    RecordCppFateRequest: ()=>RecordCppFateRequest,
    RecordCppFateResponse: ()=>RecordCppFateResponse,
    RecoverableCppData: ()=>RecoverableCppData,
    RefreshTabContextRequest: ()=>RefreshTabContextRequest,
    RefreshTabContextResponse: ()=>RefreshTabContextResponse,
    RejectCursorPredictionEvent: ()=>RejectCursorPredictionEvent,
    RepoEvent: ()=>RepoEvent,
    RepoEvent_Type: ()=>RepoEvent_Type,
    ReviewChangesOpenedEvent: ()=>ReviewChangesOpenedEvent,
    ScrollEvent: ()=>ScrollEvent,
    SearchEvent: ()=>SearchEvent,
    SearchMatch: ()=>SearchMatch,
    SearchResultFile: ()=>SearchResultFile,
    ShouldTurnOnCppOnboardingRequest: ()=>ShouldTurnOnCppOnboardingRequest,
    ShouldTurnOnCppOnboardingResponse: ()=>ShouldTurnOnCppOnboardingResponse,
    StartingModel: ()=>StartingModel,
    StreamCppRequest: ()=>StreamCppRequest,
    StreamCppRequest_ControlToken: ()=>StreamCppRequest_ControlToken,
    StreamCppResponse: ()=>StreamCppResponse,
    StreamCppResponse_CursorPredictionTarget: ()=>StreamCppResponse_CursorPredictionTarget,
    StreamCppResponse_ModelInfo: ()=>StreamCppResponse_ModelInfo,
    StreamHoldCppRequest: ()=>StreamHoldCppRequest,
    StreamHoldCppResponse: ()=>StreamHoldCppResponse,
    SuggestCursorPredictionEvent: ()=>SuggestCursorPredictionEvent,
    SuggestedEdit: ()=>SuggestedEdit,
    TabCloseEvent: ()=>TabCloseEvent,
    TerminalEvent: ()=>TerminalEvent,
    TerminalEvent_CommandFinish: ()=>TerminalEvent_CommandFinish,
    TerminalEvent_CommandStart: ()=>TerminalEvent_CommandStart,
    TerminalEvent_Create: ()=>TerminalEvent_Create,
    TerminalEvent_Exit: ()=>TerminalEvent_Exit,
    ToolCallEvent: ()=>ToolCallEvent,
    WorktreeEvent: ()=>WorktreeEvent,
    WorktreeEvent_BackgroundAgentComposerMapping: ()=>WorktreeEvent_BackgroundAgentComposerMapping,
    WorktreeEvent_EventType: ()=>WorktreeEvent_EventType,
    WorktreeEvent_WorktreeComposerMapping: ()=>WorktreeEvent_WorktreeComposerMapping
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-55.js");
var _lsp_subgraph_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-175.js");
var _filesyncserver_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-176.js");
var _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-91.js");
var _bugbot_pb_js__WEBPACK_IMPORTED_MODULE_5__ = require("./module-155.js");
const CppFate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CppFate", [
    {
        no: 0,
        name: "CPP_FATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CPP_FATE_ACCEPT",
        localName: "ACCEPT"
    },
    {
        no: 2,
        name: "CPP_FATE_REJECT",
        localName: "REJECT"
    },
    {
        no: 3,
        name: "CPP_FATE_PARTIAL_ACCEPT",
        localName: "PARTIAL_ACCEPT"
    }
]);
const CppSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CppSource", [
    {
        no: 0,
        name: "CPP_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CPP_SOURCE_LINE_CHANGE",
        localName: "LINE_CHANGE"
    },
    {
        no: 2,
        name: "CPP_SOURCE_TYPING",
        localName: "TYPING"
    },
    {
        no: 3,
        name: "CPP_SOURCE_OPTION_HOLD",
        localName: "OPTION_HOLD"
    },
    {
        no: 4,
        name: "CPP_SOURCE_LINTER_ERRORS",
        localName: "LINTER_ERRORS"
    },
    {
        no: 5,
        name: "CPP_SOURCE_PARAMETER_HINTS",
        localName: "PARAMETER_HINTS"
    },
    {
        no: 6,
        name: "CPP_SOURCE_CURSOR_PREDICTION",
        localName: "CURSOR_PREDICTION"
    },
    {
        no: 7,
        name: "CPP_SOURCE_MANUAL_TRIGGER",
        localName: "MANUAL_TRIGGER"
    },
    {
        no: 8,
        name: "CPP_SOURCE_EDITOR_CHANGE",
        localName: "EDITOR_CHANGE"
    },
    {
        no: 9,
        name: "CPP_SOURCE_LSP_SUGGESTIONS",
        localName: "LSP_SUGGESTIONS"
    }
]);
const CppIntentInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppIntentInfo", ()=>[
        {
            no: 1,
            name: "source",
            kind: "scalar",
            T: 9
        }
    ]);
const LspSuggestion = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LspSuggestion", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        }
    ]);
const LspSuggestedItems = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LspSuggestedItems", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "message",
            T: LspSuggestion,
            repeated: true
        }
    ]);
const ShouldTurnOnCppOnboardingRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ShouldTurnOnCppOnboardingRequest", []);
const ShouldTurnOnCppOnboardingResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ShouldTurnOnCppOnboardingResponse", ()=>[
        {
            no: 1,
            name: "should_turn_on_cpp_onboarding",
            kind: "scalar",
            T: 8
        }
    ]);
const StreamCppRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCppRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CurrentFileInfo
        },
        {
            no: 2,
            name: "diff_history",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterErrors,
            opt: true
        },
        {
            no: 13,
            name: "context_items",
            kind: "message",
            T: CppContextItem,
            repeated: true
        },
        {
            no: 5,
            name: "diff_history_keys",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "give_debug_output",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "file_diff_histories",
            kind: "message",
            T: CppFileDiffHistory,
            repeated: true
        },
        {
            no: 8,
            name: "merged_diff_histories",
            kind: "message",
            T: CppFileDiffHistory,
            repeated: true
        },
        {
            no: 9,
            name: "block_diff_patches",
            kind: "message",
            T: BlockDiffPatch,
            repeated: true
        },
        {
            no: 10,
            name: "is_nightly",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "is_debug",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "immediately_ack",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 17,
            name: "enable_more_context",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "parameter_hints",
            kind: "message",
            T: CppParameterHint,
            repeated: true
        },
        {
            no: 15,
            name: "lsp_contexts",
            kind: "message",
            T: _lsp_subgraph_pb_js__WEBPACK_IMPORTED_MODULE_2__.LspSubgraphFullContext,
            repeated: true
        },
        {
            no: 16,
            name: "cpp_intent_info",
            kind: "message",
            T: CppIntentInfo,
            opt: true
        },
        {
            no: 18,
            name: "workspace_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 19,
            name: "additional_files",
            kind: "message",
            T: AdditionalFile,
            repeated: true
        },
        {
            no: 20,
            name: "control_token",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(StreamCppRequest_ControlToken),
            opt: true
        },
        {
            no: 21,
            name: "client_time",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 22,
            name: "filesync_updates",
            kind: "message",
            T: _filesyncserver_pb_js__WEBPACK_IMPORTED_MODULE_3__.FilesyncUpdateWithModelVersion,
            repeated: true
        },
        {
            no: 23,
            name: "time_since_request_start",
            kind: "scalar",
            T: 1
        },
        {
            no: 24,
            name: "time_at_request_send",
            kind: "scalar",
            T: 1
        },
        {
            no: 25,
            name: "client_timezone_offset",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 26,
            name: "lsp_suggested_items",
            kind: "message",
            T: LspSuggestedItems,
            opt: true
        },
        {
            no: 27,
            name: "supports_cpt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 28,
            name: "supports_crlf_cpt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 29,
            name: "code_results",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__.CodeResult,
            repeated: true
        }
    ]);
const StreamCppRequest_ControlToken = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.StreamCppRequest.ControlToken", [
    {
        no: 0,
        name: "CONTROL_TOKEN_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CONTROL_TOKEN_QUIET",
        localName: "QUIET"
    },
    {
        no: 2,
        name: "CONTROL_TOKEN_LOUD",
        localName: "LOUD"
    },
    {
        no: 3,
        name: "CONTROL_TOKEN_OP",
        localName: "OP"
    }
]);
const StreamCppResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCppResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "suggestion_start_line",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "suggestion_confidence",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "done_stream",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "debug_model_output",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "debug_model_input",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "debug_stream_time",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "debug_total_time",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "debug_ttft_time",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "debug_server_timing",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "range_to_replace",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LineRange,
            opt: true
        },
        {
            no: 12,
            name: "cursor_prediction_target",
            kind: "message",
            T: StreamCppResponse_CursorPredictionTarget,
            opt: true
        },
        {
            no: 13,
            name: "done_edit",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "model_info",
            kind: "message",
            T: StreamCppResponse_ModelInfo,
            opt: true
        },
        {
            no: 15,
            name: "begin_edit",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 16,
            name: "should_remove_leading_eol",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 17,
            name: "binding_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const StreamCppResponse_CursorPredictionTarget = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCppResponse.CursorPredictionTarget", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "expected_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "should_retrigger_cpp",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "StreamCppResponse_CursorPredictionTarget"
});
const StreamCppResponse_ModelInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamCppResponse.ModelInfo", ()=>[
        {
            no: 1,
            name: "is_fused_cursor_prediction_model",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "is_multidiff_model",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "StreamCppResponse_ModelInfo"
});
const CppConfigRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppConfigRequest", ()=>[
        {
            no: 1,
            name: "is_nightly",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 2,
            name: "model",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "supports_cpt",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const CppConfigResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppConfigResponse", ()=>[
        {
            no: 1,
            name: "above_radius",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 2,
            name: "below_radius",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "merge_behavior",
            kind: "message",
            T: CppConfigResponse_MergeBehavior,
            opt: true
        },
        {
            no: 5,
            name: "is_on",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 6,
            name: "is_ghost_text",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "should_let_user_enable_cpp_even_if_not_pro",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "heuristics",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CppConfigResponse_Heuristic),
            repeated: true
        },
        {
            no: 9,
            name: "exclude_recently_viewed_files_patterns",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 10,
            name: "enable_rvf_tracking",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "global_debounce_duration_millis",
            kind: "scalar",
            T: 5
        },
        {
            no: 12,
            name: "client_debounce_duration_millis",
            kind: "scalar",
            T: 5
        },
        {
            no: 13,
            name: "cpp_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "use_whitespace_diff_history",
            kind: "scalar",
            T: 8
        },
        {
            no: 15,
            name: "import_prediction_config",
            kind: "message",
            T: CppConfigResponse_ImportPredictionConfig
        },
        {
            no: 16,
            name: "enable_filesync_debounce_skipping",
            kind: "scalar",
            T: 8
        },
        {
            no: 17,
            name: "check_filesync_hash_percent",
            kind: "scalar",
            T: 2
        },
        {
            no: 18,
            name: "geo_cpp_backend_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 19,
            name: "recently_rejected_edit_thresholds",
            kind: "message",
            T: CppConfigResponse_RecentlyRejectedEditThresholds,
            opt: true
        },
        {
            no: 20,
            name: "is_fused_cursor_prediction_model",
            kind: "scalar",
            T: 8
        },
        {
            no: 21,
            name: "include_unchanged_lines",
            kind: "scalar",
            T: 8
        },
        {
            no: 22,
            name: "should_fetch_rvf_text",
            kind: "scalar",
            T: 8
        },
        {
            no: 23,
            name: "max_number_of_cleared_suggestions_since_last_accept",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 24,
            name: "suggestion_hint_config",
            kind: "message",
            T: CppConfigResponse_SuggestionHintConfig,
            opt: true
        },
        {
            no: 25,
            name: "allows_tab_chunks",
            kind: "scalar",
            T: 8
        },
        {
            no: 26,
            name: "tab_context_refresh_debounce_ms",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 27,
            name: "tab_context_refresh_editor_change_debounce_ms",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const CppConfigResponse_Heuristic = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CppConfigResponse.Heuristic", [
    {
        no: 0,
        name: "HEURISTIC_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "HEURISTIC_LOTS_OF_ADDED_TEXT",
        localName: "LOTS_OF_ADDED_TEXT"
    },
    {
        no: 2,
        name: "HEURISTIC_DUPLICATING_LINE_AFTER_SUGGESTION",
        localName: "DUPLICATING_LINE_AFTER_SUGGESTION"
    },
    {
        no: 3,
        name: "HEURISTIC_DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION",
        localName: "DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION"
    },
    {
        no: 4,
        name: "HEURISTIC_REVERTING_USER_CHANGE",
        localName: "REVERTING_USER_CHANGE"
    },
    {
        no: 5,
        name: "HEURISTIC_OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED",
        localName: "OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED"
    },
    {
        no: 6,
        name: "HEURISTIC_SUGGESTING_RECENTLY_REJECTED_EDIT",
        localName: "SUGGESTING_RECENTLY_REJECTED_EDIT"
    }
]);
const CppConfigResponse_ImportPredictionConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppConfigResponse.ImportPredictionConfig", ()=>[
        {
            no: 1,
            name: "is_disabled_by_backend",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "should_turn_on_automatically",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "python_enabled",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "CppConfigResponse_ImportPredictionConfig"
});
const CppConfigResponse_MergeBehavior = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppConfigResponse.MergeBehavior", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 3,
            name: "radius",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "CppConfigResponse_MergeBehavior"
});
const CppConfigResponse_RecentlyRejectedEditThresholds = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppConfigResponse.RecentlyRejectedEditThresholds", ()=>[
        {
            no: 1,
            name: "hard_reject_threshold",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "soft_reject_threshold",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "CppConfigResponse_RecentlyRejectedEditThresholds"
});
const CppConfigResponse_SuggestionHintConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppConfigResponse.SuggestionHintConfig", ()=>[
        {
            no: 1,
            name: "important_lsp_extensions",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "enabled_for_path_extensions",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "CppConfigResponse_SuggestionHintConfig"
});
const SuggestedEdit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SuggestedEdit", ()=>[
        {
            no: 1,
            name: "edit_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SimpleRange
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
const GetCppEditClassificationRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetCppEditClassificationRequest", ()=>[
        {
            no: 1,
            name: "cpp_request",
            kind: "message",
            T: StreamCppRequest
        },
        {
            no: 25,
            name: "suggested_edits",
            kind: "message",
            T: SuggestedEdit,
            repeated: true
        },
        {
            no: 26,
            name: "marker_touches_green",
            kind: "scalar",
            T: 8
        },
        {
            no: 27,
            name: "current_file_contents_for_linter_errors",
            kind: "scalar",
            T: 9
        }
    ]);
const GetCppEditClassificationResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetCppEditClassificationResponse", ()=>[
        {
            no: 1,
            name: "scored_edits",
            kind: "message",
            T: GetCppEditClassificationResponse_ScoredEdit,
            repeated: true
        },
        {
            no: 2,
            name: "noop_edit",
            kind: "message",
            T: GetCppEditClassificationResponse_ScoredEdit
        },
        {
            no: 3,
            name: "should_noop",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "generation_edit",
            kind: "message",
            T: GetCppEditClassificationResponse_ScoredEdit
        }
    ]);
const GetCppEditClassificationResponse_LogProbs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetCppEditClassificationResponse.LogProbs", ()=>[
        {
            no: 1,
            name: "tokens",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "token_logprobs",
            kind: "scalar",
            T: 1,
            repeated: true
        }
    ], {
    localName: "GetCppEditClassificationResponse_LogProbs"
});
const GetCppEditClassificationResponse_ScoredEdit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetCppEditClassificationResponse.ScoredEdit", ()=>[
        {
            no: 1,
            name: "edit",
            kind: "message",
            T: SuggestedEdit
        },
        {
            no: 2,
            name: "log_probs",
            kind: "message",
            T: GetCppEditClassificationResponse_LogProbs
        }
    ], {
    localName: "GetCppEditClassificationResponse_ScoredEdit"
});
const AdditionalFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AdditionalFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "is_open",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "visible_range_content",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "last_viewed_at",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 5,
            name: "start_line_number_one_indexed",
            kind: "scalar",
            T: 5,
            repeated: true
        },
        {
            no: 6,
            name: "visible_ranges",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LineRange,
            repeated: true
        }
    ]);
const RecordCppFateRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RecordCppFateRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "performance_now_time",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "fate",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CppFate)
        },
        {
            no: 4,
            name: "extension",
            kind: "scalar",
            T: 9
        }
    ]);
const RecordCppFateResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RecordCppFateResponse", []);
const AvailableCppModelsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AvailableCppModelsRequest", []);
const AvailableCppModelsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AvailableCppModelsResponse", ()=>[
        {
            no: 1,
            name: "models",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "default_model",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const StreamHoldCppRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamHoldCppRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CurrentFileInfo
        },
        {
            no: 4,
            name: "linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterErrors,
            opt: true
        },
        {
            no: 13,
            name: "context_items",
            kind: "message",
            T: CppContextItem,
            repeated: true
        },
        {
            no: 7,
            name: "file_diff_histories",
            kind: "message",
            T: CppFileDiffHistory,
            repeated: true
        },
        {
            no: 8,
            name: "merged_diff_histories",
            kind: "message",
            T: CppFileDiffHistory,
            repeated: true
        },
        {
            no: 9,
            name: "block_diff_patches",
            kind: "message",
            T: BlockDiffPatch,
            repeated: true
        },
        {
            no: 10,
            name: "model_details",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.ModelDetails
        }
    ]);
const StreamHoldCppResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamHoldCppResponse", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
const CppFileDiffHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppFileDiffHistory", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "diff_history",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "diff_history_timestamps",
            kind: "scalar",
            T: 1,
            repeated: true
        }
    ]);
const RefreshTabContextRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RefreshTabContextRequest", ()=>[
        {
            no: 1,
            name: "current_file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CurrentFileInfo
        },
        {
            no: 2,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterErrors,
            opt: true
        },
        {
            no: 4,
            name: "file_diff_histories",
            kind: "message",
            T: CppFileDiffHistory,
            repeated: true
        },
        {
            no: 5,
            name: "additional_files",
            kind: "message",
            T: AdditionalFile,
            repeated: true
        },
        {
            no: 6,
            name: "client_time",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 7,
            name: "time_since_request_start",
            kind: "scalar",
            T: 1
        },
        {
            no: 8,
            name: "time_at_request_send",
            kind: "scalar",
            T: 1
        },
        {
            no: 9,
            name: "is_debug",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 10,
            name: "workspace_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "supports_cpt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "supports_crlf_cpt",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 13,
            name: "repository_info",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__.RepositoryInfo
        }
    ]);
const RefreshTabContextResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RefreshTabContextResponse", ()=>[
        {
            no: 1,
            name: "code_results",
            kind: "message",
            T: _repository_pb_js__WEBPACK_IMPORTED_MODULE_4__.CodeResult,
            repeated: true
        }
    ]);
const EditPatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditPatch", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "deleted_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "inserted_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const CptFileDiffHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CptFileDiffHistory", ()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edit_patches",
            kind: "message",
            T: EditPatch,
            repeated: true
        }
    ]);
const CppContextItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppContextItem", ()=>[
        {
            no: 1,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "symbol",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
const AddTabRequestToEvalRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddTabRequestToEvalRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_behavior",
            kind: "scalar",
            T: 9
        }
    ]);
const AddTabRequestToEvalResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddTabRequestToEvalResponse", []);
const MarkCppRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MarkCppRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "response_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(MarkCppRequest_CppResponseTypes)
        },
        {
            no: 4,
            name: "desired_completion",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "range_transformation",
            kind: "message",
            T: MarkCppRequest_RangeTransformation
        },
        {
            no: 10,
            name: "model_code_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "model_openai_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "current_performance_now_time",
            kind: "scalar",
            T: 1
        },
        {
            no: 13,
            name: "session_performance_origin_time",
            kind: "scalar",
            T: 1
        }
    ]);
const MarkCppRequest_CppResponseTypes = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.MarkCppRequest.CppResponseTypes", [
    {
        no: 0,
        name: "CPP_RESPONSE_TYPES_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CPP_RESPONSE_TYPES_GOOD",
        localName: "GOOD"
    },
    {
        no: 2,
        name: "CPP_RESPONSE_TYPES_BAD",
        localName: "BAD"
    },
    {
        no: 3,
        name: "CPP_RESPONSE_TYPES_BAD_CONTEXT",
        localName: "BAD_CONTEXT"
    },
    {
        no: 4,
        name: "CPP_RESPONSE_TYPES_BAD_REASONING",
        localName: "BAD_REASONING"
    },
    {
        no: 5,
        name: "CPP_RESPONSE_TYPES_BAD_STUPID_MISTAKE",
        localName: "BAD_STUPID_MISTAKE"
    },
    {
        no: 6,
        name: "CPP_RESPONSE_TYPES_BAD_FORMATTING",
        localName: "BAD_FORMATTING"
    },
    {
        no: 7,
        name: "CPP_RESPONSE_TYPES_BAD_RANGE",
        localName: "BAD_RANGE"
    },
    {
        no: 8,
        name: "CPP_RESPONSE_TYPES_GOOD_PREDICTION",
        localName: "GOOD_PREDICTION"
    },
    {
        no: 9,
        name: "CPP_RESPONSE_TYPES_BAD_FALSE_POSITIVE_TRIGGER",
        localName: "BAD_FALSE_POSITIVE_TRIGGER"
    },
    {
        no: 10,
        name: "CPP_RESPONSE_TYPES_BAD_FALSE_NEGATIVE_TRIGGER",
        localName: "BAD_FALSE_NEGATIVE_TRIGGER"
    }
]);
const MarkCppRequest_RangeTransformation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MarkCppRequest.RangeTransformation", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "MarkCppRequest_RangeTransformation"
});
const CppParameterHint = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppParameterHint", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "documentation",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const MarkCppResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MarkCppResponse", []);
const IRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.IRange", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_column",
            kind: "scalar",
            T: 5
        }
    ]);
const OneIndexedPosition = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.OneIndexedPosition", ()=>[
        {
            no: 1,
            name: "line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "column_one_indexed",
            kind: "scalar",
            T: 5
        }
    ]);
const CursorSelection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CursorSelection", ()=>[
        {
            no: 1,
            name: "selection_start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "selection_start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "position_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "position_column",
            kind: "scalar",
            T: 5
        }
    ]);
const ModelChange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ModelChange", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: IRange
        },
        {
            no: 3,
            name: "final_model_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "model_version_immediately_after_this_change",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "performance_now_timestamp",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 7,
            name: "is_undoing",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "is_redoing",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "model_is_attached_to_editor",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "model_is_attached_to_the_active_editor",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "cursor_selections",
            kind: "message",
            T: CursorSelection,
            repeated: true
        },
        {
            no: 12,
            name: "model_version_at_metadata_retrieval_time",
            kind: "scalar",
            T: 5
        },
        {
            no: 13,
            name: "global_index",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 14,
            name: "performance_now_flush_time",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 15,
            name: "change_index",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 16,
            name: "flush_index",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 17,
            name: "global_index_v2",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const CurrentlyShownCppSuggestion = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CurrentlyShownCppSuggestion", ()=>[
        {
            no: 1,
            name: "suggestion_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "suggestion_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "range_of_suggestion_in_current_model",
            kind: "message",
            T: IRange,
            opt: true
        },
        {
            no: 5,
            name: "original_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "binding_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CppAcceptEventNew = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppAcceptEventNew", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: CurrentlyShownCppSuggestion
        },
        {
            no: 7,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        }
    ]);
const RecoverableCppData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RecoverableCppData", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "suggestion_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "suggestion_range",
            kind: "message",
            T: IRange
        },
        {
            no: 4,
            name: "position",
            kind: "message",
            T: OneIndexedPosition
        }
    ]);
const CppSuggestEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppSuggestEvent", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: CurrentlyShownCppSuggestion
        },
        {
            no: 2,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 3,
            name: "recoverable_cpp_data",
            kind: "message",
            T: RecoverableCppData
        }
    ]);
const CppTriggerEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppTriggerEvent", ()=>[
        {
            no: 1,
            name: "generation_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "cursor_position",
            kind: "message",
            T: OneIndexedPosition
        },
        {
            no: 4,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CppSource)
        }
    ]);
const FinishedCppGenerationEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FinishedCppGenerationEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 2,
            name: "recoverable_cpp_data",
            kind: "message",
            T: RecoverableCppData
        }
    ]);
const CppRejectEventNew = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppRejectEventNew", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: CurrentlyShownCppSuggestion
        },
        {
            no: 7,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        }
    ]);
const Edit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.Edit", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: IRange
        }
    ]);
const CppPartialAcceptEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppPartialAcceptEvent", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: CurrentlyShownCppSuggestion
        },
        {
            no: 2,
            name: "edit",
            kind: "message",
            T: Edit
        },
        {
            no: 3,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        }
    ]);
const CursorPrediction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CursorPrediction", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prediction_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CursorPrediction_CursorPredictionSource)
        },
        {
            no: 5,
            name: "binding_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CursorPrediction_CursorPredictionSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CursorPrediction.CursorPredictionSource", [
    {
        no: 0,
        name: "CURSOR_PREDICTION_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CURSOR_PREDICTION_SOURCE_ALWAYS_ON",
        localName: "ALWAYS_ON"
    },
    {
        no: 2,
        name: "CURSOR_PREDICTION_SOURCE_ACCEPT",
        localName: "ACCEPT"
    },
    {
        no: 3,
        name: "CURSOR_PREDICTION_SOURCE_UNDO",
        localName: "UNDO"
    },
    {
        no: 4,
        name: "CURSOR_PREDICTION_SOURCE_EDITOR_CHANGE",
        localName: "EDITOR_CHANGE"
    }
]);
const SuggestCursorPredictionEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SuggestCursorPredictionEvent", ()=>[
        {
            no: 1,
            name: "cursor_prediction",
            kind: "message",
            T: CursorPrediction
        },
        {
            no: 2,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        }
    ]);
const AcceptCursorPredictionEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AcceptCursorPredictionEvent", ()=>[
        {
            no: 1,
            name: "cursor_prediction",
            kind: "message",
            T: CursorPrediction
        },
        {
            no: 2,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        }
    ]);
const RejectCursorPredictionEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RejectCursorPredictionEvent", ()=>[
        {
            no: 1,
            name: "cursor_prediction",
            kind: "message",
            T: CursorPrediction
        },
        {
            no: 2,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        }
    ]);
const MaybeDefinedPointInTimeModel = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.MaybeDefinedPointInTimeModel", ()=>[
        {
            no: 1,
            name: "model_uuid",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "model_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_id",
            kind: "scalar",
            T: 9
        }
    ]);
const PointInTimeModel = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PointInTimeModel", ()=>[
        {
            no: 1,
            name: "model_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_version",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_id",
            kind: "scalar",
            T: 9
        }
    ]);
const CppManualTriggerEventNew = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppManualTriggerEventNew", ()=>[
        {
            no: 1,
            name: "line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "column_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        }
    ]);
const CppStoppedTrackingModelEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppStoppedTrackingModelEvent", ()=>[
        {
            no: 1,
            name: "model_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CppStoppedTrackingModelEvent_StoppedTrackingModelReason)
        }
    ]);
const CppStoppedTrackingModelEvent_StoppedTrackingModelReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CppStoppedTrackingModelEvent.StoppedTrackingModelReason", [
    {
        no: 0,
        name: "STOPPED_TRACKING_MODEL_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STOPPED_TRACKING_MODEL_REASON_FILE_TOO_BIG",
        localName: "FILE_TOO_BIG"
    },
    {
        no: 2,
        name: "STOPPED_TRACKING_MODEL_REASON_FILE_DISPOSED",
        localName: "FILE_DISPOSED"
    },
    {
        no: 3,
        name: "STOPPED_TRACKING_MODEL_REASON_CHANGE_TOO_BIG",
        localName: "CHANGE_TOO_BIG"
    }
]);
const CppLinterErrorEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppLinterErrorEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 2,
            name: "added_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterError,
            repeated: true
        },
        {
            no: 3,
            name: "removed_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterError,
            repeated: true
        },
        {
            no: 4,
            name: "errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterError,
            repeated: true
        }
    ]);
const CppDebouncedCursorMovementEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppDebouncedCursorMovementEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 2,
            name: "cursor_position",
            kind: "message",
            T: OneIndexedPosition
        }
    ]);
const CppEditorChangedEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppEditorChangedEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 2,
            name: "cursor_position",
            kind: "message",
            T: OneIndexedPosition
        },
        {
            no: 3,
            name: "visible_ranges",
            kind: "message",
            T: IRange,
            repeated: true
        },
        {
            no: 4,
            name: "editor_id",
            kind: "scalar",
            T: 9
        }
    ]);
const CppCopyEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppCopyEvent", ()=>[
        {
            no: 1,
            name: "clipboard_contents",
            kind: "scalar",
            T: 9
        }
    ]);
const CppQuickActionCommand = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppQuickActionCommand", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "arguments",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const CppQuickAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppQuickAction", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "edits",
            kind: "message",
            T: CppQuickAction_Edit,
            repeated: true
        },
        {
            no: 3,
            name: "is_preferred",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "command",
            kind: "message",
            T: CppQuickActionCommand
        }
    ]);
const CppQuickAction_Edit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppQuickAction.Edit", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: IRange
        }
    ], {
    localName: "CppQuickAction_Edit"
});
const CppChangeQuickActionEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppChangeQuickActionEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 2,
            name: "added",
            kind: "message",
            T: CppQuickAction,
            repeated: true
        },
        {
            no: 3,
            name: "removed",
            kind: "message",
            T: CppQuickAction,
            repeated: true
        },
        {
            no: 4,
            name: "actions",
            kind: "message",
            T: CppQuickAction,
            repeated: true
        }
    ]);
const CppQuickActionFireEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppQuickActionFireEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 2,
            name: "quick_action_command",
            kind: "message",
            T: CppQuickActionCommand,
            oneof: "action_identifier"
        },
        {
            no: 3,
            name: "quick_action_event",
            kind: "message",
            T: CppQuickAction,
            oneof: "action_identifier"
        }
    ]);
const CmdKEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 2,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 20,
            name: "prompt_bar_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "submit_prompt",
            kind: "message",
            T: CmdKEvent_SubmitPrompt,
            oneof: "event_type"
        },
        {
            no: 4,
            name: "end_of_generation",
            kind: "message",
            T: CmdKEvent_EndOfGeneration,
            oneof: "event_type"
        },
        {
            no: 5,
            name: "interrupt_generation",
            kind: "message",
            T: CmdKEvent_InterruptGeneration,
            oneof: "event_type"
        },
        {
            no: 6,
            name: "accept_all",
            kind: "message",
            T: CmdKEvent_AcceptDiffs,
            oneof: "event_type"
        },
        {
            no: 7,
            name: "reject_all",
            kind: "message",
            T: CmdKEvent_RejectDiffs,
            oneof: "event_type"
        },
        {
            no: 8,
            name: "reject_partial_diff",
            kind: "message",
            T: CmdKEvent_RejectPartialDiff,
            oneof: "event_type"
        },
        {
            no: 9,
            name: "accept_partial_diff",
            kind: "message",
            T: CmdKEvent_AcceptPartialDiff,
            oneof: "event_type"
        },
        {
            no: 10,
            name: "after_reject",
            kind: "message",
            T: CmdKEvent_AfterReject,
            oneof: "event_type"
        }
    ]);
const CmdKEvent_SubmitPrompt = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKEvent.SubmitPrompt", ()=>[
        {
            no: 1,
            name: "original_range",
            kind: "message",
            T: IRange
        },
        {
            no: 2,
            name: "original_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "prompt",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "CmdKEvent_SubmitPrompt"
});
const CmdKEvent_EndOfGeneration = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKEvent.EndOfGeneration", [], {
    localName: "CmdKEvent_EndOfGeneration"
});
const CmdKEvent_InterruptGeneration = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKEvent.InterruptGeneration", [], {
    localName: "CmdKEvent_InterruptGeneration"
});
const CmdKEvent_AcceptDiffs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKEvent.AcceptDiffs", [], {
    localName: "CmdKEvent_AcceptDiffs"
});
const CmdKEvent_RejectDiffs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKEvent.RejectDiffs", ()=>[
        {
            no: 1,
            name: "actor_request_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "silent",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "CmdKEvent_RejectDiffs"
});
const CmdKEvent_AcceptPartialDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKEvent.AcceptPartialDiff", ()=>[
        {
            no: 1,
            name: "green_range",
            kind: "message",
            T: IRange
        },
        {
            no: 2,
            name: "green_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "red_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "CmdKEvent_AcceptPartialDiff"
});
const CmdKEvent_RejectPartialDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKEvent.RejectPartialDiff", ()=>[
        {
            no: 1,
            name: "green_range",
            kind: "message",
            T: IRange
        },
        {
            no: 2,
            name: "green_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "red_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "CmdKEvent_RejectPartialDiff"
});
const CmdKEvent_AfterReject = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CmdKEvent.AfterReject", [], {
    localName: "CmdKEvent_AfterReject"
});
const ChatEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChatEvent", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "submit_prompt",
            kind: "message",
            T: ChatEvent_SubmitPrompt,
            oneof: "event_type"
        },
        {
            no: 3,
            name: "end_of_any_generation",
            kind: "message",
            T: ChatEvent_EndOfAnyGeneration,
            oneof: "event_type"
        },
        {
            no: 4,
            name: "end_of_uninterrupted_generation",
            kind: "message",
            T: ChatEvent_EndOfUninterruptedGeneration,
            oneof: "event_type"
        }
    ]);
const ChatEvent_SubmitPrompt = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChatEvent.SubmitPrompt", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ChatEvent_SubmitPrompt"
});
const ChatEvent_EndOfAnyGeneration = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChatEvent.EndOfAnyGeneration", [], {
    localName: "ChatEvent_EndOfAnyGeneration"
});
const ChatEvent_EndOfUninterruptedGeneration = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ChatEvent.EndOfUninterruptedGeneration", [], {
    localName: "ChatEvent_EndOfUninterruptedGeneration"
});
const BugBotLinterEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotLinterEvent", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 3,
            name: "lint_generated",
            kind: "message",
            T: BugBotLinterEvent_LintGenerated,
            oneof: "event_type"
        },
        {
            no: 4,
            name: "lint_dismissed",
            kind: "message",
            T: BugBotLinterEvent_LintDismissed,
            oneof: "event_type"
        },
        {
            no: 5,
            name: "user_feedback",
            kind: "message",
            T: BugBotLinterEvent_UserFeedback,
            oneof: "event_type"
        },
        {
            no: 6,
            name: "viewed_report",
            kind: "message",
            T: BugBotLinterEvent_ViewedReport,
            oneof: "event_type"
        },
        {
            no: 7,
            name: "unviewed_report",
            kind: "message",
            T: BugBotLinterEvent_UnviewedReport,
            oneof: "event_type"
        },
        {
            no: 8,
            name: "started",
            kind: "message",
            T: BugBotLinterEvent_Started,
            oneof: "event_type"
        },
        {
            no: 9,
            name: "not_shown_because_heuristic",
            kind: "message",
            T: BugBotLinterEvent_NotShownBecauseHeuristic,
            oneof: "event_type"
        }
    ]);
const BugBotLinterEvent_Started = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotLinterEvent.Started", [], {
    localName: "BugBotLinterEvent_Started"
});
const BugBotLinterEvent_LintGenerated = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotLinterEvent.LintGenerated", ()=>[
        {
            no: 1,
            name: "bug_report",
            kind: "message",
            T: _bugbot_pb_js__WEBPACK_IMPORTED_MODULE_5__.BugReport
        }
    ], {
    localName: "BugBotLinterEvent_LintGenerated"
});
const BugBotLinterEvent_LintDismissed = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotLinterEvent.LintDismissed", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotLinterEvent_LintDismissed"
});
const BugBotLinterEvent_UserFeedback = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotLinterEvent.UserFeedback", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "feedback",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotLinterEvent_UserFeedback"
});
const BugBotLinterEvent_ViewedReport = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotLinterEvent.ViewedReport", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotLinterEvent_ViewedReport"
});
const BugBotLinterEvent_UnviewedReport = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotLinterEvent.UnviewedReport", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotLinterEvent_UnviewedReport"
});
const BugBotLinterEvent_NotShownBecauseHeuristic = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic", ()=>[
        {
            no: 1,
            name: "heuristic",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic)
        }
    ], {
    localName: "BugBotLinterEvent_NotShownBecauseHeuristic"
});
const BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic", [
    {
        no: 0,
        name: "HEURISTIC_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "HEURISTIC_LINT_OVERLAP",
        localName: "LINT_OVERLAP"
    },
    {
        no: 2,
        name: "HEURISTIC_LINES_MISMATCH",
        localName: "LINES_MISMATCH"
    }
]);
const BugBotEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "started",
            kind: "message",
            T: BugBotEvent_Started,
            oneof: "event_type"
        },
        {
            no: 3,
            name: "reports_generated",
            kind: "message",
            T: BugBotEvent_ReportsGenerated,
            oneof: "event_type"
        },
        {
            no: 4,
            name: "pressed_fix_in_composer",
            kind: "message",
            T: BugBotEvent_PressedFixInComposer,
            oneof: "event_type"
        },
        {
            no: 5,
            name: "pressed_open_in_editor",
            kind: "message",
            T: BugBotEvent_PressedOpenInEditor,
            oneof: "event_type"
        },
        {
            no: 6,
            name: "viewed_report",
            kind: "message",
            T: BugBotEvent_ViewedReport,
            oneof: "event_type"
        },
        {
            no: 7,
            name: "user_feedback",
            kind: "message",
            T: BugBotEvent_UserFeedback,
            oneof: "event_type"
        },
        {
            no: 8,
            name: "pressed_add_to_chat",
            kind: "message",
            T: BugBotEvent_PressedAddToChat,
            oneof: "event_type"
        },
        {
            no: 9,
            name: "background_interval_started",
            kind: "message",
            T: BugBotEvent_BackgroundIntervalStarted,
            oneof: "event_type"
        },
        {
            no: 10,
            name: "background_interval_ended",
            kind: "message",
            T: BugBotEvent_BackgroundIntervalEnded,
            oneof: "event_type"
        },
        {
            no: 11,
            name: "background_interval_interrupted",
            kind: "message",
            T: BugBotEvent_BackgroundIntervalInterrupted,
            oneof: "event_type"
        },
        {
            no: 12,
            name: "background_interval_errored",
            kind: "message",
            T: BugBotEvent_BackgroundIntervalErrored,
            oneof: "event_type"
        }
    ]);
const BugBotEvent_BackgroundIntervalInterruptedReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.BugBotEvent.BackgroundIntervalInterruptedReason", [
    {
        no: 0,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DISABLED",
        localName: "DISABLED"
    },
    {
        no: 2,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TOO_RECENT",
        localName: "TOO_RECENT"
    },
    {
        no: 3,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNVIEWED_BUG_REPORTS",
        localName: "UNVIEWED_BUG_REPORTS"
    },
    {
        no: 4,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NOT_IN_GIT_REPO",
        localName: "NOT_IN_GIT_REPO"
    },
    {
        no: 5,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH",
        localName: "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH"
    },
    {
        no: 6,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_GIT_USER",
        localName: "NO_GIT_USER"
    },
    {
        no: 7,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_LAST_COMMIT",
        localName: "NO_LAST_COMMIT"
    },
    {
        no: 8,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_NOT_MADE_BY_USER",
        localName: "LAST_COMMIT_NOT_MADE_BY_USER"
    },
    {
        no: 9,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_TOO_OLD",
        localName: "LAST_COMMIT_TOO_OLD"
    },
    {
        no: 10,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_LONG",
        localName: "DIFF_TOO_LONG"
    },
    {
        no: 11,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_SHORT",
        localName: "DIFF_TOO_SHORT"
    },
    {
        no: 12,
        name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TELEMETRY_UNHEALTHY",
        localName: "TELEMETRY_UNHEALTHY"
    }
]);
const BugBotEvent_Started = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.Started", [], {
    localName: "BugBotEvent_Started"
});
const BugBotEvent_ReportsGenerated = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.ReportsGenerated", ()=>[
        {
            no: 1,
            name: "bug_reports",
            kind: "message",
            T: _bugbot_pb_js__WEBPACK_IMPORTED_MODULE_5__.BugReports
        }
    ], {
    localName: "BugBotEvent_ReportsGenerated"
});
const BugBotEvent_PressedFixInComposer = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.PressedFixInComposer", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotEvent_PressedFixInComposer"
});
const BugBotEvent_PressedAddToChat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.PressedAddToChat", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotEvent_PressedAddToChat"
});
const BugBotEvent_PressedOpenInEditor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.PressedOpenInEditor", ()=>[
        {
            no: 1,
            name: "bug_location",
            kind: "message",
            T: _bugbot_pb_js__WEBPACK_IMPORTED_MODULE_5__.BugLocation
        },
        {
            no: 2,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotEvent_PressedOpenInEditor"
});
const BugBotEvent_ViewedReport = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.ViewedReport", ()=>[
        {
            no: 1,
            name: "seconds_viewed",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "report_views",
            kind: "message",
            T: BugBotEvent_ViewedReport_ReportView,
            repeated: true
        }
    ], {
    localName: "BugBotEvent_ViewedReport"
});
const BugBotEvent_ViewedReport_ReportView = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.ViewedReport.ReportView", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "view_percentage",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "text_percentage",
            kind: "scalar",
            T: 1
        }
    ], {
    localName: "BugBotEvent_ViewedReport_ReportView"
});
const BugBotEvent_UserFeedback = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.UserFeedback", ()=>[
        {
            no: 1,
            name: "bug_report_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "feedback",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotEvent_UserFeedback"
});
const BugBotEvent_BackgroundIntervalStarted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalStarted", [], {
    localName: "BugBotEvent_BackgroundIntervalStarted"
});
const BugBotEvent_BackgroundIntervalEnded = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalEnded", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "BugBotEvent_BackgroundIntervalEnded"
});
const BugBotEvent_BackgroundIntervalInterrupted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalInterrupted", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BugBotEvent_BackgroundIntervalInterruptedReason)
        }
    ], {
    localName: "BugBotEvent_BackgroundIntervalInterrupted"
});
const BugBotEvent_BackgroundIntervalErrored = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalErrored", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BugBotEvent_BackgroundIntervalErrored"
});
const AiRequestEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AiRequestEvent", ()=>[
        {
            no: 1,
            name: "request_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AiRequestEvent_RequestType)
        },
        {
            no: 2,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(AiRequestEvent_Source)
        }
    ]);
const AiRequestEvent_RequestType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AiRequestEvent.RequestType", [
    {
        no: 0,
        name: "REQUEST_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REQUEST_TYPE_START",
        localName: "START"
    },
    {
        no: 2,
        name: "REQUEST_TYPE_END",
        localName: "END"
    }
]);
const AiRequestEvent_Source = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.AiRequestEvent.Source", [
    {
        no: 0,
        name: "SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SOURCE_CHAT",
        localName: "CHAT"
    },
    {
        no: 2,
        name: "SOURCE_CMDK",
        localName: "CMDK"
    },
    {
        no: 3,
        name: "SOURCE_APPLY",
        localName: "APPLY"
    },
    {
        no: 4,
        name: "SOURCE_COMPOSER",
        localName: "COMPOSER"
    },
    {
        no: 5,
        name: "SOURCE_TASK",
        localName: "TASK"
    },
    {
        no: 6,
        name: "SOURCE_CODE_INTERPRETER",
        localName: "CODE_INTERPRETER"
    },
    {
        no: 7,
        name: "SOURCE_INTERPRETER_EXECUTION",
        localName: "INTERPRETER_EXECUTION"
    },
    {
        no: 8,
        name: "SOURCE_BUGBOT",
        localName: "BUGBOT"
    }
]);
const ModelOpenedEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ModelOpenedEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 2,
            name: "maybe_defined_point_in_time_model",
            kind: "message",
            T: MaybeDefinedPointInTimeModel
        }
    ]);
const BackgroundFilesEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BackgroundFilesEvent", ()=>[
        {
            no: 2,
            name: "files",
            kind: "message",
            T: BackgroundFilesEvent_BackgroundFile,
            repeated: true
        }
    ]);
const BackgroundFilesEvent_BackgroundFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BackgroundFilesEvent.BackgroundFile", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "hash",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "full_path",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "BackgroundFilesEvent_BackgroundFile"
});
const ScrollEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ScrollEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 2,
            name: "visible_ranges",
            kind: "message",
            T: IRange,
            repeated: true
        },
        {
            no: 3,
            name: "editor_id",
            kind: "scalar",
            T: 9
        }
    ]);
const EditorCloseEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditorCloseEvent", ()=>[
        {
            no: 1,
            name: "editor_id",
            kind: "scalar",
            T: 9
        }
    ]);
const TabCloseEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TabCloseEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: MaybeDefinedPointInTimeModel
        }
    ]);
const ModelAddedEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ModelAddedEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: MaybeDefinedPointInTimeModel
        },
        {
            no: 2,
            name: "full_uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "uri_scheme",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_too_large_for_syncing",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "is_too_large_for_tokenization",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "is_too_large_for_heap_operation",
            kind: "scalar",
            T: 8
        }
    ]);
const AnythingQuickAccessItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AnythingQuickAccessItem", ()=>[
        {
            no: 1,
            name: "resource",
            kind: "message",
            T: AnythingQuickAccessItem_Resource,
            oneof: "item"
        },
        {
            no: 2,
            name: "separator",
            kind: "scalar",
            T: 9,
            oneof: "item"
        },
        {
            no: 3,
            name: "section",
            kind: "scalar",
            T: 9,
            oneof: "item"
        }
    ]);
const AnythingQuickAccessItem_Resource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AnythingQuickAccessItem.Resource", ()=>[
        {
            no: 1,
            name: "model",
            kind: "message",
            T: PointInTimeModel,
            opt: true
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: IRange,
            opt: true
        },
        {
            no: 3,
            name: "uri",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "AnythingQuickAccessItem_Resource"
});
const AnythingQuickAccessSelectionEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AnythingQuickAccessSelectionEvent", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "items",
            kind: "message",
            T: AnythingQuickAccessItem,
            repeated: true
        },
        {
            no: 3,
            name: "selected_indices",
            kind: "scalar",
            T: 5,
            repeated: true
        }
    ]);
const LspSuggestionEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LspSuggestionEvent", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "editor_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        }
    ]);
const CppSessionEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppSessionEvent", ()=>[
        {
            no: 2,
            name: "accept_event",
            kind: "message",
            T: CppAcceptEventNew,
            oneof: "event"
        },
        {
            no: 3,
            name: "reject_event",
            kind: "message",
            T: CppRejectEventNew,
            oneof: "event"
        },
        {
            no: 4,
            name: "manual_trigger_event",
            kind: "message",
            T: CppManualTriggerEventNew,
            oneof: "event"
        },
        {
            no: 6,
            name: "stopped_tracking_model_event",
            kind: "message",
            T: CppStoppedTrackingModelEvent,
            oneof: "event"
        },
        {
            no: 7,
            name: "suggest_event",
            kind: "message",
            T: CppSuggestEvent,
            oneof: "event"
        },
        {
            no: 8,
            name: "linter_error_event",
            kind: "message",
            T: CppLinterErrorEvent,
            oneof: "event"
        },
        {
            no: 9,
            name: "debounced_cursor_movement_event",
            kind: "message",
            T: CppDebouncedCursorMovementEvent,
            oneof: "event"
        },
        {
            no: 10,
            name: "editor_changed_event",
            kind: "message",
            T: CppEditorChangedEvent,
            oneof: "event"
        },
        {
            no: 11,
            name: "copy_event",
            kind: "message",
            T: CppCopyEvent,
            oneof: "event"
        },
        {
            no: 13,
            name: "quick_action_event",
            kind: "message",
            T: CppChangeQuickActionEvent,
            oneof: "event"
        },
        {
            no: 14,
            name: "quick_action_fire_event",
            kind: "message",
            T: CppQuickActionFireEvent,
            oneof: "event"
        },
        {
            no: 15,
            name: "model_opened_event",
            kind: "message",
            T: ModelOpenedEvent,
            oneof: "event"
        },
        {
            no: 17,
            name: "cmd_k_event",
            kind: "message",
            T: CmdKEvent,
            oneof: "event"
        },
        {
            no: 18,
            name: "chat_event",
            kind: "message",
            T: ChatEvent,
            oneof: "event"
        },
        {
            no: 19,
            name: "ai_event",
            kind: "message",
            T: AiRequestEvent,
            oneof: "event"
        },
        {
            no: 21,
            name: "scroll_event",
            kind: "message",
            T: ScrollEvent,
            oneof: "event"
        },
        {
            no: 22,
            name: "editor_close_event",
            kind: "message",
            T: EditorCloseEvent,
            oneof: "event"
        },
        {
            no: 23,
            name: "tab_close_event",
            kind: "message",
            T: TabCloseEvent,
            oneof: "event"
        },
        {
            no: 33,
            name: "model_added_event",
            kind: "message",
            T: ModelAddedEvent,
            oneof: "event"
        },
        {
            no: 26,
            name: "partial_accept_event",
            kind: "message",
            T: CppPartialAcceptEvent,
            oneof: "event"
        },
        {
            no: 27,
            name: "accept_cursor_prediction_event",
            kind: "message",
            T: AcceptCursorPredictionEvent,
            oneof: "event"
        },
        {
            no: 28,
            name: "reject_cursor_prediction_event",
            kind: "message",
            T: RejectCursorPredictionEvent,
            oneof: "event"
        },
        {
            no: 29,
            name: "suggest_cursor_prediction_event",
            kind: "message",
            T: SuggestCursorPredictionEvent,
            oneof: "event"
        },
        {
            no: 30,
            name: "cpp_trigger_event",
            kind: "message",
            T: CppTriggerEvent,
            oneof: "event"
        },
        {
            no: 31,
            name: "finished_cpp_generation_event",
            kind: "message",
            T: FinishedCppGenerationEvent,
            oneof: "event"
        },
        {
            no: 32,
            name: "bug_bot_event",
            kind: "message",
            T: BugBotEvent,
            oneof: "event"
        },
        {
            no: 34,
            name: "bug_bot_linter_event",
            kind: "message",
            T: BugBotLinterEvent,
            oneof: "event"
        },
        {
            no: 35,
            name: "anything_quick_access_selection_event",
            kind: "message",
            T: AnythingQuickAccessSelectionEvent,
            oneof: "event"
        },
        {
            no: 36,
            name: "lsp_suggestion_event",
            kind: "message",
            T: LspSuggestionEvent,
            oneof: "event"
        },
        {
            no: 37,
            name: "ntp_event",
            kind: "message",
            T: NtpEvent,
            oneof: "event"
        },
        {
            no: 38,
            name: "repo_event",
            kind: "message",
            T: RepoEvent,
            oneof: "event"
        },
        {
            no: 39,
            name: "git_event",
            kind: "message",
            T: GitEvent,
            oneof: "event"
        },
        {
            no: 40,
            name: "tool_call_event",
            kind: "message",
            T: ToolCallEvent,
            oneof: "event"
        },
        {
            no: 46,
            name: "before_ai_edit_event",
            kind: "message",
            T: BeforeAiEditEvent,
            oneof: "event"
        },
        {
            no: 47,
            name: "search_event",
            kind: "message",
            T: SearchEvent,
            oneof: "event"
        },
        {
            no: 48,
            name: "terminal_event",
            kind: "message",
            T: TerminalEvent,
            oneof: "event"
        },
        {
            no: 49,
            name: "worktree_event",
            kind: "message",
            T: WorktreeEvent,
            oneof: "event"
        },
        {
            no: 50,
            name: "review_changes_opened_event",
            kind: "message",
            T: ReviewChangesOpenedEvent,
            oneof: "event"
        },
        {
            no: 51,
            name: "browser_event",
            kind: "message",
            T: BrowserEvent,
            oneof: "event"
        },
        {
            no: 16,
            name: "background_files_event",
            kind: "message",
            T: BackgroundFilesEvent,
            oneof: "event"
        },
        {
            no: 5,
            name: "performance_now_timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 25,
            name: "performance_time_origin",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 41,
            name: "global_index",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 42,
            name: "performance_now_flush_time",
            kind: "scalar",
            T: 1,
            opt: true
        },
        {
            no: 43,
            name: "event_index",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 44,
            name: "flush_index",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 45,
            name: "global_index_v2",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const BeforeAiEditEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BeforeAiEditEvent", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel,
            oneof: "model"
        },
        {
            no: 5,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9,
            oneof: "model"
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "request_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "tool_name",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CppAppendRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppAppendRequest", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "scalar",
            T: 12
        }
    ]);
const CppAppendResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppAppendResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]);
const EditHistoryAppendChangesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditHistoryAppendChangesRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "model_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "starting_model_value",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "starting_model_version",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 5,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "client_commit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "changes",
            kind: "message",
            T: ModelChange,
            repeated: true
        },
        {
            no: 9,
            name: "session_events",
            kind: "message",
            T: CppSessionEvent,
            repeated: true
        },
        {
            no: 11,
            name: "model_changes_may_be_out_of_order",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "privacy_mode_status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(EditHistoryAppendChangesRequest_PrivacyModeStatus)
        },
        {
            no: 7,
            name: "events",
            kind: "message",
            T: CppHistoryAppendEvent,
            repeated: true
        },
        {
            no: 13,
            name: "time_origin",
            kind: "scalar",
            T: 2
        }
    ]);
const EditHistoryAppendChangesRequest_PrivacyModeStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.EditHistoryAppendChangesRequest.PrivacyModeStatus", [
    {
        no: 0,
        name: "PRIVACY_MODE_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PRIVACY_MODE_STATUS_PRIVACY_ENABLED",
        localName: "PRIVACY_ENABLED"
    },
    {
        no: 2,
        name: "PRIVACY_MODE_STATUS_IMPLICIT_NO_PRIVACY",
        localName: "IMPLICIT_NO_PRIVACY"
    },
    {
        no: 3,
        name: "PRIVACY_MODE_STATUS_EXPLICIT_NO_PRIVACY",
        localName: "EXPLICIT_NO_PRIVACY"
    }
]);
const EditHistoryAppendChangesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EditHistoryAppendChangesResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]);
const CppEditHistoryStatusRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppEditHistoryStatusRequest", []);
const CppEditHistoryStatusResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppEditHistoryStatusResponse", ()=>[
        {
            no: 1,
            name: "on",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "only_if_explicit",
            kind: "scalar",
            T: 8
        }
    ]);
const StartingModel = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StartingModel", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "starting_contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "starting_model_version",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "before_start_model_changes",
            kind: "message",
            T: ModelChange,
            repeated: true
        },
        {
            no: 5,
            name: "client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "client_commit",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "model_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "uri",
            kind: "scalar",
            T: 9
        }
    ]);
const BlockDiffPatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BlockDiffPatch", ()=>[
        {
            no: 1,
            name: "start_model_window",
            kind: "message",
            T: BlockDiffPatch_ModelWindow
        },
        {
            no: 3,
            name: "changes",
            kind: "message",
            T: BlockDiffPatch_Change,
            repeated: true
        },
        {
            no: 4,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "model_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "start_from_change_index",
            kind: "scalar",
            T: 5
        }
    ]);
const BlockDiffPatch_Change = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BlockDiffPatch.Change", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: IRange
        }
    ], {
    localName: "BlockDiffPatch_Change"
});
const BlockDiffPatch_ModelWindow = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BlockDiffPatch.ModelWindow", ()=>[
        {
            no: 1,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "BlockDiffPatch_ModelWindow"
});
const CppHistoryAppendEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppHistoryAppendEvent", ()=>[
        {
            no: 1,
            name: "model_change",
            kind: "message",
            T: ModelChange,
            oneof: "event"
        },
        {
            no: 2,
            name: "accept_event",
            kind: "message",
            T: CppAcceptEvent,
            oneof: "event"
        },
        {
            no: 3,
            name: "reject_event",
            kind: "message",
            T: CppRejectEvent,
            oneof: "event"
        },
        {
            no: 4,
            name: "manual_trigger_event",
            kind: "message",
            T: CppManualTriggerEvent,
            oneof: "event"
        },
        {
            no: 10,
            name: "final_model_hash",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CppManualTriggerEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppManualTriggerEvent", ()=>[
        {
            no: 2,
            name: "position",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CursorPosition
        }
    ]);
const CppAcceptEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppAcceptEvent", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: CppSuggestion
        }
    ]);
const CppRejectEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppRejectEvent", ()=>[
        {
            no: 1,
            name: "cpp_suggestion",
            kind: "message",
            T: CppSuggestion
        }
    ]);
const CppSuggestion = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppSuggestion", ()=>[
        {
            no: 1,
            name: "suggestion_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: IRange
        },
        {
            no: 5,
            name: "seen",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "editor_selection_before_peek",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SelectionWithOrientation
        },
        {
            no: 7,
            name: "binding_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ModelWithHistory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ModelWithHistory", ()=>[
        {
            no: 1,
            name: "changes",
            kind: "message",
            T: ModelChange,
            repeated: true
        },
        {
            no: 2,
            name: "model_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "starting_model",
            kind: "message",
            T: StartingModel
        },
        {
            no: 4,
            name: "num_correct_changes",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "num_unvalidated_changes",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "num_incorrect_changes",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "before_start_model_changes",
            kind: "message",
            T: ModelChange,
            repeated: true
        },
        {
            no: 8,
            name: "starting_performance_now_timestamp",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ]);
const CppTimelineEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppTimelineEvent", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "event",
            kind: "message",
            T: CppSessionEvent,
            oneof: "v"
        },
        {
            no: 3,
            name: "change",
            kind: "message",
            T: CppTimelineEvent_Change,
            oneof: "v"
        }
    ]);
const CppTimelineEvent_Change = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.CppTimelineEvent.Change", ()=>[
        {
            no: 1,
            name: "model_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "change_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "change",
            kind: "message",
            T: ModelChange
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CppTimelineEvent_Change_Status)
        }
    ], {
    localName: "CppTimelineEvent_Change"
});
const CppTimelineEvent_Change_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.CppTimelineEvent.Change.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_CORRECT",
        localName: "CORRECT"
    },
    {
        no: 2,
        name: "STATUS_UNVALIDATED",
        localName: "UNVALIDATED"
    },
    {
        no: 3,
        name: "STATUS_INCORRECT",
        localName: "INCORRECT"
    }
]);
const TerminalEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TerminalEvent", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "create",
            kind: "message",
            T: TerminalEvent_Create,
            oneof: "event"
        },
        {
            no: 3,
            name: "exit",
            kind: "message",
            T: TerminalEvent_Exit,
            oneof: "event"
        },
        {
            no: 4,
            name: "command_start",
            kind: "message",
            T: TerminalEvent_CommandStart,
            oneof: "event"
        },
        {
            no: 5,
            name: "command_finish",
            kind: "message",
            T: TerminalEvent_CommandFinish,
            oneof: "event"
        }
    ]);
const TerminalEvent_Create = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TerminalEvent.Create", ()=>[
        {
            no: 1,
            name: "is_remote",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "TerminalEvent_Create"
});
const TerminalEvent_Exit = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TerminalEvent.Exit", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "TerminalEvent_Exit"
});
const TerminalEvent_CommandStart = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TerminalEvent.CommandStart", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 2,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "TerminalEvent_CommandStart"
});
const TerminalEvent_CommandFinish = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TerminalEvent.CommandFinish", ()=>[
        {
            no: 1,
            name: "point_in_time_model",
            kind: "message",
            T: PointInTimeModel
        },
        {
            no: 2,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "TerminalEvent_CommandFinish"
});
const BrowserEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BrowserEvent", ()=>[
        {
            no: 1,
            name: "view_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tab_created",
            kind: "message",
            T: BrowserEvent_TabCreated,
            oneof: "event"
        },
        {
            no: 3,
            name: "tab_closed",
            kind: "message",
            T: BrowserEvent_TabClosed,
            oneof: "event"
        },
        {
            no: 4,
            name: "navigation",
            kind: "message",
            T: BrowserEvent_Navigation,
            oneof: "event"
        },
        {
            no: 5,
            name: "tool_action",
            kind: "message",
            T: BrowserEvent_ToolAction,
            oneof: "event"
        }
    ]);
const BrowserEvent_TabCreated = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BrowserEvent.TabCreated", [], {
    localName: "BrowserEvent_TabCreated"
});
const BrowserEvent_TabClosed = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BrowserEvent.TabClosed", [], {
    localName: "BrowserEvent_TabClosed"
});
const BrowserEvent_Navigation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BrowserEvent.Navigation", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "BrowserEvent_Navigation"
});
const BrowserEvent_ToolAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BrowserEvent.ToolAction", ()=>[
        {
            no: 1,
            name: "tool_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "success",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "post_snapshot_yaml",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "post_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "post_title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BrowserEvent_ToolAction_Source)
        }
    ], {
    localName: "BrowserEvent_ToolAction"
});
const BrowserEvent_ToolAction_Source = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.BrowserEvent.ToolAction.Source", [
    {
        no: 0,
        name: "SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SOURCE_MCP_TOOL",
        localName: "MCP_TOOL"
    },
    {
        no: 2,
        name: "SOURCE_MANUAL_USER",
        localName: "MANUAL_USER"
    }
]);
const NtpEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.NtpEvent", ()=>[
        {
            no: 1,
            name: "originate_timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "receive_timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "transmit_timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "destination_timestamp",
            kind: "scalar",
            T: 1
        }
    ]);
const RepoEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RepoEvent", ()=>[
        {
            no: 1,
            name: "repo_owner",
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
            name: "event_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RepoEvent_Type)
        }
    ]);
const RepoEvent_Type = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.RepoEvent.Type", [
    {
        no: 0,
        name: "TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TYPE_SYNCED",
        localName: "SYNCED"
    },
    {
        no: 2,
        name: "TYPE_LOADING",
        localName: "LOADING"
    },
    {
        no: 3,
        name: "TYPE_INDEXING_SETUP",
        localName: "INDEXING_SETUP"
    },
    {
        no: 4,
        name: "TYPE_INDEXING_INIT_FROM_SIMILAR_CODEBASE",
        localName: "INDEXING_INIT_FROM_SIMILAR_CODEBASE"
    },
    {
        no: 5,
        name: "TYPE_PAUSED",
        localName: "PAUSED"
    },
    {
        no: 6,
        name: "TYPE_INDEXING",
        localName: "INDEXING"
    },
    {
        no: 7,
        name: "TYPE_ERROR",
        localName: "ERROR"
    },
    {
        no: 8,
        name: "TYPE_NOT_AUTO_INDEXING",
        localName: "NOT_AUTO_INDEXING"
    },
    {
        no: 9,
        name: "TYPE_NOT_INDEXED",
        localName: "NOT_INDEXED"
    }
]);
const GitEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GitEvent", ()=>[
        {
            no: 1,
            name: "operation_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(GitEvent_OperationType)
        },
        {
            no: 2,
            name: "repository_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "operation_success",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "is_default_branch",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "default_branch_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "commit_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "previous_commit_hash",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "remote_url",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const GitEvent_OperationType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.GitEvent.OperationType", [
    {
        no: 0,
        name: "OPERATION_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "OPERATION_TYPE_COMMIT",
        localName: "COMMIT"
    },
    {
        no: 2,
        name: "OPERATION_TYPE_CHECKOUT",
        localName: "CHECKOUT"
    },
    {
        no: 3,
        name: "OPERATION_TYPE_PULL",
        localName: "PULL"
    },
    {
        no: 4,
        name: "OPERATION_TYPE_FETCH",
        localName: "FETCH"
    },
    {
        no: 5,
        name: "OPERATION_TYPE_MERGE",
        localName: "MERGE"
    },
    {
        no: 6,
        name: "OPERATION_TYPE_REBASE",
        localName: "REBASE"
    },
    {
        no: 7,
        name: "OPERATION_TYPE_STASH",
        localName: "STASH"
    },
    {
        no: 8,
        name: "OPERATION_TYPE_BRANCH",
        localName: "BRANCH"
    },
    {
        no: 9,
        name: "OPERATION_TYPE_TAG",
        localName: "TAG"
    }
]);
const WorktreeEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WorktreeEvent", ()=>[
        {
            no: 1,
            name: "event_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(WorktreeEvent_EventType)
        },
        {
            no: 2,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "best_of_n_group_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "all_worktree_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "applied_worktree_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "worktree_composer_mappings",
            kind: "message",
            T: WorktreeEvent_WorktreeComposerMapping,
            repeated: true
        },
        {
            no: 7,
            name: "background_agent_composer_mappings",
            kind: "message",
            T: WorktreeEvent_BackgroundAgentComposerMapping,
            repeated: true
        },
        {
            no: 8,
            name: "applied_composer_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "viewed_composer_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const WorktreeEvent_EventType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.WorktreeEvent.EventType", [
    {
        no: 0,
        name: "EVENT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EVENT_TYPE_APPLY_TO_MAIN",
        localName: "APPLY_TO_MAIN"
    },
    {
        no: 2,
        name: "EVENT_TYPE_UNDO_APPLY",
        localName: "UNDO_APPLY"
    },
    {
        no: 3,
        name: "EVENT_TYPE_VIEW_SUBCOMPOSER",
        localName: "VIEW_SUBCOMPOSER"
    }
]);
const WorktreeEvent_WorktreeComposerMapping = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WorktreeEvent.WorktreeComposerMapping", ()=>[
        {
            no: 1,
            name: "worktree_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "composer_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "WorktreeEvent_WorktreeComposerMapping"
});
const WorktreeEvent_BackgroundAgentComposerMapping = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WorktreeEvent.BackgroundAgentComposerMapping", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "composer_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "WorktreeEvent_BackgroundAgentComposerMapping"
});
const ReviewChangesOpenedEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReviewChangesOpenedEvent", ()=>[
        {
            no: 1,
            name: "composer_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "best_of_n_group_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ToolCallEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ToolCallEvent", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "tool_name",
            kind: "scalar",
            T: 9
        }
    ]);
const SearchMatch = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchMatch", ()=>[
        {
            no: 1,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "column",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "match_text",
            kind: "scalar",
            T: 9
        }
    ]);
const SearchResultFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchResultFile", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "match_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "matches",
            kind: "message",
            T: SearchMatch,
            repeated: true
        }
    ]);
const SearchEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SearchEvent", ()=>[
        {
            no: 1,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "result_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "file_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "is_regex",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "is_case_sensitive",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "is_whole_word",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "files_to_include",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "files_to_exclude",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "duration_ms",
            kind: "scalar",
            T: 5
        },
        {
            no: 10,
            name: "results",
            kind: "message",
            T: SearchResultFile,
            repeated: true
        }
    ]);
