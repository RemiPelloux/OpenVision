import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { BatchRequest, BatchResponse, BootstrapStatsigRequest, BootstrapStatsigResponse, DownloadIssueTracesRequest, DownloadIssueTracesResponse, GetFirstWindowStatsigDecisionRequest, GetFirstWindowStatsigDecisionResponse, IngestConversationRequest, IngestConversationResponse, SubmitLogsRequest, SubmitLogsResponse, TrackEventsRequest, TrackEventsResponse, UploadIssueTraceRequest, UploadIssueTraceResponse, init_analytics_pb } from "./analytics_pb.js";
var AnalyticsService;
export { AnalyticsService };
var __wakaru_init_analytics_connect_initialized = false;
export function init_analytics_connect() {
if (__wakaru_init_analytics_connect_initialized) return;
__wakaru_init_analytics_connect_initialized = true;
"use strict";
init_analytics_pb();
init_esm2();
AnalyticsService = {
    typeName: "aiserver.v1.AnalyticsService",
    methods: {
        trackEvents: {
            name: "TrackEvents",
            I: TrackEventsRequest,
            O: TrackEventsResponse,
            kind: MethodKind.Unary
        },
        batch: {
            name: "Batch",
            I: BatchRequest,
            O: BatchResponse,
            kind: MethodKind.Unary
        },
        bootstrapStatsig: {
            name: "BootstrapStatsig",
            I: BootstrapStatsigRequest,
            O: BootstrapStatsigResponse,
            kind: MethodKind.Unary
        },
        getFirstWindowStatsigDecision: {
            name: "GetFirstWindowStatsigDecision",
            I: GetFirstWindowStatsigDecisionRequest,
            O: GetFirstWindowStatsigDecisionResponse,
            kind: MethodKind.Unary
        },
        submitLogs: {
            name: "SubmitLogs",
            I: SubmitLogsRequest,
            O: SubmitLogsResponse,
            kind: MethodKind.Unary
        },
        ingestConversation: {
            name: "IngestConversation",
            I: IngestConversationRequest,
            O: IngestConversationResponse,
            kind: MethodKind.Unary
        },
        uploadIssueTrace: {
            name: "UploadIssueTrace",
            I: UploadIssueTraceRequest,
            O: UploadIssueTraceResponse,
            kind: MethodKind.Unary
        },
        downloadIssueTraces: {
            name: "DownloadIssueTraces",
            I: DownloadIssueTracesRequest,
            O: DownloadIssueTracesResponse,
            kind: MethodKind.Unary
        }
    }
};

}
