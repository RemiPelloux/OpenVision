import { Se } from "./HVr.js";
import { A0, KT } from "./accessibilitySignalService.js";
import { R1, pw } from "./adminSettingsService.js";
import { G_e, H1e } from "./agentHostProviderService.js";
import { JCt, cqt } from "./agentLayoutEventService.js";
import { L2, vq } from "./agentLayoutService.js";
import { Her, wBn } from "./aiCodeEventTracking.js";
import { Xjt, jCt } from "./aiContext.js";
import { fq, nCt } from "./aiErrorService.js";
import { M$, xX } from "./aiEverythingProviderService.js";
import { her } from "./aiFileInfoService.js";
import { VCt } from "./aiFileInfoServiceTypes.js";
import { MQe, PQe, Tse, ca, hX, k2, la, xMe } from "./aiMiscServices.js";
import { dw, tE } from "./aiServerConfigService.js";
import { Sg, jp } from "./aiService.js";
import { G$, J3 } from "./aiSettingsService.js";
import { YKi, qE } from "./anythingQuickAccess.js";
import { q5, uq } from "./appLayoutService.js";
import { FWt, c2n } from "./artifactCacheService.js";
import { e8e, rtt } from "./asyncOperationRegistry.js";
import { Cq, Jde } from "./authentication.js";
import { Za, na } from "./authenticationService.js";
import { DN, pT } from "./backgroundComposer.js";
import { Oer, Pxo } from "./backgroundComposerCachedDetailsStorageService.js";
import { B5, iE } from "./backgroundComposerDataService.js";
import { GVt, QFn } from "./backgroundComposerEventService.js";
import { AX, Jj } from "./backgroundWorkRegistry.js";
import { njt, yCt } from "./browserAutomationService.js";
import { ABn, itr } from "./browserScreenshotService.js";
import { L8e, d0 } from "./browserViewStore.js";
import { xLe, z$ } from "./canvasService.js";
import { kX, yde } from "./clientNumericMetricsService.js";
import { Yp, zu } from "./clipboardService.js";
import { rZ, sZ } from "./cloudAgentRepositoryService.js";
import { Bkt, OWt } from "./cloudAgentStorageService.js";
import { WJi, cEo } from "./cloudEnvironmentLogService.js";
import { lLe, z1e } from "./cloudEnvironmentTemplateService.js";
import { DUe, MUe } from "./cloudMcpOAuthLoopbackService.js";
import { wxo, xer } from "./cmdKService.js";
import { Gtt, Ier } from "./cmdKService2.js";
import { Y3, f_e } from "./cmdKStateService.js";
import { Ja, md } from "./codeEditorService.js";
import { $n, vi } from "./commands.js";
import { Hh, Xy } from "./composer.js";
import { hq, q6 } from "./composerAgent.js";
import { _q } from "./composerChatService.js";
import { OR } from "./composerChatServiceInterface.js";
import { lCt, mtt } from "./composerCheckpointService.js";
import { hSt, q$t } from "./composerCheckpointStorageService.js";
import { vJe, ySt } from "./composerCodeBlockDiffStorageService.js";
import { poe, zde } from "./composerCodeBlockService.js";
import { qX, uoe } from "./composerContextServiceTypes.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { ACt, fjt } from "./composerDecisionsService.js";
import { Att, uLe } from "./composerEffectiveAllowlistService.js";
import { Zy, yC } from "./composerEventService.js";
import { RBn, lqt } from "./composerExtensibilityService.js";
import { pq, rte } from "./composerFileService.js";
import { lb, n0 } from "./composerLogService.js";
import { W4e, gJe } from "./composerMessageStorageService.js";
import { AA, xC } from "./composerModesServiceTypes.js";
import { B4e, lJe } from "./composerNotificationService.js";
import { aG, gq } from "./composerPlanService.js";
import { e0t, uqt } from "./composerStorageService.js";
import { MBn, atr } from "./composerTerminalService.js";
import { H_e, YPe } from "./composerTextModelService.js";
import { FR, z5 } from "./composerUtilsServiceTypes.js";
import { Hv, rE } from "./composerViews.js";
import { Cn, qt } from "./configuration.js";
import { Lv, Yo, ka } from "./contextView.js";
import { dn, xn } from "./contextkey.js";
import { VX, ite } from "./cursorCommands.js";
import { PR, ZM } from "./cursorCredsService.js";
import { KX, V$ } from "./cursorHooks.js";
import { QM, R2 } from "./cursorIgnoreService.js";
import { Bw, LR } from "./cursorRules.js";
import { Gde, ooe } from "./customEditorLabelService.js";
import { oTe, woe } from "./decorations_2.js";
import { Fc, lv, wc } from "./dialogs.js";
import { D$, p_e } from "./diffChangeSource.js";
import { Ade, o1e } from "./diffDecorationVisibilityService.js";
import { V8c, Zbi } from "./diffProviderFactoryService.js";
import { per, vBn } from "./diffingService.js";
import { en } from "./dom_2.js";
import { Nc, gs } from "./editorGroupsService.js";
import { p1e, vVi } from "./editorQuickAccess.js";
import { Ni, hn } from "./editorService.js";
import { YC, kM } from "./editorWorker.js";
import { Rer, bBn } from "./effortFirstModelPickerAssignmentService.js";
import { nf, sv } from "./environment.js";
import { Vr, Yi } from "./environmentService.js";
import { A$, GU } from "./experimentRefreshService.js";
import { Kr, qs } from "./experimentService.js";
import { Ug, WE, s0 } from "./extensionManagement.js";
import { $k, TS } from "./extensionManagement_2.js";
import { Ma, hc } from "./extensions_4.js";
import { vLe, x8e } from "./fastContextService.js";
import { Fi, Ii } from "./files.js";
import { kk, r0 } from "./gitContextService.js";
import { Cer, Yjt } from "./githubPRService.js";
import { Fl, rc } from "./host.js";
import { du, va } from "./hover.js";
import { CN, zM } from "./inlineDiffService.js";
import { Ze, _t } from "./instantiation.js";
import { no, qr } from "./keybinding.js";
import { Vtt, qCt } from "./keybindingEditing.js";
import { h8e, xtt } from "./knowledgeBaseService.js";
import { dc, yu } from "./label.js";
import { kl, pc } from "./language.js";
import { Jc, kh } from "./languageFeatures.js";
import { Rx, hC } from "./layoutService.js";
import { Bc, Zh } from "./layoutService_2.js";
import { Dxo, Rxo } from "./lexicalReducerService.js";
import { $d, Id } from "./lifecycle_2.js";
import { GGi, VGi } from "./localModeDataImport.js";
import { n0t, nnt } from "./markdownEditorModeService.js";
import { Vfn, WOt } from "./markerDecorations.js";
import { $_, eT } from "./markers.js";
import { b3n, rjt } from "./mcpConfigService.js";
import { V2n, Yqi } from "./mcpInstallationService.js";
import { eZ } from "./mcpService.js";
import { P1 } from "./mcpServiceTypes.js";
import { S1e, k1e } from "./mcpWellKnownDetection.js";
import { Cp, vp } from "./metricsService.js";
import { Ll, fc } from "./model.js";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { cPh, kxo } from "./networkAccessNotificationService.js";
import { di, ji } from "./notification.js";
import { OAo, Qtr } from "./openBrowserUrlsService.js";
import { eo, ko } from "./opener.js";
import { Ere, xre } from "./outlineModel.js";
import { TIo, sNh } from "./p2pReferralStatusService.js";
import { $I, PC } from "./panecomposite.js";
import { fu, zl } from "./pathService.js";
import { BBn, UBn } from "./planEditorModeService.js";
import { TVt, ott } from "./planStorageService.js";
import { EN, lF } from "./pluginsProviderService.js";
import { BI, gF } from "./prettyDialog.js";
import { Hx, uT } from "./privateInferenceEnablementService.js";
import { Ka, jo } from "./productService.js";
import { Mm, gp } from "./progress.js";
import { S8e, dBn } from "./projectService.js";
import { qn } from "./qIc.js";
import { nq, qee } from "./queryBuilder.js";
import { SNn, fFd } from "./quickAccess_2.js";
import { Gs, Ya } from "./quickInput.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { LKi, V_o } from "./recentFilesTrackerService.js";
import { Ip, Kd } from "./remoteAgentService.js";
import { F$, iq } from "./repositoryService.js";
import { Nl, bc } from "./resolverService.js";
import { W_e, r8e } from "./reviewChangesService.js";
import { dT, l0 } from "./scm.js";
import { DX, sE } from "./search_2.js";
import { WX, aoe } from "./selectedContext.js";
import { RCt, Rtt } from "./shellEnvironmentService.js";
import { Vs } from "./solidContext.js";
import { CS, L1 } from "./statusbar.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { U_e, jPe } from "./subagentsService.js";
import { Hde, q_o } from "./symbolsQuickAccess.js";
import { hWt, yNn } from "./systemNotificationService.js";
import { $h, np } from "./telemetry.js";
import { Gf, ng, r8 } from "./terminal.js";
import { l0t, u0t } from "./terminalExecutionService.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { Ag, Xp } from "./textfiles.js";
import { $r, as } from "./themeService.js";
import { kq, ote } from "./toolCallHumanReviewService.js";
import { PK, ure } from "./tooltipService.js";
import { yv } from "./tracing_2.js";
import { FNn, SVi } from "./transcriptVisibilityService.js";
import { x } from "./tslib.es6.js";
import { aL, oF } from "./tunnel.js";
import { TM, XT } from "./uiOverlayService.js";
import { $P, UP } from "./undoRedo.js";
import { O8e, tnt } from "./unifiedSkuBillingService.js";
import { FD, L6 } from "./update.js";
import { Ner, kBn } from "./updateNotificationService.js";
import { __e, jse } from "./url_2.js";
import { iLe, rCt } from "./usageDataService.js";
import { Ukt, bet } from "./usageLimitPolicyStatusService.js";
import { py, q_ } from "./userDataProfile_2.js";
import { Dqt } from "./utils_26.js";
import { jqi, ngo } from "./videoAnnotationService.js";
import { cd, eh } from "./views.js";
import { Ic, Pp } from "./viewsService.js";
import { $e } from "./web.js";
import { a1e } from "./webConstants.js";
import { lo } from "./window.js";
import { Jn, ci } from "./workspace.js";
import { Yv, lL } from "./workspaceCollectionService.js";
import { Coe, yLe } from "./workspaceEditing.js";
import { D2, a0 } from "./workspaceMetadataService.js";
import { IA, KM } from "./workspaces.js";
import { B$, Kse } from "./worktree.js";
var VOh, jOh, qOh, zOh, KOh, YOh;
export { KOh, VOh, YOh, jOh, qOh, zOh };
var __wakaru_Ww_initialized = false;
export function Ww() {
if (__wakaru_Ww_initialized) return;
__wakaru_Ww_initialized = true;
"use strict";
x(), $e(), qn(), $e(), en(), a1e(), lo(), Se(), md(), p_e(), o1e(), CN(), V8c(), kl(), kM(), kh(), Vfn(), Ll(), Nl(), M_(), xre(), KT(), Yp(), vi(), Cn(), dn(), ka(), xX(), Fc(), nf(), Ug(), Fi(), du(), Ze(), no(), yu(), Rx(), VGi(), $_(), yNn(), ji(), ko(), Ka(), gp(), fFd(), Ya(), Ha(), Vn(), im(), np(), as(), ure(), yv(), oF(), $P(), L6(), __e(), ci(), IA(), vVi(), cd(), AA(), AX(), SVi(), OWt(), bet(), c2n(), sZ(), ngo(), cEo(), S8e(), her(), la(), Sg(), yde(), B4e(), ZM(), per(), x8e(), r0(), Cer(), Yqi(), b3n(), eZ(), k1e(), Cp(), cPh(), iq(), jPe(), wxo(), Ier(), f_e(), Xjt(), fq(), R1(), G$(), Jde(), Za(), Hx(), H1e(), ite(), KX(), R2(), lF(), Bw(), oTe(), Gde(), Nc(), Ni(), Vr(), RCt(), Rer(), A$(), qs(), MUe(), TS(), hc(), Fl(), qCt(), xtt(), Zh(), Dxo(), $d(), i0(), $I(), fu(), Ip(), qee(), sE(), aoe(), L1(), Ag(), TM(), Ner(), py(), Pp(), Yv(), a0(), yLe(), B$(), DN(), Pxo(), B5(), QFn(), lLe(), tE(), Her(), vq(), uq(), xLe(), cqt(), rtt(), njt(), itr(), L8e(), Xy(), hq(), _q(), n0(), lCt(), q$t(), ySt(), zde(), uoe(), nl(), fjt(), Att(), yC(), RBn(), rte(), gJe(), uqt(), atr(), YPe(), z5(), rE(), aG(), ott(), ote(), rCt(), tnt(), n0t(), UBn(), gF(), sNh(), V_o(), OAo(), r8e(), dT(), YKi(), q_o(), ng(), u0t(), Dqt(), Vs(), Vs(), VOh = "solid-devtools-enabled", jOh = (e)=>e === "quickAccessController" || e === "symbolsQuickAccessProvider" || e === "editorQuickAccessProvider" || e === "anythingQuickAccessProvider", qOh = void 0, zOh = ()=>qOh ??= {
        aiService: jp,
        contextMenuService: Yo,
        inlineDiffService: zM,
        diffChangeSourceRegistry: D$,
        diffDecorationVisibilityService: Ade,
        aiSettingsService: J3,
        adminSettingsService: pw,
        clipboardService: zu,
        configurationService: qt,
        cursorAuthenticationService: na,
        privateInferenceEnablementService: uT,
        agentHostProviderService: G_e,
        cursorRulesService: LR,
        cursorIgnoreService: QM,
        appLayoutService: q5,
        agentLayoutService: L2,
        reviewChangesService: W_e,
        browserAutomationService: yCt,
        browserViewStore: d0,
        browserScreenshotService: ABn,
        openBrowserUrlsService: Qtr,
        voiceInputService: xMe,
        agentLayoutEventService: JCt,
        editorService: hn,
        editorGroupService: gs,
        dialogService: wc,
        fileDialogService: lv,
        progressService: Mm,
        fileService: Ii,
        workspacesService: KM,
        workspaceCollectionService: lL,
        instantiationService: _t,
        aiContextSessionService: jCt,
        composerService: Hh,
        composerAgentService: q6,
        composerDataService: Zs,
        composerStorageService: e0t,
        composerTerminalService: MBn,
        composerTextModelService: H_e,
        composerEventService: Zy,
        composerCheckpointService: mtt,
        composerCheckpointStorageService: hSt,
        composerMessageStorageService: W4e,
        composerCodeBlockDiffStorageService: vJe,
        composerFileService: pq,
        composerChatService: OR,
        composerLogService: lb,
        worktreeManagerService: Kse,
        composerViewsService: Hv,
        composerExtensibilityService: lqt,
        composerUtilsService: FR,
        composerCodeBlockService: poe,
        composerPlanService: gq,
        planStorageService: TVt,
        planEditorModeService: BBn,
        markdownEditorModeService: nnt,
        projectService: dBn,
        keybindingService: qr,
        keybindingEditingService: Vtt,
        languageService: pc,
        languageFeaturesService: Jc,
        backgroundComposerDataService: iE,
        cloudAgentRepositoryService: rZ,
        backgroundComposerEventService: GVt,
        cmdKService: xer,
        workbenchEnvironmentService: Yi,
        shellEnvironmentService: Rtt,
        workbenchLayoutService: Bc,
        editorWorkerService: YC,
        diffProviderFactoryService: Zbi,
        cmdKService2: Gtt,
        cmdKStateService: Y3,
        modelService: fc,
        textModelService: bc,
        openerService: eo,
        textResourceConfigurationService: $v,
        themeService: $r,
        workspaceContextService: Jn,
        workspaceMetadataService: D2,
        commandService: $n,
        workspaceEditingService: Coe,
        structuredLogService: Xh,
        hostService: rc,
        storageService: yn,
        localModeDataImportService: GGi,
        reactiveStorageService: Do,
        repositoryService: F$,
        textFileService: Xp,
        codeEditorService: Ja,
        backgroundComposerService: pT,
        backgroundWorkService: Jj,
        transcriptVisibilityService: FNn,
        urlService: jse,
        cursorCredsService: PR,
        metricsService: vp,
        telemetryService: $h,
        extensionGalleryService: s0,
        extensionManagementService: WE,
        markerDecorationsService: WOt,
        markerService: eT,
        notificationService: di,
        systemNotificationRendererService: hWt,
        cppService: k2,
        mcpService: P1,
        mcpConfigService: rjt,
        mcpWellKnownDetectionService: S1e,
        mcpInstallationService: V2n,
        composerNotificationService: lJe,
        networkAccessNotificationService: kxo,
        searchService: DX,
        serverConfigService: dw,
        labelService: dc,
        outlineService: Ere,
        contextViewService: Lv,
        terminalConfigurationService: r8,
        statusbarService: CS,
        terminalService: Gf,
        undoRedoService: UP,
        aiErrorService: nCt,
        aiFileInfoService: VCt,
        viewsService: Ic,
        viewDescriptorService: eh,
        fastContextService: vLe,
        remoteAgentService: Kd,
        hoverService: va,
        productService: jo,
        gitContextService: kk,
        githubPRService: Yjt,
        contextKeyService: xn,
        environmentService: sv,
        diffingService: vBn,
        everythingProviderService: M$,
        tooltipService: PK,
        cursorPredictionService: MQe,
        importPredictionService: PQe,
        lexicalReducerService: Rxo,
        layoutService: hC,
        scmService: l0,
        queryBuilder: (e)=>e.createInstance(nq),
        symbolsQuickAccessProvider: (e)=>e.createInstance(Hde),
        editorQuickAccessProvider: (e)=>e.createInstance(p1e),
        anythingQuickAccessProvider: (e)=>e.createInstance(qE),
        quickAccessController: (e)=>e.createInstance(SNn),
        recentFilesTrackerService: LKi,
        extensionService: Ma,
        paneCompositeService: PC,
        selectedContextService: WX,
        terminalExecutionService: l0t,
        decorationsService: woe,
        lifecycleService: Id,
        customEditorLabelService: ooe,
        analyticsService: ca,
        aiCodeTrackingService: Tse,
        aiCodeEventTrackingService: wBn,
        telemService: hX,
        prettyDialogService: BI,
        pathService: zl,
        userDataProfileService: q_,
        composerContextService: qX,
        composerDecisionsService: ACt,
        composerEffectiveAllowlistService: uLe,
        composerModesService: xC,
        usageDataService: iLe,
        unifiedSkuBillingService: O8e,
        usageLimitPolicyStatusService: Ukt,
        quickInputService: Gs,
        extensionEnablementService: $k,
        knowledgeBaseService: h8e,
        backgroundComposerCachedDetailsStorageService: Oer,
        tunnelService: aL,
        cursorCommandsService: VX,
        authenticationService: Cq,
        toolCallHumanReviewService: kq,
        modelConfigService: QS,
        experimentService: Kr,
        cloudEnvironmentTemplateService: z1e,
        experimentRefreshService: GU,
        cloudMcpOAuthLoopbackService: DUe,
        effortFirstModelPickerAssignmentService: bBn,
        updateNotificationService: kBn,
        updateService: FD,
        uiOverlayService: XT,
        cursorHooksService: V$,
        clientNumericMetricsService: kX,
        subagentsService: U_e,
        pluginsProviderService: EN,
        cloudAgentStorageService: Bkt,
        artifactCacheService: FWt,
        videoAnnotationService: jqi,
        cloudEnvironmentLogService: WJi,
        asyncOperationRegistry: e8e,
        accessibilitySignalService: A0,
        canvasService: z$,
        p2pReferralStatusService: TIo
    }, KOh = "solidjs_stack_trace_limit", YOh = "stackTraceLimitFloor";

}
