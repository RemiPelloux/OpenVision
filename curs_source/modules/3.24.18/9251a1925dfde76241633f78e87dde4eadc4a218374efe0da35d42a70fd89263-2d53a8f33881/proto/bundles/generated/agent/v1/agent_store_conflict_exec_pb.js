import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage101, __protoMessage3100, AgentStoreConflictCursor, AgentStoreConflictArgs, AgentStoreConflictEvent, AgentStoreConflictResult, AgentStoreConflictSuccess, AgentStoreConflictError;
export { AgentStoreConflictArgs, AgentStoreConflictCursor, AgentStoreConflictError, AgentStoreConflictEvent, AgentStoreConflictResult, AgentStoreConflictSuccess, __protoMessage3100, __protoPackage101 };
var __wakaru_init_agent_store_conflict_exec_pb_initialized = false;
export function init_agent_store_conflict_exec_pb() {
if (__wakaru_init_agent_store_conflict_exec_pb_initialized) return;
__wakaru_init_agent_store_conflict_exec_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage101 = "agent.v1.";
__protoMessage3100 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage101;
    }
};
AgentStoreConflictCursor = class _AgentStoreConflictCursor extends __protoMessage3100 {
    constructor(data){
        super();
        this.journalEpoch = "";
        this.seq = protoInt64.zero;
        this.lastEventId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreConflictCursor().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreConflictCursor().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreConflictCursor().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreConflictCursor, a, b2);
    }
    static $() {
        return [
            "AgentStoreConflictCursor|1 journal_epoch 9|2 seq 4|3 last_event_id 9"
        ];
    }
};
AgentStoreConflictArgs = class _AgentStoreConflictArgs extends __protoMessage3100 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreConflictArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreConflictArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreConflictArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreConflictArgs, a, b2);
    }
    static $() {
        return [
            "AgentStoreConflictArgs|1 cursor #0?|2 advance 8?|3 include_quota_notices 8?",
            AgentStoreConflictCursor
        ];
    }
};
AgentStoreConflictEvent = class _AgentStoreConflictEvent extends __protoMessage3100 {
    constructor(data){
        super();
        this.v = 0;
        this.eventId = "";
        this.journalEpoch = "";
        this.seq = protoInt64.zero;
        this.tsMs = protoInt64.zero;
        this.kind = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreConflictEvent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreConflictEvent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreConflictEvent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreConflictEvent, a, b2);
    }
    static $() {
        return [
            "AgentStoreConflictEvent|1 v 13|2 event_id 9|3 journal_epoch 9|4 seq 4|5 ts_ms 4|6 kind 9|7 store_id 9?|8 original_rel_path 9?|9 conflict_rel_path 9?|10 original_abs_path 9?|11 conflict_abs_path 9?|12 preserved_bytes 4?|13 scope_kind 9?|14 limit_bytes 4?|15 usage_bytes 4?"
        ];
    }
};
AgentStoreConflictResult = class _AgentStoreConflictResult extends __protoMessage3100 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreConflictResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreConflictResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreConflictResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreConflictResult, a, b2);
    }
    static $() {
        return [
            "AgentStoreConflictResult|1 success #0 result|2 error #1 result",
            AgentStoreConflictSuccess,
            AgentStoreConflictError
        ];
    }
};
AgentStoreConflictSuccess = class _AgentStoreConflictSuccess extends __protoMessage3100 {
    constructor(data){
        super();
        this.events = [];
        this.gap = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreConflictSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreConflictSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreConflictSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreConflictSuccess, a, b2);
    }
    static $() {
        return [
            "AgentStoreConflictSuccess|1 events #0*|2 next_cursor #1|3 gap 8",
            AgentStoreConflictEvent,
            AgentStoreConflictCursor
        ];
    }
};
AgentStoreConflictError = class _AgentStoreConflictError extends __protoMessage3100 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentStoreConflictError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentStoreConflictError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentStoreConflictError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentStoreConflictError, a, b2);
    }
    static $() {
        return [
            "AgentStoreConflictError|1 error 9"
        ];
    }
};

}
