import { Qe } from "./Iwo.js";
import { l2, xx } from "./accessibilitySignalService.js";
import { iS, lb } from "./adminSettingsService.js";
import { TX, fle } from "./agentHostProviderService.js";
import { fEt, xVt } from "./agentLayoutEventService.js";
import { eme, y$ } from "./agentLayoutService.js";
import { bls, nxi } from "./aiCodeEventTracking.js";
import { VAn, XIi } from "./aiContext.js";
import { FJ, xzt } from "./aiErrorService.js";
import { Vae, fX } from "./aiEverythingProviderService.js";
import { qAn } from "./aiFileInfoService.js";
import { lEt } from "./aiFileInfoServiceTypes.js";
import { Fae, Qr, Ss, X0e, _be, k0t, l$, w0t } from "./aiMiscServices.js";
import { C1, Qb } from "./aiServerConfigService.js";
import { Dc, jl } from "./aiService.js";
import { ZM, vR } from "./aiSettingsService.js";
import { DP, ans } from "./anythingQuickAccess.js";
import { cG, ule } from "./appLayoutService.js";
import { XGt, xEn } from "./artifactCacheService.js";
import { fTt, sat } from "./asyncOperationRegistry.js";
import { Ple, oMe } from "./authentication.js";
import { Rs, ss } from "./authenticationService.js";
import { LP, uC } from "./backgroundComposer.js";
import { gls, thl } from "./backgroundComposerCachedDetailsStorageService.js";
import { EA, RB } from "./backgroundComposerDataService.js";
import { $xn, rEi } from "./backgroundComposerEventService.js";
import { ZD, jO } from "./backgroundWorkRegistry.js";
import { X4e, YCe } from "./browserAutomationService.js";
import { Fls, dxi } from "./browserScreenshotService.js";
import { K1, PX } from "./browserViewStore.js";
import { P6, cme } from "./canvasService.js";
import { Bde, uY } from "./clientNumericMetricsService.js";
import { bb, hf } from "./clipboardService.js";
import { Hx, ZI } from "./cloudAgentRepositoryService.js";
import { IEn, KGt } from "./cloudAgentStorageService.js";
import { Eas, Tul } from "./cloudEnvironmentLogService.js";
import { Lk, Nw } from "./cloudEnvironmentTemplateService.js";
import { Kqe, g4e } from "./cloudMcpOAuthLoopbackService.js";
import { Gdl, lls } from "./cmdKService.js";
import { qdl, yVt } from "./cmdKService2.js";
import { X7, dPe } from "./cmdKStateService.js";
import { Ju, og } from "./codeEditorService.js";
import { nr, rs } from "./commands.js";
import { Yh, vS } from "./composer.js";
import { oF, v$ } from "./composerAgent.js";
import { UJ } from "./composerChatService.js";
import { l0 } from "./composerChatServiceInterface.js";
import { LTt, mat } from "./composerCheckpointService.js";
import { AWt, YCn } from "./composerCheckpointStorageService.js";
import { $0t, BWt } from "./composerCodeBlockDiffStorageService.js";
import { Kbe, WCe } from "./composerCodeBlockService.js";
import { Xpe, ple } from "./composerContextServiceTypes.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { fAn, tVt } from "./composerDecisionsService.js";
import { jze, qTt } from "./composerEffectiveAllowlistService.js";
import { Fb, LS } from "./composerEventService.js";
import { hxi, lRn } from "./composerExtensibilityService.js";
import { Cie, dG } from "./composerFileService.js";
import { iI, w1 } from "./composerLogService.js";
import { U0t, eot } from "./composerMessageStorageService.js";
import { uk, xE } from "./composerModesServiceTypes.js";
import { L0t, Vst } from "./composerNotificationService.js";
import { I6, Y4 } from "./composerPlanService.js";
import { AVt, cRn } from "./composerStorageService.js";
import { nVe, zat } from "./composerTerminalService.js";
import { HCe, O4e } from "./composerTextModelService.js";
import { WB, YM } from "./composerUtilsServiceTypes.js";
import { Bb, Ux } from "./composerViews.js";
import { or, yi } from "./configuration.js";
import { Mf, aL, pf } from "./contextView.js";
import { Hi, Rr } from "./contextkey.js";
import { DJ, uG } from "./cursorCommands.js";
import { Ub, py } from "./cursorCredsService.js";
import { IX, _le } from "./cursorHooks.js";
import { AE, S2 } from "./cursorIgnoreService.js";
import { a0, xA } from "./cursorRules.js";
import { OCe, OPe } from "./customEditorLabelService.js";
import { eye, l9e } from "./decorations_2.js";
import { NS, bd, hd } from "./dialogs.js";
import { lPe, mX } from "./diffChangeSource.js";
import { fCe, hPe } from "./diffDecorationVisibilityService.js";
import { TTr, _qd } from "./diffProviderFactoryService.js";
import { KIi, Kas } from "./diffingService.js";
import { Hn } from "./dom_2.js";
import { Ld, _a } from "./editorGroupsService.js";
import { GXr, s4e } from "./editorQuickAccess.js";
import { Wo, gr } from "./editorService.js";
import { FD, yW } from "./editorWorker.js";
import { ZIi, uls } from "./effortFirstModelPickerAssignmentService.js";
import { cy, fb } from "./environment.js";
import { fo, ps } from "./environmentService.js";
import { $4, J5 } from "./experimentRefreshService.js";
import { Cr, _s } from "./experimentService.js";
import { XD, jy, yL } from "./extensionManagement.js";
import { MA, aU } from "./extensionManagement_2.js";
import { id, ld } from "./extensions_4.js";
import { Fat, Qze } from "./fastContextService.js";
import { is, ms } from "./files.js";
import { Jv, hy } from "./gitContextService.js";
import { sls, zAn } from "./githubPRService.js";
import { Od, Tc } from "./host.js";
import { av, gS } from "./hover.js";
import { G4, UO } from "./inlineDiffService.js";
import { It, dn } from "./instantiation.js";
import { Al, ru } from "./keybinding.js";
import { KAn, SVt } from "./keybindingEditing.js";
import { Uze, bat } from "./knowledgeBaseService.js";
import { Yp, qg } from "./label.js";
import { Kp, Ph } from "./language.js";
import { Dg, Nd } from "./languageFeatures.js";
import { UD, UI } from "./layoutService.js";
import { Id, Pv } from "./layoutService_2.js";
import { Qdl, Zdl } from "./lexicalReducerService.js";
import { Fp, zp } from "./lifecycle_2.js";
import { Jki, Qki } from "./localModeDataImport.js";
import { Kat, Vat } from "./markdownEditorModeService.js";
import { Sfn, _si } from "./markerDecorations.js";
import { V3, rT } from "./markers.js";
import { PEi, tAn } from "./mcpConfigService.js";
import { L0i, QJr } from "./mcpInstallationService.js";
import { gV } from "./mcpService.js";
import { N0 } from "./mcpServiceTypes.js";
import { ACe, Obe } from "./mcpWellKnownDetection.js";
import { Uh, ip } from "./metricsService.js";
import { dd, xp } from "./model.js";
import { eg, of } from "./modelConfigServiceTypes.js";
import { Wdl, Zyg } from "./networkAccessNotificationService.js";
import { Ks, Wr } from "./notification.js";
import { Bcs, Lxi } from "./openBrowserUrlsService.js";
import { kc, qc } from "./opener.js";
import { Rwe, p_e } from "./outlineModel.js";
import { Khl, scs } from "./p2pReferralStatusService.js";
import { GB, VO } from "./panecomposite.js";
import { Rd, ih } from "./pathService.js";
import { bxi, yxi } from "./planEditorModeService.js";
import { Szt, VPe } from "./planStorageService.js";
import { IA, VI } from "./pluginsProviderService.js";
import { Dw, oI } from "./prettyDialog.js";
import { EE, mT } from "./privateInferenceEnablementService.js";
import { fc, hu } from "./productService.js";
import { B1, ab } from "./progress.js";
import { Jbe, L_ } from "./projectService.js";
import { f4e, xCe } from "./queryBuilder.js";
import { BCm, twi } from "./quickAccess_2.js";
import { Cl, Gu } from "./quickInput.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Zts, lel } from "./recentFilesTrackerService.js";
import { Nh, Sg } from "./remoteAgentService.js";
import { Ope, vie } from "./repositoryService.js";
import { Em, Rh } from "./resolverService.js";
import { lat, zPe } from "./reviewChangesService.js";
import { aC, cN } from "./scm.js";
import { ICe, wL } from "./search_2.js";
import { cle, lG } from "./selectedContext.js";
import { Sat, zTt } from "./shellEnvironmentService.js";
import { vo } from "./solidContext.js";
import { CL, QD } from "./statusbar.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { jPe, yze } from "./subagentsService.js";
import { DKm, I4e } from "./symbolsQuickAccess.js";
import { IGt, JTn } from "./systemNotificationService.js";
import { Uv, Xv } from "./telemetry.js";
import { Mv, NJ, Py } from "./terminal.js";
import { BVt, FVt } from "./terminalExecutionService.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { Vf, u_ } from "./textfiles.js";
import { Dl, Ml } from "./themeService.js";
import { WJ, fV } from "./toolCallHumanReviewService.js";
import { ehe, uwe } from "./tooltipService.js";
import { __ } from "./tracing_2.js";
import { KXr, gwi } from "./transcriptVisibilityService.js";
import { E } from "./tslib.es6.js";
import { eF, tF } from "./tunnel.js";
import { Z_, fS } from "./uiOverlayService.js";
import { C7, rB } from "./undoRedo.js";
import { MX, _V } from "./unifiedSkuBillingService.js";
import { SL, d$ } from "./update.js";
import { exi, mls } from "./updateNotificationService.js";
import { Pbe, mPe } from "./url_2.js";
import { BJ, Jpe } from "./usageDataService.js";
import { QW, ZW } from "./usageLimitPolicyStatusService.js";
import { F0, Lw } from "./userDataProfile_2.js";
import { MRn } from "./utils_26.js";
import { KJr, jYa } from "./videoAnnotationService.js";
import { ck, q1 } from "./views.js";
import { jT, wb } from "./viewsService.js";
import { at } from "./web.js";
import { vCe } from "./webConstants.js";
import { Bs } from "./window.js";
import { Sr, yr } from "./workspace.js";
import { Cu, ey } from "./workspaceCollectionService.js";
import { Uat, eTe } from "./workspaceEditing.js";
import { Lh, Qg } from "./workspaceMetadataService.js";
import { HM, lN } from "./workspaces.js";
import { WO, qM } from "./worktree.js";
import { pi } from "./ze.js";
var x0g, A0g, R0g, P0g, M0g, D0g;
export { A0g, D0g, M0g, P0g, R0g, x0g };
var __wakaru_$T_initialized = false;
export function $T() {
if (__wakaru_$T_initialized) return;
__wakaru_$T_initialized = true;
"use strict";
E(), at(), pi(), at(), Hn(), vCe(), Bs(), Qe(), og(), lPe(), hPe(), G4(), _qd(), Kp(), yW(), Dg(), _si(), xp(), Em(), FC(), p_e(), l2(), bb(), rs(), or(), Hi(), pf(), Vae(), bd(), fb(), jy(), ms(), gS(), It(), ru(), qg(), UD(), Jki(), rT(), JTn(), Ks(), qc(), hu(), ab(), BCm(), Gu(), el(), Zi(), Cm(), Xv(), Dl(), uwe(), __(), tF(), rB(), d$(), mPe(), Sr(), HM(), GXr(), ck(), xE(), jO(), KXr(), IEn(), QW(), xEn(), Hx(), jYa(), Tul(), L_(), qAn(), Ss(), Dc(), Bde(), Vst(), py(), Kas(), Fat(), hy(), sls(), QJr(), PEi(), gV(), ACe(), ip(), Zyg(), Ope(), yze(), Gdl(), qdl(), dPe(), XIi(), FJ(), iS(), ZM(), oMe(), Rs(), EE(), fle(), DJ(), _le(), S2(), IA(), a0(), l9e(), OPe(), Ld(), Wo(), fo(), zTt(), uls(), $4(), _s(), Kqe(), MA(), ld(), Od(), KAn(), bat(), Pv(), Qdl(), zp(), of(), GB(), ih(), Sg(), f4e(), wL(), cle(), CL(), u_(), fS(), mls(), F0(), jT(), Cu(), Lh(), Uat(), qM(), LP(), thl(), RB(), rEi(), Nw(), C1(), bls(), eme(), ule(), cme(), xVt(), fTt(), YCe(), Fls(), PX(), vS(), v$(), UJ(), iI(), LTt(), YCn(), BWt(), WCe(), Xpe(), Pl(), fAn(), qTt(), LS(), hxi(), Cie(), U0t(), cRn(), zat(), O4e(), WB(), Ux(), I6(), VPe(), WJ(), Jpe(), MX(), Kat(), yxi(), oI(), Khl(), lel(), Bcs(), lat(), cN(), ans(), DKm(), Mv(), BVt(), MRn(), vo(), vo(), x0g = "solid-devtools-enabled", A0g = (t)=>t === "quickAccessController" || t === "symbolsQuickAccessProvider" || t === "editorQuickAccessProvider" || t === "anythingQuickAccessProvider", R0g = void 0, P0g = ()=>R0g ??= {
        aiService: jl,
        contextMenuService: Mf,
        inlineDiffService: UO,
        diffChangeSourceRegistry: mX,
        diffDecorationVisibilityService: fCe,
        aiSettingsService: vR,
        adminSettingsService: lb,
        clipboardService: hf,
        configurationService: yi,
        cursorAuthenticationService: ss,
        privateInferenceEnablementService: mT,
        agentHostProviderService: TX,
        cursorRulesService: xA,
        cursorIgnoreService: AE,
        appLayoutService: cG,
        agentLayoutService: y$,
        reviewChangesService: zPe,
        browserAutomationService: X4e,
        browserViewStore: K1,
        browserScreenshotService: dxi,
        openBrowserUrlsService: Lxi,
        voiceInputService: X0e,
        agentLayoutEventService: fEt,
        editorService: gr,
        editorGroupService: _a,
        dialogService: hd,
        fileDialogService: NS,
        progressService: B1,
        fileService: is,
        workspacesService: lN,
        workspaceCollectionService: ey,
        instantiationService: dn,
        aiContextSessionService: VAn,
        composerService: Yh,
        composerAgentService: oF,
        composerDataService: no,
        composerStorageService: AVt,
        composerTerminalService: nVe,
        composerTextModelService: HCe,
        composerEventService: Fb,
        composerCheckpointService: mat,
        composerCheckpointStorageService: AWt,
        composerMessageStorageService: eot,
        composerCodeBlockDiffStorageService: $0t,
        composerFileService: dG,
        composerChatService: l0,
        composerLogService: w1,
        worktreeManagerService: WO,
        composerViewsService: Bb,
        composerExtensibilityService: lRn,
        composerUtilsService: YM,
        composerCodeBlockService: Kbe,
        composerPlanService: Y4,
        planStorageService: Szt,
        planEditorModeService: bxi,
        markdownEditorModeService: Vat,
        projectService: Jbe,
        keybindingService: Al,
        keybindingEditingService: SVt,
        languageService: Ph,
        languageFeaturesService: Nd,
        backgroundComposerDataService: EA,
        cloudAgentRepositoryService: ZI,
        backgroundComposerEventService: $xn,
        cmdKService: lls,
        workbenchEnvironmentService: ps,
        shellEnvironmentService: Sat,
        workbenchLayoutService: Id,
        editorWorkerService: FD,
        diffProviderFactoryService: TTr,
        cmdKService2: yVt,
        cmdKStateService: X7,
        modelService: dd,
        textModelService: Rh,
        openerService: kc,
        textResourceConfigurationService: Mw,
        themeService: Ml,
        workspaceContextService: yr,
        workspaceMetadataService: Qg,
        commandService: nr,
        workspaceEditingService: eTe,
        structuredLogService: wh,
        hostService: Tc,
        storageService: ki,
        localModeDataImportService: Qki,
        reactiveStorageService: sa,
        repositoryService: vie,
        textFileService: Vf,
        codeEditorService: Ju,
        backgroundComposerService: uC,
        backgroundWorkService: ZD,
        transcriptVisibilityService: gwi,
        urlService: Pbe,
        cursorCredsService: Ub,
        metricsService: Uh,
        telemetryService: Uv,
        extensionGalleryService: XD,
        extensionManagementService: yL,
        markerDecorationsService: Sfn,
        markerService: V3,
        notificationService: Wr,
        systemNotificationRendererService: IGt,
        cppService: l$,
        mcpService: N0,
        mcpConfigService: tAn,
        mcpWellKnownDetectionService: Obe,
        mcpInstallationService: L0i,
        composerNotificationService: L0t,
        networkAccessNotificationService: Wdl,
        searchService: ICe,
        serverConfigService: Qb,
        labelService: Yp,
        outlineService: Rwe,
        contextViewService: aL,
        terminalConfigurationService: NJ,
        statusbarService: QD,
        terminalService: Py,
        undoRedoService: C7,
        aiErrorService: xzt,
        aiFileInfoService: lEt,
        viewsService: wb,
        viewDescriptorService: q1,
        fastContextService: Qze,
        remoteAgentService: Nh,
        hoverService: av,
        productService: fc,
        gitContextService: Jv,
        githubPRService: zAn,
        contextKeyService: Rr,
        environmentService: cy,
        diffingService: KIi,
        everythingProviderService: fX,
        tooltipService: ehe,
        cursorPredictionService: k0t,
        importPredictionService: w0t,
        lexicalReducerService: Zdl,
        layoutService: UI,
        scmService: aC,
        queryBuilder: (t)=>t.createInstance(xCe),
        symbolsQuickAccessProvider: (t)=>t.createInstance(I4e),
        editorQuickAccessProvider: (t)=>t.createInstance(s4e),
        anythingQuickAccessProvider: (t)=>t.createInstance(DP),
        quickAccessController: (t)=>t.createInstance(twi),
        recentFilesTrackerService: Zts,
        extensionService: id,
        paneCompositeService: VO,
        selectedContextService: lG,
        terminalExecutionService: FVt,
        decorationsService: eye,
        lifecycleService: Fp,
        customEditorLabelService: OCe,
        analyticsService: Qr,
        aiCodeTrackingService: _be,
        aiCodeEventTrackingService: nxi,
        telemService: Fae,
        prettyDialogService: Dw,
        pathService: Rd,
        userDataProfileService: Lw,
        composerContextService: ple,
        composerDecisionsService: tVt,
        composerEffectiveAllowlistService: jze,
        composerModesService: uk,
        usageDataService: BJ,
        unifiedSkuBillingService: _V,
        usageLimitPolicyStatusService: ZW,
        quickInputService: Cl,
        extensionEnablementService: aU,
        knowledgeBaseService: Uze,
        backgroundComposerCachedDetailsStorageService: gls,
        tunnelService: eF,
        cursorCommandsService: uG,
        authenticationService: Ple,
        toolCallHumanReviewService: fV,
        modelConfigService: eg,
        experimentService: Cr,
        cloudEnvironmentTemplateService: Lk,
        experimentRefreshService: J5,
        cloudMcpOAuthLoopbackService: g4e,
        effortFirstModelPickerAssignmentService: ZIi,
        updateNotificationService: exi,
        updateService: SL,
        uiOverlayService: Z_,
        cursorHooksService: IX,
        clientNumericMetricsService: uY,
        subagentsService: jPe,
        pluginsProviderService: VI,
        cloudAgentStorageService: KGt,
        artifactCacheService: XGt,
        videoAnnotationService: KJr,
        cloudEnvironmentLogService: Eas,
        asyncOperationRegistry: sat,
        accessibilitySignalService: xx,
        canvasService: P6,
        p2pReferralStatusService: scs
    }, M0g = "solidjs_stack_trace_limit", D0g = "stackTraceLimitFloor";

}
