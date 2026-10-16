import { she } from "./app.js";
import { sh } from "./argvHelper.js";
import { iT, le, wr, xr } from "./async.js";
import { Hp, Rd } from "./backup.js";
import { ae, it } from "./buffer.js";
import { Ie, Mt } from "./cancellation.js";
import { at, ot } from "./configuration.js";
import { E } from "./configurationRegistry.js";
import { Ad, Oc } from "./cssDevService.js";
import { Bw, tO } from "./devBundleStamp.js";
import { Ta, ci } from "./dialogMainService.js";
import { bt } from "./diskFileSystemProviderServer_2.js";
import { Ye, qe } from "./environmentMainService.js";
import { Ka } from "./errorMessage.js";
import { Ve, wm } from "./errors.js";
import { N, O, se } from "./event.js";
import { Wt, cn } from "./files.js";
import { ne, ni } from "./instantiation.js";
import { B } from "./ipc.js";
import { xc } from "./launchMainService.js";
import { J, j, ve } from "./lifecycle.js";
import { En, Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Aa, Ro } from "./loggerService_2.js";
import { $Qe } from "./marketplace.js";
import { TG } from "./mcpProcessProxyService.js";
import { YT, fc } from "./menubar_2.js";
import { XT, ZT, rC } from "./nativeHostMainService.js";
import { $, $e, Jt } from "./network.js";
import { Ne } from "./nls.js";
import { At, Nb, sa } from "./performance.js";
import { Fe, Xs, ee, oe, q, zb } from "./platform.js";
import { bo, fi } from "./policy.js";
import { Tt, et } from "./productService.js";
import { Hg, Su } from "./protocol.js";
import { fs } from "./request_2.js";
import { br, fr } from "./state.js";
import { Yo, ca } from "./stopwatch.js";
import { Cn, Gs, or } from "./storageMainService.js";
import { Fi, ts } from "./telemetry.js";
import { EO } from "./telemetryService.js";
import { lf, yfe } from "./themables.js";
import { gc, mp, no, so, up, w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Zr, rr } from "./userDataProfile.js";
import { Rc, Wi } from "./userDataProfile_3.js";
import { K3, vt } from "./uuid.js";
import { Di, N6, P6 } from "./window.js";
import { hp, ro } from "./window_2.js";
import { QT, ct, pt } from "./windows.js";
import { bn } from "./workspace.js";
import { Pc, lo } from "./workspacesManagementMainService.js";
import { release as Efe } from "os";
import rs from "electron";
function r4(e) {
    return parseFloat(e) >= 25;
}
function p0(e) {
    return K3.test(e);
}
function h5e(e) {
    return `CDP ${e}`;
}
function HT(e) {
    switch(e){
        case "cursor-light":
            return "sidebar";
        case "cursor-dark":
            return "sidebar";
        case "cursor-light-high-contrast":
        case "cursor-dark-high-contrast":
            return;
        default:
            return e;
    }
}
function qT(e) {
    switch(e){
        case "cursor-light":
            return "#00FFFFFF";
        case "cursor-dark":
            return "#40000000";
        case "cursor-light-high-contrast":
            return "#01FFFFFF";
        case "cursor-dark-high-contrast":
            return "#01000000";
        default:
            return e;
    }
}
function b6(e, t) {
    return t !== void 0 ? `${e} \xB7 ${h5e(t)}` : P6;
}
function y5e(e, t) {
    if (Xs) return !1;
    const n = fc(e, t), r = e.getValue("window");
    return r?.menuStyle === "native" ? !(!q && !n) : r?.menuStyle === "custom" ? !1 : n;
}
function w5e(e, t) {
    return Xs ? !1 : q ? !0 : y5e(e, t);
}
function E5e(e) {
    const t = e.getValue("window.menuBarVisibility");
    return t === "default" || t === "compact" && w5e(e) || q && zb ? "classic" : t;
}
function I6(e, t) {
    const n = e.getValue("window");
    return YT(n, t);
}
function b5e(e) {
    if (Xs || q || rC(e) === "native") return "native";
    const n = e.getValue("window")?.controlsStyle;
    return n === "custom" || n === "hidden" ? n : "native";
}
function A6(e, t) {
    if (Xs || fc(e) || Fe && t?.isGlassWindow === !0) return !1;
    if (!q) {
        const n = b5e(e);
        if (n === "custom" || n === "hidden") return !1;
    }
    return !0;
}
function M6(e, t) {
    const n = e.getValue("window");
    return !n || typeof n.nativeFullScreen != "boolean" || YT(n, t) ? !0 : n.nativeFullScreen !== !1;
}
function I5e(e, t) {
    const { glass: n, classic: r, ...s } = e;
    return {
        ...s,
        _: [],
        glass: t,
        classic: !t
    };
}
async function BQe(e, t, n) {
    let r = n && n.get("storage.serviceMachineId", -1) || null;
    if (r) return r;
    try {
        const i = (await t.readFile(e.serviceMachineIdResource)).value.toString();
        r = p0(i) ? i : null;
    } catch  {
        r = null;
    }
    if (!r) {
        r = vt();
        try {
            await t.writeFile(e.serviceMachineIdResource, ae.fromString(r));
        } catch  {}
    }
    return n?.store("storage.serviceMachineId", r, -1, 1), r;
}
async function VQe(e, t, n, r, s, i) {
    const a = {
        "X-Market-Client-Id": `VSCode ${wfe(e)}`,
        "User-Agent": `VSCode ${wfe(e)} (Code)`
    };
    if (she(e, t) && EO(n) === 3) {
        const o = await BQe(t, r, s);
        a["X-Market-User-Id"] = o, a["VSCode-SessionId"] = i.machineId || o;
    }
    return a;
}
function wfe(e) {
    return e.vscodeVersion;
}
var m2, p2, df, bfe;
export { A6, BQe, E5e, HT, I5e, I6, M6, VQe, b5e, b6, bfe, df, h5e, m2, p0, p2, qT, r4, w5e, wfe, y5e };
var __wakaru_Rfe_initialized = false;
export function Rfe() {
if (__wakaru_Rfe_initialized) return;
__wakaru_Rfe_initialized = true;
"use strict";
h(), le(), it(), Mt(), Ka(), Ve(), se(), j(), $e(), sa(), Yo(), oe(), yfe(), ye(), Ne(), Hp(), at(), Ad(), tO(), Ta(), Ye(), sh(), $Qe(), Wt(), ne(), Vt(), te(), Ro(), fi(), Tt(), Hg(), fs(), br(), or(), ts(), gc(), Rc(), Di(), hp(), bn(), Pc(), pt(), m2 = class SLe extends J {
    constructor(t, n, r, s){
        super(), this.configurationService = t, this.stateService = n, this.environmentMainService = r, this.logService = s, this._onDidClose = this._register(new N), this.onDidClose = this._onDidClose.event, this._onDidMaximize = this._register(new N), this.onDidMaximize = this._onDidMaximize.event, this._onDidUnmaximize = this._register(new N), this.onDidUnmaximize = this._onDidUnmaximize.event, this._onDidTriggerSystemContextMenu = this._register(new N), this.onDidTriggerSystemContextMenu = this._onDidTriggerSystemContextMenu.event, this._onDidEnterFullScreen = this._register(new N), this.onDidEnterFullScreen = this._onDidEnterFullScreen.event, this._onDidLeaveFullScreen = this._register(new N), this.onDidLeaveFullScreen = this._onDidLeaveFullScreen.event, this._lastFocusTime = Date.now(), this._win = null, this._webContents = void 0, this.transientIsNativeFullScreen = void 0, this.joinNativeFullScreenTransition = void 0;
    }
    get lastFocusTime() {
        return this._lastFocusTime;
    }
    get win() {
        return this._win;
    }
    get webContents() {
        return this._webContents;
    }
    setWin(t, n) {
        this._win = t, this._register(O.fromNodeEventEmitter(t, "maximize")(()=>this._onDidMaximize.fire())), this._register(O.fromNodeEventEmitter(t, "unmaximize")(()=>this._onDidUnmaximize.fire())), this._register(O.fromNodeEventEmitter(t, "closed")(()=>{
            this._onDidClose.fire(), this.dispose();
        })), this._register(O.fromNodeEventEmitter(t, "focus")(()=>{
            this._lastFocusTime = Date.now();
        })), this._register(O.fromNodeEventEmitter(this._win, "enter-full-screen")(()=>this._onDidEnterFullScreen.fire())), this._register(O.fromNodeEventEmitter(this._win, "leave-full-screen")(()=>this._onDidLeaveFullScreen.fire()));
        const r = !fc(this.configurationService, n?.titleBarStyle === "hidden" ? "custom" : void 0), s = n?.titleBarOverlay !== void 0 && n.titleBarOverlay !== !1;
        if (q && r && t.setSheetOffset(r4(Efe()) ? 32 : 28), r && s) {
            const i = this.stateService.getItem(SLe.windowControlHeightStateStorageKey);
            i ? this.updateWindowControls({
                height: i
            }) : this.updateWindowControls({
                height: N6
            });
        }
        (ee || Fe) && r && this._register(O.fromNodeEventEmitter(t, "system-context-menu", (i, a)=>({
                event: i,
                point: a
            }))((i)=>{
            const [a, o] = t.getPosition(), l = rs.screen.screenToDipPoint(i.point), d = Math.floor(l.x) - a, u = Math.floor(l.y) - o;
            d > 35 && (i.event.preventDefault(), this._onDidTriggerSystemContextMenu.fire({
                x: d,
                y: u
            }));
        })), this.environmentMainService.args["open-devtools"] === !0 && t.webContents.openDevTools(), q && (this._register(this.onDidEnterFullScreen(()=>{
            this.joinNativeFullScreenTransition?.complete(!0);
        })), this._register(this.onDidLeaveFullScreen(()=>{
            this.joinNativeFullScreenTransition?.complete(!0);
        })));
    }
    applyState(t, n, r = rs.screen.getAllDisplays().length > 0) {
        const s = this.environmentMainService.args["enable-smoke-test-driver"], i = I6(this.configurationService, n);
        if ((q || ee) && r && (!i || so().length === 1) && [
            t.width,
            t.height,
            t.x,
            t.y
        ].every((a)=>typeof a == "number") && this._win?.setBounds({
            width: t.width,
            height: t.height,
            x: t.x,
            y: t.y
        }), (t.mode === 0 || t.mode === 3) && !n.hideBecauseShadowWindow && !n.isGlassWindow) {
            if (Fe && t.mode === 0) {
                const o = (this._win ? rs.screen.getDisplayMatching(this._win.getBounds()) : rs.screen.getPrimaryDisplay()).workArea;
                o.width > 0 && o.height > 0 && this._win?.setBounds({
                    x: o.x,
                    y: o.y,
                    width: o.width,
                    height: o.height
                });
            }
            this._win?.maximize(), t.mode === 3 && this.setFullScreen(!0, !0), s ? this.environmentMainService.args.headless || this._win?.showInactive() : this._win?.show();
        } else s && !n.hideBecauseShadowWindow && (this.environmentMainService.args.headless || this._win?.showInactive());
    }
    setRepresentedFilename(t) {
        q ? this.win?.setRepresentedFilename(t) : this.representedFilename = t;
    }
    getRepresentedFilename() {
        return q ? this.win?.getRepresentedFilename() : this.representedFilename;
    }
    setDocumentEdited(t) {
        q && this.win?.setDocumentEdited(t), this.documentEdited = t;
    }
    isDocumentEdited() {
        return q ? !!this.win?.isDocumentEdited() : !!this.documentEdited;
    }
    focus(t) {
        q && t?.force && rs.app.focus({
            steal: !0
        });
        const n = this.win;
        n && (n.isMinimized() && n.restore(), n.isVisible() || n.show(), n.focus());
    }
    updateWindowControls(t) {
        const n = this.win;
        if (n) {
            if (t.height && this.stateService.setItem(df.windowControlHeightStateStorageKey, t.height), !q && A6(this.configurationService, {
                isGlassWindow: this.isGlassWindow()
            })) n.setTitleBarOverlay({
                color: t.backgroundColor?.trim() === "" ? void 0 : t.backgroundColor,
                symbolColor: t.foregroundColor?.trim() === "" ? void 0 : t.foregroundColor,
                height: t.height ? t.height - 1 : void 0
            });
            else if (q) {
                if (t.hideTrafficLights === !0) n.setWindowButtonPosition({
                    x: -100,
                    y: 7
                });
                else if (t.height !== void 0) {
                    const r = r4(Efe()) ? 14 : 16, s = Math.floor((t.height - r) / 2);
                    s ? n.setWindowButtonPosition({
                        x: s + 1,
                        y: s
                    }) : n.setWindowButtonPosition(null);
                }
            }
        }
    }
    toggleFullScreen() {
        this.setFullScreen(!this.isFullScreen, !1);
    }
    setFullScreen(t, n) {
        M6(this.configurationService, {
            isGlassWindow: this.isGlassWindow()
        }) ? this.setNativeFullScreen(t, n) : this.setSimpleFullScreen(t);
    }
    isGlassWindow() {
        return !1;
    }
    get isFullScreen() {
        if (q && typeof this.transientIsNativeFullScreen == "boolean") return this.transientIsNativeFullScreen;
        const t = this.win, n = t?.isFullScreen(), r = t?.isSimpleFullScreen();
        return !!(n || r);
    }
    setNativeFullScreen(t, n) {
        const r = this.win;
        r?.isSimpleFullScreen() && r?.setSimpleFullScreen(!1), this.doSetNativeFullScreen(t, n);
    }
    doSetNativeFullScreen(t, n) {
        if (q) {
            this.transientIsNativeFullScreen = t;
            const s = this.joinNativeFullScreenTransition = new wr;
            (async ()=>{
                const i = await Promise.race([
                    s.p,
                    En(1e4).then(()=>!1)
                ]);
                this.joinNativeFullScreenTransition === s && (this.transientIsNativeFullScreen = void 0, this.joinNativeFullScreenTransition = void 0, !i && t && n && this.win && !this.win.isFullScreen() && (this.logService.warn("window: native macOS fullscreen transition did not happen within 10s from restoring"), this._onDidLeaveFullScreen.fire()));
            })();
        }
        this.win?.setFullScreen(t);
    }
    setSimpleFullScreen(t) {
        const n = this.win;
        n?.isFullScreen() && this.doSetNativeFullScreen(!1, !1), n?.setSimpleFullScreen(t), n?.webContents.focus();
    }
    dispose() {
        super.dispose(), this._win = null;
    }
}, m2.windowControlHeightStateStorageKey = "windowControlHeight", p2 = m2, df = class extends p2 {
    constructor(e, t, n, r, s, i, a, o, l, d, u, m, f, v, T, S, k, y, b, I, G, U, X){
        super(d, I, r, t), this.loggerMainService = n, this.policyService = s, this.userDataProfilesService = i, this.fileService = a, this.applicationStorageMainService = o, this.storageMainService = l, this.themeMainService = u, this.workspacesManagementMainService = m, this.backupMainService = f, this.telemetryService = v, this.dialogMainService = T, this.lifecycleMainService = S, this.productService = k, this.windowsMainService = b, this.cssDevelopmentService = U, this.devBundleStampProvider = X, this._onWillLoad = this._register(new N), this.onWillLoad = this._onWillLoad.event, this._onDidSignalReady = this._register(new N), this.onDidSignalReady = this._onDidSignalReady.event, this._onDidDestroy = this._register(new N), this.onDidDestroy = this._onDidDestroy.event, this._win = null, this.isBrowserViewVisible = !1, this.lastShownAtUnixMs = void 0, this._allowsBackgroundThrottlingControl = !1, this.whenReadyCallbacks = [], this.touchBarGroups = [], this.currentHttpProxy = void 0, this.currentNoProxy = void 0, this.customZoomLevel = void 0, this.wasLoaded = !1, this.readyState = 0, this.parentWindowDisposableStore = new ve;
        {
            this.configObjectUrl = this._register(y.createIPCObjectUrl());
            const [H, ue] = this.restoreWindowState(e.state);
            this.windowState = H, this.logService.trace("window#ctor: using window state", H);
            const Ee = e.shadowWindowForWorkspaceId !== void 0 && e.shadowWindowForWorkspaceId.length > 0, me = Ee;
            this._allowsBackgroundThrottlingControl = e.windowInWindow === void 0 && !Ee;
            const Nt = G.invokeFunction(XT, this.windowState, {
                hideBecauseShadowWindow: me,
                isGlassWindow: e.isGlassWindow
            }, {
                preload: Jt.asFileUri("vs/base/parts/sandbox/electron-sandbox/preload.js").fsPath,
                additionalArguments: [
                    `--vscode-window-config=${this.configObjectUrl.resource.toString()}`
                ],
                v8CacheOptions: this.environmentMainService.useCodeCache || e.isGlassWindow ? "bypassHeatCheck" : "none"
            });
            if (At("code/willCreateCodeBrowserWindow"), e.windowInWindow === void 0) this._win = new rs.BrowserWindow(Nt), this._id = this._win.id, this.setWin(this._win, Nt);
            else {
                this.browserView = new rs.WebContentsView(Nt), this.browserView.setBackgroundColor("#00000000");
                const Le = 65534;
                let re = 1e3 + Math.round(Math.random() * (Le - 1e3));
                for(; this.windowsMainService.getWindowById(re);)re = 1e3 + Math.round(Math.random() * (Le - 1e3));
                this._id = re;
            }
            At("code/didCreateCodeBrowserWindow"), this.applyState(this.windowState, {
                hideBecauseShadowWindow: me,
                isGlassWindow: e.isGlassWindow
            }, ue), this._lastFocusTime = Date.now();
        }
        let W = parseInt(this.environmentMainService.args["unresponsive-sample-interval"] || "1000"), K = parseInt(this.environmentMainService.args["unresponsive-sample-period"] || "15000");
        (W <= 0 || K <= 0 || W > K) && (this.logService.warn(`Invalid unresponsive sample interval (${W}ms) or period (${K}ms), using defaults.`), W = 1e3, K = 15e3), this.jsCallStackMap = new Map, this.jsCallStackEffectiveSampleCount = Math.round(K / W), this.jsCallStackCollector = this._register(new iT(W)), this.jsCallStackCollectorStopScheduler = this._register(new xr(()=>{
            this.stopCollectingJScallStacks();
        }, K)), this.onConfigurationUpdated(), this.createTouchBar(), this.registerListeners();
    }
    get id() {
        return this._id;
    }
    get webContents() {
        return this._win?.webContents ?? this.browserView?.webContents;
    }
    get backupPath() {
        return this._config?.backupPath;
    }
    get openedWorkspace() {
        return this._config?.workspace;
    }
    get profile() {
        if (!this.config) return;
        const e = this.userDataProfilesService.profiles.find((t)=>t.id === this.config?.profiles.profile.id);
        return this.isExtensionDevelopmentHost && e ? e : this.userDataProfilesService.getProfileForWorkspace(this.config.workspace ?? ZT(this.backupPath, this.isExtensionDevelopmentHost)) ?? this.userDataProfilesService.defaultProfile;
    }
    get remoteAuthority() {
        return this._config?.remoteAuthority;
    }
    isGlassWindow() {
        return this._config?.glass === !0;
    }
    get config() {
        return this._config;
    }
    get isExtensionDevelopmentHost() {
        return !!this._config?.extensionDevelopmentPath;
    }
    get isExtensionTestHost() {
        return !!this._config?.extensionTestsPath;
    }
    get allowsBackgroundThrottlingControl() {
        return this._allowsBackgroundThrottlingControl;
    }
    get isExtensionDevelopmentTestFromCli() {
        return this.isExtensionDevelopmentHost && this.isExtensionTestHost && !this._config?.debugId;
    }
    setReady() {
        if (this.logService.trace(`window#load: window reported ready (id: ${this._id})`), this._win && this.themeMainService.isWindowGlassMode(this._win)) {
            const e = this.themeMainService.getGlassThemeForVibrancy({
                isGlass: !0
            });
            if (q) {
                const t = HT(e);
                t !== void 0 && (this._win.setVibrancy(t), this._win.setBackgroundColor(qT(e)));
            } else ee && (up(e) === "mica" ? (this._win.setBackgroundMaterial("mica"), this._win.setBackgroundColor(mp(e))) : (this._win.setBackgroundMaterial("none"), this._win.setBackgroundColor(this.themeMainService.getBackgroundColor({
                isGlass: !0
            }))));
        }
        for(this.readyState = 2; this.whenReadyCallbacks.length;)this.whenReadyCallbacks.pop()(this);
        this._onDidSignalReady.fire();
    }
    attachToParent(e) {
        if (this.browserView && e && e.win) {
            this.parentWindowId !== void 0 && this.parentWindowDisposableStore.clear(), this.parentWindowId = e.id;
            const t = e.win.getBounds();
            this.browserView.setBounds({
                x: 0,
                y: 0,
                width: t.width,
                height: t.height
            }), this.parentWindowDisposableStore.add({
                dispose: ()=>{
                    this.browserView && e && e.win && (e.win.contentView.removeChildView(this.browserView), this.isBrowserViewVisible = !1);
                }
            }), this.parentWindowDisposableStore.add(O.fromNodeEventEmitter(e.win, "closed")(()=>{
                this.close();
            })), this.parentWindowDisposableStore.add(O.fromNodeEventEmitter(e.win, "resize")(()=>{
                if (!this.browserView || !e.win || this.windowInWindowExplicitBounds !== void 0) return;
                const n = e.win.getBounds();
                this.browserView.setBounds({
                    x: 0,
                    y: 0,
                    width: n.width,
                    height: n.height
                });
            })), this.parentWindowDisposableStore.add(O.fromNodeEventEmitter(e.win, "focus")(()=>{
                if (!(!this.browserView || !e.win) && this.isBrowserViewVisible) {
                    if (e.win.webContents.isFocused()) return;
                    this.browserView.webContents.focus();
                }
            }));
        }
    }
    ready() {
        return new Promise((e)=>{
            if (this.isReady) return e(this);
            this.whenReadyCallbacks.push(e);
        });
    }
    get isReady() {
        return this.readyState === 2;
    }
    get whenClosedOrLoaded() {
        return new Promise((e)=>{
            function t() {
                n.dispose(), r.dispose(), e();
            }
            const n = this.onDidClose(()=>t()), r = this.onWillLoad(()=>t());
        });
    }
    registerListeners() {
        let e = this._win && this._register(O.fromNodeEventEmitter(this._win, "unresponsive")(()=>this.onWindowError(1)));
        e = this._win && this._register(O.fromNodeEventEmitter(this._win, "responsive")(()=>this.onWindowError(4))), e = this._win?.webContents && this._register(O.fromNodeEventEmitter(this._win.webContents, "render-process-gone", (n, r)=>r)((n)=>this.onWindowError(2, {
                ...n
            }))), e = this._win?.webContents && this._register(O.fromNodeEventEmitter(this._win.webContents, "did-fail-load", (n, r, s)=>({
                exitCode: r,
                reason: s
            }))(({ exitCode: n, reason: r })=>this.onWindowError(3, {
                reason: r,
                exitCode: n
            }))), e = this.webContents && this._register(O.fromNodeEventEmitter(this.webContents, "will-prevent-unload")((n)=>n.preventDefault())), e = this.webContents && this._register(O.fromNodeEventEmitter(this.webContents, "did-finish-load")(()=>{
            this.pendingLoadConfig && (this._config = this.pendingLoadConfig, this.pendingLoadConfig = void 0);
        })), this._register(this.onDidMaximize(()=>{
            this._config && (this._config.maximized = !0);
        })), this._register(this.onDidUnmaximize(()=>{
            this._config && (this._config.maximized = !1);
        })), this._register(this.onDidEnterFullScreen(()=>{
            this.sendWhenReady("vscode:enterFullScreen", Ie.None);
        })), this._register(this.onDidLeaveFullScreen(()=>{
            this.sendWhenReady("vscode:leaveFullScreen", Ie.None);
        })), this._register(this.configurationService.onDidChangeConfiguration((n)=>this.onConfigurationUpdated(n))), this._register(this.workspacesManagementMainService.onDidDeleteUntitledWorkspace((n)=>this.onDidDeleteUntitledWorkspace(n)));
        const t = [
            "https://marketplace.visualstudio.com/*",
            "https://*.vsassets.io/*",
            "http://*.cursor.localhost:8001/*",
            "https://staging-marketplace.cursor.sh/*",
            "https://marketplace.cursor.sh/*",
            "https://marketplace.cursorapi.com/*"
        ];
        this.webContents?.session.webRequest.onBeforeSendHeaders({
            urls: t
        }, async (n, r)=>{
            const s = await this.getMarketplaceHeaders();
            r({
                cancel: !1,
                requestHeaders: Object.assign(n.requestHeaders, s)
            });
        });
    }
    getMarketplaceHeaders() {
        return this.marketplaceHeadersPromise || (this.marketplaceHeadersPromise = VQe(this.productService, this.environmentMainService, this.configurationService, this.fileService, this.applicationStorageMainService, this.telemetryService)), this.marketplaceHeadersPromise;
    }
    async onWindowError(e, t) {
        switch(e){
            case 2:
                this.logService.error(`CodeWindow: renderer process gone (reason: ${t?.reason || "<unknown>"}, code: ${t?.exitCode || "<unknown>"})`);
                break;
            case 1:
                this.logService.error("CodeWindow: detected unresponsive");
                break;
            case 4:
                this.logService.error("CodeWindow: recovered from unresponsive");
                break;
            case 3:
                this.logService.error(`CodeWindow: failed to load (reason: ${t?.reason || "<unknown>"}, code: ${t?.exitCode || "<unknown>"})`);
                break;
        }
        switch(e){
            case 1:
            case 2:
                if (this.isExtensionDevelopmentTestFromCli) {
                    this.lifecycleMainService.kill(1);
                    return;
                }
                if (this.environmentMainService.args["enable-smoke-test-driver"]) {
                    await this.destroyWindow(!1, !1), this.lifecycleMainService.quit();
                    return;
                }
                if (e === 1) {
                    if (this.isExtensionDevelopmentHost || this.isExtensionTestHost || this._win && this._win.webContents && this._win.webContents.isDevToolsOpened()) return;
                    this.jsCallStackCollector.trigger(()=>this.startCollectingJScallStacks()), this.jsCallStackCollectorStopScheduler.schedule();
                    const { response: n, checkboxChecked: r } = await this.dialogMainService.showMessageBox({
                        type: "warning",
                        buttons: [
                            E(2666, null),
                            E(2667, null),
                            E(2668, null)
                        ],
                        message: E(2669, null),
                        detail: E(2670, null),
                        checkboxLabel: this._config?.workspace ? E(2671, null) : void 0
                    }, this._win ?? void 0);
                    if (n !== 2) {
                        const s = n === 0;
                        this.stopCollectingJScallStacks(), await this.destroyWindow(s, r);
                    }
                } else if (e === 2) {
                    let n;
                    t ? n = E(2673, null, t.reason, t.exitCode ?? "<unknown>") : n = E(2672, null);
                    const { response: r, checkboxChecked: s } = await this.dialogMainService.showMessageBox({
                        type: "warning",
                        buttons: [
                            this._config?.workspace ? E(2674, null) : E(2675, null),
                            E(2676, null)
                        ],
                        message: n,
                        detail: this._config?.workspace ? E(2677, null) : E(2678, null),
                        checkboxLabel: this._config?.workspace ? E(2679, null) : void 0
                    }, this._win ?? void 0), i = r === 0;
                    await this.destroyWindow(i, s);
                }
                break;
            case 4:
                this.stopCollectingJScallStacks();
                break;
        }
    }
    async destroyWindow(e, t) {
        const n = this._config?.workspace;
        if (t && n) try {
            const r = this.storageMainService.workspaceStorage(n);
            await r.init(), r.delete("memento/workbench.parts.editor"), await r.close();
        } catch (r) {
            this.logService.error(r);
        }
        this._onDidDestroy.fire();
        try {
            if (e && this._config) {
                let r, s;
                Zr(n) ? r = {
                    folderUri: n.uri
                } : rr(n) ? r = {
                    workspaceUri: n.configPath
                } : s = !0, (await this.windowsMainService.open({
                    context: 5,
                    userEnv: this._config.userEnv,
                    cli: I5e(this.environmentMainService.args, this._config.glass === !0),
                    urisToOpen: r ? [
                        r
                    ] : void 0,
                    forceEmpty: s,
                    forceNewWindow: !0,
                    remoteAuthority: this.remoteAuthority
                })).at(0)?.focus();
            }
        } finally{
            this._win?.destroy();
        }
    }
    onDidDeleteUntitledWorkspace(e) {
        this._config?.workspace?.id === e.id && (this._config.workspace = void 0);
    }
    onConfigurationUpdated(e) {
        if (!e || e.affectsConfiguration("window.menuBarVisibility")) {
            const t = this.getMenuBarVisibility();
            t !== this.currentMenuBarVisibility && (this.currentMenuBarVisibility = t, this.setMenuBarVisibility(t));
        }
        if (!e || e.affectsConfiguration("http.proxy") || e.affectsConfiguration("http.noProxy")) {
            let n = (this.configurationService.inspect("http.proxy").userLocalValue || "").trim() || (process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY || "").trim() || void 0;
            if (n?.indexOf("@") !== -1) {
                const s = x.parse(n), i = s.authority.indexOf("@");
                i !== -1 && (n = s.with({
                    authority: s.authority.substring(i + 1)
                }).toString());
            }
            n?.endsWith("/") && (n = n.substr(0, n.length - 1));
            const r = TG(this.configurationService.getValue("http.noProxy")).map((s)=>s.trim()).join(",") || (process.env.no_proxy || process.env.NO_PROXY || "").trim() || void 0;
            if ((n || "").indexOf("@") === -1 && (n !== this.currentHttpProxy || r !== this.currentNoProxy)) {
                this.currentHttpProxy = n, this.currentNoProxy = r;
                const s = n || "", i = r ? `${r},<local>` : "<local>";
                this.logService.trace(`Setting proxy to '${s}', bypassing '${i}'`), this.webContents?.session.setProxy({
                    proxyRules: s,
                    proxyBypassRules: i,
                    pacScript: ""
                }), rs.app.setProxy({
                    proxyRules: s,
                    proxyBypassRules: i,
                    pacScript: ""
                });
            }
        }
    }
    addTabbedWindow(e) {
        q && e.win && this._win?.addTabbedWindow(e.win);
    }
    load(e, t = Object.create(null)) {
        if (this.logService.trace(`window#load: attempt to load window (id: ${this._id})`), this.isDocumentEdited() && (!t.isReload || !this.backupMainService.isHotExitEnabled()) && this.setDocumentEdited(!1), !t.isReload) {
            this.getRepresentedFilename() && this.setRepresentedFilename("");
            const r = e.glass === !0 ? b6(this.productService.nameShort, e.cdpPort) : this.productService.nameLong;
            this._win?.setTitle(r);
        }
        if (this.updateConfiguration(e, t), this._win) {
            const r = e.glass === !0, s = this.themeMainService.isWindowGlassMode(this._win);
            if (r) {
                const i = this.themeMainService.getBackgroundColor({
                    isGlass: !0
                });
                this._win.setHasShadow(!0), s || this.themeMainService.setWindowGlassMode(this._win, !0);
                const a = this.themeMainService.getGlassThemeForVibrancy({
                    isGlass: !0
                });
                if (q) {
                    const o = HT(a);
                    o !== void 0 ? (this._win.setBackgroundColor(qT(a)), this._win.setVibrancy(o)) : (this._win.setVibrancy(null), this._win.setBackgroundColor(i));
                } else ee ? (this._win.setVibrancy(null), up(a) === "mica" ? (this._win.setBackgroundMaterial("mica"), this._win.setBackgroundColor(mp(a))) : (this._win.setBackgroundMaterial("none"), this._win.setBackgroundColor(i))) : (this._win.setVibrancy(null), this._win.setBackgroundColor(i));
            } else if (s) {
                const i = this.themeMainService.getBackgroundColor({
                    isGlass: !1
                });
                this.themeMainService.setWindowGlassMode(this._win, !1), this._win.setVibrancy(null), ee && this._win.setBackgroundMaterial("none"), this._win.setBackgroundColor(i);
            }
        }
        e.glass === !0 && this._win && (this.readyState === 0 || !this._win.isVisible()) && !e.shadowWindowForWorkspaceId && e.windowInWindow === void 0 && this._win.show(), this.readyState === 0 ? this._config = e : this.pendingLoadConfig = e, this.readyState = 1, this.webContents?.loadURL(Jt.asBrowserUri(`vs/code/electron-sandbox/workbench/workbench${this.environmentMainService.isBuilt ? "" : "-dev"}.html`).toString(!0));
        const n = this.wasLoaded;
        this.wasLoaded = !0, !this.environmentMainService.isBuilt && !this.environmentMainService.extensionTestsLocationURI && !this.environmentMainService.args["enable-smoke-test-driver"] && this._register(new xr(()=>{
            this._win && !this._win.isVisible() && !this._win.isMinimized() && !e.shadowWindowForWorkspaceId && e.windowInWindow === void 0 && (this._win.show(), this.focus({
                force: !0
            }), this.webContents?.openDevTools());
        }, 1e4)).schedule(), this._onWillLoad.fire({
            workspace: e.workspace,
            reason: t.isReload ? 3 : n ? 2 : 1
        });
    }
    updateConfiguration(e, t) {
        const n = (this._config ?? this.pendingLoadConfig)?.userEnv;
        if (n) {
            const r = xc(n) && !xc(e.userEnv), s = this.isExtensionDevelopmentHost;
            (r || s) && (e.userEnv = {
                ...n,
                ...e.userEnv
            });
        }
        process.env.CHROME_CRASHPAD_PIPE_NAME && Object.assign(e.userEnv, {
            CHROME_CRASHPAD_PIPE_NAME: process.env.CHROME_CRASHPAD_PIPE_NAME
        }), t.disableExtensions !== void 0 && (e["disable-extensions"] = t.disableExtensions);
        try {
            this._win && (e.handle = ae.wrap(this._win.getNativeWindowHandle()));
        } catch (r) {
            this.logService.error(`Error getting native window handle: ${r}`);
        }
        e.fullscreen = this.isFullScreen, e.maximized = this._win?.isMaximized() ?? !1, e.partsSplash = e.glass === !0 ? void 0 : this.themeMainService.getWindowSplash(e.workspace), e.glassSplash = e.glass === !0 ? this.themeMainService.getGlassSplashOrDefault() : void 0, e.zoomLevel = this.getZoomLevel(), e.isCustomZoomLevel = typeof this.customZoomLevel == "number", e.isCustomZoomLevel && e.partsSplash && (e.partsSplash.zoomLevel = e.zoomLevel), At("code/willOpenNewWindow"), e.perfMarks = Nb(), this.configObjectUrl.update(e);
    }
    async reload(e) {
        const t = Object.assign({}, this._config);
        if (t.workspace = await this.validateWorkspaceBeforeReload(t), delete t.filesToOpenOrCreate, delete t.filesToDiff, delete t.filesToMerge, delete t.filesToWait, delete t.glassLaunchIntent, this.isExtensionDevelopmentHost && e && (t.verbose = e.verbose, t.debugId = e.debugId, t.extensionEnvironment = e.extensionEnvironment, t["inspect-extensions"] = e["inspect-extensions"], t["inspect-brk-extensions"] = e["inspect-brk-extensions"], t["extensions-dir"] = e["extensions-dir"]), t.accessibilitySupport = rs.app.isAccessibilitySupportEnabled(), t.isInitialStartup = !1, t.wasRestarted = !1, t.policiesData = this.policyService.serialize(), t.continueOn = this.environmentMainService.continueOn, t.profiles = {
            all: this.userDataProfilesService.profiles,
            profile: this.profile || this.userDataProfilesService.defaultProfile,
            home: this.userDataProfilesService.profilesHome
        }, t.logLevel = this.loggerMainService.getLogLevel(), t.loggers = this.loggerMainService.getGlobalLoggers(), this.cssDevelopmentService.isEnabled) {
            At("code/willReloadWindow"), t.willReloadWindowMs = Date.now();
            const n = ca.create(!1);
            t.cssModules = await this.cssDevelopmentService.getCssModules(), t.cssModulesComputeMs = Math.round(n.elapsed()), t.devBundleMtime = await this.devBundleStampProvider.readStamp(this.environmentMainService.appRoot);
        } else t.cssModules = void 0;
        t.hmr = e?.hmr, this.load(t, {
            isReload: !0,
            disableExtensions: e?.["disable-extensions"]
        });
    }
    async validateWorkspaceBeforeReload(e) {
        if (rr(e.workspace)) {
            const t = e.workspace.configPath;
            if (t.scheme === $.file && !await this.fileService.exists(t)) return;
        } else if (Zr(e.workspace)) {
            const t = e.workspace.uri;
            if (t.scheme === $.file && !await this.fileService.exists(t)) return;
        }
        return e.workspace;
    }
    serializeWindowState() {
        if (!this._win) return ro();
        if (this.isFullScreen) {
            let n;
            try {
                n = rs.screen.getDisplayMatching(this.getBounds());
            } catch  {}
            const r = ro();
            return {
                mode: 3,
                display: n ? n.id : void 0,
                width: this.windowState.width || r.width,
                height: this.windowState.height || r.height,
                x: this.windowState.x || 0,
                y: this.windowState.y || 0,
                zoomLevel: this.customZoomLevel,
                glassMode: this._config?.glass === !0 ? !0 : void 0
            };
        }
        const e = Object.create(null);
        let t;
        if (!q && this._win.isMaximized() ? t = 0 : t = 1, t === 0 ? e.mode = 0 : e.mode = 1, t === 1 || t === 0) {
            let n;
            t === 1 ? n = this.getBounds() : n = this._win.getNormalBounds(), e.x = n.x, e.y = n.y, e.width = n.width, e.height = n.height;
        }
        return e.zoomLevel = this.customZoomLevel, this._config?.glass && (e.glassMode = !0), e;
    }
    restoreWindowState(e) {
        At("code/willRestoreCodeWindowState");
        let t = !1;
        if (e) {
            this.customZoomLevel = e.zoomLevel;
            try {
                const n = rs.screen.getAllDisplays();
                t = n.length > 1, e = QT.validateWindowState(this.logService, e, n);
            } catch (n) {
                this.logService.warn(`Unexpected error validating window state: ${n}
${n.stack}`);
            }
        }
        return At("code/didRestoreCodeWindowState"), [
            e || ro(),
            t
        ];
    }
    getBounds() {
        if (!this._win) return this.browserView?.getBounds() ?? {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        const [e, t] = this._win.getPosition(), [n, r] = this._win.getSize();
        return {
            x: e,
            y: t,
            width: n,
            height: r
        };
    }
    setFullScreen(e, t) {
        super.setFullScreen(e, t), this.sendWhenReady(e ? "vscode:enterFullScreen" : "vscode:leaveFullScreen", Ie.None), this.currentMenuBarVisibility && this.setMenuBarVisibility(this.currentMenuBarVisibility, !1);
    }
    getMenuBarVisibility() {
        let e = E5e(this.configurationService);
        return [
            "visible",
            "toggle",
            "hidden"
        ].indexOf(e) < 0 && (e = "classic"), e;
    }
    setMenuBarVisibility(e, t = !0) {
        q || (e === "toggle" && t && this.send("vscode:showInfoMessage", E(2680, null)), e === "hidden" ? setTimeout(()=>{
            this.doSetMenuBarVisibility(e);
        }) : this.doSetMenuBarVisibility(e));
    }
    doSetMenuBarVisibility(e) {
        const t = this.isFullScreen;
        if (this._win) switch(e){
            case "classic":
                this._win.setMenuBarVisibility(!t), this._win.autoHideMenuBar = t;
                break;
            case "visible":
                this._win.setMenuBarVisibility(!0), this._win.autoHideMenuBar = !1;
                break;
            case "toggle":
                this._win.setMenuBarVisibility(!1), this._win.autoHideMenuBar = !0;
                break;
            case "hidden":
                this._win.setMenuBarVisibility(!1), this._win.autoHideMenuBar = !1;
                break;
        }
    }
    notifyZoomLevel(e) {
        this.customZoomLevel = e;
    }
    getZoomLevel() {
        return typeof this.customZoomLevel == "number" ? this.customZoomLevel : this.configurationService.getValue("window")?.zoomLevel;
    }
    close() {
        if (this._win) this._win.close();
        else if (this.browserView) {
            try {
                this.browserView.webContents.close({
                    waitForBeforeUnload: !1
                });
            } catch (e) {
                this.logService.warn(`Error closing browser view: ${bt(e)}`);
            }
            this._onDidClose.fire(), this.dispose();
        }
    }
    sendWhenReady(e, t, ...n) {
        this.isReady ? this.send(e, ...n) : this.ready().then(()=>{
            t.isCancellationRequested || this.send(e, ...n);
        });
    }
    send(e, ...t) {
        if (this.webContents) {
            if (this._win?.isDestroyed() || this.webContents.isDestroyed()) {
                this.logService.warn(`Sending IPC message to channel '${e}' for window that is destroyed`);
                return;
            }
            try {
                this.webContents.send(e, ...t);
            } catch (n) {
                this.logService.warn(`Error sending IPC message to channel '${e}' of window ${this._id}: ${bt(n)}`);
            }
        }
    }
    updateTouchBar(e) {
        q && this.touchBarGroups.forEach((t, n)=>{
            const r = e[n];
            t.segments = this.createTouchBarGroupSegments(r);
        });
    }
    createTouchBar() {
        if (q) {
            for(let e = 0; e < 10; e++){
                const t = this.createTouchBarGroup();
                this.touchBarGroups.push(t);
            }
            this._win && this._win.setTouchBar(new rs.TouchBar({
                items: this.touchBarGroups
            }));
        }
    }
    createTouchBarGroup(e = []) {
        const t = this.createTouchBarGroupSegments(e), n = new rs.TouchBar.TouchBarSegmentedControl({
            segments: t,
            mode: "buttons",
            segmentStyle: "automatic",
            change: (r)=>{
                this.sendWhenReady("vscode:runAction", Ie.None, {
                    id: n.segments[r].id,
                    from: "touchbar"
                });
            }
        });
        return n;
    }
    createTouchBarGroupSegments(e = []) {
        return e.map((n)=>{
            let r;
            n.icon && !lf.isThemeIcon(n.icon) && n.icon?.dark?.scheme === $.file && (r = rs.nativeImage.createFromPath(x.revive(n.icon.dark).fsPath), r.isEmpty() && (r = void 0));
            let s;
            return typeof n.title == "string" ? s = n.title : s = n.title.value, {
                id: n.id,
                label: r ? void 0 : s,
                icon: r
            };
        });
    }
    async startCollectingJScallStacks() {
        if (!this.jsCallStackCollector.isTriggered()) {
            const e = await this._win?.webContents.mainFrame.collectJavaScriptCallStack();
            if (e) {
                const t = this.jsCallStackMap.get(e) || 0;
                this.jsCallStackMap.set(e, t + 1);
            }
            this.jsCallStackCollector.trigger(()=>this.startCollectingJScallStacks());
        }
    }
    stopCollectingJScallStacks() {
        if (this.jsCallStackCollectorStopScheduler.cancel(), this.jsCallStackCollector.cancel(), this.jsCallStackMap.size) {
            let e = `CodeWindow unresponsive samples:
`, t = 0;
            const n = Array.from(this.jsCallStackMap.entries()).sort((r, s)=>s[1] - r[1]);
            for (const [r, s] of n){
                if (t += s, Math.round(s * 100 / this.jsCallStackEffectiveSampleCount) > 20) {
                    const i = new bfe(r, this.id, this.win?.webContents.getOSProcessId());
                    wm.onUnexpectedError(i);
                }
                e += `<${s}> ${r}
`;
            }
            e += `Total Samples: ${t}
`, e += "For full overview of the unresponsive period, capture cpu profile via https://aka.ms/vscode-tracing-cpu-profile", this.logService.error(e);
        }
        this.jsCallStackMap.clear();
    }
    matches(e) {
        return this.webContents?.id === e.id;
    }
    dispose() {
        if (super.dispose(), this.parentWindowDisposableStore.dispose(), this.browserView) {
            try {
                this.browserView.webContents.isDestroyed() || this.browserView.webContents.destroy();
            } catch (e) {
                this.logService.warn(`Error destroying browser view: ${bt(e)}`);
            }
            this.browserView = null;
        }
        this.loggerMainService.deregisterLoggers(this.id);
    }
}, df = B([
    w(1, Z),
    w(2, Aa),
    w(3, qe),
    w(4, bo),
    w(5, Wi),
    w(6, cn),
    w(7, Cn),
    w(8, Gs),
    w(9, ot),
    w(10, no),
    w(11, lo),
    w(12, Rd),
    w(13, Fi),
    w(14, ci),
    w(15, ht),
    w(16, et),
    w(17, Su),
    w(18, ct),
    w(19, fr),
    w(20, ni),
    w(21, Oc),
    w(22, Bw)
], df), bfe = class extends Error {
    constructor(e, t, n = 0){
        const r = Error.stackTraceLimit;
        Error.stackTraceLimit = 0, super(`UnresponsiveSampleError: from window with ID ${t} belonging to process with pid ${n}`), Error.stackTraceLimit = r, this.name = "UnresponsiveSampleError", this.stack = e;
    }
};

}
