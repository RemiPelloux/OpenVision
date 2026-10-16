import { ZDe } from "./glass-theme-service.js";
import { Ny } from "./glass-theme-service.types.js";
import { E } from "./tslib.es6.js";
var gsc, fsc, vsc;
export { fsc, gsc, vsc };
var __wakaru__sc_initialized = false;
export function _sc() {
if (__wakaru__sc_initialized) return;
__wakaru__sc_initialized = true;
"use strict";
E(), ZDe(), gsc = {
    icon: "color-mode",
    label: "System"
}, fsc = {
    [Ny.Light]: {
        icon: "sun",
        label: "Cursor Light"
    },
    [Ny.LightColorblind]: {
        icon: "eye",
        label: "Cursor Light Colorblind"
    },
    [Ny.LightHighContrast]: {
        icon: "binoculars",
        label: "Cursor Light High Contrast"
    },
    [Ny.Dark]: {
        icon: "moon",
        label: "Cursor Dark"
    },
    [Ny.DarkColorblind]: {
        icon: "eye",
        label: "Cursor Dark Colorblind"
    },
    [Ny.HighContrast]: {
        icon: "binoculars",
        label: "Cursor Dark High Contrast"
    }
}, vsc = {
    light: {
        icon: "sun",
        label: "Light"
    },
    dark: {
        icon: "moon",
        label: "Dark"
    },
    lightHighContrast: {
        icon: "binoculars",
        label: "Light \xB7 High contrast"
    },
    darkHighContrast: {
        icon: "binoculars",
        label: "Dark \xB7 High contrast"
    }
};

}
