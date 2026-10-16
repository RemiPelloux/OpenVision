import { le } from "./async.js";
import { at, ot } from "./configuration.js";
import { Tu } from "./firstWindowStartup.js";
import { B, Hn } from "./ipc.js";
import { J, Ut, j } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { oe, q } from "./platform.js";
import { Ft, St } from "./resources.js";
import { br, fr } from "./state.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Zr, rr } from "./userDataProfile.js";
import { hp, ro } from "./window_2.js";
import { ct, pt } from "./windows.js";
import { bn } from "./workspace.js";
import ll from "electron";
function jQe(e) {
    return e.preferLastFocused ? e.lastClosedState ?? e.lastFocusedState ?? e.liveLastActive : e.lastClosedState ?? e.liveLastActive ?? e.lastFocusedState;
}
function JQe(e) {
    const t = {
        openedWindows: []
    }, n = e || {
        openedWindows: []
    };
    return t.lastNonExtensionWindowWasOpenOnShutdown = n.lastNonExtensionWindowWasOpenOnShutdown, n.lastActiveWindow && (t.lastActiveWindow = h2(n.lastActiveWindow)), n.lastPluginDevelopmentHostWindow && (t.lastPluginDevelopmentHostWindow = h2(n.lastPluginDevelopmentHostWindow)), Array.isArray(n.openedWindows) && (t.openedWindows = n.openedWindows.map((r)=>h2(r))), t;
}
function h2(e) {
    const t = {
        uiState: e.uiState
    };
    return e.backupPath && (t.backupPath = e.backupPath), e.remoteAuthority && (t.remoteAuthority = e.remoteAuthority), e.folder && (t.folderUri = x.parse(e.folder)), e.workspaceIdentifier && (t.workspace = {
        id: e.workspaceIdentifier.id,
        configPath: x.parse(e.workspaceIdentifier.configURIPath)
    }), t;
}
function XQe(e) {
    return {
        lastActiveWindow: e.lastActiveWindow && g2(e.lastActiveWindow),
        lastPluginDevelopmentHostWindow: e.lastPluginDevelopmentHostWindow && g2(e.lastPluginDevelopmentHostWindow),
        openedWindows: e.openedWindows.map((t)=>g2(t)),
        lastNonExtensionWindowWasOpenOnShutdown: e.lastNonExtensionWindowWasOpenOnShutdown
    };
}
function g2(e) {
    return {
        workspaceIdentifier: e.workspace && {
            id: e.workspace.id,
            configURIPath: e.workspace.configPath.toString()
        },
        folder: e.folderUri && e.folderUri.toString(),
        backupPath: e.backupPath,
        remoteAuthority: e.remoteAuthority,
        uiState: e.uiState
    };
}
var Da;
export { Da, JQe, XQe, g2, h2, jQe };
var __wakaru_Afe_initialized = false;
export function Afe() {
if (__wakaru_Afe_initialized) return;
__wakaru_Afe_initialized = true;
"use strict";
h(), le(), j(), oe(), Ft(), ye(), at(), Vt(), te(), br(), Tu(), pt(), hp(), bn(), Da = class extends J {
    constructor(e, t, n, r, s){
        super(), this.windowsMainService = e, this.stateService = t, this.lifecycleMainService = n, this.logService = r, this.configurationService = s, this.lastClosedState = void 0, this.windowCloseInProgress = !1, this.closeInProgressReset = this._register(new Ut), this.shuttingDown = !1, this._state = JQe(this.stateService.getItem(Da.windowsStateStorageKey)), this.registerListeners();
    }
    get state() {
        return this._state;
    }
    hasStoredNormalWindowState() {
        return this.state.openedWindows.length > 0 || this.state.lastActiveWindow !== void 0;
    }
    getRestorableLastWindow() {
        return this.lastClosedState ?? this._state.lastActiveWindow;
    }
    rememberFocusedWindow(e) {
        !e || e.isExtensionDevelopmentHost || e.config?.shadowWindowForWorkspaceId || e.config?.windowInWindow !== void 0 || (this.lastFocusedState = this.toWindowState(e));
    }
    markWindowCloseInProgress() {
        this.closeBurstPinnedState || (this.closeBurstPinnedState = this.lastFocusedState), this.windowCloseInProgress = !0, this.closeInProgressReset.value = Hn(()=>{
            this.endCloseBurstFreeze();
        }, Da.closeBurstFreezeMs);
    }
    endCloseBurstFreeze() {
        if (this.shuttingDown) return;
        this.windowCloseInProgress = !1;
        const e = this.windowsMainService.getWindows();
        if (e.length === 0) return;
        const t = new Set(e.map((n)=>n.id));
        this.closeBurstPinnedState?.windowId !== void 0 && !t.has(this.closeBurstPinnedState.windowId) && (this.rememberFocusedWindow(this.windowsMainService.getFocusedWindow() ?? this.windowsMainService.getLastActiveWindow()), this.closeBurstPinnedState = void 0);
    }
    registerListeners() {
        ll.app.on("browser-window-blur", ()=>{
            !this.shuttingDown && !this.windowCloseInProgress && this.saveWindowsState();
        }), ll.app.on("browser-window-focus", (e, t)=>{
            if (this.shuttingDown || this.windowCloseInProgress) return;
            const n = (t && this.windowsMainService.getWindows().find((r)=>r.win === t)) ?? this.windowsMainService.getFocusedWindow();
            this.rememberFocusedWindow(n);
        }), this._register(this.lifecycleMainService.onBeforeCloseWindow((e)=>this.onBeforeCloseWindow(e))), this._register(this.lifecycleMainService.onBeforeShutdown(()=>this.onBeforeShutdown())), this._register(this.windowsMainService.onDidChangeWindowsCount((e)=>{
            e.newCount - e.oldCount > 0 && (this.lastClosedState = void 0, this.windowCloseInProgress = !1, this.closeBurstPinnedState = void 0, this.closeInProgressReset.clear());
        })), this._register(this.windowsMainService.onDidDestroyWindow((e)=>this.onBeforeCloseWindow(e)));
    }
    onBeforeShutdown() {
        this.shuttingDown = !0, this.saveWindowsState();
    }
    saveWindowsState() {
        !this.shuttingDown && !this.windowCloseInProgress && this.rememberFocusedWindow(this.windowsMainService.getLastActiveWindow());
        const e = new Set, t = this.windowsMainService.getWindows().filter((l)=>!l.isExtensionDevelopmentHost && !l.config?.shadowWindowForWorkspaceId && l.config?.windowInWindow === void 0);
        let n, r = this.windowsMainService.getLastActiveWindow();
        (!r || r.isExtensionDevelopmentHost || r.config?.shadowWindowForWorkspaceId || r.config?.windowInWindow !== void 0) && (r = t[0]), r && (n = this.toWindowState(r), n.uiState.mode === 3 && e.add(n.uiState.display));
        const s = {
            openedWindows: [],
            lastPluginDevelopmentHostWindow: this._state.lastPluginDevelopmentHostWindow,
            lastActiveWindow: jQe({
                lastClosedState: this.lastClosedState,
                liveLastActive: n,
                lastFocusedState: this.closeBurstPinnedState ?? this.lastFocusedState,
                preferLastFocused: this.shuttingDown || this.windowCloseInProgress || this.closeBurstPinnedState !== void 0
            }),
            lastNonExtensionWindowWasOpenOnShutdown: this.shuttingDown ? t.length > 0 : this._state.lastNonExtensionWindowWasOpenOnShutdown
        }, i = this.windowsMainService.getWindows().find((l)=>l.isExtensionDevelopmentHost && !l.isExtensionTestHost);
        i && (s.lastPluginDevelopmentHostWindow = this.toWindowState(i), s.lastPluginDevelopmentHostWindow.uiState.mode === 3 && (e.has(s.lastPluginDevelopmentHostWindow.uiState.display) ? q && !i.win?.isSimpleFullScreen() && (s.lastPluginDevelopmentHostWindow.uiState.mode = 1) : e.add(s.lastPluginDevelopmentHostWindow.uiState.display))), this.windowsMainService.getWindowCount() > 1 && (s.openedWindows = t.map((l)=>{
            const d = this.toWindowState(l);
            return d.uiState.mode === 3 && (e.has(d.uiState.display) ? q && d.windowId !== s.lastActiveWindow?.windowId && !l.win?.isSimpleFullScreen() && (d.uiState.mode = 1) : e.add(d.uiState.display)), d;
        }));
        const a = XQe(s);
        this.stateService.setItem(Da.windowsStateStorageKey, a);
        const o = this.shuttingDown || this.lastClosedState !== void 0 || this.windowsMainService.getWindowCount() <= 1;
        o && s.lastActiveWindow && (this._state.lastActiveWindow = s.lastActiveWindow), o && s.lastPluginDevelopmentHostWindow && (this._state.lastPluginDevelopmentHostWindow = s.lastPluginDevelopmentHostWindow), this._state.lastNonExtensionWindowWasOpenOnShutdown = s.lastNonExtensionWindowWasOpenOnShutdown, this.shuttingDown && this.logService.trace("[WindowsStateHandler] onBeforeShutdown", a);
    }
    onBeforeCloseWindow(e) {
        if (this.lifecycleMainService.quitRequested) return;
        const t = this.toWindowState(e);
        e.isExtensionDevelopmentHost && !e.isExtensionTestHost ? this._state.lastPluginDevelopmentHostWindow = t : !e.isExtensionDevelopmentHost && e.openedWorkspace && !e.config?.shadowWindowForWorkspaceId && e.config?.windowInWindow === void 0 && this._state.openedWindows.forEach((n)=>{
            const r = rr(e.openedWorkspace) && n.workspace?.id === e.openedWorkspace.id, s = Zr(e.openedWorkspace) && n.folderUri && St.isEqual(n.folderUri, e.openedWorkspace.uri);
            (r || s) && (n.uiState = t.uiState);
        }), this.markWindowCloseInProgress(), this.lastFocusedState?.windowId === e.id && this.rememberFocusedWindow(e), this.windowsMainService.getWindowCount() === 1 && (this.lastClosedState = t, this.saveWindowsState());
    }
    toWindowState(e) {
        return {
            windowId: e.id,
            workspace: rr(e.openedWorkspace) ? e.openedWorkspace : void 0,
            folderUri: Zr(e.openedWorkspace) ? e.openedWorkspace.uri : void 0,
            backupPath: e.backupPath,
            remoteAuthority: e.remoteAuthority,
            uiState: e.serializeWindowState()
        };
    }
    getNewWindowState(e) {
        const t = this.doGetNewWindowState(e), n = this.configurationService.getValue("window");
        if (t.mode === 3) {
            let r;
            t.hasDefaultState ? r = !!(n?.newWindowDimensions && [
                "fullscreen",
                "inherit",
                "offset"
            ].indexOf(n.newWindowDimensions) >= 0) : r = !!(this.lifecycleMainService.wasRestarted || n?.restoreFullscreen), r || (t.mode = 1);
        }
        return t;
    }
    doGetNewWindowState(e) {
        const t = this.windowsMainService.getLastActiveWindow();
        if (!e.extensionTestsPath) {
            if (e.extensionDevelopmentPath && this.state.lastPluginDevelopmentHostWindow) return this.state.lastPluginDevelopmentHostWindow.uiState;
            const o = e.workspace;
            if (rr(o)) {
                const d = this.state.openedWindows.filter((u)=>u.workspace && u.workspace.id === o.id).map((u)=>u.uiState);
                if (d.length) return d[0];
            }
            if (Zr(o)) {
                const d = this.state.openedWindows.filter((u)=>u.folderUri && St.isEqual(u.folderUri, o.uri)).map((u)=>u.uiState);
                if (d.length) return d[0];
            } else if (e.backupPath) {
                const d = this.state.openedWindows.filter((u)=>u.backupPath === e.backupPath).map((u)=>u.uiState);
                if (d.length) return d[0];
            }
            const l = this.lastClosedState || this.state.lastActiveWindow;
            if (!t && l) return l.uiState;
        }
        let n;
        const r = ll.screen.getAllDisplays();
        if (r.length === 1) n = r[0];
        else {
            if (q) {
                const o = ll.screen.getCursorScreenPoint();
                n = ll.screen.getDisplayNearestPoint(o);
            }
            !n && t && (n = ll.screen.getDisplayMatching(t.getBounds())), n || (n = ll.screen.getPrimaryDisplay() || r[0]);
        }
        let s = ro();
        s.x = Math.round(n.bounds.x + n.bounds.width / 2 - s.width / 2), s.y = Math.round(n.bounds.y + n.bounds.height / 2 - s.height / 2);
        const i = this.configurationService.getValue("window");
        let a = !0;
        if (i?.newWindowDimensions) {
            if (i.newWindowDimensions === "maximized") s.mode = 0, a = !1;
            else if (i.newWindowDimensions === "fullscreen") s.mode = 3, a = !1;
            else if ((i.newWindowDimensions === "inherit" || i.newWindowDimensions === "offset") && t) {
                const o = t.serializeWindowState();
                o.mode === 3 ? s.mode = 3 : s = {
                    ...o,
                    zoomLevel: void 0,
                    glassMode: void 0
                }, a = s.mode !== 3 && i.newWindowDimensions === "offset";
            }
        }
        return a && (s = this.ensureNoOverlap(s)), s.hasDefaultState = !0, s;
    }
    ensureNoOverlap(e) {
        if (this.windowsMainService.getWindows().length === 0) return e;
        e.x = typeof e.x == "number" ? e.x : 0, e.y = typeof e.y == "number" ? e.y : 0;
        const t = this.windowsMainService.getWindows().map((n)=>n.getBounds());
        for(; t.some((n)=>n.x === e.x || n.y === e.y);)e.x += 30, e.y += 30;
        return e;
    }
}, Da.windowsStateStorageKey = "windowsState", Da.closeBurstFreezeMs = 500, Da = B([
    w(0, ct),
    w(1, fr),
    w(2, ht),
    w(3, Z),
    w(4, ot)
], Da);

}
