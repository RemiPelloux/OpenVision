import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage93, __protoMessage392, WebFetchAllowlistPrecheckArgs, WebFetchAllowlistPrecheckResult;
export { WebFetchAllowlistPrecheckArgs, WebFetchAllowlistPrecheckResult, __protoMessage392, __protoPackage93 };
var __wakaru_init_web_fetch_allowlist_precheck_exec_pb_initialized = false;
export function init_web_fetch_allowlist_precheck_exec_pb() {
if (__wakaru_init_web_fetch_allowlist_precheck_exec_pb_initialized) return;
__wakaru_init_web_fetch_allowlist_precheck_exec_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage93 = "agent.v1.";
__protoMessage392 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage93;
    }
};
WebFetchAllowlistPrecheckArgs = class _WebFetchAllowlistPrecheckArgs extends __protoMessage392 {
    constructor(data){
        super();
        this.url = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchAllowlistPrecheckArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchAllowlistPrecheckArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchAllowlistPrecheckArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchAllowlistPrecheckArgs, a, b2);
    }
    static $() {
        return [
            "WebFetchAllowlistPrecheckArgs|1 url 9|2 tool_call_id 9?"
        ];
    }
};
WebFetchAllowlistPrecheckResult = class _WebFetchAllowlistPrecheckResult extends __protoMessage392 {
    constructor(data){
        super();
        this.allowlisted = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WebFetchAllowlistPrecheckResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WebFetchAllowlistPrecheckResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WebFetchAllowlistPrecheckResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WebFetchAllowlistPrecheckResult, a, b2);
    }
    static $() {
        return [
            "WebFetchAllowlistPrecheckResult|1 allowlisted 8"
        ];
    }
};

}
