import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage196, __protoMessage3188, AgentWebSocketProtocolVersion, AgentWebSocketConnectCode, AgentWebSocketHello, AgentWebSocketRunIdentity, AgentWebSocketHeader, AgentWebSocketRunStart, AgentWebSocketClientMessage, AgentWebSocketClientHalfClose, AgentWebSocketCancelRun, AgentWebSocketRunAccepted, AgentWebSocketServerMessage, AgentWebSocketConnectErrorDetail, AgentWebSocketConnectError, AgentWebSocketRunEnd, AgentWebSocketRunRejected, AgentWebSocketClientFrame, AgentWebSocketServerFrame;
export { AgentWebSocketCancelRun, AgentWebSocketClientFrame, AgentWebSocketClientHalfClose, AgentWebSocketClientMessage, AgentWebSocketConnectCode, AgentWebSocketConnectError, AgentWebSocketConnectErrorDetail, AgentWebSocketHeader, AgentWebSocketHello, AgentWebSocketProtocolVersion, AgentWebSocketRunAccepted, AgentWebSocketRunEnd, AgentWebSocketRunIdentity, AgentWebSocketRunRejected, AgentWebSocketRunStart, AgentWebSocketServerFrame, AgentWebSocketServerMessage, __protoMessage3188, __protoPackage196 };
var __wakaru_init_agent_websocket_pb_initialized = false;
export function init_agent_websocket_pb() {
if (__wakaru_init_agent_websocket_pb_initialized) return;
__wakaru_init_agent_websocket_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage196 = "agent.v1.";
__protoMessage3188 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage196;
    }
};
AgentWebSocketProtocolVersion = enumType2(proto3, __protoPackage196, "AgentWebSocketProtocolVersion", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "V1"
    ]
], 1);
AgentWebSocketConnectCode = enumType2(proto3, __protoPackage196, "AgentWebSocketConnectCode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CANCELED"
    ],
    [
        2,
        "UNKNOWN"
    ],
    [
        3,
        "INVALID_ARGUMENT"
    ],
    [
        4,
        "DEADLINE_EXCEEDED"
    ],
    [
        5,
        "NOT_FOUND"
    ],
    [
        6,
        "ALREADY_EXISTS"
    ],
    [
        7,
        "PERMISSION_DENIED"
    ],
    [
        8,
        "RESOURCE_EXHAUSTED"
    ],
    [
        9,
        "FAILED_PRECONDITION"
    ],
    [
        10,
        "ABORTED"
    ],
    [
        11,
        "OUT_OF_RANGE"
    ],
    [
        12,
        "UNIMPLEMENTED"
    ],
    [
        13,
        "INTERNAL"
    ],
    [
        14,
        "UNAVAILABLE"
    ],
    [
        15,
        "DATA_LOSS"
    ],
    [
        16,
        "UNAUTHENTICATED"
    ]
], 1);
AgentWebSocketHello = class _AgentWebSocketHello extends __protoMessage3188 {
    constructor(data){
        super();
        this.protocolVersion = AgentWebSocketProtocolVersion.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketHello().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketHello().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketHello().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketHello, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketHello|1 protocol_version #0",
            AgentWebSocketProtocolVersion
        ];
    }
};
AgentWebSocketRunIdentity = class _AgentWebSocketRunIdentity extends __protoMessage3188 {
    constructor(data){
        super();
        this.runId = "";
        this.requestId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketRunIdentity().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketRunIdentity().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketRunIdentity().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketRunIdentity, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketRunIdentity|1 run_id 9|2 request_id 9"
        ];
    }
};
AgentWebSocketHeader = class _AgentWebSocketHeader extends __protoMessage3188 {
    constructor(data){
        super();
        this.name = "";
        this.value = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketHeader().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketHeader().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketHeader().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketHeader, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketHeader|1 name 9|2 value 9"
        ];
    }
};
AgentWebSocketRunStart = class _AgentWebSocketRunStart extends __protoMessage3188 {
    constructor(data){
        super();
        this.headers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketRunStart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketRunStart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketRunStart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketRunStart, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketRunStart|1 identity #0|2 headers #1*",
            AgentWebSocketRunIdentity,
            AgentWebSocketHeader
        ];
    }
};
AgentWebSocketClientMessage = class _AgentWebSocketClientMessage extends __protoMessage3188 {
    constructor(data){
        super();
        this.runId = "";
        this.sequence = protoInt64.zero;
        this.message = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketClientMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketClientMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketClientMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketClientMessage, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketClientMessage|1 run_id 9|2 sequence 4|3 message 12"
        ];
    }
};
AgentWebSocketClientHalfClose = class _AgentWebSocketClientHalfClose extends __protoMessage3188 {
    constructor(data){
        super();
        this.runId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketClientHalfClose().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketClientHalfClose().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketClientHalfClose().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketClientHalfClose, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketClientHalfClose|1 run_id 9"
        ];
    }
};
AgentWebSocketCancelRun = class _AgentWebSocketCancelRun extends __protoMessage3188 {
    constructor(data){
        super();
        this.runId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketCancelRun().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketCancelRun().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketCancelRun().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketCancelRun, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketCancelRun|1 run_id 9"
        ];
    }
};
AgentWebSocketRunAccepted = class _AgentWebSocketRunAccepted extends __protoMessage3188 {
    constructor(data){
        super();
        this.headers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketRunAccepted().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketRunAccepted().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketRunAccepted().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketRunAccepted, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketRunAccepted|1 identity #0|2 headers #1*",
            AgentWebSocketRunIdentity,
            AgentWebSocketHeader
        ];
    }
};
AgentWebSocketServerMessage = class _AgentWebSocketServerMessage extends __protoMessage3188 {
    constructor(data){
        super();
        this.runId = "";
        this.sequence = protoInt64.zero;
        this.message = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketServerMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketServerMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketServerMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketServerMessage, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketServerMessage|1 run_id 9|2 sequence 4|3 message 12"
        ];
    }
};
AgentWebSocketConnectErrorDetail = class _AgentWebSocketConnectErrorDetail extends __protoMessage3188 {
    constructor(data){
        super();
        this.typeName = "";
        this.binaryValue = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketConnectErrorDetail().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketConnectErrorDetail().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketConnectErrorDetail().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketConnectErrorDetail, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketConnectErrorDetail|1 type_name 9|2 binary_value 12"
        ];
    }
};
AgentWebSocketConnectError = class _AgentWebSocketConnectError extends __protoMessage3188 {
    constructor(data){
        super();
        this.code = AgentWebSocketConnectCode.UNSPECIFIED;
        this.rawMessage = "";
        this.metadata = [];
        this.details = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketConnectError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketConnectError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketConnectError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketConnectError, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketConnectError|1 code #0|2 raw_message 9|3 metadata #1*|4 details #2*",
            AgentWebSocketConnectCode,
            AgentWebSocketHeader,
            AgentWebSocketConnectErrorDetail
        ];
    }
};
AgentWebSocketRunEnd = class _AgentWebSocketRunEnd extends __protoMessage3188 {
    constructor(data){
        super();
        this.trailers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketRunEnd().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketRunEnd().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketRunEnd().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketRunEnd, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketRunEnd|1 identity #0|2 trailers #1*|3 error #2?",
            AgentWebSocketRunIdentity,
            AgentWebSocketHeader,
            AgentWebSocketConnectError
        ];
    }
};
AgentWebSocketRunRejected = class _AgentWebSocketRunRejected extends __protoMessage3188 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketRunRejected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketRunRejected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketRunRejected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketRunRejected, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketRunRejected|1 identity #0|2 error #1",
            AgentWebSocketRunIdentity,
            AgentWebSocketConnectError
        ];
    }
};
AgentWebSocketClientFrame = class _AgentWebSocketClientFrame extends __protoMessage3188 {
    constructor(data){
        super();
        this.frame = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketClientFrame().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketClientFrame().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketClientFrame().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketClientFrame, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketClientFrame|1 hello #0 frame|2 run_start #1 frame|3 client_message #2 frame|4 half_close #3 frame|5 cancel_run #4 frame",
            AgentWebSocketHello,
            AgentWebSocketRunStart,
            AgentWebSocketClientMessage,
            AgentWebSocketClientHalfClose,
            AgentWebSocketCancelRun
        ];
    }
};
AgentWebSocketServerFrame = class _AgentWebSocketServerFrame extends __protoMessage3188 {
    constructor(data){
        super();
        this.frame = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentWebSocketServerFrame().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentWebSocketServerFrame().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentWebSocketServerFrame().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentWebSocketServerFrame, a, b2);
    }
    static $() {
        return [
            "AgentWebSocketServerFrame|1 hello #0 frame|2 run_accepted #1 frame|3 server_message #2 frame|4 run_end #3 frame|5 run_rejected #4 frame",
            AgentWebSocketHello,
            AgentWebSocketRunAccepted,
            AgentWebSocketServerMessage,
            AgentWebSocketRunEnd,
            AgentWebSocketRunRejected
        ];
    }
};

}
