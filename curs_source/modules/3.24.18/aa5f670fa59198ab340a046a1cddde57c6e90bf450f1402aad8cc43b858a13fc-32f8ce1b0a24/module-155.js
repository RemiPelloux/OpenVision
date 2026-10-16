require.r(exports);
require.d(exports, {
    AddBugbotFeedbackRequest: ()=>AddBugbotFeedbackRequest,
    AddBugbotFeedbackResponse: ()=>AddBugbotFeedbackResponse,
    BugBotDiscriminatorPromptProps: ()=>BugBotDiscriminatorPromptProps,
    BugBotDiscriminatorTrainingPromptProps: ()=>BugBotDiscriminatorTrainingPromptProps,
    BugBotRunStatus: ()=>BugBotRunStatus,
    BugLocation: ()=>BugLocation,
    BugReport: ()=>BugReport,
    BugReports: ()=>BugReports,
    BugbotDeeplinkEventKind: ()=>BugbotDeeplinkEventKind,
    BugbotFeedbackReaction: ()=>BugbotFeedbackReaction,
    FileAndOutline: ()=>FileAndOutline,
    GetBugBotRunEtaRequest: ()=>GetBugBotRunEtaRequest,
    GetBugBotRunEtaResponse: ()=>GetBugBotRunEtaResponse,
    GetEncryptedBugDataMultipleRequest: ()=>GetEncryptedBugDataMultipleRequest,
    GetEncryptedBugDataMultipleResponse: ()=>GetEncryptedBugDataMultipleResponse,
    GetEncryptedBugDataRequest: ()=>GetEncryptedBugDataRequest,
    GetEncryptedBugDataResponse: ()=>GetEncryptedBugDataResponse,
    LogDeeplinkEventRequest: ()=>LogDeeplinkEventRequest,
    LogDeeplinkEventResponse: ()=>LogDeeplinkEventResponse,
    RunBugBotPromptProps: ()=>RunBugBotPromptProps,
    StreamBugBotRequest: ()=>StreamBugBotRequest,
    StreamBugBotRequest_Range: ()=>StreamBugBotRequest_Range
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-55.js");
const BugbotDeeplinkEventKind = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.BugbotDeeplinkEventKind", [
    {
        no: 0,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_CLICKED",
        localName: "CLICKED"
    },
    {
        no: 2,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_DIALOG_SHOWN",
        localName: "HANDLED_DIALOG_SHOWN"
    },
    {
        no: 3,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_CHAT_CREATED",
        localName: "HANDLED_CHAT_CREATED"
    },
    {
        no: 4,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_ERROR",
        localName: "ERROR"
    },
    {
        no: 5,
        name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_FIX_IN_WEB",
        localName: "HANDLED_FIX_IN_WEB"
    }
]);
const BugbotFeedbackReaction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.BugbotFeedbackReaction", [
    {
        no: 0,
        name: "BUGBOT_FEEDBACK_REACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUGBOT_FEEDBACK_REACTION_THUMBS_UP",
        localName: "THUMBS_UP"
    },
    {
        no: 2,
        name: "BUGBOT_FEEDBACK_REACTION_THUMBS_DOWN",
        localName: "THUMBS_DOWN"
    }
]);
const BugBotRunStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.BugBotRunStatus", [
    {
        no: 0,
        name: "BUG_BOT_RUN_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUG_BOT_RUN_STATUS_NO_RUN",
        localName: "NO_RUN"
    },
    {
        no: 2,
        name: "BUG_BOT_RUN_STATUS_IN_PROGRESS",
        localName: "IN_PROGRESS"
    },
    {
        no: 3,
        name: "BUG_BOT_RUN_STATUS_COMPLETED",
        localName: "COMPLETED"
    }
]);
const BugLocation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugLocation", ()=>[
        {
            no: 1,
            name: "file",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "code_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const BugReport = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugReport", ()=>[
        {
            no: 1,
            name: "locations",
            kind: "message",
            T: BugLocation,
            repeated: true
        },
        {
            no: 2,
            name: "id",
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
            name: "confidence",
            kind: "scalar",
            T: 2,
            opt: true
        },
        {
            no: 5,
            name: "category",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "severity",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "rationale",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "triggered_by_rule_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "model_confidence",
            kind: "scalar",
            T: 2,
            opt: true
        }
    ]);
const BugReports = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugReports", ()=>[
        {
            no: 1,
            name: "bug_reports",
            kind: "message",
            T: BugReport,
            repeated: true
        }
    ]);
const StreamBugBotRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamBugBotRequest", ()=>[
        {
            no: 1,
            name: "git_diff",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.GitDiff
        },
        {
            no: 13,
            name: "context_files",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CodeBlock,
            repeated: true
        },
        {
            no: 2,
            name: "model_details",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.ModelDetails
        },
        {
            no: 3,
            name: "user_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "bug_detection_guidelines",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "iterations",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 12,
            name: "unified_context_lines",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 6,
            name: "in_background_subsidized",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "session_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "price_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "has_telemetry",
            kind: "scalar",
            T: 8
        },
        {
            no: 10,
            name: "constrain_to_file",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "constrain_to_range",
            kind: "message",
            T: StreamBugBotRequest_Range,
            opt: true
        },
        {
            no: 14,
            name: "deep_review",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const StreamBugBotRequest_Range = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.StreamBugBotRequest.Range", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_inclusive",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "StreamBugBotRequest_Range"
});
const FileAndOutline = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FileAndOutline", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CodeBlock
        },
        {
            no: 2,
            name: "outline",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RunBugBotPromptProps = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunBugBotPromptProps", ()=>[
        {
            no: 1,
            name: "req",
            kind: "message",
            T: StreamBugBotRequest
        },
        {
            no: 2,
            name: "seed",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "date",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "context_files",
            kind: "message",
            T: FileAndOutline,
            repeated: true
        },
        {
            no: 5,
            name: "file_content_source",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const BugBotDiscriminatorPromptProps = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotDiscriminatorPromptProps", ()=>[
        {
            no: 1,
            name: "req",
            kind: "message",
            T: StreamBugBotRequest
        },
        {
            no: 2,
            name: "bug",
            kind: "message",
            T: BugReport
        },
        {
            no: 3,
            name: "date",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "seed",
            kind: "scalar",
            T: 9
        }
    ]);
const BugBotDiscriminatorTrainingPromptProps = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BugBotDiscriminatorTrainingPromptProps", ()=>[
        {
            no: 1,
            name: "props",
            kind: "message",
            T: BugBotDiscriminatorPromptProps
        },
        {
            no: 2,
            name: "is_real_bug",
            kind: "scalar",
            T: 8
        }
    ]);
const LogDeeplinkEventRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LogDeeplinkEventRequest", ()=>[
        {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "bug_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "comment_id",
            kind: "scalar",
            T: 3,
            opt: true
        },
        {
            no: 4,
            name: "event",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BugbotDeeplinkEventKind)
        }
    ]);
const LogDeeplinkEventResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LogDeeplinkEventResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        }
    ]);
const GetEncryptedBugDataRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetEncryptedBugDataRequest", ()=>[
        {
            no: 1,
            name: "redis_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "encryption_key",
            kind: "scalar",
            T: 9
        }
    ]);
const GetEncryptedBugDataResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetEncryptedBugDataResponse", ()=>[
        {
            no: 1,
            name: "bug_report",
            kind: "message",
            T: BugReport
        }
    ]);
const GetEncryptedBugDataMultipleRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetEncryptedBugDataMultipleRequest", ()=>[
        {
            no: 1,
            name: "redis_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "encryption_key",
            kind: "scalar",
            T: 9
        }
    ]);
const GetEncryptedBugDataMultipleResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetEncryptedBugDataMultipleResponse", ()=>[
        {
            no: 1,
            name: "bug_reports",
            kind: "message",
            T: BugReport,
            repeated: true
        }
    ]);
const AddBugbotFeedbackRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddBugbotFeedbackRequest", ()=>[
        {
            no: 1,
            name: "comment_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "reaction",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BugbotFeedbackReaction)
        },
        {
            no: 3,
            name: "feedback",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const AddBugbotFeedbackResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AddBugbotFeedbackResponse", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 3
        }
    ]);
const GetBugBotRunEtaRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetBugBotRunEtaRequest", ()=>[
        {
            no: 1,
            name: "repository_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "repository_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pr_number",
            kind: "scalar",
            T: 5
        }
    ]);
const GetBugBotRunEtaResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetBugBotRunEtaResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BugBotRunStatus)
        },
        {
            no: 2,
            name: "estimated_completion_time_ms",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
