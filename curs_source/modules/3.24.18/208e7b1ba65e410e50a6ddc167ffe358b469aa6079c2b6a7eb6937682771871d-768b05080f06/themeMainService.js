import { Vn } from "./arrays.js";
import { at, ot } from "./configuration.js";
import { T6, _6, f5e, k6, v6 } from "./defaultThemeBackgroundColors.js";
import { Ye, qe } from "./environmentMainService.js";
import { N, O, se } from "./event.js";
import { S6, _5e } from "./glassThemePreferenceDefaults.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { T5e } from "./osColorScheme.js";
import { Fe, ee, oe, q } from "./platform.js";
import { br, fr } from "./state.js";
import { Bt, g6 } from "./theme.js";
import { h } from "./tslib.es6.js";
import { HT, qT } from "./windowImpl.js";
import { y6, z0 } from "./windowThemePreferenceDefaults.js";
import { pt } from "./windows.js";
import Gt from "electron";
import JT from "electron";
function w(e, t) {
    return function(n, r) {
        t(n, r, e);
    };
}
function wn(e) {
    return e.filter((t)=>!!t);
}
function f6(e) {
    switch(e){
        case Bt.VS:
            return _6;
        case Bt.HC_BLACK:
            return T6;
        case Bt.HC_LIGHT:
            return k6;
        case Bt.VS_DARK:
        default:
            return v6;
    }
}
function v5e(e, t) {
    const n = e.isMacintosh && t.themeSource !== "system" ? t.macOSInterfaceStyleIsDark : t.shouldUseDarkColors;
    if (e.isWindows) {
        if (t.shouldUseHighContrastColors) return {
            dark: t.shouldUseInvertedColorScheme,
            highContrast: !0
        };
    } else if (e.isMacintosh) {
        if (t.shouldUseInvertedColorScheme || t.shouldUseHighContrastColors) return {
            dark: n,
            highContrast: !0
        };
    } else if (e.isLinux && t.shouldUseHighContrastColors) return {
        dark: !0,
        highContrast: !0
    };
    return {
        dark: n,
        highContrast: !1
    };
}
function k5e(e) {
    return e === "cursor-light-high-contrast" || e === "cursor-dark-high-contrast";
}
function w6(e) {
    return e === "cursor-light" || e === "cursor-light-high-contrast";
}
function S5e(e, t) {
    if (t.highContrast) {
        const n = nC.get(e ?? "");
        if (n !== void 0 && n === "cursor-dark-high-contrast" === t.dark) return n;
    }
    return t.dark ? "cursor-dark" : "cursor-light";
}
function up(e) {
    switch(e){
        case "cursor-light":
        case "cursor-dark":
            return "mica";
        case "cursor-light-high-contrast":
        case "cursor-dark-high-contrast":
            return "none";
        default:
            return e;
    }
}
function mp(e) {
    switch(e){
        case "cursor-light":
            return "#00FFFFFF";
        case "cursor-dark":
            return "#00000000";
        case "cursor-light-high-contrast":
            return "#01FFFFFF";
        case "cursor-dark-high-contrast":
            return "#01000000";
        default:
            return e;
    }
}
function E6(e, t, n, r) {
    const s = HT(t);
    return s === void 0 ? (n !== null && e.setVibrancy(null), e.setBackgroundColor(r), null) : (e.setBackgroundColor(qT(t)), n !== s && e.setVibrancy(s), s);
}
var Y0, J0, X0, Q0, Z0, eC, tC, nC, hc, no, KT;
function so() {
    return JT.BrowserWindow.getAllWindows().filter((e)=>!e.webContents.isOffscreen());
}
export { E6, J0, KT, Q0, S5e, X0, Y0, Z0, eC, f6, hc, k5e, mp, nC, no, so, tC, up, v5e, w, w6, wn };
var __wakaru_gc_initialized = false;
export function gc() {
if (__wakaru_gc_initialized) return;
__wakaru_gc_initialized = true;
"use strict";
h(), Vn(), se(), j(), oe(), at(), Ye(), ne(), br(), pt(), f5e(), _5e(), T5e(), g6(), y6(), Y0 = "theme", J0 = "themeBackground", X0 = "windowSplash", Q0 = "windowSplashWorkspaceOverride", Z0 = "glassSplash", eC = "glass.theme.settingsId", tC = "glass.theme.detectColorScheme", nC = new Map([
    [
        "Cursor Dark High Contrast",
        "cursor-dark-high-contrast"
    ],
    [
        "Cursor Light High Contrast",
        "cursor-light-high-contrast"
    ]
]), ((e)=>{
    e.DETECT_COLOR_SCHEME = "window.autoDetectColorScheme", e.DETECT_HC = "window.autoDetectHighContrast", e.SYSTEM_COLOR_THEME = "window.systemColorTheme";
})(hc || (hc = {})), no = Q("themeMainService"), KT = class extends J {
    constructor(e, t, n){
        super(), this.stateService = e, this.configurationService = t, this.environmentMainService = n, this._onDidChangeColorScheme = this._register(new N), this.onDidChangeColorScheme = this._onDidChangeColorScheme.event, this.glassWindows = new WeakSet, this.windowVibrancyState = new WeakMap, this.windowGlassMaterialState = new WeakMap, Fe || this._register(this.configurationService.onDidChangeConfiguration((r)=>{
            (r.affectsConfiguration(hc.SYSTEM_COLOR_THEME) || r.affectsConfiguration(hc.DETECT_COLOR_SCHEME)) && this.updateSystemColorTheme();
        })), this.updateSystemColorTheme(), this._register(O.fromNodeEventEmitter(Gt.nativeTheme, "updated")(()=>this._onDidChangeColorScheme.fire(this.getColorScheme())));
    }
    updateSystemColorTheme() {
        if (q && this.resolveIsGlass()) {
            if (this.glassDetectColorScheme()) Gt.nativeTheme.themeSource = "system";
            else {
                const e = this.getGlassThemeForVibrancy({
                    isGlass: !0
                });
                Gt.nativeTheme.themeSource = w6(e) ? "light" : "dark";
            }
            return;
        }
        if (Fe || this.detectColorScheme()) Gt.nativeTheme.themeSource = "system";
        else switch(this.configurationService.getValue(hc.SYSTEM_COLOR_THEME)){
            case "dark":
                Gt.nativeTheme.themeSource = "dark";
                break;
            case "light":
                Gt.nativeTheme.themeSource = "light";
                break;
            case "auto":
                switch(this.getPreferredBaseTheme() ?? this.getStoredBaseTheme()){
                    case Bt.VS:
                        Gt.nativeTheme.themeSource = "light";
                        break;
                    case Bt.VS_DARK:
                        Gt.nativeTheme.themeSource = "dark";
                        break;
                    default:
                        Gt.nativeTheme.themeSource = "system";
                }
                break;
            default:
                Gt.nativeTheme.themeSource = "system";
                break;
        }
    }
    getColorScheme(e) {
        const t = this.resolveIsGlass(e);
        if (q && t) {
            const n = Gt.nativeTheme.shouldUseInvertedColorScheme || Gt.nativeTheme.shouldUseHighContrastColors;
            if (this.glassDetectColorScheme()) return {
                dark: Gt.nativeTheme.shouldUseDarkColors,
                highContrast: n
            };
            const r = this.getStoredGlassThemeForVibrancy();
            if (r !== void 0) return {
                dark: !w6(r),
                highContrast: n || k5e(r)
            };
            const s = this.getStoredBaseTheme();
            switch(s){
                case Bt.VS:
                    return {
                        dark: !1,
                        highContrast: n
                    };
                case Bt.VS_DARK:
                    return {
                        dark: !0,
                        highContrast: n
                    };
                case Bt.HC_BLACK:
                    return {
                        dark: !0,
                        highContrast: !0
                    };
                case Bt.HC_LIGHT:
                    return {
                        dark: !1,
                        highContrast: !0
                    };
                default:
                    return s;
            }
        }
        if (ee) {
            if (Gt.nativeTheme.shouldUseHighContrastColors) return {
                dark: Gt.nativeTheme.shouldUseInvertedColorScheme,
                highContrast: !0
            };
        } else if (q) {
            if (Gt.nativeTheme.shouldUseInvertedColorScheme || Gt.nativeTheme.shouldUseHighContrastColors) return {
                dark: Gt.nativeTheme.shouldUseDarkColors,
                highContrast: !0
            };
        } else if (Fe && Gt.nativeTheme.shouldUseHighContrastColors) return {
            dark: !0,
            highContrast: !0
        };
        return {
            dark: Gt.nativeTheme.shouldUseDarkColors,
            highContrast: !1
        };
    }
    getOSColorScheme() {
        return v5e({
            isWindows: ee,
            isMacintosh: q,
            isLinux: Fe
        }, {
            shouldUseDarkColors: Gt.nativeTheme.shouldUseDarkColors,
            shouldUseHighContrastColors: Gt.nativeTheme.shouldUseHighContrastColors,
            shouldUseInvertedColorScheme: Gt.nativeTheme.shouldUseInvertedColorScheme,
            themeSource: Gt.nativeTheme.themeSource,
            macOSInterfaceStyleIsDark: q && Gt.systemPreferences.getUserDefault("AppleInterfaceStyle", "string") === "Dark"
        });
    }
    getGlassThemeForVibrancy(e) {
        const t = this.resolveIsGlass(e);
        if (q && t) {
            const r = this.getColorScheme({
                isGlass: t
            });
            if (r.highContrast) return r.dark ? "cursor-dark-high-contrast" : "cursor-light-high-contrast";
            const s = this.getStoredGlassThemeForVibrancy();
            if (s !== void 0) return s;
            const i = this.getStoredGlassBaseTheme();
            return i !== void 0 ? this.toGlassThemeForVibrancy(i) : this.toGlassThemeForVibrancy(this.getStoredBaseTheme());
        }
        const n = this.getPreferredBaseTheme({
            isGlass: t
        }) ?? this.getStoredBaseTheme();
        return this.toGlassThemeForVibrancy(n);
    }
    toGlassThemeForVibrancy(e) {
        switch(e){
            case Bt.VS:
                return "cursor-light";
            case Bt.VS_DARK:
                return "cursor-dark";
            case Bt.HC_BLACK:
                return "cursor-dark-high-contrast";
            case Bt.HC_LIGHT:
                return "cursor-light-high-contrast";
            default:
                return e;
        }
    }
    getStoredGlassBaseTheme() {
        return this.getStoredGlassSplash()?.baseTheme ?? this.getStoredBaseTheme();
    }
    getStoredGlassSplash() {
        return this.stateService.getItem(Z0);
    }
    getGlassSplashOrDefault() {
        const e = this.getStoredGlassSplash();
        return e || {
            baseTheme: this.getStoredGlassBaseTheme(),
            background: this.getBackgroundColor({
                isGlass: !0
            })
        };
    }
    setWindowGlassMode(e, t) {
        t ? this.glassWindows.add(e) : (this.glassWindows.delete(e), this.windowVibrancyState.delete(e), this.windowGlassMaterialState.delete(e), ee && e.setBackgroundMaterial("none")), this.updateSystemColorTheme();
    }
    isWindowGlassMode(e) {
        return this.glassWindows.has(e);
    }
    getPreferredBaseTheme(e) {
        const t = this.resolveIsGlass(e);
        if (q && t) return;
        const n = this.getColorScheme({
            isGlass: t
        });
        if (this.configurationService.getValue(hc.DETECT_HC) && n.highContrast) return n.dark ? Bt.HC_BLACK : Bt.HC_LIGHT;
        if (this.detectColorScheme()) return n.dark ? Bt.VS_DARK : Bt.VS;
    }
    resolveIsGlass(e) {
        return e?.isGlass !== void 0 ? e.isGlass : this.environmentMainService.args?.glass === !0 || so().some((t)=>this.isWindowGlassMode(t));
    }
    getBackgroundColor(e) {
        if (this.resolveIsGlass(e)) {
            const r = this.getStoredGlassSplash();
            return r?.background ? r.background : f6(this.getStoredGlassBaseTheme());
        }
        const t = this.getPreferredBaseTheme(e), n = this.getStoredBaseTheme();
        if (t === void 0 || t === n) {
            const r = this.stateService.getItem(J0, null);
            if (r) return r;
        }
        return f6(t ?? n);
    }
    getStoredBaseTheme() {
        switch(this.stateService.getItem(Y0, Bt.VS_DARK).split(" ")[0]){
            case Bt.VS:
                return Bt.VS;
            case Bt.HC_BLACK:
                return Bt.HC_BLACK;
            case Bt.HC_LIGHT:
                return Bt.HC_LIGHT;
            default:
                return Bt.VS_DARK;
        }
    }
    detectColorScheme() {
        return this.configurationService.getValue(hc.DETECT_COLOR_SCHEME) ?? z0;
    }
    glassDetectColorScheme() {
        return this.stateService.getItem(tC, S6);
    }
    glassStoredSettingsId() {
        return this.stateService.getItem(eC, void 0);
    }
    getStoredGlassThemeForVibrancy() {
        if (this.glassDetectColorScheme()) return S5e(this.glassStoredSettingsId(), {
            dark: Gt.nativeTheme.shouldUseDarkColors,
            highContrast: Gt.nativeTheme.shouldUseInvertedColorScheme || Gt.nativeTheme.shouldUseHighContrastColors
        });
        const e = this.getStoredGlassSplash();
        if (e !== void 0) return this.toGlassThemeForVibrancy(e.baseTheme);
        const t = this.glassStoredSettingsId();
        if (t === void 0) return;
        const n = nC.get(t);
        return n !== void 0 ? n : t.toLowerCase().includes("light") ? "cursor-light" : "cursor-dark";
    }
    saveWindowSplash(e, t, n) {
        const r = typeof e == "number" ? this.isGlassWindow(e) : this.environmentMainService.args?.glass === !0, s = q && r ? this.getColorScheme({
            isGlass: r
        }) : void 0, i = this.updateWindowSplashOverride(t, n);
        if (this.stateService.setItems(wn([
            {
                key: Y0,
                data: n.baseTheme
            },
            {
                key: J0,
                data: n.colorInfo.background
            },
            {
                key: X0,
                data: n
            },
            i ? {
                key: Q0,
                data: i
            } : void 0
        ])), typeof e == "number" && this.updateBackgroundColor(e, n), this.updateSystemColorTheme(), s !== void 0) {
            const a = this.getColorScheme({
                isGlass: r
            });
            (s.dark !== a.dark || s.highContrast !== a.highContrast) && this._onDidChangeColorScheme.fire(a);
        }
    }
    saveGlassSplash(e, t) {
        const { splash: n, glassPreference: r } = t, s = typeof e == "number" ? this.isGlassWindow(e) : this.environmentMainService.args?.glass === !0, i = q && s ? this.getColorScheme({
            isGlass: s
        }) : void 0, a = [
            {
                key: Z0,
                data: n
            }
        ];
        if (r !== void 0 && a.push({
            key: tC,
            data: r.detectColorScheme
        }, {
            key: eC,
            data: r.settingsId
        }), this.stateService.setItems(a), typeof e == "number" && this.updateGlassBackgroundColor(e, n.background), this.updateSystemColorTheme(), i !== void 0) {
            const o = this.getColorScheme({
                isGlass: s
            });
            (i.dark !== o.dark || i.highContrast !== o.highContrast) && this._onDidChangeColorScheme.fire(o);
        }
    }
    isGlassWindow(e) {
        for (const t of so())if (t.id === e) return this.isWindowGlassMode(t);
        return !1;
    }
    updateWindowSplashOverride(e, t) {
        let n, r = !1;
        if (e) {
            n = {
                ...this.getWindowSplashOverride()
            };
            const [s, i] = n.layoutInfo?.auxiliarySideBarWidth ?? [
                0,
                []
            ];
            if (t.layoutInfo?.auxiliarySideBarWidth) s !== t.layoutInfo.auxiliarySideBarWidth && (typeof n.layoutInfo.auxiliarySideBarWidth > "u" ? n.layoutInfo.auxiliarySideBarWidth = [
                t.layoutInfo.auxiliarySideBarWidth,
                i
            ] : n.layoutInfo.auxiliarySideBarWidth[0] = t.layoutInfo.auxiliarySideBarWidth, r = !0), i.includes(e.id) || (i.push(e.id), r = !0);
            else {
                const a = i.indexOf(e.id);
                a > -1 && (i.splice(a, 1), r = !0);
            }
        }
        return r ? n : void 0;
    }
    updateBackgroundColor(e, t) {
        for (const n of so())if (n.id === e) {
            if (this.isWindowGlassMode(n)) {
                const r = this.getGlassThemeForVibrancy({
                    isGlass: !0
                });
                if (q) this.windowVibrancyState.set(n, E6(n, r, this.windowVibrancyState.get(n), t.colorInfo.background));
                else if (ee) {
                    n.setVibrancy(null), this.windowVibrancyState.delete(n);
                    const s = up(r), i = this.windowGlassMaterialState.has(n), a = i ? this.windowGlassMaterialState.get(n) : void 0;
                    s === "none" ? ((!i || a !== "none") && n.setBackgroundMaterial("none"), n.setBackgroundColor(t.colorInfo.background), this.windowGlassMaterialState.set(n, "none")) : ((!i || a !== "mica") && n.setBackgroundMaterial("mica"), n.setBackgroundColor(mp(r)), this.windowGlassMaterialState.set(n, "mica"));
                } else n.setVibrancy(null), n.setBackgroundColor(t.colorInfo.background), this.windowVibrancyState.delete(n), this.windowGlassMaterialState.delete(n);
            } else n.setBackgroundColor(t.colorInfo.background), this.windowVibrancyState.delete(n), this.windowGlassMaterialState.delete(n);
            break;
        }
    }
    updateGlassBackgroundColor(e, t) {
        for (const n of so()){
            if (n.id !== e || !this.isWindowGlassMode(n)) continue;
            const r = this.getGlassThemeForVibrancy({
                isGlass: !0
            });
            if (q) this.windowVibrancyState.set(n, E6(n, r, this.windowVibrancyState.get(n), t));
            else if (ee) {
                n.setVibrancy(null), this.windowVibrancyState.delete(n);
                const s = up(r), i = this.windowGlassMaterialState.has(n), a = i ? this.windowGlassMaterialState.get(n) : void 0;
                s === "none" ? ((!i || a !== "none") && n.setBackgroundMaterial("none"), n.setBackgroundColor(t), this.windowGlassMaterialState.set(n, "none")) : ((!i || a !== "mica") && n.setBackgroundMaterial("mica"), n.setBackgroundColor(mp(r)), this.windowGlassMaterialState.set(n, "mica"));
            } else n.setVibrancy(null), n.setBackgroundColor(t), this.windowVibrancyState.delete(n), this.windowGlassMaterialState.delete(n);
            break;
        }
    }
    getWindowSplash(e) {
        const t = this.stateService.getItem(X0);
        if (!t?.layoutInfo) return t;
        let n;
        if (e) {
            const [r, s] = this.getWindowSplashOverride().layoutInfo.auxiliarySideBarWidth ?? [
                0,
                []
            ];
            s.includes(e.id) && (n = r);
        }
        return {
            ...t,
            layoutInfo: {
                ...t.layoutInfo,
                auxiliarySideBarWidth: typeof n == "number" ? n : 0
            }
        };
    }
    getWindowSplashOverride() {
        return this.stateService.getItem(Q0, {
            layoutInfo: {
                auxiliarySideBarWidth: [
                    0,
                    []
                ]
            }
        });
    }
}, KT = B([
    w(0, fr),
    w(1, ot),
    w(2, qe)
], KT);

}
