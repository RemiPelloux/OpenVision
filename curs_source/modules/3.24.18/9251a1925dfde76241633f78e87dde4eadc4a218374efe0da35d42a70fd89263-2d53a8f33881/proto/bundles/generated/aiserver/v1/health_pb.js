import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage151, __protoMessage3144, HealthEmptyRequest, HealthRequest, HealthResponse;
export { HealthEmptyRequest, HealthRequest, HealthResponse, __protoMessage3144, __protoPackage151 };
var __wakaru_init_health_pb_initialized = false;
export function init_health_pb() {
if (__wakaru_init_health_pb_initialized) return;
__wakaru_init_health_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage151 = "aiserver.v1.";
__protoMessage3144 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage151;
    }
};
HealthEmptyRequest = class _HealthEmptyRequest extends __protoMessage3144 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _HealthEmptyRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _HealthEmptyRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _HealthEmptyRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_HealthEmptyRequest, a, b2);
    }
    static $() {
        return [
            "HealthEmptyRequest"
        ];
    }
};
HealthRequest = class _HealthRequest extends __protoMessage3144 {
    constructor(data){
        super();
        this.payload = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _HealthRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _HealthRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _HealthRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_HealthRequest, a, b2);
    }
    static $() {
        return [
            "HealthRequest|1 payload 9|2 simulate_error 8?"
        ];
    }
};
HealthResponse = class _HealthResponse extends __protoMessage3144 {
    constructor(data){
        super();
        this.payload = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _HealthResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _HealthResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _HealthResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_HealthResponse, a, b2);
    }
    static $() {
        return [
            "HealthResponse|1 payload 9"
        ];
    }
};

}
