import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage62, __protoMessage362, PiTruncation;
export { PiTruncation, __protoMessage362, __protoPackage62 };
var __wakaru_init_pi_common_pb_initialized = false;
export function init_pi_common_pb() {
if (__wakaru_init_pi_common_pb_initialized) return;
__wakaru_init_pi_common_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage62 = "agent.v1.";
__protoMessage362 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage62;
    }
};
PiTruncation = class _PiTruncation extends __protoMessage362 {
    constructor(data){
        super();
        this.truncated = false;
        this.truncatedBy = "";
        this.totalLines = 0;
        this.outputLines = 0;
        this.outputBytes = 0;
        this.firstLineExceedsLimit = false;
        this.lastLinePartial = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiTruncation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiTruncation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiTruncation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiTruncation, a, b2);
    }
    static $() {
        return [
            "PiTruncation|1 truncated 8|2 truncated_by 9|3 total_lines 13|4 output_lines 13|5 output_bytes 13|6 max_lines 13?|7 max_bytes 13?|8 first_line_exceeds_limit 8|9 last_line_partial 8"
        ];
    }
};

}
