import { Myt, nDn, y4e } from "./diagnostics_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { nX, w1 } from "./repository_pb.js";
import { Kue, ql, xR, zZe } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { AJ, OO, hu, oN, zSi } from "./utils_pb.js";
var ODu, Sjs, FDu, kjs, BDu, wjs, UDu, Cjs, $Du, Tjs, HDu, Ejs, WDu, xjs, GDu, pUi, Ijs, mUi, VDu, Ajs, jDu, Rjs, qDu, Djs, zDu, KDu, YDu, XDu, u$t, Mjs, Pjs, Ljs;
export { $Du, Ajs, BDu, Cjs, Djs, Ejs, FDu, GDu, HDu, Ijs, KDu, Ljs, Mjs, ODu, Pjs, Rjs, Sjs, Tjs, UDu, VDu, WDu, XDu, YDu, jDu, kjs, mUi, pUi, qDu, u$t, wjs, xjs, zDu };
var __wakaru_d$t_initialized = false;
export function d$t() {
if (__wakaru_d$t_initialized) return;
__wakaru_d$t_initialized = true;
"use strict";
x(), bi(), Myt(), hu(), ql(), nX(), ODu = k.makeMessageType("aiserver.v1.SwTrackModelRequest", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        }
    ]), Sjs = k.makeMessageType("aiserver.v1.SwTrackModelResponse", []), FDu = k.makeMessageType("aiserver.v1.SwCallDiagnosticsExecutorRequest", ()=>[
        {
            no: 1,
            name: "diagnostics_args",
            kind: "message",
            T: nDn
        }
    ]), kjs = k.makeMessageType("aiserver.v1.SwCallDiagnosticsExecutorResponse", ()=>[
        {
            no: 1,
            name: "diagnostics_result",
            kind: "message",
            T: y4e
        }
    ]), BDu = k.makeMessageType("aiserver.v1.SwWriteTextFileWithLintsRequest", ()=>[
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
    ]), wjs = k.makeMessageType("aiserver.v1.SwWriteTextFileWithLintsResponse", ()=>[
        {
            no: 1,
            name: "new_linter_errors",
            kind: "message",
            T: AJ,
            repeated: !0
        }
    ]), UDu = k.makeMessageType("aiserver.v1.SwGetExplicitContextRequest", []), Cjs = k.makeMessageType("aiserver.v1.SwGetExplicitContextResponse", ()=>[
        {
            no: 1,
            name: "explicit_context",
            kind: "message",
            T: OO
        }
    ]), $Du = k.makeMessageType("aiserver.v1.SwGetEnvironmentInfoRequest", []), Tjs = k.makeMessageType("aiserver.v1.SwGetEnvironmentInfoResponse", ()=>[
        {
            no: 1,
            name: "environment_info",
            kind: "message",
            T: zSi
        }
    ]), HDu = k.makeMessageType("aiserver.v1.SwGetLinterErrorsRequest", ()=>[
        {
            no: 1,
            name: "absolute_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Ejs = k.makeMessageType("aiserver.v1.SwGetLinterErrorsResponse", ()=>[
        {
            no: 1,
            name: "linter_errors",
            kind: "message",
            T: oN,
            repeated: !0
        }
    ]), WDu = k.makeMessageType("aiserver.v1.SwGetMcpToolsRequest", ()=>[
        {
            no: 1,
            name: "browser_integration_preference",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), xjs = k.makeMessageType("aiserver.v1.SwGetMcpToolsResponse", ()=>[
        {
            no: 1,
            name: "tools",
            kind: "message",
            T: zZe,
            repeated: !0
        }
    ]), GDu = k.makeMessageType("aiserver.v1.SwCallClientSideV2ToolRequest", ()=>[
        {
            no: 1,
            name: "tool_call",
            kind: "message",
            T: Kue
        },
        {
            no: 2,
            name: "composer_id",
            kind: "scalar",
            T: 9
        }
    ]), pUi = k.makeMessageType("aiserver.v1.SwCallClientSideV2ToolResponse", ()=>[
        {
            no: 1,
            name: "tool_result",
            kind: "message",
            T: xR
        }
    ]), Ijs = k.makeMessageType("aiserver.v1.SwCompileRepoIncludeExcludePatternsRequest", ()=>[
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
            T: w1
        }
    ]), mUi = k.makeMessageType("aiserver.v1.SwCompileRepoIncludeExcludePatternsResponse", ()=>[
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
    ]), VDu = k.makeMessageType("aiserver.v1.SwProvideTemporaryAccessTokenRequest", ()=>[
        {
            no: 1,
            name: "access_token",
            kind: "scalar",
            T: 9
        }
    ]), Ajs = k.makeMessageType("aiserver.v1.SwProvideTemporaryAccessTokenResponse", []), jDu = k.makeMessageType("aiserver.v1.ShadowHealthCheckRequest", []), Rjs = k.makeMessageType("aiserver.v1.ShadowHealthCheckResponse", []), qDu = k.makeMessageType("aiserver.v1.SwSyncIndexRequest", ()=>[
        {
            no: 1,
            name: "repository_info",
            kind: "message",
            T: w1
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
    ]), Djs = k.makeMessageType("aiserver.v1.SwSyncIndexResponse", []), zDu = k.makeMessageType("aiserver.v1.GetLintsForChangeRequest", ()=>[
        {
            no: 1,
            name: "files",
            kind: "message",
            T: KDu,
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
    ]), KDu = k.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File", ()=>[
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
            T: YDu,
            opt: !0
        }
    ], {
    localName: "GetLintsForChangeRequest_File"
}), YDu = k.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File.RangeCollection", ()=>[
        {
            no: 1,
            name: "ranges",
            kind: "message",
            T: XDu,
            repeated: !0
        }
    ], {
    localName: "GetLintsForChangeRequest_File_RangeCollection"
}), XDu = k.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File.IRange", ()=>[
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
}), u$t = k.makeMessageType("aiserver.v1.GetLintsForChangeResponse", ()=>[
        {
            no: 1,
            name: "lints",
            kind: "message",
            T: Mjs,
            repeated: !0
        }
    ]), Mjs = k.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint", ()=>[
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
            T: Pjs,
            repeated: !0
        }
    ], {
    localName: "GetLintsForChangeResponse_Lint"
}), Pjs = k.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix", ()=>[
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
            T: Ljs,
            repeated: !0
        }
    ], {
    localName: "GetLintsForChangeResponse_Lint_QuickFix"
}), Ljs = k.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix.Edit", ()=>[
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
