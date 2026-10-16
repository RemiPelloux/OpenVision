import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
import { EP, RP, lr, qc } from "./utils_pb_2.js";
var hZ, gZ, fZ, _Z, vZ, TZ, kZ, SZ, yZ, wZ, EZ, bZ, RZ, CZ, IZ, AZ, MZ, PZ, NZ, DZ, OZ, LZ, UZ, xZ, EN, FZ, WZ, BZ;
export { AZ, BZ, CZ, DZ, EN, EZ, FZ, IZ, LZ, MZ, NZ, OZ, PZ, RZ, SZ, TZ, UZ, WZ, _Z, bZ, fZ, gZ, hZ, kZ, vZ, wZ, xZ, yZ };
var __wakaru_GZ_initialized = false;
export function GZ() {
if (__wakaru_GZ_initialized) return;
__wakaru_GZ_initialized = true;
"use strict";
h(), F(), lr(), hZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: c.getEnumType(gZ)
        },
        {
            no: 2,
            name: "loop_on_lints",
            kind: "message",
            T: TZ,
            oneof: "data"
        },
        {
            no: 3,
            name: "loop_on_tests",
            kind: "message",
            T: kZ,
            oneof: "data"
        },
        {
            no: 4,
            name: "mega_planner",
            kind: "message",
            T: SZ,
            oneof: "data"
        },
        {
            no: 5,
            name: "loop_on_command",
            kind: "message",
            T: yZ,
            oneof: "data"
        },
        {
            no: 6,
            name: "tool_call",
            kind: "message",
            T: wZ,
            oneof: "data"
        },
        {
            no: 7,
            name: "diff_review",
            kind: "message",
            T: EZ,
            oneof: "data"
        },
        {
            no: 8,
            name: "context_picking",
            kind: "message",
            T: IZ,
            oneof: "data"
        },
        {
            no: 9,
            name: "edit_trail",
            kind: "message",
            T: AZ,
            oneof: "data"
        },
        {
            no: 10,
            name: "auto_context",
            kind: "message",
            T: MZ,
            oneof: "data"
        },
        {
            no: 11,
            name: "context_planner",
            kind: "message",
            T: PZ,
            oneof: "data"
        },
        {
            no: 12,
            name: "remember_this",
            kind: "message",
            T: NZ,
            oneof: "data"
        },
        {
            no: 13,
            name: "decomposer",
            kind: "message",
            T: CZ,
            oneof: "data"
        },
        {
            no: 14,
            name: "cursor_rules",
            kind: "message",
            T: DZ,
            oneof: "data"
        }
    ]), gZ = c.makeEnum("aiserver.v1.ComposerCapabilityRequest.ComposerCapabilityType", [
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
]), fZ = c.makeEnum("aiserver.v1.ComposerCapabilityRequest.ToolType", [
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
]), _Z = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ToolSchema", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: c.getEnumType(fZ)
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
                T: vZ
            }
        },
        {
            no: 4,
            name: "required",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_ToolSchema"
}), vZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.SchemaProperty", ()=>[
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
            opt: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_SchemaProperty"
}), TZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.LoopOnLintsCapability", ()=>[
        {
            no: 1,
            name: "linter_errors",
            kind: "message",
            T: EP,
            repeated: !0
        },
        {
            no: 2,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_LoopOnLintsCapability"
}), kZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.LoopOnTestsCapability", ()=>[
        {
            no: 1,
            name: "test_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_LoopOnTestsCapability"
}), SZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.MegaPlannerCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_MegaPlannerCapability"
}), yZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.LoopOnCommandCapability", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "output",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_LoopOnCommandCapability"
}), wZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ToolCallCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "tool_schemas",
            kind: "message",
            T: _Z,
            repeated: !0
        },
        {
            no: 3,
            name: "relevant_files",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "files_in_context",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "semantic_search_files",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_ToolCallCapability"
}), EZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "diffs",
            kind: "message",
            T: bZ,
            repeated: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_DiffReviewCapability"
}), bZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff", ()=>[
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
            T: RZ,
            repeated: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff"
}), RZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff.Chunk", ()=>[
        {
            no: 1,
            name: "old_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "new_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "old_range",
            kind: "message",
            T: qc
        },
        {
            no: 4,
            name: "new_range",
            kind: "message",
            T: qc
        }
    ], {
    localName: "ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk"
}), CZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DecomposerCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_DecomposerCapability"
}), IZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ContextPickingCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "potential_context_files",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "potential_context_code_chunks",
            kind: "message",
            T: RP,
            repeated: !0
        },
        {
            no: 4,
            name: "files_in_context",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_ContextPickingCapability"
}), AZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.EditTrailCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_EditTrailCapability"
}), MZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.AutoContextCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "additional_files",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_AutoContextCapability"
}), PZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ContextPlannerCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "attached_code_chunks",
            kind: "message",
            T: RP,
            repeated: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_ContextPlannerCapability"
}), NZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.RememberThisCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "memory",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ComposerCapabilityRequest_RememberThisCapability"
}), DZ = c.makeMessageType("aiserver.v1.ComposerCapabilityRequest.CursorRulesCapability", ()=>[
        {
            no: 1,
            name: "custom_instructions",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ComposerCapabilityRequest_CursorRulesCapability"
}), OZ = c.makeMessageType("aiserver.v1.ComposerCapabilityContext", ()=>[
        {
            no: 27,
            name: "slack_integration",
            kind: "message",
            T: LZ,
            oneof: "data"
        },
        {
            no: 28,
            name: "github_pr",
            kind: "message",
            T: xZ,
            oneof: "data"
        },
        {
            no: 29,
            name: "microsoft_teams_integration",
            kind: "message",
            T: UZ,
            oneof: "data"
        }
    ]), LZ = c.makeMessageType("aiserver.v1.ComposerCapabilityContext.SlackIntegrationContext", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "channel_purpose",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "channel_topic",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "sender_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "sender_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "sender_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "is_directly_addressed",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ], {
    localName: "ComposerCapabilityContext_SlackIntegrationContext"
}), UZ = c.makeMessageType("aiserver.v1.ComposerCapabilityContext.MicrosoftTeamsIntegrationContext", ()=>[
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
            opt: !0
        },
        {
            no: 3,
            name: "team_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "channel_description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "team_description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ComposerCapabilityContext_MicrosoftTeamsIntegrationContext"
}), xZ = c.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext", ()=>[
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
            opt: !0
        },
        {
            no: 5,
            name: "code_tour_context",
            kind: "message",
            T: EN
        },
        {
            no: 6,
            name: "conflict_resolution",
            kind: "message",
            T: FZ
        }
    ], {
    localName: "ComposerCapabilityContext_GithubPRContext"
}), EN = c.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.CodeTourContext", ()=>[
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
            opt: !0
        },
        {
            no: 4,
            name: "visible_section_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "visible_step_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "path_scope_prefix",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ], {
    localName: "ComposerCapabilityContext_GithubPRContext_CodeTourContext"
}), FZ = c.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext", ()=>[
        {
            no: 1,
            name: "head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "base_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "base_ref",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "conflicted_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "gate_reason",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "hunks",
            kind: "message",
            T: WZ,
            repeated: !0
        },
        {
            no: 7,
            name: "files",
            kind: "message",
            T: BZ,
            repeated: !0
        }
    ], {
    localName: "ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext"
}), WZ = c.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.HunkReport", ()=>[
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
            opt: !0
        },
        {
            no: 5,
            name: "needs_person",
            kind: "scalar",
            T: 8
        }
    ], {
    localName: "ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_HunkReport"
}), BZ = c.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.ResolvedFile", ()=>[
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

}
