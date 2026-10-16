"use strict";
require.r(exports), require.d(exports, {
    AnalyticsContext: ()=>_,
    AnalyticsEvent: ()=>p,
    BatchEvent: ()=>A,
    BatchRequest: ()=>w,
    BatchResponse: ()=>S,
    BootstrapStatsigRequest: ()=>c,
    BootstrapStatsigResponse: ()=>l,
    ClientInfo: ()=>y,
    ClientLogEntry: ()=>J,
    ClientLogLevel: ()=>u,
    ClientOS: ()=>a,
    DownloadIssueTracesRequest: ()=>v,
    DownloadIssueTracesResponse: ()=>q,
    EventData: ()=>f,
    GetFirstWindowStatsigDecisionRequest: ()=>m,
    GetFirstWindowStatsigDecisionResponse: ()=>d,
    IngestConversationRequest: ()=>I,
    IngestConversationResponse: ()=>C,
    SubmitLogsRequest: ()=>B,
    SubmitLogsResponse: ()=>E,
    TrackEventsRequest: ()=>h,
    TrackEventsResponse: ()=>g,
    UploadIssueTraceRequest: ()=>b,
    UploadIssueTraceResponse: ()=>k
});
var n = require("./module-6038.js"), s = require("./module-8592.js");
const i = "aiserver.v1.";
class o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return i;
    }
}
var a = (0, s.QT)(n.proto3, i, "ClientOS", [
    [
        0,
        "CLIENT_OS_UNSPECIFIED"
    ],
    [
        1,
        "CLIENT_OS_WINDOWS"
    ],
    [
        2,
        "CLIENT_OS_MACOS"
    ],
    [
        3,
        "CLIENT_OS_LINUX"
    ],
    [
        4,
        "CLIENT_OS_IOS"
    ],
    [
        5,
        "CLIENT_OS_ANDROID"
    ]
]), u = (0, s.QT)(n.proto3, i, "ClientLogLevel", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INFO"
    ],
    [
        2,
        "DEBUG"
    ],
    [
        3,
        "WARN"
    ],
    [
        4,
        "ERROR"
    ]
], 1);
class c extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "BootstrapStatsigRequest|1 ignore_dev_status 8?|2 operating_system #0?|3 device_model 9?|4 os_version 9?|5 form_factor 9?|6 stable_id 9?|7 client_channel 9?|8 bundle_id 9?|9 mobile_app_store_country 9?|10 native_build 9?|11 ota_update_id 9?|12 ota_runtime_version 9?|13 ota_embedded_launch 8?",
            a
        ];
    }
}
class l extends o {
    constructor(t){
        super(), this.config = "", this.generatedAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
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
            "BootstrapStatsigResponse|1 config 9|2 generated_at_ms 4"
        ];
    }
}
class m extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "GetFirstWindowStatsigDecisionRequest|1 operating_system #0?",
            a
        ];
    }
}
class d extends o {
    constructor(t){
        super(), this.variant = "", this.reason = "", n.proto3.util.initPartial(t, this);
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
            "GetFirstWindowStatsigDecisionResponse|1 variant 9|2 reason 9"
        ];
    }
}
class f extends o {
    constructor(t){
        super(), this.data = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new f).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new f).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new f).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(f, t, e);
    }
    static $() {
        return [
            "EventData|1 string_value 9 data|2 int_value 3 data|3 bool_value 8 data|4 double_value 1 data"
        ];
    }
}
class p extends o {
    constructor(t){
        super(), this.eventName = "", this.eventData = {}, this.timestamp = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new p).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new p).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new p).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(p, t, e);
    }
    static $() {
        return [
            "AnalyticsEvent|1 event_name 9|2 event_data 9,#0|3 timestamp 3",
            f
        ];
    }
}
class h extends o {
    constructor(t){
        super(), this.events = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new h).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new h).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new h).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(h, t, e);
    }
    static $() {
        return [
            "TrackEventsRequest|1 events #0*",
            p
        ];
    }
}
class g extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new g).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new g).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new g).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(g, t, e);
    }
    static $() {
        return [
            "TrackEventsResponse"
        ];
    }
}
class A extends o {
    constructor(t){
        super(), this.event = "", this.timestamp = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new A).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new A).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new A).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(A, t, e);
    }
    static $() {
        return [
            "BatchEvent|1 event 9|2 properties #0|3 timestamp 3|4 user_id 9?|5 anonymous_id 9?|6 message_id 9?|7 context #1?",
            n.Struct,
            _
        ];
    }
}
class _ extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new _).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new _).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new _).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(_, t, e);
    }
    static $() {
        return [
            "AnalyticsContext|1 client #0?",
            y
        ];
    }
}
class y extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new y).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new y).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new y).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(y, t, e);
    }
    static $() {
        return [
            "ClientInfo|1 os 9?|2 arch 9?|3 os_version 9?|4 version 9?|5 layout 9?"
        ];
    }
}
class w extends o {
    constructor(t){
        super(), this.events = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new w).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new w).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new w).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(w, t, e);
    }
    static $() {
        return [
            "BatchRequest|1 events #0*",
            A
        ];
    }
}
class S extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new S).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new S).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new S).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(S, t, e);
    }
    static $() {
        return [
            "BatchResponse"
        ];
    }
}
class J extends o {
    constructor(t){
        super(), this.level = u.UNSPECIFIED, this.message = "", this.metadata = {}, this.timestamp = n.protoInt64.zero, this.key = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new J).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new J).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new J).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(J, t, e);
    }
    static $() {
        return [
            "ClientLogEntry|1 level #0|2 message 9|3 metadata 9,9|4 timestamp 3|5 error_message 9?|6 error_stack 9?|7 key 9",
            u
        ];
    }
}
class B extends o {
    constructor(t){
        super(), this.logs = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new B).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new B).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new B).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(B, t, e);
    }
    static $() {
        return [
            "SubmitLogsRequest|1 logs #0*",
            J
        ];
    }
}
class E extends o {
    constructor(t){
        super(), this.success = !1, this.logsProcessed = 0, this.logsDropped = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new E).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new E).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new E).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(E, t, e);
    }
    static $() {
        return [
            "SubmitLogsResponse|1 success 8|2 error_message 9?|3 logs_processed 13|4 logs_dropped 13"
        ];
    }
}
class I extends o {
    constructor(t){
        super(), this.conversationId = "", this.transcript = "", this.lastUpdatedAt = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new I).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new I).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new I).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(I, t, e);
    }
    static $() {
        return [
            "IngestConversationRequest|1 conversation_id 9|2 transcript 9|3 transcript_json 9?|4 mode 9?|5 model 9?|6 last_updated_at 3"
        ];
    }
}
class C extends o {
    constructor(t){
        super(), this.success = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new C).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new C).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new C).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(C, t, e);
    }
    static $() {
        return [
            "IngestConversationResponse|1 success 8|2 summary 9?|3 detailed_summary 9?|4 error_message 9?"
        ];
    }
}
class b extends o {
    constructor(t){
        super(), this.token = "", this.payload = "", this.payloadHash = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new b).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new b).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new b).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(b, t, e);
    }
    static $() {
        return [
            "UploadIssueTraceRequest|1 token 9|2 payload 9|3 payload_hash 9"
        ];
    }
}
class k extends o {
    constructor(t){
        super(), this.eventId = "", this.size = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new k).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new k).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new k).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(k, t, e);
    }
    static $() {
        return [
            "UploadIssueTraceResponse|1 event_id 9|2 size 3"
        ];
    }
}
class v extends o {
    constructor(t){
        super(), this.token = "", this.limit = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new v).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new v).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new v).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(v, t, e);
    }
    static $() {
        return [
            "DownloadIssueTracesRequest|1 token 9|2 limit 5"
        ];
    }
}
class q extends o {
    constructor(t){
        super(), this.data = new Uint8Array(0), this.totalTraces = 0, this.totalBytes = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new q).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new q).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new q).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(q, t, e);
    }
    static $() {
        return [
            "DownloadIssueTracesResponse|1 data 12|2 total_traces 5|3 total_bytes 3"
        ];
    }
}
