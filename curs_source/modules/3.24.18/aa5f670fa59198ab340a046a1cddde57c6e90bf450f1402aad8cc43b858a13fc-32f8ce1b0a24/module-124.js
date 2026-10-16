require.r(exports);
require.d(exports, {
    RecordCiInvestigationFinding: ()=>RecordCiInvestigationFinding,
    RecordCiInvestigationFindingsArgs: ()=>RecordCiInvestigationFindingsArgs,
    RecordCiInvestigationFindingsError: ()=>RecordCiInvestigationFindingsError,
    RecordCiInvestigationFindingsResult: ()=>RecordCiInvestigationFindingsResult,
    RecordCiInvestigationFindingsSuccess: ()=>RecordCiInvestigationFindingsSuccess,
    RecordCiInvestigationFindingsToolCall: ()=>RecordCiInvestigationFindingsToolCall,
    RecordCiInvestigationOverall: ()=>RecordCiInvestigationOverall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const RecordCiInvestigationFinding = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordCiInvestigationFinding", ()=>[
        {
            no: 1,
            name: "check_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "details_url",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "tldr",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "root_cause",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "failing_signal",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "suggested_next_step",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "diff_relation",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "diff_relation_evidence",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 9,
            name: "flake_assessment",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "flake_evidence",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "rerun_available",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "rerun_evidence",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "recommended_action",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 14,
            name: "recommended_action_evidence",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 15,
            name: "confidence",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RecordCiInvestigationOverall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordCiInvestigationOverall", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "themes",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 3,
            name: "recommended_action",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "recommended_action_evidence",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "check_keys",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const RecordCiInvestigationFindingsArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordCiInvestigationFindingsArgs", ()=>[
        {
            no: 1,
            name: "findings",
            kind: "message",
            T: RecordCiInvestigationFinding,
            repeated: true
        },
        {
            no: 2,
            name: "overall",
            kind: "message",
            T: RecordCiInvestigationOverall,
            opt: true
        },
        {
            no: 3,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        }
    ]);
const RecordCiInvestigationFindingsSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordCiInvestigationFindingsSuccess", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);
const RecordCiInvestigationFindingsError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordCiInvestigationFindingsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const RecordCiInvestigationFindingsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordCiInvestigationFindingsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: RecordCiInvestigationFindingsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: RecordCiInvestigationFindingsError,
            oneof: "result"
        }
    ]);
const RecordCiInvestigationFindingsToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordCiInvestigationFindingsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: RecordCiInvestigationFindingsArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: RecordCiInvestigationFindingsResult
        }
    ]);
