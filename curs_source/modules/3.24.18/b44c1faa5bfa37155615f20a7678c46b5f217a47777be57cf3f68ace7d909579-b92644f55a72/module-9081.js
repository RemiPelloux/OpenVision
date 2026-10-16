"use strict";
require.r(exports), require.d(exports, {
    AnalyticsService: ()=>o
});
var n = require("./module-77977.js"), s = require("./module-36038.js");
const o = {
    typeName: "aiserver.v1.AnalyticsService",
    methods: {
        trackEvents: {
            name: "TrackEvents",
            I: n.TrackEventsRequest,
            O: n.TrackEventsResponse,
            kind: s.MethodKind.Unary
        },
        batch: {
            name: "Batch",
            I: n.BatchRequest,
            O: n.BatchResponse,
            kind: s.MethodKind.Unary
        },
        bootstrapStatsig: {
            name: "BootstrapStatsig",
            I: n.BootstrapStatsigRequest,
            O: n.BootstrapStatsigResponse,
            kind: s.MethodKind.Unary
        },
        getFirstWindowStatsigDecision: {
            name: "GetFirstWindowStatsigDecision",
            I: n.GetFirstWindowStatsigDecisionRequest,
            O: n.GetFirstWindowStatsigDecisionResponse,
            kind: s.MethodKind.Unary
        },
        submitLogs: {
            name: "SubmitLogs",
            I: n.SubmitLogsRequest,
            O: n.SubmitLogsResponse,
            kind: s.MethodKind.Unary
        },
        ingestConversation: {
            name: "IngestConversation",
            I: n.IngestConversationRequest,
            O: n.IngestConversationResponse,
            kind: s.MethodKind.Unary
        },
        uploadIssueTrace: {
            name: "UploadIssueTrace",
            I: n.UploadIssueTraceRequest,
            O: n.UploadIssueTraceResponse,
            kind: s.MethodKind.Unary
        },
        downloadIssueTraces: {
            name: "DownloadIssueTraces",
            I: n.DownloadIssueTracesRequest,
            O: n.DownloadIssueTracesResponse,
            kind: s.MethodKind.Unary
        }
    }
};
