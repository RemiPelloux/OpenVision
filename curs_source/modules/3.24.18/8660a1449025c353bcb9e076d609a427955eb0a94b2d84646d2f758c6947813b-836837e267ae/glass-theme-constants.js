import { cbe } from "./cursor-core-themes.js";
import { wHr } from "./dark-colorblind.js";
import { J6i, Ny } from "./glass-theme-service.types.js";
import { Mt } from "./index_197.js";
import { Gwt } from "./ipa.js";
import { CHr } from "./light-colorblind.js";
import { Tbi } from "./light-high-contrast.js";
import { LI, NI } from "./theme.js";
import { E } from "./tslib.es6.js";
import { R6, lI } from "./workbenchThemeService.js";
var aZ, Cee, E5n, wLv, OMs, I5n;
export { Cee, E5n, I5n, OMs, aZ, wLv };
var __wakaru_e4i_initialized = false;
export function e4i() {
if (__wakaru_e4i_initialized) return;
__wakaru_e4i_initialized = true;
"use strict";
E(), Mt(), LI(), R6(), J6i(), aZ = {
    [Ny.Dark]: lI.COLOR_THEME_DARK,
    [Ny.Light]: lI.COLOR_THEME_LIGHT,
    [Ny.LightColorblind]: "Cursor Light Colorblind",
    [Ny.DarkColorblind]: "Cursor Dark Colorblind",
    [Ny.HighContrast]: "Cursor Dark High Contrast",
    [Ny.LightHighContrast]: "Cursor Light High Contrast"
}, Cee = {
    [Ny.Dark]: {
        builtInId: Ny.Dark,
        label: "Cursor Dark",
        bucket: "dark",
        settingsId: aZ[Ny.Dark],
        type: "dark",
        resolvedColors: Gwt(cbe.dark),
        bodyClass: "cursor-dark",
        vsCompat: NI.VS_DARK,
        coreTheme: cbe.dark,
        workbenchBaseSettingsId: aZ[Ny.Dark]
    },
    [Ny.Light]: {
        builtInId: Ny.Light,
        label: "Cursor Light",
        bucket: "light",
        settingsId: aZ[Ny.Light],
        type: "light",
        resolvedColors: Gwt(cbe.light),
        bodyClass: "cursor-light",
        vsCompat: NI.VS,
        coreTheme: cbe.light,
        workbenchBaseSettingsId: aZ[Ny.Light]
    },
    [Ny.LightColorblind]: {
        builtInId: Ny.LightColorblind,
        label: "Cursor Light Colorblind",
        bucket: "light",
        settingsId: aZ[Ny.LightColorblind],
        type: "light",
        resolvedColors: Gwt(CHr),
        bodyClass: "cursor-light",
        vsCompat: NI.VS,
        coreTheme: CHr,
        workbenchBaseSettingsId: aZ[Ny.LightColorblind]
    },
    [Ny.DarkColorblind]: {
        builtInId: Ny.DarkColorblind,
        label: "Cursor Dark Colorblind",
        bucket: "dark",
        settingsId: aZ[Ny.DarkColorblind],
        type: "dark",
        resolvedColors: Gwt(wHr),
        bodyClass: "cursor-dark",
        vsCompat: NI.VS_DARK,
        coreTheme: wHr,
        workbenchBaseSettingsId: aZ[Ny.DarkColorblind]
    },
    [Ny.HighContrast]: {
        builtInId: Ny.HighContrast,
        label: "Cursor Dark High Contrast",
        bucket: "darkHighContrast",
        settingsId: aZ[Ny.HighContrast],
        type: "dark",
        resolvedColors: Gwt(cbe.highContrast),
        bodyClass: "cursor-high-contrast",
        vsCompat: NI.HC_BLACK,
        coreTheme: cbe.highContrast,
        workbenchBaseSettingsId: aZ[Ny.HighContrast]
    },
    [Ny.LightHighContrast]: {
        builtInId: Ny.LightHighContrast,
        label: "Cursor Light High Contrast",
        bucket: "lightHighContrast",
        settingsId: aZ[Ny.LightHighContrast],
        type: "light",
        resolvedColors: Gwt(Tbi),
        bodyClass: "cursor-high-contrast",
        vsCompat: NI.HC_LIGHT,
        coreTheme: Tbi,
        workbenchBaseSettingsId: aZ[Ny.LightHighContrast]
    }
}, E5n = [
    Cee[Ny.Dark],
    Cee[Ny.Light],
    Cee[Ny.LightColorblind],
    Cee[Ny.DarkColorblind],
    Cee[Ny.HighContrast],
    Cee[Ny.LightHighContrast]
], wLv = {
    dataThemes: {
        light: [
            "cursor-light",
            "light"
        ],
        dark: [
            "cursor-dark",
            "dark"
        ]
    },
    classNames: {
        light: [
            "vscode-light",
            "light",
            NI.VS,
            NI.HC_LIGHT
        ],
        dark: [
            "vscode-dark",
            "dark",
            NI.VS_DARK,
            NI.HC_BLACK
        ]
    },
    fallback: "dark"
}, OMs = "data-cursor-glass-mode", I5n = "follow-system";

}
