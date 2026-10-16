import { Vn } from "./arrays.js";
import { le } from "./async.js";
import { Dc, Xp } from "./auxiliaryWindows.js";
import { Hp, Rd } from "./backup.js";
import { WI } from "./backupMainService.js";
import { Js } from "./buildFlags.js";
import { Ie, Mt } from "./cancellation.js";
import { K0 } from "./cdpPort.js";
import { I0, Qe } from "./charCode.js";
import { at, ot } from "./configuration.js";
import { E } from "./configurationRegistry.js";
import { Ad, Oc } from "./cssDevService.js";
import { Bw, tO } from "./devBundleStamp.js";
import { Ta, ci } from "./dialogMainService.js";
import { GR } from "./diskFileSystemProvider.js";
import { Ye, qe } from "./environmentMainService.js";
import { N, O, se } from "./event.js";
import { oC } from "./extensionProtocolUrlWindowRouting.js";
import { Lr } from "./extpath.js";
import { Uv, Wt, cn, qn } from "./files.js";
import { AD, Sw, Tu } from "./firstWindowStartup.js";
import { _fe, c2 } from "./firstWindowStartupMainService.js";
import { cme } from "./glass-window-open-routing-policy.js";
import { ne, ni } from "./instantiation.js";
import { B, Hn } from "./ipc.js";
import { J, j, ve } from "./lifecycle.js";
import { Nl, Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Aa, Ro } from "./loggerService_2.js";
import { Zo } from "./main.js";
import { mr, tR } from "./map.js";
import { ZT } from "./nativeHostMainService.js";
import { $, $e } from "./network.js";
import { Ne, vm } from "./nls.js";
import { Ce, De, Dm, Fn, L, Yt, _t, on } from "./path.js";
import { At, Nb, sa } from "./performance.js";
import { ee, oe, os, q } from "./platform.js";
import { bo, fi } from "./policy.js";
import { Ei, bi } from "./process.js";
import { Iv } from "./processMainService.js";
import { Ha, Xn } from "./product.js";
import { Hg, Su } from "./protocol.js";
import { zp } from "./remoteHosts.js";
import { Fl, Ft, HR, St, Ur, VR, cs, g3, nt } from "./resources.js";
import { br, fr } from "./state.js";
import { Cn, Gs, or } from "./storageMainService.js";
import { jn } from "./strings.js";
import { gc, no, w, wn } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { fm } from "./unc.js";
import { x, ye } from "./uri.js";
import { Zr, rr } from "./userDataProfile.js";
import { Rc, Wi } from "./userDataProfile_3.js";
import { xx } from "./utilityProcess.js";
import { yR } from "./watcher.js";
import { Di } from "./window.js";
import { Rfe, df } from "./windowImpl.js";
import { nO, spe } from "./windowOpenRoutingPolicy.js";
import { y6, z0 } from "./windowThemePreferenceDefaults.js";
import { pt } from "./windows.js";
import { _7 } from "./windowsFinder.js";
import { Afe, Da } from "./windowsStateHandler.js";
import { bn } from "./workspace.js";
import { BI } from "./workspaces.js";
import { Eu, e0, wu } from "./workspacesHistoryMainService.js";
import { Cd, Ic, Pc, io, lo, qp } from "./workspacesManagementMainService.js";
import * as Mfe from "fs";
import { app as Pfe } from "electron";
import { shell as QQe } from "electron";
import { hostname as ZQe } from "os";
import { BrowserWindow as b1 } from "electron";
import { release as eZe } from "os";
import { arch as tZe } from "os";
function gm(e) {
    if (process.platform !== "win32") return;
    const t = xx();
    if (t) if (typeof e == "string") t.add(e.toLowerCase());
    else for (const n of FLe(e))gm(n);
}
function FLe(e) {
    const t = new Set;
    if (Array.isArray(e)) for (const n of e)typeof n == "string" && t.add(n);
    return Array.from(t);
}
function Zs(e, t = (n)=>n) {
    const n = new Set;
    return e.filter((r)=>{
        const s = t(r);
        return n.has(s) ? !1 : (n.add(s), !0);
    });
}
function WR(e) {
    return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function BR(e, t) {
    return ee && e.endsWith(":") && (e += Fn), Dm(e) || (e = L(t, e)), e = on(e), GR(e);
}
function nT(e) {
    const t = e.split(":");
    let n, r, s;
    for (const i of t){
        const a = Number(i);
        Uv(a) ? r === void 0 ? r = a : s === void 0 && (s = a) : n = n ? [
            n,
            i
        ].join(":") : i;
    }
    if (!n) throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");
    return {
        path: n,
        line: r !== void 0 ? r : void 0,
        column: s !== void 0 ? s : r !== void 0 ? 1 : void 0
    };
}
function $l(e, t) {
    const { os: n, tildify: r, relative: s } = t;
    if (s) {
        const o = $xe(e, s, n);
        if (typeof o == "string") return o;
    }
    let i = e.fsPath;
    if (n === 1 && !ee ? i = i.replace(/\//g, "\\") : n !== 1 && ee && (i = i.replace(/\\/g, "/")), n !== 1 && r?.userHome) {
        const o = r.userHome.fsPath;
        let l;
        e.scheme !== r.userHome.scheme && e.path[0] === De.sep && e.path[1] !== De.sep ? l = r.userHome.with({
            path: e.path
        }).fsPath : l = i, i = jxe(l, o, n);
    }
    return (n === 1 ? Yt : De).normalize(e0(i, n === 1));
}
function $xe(e, t, n) {
    const r = n === 1 ? Yt : De, s = n === 3 ? nt : VR, i = t.getWorkspace(), a = i.folders.at(0);
    if (!a) return;
    e.scheme !== a.uri.scheme && e.path[0] === De.sep && e.path[1] !== De.sep && (e = a.uri.with({
        path: e.path
    }));
    const o = t.getWorkspaceFolder(e);
    if (!o) return;
    let l;
    if (s.isEqual(o.uri, e) ? l = "" : l = s.relativePath(o.uri, e) ?? "", l && (l = r.normalize(l)), i.folders.length > 1 && !t.noPrefix) {
        const d = o.name ? o.name : s.basenameOrAuthority(o.uri);
        l = l ? `${d} \u2022 ${l}` : d;
    }
    return l;
}
function jxe(e, t, n = os) {
    if (n === 1 || !e || !t) return e;
    let r = lT.original === t ? lT.normalized : void 0;
    r || (r = t, ee && (r = Fl(r)), r = `${Zo(r, De.sep)}${De.sep}`, lT = {
        original: t,
        normalized: r
    });
    let s = e;
    return ee && (s = Fl(s)), (n === 3 ? s.startsWith(r) : yR(s, r)) ? `~/${s.substr(r.length)}` : e;
}
var lT;
function p5e(e) {
    if (e === void 0) return;
    const t = e.trim();
    if (!/^\d{1,5}$/.test(t)) return;
    const n = Number(t);
    if (!(n < 1 || n > 65535)) return n;
}
function h6({ rawRemoteDebuggingPortSwitch: e, applicationName: t }) {
    if (!(!Js.developmentTooling || t !== "cursor-dev")) return p5e(e);
}
function zT(e) {
    return !!e.workspaceUri;
}
function R6(e) {
    return !!e.folderUri;
}
function C6(e) {
    return !!e.fileUri;
}
async function OWe(e, t, n) {
    for (const s of e){
        const i = s.openedWorkspace;
        if (rr(i)) {
            const a = await n(i);
            if (a) {
                if (a.folders.some((o)=>St.isEqualOrParent(t, o.uri))) return s;
            } else if (St.isEqualOrParent(t, i.configPath)) return s;
        }
    }
    const r = e.filter((s)=>Zr(s.openedWorkspace) && St.isEqualOrParent(t, s.openedWorkspace.uri));
    if (r.length) return r.sort((s, i)=>-(s.openedWorkspace.uri.path.length - i.openedWorkspace.uri.path.length))[0];
}
function LWe(e, t) {
    const n = (r)=>t.some((s)=>St.isEqual(x.file(s), x.file(r)));
    for (const r of e)if (r.config?.extensionDevelopmentPath?.some((s)=>n(s))) return r;
}
function Mc(e) {
    return e.scheme === $.vscodeRemote ? e.authority : void 0;
}
function VWe(e) {
    if (!e) return;
    const t = e.indexOf("+");
    return t < 0 ? e : e.substr(0, t);
}
function EKe(e) {
    return e === "default" || e === "agentWindow" || e === "lastUsedWindows";
}
function bKe(e) {
    switch(e){
        case "agentWindow":
        case "true":
            return "agentWindow";
        case "lastUsedWindows":
        case "false":
            return "lastUsedWindows";
        case "default":
        default:
            return "default";
    }
}
function RKe(e) {
    const t = e.get(AD, -1);
    if (EKe(t)) return t;
    const n = e.get(Sw, -1), r = bKe(n);
    return CKe(e, r), r;
}
function CKe(e, t) {
    e.store(AD, t, -1, 0), t === "default" ? e.remove(Sw, -1) : e.store(Sw, t === "agentWindow" ? "true" : "false", -1, 0);
}
function IKe(e) {
    switch(e){
        case "--glass":
        case "--no-glass":
        case "--classic":
        case "--no-classic":
            return !0;
        default:
            return e.startsWith("--glass=") || e.startsWith("--classic=");
    }
}
function jg(e) {
    const { cli: t } = e;
    return (e.urisToOpen?.length ?? 0) > 0 || (t._?.length ?? 0) > 0 || (t["file-uri"]?.length ?? 0) > 0 || (t["folder-uri"]?.length ?? 0) > 0;
}
function lme(e, t) {
    return t.launchArgs.classic === !0 || t.launchArgs.glass === !0 || t.processArgv.some(IKe) ? !0 : jg(e) || jg({
        cli: t.launchArgs
    });
}
function kw(e) {
    return e?.reason.startsWith("reactivated_") === !0;
}
function AKe(e, t, n) {
    !kw(t) || lme(e, n) || (e.forceEmpty = !0, e.cli = {
        ...e.cli,
        glass: !0,
        classic: !1
    });
}
function OQe(e) {
    return e.lastNormalWindowWasOpenOnShutdown !== void 0 ? !e.lastNormalWindowWasOpenOnShutdown : !e.hasStoredNormalWindowState;
}
function LQe(e) {
    const { currentGlass: t, decision: n, state: r } = e;
    return n ? kw(n) ? e.hasExplicitFirstWindowIntent ? t : !0 : OQe(r) ? !0 : t : t;
}
function HQe(e) {
    if (e?.workspace) return {
        workspaceUri: e.workspace.configPath
    };
    if (e?.folderUri) return {
        folderUri: e.folderUri
    };
}
function KQe(e, t) {
    if (cme(e)) return {
        kind: "glass"
    };
    const n = HQe(t);
    return n ? {
        kind: "restore",
        openable: n
    } : t?.uiState.glassMode === !0 ? {
        kind: "glass"
    } : {
        kind: "empty"
    };
}
function zQe(e, t) {
    return e ? e.config?.glass === !0 : t?.uiState.glassMode === !0;
}
function Cfe() {
    return {
        _: [],
        classic: !0,
        glass: !1
    };
}
function Ife(e) {
    return {
        context: 1,
        cli: Cfe(),
        forceEmpty: !0,
        forceNewWindow: !0,
        remoteAuthority: e?.remoteAuthority
    };
}
async function YQe(e, t, n) {
    const r = KQe(e, t);
    switch(r.kind){
        case "glass":
            return n.open({
                context: 1,
                cli: {
                    _: [],
                    glass: !0
                }
            });
        case "restore":
            {
                const s = await n.open({
                    context: 1,
                    cli: Cfe(),
                    urisToOpen: [
                        r.openable
                    ],
                    remoteAuthority: t?.remoteAuthority
                });
                return s.length > 0 ? s : n.open({
                    ...Ife(t)
                });
            }
        case "empty":
            return n.open({
                ...Ife(t)
            });
    }
}
function uf(e) {
    return rr(e?.workspace);
}
function Mu(e) {
    return Zr(e?.workspace);
}
var mf, Pu;
export { $l, $xe, AKe, BR, C6, CKe, Cfe, EKe, FLe, HQe, IKe, Ife, KQe, LQe, LWe, Mc, Mu, OQe, OWe, Pu, R6, RKe, VWe, WR, YQe, Zs, bKe, gm, h6, jg, jxe, kw, lT, lme, mf, nT, p5e, uf, zQe, zT };
var __wakaru_ha_initialized = false;
export function ha() {
if (__wakaru_ha_initialized) return;
__wakaru_ha_initialized = true;
"use strict";
h(), Lr(), Ce(), oe(), Ft(), jn(), lT = Object.create(null);

}
var __wakaru_nZe_initialized = false;
export function nZe() {
if (__wakaru_nZe_initialized) return;
__wakaru_nZe_initialized = true;
"use strict";
h(), fm(), Vn(), le(), Mt(), I0(), se(), Lr(), ha(), j(), $e(), Ce(), sa(), oe(), bi(), Ft(), Ze(), ye(), Ne(), Hp(), at(), Ta(), K0(), Ye(), Tu(), _fe(), Wt(), ne(), Vt(), te(), Ha(), Hg(), zp(), br(), or(), Di(), Rfe(), pt(), _7(), spe(), Afe(), bn(), BI(), Eu(), Pc(), y6(), gc(), fi(), Rc(), Ro(), Xp(), Ad(), tO(), mr(), mf = Object.create(null), Pu = class extends J {
    constructor(e, t, n, r, s, i, a, o, l, d, u, m, f, v, T, S, k, y, b, I, G, U, X, W, K, H, ue, Ee){
        super(), this.machineId = e, this.macMachineId = t, this.sqmId = n, this.devDeviceId = r, this.initialUserEnv = s, this.logService = i, this.loggerService = a, this.policyService = l, this.environmentMainService = d, this.userDataProfilesMainService = u, this.lifecycleMainService = m, this.backupMainService = f, this.configurationService = v, this.workspacesHistoryMainService = T, this.workspacesManagementMainService = S, this.instantiationService = k, this.dialogMainService = y, this.fileService = b, this.protocolMainService = I, this.themeMainService = G, this.auxiliaryWindowsMainService = U, this.firstWindowStartupMainService = X, this.applicationStorageMainService = W, this.storageMainService = K, this.cssDevelopmentService = H, this.windowOpenRoutingPolicy = ue, this.devBundleStampProvider = Ee, this._onDidOpenWindow = this._register(new N), this.onDidOpenWindow = this._onDidOpenWindow.event, this._onDidSignalReadyWindow = this._register(new N), this.onDidSignalReadyWindow = this._onDidSignalReadyWindow.event, this._onDidDestroyWindow = this._register(new N), this.onDidDestroyWindow = this._onDidDestroyWindow.event, this._onDidChangeWindowsCount = this._register(new N), this.onDidChangeWindowsCount = this._onDidChangeWindowsCount.event, this._onDidMaximizeWindow = this._register(new N), this.onDidMaximizeWindow = this._onDidMaximizeWindow.event, this._onDidUnmaximizeWindow = this._register(new N), this.onDidUnmaximizeWindow = this._onDidUnmaximizeWindow.event, this._onDidChangeFullScreen = this._register(new N), this.onDidChangeFullScreen = this._onDidChangeFullScreen.event, this._onDidTriggerSystemContextMenu = this._register(new N), this.onDidTriggerSystemContextMenu = this._onDidTriggerSystemContextMenu.event, this.windows = new Map, this.windowsStateHandler = this._register(new Da(this, o, this.lifecycleMainService, this.logService, this.configurationService)), this.registerListeners();
    }
    registerListeners() {
        this._register(this.workspacesManagementMainService.onDidEnterWorkspace((e)=>this._onDidSignalReadyWindow.fire(e.window))), this._register(this.onDidSignalReadyWindow((e)=>{
            if (e.config?.extensionDevelopmentPath || e.config?.extensionTestsPath) {
                const t = new ve;
                if (t.add(O.any(e.onDidClose, e.onDidDestroy)(()=>t.dispose())), e.config.extensionDevelopmentPath) for (const n of e.config.extensionDevelopmentPath)t.add(this.protocolMainService.addValidFileRoot(n));
                e.config.extensionTestsPath && t.add(this.protocolMainService.addValidFileRoot(e.config.extensionTestsPath));
            }
        }));
    }
    openEmptyWindow(e, t) {
        const { glass: n, classic: r, ...s } = this.environmentMainService.args, i = s, a = t?.remoteAuthority || void 0, o = !0, l = t?.forceReuseWindow, d = !l;
        return this.open({
            ...e,
            cli: i,
            forceEmpty: o,
            forceNewWindow: d,
            forceReuseWindow: l,
            remoteAuthority: a,
            forceTempProfile: t?.forceTempProfile,
            forceProfile: t?.forceProfile
        });
    }
    async openOnWarmDockActivation() {
        const e = await this.resolveOpenAgentsWindowOnStartupPreference(), t = this.windowsStateHandler.getRestorableLastWindow();
        return this.logService.trace(`windowsManager#openOnWarmDockActivation preference=${e}`), YQe(e, t, this);
    }
    openExistingWindow(e, t) {
        e.focus(), this.handleWaitMarkerFile(t, [
            e
        ]);
    }
    shouldHonorGlassOpenRequest(e) {
        if (e.cursorForceNewWindow && (e.urisToOpen?.length ?? 0) > 0) return !0;
        if (!jg(e)) return !1;
        const t = this.getContextWindow(e);
        return t !== void 0 && t.config?.glass !== !0;
    }
    getContextWindow(e) {
        const t = e.contextWindowId;
        return typeof t == "number" ? this.getWindowById(t) : void 0;
    }
    shouldForceClassicWindowForProtocolLink(e) {
        if (e.context !== 6) return !1;
        const t = e.urisToOpen;
        return !t || t.length === 0 ? !1 : t.some((n)=>VWe(Mc(this.resourceFromOpenable(n))) === "ssh-remote");
    }
    shouldApplyGlassWindowRestrictions(e) {
        return e.cli?.glass !== !0 || e.cli?.classic === !0 || e.allowAdditionalGlassWindow === !0 ? !1 : !this.shouldHonorGlassOpenRequest(e);
    }
    getEffectiveCli(e) {
        return this.shouldForceClassicWindowForProtocolLink(e) || this.shouldHonorGlassOpenRequest(e) ? this.cliForClassicWindow(e.cli) : e.cli;
    }
    cliForClassicWindow(e) {
        return {
            ...e,
            classic: !0,
            glass: !1
        };
    }
    async resolveGlassCliFolderTarget(e) {
        const t = e.cli;
        if (!t) return;
        const n = this.isLastActiveWindowGlass(), r = t._?.length === 1 ? BR(on(t._[0]), Ei()) : void 0;
        let s = !1;
        if (r) try {
            s = (await Mfe.promises.stat(r)).isDirectory();
        } catch  {
            s = !1;
        }
        if (!(!this.windowOpenRoutingPolicy.shouldRouteCliFolderOpenToAgentsWindow({
            openContext: e.context,
            positionalArgCount: t._?.length ?? 0,
            cli: t,
            lastActiveWindowIsAgentsWindow: n,
            isExistingDirectory: s
        }) || !r)) return x.file(r);
    }
    static getExternalWorkspaceOpenSource(e) {
        if (e.context === 0 && (e.urisToOpen?.length ?? 0) === 0 && e.cli._.length === 1 && (e.cli["folder-uri"]?.length ?? 0) === 0 && (e.cli["file-uri"]?.length ?? 0) === 0) return "cliPath";
        if (e.context === 1 && e.urisToOpen?.length === 1 && zT(e.urisToOpen[0])) return "dockWorkspace";
    }
    async resolveExternalWorkspaceGlassHandoff(e, t) {
        const n = await this.resolveOpenAgentsWindowOnStartupPreference(), r = this.isLastActiveWindowGlass();
        return this.windowOpenRoutingPolicy.selectExternalWorkspaceHandoff({
            source: Pu.getExternalWorkspaceOpenSource(e),
            cli: e.cli,
            cursorForceNewWindow: e.cursorForceNewWindow,
            forceNewTabbedWindow: e.forceNewTabbedWindow,
            forceProfile: e.forceProfile,
            forceTempProfile: e.forceTempProfile,
            resolvedOpenTargets: t,
            preference: n,
            lastActiveWindowIsAgentsWindow: r,
            routesToClassicWindow: this.getEffectiveCli(e)?.classic === !0,
            isExtensionDevelopment: this.environmentMainService.isExtensionDevelopment,
            isSmokeTest: this.environmentMainService.args["enable-smoke-test-driver"] === !0
        });
    }
    static createExternalWorkspaceGlassOpenConfig(e) {
        return {
            ...e,
            cli: {
                ...e.cli,
                _: [],
                "folder-uri": void 0,
                "file-uri": void 0,
                "new-window": !0,
                classic: !1,
                glass: !0
            },
            urisToOpen: void 0,
            forceEmpty: !0,
            forceNewWindow: !0
        };
    }
    async doOpenExternalWorkspaceInGlass(e, t) {
        let n = this.getExistingGlassWindow();
        return n ? n.focus() : n = await this.doOpenEmpty(Pu.createExternalWorkspaceGlassOpenConfig(e), !0, void 0, void 0), this.logService.trace("windowsManager#open: routing external workspace open into glass window", t.workspace.configPath.toString()), this.sendGlassIdeWorkspaceHandoff(n, t.workspace), n;
    }
    sendGlassIdeWorkspaceHandoff(e, t) {
        const n = {
            id: "glass.applyIdeWorkspaceHandoff",
            from: "menu",
            args: [
                {
                    workspaceIdentifier: {
                        id: t.id,
                        configPath: t.configPath.toJSON()
                    }
                }
            ]
        };
        e.sendWhenReady("vscode:runAction", Ie.None, n);
    }
    getExistingGlassWindow() {
        const e = this.getLastActiveWindow();
        return e?.config?.glass === !0 ? e : this.getWindows().find((t)=>t.config?.glass === !0);
    }
    async open(e) {
        this.logService.trace("windowsManager#open");
        const t = this.getFirstWindowExplicitIntentSnapshot();
        let n;
        e.initialStartup && (n = this.createInitialFirstWindowStartupContext(!0, t, e), this.initialFirstWindowStartupContext = n);
        const r = this.shouldForceClassicWindowForProtocolLink(e);
        r && this.logService.trace("windowsManager#open: forcing non-glass routing for remote protocol link");
        const s = await this.resolveGlassCliFolderTarget(e);
        if (s) {
            const W = {
                folderUri: s.toString()
            }, K = this.getExistingGlassWindow();
            if (K) return this.logService.trace("windowsManager#open: routing CLI folder open into existing glass window", s.toString()), K.focus(), K.sendWhenReady("vscode:createNewComposer", Ie.None, W), this.handleWaitMarkerFile(e, [
                K
            ]), [
                K
            ];
            this.logService.trace("windowsManager#open: cold-start routing CLI folder open to glass", s.toString()), e.cli._ = [];
            let H = !1;
            const ue = this._register(new ve), Ee = (me)=>{
                H || (H = !0, me.sendWhenReady("vscode:createNewComposer", Ie.None, W), this._store.delete(ue));
            };
            ue.add(this.onDidSignalReadyWindow((me)=>{
                me.config?.glass === !0 && Ee(me);
            })), Hn(()=>{
                if (H) {
                    this._store.delete(ue);
                    return;
                }
                this._store.delete(ue), this.logService.trace("windowsManager#open: glass cold-start timed out; opening folder in classic window", s.toString()), this.open({
                    ...e,
                    initialStartup: !1,
                    cli: {
                        ...e.cli,
                        _: [
                            s.fsPath
                        ],
                        classic: !0,
                        glass: !1
                    }
                });
            }, 12e4, ue);
        }
        if (this.shouldApplyGlassWindowRestrictions(e)) {
            const W = this.getExistingGlassWindow();
            if (W && !jg(e)) return this.logService.trace("windowsManager#open: glass mode - focusing existing glass window instead of opening new one"), W.focus(), this.handleWaitMarkerFile(e, [
                W
            ]), [
                W
            ];
        }
        if ((e.addMode || e.removeMode) && (e.initialStartup || !this.getLastActiveWindow()) && (e.addMode = !1, e.removeMode = !1), e.initialStartup) {
            const W = await this.ensureInitialFirstWindowStartupResolved();
            AKe(e, W, t);
        }
        const i = [], a = [], o = [], l = [], d = [], u = [];
        let m, f = !1;
        const { pathsToOpen: v, resolvedOpenTargets: T } = await this.getPathsToOpen(e);
        this.logService.trace("windowsManager#open pathsToOpen", v);
        const S = await this.resolveExternalWorkspaceGlassHandoff(e, T);
        for (const W of v)Mu(W) ? e.addMode ? i.push(W) : e.removeMode ? a.push(W) : o.push(W) : uf(W) ? l.push(W) : W.fileUri ? (m || (m = {
            filesToOpenOrCreate: [],
            filesToDiff: [],
            filesToMerge: [],
            remoteAuthority: W.remoteAuthority
        }), m.filesToOpenOrCreate.push(W)) : W.backupPath ? u.push({
            backupFolder: _t(W.backupPath),
            remoteAuthority: W.remoteAuthority
        }) : f = !0;
        e.diffMode && m && m.filesToOpenOrCreate.length >= 2 && (m.filesToDiff = m.filesToOpenOrCreate.slice(0, 2), m.filesToOpenOrCreate = []), e.mergeMode && m && m.filesToOpenOrCreate.length === 4 && (m.filesToMerge = m.filesToOpenOrCreate.slice(0, 4), m.filesToOpenOrCreate = [], m.filesToDiff = []), m && e.waitMarkerFileURI && (m.filesToWait = {
            paths: wn([
                ...m.filesToDiff,
                m.filesToMerge[3],
                ...m.filesToOpenOrCreate
            ]),
            waitMarkerFileUri: e.waitMarkerFileURI
        });
        const k = kw(this.firstWindowStartupMainService.getInitialStartupDecision());
        e.initialStartup && !k ? (d.push(...this.workspacesManagementMainService.getUntitledWorkspaces()), l.push(...d), u.push(...this.backupMainService.getEmptyWindowBackups())) : e.initialStartup || (u.length = 0);
        const y = S ? l.filter((W)=>W.workspace.id !== S.workspace.id) : l, { windows: b, filesOpenedInWindow: I } = await this.doOpen(e, y, o, u, f, m, i, a, r);
        let G;
        if (S) {
            G = await this.doOpenExternalWorkspaceInGlass(e, S);
            const W = G;
            b.includes(W) || b.push(W);
        }
        if (this.logService.trace(`windowsManager#open used window count ${b.length} (workspacesToOpen: ${l.length}, foldersToOpen: ${o.length}, emptyToRestore: ${u.length}, maybeOpenEmptyWindow: ${f})`), b.length > 1) {
            const W = I ?? G;
            if (W) W.focus();
            else {
                const K = this.windowsStateHandler.state.lastActiveWindow && !e.forceEmpty && !jg(e);
                let H = !0, ue = !0;
                if (K) {
                    const Ee = b.filter((me)=>this.windowsStateHandler.state.lastActiveWindow && me.backupPath === this.windowsStateHandler.state.lastActiveWindow.backupPath);
                    Ee.length && (Ee[0].focus(), H = !1, ue = !1);
                }
                if (H) for(let Ee = b.length - 1; Ee >= 0; Ee--){
                    const me = b[Ee];
                    if (!(me.openedWorkspace && d.some((Nt)=>me.openedWorkspace && Nt.workspace.id === me.openedWorkspace.id) || me.backupPath && u.some((Nt)=>me.backupPath && Nt.backupFolder === _t(me.backupPath)))) {
                        me.focus(), ue = !1;
                        break;
                    }
                }
                ue && b[b.length - 1].focus();
            }
        }
        const U = m && m.filesToDiff.length > 0, X = m && m.filesToMerge.length > 0;
        if (!b.some((W)=>W.isExtensionDevelopmentHost) && !U && !X && !e.noRecentEntry) {
            const W = [];
            for (const K of v)uf(K) && K.workspace.id !== S?.workspace.id && !K.transient ? W.push({
                label: K.label,
                workspace: K.workspace,
                remoteAuthority: K.remoteAuthority
            }) : Mu(K) ? W.push({
                label: K.label,
                folderUri: K.workspace.uri,
                remoteAuthority: K.remoteAuthority
            }) : K.fileUri && W.push({
                label: K.label,
                fileUri: K.fileUri,
                remoteAuthority: K.remoteAuthority
            });
            this.workspacesHistoryMainService.addRecentlyOpened(W);
        }
        return this.handleWaitMarkerFile(e, b), b;
    }
    handleWaitMarkerFile(e, t) {
        const n = e.waitMarkerFileURI;
        e.context === 0 && n && t.length === 1 && t[0] && (async ()=>{
            await t[0].whenClosedOrLoaded;
            try {
                await this.fileService.del(n);
            } catch  {}
        })();
    }
    async doOpen(e, t, n, r, s, i, a, o, l) {
        const d = [];
        let u;
        function m(W, K) {
            d.push(W), K && (u = W, i = void 0);
        }
        let { openFolderInNewWindow: f, openFilesInNewWindow: v } = this.shouldOpenNewWindow(e);
        l && (f = !0, v = !0);
        const T = this.getContextWindow(e), S = T !== void 0 && T.config?.glass !== !0, k = T?.config?.glass === !0 && e.forceNewWindow === !0, y = e.cursorForceNewWindow === !0 && (e.urisToOpen?.length ?? 0) > 0, b = l || S || k || y ? this.getWindows().filter((W)=>W.config?.glass !== !0) : this.getWindows();
        if (!e.initialStartup && (a.length > 0 || o.length > 0)) {
            const W = a.at(0)?.remoteAuthority ?? o.at(0)?.remoteAuthority, K = this.getLastActiveWindowForAuthority(W);
            K && m(this.doAddRemoveFoldersInExistingWindow(K, a.map((H)=>H.workspace.uri), o.map((H)=>H.workspace.uri)));
        }
        const I = n.length + t.length + r.length;
        if (i && I === 0) {
            const W = i.filesToOpenOrCreate[0] || i.filesToDiff[0] || i.filesToMerge[3], K = b.filter((ue)=>i && Ur(ue.remoteAuthority, i.remoteAuthority));
            let H;
            W?.fileUri && !v && ((e.context === 4 || e.context === 0 || e.context === 1 || e.context === 6) && (H = await OWe(K, W.fileUri, async (ue)=>ue.configPath.scheme === $.file ? this.workspacesManagementMainService.resolveLocalWorkspace(ue.configPath) : void 0)), H || (H = this.doGetLastActiveWindow(K))), H ? rr(H.openedWorkspace) ? t.push({
                workspace: H.openedWorkspace,
                remoteAuthority: H.remoteAuthority
            }) : Zr(H.openedWorkspace) ? n.push({
                workspace: H.openedWorkspace,
                remoteAuthority: H.remoteAuthority
            }) : m(this.doOpenFilesInExistingWindow(e, H, i), !0) : m(await this.openInBrowserWindow({
                userEnv: e.userEnv,
                cli: this.getEffectiveCli(e),
                initialStartup: e.initialStartup,
                shadowWindowForWorkspaceId: e.shadowWindowForWorkspaceId,
                windowInWindow: e.windowInWindow,
                windowInWindowBodyClass: e.windowInWindowBodyClass,
                filesToOpen: i,
                forceNewWindow: !0,
                remoteAuthority: i.remoteAuthority,
                forceNewTabbedWindow: e.forceNewTabbedWindow,
                forceProfile: e.forceProfile,
                forceTempProfile: e.forceTempProfile,
                glassLaunchIntent: e.glassLaunchIntent
            }), !0);
        }
        const G = Zs(t, (W)=>W.workspace.id);
        if (G.length > 0) {
            const W = wn(G.map((K)=>Cd(b, K.workspace.configPath)));
            if (W.length > 0) {
                const K = W[0], H = Ur(i?.remoteAuthority, K.remoteAuthority) ? i : void 0;
                m(this.doOpenFilesInExistingWindow(e, K, H), !!H), f = !0;
            }
            for (const K of G){
                if (W.some((Ee)=>Ee.openedWorkspace && Ee.openedWorkspace.id === K.workspace.id)) continue;
                const H = K.remoteAuthority, ue = Ur(i?.remoteAuthority, H) ? i : void 0;
                m(await this.doOpenFolderOrWorkspace(e, K, f, ue), !!ue), f = !0;
            }
        }
        const U = Zs(n, (W)=>St.getComparisonKey(W.workspace.uri));
        if (U.length > 0) {
            const W = wn(U.map((K)=>Cd(b, K.workspace.uri)));
            if (W.length > 0) {
                const K = W[0], H = Ur(i?.remoteAuthority, K.remoteAuthority) ? i : void 0;
                m(this.doOpenFilesInExistingWindow(e, K, H), !!H), f = !0;
            }
            for (const K of U){
                if (W.some((Ee)=>Zr(Ee.openedWorkspace) && St.isEqual(Ee.openedWorkspace.uri, K.workspace.uri))) continue;
                const H = K.remoteAuthority, ue = Ur(i?.remoteAuthority, H) ? i : void 0;
                m(await this.doOpenFolderOrWorkspace(e, K, f, ue), !!ue), f = !0;
            }
        }
        const X = Zs(r, (W)=>W.backupFolder);
        if (X.length > 0) for (const W of X){
            const K = W.remoteAuthority, H = Ur(i?.remoteAuthority, K) ? i : void 0;
            m(await this.doOpenEmpty(e, !0, K, H, W), !!H), f = !0;
        }
        if (i || s && (e.forceEmpty || d.length === 0)) {
            const W = i ? i.remoteAuthority : e.remoteAuthority;
            m(await this.doOpenEmpty(e, f, W, i), !!i);
        }
        return {
            windows: Zs(d),
            filesOpenedInWindow: u
        };
    }
    doOpenFilesInExistingWindow(e, t, n) {
        this.logService.trace("windowsManager#doOpenFilesInExistingWindow", {
            filesToOpen: n
        }), this.focusMainOrChildWindow(t);
        const r = {
            filesToOpenOrCreate: n?.filesToOpenOrCreate,
            filesToDiff: n?.filesToDiff,
            filesToMerge: n?.filesToMerge,
            filesToWait: n?.filesToWait,
            termProgram: e?.userEnv?.TERM_PROGRAM
        };
        return t.sendWhenReady("vscode:openFiles", Ie.None, r), t;
    }
    focusMainOrChildWindow(e) {
        let t = e;
        const n = b1.getFocusedWindow();
        if (n && n.id !== e.id) {
            const r = this.auxiliaryWindowsMainService.getWindowByWebContents(n.webContents);
            r && r.parentId === e.id && (t = r);
        }
        t.focus();
    }
    doAddRemoveFoldersInExistingWindow(e, t, n) {
        this.logService.trace("windowsManager#doAddRemoveFoldersToExistingWindow", {
            foldersToAdd: t,
            foldersToRemove: n
        }), e.focus();
        const r = {
            foldersToAdd: t,
            foldersToRemove: n
        };
        return e.sendWhenReady("vscode:addRemoveFolders", Ie.None, r), e;
    }
    doOpenEmpty(e, t, n, r, s) {
        this.logService.trace("windowsManager#doOpenEmpty", {
            restore: !!s,
            remoteAuthority: n,
            filesToOpen: r,
            forceNewWindow: t
        });
        let i;
        return !t && typeof e.contextWindowId == "number" && (i = this.getWindowById(e.contextWindowId)), this.openInBrowserWindow({
            userEnv: e.userEnv,
            cli: this.getEffectiveCli(e),
            initialStartup: e.initialStartup,
            remoteAuthority: n,
            forceNewWindow: t,
            forceNewTabbedWindow: e.forceNewTabbedWindow,
            shadowWindowForWorkspaceId: e.shadowWindowForWorkspaceId,
            windowInWindow: e.windowInWindow,
            windowInWindowBodyClass: e.windowInWindowBodyClass,
            filesToOpen: r,
            windowToUse: i,
            emptyWindowBackupInfo: s,
            forceProfile: e.forceProfile,
            forceTempProfile: e.forceTempProfile,
            glassLaunchIntent: e.glassLaunchIntent,
            allowAdditionalGlassWindow: e.allowAdditionalGlassWindow
        });
    }
    doOpenFolderOrWorkspace(e, t, n, r, s) {
        return this.logService.trace("windowsManager#doOpenFolderOrWorkspace", {
            folderOrWorkspace: t,
            filesToOpen: r
        }), !n && !s && typeof e.contextWindowId == "number" && (s = this.getWindowById(e.contextWindowId)), this.openInBrowserWindow({
            workspace: t.workspace,
            userEnv: e.userEnv,
            cli: this.getEffectiveCli(e),
            initialStartup: e.initialStartup,
            remoteAuthority: t.remoteAuthority,
            forceNewWindow: n,
            forceNewTabbedWindow: e.forceNewTabbedWindow,
            filesToOpen: r,
            windowToUse: s,
            shadowWindowForWorkspaceId: e.shadowWindowForWorkspaceId,
            windowInWindow: e.windowInWindow,
            windowInWindowBodyClass: e.windowInWindowBodyClass,
            forceProfile: e.forceProfile,
            forceTempProfile: e.forceTempProfile
        });
    }
    async getPathsToOpen(e) {
        let t, n = [], r = !1, s = !1;
        if (e.urisToOpen && e.urisToOpen.length > 0 ? (t = await this.doExtractPathsFromAPI(e), n = [
            ...t
        ], r = !0) : e.forceEmpty ? t = [
            mf
        ] : e.cli._.length || e.cli["folder-uri"] || e.cli["file-uri"] ? (t = await this.doExtractPathsFromCLI(e.cli), n = [
            ...t
        ], t.length === 0 && t.push(mf), r = !0) : this.shouldApplyGlassWindowRestrictions(e) ? (this.logService.trace("windowsManager#getPathsToOpen: glass mode - forcing empty window"), t = [
            mf
        ]) : (t = await this.doGetPathsFromLastSession(), t.length === 0 && t.push(mf), s = !0), !e.addMode && !e.removeMode && r) {
            const a = t.filter((o)=>Mu(o));
            if (a.length > 1) {
                const o = a[0].remoteAuthority;
                if (a.every((l)=>Ur(l.remoteAuthority, o))) {
                    let l;
                    const d = await this.doGetWorkspaceMatchingFoldersFromLastSession(o, a);
                    d ? l = d : l = await this.workspacesManagementMainService.createUntitledWorkspace(a.map((u)=>({
                            uri: u.workspace.uri
                        }))), t.push({
                        workspace: l,
                        remoteAuthority: o
                    }), t = t.filter((u)=>!Mu(u));
                }
            }
        }
        const i = kw(this.firstWindowStartupMainService.getInitialStartupDecision());
        if (e.initialStartup && !s && !i && this.configurationService.getValue("window")?.restoreWindows === "preserve") {
            const a = await this.doGetPathsFromLastSession();
            t.unshift(...a.filter((o)=>uf(o) || Mu(o) || o.backupPath));
        }
        return {
            pathsToOpen: t,
            resolvedOpenTargets: n
        };
    }
    async doExtractPathsFromAPI(e) {
        const t = {
            gotoLineMode: e.gotoLineMode,
            remoteAuthority: e.remoteAuthority
        }, n = await Promise.all(wn(e.urisToOpen || []).map(async (r)=>{
            const s = await this.resolveOpenable(r, t);
            if (s) return s.label = r.label, s;
            const i = this.resourceFromOpenable(r);
            this.dialogMainService.showMessageBox({
                type: "info",
                buttons: [
                    E(2681, null)
                ],
                message: i.scheme === $.file ? E(2682, null) : E(2683, null),
                detail: i.scheme === $.file ? E(2684, null, $l(i, {
                    os,
                    tildify: this.environmentMainService
                })) : E(2685, null, i.toString(!0))
            }, b1.getFocusedWindow() ?? void 0);
        }));
        return wn(n);
    }
    async doExtractPathsFromCLI(e) {
        const t = [], n = {
            ignoreFileNotFound: !0,
            gotoLineMode: e.goto,
            remoteAuthority: e.remote || void 0,
            forceOpenWorkspaceAsFile: e.diff && e._.length === 2 || e.merge && e._.length === 4
        }, r = e["folder-uri"];
        if (r) {
            const a = await Promise.all(r.map((o)=>{
                const l = this.cliArgToUri(o);
                if (l) return this.resolveOpenable({
                    folderUri: l
                }, n);
            }));
            t.push(...wn(a));
        }
        const s = e["file-uri"];
        if (s) {
            const a = await Promise.all(s.map((o)=>{
                const l = this.cliArgToUri(o);
                if (l) return this.resolveOpenable(io(o) ? {
                    workspaceUri: l
                } : {
                    fileUri: l
                }, n);
            }));
            t.push(...wn(a));
        }
        const i = await Promise.all(e._.map((a)=>n.remoteAuthority ? this.doResolveRemotePath(a, n) : this.doResolveFilePath(a, n)));
        return t.push(...wn(i)), t;
    }
    cliArgToUri(e) {
        try {
            const t = x.parse(e);
            if (!t.scheme) {
                this.logService.error(`Invalid URI input string, scheme missing: ${e}`);
                return;
            }
            return t.path ? t : t.with({
                path: "/"
            });
        } catch (t) {
            this.logService.error(`Invalid URI input string: ${e}, ${t.message}`);
        }
    }
    async doGetPathsFromLastSession() {
        const e = this.getRestoreWindowsSetting();
        switch(e){
            case "none":
                return [];
            case "one":
            case "all":
            case "preserve":
            case "folders":
                {
                    const t = [];
                    e !== "one" && t.push(...this.windowsStateHandler.state.openedWindows), this.windowsStateHandler.state.lastActiveWindow && t.push(this.windowsStateHandler.state.lastActiveWindow);
                    const n = await Promise.all(t.map(async (r)=>{
                        if (r.workspace) {
                            const s = await this.resolveOpenable({
                                workspaceUri: r.workspace.configPath
                            }, {
                                remoteAuthority: r.remoteAuthority,
                                rejectTransientWorkspaces: !0
                            });
                            if (uf(s)) return s;
                        } else if (r.folderUri) {
                            const s = await this.resolveOpenable({
                                folderUri: r.folderUri
                            }, {
                                remoteAuthority: r.remoteAuthority
                            });
                            if (Mu(s)) return s;
                        } else if (e !== "folders" && r.backupPath) return {
                            backupPath: r.backupPath,
                            remoteAuthority: r.remoteAuthority
                        };
                    }));
                    return wn(n);
                }
        }
    }
    getRestoreWindowsSetting() {
        let e;
        return this.lifecycleMainService.wasRestarted ? e = "all" : (e = this.configurationService.getValue("window")?.restoreWindows || "all", [
            "preserve",
            "all",
            "folders",
            "one",
            "none"
        ].includes(e) || (e = "all")), e;
    }
    async doGetWorkspaceMatchingFoldersFromLastSession(e, t) {
        const n = (await this.doGetPathsFromLastSession()).filter((s)=>uf(s)), r = t.map((s)=>s.workspace.uri);
        for (const { workspace: s } of n){
            const i = await this.workspacesManagementMainService.resolveLocalWorkspace(s.configPath);
            if (!i || i.remoteAuthority !== e || i.transient || i.folders.length !== t.length) continue;
            const a = new tR(r, (o)=>St.getComparisonKey(o));
            if (i.folders.every((o)=>a.has(o.uri))) return i;
        }
    }
    async resolveOpenable(e, t = Object.create(null)) {
        const n = this.resourceFromOpenable(e);
        return n.scheme === $.file ? (C6(e) && (t = {
            ...t,
            forceOpenWorkspaceAsFile: !0
        }), this.doResolveFilePath(n.fsPath, t)) : this.doResolveRemoteOpenable(e, t);
    }
    doResolveRemoteOpenable(e, t) {
        let n = this.resourceFromOpenable(e);
        const r = Mc(n) || t.remoteAuthority;
        if (n = g3(HR(n)), C6(e)) {
            if (t.gotoLineMode) {
                const { path: s, line: i, column: a } = nT(n.path);
                return {
                    fileUri: n.with({
                        path: s
                    }),
                    options: {
                        selection: i ? {
                            startLineNumber: i,
                            startColumn: a || 1
                        } : void 0
                    },
                    remoteAuthority: r
                };
            }
            return {
                fileUri: n,
                remoteAuthority: r
            };
        } else if (zT(e)) return {
            workspace: Ic(n),
            remoteAuthority: r
        };
        return {
            workspace: qp(n),
            remoteAuthority: r
        };
    }
    resourceFromOpenable(e) {
        return zT(e) ? e.workspaceUri : R6(e) ? e.folderUri : e.fileUri;
    }
    async doResolveFilePath(e, t, n) {
        let r, s;
        t.gotoLineMode && ({ path: e, line: r, column: s } = nT(e)), e = BR(on(e), Ei());
        try {
            const i = await Mfe.promises.stat(e);
            if (i.isFile()) {
                if (!t.forceOpenWorkspaceAsFile) {
                    const a = await this.workspacesManagementMainService.resolveLocalWorkspace(x.file(e));
                    if (a) return a.transient && t.rejectTransientWorkspaces ? void 0 : {
                        workspace: {
                            id: a.id,
                            configPath: a.configPath
                        },
                        type: qn.File,
                        exists: !0,
                        remoteAuthority: a.remoteAuthority,
                        transient: a.transient
                    };
                }
                return {
                    fileUri: x.file(e),
                    type: qn.File,
                    exists: !0,
                    options: {
                        selection: r ? {
                            startLineNumber: r,
                            startColumn: s || 1
                        } : void 0
                    }
                };
            } else {
                if (i.isDirectory()) return {
                    workspace: qp(x.file(e), i),
                    type: qn.Directory,
                    exists: !0
                };
                if (!ee && e === "/dev/null") return {
                    fileUri: x.file(e),
                    type: qn.File,
                    exists: !0
                };
            }
        } catch (i) {
            if (i.code === "ERR_UNC_HOST_NOT_ALLOWED" && !n) return this.onUNCHostNotAllowed(e, t);
            const a = x.file(e);
            if (this.workspacesHistoryMainService.removeRecentlyOpened([
                a
            ]), t.ignoreFileNotFound && i.code === "ENOENT") return {
                fileUri: a,
                type: qn.File,
                exists: !1
            };
            this.logService.error(`Invalid path provided: ${e}, ${i.message}`);
        }
    }
    async onUNCHostNotAllowed(e, t) {
        const n = x.file(e), { response: r, checkboxChecked: s } = await this.dialogMainService.showMessageBox({
            type: "warning",
            buttons: [
                E(2686, null),
                E(2687, null),
                E(2688, null)
            ],
            message: E(2689, null, n.authority),
            detail: E(2690, null, $l(n, {
                os,
                tildify: this.environmentMainService
            })),
            checkboxLabel: E(2691, null, n.authority),
            cancelId: 1
        });
        if (r === 0) {
            if (gm(n.authority), s) {
                const i = {
                    channel: "vscode:configureAllowedUNCHost",
                    args: n.authority
                };
                this.sendToFocused(i.channel, i.args), this.sendToOpeningWindow(i.channel, i.args);
            }
            return this.doResolveFilePath(e, t, !0);
        }
        if (r === 2) return QQe.openExternal("https://aka.ms/vscode-windows-unc"), this.onUNCHostNotAllowed(e, t);
    }
    doResolveRemotePath(e, t) {
        const n = e.charCodeAt(0), r = t.remoteAuthority;
        let s, i;
        t.gotoLineMode && ({ path: e, line: s, column: i } = nT(e)), n !== Qe.Slash && (WR(n) && e.charCodeAt(e.charCodeAt(1)) === Qe.Colon && (e = Fl(e)), e = `/${e}`);
        const a = x.from({
            scheme: $.vscodeRemote,
            authority: r,
            path: e
        });
        if (e.charCodeAt(e.length - 1) !== Qe.Slash) {
            if (io(e)) return t.forceOpenWorkspaceAsFile ? {
                fileUri: a,
                options: {
                    selection: s ? {
                        startLineNumber: s,
                        startColumn: i || 1
                    } : void 0
                },
                remoteAuthority: t.remoteAuthority
            } : {
                workspace: Ic(a),
                remoteAuthority: r
            };
            if (t.gotoLineMode || De.basename(e).indexOf(".") !== -1) return {
                fileUri: a,
                options: {
                    selection: s ? {
                        startLineNumber: s,
                        startColumn: i || 1
                    } : void 0
                },
                remoteAuthority: r
            };
        }
        return {
            workspace: qp(a),
            remoteAuthority: r
        };
    }
    shouldOpenNewWindow(e) {
        const t = this.configurationService.getValue("window"), n = t?.openFoldersInNewWindow || "default", r = t?.openFilesInNewWindow || "off";
        let s = (e.preferNewWindow || e.forceNewWindow) && !e.forceReuseWindow;
        !e.forceNewWindow && !e.forceReuseWindow && (n === "on" || n === "off") && (s = n === "on");
        let i = !1;
        return e.forceNewWindow || e.forceReuseWindow ? i = !!e.forceNewWindow && !e.forceReuseWindow : (q ? e.context === 1 && (i = !0) : e.context !== 3 && e.context !== 2 && !(e.userEnv && e.userEnv.TERM_PROGRAM === "vscode") && (i = !0), !e.cli.extensionDevelopmentPath && (r === "on" || r === "off") && (i = r === "on")), {
            openFolderInNewWindow: !!s,
            openFilesInNewWindow: i
        };
    }
    async openExtensionDevelopmentHostWindow(e, t) {
        const n = LWe(this.getWindows(), e);
        if (n) return this.lifecycleMainService.reload(n, t.cli), n.focus(), [
            n
        ];
        let r = t.cli["folder-uri"] || [], s = t.cli["file-uri"] || [], i = t.cli._;
        if (!i.length && !r.length && !s.length && !t.cli.extensionTestsPath) {
            const l = this.windowsStateHandler.state.lastPluginDevelopmentHostWindow, d = l?.workspace ?? l?.folderUri;
            d && (x.isUri(d) ? d.scheme === $.file ? i = [
                d.fsPath
            ] : r = [
                d.toString()
            ] : d.configPath.scheme === $.file ? i = [
                cs(d.configPath)
            ] : s = [
                d.configPath.toString()
            ]);
        }
        let a = t.remoteAuthority;
        for (const l of e)if (l.match(/^[a-zA-Z][a-zA-Z0-9\+\-\.]+:/)) {
            const d = x.parse(l), u = Mc(d);
            u && (a ? Ur(u, a) || this.logService.error("more than one extension development path authority") : a = u);
        }
        i = i.filter((l)=>{
            const d = x.file(l);
            return Cd(this.getWindows(), d) ? !1 : Ur(Mc(d), a);
        }), r = r.filter((l)=>{
            const d = this.cliArgToUri(l);
            return d && Cd(this.getWindows(), d) ? !1 : d ? Ur(Mc(d), a) : !1;
        }), s = s.filter((l)=>{
            const d = this.cliArgToUri(l);
            return d && Cd(this.getWindows(), d) ? !1 : d ? Ur(Mc(d), a) : !1;
        }), t.cli._ = i, t.cli["folder-uri"] = r, t.cli["file-uri"] = s;
        const o = {
            context: t.context,
            cli: t.cli,
            forceNewWindow: !0,
            forceEmpty: !i.length && !r.length && !s.length,
            userEnv: t.userEnv,
            noRecentEntry: !0,
            waitMarkerFileURI: t.waitMarkerFileURI,
            remoteAuthority: a,
            forceProfile: t.forceProfile,
            forceTempProfile: t.forceTempProfile
        };
        return this.open(o);
    }
    async openInBrowserWindow(e) {
        const t = this.configurationService.getValue("window"), n = this.getLastActiveWindow(), s = (t?.newWindowProfile ? this.userDataProfilesMainService.profiles.find((m)=>m.name === t.newWindowProfile) : void 0) ?? n?.profile ?? this.userDataProfilesMainService.defaultProfile;
        let i;
        !e.forceNewWindow && !e.forceNewTabbedWindow && (i = e.windowToUse || n, i && i.focus());
        const a = e.cli?.classic === !0, o = e.cli?.glass, l = !a && (o ?? !1), d = this.themeMainService.getOSColorScheme(), u = {
            ...this.environmentMainService.args,
            ...e.cli,
            glass: a ? !1 : o,
            machineId: this.machineId,
            macMachineId: this.macMachineId,
            sqmId: this.sqmId,
            devDeviceId: this.devDeviceId,
            cdpPort: h6({
                rawRemoteDebuggingPortSwitch: Pfe.commandLine.getSwitchValue("remote-debugging-port"),
                applicationName: Xn.applicationName
            }),
            windowId: -1,
            shadowWindowForWorkspaceId: e.shadowWindowForWorkspaceId ?? this.environmentMainService.args["shadow-window-for-workspace-id"] ?? e.cli?.["shadow-window-for-workspace-id"],
            windowInWindow: e.windowInWindow,
            windowInWindowBodyClass: e.windowInWindowBodyClass,
            windowInWindowParentDimensions: (()=>{
                if (e.windowInWindow !== void 0) {
                    const m = this.getWindowById(e.windowInWindow);
                    if (m) {
                        const f = m.win?.getBounds();
                        if (f) return {
                            width: f.width,
                            height: f.height
                        };
                    }
                }
            })(),
            mainPid: process.pid,
            appRoot: this.environmentMainService.appRoot,
            execPath: process.execPath,
            codeCachePath: this.environmentMainService.codeCachePath,
            backupPath: e.emptyWindowBackupInfo ? L(this.environmentMainService.backupHome, e.emptyWindowBackupInfo.backupFolder) : void 0,
            profiles: {
                home: this.userDataProfilesMainService.profilesHome,
                all: this.userDataProfilesMainService.profiles,
                profile: s
            },
            homeDir: this.environmentMainService.userHome.with({
                scheme: $.file
            }).fsPath,
            tmpDir: this.environmentMainService.tmpDir.with({
                scheme: $.file
            }).fsPath,
            userDataDir: this.environmentMainService.userDataPath,
            remoteAuthority: e.remoteAuthority,
            workspace: e.workspace,
            userEnv: {
                ...this.initialUserEnv,
                ...e.userEnv
            },
            nls: {
                messages: Iv(),
                language: vm()
            },
            filesToOpenOrCreate: e.filesToOpen?.filesToOpenOrCreate,
            filesToDiff: e.filesToOpen?.filesToDiff,
            filesToMerge: e.filesToOpen?.filesToMerge,
            filesToWait: e.filesToOpen?.filesToWait,
            logLevel: this.loggerService.getLogLevel(),
            loggers: this.loggerService.getGlobalLoggers(),
            logsPath: this.environmentMainService.logsHome.with({
                scheme: $.file
            }).fsPath,
            product: Xn,
            isInitialStartup: e.initialStartup,
            wasRestarted: !!e.initialStartup && this.lifecycleMainService.wasRestarted,
            perfMarks: Nb(),
            os: {
                release: eZe(),
                hostname: ZQe(),
                arch: tZe()
            },
            autoDetectHighContrast: t?.autoDetectHighContrast ?? !0,
            autoDetectColorScheme: t?.autoDetectColorScheme ?? z0,
            accessibilitySupport: Pfe.accessibilitySupportEnabled,
            colorScheme: d,
            policiesData: this.policyService.serialize(),
            continueOn: this.environmentMainService.continueOn,
            cssModules: this.cssDevelopmentService.isEnabled ? await this.cssDevelopmentService.getCssModules() : void 0,
            devBundleMtime: this.cssDevelopmentService.isEnabled ? await this.devBundleStampProvider.readStamp(this.environmentMainService.appRoot) : void 0,
            glassLaunchIntent: e.glassLaunchIntent
        };
        if (i) {
            const m = i.config;
            !u.extensionDevelopmentPath && m?.extensionDevelopmentPath && (u.extensionDevelopmentPath = m.extensionDevelopmentPath, u.extensionDevelopmentKind = m.extensionDevelopmentKind, u["enable-proposed-api"] = m["enable-proposed-api"], u.verbose = m.verbose, u["inspect-extensions"] = m["inspect-extensions"], u["inspect-brk-extensions"] = m["inspect-brk-extensions"], u.debugId = m.debugId, u.extensionEnvironment = m.extensionEnvironment, u["extensions-dir"] = m["extensions-dir"], u["disable-extensions"] = m["disable-extensions"], u["disable-extension"] = m["disable-extension"]), u.loggers = u.loggers;
        } else {
            const m = this.windowsStateHandler.getNewWindowState(u);
            !a && m.glassMode && (u.glass = !0);
            const f = e.initialStartup === !0 ? this.initialFirstWindowStartupContext ?? this.createInitialFirstWindowStartupContext(!0, this.getFirstWindowExplicitIntentSnapshot()) : this.createInitialFirstWindowStartupContext(!1, this.getFirstWindowExplicitIntentSnapshot()), v = e.initialStartup === !0 ? this.firstWindowStartupMainService.getInitialStartupDecision() ?? await this.firstWindowStartupMainService.resolveInitialWindowDecision(f) : await this.firstWindowStartupMainService.resolveInitialWindowDecision(f);
            if (u.glass = LQe({
                currentGlass: u.glass,
                decision: v,
                hasExplicitFirstWindowIntent: f.hasExplicitFirstWindowIntent,
                state: f.state
            }), this.shouldFocusExistingGlassForEmptyOpen(u, e)) {
                const y = this.getExistingGlassWindow();
                if (y) return this.logService.trace("windowsManager#openInBrowserWindow: focusing existing glass window instead of creating a second one"), y.focus(), y;
            }
            u.colorScheme = this.themeMainService.getOSColorScheme(), At("code/willCreateCodeWindow");
            const T = i = this.instantiationService.createInstance(df, {
                state: m,
                extensionDevelopmentPath: u.extensionDevelopmentPath,
                isExtensionTestHost: !!u.extensionTestsPath,
                shadowWindowForWorkspaceId: u.shadowWindowForWorkspaceId,
                windowInWindow: e.windowInWindow,
                isGlassWindow: u.glass === !0
            });
            if (At("code/didCreateCodeWindow"), e.forceNewTabbedWindow && this.getLastActiveWindow()?.addTabbedWindow(T), e.windowInWindow !== void 0) {
                const y = this.getWindowById(e.windowInWindow);
                y && T.attachToParent(y);
            }
            this.windows.set(T.id, T), this._onDidOpenWindow.fire(T), this._onDidChangeWindowsCount.fire({
                oldCount: this.getWindowCount() - 1,
                newCount: this.getWindowCount()
            });
            const S = new ve;
            S.add(T.onDidSignalReady(()=>this._onDidSignalReadyWindow.fire(T))), S.add(O.once(T.onDidClose)(()=>this.onWindowClosed(T, S))), S.add(O.once(T.onDidDestroy)(()=>this.onWindowDestroyed(T))), S.add(T.onDidMaximize(()=>this._onDidMaximizeWindow.fire(T))), S.add(T.onDidUnmaximize(()=>this._onDidUnmaximizeWindow.fire(T))), S.add(T.onDidEnterFullScreen(()=>this._onDidChangeFullScreen.fire({
                    window: T,
                    fullscreen: !0
                }))), S.add(T.onDidLeaveFullScreen(()=>this._onDidChangeFullScreen.fire({
                    window: T,
                    fullscreen: !1
                }))), S.add(T.onDidTriggerSystemContextMenu(({ x: y, y: b })=>this._onDidTriggerSystemContextMenu.fire({
                    window: T,
                    x: y,
                    y: b
                })));
            const k = Nl(T.webContents);
            k.removeAllListeners("devtools-reload-page"), S.add(O.fromNodeEventEmitter(k, "devtools-reload-page")(()=>this.lifecycleMainService.reload(T))), this.lifecycleMainService.registerWindow(T);
        }
        return u.windowId = i.id, i.isReady ? this.lifecycleMainService.unload(i, 4).then(async (m)=>{
            m || await this.doOpenInBrowserWindow(i, u, e, s);
        }) : await this.doOpenInBrowserWindow(i, u, e, s), i;
    }
    async doOpenInBrowserWindow(e, t, n, r) {
        t.extensionDevelopmentPath || (rr(t.workspace) ? t.backupPath = this.backupMainService.registerWorkspaceBackup({
            workspace: t.workspace,
            remoteAuthority: t.remoteAuthority
        }) : Zr(t.workspace) ? t.backupPath = this.backupMainService.registerFolderBackup({
            folderUri: t.workspace.uri,
            remoteAuthority: t.remoteAuthority
        }) : t.backupPath = this.backupMainService.registerEmptyWindowBackup({
            backupFolder: n.emptyWindowBackupInfo?.backupFolder ?? WI().id,
            remoteAuthority: t.remoteAuthority
        }));
        const s = t.workspace ?? ZT(t.backupPath, !1), i = this.resolveProfileForBrowserWindow(n, s, r), a = i instanceof Promise ? await i : i;
        t.profiles.profile = a, t.extensionDevelopmentPath || await this.userDataProfilesMainService.setProfileForWorkspace(s, a), e.load(t);
    }
    shouldFocusExistingGlassForEmptyOpen(e, t) {
        return e.glass === !0 && t.allowAdditionalGlassWindow !== !0 && t.workspace === void 0 && t.emptyWindowBackupInfo === void 0 && !this.hasFilesToOpen(t.filesToOpen);
    }
    hasFilesToOpen(e) {
        return e !== void 0 && ((e.filesToOpenOrCreate?.length ?? 0) > 0 || (e.filesToDiff?.length ?? 0) > 0 || (e.filesToMerge?.length ?? 0) > 0 || (e.filesToWait?.paths.length ?? 0) > 0);
    }
    resolveProfileForBrowserWindow(e, t, n) {
        return e.forceProfile ? this.userDataProfilesMainService.profiles.find((r)=>r.name === e.forceProfile) ?? this.userDataProfilesMainService.createNamedProfile(e.forceProfile) : e.forceTempProfile ? this.userDataProfilesMainService.createTransientProfile() : this.userDataProfilesMainService.getProfileForWorkspace(t) ?? n;
    }
    getFirstWindowExplicitIntentSnapshot() {
        const e = this.environmentMainService.args;
        return {
            processArgv: [
                ...process.argv
            ],
            launchArgs: {
                _: [
                    ...e._ ?? []
                ],
                "file-uri": [
                    ...e["file-uri"] ?? []
                ],
                "folder-uri": [
                    ...e["folder-uri"] ?? []
                ],
                glass: e.glass,
                classic: e.classic
            }
        };
    }
    createInitialFirstWindowStartupContext(e, t, n) {
        const r = n ?? {
            cli: this.environmentMainService.args
        };
        return {
            initialStartup: e,
            openWindowCount: this.getWindowCount(),
            hasExplicitFirstWindowIntent: lme(r, t),
            state: {
                lastNormalWindowWasOpenOnShutdown: this.windowsStateHandler.state.lastNonExtensionWindowWasOpenOnShutdown,
                hasStoredNormalWindowState: this.windowsStateHandler.hasStoredNormalWindowState()
            },
            readOpenAgentsWindowOnStartupPreference: ()=>this.resolveOpenAgentsWindowOnStartupPreference(),
            readStoredAccessToken: ()=>this.resolveStoredAccessToken(),
            readApplicationStorage: ()=>this.resolveApplicationStorage()
        };
    }
    async ensureInitialFirstWindowStartupResolved() {
        const e = this.firstWindowStartupMainService.getInitialStartupDecision();
        if (e !== void 0) return e;
        const t = this.initialFirstWindowStartupContext ?? this.createInitialFirstWindowStartupContext(!0, this.getFirstWindowExplicitIntentSnapshot());
        return this.firstWindowStartupMainService.resolveInitialWindowDecision(t);
    }
    async resolveOpenAgentsWindowOnStartupPreference() {
        try {
            const e = await this.resolveApplicationStorage();
            return RKe(e);
        } catch (e) {
            return this.logService.warn("[WindowsMainService] Failed to read open-agents-window startup preference", e), "default";
        }
    }
    async resolveStoredAccessToken() {
        return (await this.resolveApplicationStorage()).get("cursorAuth/accessToken", -1);
    }
    async resolveApplicationStorage() {
        return await this.storageMainService.applicationStorage.init(), await this.applicationStorageMainService.whenReady, this.applicationStorageMainService;
    }
    onWindowClosed(e, t) {
        this.windows.delete(e.id), this._onDidChangeWindowsCount.fire({
            oldCount: this.getWindowCount() + 1,
            newCount: this.getWindowCount()
        }), t.dispose();
    }
    onWindowDestroyed(e) {
        this.windows.delete(e.id), this._onDidDestroyWindow.fire(e);
    }
    getFocusedWindow() {
        const e = b1.getFocusedWindow();
        if (e) return this.getWindowById(e.id);
    }
    getLastActiveWindow() {
        return this.doGetLastActiveWindow(this.getWindows().filter((e)=>!e.config?.shadowWindowForWorkspaceId));
    }
    getLastActiveWindowForAuthority(e) {
        return this.doGetLastActiveWindow(this.getWindows().filter((t)=>Ur(t.remoteAuthority, e)));
    }
    doGetLastActiveWindow(e) {
        return oC(e);
    }
    isLastActiveWindowGlass() {
        return zQe(this.getLastActiveWindow(), this.windowsStateHandler.getRestorableLastWindow());
    }
    sendToFocused(e, ...t) {
        (this.getFocusedWindow() || this.getLastActiveWindow())?.sendWhenReady(e, Ie.None, ...t);
    }
    sendToOpeningWindow(e, ...t) {
        this._register(O.once(this.onDidSignalReadyWindow)((n)=>{
            n.sendWhenReady(e, Ie.None, ...t);
        }));
    }
    sendToAll(e, t, n) {
        for (const r of this.getWindows())n && n.indexOf(r.id) >= 0 || r.sendWhenReady(e, Ie.None, t);
    }
    getWindows() {
        return Array.from(this.windows.values());
    }
    getWindowCount() {
        return this.windows.size;
    }
    getWindowById(e) {
        return this.windows.get(e);
    }
    getWindowByWebContents(e) {
        const t = b1.fromWebContents(e);
        if (t) {
            const n = this.getWindowById(t.id);
            if (n?.matches(e)) return n;
        }
        for (const n of this.getWindows())if (n.matches(e)) return n;
    }
}, Pu = B([
    w(5, Z),
    w(6, Aa),
    w(7, fr),
    w(8, bo),
    w(9, qe),
    w(10, Wi),
    w(11, ht),
    w(12, Rd),
    w(13, ot),
    w(14, wu),
    w(15, lo),
    w(16, ni),
    w(17, ci),
    w(18, cn),
    w(19, Su),
    w(20, no),
    w(21, Dc),
    w(22, c2),
    w(23, Cn),
    w(24, Gs),
    w(25, Oc),
    w(26, nO),
    w(27, Bw)
], Pu);

}
