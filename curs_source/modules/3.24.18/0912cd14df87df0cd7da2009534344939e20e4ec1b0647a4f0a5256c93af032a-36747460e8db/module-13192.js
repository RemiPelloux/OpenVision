require.r(exports), require.d(exports, {
    AgentWebSocketCancelRun: ()=>g,
    AgentWebSocketClientFrame: ()=>A,
    AgentWebSocketClientHalfClose: ()=>m,
    AgentWebSocketClientMessage: ()=>f,
    AgentWebSocketConnectCode: ()=>c,
    AgentWebSocketConnectError: ()=>S,
    AgentWebSocketConnectErrorDetail: ()=>b,
    AgentWebSocketHeader: ()=>u,
    AgentWebSocketHello: ()=>l,
    AgentWebSocketProtocolVersion: ()=>a,
    AgentWebSocketRunAccepted: ()=>v,
    AgentWebSocketRunEnd: ()=>k,
    AgentWebSocketRunIdentity: ()=>d,
    AgentWebSocketRunRejected: ()=>y,
    AgentWebSocketRunStart: ()=>h,
    AgentWebSocketServerFrame: ()=>w,
    AgentWebSocketServerMessage: ()=>p
});
var r = require(36038), o = require(8592);
const i = "agent.v1.";
class s extends o.HL {
    static get runtime() {
        return (0, o.kU)(this, "runtime", r.proto3);
    }
    static $p() {
        return i;
    }
}
var a = (0, o.QT)(r.proto3, i, "AgentWebSocketProtocolVersion", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "V1"
    ]
], 1), c = (0, o.QT)(r.proto3, i, "AgentWebSocketConnectCode", [
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
class l extends s {
    constructor(e){
        super(), this.protocolVersion = a.UNSPECIFIED, r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new l).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new l).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new l).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(l, e, t);
    }
    static $() {
        return [
            "AgentWebSocketHello|1 protocol_version #0",
            a
        ];
    }
}
class d extends s {
    constructor(e){
        super(), this.runId = "", this.requestId = "", r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new d).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new d).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new d).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(d, e, t);
    }
    static $() {
        return [
            "AgentWebSocketRunIdentity|1 run_id 9|2 request_id 9"
        ];
    }
}
class u extends s {
    constructor(e){
        super(), this.name = "", this.value = "", r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new u).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new u).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new u).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(u, e, t);
    }
    static $() {
        return [
            "AgentWebSocketHeader|1 name 9|2 value 9"
        ];
    }
}
class h extends s {
    constructor(e){
        super(), this.headers = [], r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new h).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new h).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new h).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(h, e, t);
    }
    static $() {
        return [
            "AgentWebSocketRunStart|1 identity #0|2 headers #1*",
            d,
            u
        ];
    }
}
class f extends s {
    constructor(e){
        super(), this.runId = "", this.sequence = r.protoInt64.zero, this.message = new Uint8Array(0), r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new f).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new f).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new f).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(f, e, t);
    }
    static $() {
        return [
            "AgentWebSocketClientMessage|1 run_id 9|2 sequence 4|3 message 12"
        ];
    }
}
class m extends s {
    constructor(e){
        super(), this.runId = "", r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new m).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new m).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new m).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(m, e, t);
    }
    static $() {
        return [
            "AgentWebSocketClientHalfClose|1 run_id 9"
        ];
    }
}
class g extends s {
    constructor(e){
        super(), this.runId = "", r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new g).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new g).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new g).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(g, e, t);
    }
    static $() {
        return [
            "AgentWebSocketCancelRun|1 run_id 9"
        ];
    }
}
class v extends s {
    constructor(e){
        super(), this.headers = [], r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new v).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new v).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new v).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(v, e, t);
    }
    static $() {
        return [
            "AgentWebSocketRunAccepted|1 identity #0|2 headers #1*",
            d,
            u
        ];
    }
}
class p extends s {
    constructor(e){
        super(), this.runId = "", this.sequence = r.protoInt64.zero, this.message = new Uint8Array(0), r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new p).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new p).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new p).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(p, e, t);
    }
    static $() {
        return [
            "AgentWebSocketServerMessage|1 run_id 9|2 sequence 4|3 message 12"
        ];
    }
}
class b extends s {
    constructor(e){
        super(), this.typeName = "", this.binaryValue = new Uint8Array(0), r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new b).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new b).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new b).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(b, e, t);
    }
    static $() {
        return [
            "AgentWebSocketConnectErrorDetail|1 type_name 9|2 binary_value 12"
        ];
    }
}
class S extends s {
    constructor(e){
        super(), this.code = c.UNSPECIFIED, this.rawMessage = "", this.metadata = [], this.details = [], r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new S).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new S).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new S).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(S, e, t);
    }
    static $() {
        return [
            "AgentWebSocketConnectError|1 code #0|2 raw_message 9|3 metadata #1*|4 details #2*",
            c,
            u,
            b
        ];
    }
}
class k extends s {
    constructor(e){
        super(), this.trailers = [], r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new k).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new k).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new k).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(k, e, t);
    }
    static $() {
        return [
            "AgentWebSocketRunEnd|1 identity #0|2 trailers #1*|3 error #2?",
            d,
            u,
            S
        ];
    }
}
class y extends s {
    constructor(e){
        super(), r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(y, e, t);
    }
    static $() {
        return [
            "AgentWebSocketRunRejected|1 identity #0|2 error #1",
            d,
            S
        ];
    }
}
class A extends s {
    constructor(e){
        super(), this.frame = {
            case: void 0
        }, r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new A).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new A).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new A).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(A, e, t);
    }
    static $() {
        return [
            "AgentWebSocketClientFrame|1 hello #0 frame|2 run_start #1 frame|3 client_message #2 frame|4 half_close #3 frame|5 cancel_run #4 frame",
            l,
            h,
            f,
            m,
            g
        ];
    }
}
class w extends s {
    constructor(e){
        super(), this.frame = {
            case: void 0
        }, r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new w).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new w).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new w).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(w, e, t);
    }
    static $() {
        return [
            "AgentWebSocketServerFrame|1 hello #0 frame|2 run_accepted #1 frame|3 server_message #2 frame|4 run_end #3 frame|5 run_rejected #4 frame",
            l,
            v,
            p,
            k,
            y
        ];
    }
}
