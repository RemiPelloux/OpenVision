import { Bm1, Fm1, Lm1, Om1, Um1 } from "./ipa.js";
import { CAa } from "./mix-opacity.js";
import { E } from "./tslib.es6.js";
var IAa, xAa, r1p, Wwn, Gwn, s1p, AAa, o1p, gjr, m_i, RAa;
export { AAa, Gwn, IAa, RAa, Wwn, gjr, m_i, o1p, r1p, s1p, xAa };
var __wakaru_PAa_initialized = false;
export function PAa() {
if (__wakaru_PAa_initialized) return;
__wakaru_PAa_initialized = true;
"use strict";
E(), CAa(), IAa = {
    red: "red",
    orange: "orange",
    yellow: "yellow",
    green: "green",
    cyan: "cyan",
    blue: "blue",
    magenta: "magenta",
    purple: "violet"
}, xAa = Lm1(IAa), r1p = [
    "added",
    "modified",
    "removed",
    "untracked"
], Wwn = {
    added: "green",
    modified: "yellow",
    removed: "red",
    untracked: "cyan"
}, Gwn = "blue", s1p = [
    "danger",
    "success",
    "warning"
], AAa = {
    danger: "red",
    success: "green",
    warning: "yellow"
}, o1p = {
    danger: "danger",
    success: "success",
    warning: "warn"
}, gjr = [
    "primary",
    "secondary",
    "tertiary",
    "quaternary"
], m_i = [
    ...Om1(),
    ...Fm1(),
    ...Bm1(),
    ...Um1()
], RAa = {
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
