import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage130, __protoMessage3127, CloudAgentRequestScope, CloudAgentPersonalScope;
export { CloudAgentPersonalScope, CloudAgentRequestScope, __protoMessage3127, __protoPackage130 };
var __wakaru_init_cloud_agent_scope_pb_initialized = false;
export function init_cloud_agent_scope_pb() {
if (__wakaru_init_cloud_agent_scope_pb_initialized) return;
__wakaru_init_cloud_agent_scope_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage130 = "aiserver.v1.";
__protoMessage3127 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage130;
    }
};
CloudAgentRequestScope = class _CloudAgentRequestScope extends __protoMessage3127 {
    constructor(data){
        super();
        this.scope = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CloudAgentRequestScope().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CloudAgentRequestScope().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CloudAgentRequestScope().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CloudAgentRequestScope, a, b2);
    }
    static $() {
        return [
            "CloudAgentRequestScope|1 personal #0 scope|2 team_id 5 scope",
            CloudAgentPersonalScope
        ];
    }
};
CloudAgentPersonalScope = class _CloudAgentPersonalScope extends __protoMessage3127 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CloudAgentPersonalScope().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CloudAgentPersonalScope().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CloudAgentPersonalScope().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CloudAgentPersonalScope, a, b2);
    }
    static $() {
        return [
            "CloudAgentPersonalScope"
        ];
    }
};

}
