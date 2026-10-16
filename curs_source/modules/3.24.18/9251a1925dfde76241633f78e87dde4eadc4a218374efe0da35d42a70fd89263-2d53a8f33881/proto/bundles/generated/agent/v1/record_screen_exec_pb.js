import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage36, __protoMessage336, RecordingMode, RequestedFilePathRejectedReason, RecordScreenArgs, RecordScreenResult, RecordScreenStartSuccess, RecordScreenSaveSuccess, RecordScreenDiscardSuccess, RecordScreenFailure;
export { RecordScreenArgs, RecordScreenDiscardSuccess, RecordScreenFailure, RecordScreenResult, RecordScreenSaveSuccess, RecordScreenStartSuccess, RecordingMode, RequestedFilePathRejectedReason, __protoMessage336, __protoPackage36 };
var __wakaru_init_record_screen_exec_pb_initialized = false;
export function init_record_screen_exec_pb() {
if (__wakaru_init_record_screen_exec_pb_initialized) return;
__wakaru_init_record_screen_exec_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage36 = "agent.v1.";
__protoMessage336 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage36;
    }
};
RecordingMode = enumType2(proto3, __protoPackage36, "RecordingMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "START_RECORDING"
    ],
    [
        2,
        "SAVE_RECORDING"
    ],
    [
        3,
        "DISCARD_RECORDING"
    ]
], 1);
RequestedFilePathRejectedReason = enumType2(proto3, __protoPackage36, "RequestedFilePathRejectedReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SLASHES_NOT_ALLOWED"
    ]
], 1);
RecordScreenArgs = class _RecordScreenArgs extends __protoMessage336 {
    constructor(data){
        super();
        this.mode = RecordingMode.UNSPECIFIED;
        this.toolCallId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordScreenArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordScreenArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordScreenArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordScreenArgs, a, b2);
    }
    static $() {
        return [
            "RecordScreenArgs|1 mode #0|2 tool_call_id 9|3 save_as_filename 9?",
            RecordingMode
        ];
    }
};
RecordScreenResult = class _RecordScreenResult extends __protoMessage336 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordScreenResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordScreenResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordScreenResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordScreenResult, a, b2);
    }
    static $() {
        return [
            "RecordScreenResult|1 start_success #0 result|2 save_success #1 result|3 discard_success #2 result|4 failure #3 result",
            RecordScreenStartSuccess,
            RecordScreenSaveSuccess,
            RecordScreenDiscardSuccess,
            RecordScreenFailure
        ];
    }
};
RecordScreenStartSuccess = class _RecordScreenStartSuccess extends __protoMessage336 {
    constructor(data){
        super();
        this.wasPriorRecordingCancelled = false;
        this.wasSaveAsFilenameIgnored = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordScreenStartSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordScreenStartSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordScreenStartSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordScreenStartSuccess, a, b2);
    }
    static $() {
        return [
            "RecordScreenStartSuccess|1 was_prior_recording_cancelled 8|2 was_save_as_filename_ignored 8"
        ];
    }
};
RecordScreenSaveSuccess = class _RecordScreenSaveSuccess extends __protoMessage336 {
    constructor(data){
        super();
        this.path = "";
        this.recordingDurationMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordScreenSaveSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordScreenSaveSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordScreenSaveSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordScreenSaveSuccess, a, b2);
    }
    static $() {
        return [
            "RecordScreenSaveSuccess|1 path 9|2 recording_duration_ms 3|3 requested_file_path_rejected_reason #0?",
            RequestedFilePathRejectedReason
        ];
    }
};
RecordScreenDiscardSuccess = class _RecordScreenDiscardSuccess extends __protoMessage336 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordScreenDiscardSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordScreenDiscardSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordScreenDiscardSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordScreenDiscardSuccess, a, b2);
    }
    static $() {
        return [
            "RecordScreenDiscardSuccess"
        ];
    }
};
RecordScreenFailure = class _RecordScreenFailure extends __protoMessage336 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordScreenFailure().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordScreenFailure().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordScreenFailure().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordScreenFailure, a, b2);
    }
    static $() {
        return [
            "RecordScreenFailure|1 error 9"
        ];
    }
};

}
