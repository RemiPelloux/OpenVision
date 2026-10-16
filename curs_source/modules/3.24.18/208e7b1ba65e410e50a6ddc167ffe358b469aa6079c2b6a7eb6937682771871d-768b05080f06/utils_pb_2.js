import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var jq, kP, au, Ki, Hq, Ig, qq, qc, Ag, Kq, SP, zq, Yq, $y, yP, Jq, Xq, Qq, Zq, ou, wP, eK, tK, yo, EP, nK, Mg, cu, rK, sK, iK, aK, oK, cK, lK, bP, dK, uK, mK, pK, hK, gK, Kc, fK, jy, RP, _K, vK, TK, kK, SK, yK;
export { $y, Ag, EP, Hq, Ig, Jq, Kc, Ki, Kq, Mg, Qq, RP, SK, SP, TK, Xq, Yq, Zq, _K, aK, au, bP, cK, cu, dK, eK, fK, gK, hK, iK, jq, jy, kK, kP, lK, mK, nK, oK, ou, pK, qc, qq, rK, sK, tK, uK, vK, wP, yK, yP, yo, zq };
var __wakaru_lr_initialized = false;
export function lr() {
if (__wakaru_lr_initialized) return;
__wakaru_lr_initialized = true;
"use strict";
h(), F(), jq = c.makeEnum("aiserver.v1.EmbeddingModel", [
    {
        no: 0,
        name: "EMBEDDING_MODEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EMBEDDING_MODEL_VOYAGE_CODE_2",
        localName: "VOYAGE_CODE_2"
    },
    {
        no: 2,
        name: "EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3",
        localName: "TEXT_EMBEDDINGS_LARGE_3"
    },
    {
        no: 3,
        name: "EMBEDDING_MODEL_QWEN_1_5B_CUSTOM",
        localName: "QWEN_1_5B_CUSTOM"
    },
    {
        no: 4,
        name: "EMBEDDING_MODEL_MOCK_CHUNKER_ERROR",
        localName: "MOCK_CHUNKER_ERROR"
    },
    {
        no: 5,
        name: "EMBEDDING_MODEL_QWEN_1_5B_0618_CUSTOM",
        localName: "QWEN_1_5B_0618_CUSTOM"
    },
    {
        no: 6,
        name: "EMBEDDING_MODEL_QWEN_1_5B_0618_FP8_MM_CUSTOM",
        localName: "QWEN_1_5B_0618_FP8_MM_CUSTOM"
    }
]), kP = c.makeMessageType("aiserver.v1.CursorPosition", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "column",
            kind: "scalar",
            T: 5
        }
    ]), au = c.makeMessageType("aiserver.v1.SimplestRange", ()=>[
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
    ]), Ki = c.makeMessageType("aiserver.v1.GitDiff", ()=>[
        {
            no: 1,
            name: "diffs",
            kind: "message",
            T: Ig,
            repeated: !0
        },
        {
            no: 2,
            name: "diff_type",
            kind: "enum",
            T: c.getEnumType(Hq)
        },
        {
            no: 3,
            name: "file_contents_omitted",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Hq = c.makeEnum("aiserver.v1.GitDiff.DiffType", [
    {
        no: 0,
        name: "DIFF_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DIFF_TYPE_DIFF_TO_HEAD",
        localName: "DIFF_TO_HEAD"
    },
    {
        no: 2,
        name: "DIFF_TYPE_DIFF_FROM_BRANCH_TO_MAIN",
        localName: "DIFF_FROM_BRANCH_TO_MAIN"
    }
]), Ig = c.makeMessageType("aiserver.v1.FileDiff", ()=>[
        {
            no: 4,
            name: "added",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "removed",
            kind: "scalar",
            T: 5
        },
        {
            no: 1,
            name: "from",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "to",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chunks",
            kind: "message",
            T: qq,
            repeated: !0
        },
        {
            no: 6,
            name: "before_file_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "after_file_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "is_generated",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "old_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "new_mode",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), qq = c.makeMessageType("aiserver.v1.FileDiff.Chunk", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "old_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "old_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "new_start",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "new_lines",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "FileDiff_Chunk"
}), qc = c.makeMessageType("aiserver.v1.LineRange", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number_inclusive",
            kind: "scalar",
            T: 5
        }
    ]), Ag = c.makeMessageType("aiserver.v1.CursorRange", ()=>[
        {
            no: 1,
            name: "start_position",
            kind: "message",
            T: kP
        },
        {
            no: 2,
            name: "end_position",
            kind: "message",
            T: kP
        }
    ]), Kq = c.makeMessageType("aiserver.v1.DetailedLine", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 2
        },
        {
            no: 3,
            name: "is_signature",
            kind: "scalar",
            T: 8
        }
    ]), SP = c.makeMessageType("aiserver.v1.CodeBlock", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "file_contents_length",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "range",
            kind: "message",
            T: Ag
        },
        {
            no: 4,
            name: "contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "signatures",
            kind: "message",
            T: zq
        },
        {
            no: 6,
            name: "override_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "original_contents",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "detailed_lines",
            kind: "message",
            T: Kq,
            repeated: !0
        },
        {
            no: 10,
            name: "file_git_context",
            kind: "message",
            T: $y
        }
    ]), zq = c.makeMessageType("aiserver.v1.CodeBlock.Signatures", ()=>[
        {
            no: 1,
            name: "ranges",
            kind: "message",
            T: Ag,
            repeated: !0
        }
    ], {
    localName: "CodeBlock_Signatures"
}), Yq = c.makeMessageType("aiserver.v1.GitCommit", ()=>[
        {
            no: 1,
            name: "commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "author",
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
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), $y = c.makeMessageType("aiserver.v1.FileGit", ()=>[
        {
            no: 1,
            name: "commits",
            kind: "message",
            T: Yq,
            repeated: !0
        }
    ]), yP = c.makeMessageType("aiserver.v1.File", ()=>[
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
            name: "file_git_context",
            kind: "message",
            T: $y
        }
    ]), Jq = c.makeEnum("aiserver.v1.Diagnostic.DiagnosticSeverity", [
    {
        no: 0,
        name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DIAGNOSTIC_SEVERITY_ERROR",
        localName: "ERROR"
    },
    {
        no: 2,
        name: "DIAGNOSTIC_SEVERITY_WARNING",
        localName: "WARNING"
    },
    {
        no: 3,
        name: "DIAGNOSTIC_SEVERITY_INFORMATION",
        localName: "INFORMATION"
    },
    {
        no: 4,
        name: "DIAGNOSTIC_SEVERITY_HINT",
        localName: "HINT"
    }
]), Xq = c.makeMessageType("aiserver.v1.Diagnostic.RelatedInformation", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: Ag
        }
    ], {
    localName: "Diagnostic_RelatedInformation"
}), Qq = c.makeMessageType("aiserver.v1.AzureState", ()=>[
        {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "base_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "deployment",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "use_azure",
            kind: "scalar",
            T: 8
        }
    ]), Zq = c.makeMessageType("aiserver.v1.BedrockState", ()=>[
        {
            no: 1,
            name: "access_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secret_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "region",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "use_bedrock",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "session_token",
            kind: "scalar",
            T: 9
        }
    ]), ou = c.makeMessageType("aiserver.v1.ModelDetails", ()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "enable_ghost_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "azure_state",
            kind: "message",
            T: Qq,
            opt: !0
        },
        {
            no: 5,
            name: "enable_slow_pool",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "openai_api_base_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "bedrock_state",
            kind: "message",
            T: Zq,
            opt: !0
        },
        {
            no: 8,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), wP = c.makeMessageType("aiserver.v1.CloudAgentModelSelection", ()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parameters",
            kind: "message",
            T: eK,
            repeated: !0
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), eK = c.makeMessageType("aiserver.v1.CloudAgentModelSelection.ParameterValue", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "CloudAgentModelSelection_ParameterValue"
}), tK = c.makeMessageType("aiserver.v1.ModelInfo", ()=>[
        {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9
        }
    ]), yo = c.makeMessageType("aiserver.v1.LinterError", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "range",
            kind: "message",
            T: Ag
        },
        {
            no: 3,
            name: "source",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "related_information",
            kind: "message",
            T: Xq,
            repeated: !0
        },
        {
            no: 5,
            name: "severity",
            kind: "enum",
            T: c.getEnumType(Jq),
            opt: !0
        },
        {
            no: 6,
            name: "is_stale",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), EP = c.makeMessageType("aiserver.v1.LinterErrors", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "errors",
            kind: "message",
            T: yo,
            repeated: !0
        },
        {
            no: 3,
            name: "file_contents",
            kind: "scalar",
            T: 9
        }
    ]), nK = c.makeMessageType("aiserver.v1.LinterErrorsWithoutFileContents", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "errors",
            kind: "message",
            T: yo,
            repeated: !0
        }
    ]), Mg = c.makeMessageType("aiserver.v1.CursorRule", ()=>[
        {
            no: 1,
            name: "name",
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
            name: "body",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "is_from_glob",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "always_apply",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "attach_to_background_agents",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 7,
            name: "full_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 9,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 10,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), cu = c.makeMessageType("aiserver.v1.ErrorDetails", ()=>[
        {
            no: 1,
            name: "error",
            kind: "enum",
            T: c.getEnumType(rK)
        },
        {
            no: 2,
            name: "details",
            kind: "message",
            T: sK
        },
        {
            no: 3,
            name: "is_expected",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), rK = c.makeEnum("aiserver.v1.ErrorDetails.Error", [
    {
        no: 0,
        name: "ERROR_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ERROR_BAD_API_KEY",
        localName: "BAD_API_KEY"
    },
    {
        no: 42,
        name: "ERROR_BAD_USER_API_KEY",
        localName: "BAD_USER_API_KEY"
    },
    {
        no: 2,
        name: "ERROR_NOT_LOGGED_IN",
        localName: "NOT_LOGGED_IN"
    },
    {
        no: 3,
        name: "ERROR_INVALID_AUTH_ID",
        localName: "INVALID_AUTH_ID"
    },
    {
        no: 4,
        name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS",
        localName: "NOT_HIGH_ENOUGH_PERMISSIONS"
    },
    {
        no: 18,
        name: "ERROR_AGENT_REQUIRES_LOGIN",
        localName: "AGENT_REQUIRES_LOGIN"
    },
    {
        no: 5,
        name: "ERROR_BAD_MODEL_NAME",
        localName: "BAD_MODEL_NAME"
    },
    {
        no: 39,
        name: "ERROR_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 40,
        name: "ERROR_DEPRECATED",
        localName: "DEPRECATED"
    },
    {
        no: 6,
        name: "ERROR_USER_NOT_FOUND",
        localName: "USER_NOT_FOUND"
    },
    {
        no: 7,
        name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED",
        localName: "FREE_USER_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 8,
        name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED",
        localName: "PRO_USER_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 9,
        name: "ERROR_FREE_USER_USAGE_LIMIT",
        localName: "FREE_USER_USAGE_LIMIT"
    },
    {
        no: 10,
        name: "ERROR_PRO_USER_USAGE_LIMIT",
        localName: "PRO_USER_USAGE_LIMIT"
    },
    {
        no: 41,
        name: "ERROR_RESOURCE_EXHAUSTED",
        localName: "RESOURCE_EXHAUSTED"
    },
    {
        no: 11,
        name: "ERROR_AUTH_TOKEN_NOT_FOUND",
        localName: "AUTH_TOKEN_NOT_FOUND"
    },
    {
        no: 12,
        name: "ERROR_AUTH_TOKEN_EXPIRED",
        localName: "AUTH_TOKEN_EXPIRED"
    },
    {
        no: 13,
        name: "ERROR_OPENAI",
        localName: "OPENAI"
    },
    {
        no: 14,
        name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED",
        localName: "OPENAI_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 20,
        name: "ERROR_MAX_TOKENS",
        localName: "MAX_TOKENS"
    },
    {
        no: 23,
        name: "ERROR_PRO_USER_ONLY",
        localName: "PRO_USER_ONLY"
    },
    {
        no: 21,
        name: "ERROR_USER_ABORTED_REQUEST",
        localName: "USER_ABORTED_REQUEST"
    },
    {
        no: 25,
        name: "ERROR_TIMEOUT",
        localName: "TIMEOUT"
    },
    {
        no: 22,
        name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED",
        localName: "GENERIC_RATE_LIMIT_EXCEEDED"
    },
    {
        no: 28,
        name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT",
        localName: "GPT_4_VISION_PREVIEW_RATE_LIMIT"
    },
    {
        no: 29,
        name: "ERROR_CUSTOM_MESSAGE",
        localName: "CUSTOM_MESSAGE"
    },
    {
        no: 30,
        name: "ERROR_OUTDATED_CLIENT",
        localName: "OUTDATED_CLIENT"
    },
    {
        no: 31,
        name: "ERROR_CLAUDE_IMAGE_TOO_LARGE",
        localName: "CLAUDE_IMAGE_TOO_LARGE"
    },
    {
        no: 33,
        name: "ERROR_FILE_NOT_FOUND",
        localName: "FILE_NOT_FOUND"
    },
    {
        no: 34,
        name: "ERROR_API_KEY_RATE_LIMIT",
        localName: "API_KEY_RATE_LIMIT"
    },
    {
        no: 35,
        name: "ERROR_DEBOUNCED",
        localName: "DEBOUNCED"
    },
    {
        no: 36,
        name: "ERROR_BAD_REQUEST",
        localName: "BAD_REQUEST"
    },
    {
        no: 37,
        name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED",
        localName: "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"
    },
    {
        no: 38,
        name: "ERROR_UNAUTHORIZED",
        localName: "UNAUTHORIZED"
    },
    {
        no: 43,
        name: "ERROR_CONVERSATION_TOO_LONG",
        localName: "CONVERSATION_TOO_LONG"
    },
    {
        no: 44,
        name: "ERROR_USAGE_PRICING_REQUIRED",
        localName: "USAGE_PRICING_REQUIRED"
    },
    {
        no: 45,
        name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE",
        localName: "USAGE_PRICING_REQUIRED_CHANGEABLE"
    },
    {
        no: 46,
        name: "ERROR_GITHUB_NO_USER_CREDENTIALS",
        localName: "GITHUB_NO_USER_CREDENTIALS"
    },
    {
        no: 47,
        name: "ERROR_GITHUB_USER_NO_ACCESS",
        localName: "GITHUB_USER_NO_ACCESS"
    },
    {
        no: 48,
        name: "ERROR_GITHUB_APP_NO_ACCESS",
        localName: "GITHUB_APP_NO_ACCESS"
    },
    {
        no: 49,
        name: "ERROR_GITHUB_MULTIPLE_OWNERS",
        localName: "GITHUB_MULTIPLE_OWNERS"
    },
    {
        no: 50,
        name: "ERROR_RATE_LIMITED",
        localName: "RATE_LIMITED"
    },
    {
        no: 51,
        name: "ERROR_RATE_LIMITED_CHANGEABLE",
        localName: "RATE_LIMITED_CHANGEABLE"
    },
    {
        no: 52,
        name: "ERROR_CUSTOM",
        localName: "CUSTOM"
    },
    {
        no: 53,
        name: "ERROR_HOOKS_BLOCKED",
        localName: "HOOKS_BLOCKED"
    },
    {
        no: 54,
        name: "ERROR_SUSPICIOUS_USAGE_BLOCKED",
        localName: "SUSPICIOUS_USAGE_BLOCKED"
    },
    {
        no: 55,
        name: "ERROR_EXTENSION_HOST_TIMEOUT",
        localName: "EXTENSION_HOST_TIMEOUT"
    },
    {
        no: 56,
        name: "ERROR_NETWORK_ERROR",
        localName: "NETWORK_ERROR"
    },
    {
        no: 57,
        name: "ERROR_PROVIDER_ERROR",
        localName: "PROVIDER_ERROR"
    },
    {
        no: 58,
        name: "ERROR_MODEL_BLOCKED",
        localName: "MODEL_BLOCKED"
    },
    {
        no: 59,
        name: "ERROR_INTERNAL",
        localName: "INTERNAL"
    },
    {
        no: 60,
        name: "ERROR_MAX_MODE_REQUIRED",
        localName: "MAX_MODE_REQUIRED"
    },
    {
        no: 61,
        name: "ERROR_MODEL_NO_LONGER_SUPPORTED",
        localName: "MODEL_NO_LONGER_SUPPORTED"
    },
    {
        no: 62,
        name: "ERROR_PRICING_WARNING",
        localName: "PRICING_WARNING"
    },
    {
        no: 63,
        name: "ERROR_SLOW_POOL",
        localName: "SLOW_POOL"
    },
    {
        no: 64,
        name: "ERROR_UNSUPPORTED_REGION",
        localName: "UNSUPPORTED_REGION"
    },
    {
        no: 65,
        name: "ERROR_ACCOUNT_CLOSED",
        localName: "ACCOUNT_CLOSED"
    },
    {
        no: 66,
        name: "ERROR_TENANT_RESTRICTION_VIOLATION",
        localName: "TENANT_RESTRICTION_VIOLATION"
    }
]), sK = c.makeMessageType("aiserver.v1.CustomErrorDetails", ()=>[
        {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "detail",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "is_retryable",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "show_request_id",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "should_show_immediate_error",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "buttons",
            kind: "message",
            T: oK,
            repeated: !0
        },
        {
            no: 7,
            name: "additional_info",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 9,
            name: "plan_choices",
            kind: "message",
            T: aK,
            repeated: !0
        },
        {
            no: 10,
            name: "analytics_metadata",
            kind: "message",
            T: iK,
            opt: !0
        }
    ]), iK = c.makeMessageType("aiserver.v1.ErrorAnalyticsMetadata", ()=>[
        {
            no: 1,
            name: "action_required",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), aK = c.makeMessageType("aiserver.v1.PlanChoice", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sublabel",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), oK = c.makeMessageType("aiserver.v1.ErrorButton", ()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "upgrade",
            kind: "message",
            T: uK,
            oneof: "action"
        },
        {
            no: 3,
            name: "switch_model",
            kind: "message",
            T: mK,
            oneof: "action"
        },
        {
            no: 4,
            name: "configure_spend_limit",
            kind: "message",
            T: hK,
            oneof: "action"
        },
        {
            no: 5,
            name: "url",
            kind: "message",
            T: gK,
            oneof: "action"
        },
        {
            no: 6,
            name: "upgrade_choice",
            kind: "message",
            T: dK,
            oneof: "action"
        },
        {
            no: 7,
            name: "dashboard_action",
            kind: "message",
            T: bP,
            oneof: "action"
        },
        {
            no: 8,
            name: "reload_window",
            kind: "message",
            T: lK,
            oneof: "action"
        },
        {
            no: 9,
            name: "client_action",
            kind: "message",
            T: cK,
            oneof: "action"
        }
    ]), cK = c.makeMessageType("aiserver.v1.ClientAction", ()=>[
        {
            no: 1,
            name: "command_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), lK = c.makeMessageType("aiserver.v1.ReloadWindowAction", []), bP = c.makeMessageType("aiserver.v1.DashboardAction", ()=>[
        {
            no: 1,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "args",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 3,
            name: "success_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), dK = c.makeMessageType("aiserver.v1.UpgradeChoice", []), uK = c.makeMessageType("aiserver.v1.UpgradeAction", ()=>[
        {
            no: 1,
            name: "membership_to_upgrade_to",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "try_immediate_upgrade",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "allow_trial",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "dashboard_action",
            kind: "message",
            T: bP,
            opt: !0
        }
    ]), mK = c.makeMessageType("aiserver.v1.SwitchModelAction", ()=>[
        {
            no: 1,
            name: "suggested_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "parameters",
            kind: "message",
            T: pK,
            repeated: !0
        },
        {
            no: 3,
            name: "max_mode",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), pK = c.makeMessageType("aiserver.v1.SwitchModelAction.ModelParameterValue", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SwitchModelAction_ModelParameterValue"
}), hK = c.makeMessageType("aiserver.v1.ConfigureSpendLimitAction", ()=>[
        {
            no: 1,
            name: "confirm_label",
            kind: "scalar",
            T: 9
        }
    ]), gK = c.makeMessageType("aiserver.v1.UrlAction", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]), Kc = c.makeMessageType("aiserver.v1.ImageProto", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "dimension",
            kind: "message",
            T: fK
        },
        {
            no: 3,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "task_specific_description",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), fK = c.makeMessageType("aiserver.v1.ImageProto.Dimension", ()=>[
        {
            no: 1,
            name: "width",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "height",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ImageProto_Dimension"
}), jy = c.makeMessageType("aiserver.v1.ComposerExternalLink", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "pdf_content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "is_pdf",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "filename",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), RP = c.makeMessageType("aiserver.v1.CodeChunk", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "summarization_strategy",
            kind: "enum",
            T: c.getEnumType(vK),
            opt: !0
        },
        {
            no: 5,
            name: "language_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "intent",
            kind: "enum",
            T: c.getEnumType(_K),
            opt: !0
        },
        {
            no: 7,
            name: "is_final_version",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "is_first_version",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), _K = c.makeEnum("aiserver.v1.CodeChunk.Intent", [
    {
        no: 0,
        name: "INTENT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INTENT_COMPOSER_FILE",
        localName: "COMPOSER_FILE"
    },
    {
        no: 2,
        name: "INTENT_COMPRESSED_COMPOSER_FILE",
        localName: "COMPRESSED_COMPOSER_FILE"
    }
]), vK = c.makeEnum("aiserver.v1.CodeChunk.SummarizationStrategy", [
    {
        no: 0,
        name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED",
        localName: "NONE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "SUMMARIZATION_STRATEGY_SUMMARIZED",
        localName: "SUMMARIZED"
    },
    {
        no: 2,
        name: "SUMMARIZATION_STRATEGY_EMBEDDED",
        localName: "EMBEDDED"
    }
]), TK = c.makeMessageType("aiserver.v1.RCPCallFrame", ()=>[
        {
            no: 1,
            name: "function_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "line_number",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "column_number",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), kK = c.makeMessageType("aiserver.v1.RCPStackTrace", ()=>[
        {
            no: 1,
            name: "call_frames",
            kind: "message",
            T: TK,
            repeated: !0
        },
        {
            no: 2,
            name: "raw_stack_trace",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), SK = c.makeMessageType("aiserver.v1.RCPLogEntry", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "level",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "client_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "stack_trace",
            kind: "message",
            T: kK,
            opt: !0
        },
        {
            no: 7,
            name: "object_data_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), yK = c.makeMessageType("aiserver.v1.RCPUIElementPicked", ()=>[
        {
            no: 1,
            name: "element",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "xpath",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "text_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "extra",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "component",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "component_props_json",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
