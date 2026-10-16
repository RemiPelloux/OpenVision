import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage109, __protoMessage3107, RemoteControlV2AdminSettings, RemoteControlV2Policy, RemoteControlV2UserSettings;
export { RemoteControlV2AdminSettings, RemoteControlV2Policy, RemoteControlV2UserSettings, __protoMessage3107, __protoPackage109 };
var __wakaru_init_remote_control_settings_pb_initialized = false;
export function init_remote_control_settings_pb() {
if (__wakaru_init_remote_control_settings_pb_initialized) return;
__wakaru_init_remote_control_settings_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage109 = "aiserver.v1.";
__protoMessage3107 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage109;
    }
};
RemoteControlV2AdminSettings = class _RemoteControlV2AdminSettings extends __protoMessage3107 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoteControlV2AdminSettings().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoteControlV2AdminSettings().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoteControlV2AdminSettings().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoteControlV2AdminSettings, a, b2);
    }
    static $() {
        return [
            "RemoteControlV2AdminSettings|1 enabled 8?|2 automatic_registration_enabled 8?"
        ];
    }
};
RemoteControlV2Policy = class _RemoteControlV2Policy extends __protoMessage3107 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoteControlV2Policy().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoteControlV2Policy().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoteControlV2Policy().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoteControlV2Policy, a, b2);
    }
    static $() {
        return [
            "RemoteControlV2Policy|1 enabled 8?|2 automatic_registration_enabled 8?|3 available 8?|4 automatic_registration_released 8?|5 remote_control_denying_org_name 9?|6 automatic_registration_denying_org_name 9?"
        ];
    }
};
RemoteControlV2UserSettings = class _RemoteControlV2UserSettings extends __protoMessage3107 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoteControlV2UserSettings().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoteControlV2UserSettings().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoteControlV2UserSettings().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoteControlV2UserSettings, a, b2);
    }
    static $() {
        return [
            "RemoteControlV2UserSettings|2 automatic_registration_enabled 8?"
        ];
    }
};

}
