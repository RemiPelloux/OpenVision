import { mv } from "./editor-panel-context.react.js";
import { kJt } from "./file-tree-row-density.js";
import { jDi } from "./glass-references-service.js";
import { AXt } from "./glass-text-model-service.js";
import { xd } from "./glass-workspace-context-service.js";
import { Mt } from "./index_197.js";
import { Qs } from "./range.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
import { In } from "./use-service.react_2.js";
import { SrC } from "./use-workspace-references-collapsed-files.react.js";
import { _rC } from "./workspace-display-path.js";
import { iHv } from "./workspace-search-panel.react.js";
var rHv, S9i, qlc, zlc, sHv, dNs;
export { S9i, dNs, qlc, rHv, sHv, zlc };
var __wakaru_VrC_initialized = false;
export function VrC() {
if (__wakaru_VrC_initialized) return;
__wakaru_VrC_initialized = true;
"use strict";
E(), AXt(), Mt(), $b(), Qs(), xd(), kJt(), In(), jDi(), _rC(), mv(), SrC(), iHv(), rHv = {
    "--ui-file-tree-row-height": "glass-1xk1ogv",
    $$css: !0
}, S9i = {
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
        $$css: !0
    },
    rowHeight: (t)=>[
            rHv,
            {
                "--x---ui-file-tree-row-height": `${t}px` != null ? `${t}px` : void 0
            }
        ],
    results: {
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1t1x2f9",
        kAzted: "glass-2lwn1j",
        kORKVm: "glass-1odjw0f",
        kLKAdn: "glass-493x5y",
        kpe85a: "glass-g31tg3",
        kGO01o: "glass-cnij5n",
        kE3dHu: "glass-43mhey",
        $$css: !0
    },
    resultsEmpty: {
        kLKAdn: "glass-exx8yu",
        kGO01o: "glass-18d9i69",
        $$css: !0
    }
}, qlc = 28, zlc = 96, sHv = 12, dNs = {
    leading: "",
    match: "",
    trailing: "",
    hasLeadingEllipsis: !1,
    hasTrailingEllipsis: !1
};

}
