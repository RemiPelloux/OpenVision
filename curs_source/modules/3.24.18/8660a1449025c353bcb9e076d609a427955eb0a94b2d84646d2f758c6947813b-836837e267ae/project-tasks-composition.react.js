import { Mt } from "./index_197.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var YKe, Tdv, gzl, Edv;
export { Edv, Tdv, YKe, gzl };
var __wakaru_fzl_initialized = false;
export function fzl() {
if (__wakaru_fzl_initialized) return;
__wakaru_fzl_initialized = true;
"use strict";
E(), Mt(), Bt(), YKe = {
    taskList: {
        kOIVth: "glass-1lin62n",
        $$css: !0
    },
    listItem: {
        kLWn49: "glass-1jjo3f5",
        $$css: !0
    },
    notesLink: {
        "--notes-chip-icon-color": "glass-1qe5mz6",
        kMwMTN: "glass-1wd3ewq glass-1p8fkj",
        k63SB2: "glass-1v8v64w",
        kMnn75: "glass-ujl8zx",
        kmVMDM: "glass-6ur5ct",
        k1TLXF: "glass-1ix3cnw",
        kNySMw: "glass-yi4chj",
        kcSHmL: "glass-rys4gj",
        kGzVvX: "glass-1sjiwpj",
        $$css: !0
    },
    notesHeading2: {
        kMwMTN: "glass-1wd3ewq",
        kGuDYH: "glass-1pz8kdr",
        k63SB2: "glass-1v8v64w",
        kLKAdn: "glass-179g5vw glass-10zg81t",
        $$css: !0
    },
    notesHeading3: {
        kMwMTN: "glass-1wd3ewq",
        kGuDYH: "glass-10siri3",
        k63SB2: "glass-1v8v64w",
        kLKAdn: "glass-falczv glass-10zg81t",
        $$css: !0
    },
    notesHeading4: {
        kMwMTN: "glass-1wd3ewq",
        kGuDYH: "glass-rv4cvt",
        k63SB2: "glass-1v8v64w",
        kLKAdn: "glass-14uo3rm glass-10zg81t",
        $$css: !0
    },
    notesSectionHeading: {
        kMwMTN: "glass-4b2ntj",
        kGuDYH: "glass-1wm8ruf",
        k63SB2: "glass-20ajya",
        kb6lSQ: "glass-14s4slr",
        kLWn49: "glass-spwq11",
        kLKAdn: "glass-14uo3rm glass-10zg81t",
        $$css: !0
    },
    tldrCard: {
        kzqmXN: "glass-ihbwum",
        k7Eaqz: "glass-euugli",
        km5ZXQ: "glass-22nk9t",
        koQZXg: "glass-75gtxk",
        kaIpWk: "glass-1828qc5",
        kWkggS: "glass-flfp0o",
        $$css: !0
    }
}, Tdv = {
    ul: YKe.taskList,
    li: YKe.listItem
}, gzl = {
    generatedChildStyles: Tdv,
    taskMarkerIconColor: "quaternary"
}, Edv = {
    ...gzl,
    generatedChildStyles: {
        a: YKe.notesLink,
        h2: YKe.notesHeading2,
        h3: YKe.notesHeading3,
        h4: YKe.notesHeading4,
        h5: YKe.notesSectionHeading,
        li: YKe.listItem
    }
};

}
