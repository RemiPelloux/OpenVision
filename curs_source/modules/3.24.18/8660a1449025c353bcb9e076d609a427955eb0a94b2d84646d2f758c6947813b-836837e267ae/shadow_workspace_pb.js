import { $4t, Vti, ett } from "./diagnostics_exec_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Cx, qse } from "./repository_pb.js";
import { $_t, B3, Gke, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { Hu, Z9, ZF, jde, xbr } from "./utils_pb.js";
var ckd, i6o, ukd, r6o, dkd, s6o, hkd, o6o, pkd, a6o, mkd, l6o, gkd, c6o, fkd, QSr, u6o, JSr, vkd, d6o, _kd, h6o, bkd, p6o, ykd, Skd, kkd, wkd, Lmn, m6o, g6o, f6o;
export { JSr, Lmn, QSr, Skd, _kd, a6o, bkd, c6o, ckd, d6o, dkd, f6o, fkd, g6o, gkd, h6o, hkd, i6o, kkd, l6o, m6o, mkd, o6o, p6o, pkd, r6o, s6o, u6o, ukd, vkd, wkd, ykd };
var __wakaru_Omn_initialized = false;
export function Omn() {
if (__wakaru_Omn_initialized) return;
__wakaru_Omn_initialized = true;
"use strict";
E(), hr(), $4t(), Hu(), Pu(), qse(), ckd = x.makeMessageType("aiserver.v1.SwTrackModelRequest", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        }
    ]), i6o = x.makeMessageType("aiserver.v1.SwTrackModelResponse", []), ukd = x.makeMessageType("aiserver.v1.SwCallDiagnosticsExecutorRequest", ()=>[
        {
            no: 1,
            name: "diagnostics_args",
            kind: "message",
            T: Vti
        }
    ]), r6o = x.makeMessageType("aiserver.v1.SwCallDiagnosticsExecutorResponse", ()=>[
        {
            no: 1,
            name: "diagnostics_result",
            kind: "message",
            T: ett
        }
    ]), dkd = x.makeMessageType("aiserver.v1.SwWriteTextFileWithLintsRequest", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "new_contents",
            kind: "scalar",
            T: 9
        }
    ]), s6o = x.makeMessageType("aiserver.v1.SwWriteTextFileWithLintsResponse", ()=>[
        {
            no: 1,
            name: "new_linter_errors",
            kind: "message",
            T: jde,
            repeated: !0
        }
    ]), hkd = x.makeMessageType("aiserver.v1.SwGetExplicitContextRequest", []), o6o = x.makeMessageType("aiserver.v1.SwGetExplicitContextResponse", ()=>[
        {
            no: 1,
            name: "explicit_context",
            kind: "message",
            T: Z9
        }
    ]), pkd = x.makeMessageType("aiserver.v1.SwGetEnvironmentInfoRequest", []), a6o = x.makeMessageType("aiserver.v1.SwGetEnvironmentInfoResponse", ()=>[
        {
            no: 1,
            name: "environment_info",
            kind: "message",
            T: xbr
        }
    ]), mkd = x.makeMessageType("aiserver.v1.SwGetLinterErrorsRequest", ()=>[
        {
            no: 1,
            name: "absolute_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), l6o = x.makeMessageType("aiserver.v1.SwGetLinterErrorsResponse", ()=>[
        {
            no: 1,
            name: "linter_errors",
            kind: "message",
            T: ZF,
            repeated: !0
        }
    ]), gkd = x.makeMessageType("aiserver.v1.SwGetMcpToolsRequest", ()=>[
        {
            no: 1,
            name: "browser_integration_preference",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), c6o = x.makeMessageType("aiserver.v1.SwGetMcpToolsResponse", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: $_t,
            repeated: !0
        }
    ]), fkd = x.makeMessageType("aiserver.v1.SwCallClientSideV2ToolRequest", ()=>[
        {
            no: 1,
            name: "tool_call",
            kind: "message",
            T: Gke
        },
        {
            no: 2,
            name: "composer_id",
            kind: "scalar",
            T: 9
        }
    ]), QSr = x.makeMessageType("aiserver.v1.SwCallClientSideV2ToolResponse", ()=>[
        {
            no: 1,
            name: "tool_result",
            kind: "message",
            T: B3
        }
    ]), u6o = x.makeMessageType("aiserver.v1.SwCompileRepoIncludeExcludePatternsRequest", ()=>[
        {
            no: 1,
            name: "include_pattern",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "exclude_pattern",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "path_encryption_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "repository_info",
            kind: "message",
            T: Cx
        }
    ]), JSr = x.makeMessageType("aiserver.v1.SwCompileRepoIncludeExcludePatternsResponse", ()=>[
        {
            no: 1,
            name: "glob_filter",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "not_glob_filter",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), vkd = x.makeMessageType("aiserver.v1.SwProvideTemporaryAccessTokenRequest", ()=>[
        {
            no: 1,
            name: "access_token",
            kind: "scalar",
            T: 9
        }
    ]), d6o = x.makeMessageType("aiserver.v1.SwProvideTemporaryAccessTokenResponse", []), _kd = x.makeMessageType("aiserver.v1.ShadowHealthCheckRequest", []), h6o = x.makeMessageType("aiserver.v1.ShadowHealthCheckResponse", []), bkd = x.makeMessageType("aiserver.v1.SwSyncIndexRequest", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: Cx
        },
        {
            no: 2,
            name: "path_encryption_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "indexing_progress_threshold",
            kind: "scalar",
            T: 1,
            opt: !0
        }
    ]), p6o = x.makeMessageType("aiserver.v1.SwSyncIndexResponse", []), ykd = x.makeMessageType("aiserver.v1.GetLintsForChangeRequest", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: Skd,
            repeated: !0
        },
        {
            no: 2,
            name: "include_quick_fixes",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "do_not_use_in_prod_new_files_should_be_temporarily_created_for_increased_accuracy",
            kind: "scalar",
            T: 8
        }
    ]), Skd = x.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "initial_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "final_content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "get_all_lints_not_just_delta_lints_for_ranges_in_final_model",
            kind: "message",
            T: kkd,
            opt: !0
        }
    ], {
    localName: "GetLintsForChangeRequest_File"
}), kkd = x.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File.RangeCollection", ()=>[
        {
            no: 1,
            name: "ranges",
            kind: "message",
            T: wkd,
            repeated: !0
        }
    ], {
    localName: "GetLintsForChangeRequest_File_RangeCollection"
}), wkd = x.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File.IRange", ()=>[
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
    ], {
    localName: "GetLintsForChangeRequest_File_IRange"
}), Lmn = x.makeMessageType("aiserver.v1.GetLintsForChangeResponse", ()=>[
        {
            no: 1,
            name: "lints",
            kind: "message",
            T: m6o,
            repeated: !0
        }
    ]), m6o = x.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "severity",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "start_line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "start_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "end_line_number_inclusive_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 7,
            name: "end_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 9,
            name: "quick_fixes",
            kind: "message",
            T: g6o,
            repeated: !0
        }
    ], {
    localName: "GetLintsForChangeResponse_Lint"
}), g6o = x.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix", ()=>[
        {
            no: 1,
            name: "message",
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
            name: "is_preferred",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "edits",
            kind: "message",
            T: f6o,
            repeated: !0
        }
    ], {
    localName: "GetLintsForChangeResponse_Lint_QuickFix"
}), f6o = x.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix.Edit", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_line_number_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "start_column_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "end_line_number_inclusive_one_indexed",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "end_column_one_indexed",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "GetLintsForChangeResponse_Lint_QuickFix_Edit"
});

}
