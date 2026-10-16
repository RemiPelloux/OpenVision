import { ppf } from "./Sidebar.js";
import { fC } from "./Text.js";
import { Cpf, Epf, Spf, Tpf, _pf, bpf, kpf, wpf, ypf } from "./f0s.js";
import { ED } from "./scroll-area.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
import { createContext as gpf } from "./react-runtime/react/esm-index-production.js";
var IDe, G9l, bEs, V9l;
export { G9l, IDe, V9l, bEs };
var __wakaru_xpf_initialized = false;
export function xpf() {
if (__wakaru_xpf_initialized) return;
__wakaru_xpf_initialized = true;
"use strict";
x(), Oc(), ppf(), ED(), fC(), IDe = {
    gutter: {
        k71WvV: "ui-8ky9kg",
        keTefX: "ui-2imrbv",
        $$css: !0
    },
    sectionStack: {
        kOIVth: "ui-1qhopif",
        $$css: !0
    },
    content: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kLKAdn: "ui-uve7l6",
        kwRFfy: "ui-1w8q5y7",
        kGO01o: "ui-1rgtt3y",
        kZCmMZ: "ui-9s6atj",
        $$css: !0
    },
    contentFlush: {
        kLKAdn: "ui-exx8yu",
        kwRFfy: "ui-13botnq",
        kGO01o: "ui-18d9i69",
        kZCmMZ: "ui-1sudrl5",
        $$css: !0
    },
    titleRow: {
        k1xSpc: "ui-78zum5",
        k7Eaqz: "ui-euugli",
        kwnvtZ: "ui-1a02dak",
        kGNEyG: "ui-1pha0wt",
        kOIVth: "ui-pkkfsy",
        $$css: !0
    },
    count: {
        kcqcaj: "ui-ss6m8b",
        $$css: !0
    },
    empty: {
        kzqmXN: "ui-h8yej3",
        k9WMMc: "ui-2b8uid",
        kLKAdn: "ui-1t8xvyj",
        kwRFfy: "ui-19bzwdx",
        kGO01o: "ui-usxwy5",
        kZCmMZ: "ui-v853mj",
        $$css: !0
    },
    overflowToggleRoot: {
        kE3dHu: "ui-1uhho1l",
        $$css: !0
    },
    overflowToggleIcon: {
        kzqmXN: "ui-y1keyj",
        $$css: !0
    }
}, G9l = {
    default: {
        kMwMTN: "ui-1lbmi28",
        $$css: !0
    },
    accent: {
        kMwMTN: "ui-scuw3h",
        $$css: !0
    },
    blue: {
        kMwMTN: "ui-101qeuz",
        $$css: !0
    },
    green: {
        kMwMTN: "ui-p6nzhx",
        $$css: !0
    },
    yellow: {
        kMwMTN: "ui-1hn9r2r",
        $$css: !0
    },
    orange: {
        kMwMTN: "ui-4qtrdv",
        $$css: !0
    },
    red: {
        kMwMTN: "ui-ku4wcm",
        $$css: !0
    },
    purple: {
        kMwMTN: "ui-1b0hn6l",
        $$css: !0
    },
    magenta: {
        kMwMTN: "ui-pwp9en",
        $$css: !0
    },
    cyan: {
        kMwMTN: "ui-1rbygr4",
        $$css: !0
    }
}, bEs = gpf(null), V9l = {
    Root: _pf,
    ContentInset: bpf,
    Empty: ypf,
    Section: Spf,
    SectionHeader: kpf,
    Items: wpf,
    Row: Cpf,
    Item: Tpf,
    OverflowToggle: Epf
};

}
