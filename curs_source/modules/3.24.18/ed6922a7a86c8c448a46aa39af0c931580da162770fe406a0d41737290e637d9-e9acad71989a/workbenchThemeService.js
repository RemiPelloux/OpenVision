import { Sx, Xr } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var fF, PPh, LPh, CBn, NPh, Lp, N2, Oxo, Fxo, Wer, OPh, FPh, Q_e;
export { CBn, FPh, Fxo, LPh, Lp, N2, NPh, OPh, Oxo, PPh, Q_e, Wer, fF };
var __wakaru_K6_initialized = false;
export function K6() {
if (__wakaru_K6_initialized) return;
__wakaru_K6_initialized = true;
"use strict";
x(), Ze(), as(), gr(), fF = $r, PPh = "[", LPh = "]", CBn = "*", NPh = /\[(.+?)\]/g, Lp = ((e)=>(e.COLOR_THEME = "workbench.colorTheme", e.FILE_ICON_THEME = "workbench.iconTheme", e.PRODUCT_ICON_THEME = "workbench.productIconTheme", e.COLOR_CUSTOMIZATIONS = "workbench.colorCustomizations", e.TOKEN_COLOR_CUSTOMIZATIONS = "editor.tokenColorCustomizations", e.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS = "editor.semanticTokenColorCustomizations", e.PREFERRED_DARK_THEME = "workbench.preferredDarkColorTheme", e.PREFERRED_LIGHT_THEME = "workbench.preferredLightColorTheme", e.PREFERRED_HC_DARK_THEME = "workbench.preferredHighContrastColorTheme", e.PREFERRED_HC_LIGHT_THEME = "workbench.preferredHighContrastLightColorTheme", e.DETECT_COLOR_SCHEME = "window.autoDetectColorScheme", e.DETECT_HC = "window.autoDetectHighContrast", e.SYSTEM_COLOR_THEME = "window.systemColorTheme", e))(Lp || {}), N2 = ((e)=>(e.COLOR_THEME_DARK = "Cursor Dark", e.COLOR_THEME_LIGHT = "Cursor Light", e.COLOR_THEME_HC_DARK = "Default High Contrast", e.COLOR_THEME_HC_LIGHT = "Default High Contrast Light", e.COLOR_THEME_DARK_OLD = "Default Dark+", e.COLOR_THEME_LIGHT_OLD = "Default Light+", e.FILE_ICON_THEME = "vs-seti", e.PRODUCT_ICON_THEME = "Default", e))(N2 || {}), Oxo = new Map([
    [
        "Cursor Light Colorblind (Beta)",
        "Cursor Light Colorblind"
    ]
]), Fxo = "glass_custom_theme_support", Wer = new Map([
    [
        "Cursor Dark Colorblind",
        "Cursor Dark"
    ],
    [
        "Cursor Light High Contrast",
        "Cursor Light"
    ]
]), OPh = {
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
}, FPh = {
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
}, ((e)=>{
    function t(r) {
        return r && {
            _extensionId: r.extensionId,
            _extensionIsBuiltin: r.extensionIsBuiltin,
            _extensionName: r.extensionName,
            _extensionPublisher: r.extensionPublisher
        };
    }
    e.toJSONObject = t;
    function n(r) {
        if (r && Xr(r._extensionId) && Sx(r._extensionIsBuiltin) && Xr(r._extensionName) && Xr(r._extensionPublisher)) return {
            extensionId: r._extensionId,
            extensionIsBuiltin: r._extensionIsBuiltin,
            extensionName: r._extensionName,
            extensionPublisher: r._extensionPublisher
        };
    }
    e.fromJSONObject = n;
    function i(r, s, o = !1) {
        return {
            extensionPublisher: r,
            extensionId: `${r}.${s}`,
            extensionName: s,
            extensionIsBuiltin: o
        };
    }
    e.fromName = i;
})(Q_e || (Q_e = {}));

}
