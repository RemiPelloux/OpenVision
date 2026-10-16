import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage80, __protoMessage379, AgentSkill, AgentSkillMetadata;
export { AgentSkill, AgentSkillMetadata, __protoMessage379, __protoPackage80 };
var __wakaru_init_agent_skills_pb_initialized = false;
export function init_agent_skills_pb() {
if (__wakaru_init_agent_skills_pb_initialized) return;
__wakaru_init_agent_skills_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage80 = "agent.v1.";
__protoMessage379 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage80;
    }
};
AgentSkill = class _AgentSkill extends __protoMessage379 {
    constructor(data){
        super();
        this.fullPath = "";
        this.content = "";
        this.description = "";
        this.environments = [];
        this.disabledEnvironments = [];
        this.disableModelInvocation = false;
        this.globs = [];
        this.scopedTo = [];
        this.argumentHint = "";
        this.disableUserInvocation = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentSkill().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentSkill().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentSkill().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentSkill, a, b2);
    }
    static $() {
        return [
            "AgentSkill|1 full_path 9|2 content 9|3 description 9|4 parse_error 9?|5 environments 9*|6 disabled_environments 9*|7 git_remote_origin 9?|8 disable_model_invocation 8|9 plugin 9?|10 marketplace 9?|11 plugin_id 9?|12 marketplace_id 9?|13 globs 9*|14 scoped_to 9*|15 argument_hint 9|16 disable_user_invocation 8"
        ];
    }
};
AgentSkillMetadata = class _AgentSkillMetadata extends __protoMessage379 {
    constructor(data){
        super();
        this.fullPath = "";
        this.description = "";
        this.environments = [];
        this.disabledEnvironments = [];
        this.disableModelInvocation = false;
        this.globs = [];
        this.scopedTo = [];
        this.argumentHint = "";
        this.disableUserInvocation = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentSkillMetadata().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentSkillMetadata().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentSkillMetadata().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentSkillMetadata, a, b2);
    }
    static $() {
        return [
            "AgentSkillMetadata|1 full_path 9|2 description 9|3 parse_error 9?|4 environments 9*|5 disabled_environments 9*|6 git_remote_origin 9?|7 disable_model_invocation 8|8 plugin 9?|9 marketplace 9?|10 plugin_id 9?|11 marketplace_id 9?|12 globs 9*|13 scoped_to 9*|14 argument_hint 9|15 disable_user_invocation 8"
        ];
    }
};

}
