import { Jet, j1 } from "./auxiliaryWindow.js";
import { N, O, ge, se } from "./event.js";
import { oC } from "./extensionProtocolUrlWindowRouting.js";
import { ne, ni } from "./instantiation.js";
import { B } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { J, j, ve } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { XT } from "./nativeHostMainService.js";
import { $e, Jt } from "./network.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { D6, hp } from "./window_2.js";
import { QT, pt } from "./windows.js";
import { app as Qet } from "electron";
import { BrowserWindow as Xet } from "electron";
var H1;
export { H1 };
var __wakaru_Zet_initialized = false;
export function Zet() {
if (__wakaru_Zet_initialized) return;
__wakaru_Zet_initialized = true;
"use strict";
h(), se(), j(), $e(), hr(), Jet(), ne(), te(), hp(), pt(), H1 = class extends J {
    constructor(e, t){
        super(), this.instantiationService = e, this.logService = t, this._onDidMaximizeWindow = this._register(new N), this.onDidMaximizeWindow = this._onDidMaximizeWindow.event, this._onDidUnmaximizeWindow = this._register(new N), this.onDidUnmaximizeWindow = this._onDidUnmaximizeWindow.event, this._onDidChangeFullScreen = this._register(new N), this.onDidChangeFullScreen = this._onDidChangeFullScreen.event, this._onDidTriggerSystemContextMenu = this._register(new N), this.onDidTriggerSystemContextMenu = this._onDidTriggerSystemContextMenu.event, this.windows = new Map, this.registerListeners();
    }
    revealAboutWindow(e) {
        const t = this.trackedAboutWindow();
        return t ? (e && this.fitAboutWindowToContent(t, e), t.isMinimized() && t.restore(), t.show(), t.focus(), !0) : !1;
    }
    fitAboutWindow(e) {
        const t = this.trackedAboutWindow();
        return t ? (this.fitAboutWindowToContent(t, e), !0) : !1;
    }
    updateAboutWindowControls(e) {
        const t = this.trackedAboutWindow();
        if (!t || !t.setTitleBarOverlay) return !1;
        try {
            t.setTitleBarOverlay({
                color: e.backgroundColor,
                symbolColor: e.symbolColor
            });
        } catch (n) {
            return this.logService.trace("[aux window] About window has no title bar overlay to colour", n), !1;
        }
        return !0;
    }
    trackedAboutWindow() {
        const e = this.aboutBrowserWindow;
        if (!e || e.isDestroyed()) {
            this.aboutBrowserWindow = void 0;
            return;
        }
        return e;
    }
    fitAboutWindowToContent(e, t) {
        const n = e.getBounds(), r = n.x + n.width / 2, s = n.y + n.height / 2;
        e.setResizable(!0), e.setMinimumSize(0, 0), e.setMaximumSize(0, 0), e.setContentSize(Math.round(t.width), Math.round(t.height));
        const i = e.getBounds();
        e.setBounds({
            x: Math.round(r - i.width / 2),
            y: Math.round(s - i.height / 2),
            width: i.width,
            height: i.height
        });
        const [a, o] = e.getSize();
        e.setResizable(!1), e.setMaximizable(!1), e.setMinimumSize(a, o), e.setMaximumSize(a, o);
    }
    trackAboutBrowserWindow(e) {
        this.aboutBrowserWindow && this.aboutBrowserWindow !== e && !this.aboutBrowserWindow.isDestroyed() && this.aboutBrowserWindow.close(), this.aboutBrowserWindow = e, e.once("closed", ()=>{
            this.aboutBrowserWindow === e && (this.aboutBrowserWindow = void 0);
        });
    }
    registerListeners() {
        Qet.on("browser-window-created", (e, t)=>{
            const n = this.getWindowByWebContents(t.webContents);
            if (n) this.logService.trace('[aux window] app.on("browser-window-created"): Trying to claim auxiliary window'), n.tryClaimWindow();
            else {
                const r = new ve;
                r.add(O.fromNodeEventEmitter(t.webContents, "did-create-window", (s, i)=>({
                        browserWindow: s,
                        details: i
                    }))(({ browserWindow: s, details: i })=>{
                    const a = this.getWindowByWebContents(s.webContents);
                    a && (this.logService.trace('[aux window] window.on("did-create-window"): Trying to claim auxiliary window'), a.tryClaimWindow(i.options), i.options?.supplemental === !0 && this.trackAboutBrowserWindow(s));
                })), r.add(O.fromNodeEventEmitter(t, "closed")(()=>r.dispose()));
            }
        }), Te.handle("vscode:registerAuxiliaryWindow", async (e, t)=>{
            const n = this.getWindowByWebContents(e.sender);
            return n && (this.logService.trace("[aux window] vscode:registerAuxiliaryWindow: Registering auxiliary window to main window"), n.parentId = t), e.sender.id;
        });
    }
    createWindow(e, t) {
        const { state: n, overrides: r } = this.computeWindowStateAndOverrides(e), s = this.instantiationService.invokeFunction(XT, n, r, {
            preload: Jt.asFileUri("vs/base/parts/sandbox/electron-sandbox/preload-aux.js").fsPath
        });
        return r.supplemental === !0 && (s.supplemental = !0), s;
    }
    computeWindowStateAndOverrides(e) {
        const t = {}, n = {
            hideBecauseShadowWindow: !1
        }, r = e.features.split(",");
        for (const i of r){
            const [a, o] = i.split("=");
            switch(a){
                case "width":
                    t.width = parseInt(o, 10);
                    break;
                case "height":
                    t.height = parseInt(o, 10);
                    break;
                case "left":
                    t.x = parseInt(o, 10);
                    break;
                case "top":
                    t.y = parseInt(o, 10);
                    break;
                case "window-maximized":
                    t.mode = 0;
                    break;
                case "window-fullscreen":
                    t.mode = 3;
                    break;
                case "window-disable-fullscreen":
                    n.disableFullscreen = !0;
                    break;
                case "window-native-titlebar":
                    n.forceNativeTitlebar = !0;
                    break;
                case "window-glass-vibrancy":
                    n.glassVibrancy = !0;
                    break;
                case "window-supplemental":
                    n.supplemental = !0;
                    break;
            }
        }
        const s = QT.validateWindowState(this.logService, t) ?? D6();
        return this.logService.trace("[aux window] using window state", s), {
            state: s,
            overrides: n
        };
    }
    registerWindow(e) {
        const t = new ve, n = this.instantiationService.createInstance(j1, e);
        this.windows.set(n.id, n), t.add(ge(()=>this.windows.delete(n.id))), t.add(n.onDidMaximize(()=>this._onDidMaximizeWindow.fire(n))), t.add(n.onDidUnmaximize(()=>this._onDidUnmaximizeWindow.fire(n))), t.add(n.onDidEnterFullScreen(()=>this._onDidChangeFullScreen.fire({
                window: n,
                fullscreen: !0
            }))), t.add(n.onDidLeaveFullScreen(()=>this._onDidChangeFullScreen.fire({
                window: n,
                fullscreen: !1
            }))), t.add(n.onDidTriggerSystemContextMenu(({ x: r, y: s })=>this._onDidTriggerSystemContextMenu.fire({
                window: n,
                x: r,
                y: s
            }))), O.once(n.onDidClose)(()=>t.dispose());
    }
    getWindowByWebContents(e) {
        const t = this.windows.get(e.id);
        return t?.matches(e) ? t : void 0;
    }
    getFocusedWindow() {
        const e = Xet.getFocusedWindow();
        if (e) return this.getWindowByWebContents(e.webContents);
    }
    getLastActiveWindow() {
        return oC(Array.from(this.windows.values()));
    }
    getWindows() {
        return Array.from(this.windows.values());
    }
}, H1 = B([
    w(0, ni),
    w(1, Z)
], H1);

}
