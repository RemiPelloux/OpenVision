import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage195, __protoMessage3187, GithubOutageDrillProbeRequest, GithubOutageDrillProbeResponse;
export { GithubOutageDrillProbeRequest, GithubOutageDrillProbeResponse, __protoMessage3187, __protoPackage195 };
var __wakaru_init_github_outage_drill_pb_initialized = false;
export function init_github_outage_drill_pb() {
if (__wakaru_init_github_outage_drill_pb_initialized) return;
__wakaru_init_github_outage_drill_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage195 = "origin.v1.";
__protoMessage3187 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage195;
    }
};
GithubOutageDrillProbeRequest = class _GithubOutageDrillProbeRequest extends __protoMessage3187 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GithubOutageDrillProbeRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GithubOutageDrillProbeRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GithubOutageDrillProbeRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GithubOutageDrillProbeRequest, a, b2);
    }
    static $() {
        return [
            "GithubOutageDrillProbeRequest"
        ];
    }
};
GithubOutageDrillProbeResponse = class _GithubOutageDrillProbeResponse extends __protoMessage3187 {
    constructor(data){
        super();
        this.intercepted = false;
        this.attemptCount = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GithubOutageDrillProbeResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GithubOutageDrillProbeResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GithubOutageDrillProbeResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GithubOutageDrillProbeResponse, a, b2);
    }
    static $() {
        return [
            "GithubOutageDrillProbeResponse|1 intercepted 8|2 attempt_count 13"
        ];
    }
};

}
