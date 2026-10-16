"use strict";
require.r(exports), require.d(exports, {
    ChatRequestEventService: ()=>d,
    MetricsService: ()=>o,
    PerformanceEventService: ()=>i,
    ProfilingService: ()=>a,
    ToolCallEventService: ()=>u,
    TraceService: ()=>l,
    WebProfilingService: ()=>c
});
var n = require("./module-1840.js"), s = require("./module-36038.js");
const o = {
    typeName: "aiserver.v1.MetricsService",
    methods: {
        reportIncrement: {
            name: "ReportIncrement",
            I: n.ReportMetricsRequest,
            O: n.ReportMetricsResponse,
            kind: s.MethodKind.Unary
        },
        reportDecrement: {
            name: "ReportDecrement",
            I: n.ReportMetricsRequest,
            O: n.ReportMetricsResponse,
            kind: s.MethodKind.Unary
        },
        reportDistribution: {
            name: "ReportDistribution",
            I: n.ReportMetricsRequest,
            O: n.ReportMetricsResponse,
            kind: s.MethodKind.Unary
        },
        reportGauge: {
            name: "ReportGauge",
            I: n.ReportMetricsRequest,
            O: n.ReportMetricsResponse,
            kind: s.MethodKind.Unary
        }
    }
}, i = {
    typeName: "aiserver.v1.PerformanceEventService",
    methods: {
        submitPerformanceEvents: {
            name: "SubmitPerformanceEvents",
            I: n.SubmitPerformanceEventsRequest,
            O: n.SubmitPerformanceEventsResponse,
            kind: s.MethodKind.Unary
        }
    }
}, a = {
    typeName: "aiserver.v1.ProfilingService",
    methods: {
        submitProfile: {
            name: "SubmitProfile",
            I: n.SubmitProfileRequest,
            O: n.SubmitProfileResponse,
            kind: s.MethodKind.Unary
        }
    }
}, c = {
    typeName: "aiserver.v1.WebProfilingService",
    methods: {
        submitInteractionWindow: {
            name: "SubmitInteractionWindow",
            I: n.SubmitInteractionWindowRequest,
            O: n.SubmitInteractionWindowResponse,
            kind: s.MethodKind.Unary
        }
    }
}, l = {
    typeName: "aiserver.v1.TraceService",
    methods: {
        submitSpans: {
            name: "SubmitSpans",
            I: n.SubmitSpansRequest,
            O: n.SubmitSpansResponse,
            kind: s.MethodKind.Unary
        }
    }
}, u = {
    typeName: "aiserver.v1.ToolCallEventService",
    methods: {
        submitToolCallEvents: {
            name: "SubmitToolCallEvents",
            I: n.SubmitToolCallEventsRequest,
            O: n.SubmitToolCallEventsResponse,
            kind: s.MethodKind.Unary
        }
    }
}, d = {
    typeName: "aiserver.v1.ChatRequestEventService",
    methods: {
        submitChatRequestEvents: {
            name: "SubmitChatRequestEvents",
            I: n.SubmitChatRequestEventsRequest,
            O: n.SubmitChatRequestEventsResponse,
            kind: s.MethodKind.Unary
        }
    }
};
