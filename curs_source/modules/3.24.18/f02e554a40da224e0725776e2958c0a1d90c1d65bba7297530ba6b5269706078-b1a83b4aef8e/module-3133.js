"use strict";
require.d(exports, {
    N: ()=>o
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class o extends i {
    constructor(t){
        super(), this.fullPath = "", this.content = "", this.description = "", this.environments = [], this.disabledEnvironments = [], this.disableModelInvocation = !1, this.globs = [], this.scopedTo = [], this.argumentHint = "", this.disableUserInvocation = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new o).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new o).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new o).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(o, t, e);
    }
    static $() {
        return [
            "AgentSkill|1 full_path 9|2 content 9|3 description 9|4 parse_error 9?|5 environments 9*|6 disabled_environments 9*|7 git_remote_origin 9?|8 disable_model_invocation 8|9 plugin 9?|10 marketplace 9?|11 plugin_id 9?|12 marketplace_id 9?|13 globs 9*|14 scoped_to 9*|15 argument_hint 9|16 disable_user_invocation 8"
        ];
    }
}
