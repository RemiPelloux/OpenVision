"use strict";
require.d(exports, {
    I0: ()=>u,
    Is: ()=>m,
    Or: ()=>a,
    U_: ()=>d,
    gd: ()=>o
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
        super(), this.name = "", this.providerIdentifier = "", this.toolName = "", this.description = "", n.proto3.util.initPartial(t, this);
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
            "McpToolDefinition|1 name 9|4 provider_identifier 9|5 tool_name 9|2 description 9|3 input_schema #0|6 input_schema_json 9?|7 output_schema_json 9?|8 annotations_json 9?|9 meta_json 9?",
            n.Value
        ];
    }
}
class a extends i {
    constructor(t){
        super(), this.mcpTools = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(a, t, e);
    }
    static $() {
        return [
            "McpTools|1 mcp_tools #0*",
            o
        ];
    }
}
class u extends i {
    constructor(t){
        super(), this.serverName = "", this.instructions = "", this.serverIdentifier = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(u, t, e);
    }
    static $() {
        return [
            "McpInstructions|1 server_name 9|2 instructions 9|3 server_identifier 9"
        ];
    }
}
class c extends i {
    constructor(t){
        super(), this.serverName = "", this.serverIdentifier = "", this.tools = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(c, t, e);
    }
    static $() {
        return [
            "McpDescriptor|1 server_name 9|2 server_identifier 9|3 folder_path 9?|4 server_use_instructions 9?|5 tools #0*|7 plugin 9?|8 marketplace 9?|9 plugin_db_id 9?|10 marketplace_id 9?",
            l
        ];
    }
}
class l extends i {
    constructor(t){
        super(), this.toolName = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new l).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new l).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new l).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(l, t, e);
    }
    static $() {
        return [
            "McpToolDescriptor|1 tool_name 9|2 definition_path 9?|3 description 9?|4 input_schema #0?|5 input_schema_json 9?|6 annotations_json 9?",
            n.Value
        ];
    }
}
class m extends i {
    constructor(t){
        super(), this.enabled = !1, this.workspaceProjectDir = "", this.mcpDescriptors = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new m).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new m).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new m).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(m, t, e);
    }
    static $() {
        return [
            "McpFileSystemOptions|1 enabled 8|2 workspace_project_dir 9|3 mcp_descriptors #0*",
            c
        ];
    }
}
class d extends i {
    constructor(t){
        super(), this.enabled = !1, this.mcpDescriptors = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new d).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new d).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new d).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(d, t, e);
    }
    static $() {
        return [
            "McpMetaToolOptions|1 enabled 8|2 mcp_descriptors #0*",
            c
        ];
    }
}
