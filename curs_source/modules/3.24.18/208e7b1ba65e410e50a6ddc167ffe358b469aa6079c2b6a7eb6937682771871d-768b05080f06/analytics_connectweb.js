import { $ge, Age, Bge, Ege, Fge, Gge, Hge, Lge, Mge, Oge, Rge, Vge, Wge, bge, e2, jge, xge } from "./analytics_pb.js";
import { F } from "./protobuf.js";
import { C } from "./service-type.js";
import { h } from "./tslib.es6.js";
var qge;
export { qge };
var __wakaru_LXe_initialized = false;
export function LXe() {
if (__wakaru_LXe_initialized) return;
__wakaru_LXe_initialized = true;
"use strict";
h(), Hge(), F(), qge = {
    typeName: "aiserver.v1.AnalyticsService",
    methods: {
        trackEvents: {
            name: "TrackEvents",
            I: Age,
            O: Mge,
            kind: C.Unary
        },
        batch: {
            name: "Batch",
            I: Oge,
            O: Lge,
            kind: C.Unary
        },
        bootstrapStatsig: {
            name: "BootstrapStatsig",
            I: Ege,
            O: bge,
            kind: C.Unary
        },
        getFirstWindowStatsigDecision: {
            name: "GetFirstWindowStatsigDecision",
            I: e2,
            O: Rge,
            kind: C.Unary
        },
        submitLogs: {
            name: "SubmitLogs",
            I: xge,
            O: Fge,
            kind: C.Unary
        },
        ingestConversation: {
            name: "IngestConversation",
            I: Wge,
            O: Bge,
            kind: C.Unary
        },
        uploadIssueTrace: {
            name: "UploadIssueTrace",
            I: Gge,
            O: Vge,
            kind: C.Unary
        },
        downloadIssueTraces: {
            name: "DownloadIssueTraces",
            I: $ge,
            O: jge,
            kind: C.Unary
        }
    }
};

}
