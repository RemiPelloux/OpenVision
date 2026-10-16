import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { Hu, m7 } from "./utils_pb.js";
var $1r, H1r, J9o, KEd, YEd, Xmn, XEd, ZEd, QEd, JEd, eId, tId, W1r, nId, iId, lii, rId, sId;
export { $1r, H1r, J9o, JEd, KEd, QEd, W1r, XEd, Xmn, YEd, ZEd, eId, iId, lii, nId, rId, sId, tId };
var __wakaru_oId_initialized = false;
export function oId() {
if (__wakaru_oId_initialized) return;
__wakaru_oId_initialized = true;
"use strict";
E(), hr(), Hu(), $1r = x.makeEnum("aiserver.v1.LintDiscriminator", [
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
]), H1r = x.makeEnum("aiserver.v1.LintGenerator", [
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
]), J9o = x.makeMessageType("aiserver.v1.LintExplanationRequest", ()=>[
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
            T: Xmn
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
    ]), KEd = x.makeMessageType("aiserver.v1.LintExplanationResponse", ()=>[
        {
            no: 1,
            name: "explanation",
            kind: "scalar",
            T: 9
        }
    ]), YEd = x.makeMessageType("aiserver.v1.LintExplanationResponse2", ()=>[
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
    ]), Xmn = x.makeMessageType("aiserver.v1.LintChunk", ()=>[
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
    ]), XEd = x.makeMessageType("aiserver.v1.LintChunkRequest", ()=>[
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
            T: Xmn
        },
        {
            no: 3,
            name: "use_speculative_linter",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), ZEd = x.makeMessageType("aiserver.v1.LintChunkResponse", ()=>[
        {
            no: 1,
            name: "chunk_tokens",
            kind: "message",
            T: W1r,
            repeated: !0
        }
    ]), QEd = x.makeMessageType("aiserver.v1.LintFimChunkRequest", ()=>[
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
            T: Xmn
        },
        {
            no: 3,
            name: "suffix",
            kind: "message",
            T: Xmn
        },
        {
            no: 4,
            name: "middle",
            kind: "message",
            T: Xmn
        }
    ]), JEd = x.makeMessageType("aiserver.v1.LintFimChunkResponse", ()=>[
        {
            no: 1,
            name: "middle_chunk_tokens",
            kind: "message",
            T: W1r,
            repeated: !0
        }
    ]), eId = x.makeMessageType("aiserver.v1.LintFileRequest", ()=>[
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
    ]), tId = x.makeMessageType("aiserver.v1.TokensWithLogprobs", ()=>[
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
    ]), W1r = x.makeMessageType("aiserver.v1.TokenIndex", ()=>[
        {
            no: 1,
            name: "tokens_with_logprobs",
            kind: "message",
            T: tId,
            repeated: !0
        },
        {
            no: 2,
            name: "actual_token",
            kind: "scalar",
            T: 9
        }
    ]), nId = x.makeMessageType("aiserver.v1.LintFileResponse", ()=>[
        {
            no: 1,
            name: "tokens",
            kind: "message",
            T: W1r,
            repeated: !0
        }
    ]), iId = x.makeMessageType("aiserver.v1.LintDiscriminatorResult", ()=>[
        {
            no: 1,
            name: "discriminator",
            kind: "enum",
            T: x.getEnumType($1r)
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
    ]), lii = x.makeMessageType("aiserver.v1.AiLintBug", ()=>[
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
            T: m7
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
            T: m7
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
            T: x.getEnumType(H1r)
        },
        {
            no: 10,
            name: "discriminator_results",
            kind: "message",
            T: iId,
            repeated: !0
        },
        {
            no: 11,
            name: "logprobs_payload",
            kind: "message",
            T: rId
        }
    ]), rId = x.makeMessageType("aiserver.v1.LogprobsLintPayload", ()=>[
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
    ]), sId = x.makeMessageType("aiserver.v1.AiLintRule", ()=>[
        {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }
    ]);

}
