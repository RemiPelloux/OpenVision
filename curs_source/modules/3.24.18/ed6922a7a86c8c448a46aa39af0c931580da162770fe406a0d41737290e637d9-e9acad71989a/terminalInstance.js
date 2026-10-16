import { A2 } from "./A3u.js";
import { Bwu, sT } from "./De_3.js";
import { Ai, Cl, Ct, EV, He, Kl, Lo, Oo, S, Se, Ul, Xr, bt, cn, dht, dxc, hp, jn, ns, po, rn, si, ve, we } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { A0, KT, Uf } from "./accessibilitySignalService.js";
import { C, ie } from "./actions_2.js";
import { r7e } from "./amdX.js";
import { Rm, bn, qpn } from "./async.js";
import { i5, n_ } from "./browser_2.js";
import { D7, EAe } from "./canIUse.js";
import { Pe, _i } from "./codicons.js";
import { tc } from "./colorRegistry.js";
import { $n, vi } from "./commands.js";
import { Cn, qt } from "./configuration.js";
import { Yo, ka } from "./contextView.js";
import { dn, xn } from "./contextkey.js";
import { sw } from "./decorators.js";
import { jK, yD } from "./dnd.js";
import { K7, sN } from "./dnd_3.js";
import { Gb, Tc, en, nW, xi } from "./dom_2.js";
import { Ph } from "./editorColors.js";
import { Ni, hn } from "./editorService.js";
import { Pq } from "./encoding.js";
import { Vr, Yi } from "./environmentService.js";
import { L5n } from "./environmentVariableShared.js";
import { Fi, Ii } from "./files.js";
import { c0, i8 } from "./history_3.js";
import { dh } from "./iconRegistry.js";
import { Ze, _t } from "./instantiation.js";
import { Pr, fe } from "./keyCodes.js";
import { no, qr } from "./keybinding.js";
import { gu, jg } from "./keyboardEvent.js";
import { Bc, Zh } from "./layoutService_2.js";
import { b9h, oh_ } from "./lineDataEventAddon.js";
import { J_ } from "./mouseEvent.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { di, ji, pi } from "./notification.js";
import { eo, ko } from "./opener.js";
import { fu, zl } from "./pathService.js";
import { Cw, Eqe, Xl, ba } from "./path_2.js";
import { ig, tk } from "./preferences.js";
import { Ka, jo } from "./productService.js";
import { Nwe, Ole, PAe, Sre, Ve, Xt, cU, dS, nu, pKe, qK, sa, vD, xp } from "./qIc.js";
import { Gs, Ya } from "./quickInput.js";
import { Q1, e6 } from "./scrollable.js";
import { DO, mA } from "./scrollableElement.js";
import { KC, ky } from "./serviceCollection.js";
import { Us } from "./severity_2.js";
import { Vn, yn } from "./storage_2.js";
import { Ewe, Wfn } from "./tabFocus.js";
import { ng, r8 } from "./terminal.js";
import { Eir, sB } from "./terminalActions.js";
import { Vqt, e3h } from "./terminalCapabilityStore.js";
import { a7e, fir, gir } from "./terminalColorRegistry.js";
import { Er, Gx } from "./terminalContextKey.js";
import { L0t, mir, uzt } from "./terminalContextMenu.js";
import { C8e, cer } from "./terminalContribExports.js";
import { P5n, g8 } from "./terminalEditorInput.js";
import { X5h } from "./terminalEnvironment.js";
import { Dir } from "./terminalEnvironment_2.js";
import { Q6, xnr } from "./terminalExtensions.js";
import { c7e } from "./terminalIcon.js";
import { Jd_, Lir } from "./terminalIconPicker.js";
import { Xd_, s9h } from "./terminalProcessDataSegment.js";
import { Oir, Rir, rbe, rh_ } from "./terminalProcessManager.js";
import { _9h, sh_ } from "./terminalResizeDebouncer.js";
import { VDo, _ir } from "./terminalStatusList.js";
import { l5n } from "./terminalStrings.js";
import { Lm, mhe } from "./terminalStrings_2.js";
import { O5h, dbe } from "./terminalTabsList.js";
import { yir } from "./terminalTooltip.js";
import { O0t } from "./terminalUri.js";
import { Mf, RN, ate, fw, pG } from "./terminal_2.js";
import { F1, NMh, hT, lte } from "./terminal_3.js";
import { Ft, Sr } from "./themables.js";
import { $r, as } from "./themeService.js";
import { MLe, Ry, vG } from "./theme_2.js";
import { PK, ure } from "./tooltipService.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Js, zn } from "./uuid.js";
import { cd, eh } from "./views.js";
import { Ic, Pp } from "./viewsService.js";
import { IRo, S3h } from "./widgetManager.js";
import { Jn, ci } from "./workspace.js";
import { NR } from "./workspaceProjectPaths.js";
import { RC, cq } from "./workspaceTrust.js";
import { fYi } from "./xmo.js";
import { CTe, uMo } from "./xtermTerminal.js";
function I5n(e, t, n, i, r, s) {
    const o = new J_(e, t), a = Sre(i.getActions({
        shouldForwardArgs: !0
    }));
    s && a.push(...s);
    const c = n ? EV(n).map((u)=>new uzt(u)) : [], l = new mir;
    r.showContextMenu({
        actionRunner: l,
        getAnchor: ()=>o,
        getActions: ()=>a,
        getActionsContext: ()=>c,
        onHide: ()=>l.dispose()
    });
}
function UDo(e) {
    const t = [];
    for(const n in fir)e.getColor(n) && !n.toLowerCase().includes("bright") && t.push(n);
    return t;
}
function $Do(e) {
    const t = new He, n = UDo(e), i = dS(void 0, void 0, t);
    let r = "";
    for (const s of n){
        const o = dbe(s), a = e.getColor(s);
        a && (r += `.monaco-workbench .${o} .codicon:first-child:not(.codicon-split-horizontal):not(.codicon-trashcan):not(.file-icon){ color: ${a} !important; }`);
    }
    return i.textContent = r, t;
}
function Rd_(e) {
    if (!e.xterm || e.isDisposed) return;
    const t = e.capabilities.get(2)?.hasRichCommandDetection ? S(10374, null) : e.capabilities.has(2) ? S(10375, null) : e.usedShellIntegrationInjection ? S(10376, null) : S(10377, null), n = [];
    e.shellType && n.push(`Shell type: \`${e.shellType}\``);
    const i = e.cwd;
    i && n.push(`Current working directory: \`${i}\``);
    const r = Array.from(e.xterm.shellIntegration.seenSequences);
    r.length > 0 && n.push(`Seen sequences: ${r.map((c)=>`\`${c}\``).join(", ")}`);
    const s = e.capabilities.get(6)?.promptType;
    s && n.push(`Prompt type: \`${s}\``);
    const o = e.capabilities.get(2)?.promptInputModel.getCombinedString();
    o !== void 0 && n.push(`Prompt input: \`\`\`${o}\`\`\``);
    const a = n.length > 0 ? `

` + n.map((c)=>`- ${c}`).join(`
`) : "";
    e.statusList.add({
        id: "shell-integration-info",
        severity: Us.Info,
        tooltip: `${S(10378, null)}: ${t}`,
        detailedTooltip: `${S(10379, null)}: ${t}${a}`
    });
}
function N5h(e, t, n) {
    return Ee.from({
        scheme: gt.vscodeTerminal,
        path: `/${e}/${t}`,
        fragment: n || void 0
    });
}
function ZDo(e) {
    return new Map(e);
}
function QDo(e) {
    return new Map(e ?? []);
}
function $d_(e) {
    return new Map(e.map((t)=>[
            t[0],
            {
                map: ZDo(t[1]),
                descriptionMap: QDo(t[2])
            }
        ]));
}
function z5h(e) {
    return e.replace(X5h, "");
}
function K5h(e, t) {
    let n = z5h(e);
    n.includes("\\") && (n = n.replace(/\\/g, "\\\\"));
    let i;
    switch(t){
        case "bash":
        case "sh":
        case "zsh":
        case "gitbash":
            i = {
                bothQuotes: (s)=>`$'${s.replace(/'/g, "\\'")}'`,
                singleQuotes: (s)=>`'${s.replace(/'/g, "\\'")}'`,
                noSingleQuotes: (s)=>`'${s}'`
            };
            break;
        case "fish":
            i = {
                bothQuotes: (s)=>`"${s.replace(/"/g, '\\"')}"`,
                singleQuotes: (s)=>`'${s.replace(/'/g, "\\'")}'`,
                noSingleQuotes: (s)=>`'${s}'`
            };
            break;
        case "pwsh":
            i = {
                bothQuotes: (s)=>`"${s.replace(/"/g, '`"')}"`,
                singleQuotes: (s)=>`'${s.replace(/'/g, "''")}'`,
                noSingleQuotes: (s)=>`'${s}'`
            };
            break;
        default:
            i = {
                bothQuotes: (s)=>`$'${s.replace(/'/g, "\\'")}'`,
                singleQuotes: (s)=>`'${s.replace(/'/g, "\\'")}'`,
                noSingleQuotes: (s)=>`'${s}'`
            };
            break;
    }
    const r = /[\`\$\|\&\>\~\#\!\^\*\;\<]/g;
    return n = n.replace(r, ""), n.includes("'") && n.includes('"') ? i.bothQuotes(n) : n.includes("'") ? i.singleQuotes(n) : i.noSingleQuotes(n);
}
async function r9h(e, t, n, i, r, s, o = Oo) {
    let a;
    if (Xr(e) ? a = e : (a = e.fsPath, o && s !== Ul.Windows ? a = a.replace(/\\/g, "/") : !o && s === Ul.Windows && (a = a.replace(/\//g, "\\"))), a = z5h(a), !t) return a;
    const c = a.includes(" "), l = a.includes("(") || a.includes(")"), u = Xl(t, ".exe"), h = u === "pwsh" || n === "pwsh" || u === "powershell" || n === "powershell";
    if (h && (c || a.includes("'"))) return `& '${a.replace(/'/g, "''")}'`;
    if (l && h) return `& '${a}'`;
    if (s === Ul.Windows) {
        if (i !== void 0) return i === "gitbash" ? K5h(a.replace(/\\/g, "/"), i) : i === "wsl" ? r?.getWslPath(a, "win-to-unix") || a : c ? `"${a}"` : a;
        const p = t.toLowerCase();
        return p.includes("wsl") || p.includes("bash.exe") && !p.toLowerCase().includes("git") ? r?.getWslPath(a, "win-to-unix") || a : c ? `"${a}"` : a;
    }
    return K5h(a, i);
}
async function Kd_(e, t, n, i, r = Oo) {
    let s = Xr(e) ? e : e.fsPath;
    return i === Ul.Windows ? n === "wsl" ? t.getWslPath(s.replaceAll("/", "\\"), "win-to-unix") : n === "gitbash" ? s.replaceAll("\\", "/").replace(/^([a-zA-Z]):\//, "/$1/") : (s = Xr(e) ? s : dht(e, !0), r ? s : s.replaceAll("/", "\\")) : r ? s.replaceAll("\\", "/") : s;
}
function Yd_(e, t) {
    const n = e.length;
    let i = 0, r = 0;
    for(; r < n;){
        const s = e.indexOf(s9h, r);
        if (s === -1 || s + 7 >= n) break;
        const o = e.charCodeAt(s + 2), a = e.charCodeAt(s + 3), c = e.charCodeAt(s + 4), l = e.charCodeAt(s + 5);
        if (o !== 49 && o !== 54 || a !== 51 || c !== 51 || l !== 59) {
            r = s + 2;
            continue;
        }
        const u = e.charCodeAt(s + 6);
        if (u === 67) {
            if (e.charCodeAt(s + 7) === 7) {
                t(e.substring(i, s)), t(e.substring(s, s + 8)), i = s + 8, r = i;
                continue;
            }
            r = s + 2;
            continue;
        }
        if (u === 68) {
            if (e.charCodeAt(s + 7) === 7) {
                t(e.substring(i, s)), t(e.substring(s, s + 8)), i = s + 8, r = i;
                continue;
            }
            if (e.charCodeAt(s + 7) === 59 && s + 8 < n) {
                const h = e.charCodeAt(s + 8);
                if (h >= 48 && h <= 57) {
                    let p = s + 9;
                    for(; p < n;){
                        const g = e.charCodeAt(p);
                        if (g < 48 || g > 57) break;
                        p++;
                    }
                    if (p < n && e.charCodeAt(p) === 7) {
                        t(e.substring(i, s)), t(e.substring(s, p + 1)), i = p + 1, r = i;
                        continue;
                    }
                }
            }
            r = s + 2;
            continue;
        }
        r = s + 2;
    }
    return e.substring(i);
}
function F9h(e, t, n, i) {
    if (!t.charWidth || !t.charHeight) return null;
    const r = n * e.devicePixelRatio, s = t.charWidth * e.devicePixelRatio + t.letterSpacing, o = Math.max(Math.floor(r / s), 1), a = i * e.devicePixelRatio, c = Math.ceil(t.charHeight * e.devicePixelRatio), l = Math.floor(c * t.lineHeight);
    return {
        rows: Math.max(Math.floor(a / l), 1),
        cols: o
    };
}
function bh_(e, t) {
    return e === t ? !0 : !e || !t ? !1 : Ee.isUri(e) || Ee.isUri(t) ? Ee.isUri(e) && Ee.isUri(t) && e.toString() === t.toString() : Ft.isThemeIcon(e) || Ft.isThemeIcon(t) ? Ft.isThemeIcon(e) && Ft.isThemeIcon(t) && e.id === t.id && e.color?.id === t.color?.id : e.light.toString() === t.light.toString() && e.dark.toString() === t.dark.toString();
}
function yh_(e, t) {
    return bh_(e?.icon, t?.icon) && e?.hasAttention === t?.hasAttention && e?.hasActions === t?.hasActions;
}
function Sh_(e, t, n, i) {
    if (e === void 0 || e === 0) return {
        code: e,
        message: void 0
    };
    const r = typeof e == "number" ? e : e.code;
    let s;
    switch(typeof e){
        case "number":
            {
                let o;
                t.executable && (o = t.executable, typeof t.args == "string" ? o += ` ${t.args}` : t.args && t.args.length && (o += t.args.map((a)=>` '${a}'`).join())), n === 4 ? o ? s = S(10307, null, o, r) : s = S(10308, null, r) : o ? s = S(10309, null, o, r) : s = S(10310, null, r);
                break;
            }
        case "object":
            {
                if (e.message.toString().includes("Could not find pty with id")) break;
                let o = e.message;
                const a = e.message.match(/.*error code:\s*(\d+).*$/);
                if (a) switch(a.length > 1 ? parseInt(a[1]) : void 0){
                    case 5:
                        o = `Access was denied to the path containing your executable "${t.executable}". Manage and change your permissions to get this to work`;
                        break;
                    case 267:
                        o = `Invalid starting directory "${i}", review your terminal.integrated.cwd setting`;
                        break;
                    case 1260:
                        o = "Windows cannot open this program because it has been prevented by a software restriction policy. For more information, open Event Viewer or contact your system Administrator";
                        break;
                }
                s = S(10311, null, o);
                break;
            }
    }
    return {
        code: r,
        message: s
    };
}
function kh_(e, t) {
    const n = Xl(t), i = new Map([
        [
            "julia",
            /^julia$/
        ],
        [
            "node",
            /^node$/
        ],
        [
            "nu",
            /^nu$/
        ],
        [
            "pwsh",
            /^pwsh(-preview)?|powershell$/
        ],
        [
            "python",
            /^py(?:thon)?$/
        ]
    ]);
    for (const [r, s] of i)if (n.match(s)) return r;
    if (e === Ul.Windows) {
        const r = new Map([
            [
                "cmd",
                /^cmd$/
            ],
            [
                "gitbash",
                /^bash$/
            ],
            [
                "wsl",
                /^wsl$/
            ]
        ]);
        for (const [s, o] of r)if (n.match(o)) return s;
    } else {
        const r = [
            "bash",
            "csh",
            "fish",
            "ksh",
            "sh",
            "zsh"
        ];
        for (const s of r)if (n === s) return s;
    }
}
var Vir, U9h, e9, jir, qir, V5n;
export { $Do, $d_, F9h, I5n, K5h, Kd_, N5h, QDo, Rd_, Sh_, U9h, UDo, V5n, Vir, Yd_, ZDo, bh_, e9, jir, kh_, qir, r9h, yh_, z5h };
var __wakaru_j5n_initialized = false;
export function j5n() {
if (__wakaru_j5n_initialized) return;
__wakaru_j5n_initialized = true;
"use strict";
x(), r7e(), n_(), EAe(), jK(), en(), jg(), qK(), mA(), bn(), _i(), sw(), si(), bt(), Pr(), sT(), Se(), li(), ba(), jn(), e6(), Sr(), Qt(), Wfn(), rt(), Op(), KT(), vi(), Cn(), dn(), ka(), sN(), Fi(), Ze(), KC(), no(), ji(), ko(), Ka(), Ya(), Vn(), Vqt(), L5n(), fw(), l5n(), tc(), dh(), as(), ure(), ci(), RC(), Ry(), cd(), Ni(), Vr(), i8(), Zh(), fu(), tk(), Pp(), NR(), hT(), a7e(), Gx(), Dir(), Xd_(), mhe(), C8e(), ng(), sB(), L0t(), P5n(), Q6(), c7e(), Jd_(), rh_(), sh_(), VDo(), O0t(), yir(), S3h(), oh_(), uMo(), Js(), U9h = [
    "bash",
    "zsh",
    "pwsh",
    "python"
], e9 = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T, E, A, R, D, P, N, O, F, H, $, W){
        super(), this._terminalShellTypeContextKey = e, this._shellLaunchConfig = t, this._contextKeyService = n, this._contextMenuService = i, this._instantiationService = r, this._terminalConfigurationService = s, this._terminalProfileResolverService = o, this._pathService = a, this._fileService = c, this._keybindingService = l, this._notificationService = u, this._preferencesService = h, this._viewsService = p, this._themeService = g, this._configurationService = f, this._logService = v, this._storageService = b, this._accessibilityService = y, this._productService = T, this._quickInputService = E, this._workbenchEnvironmentService = A, this._workspaceContextService = R, this._editorService = D, this._workspaceTrustRequestService = P, this._historyService = N, this._openerService = O, this._commandService = F, this._tooltipService = H, this._accessibilitySignalService = $, this._viewDescriptorService = W, this._contributions = new Map, this._pressAnyKeyToCloseListener = this._register(new cn), this._latestXtermWriteData = 0, this._latestXtermParseData = 0, this._title = "", this._titleSource = ate.Process, this._topUiContributionHeights = new Map, this._cursorAttachStyleClasses = new Map, this._cols = 0, this._rows = 0, this._cwd = void 0, this._initialCwd = void 0, this._injectedArgs = void 0, this._layoutSettingsChanged = !0, this._areLinksReady = !1, this._initialDataEventsListener = this._register(new cn), this._initialDataEvents = [], this._contributionStates = new Map, this._messageTitleDisposable = this._register(new cn), this._dndObserver = this._register(new cn), this._processName = "", this._usedShellIntegrationInjection = !1, this.capabilities = this._register(new e3h), this.disableLayout = !1, this._targetRef = new dxc(void 0), this._onExit = new ve, this._onDisposed = this._register(new ve), this._onProcessIdReady = this._register(new ve), this._onProcessReplayComplete = this._register(new ve), this._onTitleChanged = this._register(new ve), this._onIconChanged = this._register(new ve), this._onWillData = this._register(new ve), this._onData = this._register(new ve), this._onDidData = this._register(new ve), this._onBinary = this._register(new ve), this._onRequestExtHostProcess = this._register(new ve), this._onDimensionsChanged = this._register(new ve), this._onMaximumDimensionsChanged = this._register(new ve), this._onDidFocus = this._register(new ve), this._onDidRequestFocus = this._register(new ve), this._onDidBlur = this._register(new ve), this._onDidInputData = this._register(new ve), this._onDidChangeSelection = this._register(new ve), this._onRequestAddInstanceToGroup = this._register(new ve), this._onDidChangeHasChildProcesses = this._register(new ve), this._onDidExecuteText = this._register(new ve), this._onDidChangeTarget = this._register(new ve), this._onDidSendText = this._register(new ve), this._onDidChangeShellType = this._register(new ve), this._onDidChangeVisibility = this._register(new ve), this._onLineData = this._register(new ve({
            onDidAddFirstListener: async ()=>(this.xterm ?? await this._xtermReadyPromise)?.raw.loadAddon(this._lineDataEventAddon)
        })), this.sessionId = zn(), this._wrapperElement = Ve("div.terminal-wrapper"), this._xtermWrapperElement = Ve("div.xterm-wrapper"), this._wrapperElement.appendChild(this._xtermWrapperElement), this._wrapperElement.style.display = "flex", this._wrapperElement.style.flexDirection = "column", this._xtermWrapperElement.style.flexGrow = "1", this._xtermWrapperElement.style.flexShrink = "1", this._xtermWrapperElement.style.minHeight = "0", this._widgetManager = this._register(r.createInstance(IRo)), this._isExiting = !1, this._hadFocusOnExit = !1, this._isVisible = !1, this._instanceId = e9._instanceIdCounter++, this._createdAt = Date.now(), this._hasHadInput = !1, this._fixedRows = t.attachPersistentProcess?.fixedDimensions?.rows, this._fixedCols = t.attachPersistentProcess?.fixedDimensions?.cols, this._shellLaunchConfig.shellIntegrationEnvironmentReporting = this._configurationService.getValue("terminal.integrated.shellIntegration.environmentReporting");
        const G = fYi(this._workspaceContextService.getWorkspace());
        if (this._resource = N5h(G, this.instanceId, this.title), this._shellLaunchConfig.attachPersistentProcess?.hideFromUser && (this._shellLaunchConfig.hideFromUser = this._shellLaunchConfig.attachPersistentProcess.hideFromUser), this._shellLaunchConfig.attachPersistentProcess?.isFeatureTerminal && (this._shellLaunchConfig.isFeatureTerminal = this._shellLaunchConfig.attachPersistentProcess.isFeatureTerminal), this._shellLaunchConfig.attachPersistentProcess?.type && (this._shellLaunchConfig.type = this._shellLaunchConfig.attachPersistentProcess.type), this._shellLaunchConfig.attachPersistentProcess?.tabActions && (this._shellLaunchConfig.tabActions = this._shellLaunchConfig.attachPersistentProcess.tabActions), this.shellLaunchConfig.cwd) {
            const Z = typeof this._shellLaunchConfig.cwd == "string" ? Ee.from({
                scheme: gt.file,
                path: this._shellLaunchConfig.cwd
            }) : this._shellLaunchConfig.cwd;
            Z && (this._workspaceFolder = this._workspaceContextService.getWorkspaceFolder(Z) ?? void 0);
        }
        if (!this._workspaceFolder) {
            const Z = this._historyService.getLastActiveWorkspaceRoot();
            this._workspaceFolder = Z ? this._workspaceContextService.getWorkspaceFolder(Z) ?? void 0 : void 0;
        }
        const q = this._register(n.createScoped(this._wrapperElement));
        this._scopedContextKeyService = q, this._scopedInstantiationService = this._register(r.createChild(new ky([
            xn,
            q
        ]))), this._terminalFocusContextKey = Er.focus.bindTo(q), this._terminalHasFixedWidth = Er.terminalHasFixedWidth.bindTo(q), this._terminalHasTextContextKey = Er.textSelected.bindTo(q), this._terminalAltBufferActiveContextKey = Er.altBufferActive.bindTo(q), this._terminalShellIntegrationEnabledContextKey = Er.terminalShellIntegrationEnabled.bindTo(q), this._logService.trace(`terminalInstance#ctor (instanceId: ${this.instanceId})`, this._shellLaunchConfig), this._register(this.capabilities.onDidAddCapabilityType((Z)=>this._logService.debug("terminalInstance added capability", Z))), this._register(this.capabilities.onDidRemoveCapabilityType((Z)=>this._logService.debug("terminalInstance removed capability", Z)));
        const z = this._register(new po);
        this._register(this.capabilities.onDidAddCapabilityType((Z)=>{
            if (z.get(Z)?.dispose(), Z === 0) {
                const K = this.capabilities.get(Z);
                K && z.set(Z, K.onDidChangeCwd((J)=>{
                    this._cwd = J, this._setTitle(this.title, ate.Config), this._refreshShellIntegrationInfoStatus();
                }));
            }
            if (Z === 2) {
                const K = this.capabilities.get(Z);
                if (K) {
                    K.promptInputModel.setShellType(this.shellType);
                    const J = new He;
                    J.add(Ct.any(K.promptInputModel.onDidStartInput, K.promptInputModel.onDidChangeInput, K.promptInputModel.onDidFinishInput)(()=>{
                        this._labelComputer?.refreshLabel(this), this._refreshShellIntegrationInfoStatus();
                    })), z.set(Z, J);
                }
            }
            if (Z === 6) {
                const K = this.capabilities.get(Z);
                K && z.set(Z, K.onPromptTypeChanged(()=>{
                    this._labelComputer?.refreshLabel(this), this._refreshShellIntegrationInfoStatus();
                }));
            }
        })), this._register(this.onDidChangeShellType(()=>this._refreshShellIntegrationInfoStatus())), this._register(this.capabilities.onDidRemoveCapabilityType((Z)=>{
            z.get(Z)?.dispose();
        })), !this.shellLaunchConfig.executable && !this._workbenchEnvironmentService.remoteAuthority && this._terminalProfileResolverService.resolveIcon(this._shellLaunchConfig, hp), this._icon = t.attachPersistentProcess?.icon || t.icon, this.shellLaunchConfig.customPtyImplementation && this._setTitle(this._shellLaunchConfig.name, ate.Api), this.statusList = this._register(this._scopedInstantiationService.createInstance(_ir)), this._initDimensions(), this._processManager = this._createProcessManager(), this._containerReadyBarrier = new qpn(100), this._attachBarrier = new qpn(1e3), this._xtermReadyPromise = this._createXterm(), this._xtermReadyPromise.then(async ()=>{
            await this._containerReadyBarrier.wait();
            let Z;
            const K = !this.shellLaunchConfig.customPtyImplementation && this._terminalConfigurationService.config.shellIntegration?.enabled && !this.shellLaunchConfig.executable;
            if (K && this.shellLaunchConfig.attachPersistentProcess) this._processManager.getBackendOS().then((J)=>this._terminalProfileResolverService.getDefaultProfile({
                    remoteAuthority: this.remoteAuthority,
                    os: J
                })).then((J)=>{
                this.shellLaunchConfig.executable ??= J.path, this.shellLaunchConfig.args ??= J.args;
            }, ns);
            else if (K) {
                Z = await this._processManager.getBackendOS();
                const J = await this._terminalProfileResolverService.getDefaultProfile({
                    remoteAuthority: this.remoteAuthority,
                    os: Z
                });
                this.shellLaunchConfig.executable = J.path, this.shellLaunchConfig.args = J.args, this.shellLaunchConfig.icon ??= J.icon, this.shellLaunchConfig.color ??= J.color, this.shellLaunchConfig.env ??= J.env;
            }
            Z && this.shellLaunchConfig.executable && this.setShellType(kh_(Z, this.shellLaunchConfig.executable)), await this._createProcess(), this.shellLaunchConfig.attachPersistentProcess && (this._cwd = this.shellLaunchConfig.attachPersistentProcess.cwd, this._setTitle(this.shellLaunchConfig.attachPersistentProcess.title, this.shellLaunchConfig.attachPersistentProcess.titleSource), this.setShellType(this.shellType)), this._fixedCols && await this._addScrollbar();
        }).catch((Z)=>{
            if (!this.isDisposed) throw Z;
        }), this._register(this._configurationService.onDidChangeConfiguration(async (Z)=>{
            Z.affectsConfiguration("accessibility.verbosity.terminal") && this._setAriaLabel(this.xterm?.raw, this._instanceId, this.title), Z.affectsConfiguration("terminal.integrated") && (this.updateConfig(), this.setVisible(this._isVisible)), [
                "terminal.integrated.fontSize",
                "terminal.integrated.fontFamily",
                "terminal.integrated.fontWeight",
                "terminal.integrated.fontWeightBold",
                "terminal.integrated.letterSpacing",
                "terminal.integrated.lineHeight",
                "editor.fontFamily"
            ].some((J)=>Z.affectsConfiguration(J)) && (this._layoutSettingsChanged = !0, await this._resize()), Z.affectsConfiguration("terminal.integrated.unicodeVersion") && this._updateUnicodeVersion(), Z.affectsConfiguration("editor.accessibilitySupport") && this.updateAccessibilitySupport(), (Z.affectsConfiguration("terminal.integrated.tabs.title") || Z.affectsConfiguration("terminal.integrated.tabs.separator") || Z.affectsConfiguration("terminal.integrated.tabs.description")) && this._labelComputer?.refreshLabel(this);
        })), this._registerLayoutSettingsInvalidators(), this._register(this._workspaceContextService.onDidChangeWorkspaceFolders(()=>this._labelComputer?.refreshLabel(this)));
        let X = xi(this._container).setTimeout(()=>{
            X = void 0, this._initialDataEvents = void 0, this._initialDataEventsListener.clear();
        }, 1e4);
        this._register(rn(()=>{
            X && xi(this._container).clearTimeout(X);
        }));
        const Y = xnr.getTerminalContributions();
        for (const Z of Y){
            if (this._contributions.has(Z.id)) {
                ns(new Error(`Cannot have two terminal contributions with the same id ${Z.id}`));
                continue;
            }
            let K;
            try {
                K = this._register(this._scopedInstantiationService.createInstance(Z.ctor, {
                    instance: this,
                    processManager: this._processManager,
                    widgetManager: this._widgetManager
                })), this._contributions.set(Z.id, K);
            } catch (J) {
                ns(J);
            }
            this._xtermReadyPromise.then((J)=>{
                J && !this.isDisposed && K.xtermReady?.(J);
            }), this._register(this.onDisposed(()=>{
                K.dispose(), this._contributions.delete(Z.id), "instance" in K && delete K.instance, "_instance" in K && delete K._instance;
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
    pauseInputEvents(e) {
        this._pauseInputEventBarrier = e;
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
    set waitOnExit(e) {
        this._shellLaunchConfig.waitOnExit = e;
    }
    get targetRef() {
        return this._targetRef;
    }
    get target() {
        return this._targetRef.object;
    }
    set target(e) {
        this._targetRef.object = e, this._onDidChangeTarget.fire(e);
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
        return vD(this._wrapperElement);
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
        return this._someContributionState((e)=>e.hasAttention === !0);
    }
    get hasContributedActions() {
        return this._someContributionState((e)=>e.hasActions === !0);
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
                return Lm.typeTask;
            case "Local":
                return Lm.typeLocal;
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
    getContribution(e) {
        return this._contributions.get(e);
    }
    setTopUiContributionHeight(e, t) {
        t <= 0 ? this._topUiContributionHeights.delete(e) : this._topUiContributionHeights.set(e, t), this._lastLayoutDimensions ? this.layout(this._lastLayoutDimensions) : this._resize();
    }
    clearLine() {
        this.xterm?.raw.write("\x1B[2K"), this.xterm?.raw.write("\r");
    }
    interrupt() {
        this.os === Ul.Windows ? this.sendText("q", !1) : this.sendText("", !1);
    }
    async parseCommand(e) {
        let t = this.capabilities.get(2);
        if (!t && (this._processManager.processState === 1 || this._processManager.processState === 2)) {
            const i = new He;
            await Promise.race([
                new Promise((r)=>{
                    i.add(this.capabilities.onDidAddCapabilityType((s)=>{
                        s === 2 && (t = this.capabilities.get(2), r());
                    }));
                }),
                Kl(2e3)
            ]), i.dispose();
        }
        if (!t) return;
        const n = e ?? (this.xterm?.raw.buffer.normal.length ?? 1) - 1;
        return this.capabilities.get(3), t.currentCommand ? t.currentCommand : t.getCommandForLine(n);
    }
    async _getAllLinesContent() {
        const e = this.xterm?.getBufferLength();
        if (e !== void 0) return this.xterm?.getBufferLines(0, e).join(`
`);
    }
    setContributionState(e, t) {
        const n = this._contributionStates.get(e);
        n === t || yh_(n, t) || (t ? this._contributionStates.set(e, t) : this._contributionStates.delete(e), this._onIconChanged.fire({
            instance: this,
            userInitiated: !1
        }));
    }
    _getIcon() {
        const e = this._getContributedIcon();
        return e || (this._icon || (this._icon = this._processManager.processState >= 2 ? Nwe().getIcon(this._configurationService.getValue("terminal.integrated.tabs.defaultIcon")) : void 0), this._icon);
    }
    _getContributedIcon() {
        for (const e of this._contributionStates.values())if (e.icon) return e.icon;
    }
    _someContributionState(e) {
        for (const t of this._contributionStates.values())if (e(t)) return !0;
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
        const e = xi(this._xtermWrapperElement).getComputedStyle(this._xtermWrapperElement), t = parseInt(e.width), n = parseInt(e.height);
        this._evaluateColsAndRows(t, n);
    }
    _evaluateColsAndRows(e, t) {
        if (!e || !t) return this._setLastKnownColsAndRows(), null;
        const n = this._getDimension(e, t);
        if (!n) return this._setLastKnownColsAndRows(), null;
        const i = this.xterm ? this.xterm.getFont() : this._terminalConfigurationService.getFont(xi(this.domElement)), r = F9h(xi(this.domElement), i, n.width, n.height);
        return r ? ((this._cols !== r.cols || this._rows !== r.rows) && (this._cols = r.cols, this._rows = r.rows, this._fireMaximumDimensionsChanged()), n.width) : (this._setLastKnownColsAndRows(), null);
    }
    _setLastKnownColsAndRows() {
        e9._lastKnownGridDimensions && (this._cols = e9._lastKnownGridDimensions.cols, this._rows = e9._lastKnownGridDimensions.rows);
    }
    _fireMaximumDimensionsChanged() {
        this._onMaximumDimensionsChanged.fire();
    }
    _getDimension(e, t) {
        const n = this.xterm ? this.xterm.getFont() : this._terminalConfigurationService.getFont(xi(this.domElement));
        if (!n || !n.charWidth || !n.charHeight || !this.xterm?.raw.element) return;
        const i = xi(this.xterm.raw.element).getComputedStyle(this.xterm.raw.element), r = parseInt(i.paddingLeft) + parseInt(i.paddingRight) + 14, s = parseInt(i.paddingTop) + parseInt(i.paddingBottom);
        return e9._lastKnownCanvasDimensions = new Tc(Math.min(4096, e - r), t - s + (this._hasScrollBar && this._horizontalScrollbar ? -5 : 0)), e9._lastKnownCanvasDimensions;
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
    static getXtermConstructor(e, t) {
        const n = e.lookupKeybinding(cer.A11yFocusAccessibleBuffer, t);
        return Vir || (Vir = Rm.withAsyncBody(async (i)=>{
            const r = (await Pq("@xterm/xterm", "lib/xterm.js")).Terminal;
            r.strings.promptLabel = S(10286, null), r.strings.tooMuchOutput = n ? S(10287, null, n.getLabel()) : S(10288, null), i(r);
        }), Vir);
    }
    async _createXterm() {
        const e = await e9.getXtermConstructor(this._keybindingService, this._contextKeyService);
        if (this.isDisposed) return;
        const t = this.shellLaunchConfig.executable === void 0 || this.shellType === void 0 || !U9h.includes(this.shellType), n = this._scopedInstantiationService.createInstance(CTe, e, {
            cols: this._cols,
            rows: this._rows,
            xtermColorProvider: this._scopedInstantiationService.createInstance(V5n, this._targetRef),
            capabilities: this.capabilities,
            shellIntegrationNonce: this._processManager.shellIntegrationNonce,
            disableShellIntegrationReporting: t,
            nativeOptions: this._shellLaunchConfig.convertEol ? {
                convertEol: !0
            } : void 0,
            terminalUri: this.resource,
            terminalInstanceGetter: ()=>this
        }, this.onDidExecuteText);
        this.xterm = n, this._resizeDebouncer = this._register(new _9h(()=>this._isVisible, ()=>n, async (s, o)=>{
            n.raw.resize(s, o), await this._updatePtyDimensions(n.raw);
        }, async (s)=>{
            n.raw.resize(s, n.raw.rows), await this._updatePtyDimensions(n.raw);
        }, async (s)=>{
            n.raw.resize(n.raw.cols, s), await this._updatePtyDimensions(n.raw);
        })), this._register(rn(()=>this._resizeDebouncer = void 0)), this.updateAccessibilitySupport(), this._register(this.xterm.onDidRequestRunCommand((s)=>{
            this.sendText(s.command.command, !s.noNewLine);
        })), this._register(this.xterm.onDidRequestRefreshDimensions(()=>{
            this._lastLayoutDimensions && this.layout(this._lastLayoutDimensions);
        }));
        const i = this._shellLaunchConfig.initialText ? new Promise((s)=>this._writeInitialText(n, s)) : void 0, r = this._register(new b9h(i));
        if (this._register(r.onLineData((s)=>this._onLineData.fire(s))), this._lineDataEventAddon = r, Cl(()=>{
            this._register(n.raw.onBell(()=>{
                (this._configurationService.getValue("terminal.integrated.enableBell") || this._configurationService.getValue("terminal.integrated.enableVisualBell")) && this.statusList.add({
                    id: "bell",
                    severity: pi.Warning,
                    icon: Pe.bell,
                    tooltip: S(10289, null)
                }, this._terminalConfigurationService.config.bellDuration), this._accessibilitySignalService.playSignal(Uf.terminalBell);
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
            s.some((o)=>o.id === F1) && n.refresh();
        })), this._register(n.onDidChangeProgress(()=>this._labelComputer?.refreshLabel(this))), this._register(Ct.runAndSubscribe(n.shellIntegration.onDidChangeSeenSequences, ()=>{
            n.shellIntegration.seenSequences.size > 0 && this._refreshShellIntegrationInfoStatus();
        })), !this.capabilities.has(0)) {
            let s = n.raw.onKey((o)=>{
                new gu(o.domEvent).equals(fe.Enter) && this._updateProcessCwd();
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
        Rd_(this);
    }
    async runCommand(e, t) {
        let n = this.capabilities.get(2);
        if (!n && (this._processManager.processState === 1 || this._processManager.processState === 2)) {
            const i = new He;
            await Promise.race([
                new Promise((r)=>{
                    i.add(this.capabilities.onDidAddCapabilityType((s)=>{
                        s === 2 && (n = this.capabilities.get(2), r());
                    }));
                }),
                Kl(2e3)
            ]), i.dispose();
        }
        (!n || n.promptInputModel.value.length > 0) && (await this.sendText("", !1), await Kl(100)), await this.sendText(e, t, !t);
    }
    detachFromElement() {
        this._wrapperElement.remove(), this._container = void 0, this._dndObserver.clear();
    }
    _setCursorAttachStyleClasses(e, t) {
        for (const i of this._cursorAttachStyleClasses.get(e) ?? [])e.classList.remove(i);
        const n = [];
        for (const i of new Set(t?.split(/\s+/).filter(Boolean) ?? []))e.classList.contains(i) || (e.classList.add(i), n.push(i));
        this._cursorAttachStyleClasses.set(e, n);
    }
    _applyCursorAttachStyleSlots() {
        const e = this._cursorAttachOptions?.styleSlots;
        this._setCursorAttachStyleClasses(this._wrapperElement, e?.terminalWrapperClassName), this._setCursorAttachStyleClasses(this._xtermWrapperElement, e?.xtermWrapperClassName);
    }
    _applyXtermCursorAttachOptions() {
        this.xterm?.setDecorationsVisible(this._cursorAttachOptions?.decorationsVisible ?? !0);
    }
    attachToElement(e, t) {
        this._cursorAttachOptions = t, this._applyCursorAttachStyleSlots(), this._applyXtermCursorAttachOptions(), this._container !== e && (this._attachBarrier.isOpen() || this._attachBarrier.open(), this._container = e, this._container.appendChild(this._wrapperElement), this.xterm?.raw.element && (this._xtermWrapperElement.xterm = this.xterm.raw, this.xterm.attachToElement(this._xtermWrapperElement), this._applyXtermCursorAttachOptions()), this.xterm?.refresh(), setTimeout(()=>{
            this._store.isDisposed || this._container !== e || this._initDragAndDrop(e);
        }, 0));
    }
    _open() {
        if (!this.xterm || this.xterm.raw.element || !this._container || !this._container.isConnected) return;
        this._container.appendChild(this._wrapperElement);
        const e = this.xterm;
        this._xtermWrapperElement.xterm = e.raw;
        const t = e.attachToElement(this._xtermWrapperElement);
        this._applyXtermCursorAttachOptions();
        for (const n of this._contributions.values())this.xterm ? n.xtermOpen?.(this.xterm) : this._xtermReadyPromise.then((i)=>{
            i && n.xtermOpen?.(i);
        });
        if (this._register(e.shellIntegration.onDidChangeStatus(()=>{
            this.hasFocus ? this._setShellIntegrationContextKey() : this._terminalShellIntegrationEnabledContextKey.reset();
        })), !e.raw.element || !e.raw.textarea) throw new Error("xterm elements not set after open");
        this._setAriaLabel(e.raw, this._instanceId, this._title), e.raw.attachCustomKeyEventHandler((n)=>{
            if (this._isExiting) return !1;
            const i = new gu(n), r = this._keybindingService.softDispatch(i, i.target), s = r.kind === 1 && this._terminalConfigurationService.config.allowChords && n.key !== "Escape";
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
            return this._storageService.getBoolean(o, -1, !0) && !a.includes(n.key) && !n.ctrlKey && !n.shiftKey && !n.altKey && (this._hasHadInput = !0), r.kind === 2 && r.commandId && this._isGlassCommand(r.commandId) ? (n.preventDefault(), !1) : r.kind === 2 && r.commandId && this._terminalConfigurationService.shouldSkipTerminalCommand(r.commandId) && !this._terminalConfigurationService.config.sendKeybindingsToShell ? (this._storageService.getBoolean(o, -1, !0) && this._hasHadInput && !NMh.includes(r.commandId) && (this._notificationService.prompt(pi.Info, S(10290, null, this._productService.nameLong), [
                {
                    label: S(10291, null),
                    run: ()=>{
                        this._preferencesService.openSettings({
                            jsonEditor: !1,
                            query: "@id:terminal.integrated.commandsToSkipShell,terminal.integrated.sendKeybindingsToShell,terminal.integrated.allowChords"
                        });
                    }
                }
            ]), this._storageService.store(o, !1, -1, 0)), n.preventDefault(), !1) : this._terminalConfigurationService.config.allowMnemonics && !Ai && n.altKey || Ewe.getTabFocusMode() && n.key === "Tab" ? !1 : n.key === "Tab" && n.shiftKey ? (n.preventDefault(), !0) : !(Oo && n.altKey && n.key === "F4" && !n.ctrlKey || !D7.clipboard.readText && n.key === "v" && n.ctrlKey);
        }), this._register(Xt(e.raw.element, "mousedown", ()=>{
            const n = Xt(e.raw.element.ownerDocument, "mouseup", ()=>{
                setTimeout(()=>this._refreshSelectionContextKey(), 0), n.dispose();
            });
        })), this._register(Xt(e.raw.element, "touchstart", ()=>{
            e.raw.focus();
        })), this._register(Xt(e.raw.element, "keyup", ()=>{
            setTimeout(()=>this._refreshSelectionContextKey(), 0);
        })), this._register(Xt(e.raw.textarea, "focus", ()=>this._setFocus(!0))), this._register(Xt(e.raw.textarea, "blur", ()=>this._setFocus(!1))), this._register(Xt(e.raw.textarea, "focusout", ()=>this._setFocus(!1))), this._initDragAndDrop(this._container), this._widgetManager.attachToElement(t), this._lastLayoutDimensions && this.layout(this._lastLayoutDimensions), this.updateConfig(), e.raw.options.disableStdin && this._attachPressAnyKeyToCloseListener(e.raw);
    }
    _setFocus(e) {
        e ? (this._terminalFocusContextKey.set(!0), this._setShellIntegrationContextKey(), this._onDidFocus.fire(this), this._wrapperElement.classList.add("focus")) : (this.resetFocusContextKey(), this._onDidBlur.fire(this), this._refreshSelectionContextKey(), this._wrapperElement.classList.remove("focus"));
    }
    _setShellIntegrationContextKey() {
        this.xterm && this._terminalShellIntegrationEnabledContextKey.set(this.xterm.shellIntegration.status === 2);
    }
    resetFocusContextKey() {
        this._terminalFocusContextKey.reset(), this._terminalShellIntegrationEnabledContextKey.reset();
    }
    _initDragAndDrop(e) {
        const t = new He, n = t.add(this._scopedInstantiationService.createInstance(jir, e));
        t.add(n.onDropTerminal((i)=>this._onRequestAddInstanceToGroup.fire(i))), t.add(n.onDropFile(async (i)=>{
            this.focus(), await this.sendPath(i, !1);
        })), t.add(new nW(e, n)), this._dndObserver.value = t;
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
        const e = this._terminalAltBufferActiveContextKey.get(), t = !!(this.xterm && this.xterm.raw.buffer.active === this.xterm.raw.buffer.alternate);
        if (this._terminalAltBufferActiveContextKey.set(t), e && !t && this.xterm?.raw.element) {
            const n = this.xterm.raw.buffer.active.viewportY;
            Gb(xi(this.xterm.raw.element), ()=>{
                const i = this.xterm?.raw.element?.querySelector(".xterm-viewport");
                i && i.scrollTop !== 0 && (i.scrollTop = 0, this.xterm?.raw.scrollToLine(n));
            });
        }
    }
    dispose(e) {
        if (!(this.shellLaunchConfig.type === "Task" && e === pG.Process && this._exitCode !== 0 && !this.shellLaunchConfig.waitOnExit) && !this.isDisposed) {
            this._logService.trace(`terminalInstance#dispose (instanceId: ${this.instanceId})`), Lo(this._widgetManager), this.xterm?.raw.element && (this._hadFocusOnExit = this.hasFocus), this._xtermWrapperElement.xterm && (this._xtermWrapperElement.xterm = void 0), this._horizontalScrollbar && (this._store.delete(this._horizontalScrollbar), this._horizontalScrollbar = void 0), this._resizeDebouncer?.dispose(), this._resizeDebouncer = void 0;
            try {
                this.xterm?.dispose();
            } catch (t) {
                this._logService.error("Exception occurred during xterm disposal", t);
            }
            i5 && (this.resetFocusContextKey(), this._terminalHasTextContextKey.reset(), this._onDidBlur.fire(this)), this._pressAnyKeyToCloseListener.clear(), this._exitReason === void 0 && (this._exitReason = e ?? pG.Unknown), this._processManager.dispose(), this._onProcessExit(void 0), this._onDisposed.fire(this), super.dispose();
        }
    }
    async detachProcessAndDispose(e) {
        await this._processManager.detachFromProcess(e === pG.User), this.dispose(e);
    }
    focus(e) {
        this._refreshAltBufferContextKey(), this.xterm && (e || !sa().getSelection()?.toString()) && (this.xterm.raw.focus(), this._onDidRequestFocus.fire());
    }
    async focusWhenReady(e) {
        await this._xtermReadyPromise, await this._attachBarrier.wait(), this.focus(e);
    }
    async sendText(e, t, n) {
        this._tooltipService.registerEvent("terminal.type"), n && this.xterm?.raw.modes.bracketedPasteMode && (e = `\x1B[200~${e}\x1B[201~`), e = e.replace(/\r?\n/g, "\r"), t && !e.endsWith("\r") && (e += "\r"), this._logService.debug("sending data (vscode)", e), await this._processManager.write(e), this._onDidInputData.fire(e), this._onDidSendText.fire(e), this.xterm?.scrollToBottom(), t && this._onDidExecuteText.fire();
    }
    async sendSignal(e) {
        this._logService.debug("sending signal (vscode)", e), await this._processManager.sendSignal(e);
    }
    async sendPath(e, t) {
        return this.sendText(await this.preparePathForShell(e), t);
    }
    async preparePathForShell(e) {
        return await this.processReady, r9h(e, this.shellLaunchConfig.executable, this.title, this.shellType, this._processManager.backend, this._processManager.os);
    }
    async getUriLabelForShell(e) {
        return await this.processReady, Kd_(e, this._processManager.backend, this.shellType, this.os);
    }
    setVisible(e) {
        const t = this._isVisible !== e;
        this._isVisible = e, this._wrapperElement.classList.toggle("active", e), e && this.xterm && (this._open(), t && (this._resizeDebouncer?.flush(), this._resize())), t && this._onDidChangeVisibility.fire(e);
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
        const e = !!this._viewsService.getActiveViewWithId(F1);
        let t = !1;
        const n = this._editorService.activeEditor;
        n && (t = n instanceof g8), this._terminalHasTextContextKey.set((e || t) && this.hasSelection());
    }
    _createProcessManager() {
        let e;
        this.shellLaunchConfig.attachPersistentProcess?.environmentVariableCollections && (e = $d_(this.shellLaunchConfig.attachPersistentProcess.environmentVariableCollections));
        const t = this._scopedInstantiationService.createInstance(Oir, this._instanceId, this.shellLaunchConfig?.cwd, e, this.shellLaunchConfig.shellIntegrationNonce ?? this.shellLaunchConfig.attachPersistentProcess?.shellIntegrationNonce);
        return this.capabilities.add(t.capabilities), this._register(t.onProcessReady(async (n)=>{
            this._onProcessIdReady.fire(this), this._initialCwd = await this.getInitialCwd(), this._labelComputer || (this._labelComputer = this._register(this._scopedInstantiationService.createInstance(qir)), this._register(this._labelComputer.onDidChangeLabel((i)=>{
                (this._title !== i.title || this._description !== i.description) && (this._title = i.title, this._description = i.description, this._onTitleChanged.fire(this));
            }))), this._shellLaunchConfig.name ? this._setTitle(this._shellLaunchConfig.name, ate.Api) : (setTimeout(()=>{
                this._xtermReadyPromise.then((i)=>{
                    i && (this._messageTitleDisposable.value = i.raw.onTitleChange((r)=>this._onTitleChange(r)));
                });
            }), this._setTitle(this._shellLaunchConfig.executable, ate.Process));
        })), this._register(t.onProcessExit((n)=>this._onProcessExit(n))), this._register(t.onDidChangeProperty(({ type: n, value: i })=>{
            switch(n){
                case "cwd":
                    this._cwd = i, this._labelComputer?.refreshLabel(this);
                    break;
                case "initialCwd":
                    this._initialCwd = i, this._cwd = this._initialCwd, this._setTitle(this.title, ate.Config), this._icon = this._shellLaunchConfig.attachPersistentProcess?.icon || this._shellLaunchConfig.icon, this._onIconChanged.fire({
                        instance: this,
                        userInitiated: !1
                    });
                    break;
                case "title":
                    this._setTitle(i ?? "", ate.Process);
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
        })), this._initialDataEventsListener.value = t.onProcessData((n)=>this._initialDataEvents?.push(n.data)), this._register(t.onProcessReplayComplete(()=>this._onProcessReplayComplete.fire())), this._register(t.onEnvironmentVariableInfoChanged((n)=>this._onEnvironmentVariableInfoChanged(n))), this._register(t.onPtyDisconnect(()=>{
            this.xterm && (this.xterm.raw.options.disableStdin = !0), this.statusList.add({
                id: "disconnected",
                severity: pi.Error,
                icon: Pe.debugDisconnect,
                tooltip: S(10292, null)
            });
        })), this._register(t.onPtyReconnect(()=>{
            this.xterm && (this.xterm.raw.options.disableStdin = !1), this.statusList.remove("disconnected");
        })), t;
    }
    createProcessManager() {
        return this._createProcessManager();
    }
    async _createProcess() {
        if (this.isDisposed) return;
        if (this._historyService.getLastActiveWorkspaceRoot(gt.file)) {
            if (!await this._trust()) {
                this._onProcessExit({
                    message: S(10293, null)
                });
                return;
            }
        } else if (this._cwd && this._userHome && this._cwd !== this._userHome) {
            this._onProcessExit({
                message: S(10294, null, this._cwd, this._userHome)
            });
            return;
        }
        this._container && this._cols === 0 && this._rows === 0 && (this._initDimensions(), this.xterm?.raw.resize(this._cols || 80, this._rows || 30));
        const t = this.shellLaunchConfig.icon;
        await this._processManager.createProcess(this._shellLaunchConfig, this._cols || 80, this._rows || 30).then((n)=>{
            n && ("message" in n ? this._onProcessExit(n) : "injectedArgs" in n && (this._injectedArgs = n.injectedArgs));
        }), !this.isDisposed && (this.xterm?.shellIntegration && this.capabilities.add(this.xterm.shellIntegration.capabilities), (t !== this.shellLaunchConfig.icon || this.shellLaunchConfig.color) && (this._icon = this._shellLaunchConfig.attachPersistentProcess?.icon || this._shellLaunchConfig.icon, this._onIconChanged.fire({
            instance: this,
            userInitiated: !1
        })));
    }
    registerMarker(e) {
        return this.xterm?.raw.registerMarker(e);
    }
    addBufferMarker(e) {
        this.capabilities.get(4)?.addMark(e);
    }
    scrollToMark(e, t, n) {
        this.xterm?.markTracker.scrollToClosestMarker(e, t, n);
    }
    async freePortKillProcess(e, t) {
        await this._processManager?.freePortKillProcess(e), this.runCommand(t, !1);
    }
    _onProcessData(e) {
        const t = Yd_(e.data, (n)=>{
            this._writeProcessData(n);
        });
        e.trackCommit ? e.writePromise = new Promise((n)=>this._writeProcessData(t, n)) : this._writeProcessData(t);
    }
    _writeProcessData(e, t) {
        this._onWillData.fire(e);
        const n = ++this._latestXtermWriteData;
        this.xterm?.raw.write(e, ()=>{
            this._latestXtermParseData = n, this._processManager.acknowledgeDataEvent(e.length), t?.(), this._onData.fire(e), this._onDidData.fire(e);
        });
    }
    async _onProcessExit(e) {
        if (this._isExiting) return;
        const t = Sh_(e, this.shellLaunchConfig, this._processManager.processState, this._initialCwd);
        if (this._usedShellIntegrationInjection && this._processManager.processState === 4 && t?.code !== 0) {
            this._relaunchWithShellIntegrationDisabled(t?.message), this._onExit.fire(e);
            return;
        }
        this._isExiting = !0, await this._flushXtermData(), this._exitCode = t?.code;
        const n = t?.message;
        this._logService.debug("Terminal process exit", "instanceId", this.instanceId, "code", this._exitCode, "processState", this._processManager.processState);
        const i = this.waitOnExit;
        if (i && this._processManager.processState !== 5) this._xtermReadyPromise.then((r)=>{
            if (!(!r || this.isDisposed)) {
                switch(n && r.raw.write(rbe(n)), typeof i){
                    case "string":
                        r.raw.write(rbe(i, {
                            excludeLeadingNewLine: !0
                        }));
                        break;
                    case "function":
                        this.exitCode !== void 0 && r.raw.write(rbe(i(this.exitCode), {
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
                    severity: pi.Error,
                    actions: {
                        primary: [
                            this._scopedInstantiationService.createInstance(Eir)
                        ]
                    }
                }) : this._logService.warn(n);
            }
            this.dispose(pG.Process);
        }
        this._onExit.fire(e), this.isDisposed && this._onExit.dispose();
    }
    _relaunchWithShellIntegrationDisabled(e) {
        this._shellLaunchConfig.ignoreShellIntegration = !0, this.relaunch(), this.statusList.add({
            id: "shell-integration-attention-needed",
            severity: pi.Warning,
            icon: Pe.warning,
            tooltip: `${e} ` + S(10295, null),
            hoverActions: [
                {
                    commandId: "workbench.action.terminal.learnMore",
                    label: S(10296, null),
                    run: ()=>{
                        this._openerService.open("https://code.visualstudio.com/docs/editor/integrated-terminal#_shell-integration");
                    }
                },
                {
                    commandId: "workbench.action.openSettings",
                    label: S(10297, null),
                    run: ()=>{
                        this._commandService.executeCommand("workbench.action.openSettings", "terminal.integrated.shellIntegration.enabled");
                    }
                }
            ]
        });
    }
    _flushXtermData() {
        if (this._latestXtermWriteData === this._latestXtermParseData) return Promise.resolve();
        let e = 0;
        return new Promise((t)=>{
            const n = PAe(sa().window, ()=>{
                (this._latestXtermWriteData === this._latestXtermParseData || ++e === 5) && (n.dispose(), t());
            }, 20);
        });
    }
    _attachPressAnyKeyToCloseListener(e) {
        this.isDisposed || e.textarea && !this._pressAnyKeyToCloseListener.value && (this._pressAnyKeyToCloseListener.value = Xt(e.textarea, "keypress", (t)=>{
            this._pressAnyKeyToCloseListener.value && (this._pressAnyKeyToCloseListener.clear(), this.dispose(pG.Process), t.preventDefault());
        }));
    }
    _writeInitialText(e, t) {
        if (!this._shellLaunchConfig.initialText) {
            t?.();
            return;
        }
        const n = typeof this._shellLaunchConfig.initialText == "string" ? this._shellLaunchConfig.initialText : this._shellLaunchConfig.initialText?.text;
        typeof this._shellLaunchConfig.initialText == "string" || this._shellLaunchConfig.initialText.trailingNewLine ? e.raw.writeln(n, t) : e.raw.write(n, t);
    }
    async reuseTerminal(e, t = !1) {
        this._pressAnyKeyToCloseListener.clear();
        const n = this.xterm;
        n && (t || await new Promise((i)=>n.raw.write(`
\x1B[G`, i)), e.initialText && (this._shellLaunchConfig.initialText = e.initialText, await new Promise((i)=>this._writeInitialText(n, i))), this._isExiting && this._shellLaunchConfig.waitOnExit && (n.raw.options.disableStdin = !1, this._isExiting = !1), t && n.clearDecorations()), this.statusList.remove("relaunch-needed"), t || (e.initialText = " "), this._shellLaunchConfig = e, await this._processManager.relaunch(this._shellLaunchConfig, this._cols || 80, this._rows || 30, t).then((i)=>{
            i && ("message" in i ? this._onProcessExit(i) : "injectedArgs" in i && (this._injectedArgs = i.injectedArgs));
        });
    }
    relaunch() {
        this.reuseTerminal(this._shellLaunchConfig, !0);
    }
    _onTitleChange(e) {
        this.isTitleSetByProcess && this._setTitle(e, ate.Sequence);
    }
    async _trust() {
        return await this._workspaceTrustRequestService.requestWorkspaceTrust({
            message: S(10298, null)
        }) === !0;
    }
    async _updateProcessCwd() {
        if (!(this.isDisposed || this.shellLaunchConfig.customPtyImplementation)) try {
            const e = await this._refreshProperty("cwd");
            if (typeof e != "string") throw new Error(`cwd is not a string ${e}`);
        } catch (e) {
            if (e instanceof Error && e.message === "Cannot refresh property when process is not set") return;
            throw e;
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
    _isGlassCommand(e) {
        return !1;
    }
    _registerLayoutSettingsInvalidators() {}
    async _invalidateLayoutSettings() {
        this._layoutSettingsChanged = !0, await this._resize();
    }
    layout(e) {
        if (this._lastLayoutDimensions = e, this.disableLayout) return;
        const t = Array.from(this._topUiContributionHeights.values()).reduce((r, s)=>r + s, 0), n = new Tc(e.width, Math.max(e.height - t, 21));
        if (this._isVisible && this._open(), !(n.width <= 0 || n.height <= 20 || !this._evaluateColsAndRows(n.width, n.height))) {
            this._resize(), this._containerReadyBarrier.isOpen() || this._containerReadyBarrier.open();
            for (const r of this._contributions.values())this.xterm ? r.layout?.(this.xterm, n) : this._xtermReadyPromise.then((s)=>{
                s && r.layout?.(s, n);
            });
        }
    }
    async _resize(e) {
        if (!this.xterm || !this._resizeDebouncer) return;
        let t = this.cols, n = this.rows;
        if (this._isVisible && this._layoutSettingsChanged) {
            const i = this.xterm.getFont(), r = this._terminalConfigurationService.config;
            this.xterm.raw.options.letterSpacing = i.letterSpacing, this.xterm.raw.options.lineHeight = i.lineHeight, this.xterm.raw.options.fontSize = i.fontSize, this.xterm.raw.options.fontFamily = i.fontFamily, this.xterm.raw.options.fontWeight = r.fontWeight, this.xterm.raw.options.fontWeightBold = r.fontWeightBold, this._initDimensions(), t = this.cols, n = this.rows, this._layoutSettingsChanged = !1;
        }
        isNaN(t) || isNaN(n) || ((t !== this.xterm.raw.cols || n !== this.xterm.raw.rows) && ((this._fixedRows || this._fixedCols) && await this._updateProperty("fixedDimensions", {
            cols: this._fixedCols,
            rows: this._fixedRows
        }), this._onDimensionsChanged.fire()), e9._lastKnownGridDimensions = {
            cols: t,
            rows: n
        }, this._resizeDebouncer?.resize(t, n, e ?? !1));
    }
    async _updatePtyDimensions(e) {
        await this._processManager.setDimensions(e.cols, e.rows);
    }
    setShellType(e) {
        this._shellType !== e && (this._shellType = e, e === void 0 ? this._terminalShellTypeContextKey.reset() : this._terminalShellTypeContextKey.set(e?.toString()), this._onDidChangeShellType.fire(e));
    }
    _setAriaLabel(e, t, n) {
        const i = [];
        if (e && e.textarea) {
            n && n.length > 0 ? i.push(S(10299, null, t, n)) : i.push(S(10300, null, t)), this._accessibilityService.isScreenReaderOptimized() || i.push(S(10301, null));
            const s = this._keybindingService.lookupKeybinding("editor.action.accessibilityHelp")?.getLabel();
            this._configurationService.getValue("accessibility.verbosity.terminal") && s && i.push(S(10302, null, s)), e.textarea.setAttribute("aria-label", i.join(`
`));
        }
    }
    _updateTitleProperties(e, t) {
        if (!e) return this._processName;
        switch(t){
            case ate.Process:
                if (this._processManager.os === Ul.Windows) e = Cw.parse(e).name;
                else {
                    const n = e.indexOf(" ");
                    e.startsWith("/") ? e = Xl(e) : n > -1 && (e = e.substring(0, n));
                }
                this._processName = e;
                break;
            case ate.Api:
                this._staticTitle = e, this._messageTitleDisposable.value = void 0;
                break;
            case ate.Sequence:
                this._sequence = e, this._processManager.os === Ul.Windows && e.match(/^[a-zA-Z]:\\.+\.[a-zA-Z]{1,3}/) && (this._sequence = Cw.parse(e).name);
                break;
        }
        return this._titleSource = t, e;
    }
    setOverrideDimensions(e, t = !1) {
        this._dimensionsOverride && this._dimensionsOverride.forceExactSize && !e && this._rows === 0 && this._cols === 0 && (this._cols = this._dimensionsOverride.cols, this._rows = this._dimensionsOverride.rows), this._dimensionsOverride = e, t ? this._resize(!0) : this._resize();
    }
    async setFixedDimensions() {
        const e = await this._quickInputService.input({
            title: S(10303, null),
            placeHolder: "Enter a number of columns or leave empty for automatic width",
            validateInput: async (n)=>n.length > 0 && !n.match(/^\d+$/) ? {
                    content: "Enter a number or leave empty size automatically",
                    severity: pi.Error
                } : void 0
        });
        if (e === void 0) return;
        this._fixedCols = this._parseFixedDimension(e), this._labelComputer?.refreshLabel(this), this._terminalHasFixedWidth.set(!!this._fixedCols);
        const t = await this._quickInputService.input({
            title: S(10304, null),
            placeHolder: "Enter a number of rows or leave empty for automatic height",
            validateInput: async (n)=>n.length > 0 && !n.match(/^\d+$/) ? {
                    content: "Enter a number or leave empty size automatically",
                    severity: pi.Error
                } : void 0
        });
        t !== void 0 && (this._fixedRows = this._parseFixedDimension(t), this._labelComputer?.refreshLabel(this), await this._refreshScrollbar(), this._resize(), this.focus());
    }
    _parseFixedDimension(e) {
        if (e === "") return;
        const t = parseInt(e);
        if (t <= 0) throw new Error(`Could not parse dimension "${e}"`);
        return t;
    }
    async toggleSizeToContentWidth() {
        if (this.xterm?.raw.buffer.active) {
            if (this._hasScrollBar) this._terminalHasFixedWidth.set(!1), this._fixedCols = void 0, this._fixedRows = void 0, this._hasScrollBar = !1, this._initDimensions(), await this._resize();
            else {
                const e = this.xterm ? this.xterm.getFont() : this._terminalConfigurationService.getFont(xi(this.domElement)), t = Math.floor(4096 / (e.charWidth ?? 20)), n = Math.max(this.maxCols, Math.min(this.xterm.getLongestViewportWrappedLineLength(), t));
                n > this.xterm.raw.cols && (this._fixedCols = n);
            }
            await this._refreshScrollbar(), this._labelComputer?.refreshLabel(this), this.focus();
        }
    }
    _refreshScrollbar() {
        return this._fixedCols || this._fixedRows ? this._addScrollbar() : this._removeScrollbar();
    }
    async _addScrollbar() {
        const e = (this.xterm ? this.xterm.getFont() : this._terminalConfigurationService.getFont(xi(this.domElement))).charWidth;
        if (!(!this.xterm?.raw.element || !this._container || !e || !this._fixedCols) && (this._wrapperElement.classList.add("fixed-dims"), this._hasScrollBar = !0, this._initDimensions(), await this._resize(), this._terminalHasFixedWidth.set(!0), this._horizontalScrollbar || (this._horizontalScrollbar = this._register(new DO(this._wrapperElement, {
            vertical: Q1.Hidden,
            horizontal: Q1.Auto,
            useShadows: !1,
            scrollYToX: !1,
            consumeMouseWheelIfScrollbarIsNeeded: !1
        })), this._container.appendChild(this._horizontalScrollbar.getDomNode())), this._horizontalScrollbar.setScrollDimensions({
            width: this.xterm.raw.element.clientWidth,
            scrollWidth: this._fixedCols * e + 40
        }), this._horizontalScrollbar.getDomNode().style.paddingBottom = "16px", Oo)) for(let t = this.xterm.raw.buffer.active.viewportY; t < this.xterm.raw.buffer.active.length; t++){
            const n = this.xterm.raw.buffer.active.getLine(t);
            n._line.isWrapped = !1;
        }
    }
    async _removeScrollbar() {
        !this._container || !this._horizontalScrollbar || (this._horizontalScrollbar.getDomNode().remove(), this._store.delete(this._horizontalScrollbar), this._horizontalScrollbar = void 0, this._wrapperElement.remove(), this._wrapperElement.classList.remove("fixed-dims"), this._container.appendChild(this._wrapperElement));
    }
    _setResolvedShellLaunchConfig(e) {
        this._shellLaunchConfig.args = e.args, this._shellLaunchConfig.cwd = e.cwd, this._shellLaunchConfig.executable = e.executable, this._shellLaunchConfig.env = e.env;
    }
    _onEnvironmentVariableInfoChanged(e) {
        e.requiresAction && this.xterm?.raw.textarea?.setAttribute("aria-label", S(10305, null, this._instanceId)), this._refreshEnvironmentVariableInfoWidgetState(e);
    }
    async _refreshEnvironmentVariableInfoWidgetState(e) {
        if (!e) {
            this.statusList.remove("relaunch-needed"), this.statusList.remove("env-var-info-changes-active");
            return;
        }
        if (e.requiresAction && this._terminalConfigurationService.config.environmentChangesRelaunch && !this._processManager.hasWrittenData && (!this._shellLaunchConfig.isFeatureTerminal || this.reconnectionProperties && this._configurationService.getValue("task.reconnection") === !0) && !this._shellLaunchConfig.customPtyImplementation && !this._shellLaunchConfig.isExtensionOwnedTerminal && !this._shellLaunchConfig.attachPersistentProcess && !(this._processManager.remoteAuthority && this._terminalConfigurationService.config.windowsEnableConpty && await this._processManager.getBackendOS() === Ul.Windows)) {
            this.relaunch();
            return;
        }
        const t = Rir(this.shellLaunchConfig.cwd, this._workspaceContextService, this._historyService);
        this.statusList.add(e.getStatus({
            workspaceFolder: t
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
        const e = this.capabilities.get(0)?.getCwd();
        if (!e) return;
        let t;
        if (this.remoteAuthority ? t = await this._pathService.fileURI(e) : t = Ee.file(e), await this._fileService.exists(t)) return t;
    }
    async _refreshProperty(e) {
        return await this.processReady, this._processManager.refreshProperty(e);
    }
    async _updateProperty(e, t) {
        return this._processManager.updateProperty(e, t);
    }
    async rename(e) {
        this._setTitle(e, ate.Api);
    }
    _setTitle(e, t) {
        const n = !e;
        e = this._updateTitleProperties(e, t);
        const i = e !== this._title;
        this._title = e, this._labelComputer?.refreshLabel(this, n), this._setAriaLabel(this.xterm?.raw, this._instanceId, this._title), i && this._onTitleChanged.fire(this);
    }
    async changeIcon(e) {
        if (e) return this._icon = e, this._onIconChanged.fire({
            instance: this,
            userInitiated: !0
        }), e;
        const t = this._scopedInstantiationService.createInstance(Lir), n = await t.pickIcons();
        if (t.dispose(), !!n) return this._icon = n, this._onIconChanged.fire({
            instance: this,
            userInitiated: !0
        }), n;
    }
    async changeColor(e, t) {
        if (e) return this.shellLaunchConfig.color = e, this._onIconChanged.fire({
            instance: this,
            userInitiated: !0
        }), e;
        if (t) {
            this.shellLaunchConfig.color = "", this._onIconChanged.fire({
                instance: this,
                userInitiated: !0
            });
            return;
        }
        if (!this._getIcon()) return;
        const i = this._themeService.getColorTheme(), r = UDo(i), s = $Do(i), o = [];
        for (const h of r){
            const p = dbe(h);
            o.push({
                label: `$(${Pe.circleFilled.id}) ${h.replace("terminal.ansi", "")}`,
                id: h,
                description: h,
                iconClasses: [
                    p
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
        const c = [], l = this._quickInputService.createQuickPick({
            useSeparators: !0
        });
        c.push(l), l.items = o, l.matchOnDescription = !0, l.placeholder = S(10306, null), l.show();
        const u = await new Promise((h)=>{
            c.push(l.onDidHide(()=>h(void 0))), c.push(l.onDidAccept(()=>h(l.selectedItems[0])));
        });
        return Lo(c), u && (this.shellLaunchConfig.color = u.id, this._onIconChanged.fire({
            instance: this,
            userInitiated: !0
        })), l.hide(), s.dispose(), u?.id;
    }
    forceScrollbarVisibility() {
        this._wrapperElement.classList.add("force-scrollbar");
    }
    resetScrollbarVisibility() {
        this._wrapperElement.classList.remove("force-scrollbar");
    }
    setParentContextKeyService(e) {
        this._scopedContextKeyService.updateParent(e);
    }
    async handleMouseEvent(e, t) {
        if (nu(e.target) && (e.target.classList.contains("scrollbar") || e.target.classList.contains("slider"))) return {
            cancelContextMenu: !0
        };
        for (const n of this._contributions.values())if ((await n.handleMouseEvent?.(e))?.handled) return {
            cancelContextMenu: !0
        };
        if (e.which === 2) {
            switch(this._terminalConfigurationService.config.middleClickBehavior){
                case "default":
                default:
                    this.focus();
                    break;
            }
            return;
        }
        if (e.which === 3) {
            if (e.shiftKey) {
                I5n(sa(), e, this, t, this._contextMenuService);
                return;
            }
            if (this._terminalConfigurationService.config.rightClickBehavior === "nothing") return e.shiftKey ? void 0 : {
                cancelContextMenu: !0
            };
        }
    }
}, e9._instanceIdCounter = 1, ie([
    cU(50)
], e9.prototype, "_fireMaximumDimensionsChanged", null), ie([
    cU(500)
], e9.prototype, "_refreshShellIntegrationInfoStatus", null), ie([
    cU(1e3)
], e9.prototype, "relaunch", null), ie([
    cU(2e3)
], e9.prototype, "_updateProcessCwd", null), e9 = ie([
    C(2, xn),
    C(3, Yo),
    C(4, _t),
    C(5, r8),
    C(6, lte),
    C(7, zl),
    C(8, Ii),
    C(9, qr),
    C(10, di),
    C(11, ig),
    C(12, Ic),
    C(13, $r),
    C(14, qt),
    C(15, RN),
    C(16, yn),
    C(17, ym),
    C(18, jo),
    C(19, Gs),
    C(20, Yi),
    C(21, Jn),
    C(22, hn),
    C(23, cq),
    C(24, c0),
    C(25, eo),
    C(26, $n),
    C(27, PK),
    C(28, A0),
    C(29, eh)
], e9), jir = class extends we {
    constructor(e, t, n){
        super(), this._container = e, this._layoutService = t, this._viewDescriptorService = n, this._onDropFile = this._register(new ve), this._onDropTerminal = this._register(new ve), this._register(rn(()=>this._clearDropOverlay()));
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
    onDragEnter(e) {
        if (pKe(e, yD.FILES, yD.RESOURCES, "Terminals", K7.FILES)) {
            if (this._dropOverlay || (this._dropOverlay = document.createElement("div"), this._dropOverlay.classList.add("terminal-drop-overlay")), pKe(e, "Terminals")) {
                const t = this._getDropSide(e);
                this._dropOverlay.classList.toggle("drop-before", t === "before"), this._dropOverlay.classList.toggle("drop-after", t === "after");
            }
            this._dropOverlay.parentElement || this._container.appendChild(this._dropOverlay);
        }
    }
    onDragLeave(e) {
        this._clearDropOverlay();
    }
    onDragEnd(e) {
        this._clearDropOverlay();
    }
    onDragOver(e) {
        if (!(!e.dataTransfer || !this._dropOverlay)) {
            if (pKe(e, "Terminals")) {
                const t = this._getDropSide(e);
                this._dropOverlay.classList.toggle("drop-before", t === "before"), this._dropOverlay.classList.toggle("drop-after", t === "after");
            }
            this._dropOverlay.style.opacity = "1";
        }
    }
    async onDrop(e) {
        if (this._clearDropOverlay(), !e.dataTransfer) return;
        const t = O5h(e);
        if (t) {
            for (const s of t){
                const o = this._getDropSide(e);
                this._onDropTerminal.fire({
                    uri: s,
                    side: o
                });
            }
            return;
        }
        let n;
        const i = e.dataTransfer.getData(yD.RESOURCES);
        i && (n = Ee.parse(JSON.parse(i)[0]));
        const r = e.dataTransfer.getData(K7.FILES);
        !n && r && (n = Ee.file(JSON.parse(r)[0])), !n && e.dataTransfer.files.length > 0 && Ole(e.dataTransfer.files[0]) && (n = Ee.file(Ole(e.dataTransfer.files[0]))), n && this._onDropFile.fire(n);
    }
    _getDropSide(e) {
        const t = this._container;
        if (!t) return "after";
        const n = t.getBoundingClientRect();
        return this._getViewOrientation() === xp.HORIZONTAL ? e.clientX - n.left < n.width / 2 ? "before" : "after" : e.clientY - n.top < n.height / 2 ? "before" : "after";
    }
    _getViewOrientation() {
        const e = this._layoutService.getPanelPosition();
        return this._viewDescriptorService.getViewLocationById(F1) === 1 && A2(e) ? xp.HORIZONTAL : xp.VERTICAL;
    }
}, jir = ie([
    C(1, Bc),
    C(2, eh)
], jir), qir = class extends we {
    constructor(e, t, n){
        super(), this._fileService = e, this._terminalConfigurationService = t, this._workspaceContextService = n, this._title = "", this._description = "", this._onDidChangeLabel = this._register(new ve), this.onDidChangeLabel = this._onDidChangeLabel.event;
    }
    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    refreshLabel(e, t) {
        this._title = this.computeLabel(e, this._terminalConfigurationService.config.tabs.title, "title", t), this._description = this.computeLabel(e, this._terminalConfigurationService.config.tabs.description, "description"), (this._title !== e.title || this._description !== e.description || t) && this._onDidChangeLabel.fire({
            title: this._title,
            description: this._description
        });
    }
    computeLabel(e, t, n, i) {
        const r = e.shellLaunchConfig.attachPersistentProcess?.type || e.shellLaunchConfig.type, s = e.capabilities.get(2), o = s?.promptInputModel, a = r === "Task" ? "" : " $(loading~spin)", c = {
            cwd: e.cwd || e.initialCwd || "",
            cwdFolder: "",
            workspaceFolderName: e.workspaceFolder?.name,
            workspaceFolder: e.workspaceFolder ? Xl(e.workspaceFolder.uri.fsPath) : void 0,
            local: r === "Local" ? Lm.typeLocal : void 0,
            process: e.processName,
            sequence: e.sequence,
            task: r === "Task" ? Lm.typeTask : void 0,
            fixedDimensions: e.fixedCols ? e.fixedRows ? `\u2194${e.fixedCols} \u2195${e.fixedRows}` : `\u2194${e.fixedCols}` : e.fixedRows ? `\u2195${e.fixedRows}` : "",
            separator: {
                label: this._terminalConfigurationService.config.tabs.separator
            },
            shellType: e.shellType,
            shellCommand: s?.executingCommand && s.executingCommandConfidence === "high" && o ? o.value + a : void 0,
            shellPromptInput: s?.executingCommand && o ? o.getCombinedString(!0) + a : o?.getCombinedString(!0),
            progress: this._getProgressStateString(e.progressState)
        };
        if (c.workspaceFolderName = e.workspaceFolder?.name ?? c.workspaceFolder, t = t.trim(), !t) return n === "title" && e.processName || "";
        if (!i && e.staticTitle && n === "title") return e.staticTitle.replace(/[\n\r\t]/g, "") || c.process?.replace(/[\n\r\t]/g, "") || "";
        const l = e.capabilities.has(0) || e.capabilities.has(1), h = this._workspaceContextService.getWorkspace().folders.length > 1;
        if (c.cwd && l && (!e.shellLaunchConfig.isFeatureTerminal || n === "title")) {
            const g = Ee.from({
                scheme: e.workspaceFolder?.uri.scheme || gt.file,
                path: e.cwd ? Eqe(e.cwd) : void 0
            });
            let f = !1;
            if (h) f = !0;
            else if (e.workspaceFolder?.uri) {
                const v = this._fileService.hasCapability(e.workspaceFolder.uri, 1024);
                f = g.fsPath.localeCompare(e.workspaceFolder.uri.fsPath, void 0, {
                    sensitivity: v ? "case" : "base"
                }) !== 0;
            }
            f && (c.cwdFolder = Xl(c.cwd));
        }
        const p = Bwu(t, c).replace(/[\n\r\t]/g, "").trim();
        return p === "" && n === "title" ? e.processName || "" : p;
    }
    _getProgressStateString(e) {
        if (!e) return "";
        switch(e.state){
            case 0:
                return "";
            case 1:
                return `${Math.round(e.value)}%`;
            case 2:
                return "$(error)";
            case 3:
                return "$(loading~spin)";
            case 4:
                return "$(alert)";
        }
    }
}, qir = ie([
    C(0, Ii),
    C(1, r8),
    C(2, Jn)
], qir), V5n = class {
    constructor(e, t){
        this._target = e, this._viewDescriptorService = t;
    }
    getBackgroundColor(e) {
        const t = e.getColor(gir);
        if (t) return t;
        if (this._target.object === Mf.Editor) return e.getColor(Ph);
        const n = this._viewDescriptorService.getViewLocationById(F1);
        return n === 0 || n === 2 ? e.getColor(vG) : e.getColor(MLe);
    }
}, V5n = ie([
    C(1, eh)
], V5n);

}
