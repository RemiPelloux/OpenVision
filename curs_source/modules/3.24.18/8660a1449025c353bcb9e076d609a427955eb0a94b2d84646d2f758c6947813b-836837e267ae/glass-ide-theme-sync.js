import { e4i } from "./glass-theme-constants.js";
import { n4i } from "./glass-theme-utils.js";
import { E } from "./tslib.es6.js";
import { R6, _h, lI } from "./workbenchThemeService.js";
var P5n, EJt;
export { EJt, P5n };
var __wakaru_FLv_initialized = false;
export function FLv() {
if (__wakaru_FLv_initialized) return;
__wakaru_FLv_initialized = true;
"use strict";
E(), R6(), e4i(), n4i(), P5n = {
    light: {
        preferredKey: _h.PREFERRED_LIGHT_THEME,
        defaultSettingsId: lI.COLOR_THEME_LIGHT
    },
    dark: {
        preferredKey: _h.PREFERRED_DARK_THEME,
        defaultSettingsId: lI.COLOR_THEME_DARK
    },
    lightHighContrast: {
        preferredKey: _h.PREFERRED_HC_LIGHT_THEME,
        defaultSettingsId: lI.COLOR_THEME_HC_LIGHT
    },
    darkHighContrast: {
        preferredKey: _h.PREFERRED_HC_DARK_THEME,
        defaultSettingsId: lI.COLOR_THEME_HC_DARK
    }
}, EJt = [
    "light",
    "dark",
    "lightHighContrast",
    "darkHighContrast"
];

}
