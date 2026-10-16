import { Bbm, Dbm, Gbm, Hbm, Kbm, Lbm, Mbm, Nbm, Q8a, Ubm, Vbm, Wbm, Xbm, Ybm, lki, qbm, zbm } from "./analytics_pb.js";
import { hr } from "./protobuf.js";
import { ke } from "./service-type.js";
import { E } from "./tslib.es6.js";
var yTn;
export { yTn };
var __wakaru_cki_initialized = false;
export function cki() {
if (__wakaru_cki_initialized) return;
__wakaru_cki_initialized = true;
"use strict";
E(), lki(), hr(), yTn = {
    typeName: "aiserver.v1.AnalyticsService",
    methods: {
        trackEvents: {
            name: "TrackEvents",
            I: Bbm,
            O: Ubm,
            kind: ke.Unary
        },
        batch: {
            name: "Batch",
            I: Hbm,
            O: Wbm,
            kind: ke.Unary
        },
        bootstrapStatsig: {
            name: "BootstrapStatsig",
            I: Mbm,
            O: Dbm,
            kind: ke.Unary
        },
        getFirstWindowStatsigDecision: {
            name: "GetFirstWindowStatsigDecision",
            I: Nbm,
            O: Lbm,
            kind: ke.Unary
        },
        submitLogs: {
            name: "SubmitLogs",
            I: Gbm,
            O: qbm,
            kind: ke.Unary
        },
        ingestConversation: {
            name: "IngestConversation",
            I: Q8a,
            O: zbm,
            kind: ke.Unary
        },
        uploadIssueTrace: {
            name: "UploadIssueTrace",
            I: Vbm,
            O: Kbm,
            kind: ke.Unary
        },
        downloadIssueTraces: {
            name: "DownloadIssueTraces",
            I: Ybm,
            O: Xbm,
            kind: ke.Unary
        }
    }
};

}
