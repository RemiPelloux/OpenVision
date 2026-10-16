import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage156, __protoMessage3149, BugConfigResponse, BugConfigResponse_LinterStrategyV1, BugConfigResponse_LinterStrategyV2, BugConfigResponse_BugBotV1;
export { BugConfigResponse, BugConfigResponse_BugBotV1, BugConfigResponse_LinterStrategyV1, BugConfigResponse_LinterStrategyV2, __protoMessage3149, __protoPackage156 };
var __wakaru_init_review_pb_initialized = false;
export function init_review_pb() {
if (__wakaru_init_review_pb_initialized) return;
__wakaru_init_review_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage156 = "aiserver.v1.";
__protoMessage3149 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage156;
    }
};
BugConfigResponse = class _BugConfigResponse extends __protoMessage3149 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BugConfigResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BugConfigResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BugConfigResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BugConfigResponse, a, b2);
    }
    static $() {
        return [
            "BugConfigResponse|1 linter_strategy_v1 #0|2 bug_bot_v1 #1|3 linter_strategy_v2 #2",
            BugConfigResponse_LinterStrategyV1,
            BugConfigResponse_BugBotV1,
            BugConfigResponse_LinterStrategyV2
        ];
    }
};
BugConfigResponse_LinterStrategyV1 = class _BugConfigResponse_LinterStrategyV1 extends __protoMessage3149 {
    constructor(data){
        super();
        this.enabled = false;
        this.tryTriggerOnSave = false;
        this.waitBetweenTriggersMs = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BugConfigResponse_LinterStrategyV1().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BugConfigResponse_LinterStrategyV1().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BugConfigResponse_LinterStrategyV1().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BugConfigResponse_LinterStrategyV1, a, b2);
    }
    static $() {
        return [
            "BugConfigResponse.LinterStrategyV1|1 enabled 8|2 try_trigger_on_save 8|3 wait_between_triggers_ms 1"
        ];
    }
};
BugConfigResponse_LinterStrategyV2 = class _BugConfigResponse_LinterStrategyV2 extends __protoMessage3149 {
    constructor(data){
        super();
        this.enabled = false;
        this.waitBetweenTriggersMs = 0;
        this.debounceTriggersMs = 0;
        this.keepLinesAroundChunk = 0;
        this.preventTriggeringForFilesWithThisManyLines = 0;
        this.preventTriggeringWhenLints = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BugConfigResponse_LinterStrategyV2().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BugConfigResponse_LinterStrategyV2().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BugConfigResponse_LinterStrategyV2().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BugConfigResponse_LinterStrategyV2, a, b2);
    }
    static $() {
        return [
            "BugConfigResponse.LinterStrategyV2|1 enabled 8|2 wait_between_triggers_ms 1|3 debounce_triggers_ms 1|4 keep_lines_around_chunk 5|5 prevent_triggering_for_files_with_this_many_lines 5|6 prevent_triggering_when_lints 8"
        ];
    }
};
BugConfigResponse_BugBotV1 = class _BugConfigResponse_BugBotV1 extends __protoMessage3149 {
    constructor(data){
        super();
        this.enabled = false;
        this.isSubsidized = false;
        this.backgroundCallFrequencyMs = 0;
        this.killSwitch = false;
        this.showIntrusiveNotificationOnlyIfLastTimeWasMoreThanMsAgo = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BugConfigResponse_BugBotV1().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BugConfigResponse_BugBotV1().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BugConfigResponse_BugBotV1().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BugConfigResponse_BugBotV1, a, b2);
    }
    static $() {
        return [
            "BugConfigResponse.BugBotV1|1 enabled 8|2 is_subsidized 8|3 background_call_frequency_ms 5|4 kill_switch 8|5 show_intrusive_notification_only_if_last_time_was_more_than_ms_ago 1|6 background_diff_absolute_max_tokens 5?|7 background_diff_min_min_token_threshold 5?|8 background_diff_min_max_token_threshold 5?|9 background_diff_last_commit_less_than_this_many_ms_ago 1?|15 background_unified_context_lines 5?|16 background_diff_include_uncommitted 8?|10 default_diff_context_lines 5?|11 diff_absolute_max_tokens 5?|12 custom_instructions_max_char_length 5?|13 default_fallback_iterations 5?|14 threshold_for_expensive_run_modal_cents 5?|17 cheap_model_name 9?|18 cheap_absolute_max_tokens 5?|19 expensive_absolute_max_tokens 5?"
        ];
    }
};

}
