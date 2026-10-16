require.r(exports);
require.d(exports, {
    BugfixResultItem: ()=>BugfixResultItem,
    BugfixVerdict: ()=>BugfixVerdict,
    ReportBugfixResultsArgs: ()=>ReportBugfixResultsArgs,
    ReportBugfixResultsError: ()=>ReportBugfixResultsError,
    ReportBugfixResultsResult: ()=>ReportBugfixResultsResult,
    ReportBugfixResultsSuccess: ()=>ReportBugfixResultsSuccess,
    ReportBugfixResultsToolCall: ()=>ReportBugfixResultsToolCall
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const BugfixVerdict = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.BugfixVerdict", [
    {
        no: 0,
        name: "BUGFIX_VERDICT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUGFIX_VERDICT_FIXED",
        localName: "FIXED"
    },
    {
        no: 2,
        name: "BUGFIX_VERDICT_FALSE_POSITIVE",
        localName: "FALSE_POSITIVE"
    },
    {
        no: 3,
        name: "BUGFIX_VERDICT_COULD_NOT_FIX",
        localName: "COULD_NOT_FIX"
    },
    {
        no: 4,
        name: "BUGFIX_VERDICT_RESOLVED_BY_OTHER_FIX",
        localName: "RESOLVED_BY_OTHER_FIX"
    }
]);
const BugfixResultItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BugfixResultItem", ()=>[
        {
            no: 1,
            name: "bug_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bug_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "verdict",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BugfixVerdict)
        },
        {
            no: 4,
            name: "explanation",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "severity",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ReportBugfixResultsArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReportBugfixResultsArgs", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "results",
            kind: "message",
            T: BugfixResultItem,
            repeated: true
        }
    ]);
const ReportBugfixResultsSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReportBugfixResultsSuccess", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: BugfixResultItem,
            repeated: true
        }
    ]);
const ReportBugfixResultsError = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReportBugfixResultsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
const ReportBugfixResultsResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReportBugfixResultsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReportBugfixResultsSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: ReportBugfixResultsError,
            oneof: "result"
        }
    ]);
const ReportBugfixResultsToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReportBugfixResultsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReportBugfixResultsArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReportBugfixResultsResult
        }
    ]);
