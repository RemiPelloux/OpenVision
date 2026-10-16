import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage12, __protoMessage312, CursorRuleSource, CursorRuleTypeGlobal, CursorRuleTypeFileGlobs, CursorRuleTypeAgentFetched, CursorRuleTypeManuallyAttached, CursorRuleType, CursorRule;
export { CursorRule, CursorRuleSource, CursorRuleType, CursorRuleTypeAgentFetched, CursorRuleTypeFileGlobs, CursorRuleTypeGlobal, CursorRuleTypeManuallyAttached, __protoMessage312, __protoPackage12 };
var __wakaru_init_cursor_rules_pb_initialized = false;
export function init_cursor_rules_pb() {
if (__wakaru_init_cursor_rules_pb_initialized) return;
__wakaru_init_cursor_rules_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage12 = "agent.v1.";
__protoMessage312 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage12;
    }
};
CursorRuleSource = enumType2(proto3, __protoPackage12, "CursorRuleSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "TEAM"
    ],
    [
        2,
        "USER"
    ]
], 1);
CursorRuleTypeGlobal = class _CursorRuleTypeGlobal extends __protoMessage312 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CursorRuleTypeGlobal().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CursorRuleTypeGlobal().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CursorRuleTypeGlobal().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CursorRuleTypeGlobal, a, b2);
    }
    static $() {
        return [
            "CursorRuleTypeGlobal"
        ];
    }
};
CursorRuleTypeFileGlobs = class _CursorRuleTypeFileGlobs extends __protoMessage312 {
    constructor(data){
        super();
        this.globs = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CursorRuleTypeFileGlobs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CursorRuleTypeFileGlobs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CursorRuleTypeFileGlobs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CursorRuleTypeFileGlobs, a, b2);
    }
    static $() {
        return [
            "CursorRuleTypeFileGlobs|1 globs 9*"
        ];
    }
};
CursorRuleTypeAgentFetched = class _CursorRuleTypeAgentFetched extends __protoMessage312 {
    constructor(data){
        super();
        this.description = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CursorRuleTypeAgentFetched().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CursorRuleTypeAgentFetched().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CursorRuleTypeAgentFetched().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CursorRuleTypeAgentFetched, a, b2);
    }
    static $() {
        return [
            "CursorRuleTypeAgentFetched|1 description 9"
        ];
    }
};
CursorRuleTypeManuallyAttached = class _CursorRuleTypeManuallyAttached extends __protoMessage312 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CursorRuleTypeManuallyAttached().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CursorRuleTypeManuallyAttached().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CursorRuleTypeManuallyAttached().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CursorRuleTypeManuallyAttached, a, b2);
    }
    static $() {
        return [
            "CursorRuleTypeManuallyAttached"
        ];
    }
};
CursorRuleType = class _CursorRuleType extends __protoMessage312 {
    constructor(data){
        super();
        this.type = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CursorRuleType().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CursorRuleType().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CursorRuleType().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CursorRuleType, a, b2);
    }
    static $() {
        return [
            "CursorRuleType|1 global #0 type|2 file_globbed #1 type|3 agent_fetched #2 type|4 manually_attached #3 type",
            CursorRuleTypeGlobal,
            CursorRuleTypeFileGlobs,
            CursorRuleTypeAgentFetched,
            CursorRuleTypeManuallyAttached
        ];
    }
};
CursorRule = class _CursorRule extends __protoMessage312 {
    constructor(data){
        super();
        this.fullPath = "";
        this.content = "";
        this.source = CursorRuleSource.UNSPECIFIED;
        this.environments = [];
        this.disabledEnvironments = [];
        this.scopedTo = [];
        this.frontmatter = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CursorRule().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CursorRule().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CursorRule().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CursorRule, a, b2);
    }
    static $() {
        return [
            "CursorRule|1 full_path 9|2 content 9|3 type #0|4 source #1|5 git_remote_origin 9?|6 parse_error 9?|7 environments 9*|8 disabled_environments 9*|9 plugin 9?|10 marketplace 9?|11 plugin_id 9?|12 marketplace_id 9?|13 scoped_to 9*|14 frontmatter 9|15 is_required 8?",
            CursorRuleType,
            CursorRuleSource
        ];
    }
};

}
