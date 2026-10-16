import { f3t } from "./duration_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { Nr } from "./timestamp_pb.js";
import { x } from "./tslib.es6.js";
var _Qd, Met, O2n, bQd, yQd, SQd, F2n, kQd, wQd, B2n, CQd, hmo, pmo, mmo, TQd, gmo, fmo, vmo, _mo, EQd, bmo, xQd, ymo, Smo, IQd, AQd, RQd, U2n, DQd, MQd, PQd, LQd, NQd, OQd, FQd;
export { AQd, B2n, CQd, DQd, EQd, F2n, FQd, IQd, LQd, MQd, Met, NQd, O2n, OQd, PQd, RQd, SQd, Smo, TQd, U2n, _Qd, _mo, bQd, bmo, fmo, gmo, hmo, kQd, mmo, pmo, vmo, wQd, xQd, yQd, ymo };
var __wakaru_ZWt_initialized = false;
export function ZWt() {
if (__wakaru_ZWt_initialized) return;
__wakaru_ZWt_initialized = true;
"use strict";
x(), bi(), _Qd = k.makeEnum("aiserver.v1.PerformanceEventType", [
    {
        no: 0,
        name: "PERFORMANCE_EVENT_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PERFORMANCE_EVENT_TYPE_CLICK",
        localName: "CLICK"
    },
    {
        no: 2,
        name: "PERFORMANCE_EVENT_TYPE_POINTER",
        localName: "POINTER"
    },
    {
        no: 3,
        name: "PERFORMANCE_EVENT_TYPE_TOUCH",
        localName: "TOUCH"
    },
    {
        no: 4,
        name: "PERFORMANCE_EVENT_TYPE_KEYDOWN",
        localName: "KEYDOWN"
    },
    {
        no: 5,
        name: "PERFORMANCE_EVENT_TYPE_KEYUP",
        localName: "KEYUP"
    },
    {
        no: 6,
        name: "PERFORMANCE_EVENT_TYPE_SCROLL",
        localName: "SCROLL"
    },
    {
        no: 7,
        name: "PERFORMANCE_EVENT_TYPE_LONG_ANIMATION_FRAME",
        localName: "LONG_ANIMATION_FRAME"
    },
    {
        no: 8,
        name: "PERFORMANCE_EVENT_TYPE_MOUSEDOWN",
        localName: "MOUSEDOWN"
    },
    {
        no: 9,
        name: "PERFORMANCE_EVENT_TYPE_MOUSEUP",
        localName: "MOUSEUP"
    }
]), Met = k.makeEnum("aiserver.v1.ProfileKind", [
    {
        no: 0,
        name: "PROFILE_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PROFILE_KIND_WALL",
        localName: "WALL"
    },
    {
        no: 2,
        name: "PROFILE_KIND_ALLOCATION",
        localName: "ALLOCATION"
    },
    {
        no: 3,
        name: "PROFILE_KIND_CPU",
        localName: "CPU"
    }
]), O2n = k.makeEnum("aiserver.v1.InteractionType", [
    {
        no: 0,
        name: "INTERACTION_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "INTERACTION_TYPE_CLICK",
        localName: "CLICK"
    },
    {
        no: 2,
        name: "INTERACTION_TYPE_KEYPRESS",
        localName: "KEYPRESS"
    }
]), bQd = k.makeEnum("aiserver.v1.SpanKind", [
    {
        no: 0,
        name: "SPAN_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SPAN_KIND_INTERNAL",
        localName: "INTERNAL"
    },
    {
        no: 2,
        name: "SPAN_KIND_SERVER",
        localName: "SERVER"
    },
    {
        no: 3,
        name: "SPAN_KIND_CLIENT",
        localName: "CLIENT"
    },
    {
        no: 4,
        name: "SPAN_KIND_PRODUCER",
        localName: "PRODUCER"
    },
    {
        no: 5,
        name: "SPAN_KIND_CONSUMER",
        localName: "CONSUMER"
    }
]), yQd = k.makeMessageType("aiserver.v1.ReportInlineActionRequest", ()=>[
        {
            no: 1,
            name: "action",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "generation_uuid",
            kind: "scalar",
            T: 9
        }
    ]), SQd = k.makeMessageType("aiserver.v1.ReportInlineActionResponse", []), F2n = k.makeMessageType("aiserver.v1.ReportMetricsRequest", ()=>[
        {
            no: 1,
            name: "metrics",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: kQd
            }
        },
        {
            no: 2,
            name: "metrics_list",
            kind: "message",
            T: wQd,
            repeated: !0
        }
    ]), kQd = k.makeMessageType("aiserver.v1.ReportMetricsRequest.Metric", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 2,
            name: "tags",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ], {
    localName: "ReportMetricsRequest_Metric"
}), wQd = k.makeMessageType("aiserver.v1.ReportMetricsRequest.NamedMetric", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 3,
            name: "tags",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ], {
    localName: "ReportMetricsRequest_NamedMetric"
}), B2n = k.makeMessageType("aiserver.v1.ReportMetricsResponse", []), CQd = k.makeMessageType("aiserver.v1.ScriptTiming", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_time",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "duration",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "execution_start",
            kind: "scalar",
            T: 1
        },
        {
            no: 5,
            name: "forced_style_and_layout_duration",
            kind: "scalar",
            T: 1
        },
        {
            no: 6,
            name: "pause_duration",
            kind: "scalar",
            T: 1
        },
        {
            no: 7,
            name: "source_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "source_function_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "source_char_position",
            kind: "scalar",
            T: 5
        },
        {
            no: 10,
            name: "invoker",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "invoker_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "window_attribution",
            kind: "scalar",
            T: 9
        }
    ]), hmo = k.makeMessageType("aiserver.v1.PerformanceEvent", ()=>[
        {
            no: 1,
            name: "event_type",
            kind: "enum",
            T: k.getEnumType(_Qd)
        },
        {
            no: 2,
            name: "timestamp",
            kind: "message",
            T: Nr
        },
        {
            no: 3,
            name: "performance_timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "duration",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 5,
            name: "target_element",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "target_class",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "target_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 26,
            name: "target_aria_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "client_x",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "client_y",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "key",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "code",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "ctrl_key",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "alt_key",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "shift_key",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 15,
            name: "meta_key",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 16,
            name: "scroll_x",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 17,
            name: "scroll_y",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 18,
            name: "scroll_delta_x",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 19,
            name: "scroll_delta_y",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 21,
            name: "render_start",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 22,
            name: "style_and_layout_start",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 23,
            name: "first_ui_event_timestamp",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 24,
            name: "blocking_duration",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 25,
            name: "scripts",
            kind: "message",
            T: CQd,
            repeated: !0
        },
        {
            no: 20,
            name: "metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), pmo = k.makeMessageType("aiserver.v1.SystemMetadata", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Nr
        },
        {
            no: 2,
            name: "memory_used_mb",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 3,
            name: "memory_total_mb",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 4,
            name: "cpu_usage_percent",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 5,
            name: "active_tabs_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 6,
            name: "open_editors_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 7,
            name: "window_focused",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "window_size",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "additional_metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), mmo = k.makeMessageType("aiserver.v1.SubmitPerformanceEventsRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "events",
            kind: "message",
            T: hmo,
            repeated: !0
        },
        {
            no: 3,
            name: "system_metadata",
            kind: "message",
            T: pmo,
            opt: !0
        },
        {
            no: 4,
            name: "client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "client_commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "platform_tags",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 7,
            name: "window_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "metrics",
            kind: "message",
            T: ymo,
            repeated: !0
        }
    ]), TQd = k.makeMessageType("aiserver.v1.SubmitPerformanceEventsResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "events_processed",
            kind: "scalar",
            T: 5
        }
    ]), gmo = k.makeMessageType("aiserver.v1.CapturedProfile", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Nr
        },
        {
            no: 2,
            name: "duration",
            kind: "message",
            T: f3t
        },
        {
            no: 3,
            name: "profile_data",
            kind: "scalar",
            T: 12
        },
        {
            no: 4,
            name: "profile_config_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "profile_kind",
            kind: "enum",
            T: k.getEnumType(Met)
        },
        {
            no: 6,
            name: "tags",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), fmo = k.makeMessageType("aiserver.v1.Interaction", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "type",
            kind: "enum",
            T: k.getEnumType(O2n)
        },
        {
            no: 3,
            name: "performance_start_timestamp",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "performance_end_timestamp",
            kind: "scalar",
            T: 1
        }
    ]), vmo = k.makeMessageType("aiserver.v1.CapturedWebProfile", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Nr
        },
        {
            no: 3,
            name: "trace_data",
            kind: "scalar",
            T: 12
        },
        {
            no: 4,
            name: "tags",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), _mo = k.makeMessageType("aiserver.v1.SubmitProfileRequest", ()=>[
        {
            no: 1,
            name: "profiles",
            kind: "message",
            T: gmo,
            repeated: !0
        }
    ]), EQd = k.makeMessageType("aiserver.v1.SubmitProfileResponse", ()=>[
        {
            no: 1,
            name: "profile_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), bmo = k.makeMessageType("aiserver.v1.SubmitInteractionWindowRequest", ()=>[
        {
            no: 1,
            name: "time_origin",
            kind: "message",
            T: Nr
        },
        {
            no: 2,
            name: "web_profile",
            kind: "message",
            T: vmo
        },
        {
            no: 3,
            name: "interactions",
            kind: "message",
            T: fmo,
            repeated: !0
        },
        {
            no: 4,
            name: "session_id",
            kind: "scalar",
            T: 9
        }
    ]), xQd = k.makeMessageType("aiserver.v1.SubmitInteractionWindowResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), ymo = k.makeMessageType("aiserver.v1.PerformanceMetric", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Nr
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "value",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "unit",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), Smo = k.makeMessageType("aiserver.v1.TraceSpan", ()=>[
        {
            no: 1,
            name: "trace_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parent_span_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "start_time",
            kind: "message",
            T: Nr
        },
        {
            no: 6,
            name: "end_time",
            kind: "message",
            T: Nr
        },
        {
            no: 7,
            name: "attributes",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 8,
            name: "error",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "trace_state",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "flags",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 11,
            name: "kind",
            kind: "enum",
            T: k.getEnumType(bQd),
            opt: !0
        },
        {
            no: 12,
            name: "status",
            kind: "message",
            T: IQd,
            opt: !0
        },
        {
            no: 13,
            name: "links",
            kind: "message",
            T: RQd,
            repeated: !0
        }
    ]), IQd = k.makeMessageType("aiserver.v1.Status", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "code",
            kind: "enum",
            T: k.getEnumType(AQd)
        }
    ]), AQd = k.makeEnum("aiserver.v1.Status.StatusCode", [
    {
        no: 0,
        name: "STATUS_CODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_CODE_OK",
        localName: "OK"
    },
    {
        no: 2,
        name: "STATUS_CODE_ERROR",
        localName: "ERROR"
    }
]), RQd = k.makeMessageType("aiserver.v1.TraceLink", ()=>[
        {
            no: 1,
            name: "trace_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "trace_state",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "attributes",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 5,
            name: "flags",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), U2n = k.makeMessageType("aiserver.v1.SubmitSpansRequest", ()=>[
        {
            no: 1,
            name: "spans",
            kind: "message",
            T: Smo,
            repeated: !0
        },
        {
            no: 2,
            name: "client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "client_commit",
            kind: "scalar",
            T: 9
        }
    ]), DQd = k.makeMessageType("aiserver.v1.SubmitSpansResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), MQd = k.makeMessageType("aiserver.v1.SubmitToolCallEventsRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "events",
            kind: "message",
            T: LQd,
            repeated: !0
        },
        {
            no: 3,
            name: "client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "client_commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "platform_tags",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 6,
            name: "window_type",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), PQd = k.makeMessageType("aiserver.v1.SubmitToolCallEventsResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "events_processed",
            kind: "scalar",
            T: 5
        }
    ]), LQd = k.makeMessageType("aiserver.v1.ToolCallTelemetryEvent", ()=>[
        {
            no: 1,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "chat_request_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "model_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "start_time",
            kind: "message",
            T: Nr
        },
        {
            no: 6,
            name: "end_time",
            kind: "message",
            T: Nr
        },
        {
            no: 7,
            name: "duration",
            kind: "message",
            T: f3t
        },
        {
            no: 8,
            name: "is_parallel",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "parallel_batch_size",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 10,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 13,
            name: "approval_wait_duration",
            kind: "message",
            T: f3t,
            opt: !0
        },
        {
            no: 14,
            name: "is_stream",
            kind: "scalar",
            T: 8
        }
    ]), NQd = k.makeMessageType("aiserver.v1.SubmitChatRequestEventsRequest", ()=>[
        {
            no: 1,
            name: "session_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "events",
            kind: "message",
            T: FQd,
            repeated: !0
        },
        {
            no: 3,
            name: "client_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "client_commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "platform_tags",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 6,
            name: "window_type",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), OQd = k.makeMessageType("aiserver.v1.SubmitChatRequestEventsResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "events_processed",
            kind: "scalar",
            T: 5
        }
    ]), FQd = k.makeMessageType("aiserver.v1.ChatRequestTelemetryEvent", ()=>[
        {
            no: 1,
            name: "chat_request_uuid",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "requested_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "actual_model",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "start_time",
            kind: "message",
            T: Nr
        },
        {
            no: 5,
            name: "end_time",
            kind: "message",
            T: Nr
        },
        {
            no: 6,
            name: "duration",
            kind: "message",
            T: f3t
        },
        {
            no: 7,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "transport",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "completion_status",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 12,
            name: "total_ttft_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 13,
            name: "total_generate_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 14,
            name: "total_stream_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 15,
            name: "total_request_ms",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 16,
            name: "model_call_count",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 17,
            name: "total_tool_call_latency",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 18,
            name: "tool_call_count",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]);

}
