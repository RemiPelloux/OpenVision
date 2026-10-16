"use strict";
require.r(exports), require.d(exports, {
    CapturedProfile: ()=>S,
    CapturedWebProfile: ()=>E,
    ChatRequestTelemetryEvent: ()=>L,
    Interaction: ()=>b,
    InteractionType: ()=>l,
    PerformanceEvent: ()=>w,
    PerformanceEventType: ()=>a,
    PerformanceMetric: ()=>T,
    ProfileKind: ()=>c,
    ReportInlineActionRequest: ()=>d,
    ReportInlineActionResponse: ()=>p,
    ReportMetricsRequest: ()=>m,
    ReportMetricsRequest_Metric: ()=>h,
    ReportMetricsRequest_NamedMetric: ()=>f,
    ReportMetricsResponse: ()=>g,
    ScriptTiming: ()=>y,
    SpanKind: ()=>u,
    Status: ()=>B,
    Status_StatusCode: ()=>P,
    SubmitChatRequestEventsRequest: ()=>F,
    SubmitChatRequestEventsResponse: ()=>U,
    SubmitInteractionWindowRequest: ()=>k,
    SubmitInteractionWindowResponse: ()=>x,
    SubmitPerformanceEventsRequest: ()=>_,
    SubmitPerformanceEventsResponse: ()=>A,
    SubmitProfileRequest: ()=>I,
    SubmitProfileResponse: ()=>C,
    SubmitSpansRequest: ()=>M,
    SubmitSpansResponse: ()=>q,
    SubmitToolCallEventsRequest: ()=>D,
    SubmitToolCallEventsResponse: ()=>O,
    SystemMetadata: ()=>v,
    ToolCallTelemetryEvent: ()=>N,
    TraceLink: ()=>J,
    TraceSpan: ()=>R
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
const o = "aiserver.v1.";
class i extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return o;
    }
}
var a = (0, s.QT)(n.proto3, o, "PerformanceEventType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLICK"
    ],
    [
        2,
        "POINTER"
    ],
    [
        3,
        "TOUCH"
    ],
    [
        4,
        "KEYDOWN"
    ],
    [
        5,
        "KEYUP"
    ],
    [
        6,
        "SCROLL"
    ],
    [
        7,
        "LONG_ANIMATION_FRAME"
    ],
    [
        8,
        "MOUSEDOWN"
    ],
    [
        9,
        "MOUSEUP"
    ]
], 1), c = (0, s.QT)(n.proto3, o, "ProfileKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "WALL"
    ],
    [
        2,
        "ALLOCATION"
    ],
    [
        3,
        "CPU"
    ]
], 1), l = (0, s.QT)(n.proto3, o, "InteractionType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLICK"
    ],
    [
        2,
        "KEYPRESS"
    ]
], 1), u = (0, s.QT)(n.proto3, o, "SpanKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "INTERNAL"
    ],
    [
        2,
        "SERVER"
    ],
    [
        3,
        "CLIENT"
    ],
    [
        4,
        "PRODUCER"
    ],
    [
        5,
        "CONSUMER"
    ]
], 1);
class d extends i {
    constructor(e){
        super(), this.action = "", this.generationUuid = "", n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(d, e, t);
    }
    static $() {
        return [
            "ReportInlineActionRequest|1 action 9|2 generation_uuid 9"
        ];
    }
}
class p extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(p, e, t);
    }
    static $() {
        return [
            "ReportInlineActionResponse"
        ];
    }
}
class m extends i {
    constructor(e){
        super(), this.metrics = {}, this.metricsList = [], n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(m, e, t);
    }
    static $() {
        return [
            "ReportMetricsRequest|1 metrics 9,#0|2 metrics_list #1*",
            h,
            f
        ];
    }
}
class h extends i {
    constructor(e){
        super(), this.tags = {}, n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(h, e, t);
    }
    static $() {
        return [
            "ReportMetricsRequest.Metric|1 value 1?|2 tags 9,9"
        ];
    }
}
class f extends i {
    constructor(e){
        super(), this.name = "", this.tags = {}, n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(f, e, t);
    }
    static $() {
        return [
            "ReportMetricsRequest.NamedMetric|1 name 9|2 value 1?|3 tags 9,9"
        ];
    }
}
class g extends i {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(g, e, t);
    }
    static $() {
        return [
            "ReportMetricsResponse"
        ];
    }
}
class y extends i {
    constructor(e){
        super(), this.name = "", this.startTime = 0, this.duration = 0, this.executionStart = 0, this.forcedStyleAndLayoutDuration = 0, this.pauseDuration = 0, this.sourceUrl = "", this.sourceFunctionName = "", this.sourceCharPosition = 0, this.invokerType = "", this.windowAttribution = "", n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(y, e, t);
    }
    static $() {
        return [
            "ScriptTiming|1 name 9|2 start_time 1|3 duration 1|4 execution_start 1|5 forced_style_and_layout_duration 1|6 pause_duration 1|7 source_url 9|8 source_function_name 9|9 source_char_position 5|10 invoker 9?|11 invoker_type 9|12 window_attribution 9"
        ];
    }
}
class w extends i {
    constructor(e){
        super(), this.eventType = a.UNSPECIFIED, this.performanceTimestamp = 0, this.scripts = [], this.metadata = {}, n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(w, e, t);
    }
    static $() {
        return [
            "PerformanceEvent|1 event_type #0|2 timestamp #1|3 performance_timestamp 1|4 duration 1?|5 target_element 9?|6 target_class 9?|7 target_id 9?|26 target_aria_id 9?|8 client_x 5?|9 client_y 5?|10 key 9?|11 code 9?|12 ctrl_key 8?|13 alt_key 8?|14 shift_key 8?|15 meta_key 8?|16 scroll_x 1?|17 scroll_y 1?|18 scroll_delta_x 1?|19 scroll_delta_y 1?|21 render_start 1?|22 style_and_layout_start 1?|23 first_ui_event_timestamp 1?|24 blocking_duration 1?|25 scripts #2*|20 metadata 9,9",
            a,
            n.Timestamp,
            y
        ];
    }
}
class v extends i {
    constructor(e){
        super(), this.additionalMetadata = {}, n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(v, e, t);
    }
    static $() {
        return [
            "SystemMetadata|1 timestamp #0|2 memory_used_mb 1?|3 memory_total_mb 1?|4 cpu_usage_percent 1?|5 active_tabs_count 5?|6 open_editors_count 5?|7 window_focused 8?|8 window_size 9?|9 additional_metadata 9,9",
            n.Timestamp
        ];
    }
}
class _ extends i {
    constructor(e){
        super(), this.sessionId = "", this.events = [], this.clientVersion = "", this.clientCommit = "", this.platformTags = {}, this.metrics = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_, e, t);
    }
    static $() {
        return [
            "SubmitPerformanceEventsRequest|1 session_id 9|2 events #0*|3 system_metadata #1?|4 client_version 9|5 client_commit 9|6 platform_tags 9,9|7 window_type 9?|8 metrics #2*",
            w,
            v,
            T
        ];
    }
}
class A extends i {
    constructor(e){
        super(), this.success = !1, this.eventsProcessed = 0, n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(A, e, t);
    }
    static $() {
        return [
            "SubmitPerformanceEventsResponse|1 success 8|2 error_message 9?|3 events_processed 5"
        ];
    }
}
class S extends i {
    constructor(e){
        super(), this.profileData = new Uint8Array(0), this.profileConfigId = "", this.profileKind = c.UNSPECIFIED, this.tags = {}, n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(S, e, t);
    }
    static $() {
        return [
            "CapturedProfile|1 timestamp #0|2 duration #1|3 profile_data 12|4 profile_config_id 9|5 profile_kind #2|6 tags 9,9",
            n.Timestamp,
            n.Duration,
            c
        ];
    }
}
class b extends i {
    constructor(e){
        super(), this.id = "", this.type = l.UNSPECIFIED, this.performanceStartTimestamp = 0, this.performanceEndTimestamp = 0, n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(b, e, t);
    }
    static $() {
        return [
            "Interaction|1 id 9|2 type #0|3 performance_start_timestamp 1|4 performance_end_timestamp 1",
            l
        ];
    }
}
class E extends i {
    constructor(e){
        super(), this.traceData = new Uint8Array(0), this.tags = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new E).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new E).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new E).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(E, e, t);
    }
    static $() {
        return [
            "CapturedWebProfile|1 timestamp #0|3 trace_data 12|4 tags 9,9",
            n.Timestamp
        ];
    }
}
class I extends i {
    constructor(e){
        super(), this.profiles = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new I).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new I).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new I).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(I, e, t);
    }
    static $() {
        return [
            "SubmitProfileRequest|1 profiles #0*",
            S
        ];
    }
}
class C extends i {
    constructor(e){
        super(), this.profileIds = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new C).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new C).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new C).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(C, e, t);
    }
    static $() {
        return [
            "SubmitProfileResponse|1 profile_ids 9*"
        ];
    }
}
class k extends i {
    constructor(e){
        super(), this.interactions = [], this.sessionId = "", n.proto3.util.initPartial(e, this);
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
        return n.proto3.util.equals(k, e, t);
    }
    static $() {
        return [
            "SubmitInteractionWindowRequest|1 time_origin #0|2 web_profile #1|3 interactions #2*|4 session_id 9",
            n.Timestamp,
            E,
            b
        ];
    }
}
class x extends i {
    constructor(e){
        super(), this.success = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new x).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new x).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new x).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(x, e, t);
    }
    static $() {
        return [
            "SubmitInteractionWindowResponse|1 success 8|2 error_message 9?"
        ];
    }
}
class T extends i {
    constructor(e){
        super(), this.name = "", this.value = 0, this.metadata = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new T).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new T).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new T).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(T, e, t);
    }
    static $() {
        return [
            "PerformanceMetric|1 timestamp #0|2 name 9|3 value 1|4 unit 9?|5 metadata 9,9",
            n.Timestamp
        ];
    }
}
class R extends i {
    constructor(e){
        super(), this.traceId = "", this.spanId = "", this.name = "", this.attributes = {}, this.links = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new R).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new R).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new R).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(R, e, t);
    }
    static $() {
        return [
            "TraceSpan|1 trace_id 9|2 span_id 9|3 parent_span_id 9?|4 name 9|5 start_time #0|6 end_time #0|7 attributes 9,9|8 error 8?|9 trace_state 9?|10 flags 13?|11 kind #1?|12 status #2?|13 links #3*",
            n.Timestamp,
            u,
            B,
            J
        ];
    }
}
class B extends i {
    constructor(e){
        super(), this.message = "", this.code = P.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new B).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new B).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new B).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(B, e, t);
    }
    static $() {
        return [
            "Status|1 message 9|2 code #0",
            P
        ];
    }
}
var P = (0, s.QT)(n.proto3, o, "Status.StatusCode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OK"
    ],
    [
        2,
        "ERROR"
    ]
], 1);
class J extends i {
    constructor(e){
        super(), this.traceId = "", this.spanId = "", this.attributes = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new J).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new J).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new J).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(J, e, t);
    }
    static $() {
        return [
            "TraceLink|1 trace_id 9|2 span_id 9|3 trace_state 9?|4 attributes 9,9|5 flags 13?"
        ];
    }
}
class M extends i {
    constructor(e){
        super(), this.spans = [], this.clientVersion = "", this.clientCommit = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new M).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new M).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new M).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(M, e, t);
    }
    static $() {
        return [
            "SubmitSpansRequest|1 spans #0*|2 client_version 9|3 client_commit 9",
            R
        ];
    }
}
class q extends i {
    constructor(e){
        super(), this.success = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new q).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new q).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new q).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(q, e, t);
    }
    static $() {
        return [
            "SubmitSpansResponse|1 success 8|2 error_message 9?"
        ];
    }
}
class D extends i {
    constructor(e){
        super(), this.sessionId = "", this.events = [], this.clientVersion = "", this.clientCommit = "", this.platformTags = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new D).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new D).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new D).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(D, e, t);
    }
    static $() {
        return [
            "SubmitToolCallEventsRequest|1 session_id 9|2 events #0*|3 client_version 9|4 client_commit 9|5 platform_tags 9,9|6 window_type 9?",
            N
        ];
    }
}
class O extends i {
    constructor(e){
        super(), this.success = !1, this.eventsProcessed = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new O).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new O).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new O).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(O, e, t);
    }
    static $() {
        return [
            "SubmitToolCallEventsResponse|1 success 8|2 error_message 9?|3 events_processed 5"
        ];
    }
}
class N extends i {
    constructor(e){
        super(), this.toolCallId = "", this.toolType = "", this.chatRequestUuid = "", this.modelName = "", this.isParallel = !1, this.success = !1, this.metadata = {}, this.isStream = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new N).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new N).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new N).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(N, e, t);
    }
    static $() {
        return [
            "ToolCallTelemetryEvent|1 tool_call_id 9|2 tool_type 9|3 chat_request_uuid 9|4 model_name 9|5 start_time #0|6 end_time #0|7 duration #1|8 is_parallel 8|9 parallel_batch_size 5?|10 success 8|11 error_message 9?|12 metadata 9,9|13 approval_wait_duration #1?|14 is_stream 8",
            n.Timestamp,
            n.Duration
        ];
    }
}
class F extends i {
    constructor(e){
        super(), this.sessionId = "", this.events = [], this.clientVersion = "", this.clientCommit = "", this.platformTags = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new F).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new F).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new F).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(F, e, t);
    }
    static $() {
        return [
            "SubmitChatRequestEventsRequest|1 session_id 9|2 events #0*|3 client_version 9|4 client_commit 9|5 platform_tags 9,9|6 window_type 9?",
            L
        ];
    }
}
class U extends i {
    constructor(e){
        super(), this.success = !1, this.eventsProcessed = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new U).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new U).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new U).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(U, e, t);
    }
    static $() {
        return [
            "SubmitChatRequestEventsResponse|1 success 8|2 error_message 9?|3 events_processed 5"
        ];
    }
}
class L extends i {
    constructor(e){
        super(), this.chatRequestUuid = "", this.requestedModel = "", this.actualModel = "", this.success = !1, this.completionStatus = "", this.metadata = {}, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new L).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new L).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new L).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(L, e, t);
    }
    static $() {
        return [
            "ChatRequestTelemetryEvent|1 chat_request_uuid 9|2 requested_model 9|3 actual_model 9|4 start_time #0|5 end_time #0|6 duration #1|7 success 8|8 error_message 9?|9 transport 9?|10 completion_status 9|11 metadata 9,9|12 total_ttft_ms 1?|13 total_generate_ms 1?|14 total_stream_ms 1?|15 total_request_ms 1?|16 model_call_count 5?|17 total_tool_call_latency 1?|18 tool_call_count 5?",
            n.Timestamp,
            n.Duration
        ];
    }
}
