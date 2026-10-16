require.r(exports);
require.d(exports, {
    ComposerCapabilityContext: ()=>ComposerCapabilityContext,
    ComposerCapabilityContext_GithubPRContext: ()=>ComposerCapabilityContext_GithubPRContext,
    ComposerCapabilityContext_GithubPRContext_CodeTourContext: ()=>ComposerCapabilityContext_GithubPRContext_CodeTourContext,
    ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext: ()=>ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext,
    ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_HunkReport: ()=>ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_HunkReport,
    ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_ResolvedFile: ()=>ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_ResolvedFile,
    ComposerCapabilityContext_MicrosoftTeamsIntegrationContext: ()=>ComposerCapabilityContext_MicrosoftTeamsIntegrationContext,
    ComposerCapabilityContext_SlackIntegrationContext: ()=>ComposerCapabilityContext_SlackIntegrationContext,
    ComposerCapabilityRequest: ()=>ComposerCapabilityRequest,
    ComposerCapabilityRequest_AutoContextCapability: ()=>ComposerCapabilityRequest_AutoContextCapability,
    ComposerCapabilityRequest_ComposerCapabilityType: ()=>ComposerCapabilityRequest_ComposerCapabilityType,
    ComposerCapabilityRequest_ContextPickingCapability: ()=>ComposerCapabilityRequest_ContextPickingCapability,
    ComposerCapabilityRequest_ContextPlannerCapability: ()=>ComposerCapabilityRequest_ContextPlannerCapability,
    ComposerCapabilityRequest_CursorRulesCapability: ()=>ComposerCapabilityRequest_CursorRulesCapability,
    ComposerCapabilityRequest_DecomposerCapability: ()=>ComposerCapabilityRequest_DecomposerCapability,
    ComposerCapabilityRequest_DiffReviewCapability: ()=>ComposerCapabilityRequest_DiffReviewCapability,
    ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff: ()=>ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff,
    ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk: ()=>ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk,
    ComposerCapabilityRequest_EditTrailCapability: ()=>ComposerCapabilityRequest_EditTrailCapability,
    ComposerCapabilityRequest_LoopOnCommandCapability: ()=>ComposerCapabilityRequest_LoopOnCommandCapability,
    ComposerCapabilityRequest_LoopOnLintsCapability: ()=>ComposerCapabilityRequest_LoopOnLintsCapability,
    ComposerCapabilityRequest_LoopOnTestsCapability: ()=>ComposerCapabilityRequest_LoopOnTestsCapability,
    ComposerCapabilityRequest_MegaPlannerCapability: ()=>ComposerCapabilityRequest_MegaPlannerCapability,
    ComposerCapabilityRequest_RememberThisCapability: ()=>ComposerCapabilityRequest_RememberThisCapability,
    ComposerCapabilityRequest_SchemaProperty: ()=>ComposerCapabilityRequest_SchemaProperty,
    ComposerCapabilityRequest_ToolCallCapability: ()=>ComposerCapabilityRequest_ToolCallCapability,
    ComposerCapabilityRequest_ToolSchema: ()=>ComposerCapabilityRequest_ToolSchema,
    ComposerCapabilityRequest_ToolType: ()=>ComposerCapabilityRequest_ToolType
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-55.js");
const ComposerCapabilityRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ComposerCapabilityRequest_ComposerCapabilityType)
        },
        {
            no: 2,
            name: "loop_on_lints",
            kind: "message",
            T: ComposerCapabilityRequest_LoopOnLintsCapability,
            oneof: "data"
        },
        {
            no: 3,
            name: "loop_on_tests",
            kind: "message",
            T: ComposerCapabilityRequest_LoopOnTestsCapability,
            oneof: "data"
        },
        {
            no: 4,
            name: "mega_planner",
            kind: "message",
            T: ComposerCapabilityRequest_MegaPlannerCapability,
            oneof: "data"
        },
        {
            no: 5,
            name: "loop_on_command",
            kind: "message",
            T: ComposerCapabilityRequest_LoopOnCommandCapability,
            oneof: "data"
        },
        {
            no: 6,
            name: "tool_call",
            kind: "message",
            T: ComposerCapabilityRequest_ToolCallCapability,
            oneof: "data"
        },
        {
            no: 7,
            name: "diff_review",
            kind: "message",
            T: ComposerCapabilityRequest_DiffReviewCapability,
            oneof: "data"
        },
        {
            no: 8,
            name: "context_picking",
            kind: "message",
            T: ComposerCapabilityRequest_ContextPickingCapability,
            oneof: "data"
        },
        {
            no: 9,
            name: "edit_trail",
            kind: "message",
            T: ComposerCapabilityRequest_EditTrailCapability,
            oneof: "data"
        },
        {
            no: 10,
            name: "auto_context",
            kind: "message",
            T: ComposerCapabilityRequest_AutoContextCapability,
            oneof: "data"
        },
        {
            no: 11,
            name: "context_planner",
            kind: "message",
            T: ComposerCapabilityRequest_ContextPlannerCapability,
            oneof: "data"
        },
        {
            no: 12,
            name: "remember_this",
            kind: "message",
            T: ComposerCapabilityRequest_RememberThisCapability,
            oneof: "data"
        },
        {
            no: 13,
            name: "decomposer",
            kind: "message",
            T: ComposerCapabilityRequest_DecomposerCapability,
            oneof: "data"
        },
        {
            no: 14,
            name: "cursor_rules",
            kind: "message",
            T: ComposerCapabilityRequest_CursorRulesCapability,
            oneof: "data"
        }
    ]);
const ComposerCapabilityRequest_ComposerCapabilityType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ComposerCapabilityRequest.ComposerCapabilityType", [
    {
        no: 0,
        name: "COMPOSER_CAPABILITY_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_LINTS",
        localName: "LOOP_ON_LINTS"
    },
    {
        no: 2,
        name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_TESTS",
        localName: "LOOP_ON_TESTS"
    },
    {
        no: 3,
        name: "COMPOSER_CAPABILITY_TYPE_MEGA_PLANNER",
        localName: "MEGA_PLANNER"
    },
    {
        no: 4,
        name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_COMMAND",
        localName: "LOOP_ON_COMMAND"
    },
    {
        no: 5,
        name: "COMPOSER_CAPABILITY_TYPE_TOOL_CALL",
        localName: "TOOL_CALL"
    },
    {
        no: 6,
        name: "COMPOSER_CAPABILITY_TYPE_DIFF_REVIEW",
        localName: "DIFF_REVIEW"
    },
    {
        no: 7,
        name: "COMPOSER_CAPABILITY_TYPE_CONTEXT_PICKING",
        localName: "CONTEXT_PICKING"
    },
    {
        no: 8,
        name: "COMPOSER_CAPABILITY_TYPE_EDIT_TRAIL",
        localName: "EDIT_TRAIL"
    },
    {
        no: 9,
        name: "COMPOSER_CAPABILITY_TYPE_AUTO_CONTEXT",
        localName: "AUTO_CONTEXT"
    },
    {
        no: 10,
        name: "COMPOSER_CAPABILITY_TYPE_CONTEXT_PLANNER",
        localName: "CONTEXT_PLANNER"
    },
    {
        no: 11,
        name: "COMPOSER_CAPABILITY_TYPE_DIFF_HISTORY",
        localName: "DIFF_HISTORY"
    },
    {
        no: 12,
        name: "COMPOSER_CAPABILITY_TYPE_REMEMBER_THIS",
        localName: "REMEMBER_THIS"
    },
    {
        no: 13,
        name: "COMPOSER_CAPABILITY_TYPE_DECOMPOSER",
        localName: "DECOMPOSER"
    },
    {
        no: 14,
        name: "COMPOSER_CAPABILITY_TYPE_USES_CODEBASE",
        localName: "USES_CODEBASE"
    },
    {
        no: 15,
        name: "COMPOSER_CAPABILITY_TYPE_TOOL_FORMER",
        localName: "TOOL_FORMER"
    },
    {
        no: 16,
        name: "COMPOSER_CAPABILITY_TYPE_CURSOR_RULES",
        localName: "CURSOR_RULES"
    },
    {
        no: 17,
        name: "COMPOSER_CAPABILITY_TYPE_TOKEN_COUNTER",
        localName: "TOKEN_COUNTER"
    },
    {
        no: 18,
        name: "COMPOSER_CAPABILITY_TYPE_USAGE_DATA",
        localName: "USAGE_DATA"
    },
    {
        no: 19,
        name: "COMPOSER_CAPABILITY_TYPE_CHIMES",
        localName: "CHIMES"
    },
    {
        no: 20,
        name: "COMPOSER_CAPABILITY_TYPE_CODE_DECAY_TRACKER",
        localName: "CODE_DECAY_TRACKER"
    },
    {
        no: 21,
        name: "COMPOSER_CAPABILITY_TYPE_BACKGROUND_COMPOSER",
        localName: "BACKGROUND_COMPOSER"
    },
    {
        no: 22,
        name: "COMPOSER_CAPABILITY_TYPE_SUMMARIZATION",
        localName: "SUMMARIZATION"
    },
    {
        no: 23,
        name: "COMPOSER_CAPABILITY_TYPE_AI_CODE_TRACKING",
        localName: "AI_CODE_TRACKING"
    },
    {
        no: 24,
        name: "COMPOSER_CAPABILITY_TYPE_QUEUING",
        localName: "QUEUING"
    },
    {
        no: 25,
        name: "COMPOSER_CAPABILITY_TYPE_MEMORIES",
        localName: "MEMORIES"
    },
    {
        no: 26,
        name: "COMPOSER_CAPABILITY_TYPE_RCP_LOGS",
        localName: "RCP_LOGS"
    },
    {
        no: 27,
        name: "COMPOSER_CAPABILITY_TYPE_KNOWLEDGE_FETCH",
        localName: "KNOWLEDGE_FETCH"
    },
    {
        no: 28,
        name: "COMPOSER_CAPABILITY_TYPE_SLACK_INTEGRATION",
        localName: "SLACK_INTEGRATION"
    },
    {
        no: 29,
        name: "COMPOSER_CAPABILITY_TYPE_SUB_COMPOSER",
        localName: "SUB_COMPOSER"
    },
    {
        no: 30,
        name: "COMPOSER_CAPABILITY_TYPE_THINKING",
        localName: "THINKING"
    },
    {
        no: 31,
        name: "COMPOSER_CAPABILITY_TYPE_CONTEXT_WINDOW",
        localName: "CONTEXT_WINDOW"
    },
    {
        no: 32,
        name: "COMPOSER_CAPABILITY_TYPE_ONLINE_METRICS",
        localName: "ONLINE_METRICS"
    },
    {
        no: 33,
        name: "COMPOSER_CAPABILITY_TYPE_NOTIFICATIONS",
        localName: "NOTIFICATIONS"
    },
    {
        no: 34,
        name: "COMPOSER_CAPABILITY_TYPE_SPEC",
        localName: "SPEC"
    },
    {
        no: 35,
        name: "COMPOSER_CAPABILITY_TYPE_BROWSER_AGENT",
        localName: "BROWSER_AGENT"
    }
]);
const ComposerCapabilityRequest_ToolType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.ComposerCapabilityRequest.ToolType", [
    {
        no: 0,
        name: "TOOL_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TOOL_TYPE_ADD_FILE_TO_CONTEXT",
        localName: "ADD_FILE_TO_CONTEXT"
    },
    {
        no: 3,
        name: "TOOL_TYPE_ITERATE",
        localName: "ITERATE"
    },
    {
        no: 4,
        name: "TOOL_TYPE_REMOVE_FILE_FROM_CONTEXT",
        localName: "REMOVE_FILE_FROM_CONTEXT"
    },
    {
        no: 5,
        name: "TOOL_TYPE_SEMANTIC_SEARCH_CODEBASE",
        localName: "SEMANTIC_SEARCH_CODEBASE"
    }
]);
const ComposerCapabilityRequest_ToolSchema = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ToolSchema", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ComposerCapabilityRequest_ToolType)
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "properties",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: ComposerCapabilityRequest_SchemaProperty
            }
        },
        {
            no: 4,
            name: "required",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "ComposerCapabilityRequest_ToolSchema"
});
const ComposerCapabilityRequest_SchemaProperty = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.SchemaProperty", ()=>[
        {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ComposerCapabilityRequest_SchemaProperty"
});
const ComposerCapabilityRequest_LoopOnLintsCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.LoopOnLintsCapability", ()=>[
        {
            no: 1,
            name: "linter_errors",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LinterErrors,
            repeated: true
        },
        {
            no: 2,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ComposerCapabilityRequest_LoopOnLintsCapability"
});
const ComposerCapabilityRequest_LoopOnTestsCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.LoopOnTestsCapability", ()=>[
        {
            no: 1,
            name: "test_names",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ComposerCapabilityRequest_LoopOnTestsCapability"
});
const ComposerCapabilityRequest_MegaPlannerCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.MegaPlannerCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ComposerCapabilityRequest_MegaPlannerCapability"
});
const ComposerCapabilityRequest_LoopOnCommandCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.LoopOnCommandCapability", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "output",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ], {
    localName: "ComposerCapabilityRequest_LoopOnCommandCapability"
});
const ComposerCapabilityRequest_ToolCallCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ToolCallCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "tool_schemas",
            kind: "message",
            T: ComposerCapabilityRequest_ToolSchema,
            repeated: true
        },
        {
            no: 3,
            name: "relevant_files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "files_in_context",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "semantic_search_files",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "ComposerCapabilityRequest_ToolCallCapability"
});
const ComposerCapabilityRequest_DiffReviewCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "diffs",
            kind: "message",
            T: ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff,
            repeated: true
        }
    ], {
    localName: "ComposerCapabilityRequest_DiffReviewCapability"
});
const ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunks",
            kind: "message",
            T: ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk,
            repeated: true
        }
    ], {
    localName: "ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff"
});
const ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff.Chunk", ()=>[
        {
            no: 1,
            name: "old_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "new_lines",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "old_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LineRange
        },
        {
            no: 4,
            name: "new_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.LineRange
        }
    ], {
    localName: "ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk"
});
const ComposerCapabilityRequest_DecomposerCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DecomposerCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ComposerCapabilityRequest_DecomposerCapability"
});
const ComposerCapabilityRequest_ContextPickingCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ContextPickingCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "potential_context_files",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "potential_context_code_chunks",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CodeChunk,
            repeated: true
        },
        {
            no: 4,
            name: "files_in_context",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "ComposerCapabilityRequest_ContextPickingCapability"
});
const ComposerCapabilityRequest_EditTrailCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.EditTrailCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ComposerCapabilityRequest_EditTrailCapability"
});
const ComposerCapabilityRequest_AutoContextCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.AutoContextCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "additional_files",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ], {
    localName: "ComposerCapabilityRequest_AutoContextCapability"
});
const ComposerCapabilityRequest_ContextPlannerCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ContextPlannerCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "attached_code_chunks",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CodeChunk,
            repeated: true
        }
    ], {
    localName: "ComposerCapabilityRequest_ContextPlannerCapability"
});
const ComposerCapabilityRequest_RememberThisCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.RememberThisCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "memory",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ComposerCapabilityRequest_RememberThisCapability"
});
const ComposerCapabilityRequest_CursorRulesCapability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityRequest.CursorRulesCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ComposerCapabilityRequest_CursorRulesCapability"
});
const ComposerCapabilityContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityContext", ()=>[
        {
            no: 27,
            name: "slack_integration",
            kind: "message",
            T: ComposerCapabilityContext_SlackIntegrationContext,
            oneof: "data"
        },
        {
            no: 28,
            name: "github_pr",
            kind: "message",
            T: ComposerCapabilityContext_GithubPRContext,
            oneof: "data"
        },
        {
            no: 29,
            name: "microsoft_teams_integration",
            kind: "message",
            T: ComposerCapabilityContext_MicrosoftTeamsIntegrationContext,
            oneof: "data"
        }
    ]);
const ComposerCapabilityContext_SlackIntegrationContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityContext.SlackIntegrationContext", ()=>[
        {
            no: 1,
            name: "thread",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "channel_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "channel_purpose",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "channel_topic",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "sender_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "sender_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "sender_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "is_directly_addressed",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ], {
    localName: "ComposerCapabilityContext_SlackIntegrationContext"
});
const ComposerCapabilityContext_MicrosoftTeamsIntegrationContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityContext.MicrosoftTeamsIntegrationContext", ()=>[
        {
            no: 1,
            name: "thread",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "channel_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "team_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "channel_description",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "team_description",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ComposerCapabilityContext_MicrosoftTeamsIntegrationContext"
});
const ComposerCapabilityContext_GithubPRContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext", ()=>[
        {
            no: 1,
            name: "title",
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
            name: "comments",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "ci_failures",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "code_tour_context",
            kind: "message",
            T: ComposerCapabilityContext_GithubPRContext_CodeTourContext
        },
        {
            no: 6,
            name: "conflict_resolution",
            kind: "message",
            T: ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext
        }
    ], {
    localName: "ComposerCapabilityContext_GithubPRContext"
});
const ComposerCapabilityContext_GithubPRContext_CodeTourContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.CodeTourContext", ()=>[
        {
            no: 1,
            name: "change_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "head_sha",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "current_revision_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "visible_section_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "visible_step_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "path_scope_prefix",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ], {
    localName: "ComposerCapabilityContext_GithubPRContext_CodeTourContext"
});
const ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext", ()=>[
        {
            no: 1,
            name: "head_sha",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "base_sha",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "base_ref",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "conflicted_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "gate_reason",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "hunks",
            kind: "message",
            T: ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_HunkReport,
            repeated: true
        },
        {
            no: 7,
            name: "files",
            kind: "message",
            T: ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_ResolvedFile,
            repeated: true
        }
    ], {
    localName: "ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext"
});
const ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_HunkReport = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.HunkReport", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "outcome",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "kind",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "needs_person",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_HunkReport"
});
const ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_ResolvedFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.ResolvedFile", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "fully_resolved",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_ResolvedFile"
});
