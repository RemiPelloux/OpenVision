import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { ReportMetricsRequest, ReportMetricsResponse, SubmitChatRequestEventsRequest, SubmitChatRequestEventsResponse, SubmitInteractionWindowRequest, SubmitInteractionWindowResponse, SubmitPerformanceEventsRequest, SubmitPerformanceEventsResponse, SubmitProfileRequest, SubmitProfileResponse, SubmitSpansRequest, SubmitSpansResponse, SubmitToolCallEventsRequest, SubmitToolCallEventsResponse, init_telemetry_pb } from "./telemetry_pb.js";
var MetricsService, PerformanceEventService, ProfilingService, WebProfilingService, TraceService, ToolCallEventService, ChatRequestEventService;
export { ChatRequestEventService, MetricsService, PerformanceEventService, ProfilingService, ToolCallEventService, TraceService, WebProfilingService };
var __wakaru_init_telemetry_connect_initialized = false;
export function init_telemetry_connect() {
if (__wakaru_init_telemetry_connect_initialized) return;
__wakaru_init_telemetry_connect_initialized = true;
"use strict";
init_telemetry_pb();
init_esm2();
MetricsService = {
    typeName: "aiserver.v1.MetricsService",
    methods: {
        reportIncrement: {
            name: "ReportIncrement",
            I: ReportMetricsRequest,
            O: ReportMetricsResponse,
            kind: MethodKind.Unary
        },
        reportDecrement: {
            name: "ReportDecrement",
            I: ReportMetricsRequest,
            O: ReportMetricsResponse,
            kind: MethodKind.Unary
        },
        reportDistribution: {
            name: "ReportDistribution",
            I: ReportMetricsRequest,
            O: ReportMetricsResponse,
            kind: MethodKind.Unary
        },
        reportGauge: {
            name: "ReportGauge",
            I: ReportMetricsRequest,
            O: ReportMetricsResponse,
            kind: MethodKind.Unary
        }
    }
};
PerformanceEventService = {
    typeName: "aiserver.v1.PerformanceEventService",
    methods: {
        submitPerformanceEvents: {
            name: "SubmitPerformanceEvents",
            I: SubmitPerformanceEventsRequest,
            O: SubmitPerformanceEventsResponse,
            kind: MethodKind.Unary
        }
    }
};
ProfilingService = {
    typeName: "aiserver.v1.ProfilingService",
    methods: {
        submitProfile: {
            name: "SubmitProfile",
            I: SubmitProfileRequest,
            O: SubmitProfileResponse,
            kind: MethodKind.Unary
        }
    }
};
WebProfilingService = {
    typeName: "aiserver.v1.WebProfilingService",
    methods: {
        submitInteractionWindow: {
            name: "SubmitInteractionWindow",
            I: SubmitInteractionWindowRequest,
            O: SubmitInteractionWindowResponse,
            kind: MethodKind.Unary
        }
    }
};
TraceService = {
    typeName: "aiserver.v1.TraceService",
    methods: {
        submitSpans: {
            name: "SubmitSpans",
            I: SubmitSpansRequest,
            O: SubmitSpansResponse,
            kind: MethodKind.Unary
        }
    }
};
ToolCallEventService = {
    typeName: "aiserver.v1.ToolCallEventService",
    methods: {
        submitToolCallEvents: {
            name: "SubmitToolCallEvents",
            I: SubmitToolCallEventsRequest,
            O: SubmitToolCallEventsResponse,
            kind: MethodKind.Unary
        }
    }
};
ChatRequestEventService = {
    typeName: "aiserver.v1.ChatRequestEventService",
    methods: {
        submitChatRequestEvents: {
            name: "SubmitChatRequestEvents",
            I: SubmitChatRequestEventsRequest,
            O: SubmitChatRequestEventsResponse,
            kind: MethodKind.Unary
        }
    }
};

}
