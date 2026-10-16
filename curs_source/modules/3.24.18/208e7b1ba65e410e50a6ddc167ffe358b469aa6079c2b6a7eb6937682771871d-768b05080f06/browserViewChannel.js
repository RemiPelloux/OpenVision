import { h } from "./tslib.es6.js";
var qfe;
export { qfe };
var __wakaru_fZe_initialized = false;
export function fZe() {
if (__wakaru_fZe_initialized) return;
__wakaru_fZe_initialized = true;
"use strict";
h(), qfe = class {
    constructor(e){
        this.service = e;
    }
    getWindowId(e) {
        const t = String(e), n = t.match(/^window:(\d+)$/);
        if (!n) throw new Error(`Invalid context format: ${t}`);
        return parseInt(n[1], 10);
    }
    listen(e, t) {
        const n = this.getWindowId(e);
        switch(t){
            case "onDidStartLoading":
                return this.service.onDidStartLoading(n);
            case "onDidStopLoading":
                return this.service.onDidStopLoading(n);
            case "onDidFinishLoad":
                return this.service.onDidFinishLoad(n);
            case "onDidFailLoad":
                return this.service.onDidFailLoad(n);
            case "onDidNavigate":
                return this.service.onDidNavigate(n);
            case "onDidNavigateInPage":
                return this.service.onDidNavigateInPage(n);
            case "onWillNavigate":
                return this.service.onWillNavigate(n);
            case "onPageTitleUpdated":
                return this.service.onPageTitleUpdated(n);
            case "onBrowserMessage":
                return this.service.onBrowserMessage(n);
            case "onDidFocus":
                return this.service.onDidFocus(n);
            case "onDidBlur":
                return this.service.onDidBlur(n);
            case "onCertificateError":
                return this.service.onCertificateError(n);
            case "onConfirmExternalSchemeNavigation":
                return this.service.onConfirmExternalSchemeNavigation(n);
            default:
                throw new Error(`Event not found: ${t}`);
        }
    }
    async call(e, t, n) {
        const r = this.getWindowId(e);
        switch(t){
            case "createBrowserView":
                {
                    const { partition: s, targetWindowId: i, viewId: a } = n;
                    return this.service.createBrowserView(i ?? r, s, a);
                }
            case "destroyBrowserView":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.destroyBrowserView(r, s);
                }
            case "flushStorageData":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.flushStorageData(r, s);
                }
            case "setBounds":
                {
                    const { bounds: s, targetWindowId: i, viewId: a } = n;
                    return this.service.setBounds(i ?? r, s, a);
                }
            case "setVisible":
                {
                    const { visible: s, targetWindowId: i, viewId: a } = n;
                    return this.service.setVisible(i ?? r, s, a);
                }
            case "navigate":
                {
                    const { url: s, viewId: i } = n;
                    return this.service.navigate(r, s, i);
                }
            case "goBack":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.goBack(r, s);
                }
            case "goForward":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.goForward(r, s);
                }
            case "reload":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.reload(r, s);
                }
            case "reloadIgnoringCache":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.reloadIgnoringCache(r, s);
                }
            case "canGoBack":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.canGoBack(r, s);
                }
            case "canGoForward":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.canGoForward(r, s);
                }
            case "executeJavaScript":
                {
                    const { code: s, viewId: i } = n;
                    return this.service.executeJavaScript(r, s, i);
                }
            case "getWebContentsId":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.getWebContentsId(r, s);
                }
            case "getURL":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.getURL(r, s);
                }
            case "openDevTools":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.openDevTools(r, s);
                }
            case "toggleDevTools":
                {
                    const { options: s, viewId: i } = n ?? {};
                    return this.service.toggleDevTools(r, s, i);
                }
            case "focus":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.focus(r, s);
                }
            case "blur":
                {
                    const { viewId: s } = n ?? {};
                    this.service.blur(r, s);
                    return;
                }
            case "setZoomLevel":
                {
                    const { level: s, viewId: i } = n;
                    return this.service.setZoomLevel(r, s, i);
                }
            case "getZoomLevel":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.getZoomLevel(r, s);
                }
            case "zoomIn":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.zoomIn(r, s);
                }
            case "zoomOut":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.zoomOut(r, s);
                }
            case "resetZoom":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.resetZoom(r, s);
                }
            case "getConsoleLogs":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.getConsoleLogs(r, s);
                }
            case "getNetworkRequests":
                {
                    const { viewId: s } = n ?? {};
                    return this.service.getNetworkRequests(r, s);
                }
            case "acceptCertificate":
                {
                    const { fingerprint: s, remember: i, viewId: a } = n;
                    return this.service.acceptCertificate(r, s, i, a);
                }
            case "rejectCertificate":
                {
                    const { fingerprint: s, viewId: i } = n;
                    return this.service.rejectCertificate(r, s, i);
                }
            case "transferView":
                {
                    const { viewId: s, targetWindowId: i } = n;
                    return this.service.transferView(s, i);
                }
            case "emulateColorScheme":
                {
                    const { colorScheme: s, viewId: i } = n;
                    if (s !== "light" && s !== "dark" && s !== "no-preference") throw new Error("Invalid color scheme: expected 'light', 'dark', or 'no-preference'");
                    return this.service.emulateColorScheme(r, s, i);
                }
            case "sendCDPCommand":
                {
                    const { method: s, params: i, viewId: a } = n;
                    return this.service.sendCDPCommand(r, s, i, a);
                }
            case "setupWebviewNetworkTracking":
                {
                    const { webContentsId: s } = n;
                    this.service.setupWebviewNetworkTracking(s);
                    return;
                }
            case "getWebviewNetworkRequests":
                {
                    const { webContentsId: s } = n;
                    return this.service.getWebviewNetworkRequests(s);
                }
            case "clearWebviewNetworkRequests":
                {
                    const { webContentsId: s } = n;
                    this.service.clearWebviewNetworkRequests(s);
                    return;
                }
            case "copyWebviewImageAt":
                {
                    const { webContentsId: s, x: i, y: a } = n;
                    this.service.copyWebviewImageAt(s, i, a);
                    return;
                }
            default:
                throw new Error(`Call not found: ${t}`);
        }
    }
};

}
