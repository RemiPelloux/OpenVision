import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage154, __protoMessage3147, RemoteAgentHostFrame, RemoteAgentHostFrame_Kind;
export { RemoteAgentHostFrame, RemoteAgentHostFrame_Kind, __protoMessage3147, __protoPackage154 };
var __wakaru_init_remote_agent_host_tunnel_pb_initialized = false;
export function init_remote_agent_host_tunnel_pb() {
if (__wakaru_init_remote_agent_host_tunnel_pb_initialized) return;
__wakaru_init_remote_agent_host_tunnel_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage154 = "aiserver.v1.";
__protoMessage3147 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage154;
    }
};
RemoteAgentHostFrame = class _RemoteAgentHostFrame extends __protoMessage3147 {
    constructor(data){
        super();
        this.id = "";
        this.method = "";
        this.data = new Uint8Array(0);
        this.kind = RemoteAgentHostFrame_Kind.UNSPECIFIED;
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoteAgentHostFrame().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoteAgentHostFrame().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoteAgentHostFrame().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoteAgentHostFrame, a, b2);
    }
    static $() {
        return [
            "RemoteAgentHostFrame|1 id 9|2 method 9|3 data 12|4 kind #0|5 error 9",
            RemoteAgentHostFrame_Kind
        ];
    }
};
RemoteAgentHostFrame_Kind = enumType2(proto3, __protoPackage154, "RemoteAgentHostFrame.Kind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REQUEST"
    ],
    [
        2,
        "RESPONSE"
    ],
    [
        3,
        "ERROR"
    ]
], 1);

}
