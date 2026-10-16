require.r(exports);
require.d(exports, {
    EditFate: ()=>EditFate,
    FastApplySource: ()=>FastApplySource,
    ReportEditFateRequest: ()=>ReportEditFateRequest,
    ReportEditFateResponse: ()=>ReportEditFateResponse,
    WarmApplyRequest: ()=>WarmApplyRequest,
    WarmApplyResponse: ()=>WarmApplyResponse
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-55.js");
var _chat_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-150.js");
const EditFate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.EditFate", [
    {
        no: 0,
        name: "EDIT_FATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EDIT_FATE_ACCEPTED",
        localName: "ACCEPTED"
    },
    {
        no: 2,
        name: "EDIT_FATE_REJECTED",
        localName: "REJECTED"
    },
    {
        no: 3,
        name: "EDIT_FATE_PARTIALLY_ACCEPTED",
        localName: "PARTIALLY_ACCEPTED"
    }
]);
const FastApplySource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.FastApplySource", [
    {
        no: 0,
        name: "FAST_APPLY_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FAST_APPLY_SOURCE_COMPOSER",
        localName: "COMPOSER"
    },
    {
        no: 2,
        name: "FAST_APPLY_SOURCE_CLICKED_APPLY",
        localName: "CLICKED_APPLY"
    },
    {
        no: 3,
        name: "FAST_APPLY_SOURCE_CACHED_APPLY",
        localName: "CACHED_APPLY"
    },
    {
        no: 4,
        name: "FAST_APPLY_SOURCE_COMPOSER_AGENT",
        localName: "COMPOSER_AGENT"
    }
]);
const ReportEditFateRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReportEditFateRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "fate",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(EditFate),
            opt: true
        },
        {
            no: 3,
            name: "num_accepted_partial_diffs",
            kind: "scalar",
            T: 5,
            opt: true
        },
        {
            no: 4,
            name: "num_rejected_partial_diffs",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const ReportEditFateResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.ReportEditFateResponse", []);
const WarmApplyRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WarmApplyRequest", ()=>[
        {
            no: 2,
            name: "current_file",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.CurrentFileInfo
        },
        {
            no: 3,
            name: "conversation",
            kind: "message",
            T: _chat_pb_js__WEBPACK_IMPORTED_MODULE_2__.ConversationMessage,
            repeated: true
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: _utils_pb_js__WEBPACK_IMPORTED_MODULE_1__.ExplicitContext
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FastApplySource)
        },
        {
            no: 6,
            name: "willing_to_pay_extra_for_speed",
            kind: "scalar",
            T: 8
        }
    ]);
const WarmApplyResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.WarmApplyResponse", []);
