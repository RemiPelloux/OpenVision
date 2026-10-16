import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage4, __protoMessage34, HookAdditionalContext;
export { HookAdditionalContext, __protoMessage34, __protoPackage4 };
var __wakaru_init_hook_additional_context_pb_initialized = false;
export function init_hook_additional_context_pb() {
if (__wakaru_init_hook_additional_context_pb_initialized) return;
__wakaru_init_hook_additional_context_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage4 = "agent.v1.";
__protoMessage34 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage4;
    }
};
HookAdditionalContext = class _HookAdditionalContext extends __protoMessage34 {
    constructor(data){
        super();
        this.hookEventName = "";
        this.content = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _HookAdditionalContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _HookAdditionalContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _HookAdditionalContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_HookAdditionalContext, a, b2);
    }
    static $() {
        return [
            "HookAdditionalContext|1 hook_event_name 9|2 content 9"
        ];
    }
};

}
