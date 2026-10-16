import { Cso, Eso, Tso, aUe, bso, xso, yso } from "./agent_service_pb.js";
import { $0d, $1d, $Cd, $Ed, $Td, $wd, A0d, A1d, AEd, AId, ATd, Akd, B0d, B1d, BCd, BEd, Bio, Bwd, Bxd, C1d, CCd, CId, CLn, CTd, Cio, Ckd, Cxd, D1d, DId, DTd, Dwd, Dxd, E0d, EA, ECd, ETd, Eio, Ekd, F0d, F1d, FCd, FTd, Fkd, Fxd, G0d, G1d, Gkd, Gwd, Gxd, H0d, H1d, HEd, Hkd, Hwd, Hxd, I1d, IEd, IId, Ikd, Ixd, JTd, Jwd, Jxd, K1d, KCd, Kio, Kkd, Kwd, Kxd, L0d, LEd, LId, Lxd, M1d, MEd, MId, Mwd, N0d, N1d, NEd, NId, NJe, NTd, Nio, Nkd, Nxd, O0d, O1d, OEd, OId, OTd, Oio, Okd, PEd, PId, Pio, Pxd, Qio, Qkd, Qwd, R0d, R1d, REd, RId, RTd, S0d, S1d, SCd, SEd, SId, STd, Sio, Skd, Swd, Sxd, T0d, T1d, TTd, Tkd, U0d, UTd, Uio, Ukd, Uwd, Uxd, V1d, VTd, Vwd, Vxd, W0d, WCd, WEd, WTd, Wio, Wkd, X1d, XTd, Xio, Xwd, Xxd, Y1d, YCd, Yio, Ykd, Ywd, Yxd, Zkd, Zwd, Zxd, _0d, _1d, _Cd, _Ed, _Id, _Td, _io, _kd, _wd, _xd, aCd, aId, aTd, aio, akd, awd, axd, b1d, bCd, bEd, bId, bio, bkd, bxd, cCd, cId, cio, ckd, cro, cwd, cxd, d0d, d1d, dCd, dEd, dId, dkd, dwd, eCd, eEd, eId, exd, f1d, fCd, fEd, fio, fxd, g0d, g1d, gCd, gEd, gId, gkd, gwd, gxd, hCd, hEd, hId, hTd, hio, hkd, hwd, iCd, iId, iTd, iro, iwd, ixd, j1d, jCd, jTd, jxd, k0d, k1d, kCd, kio, kkd, kwd, l1d, lCd, lEd, lId, lio, lkd, lro, lxd, m0d, m1d, mCd, mEd, mId, mTd, mwd, nCd, nTd, nio, nwd, nxd, oCd, oEd, oId, oTd, oio, okd, p0d, p1d, pCd, pEd, pId, pTd, pkd, q1d, qCd, qio, qwd, qxd, rCd, rId, rTd, rWi, rio, rwd, rxd, s0d, sCd, sId, sTd, sWi, sio, swd, sxd, tCd, tId, tPe, tio, twd, u0d, u1d, uCd, uEd, uId, ukd, uxd, v0d, vCd, vId, vTd, vio, vkd, w1d, wCd, wId, wTd, wio, wkd, xCd, xEd, xLn, xio, xkd, yEd, yTd, ykd, yxd, z1d, zCd, zio, zkd, zwd, zxd } from "./aiserver_pb.js";
import { EPe, E_e, QWt, xPe } from "./bidi_pb.js";
import { RHi, wHt } from "./bugbot_pb.js";
import { Hu, qjs, zjs } from "./chat_pb.js";
import { Cno, D_d, Jbd, MHi, PHi, R_d, UU, __d, eyd, fno, g_d, mLn, m_d, p_d, tyd, w_d, wno } from "./cpp_pb.js";
import { LDu, PDu, hUi } from "./docs_pb.js";
import { fQd, jDv, vQd } from "./fastpreviews_pb.js";
import { VDv, hQd } from "./inline_gpt4_pb.js";
import { bi } from "./protobuf.js";
import { ae } from "./service-type.js";
import { Bmu, Cmu, Emu, Fmu, Gmu, Imu, Nmu, Omu, Tmu, Vmu, Xmu, Zmu, _3i, b3i, f3i, lBs, ngu, v3i, xmu } from "./symbolic_context_pb.js";
import { SQd, ZWt, yQd } from "./telemetry_pb.js";
import { x } from "./tslib.es6.js";
var b1e;
export { b1e };
var __wakaru_IPe_initialized = false;
export function IPe() {
if (__wakaru_IPe_initialized) return;
__wakaru_IPe_initialized = true;
"use strict";
x(), EA(), bi(), Hu(), VDv(), jDv(), UU(), ngu(), hUi(), ZWt(), wHt(), QWt(), aUe(), b1e = {
    typeName: "aiserver.v1.AiService",
    methods: {
        serverTime: {
            name: "ServerTime",
            I: l1d,
            O: u1d,
            kind: ae.Unary
        },
        healthCheck: {
            name: "HealthCheck",
            I: Eio,
            O: d1d,
            kind: ae.Unary
        },
        privacyCheck: {
            name: "PrivacyCheck",
            I: p1d,
            O: m1d,
            kind: ae.Unary
        },
        timeLeftHealthCheck: {
            name: "TimeLeftHealthCheck",
            I: Eio,
            O: g1d,
            kind: ae.Unary
        },
        throwErrorCheck: {
            name: "ThrowErrorCheck",
            I: H0d,
            O: W0d,
            kind: ae.Unary
        },
        availableModels: {
            name: "AvailableModels",
            I: Cio,
            O: G0d,
            kind: ae.Unary
        },
        streamChatTryReallyHard: {
            name: "StreamChatTryReallyHard",
            I: NJe,
            O: tPe,
            kind: ae.ServerStreaming
        },
        rerankDocuments: {
            name: "RerankDocuments",
            I: qjs,
            O: zjs,
            kind: ae.Unary
        },
        streamComposer: {
            name: "StreamComposer",
            I: sWi,
            O: tPe,
            kind: ae.ServerStreaming
        },
        streamComposerContext: {
            name: "StreamComposerContext",
            I: kio,
            O: wio,
            kind: ae.ServerStreaming
        },
        warmComposerCache: {
            name: "WarmComposerCache",
            I: sWi,
            O: NTd,
            kind: ae.Unary
        },
        keepComposerCacheWarm: {
            name: "KeepComposerCacheWarm",
            I: yxd,
            O: Sxd,
            kind: ae.Unary
        },
        countTokens: {
            name: "CountTokens",
            I: Dxd,
            O: Pxd,
            kind: ae.Unary
        },
        streamPotentialLocs: {
            name: "StreamPotentialLocs",
            I: oTd,
            O: aTd,
            kind: ae.ServerStreaming
        },
        streamPotentialLocsUnderneath: {
            name: "StreamPotentialLocsUnderneath",
            I: rTd,
            O: sTd,
            kind: ae.ServerStreaming
        },
        streamPotentialLocsInitialQueries: {
            name: "StreamPotentialLocsInitialQueries",
            I: nTd,
            O: iTd,
            kind: ae.ServerStreaming
        },
        getChatTitle: {
            name: "GetChatTitle",
            I: RTd,
            O: DTd,
            kind: ae.Unary
        },
        getCompletion: {
            name: "GetCompletion",
            I: UTd,
            O: $Td,
            kind: ae.Unary
        },
        isolatedTreesitter: {
            name: "IsolatedTreesitter",
            I: vTd,
            O: _Td,
            kind: ae.Unary
        },
        getSimplePrompt: {
            name: "GetSimplePrompt",
            I: Nio,
            O: yTd,
            kind: ae.Unary
        },
        getPassthroughPrompt: {
            name: "GetPassthroughPrompt",
            I: wTd,
            O: CTd,
            kind: ae.Unary
        },
        suggestQuickActions: {
            name: "SuggestQuickActions",
            I: Oio,
            O: STd,
            kind: ae.Unary
        },
        checkLongFilesFit: {
            name: "CheckLongFilesFit",
            I: NJe,
            O: TTd,
            kind: ae.Unary
        },
        getEvaluationPrompt: {
            name: "GetEvaluationPrompt",
            I: ETd,
            O: ATd,
            kind: ae.Unary
        },
        getUserInfo: {
            name: "GetUserInfo",
            I: WTd,
            O: VTd,
            kind: ae.Unary
        },
        streamChat: {
            name: "StreamChat",
            I: NJe,
            O: tPe,
            kind: ae.ServerStreaming
        },
        streamChatWeb: {
            name: "StreamChatWeb",
            I: NJe,
            O: tPe,
            kind: ae.ServerStreaming
        },
        warmChatCache: {
            name: "WarmChatCache",
            I: OTd,
            O: FTd,
            kind: ae.Unary
        },
        streamEdit: {
            name: "StreamEdit",
            I: rWi,
            O: tPe,
            kind: ae.ServerStreaming
        },
        preloadEdit: {
            name: "PreloadEdit",
            I: R1d,
            O: D1d,
            kind: ae.Unary
        },
        streamFastEdit: {
            name: "StreamFastEdit",
            I: I1d,
            O: A1d,
            kind: ae.ServerStreaming
        },
        streamGenerate: {
            name: "StreamGenerate",
            I: xio,
            O: tPe,
            kind: ae.ServerStreaming
        },
        streamInlineLongCompletion: {
            name: "StreamInlineLongCompletion",
            I: hQd,
            O: tPe,
            kind: ae.ServerStreaming
        },
        slashEdit: {
            name: "SlashEdit",
            I: k1d,
            O: w1d,
            kind: ae.ServerStreaming
        },
        slashEditFollowUpWithPreviousEdits: {
            name: "SlashEditFollowUpWithPreviousEdits",
            I: C1d,
            O: T1d,
            kind: ae.ServerStreaming
        },
        streamAiPreviews: {
            name: "StreamAiPreviews",
            I: fQd,
            O: vQd,
            kind: ae.ServerStreaming
        },
        shouldTurnOnCppOnboarding: {
            name: "ShouldTurnOnCppOnboarding",
            I: p_d,
            O: m_d,
            kind: ae.Unary
        },
        getComposerAutocomplete: {
            name: "GetComposerAutocomplete",
            I: tio,
            O: nio,
            kind: ae.Unary
        },
        streamReview: {
            name: "StreamReview",
            I: f1d,
            O: S1d,
            kind: ae.ServerStreaming
        },
        streamReviewChat: {
            name: "StreamReviewChat",
            I: _1d,
            O: b1d,
            kind: ae.ServerStreaming
        },
        checkQueuePosition: {
            name: "CheckQueuePosition",
            I: Pio,
            O: mTd,
            kind: ae.Unary
        },
        checkUsageBasedPrice: {
            name: "CheckUsageBasedPrice",
            I: hTd,
            O: pTd,
            kind: ae.Unary
        },
        doThisForMeCheck: {
            name: "DoThisForMeCheck",
            I: jTd,
            O: Bio,
            kind: ae.Unary
        },
        streamDoThisForMe: {
            name: "StreamDoThisForMe",
            I: XTd,
            O: JTd,
            kind: ae.ServerStreaming
        },
        streamChatToolformer: {
            name: "StreamChatToolformer",
            I: NJe,
            O: Uio,
            kind: ae.ServerStreaming
        },
        streamChatToolformerContinue: {
            name: "StreamChatToolformerContinue",
            I: eEd,
            O: Uio,
            kind: ae.ServerStreaming
        },
        pushAiThought: {
            name: "PushAiThought",
            I: oEd,
            O: lEd,
            kind: ae.Unary
        },
        checkDoableAsTask: {
            name: "CheckDoableAsTask",
            I: uEd,
            O: dEd,
            kind: ae.Unary
        },
        reportGroundTruthCandidate: {
            name: "ReportGroundTruthCandidate",
            I: ixd,
            O: rxd,
            kind: ae.Unary
        },
        reportCmdKFate: {
            name: "ReportCmdKFate",
            I: sxd,
            O: axd,
            kind: ae.Unary
        },
        showWelcomeScreen: {
            name: "ShowWelcomeScreen",
            I: uCd,
            O: dCd,
            kind: ae.Unary
        },
        interfaceAgentInit: {
            name: "InterfaceAgentInit",
            I: hEd,
            O: pEd,
            kind: ae.Unary
        },
        streamInterfaceAgentStatus: {
            name: "StreamInterfaceAgentStatus",
            I: mEd,
            O: gEd,
            kind: ae.ServerStreaming
        },
        taskGetInterfaceAgentStatus: {
            name: "TaskGetInterfaceAgentStatus",
            I: fEd,
            O: _Ed,
            kind: ae.ServerStreaming
        },
        updateVscodeProfile: {
            name: "UpdateVscodeProfile",
            I: hio,
            O: $wd,
            kind: ae.Unary
        },
        taskInit: {
            name: "TaskInit",
            I: bEd,
            O: yEd,
            kind: ae.Unary
        },
        taskPause: {
            name: "TaskPause",
            I: IEd,
            O: AEd,
            kind: ae.Unary
        },
        taskInfo: {
            name: "TaskInfo",
            I: xEd,
            O: Wio,
            kind: ae.Unary
        },
        taskStreamLog: {
            name: "TaskStreamLog",
            I: SEd,
            O: REd,
            kind: ae.ServerStreaming
        },
        taskSendMessage: {
            name: "TaskSendMessage",
            I: LEd,
            O: NEd,
            kind: ae.Unary
        },
        taskProvideResult: {
            name: "TaskProvideResult",
            I: MEd,
            O: PEd,
            kind: ae.Unary
        },
        createExperimentalIndex: {
            name: "CreateExperimentalIndex",
            I: Cmu,
            O: Tmu,
            kind: ae.Unary
        },
        listExperimentalIndexFiles: {
            name: "ListExperimentalIndexFiles",
            I: Emu,
            O: xmu,
            kind: ae.Unary
        },
        listenExperimentalIndex: {
            name: "ListenExperimentalIndex",
            I: lBs,
            O: Imu,
            kind: ae.ServerStreaming
        },
        registerFileToIndex: {
            name: "RegisterFileToIndex",
            I: f3i,
            O: b3i,
            kind: ae.Unary
        },
        setupIndexDependencies: {
            name: "SetupIndexDependencies",
            I: Nmu,
            O: Omu,
            kind: ae.Unary
        },
        computeIndexTopoSort: {
            name: "ComputeIndexTopoSort",
            I: Fmu,
            O: Bmu,
            kind: ae.Unary
        },
        streamChatDeepContext: {
            name: "StreamChatDeepContext",
            I: u0d,
            O: d0d,
            kind: ae.ServerStreaming
        },
        chooseCodeReferences: {
            name: "ChooseCodeReferences",
            I: v3i,
            O: b3i,
            kind: ae.Unary
        },
        registerCodeReferences: {
            name: "RegisterCodeReferences",
            I: Gmu,
            O: Vmu,
            kind: ae.Unary
        },
        extractPaths: {
            name: "ExtractPaths",
            I: Xmu,
            O: Zmu,
            kind: ae.Unary
        },
        summarizeWithReferences: {
            name: "SummarizeWithReferences",
            I: _3i,
            O: b3i,
            kind: ae.Unary
        },
        documentationQuery: {
            name: "DocumentationQuery",
            I: PDu,
            O: LDu,
            kind: ae.Unary
        },
        availableDocs: {
            name: "AvailableDocs",
            I: p0d,
            O: m0d,
            kind: ae.Unary
        },
        runWebSearch: {
            name: "RunWebSearch",
            I: g0d,
            O: v0d,
            kind: ae.Unary
        },
        runWebFetch: {
            name: "RunWebFetch",
            I: _0d,
            O: S0d,
            kind: ae.Unary
        },
        runGenerateImage: {
            name: "RunGenerateImage",
            I: k0d,
            O: T0d,
            kind: ae.Unary
        },
        runGenerateVideo: {
            name: "RunGenerateVideo",
            I: E0d,
            O: A0d,
            kind: ae.Unary
        },
        runXSearch: {
            name: "RunXSearch",
            I: R0d,
            O: L0d,
            kind: ae.Unary
        },
        classifyAgentAutoReview: {
            name: "ClassifyAgentAutoReview",
            I: N0d,
            O: O0d,
            kind: ae.Unary
        },
        runDescribeImage: {
            name: "RunDescribeImage",
            I: F0d,
            O: B0d,
            kind: ae.Unary
        },
        detectShellHang: {
            name: "DetectShellHang",
            I: U0d,
            O: $0d,
            kind: ae.Unary
        },
        reportFeedback: {
            name: "ReportFeedback",
            I: OEd,
            O: BEd,
            kind: ae.Unary
        },
        reportBug: {
            name: "ReportBug",
            I: $Ed,
            O: HEd,
            kind: ae.Unary
        },
        streamChatContext: {
            name: "StreamChatContext",
            I: kio,
            O: wio,
            kind: ae.ServerStreaming
        },
        generateTldr: {
            name: "GenerateTldr",
            I: zCd,
            O: KCd,
            kind: ae.Unary
        },
        taskStreamChatContext: {
            name: "TaskStreamChatContext",
            I: YCd,
            O: s0d,
            kind: ae.ServerStreaming
        },
        rerankResults: {
            name: "RerankResults",
            I: jCd,
            O: qCd,
            kind: ae.Unary
        },
        modelQuery: {
            name: "ModelQuery",
            I: Sio,
            O: $Cd,
            kind: ae.Unary
        },
        modelQueryV2: {
            name: "ModelQueryV2",
            I: Sio,
            O: WCd,
            kind: ae.ServerStreaming
        },
        intentPrediction: {
            name: "IntentPrediction",
            I: ECd,
            O: xCd,
            kind: ae.Unary
        },
        getChatSuggestions: {
            name: "GetChatSuggestions",
            I: okd,
            O: akd,
            kind: ae.Unary
        },
        getUserInstructions: {
            name: "GetUserInstructions",
            I: ckd,
            O: lkd,
            kind: ae.Unary
        },
        streamCursorTutor: {
            name: "StreamCursorTutor",
            I: FCd,
            O: BCd,
            kind: ae.ServerStreaming
        },
        checkFeatureStatus: {
            name: "CheckFeatureStatus",
            I: fio,
            O: vio,
            kind: ae.Unary
        },
        checkFeaturesStatus: {
            name: "CheckFeaturesStatus",
            I: _Cd,
            O: bCd,
            kind: ae.Unary
        },
        checkFeatureStatusUnauthenticated: {
            name: "CheckFeatureStatusUnauthenticated",
            I: fio,
            O: vio,
            kind: ae.Unary
        },
        getEffectiveTokenLimit: {
            name: "GetEffectiveTokenLimit",
            I: SCd,
            O: kCd,
            kind: ae.Unary
        },
        getContextScores: {
            name: "GetContextScores",
            I: eCd,
            O: tCd,
            kind: ae.Unary
        },
        streamCpp: {
            name: "StreamCpp",
            I: MHi,
            O: g_d,
            kind: ae.ServerStreaming
        },
        cppConfig: {
            name: "CppConfig",
            I: PHi,
            O: __d,
            kind: ae.Unary
        },
        cppEditHistoryStatus: {
            name: "CppEditHistoryStatus",
            I: wno,
            O: Cno,
            kind: ae.Unary
        },
        cppAppend: {
            name: "CppAppend",
            I: Jbd,
            O: eyd,
            kind: ae.Unary
        },
        refreshTabContext: {
            name: "RefreshTabContext",
            I: R_d,
            O: D_d,
            kind: ae.Unary
        },
        checkNumberConfig: {
            name: "CheckNumberConfig",
            I: _io,
            O: bio,
            kind: ae.Unary
        },
        checkNumberConfigUnauthenticated: {
            name: "CheckNumberConfigUnauthenticated",
            I: _io,
            O: bio,
            kind: ae.Unary
        },
        checkNumberConfigs: {
            name: "CheckNumberConfigs",
            I: wCd,
            O: CCd,
            kind: ae.Unary
        },
        streamTerminalAutocomplete: {
            name: "StreamTerminalAutocomplete",
            I: j1d,
            O: X1d,
            kind: ae.ServerStreaming
        },
        streamPseudocodeGenerator: {
            name: "StreamPseudocodeGenerator",
            I: q1d,
            O: z1d,
            kind: ae.ServerStreaming
        },
        streamPseudocodeMapper: {
            name: "StreamPseudocodeMapper",
            I: K1d,
            O: Y1d,
            kind: ae.ServerStreaming
        },
        acknowledgeGracePeriodDisclaimer: {
            name: "AcknowledgeGracePeriodDisclaimer",
            I: ykd,
            O: Skd,
            kind: ae.Unary
        },
        streamAiLintBug: {
            name: "StreamAiLintBug",
            I: M1d,
            O: N1d,
            kind: ae.ServerStreaming
        },
        streamAiCursorHelp: {
            name: "StreamAiCursorHelp",
            I: G1d,
            O: V1d,
            kind: ae.ServerStreaming
        },
        logUserLintReply: {
            name: "LogUserLintReply",
            I: O1d,
            O: F1d,
            kind: ae.Unary
        },
        logLinterExplicitUserFeedback: {
            name: "LogLinterExplicitUserFeedback",
            I: B1d,
            O: $1d,
            kind: ae.Unary
        },
        streamFixMarkers: {
            name: "StreamFixMarkers",
            I: WEd,
            O: exd,
            kind: ae.ServerStreaming
        },
        reportInlineAction: {
            name: "ReportInlineAction",
            I: yQd,
            O: SQd,
            kind: ae.Unary
        },
        streamPriomptPrompt: {
            name: "StreamPriomptPrompt",
            I: fCd,
            O: vCd,
            kind: ae.ServerStreaming
        },
        streamLint: {
            name: "StreamLint",
            I: nxd,
            O: tPe,
            kind: ae.ServerStreaming
        },
        streamNewLintRule: {
            name: "StreamNewLintRule",
            I: H1d,
            O: tPe,
            kind: ae.ServerStreaming
        },
        aiProject: {
            name: "AiProject",
            I: hCd,
            O: pCd,
            kind: ae.ServerStreaming
        },
        toCamelCase: {
            name: "ToCamelCase",
            I: mCd,
            O: gCd,
            kind: ae.Unary
        },
        reportGenerationFeedback: {
            name: "ReportGenerationFeedback",
            I: nCd,
            O: iCd,
            kind: ae.Unary
        },
        reportAgentFeedback: {
            name: "ReportAgentFeedback",
            I: rCd,
            O: sCd,
            kind: ae.Unary
        },
        reportAgentMessageFeedback: {
            name: "ReportAgentMessageFeedback",
            I: oCd,
            O: aCd,
            kind: ae.Unary
        },
        reportAutoRoutingResultFeedback: {
            name: "ReportAutoRoutingResultFeedback",
            I: cCd,
            O: lCd,
            kind: ae.Unary
        },
        getThoughtAnnotation: {
            name: "GetThoughtAnnotation",
            I: Uwd,
            O: Hwd,
            kind: ae.Unary
        },
        streamWebCmdKV1: {
            name: "StreamWebCmdKV1",
            I: Qwd,
            O: Jwd,
            kind: ae.ServerStreaming
        },
        streamNextCursorPrediction: {
            name: "StreamNextCursorPrediction",
            I: Xwd,
            O: Zwd,
            kind: ae.ServerStreaming
        },
        isCursorPredictionEnabled: {
            name: "IsCursorPredictionEnabled",
            I: Kwd,
            O: Ywd,
            kind: ae.Unary
        },
        getCppEditClassification: {
            name: "GetCppEditClassification",
            I: fno,
            O: w_d,
            kind: ae.Unary
        },
        getTerminalCompletion: {
            name: "GetTerminalCompletion",
            I: mwd,
            O: gwd,
            kind: ae.Unary
        },
        takeNotesOnCommitDiff: {
            name: "TakeNotesOnCommitDiff",
            I: qwd,
            O: zwd,
            kind: ae.Unary
        },
        bulkEmbed: {
            name: "BulkEmbed",
            I: Gwd,
            O: Vwd,
            kind: ae.Unary
        },
        backgroundCmdKEval: {
            name: "BackgroundCmdKEval",
            I: Mwd,
            O: Bwd,
            kind: ae.ServerStreaming
        },
        backgroundCmdK: {
            name: "BackgroundCmdK",
            I: kwd,
            O: Dwd,
            kind: ae.ServerStreaming
        },
        calculateAutoSelection: {
            name: "CalculateAutoSelection",
            I: _wd,
            O: Swd,
            kind: ae.Unary
        },
        getAtSymbolSuggestions: {
            name: "GetAtSymbolSuggestions",
            I: dwd,
            O: hwd,
            kind: ae.Unary
        },
        getCodebaseQuestions: {
            name: "GetCodebaseQuestions",
            I: NJe,
            O: cwd,
            kind: ae.Unary
        },
        cppEditHistoryAppend: {
            name: "CppEditHistoryAppend",
            I: mLn,
            O: tyd,
            kind: ae.Unary
        },
        devOnlyGetPastRequestIds: {
            name: "DevOnlyGetPastRequestIds",
            I: swd,
            O: awd,
            kind: ae.Unary
        },
        getFilesForComposer: {
            name: "GetFilesForComposer",
            I: cxd,
            O: lxd,
            kind: ae.Unary
        },
        tryParseTypeScriptTreeSitter: {
            name: "TryParseTypeScriptTreeSitter",
            I: iwd,
            O: rwd,
            kind: ae.Unary
        },
        nameTab: {
            name: "NameTab",
            I: aio,
            O: cio,
            kind: ae.Unary
        },
        keepTaskList: {
            name: "KeepTaskList",
            I: Ukd,
            O: Hkd,
            kind: ae.Unary
        },
        isTerminalFinishedV2: {
            name: "IsTerminalFinishedV2",
            I: ukd,
            O: dkd,
            kind: ae.Unary
        },
        testModelStatus: {
            name: "TestModelStatus",
            I: Wkd,
            O: Gkd,
            kind: ae.Unary
        },
        findBugs: {
            name: "FindBugs",
            I: gxd,
            O: fxd,
            kind: ae.Unary
        },
        contextReranking: {
            name: "ContextReranking",
            I: Okd,
            O: Fkd,
            kind: ae.Unary
        },
        autoContext: {
            name: "AutoContext",
            I: gkd,
            O: vkd,
            kind: ae.Unary
        },
        writeGitCommitMessage: {
            name: "WriteGitCommitMessage",
            I: zio,
            O: _xd,
            kind: ae.Unary
        },
        writeGitBranchName: {
            name: "WriteGitBranchName",
            I: Kio,
            O: bxd,
            kind: ae.Unary
        },
        streamBugBot: {
            name: "StreamBugBot",
            I: RHi,
            O: rio,
            kind: ae.ServerStreaming
        },
        streamBugBotAgentic: {
            name: "StreamBugBotAgentic",
            I: CLn,
            O: sio,
            kind: ae.BiDiStreaming
        },
        streamBugBotAgenticSSE: {
            name: "StreamBugBotAgenticSSE",
            I: E_e,
            O: sio,
            kind: ae.ServerStreaming
        },
        streamBugBotAgenticPoll: {
            name: "StreamBugBotAgenticPoll",
            I: EPe,
            O: xPe,
            kind: ae.ServerStreaming
        },
        streamUiBestOfNJudge: {
            name: "StreamUiBestOfNJudge",
            I: Nkd,
            O: oio,
            kind: ae.BiDiStreaming
        },
        streamUiBestOfNJudgeSSE: {
            name: "StreamUiBestOfNJudgeSSE",
            I: E_e,
            O: oio,
            kind: ae.ServerStreaming
        },
        streamUiBestOfNJudgePoll: {
            name: "StreamUiBestOfNJudgePoll",
            I: EPe,
            O: xPe,
            kind: ae.ServerStreaming
        },
        checkBugBotPrice: {
            name: "CheckBugBotPrice",
            I: _kd,
            O: bkd,
            kind: ae.Unary
        },
        checkBugBotTelemetryHealthy: {
            name: "CheckBugBotTelemetryHealthy",
            I: kkd,
            O: wkd,
            kind: ae.Unary
        },
        recordIdeBugReaction: {
            name: "RecordIdeBugReaction",
            I: Ckd,
            O: Tkd,
            kind: ae.Unary
        },
        getSuggestedBugBotIterations: {
            name: "GetSuggestedBugBotIterations",
            I: Ekd,
            O: xkd,
            kind: ae.Unary
        },
        getEditorBugbotAutoRunStatus: {
            name: "GetEditorBugbotAutoRunStatus",
            I: Ikd,
            O: Akd,
            kind: ae.Unary
        },
        testBidi: {
            name: "TestBidi",
            I: hkd,
            O: pkd,
            kind: ae.BiDiStreaming
        },
        streamDiffReview: {
            name: "StreamDiffReview",
            I: Yio,
            O: Cxd,
            kind: ae.ServerStreaming
        },
        streamDiffReviewByFile: {
            name: "StreamDiffReviewByFile",
            I: Yio,
            O: Ixd,
            kind: ae.ServerStreaming
        },
        getModelLabels: {
            name: "GetModelLabels",
            I: Lxd,
            O: Nxd,
            kind: ae.Unary
        },
        getLastDefaultModelNudge: {
            name: "GetLastDefaultModelNudge",
            I: Fxd,
            O: Bxd,
            kind: ae.Unary
        },
        getDefaultModelNudgeData: {
            name: "GetDefaultModelNudgeData",
            I: Xio,
            O: Uxd,
            kind: ae.Unary
        },
        getDefaultModel: {
            name: "GetDefaultModel",
            I: Qio,
            O: Hxd,
            kind: ae.Unary
        },
        reportCommitAiAnalytics: {
            name: "ReportCommitAiAnalytics",
            I: zxd,
            O: Kxd,
            kind: ae.Unary
        },
        testBedrockCredentials: {
            name: "TestBedrockCredentials",
            I: jxd,
            O: qxd,
            kind: ae.Unary
        },
        reportAiCodeChangeMetrics: {
            name: "ReportAiCodeChangeMetrics",
            I: Yxd,
            O: Xxd,
            kind: ae.Unary
        },
        reportProcessMetrics: {
            name: "ReportProcessMetrics",
            I: Zxd,
            O: Jxd,
            kind: ae.Unary
        },
        reportProcessMetricsV2: {
            name: "ReportProcessMetricsV2",
            I: iro,
            O: eId,
            kind: ae.Unary
        },
        reportSandProcessMetrics: {
            name: "ReportSandProcessMetrics",
            I: tId,
            O: iId,
            kind: ae.Unary
        },
        reportClientNumericMetrics: {
            name: "ReportClientNumericMetrics",
            I: rId,
            O: sId,
            kind: ae.Unary
        },
        potentiallyGenerateMemory: {
            name: "PotentiallyGenerateMemory",
            I: oId,
            O: aId,
            kind: ae.Unary
        },
        knowledgeBaseAdd: {
            name: "KnowledgeBaseAdd",
            I: cId,
            O: lId,
            kind: ae.Unary
        },
        knowledgeBaseList: {
            name: "KnowledgeBaseList",
            I: mId,
            O: gId,
            kind: ae.Unary
        },
        knowledgeBaseRemove: {
            name: "KnowledgeBaseRemove",
            I: uId,
            O: dId,
            kind: ae.Unary
        },
        knowledgeBaseUpdate: {
            name: "KnowledgeBaseUpdate",
            I: hId,
            O: pId,
            kind: ae.Unary
        },
        fetchRelevantKnowledgeForConversation: {
            name: "FetchRelevantKnowledgeForConversation",
            I: vId,
            O: _Id,
            kind: ae.Unary
        },
        inferBackgroundComposerScripts: {
            name: "InferBackgroundComposerScripts",
            I: bId,
            O: SId,
            kind: ae.Unary
        },
        getBackgroundComposerFeedbackLink: {
            name: "GetBackgroundComposerFeedbackLink",
            I: wId,
            O: CId,
            kind: ae.Unary
        },
        getUsableModels: {
            name: "GetUsableModels",
            I: Cso,
            O: Tso,
            kind: ae.Unary
        },
        getDefaultModelForCli: {
            name: "GetDefaultModelForCli",
            I: Eso,
            O: xso,
            kind: ae.Unary
        },
        streamComposerEnhancer: {
            name: "StreamComposerEnhancer",
            I: uxd,
            O: qio,
            kind: ae.BiDiStreaming
        },
        streamComposerEnhancerSSE: {
            name: "StreamComposerEnhancerSSE",
            I: E_e,
            O: qio,
            kind: ae.ServerStreaming
        },
        streamComposerEnhancerPoll: {
            name: "StreamComposerEnhancerPoll",
            I: EPe,
            O: xPe,
            kind: ae.ServerStreaming
        },
        streamStt: {
            name: "StreamStt",
            I: xLn,
            O: cro,
            kind: ae.BiDiStreaming
        },
        streamSttSSE: {
            name: "StreamSttSSE",
            I: E_e,
            O: cro,
            kind: ae.ServerStreaming
        },
        streamSttPoll: {
            name: "StreamSttPoll",
            I: EPe,
            O: xPe,
            kind: ae.ServerStreaming
        },
        transcribeAudio: {
            name: "TranscribeAudio",
            I: IId,
            O: AId,
            kind: ae.Unary
        },
        llmGatewayConnectionTester: {
            name: "LlmGatewayConnectionTester",
            I: zkd,
            O: Kkd,
            kind: ae.Unary
        },
        testTeamInferenceHookConnection: {
            name: "TestTeamInferenceHookConnection",
            I: Ykd,
            O: Zkd,
            kind: ae.Unary
        },
        textToSpeech: {
            name: "TextToSpeech",
            I: lro,
            O: RId,
            kind: ae.Unary
        },
        mintRealtimeVoiceSecret: {
            name: "MintRealtimeVoiceSecret",
            I: DId,
            O: MId,
            kind: ae.Unary
        },
        setRealtimeVoice: {
            name: "SetRealtimeVoice",
            I: PId,
            O: LId,
            kind: ae.Unary
        },
        getRealtimeVoice: {
            name: "GetRealtimeVoice",
            I: NId,
            O: OId,
            kind: ae.Unary
        },
        nameAgent: {
            name: "NameAgent",
            I: bso,
            O: yso,
            kind: ae.Unary
        },
        evaluatePromptHook: {
            name: "EvaluatePromptHook",
            I: lio,
            O: Qkd,
            kind: ae.Unary
        },
        computerUseDecideNextAction: {
            name: "ComputerUseDecideNextAction",
            I: twd,
            O: nwd,
            kind: ae.Unary
        },
        getCloudSetupBlockers: {
            name: "GetCloudSetupBlockers",
            I: Gxd,
            O: Vxd,
            kind: ae.Unary
        }
    }
};

}
