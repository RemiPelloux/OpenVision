import { Gro, JRd, PLn, QRd, ZRd, aDd, cDd, dDd, eDd, gDd, hDd, iDd, lDd, mDd, pDd, rDd, uDd } from "./analytics_pb.js";
import { bi } from "./protobuf.js";
import { ae } from "./service-type.js";
import { x } from "./tslib.es6.js";
var DHt;
export { DHt };
var __wakaru_LLn_initialized = false;
export function LLn() {
if (__wakaru_LLn_initialized) return;
__wakaru_LLn_initialized = true;
"use strict";
x(), PLn(), bi(), DHt = {
    typeName: "aiserver.v1.AnalyticsService",
    methods: {
        trackEvents: {
            name: "TrackEvents",
            I: iDd,
            O: rDd,
            kind: ae.Unary
        },
        batch: {
            name: "Batch",
            I: aDd,
            O: cDd,
            kind: ae.Unary
        },
        bootstrapStatsig: {
            name: "BootstrapStatsig",
            I: ZRd,
            O: QRd,
            kind: ae.Unary
        },
        getFirstWindowStatsigDecision: {
            name: "GetFirstWindowStatsigDecision",
            I: JRd,
            O: eDd,
            kind: ae.Unary
        },
        submitLogs: {
            name: "SubmitLogs",
            I: lDd,
            O: uDd,
            kind: ae.Unary
        },
        ingestConversation: {
            name: "IngestConversation",
            I: Gro,
            O: dDd,
            kind: ae.Unary
        },
        uploadIssueTrace: {
            name: "UploadIssueTrace",
            I: hDd,
            O: pDd,
            kind: ae.Unary
        },
        downloadIssueTraces: {
            name: "DownloadIssueTraces",
            I: mDd,
            O: gDd,
            kind: ae.Unary
        }
    }
};

}
