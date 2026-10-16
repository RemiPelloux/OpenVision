import { _sc } from "./glass-appearance.shared.js";
import { a5 } from "./glass-dialog-service.js";
import { hv } from "./glass-file-service.js";
import { Zu } from "./glass-log-service.js";
import { zc } from "./glass-notification-service.js";
import { s4i } from "./glass-palette-item-chevron.react.js";
import { ZDe } from "./glass-theme-service.js";
import { Mt } from "./index_197.js";
import { Ki } from "./network.js";
import { eq0 } from "./theme-palette-search.js";
import { Y5v } from "./theme-preview.react.js";
import { WMs } from "./theme-slot.js";
import { E } from "./tslib.es6.js";
import { msc } from "./use-appearance-config.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { In } from "./use-service.react_2.js";
var T2t, Z4v, Q4v, J4v;
export { J4v, Q4v, T2t, Z4v };
var __wakaru_sq0_initialized = false;
export function sq0() {
if (__wakaru_sq0_initialized) return;
__wakaru_sq0_initialized = true;
"use strict";
E(), a5(), Mt(), Ki(), hv(), msc(), Ru(), In(), ZDe(), Zu(), zc(), _sc(), Y5v(), s4i(), WMs(), eq0(), T2t = 14, Z4v = {
    name: "Theme files",
    extensions: [
        "yaml",
        "yml",
        "json"
    ]
}, Q4v = [
    "light",
    "dark",
    "lightHighContrast",
    "darkHighContrast"
], J4v = {
    light: "Light",
    dark: "Dark",
    lightHighContrast: "Light High Contrast",
    darkHighContrast: "Dark High Contrast"
};

}
