import { A7a, F7a, L7a, N7a, O7a, R7a, V6e } from "./agent_service_pb.js";
import { $2d, $3d, $Ad, $Bo, $Id, $Md, $Rd, $xd, A3d, AAd, AMd, B3d, BAd, BDd, BId, Bxd, C3d, CAd, CPd, CRd, Cxd, D3d, DAd, DDd, DPd, Dxd, E3d, EAd, EBo, EMd, EPd, F3d, FAd, FDd, FId, FPd, Fxd, G2d, G3d, GAd, GBo, GMd, GPd, GRd, Gxd, H3d, HAd, HId, HMd, HPd, Hxd, I3d, IAd, IBo, Ixd, J2d, J3d, JAd, JId, JPd, K2d, K3d, KAd, KDd, KId, KMd, KPd, KRd, Kxd, L3d, LAd, LBo, LDd, LPd, LRd, Lxd, MAd, MBo, MDd, MPd, Mxd, N3d, NAd, NBo, NDd, NPd, Nxd, O3d, OAd, OMd, OPd, P3d, PAd, PBo, Pxd, Q1r, Q2d, QAd, QId, QRd, Qxd, R3d, RAd, RBo, RDd, RMd, S3d, SBo, SMd, SPd, SRd, T3d, TAd, TBo, TPd, TRd, Txd, U2d, U3d, UAd, UDd, UId, UMd, V$e, V3d, VAd, VBo, VId, VPd, VRd, W2d, W3d, WAd, WBo, WId, WMd, WPd, WRd, XBo, XDd, XId, XMd, XPd, Y2d, Y3d, YAd, YDd, YId, YMd, Z2d, Z3d, ZAd, ZDd, ZId, ZMd, ZPd, ZRd, Zmn, Zxd, _2d, _Bo, _Dd, _Md, _Rd, _xd, a3d, aAd, aMd, aNd, aPd, b2d, b3d, bAd, bPd, bxd, c3d, cDd, cNd, cii, d2d, d3d, d8o, dBo, dDd, dMd, dNd, dPd, dxd, e3d, e8o, eMd, eNd, ePd, eRd, exd, f2d, f8o, fAd, fBo, fDd, fMd, fPd, fRd, g2d, g3d, gAd, gBo, gMd, gxd, h2d, hDd, hMd, hNd, hPd, hii, hxd, i8o, iDd, iRd, ixd, j2d, j3d, jAd, jDd, jId, jMd, jRd, k3d, kAd, kPd, kRd, lAd, lDd, lNd, lPd, m2d, m3d, mAd, mBo, mDd, mPd, mRd, n2, n2d, n8o, nMd, nRd, nkr, nxd, o2d, o8o, oDd, oMd, oNd, oPd, p2d, p3d, pBo, pMd, pPd, pRd, pxd, q2d, q3d, qAd, qDd, qId, qMd, qRd, qxd, r3d, r8o, rDd, rNd, rPd, rxd, s2d, sDd, sMd, sNd, sPd, sxd, t2d, t8o, tMd, tPd, tkr, txd, u2d, u3d, uBo, uDd, uNd, v2d, v3d, v8o, vAd, vBo, vDd, vPd, vbt, vxd, w3d, wAd, wPd, wRd, wxd, xAd, xBo, xxd, y3d, yAd, yMd, yPd, z2d, zAd, zBo, zDd, zMd } from "./aiserver_pb.js";
import { CPe, JEn, Jqe, Qqe } from "./bidi_pb.js";
import { Obr, g4t } from "./bugbot_pb.js";
import { A6o, sd, x6o } from "./chat_pb.js";
import { A1r, A9o, E0d, G0d, I0d, Jni, O0d, P0d, R9o, W0d, hTd, k9o, lW, mTd, pTd, x0d, x1r } from "./cpp_pb.js";
import { Gyr, cfd, lfd } from "./docs_pb.js";
import { bBm, pG1, yBm } from "./fastpreviews_pb.js";
import { gBm, hG1 } from "./inline_gpt4_pb.js";
import { hr } from "./protobuf.js";
import { ke } from "./service-type.js";
import { Bpd, Cpd, Epd, Fpd, Gbr, Gpd, Ipd, Lpd, Opd, Tpd, Vbr, WDo, Wpd, Xpd, Zpd, nmd, qbr, xpd, zbr } from "./symbolic_context_pb.js";
import { CBm, QEn, wBm } from "./telemetry_pb.js";
import { E } from "./tslib.es6.js";
var v4e;
export { v4e };
var __wakaru_eze_initialized = false;
export function eze() {
if (__wakaru_eze_initialized) return;
__wakaru_eze_initialized = true;
"use strict";
E(), n2(), hr(), sd(), hG1(), pG1(), lW(), nmd(), Gyr(), QEn(), g4t(), JEn(), V6e(), v4e = {
    typeName: "aiserver.v1.AiService",
    methods: {
        serverTime: {
            name: "ServerTime",
            I: U2d,
            O: j2d,
            kind: ke.Unary
        },
        healthCheck: {
            name: "HealthCheck",
            I: NBo,
            O: $2d,
            kind: ke.Unary
        },
        privacyCheck: {
            name: "PrivacyCheck",
            I: W2d,
            O: G2d,
            kind: ke.Unary
        },
        timeLeftHealthCheck: {
            name: "TimeLeftHealthCheck",
            I: NBo,
            O: q2d,
            kind: ke.Unary
        },
        throwErrorCheck: {
            name: "ThrowErrorCheck",
            I: v2d,
            O: _2d,
            kind: ke.Unary
        },
        availableModels: {
            name: "AvailableModels",
            I: Q1r,
            O: b2d,
            kind: ke.Unary
        },
        streamChatTryReallyHard: {
            name: "StreamChatTryReallyHard",
            I: vbt,
            O: V$e,
            kind: ke.ServerStreaming
        },
        rerankDocuments: {
            name: "RerankDocuments",
            I: x6o,
            O: A6o,
            kind: ke.Unary
        },
        streamComposer: {
            name: "StreamComposer",
            I: nkr,
            O: V$e,
            kind: ke.ServerStreaming
        },
        streamComposerContext: {
            name: "StreamComposerContext",
            I: PBo,
            O: MBo,
            kind: ke.ServerStreaming
        },
        warmComposerCache: {
            name: "WarmComposerCache",
            I: nkr,
            O: dMd,
            kind: ke.Unary
        },
        keepComposerCacheWarm: {
            name: "KeepComposerCacheWarm",
            I: XDd,
            O: ZDd,
            kind: ke.Unary
        },
        countTokens: {
            name: "CountTokens",
            I: a3d,
            O: c3d,
            kind: ke.Unary
        },
        streamPotentialLocs: {
            name: "StreamPotentialLocs",
            I: OPd,
            O: FPd,
            kind: ke.ServerStreaming
        },
        streamPotentialLocsUnderneath: {
            name: "StreamPotentialLocsUnderneath",
            I: NPd,
            O: LPd,
            kind: ke.ServerStreaming
        },
        streamPotentialLocsInitialQueries: {
            name: "StreamPotentialLocsInitialQueries",
            I: MPd,
            O: DPd,
            kind: ke.ServerStreaming
        },
        getChatTitle: {
            name: "GetChatTitle",
            I: oMd,
            O: aMd,
            kind: ke.Unary
        },
        getCompletion: {
            name: "GetCompletion",
            I: gMd,
            O: fMd,
            kind: ke.Unary
        },
        isolatedTreesitter: {
            name: "IsolatedTreesitter",
            I: VPd,
            O: KPd,
            kind: ke.Unary
        },
        getSimplePrompt: {
            name: "GetSimplePrompt",
            I: WBo,
            O: XPd,
            kind: ke.Unary
        },
        getPassthroughPrompt: {
            name: "GetPassthroughPrompt",
            I: JPd,
            O: eMd,
            kind: ke.Unary
        },
        suggestQuickActions: {
            name: "SuggestQuickActions",
            I: GBo,
            O: ZPd,
            kind: ke.Unary
        },
        checkLongFilesFit: {
            name: "CheckLongFilesFit",
            I: vbt,
            O: tMd,
            kind: ke.Unary
        },
        getEvaluationPrompt: {
            name: "GetEvaluationPrompt",
            I: nMd,
            O: sMd,
            kind: ke.Unary
        },
        getUserInfo: {
            name: "GetUserInfo",
            I: _Md,
            O: yMd,
            kind: ke.Unary
        },
        streamChat: {
            name: "StreamChat",
            I: vbt,
            O: V$e,
            kind: ke.ServerStreaming
        },
        streamChatWeb: {
            name: "StreamChatWeb",
            I: vbt,
            O: V$e,
            kind: ke.ServerStreaming
        },
        warmChatCache: {
            name: "WarmChatCache",
            I: hMd,
            O: pMd,
            kind: ke.Unary
        },
        streamEdit: {
            name: "StreamEdit",
            I: tkr,
            O: V$e,
            kind: ke.ServerStreaming
        },
        preloadEdit: {
            name: "PreloadEdit",
            I: oPd,
            O: aPd,
            kind: ke.Unary
        },
        streamFastEdit: {
            name: "StreamFastEdit",
            I: rPd,
            O: sPd,
            kind: ke.ServerStreaming
        },
        streamGenerate: {
            name: "StreamGenerate",
            I: LBo,
            O: V$e,
            kind: ke.ServerStreaming
        },
        streamInlineLongCompletion: {
            name: "StreamInlineLongCompletion",
            I: gBm,
            O: V$e,
            kind: ke.ServerStreaming
        },
        slashEdit: {
            name: "SlashEdit",
            I: Q2d,
            O: J2d,
            kind: ke.ServerStreaming
        },
        slashEditFollowUpWithPreviousEdits: {
            name: "SlashEditFollowUpWithPreviousEdits",
            I: ePd,
            O: tPd,
            kind: ke.ServerStreaming
        },
        streamAiPreviews: {
            name: "StreamAiPreviews",
            I: bBm,
            O: yBm,
            kind: ke.ServerStreaming
        },
        shouldTurnOnCppOnboarding: {
            name: "ShouldTurnOnCppOnboarding",
            I: E0d,
            O: I0d,
            kind: ke.Unary
        },
        getComposerAutocomplete: {
            name: "GetComposerAutocomplete",
            I: uBo,
            O: dBo,
            kind: ke.Unary
        },
        streamReview: {
            name: "StreamReview",
            I: z2d,
            O: Z2d,
            kind: ke.ServerStreaming
        },
        streamReviewChat: {
            name: "StreamReviewChat",
            I: K2d,
            O: Y2d,
            kind: ke.ServerStreaming
        },
        checkQueuePosition: {
            name: "CheckQueuePosition",
            I: $Bo,
            O: GPd,
            kind: ke.Unary
        },
        checkUsageBasedPrice: {
            name: "CheckUsageBasedPrice",
            I: HPd,
            O: WPd,
            kind: ke.Unary
        },
        doThisForMeCheck: {
            name: "DoThisForMeCheck",
            I: SMd,
            O: zBo,
            kind: ke.Unary
        },
        streamDoThisForMe: {
            name: "StreamDoThisForMe",
            I: EMd,
            O: AMd,
            kind: ke.ServerStreaming
        },
        streamChatToolformer: {
            name: "StreamChatToolformer",
            I: vbt,
            O: VBo,
            kind: ke.ServerStreaming
        },
        streamChatToolformerContinue: {
            name: "StreamChatToolformerContinue",
            I: RMd,
            O: VBo,
            kind: ke.ServerStreaming
        },
        pushAiThought: {
            name: "PushAiThought",
            I: OMd,
            O: UMd,
            kind: ke.Unary
        },
        checkDoableAsTask: {
            name: "CheckDoableAsTask",
            I: jMd,
            O: $Md,
            kind: ke.Unary
        },
        reportGroundTruthCandidate: {
            name: "ReportGroundTruthCandidate",
            I: DDd,
            O: NDd,
            kind: ke.Unary
        },
        reportCmdKFate: {
            name: "ReportCmdKFate",
            I: LDd,
            O: FDd,
            kind: ke.Unary
        },
        showWelcomeScreen: {
            name: "ShowWelcomeScreen",
            I: jAd,
            O: $Ad,
            kind: ke.Unary
        },
        interfaceAgentInit: {
            name: "InterfaceAgentInit",
            I: HMd,
            O: WMd,
            kind: ke.Unary
        },
        streamInterfaceAgentStatus: {
            name: "StreamInterfaceAgentStatus",
            I: GMd,
            O: qMd,
            kind: ke.ServerStreaming
        },
        taskGetInterfaceAgentStatus: {
            name: "TaskGetInterfaceAgentStatus",
            I: zMd,
            O: KMd,
            kind: ke.ServerStreaming
        },
        updateVscodeProfile: {
            name: "UpdateVscodeProfile",
            I: SBo,
            O: fAd,
            kind: ke.Unary
        },
        taskInit: {
            name: "TaskInit",
            I: YMd,
            O: XMd,
            kind: ke.Unary
        },
        taskPause: {
            name: "TaskPause",
            I: rDd,
            O: sDd,
            kind: ke.Unary
        },
        taskInfo: {
            name: "TaskInfo",
            I: iDd,
            O: XBo,
            kind: ke.Unary
        },
        taskStreamLog: {
            name: "TaskStreamLog",
            I: ZMd,
            O: oDd,
            kind: ke.ServerStreaming
        },
        taskSendMessage: {
            name: "TaskSendMessage",
            I: uDd,
            O: dDd,
            kind: ke.Unary
        },
        taskProvideResult: {
            name: "TaskProvideResult",
            I: lDd,
            O: cDd,
            kind: ke.Unary
        },
        createExperimentalIndex: {
            name: "CreateExperimentalIndex",
            I: Cpd,
            O: Tpd,
            kind: ke.Unary
        },
        listExperimentalIndexFiles: {
            name: "ListExperimentalIndexFiles",
            I: Epd,
            O: Ipd,
            kind: ke.Unary
        },
        listenExperimentalIndex: {
            name: "ListenExperimentalIndex",
            I: WDo,
            O: xpd,
            kind: ke.ServerStreaming
        },
        registerFileToIndex: {
            name: "RegisterFileToIndex",
            I: Gbr,
            O: Vbr,
            kind: ke.Unary
        },
        setupIndexDependencies: {
            name: "SetupIndexDependencies",
            I: Lpd,
            O: Opd,
            kind: ke.Unary
        },
        computeIndexTopoSort: {
            name: "ComputeIndexTopoSort",
            I: Fpd,
            O: Bpd,
            kind: ke.Unary
        },
        streamChatDeepContext: {
            name: "StreamChatDeepContext",
            I: jRd,
            O: $Rd,
            kind: ke.ServerStreaming
        },
        chooseCodeReferences: {
            name: "ChooseCodeReferences",
            I: qbr,
            O: Vbr,
            kind: ke.Unary
        },
        registerCodeReferences: {
            name: "RegisterCodeReferences",
            I: Wpd,
            O: Gpd,
            kind: ke.Unary
        },
        extractPaths: {
            name: "ExtractPaths",
            I: Xpd,
            O: Zpd,
            kind: ke.Unary
        },
        summarizeWithReferences: {
            name: "SummarizeWithReferences",
            I: zbr,
            O: Vbr,
            kind: ke.Unary
        },
        documentationQuery: {
            name: "DocumentationQuery",
            I: lfd,
            O: cfd,
            kind: ke.Unary
        },
        availableDocs: {
            name: "AvailableDocs",
            I: WRd,
            O: GRd,
            kind: ke.Unary
        },
        runWebSearch: {
            name: "RunWebSearch",
            I: qRd,
            O: VRd,
            kind: ke.Unary
        },
        runWebFetch: {
            name: "RunWebFetch",
            I: KRd,
            O: ZRd,
            kind: ke.Unary
        },
        runGenerateImage: {
            name: "RunGenerateImage",
            I: QRd,
            O: t2d,
            kind: ke.Unary
        },
        runGenerateVideo: {
            name: "RunGenerateVideo",
            I: n2d,
            O: s2d,
            kind: ke.Unary
        },
        runXSearch: {
            name: "RunXSearch",
            I: o2d,
            O: u2d,
            kind: ke.Unary
        },
        classifyAgentAutoReview: {
            name: "ClassifyAgentAutoReview",
            I: d2d,
            O: h2d,
            kind: ke.Unary
        },
        runDescribeImage: {
            name: "RunDescribeImage",
            I: p2d,
            O: m2d,
            kind: ke.Unary
        },
        detectShellHang: {
            name: "DetectShellHang",
            I: g2d,
            O: f2d,
            kind: ke.Unary
        },
        reportFeedback: {
            name: "ReportFeedback",
            I: hDd,
            O: mDd,
            kind: ke.Unary
        },
        reportBug: {
            name: "ReportBug",
            I: fDd,
            O: vDd,
            kind: ke.Unary
        },
        streamChatContext: {
            name: "StreamChatContext",
            I: PBo,
            O: MBo,
            kind: ke.ServerStreaming
        },
        generateTldr: {
            name: "GenerateTldr",
            I: wRd,
            O: CRd,
            kind: ke.Unary
        },
        taskStreamChatContext: {
            name: "TaskStreamChatContext",
            I: TRd,
            O: LRd,
            kind: ke.ServerStreaming
        },
        rerankResults: {
            name: "RerankResults",
            I: SRd,
            O: kRd,
            kind: ke.Unary
        },
        modelQuery: {
            name: "ModelQuery",
            I: RBo,
            O: fRd,
            kind: ke.Unary
        },
        modelQueryV2: {
            name: "ModelQueryV2",
            I: RBo,
            O: _Rd,
            kind: ke.ServerStreaming
        },
        intentPrediction: {
            name: "IntentPrediction",
            I: nRd,
            O: iRd,
            kind: ke.Unary
        },
        getChatSuggestions: {
            name: "GetChatSuggestions",
            I: FId,
            O: BId,
            kind: ke.Unary
        },
        getUserInstructions: {
            name: "GetUserInstructions",
            I: UId,
            O: jId,
            kind: ke.Unary
        },
        streamCursorTutor: {
            name: "StreamCursorTutor",
            I: pRd,
            O: mRd,
            kind: ke.ServerStreaming
        },
        checkFeatureStatus: {
            name: "CheckFeatureStatus",
            I: TBo,
            O: EBo,
            kind: ke.Unary
        },
        checkFeaturesStatus: {
            name: "CheckFeaturesStatus",
            I: KAd,
            O: YAd,
            kind: ke.Unary
        },
        checkFeatureStatusUnauthenticated: {
            name: "CheckFeatureStatusUnauthenticated",
            I: TBo,
            O: EBo,
            kind: ke.Unary
        },
        getEffectiveTokenLimit: {
            name: "GetEffectiveTokenLimit",
            I: ZAd,
            O: QAd,
            kind: ke.Unary
        },
        getContextScores: {
            name: "GetContextScores",
            I: RAd,
            O: PAd,
            kind: ke.Unary
        },
        streamCpp: {
            name: "StreamCpp",
            I: x1r,
            O: x0d,
            kind: ke.ServerStreaming
        },
        cppConfig: {
            name: "CppConfig",
            I: A1r,
            O: P0d,
            kind: ke.Unary
        },
        cppEditHistoryStatus: {
            name: "CppEditHistoryStatus",
            I: A9o,
            O: R9o,
            kind: ke.Unary
        },
        cppAppend: {
            name: "CppAppend",
            I: hTd,
            O: pTd,
            kind: ke.Unary
        },
        refreshTabContext: {
            name: "RefreshTabContext",
            I: W0d,
            O: G0d,
            kind: ke.Unary
        },
        checkNumberConfig: {
            name: "CheckNumberConfig",
            I: IBo,
            O: xBo,
            kind: ke.Unary
        },
        checkNumberConfigUnauthenticated: {
            name: "CheckNumberConfigUnauthenticated",
            I: IBo,
            O: xBo,
            kind: ke.Unary
        },
        checkNumberConfigs: {
            name: "CheckNumberConfigs",
            I: JAd,
            O: eRd,
            kind: ke.Unary
        },
        streamTerminalAutocomplete: {
            name: "StreamTerminalAutocomplete",
            I: SPd,
            O: EPd,
            kind: ke.ServerStreaming
        },
        streamPseudocodeGenerator: {
            name: "StreamPseudocodeGenerator",
            I: kPd,
            O: wPd,
            kind: ke.ServerStreaming
        },
        streamPseudocodeMapper: {
            name: "StreamPseudocodeMapper",
            I: CPd,
            O: TPd,
            kind: ke.ServerStreaming
        },
        acknowledgeGracePeriodDisclaimer: {
            name: "AcknowledgeGracePeriodDisclaimer",
            I: XId,
            O: ZId,
            kind: ke.Unary
        },
        streamAiLintBug: {
            name: "StreamAiLintBug",
            I: lPd,
            O: dPd,
            kind: ke.ServerStreaming
        },
        streamAiCursorHelp: {
            name: "StreamAiCursorHelp",
            I: bPd,
            O: yPd,
            kind: ke.ServerStreaming
        },
        logUserLintReply: {
            name: "LogUserLintReply",
            I: hPd,
            O: pPd,
            kind: ke.Unary
        },
        logLinterExplicitUserFeedback: {
            name: "LogLinterExplicitUserFeedback",
            I: mPd,
            O: fPd,
            kind: ke.Unary
        },
        streamFixMarkers: {
            name: "StreamFixMarkers",
            I: _Dd,
            O: RDd,
            kind: ke.ServerStreaming
        },
        reportInlineAction: {
            name: "ReportInlineAction",
            I: wBm,
            O: CBm,
            kind: ke.Unary
        },
        streamPriomptPrompt: {
            name: "StreamPriomptPrompt",
            I: zAd,
            O: VAd,
            kind: ke.ServerStreaming
        },
        streamLint: {
            name: "StreamLint",
            I: MDd,
            O: V$e,
            kind: ke.ServerStreaming
        },
        streamNewLintRule: {
            name: "StreamNewLintRule",
            I: vPd,
            O: V$e,
            kind: ke.ServerStreaming
        },
        aiProject: {
            name: "AiProject",
            I: HAd,
            O: WAd,
            kind: ke.ServerStreaming
        },
        toCamelCase: {
            name: "ToCamelCase",
            I: GAd,
            O: qAd,
            kind: ke.Unary
        },
        reportGenerationFeedback: {
            name: "ReportGenerationFeedback",
            I: MAd,
            O: DAd,
            kind: ke.Unary
        },
        reportAgentFeedback: {
            name: "ReportAgentFeedback",
            I: NAd,
            O: LAd,
            kind: ke.Unary
        },
        reportAgentMessageFeedback: {
            name: "ReportAgentMessageFeedback",
            I: OAd,
            O: FAd,
            kind: ke.Unary
        },
        reportAutoRoutingResultFeedback: {
            name: "ReportAutoRoutingResultFeedback",
            I: BAd,
            O: UAd,
            kind: ke.Unary
        },
        getThoughtAnnotation: {
            name: "GetThoughtAnnotation",
            I: gAd,
            O: vAd,
            kind: ke.Unary
        },
        streamWebCmdKV1: {
            name: "StreamWebCmdKV1",
            I: xAd,
            O: AAd,
            kind: ke.ServerStreaming
        },
        streamNextCursorPrediction: {
            name: "StreamNextCursorPrediction",
            I: EAd,
            O: IAd,
            kind: ke.ServerStreaming
        },
        isCursorPredictionEnabled: {
            name: "IsCursorPredictionEnabled",
            I: CAd,
            O: TAd,
            kind: ke.Unary
        },
        getCppEditClassification: {
            name: "GetCppEditClassification",
            I: k9o,
            O: O0d,
            kind: ke.Unary
        },
        getTerminalCompletion: {
            name: "GetTerminalCompletion",
            I: Gxd,
            O: qxd,
            kind: ke.Unary
        },
        takeNotesOnCommitDiff: {
            name: "TakeNotesOnCommitDiff",
            I: kAd,
            O: wAd,
            kind: ke.Unary
        },
        bulkEmbed: {
            name: "BulkEmbed",
            I: bAd,
            O: yAd,
            kind: ke.Unary
        },
        backgroundCmdKEval: {
            name: "BackgroundCmdKEval",
            I: lAd,
            O: mAd,
            kind: ke.ServerStreaming
        },
        backgroundCmdK: {
            name: "BackgroundCmdK",
            I: Qxd,
            O: aAd,
            kind: ke.ServerStreaming
        },
        calculateAutoSelection: {
            name: "CalculateAutoSelection",
            I: Kxd,
            O: Zxd,
            kind: ke.Unary
        },
        getAtSymbolSuggestions: {
            name: "GetAtSymbolSuggestions",
            I: $xd,
            O: Hxd,
            kind: ke.Unary
        },
        getCodebaseQuestions: {
            name: "GetCodebaseQuestions",
            I: vbt,
            O: Bxd,
            kind: ke.Unary
        },
        cppEditHistoryAppend: {
            name: "CppEditHistoryAppend",
            I: Jni,
            O: mTd,
            kind: ke.Unary
        },
        devOnlyGetPastRequestIds: {
            name: "DevOnlyGetPastRequestIds",
            I: Lxd,
            O: Fxd,
            kind: ke.Unary
        },
        getFilesForComposer: {
            name: "GetFilesForComposer",
            I: BDd,
            O: UDd,
            kind: ke.Unary
        },
        tryParseTypeScriptTreeSitter: {
            name: "TryParseTypeScriptTreeSitter",
            I: Dxd,
            O: Nxd,
            kind: ke.Unary
        },
        nameTab: {
            name: "NameTab",
            I: fBo,
            O: vBo,
            kind: ke.Unary
        },
        keepTaskList: {
            name: "KeepTaskList",
            I: gxd,
            O: vxd,
            kind: ke.Unary
        },
        isTerminalFinishedV2: {
            name: "IsTerminalFinishedV2",
            I: $Id,
            O: HId,
            kind: ke.Unary
        },
        testModelStatus: {
            name: "TestModelStatus",
            I: _xd,
            O: bxd,
            kind: ke.Unary
        },
        findBugs: {
            name: "FindBugs",
            I: qDd,
            O: zDd,
            kind: ke.Unary
        },
        contextReranking: {
            name: "ContextReranking",
            I: hxd,
            O: pxd,
            kind: ke.Unary
        },
        autoContext: {
            name: "AutoContext",
            I: qId,
            O: VId,
            kind: ke.Unary
        },
        writeGitCommitMessage: {
            name: "WriteGitCommitMessage",
            I: t8o,
            O: KDd,
            kind: ke.Unary
        },
        writeGitBranchName: {
            name: "WriteGitBranchName",
            I: n8o,
            O: YDd,
            kind: ke.Unary
        },
        streamBugBot: {
            name: "StreamBugBot",
            I: Obr,
            O: pBo,
            kind: ke.ServerStreaming
        },
        streamBugBotAgentic: {
            name: "StreamBugBotAgentic",
            I: cii,
            O: mBo,
            kind: ke.BiDiStreaming
        },
        streamBugBotAgenticSSE: {
            name: "StreamBugBotAgenticSSE",
            I: CPe,
            O: mBo,
            kind: ke.ServerStreaming
        },
        streamBugBotAgenticPoll: {
            name: "StreamBugBotAgenticPoll",
            I: Qqe,
            O: Jqe,
            kind: ke.ServerStreaming
        },
        streamUiBestOfNJudge: {
            name: "StreamUiBestOfNJudge",
            I: dxd,
            O: gBo,
            kind: ke.BiDiStreaming
        },
        streamUiBestOfNJudgeSSE: {
            name: "StreamUiBestOfNJudgeSSE",
            I: CPe,
            O: gBo,
            kind: ke.ServerStreaming
        },
        streamUiBestOfNJudgePoll: {
            name: "StreamUiBestOfNJudgePoll",
            I: Qqe,
            O: Jqe,
            kind: ke.ServerStreaming
        },
        checkBugBotPrice: {
            name: "CheckBugBotPrice",
            I: KId,
            O: YId,
            kind: ke.Unary
        },
        checkBugBotTelemetryHealthy: {
            name: "CheckBugBotTelemetryHealthy",
            I: QId,
            O: JId,
            kind: ke.Unary
        },
        recordIdeBugReaction: {
            name: "RecordIdeBugReaction",
            I: exd,
            O: txd,
            kind: ke.Unary
        },
        getSuggestedBugBotIterations: {
            name: "GetSuggestedBugBotIterations",
            I: nxd,
            O: ixd,
            kind: ke.Unary
        },
        getEditorBugbotAutoRunStatus: {
            name: "GetEditorBugbotAutoRunStatus",
            I: rxd,
            O: sxd,
            kind: ke.Unary
        },
        testBidi: {
            name: "TestBidi",
            I: Zmn,
            O: WId,
            kind: ke.BiDiStreaming
        },
        streamDiffReview: {
            name: "StreamDiffReview",
            I: i8o,
            O: e3d,
            kind: ke.ServerStreaming
        },
        streamDiffReviewByFile: {
            name: "StreamDiffReviewByFile",
            I: i8o,
            O: r3d,
            kind: ke.ServerStreaming
        },
        getModelLabels: {
            name: "GetModelLabels",
            I: u3d,
            O: d3d,
            kind: ke.Unary
        },
        getLastDefaultModelNudge: {
            name: "GetLastDefaultModelNudge",
            I: p3d,
            O: m3d,
            kind: ke.Unary
        },
        getDefaultModelNudgeData: {
            name: "GetDefaultModelNudgeData",
            I: r8o,
            O: g3d,
            kind: ke.Unary
        },
        getDefaultModel: {
            name: "GetDefaultModel",
            I: o8o,
            O: v3d,
            kind: ke.Unary
        },
        reportCommitAiAnalytics: {
            name: "ReportCommitAiAnalytics",
            I: w3d,
            O: C3d,
            kind: ke.Unary
        },
        testBedrockCredentials: {
            name: "TestBedrockCredentials",
            I: S3d,
            O: k3d,
            kind: ke.Unary
        },
        reportAiCodeChangeMetrics: {
            name: "ReportAiCodeChangeMetrics",
            I: T3d,
            O: E3d,
            kind: ke.Unary
        },
        reportProcessMetrics: {
            name: "ReportProcessMetrics",
            I: I3d,
            O: A3d,
            kind: ke.Unary
        },
        reportProcessMetricsV2: {
            name: "ReportProcessMetricsV2",
            I: d8o,
            O: R3d,
            kind: ke.Unary
        },
        reportSandProcessMetrics: {
            name: "ReportSandProcessMetrics",
            I: P3d,
            O: D3d,
            kind: ke.Unary
        },
        reportClientNumericMetrics: {
            name: "ReportClientNumericMetrics",
            I: N3d,
            O: L3d,
            kind: ke.Unary
        },
        potentiallyGenerateMemory: {
            name: "PotentiallyGenerateMemory",
            I: O3d,
            O: F3d,
            kind: ke.Unary
        },
        knowledgeBaseAdd: {
            name: "KnowledgeBaseAdd",
            I: B3d,
            O: U3d,
            kind: ke.Unary
        },
        knowledgeBaseList: {
            name: "KnowledgeBaseList",
            I: G3d,
            O: q3d,
            kind: ke.Unary
        },
        knowledgeBaseRemove: {
            name: "KnowledgeBaseRemove",
            I: j3d,
            O: $3d,
            kind: ke.Unary
        },
        knowledgeBaseUpdate: {
            name: "KnowledgeBaseUpdate",
            I: H3d,
            O: W3d,
            kind: ke.Unary
        },
        fetchRelevantKnowledgeForConversation: {
            name: "FetchRelevantKnowledgeForConversation",
            I: V3d,
            O: K3d,
            kind: ke.Unary
        },
        inferBackgroundComposerScripts: {
            name: "InferBackgroundComposerScripts",
            I: Y3d,
            O: Z3d,
            kind: ke.Unary
        },
        getBackgroundComposerFeedbackLink: {
            name: "GetBackgroundComposerFeedbackLink",
            I: J3d,
            O: eNd,
            kind: ke.Unary
        },
        getUsableModels: {
            name: "GetUsableModels",
            I: N7a,
            O: L7a,
            kind: ke.Unary
        },
        getDefaultModelForCli: {
            name: "GetDefaultModelForCli",
            I: O7a,
            O: F7a,
            kind: ke.Unary
        },
        streamComposerEnhancer: {
            name: "StreamComposerEnhancer",
            I: jDd,
            O: e8o,
            kind: ke.BiDiStreaming
        },
        streamComposerEnhancerSSE: {
            name: "StreamComposerEnhancerSSE",
            I: CPe,
            O: e8o,
            kind: ke.ServerStreaming
        },
        streamComposerEnhancerPoll: {
            name: "StreamComposerEnhancerPoll",
            I: Qqe,
            O: Jqe,
            kind: ke.ServerStreaming
        },
        streamStt: {
            name: "StreamStt",
            I: hii,
            O: f8o,
            kind: ke.BiDiStreaming
        },
        streamSttSSE: {
            name: "StreamSttSSE",
            I: CPe,
            O: f8o,
            kind: ke.ServerStreaming
        },
        streamSttPoll: {
            name: "StreamSttPoll",
            I: Qqe,
            O: Jqe,
            kind: ke.ServerStreaming
        },
        transcribeAudio: {
            name: "TranscribeAudio",
            I: rNd,
            O: sNd,
            kind: ke.Unary
        },
        llmGatewayConnectionTester: {
            name: "LlmGatewayConnectionTester",
            I: wxd,
            O: Cxd,
            kind: ke.Unary
        },
        testTeamInferenceHookConnection: {
            name: "TestTeamInferenceHookConnection",
            I: Txd,
            O: Ixd,
            kind: ke.Unary
        },
        textToSpeech: {
            name: "TextToSpeech",
            I: v8o,
            O: oNd,
            kind: ke.Unary
        },
        mintRealtimeVoiceSecret: {
            name: "MintRealtimeVoiceSecret",
            I: aNd,
            O: lNd,
            kind: ke.Unary
        },
        setRealtimeVoice: {
            name: "SetRealtimeVoice",
            I: cNd,
            O: uNd,
            kind: ke.Unary
        },
        getRealtimeVoice: {
            name: "GetRealtimeVoice",
            I: dNd,
            O: hNd,
            kind: ke.Unary
        },
        nameAgent: {
            name: "NameAgent",
            I: A7a,
            O: R7a,
            kind: ke.Unary
        },
        evaluatePromptHook: {
            name: "EvaluatePromptHook",
            I: _Bo,
            O: xxd,
            kind: ke.Unary
        },
        computerUseDecideNextAction: {
            name: "ComputerUseDecideNextAction",
            I: Pxd,
            O: Mxd,
            kind: ke.Unary
        },
        getCloudSetupBlockers: {
            name: "GetCloudSetupBlockers",
            I: b3d,
            O: y3d,
            kind: ke.Unary
        }
    }
};

}
