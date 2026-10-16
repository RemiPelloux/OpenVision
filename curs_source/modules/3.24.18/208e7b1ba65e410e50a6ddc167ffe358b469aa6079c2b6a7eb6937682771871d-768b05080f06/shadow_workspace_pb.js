import { ew } from "./diagnostics_exec_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { zc } from "./repository_pb.js";
import { Zy } from "./tools_pb.js";
import { h } from "./tslib.es6.js";
import { lr } from "./utils_pb_2.js";
var tde, nde, rde, sde;
export { nde, rde, sde, tde };
var __wakaru_yKe_initialized = false;
export function yKe() {
if (__wakaru_yKe_initialized) return;
__wakaru_yKe_initialized = true;
"use strict";
h(), F(), ew(), lr(), Zy(), zc(), tde = c.makeMessageType("aiserver.v1.GetLintsForChangeResponse", ()=>[
        {
            no: 1,
            name: "lints",
            kind: "message",
            T: nde,
            repeated: !0
        }
    ]), nde = c.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint", ()=>[
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
            T: rde,
            repeated: !0
        }
    ], {
    localName: "GetLintsForChangeResponse_Lint"
}), rde = c.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix", ()=>[
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
            T: sde,
            repeated: !0
        }
    ], {
    localName: "GetLintsForChangeResponse_Lint_QuickFix"
}), sde = c.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix.Edit", ()=>[
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
