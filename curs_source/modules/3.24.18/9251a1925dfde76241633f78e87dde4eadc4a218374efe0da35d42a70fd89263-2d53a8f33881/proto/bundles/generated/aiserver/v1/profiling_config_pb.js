import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage157, __protoMessage3150, HeapProfileConfig, CpuProfileConfig, ProfileConfig, ProfileScheduleConfig, ProfileScheduleConfig_ScheduleConfig, ProfilingConfig;
export { CpuProfileConfig, HeapProfileConfig, ProfileConfig, ProfileScheduleConfig, ProfileScheduleConfig_ScheduleConfig, ProfilingConfig, __protoMessage3150, __protoPackage157 };
var __wakaru_init_profiling_config_pb_initialized = false;
export function init_profiling_config_pb() {
if (__wakaru_init_profiling_config_pb_initialized) return;
__wakaru_init_profiling_config_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage157 = "aiserver.v1.";
__protoMessage3150 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage157;
    }
};
HeapProfileConfig = class _HeapProfileConfig extends __protoMessage3150 {
    constructor(data){
        super();
        this.samplingInterval = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _HeapProfileConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _HeapProfileConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _HeapProfileConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_HeapProfileConfig, a, b2);
    }
    static $() {
        return [
            "HeapProfileConfig|1 sampling_interval 5|2 include_objects_collected_by_major_gc 8?|3 include_objects_collected_by_minor_gc 8?"
        ];
    }
};
CpuProfileConfig = class _CpuProfileConfig extends __protoMessage3150 {
    constructor(data){
        super();
        this.interval = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CpuProfileConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CpuProfileConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CpuProfileConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CpuProfileConfig, a, b2);
    }
    static $() {
        return [
            "CpuProfileConfig|1 interval 5"
        ];
    }
};
ProfileConfig = class _ProfileConfig extends __protoMessage3150 {
    constructor(data){
        super();
        this.id = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ProfileConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ProfileConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ProfileConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ProfileConfig, a, b2);
    }
    static $() {
        return [
            "ProfileConfig|1 id 9|2 heap #0?|3 cpu #1?",
            HeapProfileConfig,
            CpuProfileConfig
        ];
    }
};
ProfileScheduleConfig = class _ProfileScheduleConfig extends __protoMessage3150 {
    constructor(data){
        super();
        this.id = "";
        this.process = "";
        this.configId = "";
        this.activityTimeout = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ProfileScheduleConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ProfileScheduleConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ProfileScheduleConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ProfileScheduleConfig, a, b2);
    }
    static $() {
        return [
            "ProfileScheduleConfig|1 id 9|2 process 9|3 config_id 9|4 schedule #0|5 activity_timeout 5",
            ProfileScheduleConfig_ScheduleConfig
        ];
    }
};
ProfileScheduleConfig_ScheduleConfig = class _ProfileScheduleConfig_ScheduleConfig extends __protoMessage3150 {
    constructor(data){
        super();
        this.interval = 0;
        this.duration = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ProfileScheduleConfig_ScheduleConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ProfileScheduleConfig_ScheduleConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ProfileScheduleConfig_ScheduleConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ProfileScheduleConfig_ScheduleConfig, a, b2);
    }
    static $() {
        return [
            "ProfileScheduleConfig.ScheduleConfig|1 interval 5|2 duration 5"
        ];
    }
};
ProfilingConfig = class _ProfilingConfig extends __protoMessage3150 {
    constructor(data){
        super();
        this.enabled = false;
        this.configs = [];
        this.schedules = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ProfilingConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ProfilingConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ProfilingConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ProfilingConfig, a, b2);
    }
    static $() {
        return [
            "ProfilingConfig|1 enabled 8|2 configs #0*|3 schedules #1*",
            ProfileConfig,
            ProfileScheduleConfig
        ];
    }
};

}
