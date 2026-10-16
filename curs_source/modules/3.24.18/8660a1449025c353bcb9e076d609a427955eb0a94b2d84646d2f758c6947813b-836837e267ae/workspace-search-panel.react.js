import { Di, Fa, Qe } from "./Iwo.js";
import { SR } from "./async_3.js";
import { GNn } from "./constants_24.js";
import { $Mv } from "./file-tree-loading-placeholder.react.js";
import { kJt } from "./file-tree-row-density.js";
import { R2 } from "./glass-keybinding-router-service.js";
import { Lxt } from "./glass-workspace-search-service.js";
import { Gv } from "./glassContextKeys.js";
import { Mt } from "./index_197.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
import { r1 } from "./use-command-bridge.react.js";
import { hk } from "./use-keybinding-label.react.js";
import { In } from "./use-service.react_2.js";
import { CrC } from "./use-workspace-search-result-view-state.react.js";
import { Y$v } from "./workspace-search-replace-utils.js";
import { xrC } from "./workspace-search-visible-results.js";
var J$v, eHv, Iee, Ulc, jlc, $lc, tHv, Hlc, nHv;
export { $lc, Hlc, Iee, J$v, Ulc, eHv, jlc, nHv, tHv };
var __wakaru_iHv_initialized = false;
export function iHv() {
if (__wakaru_iHv_initialized) return;
__wakaru_iHv_initialized = true;
"use strict";
E(), Mt(), $b(), SR(), Qe(), Di(), Fa(), GNn(), Gv(), kJt(), r1(), hk(), In(), R2(), Lxt(), $Mv(), CrC(), Y$v(), xrC(), J$v = {
    "--ui-file-tree-row-height": "glass-1xk1ogv",
    $$css: !0
}, eHv = {
    "--ui-file-tree-row-gap": "glass-10kbeb6",
    $$css: !0
}, Iee = {
    panel: {
        k1xSpc: "glass-78zum5",
        kXwgrk: "glass-dt5ytf",
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1t1x2f9",
        kAzted: "glass-2lwn1j",
        k7Eaqz: "glass-euugli",
        kWkggS: "glass-jbqb8w",
        kMwMTN: "glass-1wd3ewq",
        "--file-tab-search-panel-horizontal-padding": "glass-5kshz9",
        "--file-tab-search-panel-content-inset": "glass-oeu1a8",
        "--file-tab-search-panel-search-actions-right-inset": "glass-122e8wt",
        "--file-tab-search-panel-search-actions-width": "glass-a7hkaz",
        "--file-tab-search-panel-search-actions-width-with-clear": "glass-m41qua",
        "--file-tab-search-panel-trailing-action": "glass-1fnjh5v",
        "--file-tab-search-panel-replace-actions-width": "glass-13rt8lx",
        $$css: !0
    },
    rowHeight: (t)=>[
            J$v,
            {
                "--x---ui-file-tree-row-height": `${t}px` != null ? `${t}px` : void 0
            }
        ],
    rowGap: (t)=>[
            eHv,
            {
                "--x---ui-file-tree-row-gap": `${t}px` != null ? `${t}px` : void 0
            }
        ],
    inputRoot: {
        kzqmXN: "glass-h8yej3",
        kLZC3w: "glass-2kampu",
        kBCPoo: "glass-15nuqqu",
        kL6WhQ: "glass-1jfuf7k",
        kGJrpR: "glass-19smxde",
        kaIpWk: "glass-1043rbw",
        kMwMTN: "glass-1rdm5kk",
        $$css: !0
    },
    replaceInputRoot: {
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1t1x2f9",
        k7Eaqz: "glass-euugli",
        $$css: !0
    },
    inputTextarea: {
        "--cursor-placeholder-opacity": "glass-1air3mv",
        kGuDYH: "glass-11wthnw",
        kjBf7l: "glass-1uczgqu",
        k8Qsv1: "glass-qe54s2",
        kH8XJS: "glass-7xwk5j",
        $$css: !0
    },
    searchTextarea: {
        kwRFfy: "glass-16ymxtb",
        $$css: !0
    },
    inputAddon: {
        kMwMTN: "glass-19aaqeu",
        kZKoxP: "glass-1a6rlst",
        kAzted: "glass-4jlmx6",
        keoZOQ: "glass-u4j5zy",
        $$css: !0
    },
    searchInputIcon: {
        "--icon-size": "glass-3uxjpp",
        $$css: !0
    },
    replaceTextarea: {
        kwRFfy: "glass-1qz2z8q",
        $$css: !0
    },
    treeChevronIcon: {
        "--icon-size": "glass-13kiu2a",
        $$css: !0
    }
}, Ulc = 12, jlc = 24, $lc = 2, tHv = 4, Hlc = 5, nHv = 250;

}
