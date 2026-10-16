require.r(exports);
require.d(exports, {
    ApplyFullSelfDrivingPrScopedSuggestionRequest: ()=>ApplyFullSelfDrivingPrScopedSuggestionRequest,
    ApplyFullSelfDrivingPrScopedSuggestionResponse: ()=>ApplyFullSelfDrivingPrScopedSuggestionResponse,
    ApplyFullSelfDrivingSuggestionRequest: ()=>ApplyFullSelfDrivingSuggestionRequest,
    ApplyFullSelfDrivingSuggestionResponse: ()=>ApplyFullSelfDrivingSuggestionResponse,
    BuildFullSelfDrivingTriageContextRequest: ()=>BuildFullSelfDrivingTriageContextRequest,
    BuildFullSelfDrivingTriageContextResponse: ()=>BuildFullSelfDrivingTriageContextResponse,
    DeleteFullSelfDrivingAutoApplyConfigRequest: ()=>DeleteFullSelfDrivingAutoApplyConfigRequest,
    DeleteFullSelfDrivingAutoApplyConfigResponse: ()=>DeleteFullSelfDrivingAutoApplyConfigResponse,
    DismissFullSelfDrivingOutputRequest: ()=>DismissFullSelfDrivingOutputRequest,
    DismissFullSelfDrivingOutputResponse: ()=>DismissFullSelfDrivingOutputResponse,
    EnrollExternalFullSelfDrivingRunRequest: ()=>EnrollExternalFullSelfDrivingRunRequest,
    EnrollExternalFullSelfDrivingRunResponse: ()=>EnrollExternalFullSelfDrivingRunResponse,
    FullSelfDrivingAutoApplyConfig: ()=>FullSelfDrivingAutoApplyConfig,
    FullSelfDrivingCloudCommandAction: ()=>FullSelfDrivingCloudCommandAction,
    FullSelfDrivingFinding: ()=>FullSelfDrivingFinding,
    FullSelfDrivingMode: ()=>FullSelfDrivingMode,
    FullSelfDrivingOutputInput: ()=>FullSelfDrivingOutputInput,
    FullSelfDrivingPrScopedSuggestion: ()=>FullSelfDrivingPrScopedSuggestion,
    FullSelfDrivingRun: ()=>FullSelfDrivingRun,
    FullSelfDrivingRunLiveStatus: ()=>FullSelfDrivingRunLiveStatus,
    FullSelfDrivingRunSuggestionState: ()=>FullSelfDrivingRunSuggestionState,
    GetFullSelfDrivingConfigRequest: ()=>GetFullSelfDrivingConfigRequest,
    GetFullSelfDrivingConfigResponse: ()=>GetFullSelfDrivingConfigResponse,
    GetFullSelfDrivingRunSuggestionRequest: ()=>GetFullSelfDrivingRunSuggestionRequest,
    GetFullSelfDrivingRunSuggestionResponse: ()=>GetFullSelfDrivingRunSuggestionResponse,
    ListFullSelfDrivingAutoApplyConfigsRequest: ()=>ListFullSelfDrivingAutoApplyConfigsRequest,
    ListFullSelfDrivingAutoApplyConfigsResponse: ()=>ListFullSelfDrivingAutoApplyConfigsResponse,
    ListFullSelfDrivingFindingsRequest: ()=>ListFullSelfDrivingFindingsRequest,
    ListFullSelfDrivingFindingsResponse: ()=>ListFullSelfDrivingFindingsResponse,
    ListFullSelfDrivingPrScopedSuggestionsRequest: ()=>ListFullSelfDrivingPrScopedSuggestionsRequest,
    ListFullSelfDrivingPrScopedSuggestionsResponse: ()=>ListFullSelfDrivingPrScopedSuggestionsResponse,
    ListFullSelfDrivingRunsRequest: ()=>ListFullSelfDrivingRunsRequest,
    ListFullSelfDrivingRunsResponse: ()=>ListFullSelfDrivingRunsResponse,
    PrepareLocalFullSelfDrivingRunRequest: ()=>PrepareLocalFullSelfDrivingRunRequest,
    PrepareLocalFullSelfDrivingRunResponse: ()=>PrepareLocalFullSelfDrivingRunResponse,
    RecordFullSelfDrivingAutoApplyConfigRequest: ()=>RecordFullSelfDrivingAutoApplyConfigRequest,
    RecordFullSelfDrivingAutoApplyConfigResponse: ()=>RecordFullSelfDrivingAutoApplyConfigResponse,
    RecordFullSelfDrivingOutputsRequest: ()=>RecordFullSelfDrivingOutputsRequest,
    RecordFullSelfDrivingOutputsResponse: ()=>RecordFullSelfDrivingOutputsResponse,
    RecordFullSelfDrivingPrScopedSuggestionRequest: ()=>RecordFullSelfDrivingPrScopedSuggestionRequest,
    RecordFullSelfDrivingPrScopedSuggestionResponse: ()=>RecordFullSelfDrivingPrScopedSuggestionResponse,
    RunFullSelfDrivingCloudCommandRequest: ()=>RunFullSelfDrivingCloudCommandRequest,
    RunFullSelfDrivingCloudCommandResponse: ()=>RunFullSelfDrivingCloudCommandResponse,
    RunFullSelfDrivingWorkflowSuggestionRequest: ()=>RunFullSelfDrivingWorkflowSuggestionRequest,
    RunFullSelfDrivingWorkflowSuggestionResponse: ()=>RunFullSelfDrivingWorkflowSuggestionResponse,
    SetFullSelfDrivingConfigRequest: ()=>SetFullSelfDrivingConfigRequest,
    SetFullSelfDrivingConfigResponse: ()=>SetFullSelfDrivingConfigResponse,
    SupersedeFullSelfDrivingOutputRequest: ()=>SupersedeFullSelfDrivingOutputRequest,
    SupersedeFullSelfDrivingOutputResponse: ()=>SupersedeFullSelfDrivingOutputResponse,
    UndoFullSelfDrivingOutputRequest: ()=>UndoFullSelfDrivingOutputRequest,
    UndoFullSelfDrivingOutputResponse: ()=>UndoFullSelfDrivingOutputResponse,
    UpdateFullSelfDrivingFindingStatusRequest: ()=>UpdateFullSelfDrivingFindingStatusRequest,
    UpdateFullSelfDrivingFindingStatusResponse: ()=>UpdateFullSelfDrivingFindingStatusResponse,
    UpdateFullSelfDrivingOutputRequest: ()=>UpdateFullSelfDrivingOutputRequest,
    UpdateFullSelfDrivingOutputResponse: ()=>UpdateFullSelfDrivingOutputResponse,
    UpdateFullSelfDrivingPrScopedSuggestionStatusRequest: ()=>UpdateFullSelfDrivingPrScopedSuggestionStatusRequest,
    UpdateFullSelfDrivingPrScopedSuggestionStatusResponse: ()=>UpdateFullSelfDrivingPrScopedSuggestionStatusResponse
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _agent_v1_agent_skills_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-147.js");
const FullSelfDrivingMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FullSelfDrivingMode", [
    {
        no: 0,
        name: "FULL_SELF_DRIVING_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FULL_SELF_DRIVING_MODE_SUGGEST",
        localName: "SUGGEST"
    },
    {
        no: 2,
        name: "FULL_SELF_DRIVING_MODE_APPLY",
        localName: "APPLY"
    }
]);
const FullSelfDrivingRunSuggestionState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FullSelfDrivingRunSuggestionState", [
    {
        no: 0,
        name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 2,
        name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_NO_CHANGES",
        localName: "NO_CHANGES"
    },
    {
        no: 3,
        name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_READY",
        localName: "READY"
    },
    {
        no: 4,
        name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_NOT_SUGGEST_MODE",
        localName: "NOT_SUGGEST_MODE"
    }
]);
const FullSelfDrivingCloudCommandAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FullSelfDrivingCloudCommandAction", [
    {
        no: 0,
        name: "FULL_SELF_DRIVING_CLOUD_COMMAND_ACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FULL_SELF_DRIVING_CLOUD_COMMAND_ACTION_SPAWNED",
        localName: "SPAWNED"
    },
    {
        no: 2,
        name: "FULL_SELF_DRIVING_CLOUD_COMMAND_ACTION_FOLLOWED_UP",
        localName: "FOLLOWED_UP"
    }
]);
const SetFullSelfDrivingConfigRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SetFullSelfDrivingConfigRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FullSelfDrivingMode)
        }
    ]);
const SetFullSelfDrivingConfigResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SetFullSelfDrivingConfigResponse", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FullSelfDrivingMode)
        },
        {
            no: 3,
            name: "spawned_bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "auto_started",
            kind: "scalar",
            T: 8
        }
    ]);
const GetFullSelfDrivingConfigRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetFullSelfDrivingConfigRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        }
    ]);
const GetFullSelfDrivingConfigResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetFullSelfDrivingConfigResponse", ()=>[
        {
            no: 1,
            name: "has_config",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FullSelfDrivingMode)
        },
        {
            no: 4,
            name: "auto_started",
            kind: "scalar",
            T: 8
        }
    ]);
const ListFullSelfDrivingRunsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListFullSelfDrivingRunsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const FullSelfDrivingRunLiveStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FullSelfDrivingRunLiveStatus", ()=>[
        {
            no: 1,
            name: "state",
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
            name: "loading_messages",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "updated_at",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Timestamp
        }
    ]);
const FullSelfDrivingRun = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FullSelfDrivingRun", ()=>[
        {
            no: 1,
            name: "bc_id",
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
            name: "created_at",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Timestamp
        },
        {
            no: 4,
            name: "first_finished_at",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Timestamp
        },
        {
            no: 5,
            name: "branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "auto_branch",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "files_changed",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "source",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "active_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "latest_status_update",
            kind: "message",
            T: FullSelfDrivingRunLiveStatus,
            opt: true
        }
    ]);
const ListFullSelfDrivingRunsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListFullSelfDrivingRunsResponse", ()=>[
        {
            no: 1,
            name: "runs",
            kind: "message",
            T: FullSelfDrivingRun,
            repeated: true
        }
    ]);
const ListFullSelfDrivingFindingsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListFullSelfDrivingFindingsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "limit",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "include_superseded",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "kinds",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const FullSelfDrivingFinding = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FullSelfDrivingFinding", ()=>[
        {
            no: 1,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "last_updated_at",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Timestamp
        },
        {
            no: 3,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "payload",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Struct
        },
        {
            no: 11,
            name: "superseded_by_stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "superseded_reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "dismissed_reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 16,
            name: "dedupe_key",
            kind: "scalar",
            T: 9
        }
    ]);
const ListFullSelfDrivingFindingsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListFullSelfDrivingFindingsResponse", ()=>[
        {
            no: 1,
            name: "findings",
            kind: "message",
            T: FullSelfDrivingFinding,
            repeated: true
        }
    ]);
const FullSelfDrivingOutputInput = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FullSelfDrivingOutputInput", ()=>[
        {
            no: 1,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "body",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "payload",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Struct
        }
    ]);
const RecordFullSelfDrivingOutputsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RecordFullSelfDrivingOutputsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "outputs",
            kind: "message",
            T: FullSelfDrivingOutputInput,
            repeated: true
        }
    ]);
const RecordFullSelfDrivingOutputsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RecordFullSelfDrivingOutputsResponse", ()=>[
        {
            no: 1,
            name: "findings",
            kind: "message",
            T: FullSelfDrivingFinding,
            repeated: true
        }
    ]);
const UpdateFullSelfDrivingOutputRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateFullSelfDrivingOutputRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "body",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "status",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "severity",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "clear_severity",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "action",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "clear_action",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 11,
            name: "payload",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Struct
        }
    ]);
const UpdateFullSelfDrivingOutputResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: FullSelfDrivingFinding
        }
    ]);
const SupersedeFullSelfDrivingOutputRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SupersedeFullSelfDrivingOutputRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "replacement_stable_key",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SupersedeFullSelfDrivingOutputResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.SupersedeFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: FullSelfDrivingFinding
        }
    ]);
const DismissFullSelfDrivingOutputRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DismissFullSelfDrivingOutputRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const DismissFullSelfDrivingOutputResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DismissFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: FullSelfDrivingFinding
        }
    ]);
const UndoFullSelfDrivingOutputRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UndoFullSelfDrivingOutputRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        }
    ]);
const UndoFullSelfDrivingOutputResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UndoFullSelfDrivingOutputResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: FullSelfDrivingFinding
        }
    ]);
const GetFullSelfDrivingRunSuggestionRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetFullSelfDrivingRunSuggestionRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        }
    ]);
const GetFullSelfDrivingRunSuggestionResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.GetFullSelfDrivingRunSuggestionResponse", ()=>[
        {
            no: 1,
            name: "state",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FullSelfDrivingRunSuggestionState)
        },
        {
            no: 2,
            name: "side_branch_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "head_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "base_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "create_pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "already_applied",
            kind: "scalar",
            T: 8
        }
    ]);
const ApplyFullSelfDrivingSuggestionRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ApplyFullSelfDrivingSuggestionRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "head_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "preview_base_commit_sha",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ApplyFullSelfDrivingSuggestionResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ApplyFullSelfDrivingSuggestionResponse", ()=>[
        {
            no: 1,
            name: "new_pr_head_sha",
            kind: "scalar",
            T: 9
        }
    ]);
const UpdateFullSelfDrivingFindingStatusRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateFullSelfDrivingFindingStatusRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "status",
            kind: "scalar",
            T: 9
        }
    ]);
const UpdateFullSelfDrivingFindingStatusResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateFullSelfDrivingFindingStatusResponse", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: FullSelfDrivingFinding
        }
    ]);
const RunFullSelfDrivingWorkflowSuggestionRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunFullSelfDrivingWorkflowSuggestionRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "event_id",
            kind: "scalar",
            T: 9
        }
    ]);
const RunFullSelfDrivingWorkflowSuggestionResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunFullSelfDrivingWorkflowSuggestionResponse", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "spawned_new_run",
            kind: "scalar",
            T: 8
        }
    ]);
const BuildFullSelfDrivingTriageContextRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BuildFullSelfDrivingTriageContextRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "trigger_description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "event_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FullSelfDrivingMode)
        },
        {
            no: 5,
            name: "bc_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "fetch_ci_log_excerpts",
            kind: "scalar",
            T: 8
        }
    ]);
const BuildFullSelfDrivingTriageContextResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.BuildFullSelfDrivingTriageContextResponse", ()=>[
        {
            no: 1,
            name: "triage_json",
            kind: "scalar",
            T: 9
        }
    ]);
const PrepareLocalFullSelfDrivingRunRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PrepareLocalFullSelfDrivingRunRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FullSelfDrivingMode)
        },
        {
            no: 3,
            name: "trigger_description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PrepareLocalFullSelfDrivingRunResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.PrepareLocalFullSelfDrivingRunResponse", ()=>[
        {
            no: 1,
            name: "local_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "triage_context_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FullSelfDrivingMode)
        },
        {
            no: 5,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "skill_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "skills",
            kind: "message",
            T: _agent_v1_agent_skills_pb_js__WEBPACK_IMPORTED_MODULE_1__.AgentSkill,
            repeated: true
        }
    ]);
const RunFullSelfDrivingCloudCommandRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunFullSelfDrivingCloudCommandRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FullSelfDrivingMode)
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
            name: "trigger_description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "model_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RunFullSelfDrivingCloudCommandResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RunFullSelfDrivingCloudCommandResponse", ()=>[
        {
            no: 1,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "action",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FullSelfDrivingCloudCommandAction)
        },
        {
            no: 3,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FullSelfDrivingMode)
        }
    ]);
const EnrollExternalFullSelfDrivingRunRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EnrollExternalFullSelfDrivingRunRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bc_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FullSelfDrivingMode)
        },
        {
            no: 4,
            name: "enable_config",
            kind: "scalar",
            T: 8
        }
    ]);
const EnrollExternalFullSelfDrivingRunResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.EnrollExternalFullSelfDrivingRunResponse", ()=>[
        {
            no: 1,
            name: "enrolled",
            kind: "scalar",
            T: 8
        }
    ]);
const FullSelfDrivingPrScopedSuggestion = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FullSelfDrivingPrScopedSuggestion", ()=>[
        {
            no: 1,
            name: "finding",
            kind: "message",
            T: FullSelfDrivingFinding
        },
        {
            no: 2,
            name: "producer",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "producer_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "created_by_user_id",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "created_by_team_id",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
const RecordFullSelfDrivingPrScopedSuggestionRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RecordFullSelfDrivingPrScopedSuggestionRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "producer",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "producer_run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "output",
            kind: "message",
            T: FullSelfDrivingOutputInput
        }
    ]);
const RecordFullSelfDrivingPrScopedSuggestionResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RecordFullSelfDrivingPrScopedSuggestionResponse", ()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "message",
            T: FullSelfDrivingPrScopedSuggestion
        }
    ]);
const ListFullSelfDrivingPrScopedSuggestionsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListFullSelfDrivingPrScopedSuggestionsRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
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
            name: "include_superseded",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "kinds",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const ListFullSelfDrivingPrScopedSuggestionsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListFullSelfDrivingPrScopedSuggestionsResponse", ()=>[
        {
            no: 1,
            name: "suggestions",
            kind: "message",
            T: FullSelfDrivingPrScopedSuggestion,
            repeated: true
        }
    ]);
const UpdateFullSelfDrivingPrScopedSuggestionStatusRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateFullSelfDrivingPrScopedSuggestionStatusRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "reason",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const UpdateFullSelfDrivingPrScopedSuggestionStatusResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.UpdateFullSelfDrivingPrScopedSuggestionStatusResponse", ()=>[
        {
            no: 1,
            name: "suggestion",
            kind: "message",
            T: FullSelfDrivingPrScopedSuggestion
        }
    ]);
const ApplyFullSelfDrivingPrScopedSuggestionRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ApplyFullSelfDrivingPrScopedSuggestionRequest", ()=>[
        {
            no: 1,
            name: "pr_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stable_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "head_commit_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "event_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ApplyFullSelfDrivingPrScopedSuggestionResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ApplyFullSelfDrivingPrScopedSuggestionResponse", ()=>[
        {
            no: 1,
            name: "new_pr_head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "suggestion",
            kind: "message",
            T: FullSelfDrivingPrScopedSuggestion
        }
    ]);
const FullSelfDrivingAutoApplyConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.FullSelfDrivingAutoApplyConfig", ()=>[
        {
            no: 1,
            name: "match_kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "match_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "scope",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "created_at",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Timestamp
        },
        {
            no: 7,
            name: "producer",
            kind: "scalar",
            T: 9
        }
    ]);
const RecordFullSelfDrivingAutoApplyConfigRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RecordFullSelfDrivingAutoApplyConfigRequest", ()=>[
        {
            no: 1,
            name: "match_kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "match_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "scope",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "producer",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RecordFullSelfDrivingAutoApplyConfigResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RecordFullSelfDrivingAutoApplyConfigResponse", ()=>[
        {
            no: 1,
            name: "config",
            kind: "message",
            T: FullSelfDrivingAutoApplyConfig
        }
    ]);
const DeleteFullSelfDrivingAutoApplyConfigRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeleteFullSelfDrivingAutoApplyConfigRequest", ()=>[
        {
            no: 1,
            name: "match_kind",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "match_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "scope",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "producer",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const DeleteFullSelfDrivingAutoApplyConfigResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DeleteFullSelfDrivingAutoApplyConfigResponse", ()=>[
        {
            no: 1,
            name: "deleted",
            kind: "scalar",
            T: 8
        }
    ]);
const ListFullSelfDrivingAutoApplyConfigsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListFullSelfDrivingAutoApplyConfigsRequest", ()=>[
        {
            no: 1,
            name: "repo_owner",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "repo_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "producer",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ListFullSelfDrivingAutoApplyConfigsResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ListFullSelfDrivingAutoApplyConfigsResponse", ()=>[
        {
            no: 1,
            name: "configs",
            kind: "message",
            T: FullSelfDrivingAutoApplyConfig,
            repeated: true
        }
    ]);
