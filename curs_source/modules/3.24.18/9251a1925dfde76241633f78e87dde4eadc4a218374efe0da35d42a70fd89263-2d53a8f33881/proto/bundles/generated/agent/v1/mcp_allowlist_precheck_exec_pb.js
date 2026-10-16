import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage92, __protoMessage391, McpAllowlistPrecheckArgs, McpAllowlistPrecheckResult;
export { McpAllowlistPrecheckArgs, McpAllowlistPrecheckResult, __protoMessage391, __protoPackage92 };
var __wakaru_init_mcp_allowlist_precheck_exec_pb_initialized = false;
export function init_mcp_allowlist_precheck_exec_pb() {
if (__wakaru_init_mcp_allowlist_precheck_exec_pb_initialized) return;
__wakaru_init_mcp_allowlist_precheck_exec_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage92 = "agent.v1.";
__protoMessage391 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage92;
    }
};
McpAllowlistPrecheckArgs = class _McpAllowlistPrecheckArgs extends __protoMessage391 {
    constructor(data){
        super();
        this.providerIdentifier = "";
        this.toolName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpAllowlistPrecheckArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpAllowlistPrecheckArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpAllowlistPrecheckArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpAllowlistPrecheckArgs, a, b2);
    }
    static $() {
        return [
            "McpAllowlistPrecheckArgs|1 provider_identifier 9|2 tool_name 9|3 tool_call_id 9?|4 annotations_json 9?"
        ];
    }
};
McpAllowlistPrecheckResult = class _McpAllowlistPrecheckResult extends __protoMessage391 {
    constructor(data){
        super();
        this.allowlisted = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpAllowlistPrecheckResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpAllowlistPrecheckResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpAllowlistPrecheckResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpAllowlistPrecheckResult, a, b2);
    }
    static $() {
        return [
            "McpAllowlistPrecheckResult|1 allowlisted 8"
        ];
    }
};

}
