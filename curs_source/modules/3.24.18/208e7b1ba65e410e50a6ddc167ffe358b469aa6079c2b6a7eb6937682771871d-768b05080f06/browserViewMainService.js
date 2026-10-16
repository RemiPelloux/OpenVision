import { Dc, Xp } from "./auxiliaryWindows.js";
import { Ofe } from "./browserSessionDataMainService.js";
import { iZe } from "./browserViewKeyboardShortcuts.js";
import { f2, xfe } from "./browserViewPartition.js";
import { Bfe, Gfe, Wfe, dZe, v2 } from "./browserViewUrlSchemes.js";
import { Ja, SF, yF } from "./constants.js";
import { Ta, ci } from "./dialogMainService.js";
import { N, O, se } from "./event.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { $, $e, Jt } from "./network.js";
import { Ce, _t } from "./path.js";
import { q } from "./platform.js";
import { Gs, or } from "./storageMainService.js";
import { gc, no, w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Vfe, uZe } from "./webviewNetworkTracker.js";
import { ct, pt } from "./windows.js";
import { app as $fe } from "electron";
import { webContents as S2 } from "electron";
import { session as gZe } from "electron";
import { dialog as hZe } from "electron";
import { shell as k2 } from "electron";
import { BrowserWindow as mZe } from "electron";
import { WebContentsView as pZe } from "electron";
function iF(e) {
    const t = e.split(".", 1)[0];
    if (t === "Input") return `CDP method '${e}' is not allowed. CDP Input.* methods are focus-sensitive in Electron webviews. Use dedicated browser tools for clicks, text input, key presses, scrolling, and drag-and-drop instead.`;
    if (SF.has(t) || yF.has(e)) return `CDP method '${e}' is not allowed`;
}
function Dfe(e, t = q) {
    const n = t ? !!e.meta : !!e.control, r = !!e.shift, s = !!e.alt, i = e.key.toLowerCase();
    let a;
    if (n && !r && !s) switch(i){
        case "r":
            a = "reload-page";
            break;
        case "l":
            a = "focus-url-bar";
            break;
        case "t":
            a = "new-browser-tab";
            break;
        case "i":
            a = "focus-composer";
            break;
        case "=":
        case "+":
            a = "zoom-in";
            break;
        case "-":
            a = "zoom-out";
            break;
        case "0":
            a = "zoom-reset";
            break;
        case "z":
            a = "undo";
            break;
        case "a":
            a = "select-all";
            break;
        case "[":
            a = "navigate-back";
            break;
        case "]":
            a = "navigate-forward";
            break;
        case "d":
            a = "toggle-bookmark";
            break;
    }
    else if (n && r && !s) switch(i){
        case "r":
            a = "reload-page";
            break;
        case "i":
            a = "open-devtools";
            break;
        case "z":
            a = "redo";
            break;
        case "a":
            a = "open-canvas-tab";
            break;
    }
    else if (s && !n && !r) switch(i){
        case "arrowleft":
            a = "navigate-back";
            break;
        case "arrowright":
            a = "navigate-forward";
            break;
    }
    else if (!n && !r && !s) switch(i){
        case "f5":
            a = "reload-page";
            break;
        case "f12":
            a = "open-devtools";
            break;
    }
    if (t && e.meta && e.alt && !r) switch(i){
        case "i":
        case "c":
        case "j":
            a = "open-devtools";
            break;
    }
    return a;
}
function Lfe(e) {
    const t = `${f2}${e}`;
    return Ofe(t) ? t : void 0;
}
function C1(e) {
    try {
        return new URL(e).protocol.replace(":", "").toLowerCase();
    } catch  {
        return;
    }
}
function aZe(e) {
    return Wfe.has(e.toLowerCase());
}
function oZe(e) {
    const t = e.toLowerCase();
    return t === $.http || t === $.https;
}
function cZe(e) {
    return Bfe.some((t)=>e === t || e.startsWith(t + "-") || e.startsWith(t + "."));
}
function lZe(e) {
    const t = e.toLowerCase();
    return v2.has(t) || cZe(t);
}
function _2(e, t = "browser-tab") {
    const n = C1(e);
    return n === void 0 || lZe(n) ? "drop" : (t === "external-open" ? oZe(n) : aZe(n)) ? "navigate" : "confirm-external";
}
function Ffe(e, t) {
    const n = _2(e);
    return n === "navigate" ? {
        action: "allow"
    } : n === "confirm-external" && t ? {
        action: "cancel-and-confirm-external"
    } : {
        action: "cancel"
    };
}
var y2, jfe, I1;
export { C1, Dfe, Ffe, I1, Lfe, _2, aZe, cZe, iF, jfe, lZe, oZe, y2 };
var __wakaru_Hfe_initialized = false;
export function Hfe() {
if (__wakaru_Hfe_initialized) return;
__wakaru_Hfe_initialized = true;
"use strict";
h(), se(), Ja(), j(), $e(), Ce(), ne(), te(), gc(), pt(), Xp(), or(), Ta(), iZe(), xfe(), dZe(), uZe(), y2 = Q("browserViewMainService"), jfe = class extends J {
    constructor(e, t, n, r){
        super(), this.consoleLogs = [], this.networkRequests = [], this.onDidStartLoading = this._register(new N), this.onDidStopLoading = this._register(new N), this.onDidFinishLoad = this._register(new N), this.onDidFailLoad = this._register(new N), this.onDidNavigate = this._register(new N), this.onDidNavigateInPage = this._register(new N), this.onWillNavigate = this._register(new N), this.onPageTitleUpdated = this._register(new N), this.onBrowserMessage = this._register(new N), this.onDidFocus = this._register(new N), this.onDidBlur = this._register(new N), this.onCertificateError = this._register(new N), this.browserView = e, this.viewId = t, this.partition = n, this.isVisible = !1, this.parentWindow = r, this.injectedColorSchemeCSSKey = void 0;
        const s = e.webContents.session;
        this._register({
            dispose: ()=>{
                e.webContents.removeAllListeners();
            }
        }), this._register({
            dispose: ()=>{
                try {
                    s.setPermissionRequestHandler(null);
                } catch  {}
                try {
                    s.setPermissionCheckHandler(null);
                } catch  {}
                try {
                    s.setCertificateVerifyProc(null);
                } catch  {}
            }
        }), this.setupKeyboardShortcuts();
    }
    setupKeyboardShortcuts() {
        this.inputEventHandler = (e, t)=>{
            if (t.type !== "keyDown") return;
            const n = Dfe(t);
            n && (e.preventDefault(), this.handleShortcut(n));
        }, this.browserView.webContents.on("before-input-event", this.inputEventHandler);
    }
    handleShortcut(e) {
        if (e === "focus-composer") try {
            this.parentWindow.webContents.focus();
        } catch (t) {
            console.error("[BrowserViewState] Failed to focus parent window:", t);
        }
        if (e === "select-all") {
            try {
                this.browserView.webContents.selectAll();
            } catch (t) {
                console.error("[BrowserViewState] Failed to select all:", t);
            }
            return;
        }
        this.onBrowserMessage.fire({
            channel: "keyboard-shortcut",
            args: [
                {
                    shortcut: e
                }
            ],
            viewId: this.viewId
        });
    }
    dispose() {
        if (this.inputEventHandler && (this.browserView.webContents.removeListener("before-input-event", this.inputEventHandler), this.inputEventHandler = void 0), this.parentWindow && !this.parentWindow.isDestroyed()) try {
            this.parentWindow.contentView.removeChildView(this.browserView);
        } catch  {}
        this.browserView.webContents.isDestroyed() || this.browserView.webContents.close(), super.dispose();
    }
}, I1 = class extends J {
    constructor(e, t, n, r, s, i){
        super(), this.logService = e, this.windowsMainService = t, this.auxiliaryWindowsMainService = n, this.themeMainService = r, this.storageMainService = s, this.dialogMainService = i, this.browserViews = new Map, this.viewToWindow = new Map, this.sessionAcceptedCertificates = new Set, this.pendingCertVerifications = new Map, this.sessionNetworkTrackers = new Map, this.webviewTracker = new Vfe, this.webviewDestroyListeners = new Set, this.webviewHardReloadShortcutListeners = new Set, this.webviewRedirectGuardListeners = new Set, this._onDidCreateBrowserView = this._register(new N), this.onDidCreateBrowserView = this._onDidCreateBrowserView.event, this._onConfirmExternalSchemeNavigation = this._register(new N), this.onInAppBrowserWebContentsCreated = (a, o)=>{
            this.isInAppBrowserWebContents(o) && this.attachWebviewRedirectGuard(o);
        }, this._register(this.themeMainService.onDidChangeColorScheme(()=>{
            for (const a of this.browserViews.values())for (const o of a.values())this.injectColorSchemePreferenceForState(o);
        })), this.setupWindowCloseCleanup(), this._register({
            dispose: ()=>{
                $fe.removeListener("web-contents-created", this.onInAppBrowserWebContentsCreated);
            }
        }), $fe.on("web-contents-created", this.onInAppBrowserWebContentsCreated);
    }
    isInAppBrowserWebContents(e) {
        const t = e.session.storagePath;
        return e.getType() === "webview" && t !== null && Lfe(_t(t)) !== void 0;
    }
    attachWebviewRedirectGuard(e) {
        const t = e.id;
        if (this.webviewRedirectGuardListeners.has(t)) return;
        this.webviewRedirectGuardListeners.add(t);
        const n = (s, i, a, o)=>{
            this.guardGuestNavigationBeforeCommit({
                event: s,
                url: i,
                isMainFrame: o,
                webContentsId: t,
                source: "will-redirect"
            });
        }, r = (s)=>{
            this.guardGuestNavigationBeforeCommit({
                event: s,
                url: s.url,
                isMainFrame: s.isMainFrame,
                webContentsId: t,
                source: "will-frame-navigate"
            });
        };
        e.on("will-redirect", n), e.on("will-frame-navigate", r), e.once("destroyed", ()=>{
            e.removeListener("will-redirect", n), e.removeListener("will-frame-navigate", r), this.webviewRedirectGuardListeners.delete(t);
        });
    }
    guardGuestNavigationBeforeCommit(e) {
        const { event: t, url: n, isMainFrame: r, webContentsId: s, source: i } = e, a = Ffe(n, r);
        if (a.action === "allow") return;
        if (t.preventDefault(), a.action !== "cancel-and-confirm-external") {
            this.logService.warn(`[BrowserViewMainService] Cancelled guest ${i} to denied or non-main-frame URL (webview ${s}):`, n);
            return;
        }
        const o = S2.fromId(s), l = o ? this.resolveGuestOwnerWindowId(o) : void 0;
        if (l === void 0) {
            this.logService.warn(`[BrowserViewMainService] Cancelled confirm-external guest ${i} with no owner window (webview ${s}):`, n);
            return;
        }
        this.logService.info(`[BrowserViewMainService] Emitting confirm-external for guest ${i} (webview ${s}, window ${l})`), this._onConfirmExternalSchemeNavigation.fire({
            windowId: l,
            webContentsId: s,
            url: n
        });
    }
    resolveGuestOwnerWindowId(e) {
        const t = e.hostWebContents ?? e, n = this.windowsMainService.getWindowByWebContents(t);
        if (n) return n.id;
        const r = this.auxiliaryWindowsMainService.getWindowByWebContents(t);
        return r ? r.id : mZe.fromWebContents(t)?.id;
    }
    cleanupPendingCertVerificationsForView(e) {
        for (const [t, n] of this.pendingCertVerifications.entries())n.viewId === e && (this.logService.info(`[BrowserViewMainService] Cleaning up pending cert verification ${t} for destroyed view ${e}`), n.callback(-2), this.pendingCertVerifications.delete(t));
    }
    setupSessionNetworkTracking(e, t, n, r) {
        let s = this.sessionNetworkTrackers.get(e);
        if (!s) {
            s = {
                requestMap: new Map,
                webContentsToViewId: new Map
            }, this.sessionNetworkTrackers.set(e, s);
            const i = r.browserView.webContents.session;
            i.webRequest.onBeforeRequest((a, o)=>{
                const l = this.sessionNetworkTrackers.get(e);
                l && l.requestMap.set(a.id, {
                    url: a.url,
                    method: a.method,
                    timestamp: Date.now(),
                    resourceType: a.resourceType
                }), o({});
            }), i.webRequest.onCompleted((a)=>{
                const o = this.sessionNetworkTrackers.get(e);
                if (!o) return;
                const l = o.requestMap.get(a.id);
                if (l) {
                    if (a.webContentsId !== void 0) {
                        const d = o.webContentsToViewId.get(a.webContentsId);
                        if (d) {
                            const u = this.getStateByViewId(d);
                            u && u.networkRequests.push({
                                ...l,
                                statusCode: a.statusCode
                            });
                        }
                    }
                    o.requestMap.delete(a.id);
                }
            }), i.webRequest.onErrorOccurred((a)=>{
                const o = this.sessionNetworkTrackers.get(e);
                if (!o) return;
                const l = o.requestMap.get(a.id);
                if (l) {
                    if (a.webContentsId !== void 0) {
                        const d = o.webContentsToViewId.get(a.webContentsId);
                        if (d) {
                            const u = this.getStateByViewId(d);
                            u && u.networkRequests.push({
                                ...l,
                                statusCode: void 0
                            });
                        }
                    }
                    o.requestMap.delete(a.id);
                }
            });
        }
        s.webContentsToViewId.set(t, n);
    }
    cleanupSessionNetworkTracking(e, t) {
        const n = this.sessionNetworkTrackers.get(e);
        n && n.webContentsToViewId.delete(t);
    }
    setupWindowCloseCleanup() {
        const e = (t)=>{
            const n = this.browserViews.get(t);
            if (n && n.size > 0) {
                this.logService.warn(`[BrowserViewMainService] Cleaning up ${n.size} orphaned view(s) from closed window ${t}`);
                for (const [r, s] of n.entries())this.cleanupPendingCertVerificationsForView(r), this.cleanupSessionNetworkTracking(s.partition, s.browserView.webContents.id), this.viewToWindow.delete(r), s.dispose();
                this.browserViews.delete(t);
            }
        };
        for (const t of this.auxiliaryWindowsMainService.getWindows())this._register(t.onDidClose(()=>e(t.id)));
    }
    getStateByViewId(e) {
        const t = this.viewToWindow.get(e);
        if (t !== void 0) return this.browserViews.get(t)?.get(e);
    }
    getState(e, t) {
        if (t) return this.getStateByViewId(t);
        const n = this.browserViews.get(e);
        if (!(!n || n.size === 0)) return n.values().next().value;
    }
    getStateOrWarn(e, t, n) {
        const r = this.getState(e, n);
        return r || this.logService.warn(`[BrowserViewMainService] Cannot ${t}: browser view not found for window ${e}${n ? ` viewId ${n}` : ""}`), r;
    }
    async confirmExternalSchemeNavigation(e, t, n) {
        return this.logService.info(`[BrowserViewMainService] Requesting user confirmation for ${t}: URL`), (await hZe.showMessageBox(n, {
            type: "question",
            buttons: [
                "Cancel",
                "Open"
            ],
            defaultId: 0,
            cancelId: 0,
            title: "Open External Link",
            message: "Do you want to open this link?",
            detail: `${e}

This will open in an external application.`,
            noLink: !0
        })).response === Gfe;
    }
    preventUnsafeRedirect(e) {
        const { event: t, url: n, isMainFrame: r, parentWindow: s, logLabel: i } = e, a = Ffe(n, r);
        if (a.action === "allow") return;
        if (t.preventDefault(), a.action !== "cancel-and-confirm-external") {
            this.logService.warn(`[BrowserViewMainService] Cancelled redirect to denied or non-main-frame URL (${i}):`, n);
            return;
        }
        if (!s) {
            this.logService.warn(`[BrowserViewMainService] Cancelled confirm-external redirect with no parent window (${i}):`, n);
            return;
        }
        const o = C1(n) ?? "";
        this.logService.info(`[BrowserViewMainService] Blocking redirect to non-web ${o}: URL, requesting confirmation (${i})`), this.confirmExternalSchemeNavigation(n, o, s).then((l)=>{
            l ? (this.logService.info(`[BrowserViewMainService] User approved opening ${o}: URL from redirect`), k2.openExternal(n).catch((d)=>{
                this.logService.error("[BrowserViewMainService] Failed to open external URL from redirect:", d);
            })) : this.logService.info(`[BrowserViewMainService] User declined opening ${o}: URL from redirect`);
        }, (l)=>{
            this.logService.error(`[BrowserViewMainService] Redirect confirm failed (${i}):`, l);
        });
    }
    getWindowFromId(e) {
        const t = this.windowsMainService.getWindows().find((r)=>r.id === e);
        if (t?.win) return t.win;
        const n = this.auxiliaryWindowsMainService.getWindows().find((r)=>r.id === e);
        if (n?.win) return n.win;
    }
    createDynamicWindowEvent(e, t) {
        return (n, r, s)=>{
            const i = new Map;
            (()=>{
                const l = this.browserViews.get(e);
                if (l) for (const [d, u] of l.entries())i.has(d) || i.set(d, t(u)(n, r, s));
            })();
            const o = O.filter(this.onDidCreateBrowserView, (l)=>l.windowId === e)((l)=>{
                const d = this.browserViews.get(e)?.get(l.viewId);
                d && !i.has(l.viewId) && i.set(l.viewId, t(d)(n, r, s));
            });
            return {
                dispose: ()=>{
                    for (const l of i.values())l.dispose();
                    i.clear(), o.dispose();
                }
            };
        };
    }
    onDidStartLoading(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onDidStartLoading.event);
    }
    onDidStopLoading(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onDidStopLoading.event);
    }
    onDidFinishLoad(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onDidFinishLoad.event);
    }
    onDidFailLoad(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onDidFailLoad.event);
    }
    onDidNavigate(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onDidNavigate.event);
    }
    onDidNavigateInPage(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onDidNavigateInPage.event);
    }
    onWillNavigate(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onWillNavigate.event);
    }
    onPageTitleUpdated(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onPageTitleUpdated.event);
    }
    onBrowserMessage(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onBrowserMessage.event);
    }
    onDidFocus(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onDidFocus.event);
    }
    onDidBlur(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onDidBlur.event);
    }
    onCertificateError(e) {
        return this.createDynamicWindowEvent(e, (t)=>t.onCertificateError.event);
    }
    onConfirmExternalSchemeNavigation(e) {
        return O.map(O.filter(this._onConfirmExternalSchemeNavigation.event, (t)=>t.windowId === e), (t)=>({
                webContentsId: t.webContentsId,
                url: t.url
            }));
    }
    blur(e, t) {
        const n = this.getState(e, t);
        n && n.parentWindow.webContents.focus();
    }
    async createBrowserView(e, t, n) {
        const r = n ?? `default-${e}`;
        if (this.viewToWindow.has(r)) {
            this.logService.warn(`[BrowserViewMainService] Browser view with viewId ${r} already exists`);
            return;
        }
        const s = this.getWindowFromId(e);
        if (!s) {
            this.logService.error(`[BrowserViewMainService] Cannot create browser view: window ${e} not found`);
            return;
        }
        const i = new pZe({
            webPreferences: {
                partition: t,
                contextIsolation: !0,
                nodeIntegration: !1,
                sandbox: !0,
                webviewTag: !1,
                enablePreferredSizeMode: !1,
                javascript: !0,
                navigateOnDragDrop: !1,
                enableBlinkFeatures: "StandardizedBrowserZoom",
                preload: Jt.asFileUri("vs/platform/browserView/electron-main/preload-browser.js").fsPath
            }
        });
        i.setBackgroundColor("#00000000");
        const a = i.webContents, o = new Set([
            "pointerLock",
            "clipboard-sanitized-write",
            "local-network",
            "loopback-network",
            "local-network-access"
        ]), l = a.session;
        l.setPermissionRequestHandler((f, v, T)=>T(o.has(v))), l.setPermissionCheckHandler((f, v, T)=>o.has(v));
        const d = new jfe(i, r, t, s);
        a.on("console-message", (f, v, T, S, k)=>{
            const b = [
                "log",
                "warning",
                "error",
                "debug",
                "info"
            ][v] || "log", I = Date.now();
            d.consoleLogs.push({
                type: b,
                message: `${T}${k ? ` (${k}:${S})` : ""}`,
                timestamp: I
            });
            const U = {
                method: {
                    log: "log",
                    warning: "warn",
                    error: "error",
                    debug: "debug",
                    info: "info"
                }[b] || "log",
                args: [
                    T
                ],
                timestamp: I,
                url: a.getURL(),
                source: k ? {
                    fileName: k.split("/").pop() || k,
                    file: k,
                    line: S,
                    column: 0
                } : void 0
            };
            d.onBrowserMessage.fire({
                channel: "native-console",
                args: [
                    U
                ],
                viewId: r
            });
        }), this.setupSessionNetworkTracking(t, a.id, r, d), a.on("did-start-loading", ()=>{
            d.onDidStartLoading.fire({
                viewId: r
            });
        }), a.on("did-stop-loading", ()=>{
            d.onDidStopLoading.fire({
                viewId: r
            });
        }), a.on("did-finish-load", ()=>{
            this.injectColorSchemePreferenceForState(d), d.onDidFinishLoad.fire({
                viewId: r
            });
        }), a.on("did-fail-load", (f, v, T, S, k)=>{
            this.logService.error(`[BrowserViewMainService] did-fail-load (window ${e}, viewId ${r})`, {
                errorCode: v,
                errorDescription: T,
                validatedURL: S,
                isMainFrame: k
            }), d.onDidFailLoad.fire({
                errorCode: v,
                errorDescription: T,
                validatedURL: S,
                isMainFrame: k,
                viewId: r
            });
        }), a.on("did-navigate", (f, v)=>{
            d.consoleLogs = [], d.networkRequests = [], d.onDidNavigate.fire({
                url: v,
                isMainFrame: !0,
                viewId: r
            });
        }), a.on("did-navigate-in-page", (f, v, T)=>{
            d.onDidNavigateInPage.fire({
                url: v,
                isMainFrame: T,
                viewId: r
            });
        }), a.on("will-navigate", (f, v)=>{
            this.logService.info(`[BrowserViewMainService] will-navigate to (window ${e}):`, v);
            const T = _2(v);
            if (T === "drop") {
                f.preventDefault(), this.logService.warn(`[BrowserViewMainService] Dropping navigation to denied or unparseable URL (window ${e}):`, v);
                return;
            }
            if (T === "confirm-external") {
                const S = C1(v) ?? "";
                this.logService.info(`[BrowserViewMainService] Blocking navigation to non-web ${S}: URL, requesting confirmation`), f.preventDefault(), this.confirmExternalSchemeNavigation(v, S, s).then((k)=>{
                    k ? (this.logService.info(`[BrowserViewMainService] User approved opening ${S}: URL`), k2.openExternal(v).catch((y)=>{
                        this.logService.error("[BrowserViewMainService] Failed to open external URL:", y);
                    })) : this.logService.info(`[BrowserViewMainService] User declined opening ${S}: URL`);
                });
                return;
            }
            d.onWillNavigate.fire({
                url: v,
                viewId: r
            });
        }), a.on("will-redirect", (f, v, T, S)=>{
            this.preventUnsafeRedirect({
                event: f,
                url: v,
                isMainFrame: S,
                parentWindow: s,
                logLabel: `window ${e} viewId ${r}`
            });
        }), a.on("page-title-updated", (f, v)=>{
            this.logService.trace(`[BrowserViewMainService] page-title-updated (window ${e}, viewId ${r}):`, v), d.onPageTitleUpdated.fire({
                title: v,
                viewId: r
            });
        }), a.on("update-target-url", (f, v)=>{
            d.onBrowserMessage.fire({
                channel: "update-target-url",
                args: [
                    {
                        url: v
                    }
                ],
                viewId: r
            });
        }), a.ipc.on("vscode:browser-view-message", (f, v, ...T)=>{
            this.logService.trace(`[BrowserViewMainService] browser-view-message (window ${e}, viewId ${r}):`, v, T), d.onBrowserMessage.fire({
                channel: v,
                args: T,
                viewId: r
            });
        }), a.on("focus", ()=>{
            this.logService.trace(`[BrowserViewMainService] webContents focused (window ${e})`), d.onDidFocus.fire({
                viewId: r
            });
        }), a.on("blur", ()=>{
            this.logService.trace(`[BrowserViewMainService] webContents blurred (window ${e}, viewId ${r})`), d.onDidBlur.fire({
                viewId: r
            });
        }), a.on("devtools-opened", ()=>{
            this.logService.trace(`[BrowserViewMainService] DevTools opened (window ${e}, viewId ${r})`), d.onBrowserMessage.fire({
                channel: "devtools-opened",
                args: [],
                viewId: r
            });
        }), a.on("devtools-closed", ()=>{
            this.logService.trace(`[BrowserViewMainService] DevTools closed (window ${e}, viewId ${r})`), d.onBrowserMessage.fire({
                channel: "devtools-closed",
                args: [],
                viewId: r
            });
        });
        const u = ()=>{
            const v = this.windowsMainService.getWindows().find((T)=>T.id === e)?.openedWorkspace;
            if (v) try {
                return this.storageMainService.workspaceStorage(v);
            } catch (T) {
                this.logService.error("[BrowserViewMainService] Failed to access workspace storage:", T);
                return;
            }
        };
        this.logService.info(`[BrowserViewMainService] Setting up certificate verify proc for window ${e}`), l.setCertificateVerifyProc((f, v)=>{
            const { hostname: T, certificate: S, verificationResult: k, isIssuedByKnownRoot: y } = f;
            if (this.logService.info(`[BrowserViewMainService] Certificate verification for ${T}: ${k}, isIssuedByKnownRoot: ${y}`), k === "OK") {
                this.logService.trace(`[BrowserViewMainService] Certificate for ${T} is valid`), v(0);
                return;
            }
            if (y) {
                this.logService.info(`[BrowserViewMainService] Certificate for ${T} is issued by known root but has error: ${k}. Trusting system verification.`), v(-3);
                return;
            }
            const b = S.fingerprint;
            if (this.sessionAcceptedCertificates.has(b)) {
                this.logService.info(`[BrowserViewMainService] Using session-accepted certificate for ${T} (fingerprint: ${b})`), v(0);
                return;
            }
            const I = u();
            if ((I ? JSON.parse(I.get("browserView.acceptedCertificates", "{}")) : {})[b]) {
                this.logService.info(`[BrowserViewMainService] Using workspace-stored certificate for ${T} (fingerprint: ${b})`), v(0);
                return;
            }
            const X = `${b}-${Date.now()}`;
            this.logService.info(`[BrowserViewMainService] Self-signed or unknown CA certificate needs user approval for ${T} (fingerprint: ${b})`);
            const W = {
                url: `https://${T}`,
                error: k,
                certificate: {
                    data: S.data,
                    issuerName: S.issuerName,
                    subjectName: S.subjectName,
                    validStart: S.validStart,
                    validExpiry: S.validExpiry,
                    fingerprint: b
                },
                viewId: r
            };
            this.pendingCertVerifications.set(X, {
                request: {
                    hostname: T,
                    certificate: W.certificate,
                    verificationResult: k,
                    isIssuedByKnownRoot: y,
                    requestId: X
                },
                callback: v,
                windowId: e,
                viewId: r
            }), d.onCertificateError.fire(W), setTimeout(()=>{
                this.pendingCertVerifications.has(X) && (this.logService.warn(`[BrowserViewMainService] Certificate verification timed out for ${T}, rejecting`), this.pendingCertVerifications.delete(X), v(-2));
            }, 3e4);
        }), a.setWindowOpenHandler((f)=>{
            this.logService.info(`[BrowserViewMainService] new-window requested (window ${e}):`, f.url, "disposition:", f.disposition);
            const v = _2(f.url);
            if (v === "drop") return this.logService.warn(`[BrowserViewMainService] Dropping window.open to denied or unparseable URL (window ${e}):`, f.url), {
                action: "deny"
            };
            if (v === "confirm-external") {
                const T = C1(f.url) ?? "";
                return this.logService.info(`[BrowserViewMainService] Blocking window.open to non-web ${T}: URL, requesting confirmation`), this.confirmExternalSchemeNavigation(f.url, T, s).then((S)=>{
                    S ? (this.logService.info(`[BrowserViewMainService] User approved opening ${T}: URL from window.open`), k2.openExternal(f.url).catch((k)=>{
                        this.logService.error("[BrowserViewMainService] Failed to open external URL from window.open:", k);
                    })) : this.logService.info(`[BrowserViewMainService] User declined opening ${T}: URL from window.open`);
                }), {
                    action: "deny"
                };
            }
            return f.disposition === "foreground-tab" || f.disposition === "background-tab" || f.disposition === "new-window" ? (this.logService.info(`[BrowserViewMainService] Opening URL in new tab (window ${e}):`, f.url, "disposition:", f.disposition), d.onBrowserMessage.fire({
                channel: "open-url-new-tab",
                args: [
                    {
                        url: f.url,
                        disposition: f.disposition
                    }
                ],
                viewId: r
            }), {
                action: "deny"
            }) : (this.logService.info(`[BrowserViewMainService] Navigating in current view (window ${e}):`, f.url, "disposition:", f.disposition), a.loadURL(f.url).catch((T)=>{
                this.logService.error(`[BrowserViewMainService] Failed to load URL (window ${e}):`, T);
            }), {
                action: "deny"
            });
        }), s.contentView.addChildView(i, 0), i.setVisible(!1);
        let m = this.browserViews.get(e);
        m || (m = new Map, this.browserViews.set(e, m)), m.set(r, d), this.viewToWindow.set(r, e), this._onDidCreateBrowserView.fire({
            windowId: e,
            viewId: r
        }), this._register({
            dispose: ()=>{
                const f = this.browserViews.get(e);
                if (f?.has(r)) {
                    const v = f.get(r);
                    f.delete(r), this.viewToWindow.delete(r), f.size === 0 && this.browserViews.delete(e), v?.dispose();
                }
            }
        }), this.logService.info(`[BrowserViewMainService] Browser view created for window ${e}, viewId ${r}`);
    }
    async flushStorageData(e, t) {
        const n = this.getStateOrWarn(e, "flush storage data", t);
        if (n) try {
            const r = n.browserView.webContents.session;
            await r.cookies.flushStore(), await r.flushStorageData(), this.logService.info(`[BrowserViewMainService] Flushed session storage data for window ${e}, viewId ${t ?? n.viewId}`);
        } catch (r) {
            this.logService.warn(`[BrowserViewMainService] Failed to flush storage data for window ${e}, viewId ${t ?? n.viewId}:`, r);
        }
    }
    async destroyBrowserView(e, t) {
        const n = this.getState(e, t);
        if (!n) return;
        const r = n.viewId, s = this.viewToWindow.get(r) ?? e;
        this.cleanupPendingCertVerificationsForView(r), this.cleanupSessionNetworkTracking(n.partition, n.browserView.webContents.id), await this.flushStorageData(s, r);
        const i = this.browserViews.get(s);
        i && (i.delete(r), i.size === 0 && this.browserViews.delete(s)), this.viewToWindow.delete(r), n.dispose(), this.logService.info(`[BrowserViewMainService] Browser view destroyed for window ${s}, viewId ${r}`);
    }
    async transferView(e, t) {
        const n = this.getStateByViewId(e);
        if (!n) {
            this.logService.warn(`[BrowserViewMainService] Cannot transfer: no browser view found for viewId ${e}`);
            return;
        }
        const r = this.viewToWindow.get(e);
        if (r === void 0) {
            this.logService.error(`[BrowserViewMainService] Cannot transfer: viewId ${e} not found in viewToWindow map`);
            return;
        }
        if (r === t) {
            this.logService.info(`[BrowserViewMainService] View ${e} already in target window ${t}`);
            return;
        }
        const s = this.getWindowFromId(t);
        if (!s) {
            this.logService.error(`[BrowserViewMainService] Cannot transfer: target window ${t} not found`);
            return;
        }
        if (n.parentWindow && !n.parentWindow.isDestroyed()) try {
            n.parentWindow.contentView.removeChildView(n.browserView);
        } catch (o) {
            this.logService.warn("[BrowserViewMainService] Failed to remove browser view from source window:", o);
        }
        const i = this.browserViews.get(r);
        i && (i.delete(e), i.size === 0 && this.browserViews.delete(r));
        let a = this.browserViews.get(t);
        a || (a = new Map, this.browserViews.set(t, a)), a.set(e, n), s.contentView.addChildView(n.browserView, 0), n.parentWindow = s, this.viewToWindow.set(e, t), n.browserView.setVisible(!1), this._onDidCreateBrowserView.fire({
            windowId: t,
            viewId: e
        }), this.logService.info(`[BrowserViewMainService] Browser view ${e} transferred from window ${r} to window ${t}`);
    }
    async setBounds(e, t, n) {
        const r = this.getStateOrWarn(e, "set bounds", n);
        if (r) {
            r.browserView.setBounds({
                x: Math.round(t.x),
                y: Math.round(t.y),
                width: Math.round(t.width),
                height: Math.round(t.height)
            });
            try {
                r.browserView.webContents.invalidate();
            } catch  {}
        }
    }
    async setVisible(e, t, n) {
        const r = this.getStateOrWarn(e, "set visibility", n);
        r && (r.isVisible = t, r.browserView.setVisible(t));
    }
    async navigate(e, t, n) {
        const r = this.getStateOrWarn(e, "navigate", n);
        if (r) {
            this.logService.info(`[BrowserViewMainService] Navigating to ${t} (window ${e}, viewId ${n ?? r.viewId})`);
            try {
                await r.browserView.webContents.loadURL(t);
            } catch (s) {
                throw this.logService.error(`[BrowserViewMainService] Navigation failed for window ${e}, viewId ${n ?? r.viewId}:`, s), s;
            }
        }
    }
    async goBack(e, t) {
        const n = this.getState(e, t);
        return !n || !n.browserView.webContents.canGoBack() ? !1 : (n.browserView.webContents.goBack(), !0);
    }
    async goForward(e, t) {
        const n = this.getState(e, t);
        return !n || !n.browserView.webContents.canGoForward() ? !1 : (n.browserView.webContents.goForward(), !0);
    }
    async reload(e, t) {
        const n = this.getStateOrWarn(e, "reload", t);
        n && n.browserView.webContents.reload();
    }
    async reloadIgnoringCache(e, t) {
        const n = this.getStateOrWarn(e, "reload ignoring cache", t);
        n && (this.logService.info(`[BrowserViewMainService] Performing hard reload (ignoring cache) for window ${e}, viewId ${t ?? n.viewId}`), n.browserView.webContents.reloadIgnoringCache());
    }
    async canGoBack(e, t) {
        const n = this.getState(e, t);
        return n ? n.browserView.webContents.canGoBack() : !1;
    }
    async canGoForward(e, t) {
        const n = this.getState(e, t);
        return n ? n.browserView.webContents.canGoForward() : !1;
    }
    async executeJavaScript(e, t, n) {
        const r = this.getStateOrWarn(e, "execute JavaScript", n);
        if (r) try {
            return await r.browserView.webContents.executeJavaScript(t);
        } catch (s) {
            throw this.logService.error(`[BrowserViewMainService] Failed to execute JavaScript for window ${e}, viewId ${n ?? r.viewId}`, s), s;
        }
    }
    async getWebContentsId(e, t) {
        const n = this.getState(e, t);
        if (n) return n.browserView.webContents.id;
    }
    async getURL(e, t) {
        const n = this.getState(e, t);
        return n ? n.browserView.webContents.getURL() : "";
    }
    async openDevTools(e, t) {
        const n = this.getStateOrWarn(e, "open DevTools", t);
        n && (n.browserView.webContents.openDevTools({
            mode: "right",
            activate: !0
        }), this.logService.info(`[BrowserViewMainService] DevTools opened for window ${e}, viewId ${t ?? n.viewId}`));
    }
    async toggleDevTools(e, t, n) {
        const r = this.getStateOrWarn(e, "toggle DevTools", n);
        if (r) try {
            r.browserView.webContents.isDevToolsOpened() ? r.browserView.webContents.closeDevTools() : r.browserView.webContents.openDevTools({
                mode: t?.mode || "detach"
            }), this.logService.info(`[BrowserViewMainService] DevTools toggled with mode ${t?.mode || "detach"} for window ${e}, viewId ${n ?? r.viewId}`);
        } catch (s) {
            this.logService.error(`[BrowserViewMainService] Failed to toggle DevTools for window ${e}, viewId ${n ?? r.viewId}:`, s);
        }
    }
    async focus(e, t) {
        const n = this.getStateOrWarn(e, "focus", t);
        n && (n.browserView.webContents.focus(), this.logService.trace(`[BrowserViewMainService] Browser view focused for window ${e}, viewId ${t ?? n.viewId}`));
    }
    async setZoomLevel(e, t, n) {
        const r = this.getStateOrWarn(e, "set zoom level", n);
        r && (r.browserView.webContents.setZoomLevel(t), this.logService.trace(`[BrowserViewMainService] Zoom level set to ${t} for window ${e}, viewId ${n ?? r.viewId}`));
    }
    async getZoomLevel(e, t) {
        const n = this.getStateOrWarn(e, "get zoom level", t);
        if (!n) return 0;
        const r = n.browserView.webContents.getZoomLevel();
        return this.logService.trace(`[BrowserViewMainService] Current zoom level for window ${e}, viewId ${t ?? n.viewId}: ${r}`), r;
    }
    async zoomIn(e, t) {
        const n = this.getStateOrWarn(e, "zoom in", t);
        if (!n) return;
        const r = n.browserView.webContents.getZoomLevel(), s = Math.min(r + .5, 9);
        n.browserView.webContents.setZoomLevel(s), this.logService.info(`[BrowserViewMainService] Zoomed in to level ${s} for window ${e}, viewId ${t ?? n.viewId}`);
    }
    async zoomOut(e, t) {
        const n = this.getStateOrWarn(e, "zoom out", t);
        if (!n) return;
        const r = n.browserView.webContents.getZoomLevel(), s = Math.max(r - .5, -9);
        n.browserView.webContents.setZoomLevel(s), this.logService.info(`[BrowserViewMainService] Zoomed out to level ${s} for window ${e}, viewId ${t ?? n.viewId}`);
    }
    async resetZoom(e, t) {
        const n = this.getStateOrWarn(e, "reset zoom", t);
        n && (n.browserView.webContents.setZoomLevel(0), this.logService.info(`[BrowserViewMainService] Zoom reset to default level for window ${e}, viewId ${t ?? n.viewId}`));
    }
    async getConsoleLogs(e, t) {
        const n = this.getState(e, t);
        return n ? n.consoleLogs : [];
    }
    async getNetworkRequests(e, t) {
        const n = this.getState(e, t);
        return n ? n.networkRequests : [];
    }
    setupWebviewNetworkTracking(e) {
        const t = S2.fromId(e);
        if (!t || t.getType() !== "webview") return;
        if (this.attachWebviewRedirectGuard(t), !this.webviewHardReloadShortcutListeners.has(e)) {
            this.webviewHardReloadShortcutListeners.add(e);
            const i = (a, o)=>{
                o.type !== "keyDown" || Dfe(o) !== "reload-page" || (a.preventDefault(), t.reloadIgnoringCache());
            };
            t.on("before-input-event", i), t.once("destroyed", ()=>{
                t.removeListener("before-input-event", i), this.webviewHardReloadShortcutListeners.delete(e);
            });
        }
        const n = t.session;
        if (n === gZe.defaultSession) return;
        const r = n.storagePath ?? "__default__";
        this.webviewTracker.setup(r, e) && (n.webRequest.onBeforeRequest((i, a)=>{
            this.webviewTracker.onBeforeRequest(r, i.id, i.url, i.method, i.resourceType), a({});
        }), n.webRequest.onCompleted((i)=>{
            this.webviewTracker.onRequestCompleted(r, i.id, i.webContentsId, i.statusCode);
        }), n.webRequest.onErrorOccurred((i)=>{
            this.webviewTracker.onRequestErrored(r, i.id, i.webContentsId);
        })), this.webviewDestroyListeners.has(e) || (this.webviewDestroyListeners.add(e), t.once("destroyed", ()=>{
            this.webviewTracker.remove(e), this.webviewDestroyListeners.delete(e);
        }));
    }
    getWebviewNetworkRequests(e) {
        return this.webviewTracker.getRequests(e);
    }
    clearWebviewNetworkRequests(e) {
        this.webviewTracker.clear(e);
    }
    copyWebviewImageAt(e, t, n) {
        const r = S2.fromId(e);
        !r || r.getType() !== "webview" || r.copyImageAt(Math.round(t), Math.round(n));
    }
    injectColorSchemePreferenceForState(e) {
        const t = this.themeMainService.getColorScheme(), n = t.dark ? "dark" : "light", r = t.dark ? "#1e1e1e" : "white", s = `
			:root {
				color-scheme: ${n};
			}
			html {
				background-color: ${r};
			}
		`, i = async ()=>{
            if (e.pendingColorSchemeInjection && await e.pendingColorSchemeInjection, e.injectedColorSchemeCSSKey) {
                try {
                    await e.browserView.webContents.removeInsertedCSS(e.injectedColorSchemeCSSKey);
                } catch (a) {
                    this.logService.warn("[BrowserViewMainService] Failed to remove previous color scheme CSS:", a);
                }
                e.injectedColorSchemeCSSKey = void 0;
            }
            try {
                e.injectedColorSchemeCSSKey = await e.browserView.webContents.insertCSS(s), this.logService.trace(`[BrowserViewMainService] Injected color scheme preference: ${n}`);
            } catch (a) {
                this.logService.warn("[BrowserViewMainService] Failed to inject color scheme CSS:", a);
            }
            try {
                await e.browserView.webContents.setVisualZoomLevelLimits(1, 3), this.logService.info("[BrowserViewMainService] Successfully set visual zoom level limits from main process");
            } catch (a) {
                this.logService.warn("[BrowserViewMainService] Failed to set visual zoom level limits from main process:", a);
            }
        };
        e.pendingColorSchemeInjection = i().catch((a)=>{
            this.logService.error("[BrowserViewMainService] Unexpected error in color scheme injection:", a);
        });
    }
    async emulateColorScheme(e, t, n) {
        if (![
            "light",
            "dark",
            "no-preference"
        ].includes(t)) throw this.logService.error(`[BrowserViewMainService] Invalid color scheme value: ${String(t)}`), new Error("Invalid color scheme: expected 'light', 'dark', or 'no-preference'");
        const s = this.getStateOrWarn(e, "emulate color scheme", n);
        if (!s) return;
        const i = s.browserView.webContents;
        try {
            const a = i.debugger;
            a.isAttached() || a.attach("1.3"), t === "no-preference" ? (await a.sendCommand("Emulation.setEmulatedMedia", {
                features: []
            }), this.logService.info(`[BrowserViewMainService] Cleared color scheme emulation for window ${e}`)) : (await a.sendCommand("Emulation.setEmulatedMedia", {
                features: [
                    {
                        name: "prefers-color-scheme",
                        value: t
                    }
                ]
            }), this.logService.info(`[BrowserViewMainService] Emulated color scheme '${t}' for window ${e}`));
            const o = `
				(function() {
					const html = document.documentElement;
					const body = document.body;
					const mode = '${t === "no-preference" ? "" : t}';

					if (!mode) {
						html.removeAttribute('data-forced-theme');
						html.removeAttribute('data-theme');
						html.removeAttribute('data-color-mode');
						html.classList.remove('light', 'dark', 'theme-light', 'theme-dark');
						body.classList.remove('light', 'dark', 'theme-light', 'theme-dark');
						html.style.colorScheme = '';
						return;
					}

					html.setAttribute('data-forced-theme', mode);
					html.setAttribute('data-theme', mode);
					html.setAttribute('data-color-mode', mode);
					html.classList.remove('light', 'dark', 'theme-light', 'theme-dark');
					html.classList.add(mode);
					html.classList.add('theme-' + mode);
					body.classList.remove('light', 'dark', 'theme-light', 'theme-dark');
					body.classList.add(mode);
					body.classList.add('theme-' + mode);
					html.style.colorScheme = mode;

					window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: mode } }));
					window.dispatchEvent(new CustomEvent('colorschemechange', { detail: { colorScheme: mode } }));
				})();
			`;
            await i.executeJavaScript(o);
        } catch (a) {
            throw this.logService.error(`[BrowserViewMainService] Failed to emulate color scheme for window ${e}:`, a), a;
        }
    }
    async acceptCertificate(e, t, n, r) {
        this.logService.info(`[BrowserViewMainService] Accepting certificate ${t} for window ${e}, viewId ${r}, remember: ${n}`), this.sessionAcceptedCertificates.add(t), this.logService.info(`[BrowserViewMainService] Added certificate ${t} to session-accepted list`);
        for (const [s, i] of this.pendingCertVerifications.entries())(r ? i.viewId === r : i.windowId === e) && i.request.certificate.fingerprint === t && (this.logService.info(`[BrowserViewMainService] Resolving pending certificate verification ${s} for ${t}`), i.callback(0), this.pendingCertVerifications.delete(s));
        if (n) {
            const i = await (async ()=>{
                const o = this.windowsMainService.getWindows().find((l)=>l.id === e)?.openedWorkspace;
                if (o) try {
                    const l = this.storageMainService.workspaceStorage(o);
                    return await l.init(), l;
                } catch (l) {
                    this.logService.error("[BrowserViewMainService] Failed to access workspace storage:", l);
                    return;
                }
            })();
            if (i) try {
                const a = "browserView.acceptedCertificates", o = JSON.parse(i.get(a, "{}"));
                o[t] = {
                    acceptedAt: Date.now()
                }, i.set(a, JSON.stringify(o)), this.logService.info(`[BrowserViewMainService] Saved accepted certificate ${t}`);
            } catch (a) {
                this.logService.error("[BrowserViewMainService] Failed to save certificate:", a);
            }
        }
    }
    async rejectCertificate(e, t, n) {
        this.logService.info(`[BrowserViewMainService] Rejecting certificate ${t} for window ${e}, viewId ${n}`);
        for (const [r, s] of this.pendingCertVerifications.entries())(n ? s.viewId === n : s.windowId === e) && s.request.certificate.fingerprint === t && (this.logService.info(`[BrowserViewMainService] Rejecting pending certificate verification ${r} for ${t}`), s.callback(-2), this.pendingCertVerifications.delete(r));
    }
    getBrowserViewForWindow(e, t) {
        const n = this.getState(e, t);
        return n?.isVisible ? n.browserView : void 0;
    }
    async sendCDPCommand(e, t, n, r) {
        const s = iF(t);
        if (s) throw this.logService.warn(`[BrowserViewMainService] CDP method ${t} is denied, rejecting for window ${e}, viewId ${r}`), new Error(s);
        const i = this.getStateOrWarn(e, "send CDP command", r);
        if (!i) return;
        const a = i.browserView.webContents;
        try {
            const o = a.debugger;
            o.isAttached() || o.attach("1.3");
            const l = await o.sendCommand(t, n || {});
            return this.logService.trace(`[BrowserViewMainService] CDP command ${t} completed for window ${e}, viewId ${r ?? i.viewId}`), l;
        } catch (o) {
            throw this.logService.error(`[BrowserViewMainService] Failed to send CDP command ${t} for window ${e}, viewId ${r ?? i.viewId}:`, o), o;
        }
    }
    dispose() {
        for (const [e, t] of this.browserViews.entries())for (const [n, r] of t.entries())this.logService.info(`[BrowserViewMainService] Disposing browser view for window ${e}, viewId ${n}`), r.dispose();
        this.browserViews.clear(), this.viewToWindow.clear(), super.dispose();
    }
}, I1 = B([
    w(0, Z),
    w(1, ct),
    w(2, Dc),
    w(3, no),
    w(4, Gs),
    w(5, ci)
], I1);

}
