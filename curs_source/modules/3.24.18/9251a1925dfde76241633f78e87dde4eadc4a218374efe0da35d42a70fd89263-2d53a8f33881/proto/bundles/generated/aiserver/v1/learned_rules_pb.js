import { defineOwn } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage119, __protoMessage3116, ListRepoLearnedRulesRequest, ListRepoLearnedRulesResponse, RepoLearnedRule, RemoveRepoLearnedRuleRequest, RemoveRepoLearnedRuleResponse;
export { ListRepoLearnedRulesRequest, ListRepoLearnedRulesResponse, RemoveRepoLearnedRuleRequest, RemoveRepoLearnedRuleResponse, RepoLearnedRule, __protoMessage3116, __protoPackage119 };
var __wakaru_init_learned_rules_pb_initialized = false;
export function init_learned_rules_pb() {
if (__wakaru_init_learned_rules_pb_initialized) return;
__wakaru_init_learned_rules_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage119 = "aiserver.v1.";
__protoMessage3116 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage119;
    }
};
ListRepoLearnedRulesRequest = class _ListRepoLearnedRulesRequest extends __protoMessage3116 {
    constructor(data){
        super();
        this.teamId = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListRepoLearnedRulesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListRepoLearnedRulesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListRepoLearnedRulesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListRepoLearnedRulesRequest, a, b2);
    }
    static $() {
        return [
            "ListRepoLearnedRulesRequest|1 team_id 5"
        ];
    }
};
ListRepoLearnedRulesResponse = class _ListRepoLearnedRulesResponse extends __protoMessage3116 {
    constructor(data){
        super();
        this.enabled = false;
        this.items = [];
        this.truncated = false;
        this.hiddenCount = 0;
        this.live = false;
        this.canEdit = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListRepoLearnedRulesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListRepoLearnedRulesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListRepoLearnedRulesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListRepoLearnedRulesResponse, a, b2);
    }
    static $() {
        return [
            "ListRepoLearnedRulesResponse|1 enabled 8|2 items #0*|3 truncated 8|4 hidden_count 5|5 live 8|6 can_edit 8",
            RepoLearnedRule
        ];
    }
};
RepoLearnedRule = class _RepoLearnedRule extends __protoMessage3116 {
    constructor(data){
        super();
        this.id = "";
        this.repoId = "";
        this.gitRemoteOrigin = "";
        this.title = "";
        this.appliesWhen = "";
        this.content = "";
        this.kind = "";
        this.scopedPaths = [];
        this.status = "";
        this.importance = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoLearnedRule().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoLearnedRule().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoLearnedRule().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoLearnedRule, a, b2);
    }
    static $() {
        return [
            "RepoLearnedRule|1 id 9|2 repo_id 9|3 git_remote_origin 9|4 title 9|5 applies_when 9|6 content 9|7 kind 9|8 item_class 9?|9 scoped_paths 9*|10 status 9|11 importance 5|12 would_promote_at #0|13 archived_at #0|14 archived_reason 9?|15 created_at #0|16 updated_at #0|17 source 9?",
            Timestamp
        ];
    }
};
RemoveRepoLearnedRuleRequest = class _RemoveRepoLearnedRuleRequest extends __protoMessage3116 {
    constructor(data){
        super();
        this.teamId = 0;
        this.id = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoveRepoLearnedRuleRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoveRepoLearnedRuleRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoveRepoLearnedRuleRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoveRepoLearnedRuleRequest, a, b2);
    }
    static $() {
        return [
            "RemoveRepoLearnedRuleRequest|1 team_id 5|2 id 9"
        ];
    }
};
RemoveRepoLearnedRuleResponse = class _RemoveRepoLearnedRuleResponse extends __protoMessage3116 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoveRepoLearnedRuleResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoveRepoLearnedRuleResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoveRepoLearnedRuleResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoveRepoLearnedRuleResponse, a, b2);
    }
    static $() {
        return [
            "RemoveRepoLearnedRuleResponse"
        ];
    }
};

}
