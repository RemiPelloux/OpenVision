import { $Se, Aye, Bye, Fye, Gye, HSe, Hye, JSe, Kye, Lye, Oye, Pye, QSe, Qye, Rye, Uye, Vye, Wye, Xye, YSe, ZSe, Zye, awe, aye, cwe, cye, dye, ewe, eye, gye, hye, iwe, iye, lwe, nwe, nye, oye, qSe, qye, rwe, rye, swe, sye, tye, wye, xye, yye, zSe, zye } from "./agent_store_pb.js";
import { $0e, $Ce, $De, $Ee, $Ie, $Me, $Ne, $Pe, $Re, $be, A0e, AAe, ADe, AIe, AMe, ANe, APe, Abe, B0e, B1e, BAe, BCe, BDe, BEe, BIe, BMe, BPe, BRe, Bbe, C0e, CAe, CCe, CEe, CIe, CMe, CNe, CPe, CRe, Cbe, D1e, DAe, DCe, DDe, DEe, DIe, DL, DMe, DNe, DPe, Dbe, ECe, EDe, EIe, EMe, EPe, ERe, Ebe, F1e, FAe, FDe, FEe, FIe, FMe, FPe, FRe, Fbe, G0e, GAe, GCe, GDe, GEe, GMe, GNe, GRe, Gbe, Gf, H0e, H1e, HAe, HCe, HEe, HNe, HPe, Hbe, I0e, IAe, ICe, IDe, IIe, IMe, INe, IPe, Ibe, J0e, J1e, JCe, JEe, JIe, JMe, JPe, Jbe, K0e, K1e, KAe, KCe, KDe, KEe, KL, KMe, KNe, KPe, KRe, Kbe, L0e, L1e, LAe, LCe, LDe, LIe, Lbe, M0e, M1e, MAe, MCe, MDe, MIe, ML, MMe, MNe, MPe, N0e, N1e, NAe, NCe, NDe, NE, NEe, NIe, NMe, NNe, NPe, Nbe, O0e, OAe, OCe, ODe, OIe, OMe, ONe, P0e, P1e, PAe, PCe, PDe, PIe, PMe, PNe, PPe, Pbe, Q0e, Q1e, QAe, QCe, QEe, QIe, QMe, QPe, RAe, RCe, RDe, RIe, RL, RMe, RPe, RRe, SAe, SCe, SDe, SIe, SMe, SNe, SPe, Sbe, TAe, TDe, TEe, TIe, TMe, TPe, Tbe, U1e, UAe, UCe, UDe, UIe, UMe, UNe, UPe, Ube, V0e, VCe, VDe, VEe, VIe, VMe, VNe, VPe, VRe, Vbe, W0e, W1e, WAe, WCe, WDe, WEe, WIe, WMe, WPe, WRe, Wbe, X0e, X1e, XAe, XCe, XEe, XIe, XMe, XNe, XPe, Xbe, Y0e, Y1e, YAe, YCe, YIe, YMe, YPe, Ybe, Z0e, Z1e, ZAe, ZCe, ZEe, ZIe, ZMe, ZPe, Zbe, _0e, _Ae, _De, _Ee, _Ie, _Re, aAe, aDe, aIe, aMe, bAe, bCe, bDe, bIe, bMe, bPe, bRe, bbe, cAe, cEe, cIe, cNe, cbe, dAe, dDe, dEe, dIe, dPe, dRe, dbe, eAe, eCe, eDe, eIe, eMe, eNe, ePe, eRe, ebe, f0e, fAe, fDe, fEe, fIe, fMe, fNe, fRe, fbe, g0e, gAe, gCe, gDe, gEe, gIe, gMe, gNe, gRe, h0e, hAe, hCe, hDe, hEe, hIe, hMe, hNe, hRe, hbe, iAe, iIe, iNe, ibe, j0e, j1e, jAe, jCe, jEe, jNe, jPe, jRe, kAe, kDe, kEe, kMe, kNe, kbe, lAe, lDe, lIe, lNe, lRe, lbe, m0e, mAe, mCe, mDe, mEe, mIe, mMe, mNe, mRe, mbe, nAe, nCe, nIe, nRe, nbe, oDe, oIe, oMe, oNe, obe, pAe, pCe, pDe, pEe, pMe, pNe, pPe, pbe, q0e, qAe, qDe, qEe, qMe, qNe, qPe, qRe, qbe, qu, rCe, rIe, rNe, rRe, sDe, sIe, sNe, sRe, sbe, tAe, tCe, tDe, tMe, tNe, tPe, tRe, tbe, uAe, uCe, uDe, uEe, uIe, uMe, uNe, uPe, uRe, ube, v0e, vAe, vDe, vEe, vIe, vPe, vbe, wAe, wCe, wDe, wEe, wIe, wMe, wPe, wbe, x0e, x1e, xAe, xCe, xDe, xEe, xIe, xMe, xNe, xPe, xRe, xbe, yAe, yCe, yDe, yEe, yIe, yL, yMe, z0e, z1e, zAe, zCe, zEe, zIe, zMe, zNe, zPe, zRe, zbe } from "./background_composer_pb.js";
import { QDe, qat } from "./control_service_pb.js";
import { Sue, _w, fue, kue, uue } from "./dashboard_pb.js";
import { F } from "./protobuf.js";
import { C } from "./service-type.js";
import { h } from "./tslib.es6.js";
var ZDe;
export { ZDe };
var __wakaru_Kat_initialized = false;
export function Kat() {
if (__wakaru_Kat_initialized) return;
__wakaru_Kat_initialized = true;
"use strict";
h(), Gf(), F(), qat(), _w(), lwe(), ZDe = {
    typeName: "aiserver.v1.BackgroundComposerService",
    methods: {
        listBackgroundComposers: {
            name: "ListBackgroundComposers",
            I: RL,
            O: ML,
            kind: C.Unary
        },
        listPrBackgroundComposers: {
            name: "ListPrBackgroundComposers",
            I: wbe,
            O: Ebe,
            kind: C.Unary
        },
        pinBackgroundComposers: {
            name: "PinBackgroundComposers",
            I: ERe,
            O: bRe,
            kind: C.Unary
        },
        unpinBackgroundComposers: {
            name: "UnpinBackgroundComposers",
            I: RRe,
            O: CRe,
            kind: C.Unary
        },
        attachBackgroundComposer: {
            name: "AttachBackgroundComposer",
            I: qRe,
            O: KRe,
            kind: C.ServerStreaming
        },
        streamConversation: {
            name: "StreamConversation",
            I: zRe,
            O: DL,
            kind: C.ServerStreaming
        },
        getLatestAgentConversationState: {
            name: "GetLatestAgentConversationState",
            I: m0e,
            O: h0e,
            kind: C.Unary
        },
        getBlobForAgentKV: {
            name: "GetBlobForAgentKV",
            I: g0e,
            O: f0e,
            kind: C.Unary
        },
        getConversationPage: {
            name: "GetConversationPage",
            I: _0e,
            O: v0e,
            kind: C.Unary
        },
        attachBackgroundComposerLogs: {
            name: "AttachBackgroundComposerLogs",
            I: $Re,
            O: jRe,
            kind: C.ServerStreaming
        },
        attachAgentStartupTrace: {
            name: "AttachAgentStartupTrace",
            I: KNe,
            O: zNe,
            kind: C.ServerStreaming
        },
        startBackgroundComposerFromSnapshot: {
            name: "StartBackgroundComposerFromSnapshot",
            I: qu,
            O: NE,
            kind: C.Unary
        },
        startCloudOnboarding: {
            name: "StartCloudOnboarding",
            I: xRe,
            O: NE,
            kind: C.Unary
        },
        startChangeMonitorOnboarding: {
            name: "StartChangeMonitorOnboarding",
            I: FRe,
            O: NE,
            kind: C.Unary
        },
        startCloudOnboardingHeuristicEnvSetup: {
            name: "StartCloudOnboardingHeuristicEnvSetup",
            I: WRe,
            O: BRe,
            kind: C.Unary
        },
        forkBackgroundComposer: {
            name: "ForkBackgroundComposer",
            I: GRe,
            O: VRe,
            kind: C.Unary
        },
        startSideChatBackgroundComposer: {
            name: "StartSideChatBackgroundComposer",
            I: vbe,
            O: Tbe,
            kind: C.Unary
        },
        listBackgroundComposerChildren: {
            name: "ListBackgroundComposerChildren",
            I: kbe,
            O: Sbe,
            kind: C.Unary
        },
        makePRBackgroundComposer: {
            name: "MakePRBackgroundComposer",
            I: tRe,
            O: nRe,
            kind: C.Unary
        },
        openPRBackgroundComposer: {
            name: "OpenPRBackgroundComposer",
            I: rRe,
            O: sRe,
            kind: C.Unary
        },
        getBackgroundComposerStatus: {
            name: "GetBackgroundComposerStatus",
            I: C0e,
            O: I0e,
            kind: C.Unary
        },
        addAsyncFollowupBackgroundComposer: {
            name: "AddAsyncFollowupBackgroundComposer",
            I: A0e,
            O: M0e,
            kind: C.Unary
        },
        injectBackgroundComposerContext: {
            name: "InjectBackgroundComposerContext",
            I: P0e,
            O: N0e,
            kind: C.Unary
        },
        submitInteractionResponseBackgroundComposer: {
            name: "SubmitInteractionResponseBackgroundComposer",
            I: O0e,
            O: L0e,
            kind: C.Unary
        },
        listPendingFollowups: {
            name: "ListPendingFollowups",
            I: x0e,
            O: W0e,
            kind: C.Unary
        },
        updatePendingFollowup: {
            name: "UpdatePendingFollowup",
            I: B0e,
            O: G0e,
            kind: C.Unary
        },
        deletePendingFollowup: {
            name: "DeletePendingFollowup",
            I: V0e,
            O: $0e,
            kind: C.Unary
        },
        reorderPendingFollowup: {
            name: "ReorderPendingFollowup",
            I: j0e,
            O: H0e,
            kind: C.Unary
        },
        submitPendingFollowupNow: {
            name: "SubmitPendingFollowupNow",
            I: q0e,
            O: K0e,
            kind: C.Unary
        },
        markFollowupEditing: {
            name: "MarkFollowupEditing",
            I: z0e,
            O: Y0e,
            kind: C.Unary
        },
        getCursorServerUrl: {
            name: "GetCursorServerUrl",
            I: Jbe,
            O: Xbe,
            kind: C.Unary
        },
        warmCursorServerDownload: {
            name: "WarmCursorServerDownload",
            I: Zbe,
            O: eRe,
            kind: C.Unary
        },
        preWarmPod: {
            name: "PreWarmPod",
            I: $Ee,
            O: jEe,
            kind: C.Unary
        },
        wakeBackgroundComposer: {
            name: "WakeBackgroundComposer",
            I: HEe,
            O: qEe,
            kind: C.Unary
        },
        pauseBackgroundComposer: {
            name: "PauseBackgroundComposer",
            I: xbe,
            O: Fbe,
            kind: C.Unary
        },
        cancelBackgroundComposerToolCall: {
            name: "CancelBackgroundComposerToolCall",
            I: Wbe,
            O: Bbe,
            kind: C.Unary
        },
        resumeBackgroundComposer: {
            name: "ResumeBackgroundComposer",
            I: zbe,
            O: Ybe,
            kind: C.Unary
        },
        archiveBackgroundComposer: {
            name: "ArchiveBackgroundComposer",
            I: Gbe,
            O: Vbe,
            kind: C.Unary
        },
        archiveRepoBackgroundComposers: {
            name: "ArchiveRepoBackgroundComposers",
            I: $be,
            O: Hbe,
            kind: C.Unary
        },
        deleteBackgroundComposer: {
            name: "DeleteBackgroundComposer",
            I: qbe,
            O: Kbe,
            kind: C.Unary
        },
        getBackgroundComposerInfo: {
            name: "GetBackgroundComposerInfo",
            I: nCe,
            O: uCe,
            kind: C.Unary
        },
        getBackgroundComposerEnvironmentVersion: {
            name: "GetBackgroundComposerEnvironmentVersion",
            I: VIe,
            O: $Ie,
            kind: C.Unary
        },
        getEnvironmentHistory: {
            name: "GetEnvironmentHistory",
            I: zIe,
            O: YIe,
            kind: C.Unary
        },
        getBackgroundComposerTimings: {
            name: "GetBackgroundComposerTimings",
            I: rCe,
            O: mCe,
            kind: C.Unary
        },
        getBackgroundComposerRepositoryInfo: {
            name: "GetBackgroundComposerRepositoryInfo",
            I: pCe,
            O: hCe,
            kind: C.Unary
        },
        getMachine: {
            name: "GetMachine",
            I: gCe,
            O: SCe,
            kind: C.Unary
        },
        listWorkspaceFiles: {
            name: "ListWorkspaceFiles",
            I: yCe,
            O: wCe,
            kind: C.Unary
        },
        desktopLease: {
            name: "DesktopLease",
            I: bCe,
            O: RCe,
            kind: C.Unary
        },
        getMachineResourceUsage: {
            name: "GetMachineResourceUsage",
            I: ECe,
            O: QDe,
            kind: C.Unary
        },
        listDetailedBackgroundComposers: {
            name: "ListDetailedBackgroundComposers",
            I: yL,
            O: bbe,
            kind: C.Unary
        },
        listCloudAgentRunsForDashboard: {
            name: "ListCloudAgentRunsForDashboard",
            I: Cbe,
            O: Ibe,
            kind: C.Unary
        },
        aggregateCloudAgentRunsForDashboard: {
            name: "AggregateCloudAgentRunsForDashboard",
            I: Abe,
            O: Pbe,
            kind: C.Unary
        },
        getCloudAgentRunForDashboard: {
            name: "GetCloudAgentRunForDashboard",
            I: Nbe,
            O: Dbe,
            kind: C.Unary
        },
        listCloudAgentRunEventsForDashboard: {
            name: "ListCloudAgentRunEventsForDashboard",
            I: Lbe,
            O: Ube,
            kind: C.Unary
        },
        listNamedAgents: {
            name: "ListNamedAgents",
            I: lRe,
            O: dRe,
            kind: C.Unary
        },
        listNamedAgentSessions: {
            name: "ListNamedAgentSessions",
            I: uRe,
            O: mRe,
            kind: C.Unary
        },
        listEventSubscriptions: {
            name: "ListEventSubscriptions",
            I: hRe,
            O: gRe,
            kind: C.Unary
        },
        closeEventSubscription: {
            name: "CloseEventSubscription",
            I: fRe,
            O: _Re,
            kind: C.Unary
        },
        getGithubAccessTokenForRepos: {
            name: "GetGithubAccessTokenForRepos",
            I: CCe,
            O: ICe,
            kind: C.Unary
        },
        makeGithubRequest: {
            name: "MakeGithubRequest",
            I: MCe,
            O: PCe,
            kind: C.Unary
        },
        getBackgroundComposerDiffDetails: {
            name: "GetBackgroundComposerDiffDetails",
            I: hbe,
            O: fbe,
            kind: C.Unary
        },
        getOptimizedDiffDetails: {
            name: "GetOptimizedDiffDetails",
            I: N1e,
            O: D1e,
            kind: C.Unary
        },
        getBackgroundComposerChangesHash: {
            name: "GetBackgroundComposerChangesHash",
            I: mbe,
            O: pbe,
            kind: C.Unary
        },
        getBackgroundComposerPullRequest: {
            name: "GetBackgroundComposerPullRequest",
            I: OCe,
            O: LCe,
            kind: C.Unary
        },
        refreshGithubAccessTokenInBackgroundComposer: {
            name: "RefreshGithubAccessTokenInBackgroundComposer",
            I: WEe,
            O: BEe,
            kind: C.Unary
        },
        createBackgroundComposerPod: {
            name: "CreateBackgroundComposerPod",
            I: GEe,
            O: VEe,
            kind: C.Unary
        },
        attachBackgroundComposerPod: {
            name: "AttachBackgroundComposerPod",
            I: KEe,
            O: zEe,
            kind: C.ServerStreaming
        },
        createBackgroundComposerPodSnapshot: {
            name: "CreateBackgroundComposerPodSnapshot",
            I: JEe,
            O: XEe,
            kind: C.Unary
        },
        changeBackgroundComposerSnapshotVisibility: {
            name: "ChangeBackgroundComposerSnapshotVisibility",
            I: QEe,
            O: ZEe,
            kind: C.Unary
        },
        getBackgroundComposerSnapshotInfo: {
            name: "GetBackgroundComposerSnapshotInfo",
            I: ebe,
            O: tbe,
            kind: C.Unary
        },
        listBackgroundComposerSnapshotsByBcId: {
            name: "ListBackgroundComposerSnapshotsByBcId",
            I: nbe,
            O: sbe,
            kind: C.Unary
        },
        listBackgroundComposerSnapshotStatusesByBcIds: {
            name: "ListBackgroundComposerSnapshotStatusesByBcIds",
            I: ibe,
            O: obe,
            kind: C.Unary
        },
        getBackgroundComposerSnapshotState: {
            name: "GetBackgroundComposerSnapshotState",
            I: cbe,
            O: lbe,
            kind: C.Unary
        },
        watchBackgroundComposerSnapshotState: {
            name: "WatchBackgroundComposerSnapshotState",
            I: dbe,
            O: ube,
            kind: C.ServerStreaming
        },
        getBackgroundComposerConversation: {
            name: "GetBackgroundComposerConversation",
            I: NCe,
            O: DCe,
            kind: C.Unary
        },
        renameBackgroundComposer: {
            name: "RenameBackgroundComposer",
            I: x1e,
            O: F1e,
            kind: C.Unary
        },
        saveCloudAgentVoiceCall: {
            name: "SaveCloudAgentVoiceCall",
            I: qDe,
            O: KDe,
            kind: C.Unary
        },
        updateProjectAppearance: {
            name: "UpdateProjectAppearance",
            I: W1e,
            O: B1e,
            kind: C.Unary
        },
        seedStagedProjects: {
            name: "SeedStagedProjects",
            I: j1e,
            O: H1e,
            kind: C.Unary
        },
        listStagedProjects: {
            name: "ListStagedProjects",
            I: K1e,
            O: z1e,
            kind: C.Unary
        },
        dismissStagedProject: {
            name: "DismissStagedProject",
            I: Y1e,
            O: J1e,
            kind: C.Unary
        },
        previewStagedProjects: {
            name: "PreviewStagedProjects",
            I: X1e,
            O: cEe,
            kind: C.Unary
        },
        deleteStagedProjects: {
            name: "DeleteStagedProjects",
            I: Q1e,
            O: Z1e,
            kind: C.Unary
        },
        publishBackgroundComposerTempRepo: {
            name: "PublishBackgroundComposerTempRepo",
            I: dEe,
            O: uEe,
            kind: C.Unary
        },
        reparentBackgroundComposer: {
            name: "ReparentBackgroundComposer",
            I: mEe,
            O: pEe,
            kind: C.Unary
        },
        setWorkerManager: {
            name: "SetWorkerManager",
            I: hEe,
            O: gEe,
            kind: C.Unary
        },
        createProjectWorker: {
            name: "CreateProjectWorker",
            I: fEe,
            O: _Ee,
            kind: C.Unary
        },
        clearWorkerManager: {
            name: "ClearWorkerManager",
            I: vEe,
            O: TEe,
            kind: C.Unary
        },
        listWorkersForManager: {
            name: "ListWorkersForManager",
            I: kEe,
            O: yEe,
            kind: C.Unary
        },
        listProjectSubtrees: {
            name: "ListProjectSubtrees",
            I: wEe,
            O: CEe,
            kind: C.Unary
        },
        streamBackgroundComposerUpdates: {
            name: "StreamBackgroundComposerUpdates",
            I: NEe,
            O: DEe,
            kind: C.ServerStreaming
        },
        updateBackgroundComposerExperimentalModelOptOut: {
            name: "UpdateBackgroundComposerExperimentalModelOptOut",
            I: xEe,
            O: FEe,
            kind: C.Unary
        },
        commitBackgroundComposer: {
            name: "CommitBackgroundComposer",
            I: UCe,
            O: xCe,
            kind: C.Unary
        },
        setPersonalEnvironmentJson: {
            name: "SetPersonalEnvironmentJson",
            I: WCe,
            O: BCe,
            kind: C.Unary
        },
        getPersonalEnvironmentJson: {
            name: "GetPersonalEnvironmentJson",
            I: GCe,
            O: VCe,
            kind: C.Unary
        },
        getEnvironmentJsonCandidates: {
            name: "GetEnvironmentJsonCandidates",
            I: $Ce,
            O: jCe,
            kind: C.Unary
        },
        listPersonalEnvironments: {
            name: "ListPersonalEnvironments",
            I: HCe,
            O: KCe,
            kind: C.Unary
        },
        deletePersonalEnvironmentJson: {
            name: "DeletePersonalEnvironmentJson",
            I: zCe,
            O: YCe,
            kind: C.Unary
        },
        publishEnvironment: {
            name: "PublishEnvironment",
            I: JCe,
            O: XCe,
            kind: C.Unary
        },
        publishPersonalEnvironment: {
            name: "PublishPersonalEnvironment",
            I: QCe,
            O: ZCe,
            kind: C.Unary
        },
        listTeamEnvironments: {
            name: "ListTeamEnvironments",
            I: eIe,
            O: nIe,
            kind: C.Unary
        },
        deleteTeamEnvironment: {
            name: "DeleteTeamEnvironment",
            I: JIe,
            O: XIe,
            kind: C.Unary
        },
        setTeamEnvironmentJson: {
            name: "SetTeamEnvironmentJson",
            I: eAe,
            O: tAe,
            kind: C.Unary
        },
        restoreEnvironmentVersion: {
            name: "RestoreEnvironmentVersion",
            I: QIe,
            O: ZIe,
            kind: C.Unary
        },
        listEnvironments: {
            name: "ListEnvironments",
            I: rIe,
            O: sIe,
            kind: C.Unary
        },
        getEnvironment: {
            name: "GetEnvironment",
            I: iIe,
            O: aIe,
            kind: C.Unary
        },
        renameEnvironment: {
            name: "RenameEnvironment",
            I: oIe,
            O: cIe,
            kind: C.Unary
        },
        migrateEnvironmentToOrigin: {
            name: "MigrateEnvironmentToOrigin",
            I: lIe,
            O: dIe,
            kind: C.Unary
        },
        duplicateEnvironment: {
            name: "DuplicateEnvironment",
            I: uIe,
            O: mIe,
            kind: C.Unary
        },
        listEnvironmentBuilds: {
            name: "ListEnvironmentBuilds",
            I: hIe,
            O: gIe,
            kind: C.Unary
        },
        getEnvironmentActiveBuild: {
            name: "GetEnvironmentActiveBuild",
            I: fIe,
            O: _Ie,
            kind: C.Unary
        },
        getEnvironmentPersistentRecurringBuildFailures: {
            name: "GetEnvironmentPersistentRecurringBuildFailures",
            I: vIe,
            O: TIe,
            kind: C.Unary
        },
        getEnvironmentBuild: {
            name: "GetEnvironmentBuild",
            I: SIe,
            O: yIe,
            kind: C.Unary
        },
        getEnvironmentBuildConfig: {
            name: "GetEnvironmentBuildConfig",
            I: wIe,
            O: EIe,
            kind: C.Unary
        },
        updateEnvironmentBuild: {
            name: "UpdateEnvironmentBuild",
            I: bIe,
            O: RIe,
            kind: C.Unary
        },
        triggerEnvironmentBuild: {
            name: "TriggerEnvironmentBuild",
            I: CIe,
            O: IIe,
            kind: C.Unary
        },
        attachEnvironmentBuildLog: {
            name: "AttachEnvironmentBuildLog",
            I: AIe,
            O: MIe,
            kind: C.ServerStreaming
        },
        cancelEnvironmentBuild: {
            name: "CancelEnvironmentBuild",
            I: PIe,
            O: NIe,
            kind: C.Unary
        },
        getEnvironmentBuildSettings: {
            name: "GetEnvironmentBuildSettings",
            I: DIe,
            O: OIe,
            kind: C.Unary
        },
        updateEnvironmentBuildSettings: {
            name: "UpdateEnvironmentBuildSettings",
            I: LIe,
            O: UIe,
            kind: C.Unary
        },
        resolveOrCreateMultiRepoEnvironment: {
            name: "ResolveOrCreateMultiRepoEnvironment",
            I: xIe,
            O: FIe,
            kind: C.Unary
        },
        resolveOrCreateDraftEnvironment: {
            name: "ResolveOrCreateDraftEnvironment",
            I: WIe,
            O: BIe,
            kind: C.Unary
        },
        snapshotAndSaveEnvironment: {
            name: "SnapshotAndSaveEnvironment",
            I: nAe,
            O: iAe,
            kind: C.Unary
        },
        listReposWithLocalEnvironment: {
            name: "ListReposWithLocalEnvironment",
            I: aAe,
            O: cAe,
            kind: C.Unary
        },
        markBackgroundComposerRead: {
            name: "MarkBackgroundComposerRead",
            I: lAe,
            O: dAe,
            kind: C.Unary
        },
        markBackgroundComposerUnread: {
            name: "MarkBackgroundComposerUnread",
            I: uAe,
            O: mAe,
            kind: C.Unary
        },
        advanceBackgroundComposerReadCursor: {
            name: "AdvanceBackgroundComposerReadCursor",
            I: pAe,
            O: hAe,
            kind: C.Unary
        },
        notifyBackgroundComposerShown: {
            name: "NotifyBackgroundComposerShown",
            I: L1e,
            O: U1e,
            kind: C.Unary
        },
        fetchBackgroundComposer: {
            name: "FetchBackgroundComposer",
            I: gAe,
            O: fAe,
            kind: C.Unary
        },
        getTurnSummaryBackgroundComposer: {
            name: "GetTurnSummaryBackgroundComposer",
            I: _Ae,
            O: vAe,
            kind: C.Unary
        },
        getBackgroundComposerName: {
            name: "GetBackgroundComposerName",
            I: TAe,
            O: kAe,
            kind: C.Unary
        },
        getBackgroundComposerPrompt: {
            name: "GetBackgroundComposerPrompt",
            I: SAe,
            O: yAe,
            kind: C.Unary
        },
        readBinaryFile: {
            name: "ReadBinaryFile",
            I: MAe,
            O: PAe,
            kind: C.Unary
        },
        listBackgroundComposerArtifacts: {
            name: "ListBackgroundComposerArtifacts",
            I: wAe,
            O: bAe,
            kind: C.Unary
        },
        getBackgroundComposerArtifact: {
            name: "GetBackgroundComposerArtifact",
            I: RAe,
            O: CAe,
            kind: C.Unary
        },
        getBackgroundComposerArtifactBytes: {
            name: "GetBackgroundComposerArtifactBytes",
            I: IAe,
            O: AAe,
            kind: C.Unary
        },
        streamBackgroundComposerArtifact: {
            name: "StreamBackgroundComposerArtifact",
            I: NAe,
            O: DAe,
            kind: C.ServerStreaming
        },
        listSharedBackgroundComposerArtifacts: {
            name: "ListSharedBackgroundComposerArtifacts",
            I: OAe,
            O: LAe,
            kind: C.Unary
        },
        shareBackgroundComposerArtifact: {
            name: "ShareBackgroundComposerArtifact",
            I: UAe,
            O: xAe,
            kind: C.Unary
        },
        unshareBackgroundComposerArtifact: {
            name: "UnshareBackgroundComposerArtifact",
            I: FAe,
            O: WAe,
            kind: C.Unary
        },
        getPublicBackgroundComposerArtifact: {
            name: "GetPublicBackgroundComposerArtifact",
            I: BAe,
            O: GAe,
            kind: C.Unary
        },
        updateBackgroundComposerUserSettings: {
            name: "UpdateBackgroundComposerUserSettings",
            I: jAe,
            O: HAe,
            kind: C.Unary
        },
        getBackgroundComposerUserSettings: {
            name: "GetBackgroundComposerUserSettings",
            I: qAe,
            O: KAe,
            kind: C.Unary
        },
        updateBackgroundComposerEnvironment: {
            name: "UpdateBackgroundComposerEnvironment",
            I: M1e,
            O: P1e,
            kind: C.Unary
        },
        getRepositoryBranches: {
            name: "GetRepositoryBranches",
            I: zAe,
            O: YAe,
            kind: C.Unary
        },
        getRepositoryDefaultBranch: {
            name: "GetRepositoryDefaultBranch",
            I: XAe,
            O: QAe,
            kind: C.Unary
        },
        getPullRequestMergeStatus: {
            name: "GetPullRequestMergeStatus",
            I: ZAe,
            O: eMe,
            kind: C.Unary
        },
        getDetailedPullRequestStatus: {
            name: "GetDetailedPullRequestStatus",
            I: tMe,
            O: KL,
            kind: C.Unary
        },
        checkPullRequestMergeability: {
            name: "CheckPullRequestMergeability",
            I: aMe,
            O: oMe,
            kind: C.Unary
        },
        getPullRequestDiscussions: {
            name: "GetPullRequestDiscussions",
            I: uMe,
            O: mMe,
            kind: C.Unary
        },
        getPullRequestCommits: {
            name: "GetPullRequestCommits",
            I: pMe,
            O: hMe,
            kind: C.Unary
        },
        getPullRequestTimelineEvents: {
            name: "GetPullRequestTimelineEvents",
            I: gMe,
            O: fMe,
            kind: C.Unary
        },
        replyToReviewThread: {
            name: "ReplyToReviewThread",
            I: TMe,
            O: kMe,
            kind: C.Unary
        },
        resolveReviewThread: {
            name: "ResolveReviewThread",
            I: SMe,
            O: yMe,
            kind: C.Unary
        },
        unresolveReviewThread: {
            name: "UnresolveReviewThread",
            I: wMe,
            O: EMe,
            kind: C.Unary
        },
        deletePullRequestReviewComment: {
            name: "DeletePullRequestReviewComment",
            I: bMe,
            O: RMe,
            kind: C.Unary
        },
        addPullRequestReviewComment: {
            name: "AddPullRequestReviewComment",
            I: CMe,
            O: IMe,
            kind: C.Unary
        },
        mergePullRequest: {
            name: "MergePullRequest",
            I: AMe,
            O: MMe,
            kind: C.Unary
        },
        enablePullRequestAutoMerge: {
            name: "EnablePullRequestAutoMerge",
            I: PMe,
            O: NMe,
            kind: C.Unary
        },
        disablePullRequestAutoMerge: {
            name: "DisablePullRequestAutoMerge",
            I: DMe,
            O: OMe,
            kind: C.Unary
        },
        convertPullRequestFromDraft: {
            name: "ConvertPullRequestFromDraft",
            I: QMe,
            O: ZMe,
            kind: C.Unary
        },
        updatePullRequestBranch: {
            name: "UpdatePullRequestBranch",
            I: ePe,
            O: tPe,
            kind: C.Unary
        },
        registerPushNotificationToken: {
            name: "RegisterPushNotificationToken",
            I: UMe,
            O: xMe,
            kind: C.Unary
        },
        deletePushNotificationToken: {
            name: "DeletePushNotificationToken",
            I: FMe,
            O: WMe,
            kind: C.Unary
        },
        resolveOriginAgentApproval: {
            name: "ResolveOriginAgentApproval",
            I: BMe,
            O: GMe,
            kind: C.Unary
        },
        getOriginAgentApproval: {
            name: "GetOriginAgentApproval",
            I: VMe,
            O: $Me,
            kind: C.Unary
        },
        syncLiveActivity: {
            name: "SyncLiveActivity",
            I: qMe,
            O: KMe,
            kind: C.Unary
        },
        deleteLiveActivity: {
            name: "DeleteLiveActivity",
            I: zMe,
            O: YMe,
            kind: C.Unary
        },
        verifyBackgroundComposerAccess: {
            name: "VerifyBackgroundComposerAccess",
            I: JMe,
            O: XMe,
            kind: C.Unary
        },
        startSlackStreamingForFollowup: {
            name: "StartSlackStreamingForFollowup",
            I: J0e,
            O: X0e,
            kind: C.Unary
        },
        startGithubStreamingForFollowup: {
            name: "StartGithubStreamingForFollowup",
            I: Q0e,
            O: Z0e,
            kind: C.Unary
        },
        startLinearStreamingForFollowup: {
            name: "StartLinearStreamingForFollowup",
            I: eCe,
            O: tCe,
            kind: C.Unary
        },
        getGithubInstallations: {
            name: "GetGithubInstallations",
            I: uue,
            O: fue,
            kind: C.Unary
        },
        fetchAllInstallationRepos: {
            name: "FetchAllInstallationRepos",
            I: kue,
            O: Sue,
            kind: C.Unary
        },
        getBackgroundComposerVmUsage: {
            name: "GetBackgroundComposerVmUsage",
            I: dPe,
            O: uPe,
            kind: C.Unary
        },
        getCloudAgentDebugDetails: {
            name: "GetCloudAgentDebugDetails",
            I: pPe,
            O: vPe,
            kind: C.Unary
        },
        getCloudAgentMemoryDbLogs: {
            name: "GetCloudAgentMemoryDbLogs",
            I: WPe,
            O: BPe,
            kind: C.Unary
        },
        createAgentShare: {
            name: "CreateAgentShare",
            I: VPe,
            O: $Pe,
            kind: C.Unary
        },
        getAgentSharePreview: {
            name: "GetAgentSharePreview",
            I: jPe,
            O: HPe,
            kind: C.Unary
        },
        listPrivateWorkers: {
            name: "ListPrivateWorkers",
            I: qPe,
            O: KPe,
            kind: C.Unary
        },
        listPrivateWorkerPools: {
            name: "ListPrivateWorkerPools",
            I: kNe,
            O: SNe,
            kind: C.Unary
        },
        listPlacementGrants: {
            name: "ListPlacementGrants",
            I: CNe,
            O: INe,
            kind: C.Unary
        },
        updatePlacementGrants: {
            name: "UpdatePlacementGrants",
            I: ANe,
            O: MNe,
            kind: C.Unary
        },
        registerPrivateWorkerPool: {
            name: "RegisterPrivateWorkerPool",
            I: PNe,
            O: NNe,
            kind: C.Unary
        },
        deregisterPrivateWorkerPool: {
            name: "DeregisterPrivateWorkerPool",
            I: DNe,
            O: ONe,
            kind: C.Unary
        },
        adminListUserPrivateWorkers: {
            name: "AdminListUserPrivateWorkers",
            I: zPe,
            O: YPe,
            kind: C.Unary
        },
        adminKillBackgroundComposer: {
            name: "AdminKillBackgroundComposer",
            I: JPe,
            O: XPe,
            kind: C.Unary
        },
        adminSettleInteraction: {
            name: "AdminSettleInteraction",
            I: QPe,
            O: ZPe,
            kind: C.Unary
        },
        adminUnparkFollowups: {
            name: "AdminUnparkFollowups",
            I: eNe,
            O: tNe,
            kind: C.Unary
        },
        adminListActiveBackgroundComposers: {
            name: "AdminListActiveBackgroundComposers",
            I: rNe,
            O: sNe,
            kind: C.Unary
        },
        adminKillAllActiveBackgroundComposers: {
            name: "AdminKillAllActiveBackgroundComposers",
            I: iNe,
            O: oNe,
            kind: C.Unary
        },
        listPendingPrivateWorkerRequests: {
            name: "ListPendingPrivateWorkerRequests",
            I: cNe,
            O: lNe,
            kind: C.Unary
        },
        streamPendingPrivateWorkerRequests: {
            name: "StreamPendingPrivateWorkerRequests",
            I: uNe,
            O: mNe,
            kind: C.ServerStreaming
        },
        claimPendingPrivateWorkerRequest: {
            name: "ClaimPendingPrivateWorkerRequest",
            I: pNe,
            O: hNe,
            kind: C.Unary
        },
        releasePrivateWorkerClaim: {
            name: "ReleasePrivateWorkerClaim",
            I: gNe,
            O: fNe,
            kind: C.Unary
        },
        getPrivateWorkersSummary: {
            name: "GetPrivateWorkersSummary",
            I: UNe,
            O: xNe,
            kind: C.Unary
        },
        getPrivateWorker: {
            name: "GetPrivateWorker",
            I: GNe,
            O: VNe,
            kind: C.Unary
        },
        releasePrivateWorker: {
            name: "ReleasePrivateWorker",
            I: $Ne,
            O: jNe,
            kind: C.Unary
        },
        batchRefreshPullRequestStatus: {
            name: "BatchRefreshPullRequestStatus",
            I: HNe,
            O: qNe,
            kind: C.Unary
        },
        listAgentStores: {
            name: "ListAgentStores",
            I: $Se,
            O: HSe,
            kind: C.Unary
        },
        listAgentStoreEntries: {
            name: "ListAgentStoreEntries",
            I: qSe,
            O: zSe,
            kind: C.Unary
        },
        readAgentStoreFile: {
            name: "ReadAgentStoreFile",
            I: YSe,
            O: JSe,
            kind: C.Unary
        },
        writeAgentStoreDocument: {
            name: "WriteAgentStoreDocument",
            I: eye,
            O: tye,
            kind: C.Unary
        },
        setAgentStoreDocumentVisibility: {
            name: "SetAgentStoreDocumentVisibility",
            I: QSe,
            O: ZSe,
            kind: C.Unary
        },
        mintAgentStoreToken: {
            name: "MintAgentStoreToken",
            I: nye,
            O: rye,
            kind: C.Unary
        },
        writeCanvas: {
            name: "WriteCanvas",
            I: XNe,
            O: eDe,
            kind: C.Unary
        },
        readCanvas: {
            name: "ReadCanvas",
            I: tDe,
            O: sDe,
            kind: C.Unary
        },
        listAgentStoreFiles: {
            name: "ListAgentStoreFiles",
            I: sye,
            O: iye,
            kind: C.Unary
        },
        listAgentStoreDirectory: {
            name: "ListAgentStoreDirectory",
            I: aye,
            O: oye,
            kind: C.Unary
        },
        checkAgentStoreVersions: {
            name: "CheckAgentStoreVersions",
            I: cye,
            O: dye,
            kind: C.Unary
        },
        presignAgentStoreReads: {
            name: "PresignAgentStoreReads",
            I: hye,
            O: gye,
            kind: C.Unary
        },
        presignAgentStoreWrites: {
            name: "PresignAgentStoreWrites",
            I: yye,
            O: wye,
            kind: C.Unary
        },
        completeAgentStoreMultipartWrites: {
            name: "CompleteAgentStoreMultipartWrites",
            I: Rye,
            O: Aye,
            kind: C.Unary
        },
        abortAgentStoreMultipartWrites: {
            name: "AbortAgentStoreMultipartWrites",
            I: Pye,
            O: Oye,
            kind: C.Unary
        },
        presignPromptUpload: {
            name: "PresignPromptUpload",
            I: aDe,
            O: oDe,
            kind: C.Unary
        },
        completePromptUpload: {
            name: "CompletePromptUpload",
            I: lDe,
            O: dDe,
            kind: C.Unary
        },
        abortPromptUpload: {
            name: "AbortPromptUpload",
            I: uDe,
            O: mDe,
            kind: C.Unary
        },
        acquireAgentStoreFileLock: {
            name: "AcquireAgentStoreFileLock",
            I: Lye,
            O: Uye,
            kind: C.Unary
        },
        renewAgentStoreFileLock: {
            name: "RenewAgentStoreFileLock",
            I: xye,
            O: Fye,
            kind: C.Unary
        },
        releaseAgentStoreFileLock: {
            name: "ReleaseAgentStoreFileLock",
            I: Wye,
            O: Bye,
            kind: C.Unary
        },
        getAgentStoreFileLock: {
            name: "GetAgentStoreFileLock",
            I: Gye,
            O: Vye,
            kind: C.Unary
        },
        deleteAgentStoreFiles: {
            name: "DeleteAgentStoreFiles",
            I: Hye,
            O: qye,
            kind: C.Unary
        },
        rmdirAgentStore: {
            name: "RmdirAgentStore",
            I: Kye,
            O: zye,
            kind: C.Unary
        },
        undeleteAgentStoreFiles: {
            name: "UndeleteAgentStoreFiles",
            I: Xye,
            O: Qye,
            kind: C.Unary
        },
        listAgentStoreTombstones: {
            name: "ListAgentStoreTombstones",
            I: Zye,
            O: ewe,
            kind: C.Unary
        },
        shareAgentStore: {
            name: "ShareAgentStore",
            I: nwe,
            O: rwe,
            kind: C.Unary
        },
        unshareAgentStore: {
            name: "UnshareAgentStore",
            I: swe,
            O: iwe,
            kind: C.Unary
        },
        listSharedAgentStores: {
            name: "ListSharedAgentStores",
            I: awe,
            O: cwe,
            kind: C.Unary
        },
        provisionSyntheticsServiceAccounts: {
            name: "ProvisionSyntheticsServiceAccounts",
            I: TPe,
            O: SPe,
            kind: C.Unary
        },
        startCloudAgentLoadTest: {
            name: "StartCloudAgentLoadTest",
            I: wPe,
            O: EPe,
            kind: C.Unary
        },
        ensureModelRoutingLoadTestStarted: {
            name: "EnsureModelRoutingLoadTestStarted",
            I: bPe,
            O: RPe,
            kind: C.Unary
        },
        cancelModelRoutingLoadTest: {
            name: "CancelModelRoutingLoadTest",
            I: CPe,
            O: IPe,
            kind: C.Unary
        },
        mintCustomerPrivatelinkProxyToken: {
            name: "MintCustomerPrivatelinkProxyToken",
            I: APe,
            O: MPe,
            kind: C.Unary
        },
        listCustomerPrivatelinkAllowedHosts: {
            name: "ListCustomerPrivatelinkAllowedHosts",
            I: PPe,
            O: NPe,
            kind: C.Unary
        },
        adminListTeamNamedAgents: {
            name: "AdminListTeamNamedAgents",
            I: DPe,
            O: UPe,
            kind: C.Unary
        },
        adminDeleteNamedAgent: {
            name: "AdminDeleteNamedAgent",
            I: xPe,
            O: FPe,
            kind: C.Unary
        },
        listKeyrings: {
            name: "ListKeyrings",
            I: pDe,
            O: hDe,
            kind: C.Unary
        },
        getKeyring: {
            name: "GetKeyring",
            I: gDe,
            O: fDe,
            kind: C.Unary
        },
        createKeyring: {
            name: "CreateKeyring",
            I: _De,
            O: vDe,
            kind: C.Unary
        },
        createKeyringFromTeamSecrets: {
            name: "CreateKeyringFromTeamSecrets",
            I: TDe,
            O: kDe,
            kind: C.Unary
        },
        copyTeamSecretsToKeyring: {
            name: "CopyTeamSecretsToKeyring",
            I: SDe,
            O: yDe,
            kind: C.Unary
        },
        renameKeyring: {
            name: "RenameKeyring",
            I: wDe,
            O: EDe,
            kind: C.Unary
        },
        deleteKeyring: {
            name: "DeleteKeyring",
            I: bDe,
            O: RDe,
            kind: C.Unary
        },
        listKeyringSecrets: {
            name: "ListKeyringSecrets",
            I: IDe,
            O: ADe,
            kind: C.Unary
        },
        createKeyringSecret: {
            name: "CreateKeyringSecret",
            I: MDe,
            O: PDe,
            kind: C.Unary
        },
        updateKeyringSecret: {
            name: "UpdateKeyringSecret",
            I: NDe,
            O: DDe,
            kind: C.Unary
        },
        revokeKeyringSecret: {
            name: "RevokeKeyringSecret",
            I: ODe,
            O: LDe,
            kind: C.Unary
        },
        listKeyringGrants: {
            name: "ListKeyringGrants",
            I: UDe,
            O: xDe,
            kind: C.Unary
        },
        grantKeyringPermissions: {
            name: "GrantKeyringPermissions",
            I: FDe,
            O: WDe,
            kind: C.Unary
        },
        updateKeyringPermissions: {
            name: "UpdateKeyringPermissions",
            I: BDe,
            O: GDe,
            kind: C.Unary
        },
        revokeKeyringPermissions: {
            name: "RevokeKeyringPermissions",
            I: VDe,
            O: $De,
            kind: C.Unary
        }
    }
};

}
