import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage198, __protoMessage3189, AgentHostAgentStoreExtraEnvArgs, AgentHostAgentStoreExtraEnvResult, AgentHostAgentStoreSkillRootsArgs, AgentHostAgentStoreSkillRootsResult, AgentHostAgentStoreApplySubagentMountsArgs, AgentHostAgentStoreApplySubagentMountsResult, AgentHostAgentStoreClearSubagentMountsArgs, AgentHostAgentStoreClearSubagentMountsResult, AgentHostAgentStoreFlushSubagentArgs, AgentHostAgentStoreFlushSubagentResult, AgentHostAgentStoreScopePathsArgs, AgentHostAgentStoreScopeDescriptor, AgentHostAgentStoreScopeUnavailable, AgentHostAgentStoreScopePathsResult, AgentHostAgentStoreConflictNoticeEvent, AgentHostAgentStoreConflictNoticeSyncAndPeekArgs, AgentHostAgentStoreConflictNoticePeekArgs, AgentHostAgentStoreConflictNoticeAckArgs, AgentHostAgentStoreConflictNoticeReleaseArgs, AgentHostAgentStoreConflictNoticeNoteDeferredArgs, AgentHostAgentStoreConflictNoticeCompleted, AgentHostAgentStoreConflictNoticeTimedOut, AgentHostAgentStoreConflictNoticeFailed, AgentHostAgentStoreConflictNoticeEmpty, AgentHostAgentStoreConflictNoticeCount, AgentHostAgentStoreConflictNoticeResult;
export { AgentHostAgentStoreApplySubagentMountsArgs, AgentHostAgentStoreApplySubagentMountsResult, AgentHostAgentStoreClearSubagentMountsArgs, AgentHostAgentStoreClearSubagentMountsResult, AgentHostAgentStoreConflictNoticeAckArgs, AgentHostAgentStoreConflictNoticeCompleted, AgentHostAgentStoreConflictNoticeCount, AgentHostAgentStoreConflictNoticeEmpty, AgentHostAgentStoreConflictNoticeEvent, AgentHostAgentStoreConflictNoticeFailed, AgentHostAgentStoreConflictNoticeNoteDeferredArgs, AgentHostAgentStoreConflictNoticePeekArgs, AgentHostAgentStoreConflictNoticeReleaseArgs, AgentHostAgentStoreConflictNoticeResult, AgentHostAgentStoreConflictNoticeSyncAndPeekArgs, AgentHostAgentStoreConflictNoticeTimedOut, AgentHostAgentStoreExtraEnvArgs, AgentHostAgentStoreExtraEnvResult, AgentHostAgentStoreFlushSubagentArgs, AgentHostAgentStoreFlushSubagentResult, AgentHostAgentStoreScopeDescriptor, AgentHostAgentStoreScopePathsArgs, AgentHostAgentStoreScopePathsResult, AgentHostAgentStoreScopeUnavailable, AgentHostAgentStoreSkillRootsArgs, AgentHostAgentStoreSkillRootsResult, __protoMessage3189, __protoPackage198 };
var __wakaru_init_agent_host_agent_store_pb_initialized = false;
export function init_agent_host_agent_store_pb() {
if (__wakaru_init_agent_host_agent_store_pb_initialized) return;
__wakaru_init_agent_host_agent_store_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage198 = "agent.v1.";
__protoMessage3189 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage198;
    }
};
AgentHostAgentStoreExtraEnvArgs = class _AgentHostAgentStoreExtraEnvArgs extends __protoMessage3189 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreExtraEnvArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreExtraEnvArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreExtraEnvArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreExtraEnvArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreExtraEnvArgs|1 session_id 9|2 conversation_id 9?"
        ];
    }
};
AgentHostAgentStoreExtraEnvResult = class _AgentHostAgentStoreExtraEnvResult extends __protoMessage3189 {
    constructor(data){
        super();
        this.env = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreExtraEnvResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreExtraEnvResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreExtraEnvResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreExtraEnvResult, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreExtraEnvResult|1 env 9,9"
        ];
    }
};
AgentHostAgentStoreSkillRootsArgs = class _AgentHostAgentStoreSkillRootsArgs extends __protoMessage3189 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreSkillRootsArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreSkillRootsArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreSkillRootsArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreSkillRootsArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreSkillRootsArgs"
        ];
    }
};
AgentHostAgentStoreSkillRootsResult = class _AgentHostAgentStoreSkillRootsResult extends __protoMessage3189 {
    constructor(data){
        super();
        this.skillDirs = [];
        this.userHomeDirectory = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreSkillRootsResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreSkillRootsResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreSkillRootsResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreSkillRootsResult, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreSkillRootsResult|1 skill_dirs 9*|2 user_home_directory 9"
        ];
    }
};
AgentHostAgentStoreApplySubagentMountsArgs = class _AgentHostAgentStoreApplySubagentMountsArgs extends __protoMessage3189 {
    constructor(data){
        super();
        this.parentConversationId = "";
        this.childConversationId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreApplySubagentMountsArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreApplySubagentMountsArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreApplySubagentMountsArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreApplySubagentMountsArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreApplySubagentMountsArgs|1 parent_conversation_id 9|2 child_conversation_id 9|3 register_local_shell_mounts 8?"
        ];
    }
};
AgentHostAgentStoreApplySubagentMountsResult = class _AgentHostAgentStoreApplySubagentMountsResult extends __protoMessage3189 {
    constructor(data){
        super();
        this.applied = false;
        this.inheritedSourceIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreApplySubagentMountsResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreApplySubagentMountsResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreApplySubagentMountsResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreApplySubagentMountsResult, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreApplySubagentMountsResult|1 applied 8|2 inherited_source_ids 9*"
        ];
    }
};
AgentHostAgentStoreClearSubagentMountsArgs = class _AgentHostAgentStoreClearSubagentMountsArgs extends __protoMessage3189 {
    constructor(data){
        super();
        this.childConversationId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreClearSubagentMountsArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreClearSubagentMountsArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreClearSubagentMountsArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreClearSubagentMountsArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreClearSubagentMountsArgs|1 child_conversation_id 9"
        ];
    }
};
AgentHostAgentStoreClearSubagentMountsResult = class _AgentHostAgentStoreClearSubagentMountsResult extends __protoMessage3189 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreClearSubagentMountsResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreClearSubagentMountsResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreClearSubagentMountsResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreClearSubagentMountsResult, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreClearSubagentMountsResult"
        ];
    }
};
AgentHostAgentStoreFlushSubagentArgs = class _AgentHostAgentStoreFlushSubagentArgs extends __protoMessage3189 {
    constructor(data){
        super();
        this.agentIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreFlushSubagentArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreFlushSubagentArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreFlushSubagentArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreFlushSubagentArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreFlushSubagentArgs|1 agent_ids 9*"
        ];
    }
};
AgentHostAgentStoreFlushSubagentResult = class _AgentHostAgentStoreFlushSubagentResult extends __protoMessage3189 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreFlushSubagentResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreFlushSubagentResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreFlushSubagentResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreFlushSubagentResult, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreFlushSubagentResult"
        ];
    }
};
AgentHostAgentStoreScopePathsArgs = class _AgentHostAgentStoreScopePathsArgs extends __protoMessage3189 {
    constructor(data){
        super();
        this.agentId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreScopePathsArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreScopePathsArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreScopePathsArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreScopePathsArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreScopePathsArgs|1 agent_id 9|2 mount 9?|3 sync_agent_path 9?|4 is_project_store 8?"
        ];
    }
};
AgentHostAgentStoreScopeDescriptor = class _AgentHostAgentStoreScopeDescriptor extends __protoMessage3189 {
    constructor(data){
        super();
        this.scope = "";
        this.path = "";
        this.rootLinkPolicy = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreScopeDescriptor().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreScopeDescriptor().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreScopeDescriptor().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreScopeDescriptor, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreScopeDescriptor|1 scope 9|2 path 9|3 root_link_policy 9"
        ];
    }
};
AgentHostAgentStoreScopeUnavailable = class _AgentHostAgentStoreScopeUnavailable extends __protoMessage3189 {
    constructor(data){
        super();
        this.scope = "";
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreScopeUnavailable().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreScopeUnavailable().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreScopeUnavailable().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreScopeUnavailable, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreScopeUnavailable|1 scope 9|2 reason 9"
        ];
    }
};
AgentHostAgentStoreScopePathsResult = class _AgentHostAgentStoreScopePathsResult extends __protoMessage3189 {
    constructor(data){
        super();
        this.scopes = [];
        this.unavailableScopes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreScopePathsResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreScopePathsResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreScopePathsResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreScopePathsResult, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreScopePathsResult|1 scopes #0*|2 unavailable_scopes #1*",
            AgentHostAgentStoreScopeDescriptor,
            AgentHostAgentStoreScopeUnavailable
        ];
    }
};
AgentHostAgentStoreConflictNoticeEvent = class _AgentHostAgentStoreConflictNoticeEvent extends __protoMessage3189 {
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
        return new _AgentHostAgentStoreConflictNoticeEvent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticeEvent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticeEvent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticeEvent, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticeEvent|1 v 13|2 event_id 9|3 journal_epoch 9|4 seq 4|5 ts_ms 4|6 kind 9|7 store_id 9?|8 original_rel_path 9?|9 conflict_rel_path 9?|10 original_abs_path 9?|11 conflict_abs_path 9?|12 preserved_bytes 4?|13 scope_kind 9?|14 limit_bytes 4?|15 usage_bytes 4?|16 source 9?|17 remote_only 8?"
        ];
    }
};
AgentHostAgentStoreConflictNoticeSyncAndPeekArgs = class _AgentHostAgentStoreConflictNoticeSyncAndPeekArgs extends __protoMessage3189 {
    constructor(data){
        super();
        this.writtenPaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreConflictNoticeSyncAndPeekArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticeSyncAndPeekArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticeSyncAndPeekArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticeSyncAndPeekArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticeSyncAndPeekArgs|1 conversation_id 9?|2 written_paths 9*|3 timeout_ms 13?|4 eager 8?"
        ];
    }
};
AgentHostAgentStoreConflictNoticePeekArgs = class _AgentHostAgentStoreConflictNoticePeekArgs extends __protoMessage3189 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreConflictNoticePeekArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticePeekArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticePeekArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticePeekArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticePeekArgs|1 conversation_id 9?"
        ];
    }
};
AgentHostAgentStoreConflictNoticeAckArgs = class _AgentHostAgentStoreConflictNoticeAckArgs extends __protoMessage3189 {
    constructor(data){
        super();
        this.eventIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreConflictNoticeAckArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticeAckArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticeAckArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticeAckArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticeAckArgs|1 event_ids 9*|2 conversation_id 9?"
        ];
    }
};
AgentHostAgentStoreConflictNoticeReleaseArgs = class _AgentHostAgentStoreConflictNoticeReleaseArgs extends __protoMessage3189 {
    constructor(data){
        super();
        this.eventIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreConflictNoticeReleaseArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticeReleaseArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticeReleaseArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticeReleaseArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticeReleaseArgs|1 event_ids 9*|2 conversation_id 9?"
        ];
    }
};
AgentHostAgentStoreConflictNoticeNoteDeferredArgs = class _AgentHostAgentStoreConflictNoticeNoteDeferredArgs extends __protoMessage3189 {
    constructor(data){
        super();
        this.writtenPaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreConflictNoticeNoteDeferredArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticeNoteDeferredArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticeNoteDeferredArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticeNoteDeferredArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticeNoteDeferredArgs|1 conversation_id 9?|2 written_paths 9*"
        ];
    }
};
AgentHostAgentStoreConflictNoticeCompleted = class _AgentHostAgentStoreConflictNoticeCompleted extends __protoMessage3189 {
    constructor(data){
        super();
        this.events = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreConflictNoticeCompleted().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticeCompleted().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticeCompleted().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticeCompleted, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticeCompleted|1 events #0*|2 reminder 9?|3 gap 8?",
            AgentHostAgentStoreConflictNoticeEvent
        ];
    }
};
AgentHostAgentStoreConflictNoticeTimedOut = class _AgentHostAgentStoreConflictNoticeTimedOut extends __protoMessage3189 {
    constructor(data){
        super();
        this.events = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreConflictNoticeTimedOut().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticeTimedOut().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticeTimedOut().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticeTimedOut, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticeTimedOut|1 events #0*|2 reminder 9?",
            AgentHostAgentStoreConflictNoticeEvent
        ];
    }
};
AgentHostAgentStoreConflictNoticeFailed = class _AgentHostAgentStoreConflictNoticeFailed extends __protoMessage3189 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreConflictNoticeFailed().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticeFailed().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticeFailed().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticeFailed, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticeFailed|1 error 9"
        ];
    }
};
AgentHostAgentStoreConflictNoticeEmpty = class _AgentHostAgentStoreConflictNoticeEmpty extends __protoMessage3189 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreConflictNoticeEmpty().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticeEmpty().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticeEmpty().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticeEmpty, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticeEmpty"
        ];
    }
};
AgentHostAgentStoreConflictNoticeCount = class _AgentHostAgentStoreConflictNoticeCount extends __protoMessage3189 {
    constructor(data){
        super();
        this.count = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreConflictNoticeCount().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticeCount().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticeCount().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticeCount, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticeCount|1 count 13"
        ];
    }
};
AgentHostAgentStoreConflictNoticeResult = class _AgentHostAgentStoreConflictNoticeResult extends __protoMessage3189 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostAgentStoreConflictNoticeResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostAgentStoreConflictNoticeResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostAgentStoreConflictNoticeResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostAgentStoreConflictNoticeResult, a, b2);
    }
    static $() {
        return [
            "AgentHostAgentStoreConflictNoticeResult|1 completed #0 result|2 not_applicable #1 result|3 mount_passive #1 result|4 timed_out #2 result|5 failed #3 result|6 acked #4 result|7 released #4 result|8 noted #4 result",
            AgentHostAgentStoreConflictNoticeCompleted,
            AgentHostAgentStoreConflictNoticeEmpty,
            AgentHostAgentStoreConflictNoticeTimedOut,
            AgentHostAgentStoreConflictNoticeFailed,
            AgentHostAgentStoreConflictNoticeCount
        ];
    }
};

}
