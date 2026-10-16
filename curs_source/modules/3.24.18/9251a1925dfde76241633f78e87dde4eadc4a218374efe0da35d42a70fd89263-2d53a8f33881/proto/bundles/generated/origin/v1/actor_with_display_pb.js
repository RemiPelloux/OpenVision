import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage175, __protoMessage3168, ActorWithDisplay;
export { ActorWithDisplay, __protoMessage3168, __protoPackage175 };
var __wakaru_init_actor_with_display_pb_initialized = false;
export function init_actor_with_display_pb() {
if (__wakaru_init_actor_with_display_pb_initialized) return;
__wakaru_init_actor_with_display_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage175 = "origin.v1.";
__protoMessage3168 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage175;
    }
};
ActorWithDisplay = class _ActorWithDisplay extends __protoMessage3168 {
    constructor(data){
        super();
        this.id = "";
        this.kind = "";
        this.displayName = "";
        this.avatarUrl = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ActorWithDisplay().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ActorWithDisplay().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ActorWithDisplay().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ActorWithDisplay, a, b2);
    }
    static $() {
        return [
            "ActorWithDisplay|1 id 9|2 kind 9|3 display_name 9|4 avatar_url 9|5 performed_via #0",
            _ActorWithDisplay
        ];
    }
};

}
