require.r(exports);
require.d(exports, {
    AiLintBug: ()=>AiLintBug,
    AiLintInlineSuggestion: ()=>AiLintInlineSuggestion,
    AiLintOutOfFlowSuggestion: ()=>AiLintOutOfFlowSuggestion,
    AiLintRule: ()=>AiLintRule,
    LintChunk: ()=>LintChunk,
    LintChunkRequest: ()=>LintChunkRequest,
    LintChunkResponse: ()=>LintChunkResponse,
    LintDiscriminator: ()=>LintDiscriminator,
    LintDiscriminatorResult: ()=>LintDiscriminatorResult,
    LintExplanationRequest: ()=>LintExplanationRequest,
    LintExplanationResponse: ()=>LintExplanationResponse,
    LintExplanationResponse2: ()=>LintExplanationResponse2,
    LintFileRequest: ()=>LintFileRequest,
    LintFileResponse: ()=>LintFileResponse,
    LintFimChunkRequest: ()=>LintFimChunkRequest,
    LintFimChunkResponse: ()=>LintFimChunkResponse,
    LintGenerator: ()=>LintGenerator,
    LogprobsLintPayload: ()=>LogprobsLintPayload,
    TokenIndex: ()=>TokenIndex,
    TokensWithLogprobs: ()=>TokensWithLogprobs
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-55.js");
const LintDiscriminator = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.LintDiscriminator", [
    {
        no: 0,
        name: "LINT_DISCRIMINATOR_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LINT_DISCRIMINATOR_SPECIFIC_RULES",
        localName: "SPECIFIC_RULES"
    },
    {
        no: 2,
        name: "LINT_DISCRIMINATOR_COMPILE_ERRORS",
        localName: "COMPILE_ERRORS"
    },
    {
        no: 3,
        name: "LINT_DISCRIMINATOR_CHANGE_BEHAVIOR",
        localName: "CHANGE_BEHAVIOR"
    },
    {
        no: 5,
        name: "LINT_DISCRIMINATOR_RELEVANCE",
        localName: "RELEVANCE"
    },
    {
        no: 6,
        name: "LINT_DISCRIMINATOR_USER_AWARENESS",
        localName: "USER_AWARENESS"
    },
    {
        no: 7,
        name: "LINT_DISCRIMINATOR_CORRECTNESS",
        localName: "CORRECTNESS"
    },
    {
        no: 8,
        name: "LINT_DISCRIMINATOR_CHUNKING",
        localName: "CHUNKING"
    },
    {
        no: 9,
        name: "LINT_DISCRIMINATOR_TYPO",
        localName: "TYPO"
    },
    {
        no: 10,
        name: "LINT_DISCRIMINATOR_CONFIDENCE",
        localName: "CONFIDENCE"
    },
    {
        no: 11,
        name: "LINT_DISCRIMINATOR_DISMISSED_BUGS",
        localName: "DISMISSED_BUGS"
    }
]);
const LintGenerator = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.LintGenerator", [
    {
        no: 0,
        name: "LINT_GENERATOR_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "LINT_GENERATOR_NAIVE",
        localName: "NAIVE"
    },
    {
        no: 2,
        name: "LINT_GENERATOR_COMMENT_PIPELINE",
        localName: "COMMENT_PIPELINE"
    },
    {
        no: 3,
        name: "LINT_GENERATOR_SIMPLE_BUG",
        localName: "SIMPLE_BUG"
    },
    {
        no: 4,
        name: "LINT_GENERATOR_SIMPLE_LINT_RULES",
        localName: "SIMPLE_LINT_RULES"
    }
]);
const LintExplanationRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LintExplanationRequest", ()=>[
        {
            no: 1,
            name: "relative_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "chunk",
            kind: "message",
            T: LintChunk
        },
        {
            no: 3,
            name: "line_selection",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "token_start_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "token_end_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "likely_alternate_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "line_chunk_index_zero_based",
            kind: "scalar",
            T: 5
        }
    ]);
const LintExplanationResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LintExplanationResponse", ()=>[
        {
            no: 1,
            name: "explanation",
            kind: "scalar",
            T: 9
        }
    ]);
const LintExplanationResponse2 = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LintExplanationResponse2", ()=>[
        {
            no: 1,
            name: "orig_line",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_line",
            kind: "scalar",
            T: 9
        }
    ]);
const LintChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LintChunk", ()=>[
        {
            no: 2,
            name: "chunk_contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "num_remaining_lines",
            kind: "scalar",
            T: 5
        }
    ]);
const LintChunkRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LintChunkRequest", ()=>[
        {
            no: 1,
            name: "relative_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "chunk",
            kind: "message",
            T: LintChunk
        },
        {
            no: 3,
            name: "use_speculative_linter",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const LintChunkResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LintChunkResponse", ()=>[
        {
            no: 1,
            name: "chunk_tokens",
            kind: "message",
            T: TokenIndex,
            repeated: true
        }
    ]);
const LintFimChunkRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LintFimChunkRequest", ()=>[
        {
            no: 1,
            name: "relative_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prefix",
            kind: "message",
            T: LintChunk
        },
        {
            no: 3,
            name: "suffix",
            kind: "message",
            T: LintChunk
        },
        {
            no: 4,
            name: "middle",
            kind: "message",
            T: LintChunk
        }
    ]);
const LintFimChunkResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LintFimChunkResponse", ()=>[
        {
            no: 1,
            name: "middle_chunk_tokens",
            kind: "message",
            T: TokenIndex,
            repeated: true
        }
    ]);
const LintFileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LintFileRequest", ()=>[
        {
            no: 1,
            name: "relative_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_contents",
            kind: "scalar",
            T: 9
        }
    ]);
const TokensWithLogprobs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TokensWithLogprobs", ()=>[
        {
            no: 1,
            name: "token",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "log_probability",
            kind: "scalar",
            T: 2
        }
    ]);
const TokenIndex = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.TokenIndex", ()=>[
        {
            no: 1,
            name: "tokens_with_logprobs",
            kind: "message",
            T: TokensWithLogprobs,
            repeated: true
        },
        {
            no: 2,
            name: "actual_token",
            kind: "scalar",
            T: 9
        }
    ]);
const LintFileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LintFileResponse", ()=>[
        {
            no: 1,
            name: "tokens",
            kind: "message",
            T: TokenIndex,
            repeated: true
        }
    ]);
const LintDiscriminatorResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LintDiscriminatorResult", ()=>[
        {
            no: 1,
            name: "discriminator",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(LintDiscriminator)
        },
        {
            no: 2,
            name: "allow",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "reasoning",
            kind: "scalar",
            T: 9
        }
    ]);
const AiLintBug = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AiLintBug", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "replace_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SimpleRange
        },
        {
            no: 4,
            name: "replace_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "replace_initial_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "reevaluate_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SimpleRange
        },
        {
            no: 7,
            name: "reevaluate_initial_text",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "generator",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(LintGenerator)
        },
        {
            no: 10,
            name: "discriminator_results",
            kind: "message",
            T: LintDiscriminatorResult,
            repeated: true
        },
        {
            no: 11,
            name: "logprobs_payload",
            kind: "message",
            T: LogprobsLintPayload
        }
    ]);
const LogprobsLintPayload = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LogprobsLintPayload", ()=>[
        {
            no: 1,
            name: "chunk",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "problematic_line",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_col",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_col",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "most_likely_replace",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "line_chunk_index_zero_based",
            kind: "scalar",
            T: 5
        }
    ]);
const AiLintInlineSuggestion = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AiLintInlineSuggestion", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "reevaluate_range",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.SimpleRange
        },
        {
            no: 5,
            name: "reevaluate_initial_text",
            kind: "scalar",
            T: 9
        }
    ]);
const AiLintOutOfFlowSuggestion = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AiLintOutOfFlowSuggestion", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const AiLintRule = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.AiLintRule", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);
