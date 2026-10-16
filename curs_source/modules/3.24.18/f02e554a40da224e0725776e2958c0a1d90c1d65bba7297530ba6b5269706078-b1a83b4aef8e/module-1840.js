"use strict";
require.r(exports), require.d(exports, {
    CapturedProfile: ()=>J,
    CapturedWebProfile: ()=>E,
    ChatRequestTelemetryEvent: ()=>F,
    Interaction: ()=>B,
    InteractionType: ()=>c,
    PerformanceEvent: ()=>_,
    PerformanceEventType: ()=>a,
    PerformanceMetric: ()=>v,
    ProfileKind: ()=>u,
    ReportInlineActionRequest: ()=>m,
    ReportInlineActionResponse: ()=>d,
    ReportMetricsRequest: ()=>f,
    ReportMetricsRequest_Metric: ()=>p,
    ReportMetricsRequest_NamedMetric: ()=>h,
    ReportMetricsResponse: ()=>g,
    ScriptTiming: ()=>A,
    SpanKind: ()=>l,
    Status: ()=>R,
    Status_StatusCode: ()=>P,
    SubmitChatRequestEventsRequest: ()=>M,
    SubmitChatRequestEventsResponse: ()=>O,
    SubmitInteractionWindowRequest: ()=>b,
    SubmitInteractionWindowResponse: ()=>k,
    SubmitPerformanceEventsRequest: ()=>w,
    SubmitPerformanceEventsResponse: ()=>S,
    SubmitProfileRequest: ()=>I,
    SubmitProfileResponse: ()=>C,
    SubmitSpansRequest: ()=>x,
    SubmitSpansResponse: ()=>N,
    SubmitToolCallEventsRequest: ()=>D,
    SubmitToolCallEventsResponse: ()=>U,
    SystemMetadata: ()=>y,
    ToolCallTelemetryEvent: ()=>Q,
    TraceLink: ()=>T,
    TraceSpan: ()=>q
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
var a = (0, s.QT)(n.proto3, i, "PerformanceEventType", [
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
], 1), u = (0, s.QT)(n.proto3, i, "ProfileKind", [
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
], 1), c = (0, s.QT)(n.proto3, i, "InteractionType", [
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
], 1), l = (0, s.QT)(n.proto3, i, "SpanKind", [
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
class m extends o {
    constructor(t){
        super(), this.action = "", this.generationUuid = "", n.proto3.util.initPartial(t, this);
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
            "ReportInlineActionRequest|1 action 9|2 generation_uuid 9"
        ];
    }
}
class d extends o {
    constructor(t){
        super(), n.proto3.util.initPartial(t, this);
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
            "ReportInlineActionResponse"
        ];
    }
}
class f extends o {
    constructor(t){
        super(), this.metrics = {}, this.metricsList = [], n.proto3.util.initPartial(t, this);
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
            "ReportMetricsRequest|1 metrics 9,#0|2 metrics_list #1*",
            p,
            h
        ];
    }
}
class p extends o {
    constructor(t){
        super(), this.tags = {}, n.proto3.util.initPartial(t, this);
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
            "ReportMetricsRequest.Metric|1 value 1?|2 tags 9,9"
        ];
    }
}
class h extends o {
    constructor(t){
        super(), this.name = "", this.tags = {}, n.proto3.util.initPartial(t, this);
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
            "ReportMetricsRequest.NamedMetric|1 name 9|2 value 1?|3 tags 9,9"
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
            "ReportMetricsResponse"
        ];
    }
}
class A extends o {
    constructor(t){
        super(), this.name = "", this.startTime = 0, this.duration = 0, this.executionStart = 0, this.forcedStyleAndLayoutDuration = 0, this.pauseDuration = 0, this.sourceUrl = "", this.sourceFunctionName = "", this.sourceCharPosition = 0, this.invokerType = "", this.windowAttribution = "", n.proto3.util.initPartial(t, this);
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
            "ScriptTiming|1 name 9|2 start_time 1|3 duration 1|4 execution_start 1|5 forced_style_and_layout_duration 1|6 pause_duration 1|7 source_url 9|8 source_function_name 9|9 source_char_position 5|10 invoker 9?|11 invoker_type 9|12 window_attribution 9"
        ];
    }
}
class _ extends o {
    constructor(t){
        super(), this.eventType = a.UNSPECIFIED, this.performanceTimestamp = 0, this.scripts = [], this.metadata = {}, n.proto3.util.initPartial(t, this);
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
            "PerformanceEvent|1 event_type #0|2 timestamp #1|3 performance_timestamp 1|4 duration 1?|5 target_element 9?|6 target_class 9?|7 target_id 9?|26 target_aria_id 9?|8 client_x 5?|9 client_y 5?|10 key 9?|11 code 9?|12 ctrl_key 8?|13 alt_key 8?|14 shift_key 8?|15 meta_key 8?|16 scroll_x 1?|17 scroll_y 1?|18 scroll_delta_x 1?|19 scroll_delta_y 1?|21 render_start 1?|22 style_and_layout_start 1?|23 first_ui_event_timestamp 1?|24 blocking_duration 1?|25 scripts #2*|20 metadata 9,9",
            a,
            n.Timestamp,
            A
        ];
    }
}
class y extends o {
    constructor(t){
        super(), this.additionalMetadata = {}, n.proto3.util.initPartial(t, this);
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
            "SystemMetadata|1 timestamp #0|2 memory_used_mb 1?|3 memory_total_mb 1?|4 cpu_usage_percent 1?|5 active_tabs_count 5?|6 open_editors_count 5?|7 window_focused 8?|8 window_size 9?|9 additional_metadata 9,9",
            n.Timestamp
        ];
    }
}
class w extends o {
    constructor(t){
        super(), this.sessionId = "", this.events = [], this.clientVersion = "", this.clientCommit = "", this.platformTags = {}, this.metrics = [], n.proto3.util.initPartial(t, this);
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
            "SubmitPerformanceEventsRequest|1 session_id 9|2 events #0*|3 system_metadata #1?|4 client_version 9|5 client_commit 9|6 platform_tags 9,9|7 window_type 9?|8 metrics #2*",
            _,
            y,
            v
        ];
    }
}
class S extends o {
    constructor(t){
        super(), this.success = !1, this.eventsProcessed = 0, n.proto3.util.initPartial(t, this);
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
            "SubmitPerformanceEventsResponse|1 success 8|2 error_message 9?|3 events_processed 5"
        ];
    }
}
class J extends o {
    constructor(t){
        super(), this.profileData = new Uint8Array(0), this.profileConfigId = "", this.profileKind = u.UNSPECIFIED, this.tags = {}, n.proto3.util.initPartial(t, this);
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
            "CapturedProfile|1 timestamp #0|2 duration #1|3 profile_data 12|4 profile_config_id 9|5 profile_kind #2|6 tags 9,9",
            n.Timestamp,
            n.Duration,
            u
        ];
    }
}
class B extends o {
    constructor(t){
        super(), this.id = "", this.type = c.UNSPECIFIED, this.performanceStartTimestamp = 0, this.performanceEndTimestamp = 0, n.proto3.util.initPartial(t, this);
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
            "Interaction|1 id 9|2 type #0|3 performance_start_timestamp 1|4 performance_end_timestamp 1",
            c
        ];
    }
}
class E extends o {
    constructor(t){
        super(), this.traceData = new Uint8Array(0), this.tags = {}, n.proto3.util.initPartial(t, this);
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
            "CapturedWebProfile|1 timestamp #0|3 trace_data 12|4 tags 9,9",
            n.Timestamp
        ];
    }
}
class I extends o {
    constructor(t){
        super(), this.profiles = [], n.proto3.util.initPartial(t, this);
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
            "SubmitProfileRequest|1 profiles #0*",
            J
        ];
    }
}
class C extends o {
    constructor(t){
        super(), this.profileIds = [], n.proto3.util.initPartial(t, this);
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
            "SubmitProfileResponse|1 profile_ids 9*"
        ];
    }
}
class b extends o {
    constructor(t){
        super(), this.interactions = [], this.sessionId = "", n.proto3.util.initPartial(t, this);
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
            "SubmitInteractionWindowRequest|1 time_origin #0|2 web_profile #1|3 interactions #2*|4 session_id 9",
            n.Timestamp,
            E,
            B
        ];
    }
}
class k extends o {
    constructor(t){
        super(), this.success = !1, n.proto3.util.initPartial(t, this);
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
            "SubmitInteractionWindowResponse|1 success 8|2 error_message 9?"
        ];
    }
}
class v extends o {
    constructor(t){
        super(), this.name = "", this.value = 0, this.metadata = {}, n.proto3.util.initPartial(t, this);
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
            "PerformanceMetric|1 timestamp #0|2 name 9|3 value 1|4 unit 9?|5 metadata 9,9",
            n.Timestamp
        ];
    }
}
class q extends o {
    constructor(t){
        super(), this.traceId = "", this.spanId = "", this.name = "", this.attributes = {}, this.links = [], n.proto3.util.initPartial(t, this);
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
            "TraceSpan|1 trace_id 9|2 span_id 9|3 parent_span_id 9?|4 name 9|5 start_time #0|6 end_time #0|7 attributes 9,9|8 error 8?|9 trace_state 9?|10 flags 13?|11 kind #1?|12 status #2?|13 links #3*",
            n.Timestamp,
            l,
            R,
            T
        ];
    }
}
class R extends o {
    constructor(t){
        super(), this.message = "", this.code = P.UNSPECIFIED, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new R).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new R).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new R).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(R, t, e);
    }
    static $() {
        return [
            "Status|1 message 9|2 code #0",
            P
        ];
    }
}
var P = (0, s.QT)(n.proto3, i, "Status.StatusCode", [
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
class T extends o {
    constructor(t){
        super(), this.traceId = "", this.spanId = "", this.attributes = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new T).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new T).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new T).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(T, t, e);
    }
    static $() {
        return [
            "TraceLink|1 trace_id 9|2 span_id 9|3 trace_state 9?|4 attributes 9,9|5 flags 13?"
        ];
    }
}
class x extends o {
    constructor(t){
        super(), this.spans = [], this.clientVersion = "", this.clientCommit = "", n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new x).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new x).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new x).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(x, t, e);
    }
    static $() {
        return [
            "SubmitSpansRequest|1 spans #0*|2 client_version 9|3 client_commit 9",
            q
        ];
    }
}
class N extends o {
    constructor(t){
        super(), this.success = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new N).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new N).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new N).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(N, t, e);
    }
    static $() {
        return [
            "SubmitSpansResponse|1 success 8|2 error_message 9?"
        ];
    }
}
class D extends o {
    constructor(t){
        super(), this.sessionId = "", this.events = [], this.clientVersion = "", this.clientCommit = "", this.platformTags = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new D).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new D).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new D).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(D, t, e);
    }
    static $() {
        return [
            "SubmitToolCallEventsRequest|1 session_id 9|2 events #0*|3 client_version 9|4 client_commit 9|5 platform_tags 9,9|6 window_type 9?",
            Q
        ];
    }
}
class U extends o {
    constructor(t){
        super(), this.success = !1, this.eventsProcessed = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new U).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new U).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new U).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(U, t, e);
    }
    static $() {
        return [
            "SubmitToolCallEventsResponse|1 success 8|2 error_message 9?|3 events_processed 5"
        ];
    }
}
class Q extends o {
    constructor(t){
        super(), this.toolCallId = "", this.toolType = "", this.chatRequestUuid = "", this.modelName = "", this.isParallel = !1, this.success = !1, this.metadata = {}, this.isStream = !1, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new Q).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new Q).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new Q).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(Q, t, e);
    }
    static $() {
        return [
            "ToolCallTelemetryEvent|1 tool_call_id 9|2 tool_type 9|3 chat_request_uuid 9|4 model_name 9|5 start_time #0|6 end_time #0|7 duration #1|8 is_parallel 8|9 parallel_batch_size 5?|10 success 8|11 error_message 9?|12 metadata 9,9|13 approval_wait_duration #1?|14 is_stream 8",
            n.Timestamp,
            n.Duration
        ];
    }
}
class M extends o {
    constructor(t){
        super(), this.sessionId = "", this.events = [], this.clientVersion = "", this.clientCommit = "", this.platformTags = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new M).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new M).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new M).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(M, t, e);
    }
    static $() {
        return [
            "SubmitChatRequestEventsRequest|1 session_id 9|2 events #0*|3 client_version 9|4 client_commit 9|5 platform_tags 9,9|6 window_type 9?",
            F
        ];
    }
}
class O extends o {
    constructor(t){
        super(), this.success = !1, this.eventsProcessed = 0, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new O).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new O).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new O).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(O, t, e);
    }
    static $() {
        return [
            "SubmitChatRequestEventsResponse|1 success 8|2 error_message 9?|3 events_processed 5"
        ];
    }
}
class F extends o {
    constructor(t){
        super(), this.chatRequestUuid = "", this.requestedModel = "", this.actualModel = "", this.success = !1, this.completionStatus = "", this.metadata = {}, n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new F).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new F).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new F).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(F, t, e);
    }
    static $() {
        return [
            "ChatRequestTelemetryEvent|1 chat_request_uuid 9|2 requested_model 9|3 actual_model 9|4 start_time #0|5 end_time #0|6 duration #1|7 success 8|8 error_message 9?|9 transport 9?|10 completion_status 9|11 metadata 9,9|12 total_ttft_ms 1?|13 total_generate_ms 1?|14 total_stream_ms 1?|15 total_request_ms 1?|16 model_call_count 5?|17 total_tool_call_latency 1?|18 tool_call_count 5?",
            n.Timestamp,
            n.Duration
        ];
    }
}
