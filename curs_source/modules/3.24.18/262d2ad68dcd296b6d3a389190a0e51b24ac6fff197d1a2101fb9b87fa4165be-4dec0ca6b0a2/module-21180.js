"use strict";
require.d(exports, {
    C: ()=>i
});
var n = require("./module-36038.js"), o = require("./module-8592.js");
class s extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "agent.v1.";
    }
}
class i extends s {
    constructor(e){
        super(), this.hookEventName = "", this.content = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new i).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new i).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new i).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(i, e, t);
    }
    static $() {
        return [
            "HookAdditionalContext|1 hook_event_name 9|2 content 9"
        ];
    }
}
