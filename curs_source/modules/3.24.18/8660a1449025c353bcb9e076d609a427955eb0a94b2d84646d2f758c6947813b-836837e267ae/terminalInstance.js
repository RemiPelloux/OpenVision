import { D, Di, Ec, Ei, Gt, Hg, Nc, Nt, OYu, Pn, Qe, Vn, Wd, _r, da, en, rd, st, tt, xa, xr } from "./Iwo.js";
import { ADk, IDk, O2g, OMk, PDk, RDk, Rie, Svl, VMk, Yds, h2g, kVe, nDk, p2g, tDk, vvl, w9e, yvl } from "./Ycg.js";
import { GS, Ty } from "./accessibility.js";
import { Nb, l2, xx } from "./accessibilitySignalService.js";
import { glt } from "./amdX.js";
import { I_, dZn, qn } from "./async.js";
import { A_, _7 } from "./browser_2.js";
import { Kte, Sbt } from "./canIUse.js";
import { gs, yt } from "./codicons.js";
import { Ap } from "./colorRegistry.js";
import { nr, rs } from "./commands.js";
import { or, yi } from "./configuration.js";
import { Mf, pf } from "./contextView.js";
import { Hi, Rr } from "./contextkey.js";
import { SM } from "./decorators.js";
import { fwe, r6 } from "./dnd.js";
import { bO, woe } from "./dnd_3.js";
import { Hn, Ix, aoe, nd, ws } from "./dom_2.js";
import { ew } from "./editorColors.js";
import { Wo, gr } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { BAi } from "./environmentVariableShared.js";
import { is, ms } from "./files.js";
import { szt } from "./gYa.js";
import { hV, sI } from "./history_3.js";
import { b_ } from "./iconRegistry.js";
import { It, dn } from "./instantiation.js";
import { HMp, Nx } from "./ipa.js";
import { Ma, Ze } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { nT, rv } from "./keyboardEvent.js";
import { Id, Pv } from "./layoutService_2.js";
import { X2g, mDk } from "./lineDataEventAddon.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Ks, Wr, Yn } from "./notification.js";
import { kc, qc } from "./opener.js";
import { Rd, ih } from "./pathService.js";
import { EC, Ku, Ul, l$e } from "./path_2.js";
import { My, tD } from "./preferences.js";
import { fc, hu } from "./productService.js";
import { Cl, Gu } from "./quickInput.js";
import { D5, coe } from "./scrollable.js";
import { E7, mwe } from "./scrollableElement.js";
import { fW, vW } from "./serviceCollection.js";
import { Zi, ki } from "./storage_2.js";
import { KAe, aBt } from "./tabFocus.js";
import { Mv, NJ } from "./terminal.js";
import { qds, yG } from "./terminalActions.js";
import { Mxg, dAi } from "./terminalCapabilityStore.js";
import { Lds, XEt } from "./terminalColorRegistry.js";
import { QI, ns } from "./terminalContextKey.js";
import { f2n } from "./terminalContextMenu.js";
import { Nat, qas } from "./terminalContribExports.js";
import { FAi, wV } from "./terminalEditorInput.js";
import { Xds } from "./terminalEnvironment_2.js";
import { FX, Zus } from "./terminalExtensions.js";
import { ZEt } from "./terminalIcon.js";
import { Jds, aDk } from "./terminalIconPicker.js";
import { iDk } from "./terminalProcessDataSegment.js";
import { hDk, ths } from "./terminalProcessManager.js";
import { Y2g, pDk } from "./terminalResizeDebouncer.js";
import { Bds, c2g } from "./terminalStatusList.js";
import { Kus } from "./terminalStrings.js";
import { $f, dye } from "./terminalStrings_2.js";
import { d2g } from "./terminalTooltip.js";
import { QEt } from "./terminalUri.js";
import { UC, Z4, ame, ny, pG } from "./terminal_2.js";
import { JCe, PA, Tyg, bR } from "./terminal_3.js";
import { ta } from "./themables.js";
import { Dl, Ml } from "./themeService.js";
import { I2, SMe, dlt } from "./theme_2.js";
import { ehe, uwe } from "./tooltipService.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { ck, q1 } from "./views.js";
import { jT, wb } from "./viewsService.js";
import { eAg, mfl } from "./widgetManager.js";
import { Sr, yr } from "./workspace.js";
import { C2 } from "./workspaceProjectPaths.js";
import { NCe, jx } from "./workspaceTrust.js";
import { L9e, gPg } from "./xtermTerminal.js";
import { z4 } from "./yBp.js";
import { $u, Ctt, E5e, Ii, MQ, P_, koe, kwe, li, mvn, rl, soe } from "./ze.js";
var chs, fPg, cU, uhs, dhs, KAi;
export { KAi, cU, chs, dhs, fPg, uhs };
var __wakaru_T2n_initialized = false;
export function T2n() {
if (__wakaru_T2n_initialized) return;
__wakaru_T2n_initialized = true;
"use strict";
E(), glt(), A_(), Sbt(), fwe(), Hn(), nT(), kwe(), E7(), qn(), gs(), SM(), Ei(), Gt(), Ma(), Nx(), Qe(), Ki(), Ul(), Di(), coe(), ta(), fn(), aBt(), Bt(), Ty(), l2(), rs(), or(), Hi(), pf(), bO(), ms(), It(), vW(), ru(), Ks(), qc(), hu(), Gu(), Zi(), dAi(), BAi(), UC(), Kus(), Ap(), b_(), Dl(), uwe(), Sr(), jx(), I2(), ck(), Wo(), fo(), hV(), Pv(), ih(), tD(), jT(), C2(), bR(), XEt(), QI(), Xds(), iDk(), dye(), Nat(), Mv(), yG(), f2n(), FAi(), FX(), ZEt(), aDk(), hDk(), pDk(), c2g(), QEt(), d2g(), eAg(), mDk(), gPg(), Xo(), fPg = [
    "bash",
    "zsh",
    "pwsh",
    "python"
], cU = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T, I, A, P, M, O, N, U){
        super(), this._terminalShellTypeContextKey = t, this._shellLaunchConfig = e, this._contextKeyService = n, this._contextMenuService = i, this._instantiationService = r, this._terminalConfigurationService = s, this._terminalProfileResolverService = o, this._pathService = a, this._fileService = l, this._keybindingService = c, this._notificationService = u, this._preferencesService = d, this._viewsService = h, this._themeService = p, this._configurationService = g, this._logService = f, this._storageService = _, this._accessibilityService = b, this._productService = y, this._quickInputService = S, this._workbenchEnvironmentService = k, this._workspaceContextService = C, this._editorService = T, this._workspaceTrustRequestService = I, this._historyService = A, this._openerService = P, this._commandService = M, this._tooltipService = O, this._accessibilitySignalService = N, this._viewDescriptorService = U, this._contributions = new Map, this._pressAnyKeyToCloseListener = this._register(new Vn), this._latestXtermWriteData = 0, this._latestXtermParseData = 0, this._title = "", this._titleSource = ame.Process, this._topUiContributionHeights = new Map, this._cursorAttachStyleClasses = new Map, this._cols = 0, this._rows = 0, this._cwd = void 0, this._initialCwd = void 0, this._injectedArgs = void 0, this._layoutSettingsChanged = !0, this._areLinksReady = !1, this._initialDataEventsListener = this._register(new Vn), this._initialDataEvents = [], this._contributionStates = new Map, this._messageTitleDisposable = this._register(new Vn), this._dndObserver = this._register(new Vn), this._processName = "", this._usedShellIntegrationInjection = !1, this.capabilities = this._register(new Mxg), this.disableLayout = !1, this._targetRef = new OYu(void 0), this._onExit = new tt, this._onDisposed = this._register(new tt), this._onProcessIdReady = this._register(new tt), this._onProcessReplayComplete = this._register(new tt), this._onTitleChanged = this._register(new tt), this._onIconChanged = this._register(new tt), this._onWillData = this._register(new tt), this._onData = this._register(new tt), this._onDidData = this._register(new tt), this._onBinary = this._register(new tt), this._onRequestExtHostProcess = this._register(new tt), this._onDimensionsChanged = this._register(new tt), this._onMaximumDimensionsChanged = this._register(new tt), this._onDidFocus = this._register(new tt), this._onDidRequestFocus = this._register(new tt), this._onDidBlur = this._register(new tt), this._onDidInputData = this._register(new tt), this._onDidChangeSelection = this._register(new tt), this._onRequestAddInstanceToGroup = this._register(new tt), this._onDidChangeHasChildProcesses = this._register(new tt), this._onDidExecuteText = this._register(new tt), this._onDidChangeTarget = this._register(new tt), this._onDidSendText = this._register(new tt), this._onDidChangeShellType = this._register(new tt), this._onDidChangeVisibility = this._register(new tt), this._onLineData = this._register(new tt({
            onDidAddFirstListener: async ()=>(this.xterm ?? await this._xtermReadyPromise)?.raw.loadAddon(this._lineDataEventAddon)
        })), this.sessionId = Ai(), this._wrapperElement = Ii("div.terminal-wrapper"), this._xtermWrapperElement = Ii("div.xterm-wrapper"), this._wrapperElement.appendChild(this._xtermWrapperElement), this._wrapperElement.style.display = "flex", this._wrapperElement.style.flexDirection = "column", this._xtermWrapperElement.style.flexGrow = "1", this._xtermWrapperElement.style.flexShrink = "1", this._xtermWrapperElement.style.minHeight = "0", this._widgetManager = this._register(r.createInstance(mfl)), this._isExiting = !1, this._hadFocusOnExit = !1, this._isVisible = !1, this._instanceId = cU._instanceIdCounter++, this._createdAt = Date.now(), this._hasHadInput = !1, this._fixedRows = e.attachPersistentProcess?.fixedDimensions?.rows, this._fixedCols = e.attachPersistentProcess?.fixedDimensions?.cols, this._shellLaunchConfig.shellIntegrationEnvironmentReporting = this._configurationService.getValue("terminal.integrated.shellIntegration.environmentReporting");
        const j = szt(this._workspaceContextService.getWorkspace());
        if (this._resource = h2g(j, this.instanceId, this.title), this._shellLaunchConfig.attachPersistentProcess?.hideFromUser && (this._shellLaunchConfig.hideFromUser = this._shellLaunchConfig.attachPersistentProcess.hideFromUser), this._shellLaunchConfig.attachPersistentProcess?.isFeatureTerminal && (this._shellLaunchConfig.isFeatureTerminal = this._shellLaunchConfig.attachPersistentProcess.isFeatureTerminal), this._shellLaunchConfig.attachPersistentProcess?.type && (this._shellLaunchConfig.type = this._shellLaunchConfig.attachPersistentProcess.type), this._shellLaunchConfig.attachPersistentProcess?.tabActions && (this._shellLaunchConfig.tabActions = this._shellLaunchConfig.attachPersistentProcess.tabActions), this.shellLaunchConfig.cwd) {
            const K = typeof this._shellLaunchConfig.cwd == "string" ? rt.from({
                scheme: Ot.file,
                path: this._shellLaunchConfig.cwd
            }) : this._shellLaunchConfig.cwd;
            K && (this._workspaceFolder = this._workspaceContextService.getWorkspaceFolder(K) ?? void 0);
        }
        if (!this._workspaceFolder) {
            const K = this._historyService.getLastActiveWorkspaceRoot();
            this._workspaceFolder = K ? this._workspaceContextService.getWorkspaceFolder(K) ?? void 0 : void 0;
        }
        const $ = this._register(n.createScoped(this._wrapperElement));
        this._scopedContextKeyService = $, this._scopedInstantiationService = this._register(r.createChild(new fW([
            Rr,
            $
        ]))), this._terminalFocusContextKey = ns.focus.bindTo($), this._terminalHasFixedWidth = ns.terminalHasFixedWidth.bindTo($), this._terminalHasTextContextKey = ns.textSelected.bindTo($), this._terminalAltBufferActiveContextKey = ns.altBufferActive.bindTo($), this._terminalShellIntegrationEnabledContextKey = ns.terminalShellIntegrationEnabled.bindTo($), this._logService.trace(`terminalInstance#ctor (instanceId: ${this.instanceId})`, this._shellLaunchConfig), this._register(this.capabilities.onDidAddCapabilityType((K)=>this._logService.debug("terminalInstance added capability", K))), this._register(this.capabilities.onDidRemoveCapabilityType((K)=>this._logService.debug("terminalInstance removed capability", K)));
        const H = this._register(new da);
        this._register(this.capabilities.onDidAddCapabilityType((K)=>{
            if (H.get(K)?.dispose(), K === 0) {
                const V = this.capabilities.get(K);
                V && H.set(K, V.onDidChangeCwd((Y)=>{
                    this._cwd = Y, this._setTitle(this.title, ame.Config), this._refreshShellIntegrationInfoStatus();
                }));
            }
            if (K === 2) {
                const V = this.capabilities.get(K);
                if (V) {
                    V.promptInputModel.setShellType(this.shellType);
                    const Y = new Nt;
                    Y.add(en.any(V.promptInputModel.onDidStartInput, V.promptInputModel.onDidChangeInput, V.promptInputModel.onDidFinishInput)(()=>{
                        this._labelComputer?.refreshLabel(this), this._refreshShellIntegrationInfoStatus();
                    })), H.set(K, Y);
                }
            }
            if (K === 6) {
                const V = this.capabilities.get(K);
                V && H.set(K, V.onPromptTypeChanged(()=>{
                    this._labelComputer?.refreshLabel(this), this._refreshShellIntegrationInfoStatus();
                }));
            }
        })), this._register(this.onDidChangeShellType(()=>this._refreshShellIntegrationInfoStatus())), this._register(this.capabilities.onDidRemoveCapabilityType((K)=>{
            H.get(K)?.dispose();
        })), !this.shellLaunchConfig.executable && !this._workbenchEnvironmentService.remoteAuthority && this._terminalProfileResolverService.resolveIcon(this._shellLaunchConfig, Hg), this._icon = e.attachPersistentProcess?.icon || e.icon, this.shellLaunchConfig.customPtyImplementation && this._setTitle(this._shellLaunchConfig.name, ame.Api), this.statusList = this._register(this._scopedInstantiationService.createInstance(Bds)), this._initDimensions(), this._processManager = this._createProcessManager(), this._containerReadyBarrier = new dZn(100), this._attachBarrier = new dZn(1e3), this._xtermReadyPromise = this._createXterm(), this._xtermReadyPromise.then(async ()=>{
            await this._containerReadyBarrier.wait();
            let K;
            const V = !this.shellLaunchConfig.customPtyImplementation && this._terminalConfigurationService.config.shellIntegration?.enabled && !this.shellLaunchConfig.executable;
            if (V && this.shellLaunchConfig.attachPersistentProcess) this._processManager.getBackendOS().then((Y)=>this._terminalProfileResolverService.getDefaultProfile({
                    remoteAuthority: this.remoteAuthority,
                    os: Y
                })).then((Y)=>{
                this.shellLaunchConfig.executable ??= Y.path, this.shellLaunchConfig.args ??= Y.args;
            }, xr);
            else if (V) {
                K = await this._processManager.getBackendOS();
                const Y = await this._terminalProfileResolverService.getDefaultProfile({
                    remoteAuthority: this.remoteAuthority,
                    os: K
                });
                this.shellLaunchConfig.executable = Y.path, this.shellLaunchConfig.args = Y.args, this.shellLaunchConfig.icon ??= Y.icon, this.shellLaunchConfig.color ??= Y.color, this.shellLaunchConfig.env ??= Y.env;
            }
            K && this.shellLaunchConfig.executable && this.setShellType(PDk(K, this.shellLaunchConfig.executable)), await this._createProcess(), this.shellLaunchConfig.attachPersistentProcess && (this._cwd = this.shellLaunchConfig.attachPersistentProcess.cwd, this._setTitle(this.shellLaunchConfig.attachPersistentProcess.title, this.shellLaunchConfig.attachPersistentProcess.titleSource), this.setShellType(this.shellType)), this._fixedCols && await this._addScrollbar();
        }).catch((K)=>{
            if (!this.isDisposed) throw K;
        }), this._register(this._configurationService.onDidChangeConfiguration(async (K)=>{
            K.affectsConfiguration("accessibility.verbosity.terminal") && this._setAriaLabel(this.xterm?.raw, this._instanceId, this.title), K.affectsConfiguration("terminal.integrated") && (this.updateConfig(), this.setVisible(this._isVisible)), [
                "terminal.integrated.fontSize",
                "terminal.integrated.fontFamily",
                "terminal.integrated.fontWeight",
                "terminal.integrated.fontWeightBold",
                "terminal.integrated.letterSpacing",
                "terminal.integrated.lineHeight",
                "editor.fontFamily"
            ].some((Y)=>K.affectsConfiguration(Y)) && (this._layoutSettingsChanged = !0, await this._resize()), K.affectsConfiguration("terminal.integrated.unicodeVersion") && this._updateUnicodeVersion(), K.affectsConfiguration("editor.accessibilitySupport") && this.updateAccessibilitySupport(), (K.affectsConfiguration("terminal.integrated.tabs.title") || K.affectsConfiguration("terminal.integrated.tabs.separator") || K.affectsConfiguration("terminal.integrated.tabs.description")) && this._labelComputer?.refreshLabel(this);
        })), this._registerLayoutSettingsInvalidators(), this._register(this._workspaceContextService.onDidChangeWorkspaceFolders(()=>this._labelComputer?.refreshLabel(this)));
        let G = ws(this._container).setTimeout(()=>{
            G = void 0, this._initialDataEvents = void 0, this._initialDataEventsListener.clear();
        }, 1e4);
        this._register(Pn(()=>{
            G && ws(this._container).clearTimeout(G);
        }));
        const q = Zus.getTerminalContributions();
        for (const K of q){
            if (this._contributions.has(K.id)) {
                xr(new Error(`Cannot have two terminal contributions with the same id ${K.id}`));
                continue;
            }
            let V;
            try {
                V = this._register(this._scopedInstantiationService.createInstance(K.ctor, {
                    instance: this,
                    processManager: this._processManager,
                    widgetManager: this._widgetManager
                })), this._contributions.set(K.id, V);
            } catch (Y) {
                xr(Y);
            }
            this._xtermReadyPromise.then((Y)=>{
                Y && !this.isDisposed && V.xtermReady?.(Y);
            }), this._register(this.onDisposed(()=>{
                V.dispose(), this._contributions.delete(K.id), "instance" in V && delete V.instance, "_instance" in V && delete V._instance;
            }));
        }
    }
    get xtermReadyPromise() {
        return this._xtermReadyPromise;
    }
    get domElement() {
        return this._wrapperElement;
    }
    get usedShellIntegrationInjection() {
        return this._usedShellIntegrationInjection;
    }
    get shellIntegrationInjectionFailureReason() {
        return this._shellIntegrationInjectionInfo;
    }
    pauseInputEvents(t) {
        this._pauseInputEventBarrier = t;
    }
    get store() {
        return this._store;
    }
    get extEnvironmentVariableCollection() {
        return this._processManager.extEnvironmentVariableCollection;
    }
    get waitOnExit() {
        return this._shellLaunchConfig.attachPersistentProcess?.waitOnExit || this._shellLaunchConfig.waitOnExit;
    }
    set waitOnExit(t) {
        this._shellLaunchConfig.waitOnExit = t;
    }
    get targetRef() {
        return this._targetRef;
    }
    get target() {
        return this._targetRef.object;
    }
    set target(t) {
        this._targetRef.object = t, this._onDidChangeTarget.fire(t);
    }
    get instanceId() {
        return this._instanceId;
    }
    get createdAt() {
        return this._createdAt;
    }
    get resource() {
        return this._resource;
    }
    get cols() {
        return this._fixedCols !== void 0 ? this._fixedCols : this._dimensionsOverride && this._dimensionsOverride.cols ? this._dimensionsOverride.forceExactSize ? this._dimensionsOverride.cols : Math.min(Math.max(this._dimensionsOverride.cols, 2), this._cols) : this._cols;
    }
    get rows() {
        return this._fixedRows !== void 0 ? this._fixedRows : this._dimensionsOverride && this._dimensionsOverride.rows ? this._dimensionsOverride.forceExactSize ? this._dimensionsOverride.rows : Math.min(Math.max(this._dimensionsOverride.rows, 2), this._rows) : this._rows;
    }
    get isDisposed() {
        return this._store.isDisposed;
    }
    get fixedCols() {
        return this._fixedCols;
    }
    get fixedRows() {
        return this._fixedRows;
    }
    get maxCols() {
        return this._cols;
    }
    get maxRows() {
        return this._rows;
    }
    get processId() {
        return this._processManager.shellProcessId;
    }
    get processReady() {
        return this._processManager.ptyProcessReady;
    }
    get hasChildProcesses() {
        return this.shellLaunchConfig.attachPersistentProcess?.hasChildProcesses || this._processManager.hasChildProcesses;
    }
    get reconnectionProperties() {
        return this.shellLaunchConfig.attachPersistentProcess?.reconnectionProperties || this.shellLaunchConfig.reconnectionProperties;
    }
    get areLinksReady() {
        return this._areLinksReady;
    }
    get initialDataEvents() {
        return this._initialDataEvents;
    }
    get exitCode() {
        return this._exitCode;
    }
    get exitReason() {
        return this._exitReason;
    }
    get hadFocusOnExit() {
        return this._hadFocusOnExit;
    }
    get isTitleSetByProcess() {
        return !!this._messageTitleDisposable.value;
    }
    get shellLaunchConfig() {
        return this._shellLaunchConfig;
    }
    get shellType() {
        return this._shellType;
    }
    get os() {
        return this._processManager.os;
    }
    get isRemote() {
        return this._processManager.remoteAuthority !== void 0;
    }
    get remoteAuthority() {
        return this._processManager.remoteAuthority;
    }
    get hasFocus() {
        return soe(this._wrapperElement);
    }
    get isVisible() {
        return this._isVisible;
    }
    get title() {
        return this._title;
    }
    get titleSource() {
        return this._titleSource;
    }
    get icon() {
        return this._getIcon();
    }
    get color() {
        return this._getColor();
    }
    get hasContributedAttention() {
        return this._someContributionState((t)=>t.hasAttention === !0);
    }
    get hasContributedActions() {
        return this._someContributionState((t)=>t.hasActions === !0);
    }
    get processName() {
        return this._processName;
    }
    get sequence() {
        return this._sequence;
    }
    get staticTitle() {
        return this._staticTitle;
    }
    get progressState() {
        return this.xterm?.progressState;
    }
    get workspaceFolder() {
        return this._workspaceFolder;
    }
    get cwd() {
        return this._cwd;
    }
    get initialCwd() {
        return this._initialCwd;
    }
    get description() {
        if (this._description) return this._description;
        switch(this.shellLaunchConfig.attachPersistentProcess?.type || this.shellLaunchConfig.type){
            case "Task":
                return $f.typeTask;
            case "Local":
                return $f.typeLocal;
            default:
                return;
        }
    }
    get userHome() {
        return this._userHome;
    }
    get shellIntegrationNonce() {
        return this._processManager.shellIntegrationNonce;
    }
    get injectedArgs() {
        return this._injectedArgs;
    }
    get cursorAttachOptions() {
        return this._cursorAttachOptions;
    }
    get onExit() {
        return this._onExit.event;
    }
    get onDisposed() {
        return this._onDisposed.event;
    }
    get onProcessIdReady() {
        return this._onProcessIdReady.event;
    }
    get onProcessReplayComplete() {
        return this._onProcessReplayComplete.event;
    }
    get onTitleChanged() {
        return this._onTitleChanged.event;
    }
    get onIconChanged() {
        return this._onIconChanged.event;
    }
    get onWillData() {
        return this._onWillData.event;
    }
    get onData() {
        return this._onData.event;
    }
    get onDidData() {
        return this._onDidData.event;
    }
    get onBinary() {
        return this._onBinary.event;
    }
    get onRequestExtHostProcess() {
        return this._onRequestExtHostProcess.event;
    }
    get onDimensionsChanged() {
        return this._onDimensionsChanged.event;
    }
    get onMaximumDimensionsChanged() {
        return this._onMaximumDimensionsChanged.event;
    }
    get onDidFocus() {
        return this._onDidFocus.event;
    }
    get onDidRequestFocus() {
        return this._onDidRequestFocus.event;
    }
    get onDidBlur() {
        return this._onDidBlur.event;
    }
    get onDidInputData() {
        return this._onDidInputData.event;
    }
    get onDidChangeSelection() {
        return this._onDidChangeSelection.event;
    }
    get onRequestAddInstanceToGroup() {
        return this._onRequestAddInstanceToGroup.event;
    }
    get onDidChangeHasChildProcesses() {
        return this._onDidChangeHasChildProcesses.event;
    }
    get onDidExecuteText() {
        return this._onDidExecuteText.event;
    }
    get onDidChangeTarget() {
        return this._onDidChangeTarget.event;
    }
    get onDidSendText() {
        return this._onDidSendText.event;
    }
    get onDidChangeShellType() {
        return this._onDidChangeShellType.event;
    }
    get onDidChangeVisibility() {
        return this._onDidChangeVisibility.event;
    }
    get onLineData() {
        return this._onLineData.event;
    }
    getContribution(t) {
        return this._contributions.get(t);
    }
    setTopUiContributionHeight(t, e) {
        e <= 0 ? this._topUiContributionHeights.delete(t) : this._topUiContributionHeights.set(t, e), this._lastLayoutDimensions ? this.layout(this._lastLayoutDimensions) : this._resize();
    }
    clearLine() {
        this.xterm?.raw.write("\x1B[2K"), this.xterm?.raw.write("\r");
    }
    interrupt() {
        this.os === rd.Windows ? this.sendText("q", !1) : this.sendText("", !1);
    }
    async parseCommand(t) {
        let e = this.capabilities.get(2);
        if (!e && (this._processManager.processState === 1 || this._processManager.processState === 2)) {
            const i = new Nt;
            await Promise.race([
                new Promise((r)=>{
                    i.add(this.capabilities.onDidAddCapabilityType((s)=>{
                        s === 2 && (e = this.capabilities.get(2), r());
                    }));
                }),
                Wd(2e3)
            ]), i.dispose();
        }
        if (!e) return;
        const n = t ?? (this.xterm?.raw.buffer.normal.length ?? 1) - 1;
        return this.capabilities.get(3), e.currentCommand ? e.currentCommand : e.getCommandForLine(n);
    }
    async _getAllLinesContent() {
        const t = this.xterm?.getBufferLength();
        if (t !== void 0) return this.xterm?.getBufferLines(0, t).join(`
`);
    }
    setContributionState(t, e) {
        const n = this._contributionStates.get(t);
        n === e || ADk(n, e) || (e ? this._contributionStates.set(t, e) : this._contributionStates.delete(t), this._onIconChanged.fire({
            instance: this,
            userInitiated: !1
        }));
    }
    _getIcon() {
        const t = this._getContributedIcon();
        return t || (this._icon || (this._icon = this._processManager.processState >= 2 ? E5e().getIcon(this._configurationService.getValue("terminal.integrated.tabs.defaultIcon")) : void 0), this._icon);
    }
    _getContributedIcon() {
        for (const t of this._contributionStates.values())if (t.icon) return t.icon;
    }
    _someContributionState(t) {
        for (const e of this._contributionStates.values())if (t(e)) return !0;
        return !1;
    }
    _getColor() {
        if (this.shellLaunchConfig.color) return this.shellLaunchConfig.color;
        if (this.shellLaunchConfig?.attachPersistentProcess?.color) return this.shellLaunchConfig.attachPersistentProcess.color;
        this._processManager.processState >= 2;
    }
    _initDimensions() {
        if (!this._container) {
            this._cols = 80, this._rows = 30;
            return;
        }
        const t = ws(this._xtermWrapperElement).getComputedStyle(this._xtermWrapperElement), e = parseInt(t.width), n = parseInt(t.height);
        this._evaluateColsAndRows(e, n);
    }
    _evaluateColsAndRows(t, e) {
        if (!t || !e) return this._setLastKnownColsAndRows(), null;
        const n = this._getDimension(t, e);
        if (!n) return this._setLastKnownColsAndRows(), null;
        const i = this.xterm ? this.xterm.getFont() : this._terminalConfigurationService.getFont(ws(this.domElement)), r = IDk(ws(this.domElement), i, n.width, n.height);
        return r ? ((this._cols !== r.cols || this._rows !== r.rows) && (this._cols = r.cols, this._rows = r.rows, this._fireMaximumDimensionsChanged()), n.width) : (this._setLastKnownColsAndRows(), null);
    }
    _setLastKnownColsAndRows() {
        cU._lastKnownGridDimensions && (this._cols = cU._lastKnownGridDimensions.cols, this._rows = cU._lastKnownGridDimensions.rows);
    }
    _fireMaximumDimensionsChanged() {
        this._onMaximumDimensionsChanged.fire();
    }
    _getDimension(t, e) {
        const n = this.xterm ? this.xterm.getFont() : this._terminalConfigurationService.getFont(ws(this.domElement));
        if (!n || !n.charWidth || !n.charHeight || !this.xterm?.raw.element) return;
        const i = ws(this.xterm.raw.element).getComputedStyle(this.xterm.raw.element), r = parseInt(i.paddingLeft) + parseInt(i.paddingRight) + 14, s = parseInt(i.paddingTop) + parseInt(i.paddingBottom);
        return cU._lastKnownCanvasDimensions = new nd(Math.min(4096, t - r), e - s + (this._hasScrollBar && this._horizontalScrollbar ? -5 : 0)), cU._lastKnownCanvasDimensions;
    }
    _flashReadOnlyTerminal() {
        this._wrapperElement && (this._readOnlyFlashTimeout && clearTimeout(this._readOnlyFlashTimeout), this._wrapperElement.classList.remove("flash-read-only"), this._wrapperElement.offsetWidth, this._wrapperElement.classList.add("flash-read-only"), this._readOnlyFlashTimeout = setTimeout(()=>{
            this._wrapperElement?.classList.remove("flash-read-only");
        }, 300));
    }
    get persistentProcessId() {
        return this._processManager.persistentProcessId;
    }
    get shouldPersist() {
        return this._processManager.shouldPersist && !this.shellLaunchConfig.isTransient && (!this.reconnectionProperties || this._configurationService.getValue("task.reconnection") === !0);
    }
    static getXtermConstructor(t, e) {
        const n = t.lookupKeybinding(qas.A11yFocusAccessibleBuffer, e);
        return chs || (chs = I_.withAsyncBody(async (i)=>{
            const r = (await Rie("@xterm/xterm", "lib/xterm.js")).Terminal;
            r.strings.promptLabel = D(10286, null), r.strings.tooMuchOutput = n ? D(10287, null, n.getLabel()) : D(10288, null), i(r);
        }), chs);
    }
    async _createXterm() {
        const t = await cU.getXtermConstructor(this._keybindingService, this._contextKeyService);
        if (this.isDisposed) return;
        const e = this.shellLaunchConfig.executable === void 0 || this.shellType === void 0 || !fPg.includes(this.shellType), n = this._scopedInstantiationService.createInstance(L9e, t, {
            cols: this._cols,
            rows: this._rows,
            xtermColorProvider: this._scopedInstantiationService.createInstance(KAi, this._targetRef),
            capabilities: this.capabilities,
            shellIntegrationNonce: this._processManager.shellIntegrationNonce,
            disableShellIntegrationReporting: e,
            nativeOptions: this._shellLaunchConfig.convertEol ? {
                convertEol: !0
            } : void 0,
            terminalUri: this.resource,
            terminalInstanceGetter: ()=>this
        }, this.onDidExecuteText);
        this.xterm = n, this._resizeDebouncer = this._register(new Y2g(()=>this._isVisible, ()=>n, async (s, o)=>{
            n.raw.resize(s, o), await this._updatePtyDimensions(n.raw);
        }, async (s)=>{
            n.raw.resize(s, n.raw.rows), await this._updatePtyDimensions(n.raw);
        }, async (s)=>{
            n.raw.resize(n.raw.cols, s), await this._updatePtyDimensions(n.raw);
        })), this._register(Pn(()=>this._resizeDebouncer = void 0)), this.updateAccessibilitySupport(), this._register(this.xterm.onDidRequestRunCommand((s)=>{
            this.sendText(s.command.command, !s.noNewLine);
        })), this._register(this.xterm.onDidRequestRefreshDimensions(()=>{
            this._lastLayoutDimensions && this.layout(this._lastLayoutDimensions);
        }));
        const i = this._shellLaunchConfig.initialText ? new Promise((s)=>this._writeInitialText(n, s)) : void 0, r = this._register(new X2g(i));
        if (this._register(r.onLineData((s)=>this._onLineData.fire(s))), this._lineDataEventAddon = r, Ec(()=>{
            this._register(n.raw.onBell(()=>{
                (this._configurationService.getValue("terminal.integrated.enableBell") || this._configurationService.getValue("terminal.integrated.enableVisualBell")) && this.statusList.add({
                    id: "bell",
                    severity: Yn.Warning,
                    icon: yt.bell,
                    tooltip: D(10289, null)
                }, this._terminalConfigurationService.config.bellDuration), this._accessibilitySignalService.playSignal(Nb.terminalBell);
            }));
        }, 1e3, this._store), this._register(n.raw.onSelectionChange(()=>this._onDidChangeSelection.fire(this))), this._register(n.raw.buffer.onBufferChange(()=>this._refreshAltBufferContextKey())), this._register(this._processManager.onProcessData((s)=>this._onProcessData(s))), this._register(n.raw.onData(async (s)=>{
            this._tooltipService.registerEvent("terminal.type"), await this._pauseInputEventBarrier?.wait(), await this._processManager.write(s), this._onDidInputData.fire(s);
        })), this._register(n.raw.onBinary((s)=>this._processManager.processBinary(s))), this._register(this._processManager.onProcessReady(async (s)=>{
            const o = this._processManager._process;
            o?.onReadOnlyInput && this._register(o.onReadOnlyInput(()=>{
                this._flashReadOnlyTerminal();
            })), s?.windowsPty?.backend === "conpty" && this._register(n.raw.parser.registerCsiHandler({
                final: "c"
            }, (a)=>a.length === 0 || a.length === 1 && a[0] === 0 ? (this._processManager.write("\x1B[?61;4c"), !0) : !1)), this._processManager.os && r.setOperatingSystem(this._processManager.os), n.raw.options.windowsPty = s.windowsPty;
        })), this._register(this._processManager.onRestoreCommands((s)=>this.xterm?.shellIntegration.deserialize(s))), this._register(this._viewDescriptorService.onDidChangeLocation(({ views: s })=>{
            s.some((o)=>o.id === PA) && n.refresh();
        })), this._register(n.onDidChangeProgress(()=>this._labelComputer?.refreshLabel(this))), this._register(en.runAndSubscribe(n.shellIntegration.onDidChangeSeenSequences, ()=>{
            n.shellIntegration.seenSequences.size > 0 && this._refreshShellIntegrationInfoStatus();
        })), !this.capabilities.has(0)) {
            let s = n.raw.onKey((o)=>{
                new rv(o.domEvent).equals(Ze.Enter) && this._updateProcessCwd();
            });
            this._register(this.capabilities.onDidAddCapabilityType((o)=>{
                o === 0 && (s?.dispose(), s = void 0);
            }));
        }
        return this._pathService.userHome().then((s)=>{
            this._userHome = s.fsPath;
        }), this._isVisible && this._open(), n;
    }
    _refreshShellIntegrationInfoStatus() {
        OMk(this);
    }
    async runCommand(t, e) {
        let n = this.capabilities.get(2);
        if (!n && (this._processManager.processState === 1 || this._processManager.processState === 2)) {
            const i = new Nt;
            await Promise.race([
                new Promise((r)=>{
                    i.add(this.capabilities.onDidAddCapabilityType((s)=>{
                        s === 2 && (n = this.capabilities.get(2), r());
                    }));
                }),
                Wd(2e3)
            ]), i.dispose();
        }
        (!n || n.promptInputModel.value.length > 0) && (await this.sendText("", !1), await Wd(100)), await this.sendText(t, e, !e);
    }
    detachFromElement() {
        this._wrapperElement.remove(), this._container = void 0, this._dndObserver.clear();
    }
    _setCursorAttachStyleClasses(t, e) {
        for (const i of this._cursorAttachStyleClasses.get(t) ?? [])t.classList.remove(i);
        const n = [];
        for (const i of new Set(e?.split(/\s+/).filter(Boolean) ?? []))t.classList.contains(i) || (t.classList.add(i), n.push(i));
        this._cursorAttachStyleClasses.set(t, n);
    }
    _applyCursorAttachStyleSlots() {
        const t = this._cursorAttachOptions?.styleSlots;
        this._setCursorAttachStyleClasses(this._wrapperElement, t?.terminalWrapperClassName), this._setCursorAttachStyleClasses(this._xtermWrapperElement, t?.xtermWrapperClassName);
    }
    _applyXtermCursorAttachOptions() {
        this.xterm?.setDecorationsVisible(this._cursorAttachOptions?.decorationsVisible ?? !0);
    }
    attachToElement(t, e) {
        this._cursorAttachOptions = e, this._applyCursorAttachStyleSlots(), this._applyXtermCursorAttachOptions(), this._container !== t && (this._attachBarrier.isOpen() || this._attachBarrier.open(), this._container = t, this._container.appendChild(this._wrapperElement), this.xterm?.raw.element && (this._xtermWrapperElement.xterm = this.xterm.raw, this.xterm.attachToElement(this._xtermWrapperElement), this._applyXtermCursorAttachOptions()), this.xterm?.refresh(), setTimeout(()=>{
            this._store.isDisposed || this._container !== t || this._initDragAndDrop(t);
        }, 0));
    }
    _open() {
        if (!this.xterm || this.xterm.raw.element || !this._container || !this._container.isConnected) return;
        this._container.appendChild(this._wrapperElement);
        const t = this.xterm;
        this._xtermWrapperElement.xterm = t.raw;
        const e = t.attachToElement(this._xtermWrapperElement);
        this._applyXtermCursorAttachOptions();
        for (const n of this._contributions.values())this.xterm ? n.xtermOpen?.(this.xterm) : this._xtermReadyPromise.then((i)=>{
            i && n.xtermOpen?.(i);
        });
        if (this._register(t.shellIntegration.onDidChangeStatus(()=>{
            this.hasFocus ? this._setShellIntegrationContextKey() : this._terminalShellIntegrationEnabledContextKey.reset();
        })), !t.raw.element || !t.raw.textarea) throw new Error("xterm elements not set after open");
        this._setAriaLabel(t.raw, this._instanceId, this._title), t.raw.attachCustomKeyEventHandler((n)=>{
            if (this._isExiting) return !1;
            const i = new rv(n), r = this._keybindingService.softDispatch(i, i.target), s = r.kind === 1 && this._terminalConfigurationService.config.allowChords && n.key !== "Escape";
            if (this._keybindingService.inChordMode || s) return n.preventDefault(), !1;
            const o = "terminal.integrated.showTerminalConfigPrompt", a = [
                "RightArrow",
                "LeftArrow",
                "UpArrow",
                "DownArrow",
                "Space",
                "Meta",
                "Control",
                "Shift",
                "Alt",
                "",
                "Delete",
                "Backspace",
                "Tab"
            ];
            return this._storageService.getBoolean(o, -1, !0) && !a.includes(n.key) && !n.ctrlKey && !n.shiftKey && !n.altKey && (this._hasHadInput = !0), r.kind === 2 && r.commandId && this._isGlassCommand(r.commandId) ? (n.preventDefault(), !1) : r.kind === 2 && r.commandId && this._terminalConfigurationService.shouldSkipTerminalCommand(r.commandId) && !this._terminalConfigurationService.config.sendKeybindingsToShell ? (this._storageService.getBoolean(o, -1, !0) && this._hasHadInput && !Tyg.includes(r.commandId) && (this._notificationService.prompt(Yn.Info, D(10290, null, this._productService.nameLong), [
                {
                    label: D(10291, null),
                    run: ()=>{
                        this._preferencesService.openSettings({
                            jsonEditor: !1,
                            query: "@id:terminal.integrated.commandsToSkipShell,terminal.integrated.sendKeybindingsToShell,terminal.integrated.allowChords"
                        });
                    }
                }
            ]), this._storageService.store(o, !1, -1, 0)), n.preventDefault(), !1) : this._terminalConfigurationService.config.allowMnemonics && !_r && n.altKey || KAe.getTabFocusMode() && n.key === "Tab" ? !1 : n.key === "Tab" && n.shiftKey ? (n.preventDefault(), !0) : !(xa && n.altKey && n.key === "F4" && !n.ctrlKey || !Kte.clipboard.readText && n.key === "v" && n.ctrlKey);
        }), this._register(li(t.raw.element, "mousedown", ()=>{
            const n = li(t.raw.element.ownerDocument, "mouseup", ()=>{
                setTimeout(()=>this._refreshSelectionContextKey(), 0), n.dispose();
            });
        })), this._register(li(t.raw.element, "touchstart", ()=>{
            t.raw.focus();
        })), this._register(li(t.raw.element, "keyup", ()=>{
            setTimeout(()=>this._refreshSelectionContextKey(), 0);
        })), this._register(li(t.raw.textarea, "focus", ()=>this._setFocus(!0))), this._register(li(t.raw.textarea, "blur", ()=>this._setFocus(!1))), this._register(li(t.raw.textarea, "focusout", ()=>this._setFocus(!1))), this._initDragAndDrop(this._container), this._widgetManager.attachToElement(e), this._lastLayoutDimensions && this.layout(this._lastLayoutDimensions), this.updateConfig(), t.raw.options.disableStdin && this._attachPressAnyKeyToCloseListener(t.raw);
    }
    _setFocus(t) {
        t ? (this._terminalFocusContextKey.set(!0), this._setShellIntegrationContextKey(), this._onDidFocus.fire(this), this._wrapperElement.classList.add("focus")) : (this.resetFocusContextKey(), this._onDidBlur.fire(this), this._refreshSelectionContextKey(), this._wrapperElement.classList.remove("focus"));
    }
    _setShellIntegrationContextKey() {
        this.xterm && this._terminalShellIntegrationEnabledContextKey.set(this.xterm.shellIntegration.status === 2);
    }
    resetFocusContextKey() {
        this._terminalFocusContextKey.reset(), this._terminalShellIntegrationEnabledContextKey.reset();
    }
    _initDragAndDrop(t) {
        const e = new Nt, n = e.add(this._scopedInstantiationService.createInstance(uhs, t));
        e.add(n.onDropTerminal((i)=>this._onRequestAddInstanceToGroup.fire(i))), e.add(n.onDropFile(async (i)=>{
            this.focus(), await this.sendPath(i, !1);
        })), e.add(new aoe(t, n)), this._dndObserver.value = e;
    }
    hasSelection() {
        return this.xterm ? this.xterm.raw.hasSelection() : !1;
    }
    get selection() {
        return this.xterm && this.hasSelection() ? this.xterm.raw.getSelection() : void 0;
    }
    clearSelection() {
        this.xterm?.raw.clearSelection();
    }
    _refreshAltBufferContextKey() {
        const t = this._terminalAltBufferActiveContextKey.get(), e = !!(this.xterm && this.xterm.raw.buffer.active === this.xterm.raw.buffer.alternate);
        if (this._terminalAltBufferActiveContextKey.set(e), t && !e && this.xterm?.raw.element) {
            const n = this.xterm.raw.buffer.active.viewportY;
            Ix(ws(this.xterm.raw.element), ()=>{
                const i = this.xterm?.raw.element?.querySelector(".xterm-viewport");
                i && i.scrollTop !== 0 && (i.scrollTop = 0, this.xterm?.raw.scrollToLine(n));
            });
        }
    }
    dispose(t) {
        if (!(this.shellLaunchConfig.type === "Task" && t === pG.Process && this._exitCode !== 0 && !this.shellLaunchConfig.waitOnExit) && !this.isDisposed) {
            this._logService.trace(`terminalInstance#dispose (instanceId: ${this.instanceId})`), Nc(this._widgetManager), this.xterm?.raw.element && (this._hadFocusOnExit = this.hasFocus), this._xtermWrapperElement.xterm && (this._xtermWrapperElement.xterm = void 0), this._horizontalScrollbar && (this._store.delete(this._horizontalScrollbar), this._horizontalScrollbar = void 0), this._resizeDebouncer?.dispose(), this._resizeDebouncer = void 0;
            try {
                this.xterm?.dispose();
            } catch (e) {
                this._logService.error("Exception occurred during xterm disposal", e);
            }
            _7 && (this.resetFocusContextKey(), this._terminalHasTextContextKey.reset(), this._onDidBlur.fire(this)), this._pressAnyKeyToCloseListener.clear(), this._exitReason === void 0 && (this._exitReason = t ?? pG.Unknown), this._processManager.dispose(), this._onProcessExit(void 0), this._onDisposed.fire(this), super.dispose();
        }
    }
    async detachProcessAndDispose(t) {
        await this._processManager.detachFromProcess(t === pG.User), this.dispose(t);
    }
    focus(t) {
        this._refreshAltBufferContextKey(), this.xterm && (t || !rl().getSelection()?.toString()) && (this.xterm.raw.focus(), this._onDidRequestFocus.fire());
    }
    async focusWhenReady(t) {
        await this._xtermReadyPromise, await this._attachBarrier.wait(), this.focus(t);
    }
    async sendText(t, e, n) {
        this._tooltipService.registerEvent("terminal.type"), n && this.xterm?.raw.modes.bracketedPasteMode && (t = `\x1B[200~${t}\x1B[201~`), t = t.replace(/\r?\n/g, "\r"), e && !t.endsWith("\r") && (t += "\r"), this._logService.debug("sending data (vscode)", t), await this._processManager.write(t), this._onDidInputData.fire(t), this._onDidSendText.fire(t), this.xterm?.scrollToBottom(), e && this._onDidExecuteText.fire();
    }
    async sendSignal(t) {
        this._logService.debug("sending signal (vscode)", t), await this._processManager.sendSignal(t);
    }
    async sendPath(t, e) {
        return this.sendText(await this.preparePathForShell(t), e);
    }
    async preparePathForShell(t) {
        return await this.processReady, O2g(t, this.shellLaunchConfig.executable, this.title, this.shellType, this._processManager.backend, this._processManager.os);
    }
    async getUriLabelForShell(t) {
        return await this.processReady, tDk(t, this._processManager.backend, this.shellType, this.os);
    }
    setVisible(t) {
        const e = this._isVisible !== t;
        this._isVisible = t, this._wrapperElement.classList.toggle("active", t), t && this.xterm && (this._open(), e && (this._resizeDebouncer?.flush(), this._resize())), e && this._onDidChangeVisibility.fire(t);
    }
    scrollDownLine() {
        this.xterm?.scrollDownLine();
    }
    scrollDownPage() {
        this.xterm?.scrollDownPage();
    }
    scrollToBottom() {
        this.xterm?.scrollToBottom();
    }
    scrollUpLine() {
        this.xterm?.scrollUpLine();
    }
    scrollUpPage() {
        this.xterm?.scrollUpPage();
    }
    scrollToTop() {
        this.xterm?.scrollToTop();
    }
    clearBuffer() {
        this._processManager.clearBuffer(), this.xterm?.clearBuffer();
    }
    _refreshSelectionContextKey() {
        const t = !!this._viewsService.getActiveViewWithId(PA);
        let e = !1;
        const n = this._editorService.activeEditor;
        n && (e = n instanceof wV), this._terminalHasTextContextKey.set((t || e) && this.hasSelection());
    }
    _createProcessManager() {
        let t;
        this.shellLaunchConfig.attachPersistentProcess?.environmentVariableCollections && (t = VMk(this.shellLaunchConfig.attachPersistentProcess.environmentVariableCollections));
        const e = this._scopedInstantiationService.createInstance(ths, this._instanceId, this.shellLaunchConfig?.cwd, t, this.shellLaunchConfig.shellIntegrationNonce ?? this.shellLaunchConfig.attachPersistentProcess?.shellIntegrationNonce);
        return this.capabilities.add(e.capabilities), this._register(e.onProcessReady(async (n)=>{
            this._onProcessIdReady.fire(this), this._initialCwd = await this.getInitialCwd(), this._labelComputer || (this._labelComputer = this._register(this._scopedInstantiationService.createInstance(dhs)), this._register(this._labelComputer.onDidChangeLabel((i)=>{
                (this._title !== i.title || this._description !== i.description) && (this._title = i.title, this._description = i.description, this._onTitleChanged.fire(this));
            }))), this._shellLaunchConfig.name ? this._setTitle(this._shellLaunchConfig.name, ame.Api) : (setTimeout(()=>{
                this._xtermReadyPromise.then((i)=>{
                    i && (this._messageTitleDisposable.value = i.raw.onTitleChange((r)=>this._onTitleChange(r)));
                });
            }), this._setTitle(this._shellLaunchConfig.executable, ame.Process));
        })), this._register(e.onProcessExit((n)=>this._onProcessExit(n))), this._register(e.onDidChangeProperty(({ type: n, value: i })=>{
            switch(n){
                case "cwd":
                    this._cwd = i, this._labelComputer?.refreshLabel(this);
                    break;
                case "initialCwd":
                    this._initialCwd = i, this._cwd = this._initialCwd, this._setTitle(this.title, ame.Config), this._icon = this._shellLaunchConfig.attachPersistentProcess?.icon || this._shellLaunchConfig.icon, this._onIconChanged.fire({
                        instance: this,
                        userInitiated: !1
                    });
                    break;
                case "title":
                    this._setTitle(i ?? "", ame.Process);
                    break;
                case "overrideDimensions":
                    this.setOverrideDimensions(i, !0);
                    break;
                case "resolvedShellLaunchConfig":
                    this._setResolvedShellLaunchConfig(i);
                    break;
                case "shellType":
                    this.setShellType(i);
                    break;
                case "hasChildProcesses":
                    this._onDidChangeHasChildProcesses.fire(i);
                    break;
                case "usedShellIntegrationInjection":
                    this._usedShellIntegrationInjection = !0;
                    break;
                case "shellIntegrationInjectionFailureReason":
                    this._shellIntegrationInjectionInfo = i;
                    break;
            }
        })), this._initialDataEventsListener.value = e.onProcessData((n)=>this._initialDataEvents?.push(n.data)), this._register(e.onProcessReplayComplete(()=>this._onProcessReplayComplete.fire())), this._register(e.onEnvironmentVariableInfoChanged((n)=>this._onEnvironmentVariableInfoChanged(n))), this._register(e.onPtyDisconnect(()=>{
            this.xterm && (this.xterm.raw.options.disableStdin = !0), this.statusList.add({
                id: "disconnected",
                severity: Yn.Error,
                icon: yt.debugDisconnect,
                tooltip: D(10292, null)
            });
        })), this._register(e.onPtyReconnect(()=>{
            this.xterm && (this.xterm.raw.options.disableStdin = !1), this.statusList.remove("disconnected");
        })), e;
    }
    createProcessManager() {
        return this._createProcessManager();
    }
    async _createProcess() {
        if (this.isDisposed) return;
        if (this._historyService.getLastActiveWorkspaceRoot(Ot.file)) {
            if (!await this._trust()) {
                this._onProcessExit({
                    message: D(10293, null)
                });
                return;
            }
        } else if (this._cwd && this._userHome && this._cwd !== this._userHome) {
            this._onProcessExit({
                message: D(10294, null, this._cwd, this._userHome)
            });
            return;
        }
        this._container && this._cols === 0 && this._rows === 0 && (this._initDimensions(), this.xterm?.raw.resize(this._cols || 80, this._rows || 30));
        const e = this.shellLaunchConfig.icon;
        await this._processManager.createProcess(this._shellLaunchConfig, this._cols || 80, this._rows || 30).then((n)=>{
            n && ("message" in n ? this._onProcessExit(n) : "injectedArgs" in n && (this._injectedArgs = n.injectedArgs));
        }), !this.isDisposed && (this.xterm?.shellIntegration && this.capabilities.add(this.xterm.shellIntegration.capabilities), (e !== this.shellLaunchConfig.icon || this.shellLaunchConfig.color) && (this._icon = this._shellLaunchConfig.attachPersistentProcess?.icon || this._shellLaunchConfig.icon, this._onIconChanged.fire({
            instance: this,
            userInitiated: !1
        })));
    }
    registerMarker(t) {
        return this.xterm?.raw.registerMarker(t);
    }
    addBufferMarker(t) {
        this.capabilities.get(4)?.addMark(t);
    }
    scrollToMark(t, e, n) {
        this.xterm?.markTracker.scrollToClosestMarker(t, e, n);
    }
    async freePortKillProcess(t, e) {
        await this._processManager?.freePortKillProcess(t), this.runCommand(e, !1);
    }
    _onProcessData(t) {
        const e = nDk(t.data, (n)=>{
            this._writeProcessData(n);
        });
        t.trackCommit ? t.writePromise = new Promise((n)=>this._writeProcessData(e, n)) : this._writeProcessData(e);
    }
    _writeProcessData(t, e) {
        this._onWillData.fire(t);
        const n = ++this._latestXtermWriteData;
        this.xterm?.raw.write(t, ()=>{
            this._latestXtermParseData = n, this._processManager.acknowledgeDataEvent(t.length), e?.(), this._onData.fire(t), this._onDidData.fire(t);
        });
    }
    async _onProcessExit(t) {
        if (this._isExiting) return;
        const e = RDk(t, this.shellLaunchConfig, this._processManager.processState, this._initialCwd);
        if (this._usedShellIntegrationInjection && this._processManager.processState === 4 && e?.code !== 0) {
            this._relaunchWithShellIntegrationDisabled(e?.message), this._onExit.fire(t);
            return;
        }
        this._isExiting = !0, await this._flushXtermData(), this._exitCode = e?.code;
        const n = e?.message;
        this._logService.debug("Terminal process exit", "instanceId", this.instanceId, "code", this._exitCode, "processState", this._processManager.processState);
        const i = this.waitOnExit;
        if (i && this._processManager.processState !== 5) this._xtermReadyPromise.then((r)=>{
            if (!(!r || this.isDisposed)) {
                switch(n && r.raw.write(w9e(n)), typeof i){
                    case "string":
                        r.raw.write(w9e(i, {
                            excludeLeadingNewLine: !0
                        }));
                        break;
                    case "function":
                        this.exitCode !== void 0 && r.raw.write(w9e(i(this.exitCode), {
                            excludeLeadingNewLine: !0
                        }));
                        break;
                }
                r.raw.options.disableStdin = !0, r.raw.textarea && this._attachPressAnyKeyToCloseListener(r.raw);
            }
        });
        else {
            if (n) {
                const r = this._processManager.processState === 4;
                this.reconnectionProperties?.data?.agentOwned === !0 || this._shellLaunchConfig.hideFromUser === !0 ? this._logService.debug("Hidden/feature terminal exited with error, suppressing notification:", n) : r || this._terminalConfigurationService.config.showExitAlert && this.xterm?.lastInputEvent !== "" ? this._notificationService.notify({
                    message: n,
                    severity: Yn.Error,
                    actions: {
                        primary: [
                            this._scopedInstantiationService.createInstance(qds)
                        ]
                    }
                }) : this._logService.warn(n);
            }
            this.dispose(pG.Process);
        }
        this._onExit.fire(t), this.isDisposed && this._onExit.dispose();
    }
    _relaunchWithShellIntegrationDisabled(t) {
        this._shellLaunchConfig.ignoreShellIntegration = !0, this.relaunch(), this.statusList.add({
            id: "shell-integration-attention-needed",
            severity: Yn.Warning,
            icon: yt.warning,
            tooltip: `${t} ` + D(10295, null),
            hoverActions: [
                {
                    commandId: "workbench.action.terminal.learnMore",
                    label: D(10296, null),
                    run: ()=>{
                        this._openerService.open("https://code.visualstudio.com/docs/editor/integrated-terminal#_shell-integration");
                    }
                },
                {
                    commandId: "workbench.action.openSettings",
                    label: D(10297, null),
                    run: ()=>{
                        this._commandService.executeCommand("workbench.action.openSettings", "terminal.integrated.shellIntegration.enabled");
                    }
                }
            ]
        });
    }
    _flushXtermData() {
        if (this._latestXtermWriteData === this._latestXtermParseData) return Promise.resolve();
        let t = 0;
        return new Promise((e)=>{
            const n = Ctt(rl().window, ()=>{
                (this._latestXtermWriteData === this._latestXtermParseData || ++t === 5) && (n.dispose(), e());
            }, 20);
        });
    }
    _attachPressAnyKeyToCloseListener(t) {
        this.isDisposed || t.textarea && !this._pressAnyKeyToCloseListener.value && (this._pressAnyKeyToCloseListener.value = li(t.textarea, "keypress", (e)=>{
            this._pressAnyKeyToCloseListener.value && (this._pressAnyKeyToCloseListener.clear(), this.dispose(pG.Process), e.preventDefault());
        }));
    }
    _writeInitialText(t, e) {
        if (!this._shellLaunchConfig.initialText) {
            e?.();
            return;
        }
        const n = typeof this._shellLaunchConfig.initialText == "string" ? this._shellLaunchConfig.initialText : this._shellLaunchConfig.initialText?.text;
        typeof this._shellLaunchConfig.initialText == "string" || this._shellLaunchConfig.initialText.trailingNewLine ? t.raw.writeln(n, e) : t.raw.write(n, e);
    }
    async reuseTerminal(t, e = !1) {
        this._pressAnyKeyToCloseListener.clear();
        const n = this.xterm;
        n && (e || await new Promise((i)=>n.raw.write(`
\x1B[G`, i)), t.initialText && (this._shellLaunchConfig.initialText = t.initialText, await new Promise((i)=>this._writeInitialText(n, i))), this._isExiting && this._shellLaunchConfig.waitOnExit && (n.raw.options.disableStdin = !1, this._isExiting = !1), e && n.clearDecorations()), this.statusList.remove("relaunch-needed"), e || (t.initialText = " "), this._shellLaunchConfig = t, await this._processManager.relaunch(this._shellLaunchConfig, this._cols || 80, this._rows || 30, e).then((i)=>{
            i && ("message" in i ? this._onProcessExit(i) : "injectedArgs" in i && (this._injectedArgs = i.injectedArgs));
        });
    }
    relaunch() {
        this.reuseTerminal(this._shellLaunchConfig, !0);
    }
    _onTitleChange(t) {
        this.isTitleSetByProcess && this._setTitle(t, ame.Sequence);
    }
    async _trust() {
        return await this._workspaceTrustRequestService.requestWorkspaceTrust({
            message: D(10298, null)
        }) === !0;
    }
    async _updateProcessCwd() {
        if (!(this.isDisposed || this.shellLaunchConfig.customPtyImplementation)) try {
            const t = await this._refreshProperty("cwd");
            if (typeof t != "string") throw new Error(`cwd is not a string ${t}`);
        } catch (t) {
            if (t instanceof Error && t.message === "Cannot refresh property when process is not set") return;
            throw t;
        }
    }
    updateConfig() {
        this._refreshEnvironmentVariableInfoWidgetState(this._processManager.environmentVariableInfo);
    }
    async _updateUnicodeVersion() {
        this._processManager.setUnicodeVersion(this._terminalConfigurationService.config.unicodeVersion);
    }
    updateAccessibilitySupport() {
        this.xterm.raw.options.screenReaderMode = this._accessibilityService.isScreenReaderOptimized();
    }
    _isGlassCommand(t) {
        return !1;
    }
    _registerLayoutSettingsInvalidators() {}
    async _invalidateLayoutSettings() {
        this._layoutSettingsChanged = !0, await this._resize();
    }
    layout(t) {
        if (this._lastLayoutDimensions = t, this.disableLayout) return;
        const e = Array.from(this._topUiContributionHeights.values()).reduce((r, s)=>r + s, 0), n = new nd(t.width, Math.max(t.height - e, 21));
        if (this._isVisible && this._open(), !(n.width <= 0 || n.height <= 20 || !this._evaluateColsAndRows(n.width, n.height))) {
            this._resize(), this._containerReadyBarrier.isOpen() || this._containerReadyBarrier.open();
            for (const r of this._contributions.values())this.xterm ? r.layout?.(this.xterm, n) : this._xtermReadyPromise.then((s)=>{
                s && r.layout?.(s, n);
            });
        }
    }
    async _resize(t) {
        if (!this.xterm || !this._resizeDebouncer) return;
        let e = this.cols, n = this.rows;
        if (this._isVisible && this._layoutSettingsChanged) {
            const i = this.xterm.getFont(), r = this._terminalConfigurationService.config;
            this.xterm.raw.options.letterSpacing = i.letterSpacing, this.xterm.raw.options.lineHeight = i.lineHeight, this.xterm.raw.options.fontSize = i.fontSize, this.xterm.raw.options.fontFamily = i.fontFamily, this.xterm.raw.options.fontWeight = r.fontWeight, this.xterm.raw.options.fontWeightBold = r.fontWeightBold, this._initDimensions(), e = this.cols, n = this.rows, this._layoutSettingsChanged = !1;
        }
        isNaN(e) || isNaN(n) || ((e !== this.xterm.raw.cols || n !== this.xterm.raw.rows) && ((this._fixedRows || this._fixedCols) && await this._updateProperty("fixedDimensions", {
            cols: this._fixedCols,
            rows: this._fixedRows
        }), this._onDimensionsChanged.fire()), cU._lastKnownGridDimensions = {
            cols: e,
            rows: n
        }, this._resizeDebouncer?.resize(e, n, t ?? !1));
    }
    async _updatePtyDimensions(t) {
        await this._processManager.setDimensions(t.cols, t.rows);
    }
    setShellType(t) {
        this._shellType !== t && (this._shellType = t, t === void 0 ? this._terminalShellTypeContextKey.reset() : this._terminalShellTypeContextKey.set(t?.toString()), this._onDidChangeShellType.fire(t));
    }
    _setAriaLabel(t, e, n) {
        const i = [];
        if (t && t.textarea) {
            n && n.length > 0 ? i.push(D(10299, null, e, n)) : i.push(D(10300, null, e)), this._accessibilityService.isScreenReaderOptimized() || i.push(D(10301, null));
            const s = this._keybindingService.lookupKeybinding("editor.action.accessibilityHelp")?.getLabel();
            this._configurationService.getValue("accessibility.verbosity.terminal") && s && i.push(D(10302, null, s)), t.textarea.setAttribute("aria-label", i.join(`
`));
        }
    }
    _updateTitleProperties(t, e) {
        if (!t) return this._processName;
        switch(e){
            case ame.Process:
                if (this._processManager.os === rd.Windows) t = EC.parse(t).name;
                else {
                    const n = t.indexOf(" ");
                    t.startsWith("/") ? t = Ku(t) : n > -1 && (t = t.substring(0, n));
                }
                this._processName = t;
                break;
            case ame.Api:
                this._staticTitle = t, this._messageTitleDisposable.value = void 0;
                break;
            case ame.Sequence:
                this._sequence = t, this._processManager.os === rd.Windows && t.match(/^[a-zA-Z]:\\.+\.[a-zA-Z]{1,3}/) && (this._sequence = EC.parse(t).name);
                break;
        }
        return this._titleSource = e, t;
    }
    setOverrideDimensions(t, e = !1) {
        this._dimensionsOverride && this._dimensionsOverride.forceExactSize && !t && this._rows === 0 && this._cols === 0 && (this._cols = this._dimensionsOverride.cols, this._rows = this._dimensionsOverride.rows), this._dimensionsOverride = t, e ? this._resize(!0) : this._resize();
    }
    async setFixedDimensions() {
        const t = await this._quickInputService.input({
            title: D(10303, null),
            placeHolder: "Enter a number of columns or leave empty for automatic width",
            validateInput: async (n)=>n.length > 0 && !n.match(/^\d+$/) ? {
                    content: "Enter a number or leave empty size automatically",
                    severity: Yn.Error
                } : void 0
        });
        if (t === void 0) return;
        this._fixedCols = this._parseFixedDimension(t), this._labelComputer?.refreshLabel(this), this._terminalHasFixedWidth.set(!!this._fixedCols);
        const e = await this._quickInputService.input({
            title: D(10304, null),
            placeHolder: "Enter a number of rows or leave empty for automatic height",
            validateInput: async (n)=>n.length > 0 && !n.match(/^\d+$/) ? {
                    content: "Enter a number or leave empty size automatically",
                    severity: Yn.Error
                } : void 0
        });
        e !== void 0 && (this._fixedRows = this._parseFixedDimension(e), this._labelComputer?.refreshLabel(this), await this._refreshScrollbar(), this._resize(), this.focus());
    }
    _parseFixedDimension(t) {
        if (t === "") return;
        const e = parseInt(t);
        if (e <= 0) throw new Error(`Could not parse dimension "${t}"`);
        return e;
    }
    async toggleSizeToContentWidth() {
        if (this.xterm?.raw.buffer.active) {
            if (this._hasScrollBar) this._terminalHasFixedWidth.set(!1), this._fixedCols = void 0, this._fixedRows = void 0, this._hasScrollBar = !1, this._initDimensions(), await this._resize();
            else {
                const t = this.xterm ? this.xterm.getFont() : this._terminalConfigurationService.getFont(ws(this.domElement)), e = Math.floor(4096 / (t.charWidth ?? 20)), n = Math.max(this.maxCols, Math.min(this.xterm.getLongestViewportWrappedLineLength(), e));
                n > this.xterm.raw.cols && (this._fixedCols = n);
            }
            await this._refreshScrollbar(), this._labelComputer?.refreshLabel(this), this.focus();
        }
    }
    _refreshScrollbar() {
        return this._fixedCols || this._fixedRows ? this._addScrollbar() : this._removeScrollbar();
    }
    async _addScrollbar() {
        const t = (this.xterm ? this.xterm.getFont() : this._terminalConfigurationService.getFont(ws(this.domElement))).charWidth;
        if (!(!this.xterm?.raw.element || !this._container || !t || !this._fixedCols) && (this._wrapperElement.classList.add("fixed-dims"), this._hasScrollBar = !0, this._initDimensions(), await this._resize(), this._terminalHasFixedWidth.set(!0), this._horizontalScrollbar || (this._horizontalScrollbar = this._register(new mwe(this._wrapperElement, {
            vertical: D5.Hidden,
            horizontal: D5.Auto,
            useShadows: !1,
            scrollYToX: !1,
            consumeMouseWheelIfScrollbarIsNeeded: !1
        })), this._container.appendChild(this._horizontalScrollbar.getDomNode())), this._horizontalScrollbar.setScrollDimensions({
            width: this.xterm.raw.element.clientWidth,
            scrollWidth: this._fixedCols * t + 40
        }), this._horizontalScrollbar.getDomNode().style.paddingBottom = "16px", xa)) for(let e = this.xterm.raw.buffer.active.viewportY; e < this.xterm.raw.buffer.active.length; e++){
            const n = this.xterm.raw.buffer.active.getLine(e);
            n._line.isWrapped = !1;
        }
    }
    async _removeScrollbar() {
        !this._container || !this._horizontalScrollbar || (this._horizontalScrollbar.getDomNode().remove(), this._store.delete(this._horizontalScrollbar), this._horizontalScrollbar = void 0, this._wrapperElement.remove(), this._wrapperElement.classList.remove("fixed-dims"), this._container.appendChild(this._wrapperElement));
    }
    _setResolvedShellLaunchConfig(t) {
        this._shellLaunchConfig.args = t.args, this._shellLaunchConfig.cwd = t.cwd, this._shellLaunchConfig.executable = t.executable, this._shellLaunchConfig.env = t.env;
    }
    _onEnvironmentVariableInfoChanged(t) {
        t.requiresAction && this.xterm?.raw.textarea?.setAttribute("aria-label", D(10305, null, this._instanceId)), this._refreshEnvironmentVariableInfoWidgetState(t);
    }
    async _refreshEnvironmentVariableInfoWidgetState(t) {
        if (!t) {
            this.statusList.remove("relaunch-needed"), this.statusList.remove("env-var-info-changes-active");
            return;
        }
        if (t.requiresAction && this._terminalConfigurationService.config.environmentChangesRelaunch && !this._processManager.hasWrittenData && (!this._shellLaunchConfig.isFeatureTerminal || this.reconnectionProperties && this._configurationService.getValue("task.reconnection") === !0) && !this._shellLaunchConfig.customPtyImplementation && !this._shellLaunchConfig.isExtensionOwnedTerminal && !this._shellLaunchConfig.attachPersistentProcess && !(this._processManager.remoteAuthority && this._terminalConfigurationService.config.windowsEnableConpty && await this._processManager.getBackendOS() === rd.Windows)) {
            this.relaunch();
            return;
        }
        const e = Yds(this.shellLaunchConfig.cwd, this._workspaceContextService, this._historyService);
        this.statusList.add(t.getStatus({
            workspaceFolder: e
        }));
    }
    async getInitialCwd() {
        return this._initialCwd || (this._initialCwd = this._processManager.initialCwd), this._initialCwd;
    }
    async getSpeculativeCwd() {
        return this.getCwd();
    }
    async getCwd() {
        return this.capabilities.has(0) ? this.capabilities.get(0).getCwd() : this.capabilities.has(1) ? this.capabilities.get(1).getCwd() : this._processManager.initialCwd;
    }
    async getCwdResource() {
        const t = this.capabilities.get(0)?.getCwd();
        if (!t) return;
        let e;
        if (this.remoteAuthority ? e = await this._pathService.fileURI(t) : e = rt.file(t), await this._fileService.exists(e)) return e;
    }
    async _refreshProperty(t) {
        return await this.processReady, this._processManager.refreshProperty(t);
    }
    async _updateProperty(t, e) {
        return this._processManager.updateProperty(t, e);
    }
    async rename(t) {
        this._setTitle(t, ame.Api);
    }
    _setTitle(t, e) {
        const n = !t;
        t = this._updateTitleProperties(t, e);
        const i = t !== this._title;
        this._title = t, this._labelComputer?.refreshLabel(this, n), this._setAriaLabel(this.xterm?.raw, this._instanceId, this._title), i && this._onTitleChanged.fire(this);
    }
    async changeIcon(t) {
        if (t) return this._icon = t, this._onIconChanged.fire({
            instance: this,
            userInitiated: !0
        }), t;
        const e = this._scopedInstantiationService.createInstance(Jds), n = await e.pickIcons();
        if (e.dispose(), !!n) return this._icon = n, this._onIconChanged.fire({
            instance: this,
            userInitiated: !0
        }), n;
    }
    async changeColor(t, e) {
        if (t) return this.shellLaunchConfig.color = t, this._onIconChanged.fire({
            instance: this,
            userInitiated: !0
        }), t;
        if (e) {
            this.shellLaunchConfig.color = "", this._onIconChanged.fire({
                instance: this,
                userInitiated: !0
            });
            return;
        }
        if (!this._getIcon()) return;
        const i = this._themeService.getColorTheme(), r = yvl(i), s = Svl(i), o = [];
        for (const d of r){
            const h = kVe(d);
            o.push({
                label: `$(${yt.circleFilled.id}) ${d.replace("terminal.ansi", "")}`,
                id: d,
                description: d,
                iconClasses: [
                    h
                ]
            });
        }
        o.push({
            type: "separator"
        });
        const a = {
            label: "Reset to default"
        };
        o.push(a);
        const l = [], c = this._quickInputService.createQuickPick({
            useSeparators: !0
        });
        l.push(c), c.items = o, c.matchOnDescription = !0, c.placeholder = D(10306, null), c.show();
        const u = await new Promise((d)=>{
            l.push(c.onDidHide(()=>d(void 0))), l.push(c.onDidAccept(()=>d(c.selectedItems[0])));
        });
        return Nc(l), u && (this.shellLaunchConfig.color = u.id, this._onIconChanged.fire({
            instance: this,
            userInitiated: !0
        })), c.hide(), s.dispose(), u?.id;
    }
    forceScrollbarVisibility() {
        this._wrapperElement.classList.add("force-scrollbar");
    }
    resetScrollbarVisibility() {
        this._wrapperElement.classList.remove("force-scrollbar");
    }
    setParentContextKeyService(t) {
        this._scopedContextKeyService.updateParent(t);
    }
    async handleMouseEvent(t, e) {
        if ($u(t.target) && (t.target.classList.contains("scrollbar") || t.target.classList.contains("slider"))) return {
            cancelContextMenu: !0
        };
        for (const n of this._contributions.values())if ((await n.handleMouseEvent?.(t))?.handled) return {
            cancelContextMenu: !0
        };
        if (t.which === 2) {
            switch(this._terminalConfigurationService.config.middleClickBehavior){
                case "default":
                default:
                    this.focus();
                    break;
            }
            return;
        }
        if (t.which === 3) {
            if (t.shiftKey) {
                vvl(rl(), t, this, e, this._contextMenuService);
                return;
            }
            if (this._terminalConfigurationService.config.rightClickBehavior === "nothing") return t.shiftKey ? void 0 : {
                cancelContextMenu: !0
            };
        }
    }
}, cU._instanceIdCounter = 1, Re([
    MQ(50)
], cU.prototype, "_fireMaximumDimensionsChanged", null), Re([
    MQ(500)
], cU.prototype, "_refreshShellIntegrationInfoStatus", null), Re([
    MQ(1e3)
], cU.prototype, "relaunch", null), Re([
    MQ(2e3)
], cU.prototype, "_updateProcessCwd", null), cU = Re([
    F(2, Rr),
    F(3, Mf),
    F(4, dn),
    F(5, NJ),
    F(6, JCe),
    F(7, Rd),
    F(8, is),
    F(9, Al),
    F(10, Wr),
    F(11, My),
    F(12, wb),
    F(13, Ml),
    F(14, yi),
    F(15, Z4),
    F(16, ki),
    F(17, GS),
    F(18, fc),
    F(19, Cl),
    F(20, ps),
    F(21, yr),
    F(22, gr),
    F(23, NCe),
    F(24, sI),
    F(25, kc),
    F(26, nr),
    F(27, ehe),
    F(28, xx),
    F(29, q1)
], cU), uhs = class extends st {
    constructor(t, e, n){
        super(), this._container = t, this._layoutService = e, this._viewDescriptorService = n, this._onDropFile = this._register(new tt), this._onDropTerminal = this._register(new tt), this._register(Pn(()=>this._clearDropOverlay()));
    }
    get onDropFile() {
        return this._onDropFile.event;
    }
    get onDropTerminal() {
        return this._onDropTerminal.event;
    }
    _clearDropOverlay() {
        this._dropOverlay?.remove(), this._dropOverlay = void 0;
    }
    onDragEnter(t) {
        if (mvn(t, r6.FILES, r6.RESOURCES, "Terminals", woe.FILES)) {
            if (this._dropOverlay || (this._dropOverlay = document.createElement("div"), this._dropOverlay.classList.add("terminal-drop-overlay")), mvn(t, "Terminals")) {
                const e = this._getDropSide(t);
                this._dropOverlay.classList.toggle("drop-before", e === "before"), this._dropOverlay.classList.toggle("drop-after", e === "after");
            }
            this._dropOverlay.parentElement || this._container.appendChild(this._dropOverlay);
        }
    }
    onDragLeave(t) {
        this._clearDropOverlay();
    }
    onDragEnd(t) {
        this._clearDropOverlay();
    }
    onDragOver(t) {
        if (!(!t.dataTransfer || !this._dropOverlay)) {
            if (mvn(t, "Terminals")) {
                const e = this._getDropSide(t);
                this._dropOverlay.classList.toggle("drop-before", e === "before"), this._dropOverlay.classList.toggle("drop-after", e === "after");
            }
            this._dropOverlay.style.opacity = "1";
        }
    }
    async onDrop(t) {
        if (this._clearDropOverlay(), !t.dataTransfer) return;
        const e = p2g(t);
        if (e) {
            for (const s of e){
                const o = this._getDropSide(t);
                this._onDropTerminal.fire({
                    uri: s,
                    side: o
                });
            }
            return;
        }
        let n;
        const i = t.dataTransfer.getData(r6.RESOURCES);
        i && (n = rt.parse(JSON.parse(i)[0]));
        const r = t.dataTransfer.getData(woe.FILES);
        !n && r && (n = rt.file(JSON.parse(r)[0])), !n && t.dataTransfer.files.length > 0 && koe(t.dataTransfer.files[0]) && (n = rt.file(koe(t.dataTransfer.files[0]))), n && this._onDropFile.fire(n);
    }
    _getDropSide(t) {
        const e = this._container;
        if (!e) return "after";
        const n = e.getBoundingClientRect();
        return this._getViewOrientation() === P_.HORIZONTAL ? t.clientX - n.left < n.width / 2 ? "before" : "after" : t.clientY - n.top < n.height / 2 ? "before" : "after";
    }
    _getViewOrientation() {
        const t = this._layoutService.getPanelPosition();
        return this._viewDescriptorService.getViewLocationById(PA) === 1 && z4(t) ? P_.HORIZONTAL : P_.VERTICAL;
    }
}, uhs = Re([
    F(1, Id),
    F(2, q1)
], uhs), dhs = class extends st {
    constructor(t, e, n){
        super(), this._fileService = t, this._terminalConfigurationService = e, this._workspaceContextService = n, this._title = "", this._description = "", this._onDidChangeLabel = this._register(new tt), this.onDidChangeLabel = this._onDidChangeLabel.event;
    }
    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    refreshLabel(t, e) {
        this._title = this.computeLabel(t, this._terminalConfigurationService.config.tabs.title, "title", e), this._description = this.computeLabel(t, this._terminalConfigurationService.config.tabs.description, "description"), (this._title !== t.title || this._description !== t.description || e) && this._onDidChangeLabel.fire({
            title: this._title,
            description: this._description
        });
    }
    computeLabel(t, e, n, i) {
        const r = t.shellLaunchConfig.attachPersistentProcess?.type || t.shellLaunchConfig.type, s = t.capabilities.get(2), o = s?.promptInputModel, a = r === "Task" ? "" : " $(loading~spin)", l = {
            cwd: t.cwd || t.initialCwd || "",
            cwdFolder: "",
            workspaceFolderName: t.workspaceFolder?.name,
            workspaceFolder: t.workspaceFolder ? Ku(t.workspaceFolder.uri.fsPath) : void 0,
            local: r === "Local" ? $f.typeLocal : void 0,
            process: t.processName,
            sequence: t.sequence,
            task: r === "Task" ? $f.typeTask : void 0,
            fixedDimensions: t.fixedCols ? t.fixedRows ? `\u2194${t.fixedCols} \u2195${t.fixedRows}` : `\u2194${t.fixedCols}` : t.fixedRows ? `\u2195${t.fixedRows}` : "",
            separator: {
                label: this._terminalConfigurationService.config.tabs.separator
            },
            shellType: t.shellType,
            shellCommand: s?.executingCommand && s.executingCommandConfidence === "high" && o ? o.value + a : void 0,
            shellPromptInput: s?.executingCommand && o ? o.getCombinedString(!0) + a : o?.getCombinedString(!0),
            progress: this._getProgressStateString(t.progressState)
        };
        if (l.workspaceFolderName = t.workspaceFolder?.name ?? l.workspaceFolder, e = e.trim(), !e) return n === "title" && t.processName || "";
        if (!i && t.staticTitle && n === "title") return t.staticTitle.replace(/[\n\r\t]/g, "") || l.process?.replace(/[\n\r\t]/g, "") || "";
        const c = t.capabilities.has(0) || t.capabilities.has(1), d = this._workspaceContextService.getWorkspace().folders.length > 1;
        if (l.cwd && c && (!t.shellLaunchConfig.isFeatureTerminal || n === "title")) {
            const p = rt.from({
                scheme: t.workspaceFolder?.uri.scheme || Ot.file,
                path: t.cwd ? l$e(t.cwd) : void 0
            });
            let g = !1;
            if (d) g = !0;
            else if (t.workspaceFolder?.uri) {
                const f = this._fileService.hasCapability(t.workspaceFolder.uri, 1024);
                g = p.fsPath.localeCompare(t.workspaceFolder.uri.fsPath, void 0, {
                    sensitivity: f ? "case" : "base"
                }) !== 0;
            }
            g && (l.cwdFolder = Ku(l.cwd));
        }
        const h = HMp(e, l).replace(/[\n\r\t]/g, "").trim();
        return h === "" && n === "title" ? t.processName || "" : h;
    }
    _getProgressStateString(t) {
        if (!t) return "";
        switch(t.state){
            case 0:
                return "";
            case 1:
                return `${Math.round(t.value)}%`;
            case 2:
                return "$(error)";
            case 3:
                return "$(loading~spin)";
            case 4:
                return "$(alert)";
        }
    }
}, dhs = Re([
    F(0, is),
    F(1, NJ),
    F(2, yr)
], dhs), KAi = class {
    constructor(t, e){
        this._target = t, this._viewDescriptorService = e;
    }
    getBackgroundColor(t) {
        const e = t.getColor(Lds);
        if (e) return e;
        if (this._target.object === ny.Editor) return t.getColor(ew);
        const n = this._viewDescriptorService.getViewLocationById(PA);
        return n === 0 || n === 2 ? t.getColor(SMe) : t.getColor(dlt);
    }
}, KAi = Re([
    F(1, q1)
], KAi);

}
