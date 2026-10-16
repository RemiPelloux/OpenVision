import { Qci, pWe } from "./LYd.js";
import { dy } from "./Text.js";
import { D5r } from "./dot-grid-loader.js";
import { C5r } from "./drag-context.js";
import { XSt } from "./drag-data.js";
import { fd } from "./icon.js";
import { SI1, bI1, fI1, gI1, ikt, vI1, yI1 } from "./ipa.js";
import { f2 } from "./scroll-area.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { rkt } from "./use-droppable.js";
import { createContext as y2p } from "./react-runtime/react/esm-index-production.js";
var C2p, T2p, sDa, oDa, aDa, ube, PHr, E2p;
export { C2p, E2p, PHr, T2p, aDa, oDa, sDa, ube };
var __wakaru_wI1_initialized = false;
export function wI1() {
if (__wakaru_wI1_initialized) return;
__wakaru_wI1_initialized = true;
"use strict";
E(), Va(), XSt(), C5r(), f2(), D5r(), fd(), dy(), rkt(), ikt(), C2p = 8, T2p = 2, sDa = pWe("kanban-card", ()=>Qci({
        cardId: "string",
        fromColumnId: "string"
    })), oDa = y2p(null), aDa = y2p(null), ube = {
    root: {
        kAzted: "ui-2lwn1j",
        k7Eaqz: "ui-euugli",
        kUk6DE: "ui-12lumcd",
        $$css: !0
    },
    viewport: {
        kc424l: "ui-hfbhpw",
        kphCe6: "ui-1ukjkrz",
        kC2sXz: "ui-e8dkwi",
        $$css: !0
    },
    columns: {
        kOIVth: "ui-ehausa",
        kZCmMZ: "ui-1gltl91",
        kwRFfy: "ui-469ih9",
        kzqmXN: "ui-ugqocm",
        k7Eaqz: "ui-gqtt45",
        ks0D6T: "ui-1x1rfll",
        $$css: !0
    },
    pageColumns: {
        kB7OPa: "ui-9f619",
        kwRFfy: "ui-1rkwzo6",
        kZCmMZ: "ui-18edtka",
        $$css: !0
    },
    column: {
        k1xSpc: "ui-78zum5",
        kAzted: "ui-2lwn1j",
        k7Eaqz: "ui-12rczxh",
        kzQI83: "ui-1c4vz4f",
        kmuXW: "ui-2lah0s",
        kXwgrk: "ui-dt5ytf",
        k71WvV: "ui-14z9mp",
        k5xd4v: "ui-1bhewko",
        $$css: !0
    },
    columnBasis: (t)=>[
            {
                kCS8Yb: t != null ? "ui-1mz2wy7" : t,
                $$css: !0
            },
            {
                "--x-flexBasis": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t)
            }
        ],
    columnGlyph: {
        k1xSpc: "ui-3nfvp2",
        kzqmXN: "ui-ncpac4",
        kZKoxP: "ui-1d74i34",
        kmuXW: "ui-2lah0s",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        $$css: !0
    },
    columnTitleRow: {
        k1xSpc: "ui-78zum5",
        k7Eaqz: "ui-euugli",
        kwnvtZ: "ui-1a02dak",
        kGNEyG: "ui-1pha0wt",
        kOIVth: "ui-pkkfsy",
        $$css: !0
    },
    neutralTitle: {
        kMwMTN: "ui-19aaqeu",
        $$css: !0
    },
    columnCount: {
        kMwMTN: "ui-4b2ntj",
        kcqcaj: "ui-ss6m8b",
        $$css: !0
    },
    columnScroll: {
        kAzted: "ui-2lwn1j",
        kUk6DE: "ui-12lumcd",
        $$css: !0
    },
    cardTitle: {
        k7Eaqz: "ui-euugli",
        kHjlTd: "ui-j0a0fe",
        $$css: !0
    },
    description: {
        k7Eaqz: "ui-euugli",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kMwMTN: "ui-19aaqeu",
        $$css: !0
    }
}, PHr = {
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
}, E2p = {
    Root: gI1,
    Column: fI1,
    ColumnHeader: vI1,
    ColumnBody: bI1,
    Card: yI1,
    NewItem: SI1
};

}
