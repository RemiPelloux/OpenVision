import { hr } from "./protobuf.js";
import { $Im, AIm, BHa, BIm, CIm, FIm, GHa, GIm, HHa, HIm, IIm, KIm, LIm, MIm, NIm, OIm, QIm, RIm, UHa, UIm, VHa, VIm, WHa, WIm, XIm, YIm, ZIm, _Im, bIm, dIm, eIm, exm, hIm, jIm, oIm, pIm, qHa, qIm, rIm, rxm, sIm, sZr, sxm, txm, uIm, wIm, xIm, zHa, zIm } from "./scm_pb.js";
import { ke } from "./service-type.js";
import { E } from "./tslib.es6.js";
var W2n;
export { W2n };
var __wakaru_TRi_initialized = false;
export function TRi() {
if (__wakaru_TRi_initialized) return;
__wakaru_TRi_initialized = true;
"use strict";
E(), sZr(), hr(), W2n = {
    typeName: "aiserver.v1.SCMService",
    methods: {
        getPullRequest: {
            name: "GetPullRequest",
            I: BHa,
            O: UHa,
            kind: ke.Unary
        },
        getPrAgentContext: {
            name: "GetPrAgentContext",
            I: eIm,
            O: rIm,
            kind: ke.Unary
        },
        getPullRequestStack: {
            name: "GetPullRequestStack",
            I: sIm,
            O: oIm,
            kind: ke.Unary
        },
        batchGetPullRequests: {
            name: "BatchGetPullRequests",
            I: uIm,
            O: dIm,
            kind: ke.Unary
        },
        batchGetPullRequestStatus: {
            name: "BatchGetPullRequestStatus",
            I: hIm,
            O: pIm,
            kind: ke.Unary
        },
        getPullRequestDiff: {
            name: "GetPullRequestDiff",
            I: HHa,
            O: VHa,
            kind: ke.Unary
        },
        getPullRequestFileContents: {
            name: "GetPullRequestFileContents",
            I: _Im,
            O: bIm,
            kind: ke.Unary
        },
        getPullRequestChecks: {
            name: "GetPullRequestChecks",
            I: WHa,
            O: GHa,
            kind: ke.Unary
        },
        getSCMPullRequestCommits: {
            name: "GetSCMPullRequestCommits",
            I: qHa,
            O: zHa,
            kind: ke.Unary
        },
        getSCMPullRequestTimelineEvents: {
            name: "GetSCMPullRequestTimelineEvents",
            I: wIm,
            O: CIm,
            kind: ke.Unary
        },
        internalGetPullRequest: {
            name: "InternalGetPullRequest",
            I: BHa,
            O: UHa,
            kind: ke.Unary
        },
        internalGetPullRequestDiff: {
            name: "InternalGetPullRequestDiff",
            I: HHa,
            O: VHa,
            kind: ke.Unary
        },
        internalGetPullRequestChecks: {
            name: "InternalGetPullRequestChecks",
            I: WHa,
            O: GHa,
            kind: ke.Unary
        },
        internalGetSCMPullRequestCommits: {
            name: "InternalGetSCMPullRequestCommits",
            I: qHa,
            O: zHa,
            kind: ke.Unary
        },
        getPullRequestCheckLogExcerpt: {
            name: "GetPullRequestCheckLogExcerpt",
            I: ZIm,
            O: sxm,
            kind: ke.Unary
        },
        getBranchComparison: {
            name: "GetBranchComparison",
            I: IIm,
            O: xIm,
            kind: ke.Unary
        },
        getPullRequestForBranch: {
            name: "GetPullRequestForBranch",
            I: AIm,
            O: RIm,
            kind: ke.Unary
        },
        batchGetPullRequestForBranch: {
            name: "BatchGetPullRequestForBranch",
            I: MIm,
            O: NIm,
            kind: ke.Unary
        },
        mergePullRequest: {
            name: "MergePullRequest",
            I: LIm,
            O: OIm,
            kind: ke.Unary
        },
        updatePullRequestTitle: {
            name: "UpdatePullRequestTitle",
            I: FIm,
            O: BIm,
            kind: ke.Unary
        },
        makePullRequestReady: {
            name: "MakePullRequestReady",
            I: UIm,
            O: jIm,
            kind: ke.Unary
        },
        closePullRequest: {
            name: "ClosePullRequest",
            I: $Im,
            O: HIm,
            kind: ke.Unary
        },
        reopenPullRequest: {
            name: "ReopenPullRequest",
            I: WIm,
            O: GIm,
            kind: ke.Unary
        },
        enablePullRequestAutoMerge: {
            name: "EnablePullRequestAutoMerge",
            I: qIm,
            O: zIm,
            kind: ke.Unary
        },
        disablePullRequestAutoMerge: {
            name: "DisablePullRequestAutoMerge",
            I: VIm,
            O: KIm,
            kind: ke.Unary
        },
        removePullRequestFromMergeQueue: {
            name: "RemovePullRequestFromMergeQueue",
            I: YIm,
            O: XIm,
            kind: ke.Unary
        },
        getPullRequestCodeowners: {
            name: "GetPullRequestCodeowners",
            I: QIm,
            O: exm,
            kind: ke.Unary
        },
        streamPullRequestUpdates: {
            name: "StreamPullRequestUpdates",
            I: txm,
            O: rxm,
            kind: ke.ServerStreaming
        }
    }
};

}
