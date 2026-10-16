require.r(exports);
require.d(exports, {
    RecordScreenArgs: ()=>RecordScreenArgs,
    RecordScreenDiscardSuccess: ()=>RecordScreenDiscardSuccess,
    RecordScreenFailure: ()=>RecordScreenFailure,
    RecordScreenResult: ()=>RecordScreenResult,
    RecordScreenSaveSuccess: ()=>RecordScreenSaveSuccess,
    RecordScreenStartSuccess: ()=>RecordScreenStartSuccess,
    RecordingMode: ()=>RecordingMode,
    RequestedFilePathRejectedReason: ()=>RequestedFilePathRejectedReason
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const RecordingMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.RecordingMode", [
    {
        no: 0,
        name: "RECORDING_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RECORDING_MODE_START_RECORDING",
        localName: "START_RECORDING"
    },
    {
        no: 2,
        name: "RECORDING_MODE_SAVE_RECORDING",
        localName: "SAVE_RECORDING"
    },
    {
        no: 3,
        name: "RECORDING_MODE_DISCARD_RECORDING",
        localName: "DISCARD_RECORDING"
    }
]);
const RequestedFilePathRejectedReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.RequestedFilePathRejectedReason", [
    {
        no: 0,
        name: "REQUESTED_FILE_PATH_REJECTED_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REQUESTED_FILE_PATH_REJECTED_REASON_SLASHES_NOT_ALLOWED",
        localName: "SLASHES_NOT_ALLOWED"
    }
]);
const RecordScreenArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordScreenArgs", ()=>[
        {
            no: 1,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RecordingMode)
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "save_as_filename",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RecordScreenResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordScreenResult", ()=>[
        {
            no: 1,
            name: "start_success",
            kind: "message",
            T: RecordScreenStartSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "save_success",
            kind: "message",
            T: RecordScreenSaveSuccess,
            oneof: "result"
        },
        {
            no: 3,
            name: "discard_success",
            kind: "message",
            T: RecordScreenDiscardSuccess,
            oneof: "result"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: RecordScreenFailure,
            oneof: "result"
        }
    ]);
const RecordScreenStartSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordScreenStartSuccess", ()=>[
        {
            no: 1,
            name: "was_prior_recording_cancelled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "was_save_as_filename_ignored",
            kind: "scalar",
            T: 8
        }
    ]);
const RecordScreenSaveSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordScreenSaveSuccess", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "recording_duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "requested_file_path_rejected_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RequestedFilePathRejectedReason),
            opt: true
        }
    ]);
const RecordScreenDiscardSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordScreenDiscardSuccess", []);
const RecordScreenFailure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RecordScreenFailure", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);
