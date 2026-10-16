import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage3, __protoMessage33, Range2, Position, OutputLocation, SmartModeApproval;
export { OutputLocation, Position, Range2, SmartModeApproval, __protoMessage33, __protoPackage3 };
var __wakaru_init_utils_pb_initialized = false;
export function init_utils_pb() {
if (__wakaru_init_utils_pb_initialized) return;
__wakaru_init_utils_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage3 = "agent.v1.";
__protoMessage33 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage3;
    }
};
Range2 = class _Range extends __protoMessage33 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Range().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Range().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Range().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Range, a, b2);
    }
    static $() {
        return [
            "Range|1 start #0|2 end #0",
            Position
        ];
    }
};
Position = class _Position extends __protoMessage33 {
    constructor(data){
        super();
        this.line = 0;
        this.column = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Position().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Position().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Position().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Position, a, b2);
    }
    static $() {
        return [
            "Position|1 line 13|2 column 13"
        ];
    }
};
OutputLocation = class _OutputLocation extends __protoMessage33 {
    constructor(data){
        super();
        this.filePath = "";
        this.sizeBytes = protoInt64.zero;
        this.lineCount = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OutputLocation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OutputLocation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OutputLocation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OutputLocation, a, b2);
    }
    static $() {
        return [
            "OutputLocation|1 file_path 9|2 size_bytes 3|3 line_count 3"
        ];
    }
};
SmartModeApproval = class _SmartModeApproval extends __protoMessage33 {
    constructor(data){
        super();
        this.requestId = "";
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SmartModeApproval().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SmartModeApproval().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SmartModeApproval().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SmartModeApproval, a, b2);
    }
    static $() {
        return [
            "SmartModeApproval|1 request_id 9|2 reason 9"
        ];
    }
};

}
