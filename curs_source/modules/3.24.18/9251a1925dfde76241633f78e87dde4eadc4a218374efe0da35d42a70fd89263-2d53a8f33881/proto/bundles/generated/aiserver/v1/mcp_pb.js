import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage107, __protoMessage3105, McpOAuthStoredData, McpOAuthStoredClientInfo;
export { McpOAuthStoredClientInfo, McpOAuthStoredData, __protoMessage3105, __protoPackage107 };
var __wakaru_init_mcp_pb2_initialized = false;
export function init_mcp_pb2() {
if (__wakaru_init_mcp_pb2_initialized) return;
__wakaru_init_mcp_pb2_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage107 = "aiserver.v1.";
__protoMessage3105 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage107;
    }
};
McpOAuthStoredData = class _McpOAuthStoredData extends __protoMessage3105 {
    constructor(data){
        super();
        this.clientId = "";
        this.redirectUris = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpOAuthStoredData().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpOAuthStoredData().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpOAuthStoredData().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpOAuthStoredData, a, b2);
    }
    static $() {
        return [
            "McpOAuthStoredData|1 refresh_token 9?|2 client_id 9|3 client_secret 9?|4 redirect_uris 9*|5 access_token 9?"
        ];
    }
};
McpOAuthStoredClientInfo = class _McpOAuthStoredClientInfo extends __protoMessage3105 {
    constructor(data){
        super();
        this.clientId = "";
        this.redirectUris = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpOAuthStoredClientInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpOAuthStoredClientInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpOAuthStoredClientInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpOAuthStoredClientInfo, a, b2);
    }
    static $() {
        return [
            "McpOAuthStoredClientInfo|1 client_id 9|2 client_secret 9?|3 redirect_uris 9*"
        ];
    }
};

}
