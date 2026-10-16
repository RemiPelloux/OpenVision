import { $Xf, BXf, FXf, OXf, UXf } from "./f0s.js";
import { NXf } from "./mix-opacity.js";
import { x } from "./tslib.es6.js";
var nau, iau, rau, sau, oau, aau, cau, oFi, Y2s, X2s;
export { X2s, Y2s, aau, cau, iau, nau, oFi, oau, rau, sau };
var __wakaru_lau_initialized = false;
export function lau() {
if (__wakaru_lau_initialized) return;
__wakaru_lau_initialized = true;
"use strict";
x(), NXf(), nau = {
    red: "red",
    orange: "orange",
    yellow: "yellow",
    green: "green",
    cyan: "cyan",
    blue: "blue",
    magenta: "magenta",
    purple: "violet"
}, iau = OXf(nau), rau = [
    "added",
    "modified",
    "removed",
    "untracked"
], sau = "blue", oau = [
    "danger",
    "success",
    "warning"
], aau = {
    danger: "red",
    success: "green",
    warning: "yellow"
}, cau = {
    danger: "danger",
    success: "success",
    warning: "warn"
}, oFi = [
    "primary",
    "secondary",
    "tertiary",
    "quaternary"
], Y2s = [
    ...FXf(),
    ...BXf(),
    ...UXf(),
    ...$Xf()
], X2s = {
    all: {
        border: {
            primary: 56,
            secondary: 32,
            tertiary: 20,
            quaternary: 12
        }
    },
    hue: {
        text: {
            primary: 100,
            secondary: 78,
            tertiary: 64,
            quaternary: 40
        },
        icon: {
            primary: 100,
            secondary: 70,
            tertiary: 56,
            quaternary: 32
        },
        bg: {
            primary: 100,
            secondary: 12,
            tertiary: 8,
            quaternary: 6,
            quinary: 4
        }
    },
    git: {
        text: {
            primary: 100,
            secondary: 78,
            tertiary: 64,
            quaternary: 40
        },
        icon: {
            primary: 100,
            secondary: 70,
            tertiary: 56,
            quaternary: 32
        },
        bg: {
            primary: 100,
            secondary: 24,
            tertiary: 12,
            quaternary: 8
        }
    },
    accent: {
        text: {
            secondary: 78,
            tertiary: 64,
            quaternary: 40
        },
        icon: {
            secondary: 70,
            tertiary: 56,
            quaternary: 32
        },
        bg: {
            secondary: 24,
            tertiary: 12,
            quaternary: 8,
            quinary: 4
        }
    },
    status: {
        text: {
            primary: 100,
            secondary: 78,
            tertiary: 64,
            quaternary: 40
        },
        icon: {
            primary: 100,
            secondary: 70,
            tertiary: 56,
            quaternary: 32
        },
        bg: {
            primary: 100,
            secondary: 20,
            tertiary: 18,
            quaternary: 10,
            quinary: 8
        }
    }
};

}
