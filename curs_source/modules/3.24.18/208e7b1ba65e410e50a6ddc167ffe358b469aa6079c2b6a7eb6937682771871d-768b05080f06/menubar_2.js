import { le, xr } from "./async.js";
import { Dc, Xp } from "./auxiliaryWindows.js";
import { Ie, Mt } from "./cancellation.js";
import { at, ot } from "./configuration.js";
import { E } from "./configurationRegistry.js";
import { Ye, qe } from "./environmentMainService.js";
import { B } from "./ipc.js";
import { ha } from "./labels.js";
import { J, j } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Aze, tpe } from "./menubar.js";
import { ZD, rpe } from "./menubarFallbackHandlers.js";
import { Gi, _s, rC } from "./nativeHostMainService.js";
import { Ne } from "./nls.js";
import { Rs, oe, q } from "./platform.js";
import { Tt, et } from "./productService.js";
import { br, fr } from "./state.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Eo, tl } from "./update.js";
import { x, ye } from "./uri.js";
import { Di } from "./window.js";
import { ct, pt } from "./windows.js";
import { Eu, wu } from "./workspacesHistoryMainService.js";
import { MenuItem as Et } from "electron";
import { Menu as Gn } from "electron";
import { BrowserWindow as xw } from "electron";
function M3(e, t) {
    return q || t ? e.replace(/\(&&\w\)|&&/g, "").replace(/&/g, q ? "&" : "&&") : e.replace(/&&|&/g, (n)=>n === "&" ? "&&" : "&");
}
function fc(e, t) {
    return t || (t = rC(e)), t === "native";
}
function YT(e, t) {
    return (t?.isMacintosh ?? q) && t?.isGlassWindow !== !0 && e?.nativeTabs === !0;
}
function Xme(e) {
    return e.submenu !== void 0;
}
function Qme(e) {
    return e.id === "vscode.menubar.separator";
}
function Zme(e) {
    return e.uri !== void 0;
}
function epe(e) {
    return !Xme(e) && !Qme(e) && !Zme(e);
}
function Qi() {
    return new Et({
        type: "separator"
    });
}
var Fw, rl;
export { Fw, M3, Qi, Qme, Xme, YT, Zme, epe, fc, rl };
var __wakaru_Pze_initialized = false;
export function Pze() {
if (__wakaru_Pze_initialized) return;
__wakaru_Pze_initialized = true;
"use strict";
h(), le(), Mt(), ha(), oe(), ye(), Ne(), Xp(), at(), Ye(), Vt(), te(), Aze(), Gi(), Tt(), br(), Eo(), Di(), pt(), Eu(), j(), rpe(), Fw = "menu", rl = class extends J {
    constructor(e, t, n, r, s, i, a, o, l, d, u, m){
        super(), this.updateService = e, this.configurationService = t, this.windowsMainService = n, this.environmentMainService = r, this.workspacesHistoryMainService = s, this.stateService = i, this.lifecycleMainService = a, this.logService = o, this.nativeHostMainService = l, this.productService = d, this.auxiliaryWindowsMainService = u, this.fallbackHandlersProvider = m, this.fallbackMenuHandlers = Object.create(null), this.menuUpdater = new xr(()=>this.doUpdateMenu(), 0), this.menuGC = new xr(()=>{
            this.oldMenus = [];
        }, 1e4), this.menubarMenus = Object.create(null), this.keybindings = Object.create(null), (q || fc(t)) && this.restoreCachedMenubarData(), this.addFallbackHandlers(), this.closedLastWindow = !1, this.noActiveMainWindow = !1, this.focusedWindowIsGlass = !1, this.oldMenus = [], this.install(), this.registerListeners();
    }
    restoreCachedMenubarData() {
        const e = this.stateService.getItem(rl.lastKnownMenubarStorageKey);
        e && (e.menus && (this.menubarMenus = e.menus), e.keybindings && (this.keybindings = e.keybindings));
    }
    addFallbackHandlers() {
        this.fallbackMenuHandlers["workbench.action.files.newUntitledFile"] = (n, r, s)=>{
            this.runActionInRenderer({
                type: "commandId",
                commandId: "workbench.action.files.newUntitledFile"
            }) || this.windowsMainService.openEmptyWindow({
                context: 2,
                contextWindowId: r?.id
            });
        }, this.fallbackMenuHandlers["workbench.action.newWindow"] = (n, r, s)=>this.windowsMainService.openEmptyWindow({
                context: 2,
                contextWindowId: r?.id
            }), this.fallbackMenuHandlers["workbench.action.files.openFileFolder"] = (n, r, s)=>this.nativeHostMainService.pickFileFolderAndOpen(void 0, {
                forceNewWindow: this.isOptionClick(s),
                telemetryExtraData: {
                    from: Fw
                }
            }), this.fallbackMenuHandlers["workbench.action.files.openFolder"] = (n, r, s)=>this.nativeHostMainService.pickFolderAndOpen(void 0, {
                forceNewWindow: this.isOptionClick(s),
                telemetryExtraData: {
                    from: Fw
                }
            }), this.fallbackMenuHandlers["workbench.action.openWorkspace"] = (n, r, s)=>this.nativeHostMainService.pickWorkspaceAndOpen(void 0, {
                forceNewWindow: this.isOptionClick(s),
                telemetryExtraData: {
                    from: Fw
                }
            }), Object.assign(this.fallbackMenuHandlers, this.fallbackHandlersProvider.createHandlers()), this.fallbackMenuHandlers["workbench.action.clearRecentFiles"] = ()=>this.workspacesHistoryMainService.clearRecentlyOpened({
                confirm: !0
            });
        const e = this.productService.reportIssueUrl;
        if (e) {
            const n = ()=>this.openUrl(e);
            this.fallbackMenuHandlers["workbench.action.openIssueReporter"] = n, this.fallbackMenuHandlers["aiFeedback.action.open"] = n;
        }
        const t = this.productService.licenseUrl;
        t && (this.fallbackMenuHandlers["workbench.action.openLicenseUrl"] = ()=>{
            if (Rs) {
                const n = t.indexOf("?") > 0 ? "&" : "?";
                this.openUrl(`${t}${n}lang=${Rs}`);
            } else this.openUrl(t);
        });
    }
    registerListeners() {
        this._register(this.lifecycleMainService.onWillShutdown(()=>this.willShutdown = !0)), this._register(this.windowsMainService.onDidChangeWindowsCount((e)=>this.onDidChangeWindowsCount(e))), this._register(this.nativeHostMainService.onDidBlurMainWindow(()=>this.onDidChangeWindowFocus())), this._register(this.nativeHostMainService.onDidFocusMainWindow(()=>this.onDidChangeWindowFocus()));
    }
    get currentEnableMenuBarMnemonics() {
        return !1;
    }
    get currentEnableNativeTabs() {
        return YT(this.configurationService.getValue("window"), {
            isGlassWindow: this.focusedWindowIsGlass
        });
    }
    updateMenu(e, t) {
        this.menubarMenus = e.menus, this.keybindings = e.keybindings, this.stateService.setItem(rl.lastKnownMenubarStorageKey, e), this.scheduleUpdateMenu();
    }
    scheduleUpdateMenu() {
        this.menuUpdater.schedule();
    }
    doUpdateMenu() {
        this.willShutdown || setTimeout(()=>{
            this.willShutdown || this.install();
        }, 10);
    }
    onDidChangeWindowsCount(e) {
        q && (e.oldCount === 0 && e.newCount > 0 || e.oldCount > 0 && e.newCount === 0) && (this.closedLastWindow = e.newCount === 0, this.scheduleUpdateMenu());
    }
    onDidChangeWindowFocus() {
        q && (this.refreshFocusDerivedState(), this.scheduleUpdateMenu());
    }
    refreshFocusDerivedState() {
        const e = xw.getFocusedWindow();
        if (this.noActiveMainWindow = !e || !!this.auxiliaryWindowsMainService.getWindowByWebContents(e.webContents), e) {
            const t = this.windowsMainService.getWindowById(e.id);
            this.focusedWindowIsGlass = t?.config?.glass === !0;
        } else this.focusedWindowIsGlass = !1;
    }
    install() {
        const e = Gn.getApplicationMenu();
        if (e && this.oldMenus.push(e), this.refreshFocusDerivedState(), Object.keys(this.menubarMenus).length === 0) {
            this.doSetApplicationMenu(q ? new Gn : null);
            return;
        }
        const t = new Gn;
        let n;
        if (q) {
            const s = new Gn;
            n = new Et({
                label: this.productService.nameShort,
                submenu: s
            }), this.setMacApplicationMenu(s), t.append(n);
        }
        if (this.shouldDrawMenu("File")) {
            const s = new Gn, i = new Et({
                label: this.mnemonicLabel(E(2121, null)),
                submenu: s
            });
            this.setMenuById(s, "File"), t.append(i);
        }
        if (this.shouldDrawMenu("Edit")) {
            const s = new Gn, i = new Et({
                label: this.mnemonicLabel(E(2122, null)),
                submenu: s
            });
            this.setMenuById(s, "Edit"), t.append(i);
        }
        if (this.shouldDrawMenu("Selection")) {
            const s = new Gn, i = new Et({
                label: this.mnemonicLabel(E(2123, null)),
                submenu: s
            });
            this.setMenuById(s, "Selection"), t.append(i);
        }
        if (this.shouldDrawMenu("View")) {
            const s = new Gn, i = new Et({
                label: this.mnemonicLabel(E(2124, null)),
                submenu: s
            });
            this.setMenuById(s, "View"), t.append(i);
        }
        if (this.shouldDrawMenu("Go")) {
            const s = new Gn, i = new Et({
                label: this.mnemonicLabel(E(2125, null)),
                submenu: s
            });
            this.setMenuById(s, "Go"), t.append(i);
        }
        if (this.shouldDrawMenu("Run")) {
            const s = new Gn, i = new Et({
                label: this.mnemonicLabel(E(2126, null)),
                submenu: s
            });
            this.setMenuById(s, "Run"), t.append(i);
        }
        if (this.shouldDrawMenu("Terminal")) {
            const s = new Gn, i = new Et({
                label: this.mnemonicLabel(E(2127, null)),
                submenu: s
            });
            this.setMenuById(s, "Terminal"), t.append(i);
        }
        let r;
        if (this.shouldDrawMenu("Window")) {
            const s = new Gn;
            r = new Et({
                label: this.mnemonicLabel(E(2128, null)),
                submenu: s,
                role: "window"
            }), this.setMacWindowMenu(s);
        }
        if (r && t.append(r), this.shouldDrawMenu("Help")) {
            const s = new Gn;
            this.setMenuById(s, "Help");
            const i = new Et({
                label: this.mnemonicLabel(E(2129, null)),
                submenu: s,
                role: "help"
            });
            t.append(i);
        }
        t.items && t.items.length > 0 ? this.doSetApplicationMenu(t) : this.doSetApplicationMenu(null), this.menuGC.schedule();
    }
    doSetApplicationMenu(e) {
        if (Gn.setApplicationMenu(e), e) for (const t of this.auxiliaryWindowsMainService.getWindows())t.win?.setMenu(null);
    }
    setMacApplicationMenu(e) {
        const t = this.createMenuItem(E(2130, null, this.productService.nameLong), "workbench.action.showAboutDialog"), n = this.getUpdateMenuItems();
        let r;
        if (this.shouldDrawMenu("Preferences")) {
            const f = new Gn;
            this.setMenuById(f, "Preferences"), r = new Et({
                label: this.mnemonicLabel(E(2131, null)),
                submenu: f
            });
        }
        const s = new Gn, i = new Et({
            label: E(2132, null),
            role: "services",
            submenu: s
        }), a = new Et({
            label: E(2133, null, this.productService.nameLong),
            role: "hide",
            accelerator: "Command+H"
        }), o = new Et({
            label: E(2134, null),
            role: "hideOthers",
            accelerator: "Command+Alt+H"
        }), l = new Et({
            label: E(2135, null),
            role: "unhide"
        }), d = this.likeAction("workbench.action.quit", {
            label: E(2136, null, this.productService.nameLong),
            click: async (f, v, T)=>{
                const S = this.windowsMainService.getLastActiveWindow();
                (this.windowsMainService.getWindowCount() === 0 || xw.getFocusedWindow() || S?.win?.isMinimized()) && await this.confirmBeforeQuit(T) && this.nativeHostMainService.quit(void 0);
            }
        });
        this.windowsMainService.getWindowCount() === 0 && !d.accelerator && (d.accelerator = "Command+Q");
        const u = new Et(d), m = [
            t
        ];
        if (m.push(...n), r) m.push(Qi(), r);
        else if (this.focusedWindowIsGlass) {
            const f = this.menubarMenus.GlassMacApplication, v = f?.items?.length ? f.items : [];
            if (v.length > 0) {
                m.push(Qi());
                for (const T of v)epe(T) && m.push(this.createMenuItem(T.label, T.id));
            }
        }
        m.push(Qi(), i, Qi(), a, o, l, Qi(), u), m.forEach((f)=>e.append(f));
    }
    async confirmBeforeQuit(e) {
        if (this.windowsMainService.getWindowCount() === 0) return !0;
        const t = this.configurationService.getValue("window.confirmBeforeClose");
        if (t === "always" || t === "keyboardOnly" && this.isKeyboardEvent(e)) {
            const { response: n } = await this.nativeHostMainService.showMessageBox(this.windowsMainService.getFocusedWindow()?.id, {
                type: "question",
                buttons: [
                    E(2137, null),
                    E(2138, null)
                ],
                message: E(2139, null)
            });
            return n === 0;
        }
        return !0;
    }
    shouldDrawMenu(e) {
        if (!q && !fc(this.configurationService)) return !1;
        if (this.focusedWindowIsGlass) {
            if (q && e === "Window") {
                const n = this.windowsMainService.getWindowCount();
                return n === 0 && this.closedLastWindow || n > 0;
            }
            if (this.menubarMenus.Window) return !1;
            const t = this.menubarMenus[e];
            return !!t && t.items.length > 0;
        }
        switch(e){
            case "File":
            case "Help":
                if (q) return this.windowsMainService.getWindowCount() === 0 && this.closedLastWindow || this.windowsMainService.getWindowCount() > 0 && this.noActiveMainWindow || !!this.menubarMenus && !!this.menubarMenus[e];
            case "Window":
                if (q) return this.windowsMainService.getWindowCount() === 0 && this.closedLastWindow || this.windowsMainService.getWindowCount() > 0 && this.noActiveMainWindow || !!this.menubarMenus;
            default:
                return this.windowsMainService.getWindowCount() > 0 && !!this.menubarMenus && !!this.menubarMenus[e];
        }
    }
    setMenu(e, t) {
        t.forEach((n)=>{
            if (Qme(n)) e.append(Qi());
            else if (Xme(n)) {
                const r = new Gn, s = new Et({
                    label: this.mnemonicLabel(n.label),
                    submenu: r
                });
                this.setMenu(r, n.submenu.items), e.append(s);
            } else Zme(n) ? e.append(this.createOpenRecentMenuItem(n)) : epe(n) && (n.id === "workbench.action.showAboutDialog" && this.insertCheckForUpdatesItems(e), q ? this.windowsMainService.getWindowCount() === 0 && this.closedLastWindow || this.windowsMainService.getWindowCount() > 0 && this.noActiveMainWindow ? this.fallbackMenuHandlers[n.id] ? e.append(new Et(this.likeAction(n.id, {
                label: this.mnemonicLabel(n.label),
                click: this.fallbackMenuHandlers[n.id]
            }))) : e.append(this.createMenuItem(n.label, n.id, !1, n.checked)) : e.append(this.createMenuItem(n.label, n.id, n.enabled !== !1, !!n.checked)) : e.append(this.createMenuItem(n.label, n.id, n.enabled !== !1, !!n.checked)));
        });
    }
    setMenuById(e, t) {
        const r = t === "File" && q && this.windowsMainService.getWindowCount() === 0 && this.closedLastWindow ? this.menubarMenus[tpe] ?? this.menubarMenus[t] : this.menubarMenus[t];
        r && this.setMenu(e, r.items);
    }
    insertCheckForUpdatesItems(e) {
        const t = this.getUpdateMenuItems();
        t.length && (t.forEach((n)=>e.append(n)), e.append(Qi()));
    }
    createOpenRecentMenuItem(e) {
        const t = x.revive(e.uri), n = e.id, r = n === "openRecentFile" ? {
            fileUri: t
        } : n === "openRecentWorkspace" ? {
            workspaceUri: t
        } : {
            folderUri: t
        };
        return new Et(this.likeAction(n, {
            label: e.label,
            click: async (s, i, a)=>{
                const o = this.isOptionClick(a);
                (await this.windowsMainService.open({
                    context: 2,
                    cli: this.environmentMainService.args,
                    urisToOpen: [
                        r
                    ],
                    forceNewWindow: o,
                    gotoLineMode: !1,
                    remoteAuthority: e.remoteAuthority
                })).length > 0 || await this.workspacesHistoryMainService.removeRecentlyOpened([
                    t
                ]);
            }
        }, !1));
    }
    isOptionClick(e) {
        return !!(e && (!q && (e.ctrlKey || e.shiftKey) || q && (e.metaKey || e.altKey)));
    }
    isKeyboardEvent(e) {
        return !!(e.triggeredByAccelerator || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey);
    }
    createRoleMenuItem(e, t, n) {
        const r = {
            label: this.mnemonicLabel(e),
            role: n,
            enabled: !0
        };
        return new Et(this.withKeybinding(t, r));
    }
    setMacWindowMenu(e) {
        const t = new Et({
            label: E(2140, null),
            role: "minimize",
            accelerator: "Command+M",
            enabled: this.windowsMainService.getWindowCount() > 0
        }), n = new Et({
            label: E(2141, null),
            role: "zoom",
            enabled: this.windowsMainService.getWindowCount() > 0
        }), r = new Et({
            label: E(2142, null),
            role: "front",
            enabled: this.windowsMainService.getWindowCount() > 0
        }), s = this.createMenuItem(E(2143, null), "workbench.action.switchWindow"), i = [];
        this.currentEnableNativeTabs && (i.push(Qi()), i.push(this.createMenuItem(E(2144, null), "workbench.action.newWindowTab")), i.push(this.createRoleMenuItem(E(2145, null), "workbench.action.showPreviousWindowTab", "selectPreviousTab")), i.push(this.createRoleMenuItem(E(2146, null), "workbench.action.showNextWindowTab", "selectNextTab")), i.push(this.createRoleMenuItem(E(2147, null), "workbench.action.moveWindowTabToNewWindow", "moveTabToNewWindow")), i.push(this.createRoleMenuItem(E(2148, null), "workbench.action.mergeAllWindowTabs", "mergeAllWindows"))), [
            t,
            n,
            Qi(),
            s,
            ...i,
            Qi(),
            r
        ].forEach((a)=>e.append(a));
    }
    getUpdateMenuItems() {
        switch(this.updateService.state.type){
            case "idle":
                return [
                    new Et({
                        label: this.mnemonicLabel(E(2149, null)),
                        click: ()=>setTimeout(()=>{
                                this.updateService.checkForUpdates(!0);
                            }, 0)
                    })
                ];
            case "checking for updates":
                return [
                    new Et({
                        label: E(2150, null),
                        enabled: !1
                    })
                ];
            case "available for download":
                return [
                    new Et({
                        label: this.mnemonicLabel(E(2151, null)),
                        click: ()=>{
                            this.updateService.downloadUpdate();
                        }
                    })
                ];
            case "downloading":
                return [
                    new Et({
                        label: E(2152, null),
                        enabled: !1
                    })
                ];
            case "downloaded":
                return q ? [] : [
                    new Et({
                        label: this.mnemonicLabel(E(2153, null)),
                        click: ()=>{
                            this.updateService.applyUpdate();
                        }
                    })
                ];
            case "updating":
                return [
                    new Et({
                        label: E(2154, null),
                        enabled: !1
                    })
                ];
            case "ready":
                return [
                    new Et({
                        label: this.mnemonicLabel(E(2155, null)),
                        click: ()=>{
                            this.updateService.quitAndInstall();
                        }
                    })
                ];
            default:
                return [];
        }
    }
    createMenuItem(e, t, n, r) {
        const s = this.mnemonicLabel(e), i = typeof t == "function" ? t : (u, m, f)=>{
            const v = u ? u.userSettingsLabel : null;
            let T = t;
            Array.isArray(t) && (T = this.isOptionClick(f) ? t[1] : t[0]), v && f.triggeredByAccelerator ? this.runActionInRenderer({
                type: "keybinding",
                userSettingsLabel: v
            }) : this.runActionInRenderer({
                type: "commandId",
                commandId: T
            });
        }, a = typeof n == "boolean" ? n : this.windowsMainService.getWindowCount() > 0, o = typeof r == "boolean" ? r : !1, l = {
            label: s,
            click: i,
            enabled: a
        };
        o && (l.type = "checkbox", l.checked = o);
        let d;
        return typeof t == "string" ? d = t : Array.isArray(t) && (d = t[0]), q && (d === "editor.action.clipboardCutAction" || d === "glass.osEditCut" ? l.role = "cut" : d === "editor.action.clipboardCopyAction" || d === "glass.osEditCopy" ? l.role = "copy" : d === "editor.action.clipboardPasteAction" || d === "glass.osEditPaste" ? l.role = "paste" : d === "glass.osEditSelectAll" && (l.role = "selectAll"), d === "undo" ? l.click = this.makeContextAwareClickHandler(i, {
            inDevTools: (u)=>u.undo(),
            inNoWindow: ()=>Gn.sendActionToFirstResponder("undo:")
        }) : d === "redo" ? l.click = this.makeContextAwareClickHandler(i, {
            inDevTools: (u)=>u.redo(),
            inNoWindow: ()=>Gn.sendActionToFirstResponder("redo:")
        }) : d === "editor.action.selectAll" && (l.click = this.makeContextAwareClickHandler(i, {
            inDevTools: (u)=>u.selectAll(),
            inNoWindow: ()=>Gn.sendActionToFirstResponder("selectAll:")
        }))), new Et(this.withKeybinding(d, l));
    }
    makeContextAwareClickHandler(e, t) {
        return (n, r, s)=>{
            const i = xw.getFocusedWindow();
            if (!i) return t.inNoWindow();
            if (i.webContents.isDevToolsFocused() && i.webContents.devToolsWebContents) return t.inDevTools(i.webContents.devToolsWebContents);
            e(n, r || i, s);
        };
    }
    runActionInRenderer(e) {
        let t = xw.getFocusedWindow();
        if (t) {
            const r = this.auxiliaryWindowsMainService.getWindowByWebContents(t.webContents);
            r && (t = this.windowsMainService.getWindowById(r.parentId)?.win ?? null);
        }
        if (!t) {
            const r = this.windowsMainService.getLastActiveWindow();
            r?.win?.isMinimized() && (t = r.win);
        }
        const n = t ? this.windowsMainService.getWindowById(t.id) : void 0;
        if (n) {
            if (this.logService.trace("menubar#runActionInRenderer", e), q && !this.environmentMainService.isBuilt && !n.isReady && (e.type === "commandId" && e.commandId === "workbench.action.toggleDevTools" || e.type !== "commandId" && e.userSettingsLabel === "alt+cmd+i")) return !1;
            if (e.type === "commandId") {
                const r = {
                    id: e.commandId,
                    from: "menu"
                };
                n.sendWhenReady("vscode:runAction", Ie.None, r);
            } else {
                const r = {
                    userSettingsLabel: e.userSettingsLabel
                };
                n.sendWhenReady("vscode:runKeybinding", Ie.None, r);
            }
            return !0;
        } else return this.logService.trace("menubar#runActionInRenderer: no active window found", e), !1;
    }
    withKeybinding(e, t) {
        const n = typeof e == "string" ? this.keybindings[e] : void 0;
        if (n?.label) {
            if (n.isNative !== !1) t.accelerator = n.label, t.userSettingsLabel = n.userSettingsLabel;
            else if (typeof t.label == "string") {
                const r = t.label.indexOf("[");
                r >= 0 ? t.label = `${t.label.substr(0, r)} [${n.label}]` : t.label = `${t.label} [${n.label}]`;
            }
        } else t.accelerator = void 0;
        return t;
    }
    likeAction(e, t, n = !t.accelerator) {
        return n && (t = this.withKeybinding(e, t)), t;
    }
    openUrl(e) {
        this.nativeHostMainService.openExternal(void 0, e);
    }
    mnemonicLabel(e) {
        return M3(e, !this.currentEnableMenuBarMnemonics);
    }
}, rl.lastKnownMenubarStorageKey = "lastKnownMenubarData", rl = B([
    w(0, tl),
    w(1, ot),
    w(2, ct),
    w(3, qe),
    w(4, wu),
    w(5, fr),
    w(6, ht),
    w(7, Z),
    w(8, _s),
    w(9, et),
    w(10, Dc),
    w(11, ZD)
], rl);

}
