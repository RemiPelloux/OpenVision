import { Yo, dP } from "./Iwo.js";
import { It } from "./instantiation.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var T$, ySg, SSg, rxi, kSg, _h, lI, rhl, sxi, oxi, wSg, CSg, nTe;
export { CSg, SSg, T$, _h, kSg, lI, nTe, oxi, rhl, rxi, sxi, wSg, ySg };
var __wakaru_R6_initialized = false;
export function R6() {
if (__wakaru_R6_initialized) return;
__wakaru_R6_initialized = true;
"use strict";
E(), It(), Dl(), To(), T$ = Ml, ySg = "[", SSg = "]", rxi = "*", kSg = /\[(.+?)\]/g, _h = ((t)=>(t.COLOR_THEME = "workbench.colorTheme", t.FILE_ICON_THEME = "workbench.iconTheme", t.PRODUCT_ICON_THEME = "workbench.productIconTheme", t.COLOR_CUSTOMIZATIONS = "workbench.colorCustomizations", t.TOKEN_COLOR_CUSTOMIZATIONS = "editor.tokenColorCustomizations", t.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS = "editor.semanticTokenColorCustomizations", t.PREFERRED_DARK_THEME = "workbench.preferredDarkColorTheme", t.PREFERRED_LIGHT_THEME = "workbench.preferredLightColorTheme", t.PREFERRED_HC_DARK_THEME = "workbench.preferredHighContrastColorTheme", t.PREFERRED_HC_LIGHT_THEME = "workbench.preferredHighContrastLightColorTheme", t.DETECT_COLOR_SCHEME = "window.autoDetectColorScheme", t.DETECT_HC = "window.autoDetectHighContrast", t.SYSTEM_COLOR_THEME = "window.systemColorTheme", t))(_h || {}), lI = ((t)=>(t.COLOR_THEME_DARK = "Cursor Dark", t.COLOR_THEME_LIGHT = "Cursor Light", t.COLOR_THEME_HC_DARK = "Default High Contrast", t.COLOR_THEME_HC_LIGHT = "Default High Contrast Light", t.COLOR_THEME_DARK_OLD = "Default Dark+", t.COLOR_THEME_LIGHT_OLD = "Default Light+", t.FILE_ICON_THEME = "vs-seti", t.PRODUCT_ICON_THEME = "Default", t))(lI || {}), rhl = new Map([
    [
        "Cursor Light Colorblind (Beta)",
        "Cursor Light Colorblind"
    ]
]), sxi = "glass_custom_theme_support", oxi = new Map([
    [
        "Cursor Dark Colorblind",
        "Cursor Dark"
    ],
    [
        "Cursor Light High Contrast",
        "Cursor Light"
    ]
]), wSg = {
    "activityBar.activeBorder": "#0078d4",
    "activityBar.background": "#181818",
    "activityBar.border": "#2b2b2b",
    "activityBar.foreground": "#d7d7d7",
    "activityBar.inactiveForeground": "#868686",
    "editorGroup.border": "#ffffff17",
    "editorGroupHeader.tabsBackground": "#181818",
    "editorGroupHeader.tabsBorder": "#2b2b2b",
    "statusBar.background": "#181818",
    "statusBar.border": "#2b2b2b",
    "statusBar.foreground": "#cccccc",
    "statusBar.noFolderBackground": "#1f1f1f",
    "tab.activeBackground": "#1f1f1f",
    "tab.activeBorder": "#1f1f1f",
    "tab.activeBorderTop": "#0078d4",
    "tab.activeForeground": "#ffffff",
    "tab.border": "#2b2b2b",
    "textLink.foreground": "#4daafc",
    "titleBar.activeBackground": "#181818",
    "titleBar.activeForeground": "#cccccc",
    "titleBar.border": "#2b2b2b",
    "titleBar.inactiveBackground": "#1f1f1f",
    "titleBar.inactiveForeground": "#9d9d9d",
    "welcomePage.tileBackground": "#2b2b2b"
}, CSg = {
    "activityBar.activeBorder": "#005FB8",
    "activityBar.background": "#f8f8f8",
    "activityBar.border": "#e5e5e5",
    "activityBar.foreground": "#1f1f1f",
    "activityBar.inactiveForeground": "#616161",
    "editorGroup.border": "#e5e5e5",
    "editorGroupHeader.tabsBackground": "#f8f8f8",
    "editorGroupHeader.tabsBorder": "#e5e5e5",
    "statusBar.background": "#f8f8f8",
    "statusBar.border": "#e5e5e5",
    "statusBar.foreground": "#3b3b3b",
    "statusBar.noFolderBackground": "#f8f8f8",
    "tab.activeBackground": "#ffffff",
    "tab.activeBorder": "#f8f8f8",
    "tab.activeBorderTop": "#005fb8",
    "tab.activeForeground": "#3b3b3b",
    "tab.border": "#e5e5e5",
    "textLink.foreground": "#005fb8",
    "titleBar.activeBackground": "#f8f8f8",
    "titleBar.activeForeground": "#1e1e1e",
    "titleBar.border": "#E5E5E5",
    "titleBar.inactiveBackground": "#f8f8f8",
    "titleBar.inactiveForeground": "#8b949e",
    "welcomePage.tileBackground": "#f3f3f3"
}, ((t)=>{
    function e(r) {
        return r && {
            _extensionId: r.extensionId,
            _extensionIsBuiltin: r.extensionIsBuiltin,
            _extensionName: r.extensionName,
            _extensionPublisher: r.extensionPublisher
        };
    }
    t.toJSONObject = e;
    function n(r) {
        if (r && Yo(r._extensionId) && dP(r._extensionIsBuiltin) && Yo(r._extensionName) && Yo(r._extensionPublisher)) return {
            extensionId: r._extensionId,
            extensionIsBuiltin: r._extensionIsBuiltin,
            extensionName: r._extensionName,
            extensionPublisher: r._extensionPublisher
        };
    }
    t.fromJSONObject = n;
    function i(r, s, o = !1) {
        return {
            extensionPublisher: r,
            extensionId: `${r}.${s}`,
            extensionName: s,
            extensionIsBuiltin: o
        };
    }
    t.fromName = i;
})(nTe || (nTe = {}));

}
