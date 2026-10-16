import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage161, __protoMessage3154, ClientRepoIdentifier, GithubRepoIdentifier;
export { ClientRepoIdentifier, GithubRepoIdentifier, __protoMessage3154, __protoPackage161 };
var __wakaru_init_origin_common_pb_initialized = false;
export function init_origin_common_pb() {
if (__wakaru_init_origin_common_pb_initialized) return;
__wakaru_init_origin_common_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage161 = "origin.v1.";
__protoMessage3154 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage161;
    }
};
ClientRepoIdentifier = class _ClientRepoIdentifier extends __protoMessage3154 {
    constructor(data){
        super();
        this.org = "";
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ClientRepoIdentifier().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ClientRepoIdentifier().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ClientRepoIdentifier().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ClientRepoIdentifier, a, b2);
    }
    static $() {
        return [
            "ClientRepoIdentifier|1 org 9|2 name 9"
        ];
    }
};
GithubRepoIdentifier = class _GithubRepoIdentifier extends __protoMessage3154 {
    constructor(data){
        super();
        this.owner = "";
        this.repo = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GithubRepoIdentifier().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GithubRepoIdentifier().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GithubRepoIdentifier().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GithubRepoIdentifier, a, b2);
    }
    static $() {
        return [
            "GithubRepoIdentifier|1 owner 9|2 repo 9|3 enterprise_id 9?"
        ];
    }
};

}
