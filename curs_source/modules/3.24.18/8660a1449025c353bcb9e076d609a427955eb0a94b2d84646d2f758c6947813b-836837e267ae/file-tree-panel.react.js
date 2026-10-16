import { Hn } from "./dom_2.js";
import { mv } from "./editor-panel-context.react.js";
import { UMv } from "./file-tree-action-icon-button.react.js";
import { $Mv } from "./file-tree-loading-placeholder.react.js";
import { Lnc } from "./file-tree-panel-context-menu.react.js";
import { kJt } from "./file-tree-row-density.js";
import { zMv } from "./file-tree-workspace-layout.react.js";
import { cS } from "./glass-clipboard-service.js";
import { yp } from "./glass-command-service.js";
import { hv } from "./glass-file-service.js";
import { SYe } from "./glass-file-tree-context-menu.js";
import { ZRt } from "./glass-file-tree-edit-utils.js";
import { gJt } from "./glass-file-tree-service.js";
import { aN0 } from "./glass-folder-reveal.js";
import { yJt } from "./glass-label-service.js";
import { Hv } from "./glassActiveAgentService.js";
import { Mt } from "./index_197.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { qPs } from "./use-active-file-tree-workspace.react.js";
import { zIs } from "./use-file-provider-change-epoch.react.js";
import { KMv } from "./use-file-tree-load-state.react.js";
import { wN0 } from "./use-file-tree-panel-dnd.js";
import { IN0 } from "./use-file-tree-panel-paste.js";
import { MN0 } from "./use-file-tree-row-create-actions.react.js";
import { M5i } from "./use-remote-workspace-connection.react.js";
import { In } from "./use-service.react_2.js";
var h5n, JMv;
export { JMv, h5n };
var __wakaru_eDv_initialized = false;
export function eDv() {
if (__wakaru_eDv_initialized) return;
__wakaru_eDv_initialized = true;
"use strict";
E(), Mt(), Hn(), Bt(), hv(), Hv(), kJt(), zIs(), M5i(), In(), cS(), yp(), yJt(), SYe(), ZRt(), gJt(), aN0(), mv(), UMv(), $Mv(), Lnc(), zMv(), qPs(), KMv(), wN0(), IN0(), MN0(), h5n = {
    fileTreeRoot: {
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1t1x2f9",
        kAzted: "glass-2lwn1j",
        $$css: !0
    },
    fileTreeSpacer: {
        kLKAdn: "glass-f6zju3",
        kpe85a: "glass-g31tg3",
        kGO01o: "glass-cnij5n",
        kE3dHu: "glass-43mhey",
        $$css: !0
    },
    fileTreeSticky: {
        kbCHJM: "glass-6qt6f",
        kCIrl2: "glass-7zl9wm",
        $$css: !0
    },
    fileTreeEmpty: {
        kMwMTN: "glass-4b2ntj",
        $$css: !0
    },
    fileTreeLoading: {
        kWkggS: "glass-jbqb8w",
        kMwMTN: "glass-4b2ntj",
        $$css: !0
    }
}, JMv = {
    root: h5n.fileTreeRoot,
    spacerContainer: h5n.fileTreeSpacer,
    stickyContainer: h5n.fileTreeSticky,
    empty: h5n.fileTreeEmpty,
    loading: h5n.fileTreeLoading
};

}
