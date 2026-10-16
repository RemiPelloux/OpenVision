import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage81, __protoMessage380, SystemPromptSpec;
export { SystemPromptSpec, __protoMessage380, __protoPackage81 };
var __wakaru_init_system_prompt_pb_initialized = false;
export function init_system_prompt_pb() {
if (__wakaru_init_system_prompt_pb_initialized) return;
__wakaru_init_system_prompt_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage81 = "agent.v1.";
__protoMessage380 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage81;
    }
};
SystemPromptSpec = class _SystemPromptSpec extends __protoMessage380 {
    constructor(data){
        super();
        this.spec = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SystemPromptSpec().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SystemPromptSpec().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SystemPromptSpec().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SystemPromptSpec, a, b2);
    }
    static $() {
        return [
            "SystemPromptSpec|1 replace 9 spec|2 append 9 spec"
        ];
    }
};

}
